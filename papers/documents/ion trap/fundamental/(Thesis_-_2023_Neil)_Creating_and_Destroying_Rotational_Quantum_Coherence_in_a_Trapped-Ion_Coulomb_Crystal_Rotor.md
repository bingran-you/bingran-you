# PDF Document: (Thesis - 2023 Neil) Creating and Destroying Rotational Quantum Coherence in a Trapped-Ion Coulomb Crystal Rotor.pdf

**File Path:** (Thesis - 2023 Neil) Creating and Destroying Rotational Quantum Coherence in a Trapped-Ion Coulomb Crystal Rotor.pdf

**Processed Date:** 2026-02-10T18:14:42.187Z

**File Size:** 22160.94 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 398

**Title:** (Thesis - 2023 Neil) Creating and Destroying Rotational Quantum Coherence in a Trapped-Ion Coulomb Crystal Rotor

**Collection:** Ion Trap > Fundamental

---

## Extracted Text Content

Creating and Destroying Rotational Quantum Coherence in a Trapped-Ion Coulomb Crystal Rotor
by Neil Glikin
A dissertation submitted in partial satisfaction of the requirements for the degree of Doctor of Philosophy in Physics in the Graduate Division of the
University of California, Berkeley
Committee in charge: Professor Hartmut H¨aﬀner, Chair
Professor Holger Mu¨ller Assistant Professor Michael Zu¨rch
Fall 2023

Creating and Destroying Rotational Quantum Coherence in a Trapped-Ion Coulomb Crystal Rotor
Copyright 2023 by
Neil Glikin

1
Abstract
Creating and Destroying Rotational Quantum Coherence in a Trapped-Ion Coulomb Crystal Rotor
by
Neil Glikin
Doctor of Philosophy in Physics
University of California, Berkeley
Professor Hartmut H¨aﬀner, Chair
This work presents the techniques used to create a freely rotating trapped-ion Coulomb crystal and to establish quantum coherent control over this rotational motion. This is done using a highly symmetric surface ion trap with circular trapping electrodes. We derive how a trapped-ion rotor couples to coherent laser light, including the motional transition sideband spectrum and the corresponding coupling strengths. We also show how rotational motion modiﬁes the coupling of the usual trapped-ion vibr-
ational motion to laser light. In our experiments, light which is coupled to the rotor’s motion propagates nearly normal to the trap surface, which is thus also sensitive to vibrational motion in this direction. We thus also present the design of and benchmark the performance of a Faraday cage which has successfully protected this motion from harmful electric ﬁeld noise.
A prerequisite to clean, coherent manipulation of the rotational quantum state of our rotor is preparing it in a rapidly rotating state with a small uncertainty in its angular momentum. This rotational state preparation is done with by accelerating a rotating quadrupole ﬁeld via time-dependent voltages applied directly to the trap electrodes, resulting in rotation frequencies of 100’s of kHz with uncertainties within 1 kHz. We show how this procedure allows for creation of superpositions of angula-
r momentum states, and present considerations and measurements pertaining to optimizing this procedure. We ﬁnd that the coherence of these superpositions is limited by angular momentum diﬀusion processes induced by coupling to noisy electric ﬁeld gradients. Careful measurements of these rotor decoherence dynamics demonstrate close agreement with the corresponding theory for the ﬁrst time.
Finally, we present a proposal to use angular momentum superpositions of our trapped ion rotor as an interferometer in which we may exchange the positions of two ions. This experiment would serve as a test of the symmetrization of their mutual quantum state, and would be sensitive to the phase of the exchange operation without requiring the two particles to coincide spatially. We interpret the physical meaning of this exchange phase measurement and present detailed considerations of potential erro-
rs.

i
To my parents, whose lack of understanding of my career never presented an impediment to their encouragement, appreciation, and pride in it.

ii
Acknowledgments
I ﬁrst need to thank my advisor and mentor, Hartmut. I joined the group interested in the cool and precise laser-based science being done in the lab, but also insecure about having no background whatsoever in AMO physics. Hartmut immediately assured me that this was not a problem at all, and that I would learn as I go along. Throughout my PhD, he has balanced my urge to dig deeply into a question with suggestions on how to make concrete steps towards actually completing a project, coupled with opt-
imism and encouragement that those steps are feasible. In this way, he has always kept me moving forward in my graduate school work by being an encouraging mentor, and never by being a demanding boss. As is inevitable in science and especially in graduate school, I have had my fair share of setbacks during my PhD, and Hartmut has always responded to these by reiterating his conﬁdence in my abilities as a scientist. I will be able to carry this conﬁdence forward into my career, and therefore deserv-
es a lifetime of thanks.
My coworkers in the lab, particularly those I worked with directly, have created a collaborative environment in which I had the pleasure of working. Bo¨rge and Erik handed to me a beautifully functional experiment which has miraculously remained under vacuum throughout my PhD. I couldn’t have asked for a better postdoc to work with during my transition period from junior to senior graduate student than Sara, who simultaneously mentored me and worked alongside me in the lab, especially in the most -
discouraging moments of having to make yet another noise measurement. Ryan and Neha have enthusiastically shown up to help push the experiment to ﬁnally getting some new results, and to make sure the experiment lives on into the future.
My theory collaborators Ben and Klaus also deserve a front-and-center thank-you for being so central to my PhD. They graciously welcomed me during my visit to Duisburg and enthusiastically took on the project that became the primary result of my PhD thesis. Without them, my results which impressively validate their rotor decoherence theory would be little more than a confusing measurement.
Also deserving of thanks are the various visiting students who gave me a reason to step back and think about how to explain the science to someone who isn’t just expressing curiosity for ﬁve minutes, and who also made real contributions to the project: Kai K., Kai E., Lorenzo, and Dana. Furthermore, Nadav, for whom the in-lab portion of his visit was cut short by the COVID-19 pandemic, and Shijia, who exceeded my expectations on every project, and whose opportunity to rejoin as a graduate student -
was unfairly stolen supposedly in the name of national security.
Sometimes, the setbacks encountered in doing science are overcome with the help of the heroic work done by past researchers who anticipated them. For this, I wholeheartedly thank Tony and Crystal, who before my time in graduate school, built the pieces of the Faraday cage that eventually brought my experiment from an electrical noise wild goose chase to a functioning science platform. And Ryan and Neha, who were instrumental in modifying and assembling those pieces.

iii
Outside the lab, I was privileged to have a strong support network of friends and family. To my parents, thank you for always being proud of me, and for reminding me to look at the bigger picture and appreciate where I am and what I’ve accomplished. To Jazmin, thank you for being an unbelievably rock solid support and providing a sense of stability, contentment, and even joy in my most stressful times. To my siblings Andrew and Nicole, thank you for being such solid supports and welcoming me into -
your homes even when I had to shut myself away in a spare room to get some work done. Thank you to my graduate school friends, especially Pra and Donny who have stuck with me from the very beginning of graduate school to the very end. Thank you to my roommates Zach and Ryan for providing an understanding ear both for gushing and ranting about my work. And ﬁnally, thank you to my childhood friends, Azar and the guise, for maintaining such strong connections over the years despite the geographic dis-
tance, and for always being able to make me feel like a kid again, even when I was lost deep in the maze of trying to become Dr. Glikin.

iv

Contents

Contents

iv

List of Figures

viii

List of Tables

x

1 Introduction

1

2 Trapping and Controlling the Quantum State of Atomic Ions

3

2.1 Motivation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3

2.2 Paul traps . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3

2.2.1 Operating principle . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3

2.2.2 Motion of a single ion in a Paul trap . . . . . . . . . . . . . . . . . . 4

2.2.3 Surface ion traps . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6

2.2.4 The ring trap . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7

2.3 Theory of light-atom interactions . . . . . . . . . . . . . . . . . . . . . . . . 8

2.3.1 Light . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9

2.3.2 Atoms . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 10

2.3.3 Coupling of atoms to light . . . . . . . . . . . . . . . . . . . . . . . . 12

2.4 Light-atom interaction dynamics . . . . . . . . . . . . . . . . . . . . . . . . . 16

2.4.1 Coherent interactions, excluding ion motion . . . . . . . . . . . . . . 16

2.4.2 Incoherent interactions, excluding ion motion . . . . . . . . . . . . . 18

2.4.3 Coherent interactions, including ion motion . . . . . . . . . . . . . . 19

2.4.4 Incoherent interactions, including ion motion . . . . . . . . . . . . . . 23

2.5 The 40Ca+ ion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 24

2.5.1 Level structure . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 25

2.5.2 Lasers . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 26

2.6 Useful light-atom processes for quantum state engineering in 40Ca+ . . . . . 26

2.6.1 Optical pumping . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 26

2.6.2 Cooling . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 27

2.6.3 Coherent quantum state operations . . . . . . . . . . . . . . . . . . . 30

2.6.4 State readout . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 30

v

2.6.5 Quantum state experiments . . . . . . . . . . . . . . . . . . . . . . . 31

3 The trapped-ion planar quantum rotor

33

3.1 Single ions with a single vibrational mode . . . . . . . . . . . . . . . . . . . 34

3.2 N -ion crystals with 3N vibrational modes . . . . . . . . . . . . . . . . . . . 34

3.2.1 Normal modes of motion . . . . . . . . . . . . . . . . . . . . . . . . . 34

3.2.2 Interaction with a coherent laser ﬁeld . . . . . . . . . . . . . . . . . . 36

3.3 2-ion crystals in a planar rigid rotor . . . . . . . . . . . . . . . . . . . . . . . 38

3.3.1 Derivation of the modes of motion . . . . . . . . . . . . . . . . . . . . 38

3.3.2 Quantum mechanics of the planar rigid rotor mode . . . . . . . . . . 41

3.3.3 Coupling strengths of interaction with a coherent laser ﬁeld . . . . . . 42

3.3.4 Rabi oscillations of rotational sideband transitions . . . . . . . . . . . 47

3.4 N -ion crystals in a planar rigid rotor with vibrational motion . . . . . . . . . 47

3.4.1 The position operator . . . . . . . . . . . . . . . . . . . . . . . . . . 48

3.4.2 The interaction-picture Hamiltonian . . . . . . . . . . . . . . . . . . 51

3.4.3 Approximations of the matrix elements in special cases . . . . . . . . 52

3.4.4 Summary . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 55

3.5 2-ion crystals in a planar non-rigid rotor . . . . . . . . . . . . . . . . . . . . 55

3.5.1 Centrifugal distortion . . . . . . . . . . . . . . . . . . . . . . . . . . . 57

3.5.2 Non-rigid corrections to individual modes . . . . . . . . . . . . . . . . 58

3.5.3 Energy eigenspectrum . . . . . . . . . . . . . . . . . . . . . . . . . . 60

3.5.4 Corrections to experimentally relevant rotational parameters . . . . . 60

4 Experimental setup

64

4.1 General instrumentation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 64

4.1.1 Lasers . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 64

4.1.2 Acousto-optic modulator systems . . . . . . . . . . . . . . . . . . . . 65

4.1.3 Other optics . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 67

4.1.4 Experiment control electronics . . . . . . . . . . . . . . . . . . . . . . 67

4.1.5 Trapping electronics . . . . . . . . . . . . . . . . . . . . . . . . . . . 67

4.1.6 Calcium ion production . . . . . . . . . . . . . . . . . . . . . . . . . 68

4.1.7 Magnetic ﬁeld . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 68

4.1.8 Software . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 69

4.2 Instrumentation for ion rotation . . . . . . . . . . . . . . . . . . . . . . . . . 69

4.2.1 Electronics for ion rotation . . . . . . . . . . . . . . . . . . . . . . . . 69

4.2.2 Vertical 729 nm and 866 nm laser beams . . . . . . . . . . . . . . . . 71

4.3 Faraday cage . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 72

4.3.1 General philosophy . . . . . . . . . . . . . . . . . . . . . . . . . . . . 73

4.3.2 Electrical signals . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 73

5 Measuring and mitigating noise

76

5.1 Physics of trapped-ion motional heating . . . . . . . . . . . . . . . . . . . . 76

vi

5.1.1 Heating of diﬀerential modes of motion . . . . . . . . . . . . . . . . . 78 5.2 Measuring heating rates . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 79
5.2.1 Rabi method . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 79 5.2.2 Sideband ratio method . . . . . . . . . . . . . . . . . . . . . . . . . . 80 5.3 Origins of electric ﬁeld noise in trapped-ion experiments . . . . . . . . . . . 80 5.3.1 Surface noise . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 80 5.3.2 Technical noise . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 80 5.4 Relating technical noise spectrum measurements to the heating rate . . . . -
. 81 5.4.1 Converting measured noise power to voltage spectral density . . . . . 81 5.4.2 Converting voltage spectral density to electric ﬁeld spectral density . 82 5.4.3 Choosing reference points for measurement . . . . . . . . . . . . . . . 82 5.4.4 Comparing to heating rates . . . . . . . . . . . . . . . . . . . . . . . 83 5.5 Minimizing technical noise . . . . . . . . . . . . . . . . . . . . . . . . . . . . 85 5.6 Performance of the Faraday cage . . . . . . . . . . . . . . . . . . . . . . . . -
86

6 Creating superpositions of rotational states

88

6.1 Requirements for coherent operations . . . . . . . . . . . . . . . . . . . . . . 88

6.2 Rotational state preparation . . . . . . . . . . . . . . . . . . . . . . . . . . . 90

6.2.1 Generating the pinning potential . . . . . . . . . . . . . . . . . . . . 92

6.2.2 Preparing the rotation frequency . . . . . . . . . . . . . . . . . . . . 94

6.2.3 Minimizing the angular momentum spread . . . . . . . . . . . . . . . 97

6.3 The rotational spectrum . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 104

6.3.1 Choice of beam angle . . . . . . . . . . . . . . . . . . . . . . . . . . . 105

6.4 Rotational Rabi experiments . . . . . . . . . . . . . . . . . . . . . . . . . . . 106

6.4.1 Full 4-level dynamics . . . . . . . . . . . . . . . . . . . . . . . . . . . 107

6.4.2 Approximation as 2-level systems . . . . . . . . . . . . . . . . . . . . 110

6.4.3 Eﬀect of rotational state preparation quality . . . . . . . . . . . . . . 111

6.5 Rotational Ramsey experiments . . . . . . . . . . . . . . . . . . . . . . . . . 112

6.5.1 Rotational Ramsey dephasing . . . . . . . . . . . . . . . . . . . . . . 113

6.5.2 Rotational Ramsey rephasing . . . . . . . . . . . . . . . . . . . . . . 115

7 Decoherence of rotational superpositions

116

7.1 Protocol for measuring coherence of rotational superpositions . . . . . . . . . 116

7.1.1 The rotational coherence measurement protocol as a measure of pure

superpositions of angular momentum eigenstates . . . . . . . . . . . . 118

7.1.2 The 4-level contrast oscillation eﬀect . . . . . . . . . . . . . . . . . . 118

7.2 Potential sources of rotational decoherence . . . . . . . . . . . . . . . . . . . 121

7.2.1 Electronic coherence . . . . . . . . . . . . . . . . . . . . . . . . . . . 121

7.2.2 Slowly drifting residual static quadrupole ﬁelds . . . . . . . . . . . . 122

7.2.3 Rotational coupling to stretch and vertical rocking motion . . . . . . 123

7.2.4 Trap frequency instability . . . . . . . . . . . . . . . . . . . . . . . . 124

7.2.5 Angular momentum diﬀusion . . . . . . . . . . . . . . . . . . . . . . 125

vii

7.3 Angular momentum diﬀusion . . . . . . . . . . . . . . . . . . . . . . . . . . 126 7.3.1 The ion-ﬁeld interaction Hamiltonian . . . . . . . . . . . . . . . . . . 126 7.3.2 The diﬀusion coeﬃcient . . . . . . . . . . . . . . . . . . . . . . . . . 127 7.3.3 Comparison to the heating rate of rocking modes . . . . . . . . . . . 129 7.3.4 Measurements of angular momentum diﬀusion . . . . . . . . . . . . . 130 7.3.5 Noise injection . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 131 7.3.6 -
Rotational friction . . . . . . . . . . . . . . . . . . . . . . . . . . . . 133
7.4 Rotational decoherence due to angular momentum diﬀusion . . . . . . . . . 134 7.4.1 Theory: Orientational decoherence . . . . . . . . . . . . . . . . . . . 134 7.4.2 Diﬀusion-induced decoherence of the trapped-ion rotor . . . . . . . . 135 7.4.3 Measurements . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 138 7.4.4 Ways to improve rotational coherence . . . . . . . . . . . . . . . . . . 142

8 The trapped-ion rotational interferometer

144

8.1 Identical quantum particles and exchange symmetry . . . . . . . . . . . . . . 144

8.1.1 The symmetrization postulate . . . . . . . . . . . . . . . . . . . . . . 145

8.1.2 Interpreting the concept of “indistinguishability” . . . . . . . . . . . 146

8.2 Making trapped ions indistinguishable in a quantum rotor . . . . . . . . . . 148

8.2.1 Symmetrization of a pinned two-ion crystal . . . . . . . . . . . . . . . 149

8.2.2 Symmetrization of a two-ion rotor . . . . . . . . . . . . . . . . . . . . 152

8.2.3 The transition from distinguishable to indistinguishable . . . . . . . . 154

8.3 The measurement protocol . . . . . . . . . . . . . . . . . . . . . . . . . . . . 155

8.3.1 The intuitive picture: position space . . . . . . . . . . . . . . . . . . 155

8.3.2 The formal picture . . . . . . . . . . . . . . . . . . . . . . . . . . . . 156

8.4 Experimental considerations . . . . . . . . . . . . . . . . . . . . . . . . . . . 163

8.4.1 Eﬀects which shift rotational transition frequencies . . . . . . . . . . 163

8.4.2 Observing the ∆θ = 2π revival . . . . . . . . . . . . . . . . . . . . . . 166

8.4.3 Observing the ∆θ = π exchange revival . . . . . . . . . . . . . . . . . 174

8.4.4 Measuring the exchange phase . . . . . . . . . . . . . . . . . . . . . . 175

8.4.5 On using more than two ions . . . . . . . . . . . . . . . . . . . . . . 179

9 Summary and Outlook

182

Bibliography

184

viii
List of Figures
2.1 Image and simulated pseudopotential of the ring trap . . . . . . . . . . . . . . . 7 2.2 Simulated two-level Rabi oscillations . . . . . . . . . . . . . . . . . . . . . . . . 18 2.3 Simulated vibrational sideband spectra . . . . . . . . . . . . . . . . . . . . . . . 22 2.4 Simulated thermal Rabi oscillations . . . . . . . . . . . . . . . . . . . . . . . . . 23 2.5 Level structure diagram of 40Ca+ . . . . . . . . . . . . . . . . . . . . . . . . . . 25
3.1 Normal modes of a two-ion Coulomb crystal . . . . . . . . . . . . . . . . . . . . 36 3.2 Normal modes of a two-ion Coulomb crystal which is allowed to rotate within one
plane . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 41 3.3 Geometry of a laser interacting with a two-ion rotor . . . . . . . . . . . . . . . . 43 3.4 Simulated sideband spectra for a rotor . . . . . . . . . . . . . . . . . . . . . . . 46 3.5 Simulated Rabi oscillations for a rotor . . . . . . . . . . . . . . . . . . . . . . . 48 3.6 Geometry of a laser interacting with a many-ion rotor . . . . . . . . . . . . . . . 49 3.7 Rovibrational coupling strengths . . -
. . . . . . . . . . . . . . . . . . . . . . . . 54
4.1 Photograph of the compact AOM setups. . . . . . . . . . . . . . . . . . . . . . . 65 4.2 Compact AOM bandwidth measurements . . . . . . . . . . . . . . . . . . . . . . 66 4.3 Voltages required for trap DC electrodes . . . . . . . . . . . . . . . . . . . . . . 69 4.4 Image and schematic of the rotation circuit . . . . . . . . . . . . . . . . . . . . . 70 4.5 Schematic of beams for 866 nm Doppler cooling . . . . . . . . . . . . . . . . . . 71 4.6 Photograph of the experimental setup with the Far-
aday cage. . . . . . . . . . . 72 4.7 Schematic of the electrical signals used in the experiment with respect to the
Faraday cage. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 74 4.8 Filter function of the cascaded low-pass ﬁlter used for the DC electrode signals. 74
5.1 Sample heating rate measurement . . . . . . . . . . . . . . . . . . . . . . . . . . 79 5.2 Example pairs of electrodes the the resulting electric ﬁelds . . . . . . . . . . . . 82 5.3 Measured noise spectra vs. heating rates . . . . . . . . . . . . . . . . . . . . . . 84 5.4 Groundings and lowering noise . . . . . . . . . . . . . . . . . . . . . . . . . . . . 85 5.5 Radiation lowering of Faraday cage . . . . . . . . . . . . . . . . . . . . . . . . . 86 5.6 Noise spectra and heating rates of Far-
aday cage . . . . . . . . . . . . . . . . . . 87
6.1 Schematic of the spin-up-and-release procedure . . . . . . . . . . . . . . . . . . 91

ix
6.2 Pinning voltage pattern . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 93 6.3 Rotation frequency vs. spin-up time . . . . . . . . . . . . . . . . . . . . . . . . 95 6.4 Simulated classical trajectories during rotational state preparation . . . . . . . . 96 6.5 Release process . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 97 6.6 Simulated angular momentum spread vs. release time and rocking mode temper-
ature . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 99 6.7 Rotor eigenspectrum vs. pinning potential strength . . . . . . . . . . . . . . . . 100 6.8 Numerical simulation of angular momentum spread versus time during release . 101 6.9 Angular momentum spread vs. spin-up time . . . . . . . . . . . . . . . . . . . . 103 6.10 Rotational sideband spectrum . . . . . . . . . . . . . . . . . . . . . . . . . . . . 104 6.11 Rotational sideband coupling strengths vs. be-
am angle . . . . . . . . . . . . . . 106 6.12 Rotational Rabi oscillations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 107 6.13 Energy levels coupled together in rotational Rabi experiments . . . . . . . . . . 109 6.14 Schematic spectrum for rotational sideband addressing . . . . . . . . . . . . . . 110 6.15 Measured rotational Rabi oscillations . . . . . . . . . . . . . . . . . . . . . . . . 111 6.16 Measured rotational Ramsey dephasing . . . . . . . . . . . . . . . . . . . . . . . -
114
7.1 Rotational decoherence measurements . . . . . . . . . . . . . . . . . . . . . . . 117 7.2 Rotational superposition state schematic . . . . . . . . . . . . . . . . . . . . . . 118 7.3 Rotational Ramsey contrast oscillations . . . . . . . . . . . . . . . . . . . . . . . 120 7.4 Electronic coherence measurement . . . . . . . . . . . . . . . . . . . . . . . . . 122 7.5 Measurement of trap frequency stability . . . . . . . . . . . . . . . . . . . . . . 125 7.6 Noisy quadrupole ﬁelds on a two-ion ro-
tor . . . . . . . . . . . . . . . . . . . . . 129 7.7 Angular momentum diﬀusion measurement . . . . . . . . . . . . . . . . . . . . . 130 7.8 Noise injection circuit . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 131 7.9 Diﬀusion vs. injected noise amplitude . . . . . . . . . . . . . . . . . . . . . . . . 132 7.10 Diﬀusion vs. injected noise frequency . . . . . . . . . . . . . . . . . . . . . . . . 133 7.11 Measurements of rotational friction . . . . . . . . . . . . . . . . . . . -
. . . . . . 134 7.12 Rotational decoherence measurement schematic with position-space picture . . . 136 7.13 Simulated rotational decoherence due to diﬀusion . . . . . . . . . . . . . . . . . 137 7.14 Rotational decoherence measurements . . . . . . . . . . . . . . . . . . . . . . . 139 7.15 Rotational decoherence vs. angular momentum diﬀusion . . . . . . . . . . . . . 140 7.16 Rotational decoherence vs. rotation frequency . . . . . . . . . . . . . . . . . . . 141
8.1 Indistinguishable and distinguishable pairs of identical particles entering a beamsplitter . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 147
8.2 Exchange symmetry of the relative modes of a pinned two-ion crystal . . . . . . 150 8.3 Exchange symmetry of the relative modes of a freely rotating two-ion crystal . . 153 8.4 Exchange symmetry of rotor potential eigenfunctions vs. pinning strength . . . 154 8.5 Position-space schematic of the exchange experiment . . . . . . . . . . . . . . . 156 8.6 Excitation and parity signal for the 2-ion rotor interference experiment . . . . . 162 8.7 Shifts to rotational transition frequencies . . . . .-
 . . . . . . . . . . . . . . . . . 164

x 8.8 Scaled decoherence rate versus scaled diﬀusion coeﬃcient . . . . . . . . . . . . . 168 8.9 Coherence time to revival time vs. experimental parameters . . . . . . . . . . . 170 8.10 Horizontal trap frequency vs. DC bias . . . . . . . . . . . . . . . . . . . . . . . 171
List of Tables
2.1 Electronic transition selection rules . . . . . . . . . . . . . . . . . . . . . . . . . 15 3.1 Normal mode structure and frequencies of a two-ion crystal . . . . . . . . . . . . 36 3.2 Relative coupling strengths of vibrational and rotational transitions . . . . . . . 56 8.1 Rotational interference experiment free evolution phases . . . . . . . . . . . . . 160

1
Chapter 1
Introduction
Trapped atoms have served as highly controllable realizations of quantum mechanical systems for decades. Their high degree of isolation from their environment allows quantum coherence to endure for experimentally accessible timescales, their small mass gives them resolvable quantized energy levels, and their ability to interact with visible laser light gives them a precise handle for controllably manipulating their quantum state. Trapped ions in particular furthermore make it possible to work with-
 small numbers of atoms at a time and aﬀord a high degree of controllability of their motion in the quantum regime. This quantum motion has proven to be a highly useful tool for fundamental tests of quantum mechanics, as well as for quantum simulation and quantum computation.
The work done in pursuit of my PhD thesis revolves around using a Coulomb crystals of trapped ions as a tool for simulating a quantum rotor. Typically, Paul traps conﬁne each ion to a well-deﬁned equilibrium position, about which it may vibrate with an amplitude that is much smaller than the distance between ions. In this work, on the other hand, we create a trapping potential which is highly isotropic within one plane, allowing the entire Coulomb crystal to freely rotate. This is a novel use of t-
he motion of trapped ions, and as such, has required the development and implementation of unique tools to prepare and control the rotational motion. We have used these tools to create superpositions of the quantized angular momentum states of the rotating Coulomb crystal and to carefully study the coherence of these superpositions. Our tools furthermore hold promise for performing interesting tests of fundamental physics with the rich properties of quantum rotors; in particular, we propose to use-
 a superposition of angular momenta to exchange a pair of ions with each other as a test of the symmetrization postulate using particles which never occupy the same space.
This document aims to provide documentation of the results and conclusions that I have reached over the course of my PhD work, as well as a guide for understanding the often-counterintuitive properties of the trapped-ion rotor within an experimentally useful framework.
The remainder of this thesis begins with an overview of general techniques for controlling the quantum state of trapped ions in Chapter 2. Here, special attention is paid to how trapped ions’ usual vibrational motion interacts coherently with a laser ﬁeld, as the nov-

CHAPTER 1. INTRODUCTION

2

elty of this work relies heavily on an analogous but novel understanding of how quantum rotational motion interacts with laser light. Chapter 3 continues on to actually apply these considerations to a trapped-ion rotor, demonstrating the ways in which rotational motion diﬀers from vibrational motion in the context of interacting coherently with a laser ﬁeld.
Chapter 4 describes the equipment used in the laboratory for conducting the experiments in this work. One particular piece of equipment, the Faraday cage, has proven pivotal in allowing the experiment to be functional. The considerations which informed its design and the decision to implement it are therefore expanded upon in Chapter 5, which also presents an evaluation of the Faraday cage’s performance in mitigating harmful electric-ﬁeld noise.
Chapter 6 discusses how the ion rotor properties established in Chapter 3 allow for coherent manipulation of rotational motion in an experimental context. It establishes the requirements for cleanly preparing rotational superpositions, the tools used to meet those requirements, and the considerations which go into optimizing the experiments. Chapter 7 details a study of the decoherence of rotational superpositions. It establishes the theory of how angular momentum diﬀusion leads to rotational deco-
herence. It also presents measurements which demonstrate that such diﬀusion indeed limits the rotational coherence in our experiment. These measurements are in close agreement with recently-established general theory work on rotor decoherence dynamics, constituting the ﬁrst validation of this theory. Finally, Chapter 8 presents a proposal for an experiment to use rotational superpositions to test the symmetrization postulate by exchanging a pair of ions. First, an interpretation of this experiment-
 as a test of fundamental physics is presented. This is followed by a detailing of considerations of how to bring the experiment into an operating regime which allows the exchange to be measured, possible error sources, and how to minimize them.

3
Chapter 2
Trapping and Controlling the Quantum State of Atomic Ions
2.1 Motivation
The experimental study of quantum mechanics requires a system which exhibits non-classical behavior that can be probed. Isolated atoms have long provided such a system, initially as beams and as gasses conﬁned within a glass cell. The idea of electromagnetically trapping atoms provided a further step in isolating them from unwanted interactions and in controlling their motion, especially in allowing the motion to be cooled into a quantum regime [1–3]. This both improves the coherence of laser-base-
d interactions with the atom’s electrons and allows the motion itself to be studied and used as a quantum mechanical degree of freedom. Ions in particular are especially susceptible to conﬁnement via their charge, allowing the use of electric ﬁelds, which are straightforward to generate experimentally, as the trapping mechanism. Two diﬀerent types of ion trapping mechanism are commonly used [4], the Penning trap [5], which uses a static electric ﬁeld and a static magnetic ﬁeld, and the Paul trap [-
6–8], which uses oscillating electric ﬁelds. This work uses a Paul trap.
2.2 Paul traps
2.2.1 Operating principle
An object may be trapped by means of applying a restoring force towards some equilibrium position. Speaking abstractly, this can be achieved with a potential featuring a point which is a local minimum in all directions. For trapping a charged particle, the most natural choice for creating a trapping mechanism is with electric ﬁelds. However, a static electric ﬁeld E must be related to a conservative potential Φ by E = −∇Φ, and in free space this potential must obey Laplace’s equation ∇2Φ = 0. This-
 forbids a potential minimum in any static electric ﬁeld.

CHAPTER 2. TRAPPING AND CONTROLLING THE QUANTUM STATE OF

ATOMIC IONS

4

The Paul trap utilizes the following solution to this apparent problem: the applied electric ﬁeld, rather than being static, is swept sinusoidally at a frequency ωRF whose corresponding timescale is faster than the timescale of the motion of the particle. This can allow the charged particle to be trapped on time-average, while the ﬁeld still obeys Laplace’s equation instantaneously at all times. This is the mechanism by which we trap ions. To understand how this works, it is useful to analyze the -
motion of an ion in a Paul trap quantitatively.

2.2.2 Motion of a single ion in a Paul trap

In general, a Paul trap operates by applying a potential which is the sum of a sinusoidal term and a static term, each individually obeying Laplace’s equation. Each of these terms should have a point at which there is always zero electric ﬁeld. When a Paul trap is designed and operated properly, these null points should coincide. We deﬁne this to be the origin of our coordinate system. The leading-order terms of the electric potential around the origin can be written

Φ(x, y, z, t)

=

URF 2

(αx2

+

βy2

+

γz2) cos(ωRFt)

+

UDC 2

(α

x2

+

β

y2

+

γ

z2),

(2.1)

where the coeﬃcients satisfy α + β + γ = 0, α + β + γ = 0 by Laplace’s equation. To understand the dynamics of an ion in such a potential, it suﬃces to consider the corresponding equation of motion for one dimension at a time. An ion with charge q and mass m in this potential will obey the following equation of motion in the x direction:

x¨

=

−q m

[αURF

cos(ωRFt)

+

α

UDC]

x,

(2.2a)

and corresponding similar equations in the other Cartesian directions. This diﬀerential equation has the form of the Mathieu equation, whose standard form is typically written

d2x dξ2

+

[ax

−

2qx

cos(2ξ)]x

=

0.

(2.2b)

Equation (2.2a) takes the form (2.2b) upon making the substitutions

ξ

=

ωRFt 2

,

qx

=

2qαURF mωR2 F

,

ax

=

4qα UDC mωR2 F

.

(2.2c)

qx and ax are dimensionless parameters describing the strength of the conﬁnement provided by the RF and DC components of the trapping potential, respectively. We are frequently
most interested in understanding which choice of trapping potential parameters results in stable trapping. Of these, those which satisfy |ax|, qx2 1 are of most experimental interest.

CHAPTER 2. TRAPPING AND CONTROLLING THE QUANTUM STATE OF

ATOMIC IONS

5

A treatment of the more general case can be found in Ref. [9]. Under the condition |ax|, qx2 1, the solution to (2.2a) takes the approximate form

x(t) ≈ Ax cos(ωxt)

1

−

qx 2

cos(ωRFt)

,

where

ωx

≡

1 2 ωRF

ax

+

1 2

qx2,

(2.3)

where Ax is the amplitude of the motion and depends on the initial conditions. This solution
has two important features, manifested in the two terms. The ﬁrst is a harmonic motion at the frequency ωx ωRF (since |ax|, qx2 1 by assumption). The frequency of this motion is set by both the strength of the RF ﬁelds and the DC ﬁelds (qx and ax), and is slow compared
to the frequency of the driven RF ﬁeld. This is known as secular motion. A few points are

worth noting explicitly about the secular frequency ωx:

• ωx depends on the amplitudes of the RF and DC potentials, URF and UDC via qx and ax. In particular, it depends on ax and on the square of qx, so that an increased magnitude of the DC potential may either increase or decrease the secular frequency depending on its sign, while on the other hand an increased magnitude of the RF potential may only increase the secular frequency, independent of its sign.

• In the special case ax = 0 (no DC contribution), the secular frequency is directly proportional to the amplitude of the RF drive, and inversely proportional to the drive
frequency: ωx ∝ URF/ωRF. To consider scaling with the ion mass, it is practical to ﬁx the stability parameter qx, in which case the secular frequency is inversely proportional to the square root of the ion mass: ωx ∝ m−1/2.

The second term is motion whose amplitude is small (reduced by a factor of qx/2) and whose frequency (ωRF) is fast compared to that of the secular motion. This is known as micromotion. If both qx and the amplitude of the motion are suﬃciently small, micromotion may be ignored, and the motion of the trapped particle may be described by its secular motion alone to a good approximation. This approximation will be used for the remainder of this work.
Approximating the time-averaged potential of a Paul trap as a static pseudopotential alone, the quantum mechanical Hamiltonian for the motion of a trapped ion of mass m in the x-direction becomes simply the standard harmonic oscillator Hamiltonian

Hmotion,x

=

p2x 2m

+

1 2

mωx2x2

=

ωx

a†xax

+

1 2

,

(2.4)

where ωx is given by (2.3), and a†x, ax are the usual quantum harmonic oscillator creation and annihilation operators. Extending this to three dimensions (x, y, z), each of which in

general

has

its

own

secular

frequency

ωi

=

1 2

ωRF

ai

+

1 2

qi2,

the

total

Hamiltonian

of

the

motion of a single ion in a Paul trap is that of a three-dimensional harmonic oscillator:

Hmotion = ωx

a†xax

+

1 2

+ ωy

a†y ay

+

1 2

+ ωz

a†z az

+

1 2

.

(2.5)

CHAPTER 2. TRAPPING AND CONTROLLING THE QUANTUM STATE OF

ATOMIC IONS

6

2.2.3 Surface ion traps

To realize a Paul trap, a set of electrodes with appropriate geometry and corresponding voltages must be designed which approximately realizes the potential (2.1). Early realizations of the Paul trap utilized hyperbolic electrodes to create the quadratic potential as precisely as possible [10]. More modern realizations use electrodes with simpler geometries for ease of production and assembly, which still create an approximately quadratic potential in a smaller but large-enough region of space aro-
und the trap origin. One popular design is the 4-rod trap [11], with 4 parallel rods in a square conﬁguration. Two rods opposite each other receive identical RF voltages VRF sin(ωRFt), while the other two are held at ground potential. This provides RF conﬁnement parallel to the rods, while DC conﬁnement is provided by a segmented rod or with “end cap” electrodes.
Three-dimensional Paul trap designs such as the 4-rod trap described above are typically macroscopic (many millimeters) in size and provide a straightforward method of achieving basic ion trapping functionality. More recently however, the ﬁeld of ion trapping has developed research interests which extend beyond that which can be provided by macroscopic ion traps. Such extended functionality can instead be provided by a surface trap architecture, which is deﬁned by ﬂat electrodes on a single surfac-
e that can be printed onto a chip. The surface trap architecture was ﬁrst realized by Refs. [12, 13].
The motivations for using surface traps over macroscopic traps are many, including:

• Miniaturization, which can allow ﬁner control over local DC ﬁelds with a larger number of smaller independent DC electrodes.

• The potential to house multiple independent Coulomb crystals at once, and in turn the potential to “shuttle” individual ions or chains of ions from one location to another. This may allow scaling to larger number of ions than would be possible with a macroscopic trap.

• Reproducible, high-precision manufacturing with the help of well-established microfabrication techniques.

• The ability to integrate other components into the trap chip, such as detectors and optical components.

• The ability to realize complex electrode geometries.

All of these features are invaluable for quantum information processing using trapped ions, but the ﬁner control allowed by surface traps is also advantageous for other types of trappedion experiments, including those studying fundamental physics. The “ring trap” design used in this work heavily relies on being able to have circular electrodes whose fabrication precision allows for a high degree of symmetry.
The surface trap architecture has some disadvantages over macroscopic ion traps. Since their geometry results in ﬁelds which deviate more from the ideal quadrupole potential

CHAPTER 2. TRAPPING AND CONTROLLING THE QUANTUM STATE OF

ATOMIC IONS

7

Distance from surface (µm) Pseudopotential (meV)

(a)

GND (b) 210

100

DC (×8)

200

80

190

60

180

GND

RF

40

170

GND

160

20

1 mm

−20

0

20

0

Radial distance from center (µm)

Figure 2.1: (a) Photograph of the ring trap illuminated under yellow light. Each electrode is marked by its function (RF, DC, or ground). (b) Simulated pseudopotential contour map for 21.4 MHz drive frequency and 100 V RF amplitude when applied to the second circular electrode as labeled in (a). The pseudopotential is cylindrically symmetric. The location of the potential minimum is shown by the white cross.

than those of macroscopic traps, the resulting trapping depth is signiﬁcantly reduced. This problem is exacerbated by the fact that RF voltage amplitudes are typically more limited for fear of electrical breakdown between neighboring electrodes, which can be only micrometers apart from each other. The miniaturized nature of surface traps also results in small distances between the trapped ions and the nearest electrode surface, on the order of 100 µm. This makes the ion highly susceptible to elect-
ric ﬁeld noise originating from the electrodes [14], which can spoil the cooling that is necessary for many applications. Finally, surface traps place limits on possible laser beam geometries.

2.2.4 The ring trap
The surface ion trap used in this work, referred to as the “ring trap”, is characterized by its circular symmetry. While most other ion traps produce an anisotropic pseudopotential such that ωx = ωy = ωz, the pseudopotential produced by the ring trap is cylindrically symmetric ωx = ωy < ωz, where here the z-direction is normal to the trap surface. This allows ion crystals in the xy-plane to freely rotate. This rotational motion is the scientiﬁc basis of all work in this thesis.
An image of the ring trap is shown in Fig. 2.1(a). The trap is fabricated from boron-doped silicon, which extrudes to a thickness of 250 µm above a glass substrate. The three circular center electrodes have outer radii of 125 µm, 600 µm, and 1100 µm. The eight outer electrodes have outer radii of 3000 µm. The trench between the center electrode and its neighbor is

CHAPTER 2. TRAPPING AND CONTROLLING THE QUANTUM STATE OF

ATOMIC IONS

8

15 µm wide, and all others are 25 µm wide. The inner and outer circular electrodes are internally shorted to each other. More details about the trap design and fabrication can be found in Refs. [15, 16]. The circular “RF” electrodes create the trapping potential. This is done by applying RF voltage to the second of the three circular electrodes, and using the innermost and outermost circular electrodes as a ground reference. The circular electrodes have a capacitance of 22 pF between them. The out-
er “DC” electrodes receive DC voltages for applying static ﬁelds, which are used to compensate stray dipole ﬁelds which otherwise result in excess micromotion [17], and to compensate stray quadrupole ﬁelds which otherwise break the cylindrical symmetry. The DC electrodes are also used to apply quadrupole ﬁelds which intentionally break the circular symmetry when desired, such as for ease of electronic state preparation and for rotating an ion crystal; see Chapter 6. It should be noted that the con-
ﬁguration of RF voltages discussed here and utilized in the rest of this work diﬀers from that of Refs. [15, 16]. There, RF is applied instead to the innermost and outermost circular electrodes, with the second one held at ground. This conﬁguration produces a diﬀerent potential, with a toroidal RF null. Here, the pseudopotential has an RF null at a single point.
The pseudopotential produced by the ring trap is shown in Fig. 2.1(b). Solving for this pseudopotential is straightforwardly done by numerically computing a single integral for each RF electrode, owing to the rotational symmetry [18, 19]. The RF null is at the potential minimum at a height of 181 µm above the surface. We operate the trap at an RF drive frequency of ωRF = 2π × 21.4 MHz. Application of 100 V amplitude at this drive frequency results in secular trap frequencies ωx = ωy = 2π × 1.45 MH-
z in the radial direction and ωz = 2π × 2.90 MHz normal to the trap surface for 40Ca+ , the ion used in this work.
A DC contribution to the trapping potential may be added by applying an oﬀset bias to the RF drive, either by applying a DC voltage to the two grounded circular electrodes or by biasing the mean voltage of the RF drive. The lowest-order term of this contribution has the form ΦDC(x, y, z) = U2(2z2 − x2 − y2)/2, thus providing a stronger conﬁnement in the radial direction and weakening the overall conﬁnement in the z-direction, or vice-versa, depending on the sign of U2. Doing so does not change the-
 equilibrium height of the ion above the surface.
Instrumentation for providing the RF and DC voltages to operate the ring trap is discussed in Chapter 4.

2.3 Theory of light-atom interactions
The primary method of controlling the quantum state of trapped atoms in general, including trapped ions, is by interaction with laser light. This can be done in a coherent manner such that the purity of the quantum state is (approximately) preserved in order to engineer useful quantum superpositions, or it can be done in an incoherent manner, involving dissipation, for the purposes of laser cooling the motion or pumping the internal state. This section will introduce the physics of such interactio-
ns, by ﬁrst introducing the physics of the light

CHAPTER 2. TRAPPING AND CONTROLLING THE QUANTUM STATE OF

ATOMIC IONS

9

and the atoms individually, and then describing how they interact with each other, both coherently and incoherently. These interactions are the basis of all experiments conducted in this thesis.

2.3.1 Light
The classical electromagnetic ﬁelds E and B, in the presence of a charge density ρ and a current density J, obey Maxwell’s equations

∇·E= ρ
0
∇·B=0

∇ × E = −∂B ∂t

∇

×

B

=

1 c2

∂E ∂t

+

µ0J,

(2.6)

where 0 and µ0 are the permittivity and permeability of free space, and c is the speed of light. Deﬁning the vector potential A along with the scalar potential Φ such that

E = −∇Φ − ∂A ∂t
B = ∇ × A,

(2.7)

and deﬁning A in the Coulomb gauge such that ∇ · A = 0, we ﬁnd that A obeys the wave

equation

∇2A

=

1 c2

∂2A ∂t2

(2.8)

in free space, i.e. when ρ = 0, J = 0. Solutions appear in the form of propagating plane

waves

A(r,

t)

=

−

i 2

A

ˆei(k·r−ωt+φ) − ˆ∗e−i(k·r−ωt+φ)

(2.9)

with ω/|k| = c and ˆ · k = 0. From (2.7), the electric and magnetic ﬁelds can then be

computed as

E(r,

t)

=

1 2 Aω

ˆei(k·r−ωt+φ) + ˆ∗e−i(k·r−ωt+φ)

B(r,

t)

=

1 2A

(k × ˆ)ei(k·r−ωt+φ) + (k × ˆ∗)e−i(k·r−ωt+φ)

.

(2.10a) (2.10b)

Such plane wave solutions are a good approximation of the laser-produced light ﬁelds used in this work. Often we are interested in a few key properties of the electric ﬁeld of the plane wave: the frequency ω, the amplitude E = Aω, the polarization vector ˆ, the wavevector k (related to the frequency by |k| = ω/c), and the phase φ.
The above is a classical description of the electromagnetic ﬁeld. In general, it may also be described quantum mechanically. This thesis will not go into a quantitative description of the quantized electromagnetic ﬁeld, but two important features which emerge from the

CHAPTER 2. TRAPPING AND CONTROLLING THE QUANTUM STATE OF

ATOMIC IONS

10

quantized picture are worth noting. The ﬁrst is that from the quantized electromagnetic ﬁeld emerges the concept of a photon, meaning the the energy of a mode of the ﬁeld with frequency ω is quantized to units of ω. The second is that interactions between atoms and the quantum ﬂuctuations of the electromagnetic ﬁeld in its vacuum (zero-photon) state lead to spontaneous emission, by which an atom incoherently decays toward its ground state, a phenomenon which is not present in a purely classical EM-
 ﬁeld description.

2.3.2 Atoms
The only light-matter interactions of interest in this thesis are those of laser light with hydrogen-like atoms. Thus this section will only address the physics of isolated hydrogenlike atoms. Here, “hydrogen-like” means the atom features a single valence electron — it may have many electrons in total, but one should be signiﬁcantly more weakly bound than the rest. It is useful to break the degrees of freedom into two parts: the “motional” (or “external”) degrees of freedom, and the “electronic” (-
or “internal”) degree of freedom. The external degrees of freedom describe the motion of the atom overall in free space. In a Paul trap, the only motional potential of interest in this thesis, the external degrees of freedom of a single trapped ion are as described in Sec. 2.2, particularly Eq. (2.5). The internal degree of freedom describes the motion of the valence electron about the nucleus and inner core of electrons.
Like any bound quantum mechanical system, a hydrogen-like atom features quantized energy eigenstates. The most important practical features of these states are the energy itself and the values of the various corresponding angular momenta, as these properties determine the properties of the light ﬁelds that are necessary to couple the atomic states together. This subsection outlines how these properties emerge from the atomic structure, namely, the behavior of the valence electron. This is done ﬁrs-
t excluding ﬁne-structure eﬀects and then including them. Hyperﬁne structure is not considered, since it is not applicable to the atoms used in this work.

Atomic structure in the electrostatic model

For the electrostatic hydrogen-like model [20], we may assume that the valence electron sees a spherically symmetric potential U (r), so the Hamiltonian is

HES

=

p2 2m

+

U (r),

(2.11)

where p is the momentum operator for the valence electron and m is the electron mass. Here, electrostatic means ignoring magnetic and radiation eﬀects. In solving the Schr¨odinger equation, one ﬁnds that the eigenstates of this Hamiltonian are indexed by three numbers n, , m , and can be split into a product of two parts, the angular wavefunction and the radial wavefunction.

CHAPTER 2. TRAPPING AND CONTROLLING THE QUANTUM STATE OF

ATOMIC IONS

11

• The angular eigenfunctions are the spherical harmonics Y m (θ, φ) (in spherical coordinates), a result which is independent of the potential U (r) (as long as it is spherically symmetric). The quantum number represents the total orbital angular momentum of the electron, and m is the projection onto a quantization axis (usually along an applied external magnetic ﬁeld).

• The radial eigenfunctions Rn (r) depend on the spherical radial coordinate only and depend on the potential U (r).

The energy En of the eigenfunctions is independent of m due to spherical symmetry (in the absence of an external magnetic ﬁeld). Importantly, the radial eigenfunctions and energies

cannot in general be solved for exactly. The hydrogen atom, with a single proton and a

single electron,

is an exception:

its

potential

is

UH (r)

=

−

e2 4π 0r

,

with energy eigenvalues

En

=

− me4 1 2 2(4π 0)2 n2

≈

−13.6 n2

eV

.

For hydrogen, the energy eigenvalues are independent of

, a result of the 1/r scaling of the potential. This is not true for other atoms, including

40Ca+ used in this thesis, whose energies depend on . However, for most atoms which are not

too heavy, this result is still instructive, as it gives an indication of the order of magnitude

of energy splittings (13.6 eV ∼ 3300 THz in frequency units), as well as the scaling of energy

with −1/n2 which still approximately holds true.

Atomic structure with ﬁne structure
The only correction to the electrostatic model that will be necessary to consider for this thesis is ﬁne structure. The ﬁne-structure correction arises from the leading order relativistic correction, and includes three terms: the kinetic term, the Darwin term, and the spin-orbit term [21]. The ﬁrst two are purely “orbital” eﬀects and depend only on the orbital angular momentum quantum number . The spin-orbit eﬀect, however, importantly modiﬁes the angular momentum structure relative to the spinles-
s model.
The spin-orbit eﬀect takes into account the spin S of the electron, which in turn couples magnetically to its own angular momentum L, resulting in a term in the Hamiltonian proportional to S · L. This means that the total angular momentum J of the system is the sum of the spin and orbital angular momenta, J = S + L, and hence m is no longer a good quantum number; instead, the magnetic quantum number should be the projection of the total angular momentum onto to the quantization axis, mj. For singl-
e-electron atoms, the electron spin is always 1/2, and therefore the spin-orbit coupling may be thought of in the following way: A state with a given value splits due to spin-orbit coupling into two states, one in which the spin and orbital angular momenta are parallel giving j = + 1/2, and one in which they are anti-parallel giving j = − 1/2 (the exception is = 0, for which there is only j = 1/2). The energy diﬀerence between these is given by the spin-orbit term of the Hamiltonian and is roughly-
 of order 1 THz.

CHAPTER 2. TRAPPING AND CONTROLLING THE QUANTUM STATE OF

ATOMIC IONS

12

In total, ﬁne structure corrections may be regarded as a correction term HFS to the electrostatic model, so that the total Hamiltonian of the atom’s valence electron is

H0

=

p2 2m

+ U (r)

+

HF S,

(2.12)

which is labeled H0 in anticipation of adding an interaction term when a light ﬁeld is introduced. Including ﬁne structure eﬀects, the atomic eigenstates may be labelled |n, , s, j, mj . For hydrogen-like atoms, s is always equal to 1/2, but it is included here for completeness.

Zeeman splitting

There are many eﬀects which can shift the energies of the atomic eigenstates of the Hamiltonian (2.12), but the Zeeman eﬀect of of the most relevance in this thesis. This couples a static external magnetic ﬁeld B to the angular momentum of the electron via its magnetic moment µ, shifting the energy of the state |n, , s, j, mj by

∆EZeeman = −µ · B = −gjµBBmj,

(2.13)

where µB is the Bohr magneton, B is the magnitude of the magnetic ﬁeld, and the Land´e g-factor gj is given by

gj

=

1

+

j(j

+

1)

+ s(s + 1) − 2j(j + 1)

(

+ 1)

(2.14)

In practice, an external magnetic ﬁeld is applied to deﬁne an axis along which the angular momentum J is quantized, and to split the energies of states which diﬀer only in mj by an amount on the order of 1 MHz per Gauss.

2.3.3 Coupling of atoms to light
The coupling of an atom to the electromagnetic ﬁeld results in coupling of the atomic eigenstates |n, , s, j, mj to each other. This is the mechanism by which we experimentally engineer the quantum state of the atom; by coupling otherwise stationary eigenstates together, one may induce transitions between them. It is therefore important to understand the underlying physics in order to predict what transitions are possible, the conditions under which they may occur, the strength of the coupling, an-
d the coherence of the process. A perturbative expansion of the coupling Hamiltonian due to the light ﬁeld results in a multipole expansion, giving rise to a useful categorization of transition types by leading multipole order; transitions of higher leading multipole order are suppressed by a factor of ∼ 104 − 105 in coupling strength.
A description which excludes the motion of the atom in the trap will suﬃce, as the electron’s motion about the nucleus takes place on very rapid time scales (transition frequencies of ∼ 1014 Hz), while the motion of the atom in the trap is comparatively slow (∼ 106 Hz).

CHAPTER 2. TRAPPING AND CONTROLLING THE QUANTUM STATE OF

ATOMIC IONS

13

Therefore, the valence electron can respond eﬀectively instantaneously as the nucleus moves within the trap, so that a perfectly motionless atom is an adequate approximation for describing the dynamics of the valence electron interacting with light. The eﬀects of atomic motion may thus be considered separately later.

The light-atom interaction Hamiltonian

In the absence of any interaction, the Hamiltonian of the atom is (2.12). Introducing the light ﬁeld modiﬁes the Hamiltonian to approximately [22]

H

=

1 2m

[p

+ eA(r)]2

+ U (r)

+

e S · B(r) m

(2.15)

where the canonical momentum p has been modiﬁed to include the vector potential, p →

p + eA(r), and the spin S of the electron may now interact with an external magnetic ﬁeld

B.

The total Hamiltonian including this interaction is most usefully organized into three

terms, H = H0 + H1 + H2, with H0 given by (2.12) and

H1

=

e m

[p

·

A(r)

+

S

·

B(r)] ,

H2

=

e2 2m

A(r)2

.

(2.16a) (2.16b)

This is an expansion in the coupling of the atom to the ﬁeld. If the amplitude of the ﬁeld

is weak compared to that seen by the electron due to the nucleus (as is the case in most

applications), then H2 is small compared to H1, and H1 is small compared to H0. We may therefore regard H1 as the ﬁrst-order perturbation expansion, and ignore H2 as higher order.

The multipole expansion of H1

This atom-light perturbation Hamiltonian may couple diﬀerent atomic eigenstates |n sjmj and n s j mj together if n s j mj H1 n sjmj = 0. Computing this matrix element, or at least predicting its order of magnitude, is therefore important in understanding
possible transitions between a given pair of atomic energy levels.
In the presence of a plane-wave ﬁeld as in (2.9) and (2.10), the ﬁelds A(r) and B(r) have a constant amplitude, and a phase ei(k·r−ωt). The ﬁeld therefore varies spatially on a length scale ∼ 1/k; this is typically much larger than the spatial extent of the radial wavefunction of the eigenstates being considered in the matrix element, so that k · r 1. This allows for an expansion of H1 in k · r. Using (2.16a) for H1 and (2.9) and (2.10) for the ﬁelds, this expansion takes the form [22]

H1 =

eA 2m

(p

·

ˆ)e−iωt

+

h.c.

+

ieA 2m

[(p

·

ˆ)(k

·

r)

+

S

·

(k

×

ˆ)]

e−iωt

+

h.c.

+ higher-order terms.

(2.17)

CHAPTER 2. TRAPPING AND CONTROLLING THE QUANTUM STATE OF

ATOMIC IONS

14

This is the multipole expansion: the ﬁrst term is the electric dipole term, and the second is

the sum of the electric quadrupole term and magnetic dipole term, which are of the same

order.

A typical order of magnitude for the factor k · r is 10−4 (averaged over the operator r

along the spatial extent of the electron’s wavefunction). S · (k × ˆ) is of the same order

relative to p · ˆ. Therefore, in evaluating H1, it is often a good approximation to consider only the leading order contribution in the multipole expansion, and in turn, the leading

order term for any given transition of interest has signiﬁcant impact on the corresponding

transition rate. For this reason, the most important classiﬁcation of atomic transitions is by

their leading multipole order.

The work in this thesis uses only electric dipole (E1) transitions and electric quadrupole

(E2) transitions, and thus these are the only types of transitions considered here. Other

trapped-ion work commonly uses magnetic dipole (M1) transitions, two-photon Raman tran-

sitions, or sometimes electric octupole (E3) transitions.

It can be shown that the electric dipole term of the the light-matter interaction Hamil-

tonian H1 can be written as the interaction of the electric ﬁeld with the dipole moment of the atom:

H1E1 = −E · er,

(2.18a)

and that the electric quadrupole term can be written as the interaction of the gradient of

the

electric

ﬁeld

with

the

quadrupole

moment

Qij

=

rirj

−

1 3

r2δij

:

H1E2

=

1 2

∇i

Ej

eQij .

(2.18b)

In general, each multipole term has associated with it a spherical tensor operator in space (e.g. r for E1 and Q for E2), whose rank increases as the multipole order of interest increases.

Selection rules
In classifying atomic transitions it is useful to be able to predict, without needing to carry out a full calculation, which multipole order a transition will be. Rules of symmetry via parity and angular momentum addition provide convenient shortcuts for this known as selection rules. Selection rules for E1 and E2 transitions are shown in Tab. 2.1. If a transition violates a selection rule, it guarantees that the corresponding multipole term vanishes, but the converse is not necessarily true. For -
example, for the special case of a j = 0 → j = 0 transition, the condition ∆j = 0 holds, but E1 and E2 terms will still both vanish due to angular momentum addition rules. In general, the change in angular momentum quantum numbers is what determines the multipole order of a transition.

Driven and spontaneous atomic transitions
A coherent light ﬁeld with well-deﬁned frequency such as that from a laser will drive transitions between two eigenstates |n sjmj and n s j mj (or |a and |b for brevity) whose

CHAPTER 2. TRAPPING AND CONTROLLING THE QUANTUM STATE OF

ATOMIC IONS

15

Multipole order

Selection rules

E1

∆ = ±1, ∆j = 0, ±1, ∆mj = 0, ±1

E2

∆ = 0, ±2, ∆j = 0, ±1, ±2, ∆mj = 0, ±1, ±2

Table 2.1: Selection rules for the E1 and E2 terms of the atomic transition multipole expansion. These are necessary conditions for the corresponding terms to be nonzero.

energy diﬀerence is ωab if the light ﬁeld is resonant, i.e. the light ﬁeld frequency ω matches the atomic transition frequency: ω = ωab. The populations of the two states will exchange sinusoidally, at a frequency Ω known as the Rabi frequency given by

Ω=

b|H1|a

 eE
 

ˆ·

b|r|a ,

=

e∇E  
2

ˆkˆ

b|Q|a

,

E1 transitions E2 transitions.

(2.19)

Note that the Rabi frequency is directly proportional to the amplitude of the light ﬁeld, and also depends its geometry via its polarization vector ˆ and its wavevector k. A more detailed recipe for computing these matrix elements can be found in Ref. [23].
Even in the absence of an external light ﬁeld, atomic eigenstates which are not the ground state have a ﬁnite lifetime due to spontaneous emission, which occurs due to the coupling of the atom to the quantized electromagnetic ﬁeld. A description of the quantized electromagnetic ﬁeld is beyond the scope of this work, but the result is as follows: Letting |b be the upper of the two states of interest, the spontaneous emission rate is written as Γb, and the lifetime is τb = 1/Γb. The spontaneous emis-
sion rate is directly related to the atomic matrix element for the corresponding multipole order. For electric dipole transitions:

Γb =

e2 3π

ωa3b 0 c3

|

b|r|a

|2,

and for electric quadrupole transitions [23],

(2.20a)

Γb

=

e2ωa5b 60π 0 c5

|

b|Q|a |2.

(2.20b)

Both the Rabi frequency Ω and the spontaneous emission rate Γb are related to the matrix element b|T |a , where T is the appropriate spherical tensor operator for the multipole
order of the transition. In practice, the matrix element often cannot be computed from ﬁrst
principles, as it is in general not possible to solve for the radial part Rn (r) in atoms more complex than hydrogen. Instead, state lifetimes are experimentally measured directly.
Two-level transitions with a long lifetime will also have a slower Rabi frequency. As an example, we can consider the transition from the state 4S1/2(m=−1/2) to 3D5/2(m=−1/2) in 40Ca+ , the ion used in this thesis. This is the common spectroscopic notation for the states

CHAPTER 2. TRAPPING AND CONTROLLING THE QUANTUM STATE OF

ATOMIC IONS

16

which in the previous notation would be written as |n = 4, = 0, s = 1/2, j = 1/2, mj = −1/2 , |n = 3, = 2, s = 1/2, j = 5/2, mj = −1/2 . This is an E2 transition; its wavelength is 729 nm, and its spontaneous emission rate is ΓD5/2 ≈ 0.8 s−1. A 30 mW 729 nm beam focused to a Gaussian waist 10 µm in diameter, whose polarization and wavevector are optimized for
coupling to this transition, would drive it at a rate Ω = 2π × 1 MHz. In comparison, if we instead consider the 4S1/2(m=−1/2) to 4P1/2(m=−1/2) E1 transition at 397 nm, the same Rabi frequency can be achieved with a laser power of merely 5 nW.
The pronounced diﬀerence makes E1 and E2 transitions useful for diﬀerent processes. In
summary:

• Electric dipole transitions have a short lifetime and are therefore useful for incoherent processes, in which the upper state lifetime 1/Γb is much shorter than the timescale of the process of interest. Here, spontaneous emission dominates and photons are quickly scattered by the atom from the laser ﬁeld.

• Electric quadrupole (and other) transitions have a long lifetime and are therefore useful for coherent processes, in which Ω Γb. Here, spontaneous emission may be negligible, and quantum coherent eﬀects can be engineered and measured. Driving these transitions generally requires a few orders of magnitude more laser power than E1 transitions.

The following section outlines basic dynamical processes of such coherent and incoherent light-atom interactions.

2.4 Light-atom interaction dynamics
This section will introduce the dynamics of both coherent and incoherent light-atom interactions, eventually including as well the overall motion of the ion in the Paul trap, which is also an important element in the experiments performed here. The discussion will be restricted to the case of only two atomic energy levels |a and |b , with a single laser ﬁeld (at least nearly) resonant with their transition frequency ωab.

2.4.1 Coherent interactions, excluding ion motion

In the simplest case, with two atomic energy levels where spontaneous emission can be neglected (because e.g. they are connected via an electric quadrupole transition so that the upper state exhibits a slow decay rate), it is instructive to write the atomic Hamiltonian in the absence of a light ﬁeld, H0, in the {|a , |b } basis:

H0

=

−

1 2

ωab |a

a|

+

1 2

ωab |b

b|

(2.21)

.

CHAPTER 2. TRAPPING AND CONTROLLING THE QUANTUM STATE OF

ATOMIC IONS

17

Introducing the laser ﬁeld adds H1 (2.16a) to the Hamiltonian, coupling the two energy levels with some Rabi frequency Ω, deﬁned by (2.19). The Hamiltonian for this interaction in the {|a , |b } basis is

H1 = (Ω |b a| + Ω∗ |a b|) cos(ωt − φ).

(2.22)

We may choose phases such that Ω = Ω∗ and φ = 0, for convenience. The total Hamiltonian for coherent interactions can be written as a 2 × 2 matrix:

H

=

H0

+

H1

=

1 2

−ωab Ω cos(ωt) Ω cos(ωt) ωab

(2.23)

The dynamics are more easily analyzed in a “rotating frame”, deﬁned by the unitary trans-

formation

U (t)

=

e−i

1 2

ωt(|b

b|−|a

a|).

(2.24)

The unitary transformation transforms the Hamiltonian as H → U †HU + i U˙ †U , yielding the new rotating-frame Hamiltonian

H

=

1 2

ω − ωab

Ω (1 + e2iωt)

Ω (1 + e−2iωt) −(ω − ωab)

(2.25)

Here we can invoke an approximation to get rid of the remaining time-dependence, the

“rotating wave approximation” (RWA). This comes from the observation that the Rabi

frequency (∼ kHz – MHz) is nearly always signiﬁcantly slower than the laser frequency

(∼ 100 THz). Therefore, on the timescale of the dynamics ∼ 1/Ω, the e±2iωt terms will

rapidly oscillate and average to zero; thus we neglect them in the RWA. Doing so gives the

Hamiltonian

H

≈

1 2

ω − ωab Ω

Ω −(ω − ωab)

=

1 2

∆ Ω

Ω −∆

,

(2.26)

where ∆ is deﬁned as the diﬀerence between the laser frequency and the transition frequency and is known as the detuning.
The most basic dynamics problem is to suppose that the system begins in the state |a initially and, at time t = 0, begins evolving under the Hamiltonian (2.26) (due to e.g. the laser being turned on at that time). The quantity of interest is the probability that the system, after a time t, is found to have transitioned to the state |b upon measurement. From the Schro¨dinger equation, this can be solved for exactly:

Pb(t) =

b|e−iHt|a

2

=

Ω2 Ω2 + ∆2

sin2

1 2

√ Ω2

+

∆2

t

.

(2.27)

√ The transition probability oscillates at a frequency Ω2 + ∆2, with an amplitude Ω2/(Ω2 + ∆2). On resonance (∆ = 0), the frequency of these oscillations is equal to the
Rabi frequency and the transition probability reaches unity after a time t = π/Ω. If the

CHAPTER 2. TRAPPING AND CONTROLLING THE QUANTUM STATE OF

ATOMIC IONS

18

1.0

∆=0

∆ = 0.5Ω

0.8

∆=Ω

∆ = 5Ω

0.6

Excitation Pb

0.4

0.2

0.0 0

π

2π

3π

4π

Rabi time t (1/Ω)

Figure 2.2: Ideal 2-level Rabi oscillations for various detunings, which are quantiﬁed in terms of the Rabi frequency.

laser frequency does not quite match the transition frequency so that ∆ = 0, the maximum transition probability falls short of unity. Quantitatively, a laser ﬁeld is nearly resonant if ∆ Ω. Far from resonance, the transition probability is small.
In a more complete picture in which the system has more than two energy levels, oﬀresonant eﬀects may need to be considered even when resonantly addressing one transition. The eﬀect of having an oﬀ-resonant transition while addressing another should be accounted for if the detuning to the oﬀ-resonant transition is comparable to its corresponding Rabi frequency. Oﬀ-resonant eﬀects can become important, for example, when addressing a motional sideband of an electronic transition, as the motional sid-
eband frequencies and the electronic carrier transition Rabi frequencies can both be on the same order ∼ 1 MHz.

2.4.2 Incoherent interactions, excluding ion motion
In addition to coherent dynamics, atomic states can also experience decoherence. In the two-level picture, there are two important ways in which this can occur:
• An external imperfection decays the coherence between the states |a and |b , such as a noisy external magnetic ﬁeld which randomly shifts the energies and thereby dephases the rate of coherent evolution, or a noisy laser frequency which eﬀectively causes similar dephasing eﬀects.
• Spontaneous emission, a fundamental eﬀect caused by coupling of the upper state to the quantized electromagnetic ﬁeld, which causes the population of the upper state to decay into the lower state and also decays the coherence between them.

CHAPTER 2. TRAPPING AND CONTROLLING THE QUANTUM STATE OF

ATOMIC IONS

19

It will suﬃce to consider these eﬀects in terms of the spontaneous emission rate Γb given by (2.20), and an additional dephasing rate γab which accounts for possible imperfections.
The Lindblad master equation which describes spontaneous emission and dephasing gives
rise to a coupled set of equations for the elements of the density matrix of the system, which includes the populations ρaa, ρbb (ρaa + ρbb = 1) and the coherences ρab = ρ∗ba. These are the optical Bloch equations:

ρ˙bb

=

−Γbρbb

+

i 2

Ω∗ρba

−

i 2

Ωρab

ρ˙aa

=

Γbρbb

−

i 2

Ω∗

ρba

+

i 2 Ωρab

ρ˙ab = −

Γb 2

+

γab

ρab

−

i∆ρab

−

i 2

Ω∗(ρbb

−

ρaa)

ρ˙ba = −

Γb 2

+

γab

ρba

+

i∆ρba

+

i 2 Ω(ρbb

−

ρaa)

(2.28a) (2.28b) (2.28c) (2.28d)

In the absence of decoherence eﬀects Γb and γab, these equations reproduce the coherent 2-level light-matter interaction Hamiltonian (2.26). Dissipation from spontaneous emission can be thought of as the atom randomly emitting a photon into free space after absorbing one from the driving ﬁeld, which has the eﬀect of driving the state down from |b to |a , damping the dynamics.
A quantity that is often of interest is the scattering rate of photons at the equilibrium state where the rate of photon absorption from the driving ﬁeld is balanced by the rate of spontaneous emission. In the absence of any additional dephasing, this will be given by

Rscatter

=

Γbρbb

=

Γb 2Ω2

+

Ω2 Γ2b +

4∆2

=

Γb 2

1

+

s

s +

2∆ Γb

2,

(2.29)

where s ≡ 2Ω2/Γ2 is known as the saturation parameter, and measures the driven transition rate due to the laser in comparison to the maximum possible driving rate, which is limited by the damping Γb [9]. The scattering rate is important for processes which utilize photon scattering, for example to cool the motion of the atom.

2.4.3 Coherent interactions, including ion motion
Up to here, Secs. 2.3 and 2.4 have included only a single degree of freedom, that of the valence electron moving around the nucleus. In the ﬁeld of trapped ions, the quantum mechanical motion of the ion within the trap is considered equally important.
As described in Sec. 2.2, the quantum mechanical motion of a single trapped ion may be described as a three-dimensional quantum harmonic oscillator, with mode frequencies ωx, ωy, ωz, and corresponding annihilation operators ax, ay, az. It will suﬃce to consider only one of these degrees of freedom, say the x-direction, dropping for convenience the subscript

CHAPTER 2. TRAPPING AND CONTROLLING THE QUANTUM STATE OF

ATOMIC IONS

20

on the creation/annihilation operators which we write as a† and a (we keep the x subscript
in the mode frequency ωx to distinguish it from the laser frequency ω). To account for ion motion in the atom-light dynamics, we must modify the Hamiltonian
(2.23) in two ways: (1) the interaction-free Hamiltonian H0 must include the Hamiltonian of the harmonic-oscillator motion of the ion’s center of mass ωx(a†a + 1/2), and (2) the factor cos(ωt) for the light ﬁeld in the interaction Hamiltonian must now include the positiondependence, modifying it to cos(kxx − ωt). The Hamiltonian reads

H = H0 + H1,

H0 =

ωx(a†a

+

1 2

)

+

1 2

ωab (|b

b| − |a a|)

H1 = Ω (|b a| + |b a|) cos(kxx − ωt).

(2.30)

Writing the position operator x in terms of the harmonic oscillator creation and annihilation operators,

kxx = kx 2mωx (a + a†) = η(a + a†),

(2.31)

η ≡ kx 2mωx .

Here, m now stands for the mass of the ion, rather than the mass of the electron. This
deﬁnes the Lamb-Dicke parameter η, which can be regarded as the ratio between the spatial
extent of the ground-state wavefunction of the ion motion and the laser wavelength divided
by 2π. More precisely, it also accounts for the wavevector’s projection onto the direction of
the ion motion, since only the component kx enters the deﬁnition. Often η 1, making it a good expansion parameter.
It is useful to transform into the interaction picture, a rotating frame deﬁned by the unitary transformation U = e−iH0t/ , where H0 now includes both the internal and motional Hamiltonians. The transformed Hamiltonian is HI = U †H1U . Applying this transformation, as well as a rotating wave approximation as in (2.26),

HI

=

1 2

Ω

|b a| e e iη(aeiωxt+a†e−iωxt) −i∆t + |a b| e e −iη(aeiωxt+a†e−iωxt) i∆t

=

1 2

Ω

|b a| eiη[a˜(t)+a˜†(t)]e−i∆t + |a b| e−iη[a˜(t)+a˜†(t)]ei∆t

,

(2.32)

where a˜(t) ≡ U †aU = aeiωxt is the annihilation operator in the interaction picture. To analyze the implications of this Hamiltonian, we can consider a particular matrix
element describing a transition from an initial state |a, n to a ﬁnal state |b, n , where |a and |b are the two electronic states of interest and |n and |n are Fock states of the

CHAPTER 2. TRAPPING AND CONTROLLING THE QUANTUM STATE OF

ATOMIC IONS

21

harmonic motion:

b, n |HI|a, n

= 1 Ω n |eiη[a˜(t)+a˜†(t)]|n 2

e−i∆t

=

1 2

Ω

n |eiη(a+a†)|n

ei(n−n )ωxte−i∆t

= 1 Ω n |eiη(a+a†)|n e−i[∆−(n −n)ωx]t 2

(2.33)

We can see that resonance (vanishing time-dependence) occurs when ∆ = (n − n)ωx; that is, the laser detuning from the electronic transition is equal to a multiple of the trap frequency ωx that matches the diﬀerence in motional quanta between |n and |n . This is a manifestation of the conservation of energy; on resonance, the energy of the laser’s photon is
equal to the sum of the electronic energy diﬀerence ωab and the motional energy diﬀerence (n − n) ωx.
If the trap frequency ωx is large enough to exceed the Rabi frequency Ω, then a laser tuned to a frequency ωab + ∆n ωx, where ∆n is an integer, incident on a trapped ion with initial internal and motional initial state |a, n will drive the transition |a, n → |b, n + ∆n
in a manner equivalent to any other two-level system, as analyzed previously. The diﬀerence
when considering the ion’s motional degree of freedom is only that the frequency of the Rabi oscillations in this case is now Ω n + ∆n|eiη(a+a†)|n . Explicitly,

n + ∆n|eiη(a+a†)|n = i∆ne−η2/2η|∆n|L(m|∆inn(n|),n+∆n)(η2)

n!

sign(∆n)/2

(n + ∆n)!

(2.34)

where L(mk)(x) is the associated Laguerre polynomial. If η is small,

eiη(a+a†)

≈

1

+

iη(a

+

a†)

−

η2 2

(a

+

a†)2

+

...

In the Lamb-Dicke regime, where the ion is cold enough such that η2(2n + 1)

(2.35) 1,

n|eiη(a+a†)|n ≈ 1 − η2

n + 1|eiη(a+a†)|n

√ ≈ iη n + 1

n − 1|eiη(a+a†)|n

√ ≈ iη n

(2.36a) (2.36b) (2.36c)

The previous few paragraphs have broken the result (2.33) into two factors:
• The coupling strength Ωn,n = Ω n |eiη(a+a†)|n , which determines the Rabi frequency of the particular transition. The matrix element n |eiη(a+a†)|n is given exactly by (2.34), and approximately by (2.36) in the Lamb-Dicke regime. The coupling strength depends on the laser intensity through Ω, and is independent of the laser frequency.

CHAPTER 2. TRAPPING AND CONTROLLING THE QUANTUM STATE OF

ATOMIC IONS

22

1.0

n=0

0.8

n=5

n = 100

0.6

Excitation (a.u.)

0.4

0.2

0.0

−2

−1

0

1

2

Sideband order

Figure 2.3: Schematic sideband spectra showing coupling strengths for diﬀerent sideband orders at diﬀerent starting values of the motional quantum number n, for η = 0.2. The height of the peaks shown is the square of the magnitude of the relative coupling strength (2.34). Within the Lamb-Dicke regime, sideband coupling strength falls oﬀ with sideband order, and sidebands get stronger with increasing n. n = 100 is beyond the Lamb-Dicke regime, and coupling strength is no longer monotonic in sideban-
d order.

• The time-dependent phase e−i[∆−(n −n)ωx]t, which encodes the resonance condition, and deﬁnes the detuning with respect to the transition being considered: δ = ∆ − (n − n)ωx. This depends on the laser frequency through ∆, and is independent of the laser intensity. The resonance condition is related to energy conservation: on resonance, the ion’s motion gains energy exactly equal to the energy from the photon ∆nωx which is in excess from the electronic transition energy ω (or loses energy if ∆n < -
0).
Resonances which change the motional quantum number n are known as motional sidebands transitions, and the resonance which does not aﬀect motion is known as the carrier transition. Sidebands which subtract motional quanta are known as red sidebands, and those which add motional quanta are known as blue sidebands. Experimentally, a sweep of the laser frequency about the carrier frequency reveals peaks at frequency oﬀsets from the carrier equal to integer multiples of the trap frequency. The height -
of these sideband peaks is related to the corresponding matrix element. Fig. 2.3 shows some example sideband spectra.
Rather than a Fock state, which is an energy eigenstate, a more realistic initial state for the motion of the ion is a thermal state, which is a statistical mixture of many Fock states. Since the matrix element n + ∆n|eiη(a+a†)|n will diﬀer for diﬀerent values of n, the resulting dynamics will be in turn an incoherent superposition of Rabi oscillations at diﬀerent frequencies. Such a thermal state may be characterized by the average Fock state

CHAPTER 2. TRAPPING AND CONTROLLING THE QUANTUM STATE OF

ATOMIC IONS

23

(a)

(b)

(c)

1.0

n¯ = 0.2

n¯ = 4

n¯ = 100

0.5

Excitation Pb

0.0 0

50

100

Rabi time t (µs)

0

50

100

Rabi time t (µs)

0

50

100

Rabi time t (µs)

Figure 2.4: Resonant Rabi oscillations for temperatures n¯ = 0.2, 4, and 100 on (a) the ﬁrst red sideband, (b) the carrier, and (c) the ﬁrst blue sideband, with bare electronic Rabi frequency Ω = 2π × 100 kHz and Lamb-Dicke factor η = 0.1.

occupation n¯. The full distribution is given by the probabilities

Pn

=

(n¯

n¯n + 1)n+1 ,

(2.37)

which dictates the appropriate weightings of each state |n when computing the dynamics. For example, the observed Rabi oscillations will be weighted averages of those of individual Fock-state transitions, resulting in damping. The measured excitation probability for such a case on the ∆nth sideband will be given by

Pb(t) =

n

Pn

Ω2n,n+∆n Ω2n,n+∆n + δ∆2 n

sin2

1 2

Ω2n,n+∆n + δ∆2 n t .

(2.38)

Some thermal Rabi oscillations are shown in Fig. 2.4. The dynamics of this section have assumed that the ion motion is harmonic-oscillator
like, which is typical for trapped ions. However, much of the novelty of the work in this thesis relies on ion motion which is rotor-like, rather than oscillator-like. Chapter 3 will focus on an analogous treatment of trapped-ion motion for the case of a rotor.

2.4.4 Incoherent interactions, including ion motion
In a classical picture of trapped-ion motion, the ion oscillates sinusoidally at the trap frequency ωx, with a period 2π/ωx ∼ 10−6 s. Spontaneous emission from an electric dipole transition occurs on a much faster timescale ∼ 10−8 s; therefore, during the process of absorbing and emitting a photon from a laser ﬁeld which is nearly resonant with an electric dipole transition, the ion velocity remains approximately constant. An alternative but equivalent viewpoint is one from frequency space: for el-
ectric dipole transitions and for typical trapping parameters, the rate of spontaneous emission ∼ 108 Hz is much larger than the

CHAPTER 2. TRAPPING AND CONTROLLING THE QUANTUM STATE OF

ATOMIC IONS

24

trap frequency ∼ 106 Hz, Γb ωx, so that the transition is broadened in frequency space by

the dissipation so much that individual sideband transitions are not resolved. This justiﬁes

the treatment of ion motion with incoherent interactions as semi-classical, where the ion’s

motion need not be quantized. The eﬀect of the laser radiation on the ion’s motion may be

regarded as a force, which on time-average is equal to the momentum of each photon times

the rate of photon absorption. For a laser whose wavevector projection onto the x-direction

is kx,

Fx = mv˙x = kxΓbρbb,

(2.39)

where ρbb is the equilibrium excited state probability. The motion of the ion aﬀects this equilibrium in turn via a Doppler shift, leading to a set of coupled diﬀerential equations
for the ion’s velocity. If the ion is moving with velocity vx in the x-direction, the eﬀective detuning of the laser as seen by the ion in its frame of motion shifts from ∆ to ∆ − kxvx. The equilibrium excited state probability is then given by a modiﬁed version of (2.29):

ρbb

=

2Ω2

+

Γ2b

Ω2 + 4(∆

−

kxvx)2 .

Combining these equations,

(2.40)

Fx = mv˙x =

kxΓb

2Ω2

+

Γ2b

Ω2 + 4(∆

−

kxvx)2

.

(2.41)

With proper choice of ∆ < 0, this velocity-dependent force can lead to cooling, described more in Sec 2.6. This force results from the absorption of laser photons by the ion, but at equilibrium, spontaneous emission of photons also occurs at an equal rate. Unlike the absorbed photons, the direction of the emitted photons, and hence the direction of their resulting momentum kick to the ion, is random. This leads to momentum diﬀusion which heats the ion, oﬀsetting the cooling process. The random tim-
ing of the discrete absorption events from the laser also contributes to diﬀusion. If the ion velocity is not too large, then the rate of heating of the ion’s motion due to this diﬀusion is given by

E˙ h

=

(

k)2 2m

Γbρbb|v=0(1

+

ξ)

(2.42)

where ξ = 2/5 is a geometric factor accounting for the spatial pattern of the dipole radiation [9].

2.5 The 40Ca+ ion
The atomic ion used for the work in this thesis is 40Ca+ , singly ionized calcium with a mass of 40 amu. This atom has the hydrogen-like atomic structure described in Sec. 2.3, since neutral calcium is an alkaline earth metal with two valence electrons, leaving singly ionized calcium with only one. Beyond this highly desirable property, choosing an atomic species for ion

CHAPTER 2. TRAPPING AND CONTROLLING THE QUANTUM STATE OF

ATOMIC IONS

25

42P3/2
τ = 6.9 ns

42P1/2
τ = 7.1 ns

93.5% 0.6% 5.9% 93.5% 6.5%

854 nm

397 nm

866 nm 729 nm
42S1/2
gj = 2

32D5/2
τ = 1.2 s gj = 6/5
32D3/2
τ = 1.2 s
mj +1/2
– 1/2

mj +5/2 +3/2 +1/2 – 1/2 – 3/2 – 5/2

Figure 2.5: 40Ca+ level structure. Energy levels are shown along with their lifetime. The qubit states S1/2 and D5/2 are additionally labeled with their Land´e g-factors, and their Zeeman sublevels are also shown. Solid lines show laser transitions and are denoted with their corresponding wavelengths. Wavy lines indicate E1-allowed spontaneous decay pathways, with each labeled with the probability of decay via that pathway [24].

trapping experiments involves a number of trade-oﬀs. Among the most desirable properties in an ion species are atomic transition frequencies whose corresponding laser wavelengths are convenient, and an energy level structure which is useful both for state preparation and for quantum coherent operations. 40Ca+ features zero nuclear spin and therefore no hyperﬁne structure. This eliminates the possibility of using a pair of hyperﬁne levels as a qubit, but greatly simpliﬁes the level structure. The t-
wo levels used as the qubit are connected by an electric quadrupole transition at 729 nm, a technologically convenient visible red wavelength.

2.5.1 Level structure
Fig. 2.5 shows the energy levels of 40Ca+ which are relevant for work in this thesis. Each energy level is labelled in spectroscopic notation in terms of its quantum numbers by n2s+1[ ]j, where s = 1/2 always and = 0, 1, 2 is labelled S, P, D, respectively. Each splits into 2j + 1 Zeeman sublevels with quantum numbers mj = −j, −j + 1, ... + j. The most relevant transitions, their wavelengths, energy level lifetimes, and spontaneous decay branching ratios are shown.
For experiments done in this thesis, the applied external magnetic ﬁeld is of the order of a few Gauss (10−4 T), resulting in a Zeeman shift of all levels on the order of a few MHz. The linewidth of all E1 transitions considered here is of order 10 MHz and therefore greater than

CHAPTER 2. TRAPPING AND CONTROLLING THE QUANTUM STATE OF

ATOMIC IONS

26

the Zeeman shift, while the linewidth of the S1/2 ↔ D5/2 transition is signiﬁcantly narrower (order 100 mHz). Thus, any driven E1 transition is not selective of sublevels except for polarization considerations, but Zeeman sublevels may be easily resolved on the S1/2 ↔ D5/2 transition.
The S1/2 ground state is used as the starting point for any experiment, as well as for nearly any individual process that takes place within the experiment. It is the only truly
stable level in the subspace considered here; D3/2 and D5/2 are only metastable, lasting for about 1 s.

2.5.2 Lasers
The transitions shown with solid arrows in Fig. 2.5 indicate transitions that we drive with lasers. There are four in total. Three of these are E1: S1/2 ↔ P1/2 (397 nm), D3/2 ↔ P1/2 (866 nm), and D5/2 ↔ P3/2 (854 nm). The other is E2: S1/2 ↔ D5/2 (729 nm). The laser power requirement for driving E1 transitions is roughly enough to reach saturation intensity, and that for driving the E2 transition is enough to have a useful Rabi frequency, of order 100 kHz. To satisfy this, assuming the beams are f-
ocused to a waist size on the order of 10 µm, we require on the order of 10 µW of power for the lasers for the E1 transitions, and on the order of 1 mW of power for the 729 nm E2 transition.

2.6 Useful light-atom processes for quantum state engineering in 40Ca+
The light-atom interaction dynamics described in Sec. 2.4 are the building blocks for designing processes which can be used to engineer the quantum state of a trapped ion or a crystal of many trapped ions, including both their internal electronic states and the external motional states. This section describes the most basic and common of these processes: pumping, cooling, coherent manipulation, and state readout. It then describes how these are put together into full quantum state experiments.
2.6.1 Optical pumping
A typically important stage of any quantum state engineering experiment is the preparation of the electronic state into a pure energy eigenstate. The simplest and most widely used technique is known as optical pumping. Here, a laser drives population from state |a1 to state |b , which subsequently quickly decays into either |a1 or |a2 . The pumping depletes population from |a1 and builds population in |a2 .
In 40Ca+ , we often want to pump the state from a mixture of the two S1/2 sublevels (e.g. after cooling) into a pure state of one of them (e.g. for coherent operations). For optical pumping, the 729 nm laser is used since the S1/2 ↔ D5/2 transition is narrow enough to resolve the two S1/2 sublevels. However, this is a slow E2 transition, so the 854 nm laser

CHAPTER 2. TRAPPING AND CONTROLLING THE QUANTUM STATE OF

ATOMIC IONS

27

is additionally used to quench the transition by introducing a strong coupling from D5/2 to P3/2, which may quickly decay back to S1/2. P3/2 may also decay to D3/2, so the 866 nm laser is also used to pump out of the D3/2 state.
Instead of 729 nm light, one may alternatively use σ-polarized 397 nm light for optical pumping of the S1/2 state, though this method is not used in this work. Using 397 nm σ light makes use of only an E1 transition and is thus signiﬁcantly faster. However, it requires that the light is either σ+ or σ− polarized, which places signiﬁcant restrictions on the angle between the 397 nm wavevector and the external magnetic ﬁeld. Optical pumping using 729 nm light is frequency-selective and thus requires-
 no strict polarization, making it simpler to implement and maintain. This is particularly true in this work where the applied magnetic ﬁeld is created by permanent magnets rather than current-carrying coils, as magnets are not easily reconﬁgurable.

2.6.2 Cooling
For quantum state engineering, we wish to have clean coherent operations in order to easily prepare a quantum state of interest. A prerequisite to this is for the motion of the trapped ion to be cooled. From a semi-classical point of view, this is because the laser ﬁelds used for coherent operations have a position-dependent phase. A moving trapped ion has a timedependent position and therefore sees a time-dependent laser phase as it moves through the laser ﬁeld; if this motion is thermal, then th-
is time-dependent phase is random, degrading the coherence of the laser-ion interaction. Two types of cooling of the motion of trapped ions are used in the work in this thesis, Doppler cooling and resolved-sideband cooling (aka simply sideband cooling) [25, 26]. These are used in stages; Doppler cooling works at high initial temperatures but is limited in its minimum ﬁnal temperature, while sideband cooling requires a low initial temperature but can cool ion motion very close to its ground state. -
For some experiments, the ion needs only to be at a Doppler-cooled temperature, while for others, sideband cooling is necessary.

Doppler cooling

Doppler cooling exploits the Doppler eﬀect in a laser-ion interaction where spontaneous emission is present, in which the eﬀective frequency of the light as seen by the ion is shifted by its velocity, as in (2.40). For suﬃciently small velocities, the expression for the resulting force (2.41) can be linearized around vx = 0. In terms of the saturation parameter s,

Fx ≈ Fx|v=0 + 4

kx2∆ Γ

[1

+

s

+

s (2∆/Γb

)2]2

vx.

(2.43)

If ∆ < 0, the coeﬃcient of the linear term will be negative, so that this force provides a viscous drag. The rate of energy loss due to this force, averaged over many harmonic

CHAPTER 2. TRAPPING AND CONTROLLING THE QUANTUM STATE OF

ATOMIC IONS

28

oscillation periods, is given by

E˙ dc =

Fxvx

=4

kx2∆

s

Γ [1 + s + (2∆/Γb)2]2

vx2

(2.44)

since vx = 0 but vx2 = 0. When this cooling rate is balanced with the heating rate due to diﬀusion (2.42), a steady-state temperature can be computed [9]:

kBT = m vx2

=

Γb 8

(1

+

ξ

)

(1

+

s)

Γb 2∆

+

2∆ Γb

.

√ This temperature is minimum when the detuning is set to ∆ = −Γb 1 + s/2:

√

kBTDoppler =

Γb √

1 4

+

s

(1

+

ξ),

n¯Doppler

=

Γb

1+ 4ωx

s

(1

+ ξ),

(2.45)
(2.46a) (2.46b)

where ξ = 2/5. Note that the saturation parameter s remains a variable; the ﬁnal tempera-
ture may be minimized by using as little laser power as possible, but this comes at the cost
of a slower cooling rate and therefore a longer Doppler cooling duration. In practice one
will often choose the minimum laser power necessary to achieve the Doppler limit within a
desired time frame. In 40Ca+ , Doppler cooling is most easily performed on the S1/2 ↔ P1/2 transition at
397 nm. The P1/2 state is the lowest-lying level above S1/2 with an E1 transition connecting it to S1/2. The P1/2 state is not guaranteed to decay back into S1/2, but rather may also decay into the long-lived D3/2 state with probability 0.065. Thus during cooling, an additional laser at 866 nm is used to pump population out of the D3/2 state so that it remains in the S1/2 ↔ P1/2 cycle for cooling.

866 nm Doppler cooling in 40Ca+
This work also makes use of cases where Doppler cooling is performed with the roles of the 397 nm and 866 nm lasers reversed, with the 866 nm photons providing cooling and the 397 nm laser repumping population into the D3/2 ↔ P1/2 cooling transition. This scheme allows for cooling of the ion motion normal to the trap surface while avoiding directing dangerous low-wavelength 397 nm light directly onto the trap surface by directing 866 nm light onto the surface instead, with the 397 nm light paralle-
l to it. However, it presents two main additional challenges:
1. The cooling power is reduced by about a factor of 30 in comparison to cooling with 397 nm light. Scattering on the D3/2 ↔ P1/2 transition occurs at 1/14 the rate of the S1/2 ↔ P3/2, and momentum kicks from 866 nm photons are a factor of 2.2 weaker than those from 397 nm photons. This raises the mimimum achievable Doppler temperature.

CHAPTER 2. TRAPPING AND CONTROLLING THE QUANTUM STATE OF

ATOMIC IONS

29

2. The D3/2 ↔ P1/2 has 6 allowed transitions between Zeeman subelevels, in comparison to 4 in the S1/2 ↔ P3/2. This makes it more challenging to ﬁnd an optimal detuning for cooling.

Sideband cooling

Doppler cooling is fundamentally limited by the linewidth of the cooling transition used (2.46). For cooling on the S1/2 ↔ P1/2 transition with linewidth 23 MHz and at typical trap frequency of 1 MHz, Doppler cooling leaves the ion motion a thermal state of n¯Doppler = 8 at minimum. Therefore, getting the motion near the ground state (n¯ < 1 or even n¯ 1)
requires additional cooling by a diﬀerent technique.
Sideband cooling requires resolved sidebands. If the linewidth of the cooling transition
is smaller than the motional trap frequency, then each motional sideband can be spectrally resolved. To achieve resolved sidebands in 40Ca+ , the 729 nm S1/2 ↔ D5/2 E2 transition is used. We tune the 729 nm laser to the ﬁrst red sideband of the mode we are interested in cooling, ∆ = −ωj, where ωj labels the frequency of the mode to be cooled, with Rabi frequency Ωcool. We simultaneously turn on the 854 nm as an auxiliary laser, which drives D5/2 ↔ P3/2 with Rabi frequency Ωaux, eﬀectively quenchin-
g the lifetime of the otherwise long-lived D5/2 state. One may consider this quenching eﬀect to be eﬀectively amplifying the linewidth of the 729 nm cooling transition from Γcool to

Γ˜ cool

=

(Γaux

+

Ω2aux Γcool)2

+ 4∆2aux Γaux,

(2.47)

where ∆aux is the detuning of the 854 nm laser and Γaux is the linewidth of the D5/2 ↔ P3/2 transition. Since the red sideband is being driven, each cooling cycle removes one motional quantum, which in principle continues until the ground state is reached. Importantly, the spontaneous decay back into the ground state is one which does not change the motional quantum number with high probability, as long as the ion begins in the Lamb-Dicke regime. The probability of such decays which do change the -
motional quantum number is of order ηa2ux, where ηaux is the Lamb-Dicke factor with respect to the auxiliary transition. The sideband cooling process is fundamentally limited by two heating eﬀects of the same order: oﬀ-resonant excitation of the carrier followed by decay on the blue sideband transition, and oﬀ-resonant excitation of the blue sideband followed by decay on the carrier transition. The limiting temperature for sideband cooling is [9]

n¯sideband

=

Γ˜ 2cool 4ωj2

ηa2ux ηc2ool

+

1 4

,

(2.48)

where ηcool is the Lamb-Dicke factor with respect to the cooling transition. While this gives the fundamental temperature limit of sideband cooling, there will often be a higher practical
limit due to other unwanted heating processes which compete with the cooling process. In 40Ca+ , the sideband cooling cycle ideally returns population to the same S1/2 sublevel
in which we began, allowing for continuous cooling while the cooling an auxiliary lasers are on.

CHAPTER 2. TRAPPING AND CONTROLLING THE QUANTUM STATE OF

ATOMIC IONS

30

To maximize the probability of this occurring, the 729 nm laser is tuned to drive population
from the S1/2(m = −1/2) state to the stretched D5/2(m = −5/2) state, to guarantee by E1 selection rules that the 854 nm laser then drives population to the stretched P3/2(m = −3/2) state, from which it must decay back to the S1/2(m = −1/2) state. However, in the event of a decay of P3/2 to D3/2 or D5/2 instead, repumping by the 866 or 854 nm lasers may change the magnetic quantum number and allow for subsequent decay into S1/2(m = +1/2). Thus sideband cooling eﬀectively slowly pumps population fro-
m S1/2(m = −1/2) to S1/2(m = +1/2). This necessitates sideband cooling in stages rather than fully continuously: After about 1
ms, sideband cooling is paused for optical pumping back to S1/2(m = −1/2), after which sideband cooling is resumed.

2.6.3 Coherent quantum state operations

Generally, the coherent portion of a quantum state experiment is the one of the most scientiﬁc

interest, while other processes serve to prepare the ion for coherent manipulation and to

measure the result. In this work, coherent operations are carried out on the S1/2 ↔ D5/2 transition, where in particular any pair of Zeeman sublevels of these energy levels may be

chosen, as long as they obey |∆mj| ≤ 2 so that the transition is electric-quadrupole allowed.

In general, the motion of the ion will be included in the consideration of this process, which is

described by the Hamiltonian (2.30), which upon transformation into the interaction picture

becomes (2.32).

On the carrier transition, appropriate choice of laser pulse durations and phases can pre-

pare an arbitrary superposition of the two electronic states. Labeling the kets corresponding

to the states S1/2 and D5/2 as |S and |D , respectively, an arbitrary superposition may be written as α |S + β |D , with arbitrary normalized complex coeﬃcients α and β. On

motional sidebands, one can similarly manipulate the bosonic Hilbert space of the ion’s har-

monic oscillator motion. As a simple example, a π/2-pulse on the blue sideband (∆ = ωx,

duration π/(2ηΩ)) beginning from the ground state results in the state

√1 2

(|S,

0

+ |D, 1 ),

where the two harmonic oscillator Fock states |0 and |1 are entangled with the ion’s elec-

tronic state. Using such interactions as building blocks, one can prepare highly non-classical

states of both the ion’s internal and external degrees of freedom. Furthermore, with multiple

ions, one can use similar techniques to entangle the ions together, as in the Mølmer-Sørensen

interaction [27], though this is not done in this work.

2.6.4 State readout
We measure the quantum state of 40Ca+ by applying 397 nm light, which is resonant with the S1/2 ↔ P1/2 transition but oﬀ-resonant with respect to any transition from D5/2, whereupon ion collapses into S1/2 or D5/2. If the ion collapses to S1/2, then the laser light is scattered oﬀ the resonant S1/2 ↔ P1/2 transition and can be measured as bright by a camera or photomultiplier tube. If the ion collapses to D5/2, the ion scatters no light and is observed to be dark.

CHAPTER 2. TRAPPING AND CONTROLLING THE QUANTUM STATE OF

ATOMIC IONS

31

A superposition α |S + β |D collapses into |S with probability |α|2 and into |D with probability |β|2. More generally, the observed probabilities correspond to diagonal elements of the reduced density matrix in the 2-dimensional electronic Hilbert space. This reduced density matrix may be mixed due to decoherence, or due to entanglement between the electronic state and the motional state. Measurement of the electronic state can thus be used to infer information about the motional state. For exampl-
e, in an experiment which excites the ﬁrst blue motional sideband from the ground state, one can infer addition of a motional quantum from excitation of the electronic state. This is useful because the motional degree of freedom is generally not directly measurable; the linewidth of the readout transition is 23 MHz, while the motional frequency is order 1 MHz, making individual motional energy levels unresolvable by this measurement.
When multiple ions are used, simultaneous readout of their electronic states using a photomultiplier tube yields only information about the total number of bright ions. We typically use this information to compute the average probability of excitation to the |D state, which for N ions is given by

PD =

N n=0

n(1

−

pn)

,

N

where pn is the probability of ﬁnding n ions bright.

(2.49)

2.6.5 Quantum state experiments
A full experiment in which we engineer and measure the quantum state of trapped ions combines the individual processes outlined above. A representative example sequence used in an experiment in 40Ca+ is as follows:
1. State initialization (1 – 10 µs) We wish to begin with population in the S1/2 ground state, but some population may be trapped in the long-lived D3/2 or D5/2 states from the previous experiment cycle. We thus apply the 854 and 866 nm lasers to pump out of the D states.
2. Doppler cooling (1 – 6 ms) The 397 nm laser is applied, with detuning and power optimized to minimize the ion temperature within a given cooling window. Spontaneous emission may occur from the P1/2 to the D3/2 state, so the 866 nm laser is also applied to pump out of D3/2 and back into the cooling cycle.
3. Optical pumping (0.5 – 2 ms) Doppler cooling leaves the ion in an incoherent mixture of the two S1/2 ground states, so optical pumping with the 729 and 854 nm lasers is used to prepare the population into purely the m = −1/2 subelevel. The 866 nm laser will also be on to pump out stray population decay into the D3/2 state.
4. Sideband cooling stages, each followed by optical pumping (6×(1 – 2 ms + 0.5 – 1 ms)) Each sideband cooling stage requires the 729 nm laser to be detuned to

CHAPTER 2. TRAPPING AND CONTROLLING THE QUANTUM STATE OF

ATOMIC IONS

32

the ﬁrst red sideband of the mode being cooled. Additional stages can be introduced with diﬀerent detunings in order to cool multiple motional modes. The 854 nm laser is also used, with a power optimized for the quenching process. The 866 nm is present for repumping.

5. Coherent state manipulation (1 µs – 10 ms) At this stage, the ion motion has been
cooled and its internal state is pure. The 729 nm laser couples the S1/2(m = −1/2) state to the D5/2(m = −1/2) state on either the carrier or a motional sideband for some prescribed sequence of pulses, resulting in some superposition of S1/2(m = −1/2) and D5/2(m = −1/2), which may include motional degrees of freedom if motional sidebands are addressed.

6. State readout (1 – 10 ms) The 397 nm laser is applied, along with the 866 nm laser for repumping. The quantum state of each ion collapses into either S1/2 or D5/2 with probability determined by the state prepared in the previous step. The amplitude of the 397 nm laser is optimized to maximize the scattering rate to read out as quickly as possible.

To actually estimate the probabilities of excitation, the experiment is repeated for typically 100 repetitions. We may then change one parameter, such as the time where the 729 nm laser is on for coherent state manipulation, and repeat. This measures the state probabilities as a function of this parameter.

33
Chapter 3
The trapped-ion planar quantum rotor
When multiple ions are trapped together in the same Paul-trap potential and are suﬃciently cold, they form a Coulomb crystal, in which their motion ﬁnds an equilibrium balanced between the external potential from the Paul trap and the ions’ mutual repulsion of each other. In a typical Coulomb crystal, the ions organize themselves into well-deﬁned static equilibrium positions. Ion motion is restricted to small deviations from these equilibrium positions, and analysis of this motion involves breakin-
g the motion into normal modes. Each of these modes involves the motion of multiple ions, but with an appropriate change of coordinates, each mode can be regarded as a single quantum harmonic oscillator with a characteristic oscillation frequency. Paul-trapped ion crystal motion thus represents an experimental manifestation of the quantum harmonic oscillator, a textbook quantum system. It also enables trapped ions’ usefulness as a quantum computing platform by mediating entangling operations betwe-
en ions. As a result, the vibrational motion of trapped ion crystals is a fundamental part of the ﬁeld of trapped-ion quantum dynamics.
The work in this thesis explores a type of Paul-trapped ion Coulomb crystal which fundamentally diﬀers from this typical picture. Rather than the ions having well-deﬁned static equilibrium positions, the crystal is instead free to rotate in one plane. This results in one normal mode which is not a quantum harmonic oscillator, but is instead a quantum rotor. This chapter details the physics of such a Coulomb crystal rotor and how it interacts with laser light, and in particular how it diﬀers from t-
he trapped-ion Coulomb crystal harmonic oscillator. It begins with the well-established physics of static Paul-trapped ion crystals, the typical system featuring only vibrational modes, before similarly analyzing freely rotating ion crystals. The results are then summarized in Tab. 3.2.
Most sections in this chapter have the following structure: An analysis of the classical motion and its normal modes, followed by quantization of the motion, and ﬁnally an analysis of the quantum mechanics of a coherent laser ﬁeld interacting with this quantized motion, in particular computing the coupling strength between motional states induced by the laser. In all cases considered, the laser interacts with the ion motion via motional sidebands of a

CHAPTER 3. THE TRAPPED-ION PLANAR QUANTUM ROTOR

34

coherent (electric-dipole forbidden) electronic transition between two electronic eigenstates
|a and |b , with Rabi frequency Ω. In our experimental work, this is done on the 729 nm S1/2 ↔ D5/2 transition of 40Ca+ .

3.1 Single ions with a single vibrational mode
This is the simplest case, already analyzed in Sec. 2.4.3. In summary: In the pseudopotential approximation, the ion motion is a three-dimensional harmonic oscillator with characteristic oscillation frequencies ωx, ωy, ωz, which can be quantized and described by the Hamiltonian (2.5). In the presence of a laser ﬁeld near resonance with an electric dipole-forbidden transition of the ion’s valence electron, the Hamiltonian (considering only one mode ωx) is given by (2.30), which in the interaction p-
icture is (2.32). The coupling strengths between energy eigenstates of the motion (Fock states) in the presence of this laser ﬁeld are given by (2.34), which are well-approximated by (2.36) in the Lamb-Dicke regime η2(2n + 1) 1.
These results were derived by the following formulation:
1. Write the Hamiltonian in the Schr¨odinger picture.
2. Rewrite the operator eik·r (which comes from the plane-wave form of the laser ﬁeld) in terms of ladder operators for the ion’s motion (which in this case are a, a†).
3. Transform into the interaction picture.
4. Compute the matrix element between an arbitrary pair of motional eigenstates.
This procedure is followed in the following sections to derive corresponding coupling strengths for the case of multiple ions, and in the case of a freely rotating Coulomb crystal.

3.2 N -ion crystals with 3N vibrational modes
This section generalizes the previous section in two ways: by considering an arbitrary number of ions trapped together, and by accounting for all 3N of their motional degrees of freedom. For Coulomb crystals composed of many trapped ions, the results of the previous section extend to a set of 3N harmonic oscillators in total, each with its own characteristic vibrational frequency and Lamb-Dicke factor. The primary diﬀerence is these oscillators describe the motion of normal modes of the crystal, w-
hich can involve the motion of multiple ions, due to their mutual Coulomb interaction.
3.2.1 Normal modes of motion
An ion Coulomb crystal is formed when N trapped ions ﬁnd their equilibrium positions which minimize the potential energy of the entire system. Contributions to this potential energy

CHAPTER 3. THE TRAPPED-ION PLANAR QUANTUM ROTOR

35

are the external potential created by the Paul trap and the ions’ mutual Coulomb repulsion.
The external potential is characterized by the three center-of-mass secular frequencies ωx, ωy, ωz. The N ions have 3N motional degrees of freedom in total, which couple to each other through the Coulomb interaction. If the crystal is suﬃciently cold, the motion of the ions
about their respective equilibrium positions will be small enough that the potential energy
of the crystal can be adequately described using a Taylor expansion about the equilibrium position (x0i , yi0, zi0) of each ion i. This expansion describes harmonic motion if taken only to second order. Diagonalizing this potential energy function in the motional coordinates leads
to 3N normal modes [28]. Each mode j has a characteristic frequency ωj and coordinate ξj, which is a linear combination of the ions’ real-space coordinates δxi, δyi, δzi describing their deviation from their equilibrium positions. The normal mode coordinates can be related to the real-space coordinates by the N × 3N matrices

3N
δxi = Xijξj,
j=1

3N
δyi = Yijξj,
j=1

3N
δzi = Zijξj.
j=1

(3.1)

Quantizing the motion of the normal modes yields corresponding creation and annihilation operators a†j, aj, related to the coordinate by

ξj = 2mωj (aj + a†j).

(3.2)

This thesis deﬁnes ωx < ωy < ωz, contrary to some conventions where ωz is taken to be the smallest trap frequency. This is because for the ring trap it is convenient to deﬁne the symmetry axis as the z-direction, but the conﬁnement along this axis is the strongest. Hence here ωz is deﬁned to always be the axis of highest trap frequency, so that the usual anisotropic case ωx < ωy < ωz smoothly connects with the relevant planar isotropic case ωx = ωy < ωz as ωy → ωx.
As a simple example, consider a two-ion Coulomb crystal. The equilibrium positions can be solved for analytically in this case:

r01 =

e2 16π 0mωx2

1/3
, 0, 0

r02 =

−

e2 16π 0mωx2

1/3
, 0, 0

.

(3.3)

There are 6 total normal modes: three center-of-mass (COM) modes with both ions oscillating in phase at the same frequency of the corresponding single ion mode, a “stretch” mode in which the ions oscillate out of phase towards and away from each other, and two “rocking” modes in which the ions oscillate out of phase normal to the ion-ion axis. The eigenfrequencies and eigenvectors of these modes are tabulated in Tab. 3.1, and shown in Fig. 3.1.

CHAPTER 3. THE TRAPPED-ION PLANAR QUANTUM ROTOR

36

Mode Frequency
Xj Yj Zj

COM x

ωx

√1 2

(

1 1

)

(

0 0

)

(

0 0

)

COM y

ωy

(

0 0

)

√1 2

(

1 1

)

(

0 0

)

COM z

ωz

(

0 0

)

(

0 0

)

√1 2

(

1 1

)

S√tretch

3ωx

√1 2

(

1 −1

)

(

0 0

)

(

0 0

)

Rocking y

ωy2 − ωx2

(

0 0

)

√1 2

(

1 −1

)

(

0 0

)

Rocking z

ωz2 − ωx2

(

0 0

)

(

0 0

)

√1 2

(

1 −1

)

Table 3.1: Mode frequencies and structure of all normal modes of a 2-ion Coulomb crystal in an anisotropic potential. Here the mode matrices X, Y , Z are shown in terms of the column that corresponds to each mode, with each element of the column corresponding to each ion. The full 2 × 6 matrices are constructed by concatenating the columns for each mode along each row of the table.

z y
x

z y
x

z y
x

ωx
z y x

ωy
z y x

ωz
z y x

3ωx

ωy2 – ωx2

ωz2 – ωx2

Figure 3.1: Normal modes of a 2-ion Coulomb crystal oriented along the x-direction. Each is shown with its corresponding eigenfrequency.

3.2.2 Interaction with a coherent laser ﬁeld
To analyze the physics of a coherent laser ﬁeld interacting with a trapped-ion Coulomb crystal with many motional modes, we can ﬁrst generalize the Hamiltonian (2.30) to include multiple ions and many modes:

H = H0 + H1,

3N
H0 =

ωj (a†j aj

+

1 2

)

+

N

1 2

ωab (|bi

bi| − |ai

ai|)

j=1

i=1

H1 =

N

1 2

Ωi (|bi

ai| + |bi

ai|) ei(k·ri−ωt) + e−i(k·ri−ωt)

.

i=1

(3.4)

CHAPTER 3. THE TRAPPED-ION PLANAR QUANTUM ROTOR

37

The electronic-transition Rabi frequency Ωi is given by the laser ﬁeld’s matrix element between the electronic states |a and |b , e.g. (2.19). Hereafter we will not be concerned with computing the Rabi frequency, but instead take as a given that it takes on some value proportional to the laser ﬁeld amplitude. In practice, we directly measure the Rabi frequency by observing Rabi oscillations. In general, the Rabi frequency of each ion i may diﬀer if the laser intensity at the ions’ positions diﬀers-
.
Rewriting the operator k · ri in terms of normal modes using (3.1) and (3.2),

k · ri = k · (r0i + δri)

= k · r0i + kx Xijξj + ky Yijξj + kz Zijξj

j

j

j

= k · r0i + = k · r0i +

(kxXij + kyYij + kzZij)
j
ηij(aj + a†j),
j

2mωj (aj + a†j)

(3.5)

where the Lamb-Dicke factor for the ith ion and jth mode is deﬁned as

ηij ≡ (kxXij + kyYij + kzZij) 2mωj .

(3.6)

In terms of the normal modes, the interaction-picture Hamiltonian in the RWA becomes

HI

=

1 2

Ωi |bi ai|
i

e e iηij[a˜j(t)+a˜†j (t)] −i∆t + h.c.
j

(3.7)

The term k · r0i containing the equilibrium positions becomes a constant phase factor eik·r0i which may be neglected, e.g. by being absorbed into the deﬁnition of Ωi. The coupling
strength for the ith ion for an arbitrary transition between motional eigenstates is

where

bi, n + ∆n|HI |ai, n

=

1 2

Ωi n,n+∆n e−iδ∆nt,

Ωi n,n+∆n ≡ Ωi
j

nj + ∆nj |eηij(aj+a†j)|nj

δ∆n ≡ ∆ − ∆njωj
j

(3.8a)
(3.8b) (3.8c)

This may be compared to the case of a single ion with a single mode:

CHAPTER 3. THE TRAPPED-ION PLANAR QUANTUM ROTOR

38

• δ∆n is equal to the detuning of the laser frequency from the transition frequency of |a, n ↔ |b, n + ∆n . The resonance condition δ∆n = 0 may be understood as conservation of energy for the given transition. In this case, each mode independently may change its energy by an integer number of its respective quantum ωj.
• The amplitude Ωi n,n+∆n is the coupling strength for the transition, and will be equal to the Rabi frequency of transitions between |a, n and |b, n + ∆n . This total coupling strength can be understood as the product of all coupling strengths of each mode individually. Thus the coupling to each mode is independent of coupling to the other modes. Each may be evaluated independently from (2.34), or (2.36) if the Lamb-Dicke approximation holds.

3.3 2-ion crystals in a planar rigid rotor
The previous sections assumed that the Paul trap potential was anisotropic, so that the three characteristic secular frequencies of the Paul trap potential ωx, ωy, ωz were distinct. Here, we now consider the case of planar isotropy, ωx = ωy < ωz, in which we will ﬁnd that the motion of ion crystals can diﬀer quite drastically from the typical case considered previously. In particular, they exhibit rotational motion, rather than only vibrational. The smallest Coulomb crystal to exhibit this behavio-
r consists of 2 ions, so we begin by considering this case. While the results of the previous sections of this chapter are well-established, the trapped-ion rotor is a novel system and thus the results of this section are also novel.
In the previous section, it was possible to move directly from the expression for the potential energy of the Coulomb crystal to the description of the normal modes. Deriving the normal modes for a Coulomb crystal which is allowed to rotate requires some more care, so this section will go through the derivation. Note in particular that, for the 2-ion anisotropic case, the eigenmodes and their frequencies are given in Tab. 3.1. For the present case of ωx = ωy, we will ﬁnd that 5 of these 6 modes re-
main unchanged (the COM modes, stretch, and rocking z modes), while the rocking y mode is modiﬁed, as the vibrational description is no longer valid. Indeed, we can see that if it were, its frequency ωy2 − ωx2 would go to zero as ωy approached ωx. This mode instead becomes the rotational mode of the trapped-ion rotor.

3.3.1 Derivation of the modes of motion

The full Hamiltonian of the crystal’s motion in terms of the real-space positions and momenta of the two ions r1,2, p1,2 is

H

=

p21 2m

+

p22 2m

+

1 2

mωx2(x21

+

y12

+

x22

+

y22)

+

1 2

mωz2(z12

+

z22)

+

4π

e2 0|r1 −

r2| ,

(3.9)

where p1,2 = |p1,2|. This system has 6 degrees of freedom in total. As usual in a twobody problem, it is convenient do deﬁne new coordinates, the center-of-mass position and

CHAPTER 3. THE TRAPPED-ION PLANAR QUANTUM ROTOR

39

momentum R, P and the relative position and momentum r, p, deﬁned by

R

=

r1

+ r2 , 2

r = r1 − r2,

P = p1 + p2

p

=

p1

− 2

p2 .

(3.10)

Substituting this into (3.9), we ﬁnd that the Hamiltonian is written as a sum two terms, one containing only center-of-mass coordinates, and one containing only relative coordinates. The center-of-mass Hamiltonian is a 3-dimensional harmonic oscillator with two isotropic directions at frequency ωx and one at ωz; precisely the same as for a single ion in the same potential. The center-of-mass motion therefore exhibits the usual three vibrational normal modes.
For the three degrees of freedom for the “relative” motion, we move to cylindrical coordinates, ρ, θ, z, deﬁned by ρ cos θ = x, ρ sin θ = y. The potential energy term of the relative motion in cylindrical coordinates is

U (r)

=

1 2

µ(ωx2ρ2

+ ωz2z2) +

e2 4π 0

1 ,
ρ2 + z2

(3.11)

where µ = m/2 is the reduced mass. Here the rigid rotor assumption is introduced, to be

clariﬁed and justiﬁed later in this section: The centrifugal potential has negligible eﬀect on

this potential. We will ﬁnd that this condition is equivalent to the condition that the rotation

frequency ωrot of the ion crystal must be small compared to the in-plane secular frequency

ωx. Under this assumption, we may proceed by ﬁnding the minimum of this potential and

expand about it, without considering rotational eﬀects. The minimum is at z = 0 and ρ = ρe,

where

ρe =

e2

1/3

4π 0µωx2

.

(3.12)

Expanding the potential about ρ = ρe, z = 0, the lowest-order remaining terms are

U (r)

≈

3 2

µωx2(ρ

−

ρe)2

+

1 2

µ(ωz2

−

ωx2)z2.

(3.13)

Here we’ve√found two more normal modes, the stretch mode in which ρ oscillates about ρe at frequency 3ωx, and the rocking z mode in which z oscillates about at frequency ωz2 − ωx2, precisely the same as the anisotropic case as in Tab. 3.1. To ﬁnd the description of the remaining degree of freedom, the angular coordinate θ which will describe the rotational motion, it is most useful to turn to the Schro¨dinger equation. It will be necessary to include the radial coordinate ρ in this description.
We seek the eigenfunctions and energies from the time-independent Schr¨odinger equation. As is the typical technique, we assume that the eigenfunctions for the two coordinates ρ, θ factor and write them as ψ(ρ, θ) = R(ρ)Y (θ). The time-independent Schro¨dinger equation

CHAPTER 3. THE TRAPPED-ION PLANAR QUANTUM ROTOR

40

in cylindrical coordinates then reads

Hψ = Eψ

2
− 2µ

∂2 ∂ρ2

+

1 ρ

∂ ∂ρ

+

1 ρ2

∂2 ∂θ2

R(ρ)Y

(θ)

+

3 2

µωx2(ρ

−

ρe)2R(ρ)Y

(θ)

=

ER(ρ)Y

(θ),

(3.14)

With some massaging, this becomes

ρ2 R

d2R dρ2

+

ρ R

dR dρ

−

2µr2
2

3 2

µωx2(ρ

−

ρe)2

−

E

R

+

1 d2Y Y dθ2

= 0.

(3.15)

2

−2

With the coordinates separated, each of the two bracketed terms must be equal to a constant, which we call ± 2 in anticipation of becoming the angular momentum quantum number.
Indeed, the angular eigenfunctions are

Y (θ) = √1 ei θ. 2π

(3.16)

Continuity of equation, we

Y requires deﬁne u(ρ)

=to√bρeRa(nρi)n; ttehgeer.raFdoiar lthSechrre¨omdainingienrgerqaudaiatilopnarctanof

the Schr¨odinger then be written

(with some further massaging) as

2
− 2µ

d2u dρ2

+

3 2

µωx2(ρ

−

ρe)2

+

2
2µ

2

−

1 4

ρ2

u = Eu.

(3.17)

We now have a typical 1-dimensional Schro¨dinger equation in the coordinate ρ, with a potential consisting of two terms: One is the stretch mode’s harmonic potential, and the other is a centrifugal term. As previously stated, the rigid-rotor approximation neglects the modiﬁcation of the centrifugal term to the harmonic one. One way to quantify this is to compute the fractional change in the equilibrium radial coordinate due to the centrifugal term, δρe. The centrifugal eﬀect can then be neglected -
if δρe/ρe 1. In terms of the parameters of (3.17), this condition turns out to be

δρe( ρe

)

=

22
3µ2 ρ4e ωx2

1.

(3.18)

With typical experimental parameters, this ratio is of the order 10−3 − 10−2, quantifying the degree to which the rigid rotor approximation is justiﬁed. This approximation will be taken throughout the majority of this work, but Sec. 3.5 will also look more quantitatively at the implications of non-rigid eﬀects, where also the above rigidity condition (3.18) will be shown.
In the rigid rotor approximation, we can thus set ρ = ρe in the centrifugal term. We can also ignore the −1/4 term, which is justiﬁed since (1) in practice, we consider states

CHAPTER 3. THE TRAPPED-ION PLANAR QUANTUM ROTOR

41

z y x
ωx
z y x

z y x
ωy = ωx
z y x

z y x
ωz
z y x

3ωx

Free rotation

ωz2 – ωx2

Figure 3.2: Normal modes of a 2-ion crystal which may rotate. The diﬀerences between this case and Fig. 3.1 are that here, the x and y COM frequencies are the same, and the horizontal rocking mode is replaced by the rotational mode.

where 1 (but not so large that the rigid rotor approximation is broken), and (2) if the rigid rotor approximation is already taken, the −1/4 term represents a constant energy oﬀset anyway. Then the Schr¨odinger equation is

2
− 2µ

d2u dρ2

+

3 2

µωx2(ρ

−

ρe)2

+

22
2µρ2e

u = Eu.

(3.19)

This fully separates the stretch mode (in coordinate ρ) from the rotor mode (in coordinate θ). We can now consider the rotor mode as independent from all 5 other degrees of freedom.

3.3.2 Quantum mechanics of the planar rigid rotor mode

As found from the Schr¨odinger equation, the rigid rotor mode has eigenfunctions Y (θ) ∝ ei θ

and energy E = 2 2/2µρ2e, where is quantized to integer values. It is convenient to rewrite this now in terms of laboratory-frame parameters rather than 2-body problem parameters,

m = 2µ, r = ρe/2, where r is the radius of the 2-ion rotor. (We can now drop the subscript e for equilibrium from the radius for the rest of this section, since the rotor is rigid by

assumption, such that it is understood that for the rigid rotor, r is a constant and not a

coordinate.)

22
E = 4mr2 = ωr 2,

(3.20)

where ωr ≡ /4mr2 is the rotational constant, deﬁning the energy scale of the rotor’s energy

states. In the context of molecules, this constant is sometimes called B [29]. With typical

CHAPTER 3. THE TRAPPED-ION PLANAR QUANTUM ROTOR

42

experimental parameters in this work, the rotational constant is of the order 2π × 10 Hz. We can also rewrite the rotor radius (3.11) in terms of laboratory-frame parameters:

r=

e2

1/3

16π 0mωx2

.

(3.21)

Note that this radius matches the ion equilibrium positions in the case of a 2-ion crystal in a
typical anisotropic potential, (3.3). With typical experimental parameters, this is a few µm.
It is worth noting that we could also derive the eigenfunctions and energies of this rigid
rotor mode directly from assuming it to be a quantum planar rotor. Such a system has
only one degree of freedom, the angular position θ, whose conjugate momentum is the z-
component of angular momentum Lz. The potential is constant in θ, so the Hamiltonian consists of only a kinetic energy term, H = L2z/2I, where I is the moment of inertia. For the 2-ion crystal, I = 2mr2, but in general, all parameters of the planar quantum rotor can be written in terms of I = i miri2, providing a more general formulation which is agnostic to the rotor’s constituent particles and will become useful in the following section. In particular,
the rotational constant is given in general by

ωr = 2I .

(3.22)

The Hamiltonian L2z/2I manifestly commutes with the angular momentum Lz, which is found to be quantized in integer multiples of , so that the simultaneous eigenfunctions of angular momentum and the Hamiltonian, | , satisfy Lz | = | and H | = 2 2/2I | =
ωr 2 | . This is the same result as (3.20).
Furthermore, from the classical relation between angular momentum and angular velocity
L = Iωrot, we can identify angular momentum eigenstates | with classical angular velocities
by = Iωrot , so that

ωrot = I = 2 ωr

(3.23)

This provides an alternative interpretation of the rotational constant ωr: The quantum of angular momentum, , has a corresponding quantum of angular velocity of 2ωr, equal to twice the rotational constant.
As with harmonic oscillator modes, we are interested in how the motion of the rigid rotor mode aﬀects a coherent electronic transition of the ions; in particular, at what frequencies motional sidebands appear, and what their coupling strengths are.

3.3.3 Coupling strengths of interaction with a coherent laser ﬁeld
Here we will consider the interaction of a coherent laser ﬁeld with a 2-ion crystal that exhibits only planar rotational motion; consider the case of including other modes is considered in Sec. 3.4.

CHAPTER 3. THE TRAPPED-ION PLANAR QUANTUM ROTOR

43

y
(x1, y1)

k
ky kx

x
(x10, y10)

Figure 3.3: Two ions in a planar rotor illuminated by a laser ﬁeld with wavevector k. The
coordinate θ deﬁnes the angle of rotation of the full crystal relative to a reference orientation where the ion positions are (x0i , yi0).

The appropriate Hamiltonian, including the 2 electronic states of interest of the 2 ions and the rotational motion, interacting with a laser ﬁeld at frequency ω with wavevector k as usual, is

H = H0 + H1,

H0

=

L2z 2I

+

2

1 2

ωab (|bi

bi| − |ai

ai|)

i=1

H1 =

2

1 2

Ω (|bi

ai| + |bi ai|) ei(k·ri−ωt) + e−i(k·ri−ωt) .

i=1

(3.24)

In this case, the ions are no longer localized to well-deﬁned positions, so assigning a Rabi frequency Ωi to each due to its position in the laser ﬁeld is no longer meaningful. For simplicity, it is assumed that the light ﬁeld uniformly illuminates the crystal, with electronic Rabi frequency Ω.

The position operator

We can ﬁrst transform the operator k · ri to be in terms of angular momentum raising and

lowering operators L±, analogous to rewriting k · r as η(a + a†) in vibrational modes. This

can be done by recognizing the angular momentum raising and lowering operators in position

space as e±iθ, since L± |

=

e±iθ

√1 2π

ei

θ

=

√1 2π

ei(

±1)θ

=

|

±1 .

The position of ion 1 is

CHAPTER 3. THE TRAPPED-ION PLANAR QUANTUM ROTOR

44

(x1, y1, z1) = (r cos θ, r sin θ, 0), so

k · r1 = kxr cos θ + kyr sin θ

=

eiθ kxr

+ e−iθ 2

+ kyr eiθ

− e−iθ 2i

=

1 2

(kx

−

iky )rL+

+

1 2

(kx

+

iky )rL−

=

1 2 ζ1L+

+

1 2

ζ1∗

L−

,

(3.25a)

where

ζ1 ≡ (kx − iky)r.

(3.25b)

ζ1 (whose subscript speciﬁes the ion number) is a dimensionless, complex parameter, eﬀectively quantifying the ratio between the rotor radius and the laser wavelength. This is gen-

erally much larger than a typical Lamb-Dicke parameter η for a vibrational mode, since the

relevant length scale is an ion-ion distance, rather than the size of a single ion’s wavepacket.

As an example, consider 40Ca+ in a trap with secular frequency in the x-direction of 1 MHz

interacting with 729 nm light directed along the x-direction. A single ion’s vibrational mode

will have a Lamb-Dicke factor of η = 0.097, while a pair of ions in a planar isotropic trap

of the same secular frequency will have a rotor radius r = 2.8 µm which gives ζ = 24. The

position of ion 2 is r2 = −r1 since we have a rigid rotor centered at the origin, so evaluating

k · r2

gives

1 2

ζ2L+

+

1 2

ζ2∗L−

where

ζ2

=

−ζ1.

More

generally,

k

·

ri

=

1 2

(ζiL+

+

ζi∗L−),

where

(3.26a)

ζi ≡ (kx − iky)(x0i + iyi0).

(3.26b)

(x0i , yi0) is the equilibrium position of ion i in the rotor plane at θ = 0. The overall phase of all ζi is arbitrary, depending on the choice of the directions of the x and y axes, but the
relative phases between ζi for diﬀerent ions encode information about the angles between
the diﬀerent ions’ equilibrium positions.

The interaction picture Hamiltonian

We can now transform as usual into the interaction picture given by HI = U †H1U , U =

e−iH0t/ .

HI

=

1 2

2

Ω |bi

ai|

e e i

1 2

[ζi

L˜ + (t)+ζi∗

L˜ −

(t)]

−i∆t

+

h.c.

(3.27)

i=1

where

L˜+(t) =

ei(2 +1)ωrt | + 1 |

(3.28)

CHAPTER 3. THE TRAPPED-ION PLANAR QUANTUM ROTOR

45

is the interaction-picture angular momentum raising operator. From here we can compute matrix elements between energy eigenstates, analogous to (2.33):

bi, |HI |ai,

=

1 2

=

1 2

Ω e−i∆t

|ei

1 2

[ζi

L˜ +

(t)+ζi∗

L˜ −

(t)]

|

Ω e−i[∆−( 2− 2)ωr]t

|ei

1 2

(ζi

L+ +ζi∗

L−)

|

(3.29)

Here, we ﬁnd that resonance occurs when ∆ = ( 2 − 2)ωr, or when the detuning from the carrier electronic transition is equal to the transition frequency between the states | and | , (E − E )/ = ( 2 − 2)ωr.

Rotational transition coupling strengths

The coupling strengths of rotational sidebands are calculated by evaluating the remaining matrix element. To do this, it is useful to rewrite as + ∆ . The matrix element can be computed by writing everything in position space and evaluating the appropriate integral:

+∆

|ei

1 2

[ζ

L+

+ζ

∗

L−

]|

=

2π dθ √1

e−i(

+∆

e √1 )θ

i

1 2

(ζ

eiθ

+ζ ∗

e−iθ

)

ei θ

0

2π

2π

=

1 2π

e 2π

i

1 2

(ζ

eiθ

+ζ

∗

e−iθ

)−i∆

θ

0

= ei∆ [arg(ζ)+π/2] J∆ (|ζ|).

(3.30)

The magnitude of this matrix element is the ∆ th order Bessel function of the ﬁrst kind

evaluated at |ζ|. Note that this expression holds even for transitions which lower the angular

momentum quantum number, using the Bessel function identity J−n(x) = (−1)nJn(x). In

total then, we have

bi, + ∆ |HI |ai,

=

1 2

Ω∆ e−iδ , +∆ t,

(3.31a)

where

Ω∆ ≡ Ω J∆ (|ζi|) ei∆ [arg(ζi)+π/2] δ , +∆ ≡ ∆ − (2 ∆ + ∆ 2)ωr.

(3.31b) (3.31c)

This result for rotor-mode laser-ion coupling can be compared to that of vibrational-mode laser-ion coupling (3.8). A few points in particular are worth making:
• Resonance occurs at a detuning of ∆ = (2 ∆ + ∆ 2)ωr, which is the transition frequency between the states | and | + ∆ . Unlike the harmonic oscillator, because the rotor is nonlinear, this transition frequency depends on the starting state | , not just on the number of quanta being added or subtracted.

CHAPTER 3. THE TRAPPED-ION PLANAR QUANTUM ROTOR

46

Excitation (a.u.)

(a)
0.3
0.2
0.1

(b)
ζ = 2.0 ζ = 10.0

k

a

0.0

−10

−5

0

5

10

Rotational sideband order

Figure 3.4: (a) Schematic sideband spectra for rigid rotor sideband transitions. The height of the peaks shown is the square of the magnitude of the relative coupling strength J∆ (|ζ|). Typical values of |ζ| are greater than 1, so unlike a vibrational mode in the Lamb-Dickeregime, the rotational coupling strengths do not fall monotonically with sideband order. (b) Semi-classical picture of the rotor absorbing a photon carrying linear mometum k at a perpendicular distance a away from the axis of ro-
tation, thus imparting angular momentum L = ka.

• If ∆ , then the sideband frequency is approximately 2 ∆ ωr = ∆ ωrot, which is ∆ times the classical rotation frequency that corresponds to the angular momentum . Thus, in this limit, motional sidebands are found at integer multiples of the classical rotation frequency. This agrees with a classical expectation of ﬁnding modulation sidebands at the frequency of the motion.
• The magnitude of the coupling strength, J∆ (|ζi|), is independent of the starting state | , and depends only on the order of the sideband transition, unlike the harmonic oscillator.
In summary, rotational sidebands occur at frequencies which are (approximately) integer multiples of the rotation frequency, with coupling strengths that are independent of the state | and depend only on ∆ . In particular, their magnitude is given by J∆ (|ζ|), where |ζ| is a dimensionless parameter equal to the product of the rotor radius and the laser wavevector projected onto the rotor plane.
We can compare this result to a semi-classical interpretation, shown schematically in Fig. 3.4(b): A single photon, approximated as a hard point-sized sphere carrying linear momentum k (when projected onto the rotor plane), collides with the rotor at some position a distance a away from the center. This adds an angular momentum of ka to the rotor. If the laser is fully illuminating the rotor, then a photon may collide with the rotor at any distance a where −r < a < r, with some probability. Thus t-
he maximum possible angular

CHAPTER 3. THE TRAPPED-ION PLANAR QUANTUM ROTOR

47

momentum transfer is kr = ζ, so if the angular momentum is quantized, then ∆ is bound between −ζ and ζ. The true coupling strength J∆ (|ζ|) indeed falls oﬀ rapidly with increasing ∆ beyond the point where |∆ | > |ζ|, as can be seen from Fig. 3.4(a).

3.3.4 Rabi oscillations of rotational sideband transitions

The transition frequencies and coupling strengths of transitions which change the rotational state of a trapped-ion rotor derived above inform the shape of measured Rabi oscillations. As with vibrational sidebands, if the initial state is not an energy eigenstate, then the observed result will be a weighted average over the initial state (Eq. (2.38)). In contrast to vibrational sideband transitions, which exhibit diﬀerent Rabi frequencies for diﬀerent n due to their diﬀerent coupling strengths, ro-
tational sideband transitions have the same coupling strength for diﬀerent but have diﬀerent detunings. A typical initial state for the rotor in this work is one where the initial state is close to Gaussian-distributed in angular momentum space, with a mean ¯ large compared to its standard deviation, σ . As described in more detail in Chapter 6, this allows us to spectrally resolve sidebands by their transition order ∆ . For an initial state of the rotor given by some probability P , Rabi oscillat-
ions on the ∆ sideband take the form

Pb(t) =

P

Ω2∆

Ω2∆

+

δ

2 ,

+∆

sin2

1 2

Ω2∆ + δ2, +∆ t .

(3.32)

Here dephasing of the oscillations comes from the contributions of diﬀerent detunings. Figure 3.5 shows some Rabi oscillations for an angular momentum distribution which is Gaussian-distributed with standard deviation σ . Note that the relation (3.32) strictly holds for only a single ion in a rotor; for a rotor with two ions, both may be excited, and the result is slightly modiﬁed, though negligibly so in most cases of experimental interest. Sec 6.4 quantiﬁes this discrepancy.

3.4 N -ion crystals in a planar rigid rotor with
vibrational motion
This section generalizes the results of the previous section to a Coulomb crystal which may exhibit vibrational motion in addition to the rotational motion. This is straightforwardly furthermore generalized to a crystal which contains an arbitrary number of constituent ions. This section makes both of these generalizations together.
Here, the rotational motion fundamentally alters the way that a laser ﬁeld interacts with vibrational modes, in contrast to a static Coulomb crystal whose vibrational modes may be considered independent of each other. We assume here that the rotor is still rigid in the sense that the ions’ equilibrium positions do not change with the rotational state from centrifugal eﬀects, though they may vibrate about those equilibrium positions. We further assume that

CHAPTER 3. THE TRAPPED-ION PLANAR QUANTUM ROTOR

48

(a) 1

(b) ∆ =1

∆ =4

σ = 20

0.5

σ = 200

Excitation Pb

00

50 100 150 200 250 0

50 100 150 200 250

Rabi time t (µs)

Rabi time t (µs)

Figure 3.5: Simulated Rabi oscillations on rotational sidebands for diﬀerent angular momentum distribution widths σ for ∆ = 1, 4. Diﬀerent values of ∆ result in diﬀerent detunings δ , +∆ . In both cases, the coupling strength Ω∆ is set to 2π×10 kHz.

the Coulomb crystal is at most 2-dimensional so that ions’ equilibrium positions all lie within the xy-plane.

3.4.1 The position operator

When considering the vibrational normal modes of the N -ion crystal in addition to the rigid rotor mode, the Hamiltonian (3.24) generalizes to

H = H0 + H1,

H0

=

L2z 2I

+

j

ωj (a†j aj

+

1 2

)

+

1 2

ωab (|bi

bi| − |ai

ai|)

i

H1 =

1 2

Ω (|bi

ai| + |bi

ai|)

ei(k·ri−ωt) + e−i(k·ri−ωt)

,

i

(3.33)

where the index i runs over the N ions and the index j runs over the 3N − 1 vibrational
modes. As usual, we will rewrite the ion positions ri in terms of normal mode coordinates, but here, unlike the case of an anisotropic potential, the ions do not have unique equilibrium
positions. Instead, they are unique only up to the overall orientation of the crystal, θ. We deﬁne a reference “equilibrium” position r0i as the equilibrium position of ion i at θ = 0.
To illustrate this concretely, consider the ion positions of a 2-ion crystal at orientation
θ = 0, plus some ﬁnite excitation of the stretch mode only. The equilibrium positions match
the anisotropic case given in (3.3), and similarly the eigenvector of the stretch mode matches
Tab. 3.1, so that for a stretch mode coordinate ξstretch,

rθ1=0

=

(r

+

√1 2

ξstretch

,

0,

0)

rθ2=0

=

(−r

−

√1 2

ξstretch,

0,

0).

(3.34)

CHAPTER 3. THE TRAPPED-ION PLANAR QUANTUM ROTOR

49

y

(x1, y1)

k
ky kx

ξj
x
(x10, y10)

Figure 3.6: Four ions in a planar rotor illuminated by a laser ﬁeld with wavevector k. The ions may rotate about the origin, described by the angle coordinate θ, and may also vibrate. In total there are 2N − 1 = 7 vibrational modes within the xy-plane. One of them, the breathing motion, is shown, with coordinate ξj. Grey dotted circles show the ions’ reference positions when all coordinates are zero, and black dotted circles show the ions’ positions when only the angular coordinate θ is nonzero.

If on the other hand θ = 0, the entire crystal is reoriented, which can be quantiﬁed by applying a rotation matrix:

cos θ − sin θ 0

ri = sin θ cos θ 0 rθi =0

0

01

(3.35)

The eﬀect is to rotate not only the “equilibrium” positions of the ions, but to also reorient the vibrational normal modes. In the example of the 2-ion crystal where we consider the contribution of the stretch mode only, ﬁnite θ results in new positions

r1 =

cos

θ

[r

+

√1 2

ξstretch],

sin

θ

[r

+

√1 2

ξstretch],

0

r2 =

cos

θ

[−r

−

√1 2

ξstretch

],

sin

θ

[−r

−

√1 2

ξstretch],

0

.

(3.36)

Since the direction of the vibrational normal modes depends on the orientation θ, it is convenient to deﬁne the normal mode matrices (Xij, Yij, Zij describing the contribution of mode j to ion i) at the reference orientation θ = 0. Generalizing to all modes, the position

CHAPTER 3. THE TRAPPED-ION PLANAR QUANTUM ROTOR

50

of ion i in terms of normal mode coordinates is given by

ri = cos θ x0i + Xijξj − sin θ yi0 + Yijξj ,

j

j

sin θ x0i + Xijξj + cos θ yi0 + Yijξj ,

j

j

(3.37)

Zijξj .
j

Since the rotation is conﬁned to the xy-plane, the orientation has no eﬀect on the equilibrium position or normal modes in the z-direction. All normal modes of a 2D ion crystal will either be entirely in the plane (Zij = 0) or entirely out of the plane (Xij = Yij = 0), categories which we label “horizontal” and “vertical” modes. For an anisotropic (planar isotropic) N -ion crystal, there are exactly 2N (2N − 1) horizontal vibrational modes, and N vertical vibrational modes. This distinction is use-
ful in the case of the rotor, since the rotor mode aﬀects the horizontal modes, but not the vertical modes.
We can now rewrite (3.37) with the mode coordinates θ, {ξj} written in terms of operators. The result, when dot-multiplied with the laser wavevector k, is

k · ri

=

1 2

(ζiL+

+ ζi∗L−)

+

1 2

η˜ijL+ + η˜i∗jL−

(aj + a†j) +

ηij(aj + a†j), (3.38)

j

∈

horiz. modes

j

∈

vert. modes

where

η˜ij ≡ (kx − iky)(Xij + iYij) 2mωj ,

(3.39)

and ζi and ηij are already deﬁned by (3.26b) and (3.6), respectively. η˜ij can be interpreted as a sort of modiﬁed Lamb-Dicke factor. (Note that here, the tilde in η˜ indicates a complex number, not an interaction-picture operator.) It is useful to compare this result to the corresponding results for crystals when only vibrational motion is present (3.5), and for planar-isotropic crystals whose rotational motion is considered alone (3.26). To summarize some noteworthy points about this comparison:

• k · ri is a sum of three terms: one corresponding to the rotational motion, one to the vibrational motion in the plane of rotation, and one to the vibrational motion out of the

plane of rotation. The ﬁrst is precisely the same as (3.26) (rotational motion only), and

the last is precisely the same as (3.5) (vibrational motion only) up to a constant term.

The remaining term is a modiﬁed version of (3.5), where the real-valued Lamb-Dicke

factor

ηij

is

instead

replaced

by

a

Hermitian

operator

1 2

(η˜ij

L+

+

η˜i∗j

L−),

an

operator

in

the rotational Hilbert space. Therefore, unlike the case of a typical Coulomb crystal

which exhibits only vibrational motion, the motional modes of motion of a planar

CHAPTER 3. THE TRAPPED-ION PLANAR QUANTUM ROTOR

51

isotropic crystal do not fully separate for the purposes of laser interaction with those modes, even in the rigid rotor approximation; rather, the rotational degree of freedom fundamentally modiﬁes the coupling of the horizontal vibrational modes to the laser.

• In a purely vibrational crystal, k · ri is given by (3.5), which contains a constant term

k · r0i for the equilibrium position of ion i. When exponentiated, this constant term

becomes a phase factor which may be ignored. In the rotational case, on the other hand,

it

is

precisely

this

term

which

instead

turns

into

the

rotational

term

1 2

(ζi

L+

+ ζi∗L−)

in (3.38).

• The complex dimensionless factor η˜ij is a modiﬁed version of the real Lamb-Dicke factor ηij. Comparing to (3.6), we ﬁnd that the real part of η˜ij is precisely ηij, and the imaginary part is what the Lamb-Dicke factor would be if the if the mode were rotated by 90 degrees (up to a sign). We can think of the rotational degree of freedom as eliminating any concept of a well-deﬁned angle between the laser wavevector and the direction of mode j.

• Under the rigid rotor assumption, rotational operators L± and vibrational operators aj, a†j commute; this assumption was made in deriving the result.

3.4.2 The interaction-picture Hamiltonian

With (3.38) as an expression for k · ri in terms of operators, we can transform (3.33) into the interaction picture. For simplicity, we can ignore the vertical modes for this step; their contribution to the laser coupling is unchanged from what they would be in case of an anisotropic case, which has already been analyzed.

HI

=

1 2

Ω |bi ai|
i

ei

1 2

[ζi

L˜ +

(t)+ζi∗

L˜ −

(t)]

e [ ] i

1 2

η˜ij L˜+(t)+η˜i∗j L˜−(t)

[a˜j (t)+a˜†j (t)]

e−i∆t + h.c.

(3.40)

j

Here the index j runs over horizontal modes only. To ﬁnd the coupling strength for a transition between eigenstates for ion i, we seek matrix elements of the form
bi, + ∆ , n + ∆n|HI|ai, , n , where now n stands for the state of all 2N − 1 horizontal vibrational modes. Note that, unlike (3.7) for N -ion crystals with only vibrational motion, (3.40) is not simply a product of terms for each mode, so we cannot simply compute the matrix element of the full Hamiltonian as a product of matrix elements for each mode. Instead, the the rotational and vibrational motion each aﬀect the nature of the other’s interaction with the laser ﬁeld. As a result, a simple close-
d-form expression for the matrix elements of HI is not in general possible for rovibrational transitions. However, we can write the expression for the matrix elements in a form which is easier to interpret, after which we may gain some insight by looking at some special cases. Taking the matrix element, inserting a

CHAPTER 3. THE TRAPPED-ION PLANAR QUANTUM ROTOR

52

resolution of the identity, and pulling out the time-dependence, we ﬁnd

bi, + ∆ , n + ∆n|HI|ai, , n

=

1 2

Ω

+∆

|ei

1 2

(ζiL+

+ζi∗

L−

)|

j

× e−i[∆−([( +∆ )2− 2]ωr+ j ∆nj ωj )]t + h.c.

,

n

+

∆n|ei

1 2

| (η˜ij L++η˜i∗j L−)(aj +a†j )

,n

(3.41)

Two notes to interpret this result are as follows:

• As usual, we are able to express the matrix elements in terms of matrix elements of timeindependent Schro¨dinger picture operators. The time dependence from the interactionpicture operators becomes a phase factor representing the resonance condition. In this case, the resonance is at the sum of detunings due to the rotational → + ∆ transition and the vibrational nj → nj + ∆nj transitions. This is as expected from conservation of energy.

• The matrix element has been broken into a product of more manageable matrix elements, at the cost of introducing an inﬁnite sum over rotational states from a resolution of the identity.

3.4.3 Approximations of the matrix elements in special cases
To further analyze these matrix elements, we must make some assumptions, so only a few special cases of interest will be considered. We consider only one vibrational mode for simplicity, so that for the calculation the ion and mode indices i and j may be dropped. The matrix element (3.41) in this case is written

Ω ,n, +∆ ,n+∆n = b, + ∆ , n + ∆n|HI |a, , n

=

1 2

Ω

+∆

|ei

1 2

(ζ

L+

+ζ

∗ L−

)|

,

n

+

∆n|ei

1 2

| (η˜L++η˜∗L−)(a+a†)

,n

.

(3.42)

We further make the Lamb-Dicke approximation, which here means |η˜ij|2(2nj + 1)

this case,

ei

1 2

(η˜L+

+η˜∗

L−

)(a+a†)

=

1

+

i 2

(η˜L+

+

η˜∗L−)(a

+

a†)

+

O(|η˜|2).

Some special cases to consider are the following:

1. In (3.43)

1. Transitions of the form → + ∆ , n → n

CHAPTER 3. THE TRAPPED-ION PLANAR QUANTUM ROTOR

53

To ﬁrst order, only the carrier term of (3.43) contributes, as that is the only term which will not change the vibrational quantum number.

Ω ,n, +∆ ,n+∆n =

+∆

|ei

1 2

(ζ L+

+ζ ∗

L−

)

|

,

n|ei

1 2

(η˜L+

+η˜∗L−

)(a+a†

)

|

,n

≈

+∆

|ei

1 2

(ζ

L+

+ζ

∗

L−

)|

, n| , n

=

+∆

|ei

1 2

(ζ

L++ζ

∗

L−)

|

= ei∆ [arg(ζ)+π/2] J∆ (|ζ|),

precisely as found in (3.31).

2. Transitions of the form → , n → n + 1 Here, only terms of (3.43) containing a† will contribute.

Ω ,n, +∆ ,n+∆n =

|ei

1 2

(ζ

L+

+ζ

∗ L−

)|

,

n

+

1|ei

1 2

| (η˜L++η˜∗L−)(a+a†)

,n

(3.44)

≈

|ei

1 2

(ζ

L++ζ

∗

L−

)

|

,

n

+

1|

i 2

(η˜L+

+ η˜∗L−)a†|

,n

=

√ − |η˜| n + 1 J1(|ζ|) Re

ei[arg(η˜)−arg(ζ)]

(3.45)

To interpret this result, we may compare to the case of a static Coulomb crystal. In that case, the magnitude of the equiv√alent matrix element (i.e. where the motional quantum number increases by 1) is η n + 1, (2.36b). The above result for a crystal which is allowed to rotate is similar, but with |η˜| replacing η, and multiplied by two additional factors:

• The ﬁrst factor is J1(|ζ|). This is also the magnitude of the matrix element for a | → | + 1 transition. We can interpret this from the structure of (3.42), which contains a product of two matrix elements: One for the rotational part alone, and one for the vibrational part which necessarily also contains rotational operators. This may be interpreted as two energy-conserving processes. In the Lamb-Dicke expansion (3.43), we see that a change in vibrational quantum number must come with a change i-
n rotational quantum number. Thus in order to change only the vibrational quantum number, one of these pr√ocesses must change the rotational quantum number by 1 (with magnitude ∼ |η˜| n + 1), and the other must change it back (with magnitude ∼ J1(|ζ|)).
• The second factor is Re ei[arg(η˜)−arg(ζ)] , which arises from the interference of the ± 1 terms that contribute. This factor eﬀectively measures the relative phase
between the rotational and vibrational parameters ζ and η˜. This relative phase encodes how “radial” the mode j is for ion i; if the ion’s motion due to mode j

CHAPTER 3. THE TRAPPED-ION PLANAR QUANTUM ROTOR

54

0.4

Relative coupling strength

0.3

∆n = 0,

0.2

∆ =1

∆n = 1, ∆ =1

0.1

0.0

−4

−2

0

2

4

Frequency (MHz)

Figure 3.7: Sample spectrum showing the coupling strengths of rovibrational transitions. The y-axis is the magnitude of the matrix elements of the operator (3.43). The vibrational mode has a frequency of 2 MHz and the rotation frequency is set to 100 kHz, so that rotational transitions are grouped within the separated vibrational sidebands. The vibrational LambDicke parameter is η = 0.2, and ζ = 3.86. Because ζ is near a zero of J1, the coupling strength of the ∆ = 1 transition nearly vanishes, bu-
t on the ∆n = 1 vibrational sideband, the ∆ = 1 transition is allowed.

is outward from the crystal’s axis of rotation, then the relative phase is zero and this matrix element is maximum. If the ion’s motion due to mode j is tangent to the crystal’s rotation, then the relative phase is π/2 and this matrix element vanishes.
This result demonstrates that, even when addressing a purely vibrational sideband (i.e. with no rotational transition, ∆ = 0), the coupling strength is aﬀected by the presence of a rotational degree of freedom. This is to be contrasted with the case of a purely vibrational ion crystal, where each mode of motion acts independently of the others. In special cases, the ﬁrst vibrational sideband can vanish entirely, independent of the state of the vibrational motion. It will vanish exactly for a mode -
with components only in the angular direction, and will also vanish to ﬁrst order in |η˜| for a wavevector such that |ζ| is a zero of the Bessel function J1, as shown in Fig. 3.7.
3. Transitions of the form → + ∆ , n → n + 1
This is the generalization of the previous case, where we now allow the angular mo-

CHAPTER 3. THE TRAPPED-ION PLANAR QUANTUM ROTOR

55

mentum quantum number to change as well.

+∆

|ei

1 2

(ζ L+

+ζ ∗

L−

)

|

,

n

+

1|ei

1 2

| (η˜L++η˜∗L−)(a+a†)

,n

≈

√ |η˜| n

+

1

1 2

ei[arg(η˜)−arg(ζ)]J∆ −1(|ζ|) − e−i[arg(η˜)−arg(ζ)]J∆ +1(|ζ|)

ei∆ [arg(ζ)+π/2] (3.46)

Unlike the previous case, we have two terms which contain Bessel functions of diﬀerent orders, and thus do not in general vanish in special cases. It is clear that this matrix element is not a simple product of the two matrix elements for the individual transitions | → | + ∆ and |n → |n + 1 , unlike the (3.8b), where the transition of each vibrational mode contributes an independent factor to the overall matrix element.

In cases 2 vibrational

and 3 considered above, the result sideband |n → |n − 1 , except with

is the same√if the factor n

we +1

instead cons√ider replaced by n.

the

red

3.4.4 Summary
Table 3.2 summarizes the coupling strengths computed for vibrational and rotational transitions.
Measurements of pure rotational sideband coupling strengths have been done in this work, but not rovibrational sidebands. Measuring a rovibrational spectrum would be challenging, as we use a nearly vertical beam to measure rotational sidebands, which signiﬁcantly suppresses coupling to in-plane vibrational modes.

3.5 2-ion crystals in a planar non-rigid rotor

This section outlines some modiﬁcations to the results of the previous section which occur

when the rigid rotor assumption is relaxed, and centrifugal eﬀects are considered. This

is done perturbatively to ﬁrst order only. Only the energy eigenspectrum is considered;

laser-ion interaction coupling strengths are not. Practically, a modiﬁcation to the energy

spectrum of the order 10−2 could be signiﬁcant, but a modiﬁcation of the same order to

coupling strengths will not. This section also considers only a 2-ion crystal, the simplest

case.

The rigid rotor condition was deﬁned previously by (3.18). It is useful to rewrite the

rotor rigidity condition as

1, deﬁning the small parameter which can be written in

several equivalent ways:

≡

r

− r0 r0

=

22
3I02ωx2

=

D2 ωr0

=

4ωr20 2 3ωx2

≈

ωrot 2 .
ωstretch

(3.47)

CHAPTER 3. THE TRAPPED-ION PLANAR QUANTUM ROTOR

Case
1 ion, 1 vib. mode

Transition form |n → |n + ∆n

N ions, 3N vib. modes
2 ions, 1 rot. mode

|n → |n + ∆n | →| +∆

Relative coupling strength

e−η2/2η|∆n|

× L(m|∆inn(n|),n+∆n)(η2)

sign(∆n)/2

×

n! (n+∆n)!

(2.34)

j e−ηj2/2ηj|∆nj |

×

L(|∆nj |) min(nj ,nj

+∆nj

)

(ηj2

)

× nj!

sign(∆nj )/2

(nj +∆nj )!

(3.8)

J∆ (|ζ|) (3.30)

Approximations in special cases Lamb-Dicke regime:

∆n = 0 1√− η2 ∆n = 1 η n + 1

(2.36)

(products of above cell)

(none necessary)
Lamb-Dicke regime, 1 vib. mode only:

N ions, 1 rot. mode + 2N − 1 in-plane vib. modes

| ,n → | + ∆ , n + ∆n

No closed-form expression; Written in terms of matrix elements in (3.41)

∆n = 0 ∆n = 1

J∆ (|ζ|)

(3.44)

1 2

√ |η˜| n

+

1

× [eiαJ∆ −1(|ζ|)

−e−iαJ∆ +1(|ζ|)],

where α =

arg(η˜) − arg(ζ)

(3.46)

Table 3.2: Summary of relative coupling strengths for motional transitions. Relative coupling strength refers to the coupling strength of the transition divided by the bare electronic Rabi frequency Ω. Each expression for a coupling strength includes a reference to the corresponding equation in the text. Here, overall phase factors are omitted.

56

CHAPTER 3. THE TRAPPED-ION PLANAR QUANTUM ROTOR

57

The quantity D, deﬁned as

D

≡

4ωr30 ωs2tretch

=

4ωr30 3ωx2

,

(3.48)

is the centrifugal distortion constant commonly used in the context of diatomic molecules

[29].

Deﬁnitions of new symbols used in (3.47) are as follows:

• r is the centrifugally distorted equilibrium radius when the angular momentum quantum number is equal to , and r0 is the equilibrium radius in the absence of centrifugal eﬀects.

• ωr0 is the same rotation constant deﬁned by (3.22), but with an extra subscript 0 to indicate that this is the value in the absence of centrifugal eﬀects, in anticipation that we will ﬁnd that the eﬀective rotation constant changes due to centrifugal distortion (see Sec. 3.5.4).

• I0 is similarly the moment of inertia in the absence of centrifugal eﬀects.
• ωrot is the rotation frequency at angular momentum quantum number , with a subscript to make the -dependence explicit. In the absence of centrifugal eﬀects, this is given by (3.23).

• ωstretch is the stretch mode frequency.
In the ﬁnal equality of (3.47), we use the relationship between the angular momentum and classical rotation frequency, ωrot = 2ωr0 . This is only approximately true since the relationship between rotation frequency and angular momentum quantum number depends on the moment of inertia, which itself also changes due to centrifugal eﬀects; see Sec. 3.5.4. However, it is the most practically useful relation, as it is written in terms of 2 measurable quantities, the rotation frequency and the stretch mo-
de frequency. When the rotation frequency is large enough such that it is comparable to the stretch motion frequency, the rigid rotor approximation no longer holds. In this section, only leading-order corrections to the rigid rotor approximation are considered, i.e. when the quantity is not negligible, but still small enough that second-order corrections may be ignored. An example of typical experimental parameters is ωr = 2π × 10 Hz, ωstretch = 2π × 2 MHz, and ωr¯ot = 2π × 150 kHz (where ¯ is the-
 mean of the rotational state, which in general has some distribution over angular momenta). In this case, D = 2π × 1 nHz and ¯ = 6 × 10−3.

3.5.1 Centrifugal distortion
Sec. 3.3 derives the normal modes of motion for a 2-ion rotor. The ﬁnal step in this process before invoking the rigid rotor approximation was writing the potential energy of the motion of the relative coordinate, (3.11). The following step was to solve for the equilibrium positions expand the potential about that point. If the rotor is not rigid, then the rotational motion will

CHAPTER 3. THE TRAPPED-ION PLANAR QUANTUM ROTOR

58

create a centrifugal potential and thus modify the equilibrium positions. Thus we must ﬁrst ﬁnd the new equilibrium position in the non-rigid case. Including the centrifugal potential term, (3.11) is modiﬁed to

U

(r)

=

1 2

µ(ωx2

ρ2

+

ωz2z2)

+

e2 4π 0

1 ρ2 +

z2

+

22
2µρ2 .

(3.49)

It will be convenient here to shift into laboratory-frame coordinates, using the physical radius of the rotor r = ρ/2 as well as the true mass of each ion m = 2µ:

U (r, z) = m

ωx2r2

+

1 4

ωz2

z

2

+

e2 4π 0

√1 4r2 +

z2

+

22
4mr2 .

(3.50)

To solve for the radius r which minimizes this potential, we set z = 0 and solve ∂U /∂r = 0. We write r = r0 + δr and expand perturbatively:

U

(r)

=

mωx2r2

+

e2 8π 0r

+

22
4mr2

=

mωx2(r0 + δr)2

+

8π

e2 0(r0 + δr)

+

22
4m(r0 + δr)2 .

(3.51)

Setting ∂U /∂r = ∂U /∂δr = 0 and solving for δr, we ﬁnd, to ﬁrst order in δr/r0,

δr r0

22
= 12m2r04ωx2 =

.

(3.52)

The subscript in δr indicates that this is the solution for angular momentum quantum number . This is the same quantity from (3.18), rewritten in laboratory-frame coordinates. This justiﬁes the claim from Sec. 3.3 that the rigidity condition should be deﬁned by the condition (3.18), which we later deﬁne as in (3.47). The radius of a non-rigid rotor is therefore approximately r = r0(1 + ).

3.5.2 Non-rigid corrections to individual modes
In the presence of centrifugal distortion, the potential of all three “relative motion” degrees of freedom of a 2-ion crystal is modiﬁed: the vertical rocking motion, the stretch motion, and the rotational motion. All of these modiﬁcations arise from the centrifugal distortion increasing the distance between the ions, which in turn modiﬁes the respective motional frequencies.

Vertical rocking mode

To analyze the vertical rocking mode, we ﬁrst expand the potential (3.50) about z = 0:

U (r, z) ≈ m

ωx2r2

+

1 4

ωz2z2

+

e2 4π 0

1 2r

−

z2 16r3

22
+ 4mr2 .

(3.53)

CHAPTER 3. THE TRAPPED-ION PLANAR QUANTUM ROTOR

59

We are interested in the coordinate z, so we can set the radius r of the rotor to be equal to the centrifugally distorted radius at rotational quantum number , r = r0(1 + ) and perturbatively expand:

U

(r

, z)

≈

1 4

mωz2z4

−

64π

e2 0r03(1 +

=

1 4m

ωz2

−

(1

ωx2 +

)3

z2

)3 z2 + (constant terms)

≈

1 4m

ωz2 − ωx2

1

+

3ωx2 2(ωz2 − ωx2)

2
z2.

(3.54)

Therefore, the vertical rocking mode frequency, to ﬁrst order due to centrifugal eﬀects, is

ωvert rock = ωvr ≈

ωz2 − ωx2

1

+

3ωx2 2(ωz2 − ωx2)

(3.55)

Centrifugal distortion increases this frequency by a factor of 1 + [3ωx2/2(ωz2 − ωx2)] . The correction term is half the square of the ratio of the stretch mode frequency to the rocking
mode frequency (in the absence of distortion). Typically in the work done in this thesis,
ωz ≈ 2ωx, in which case this correction term is approximately /2.

Stretch and rotational modes

These two modes take place within the horizontal plane, so we begin by taking the potential (3.50) and setting z = 0. We will need to expand the coordinate r about its equilibrium position r , which depends on the angular momentum quantum number. It will be convenient to write the coordinate r as r = r0(1 + + a). The explicit expansion of r into r0(1 + ) makes it clear where the quantity shows up, which is convenient since it is our expansion parameter. This deﬁnes a dimensionless coordinate a = (-
r − r )/r0, which rescales r − r , the deviation of r from its equilibrium point, in units of r0. Rewriting (3.50) in these terms with z = 0,

U (a, 0) = mωx2r02(1 + = mωx2r02(1 +

+

a)2

+

e2 4π 0r0

(1

+

1

+

a)

+

22
4mr02

(1

+

1 + a)2

+ a)2 + 2mωx2r02 (1 + 1 + a) +

ωr0

2
(1 +

1 + a)2

(3.56)

We expand this potential to second order in a to recover a harmonic potential. We also keep terms only to ﬁrst order in .

U (r) ≈ 3mωx2(r − r )2(1 + ) + ωr0 2(1 − )

√

≈m

3ωx(1

+

1 2

)

2
(r − r

)2 +

ωr0 2(1 −

)

(3.57)

CHAPTER 3. THE TRAPPED-ION PLANAR QUANTUM ROTOR

60

The stretch mode frequency to ﬁrst order due to centrifugal eﬀects is thus

√

ωstretch = ωs =

3ωx

1

+

1 2

The ﬁnal term, the rotational energy, may be written as

(3.58)

Erot = (ωr0 2 − D 4),

(3.59)

where D is the distortion constant deﬁned in (3.48). This lowers the energy of a given angular momentum state compared with the rigid case. The physical reason for this is that centrifugal distortion expands the size of the rotor, increasing its moment of inertia, and thus decreasing its classical angular velocity for a given angular momentum.

3.5.3 Energy eigenspectrum

The energy eigenspectrum of the vertical rocking, stretch, and rotational motion will be

given by

E(nvr, ns, ) =

ωvr (nvr

+

1 2

)

+

ωs(ns

+

1 2

)

+

E rot

(3.60)

where the ﬁnal term is given by (3.59). In the presence of centrifugal distortion, the en-

ergy eigenspectrum of the three modes is not separable, since now the rocking and stretch
mode frequencies, given by (3.55) and (3.58) respectively, depend on the rotational quantum number via . To make this explicit, we can write as D 2/ωr0:

E(nvr, ns, ) = + +

ωz2 − ωx2

1

+

3ωx2D 2(ωz2 − ωx2)ωr0

2

√ 3ωx

D 1 + 2ωr0

2

(ns

+

1 2

)

(ωr0 2 − D 4)

(nvr

+

1 2

)

(3.61)

The transition frequency for a unit increase in the vibrational mode quantum numbers
depends on and is already given by (3.55) and (3.58). The transition frequency for a unit increase in the rotational quantum number , E(nvr, ns, + 1) − E(nvr, ns, ), also now depends on the values of nvr and ns. With typical experimental parameters, these corrections are very small unless n 103, at which point they become only corrections to the non-rigid
correction term.

3.5.4 Corrections to experimentally relevant rotational parameters
In general, the state of the rotational degree of freedom may be a distribution of angular momenta, in which case corrections to relevant quantities such as the energy spectrum of the stretch mode will also have some spread. As mentioned in Sec. 3.3.4, a typical state of

CHAPTER 3. THE TRAPPED-ION PLANAR QUANTUM ROTOR

61

our trapped-ion rotor is one whose angular momentum is large and well-localized, ¯ σ . The small spread makes it convenient to characterize the non-rigid correction factor by only the mean value of the distribution, such that ¯ alone approximately fully characterizes nonrigid correction quantities. One way to manifest this approximation is to deﬁne an eﬀective rotational constant ωr, , and substitute its value at ¯, ωr,¯, in for the rotational constant. Due to the nonlinearity of the corrections, -
the appropriate eﬀective rotational constant will depend on the quantity of interest.

Rotational energy spectrum

Equation (3.59) gives the non-rigid energy spectrum, which may be rewritten as

E = 2(ωr0 − D 2) = ωr0 2(1 − ).

(3.62)

Deﬁning the “eﬀective” rotational constant as ωr,¯ = ωr0(1 − D ¯2) = ωr0(1 − ¯), the energy

may be written as approximately

E ≈ ωr,¯ 2,

(3.63a)

where ωr,¯ = ωr0(1 − ¯).
This approximation holds only for values of near ¯.

(3.63b)

Rotation frequency and transition frequencies
The rotation frequency ωrot is in general is related to the angular momentum in terms of the moment of inertia I via L = Iωrot =⇒ ωrot = /I. When the rotor is not rigid, the radius depends on , and thus in turn so does the moment of inertia. To leading order,

ωrot = I

= 2mr2 = 2mr0(1 +

)2

≈

(1 − 2 I0

) = 2ωr0 (1 − 2

).

(3.64)

Thus with the appropriate eﬀective rotational constant ωr,¯, ωrot ≈ 2ωr,¯

(3.65a)

where

ωr,¯ = ωr0(1 − 2 ¯).

(3.65b)

Note that the correction term 2 ¯ diﬀers by a factor of 2 from the corresponding correction
term for the energy (3.63b). Again, the above approximation holds only for values of near ¯.
In Sec. 3.3.3 we found the transition frequency from | to | + ∆ to be approximately ∆ ωrot, as long as ∆ . This proportionality between rotation frequency and transition

CHAPTER 3. THE TRAPPED-ION PLANAR QUANTUM ROTOR

62

frequency continues to hold for the non-rigid rotor. To see this, we compute the diﬀerence ω +∆ , = (E +∆ − E )/ with each term given by (3.59). The leading-order result is

ω +∆ , = E +∆ − E ≈ ∆ (2ωr0 − 4D 3) = ∆ 2ωr0 (1 − 2 ).

(3.66)

Thus if we again deﬁne ωr,¯ = ωr0(1 − 2 ¯), then E +∆ − E ≈ ∆ 2ωr,¯ = ∆ ωrot

(3.67)

as deﬁned by (3.65a). Thus when computing non-rigid-corrected transition frequencies, the
appropriate eﬀective rotational constant is ωr,¯ = ωr0(1 − 2 ¯), the same as for computing the non-rigid-corrected rotation frequency.

Spread in angular momentum

The angular momentum spread σ of the state of the rotational mode is an important experimental parameter (see Chapter 6). This is measured by measuring the spread in transition frequencies of a rotational sideband of order ∆ , which eﬀectively leads to a broadening of the sideband. It is thus necessary to understand the relationship between the measured sideband linewidth (a spread in frequency space) and the spread of the angular momentum state. Deﬁning the transition frequency between states | a-
nd | + ∆ as ω +∆ , , we are interested in the unit change in this transition frequency: ω +∆ +1, +1 − ω +∆ , . For a perfectly rigid rotor, this is equal to exactly 2ωr0∆ : each increment in increases the transition frequency (of the ∆ -order transition) by 2ωr0∆ . Thus if the angular momentum state has a spread σ , the transition frequencies of transitions of order ∆ will have a spread of 2ωr∆ σ . If we include non-rigid correction terms, then

ω +∆ +1, +1 − ω +∆ , = E +∆ +1 − E +1 − E +∆ − E ≈ (2ωr0 − 12D 2)∆ .

(3.68)

We thus recover the original expression for the transition frequency diﬀerence if we deﬁne the eﬀective rotational constant

ωr,¯ = ωr0(1 − 6 ¯),

(3.69)

whereupon we may write the rotational sideband linewidth as 2ωr,¯∆ σ . Note that the correction term for the eﬀective rotational constant is 6 ¯, which diﬀers from the appropriate
correction term when computing energies ( ¯) and transition frequencies (2 ¯).

Computing the correction factor itself
All non-rigid corrections in this section have been given in terms of the small parameter , which depends on the angular momentum quantum number. In practice, we measure

CHAPTER 3. THE TRAPPED-ION PLANAR QUANTUM ROTOR

63

rotation frequency rather than angular momentum quantum number. This poses an apparent complication since the relationship between rotation frequency and angular momentum itself depends on and thus on angular momentum. In fact, the corresponding correction is second order and thus negligible. To show this, we can use the relations = 4ωr20 2/3ωx2 from (3.47) and ωrot = 2ωr0 (1 − 2 ) from (3.64):

=

4ωr20 2 3ωx2

≈

(ωrot)2(1 + 4 3ωx2

) .

This is an implicit expression for . Solving it,

(3.70)

=

(ω rot )2
3ωx2
1 − 4 (ωrot)2 3ωx2

≈

(ωrot)2 3ωx2

+4

(ωrot)2 2

3ωx2

.

(3.71)

We have already assumed that the ratio ωrot/3ωx2 is small, so the second term of the above equation is higher order in the very same parameter. Thus it suﬃces to write our correction parameter as being equal to ωrot/3ωx2. It is for this reason that the ﬁnal equality of (3.47) is only approximately true, though it is correct to ﬁrst order, which is the level of
approximation we are interested in.

64
Chapter 4
Experimental setup
At the center of the experimental setup is an ultra-high vacuum chamber, held at a pressure below 10−11 Torr. Internal to the chamber is the ion-trap chip and calcium source. External to the chamber are sources of electrical signals which are routed into the chamber, laser light sources and their respective control systems, optics and electronics for ion detection, and magnets. The chamber is surrounded by a Faraday cage to prevent electrical noise.
4.1 General instrumentation
4.1.1 Lasers
A total of six lasers are used for our experiments with 40Ca+ . Four of the lasers correspond to the wavelengths shown in Fig. 2.5 for driving electronic state transitions in 40Ca+ : 397 nm for S1/2 ↔ P1/2, 866 nm for D3/2 ↔ P1/2, 854 nm for D5/2 ↔ P3/2, and 729 nm for S1/2 ↔ D5/2. Two additional lasers are used for photoionization of neutral Ca to create Ca+. This photoionization is done with a two-photon process: 423 nm light drives a transition from S1/2 to P1/2 in neutral Ca, and 375 nm light -
promotes the P1/2 population to the continuum, completing the ionization process.
All lasers used are diode lasers. The 854 nm and 866 nm light beams are generated directly by their respective laser diodes, and are frequency-stabilized by Pound–Drever–Hall locking to external cavities. The 397 nm light is derived from 794 nm light generated by a diode laser, then frequency doubled via second-harmonic generation to 397 nm. The 397 nm light is stabilized by locking the 794 nm light to an external cavity. The 423 nm and 375 nm lasers are generated from diodes and are left free-run-
ning with no external cavity locking. Finally, the 729 nm laser light is stabilized by locking to a high-ﬁnesse cavity. This light is then ampliﬁed with two stages of injection locking, followed by two stages of tapered ampliﬁers. Locking the 854, 866, and 397 nm lasers to their respective cavities yields linewidths of order 10 MHz. Locking to the high-ﬁnesse 729 nm cavity yields a linewidth of less than 1 kHz, as required to coherently drive the S1/2 ↔ D5/2 electric quadrupole transition in 40Ca+-
 .

CHAPTER 4. EXPERIMENTAL SETUP

65

Figure 4.1: Photograph of the compact AOM setups.
Each of the laser wavelengths is generated in a room separated from the vacuum chamber and delivered to the experiment via optical ﬁbers. These ﬁbers output 500 µW – 2 mW of light for the 397, 866, 854, 423, and 375 nm lasers. The ﬁber for the 729 nm laser outputs approximately 20 mW.
The 397, 866, 854, and 729 nm light used for running experiments with trapped 40Ca+ is passed through acousto-optic modulator optical systems before delivery to the vacuum chamber (where the ions reside). The AOMs provide control over these beams at the chamber (see Sec. 4.1.2). The 423 nm and 375 nm photoionizing beams are delivered directly to the chamber by the ﬁbers from the laser room, with a simple mechanical shutter for binary control.
4.1.2 Acousto-optic modulator systems
Timing, frequency, and amplitude control of the lasers are achieved with acousto-optic modulators (AOMs). Each of the AOM systems in this experimental setup use AOMs in the double-pass conﬁguration, where the light is passed through the same AOM twice in order to mitigate eﬀects of the diﬀracted beam angles changing with RF drive frequency by canceling their ﬁrst-order dependency. The full optical systems for the AOMs include optics to focus the beam into the center of the piezoelectric crystal, s-
eparate out the +1 or −1 order diﬀracted beam, reﬂect and re-focus it back into the AOM for the second pass, and ﬁnally deliver it to an optical ﬁber which in turn delivers it to the vacuum chamber.
While the double-pass conﬁguration cancels ﬁrst-order sensitivities of diﬀracted beam angle with AOM drive frequency, there still remains some dependence. This presents a problem since the position of the beam at the output of the AOM system, and thus in turn

CHAPTER 4. EXPERIMENTAL SETUP

66

100

(a)

(b)

10−1

Relative output power

10−2

854 nm Non-compact

100 (c)

866 nm Non-compact
(d)

Relative output power

10−1

10−2

854 nm Compact

Pass 1 Pass 2 At chamber

60

80

100

Drive frequency (MHz)

866 nm Compact

Pass 1 Pass 2 At chamber (v) At chamber (h)

60

80

100

Drive frequency (MHz)

Figure 4.2: Measurements of the bandwidth of the 854 and 866 nm AOM setups, before and after switching to the compact design. Power is measured at the location indicated by the legend and plotted relative to the maximum measured value. In all cases, the target center frequency is 80 MHz. The 866 nm setup has two output ﬁbers, one to address the ions vertically (v) and one to address them horizontally (h).

the eﬃciency of the coupling to the optical ﬁber, will depend on the drive frequency. This can limit the practical bandwidth of the AOM system. The AOM systems in this setup, shown in Fig. 4.1, are designed to be as compact as possible to minimize the optical path length. The design choices made to this end include using small components (e.g. 1/2 inch diameter mirrors), and focusing the beam into the ﬁrst AOM pass using the collimator from the input ﬁber to the system, and into the second pass us-
ing a curved mirror. This obviates the need for additional focusing lenses. In addition, the AOM systems are built onto their own small optical breadboards for modularity. The 854 and 866 nm laser AOM systems are built onto the same board so that they may share an output ﬁber. The 729 nm laser AOM system contains two AOMs, each with its own output ﬁber: one to address the ions parallel to the trap surface, and one to address them normal to the trap surface.
Prior to the compact AOM systems, all AOM systems used in this experiment had

CHAPTER 4. EXPERIMENTAL SETUP

67

comparatively long optical path lengths. A comparison of the performance of the noncompact and compact versions of the AOM systems for the 854 and 866 nm lasers can be seen in Fig. 4.2. The performance after the ﬁrst pass through the AOM indicates the intrinsic bandwidth of the AOM device itself, while that at more downstream locations indicates losses due to changes in beam angle along the optical path. After switching to compact AOM setups, the bandwidth of both setups was improved. The eﬃciency-
 at the optimal AOM frequency remained approximately the same.

4.1.3 Other optics
Ions are imaged by an objective lens which resides immediately outside the vacuum chamber. The objective is bichromatic for 397 nm and 729 nm light. 397 nm photons which are ﬂuoresced by ions are focused by the objective onto an image plane, after which the image light is split with a pellicle beamsplitter onto a photo-multiplier tube (PMT) and an Andor Luca EMCCD camera. The PMT provides photon counts for detection of ions, as well as for state discrimination at the readout stage of an experiment-
 between the bright (S1/2) and dark (D5/2) qubit states. The camera is also used for ion detection and for beam alignment.
4.1.4 Experiment control electronics
Electrical RF signals to control the AOMs, as well as simple binary transistor-transistor logic (TTL) signals for other devices such as switches, are provided by a piece of custom hardware named the pulse sequencer, or pulser [30]. The pulser contains direct digital synthesizer (DDS) boards to generate the RF signals for driving the AOMs and several TTL channels. Sequences of pulses of these DDS and TTL channels can be programmed onto an FPGA. The timing is controlled with the aid of an external c-
lock, which is provided by a 800 MHz signal generated by a function generator. The pulser also records the photon counts generated by the PMT for the purposes of state readout.

4.1.5 Trapping electronics
RF Drive
The RF voltage to provide the Paul-trapping potential is sourced by a Rhode & Schwarz SMB 100A signal generator, typically operated at an output power between 18 and 24 dBm. This RF signal is passed through an inductive transformer, known as the resonator, made of copper wire wound about a toroidal iron core. When loaded by the 22 pF capacitive load provided by the trap’s RF electrodes, the resonator has a resonance frequency of 21.4 MHz. When properly grounded, the resonator provides voltage ampl-
iﬁcation with a Q factor of about 29.

CHAPTER 4. EXPERIMENTAL SETUP

68

DC Voltages
DC voltages are applied to DC electrodes to provide compensating electric ﬁelds at the location of the ions. These ﬁelds compensate stray dipole and quadrupole ﬁelds. The voltages are sourced from a custom-built digital-to-analog converter (DAC) system, which can provide up to ±10 V DC.
4.1.6 Calcium ion production
Calcium ions are produced by an oven, composed of a tube of high-purity calcium granules and a wire to pass current through it. When a current is passed through the granules, they heat up and sublimate, creating a stream of gaseous neutral calcium directed above the trap surface. The 423 and 375 nm photoionizing lasers illuminate the trapping location, as do the 397 nm and 866 nm cooling lasers. When a passing calcium atom is ionized near the center of the trapping potential and has little enough -
kinetic energy, it becomes trapped. It then scatters 397 nm photons oﬀ of the S1/2 ↔ P1/2 transition, producing ﬂuorescence which may be detected by the PMT or camera.
4.1.7 Magnetic ﬁeld
An applied magnetic ﬁeld is necessary for the purposes of inducing a Zeeman splitting, particularly for the S1/2 ↔ D5/2 transition so that Zeeman sublevels may be spectrally resolved by the 729nm laser. This is applied by small highly temperature-stable permanent magnets held by a 3D-printed holder, mounted near the vacuum chamber. This provides a magnetic ﬁeld of 3 − 5 Gauss at the location of the ions, providing a Zeeman splitting of a few MHz between neighboring S1/2 ↔ D5/2 lines, and spanning -
about 20 MHz total. This splitting is large enough that motional sidebands of diﬀerent S1/2 ↔ D5/2 transitions can be resolved, but small enough that the AOM (center frequency 220 MHz) can span the full range of Zeeman transitions.
The choice of permanent magnets over coils of wire is primarily for stability of the magnetic ﬁeld. This comes at the cost of making it diﬃcult to change the magnetic ﬁeld, as magnets need to be manually added or removed. It is particularly diﬃcult to tune the magnetic ﬁeld to a precise desired value or direction, as there is no precise way to predict the ﬁeld resulting from a particular arrangement of magnets other than to use a trapped ion to measure it after making each manual change. This choi-
ce is thus only appropriate for cases where it is not important for the magnetic ﬁeld to be precisely tuned, which is the case in this work. We set the direction of the magnetic ﬁeld only roughly such that it is close to optimizing the coupling strength of the ∆m = 0 electronic S1/2 ↔ D5/2 when the 729 nm laser addresses the ions normal to the trap surface, which is done when the ions are rotating (see Chapter 6).

CHAPTER 4. EXPERIMENTAL SETUP

69

v DAC 3

–

VaAWG(t)

v DAC 2

+

VbAWG(t)

v DAC 4

–

VbAWG(t)

v DAC 5

+

VaAWG(t)

v DAC 1

+

VaAWG(t)

v DAC 8

–

VbAWG(t)

v DAC 6

+

VbAWG(t)

v DAC 7

–

VaAWG(t)

Figure 4.3: Voltage pattern required on the trap DC electrodes to allow simultaneously for stray ﬁeld compensation and ion rotation.
4.1.8 Software
Control of the experiment, which primarily includes programming timed sequences of DDS and TTL pulses onto the pulser, reading photon counts from the PMT, and handling data ﬂow, is handled by LabRAD [31]. This is instantiated in Python, and provides a server-client architecture which allows for asynchronous independent control of diﬀerent devices relevant to the experiment, such as the pulser and the DAC.
4.2 Instrumentation for ion rotation
The instrumentation which is unique for this experimental setup is centered around ion rotation. This includes electronics for enabling the rotation, and lasers for cooling and addressing the ion crystal normal to the trap surface. The ion trap itself is discussed in Sec. 2.2.4.
4.2.1 Electronics for ion rotation
As discussed in more detail in Sec. 6.2, rotating a Coulomb crystal of ions is done by applying a rotating quadrupole potential. This can be achieved by sourcing only two unique voltages and applying them in the appropriate pattern to the eight DC electrodes of the trap, with

CHAPTER 4. EXPERIMENTAL SETUP

70

VaAWG(t)

v DAC 3
1. Invert

2. Add

3. Buffer

v DAC 3

–

VaAWG(t)

VaAWG(t) VbAWG(t)
AWG

1. Invert 2. Add 3. Buffer

... v DAC
3
– VaAWG(t) ...
Output

...

v DAC 3

...

DAC

Figure 4.4: Image of the rotation circuit, with a schematic for one of the eight output channels.

some of the signals inverted. This is in principle straightforwardly achieved by using a twochannel arbitrary waveform generator (AWG), duplicating the outputs, and inverting some of the duplicates using an inverting op-amp to produce voltages ±VaAWG(t) and ±VbAWG(t), where VaA,bWG(t) are the outputs of the two channels of the AWG. However, we additionally require that the DC electrodes still serve the purpose of compensating stray dipole and quadrupole electric ﬁelds. This in general requires eac-
h to have a unique static oﬀset viDAC, which is provided by the DAC. These two purposes, ion rotation and ﬁeld compensation, can be served simultaneously by adding the respective required voltages. The resulting required voltage on the DC electrodes is shown in Fig. 4.3. Producing these voltages is done using a custom-built circuit, the rotation circuit.
The rotation circuit
The rotation circuit serves three main purposes: (1) to invert the AWG voltage (where necessary), (2) to add together voltages from the DAC for ﬁeld compensation and from the AWG for ion rotation, and (3) to provide current buﬀering to enable driving the DC electrodes, which are RC low-pass ﬁltered, at frequencies on the order of 100 kHz. An image of the rotation circuit is shown in Fig. 4.4. Above, a schematic is also shown for one of the eight output channels. Inversion and addition is provided -
by op-amps, and a high-current buﬀer provides additional current output capabilities, which is required to be roughly 100 mA. For channels where the AWG voltages should be added to the DAC voltage rather than subtracted, the inversion step is omitted. More details about the rotation circuit

CHAPTER 4. EXPERIMENTAL SETUP

71

Objective

729 nm 866 nm

397 nm

Figure 4.5: Schematic of beam orientations for 866 nm Doppler cooling of the vertical direction. The 866 nm laser provides cooling, and 397 nm laser repumps the ions without being directed toward the trap surface. This cooling allows the vertically oriented 729 nm beam to coherently address the ions.
can be found in Ref. [16].
The arbitrary waveform generator
The AWG used is a Keysight 33500B, which provides 1 million waveform points at a sample rate of up to 250 megasamples per second. We interface with it via a custom LabRAD server that allows for programming arbitrary waveforms within the same interface that controls the rest of the experiment.
4.2.2 Vertical 729 nm and 866 nm laser beams
As discussed in Chapter 6, it is best to address a rotating ion crystal with a 729 nm laser beam which is oriented nearly normal to the plane of rotation. Doing so coherently requires that the vibrational motion of the crystal in the normal direction is cold, and thus we also require cooling lasers to be oriented along the rotor normal. This is an atypical requirement; nearly all surface ion traps are concerned only with ion motion within the plane parallel to the surface. Doppler cooling is typic-
ally performed with the 397 nm laser, but blue or UV laser light directed at the trap surface risks photo-electric charging of and damage to the trap. Thus instead, we direct a beam of 866 nm laser light, which is typically used only for repumping during Doppler cooling, vertically to provide Doppler cooling. In this scheme, a 397 nm beam oriented parallel to the trap surface provides the repumping. This presents additional challenges in Doppler cooling (see Sec. 2.6.2). Sideband cooling is provid-
ed by the same vertically oriented 729 nm beam used for coherent addressing. To achieve verti-

CHAPTER 4. EXPERIMENTAL SETUP

72

Figure 4.6: Photograph of the experimental setup with the Faraday cage.
cally oriented beams, both the 729 nm and the 866 nm beams are focused through the same objective used to collect ion ﬂuorescence. This scheme is shown in Fig. 4.5. There is also a horizontally oriented counterpart for each. The 729 nm laser in particular has its own AOM control for the horizontal and vertical beams to allow for sideband cooling and state preparation in either direction independently.
4.3 Faraday cage
The experimental setup is surrounded by a Faraday cage, constructed from ﬁve sheets of aluminum, with one side of the setup left open for access. The experiment is constructed on top of the bottom sheet, which lays separated from the metal surface of the optical table by an insulating layer. All electrical signals which enter the Faraday cage are ﬁrst ﬁltered at the outer surface. The motivation for constructing the cage was to reduce electrical noise which had previously been resulting in ion mot-
ional heating, particularly in the direction normal to the trap surface. This had prevented sideband cooling in this direction. The source(s) of the noise had proven diﬃcult to identify. The relationship between electrical noise and trapped-ion motional heating, as well as evaluation of the performance of the Faraday cage, are considered in Chapter 5. In short, ion motional heating is caused by electrical noise whose frequency is resonant with the ion motion, which is in the hundreds of kilohertz -
to megahertz regime. This section describes the design of the Faraday cage, whose main function is to ﬁlter electric ﬁeld noise at ion motional frequencies. Much of the design and construction of the Faraday cage is credited to graduate student Ryan Tollefsen and postdoc Neha Yadav.

CHAPTER 4. EXPERIMENTAL SETUP

73

4.3.1 General philosophy
The Faraday cage is intended to both prevent noisy radiation and to ﬁlter intentionally incoming electrical signals. A few goals of the design of the Faraday cage for minimizing noise as much as possible are as follows:
• All electrical signals which enter the Faraday cage are ﬁltered at the entrance, with the exterior of the cage as the ground reference for the ﬁlters. This allows for the exterior surface of the cage to conduct away noisy currents while shielding the interior surface from the noise.
• To prevent ground loops, there is only a single reference for AC power, which in turn provides the earth reference for the entire system within the Faraday cage.
• The Faraday cage and the components inside of it are isolated from all other electrical systems, especially the pulser, the optical table, and the wall ground aside from the single reference point.

4.3.2 Electrical signals
All electrical signals which are used for the experiment but which are generated outside of the Faraday cage are low-pass ﬁltered at its external surface. These include the voltages for the DC electrodes, other DC signals, and 60 Hz AC wall power.
Trap DC electrode voltages
To allow for ion rotation, discussed in Chapter 6, AC voltages at hundreds of kilohertz must be allowed to be applied to the trap DC electrodes while ﬁltering as much as possible at motional frequencies ( 1 MHz). Furthermore, because voltages applied directly to the trap electrodes are those which are in the most danger of causing ion heating, they are additionally ﬁltered at the entrance of the vacuum chamber to eliminate noise as downstream in the signals’ paths as possible. The design of a ﬁlte-
r for these signals is constrained by a 10 nF capacitor to ground for each DC electrode inside the vacuum chamber.
Figure 4.7 shows the ﬁlter used for the signals to the DC electrodes, which originate from the rotation circuit. At the entrance of the cage, they are ﬁltered by a 4-stage cascaded lowpass ﬁlter. Inside the cage, at the entrance of the vacuum chamber, there is an additional lowpass ﬁlter consisting of the internal 10 nF capacitor and an external resistor. The resulting ﬁlter function is shown in Fig. 4.8. The total ﬁltering inside the chamber becomes higher order starting at about 1 MHz due to the-
 cascaded ﬁlter outside the cage. Inside the Faraday cage but outside the vacuum chamber, there is still > 20 dB ﬁltering to minimize noise inside the Faraday cage while still ensuring that the ﬁlter at the chamber is able to eliminate any noise which may have originated inside the cage. The ﬁltering at frequencies within the regime intended to be used for ion rotation is between 10 and 20 dB, which we ﬁnd is little

CHAPTER 4. EXPERIMENTAL SETUP

74

DC BNC signals

Rotation circuit

62 Ω 1 nF

120 V 60 Hz power

To pulser

Snakeskin shielding

PMT

EMI

PMT power

EMI

Oven power

EMI

PI shutter

Chamber

×8

27 Ω

Ion pump

10 nF

RF generator

EMI

Power strip

Faraday cage

Figure 4.7: Schematic of the electrical signals used in the experiment with respect to the Faraday cage.

0

Rotation

Trap frequencies

10

Power attenuation (dB)

20

30

40

Inside chamber

50

Outside chamber, inside cage

101

102

103

104

Frequency (kHz)

Figure 4.8: Filter function of the cascaded low-pass ﬁlter used for the DC electrode signals.

CHAPTER 4. EXPERIMENTAL SETUP

75

enough to still allow for applying voltages for ion rotation. Above 1 MHz, the ﬁlters provide > 30 dB suppression.
The low-pass ﬁlters do not use precision capacitors or resistors, so there may be some concern about whether the ﬁltering of the eight DC electrode channels is the same. The quality of the rotational potential created by the rotation circuit can be compromised if not. The actual variation of the total capacitance of the ﬁlters across the eight channels is only 0.6%, and the variation of the resistances is within 0.2%. Furthermore, measurements of the actual attenuation due to each channel’s respec-
tive ﬁlter at 200 kHz show that there is no correlation across channels between attenuation factor and capacitance for the ﬁlters external to the cage, suggesting that the small variation which is present does not limit the uniformity of the channels’ attenuation.
Other DC signals
A few signals which must enter the cage but are not used directly for trapping include the power for the PMT, the oven, and the control for the PI laser shutter. These are passed through Schaﬀner EMC FN2010N1-6-06 EMI ﬁlters, which provide > 50 dB ﬁltering in the range 1 − 10 MHz.
AC power
To prevent ground loops as much as possible, all instruments which are inside the Faraday cage, require AC power, and whose grounds connect to the vacuum chamber or the trap chip share a single AC power strip. The power cable for this is passed through the same type of EMI ﬁlter as those for the other DC signals. This provides the single ground reference for the entire Faraday cage system via the connection of the shielding of the EMI ﬁlter to the outside of the cage, to which the ground of the in-
put power line also connects. The RF generator and ion pump receive power in this way.
PMT signal
The PMT which reads photons emitted by the ions is inside of the Faraday cage. It sends signals to the pulser with pulses on the nanosecond timescale, and thus cannot be easily ﬁltered. Instead, it is shielded from the rest of the Faraday cage by a metal snakeskin shielding wrapping around the signal line which is connected to the interior of the cage.

76

Chapter 5 Measuring and mitigating noise

Over the course of maintaining operational conditions for this experiment, much time was spent attempting to lower the heating rate of the ion motion in the vertical direction, i.e. normal to the trap surface plane. This heating rate had been higher than the cooling rate aﬀorded by sideband cooling, thus precluding cooling of the vertical motion to its ground state. This in turn prevented clean diagnostics of and coherent operations with rotational motion, discussed in Chapter 6. Construction of t-
he Faraday cage ultimately solved this problem. This solution was eﬀective enough to be successfully implemented without a true diagnosis of the origin of the heating problem. Nevertheless, this chapter discusses some of the techniques used in attempting to diagnose the problem prior to the Faraday cage. Measurements of the cage’s performance are also presented.

5.1 Physics of trapped-ion motional heating

While trapped ions’ charge enables the trapping mechanism, it also makes them susceptible

to unwanted electric ﬁelds. In particular, it is often important in experiments for the motion

of trapped ions to be in a well-deﬁned state. Uncontrolled electric ﬁelds can couple to the

motion and thus present a problem in trapped-ion experiments.

To show the eﬀect of electric ﬁeld noise on trapped ion motion, consider a single trapped

ion. It will suﬃce to consider a single direction of motion rj ∈ {x, y, z} so that the Hamilto-

nian of the ion’s motion in that direction is H0 =

ωj

(a†j

aj

+

1 2

).

The

unwanted

component

of

the electric ﬁeld can be written in terms of an electric potential Φ(r, t). The physical origin

of this ﬁeld is always much further away from the ion than the distance scale of its motion,

so the ﬁeld changes on a length scale much larger than that of the ion’s motion. This allows

the potential to be expanded into multipoles as

Φ(r,

t)

=

Φ(0,

t)

−

r

·

E(0,

t)

−

1 2

j,j

rj rj

∂Ej (0, t) ∂rj

+ ...

(5.1)

CHAPTER 5. MEASURING AND MITIGATING NOISE

77

where E = −∇Φ. The origin is set at the center of the ion’s motional potential. The three terms shown are a spatially constant potential (which does not aﬀect the motion), the electric ﬁeld, and the gradient of the electric ﬁeld. Since the magnitude of these terms falls oﬀ as long as the multipole expansion holds, the electric ﬁeld term dominates. For a single ion moving in the rj direction, the Hamiltonian for interaction with the electric ﬁeld is

HE(t) = eΦ(rj, t) = −erjEj(t) = −e 2mωj (aj + a†j)Ej(t) = −µj(aj + a†j)Ej(t). (5.2)

for a singly positively charged ion with charge e, where Ej(t) = Ej(0, t), the electric ﬁeld at the origin where the ion resides.

µj = e 2mωj

(5.3)

is the ion’s dipole moment for motion in the j-direction. The total Hamiltonian is H(t) = H0 + H(t). Transforming into the interaction picture with respect to H0,

HI = −µj ajeiωjt + a†je−iωjt Ej(t).

(5.4)

The creation and annihilation operators will induce transitions between Fock states of the motion. A noisy electric ﬁeld will be stochastic, so that the total eﬀect is an incoherent average over many realizations of Ej(t). This ﬁnal result is a tendency towards a thermal distribution, with the average Fock state occupation n¯ increasing linearly at a rate Γh, known as the heating rate. One way to compute this is to suppose the system begins in the ground state |n = 0 , and compute the probability -
of transitioning to state |n = 1 within a small time window ∆t. Following Ref. [32], from the Schro¨dinger equation, the probability amplitude of the state |1 evolves as

c˙1

=

1 i

1|HI |0

= i µj Ej(t)e−iωjt.

The transition probability after time ∆t over meany realizations is

(5.5)

P1(∆t) = |c1(∆t)|2 =

∆t

2

c˙1(t)dt

=

µ2j
2

0

∆t

2

Ej(t)e−iωjtdt .

0

(5.6)

It can be shown that this is equivalent to

P1(∆t)

=

µ2j 22

∆t

∞
dτ 2 Ej(t)Ej(t + τ ) e−iωjt
−∞

under the following assumptions:

(5.7)

• The correlation time of the electric ﬁeld is much shorter than the integration time ∆t.

CHAPTER 5. MEASURING AND MITIGATING NOISE

78

• The integration time ∆t is much longer than the oscillation period 2π/ωj.

• The electric ﬁeld is weak enough so that the transition rate is much smaller than the harmonic oscillation rate ωj.

The integral in (5.7) is the Fourier transform of the autocorrelation function of the electric ﬁeld, at frequency ωj, and is precisely equal to the power spectral density of the electric ﬁeld in the j-direction, SEj (ωj). The heating rate is thus

Γh =

P1(∆t) ∆t

=

µ2j 22

SEj (ωj)

=

4

e2 mωj SEj (ωj).

(5.8)

Under heating, the mean Fock state occupation n¯ of the mode being considered increases at the rate Γh: n¯˙ = Γh.
Because this mechanism is a resonant eﬀect, the heating rate is dependent only on the spectral density of electric ﬁeld noise at precisely the motional frequency. In an intuitive picture, we may think of motional heating as occurring when an unwanted electric ﬁeld resonantly excites the motion, but does so with a random phase so that the process is incoherent.

5.1.1 Heating of diﬀerential modes of motion

For multiple ions in a crystal, the electric-ﬁeld term contribution of the expansion (5.1) vanishes for modes of motion other than the center-of-mass mode. The heating rate is then instead dominated by the next nonvanishing term, which in the simplest case is the electric-ﬁeld gradient. Here, rather than the heating rate being proportional to a dipole moment squared times the power spectral density of the electric ﬁeld, it is proportional to a quadrupole moment squared times the power spectral den-
sity of the electric ﬁeld gradient:

Γh ∝ Q2j S∇E(ωj).

(5.9)

Equation (5.3) shows that for center-of-mass heating, the relevant length scale for the dipole
moment is the size of the motional ground-state wavepacket. For diﬀerential mode heating
of a typical vibrational ion crystal, the two length scales for the quadrupole moment are the ground state wavepacket size and the ion-ion distance 2r, so that Q ∼ µr. Meanwhile, the
magnitude of the electric ﬁeld gradient is roughly that of the electric ﬁeld divided by the ionsurface distance h, so its spectral density is the square of this relationship: S∇E ∼ h−2SE. Therefore, the heating rate for a diﬀerential mode is reduced as compared to that of a comparable center-of-mass mode by (r/h)2, the ratio of the ion-ion distance to the ionsurface distance. This ratio is typically 10−2 − 10−1, so that diﬀerential modes tend to heat at rates 102 − 104 times slower than center-of--
mass modes.
Rotational ion crystal motion is also a diﬀerential mode of motion, insensitive to electric
ﬁelds but sensitive to their gradients. The nature of this interaction diﬀers in some ways
from vibrational motion, however; see Sec. 7.3.

CHAPTER 5. MEASURING AND MITIGATING NOISE

79

Excitation

1.0

n¯ = 28(2)

100

n¯˙ = 0.24(2) q/ms

0.5

80

0 ms wait time
0.0

¯n

1.0

60

n¯ = 94(9)

0.5

40

Excitation

0.0 0

300 ms wait time

100

200

300

Rabi time (µs)

20 0

100

200

300

Wait time (ms)

Figure 5.1: Heating rate measurement of the z-direction using a single ion at mode frequency ωz = 2π × 1.96 MHz. For each wait time, a Rabi oscillation on the carrier is measured and ﬁt for n¯. The heating rate is quantiﬁed as the number of motional quanta added to the mode per millisecond (q/ms).

5.2 Measuring heating rates
To measure the heating rate, we measure the average Fock state occupation n¯ as a function of time in between cooling and measurement. The slope of n¯ versus time is the heating rate. We employ two methods to measure n¯, the Rabi method and the sideband method. Under typical experimental parameters, the Rabi method is most appropriate for n¯ ranging from 1 to 1000, and the sideband method is most appropriate for n¯ < 1. For n¯ 1000, there is so little motional coherence that laser-based measuremen-
ts are of little use, and alternative thermometry methods are required.

5.2.1 Rabi method
Using the Rabi method, we infer the ion’s motional temperature from Rabi oscillations [33]. As seen in Fig. 2.4, the form of Rabi oscillations is dictated by the temperature. The carrier transition is most often used, which is typically most appropriate for values of n¯ between 3 and 1000. If n¯ 3, the carrier oscillations decay slowly, and using a sideband instead may provide some greater discrimination between possible values of n¯. We ﬁt to a function of the form (2.38) parameterized by n¯ thro-
ugh (2.37). For higher heating rates, it is usually appropriate to begin at a Doppler-cooled temperature and use the Rabi method for measurements. Figure 5.1 shows a sample heating rate measured using the Rabi method.

CHAPTER 5. MEASURING AND MITIGATING NOISE

80

5.2.2 Sideband ratio method
When n¯ is small enough, 1, a direct comparison of red and blue sideband heights for a given pulse duration yields the most information about the temperature. It can be shown that if the motional state is thermal, then the ratio between the red and blue sideband heights is n¯/(n¯ + 1) [25]. However it should be noted that the motional distribution after sideband cooling is in fact typically not thermal, and the sideband ratio method can systematically underestimate n¯ [34], and in turn underestima-
te the heating rate. The sideband ratio method is most appropriate for low heating rates because it is highly sensitive to small changes in n¯ if one initially sideband cools.

5.3 Origins of electric ﬁeld noise in trapped-ion experiments
An ion trapped within a surface Paul trap is typically 10s to hundreds of micrometers away from the trap surface, and signiﬁcantly further away from any other object. The dominant source of electric ﬁeld noise at the location of a trapped ion crystal is thus almost always voltage ﬂuctuations on the surface of the trap. The physical origin of these ﬂuctuations can be broken into two broad categories: surface noise and technical noise.
5.3.1 Surface noise
Surface noise refers to voltage ﬂuctuations arising from physical processes due to the trap surface being a material at a ﬁnite temperature with some composition, morphology, and possibly defects and contamination. Surface noise is thus related to the properties of the surface. In many trapped-ion experiments, the magnitude of surface noise is high enough to be a limiting factor in their respective ﬁgures of merit, such as two-qubit gate ﬁdelities [27, 35]. The physical origins of surface noise in-
 trapped-ion experiments is unknown, and is several orders of magnitude higher than what would be expected from basic considerations such as blackbody radiation and Johnson noise [32, 36]. For this reason, motional heating due to surface noise is sometimes referred to as “anomalous motional heating.”
5.3.2 Technical noise
Technical noise refers to electric ﬁeld noise due to voltage ﬂuctuations not related to the trap surface. These most frequently are small stray voltages unintentionally applied to the trap surface via channels which are intended to apply voltages related to trapping, such as the RF conﬁning voltages or voltages for stray ﬁeld compensation. The consequences of technical noise diﬀer from those of surface noise in a few key ways:
• Technical voltage noise is fully spatially correlated across the entire electrode experiencing the noisy voltage. Surface noise, on the other hand, may have smaller spatial

CHAPTER 5. MEASURING AND MITIGATING NOISE

81

correlations or practically none at all. This can give technical electric ﬁeld noise a preferred direction with respect to the trap surface.
• The power spectral density of technical noise is often complex and inconsistent over time because it arises from uncontrolled sources. Surface noise, on the other hand, often follows a smooth power law in the spectral density as a function of noise frequency.

5.4 Relating technical noise spectrum measurements
to the heating rate
If ion motional heating is limited by technical noise, then reducing it amounts to identifying and removing the source of the noise, weakening its eﬀect, or making the system insensitive to the noise. This typically involves isolating or removing electrical devices from the system, or changing grounding connections to remove or redirect noisy currents. Because the goal of lowering electric-ﬁeld noise is to lower the motional heating rate, the heating rate itself is the ultimate ﬁgure of merit. Suc-
h measurements can be slow however, taking at least several minutes to estimate a heating rate at a single motional frequency, making it diﬃcult to iterate between electrical conﬁgurations. An alternative method is to use a spectrum analyzer measurement as a proxy. This directly yields a power spectrum of voltage between two reference points. If we can estimate a heating rate using this information, then spectrum analyzer measurements can provide a useful benchmark as a proxy measurement. To do th-
is, we must estimate the electric ﬁeld spectral density at the location of the ion from the spectrum analyzer measurement, from which we can estimate the heating rate using (5.8).
5.4.1 Converting measured noise power to voltage spectral
density
A spectrum analyzer will typically provide a measurement in terms of noise power, in dBm, as a function of frequency. To estimate noise levels, however, we need to know the spectral density of the noise. The measured power is the spectral density integrated over frequency window, typically referred to as the resolution bandwidth. The spectral density can thus be estimated by dividing the measured power by the resolution bandwidth. This is done on a log scale for measurements in dB. For example, a -
measured noise power of −90 dBm using a 30 kHz resolution bandwidth corresponds to an average spectral density of −90 − 10 log10(30 × 103) = −135 dBm/Hz over the integration window. This is equivalent to 1 mW/Hz ×10−135/10 = 3.2 × 10−17 W/Hz in absolute power. We further convert this to a voltage spectral density using the known impedance of the spectrum analyzer: 3.2 × 10−17 W/Hz × 50 Ω = 1.6 × 10−15 V2/Hz.

CHAPTER 5. MEASURING AND MITIGATING NOISE

82

(a)

(b)

Chamber walls

DC

E

RF

Ground plane

(c)

(d)

E E

Figure 5.2: Examples of pairs of electrodes which may experience a potential diﬀerence, and a qualitative representation of the electric ﬁeld produced.
5.4.2 Converting voltage spectral density to electric ﬁeld spectral density
Converting voltage to electric ﬁeld is a matter of electrostatics and geometry. The two reference points being measured will correspond to electrodes on the trap, and given the geometry, one can in principle solve the corresponding electrostatics problem to determine how a given potential diﬀerence between the two electrodes translates into an electric ﬁeld. It sometimes suﬃces to roughly estimate the appropriate length scale d such that potential diﬀerence ∆V gives an electric ﬁeld of magnitude E-
: E = ∆V /d. As a reference it is useful to keep in mind that two parallel inﬁnite planar surfaces separated by a distance d will have a corresponding length scale equal to exactly d, and any other geometry will be less eﬃcient and thus have a larger such length scale. Continuing the previous example, if the appropriate length scale is 1 cm, then the electric ﬁeld spectral density is 1.6 × 10−15 V2/Hz/d2 = 1.6 × 10−11(V/m)2/Hz.
5.4.3 Choosing reference points for measurement
Equation (5.8) can be used to convert an electric ﬁeld spectral density into a heating rate. If SE = 1.6 × 10−11(V/m)2/Hz at a frequency of 1 MHz, then from (5.8), a single 40Ca+ ion will be heated at a rate of 2.3 quanta/ms. In general, the total electric ﬁeld seen by the ion is the sum of the contributions from all pairs of electrodes. It is therefore useful to estimate which

CHAPTER 5. MEASURING AND MITIGATING NOISE

83

pairs are most likely to contribute to electric ﬁeld noise to inform where to make spectrum analyzer measurements.
In our case, prior to construction of the Faraday cage, heating rates in the vertical direction were measured to be consistently at least several quanta/ms, while those in the horizontal direction were consistently below 0.05 q/ms. This indicates that the geometry of the technical noise was such that the noisy ﬁelds were primarily in the direction normal to the trap surface.
Figure 5.2 shows a few diﬀerent example pairs of electrodes of the ring trap, and the electric ﬁelds which arise from a potential diﬀerence between them. The geometry of the electrode pair being considered inﬂuences both the direction and the magnitude of the ﬁeld produced. For the purposes of these considerations, the vacuum chamber itself is able to act as an electrode. For example, a potential diﬀerence between one of the DC electrodes and the grounded RF electrodes would produce a tilted elect-
ric ﬁeld (b). A potential diﬀerence between the grounded RF electrodes and the surrounding ground plane, on the other hand, has cylindrical symmetry, so that the electric ﬁeld points entirely in the vertical direction (c). Spatially correlated noise on all eight DC electrodes with respect to the vacuum chamber also yields the right symmetry for a vertical electric ﬁeld, but because all of these electrodes are further from the ion, the ﬁeld is smaller for a given potential diﬀerence (d). The ﬁrst a-
nd third ring RF electrodes are shorted to each other inside of the chamber, so they share the same potential.
In our spectrum analyzer measurements, we chose to measure two pairs of points: the surface of the chamber and the ground pin of the DC voltage cable (which connects to the ground plane surrounding the trap), and the surface of the chamber and the grounded RF electrodes (which also connects to the ground plane). It was suspected that the center electrode in particular was the most likely to contribute to the measured noise, as it the closest electrode to the ions, and also has the right cylindrica-
lly symmetric geometry to produce vertical ﬁelds.

5.4.4 Comparing to heating rates
Figure 5.3(a) shows spectrum analyzer measurements taken between two diﬀerent reference points. Each shows a range of noise powers, showing the minimum and maximum of several diﬀerent measurements spanning several days. Each measurement is with the same grounding conﬁguration, and was taken before construction of the Faraday cage.
To compare the measured noise spectra with heating rates, we convert the measured power to voltage spectral density. Furthermore, because the heating rate is also inversely proportional to frequency from (5.8), we divide the result by frequency. In other words, for a given noise spectral density, the heating rate will be lower at higher frequency because the ion is more tightly conﬁned and thus has a smaller dipole moment to interact with the noise. The result is now directly proportional to the h-
eating rate that would result from the noise measured. Whether this relationship actually holds in reality is contingent on the heating rate being limited by the measured noise, as opposed to by noise from some other

CHAPTER 5. MEASURING AND MITIGATING NOISE

84

(a) −90

Between chamber and center electrode Between chamber and DC ground

Raw measured noise power (dBm)

−100

−110

(b)

10−15

102

Heating rate (q/ms)

Voltage spectral density per frequency (V2/Hz)/MHz

10−16

101

10−17

100

0

1

2

3

4

5

Frequency (MHz)

Figure 5.3: (a) Raw measured noise spectra between two pairs of reference points, shown as a range of measured noise powers over several diﬀerent measurements. These measurements were taken with a spectrum analyzer using a resolution bandwidth of 30 kHz. (b) The same data converted to voltage spectral density and scaled by frequency, compared with measurements of vertical heating rates. The horizontal line at 1 q/ms is a rough benchmark for the heating rate threshold needed to allow for sideband c-
ooling.

unmeasured pair of reference points. Figure 5.3(b) plots this scaled noise on one axis, and measured vertical heating rates on the other. The heating rates were measured within the time interval of the spectrum analyzer measurements. We do not attempt to convert voltage spectral density to electric ﬁeld spectral density here, but the noise and heating rate scales are set proportionally to each other. We ﬁnd in this case some agreement between the scaled noise level and the heating rates, contribut-
ing evidence that the heating rates may be limited by noise across the measured points. It should be noted however that the measured noise spectra have a large variation, greater than 5 dB (a factor of 3) over much of the spectrum, making it easier to artiﬁcially induce agreement between noise spectrum and heating rate measurements.

CHAPTER 5. MEASURING AND MITIGATING NOISE
−80 −90

85
Before After

Noise amplitude (dBm)

−100

−110

0

2

4

Frequency (MHz)

Figure 5.4: Left: Photo of a subset of the grounding connections made during one attempt to reduce the noise spectrum. Right: The measured noise spectrum before and after adding the connections shown on the left. The measurement was made between the chamber surface and the DC ground pin, using a resolution bandwidth of 30 kHz.

5.5 Minimizing technical noise
Prior to construction of the Faraday cage, we attempted to lower the measured noise spectra by changing grounding conﬁgurations. This was successful in lowering the noise spectrum somewhat, but was not successful in lowering vertical heating rates reliably and consistently below the threshold required for sideband cooling of the vertical motion. This is shown in Fig. 5.4. Nonetheless, we list some of the general strategies used in choosing grounding conﬁgurations which were likely to lower the noi-
se spectrum. The list is not comprehensive, nor even self-consistent.
• Use as few independent connections to wall power ground as possible. Ideally, only a single reference to wall ground is made. All other devices which produce voltages which will ultimately go to the trap should be isolated from the wall ground and connected instead directly to each other.
• Isolate the system of all devices, active or passive, which contribute to trap electrode voltages from all other electrical systems. Within this system, ideally all grounded points are connected to each other at a single point of intersection, a “star ground”, to prevent loops of current (“ground loops”).
• Spectrum analyzer measurements should be made with the spectrum analyzer isolated from wall ground, and instead referenced to some point on the system being measured.
• For making electrical connections between points, large contact surface areas are preferred over high-conductivity material; e.g. snakeskin tubing is preferred over a thin

CHAPTER 5. MEASURING AND MITIGATING NOISE

86

Noise amplitude (dBm)

−70 Outside Faraday cage
Inside Faraday cage −80

−90

−100

−110

0

1

2

3

4

5

Frequency (MHz)

Figure 5.5: Spectrum analyzer measurements of radiation pickup using a loop of wire, inside vs. immediately outside the Faraday cage.

copper wire. One can measure a noise spectrum just across the connecting cable to test its eﬃcacy at making electrical connections at the frequencies of interest.
• For identifying a single source of noise, it is best to disconnect all devices and reconnect one at a time.
• After using carefully establishing a starting point for connection with all necessary devices in place, one may still ﬁnd that additional grounding connections between devices helps lower the noise spectrum.
Our best eﬀorts of ﬁnding an optimal grounding conﬁguration lowered the noise spectrum by approximately 1 order of magnitude in the frequency range of interest, about 2 − 5 MHz.

5.6 Performance of the Faraday cage
We benchmark the performance of the Faraday cage in three ways: reduction of radiation, reduction of the noise spectrum as measured between the chamber surface and RF ground pin, and reduction of the vertical heating rate. The latter is the most important.
Measurements of the radiation pickup are presented in Fig. 5.5. The spectrum analyzer was connected to a loop of copper wire about 10 cm in diameter, and placed immediately outside the Faraday cage, and then again inside the Faraday cage. The measured radiation pickup was reduced by about 1 order of magnitude inside the cage at 3 MHz and above.
Voltage noise spectra measured directly on the system are presented together with measurements of the vertical heating rate in Fig. 5.6. The two noise spectra shown are with and without the Faraday cage, measured at across the same two points: the surface of the chamber, and the RF pin which connects to the center electrode. In reality, many such noise

CHAPTER 5. MEASURING AND MITIGATING NOISE

10−15

Without Faraday cage With Faraday cage

87
101

Voltage spectral density per frequency (V2/Hz)/MHz
Heating rate (q/ms)

100 10−16

10−17

10−1

0

1

2

3

4

5

Frequency (MHz)

Figure 5.6: Voltage noise spectra and vertical heating rates, comparing before and after installation of the Faraday cage. Noise spectra are measured between the chamber surface and pin connecting to the center electrode. The blue trace is the lowest measured noise spectrum prior to installation of the Faraday cage, and the red trace is the noise spectrum after its installation. Points with error bars are vertical heating rate measurements. Heating rates before the Faraday cage (blue circles) are -
an aggregate of many diﬀerent grounding conﬁgurations. The grey horizontal line is at 1 q/ms heating rate as a reference point. The two y-axes are scaled to be proportional to each other, but their ratio is chosen arbitrarily.

spectra were measured prior to the installation of the Faraday cage; the one shown is the one with the lowest measured amplitude of all grounding conﬁgurations. The cage appears to improve the noise amplitude by one order of magnitude at 3 MHz and above, except for a small range near 4 MHz.
The heating rates shown in Fig. 5.6 labelled “Without Faraday cage” are an aggregate of measurements made with many grounding conﬁgurations. Prior to the Faraday cage, heating rates varied signiﬁcantly and were often larger than 1 q/ms. With the Faraday cage, the vertical heating rate was lowered by 1−2 orders of magnitude, and was consistently below 0.4 q/ms, low enough to reliably allow for sideband cooling. We also see that the heating rate does not appear to follow a simple power law scaling a-
s a function of frequency, and thus is likely still limited by technical noise. Finally, we see generally poor agreement in this case between the noise spectra (scaled by frequency) and the heating rates. These measurements were taken with one side of the Faraday cage open, and have demonstrated this conﬁguration to be suﬃcient. We have therefore decided to not fully enclose the Faraday cage, which could risk complications such as trapping heat emitted by the enclosed electronics.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:42.187Z
- **Text Length:** 219010 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
