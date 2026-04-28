# PDF Document: (Saturation Parameter - 2004 Peter Staanum) Quantum Optics with Trapped Calcium Ions.pdf

**File Path:** (Saturation Parameter - 2004 Peter Staanum) Quantum Optics with Trapped Calcium Ions.pdf

**Processed Date:** 2026-02-10T18:14:21.263Z

**File Size:** 5029.72 KB

**Total Pages:** 202

**Extracted Pages:** 202

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 95

**Collection:** Ion Trap > Fundamental

---

## Extracted Text Content

Quantum Optics with Trapped
Calcium Ions
Peter Staanum
Danish National Research Foundation Center for Quantum Optics – QUANTOP Institute of Physics and Astronomy University of Aarhus, Denmark
PhD thesis February 2004



Quantum Optics with Trapped
Calcium Ions
Peter Staanum
Danish National Research Foundation Center for Quantum Optics – QUANTOP Institute of Physics and Astronomy University of Aarhus, Denmark
PhD thesis February 2004

ii
This thesis is submitted to the Faculty of Science at the University of Aarhus, Denmark, in order to fulfill the requirements for obtaining the PhD degree in Physics. The studies have been carried out under the supervision of Ass. Prof. Michael Drewsen in the Ion Trap Group at the Institute of Physics and Astronomy, University of Aarhus from August 1999 to February 2004.

iii
Contents
Preface vii
List of publications ix
1 Introduction 1 1.1 Quantum optics with cold trapped ions . . . . . . . . . . . . . . . . . . 1 1.2 Quantum optics with Ca+ ions in Aarhus . . . . . . . . . . . . . . . . . 3 1.3 Outline of the thesis . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4
2 Atom-light interactions 5 2.1 A free two-level atom . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5 2.1.1 Interaction with a travelling-wave light-field . . . . . . . . . . . . 6 2.1.2 Inclusion of spontaneous emission . . . . . . . . . . . . . . . . . . 9 2.2 Trapped two-level atoms interacting with a light-field . . . . . . . . . . . 10 2.2.1 A single trapped atom . . . . . . . . . . . . . . . . . . . . . . . . 11 2.2.2 Multiple ions . . . . . . . . . . . . . . . . . . . . . . . . -
. . . . . 13
3 Laser cooling of trapped ions 15 3.1 Doppler cooling of trapped ions . . . . . . . . . . . . . . . . . . . . . . . 16 3.1.1 Doppler cooling of a free two-level ion . . . . . . . . . . . . . . . 16 3.1.2 The 40Ca+ ion . . . . . . . . . . . . . . . . . . . . . . . . . . . . 18 3.1.3 Doppler cooling of the 40Ca+ ion . . . . . . . . . . . . . . . . . . 19 3.2 Ion strings in a three-dimensional harmonic potential . . . . . . . . . . . 20 3.3 Sideband cooling . . . . . . . . . . . . . . . . . . . . . -
. . . . . . . . . . 21 3.3.1 Rate equation description in the Lamb-Dicke limit . . . . . . . . 22 3.3.2 Rate equation with second-order contributions . . . . . . . . . . 26 3.4 Sideband cooling of the 40Ca+ ion . . . . . . . . . . . . . . . . . . . . . 28 3.4.1 The sideband-cooling scheme . . . . . . . . . . . . . . . . . . . . 28 3.4.2 Discussion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 33 3.5 Quantum Monte Carlo simulations of the sideband-cooling scheme . . . 34 3.5.1 Theor-
y . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 34 3.5.2 Simulation results . . . . . . . . . . . . . . . . . . . . . . . . . . 35 3.5.3 Comparison to a rate equation model . . . . . . . . . . . . . . . 39 3.5.4 Conclusion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 44 3.6 Measuring the population of motional states . . . . . . . . . . . . . . . . 45

iv CONTENTS
4 Internal state detection 47 4.1 Internal state detection using shelving . . . . . . . . . . . . . . . . . . . 47 4.2 State-selective shelving using STIRAP . . . . . . . . . . . . . . . . . . . 48 4.2.1 STIRAP – general theory . . . . . . . . . . . . . . . . . . . . . . 48 4.2.2 State-selective shelving in 40Ca+ using STIRAP . . . . . . . . . 50 4.2.3 STIRAP in a five-level system . . . . . . . . . . . . . . . . . . . 53 4.3 State-selective shelving in 40Ca+ using a Raman transition . . . . . . .-
 55 4.4 Conclusion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 56
5 Quantum logic with trapped ions 57 5.1 Quantum gates . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 57 5.1.1 Single-qubit gates . . . . . . . . . . . . . . . . . . . . . . . . . . 58 5.1.2 Two-qubit gates . . . . . . . . . . . . . . . . . . . . . . . . . . . 58 5.2 Quantum gates using trapped ions . . . . . . . . . . . . . . . . . . . . . 59 5.2.1 The Cirac-Zoller proposal . . . . . . . . . . . . . . . . . . . . . . 60 5.2.2 The Mølmer-Sørensen proposal . . . . . . . . . . . . .-
 . . . . . . 61 5.2.3 Other gate proposals . . . . . . . . . . . . . . . . . . . . . . . . . 62 5.2.4 Practical large-scale quantum computation with trapped ions? . 63 5.3 Quantum logic operations in the 40Ca+ ion . . . . . . . . . . . . . . . . 64
6 Applications of optical dipole potentials in trapped-ion quantum logic 65 6.1 Trapped ions and optical dipole potentials . . . . . . . . . . . . . . . . . 65 6.2 A geometric Controlled-Z gate using optical dipole forces . . . . . . . . 67 6.2.1 Implementation in alkaline earth ions . . . . . . . . . . . . . . . 70 6.2.2 Error sources . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 78 6.2.3 Discussion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 81 6.3 Individual addres-
sing of trapped ions . . . . . . . . . . . . . . . . . . . . 82 6.3.1 Trapped-ion quantum logic utilizing position-dependent ac Stark shifts . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 83 6.3.2 Discussion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 88
7 The linear Paul trap 91 7.1 Linear Paul trap theory . . . . . . . . . . . . . . . . . . . . . . . . . . . 91 7.2 Trap design and construction . . . . . . . . . . . . . . . . . . . . . . . . 94 7.2.1 Design considerations . . . . . . . . . . . . . . . . . . . . . . . . 94 7.2.2 Electrode shape and dimensions . . . . . . . . . . . . . . . . . . 96 7.2.3 Trap construction . . . . . . . . . . . . . . . . . . . . . . . . . . 99
8 Experimental equipment and methods 101 8.1 Vacuum chamber . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 101 8.2 Trap voltage supplies . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 103 8.2.1 RF-supplies . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 104 8.2.2 DC-supply . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 106 8.3 Magnetic field coils . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 106 8.4 Laser light sources for Ca+ ions -
. . . . . . . . . . . . . . . . . . . . . . . 108 8.4.1 397 nm sources . . . . . . . . . . . . . . . . . . . . . . . . . . . . 108 8.4.2 Infrared sources . . . . . . . . . . . . . . . . . . . . . . . . . . . . 109 8.5 Laser light control . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 109 8.5.1 397 nm sources . . . . . . . . . . . . . . . . . . . . . . . . . . . . 110

CONTENTS v
8.5.2 Infrared sources . . . . . . . . . . . . . . . . . . . . . . . . . . . . 111 8.6 Ion production . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 113 8.7 Imaging system . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 114
9 Trap characterization and ion mass measurements 117 9.1 Measuring the trap parameters . . . . . . . . . . . . . . . . . . . . . . . 117 9.1.1 Experimental setup . . . . . . . . . . . . . . . . . . . . . . . . . . 118 9.1.2 Theory: The driven damped harmonic oscillator . . . . . . . . . 121 9.1.3 Axial trap frequencies . . . . . . . . . . . . . . . . . . . . . . . . 121 9.1.4 Radial trap frequencies . . . . . . . . . . . . . . . . . . . . . . . 123 9.2 Micromotion . . . . . . . . . . . . . . . . -
. . . . . . . . . . . . . . . . . 138 9.3 Ion mass measurements . . . . . . . . . . . . . . . . . . . . . . . . . . . 139 9.3.1 Theory . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 140 9.3.2 Experiment . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 145
10 Shelving in the metastable 3d 2D5/2 state 151 10.1 Lifetime measurement of the 3d 2D5/2 state . . . . . . . . . . . . . . . . 151 10.1.1 Experimental setup . . . . . . . . . . . . . . . . . . . . . . . . . . 152 10.1.2 Data analysis . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 153 10.1.3 Result and conclusion . . . . . . . . . . . . . . . . . . . . . . . . 164 10.2 Internal state detection revisited . . . . . . . . . . . . . . . . . . . . . . 165
11 Summary and outlook 167
A Derivations 169 A.1 Sideband cooling with second-order contributions to the rate equation . 169 A.1.1 Solution to the second-order rate equation . . . . . . . . . . . . . 169 A.1.2 Derivation of Eqs. (3.3.26) and (3.3.27) . . . . . . . . . . . . . . 170 A.2 Displacements and phases in the geometric Controlled-Z gate . . . . . . 171 A.3 The coupled motion of two trapped ions . . . . . . . . . . . . . . . . . . 172
B The Ca+ ion 175 B.1 Abundance of Ca-isotopes . . . . . . . . . . . . . . . . . . . . . . . . . . 175 B.2 Transitions in the 40Ca+ ion . . . . . . . . . . . . . . . . . . . . . . . . . 175 B.3 Zeeman-splitting in the 40Ca+ ion . . . . . . . . . . . . . . . . . . . . . 177
C Sideband cooling – quantum Monte Carlo simulations 179 C.1 The simulation program . . . . . . . . . . . . . . . . . . . . . . . . . . . 179 C.2 Time evolution of coefficients . . . . . . . . . . . . . . . . . . . . . . . . 180
Bibliography 183



vii
Preface
The present thesis is based on my work during the last four and a half years in the Ion Trap Group at the Institute of Physics and Astronomy, University of Aarhus, under the supervision of Michael Drewsen. The work has given me the opportunity to explore the fascinating field of quantum optics with trapped ions, to work with lasers, vacuum technology and electronics as well as doing earth bound things like drilling a hole in a piece of metal. All these aspects has made the work very varied and exc-
iting. Based on the previous work and experience in the Ion Trap Group, the work has focussed on setting up an experiment for quantum optics studies involving few trapped ions. There are many different parts in the experimental setup and many people has given their contribution to the project. We have now seen the first results of this work, but there is more work to do and hopefully many more results to come. In the thesis I attempt to give an overview of the project as a whole. Some sections may-
 be very basic knowledge for the experienced ion trap physicist or quantum optician. These parts will hopefully be appreciated by students who will work on the project in the future. Other chapters are very detailed, reflecting which parts of the project the author mainly has been involved in.
During my years at the institute I have met and co-operated with several people, who deserves a few words. First of all, Michael Drewsen is acknowledged for initiating this very interesting project, for competently guiding the work, teaching me ion trap physics and much more, and for interesting physics discussions. In the Ion Trap Group, I also had the pleasure of working with several other persons. In the first years, I enjoyed working with Liv Hornekær, Niels Kjærgaard, Anne Marie Thommesen and-
 Kristian Mølhave, who all helped me find my way in the lab, and with Zelinda Videsen, Kristian Støchkel and Andy Brøner. More recently, I have had the pleasure of working together with fellow PhD student Anders Mortensen, who is acknowledged for proof-reading this thesis, and with Randi Martinussen, Inger Jensen, Jens Lindballe, Frank Jensen and Niels Nissen. Dirk Voigt spend two years with us as a PostDoc and deserves credit for his important contributions to the project, especially for building-
 lasers. More recently, Jens Lykke Sørensen has joined the group and contributed to the present work. Randi, Inger and Jens are all acknowledged for keeping the good mood during the numerous late night hours in the lab. Finally, I would like to thank Grete Flarup for proof-reading this thesis. The technical staff at the Institute has been very important for this project. The people in the workshop managed by Uffe Simonsen are acknowledged for their contributions and Torben Thomsen is acknowledged -
for his invaluable advice when I was trying to

viii PREFACE
handle the machines myself. Thanks to the ‘vacuum-guys’, Karsten Rasmussen and Jens Vestergaard, for their assistance and to Folmer Lyckegaard in the chemistry lab. A special thanks to Robert Stensgaard, Erik Søndergaard, Helge Wahlgreen, Frank Mikkelsen, Michael Jensen and Tonny Korsbjerg in the electronics department for building all the possible and almost impossible electronics devices which allow us to do experiments, and for always being approachable. From the scientific staff, I would like -
to thank Klaus Mølmer for answering my questions when the theory became too tough and for a fruitful collaboration on some of the work presented in Chap. 6. Thanks also to Erik Lægsgaard for revealing his secrets about all sorts of ultrahigh vacuum compatible materials. During all the years I have also met many friendly people at the institute with whom I have talked about everything but physics (and physics of course) – thank you all! Especially though, I should mention Peter Arnborg, Thomas Laus-
tsen, Brian Julsgaard and Kjartan Kinch, with whom I have spend many enjoyable days during the last more than 8 years. Finally, a very big thank you to my parents and sister for their support during all my years of studying physics and to Astrid for proof-reading this thesis and for her support and understanding during these last months of writing.
Financial support from QUANTOP, the Danish National Research Foundation Center for Quantum Optics, and from ACAP, the Aarhus Center for Atomic Physics, funded by the Danish National Research Foundation, is gratefully acknowledged.
Aarhus, Denmark Peter Staanum February, 2004

ix
List of Publications
[I] P. Staanum, and M. Drewsen, Trapped-ion quantum logic utilizing position-dependent ac Stark shifts, Phys. Rev. A 66, 040302(R) (2002).
[II] M. Drewsen, I. Jensen, J. Lindballe, N. Nissen, R. Martinussen, A. Mortensen, P. Staanum, and D. Voigt, Ion Coulomb crystals: a tool for studying ion processes, Int. J. Mass. Spect. 229, 83 (2003).
[III] P. Staanum, I. S. Jensen, R. Martinussen, D. Voigt, and M. Drewsen, Lifetime measurement of the metastable 3d 2D5/2 state in the 40Ca+ ion using the shelving technique on a few-ion string, Phys. Rev. A 69, 032503 (2004).
[IV] A. Mortensen, J. J. T. Lindballe, I. S. Jensen, P. Staanum, D. Voigt, and M. Drewsen, Isotope shifts of the 4s2 1S0 → 4s5p 1P1 transition and hyperfine splitting of the 4s5p 1P1 state in calcium, Phys. Rev. A 69, 042502 (2004).
[V] M. Drewsen, A. Mortensen, R. Martinussen, P. Staanum, and J. L. Sørensen, Non-destructive identification of cold and extremely localized single molecular ions. Submitted for publication.
[VI] P. Staanum, M. Drewsen, and K. Mølmer, A geometric quantum gate for ions based on optical dipole forces induced by Gaussian beams. Manuscript in preparation.



1
Chapter 1
Introduction
1.1 Quantum optics with cold trapped ions
One of the fathers of quantum mechanics, Erwin Schro ̈dinger, once said 1
” . . . we never experiment with just one electron or atom or (small) molecule.”
-E. Schro ̈dinger, 1952.
Today the situation is, however, quite different, because single or several ions or atoms can be trapped, e.g., by various combinations of electric and/or magnetic fields, and used in experiments. Moreover, the development of so-called laser cooling methods, which started about 30 years ago, has enabled experimentalists to routinely cool trapped ions or atoms to temperatures only a fraction of a degree above absolute zero. Owing to this level of experimental control, cold and trapped ions and atom-
s have become unique test cases for the study of many effects within the field of quantum optics.
In parallel with the development in laser cooling and in quantum optics in general, computer chips have become smaller and smaller and faster and faster. Despite this, one never finds them fast enough! This is particularly true for computer simulations of large quantum systems, because the size of the computational task, i.e., the number of variables to keep track of, grows exponentially with the number of particles in the quantum system. To overcome this problem, Richard Feynman put forward the i-
dea of performing such simulations by the use of another quantum system - or a quantum simulator. This was in 1982 and only a few years later, in 1985, David Deutsch came up with the notion of a quantum computer, i.e., a computing device based on quantum mechanical principles, which can simulate any physical system in a time which only grows polynomially with the size of the system. In addition to simulating quantum systems, a quantum computer can also solve computational tasks, which are intracta-
ble on a classical computer. This was demonstrated by the quantum algorithms constructed by Peter Shor [2] and Lov
1As quoted in Ref. [1].

2 Chapter 1 - Introduction
Figure 1.1: Simple illustration of the Cirac-Zoller proposal [4]. A string of ions trapped in a harmonic potential is illuminated by laser beams which can address the ions individually. Internal states of the ions define the qubit states |↓〉 and |↑〉.
Grover [3], which can factorize large numbers and search an unordered database 2, respectively, faster than any classical algorithm. Now, what does a quantum computer look like? Recall first, that a classical computer performs logic operations on binary numbers, where each binary digit, a bit, can assume the value 0 or 1. In quantum logic the basic unit is the quantum bit, or qubit, i.e., a twolevel quantum system, which can be in a superposition of states, |↓〉 and |↑〉, representing the values 0 a-
nd 1. A physical realization of a quantum computer consists of several qubits, on which elementary quantum logic operations, so-called quantum gates, can be performed. Owing to the high degree of experimental control over trapped and lasercooled ions, they are very attractive candidates for implementation of quantum logic. Specifically, it was proposed by Ignacio Cirac and Peter Zoller in 1995 [4] to use a string of trapped ions, cooled to their motional ground-state in the trap, as a physical sys-
tem, on which quantum gates can be performed by manipulating the quantum states of the ions with laser pulses (see Fig. 1.1). Although many studies involving cold trapped ions had already been done before the Cirac-Zoller proposal, it is probably fair to say that there has been a growing interest in the field of quantum optics with cold trapped ions ever since. In addition to the relevance for quantum computation, this interest is motivated by the fact that a string of cold trapped ions is highly -
relevant for the creation of so-called entangled states, which are interesting for fundamental studies of quantum mechanics, but also useful in connection with spectroscopy [5] and in quantum information [6]. An entangled state can be defined as a quantum state of two or more quantum systems, whose common wavefunction cannot be separated into a product of wavefunctions for any subset of the systems 3. One example of an entangled state of two two-level quantum systems with internal states |↓〉 and |-
↑〉, e.g., two ions, is the following:
Φ = |↓〉 |↓〉 + |↑〉 |↑〉
√2 . (1.1.1)
According to the probability interpretation of quantum mechanics, this state has the property that if we measure the state of one particle to be |↓〉 (|↑〉), then the quantum state of the other particle will collapse onto |↓〉 (|↑〉), even if the particles are
2An example of an unordered database is the phone-numbers in a phone book. Suppose a hotlooking girl gives a young man her phone number, but he doesn’t know her name and desperately wants to find out by searching through the phone numbers in his phone book. If there are N entries in the phone book, it would on average take him N/2 steps. With Grovers algorithm he can do it in a
number of steps proportional to √N - if only he had a quantum computer. 3This definition is appropriate for a pure state, not for a mixed state [7].

1.2. Quantum optics with Ca+ ions in Aarhus 3
non-interacting and arbitrarily far apart! In their famous paper from 1935, Einstein, Podolsky and Rosen (EPR) [8] considered this to be a paradox and concluded that the theory of quantum mechanics was incomplete. To determine from experiments if quantum mechanics really was incomplete or not, was considered impossible until John Bell proved a certain inequality, which relates a set of quantum mechanical observables. This inequality (and a class of other so-called Bell inequalities) can be violate-
d by an entangled state if quantum mechanics is complete but will be obeyed by the so-called ‘hidden variable’ theories, which originated from the EPR-paper. This fact has triggered the fundamental interest in entangled states, which today have been created of trapped ions [9] as well as photons [10], atoms [11] and even macroscopic samples of atoms [12].
The possibilities of implementing quantum logic and creating entangled states with trapped ions, make quantum optics with trapped ions a very interesting field of physics. It is also a rapidly evolving field where impressive experimental achievements have been reached in the past few years, especially by the groups of Dave Wineland at NIST in Boulder, USA, and of Rainer Blatt in Innsbruck, Austria, with the first demonstrations of two-ion quantum gates [13, 14], a quantum algorithm [15], creation -
of entangled states of two and four particles [9, 16] and violation of a Bell inequality [17]. The possibilities within the field are, however, by no means exhausted and other groups are also working hard to explore these possibilities.
More information about quantum computing and quantum optics with trapped ions can, e.g., be found in Refs. [1, 18, 19] 4 and - of course - the rest of this thesis.
1.2 Quantum optics with Ca+ ions in Aarhus
The project presented in this thesis is aiming at the creation of entangled states and demonstration of quantum gates along the lines of the Cirac-Zoller proposal. In the project we have chosen to work with the alkaline earth Ca+ ion, or more specifically 40Ca+, since this is the naturally most abundant of the calcium isotopes. The 40Ca+ ion is well suited for quantum optics studies because it has only a single optically active electron outside a closed shell, which makes the level scheme sufficie-
ntly simple that the ion can be laser-cooled using only a few laser sources. Yet, it has metastable states which are useful, e.g., for quantum state detection. The ground state is a 2S1/2 state, and we define our qubit by the two Zeeman sublevels of the ground state as
|↓〉 = 2S1/2(mJ = −1/2) (1.2.1)
|↑〉 = 2S1/2(mJ = +1/2). (1.2.2)
Most alkaline earth ions have properties similar to Ca+, and the specific choice of Ca+ was mainly motivated by practical reasons. First, laser light at the relevant wavelengths is available, e.g., using standard infrared diode lasers and a frequency doubled Titanium-Sapphire laser. Second, a Titanium-Sapphire laser, which is the most expensive of the mentioned laser sources, was already present in the lab at the start-up of the project. When the author of this thesis entered the group, lasers for-
 socalled Doppler laser cooling were running and the first laser-cooling experiments with
4Ref. [18] was used as a reference for some of the history above.

4 Chapter 1 - Introduction
Ca+ were started. Furthermore, there was a large expertise in building and running so-called linear Paul traps. For the work presented in this thesis, we started out by designing and building a relatively small linear Paul trap, suitable for trapped-ion quantum logic experiments. Other crucial ingredients in the project are the ability to detect the internal state of an ion and to cool ions to near their motional ground state in the trap. A ground state cooling scheme has been studied theoreticall-
y and is discussed in the thesis. In order to eventually demonstrate this cooling scheme, demonstrate internal state detection and to perform quantum logic operations, additional diode laser systems have been introduced, and improvements of the level of laser-control have been necessary, both in terms of power-stability, frequency-stability and the shaping of laser-pulses.
1.3 Outline of the thesis
The thesis is organized as follows. Chapters 2–6 are mainly theoretical, describing the theoretical background for the project, some general issues in trapped-ion quantum logic and some further theoretical work. Chapters 7–10 are mainly experimental, presenting the experimental details of the project and experimental results. Chap. 11 gives a summary and an outlook.
Chapter 2: An introduction to the basic concepts of light-atom (or light-ion) interactions for free as well as trapped atoms.
Chapter 3: A short introduction to the Doppler laser cooling technique is followed by a more detailed description of the sideband-cooling technique to be used for cooling 40Ca+ ions to (near) their motional ground state and a presentation of the results of a numerical study using quantum Monte Carlo simulations.
Chapter 4: Here, detection of the internal state of a 40Ca+ ion is discussed, particularly for a scheme based on two so-called Stimulated Raman Adiabatic Passage (STIRAP) processes.
Chapter 5: This chapter gives a general discussion of quantum gates and of some of the many proposals for performing quantum gates with cold trapped ions.
Chapter 6: This chapter contains two theoretical proposals involving optical dipole potentials, one for performing a two-ion quantum gate and one for individual addressing of trapped ions on a string. The gate proposal will be published in Ref. [VI] and the individual addressing proposal has been published in Ref. [I].
Chapter 7: In this chapter the theory of confinement of charged particles in a linear Paul trap is described, and the design and construction of the new trap is presented.
Chapter 8: Here the additional experimental equipment and experimental methods are described.
Chapter 9: This chapter concerns a series of experiments performed in order to characterize the trap. Furthermore, some preliminary experiments on ion mass measurements are presented. Results from the latter experiments will be published in Ref. [V].
Chapter 10: In this chapter a lifetime measurement of a metastable state in the 40Ca+ ion is presented, and its relevance for the detection scheme presented in Chap. 4 is discussed. The lifetime measurement is published in Ref.[III].
Chapter 11: Summary and outlook.

5
Chapter 2
Atom-light interactions
In this chapter some basic concepts in the description of a two-level atom interacting with a monochromatic travelling-wave light-field are introduced, since they will be necessary for understanding the following chapters. The case of a free two-level atom is considered in Sec. 2.1 1, where important notions, such as Rabi-frequency, Rabioscillations, saturation intensity, power broadening and pulse-area are introduced. In Sec. 2.2, we consider first a single two-level atom confined in a harmonic p-
otential and describe the atom-light interaction in the so-called Lamb-Dicke limit. Following that, the treatment is extended to multiple mutually interacting ions and described in terms of the motional eigenmodes of the ions.
2.1 A free two-level atom
In this section we consider the two-level atom illustrated in Fig. 2.1, with ground state |g〉 and excited state |e〉, which are eigenstates of the atomic Hamiltonian Hatom, i.e.,
Hatom |g〉 = Eg |g〉 and Hatom |e〉 = Ee |e〉 , (2.1.1)
where Eg and Ee are the eigenenergies of the two states. In general the atomic wavefunction ψ can be written as a superposition of the two eigenstates,
Ψ(r, t) = cg |g〉 + ce |e〉 , (2.1.2)
where the coefficients cg and ce in general are complex numbers. The transition frequency between |g〉 and |e〉 is
ωeg = Ee − Eg
ħ , (2.1.3)
and the natural decay rate from the exited state to the ground state is denoted by Γ. In the following we consider the time-evolution of the atomic wavefunction when the atom interacts with a travelling-wave light-field which is monochromatic and nearresonant with the atomic transition. In Sec. 2.1.1, we consider only the interaction with the light-field, neglecting spontaneous emission. In Sec. 2.1.2 spontaneous emission is included in the description.
1The given treatment is somewhat linked to Refs. [20, 21].

6 Chapter 2 - Atom-light interactions
Figure 2.1: A two-level atom with ground state |g〉 and excited state |e〉 at energies Eg and Ee, respectively. The natural decay rate from the excited state to the ground state is denoted by Γ.
2.1.1 Interaction with a travelling-wave light-field
We consider a monochromatic travelling-wave light-field characterized by the electric field
E(r, t) = E0 ˆcos(k · r − ωLt + φ) (2.1.4)
having amplitude E0, wave-vector k, frequency ωL, a constant phase φ and where ˆ is a unit vector describing the polarization of the light-field. The interaction with the two-level atom is described by the Hamiltonian [22]
H′ = −eE(r, t) · r, (2.1.5)
and the time evolution of the atomic wavefunction ψ is governed by the time-dependent Schro ̈dinger equation
iħ ∂Ψ
∂t = (Hatom + H′)Ψ. (2.1.6)
Introducing the wavefunction in the form of Eq. (2.1.2), the Schro ̈dinger equation translates to the following coupled differential equation for the coefficients cg and ce:
iħc ̇g = H′
gece (Eg ≡ 0) (2.1.7)
iħc ̇e = ħωegce + H′
egcg, (2.1.8)
where
H′
eg = 〈e| H′ |g〉 = (H′
ge)∗ (2.1.9)
and dots denote derivatives with respect to time. By introducing c ̃e = ceeiωegt, Eqs. (2.1.7) and (2.1.8) can be transformed into
iħc ̇g = H′
gec ̃ee−iωegt (2.1.10)
iħc ̃ ̇e = H′
egcgeiωegt, (2.1.11)
which will be solved in the following. If we make the so-called dipole approximation, i.e., we neglect the spatial variation of the light-field over the atomic wavefunction, and

2.1. A free two-level atom 7
use Eqs. (2.1.4) and (2.1.5), the matrix elements in Eqs. (2.1.10) and (2.1.11) can be written as
H′
eg = −eE0 〈e| ˆ · r cos(k · r − ωLt + φ) |g〉 (2.1.12)
= −eE0 〈e| r |g〉 cos(k · r − ωLt + φ) = ħΩ cos(k · r − ωLt + φ) H′
ge = ħΩ∗ cos(k · r − ωLt + φ), (2.1.13)
where
Ω = − eE0 〈e| r |g〉
ħ (2.1.14)
is the so-called Rabi-frequency and r = ˆ · r. Inserting Eqs. (2.1.12) and (2.1.13) into Eqs. (2.1.10) and (2.1.11), introducing the detuning δ = ωL − ωeg and assuming |δ| ωeg, it can be found that
iħc ̇g = ħΩ∗
2 c ̃e
[
ei(k·r−δt−2ωegt+φ) + e−(k·r−δt+φ)]
≈ ħΩ∗
2 c ̃ee−i(k·r−δt+φ) (2.1.15)
iħc ̃ ̇e = ħΩ
2 cg
[
ei(k·r−δt+φ) + e−i(k·r−δt−2ωegt+φ)]
≈ ħΩ
2 cgei(k·r−δt+φ), (2.1.16)
where we have made the rotating-wave approximation (RWA) in neglecting the quickly oscillating terms. For later application we note that the approximate expressions on the right hand side (r.h.s.) could have been derived by using the Hamiltonian
HRW A = ħΩ
2 ei(kr−ωLt+φ) |e〉 〈g| + ħΩ∗
2 e−i(kr−ωLt+φ) |g〉 〈e| (2.1.17)
instead of H′. Eqs. (2.1.15) and (2.1.16) can be transformed into two uncoupled second-order differential equations for cg and c ̃e, which readily can be solved. With initial conditions cg(t = 0) = 1 and c ̃e(t = 0) = 0, and choosing r = 0, the solutions are
cg(t) =
[
cos
( χt 2
)
− iδ
χ sin
( χt 2
)]
eiδt/2 (2.1.18)
c ̃e(t) = − iΩ
χ sin
( χt 2
)
e−i(δt/2−φ), (2.1.19)
where χ =
√
|Ω|2 + δ2 will be called the off-resonant Rabi-frequency. From these equations, it follows that the population in the ground state and in the excited state oscillates at the off-resonant Rabi-frequency according to the following equations:
|cg(t)|2 = cos2
( χt 2
)
+ δ2
χ2 sin2
( χt 2
)
(2.1.20)
|ce(t)|2 = 1 − |cg(t)|2 = |Ω|2
χ2 sin2
( χt 2
)
. (2.1.21)
The oscillations, which are called Rabi-oscillations, are illustrated for the excited state population in Fig. 2.2 for different values of δ.

8 Chapter 2 - Atom-light interactions
Figure 2.2: Rabi-oscillations of the excited state population for a two-level atom interacting with a travelling-wave light-field [see Eq. (2.1.21)].
In the following chapters we shall consider the time evolution of general superposition states as in Eq. (2.1.2) in the presence of a resonant light-field (δ = 0). In this case the evolution from time zero of the ground state part of the wave-function can be found from Eqs. (2.1.18) and (2.1.19) by setting δ = 0. Since a phase factor on Ω can be absorbed in the coefficients, we assume Ω to be real and positive, and hence it follows that χ = Ω. Thus, |g〉 evolves as
|g〉 → cos
( Ωt 2
)
|g〉 − ieiφ sin
( Ωt 2
)
|e〉 , (2.1.22)
and similarly it can be found that |e〉 evolves as
|e〉 → −ie−iφ sin
( Ωt 2
)
|g〉 + cos
( Ωt 2
)
|e〉 . (2.1.23)
In the following chapters we shall also consider light pulses, meaning that Ω varies in time. Until now we have tacitly assumed that Ω is constant, but the time-dependence can be incorporated as follows. If the light pulse is resonant with the atomic transition (δ = 0), and Ω varies so slowly that the rotating wave approximation still can be made, then the evolution of the system is the same as in Eqs. (2.1.22) and (2.1.23) above, but with Ωt replaced by the rotation-angle [21, 23]
Θ(t) =
∫t
−∞
|Ω(t′)| dt′. (2.1.24)
For a (finite) pulse, the area under the function |Ω(t)| is finite and equal to Θ(∞). This so-called pulse-area names some special pulses according to their pulse-area, namely π/2-pulses, π-pulses and 2π-pulses. A 2π-pulse, having Θ(∞) = 2π, changes the sign of the coefficients cg and ce, but it has no effect on the population in the states |g〉 and |e〉. A π-pulse makes a population inversion, taking all population in |g〉 to |e〉 and vice versa. A π/2-pulse will, e.g., starting from the ground state-
 |g〉 create an equal superposition of the ground state and the excited state.

2.1. A free two-level atom 9
2.1.2 Inclusion of spontaneous emission
In order to include spontaneous emission in the description of a two-level atom interacting with a travelling-wave light-field, we turn to a density-matrix description. The density matrix ρ for the two-level atom is given by
ρ=
[ρee ρeg
ρge ρgg
] =
[cece∗ cecg∗
cgce∗ cgcg∗
]
, (2.1.25)
where the time evolution of the matrix elements is given by the optical Bloch equations [20]:
dρgg
dt = Γρee + i
2 (Ω∗e−iδtρeg − Ωeiδtρge) (2.1.26)
dρee
dt = −Γρee − i
2 (Ω∗e−iδtρeg − Ωeiδtρge)
dρge
dt = −
(Γ
2 + iδ
)
ρge + i
2 Ω∗e−iδt(ρee − ρgg)
dρeg
dt = −
(Γ
2 − iδ
)
ρeg − i
2 Ωeiδt(ρee − ρgg).
The optical Bloch equations can be solved numerically [20]. Qualitatively, one finds that the ground and excited state populations, ρgg and ρee, perform damped Rabioscillations with damping coefficient Γ (see, e.g., Ref. [21] p. 206). In the limit t 1/Γ the populations reach their steady-state values, which can be found analytically from the steady-state equations [time-derivatives equal to zero in Eq. (2.1.26)] [20]. In steady state the population in the excited state is
ρee = |Ω|2 /4
δ2 + |Ω|2 /2 + Γ2/4 = 1
2
s
1 + s , (2.1.27)
where
s = |Ω|2 /2
δ2 + Γ2/4 (2.1.28)
is the so-called saturation parameter. Thus, the excited state population is at most 1/2, which is only approached in the saturation limit (s 1). From Eq. (2.1.28) we can introduce the on-resonance saturation parameter
s0 = s(δ = 0) = 2 |Ω|2
Γ2 = I
Isat
, (2.1.29)
where
Isat = ħΓωe3g
12πc2 (2.1.30)
is the saturation intensity, I = ε0E02/2 is the intensity of the travelling-wave light-field,
and Γ = ωe3ge2 |〈g| r |e〉|2 /(3πε0ħc3) [22].

10 Chapter 2 - Atom-light interactions
Figure 2.3: Scattering rate γ in units of Γ (steady-state population ρee of the excited state |e〉) versus detuning for different on-resonance saturation parameters s0.
In the steady state, the decay rate from the excited state, Γρee, is equal to the excitation rate from the ground state, which is called the scattering rate and denoted by γ:
γ = Γρee = Γ |Ω|2 /4
δ2 + |Ω|2 /2 + Γ2/4 , (2.1.31)
which is plotted in Fig 2.3 for different values of s0. The curves are Lorentzian 2 in
shape with power-broadened width
√
2 |Ω|2 + Γ2.
2.2 Trapped two-level atoms interacting with a light
field
The confining potential in a linear Paul trap is to a good approximation harmonic in all three spatial dimensions. For an atom confined in a harmonic potential, the interaction with light is in general quite different from that for a free atom. To describe the lightatom interaction in this case, we consider an atom moving in one dimension, confined in a harmonic potential of the form
U1d−harm = 1
2 mω2
z z2, (2.2.1)
where m is the atom mass, ωz is the (angular) oscillation frequency of an atom in the harmonic potential and z is the position coordinate. In the following, we consider first a single atom and extend the treatment to multiple (interacting) ions after that.
2Formally, a normalized Lorentz distribution function L with width Γ is given by L = Γ/[2π(δ2 + Γ2/4)].

2.2. Trapped two-level atoms interacting with a light-field 11
Figure 2.4: Energy-levels of a two-level atom trapped in a 1-dimensional harmonic potential interacting with a light-field of frequency ωL.
2.2.1 A single trapped atom
In order to give a quantum mechanical description, we introduce the Hamiltonian Htrap for the harmonically confining potential of the trap,
Htrap = ħωz
(
a†a + 1
2
)
, (2.2.2)
where a† and a are the harmonic oscillator creation and annihilation operators, respectively. The corresponding motional eigenstates of the atom are denoted by |n〉, where n is the vibrational quantum number. The total Hamiltonian for the atom in the harmonic potential is
H = Htrap + Hatom, (2.2.3)
and the atomic eigenstates are combined eigenstates of the form |g〉 ⊗ |n〉 ≡ |g, n〉 and |e〉 ⊗ |n〉 ≡ |e, n〉. The corresponding energy levels are illustrated in Fig. 2.4. In the rotating wave approximation, the interaction with a travelling-wave light-field is described by HRW A in Eq. (2.1.17) with r replaced by z in this one-dimensional case. The matrix element for a transition between the states |g, n〉 and |e, n′〉 is
〈e, n′| HRW A |g, n〉 = ħΩ
2 e−iωegt 〈n′| eik·z |n〉 . (2.2.4)
Introducing z = z0(a + a†), where z0 = z0zˆ with z0 = √ħ/(2mωz) being the size of the harmonic oscillator ground state, the z-dependent matrix element in the equation above can be written as
〈n′| eik·z |n〉 = 〈n′| eiηeg(a+a†) |n〉 ≡ Un′n(ηeg), (2.2.5)
where ηeg = k · z0 is the so-called Lamb-Dicke parameter. ηeg determines the transition probability between the harmonic oscillator eigenstates. From Eq. (2.2.4) it can be seen that the effective Rabi-frequency Ωn′n for a |g, n〉 → |e, n′〉 transition is
Ωn′n = ΩUn′n(ηeg). (2.2.6)

12 Chapter 2 - Atom-light interactions
Figure 2.5: Absorption spectrum of a two-level atom trapped in a one-dimensional harmonic potential interacting with a light-field of frequency ωL in the Lamb-Dicke limit.
If the states |g, n〉 and |e, n′〉 are coupled by a resonant light-field, we can therefore write the time evolution of the states as
|g, n〉 → cos(Ωn′nt) |g, n〉 − ieiφ sin(Ωn′nt) |e, n′〉 (2.2.7)
|e, n′〉 → −ie−iφ sin(Ωn′nt) |g, n〉 + cos(Ωn′nt) |e, n′〉 ,
in analogy with Eqs. (2.1.22) and (2.1.23). The matrix element Un′n(ηeg) can be evaluated in terms of generalized Laguerre polynomials Lnα [24]:
Un′n(ηeg) = e−η2
eg /2
√
n<!
n>! η|n′−n|
eg L|n′−n|
n< (η2
eg), (2.2.8)
where n< = min(n, n′) and n> = max(n, n′). Thus, Ωn′n is generally n-dependent and different from Ω, even for an |n〉 → |n〉 transition, where Ωnn = e−η2
eg /2 L0n (ηe2g )Ω.
In the following chapters we shall focus on the so-called Lamb-Dicke limit where
√n + 1 ηeg 1. In this limit Un′n(ηeg) can be expanded as follows:
Un′n(ηeg) (2.2.9)
= 〈n′| 1 − η2
eg
(a†a + 1/2) + iηeg
(a + a†) − η2
eg
(
a2 + a†2)
/2 |n〉 + O [(√nηeg)3]
= [1 − η2
eg (n + 1/2)] δn′,n + iηeg
[√nδn′,n+1 + √n + 1δn′,n−1
]
− η2
eg /2
[√n(n − 1)δn′,n+2 + √(n + 1)(n + 2)δn′,n−2
]
+ O [(√nηeg)3] .
Hence in the Lamb-Dicke limit, the transition strength for a |g, n〉 → |e, n′〉 transition
is roughly proportional to (nηe2g)|n′−n| , which is illustrated in Fig. 2.5. The central
transition at ωL = ωeg, where ∆n = n′ − n = 0, is usually referred to as the carriertransition. Transitions with ∆n > 0 are called blue sideband transitions, and transitions with ∆n < 0 are called red sideband transitions. Since n′ ≥ 0, there is only a finite number of red sideband transitions from a given state |n〉.

2.2. Trapped two-level atoms interacting with a light-field 13
2.2.2 Multiple ions
Until now we have not distinguished between (neutral) atoms or ions since the charge of the ion was irrelevant. In this section we shall consider multiple ions which are interacting via the Coulomb interaction, so from here on we must specialize to ions. Looking at the special case of two singly-charged ions trapped in a one-dimensional harmonic potential, the potential energy is
U (z1, z2) = 1
2 mω2
z (z2
1 + z2
2 ) + e2
4πε0(z2 − z1) (z2 > z1), (2.2.10)
where z1 and z2 denote the position of the ions along the z-axis. The equilibrium positions of the ions are given by the analytical expression
z2,eq = −z1,eq =
( e2
16πε0mωz2
)1/3
= 4−1/3l, (2.2.11)
where
l=
( e2
4πε0mωz2
)1/3
(2.2.12)
is chosen as a length unit. The equilibrium distance is ∆z = z2,eq − z1,eq = 21/3l. For three ions the equilibrium positions can also be found analytically, but for more than three ions the problem must be solved numerically. For up to ten ions the equilibrium positions are given in the work by James [25] and depicted in Fig. 2.6(a). It is well known, e.g., from solid-state and molecular physics, that a system of interacting particles has a set of motional eigenmodes with corresponding eigenfreque-
ncies, and that the motion of the particles can be described in terms of these eigenmodes. The same holds for a string of N ions in a harmonic potential, which in the onedimensional case has N mutually perpendicular motional modes with distinct eigenfrequencies. These eigenmodes and eigenfrequencies are also calculated in Ref. [25] for up to ten ions. The eigenfrequencies are depicted in Fig. 2.6(b) and given for two and three ions in Table 2.1. All the eigenmodes for two and three ions are illust-
rated in Fig. 2.7. The first mode 3 is the so-called center-of-mass mode, where the ions move together at the trap frequency ωz as a rigid body. The second mode is the so-called breathing
mode at frequency √3ωz, where the ions move with an amplitude proportional to their equilibrium distance from the center, and where ions on either side of the center move with opposite phase. In general the N eigenmodes for an N ion string can be described by normalized eigenvectors b(p) (p = 1−N ), where the m’th coordinate b(p)
m (m = 1−N ) in b(p) is the relative oscillation amplitude of the m’th ion in the string and the sign of the coordinates indicates their relative phase. The vectors b(p) are given in the third column in Table 2.1 for N = 2 and 3. The theory for a single ion in a harmonic potential interacting with a travelling-wave light-field, which was presented in the previous section, can be generalized to describe the interaction with a single ion in an N -ion string in a given motional mode. This can
3With modes numbered in order of increasing eigenfrequency.

14 Chapter 2 - Atom-light interactions
(a) (b)
Figure 2.6: (a) Equilibrium positions in units of l [see Eq. (2.2.12)] for N = 1 − 10 ions. (b) Mode frequencies in units of ωz for N = 1 − 10 ions.
Figure 2.7: Eigenmodes for two and three ions. The uppermost mode is the center-ofmass mode and the mode illustrated below is the breathing mode.
be done by introducing an effective Lamb-Dicke parameter ηeff,m (m = 1 − N ) for each of the N ions, which according to James [25] is given by
ηeff,m = ηeg
b(p)
m
√ω(p)/ωz
, (2.2.13)
where ω(p) is the eigenfrequency for the mode. In Table 2.1 the vector ηeff is given for all modes of two and three ions.
N p bp ω(p)/ωz ηeff /ηeg 2 1 √12 (1, 1) 1 √12 (1, 1)
2 √12 (−1, 1) √3 1
4√12 (−1, 1)
3 1 √13 (1, 1, 1) 1 √13 (1, 1, 1)
2 √12 (−1, 0, 1) √3 1
4√12 (−1, 0, 1)
3 √16 (1, −2, 1) √29/5 4
√
5
1044 (1, −2, 1)
Table 2.1: Normalized mode eigenvectors b(p), mode frequencies ω(p) in units of ωz and effective Lamb-Dicke parameter vectors with coordinates given in units of ηeg for 2 and 3 ions.

15
Chapter 3
Laser cooling of trapped ions
For more than a decade, laser cooling has played a very significant role in physics 1, and laser cooling techniques are today widely used, for example in the production and study of Bose-Einstein condensates of atomic gases 2. Here we shall focus on laser cooling of trapped ions, where it is possible to cool a single ion or a string of ions to the motional ground state of the trapping potential with a very large probability. In all schemes for performing quantum gates and creating entangled states-
 with trapped ions (see Chap. 5), the starting point is indeed a string of ions cooled to near its motional ground state and hence obtaining this is a crucial step for the present project. Laser cooling of ions to their motional ground state starts with the most frequently encountered type of laser cooling, namely Doppler cooling, which was first proposed by H ̈ansch and Schawlow [27]. Doppler cooling brings the ions to a temperature of about 1 mK, which only for very strongly confining traps corr-
esponds to the ion being near the motional ground state. In the trap relevant for the present work, an additional cooling step is necessary to cool the ions to their motional ground state. This cooling step uses the so-called sideband-cooling technique, as first proposed by Wineland and Dehmelt in 1975 [28]. For the specific sideband-cooling scheme, which we intend to use, a numerical study has been performed in order to investigate how well the scheme performs, at least theoretically, and to dete-
rmine suitable values for the relevant parameters, e.g., laser intensities. The chapter is organized as follows. In Sec. 3.1, we first consider Doppler cooling of a two-level ion in order to introduce some general concepts, then the internal levels of the 40Ca+ ion is presented and Doppler cooling of the 40Ca+ ion is described. Sec. 3.2 is a small digression, where motional modes and stability of ion strings in a threedimensional harmonic potential briefly are discussed before we come to the gener-
al theory of sideband cooling in Sec. 3.3, where a rate equation description of sideband cooling is given. In Sec. 3.4 our sideband-cooling scheme is described. In Sec. 3.5, the results of the numerical study using quantum Monte Carlo simulations are presented
1The Nobel Prize in Physics for 1997 was awarded to Claude Cohen-Tannoudji, Steven Chu and William D. Phillips ”for development of methods to cool and trap atoms with laser light” [26].
2The Nobel Prize in Physics for 2001 was awarded to Eric A. Cornell, Wolfgang Ketterlee and Carl E. Wieman ”for the achievement of Bose-Einstein condensation in dilute gases of alkali atoms, and for early fundamental studies of the properties of the condensates” [26].

16 Chapter 3 - Laser cooling of trapped ions
and compared to a simple rate equation model. Finally, a discussion of how to actually measure the distribution of population in the motional quantum states of the trapping potential is given in Sec. 3.6.
3.1 Doppler cooling of trapped ions
In Doppler cooling of atoms or ions, the Doppler effect is exploited together with momentum conservation in the absorption of photons to cool a sample of atoms or ions. In the cooling process scattering of photons is an essential part, which for a two-level ion in a harmonic potential can be described by the same formalism as for a free ion, provided that the oscillation frequency ωz is much smaller than the transition linewidth Γ [29]. Intuitively, this is understandable since, at least for a sat-
urated transition, scattering of photons takes place on a timescale of Γ−1, which is much faster than the timescale on which an ion changes its potential energy (ωz−1), i.e., the ion appears to be free. One may also think of it as the linewidth being much larger than the spacing between the vibrational sidebands in Fig. 2.5, such that the sidebands which result from the oscillation in the trapping potential are unresolved. For the present work, the natural linewidth of the (dipole-allowed) transit-
ion relevant for Doppler cooling of the 40Ca+ ion is 2π × 22 MHz, which should be compared to a typical trap frequency of the order of 2π × 1 MHz, thus making it sufficient to treat Doppler cooling of free ions.
3.1.1 Doppler cooling of a free two-level ion
Consider a two-level ion moving in one dimension irradiated by two counter-propagating laser-beams, both having frequency ωL < ωeg. When the ion moves towards (away from) one laser, the light appears to be shifted into (out of) resonance due to the Doppler effect, and hence the atom preferentially scatters photons, which slows down the atom (see Fig. 3.1). Since the photon momentum typically is much smaller than the ion momentum, an equilibrium state can only be reached after many scattering event-
s. Therefore, Doppler cooling requires a closed system of internal levels, as for the twolevel ion considered here. The equilibrium kinetic energy of the ion has a lower bound, the so-called Doppler cooling limit, which is set by ‘recoil-kicks’ due to the continuous absorption and spontaneous emission of photons.
Figure 3.1: Doppler cooling in one dimension of a free ion.
In the following, Doppler cooling in one spatial dimension (z) is described quantitatively. Consider first the force F+ exerted by a travelling-wave laser beam, propagating in the direction of positive z and having wave-number kz, on an ion moving with velocity vz. Recoil-kicks due to spontaneous emission are neglected for the time being since, owing to the spatial symmetry of the radiation pattern, the corresponding net force averaged over many scattering events is zero. The force due to absorpti-
on of photons is equal to the photon momentum ħkz times the scattering rate γ defined in Eq. (2.1.31),

3.1. Doppler cooling of trapped ions 17
with δ replaced by (δ − kzvz) in order to take the Doppler effect into account. Using the notation of Chap. 2, F+ can be written as
F+ = ħkzΓ |Ω|2 /4
(δ − kzvz)2 + |Ω|2 /2 + Γ2/4 . (3.1.1)
In order to counteract the radiation pressure from this laser and hence to cool the ion along the z-axis, a counter-propagating laser beam must be introduced, as illustrated in Fig. 3.1. Provided that the saturation parameter s is small, the forces from the two laser beams can be added [30] yielding a total force, Fz, which can be written as
Fz =F+ + F− (3.1.2)
= ħkzΓ |Ω|2
4
[ 1
(δ − kzvz)2 + |Ω|2 /2 + Γ2/4 − 1
(δ + kzvz)2 + |Ω|2 /2 + Γ2/4
]
.
F+, F− and Fz are illustrated in Fig. 3.2 for δ = −Γ/2 and s = 0.1. Fz is zero when vz = 0 and varies linearly with a negative slope (for δ < 0) near vz = 0, which means that it acts as a frictional force for small vz. Expanding Fz, we find indeed that
Fz = − αvz + O(v3
z ), (3.1.3)
where
α = − ∂Fz
∂vz
(vz = 0) = −ħk2
z
δΓ |Ω|2
[δ2 + |Ω|2 /2 + Γ2/4]2 (3.1.4)
= − 2ħk2
z
s
(1 + s)2
δΓ δ2 + Γ2/4
is the friction coefficient. The friction coefficient is positive for δ < 0 and negative for δ > 0, in which case the force is not a frictional force, but rather a heating force which speeds up the ion. By maximizing α with respect to δ, it can easily be found that the friction coefficient is maximal (and positive) for δ = −Γ/2 with a maximal value of
αmax = 2s
(1 + s)2 ħk2
z . (3.1.5)
In Fig. 3.2, where the optimal detuning δ = −Γ/2 is used, the straight dash-dotted line is the linear approximation of the cooling force with slope αmax for s = 0.1. The frictional cooling force gives rise to a decrease in the kinetic energy of the ion with the cooling rate Rcool = − < Fzvz >= α < vz2 >. As already mentioned, the ultimate temperature is, however, limited by heating processes due to absorption and spontaneous emission of photons. Let us consider heating due to spontaneous emission -
first. The average of the recoil momenta, < precoil >, is zero, however, since the direction of each recoil is random, the ion makes a random walk in momentum space, which means that < p2
recoil > increases linearly with the number of scattered photons, due to momentum diffusion [20]. The exact value of the heating rate depends on the transition and the laser configuration in question, but it is of the order of Rheat = γ(ħkz)2/m, where m is the ion mass [20]. In absorption of photons, there is essentially no preferred direction of absorption, when

18 Chapter 3 - Laser cooling of trapped ions
Figure 3.2: Forces exerted by two counter-propagating laser beams, with detuning −Γ/2 and saturation parameter s = 0.1, on an ion moving with velocity vz. The various curves are discussed in the text.
the ion speed is small (kzvz Γ). Hence each time a photon is absorbed, the ion gets a random momentum kick along the z-axis, which leads to momentum diffusion along the z-axis. The associated heating rate is also of the order of Rheat [20]. In equilibrium Rcool = 2Rheat, which for the optimal choice of detuning, δ = −Γ/2, yields an equilibrium kinetic energy of ħΓ/4. Defining the temperature T of an ion through its kinetic energy, using the relation kBT /2 = m < vz2 > /2, where kB is Boltzmann’s c-
onstant, we find that the equilibrium kinetic energy corresponds to the so-called Doppler temperature
TD ≡ ħΓ
2kB
, (3.1.6)
which characterizes the Doppler cooling limit. Cooling of a free particle in three dimensions would require six pairwise counterpropagating laser beams. In an ion trap it is not strictly necessary to use counterpropagating laser beams since the radiation pressure exerted by a laser beam is counteracted by the trapping potential. Furthermore, cooling in three dimensions can be accomplished using only a single cooling laser beam if it has a component of its wavevector along each of three principal a-
xes, which is defined by the trapping potential, as discussed in more detail in Chap. 7. In the experiments with single ions or strings of ions described in this thesis, the ions were normally Doppler laser cooled using two beams counter-propagating parallel to the ion string and one laser beam propagating perpendicular to the ion string.
3.1.2 The 40Ca+ ion
Before a description of Doppler cooling of the 40Ca+ ion, the relevant internal levels has to be introduced, which is done in the following.

3.1. Doppler cooling of trapped ions 19
Figure 3.3: Partial level scheme for the 40Ca+ ion, showing the five lowest lying energy levels. Solid arrows indicate dipole-allowed transitions, with the fat arrows indicating the Doppler cooling transitions discussed in the text. Dotted arrows indicate electric quadrupole transitions. Transition wavelengths are given together with the inverse of the respective transition rates.
The 40Ca+ ion has only a single optically active electron outside a closed shell, and hence for most purposes it can be considered as a one-electron atom. The lowest lying energy levels of the 40Ca+ ion are shown in Fig. 3.3. The 4s 2S1/2 ground state is coupled to the 4p 2P1/2 state and the 4p 2P3/2 state by dipole-allowed transitions at 397 nm and 393 nm, respectively, as indicated by the arrows. These P -states are in turn coupled by dipole-allowed transitions at 850 nm, 854 nm and 866 nm to th-
e 3d 2D3/2 state and the 3d 2D5/2 state. The D-states are metastable, with a natural lifetime of a little more than a second, since they are only coupled to the ground state by an electric quadrupole transition. Apart from the wavelengths, the inverse of the transition rate has been indicated for each transition in Fig. 3.3. The transition rates from the P -states to the D-states will be denoted by Γ850, Γ854 and Γ866, where the indices are the transition wavelength in nanometers. The transition r-
ates from the 2P1/2 state and the 2P3/2 state to the ground state will be denoted Γ1/2 and Γ3/2, respectively. The natural lifetime of the
2P1/2 state is equal to (Γ1/2 + Γ866)−1 = 7.1 ns, and the natural linewidth of the 2P3/2
state is equal to (Γ3/2 + Γ850 + Γ854)−1 = 6.8 ns. Saturation parameters and saturation intensities for each transition can be defined as in Eq. (2.1.29) and Eq. (2.1.30) using the relevant transition strength and frequency instead of Γ and ωeg. An overview of the transition wavelengths, transition rates and saturation intensities for the S–P and D–P transitions in 40Ca+ is given in App. B.
3.1.3 Doppler cooling of the 40Ca+ ion
From the level scheme in Fig. 3.3, it is clear that the 40Ca+ ion does not contain a closed transition between two levels, for which Doppler cooling was described above.

20 Chapter 3 - Laser cooling of trapped ions
Nevertheless, Doppler cooling of the 40Ca+ ion is possible, e.g., using a laser at 397 nm and one at 866 nm 3. The main cooling transition for this configuration is the 397 nm 4s 2S1/2–4p 2P1/2 transition. From the 2P1/2 state the ion will not always decay back to the 2S1/2 state, but sometimes decay to the 2D3/2 state, from which it is pumped back to the 2P1/2 state by the laser at 866 nm. Since the described Doppler cooling process involves three levels and two laser sources, we cannot immediate-
ly use the theory for a two-level system. However, since Γ1/2/Γ866 ≈ 12, and the momentum of a 397 nm photon is about twice as large as that of a 866 nm photon, the cooling limit is expected to be given by the Doppler cooling limit for the 397 nm transition, assuming that the 2D3/2– 2P1/2 transition is saturated. The Doppler cooling limit for the 397 nm transition is
TD = 0.5 mK. (3.1.7)
This intuitive argument is supported by a numerical study of laser cooling of 138Ba+ [31], which has a level structure similar to 40Ca+, showing that the cooling limit mainly is set by the laser parameters for the 2S1/2– 2P1/2 transition and is of the order of the Doppler cooling limit, although the picture is more complicated than for a simple twolevel system. In practice, the magnetic sublevels of the states involved in the Doppler cooling process have to be considered. For the blue cooling tran-
sition, optical pumping into one of the magnetic sublevels of the 2S1/2 state has to be avoided, which can be done using light which is linearly polarized (π) with respect to a quantization axis defined by an applied magnetic bias field, or using any combination of π-, σ+- and σ−-polarized light. For the 2D3/2– 2P1/2 transition, optical pumping into dark states [32] or magnetic sublevels of the 2D3/2 state has to be avoided, which can be done by choosing the red cooling laser light to be linearly -
polarized perpendicular to the magnetic bias field. This method has been employed in the experiments described in this thesis, however, usage of a (large) magnetic field introduces an unwanted Zeeman-splitting, which will be a drawback in later experiments. Using a small magnetic field, the repumping rate would be limited by the corresponding Larmor frequency, but this limitation can fortunately be circumvented by (fast) rotation of the red cooling laser light polarization using an electrooptic mo-
dulator (see Chap. 8). Finally, we note that the 397 nm photons emitted during the Doppler cooling process are very important since they allow us to observe the ions using an imaging system, which is described in Chap. 8.
3.2 Ion strings in a three-dimensional harmonic po
tential
When a few ions are Doppler laser-cooled to a sufficiently low temperature and trapped in a linear Paul trap with appropriate trap parameters, they can form a string of ions, having the properties discussed in Sec. 2.2.2. In the following, we first consider the requirements on the trapping parameters for obtaining a string of N ions, assuming
3In the following, the cooling lasers driving the 397 nm transition and the 866 nm transition will often be referred to as the blue cooling laser and the red cooling laser or the repumper laser, respectively.

3.3. Sideband cooling 21
that the Doppler cooling process described above makes the ions sufficiently cold. Then we briefly discuss motional modes in a three-dimensional harmonic potential. The three-dimensional trapping potential of a linear Paul trap is to a good approximation harmonic of the form
U3d−harm = 1
2 m(ω2
xx2 + ω2
yy2 + ω2
z z2), (3.2.1)
where ωz is called the axial trap frequency, and ωx and ωy are called the radial trap frequencies. Normally, we have ωx ≈ ωy > ωz. For simplicity we assume in the following that ωx = ωy ≡ ωr. If ωr/ωz is sufficiently large, the N ions will be squeezed onto a string along the z-axis. More quantitatively, the inequality 2ωr2 + ωz2 > (ωNmax)2, where
ωNmax is the highest modefrequency for the N -ion string, must be fulfilled [33], which can be expressed as
( ωr
ωz
)2
> (μN − 1)/2, (3.2.2)
where μN = (ωNmax/ωz)2. To find an approximate expression for (μN −1)/2 as a function of N , the numerically calculated values [25] of (μN − 1)/2 are fitted to the expression aN b over the range N = 2 − 10, which roughly is the relevant range in the context of this thesis. Using Eq. (3.2.2) and the fitted values of a and b, the following requirement for obtaining an N -ion string is found:
ωr
ωz
> 0.60N 0.89. (3.2.3)
In general, this inequality must be fulfilled separately by ωx and ωy, instead of ωr, for an ion string to be stable. For an N -ion string in a three-dimensional potential, there are 3N motional modes. N of these modes are the axial modes described in Chap. 2. In addition there are radial center-of-mass modes at frequency ωx and ωy and modes at eigenfrequencies which are combinations of ωx, ωy and ωz [34]. All modes can in principle be cooled to near the motional ground state by sideband cooling, -
but only one axial mode is relevant for quantum logic operations.
3.3 Sideband cooling
In the regime where the linewidth Γ of an internal transition in a trapped ion is much smaller than the trap frequencies, i.e. Γ ωx, ωy, ωz, the absorption profile for the transition exhibits well-resolved sidebands. This regime is known as the strong-binding regime or the resolved-sideband limit. For a dipole-transition, Γ is typically several MHz, and getting into the resolved-sideband limit in this case requires a very strongly confining trap. What is more feasible in order to get into the reso-
lved-sideband limit, is to utilize a narrow transition, such as a Raman transition [35] or an electric quadrupoletransition [36, 37] in combination with trap frequencies around a few MHz. In this case it becomes possible to resolve the sideband transitions, which is exploited in sideband cooling to cool a single ion or several ions to near their motional ground state in the trap.

22 Chapter 3 - Laser cooling of trapped ions
As mentioned, sideband cooling of trapped ions was first suggested by Wineland and Dehmelt in 1975 [28]. The first experimental demonstration was reported for a single ion in 1989 by Diedrich et al. [36] and has been followed by other demonstrations [35, 37, 38], also for multiple ions (up to four) [9, 34, 39]. The sideband-cooling technique has also been used for cooling of atoms in optical lattices [40, 41, 42] and in an optical dipoletrap [43]. The principle of sideband cooling of a two-level i-
on is illustrated in Fig. 3.4(a). A laser resonant with a red sideband transition excites the ion from |g, n〉 → |e, n − 1〉, which reduces the vibrational quantum number by one. In the Lamb-Dicke limit, the spontaneous decay from |e〉 back to |g〉 is preferentially on the carrier, which completes a cooling cycle, |g, n〉 → |e, n − 1〉 → |g, n − 1〉, removing one vibrational quantum from the system but leaving it in its initial internal state. After additional cooling cycles, the ion eventually ends up i-
n the ground state |g, 0〉, where no more excitations can occur. Note that the Lamb-Dicke parameter must be non-zero since vibrational state changing transitions has to be allowed. On the other hand, it should be sufficiently small that the Lamb-Dicke limit is fulfilled, such that spontaneous decay preferentially happens on the carrier-transition. For this work a Lamb-Dicke parameter of η = 0.2 is a typical value. Note also that in order to remain in the resolved-sideband limit, the powerbroadened -
linewidth of the sideband-cooling transition should also be much smaller than the trap frequency, which requires that the Rabi-frequency of the sideband-cooling laser is much smaller than ωx, ωy and ωz. Before going on with a more detailed description of sideband cooling, we should mention the so-called electromagnetically induced transparency (EIT) cooling technique which also allows cooling to near the motional ground state. The technique was proposed by Morigi et al. in Ref. [44] and demonstrat-
ed by the Innsbruck group for 40Ca+ [45, 46].
3.3.1 Rate equation description in the Lamb-Dicke limit
In the following, we give a rate equation description of sideband cooling of a two-level ion, which will be useful for describing the scheme we intend to use in 40Ca+ (Sec. 3.4), and in connection with the quantum Monte Carlo simulations of this cooling scheme (Sec. 3.5). Here we consider for simplicity only sideband cooling of the axial motion of a single two-level ion. Sideband cooling of a two-level ion can conveniently be described in terms of transitions within the ground state manifold of vi-
brational levels {|g, n〉}, i.e., transitions from |g, n〉 to |g, n′′〉 via an excited state |e, n′〉. Here we assume the LambDicke limit, considering only the cases where n′ = n, n ± 1 and n′′ = n ± 1. The corresponding ground state manifold transitions which involve |g, n〉 are illustrated in Fig. 3.4(b). The transition rate for a |g, n〉 → |g, n − 1〉 (cooling) transition can be written as ηe2gnA−, where the factor of ηe2gn originates from the transition between vibrational levels [see Eq. (2.2.9)], a-
nd A− is a rate which accounts for the internal dynamics of the ion due to the interaction with the sideband-cooling laser. Similarly, the transition rate for a |g, n〉 → |g, n + 1〉 (heating) transition can be written as ηe2g(n+ 1)A+. Expressions for A± will be given below. These transition rates lead to the following rate equation for the occupation probability P (n) of the state |g, n〉 [47]:
P ̇ (n) = η2
eg
[
(n + 1) A−P (n + 1) − [(n + 1) A+ + nA−] P (n) + nA+P (n − 1)
]
. (3.3.1)

3.3. Sideband cooling 23
From this equation, a differential equation for the average population n can be derived:
(a) (b)
Figure 3.4: (a) Sideband cooling of a two-level ion. Through successive red sideband excitations and spontaneous emission events, the ion ends up in its motional ground state |g, 0〉. (b) Cooling and heating transitions within the ground state manifold of vibrational levels.
Figure 3.5: Illustration of the terms contained in A− and A+. n can change in the optical excitation process (left) or in the spontaneous emission process (right). The fat arrows indicate the intended sideband-cooling cycle, also shown in Fig. 3.4(a).
 ̇n =
∑ ∞
n=0
nP ̇ (n) = −η2
eg(A− − A+)n + η2
egA+, (3.3.2)
which has the solution
n(t) =
(
n0 − n(1)
SS
)
e−W (1)t + n(1)
SS, (3.3.3)
where
W (1) = η2
eg (A− − A+) (3.3.4)
is the cooling rate,
n(1)
SS = A+
A− − A+
(3.3.5)

24 Chapter 3 - Laser cooling of trapped ions
is the steady-state value n(t → ∞) and n0 = n(t = 0). The superscript (1) indicates that the expressions are valid to first order in ηe2g. The solution to n(t) is only stable when the cooling rate is positive, i.e., when A− > A+, which also was anticipated from Fig. 3.4(b). When the Rabi-frequency Ω of the sideband-cooling laser is much less than the transition linewidth Γ, the rates A± have two contributions each, which are illustrated in Fig. 3.5 [48]. Each rate has a contribution from events wh-
ere n changes in the optical excitation process, |g, n〉 → |e, n ± 1〉 → |g, n ± 1〉, and one from events where n changes in the spontaneous emission process, |g, n〉 → |e, n〉 → |g, n ± 1〉. In particular, A− contains a term for the cooling cycle |g, n〉 → |e, n − 1〉 → |g, n − 1〉, where the optical excitation is driven resonantly on the red sideband, whereas A+ only contains terms from off-resonant excitations due to the cooling laser. When the cooling laser is tuned to the red sideband, A± can be expre-
ssed quantitatively in the following way [47, 48]
A± =Γ[αR(ωz) + R(ωz ± ωz)], (3.3.6)
where
R(δ) = Ω2/4
δ2 + Γ2/4 . (3.3.7)
α is a factor of the order of unity, which accounts for the direction of the spontaneously emitted photon and is given by
α=
∫π
0
sin θ dθ cos2θ W (θ), (3.3.8)
where θ is the angle between the emitted photon and the z-axis, and W (θ) is a normalized distribution-function for the radiation pattern of the transition. Using Γ ωz (resolved sideband-limit), the following simple expressions for A− and A+ can be found:
A− ≈ Ω2/Γ and A+ ≈ ΓΩ2
4ωz2
(α + 1/4) . (3.3.9)
Inserting A± into the expressions for W (1) and n(1)
SS, we find
W (1) ≈ η2
egΩ2/Γ (3.3.10)
and
n(1)
SS ≈
(Γ
2ωz
)2
(α + 1/4). (3.3.11)
Note that since a change of vibrational state is necessary for cooling, W (1) is proportional to ηe2g. The steady-state value, n(1)
SS, is limited by off-resonant carrier or blue sideband excitations and approaches zero when they become negligible, i.e., when Γ/ωz → 0. In Eq. (3.3.6) it was assumed that Ω Γ. This restriction can be circumvented in a more detailed calculation (still assuming Ω, Γ ωz) of the rates A±, using a density

3.3. Sideband cooling 25
matrix approach. This has been done in Ref. [49] and yields the following multi-line formula
A−(ωz) = − 2ΓΓcohRcoh(δ)(1 − α)
Γ + 4ΓcohRcoh(δ) + Ω2/2
Γ + 4ΓcohRcoh(δ) (3.3.12)
× Re
{
(ωz + iΓ)
[
ωz + iΓ + Ω2
2
(1
δ − ωz − iΓcoh
−1
δ + ωz + iΓcoh
)]−1
×i
[ Γ
(1
δ + iΓcoh
−1
δ − ωz − iΓcoh
)
− 2(1 + iΓ/ωz)ΓcohRcoh(δ)
(1
δ − ωz − iΓcoh
−1
δ + ωz + iΓcoh
) ]}
and
A+(ωz) = A−(−ωz), (3.3.13)
where
Rcoh(δ) = Ω2/4
δ2 + Γ2
coh
. (3.3.14)
Tuning to the red sideband for optimal sideband-cooling conditions corresponds to δ = ωz. A coherence decay rate, Γcoh, has been introduced, which is equal to Γ/2 for a true two-level ion if external decoherence effects are neglected 4, but in general it may deviate from Γ/2. Using the expressions for A± above with δ = ωz, it has been shown that the more general expression for n(1)
SS is [50, 51]
n(1)
SS =
( Γcoh
ωz
)2
(α + 1/4) +
(Ω
2ωz
)2 ( 2Γcoh
Γ −1
)
+ O [(Γcoh/ωz)4, (Ω/ωz)4] .
(3.3.15)
When Γcoh = Γ/2, the result in Eq. (3.3.5) is recovered since the second term above cancels exactly. For the cooling rate, we find from Eq. (3.3.12) to zeroth order in Γ/ωz, Γcoh/ωz and Ω/ωz that
W (1) = η2
eg [A−(ωz) − A+(ωz)] = η2
eg
Ω2
2Γcoh
, (3.3.16)
again using δ = ωz in A±. For Γcoh = Γ/2 this expression for the cooling rate is identical to Eq. (3.3.10).
The theory above was described with the axial motion of a single ion in mind, but it applies equally well to motion along the x-axis or the y-axis if the axial frequency ωz is replaced by the corresponding radial frequency ωx or ωy. Furthermore, cooling of the various motional modes of an N -ion string is described by the same theory, if ωz is replaced by the relevant mode frequency, although an effective Lamb-Dicke parameter, as given in Eq. (2.2.13) for the one-dimensional case, should be taken -
into account.
4Corresponding to the decay rate Γ/2 of ρge and ρeg in Eq. (2.1.26).

26 Chapter 3 - Laser cooling of trapped ions
3.3.2 Rate equation with second-order contributions
Since Doppler cooling normally is performed prior to sideband cooling, the temperature reached after Doppler cooling defines the starting point for the sideband-cooling process. By equating kBTD with (n + 1/2)ħωz, it follows that the average axial vibrational quantum number after Doppler cooling is n ≈ 10 for ωz = 2π × 1.0 MHz, assuming that the Doppler cooling limit of TD ≈ 0.5 mK for 40Ca+ is reached. Hence, for this experimentally relevant case, there is initially an appreciable population over-
 a large range of vibrational levels. With a Lamb-Dicke parameter of the order of 0.2, the Lamb
Dicke criterion √n + 1ηeg 1 is not well fulfilled, and even the Lamb-Dicke parameter itself cannot be said to be much smaller than one. These facts suggest that contributions of second order in ηe2g could be important in describing n(t) in sideband cooling. In order
to investigate this in the limit where √n + 1ηeg < 1, we have extended the rate equation in Eq. (3.3.1) to contain second-order cooling and heating terms due to transitions of the type |g, n〉 → |g, n ± 2〉 within the ground state manifold of vibrational levels. There are three types of events which can give rise to such a transition, namely events where (i) n changes by ±2 in the spontaneous decay (|g, n〉 → |e, n〉 → |g, n ± 2〉), (ii) n changes by ±2 in the optical excitation process (|g, n〉 → |e, n-
 ± 2〉 → |g, n ± 2〉) or (iii) n changes by ±1 in each of these processes (|g, n〉 → |e, n ± 1〉 → |g, n ± 2〉). In order to describe the internal dynamics by rates analogous to A±, we introduce rates A++ and A−− for the second-order heating and cooling transitions, respectively. Similar to Eq. (3.3.6), A±± is written as follows in the limit Ω ωz:
A±± =α ̃R(ωz) + R(ωz ± 2ωz) + αR(ωz ± ωz), (3.3.17)
where
α ̃ =
∫π
0
sin θ dθ cos4θ W (θ) (3.3.18)
and the first, second and third terms in A±± correspond to the events (i), (ii) and (iii), respectively. The total transition probabilities for the second-order cooling and heating transitions are proportional to A−− and A++, respectively, to ηe4g and to an n-dependent factor originating from transitions between the harmonic oscillator eigenstates, which appears from the following extended rate equation 5:
P ̇ (n) =η4
eg(n + 1)(n + 2)A−−P (n + 2) + η2
eg(n + 1)A−P (n + 1) (3.3.19)
− η2
eg
[
(n + 1)A+ + nA− + η2
eg(n + 1)(n + 2)A++ + η2
egn(n − 1)A−−
]
P (n)
+ η2
egnA+P (n − 1) + η4
egn(n − 1)A++P (n − 2).
From this rate equation, the following differential equation, which involves both n and n2, can be found:
 ̇n =
∑ ∞
n=0
nP ̇ (n) = − 2η4
eg(A−− − A++)n2 − η2
eg
[A− − A+ − 2η2
eg(A−− + 3A++)] n
(3.3.20)
+ η2
eg(A+ + 4η2
eg A++ ).
5The restriction Ω Γ ωz concerns only the rates A±± and not the rate equation itself. Therefore, the rate equation should be valid for Ω, Γ ωz with properly calculated rates A±±.

3.3. Sideband cooling 27
In order to get rid of the n2-term, we make the reasonable assumption that the distribution over the vibrational levels is a thermal distribution 6 such that n2 can be replaced by 2n2 + n (see App. A.1). The resulting non-linear differential equation in n is solved in App. A.1. The solution is
n(t) = W (2)
W′
[
eW (2)t
(
1 + W (2)
W ′(n0 − n(2)
SS)
)
−1
]−1
+ n(2)
SS, (3.3.21)
where
W ′ =4η4
eg(A−− − A++), (3.3.22)
W (2) =
√
(W (1) − 8ηe4gA++)2 + 4ηe2gW ′(A+ + 4ηe2gA++) (3.3.23)
and
n(2)
SS = W (2) − W (1)
2W ′ + A++
A−− − A++
. (3.3.24)
In the limit ηeg → 0, n(2)
SS approaches n(1)
SS, W (2) approaches W (1), and it can be verified that the exponential decay law in Eq. (3.3.3) is recovered from Eq. (3.3.21). When eW (2)t 1, which is fulfilled for all but small t, we find
n(t) ≈ n0 − n(2)
SS
1 + W ′(n0 − n(2)
SS )/W (2) e−W (2)t + n(2)
SS
(
eW (2)t 1
)
. (3.3.25)
Again the decay is exponential, however with a modified cooling rate and steady-state value as compared to the solution in Eq. (3.3.3). Using the expressions for A±± in Eq. (3.3.17), assuming Ω, Γ ωz and expanding W (2) and n(2)
SS to first order in (Γ/ωz)2, it can be found that (see App. A.1)
W (2) =W (1)
[
1 + 2η2
eg
(Γ
ωz
)2 [α2 − α ̃ − 1/9 + η2
egα (4α ̃ + α + 4/9)]]
(3.3.26)
n(2)
SS =n(1)
SS
[
1 + η2
eg
4α ̃ + α + 4/9 α + 1/4
]
. (3.3.27)
Note that no expansion in the Lamb-Dicke parameter was made. The relative deviation of W (2) from W (1) and of n(2)
SS from n(1)
SS scales as ηe2g. For the cooling rate the deviation
is very small due to the presence of the factor (Γ/ωz)2. To estimate the relative deviation of n(2)
SS from n(1)
SS, i.e., the second term in the parentheses in Eq. (3.3.27), we have to
calculate α and α ̃. Using W (θ) = 3(1 + cos2 θ)/8, which is relevant for a σ± transition between the 2S1/2 and 2P1/2 state in 40Ca+ [52], we find α = 2/5 and α ̃ = 9/35. This yields a relative deviation of 2360ηe2g/819 ∼ 3ηe2g, which equals 11% when ηeg = 0.2.
6After the Doppler cooling process, the distribution over vibrational levels is expected to be a thermal distribution. At least to first order in ηe2g, it can then be shown that a thermal distribution is maintained during the sideband-cooling process [48].

28 Chapter 3 - Laser cooling of trapped ions
From an experimental point of view, it is comforting that for a reasonable value of η = 0.2, the second-order contribution to the steady-state excitation is only of the order of 10%, which is likely to be small in comparison with ‘experimental heating sources’. On the other hand, the effect is not negligible and should be taken into account, e.g., in a comparison between careful numerical studies and the rate equation theory.
3.4 Sideband cooling of the 40Ca+ ion
In this section the sideband-cooling scheme, which will be implemented using the 40Ca+ ion, is described.
3.4.1 The sideband-cooling scheme
The three internal levels involved in the sideband-cooling scheme are the two ground state sublevels 2S1/2(±1/2) (the qubit levels) and one of the sublevels of the 2P1/2 state. The cooling scheme is illustrated in Fig. 3.6, where the notation |1〉 = 2S1/2(−1/2), |2−〉 = 2P1/2(−1/2), |2+〉 = 2P1/2(+1/2) and |3〉 = 2S1/2(+1/2) has been introduced (i.e., |1〉=|↓〉, |3〉=|↑〉), and the involved sublevel of the 2P1/2 state is |2−〉 (|2+〉 could also have been chosen as discussed below). The intended cooling cycl-
e is the following
|1, n〉 −→ |3, n − 1〉 −→ |2−, n − 1〉 −→ |1, n − 1〉 . (3.4.1)
The first step is a resolved sideband two-photon Raman transition driven by the lasers with indices ‘12’ and ‘32’ (Raman lasers in the following) on the red sideband of the |1〉|3〉 transition (assuming δ = 0 in Fig. 3.6). In the second step, a pumping laser (index ‘pump’) excites the ion from |3〉 to |2−〉 on the carrier (the sidebands are unresolved, but in the Lamb-Dicke limit the transition is mainly via the carrier). A spontaneous decay on the carrier from |2−〉 to |1〉 completes the cooling cycle -
(in the Lamb-Dicke limit the spontaneous decay is also mainly on the carrier). From the excited state |2−〉 the ion may also decay back to |3〉 or to the 2D3/2 state (dashed wavy arrows in Fig. 3.6). In the former case, the ion will eventually be pumped back to |2−〉, whereas the latter possibility necessitates a repumper laser on the 866 nm 2D3/2– 2P1/2 transition as in Doppler cooling. The scheme works in principle the same way if |2+〉 is chosen as the excited state, however, there are some differe-
nces for the two choices, which will be discussed below. When the specific excited state is irrelevant for the discussion, we will use the notation |2〉, meaning either |2−〉 or |2+〉. The lasers are supposed to be applied continuously to the ion, so the picture one should have in mind is that the population is making Rabi-oscillations within the family of states {|1, n〉, |3, n − 1〉, |2, n − 1〉} rather than being transferred stepwise from one state to the next. Occasionally, a change of family takes -
place, mainly by spontaneous decay from |2, n − 1〉 to the state |1, n − 1〉 in the family {|1, n − 1〉, |3, n − 2〉, |2, n − 2〉}. Eventually, the ion ends up in |1, 0〉 which ideally is a dark state. Only due to excitations on the carrier or a blue sideband of the Raman transition, a fraction of the total population will be found outside the |1, 0〉 state, mainly oscillating within the {|1, 1〉, |3, 0〉, |2, 0〉} family. In the following, the Raman transition, the pumping transition and the spontaneous de-
cay are discussed in a little more detail together with the Zeeman-splitting of the ground state sublevels indicated in Fig. 3.6, which turns out to be necessary.

3.4. Sideband cooling of the 40Ca+ ion 29
Figure 3.6: The sideband-cooling scheme, illustrated here for a |1, 2〉 → |3, 1〉 → |2−, 1〉 → |1, 1〉 cooling cycle. For the respective laser beams, ω denotes laser frequencies, Ω denotes Rabi-frequencies, and k denotes wave-numbers. ∆ and δ are the one- and two-photon detunings defined in Eq. (3.4.2) and Eq. (3.4.3), ∆Zeeman is the Zeeman-splitting of the ground state sublevels, and ∆ ∆Zeeman, ωz is assumed. In a cooling cycle the Raman lasers (blue) drive red sideband transitions from |1, n〉 to |3,-
 n − 1〉, ideally with δ = 0. The pumping laser (violet) pumps population from |3, n − 1〉 to |2−, n − 1〉, and a subsequent spontaneous decay to |1, n − 1〉 completes the cooling cycle. Spontaneous decays back to |3〉 or to the 2D3/2 state (dashed wavy arrows) are also allowed, which in the latter case necessitates a repumper laser (red). The top right inset shows the geometry for implementing the sideband-cooling scheme. The magnetic field B defines the quantization axis of the ion.
Raman transition: |1, n〉 → |3, n′′〉
The Raman transition is a two-photon transition between the two ground state sublevels, |1〉 and |3〉, with one (both) of the excited states |2±〉 as intermediate state(s). The sidebands on the |1, n〉–|3, n′′〉 transition are resolved. Referring to Fig. 3.6, the Raman laser beams are characterized by frequency ωi2, Rabi-frequency Ωi2 and wave-number

30 Chapter 3 - Laser cooling of trapped ions
ki2 (i=1,3). The one-photon detuning, ∆, and the two-photon detuning, δ, are defined as
∆ = (E2 − E1)/ħ − ω12 − ωz, (3.4.2)
δ = ∆Zeeman + ωz + (ω12 − ω32), (3.4.3)
where E1, E2 and E3 are the energies of the states |1〉, |2〉 and |3〉, respectively, in the presence of the magnetic field B, which gives rise to a Zeeman-splitting of the two ground state sublevels of ∆Zeeman = (E3 − E1)/ħ. The effective Rabi-frequency for the Raman transition is given by
ΩRaman = Ω12Ω3∗2
∆ . (3.4.4)
In order to avoid excitation on a one-photon transition from |1〉 or |3〉 to |2〉, ∆ is supposed to be much larger than the natural transition linewidth Γ1/2. In this case the scattering rate on the |i〉–|2〉 transition (i = 1, 3) is of the order of Γ12Ωi22/∆2. Since this
rate scales as ∆−2 and ΩRaman ∝ ∆−1, we can essentially avoid one-photon scattering events by choosing ∆ large enough (∆/Γ1/2 50 − 100) and with the accessible laserpower still obtain an appreciable Raman Rabi-frequency 7. For driving sideband transitions between |1〉 and |3〉, the individual laser frequencies ω12 and ω32 are in principle irrelevant (assuming ∆ Γ1/2); the relevant parameter is the frequency difference ω12 − ω32. This fact is exploited in reaching the resolved sideband limit for the -
Raman transition by deriving the two beams from the same laser, such that fluctuations in the laser frequency, which are responsible for the laser linewidth, cancel out in taking the frequency difference. A frequency difference between the Raman beams will be generated and changed in a controlled way using two acoustooptic modulators (AOM’s). The effective linewidth of the Raman transition has a contribution from the width and stability of the AOM-drivers (∼ 20 kHz, full width at −40 dB). The effe-
ctive linewidth also has contributions from magnetic field fluctuations leading to fluctuations in ∆Zeeman and from drifts/fluctuations of the trap frequencies. Finally, we note that for the Raman transition the relevant wave-vector, which, e.g., enters in the Lamb-Dicke parameter, is the difference between the wave-vectors of the Raman beams. Thus the geometry shown in the inset of Fig. 3.6 allows cooling along the trap axis as well as in the radial plane (along both principal axes in the radial -
plane, although it is not seen from Fig. 3.6).
Pumping-transition: |3, n′′〉 → |2±, n′〉
The pumping laser with frequency ωpump, Rabi-frequency Ωpump and wave-number kpump is supposed to couple the state |3〉 to the excited state |2−〉, as indicated in Fig. 3.6, or alternatively to |2+〉. Sidebands are unresolved for the pumping transition. |2−〉 or |2+〉 can be selected as the excited state by choosing the pumping laser to be
σ−- or π-polarized, respectively, with respect to the quantization axis defined by the magnetic field B shown in Fig. 3.6. As for the optimal choice of excited state, we note that if we choose |2〉=|2+〉 (πpolarized pumping beam), excitation from the state |1〉 to |2−〉 would be possible due
7∆ should not be much larger than the fine-structure splitting of the P -states, since that would almost cancel the total transition-amplitude [53]. With ∆/Γ1/2 50 − 100 this is no problem.

3.4. Sideband cooling of the 40Ca+ ion 31
to the pumping laser, which would lead to heating as illustrated in Fig. 3.7(a). The |1〉–|2−〉 transition can be suppressed as compared to the |3〉–|2+〉 transition if a Zeeman
splitting much larger than Γ1/2 can be obtained. By choosing |2〉 = |2−〉 instead (σ−polarized pumping beam), excitation from |1〉 would be avoided (to the extent that the polarization is pure σ−). Finally, we note that when the pumping laser propagates parallel to the z-axis as in Fig. 3.6 (for σ−-polarization), it can induce changes in the state of the axial motion, which gives rise to a small heating contribution. If the pumping beam propagates perpendicular to the z-axis (for π-polarization), it -
cannot change the vibrational state along the z-axis.
(a) (b)
Figure 3.7: The excited state for the pumping transition can be selected through polarization of the pumping beam. (a) Selecting |2〉=|2+〉 by using a π-polarized pumping beam, a heating cycle is introduced due to excitations from |1〉 to |2−〉. Here the |3, n = 0〉 → |1, n = 1〉 → |2−, n = 1〉 → |3, n = 1〉 heating cycle is shown. (b) Branching ratios for spontaneous decay from sublevels of the 2P1/2 state to sublevels of the 2S1/2 ground state.
Spontaneous decay: |2±, n′〉 → |1, n〉 , |3, n′′〉
If decay to the 2D3/2 state is neglected, the spontaneous decay from the 2P1/2(±1/2) states can happen to either of the ground state sublevels with the probabilities shown in Fig. 3.7(b). A decay (on the carrier) to the state |1〉 is good in terms of cooling, since it completes a cooling cycle. A decay back to the state |3〉 is bad, since it introduces an extra step of pumping and decay before a cooling cycle can be completed, which hence slows down the cooling process and gives rise to additional p-
ossibilities for heating events to take place. Hence, from that point of view, it would be desirable to optimize the probability for a decay to |1〉 by choosing |2〉=|2+〉 [see Fig. 3.7(b)]. Unfortunately, this choice introduces the heating cycle in Fig. 3.7(a), and therefore we have to be content

32 Chapter 3 - Laser cooling of trapped ions
(a) (b)
Figure 3.8: Non-perfect polarization of the Raman beams gives rise to unwanted Raman transitions (black thin arrows) which can be suppressed, using a Zeeman-splitting of the ground state sublevels. (a) Without Zeeman-splitting, ∆n = 1 for the unwanted transitions, so that the transition strength is proportional to η2. (b) With the Zeemansplitting ∆Zeeman ωz, we have |∆n| = m ≈ 2∆Zeeman/ωz − 1 1 for the unwanted transitions, such that the transition strength is suppressed by the factor η2m 1.
with the choice |2〉=|2−〉, unless a very large Zeeman-splitting, ∆Zeeman Γ1/2, can be obtained.
Zeeman-splitting
Finally, we shall argue that the Zeeman-splitting is necessary even for a σ−-polarized pumping beam, where the heating cycle in Fig. 3.7(a) would be absent. Consider the situation in Fig. 3.6, where the |3〉–|2〉 Raman beam is σ−-polarized, and the |1〉–|2〉 Raman beam is π-polarized, such that |2−〉 is the intermediate level for the Raman transition. If ∆Zeeman = 0, and the Raman beams are non-perfectly polarized such that the |3〉–|2〉 Raman beam contains a component of σ+-polarized light (∼ 1% is not -
unlikely), then the |1, n〉–|3, n + 1〉 blue sideband transition illustrated in Fig. 3.8(a) would be driven, which leads to heating. By using a Zeeman-splitting, ∆Zeeman ωz [see Fig. 3.8(b)], the unwanted Raman transitions due to the σ+-polarized light will be of the type |1, n〉 − |3, n − m〉, where m ≈ 2∆Zeeman/ωz − 1 1 (if n − m ≥ 0). Hence there will be no such transitions from |1, 0〉, and in the Lamb-Dicke limit any allowed transitions would be suppressed by the factor η2m 1. An alternative possi-
bility would be to choose ∆Zeeman = ωz, such that the states |1, n〉 and |3, n − 1〉 are degenerate [42]. In this case ω12=ω32 for red sideband transitions, meaning that the previously ‘unwanted’ transitions would be red sideband transitions as well. However, when we later on shall be concerned with carrier and blue sideband transitions for performing gate operations, there would be some unwanted

3.4. Sideband cooling of the 40Ca+ ion 33
transitions again.
3.4.2 Discussion
In order to achieve a good starting point for performing quantum logic operations, we are aiming at a steady-state value of nSS 1% in all 3 spatial dimensions using the sideband-cooling scheme described above. Moreover, the duration of the sidebandcooling process should not be longer than a few milliseconds in order to compete with external heating mechanisms. Thus, assuming a starting point of n0 ≈ 10, the cooling rate W should be a few kHz or more. In the description of the sideband-cooling sche-
me given above, we made the qualitative observations that some heating effects can be avoided by choosing a σ−-polarized pumping beam, i.e., choosing |2−〉 as the excited state for the pumping transition. On the other hand, choosing |2+〉 could potentially speed up the cooling process, as discussed in connection with the spontaneous decay. Furthermore, it is experimentally advantageous to employ a Zeeman-splitting much larger than the trap frequency in order to avoid heating due to non-perfect polar-
ization of the Raman beams. Before initiating any experiments, it would, however, be desirable to obtain more quantitative knowledge. Particularly, it would be useful to know if reasonable values for W and nSS can be obtained at all, and if so, what an appropriate choice of Rabifrequencies, ΩRaman and Ωpump, would be. Furthermore, since the two-photon detuning δ experimentally only can be controlled to a certain extent, quantitative knowledge about the influence of a non-zero two-photon detuning o-
n W and nSS would be valuable. Finally, differences between the two choices of pumping laser polarization are also relevant. Although some knowledge can be gained from the literature, as discussed below, none of the studies in the literature, which are known to the author, are directly applicable or sufficiently general to answer the questions about all the above-mentioned parameters. In order to investigate these questions, the study presented in the next section has therefore been carried out us-
ing quantum Monte Carlo simulations. A few theoretical discussions of sideband-cooling schemes for three-level ions can be found in the literature. Marzoli et al. [54] describe some special cases of sideband cooling of a three-level ion, of which one case is equivalent to our scheme, however, the description is only valid under the assumption of a low-intensity pumping laser, a small two-photon detuning δ and the Lamb-Dicke limit. Lindberg and Javanainen [55] discuss a scheme in which the cooling -
mechanism in principle is the same as for our scheme presented above. In their scheme, a pair of Raman beams is also utilized for driving a red sideband transition, but no pumping laser is used. The necessary pumping of population is instead mediated by off-resonant one-photon excitations due to one of the Raman lasers. This requires a rather small one-photon detuning, which unfortunately gives rise to excitation out of the otherwise dark state |1, 0〉, and hence leads to a quite high steady-state -
temperature. The scheme has been tested experimentally in Innsbruck, showing a ground state occupation probability of ∼ 85% [56]. Finally, Cirac et al. discuss laser cooling of a trapped three-level ion in a standing wave light-field in Ref. [57]. Experimentally, the sideband-cooling scheme presented in the previous section has been shown to work using cesium atoms in optical lattices and optical dipole traps [40, 41, 42, 43, 58]. Values of n down to 0.024 have been obtained in 2 dimensions with

34 Chapter 3 - Laser cooling of trapped ions
Lamb-Dicke parameter ∼ 0.2 and trap frequencies ∼ 2π × 40 kHz [40]. In the optical lattice/dipole trap experiments, the trap frequency is generally of the order of 2π × 100 kHz in one or two dimensions but much weaker (∼ 2π × 100 Hz) in at least one dimension. Only in the work by Vuletic et al. [42] was the trap frequency as high as 2π × 3.2 MHz in one dimension. These results are, however, hard to transfer or scale to our case with a different atomic system in a linear Paul trap, where trap frequ-
encies of 1 MHz or more can be achieved in all three spatial dimensions. Owing to the high trap frequencies in ion traps, the sideband-cooling scheme should work even better here than in optical lattices or dipole traps.
3.5 Quantum Monte Carlo simulations of the sideband
cooling scheme
The simulations of the sideband-cooling scheme presented in this section are based on the Monte Carlo wavefunction method developed by Mølmer, Castin and Dalibard [59, 60]. In the simulations three internal levels and the vibrational levels from n = 0 up to an upper limit, nmax, are included. Vibrational state changing transitions with ∆n = 0, ±1 ± 2 are allowed. The one-photon detuning, ∆, is assumed to be so large that the excited state, |2〉, can be adiabatically eliminated with respect to the R-
aman transition. Decay and repumping involving the 2D3/2 state are neglected. No assumption is made about the intensity of the pumping laser.
3.5.1 Theory
The wavefunction of a three-level ion (internal states |1〉, |2〉 and |3〉) confined in a harmonic potential, is written as
|ψ(t)〉 =
∑3
i=1
nmax
∑
n=0
Cn
i (t) |i, n〉 . (3.5.1)
Following the Monte Carlo wavefunction method, this wavefunction is evolved in time according to a set of equations [Eqs. (3.5.6)–(3.5.8) below], interrupted by collapses of the wavefunction at times chosen stochastically according to a probability-distribution for a collapse given by the current wavefunction. One such stochastic evolution of the wavefunction is called a ‘history’. A true description of the time-evolution of the system is obtained by averaging over a (large) number of histories. T-
he wavefunction, or rather the coefficients Cin, are evolved using the computer
program described in App. C. The included coefficients Cin (n = 0−nmax) are initialized
such that C2n = 0 and C1n = C3n = √P (n)/2, where P (n) = ∑
i |Cin|2 is the population in the vibrational level |n〉, which is chosen to follow a thermal distribution with average excitation n0, i.e., P (n) = n0n/(n0 +1)n+1. Since the coefficients Cin in this case become small for large n and P (n) is expected to follow a thermal distribution during the cooling process [48], it is a good approximation to neglect coefficients with n larger than some appropriately chosen number nmax. In the simulations n0 ∼ 1 was chosen, meaning that only the final part of th-
e cooling process is simulated, which is sufficient to extract a cooling rate W and a steady-state value nSS. In most simulations it was sufficient to choose nmax = 5, but in some cases, where nSS was high nmax = 20 was used.

3.5. Quantum Monte Carlo simulations of the sideband-cooling scheme 35
The time-evolution of the coefficients is governed by the Hamiltonian for the trapped three-level ion interacting with the Raman lasers and the pumping laser, which is
H = Htrap + Hion + HRaman + Hpump, (3.5.2)
where
Htrap + Hion = ħωza†a + E2 |2〉 〈2| + E3 |3〉 〈3|
(1
2 ħωz + E1 ≡ 0
)
(3.5.3)
and, in the rotating-wave approximation,
HRaman = ħΩ12ei(k12z−ω12t) |2〉 〈1| + ħΩ32ei(k32z−ω32t) |2〉 〈3| + h.c. (3.5.4)
Hpump = ħΩpumpei(kpumpz−ωpumpt) |2〉 〈3| + h.c., (3.5.5)
where any constant phases of the laser-fields are assumed to be included in the definition of the Rabi-frequencies. In the simulation-program, the coefficients have to be propagated in timesteps which are smaller than any relevant timescale for the evolution of the system. Due to the large one-photon detuning ∆ for the Raman transition, the fastest evolution happens on a timescale of ∆−1, which is much faster than any other process. In order to allow timesteps larger than ∆−1, the state |2〉 is the-
refore adiabatically eliminated with respect to the Raman transition. The details of the adiabatic elimination are given in App. C, where it turns out to be useful to define a new set
of coefficients, C ̃1n = C1neiδt, C ̃n′
2 = Cn′
2 ei(E2/ħ+δ)t and C ̃n′′
3 = Cn′′
3 ei(E3/ħ+ωz)t, which
obey the following ‘equations of motion’:
C ̃ ̇1n = − i
[
(n − 1)ωz − |Ω12|2
4∆
]
C ̃n
1 + i Ω∗Raman
4
∑
n′′
C ̃n′′
3 Unn′′ (−η) (3.5.6)
C ̇ ̃
n′
2 = − i (n′ωz − δ) C ̃n′
2 − Γ1/2
2
C ̃n′
2 − i Ωpump
2
∑
n′′
C ̃n′′
3 Un′n′′ (ηpump) (3.5.7)
C ̇ ̃
n′′
3 =−i
[
n′′ωz − |Ω32|2
4∆ − δ
]
C ̃n′′
3 − i Ω∗pump
2
∑
n′
C ̃n′
2 Un′′n′ (−ηpump) (3.5.8)
+ i ΩRaman
4
∑
n
C ̃n
1 Un′′n(η).
Here ηpump = kpump · z0 is the Lamb-Dicke parameter for the pumping transition, ω = ω12 − ω32 and η = (k12 − k32) · z0 = η12 − η32 is the Lamb-Dicke parameter for the Raman transition, which depends on the difference wave vector of the Raman beams. The Raman Rabi-frequency defined in Eq. (3.4.4) enters naturally in the terms which couple C ̃1n and C ̃n′′
3 . The terms |Ωi2|2 /(4∆) (i = 1, 3) in Eqs. (3.5.6) and (3.5.8) correspond to the Stark shift of |1〉 and |3〉 induced by the respective Raman beams, however, these shifts are unimportant here since they can be removed by redefining
E1 and E3. The non-Hermitian term, −Γ1/2C ̃n′
2 /2, in Eq. (3.5.7) accounts for the spontaneous decay from |2〉 [59, 60].
3.5.2 Simulation results
For all simulations presented below we consider cooling of the axial motion and take ωz = 2π × 0.8 MHz (and Γ1/2 = 2π × 20.7 MHz for 40Ca+). ΩRaman, Ωpump and δ can

36 Chapter 3 - Laser cooling of trapped ions
(a) (b)
Figure 3.9: Time-evolution of the vibrational state population in a ‘typical’ quantum Monte Carlo-simulation, averaged over 100 histories with nmax = 5. σ−-polarized pumping laser, ΩRaman = 0.004Γ1/2 = 0.104ωz, Ωpump = 0.04Γ1/2 = 1.04ωz and δ = 0. (a) Solid line: n(t). Dashed lines: n(t)±σ(t), where σ(t) is the standard deviation of n(t) found from the 100 histories. (b) Time-evolution of the population in the vibrational levels, illustrating how the system is driven towards |n = 0〉.
be varied freely. For the Raman transition the laser configuration shown in Fig. 3.6 is assumed, which means that |η| = k32z0 = 0.199. The excited state |2−〉 or |2+〉
is chosen by the polarization of the pumping laser. For σ−-polarization (|2−〉) the pumping laser is assumed to propagate parallel to the z-axis, as in Fig. 3.6 such that ηpump = kpumpz0 = 0.199. For π-polarization (|2+〉) the pumping laser is assumed to propagate perpendicular to the z-axis, such that ηpump = 0. The technical details of evolving the wavefunction according to the Monte Carlo wavefunction method are discussed in App. C. A typical result from a simulation is shown in Fig. 3.9, where n-
(t) and P (n) are obtained from averaging over 100 histories. The increase in n(t) seen in Fig. 3.9(a) for times t 3000Γ−1
1/2 originates from a coherent transfer of population from |3, n〉 to
|1, n + 1〉 on the Raman transition. For times later than t ∼ 3000Γ−1
1/2, the coherence appears to be lost, and n(t) can be fitted by an exponential decay law as in Eq. (3.3.3) or Eq. (3.3.20), which yields an estimate of the cooling rate W and the steady-state value nSS 8. Alternatively, the steady-state value can be estimated by averaging over n(t) in the steady-state limit of a single history, which provides a more accurate determination of nSS than the value obtained from a fit to n(t) since only relatively few histories were simulated. Fig. 3.9(b) clearly show-
s how the population initially distributed over six vibrational levels is driven towards |n = 0〉 during the sideband-cooling process. From several simulations of this kind for different values of the pump Rabi-frequency and the Raman Rabi-frequency, both for a σ−-polarized pumping beam (|2〉=|2−〉) and a π-polarized pumping beam (|2〉=|2+〉), we have obtained the results for the cooling rate and the steady-state population plotted in Figs. 3.10 and 3.11 (plotted as symbols, the curves are discussed be-
low). The simulations are quite time-consuming, so in scanning
8Even though three internal levels are involved in the present scheme, a rate equation description of n(t) is still valid and leads in general to a well-defined cooling rate and steady-state value [57].

3.5. Quantum Monte Carlo simulations of the sideband-cooling scheme 37
(a)
(b)
Figure 3.10: Monte Carlo simulation results for a π-polarized pumping beam (|2〉=|2+〉). Solid (open) symbols are based on an average over 100 (25) histories with nmax = 5 (20). The curves are based on the rate equation model described in Sec. 3.5.3. (a) Wπ. The green dotted curve is a fit to Eq. (3.5.17). All other curves are plotted according to Eq. (3.5.17) with a and b scaled by Ω2
Raman. (b) nSS,π. The curves are plotted according to Eq. (3.5.26).
over a large parameter space, only relatively few histories were simulated for each set of parameters. Due to the statistical nature of the Monte Carlo wavefunction method and the low number of simulations, the cooling rates are only true within a factor of two, whereas the uncertainties of the steady-state values are below 10%. The results plotted as solid symbols are based on an average over 100 histories with nmax = 5.

38 Chapter 3 - Laser cooling of trapped ions
(a)
(b)
Figure 3.11: Same as Fig. 3.10, but for a σ−-polarized pumping beam (|2〉=|2−〉). (a) Wσ. All curves are plots of Wσ = Wπ/2, with Wπ given by Eq. (3.5.17) using a and b from Eqs. (3.5.18) and (3.5.19) scaled by Ω2
Raman. (b) nSS,σ. The curves are plotted according to Eq. (3.5.26) with απ replaced by 1 + ασ.
The results plotted as open symbols are based on an average over 25 histories with nmax = 20. Except for the simulations with ΩRaman = 0.08Γ1/2 or Ωpump = 0.2Γ1/2, nSS was obtained by averaging over n(t) in the steady-state of a single history.
From the cooling rate results in Fig. 3.10(a) and Fig. 3.11(a), we first observe (perhaps with the eye guided by the curves) that the cooling rate approaches zero in the limits of small and large Ωpump. Consequently, for a given Rabi-frequency there is a value of Ωpump for which the cooling rate is maximized. Furthermore, the higher the

3.5. Quantum Monte Carlo simulations of the sideband-cooling scheme 39
Raman Rabi-frequency, the higher is the maximal cooling rate, which could be anticipated, since high Rabi-frequencies imply a fast evolution towards steady-state. On the other hand, high Rabi-frequencies give rise to relatively high values of nSS, as it can be observed from Fig. 3.10(b) and Fig. 3.11(b), which is due to increased heating from offresonant excitations on the carrier and the blue sideband. For a π-polarized pumping laser, the cooling rates are generally larger and the steady-state va-
lues lower than for a σ-polarized pumping laser. This was anticipated from the discussion of the spontaneous decay in Sec. 3.4.1. However, since a π-polarized pumping laser gives rise to the heating cycle illustrated in Fig. 3.7(a), which is unaccounted for in the simulations, the results for a π-polarized pumping laser are only valid when ∆Zeeman Γ1/2. If this is not the case, the results should be considered as upper and lower limits for Wπ and nSS,π, respectively.
Figure 3.12: Sideband cooling for different values of the two-photon detuning δ using a σ−-polarized pumping laser, ΩRaman = 0.004Γ1/2 = 0.104ωz and Ωpump = 0.04Γ1/2 = 1.04ωz as in Fig. 3.9. All curves represent averages over 100 histories with nmax = 5.
Finally, a few simulations have been carried out in order to investigate the influence of the two-photon detuning, δ. The time-evolution of n(t) is shown in Fig. 3.12 for various values of |δ| in the range [0.01ωz; 0.1ωz], using a σ−-polarized pumping laser, Ωpump = 0.04Γ1/2 and ΩRaman = 0.004Γ1/2 as in Fig. 3.9. Simulations with even smaller detunings, δ = ±0.0005ωz, ±0.002ωz, ±0.005ωz, were also carried out, but the curves (not shown) were essentially coincident with the curve where δ = 0. For t-
he considered relatively small Rabi-frequencies, the cooling rate is significantly smaller for |δ| ≥ 0.05ωz (≥ 2π × 40 kHz) than for the case with δ = 0. Presumably, nSS,σ is also larger. For larger Rabi-frequencies, δ is expected to be less critical due to power broadening effects.
3.5.3 Comparison to a rate equation model
In the following, the results of the Monte Carlo simulations will be compared to a rate equation model. There are two reasons for doing this: First, to check if the results of the

40 Chapter 3 - Laser cooling of trapped ions
Monte Carlo simulations are reasonable. Second, because some simple formulas which describe the main features of W and nSS versus Ωpump and ΩRaman would be very useful for making a quick estimate of the performance of the sideband-cooling scheme for a given set of parameters. Especially, a formula predicting a relation between Ωpump and ΩRaman for which the cooling rate is maximized would be useful. The model will be kept simple since having done the simulations, it would be somewhat redundant to -
develop a detailed model. In trying to grasp the main behaviour of the cooling rate W and the state value nSS, some approximations will be made, which make the model more or less empirical. As a first model, it would be tempting to apply the (first-order) rate equation theory for a two-level system, presented in Sec. 3.3 above, by describing the three-level 40Ca+ ion in terms of parameters for a two-level ion. As illustrated in Fig. 3.13, we can think of the state |1〉 as the ground state of a two--
level ion with |3〉 being the excited state. Transitions between these states are driven by the Raman lasers, while ‘spontaneous decay’ is mediated by pumping from |3〉 to |2〉 followed by a real spontaneous decay to |1〉. Intuitively, it would be reasonable to assume that the ‘spontaneous decay rate’ is equal to the steady-state population in |2〉, resulting from driving of the pumping transition, times the real spontaneous decay rate from |2〉 to |1〉. Indeed this is the result obtained in Ref. [54] in-
 the limit where Ωpump Γ1/2. For an on-resonance pumping laser, we find in our case the ‘spontaneous decay rates’
Γπ = 2Ω2pump
3Γ1/2
and Γσ = Ω2pump
3Γ1/2
(3.5.9)
for a π-polarized pumping laser (|2〉=|2+〉) and a σ−-polarized pumping laser (|2〉=|2−〉), respectively. The coherence decay rate, which appears in Eq. (3.3.15) and Eq. (3.3.16), is given by [54]
Γcoh = Ω2pump
2Γ1/2
. (3.5.10)
Figure 3.13: The three-level system {|1〉,|2〉,|3〉} represented as a two-level system with ground state |1〉 and excited state |3〉.
Having established these decay rates, we can immediately obtain expressions for W and nSS from the rate equation theory for a two-level system by inserting Ω = ΩRaman,

3.5. Quantum Monte Carlo simulations of the sideband-cooling scheme 41
Γ = Γπ or Γ = Γσ and the above expression for Γcoh. In the rate equation theory, the resolved sideband limit was assumed, which translates to ΩRaman, Γπ,σ ωz in this model and is reasonably fulfilled in all the simulations. The low-intensity requirement ΩRaman Γπ,σ is, however, only fulfilled for very few of the simulations, i.e., for the cooling rate we have to use Eq. (3.3.16) (essentially identical to the low-intensity result). For nSS we would have to use Eq. (3.3.15). Using Eq. (3.3.16), we f-
ind that the cooling rate is given by
W = η2
( ΩRaman
Ωpump
)2
Γ1/2, (3.5.11)
from which we realize that the cooling rate becomes infinitely large when Ωpump → 0. This is unphysical! Instead, we expect the cooling rate to approach zero when Ωpump → 0 (as we also found in the simulations) because if there is no pumping to the excited state, cooling cannot take place. We note that the divergence is not just a result of keeping only the lowest order term in Eq. (3.3.16). It appears in this artificial two-level ion because the excitation and the spontaneous decay go via differe-
nt paths such that it is possible to keep Ω2 (Ω2
Raman) fixed while decreasing Γ (∼ Ω2pumpΓ−1
1/2), which is
impossible in a real two-level ion, where Ω2 is proportional to Γ. The divergence would disappear if a ‘power-broadening term’ proportional to Ω2 and independent of Γ and Γcoh, was inserted in the denominator of Rcoh(δ) [see Eq. (3.3.14)]. There is, however, no justification for inserting such a term since the result quoted in Eq. (3.3.12) [49] is sufficiently general (no restriction on Ω with respect to Γ; Ω ωz still required) that such a ‘power-broadening’ term already should have appeared if it-
 should be present. Now, instead of directly applying the two-level rate equation theory as above, we shall try to develop a model which takes more of the three-level features into account 9. To this end, we divide a cooling or heating cycle of the type |1, n〉 → |3, n′′〉 → |2, n′〉 → |1, n′′′〉 into two steps: (i) |1, n〉 → |3, n′′〉 and (ii) |3, n′′〉 → |2, n′〉 → |1, n′′′〉, of which step (ii) already has been discussed/solved above in the limit where Ωpump Γ1/2. Step (i) is in the following considered-
 as a two-level transition with linewidth 2Γcoh, driven by the Raman lasers with Rabi-frequency Ωn′′n = ΩRaman |Un′′n(η)|. In this case the steady-state population of the ‘excited’ state |3, n′′〉, which will be denoted ρ3(n → n′′), is [compare Eq. (2.1.27)]
ρ3(n → n′′) = Ω2
n′′n/4
Γ2
coh + δ2
n′′,n + Ω2
n′′n/2 , (3.5.12)
where
δn′′,n =(n − n′′ − 1)ωz (3.5.13)
when the Raman lasers are tuned to the red sideband of the transition. To describe steps (i) and (ii) by independent rates, i.e., to neglect any coherent effects in this three-level system, we have to assume that the Rabi-frequencies are small. For step (i), this means ΩRaman Γcoh ∼ Ω2pump/Γ1/2. For step (ii), we have already made
the assumption Ωpump Γ1/2, and hence the relation ΩRaman Ω2pump/Γ1/2 Γ1/2 should be fulfilled for the model to be valid. Under these assumptions, the rate by
9Klaus Mølmer is acknowledged for fruitful discussions about this model.

42 Chapter 3 - Laser cooling of trapped ions
which we run through the above cycle is approximately the steady-state population of |3, n′′〉 times the ‘decay rate’ from |3, n′′〉 to |1, n′′′〉, i.e., ρ3(n → n′′)Γπ,σ. To estimate the cooling rate, we note that the cooling cycle |1, n〉 → |3, n − 1〉 → |2, n − 1〉 → |1, n − 1〉 by far is stronger than any other cooling or heating cycles, and we shall therefore only consider this cycle. The rate by which we run through this cooling cycle is given by ρ3(n → n − 1)Γπ,σ such that the population P (n) in a-
 vibrational state |n〉 changes as follows
P ̇ (n) = [ρ3(n + 1 → n)P (n + 1) − ρ3(n → n − 1)P (n)] Γπ,σ, (3.5.14)
which in the Lamb-Dicke limit yields
 ̇n =
∑ ∞
n=0
nP ̇ (n) = − η2Γπ,σΩ2
Raman
4
∑ ∞
n=0
nP (n) Γ2
coh + nη2Ω2
Raman/2 . (3.5.15)
If the denominator in the sum was n-independent, n(t) would be described by an exponential decay law with a well-defined cooling rate. Since this is not the case, we assume instead that we can use some sort of (constant) average value for the n in the denominator. This value is denoted by n ̃. Under this assumption, the cooling rate for a π-polarized pumping beam is
Wπ = 1
4
η2Ω2
Raman Γ2
coh +  ̃nη2Ω2
Raman/2 Γπ = 2
3
η2( ΩRaman
Γ1/2 )2( Ωpump
Γ1/2 )2
( Ωpump
Γ1/2 )4 + 2 ̃nη2( ΩRaman
Γ1/2 )2 Γ1/2 (3.5.16)
and for a σ−-polarized pumping beam Wσ = Wπ/2, since Γσ = Γπ/2. These expressions for the cooling rate are finite when Ωpump → 0. Even better, the functions approach zero both for small and large values of Ωpump, which also is the case for the Monte Carlo simulation results in Fig. 3.10(a) and Fig. 3.11(a). Comparing with these results, we find indeed a reasonable agreement for n ̃ ∼ 1 which is a typical value of n in the simulations. To describe the results even better, we replace 2η2(ΩRaman/Γ1/2-
)2/3 and 2 ̃nη2(ΩRaman/Γ1/2)2 in Eq. (3.5.16) by two free parameters a and b, respectively, which yields the following empirical formula:
Wπ =
a( Ωpump
Γ1/2 )2
( Ωpump
Γ1/2 )4 + b Γ1/2, (3.5.17)
and again Wσ = Wπ/2. Using this expression the results for Wπ with ΩRaman = 0.008Γ1/2 have been fitted [green dotted line in Fig. 3.10(a)], which yields the following values for a and b
a =6.7 · 10−7 = 1.0 · 10−2
( ΩRaman
Γ1/2
)2
(3.5.18)
and
b =4.0 · 10−6 = 6.3 · 10−2
( ΩRaman
Γ1/2
)2
. (3.5.19)

3.5. Quantum Monte Carlo simulations of the sideband-cooling scheme 43
These numbers should be compared to the quantities which were replaced by a and b, i.e., 2η2(ΩRaman/Γ1/2)2/3 = 1.7 · 10−6 and 2n ̃η2(ΩRaman/Γ1/2)2 = 5.1 · 10−6n ̃, respectively, which agree with the fitted values of a and b within a factor of 3 (for n ̃ ≈ 1). The other curves in Fig. 3.10(a) are not fitted 10; they are plotted according to Eq. (3.5.17) with the values for a and b given above scaled by Ω2
Raman. For ΩRaman = 0.04Γ1/2
and ΩRaman = 0.08Γ1/2 no curves are plotted since the model breaks down for large values of ΩRaman. Taking the crudeness of the model into account and the fact that the criterion ΩRaman Ω2pump/Γ1/2 Γ1/2 only is fulfilled for the largest values of Ωpump, all the curves fit the cooling rates fairly well. In order to compare to the results for Wσ, the curves in Fig. 3.11(a) are plotted using Wσ = Wπ/2 and the values of a and b given above scaled by Ω2
Raman. Again the model agrees reasonably well with the
simulations 11. From Eq. (3.5.17) and the fitted value of b, we find that the cooling rate is maximized for
Ωpump = 0.4
√
ΩRamanΓ1/2, (3.5.20)
for which Wπ = 2Wσ ≈ 0.02ΩRaman. In order to estimate nSS from our simple model, we consider only the two lowest vibrational levels where n = 0, 1. This is a valid approximation if nSS is so low that all population essentially is piled up in the state |n = 0〉. In the following the cooling rate for going through steps (i) and (ii) above, starting from |1, 1〉 and ending in |1, 0〉, is denoted by γ(1 → 0). Similarly, the heating rate for going from |1, 0〉 to |1, 1〉 is denoted by γ(0 → 1). In equilibri-
um γ(1 → 0)P (1) = γ(0 → 1)P (0), which yields nSS ≈ P (1) ≈ γ(0 → 1)/γ(1 → 0) when nSS 1. The dominating contribution to the cooling rate originates from the cycle |1, 1〉 → |3, 0〉 → |2, 0〉 → |1, 0〉, which yields the cooling rate
γ(1 → 0)π,σ = ρ3(1 → 0)Γπ,σ. (3.5.21)
The heating rate γ(0 → 1) has three contributions, namely from events where the vibrational quantum number increases in one of the three transitions in the cycle |1, 0〉 → |3, n′′〉 → |2, n′〉 → |1, 1〉. Heating on the Raman transition gives the contribution ρ3(0 → 1)Γπ,σ. For a π-polarized pumping beam, the pumping step does not give rise to heating since ηpump = 0 is assumed in this case. For a σ−-polarized pumping beam, the contribution from the pumping transition to the heating rate is ρ3(0 → 0)η2-
Γσ. The heating contribution due to the spontaneous decay is ρ3(0 → 0)η2απ,σΓπ,σ, where the values of απ,σ are given by
απ =2/5 and ασ = 1/5, (3.5.22)
which follows from Eq. (3.3.8) and the distribution-functions [52]
Wπ = 3
8 (1 + cos2 θ) and Wσ = 3
4 (1 − cos2 θ), (3.5.23)
10Above, the data with ΩRaman = 0.008Γ1/2 were used for the fit since these are the data with the smallest Raman Rabi-frequency where the number of simulated data points is maximal (four), thus optimizing the validity of the model and the number of data points. 11A fit to Eq. (3.5.17) with a new set of parameters, a and b, does not give a significantly better agreement for Wσ.

44 Chapter 3 - Laser cooling of trapped ions
where the indices π and σ still denote the polarization of the pumping laser (not the polarization of the emitted photon). In total we find
γ(0 → 1)π =ρ3(0 → 1)Γπ + ρ3(0 → 0)η2απΓπ (3.5.24)
and
γ(0 → 1)σ =ρ3(0 → 1)Γσ + ρ3(0 → 0)η2(ασ + 1)Γσ. (3.5.25)
Thus, we find for a π-polarized pumping beam the steady-state population
nSS,π = γ(0 → 1)π
γ(1 → 0)π
(3.5.26)
=
απ
[
Ω4pump + 2η2Ω2
RamanΓ2
1/2
]
Ω4pump + 4ωz2Γ2
1/2 + 2Ω2
RamanΓ2
1/2
+ Ω4pump + 2η2Ω2
RamanΓ2
1/2
Ω4pump + 16ωz2Γ2
1/2 + 2η2Ω2
RamanΓ2
1/2
.
nSS,σ can be obtained from nSS,π by replacing απ with 1+ασ. The curves in Fig. 3.10(b) and Fig. 3.11(b) are plotted according to these expressions for the steady-state values. Clearly, the quantitative agreement with the simulations is poor, and fitting the results of the simulations to an empirical expression, with the same dependence on Ωpump as in Eq. (3.5.26), does not lead to a significantly better agreement. We note, however, that the model, strictly speaking, is only valid for the largest v-
alues of Ωpump, where the assumption nSS 1 is only poorly fulfilled. Taking this into account and the fact that the simulated steady-state values vary by as much as six orders of magnitude over the considered range of Ωpump, it is not surprising that the quantitative agreement with the model is doubtful. Qualitatively, the simulations and the rate equation model agree in the sense that nSS increases with increasing Ωpump and ΩRaman and that the variation of nSS with Ωpump is largest for small valu-
es of ΩRaman. Going into more detail, it is furthermore found that in the limit Ωpump → 0, both the simulation results and the curves based on the rate equation model level off to constant values. For the rate equation model, it follows from Eq. (3.5.26), when ΩRaman ωz, that the limiting value for nSS when Ωpump → 0 is proportional to Ω2
Raman. This proportionality is well fulfilled by the simulated values of Wπ and Wσ at the lowest used value of Ωpump = 0.02Γ1/2 for values of ΩRaman up to ΩRaman = 0.02Γ1/2 = 0.52ωz (with the exception of Wσ at ΩRaman = 0.002Γ1/2). Now, instead of trying to obtain a better agreement with the simulations by improving the rate equation model for nSS, we shall take a practical standpoint: It is quite clear that a low value of nSS only can be obtained for low values of the Rabi-frequencies. Whether th-
e theoretical value is 10−4 or 10−5 does not matter too much since experimentally this is anyway very hard to reach and to measure. The cooling rates are well described by Eq. (3.5.17) for small values of ΩRaman, and in this case we have a good rule of thumb [Eq. (3.5.20)] for obtaining the maximal possible cooling rate. Time will show what the corresponding steady-state value turns out to be in experiments.
3.5.4 Conclusion
In conclusion, the simulations show that cooling to near the motional ground state is feasible. Values of nSS below 1% are attainable in theory. Cooling rates of some tens

3.6. Measuring the population of motional states 45
of kHz can be obtained, which is acceptable, since heating from external sources is expected to take place on a time-scale of ∼ 100 ms (see the discussion in Chap. 7). The cooling rates and nSS vary significantly with the Rabi-frequencies, generally with high Rabi-frequencies yielding high cooling rates and large steady-state values. Thus, the fastest way to reach a low steady-state value is to start out with large Rabi-frequencies and lower the Rabi-frequencies according to Eq. (3.5.20), until a -
sufficiently low steadystate value can be reached. These conclusions hold for both polarizations of the pumping beam, although cooling is more efficient for a π-polarized pumping beam, when ∆Zeeman Γ1/2 is fulfilled. To avoid creating the large magnetic field needed to fulfill
this criterion, we will use a σ−-polarized pumping in the experiments, but keep in mind that the performance of the scheme can be improved. Finally, from the results in Fig. 3.12, we learned that the frequency of the Raman transition must be precisely controlled on the level of a few tens of kHz at least for relatively low Rabi-frequencies.
3.6 Measuring the population of motional states
In order to experimentally characterize the performance of the sideband-cooling scheme, i.e., to measure W and nSS, we need to be able to measure the average vibrational excitation n or, even better, the population P (n) in a range of vibrational levels. Here we describe two well-known methods, one for measuring n [35, 37] and one method for determining P (n) over a range of vibrational levels [61]. We assume that it can be determined with 100% efficiency, if the ion is in the internal state |1〉 o-
r |3〉. Furthermore, we assume that all population initially is in the internal state |1〉. Most of the population should already be in |1, 0〉 after sideband cooling, and the rest can be optically pumped to |1〉 without significantly changing the distribution over vibrational levels, by leaving a σ−-polarized pumping laser on for a period after the sideband-cooling process. Now, for measuring n, assume that the distribution over the vibrational levels is a thermal distribution. Starting out with all -
population in |1〉 and applying the Raman lasers for a time T on the blue sideband (BSB), the population in |3〉 will be
P BSB =
∑ ∞
n=1
n(n−1)
(n + 1)n sin2 (|Ωn,n−1| T /2) , (3.6.1)
where Ωn′n = ΩRamanUn′n(η). By applying several such BSB-pulses and detecting the internal state (starting with all population in |1〉 before each pulse), P BSB can be measured as the probability for a transfer to |3〉. A pulse of the same duration on the red sideband (RSB) will result in a population in state |3〉 of
P RSB =
∑ ∞
n=0
n(n+1)
(n + 1)n+2 sin2 (|Ωn,n+1| T /2) , (3.6.2)
which can be measured similarly. From Eqs. (3.6.1) and (3.6.2), it follows that
P RSB
P BSB = n
n + 1 ⇐⇒ n = P RSB
P BSB − P RSB . (3.6.3)

46 Chapter 3 - Laser cooling of trapped ions
In practice, T ≈ π/(ηΩRaman) should be chosen since this choice maximizes the values of P BSB and P RSB when n 1, and hence it minimizes the uncertainty on n. To avoid errors from being slightly off-resonant with the RSB or the BSB, one should measure sideband absorption spectra as in Refs. [35, 37], by varying the two-photon detuning δ around the sideband frequencies. More detailed information about the population of the vibrational states can be obtained, e.g., by applying a BSB-pulse for a time-
 T and measuring the population in |3〉 versus T , i.e., measuring Rabi-oscillations of the population. Since the effective BSB Rabi-frequency is n-dependent, the oscillation of the population in |3〉 will contain many n-dependent frequency components, each with weight P (n). The weight functions P (n) can then be determined from a fit to the measured data (or a Fourier transform), possibly assuming some relation between the weight functions, e.g., that of a thermal state [37, 61].

47
Chapter 4
Internal state detection
In this chapter we turn to the issue of detection of the internal state of an ion, i.e., discrimination between the qubit states |↓〉 = 2S1/2(mJ = −1/2) and |↑〉 = 2S1/2(mJ = +1/2). As discussed in the previous chapter (where we used the notation |1〉=|↓〉and |3〉=|↑〉), discrimination between these two states is a prerequisite for gaining knowledge about the vibrational state of the ions. Furthermore, it is necessary for determining the outcome of a quantum logic operation. The chapter is organized as -
follows. In Sec. 4.1, we discuss in general terms how to detect the internal state of an ion. In Sec. 4.2 we present the scheme we are pursuing, which is based on two so-called stimulated Raman adiabatic passage (STIRAP) processes [62]. The theory behind STIRAP is presented in Sec. 4.2.1, some realistic parameters for the process to work in 40Ca+ is given in Sec. 4.2.2, and in Sec. 4.2.3 it is shown how the two STIRAP processes can be turned into a single (fast) process. In Sec. 4.3 an alternative-
 scheme is briefly discussed. A conclusion is given in Sec. 4.4.
4.1 Internal state detection using shelving
To discriminate between the two qubit states, we want to obtain a situation where the ion scatters light only if it initially is in |↑〉, and not if it initially is in |↓〉. As mentioned in the description of Doppler cooling, a 40Ca+ ion can be observed by detecting 397 nm light emitted during Doppler cooling. If we somehow could take the ion from |↓〉 to a state where it does not scatter light, while leaving it untouched if it is in |↑〉, and subsequently apply the cooling lasers and detect fluoresce-
nce light, the desired situation will be achieved. From the 40Ca+-level scheme in Fig. 3.3, it appears that the nonscattering state of choice is the metastable 2D5/2 state. When the ion is in the 2D5/2 state, the optically active electron of the ion is said to be shelved [63] and remains in this state until it decays to the ground state by an electric quadrupole transition. Owing to the lifetime of the 2D5/2 state of more than a second, it is possible to apply the cooling lasers and collect fluore-
scence light in a sufficiently long period that an unequivocal distinction between the ion being initially in |↓〉 or |↑〉 can be made. This is demonstrated in Chap. 10. The states |↓〉 and |↑〉 only differ with respect to the projection of the ions’ total spin on the quantization axis (mJ = ±1/2). Hence a method which state-selectively

48 Chapter 4 - Internal state detection
takes the ion to the 2D5/2 state must exploit this difference. One possible method is to break the degeneracy of the energy levels by applying a (large) magnetic field, followed by a resonant excitation from |↓〉 to the 2D5/2 state, the last step being off-resonant with respect to |↑〉 [64, 65]. We shall not discuss this possibility any further, but instead turn to the possibility of discriminating between |↓〉 and |↑〉 by exploiting the fact that the interaction between the ion and circularly polariz-
ed light depends on the internal state |↓〉 or |↑〉.
4.2 State-selective shelving using STIRAP
One method for transferring population between two quantum states is by adiabatic population transfer using STIRAP. In STIRAP, population transfer is achieved through the interaction of two laser-pulses with an atomic or molecular quantum system. Experimentally STIRAP has been demonstrated by several groups (see the review article by Bergmann et al. [62] and references therein). In most experiments, the laser pulses have effectively been created by letting atomic or molecular beams pass through tw-
o displaced laser beams with constant intensity. With cold trapped ions the laser pulses can instead be created using acoustooptic modulators (see Chap. 8).
4.2.1 STIRAP – general theory
In its simplest form, STIRAP takes place in a three-level Λ-system as illustrated in Fig. 4.1(a), with the levels denoted by |1〉, |2〉 and |3〉. Adiabatic population transfer is supposed to take place from |1〉 to |3〉, which both are assumed to be long-lived on the timescale of the entire STIRAP process. The three-level system interacts with two laser-fields, which act on the |1〉–|2〉 and the |2〉–|3〉 transition, respectively, having detunings ∆i2 (i = 1, 3) with respect to the transition frequencies a-
nd time-dependent Rabi-frequencies Ωi2(t) as indicated in Fig. 4.1(a). From the excited state |2〉, coherence can be lost by spontaneous decay to |1〉 or |3〉, or population can be lost from the threelevel system by spontaneous decay to states outside the system. The pulse sequence used for STIRAP is shown in Fig. 4.1(b). It is often referred to as being counter-intuitive in the sense that the first applied pulse, Ω32(t), couples the final state |3〉 and the intermediate state |2〉. This coupling creat-
es, however, a new set of eigenstates of the system in such a way that by applying a second pulse, Ω12(t), on the |1〉–|2〉 transition which partly overlaps in time with the first pulse, it is possible to transfer all population from |1〉 to |3〉. In the rotating-wave approximation and assuming real Rabi-frequencies (without loss of generality), the interaction of the laser-fields with the three-level system is described by the Hamiltonian [62]
H=ħ
2


0 Ω12(t) 0 Ω12(t) 2∆12 Ω32(t) 0 Ω32(t) 2(∆12 − ∆32)

 (4.2.1)
in the basis {|1〉, |2〉, |3〉}. When ∆12 − ∆32 = 0, the (time-dependent) eigenstates

4.2. State-selective shelving using STIRAP 49
(a) (b)
Figure 4.1: STIRAP in a three-level system. (a) The three levels, |1〉, |2〉 and |3〉, and lasers with detuning ∆12 and ∆32 and time-dependent Rabi-frequencies Ω12(t) and Ω32(t). (b) The counter-intuitive pulse sequence, here a set of Gaussian pulses which transfers all population from |1〉 to |3〉.
belonging to this Hamiltonian are [66]
|ψ+〉 = sin Θ sin Φ |1〉 + cos Φ |2〉 + cos Θ sin Φ |3〉 (4.2.2)
|ψ0〉 = cos Θ |1〉 − sin Θ |3〉 (4.2.3)
|ψ−〉 = sin Θ cos Φ |1〉 − sin Φ |2〉 + cos Θ cos Φ |3〉 , (4.2.4)
where
tan Θ = Ω12
Ω32
and tan Φ =
√Ω212 + Ω232
∆12 + √∆212 + Ω212 + Ω232
=
√
− ω−
ω+
, (4.2.5)
with ω± being defined by the energy eigenvalues
ħω± =ħ
(
∆12 ±
√
∆212 + Ω212 + Ω232
)
and ħω0 = 0. (4.2.6)
In order to transfer population from |1〉 to |3〉 in a coherent way and without population loss due to spontaneous decay, it is desirable not to excite state |2〉. Of the three eigenstates above, the state |ψ0〉 is therefore particularly interesting, since it is a coherent superposition of only state |1〉 and |3〉. Starting out with all population in |1〉 and assuming Ω32 Ω12 (Θ = 0), it can be observed that |〈ψ0|1〉| = 1, and |〈ψ±|1〉| = 0, i.e., in terms of the new eigenstates, the system is in the state-
 |ψ0〉. Then, by lowering Ω32 while increasing Ω12 until Ω12 Ω32, the angle Θ changes from 0 to π/2, i.e., the state |ψ0〉 is rotated from |1〉 to |3〉. At the same time |ψ±〉 is being rotated as well. Now, if this change of Rabi-frequencies is performed in such a way that the quantum state of the system adiabatically follows |ψ0〉, while all three eigenstates are being rotated, then population will be transferred from |1〉 to |3〉. Adiabatic following

50 Chapter 4 - Internal state detection
requires that [67]
∣∣∣∣
dΘ dt
∣∣∣∣ =
∣∣∣∣∣
Ω ̇ 12Ω32 − Ω12Ω ̇ 32
Ω212 + Ω232
∣∣∣∣∣ |ω± − ω0| . (4.2.7)
For the r.h.s of this inequality always to be large, we have to assume that ∆12 = ∆32
Ω12, Ω32, which implies |ω± − ω0| = √Ω212 + Ω232. If the Rabi-frequencies vary smoothly in time over the duration T of the STIRAP process, then, since Θ changes by π/2, the average value of |dΘ/dt| is π/(2T ). Inserting this average value in the adiabaticity criterion Eq. (4.2.7) the condition
√
Ω212 + Ω232 T 1 (4.2.8)
is obtained. The Rabi-frequencies can be varied in many different ways, while fulfilling the adiabaticity criterion [68], however, the most frequently encountered time-dependence of the Rabi-frequencies is a Gaussian pulse, having its origin in the beam-experiments where the time-dependence is defined by the usual Gaussian profile of the laser-beams. In the following it is assumed that the pulses are Gaussian, as shown in Fig. 4.1(b), of the form
Ω12(t) =Ω0
12 exp
[
−
( t − ∆t/2 τ
)2]
(4.2.9)
Ω32(t) =Ω0
32 exp
[
−
( t + ∆t/2 τ
)2]
, (4.2.10)
with a characteristic width τ and a delay ∆t between the pulses. With this choice of pulses, it can be shown that the optimal choice of delay with respect to the adiabaticity criterion is ∆t = τ ≡ ∆tad [67]. In practice, the pulses are truncated at positive and negative times where the value of the exponential functions is negligible.
4.2.2 State-selective shelving in 40Ca+ using STIRAP
A state-selective transfer of population from |↓〉 to the 2D5/2 state can be achieved using two STIRAP processes as illustrated in Fig. 4.2. The first STIRAP process takes population from the 2S1/2 state to the 2D3/2 state, using the 2P1/2 state as the excited state in the STIRAP process. By using a σ+-polarized laser, |↓〉 is coupled to the 2P1/2(mJ = +1/2) level, while |↑〉 is unaffected, thus making this STIRAP process stateselective. By a second STIRAP process, population is transferred from the -
2D3/2 state to the 2D5/2 state 1. This step need not take place between any particular sublevels, however, in order to optimize the coupling between the various sublevels and hence to obtain the largest Rabi-frequencies at a given laser-intensity, the entire STIRAP process should take place as follows: |↓〉– 2P1/2(mJ = +1/2)– 2D3/2(mJ = +3/2)2P3/2(mJ = +3/2)– 2D5/2(mJ = +5/2). In the theory described above, STIRAP works with 100% efficiency if the adiabaticity criterion is fulfilled. In real life t-
here are of course a range of practical problems, which will be addressed in the following.
1Note that a single STIRAP process from the ground state to the 2D5/2 state with the 2P3/2 state as the excited state cannot be state-selective.

4.2. State-selective shelving using STIRAP 51
Figure 4.2: The double STIRAP-process in 40Ca+. The first STIRAP process (thick arrows) from |↓〉 to the 2D3/2 state is state-selective since |↑〉 is unaffected by the σ+-polarized beam on the 2S1/2- 2P1/2 transition. The second STIRAP process (thin arrows) goes from the 2D3/2 state to the 2D5/2 state.
Non-zero two-photon detuning
To what extent can we keep the two-photon detuning δ ≡ ∆12 − ∆32 equal to zero, and what are the implications if it is non-zero? The answer to the first part of the question is ‘a few MHz’, having its origin in laser frequency drifts (see Chap. 8). The implications of a non-zero two-photon detuning are discussed in Refs. [69, 70], where it is shown that a non-zero two-photon detuning results in an admixture of the excited state |2〉 in ψ0. In particular, the loss mechanism presented by spontaneous -
decay from |2〉 and out of the system is considered. In the limit where |δ| , |∆i2| Ω0 ≡ Ω012 = Ω032 (i = 1, 3) the transfer efficiency, i.e., the probability by which population is transferred from |1〉 to |3〉, is roughly equal to exp[−CΓ2τ δ2/(Ω0)2], where C is a constant which depends on the specific pulse sequence and Γ2 is the decay rate from |2〉 [70]. In order to determine suitable parameters for the Rabi-frequency Ω0, the pulse width τ , the delay ∆t and an average one-photon detuning ∆ = (∆1-
2 + ∆32)/2 for a realistic non-zero two-photon detuning, some numerical simulations have been performed by Frank K. Jensen [71] using the formalism of Ref. [70]. The simulations were performed with the 2D3/2- 2P3/2- 2D5/2 STIRAP process in mind, using Γ2 = Γ3/2 = 2π × 21.5 MHz, i.e., the spontaneous decay rate from the 2P3/2 state to the ground state, but, as discussed below, the results can almost directly be applied to the other STIRAP process. First we consider the variation in transfer efficie-
ncy with the delay ∆t. With the Rabi-frequency varied in the range Ω0/2π = 80 − 800 MHz, and with fixed ∆ = 2π × 5 MHz and δ = 2π × 5 MHz, which is believed to be a worst-case scenario for the two-photon detuning, it was found that the transfer efficiency only varied weakly with the delay, but having a maximum around ∆t = 1.3τ ≡ ∆tsp. Although the optimum with respect to non-adiabatic losses (which is not taken into account in the simulations) is ∆tad = τ , it should be easy to keep both types of -
losses small, since the dependence on ∆t was found to be weak in the simulations. In all further simulations ∆t = 1.3τ was used. It was then found that the transfer efficiency is relatively insensitive to the one-photon detuning over the range ∆/2π = 0 − 500 MHz, when |δ| /2π < 10 MHz and with the Rabi-frequency Ω0/2π = 150 MHz and the pulse width τ = 5 μs fixed. In accordance with the expression exp[−CΓ2τ δ2/(Ω0)2] for the

52 Chapter 4 - Internal state detection
transfer efficiency, the simulations also showed that large Rabi-frequencies, small τ and, of course, a small two-photon detuning gave a high transfer efficiency. With a realistic set of parameters of
τ = 5 μs, ∆t = 6.5 μs, Ω0 = 2π × 300 MHz (4.2.11)
and, say, ∆ = 2π × 20 MHz, the transfer efficiency is ∼ 97% for the worst-case twophoton detuning of |δ| /2π = 5 MHz. If the two-photon detuning is halved to |δ| /2π = 2.5 MHz, the transfer efficiency would be ∼ 99%. The adiabaticity criterion is well fulfilled by the parameters above. The stated Rabi-frequency requires intensities of about 3 · 105 mW/cm2 and 3 · 104 mW/cm2 for the 850 nm 2D3/2- 2P3/2 transition and the 854 nm 2D5/2- 2P3/2 transition, respectively, which in both cases is realistic-
. To a large extent the results of the simulations also apply to the |↓〉– 2P1/2(mJ = +1/2)– 2D3/2 STIRAP process since the spontaneous decay rate from the 2P1/2 state is almost the same as for the 2P3/2 state. The transfer efficiency may even be larger for this first STIRAP process since the spontaneous decay from 2P1/2(mJ = +1/2) goes back to |↓〉 in ∼ 2/3 of the cases. Thus population remains within the three-level system and has another chance of being transferred to the 2D3/2 state. Using Ω0 = -
2π × 300 MHz again, intensities of 3 · 104 mW/cm2 are required on both transitions, which once again is realistic.
Finite ion-velocity
The initial tests of the STIRAP-scheme will be performed on a Doppler laser-cooled ion. Since the effective power-broadened linewidths of the transitions are larger than the trap frequency, the ion can to a good approximation be treated as a free particle with respect to both two-photon STIRAP transitions. If the Doppler cooling limit is reached, the root-mean-square velocity is vrms ≈ 0.6 m/s, which results in a Doppler-shift of 2π × 0.7 MHz of the 850 nm and the 854 nm D–P transitions and in gen-
eral a non-zero two-photon detuning in the STIRAP process. If the 850 nm and the 854 nm beams are co-propagating, the first-order Doppler-shift cancels to within 0.5% and hence it is not expected to cause any problems. For the |↓〉– 2P1/2(mJ = +1/2)– 2D3/2 STIRAP process involving the 397 nm transition and the 866 nm transition, the same trick does not work very well due to the larger wavelength difference, and we end up with a Doppler-shift of 2π × 0.8 MHz using co-propagating beams and the same v-
alue for vrms as above. According to the simulations discussed above, a two-photon detuning of this order of magnitude would still allow population transfer with > 99% probability, however, since the ion sometimes moves faster than vrms and the Doppler cooling limit is not necessarily reached, a larger two-photon detuning cannot be ruled out. If the two-photon detuning turns out to be critical for this STIRAP process, it can be made less sensitive to the two-photon detuning by increasing the Rabi--
frequency on one or both of the transitions. After sideband cooling the Doppler-shift is not expected to present any problem.
Other effects
In the theory section we considered a pure three-level system, however, both STIRAP processes in 40Ca+ could in principle involve several Zeeman sublevels, for example up to 14 magnetic sublevels for the 2D3/2- 2P3/2- 2D5/2 STIRAP process. If the polarization

4.2. State-selective shelving using STIRAP 53
(a) (b)
Figure 4.3: STIRAP in a five-level system. (a) The five levels and lasers with detunings ∆12, ∆32, ∆34, and ∆54 and Rabi-frequencies Ω12(t), Ω32(t), Ω34(t) and Ω54(t). (b) Two STIRAP pulse sequences, with delay D between them, which transfer all population from |1〉 to |5〉.
of the laser-fields is chosen right, it all comes down to three relevant levels again. If not, one may end up with a very rich multi-level system, where adiabatic transfer in some cases is blocked. This is discussed further in Ref. [62] and in a series of papers on STIRAP in multi-level systems [72, 73, 74].
Varying Zeeman-shifts induced by fluctuating magnetic fields will contribute to a non-zero two-photon detuning, hence any such fields should be shielded to the necessary extent.
Furthermore, any residual so-called micromotion, which is a fast quiver motion at the same frequency as the oscillation frequency of a voltage applied to the trap electrodes (see Chap. 7 and Chap. 9), will contribute to the two-photon detuning. Hence micromotion must be minimized.
Since the STIRAP process relies on maintaining a coherence between two internal states of the ion, the laser sources should have a coherence time longer than the duration of the STIRAP process, and jumps of the laser light phase should be avoided.
4.2.3 STIRAP in a five-level system
To be able to consider the two STIRAP processes as separate processes, as we did above, the two sets of pulses need to be separated in time. One might wonder if it is possible to describe the two processes as one and possibly also reduce the duration of the double STIRAP process by overlapping the two sets of STIRAP pulses in time instead of running them as individual processes.
In order to describe this situation, we consider the five-level system shown in Fig. 4.3(a) interacting with four laser beams having the indicated Rabi-frequencies and one-photon detunings. For each of the two three-level systems, |1〉-|2〉-|3〉 and |3〉-|4〉-|5〉, we can write down a Hamiltonian as in Eq. (4.2.1). The full Hamiltonian for the five-level system is the sum of the two three-level Hamiltonians in the basis {|1〉,|2〉,|3〉,|4〉,|5〉}

54 Chapter 4 - Internal state detection
and looks as follows:
H=ħ
2


0 Ω12 0 0 0
Ω12 2∆12 Ω32 0 0 0 Ω32 2(∆12 − ∆32) Ω34 0 0 0 Ω34 2∆34 Ω 0 0 0 Ω54 2(∆34 − ∆54)


. (4.2.12)
Assuming two-photon resonance in each of the three-level systems, i.e., ∆12 − ∆32 =
∆34 − ∆54 = 0, we find an eigenstate |Ψ〉 = ∑5
i=1 ci |i〉 with eigenvalue 0 if and only if c2 = c4 = 0, namely
|Ψ0〉 =N [cos φ cos Θ |1〉 − cos φ sin Θ |3〉 + sin φ sin Θ |5〉], (4.2.13)
where N is a normalization factor, Θ is defined as before and
tan φ = Ω34
Ω54
. (4.2.14)
In this case it is possible to adiabatically transfer population from |1〉 to |5〉 by changing both Θ and φ from 0 to π/2. Consider Gaussian pulses as shown in Fig. 4.3(b), with Ω12(t) and Ω32(t) defined by Eqs. (4.2.9)–(4.2.10), and
Ω34(t) =Ω0
34 exp
[
−
( t − ∆t/2 − D τ
)2]
(4.2.15)
Ω54(t) =Ω0
54 exp
[
−
( t + ∆t/2 − D τ
)2]
, (4.2.16)
i.e, Ω34(t) and Ω54(t) are delayed by D with respect to Ω12(t) and Ω32(t), respectively. For D τ population is transferred step-wise, first from |1〉 to |3〉 and then to |5〉, as in the previously considered situation of two independent sets of pulses. The interesting regime in this context is therefore |D| τ . In Fig. 4.4 the population Pi in state |i〉 (i = 1, 3, 5) is plotted for delays D = τ and D = −τ . In both cases the transfer from |1〉 to |5〉 is completed in a time which is of the order of the-
 pulse width τ . In fact, the process is faster with a negative delay - a double counter-intuitive pulse sequence. Similar ideas of population transfer in a multi-level system were put forward in Ref. [62], and in Ref. [75] where the particular case D = 0 was considered, and demonstrated experimentally in Ref. [76]. From Fig. 4.4 we also note that the state |3〉 is not fully populated before the population is transferred further on to |5〉; especially for D = −τ , very little population is found in -
state |3〉. In our case the states |3〉 and |5〉, which corresponds to the 2D3/2 state and the 2D5/2 state, respectively, have almost equal natural lifetimes of more than a second. Thus, we do not suffer from any appreciable decay from the intermediate state |3〉. However, one could imagine a similar double STIRAP process in another atomic or molecular system, where the initial and final states (|1〉 and |5〉) have a long lifetime of, say, a second, but the intermediate state |3〉 has a lifetime of only,-
 say, 100 μs. In this case there can be a non-negligible probability of spontaneous decay from |3〉 during a double STIRAP process of some microseconds duration. Denoting the spontaneous
decay rate from |3〉 by Γ3 and defining I3 = ∫ ∞
−∞ P3(t/τ )d(t/τ ), the decay probability

4.3. State-selective shelving in 40Ca+ using a Raman transition 55
(a) (b)
Figure 4.4: (a) Population transfer in a five-level system with delay D = τ between the two sets of STIRAP pulses. (b) Same as (a), but with negative delay D = −τ .
from |3〉 is given by [1 − exp(−Γ3τ I3)] ≈ Γ3τ I3, when Γ3τ I3 1. In Fig. 4.5, the value of the integral I3 is plotted as a function of the delay, showing that a negative delay reduces the decay probability significantly.
Figure 4.5: Value of I3 = ∫ ∞
−∞ P3(t/τ )d(t/τ ) versus delay D. For Γτ I3 1, I3 is equal to the probability of a decay from state |3〉 in units of Γτ .
4.3 State-selective shelving in 40Ca+ using a Raman
transition
Transfer of population from the ground state to the 2D5/2 state can also take place using a Raman transition between the two states via the 2P3/2 state. State-selectivity can be obtained as described in the following. For a given laser polarization on the 2S1/2– 2P3/2 and the 2D5/2– 2P3/2 transitions, the Raman transition will involve certain Zeeman sublevels of the three states. The Rabi-frequency depends on the coupling strengths between these Zeeman sublevels (see

56 Chapter 4 - Internal state detection
the tabulated Clebsch-Gordan coefficients in App. B). By choosing appropriate polarizations of the two laser beams, it is possible to obtain different Raman Rabi-frequencies, Ω↓ and Ω↑, for a Raman transition from |↓〉 and |↑〉, respectively, to the 2D5/2 state. Thus, by driving the Raman transition for a time T , such that Ω↓T /2 = mπ, where m is (close to) an odd integer, and Ω↑T /2 = nπ, where n is (close to) an even integer, population initially in |↓〉 will effectively experience a π-pulse and e-
nd up in the 2D5/2 state, whereas population in |↑〉 will experience multiple 2π-pulses and end up in |↑〉, where it started 2. By going through Table B.3 and B.5 in App. B, it can be found that there exist two non-equivalent polarization configurations, where Ω↑ and Ω↓ are different. One
configuration is a σ−–π configuration, meaning that the 2S1/2– 2P3/2 ( 2D5/2– 2P3/2)
laser is σ−-polarized (π-polarized), for which the ratio Ω↓/Ω↑ = √2. Noting that
12√2 = 16.97... ≈ 17, we can use m = 17 and n = 12 to obtain the desired effective
π- and 2π-pulses to a good precision, or similarly exploit that 70√2 = 98.995... ≈ 99.
The other configuration is a σ−–σ+ configuration for which Ω↓/Ω↑ = √5, in which case
we, for example, can exploit that 17√5 = 38.013... ≈ 38 or 72√5 = 160.996... ≈ 161. If
requested, the ratio Ω↓/Ω↑ can be changed to 1/√2 and 1/√5 in the two cases by using
a σ+ − π configuration and a σ+ − σ− configuration, respectively, instead.
4.4 Conclusion
Each of the two methods for state-selective shelving presented above has its own advantages and drawbacks. The STIRAP technique has the advantage of being quite robust with respect to the pulse-area of the applied laser pulses [62]. It has the drawback of involving four different laser wavelengths. Fortunately, two of them (397 nm and 866 nm) are the same as for Doppler cooling and the other two (850 nm and 854 nm) can be supplied in a relatively cheap and easy way by diode lasers. The technique b-
ased on the Raman transition is attractive in the sense that it requires only a single step involving only two laser sources. Unfortunately, the technique requires good control of the pulse-area and furthermore the requirement of a 393 nm laser is a bit unattractive 3. As stated in the introduction of this chapter, the scheme we are pursuing is the STIRAP based scheme mainly due to the robustness of the STIRAP technique and the good availability of laser sources. Furthermore, we saw that although -
the scheme in principle involves two STIRAP processes, they can be turned into a single five-level STIRAP process, which in itself will be interesting to study. The experimental equipment and setup for implementing the STIRAP processes are presented in Chap. 8. Some progress towards a demonstration of STIRAP is presented and discussed in Chap. 10.
2For m even and n odd, the roles of |↓〉 and |↑〉 are just interchanged. 3It could, e.g., be supplied by a blue laser diode, which can be hard to get, or by a frequency-doubled Ti:Sa laser, which is expensive.

57
Chapter 5
Quantum logic with trapped
ions
In continuation of the general introduction to quantum computation and quantum optics with trapped ions given in Chap. 1, we shall here give a short overview of quantum gates and discuss their implementation in a system of cold trapped ions. Furthermore, we shall establish the relation to our choice of qubit states in 40Ca+, using Raman transitions for quantum logic operations. Quantum gates are briefly discussed in Sec. 5.1. Sec. 5.2 is devoted to the discussion of specific proposals involving st-
rings of cold trapped ions with focus on the original proposal by Cirac and Zoller [4] and a proposal by Klaus Mølmer and Anders Sørensen [77, 78]. Furthermore, a short discussion of large-scale quantum computation is given. In Sec. 5.3 we discuss the relation to our own choice of qubit states.
5.1 Quantum gates
As mentioned in Chap. 1, a quantum bit, or qubit, is a two-level quantum system. Denoting the two levels by |↓〉 and |↑〉, a superposition of these states can in general be written as
cos(θ/2) |↓〉 + eiφ sin(θ/2) |↑〉 , (5.1.1)
where the angles θ and φ are real numbers. Any global phase factor is irrelevant and therefore ignored. The potential strength of a quantum computer partly has its origin in the fact that a qubit, as opposed to a classical bit, can be in a superposition state. To illustrate the strength in this, we suppose we have N qubits, each in the superposition
state (|↓〉 + |↑〉)/√2. Then the product state made up of the N superposition states is
1
2N/2 [|↓〉 + |↑〉]1 ⊗ [|↓〉 + |↑〉]2 ⊗ · · · ⊗ [|↓〉 + |↑〉]N = 1
2N/2
2N −1
∑
i=0
|i〉 , (5.1.2)
where i is understood to be the binary representation of the number i with 0’s and 1’s represented by |↓〉 and |↑〉, respectively. Thus, with N qubits we can have a quantum

58 Chapter 5 - Quantum logic with trapped ions
register containing 2N numbers at the same time, on which quantum logic operations can be performed 1. Any quantum logic operation on such a quantum register is a unitary operation, which can be constructed from a specific set of unitary operations, often referred to as a a universal set of gate operations [79]. This set simply consists of all unitary operations on single qubits and a so-called Controlled-NOT (CNOT) gate. The CNOT gate is a gate between two qubits, and it must be possible to perfo-
rm this gate between any two qubits in a quantum register [79]. In practical applications one may, of course, wish to make use of a larger set of gate operations.
5.1.1 Single-qubit gates
Any single-qubit gate corresponds to a transformation of the type
cos(θ/2) |↓〉 + eiφ sin(θ/2) |↑〉 −→ cos(θ′/2) |↓〉 + eiφ′ sin(θ′/2) |↑〉 . (5.1.3)
Recalling the discussion in Chap. 2 of the time evolution of a trapped two-level atom interacting with a light-field, especially Eq. (2.2.7), it is clear that for a trapped ion θ can be changed in a controlled way by applying laser-pulses with a suitable pulse-area, and the relative phase φ can conveniently be controlled by the phase of the light-field. Thus single-qubit gates can readily be implemented if individual access to the qubits is available. One example of a single qubit gate-operation, -
which will be used below, is a ‘rotation gate’ given by the matrix representation
R(δθ) =
[cos(δθ/2) − sin(δθ/2) sin(δθ/2) cos(δθ/2)
]
(5.1.4)
in the basis {|↓〉, |↑〉}.
5.1.2 Two-qubit gates
The CNOT gate involves two qubits, and hence it acts in general on a superposition state of the form
α |↓〉 |↓〉 + β |↓〉 |↑〉 + γ |↑〉 |↓〉 + δ |↑〉 |↑〉 , α, β, γ, δ C. (5.1.5)
In Table 5.1 the truth table of the CNOT gate is given with the two qubits named the ‘control’ qubit and the ‘target’ qubit, respectively. The gate flips the state (a NOT operation) of the target qubit only if the control qubit is in state |↑〉. Thus, applying the CNOT gate to the superposition state above would swap γ and δ. Sometimes it is more convenient to consider the so-called Controlled-Z gate [18], which changes the sign of the coefficient on |↑〉 |↑〉, but does nothing to the other three coe-
fficients. The CNOT-gate and the Controlled-Z gate are equivalent up to two rotations of the target
1The state in Eq. (5.1.2) is in fact the starting point in Grovers algorithm for searching an unordered database [3].

5.2. Quantum gates using trapped ions 59
Input Output Control Target Control Target
↓↓ ↓↓ ↓↑ ↓↑ ↑↓ ↑↑ ↑↑ ↑↓
Table 5.1: Truth table for CNOT gate.
qubit, as the following matrix identity shows


10
01 0
0 01
10


} {{ }
CNOT
=


√12
−√12
√12
√12
0
0
√12
−√12
√12
√12


} {{ }
R( π
2 ), target qubit
·


10
01 0
0 10
0 −1


} {{ }
Controlled-Z
·


√12
√12
√−12
√12
0
0
√12
√12
−√12
√12


} {{ }
R(− π
2 ), target qubit
(5.1.6)
where the matrix representations of the gates are written in the basis {|↓↓〉, |↓↑〉, |↑↓〉, |↑↑〉}.
In the introduction in Chap. 1, the importance of entangled states was underlined 2. Quantum gates and the preparation of entangled states are related issues since, with the ability to make a CNOT gate, one is also able to prepare entangled states from a product state. For example
CNOT
{ [cos(θ/2) |↓〉 + eiφ sin(θ/2) |↑〉] ⊗ |↓〉
}
= cos(θ/2) |↓〉 |↓〉 + eiφ sin(θ/2) |↑〉 |↑〉
(5.1.7)
is an entangled state for a suitably chosen θ. Preparation of entangled states of trapped ions is discussed a little further in the following section.
5.2 Quantum gates using trapped ions
There are numerous proposals for implementation of quantum gates using a string of cold trapped ions, and a detailed discussion of all of them would be to go too far. The Cirac-Zoller proposal [4], which was the first of these proposals, is discussed in some detail below since it nicely illustrates some general ideas and problems and has been demonstrated successfully by the Innsbruck group [13]. The so-called Mølmer-Sørensen gate proposal [77, 78] is also discussed in some detail since, unlike th-
e Cirac-Zoller proposal, it does not require ground state cooling, and individual addressing of ions is not necessary for two-qubit gate operations. Moreover, the proposal was successfully used in the demonstration by the NIST group of two- and four-particle entangled states of trapped ions [9], and it is possible that our first experiments on entangled states and
2Recall that an entangled state of two or more particles is a quantum state whose common wavefunction cannot be separated into a product of wavefunctions for any subset of the system.

60 Chapter 5 - Quantum logic with trapped ions
quantum gates will use this approach as well (some other gate proposal). The present section concludes with a short overview of a few other gate proposals, each with their own advantages and disadvantages, followed by an outlook towards large-scale ion trap computing.
5.2.1 The Cirac-Zoller proposal
In the Cirac-Zoller proposal a string of ions confined in the harmonic potential of a linear Paul trap as illustrated by the simple illustration in Fig. 1.1. The ions are assumed to be cooled to their motional ground state in the trap, and can be addressed individually by laser beams with a spectral resolution much better than the trap frequency ωz. The Lamb-Dicke limit is assumed, and hence the most relevant transitions for performing gate operations are carrier transitions and transitions on the-
 first red sideband (RSB) and the first blue sideband (BSB). To get a feeling for such gate operations, consider the following example, which creates an entangled state starting from two ions being in the internal state |↓〉 and in the motional ground state |0〉:
|↓〉 |↓〉 |0〉 (5.2.1)
⇓ BSB π/2-pulse, Ion 2
|↓〉 [ |↓〉 |0〉 − i |↑〉 |1〉 ]
} {{ }
entangled state
⇓ RSB π-pulse, Ion 1
[ |↓〉 |↓〉 − |↑〉 |↑〉 ]
} {{ }
entangled state
|0〉 .
First, a BSB π/2-pulse on Ion 2 [compare Eq. (2.2.7) with φ = 0] creates an entangled state between the internal state of Ion 2 and the common motional state of the ions. Then a RSB π-pulse on Ion 1, which has no effect on the |↓〉|↓〉|0〉 part of the wavefunction, rotates the |↓〉 |↑〉|1〉 part such that the entangled state is mapped onto the internal states of the ions. In this example excitation and de-excitation of the motional state on the BSB and the RSB, respectively, provide a way of ‘communicat-
ing’ between the qubits. This sort of communication is also required for a two-qubit gate, which therefore also involves sideband-pulses. Two essential points in the example were individual addressing of the ions and the assumption that the ions were cooled to their motional ground state (any other Fock state would also work). The Rabi-frequencies applied on sideband transitions and hence the duration T of a two-qubit gate operation must be limited if off-resonant excitations on the carrier are to-
 be avoided. In other words, the power-broadened linewidth should be much smaller than the spacing, ωz, between the vibrational levels. In the resolved-sideband limit, the power-broadened linewidth is essentially given by the Rabi-frequency, and hence the

5.2. Quantum gates using trapped ions 61
following restriction on the duration T of a π/2 sideband-pulse applies
T= π
ηΩ
π ηωz
, (5.2.2)
where η is the Lamb-Dicke parameter, and Ω is the free-ion Rabi-frequency. For singlequbit gates there is no need to excite the motional state, and hence they can be implemented by a carrier pulse for which the restriction on the duration of a π/2-pulse is T π/ωz. Thus single-ion gates are not only relatively easy to implement, they are also much faster than two-qubit gates. In the original proposal of Cirac and Zoller for making a CNOT-gate operation, the key step is a π phase-shift of one of the-
 four combined eigenstates in Eq. (5.1.5), which is obtained by applying a 2π-pulse on an auxiliary transition. In 40Ca+, as well as many other ion species, such an auxiliary transition is, however, not readily available. Fortunately, Childs and Chuang [80] have shown how to get around this requirement by using so-called composite pulses, which indeed was the technique used by the Innsbruck group in their demonstration of the Cirac-Zoller CNOT-gate [13].
5.2.2 The Mølmer-Sørensen proposal
The Mølmer-Sørensen proposal is illustrated for two ions in Fig. 5.1 [77, 78]. Here, the ions are illuminated by two laser-fields characterized by the same Rabi-frequency Ω and frequencies ω± = ω↑↓ ±δ, where ±δ is the detuning from the carrier resonance frequency
ω↑↓. The Lamb-Dicke limit, η√n + 1 1, is assumed. Now, if 0 < δ < ωz and the applied fields are so weak that ηΩ ωz − δ, no one-photon transitions are allowed, however, two-photon transitions of the type |↓〉 |↓〉|n〉–|↑〉 |↑〉|n〉 via the intermediate states |↓〉 |↑〉|m〉 and |↑〉 |↓〉|m〉 (m = n − 1, n, n + 1) are perfectly allowed. By including the transition paths via the intermediate states in a second-order perturbation theory calculation, it can be found that the Rabi-frequency for the two-photon transi-
tions is [78]
Ω ̃ = − 2ωz(ηΩ)2
ωz2 − δ2 , (5.2.3)
which remarkably enough is independent of n! The n-dependence of the effective Rabi-frequencies on the individual transition paths simply cancels out. Also |↓〉 |↑〉|n〉|↑〉 |↓〉|n〉 two-photon transitions via the intermediate states |↓〉 |↓〉|m〉 and |↑〉 |↑〉|m〉 (m = n − 1, n, n + 1) are allowed, and the corresponding two-photon Rabi-frequency is −Ω ̃ . Thus, using a bichromatic laser pulse, coherent dynamics involving all four combined eigenstates |↓〉 |↓〉, |↓〉 |↑〉, |↑〉 |↓〉 and |↑〉 |↑〉 is possible. Since t-
he two-photon Rabi-frequency is n-independent, the dynamics is insensitive to heating during gate operations and ground state cooling is not required. Furthermore, since both ions are illuminated by the same laser beams, individual addressing is not required. Using this scheme an entangled state can be created, for example the state (|↓〉 |↓〉 +
|↑〉 |↑〉)/√2, which can be created from the state |↓〉 |↓〉 by applying a bichromatic π/2pulse on the |↓〉 |↓〉–|↑〉 |↑〉 transition. A CNOT-gate can be implemented by combining suitable bichromatic pulses with single-qubit operations. The Mølmer-Sørensen scheme has been generalized to the case where ηΩ ∼ ωz −δ, under the assumption that Ω2 ωz2
and η2 1 [81]. In this case the gate-operations are faster, however, the motional state is excited during the gate-operations and only at specific points in time it returns to its initial state, thus making the scheme sensitive to heating during the gate operations.

62 Chapter 5 - Quantum logic with trapped ions
Figure 5.1: The Mølmer-Sørensen proposal. Two trapped ions are illuminated by two laser beams with frequency ω+ and ω−, respectively. The indicated transition paths interfere to give a n-independent two-photon Rabi-frequency Ω ̃ , see Eq. (5.2.3).
5.2.3 Other gate proposals
Geometric quantum gates [81] is a class of gates, where the ions are motionally excited by a suitable driving force, which takes them on a round-trip in position-momentum phase space. If the driving force is internal-state dependent, then so is the phase acquired during the round trip, which in turn enables the implementation of a Controlled-Z gate, as demonstrated by the NIST group [14]. In geometric gates the internal states of the ions are unchanged during the gate-operations, which results in -
a fidelity superior to that of gates where the internal states are directly involved in the gate-operations [14]. Furthermore, ground state cooling is not required. Our own gate proposal, which is presented in Chap. 6, is one example of a geometric gate. Mintert and Wunderlich [82] have proposed to use micro-wave radiation for quantum logic operations on qubits represented by ground state hyperfine levels or Zeemansplitted sublevels of an ion, the advantage being that well known NMR pulse-techniqu-
es can be applied in making gate-operations. The Lamb-Dicke parameter is extremely small for micro-wave radiation, however, by applying a magnetic field gradient along an ion string, it is possible to obtain an effective Lamb-Dicke parameter of a suitable magnitude. Owing to the differential Zeeman shift of the individual ions imposed by the magnetic field gradient, the scheme also allows individual addressing of the ions in frequency-space. Currently, work is ongoing at Hamburg University to impl-
ement these ideas [83]. Monroe et al. have suggested a ‘Magic Lamb-Dicke parameter’ method for making a CNOT gate [84]. The method has been demonstrated experimentally on a single ion, with one qubit stored in the internal states of the ion (|↓〉 and |↑〉) and another qubit stored in two motional states (|n = 0〉, |n = 2〉) [85]. By using a ‘magic’ ratio of 4/3 between the two effective carrier Rabi-frequencies Ω0,0 and Ω2,2, which are governed by the Lamb-Dicke parameter, it was possible to flip the -
internal state of the ion dependent on its motional state. This is indeed a CNOT-operation. The method can be applied to two or more ions, if the motional state is mapped onto the internal state, as in the example given in Eq. (5.2.1). Jonathan, Plenio and Knight have presented a scheme where the ac Stark shift

5.2. Quantum gates using trapped ions 63
induced by a strong laser field [86] is utilized. When a strong laser field is applied to an ion, the system can conveniently be described in terms of combined eigenstates of the laser field and the internal states of the ion, i.e., the so-called dressed states [87]. The frequency splitting between the dressed states depends on the Rabi-frequency of the applied field. When the laser field is applied to a single ion in a string and the splitting between two relevant dressed states is equal to the t-
rap frequency, coherent dynamics involving the motional state occurs in such a way that it is possible to perform a CNOT gate-operation between two ions. The gate time T ∼ ωz−1 is not limited by the condition in Eq. (5.2.2). The proposal was later combined with the Mølmer-Sørensen proposal [88], such that individual addressing is not required and the scheme becomes heating insensitive.
5.2.4 Practical large-scale quantum computation with trapped ions?
If problems intractable on classical computers have to be tackled by future large-scale quantum computation, it will involve very long sequences of quantum gates and hundreds or even thousands of qubits [19]. Whether this will become possible is, however, yet unknown. One thing is certain, large-scale quantum computation, with its longer gate operation times and more qubits (ions), will inevitably increase the importance of problems, which are small or even negligible in the demonstration of singl-
e quantum gates in smaller systems. In trying to get around these problems it is likely that some of the ideas, which briefly are discussed below, will be important. Getting to the point of having hundreds of qubits simply by filling more ions into a linear Paul trap does not seem like a passable road, since keeping the ions on a string at reasonably high axial trap frequencies, requires very large radial trap frequencies [see Eq. (3.2.3)]. In contrast, large-scale quantum computation with trapped-
 ions using the quantum computer architecture envisaged by Wineland and co-workers seems to be more viable [89]. Here, several ion traps are combined in a large array, where ions can be shuttled between the various trap regions. In some regions the actual gate operations are performed, while in other regions the ions are stored or sympathetically cooled by the Coulomb interaction with other laser cooled ion species. At NIST, the possibility of realizing such a large scale system is presently being-
 explored, with the fabrication of micro-traps, demonstration of ion-transfer between two traps and of sympathetic cooling to be used for quantum computing purposes [90, 91, 92]. See also Refs. [34, 93, 94] for work concerning sympathetic cooling of trapped ions. Longer pulse sequences and hence longer gate-operation times means, all other things being equal, more errors and decoherence than in the demonstrations of single quantum gates. Errors in the gate-operations can be reduced if NMR composit-
e-pulse techniques [95] are used. Decoherence rates can be reduced by encoding the information stored in a single qubit, into a so-called decoherence-free subspace of two qubits, which is less sensitive to perturbations from the environment than a single qubit [96]. If (or when) errors after all do occur, they can be corrected using quantum error correction techniques [97, 98]. With these techniques, the information stored in a single qubit can be encoded into several qubits, such that if an error-
 occurs within one of these qubits, it can be corrected from a measurement of the state of the other qubits. It can be shown, that once the ‘error’ per qubit per quantum gate during a gate operation (see Ref. [98] for a precise definition) is below a certain threshold value, then arbitrarily long

64 Chapter 5 - Quantum logic with trapped ions
quantum computations can be made robust [98]. This threshold value is of the order of 10−4 [98].
5.3 Quantum logic operations in the 40Ca+ ion
In our envisaged implementation of quantum logic operations in the 40Ca+ ion, gate operations involving the qubit states |↓〉 = 2S1/2(mJ = −1/2) and |↑〉 = 2S1/2(mJ = +1/2) are performed on the Raman transition which was used in the sideband-cooling scheme. The requirements for using the Raman transition for quantum logic operations are the same as for sideband cooling, except that the Raman lasers have to be intensity modulated in order to create laser pulses. After sideband cooling, population is -
mainly in the state |↓, 0〉 (should be more than 99%), which hence defines the starting point for quantum logic operations. For the twophoton Raman transition, the relevant Rabi-frequency is the Raman Rabi-frequency ΩRaman [see Eq. (3.4.4)], the relevant Lamb-Dicke parameter is η = η12 − η32 and the relative phase φ between the qubit states can be controlled by the phase-difference φ12 − φ32 between the Raman beams. The apparatus for making laser pulses and controlling the phase is described in Cha-
p. 8.

65
Chapter 6
Applications of optical dipole
potentials in trapped-ion
quantum logic
In this chapter we consider the possibilities which arise when ions on a string are subject to a potential whose strength depends on the internal state of the ions. The potential to be considered is the optical dipole potential, or the ac Stark shift, due to a laser beam which is far-off resonant with respect to all internal transitions in the ions. If the beam is propagating perpendicular to the ion-string and its transverse intensity-profile varies over the ion-string, the dipole potential for e-
ach ion will be position-dependent and a force will in general be exerted on the ions. Both of these aspects will be exploited in the following. The chapter starts out with a short introduction to optical dipole potentials in Sec. 6.1. In Sec. 6.2 follows a proposal for realizing a Controlled-Z gate, using the force which originates from a spatial variation in the dipole potential. This work will be published as Ref. [VI]. Finally, in Sec. 6.3 the difficulties of individual addressing of single io-
ns on a string are discussed and a proposal for achieving individual addressing, as well as selective addressing of any pair of ions, which utilizes the position dependence of the optical dipole potential, is presented. The bulk of the work presented in Sec. 6.3 has been published in Ref. [I].
6.1 Trapped ions and optical dipole potentials
When an atom or ion is irradiated by a laser beam, the electric field E of the laser beam induces an atomic dipole moment p, which oscillates at the laser frequency ωL. The interaction potential of the induced dipole moment in the electric field, time-averaged over quickly oscillating terms, is given by [99]
Udip = − 1
2 < pE >time, (6.1.1)

66 Chapter 6 - Applications of optical dipole potentials . . .
Figure 6.1: Intensity distribution for a Gaussian dipole beam [see Eq. (6.1.4)] with respect to the position of a two-ion string centered at z = 0.
which will be referred to as the (optical) dipole potential in the following. For the twolevel atom considered in Sec. 2.1, the dipole potential at a position r is given by [99]
Udip(r) = − 3πc2
2ωe3g
(Γ
ωeg − ωL
+Γ
ωeg + ωL
)
I(r) (6.1.2)
in the regime where the detuning ∆ = ωL − ωeg is much larger than the linewidth Γ. The dipole potential is proportional to the intensity I(r), since the induced dipole moment p is proportional to E and I ∝ |E|2. The oscillating dipole can absorb power from the electric field and reemit it as dipole radiation, which in a photon-atom picture corresponds to photons being scattered by the atom. For the two-level atom the scattering rate is given by [99]
Γsc(r) = 3πc2
2ħωe3g
( ωL
ωeg
)3 ( Γ
ωeg − ωL
+Γ
ωeg + ωL
)2
I(r), (6.1.3)
which is proportional to the intensity for the same reasons as for the dipole potential. Note that when the detuning fulfills |∆| ωeg + ωL = ∆ + 2ωeg, the scattering rate drops off as ∆−2, whereas the dipole potential only drops off as ∆−1. Note also that for negative detuning, the scattering rate drops off as (ωL/ωeg)3. In the following we consider a string of trapped ions illuminated by a far-off resonant laser beam, called the dipole beam, which propagates perpendicular to the ion-string. The a-
xis defined by the ion-string is the z-axis and z = 0 is chosen to be at the center of the ion-string. The transverse intensity distribution of the dipole beam, which is denoted by I(z), could, e.g., be Gaussian, such that
I(z) = I0e−2(z−z0)2/W 2 , (6.1.4)
where z0 is the center of the dipole beam, W is the beam waist and I0 is the peak intensity. This situation is illustrated in Fig. 6.1. Since the dipole potential is proportional to the intensity, it has the same variation along the z-axis as the intensity of the dipole beam. If the length scale over which the intensity varies [i.e., W in Eq. (6.1.4)] is much larger than the excursion of an ion from its equilibrium position, zeq, it is meaningful to linearize the dipole potential around this equil-
ibrium position:
Udip(z) = Udip(zeq) − Fdip(zeq)(z − zeq), (6.1.5)

6.2. A geometric Controlled-Z gate using optical dipole forces 67
where
Fdip(zeq) = − ∂Udip(z)
∂z
∣∣∣∣z=zeq
(6.1.6)
is the dipole force exerted on the ion along the trap axis due to the spatial variation of the dipole potential. In the context of this thesis, where we generally consider multilevel ions, with two of the levels being the qubit states |↓〉 and |↑〉, the dipole potential and the scattering rate are not simply given by Eqs. (6.1.2) and (6.1.3), rather they are a sum over such terms originating from all relevant transitions. Since the strength of transitions from |↓〉 and |↑〉 to other internal levels de-
pends on the polarization and the wavelength of the dipole beam, the dipole potential in general differs for the two qubit states. For an ion-string illuminated by a dipole beam its potential energy, U , is the sum of the dipole potential for each ion, the potential energy of the ions in the trap and their Coulomb energy. Specifically for two ions, numbered by indices 1 and 2, we have
U (z1, z2, α1, α2) = 1
2 mω2
z (z2
1 + z2
2 ) + e2
4π 0(z2 − z1) + Udip(z1,eq, α1) + Udip(z2,eq, α2)
(6.1.7)
− Fdip(z1,eq, α1)(z1 − z1,eq) − Fdip(z2,eq, α2)(z2 − z2,eq),
if the linear expansion of the dipole potential is valid. α1 and α2 denote the internal states of the two ions and z2 > z1 is assumed. This equation exhibits the mentioned properties of the optical dipole potential, which will be exploited in the following. The terms Udip(z1,eq, α1) and Udip(z2,eq, α2) contains the position-dependence to be utilized for achieving individual and selective addressing of ions on a string. The other four terms enables implementation of a geometric Controlled-Z gate, a-
s we shall see now.
6.2 A geometric Controlled-Z gate using optical dipole
forces
We consider two trapped ions having qubit levels |↓〉 and |↑〉 in the situation described above, where the potential energy is given by Eq. (6.1.7). The implementation of a geometric Controlled-Z gate between the two ions relies on the fact that the dipole force is internal state dependent. The idea is that when the ions are subject to a dipole force, which takes them away from their equilibrium positions, the resulting change in Coulomb energy gives rise to a phase-shift, which depends on the inter-
nal states of the ions. By choosing a suitable temporal and spatial profile of the dipole beam, the obtained phaseshifts of |↓〉|↓〉, |↓〉 |↑〉, |↑〉 |↓〉 and |↑〉 |↑〉 can be made equivalent to a Controlled-Z gate. In the following, the displacement of the ions and the acquired phase are calculated for these combinations of the internal states in a full quantum mechanical description of the motion of the ions. Using these results, we shall then discuss a specific implementation in alkaline earth ions and-
 find suitable parameters for the dipole beam intensity, its waist and position with respect to the ion-string and for the trap frequency ωz.

68 Chapter 6 - Applications of optical dipole potentials . . .
To describe the motion of the ions, we first rewrite Eq. (6.1.7) as follows
U (z1,eq, z2,eq, α1, α2, t) = 3
4 mω2
z ∆z2 + 1
2 mω2
z
(z2
+ + 3z2−
) + Udip(z1,eq, α1, t) (6.2.1)
+ Udip(z2,eq, α2, t) − √12 [Fdip(z1,eq, α1, t) + Fdip(z2,eq, α2, t)] z+
− √12 [Fdip(z2,eq, α2, t) − Fdip(z1,eq, α1, t)] z−
where
z+ = √12 (z2 + z1) and z− = √12 (z2 − z1 − ∆z) (6.2.2)
are the motional mode coordinates for the center-of-mass mode and the breathing mode, respectively, and ∆z = z2,eq − z1,eq denotes the equilibrium distance between the ions. Since the dipole beam intensity is supposed to vary over time, the dipole potentials and dipole forces are now explicitly time-dependent. Turning to a quantum mechanical description, we introduce lowering (raising) operators a (a†) and b (b†) for the mode
coordinates, i.e., z+ = √ħ/(4mωz)(a + a†) and z− =
√
ħ/(4m√3ωz)(b + b†). Inserting z+ and z− in the above expression for U , yields the Hamiltonian
H =ħωza†a + √3ħωzb†b + Udip(z1,eq, α1, t) + Udip(z2,eq, α2, t) (6.2.3)
+ f+(α1, α2, t)(a + a†) + f−(α1, α2, t)(b + b†),
where
f+(α1, α2, t) = −
√ħ
8mωz
[Fdip(z1,eq, α1, t) + Fdip(z2,eq, α2, t)] (6.2.4)
and
f−(α1, α2, t) = −
√ ħ
8m√3ωz
[Fdip(z2,eq, α2, t) − Fdip(z1,eq, α1, t)] (6.2.5)
are responsible for excitation of the center-of-mass mode and the breathing mode, respectively. The time-evolution of the system can be described by a unitary timeevolution operator U which fulfills the time-dependent Schro ̈dinger equation and evolves a wave-function Ψ in time according to Ψ(t) = UΨ(t = 0) [100] 1. For the Hamiltonian above, U can be expressed as a product
U = exp
[
−i
ħ
∫
dt [Udip(z1,eq, α1, t) + Udip(z2,eq, α2, t)]
]
U+U−, (6.2.6)
where U+ and U− are time-evolution operators corresponding to the Hamiltonians
H+ =ħωza†a + f+(α1, α2, t)(a + a†) (6.2.7)
1The time-evolution operator also describes the time evolution of a density-matrix ρ: ρ(t) = U ρ(t = 0)U †.

6.2. A geometric Controlled-Z gate using optical dipole forces 69
and
H− =√3ħωzb†b + f−(α1, α2, t)(b + b†), (6.2.8)
respectively. Since H+ and H− have an identical structure, the solutions U+ and U− can be found in an identical way. Furthermore, if more than two ions were considered, the resulting additional modes would just give rise to additional terms in the Hamiltonian H and hence to additional factors in the time-evolution operator U, which would be of the same form as U+ and U−. Thus, the generalization to an arbitrary number of ions is in principle straightforward. In the following we solve for U+ with t-
he understanding that the solution U− can be obtained from U+ simply by replacing f+ with f− and
ωz with √3ωz. To this end, we switch to the interaction picture with respect to the Hamiltonian of the free harmonic oscillator [100, 101]
Hint,+ =eiωzta†af+(α1, α2, t)(a† + a)e−iωzta†a = f+(α1, α2, t)(ae−iωzt + a†eiωzt)
(6.2.9)
and make the Ansatz that
Uint,+ =eiωzta†aU+ = e−|β+|2/2eiφ+ eiβ∗
+a† eiβ+a, (6.2.10)
where β+ = β+(α1, α2, t) = p+/√mħωz − iz+/√ħ/(mωz) is a displacement in the harmonic oscillator phase space, and where p+ is the center-of-mass mode momentum. φ+ = φ+(α1, α2, t) is the phase acquired due to excitation by the force term f+. From the time-dependent Schro ̈dinger equation for Uint,+ it can then be shown that
β+(α1, α2, t) = − 1
ħ
∫t
0
dt′f+(α1, α2, t′)e−iωzt′ (6.2.11)
and
φ+(α1, α2, t) = − 1
ħ2 Im
[∫ t
0
dt′f+(α1, α2, t′)e−iωzt′
(∫ t′
0
dt′′f+(α1, α2, t′′)eiωzt′′
)
} {{ }
−ħβ ∗+ (α1 ,α2 ,t′ )
]
.
(6.2.12)
The displacement of the ions is in general internal state dependent, which leads to coupling (or entanglement) between the internal and the motional states. For the gate operation, this is an undesired effect and we shall therefore request the displacement to be zero at the end of the gate operation, such that Uint,+ = eiφ+ . In the implementation of the Controlled-Z gate described below, we will take the dipole-potential to be of the form Udip(zi,eq, αi, t) = Uconst(zi,eq) + Uosc(zi,eq, αi)g(t) (-
i = 1, 2) in a time interval [0, T ] and zero otherwise. Mathematically, we assume below that g(t) and fconst vanish outside [0, T ]. From this specific form of the dipole potential, it follows that f+ can be written as f+(α1, α2, t) = fconst(z1,eq, z2,eq)+fosc(z1,eq, z2,eq, α1, α2)g(t), which together with Eq. (6.2.11) implies that the center-of-mass mode displacement at the end of the gate operation is
β+(T ) = i fconst
ħωz
(1 − e−iωzT ) − i fosc
ħ
∫T
0
dtg(t)e−iωzt. (6.2.13)

70 Chapter 6 - Applications of optical dipole potentials . . .
For this expression to be zero, T should be equal to an integer number, n, of oscillation periods, T = 2πn/ωz, and the integral in the last term should be zero, which in fact is equivalent to saying that the Fourier transform of g(t), g ̃(ω), is zero at ω = ωz, since, using that g(t) is zero outside [0, T ], it follows that
√12π
∫T
0
dtg(t)e−iωzt = √12π
∫∞
−∞
dtg(t)e−iωzt = g ̃(ωz). (6.2.14)
The phase φ+ in Eq. (6.2.12), which is equal to the area of the (z+, p+) phase-space trajectory in units of ħ, depends on the internal state of both ions, as needed for the Controlled-Z gate. From Eq. (6.2.12) it can be shown that the phase acquired during the gate operation can be expressed as
φ+(T ) = 1
ħ2
∫∞
−∞
dω′
∣∣∣f ̃+(ω′)
∣∣∣
2
ω′ − ωz
= C1f 2
const + C2fconstfoscg ̃(0) + 1
ħ2
∫∞
−∞
dω′ |g ̃(ω′)|2
ω′ − ωz
,
(6.2.15)
where f ̃+(ω) is the Fourier transform of f+(t) and C1 and C2 are constants. The first term on the r.h.s. is irrelevant, since it is independent of the internal state of the ions and the second term disappears if we require g ̃(0) = 0, which we shall do for reasons discussed below. Thus, the only interesting term is the last one, from which we observe that the closer the characteristic frequencies of the function g(t) are to the oscillation
frequency ωz (or √3ωz for the breathing mode), the larger is the accumulated phase. The total phase acquired during the gate operation, however, also has a contribution from the internal state dependent Stark shifts appearing in the first factor in Eq. (6.2.6). This contribution can totally scramble the desired gate operation, since it is of first order in the dipole beam intensity, whereas φ+ only is of second order in the intensity. With the specific form of the dipole potential assumed above, t-
he first term, Uconst(zi,eq), gives rise to a Stark-shift induced phase-shift, which is independent of the internal state and hence uncritical to the gate operation. The Stark-shift induced phase-shift due to
the term Uoscg(t) cancels if ∫ T
0 g(t)dt = 0, or equivalently if g ̃(0) = 0. For the displacement of the breathing mode to be zero at the end of the gate oper
ation, g ̃(√3ωz) = 0 and T = 2πm/(√3ωz) with m integer, should be fulfilled. Thus we
have in total three conditions on g ̃(ω): g ̃(0) = g ̃(ωz) = g ̃(√3ωz) = 0. These conditions can be fulfilled by a proper choice of g(t). Conversely, a function g ̃(ω) which vanishes
at 0, ωz and √3ωz can be constructed and Fourier-transformed to yield g(t). The conditions on T can be fulfilled approximately for special values of n; for example we have
(n, m, ∣∣√3n − m∣∣) = (15, 26, 2%); (56, 97, 0.5%); (209, 362, 0.1%).
6.2.1 Implementation in alkaline earth ions
An experimental realization of the Controlled-Z gate is possible using the alkaline earth 40Ca+, 88Sr+ or 138Ba+ ions, which all have a similar internal structure, making our ‘favorite’ choice of qubit states |↓〉 = n 2S1/2(−1/2) and |↑〉 = n 2S1/2(+1/2). Below, results are presented for 40Ca+ and 138Ba+. We assume in the following that the dipole beam frequency ωL is close to or below the transition frequencies ω1/2 and ω3/2 of the n 2S1/2–n 2P1/2 and the n 2S1/2–n 2P3/2 transitions, respectively, -
such that we only need to consider contributions to the dipole potential from these two transitions (assuming

6.2. A geometric Controlled-Z gate using optical dipole forces 71
that ωL is not in the immediate vicinity of the transition frequencies of the weak n 2S1/2(n − 1) 2D3/2,5/2 electric quadrupole transitions). We consider a dipole beam containing
only σ+- and σ−-polarized light components with respect to the quantization axis for the ions (the propagation direction of the dipole beam), in which case the contributions to the dipole potential in the two states |↓〉 and |↑〉 are illustrated in Fig. 6.2. The respective dipole potentials can therefore be written as
U↓ = ψ+I+ + ψ−I− and U↑ = ψ−I+ + ψ+I−, (6.2.16)
where I± is the intensity of the σ+- and σ−-polarized components, respectively, and where
ψ+ = 3πc2
2
[
2Γ1/2
3ω3
1/2
(1
ω1/2 − ωL
+1
ω1/2 + ωL
)
+ Γ3/2
3ω3
3/2
(1
ω3/2 − ωL
+1
ω3/2 + ωL
)]
(6.2.17)
and
ψ− = 3πc2
2
Γ3/2
ω3
3/2
(1
ω3/2 − ωL
+1
ω3/2 + ωL
)
(6.2.18)
depend only on the properties of the ion and the dipole laser frequency. Here, Γ1/2 and Γ3/2 are the transition strengths of the n 2S1/2–n 2P1/2 and the n 2S1/2–n 2P3/2 transitions 2, respectively. Now, to make the force derived from the dipole potential depend upon the qubit state, the intensities of the two polarization components have to differ. This does, however, give rise to an internal state dependent Stark-shift induced phase. In order to get rid of the internal state dependence, we choose-
 to vary the intensity of the polarization components in time, such that after the gate operation the integrated Stark-shift induced phase is equal for |↓〉 and |↑〉 in each ion. Meanwhile, the dipole force is still present to enable a non-trivial quantum logic operation. Choosing the intensity of the polarization components to vary sinusoidally with frequency Ω, the temporal variation of the intensity is given by
I±(z, t) = 1
2 I(z)[1 ± sin(Ωt)] (6.2.19)
in the time interval [0, T ] and zero outside this interval. Such a variation in time can easily be realized using an electrooptic modulator. With the intensity given by Eq. (6.2.19) the dipole potential has the form asserted in the previous section, making the identification g(t) = sin(Ωt). As for the choice of Ω, we recall the requirements T = 2πn/ωz with
n integer, g ̃(0) = g ̃(ωz) = g ̃(√3ωz) = 0 and that the characteristic frequency of g(t), i.e., Ω, should be close to ωz. A good choice is therefore Ω = (1 − 1/n)ωz with n 1, such that in the time interval [0, T ] the ions experience an integer number (n − 1) of polarization rotation periods and undergo an integer number (n) of oscillations in the trap. The Fourier transform of g(t) on the interval [0, T ] [see Eq. (6.2.14)] contains two terms, which are proportional to sin[(ω − Ω)T /2]/(ω − Ω) a-
nd sin[(ω + Ω)T /2]/(ω + Ω), respectively. These sinc-functions peak at ω = Ω and ω = −Ω, but they have exact
zeros at ω = 0 and ω = ωz, are suppressed at ω = √3ωz and are even further suppressed
if √3n is close to an integer.
2The same notation was introduced in Chap. 3 for these quantities in 40Ca+. In this chapter, the notation applies for the relevant ion species.

72 Chapter 6 - Applications of optical dipole potentials . . .
Figure 6.2: Relevant energy-levels and transitions in alkaline earth ions (e.g.,40Ca+, 88Sr+, and 138Ba+) for calculating the dipole potential for the qubit states |↓〉 = 2S1/2(−1/2) (solid lines) and |↑〉 = 2S1/2(+1/2) (dashed lines) due to a dipole beam containing σ+– and σ−–polarized components with intensities I+ and I−, respectively. ψ+ and ψ− are defined in the text.
In order to calculate the displacement and the acquired phase for the center-of-mass mode and the breathing mode for the specific intensity variation in Eq. (6.2.19), the f -function entering in the integrals in Eqs. (6.2.11) and (6.2.12) has to be determined using the definitions in Eqs. (6.2.4) or (6.2.5). For f+, which is responsible for excitation of the center-of-mass mode, we find
f+(↓↓) = − [f0+ + f1+ sin(Ωt)] , (6.2.20)
f+(↓↑) = − [f0+ + f2+ sin(Ωt)] , (6.2.21)
f+(↑↓) = − [f0+ − f2+ sin(Ωt)] , (6.2.22)
f+(↑↑) = − [f0+ − f1+ sin(Ωt)] , (6.2.23)
where
f0+ =
√ħ
8mωz
(F ̃1 + F ̃2)(ψ+ + ψ−), (6.2.24)
f1+ =
√ħ
8mωz
(F ̃1 + F ̃2)(ψ+ − ψ−), (6.2.25)
f2+ =
√ħ
8mωz
(F ̃1 − F ̃2)(ψ+ − ψ−) (6.2.26)
and
F ̃i = − 1
2
∂ I (z ) ∂z
∣∣∣∣z=zi,eq
(i = 1, 2). (6.2.27)
The full time-dependent expressions β(t) and φ(t), which can be obtained by carrying out the integrals in Eqs. (6.2.11) and (6.2.12), are given in App. A, both for the centerof-mass mode and the breathing mode. Here we only state the acquired phases at the end of the gate operation, which for the center-of-mass mode are given by
φ+(↓↓, T ) =φ+(↑↑, T ) = f12+
(2ħ)2
2ωz T
ωz2 − Ω2 ≈ f12+
(ħωz )2
n2π
2 (6.2.28)

6.2. A geometric Controlled-Z gate using optical dipole forces 73
and
φ+(↓↑, T ) =φ+(↑↓, T ) = f22+
(2ħ)2
2ωz T
ωz2 − Ω2 ≈ f22+
(ħωz )2
n2π
2 , (6.2.29)
where an internal state independent term has been neglected and the approximation is good for large n. These phases scale quadratically with n, with one factor of n originating from the gate time T and the other one originating from the denominator, owing to the fact that Ω was chosen to be near-resonant with ωz. The phases acquired due to excitation of the breathing mode are given by the following expressions
φ−(↓↓, T ) =φ−(↑↑, T ) = f12−
(2ħ)2
2√3ωz T
3ωz2 − Ω2 ≈ f12−
(ħωz )2
√3nπ
2 (6.2.30)
and
φ−(↓↑, T ) =φ−(↑↓, T ) = f22−
(2ħ)2
2√3ωz T
3ωz2 − Ω2 ≈ f22−
(ħωz )2
√3nπ
2 , (6.2.31)
where
f1− =f1+
F ̃2 − F ̃1
4 √3(F ̃2 + F ̃1) and f2− = f2+
F ̃2 + F ̃1
4 √3(F ̃2 − F ̃1) . (6.2.32)
These phases scale only linearly with n, since the rotation frequency Ω is off-resonant
with the breathing mode frequency of √3ωz. In Eqs. (6.2.30) and (6.2.31) some terms have been neglected, which are smaller than the stated terms by a factor of n and
further suppressed if √3n is close to an integer. The combined effect of the above phaseshifts is equivalent to a single phaseshift of φ± = φ±(↓↓)−φ±(↓↑)−φ±(↑↓)+φ±(↑↑) = 2[φ±(↓↓)−φ±(↓↑)] for the |↑〉 |↑〉 state [102]. Thus, to make a Controlled-Z gate, we require that
π =2 [φ+(↓↓, T ) + φ−(↓↓, T ) − φ+(↓↑, T ) − φ−(↓↑, T )] (6.2.33)
≈ πn2
(ħωz )2
[
f2
1+ − f 2
2+ +
√3
n
(f 2
1− − f 2
2−
)]
.
For an experimental realization of the considered gate, two highly relevant parameters are the required peak intensity I0 and the fidelity loss due to off-resonant scattering events. The required peak intensity enters in Eq. (6.2.33) through the f -functions. Once a choice of beam profile and position of the dipole beam with respect to the ion-string is made, the intensity can therefore be determined as a function of the dipole beam wavelength λL. Since the intensity is set by the requirement that-
 an effective phaseshift of π should be obtained, an inherently small effect of the optical dipole forces will lead to the requirement of a large intensity. The intensity in turn sets the scattering rate [see Eq. (6.1.3)] and hence the probability for off-resonant scattering events during the gate operation time T . In the following we shall find these parameters for specific configurations of the dipole beam.

74 Chapter 6 - Applications of optical dipole potentials . . .
We consider first the configuration depicted in Fig. 6.1 choosing z0 = W/2, i.e., the two ions are centered at a distance of W/2 from the center of the dipole beam, which is where the intensity gradient and hence the dipole force is maximal. The equilibrium distance between the ions is assumed to be much smaller than the waist, such that the linearization of the dipole potential in Eq. (6.1.5) is a good approximation and the dipole force is almost equal for the two ions. To find the required inten-
sity, we first find the f -functions for the considered beam configuration using the definitions in Eqs. (6.2.25)–(6.2.27) and (6.2.32), which yields F ̃1 ≈ F ̃2 ≈ e−1/2I0/W , f2+ ≈ f1− ≈ 0 and non-zero expressions for f1+ and f2−. From the expressions for f1+ and f2− and Eq. (6.2.33) it follows that the required peak intensity
I0 ≈
√
2e1ħωz3mW 2
n2(ψ+ − ψ−)2 , (6.2.34)
where only the leading term in n has been retained. We note that large n leads to a large phase pick-up and hence a low intensity requirement and the same holds for the difference ψ+ − ψ−, since it determines the dipole potential difference between |↓〉 and |↑〉. Furthermore, for a small waist the dipole force is large, which in turn reduces the required intensity. Note also that the required laser power (∼ I0W 2) is proportional to W 3, which makes a small waist very attractive. Knowing the require-
d intensity, we can now determine the scattering rate Γsc and hence the probability for a scattering event during the gate operation, which is equal to 1 − exp[−ΓscT ] ≈ ΓscT , if ΓscT 1. In calculating Γsc, we sum the scattering contributions due to the coupling of |↓〉 and |↑〉 to the n 2P1/2- and the n 2P3/2-state for both ions. Assuming an equal average population in the two internal states and an intensity of e−1/2I0 at the position of the ions, we find
ΓscT ≈ Γ ̃sc
ψ+ − ψ−
√
8π2ħωzmW 2, (6.2.35)
where
 ̃Γsc = 3πc2ω3
L
2ħ (6.2.36)
×
[ Γ2
1/2
ω6
1/2
(1
ω1/2 − ωL
+1
ω1/2 + ωL
)2
+ Γ2
3/2
ω6
3/2
(1
ω3/2 − ωL
+1
ω3/2 + ωL
)2] .
The front factor of  ̃Γsc/(ψ+ −ψ−) in Eq. (6.2.35) contains the entire dependence of ΓscT on the internal structure of the ion and the wavelength of the dipole beam, showing that ΓscT can be minimized either by making  ̃Γsc small or ψ+ − ψ− large.  ̃Γsc becomes small in the limit ωL ω1/2, ω3/2 due to the factor of ω3
L, however, in the same limit ψ+ − ψ−
is proportional to the difference Γ1/2ω−4
1/2 − Γ3/2ω−4
3/2, which also is small. Alternatively,
if ω1/2 < ωL < ω3/2, ψ+ − ψ− can become a sum of two terms, however, for  ̃Γsc to be small in this case, a large fine-structure splitting is required. Both in the far-off resonant case and when the dipole laser is tuned in between the fine-structure levels, the 138Ba+ ion turns out to be more attractive than the 40Ca+ and the 88Sr+ ions. Now, to get some numbers out for the intensity and the scattering probability, we take a typical trap frequency of ωz = 2π × 1 MHz, for which the equilibrium dist-
ance is

6.2. A geometric Controlled-Z gate using optical dipole forces 75
(a) (b)
Figure 6.3: (a) Two ions positioned at a distance of ±W/2 from the center of a Gaussian laser beam. (b) Two ions, each positioned at a distance of W/2 from the center of a tightly focussed Gaussian laser beam.
5.6 μm between two 40Ca+ ions and 3.7 μm between two 138Ba+ ions. The waist is taken to be 30 μm, which is larger than the equilibrium distance between the ions as assumed
above. Finally, choosing n = 15 (√3n ≈ 26) the intensity and the scattering rate can be calculated. For 40Ca+ and 138Ba+ with the dipole laser tuned in between the finestructure levels or far red detuned (where ψ+ and ψ−, and hence the required power, approaches a constant), we find the following values for (Power, ΓscT , λL). 40Ca+: (8 W, 30%, 395.1 nm) and (∼0.5 MW, < 4%, >1500 nm). 138Ba+: (86 W, 6%, 474.5 nm) and (∼33 kW, < 1.2%, >1000 nm). Clearly, this is not very promising for an experiment-
al realization. Since a smaller waist would decrease the required power as well as the scattering probability, it would be attractive to employ a beam configuration where the waist which is of the order of or smaller than ∆z. In such cases the equations derived above are still valid, as long as the excursion of the ions from their equilibrium position is smaller than the waist. For example, one could choose W = ∆z and position the ions on either side of the center of the dipole beam (z0 = 0, z1,eq-
 = −W/2, z2,eq = W/2) as shown in Fig. 6.3(a). Taking ωz = 2π × 200 kHz, it follows that ∆z = 16.4 μm for 40Ca+ and ∆z = 10.9 μm for 138Ba+. Using n = 15 (T = 75 μs), the following values for (Power, ΓscT , λL) can be obtained. 40Ca+: (120 mW, 8%, 395.1 nm) and (∼6.5 kW, < 0.9%, >1500 nm). 138Ba+: (360 mW, 1%, 474.5 nm) and (∼140 W, < 0.2%, >1000 nm). The required power is relatively high, but it can be reduced, e.g., by a factor of 14 by choosing
n = 209 (√3n ≈ 362), which leaves the scattering probability unchanged but increases the gate time by a factor of 14 to 1 ms. Except for 40Ca+ in the long wavelength limit, this would be realistic for a first demonstration of the present gate proposal, using one of the laser sources discussed below. Before the discussion of laser sources, we consider a more favourable dipole beam configuration shown Fig. 6.3(b), where two tightly focussed beams with an equally large waist, which is smaller than th-
e equilibrium distance between the ions, are directed onto one ion each and centered at a distance of W/2 from the ion, such that the dipole force is equal and maximal for both ions. Using Eqs. (6.2.34)–(6.2.36) above and choosing ωz = 2π × 200 kHz and W = 5 μm, we have plotted the required laser power and ΓscT versus the dipole beam wavelength for 40Ca+ and 138Ba+ in Fig. 6.4, both in the far red detuned case [Fig. 6.4(a,c)] and in the case where the dipole beam is tuned in between the fine-struc-
ture levels [Fig. 6.4(b,d)]. In all cases n = 15, which yields a very reasonable gate time of T = 75 μs. The plots in Fig. 6.4(a,c) extends to a wavelength

76 Chapter 6 - Applications of optical dipole potentials . . .
of 5 μm in order to show the long-wavelength behaviour, however, one should keep in mind that for wavelengths of the order of or larger than the waist of 5 μm, diffraction will be a limiting factor. For 40Ca+, we see from Fig. 6.4(a) that a high power of ∼ 200 W is required in the long wavelength limit for the considered parameters. By choosing n = 209 instead of 15, the required power drops by a factor of ∼ 14, yielding a much more reasonable required power of ∼ 15 W in the long wavelength limit,-
 i.e., roughly for wavelength above 2000 nm. When taking diffraction into account, a wavelength around 2000 nm therefore seems to be an optimal choice. At or near this wavelength, 15 W can easily be obtained from a commercially available Thulium Fiber Laser operating in the range 1750-2200 nm 3 and hence quantum gates for which ΓscT 10−3 should be feasible using 40Ca+. In addition, a wavelength around 395 nm is attractive for 40Ca+ [see Fig. 6.4(b)], since only 3 mW is required at this wavelength,-
 which easily can be obtained. The scattering rate of a few percent is acceptable for a first demonstration, but not for implementation of error correcting schemes. By a reduction of the beam waist, e.g., using a dedicated lens system placed inside the vacuum chamber where the ion trap is situated, it should be possible to focus to below 1 μm [103] and hence reduce the scattering rate by a factor of 5–10. Due to the larger fine-structure splitting of 138Ba+, the scattering probability is already b-
elow 1% for a wavelength around 475 nm, i.e., between the fine-structure levels [see Fig. 6.4(d)]. The required power of ∼ 35 mW can easily be provided by frequency-doubled diode laser systems. Note also that light from an Argon-ion laser at a wavelength of 488 nm could be a reasonable possibility. However, as for 40Ca+ a commercially available Thulium Fiber Laser operating around a wavelength of 2000 nm seems to be most ideal. In this case the scattering probability is as low as ∼ 10−4, which is -
comparable to the threshold value for fault-tolerant quantum computation [98]. In the long wavelength limit, the 1064 nm wavelength of a Nd:YAG laser would also be quite attractive with a scattering probability below 10−3 at a required power of ∼ 7 W. Note that in all cases discussed above the required power, the scattering probability and the gate time can be adjusted by changing n, ωz and W . It should be noted, that the gate proposal is not limited to the case where g(t) = sin(Ωt). It would for-
 example also work with g(t) = sin[M sin(Ωt)], which occurs if a sinusoidally varying voltage is applied to an electrooptic modulator (modulation index M ), with the polarization of the input beam oriented at 45◦ with respect to the principal axes of the modulator crystal. However, the calculations are more cumbersome than for the present case and will not be reproduced here. Finally, in order to illustrate the time-development of the phase-space displacement and the acquired phase, we have plotte-
d these quantities in Fig. 6.5. The plots are for 40Ca+ with λL = 395.1 nm and n = 15. The trap frequency and the waist are irrelevant for these plots, when the intensity is set such that an effective phase-shift of π is obtained. Fig. 6.5(a) is a parametric plot of the real and imaginary parts of the displacement β+(t)
of the center-of-mass mode, i.e., p+/√ħmωz and −z+/√ħ/(mωz), respectively, when the ions are in the |↓〉 |↓〉 state. Fig. 6.5(b) is a similar plot for the breathing mode, when the ions are in the |↓〉 |↑〉 state. Note that the center-of-mass mode is more strongly excited than the breathing mode [the scale in Fig. 6.5(a) is about ten times larger than in Fig. 6.5(b)], since the driving force is near-resonant with the center-of-mass mode
3IPG Photonics, TLR-series, capable of delivering up to 150 W. http://www.ipgphotonics.com.

6.2. A geometric Controlled-Z gate using optical dipole forces 77
(a) (b)
(c) (d)
Figure 6.4: Required power and ΓscT vs. dipole beam wavelength for 40Ca+ and 138Ba+. In all plots ωz = 2π × 200 kHz, W = 5 μm,
n = 15 and T = 75 μs. Note: In (a) and (c) diffraction is a limiting factor for long wavelengths. (a) 40Ca+, far red detuned dipole
laser. The divergences near 900 nm are due to a cancellation of ψ+ − ψ−. (b) 40Ca+, dipole laser tuned in between the n 2P1/2 and
n 2P3/2 fine-structure levels. (c) 138Ba+, far red detuned dipole laser. (d) 138Ba+, dipole laser tuned in between the n 2P1/2 and
n 2P3/2 fine-structure levels.

78 Chapter 6 - Applications of optical dipole potentials . . .
frequency. The excitation of the center-of-mass mode at a frequency slightly below its eigenfrequency, leads to an increasing distance from the phase-space origin until the turning point near Re[β+] ∼ 1, where the relative phase between the motion of the ions and the driving force makes the driving force have a damping effect on the motion of the ions, taking them back to the phase-space origin after 15 trap oscillation periods. For the breathing mode, the off-resonant driving force is unable to e-
xcite the ions to a large amplitude, so in this case the phase-space trajectory is in the vicinity of the phasespace origin, where it (almost) ends up right at the time, where the center-of-mass mode trajectory is back at the phase-space origin. The acquired phase, which is just the encircled phase-space area in units of ħ, is plotted in Fig. 6.5(c). More precisely, the effective phase-shift of the |↑〉 |↑〉 state, i.e., 2[φ+(↓↓, t) − φ−(↓↑, t)], is plotted together with the center-of-mass mode cont-
ribution of 2φ+(↓↓, t), showing that the breathing mode contribution is small. Note, that the acquired phase increases with the largest rate in the middle of the gate operation, corresponding to the part of the trajectory in Fig. 6.5(a) where Re[β+] ∼ 1, where the area swept per unit time is largest. In contrast, at the beginning and at the end of the gate-operation, there are only small ‘wiggles’ on the curves, which to some extent makes the acquired phase robust against timing errors.
6.2.2 Error sources
Apart from the fidelity loss due to scattering induced by the dipole beam, there are many other potential error sources, which are relevant for the fidelity of the gate operation. A key element in the present gate proposal is the polarization rotation, which removes the internal state dependency of the Stark-shift induced phase. Since the Stark shift is of first order in intensity and the phase acquired by the change in Coulomb energy originates from second order effects, even small errors in the -
polarization rotation may be very critical to the actual gate operation. In the following, the influence on the polarization rotation from polarization errors, timing errors and power-, position- and frequency-fluctuations of the dipole laser is discussed.
Polarization errors
In case there is an imbalance of the intensity in the two polarization components, such that
I±(z, t) = 1
2 I(z)(1 ± p)[1 ± sin(Ωt)], (6.2.37)
where p accounts for the imbalance, there will be two extra terms in the dipole potential. One term [∝ p sin(Ωt)] enters with the same sign in U↓ and U↑ and hence it does not give rise to any Stark-shift induced phase-difference between |↓〉 and |↑〉. The other term, pI(z)(ψ+ − ψ−)/2, enters with a different sign in U↓ and U↑, which leads to a phase-difference of ∆φ = pI(z)(ψ+ − ψ−)T /ħ between |↓〉 and |↑〉 in each ion at the end of the gate operation. This difference should be much smaller than the -
desired phase-shift of π. Using the expression for ∆φ, Eqs. (6.1.4), (6.2.34) and T = 2πn/ωz, we obtain the condition
p
√ħ
8ωzmW 2 . (6.2.38)

6.2. A geometric Controlled-Z gate using optical dipole forces 79
(a)
(b)
(c)
Figure 6.5: Real and imaginary parts of the center-of-mass mode and the breathing mode displacement β±(t) and the acquired phase for 40Ca+ with n = 15 and a dipole beam wavelength of 395.1 nm. The trap frequency, the waist and the intensity are set to obtain an effective phaseshift equal to π of the |↑〉 |↑〉 state. (a) Parametric plot
showing (Re[β+(t)], Im[β+(t)]) = (p+/√ħmωz, −z+/√ħ/mωz) for the center-of-mass mode, when the ions are in |↓〉 |↓〉. (b) Parametric plot showing (Re[β−(t)], Im[β−(t)]) =
(p−/
√ħm√3ωz, −z−/
√
ħ/m√3ωz) for the breathing mode, when the ions are in |↓〉 |↑〉. In both (a) and (b) the phase-space trajectory starts out from the origin and goes clockwise as time elapses. (c) Acquired phase. The solid line is the total effective phase of 2[φ+(↓↓, t) − φ−(↓↑, t)]. The dashed line is the center-of-mass mode contribution of 2φ+(↓↓, t). The dotted lines indicate phases of 0 and π.

80 Chapter 6 - Applications of optical dipole potentials . . .
In the situation considered above with W = 5 μm and ωz = 2π × 200 kHz this means p 1/400 for 40Ca+ and p 1/700 for 138Ba+. Fulfilling these criteria is not very realistic, but fortunately the undesired phase-difference can be cancelled using the spin-echo technique [23]. Instead of generating the full effective phase-shift of π in a single operation, the gate-operation can be performed in four steps: (1) Run the gate at half the intensity, to get an effective phase-shift of π/2 on |↑〉 |↑〉. (2) Swa-
p the population between |↓〉 and |↑〉 by applying single-qubit π-pulses to both ions. (3) Same as (1). (4) Same as (2). The trick is that the undesired phase-differences due to an intensity imbalance, which are obtained in step (1) and (3), are of the same magnitude but have opposite signs (due to the population swapping) and therefore cancel out. The gate operations in (1) and (3) both give an effective phase-shift of π/2, even though the population is swapped in (2), because φ±(↓↓, T ) = φ±(↑↑, T-
 ) and φ±(↓↑, T ) = φ±(↑↓, T ). The final π-pulse just swaps the population back. In making this spin-echo trick, the gate time is doubled (neglecting the duration of the relatively fast π-pulses) while the required intensity is halved. Since the required intensity is proportional to n−1 and the gate time T ∝ n, these parameters can be re-adjusted if an appropriate value for n is available. Finally, the imbalance also gives rise to errors in the gate operation, which the spinecho trick does not ca-
ncel. These errors are of the order 2p or p/n and hence they are
suppressed to the 10−4 level at a small but realistic value of p ∼ 1%.
Timing errors
In case the gate time differs from the duration of a full number of polarization rotation periods, an undesired phase-difference will again build up. Assuming T = δT + 2π(n − 1)/Ω and ΩδT 1, the phase-difference is equal to ∆φ above, with the replacement p → δT 2Ω/(2T ). Again using W = 5 μm and ωz = 2π ×200 kHz and considering 40Ca+ with n = 15, Eq. (6.2.38) translates to δT 0.5 μs, with a more relaxed limit for larger
n (the limit is proportional to √n). Using electrooptic modulators to control the laser pulse length, this condition on δT is not very severe. Moreover, if step (1) and step (3) are subject to the same relative timing error as the entire gate operation, i.e., if they are of duration [δT + 2π(n − 1)/Ω]/2, the spin-echo trick will cancel the phase-difference.
Power fluctuations
If the total laser power fluctuates at a frequency ωf , such that the total intensity is given by I0(t) = I0[1+ f sin(ωf t)], then the resulting fluctuations in the dipole potential integrated over the gate time T will give rise to a phase difference between |↓〉 and |↑〉. If the intensity fluctuations are random, they can in general not be expected to cancel using the spin-echo trick. When ωf ∼ Ω the phase difference ∆φ ∼ f I(z)(ψ+ − ψ−)/2, i.e., the same phase-difference as above, just with p repl-
aced by f , which means that f 1/400 is required for 40Ca+. When ωf Ω the phase-difference is smaller by a factor of 2πn and even smaller if ωf Ω. Intensity stabilization fulfilling f 1/400 should not be unrealistic, in fact a commercially available Laser Power Controller already offers a power-stability of 3 · 10−4 within certain limits 4.
4Laser power controller from Brockton Electro Optics, http://www.brocktoneo.com. LPC-model: Power stability of 3·10−4 over 8 hours, DC to 5 kHz, optical power up to 15 W, 425-1100 nm. LS-model: Same stability, DC to 2 MHz, optical power up to 4 W, 400-740 nm.

6.2. A geometric Controlled-Z gate using optical dipole forces 81
Position fluctuations
Fluctuations in the position of the dipole laser gives rise to intensity fluctuations, which leads to imperfect cancellation of the Stark-shift induced phase and an unwanted variation in the dipole force exerted on the ions. When ions are placed at a distance of W/2 from the center of a dipole beam, a displacement of the dipole beam along the trap axis of δz, will lead to a relative change in intensity and dipole force of the order of (δz/W )2. Thus, for the errors associated with position fluctua-
tions to be at the 10−4 level, the position fluctuations should be smaller than 1% of the waist size, which amounts to 50 nm in the case where W = 5 μm. Although demanding, it is possible to reach this level of stability.
Frequency fluctuations
As for the power fluctuations, laser frequency fluctuations will lead to fluctuations in the dipole potential and hence to an imperfect cancellation of the Stark-shift induced phase. Since laser frequencies can be very accurately controlled and frequency fluctuations anyway are expected to be small as compared to the detuning from any of the two fine-structure levels, this is not expected to play any significant role.
6.2.3 Discussion
The gate proposal presented above has some similarities with the gate recently demonstrated by the NIST group [14]; in fact the physical mechanism which gives rise to the desired phase shift is the same. There are, however, also some essential differences between the two schemes. In the NIST experiment, a dipole force along a given trap axis was provided by the intensity-gradient of a standing-wave light-field. The wavelength of the light-field and hence the period of the standing wave is set by t-
he requirement that the Stark-shift induced phase shift of the two qubit levels is zero (corresponding to ψ+ + ψ− = 0 in our case), which can be fulfilled by tuning the laser in between two fine-structure levels. This can, however, give rise to a significant amount of scattering events. Moreover, since the spatial variation of the dipole force in a standing wave takes place on a length scale given by the wavelength of the light-field and since the ions must be well localized on this scale, the ion-
s should be cooled to the Lamb-Dicke limit with respect to this wavelength. In Ref. [14] this is also the Lamb-Dicke limit for the qubit operations. Finally, in the NIST experiment, an equal dipole force on the two ions was obtained by adjusting their equilibrium distance to an integer number of standing wave periods, which may be difficult to generalize for performing a gate between any two ions in a multi-ion string. In the proposal presented here, where the dipole force is provided by a variati-
on in the beam-profile, the excursion of the ions from their equilibrium position should only be smaller than the beam waist, which is adjustable, but typically up to ten times larger than a relevant transition wavelength. This means that except for very tightly focussed laser beams, the Lamb-Dicke limit criterion need not be fulfilled. Furthermore, since the dipole beam propagates perpendicular to the ion-string in our proposal, addressing of specific ions for implementation of gates in a multi-i-
on string should be possible. A theoretical description of this situation should also be quite straightforward, as mentioned after Eq. (6.2.6). Finally, owing to the polarization rotation method, the dipole beam is

82 Chapter 6 - Applications of optical dipole potentials . . .
allowed to be far-off resonant with respect to the relevant internal transitions, such that a scattering probability below the asymptotic threshold value required for fault-tolerant quantum computation [98] in principle can be obtained in the long wavelength limit. It should be mentioned, that quantum gates using optical dipole forces also was considered by Sasura and Steane [102] for an array of very small ion traps with a single ion in each trap. In a very recent proposal, Garcia-Ripoll, Cirac a-
nd Zoller [104] present a geometric gate, where the momenta of the involved ions are controlled by absorption of photons from a discrete set of laser pulses. In this case requirements on the pulses naturally arise for having zero displacement and for obtaining the desired phase shift. It can be shown that these requirements are discrete versions of those expressed through g ̃(ω) above.
6.3 Individual addressing of trapped ions
Apart from the ability to make gate-operations between any pair of ions, a key requirements for the implementation of a universal set of gate operations with trapped ions is individual addressing of ions for single-qubit operations, as discussed in Chap. 5. Individual addressing is, however, experimentally quite challenging due to the need for high trap frequencies, to ensure efficient sideband cooling and high gate-speeds, which leads to a small spatial separation of the ions (see also Ref. [24] -
for a discussion). For the present project as well as for the work in the Innsbruck group, a typical trap frequency is ωz = 2π × 1.0 MHz, for which the equilibrium distance between two 40Ca+ ions is 5.6 μm. At NIST, some of the more recent experiments have been conducted at roughly 2π × 3 MHz trap-frequency [14], but previously trap frequencies as high as ωz = 2π×10 MHz [105] have been used, in which case the spacing between two 9Be+-ions is only 3.2 μm. For experiments with more than two ions the-
 minimum ion separation becomes even smaller, decreasing as N −0.56 in an N-ion string [25]. The most obvious method for individual addressing is simply to focus a laser beam onto a single ion, which for ion-ion distances of ∼ 5 μm typically requires waist sizes only a few times larger than the addressing beam wavelength, i.e., diffraction becomes a limiting factor. The method was demonstrated by the Innsbruck-group [106] and used in their demonstration of the Cirac-Zoller CNOT gate using a two-io-
n string [13]. In the latter experiment the ion-ion distance was 5.3 μm and the addressing laser of 729 nm wavelength was focussed to 2.5 μm (FWHM). When addressing one ion, the small fraction (2.5 · 10−3) of light incident on the second ion, gave rise to an estimated fidelity loss in the gate-operations of 3% [13]. With the stronger traps used at NIST or when more ions are involved, an even tighter focus is required to reduce the fidelity loss to a few percent, thus making the method even more de-
manding [24]. A possible solution to the problem is once again a dedicated lens system inside the vacuum chamber [103], but it seems nevertheless to be relevant to consider other methods. Some alternative methods for individual addressing of ions have been presented, which use position-dependent micromotion [16, 107], but they are either hard to generalize beyond two ions or technically demanding. The gate-proposal by Mintert and Wunderlich [82] using a strong magnetic field-gradient also allows i-
ndividual addressing of the ions, however, it is technically demanding to obtain the required field-gradient.

6.3. Individual addressing of trapped ions 83
Figure 6.6: The basic idea of individual addressing. When a string of trapped ions is illuminated by a far-off resonant laser beam propagating perpendicular to the ion string, as in Fig. 6.1, the energy levels of the ions are ac Stark-shifted. The figure shows the qubit levels |↓〉 and |↑〉 of two ions confined in a harmonic trapping potential of oscillation frequency ωz (external states |0〉, |1〉, etc..). Individual addressing is considered in two cases. Case A: ħωz > E1,2 ħγres, and Case B: E1,2 ħω-
z ħγres. Note: For convenience, the energy-levels are shifted, such that the |↓〉 state has the same energy for both ions.
6.3.1 Trapped-ion quantum logic utilizing position-dependent ac Stark shifts
We have proposed [I] to use a position-dependent optical dipole potential, or ac Stark shift, due to a far-off resonant laser beam to obtain a unique resonance-frequency of each ion, which allows individual addressing of ions on a string just by tuning the frequency of a laser beam illuminating the whole ion string. For the two-ion case the position-dependent dipole potential corresponds to the third and the fourth term in Eq. (6.1.7). In addition to individual addressing, the position-dependent a-
c Stark shift can be used for selecting any pair of ions in a multi-ion string for implementing a twoion quantum gate, e.g., a Mølmer-Sørensen gate [78, 77], as we shall see below. With respect to focussing of the ac Stark-shifting laser beam, the scheme is technically not very demanding, since the beam is only supposed to be focussed to a spot size larger than the ion spacing, which makes the scheme applicable even in experiments with very tightly confining traps (ωz/2π ∼ 10 MHz).
First, we consider the criteria for performing single qubit operations between states of the type |↓, n〉 and |↑, n′〉. To selectively manipulate such two states of a single ion in a string, the spectral resolution γres of the laser performing the qubit operation must first of all fulfill the criterion for the resolved sideband-limit, i.e., γres ωz. Furthermore, the resolution must be sufficiently high that transitions in any other ion are prohibited. For simplicity, we consider in the following a t-
wo-ion string, with one motional mode having the oscillation frequency ωz, and with the ac Stark shift induced energy difference between the two ions being E1,2 (see Fig. 6.6). First, we treat the situation where ħωz > E1,2 ħγres as sketched in Fig. 6.6 (Case A). In this case, E1,2 = ħωz/2 is the optimum choice, since a laser resonant with a specific transition |↓, n〉–|↑, n′〉 in one ion, is maximally off-resonant with all the transitions of the type |↓, n〉–|↑, n′〉, |↓, n〉–|↑, n′ + 1〉, or |↓, n〉–|↑-
, n′ − 1〉 in the other ion, leading to the highest possible gate-speed. In the case E1,2 ħωz ħγres (Case B in Fig. 6.6), a laser

84 Chapter 6 - Applications of optical dipole potentials . . .
Figure 6.7: Relevant energy-levels and transitions in alkaline earth ions (e.g.,40Ca+, 88Sr+, and 138Ba+) for calculating the ac Stark-shifts of the qubit states [|↓〉 = 2S1/2(mJ = +1/2) and |↑〉 = 2D5/2(mJ = +5/2)] in the case of a linearly polarized, far-off-resonant laser beam. The Stark-shifting laser beam is assumed to be so far red detuned that the fine-structure splitting of the P- and F-levels can be neglected.
resonant with a transition |↓, n〉–|↑, n′〉 in one ion, is only resonant (or near-resonant) with a transition |↓, n〉–|↑, n′ + m〉 in the other ion, where |m| 1. In the Lamb-Dicke limit such a transition is strongly suppressed. Case B is particularly interesting when more than two ions are present, since even in such cases the gate-time will only be limited by the vibrational frequency ωz instead of a fraction thereof as in Case A. An experimental realization of the above situation can be achieved, e.-
g., by using a string of two 40Ca+-, 88Sr+- or 138Ba+-ions. The qubit states |↓〉 and |↑〉 can be represented by the two Zeeman sublevels of the 2S1/2 ground state as we do in 40Ca+, or for instance by one sublevel of the ground state and one sublevel of the metastable 2D5/2 state, as the Innsbruck group does. Here, we postpone the discussion of our own choice of qubit states and discuss first the case where |↓〉 = 2S1/2(mJ = +1/2) and |↑〉 = 2D5/2(mJ = +5/2), since this turns out to be more favorable-
. The far-offresonant Stark-shifting laser beam is assumed to propagate perpendicular to the ion string and its polarization is assumed to be linear along the axis defined by the ions. The relevant internal levels of the considered ions, with respect to the Stark-shifting laser beam, are shown in Fig. 6.7. For simplicity, we assume that the Stark-shifting laser beam is so far red detuned from any transition-frequency that fine-structure splitting can be neglected. The ac Stark shift ε↑ − ε↓ of the-
 |↑〉 − |↓〉 transition of a single ion can be calculated by summing the contributions from all relevant dipole-allowed couplings. The dominant shift of |↓〉 is from the nS − nP coupling, whereas the shift of |↑〉 is composed of contributions from a series of (n − 1)D − n′F couplings. This gives rise to the following approximate expression for the ac Stark shift:
ε↑ − ε↓ = 3πc2
2
[ 1
ω3
P
( ΓP
ωP − ωL
+ ΓP
ωP + ωL
)
(6.3.1)
−∑
n′
1
ω3
n′ F
( Γn′F
ωn′F − ωL
+ Γn′F
ωn′F + ωL
)]
Iion ≡ ψ × Iion,
where ω is the laser-frequency, ωP and ωn′F are the nS − nP and (n − 1)D − n′F

6.3. Individual addressing of trapped ions 85
transition-frequencies, ΓP and Γn′F are the corresponding spontaneous decay rates, Iion is the intensity of the Stark-shifting laser beam at the position of the ion and ψ accounts for the properties of the ion and the laser-frequency [99]. Assuming a Gaussian transverse intensity profile as given by Eq. (6.1.4), a maximum difference in the ac Stark shift of the ions is obtained by displacing the laser beam by W/2 with respect to the center of the ion string, i.e., with z0 = W/2 in Fig. 6.1, z1 = −-
∆z/2 and z2 = ∆z/2. In this case Eqs. (6.1.4) and (6.3.1) lead to the following difference in the transitionfrequency of the ions:
E1,2 = κ (ε↑ − ε↓) = κψI0, (6.3.2)
where
κ = 2 sinh(∆z/W ) exp
{
−1
2
[1 + (∆z/W )2]}
. (6.3.3)
In Fig. 6.8(a), the laser power required to achieve an ac Stark shift difference E1,2 = ħωz/2 in the case of ωz = 2π × 1 MHz is presented for 40Ca+, 88Sr+, and 138Ba+ as a function of the laser wavelength 5. The waist of the laser beam is taken to be 30 μm, which is much larger than the equilibrium spacing of 5.6 μm, 4.3 μm and 3.7 μm for the 40Ca+-, 88Sr+-, and 138Ba+-ions, respectively. The required power, which approaches a constant in the long-wavelength limit, is well within reach of commerci-
al lasers, e.g., a CO2 laser (λ = 10.6 μm), a Nd:YAG laser (λ = 1064 nm), or a frequency-doubled Nd:YAG laser (λ = 532 nm). As in the gate-proposal in Sec. 6.2, an important parameter to consider is the spontaneous scattering rate, Γsc, of light from the Stark-shifting laser beam, since it will limit the ultimate coherence time. Under the assumptions made above in calculating the ac Stark shifts and assuming an equal average population in the two internal states, the sum of the scattering rates fo-
r both ions can be expressed as:
Γsc = E1,2
κψ
e−1/23πc2ω3
2ħ
×
[ 1
ω6
P
( ΓP
ωP − ωL
+ ΓP
ωP + ωL
)2
+
∑
n′
1
ω6
n′ F
( Γn′F
ωn′F − ωL
+ Γn′F
ωn′F + ωL
)2] ,
(6.3.4)
where ∆z/W 1, as obeyed by the parameters used in Fig. 6.8, is assumed. In Fig. 6.8(b), the coherence time (or rather Γs−c1) is plotted as a function of laser wavelength, and we see that in the long-wavelength limit, the coherence time grows as the wavelength to the third power, which is also readily deduced from Eq. (6.3.4). Hence, at first, a CO2-laser seems to be favorable. However, since the lifetime of the 2D5/2 level is only 1.1 s, 345 ms, and 47 s for 40Ca+, 88Sr+, and 138Ba+, respectively,-
 the use of the fundamental wavelength of a Nd:YAG laser might be more attractive, since this will be much easier to focus to the required spot size. Actually, since the maximal coherence time is limited by heating of the ions on a timescale of 1−100 ms in current experimental
5In Fig. 6.8 we do take the fine-structure splitting and the different couplings to the fine-structure levels into account. For the (n − 1)D − n′F transitions we sum over n′ = 4 − 10. The data used are from Ref. [108] (40Ca+) and Refs. [109, 110, 111] (88Sr+ and 138Ba+).

86 Chapter 6 - Applications of optical dipole potentials . . .
(a) (b)
Figure 6.8: (a) The required laser power as a function of wavelength for obtaining an ac Stark shift difference E1,2 = ħωz/2, when ωz = 2π × 1.0 MHz and W = 30 μm for 40Ca+, 88Sr+, and 138Ba+. (b) The corresponding coherence time (Γs−c1).
setups [37, 92, 105] even a continuously operated frequency-doubled Nd:YAG laser can be used without introducing significant additional decoherence. Once again, it is advantageous not to choose the waist W overly large as compared to ∆z, since the power required to achieve a certain energy difference E1,2 grows as W 3 and since the total scattering rate for a fixed E1,2 also increases with W (Γsc ∝ W ). Furthermore, it should be noted that although a large E1,2 implies a short coherence time, it a-
lso allows a high gate-speed. The effect of the (internal state dependent) dipole-force exerted on the ions by the Stark-shifting laser beam has to be considered, since it is unwanted in this context of individual addressing. Fortunately, with the relatively large waist and the low intensity level used here (as compared to the gate proposal above), the effect of the dipole force is small, as the following estimate shows. The maximal optical dipole force will be on the order of Fdip = −∂ε↓/∂z ≈ E1,-
2/∆z. Taking the example of 40Ca+, and using the same parameters as above, the maximal dipole force will be ∼ 105 times smaller than the confining force exerted by the trap, and the associated change in the equilibrium distance between the ions, δz, is ∼ 300 times smaller than the spread of the vibrational wavefunction. This displacement is totally negligible. Nevertheless, when the Starkshifting laser beam is turned on, an ion obtains a speed v ≈ δz/trise, where trise is the “rise-time” of the St-
ark-shifting laser beam. The associated kinetic energy must be much smaller than ħωz, which is fulfilled if trise 1 ns. In practice, this is no limitation. The different ionic transition-frequencies, while applying the Stark-shifting laser beam, leads to a differential phase-development of the various ions, which in the case of two ions amounts to a phase-difference of ∆φ = E1,2T /ħ, when the Stark-shifting beam has been applied for a gate-time T . Since the frequency-differences are known, this c-
an be accounted for by controlling the phase of the addressing light-field. Power fluctuations of the Stark-shifting beam will, however, also in this scheme give a contribution to the phase-difference which cannot easily be corrected for. To estimate this difference, suppose the intensity of the Stark shifting beam varies as I(t) = I0[1 + f cos(ωf t + φ)]. After a gate time T and having corrected by ∆φ, there will be a remaining phasedifference between two ions of f E1,2[sin(ωf T + φ) − sin(φ)]/(ħ-
ωf ). Thus, the most severe frequency components are those fulfilling ωf T 1, for which the phase-difference

6.3. Individual addressing of trapped ions 87
is ∼ E1,2T /ħ. Using E1,2/ħ ∼ ωz, the condition ωzT 1 must therefore be fulfilled to keep the phase-difference small. Combining this with the condition ωzT 1 for avoiding off-resonant sideband excitations, we find
f ωzT 1 ωzT, (6.3.5)
which, e.g, can be fulfilled with f = 10−4 and ωzT = 100. As mentioned in Sec. 6.2, f = 10−4 can almost be provided by a commercially available Laser Power Controller 6. Above, we considered in detail the simple case of two ions and one motional mode. If we take both motional modes, i.e., the center-of-mass mode at frequency ωz and the
stretch mode at frequency √3 ωz, into account, the optimal value of E1,2 is changed to
(√3−1)/2ħωz = 0.366ħωz, but our conclusions remain valid. Further, we can generalize Case A and Case B of Fig. 6.6 up to at least five ions, which is sufficient for applying our proposal in combination with the proposal for large scale quantum computation in an array of ion traps mentioned in Chap. 5 [89]. To go much beyond five ions is difficult in Case A due to the additional energy levels, while in Case B the only limit is that E1,2/ħ should not coincide with the frequency of one of the higher -
motional modes. In addition to individual addressing, a Stark-shifting laser beam can be used for realizing two-ion quantum logic operations using the Mølmer-Sørensen scheme [77, 78], between any two ions in a string. As an example, we show in Fig. 6.9, how one can make two ions in a three-ion string have the same unique resonance-frequency, needed for making a Mølmer-Sørensen gate between these two ions. Two neighbouring ions, e.g., Ion 1 and Ion 2 in Fig. 6.9 can have the same resonance-frequenc-
y, if the center of the Stark-shifting beam is positioned halfway between Ion 1 and Ion 2.
Figure 6.9: A Stark-shifting laser beam making two ions have the same unique resonance-frequency. This allows for selective addressing of any pair of ions for two-qubit operations.
Above we made the choice |↑〉 = 2D5/2(mJ = +5/2), but we could also have chosen |↑〉 = 2D5/2(mJ = +1/2), which has been used in the most recent experiments with 40Ca+ by the Innsbruck group [13]. In this case there is an additional contribution to ε↑ − ε↓ in Eq. (6.3.1) from the 3d 2D5/2–4p 2P3/2 transition at 854 nm, which increases (decreases) ε↑ − ε↓ for wavelengths above (below) 854 nm. Now, turning to our own choice of qubit states in 40Ca+, we consider the case where |↓〉 = 2S1/2(mJ = −1/2), |↑-
〉 = 2S1/2(mJ = +1/2), which also can be realized using 88Sr+ or 138Ba+. Here we present results for 40Ca+ and 138Ba+. An ac Stark shift can be induced by a circularly polarized Stark-shifting laser beam with wavelength λL tuned in between the two fine-structure levels of the P -states, as shown in Fig. 6.10. In this case
6Brockton Electro Optics.

88 Chapter 6 - Applications of optical dipole potentials . . .
Figure 6.10: Relevant energy-levels and transitions (dashed lines) in alkaline earth ions (e.g.,40Ca+, 88Sr+, and 138Ba+) for calculating the ac Stark-shifts of the qubit states [|↓〉 = 2S1/2(mJ = −1/2) and |↑〉 = 2S1/2(mJ = +1/2)] using a circularly polarized Stark-shifting laser beam.
the required power follows from Eq. (6.3.2) using ψ+ −ψ− [see Eqs. (6.2.17) and (6.2.18)]
for ψ and the off-resonant scattering rate is given by e−1/2E1,2  ̃Γsc/[κ(ψ+ − ψ−)] [ ̃Γsc is defined in Eq. (6.2.36)]. The required power and the scattering rate are plotted for 40Ca+ in Fig. 6.11(a) using the same parameters as above, i.e., ωz = 2π × 1 MHz, E1,2 = ħωz/2 and W = 30 μm. For the optimal choice of laser parameters (λL = 395.1 nm and 64 mW laser power) the scattering rate is approximately 80 Hz. Unfortunately, this scattering rate allows only for a limited number of gate-operations, -
even if the Stark-shifting laser beam only is present during the quantum logic operations. For 88Sr+ and 138Ba+ somewhat lower scattering rates can be obtained, owing to their larger fine-structure splitting. Specifically for 138Ba+ the graph in Fig. 6.11(b) shows a scattering rate of 8 Hz at the optimal choice of 474.5 nm wavelength and 540 mW laser power. Once again, an interesting alternative is a wavelength of 488 nm, which is directly available from an Argon-ion laser. Applying the same appro-
ach to 25Mg+ or 9Be+ (with hyperfine-levels of the ground state as qubit-levels [9]) is impracticable, due to their relatively small fine-structure splitting. Going to the long wavelength limit for 40Ca+, 88Sr+ or 138Ba+ is not very feasible for 40Ca+ and 88Sr+ with the parameters used above, since the required laser power is about 960 W and 170 W, respectively. For 138Ba+ the required power is about 30 W in the long wavelength limit, which is feasible, but maybe not very attractive.
6.3.2 Discussion
In conclusion, individual or selective addressing of trapped ions can be achieved by utilizing a Stark-shifting laser beam with modest focusing- and power-requirements. The performance of the scheme is good with the qubit states defined by sublevels of the 2S1/2 ground state and the 2D5/2 state, respectively, in 40Ca+, 88Sr+ or 138Ba+, in which case decoherence due off-resonant scattering events can be made negligible. Furthermore, the possibility of selective addressing of two distant ions in a s-
tring seems to be very attractive. By combining our proposal with the NIST trap-array proposal Ref. [89], it should even be applicable in large scale quantum computation. For the present project, where the qubit states are represented by the Zeeman sublevels of the ground state, the Stark-shifting method scheme gives rise to a relatively

6.3. Individual addressing of trapped ions 89
(a) (b)
Figure 6.11: The required laser power and the scattering rate as a function of wavelength for obtaining an ac Stark shift difference E1,2 = ħωz/2, when ωz = 2π × 1.0 MHz and W = 30 μm with the choice |↓〉 = 2S1/2(mJ = −1/2) and |↑〉 = 2S1/2(mJ = +1/2) in (a) 40Ca+ and (b) 138Ba+.
high off-resonant scattering rate or requires a very large power in the long wavelength limit. Thus, in our case the most relevant method for individual addressing seems to be focussing of a laser beam onto a single ion. In combination with the relatively large ion-ion distances, which can be used in connection with the gate presented in Sec. 6.2, the focussing method would even be relatively simple to employ.

90 Chapter 6 - Applications of optical dipole potentials . . .

91
Chapter 7
The linear Paul trap
With the present chapter, we come to the experimental part of this thesis, which we shall enter encouraged by the following quotation 1:
” . . . quantum phenomena do not occur in a Hilbert space, they occur in a laboratory.”
-Asher Peres.
To make quantum phenomena such as sideband cooling and quantum logic occur in our lab, a linear Paul trap suitable for such experiments has been designed and constructed. This trap is presented in the present chapter. In Sec. 7.1 the theory of confinement of charged particles in a linear Paul trap is introduced. In Sec. 7.2, we present the trap and discuss the design considerations, which are based on the specific requirements to the trap frequencies discussed in previous chapters.
7.1 Linear Paul trap theory
The realization of a linear Paul trap, which we shall consider here, is illustrated in Fig. 7.1. It consists of four plate electrodes in a quadrupole configuration, where two diagonally opposite electrodes (dark blue in Fig. 7.1) each are sectioned into a center piece and two equally wide end-pieces. By applying a suitable combination of alternating and static voltages to the electrodes, it is possible to trap charged particles near the center of the trap, as indicated by the three ions (red dots)-
 in a string configuration in Fig. 7.1. Confinement in the x–y plane (the radial plane) is obtained by applying a sinusoidally oscillating voltage (in the following named the RF-voltage) to two diagonally opposite electrodes while keeping the other two electrodes on ground with respect to the RF-voltage. This gives rise to an oscillating saddle potential, which, for a suitable RF-voltage and oscillation frequency, leads to an effectively confining potential in the radial plane. Axial confinement a-
long the z-axis is obtained by applying a DC so-called endcap voltage, Uend, to the four electrode end-pieces. For a quantitative description of the confinement of a charged particle, consider first the radial confinement due to an RF-voltage, URF cos(ΩRF t), applied to the two light
1As quoted in Ref. [18].

92 Chapter 7 - The linear Paul trap
blue electrodes in the y–z plane in Fig. 7.1. In order to give a more general description, which will be useful later on, we also take into account a DC-voltage, Ua, applied to the six dark blue electrode pieces in the x–z plane in Fig. 7.1. The resulting electric potential in the radial plane is, to second order in the spatial coordinates, given by
Φ(x, y, t) = [Ua − URF cos(ΩRF t)] x2 − y2
2Lr02
+1
2L [Ua + URF cos(ΩRF t)] , (7.1.1)
taking the origin of the coordinate system to be at the symmetry-center of the trap. r0 denotes the distance from the trap center to the surface of the electrodes and L is a number of the order of unity. For electrodes of a hyperbolic cross-section L = 1, whereas for the plate electrodes shown in Fig. 7.1, the potential is comparatively weaker, meaning that L > 1. Therefore L is named ‘the loss factor’ in the following [112]. For a single charged particle, the equations of motion in the radial pla-
ne can be put onto the Mathieu form [113]:
∂2x
∂τ 2 + [a − 2q cos(2τ )] x = 0 (7.1.2)
∂2y
∂τ 2 + [−a + 2q cos(2τ )] y = 0, (7.1.3)
where we have introduced the dimensionless parameters
q = 2QURF
mLr02Ω2
RF
, a = 4QUa
mLr02Ω2
RF
and τ = ΩRF t
2 . (7.1.4)
Q and m are the charge and the mass of the trapped particle, respectively. Each of these so-called Mathieu equations has stable solutions in certain regions of the a–q plane, which implies that the radial motion of the charged particle is stable in certain stability regions, where both Mathieu equations have stable solutions. There are in principle an infinite number of such stability regions (see, e.g., Refs. [114] or [115]), but in practice the trap is only operated within the largest one, which-
 is shown in Fig. 7.2. For a, q 1, the radial motion is described by the equations [114, 115]
x(t) = x0
[
1− q
2 cos(ΩRF t)
]
cos(ωsec,xt) (7.1.5)
y(t) = y0
[
1+ q
2 cos(ΩRF t)
]
cos(ωsec,yt), (7.1.6)
where
ωsec,x = 1
2
√
q2
2 + a ΩRF and ωsec,y = 1
2
√
q2
2 − a ΩRF . (7.1.7)
This means that the particle performs a so-called secular motion along the x-axis and the y-axis with amplitudes x0 and y0 at the secular frequencies ωsec,x and ωsec,y, respectively. Superimposed on the secular motion is a fast, small-amplitude so-called micromotion at the RF-frequency, ΩRF . Note, that the amplitude of the micromotion [i.e., qx0 cos(ωsec,xt)/2 for the x-coordinate] is proportional to the distance from the trap center. Particularly, there is no micromotion on the trap axis, which -
is essential

7.1. Linear Paul trap theory 93
Figure 7.1: Geometry of the linear Paul trap presented in this chapter. An alternating voltage is applied to two diagonally opposite electrodes (light blue), which provides confinement in the x–y plane (the radial plane), as described in the text. Ua and the axially confining endcap voltage, Uend, are DC-voltages applied to the other electrodes as indicated.
Figure 7.2: The largest stability region in the a − q plane for a charged particle moving in the x–y plane subject to the potential of Eq. (7.1.1).
for the idea of using a string of trapped ions in a linear Paul trap for quantum logic operations. We shall return to the discussion of micromotion in Chap. 9.
Axial confinement of the charged particle is accomplished by applying the endcap voltage, Uend, to the four end-pieces of the dark blue electrodes in Fig. 7.1. Near the trap center this gives rise to the potential
Φend(x, y, z) = κUend
[
z2 − 1
2 (1 − χ)x2 − 1
2 (1 + χ)y2
]
, (7.1.8)
where κ is a geometrical factor of the order of (2z0)−2, where 2z0 is the width of the electrode center-pieces. The parameter χ accounts for the fact that the endcap voltage acts asymmetrically in the radial plane. From Eq. (7.1.8) it follows that the motion of

94 Chapter 7 - The linear Paul trap
the charged particle along the z-axis is harmonic at frequency
ωz =
√ 2QκUend
m . (7.1.9)
Since Φend contains x- and y-dependent terms (to fulfill the Laplace equation), the application of the endcap voltage gives rise to a modified set of Mathieu equations for the radial motion:
∂2x
∂τ 2 + [a + az(1 − χ) − 2q cos(2τ )] x = 0 (7.1.10)
∂2y
∂τ 2 + [−a + az(1 + χ) + 2q cos(2τ )] y = 0, (7.1.11)
where
az = −2
( ωz
ΩRF
)2
(7.1.12)
always is negative. This results in a modification of the stability regions in the a–q plane [116] and a change of the radial trap frequencies:
ωsec,x → ωx = 1
2
√
q2
2 + a + az(1 − χ) ΩRF (7.1.13)
ωsec,y → ωy = 1
2
√
q2
2 − a + az(1 + χ) ΩRF . (7.1.14)
Thus, for χ < 1 the endcap voltage has a defocussing effect in the radial plane. Neglecting micromotion, the potential energy of the ion can be written as that of a three-dimensional harmonic oscillator
U (x, y, z) = 1
2 m (ω2
xx2 + ω2
yy2 + ω2
z z2) , (7.1.15)
with the radial trap frequencies, ωx and ωy, and the axial, ωz, determined by the trap geometry, the applied voltages and the charge and the mass of the ion.
7.2 Trap design and construction
7.2.1 Design considerations
In previous chapters we have seen that the different aspects of trapped-ion quantum logic experiments, e.g., sideband cooling and gate operations, only works efficiently, if the trapping potential meets certain criteria. First of all, the potential should be harmonic to a very good approximation, since the vibrational energy levels must be equidistantly spaced. Second, the trap frequencies should have a certain magnitude. Since quantum logic operations involves the axial modes, the magnitude of th-
e axial oscillation frequency, ωz, is subject to several conditions. ωz sets in turn a lower bound on the radial trap frequencies due to the stability condition for an N -ion string given by Eq. (3.2.3). In the following, we consider first the most important conditions on ωz and argue that the previously used ‘typical’ value of ωz ∼ 2π × 1 MHz is a reasonable choice. After that we consider the implications for the radial trap frequencies. The axial trap frequency is important in, at least, the fol-
lowing connections:

7.2. Trap design and construction 95
• It defines the frequency spacing between vibrational levels, which must be much larger than the spectral resolution of the Raman transition between the qubit states, in order to fulfill the condition for the resolved sideband-limit.
• In most schemes for quantum logic operations, the ‘clock-frequency’ of the gateoperations scales linearly with ωz [see, e.g., Eq. (5.2.2)].
• The Lamb-Dicke parameter η (∝ √1/ωz) should be small enough to fulfill the
condition of the Lamb-Dicke limit, i.e. η√n + 1 1. On the other hand it should be sufficiently large that first-order vibrational state changing transitions are not too strongly suppressed.
• To have a good starting point for sideband cooling, the average axial vibrational quantum number after Doppler cooling, n ∼ kBTD/(ħωz), should be small.
• For individual addressing of ions on a string, ωz should not be too large, since the
equilibrium distance between the ions scales as ω−2/3
z.
In addition to the items on this list, the size of the trap is an important parameter, both for practical reasons and due to heating of the ion motion as discussed below. The trap size is indirectly set by the desired trap frequencies, since if large trap frequencies, i.e., large electric field gradients, are needed, the trap must necessarily be small in order to avoid unreasonably large voltages. The size of the trap, or rather r0, can be estimated as follows. For a given value of ωz the string s-
tability condition given by Eq. (3.2.3) puts a lower bound on ωx and ωy, which for small a and az roughly are equal to
qΩRF /√8 ≡ ωr. With ωr fixed to a value fulfilling the string stability condition and assuming q fixed (within the stability region in Fig. 7.2), ΩRF is therefore fixed. Using
ωr = qΩRF /√8 and the definition of the q-parameter [Eq. 7.1.4], we find that
URF
Lr02
= 4mωr2
Qq . (7.2.1)
Taking ωz = 2π × 1 MHz and requiring four ions on a string as a reasonable benchmark, ωr > 2π × 2 MHz is required due to Eq. (3.2.3). Using q = 0.3 2, we arrive at ΩRF =
√8ωr/q ≈ 2π × 20 MHz and
URF
Lr02
∼ 1 kV/mm2 (7.2.2)
for 40Ca+. Since we cannot expect URF to be much larger than 1 kV at ΩRF ≈ 2π × 20 MHz without getting into technical difficulties, we arrive at a quantitative limit to the trap size of r0 1 mm for L 1. Concerning heating of the motion of ions, there are at least two known relevant effects, namely the effect of thermal voltage fluctuations in the electrodes (Johnson noise) [105, 117] and fluctuations of so-called patch potentials [118], i.e., unwanted potentials which arise if regions on the surfa-
ces of the electrodes are covered with some material, e.g., calcium in our case [105]. The heating rate due to Johnson noise is proportional to R(ω = ωz)r−2
0 ωz−1, where R(ω) is the frequency-dependent resistance
2Larger q is an option, but it does increase the effect of any micromotion, which in practice is present.

96 Chapter 7 - The linear Paul trap
between two electrodes in a lumped-circuit model [117]. The heating rate due to fluctuating patch potentials is proportional to S(ω = ωz)r−4
0 ωz−1, where S(ω) is the power noise spectral density [105]. Experimentally, heating rates have been measured by the NIST group to be of the order of 1 phonon per 1–10 ms [92, 105] in traps of a few hundred μm size at trap frequencies of ωz ∼ 2π × 3 − 10 MHz. In Ref. [105], a survey of the
heating rates in traps of various sizes shows consistency with a r−4
0 -scaling, thus suggesting that the major heating source is fluctuating patch potentials. In Refs. [34, 37] from the Innsbruck group, heating rates of the order of 1 phonon per 100 ms are quoted for trap sizes of 2r0 ∼ 1 mm with ωz ∼ 2π × 1 MHz, i.e., similar to the trap size and the axial trap frequency in the example above.
In conclusion there are several good reasons on the list to make ωz as large as possible, but there are upper limits given by the desired Lamb-Dicke parameter, the need for individual addressing and indirectly by the size of the trap, for which the factor of r−4
0 in the patch-potential heating rate is particularly severe. With this in mind, ωz ∼ 2π × 1 MHz seems to be a good compromise, since the resolved-sideband limit can be reached, sideband cooling works efficiently (Chap. 3) and it gives a reasonable value for the Lamb-Dicke parameter (∼ 0.2). According to Eq. (7.2.2) and the discussion following it, a reasonable characteristic trap size would be r0 1 mm for this choice of axial trap frequency. At least in the Innsbruck experiments, the heating rate-
 for a trap of this size is roughly 1 phonon per 100 ms [34, 37], which seems to be acceptable.
7.2.2 Electrode shape and dimensions
Apart from the above considerations, the experience gained from construction of other linear Paul traps in our group [119] has naturally played an important role for the design of the trap presented here. However, since this trap is smaller than the other traps (r0 = 1.75 mm and r0 = 3.50 mm have been used [120]), some changes of the design have been necessary. In the other traps, the electrodes are cylindric with a diameter around 2.3r0, since this leads to a harmonic radial potential to a very g-
ood approximation [121]. For the present small trap, thin plates were chosen as electrodes in order to have a better optical access to the trap center than it would be the case with cylindrical electrodes of diameter 2.3r0. Using plate electrodes, the potential can still be made harmonic to a good approximation, as shown by the numerical calculations presented below. In the previously constructed traps, all four electrodes are sectioned into three pieces. RF-voltages are applied to all four electr-
odes [+URF cos(ΩRF t)/2 applied to two diagonally opposite electrodes and −URF cos(ΩRF t)/2 applied to the other two electrodes]. DC-voltages can be applied to all twelve electrode pieces, with the endcap voltage being applied to the eight end-pieces. The RF-voltage and the DC-voltage can be adjusted on all twelve electrode pieces, which gives the possibility of adjusting the equilibrium position of the trapped ions as well as the shape of the potential. In an attempt to carry these possibilities -
along to the new trap, it was therefore designed and build with all four electrodes sectioned into three parts, as it can be seen from Fig. 7.4(b) below. The voltages are, however, effectively applied as in Fig. 7.1. It turned out that with the higher RF-frequency used for the present trap 3, the RF-voltage adjustment
3Previous traps: ΩRF /2π ∼ 5 MHz.

7.2. Trap design and construction 97
on the individual electrode pieces was hampered by a significant ‘cross-talk’ between them, meaning that when the RF-voltage was supposed to be changed on a single electrode, the other electrode voltages were essentially changed by the same amount. This ‘cross-talk’ has been attributed to stray capacitance and/or inductance between the electrodes, between wires connected to the electrodes and the surroundings, and the fact that electronic components are non-ideal at high frequencies. Eventually, i-
t was therefore decided to reduce the effective number of electrode pieces by applying the RF-voltage only to six diagonally opposite electrode pieces, with the electrode pieces being shortcut three by three. Consequently, the endcap voltage can only be applied to four electrode pieces. This reduction of the effective number of electrode pieces diminishes the possibilities of cross-talk at the cost of a reduced flexibility. The remaining adjustment possibilities and suppression of noise originatin-
g from the RF-voltage will be discussed in more detail in Chap. 8. The mechanical construction of the trap will be described below, after an account of the numerical calculations for determining the dimensions of the electrodes.
Numerical calculations of the trapping potential
Under the condition that r0 should be around 1 mm or less and that the electrodes should be thin plates (thickness < r0), the trap dimensions was determined from numerical calculations of the trapping potential with the goals of minimizing anharmonic terms in the potential and minimizing the loss factor L. First the 2D electrode configuration in the radial plane, i.e., the parameters r0, the electrode thickness and the electrode length was determined. Following that, the 3D electrode configuration-
, i.e., the width and the sectioning of the electrodes, was determined. For a given electrode configuration, the static potential due to voltages applied to the electrodes was calculated using the program ‘Simion’, which solves the Laplace equation on a grid of points. The spatial resolution of the grid was 5 μm for 2D-calculations and 42 μm for 3D-calculations. For the configuration in the radial plane, we chose a distance between the electrodes of r0 ≈ 0.75 mm, as a compromise between having a s-
mall trap (not too large voltages) and good access to the central region of the trap. The electrodes are chosen to be much longer than r0, such that their exact length does not influence the potential in the trap center. Thus, for the configuration in the radial plane the only free parameter left is the thickness of the electrodes, which hence should be optimized with respect to minimization of the anharmonic terms and L. To this end, the static potential in the radial plane, Φ(x, y), was calculat-
ed, when a voltage, URF , was applied to two diagonally opposite electrodes and the other two electrodes were on ground. r0 = 0.71 mm was used. Then the potential along the x-axis (by symmetry equivalent to the y-axis) was fitted to the even terms, C2ix2i (i = 0 − 4), of an eight order polynomial. From this fit, the loss factor L = URF /(2r02C2) and the anharmonicity of the potential along the x-axis, defined as [112]
fx(x) = Φ(x, y = 0) − C0 − C2x2
C2x2 (7.2.3)
could be determined. For values of x, which are relevant for a cold ion-string, we have fx(x) ≈ C4x2/C2. Calculations were made for three different values of the electrode thickness: 0.15 mm, 0.25 mm and 0.35 mm. The obtained values of C4/C2 ≈ fx(x)/x2 and L are presented in Table 7.1, showing that a thickness of 0.25 mm or 0.35 mm is most

98 Chapter 7 - The linear Paul trap
Thickness[mm] L C4/C2 0.15 1.31 1.7 · 10−5 0.25 1.23 6.3 · 10−6 0.35 1.18 7.1 · 10−6
Table 7.1: The loss factor L and C4/C2 ≈ fx(x)/x2 (x in units of the spatial resolution of 5 μm) for three different values of the electrode thickness.
favorable. Since there is no significant difference between the two, 0.25 mm thickness was chosen, since various metals are available in this thickness as a standard.
Figure 7.3: C4,z/C2,z ≈ fz(z)/z2 (z in units of the spatial resolution of 42 μm) vs. width of the central electrode pieces. The zero crossing is around 2z0 = 1.35 mm.
The sectioning of the electrodes was determined from 3D-calculations of the potential. The eight end-pieces are chosen so wide that their exact width is irrelevant for the potential near the trap center. The spacing between the central electrode pieces and the end-pieces was fixed to 0.12 mm in the calculations and the distance between diagonally opposite electrodes was 2r0 = 1.50 mm, almost as above. Thus, the width of the four central electrode pieces, 2z0, is the only free parameter left. This -
width was optimized with respect to the anharmonicity along the z-axis, fz(z), defined analogously to fx(x). Once again, the anharmonicity is essentially given by C4,zz2/C2,z for all relevant values of z, where C2,z and C4,z are the coefficients of the second and the fourth order term, respectively, in the potential along the z–axis. The values obtained for C4,z/C2,z, with z in units of the spatial resolution of 42 μm, are shown in Fig. 7.3 for different values of 2z0. We observe that the anharmon-
icity, or at least the leading anharmonic term, is zero around a width of 2z0 = 1.35 mm and approaches zero at large values of 2z0. A width of 2z0 ≈ 1.35 mm was chosen, since the alternative of rather wide central electrode pieces ( 10 mm) would require large endcap voltages. Numerical calculations using r0 = 0.75 mm, 2z0 = 1.33 mm, an electrode thickness of 0.25 mm and a spacing between the central electrode pieces and the end-pieces of 0.12 mm yields the following trap parameters for a single 40-
Ca+ ion in the trap:

7.2. Trap design and construction 99
ωz = 2π × 177 kHz × √Uend[V] (7.2.4)
az = − 0.0627 × Uend[V] ×
( ΩRF [MHz] 2π
)−2
(7.2.5)
a = 0.367 × Ua[V] ×
( ΩRF [MHz] 2π
)−2
(7.2.6)
q = 0.184 × URF [V] ×
( ΩRF [MHz] 2π
)−2
(7.2.7)
χ = 0.269 (7.2.8)
7.2.3 Trap construction
Pictures of the trap are shown in Fig. 7.4. The electrodes are made of molybdenum, which is a suitable material, since it has a large conductivity (∼ 1/3 of the conductivity of copper), is non-magnetic and sufficiently stiff that the thin plates do not bend. The electrodes were cut and polished 4 in the chemistry-lab at the institute, to final dimensions (thickness×width×length) of (0.25 ± 0.01) mm × (5.0 ± 0.1) mm × (20.0 ± 0.3) mm for the end electrode pieces and (0.25 ± 0.01) mm × (1.30 ± 0.01)-
 mm × (20.0 ± 0.3) mm for the central electrode pieces. The distance between diagonally opposite electrodes is 2r0 = (1.44±0.02
0.00) mm and the spacing between the central electrode pieces and the
end-pieces is (0.10±0.02
0.00
) mm. For technical reasons, the dimensions are not exactly the same as in the numerical calculations, but after a proper rescaling they are still ‘optimal’ within the spatial resolution of the calculations. The electrodes are mounted in four slits in the Macor-block 5 seen in Fig. 7.4, and fixed using UHV-compatible, non-conducting glue 6. The Macor-holder has a ∅6-hole for optical access along the trap axis and 3 mm wide slits for optical access perpendicular to the trap axis, both horizontally -
and vertically. The holder is fixed to a stainless steel mounting [can be seen in Fig. 7.4(b)], which in turn is fixed to a stainless steel base 7. The base is mounted in the center of a vacuum chamber, which will be described in more detail in the next chapter. For feeding in voltages to the electrodes, short pieces of ∅0.25 tantalum wires are spot-welded onto the electrodes and connected either to ∅1 copper-wire or to electronic components, which will be described in the next chapter. The thin w-
ire seen below the trap in Fig. 7.4(a) is a ∅0.2 tungsten-wire, which is placed immediately beneath the trap center. Serving as a glow lamp, it can mark the trap center, when adjusting an imaging system, which also is described in the next chapter. Since it never has been necessary to use the lamp for this purpose and it probably contaminates the electrodes when glowing, it could be left out in future traps of this type.
4Polished using a 1 μm diamond polishing paste. 5Macor is a machinable glass-ceramic material, which is ultrahigh vacuum (UHV) compatible and non-conducting. 6Epotek H74F, two-component epoxy-glue. 7Since the mounting is close to the trap center, it is made of essentially non-magnetic stainless steel, grade 316, in contrast to the standard grade 304 used for the base.

100 Chapter 7 - The linear Paul trap
(a) (b)
Figure 7.4: Pictures of the linear Paul trap. The thin metal plates are the molybdenum electrodes and the white block holding the electrodes is made of Macor. The precise trap dimensions are given in the text. (a) Front view, the Macor block is 15 mm wide. (b) Side view, the Macor block is 15 mm long.

101
Chapter 8
Experimental equipment and
methods
In this chapter, we describe the experimental equipment and methods which have been used in the experiments described in Chap. 9 and Chap. 10, as well as equipment for controlling laser frequencies and making laser pulses (Sec. 8.5), which will be used for the future trapped-ion quantum logic experiments.
8.1 Vacuum chamber
The trap presented in the preceding chapter is mounted in the vacuum chamber shown in Fig. 8.1. The vacuum chamber is made of stainless steel and has an inner diameter of 30 cm. It is mounted in a hole in an optical table, from here on referred to as the trap table. An ion pump and a sublimation pump are permanently connected to the vacuum chamber and a turbo molecular pump can be connected via a roughing valve 1. To reach ultrahigh vacuum (UHV) conditions the turbo pump is used for initial evacua-
tion during a bakeout of the system to about 150◦C lasting two to three days. This brings the chamber pressure down to the working pressure of the ion pump and by lowering the chamber temperature to room temperature and using the ion pump and the sublimation pump a chamber pressure of roughly 4 · 10−11 Torr can eventually be obtained. The pressure is monitored by an ion gauge 2 and the restgas content in the chamber can be determined using a restgas-analyzer (RGA) 3. In the vacuum chamber, a plate-
 with threaded holes is mounted, which enables easy mounting of various parts in the chamber. The following parts are mounted in connection with the vacuum chamber:
• The trap is mounted on a stainless steel base in the center of the vacuum chamber. The tantalum wires, which are spot-welded onto the electrodes, are connected either to ∅1 copper-wire or to a resistor and a capacitor as illustrated
1The ion pump is a Varian VacIon Plus 300 Starcell pump (240 L/s) with a Midivac 929-5002 controller; the sublimation pump is constructed at the institute; the turbo pump is a Leybold Trivac pump. 2A Bayard-Alpert gauge, model AIG17G from Arun Microelectronics Ltd.. 3Spectra restgas analyzer with LM61 satellite, LM502 analyzer and LM9 RF-head.

102 Chapter 8 - Experimental equipment and methods
in Fig. 8.2(a) below. In order to avoid mechanical stress on the tantalum wires, the copper-wires/resistors are fixed in in-line connectors mounted in two Macorblocks. The in-line connectors are connected by ∅1 copper-wire to the pins of a vacuum feedthrough 4. Two of these wires carry the RF-voltage and they are shielded by grounded copper stockings.
• A pair of coils, for creating a Zeeman-splitting of the ground state sublevels of the 40Ca+ ion, are mounted on either side of the trap, parallel to the trap axis. The coils, which are described in more detail below, are connected to ∅2.5 copperwire (thick wire, for good heat-transport and low resistance), which in turn are connected to the pins of a high-current vacuum feedthrough 5.
• Two ovens for producing an effusive beam of calcium and magnesium (not used in this work) atoms, from which ions are produced as described in Sec. 8.6 and loaded into the trap. Each oven consists of a hollow graphite cylinder surrounded by a tungsten-wire wound as a coil. These parts are mounted in a hollow ceramic cylinder (for thermal and electric isolation) which in turn is mounted in a stainless steel housing. The graphite cylinder contains calcium (or magnesium) in metallic form and when he-
ated, by passing a current through the tungsten-wire, an effusive atomic calcium beam passes through a hole and propagates towards the trap center. The oven temperature can be monitored by a thermosensor. The Ca-oven is normally operated at 470◦C.
• An aperture and several skimmers made of stainless steel plates, which collimates the atomic beam(s) from the oven(s).
• An oven shutter, which can block the atomic beam(s). It consists of a stainless steel plate mounted on an axle, which can be rotated from outside the vacuum chamber.
• A small piece of an optical fiber of 125 μm diameter which can be placed in the trap center using a translation stage. When laser light impinges upon the fiber, it can be observed by using the imaging system described in Sec. 8.7. This is useful for calibrating the magnification of the imaging system as well as for a crude alignment of the various laser beams.
• An electron gun (not used in this work) enables ion production by electron impact ionization of the calcium or the magnesium atoms in the atomic beams. The electron beam can be steered through the trap center by two sets of deflection plates.
• Six viewports (anti-reflection coated fused silica windows) allow for laser access parallel and perpendicular to the trap axis as well as in a 45◦ angle. In a top flange (not shown in Fig. 8.1) another window is mounted, through which the ion fluorescence and scattered light from the fiber can be viewed by the imaging system. These windows can, at the very most, withstand a temperature of 200◦C, thus, keeping a reasonable safety margin, the above-mentioned bakeout temperature of the vacuum syste-
m is limited to about 150◦C.
4Caburn-MDC HV3-10Q-20-C40. 5Caburn-MDC HV5-25C-6-C40.

8.2. Trap voltage supplies 103
• A Variable Leak Valve 6 is mounted on a flange for letting various gasses into the vacuum chamber via a copper tube (not used in this work).
As indicated above, some parts have not been used for the present work; these parts were mounted in connection with previous experiments.
Figure 8.1: Overview of the vacuum chamber. The coloured arrows indicate laser beams; the colour coding is the same as in Fig. 8.5 below. For a length scale, we note that the distance between nearest neighbour holes in the base plate is 1 cm.
8.2 Trap voltage supplies
Two voltage supplies are used for operating the trap, one RF-supply, which generates the high-voltage RF-signal, and one DC-supply, which delivers DC-voltages to the effectively eight electrode pieces. These supplies have been constructed in the electronics department at the institute. Referring to Fig. 7.1, the two electrodes, to which the RF-voltage is applied, are named the RF-electrodes in the following and the other electrodes, to which only DC-voltages are applied, are named the DC-electrode-
s. Apart from the voltages indicated in Fig. 7.1, DC-voltages for adjusting the equilibrium position of captured ions can be applied to all electrodes. The DC-voltage on a DC-electrode is equal to UDC = Ua + Uadj (+Uend for endcapelectrodes), where Uadj is the adjustment voltage on the considered electrode. UDC is
6Brechtel Manufacturing Inc..

104 Chapter 8 - Experimental equipment and methods
(a) (b)
Figure 8.2: (a) In-coupling of DC-voltage to a DC-electrode. UDC = Ua + Uadj (+Uend for endcap-electrodes). (b) In-coupling of RF- and DC-voltage to an RF-electrode.
applied as shown in Fig. 8.2(a). The capacitor and the resistor ensures that any RFnoise picked up between the DC-supply output and the resistor is strongly suppressed at the electrode. Therefore, the resistor and the capacitor are mounted as close to the electrode as practically feasible inside the vacuum chamber. The resistor is rated as UHV-compatible and the capacitor is a porcelain (high-frequency, high-voltage) capacitor 7, which proved to be UHV-compatible. The two components are soldered t-
ogether using UHV-compatible solder wire 8 and connected to the electrodes via the abovementioned tantalum wires. For each of the RF-electrodes (consisting of three electrode pieces) the RF-voltage and a DC adjustment voltage is combined as shown in Fig. 8.2(b), ensuring that the RFvoltage is heavily damped at the output of the DC-supply 9. The adjustable capacitor (1.5-40 pF) enables adjustment of the RF-voltage on the electrode but can also be used for adjustment of the RF-frequency as discussed-
 below.
8.2.1 RF-supplies
In the past years two types of RF-supplies have been used with the present trap 10. The first RF-supply which was used is a self-oscillating source [122]. The main components are two radio tubes 11, where the anode of each tube is connected to the cathode of the other. The anode-anode voltage can be brought to oscillate by feeding a sufficiently large DC-voltage to the anodes (through a coil), thus providing us an RF-voltage, which in turn is coupled inductively to the trap. The oscillation freque-
ncy depends on the load of the system, which mainly is presented by the capacitance and inductance of the trap, the cables/wires connected to the trap and the two adjustment capacitors [1.5-40 pF, only one is shown in Fig. 8.2(b)]. Using the two adjustable capacitors, the oscillation frequency can be varied roughly over the range 14-18 MHz 12.
7Temex 102CLE222JP. 8Johnson-Matthey metal joining, LM10A. 9Some of the components are non-standard high-frequency, high-voltage components. 2.2 nF: Temex 102CLE222JP. 5.1 nF: American Technical Ceramics, 100E512KW 500X. 1.5-40 pF: Voltronics corporation, AP40HV/1500 V. 10At this point extra credit should be given to people in the electronics department, who have worked hard to solve the non-trivial task of generating an RF-signal around 18 MHz with ∼ 1 kV amplitude. 11http://tdsl.duncanamps.com, -
model 6146.
12In fact the system is bi-stable, meaning that under extreme conditions it can be brought to oscillate

8.2. Trap voltage supplies 105
The amplitude of the RF-voltage is controlled by the DC-voltage fed to the anodes and is limited to approximately 1 kV amplitude. Higher harmonics in the output are suppressed by at least 30dB, with third and fourth overtone being the most prominent ones. The RF-voltage output can be monitored via a calibrated signal from a pick-up coil. This RF-supply was used in initial tests of the trap and in some of the experiments described in the next chapter. It has, however, been discarded for now due to -
the fact that the RF-frequency is set by the load and not an external frequency source, as for the supplies described below. Since the load is temperature dependent, this means that after a change of the RF-voltage, which changes the equilibrium temperature of the system, the RF-frequency and hence the radial trap frequencies can drift. On one occasion we observed, that after having changed URF from 300 V to 500 V, one of the radial trap frequencies dropped 13 by 13 kHz before settling within 1-2 -
kHz of a new equilibrium value after 25 minutes. The RF-frequency actually settled faster than the observed radial trap frequency, which means that the amplitude of the RF-voltage, not unexpectedly, also was drifting. Although drifts of the radial trap frequencies on the level of 10 kHz may not be very critical (the power broadened linewidth of the Raman transition is 10 kHz or more in sideband cooling), it is an unsatisfactory situation that the radial trap frequencies drift, since they are the m-
ost important trap parameters for sideband cooling of the radial motion. The currently used type of supply is a fixed-frequency supply. A sinusoidal signal from a function generator 14 is amplified 15 and coupled inductively to the trap electrodes using a ferrite core with a single winding on the primary side and 10-15 windings on the secondary side, depending on the desired RF-frequency. The windings, the ion trap and the adjustable capacitors in Fig. 8.2 constitute an LCR resonant circuit and th-
e trap is operated at the resonance frequency of this circuit. Naturally, the resonance frequency of the LCR-circuit also varies with temperature, which will lead to a variation in the output-voltage if the RF-frequency is kept fixed, however, the problem seems to be smaller than with the self-oscillating source. The output-voltage is measured using a capacitive voltage-divider on the secondary side, which provides a monitoring signal (varies between 1:100 and 1:125 of the output voltage for the d-
ifferent supplies). For reasons discussed in Chap. 9, this type of supply has been used in the following three different versions having different resonance frequencies of the LCR-circuit.
1. Supply with resonance frequency adjustable over the range 14.0 − 19.4 MHz, usually operated near 18.0 MHz for comparison with the self-oscillating supply.
2. Same supply as number 1, but with a resonance frequency in the range 10.4 − 14.5 MHz. Usually operated near 11.0 MHz for comparison to an early version of the same supply and for reasons discussed in the next chapter.
3. An RF-supply constructed for the larger linear Paul traps used in our group, operated at 5.6 MHz.
around 100 MHz, however, with a rather small amplitude. 13Measurements of trap frequencies are described in detail in Chap. 9. 14Hewlett-Packard 8656B signal generator 0.1-990 MHz. 15Using either the 100 W amplifier unit in an Intraaction Frequency Synthesizer (VFE-30100A5) or a 4 W amplifier, 4W1000, from Amplifier Research.

106 Chapter 8 - Experimental equipment and methods
Control # Electrode # Purpose Voltage [V] 1 4,6,7,9 Endcap voltage 0 . . . 100 2 4,5,6,7,8,9 a-parameter −10 . . . 10 3 4,7 Axial equilibrium position −10 . . . 10 4 6,9 Axial equilibrium position −10 . . . 10 5 4,5,6 Radial equilibrium position, x-axis −10 . . . 10 6 2 Radial equilibrium position, y-axis −10 . . . 10
Table 8.1: Overview of the control buttons on the DC-voltage control unit.
8.2.2 DC-supply
The necessary DC-voltages, Uend, Ua and Uadj, are provided by a DC control unit. The numbered outputs of this unit are connected to the electrodes as shown in Fig. 8.3 and controlled in six groups as summarized in Table 8.1. As the ‘Purpose’ column in the table indicates, the voltage on each group of electrodes controls either a trap parameter (a or ωz) or the equilibrium position of the ions along a given axis.
(a) (b)
Figure 8.3: Overview of the electrode numbering. Electrodes 2 and 11 are RF-electrodes and electrodes 4-9 are DC-electrodes. (a) Front view. (b) Side view.
8.3 Magnetic field coils
As discussed in Chap. 3 (see particularly Fig. 3.8) a Zeeman-splitting of the ground state sublevels in 40Ca+, which is much larger than the trap frequencies, is necessary. We will aim for a splitting of 2π × 15 MHz, which requires a magnetic field of 5.4 Gauss (see App. B). The coils for producing this field are the ones mentioned above, which are placed inside the vacuum chamber for two reasons. First, to avoid using large currents it is advantageous to place the coils close to the trap. Second,-
 to have the possibility of quickly switching on and off the magnetic field, the coils should not be placed outside

8.3. Magnetic field coils 107
the chamber, since this would require large coils (large inductance) and eddy currents would be induced, e.g., in the vacuum chamber. The coils are shown in Fig. 8.4. Since they have to be UHV-compatible, they are made of unisolated ∅1 copper-wire wound on a Macor-cylinder with grooves which keep the windings separated. The coils are mounted symmetrically around the trap center (see Fig. 8.1) such that an approximately homogenous magnetic field parallel to the trap axis can be produced. A ∅6 hole -
in each Macor-cylinder allows for passage of lasers beams parallel to the trap axis. When a current I pass through the coils, the magnetic field strength B in the trap center is
B[Gauss] = 1.2(1) · I[A]. (8.3.1)
Figure 8.4: The magnetic field coils. The coils are wound on grooved Macor-cylinders of 21 mm length. The inner diameter of the 13 windings is 20 mm. A ∅6 hole in each Macor-cylinder allows for passage of laser beams.
The current is supplied by a stable current-controlled power-supply16. The magnetic field can be switched quickly on and off using a fast current-switch constructed at the institute, which can switch the current from the supply between going through the coils and a series-connected 1Ω high-power dummy-resistor or through another 1Ω high-power resistor. The current can be switched on to within 1 permille of the supplied current in approximately 200 μs, which is limited by the settling time of the s-
upply. When switching off the current, it drops approximately exponentially with a time constant of ∼ 5 μs, consistent with L/R, where L is the inductance and R is the resistance of the coils and the dummy-resistor, respectively . Since the coils are placed inside the vacuum chamber, the heat deposited in the coils can only be removed through the wires themselves or via blackbody-radiation. This can give rise to an elevated equilibrium temperature of the coils, which can lead to an increase in the-
 chamber pressure. To reduce this problem, the coils have been smeared in glue 17, which improves the heat-conductance between the windings. The coils have been tested under UHV-conditions to 6 A with no observable increase in the chamber pressure. At a later stage of the experiments it might become relevant with a Zeemansplitting of 2π × 30 MHz, which would require a current of 9 A. It can be estimated that the temperature of the coils will increase by about 40 K in this case, which would be belo-
w the bakeout temperature and hence it should not increase the chamber pressure.
16Toellner, TOE8851-16, 20 A. Stability within 8 hours: 0.1%. Residual ripple: 500 μA (rms). Relative temperature sensitivity: 10−4/K. 17EPOTEK H74F, also used for gluing the trap electrodes to the Macor block.

108 Chapter 8 - Experimental equipment and methods
In order to compensate for earth-fields and stray magnetic fields, five coils are mounted outside the vacuum chamber, which enables compensation in all three spatial dimensions. Two sets of coils are mounted pairwise symmetric around the trap center, providing relatively homogenous compensation fields in the horizontal plane, respectively parallel and perpendicular to the trap axis. Another coil mounted above the vacuum chamber (no counterpart below the chamber) can provide a vertical compensation-
 field. The power supplies are identical to the one used for the Zeeman coils. Finally, a coil mounted close to the chamber can provide a vertically directed magnetic field in order to define a vertical quantization axis for the ions (see Sec. 3.1.).
8.4 Laser light sources for Ca+ ions
The laser systems providing light at 397 nm, 850 nm, 854 nm and 866 nm are placed on two separate optical tables. Light from these lasers are brought to the trap table through polarization-maintaining optical fibers. Alternatively, the 397 nm light is brought to the trap table via mirrors through air.
8.4.1 397 nm sources
For sideband cooling, quantum logic operations (Raman transition) and Doppler cooling, 397 nm light is provided by a frequency-doubled Titanium:Sapphire (Ti:Sa) laser 18. The Ti:Sa laser is normally pumped by 6 W of optical power at 532 nm from a Coherent Verdi V8 laser, which usually results in 400-500 mW of 794 nm light from the Ti:Sa laser. This light is frequency-doubled in a 12 mm long LBO crystal placed in an external bow-tie cavity, which is locked using a Ha ̈nsch-Couillaud lock [123, 124]-
, typically yielding 25-35 mW of 397 nm blue light 19. The blue light is passed through a series of cylindrical and spherical lenses in order to obtain an approximately Gaussian, collimated beam. The light can be transported to the trap table through air with negligible losses or through an optical fiber with 70-75% incoupling/transmission losses resulting in ∼ 8 mW available at the trap table. The advantage of using the fiber instead of the air-beam is the good pointing stability and the relative-
ly well-defined spatial mode after the fiber. The drawback is the power loss and non-perfect polarization maintenance in the fiber. The frequency of the Ti:Sa laser has until recently been locked to a passively temperature-stabilized commercial cavity 20, but is now locked to a home-built actively temperature-stabilized cavity using a Pound-Drever-Hall lock [71, 125]. A typical long-term frequency drift is 1 MHz at 794 nm over one hour [71]. In order to stabilize the output power from the frequenc-
y doubling cavity, a power stabilization system based on an acoustooptic modulator (AOM) has recently been build up [126]. The undeflected zeroth diffraction order from the AOM is send to the trap table, with the power kept constant to a chosen level by feedback-controlled deflection of (surplus) power out of the zeroth order beam. The system provides a power-stability at the level of a few percent from DC to 5 kHz, which particularly is an improvement
18Coherent 899 ring laser. 19With a mode matched input beam and a new crystal, 150 mW blue light at 500 mW input power has been obtained [123]. 20From Coherent.

8.5. Laser light control 109
for the long-term stability of the output from the doubling cavity. Above 5 kHz there is only little noise in the output from the doubling cavity, although one should be aware of noise somewhere in the range 20-30 kHz generated by the cavity-lock itself, which can be removed by adjusting the feedback voltage in the cavity-lock. For the present experiment, this power-stabilization system may in the future be complemented, or replaced, by a cavity placed on the trap table with the cavity length bein-
g locked to keep the transmitted power constant. This may seem superfluous, but the cavity has the additional advantage of providing a well-defined spatial mode and direction of the transmitted beam, when the direction of the input beam is properly optimized. This would render the optical fiber superfluous. The wavelength of the Ti:Sa laser beam can be measured down to seven digits relative precision using a wave-meter. Alternatively, the resonance frequency of the 2S1/2– 2P1/2 transition can be f-
ound by optogalvanic spectroscopy using a hollow-cathode discharge lamp [127, 128]. In the lab, another laser source at 397 nm is available, namely a home built diode laser system 21 capable of delivering about 5 mW of 397 nm light. Currently, it is, however, not planned to use this laser in connection with the project presented here.
8.4.2 Infrared sources
The three infrared transitions in the 40Ca+ ion, near 850 nm, 854 nm and 866 nm, are all covered by diode lasers built from anti-reflection (AR)-coated laser diodes 22, which provides tunability over a broad wavelength range. Two of the lasers (850 nm and 866 nm) are entirely home built and the third one (854 nm) is partly home built, in that the AR-coated diode has replaced the diode in a commercial diode laser 23. In each of the home-built lasers, the laser-cavity is constituted by the back-side-
 of the laser diode and an external grating (1800 lines/mm) mounted in the Littrow configuration. The laser light is out-coupled via the grating and send through a Faraday isolator and a set of anamorphic prisms; the latter in order to make the elliptically shaped beam from the diode laser circular. The laser light is then coupled into an optical fiber and brought to the trap table (60-80% transmitted). The frequency of the 850 nm and the 854 nm lasers can be locked to the same actively temperatur-
e-stabilized cavity, identical to the one used for the Ti:Sa laser. Thus, the relative drift of the two laser frequencies, which is the important quantity for STIRAP, is much smaller than the drift of the cavity resonance (∼ 1 MHz/hour). The 866 nm laser can be frequency-locked to another actively temperature-stabilized cavity, also identical to the one used for the Ti:Sa laser. The wave-meter and optogalvanic spectroscopy can also be used at the infrared wavelengths of these three lasers.
8.5 Laser light control
To implement the sideband-cooling scheme, the STIRAP detection scheme and to perform quantum logic operations, the frequency and the intensity of the involved laser
21Laser diode from the Nichia Corporation. 22From the Ferdinand-Braun Institute, Berlin. 23SDL-TC10.

110 Chapter 8 - Experimental equipment and methods
beams must be accurately controlled on the timescales relevant for these processes. Furthermore, the phase-difference between the Raman beams has to be controlled (see Sec. 5.3). The frequency should first of all be controlled to better than 20 kHz or so for efficient sideband cooling (see Fig. 3.12) and for reliably performing gate operations. Moreover, it should be possible to change the frequency-difference between the Raman beams for sideband cooling of the various motional modes and for gate -
operations on the carrier and the red and blue sidebands. The fastest frequency changes needed are on the timescale of the shortest frequently used pulses, i.e., carrier π/2-pulses, for which a reasonable duration would be 50 μs (much larger than π/ωz ∼ 0.5 μs, see Chap. 5). With respect to fast control of the intensity (pulse shaping), the duration of the π/2 carrier pulses sets the most stringent requirements for the Raman transition. Furthermore, it is required that all the STIRAP pulses of dur-
ation 5–10 μs are smooth. The laser frequencies can be changed and hence controlled by exploiting the frequency shift of light deflected by AOM’s. Likewise, pulse-shaping can be done using the deflected light from AOM’s, since the amount of deflected power depends on the RF-power applied to the AOM. The phase-difference between the Raman beams can be controlled using an electrooptic modulator (EOM) inserted in one of the Raman beams. Analog and digital control signals to the AOM’s and the EOM’s wi-
ll be provided by four boards from National Instruments 24, which also will be used for data acquisition, with everything being controlled by Labview 25-based programs. One board (PCI-DIO32-HS) will control the timing, providing up to 16 · 106 updates of 16 digital output channels, e.g., at a rate of 100 kHz. For the STIRAP pulses, a much higher resolution is needed and therefore the control voltages for creating these pulses are generated using a 4-channel 40 MHz arbitrary waveform generator 26. -
The entire setup involves nine AOM’s and two EOM’s, for which details are given below. An overview of the setup on the trap table is given in Fig. 8.5, of the involved AOM’s and EOM’s in Table 8.2 and of the frequency shifts from the many AOM’s in the blue beamline in Fig. 8.6. At present, the AOM’s numbered 1-6 below and the EOM numbered 1 have not yet been set up.
8.5.1 397 nm sources
At the trap table, light from the frequency-doubled Ti:Sa laser is split in frequency as shown in Fig. 8.6 and spatially as shown in Fig. 8.5 27. Considering the light for the Raman transition first, the −1. diffraction order from AOM1 provides light at a large detuning with respect to the 2S1/2– 2P1/2 transition frequency. AOM2 enables pulse-shaping and AOM3 and AOM4 controls the frequency difference between the Raman beams. The 15 MHz difference between the centerfrequencies for AOM3 and AOM4 co-
rresponds to the projected Zeeman-splitting. From AOM2, AOM3 and AOM4, the −1. diffraction order is used in order to get the largest possible detuning of the Raman beams (as opposed to using the +1. diffraction order). For simplicity, the AOM’s are intended to be used in single-pass, but an even larger de
24National Instruments PCI-6704, PCI-6713, PCI-6071E, PCI-6533 (PCI-DIO-32-HS). 25National Instruments. 26Thurlby Thandar Instruments TGA1244. 27In Fig. 8.5 blue light is brought to the trap table through the fiber, but the ‘air-beam’ can be used just as well.

8.5. Laser light control 111
Device Type Purpose AOM1 Brimrose TEF-600-100-.397 Raman, detuning AOM2 Brimrose TEF-80-20-.397 Raman, pulse-shaping AOM3 Brimrose TEF-225-50-.397 Raman, frequency control AOM4 Brimrose TEF-240-50-.397 Raman, frequency control AOM5 Intraaction ASM-702B8 STIRAP-pulse/frequency shift AOM6 Intraaction ASM-702B8 Frequency shift AOM7 Intraaction AOM-40N STIRAP-pulse AOM8 Intraaction AOM-40N STIRAP-pulse AOM9 Brimrose TEF-80-10-.866 STIRAP-pulse EOM1 Linos LM 0202 Phas VIS 0.1W Raman, phase control EOM2-
 Linos LM 0202 IR 0.1W Repumping, polarization rotation
Table 8.2: Overview of AOM’s and EOM’s involved in the setup in Fig. 8.5.
tuning can be obtained if some, or all of them, are used in double-pass. For AOM3 and AOM4, this would also cancel a small change in deflection angle which occurs whenever the frequency is changed. For doing this, a Zeeman-splitting of about 2π × 30 MHz would be needed. For all processes which are near-resonant with the 2S1/2– 2P1/2 transition, i.e., Doppler-cooling, STIRAP, pumping in the sideband-cooling scheme and optical pumping to one of the sublevels of the ground state, the zeroth diffracti-
on order from AOM1 is used. The STIRAP-pulse needed at 397 nm is made using AOM5. AOM6 is necessary for shifting the light into resonance (or close to) with the 2S1/2– 2P1/2 transition. The drivers for AOM1, AOM2, AOM 5 and AOM 6 are standard fixed-frequency drivers from Brimrose. The drivers for AOM3 and AOM4 have been developed at the institute. They are based on a direct digital synthesizer 28, which can generate a frequency in the range 200 − 265 MHz from a 400 MHz reference signal. The width -
of the reference signal sets the width of the output signal, which is about 20 kHz (full width at -40 dB). Up to 1024 frequencies can be defined in a table, whose entries can be addressed by a digital or an analog signal. Frequencies can be scanned by scanning through the entries in the table in various modes at a max. frequency of 10 kHz. A faster scan rate can be obtained by employing internal ramp-functions of the synthesizer. Changes of the phase-difference between the Raman beams will be made-
 by EOM1. The voltage supply for this EOM is a fast linear amplifier constructed at the institute, which can switch from zero voltage to the EOM half-wave voltage of 150 V (within 1%) in ∼ 2 μs. In Fig. 8.5 the two beam paths from the polarizing beamsplitter after AOM2 to the trap center are made equally long, with the purpose of cancelling some drifts of the phase-difference between the Raman-beams. For example drifts due to thermal expansion of the trap table, which would lead to a change in the-
 beam path lengths.
8.5.2 Infrared sources
STIRAP pulses at 850 nm, 854 nm and 866 nm are produced using AOM7, AOM8 and AOM9, respectively. The AOM-drivers are standard fixed-frequency drivers from the
28AD9954 from Analog Devices.

112 Chapter 8 - Experimental equipment and methods
Figure 8.5: Setup of optical components on the trap table with signatures given in the upper left box. See text for details. The white space around the chamber is occupied by compensation coils and other parts as indicated on the drawing. Dots indicate threaded holes with a distance of 2.5 cm between nearest neighbours. The entire drawing is rotated 90◦ counter-clockwise with respect to the picture in Fig. 8.1.

8.6. Ion production 113
Figure 8.6: Schematic overview of the AOM’s and approximate frequencies along the blue beamline given as the detuning with respect to the resonance frequency of the 2S1/2– 2P1/2 transition. The numbers in parentheses indicate the used diffraction order.
manufacturer of the AOM’s (see Table 8.2). As mentioned in Sec. 3.1, the efficiency of repumping from the 2D3/2 state to the 2P1/2 state is reduced, when the applied magnetic bias field is small, which it should be to avoid a large Zeeman-splitting. In this case, the repumping efficiency can be improved by quickly rotating the polarization of the repumper light, which is done using EOM2 with an applied sinusoidal voltage of ∼ 4 MHz frequency and ∼ 300 V peak-peak amplitude (the half-wave voltage o-
f the EOM). The voltage supply, which is constructed at the institute, is able to switch ‘on’ in ∼ 40 μs and ‘off’ in ∼ 2 μs within 1% of the peak-peak voltage and zero, respectively. A preliminary test has shown that Doppler cooling works well using polarization rotation of the repumper light.
8.6 Ion production
For loading ions into the trap, ions are produced in or near the trap center by ionization of atoms in the atomic beam from the calcium oven. Previously, ions have been produced by electron impact ionization using the electron gun, however, this method has not been used for the present work. Instead, a resonance-enhanced two-photon ionization technique developed within the last few years has been used [129], [IV]. In contrast to electron impact ionization, this technique is very clean, meaning tha-
t no background gas atoms or molecules are ionized and no doubly-charged calcium ions are produced. Furthermore, the trap electrodes are not charged by electrons, as it often would be the case if the electron gun was used. In our scheme for resonance-enhanced two-photon ionization illustrated in Fig. 8.7, calcium atoms are ionized using 272 nm light from a frequency-doubled dye laser described below. From the 4s2 1S0 ground state, the atoms are resonantly excited to the

114 Chapter 8 - Experimental equipment and methods
Figure 8.7: Resonance enhanced two-photon ionization of neutral calcium. The hatched area indicates the continuum. Further details are given in the text.
4s5p 1P1 state, from which they can be ionized by absorption of another 272 nm photon or a 397 nm photon from the laser cooling light. Alternatively, the atoms can decay to the 4s3d 1D2 state, from which they can be ionized by absorption of a 272 nm photon. Light at 272 nm is produced by frequency doubling of 544 nm light from a dye laser 29 pumped by an Argon-ion laser 30. Frequency doubling takes place in a 7 mm long BBO crystal placed in an external bow-tie cavity, which is locked using a Ha ̈n-
sch-Couillaud lock [124, 130]. The light is brought to the trap table through air and focussed to a beam waist of approximately 100 μm in the trap center. With this waist, a few mW of 272 nm light, which easily can be produced, is sufficient for producing the needed number of ions. The spectral linewidth of the 272 nm light is sufficiently small, that we can load all the naturally abundant isotopes of calcium (see App. B) selectively and resolve the hyperfine structure of the 4s5p 1P1 state in the-
 43Ca isotope. This was recently exploited to measure the isotope shifts of the 4s2 1S0–4s5p 1P1 transition in neutral calcium and the hyperfine splitting of the 4s5p 1P1 state in 43Ca [IV].
8.7 Imaging system
The imaging system used for observing the 397 nm fluorescence light from the ions, as well as scattered light from the optical fiber, is placed above the trap, as illustrated in Fig. 8.8. A Nikon objective lens for MM40/60 measuring microscopes (10x magnification, f -number ∼ 1.7) placed about 5 cm above the trap center collects the fluorescence/scattered light, which subsequently is amplified by an image intensifier and imaged onto a CCD-camera, resulting in an all over magnification of about 20 -
for the entire imaging system 31. The image-intensifier consists of a photo-cathode, a pair of micro-channel plates and a phosphor screen. When photons impinge on the photocathode, electrons are produced, which are accelerated through the microchannel plates and
29Coherent CR-699 ring laser. Laser dye: Pyrromethene 556. 30Spectra Physics Beamlok laser, 20 W. 31The image intensifier is from Proxitronic, model BV 2581 BY-V 1N. The CCD-camera is a SensiCam system from PCO.

8.7. Imaging system 115
hence multiplied. When the electrons hit the phosphor screen, light is produced, which is imaged onto the CCD-chip. The CCD-images are digital images with 12 bit resolution, which can be viewed on a personal computer while they (optionally) are recorded to the RAM of the computer. The image-intensifier as well as the CCD-chip has a linear response to the intensity of the incoming light. The image intensifier can be gated by quickly switching on and off the acceleration voltage for the microchannel-
 plates. Gating is possible in two modes: a ‘normal’ mode, where the opening time of the image intensifier is adjustable down to approximately 40 ns (max. gating frequency 5 MHz) and a ‘needle’ mode, where the opening time of the image intensifier is fixed to about 20 ns (max. gating frequency 2 MHz). The acceleration voltage can be measured via a monitoring output (approximately 1:100 of the acceleration voltage).
Figure 8.8: Schematic drawing of the imaging system. PMT: Photo-multiplier tube.
The CCD-images provide spatially resolved images of the ions as well as a measure of the ion fluorescence. The ion fluorescence can additionally be counted using a recently installed photo-multiplier tube 32, for which light is tapped off by a (removable) 1 mm thick 50/50 beamsplitter inserted between the objective lens and the image intensifier.
32Hamamatsu H5783P-06.

116 Chapter 8 - Experimental equipment and methods

117
Chapter 9
Trap characterization and ion
mass measurements
In sideband cooling and trapped-ion quantum logic experiments, the axial and radial trap frequencies play an important role, as described in previous chapters. Thus, it is an important step towards such experiments to measure the trap frequencies and determine experimentally how they behave as a function of various parameters, i.e., to characterize the trap. In this chapter we present the results of a series of experiments initiated with the goal of characterizing the trap by measuring the trap pa-
rameters introduced in Chap. 7. Some of the results were quite unexpected, which has led us to perform a rather extensive series of measurements. The trap characterization experiments and the interpretation of the results are described in Sec. 9.1. To conclude the trap characterization, a brief discussion of micromotion and patch potential problems is given in Sec. 9.2. The technique used for measuring the trap parameters is applicable for measuring ion masses, allowing a clear distinction between-
 ions with different atomic masses. Using a refined technique, it should even be possible to discriminate between ions with the same number of nucleons, which only differ in mass due to their different nuclear binding energies. Since this would be a valuable tool for an ongoing research project in our group concerning molecular ions, these possibilities for mass measurements have been investigated. The theory for the mass measurements and preliminary experimental results are presented in Sec. 9.3.
9.1 Measuring the trap parameters
In order to characterize the trap, we have measured the characteristic axial and radial trap oscillation frequencies of an ion, while systematically varying the RF-voltage or the applied DC-voltages. Assuming that the 3-dimensional trap potential is harmonic, such that a single laser cooled ion behaves as a classical damped harmonic oscillator (but a very expensive one!), an axial or radial trap frequency can be measured by determining the frequency at which a sinusoidally varying force resonantly-
 excites the oscillatory motion of the ion.

118 Chapter 9 - Trap characterization and ion mass measurements
9.1.1 Experimental setup
The experimental setup is in principle as described in Chap. 8, particularly as illustrated in Fig. 8.5, although the equipment for STIRAP and for the Raman transitions was not used. A single ion (or several ions) is (are) loaded into the trap using the photoionization technique described in Chap. 8 and Doppler laser cooled by the blue 397 nm and the red 866 nm cooling lasers focussed to waist sizes of ∼ 100 μm and ∼ 200 μm, respectively, in the trap center. Three blue cooling beams were used, two-
 beams counter-propagating parallel to the trap axis and one beam propagating perpendicular to the trap axis, thus allowing cooling of the axial as well as the radial degrees of freedom and balancing of the radiation pressure forces along the trap axis. The ions were viewed using the CCD-camera, typically with 50-100 ms exposure time for each image. A sinusoidally varying force for exciting the ion motion was obtained in two different ways. Either by applying a (small) oscillating voltage to the t-
rap electrodes, which excites the ions due to the resulting oscillating Coulomb force [131], or by intensitymodulation of the laser cooling light, leading to a modulation of the laser cooling force, which enables motional excitation of the ions. In the following these methods are named voltage-modulation and intensity-modulation, respectively. Intensity-modulation is in a sense more ‘clean’ than voltage-modulation, since no voltages are added to those necessary for trapping ions and hence the trap-
 potential is not perturbed. As discussed below, intensity-modulation is, however, only suitable for measuring the axial trap frequencies. In contrast, voltage-modulation can be used for measuring both axial and radial trap frequencies. As we shall see below, measurements of the axial trap frequencies fortunately yield identical results within the experimental uncertainty for the two methods.
Voltage-modulation
The modulation voltage is applied to an electrode as shown in Fig. 9.1. A voltage of the form V0 cos(ωmodt) (in the following named the input modulation voltage) is fed to the DC-input of one of the in-coupling circuits (to a DC- or an RF-electrode) shown in Fig. 8.2. Since the in-coupling circuits are designed with the purpose of damping RF-signals from the electrode side at the DC-input, only a small fraction of the input modulation voltage reaches the electrode from the DC-input. This fraction -
is the actual modulation voltage, Vmod cos(ωmodt). The amplitude Vmod depends on ωmod and the damping effect of the in-coupling circuit, which is different for the RF- and DC-electrode in-coupling circuits (see Fig. 8.2). The DC-voltage, UDC, applied to an electrode (see Fig. 8.2) is added to the input modulation voltage as shown in Fig. 9.1 and fed to the electrode as usual. For studying the motion of an ion along a specific trap axis, the modulation voltage is applied to a corresponding set of e-
lectrodes. For the axial motion (z-axis, trap frequency ωz) the modulation voltage is applied to the endcap-electrodes 4 and 7 in Fig. 8.3. For the radial motion along the diagonal between the DC-electrodes (x-axis, trap frequency ωx), a modulation voltage is applied to the DC-electrodes 4-5-6. For the radial motion along the diagonal between the RF-electrodes (y-axis, trap frequency ωy), a modulation voltage is applied to the RF-electrode numbered 11. Images showing an unexcited ion and an ion wh-
ich is motionally excited along the trap axis are shown in Fig. 9.2(a). V0, the power and the detuning of the cooling laser beams, particularly the blue axial beams, have been adjusted to control the amplitude

9.1. Measuring the trap parameters 119
of the motionally excited ions motion. The degree of excitation can be quantified
Figure 9.1: Incoupling of modulation voltage to an electrode. The input modulation voltage V0 cos(ωmodt) is added to the DC-voltage, UDC , supplied by the DC control unit described in Chap. 8 and fed to the DC-input of one of the in-coupling circuits shown in Fig. 8.2. The DC-input is marked by a cross on this figure and in Fig. 8.2. The resulting modulation voltage on the electrode is Vmod cos(ωmodt). No RF-voltage is indicated on this figure.
(a) (b)
Figure 9.2: (a) Top: An unexcited, Doppler laser cooled 40Ca+ ion. Bottom: The same ion excited along the trap axis (horizontal) using voltage-modulation. The width of the pictures corresponds to a distance of 47 μm in the trap center. (b) Projection of the signal from the unexcited ion onto the trap axis. The curve is a fit to a Gaussian distribution. The full-width at half-maximum (FWHM) is 6.0 μm.
by projecting the signal from the ion onto the z-axis [horizontal in Fig. 9.2(a)], i.e., to sum the pixel values in each vertical column of pixels. For the unexcited ion in Fig. 9.2(a), the distribution of the projected signal is approximately Gaussian, as shown in Fig. 9.2(b), where the full-width at half-maximum (FWHM) in this example is 6.0 μm. For measuring the degree of excitation versus modulation frequency, a whole sequence of images is recorded while synchronously sweeping the modulation f-
requency over a frequency range of interest. By projecting the signal from the ion onto the z-axis for each image, the projected signal as a function of axial position z and modulation frequency ωmod is obtained. The function describing this projected signal is called the

120 Chapter 9 - Trap characterization and ion mass measurements
Figure 9.3: Contour plot of SP (ωmod, z) for a scan of the modulation frequency across a frequency range containing the axial trap frequency ωz.
projected signal function and denoted by SP (ωmod, z) in the following. An example of a contour plot of SP (ωmod, z) near a resonance of the axial motion is shown in Fig. 9.3, clearly showing a resonant structure, which will be discussed in more detail below. Experimental details of recording such image sequences and obtaining the projected signal function are discussed in connection with the mass measurements described in Sec. 9.3.
Intensity-modulation
Intensity-modulation was only used for excitation of the axial motion (for reasons discussed below). One of the blue cooling laser beams propagating parallel to the trap axis was intensity-modulated using an EOM followed by a polarizer. By applying a variable voltage to the EOM, the polarization of the light passing through the EOM and hence the amount of light transmitted by the polarizer can be varied. Using a pulse-amplifier 1, a square wave intensity-modulation at frequencies ranging from DC t-
o roughly 1.3 MHz could be generated. The low and high intensity level in the modulated signal was usually adjusted to minimum and maximum transmission, respectively, in order to obtain maximal modulation. The fraction of a modulation-period where the intensity level is high could be varied from zero to one.
Since fluorescence light from an ion only is emitted when laser cooling light is applied, the intensity-modulated cooling light effectively acts a strobed light source. If the intensity-modulated cooling beam is the main source of blue cooling light, a scan across a resonance therefore looks quite different from Fig. 9.3. Examples of this and further details follow below in the section on mass measurements.
1Pulse amplifier with similar properties as the Linos LAV 400 analog amplifier, amplifying the signal from a Hewlett-Packard 33120A function generator.

9.1. Measuring the trap parameters 121
9.1.2 Theory: The driven damped harmonic oscillator
To give a quantitative description of the motional excitation, it is natural to consider a classical driven, damped harmonic oscillator. We consider the one dimensional case, which describes the axial motion or the radial motion along one principal axis if micromotion is neglected. Assuming the laser cooling force is linear in the ion-velocity, the equation of motion for a single ion is
z ̈ + γz ̇ + ω2
z z = Fmod
m cos(ωmodt), (9.1.1)
where the position coordinate is denoted by z, dots denote time derivatives, m is the ion mass, Fmod and ωmod are the amplitude and the frequency of the modulation force, respectively, and γ = α/m, where α is the friction coefficient of the laser cooling force defined in Eq. (3.1.4). For the square wave intensity-modulation, it is assumed that the frequency of a single component in its Fourier-series is close to the resonance frequency ωz such that the modulation force to a good approximation can -
be described by a single sinusoidally varying component. As mentioned, the validity of the above equation is limited to the regime where the damping force is linear in the ion velocity, which for the 2S1/2– 2P1/2 transition in 40Ca+ is the case when z ̇ = vz Γ1/2/k1/2 = 8 m/s (k1/2 is the wave-number for the transition). For a trap frequency of ωz = 2π × 1 MHz, the maximum ion speed is about 60 m/s for an excursion from the equilibrium position of only 1 μm, which actually is less than a typical e-
xcitation amplitude. Having stated this warning, we will for simplicity assume that Eq. (9.1.1) is valid, or at least that it describes the motional excitation well. The steady-state solution, zion(ωmod,t), to Eq. (9.1.1) is [132]
zion(ωmod, t) = Fmod
m√(ω2
mod − ωz2)2 + γ2ω2
mod
cos(ωmodt + φ) ≡ z0(ωmod) cos(ωmodt + φ),
(9.1.2)
where
tan(φ) = γωmod
ω2
mod − ωz2
. (9.1.3)
The amplitude z0(ωmod) is maximal at ωmod = √ωz2 − γ2/2 ≡ ωmax, which is close to
ωz, since for the 2S1/2– 2P1/2 transition in 40Ca+, γ is much smaller than typical trap frequencies [according to Eq. (3.1.5) γ < 2π × 32 kHz]. In the trap characterization measurements presented below, ωmax has been used for the axial and radial trap frequencies, since it is relatively simple to determine manually, i.e., by manually scanning the modulation frequency across the resonance and estimating the modulation frequency where the amplitude is maximal. If Eq. (9.1.1) is invalid, due to a lar-
ge ion velocity outside the linear regime of the laser cooling force and/or if micromotion is present, we will in practice also find a trap frequency close to the real resonance frequency [133]. Typically, ωmax can be determined with an uncertainty of a few hundred Hz for the axial motion and about 1 kHz for the radial motion.
9.1.3 Axial trap frequencies
As a first investigation of the trap properties, we measured the axial trap frequency ωz versus the endcap voltage Uend, using ωmax for ωz. A typical data set (obtained using

122 Chapter 9 - Trap characterization and ion mass measurements
intensity-modulation) is plotted in Fig. 9.4. Error bars are smaller than the size of the squares in Fig. 9.4. A fit to the expected square root dependence [see Eq. (7.1.9)] with an
offset of the endcap voltage included, yields ωz/2π = 180.36(5) kHz√Uend[V] − 0.251(11). The front factor of about 180 kHz is in good agreement with the factor of 177 kHz expected from numerical calculations of the trapping potential [see Eq. (7.2.4)]. The small deviation of about 2% can be explained by the fact that the actual width of the center electrode pieces (2z0) is about 2% smaller than the value used for 2z0 in the simulations and recalling that ωz is proportional to (2z0)−1 [see Eq. (7.1-
.9)]. Note that axial trap frequencies larger than 1 MHz, which we probably need for successfully performing sideband cooling and quantum logic experiments, have been obtained.
Figure 9.4: Measurement of ωz vs. Uend. The solid line is a fit to the data points
yielding ωz/2π = 180.36(5) kHz√Uend[V] − 0.251(11).
To check whether the two excitation methods yield consistent results and hence to check indirectly if any of the methods affect the measured axial oscillation frequency, ωz vs. Uend was measured using both excitation methods. At each value of Uend, ωz was measured for both methods before changing to a new value of Uend. The results are plotted in Fig. 9.5(a), from which we observe that the two methods agree fairly well. More quantitatively, fits to the two data sets yield ωz/2π =
180.54(5) kHz√Uend[V] − 0.265(12) and ωz/2π = 180.55(4) kHz√Uend[V] − 0.272(10) for voltage-modulation and intensity-modulation, respectively, showing a very good agreement between the two methods. Measurements of ωz vs. Uend have been performed on different days, using one or the other excitation method, different RF-supplies and RF-voltages, always with the front factor being between 180.1 kHz and 180.6 kHz. This variation is much smaller than our level of sensitivity for resolved sideband Raman-
 transitions which, amongst other things, is set by the width of the AOM-drivers for AOM3 and AOM4 (∼ 20 kHz, see Chap. 8). According to the discussion of the axial motional modes in a harmonic potential given in Chap. 2, the center-of-mass mode oscillation frequency of two ions is expected to be equal to the axial oscillation frequency of a single ion. However, if the trap potential contains axial anharmonicities, this is not necessarily the case. To investigate this, a measurement of ωz vs. Uend-
 was performed with one and two 40Ca+ ions in the trap. To avoid repeated emptying/loading of the trap, measurements of ωz vs. Uend

9.1. Measuring the trap parameters 123
(a) (b)
Figure 9.5: (a) Measurement of ωz vs. Uend using voltage-modulation and intensity
modulation. Fits to the data yields ωz/2π = 180.54(5) kHz√Uend[V] − 0.265(12) (voltage-modulation, shown as solid curve) and ωz/2π = 180.55(4) kHz ×
√Uend[V] − 0.272(10) (intensity-modulation, not shown). (b) ωz vs. Uend for one and
two 40Ca+ ions. Fits to the data yields ωz/2π = 180.41(4) kHz√Uend[V] − 0.312(10)
(one ion, shown as solid curve) and ωz/2π = 179.98(5) kHz√Uend[V] − 0.301(11) (two ions, not shown).
was done for one ion first and then for two ions. The results are shown in Fig. 9.5(b)
and fits to the two data sets yield ωz/2π = 180.41(4) kHz√Uend[V] − 0.312(10) and
ωz/2π = 179.98(5) kHz√Uend[V] − 0.301(11) for one and two ions, respectively, showing a deviation between the front-factors of a few permille. In another experiment, where the axial oscillation frequency/center-of-mass mode frequency was measured for one to eight ions (see Fig. 9.6) by loading ions while keeping the trap parameters fixed, the measured trap frequencies were 437.8(1) kHz for the single ion and 437.7(1) kHz for two to eight ions, thus showing a much better agreement than for the resu-
lts in Fig. 9.5(b). The measurement with one to eight ions is expected to be the most accurate, since the trap parameters were held fixed. In any case, the frequency differences are much smaller than our resolution for resolved sideband Raman transitions. In conclusion, the axial trap frequencies behave as we expect, they are stable and predictable to better than our sensitivity for resolved sideband Raman transitions and we have measured axial trap frequencies above 1 MHz, which is important for -
future sideband cooling and quantum logic experiments.
9.1.4 Radial trap frequencies
The radial trap frequencies are important for sideband cooling of the radial motion. Due to the dynamical confinement in the radial plane, the dynamics of the radial motion is more complex than for the axial motion, and the radial trap frequencies depend on several independent variable parameters, q, a and az, with respect to which the trap should be characterized. The radial trap frequencies were measured by determing ωmax manually for the motion along the x-axis as well as the y-axis, using volt-
age-modulation to excite the ions. Although this method is identical to the one used for measuring axial trap frequencies, it is in practice more difficult to employ. It appears that when the modulation frequency is near-resonant with one of the radial motional modes, the oscillation am

124 Chapter 9 - Trap characterization and ion mass measurements
Figure 9.6: Pictures of one to eight ions on a string at identical trap parameters. Left: Unexcited ions. Right: The axial motion is excited. The width of the pictures corresponds to a distance of 75 μm. The pictures are produced from the average of the pixel values of 100 individual CCD-images recorded with 100 ms exposure time.
plitude depends very critically on the modulation force as well as the detuning and the power of the cooling lasers, meaning that the amplitude easily can become as large as shown by the rightmost picture in Fig. 9.7 or even larger than that, in which case the ion essentially is invisible on the CCD-images. The criticality of these parameters mainly has its origin in the fact that when the ion is excited, micromotion becomes very significant, which leads to large velocities and hence inefficient D-
oppler laser cooling. Since the motion is driven, the ion is never significantly slowed down by the Doppler cooling, which therefore remains inefficient [134]. For the same reason, excitation by intensity-modulation of the laser cooling light is problematic, which is the reason for measuring the radial trap frequencies using voltage-modulation. When the amplitude of the modulation voltage and the cooling laser parameters were adjusted such that the ions oscillation amplitude was reasonably control-
lable, we could as mentioned determine ωmax approximately within 1 kHz, which is around 1 permille of a typical radial frequency and sufficiently accurate for determining the relevant trap parameters to a good precision. The first measurements of radial trap frequencies were performed using the selfoscillating RF-supply operated approximately at 18 MHz. The results were quite unexpected, showing indications of what we now believe is a complex non-linear dynamics. At first we suspected, however, th-
at the self-oscillation principle of the RF-supply could be the cause of the strange results. This possibility was, however, ruled out by measurements using the fixed-frequency 18 MHz supply (supply number 1 in Chap. 8) which yielded similar results as for the self-oscillating supply. Further measurements using

9.1. Measuring the trap parameters 125
Figure 9.7: Different amplitudes of the radial motion of a single 40Ca+ ion around a frequency of 2420 kHz. On the leftmost picture the ion is unexcited. The height of the pictures corresponds to a distance of 175 μm. Note: The images do not to show a variation with respect to a specific parameter, they are only meant to illustrate the different, sometimes very large, amplitudes.
supplies number 2 and 3 (see Chap. 8) at the lower RF-frequencies of 11 MHz and 5.6 MHz yielded results, which are explainable by a model which extends the theory presented in Chap. 7. The results of a series of measurements at 11MHz RF-frequency and an explanation of the results are presented in the following. Subsequently, the results at 18 MHz are described and a qualitative explanation for the observations at this RF-frequency is given.
Measurements for ΩRF = 2π × 11.05 MHz
For the measurements obtained with the trap operated near an RF-frequency of 11 MHz, we first consider measurements of the radial trap frequencies ωx and ωy vs. the amplitude of the RF-voltage, URF . Instead of plotting ωx and ωy, we plot in Fig. 9.8 the
quantity (2/ΩRF )
√
ωx2 + ωy2 + ωz2, which according to the theory presented in Chap. 7
is equal to the q-parameter. For the model presented below, the plotted quantity is still equal to q. As seen from Fig. 9.8, q is proportional to URF as expected, however, the proportionality factor deviates significantly from the results of the numerical calculations 2. This deviation is probably due to a difference between the actual voltage on the trap electrodes and the RF-voltage at the output of the RF-supply, where the RF-voltage is measured. Such a difference could, e.g., occur due to the -
influence of stray capacitances and inductances. Additionally, there is roughly a 10% uncertainty on the calibration of the monitoring signal used for measuring the RF-voltage. From the measurements discussed in the following, we shall argue that a difference between the measured RF-voltage and the actual voltage most likely is present and introduce a recalibrated value of URF , which brings the measured values of q (Fig. 9.8) and the numerically calculated values in good agreement.
2Using the more accurate expression q = √[2 sin(πωx/ΩRF )/π]2 + [2 sin(πωy/ΩRF )/π]2 + (ωz/ΩRF )2 does not change this conclusion [135].

126 Chapter 9 - Trap characterization and ion mass measurements
Figure 9.8: q vs. URF , obtained from measurements of ωx and ωy as discussed in the text (solid squares). A fit (solid line) to the data yields q = 0.00219(1)URF . The four data points represented as circles have been obtained from the data in Figs. 9.9 and 9.10 as discussed in the text. A constant has been subtracted from the originally recorded values of URF to correct for a voltage offset on a ‘measure function’ on the digital oscilloscope which was used. The dashed line represents the expectat-
ion from the numerical calculations of the trapping potential, see Eq. (7.2.7).
The measurements to be considered are measurements of the radial trap frequencies versus Ua, at four different values of URF with constant ωz. The data are presented in Figs. 9.9 and 9.10 (the designation ω± and the curves are explained below). These results were at first surprising since the radial trap frequencies were expected to be equal when a − χaz = 0 [see Eqs. (7.1.13) and (7.1.14)], i.e., at a small negative value of Ua. Instead, we observe two branches of trap frequencies with a minimum -
frequency splitting of some tens of kHz. All data points are recorded with a modulation-voltage applied to the DC-electrodes numbered 4-5-6 in Fig. 8.3. For the upper branch, it was qualitatively observed that only a small modulation voltage was required to excite the radial motion at large positive values of Ua, while the required modulation voltage gradually became larger as Ua was decreased, until we eventually were unable to excite the radial motion. Similarly for the lower branch, a small mod-
ulation voltage was required at negative values of Ua and a large one was required at positive values of Ua. Near Ua = 0 V the radial motion could be excited by an approximately equally large modulation voltage for the two branches. With modulation on an RF-electrode (number 11 in Fig. 8.3) it was generally hard to excite the radial motion due to a strong damping of the input modulation voltage through the in-coupling circuit. It was checked that the points which are ‘missing’ at large positive (n-
egative) values of Ua on the lower (upper) branch could not be detected by applying modulation on an RF-electrode. The fact that we observe a splitting between the two branches, instead of a crossing, hints that the radial potential contains a term which couples the two radial modes. Such a term could for example be present due to misalignments of the trap electrodes or due to patch potentials.

9.1. Measuring the trap parameters 127
(a)
(b)
Figure 9.9: Radial trap frequencies vs. Ua at ΩRF /2π = 11.05 MHz and ωz/2π = 403 kHz. (a) URF = 79.5 V. (b) URF = 109 V.
Coupling term model To describe such effects, we assume that the radial potential contains a constant term of the form
Φc(x, y, t) = −Uc
xy 2Lr02
, (9.1.4)
which is the coupling term of the lowest possible order in x and y. Uc is a voltage describing the strength of the coupling term 3. The model will be named the ‘coupling term model’ or CT-model for short. In the following, the radial oscillation frequencies and principal axes of oscillation following from the addition of the coupling term are
3In Ref. [136] a coupling term due to the magnetic field in a combined linear Paul trap/Penning trap was considered.

128 Chapter 9 - Trap characterization and ion mass measurements
(a)
(b)
Figure 9.10: Same as Fig. 9.9, but with URF = 130 V (a) and URF = 185 V (b).
derived. The coupling term immediately gives rise to a coupled set of Mathieu equations:
∂2
∂τ2
(x
y
) =
[−a − az(1 − χ) + 2q cos(2τ ) qUc/URF qUc/URF a − az(1 + χ) − 2q cos(2τ )
] (x
y
)
. (9.1.5)
To solve them, we make the Ansatz that x(τ ) = x ̃(τ )[1 − q cos(2τ )/2] and y(τ ) = y ̃(τ )[1+q cos(2τ )/2] in analogy with Eqs. (7.1.5) and (7.1.6). Inserting these expressions in Eq. (9.1.5) and averaging over an RF-period, i.e., cos2(2τ ) is replaced by 1/2 and terms proportional to cos(2τ ) drop out, a set of coupled differential equations for the supposedly slowly varying functions x ̃(τ ) and y ̃(τ ) can be obtained:
∂2
∂τ2
(x ̃ y ̃
) =
[−a − az(1 − χ) − q2/2 qUc/URF qUc/URF a − az(1 + χ) − q2/2]
] (x ̃
y ̃
)
. (9.1.6)

9.1. Measuring the trap parameters 129
URF [V] URF,recal[V] q g χ Uc,recal [V]
79.5 105 0.17545(2) 0.00332(< 1) 0.257(2) 0.45 105 138 0.22982(2) 0.00336(< 1) 0.252(2) 0.43 130 172 0.28392(2) 0.00340(< 1) 0.235(3) 0.49 185 245 0.40573(2) 0.00356(< 1) 0.202(4) 0.46 Chap. 7: 0.00301 0.269
Table 9.1: Fitting parameters and derived values from the measurements of radial frequencies vs. Ua presented in Figs. 9.9 and 9.10. The bottom line is the predictions from Chap. 7.
The eigenvalues λ± of the matrix on the r.h.s. are
λ± = −
( q2
2 ± a′ + az
)
, (9.1.7)
where
a′ =√(a − χaz)2 + (qUc/URF )2, (9.1.8)
which corresponds to secular oscillation frequencies
ω± = 1
2
√
q2
2 ± a′ + az ΩRF (9.1.9)
of a harmonic motion along the principal axes given by the eigenvectors corresponding to the eigenvalues λ±. These principal axes will be discussed below. When Uc = 0, the eigenfrequencies ω+ and ω− reduce to ωx and ωy, respectively, as given by Eqs. (7.1.13) and (7.1.14). The curves in Figs. 9.9 and 9.10 are fits of the data points on the upper and lower branches to the expressions for ω+ and ω−, respectively, using q, χ, α = Uc/URF and g = a/Ua = 4Q/(mLr02Ω2
RF ) as fitting parameters in a common fit to the two branches. az is fixed by a direct measurement of ωz = 2π × 403 kHz and ΩRF = 2π × 11.05 MHz. Clearly, the data points are fitted very well by this model. The values found for q, χ and g are summarized in Table 9.1 together with the quantities URF,recal and Uc,recal discussed below. The fitted values of the constants g and χ are reasonably consistent at the two lowest q-values. At larger q-values, g increases and χ decreases, which probably can -
be ascribed to the fact that Eqs. (7.1.5) and (7.1.6), on which the Ansatz for x(τ ) and y(τ ) was based, only are valid for q, a 1. At low q-values, g and χ deviate roughly by 10% and 5%, respectively, from the numerical calculations in Chap. 7. For g, the deviation can essentially be explained by the fact that the real value of r0 is about 4% smaller than the value used in the numerical calculations, thus leading to a value of g which is about 8% larger than the numerically calculated value, sin-
ce g is proportional to r−2
0 . χ depends on z0 as well as r0. The deviation of about 5% between the measured and the numerically calculated value seems reasonable, since it is comparable to the deviation found for ωz/Uend (2%, z0-dependent deviation) and the deviation found for g (10%, r0-dependent deviation). Note also that the fitted value of χ would be affected by an offset in Ua.

130 Chapter 9 - Trap characterization and ion mass measurements
The values listed for q in Table 9.1 are plotted as circles in Fig. 9.8, which shows consistency with the q vs. URF data. Now, returning to the large discrepancy between the q vs. URF data and our expectations, we note that by definition of q and a, we have that g = a/Ua = 2q/URF . From the q vs. URF data (Fig. 9.8), we find 2q/URF = 0.00438, clearly inconsistent with the values of g in Table 9.1. To remove this inconsistency, recall first that a difference between the actual voltage on the electr-
odes and the measured voltage, URF , is likely. Furthermore, the CT-model fits the ω± vs. Ua data very well and yields values of the URF -independent parameters g and χ, which are in good agreement with the numerically calculated values, when we take the small differences between the simulated and the real trap dimensions into account. Therefore, we choose to believe in the value for g obtained from the ω± vs. Ua data (we take g = 0.00332, obtained at the lowest value of q in Table 9.1) and introd-
uce a recalibrated value, URF,recal = 1.32URF , for the RF-voltage, which fulfills g = 2q/URF,recal. Below, we shall check against other data if URF,recal is, or could be, the actual amplitude of the RF-voltage on the trap electrodes. We note that for the driver at 5.6 MHz, we find that a correction of about 10% of the RF-voltage is needed to obtain consistency between measurements of q vs. URF and ω± vs. Ua (a lower and an upper branch of radial trap frequencies are also observed in this case). I-
n the fits in Figs. 9.9 and 9.10, the coupling term strength Uc was fitted through the parameter α = Uc/URF , and hence we should also use recalibrated values Uc,recal = αURF,recal for the coupling strength, which are given in the rightmost column of Table 9.1. If the coupling term is due to patch potentials, the value of Uc,recal need not be constant, although we would expect this for the data in Figs. 9.9 and 9.10, since they were recorded successively on the same day. Indeed, the values listed -
in Table 9.1 are all close to a constant value of 0.45 V 4. To see if patch potentials could be a reasonable explanation for the coupling term, it is relevant to consider the patch potential (or contact potential [118]) arising when calcium is deposited on the molybdenum electrodes, because calcium is probably being deposited on the electrodes as discussed in Sec. 9.2 below. The patch potential is equal to the difference in the work function of calcium and molybdenum divided by the electron charge-
 [118], which equals ∼ 1.7 V [137]. Since this is only 3-4 times larger than Uc,recal, which describes the strength of the coupling term rather than the patch potential on an electrode, patch potentials could be a reasonable explanation for the presence of the coupling term.
Further measurements and checks of the CT-model Having determined all relevant trap parameters, we can check the recalibration of the RF-voltage as well as the CT-model against additional measurements. From now on, we will use the values g = 0.00332 and χ = 0.257 (lowest q-value in Table 9.1), the recalibrated RF-voltage URF,recal and assume Uc,recal = 0.45 V constant. We consider first measurements of ω± versus ωz with URF,recal = 172 V (q = gURF,recal/2 = 0.286) and a ≈ 0. The data are presented-
 in Fig. 9.11. Making a common fit of the data to ω± given by Eq. (9.1.9) with q as the only free parameter, the fits represented by the curves in Fig. 9.11 are obtained, yielding q = 0.28274(1). This value of q agrees with the expected q-value roughly within 1%, which is more than acceptable, taking the uncertainty of g and
4For a data set recorded at ΩRF /2π = 5.6 MHz, two weeks earlier than those considered here, a coupling voltage of 0.55 V was found.

9.1. Measuring the trap parameters 131
URF,recal into account. In Fig 9.11, slight deviations between the data points and the fit are seen at small and large values of ωz, which, however, also are present if all fitting parameters are free.
Figure 9.11: ω± vs. ωz at ΩRF /2π = 11.05 MHz, URF,recal = 172 V and a ≈ 0. A fit (solid curves) to Eq. (9.1.9) with these values and Uc,recal = 0.45 V fixed, yields q = 0.28274(1).
To provide a further check of the CT-model, we shall consider one last data set, representing measurements of the minimum splitting, ∆ω, between the two branches for different values of URF,recal. The splitting is found from measurements of ω± at a few values of Ua near a − χaz = 0 where the splitting is minimal, i.e., not over a large range as in Figs. 9.9 and 9.10. The measured minimum splittings are presented in Fig. 9.12 of which four of the data points are derived from the data in Figs. 9.9 a-
nd 9.10. The CT-model predicts a minimum splitting of
∆ω = ω+ − ω−
∣∣a−χaz=0 ≈ qUc,recal/URF,recal
√2q2 + 4az
ΩRF , (9.1.10)
when Uc,recal/URF,recal 1, which indeed is the case. The curve in Fig. 9.12 is plotted according to Eq. (9.1.10), with Uc,recal = 0.45 V, q/URF,recal = g/2 = 0.00166 and az derived from ωz = 2π × 403 kHz, and ΩRF = 2π × 11.05 MHz and shows a reasonable agreement with the data, thus giving further support to the CT-model. Finally, we shall discuss our observation that the modulation voltage required to excite the radial motion varies with Ua for the two branches. If there was no coupling term, we w-
ould have two motional modes with principal axis directed along the x-axis and the y-axis, i.e., from the trap center and towards the DC-electrodes and the RFelectrodes, respectively. For the coupling-term model, the principal axes are defined by eigenvectors v± corresponding to the eigenvalues λ± of the matrix on the r.h.s. of Eq. (9.1.6). A set of eigenvectors is
v+ =
(a′ + a − χaz −qUc/URF
)
and v− =
(a′ − a + χaz qUc/URF
)
, (9.1.11)

132 Chapter 9 - Trap characterization and ion mass measurements
Figure 9.12: Measured minimum splitting between the upper and lower branch of radial trap frequencies. ΩRF /2π = 11.05 MHz and ωz/2π = 403 kHz. The error bars represent an estimated uncertainty of 2 kHz on the measured splitting. The curve is plotted according to Eq. (9.1.10) using the parameters given in the text.
which in general are non-parallel to the x- and the y-axis. The angles from the x-axis to the eigenvectors v+ and v− are denoted by θ+ and θ−, respectively, and plotted in Fig. 9.13, showing that the eigenvectors rotate as a is varied. This explains the way the required modulation voltage varies with Ua for the two branches, since at large negative a-values, where v− (v+) is parallel (perpendicular) to the x-axis, the coupling to the corresponding radial mode is large (small) using modulation on t-
he DC-electrodes and therefore only a small (large) modulation voltage is needed to excite the mode. As the a-parameter is increased to large positive values, the eigenvectors complete a 90◦ rotation, thus decreasing (increasing) the coupling between the modulation force and the motional modes corresponding to the lower (upper) branch.
In practice this is very important for our sideband-cooling scheme. Since we want to cool both radial modes, they should be coupled to at least one of the Raman beams, i.e., a principal axis should not be perpendicular to the propagation directions of both Raman beams. In our setup this will, however, be the case near a − χaz = 0 for one of the modes and hence we need to apply a bias voltage Ua when doing sideband cooling.
Conclusion In conclusion, we have observed that the behaviour of the radial modes differs significantly from the predictions based on the theory presented in Chap. 7. By introducing a coupling term in the radial potential, which physically can be justified by patch potentials or small misalignments of the electrodes, the measurements can be explained very well. Within the CT-model, good agreement with the numerical calculations from Chap. 7 was found, although the RF-voltage had to be recalibrated-
 by a rather large (but qualitatively explainable) amount. The deviation from the standard theory from Chap. 7 underlines the importance of this experimental characterization.

9.1. Measuring the trap parameters 133
Figure 9.13: Angles between the x-axis and the principal axes given by the eigenvectors in Eq. (9.1.11). The range of the parameter 2(a − χaz)/gUc, over which the angles are plotted, corresponds roughly to Ua being in the experimentally relevant range [−10 V, 10 V]. Dotted lines indicate the asymptotic limits of 0◦ and ±90◦.
Measurements for ΩRF = 2π × 18.06 MHz
Measurements of the radial frequencies with the trap being operated at ΩRF /2π ≈ 18 MHz, either using the self-oscillating supply or fixed frequency supply number 1 (see Chap. 8), are performed in the same way as the measurements at 11 MHz RF-frequency. The results are, however, quite different. Instead of observing two distinct resonance frequencies for the radial motion, we observe two frequency bands within which the radial motion can be excited. To illustrate such a frequency band, we plot in -
Fig. 9.14 the amplitude V0 of the input modulation voltage (see Fig. 9.1), which is found to be required to excite the radial motion when the modulation frequency is varied across the considered frequency band. The band edges are quite sharp, which therefore easily can be identified within a few kHz. At, or near, each edge a ‘dip’ is observed, indicated by arrows, where only a relatively small modulation voltage is required to excite the radial motion and where the oscillation amplitude of the ion-
 easily becomes very large. Between these dips the radial motion can be excited at all frequencies using modulation voltages at a similar level, except between 1225 kHz and 1250 kHz where a somewhat larger modulation voltage is required to excite the radial motion. Such an increase in required modulation voltage near the center of a band has only been observed in cases where a ≈ 0. In Fig. 9.15(a), the results of a measurement of the radial frequencies vs. Ua is plotted. For each value of Ua, the -
points indicate the frequencies of the dips, which define the edges of the bands. These frequencies are named the edge frequencies in the following. The two branches are designated RF-electrode and DC-electrodes, respectively, meaning that for the branch designated RF-electrode (DC-electrodes), the voltage V0 required to excite the radial motion with modulation on the RF-electrode (DC-electrodes) was smaller than for the other branch, indicating that the principal axis corresponding to the branch -
named RF-electrode (DC-electrodes) to some extent is aligned with the axis from the trap center to the RF-electrode (DC-electrodes), i.e.,

134 Chapter 9 - Trap characterization and ion mass measurements
Figure 9.14: Input modulation voltage V0 (applied to DC-electrodes 4-5-6) required to excite the radial motion within one of the frequency bands described in the text. The data points have an uncertainty of ±1 V, except those at modulation frequencies between 1300 kHz and 1315 kHz (near the rightmost arrow), which have an uncertainty of ±0.1 V. Points at V0 = 10 V means that the radial motion could not be excited with the available modulation voltage. Note the increase in required modulation volta-
ge between 1225 kHz and 1250 kHz. The arrows indicate the ‘dips’ discussed in the text. The trap was operated with the self-oscillating 18 MHz RF-supply, URF = 260 V, ΩRF /2π = 18.06 MHz, ωz/2π = 457 kHz and a ≈ 0. Modulation on an RF-electrode yields a frequency band between 1100 kHz and 1375 kHz, also with an increase in required modulation voltage roughly between 1225 kHz and 1250 kHz.
the y-axis (x-axis). Near Ua = 0 V, the excitation strength was roughly independent of which set of electrodes the modulation was applied to, and here designations are given to fit the overall behaviour of the two branches. The explanation given in the following for the variation of the frequency bands with Ua, as well as with other parameters, falls in two parts. First, we consider only the center frequencies of the bands, i.e., the average values of the edge frequencies for each band, and show t-
hat they can be described in terms of the CT-model, which indicates that the center frequencies are the ‘true’ radial trap frequencies. Second, a possible explanation for the observation of frequency bands centered around a ‘true’ radial trap frequency will be given.
Center frequencies The center frequencies of the bands in Fig. 9.15(a) (crosses) was fitted to the expressions for ω± given in Eq. (9.1.9), with the lower (upper) branch in the CT-model describing the center frequencies of the DC(RF)-electrode branch for negative Ua and the RF(DC)-electrode branch for positive Ua. When Ua ≈ 0 V it is hard to tell if the data points belong to the upper or lower branch and therefore the points near a = 0 indicated by arrows in Fig. 9.15(a) and the neighbouring point-
s were not included in the fit. g, which determines the main variation of the radial frequencies with Ua, was kept fixed to g = 0.00332(11.05/18.06)2 = 0.00124, i.e., the

9.1. Measuring the trap parameters 135
(a)
(b)
Figure 9.15: (a) Radial frequencies vs. Ua measured at URF = 292 V, ΩRF /2π = 18.06 MHz and ωz/2π = 446 kHz. The designation RF(DC)-electrode(s) is explained in the text. The center of the bands (crosses) are fitted using Eq. (9.1.9) as explained in the text. (b) q vs. URF measured at ΩRF /2π = 18.06 MHz. Circles are plotted according to the coupling-term model. Solid squares are plotted according to Eq. (9.1.12) and fitted to a straight line (solid line). The dashed line represents the expectatio-
n from Eq. (7.2.7).
value derived from the measurements near 11 MHz RF-frequency, scaled by Ω−2
RF . ωz and ΩRF are also fixed, but q, χ and α are free parameters in the fit. The considered center frequencies are clearly well fitted by this model. The fit yields a value of q = 0.2216(2) (at URF = 292 V), which is consistent with measurements of q vs. URF presented in Fig. 9.15(b), which will be discussed below.
Looking very carefully at Fig. 9.15(a), it can be noted that for the four data points between the arrows, the average of the lower edge frequency of the RF-electrode band and the upper edge frequency of the DC-electrode band falls onto the lower branch of the fitted curves. Likewise, the average of the upper edge frequency of the RF-electrode band and the lower edge frequency of the DC-electrode band falls onto the upper branch.

136 Chapter 9 - Trap characterization and ion mass measurements
This mixing of the DC- and the RF-electrode band could indicate that each of these frequency pairs comprises the edge frequencies of a frequency band, where the principal axis of the corresponding radial motional mode has a component along the x-axis as well as the y-axis. This would be in accordance with the rotation of the principal axes predicted by the CT-model [see Eq. (9.1.11) and Fig. 9.13]. Carrying this pairing over to the data for which the DC-electrode band is shown in Fig. 9.14 5, we f-
ind that the lower and upper branch frequencies are approximately 1205 kHz and 1255 kHz, respectively. The small range of frequencies near the center of the band, where an increase in the required modulation voltage is observed, is roughly the same for the DC-electrode band and the RF-electrode band and falls in between the lower and the upper branch frequencies. We have not systematically recorded data as in Fig. 9.14, but on two other occasions 6 we have found a similar range, where the required-
 modulation voltage increases near the center of both the DC-electrode band and the RF-electrode band, and on both occasions the range fell in between the lower and the upper branch. A partial explanation for observing such ranges could be the following: According to the CT-model, the principal axes are at an angle of about 45◦ with respect to the x- and y-axis near a − χaz = 0. If a modulation voltage acting along the x-axis is applied, both radial motional modes can be excited. When the modulati-
on frequency ωmod fulfills ω− < ωmod < ω+, the modulation force is out of phase with the mode at frequency ω− and in phase with the mode at frequency ω+, which means that the resulting motion is perpendicular to the x-axis. In this situation it is apparently difficult to excite the motion, even though the principal axes of motion are non-perpendicular to the x-axis. Similar considerations hold for a modulation force along the y-axis. Measurements of the radial trap frequencies versus URF yields tw-
o bands at each value of URF from which the q-parameter can be extracted as shown in Fig. 9.15(b) and explained in the following. Since the measurements were performed near a = 0, it is once again hard to determine if the bands belong to the upper or lower branch of the CT-model. Instead we assume that the average of the center frequencies of the two bands (denoted ω) is equal to (ω+ + ω−)/2, such that we according to the CT-model
have q = (2/ΩRF )√2ω2 + ωz2, when a′/q2 1. Using this relation, q has been plotted versus URF in Fig. 9.15(b) (circles). For large q, where the CT-model is expected to be invalid, the points do not fall onto a straight line. This can be remedied by using the more accurate expression [135]
q =√[2 sin(πω+/ΩRF )/π]2 + [2 sin(πω−/ΩRF )/π]2 + (ωz/ΩRF )2
≈√2[2 sin(πω/ΩRF )/π]2 + (ωz/ΩRF )2, (9.1.12)
for which the corresponding points are plotted as solid squares in Fig. 9.15(b), showing that they fall nicely onto a straight line. The dashed line in Fig. 9.15(b) illustrates our expectation from the numerical calculations, which once again deviates significantly from the measured q-values, probably due to the same reasons as discussed above for the measurements near 11 MHz RF-frequency. Finally, for measurements of the radial trap frequencies vs. ωz, it is also found that the center frequency o-
f the RF- and DC-electrode bands are well described by the
5Note: The data in Fig. 9.14 and Fig. 9.15(a) are not directly comparable, since they are recorded at different RF- and endcap voltages. 6Where the trap actually was operated at ΩRF /2π = 14.56 MHz and ΩRF /2π = 19.47 MHz.

9.1. Measuring the trap parameters 137
CT-model. Thus, concerning the center frequencies of the bands, we can conclude that they are well described by the CT-model. A possible explanation for the observation of frequency bands, instead of distinct resonance frequencies is given in the following.
Frequency bands It is well-known that under certain circumstances the dynamics of single ions (or several ions) in Paul traps cannot be described as simply as we did in Chap. 7 or with the CT-model. For example, non-linear resonances and instabilities in anharmonic traps [138, 139] or quadrupole mass-filters [140] have been studied, and it is known that the presence of a laser cooling force can play an important role for the stability/instability of a trapped ion [135, 141, 142]. The latter takes -
us back to Eq. (9.1.1) for the driven damped harmonic oscillator, where we assumed that the damping force was linear in the ion velocity which, however, not necessarily is the case when we consider large oscillation amplitudes and/or take micromotion into account. In continuation of the present experiments, a theoretical study has been undertaken by Jens Lykke Sørensen [133], who models the radial motion of a single ion by a driven harmonic oscillator, taking micromotion and the full velocity depe-
ndence of the Doppler laser cooling force for a two-level ion into account. Under certain conditions it is predicted that the ions motion is bi-stable. For modulation frequencies near the harmonic oscillator resonance frequency and when the modulation force is below a certain level, there are three trajectories of motion which can be characterized as follows. #1: A small-amplitude trajectory, which roughly follows the predictions for a linear damping force. #2: A large-amplitude trajectory, which -
exists when the modulation frequency is within a certain frequency range centered around the resonance frequency. #3: A trajectory, where the amplitude approaches infinity when the modulation frequency approaches the resonance frequency, i.e., the ion will be lost from the trap. Trajectory #2 seems to explain our observations that the ion can be excited within a frequency band without being lost from the trap and that the center of the band could correspond to a normal radial trap frequency. At th-
e boundaries of the predicted band, a continuous transition from trajectory #2 to trajectory number #3 can take place, which explains the observed dips in required modulation voltage. At frequencies well within the predicted band, only a discontinuous transition to trajectory #3 can take place, which (most of the times!) are avoided in the experiment by adjusting the modulation voltage. The width of the predicted bands is at most around 50 kHz, while the experimentally observed bands typically are-
 hundreds of kHz wide, as it can be seen from Figs. 9.14 and 9.15(a). Although this discrepancy is yet to be resolved, a large part of our observations seems to be explained, at least qualitatively, when the velocity-dependence of the Doppler laser cooling force as well as micromotion is taken into account. The model is still being developed and we shall therefore not go into further details here. The above-mentioned non-linearities and instabilities in anharmonic trap potentials or the intricate -
internal dynamics of a three-level ion [141] may also have a role to play for a full theoretical explanation. Further experimental studies are needed to understand why we observe frequency bands when the trap is operated at 18 MHz RF-frequency and not at 11 MHz RFfrequency. So far, frequency bands have been observed with the trap being operated at RF-frequencies of 14.56 MHz and 19.47 MHz. A reasonable explanation for observing frequency bands at high RF-frequencies (≥ 14.56 MHz) and not at lower -
RF-frequencies (≤ 11.05 MHz) could be the larger ion velocities which are obtained at larger RF

138 Chapter 9 - Trap characterization and ion mass measurements
frequencies due to micromotion, since by taking the full velocity dependence of the Doppler laser cooling force (which is relevant for large velocities) and micromotion into account, trajectories of motion are predicted, which can be interpreted as giving rise to the observed frequency bands. If this explanation is correct, the frequency bands appear only as an effect of motionally exciting the ions. In this case, the good understanding of the measurements at 11 MHz shows that the properties of th-
e trap are well understood.
9.2 Micromotion
To conclude the work on characterization of the trap, we shall in this section briefly discuss micromotion, the problems it implies and how to observe and reduce micromotion. For a more detailed discussion, we refer to Ref. [134]. When the RF-field used for confinement in the radial plane has a non-zero amplitude at the position of an ion, micromotion at the RF-frequency ΩRF will be superposed on the ions secular motion. For a perfectly symmetric linear Paul trap, there is no RF-field on the trap -
axis, and hence for an ion-string with equilibrium position on the trap axis, micromotion only occurs as a result of the secular motion [see Eqs. (7.1.5) and (7.1.6)], which for well-localized laser-cooled ions has a small amplitude. In reality there are, however, other reasons for micromotion to be present. For example: (i) If the trap is (slightly) asymmetric there need not be a straight line with zero RF-field and there can even be micromotion along the trap axis. (ii) Due to unwanted DC electr-
ic fields, the equilibrium position of an ion-string is not necessarily on a line with zero RF-field (if such a line exists at all). (iii) A phase difference between the RF-voltages on two diagonally opposite electrodes will lead to micromotion [134]. A phase difference can, e.g., occur if the wires from the RF-supply to the electrodes are of different length 7 or if the impedance of the electrodes is different. Micromotion due to (iii) can to a small extent be compensated using the adjustable cap-
acitors (see Fig. 8.2). The effects of (i) and (ii) can at least partly be compensated by adjusting the equilibrium position of the ions to a position where the amplitude of the RF-field is minimal. This is normally done by adjusting the DC adjustment-voltages (controls #5 and #6 in Table 8.1) such that the equilibrium position of the ions does not change when the strength of the radially confining potential is varied. Unfortunately, this adjustment cannot be done once and for all; readjustments a-
re needed from time to time because of changing patch potentials. Since patch potentials also were used as a common explanation for many effects in the previous section, it should be pointed out that we believe we do see effects of changing patch potentials. The patch potentials are due to calcium being deposited on the electrodes, and changes can be observed as a change in the equilibrium position of the ions, when the oven has been on and the oven shutter open for a while (such electrode contami-
nation was also reported in Refs. [105, 143]). Mostly, it is just a minor change, but a few times where the oven shutter by mistake was left open for an extended period of time, it was subsequently hard to trap ions. By leaving the trap alone for
7For the present trap, the difference is below 1 permille of the RF-wavelength for RF-frequencies up to 20 MHz, and hence micromotion due to a phase difference is reduced by a similar factor (see Ref. [134]).

9.3. Ion mass measurements 139
1/2–1 hour (a shorter period may be sufficient), ions could normally be trapped again, perhaps due to some redistribution of the patch potentials. The main unwanted effect of micromotion is a modification of the absorption spectrum of an ion 8. In Chap. 2, we considered the absorption spectrum for an ion at rest at the position r interacting with a travelling-wave electric field. In the presence of micromotion with amplitude A, in a direction given by a unit vector rˆm in the radial plane, r shoul-
d be replaced by r + A cos(ΩRF t)rˆm in Eq. (2.1.4), assuming for simplicity that the micromotion is in phase with the RF-field. In this case the electric field becomes [134]
E(r, t) = E0 ˆ
∑ ∞
n=−∞
Jn(Ak · rˆm) cos[k · r − (ωL − nΩRF )t + φ + nπ/2], (9.2.1)
where Jn is the Bessel-function of n’th order. This means that the ion ‘sees’ a laser with carrier frequency ωL and sidebands at integer multiples of the RF-frequency above and below the carrier frequency. For Doppler cooling in 40Ca+, where ΩRF Γ1/2 in our case, this leads to a broadening of the 2S1/2– 2P1/2 transition (with some structure) and a decrease of the carrier strength due to the factor J0(Ak · rˆm). For the Raman transition, where ΩRF is larger than the effective linewidth of the trans-
ition, distinguishable sidebands will occur [134]. For Doppler cooling, micromotion gives rise to a modulation of the ions velocity and hence of the Doppler cooling force [see Eq. (3.1.2)] as well as the amount of fluorescence light emitted by the ion. Micromotion can be detected by measuring the variation of the fluorescence level with the RF-phase, which can be accomplished by collecting fluorescence light only in time windows of width ∆t 1/ΩRF (by gating the imageintensifier), phase-locked to t-
he RF-voltage, and varying the relative phase between the time windows and the RF-voltage. More details are given below, where essentially the same technique was used for the mass measurements. We have done some very preliminary experiments looking for axial micromotion, which was observed and reduced to some extent. After reduction, the fluorescence signal was characterized by a constant level, overlayed with a sinusoidal variation at the RF-frequency, with amplitude 3% of the constant fluorescen-
ce level, which translates into a maximal Doppler-shift of 0.6 MHz ( 3% of Γ1/2/2π) [134]. This may not be critical for STIRAP, but in order to demonstrate sideband cooling it is probably necessary to reduce axial as well as radial micromotion below this level.
9.3 Ion mass measurements
The work on mass measurements presented in this section is a spin-off from the trap characterization measurements. It is motivated by an ongoing research project, which aims at studying laser cooling of the rotational degrees of freedom of sympathetically cooled molecular ions [144] as well as studying chemical reactions with laser cooled or sympathetically cooled ions [145][II, V]. For these studies, identification of a sympathetically cooled ion by a precise and non-destructive mass measurement -
will be a valuable tool. To demonstrate the usefulness of this tool, there are two natural goals, which require different levels of precision to achieve. The first goal is to discriminate
8The effects of micromotion can also be exploited for entanglement of two trapped ions [16].

140 Chapter 9 - Trap characterization and ion mass measurements
between ions with different atomic masses, which only requires a precision better than one percent or so. The second goal is to discriminate between ions which have the same number of nucleons, but differ in mass due to a difference in nuclear binding energy, e.g., 25Mg+ and 24MgH+, for which the relative mass difference is 2.8 · 10−4 [146]. MgH+ is relevant for laser cooling of the rotational degrees of freedom of molecules [144].
9.3.1 Theory
In Chap. 7 we saw that the axial trap frequency of an ion is proportional to the square root of its charge-to-mass ratio [see Eq. (7.1.9)]. Thus, precise measurements of the axial trap frequencies for two different ion species, trapped at identical trap parameters, immediately yields a precise relative measurement of their charge-to-mass ratio or, specifying to singly-charged ions in the following, of their relative mass. The technique for measuring axial trap frequencies, which was demonstrated a-
bove, requires a laser-cooled ion species. Since only a few ion species can be Doppler laser-cooled as simply as, e.g., 40Ca+, it seems at first sight not to be a very general method. However, by using one laser-cooled ion and one other ion, which is sympathetically cooled by the laser-cooled ion [94], the method can be applied to all ions, including molecular ions, which can be trapped simultaneously with the laser-cooled ion [145]. The pictures in Fig. 9.16 show two 40Ca+ ions and a single 40Ca+-
 ion trapped together with a sympathetically cooled ion. Although the sympathetically cooled ion cannot be seen in the bottom picture, since it is not Doppler laser-cooled, it is nevertheless certain that there are two and only two singly-charged ions in the trap, since otherwise the equilibrium position of the 40Ca+ ion would have been different from the equilibrium positions of the two 40Ca+ ions in the upper picture. The mass of the sympathetically cooled ion can be deduced from a measurement o-
f the mass-dependent trap oscillation frequencies for both two-ion strings, with the measured trap frequency for the 40Ca+–40Ca+ two-ion string serving as a reference.
Figure 9.16: Top: Two Doppler laser-cooled 40Ca+ ions. Bottom: A single Doppler laser-cooled 40Ca+ ion trapped together with a sympathetically cooled ion (42Ca+).
For two identical ions, we know from Sec. 2.2.2 that there are two axial eigenmodes at
oscillation frequencies ωz and √3ωz, respectively, where ωz is the oscillation frequency for a single ion. The mode frequencies for two ions with a different mass are derived in the following, where we consider the case of one laser-cooled and one sympathetically cooled ion, and therefore take into account that the laser-cooled ion can be subject to a net light-pressure force. We consider two singly-charged ions, Ion 1 and Ion 2, with masses m1 and m2 and position coordinates z1 and z2 (z2 > 0 > z-
1), respectively,

9.3. Ion mass measurements 141
confined in the axial harmonic potential of a linear Paul trap. Ion 1 is assumed to be subject to a constant light pressure force, Flight, which is positive for a laser beam propagating in the direction of positive z. The position-dependent part of the potential energy is
U (z1, z2) = 1
2 m1ω2
1z2
1+1
2 m2ω2
2z2
2 + e2
4πε0(z2 − z1) − Flightz1, (9.3.1)
where ωi (i = 1, 2) is the trap frequency for a single trapped ion with mass mi. Since the axial trap potential is independent of the ion masses, we have that
ω12 ω22
= m2
m1
≡ μ. (9.3.2)
The presence of the light-force gives rise to a change in equilibrium positions as compared to the situation in Sec. 2.2.2. Writing the equilibrium distance as ∆z + δz, where
∆z ≡
( e2
2πε0m1ω12
)1/3
(9.3.3)
is the equilibrium distance in the absence of the light-force, and assuming δz/∆z 1, we find to first order in δz/∆z that the new equilibrium positions are
z1,eq = − ∆z/2 − 2δz and z2,eq = ∆z/2 − δz, (9.3.4)
where
δz = − Flight
3m1ω12
. (9.3.5)
In the following we will continue keeping only terms of first order in δz/∆z and justify below that δz/∆z 1. Following Refs. [25, 91], we write zi = zi,eq + qi (i = 1, 2), where qi is the deviation from the equilibrium position zi,eq. For sufficiently small qi, the Lagrangian for the coupled motion of the ions can be written as
L =1
2 m1q ̇2
1+1
2 m2q ̇2
2−1
2 m1ω2
1
∑2
m,n=1
qmqnAmn, (9.3.6)
where
Amn = 1
m1ω12
∂2U ∂zm∂zn
(z1,eq, z2,eq). (9.3.7)
The coefficients Amn are (in matrix form)
A=
[ 2 − 3δz/∆z −(1 − 3δz/∆z) −(1 − 3δz/∆z) (2 − 3δz/∆z)
]
. (9.3.8)
Introducing normalized coordinates q ̃1 = q1 and q ̃2 = q2/√μ, the Lagrangian can be rewritten as follows
L = m1
2
(
q ̇ ̃2
1 + q ̇ ̃2
2 − ω2
1
∑2
m,n=1
q ̃mq ̃nA ̃mn
)
, (9.3.9)

142 Chapter 9 - Trap characterization and ion mass measurements
where
A ̃ =
[ 2 − 3δz/∆z −(1 − 3δz/∆z)/√μ
−(1 − 3δz/∆z)/√μ (2 − 3δz/∆z)/μ
]
. (9.3.10)
The eigenvalues λ ̃± of A ̃ are
λ ̃± =
(
1+ 1
μ
)(
1 − 3δz
2∆z
) ±
√
1− 1
μ+ 1
μ2 − 3 δz
∆z (1 + 1
μ2 )
≈1 + 1
μ±
√
1− 1
μ+ 1
μ2 − 3
2
δz ∆z
(
1+ 1
μ ± 1 + 1/μ2
√1 − 1/μ + 1/μ2
)
, (9.3.11)
which yields the new motional mode frequencies ωCOM =
√
λ ̃−ω1 and ωbr =
√
λ ̃+ω1, where ωCOM and ωbr are equal to the center-of-mass mode frequency ωz and the breath
ing mode frequency √3ωz, respectively, in the limit where δz = 0 and μ = 1. The δz-dependent shift of the mode frequencies, which is due to the light-force, is in the following called the light-force shift. To estimate its magnitude, we note that for the 2S1/2– 2P1/2 transition in 40Ca+, the light-force is at most ħk1/2Γ1/2/2 (see Sec. 3.1), which implies that
δz
∆z < ħk1/2Γ1/2
( π0
108e2m21ω14
)1/3
= 5.3 × 10−2 (9.3.12)
for m1 = 40 AMU and ω1/2π = 100 kHz. This justifies the assumption δz/∆z 1. In practice δz/∆z can be made smaller than this limit by driving the 2S1/2– 2P1/2 transition below saturation and by using two counter-propagating beams to reduce the net light-force. The relative mass obtained from the light-force independent term in Eq. (9.3.11) is
μ = 1 − 2(λ ̃± − 1)
1 − (λ ̃± − 1)2 . (9.3.13)
For the center-of-mass mode [inserting λ ̃− in Eq. (9.3.13)], it is a very good approximation to neglect the light-force shift, since the light-force dependent term in Eq. (9.3.11) is proportional to
1+ 1
μ − 1 + 1/μ2
√1 − 1/μ + 1/μ2 , (9.3.14)
which, e.g., for μ = 1.1 equals 2.1 × 10−3. Thus, for mass measurements which require a precision on the percent level (relevant for discriminating between ions with different atomic masses), we can, at least for the center-of-mass mode, safely neglect the lightforce shift. However, if the mode frequency, ωCOM , is determined as the modulation frequency where the amplitude of the excited motion is maximal (ωmax), the measured frequency will deviate from ωCOM by an amount which depends on the laser-
 cooling force through γ. This γ-dependent shift of the mode frequency is normally negligible on the 10−2 level and hence the relatively simple technique used for the trap characterization

9.3. Ion mass measurements 143
measurements, where ωmax is determined manually, is sufficient to achieve the goal of discriminating between ions with a different atomic mass. To achieve the goal of discriminating between ions with the same nucleon number but with different nuclear binding energies, which requires measuring relative mass differences at about the 10−4 level, we have to avoid the γ-dependent shift and in general also to take the light-force shift into account. Noting that the sign of the light-force shift depends -
on the sign of Flight or, equivalently, the position of the sympathetically cooled ion with respect to the laser cooled ion (left or right in Fig. 9.16, bottom), the light-force shift can be cancelled to first order by taking the average of two mode frequencies measured for the two possible relative positions of the two ions (if the net light-force is constant). To account for the γ-dependent shift, one might consider correcting ωmax, which, however, is hard to do precisely. Instead, the γ-depende-
nt shift of the measured mode-frequency can be avoided by measuring the relative phase φ between the modulation force and the ion motion versus modulation frequency. A technique for doing this is described for one ion in the following and generalized to two ions below. By rewriting the solution in Eq. (9.1.2) as
z0(ωmod) cos(ωmodt + φ) = z0(ωmod)[cos(ωmodt) cos(φ) − sin(ωmodt) sin(φ)], (9.3.15)
it is clear that the motion of a single ion is composed of a component in phase with the driving force (the cosine term) and an out-of-phase component (the sine term). The amplitudes z0(ωmod) cos(φ) and z0(ωmod) sin(φ) of the two components are plotted in Fig. 9.17 for typical values of ωz/2π = 100 kHz and γ/2π = 200 Hz, using Eq. (9.1.2) and [132]
cos(φ) = ωz2 − ω2
mod
√(ω2
mod − ωz2)2 + γ2ω2
mod
(9.3.16)
and
sin(φ) = − γωmod
√(ω2
mod − ωz2)2 + γ2ω2
mod
. (9.3.17)
Since the amplitude of the in-phase component is zero at ωmod = ωz, a measurement of this component would enable a determination of ωz, which is independent of γ, and in addition relatively precise since the zero-crossing is sharp (for small γ). To see how the in-phase component can be measured, consider the projected signal function SP (ωmod, z) for a single ion obtained from a single CCD-image recorded during an exposure time Texp at a constant modulation frequency ωmod. In a small time interval-
 dt around time t, the projected collected signal dSP is
dSP (ωmod, z, t) =dtS′
P f [zion(ωmod, t)], (9.3.18)
where S′P is a constant and the function f describes the shape of the projected signal from an ion at rest at the position zion(ωmod, t). We will assume a Gaussian signal distri
bution having a characteristic width σ [σ = F W HM/(2√2 ln 2) = 2.5 μm in Fig. 9.2(b)], i.e.,
f [zion(ωmod, t)] =e−[z−zion(ωmod,t)]2/2σ2 . (9.3.19)

144 Chapter 9 - Trap characterization and ion mass measurements
Figure 9.17: The amplitudes z0(ωmod) cos(φ) and z0(ωmod) sin(φ) of the two components in Eq. (9.3.15). ωz/2π = 100 kHz and γ/2π = 200 Hz.
Note that f is periodic with the period of the modulation force, 2π/ωmod, which we will assume to be much smaller than Texp. Now, assume that fluorescence light only reaches the CCD-chip in time windows of width ∆t, centered around all times t within the exposure time where ωmodt = n · 2π + φ0, where n is an integer and φ0 is a constant phase. In this case, the integrated signal for a single frame is
SP (ωmod, z) = S′
P
∫ Texp
0
dtf [zion(ωmod, t)] × (9.3.20)
N ∑
n=1
Θ[t − (n · 2π/ωmod + φ0/ωmod − ∆t/2)] × Θ[n · 2π/ωmod + φ0/ωmod + ∆t/2 − t],
where Θ is the Heaviside step-function, the product of step-functions defines a timewindow and N ≈ ωmodTexp/2π 1 is the number of time windows (the number of full modulation periods) within Texp. For ∆t 2π/ωmod, we find
SP (ωmod, z) =S′
P Texp
ωmod∆t
2π f [zion(ωmod, φ0/ωmod)] (9.3.21)
=S′
P Texp
ωmod∆t
2π e−[z−z0(ωmod) cos(φ0+φ)]2/(2σ2),
i.e., a Gaussian distribution centered at the position
z0(ωmod) cos(φ0 + φ) = z0(ωmod)[cos(φ0) cos(φ) − sin(φ0) sin(φ)]. (9.3.22)
Thus, by choosing cos(φ0) = 1, the amplitude z0(ωmod) cos(φ) of the in-phase component can be selected. By recording an image sequence while scanning ωmod slowly enough that it can be considered a continuous variable, the variation of the amplitude of the in-phase component with modulation frequency can be measured. For two 40Ca+ ions, both emitting fluorescence light, the projected signal function is a sum of two functions of the form given in Eq. (9.3.21).

9.3. Ion mass measurements 145
For two identical ions in the center-of-mass mode, the phase φ is the same as for a single ion. For two ions with a different mass, where only one of the ions is laser cooled, the relative phase, φ1, between the laser cooled ion and the modulation force is given by a more complicated expression than φ (see derivation in App. A.3). Fortunately, cos(φ1) = 0 is fulfilled at ωmod = ωCOM (and ωmod = ωbr) such that the approach described above also is valid for two different ions.
9.3.2 Experiment
The experiment presented here demonstrates the phase-sensitive technique described above, showing that the frequency where the amplitude of the in-phase component of motion is zero can be determined with a relative statistical uncertainty down to ∼ 2 · 10−5. For a demonstration of relative mass measurements on the 10−4 level or better, it does, however, still remain to take care of the light-force shift and other systematic errors, and in that sense the present experiment is only preliminary. The -
experiment was performed using two ions as in the situation described theoretically above. The Doppler laser-cooled ions are 40Ca+-ions and the sympathetically cooled ion is a singly-charged calcium ion, ACa+, with nucleon number A = 40. Thus, rather than trying to measure small mass differences, we use a calcium isotope as a test mass. The ACa+ ion is unaffected by the cooling lasers for the 40Ca+ ion due to the isotopeshifts of the cooling transitions. The axial motion was excited by intensity-m-
odulation, since it naturally selects the in-phase component (strobe light effect).
(a) (b)
Figure 9.18: Experimental setup for mass measurements. (a) Ion trap, lasers and imaging system. M: mirror, DM: dichroic mirror, PBS: polarizing beamsplitter, λ/2: half-wave plate, Pol.: polarizer. The EOM and the polarizer are used for intensity modulation as described in Sec. 9.1.1. (b) Schematic overview of the setup for recording images while synchronously scanning the modulation frequency. Further details are given in the text.
The experimental setup is shown in Fig. 9.18. For this experiment, a linear Paul trap which is larger than the one presented in Chap. 7 was used, since it is less sensitive to patch potentials. This larger trap consists of four cylindrical electrodes (gold-coated stainless steel rods) arranged in a quadrupole configuration, where two diagonally op

146 Chapter 9 - Trap characterization and ion mass measurements
posite rods are separated by 7.00 mm. The rods are 8.00 mm in diameter, and each rod is sectioned into three parts, where the center piece is 5.40 mm long and the two end-pieces are 20.00 mm long. An RF-voltage is applied to two diagonally opposite rods and the same RF-voltage with the opposite phase is applied to the other two rods. The peak-peak amplitude of the RF-voltage was typically 500 V and the frequency was 3.894 MHz, which results in a radial trap frequency of ωr ≈ 2π × 450 kHz. The axia-
lly confining endcap voltage applied to the eight end-electrode pieces was chosen to about 4 V, yielding an axial trap frequency of ωz ≈ 2π×130 kHz for a Ca+ ion. Additional DCvoltages can be applied to all twelve electrode pieces for adjustment of the equilibrium position of the ions. Otherwise, the imaging system is identical to the one described in Chap. 8, the vacuum chamber setup is equivalent to the one described in Chap. 8 and the laser sources are the same. Two 40Ca+ ions was loaded into t-
he trap using the isotope-selective photoionization technique described in Chap. 8. A 40Ca+ ion and a ACa+ ion was ‘loaded’ from two 40Ca+ ions by keeping the oven shutter open until one of the 40Ca+ ions was exchanged with a ACa+ ion by a charge transfer process of the type [II,IV]
40Ca+ + ACa −→ 40Ca + ACa+, (9.3.23)
after which the oven shutter was closed. Laser cooling was done as in the trap characterization experiments described in Sec. 9.1, using two blue cooling beams counterpropagating parallel to the trap axis, one blue cooling beam propagating perpendicular to the trap axis and a red cooling beam propagating parallel to the trap axis. One of the blue cooling beams propagating along the trap axis was intensity modulated, such that it was ‘on’ for a time ∆tlight and ‘off’ (extinction to < 1% of the ‘on’-
 intensity level) for the rest of a modulation period of duration 2π/ωmod. The modulation frequency ωmod was defined by the frequency of a sinusoidal signal from the Thurlby Thandar Instruments (TTi ) waveform generator mentioned in Chap. 8 [see Fig. 9.18(b)]. The modulation frequency could be scanned across a chosen frequencyinterval of width ∆ωmod in a time Tscan. Although the in-phase component of the motion of the ions naturally is selected using intensity-modulation, fluorescence light can st-
ill be seen during the ‘off’-periods, due to the unmodulated blue cooling beams. To exclude this light, the image-intensifier was gated at the modulation frequency, being open in a time window of width ∆t. This time window was overlapped by the ‘on’periods of the intensity-modulated cooling beam (∆tlight > ∆t) using a variable delay of the trigger-pulse for the image-intensifier [see Fig. 9.18(b)]. To ensure a well-defined correspondence between picture number and modulation frequency, a frequency-
-scan and recording of CCD-images was triggered by the same pulse. In recording an image sequence for obtaining the projected signal function SP (ωmod, z), there are three important parameters: The amount of fluorescence collected per CCDimage (∼ S′P Texpωmod∆t/2π), the frequency resolution (frequency/image) and the scan time Tscan. ∆t was chosen as ∆t = 1.1 μs (with ∆tlight = 1.3 μs) for obtaining the largest possible signal, while still being able to observe the in-phase component, i.e., fulfill-
ing the condition ∆t 2π/ωmod ≈ 2π/ωz ≈ 7.7 μs. Having fixed ωmod∆t/2π, the exposure time of the CCD-chip, Texp, was set between 100 ms and 150 ms. The exposure time and the read-out time of the CCD-chip defines the so-called frame-rate νframe, at which images are recorded, which is constant and ranged between 4.79 Hz and 9.20 Hz. The number of images recorded during a scan, Nimage, was set as a tradeoff between having a high frequency resolution (∆ωmod/Nimage) and a low scan time

9.3. Ion mass measurements 147
(Nimage/νframe). The upper limit of the scan time is in practice set by the fact that the ions change places from time to time, either as a result of the motional excitation or due to collisions with background gas atoms or molecules. For this preliminary experiment, laser stability was not a problem on the timescale of a scan, however, to cancel the firstorder light-force shift by averaging over measurements for the two different positions of the ions, laser stability is important and may be a pr-
actical limit to the scan time. In the present experiment, the frequency resolution ranged between 16 Hz/image and 2 Hz/image, using Nimage = 1024, ∆ωmod = 2 kHz and Tscan = 163 s for the highest resolution scans. Having recorded a sequence of images and projecting the pixel values onto the zaxis, a projected signal function was obtained. Examples are shown in Fig. 9.19 for a 40Ca+–40Ca+ and a 40Ca+–42Ca+ two-ion string. The center-of-mass mode resonance
(a)
(b)
Figure 9.19: (a) Contour plot of the projected signal function for a scan across the centerof-mass mode resonance of a 40Ca+–40Ca+ two-ion string. The resonance frequency is 132203 ± 2 Hz. The frequency resolution is 2 Hz/image. (b) Same as (a), but for a 40Ca+–42Ca+ two-ion string. The resonance frequency is 130572±13 Hz. The frequency resolution is 8 Hz/image.

148 Chapter 9 - Trap characterization and ion mass measurements
Figure 9.20: Measured center-of-mass mode frequencies at identical trap parameters for a 40Ca+–40Ca+, a 40Ca+–42Ca+ and a 40Ca+–44Ca+ two-ion string. The average frequencies indicated by the dashed lines are 132218±7 Hz, 130599±7 Hz and 128963.5± 1.5 Hz, respectively.
frequencies of 132203 ± 2 Hz and 130572 ± 13 Hz for the 40Ca+–40Ca+ and the 40Ca+42Ca+ two-ion string, respectively, are found from a fit to a function of the same form as Eq. (9.3.21) (or a sum of two such functions) with appropriate extra fitting parameters to account for a constant background signal and the equilibrium position(s) of the ion(s) 9. The resonance frequencies can be determined with a relative statistical uncertainty below 10−4, showing that with the phase-sensitive technique we ca-
n resolve relative mass differences at the level of interest (e.g., for discriminating between 25Mg+ and 24MgH+). This is the main result of this section. The actual resonance frequencies are subject to some systematic errors, which will be discussed below. Several scans of the type shown in Fig. 9.19 have been recorded, also for a 40Ca+–44Ca+ two-ion string. The resonance frequencies found from all the scans are plotted in Fig. 9.20. Generally, the reproducibility is good, however, there are some-
 apparently systematic jumps, particularly for the 40Ca+–42Ca+ series.
From the average center-of-mass mode frequencies and Eq. (9.3.13), the measured relative mass μA/40,meas between a ACa+ ion (A = 42, 44) and a 40Ca+ ion can be extracted, yielding μ42/40,meas = 1.0493(3) and μ44/40,meas = 1.0998(2). This can be compared to the tabulated values [146] 10 of μ42/40,tab = 1.049934 and μ44/40,tab =
1.099899, which yields a relative deviation of 6 · 10−4 and 4 · 10−5, respectively. Due to the systematic errors of the order of 10−4 discussed below, these deviations should be taken with a grain of salt. On the other hand it is promising, that neither of the results shows a deviation very much larger than 10−4.
9Strictly speaking, the expression for cos(φ1) given in App. A.3 should be used for fitting of data for a 40Ca+–ACa+ two-ion string. 10Electron masses are taken into account, but electron binding energies can be neglected for Ca+ at the 10−4 level of precision.

9.3. Ion mass measurements 149
Systematic errors
A number of systematic errors can originate from the correspondence between picture number and modulation frequency. Using a continuous scan as above, the framerate needs to be constant and precisely known. To ensure this, more care should be taken than in this preliminary experiment. The frame-rate was only known to three digits precision (this can easily be improved), which gives rise to a systematical uncertainty roughly equal to the relative uncertainty of the frame-rate times ∆ωmod/2, which a-
mounts to ∼ 5 Hz, or ∼ 5 · 10−5 times the resonance frequency. Furthermore, the frame-rate may be affected if the computer starts running other processes than recording images. For the 40Ca+–42Ca+ two-ion string, we note that the measured frequencies shown in Fig. 9.20 roughly fall in two groups having a slight frequency difference. The higher lying frequencies were obtained at a low resolution of 16 Hz/image, while the last four frequencies in this series were recorded at a resolution of 8 Hz/ima-
ge. Although a change of resolution should not shift the measured resonance frequency, there seems nevertheless to be a correlation, which could indicate some timing problems. Using the average of the last four points in the 40Ca+–42Ca+ series to extract μ42/40,meas, the
relative deviation from the tabulated value is in fact only 1.6 · 10−4. On the other hand, the frequencies for the 40Ca+–44Ca+ two-ion string, which yields a good agreement with the tabulated value, were also recorded at a resolution of 16 Hz/image. The reference 40Ca+–40Ca+ frequencies were recorded with a resolution of 2-8 Hz/image. The safe way of avoiding all these possible errors would be to record one image at a fixed modulation frequency, step the modulation frequency, record another image -
and so on. This is not an immediate option with the TTi waveform generator, but with some programming it can be done. Another systematic error is the light-force shift. In the experiment, the net lightpressure forces of the counter-propagating blue cooling beams were balanced to some extent, in order to control the amplitude of the motion of the excited ions, which means that δz/∆z is somewhat lower than the limit given by Eq. (9.3.12). Together with the reduction of the light-force shift for the -
center-of-mass mode [see Eq. (9.3.14)], this means that the relative shift is below 10−4. We were not able to see any systematic dependence on the position of the sympathetically cooled ion, which indicates that the light-force shift indeed is small. Since the blue cooling laser was not intensity-stabilized in this experiment, the light-force shift was not investigated any further. Finally, in a more precise experiment, the expression for cos(φ1) given in App. A.3 should be used for fitting the pr-
ojected signal function for a 40Ca+–ACa+ two-ion string (A = 40).
Conclusion
In conclusion, we have demonstrated that with the phase-sensitive technique it is possible to resolve relative mass differences at the level of 10−4. By addressing the systematic errors discussed above, it should be possible to measure relative mass differences at this level, which in most cases is sufficient to discriminate between ions with the same number of nucleons, only having a different mass due to their different nuclear binding energies, e.g., 25Mg+ and 24MgH+.

150 Chapter 9 - Trap characterization and ion mass measurements

151
Chapter 10
Shelving in the metastable
3d 2D5/2 state
The internal state detection scheme described in Chap. 4 relies on state-selectively shelving the optically active electron in the 2D5/2 state. Subsequent collection of fluorescence light determines if the electron has been shelved (‘non-fluorescing’ ion) or if it is cycling within the 2S1/2– 2P1/2– 2D3/2 family of states (‘fluorescing’ ion). To demonstrate shelving prior to any STIRAP experiments, and to do a realistic test of our ability to make an unequivocal distinction between non-fluorescing-
 and fluorescing ions, we have performed shelving, as described in more detail below, by exciting ions from the 2D3/2 state to the 2P3/2 state, from where the ions can spontaneously decay to the 2D5/2 state. A clear distinction between non-fluorescing and fluorescing ions could indeed be made, which has enabled a measurement of the lifetime of the (metastable) 2D5/2 state. The lifetime experiment, which also contains a demonstration of the shelving technique, is presented in Sec. 10.1. A discussio-
n of the relevance of the lifetime experiment for the internal state detection scheme is given in Sec. 10.2, together with a short account of some further progress towards the first STIRAP experiments. The work concerning the lifetime measurement has been published in Ref.[III], to which Sec. 10.1 is closely linked.
10.1 Lifetime measurement of the 3d 2D5/2 state
Apart from being relevant for our own internal state detection scheme, the 2D5/2 state and its lifetime are important for several other reasons. First of all, in the work by the Innsbruck group one of the qubit states is defined as one of the sublevels of the 2D5/2 state [147]. For atomic structure calculations, the 2D5/2 state is an important test case for the study of valence-core interactions and core-polarization effects [148]. Moreover, the long lifetime of the 2D5/2 state implies a sub-Hz na-
tural linewidth of the 729 nm electric quadrupole transition to the 2S1/2 ground state, which makes this transition an attractive candidate for an optical frequency standard [149, 150]. Finally, in astronomy, the 2D5/2 state has been used in a study of the β pictoris disk [151], and it is also used

152 Chapter 10 - Shelving in the metastable 3d 2D5/2 state
in the study of so-called Seyfert 1 galaxies and T Tauri stars [152]. Therefore, the natural lifetime of the 2D5/2 state has attracted much attention in recent years, which has given rise to a wealth of measurements [150, 153, 154, 155, 156, 157, 158, 159, 160] and theoretical calculations [148, 152, 161, 162, 163, 164, 165]. Unfortunately, these results are scattered over a rather broad range (see Fig. 1 in Ref. [153] for an overview). Among the experimental results, the lifetime found by Barton -
et al. [153], using the shelving technique on a single trapped and laser-cooled 40Ca+ ion, has the smallest error bars, with an estimated lifetime of τ = 1168 ± 7 ms. Our measurement was performed using a string of five ions and resulted in a lifetime of τ = 1149 ± 14(stat.) ± 4(sys.) ms. The experimental setup and the experimental procedure for the lifetime experiment are described in Sec. 10.1.1. In Sec. 10.1.2, we give a detailed account of the data analysis, including a description of the maxi-
mum likelihood method used for the statistical data analysis and a discussion of systematic errors with emphasis on radiation effects and collision effects. In Sec. 10.1.3, the estimated lifetime based on the measurements is given and discussed.
10.1.1 Experimental setup
Figure 10.1: Experimental setup, see text for details. M: mirror, DM: dichroic mirror, PBS: polarizing beamsplitter, λ/2: half-wave plate.
A sketch of the experimental setup is shown in Fig. 10.1. The experiment was performed using the large linear Paul trap, which was used for the mass measurements. Cooling lasers and the imaging system are also the same, but the 850 nm diode laser has been added to the experimental setup. Also a long-pass filter and a grating and a diaphragm have been inserted in the diode laser beamlines for reasons discussed below. In this lifetime experiment, the peak-peak amplitude of the RF-voltage is 600 V an-
d the frequency is 3.894 MHz, which results in a radial trap frequency of ωr ≈ 2π · 550 kHz.

10.1. Lifetime measurement of the 3d 2D5/2 state 153
Figure 10.2: Relevant levels and transitions in 40Ca+. Doppler laser cooling is performed with lasers at 397 nm and 866 nm. A laser at 850 nm excites the ion from the 3d 2D3/2 state to the 4p 2P3/2 state, from where it can decay to the 3d 2D5/2 state. The dashed line indicates the electric quadrupole transition by which the ion can decay from the 3d 2D5/2 state to the ground state.
The axially confining endcap voltage applied to all eight end electrodes is 580 mV, yielding an axial trap frequency ωz ≈ 2π · 50 kHz. The ions were loaded into the trap using the photo-ionization technique described in Chap 8. During loading the oven was heated to 420◦ C, under which conditions the chamber pressure was 6.0 · 10−11 Torr. After having loaded five ions and forced them onto a string by adjusting the trap parameters and applying Doppler laser-cooling in the usual way, the oven tempera-
ture was reduced, and the oven shutter was closed. During a one hour measuring session, the pressure dropped to about 3.6 · 10−11 Torr. For recording fluorescence light emitted during the Doppler cooling process, the CCD-camera was operated with 50 ms exposure time and digital images were recorded at a frame-rate of 17.610 Hz. The optically active electron is shelved in the 2D5/2 state by exciting ions from the 2D3/2 state, where they occasionally end up during the Doppler cooling process, to the -
2P3/2 state using the diode laser at 850 nm (see Fig. 10.2). From the 2P3/2 state the ions can spontaneously decay to the 2D5/2 state, such that the optically active electron is shelved, and the fluorescence on the 397 nm transition is quenched. The time spent by the ion in the 2D5/2 state before it decays back to the ground state, will in the following be called a shelving period. By continuously applying the two cooling lasers and the shelving laser at 850 nm, we obtain characteristic fluorescen-
ce signals like the one shown in Fig. 10.3.
10.1.2 Data analysis
Data reduction
The lifetime of the 2D5/2 state can be estimated from the distribution of the shelving periods, since we expect it to be exponential with a time constant equal to the lifetime τ.
The duration of a shelving period can be determined by dividing the number of consecutive frames, where an ion is shelved, by the frame-rate of the CCD-camera. Our

154 Chapter 10 - Shelving in the metastable 3d 2D5/2 state
(a) (b)
Figure 10.3: (a) A sequence of CCD-images including a shelving event for the central ion (see colour version of this figure on the front page). The white square indicates the ’region of interest‘ (ROI) within which the fluorescence is integrated to obtain the signal shown in (b). (b) Fluorescence signal from the central ion for an image sequence containing the nine images above. The data points corresponding to the nine images are indicated by open circles. The dashed line indicates the threshold -
level discussed in the text.
raw data are digital images of five ions, as shown in Fig. 10.3(a), and the main data set consists of ∼ 200000 such images taken in three one hour experimental runs. The details of obtaining the distribution of the shelving periods from these images are described below. From the images in Fig. 10.3(a), it is evident that the ions are spatially well resolved, and that a ’region of interest‘ (ROI) around each ion can be defined. The ROI is 13 x 13 pixels, corresponding to a region of 9.5 μm x 9.5 μm-
 in the trap region. In order to establish a fluorescence data point which reflects the real ion fluorescence rate within a given image frame, we simply integrate the pixel values within the ROI. This is a valid measure, since the image intensifier and the CCD-chip have a linear response to the fluorescence collected by the objective lens. In the following the ion fluorescence will be given in integrated pixel values (IPV). As shown in Fig. 10.4, the distribution of the fluorescence data points fr-
om a single ion is characterized by a rather sharp peak at a low fluorescence level and a Gaussian distribution of data points around a level of ∼ 90000 IPV, originating from cases where the ion is scattering 397 nm light during a whole frame. In the following we define the fluorescing level as the center of the Gaussian distribution. The standard deviation of the Gaussian distribution is σ ∼ 7500 IPV, which is mainly set by image-intensifier noise, but also by laser intensity and frequency drifts-
 during the experimental run, and by the finite ion temperature. The peak at the low fluorescence level, or the background level, is due to data points originating from cases where the ion is shelved during a whole frame. In order to establish a distribution of the shelving periods, we need to introduce a threshold level to discriminate between fluorescence data points corresponding to frames where the ion is fluorescing (above the threshold level) or shelved (below the threshold level). From the -
distribution of fluorescence data points in Fig. 10.4, it is evident

10.1. Lifetime measurement of the 3d 2D5/2 state 155
Figure 10.4: Distribution of data points from a single ion, binned in intervals of 500 IPV. The maximum of the narrow background peak near 4000 IPV is not shown but has a value of 8000. From the Gaussian distribution around 90 000 IPV with a width of σ ∼ 7500 IPV, we can define a fluorescing level as the center of this distribution. The inset shows the intermediate points between 0 IPV and 80 000 IPV.
that we can choose a threshold level which can be used to unambiguously distinguish between the background level and the fluorescing level of an ion, as we also need for the internal state detection scheme. The specific choice of threshold level is discussed in the following.
From the inset of Fig. 10.4, it can be seen that the distribution of fluorescence data points contains some points with a value of the integrated fluorescence between the background level and the fluorescing level. These intermediate data points arise from images where the ion is only fluorescing during a fraction of the exposure time of the CCD-chip. This occurs naturally when an ion is shelved or decays to the ground state during the exposure of a single frame. Since a particular choice of thres-
hold level decides whether an intermediate data point is counted as belonging to a shelving period or not, it affects the precise distribution of the shelving periods. Fortunately, the choice of another threshold level on average only adds a constant amount to all the shelving periods, and therefore the decay rate extracted from their distribution is not influenced by the choice of threshold level. This fact allows us to choose a threshold level in a broad range between the background level and th-
e fluorescing level.
Unfortunately, intermediate fluorescence data points also occur in the following three situations: (i) shelving followed by fast decay to the ground state, (ii) decay to the ground state followed by fast re-shelving, (iii) a shelved and an unshelved ion change places, e.g., due to a weak collision with a background gas atom or molecule or due to the finite temperature of the ions. Examples of these events, all taking place within one or two camera frames, are shown in Fig 10.5(a)-(c). Hence, befor-
e we choose the threshold level to be used for extracting the distribution of shelving periods, we have to consider these three types of events in some detail.
(i) When an ion is shelved at a certain instant of a frame and decays back to the ground state within that same frame or the next, then the signal does not necessarily

156 Chapter 10 - Shelving in the metastable 3d 2D5/2 state
fall below the threshold level, as the example in Fig. 10.5(a) shows. Hence these events may not even be counted as shelving events. In the data analysis we simply account for such events by discarding all periods with a duration of one or two frames from the shelving period distribution. Since the distribution is expected to be exponential, we can subsequently displace the remaining distribution, so that periods originally having a duration of n frames (n ≥ 3) are set to be periods with a duratio-
n of n − 2 frames. (ii) If an ion decays and is quickly re-shelved, we cannot be confident that the signal rises above the threshold level, see Fig. 10.5(b), and thus two shelving periods can appear as one longer shelving period, which would artificially increase the extracted lifetime. Noting that such events require a high shelving rate, it is possible to exclude them on probability grounds. First, we set a low threshold level, T = 0.1 · (F − B) + B, where F is the fluorescing level, and B is th-
e background level, which means that only the very fastest re-shelving events do not rise above the threshold level. Second, we require that after a decay, which ends a shelving period, there must be twenty consecutive data points above the threshold level; otherwise it is not counted as a shelving period in the data analysis. This requirement is only likely to be fulfilled with a low shelving rate, thus reducing the risk of accepting shelving periods where a quick re-shelving event has happened. -
The probability for an event of decay and quick reshelving, with the signal not rising above the selected threshold level, followed by a decay and twenty consecutive data points above the threshold level, is below 2 permille regardless of the shelving rate. Hence this method gives at most a systematic error of -2 ms to the final result, and we will take the systematic error to be −1 ± 1 ms. (iii) As mentioned, two ions may change place, e.g., due to a weak collision with a background gas atom or m-
olecule. Fig. 10.5(c) shows how a shelved and an unshelved ion changing place, effectively cut one long shelving period into two shorter ones, which artificially shortens the extracted lifetime. Therefore, in such events we restore the position of the ions to obtain a single shelving event, as shown in Fig. 10.5(d). Positions are only restored if the value of the fluorescence data points for the two ions involved adds up to the fluorescing level F within ±2σ of this level. We find about 200 such e-
vents in our main data set. Since statistically the fluorescence from the two ions does not add up to the fluorescing level within ±2σ in all events, we estimate a systematic error to the lifetime of +2 ms. True events of one ion shelving and another decaying within the same fraction of a frame will, however, occur, and erroneously be corrected by this procedure. We estimate a systematic error of −10 ms due to the erroneously corrected events. All together the systematic error due to ions switchin-
g place is −8 ms, with an estimated uncertainty of ±4 ms. During data-taking it happened that the ions heated up, so the ion-string became unstable. Such events are clearly visible on the images of the ions and were cut out of the data set before performing the data reduction process described above. Likewise, periods where the lasers were adjusted or unstable are not considered in the further data analysis. After the data reduction process described above and using a threshold level of T = 0.1 · -
(F − B) + B, we extract a distribution of the shelving periods for each ion, binned in time intervals of ∆t = 56.786 ms, which is the inverse of the frame-rate. The counts in equivalent bins for all the ions in the three experimental runs are then added to obtain a single distribution, from which a decay rate can be determined. This distribution is shown in a histogram in Fig. 10.6, with the bins shifted such that the histogram has its origin at time zero.

10.1. Lifetime measurement of the 3d 2D5/2 state 157
(a) (c)
(b) (d)
Figure 10.5: Examples of events which are problematic in connection with the data analysis. In all graphs the dashed line indicates
the chosen threshold level of ∼ 12500 IPV. (a) Shelving and fast decay; corresponding frames indicated by open squares. (b) Decay
and fast re-shelving; corresponding frames indicated by open squares. Here the signal does rise above the threshold level, but for
an even faster event this may not be the case. (c) A shelved and an unshelved ion change places. (d) The signals in (c) with the
positions of the ions restored, i.e., the signals from Ion 1 and Ion 2 are interchanged after the crossing. At the frame where the two
ions change places and the preceding frame, the fluorescence signal from Ion 1 and Ion 2 are given artificial values of 120 000 IPV
and 0 IPV.

158 Chapter 10 - Shelving in the metastable 3d 2D5/2 state
Figure 10.6: Histogram over the 6805 shelving events obtained after data reduction. Note that the number of shelving events is on a logarithmic scale. The error bars are the square root of the number of shelving events. The solid line is the maximum likelihood estimate of τ = 1154 ms.
Statistical analysis
From the histogram in Fig. 10.6, we can infer the lifetime τ of the 2D5/2 state by assuming an exponential distribution with a decay rate given by the inverse lifetime of the 2D5/2 state. The histogram comprises 6805 shelving events with duration up to more than 11 s. Since, at large times, there are only a small number of events in the distribution, a least-squares-fitting method is inappropriate, and hence we employ a maximum likelihood estimate instead. The probability pi of falling into column-
 i in the histogram, i.e., having a shelving period of duration t, which fulfills ti ≤ t < ti+1, where ti = i∆t, is
pi =
∫ ti+1
ti
1
τ e−t/τ dt = e−ti/τ (
1 − e−∆t/τ )
. (10.1.1)
Mathematically, the pi’s define a proper probability distribution, since ∑∞
i=0 pi = 1. The sum starts at i = 0, corresponding to the origin of the distribution in the histogram. Since the sum extends to infinity, we must, in principle, be able to measure infinitely long shelving periods. In the case of real experiments, where one is only able to measure periods up to a finite duration, Tmax, the pi’s should formally be renormalized by the factor [1 − exp(−Tmax/τ )]−1. In our case where Tmax ∼ 1 hour and τ ∼ 1 s we can, however, safely neglect this factor. In order to mak-
e the maximum likelihood estimate, we now introduce the likelihood function
L = N!
∞ ∏
i=0
pni
i
ni! , (10.1.2)
where ni is the number of shelving events in the i’th column of the histogram, and
N = ∑∞
i=0 ni is the total number of shelving events. By maximizing L (or rather ln L)

10.1. Lifetime measurement of the 3d 2D5/2 state 159
with respect to τ , we find
τ = ∆t
ln( ∆t
<t> + 1) , (10.1.3)
where < t > = ∑ niti/N is the mean duration of the shelving periods. The variance of the lifetime is [166]
Var(τ ) = −
(
∂2 ln L ∂τ2
∣∣∣∣ ∂ ln L
∂τ =0
)−1
= τ 4(e∆t/τ − 1)2
N (∆t)2e∆t/τ (10.1.4)
=τ2
N
(
1+ 1
12
( ∆t τ
)2
+O
[( ∆t
τ
)4])
.
Using Eqs. (10.1.3) and (10.1.4), the lifetime and the statistical uncertainty can be determined solely from ∆t, < t > and N , and we find τ = 1154±14 ms. The exponential distribution based on the maximum likelihood estimate is plotted as a solid line on top of the histogram in Fig. 10.6. As a check of the efficiency and validity of our data reduction process, we have performed a test of goodness of fit 1. To find the goodness of fit, we employ the socalled Kolmogorov test [167], which is based on-
 the empirical distribution function (EDF). A general overview of EDF statistics can be found in Ref. [168], which also gives tables of significance levels appropriate for cases like ours, where the lifetime is estimated from the data set. We find from our data a value for the Kolmogorov test of 0.44, clearly below the 10% significance level value of 0.995, thus showing that the fit is good. We note for completeness that our data set is binned, whereas the values in Ref. [168] are for continuous d-
ata. However, since we have more than 100 channels this is not expected to play any significant role.
Radiation, collisions and other potential systematic effects
Apart from the systematic errors concerning the data reduction discussed above, there are a few other relevant systematic errors, which will be discussed in the following.
Radiation From the level scheme of Fig. 10.2, it is obvious that any radiation which couples the 2D5/2 state to the 2P3/2 state may deplete the 2D5/2 state by excitation to the 2P3/2 state followed by decay to the 2S1/2 ground state or the 2D3/2 state and result in a measured lifetime shorter than the natural lifetime. As a consequence, the occurrence of such radiation must be considered and, if possible, reduced. Blackbody radiation at the relevant transition wavelength is negligible at room temp-
erature, as also discussed by Barton et al. [153]. Other ‘thermal’ sources such as the ion gauge, roomlight and computer screens were off during the measuring sessions, except for the screen where we watched the images of the ions. This screen was facing away from the vacuum chamber and is hence not expected to cause any problems. Another class of influencing light sources is the lasers used in the experiment. In particular the broad background of the emission spectrum of the 866 nm and the 850 nm-
 diode lasers contains 854 nm light resonant with the 2D5/2– 2P3/2 transition. This radiation
1Kindly assisted by Karsten Riisager.

160 Chapter 10 - Shelving in the metastable 3d 2D5/2 state
source was first recognized by Block et al. [154], and as noted by Barton et al. [153] the discrepancy between their own and many of the earlier measurements is possibly due to this previously unrecognized source of error. To reduce the level of 854 nm light from the diode lasers as much as possible, a long-pass filter was inserted in the 866 nm beamline and adjusted (by changing the angle of incidence) to 30% transmission at 866nm and 5 · 10−4 at 854 nm, and a grating (1200 lines/mm) with a spect-
rally selective diaphragm (0.9 mm diameter, 1080 mm from the grating) was inserted in the 850 nm beamline. The filter, the grating and the diaphragm are shown in Fig. 10.1. The overall power of the lasers was reduced to ∼ 18 nW and ∼ 1.7 mW at the place of the ions, for the shelving laser and the repumping laser, respectively. The waist size of the beams was 670 μm × 700 μm for the repumping laser and 360 μm × 430 μm for the shelving laser. In order to estimate the lifetime reduction due to radiat-
ion emitted from the diode lasers, we calculate the rate of de-shelving from the 2D5/2 state, i.e., the excitation rate from the 2D5/2 state to the 2P3/2 state times (1 − b), where b = 0.068 is the branching ratio for decay from the 2P3/2 state back to the 2D5/2 state (see App. B). First we consider de-shelving due to the repumping laser, which we split into two contributions, one from the off-resonant 866 nm radiation and one from the near-resonant background radiation around 854 nm. The de-shelv-
ing rate due to the 866 nm radiation was calculated by Barton et. al. [153] to I866 · 9.4 · 10−5 s−1/(mWmm−2), where I866 is the intensity of 866 nm radiation. With I866 = 2.3 mWmm−2 we find a de-shelving rate of 2.2 · 10−4 s−1, yielding a lifetime reduction of 0.3 ms. In order to calculate the excitation rate from the 2D5/2 state to the 2P3/2 state due to radiation near 854 nm, we first consider the rate at a given frequency ωL, as expressed by Eq. (2) in Ref. [153]:
R12 = 2J2 + 1
2J1 + 1
π2c3
ħω132
A21
I
c g(ωL − ω12), (10.1.5)
where J1 = 5/2 and J2 = 3/2 are the total angular momenta of the involved levels, ω12 = 2πc/854.209 nm (App. B) is the transition frequency, A21 = 7.7 · 106 s−1 [153] the Einstein coefficient for spontaneous decay from the 2P3/2 state to the 2D5/2 state, I the intensity of the incoming radiation, and g(ωL − ω12) a normalized Lorentz-distribution. Assuming a flat background spectrum of the diode lasers, i.e., the intensity per frequency interval ∆I/∆ωL is constant, we can integrate Eq. (10.1.5) ove-
r frequency ωL and find an excitation rate of
R = 2J2 + 1
2J1 + 1
π2c2
ħω132
A21
∆I ∆ωL
. (10.1.6)
Using a diffraction grating we have measured ∆I/∆ωL 0.19 nW/(mm2 · GHz) near 854 nm at the power used in the experiment, and we then find R = 0.77 s−1. Multiplying this rate by 1 − b and the transmission of 5 · 10−4 of the long-pass filter, we find a de-shelving rate of 3.6 · 10−4 s−1, yielding a lifetime reduction of 0.5 ms. As a check of this estimate, we performed an experiment, again with five ions, with the cooling lasers on but without the shelving laser. Even without the shelving laser the -
ions may be shelved due to radiation from the 866 nm repumping laser, which couples the 2D3/2 state to the 2P3/2 state. From the observed shelving rate, we can then find the excitation rate on the 850 nm 2D3/2– 2P3/2 transition and compare it to the

10.1. Lifetime measurement of the 3d 2D5/2 state 161
calculated excitation rate for the 854 nm 2D5/2– 2P3/2 transition, taking the different linestrengths into account. In this experiment the power of the 866 nm laser was 7.3 mW, the waist was as above, the long-pass filter was removed and the oven-shutter was open. In about 35 minutes we observed 12 shelving events, i.e., the observed shelving-rate is 5.8 · 10−3 s−1. Taking into account the number of ions, the population of the D-state (∼ 1/3, since both cooling transitions are saturated) and the b-
ranching ratio b, we find the excitation rate on the 2D3/2– 2P3/2 transition: (3/5b) · 5.8 · 10−3 s−1 = 5.1 · 10−2 s−1. By multiplying this number with the relative linestrength between the 2D5/2– 2P3/2 transition and the 2D3/2– 2P3/2 transition of 8.92 [25], we find an estimated value
of 0.45 s−1 for the excitation rate on the 2D5/2– 2P3/2 transition, which should be
compared to R = 0.77 s−1 calculated above. The two numbers are not expected to be equal but only of the same order of magnitude, since the transition wavelengths are different, and the diode laser background is not necessarily equally strong near 850 nm and 854 nm. Also some of the shelving events may be due to collisions, as discussed below. Nevertheless, the numbers agree within a factor of 2 and our calculated estimate of the excitation rate, and hence the de-shelving rate seems to be reasonabl-
e. Above we considered de-shelving due to the repumping laser. In exactly the same way we could consider de-shelving due to the shelving laser. However, since the intensity of the shelving laser is much lower than for the repumping laser, and the grating and the diaphragm strongly reduce the level of 854 nm light, the excitation rate is expected to be extremely small. To check this we performed additional lifetime measurements at three different power levels of the shelving laser, 18 nW, 193 nW an-
d 2081 nW, yielding lifetimes of 1146 ± 24 ms, 1160 ± 29 ms and 1092 ± 27 ms, respectively. When using higher power, the laser was detuned from resonance to get a similar shelving rate in all experiments. In Fig. 10.7, the linear fit to the decay rates corresponding to the lifetimes shows that there is a weak dependence of the decay rate (or lifetime) on the 850 nm power. However, with only 18 nW the lifetime is only reduced by 0.5 ms. The results of the two low power measurements and the crossing-
 at zero power are in agreement with the result obtained from our main data set. The measurement at 18 nW was in fact performed at the same shelving laser power as the measurements for the main data set. All together, we include a systematic error of +1 ± 1 ms in our final result due to de-shelving from the two diode lasers.
Collisions Another systematic effect which shortens the measured lifetime is collisions with background gas atoms and molecules. There are two relevant types of collisions: fine-structure changing (j-mixing) collisions and quenching collisions. In a j-mixing collision the internal state can change from the 2D5/2 state to the 2D3/2 state, or vice versa. In a quenching collision the internal state changes from the 2D5/2 state to the 2S1/2 ground state. Both types of collisions deplete the 2D5/2 stat-
e and hence shorten the measured lifetime. j-mixing and quenching rate constants (Γj and ΓQ) in the presence of different gases are given in Ref. [169] and references therein. Quite generally j-mixing collisions are found to be an order of magnitude stronger than quenching collisions. From a restgas analysis, we know that the restgas in our vacuum chamber is mainly composed of H2 and gas of 28 atomic mass units, i.e., N2 or CO. In the restgas analysis it was not possible to distinguish between N2 -
and CO, since the chamber pressure was so low that the signal from the atomic constituents of these molecules could not be observed. Knoop et al. [169] found the following rate constants in units of cm3s−1 for collisions with H2 and N2: Γj(H2) = (3 ± 2.2) · 10−10, ΓQ(H2) = (37 ± 14) · 10−12,

162 Chapter 10 - Shelving in the metastable 3d 2D5/2 state
Figure 10.7: Decay rate measurements at three different power levels of the shelving laser. A weighted least-squares linear fit to the measured decay rates yields 1/τ = 0.866(8) s−1 + 0.023(7) s−1/nW · P850.
Γj(N2) = (12.6 ± 10) · 10−10 and ΓQ(N2) = (170 ± 20) · 10−12. The measurements were performed on a cloud of relatively hot ions, as compared to the laser cooled ions considered in this paper. As noted in Ref. [169], other measurements of j-mixing with H2 at different collision energies give similar results, so we may expect only a weak energy-dependence for the j-mixing collisions, and therefore we use the values given in Ref. [169]. On the other hand, higher quenching rates are expected at lower -
temperatures [169], but to our knowledge there are no measurements of that for Ca+. Unfortunately, we are not aware of any similar measurements with CO, and in our estimate of the collision rate below, we therefore assume that the mass 28 restgas is N2. The relatively large rate constants of N2 found in Ref. [169] indicate that at least this assumption probably does not lead to a large underestimate of the collision induced de-shelving rate.
Assuming that the values given in Ref. [169] are applicable, we can estimate the collision-induced lifetime reduction. At a pressure of 5 · 10−11 Torr, taking into account the sensitivity to different gases of the ion gauge and using the result of the restgas analysis, we find that the restgas is composed of 54%H2 and 46%N2, which yields a total collision induced de-shelving rate of 2.3 · 10−3 s−1, and a systematic error to the lifetime of +3 ms with an estimated uncertainty of ±1 ms.
From the measurement of 12 shelving events in 35 minutes without the shelving laser on, described above, we can obtain an upper limit for the j-mixing collision rate if we assume that all the observed shelving events are due to j-mixing collisions inducing a transition from the 2D3/2 state to the 2D5/2 state (with rate γ35). Again taking the number of ions and the population of the 2D3/2 state into account, the collision induced
shelving rate is 3.5 · 10−3 s−1. Since the oven shutter was open in that experiment, thus allowing collisions with neutral calcium atoms as well, we expect this number to be larger than under the conditions for the ‘real’ lifetime measurements. The transition rate, γ53, for the 2D5/2– 2D3/2 de-shelving transition is expected to be given by γ53 = 2γ35/3, owing to the principle of detailed balance, so the collision induced de-shelving rate is

10.1. Lifetime measurement of the 3d 2D5/2 state 163
2.3 · 10−3 s−1. This is our upper limit for the j-mixing collision rate, which should be compared to our estimate above of the total collision-induced de-shelving rate, which is dominated by contributions from j-mixing collisions. Somewhat fortuitously, the numbers are equal, and hence our calculated estimate seems to be reasonable.
Other effects When observing shelving events from a string of ions, one might consider if there are any correlations in the decay of the individual ions from the 2D5/2 state to the ground state, which could influence the measured lifetime. In the experiments by Block et al. [154] indications of correlated decays from the 2D5/2 state were observed, manifested as an overrepresentation of events where several ions decay at the same time. A later detailed experiment by Donald et al. [160] showed, howe-
ver, no such correlations. Apart from sudden bursts of 854 nm radiation, the only reasonable physical mechanism which could lead to correlations is so-called subradiant and superradiant spontaneous emission due to interference in the spontaneous decay of two or more ions [170]. In the simple case of two ions, superradiant and subradiant spontaneous emission is characterized by a relative change in the normal (single ion) decay rate of the order of ± sin(kR)/kR (when kR > 10), where R is the ion-io-
n distance and k = 2π/λ with λ = 729 nm in our case 2. For more ions the effect is of the same order of magnitude. In our case 1/kR ≈ 6 · 10−3 so just from this argument the effect is small, but not negligible. The interference effect, however, relies on creating and maintaining
a superposition state of the form |±〉 = (|S1D2〉 ± |D1S2〉)/√2, where S and D indicate the internal state, 2S1/2 or 2D5/2, and indices 1 and 2 relate to Ion 1 and Ion 2. In our experiment such a superposition state can only be created by a random process since the 2D5/2 state is only populated through spontaneous emission, and consequently the relative phase between the states |S1D2〉 and |D1S2〉 is expected to be random. This fact would in itself average out the effect on the lifetime. In addition, i-
f the superposition state is created, it is immediately (as compared to τ ) destroyed since, from a quantum mechanical point of view, we are constantly measuring the internal state of the ions. So any superradiant or subradiant effect is in fact expected to be destroyed, and we do not expect any correlation in decays from the 2D5/2 state. We have checked our data for correlated decays, and indeed a statistical analysis shows no evidence of correlations. In Ref. [153] mixing of the 2D5/2 state with-
 the 2P3/2 state due to static electric fields was considered and found to be negligible. For our trap we also find this effect to be negligible. Finally, we note that the read-out time of the camera influences the measured duration of the shelving periods. As for the choice of threshold level, the read-out time has no effect on the measured decay rate and hence on the measured lifetime.
The total effect of systematic errors Above we have identified and evaluated systematic errors originating from the data analysis and from de-shelving due to radiation and collisions. An overview of the estimated errors and their uncertainties is given in Table 10.1. The effects leading to the systematic errors can be modelled by extra decay rates
2In Ref. [170] a dipole transition is considered. For an electric quadrupole transition the relative change of the decay rate is of the same order of magnitude.

164 Chapter 10 - Shelving in the metastable 3d 2D5/2 state
Effect Systematic error [ ms] Quick re-shelving −1 ± 1 Ions switching place −8 ± 4 De-shelving, diode lasers +1 ± 1 De-shelving, collisions +3 ± 1 Total −5 ± 4
Table 10.1: Overview of estimated systematic errors.
added to the natural decay rate:
1
τmeas
=1
τnat
+
∑
i
γi (10.1.7)
or
τnat ≈ τmeas +
∑
i
τ2
measγi, (10.1.8)
where τmeas is the measured lifetime as determined from the maximum likelihood estimate, τnat is the natural lifetime, and the γi’s are the extra decay rates, which can attain both positive and negative values in this model. The systematic errors given in the text and Table I correspond to τ 2measγi. Eq. (10.1.8) shows that the systematic errors should be added linearly, yielding -5 ms, and added to the result of the maximum likelihood estimate, giving a lifetime of 1149 ms. The uncertainties of t-
he systematic errors are independent, and therefore they are added quadratically, yielding an uncertainty of ±4 ms.
10.1.3 Result and conclusion
By correcting the maximum likelihood estimate with -5 ms, as described above, we find that our final result for the lifetime measurement is
τnat = 1149 ± 14(stat.) ± 4(sys.) ms. (10.1.9)
The largest error is the statistical, but we do have a non-negligible systematic uncertainty, originating from the correction procedure when ions change places. The associated error, and hence the uncertainty, could be reduced by increasing our signal-to-noise ratio, which would narrow the time window where real events of simultaneous decay and shelving for two different ions could be taken for two ions changing place. The signal-tonoise ratio can be improved by frequency locking the Ti:Sa laser a-
nd power stabilizing the output from the doubling cavity as described in Chap. 8. This was, however, not implemented at the time when the experiment was performed. From Eq. (10.1.4) we see that the statistical uncertainty can only be reduced by a longer data acquisition time (increasing N ), and not simply by increasing the frame-rate, since the second term in the expansion is already negligible in our case. Our measurement was performed with a string of ions, unlike most other lifetime measuremen-
ts using the shelving technique. In all single-ion experiments, one has to

10.2. Internal state detection revisited 165
Reference Lifetime [ ms] This work 1149 ± 14 ± 4 Knoop et al., 2003 [150] 1152 ± 23 Donald et al., 2000 [160] 1177 ± 10 Barton et al., 2000 [153] 1168 ± 7 Block et al., 1999 [154] 1100 ± 18 Lidberg et al., 1999 [155] 1090 ± 50
Table 10.2: Overview of recent experimental values for the lifetime of the 3d 2D5/2 state in the 40Ca+ ion.
consider the fact that the ion may heat up, so the fluorescence level drops significantly, and the ion can appear to be shelved, although it is not. In our experiment with five ions on a string, we can detect and discard all events of this kind since if one ion or several ions heat up, we would see the remaining ions move or heat up as well. Moreover, with a string of ions, the shelved ions are sympathetically cooled by the unshelved ions, so the number of heating events are expected to be reduced-
 using a string of ions, as compared to single ion experiments. The major drawback of using a string of ions is that ions may change places, which influences the measured lifetime if this is not taken care of in the data analysis, as demonstrated here. In conclusion, we have measured the lifetime of the metastable 3d 2D5/2 state in the 40Ca+ ion using the shelving technique on a string of five ions. Our result agrees roughly at the level of one standard deviation with the already mentioned result -
obtained by Barton et al. [153] and with the value reported in Ref. [150], which together with other recent results are presented in Table 10.2. On the level of two standard deviations, our result agrees with two other measurements where de-shelving due to diode lasers was taken into account [160, 154] and with the storage-ring measurement by Lidberg et al. [155] (see Table 10.2). Furthermore, our result agrees with two theoretical values [162, 163]. This newly obtained level of agreement should p-
rovide valuable input to future atomic structure calculations and astronomical studies. The importance of this result for our internal state detection scheme is discussed below.
10.2 Internal state detection revisited
From the lifetime experiment we learn two things, which are essential for the internal state detection scheme described in Chap. 4. First, as already pointed out, it is absolutely necessary that we can tell with large certainty if the ion is fluorescing or shelved in the 2D5/2 state. As Fig. 10.4 shows, this is clearly the case using a reasonably short exposure time of 50 ms. Second, the measured lifetime is important for the efficiency of the detection scheme. If a relatively short lifetime had b-
een measured, as compared to other measurements, this could indicate that we suffered from a significant depletion of the 2D5/2 state, which would reduce the efficiency of the internal state detection scheme. As it turns out, our result is amongst the longest lifetimes measured, and as seen from Table 10.1 depletion due to radiation and collision effects is estimated to give rise only to a 4 ms lifetime reduction, which is less than 0.4% of the lifetime. This makes us confident

166 Chapter 10 - Shelving in the metastable 3d 2D5/2 state
that depletion effects present no significant reduction of the efficiency of the internal state detection scheme. The small dependence on the laser power may even be further reduced using a recently purchased set of bandpass-filters instead of the longpass-filter, the grating and the diaphragm. Depletion effects should be independent of which trap is used, since the pressure is almost equal in the two vacuum chambers and the laser sources are the same. STIRAP between the 2D3/2 state and the 2D5/2 -
state involves the 850 nm diode laser used here for shelving as well as the 854 nm diode laser. The latter diode laser has been tested; by shelving ions as above, it can clearly be seen that when the 854 nm laser is applied, fluorescence from the ions is regained due to excitation on the 2D5/2– 2P3/2 transition. Moreover, the necessary STIRAP pulses can be created, which means that the first STIRAP experiments, which will be done on Doppler laser-cooled ions, are approaching. The first experiments-
 will concern STIRAP from the 2D3/2 state to the 2D5/2 state, with the ion being initialized to the 2D3/2 state by optical pumping (shutting off the 866 nm repumper laser, while leaving the blue cooling laser on). Successful transfer to the 2D5/2 state will be detected using the same methods as for the lifetime experiment. Next step will be experiments concerning the 2S1/2– 2D3/2 STIRAP process. After initialization in the ground state and transfer by STIRAP to the 2D3/2 state, the 2D3/22D5/2 STIR-
AP process will be applied. Subsequent fluorescence collection determines if the first STIRAP step was successful.

167
Chapter 11
Summary and outlook
In this thesis our work towards quantum logic experiments with trapped 40Ca+ ions is presented. A linear Paul trap has been specifically designed and constructed for quantum logic experiments and characterized in a series of measurements. The measured oscillation frequencies of ions in the trap are not explainable in terms of the standard theory for a linear Paul trap, but can be explained by including an additional term in the trapping potential. This deviation from the standard theory underlines-
 the importance of our experimental characterization. Furthermore, it has been demonstrated that a refined version of the technique used for measuring the trap parameters should enable nondestructive ion mass measurements, at a level of precision which allows a discrimination between ions (atomic or molecular) having the same number of nucleons, but having different masses due to differences in their nuclear binding energy. The ability to make such a discrimination would be a valuable tool for oth-
er research projects within our group. By demonstrating the so-called shelving technique, we have made the first step towards detection of the qubit state of an ion. Using the shelving technique we have furthermore measured the lifetime of the metastable 3d 2D5/2 state in the 40Ca+ ion. This lifetime is interesting in several different areas of physics, however, the many measurements and calculations of the lifetime are scattered over a rather broad range spanning about 25% of the lifetime. Our re-
sult is in agreement with the most recent measured values at the level of 2%. On the theoretical side, we have presented a study of the sideband-cooling scheme for cooling ions to their motional ground state in the trap. This is a crucial step towards quantum logic experiments and our study shows that ground state cooling is feasible using the envisaged scheme. In addition, we have presented two theoretical proposals combining optical dipole potentials and dipole forces with trapped ions. In one p-
roposal, we show that a highfidelity two-ion quantum gate can be performed in less than 100 μs using realistic trap and laser parameters. It should be possible to apply this gate proposal in our own setup. In another proposal, we describe how individual and selective addressing of ions on a string can be obtained utilizing a position-dependent optical dipole potential. This proposal is also applicable in our own setup, but more attractive in other systems.

168 Chapter 11 - Summary and outlook
Currently, work in the laboratory is focussed on the first demonstration of stimulated Raman adiabatic passage (STIRAP) from the 3d 2D3/2 state to the 3d 2D5/2 state in the 40Ca+ ion. This is one important step in our scheme for detection of the qubit state of a 40Ca+ ion, and it will be our first experiment where the internal state of an ion is controlled in a coherent way. By combining this with a second STIRAP process, from the 4s 2S1/2 ground state to the 3d 2D3/2 state, it will be possible to-
 detect the qubit state of an ion. This will enable a demonstration of Rabi-oscillations on the Raman transition between the two ground state sublevels of the 40Ca+ ion, and prepare the way for sideband cooling and later quantum logic operations.

169
Appendix A
Derivations
A.1 Sideband cooling with second-order contributions
to the rate equation
A.1.1 Solution to the second-order rate equation
Here we derive the solution given in Eq. (3.3.21), to the second-order rate equation in Eq. (3.3.20). Starting from Eq. (3.3.20) and using n2 = 2n2 + n valid for a thermal distribution (derived below), we find
n ̇ = − 4η4
eg(A−− − A++)
} {{ }
a
n2 − [η2
eg(A− − A+) − 8η4
eg A++ ]
} {{ }
b
n (A.1.1)
+ η2
egA+ + 4η4
eg A++
} {{ }
c
, (A.1.2)
which can be written as
d
dt n = d
dt (n + b
2a ) = −a(n + b
2a )2 + b2
4a + c. (A.1.3)
Solving this differential equation for (n + b/2a), by multiplying with dt and integrating the resulting equation, it is found that
n(t) = 1
a
√b2/4 + ac coth
[√b2/4 + ac (t + t0)
]
−b
2a (A.1.4)
≡ W (2)
2W ′
{
coth
[
W (2)(t + t0)/2
]
−1
}
+ n(2)
SS
= W (2)
W′
[
eW (2)(t+t0) − 1
]−1
+ n(2)
SS
with W ′, W (2) and n(2)
SS defined as in Eqs. (3.3.22)–(3.3.24) and t0 a constant. From

170 Appendix A - Derivations
the initial condition
n0 ≡ n(t = 0) = W (2)
W′
[
eW (2)t0 − 1
]−1
+ n(2)
SS, (A.1.5)
eW (2)t0 can be determined and inserted into Eq. (A.1.4), which yields the solution stated in Eq. (3.3.21). One way of establishing the relation n2 = 2n2 + n is to take a small ‘detour’ around the two-photon correlation function for a single-mode light-field at zero delay [171]:
g(2)(0) = < a†a†aa >
< a†a >2 = < a†(aa† − 1)a >
< a†a >2 = < n2 − n >
< n >2 , (A.1.6)
where, formally, a and a† are harmonic oscillator annihilation and creation operators. For a thermal distribution g(2)(0) = 2 [171], which immediately yields n2 = 2n2 + n (< n >≡ n, < n2 > ≡ n2) .
A.1.2 Derivation of Eqs. (3.3.26) and (3.3.27)
Here, Eqs. (3.3.26) and (3.3.27) are derived from Eqs. (3.3.22)–(3.3.24) using Eqs. (3.3.9), (3.3.17) and Ω, Γ ωz. We start out by re-arranging Eq. (3.3.23) to get
W (2) = W (1)
√
1 + 16ηe2g
A+A−− − A−A++
(A− − A+)2 + 64ηe4g
A++A−−
(A− − A+)2 . (A.1.7)
Using Eqs. (3.3.9), (3.3.17) and Ω, Γ ωz, it can be found that
A+A−− − A−A++
(A− − A+)2 =
(Γ
2ωz
)2
(α2 − α ̃ − 1/9) (A.1.8)
and
A++A−−
(A− − A+)2 =
(Γ
2ωz
)2
(αα ̃ + α2/4 + α/9). (A.1.9)
Inserting these expression into Eq. (A.1.7) and expanding to first order in (Γ/ωz)2, Eq. (3.3.26) then follows.
In order to find n(2)
SS, we first calculate the second term in Eq. (3.3.24):
A++
A−− − A++
=
(Γ
2ωz
)2
[α ̃/α + 1/4 + 1/(9α)]. (A.1.10)
By inserting this expression and Eq. (3.3.26) into Eq. (3.3.24), Eq. (3.3.27) follows immediately.

A.2. Displacements and phases in the geometric Controlled-Z gate 171
A.2 Displacements and phases in the geometric Controlled
Z gate
In this section the time-dependent displacements β(t) and the phases φ(t) in the gate proposal of Sec. 6.2 are stated for the center-of-mass mode as well as the breathing mode. Using the definitions of the f -functions in Eq. (6.2.20) for the center-of-mass mode and carrying out the integral in Eq. (6.2.11) one arrives at the following expressions for the displacement
β+(↓↓, t) =β0+ + β1+ (A.2.1)
β+(↓↑, t) =β0+ + β2+ (A.2.2)
β+(↑↓, t) =β0+ − β2+ (A.2.3)
β+(↑↑, t) =β0+ − β1+ (A.2.4)
where
β0+ = − i f0+
ħωz
(1 − e−iωzt) (A.2.5)
β1+ = f1+
2ħ
( 1 − e−i(ωz+Ω)t
ωz + Ω − 1 − e−i(ωz−Ω)t
ωz − Ω
)
(A.2.6)
β2+ = f2+
f1+
β1+. (A.2.7)
At the end of the gate operation, where t = T = 2πn/ωz, the displacement is zero for all four combinations of qubit states, as requested. Inserting these expressions into Eq.(6.2.12) and carrying out the integral, it can be found that
φ+(↓↓, t) =φ1+ + φ2+ + φ3+ + φ4+ (A.2.8)
φ+(↓↑, t) =φ1+ + φ5+ + φ6+ + φ7+ (A.2.9)
φ+(↑↓, t) =φ1+ − φ5+ − φ6+ + φ7+ (A.2.10)
φ+(↑↑, t) =φ1+ − φ2+ − φ3+ + φ4+, (A.2.11)
where
φ1+ =
( f0+ ħωz
)2
[ωzt − sin(ωzt)] (A.2.12)
φ2+ = f0+f1+
ħ2(ωz2 − Ω2)
[ Ω[cos(ωzt) − 1]
ωz
− ωz[cos(Ωt) − 1]
Ω
]
(A.2.13)
φ3+ = f0+f1+
(ħωz )2
[ ωz{1 − cos[(ωz − Ω)t]}
2(ωz − Ω) − ωz{1 − cos[(ωz + Ω)t]}
2(ωz + Ω) − ωz[cos(Ωt) − 1]
Ω
]
(A.2.14)
φ4+ = f12+
(2ħ)2
[ sin[(ωz + Ω)t] + sin[(ωz − Ω)t] − (ωz/Ω) sin(Ωt) + 2ωzt
ωz2 − Ω2 (A.2.15)
− sin[(ωz + Ω)t]
(ωz + Ω)2 − sin[(ωz − Ω)t]
(ωz − Ω)2
]

172 Appendix A - Derivations
and where φ5+ = (f2+/f1+)φ2+, φ6+ = (f2+/f1+)φ3+ and φ7+ = (f2+/f1+)2φ4+.
For the breathing mode, the displacement and the phase can be found in exactly the same way as above, using the function f− defined in Eq. (6.2.5) instead of f+. To obtain the phases φ− the following replacements should be made in Eqs. (A.2.8)
(A.2.15): φ+ → φ−, φi+ → φi− (i = 1 − 7), ωz → √3ωz and fj+ → fj− (j = 0 − 2),
where f0− = f0+(F ̃2 − F ̃1)/[ 4 √3(F ̃2 + F ̃1)] and f1− and f2− are defined in Eq. (6.2.32).
A.3 The coupled motion of two trapped ions
Here we consider the situation described in Sec. 9.3, with two singly-charged ions of different masses confined in the axial harmonic potential of a linear Paul trap, with one ion being subject to a constant light-pressure force, a damping laser-cooling force and a modulation force Fmod cos(ωmodt). From the coupled equations of motion for the two ions, the relative phase between the motion of the laser-cooled ion and the modulation force is derived. The derivation is valid to first order in δz/∆z.-
 Using the same notation as in Sec. 9.3, we have the following equations of motion:
z ̈1 + γz ̇1 + ω2
1z1 = − e2
4π 0m1(z2 − z1)2 + Flight
m1
+ Fmod
m1
cos(ωmodt) (A.3.1)
z ̈2 + ω2
2 z2 = e2
4π 0m2(z2 − z1)2 . (A.3.2)
To solve them, we first expand the Coulomb force on Ion 2, FCoul,2, around the equilibrium distance, ∆z + δz, as follows
FCoul,2 = e2
4π 0(z2 − z1)2 ≈ F0 − F1
z2 − z1 − (∆z + δz)
∆z (A.3.3)
where
F0 = e2
4π 0(∆z + δz)2 ≈ 1
2 m1ω2
1∆z(1 − 2δz/∆z) (A.3.4)
F1 = 2e2∆z
4π 0(∆z + δz)3 ≈ m1ω2
1∆z(1 − 3δz/∆z). (A.3.5)
Inserting this linearized expression for the Coulomb force in the equation of motion for z2, we find
z1 = m2∆z
F1
z ̈2 +
( m2ω22∆z
F1
+1
)
z2 − 3
2 (∆z + δz). (A.3.6)
Inserting this expression for z1 and its time derivatives in the equation of motion for z1, we obtain after some calculations the following fourth order differential equation in z2:
z ̈ ̈2 + γz ̇ ̈2 + 2(ω2
1 + ω2
2)(1 − 3δz/2∆z)z ̈2 + 2γω2
2(1 − 3δz/2∆z)z ̇2 + 3ω2
1ω2
2(1 − 2δz/∆z)z2
= 3ω2
1ω2
2∆z(1 − 4δz/∆z)/2 + ω22Fmod
m1
(1 − 3δz/∆z) cos(ωmodt). (A.3.7)

A.3. The coupled motion of two trapped ions 173
The first term on the r.h.s. is constant and can be removed by introducing z = z2 −z2,eq [see Eq. (9.3.4)] and writing the differential equation in terms of z. Furthermore, putting the resulting differential equation on complex form, we obtain
z ̈ ̈ + γz ̇ ̈ + 2(ω2
1 + ω2
2)(1 − 3δz/2∆z)z ̈ + 2γω2
2(1 − 3δz/2∆z)z ̇ + 3ω2
1ω2
2(1 − 2δz/∆z)z
= ω22Fmod
m1
(1 − 3δz/∆z) exp(iωmodt) (A.3.8)
with z being a complex variable. Now, making the Ansatz z = z0 exp(iωmodt), with z0 complex, we find
ω4
mod − iγω3
mod − 2ω2
mod(ω2
1 + ω2
2)(1 − 3δz/2∆z) + 2iγωmodω2
2(1 − 3δz/2∆z)
+ 3ω2
1ω2
2(1 − 2δz/∆z) = ω22Fmod
m1
(1 − 3δz/∆z)z−1
0 . (A.3.9)
Writing z0 = |z0|eiφ1 , we then have that z2 = Re[z] + z2,eq = |z0| cos(ωmodt + φ1) + z2,eq, where
cos(φ1) = ω4
mod − 2ω2
mod(ω12 + ω22)(1 − 3δz/2∆z) + 3ω12ω22(1 − 2δz/∆z)
N0
, (A.3.10)
and where N0 is the norm of the l.h.s. of Eq. (A.3.9). From the expression for z2, we could go back and find z1 (the position of the observed laser cooled ion), but all we need to know is the phase relative to the phase of the driving force, which is the same as for z2, i.e., φ1. From Eqs. (A.3.10) and (9.3.2), it follows that cos(φ1) = 0 exactly at ωCOM and ωbr given in Eq. (9.3.11), thus showing that also in the case considered here, the mode-frequencies can be determined by picking out the ampl-
itude of the in-phase component as described in Sec. 9.3.

174 Appendix A - Derivations

175
Appendix B
The Ca+ ion
B.1 Abundance of Ca-isotopes
The natural abundance of the stable isotopes of calcium is listed in Table B.1
Isotope Abundance 40 96.941% 42 0.647% 43 0.135% 44 2.086% 46 0.004% 48 0.187%
Table B.1: Abundance of the stable isotopes of calcium [146].
B.2 Transitions in the 40Ca+ ion
For the dipole-allowed transitions shown in Fig. 3.3, some relevant data are listed in Table B.2. The coupling strength for dipole-allowed transitions between the various sub-levels is characterized by the values of Γ given in Table B.2 and the Clebsch-Gordan coefficients (see, e.g., Ref. [22] for a definition), which are listed in Tables B.3–B.5.

176 Appendix B - The Ca+ ion
Transition Wavelength [nm] Γ/2π [MHz] Sat. intensity [mW/cm2] 2S1/2- 2P1/2 396.847 20.7 43.3 2S1/2- 2P3/2 393.366 21.5 46.2 2D3/2- 2P1/2 866.214 1.69 0.34 2D3/2- 2P3/2 849.802 0.177 0.038 2D5/2- 2P3/2 854.209 1.58 0.33
Table B.2: Data for dipole-allowed transitions in 40Ca+, as shown in Fig. 3.3. Transition wavelengths are measured in air [25, 108]. Γ/2π is the transition rate [25, 108]. Saturation intensities are calculated according to Eq. (2.1.30), using the relevant transition rate and transition frequency for Γ and ωeg, respectively.
2S1/2(−1/2) 2S1/2(+1/2)
2P1/2(−1/2) −√1/3 √2/3
2P1/2(+1/2) −√2/3 √1/3 2P3/2(−3/2) 1 
2P3/2(−1/2) √2/3 √1/3
2P3/2(+1/2) √1/3 √2/3 2P3/2(+3/2) - 1
Table B.3: Clebsch-Gordan coefficients for transitions between the 2S1/2 state and the 2P1/2 and 2P3/2 states.
2D3/2(−3/2) 2D3/2(−1/2) 2D3/2(+1/2) 2D3/2(+3/2)
2P1/2(−1/2) √1/2 −√1/3 √1/6 
2P1/2(+1/2) - √1/6 −√1/3 √1/2
2P3/2(−3/2) −√3/5 √2/5 - 
2P3/2(−1/2) −√2/5 −√1/15 √8/15 
2P3/2(+1/2) - −√8/15 √1/15 √2/5
2P3/2(+3/2) - - −√2/5 √3/5
Table B.4: Clebsch-Gordan coefficients for transitions between the 2D3/2 state and the 2P1/2 and 2P3/2 states.
2P3/2(−3/2) 2P3/2(−1/2) 2P3/2(+1/2) 2P3/2(+3/2)
2D5/2(−5/2) √2/3 - - 
2D5/2(−3/2) −√4/15 √2/5 - 
2D5/2(−1/2) √1/15 −√2/5 √1/5 
2D5/2(+1/2) - √1/5 −√2/5 √1/15
2D5/2(+3/2) - - √2/5 −√4/15
2D5/2(+5/2) - - - √2/3
Table B.5: Clebsch-Gordan coefficients for transitions between the 2D5/2 state and the 2P3/2 state.

B.3. Zeeman-splitting in the 40Ca+ ion 177
B.3 Zeeman-splitting in the 40Ca+ ion
The Zeeman-splitting of the magnetic sublevels of 40Ca+ is given by:
∆EZeeman = mJ gJ μBB, (B.3.1)
where mJ is the magnetic quantum number, μB is the Bohr magneton, B is the magnetic field strength and gJ is the Lande ́ g-factor,
gJ = 1 + J(J + 1) + S(S + 1) − L(L + 1)
2J(J + 1) . (B.3.2)
Values of gJ are listed in Table B.6 for the lowest lying states of the 40Ca+ ion. For
State gJ
2S1/2 2 2P1/2 2/3 2P3/2 4/3 2D3/2 4/5 2D5/2 6/5
Table B.6: Values of gJ for the lowest lying levels of the 40Ca+ ion.
B = 1 Gauss, the Zeeman-splitting of the ground-state sublevels is 2π × 2.8 Mhz.

178 Appendix B - The Ca+ ion

179
Appendix C
Sideband cooling – quantum
Monte Carlo simulations
C.1 The simulation program
In the Monte Carlo simulation program, the coefficients in the wavefunction in Eq. (3.5.1) are evolved in time according to the Monte Carlo wavefunction method [59, 60]. This method contains two essential steps: a coherent evolution of the wavefunction and random decisions of the outcome of stochastic processes. The simulation program is written in the C/C++ programming language. The coherent evolution of the wavefunction is performed according to Eqs. (3.5.6)–(3.5.8) in timesteps of duration ∆t =-
 (2Γ1/2)−1, using the fourth order Runge-Kutta algorithm rk4 from Numerical Recipes in C [172]. Using smaller or a little larger timesteps did not alter the results of the simulations significantly. Random decisions are made using random numbers uniformly distributed between 0 and 1 with 30 bit resolution, formed from the random numbers generated by two calls of the library function rand(). A stochastic process taking place with probability dp, is said to happen if a (30 bit) random number is less-
 than dp. In order to exploit the fact that the higher lying vibrational states become irrelevant, when population is driven towards the lowest lying vibrational states during sideband cooling, a dynamic cut-off was introduced in the program. This means that when it eventually occurs during the cooling process, that the population in the uppermost
vibrational level |nupper〉 is less than some number, , then the coefficients Cnupper
i are set to zero and left out of the calculation. The bottom three levels, where n = 0 − 2, cannot be removed by the dynamic cut-off. = 10−4 was used in all simulations and it was tested for each 1000 timesteps if the uppermost level could be removed. When cooling worked poorly, a simulation of 100 histories over 105 timesteps with 6 vibrational levels (nmax = 5) in the wavefunction, performed on a 500 MHz PC 1, typically lasted 17 hours, while if the cooling was very efficient, the dynamic cut-o-
ff could reduce the computation time to about 5 hours. The individual steps in the simulation program are the following: First, the coeffi
1More or less the standard at the time the simulations were made.

180 Appendix C - Sideband cooling – quantum Monte Carlo simulations
cients Cin (n = 0 − nmax) in the wavefunction are initialized to the values C2n = 0 and
C1n = C3n = √nn
0 /[2(n0 + 1)n+1]. After initialization, the coefficients are normalized,
such that ∑3
i=1
∑nmax
n=0 |Cin|2 = 1. Following that, the program runs through steps 1-6
below in a loop, typically for 105 timesteps.
1. The probability dp for a decay from |2〉 in a timestep ∆t is calculated; dp =
Γ1/2∆t ∑
n |C2n|2 is typically 10−4.
2. The coefficients are evolved according to Eqs. (3.5.6)-(3.5.8) in a timestep ∆t using rk4 [172].
3. Based on the probability dp, calculated in step 1, it is randomly decided if a spontaneous decay from |2〉 takes place. If ‘no’, the program jumps to step 6. If ‘yes’, it continues to step 4.
4. A series of random decisions determines if the vibrational state changes in the decay.
(a) A random decision decides if the decay goes to |1〉, which, depending on the choice of excited state, happens with probability 1/3 or 2/3, or if the decay goes to |3〉 instead.
(b) The direction of the emitted photon is found randomly, with the probability for emission in a given direction governed by the distribution-function W for the radiation pattern, which depends on the choice of excited state [52]. See the definitions in Eq. (3.5.23).
(c) Given the emission-direction, characterized by a wave-vector kdecay, the Lamb-Dicke parameter ηdecay = kdecay · z0 can be calculated and from that the probability for changing the vibrational state by ∆n = 0, ±1, ±2. A random decision determines the change in the vibrational state.
5. The wavefunction is collapsed onto the internal state |i〉 (i = 1, 3) to which the decay happened, and the distribution over the vibrational levels is shifted by ∆n, i.e., Cin → Cn+∆n
i and Cnmax+∆n
i = 0 (if ∆n < 0) or C0+∆n
i = 0 (if ∆n > 0).
6. The coefficients are normalized such that ∑3
i=1
∑nmax
n=0 |Cin|2 = 1.
C.2 Time evolution of coefficients
In this section the state |2〉 is adiabatically eliminated with respect to the Ramantransition and Eqs. (3.5.6)–(3.5.8) are derived.
The time-dependence of the coefficients Cin in the wavefunction |ψ〉 in Eq. (3.5.1) is governed by the time-dependent Schro ̈dinger equation
iħ ∂ |ψ〉
∂t =H |ψ〉 (C.2.1)
or
iħ
3 ∑
i=1
nmax
∑
n=0
C ̇ n
i (t) |i, n〉 =H
∑3
i=1
nmax
∑
n=0
Cn
i (t) |i, n〉 , (C.2.2)

C.2. Time evolution of coefficients 181
where
H = Htrap + Hion + HRaman + Hpump (C.2.3)
with the individual Hamiltonians defined in Eqs. (3.5.3)–(3.5.5). First we treat the case H = Htrap + Hion + HRaman and then we consider Hpump separately. Taking H = Htrap + Hion + HRaman and following Ref. [173], it is useful to consider the time-dependence of the coefficients
Bn
i (t) =Cn
i (t)eiHnn
ii t/ħ, (C.2.4)
where
H nn
ii = 〈i, n| H |i, n〉 = Ei + nħωz. (C.2.5)
From Eq. (C.2.2) it follows that the coefficients Bin evolve in time according to
B ̇ n
1 (t) = − i Ω1∗2
2 e−i(∆+ωz)t ∑
n′
Bn′
2 (t)e−iωz(n′−n)tUnn′ (−η12) (C.2.6)
B ̇ n′
2 (t) = − i Ω12
2 ei(∆+ωz)t ∑
n
Bn
1 (t)eiωz(n′−n)tUn′n(η12) (C.2.7)
− i Ω32
2 ei(∆+δ)t ∑
n′′
B n′′
3 (t)eiωz(n′−n′′)tUn′n′′ (η32)
B ̇ n′′
3 (t) = − i Ω3∗2
2 e−i(∆+δ)t ∑
n′
Bn′
2 (t)e−iωz(n′−n′′)tUn′′n′ (−η32), (C.2.8)
where
ηi2 =ki2 · z0, i = 1, 3. (C.2.9)
Assuming that the coefficients B1n and Bn′′
3 change on a timescale much longer than
∆−1, we can integrate Eq. (C.2.7) with B1n and Bn′′
3 constant. The expression obtained
for Bn′
2 can then be inserted into Eqs. (C.2.6) and (C.2.8), which, under the assumption
∆ |Ω12|, |Ω32|, |δ| , ωz, (C.2.10)
yields
B ̇ n
1 (t) =i |Ω12|2
4∆ Bn
1 (t) + i Ω1∗2Ω32
4∆ ei(δ−ωz)t ∑
n′′
B n′′
3 (t)eiωz(n−n′′)tUnn′′ (−η) (C.2.11)
B ̇ n′′
3 (t) =i Ω12Ω3∗2
4∆ e−i(δ−ωz)t ∑
n
Bn
1 (t)e−iωz(n−n′′)tUn′′n(η) + i |Ω32|2
4∆ Bn′′
3 (t), (C.2.12)
where
η = η12 − η32. (C.2.13)

182 Appendix C - Sideband cooling – quantum Monte Carlo simulations
These solutions are consistent with the assumption that B1n and Bn′′
3 change much slower
than ∆−1. From the definition in Eq. (C.2.4), it follows that the original coefficients Cin evolve as:
C ̇ n
1 (t) = − i
(
nωz − |Ω12|2
4∆
)
Cn
1 (t) + i Ω∗Raman
4 eiωt ∑
n′′
C n′′
3 (t)Unn′′ (−η) (C.2.14)
C ̇ n′
2 (t) = − i
( E2
ħ + n′ωz
)
C n′
2 (t) (C.2.15)
C ̇ n′′
3 (t) = − i
( E3
ħ + n′′ωz − |Ω32|2
4∆
)
C n′′
3 (t) + i ΩRaman
4 e−iωt ∑
n
Cn
1 (t)Un′′n(η),
(C.2.16)
where
ω = ω12 − ω32. (C.2.17)
For the pumping transition, it immediately follows from the time-dependent Schro ̈dinger equation with H = Hpump that
C ̇ n′
2 (t) = −iΩpumpe−iωpumpt ∑
n′′
Cn
3 (t)Un′n′′ (ηpump) (C.2.18)
C ̇ n′′
3 (t) = −iΩ∗
pumpeiωpumpt ∑
n′
C n′
2 (t)Un′′n′ (−ηpump). (C.2.19)
Now, combining Eqs. (C.2.18) and (C.2.19) with Eqs. (C.2.14)–(C.2.16), the full coherent time development of the coefficients are obtained. Following the Monte Carlo
wavefunction method an extra term, −ΓCn′
2 /2, is added to C ̇ n′
2 to include spontaneous
decay. The quickly oscillating terms e±iωt and e±iωpumpt can be removed by introducing
the coefficients C ̃1n = C1neiωzt, C ̃n′
2 = Cn′
2 ei(E2/ħ+δ)t and C ̃n′′
3 = Cn′′
3 ei(E3/ħ+δ)t, which
finally yields Eqs. (3.5.6)–(3.5.8).

183
Bibliography
[1] D. Leibfried, R. Blatt, C. Monroe, and D. Wineland, Rev. Mod. Phys. 75, 281 (2003).
[2] P. W. Shor, SIAM J. Comput. 26, 1484 (1997).
[3] L. K. Grover, Phys. Rev. Lett. 79, 325 (1997).
[4] J. I. Cirac and P. Zoller, Phys. Rev. Lett. 74, 4091 (1995).
[5] J. J. Bollinger, W. M. Itano, D. J. Wineland, and D. J. Heinzen, Phys. Rev. A 54, R4649 (1996).
[6] Physics World, Special Issue on Quantum Information, 03/98.
[7] T. Laustsen, Ph.D. thesis, Department of Physics and Astronomy, University of Aarhus, Denmark, 2003.
[8] A. Einstein, B. Podolsky, and N. Rosen, Phys. Rev. 47, 777 (1935).
[9] C. A. Sackett et al., Nature 404, 256 (2000).
[10] A. Aspect, J. Dalibard, and G. Roger, Phys. Rev. Lett. 49, 1804 (1982).
[11] A. Rauschenbeutel et al., Science 288, 2024 (2000).
[12] B. Julsgaard, A. Kozhekin, and E. S. Polzik, Nature 413, 400 (2001).
[13] F. Schmidt-Kaler et al., Nature 422, 408 (2003).
[14] D. Leibfried et al., Nature 422, 412 (2003).
[15] S. Gulde et al., Nature 421, 48 (2003).
[16] Q. A. Turchette et al., Phys. Rev. Lett. 81, 3631 (1998).
[17] M. A. Rowe et al., Nature 409, 791 (2001).
[18] M. A. Nielsen and I. L. Chuang, Quantum Computation and Quantum Information (Cambridge University Press, Cambridge, 2000).
[19] A. Steane, Appl. Phys. B. 64, 623 (1997).

184 BIBLIOGRAPHY
[20] H. J. Metcalf and P. van der Straten, Laser Cooling and Trapping (Springer-Verlag, New York, 1999).
[21] P. W. Milonni and J. H. Eberly, Lasers (John Wiley & Sons, New York, 1988).
[22] B. H. Bransden and C. J. Joachain, Physics of Atoms and Molecules (Longman Scientific & Technical, England, 1983).
[23] L. Allen and J. H. Eberly, Optical resonance and two-level atoms (Dover Publications, New York, 1975).
[24] D. Wineland et al., J. Res. Natl. Inst. Stand. Technol. 103, 259 (1998).
[25] D. James, Appl. Phys. B 66, 181 (1998).
[26] The Nobel Foundation, Press release, http://www.nobel.se.
[27] T. H ̈ansch and A. Schawlow, Opt. Comm. 13, 68 (1975).
[28] D. J. Wineland and H. Dehmelt, Bull. Am. Phys. Soc. 20, 637 (1975).
[29] D.J.Wineland and W. M. Itano, Phys. Rev. A 20, 1521 (1979).
[30] C. Cohen-Tannoudji, Atomic motion in laser light (Les Houches, Session LIII, editors J. Dalibard, J.-M- Raimond and J. Zinn-Justin, 1990).
[31] D. Reiss, A. Lindner, and R. Blatt, Phys. Rev. A 54, 5133 (1996).
[32] I. Siemers et al., Europhys. Lett. 18, 139 (1992).
[33] D. Enzer et al., Phys. Rev. Lett. 85, 2466 (2000).
[34] H. Rohde et al., J. Opt. B: Quantum Semiclass. Opt. 3, S34 (2001).
[35] C. Monroe et al., Phys. Rev. Lett. 75, 4011 (1995).
[36] F. Diedrich, J. Bergquist, W. Itano, and D. J. Wineland, Phys. Rev. Lett. 62, 403 (1989).
[37] C. Roos et al., Phys. Rev. Lett. 83, 4713 (1999).
[38] E. Peik et al., Phys. Rev. A 60, 439 (1999).
[39] B. E. King et al., Phys. Rev. Lett. 81, 1525 (1998).
[40] S. Hamann et al., Phys. Rev. Lett. 80, 4149 (1998).
[41] I. Bouchoule, M. Morinaga, C. Salomon, and D. S. Petrov, Phys. Rev. A 65, 033402 (2002).
[42] V. Vuletic, C. Chin, A. J. Kerman, and S. Chu, Phys. Rev. Lett. 81, 5768 (1998).
[43] H. Perrin et al., Europhys. Lett. 46, 141 (1999).

BIBLIOGRAPHY 185
[44] G. Morigi, J. Eschner, and C. H. Keitel, Phys. Rev. Lett. 85, 4458 (2000).
[45] C. F. Roos et al., Phys. Rev. Lett. 85, 5547 (2000).
[46] F. Schmidt-Kaler et al., Appl. Phys. B 73, 807 (2001).
[47] S. Stenholm, Rev. Mod. Phys. 58, 699 (1986).
[48] J. Javanainen and S. Stenholm, Appl. Phys. 24, 151 (1981).
[49] M. Lindberg and S. Stenholm, J. Phys. B: At. Mol. Phys. 17, 3375 (1984).
[50] J. Javanainen, M. Lindberg, and S. Stenholm, J. Opt. Soc. Am. B 1, 111 (1984).
[51] M. Lindberg, J. Phys. B: At. Mol. Phys. 17, 2129 (1984).
[52] A. Corney, Atomic and Laser Spectroscopy (Clarendon Press, Oxford, 1977), chapter 5.2.2.
[53] R. Cline, J. Miller, M. Matthews, and D. Heinzen, Opt. Lett. 19, 207 (1994).
[54] I. Marzoli, J. I. Cirac, R. Blatt, and P. Zoller, Phys. Rev. A 49, 2771 (1994).
[55] M. Lindberg and J. Javanainen, J. Opt. Soc. Am. B 3, 1008 (1986).
[56] D. Leibfried, private communication, 2000.
[57] J. I. Cirac, R. Blatt, P. Zoller, and W. Phillips, Phys. Rev. A 46, 2668 (1992).
[58] H. Perrin, A. Kuhn, I. Bouchoule, and C. Salomon, Europhys. Lett. 42, 395 (1998).
[59] K. Mølmer, Y. Castin, and J. Dalibard, J. Opt. Soc. Am. B 10, 524 (1993).
[60] K. Mølmer and Y. Castin, Quantum Semiclass. Opt. 8, 49 (1996).
[61] D. M. Meekhof et al., Phys. Rev. Lett. 76, 1796 (1996).
[62] K. Bergmann, H. Theuer, and B. W. Shore, Rev. Mod. Phys. 70, 1003 (1998).
[63] H. Dehmelt, Bull. Am. Phys. Soc. 20, 60 (1975).
[64] R. J. Hughes et al., Fortschr. Phys. 46, 329 (1998).
[65] D. M. Lucas et al., Phil. Trans. R. Soc. Lond. A 361, 1401 (2003).
[66] M. P. Fewell, B. W. Shore, and K. Bergmann, Aust. J. Phys. 50, 281 (1997).
[67] U. Gaubatz, P. Rudecki, S. Schiemann, and K. Bergmann, J. Chem. Phys. 92, 5363 (1990).
[68] M. Weitz, B. C. Young, and S. Chu, Phys. Rev. A 50, 2438 (1994).
[69] G. G. Grigoryan and Y. T. Pashayan, Opt. Comm. 198, 107 (2001).

186 BIBLIOGRAPHY
[70] V. I. Romanenko and L. P. Yatsenko, Opt. Comm. 140, 231 (1997).
[71] F. K. Jensen, Masters thesis, in preparation.
[72] B. W. Shore, J. Martin, M. P. Fewell, and K. Bergmann, Phys. Rev. A 52, 566 (1995).
[73] J. Martin, B. W. Shore, and K. Bergmann, Phys. Rev. A 52, 583 (1995).
[74] J. Martin, B. W. Shore, and K. Bergmann, Phys. Rev. A 54, 1556 (1996).
[75] P. Marte, P. Zoller, and J. L. Hall, Phys. Rev. A 44, R4118 (1991).
[76] L. S. Goldner et al., Phys. Rev. Lett. 72, 997 (1994).
[77] K. Mølmer and A. Sørensen, Phys. Rev. Lett. 82, 1835 (1999).
[78] A. Sørensen and K. Mølmer, Phys. Rev. Lett. 82, 1971 (1999).
[79] D. P. DiVincenzo, Phys. Rev. A 51, 1015 (1995).
[80] A. M. Childs and I. L. Chuang, Phys. Rev. A 63, 012306 (2000).
[81] A. Sørensen and K. Mølmer, Phys. Rev. A 62, 022311 (2000).
[82] F. Mintert and C. Wunderlich, Phys. Rev. Lett. 87, 257904 (2001).
[83] C. Wunderlich et al., J. Phys. B: At. Mol. Opt. Phys. 36, 1063 (2003).
[84] C. Monroe et al., Phys. Rev. A 55, R2489 (1997).
[85] B. DeMarco et al., Phys. Rev. Lett. 89, 267901 (2002).
[86] D. Jonathan, M. B. Plenio, and P. L. Knight, Phys. Rev. A 62, 042307 (2000).
[87] J. Dalibard and C. Cohen-Tannoudji, J. Opt. Soc. Am. B 2, 1707 (1985).
[88] D. Jonathan and M. B. Plenio, Phys. Rev. Lett. 87, 127901 (2001).
[89] D. Kielpinski, C.Monroe, and D. Wineland, Nature 417, 709 (2002).
[90] M. D. Barrett et al., Phys. Rev. A 68, 042302 (2003).
[91] D. Kielpinski et al., Phys. Rev. A 61, 032310 (2000).
[92] M. A. Rowe et al., Quant. Inform. Comp. 2, 257 (2002).
[93] B. B. Blinov et al., Phys. Rev. A 65, 040304(R) (2002).
[94] P. Bowe et al., Phys. Rev. Lett. 82, 2071 (1999).
[95] J. A. Jones, Phil. Trans. R. Soc. London ser. A 361, 1429 (2003).
[96] D. Kielpinski et al., Science 291, 1013 (2001).

BIBLIOGRAPHY 187
[97] A. M. Steane, Nature 399, 124 (1999).
[98] A. M. Steane, Phys. Rev. A 68, 042322 (2003).
[99] R. Grimm, M. Weidemu ̈ller, and Y. B. Ovchinnikov, Adv. At. Mol. Opt. Phys. 42, 95 (2000).
[100] M. O. Scully and M. S. Zubairy, Quantum Optics (Cambridge University Press, Cambridge, 1997).
[101] P. Carruthers and M. M. Nieto, Am. J. Phys. 7, 537 (1965).
[102] M. Sasura and A. M. Steane, Phys. Rev. A 67, 062318 (2003).
[103] N. Schlosser, G. Reymons, I. Protsenko, and P. Grangier, Nature 411, 1024 (2001).
[104] J. J. Garcia-Ripoll, P. Zoller, and J. I. Cirac, Phys. Rev. Lett. 91, 157901 (2003).
[105] Q. A. Turchette et al., Phys. Rev. A 61, 063418 (2000).
[106] H. C. N ̈agerl et al., Phys. Rev. A 60, 145 (1999).
[107] D. Leibfried, Phys. Rev. A 60, R3335 (1999).
[108] NIST Atomic Spectra Database, http://physics.nist.gov.
[109] C. E. Moore, Atomic Energy Levels (National Bureau of Standards, Washington, 1952), Vol. II.
[110] C. E. Moore, Atomic Energy Levels (National Bureau of Standards, Washington, 1958), Vol. III.
[111] A. Lindga ̊rd and S. Nielsen, Atomic Data and Nuclear Data Tables 19, 533 (1977).
[112] C. A. Schrama, E. Peik, W. W. Smith, and H. Walther, Opt. Comm. 101, 32 (1993).
[113] M. Abramowitz and I. A. Stegun, Handbook of Mathematical Functions, 9. ed. (Dover Publications, New York, 1965).
[114] A. Brøner, Masters thesis, Institute of Physics and Astronomy, University of Aarhus, 2000.
[115] P. Ghosh, Ion Traps (Clarendon Press, Oxford, 1995).
[116] M. Drewsen and A. Brøner, Phys. Rev. A 62, 045401 (2000).
[117] S. K. Lamoreaux, Phys. Rev. A 56, 4970 (1997).
[118] N. W. Ashcroft and N. D. Mermin, Solid State Physics (Saunders College Publishing, USA, 1976).

188 BIBLIOGRAPHY
[119] K. Mølhave, Masters thesis, Institute of Physics and Astronomy, University of Aarhus, 2000.
[120] N. Kjærgaard, PhD Thesis, Institute of Physics and Astronomy, University of Aarhus, 2001.
[121] D. R. Denison, J. Vac. Sc. Tech. 8, 266 (1971).
[122] R. Jones, D. Gerlich, and S. Anderson, Rev. Sci. Instrum. 68, 3357 (1997).
[123] C. D. Bruun, Masters thesis, Institute of Physics and Astronomy, University of Aarhus, 1998.
[124] T. H ̈ansch and B. Couillaud, Opt. Comm. 35, 441 (1980).
[125] R. W. P. Drever et al., Appl. Phys. B. 31, 97 (1983).
[126] P. Herskind, Intensity stabilization of a frequency doubled Ti:Sapphire laser, Bachelor project report, 2003.
[127] R. Ohmukai et al., Jpn. J. Appl. Phys. 33, 311 (1994).
[128] A. M. Thommesen, Master’s thesis, Institute of Physics and Astronomy, University of Aarhus, Denmark, 2000.
[129] N. Kjærgaard et al., Appl. Phys. B. 71, 207 (2000).
[130] J. J. T. Lindballe, Masters thesis, Institute of Physics and Astronomy, University of Aarhus, 2003.
[131] H. C. Na ̈gerl et al., Appl. Phys. B 66, 603 (1998).
[132] D. Kleppner and R. J. Kolenkow, An introduction to mechanics (McGraw-Hill International Editions, Singapore, 1978).
[133] J. L. Sørensen, manuscript in preparation.
[134] D. J. Berkeland et al., J. Appl. Phys. 83, 5025 (1998).
[135] T. Hasegawa and K. Uehara, Appl. Phys. B. 61, 159 (1995).
[136] T. Nakamura et al., J. Appl. Phys. 89, 2922 (2001).
[137] D. R. Lide, Handbook of Chemistry and Physics, 72 ed. (CRC press, Boca Raton, 1972).
[138] R. Alheit et al., Appl. Phys. B. 61, 277 (1995).
[139] P. H. Dawson and N. R. Whetten, Int. J. Mass. Spect. Ion Phys. 2, 45 (1969).
[140] F. v. Busch and W. Paul, Z. Physik 164, 588 (1961).

BIBLIOGRAPHY 189
[141] J. Javanainen, in Fundamentals of Laser Interactions, edited by F. Ehlotzky (Lecture Notes in Physics vol. 229, Springer, Berlin, 1985).
[142] T. Sauter et al., Europhys. Lett. 7, 317 (1988).
[143] R. G. DeVoe and C. Kurtsiefer, Phys. Rev. A 65, 063407 (2002).
[144] I. S. Vogelius, L. B. Madsen, and M. Drewsen, Phys. Rev. Lett. 89, 173003 (2002).
[145] K. Mølhave and M. Drewsen, Phys. Rev. A 62, 011401(R) (2000).
[146] P. Hodgson, E. Gadioli, and E. G. Erba, Introductory Nuclear Physics (Clarendon Press, Oxford, 1997).
[147] F. Schmidt-Kaler et al., J. Phys. B: At. Mol. Opt. Phys. 36, 623 (2003).
[148] E. Bie ́mont and C. J. Zeippen, Comments At. Mol. Phys. 33, 29 (1996).
[149] A. A. Madej and J. E. Bernard, in Frequency Measurement and Control, Topics Appl. Phys., edited by A. N. Luiten (Springer Verlag, Berlin Heidelberg, 2001), Vol. 79, pp. 153–194.
[150] M. Knoop et al., Eur. Phys. J. D, DOI:10.1140/epjd/e2004-00022-6 (2004).
[151] L. M. Hobbs et al., Astrophys. J. 334, L41 (1988).
[152] C. J. Zeippen, Astron. Astrophys. 229, 248 (1990).
[153] P. A. Barton et al., Phys. Rev. A 62, 032503 (2000).
[154] M. Block, O. Rehm, P. Seibert, and G. Werth, Eur. Phys. J. D 7, 461 (1999).
[155] J. Lidberg et al., J. Phys. B: At. Mol. Opt. Phys. 32, 757 (1999).
[156] G. Ritter and U. Eichmann, J. Phys. B: At. Mol. Opt. Phys. 30, L141 (1997).
[157] T. Gudjons, B. Hilbert, P. Seibert, and G. Werth, Europhys. Lett. 33(8), 595 (1996).
[158] M. Knoop, M. Vedel, and F. Vedel, Phys. Rev. A 52, 3763 (1995).
[159] F. Arbes et al., Z. Phys. D. 29, 159 (1994).
[160] C. J. S. Donald et al., Europhys. Lett. 51, 388 (2000).
[161] S.-S. Liaw, Phys. Rev. A 51, R1723 (1995).
[162] T. Brage et al., Phys. Scr. 48, 533 (1993).
[163] N. Vaeck, M. Godefroid, and C. Froese Fischer, Phys. Rev. A 46, 3704 (1992).
[164] C. Guet and W. R. Johnson, Phys. Rev. A 44, 1531 (1991).
[165] M. A. Ali and Y.-K. Kim, Phys. Rev. A 38, 3992 (1988).

190 BIBLIOGRAPHY
[166] R. J. Barlow, Statistics (Wiley, New York, 1989).
[167] W. T. Eadie et al., Statistical methods in experimental physics (North-Holland, Amsterdam, 1971).
[168] M. A. Stephens, in Goodness-of-fit techniques (Marcel Dekker, New York, 1986), p. 97, edited by R. B. D’Agostino and M. A. Stephens.
[169] M. Knoop, M. Vedel, and F. Vedel, Phys. Rev. A 58, 264 (1998).
[170] R. G. DeVoe and R. G. Brewer, Phys. Rev. Lett. 76, 2049 (1996).
[171] J. H. Eberly and P. W. Milonni, Encyclopedia of Physical Science and Technology 11, 471 (1987).
[172] W. H. Press, S. A. Teukolsky, W. T. Vetterling, and B. P. Flannery, Numerical Recipes in C, 2nd ed. (Cambridge University Press, Cambridge, 1992).
[173] K. Moler, D. Weiss, M. Kasevich, and S. Chu, Phys. Rev. A 45, 342 (1992).

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:21.263Z
- **Text Length:** 453214 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 202 of 202
