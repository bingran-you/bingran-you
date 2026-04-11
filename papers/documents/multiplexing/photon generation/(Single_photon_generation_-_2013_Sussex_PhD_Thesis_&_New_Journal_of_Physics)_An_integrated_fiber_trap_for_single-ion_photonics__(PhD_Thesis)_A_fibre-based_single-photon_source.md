# PDF Document: (PhD Thesis) A ﬁbre-based single-photon source.pdf

**File Path:** (PhD Thesis) A ﬁbre-based single-photon source.pdf

**Processed Date:** 2026-02-10T18:15:01.586Z

**File Size:** 73776.68 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 827

**Title:** (Single photon generation - 2013 Sussex PhD Thesis & New Journal of Physics) An integrated fiber trap for single-ion photonics

**Collection:** Multiplexing > Photon Generation

---

## Extracted Text Content

A University of Sussex DPhil thesis Available online via Sussex Research Online: http://sro.sussex.ac.uk/ This thesis is protected by copyright which belongs to the author. This thesis cannot be reproduced or quoted extensively from without first obtaining permission in writing from the Author
The content must not be changed in any way or sold commercially in any format or medium without the formal permission of the Author
When referring to this work, full bibliographic details including the author, title, awarding institution and date of the thesis must be given
Please visit Sussex Research Online for more information and further details

A ﬁbre-based single-photon source
Andrew G. Riley-Watson
Submitted for the degree of Doctor of Philosophy University of Sussex September 2012

Declaration
I hereby declare that this thesis has not been and will not be submitted in whole or in part to another University for the award of any other degree.
Signature:
Andrew Riley-Watson

iii
UNIVERSITY OF SUSSEX
ANDREW G. RILEY-WATSON, DOCTOR OF PHILOSOPHY
A FIBRE-BASED SINGLE-PHOTON SOURCE
ABSTRACT
The controlled emission and absorption of single photons is an important enabling technology in the ﬁelds of quantum communication, cryptography and computing. We have realised a novel single photon source, based on a miniature ‘endcap’ ion trap with integrated optical ﬁbres. To minimise distortion of the trapping ﬁeld the ﬁbres are tightly integrated and recessed within the two hollow cylindrical rf electrodes of the trap. This allows us to bring the ﬁbres to within approximately 300 µm of the tr-
apped ion. With the ﬁbres in place we are able to collect the ion’s ﬂuorescence using no further optics. In this thesis the ion trap is fully characterised, and the quantum nature of the light demonstrated in the results of a variant on the Hanbury Brown-Twiss photon-correlation experiment. The scheme will ultimately be extended to implement a coherent ion-photon interface through strong coupling cavity-QED. Towards this end, an ultra-high-ﬁnesse cavity has been designed and fabricated by laser-ma-
chining and coating surfaces with a range of radii of curvature on the end facets of the ﬁbres. To improve the stability and precision manipulation of the cavity in-vacuum, an entirely new trap has been designed and built. Finally, the current status of the ﬁbre cavity and the oulook for the experiment are presented.

Acknowledgements
The work of this thesis was carried out in the group of Professor Wolfgang Lange at the University of Sussex between October 2008 and September 2012. Adventures in experimental physics are rarely a solo enterprise, and over the last four years many people— post-docs, students and faculty members—have contributed to the success of our experiment. Perhaps the most rewarding part of the last four years has been meeting and working with so many interesting and talented people, all of whom deserve my t-
hanks.
In particular, I would like to thank my supervisor Matthias Keller for his support and understanding. I will miss the conversations, and the mud, during our 10k lunchtime South Downs runs. Keep up the running—I’ll be checking.
Thanks to Alex Wilson for introducing me to ion traps right in the beginning, and for all his hard work building up the beautiful little trap we used so successfully over the last few years. To Hiroki, who wrote most of the LabView programs we used and with whom I worked on the experiment for about three years—thanks for your hard work, your endless patience with my endless questions, and for being such a great ambassador for Japan. Have a fun!
Thanks to Alan Butler in our workshop for always having the time to tap the hole we forgot to make, for his amazing knowledge of vacuum technology, and for all the chats around the milling machine. Thanks also to John Knight, Peter, Bob, and all in the mechanical workshop for their advice, time, and for the many, many miniature parts we made you make for the new trap.
A shadow fell on our group in April of this year with the sudden death of Wolfgang Lange. It’s hard to describe what the loss of such a brilliant and kind-hearted leader meant to us all. Our lives, our work, and the ﬁeld of quantum optics in general, are the poorer for his loss. Wolfgang, wir vermissen Dich so sehr.
To all the past and current members of the group, thanks for your help over the years: Fedja, for designing the laser-machining setup we used, and helping me move house; Dan for the badminton, Nic, Kevin, Lizzy, Stephen, Anders and Peter; Michael for taking over from me, Atsushi for his work on the ﬁbre cavity, and everyone else who, in my haste to get to the printers in time, I have omitted.
Thanks to Penny, and to my parents, who would have loved to have seen this. Above all, I would like to thank Clare, for supporting me in every possible way on this long journey, and my wonderful children, for always being there. Hamish, Elspeth and Ossian, this thesis is dedicated to you and the children of your generation. One day, one of you will ﬁnd a much better way of doing this stuff.
“Extracting one molecule’s signature [in spectral analysis] from the rest of the signatures is hard work, sort of like picking out the sound of your toddler’s voice in a roomful of screaming children during playtime. It’s hard, but you can do it.”
Neil De Grasse Tyson Death By Black Hole
iv

Contents

List of Tables

viii

List of Figures

xi

1 Introduction

1

1.1 Motivation—Quantum Networking . . . . . . . . . . . . . . . . . . . . . . . . . . 1

1.1.1 Qubits . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3

1.1.2 Why a Trapped Ion Quantum Computer? . . . . . . . . . . . . . . . . . 4

1.1.3 Quantum Networking . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5

1.1.3.1 Single-photon sources . . . . . . . . . . . . . . . . . . . . . . 5

1.1.4 This Thesis . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6

2 Radiofrequency Ion Traps

7

2.1 Earnshaw’s theorem . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7

2.2 The quadrupole potential . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8

2.3 Equations of motion of an ion in a quadrupole ﬁeld . . . . . . . . . . . . . . . . . 11

2.4 The Pseudopotential approximation . . . . . . . . . . . . . . . . . . . . . . . . 13

2.5 The Trap Depth . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 14

2.6 Micromotion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 15

3 Laser cooling

17

3.1 The quantum hardware—Calcium . . . . . . . . . . . . . . . . . . . . . . . . . 17 3.1.1 The 40Ca+ ion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 17

3.2 Doppler Cooling . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 18

3.2.1 The Density Matrix Formalism . . . . . . . . . . . . . . . . . . . . . . . 19

3.2.2 The Optical Bloch Equations . . . . . . . . . . . . . . . . . . . . . . . . 20

3.2.3 Three-Level Model - repumping on the 850 nm and 854 nm transitions . 23

4 Cavity Quantum Electrodynamics

25

4.1 Optical cavities . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 25

4.1.0.1 Cavity types and the conditions for ‘stability’ . . . . . . . . . . 27

4.1.1 Finesse . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 28

4.2 Atom-Cavity Interaction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 30

4.2.1 The Jaynes-Cummings Model . . . . . . . . . . . . . . . . . . . . . . . . 31

4.2.2 Dressed States . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 33

4.2.3 Coupling Regimes . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 34

4.2.4 Experimental realisation of strong coupling . . . . . . . . . . . . . . . . 35

5 Experimental Setup

36

5.1 Overview . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 36

5.2 Fluorescence detection and computer control . . . . . . . . . . . . . . . . . . . 38

5.2.1 Fluorescence detection . . . . . . . . . . . . . . . . . . . . . . . . . . . 38

v

vi

CONTENTS

5.2.1.1 The PMT . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 38 5.2.1.2 The EMCCD Camera . . . . . . . . . . . . . . . . . . . . . . 39 5.2.2 Generation of calcium ions . . . . . . . . . . . . . . . . . . . . . . . . . 40 5.3 The endcap ion trap . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 41 5.4 Simulations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 43 5.4.1 The electric ﬁeld and rf potential . . . . . . . . . . . . . . . . . . . -
. . . 43 5.4.2 The pseudo-potential . . . . . . . . . . . . . . . . . . . . . . . . . . . . 44 5.4.3 The effect of a dc-bias on the pseudo-potential . . . . . . . . . . . . . . 46 5.4.4 Secular frequencies . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 49 5.4.5 The separation of the electrodes . . . . . . . . . . . . . . . . . . . . . . 50 5.4.6 The recess of the outer electrodes . . . . . . . . . . . . . . . . . . . . . . 51 5.4.7 The effect of the ﬁbres on the pseudo-potential . . . .-
 . . . . . . . . . . 52 5.4.8 The electrode structure . . . . . . . . . . . . . . . . . . . . . . . . . . . 53 5.4.8.1 The solid angle subtended by the ﬁbres . . . . . . . . . . . . . 55 5.5 RF drive and electrical connections . . . . . . . . . . . . . . . . . . . . . . . . 56 5.5.1 RF drive . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 56 5.5.1.1 The autotransformer . . . . . . . . . . . . . . . . . . . . . . . 57 5.6 The Vacuum System . . . . . . . . . . . . . . . . . . .-
 . . . . . . . . . . . . . 60 5.7 Magnetic Field Control . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 63 5.7.1 Experiment Control . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 64 5.7.1.1 Controlling laser power—accousto-optic modulators . . . . . . 64

6 Characterisation of the endcap trap

66

6.1 Trapping ions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 66

6.2 Micromotion minimisation . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 70

6.2.1 Coarse micromotion minimisation . . . . . . . . . . . . . . . . . . . . . . 71

6.2.2 RF-Photon correlation . . . . . . . . . . . . . . . . . . . . . . . . . . . . 71

6.2.3 Automatic 3D micromotion minimisation . . . . . . . . . . . . . . . . . 72

6.2.3.1 Sensitivities of the techniques . . . . . . . . . . . . . . . . . . 76

6.2.4 Sources of stray ﬁelds after loading . . . . . . . . . . . . . . . . . . . . 77

6.3 Magnetic ﬁeld compensation . . . . . . . . . . . . . . . . . . . . . . . . . . . . 80

6.4 Secular frequency measurements . . . . . . . . . . . . . . . . . . . . . . . . . . 82

7 A ﬁbre-coupled source of single-photons

86

7.1 Theory of the measurements . . . . . . . . . . . . . . . . . . . . . . . . . . . . 87

7.1.1 Classical theory of intensity ﬂuctuations . . . . . . . . . . . . . . . . . . 87

7.1.1.1 Second-Order Coherence . . . . . . . . . . . . . . . . . . . . 88

7.1.1.2 The Hanbury Brown-Twiss Experiment . . . . . . . . . . . . . 90

7.1.2 Quantum theory of second-order coherence . . . . . . . . . . . . . . . . . 91

7.1.3 Photon Antibunching . . . . . . . . . . . . . . . . . . . . . . . . . . . . 92

7.1.3.1 The second-order correlation function for a two-level atom . . 93

7.2 Results—Continuous Single-Photon Generation . . . . . . . . . . . . . . . . . . 96

7.2.1 Spectroscopy with ﬁbre-based detection . . . . . . . . . . . . . . . . . . 97

7.2.2 Saturation measurements of beam 1 . . . . . . . . . . . . . . . . . . . . 98

7.2.3 The correlation signal path . . . . . . . . . . . . . . . . . . . . . . . . . 99

7.2.4 Continuous Correlation Measurements . . . . . . . . . . . . . . . . . . 100

7.2.4.1 Correlation measurements with a high intensity . . . . . . . . 100

7.2.4.2 Correlation measurements with a low intensity . . . . . . . . . . 101

7.3 Results—Pulsed Single-Photon Generation . . . . . . . . . . . . . . . . . . . . 103

7.3.1 Outline of the setup . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 103

7.3.2 The sensitivity of the PMTs to 866 nm light . . . . . . . . . . . . . . . . 104

7.3.3 The pulse sequence and signal path . . . . . . . . . . . . . . . . . . . . 106

vii

CONTENTS

7.3.4 7.3.5 7.3.6 7.3.7

7.3.3.1 The timing of the shelving pulse . . . . . . . . . . . . . . . . 109 Subtracting the background . . . . . . . . . . . . . . . . . . . . . . . . 109 Correlation Measurements . . . . . . . . . . . . . . . . . . . . . . . . . 110 Single Photon Pulse Shape . . . . . . . . . . . . . . . . . . . . . . . . . 112 Single Photon Efﬁciency . . . . . . . . . . . . . . . . . . . . . . . . . . 112

8 The Fibre Fabry-Pe´rot cavity

114

8.1 Laser machining the ﬁbre facets . . . . . . . . . . . . . . . . . . . . . . . . . . 114

8.1.1 The CO2 laser setup . . . . . . . . . . . . . . . . . . . . . . . . . . . . 114 8.1.2 The ﬁbres—etching and cleaving . . . . . . . . . . . . . . . . . . . . . 116

8.1.3 Shooting the ﬁbres . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 119

8.1.4 Analysing the shot . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 121

8.1.4.1 White-light interferometry . . . . . . . . . . . . . . . . . . . . 122

8.1.5 Coating the ﬁbres . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 128

8.2 The ﬁbre cavity . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 129

8.2.1 Cavity parameters . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 130

8.2.1.1 Cavity waist and clipping losses . . . . . . . . . . . . . . . . . 130

8.2.1.2 Mode volume and the CQED Coupling parameter . . . . . . . 133

8.2.1.3 Possible cavity geometries . . . . . . . . . . . . . . . . . . . . 135

8.2.1.4 Conclusion . . . . . . . . . . . . . . . . . . . . . . . . . . . . 136

8.3 A new trap . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 136

8.3.1 The new vacuum design . . . . . . . . . . . . . . . . . . . . . . . . . . 137

8.3.2 The trap structure . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 138

9 Conclusion and outlook

143

9.1 Conclusion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 143

9.2 Outlook . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 144

A The Lasers

145

Appendices

145

Bibliography

147

List of Tables
3.1 Table of transitions in 40Ca+ . . . . . . . . . . . . . . . . . . . . . . . . . . . . 18 5.1 Degrees of vacuum . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 60
viii

List of Figures
1.1 An NP problem—prime factorisation . . . . . . . . . . . . . . . . . . . . . . . . 3
2.1 The hyperbolic electrodes of an ideal Paul trap . . . . . . . . . . . . . . . . . . . 9 2.2 A comparison of equipotentials . . . . . . . . . . . . . . . . . . . . . . . . . . . 10 2.3 The ‘saddle’ potential . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 11 2.4 The stability diagram for an ideal Paul trap . . . . . . . . . . . . . . . . . . . . . 13 2.5 The secular motion and the micromotion . . . . . . . . . . . . . . . . . . . . . . 16
3.1 Energy levels in the 40Ca+ ion . . . . . . . . . . . . . . . . . . . . . . . . . . . 18 3.2 A simpliﬁed three-level model of the 40Ca+ ion. . . . . . . . . . . . . . . . . . . 23 3.3 Dark resonance in the three-level model . . . . . . . . . . . . . . . . . . . . . . 24
4.1 Schematic drawing of a Fabry-Pe´rot cavity . . . . . . . . . . . . . . . . . . . . . 26 4.2 The cavity stability diagram . . . . . . . . . . . . . . . . . . . . . . . . . . . . 28 4.3 Cavity transmission as a ratio of input intensity . . . . . . . . . . . . . . . . . . 30 4.4 An atom in a cavity . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 31 4.5 The ‘dressed’ atom-cavity state . . . . . . . . . . . . . . . . . . . . . . . . . . . 34
5.1 Top view of the main optical setup . . . . . . . . . . . . . . . . . . . . . . . . . 37 5.2 Alignment of the PMT . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 39 5.3 Energy levels in the 40Ca atom . . . . . . . . . . . . . . . . . . . . . . . . . . . 40 5.4 The Endcap Trap . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 42 5.5 Simulations: The electric ﬁeld . . . . . . . . . . . . . . . . . . . . . . . . . . . 44 5.6 Simulations: The instantaneous electric p-
otential . . . . . . . . . . . . . . . . . 44 5.7 Simulations: The pseudo-potential . . . . . . . . . . . . . . . . . . . . . . . . . 45 5.8 Simulations: Radial and axial pseudo-potentials . . . . . . . . . . . . . . . . . . 45 5.9 Simulations: dc potentials . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 47 5.10 Simulations: Combined rf and dc potentials . . . . . . . . . . . . . . . . . . . . 47 5.11 Trap depths with a dc-bias . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4-
8 5.12 Extracting the secular frequency from the pseudo-potential . . . . . . . . . . . . 49 5.13 Simulations: The effect of the electrode separation . . . . . . . . . . . . . . . . 50 5.14 Simulations: The deviation from the parabolic potential . . . . . . . . . . . . . . . 51 5.15 Simulations: The recess of the outer electrode . . . . . . . . . . . . . . . . . . . 52 5.16 Simulations: The effect of the ﬁbre recess . . . . . . . . . . . . . . . . . . . . . 53 5.17 Cutaway view of the electrode st-
ructure . . . . . . . . . . . . . . . . . . . . . . 54 5.18 Simpliﬁed drawing of the trap mount . . . . . . . . . . . . . . . . . . . . . . . . 55 5.19 The solid angle subtended by the ﬁbres at the ion. . . . . . . . . . . . . . . . . . 56 5.20 A series LCR circuit. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 57 5.21 A drawing of the autotransformer . . . . . . . . . . . . . . . . . . . . . . . . . . 58 5.22 A comparison between simulated and real LCR resonances . . . . . . . .-
 . . . . 58 5.23 Electrical connections to the trap . . . . . . . . . . . . . . . . . . . . . . . . . . 60 5.24 The vacuum chamber . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 61
ix

x

LIST OF FIGURES

5.25 The chamber and vacuum ﬂange assembly . . . . . . . . . . . . . . . . . . . . . 62 5.26 A drawing of the trap surrounded by the magnetic ﬁeld coils . . . . . . . . . . . 64 5.27 Double-pass AOM setup . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 65

6.1 A single ion in the trap . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 68

6.2 Quantum jumps on the D 3 ↔P 3 transition . . . . . . . . . . . . . . . . . . . . . 68

2

2

6.3 Spectroscopy using the cooling beams . . . . . . . . . . . . . . . . . . . . . . . 69

6.4 Coarse micromotion compensation . . . . . . . . . . . . . . . . . . . . . . . . . . 71

6.5 The rf-photon correlation signal path . . . . . . . . . . . . . . . . . . . . . . . . 72

6.6 The phase ﬂip in micromotion rf-photon correlations . . . . . . . . . . . . . . . 75

6.7 Micromotion amplitudes . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 76

6.8 Planes in compensation-voltage space . . . . . . . . . . . . . . . . . . . . . . . 77

6.9 The variation in the three micromotion compensation voltages over time . . . . . 79

6.10 The calculated positions of origin of the stray charge . . . . . . . . . . . . . . . 80

6.11 Optical pumping to dark states in Calcium . . . . . . . . . . . . . . . . . . . . . . 81

6.12 Magnetic ﬁeld compensation . . . . . . . . . . . . . . . . . . . . . . . . . . . . 82

6.13 Scanning over the radial and axial secular frequencies . . . . . . . . . . . . . . . 84

6.14 Secular frequencies: comparison with simulation . . . . . . . . . . . . . . . . . 85

7.1 The Hanbury Brown-Twiss experiment . . . . . . . . . . . . . . . . . . . . . . . . 91 7.2 The Hanbury Brown-Twiss experiment with photons . . . . . . . . . . . . . . . 92 7.3 Bunched and antibunched photon streams . . . . . . . . . . . . . . . . . . . . . 93 7.4 The g(2)(τ) function calculated analytically . . . . . . . . . . . . . . . . . . . . 95 7.5 The g(2)(τ) function by integration of the optical Bloch equations . . . . . . . . 96 7.6 The ultra-low scatter setup of ‘beam 1’ . . . . . . .-
 . . . . . . . . . . . . . . . . 98 7.7 Spectroscopy of a single ion using beam 1 . . . . . . . . . . . . . . . . . . . . . 98 7.8 Saturation power measurement using beam 1 . . . . . . . . . . . . . . . . . . . 99 7.9 The setup for correlation measurements . . . . . . . . . . . . . . . . . . . . . . 100 7.10 Correlation measurement with a high intensity . . . . . . . . . . . . . . . . . . . . 101 7.11 Correlation measurements at low intensity and detuning . . . . . . . . . . . . . . 103 7.12 The s-
etup for the pulsed correlation measurements . . . . . . . . . . . . . . . . 104 7.13 Transmission from the bottom to the top ﬁbre . . . . . . . . . . . . . . . . . . . 105 7.14 PMT sensitivity to 866 nm light with Semrock ﬁlters . . . . . . . . . . . . . . . 106 7.15 Laser pulse sequence for pulsed single photons . . . . . . . . . . . . . . . . . . 107 7.16 The pulsed single photon signal path . . . . . . . . . . . . . . . . . . . . . . . . 108 7.17 The timing of the shelving and re-cooling pulse-
s . . . . . . . . . . . . . . . . . . 109 7.18 Shelving efﬁciency measurements . . . . . . . . . . . . . . . . . . . . . . . . . 109 7.19 Pulsed correlation measurements with beam 1 . . . . . . . . . . . . . . . . . . . . 111 7.20 Single-photon pulse shape . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 112

8.1 The CO2 laser setup . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 115 8.2 The partially and fully etched ﬁbre sections . . . . . . . . . . . . . . . . . . . . 117 8.3 Poorly-cleaved ﬁbre facets . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 119 8.4 The laser-shutter pulse sequence . . . . . . . . . . . . . . . . . . . . . . . . . . 120 8.5 Shoting a ﬁbre at various rotations . . . . . . . . . . . . . . . . . . . . . . . . . . 121 8.6 The white-light interferomete-
r . . . . . . . . . . . . . . . . . . . . . . . . . . . 122 8.7 Interferometric images of a ﬁbre facet . . . . . . . . . . . . . . . . . . . . . . . 123 8.8 Reconstruction of the ﬁbre shape . . . . . . . . . . . . . . . . . . . . . . . . . . 126 8.9 Interferometric image of a ﬂat ﬁbre . . . . . . . . . . . . . . . . . . . . . . . . . 127 8.10 The distribution of radii of curvature . . . . . . . . . . . . . . . . . . . . . . . . 128 8.11 Drawings of the ﬁbre transport assembly . . . . . . . . . . .-
 . . . . . . . . . . . 129 8.12 Photographs of the ﬁbre transport assembly . . . . . . . . . . . . . . . . . . . . 129

xi

LIST OF FIGURES

8.13 Cavity waist—symmetric cavity . . . . . . . . . . . . . . . . . . . . . . . . . . 132 8.14 Cavity waist—half-symmetric cavities . . . . . . . . . . . . . . . . . . . . . . . 132 8.15 Clipping losses and ﬁnesse . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 133 8.16 Mode volume in symmetric and half-symmetric cavities . . . . . . . . . . . . . . 134 8.17 Projected g-parameter in symmetric and half-symmetric cavities . . . . . . . . . 135 8.18 Cavity decay rate . . . . . . . . . . . -
. . . . . . . . . . . . . . . . . . . . . . . 135 8.19 Some possible ﬁbre-cavity geometries . . . . . . . . . . . . . . . . . . . . . . . 136 8.20 The new bottom ﬂange assembly . . . . . . . . . . . . . . . . . . . . . . . . . . 137 8.21 The new chamber . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 138 8.22 Vibration-isolation blocks . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 139 8.23 The ‘cage’ . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . -
. . . . . . 140 8.24 The top and bottom electrode assemblies . . . . . . . . . . . . . . . . . . . . . . . 141 8.25 Cross-section through the cage . . . . . . . . . . . . . . . . . . . . . . . . . . . . 141 8.26 Fibre strain-relief devices . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 142 8.27 The new trap . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 142

Chapter 1
Introduction
“...in the now current interpretation, ample information is forthcoming about a host of experiments that nobody has ever been or ever will be able to perform.”
E. Schro¨dinger, British Journal of the Philosophy of Sciences, 3, 1952.
1.1 Motivation—Quantum Networking
In 1952, Erwin Schro¨dinger argued that we would never be able to perform experiments on single electrons or atoms[1]. Today, in the atomic physics laboratories of the world, these experiments have become routine. Although this is no longer news, the conﬁnement of single atomic particles is now a prerequisite in several important ﬁelds of research, and trapped single ions are considered promising contenders for the hardware of a future quantum computer. The work presented here is motivated by the -
problem of efﬁcient communication between these quantum computers by means of single photons. Although it is in spirit about communication, rather than computing, a brief introduction to the principles of quantum computing will be given in this section, to give an understanding of the problem this work is aimed at solving.
Why a quantum computer?
Moore’s Law1 states broadly that the number of transistors that can be placed on a chip will double approximately every 2 years. Although there is a whole ﬁeld of study around how long into the future Moore’s Law can be sustained, with opinions in recent years ranging from 10–20 years [2], to forever [3], we intuitively see that we will run into problems as transistors approach the size of the de Broglie wavelength of the electrons carrying charge through them—for example, tunnelling of electrons -
through potential barriers. If we want Moore’s Law to hold far into the future it seems clear that some new processor architecture is required (that said, Weber et al. at the University of New South Wales have just reported observation of constant resistivity in phosphorous wires one atom high and four atoms wide embedded in a silicon crystal, suggesting that Ohm’s law may hold down to even single atoms, given the right conditions [4]).
1After Gordon Moore, co-founder of Intel Corporation, 1965.
1

2

Introduction

Richard Feynman ﬁrst discussed the idea of simulating quantum systems with computers in 1981 [5], noting that it does not seem possible to simulate quantum systems with a classical computer. David Deutsch’s description of the ‘Universal Quantum Computer’ in 1985 [6] showed that a quantum computer might be able to efﬁciently solve problems which a classical computer could not. In 1986 in an effort to investigate whether, as we shrink transistors down to microscopic size, quantum mechanics places an-
y limit on the amount of energy required per calculation ‘step’ in a computation, Feynman introduced the idea of a ‘Quantum Mechanical Computer’ [7].

Classes of computing problems
We classify computing problems according to the complexity of the resources used in obtaining their solutions. For example, the P complexity class contains the set of problems solvable by a deterministic Turing machine (such as a classical computer) in polynomial time. This means that the time taken to solve the problem scales with the input as a polynomial. By contrast, the NP complexity class contains the set of problems solvable by a non-deterministic Turing machine in polynomial time. This cla-
ss of problem is extremely difﬁcult for a classical computer to solve. There is a speciﬁc class of problems known as BQP—bounded error quantum polynomial time— which is solvable by a quantum computer, with high probability (within some error bounds), in polynomial time, and this is suspected to include some, but not all, NP problems [8].
The classic example of an NP/BQP problem is the prime factorisation of large numbers. That is, factoring a number into its constituent primes. The number of operations required to do this increases exponentially with the number, N, and this is dramatically demonstrated in ﬁgure 1.1 2.
In 1994, Peter Shor proposed a quantum algorithm to solve this problem [9] in polynomial time, and in 2001 the group of Isaac Cheung at IBM’s Almaden Research Centre in California experimentally implemented Shor’s algorithm using 7 quantum bits (qubits) to factorise the number 15 [10].

2The spikes in the data are due to the varying demands of the computer’s CPU at the time the function was called. This graph was produced from a very simple prime-factoring algorithm—there are many more efﬁcient algorithms available.

3

Introduction

14

Data

12

Exponential fit

Function call time/s

10

8

6

4

2

0

0

2000

4000

6000

8000

10000

Number

Figure 1.1: An NP problem—the time taken to factorise the numbers from 1 to 10000 into their constituent primes, in terms of Matlab function call time, using a simple prime-factoring algorithm. As a point of interest, the total time taken in terms of function calls, that is, the area under this graph, was around 12 hours. We can calculate from the ﬁtted function that at this rate it would have taken 89 s to factorise 20,000, 527 s to factorise 30,000, 4 hours to factorise 50,000, 3 years to factor-
ise 100,000, and 6.6 ×1068 years to factorise 1,000,000. The RSA public-key encryption algorithm is based on exactly this problem.

1.1.1 Qubits
Bits in a classical computer are represented by transistors. They are either on (1), or off (0). The processor performs millions of logical operations on one or two bits at a time. The qubits in a quantum computer can in principle be any quantum system with two distinguishable and accessible states, corresponding to the on and off of the classical transistor. Let us use Dirac notation from here on and call these two states |a and |b . The crucial difference between quantum and classical bits is th-
at quantum bits can exist in a superposition of the |a and |b states:

|Ψ = ca|a + cb|b ,

(1.1)

where |ca|2 and |cb|2 represent the probability of observing state |a or |b when a measurement is performed. In such a superposition state then, the information carried by the qubit exists in the amplitudes ca and cb—one qubit can carry two pieces of information.
If we add one more qubit to our system, then the system can exist in a superposition of four states:

|Ψ = caa|aa + cab|ab + cba|ba + cbb|bb .

(1.2)

We can see that N qubits are capable of storing 2N pieces of information in the amplitudes of their states, and any operation performed on the qubit is simultaneously performed on all 2N amplitudes.
There have been many proposals for qubit candidates, including (this is by no means an

4 exhaustive list):

Introduction

• Trapped ions in an ion trap [11], where the qubits are two internal energy levels of ions. • NMR, where nuclear spin holds the information [12]. • Neutral atoms, for example [13]. • The energy states of quantum dots [14]. • The spin states of donor impurities in, for example Silicon [15]. • Nitrogen-vacancies in diamond and similar defects in other materials, such as silicon carbide
[16].

1.1.2 Why a Trapped Ion Quantum Computer?
The DiVincenzo criteria
In 1998, in a work inspired by Cirac and Zoller’s 1994 proposal for a quantum computer using cold ions in a trap [11] David DiVincenzo, at IBM’s Research Division, set out ﬁve criteria which he considered essential to a physical implementation of a quantum computer [17]. They are:
1. The quantum states of the qubits must be precisely enumerated, that is, we must know the state well, and know how to conﬁne the qubit to that state. Also, the system must be scalable—we must be able to add qubits to the system3.
2. State preparation: we must be able to set the system into some simple state, for example |a .
3. Low decoherence: the environment should not perturb the quantum interference (coherence) of the system. DiVincenzo quotes a decoherence time of 1×106 times longer than the gate operation time.
4. Controlled unitary transformations: it must be possible to perform gate operations on the system.
5. Measurement: it must be possible to perform a measurement on individual qubits.
Vincenzo noted at the time that the Cirac-Zoller proposal for trapped ions appeared to satisfy all ﬁve of these criteria, for example:
1. Ions can be routinely cooled to their ground state using laser cooling.
2. The internal states of trapped ions are very well known and understood. We could imagine scaling such a device by simply adding more ions to the trap (although in practice this is not the case, because the ions are all coupled through their motion. Also, as the ion string grows it becomes harder to laser-cool the whole string to the ground state).
3Factorising a 200-digit number requires about 3,500 qubits [18] and in a theoretical work Hughes et al. found that an ion trap quantum computer would be decoherence-limited at around ten or so ions [19].

5

Introduction

3. Long internal state coherence times.

4. Internal states are easily manipulated and systems for quantum logic operations are available.

5. Measurement can be carried out with high efﬁciency.

1.1.3 Quantum Networking
There are two current approaches to the problem of scaling mentioned in section 1.1.2. One solution is to build arrays of traps [20], in which ions are shuttled between different trapping regions, with each region only containing a small amount of ions. The group of David Wineland at NIST recently implemented such an array, trapping two 9Be+ and two 24Mg+ ions in a segmented trap [21], and ions have been successfully shuttled around 90◦ corners in a ‘T-Junction’ ion trap array [22]. However, our l-
ong-term interest lies more in an alternative idea; that of providing a communications channel between many remote ion trap devices. This has applications beyond the idea of scaling an ion trap quantum computer.
In 2000, in the prettily titled and very readable ‘Desiderata for Quantum Communication’ [23] DiVincenzo added the following two criteria to the list in section 1.1.2:
6. The ability to interconvert stationary and ﬂying qubits.4
7. The ability faithfully to transmit ﬂying qubits between speciﬁed locations.
The work presented here is based around a scheme designed to fulﬁll these ﬁnal two criteria. The ﬂying qubit in our case is a photon and the stationary qubit is a trapped ion.

1.1.3.1 Single-photon sources
If we restrict ourselves to the paradigm of the ﬂying-qubit-as-photon, produced by a single quantum emitter (and the justiﬁcation for such a restriction is that we require only one photon to be emitted for each ‘request’, so it is reasonable to use a single quantum emitter to produce it), then a prerequisite is the development of a single-photon source which fulﬁlls the ﬁnal two criteria.
The generation of single-photons has been an active research area in recent years and several different quantum emmitters have been tried. A review of many such schemes is given in [24]. The interest in these schemes lies in their utility as enabling technologies for several applications, aside from scaling quantum computers, some with extensive commercial relevance, such as:
• Key distribution/cryptography: the ability to transmit data between two points without any possibility of it being intercepted [25].5
4The phrase ‘ﬂying qubit’ has become standard terminology in the ﬁeld. In most schemes the qubit is encoded in a photon.
5Quantum cryptopgraphy is probably the most immediately obvious beneﬁciary of quantum networking technology developments. The link to quantum information transmission being that quantum cryptography schemes depend upon the reliable generation and transmission of a ﬂying qubit (usually a photon—see, for example the BB84 protocol [26]). Ones and zeroes can be encoded in the polarisation of the photon in some basis; for example the vertical and horizontal polarisation for zero and one respectively. T-
he basis can be chosen at random, for example a ±45◦ linear polarisation can encode a one/zero. In this way a ‘key’ can be transmitted between two parties and used to decrypt a subsequent transmission. Without knowing the basis, it would be impossible for an eavesdropper to know the key. For a recent review of this ﬁeld, see [27].

6

Introduction

• Authentication: the ability to transmit data between two points in a way that ensures it was not corrupted in passage [25, 27].

• A ‘quantum repeater’: to transfer the state of one ion in one trap to a remote ion in a distant trap—effectively to lengthen the distance over which quantum information can be transmitted [28].

• The distribution of ‘quantum software’ [29].

• An absolute standard of optical brightness—if the rate of single photon production, r, and their energy, is known, then the optical power is h¯ ωr.

• ‘Blind’ quantum computing. In a paper published at the time of writing, Barz et al. [30] report a demonstration of a kind of quantum cloud computing, whereby a user only has to prepare photonic qubits and transmit them to a remote quantum computer where computations are performed.

We now move on to describe in detail the background theory necessary to understand the components of our implementation, that is:

• Radiofrequency ion traps

• Laser cooling

• Cavity Quantum Electrodynamics

1.1.4 This Thesis
In this thesis I will describe the realisation of a single-photon source based on a single calcium ion in a novel miniature ion trap. We take as our model the CQED-based scheme of Cirac and Zoller [31] for a quantum network composed of individual ion trap ‘nodes’ connected by optical ﬁbres. The ultimate goal of our work is to produce a single-photon source suitable for use in such a scheme, that is, a single ion strongly coupled to a single cavity mode, as described in chapter 4. The work presente-
d here consists of ﬁrstly the design and implementation of a miniature ion trap, the detection of an ion’s ﬂuorescence through optical ﬁbres placed close to the ion, pulsed and continuous non-cavity single-photon generation, and ﬁnally the design and fabrication of a miniature optical cavity by laser-machining and coating the end facets of the ﬁbres.
After covering the basic theory behind the trapping and laser-cooling of charged particles in chapters 2 and 3, and the principles of cavity-QED in chapter 4, I will describe the technical implementation of the experiment including materials and devices used (chapter 5). Chapter 6 presents a full characterisation of the ion trap, including comparison with simulations. Chapter 7 presents the main results of the experiment so far, that is, production and detection of single photons.
In Chapter 8 I describe the techniques and results of work done to laser-machine concave surfaces onto the ∼200 µm diameter end facets of optical ﬁbres using a high-power CO2 laser. Some predicted CQED parameters of the ﬁbre cavity are calculated.
Chapter 9 presents a conclusion and the outlook for the experiment, including some details of the design and build of an entirely new ion trap to accommodate the new ﬁbre cavity.

Chapter 2
Radiofrequency Ion Traps

“I think it is a sad situation in all our chemistry that we are unable to suspend the constituents of matter free.”
G.C. Lichtenberg, quoted in Wolfgang Paul’s Nobel Lecture, December 8, 1989.

In 1989, Wolfgang Paul, Hans G. Dehmelt and Norman F. Ramsey were awarded the Nobel Prize in Physics ‘for contributions of importance for the development of atomic precision spectroscopy.’ Paul and Dehmelt’s contribution was the ion trap, that is, the ‘suspension’ of individual particles of matter for long periods of time, allowing access to unprecedented regimes of precision1 in atomic spectroscopy measurements [32]. The ﬁrst single ion was trapped in 1980 [33]. Ion traps are now commonly used in-
 many ﬁelds, most commercially mass spectrometry—for a review of the history of this application of ion traps see [34]. Ion traps also represent the world’s most precise frequency (and therefore, time) standards. In 2010, NIST2 reported the worlds most precise clock, based on a single trapped aluminium ion [35, 36]. The most common types of ion trap today are the Penning trap [37], and the radiofrequency (rf), or Paul, trap. In this thesis we will concern ourselves only with rf ion traps, and this-
 section aims to describe the essential theory behind their operation, with any necessary modiﬁcations relevant to our particular designs.

2.1 Earnshaw’s theorem

To perfectly trap a single ion in space with an electric ﬁeld alone we might reasonably think that the ﬁeld lines must all point inwards, that is towards the equilibrium position of the particle. But there is a problem with this.
Consider the divergence of a vector ﬁeld:

∇ · F ≡ lim S F · da . V →0 V

(2.1)

1Heisenberg’s energy/time uncertainty relation tells us that over long periods of time we can make increasingly
precise measurements of energy. 2America’s National Institute for Standards and Technology.

7

8

Radiofrequency Ion Traps

That is, the divergence of the vector force ﬁeld surrounding a point is the ﬂux of the ﬁeld through a closed surface surrounding a volume around that point as we shrink that volume to zero. In other words, it is the rate of creation or removal of electric ﬂux at that point. If we want our electric ﬁeld lines to terminate at the point where the particle is at equilibrium, such that if the particles moves away, it is pulled back, then that point must be a sink for the ﬁeld—the divergence must be neg-
ative. Since we know from Maxwell’s equations that the divergence of an electric ﬁeld is zero in free space, and the curl of an electric ﬁeld is zero, then we see that this is impossible.3 It turns out in fact that there is no way to trap a charged particle with electrostatic forces alone, and this is known as Earnshaw’s theorem. We can, however, trap a charged particle with electrodynamic forces—an oscillating electric ﬁeld, described by Wuerker et al. in 1958 as ‘a closed form of W. Paul’s and M-
. Raether’s electric mass ﬁlter.’ [39]

2.2 The quadrupole potential

If we want to conﬁne a charged particle at the bottom of a potential well, from which it does not have sufﬁcient energy to escape, then a simple solution would be to apply a potential in three dimensions which has quadratic dependence on the particle’s coordinates x, y, and z :

φ = φ0(αx2 + β y2 + γz2),

(2.2)

where φ0 is the potential at the origin. For this potential to obey Laplace’s equation, we require

α + β + γ = 0.

(2.3)

What we see from this is that while there could be a positive, conﬁning potential in two of the three directions, there must then be a negative ‘anti-trapping’ potential in the third—we must always have a ‘saddle’ potential. This is illustrated in ﬁgure 2.3.
In a three-dimensional ﬁeld, α = 1, β = 1 and γ = −2 satisfy this constraint and the potential can be described by [41]

φ = φ0

r2 − 2z2 2r02

,

(2.4)

where r represents the vector x2 + y2 and r0 is a factor depending on the geometry of the trap

(indicated on ﬁgure 2.1. Figure 2.2(a) shows a cross-section of the equipotentials of such a

quadrupole potential and the ideal electrode structure which achieves this along all directions is

shown in ﬁgure 2.1. This consiststs of two hyperboloids of revolution about the z-axis (the ‘endcap’ electrodes) and a ring electrode with a hyperbolic cross-section, with the condition r02 = 2z20. This
condition arises from the boundary conditions at the electrodes. We see that at z0 the potential is φ0(2z20) and at r0 it is φo(−r02). Paul traps are often operated using a voltage of opposite sign on the endcaps and ring; in other words φ (r0) = −φ (z0), and so we have r02 = 2z20. This condition is
not necessary for stable trapping, and we do not adhere to it strictly in this work—see chapter 5.

3We often invoke Laplace’s equation to show this: ∇ · E = ∇ · (−∇φ ) = −∇2φ . See, for example, [38].

9 Endcap

Radiofrequency Ion Traps

Ring

Ring

Endcap

Figure 2.1: An ideal Paul trap consisting of three electrodes. The top and bottom ‘endcap’ electrodes

are inﬁnite hyperbolas of revolution about the z-axis, shown in cross section. The East/West

electrodes are hyperbolic cross-sections through a hypothetically inﬁnite ring electrode. This

geometry produces in principle a perfectly quadratic potential in all directions. A typical rf

voltage arrangement is shown, whereby an oscillating voltage is applied to the endcaps while the

ring

is

held

at

rf

ground.

The

hyperbolic

cross-sections

are

described

by

r2 r02

−

z2 b21

=

1

for

the

ring

and

−

r2 z20

+

z2 b22

=

1

for

the

endcaps.

In

this

plot

r02

=

2z20,

as

described

in

the

text,

and

also

the

two

hyperbolas

have

the

same

asymptote,

determined

by

the

b-parameters,

such

that

b22

=

r02 z20 b21

.

See

[40]. Dimensions are arbitrary (although the r0 used is the real r0 in our trap).

However, for a general analysis of ion trapping theory we will use this approximation. Over the years, Paul traps have moved further and further away from the ideal hyperbolic
electrode structure. Some alternative trap structures are mentioned in chapter 5, and the geometry of a trap can be varied greatly depending on the intended purpose. For example, in our work we are concerned with trapping single, laser-cooled ions. For this purpose we only require that the quadrupole nature of the potential be maintained close to the trap centre, as we know that using laser-cooling we can localise our ion there. Hyperbolic electrodes, therefore, are not necessary, and we can desig-
n our electrode geometry in a way that gives, for example, better laser access, or that can accommodate additional experimental apparatus. The type of trap used in our experiment consists of two cylindrical electrodes, and two concentric ‘outer’ electrodes, recessed some distance from the inner electrodes. This is known as an endcap trap, and is described in detail in chapter 5. The approximately quadrupole ﬁeld generated by applying a voltage to one pair of electrodes (it doesn’t matter which pai-
r) can be determined by ﬁnite element analysis and the equipotentials

10

Radiofrequency Ion Traps

of the ﬁeld are shown for an arbitrary voltage in cross-section in ﬁgure 2.2(b). We can see in this ﬁgure the potential starting to deviate from ideal quadrupole behaviour as we move far from the centre. The potential distribution in the endcap trap is discussed in far more detail in chapter 6.
In our trap an approximately identical rf voltage of the form

φ0 = Udc +V0 cos Ωrft

(2.5)

is applied to the top and bottom endcap electrodes, and the ‘ring’ electrode is grounded. Udc is the dc offset of the rf voltage. We have not used a dc offset on our rf electrodes, but we leave the parameter in for the purpose of this general analysis. V0 is the 0–peak amplitude of the rf voltage and Ωrf is its angular frequency.

Axial Coordinate/mm

0.3
0.2
0.1
0
−0.1
−0.2
−0.3 −0.3 −0.2 −0.1 0 0.1 0.2 0.3 Radial Coordinate/mm
(a) Equipotentials in an ideal Paul trap

(b) Equipotentials in an endcap trap

Figure 2.2: Figure (a) shows the ideal quadrupole potential in the Paul trap of ﬁgure 2.1, determined analytically, while ﬁgure (b) shows, for comparison, the approximate quadrupole potential near the centre of the endcap trap used in these experiments, calculated by ﬁnite element analysis. We see that, provided we conﬁne our ion to the centre of the trap, we can assume a quadrupole potential. Note that the hyperbolic electrodes in ﬁgure (a) are not visible because the z0 parameter of the ideal ca-
se differs from our z0.

11

Radiofrequency Ion Traps

50

100

Potential/V Potential/V

0

50

−50

0

−100

0.3

Axial

0.2 Coordina0t.e1/mm0−0.1−0.2−0.3

0.3

0.2

−0.3

−0.2

0 −0.1
Radial

0C.o1ordinate/mm

−50

0.3

Axial

0.2 Coordin0at.e1/mm0−0.1−0.2−0.3

0.3

0.2

−0.3

−0.2

0 −0.1
Radial

C0.o1ordinate/mm

(a) At one point in the phase of a rf cycle.

(b) At a phase point π/2 advanced.

Figure 2.3: The ideal ‘saddle’ potential surface at two points in a half-cycle of the rf showing how a charged particle is (a) trapped in the radial direction, and (b) trapped in the axial direction.

2.3 Equations of motion of an ion in a quadrupole ﬁeld
The electric ﬁeld is deﬁned by

E = −∇φ .

(2.6)

So we can construct an equation of motion for an ion in the radial plane, that is, the r-direction of equation 2.4, and using the deﬁnition of the potential given in equation 2.5:

F = ma

⇒

−e

∂ ∂r

φr

=

mr¨

⇒

r¨

+

e m

∂ ∂r

φr

=

0

⇒

r¨

+

e mr02

(Udc

+

V0

cos

Ωt

)

r

=

0.

And similarly for the axial plane:

z¨

−

2e mr02

(Udc

+

V0

cos

Ωt

)

z

=

0.

If we make the following substitutions in these equations:

az

=

−2ar

=

8eUdc mr02Ω2

,

−

qz

=

2qr

=

4eV0 mr02Ω2

,

(2.7) (2.8) (2.9) (2.10)

12

Radiofrequency Ion Traps

ζ

=

Ωt 2

,

then we can recast the equations of motion into Mathieu equations:

(2.11)

d2r dζ 2

+

(ar

−

2q

cos

2ζ

)

r

=

0,

(2.12)

d2z dζ 2

+

(az

−

2qz

cos

2ζ

)

z

=

0.

Stable solutions, that is, solutions for which r, z is ﬁnite as ζ → ∞4, are given by [41]

(2.13)

n=+∞

n=+∞

r, z(ζ ) = A ∑ C2n cos(2n ± β )ζ + B ∑ C2n sin(2n ± β )ζ ,

n=−∞

n=−∞

(2.14)

where the C2n represents an amplitude of motion and (2n ± β ζ ) represents a frequency. Equating

this latter with ωt and substituting equation 2.11, we have

ωz

=

(2n

± βz)Ω , 2

(2.15)

and

ωr

=

(2n

± βr)Ω 2

(2.16)

where Ω is as usual the angular frequency of the rf drive. For the fundamental frequency of oscillation, n = 0 and ωr,z = β Ω/2. Higher harmonics are clearly allowed by the equations, and

indeed these sometimes show up in measurements of a trapped ion’s oscillatory spectrum. We can see that at β = 0, the ﬁrst non-zero frequency term is Ω, and for β = 1 the ﬁrst term is

Ω/2. We can now deﬁne a stability region in a and q space. For each value of β in the stability

region, then, there is an associated fundamental frequency of oscillation.

This frequency is termed the secular frequency. The secular frequency is in contrast to a

second, high-frequency oscillation driven directly by, and having a similar frequency to, the trap rf.

This driven motion is termed the micromotion. Solutions for β = 0 and β = 1 in terms of the a and q parameters are [39, 42]

a = − 1 q2 + 1 q4 − 29 q6 + 68687 q8, 2 128 2304 18 874 368

(2.17)

and

a = 1 − q − 1 q2 + 1 q3 − 1 q4 − 11 q5... 8 64 1536 35 864

(2.18)

Plotting a against q for the axial and radial directions gives us ﬁgure 2.4. The shaded area

represents stable trapping values of a and a for an ideal Paul trap.

4Stable here means that the amplitude of the motion of the ion is restricted for all times.

13

Radiofrequency Ion Traps

0.2

0

−0.2

r

a = −2a

−0.4

z

−0.6

−0.8

−1

0

0.2 0.4 0.6 0.8

1

1.2 1.4

qqzz==−22qqrr

Figure 2.4: The ﬁrst stable trapping region for an axially symmetric ideal Paul trap. This ﬁgure is a plot of equations 2.17 and 2.18. That is, az(qz) for βz = 0, 1, then ar(qr) = −2az(qz/2) for βr = 0, 1,
where equations 2.12 and 2.13 provide the relation between az, ar, qz, and qr.

2.4 The Pseudopotential approximation

In this section we show how switching the potential on the electrodes of an ideal Paul trap generates an effective potential well in both the radial and axial directions at the same time. This is known as the pseudopotential.
Consider the equation of motion of the ion in the z-direction given by equation 2.13. The amplitude of the motion at a given time can written as a sum of the secular and micromotion amplitudes, Z and δ :

z = Z +δ,

(2.19)

Now we make two assumptions; ﬁrstly that the micromotion amplitude δ is much smaller than the secular amplitude Z, and secondly that the micromotion amplitude varies much faster than the secular. With these assumptions, equation 2.13 can clearly be written as

d2δ dζ 2

+

(az

−

2qz

cos

2ζ

)

Z

=

0.

(2.20)

We further assume that az qz and that the secular amplitude is constant over one cycle of the rf oscillation. Now we can integrate equation 2.20 to give

14

Radiofrequency Ion Traps

which we can rewrite as

δ = − qzZ cos 2ζ , 2

(2.21)

z

=

Z

−

qzZ 2

cos

2ζ

.

Substituting this into equation 2.13 gives

(2.22)

d2z dζ 2

=

−azZ

+

azqzZ 2

cos 2ζ

+ 2qzZ cos 2ζ

− q2z Z

cos 2ζ .

(2.23)

We now consider the time average of the two motions over one cycle of the rf. Clearly the

micromotion averages to zero. The secular motion averages to

1 π

π

d2z dζ 2

dζ

.

0

Now substituting d2z/dζ 2 from equation 2.23 we have

and using ζ = Ωt/2 we have

d2Z dζ 2

=

−(az

+

q2z )Z, 2

d2Z dt 2

=

−

az

+

q2z 2

Ω2 Z. 4

We can write this in another form

(2.24) (2.25) (2.26)

d2Z dt 2

=

−ωz2Z,

(2.27)

which describes simple harmonic motion at angular frequency ω. This enables us to identify ωz as

ωz = −

az

+

qz 2

1 2

Ω.

2

If we recall that ω0 = β Ω/2, we can write β as

(2.28)

β2 =

az

+

q2z 2

.

(2.29)

In an ideal trap, of the form r02 = 2z20 the radial secular frequency is then given by ωz = 2ωr. Substituting qz in equation 2.28 and assuming that az = 0, that is, no DC bias, we have

ωz

=

√ 2eV . 2mr02Ω

(2.30)

2.5 The Trap Depth

We term the depth of the pseudopotential well the trap depth. The radial or axial depth of the well here means the depth at the centre of the trap relative to that at the top of the well.

15

Radiofrequency Ion Traps

Recall the deﬁnition of qz from equation 2.10. Letting the DC bias be zero, we have from equation 2.26:

If we now write this as

d2Z dt 2

=

− q2z Ω2 Z 8

=

−

2e2V 2 m2r04Ω2

Z.

(2.31) (2.32)

d2Z m dt2

=

−e∇Φ,

(2.33)

we can interpret the left side as the force produced by an electric ﬁeld resulting from a pseudo

potential Φ. Let us denote the depth of this potential between z = 0 and z = z0 as Φz, so that

∇Φ

=

dΦz dZ

.

Then

we

have

Integrating this we have

dΦz dZ

=

2eV 2Z mr04Ω2

=

∇Φ.

(2.34)

z=z0

Dz =

dΦz dZ dZ

z=0

=

eV 2z20 mr04Ω2

.

(2.35) (2.36)

2.6 Micromotion
At the trap centre, the electric ﬁeld resulting from the rf drive is exactly zero. Equation 2.15 tells us that the ion oscillates with some amplitude around the trap centre, and so experiences a force resulting from the trap rf drive. This faster oscillation at the trap frequency is termed intrinsic micromotion, since it is characteristic of the system, and can be reduced by restricting the ion’s secular excursions from the trap centre (by laser cooling—see chapter 3). There is another form of unw-
elcome micromotion, resulting from stray charges which can build up on dielectrics inside the trap structure. These can push the ion off the trap centre and so generate what is termed excess micromotion. We can reduce this by keeping dielectric surfaces well away from the ion, and again by pushing/pulling the ion to the trap centre with dc voltages. The methods we use for compensating for this excess micromotion will be described later.
We can describe the total amplitude of the ion’s motion in terms of the secular motion and micromotion. Recall equation 2.21 where we describe the micromotion amplitude, given certain assumptions, and equation 2.27 which shows that the secular motion can be written in simple harmonic terms, Z = A sin(ωt), with A the amplitude of the motion. We can then write the total amplitude z as

16

Radiofrequency Ion Traps

z = Z +δ

=

A

sin(ωzt

)

−

qzZ 2

cos

Ωt

= A sin(ωzt)

1

−

qz 2

cos

Ωt

.

(2.37) (2.38)

with A the amplitude of the secular motion. A plot of this motion for some typical parameters in our experiment is shown in ﬁgure 2.5.

1.5

Total amplitude/arbitrary units

1

0.5

0

−0.5

−1

−1.5

0

0.5

1

1.5

2

Time/µs

Figure 2.5: The fast micromotion oscillation superimposed on the slower secular frequency, as described by equation 2.37. Some parameters from our experiment were used: Ω = 2π×15 MHz, ωr = 2π×2 MHz, and qz was chosen to be 0.4. The amplitude is arbitrary. A = 1 in this case. Of note
is the fact that the micromotion amplitude increases as the ion moves away from the trap centre.

Chapter 3
Laser cooling
In 1975, Ha¨nsch and Schawlow at Stanford University wrote: ‘We wish to point out that if the laser radiation is essentially isotropic, but conﬁned to frequencies on the lower half of the Dopplerbroadened absorption line of an atomic vapor, the gas can be cooled.’ [43]. With this simple statement the ﬁeld of laser cooling was launched. Wineland and Dehmelt at the University of Washington independently proposed a scheme for laser cooling in the same year [44].
Ions in a trap must have less kinetic energy than the energy of the potential barrier formed by the pseudoptential, and as we shall see in chapter 8 they must also be localised as much as possible to prevent variations in the coupling strength between the ion and optical cavity. Experimental laser cooling of trapped ions has been around since 1978, when Neuhauser et al. cooled a cloud of Barium ions in a miniature Paul trap [45]. The theory and practice of laser cooling for both neutral atoms and -
trapped ions has been extensively covered elsewhere—for a textbook see, for example [46], for a theoretical treatment of the laser cooling of a single ion see Cirac et al. [47] or for an extensive review of the ﬁeld in 2003 with particular emphasis on trapped ions, see Eschner et al. [48]. In this section, therefore, we will restrict the discussion to the principles of the speciﬁc laser cooling technique we use in this work, following the straightforward approach given by Lett et al. in [49].
3.1 The quantum hardware—Calcium
3.1.1 The 40Ca+ ion
Singly-ionised calcium holds great promise as the hardware of quantum computing—its lowest ﬁve energy levels are already well-understood and accessible via commercially available or easily-built lasers and it has a forbidden transition to the ground state from the metastable D3/2 state, giving long optical qubit lifetimes.
The transitions of interest for laser cooling are shown in ﬁgure 3.1. The main cooling transition is P1/2 ↔ S1/2, with P1/2 ↔ D3/2, P3/2 ↔ D3/2, and P3/2 ↔ D5/2 the so-called ‘repumper’ transitions, so named because when, as dictated by the branching ratio, an ion is ‘shelved’ in the metastable D3/2 or D5/2 states, it must be ‘repumped’ out of it to either the P3/2 or P1/2, from where it decays quickly to the ground state.
In addition to the transitions shown, there are several other transitions available within this
17

18

4p

P2 3/2

Laser cooling

854 nm 850 nm

4p

P2 1/2

3d

D 2 5/2

866 nm

393 nm 397 nm

3d

D 2 3/2

4s

S2 1/2

Figure 3.1: Partial energy level diagram of the 40Ca+ ion showing the ﬁrst ﬁve lowest-lying levels. The transitions we address in our experiments are marked, along with their wavelengths. Not to scale.

Transition
P1/2 → S1/2 P1/2 → D3/2 P3/2 → S1/2 P3/2 → D3/2 P3/2 → D5/2
S1/2 → D3/2 S1/2 → D5/2

Wavelength

Rate/2π

(air)/nm

Electric Dipole

396.847

20.7 MHz

866.214

1.7 MHz

393.366

21.5 MHz

849.802

0.2 MHz

854.209

1.6 MHz

Electric Quadrupole

732.389

0.14 Hz

729.147

0.14 Hz

Lifetime
7.7(2) ns 94.3 ns 7.4(3) ns 901 ns 101 ns
1.16 s 1.14 s

Table 3.1: Electric dipole and quadrupole transition wavelengths, decay rates and natural lifetimes of the 40Ca+ ion [50–52]. Uncertainties and accuracies differ because the various results originate from different papers. Details can be found in [50].

energy-level structure. A summary of all the transitions, their wavelengths and rates is shown below in table 3.1.
3.2 Doppler Cooling
In principle, Doppler laser cooling of a trapped ion is very straightforward—we tune a laser with wavevector k to a wavelength slightly longer (‘redder’) than that of an atomic transition, ωab, so that in the rest frame of an ion travelling towards the laser with velocity v, the laser frequency is Doppler-shifted by a factor of 1 ± v/c. The ion, therefore, sees ‘bluer’ light, that is, closer to

19

Laser cooling

its resonance, and the probability of it absorbing a photon is higher. On absorbing a photon, the atom can re-emit via stimulated or spontaneous emission. In the case of stimulated emission, the photon is emitted back into the laser mode and so the momentum ‘kick’ received by the atom, ρ = h¯ k is cancelled out. Whilst the atom always absorbs a photon from the direction of the laser, its spontaneous emission occurs isotropically. The net momentum transfer to and from the ion by spontaneous emissio-
n therefore, is zero; however, there is a net transfer of momentum from the laser to the ion, since this always occurs in the direction of k. The ion loses kinetic energy as a result.
For the work described in this thesis, laser cooling is performed on the P1/2 ↔S1/2 transition in 40Ca+ (see ﬁgure 3.1 on page 18).
In order to understand the cooling mechanism we must ﬁrst describe the laser-atom interaction. We start with a brief introduction to the density matrix formalism of describing quantum states, and then use it to obtain expressions for the force experienced by an atom in a laser ﬁeld.

3.2.1 The Density Matrix Formalism
We consider the example of a two-level atom with a lower and upper energy states |a and |b respectively. In this case the orthonormal basis states spanning the Hilbert space are simply the states |a and |b . Then the state vector of the system can be written as

|ψ = Ca|a +Cb|b ,

(3.1)

with |Ca,b|2 the probabilities of ﬁnding the system is state |a, b . An alternative and more versatile way to describe quantum states is by the density operator.
For a pure state this is simply the projector operator, for example

ρˆ = |ψ ψ|

(3.2)

and the matrix elements of this operator give us the density matrix. For the two-level system of equation 3.1 we have matrix elements

|C0|2 C0C1∗ C1C0∗ |C1|2

.

(3.3)

The diagonal terms are the probabilities of the atom being in state |a or |b , while the offdiagonal terms represent coherent superpositions of the states. We can see that the trace Trρˆ = 1
for a pure state. The expectation value of the observable Oˆ is given by

Oˆ = Tr(ρˆ Oˆ),

(3.4)

and the time evolution by

d dt

ρ

=

1 ih¯

[Hˆ

,

ρˆ

].

(3.5)

The density matrix has the advantage that it can also be used to describe a statistical mixture of

20

Laser cooling

states. In this case the density operator is not simply the projector operator, rather it is

ρˆ = ∑ pn|ψn ψn|,

(3.6)

n

that is, the sum of each state’s density operator, weighted with its individual probability in the

ensemble. The time evolution of the density operator for a mixed state is also given by equation

3.5, and its trace is also equal to 1.

The advantages of describing a state using the density matrix over the wavefunction or state

vector are:

• It eliminates the arbitrary global phase factor that exists in a state vector description (the states eiθ |ψ and |ψ are the same state. In the density matrix description this phase factor disappears).

• It can describe mixed, as well as pure, states.

• It gives a somewhat intuitive view of the states of the system. For example, in a two-level system the density matrix elements (1, 1) and (2, 2) represent the states |a and |b .

3.2.2 The Optical Bloch Equations
We now consider how we may use the density matrix of a two-level system to make some speciﬁc calculations.
First, we consider the combined Hamiltonians of an atom and its interaction with a light ﬁeld:

Hˆ = Hˆ0 + HˆI,

(3.7)

where the free atom Hamiltonian is given by

Hˆ0 = h¯ ωa|a a| + h¯ ωb|b b|,

(3.8)

h¯ ωa,b being the respective energies of the states. The dipole interaction Hamiltonian is given by

HˆI = −µ · Eˆ = − (|a b| + |b a|) µabE,

(3.9) (3.10)

where µab is the dipole matrix element of the transition, given by µab = exab, if we assume the light is polarised in the x-direction.
The electric ﬁeld of the light is given by

E

=

E0

cos ωt

=

1 2 E0

e−iωt + eiωt

,

and the Rabi frequency of the light driving the a → b transition is deﬁned as

(3.11)

Ω

=

µabE0 h¯

.

(3.12)

21

Laser cooling

We normally write the atomic raising and lowering operators |a b| and |b a| as σˆ+ and σˆ− respectively, and so in the Heisenberg picture we can write the interaction Hamiltonian as

HˆI

=

− h¯ Ω 2

σˆ+eiωabt + σˆ−e−iωabt

Making the rotating wave approximation, we ﬁnd

e−iωt + eiωt .

(3.13)

where ∆ = ω − ωab.

HˆI

=

−

h¯ Ω 2

σˆ+e−i∆t + σˆ−ei∆t

.

(3.14)

We now make use of the time evolution of the density operator given in equation 3.5, adding a

term to represent spontaneous decay [53]:

d dt

ρˆ

=

1 ih¯

[Hˆ ,

ρˆ ]

−

Γ 2

[σˆ+σˆ−ρˆ

−

2σˆ−ρˆ σˆ+

+ ρσˆ+σˆ−] ,

(3.15)

with Γ the spontaneous decay rate of the transition.

An equation of motion of a density matrix is known as a master equation, and in this form is

known as the Lindblad form. It can equivalently be written as [54]

d dt

ρ

=

−

i h¯

[Hˆ ,

ρˆ

]

+

Γ (2|a 2

b|ρˆ |b

a| − |b

|bρˆ − ρˆ |b

b).

In general, a master equation can be written as

(3.16)

dρˆ dt

= L ρˆ ,

(3.17)

with L the Liouvillian superoperator, which as we saw above can contain both pre-and post-

multiplications using several other operators.

For a two-level atom, the time evolution of the elements of the density matrix are described by

the optical Bloch equations [46]:

d dt

ρˆ00

=

−Γρˆ00

+

iΩ 2

(ρ˜10

−

ρ˜01)

,

d dt

ρˆ11

=

Γρˆ00

−

iΩ 2

(ρ˜10

−

ρ˜01)

,

d dt

ρ˜01

=

i∆ − Γ 2

ρ˜01

+

iΩ 2

(ρˆ11

−

ρˆ00

)

,

(3.18) (3.19) (3.20)

where we have made the susbstitution ρ˜01 = eiωtρˆ01, and ∆ = ω − ωab, as before. The steady-state solution to the optical Bloch equation for the excited state popuation is given
by [46]

ρˆbb

=

1

+

s0

s0/2 + (2∆/Γ)2

,

(3.21)

with s0 = 2Ω2/Γ2 the on-resonance saturation parameter.

The rate of transfer of momentum from the laser to the atom is determined by the steady state

solution 3.21 and the rate of spontaneous decay Γ:

22

Laser cooling

γ = Γρbb.

(3.22)

The rate of momentum transfer is the force experienced by the atom for one photon, multiplied by the scattering rate:

dρ dt

= h¯ k · γ,

with the momentum ρ not to be confused with the density matrix ρˆ .

So, using equation 3.21, we can now write the force on the atom as

F

=

h¯ k

·

1

+

s0

s0/2 + (2∆/Γ)2

.

In the rest frame of the atom, the laser frequency appears Doppler-shifted to ωD

ωD =

v 1±
c

= ω ± kv,

and the detuning ∆D as seen by the atom becomes

(3.23) (3.24) (3.25)

∆D = ∆ ± kv. Using this in equation 3.24, we have

(3.26)

F(v) = h¯ k ·

s0Γ/2

1 + s0 +

2(∆±kv Γ

2

(3.27)

We can make a Taylor expansion of this force, around v = 0, and write the force as F = F0 + β v, so

F0

=

1

+

h¯ ks0Γ/2 s0 + (2∆/Γ)2

,

(3.28)

and

β

=

− 4h¯ |k|∆ Γ

·

(1

+

s0

s0k + (2∆/Γ)2)2

.

(3.29)

We conclude from this that for small atomic velocities, the laser force is composed of a constant

component, and a component that depends on the atomic velocity. The constant force is known as the radiation pressure force, and the velocity-dependent component is a viscous damping force. For

cooling of neutral atoms, the radiation pressure force can be balanced out by a counter-propagating

laser.

By balancing the cooling rate with the heating rate produced by the recoil of the atom from

each emission event, it can be shown that the minimum temperature it is possible to reach is [49]

Tmin

=

h¯ Γ , 2kB

(3.30)

and this occurs at a detuning of ∆ = −Γ/2. In calcium this corresponds to around 0.5 mK.

Since

23

Laser cooling

we can write the minimum velocity as

1 mv2 2

=

1 2

kBT,

(3.31)

vmin =

h¯ Γ , 2m

(3.32)

corresponding to around half a metre per second in calcium.

This argument, which applies to a neutral atom, also applies to the Doppler cooling of a single

ion in a trap, although in a rf ion trap it is possible to cool a single ion using only one laser beam,

angled such that it addresses every possible direction of motion of the ion. The ions are not free

to continually move away from the laser, since the rf electric ﬁelds must always pull the ion back

towards the trap centre.

3.2.3 Three-Level Model - repumping on the 850 nm and 854 nm transitions
Consider the simpliﬁed three-level diagram of the calcium ion shown in ﬁgure 3.2. It is quite straightforward to extend the master equation 3.16 to three levels, such as an atom with a metastable D-state, which we will denote |m , by adding an extra term :
b

m a
Figure 3.2: A simpliﬁed three-level model of the 40Ca+ ion.

∂ ρˆ ∂t

=

−

i h¯

[Hˆ ,

ρˆ

]

+

Γb 2

(2 × |a

b|ρˆ |b

a| − |b

b|ρˆ − ρˆ |b

b|)

+ Γm (2 × |m b|ρˆ |b m| − |b b|ρˆ − ρˆ |b b|) . 2

(3.33)

Provided the Liouvillian superoperator of section 3.2.2 does not change in time1, it is possible to write the solution of the master equation as the sum of a series of complex exponentials of the form esjt with each s an eigenvalue of the Liouvillian [55]. Once this is done, we can plot

1As it would do with pulsed light, for example.

24

Laser cooling

the expectation value for any element of the density matrix over time. Plotting the upper-state

population as a function of the detuning of the 866 nm repumper (section 3.1.1) reveals a dark

resonance at the point where the detunings of the 866 nm and 397 nm lasers are equal. The dark

resonance is the signature of a Raman transition between the D 3 and S 1 state, which bypasses the

2

2

P 1 state entirely. This is a situation which in our observation of continuous 397 nm ion ﬂuorescence

2

we would like to avoid. So rather than repumping on the D 3 ↔P 1 866 nm transition, we implement

2

2

an alternative setup, addressing the D 3 ↔P 3 transition with a 850 nm laser, and the D 5 ↔P 3

2

2

2

2

transition with a 854 nm laser (see ﬁgure 3.1 on page 18). This new setup entirely bypasses the

D 3 ↔P 1 transition, avoiding any possibility of driving Raman transitions between those levels.

2

2

Implementing this repumper setup allows us to treat the system as effectively two-level, and we

will use this approximation in chapter 7, together with the two-level optical Bloch equations, to

calculate the upper-state population.

0.3

0.25

Upper state population

0.2

0.15

0.1

0.05

0

−0.05

−5

0

5

866 nm detuning/Γ

Figure 3.3: A dark resonance occurs when the detunings of the 397 nm and 866 nm laser are equal, as shown in this three-level simulation. Here, the detuning of the 397 nm laser is ﬁxed at 0.5 · Γ, and the detuning of the 866 nm laser is swept. We see the upper state population drop to zero as the 866 nm detuning passes 0.5 · Γ. This situation is avoided if we repump on the 854 nm and 850 nm transitions. In this way we decouple the metastable D-state from the P-state and create an effectively two-l-
evel system.

Chapter 4
Cavity Quantum Electrodynamics

Cavity quantum electrodynamics (CQED) describes how the radiative properties of atoms are modiﬁed by the proximity of boundaries to the electric ﬁeld. It dates from E.M. Purcell’s discovery in 1946 that the probability of nuclear magnetic moment transitions can be enhanced by coupling the system to a resonant electrical circuit [56]. In general terms this has become known as the Purcell Effect and refers to the effect on atomic lifetimes of modifying the boundary conditions on the vacuum around th-
e system. An early review paper by Serge Haroche gives a very readable introduction to the ﬁeld [57].
In the context of ion trap experiments, we refer to optical cavity QED. Optical because we place around the ion an optical cavity, usually consisting of two highly reﬂective mirrors. The conﬁnement, high degree of localisation, and isolation from the environment available in an ion trap provides the ideal setting in which to test CQED theories and concepts.
In this chapter we ﬁrst recap the general theory of optical cavities, before moving on to describe how simply placing a cavity around a radiating particle is able to dramatically alter the properties of the radiating atom. In general, detailed explanations of cavity-QED can be found in [58–60].

4.1 Optical cavities
We start by considering the simplest kind of cavity, that is, the Fabry-Pe´rot cavity. This consists of two mirrors placed parallel to each other a distance L apart. An electric ﬁeld in the cavity must be zero at the boundaries, that is, the mirrors, and so a standing-wave is produced inside the cavity when the following condition is met:

L = nλ

2

= nπc,

(4.1)

ω

Rearranging equation 4.1 for ω gives us the frequencies of the standing waves allowed in a cavity of length L. These frequencies are termed axial, or longitudinal modes:

ω

=

n

πc, L

(4.2)

25

26

Cavity Quantum Electrodynamics

M1

M2

Input field

Output field

L
Figure 4.1: Schematic drawing of a Fabry-Pe´rot cavity formed of two concave mirrors M1 and M2, with radii of curvature R1 and R2. The cavity losses due to the transmissivity of the mirrors, T1 and T2 are shown, with the cavity losses due to absorption and scattering by the mirrors represented by S1 and S2.

and the free spectral range of the cavity is the frequency spacing of its longitudinal modes:

FSR = c .

(4.3)

2L

The spatial distribution of the electric ﬁeld inside the cavity can be decomposed into a longitudinal mode function Φ(x, y, z) and two transverse mode functions Ψn(x, z) and Ψm(y, z):

Enm = (x, y, z) = E0Ψn(x, z)Ψm(y, z)Φ(x, y, z),

(4.4)

with E0 the amplitude of the electric ﬁeld. The transverse electromagnetic (TEM) modes are labelled with the indices n and m

The transverse mode structure is deﬁned by the Hermite polynomials Hm and Hn where each combination of the integers m and n deﬁne one particular transverse electric ﬁeld distribution. A

detailed derivation of these mode functions can be found in [61]. Let us assume that the cavity’s axis is aligned along the z-direction, then the transverse mode structure is given by

Ψm,n(x, y, z) =

w0 w(z)

Hm,n

√2(x, y) w(z)

exp

x2 + y2 − w2

,

(4.5)

where w(z) is the radius of the mode at the axial point z, such that

w(z) = w0

1+

z zR

2
,

(4.6)

where zR = πω0/λ is the Rayleigh Range, and represents the distance one must travel axially along

the beam such that the area of the cross-section is doubled. w0 is the beam waist.

The ﬁrst Hermite polynomial is given by

27

Cavity Quantum Electrodynamics

H0 = 1,

(4.7)

so that equation 4.5 becomes

Ψ00(x, y)

=

w0 w(z)

exp

x2 + y2 − w2

.

(4.8)

This TEM00 mode is known as the fundamental or Gaussian mode. It has the smallest possible beam waist and the smallest divergence.
The longitudinal ﬁeld mode function is given by [61]

Φ(x, y, z) = sin

kz

−

(1

+

n

+

m)

arctan

z zR

+

k(x2 + y2) 2R(z)

,

(4.9)

where the wavenumber k = 2π/λ and R is the radius of curvature of the wavefront, such that

R(z) = [1 + (zR/z)2].

(4.10)

The factor arctan(zR) represents the relative phase difference between the TEM00 Gaussian mode and a plane wave of the same frequency. The resonance condition is that the phase shift of a wave after one round trip of the cavity must be an integer multiple of 2π. The resonant frequencies of modes given by the transverse mode indices m, n, and the longitudinal mode index q, which must be a positive integer, are given by

νnmq = νFSR

q + 1 (1 + n + m) arccos π

L 1−
Ri

.

(4.11)

Equation 4.11 tells us that in a confocal cavity, where L = Ri, transverse modes TEMnm and

TEMmn are degenerate.

4.1.0.1 Cavity types and the conditions for ‘stability’
There are several types of optical cavity, deﬁned by the radii of curvature of the two mirrors, R1 and R2, and the distance between them, L. A summary of some important cavity types is given here.
• Plane-parallel: R1 = R2 = ∞. • Symmetric cavities: R1 = R2 = R. • Confocal symmetric cavities: R1 = R2 = L. • Concentric cavities: L = R1 + R2. • Half-symmetric cavities: R1 = L, R2 = ∞.
We can use ray transfer matrices to treat the passage of a ray through the cavity. If we stipulate that the beam must reproduce its original shape after one round-trip of the cavity, then, after some matrix algebra (see, for example [62, Ch. 8]), we arrive at the condition

0 < (1 − L/R1)(1 − L/R2) < 1.

(4.12)

28 We deﬁne the cavity stability parameters

Cavity Quantum Electrodynamics

So the stability condition becomes

g1

=

1

−

L R1

g2

=

1

−

L R2

.

(4.13) (4.14)

0 < g1g2 < 1.

(4.15)

This, then, is the condition for the existence of a low-loss standing wave in a cavity1. We must bear this condition in mind when deciding on cavity parameters. A representation of the stability criteria is shown in ﬁgure 4.2, along with the position of three stable cavity types. Any cavity that exists in the parameter space represented by the grey-shaded area will be stable, and we can see that stable symmetrical cavities lie along the g1 = g2 line.

10

5

Symmetric confocal

(0,0)

0

Plane-parallel (1,1)

g
2

−5 Symmetric concentric
(-1,-1)

−10

−5

0

5

g
1

Figure 4.2: The cavity stability diagram, deﬁned by the lines g1g2 = 1.

4.1.1 Finesse
The parameters most often used to characterise optical cavities are the free spectral range of equation 4.3, and the spectral width of the TEM00 cavity resonance. We measure the latter as the full-width at half-maximum δ ν in frequency units of the cavity resonance, or alternatively as the half-width at half-maximum κ in angular frequency units. In this form, and in the ﬁeld of cavity-QED we usually term κ the cavity ﬁeld decay rate, or the cavity linewidth. The relationship between δ ν and κ is t-
herefore
1This has nothing to do with the stability of the cavity per se, rather it is the condition for the cavity to support low-loss Gaussian-Hermite modes. ‘Stability’, however, is the common term for this.

29

Cavity Quantum Electrodynamics

κ

=

2πδ ν 2

.

The ﬁnesse of the cavity F is given by the ratio of the FSR to the cavity linewidth

(4.16)

or alternatively

F = FSR = 2πFSR ,

δν

2κ

(4.17)

F = 2π , LTot
with LTot the total round-trip loss, = T1 + T2 + S1 + S2. The cavity decay rate κ depends on the total cavity losses, and the cavity length, as

(4.18)

κ

=

cLTot 4L

=

πc 2LF

.

(4.19)

The cavity ﬁnesse is entirely determined by the cavity losses, and so essentially describes the quality of the mirrors. When a photon hits a mirror, it is either transmitted or reﬂected and this does not depend on the length of the cavity. Finessse can be extremely high—Rempe et al. measured a ﬁnesse of 1.9×106 in 1992, with mirrors of transmissivity 2 parts per million (ppm) [63].
The ﬁnesse divided by π gives us the average number of times a photon crosses the cavity before it is lost, that is, the number of times the photon passes a trapped ion.
A typical cavity, which we use in our experiment, might have the following parameters:

• T1 = T2 = 30 ppm or 30×10−6

• Cavity length L ≈ 300 µm • FSR = c/2L ≈ 500 GHz

• Finesse F ≈ 100, 000

With these numbers, ﬁgure 4.3 shows the inﬂuence of the absorption and scattering losses S1, S2 on the cavity transmission. This is an important consideration for the cavities considered in this thesis, and will be touched on in later sections.

30

Cavity Quantum Electrodynamics

Cavity transmission

1 0.9 0.8 0.7 0.6 0.5 0.4 0.3 0.2 0.1
0 −500

Zero A/S losses 10 ppm A/S losses 30 ppm A/S losses

0

500

Cavity detuning/MHz

Figure 4.3: Transmission as a ratio of input intensity for a cavity with the parameters given in the text, and for the case of no, 10 ppm, and 30 ppm absorption/scattering (A/S) losses. The ﬁgure of 30 ppm is a pessimistic estimate of losses in a cavity of the type which will be described later in this thesis.

4.2 Atom-Cavity Interaction

In the theory of quantum electrodynamics, which quantises the electromagnetic ﬁeld, each mode of the ﬁeld can be associated with a quantum harmonic oscillator and photons are interpreted as elementary excitations ‘inside’ these oscillators, or modes. Each oscillator may in principle contain from zero to an inﬁnite number of excitations. The standard result of treating the simple harmonic oscillator quantum mechanically [64] gives the energy of the oscillator as

En =

n+ 1 2

h¯ ω,

(4.20)

and this imposes a quantisation on the energy contained in the electric ﬁeld in a cavity. The energy in any mode of the ﬁeld, oscillating at angular frequency ω can be represented by an integer value n in equation 4.20. In this case there are n quanta of energy in the mode of the ﬁeld2.
The Hamiltonian of each of these oscillators, or modes, reads

Hˆ = h¯ ω aˆ†aˆ + 1 , 2

(4.21)

where we deﬁne the photon creation and annihilation operators aˆ† and aˆ as respectively increasing and decreasing the number of photons in the mode by 1. Furthermore, we deﬁne the number operator

nˆ = aˆ†aˆ,

(4.22)

which has as its eigenstates the photon number states |n , or ‘Fock States’. Each photon number
2Detailed accounts of the theory of quantum electrodynamics can be found in [59] and [60]

31

Cavity Quantum Electrodynamics

state represents an elementary excitation in the mode. The annihilation and creation operators obey the following relations:

aˆ†aˆ|n = n|n

aˆ, aˆ† = 1

aˆ†|n

=

√ n

+

1|n

+

1

aˆ|n

=

√ n|n − 1

,

(4.23) (4.24) (4.25) (4.26)

and any Fock state can be generated by applying the creation operator to the ground state |0 as

|n

=

a†n √

|0

.

n!

(4.27)

Equation 4.21 also reveals the energy offset of the vacuum state—we see that even if the

eigenstates of the photon number operator are zero (no photons in the mode), the vacuum still possesses an energy h¯ ω/2. It turns out that the expectation value of the electric ﬁeld is zero in all photon number states. The average energy density, however, is non-zero for all states, including the

vacuum state.

4.2.1 The Jaynes-Cummings Model

M1

M2

Input field

Output field

L Figure 4.4: An atom in a cavity with the loss mechanisms indicated. Here, S1 + S2 are the combined
absorption and scattering losses of both mirrors. Γ is the (spontaneous) emission of the atom into modes other than the cavity mode. g is the coherent atom-cavity mode coupling rate.
The coupling of a single two-level system, such as a trapped ion, with a single quantum harmonic oscillator (a single mode of the quantised cavity ﬁeld) is described by the Jaynes-Cummings model [65, 66]. For this simple model, we assume that only one mode of the cavity is populated with

32

Cavity Quantum Electrodynamics

photons, and that this mode only interacts with the two levels of the atom, not any other levels. We also assume no dissipative processes, such as spontaneous emission or cavity losses.
A two-level system is often termed a spin system by analogy with a spin-1/2 system evolving between two spin eigenstates |a and |b created by a magnetic ﬁeld oriented along a z-axis. We make use of the atomic raising and lowering operators, σˆ+ and σˆ− of section 3.2.2 on page 20, to represent the transition of the atom from the lower to the upper, or excited state, and vice versa. The operators have the properties:

σ+|a = |b σ−|b = |a σ+|b = 0 σ−|a = 0
We write the Hamiltonian of the entire system as

(4.28) (4.29) (4.30) (4.31)

Hˆ = Hˆa + Hˆc + HˆInt

(4.32)

where Hˆa, Hˆc and HˆInt represent respectively the energies of the atom, the cavity mode, and the interaction.
The Hamiltonian for the atom is given by [59]:

Hˆa

=

h¯ ω 2

σˆ+σˆ−,

(4.33)

where ω/2π is the atomic transition frequency. The Hamiltonian for the cavity is Hˆc = h¯ ωnˆ, where we have set the vacuum energy to be zero
for simpliﬁcation—we are aware that there is actually a h¯ ω/2 offset everywhere.

The electric ﬁeld in a cavity can be written as [59]

Eˆ = iE0 f(r)aˆ − f∗(r)aˆ† ,

(4.34)

where f(r) is a function describing the electric ﬁeld amplitude and polarisation across the mode (see
the mode functions of equation 4.4 ). At the electric ﬁeld maximum we normalise this expression so that f(r) = 1. The mode volume is

and the normalisation

V = |f(r)|2d3r,

(4.35)

E0 =

h¯ ω , 2ε0V

(4.36)

is the r.m.s. electric ﬁeld amplitude of the vacuum for an angular frequency ω and mode volume V . ε0 is the usual permittivity of the vacuum.
The dipole interaction Hamiltonian is then written as

33

Cavity Quantum Electrodynamics

HInt = −µab (σˆ+σˆ−) · iE0 aˆ − aˆ† .

(4.37)

Here, µab is the dipole matrix element of the atomic transition. If we expand this scalar product we ﬁnd that the terms proportional to σˆ−aˆ and σˆ+aˆ† correspond to non-resonant processes (transition from |b to |a with the annihilation of one photon, and transition from |a to |b with the creation of one photon), and in the case that the cavity mode and atomic transition angular frequencies are close, then we can neglect these terms. This corresponds to the rotating wave approximation. The Hamilt-
onian then becomes, in a frame rotating with the laser frequency:

where

HInt

=

−ih¯

Ω0 2

[aˆσˆ+

−

aˆ†σˆ−],

(4.38)

Ω0

=

2µabE0 h¯

(4.39)

is the vacuum Rabi frequency, which can be thought of as proportional to the interaction energy

of an atomic dipole with a classical ﬁeld having an r.m.s. value of the vacuum ﬁeld. Generally we

quantify the strength of coupling between the atom and the single ﬁeld mode as

g = Ω0 = µabE0 .

2

h¯

(4.40)

This is the rate at which single excitations are coherently exchanged between the atom and the

single ﬁeld mode.

4.2.2 Dressed States

For the purposes of this experiment we consider a single ion and a single photon, so that the possible states are |a, 0 , |b, 0 , and |a, 1 , with the 0, 1 referring to the number of photons in the cavity mode. For a resonant light ﬁeld, the states |a, 1 and |b, 0 are degenerate. The interaction with the cavity causes a mixing of the states—the cavity ﬁeld ‘dresses’ the bare states—such that the eigenstates of the coupled system become

√1 (|a, 1 ± |b, 0 ). 2

(4.41)

The energy difference between the states is given by 2h¯ g = h¯ Ω0. This is the so-called vacuum Rabi

splitting [67].

In reality, there are dissipative processes in the system—spontaneous emission into modes other

than the cavity mode and the other loss processes shown in ﬁgure 4.4. We now move on to quantify

what we mean by a ‘large’ vacuum Rabi splitting, in terms of the size of the coherent coupling

parameter g relative to these losses.

34

Cavity Quantum Electrodynamics

Figure 4.5: The ‘dressed state’ of the degenerate |a, 1 , |b, 0 level at zero detuning resulting from the atom-cavity interaction is a splitting of magnitude h¯ Ω0.
4.2.3 Coupling Regimes
The proposal of Cirac and Zoller for a quantum network in [31] depends critically on the photon generation process being reversible, that is, a photon is emitted from an atom in a trap, transmitted along an optical ﬁbre before entering an identical trap and mapping the state of the original atom onto the new atom. The key is the reversibility of the emission of a photon into the cavity mode, as compared to the irreversibility of the emission of the photon into the many alternative vacuum modes, or-
 the loss of a photon through the mirror coating (the cavity decay rate). The irreversibility comes from the random coupling of the atom to the non-cavity modes—if a photon is emitted into one of these modes, we can’t get it back. In the reversible regime, however, the atom emits a photon into the cavity mode, it bounces back and forth between the cavity mirrors and is re-absorbed by the atom, thus exactly reversing the emission process. Eventually the cavity photon must leak out of the cavity due-
 to the ﬁnite reﬂectivity of the mirrors, but if it leaks out into one end of an optical ﬁbre, the other end of which is connected to an identical cavity, then it can ‘leak in’ to the identical cavity mode and be absorbed by an identical ion, thus reversing the emission but in a different ion.
We characterise three coupling regimes by comparing the coupling rate g with the cavity loss rates to spontaneous emission Γ and the cavity decay rate κ of equation 4.19, which depends on the cavity loss rates and the length of the cavity.
If the reversible emission of photons into the cavity mode is faster than κ and Γ, the spontaneous emission rate, then we are in the strong coupling regime.3
The second regime of interest is the ‘bad-cavity regime’, in which κ g Γ. In this regime, decay of the photon through cavity losses occurs faster than the atom can re-absorb a cavity photon, and no vacuum Rabi splitting would be observed. However, emission into the cavity mode still dominates spontaneous emission, and as such this regime could satisfy the requirements of a quantum communication device.
If both the spontaneous emission rate and the cavity losses are greater than g, then we are in the ‘weak-coupling regime.’
Experimentally, the vacuum Rabi splitting could be observed in the transmission spectrum of a cavity locked to the atomic resonance as we sweep the frequency of the input laser ﬁeld to the cavity. We would observe two peaks in the spectrum, as the laser sweeps over the two frequencies of the split. To observe this, we need the split to be as large as possible, and so from equation
√ 3One point worth mentioning regarding an N-atom case is th√at the splitting of the dressed states becomes 2g N and so the conditions for strong coupling are relaxed by a factor of N.

35

Cavity Quantum Electrodynamics

4.40, we require E0, or the dipole matrix element of the transion to be large. At optical frequencies, this amounts to increasing E0, which in turn requires the cavity mode volume V to be decreased. The reduction of the cavity mode volume is the motivation for the design of the experimental apparatus described in chapter 5. We must also work to minimise loss mechanisms, which in practice means making the quality of the mirror coatings as good as possible. By using specialist coating companies4, it-
 is possible to achieve mirrors with transmissivities of a few ppm. However, since we want to transmit our photon, it must leak out of the cavity eventually, so the transmissivity must be carefully chosen so that a high coupling rate is achievable, given what we know about the spontaneous emission rate of the atom and the possible cavity volumes, whilst still allowing us to extract a cavity photon. This process, along with calculations of potential cavity lengths, will be covered in chapter 8. In -
general, along with highly-reﬂective mirror coatings, cavity lengths of a few hundred microns are required.
Cavity parameters as a function of cavity-QED parameters are discussed in chapter 8.

4.2.4 Experimental realisation of strong coupling
A 2006 review of many signiﬁcant experiments in both the weak and strong coupling regimes of CQED concentrating mostly on single atoms can be found in [68].
Strong coupling was achieved in the microwave domain in 1987 by Rempe et al. in Garching. A beam of Rubidium atoms was strongly coupled to the ﬁeld in a superconducting microwave cavity. Rydberg atoms such as these have been used because of their very large dipole matrix elements, and long atomic lifetimes. One disadvantage to using Rydberg atoms is that it is harder to detect microwave photons and the experiments have relied on detecting atoms exiting the cavity.
In general, the coupling parameter g varies throughout the cavity, as the electric ﬁeld of the cavity standing wave varies. For quantum information processing, we would like the coupling to be constant and predictable, and this is one reason for pursuing strong coupling in the trapped ion context, where we can localise an ion precisely in the centre of a node of the standing wave, where the coupling is strongest. Strong coupling has been realised using trapped ion Coulomb crystals by the group of -
Michael Drewsen in 2009 [69]. They were able to achieve strong coupling with crystals of over 500 ions and a cavity length of 11.8 mm.
Strong coupling has been achieved with other systems, such as a single quantum dot (2004) [70], and a micromechanical resonator (2009) [71], and the ﬁeld is extremely active. An interesting new approach just suggested by Chang and Kimble [72] proposes a cavity formed of a lattice of atoms, with the cavity atom an impurity in the lattice.
To date, nobody has achieved strong coupling with single trapped ions, although the boundary has been reached [73].

4Advanced Thin Films, Boulder, CO.

Chapter 5
Experimental Setup
We discussed in chapter 1 the idea of implementing a trapped-ion/single-photon system, and we saw in chapter 4, how placing a very small optical cavity around the ion can produce the coupling between the trapped ion and the cavity light ﬁeld necessary for reversible single-photon production. With the idea of a miniature optical cavity ﬁrmly in mind then we now move on to describe our experimental setup.
Central to the experiment is a miniature ion trap of a unique design, such that an optical cavity consisting of the end facets of two optical ﬁbres can be introduced within around 200 µm of the ion, critically with no degradation of the trapping potential.
This chapter describes the overall physical setup of the experiment. Firstly, the production of the ions through photoionisation of calcium atoms is described, and a description of the lasers used to address the ions is given. The ion trap itself is described, starting with the critical trapping region and moving outwards through the supporting construction to the attendant rf electronics and vacuum systems. Finally, ﬂuorescence detection and computer control systems are described. Where the setup-
 differs from this basic layout, it will be described in the relevant chapter.
5.1 Overview
Figure 5.1 shows a top view schematic of the main components of the optical setup. At the centre of the ﬁgure is the octagonal vacuum chamber housing the trap—see section 5.6. Also inside the vacuum is a resistively-heated oven, ﬁlled with calcium powder. A current of around 1.8 A is passed through the oven, causing evaporation of calcium atoms into the trapping region at the centre of the trap. The direction of the atomic ﬂux is indicated with an arrow. Lasers are directed through the chamber win-
dows into the central region where a two-stage photoionisation process takes place followed by Doppler cooling of the resultant ions. The cooling lasers1 cause the ions to emit ﬂuorescence which we detect with a free-space photomultiplier tube (PMT)2, and an electron-multiplying charge-coupled-device camera (EMCCD). For some experiments other detection schemes were used, and these will be described where they arise.
1Labelled beams 1, 4, 6 and 7 as the 1st, 4th, 6th and 7th beams in our 397 nm laser system. 2‘Free-space’ here means the PMT is outside the vacuum—the photons are detected after passing through the chamber windows to the atmosphere.
36

37

Experimental Setup

Key

Mirror
Dichroic mirror 866/397 nm
Half-wave plate
Light-tight tubing
Laser fibre coupler and collimator

Direction of atomic beam (inside chamber) Spatial filter Polarising beam splitter Custom lens
10 x objective lens

850 nm and 854 nm repumper lasers

397 nm 'beam 7' cooling laser

EMCCD Camera Plano-convex lens: f = 100 mm
Photomultiplier tube

397 nm 'beam 6' cooling laser

Low-scatter 397 nm
cooling laser 'beam 1'

397 nm 'beam 4' and 866 nm cooling lasers

Photoionisation lasers

Figure 5.1: A top view of the main optical setup.

38
5.2 Fluorescence detection and computer control

Experimental Setup

5.2.1 Fluorescence detection
Fluorescence from a trapped ion is collected by two methods in our setup. The eight available windows and excellent optical access of the trap means that we are able to ‘look’ from more than one direction at the same time. We use a photomultiplier tube (PMT)3 to count photons, and an electron multiplying charge coupled device (EMCCD) camera4 to image the ions. Referring again to the optical table schematic shown in ﬁgure 5.1, let us refer to the window through which the EMCCD camera looks as the f-
ront of the trap. The lens system used to collect light from the ion is practically the same for the PMT and the EMCCD camera. A Nikon Measurescope objective lens of ten times magniﬁcation is mounted on an translation stage allowing movement along the optical axis and placed immediately in front of the front trap window and also the PMT window. Attached to these lenses are 22 cm pieces of light-tight tubing. Inserted in each tube is a Semrock FF01-395/11-25 bandpass ﬁlter. This ensures that only l-
ight of the ﬂuorescence wavelength makes it to the detector (the ﬁlter is not perfect—for an examination of its transmission of 866 nm light, for example, see section 7.3.2 on page 104).

5.2.1.1 The PMT
On the PMT side of the trap, the tubing terminates in a small hole mounted in an adjustable xyz-stage (visible in ﬁgure 5.2(a)). This allows us to focus more easily on the central trap area. Once this is aligned a further pinhole is inserted, to block unwanted scattered light, followed by the Semrock ﬁlter. Aligning the whole PMT setup then follows this procedure:
• Look at the pinhole mount with a CCD camera positioned very close to the mount (ﬁgure 5.2(a). Focus the CCD on the mount.
• Focus the image of the trap electrodes on the plane of the mount (ﬁgure 5.2(b)) by translating the objective lens back and forth. Now, the electrodes are imaged onto the plane of the mount (as can be seen in ﬁgure 5.2(b).
• Move the mount hole using the xyz-stage so that the image of the electrodes is in the centre of the hole. That is, the centre of the trap is in the centre of the hole.
• Remove the camera, place a pinhole (150 µm in this case) and the Semrock ﬁlter into the mount, and attach the PMT.
This procedure guarantees that the PMT can see the central trapping region, however, since moving the pinhole by 1 mm corresponds to a moving a distance of 100 µm inside the trap it’s clear that if the pinhole is even half a millimetre away from the optimal point on the outside, it could be 50 µm away on the inside and as a result the PMT may entirely miss the ion’s ﬂuorescence. Consequently a considerable amount of effort has been expended in systematically searching for ions by stepping the pinh-
ole over the central trap region. We have found that over timescales of
3Hamamatsu H7360-02. 4Andor Luca S.

39

Experimental Setup

weeks the pinhole position drifts and has to be realigned. As a result we have chosen not to use pinholes smaller than 150 µm, although doing so would have resulted in lower background light.
Some important characteristics of this PMT are its sensitivity to our wavelength of light, its dark count rate, and its dead time 5. The two-photon resolution of this PMT is quoted as 18 ns. This corresponds to a possible count rate of around 55 MHz, which is well above the rates we measure from a single ion. This feature, therefore, is not a concern. The dark count rate is speciﬁed to be 60–300 s−1. Turning to sensitivity, this is speciﬁed as 4.1×10−5s−1pW−1 at 400 nm, and so we can deﬁne its qua-
ntum efﬁciency as:

Qeff

=

count

sensitivity real

at 397 nm in number of number of photons in 1

photons per second second per pW

per

pW

= 4.1 × 105 s−1pW−1 2.0 × 106 s−1pW−1

= 20%

(5.1)

(a)

(b)

Figure 5.2: The alignment setup for the PMT. (a) - an image of the trap is focused onto a plane formed by a metal pinhole held in place on a xyz-stage, and (b) - the magniﬁed image of the trap can be seen through the hole.

The inﬂuence of the solid angle subtended by the window (more precisely the brass clamp aperture—see section 5.4.8.1 dominates the collection efﬁciency of the setup, with the quantum efﬁciency of the PMT a distant second. One suggestion for improvement of collection efﬁciency would therefore be bigger windows (which means a bigger chamber). In order to take advantage of bigger windows however, we would also need an objective lens with a bigger numerical aperture, so the question comes down to mach-
ining costs and equipment costs.

5.2.1.2 The EMCCD Camera
For imaging trapped ions we have chosen to use an EMCCD camera. The signiﬁcant advantage of EMCCD over mainstream CCD technology is that signals are ampliﬁed before reaching an ampliﬁer, that is, on the CCD chip itself. This means that extremely low signal levels can be ampliﬁed above the noise of the ampliﬁer.
5Dead time is the length of time the detector is ‘dead’ after detecting one photon and before becoming ready to detect another one.

40

Experimental Setup

As with the PMT, a Nikon measurescope objective lens of ten times magniﬁcation produces an image at the plane of the camera chip. A Semrock ﬁlter, as used in the PMT setup, is placed in the tubing just before the camera to ﬁlter unwanted light. It was found that, especially at high EM gain, spots of scattered 866 nm light were visible, so a small mirror, coated to reﬂect 866 nm light (‘B’-coating), was placed in the tubing before the camera and reﬂects any stray 866 nm light back into the chamber.-
 It was found that with this objective lens, one pixel on the camera’s display corresponded to approximately 1 µm in the plane of the ion.
The camera has been most useful during the times when the position of the PMT has drifted over time. Locating an ion ﬁrst with the camera then optimising the PMT position has proved to be a relatively quick means of recovering from some misalignment or rearrangement of the experiment.

5.2.2 Generation of calcium ions

CONTINUUM
4s5p 1P1

389 nm 272 nm

672 nm

272 nm 423 nm

4s4p 1P1

4s3d 1D2

456 nm

4s2 1S0
Figure 5.3: Energy levels and transition wavelengths in neutral calcium showing two possible photoionisation schemes. In scheme 1 intense 272 nm light is used in a three-stage process including decay on the 672 nm transition. Scheme 2, which we use, is a two-stage process on the 423 nm and 389 nm transitions. Energy levels are not to scale.

41

Experimental Setup

Neutral calcium has an atomic number of 20, and is shown in the yellow column in ﬁgure 5.3, with some of its neighbouring alkaline earth elements. Like these elements, for example beryllium, magnesium or strontium, calcium has two valence electrons, and preferentially loses one or two electrons to become singly or doubly ionised. The most abundant isotope—40Ca—has 20 protons and 20 neutrons in its nucleus, and consequently no nuclear spin and no hyperﬁne structure. This isotope represents 96.94% o-
f naturally occurring calcium.[74]
Calcium atoms are generated in the trap oven as described in section 5.3. There are several ways of generating ions from an atomic source in an ion trap. Electron bombardment, as its name suggests, bombards the calcium atoms with high-energy electrons. A more efﬁcient alternative is the two-stage resonance-enhanced photoionisation process ﬁrst demonstrated in 1999 by Kjaergaard et al.[75]. This is the method used in our work. The 4s2 1S0 ↔ 4s4p 1P1 transition shown in ﬁgure 5.3 is excited by a 423-
 nm laser at 45◦ to the atomic beam. Exact wavelengths of all the lasers we use are shown in appendix A. The electron is then promoted to the continuum by a 375 nm laser. The exact wavelength of this laser is not critical, provided it is less than around 389 nm, and in fact an incoherent source has been used for this purpose by Lucas et al. in 2003 [76]. The two lasers are overlapped and focused to a spot size of approximately 200 µm at the trap centre.
Photoionisation has several beneﬁts over electron bombardment ionisation, some of which are:

• The isotope shifts in calcium are larger than the 423 nm laser linewidth, meaning we can selectively ionise only 40Ca.
• Atoms of other elements that may exist in the trap will not be (resonantly) ionised. • It is around ﬁve orders of magnitude more efﬁcient than electron bombardment [77]. • As a result of the increased efﬁciency, the atomic beam ﬂux can be decreased. • An electron beam can charge up dielectrics inside the trap.

Details of the lasers used and their conﬁguration can be found in appendix A.

5.3 The endcap ion trap
The ion trap used in the work presented here is pictured in ﬁgure 5.4. It is a miniature threedimensional Paul trap [32] based on the endcap design originally described by Schrama et al. [78] in 1993, and implemented since by, for example, Roberts et al. [79] and Wilson [80]. Our trap differs from this plan in that the central rf electrodes are hollow, rather than solid, tubes. This unique design allows the insertion of a ﬁbre-based optical cavity into the actual trap electrodes.
A useful way of thinking of this design is as an extension of the ring trap design [81], which consists of a ring, to which an rf voltage is applied, and two endcaps with hyperbolic surfaces of revolution—in the endcap trap we can imagine the rf ring being split in two and pulled back over the two endcaps. These two endcaps become the rf electrodes in the new trap, and the two halves of the ring become ground electrodes. Alternatively, we can imagine the more extreme ring trap demonstrated in [82]-
, which consisted only of a ring, surrounded at a distance with metal plates to which a dc voltage could be applied. We could imagine the ring in such a trap being split in two

42

Experimental Setup

Figure 5.4: The Endcap Trap.

and pulled apart to form the two hollow electrodes, and then just adding ground electrodes around them.
The effect of the outer electrodes is dramatically shown in the simulations of section 5.4.6 on page 51, where we see that the trap depth is enhanced by their presence.
The geometry of the endcap trap means that the potential produced is not the ideal quadrupole potential of equation 2.2 on page 8. For a non-ideal trap we must use a more general expression for the potential distribution [81]:

∞
∑ Φ = A2l(x2 + y2 + z2)lH2l(x, y, z), l=0

(5.2)

where H2l are spherical harmonics, and A2 are expansion coefﬁcients.

Near the centre of the trap, the potential expansion is dominated by the quadrupole potential,

and so can be approximated by equation 2.2. Further from the centre, however, higher-order terms

in the potential become signiﬁcant and a trapped ion’s motion at this point would no longer be

43

Experimental Setup

entirely harmonic. Since in this work we are only concerned with single laser-cooled ions held very close to the centre of the trap, we will neglect this concern and assume an approximately quadrupole potential distribution.
The inﬂuence of the higher-order potential terms causes another concern in the endcap trap—we must drive the trap with a higher rf amplitude to achieve the same secular frequencies as in an ideal trap. This increase in voltage can be characterised as the ‘voltage loss factor’, which we can think of as a loss of power to higher-order potential terms. Schrama et al. found the voltage loss factor of a trap geometry consisting only of two cylinders to be 3.5, and of an endcap trap consisting of two cy-
linders and two grounded electrodes to be 1.7 [78].
The relatively minor drawback of the voltage loss factor is outweighed in this case by the improved optical access to the trap. We are able to address a trapped ion with lasers at angles of up to 20% above and below the radial plane.6

5.4 Simulations
A number of simulations of the trap geometry and parameters have been carried out using the ﬁniteelement program Femlab, controlled from a Matlab front-end. These have enabled us to predict the effect on the trapping potential of parameters such as the distance the ﬁbres are recessed within the inner electrodes, the inner electrode separation and the rf amplitude. From these simulations we can extract the trap depth, as deﬁned in chapter 2.5 and the secular frequencies of the trap under various co-
nditions. These simulations were used to deﬁne the physical dimensions used in the trap.
5.4.1 The electric ﬁeld and rf potential
Figure 5.5 shows a plot of selected electric ﬁeld lines7 in the central area of interest within the endcap trap. These are the lines along which the resultant force is directed. If we imagine the direction of this force changing with every rf half-cycle, then we can easily see how a charged particle is trapped at the centre.
Figure 5.6 shows a snapshot of the electric potential resulting from the ﬁeld. In the crosssections we can see the quadratic nature of the potential quite clearly.

6That is, perpendicular to the axial plane of the electrodes. 7Of course there are electric ﬁeld lines everywhere in the trap, but for clarity the ﬁgure is restricted to the central
trapping region.

44

Experimental Setup

Figure 5.5: Selected simulated electric ﬁeld lines in a cross-section through the endcap trap. These indicate the direction of the force experienced by the positively charged ion.

200 Radial Axial
150

Electric Potential

100

(a) The instantaneous electric potential.

50

−1

−0.5

0

0.5

1

Radial or Axial Coordinate/mm

(b) Electric potential cross-sections.

Figure 5.6: A simulation of the instantaneous electric potential in the trap resulting from an rf amplitude of 200 V. Figure (a) shows a surface plot of the potential while ﬁgure (b) shows a cross-section through the radial and axial potential.

5.4.2 The pseudo-potential
The pseudo-potential is simulated for a range of rf amplitude of 50–400 V. Figure 5.7(a) shows a surface plot, while ﬁgures 5.7(b), 5.8(a) and 5.8(b) show cross-sections through the radial and axial pseudo-potentials. As expected, the depth of the pseudo-potential well increases with increasing rf amplitude.

45

Experimental Setup

3 Radial Axial
2.5

Pseudo−Potential/eV

2

1.5

1

0.5

(a) The pseudo-potential.

0

−1

−0.5

0

0.5

1

Radial or Axial Coordinate/mm

(b) Cross sections through the pseudo-potential. The points where the ﬁbres start are revealed in the sudden drop of the axial potential.

Figure 5.7: (a) The pseudo-potential for an rf amplitude of 200 V and Ω/2π =15 MHz, and (b) axial and radial cross-sections through the pseudo-potential.

Pseudo−potential/eV

15 50 V

100 V

150 V

10

200 V

250 V

300 V

5

350 V

400 V

0

−2

−1

0

1

2

Radial coordinate/mm

(a) Radial pseudo-potentials.

15 Radial Axial
10

Pseudo−potential/eV

10 50 V

8

100 V

150 V

6

200 V

250 V

4

300 V

350 V

400 V 2

0

−0.5

0

0.5

Axial coordinate/mm

(b) Axial pseudo-potentials.

Trap Depth/eV

5

0

100

200

300

400

Trap RF amplitude/V

(c) Trap depth.

Figure 5.8: Cross-sections through the radial and axial pseudo-potential for rf amplitudes between 50 V and 400 V and a frequency Ω/2π =15 MHz, showing the increase in the depth of the potential well
at higher amplitudes.

46

Experimental Setup

5.4.3 The effect of a dc-bias on the pseudo-potential

We now investigate the effect that a dc bias on the outer ground electrodes has on the simulated trapping potentials and secular frequencies. Later we will do this experimentally, and compare the measured secular frequencies with these simulations.
We refer to the dc-bias on the outer ground electrode as an a-value. The values of a are simply numbers used by the LabView control software, but they correspond to the real voltages on the electrodes via an empirically-determined linear relationship. We chose to investigate ﬁve a-values, with the corresponding dc voltages:

• a = -2: -7.46 V • a = -1: -3.76 V • a = 0: -0.06 V • a = 1: 3.64 V • a = 2: 7.34 V

We assume a w-value of zero. This is reasonable because although the real w compensation voltage varied throughout the day as the stray charges within the trap varied, this is balanced by the stray charge to give the effectively ‘ideal’ w = 0 situation which we model in the simulation. The voltages corresponding to our ﬁve a-values are shown in ﬁgure 5.9. Next, we will show the effect of adding these potentials to the existing pseudo-potential in the trap. Figure 5.10 shows as an example the combi-
ned rf and dc axial and radial pseudo-potentials for an rf voltages of 100 V. The simulations were run for 8 voltages between 50 V and 400 V, and the trap depths calculated from the combined potential. These are shown in ﬁgure 5.11. The ‘missing points’ indicate where the potential was anti-trapping.
The simulations in this section were performed with identical dc voltages on upper and lower electrodes, but for a more accurate simulation, the small gain and offset differences in the ampliﬁers supplying the upper and lower electrodes should be taken into account.

Potential/V Potential/V

47

Experimental Setup

10

2 a=−2

a=−2

5

a=−1

1

a=0

a=−1 a=0

a=1

a=1

0

a=2

0

a=2

−5

−1

−10

−2

−2

−1

0

1

2

−1 −0.5

0

0.5

1

Radial coordinate/mm

Axial coordinate/mm

(a) Radial dc potentials.

(b) Axial dc potentials.

Figure 5.9: The radial and axial dc potentials corresponding to a-values of -2, -1, 0, 1 and 2.

Combined potential/eV Combined potential/eV

Radial combined potentials for RF = 200

10 a=−2

a=−1

5

a=0

a=1

0

a=2

−5

Axial combined potentials for RF = 200 V

3 a=−2

2

a=−1

a=0

1

a=1

a=2

0

−1

−10

−2

−2

−1

0

1

2

−1 −0.5

0

0.5

1

Radial coordinate/mm

Axial coordinate/mm

(a)

(b)

Figure 5.10: Radial and axial cross-sections of the combined rf and dc potentials for an rf-amplitude of 200 V.

48

Experimental Setup

Trap Depth/eV

14 12 10
8 6 4 2 0 −2 −4 50 100 150 200 250 300 350 400
Trap RF amplitude/V

a=−2 Radial a=−1 Radial a=0 Radial a=1 Radial a=2 Radial a=−2 Axial a=−1 Axial a=0 Axial a=1 Axial a=2 Axial

Figure 5.11: Trap depths extracted from combined dc and rf potentials.

49

Experimental Setup

5.4.4 Secular frequencies

We can extract the secular frequency from the combined pseudo-potentials in the following way: Consider the equation of motion of an ion:

d2x m dt2

=

−e dφ dx

,

(5.3)

and considering a parabolic potential φ = ax2 + b, we have

dφ = 2ax dx

⇒ x¨ = − 2eax .

(5.4)

m

We know from simple harmonic motion theory that x¨ = −ω2x, so substituting this in equation 5.4 we have

ω=

2ea . m

(5.5)

Therefore, if we know the a-parameter of a parabolic conﬁning potential, we can determine the

secular frequency, given the other constants (the electronic charge and the atomic mass of calcium in

this case). The central region of the pseudo-potential in the endcap trap is approximately parabolic, so we ﬁrst extract that region and ﬁt the equation y = a(x − c)2 + b to it, as shown in ﬁgure 5.12. The ﬁt to the equation then, for this particular example gives the equation y = 174.8x2 + 1.3, with c

negligibly small. Using equation 5.5 we obtain a radial secular frequency of 4.62 MHz. The secular

frequencies calculated for all rf and dc voltages are shown in ﬁgure 6.14(a).

10

Combined DC and RF potential/eV

8

6

4

2

0

−0.2

−0.1

0

0.1

0.2

radial coordinate/mm

Figure 5.12: Extracting the secular frequency from the pseudo-potential. The pseudo-potential is shown for an rf amplitude of 400 V and dc potential a = 2, with the central region extracted and ﬁtted to a
parabola. See the text for further details.

50

Experimental Setup

5.4.5 The separation of the electrodes

We now consider the effect of the separation of the electrodes on the trapping potential. We saw in chapter 1 that the ﬁbre separation, that is, the cavity, should be as small as possible, but we must also have an acceptably high trapping potential8.
First, we simulate a range of separations of the whole (inner and outer) electrode structure. That is, we move both electrodes up and down together with the inner electrode protruding a ﬁxed distance 0.42 mm from the outer. The simulation is shown in ﬁgure 5.13 for separations between 50 µ and 1 mm. We ﬁnd that at very small separations the radial conﬁnement is very strong, with the axial almost non-existent. We can understand this if we consider that at small separations the electric ﬁeld lines a-
re almost entirely radial at the ion.
The radial potential only starts to approximate a parabola at around a separation of 300 µm. Below this point the potential becomes more like a square well, and so we cannot say that the secular frequencies calculated from a parabolic ﬁt in this region are reliable. This point is illustrated in the sum of deviations plot of ﬁgure 5.14. Each point is the sum of the deviations of the ﬁt from the real data for that electrode separation. A high sum of deviations indicates a poor ﬁt. The trap depths, o-
n the other hand, are not calculated from this ﬁt and are a reasonable measure of the potential well depth.

Secular Frequency/MHz Trap Depth/eV

5

Radial

25

Radial

4

Axial 20

Axial

3

15

2

10

1

5

0

0

0.5

1

Electrode Separation/mm

(a)

0

0

0.5

1

Electrode Separation/mm

(b)

Figure 5.13: The secular frequency and trap depth as the separation of the inner electrodes is varied over a wide range of possible (and practically impossible) geometries. See the text for further explanation.

8We have found that with trap depths of several eV we are able to trap for several hours.

51

Experimental Setup

Radial Pseudo−Potential/eV Sum of Deviations/eV

25

60

Radial

20

Axial

40 15

10 20
5

0

−0.5

0

0.5

Radial Coordinate/mm

(a)

0

0

0.5

1

Electrode Separation/mm

(b)

Figure 5.14: Figure (a) shows the highly non-parabolic radial pseudo-potential at an electrode separation of 50 µm, and (b) shows the sum of deviations taken from a parabolic ﬁt to the central pseudopotential region for each electrode separation (see ﬁgure 5.12). The high values for the radial ﬁts for very small electrode separations indicate the region in which the potential is no longer parabolic.

5.4.6 The recess of the outer electrodes
We now ﬁx the inner electrode separation and examine the effect of moving the outer ground electrodes relative to the plane of the inner electrode face. Again, we examine the anharmonicity of the potential at each position in terms of the ﬁt to a parabola. The results are shown in ﬁgure 5.15. The sum of deviations plot shows that the radial potential becomes less parabolic as we approach zero recess. However, trap depth increases, the closer the outer electrode comes to the inner. We can understan-
d the increase in the trap depth by considering the electric ﬁeld lines, more of which act on the ion as the outer electrodes approach the inner. Based on these models, a reasonable compromise between optical access and trap depths was made and an inner electrode separation of 446 µm was chosen with the outer electrodes recessed by 420 µm. Our main reason for recessing the outer electrodes from the inner at all is to improve optical access—the maximum angle available to a laser increases as we mov-
e the outer electrodes further back.

52

Experimental Setup

Secular Frequency/MHz

7

Radial

Axial 6

5

4

3

2

−0.2

0

0.2 0.4 0.6

Outer electrode recess/mm

(a)

Trap Depth/eV

Radial

8

Axial

6

4

2

−0.2

0

0.2 0.4 0.6

Outer electrode recess/mm

(b)

Sum of Deviations/eV

0.1

Radial

Axial

0.08

0.06

0.04

0.02

−0.2 0 0.2 0.4 0.6 Outer electrode recess/mm
(c)
Figure 5.15: The variation in secular frequency and trap depth as we move the outer ground electrodes up and down in terms of their recess from the plane of the inner electrode face. Therefore, a negative value means the inner electrode is recessed inside the outer electrode. In this simulation we move from a practically impossible region (where the inner electrodes are entirely enclosed by the outer electrodes, meaning we have no way, in the current setup, of injecting an atomic beam to the trapp-
ing region, or of introducing a cooling laser beam), to a far-recessed region. We see that the potential more closely approximates a parabola as the outer electrode is moved further from the inner, but that the deviation is not large relative to the trap depth.

5.4.7 The effect of the ﬁbres on the pseudo-potential
We now consider the recess of the ﬁbres from the plane of the inner electrode face. We ﬁnd that as we move the ﬁbre closer to the face, the axial trap depth starts to increase by a very small amount. We intuitively see that the ﬁbre in this case is behaving as a ‘weak metal’. We considered, therefore, that the possibility of stray charge accumulating on the ﬁbre facet was the most signiﬁcant factor in our placement of the ﬁbre, and decided to recess it by approximately 50 µm inside the inner elect-
rode.

Secular Frequency/MHz Trap Depth/eV

x 106 4.5
4 3.5

53
3 Radial Axial
2.5

Experimental Setup
Radial Axial

3 2
2.5

2

1.5

0

0.05

0.1

0

0.05

0.1

Fibre Recess/mm

Fibre Recess/mm

(a)

(b)

Figure 5.16: The ﬁbre recess inside the inner electrode is plotted for a variety of realistic distances. We see that the axial trap depth is affected by this parameter. In the experiment we chose to use a recess of approximately 50 µm as a compromise between trap depth and ease of insertion, although the main reason for recessing the ﬁbres at all is to minimise the effect of stray charges on their surfaces. These simulations were run with an rf amplitude of 200 V and no a-value.

5.4.8 The electrode structure
The critical central electrode region (hereafter referred to as ‘the trap’) is shown in close-up in ﬁgure 5.17.
The trap is cylindrically symmetric and consists of two stainless steel tubes of outer diameter 0.457 mm and inner diameter 0.254 mm.9 An rf voltage of amplitude approximately 200 V and frequency 15 MHz is applied to these electrodes. They are ﬁxed inside two hollow ground electrodes of outer diameter 1.22 mm and inner diameter 1.02 mm.10 A ceramic spacer11 insulates the inner from the outer electrodes. The spacer is glued in place with UHV-compatible glue. The ceramic and glue are recessed so as -
to prevent a direct line-of-sight to the trapped ion at the centre of the trap. The inner electrodes protrude a distance of approximately 0.45 mm from the outer electrodes. See chapter 6 for the simulations of the trapping potential which allowed us to choose these dimensions and parameters.
A capacitor (which can be seen in ﬁgure 5.23 connects the electrode structure to the trap mount structure, holding the outer electrodes at rf ground.
The unique feature of this trap is that we can introduce ﬁbre-optic cables as close to the ion as we like, limited practically only by the inter-electrode separation. Inside each of the top and bottom electrodes is a Thorlabs BFH48-200 multimode ﬁbre, designed for ultra-violet to visible light. The ﬁbre has a cladding diameter of 230 µm and so ﬁts snugly inside the electrode. The ﬁbres are recessed by a distance of approximately 50 µm from the end of the electrode in order to prevent any degradati-
on of the trapping potentials12. The distance from the ﬁbre to the ion is 277 µm. The top ﬁbre is guided out of the electrode structure by a stainless steel hook attached to a mount on the bottom ﬂange. Both ﬁbres pass down through the vacuum system underneath the trap
9Coopers standard size stainless steel tubing, gauge 26. 10Coopers Special Size Stainless Steel Tubing. 11Frialit-Degussit Technical Ceramics. 12By the accumulation of stray charge on the dielectric surface.

54

Experimental Setup

0.420

0.223

rf electrode ground electrode

0.127 0.229
0.510 0.610

Figure 5.17: Cutaway view of the electrode structure showing the inner rf electrodes, outer ground electrodes and recessed ﬁbres. All dimensions are in millimetres. Ceramic spacers separate the ground and inner electrodes.
and are connected to feedthroughs on CF40 ﬂanges. See section 5.6 for more details on this. Calcium atoms are generated in a resistively-heated oven made of a 20 mm long tantalum tube
of outer diameter 1.02 mm and wall thickness 0.94 mm. From here, a vapour of calcium atoms passes into the collimator tube, which is a 6 mm-long stainless steel tube of outer diameter 0.51 mm and inner diameter 0.254 mm.13 This is positioned at a distance of approximately 2 mm from the centre of the trap. It has been found that a current of approximately 1.7 A provides a sufﬁcient ﬂux of atoms.
An alternative method of loading calcium atoms into the photoionisation region would be the all-optical method used by, for example, Sheridan et al. [83]. In this scheme calcium atoms are ablated from a target within the trap by a high-power laser. The resultant vapour is photoionised in the usual way at the trap centre. Photoablation can also be used to generate ions without the photoionisation step, if the laser intensity is high enough [84]. This method has the advantage of being quickly switch-
able. When enough atoms have been loaded, the laser can be stopped
13Coopers Needleworks standard size stainless steel tubing: gauge 25.

55

Experimental Setup

immediately, in contrast to a hot oven which takes some time to cool down, ﬁlling the trap with unwanted atoms all the while.
The electrode mounting structure is shown in ﬁgure 5.18. It is attached to a custom-made CF63 ﬂange, through which pass electrical feedthroughs to the atmosphere. These carry all the electrical connections noted on ﬁgure 5.23.

ground electrodes

rf electrodes

Oven collimator

Oven

Figure 5.18: A simpliﬁed drawing of the trap mount showing the electrodes, oven collimator and oven. The top ﬁbre is guided by the stainless steel hook.
All electrical connections to the trap pass through capacitative feedthroughs to atmosphere underneath the custom CF63 ﬂange which the trap sits on. Two copper wires carry the oven current in and out. There are four dc connections to micromotion-compensation electrodes, which are used to compensate for stray charge in the trap. These electrodes are the upper and lower rf ground electrodes, a side electrode—simply a short wire pointing approximately horizontally at the trap centre (hidden behind th-
e trap in ﬁgure 5.23, and the oven. All these connections pass out underneath the trap and into the metal box housing the resonator, from where they leave by various BNC and other connectors.
The dc voltages to the compensation electrodes are passively ﬁltered by low-pass RC ﬁlters before entering the trap. The feedthrough to vacuum also acts as a low-pass ﬁlter.

5.4.8.1 The solid angle subtended by the ﬁbres

One of the factors limiting the ability of the ﬁbres to collect ﬂuorescence from a trapped ion is simply how much of the ﬂuorescence the ﬁbre surface can ‘see’ from its position. We can quantify this in the solid angle subtended by the ﬁbres at the ion.
In general, the solid angle which an area on the surface of a sphere subtends at the centre of the sphere is given by

Ω

=

A r2

,

(5.6)

where A is the area of the surface and r is radius of the sphere.

56 The solid angle subtended by a conical surface is given by

Experimental Setup

Ω = 2π(1 − cos θ ).

(5.7)

If we imagine a cone of light which the ﬁbre is able to accept from an ion at the centre of the trap (ﬁgure 5.19), we can calculate the solid angle subtended by the ﬁbre at the ion.
The distance between the ion and the ﬁbre surface is approximately 270 µm (approximately because the ﬁbre recess is only approximately known), and the radius of the ﬁbre (core) is 100 µm, and so the half-angle subtended by the ﬁbre at the ion is 20.3◦. Then the solid angle is, from equation 5.7, Ω = 0.39 steradians. For both ﬁbres, we can double this: Ω = 0.78 steradians. This is about 6% of the full 4π solid angle.
By a similar argument we can quantify the limitations of the chamber windows on ﬂuorescence detection by the PMT or camera by calculating the solid angle subtended by the windows at the ion. This is constrained by the brass clamps outside the windows. The radius of the clamp aperture is 13 mm, and the radial distance from the ion to the window is the radius of the inscribed circle of the octagonal chamber plus the thickness of the window, that is (38.5 + 6) mm, so the half-angle subtended by the w-
indow at the ion is 18.7◦. The solid angle, then, is 0.33, or 2.6% of the full 4π solid angle.

Figure 5.19: The solid angle subtended by the ﬁbres at the ion.
5.5 RF drive and electrical connections
5.5.1 RF drive
Any system for generating the rf voltage for an ion trap should ideally produce a single frequency with minimal noise. Harmonics of the rf frequency and noise can cause heating of the ion which leads to low trapping lifetimes. A resonant circuit is used to ﬁlter out unwanted frequencies.
The oscillating trapping potentials are generated by a Rhode and Schwarz SMG signal generator. From there the signal passes to a Mini Circuits LZY-1 +44 dB rf ampliﬁer. The signal then passes

57

Experimental Setup

to an autotransformer which steps up and ﬁlters the signal before it enters the trap.

5.5.1.1 The autotransformer

The components of the trap taken together have a total capacitance and resistance. If we place an inductance in series with this we have a series LCR circuit (ﬁgure 5.20), and we can use the properties of such a circuit at resonance to our advantage.
LCR circuits have a complex impedance which depends on the driving frequency, given by:

Z

=

R

+

iω

L

+

1 iωC

,

(5.8)

where

ω

is

the

angular

frequency

of

the

voltage

source.

At

resonance,

ω0

=

√ 1/ LC;

the

impedances

of C and L cancel each other because the voltages across them are equal and opposite. So we can

say that at resonance the impedance is entirely real, that is, resistive.

L

C

R

RESONATOR

TRAP

Figure 5.20: A series LCR circuit.

The inductance that makes the LCR circuit with our trap is an autotransformer. This not only steps up the rf amplitude, but in theory ensures only a single narrow frequency band is passed to the trap (the resonant frequency of the circuit). An autotransformer is a transformer with just one single winding—a single coil of wire forms both the primary and secondary winding. It has the advantage of being simpler and more compact than a two-winding transformer, but there is no electrical insulation bet-
ween the windings. The autotransformer used in our ion trap consists of 30 turns of enamelled copper wire wound around a teﬂon cylinder of diameter 28.8 mm and length 156 mm. The ﬁrst 2 turns form the primary coil and the last 28 turns form the secondary coil. One end of the coil is connected to the common ground and the other end to the load—that is, the trap. The rf input is connected as shown in ﬁgure 5.21. The ratio of primary to secondary voltage is given by the ratio of number of turns on th-
e coils, and so we expect an ampliﬁcation of a factor of 14.
To ﬁrstly estimate the resonant frequency of our coil-trap system, we can simulate an LCR circuit using a two-turn transformer. Calculating the inductance of each coil using the formula:

L = µ0N2A ,

(5.9)

l

where A is the (circular) area enclosed by the coil, µ0 is the vacuum permability, N is the number of turns, and l is the length of the coil. This gives 0.02 µH and 4.9 µH respectively for the primary and

secondary coils. We measure the capacitance of the trap approximately, between the rf feedthrough to vacuum and the vacuum chamber ground using an LCR meter14, as 40 pF. Modelling the circuit15

14ISO-TECH LCR 819. 15Using the circuit simulator QUCS.

To ground

58

Experimental Setup

RF out

RF in

Figure 5.21: A drawing of the autotransformer used in our trap with its three electrical connections marked.

with an rf amplitude of 1 V shows a resonance at ν ≈ 13 MHz, with a FWHM ∆ν ≈0.35 MHz. The results of the simulation are shown in ﬁgure 5.22(a). We quantify the narrowness of the resonance with the quality factor or Q-factor of the resonator, given by:

Q= ν , ∆ν

(5.10)

bearing in mind that this equation applies to powe√r, not voltage, so instead of using the full width at half maximum, we must use the full width at 1/ 2× maximum, which in this case gives Q ≈ 56.

We would now like to compare the real resonance of the trap/resonator setup with the simulation.

2
15 1.5
10 1

Voltage/V Voltage/V

5

0.5

0

0

0

10

20

30

0

10

20

30

RF Frequency/MHZ

RF frequency/MHz

(a) Simulated resonance.

(b) Experimental resonance.

Figure 5.22: (a) The resonance of a simulated LCR circuit and (b) the resonance of the real trap, with Lorentzian ﬁts. The Q-value of the experimental resonance is determined from the ﬁt to be 41, while from the simulated resonance it is 56.

To measure the resonance of the circuit, two methods are employed—ﬁrstly we use a single coil of wire around the end of the autotransformer core as an rf pickup to observe the changing rf amplitude delivered by the transformer as we vary the frequency. This data is shown in ﬁgure 5.22(b). The data shows two peaks, at around 15 MHz and 19 MHz. The second peak may result

59

Experimental Setup

from the inﬂuence of the monitor coil on the circuit. The second method used is to place an rf reﬂectometer in the path of the rf signal to the trap.
For no power to be reﬂected back from the trap, the reactance of the trap must be zero, that is, the impedance must be entirely resistive—the resonance condition. Also, that resistance must equal the output resistance of the rf source. The power absorbed by an LCR circuit is Lorentzian in shape, with a full width at half maximum (FWHM) γ = ν/Q.16 Fitting this data gives the centre of the resonance to be at 15.4 MHz with a FWHM of 0.45 MHz. This gives a quality factor of Q ≈ 34.
The two methods both give a good approximate idea of the resonance condition of the trap, but the ﬁrst method is possibly more useful for our purposes, since it is more representative of the quantity - the voltage supplied by the coil - which we actually want to use. The second method tells us essentially when the impedance of the circuit matches 50 Ω. Neither method necessarily provides an accurate measurement of the resonance frequency of the trap, since both are inﬂuenced by connecting wires an-
d neighbouring components.
Since we only see a dip in the reﬂected power around 15 MHz, it seems reasonable to assume that the 15 MHz peak in the monitor coil signal represents the ‘real’ resonance. To determine the quality of this resonance, therefore, we ﬁt to√that part of the data and obtain a centre resonance of approximately 15.03 MHz with a width at 1/ 2× the amplitude of 0.37 MHz. This gives a quality factor Q ≈ 41.
There are a number of reasons why the quality of our resonator might differ from the expected value. Chief amongst these may be imperfect impedance matching between the rf source and the trap. We also do not know the coupling between the coils of the autotransformer.
Suggested improvements to the resonator design would be to to adjust the coupling between the coils of the transformer, perhaps by using a two-coil device, so that the impedance-matching condition is met.
The electrical connections to the trap are shown in ﬁgure 5.23. In addition to the rf connections and the oven, there are four dc ‘compensation’ electrodes shown. These voltages are used for micromotion-compensation purposes, and will be discussed in detail in section 6.2 on page 70.

16The shape is Lorentzian only for high-Q resonators, that is, resonators with narrow resonances.

60

Experimental Setup

Figure 5.23: The electrical connections to the trap.

5.6 The Vacuum System

The term Ultra-High-Vacuum is not strictly deﬁned by any regulatory body, nor is it used consistently. However, for the purposes of our work we will use the deﬁnitions given by the National Physical Laboratory.[85].
The following table summarises the various ‘degrees of vacuum’ in millibars.17

Degree of vacuum Low vacuum Medium vacuum High vacuum Very high vacuum Ultra-high vacuum (UHV) Extreme ultra-high vacuum (EHV or XHV)

Pressure Range/mbar
1000–30 30–1×10−3 1×10−3–1×10−6 1×10−6–1×10−9 1×10−9–1×10−12 < 1×10−12 mbar

Table 5.1: Degrees of vacuum

By these deﬁnitions then, our trap is held in ultra-high-vacuum. For the duration of most of the work described here, the pressure was 1×10−10–1×10−11 mbar.
The octagonal vacuum chamber, pictured in ﬁgure 5.24, is 77 mm in diameter (inscribed circle),
17A note on pressures—1 bar = 1×105 Pascals = 750 Torrs. Atomospheric pressure is approximately 1 bar. We will generally use millibars in this work.

61

Experimental Setup

Figure 5.24: A drawing of the trap enclosed in its vacuum chamber.
and sits 140 mm above the optical table. It is welded to a CF63 ﬂange, while the trap itself is attached to a second CF63 ﬂange below this. It has 8 anti-reﬂection-coated windows, and one top window, held in place with an indium-wire seal and brass clamp. Three vacuum pumps bring the chamber from atmospheric pressure to ∼ 10−10 mbar. All pumps are located under the table. First, a roughing pump, so called because it produces a ‘rough’ vacuum—approximately 1×10−3 mbar. Then, a turbomolecular pump, -
or ‘turbo’ pump takes over. This consists of a spinning turbine which sucks gas from its inlet to the exhaust with successive spinning blades pushing the molecules down and compressing them eventually to the roughing pressure. Finally, an ion pump reduces the pressure to around 1×10−10 mbar and maintains it. Ion pumps work by creating clouds of electrons by a very high voltage (∼1 kV) then trapping them using a very high magnetic ﬁeld (∼1000 Gauss). The clouds of electrons ionise gas molecules pas-
sing through the assembly by collision and the resultant positive ion is accelerated towards a cathode. It is then removed from the vacuum by reacting chemically with the material of the cathode. In our setup, once UHV has been achieved, the roughing and turbo pumps are switched off and only the ion pump maintains the vacuum.
We have also used a titanium sublimation pump to reduce pressure when we have been unable to reduce pressure using just the ion pump. This kind of pump is very simple—a current of tens of Amps is passed through a titanium ﬁlament, causing sublimation. The chamber walls become coated with the titanium produced. Since titanium is very reactive, it forms chemical bonds with gas molecules in the chamber, causing a drop in pressure.
Another issue relevant to pressure is that of rf power dissipated in the trap. This causes heating which causes the pressure to rise. Using an rf power meter, we have found that it is possible to dissipate approximately 0.5 W of rf power in the trap before the pressure increases signiﬁcantly.

62

Experimental Setup

Underneath the CF63 trap ﬂange a tube travels down through the metal rf autotransformer box, through a hole in a removable breadboard attached to the optical table, and is welded to a custom CF150 ﬂange which is bolted to the underside of the table. Figure 5.25 shows from top to bottom the chamber, the resonator box, the breadboard and optical table, the custom CF150 ﬂange bolted to the underside of the table, and ﬁnally the reducing cross leading down to the turbo pump beneath. In principle, the -
breadboard and optics could be entirely removed from the optical table, giving full access to the trap and chamber, for maintenance or bake-out work. In practice, however, some of the optics extend onto the surrounding optical table, so this has not been possible. An improvement for the next iteration of this trap would be to make sure that everything is included on the one removable breadboard.

Resonator box Optical table

CF63 flange Tube from chamber down through table

Custom-made CF160 flange bolted to underside of table

CF160 reducing cross

4 x CF40 half nipples

Figure 5.25: The chamber and vacuum ﬂange assembly. Beneath this is the turbo pump.
The whole chamber and vacuum structure is baked for several days at around 100◦C to remove any water molecules, cleaning agent residues, solvents and any other molecules that will inevitably

63

Experimental Setup

be present on and in the metal surfaces inside the chamber and ﬂanges. The temperature is restricted to 100◦C because of the indium seals on the windows, but this has not had any detrimental effect on our vacuum.

5.7 Magnetic Field Control

For reasons that will be explained in detail later, we would like to ensure that the magnetic ﬁeld surrounding the trap is of a known magnitude and direction. To this end we must ﬁrst compensate for the Earth’s ≈ 0.5 G (50 µT) magnetic ﬁeld and then create a bias ﬁeld of known magnitude and direction.
We surround the trap with three pairs of coils, as shown in ﬁgure 5.26, their axes orthogonal to each other. Above and below the trap are two circular coils of diameter 138 mm, separated by approximately 110 mm. This provides an approximately homogeneous magnetic ﬁeld along the (cylindrical) axis of the trap. To provide an homogeneous ﬁeld we would use the Helmholtz conﬁguration, in which we separate the coils by their radius. In our case the set of coils had already been built for another experim-
ent, and so we had to balance the potential inhomogeneity of the ﬁeld produced against the time required to machine and build a new set of coils. Since we were only concerned with the homogeneity of the ﬁeld in a very small central area of the trap, we decided to use the existing coils, and characterised them as follows. For two concentric circular coils a distance d apart and with N turns of wire, the magentic ﬁeld on their axes at the midpoint between them is given by

B

=

µ0NI

[R2

+

R2 (d/2)2]3/2

,

(5.11)

and the magnetic ﬁeld produced on the axis of two rectangular coil of side lengths l and w at their midpoint is given, using the Biot-Savart law, by

 B = µ0NI 
4π

l

l2 2

+

d2

×

+

l2 4

+

d2

w

w2 2

+ d2

×



.

w2 4

+ d2

(5.12)

The magnetic ﬁeld produced was measured at the centre of each pair, and found to be 22 G/A

for the circular pair and 6 G/A for the rectangular pair. Using the above equations, there are

approximately 250 turns of wire on the circular coils and 300 turns on the rectangular coils.

The two radial dimensions are covered by two pairs of rectangular coils, which again provide

approximately homogeneous ﬁelds in the trapping region.

64

Experimental Setup

Figure 5.26: A drawing of the trap surrounded by the magnetic ﬁeld coils.
5.7.1 Experiment Control
Throughout the experiments reported in this thesis control has been provided by LabView running on Windows XP. LabView vi’s have mainly been written by Dr. Hiroki Takahashi, and control most of the devices we have used. This includes switching the oven on and off, switching the shutter for the photoionisation lasers, reading, recording and cross-correlating signals from the PMTs, automatically compensating for micromotion and measuring secular frequencies (chapter 6).
5.7.1.1 Controlling laser power—accousto-optic modulators
The 397 nm light from the Toptica system and the light from the 866 nm laser is split into several ‘arms’ using a series of half-wave plates and polarising beam splitter (PBS) cubes. A PBS essentially splits linearly-polarised light into its orthogonal components, transmitting one and reﬂecting the other. By altering the input polarisation one can alter the power passed to that arm of the setup. By this method we divide the 866 nm and 397 nm laser power into the amount of beams we require for our -
experiment, and for other experiments in the lab.
After power distribution, each 397 nm, 866 nm and 423 nm beam passes through an accoustooptic modulator (AOM) in the double-pass conﬁguration.[86, 87]. A typical arm of the 866 nm laser setup is shown in ﬁgure 5.27. The efﬁciency of diffraction by the AOM into the ﬁrst order depends on the amplitude of the rf delivered to the crystal, and this allows us to control the power of the beams at the trap (by simply varying the amplitude of the rf sent from the to the AOM), and to shutter the beams (by s-
etting the rf amplitude to zero). By varying the frequency of the rf delivered to the AOM, one can vary the amount by which the diffracted light is shifted in frequency, and so exercise control over the laser wavelength without tuning the main laser diode, and without affecting the coupling of the laser to the ﬁbre. This feature was not used for the work presented here.

65

Experimental Setup

Polarising beam splitters

Returning first-order beam overlapped with outgoing beam

First-order diffracted beam

Zeroth-order beam

Lens Returning

Quarter-wave plate Mirror

zeroth-order beam

Beam blocker

Figure 5.27: A typical arm of the 866 nm laser AOM setup showing the main components and the beam path.

Chapter 6
Characterisation of the endcap trap
Every ion trap has a unique set of parameters, or characteristics, that deﬁne its operation. These depend mainly on elements of the trap geometry, for example the size and shape of the electrodes, the proximity of dielectrics to the ion, or the rf supply. In this chapter a characterisation of the endcap trap is presented, starting with some comments on trapping single ions, then moving on to the problem of micromotion. We end with a thorough investigation of the secular frequencies of the ions in -
the trap and the trap depth, with a comparison to the expected values from simulations.
The format of this chapter roughly follows the day-to-day procedure we followed in preparing a single ion for the more advanced experiments to be described in later chapters. In outline, then, this consists of:
1. Trapping a single ion. 2. Micromotion compensation. 3. Deﬁning the magnetic ﬁeld. 4. Performing laser spectroscopy on the trapped ion to ensure laser detuning is optimal.
The measurements of secular frequencies and trap depth are not a part of the preparation routine for any particular experiment, but are included as ﬁgures of interest in describing the trap. We ﬁnd in the literature these ﬁgures often quoted in descriptions of ion traps, and their use gives the reader a good general idea of the trapping potential of a particular trap.
6.1 Trapping ions
The procedure for trapping a single ion is as follows. First, the cooling and photoionisation lasers are switched on and allowed a warm-up period of anything from one to several hours. Next, the AOMs are switched on manually, and the voltages sent to their VCOs are adjusted using a LabView vi until suitable laser powers are reached. Typical powers are:
1. 397 nm cooling lasers: ∼20 µW each. 2. Repumper lasers: ∼400 µW.
66

67 3. Photoionisation lasers: ∼400 µW each.

Characterisation of the endcap trap

The laser frequencies are set and locked using the methods described in section ?? on page ??.

Often, the temperature of the laser diodes will need to be adjusted to bring the wavelength close

enough for ﬁne adjustment. For optimal Doppler cooling, we saw in chapter 3 that the detuning should be ∆ = −Γ/2. We know that Γ for the S1/2 ↔P1/2 transition is around 20 MHz (section 3.1.1, page 17), and this translates to a detuning of approximately 0.01 pm1. In practice, however,

the wavemeter only has an stated accuracy of ±60 MHz, so when we need optimal detuning, we

determine it by examining spectroscopic lineshapes.

Once the lasers are ready, the calcium oven is switched on using a LabView vi signal to a

current power supply. A current of around 1.8 A for around 45 seconds usually provides sufﬁcient

atomic ﬂux across the trapping region to trap ions. The geomtry of the trap means that we rarely

trap more than two ions at a time, but should this occur we eject unwanted ions from the trap by

brieﬂy heating them. This is done by blocking the repumper laser for a second or two. Cooling is

drastically reduced and ions far from the trap centre, that is, hotter ions, are preferentially heated

out of the trap. By this method we can usually reduce the number of ions to one very quickly.

Figure 6.1 shows a single ion in the trap with the top electrode visible. We are able to determine the

coordinates from knowing the magniﬁcation of the optics in front of the camera and the resolution

per pixel of the camera’s CCD chip.

In ﬁgure 6.2 we implement the alternative repumper method described in section 3.33, but

using an extremely low-power 850 nm laser on the D 3 ↔P 3 transition. The sudden drops in

2

2

ﬂuorescence reveal the failure of the weak 850 nm laser to pump the ion out of the metastable D 3

2

state, that is, the abrupt transition of the electron to and from the D 3 state. These ﬂuorescence

2

spectra demonstrate nicely the phenomenon of quantum jumps.

1A note on detunings: We measure on our wavemeter the fundamental frequency of light from the Toptica frequency-
doubling diode laser system, not the doubled frequency. We have experimentally determined the resonance of the
S1/2 ↔P1/2 transition (as will be shown by spectroscopy later) to lie around a fundamental wavelength of 793.91835 nm. In day-to-day ion trapping, where the cooling is not critical, we operate at a wavelength of around 793.91840 nm, that is, a detuning of 0.00005 nm. Since ν = c/λ , we calculate the frequency detuning as ∆ν = −(c/λ 2) × ∆λ , which amounts
to approximately 71 MHz. This means that the frequency-doubled light is detuned by twice this, or 142 MHz.

68

Characterisation of the endcap trap

300

200

y−coordinate/µm

100

0

−100

−300 −200 −100

0

100 200 300

x−coordinate/µm

Figure 6.1: A single ion in the trap. The upper electrode is visible bathed in scattered 397 nm laser light, with the lower electrode slightly out of picture. The origin of coordinates has been set to the ion’s position.

2

Fluorescence/kHz

1.5

1

0.5

0

2

4

6

8

10

12

Time/s

Figure 6.2: Quantum jumps on the D 3 ↔P 3 transition. Here we use an extremely low power 850 nm

2

2

repumper at 0.5 µW. The low repumping efﬁciency on this transition causes the ion to become

occasionally shelved in the metastable D 3 state, where it stays until pumped out by a 850 nm
2
photon (or naturally decaying after around a second).

69

Characterisation of the endcap trap

Figure 6.3 shows scans over the S 1 →P 1 397 nm resonance using each of the three principle

2

2

cooling lasers indicated in ﬁgure 5.1 on page 37. Spectroscopy using the low-scatter beam is shown

in section 7.2.1 on page 97.

Fluorescence/kHz Fluorescence/kHz

60
HWHM = 51.8 MHz Peak = 40.2 kHz 30 MHz detuning = 30.5 kHz Background = 0.6 kHz
40 Sig/Bg = 50.4
20

80
HWHM = 38.8 MHz Peak = 65.6 kHz 30 MHz detuning = 43.8 kHz
60 Background = 2.9 kHz
Sig/Bg = 14.3
40
20

0

0

−200 −150 −100 −50 0 50 −200 −150 −100 −50 0 50

Detuning/MHz

Detuning/MHz

(a) Beam 4

(b) Beam 6

50
HWHM = 47.3 MHz Peak = 35.9 kHz
40 30 MHz detuning = 25.6 kHz
Background = 0.2 kHz Sig/Bg = 112.1
30

Fluorescence/kHz

20

10

0 −200 −150 −100 −50 0 50
Detuning/MHz
(c) Beam 7

Figure 6.3: Spectroscopy of the S 1 →P 1 cooling transition in a single ion using the three main cooling beams:

2

2

‘beam 4’, ‘beam 6’ and ‘beam 7’, named for the numbering system of the AOM branches in the

Toptica 397 nm laser setup. Micromotion compensation had been optimised. The lineshapes are

ﬁtted to a half-Lorentzian curve. The signal-to-background ratios and ﬂuorescence at a detuning

of 30 MHz are as shown. The ﬂuorescence was measured at the free-space side PMT.

70
6.2 Micromotion minimisation

Characterisation of the endcap trap

The ability to localise a trapped ion very precisely at the rf zero-point in a trap is an important prerequisite to many cavity-QED experiments (see chapter 4). However, stray electric ﬁelds resulting from build-ups of charge on dielectrics inside the trap structure can displace an ion away from the trap centre. The effect of this is that the ion experiences a driven motion due to the ac electric ﬁeld at the new position. The further from the trap centre the ion moves, the greater is the amplitude-
 of the micromotion. This driven motion is termed excess micromotion, in contrast to the intrinsic micromotion induced as the ion’s secular motion moves it back and forth through the rf zero-point. Unlike intrinsic micromotion, excess micromotion cannot be reduced by laser cooling. The Doppler shift in the ion’s resonance frequency, causing a spread of frequencies ∆ω = 2ω0/c, is an unwanted extra factor in the experiments which will be described later, and in our work has been signiﬁcantly reduced-
 by the two methods described in this section.
Compensation of stray ﬁelds in three dimensions is achieved using the four dc compensation electrodes shown in ﬁgure 5.23 on page 60. In the radial plane, dc is applied to the oven collimator and to a thin wire positioned approximately 90◦ radially from it (the ‘side’ electrode)2. In the axial plane, dc is applied to the top and bottom ground electrodes (see section 5.4.8 on page 53). Signals are sent from a LabView vi to a National Instruments data acquisition (DAQ) device3. This generates analog-
ue voltages which are sent on to the compensation electrodes.
We introduce four parameters: u, v, w and a4 to represent these voltages in our LabView control software, and we will denote the dc voltages sent from the DAQ as:

• A0 = u: Oven

• A1 = v: Side

•

A2

=

w+

a :

Upper ground electrode.

2

• A3 = −w + a : Lower ground electrode. 2

In addition, before reaching the electrodes the signals pass through a high-voltage ampliﬁer, so there is a known gain and offset in the real compensation voltages realtive to those sent from the DAQ.
The effect of u and v is to push the ion along the direction of the oven and side electrode respectively, while w has the effect of moving the ion up or down (equal and opposite voltages are applied to top and bottom). a provides an dc offset to the upper and lower ground electrodes. We can think a as similar to the a-value described in equation 2.9 on page 11, although it differs in that here the dc is on the ground electrodes, rather than the rf electrodes.
These, then, are the tools with which we move the ion to the rf-zero point using the following methods.
2Note that the side electrode has a component in the axial direction. It was not possible make it entirely radial, for optical access reasons.
3NI-USB 6229. 4Not to be confused with the a-parameter of chapter 2.

71

Characterisation of the endcap trap

6.2.1 Coarse micromotion minimisation

The principle of this method is that if the ion is sitting at some position far from the trap rf zero-point, as illustrated in ﬁgure 6.4 with the parabola being the trap pseudo-potential, then if we reduce the steepness (or ‘stiffness’) of the trapping potential (recall from chapter 2 that we can do this by altering the rf amplitude), then the ion will ‘drop’ to a new position. The objective is to move the ion to a position such that changing the rf amplitude causes no observable movement. We watc-
h the ion with the EMCCD camera, and mark its position on the screen. We then decrease the trap stiffness. If the ion moves, we push it back to its original position with the compensation voltages. We then decrease the trap stiffness and repeat the process until the ion’s position is independent of the rf amplitude. We see from ﬁgure 6.4 that this happens at the rf zero-point. This method is not sufﬁcient, however, since we cannot use it to observe the micromotion in the direction of the EMCCD cam-
era. Plus, we cannot use it for particularly sensitive adjustments.

Trap closed

Trap open
Figure 6.4: Coarse micromotion compensation. If the ion is at some point far from the trap rf zero point, then if we suddenly decrease the rf amplitude (‘open’ or weaken the trapping potential), then the ion will shift to a new position, and this movement will be obvious on a CCD camera.
6.2.2 RF-Photon correlation
In order to more precisely minimise the micromotion, we look at the correlations between the arrival times of photons from the PMT positioned at the side of the trap, and a point in the phase of the trap rf [88]. If we consider micromotion along the direction of one red-detuned cooling laser ﬁrst, we can see that the probability that the ion will scatter a photon increases as the ion moves towards the laser, and decreases as it moves away. Thus there is a correlation between the phase of the rf an-
d the ion’s ﬂuorescence and this manifests as a sinusoidal variation in ﬂuorescence. The objective of this method, then, is to detect this variation, and reduce the amplitude of the sinusoid as much as possible. The device used to measure the times between photon arrivals and the rf signal is an ACAM AM-GP2 time-to-digital converter.
We found that using the main trap signal generator to supply both the trap rf signal and the

72

Characterisation of the endcap trap

ACAM correlation signal introduced some noise to the trap which may have caused poor trapping lifetimes. As a result we implemented the rf signal routing shown in ﬁgure 6.5.

To trap

Rhode & Schwartz Signal Generator: 15 MHz

ACAM

Inverting amplifier

DS3435 Signal Generator

Figure 6.5: The rf-photon correlation signal path. To avoid splitting the signal from the trap rf signal generator the following system is used. We take the 10 MHz timebase from the trap rf drive and amplify it with an inverting ampliﬁer. This drives a signal generator which generates a 15 MHz rf signal in phase with the trap drive. This is then divided by four and the ﬁnal signal sent to the ACAM card. The inverting ampliﬁer is used because the amplitude of the 10 MHz timebase output of the Rhode-
 & Schwartz is not enough to drive the DS345 signal generator. By dividing the rf signal by four we give ourselves four times as much correlation data as we would have otherwise had.

A typical series of rf-photon correlation spectra is shown in ﬁgure 6.6. These data are acquired in the following manner: acquire 20,000 data points (a data point is one ∆t = trf − tphoton), plot a histogram of the time differences (these will never exceed ∼0.26 µs because the rf frequency is ∼15 MHz and we observe correlations over four rf cycles), and ﬁt a sine to this.

6.2.3 Automatic 3D micromotion minimisation
The electric ﬁeld at a position x is given by (apart from a constant)

E(x) = (x, y, −2z),

(6.1)

with C a constant. Consider the micromotion along the direction of one cooling laser, pointing in the direction (k) = (k1, k2, k3), then that micromtion is minimised when there is no component of
the electric ﬁeld along that direction. That is,

E(x) · k = 0.

(6.2)

We can write this as

k1x + k2y − 2k3z = 0.

(6.3)

This is the equation of the plane

73

Characterisation of the endcap trap

x · n = 0,

(6.4)

with

n = (k1, k2, −2k3).

(6.5)

The distance an ion is pushed is proportional to the voltage applied to the electrode5. Consider the real-space directions u,v and w as deﬁned by the directions of the compensation electrodes, with a voltage determined by u, v, and w. Then the ion’s displacement is given by

x = Au(u − u0)u + Av(v − v0)v + Aw(w − w0)w,

(6.6)

where Au, Av and Aw are the gains of the ampliﬁers used to supply the ﬁnal voltages. u0, v0 and w0 represent stray electric ﬁelds in the trap. Substituting this into equation 6.4, we have

Au(u − u0)u · n + Av(v − v0)v · n + Aw(w − w0)w · n = 0.

(6.7)

Our scheme for automatic 3D micromotion minimisation uses a LabView vi and the above theory, but operates entirely in uvw-parameter-space (‘uvw-space’). The program operates in the following way:

1. Start with laser 1. By moving around in uvw-space, ﬁnd a set of voltage triplets deﬁning a micromotion minimum plane P1. Let n1 be the normal vector to the plane in uvw-space (ﬁgure 6.8(a)). From equation 6.5 we see that once we know this vector, provided the direction of the laser never changes, it is ﬁxed. In principle, then, we only need to empirically determine this direction once, and we can then use it again and again. The position of the plane P1 along this vector however can, and does, -
change, depending on stray charges inside the trap. So if we move along a direction parallel to the normal vector, call it d1, we must eventually encounter the plane P1 (ﬁgure 6.8(b)). The program does this by moving ‘up’ or ‘down’ a direction parallel to the normal vector, acquiring 20,000 data points in the manner described above, for each set of uvw-values, and attempting to reduce the amplitude of the sine ﬁt for each set. The number of uvw-points attempted can be set at will, but generally 5 -
were used. It then performs a linear ﬁt on the 5 points and moves to the zero-micromotion point in uvw-space. A typical run of this program for one laser is shown in ﬁgure 6.7.
2. Repeat step 1 with laser 2 to determine n2.
3. Find the intersection of P1 and P2. This is the line L (ﬁgure 6.8(c)). Since this lies on the planes P1 and P2, it must be perpendicular to both n1 and n2, so we can write L n1 × n2. If we move perpendicular to L, then we must eventually hit it, but we must also remain on one
5If a uniform electric ﬁeld is created then F = eE. A greater electric ﬁeld means a proportionally greater force, therefore acceleration, and since φ = E dr, then distance travelled is proportional to potential difference.

74

Characterisation of the endcap trap

of the planes P1, or P2, so we can say that the direction to move, d2, must satisfy:

d2 ⊥ n1 d2 ⊥ L ⇒ d2 ⊥ n1 × n2 ⇒ d2 n1 × (n1 × n2)

(6.8) (6.9) (6.10) (6.11)

4. The global micromotion minimum must lie somewhere along the line L. The third direction, then, is just parallel to L (ﬁgure 6.8(d)).
We can summarise the three directions then, as:

d1 = n1 d2 = n1 × (n1 × n2) d3 = n1 × n2.

(6.12) (6.13) (6.14)

75

Characterisation of the endcap trap

80

80

Number of events

Number of events

60

60

40

40

20

20

0 0 0.05 0.1 0.15 0.2
Time/µs
(a)
80

0 0 0.05 0.1 0.15 0.2
Time/µs
(b)
80

Number of events

Number of events

60

60

40

40

20

20

0 0 0.05 0.1 0.15 0.2
Time/µs
(c)
80

0 0 0.05 0.1 0.15 0.2
Time/µs
(d)
80

Number of events

Number of events

60

60

40

40

20

20

0 0 0.05 0.1 0.15 0.2
Time/µs
(e)

0 0 0.05 0.1 0.15 0.2
Time/µs
(f)

Figure 6.6: Moving in uvw-space. RF-photon correlation spectra for six different sets of u,v, w compensation voltage parameters. The sine ﬁt gives the amplitude and phase of the micromotion for those parameters. The ﬂip in the phase of the sine as the micromotion passes over the zero micromotion point is evident in (a) and (e). See the text for details.

76

Characterisation of the endcap trap

Micromotion amplitude/arb

0.2

Micromotion amplitude

0.15

Linear fit

0.1

0.05

0

−0.05

−0.1

−0.15 −0.02 −0.01 0 0.01 0.02 s−parameter

Figure 6.7: Automatic 3D micromotion minimisation. A plot of micromotion amplitudes taken from the sine ﬁt in ﬁgure 6.6. The ‘s-parameter’ of the axis refers to the distance, in uvw-space, along the normal vector to the micromotion minimum plane. The distance along this direction that the program has access to, in its attempts to ﬁnd the micromotion zero-point, can be set by the operator.

6.2.3.1 Sensitivities of the techniques
The ﬁrst technique, that of monitoring the spatial motion of the ion as the trap stiffness is changed, is less sensitive than that of rf-photon correlations. We ﬁnd that after we have done what we can to eliminate the ion’s spatial dependence on the rf amplitude, the rf-photon technique always shows a measurable micromotion in the correlation spectra. This makes sense if we consider that we cannot see the ion’s motion in the direction of the camera, and also that the technique cannot detect phase -
differences in the rf applied to the top and bottom electrodes (considering the ion’s equation of motion, we see that its average position would not change even if the phase of the rf did). The relative merits of the techniques are discussed in much greater detail in [89].

77

Characterisation of the endcap trap

(a) Determining the normals

(b) Laser 1.

(c) Lasers 1 and 2.

(d) Lasers 1, 2 and 3.

Figure 6.8: Mapping the parameter space of the dc compensation voltages. (a): A real micromotion plane ﬁtted to, in this case, 9 uvw-triplets, each representing an empirically determined point of minimum micromotion. This is performed for each laser. Once we know the normal for each laser we follow the procedure outlined in the text and shown in the following three ﬁgures. (b): A theoretical micromotion minimum plane for one laser. To ﬁnd this plane we move along its normal vector until we hit it.-
 (c): A plane for laser 2 intersects plane 1. Now we need only move along the intersection line to ﬁnd the global minimum. (d): The intersection of the planes of all three lasers. See the text for more details.

6.2.4 Sources of stray ﬁelds after loading
We would like to know whether build-up of stray charge on the ﬁbres is a signiﬁcant factor in the displacement of the ion from the trap rf-minimum. By tracking the changing micromotion

78

Characterisation of the endcap trap

compensation voltages over time, we can determine from which direction the stray charge originates. We consider ﬁrst the micromotion compensation in the axial direction, and let the steady-state
compensation voltage be w0. Immediately after loading the trap, a stray ﬁeld appears, which decays exponentially and consequently requires an exponentially decreasing compensation voltage. The top and bottom electrodes will require not only a different compensation voltage, but a voltage of opposite sign. The total voltage required is then

w(t) = w0 + w+e−γ+t − w−e−γ−t .

(6.15)

The parameters are all correlated, and so can’t be obtained by simply ﬁtting to this function. To allow us to extract useful ﬁt parameters we make the following deﬁnitions:

w± = w¯ ± ∆w γ± = γ¯ ± δ .

(6.16) (6.17)

We substitute these deﬁnitions into equation 6.15 and in the approximation that δt 1 we have

w(t) ≈ w0 + 2[w¯δ t + ∆w]e−γ¯t .

(6.18)

We see from this that if w+ and w− were the same, then ∆w = 0, and if the decay rates were the same, then δ = 0 and w(t) = w0. However, if there is a difference in the quantity of charge on the top and bottom electrodes (∆w = 0), or a difference in the decay rate (δ = 0), then exponentially changing compensation voltages must be applied. A ﬁt to equation 6.18 cannot give us w¯, and so
we cannot know the absolute amount of charge on the electrodes. However, we are more interested
in the direction of the stray ﬁelds, so we proceed towards that end.
There are four independent ﬁtting parameters, making the ﬁtting function

w(t) = p1 + [p2t + p3]e−t/p4 .

(6.19)

For this model, we assume that the decay parameter γ is the same for all micromotion compensation components, making three ﬁt parameters for each compensation electrode, p1, p2, p3 and one global parameter p4.
We tracked the change in the three micromotion compensation voltages over time. Figure 6.9 shows one such measurement, together with a ﬁt to the model described in this section. In order to extract the direction of the stray ﬁeld source we ﬁrst make a 3D ﬁnite-element calculation of the electric ﬁeld at the trap centre in response to voltages applied in the direction of the four dc electrodes, which are the wire electrode in the +x-direction, the oven in the +y-direction, the top ground electrode -
in the +z-direction, and the bottom ground electrode in the −z-direction. This gives the following result:

Ex  0.0

Ey

=

0.684 

Ez

0.0

0.201 0.0 −3.513 × 10−3

0.0  u

−2.45 × 10−3  v  mm−1.  

0.375

w

(6.20)

−1.35

79

Characterisation of the endcap trap

u/V

−1.4

v/V

0
1.16 1.14 1.12
0

1000

2000

3000

4000

1000

2000

3000

4000

w/V

1.9

1.8

1.7

0

1000

2000

3000

4000

time/s

Figure 6.9: A log of the variation in the three micromotion compensation voltages over time, together with a ﬁt to equation 6.19

At time t = 0, we have a steady-state ﬁeld, given by u0, v0 and w0, and also the decaying compensation ﬁeld given by ∆u, ∆v, and ∆z. We can use the latter, with equations 6.19 and 6.20 to calculate the angles of the source (θ0, φ0). At longer times, the source is given using u¯, v¯, w¯, which is given by parameter p2 in equation 6.19.
The long-term measurements shown in ﬁgure 6.9 were repeated to give six datasets, and the angles calculated for each set. The azimuthal angle φ is consistently in the direction of the oven, with only 3 degrees variation, whilst the angle θ varies slightly more, but is always in the direction of the surface of the inner electrodes. None of the datasets give an angle within that subtended by the ﬁbre. If we assume that the source lies on the end facet of the inner electrode, then we can calculate th-
e position of the source, and this is shown in ﬁgure 6.10.

80

Characterisation of the endcap trap

Figure 6.10: The calculated positions of origin of the stray charge, based on the model in this section.
6.3 Magnetic ﬁeld compensation
Many of the measurements reported in this thesis have some dependence on the magnetic ﬁeld at the ion, and so it is desirable that the ﬁeld is of a known magnitude and direction. We have used the set of coils described in 5.7 on page 63 to ﬁrst null the Earth’s ≈50 µT ﬁeld, and then provide a known bias ﬁeld. In addition, at very low magnetic ﬁelds, the axis of atomic polarisation of the ion is deﬁned by the polarisation vector of the laser—the electric dipole moment of the ion is aligned with the-
 polarisation of the laser. The result is shown in ﬁgure 6.11: On the 397 nm S1/2 ↔P1/2 cooling transition we see that linearly polarised light can always induce a ∆m j = 0 transition, so we need only make sure our light is linearly polarised. On the D3/2 ↔P1/2 repumper transition, however, we see that whatever polarisation of light we use, the P1/2 state can always decay to a state from which it cannot be pumped. That is, the m j = ±1/2 state for σ±-polarised light and the m j = ±3/2 state for π--
polarised light. This phenomenon is termed ‘optical pumping’ and the resultant state, where it is an angular momentum eigenstate as shown here, is termed a ‘dark state’.
Light of an arbitrary polarisation can always be described as a supersposition of π and σ polarisations, and so for any polarisation of light there will always be some corresponding superposition of D3/2 sublevels which will produce a dark state in the absence of a magentic ﬁeld.
If we introduce a magnetic ﬁeld, the energy of each sublevel changes, and since the time dependence changes with the energy, we ﬁnd that the dark state does not persist—even if the ion, at some time, is in some superposition of states that would have constituted a dark state, the time evolution of each individual state means that the superposition is quickly destroyed. The theory of this destabilisation of the dark states by shifting the energies of the sublevels is laid out in [90], and this is t-
he method we use in this work.

81

Characterisation of the endcap trap

The method of shifting the energy levels only works when the laser is in a superposition of polarisations. If its polarisation is a pure state, that is, π, σ ±, then the dark state is one single sublevel, not a superposition of m j states, and its time-dependence has no effect.

P
P

___

S

D

(a) The 397 nm cooling transition.

(b) The 866 nm repumper transition.

Figure 6.11: Optical pumping to dark states in 40Ca+. In very low magnetic ﬁelds the axis of atomic polarisation of the ion is aligned along the laser’s polarisation. In (a) this is not a problem provided our light is linearly polarised, but if it is circularly polarised it will eventually land in a ‘dark state’, and ﬂuorescence will stop. Of more concern is the repumper transition shown in (b)—here, any polarisation of light will eventually put the ion into a dark state.

The procedure for nulling the background ﬁeld is as follows:

1. Align the repumper polarisation in some speciﬁc direction, call it x.
2. Scan the magnetic ﬁeld y and z components, (which simply means scanning the current in the coils), until a dip in ﬂuorescence is noted. At the ﬂuorescence minimum we can say we have nulled the ﬁeld for the y and z components. The ﬁeld now only has an x-component. Figures 6.12(a) and 6.12(b) show a typical iteration of this process.
3. Rotate the repumper polarisation by π/2. Now we only need to scan along the x-direction since we know the ﬁeld only has this component. At the ﬂuorescence minimum the ﬁeld is minimised. Figure 6.12(c) shows this process, with a ﬁnal ﬂuorecence rate very close to the background count rate for the PMT used.
4. Note that we can never entirely null the ﬁeld because the polarisation of the repumper is never entirely pure.

For our experiments, we perform several iterations of these scans before any critical measurement, to ﬁnd the global minimum, but we ﬁnd that it does not change signiﬁcantly, day-to-day. We ﬁnd that by nulling the ﬁeld in three dimensions we are able to reduce the ion’s ﬂuorescence to approximately the background count rate for the free-space PMT located at the side of the trap, that is, a rate of 4–5 kHz. Once this is done we can easily apply a bias magnetic ﬁeld of a known amplitude and directio-
n.

82

Characterisation of the endcap trap

Fluorescence/kHz

50

50

Fluorescence/kHz

40

40

30

30

20

20

Minimum fluorescence: 16724 Hz.

10

10

0 1.5 2 2.5 3 3.5 4 4.5 Magnetic Field/Gauss

Minimum fluorescence: 5775 Hz.

0

0

0.5

1

1.5

2

Magnetic Field/Gauss

(a) Horizontal coils 1

(b) Horizontal coils 2

50

Fluorescence/kHz

40

30

20

10 0 4.5

Minimum fluorescence: 4967 Hz.

5

5.5

6

6.5

Magnetic Field/Gauss

(c) Vertical coils

Figure 6.12: Compensating the Earth’s magnetic ﬁeld in three dimensions. First we scan the current in one horizontal set of coils until the ﬂuorescence minimum is found. At this point the ﬁeld from the coils is approximately cancelling the Earth’s ﬁeld in that direction. We repeat for the second set of horizontal coils and then for the vertical coils until we have a global ﬂuorescence minimum where the Earth’s ﬁeld is approximately compensated. Note that the values of the magnetic ﬁeld in the ﬁgur-
es are derived from the linear scaling of current and magnetic ﬁeld, which we know for each coil.

6.4 Secular frequency measurements
To determine the secular frequency of a single trapped ion we apply an additional sinusoidal rf voltage to the compensation electrodes and scan its frequency over a range within which we expect the ion’s secular frequency to lie. The principle of the method is that an additional electric ﬁeld oscillating close to the resonant frequency of the ion in a particular direction will transfer energy to the ion, exciting the amplitude of its oscillations. This heating effect results in a reduced ﬂuorescen-
ce. In our trap we have radial symmetry, and so we measure two clear secular frequencies: radial and axial6. We vary the amplitude of the trap rf drive—the q-parameter of equation 2.10 on page 11—and also the a-parameter of section 6.2 (recall that this gives a dc offset to the top and
6A splitting of the radial frequency into two components is also visible. We were able to directly observe the ion oscillating in different radial directions as the rf voltage was scanned over the two peaks. The breaking of the rotational symmetry of the trap here probably results from the inﬂuence of the oven collimator.

83

Characterisation of the endcap trap

bottom outer ground electrodes). We compare the results with secular frequencies derived from ﬁnite-element simulations of the trap for a variety of rf amplitudes and similar dc offsets.
We used a TTi TGR2050 sythesised rf generator to provide the additional sinusoidal voltage, controlled by LabView via RS232.
First, the dc offset on the ground electrodes was set to as close to zero as possible. This corresponds to an a-value of zero. Then, the following steps were taken:

1. Connect the additional rf voltage to the side compensation electrode. This will preferentially excite the radial secular frequency.
2. Compensate micromotion in 3-D.
3. Scan the additional rf voltage over a wide frequency range to approximately locate the resonance. Try a variety of amplitudes—too much and the ion will be heated out of the trap, too little and the dip in resonance will not be visible.
4. Zoom in on the resonance for a more detailed scan.
5. Repeat the detailed scan at 6 different main trap rf amplitudes from -26 dBm to -21 dBm to see how the secular frequency shifts.
6. Repeat steps 2–5 for a = −2, −1, 1, 2.
7. Repeat steps 2–6 with the additional rf voltage applied to the upper ground electrode. This will excite mainly the axial secular frequency.

Figure 6.13 shows a typical measurement of the secular frequencies. In this ﬁgure we scan upwards over the resonance. This process was repeated for the range of parameters given above. Figure 6.14 presents the range of secular frequencies calculated from simulations alongside the experimental data. The experimental data have been ﬁtted to equation 2.28 on page 14. The simulations cover a wider range of rf amplitudes than are available to us experimentally. In day-today operation of the trap, the r-
f amplitude was set at around 0.025 V and the a-value was zero. By comparing these ﬁgures it is possible to say that the rf amplitude in the endcap trap, for the signal generator level generally used, was approximately 200 V, and the corresponding q-value of the trap was approximately 0.5–0.7. We note also a similar functional dependency in the simulation and experimental results.

84

Characterisation of the endcap trap

60

45

Fluorescence/kHz Fluorescence/kHz

50 40
40 35
30
30 20

10 2300

2350 2400 2450 Frequency/kHz
(a) Radial scan.

2500

25 4000

4050 4100 4150 Frequency/kHz
(b) Axial scan.

4200

Figure 6.13: Resonantly exciting the ion’s radial and axial secular frequencies with an additional rf voltage on (a): the side electrode, and (b): the upper electrode. We interpret the double radial peak as a splitting of the radial frequency into two components. See the text for details. For these plots the trap rf amplitude was 22 dBm at the ﬁrst function generator, and the a-value was 1.

Secular frequency/2π MHz

85

Characterisation of the endcap trap

8 a=−2 Radial

a=−1 Radial

7

a=0 Radial

a=1 Radial

6

a=2 Radial

a=−2 Axial

5

a=−1 Axial

a=0 Axial

4

a=1 Axial

a=2 Axial

3

2

1

0 50 100 150 200 250 300 350 400
Trap RF amplitude/V
(a) Simulation.

8 a= −2 Radial

a = −1 Radial

7

a = 0 Radial

a = 1 Radial

6

a = 2 Radial

a = −2 Axial

5

a = −1 Axial

a = 0 Axial

4

a = 1 Axial

a = 2 Axial

3

Secular frequency/2π/MHz

2

1

0 0.016 0.018 0.02 0.022 0.024 0.026 0.028 0−Peak RF Amplitude at RF generator/V
(b) Experiment.
Figure 6.14: A comparison between (a) the secular frequencies derived from simulations and (b) the measured values. Error bars can be determined from the width of the resonances. Since these are on the order of 10 kHz they are not shown in this plot. See the text for further details.

Chapter 7
A ﬁbre-coupled source of single-photons
This chapter presents the main results of the experiment, that is, the use of the endcap trap with integrated ﬁbres as a single photon source. Two main experiments were performed; the ﬁrst to excite a trapped ion with continuous light and observe the quantum nature of the ﬂuorescence collected through the ﬁbres; the second to excite the ion with a series of laser pulses, such that one photon is emitted for each pulse sequence. In both cases, the quantum nature of the light is strikingly shown in c-
orrelation spectra of photon arrival times from the ﬁbres.
As discussed in chapter 1, the controlled creation and absorption of single photons enables schemes in quantum networking, cryptography, communication and computing. Prior to the development of quantum optics, single photons were produced using a laser beam attenuated to such an extent that the probability of more that one photon being emitted was negligible. This was unsatisfactory for two reasons—ﬁrstly, the probability of no photon being emitted was higher than that of one, and secondly the pro-
bability of two photons being emitted together was non-zero.
In the new ﬁeld, then, of ‘real’ single-photon sources, we can identify two overarching schemes. The ﬁrst—coherent emitter/photon interaction through strong coupling cavity QED—has been mentioned in the trapped-ion context in chapter 4. In this scheme, a single photon is emitted into a single cavity mode, providing a reversible coherent exchange of excitation between emitter and photon, as required by many quantum information processing proposals (for example, [31]). Although strong-coupling has b-
een achieved with an ensemble of ∼ 500 ions in a linear trap [69], to date it has never been reached with a single trapped ion. At present, work towards this is a highly active research area—see, for example [91]. A 2010 review of the theory and most important implementations of cavity-based single photon schemes, (not only ion trap schemes), can be found in [92]. Neutral atoms have also been used as a cavity-based single-photon source [93]. In this thesis however we are concerned only with ion tr-
ap schemes and we can identify the work by Keller et al.[54, 73] in 2004 to implement an ion-trap single photon scheme with calcium ions as a milestone in the ﬁeld. The experiments in this thesis have several similarities to this work. The 2004 experiment was the ﬁrst to couple a single trapped ion to an optical cavity, and furthermore the ﬁrst to produce single photons from such a scheme. The ultimate goals of the experiments reported in this thesis are to be the ﬁrst single ion coupled to a ﬁbre-
 cavity, and from it to produce single photons on demand. Further, due to the miniaturised cavity1, to strongly couple the ion to the cavity ﬁeld.
1The cavity used in the 2004 work was 8 mm long.
86

87 A ﬁbre-coupled source of single-photons
In contrast to cavity-assisted schemes, the second distinct single-photon generation system is to use an emitter in free space. Some implementations of this include single ions, where this was ﬁrst demonstrated by Diedrich et al. in 1987 [94], single molecules [95], nitrogen-vacancies in diamond (colour centres) [96] and quantum dots [97]. In the context of trapped ions, the atom emits into many different modes and as a result the amount of photons that can be captured by a collection system of so-
me ﬁxed numerical aperture is limited, although the efﬁciency of singlephoton detection in such a scheme can approach that of the cavity-assisted scheme[98]. Review articles covering many single-photon generation schemes can be found in [99]. In this chapter the results of two non-cavity single-photon generation experiments are presented, as a prototype for future cavity-assisted schemes.

7.1 Theory of the measurements

7.1.1 Classical theory of intensity ﬂuctuations

The aim of this chapter is to show the quantum nature of the light emitted by our single-photon source. That is, to prove the ‘singleness’ of the photons. We start, then, by outlining the classical theory of optical intensity ﬂuctuations, and show that a quantum-mechanical reformulation of the theory predicts different results at the single-photon level—results which we can directly observe. The results of our experiment are no less than a proof of this quantum theory.
We consider ﬁrst a chaotic light source. Such light is termed ‘chaotic’ because the contributions of the random phases emitted by the atoms of the source produces interference which results in random intensity peaks and troughs. See, for example, the random-walk model of collisionbroadening in chaotic light, described in [59, Ch. 3]. It can be shown that the mean-square intensity of such a beam is given by

I¯(t)2 =

1 2−

I¯2,

(7.1)

v

with v the number of radiating atoms and I¯ the mean intensity over long-times (times much greater

than the coherence time), given by

I¯

=

1 2

ε0cE02v.

(7.2)

In this and hereafter the overbar denotes the cycle average intensity, that is, the intensity averaged

over one cycle of the electric ﬁeld, whilst the angle brackets denote the average of many values of the

cycle-averaged intensity, taken over times much greater than the coherence time (the time-averaged

intensity).

For a large number of atoms, equation 7.1 approximates to

I¯(t)2 = 2I¯2.

(7.3)

By contrast, coherent light exhibits no intensity ﬂuctuations:

I¯(t)2 = I¯2.

(7.4)

7.1.1.1 Second-Order Coherence

88 A ﬁbre-coupled source of single-photons

If we now consider pairs of intensity ﬂuctuations of the sort described in section 7.1.1, but with a ﬁxed time delay τ between them. We deﬁne the intensity correlation function, g(2)(τ), of the
light as

g(2)(τ) = I¯(t)I¯(t + τ) ,

(7.5)

and generally we use a normalised version:

g(2)(τ) =

I¯(t)I¯(t + τ) I¯2.

(7.6)

which we can write in terms of the electric ﬁeld as

g(2)(τ) =

E∗(t)E∗(t + τ)E(t + τ)E(t) E∗(t)E(t) 2

.

(7.7)

We now consider the values of g(2)(τ) we might expect at τ = 0 and τ > 0. If we take a pair of

measurements of intensity, at times t1 and t2, then the following inequality must be true:

2I¯(t1)I¯(t2) ≤ I¯(t1)2 + I¯(t2)2.

(7.8)

Now, considering the statistical average of the two intensities, we ﬁnd

I¯(t1) + I¯(t2) 2 ≤ I¯(t1)2 + I¯(t2)2 ,

2

2

(7.9)

where we have replaced the cross terms in the left hand side of equation 7.9 with the inequality 7.8. So we have that

I¯(t) 2 ≤ I¯(t)2 ,

(7.10)

and since I¯2 = I¯(t)2 , then from equation 7.6 we can see that for zero time delay, τ = 0, classical light gives

g(2)(0) =

I¯(t )2 I¯(t) 2

⇒ g(2)(0) ≥ 1.

(7.11)

In addition, we can write

N

2N

N

∑ I¯(ti)I¯(ti + τ) ≤ ∑ I¯(ti)2 ∑ I¯(ti + τ)2,

i=1

i=1

i=1

(7.12)

where the cross terms on the left hand side have again been replaced by the inequality 7.8. We can

see that if the tN are sufﬁciently large, then the two sums on the right hand side of equation 7.12 are equal. Taking a statistical average again, as in equation 7.9, we ﬁnd

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:01.586Z
- **Text Length:** 185928 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
