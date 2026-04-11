# PDF Document: (AMO Textbook - vdSM) Laser Cooling and Trapping.pdf

**File Path:** (AMO Textbook - vdSM) Laser Cooling and Trapping.pdf

**Processed Date:** 2026-02-10T18:14:00.151Z

**File Size:** 43875.30 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 530

**Title:** (AMO Textbook - vdSM) Laser Cooling and Trapping

**Collection:** Ion Trap > Fundamental

---

## Extracted Text Content

Graduate Texts in Contemporary Physics
Series Editors: R. Stephen Berry Joseph L. Birman Jeffrey W. Lynn Mark P. Silverman H. Eugene Stanley Mikhail Voloshin
Springer Science+Business Media, LLC

Graduate Texts in Contemporary Physics
S.T. Ali, J.P. Antoine, and J.P. Gazeau: Coherent States, Wavelets and Their Generalizations
A Auerbach: Interacting Electrons and Quantum Magnetism N. Boccara: ModeUng Complex Systems T.S. Chow: Mesoscopic Physics of Complex Materials B. Felsager: Geometry, Particles, and Fields P. Di Francesco, P. Mathieu, and D. senechal: Conformal Field Theories A Gonis and W.H. Butler: Multiple Scattering in Solids K. Gottfried and T-M. Yan: Quantum Mechanics: Fundamentals, 2nd Edition K.T. Hecht: Quantum Mechanics J.H. Hinken: Superconductor Electronics: Fundamentals and
Microwave Applications J. Illadik: Spinors in Physics Yu.M.lvanchenko and AA Lisyansk:y: Physics of Critical Fluctuations M. Kaku: Introduction to Superstrings and M-Theory, 2nd Edition M. Kaku: Strings, Conformal Fields, and M-Theory, 2nd Edition H.V. Klapdor (ed.): Neutrinos R.L. Liboff (ed): Kinetic Theory: Classical, Quantum, and Relativistic
Descriptions, 3rd Edition
J.W. Lynn (ed.): High-Temperature Superconductivity
HJ. Metcalf and P. van der Straten: Laser Cooling and Trapping R.N. Mohapatra: Unification and Supersymmetry: The Frontiers of
Quark-Lepton Physics, 3rd Edition V.P. Nair: Quantum Field Theory: A Modem Perspective
R.G. Newton: Quantum Physics: A Text for Graduate Students H. Oberhummer: Nuclei in the Cosmos G.D.J. Phillies: Elementary Lectures in Statistical Mechanics R.E. Prange and S.M. Girvin (eds.): The Quantum Hall Effect
(continued after index)

Harold J. Metcalf Peter van der Straten
Laser Cooling and Trapping
With 115 Illustrations
, Springer

Harold J. Metcalf
Department of Physics SUNY at Stony Brook
Stony Brook, NY 11794-3800
USA hmetcalf@notes.cc.sunysb.edu

Peter van der Straten Debye Institute Faculty ofPhysics and Astronomy Princetonplein 5
3584 ee Utrecht
The Netherlands P. vanderStraten@phys.uu.nI

Series Editors
R Stephen Berry Department of Chemistry University of Chicago Chicago, IL 60637 USA
Mark P. Silverman Department of Physics Trinity College Hartford, CT 06106 USA

Joseph L. Birman Department of Physics City College of CUNY New York, NY 10031 USA
H. Eugene Stanley Center for Polymer Studies Physics Department Boston University Boston, MA 02215 USA

Jeffrey W. Lynn Department of Physics University of Maryland College Park, MD 20742 USA
Mikhail Voloshin Theoretical Physics Institute Tate Laboratory of Physics University of Minnesota Minneapolis, MN 55455 USA

Library of Congress Cataloging-in-Publication Data

Metcalf, Harold J.

Laser cooling and trapping / H.J. Metcalf, P. van der Straten.

p. cm. - (Graduate texts in contemporary physics)

Includes bibliographical references and index.

ISBN 978-0-387-98728-6 ISBN 978-1-4612-1470-0 (eBook)

DOI 10.1007/978-1-4612-1470-0

1. Laser manipulation. 2. Laser cooling. 1. Van der Straten, P.

II. Title. III. Series.

QC689.5.L35 M47 1999

539.7-dc21

98-55408

Printed on acid-free paper.

© 1999 Springer Science+Business Media New York Originally published by Springer-Verlag New York, Inc. in 1999 AII rights reserved. This work may not be translated or copied in whole or in part without the written pennission ofthe publisher (Springer Science+Business Media, LLC ), except for brief excerpts in connection with reviews or scholarly analysis. Use in connection with any form of information storage and retrieval, electronic adaptation, computer software, or by similar or dissimilar meth-
odology now known or hereafter developed is forbidden. The use of general descriptive names, trade names, trademarks, etc., in this publication, even ifthe fonner are not especially identified, is not to be taken as a sign that such names, as understood by the Trade Marks and Merchandise Marks Act, may accordingly be used freely by anyone.
(AUIMVY)
9 8 7 6 543
ISBN 978-0-387-98728-6

springeron/ine.com

To the memory ofmy parents Voor Wilma, Lieke en Anouk

Foreword
When Hal Metcalf and I began to work on laser cooling of neutral atoms in about 1979, we found ourselves in a field that was nearly unoccupied by other researchers, or by any real understanding of what the problems and possibilities were. While the study of laser cooling of trapped ions was well under way, only two other groups had ventured into laser manipulation of neutral atoms, one in Moscow and one at Bell Labs (although the latter had temporarily dropped this line of research). Today, laser -
cooling and its applications represent one of the major subfields of atomic, molecular and optical physics, with over one hundred active groups around the world. Laser cooling has been the enabling technolgy for a wide range of new endeavors. These range from a new generation of atomic clocks, which are operating or under construction in many of the world's major standards laboratories, to the achievement of Bose-Einstein condensation in atomic alkali vapors, one of the fastest growing fields of b-
asic research at the close of the twentieth century. From the highly practical to the very fundamental, laser cooling has become an important part of many research programs.
With this explosion of interest in laser cooling came the obvious question of writing a book about it. The "right time" to write a book on a new subject is a delicate thing. On the one hand, the subject needs to be well enough understood and developed so one can produce a text that stands the test of time, a text that will not be outdated in a few years. On the other hand, one wants the subject to be exciting and of current interest. Metcalf and Van der Straten are two of the finest scientists in -
the field of laser cooling and they have written the right book at the right time. Certainly, Laser Cooling and Trapping will serve as a valuable reference for researchers working in this field. More importantly it will serve to introduce young people to this exciting field. Now, when someone asks me how to

viii Foreword

start learning about laser cooling, I'll tell them to read Metcalf and Van der Straten. I fully expect that some of the most exciting developments yet to come will come from researchers who begin their study of laser cooling with this book.

April 1999

William D. Phillips Gaithersburg, MD

Preface
The purpose of this book is to introduce students to the dramatic developments in electromagnetic control of atomic motions that has emerged since the 1980s. The book evolved from lectures and courses given by each of us at Stony Brook and Utrecht to advanced undergraduates and beginning graduate students. Its three parts have quite different purposes: Part I serves to review, but not teach, those elements of quantum mechanics and atomic physics that are applicable to the material that follows. It-
s last chapter addresses certain topics in kinetic theory and statistical physics. Part II introduces the experimental tools and techniques that have been used for electromagnetic control of atomic motion. The first such topic is simply slowing down atoms, usually called laser cooling. But trapping them with magnetic or optical fields (or both), focussing and steering them, and other kinds of manipulation are discussed. The theoretical methods developed in Part I are integrated into these descript-
ions. Part III discusses some of the manifold applications of the spectacular new tools provided to physicists by these technologies. It is divided-inte-twoMll:!-j><Uts: those topics for which the traditional classical description of atoms moving as classical p6ii1Tpartieles-iuppr~priate, and those topics for which this view must be abandoned and the center-of-mass motion of the atoms must be described quantum mechanically. It is here where some of the most dramatic progress has occurred: atoms in-
 optical lattices, deBroglie wave optics, Bose-Einstein condensation, and the fascinating Schrodinger cat states.
Although there are 50 year-old articles suggesting optical cooling, the topic attracted serious attention with proposals for cooling trapped ions and neutral atoms, as well as trapping neutral atoms, at the end of the 1970s. The experimental aspects really began with trapped ions in the late 1970s and the beam slowing demonstrations in Troitsk and Gaithersburg in the early 1980s. Then in 1985 the first neutral

x Preface

atom traps were demonstrated: trapping in velocity space was done with optical molasses at AT&T Bell Labs, and in configuration space with purely magnetic fields at Gaithersburg. Simultaneous cooling and trapping was demonstrated using the magneto-optical trap at AT&T Bell Labs in 1987. Then there followed an explosion of interest in this field that was culminated by the award of the Nobel Prize in Physics in 1997 to three of its earliest practitioners.
The text is written from our experimentalists' perspective. There are no long, formal derivations, and most of the theoretical material is presented in a conversational rather than formal manner. It is our goal to inspire the readers with some of the beautiful "finger physics" pictures that have evolved in this new field, even though there have been quite elegant formalisms developed by many theorists. Any book intended as a complete, up-to-date, thorough treatment would be obsolete in a few years-
, and for this lack of completeness we apologize to those whose work may have been slighted or omitted. Instead, we have intended this book to be a guide for students learning the basic elements of the field.
Both of us are indebted to the generations of students and postdocs who have passed through our laboratories, and whom we have encountered in visits to other laboratories, who have taught us so very much. Their fresh approach to the new problems posed by this expanding field have made our research careers fascinating and our time a great pleasure. We also wish to thank Hanneke de Vries and the staff at Springer, including external readers, for all their work on the manuscript.

June 1999

Harold J. Metcalf Peter van der Straten

Contents

Foreword

vii

Preface

ix

I Introduction

1

1 Review of Quantum Mechanics

3

1.1 Time-Dependent Perturbation Theory . . . . . . . . . . . . . . . 3

1.2 The Rabi Two-Level Problem. . . . . . . . . . . . . . . . . . .. 4

1.2.1 Light Shifts . . . . . . . . . . . . . . . . . . . . . . . .. 7

1.2.2 The Dressed Atom Picture . . . . . . . . . . . . . . . .. 9

1.2.3 The Bloch Vector . . . . . . . . . . . . . . . . . . . . .. 11

1.2.4 Adiabatic Rapid Passage . . . . . . . . . . . . . . . . .. 12

1.3 Excited-State Decay and its Effects. . . . . . . . . . . . . . . .. 14

2 The Density Matrix

17

2.1 Basic Concepts . . . . . . . . . . . . . . . . . . . . . . . . . .. 17

2.2 Spontaneous Emission . . . . . . . . . . . . . . . . . . . . . . . 20

2.3 The Optical Bloch Equations . . . . . . . . . . . . . . . . . . .. 23

2.4 Power Broadening and Saturation . . . . . . . . . . . . . . . . . 24

3 Force on Two-Level Atoms

29

3.1 Laser Light Pressure .. . . . . . . . . . . . . . . . . . . . . . . 29

xii Contents

3.2 A Two-Level Atom at Rest

31

3.3 Atoms in Motion . . . .

34

3.3.1 Traveling Wave .

34

3.3.2 Standing Wave

35

4 Multilevel Atoms

39

4.1 Alkali-Metal Atoms. . . . . .

39

4.2 Metastable Noble Gas Atoms .

43

4.3 Polarization and Interference .

45

4.4 Angular Momentum and Selection Rules .

47

4.5 Optical Transitions in Multilevel Atoms .

50

4.5.1 Introduction............

50

4.5.2 Radial Part . . . . . . . . . . . .

51

4.5.3 Angular Part of the Dipole Matrix Element

52

4.5.4 Fine and Hyperfine Interactions . .

53

5 General Properties Concerning Laser Cooling

57

5.1 Temperature and Thermodynamics in Laser Cooling

58

5.2 Kinetic Theory and the Maxwell-Boltzmann Distribution .

61

5.3 Random Walks . . . . . . . . . . . . . . . . . . .

63

5.4 The Fokker-Planck Equation and Cooling Limits

66

5.5 Phase Space and Liouville's Theorem .. . . . . .

68

II Cooling & Trapping

71

6 Deceleration of an Atomic Beam

73

6.1 Introduction..........

73

6.2 Techniques of Beam Deceleration

74

6.2.1 Laser Frequency Sweep .

76

6.2.2 Varying the Atomic Frequency: Magnetic Field Case

77

6.2.3 Varying the Atomic Frequency: Electric Field Case .

77

6.2.4 Varying the Doppler Shift: Diffuse Light

78

6.2.5 Broadband Light .

79

6.2.6 Rydberg Atoms.. . . . . . . . .

79

6.3 Measurements and Results . . . . . . . .

80

6.4 Further Considerations .. . . . . . . . .

83

6.4.1 Cooling During Deceleration . . . .

83

6.4.2 Non-Uniformity of Deceleration . . .

84

6.4.3 Transverse Motion During Deceleration

85

6.4.4 Optical Pumping During Deceleration .

86

7 Optical Molasses

87

7.1 Introduction............................. 87

7.2 Low-Intensity Theory for a Two-Level Atom in One Dimension . 88

Contents xiii

7.3 Atomic Beam Collimation . . . . . . . . . . . .

90

7.3.1 Low-Intensity Case . . . . . . . . . . . .

90

7.3.2 Experiments in One and Two Dimensions

92

7.4 Experiments in Three-Dimensional Optical Molasses

95

8 Cooling Below the Doppler Limit

99

8.1 Introduction...................

99

8.2 Linear -1 Linear Polarization Gradient Cooling

100

8.2.1 Light Shifts . . . . . . . . . .

101

8.2.2 Origin of the Damping Force.

102

8.3 Magnetically Induced Laser Cooling .

104

8.4 0'+-0'- Polarization Gradient Cooling

106

8.5 Theory of Sub-Doppler Laser Cooling

107

8.6 Optical Molasses in Three Dimensions .

III

8.7 The Limits of Laser Cooling . . . . . .

113

8.7.1 The Recoil Limit . . . . . . . .

113

8.7.2 Cooling Below the Recoil Limit

114

8.8 Sisyphus Cooling . . . . . . . . . .

116

8.9 Cooling in a Strong Magnetic Field.

118

8.10 VSR and Polarization Gradients

120

9 The Dipole Force

123

9.1 Introduction.

123

9.2 Evanescent Waves. . . . . . . . . . . . . . . . . .

124

9.3 Dipole Force in a Standing Wave: Optical Molasses

at High Intensity . . . . . . . . . . . . . . . .

126

9.4 Atomic Motion Controlled by Two Frequencies

128

9.4.1 Introduction............

128

9.4.2 Rectification of the Dipole Force.

129

9.4.3 The Bichromatic Force . . . . .

131

9.4.4 Beam Collimation and Slowing

135

10 Magnetic Trapping of Neutral Atoms

137

10.1 Introduction . . . . . . . . . . . .

137

10.2 Magnetic Traps . . . . . . . . . . . . . . . . . . . . . . .

138

10.3 Classical Motion of Atoms in a Magnetic Quadrupole Trap

140

10.3.1 Simple Picture of Classical Motion in a Trap

140

10.3.2 Numerical Calculations of the Orbits ..

141

10.3.3 Early Experiments with Classical Motion . .

143

10.4 Quantum Motion in a Trap . . . . . . . . . . . . . .

145

10.4.1 Heuristic Calculations of the Quantum Motion

of Magnetically Trapped Atoms . . . . . .

146

10.4.2 Three-Dimensional Quantum Calculations.

146

10.4.3 Experiments in the Quantum Domain . . .

147

xiv Contents
11 Optical Traps for Neutral Atoms 11.1 Introduction . . . . . . . . . . . . . . . . . . . . . . . . . 11.2 Dipole Force Optical Traps . . . . . . . . . . . . . . . . . 11.2.1 Single-Beam Optical Traps for Two-Level Atoms . 11.2.2 Hybrid Dipole Radiative Trap 11.2.3 Blue Detuned Optical Traps 11.2.4 Microscopic Optical Traps 11.3 Radiation Pressure Traps . . . 11.4 Magneto-Optical Traps . . . . . . . 11.4.1 Introduction. . . . . . . . . 11.4.2 Cooling and Compressing Atoms in a MOT . 11.4.3 Captur-
ing Atoms in a MOT . . . 11.4.4 Variations on the MOT Technique . . . . . .
12 Evaporative Cooling 12.1 Introduction . . . 12.2 Basic Assumptions 12.3 The Simple Model 12.4 Speed and Limits of Evaporative Cooling 12.4.1 Boltzmann Equation . 12.4.2 Speed of Evaporation . 12.4.3 Limiting Temperature 12.5 Experimental Results . . . . .

149 . 149 . 150 . 150 . 152 . 153 . 155 . 156 . 156 . 156 . 158 . 159 . 162
165 . 165 . 166 . 167 . 171 . 171 . 171 . 174 . 175

III Applications
13 Newtonian Atom Optics and its Applications 13.1 Introduction . 13.2 Atom Mirrors . . . . . . . . 13.3 Atom Lenses . . . . . . . . 13.3.1 Magnetic Lenses .. 13.3.2 Optical Atom Lenses. 13.4 Atomic Fountain . . . . . . . 13.5 Application to Atomic Beam Brightening 13.5.1 Introduction. . . . . . . . . . . . 13.5.2 Beam-Brightening Experiments . 13.5.3 High-Brightness Metastable Beams 13.6 Application to Nanofabrication 13.7 Applications to Atomic Clocks . 13.7.1 Introduction . . . . . . . 13.7.2 A-
tomic Fountain Clocks 13.8 Application to Ion Traps . . . . 13.9 Application to Non-Linear Optics

177
179 · 179 · 180 · 181 · 181 · 184 · 185 · 186 · 186 · 188 · 189 · 190 · 192 · 192 · 193 · 194 · 195

Contents xv

14 Ultra-cold Collisions 14.1 Introduction . . . 14.2 Potential Scattering . . . 14.3 Ground-state Collisions . 14.4 Excited-state Collisions . 14.4.1 Trap Loss Collisions 14.4.2 Optical Collisions . 14.4.3 Photo-Associative Spectroscopy 14.5 Collisions Involving Rydberg States

199
· 199 .200 .204 .207 .207 .209 .213 · 218

15 deBroglie Wave Optics 15.1 Introduction .. . 15.2 Gratings . . . . . 15.3 Beam Splitters .. 15.4 Sources . . . . . 15.5 Mirrors . . . . . 15.6 Atom Polarizers . 15.7 Application to Atom Interferometry

219 .219 .220 .223 .224 .225 .226 .227

16 Optical Lattices 16.1 Introduction 16.2 Laser Arrangements for Optical Lattices 16.3 Quantum States of Motion . . . . 16.4 Band Structure in Optical Lattices 16.5 Quantum View of Laser Cooling

231
· 231 .232 .235 .238 .239

17 Bose-Einstein Condensation 17.1 Introduction . . . . . 17.2 The Pathway to BEC .. 17.3 Experiments . . . . . . . 17.3.1 Observation of BEC 17.3.2 First-Order Coherence Experiments in BEC . 17.3.3 Higher-Order Coherence Effects in BEC . 17.3.4 Other Experiments . . . . . . . . . . . . . .

241 · 241 .243 .244 .244 .246 .248 .249

18 Dark States 18.1 Introduction . . . . . . . . . 18.2 VSCPT in Two-Level Atoms 18.3 VSCPT in Real Atoms . . . 18.3.1 Circularly Polarized Light 18.3.2 Linearly Polarized Light . 18.4 VSCPT at Momenta Higher Than ±hk . 18.5 VSCPT and Bragg Reflection . 18.6 Entangled States. . . . . . . . . . . . .

251
· 251 .252 · .. 254 · .. 255 .257
· .. 258 · .. 259 · .. 261

xvi Contents

IV Appendices

263

A Notation and Definitions

265

B Review Articles and Books on Laser Cooling

269

C Characteristic Data

273

D Transition Strengths

279

References

291

Index

317

Part I
Introduction

1
Review of Quantum Mechanics

This chapter presents a brief review of those aspects of quantum mechanics that are important for understanding some of the material to be found elsewhere in this book. Its purpose is not to teach the subject, because that is so very well done in numerous other textbooks [1-9]. Rather, the intent is to bring together certain things that are sometimes scattered throughout such texts, to establish notation and conventions, and to provide a reference point for many important and useful formulas.

1.1 Time-Dependent Perturbation Theory

The time-dependent SchrOdinger equation is

..

. all1(i:, t)

at 1t1l1(r,t)=lh

,

(1.1)

r where 1t is the total Hamiltonian for an atom in a radiation field and is the

coordinate of the electron. The field-free, time-independent atomic Hamiltonian
is denoted as 1to, its eigenvalues as En == hwn, and its eigenfunctions as lPn (r).
Then 1tOlPn (r) = EnlPn (r). The interaction with the radiation field is described by 1t'(t), and thus 1t(t) = 1to + 1t'(t) when the radiation is considered as a classical

electromagnetic field, which is appropriate for laser cooling. Since the eigenfunc-

tions lPn(r) form a complete set, the solution lI1(r, t) of Eq. 1.1 is expanded in

terms of lPn (r) as

= L lI1(r, t)

q(t)lPk(r)e-iwkl ,

(1.2)

k

4 I. Review of Quantum Mechanics

where the coefficients q (t) are generally time-dependent. The Schrodinger equation then becomes

1t(t)l.{I(r,t) = [1to+1t'(t)]Lq(t)cf>di)e-iWkl

k

(a~t) = (iii)

L q(t)cf>k(r)e-iwkf .
k

(1.3)

r Multiplying on the left by cf>j(r) and integrating over spatial coordinates gives

i l id-cdJ' t( t-)

=

"L."..

c
k

(

t)1t'.
Jk

(t)eiwjkl

'

k

(1.4)

where 1tjk(t) == (cf>jl1t'(t)lcf>k) and Wjk == (Wj - Wk).
Equation 1.4 is exactly equivalent to the SchrMinger equation 1.1: no approximations have been made. However, for the case of an atom in a radiation field it is unsolvable, and so approximations are required. One of the most common approaches found in textbooks is the use of perturbation theory. For an atom in
the ground state (k = 1) at t = 0, all q(O) = 0 except for c) (0) = 1. For the
perturbation approximation, one chooses

(1.5)

for all k =1= 1 and does a formal time integration ofEq. 1.4 to calculate these q(t) values. The small components q(t) of the excited states cf>k(r) for k =1= 1 that are mixed into l.{I(r, t) become the transition amplitudes and their squares are the transition rates.
For transitions to the continuum, such as photoionization, averaging over the density of final states results in the familiar "Fermi Golden Rule" of quantum mechanics. For transitions between discrete states driven by radiation whose spectral width is larger than the natural width of the transition, averaging over the spectral density gives the same golden rule.

1.2 The Rabi Two-Level Problem
Such a textbook approach is not suitable for narrow-band laser excitation of atoms, however, because large excited-state populations are possible, thereby violating Eq. 1.5. Instead, a different approximation is made by truncating the summation of the exact Eq. 1.4 to just two terms, the single ground and excited state connected by the laser frequency, and solving the resulting coupled differential equations directly. Such a calculation for a two-level system was first studied by Rabi [10] in conn-
ection with magnetic resonance, and is described very well in textbooks [5,11].
The solution of this Rabi problem begins by absorbing any diagonal elements
of1t'(t) into 1to, and then only one nonzero value, 1t~e(t) = 1t~g*(t), remains in

1.2 The Rabi Two-Level Problem 5

the summation (here 1 --* g and 2 --* e). Then Eq. 1.4 becomes

i ldic-dgt(-t)

=

.

C (t)H' (t)e- 1Wat

e

ge

(1.6a)

and

iii dcdet(t)

=

C (t)H' (t)eiwat

g

eg

,

where Wa == Weg is the atomic resonance frequency.
Evaluation of H~e (t) begins in the most general way by writing

(1.6b)

H(t) = p2/2m + V,

(1.7)

where V is the Coulomb potential seen by the electron whose momentum is p, and
then by replacing p by the canonical momentum to obtain p- (e/c)ACr, t), where A(1:, t) is the vector potential of the applied field, in this case, the laser light) . The

£ Hamiltonian can now be expanded and manipulated, beginning with = A/c,

until the expression

r H'(t) = -e£Cr, t) .

(1.8)

emerges (this is the classically expected operator). Here the A2 term is not consid-

ered because it represents only the energy of the electromagnetic field of the light

and is transparent to the atomic eigenstates lPn (r). (The reader is cautioned that

deriving Eq. 1.8 is fraught with certain difficulties that have been discussed in the

literature over the past 40 years, and will not be considered here [12,13].)

Using Eq. 1.8 to solve Eqs. 1.6 for the case of only two atomic levels con-

nected by a single, narrow-band excitation requires the use of two very well-

known approximations in addition to truncating the sum in Eq. 1.4. The first of

these approximations is the rotating wave approximation (RWA), which consists

of neglecting terms of order l/we compared with terms of order 1/0, where we

is the laser frequency and 0 is the laser detuning from the atomic resonance fre-

quency,o == We - Wa [1,3,14]. The second approximation is the electric dipole approximation, which consists of neglecting the spatial variation of £(r, t) over

the region of the spatial integral of H~e (t) because the optical wavelength A is

typically several hundred nm whereas the wavefunctions lPn (r) are almost entirely

contained within a sphere of radius typically < 1 nm.

For a plane wave traveling in the positive z direction, the electric field operator

is

£(r, t) = Eoe cos(kz - wet),

(1.9)

e where is the unit polarization vector and Eo is the amplitude of the light field.
The coupling element for this case becomes H~g(t) = lin cos(kz - wet), where n is the Rabi frequency defined by

n

==

-eEo -1i-(e1r lg )

(1.10)

I Although the present discussion refers to a quasi one-electron atom, the fonnulation is more general and is valid for other atoms as well.

6 1. Review of Quantum Mechanics

and r is the electron coordinate. Here the electric dipole approximation has been
er made. For a two-level atom the dipole moment of the atom is parallel to the e polarization of the field. This will be reconsidered in more detail in Chapter 4,
where "real" atoms with mUltiple levels are discussed. However, the present approach is perfectly valid for a two-level atom, where the coupling strength between the atom and the field can always be identified with a single Rabi frequency. The reader should note that there are many definitions of Q in the literature, but this
one is chosen because it is the real oscillation frequency of ICk (t) 12 for 0 = O.
The Rabi frequency is proportional to the matrix element (elrlg), which, in general, is not easily calculated. For the hydrogen atom, the wavefunction of the electron in the bound states is known, and these elements can be calculated accurately, but for all other atoms the situation is more complicated (see Sec. 4.5).
The two Eqs. 1.6 can be uncoupled by differentiating the first One and substituting for Ce to find
(l.11a)

and

dd 2 cT e ( t )

+

. l

dce(t) 0d[

+

Q2
4Ce(t)

=

0,

(l.11b)

where the RWA has been made. This result applies to the case of a two-level atom interacting with a single frequency field, but in laser cooling it is often necessary to consider more complicated atoms and fields, such as multilevel atoms in a multifrequency field. This will be discussed in more detail in Chapter 4.
The solution of Eqs. 1.11 for the same initial conditions as On p. 4, namely, cg(O) = 1 and ce(O) = 0, are

cg(t) =

( cos -Q't

-

i -0s i n

-Q't)

. e+101 /

2

2

Q'

2

(l.12a)

and where

Q Q't .

C (t)
e

=

-i -Q'

sin

_2e -1Ot/

2
'

(1.12b) (l.12c)

Note that the probability for finding the atom in the initial state g or the excited
state e, Icg (t)1 2 or Ice (t)12, oscillates at frequency Q', and that increasing the de-
tuning 101 increases the frequency of the oscillation while decreasing its amplitude as shown in Fig. 1.1. The segment of the oscillation associated with the transition from the excited state down to the ground state corresponds exactly to stimulated emission, and the result here illustrates clearly why the Einstein coefficients Bkj
and Bjk are equal. When sin2 (Q't/2) is between its extreme values, the system may be driven toward either ground or excited state depending on the relative phase
between the driving field t(r, t) and the oscillations of llI(r. t) (see Eq. 1.2).

1.2 The Rabi Two-Level Problem 7

1.0

0.8
:E 0.6
~
£ 0.4

0.2

, ,

.. ",....;.

~

~.,

/

","::-,
"

,

O.O~~~-L~~~·~··'~~~~~~'~'~~\·~"~'_""~'

o

2

4

6

8

10

Time

FIGURE 1.1. Probability ICe(t)12 for the atom to be in the excited state for n = y and 13 =
o(solid line), 13 = y (dotted line), and 13 = 2.5y (dashed line). Time is in units of l/y.

1.2.1 Light Shifts
In the presence of the off-diagonal Hamiltonian matrix elements of the operator 1i'(t), the energies En that are the eigenvalues of1io are no longer the eigenvalues ofthe full Hamiltonian. The energy shifts are most readily found by first eliminating the time dependence associated with 1i'(t). An algebraic equivalent to the usual textbook approach oftransforming to a rotating frame [14] is to replace the c's in Eqs. 1.6 by
(1.13a)
and (1.13b)
(Note that the rotating frame transformation is exact, as is this algebraic equivalent, and is completely different from the RWA.) Substituting these c's into Eqs. 1.6 and then making the RWA for 1i~e(t) gives

dc~(t) i l i d-t -

=

I
c
e

(

lin t )2-

(1.l4a)

and

iii d«t) = c~(t) lin _ c~(t)li8.

(1.l4b)

dt

2

Now the oscillations of Eqs. 1.6 are gone. This new set of equations is exactly what would arise by evaluating Eq. 1.4 directly with both a time-independent
perturbation 1i~e and the time dependence e-iwkt absorbed directly into each of the q(t)'s so that the unperturbed energies of states g and e do not appear. This
justifies the next step of diagonalizing the matrix formed from the coefficients of

8 1. Review of Quantum Mechanics

field off

field on

r - - - - - - (-8 - rl.')1i/2 E2 1-------'- - - - - - - - - - - .

1---------,,----------' - - - - - - (-8 + rl.')1i/2
bare states shifted states FIGURE 1.2. Energies of the two coupled states with the light field off and the light field on. The states are shifted due to the atom-light interaction, and the shift is called light shift.

Eqs.1.14:

(1.15)

The solutions show that the shifted energies are given by

Ee,g

=

Ii "2(-8

=f

/ Q),

(1.16)

« as shown in Fig. 1.2. In the limit where Q 181, the resulting energies are shifted
by

(1.l7a)

and (1.l7b)

Since the light intensity is proportional to Q2, !:lEg,e as given above is appropriately
called the light shift. In the limit Q » 181, the solutions give !:lEg = sgn(8)IiQ/2 and !:lEe = -sgn(8)IiQ/2, where sgn(8) == 8/181. The eigenstates corresponding
to !:lEg,e are called the dressed states of the atom and are calculated in the next section. Very often the light field is not homogeneous (e.g., in a standing wave) producing a spatially dependent light shift !:lEg,e(r). The force that results from this gradient of energy is called the dipole force and is discussed in more detail in Chapter 9.

1.2 The Rabi Two-Level Problem 9

43! _ = =_~ _

34! _ = =_~ _

2 _ __

34! _ = =_~ _

~:2----------

-------------

-

-

-----

)

~ :2_-___ -----1 -_-_--_-_- -
--- ----------- ---

)

n-1

n

Laser Field Quantum Number
FIGURE 1.3. Energy level diagram for the atom plus field Hamiltonian. In each vertical column there is the familiar level scheme of a typical atom, but the columns are vertically displaced by liwe because of the addition of one laser photon per column. The nearly degenerate pairs are indicated.
1.2.2 The Dressed Atom Picture
The eigenfunctions ofthe Schr6dingerequation for a two-level atom in a monochromatic field are best described in terms of the "dressed states" of the atom [5]. It begins with the total Hamiltonian
(1.18)
where Ha is the usual atomic part denoted by Ho in Sec. 1.1 that gives the atomic
energy levels, Hrad = liwe (a t a + 1/2) is the radiation part whose eigenvalues are
En = (n + 1/2)liwe, and Hint is the atom-field interaction such as H' (t) in Sec. 1.1
that causes transitions as well as light shifts. The energy level diagram of the first two terms in Eq. 1.18 consists of the
ordinary atomic energies repeated for each value of n and vertically displaced by liwe each time, as shown schematically in Fig. 1.3. Attention is focused on the two atomic states coupled by the laser light that form closely spaced pairs of one excited state and one ground state separated by 1iO, as shown in Fig. 1.4. They are each mixtures of the ground and excited states, found by diagonalizing the matrix in Eq. 1.15.
The third term in the Hamiltonian, the interaction between the atom and the field embodied in Hint. couples the ground and excited states that form each of these pairs through the off-diagonal matrix elements H~e (t). This splits the energy levels farther apart to IiQ' as given in Eq. 1.12c. Q' is independent of the sign of 8, and the shift Ii(Q' - 181)/2 is the light shift of each dressed state (see Eq. 1.16).

10 1. Review of Quantum Mechanics

FIGURE 1.4. The nearly degenerate pairs of energy levels of Fig. 1.3. In the presence of the coupling interaction, each of these pairs is a mixture of ground and excited states, so each can decay by spontaneous emission as indicated. This figure is different from Fig. 1.2 because the energy levels here are separated only by 8, whereas in Fig. 1.2 their separation is (J)a.

The light also mixes the states by an amount expressed in terms of a mixing
angle () given by cos(2(}) == -fJ/Q', so that each ground state is mixed with a
component of excited state and vice versa. These eigenstates of the Hamiltonian including this interaction are called the "dressed states" of the atom in the field [5]. The eigenfunctions are given by

11>,) = cos (}Ig) - sin (}Ie)

(1.19a)

and

1rf>2) = sin (}Ig) + cos(}le).

(1.19b)

In a standing wave, the light shifts of these dressed states vary from zero at the nodes to a maximum at the antinodes. The spatially oscillating energies found from
» Eq. 1.16 are not sinusoidal, except in the limit of fJ Q. This is apparent because
these oscillatory terms will always be dominated by fJ2 in the vicinity of a node.
Thus, for any value of Q » fJ, the expansion of Eq. 1.16 as t1E ~ IiQI cos kzl/2
will eventually fail near a node. The spatial variation of the internal energy of the atoms results in a force related
to the gradient of the energy. Although a more thorough and rigorous discussion
of optical forces is given in later chapters, it is simply noted here that the spatial
average over a wavelength of this force vanishes. However, the potential, and hence
the force, is different for different atomic states, and spatially dependent optical
pumping among various states of multilevel atoms can result in a non-vanishing
force.

1.2 The Rabi Two-Level Problem II z

y x

FIGURE 1.5. Graphical representation of the Bloch vector Ron the Bloch sphere.

1.2.3 The Bloch Vector
Because the overall phase of the wavefunction has no physical meaning, there are really only three free parameters in the solutions of Eqs. 1.6 for the complex q(t)'s. In a classic paper, Feynman, Vernon, and Hellwarth [15] considered a transformation to a rotating frame where they then combined the real and imaginary parts of the q(t)'s to form the three real parameters

rl == CgC; + C;Ce,

(1.20a)

r2 == ,.(cgce* - cg*ce),

(I.20b)

and

r3 == Icel2- Icgl2.

(1.20c)

The equations of motion 1.6 can be used to show that, in the rotating frame, a
vector Rwhose components are the three ri 's given above, obeys

dR .. ..
-=QxR, dt

(1.21)

n where the vector has the three components Re(1i~e)' Im(1i~e)' and M. Usually n 1i' is taken to be real, so Im(1i~e) vanishes and the components of become
1i~e' 0, and M. This result is equivalent to the "Bloch vector" picture [16] and is graphically depicted in Fig. 1.5.
Equation 1.21 shows that the Bloch vector Rprecesses with time without chang-
ing length, and its motion is thus confined to the surface of a sphere. The south (north) poles of this sphere correspond to the ground (excited) states of the atom, and equatorial points correspond to equal superpositions with various phases.

12 I. Review of Quantum Mechanics

y

(a)

(b)

(c)

R FIGURE 1.6. The evolution of the Bloch vector during adiabatic rapid passage. (a) It
begins with small precessions near the South pole because the atom starts in the ground state
and the large detuning makes Qpass near the poles. (b) As the detuning approaches zero the
R precession of becomes large circles centered on a point near the equator as shown in the
center picture. (c) Finally the detuning is very large in the opposite sense to its beginning,
resulting in small circular precession near the North pole. Thus the atom is left in the excited
x state. In all three pictures, the component of Qis chosen to be zero, and the y component
z is constant as shown. The detuning is represented by the vector pointing downward at the
start (a) and upward at the end (c).

» When 1i8 11l~el, the precession axis passes very nearly through the poles.
In this case, an atom initially in the ground state undergoes rapid precessions on
a small circle near the south pole and thus has a small excitation probability, as
shown in Eq. 1.12 and Fig. 1.1. By contrast, for 8 = 0, Q passes through the equator
so an atom initially in the ground state is described by a Bloch vector Rundergoing
slow, full-circle oscillations through the poles. The response of an atom initially
in an equal superposition of ground and excited states (on the equator) to a field
tuned to resonance (8 = 0) will therefore depend strongly on the components of
Rand thus on the mechanism that produced the superposition. The steady state for the Bloch vector is given by Qx R= O. There are two such
Bloch vectors, where one is parallel and the other antiparallel to Q. It can easily
be shown that these two vectors correspond to the eigenstates ofEq. 1.19.

1.2.4 Adiabatic Rapid Passage
The motion of Ron the Bloch sphere allows a particularly graphic interpretation
of a phenomenon called adiabatic rapid passage. If the frequency of the applied field is swept through resonance, an atom initially in the ground state is left in the excited state (and vice versa) with very high probability. At the beginning of
R the frequency sweep, executes small, rapid orbits near the south pole, and these 9 grow in size as 8 sweeps toward and the precession axis consequently ~proaches the equatorial plane. At 8 = 0, R undergoes polar oscillations because Q is now in
the equatorial plane, but the continually shifting axis now moves the center of the orbit on the surface of the sphere toward the north pole. Near the end of the sweep,

Laser beam
... direction

1.2 The Rabi Two-Level Problem 13

Laser waist

He*

FIGURE 1.7. Schematic diagram of the adiabatic rapid passage experiment of Ekstrom et al. [17]. A metastable He beam crosses the axis of a focused laser beam at a distance L R.

Rexecutes small, rapid orbits near the north pole, and at the end of the sweep, R
is left at the north pole, and the atom is left in the excited state (see Fig. 1.6).
The name adiabatic rapidpassage may seem a bit enigmatic: how can something
be both adiabatic and rapid? During the process of raising Rfrom the south to the
north pole of the Bloch sphere, there is always some component of the excited
state present, with a corresponding probability of spontaneous decay. Thus this
coherent excitation process can succeed only if it occurs in a time short compared
with the natural lifetime of the excited state 4Je(r), so it must be fast. Needless
to say, it must also be slow enough for the precessing Bloch vector Rto follow
the evolving axis of Qadiabatically. Thus there are boundaries determined by the
atomic parameters on the rate of sweeping the detuning d«5/dt. In practice, these
limits can be satisfied with ordinary lasers and atoms, but it takes some effort.
In a very clever experiment [17] this has been accomplished in an atomic beam
(see Fig. 1.7). The atoms traverse a focused laser beam along path a, well away from
its waist, so they experience a significant part of the wavefront curvature (which is
strongest at the Rayleigh length, L R). As a result of the Doppler shift, the atoms
first experience light whose frequency is shifted toward the blue, and then the
frequency sweeps through «5 = 0 and toward the red as they leave the laser beam.
(This sweep can be reversed by aligning the atomic beam along the alternative
v path a' shown in Fig. 1.7.) The Doppler shift is WD == -k· = -kv cos e, where vis the atomic velocity, and k is the laser's wavevector whose magnitude is 2rr/ A.
e e, From geometry, cot = vt / L R. Thus for small angles the frequency sweep
wDt = (-kv 2/ LR)t is linear in time t. For the experiment discussed here [17], metastable He(23S» atoms (v ~ 2000
mls) were excited to their 23p state (lifetime r ~ 100 ns) by A= 1.083 JLm light. For such atoms traversing a beam with a waist Wo ~ 10 JLm at a Raleigh length from it, the passage time 2-J2wo/v ~ 15 ns, is considerably less than the excited-state
lifetime. The waist size and wavelength determine the beam's angular divergence to
be A/rrwO, and hence a total frequency sweep of2v/rrwo, which is over 100 MHz.

14 1. Review of Quantum Mechanics
« Thus the intensity of the light is chosen to make Q 100 MHz, and corresponds
to a few mW/cm2 at the waist. The total power required is thus only a few nW! The experimenters used the deflection of the highly collimated beam of atoms resulting from their excitation, followed by the spreading caused by spontaneous emission, to determine that more than 98% of the atoms were excited this way.
1.3 Excited-State Decay and its Effects
In the discussion of time-dependent response of atoms to a radiation field above, the eigenfunctions of the time-independent Hamiltonian 1to were written as time independent. The wavefunction of the total Hamiltonian 1t in Eq. 1.2 included only the purely oscillatory behavior associated with the eigenvalues and the radiationinduced time dependence of the Ck (t) 's. That discussion omitted the spontaneous decay of the excited states resulting from their interaction with the zero-point energy of the-
 electromagnetic field. Spontaneous emission has played an important role in atomic physics since the conception of discrete atomic states by Bohr in 1913.
The problem of radiative transitions between discrete states in atoms was discussed by Einstein in 1917 [18], where he considered three radiative processes. In the first process, an amount of optical energy hwe (a "photon") is absorbed from an applied radiation field of angular frequency we, and atoms make transitions from the ground to the excited state. The newly introduced second process is stimulated emission, where a photon is emitted into the applied radiation field and the atoms make a tran-
sition from the excited to the ground state. Note that in both of these processes the total energy of the system consisting of the applied radiation field and the atoms is conserved. The third process is spontaneous emission, where a photon is also emitted and the atoms also make transitions from the excited to the ground state. However, unlike stimulated emission, the photon is not emitted in the mode of the radiation field, but has a random direction or polarization. Since the photon is emitted -
into the vacuum field, there is no longer conservation of energy for the system of radiation field plus atoms, since the vacuum field is outside the system. Finally, from the distribution of black body radiation, Einstein deduced that the fourth process, spontaneous absorption, is not possible.
The discussion in this chapter so far has properly accounted for the two stimulated processes discussed above (see Eqs. 1.11 and 1.12). The combined action of these two processes causes the oscillation in both the excited and ground state probabilities (see Fig. 1.1). For atoms initially in the ground state, the probability for absorption is large and the probability for them to go into the excited state increases. Once the atoms have a large probability to be in the excited state, however, the pr-
obability for absorption decreases and the probability for stimulated emission increases, which leads to the oscillations.
Up to now, spontaneous emission has been left out of the discussion. Including it is very complicated, since it leads to loss of photons, and hence energy, from

1.3 Excited-State Decay and its Effects 15

0.3 ~~~--r-~~....,~~~..,.-~~-r~~....--,

0.2
g 0.1
~ 0.0fL---....IL--------1.~-----__1
e.0
Po. 0•2
§ 0.1
'3.- O.O~--------------_;
~ 0.2

0.1

0.0 L.o<.....~~_'__~~-'-~~'___'_~~~.L..-...~__'____'

o

2

4

6

8

10

Time

FIGURE 1.8. Trajectories for atoms is a radiation field with Q = Y and 8 = -y, where y is the natural width. The number of atoms averaged over is I (a), 10 (b), and 100 (c).

the system of radiation field and atoms. One way to avoid the difficulty might be to include the vacuum field in the system, which would then be closed as before. However, the task of doing so is formidable because both the emission direction and the polarization direction are random in spontaneous emission. Thus it would be necessary to include the entire continuum of these parameters in the system, and such a description is beyond the scope of this book. Furthermore, in most cases the properties-
 of the emitted photon are not of interest, and information on the atom and the applied radiation field suffices.
The usual way to treat this problem in quantum mechanics is to introduce the density matrix p and to discuss the excitation of the atoms in terms of populations and coherences instead of amplitudes. This follows in the next chapter. Here an alternative view of this problem is presented.
This view is called the Monte Carlo wavefunction method and was recently described anew [19]. It is a numerical simulation that treats the evolution of the system with the same coupled Eqs. 1.6. However, at each instant there is some probability that an atom will undergo spontaneous emission within a certain, small time interval. This probability is proportional to the probability of the atom being
in the excited state, Ice l2 . In this "gedanken" experiment the state ofthe system is
observed by detecting the emitted photons with a photon counter. At each instant, the output of a random number generator is compared with the probability for a spontaneous emission, and if the random number is smaller, it is assumed that spontaneous emission has occurred (this is why this method is named after a city most famous for gambling). At that instant the evolution starts again from the
values cg = 1 and Ce = O. Since there is no interest in the emitted photon, it is
disregarded. Numerical results from this method are shown in Fig. 1.8. Note that there is a
random aspect of the description, which means that repeating the procedure for

16 1. Review of Quantum Mechanics
the same atom but with a different starting point in the pseudo random number sequence produces a different result. Thus a particular sequence results in a particular trajectory for a certain atom, but infinitely many different trajectories are possible. Figure 1.8a shows one possible trajectory for one atom. The oscillatory behavior is evident, as suggested in Fig. 1.1; however, the oscillations are interrupted by a spontaneous emission events near t = 1.9/y and t = 6.0/y. Repeating the procedure-
 with N=lO or 100 atoms (see Figs. 1.8b,c) still results in oscillatory behavior for small time periods; however, these oscillations damp out for longer
times. Also the discrete jumps, clearly visible for N =1, can no longer be easily
observed. This results from the averaging process, since the emission times are random and thus different for different atoms. This causes the oscillations to be damped and the excitation probability reaches its steady-state value.
One common misconception that may arise from Fig. 1.8c is that the atoms eventually cease oscillating between the ground and excited states. In most experiments, measurement are made on a large number of atoms and indeed the oscillations are damped. However, Fig. 1.8a clearly shows that each individual atom still oscillates, but that these oscillations are damped out by the averaging process. This topic will reappear in the density matrix approach that describes the evolution of an ensemble of ato-
ms.

2
The Density Matrix

Chapter 1 presented the equations for the coherent evolution of the amplitudes of a two-level atom in a radiation field. However, the effects of spontaneous emission cannot be described in terms of such coherent evolution of the eigenstates of the system. Spontaneous emission is most readily handled by the density matrix, which is introduced in this chapter. Since this topic is covered by many textbooks in quantum mechanics, it is only briefly presented in the first section here (for instance, see-
 Ref. 20). In the next section it is applied to the specific case of a twolevel atom in a radiation field. The resulting equations are solved and discussed in terms of the effects of spontaneous emission on the interaction of atoms by radiation fields.

2.1 Basic Concepts

In quantum mechanics all information about a system in a pure state is stored in the wavefunction IW}. However, in an experiment IW} cannot be measured directly. Instead, one can only determine the expectation values of a set of quantum
mechanical operators A given by

(A) = (WIAIW),

(2.1)

when W is normalized according to (WIW) = 1. By proper arrangement of the
experiment the wavefunction can be determined completely, except for one unnecessary parameter, the overall phase.
Alternatively, the state of the system can be described by the density operator p, which is given by p = IW}(WI. The density operator p can be written in terms of

18 2. The Density Matrix

the n x n density matrix, where n is the number of wavefunctions that completely

spans the Hilbert space. In general, the wavefunction \11 can be expanded in a basis

set {¢n} as in Eq. 1.2,

n

\11 = LCi¢i,

(2.2)

i=1

so that the elements of the density matrix become

(2.3)

and the normalization ofthe wavefunction yields Tr(p) = (\I1I\11) = 1. In the case
of a two-level atom in a radiation field, n = 2 so that P is a 2x2 matrix. Clearly the elements Pij depend on the basis states {¢n}. The diagonal elements
are the probabilities ICi 12 for the atom to be in state i, which are all between 0 and
1. The off-~iagonal elements cicj are called the coherences, since they depend on
the phase dIfference between Ci and Cj.
The expectation value of an operator given in Eq. 2.1 can be written as

j

i.j

i,j

j

Note that ifthe wavefunction \11 is multiplied by an arbitrary phase factor eict , there is no change of any observable of the system as shown by Eq. 2.4. Also P remains unchanged in this case, as required for an observable.
Since the density matrix contains n2 complex elements, in principle it would have 2n2 real, independent parameters. Because P is Hermitian (see Eq. 2.3), Pij = Pji and there remain n 2 independent elements. By contrast, thewavefunction \11 is completely specified by the expansion coefficients Ci, which contain only 2n - 1 independent parameters apart from its overall phase. This reduction in the number of parameters arises because the system under discussion here is in a pure state, which means th-
at there is a fixed relation between the diagonal and off-diagonal elements. This relation is found from Eq. 2.3 to be PijPji = PiiPjj.
The alternative to such a pure state is a statistical mixture of several states {\11n} that can no longer be specified by just a single wavefunction. In that case the state is represented by a density operator of the form

(2.5)

This relation has the intuitive meaning that the system is in state i with a certain probability Pi. It can easily be checked that there is no longer a fixed relation between diagonal and non-diagonal elements, but instead PijPji ~ PiiPjj. The complete information on the system now requires n2 independent elements of the density matrix.

2.1 Basic Concepts 19

The advantages of the density matrix formalism compared to the wavefunction approach can be summarized as follows: (1) It eliminates the arbitrary overall phase, (2) it establishes a more direct connection with observable quantities, and (3) it provides a powerful method for doing calculations. In addition, it can handle pure states as well as mixed states, the last one being of importance in the case of spontaneous emission.
The distinction between pure states and statistical mixtures is of fundamental importance in quantum mechanics. Suppose that for a certain quantum mechanical system there is a complete set of commuting operators. The question if a set of commuting operators is complete depends on the system under study. Then one measurement with each operator completely determines the state. Any subsequent measurement with one of the operators yields the same outcome as before, since all operators commute with eac-
h other. In this way the system has been prepared in a pure state, also referred to as a state of "maximum knowledge". If there is no measurement with one of the operators of this complete set, there is no information on the outcome of such a measurement. The system will then be in a statistical
mixture of states H\IInH with a probabilities pj to be in a pure state \IIj, where i
labels the eigenstates of the unmeasured operator. Spontaneous emission results in a transition of the system from an initial to a
final state and can convert a pure state to a statistical mixture. This can happen because statistical mixtures are not only a consequence of incomplete preparation of the system, but also occur if there is only partial detection of the final state. Suppose a system consists of two parts A and B, such as an atom and a radiation field that are coupled, but only part A is observed. Then information about part B is lost, and a statistical average over part B is necessary. Using the density matrix to -
describe the system, one has to take the trace over part B, or
(2.6)

If the system was initially in a pure state, the incomplete detection process causes the pure state to evolve into a statistical mixture.
As an example, consider a two-level atom in the excited state. After a short time the atom has a probability to remain in the excited state or it can make a transition to the ground state by spontaneous emission of a photon. The evolution of this system is given by

L 1\11) = a(t)le; 0) + !Js(t)lg; Is),

(2.7)

s

where the state of the atom is indicated by e or g and the emitted photon by
S = (k, e) with its wavevector k and its polarization e. Note that the photon can
be emitted in all directions with a certain polarization, so the sum runs over all possible values of S. If one only observes the state of the atom and not the emitted
photon, then the atom will be found in either the excited state Ie) or the ground state
Ig); however, it will no longer be in a pure state. The new state can be described

20 2. The Density Matrix

by its density matrix Patom:

L Patom = Trph I\II} (\III = Icx(t)1 2 Ie}(el + IfJs(t)12 Ig}(gl.

(2.8)

s

The pure state I\II} has evolved to a statistical mixture of Ie} and Ig} since the emitted photon has not been observed. Equation 2.8 shows that phase information has been lost from Eq. 2.7.
From the definition of the density matrix in Eq. 2.3, it is easy to show that for a pure, normalized state p2 = p, whereas for a statistical mixture p2 =f:. p. In a pure state, one of the eigenvalues of the density matrix is unity and all the others are zero. In the case of a statistical mixture there are several eigenvalues between 0 and 1, which are the probabilities for the state to be in a particular eigenstate. These properties make it possible to determine from a given density matrix whether-
 the system is in a pure state or not.

2.2 Spontaneous Emission
The previous section showed that spontaneous emission causes a pure state to evolve into a mixed state because only the atom and the laser field are considered (part A) and not the spontaneously emitted light (part B). This results in a huge simplification of the description because the spontaneously emitted light can travel in many different directions and have different polarizations. The number of modes is infinite and this complicates the situation enormously. Furthermore, spontaneous emission-
 cannot be properly handled within the framework of a semiclassical description of the electromagnetic field as was done in Chapter 1, because it is induced by vacuum fluctuations of the field. There are various books describing the quantization of the field that produces such fluctuations, and these books should be consulted for details [21-23].
In his famous 1917 paper [18], Einstein not only showed that stimulated emission was necessary to explain Planck's blackbody spectrum, but also derived the spontaneous emission rate using detailed balancing between spontaneous and stimulated processes. Although his result is correct, his derivation does not show the true nature of the spontaneous emission process. Its properties emerge from the Wigner-Weisskopftheory that is summarized here [24]. In this theory it is shown that an atom in the exci-
ted state decays exponentially as a result of the fluctuations of the quantized vacuum field. The rate of this decay process is just the spontaneous emission rate.
Consider an atom in the excited state at t = 0 and no photons in the radiation
field. The system is in a pure state Ie; O}, where the first parameter in the ket describes the state of the atom and the zero indicates the absence of photons in the field. The system makes a transition from the excited to the ground state by spontaneous emission, emitting one photon into the radiation field. Then the state
is denoted by Ig; Is} with S = (k, e) the mode of spontaneous emission, where

2.2 Spontaneous Emission 21

the direction of the emitted photon is explicitly indicated by its wavevector kand
its polarization bye. The state of the system can now be described analogously to Eq. 1.2 by

+ \{I(t) = ceoe-iWe'le; 0) LCglSe-i(Wg+W)'lg; Is),
s

(2.9)

where the sum is over all possible modes S. Note that the frequency w in the exponent must be replaced by kc for the summation. Even though the summation
runs over an infinite number of modes, this notation is sufficient for now. To describe the evolution of the wavefunction in time, the Hamiltonian of the
system has to be defined. This requires the quantization of the electromagnetic field, which will not be described here. However, the only part of the Hamiltonian that couples the two states in Eq. 2.9 is the atom-field interaction: the atomic and field parts play no role. This coupling is analogous to its semiclassical counterpart, and the result for the time evolution of the two states is

. dCeQ(t)
I
dt

_
-

'~"CglS (t) n~'s e-i(w-wa), s

(2. lOa)

and

.dCglS(t) _

I

-

CeO (t ) nU*s ei(w-wa ), .

dt

(2. lOb)

These equations are similar to Eq. 1.4, where the coupling for each mode is given
Ew by nOs = -;1 . and Os is called the vacuum Rabi frequency. The dipole = moment is;1 e{elrlg) and the electric field per mode is found from the classical

expression for the energy density to be

(2.11)

Here V is the volume used to quantize the field, and it will eventually drop out of the calculation. The total energy of the electromagnetic field in the volume V is given by hwj2, corresponding to the zero point energy of the radiation field. By directly integrating Eq. 2.10b and substituting the result into Eq. 2.10a, the time evolution of ceo(t) is found to be

t dC~~(t) = _ L IOsl2 dt'e-i(w-wa)(t-t')ceo(t').
s Jo

(2.12)

This represents an exponential decay of the excited state, and to evaluate the decay rate it is necessary to count the number of modes for the summation and then do
the time integral.
To count the number of modes S = (k, e), represent the field by the complete set
of traveling waves in a cube of side L. Since the field is periodic with a periodicity
L, the components of k are quantized as ki = 2rrn;/L, with i = x, y, z. Then

22 2. The Density Matrix

dni = (L/2rr)dki and therefore dn = (L/2rr)3d3k. The frequency W is given by

w = kc, so

Va} dn = 2 x -3-3 sin () dwd()dt{J.
8rr c

(2.13)

The factorof2 on the right-hand side ofEq. 2.13 derives from the two independent
e polarizations of the fluorescent photons. Now replace the summation in Eq. 2.12
by an integration over all possible modes, insert the result of Eq. 2.13, and then

integrate over the angles () and t{J to find

(2.14)

where the volume V has dropped out, since 1Qs 12 ex 1/ V. In this result, the
orientation of the atomic dipole with respect to the emission direction has been taken into account, which yields a reduction factor of 1~ for a random emission direction.
The remaining time integral can be evaluated by assuming that the dipole moment J.L varies slowly over the frequency interval of interest, so it can be evaluated
at w = Wa. Furthermore, the time integral is peaked around t = t', so that the co-
efficient ceo(t) can be evaluated at time t and taken out of the integral. The upper boundary of the integral can be shifted toward infinity, and the result becomes

r i_) , lim
10 t-+oo

= dt' e-i(w-wa)(t-t') rro(w _ wa ) _ P ( __
W - Wa

(2.15)

where o(x) is the delta function and P(x) is the principal value. The last term is

purely imaginary and causes a shift of the transition frequency, which will not be

discussed further. Substitution of the result of Eq. 2.15 into Eq. 2.14 yields the

final result

dceo(t) = -~c o(t)

dt

2e ,

(2. 16a)

where

W3J.L2
Y = 3rrEollc3'

(2.16b)

Since the amplitude of the excited state decays at a rate y /2, the population of the
state decays with y and the lifetime of the excited state becomes r == 1/y .
The decay of the excited state is irreversible. In principle, the modes of the spontaneously emitted light also couple to the ground state in Eqs. 2.10, but there is an infinite number of modes in free space. The amplitude for the reverse process has to be summed over these modes. Since the different modes add destructively, the probability for the reverse process becomes zero. The situation can be changed by putting the atom in a reflecting cavity with dimensions of the order of the optical wavel-
ength A.. Then the number of modes can be changed considerably compared to free space. In quantum optics, several experiments have been carried out where this effect has been detected.

2.3 The Optical Bloch Equations 23
2.3 The Optical Bloch Equations

It is straightforward to use Eq. 1.4 to show that the time dependence of the density matrix depends on the Hamiltonian simply as

. dp lli-

=

[1i,

pl.

dt

(2.17)

This relation points out the special role of p in quantum mechanics. Note that the

sign on the right-hand side is opposite to the usual Heisenberg equation of motion

for quantum mechanical operators. The rest of this section continues the analysis

of the Rabi two-level problem using the density matrix, which is written for a pure

state as

p = ( Pee
Pge

(2.18)

The effects of the coupling to the light field and spontaneous emission can be added independently [25]. The evolution equation for the terms Pij in the case of interaction with a laser can be found by applying the evolution equation for the amplitudes, given by Eq. 1.11. For instance, in the case of Pgg this is

dpgg dcg *

dc; . Q* _ . Q _

d t = d(cg + cgd( = ITPeg -1"2 Pge ,

(2.19)

where Pge == pgee-i8t . In the same manner, equations for the time derivative of
the other elements of the density matrix can be obtained. Solving these equations gives the same solutions as Eqs. 1.12. The identification of Pij in terms of cicj is valid for a pure state, but loses its meaning for a statistical mixture.
Spontaneous emission can now be described by an exponential decay of the coefficient Peg (t) with a constant rate y /2,

( ddPetg ) spon = -'2Y Peg '

(2.20)

The ground state is stable against spontaneous emission, but the population of the ground state still changes because of the spontaneous emission process, since the excited state decays to the ground state. The loss of population of the excited state leads to a gain of population in the ground state. This leads to the following equations for the two-level system, including spontaneous emission:

(2.21)

24 2. The Density Matrix

g 0.20
~
~.D 0.15
§ .~ 0.10
~ 0.05

0.00 1L.......o..~""'"--'~~""'"--'~~""'"--''---'-~""'"--'~~"'--'

o

2

4

6

8

10

Time

FIGURE 2.1. Probability ICe(t)12 for the atom to be in the excited state for Q = Y and Il = -y by numerical integration of the OBEs. The solutions are identical to the Monte Carlo wavefunction method with an infinite number of atom trajectories. Time is in units of l/Y.

These equations are called the optical Bloch equations (aBE), in analogy to the Bloch equations for nuclear magnetic resonance. Note that dpee/dt = -dpgg /dt, in accordance with the requirement of a closed two-level system where the total
population Pgg + Pee = 1 is conserved.
Furthermore, it is explicitly assumed that the decay of the coherences and the decay of the excited state are described by a single parameter y. This will always be the case in the systems discussed within the framework of laser cooling. However,
in cases where collisions between atoms playa role, the decay ofthe coherences and
the populations are described by different decay parameters, and in those cases
parameters Tt and T2 are introduced to account for this difference. For details
regarding this issue the reader is referred to several books on this topic [7,14].
The steady-state solutions of Eqs. 2.21 are discussed in the next section. How-
ever, the temporal behavior can be found by direct numerical integration. The
results are shown in Fig. 2.1 for the case Q = y and 8 = -y. This is identical to
the result obtained with the Monte Carlo wavefunction method at the end of Chap-
ter 1, if an infinite number of trajectories is used in the Monte Carlo wavefunction method.

2.4 Power Broadening and Saturation
The steady-state solutions of the aBE can be found by setting the time derivatives to zero and exploiting certain relationships among the n2 = 4 real, independent parameters of P for a two-level system. The conservation of the population given
by Pgg + Pee = 1 eliminates one of these parameters, and two of the others are

2.4 Power Broadening and Saturation 25

complex conjugates. Using the population difference w == Pgg - Pee and the optical
coherence Peg = P;e in the aBE gives

ddPetg =

-

("2Y-

. zli

)

Peg

+

iwQ -2-

(2.22a)

and

ddwt = -yw -1(. QPe*g - Q*Peg) + y.

(2.22b)

The steady-state case has dPeg/dt = dw/dt = 0, and the resulting equations can
be solved for wand Peg:

W=--
I+s

(2.23a)

and

Peg = 2(y /2 - ili)(1 + s)'

(2.23b)

Here the saturation parameter s is given by

\Q\2

\Q\2/2

So

s=
- 2\(y/2 -

-
ili)\2 -

li2

+

y2/4

=
-

-I-+- -(-2-l i;/:y;) -2 '

(2.24a)

where the last step defines the on-resonance saturation parameter

(2.24b)

with the saturation intensity given by

(2.24c)
« For the case of a low saturation parameter, s 1, the population is mostly in
the ground state (w = 1), whereas in the case of high s the population is equally distributed between the ground and excited state (w = 0). The population Pee of
the excited state is given by

I

s

so/2

Pee = 2(1 - w) = 2(1 + s) = 1 + So + (2li/y)2'

(2.25)

» and for s 1, Pee approaches 1/2, Since the population in the excited state decays
at a rate y, and in steady state the excitation rate and the decay rate are equal, the total scattering rate yp of light from the laser field is given by

soy/2
yp = YPee = I + So + (2li/y)2'

(2.26)

At very high intensities, where so» 1, yp saturates to y /2. This equation can be

rewritten as

yp =

(

So )
1 + So

(

y/2 )
I + (2li/y')2

'

(2.27a)

26 2. The Density Matrix

0.50
,......., 0.40
~ ~
~ 0.30
·cbcI) 0.20
~
0
rJl 0.10

5 0=100.0 50= 10.0 so= 1.0 50= 0.1

0.00

" ,
/

-10

-5

0

5

10

Detuning 8 [y]

FIGURE 2.2. Excitation rate yp as a function of the detuning 8 for several values of the
saturation parameter so. Note that for So > 1 the line profiles start to broaden substantially
from power broadening.

where

y' = yJI +so

(2.27b)

is called the power-broadened linewidth of the transition. Because of saturation, the linewidth of the transition as observed in an experiment, where the absorption of light is detected while scanning its frequency, is broadened from its natural linewidth y to its power-broadened value y'.
Figure 2.2 shows a plot of yp as a function of the detuning 8 for several values
of the saturation parameter so. For large values of So there is a significant power
broadening of the spectral profile, which is a direct consequence of the fact that
for large So, the absorption continues to increase with increasing intensity in the
wings, whereas in the center half of the atoms are already in the excited state. The absorption in the center of the profile is therefore saturated, whereas in the wings it is not.
Note that other line-broadening mechanisms, such as the Doppler effect, pressure broadening, and others, have been left out of the present discussion. However, they might also playa significant role under certain conditions, and their convolution with power broadening has to be considered carefully because of the different line shapes.
The scattering of light from a laser beam results in intensity loss when the beam travels through a sample of resonant atoms. The amount of scattered power per unit of volume is given by hwypn, where n is the density of the atoms. Thus dl/dz = -hwypn for a laser beam of intensity I traveling in the z-direction. For low intensity light tuned near the atomic resonance, the scattering rate is given by

2.4 Power Broadening and Saturation 27

Yp ~ soY /2, so the absorption rate is

-dl = -Gegn/,
dz

(2.28a)

where the cross section Geg for scattering light out of the beam on resonance is

given by

Geg = -liwy = -3A.2.
2Is 2n

(2.28b)

Note that this cross section is of the order of A.2, which is much larger than the
a5. cross section for atom-atom interactions, typically of the order of
The solution of Eq. 2.28a is 1(z) = 10 exp( -Gegnz), and the cross section of Eq. 2.28b allows for an estimate of the densities for which absorption becomes important. Using A. ~ 500 nm and an interaction length of I mm, the laser beam is appreciably absorbed if the density is of the order of 1010 atoms/cm3• Such densities can be achieved in optical traps, and so the total absorption of the light at the edge of the atomic cloud can severely diminish the trapping potential. Also, the reabsorption o-
f spontaneously emitted light causes a repulsion between the atoms, which limits the obtainable density in optical traps.

3
Force on Two-Level Atoms
Laser cooling and trapping rely on the interaction between laser light and atoms to exert a controllable force on the atoms, and many sophisticated schemes have been developed using the special properties of the interaction. The outcome is a new field called laser cooling and trapping of atoms that has flourished over the last decade.
This chapter considers the simplest schemes for exerting optical forces on atoms, namely, a single-frequency light field interacting with a two-level atom. The description is one dimensional (the z-direction) and shows how the absorption and emission of light alters the velocity of the atoms. It is based on the interaction of two-level atoms with a laser field as discussed in Chapters 1 and 2. Although this is the simplest possible scheme, it is pedagogically valuable because it shows many of the -
features that will be encountered in the rest of the book.
3.1 Laser Light Pressure
The philosophy of the correspondence principle requires a smooth transition between quantum and classical mechanics. Clearly the orbits of the planets can be described with arbitrary accuracy using classical mechanics, but just as clearly, they must conform to the rules of quantum mechanics. The quantum version of Newton's laws is embodied in the Ehrenfest theorem [26], a simple statement that the expectation value of an operator must correspond to the behavior of its classical counterpart.

30 3. Force on Two-Level Atoms

In this section the semiclassical description of the interaction of a light field with a two-level atom is used to derive the laser light pressure on an atom. The force F on an atom is defined as the expectation value of the quantum mechanical force operator F, as defined by

d F = (F) = - (p) .
dt

(3.1)

The time evolution of the expectation value of a time-independent quantum me-
chanical operator A is given by [6]

d dt

(A)

=

Ii i

([H,

A])

.

(3.2)

The commutator of Hand p is given by

[H,

p]

=

aH
ili-,

(3.3)

az

where the operator p has been replaced by -ili(ajaz). The force on an atom is

thus given by

F=-(~7)·

(3.4)

This relation is a specific example of the Ehrenfest theorem and forms the quantum

mechanical analog of the classical expression that the force is the negative gradient

of the potential.

Discussion of the force on atoms caused by light fields begins with the relevant

part of the Hamiltonian of the system, H' (t) given in Eq. 1.8. Then the force is

simply

e(:z (F) = F = (l(r, t)· r)).

(3.5)

Using the electric dipole approximation, i.e., neglecting the spatial variation of the electric field over the size of an atom, allows the interchange of the gradient with the expectation value, and gives

:z F = e ((l(r, t) . r)) ,

(3.6)

whose matrix has only off-diagonal entries. The expectation value can be found
using the definition of the Rabi frequency of Eq. 1.10 and the expectation value
(A) = Tr(pA) from Eq. 2.4, resulting in

F

=

Ii

(

an *
azPeg

+

aa;n:*Peg)

.

(3.7)

Deriving this result requires the RWA that neglects terms oscillating with the laser frequency. Note that the force depends on the state of the atom, and in particular, on the optical coherence between the ground and excited states, Peg.

3.2 A Two-Level Atom at Rest 31
Although it may seem a bit artificial, it is instructive to split anjaz into its real
n and imaginary parts (the matrix element that defines in Eq. 1.10 can certainly
be complex):
(3.8)
Here qr + iqi is the logarithmic derivative of n. In general, for a field E(z) = Eo(z) exp(i¢(z» + c.c. the real part of the logarithmic derivative corresponds to
a gradient of the amplitude Eo(z) and the imaginary part to a gradient of the phase ¢(z). Then the expression for the force becomes

Equation 3.9 is a very general result that can be used to find the force for any
particular situation as long as the optical Bloch equations (OBE) for Peg can be
solved (see Eqs. 2.21). In spite of the chosen complex expression for n, it is
important to note that the force itself is real, and that first term of the force is
proportional to the real part of np:g , whereas the second term is proportional to
the imaginary part.

3.2 A Two-Level Atom at Rest

The remainder of this chapter will be devoted to two specific cases for the laser field. The first one is a traveling wave whose electric field is given by Eq. 1.9:

E(z) = ~o (ei(kZ-WI) + c.c.).

(3.10)

In calculating the Rabi frequency from this, the RWA causes the positive frequency component of E(z) to drop out (see Eqs. 1.2 and 1.10). Then the gradient ofthe Rabi frequency becomes proportional to the gradient of the surviving negative frequency component, so that qr = 0 and qi = k. For such a traveling wave the amplitude is constant but the phase is not, and this leads to the nonzero value of
qi· This is in direct contrast to the case of a standing wave, composed of two
counterpropagating traveling waves so its amplitude is twice as large, for which the electric field is given by

E(z) = Eo cos(kz) (e- iW1 + c.c.) ,

(3.11)

so that qr = -k tan(kz) and qi = o. Again, only the negative frequency part
survives the RWA, but the gradient does not depend on it. Thus a standing wave
has an amplitude gradient, but not a phase gradient. The singularity in qr from the
tangent function for a standing wave does not lead to problems, since it occurs at
n the node of the field where the Rabi frequency is zero.

32 3. Force on Two-Level Atoms
The steady-state solutions of the aBE for an atom at rest are given in Eqs. 2.23. Substituting the solution for Peg of Eq. 2.23b into Eq. 3.9 gives

(3.12)

Note that the first term is proportional to the detuning ", whereas the second term
is proportional to the decay rate y. For zero detuning, the force becomes F = (hky /2)[so/(so + 1)], a very satisfying result because it is simply the momentum
per photon hk, times the scattering rate yp of Eq. 2.26. It is instructive to identify the origin of both of the terms in Eq. 3.12. Absorption
of light leads to the transfer of momentum from the optical field to the atoms. If the atoms decay by spontaneous emission, the recoil associated with the spontaneous
fluorescence is in a random direction, so its average over many emission events results in zero net effect on the atomic momentum. Thus the force from absorption followed by spontaneous emission can be written as

Fsp = hk Y Pee,

(3.13)

where the first factor is the momentum transfer for each photon, the second factor is the rate for the process, and the last factor is the probability for the atoms to be in the excited state. Although it may seem natural for this expression to depend on the ground-state population Pgg and not the excited-state population Pee, using Pee simply builds in the dependence of absorption on detuning and intensity, including saturation. Using Eq. 2.26, the force resulting from absorption followed by spon-
taneous emission becomes

F. _ hksoy/2 sp - -1-+-s-o-+-(2-"-/-y-=)2'

(3.14)

which saturates at large intensity as a result of the factor So in the denominator. Increasing the rate of absorption by increasing the intensity does not increase the force without limit, since that would only increase the rate of stimulated emission, where the transfer of momentum is opposite in direction compared to the absorption. Thus the force saturates to a maximum value of hky /2, because Pee has a
maximum value of '/2 (see Eq. 2.25).
Examination of Eq. 3.13 shows that it clearly corresponds to the second term of Eq. 3.9. This term is called the light pressure force, radiation pressure force, scattering force, or dissipative force, since it relies on the scattering of light out of the laser beam. It vanishes for an atom at rest in a standing wave where qi = 0, and this can be understood because atoms can absorb light from either of the two counterpropagating beams that make up the standing wave, and the average momentum transfe-
r then vanishes. This force is dissipative because the reverse of spontaneous emission is not possible, and therefore the action of the force cannot be reversed. It plays a very important role in the slowing and cooling of atoms as discussed in Chapters 6 and 7.

3.2 A Two-Level Atom at Rest 33

By contrast, the first term in Eq. 3.9 derives from the light shifts of the ground and excited states, described in Sec. 1.2.1. Such light shifts depend on the strength ofthe optical electric field. A standing wave is composed of two counterpropagating laser beams, and their interference produces an amplitude gradient that is not present in a traveling wave. The resulting spatially modulated light shift produces a force that is different from that of Eq. 3.13. The force is proportional to the grad-
ient of the light shift, and Eq. 1.17a can be used to find the force on ground-state atoms in low intensity light:

a(L'1Eg) hQ aQ

Fdip=-

=--.

az

28 az

(3.15)

For an amplitude-gradient light field such as a standing wave, aQjaz = qr Q, and
this force corresponds to the first term in Eq. 3.9 in the limit of low saturation
« (s 1). The apparent difference in the dependence on 8 is merely a consequence
of the expansion of the radical as done in Eqs. 1.17.

For the case of a standing wave Eq. 3.12 becomes

2hk8so sin 2kz

Fd· -
Ip -

1

-+-4-so-c=os2-k-z-+-

--::-
(28jy)2'

(3.16)

where So is the saturation parameter of each of the two beams that form the standing wave. For 8 < 0 the force drives the atoms to positions where the intensity has a maximum, whereas for 8 > 0 the atoms are attracted to the intensity minima. The force is conservative and can be written for an atom at rest as the gradient of a potential Udip given by

)2). u. = ~h810 (1 + 4socos2 kz + (28 jy

dip 2 g

1 + (28jy)2

(3.17)

The potential depth can be increased by increasing 8 because of the first factor, but when (8jy)2 becomes much larger than So the potential depth decreases because ofthe logarithmic term in Eq. 3.17. When (8jy)2 »so the potential Udip reduces to the light shift L'1Eg of Eq. 1.17a, corrected for the presence of two beams.
The force Fdip is called the dipole force, reactive force, gradient force, or redistribution force. It has the same origin as the force of an inhomogeneous dc electric field on a classical dipole, but relies on the redistribution of photons from one laser beam to the other. The entire Chapter 9 is devoted to dipole forces, and they play an important role in both cooling and trapping of atoms, as discussed in Chapters 8 and 11.
It needs to be emphasized that the forces of Eqs. 3.14 and 3.16 are two fundamentally different kinds of forces. For an atom at rest, the scattering force vanishes for a standing wave, whereas the dipole force vanishes for a traveling wave. The scattering force is dissipative, and can be used to cool, whereas the dipole force is conservative, and can be used to trap. Dipole forces can be made large by using high intensity light because they do not saturate. However, since the forces are conservati-
ve, they cannot be used to cool a sample of atoms. Nevertheless,

34 3. Force on Two-Level Atoms
they can be combined with the dissipative scattering force to enhance cooling in several different ways, as described in Chapters 8 and 9. By contrast, scattering forces are always limited by the rate of spontaneous emission y and cannot be made arbitrarily strong, but they are dissipative and are required for cooling.

3.3 Atoms in Motion

Laser cooling requires velocity-dependent forces that cannot derive from the gradient of a potential. Instead, it depends upon dissipative forces that are velocity dependent. Including the velocity of the atoms in the OBE is possible, but the resulting equations are usually too hard to solve analytically.
Instead, the procedure will be to treat the velocity of the atoms as a small perturbation, and make first-order corrections to the solutions of the OBE obtained for atoms at rest [27]. It begins by adding drift terms in the expressions for the relevant quantities. Thus the Rabi frequency satisfies

-dQ

=

-aQ

aQ +v-

=

-aQ

+v(q

+iq·)Q,

dt at az at

r

I

(3.18)

where Eq. 3.8 has been used to separate the gradient of Q into real and imaginary parts. In the same way, differentiating Eq. 2.23a leads to

dw aw aw aw 2vqrs

-=-+v-=--

,

dt at az at (1+s)2

(3.19a)

since So = 21Q12/y2 and Q depends on z. Similarly, differentiating Eq. 2.23b

leads to

Vaz [(1- --at --at dPeg OPeg aPeg aPeg

ivQ

S) . ]

dt = +

=

+ 2(y/2 - i8)(1 + s) qr 1 + s + lqi .

(3.19b)

In both of these calculations it must be remembered that Q is complex, so differ-

entiating So results in two terms that give aso/az = 2qrso. In Eqs. 3.19 the value

of w in ow/az has been taken from its steady-state value given by Eq. 2.23a, and

similarly for Peg. Since neither w nor Peg is explicitly time dependent, both aw/at

and aPeg / at vanish. The Eqs. 3.19 are still difficult to solve analytically for a gen-

eral optical field, and the results are not very instructive. However, the solution

for the two special cases of the standing and traveling waves provide considerable

insight.

3.3.1 Traveling Wave
For a traveling wave qr = 0, and the velocity-dependent force can be found by
combining Eqs. 3.19 with Eqs. 2.22 to eliminate the time derivatives dw/dt and

3.3 Atoms in Motion 35

dPeg / dt. The resulting coupled equations for wand Peg can be separated and

substituted into Eq. 3.9 for the force to find, after considerable algebra,

/2 (I F - Ii . sy - q1l+s

+

28vqi (l+s)(82 +y2/4)

)

=
-

fj 0

fJv
.

(3.20)

The first term is the velocity-independent force Fo for an atom at rest given by

Eq. 3.12. The second term is velocity-dependent and can lead to compression of the
velocity distribution. For a traveling wave qi = k and thus the damping coefficient

fJ is given by

_ -lik2 4so(8/y)

fJ -

(1 + So + (28/y)2)2'

(3.21)

Note that such a force would compress the velocity distribution of an atomic sample for negative values of 8, i.e., for red detuned light. For small detuning and low intensity the damping coefficient fJ is linear in both parameters. However, for detunings much larger than y and intensities much larger than Is, fJ saturates and even decreases as a result of the dominance of 8 in the denominator of Eq. 3.21. This behavior can be seen in Fig. 3.1, where the damping coefficient fJ has been plotted as -
a function of detuning for different saturation parameters. The decrease of fJ for large detunings and intensities is caused by saturation of the transition, in which case the absorption rate becomes only weakly dependent on the velocity.
The maximum value of fJ is obtained for 8 = - y /2 and So = 2, and is given by

fJrnax = Iik2 / 4. The damping rate r is given by r == fJ / M, and its maximum value is

(3.22)

Iik2 Wr rrnax = - =-,
4M 2

(3.23)

where Wr is the recoil frequency discussed near the end of Sec. 5.1. For the alkalis this rate is of the order of 104_105 s-I, indicating that atomic velocity distributions can be compressed on the order of 10-100 J..LS. Furthermore, Fo in Eq. 3.20 is always present and so the atoms are not damped toward any constant velocity.

3.3.2 Standing Wave

For a standing wave qi = 0, and just as above in Sec. 3.3.1, the velocity-dependent force can be found by combining Eqs. 3.19 with Eqs. 2.22 to eliminate the time derivatives. The resulting coupled equations for w and Peg can again be separated and substituted into Eq. 3.9 for the force to find

_

s8 (

(l-S)y2-2S2(82+y2/4))

F--liqr l+s I-vqr (8 2 +y2/4)(l+s)2y ,

« where qr = -k tan(kz). In the limit of s 1, this force is

(3.24)

s08y2 (

Y

)

F=lik 2(82 +y2/4) sin2kz+kv(82 +y2/4) (l-cos2kz) .

(3.25)

36 3. Force on Two-Level Atoms

......
M ~
5. 0.20

.§
u

0.15

~

~ 0.10

~

fo..... .05

",

-"'- O.OO~~~-L~~~~~~~~~~·~··=~~·~~·-=:-=·_-·~-~·-

0.0 -0.5 -1.0 -1.5 -2.0 -2.5 Detuning ~ [y]

FIGURE 3.1. The damping coefficient fJ for an atom in a traveling wave as a function of
the detuning for different values of the saturation parameter so. The damping coefficient is maximum for intermediate detunings and intensities.

Here So is the saturation parameter of each of the two beams that compose the

standing wave. The first term is the velocity-independent part of Eq. 3.12 and is

sinusoidal in space, with a period of 'A/2. Thus its spatial average vanishes. The

force remaining after such averaging is Fav = - fJ v, where the damping coefficient

fJ is given by

fJ = -hk2 8so(~/y) .
+ (1 (2~/y)2)2

(3.26)

In contrast to the traveling-wave case, this is a true damping force because there
= is no Fo, so atoms are slowed toward v 0 independent of their initial velocities. « Note that this expression for fJ is valid only for s 1 because it depends on
spontaneous emission to return excited atoms to their ground state. By contrast,
the value of fJ for a traveling wave given in Eq. 3.21 is valid for all values of s by virtue of its saturation, as discussed below. The standing-wave value of fJ is
twice as large as the traveling-wave value, since a standing wave is the sum of two traveling waves, and their damping coefficients add constructively.
There is an appealing description of the mechanism for this kind of cooling in a standing wave. With light detuned below resonance, atoms traveling toward one laser beam see it Doppler shifted upward, closer to resonance. Since such atoms are traveling away from the other laser beam, they see its light Doppler shifted further downward, hence further out of resonance. Atoms therefore scatter more light from the beam counterpropagating to their velocity, and thus their velocity is lowered. This is t-
he damping mechanism called optical molasses, discussed in detail in Chapter 7. It is one of the most important tools of laser cooling.
Needless to say, such a pure damping force would reduce the atomic velocities, and hence the absolute temperature, to zero. Since this violates thermodynamics, there must be something left out of the description. It is the discreteness of the

3.3 Atoms in Motion 37
momentum changes in each case, !:J.p = hk that results in a minimum velocity change. The consequences of this discreteness can be described as a diffusion of the atomic momenta in momentum space by finite steps, and is discussed in Secs. 5.3 and 7.2.
The damping coefficient f3 for a traveling wave given in Eq. 3.21 can easily in-
clude the effects ofhigh values ofs because the momentum change from stimulated emission exactly cancels that of absorption, and the saturation of the absorption described by Eq. 2.26 accounts for the high-intensity effects. By contrast, the damping
coefficient f3 for a high-intensity standing wave is more complicated because there
can be absorption from One beam followed by stimulated emission from the other. Since the order of these processes can be random, this constitutes a totally different form of momentum diffusion. It is related to the spatially sinusoidal dipole force deriving from the light shift, which itself is the result of absorption followed by stimulated emission. Thus this "dipole force contribution to the diffusion" may be viewed as momentum impulses arising from atoms located at different positions On the -
sinusoidal potential of the light shift in the standing wave, whose amplitude increases with intensity.

4
Multilevel Atoms
The discussion up to here has focused on the two-level atom problem where the light field couples a single ground and excited state. In practice atoms have many levels, and in general the light field couples more than two levels at the same time. Two-level atoms are often discussed in the literature because it is straightforward to obtain analytical results. Such solutions provide much insight and understanding that cannot be obtained from the numerical solutions required for more complicated atom-
s.
However, in laser cooling one must deal with the coupling of large numbers of states by light. This chapter discusses the nature of these states and shows their origin for specific atoms (alkali-metal and metastable rare gas atoms). The discussion is generally restricted to the ground and first excited states, since these are the only ones that playa significant role in laser cooling.
4.1 Alkali-Metal Atoms
Alkali-metal atoms were the first ones to be cooled and trapped. Their popularity stems from multiple origins. Most important is that the excitation frequency from the lowest to the first excited state is in the visible region, which makes it relatively simple to generate light for the optical transitions. Another reason for their popularity is that it is easy to generate an atomic beam for the alkalis, which have a large vapor pressure at a modest temperature of only a few hundred degrees Centigr-
ade. Heating alkali-metals in an oven with a small opening produces an effusive beam of atoms that can be readily manipulated by laser light.

40 4. Multilevel Atoms

The ground states of all the alkali-metal atoms have a closed shell with one
valence electron. For sodium (Na), which is often used in laser cooling experiments, the electron configuration is given by 23Na (1s)2 (2s)2 (2p)6 (3s). Since the core
is a closed shell, it does not contribute to the orbital angular momentum of the atom, and there remains only the outer, valence electron. The state of this electron
e is completely determined by its orbital angular momentum and spin angular
momentum s. These two momenta couple in the usual way to form the total angular momentum j ofthe electron:

Ie - sl :s j :s e+ s.

(4.1)

e, Since the only contribution to the total angular momentum of the atom comes
from the valence electron, the total orbital angular momentum is i = spin
s, J angular momentum S= and total angular momentum j = for all electrons. I
Different values of j lead to different energies of the states, since the spin-orbit
interaction Vso = Ai . Sdepends on the orientation of Swith respect to i. This
splitting of the states by the spin-orbit interaction is called the fine structure of the
atom. The LS-coupling discussed above is therefore only valid if this spin-orbit
interaction is small compared to the level separation of the states.
For the alkali-metal atoms the electronic states are fully specified in the Russell-
Saunders notation as n (2S+ I) L J, where n is the principal quantum number of the valence electron. The lowest state for Na is the 32S 1/2 state, whereas the first
excited states are the 32PI/2,3/2 states, where the valence electron is excited to the
(3p)-state. In this case the angular momentum L = 1 can couple with the total spin
S = 1/2 to form either Je = 1/2 or Je = 3/2. The fine structure splitting between
these two states is ~ 515 GHz in Na, and other values for the alkali-metal atoms
are given in Table C.4 of Appendix C.
The structure of the alkali-metal atoms becomes somewhat more complicated
when the interaction of the nuclear spin i with the total angular momentum of the
electron j is included. These angular momenta couple in the usual way to form
the total angular momentum as F = i + 1. Different values of F for the same values of both i and j are split by the Ai· j interaction between the nuclear spin
and the electronic angular momentum. The resulting energy structure is called the
hyperfine structure (hfs). This hfs is generally much smaller than the fine structure
because of the much smaller size of the nuclear magnetic moment. For Na, with
a nuclear spin of I = 3/2, the ground state has Fg = 1 and 2, and the hfs is ~
1.77 GHz. The excited state has Fe = 0, 1,2, and 3, and the resulting hfs is only
on the order of 100 MHz. In general, the shift of the energy levels because of the
hyperfine interaction can be written as [11, 28]

1Here the convention is that the angular momentum of one electron is indicated in lower case, whereas the angular momentum of the atom is indicated in capitals.

4.1 Alkali-Metal Atoms 41

/

F=3 2

1

o

2

D2 DJ

Cycli ng transi tion
2

FiGURE 4.1. The ground S state and lowest lying P states of atomic Na, showing the hfs schematically (see Table C.4 of Appendix C for numerical values). These transitions are near A = 590 nm (see Table C.l) in the orange-yellow region of the spectrum, and are accessible with dye laser light.

where K = F (F + 1) -I (I + 1) - 1 (J + 1) and A and B are two parameters, that
are adjusted using experimental data [28]. The splitting between adjacent levels becomes

F 2 -I(l+I)-1(J+1)+ 1/2

~Ehfs(F) - ~Ehfs(F - 1) = hAF + 3hBF

2/(2/- 1)1(21 _ 1)

,

(4.3)

where F denotes the highest value of the total angular momentum of the two adjacent levels. A schematic diagram for the fine and hyperfine structure of Na, or other alkalis with I = 3/2, is given in Fig. 4.1. More detailed information on specific

values of the hfs of the alkali-metal atoms is given in Table C.4 of Appendix C.
Each of these states of alkali-metal atoms is further split into (21 + 1) x (21 + 1) Zeeman sublevels. In the case ofNa with I = 3/2, this leads to 8 Zeeman sublevels
in the ground state (Jg = Ih), 8 sublevels in the first excited state (Je = Ih), and
16 sublevels in the next excited state (Je = 312). In principle, the light can drive

all transitions between ground and excited sublevels. However, certain selection rules have to be obeyed, and these limit the number of transitions considerably.

These selection rules are discussed in more detail in Sec. 4.4. In the absence of any perturbations, many of these Zeeman sublevels are degen-
erate, but application of an external field lifts the degeneracy. It has already been

shown in Sec. 1.2.1 that the presence of a light field not only induces transitions,

but also shifts the energy levels. Later in this chapter in Sec. 4.5 it is shown that

the transition strengths vary among the Zeeman sublevels, and thus a laser field can lift the degeneracy through the different light shifts. In fact, this feature is at

the heart of the sub-Doppler cooling schemes described in Chapter 8.

42 4. Multilevel Atoms
4
2

8

MF=2

7

I

6

0

5

-I

-2 4
-I
o 3
2

0.05

0.10

0.15

0.20

Magnetic field IT]

FIGURE 4.2. Energies of the ground hyperfine states of Na, where the states are numbered 1-8 and MF is the projection of the total angular momentum of the atom on the magnetic field axis.

An applied magnetic field B can also lift these degeneracies, producing the

well-known Zeeman effect, as shown in Fig. 4.2. At low fields the energy level

shifts IlE are proportional to the field strengths according to IlE = gll-BMB,

where Il-B == eh/2mec is the Bohr magneton, M is the projection of the angUlar

momentum along B, and g is the Lande g-factor (here me is the electron mass).

The presence of the nuclear spin changes the g-factor from its usual gJ value given

by

J(J + 1) + S(S + 1) - L(L + 1)

gJ=I+

2J(J+l)

( 4.4a)

to

F(F + 1) + J(J + 1) - /(1 + 1)

gF = gJ

2F(F + 1)

(4.4b)

4.2 Metastable Noble Gas Atoms 43
Here L, S, and J refer to the electron's angular momenta, I is the nuclear spin,
and F is the total atomic angular momentum that ranges from F = IJ - I I to
F = J + I in integer steps. Thus the different manifolds of Fig. 4.2 have different
slopes at small field values.
4.2 Metastable Noble Gas Atoms
The metastable noble gases are next in popularity for laser cooling and trapping. With the development of metastable noble gas sources, where a discharge is run through a supersonic expansion of the noble gas, a beam of metastable noble gas atoms can be formed. The efficiency of such sources is low (~ 10-5-10-4 ) because electron impact in the discharge is the only way to excite the atoms, since the excitation energy of 10-20 eV is much greater than the photon energy of ordinary lasers. Some of th-
e low-lying excited states of the noble gases cannot decay to the ground state by a dipole transition because of the selection rules, and therefore can have lifetimes of more than 100 s and are thus called metastable states. Since the noble gas atoms in the ground state are inert, they do not interfere with experiments on the metastables in spite of the dominance of ground-state atoms.
One advantage of the metastable noble gases over the alkali metals is that most of them do not have a nuclear spin and therefore they do not show any hfs. This reduces the number of states by an appreciable amount. Since the outer electron is highly excited and the state is close to the ionization level, metastable noble gas atoms can be treated effectively as one-electron atoms. One important difference between them and the alkali-metal atoms is that the last shell of the core is not closed and t-
herefore possesses both orbital and spin angular momentum. Together with the orbital and spin angular momentum of the outer electron, these have to be coupled to form the total angular momentum of the atom.
The scheme most often used to couple these four angular momenta, referred to as j l coupling,2 is first to couple the momenta L and S of the core to a total momentum j of the core, which is subsequently coupled with the orbital angular momentum l of the valence electron to form the angular momentum K, which is finally coupled to the spin s of the valence electron to form the total angular momentum J. The notation for the states is then given by 25+1 L jnl[K1J, with n the principal quantum number o-
f the outer electron. However, in order to appreciate the correspondence between the alkali-metal atoms and the metastable noble gas atoms, the Russell-Saunders notation n 2S'+1 LJ will be used for the metastable noble gases as well. Note that here Sf is the total spin of the core plus the valence electron and therefore not identical to S.
2The conventional spectroscopic notation for the rare gases is different from that of the alkalis that was introduced earlier.

44 4. Multilevel Atoms

Singlet

Triplet

21.5 -I

;; 21.0
~
@
Jj 20.5

-0

21.5 (2.1.0) 21.0
20.5

20.0

20.0

o -0
FIGURE 4.3. The n = I and 2 states of He, showing the metastable 23 S state that constitutes He* and serves as the ground state for the triplet system. The first excited P state is truly a triplet, its J = 0 sublevel lies highest, 29.62 GHz above J = I, which is 2.29 GHz above J = 2. These transitions are near A= 1.083 tLm in the near infrared (see Table C.I of Appendix C) and are accessible with a solid state laser called LNA, Ti:Sapphire, and rather special diode lasers.

Singlet

Triplet

19.0 - 0

19.0

18.6
;;
~
»
"e!' 18.2
c
~

, - I - ,'
2,,,

~1.O.2)
=(3.2.1) 18.6

'-I

18.2

16.9

-I

16.9

16.5

16.5

o -0

o

FIGURE 4.4. The low-lying levels of Ne, showing the metastable 33p sublevels that constitute Ne*. The J = I state is not truly metastable. These transitions are near A = 640 nm in the red (see Table C.I of Appendix C) and are accessible with dye laser light. Similar transitions in the other noble gases Ar and Kr are near A = 810 nm (see Table C.I) and are more conveniently accessible with Ti:Sapphire and common diode lasers.

4.3 Polarization and Interference 45
Metastable He (He*) is the noble gas with the lowest mass and also with the easiest level structure. This arises because the electron excited from the core is an s-electron and therefore the total orbital angular momentum of the core is also an S-state. The spin of the core and of the valence electron couple to form either singlet or triplet states, and since optical transitions between triplet and singlet states are forbidden, the triplet states have the longest lifetimes. Thus only the triplet s-
tates are discussed in connection with laser cooling. The lowest metastable triplet state, which for all practical purposes can be considered as another ground state of the atom, is the 23SI-state, whereas the first excited triplets are the 23Po, 1,2-states (see Fig. 4.3). Note that J = 0 has the highest energy and J = 2 has the lowest.
The situation is considerably more complicated for the other metastable noble gas atoms, of which only neon (Ne*) will be considered in more detail. Since the configuration for the lowest, metastable state is 20Ne (1s)2 (2s)2 (2p)5 (3s), the core is missing a (2p)-electron and the resulting core state is a 2PI/2,3/2-state, depending on how the orbital and spin angular momenta of the core are coupled. As in the case of He*, only the triplet system will be discussed, and the lowest
triplet states are 33Po,I,2, of which only the (J = 0)- and (J = 2)-state are truly
metastable. For the first excited metastable triplet states, there are total orbital angular momentum values of 0, 1, and 2, so there are the following states: 33S I, 33Po, 1,2, and 33DI,2,3 (see Fig. 4.4).
4.3 Polarization and Interference
In the treatment of the interaction oftwo-level atoms and a laser field, the discussion of the polarization has been deferred. In the case of multilevel atoms, this is no longer possible because the orientation of the dipole moment of the atoms with respect to the polarization of the light is important. Since the atoms can be in different ground states, their coupling to the light field in these states will in general be different. Another aspect is that the interference of two laser beams depends-
 on their mutual polarization. Since the light field used in laser cooling may consist of many laser beams, their polarizations often playa key role.
A laser beam has a high degree of polarization. Although its polarization is in general elliptical, only the extreme cases of linear and circular polarization will be considered here. Because of the transverse nature of the electromagnetic field of
a laser beam, the unit polarization vector Bof the field is always perpendicular to
the propagation direction k.
Consider the light field of two counterpropagating plane-wave laser beams with
the same frequency we. If the polarizations of the two laser beams are identical,
then the polarization of the resulting light field is everywhere the same as that of the incoming laser beams. However, the two plane waves interfere and produce a
standing wave. The resulting electric field for a linear polarization Bcan be written
as (see Eq. 3.11)

46 4. Multilevel Atoms

o

A/4

A/2

FIGURE 4.5. Polarization gradient field for the lin 1. lin configuration (see also Chapter 8).

e e E = Eo cos(Wtt - kz) + Eo cos(Wtt + kz)

(4.5)

e = 2Eo cos kz cos wet.

The intensity of the light field has a cos2 kz spatial dependence with a period of A/2. This situation of a standing wave is very common in laser cooling, and it will reappear in the discussion of optical traps and lattices.
If the polarization of the laser beams is not identical, then the situation becomes rather complicated. Only the two special cases that play important roles in laser cooling will be considered here. The first is where the two counterpropagating
e laser beams are both linearly polarized, but their vectors are perpendicular (e.g., x and y, which is called lin 1. lin or lin-perp-lin). Then the total field is the sum
of the two counterpropagating beams given by

x E = Eo cos(Wtt - kz) + Eo Y cos(wet + kz)

(4.6)

= Eo [(x + y) cos wet cos kz + (x - y) sin Wtt sin kz] .

= At the origin, where z 0, this becomes

E = Eo(x + y)coswet,

(4.7)

which corresponds to linearly polarized light at an angle +1T/4 to the x-axis. The
= = amplitude of this field is ,J"iEo. Similarly, for z A/4, where kz 1T/2, the field
is also linearly polarized but at an angle -1T/ 4 to the x -axis.
Between these two points, at Z = A/8, where kz = 1T/4, the total field is

E= Eo [x sin(wet + 1T/4) + Y cos(wet + 1T/4)].

(4.8)

x Since the and y components have sine and cosine dependence, they are 1T/2
out of phase, and so Eq. 4.8 represents circularly polarized light rotating about the z-axis in the negative sense. Similarly, at Z = 3A/8 where kz = 31T/4, the polarization is circular but in the positive sense. Thus in this lin 1. lin scheme the polarization cycles from linear to circular to orthogonal linear to opposite circular in the space of only half a wavelength of light, as shown in Fig. 4.5. It truly has a very strong polarization gradient.

4.4 Angular Momentum and Selection Rules 47

o

A/8

A/4

FIGURE 4.6. Polarization gradient field for the a +-a - configuration (see also Chapter 8).

The other important polarization configuration is that of counterpropagating, oppositely circularly polarized light beams. The total electric field is

E = Eo [x cos(wet - kz) + y sin(wet - kz)]

(4.9)

+ Eo [x cos(wet + kz) - y sin(wet + kz) ]

= 2Eo cos wet [xcoskz+Ysinkz].

Since there is no temporal phase difference between the two polarization directions
x e and y at any position, this represents a linearly polarized field whose vector
is fixed in time but rotates uniformly in space along z, rotating through 1800 as z
changes by A/2 (see Fig. 4.6). This arrangement is called the a+-a- polarization scheme.
These two cases of lin -.llin and a+ -a- polarization schemes play an important role in laser cooling. Since the coupling of the atoms to the light field depends on the polarization of the field, atoms moving in a polarization gradient will be coupled differently at different positions as discussed in Sec. 4.5. Furthermore, since in a multilevel atom different states are coupled differently to the light field depending on the polarization, this will have important consequences for the laser coolin-
g, as described in Chapter 8.

4.4 Angular Momentum and Selection Rules

For optical transitions the coupling between the atomic states is given by the

dipole moment, and selection rules exist for such transitions. Selection rules can

be inferred from the equations derived in the next section, but they can also be

quite simply calculated from the commutation relations [9]. For the z-component of the orbital angular momentum L of the atom, the following commutation rules

apply:

[L z, x] = iliy, [L z, y] = -ilix, [Lz' z] = o.

(4.10)

48 4. Multilevel Atoms

The eigenfunctions of the atoms are denoted by laLM}, where a represents all the other properties of the state besides its orbital angular momentum. The third relation of Eqs. 4.10 leads to

{a' L'M'I [Lz' z] laLM} = (M' - M)h{a' L'M'lzlaLM) = 0,

(4.11)

where the last equality holds because the last commutator in Eq. 4.10 is O. As the
next section shows, the coupling between two states by linearly polarized light is
proportional to the matrix element for z, so linearly polarized light can couple two states only if ll.M = o. Using the same procedure for x and y leads to

{a' L'M'I [L z, x] laLM} = (M' - M)h{a' L' M'lxlaLM)
= ih{a' L' M'lylaLM}

(4.12)

and

{a' L'M'I [L z, y] laLM} = (M' - M)h{a' L' M'lylaLM)
= -i1;{a' L' M'lxlaLM}.

(4.13)

The combination of these two relations requires that either ll.M = ± 1 or that the
matrix element for x or for y must vanish. Again, the next section shows that for circularly polarized light the appropriate matrix element is a combination of x and
y. The selection rules for circularly polarized light are thus ll.M = ± 1, where the
(+)-sign is for right-handed and the (-)-sign for left-handed circular polarization. Note that these selection rules reflect the conservation of angular momentum.
Since each photon carries an angular momentum 1;, the projection of this angular
momentum on the z-axis can be 0, ± 1. Conservation of angular momentum requires
that absorption of a photon be accompanied by a corresponding change of the projection of the angular momentum of an atom. In the case of fine or hyperfine interaction, the orbital angular momentum L can be replaced by the total angular momentum J of the electron or F of the atom, respectively. The same selection rules thus apply for MJ or M F.
For the selection rules for L, consider the commutation relation

(4.14)

which can be obtained from the usual algebra for commutators [9]. (Equation 4.14
i r explicitly depends on the fact that == x pis the orbital angular momentum of
the atom, and this relation cannot be generalized for either J or F.) Calculating
the matrix element for both sides of Eq. 4.14 results in

{a'L'M'1 [L2, [L2';]] laLM}

(4.15)

= 21;4[L(L + I) + L'(L' + I)]{a'L'M'lrlaLM) = 1;4[L'(L' + I) - L(L + 1)]2{a'L'M'lrlaLM}.

4.4 Angular Momentum and Selection Rules 49

Thus the coupling between two states is zero for any polarization, unless the two factors in front of the matrix elements in Eq. 4.15 are equal. Rearrangement of this requirement leads to [9]

[(L' + L + 1)2 - 1][(L' - L)2 - 1] = 0.

(4.16)

The first term can only be zero if L = - L', e.g., L = L' = 0, but this is prohibited
since L' is the vector sum of Land L ph = 1 for the photon, and thus cannot be
zero. The second term is zero only if ilL = ± 1, so this is the selection rule for
L. Again, this selection rule reflects the conservation of angular momentum for
° absorption of one photon. Also for ilL = the final state angular momentum L' can be the vector sum
of Land Lph. But the parity of the state for a one-electron system is given by
r (_I)L and is antisymmetric, so symmetry demands that the matrix element be
zero between states where Land L' are both either odd or even. The selection rules for J and F are IlJ = 0, ±1 and IlF = 0, ±l. In contrast
with the case for ilL, IlJ = Oisallowedsince L and S couple to J, so IlJ = Odoes
° ° not imply ilL = 0. Only for J = J' = is ilL = a necessary consequence, and ° ° therefore transitions with J = ~ J' = are forbidden. The same rule applies ° ° to F, namely, F = ~ F' = is also forbidden.
In laser cooling, selection rules playa very important role. In order to slow atoms from their thermal velocity down to zero velocity, a large number of photons have to be scattered. Therefore, the coupling strength between the two levels involved in the laser cooling has to be sufficiently high. Furthermore, since the atoms have
to undergo a very large number of cycles, the decay from the excited to the ground state must be to only the sublevel coupled by the light. This restricts the number of possible cooling transitions. The selection rules can be used to determine whether two states are coupled by the laser light without extensive calculations.
For the alkali-metal atoms, the hfs complicates the level structure and most of the optically accessible transitions do not meet these criteria. Since the same
selection rules for excitation are valid for spontaneous emission, the IlF = 0, ± 1
selection rule allows the decay of one excited state to many ground states, and some of these may not be coupled by the laser to an excited state. This is because the laser's spectral width is generally much smaller than the ground-state hfs splitting.
However, for the states with J = L + 112, the decay from the highest Fe-state can only occur to the highest Fg-state, since the other ground state has Fg = Fe - 2
(see Fig. 4.1). Therefore these two states form a closed two-level system. A similar system exists between the lowest Fe and Fg states. However, since the hfs splitting between the two lowest excited states is usually very small, exciting the lowest Fe state can often also partially excite the next Fe state, which can then decay to the other hyperfine ground-state sublevels. Laser cooling in the alkalis is therefore
usually carried out on the highest Fg and Fe states. These complications do not appear in the metastable noble gas atoms where the
splitting between the states is caused by the spin-orbit interaction instead of the hyperfine interaction. For Ne* only the 3PO,2 states are truly metastable. The only closed system can be formed by the 3P2 ~ 3D3 transition, which is the one most

50 4. Multilevel Atoms
often used for laser cooling. Similar transitions exist for the other metastable noble gases. For He* the situation is very simple since there is only the 3SI-state (see Sec. 4.2).

4.5 Optical Transitions in Multilevel Atoms

4.5.1 Introduction

The optical transitions considered in Chapter 1 were restricted to the particularly simple case of a two-level atom, and these transitions can be described by a single Rabi frequency. Real atoms have more than two levels that can be coupled by the optical field, and furthermore, the relative strengths of their multiple transitions depend on the orientation of the atomic dipole moment with respect to the polarization of the light. The single Rabi frequency of Chapter 1 that describes the
coupling is given by lin = -/LegEO (see Eq. 1.10), where

/Leg = e(ele . rig)

(4.17)

e and represents the polarization of the light. The value of the dipole moment of
Eq. 4.17 depends on the wavefunctions of the ground and excited states, and is generally complicated to calculate.
It is often convenient to introduce the spherical unit vectors [29] given by

iLl = (x - iy) /,,;2, = UO Z,

(4.18)

and to expand the polarization vector ein terms of these vectors. Note that U±I
uo corresponds to circularly polarized light, whereas corresponds to linearly po-
larized light. For simplicity, only cases where the polarization of the light field is given by just one of these vectors will be considered, and this will be indicated by
the symbol q (q = 0, ± 1 is the subscript of uq ). In this notation the components
of the dipole moment can be written as

( 4.19)

where the Ylq 's represent the simplest of the spherical harmonic functions. The matrix element of Eq. 4.17 can be broken up into two parts, one depending
on all the various quantum numbers of the coupled states and the other completely
independent of M, the projection of l on the quantization axis. This separation
is embodied in the well-known Wigner-Eckart theorem discussed in many quantum mechanics texts [29]. Here, the treatment will be somewhat different, since this section treats the simplest case, namely, that fine and hyperfine structure are
absent. The more general case will be treated in Sec. 4.5.4. Thus the hydrogenic wavefunctions for the ground and excited state can be used:

Ig) = Inlm) = Rnl(r)Ylm(O, 4J)

(4.20a)

4.5 Optical Transitions in Multilevel Atoms 51

and
Ie) = In'I'm') = Rn'I,(r)Yl'm'«()' </1).
Substitution of Eqs. 4.19 and 4.20 into Eq. 4.17 leads to

(4.20b)

/l-eg = e (n'l'm'le . rlnlm)
IV = e (n"I IIrllnl) (I,m, {43HYlqllm) == e Rn'l',nl Al'm'.lm·

(4.21)

The following sections first treat the radial or physical part Rn'l',nl, also known as the reduced or double-bar matrix element, and then the angular or geometric part
Al'm'.lm'

4.5.2 Radial Part

The radial part of the matrix element is generally less important in laser cooling because experiments typically use an optical transition joining a set of states that all share the same ground- and excited-state radial wavefunctions. Therefore it becomes an overall multiplicative factor that determines only the magnitude of the coupling (e.g., the overall Rabi frequency). It is given by

10 = = Rn'l',nl (Rn'l,(r)lrIRnl(r»)

00 r 2drRn'l,(r)rRnl(r),

(4.22)

with Rnl the radial wavefunction of the state. Here the r 2dr term in the integral originates from the radial part of d3r.
The radial part can be evaluated if the eigenfunctions are known. For all atoms except hydrogen, the eigenfunctions can only be calculated approximately and therefore only approximate values for the radial part can be found. However, for the hydrogen atom the eigenfunctions of the bound states are known and the radial matrix elements can be calculated exactly [30]. For instance, for the first optical allowed transition in H, the Is --+ 2p transition, the radial wavefunctions involved are Rls(r) = -
2exp(-r/ao)/a~/2 and R2p(r) = (r/ao) exp(-r/2ao)/..;3(2ao)3/2. Thus the integral becomes

10 ~ R2p,Is = 00 R2p(r) r Rls(r) r 2dr = 27 J6ao/35 1.290 ao.

(4.23)

For other transitions in hydrogen similar integrals can be evaluated. The hydrogenic wavefunctions Rnl (r) are given by [30]

Rne{r) = Nnlplexp(-p/2)L;~~~I(P),

(4.24)

where p = 2r/ nao, L':( (r) are the Laguerre polynomials, and Nnl is a normaliza-
tion constant. These Laguerre polynomials can be expanded in a power series:

L': = LnCkrk,

(4.25)

k=O

52 4. Multilevel Atoms

nt 2(t + 1) 3(t + 1) 4(t + 1)

Is

1.2902

0.5166

0.3045

2s -5.1961

3.0648

1.2822

2p

4.7479

1.7097

3s

0.9384 -12.7279

5.4693

3p

-10.0623

7.5654

3d

10.2303

4s

0.3823

2.4435 -23.2379

4p

1.3022 -20.7846

4d

-15.8745

4f

5s

0.2280

0.9696

4.6002

5p

0.4827

3.0453

5d

1.6613

5f

5(t + 1)
0.2087 0.7739 0.9750 2.25957 2.9683 3.3186 8.5178 11.0389 14.0652 17.7206 -36.7423 -34.3693 -30.0000 -22.5000

TABLE 4.1. Radial matrix elements R nf ,n'f+l in units of ao for hydrogen for a transition
ne ~ n'Ce + I). Note that Rnf,n'f' is symmetric with respect to interchange of nand e,
i.e., Rnf,n'f' = Rn'f',nf'
where Ck are the coefficients, for which a simple recurrence relation exists [30,31]. Substitution of Eq. 4.24 into Eq. 4.22 and integrating over r with the help of standard integrals, the matrix element for any transition can be found. The results
for n :s 5 are given in Table 4.1. Note that the radial matrix elements increase with
increasing n, since the radius of the electron orbit increases with n. For all other atoms, the situation is more complicated. In the case of alkali-metal
atoms with only one active electron, the matrix elements can be quite accurately expressed in terms of the effective principal quantum number n~ = n - 8£ of the valence electron, where 8£ is called the quantum defect and depends on the orbital quantum number t [6]. The same analysis as in the hydrogen case can be applied for the alkali-metal atoms; however, in the summation n is now replaced by n* [32]. Table 4.2 shows the matrix elements for the first optically allowed transition for the alkali-m-
etal atoms. As the table shows, the agreement between the calculated elements and the values derived from experiments is reasonable.

4.5.3 Angular Part ofthe Dipole Matrix Element
The angular part Al'm'.lm of the dipole moment for atoms with S = 0 = I is defined by Eq. 4.21:

(4.26)

EI. Transition

H

Is~ 2p

He* 2s~ 2p

Li 2s~ 2p

Na 3s~ 3p

K

4s~ 4p

Rb 5s~ 5p

Cs 6s~ 6p

4.5 Optical Transitions in Multilevel Atoms 53

n*s 1.000 1.689 1.589 1.627 1.770 1.805 1.869

n*p 2.000 1.938 1.959 2.117 2.235 2.293 2.362

Theory
f.L (a.u.) r (MHz)

0.745 99.52

2.540

1.64

2.352

5.93

2.445

9.43

2.842

5.78

2.917

5.78

3.093

4.99

Experiment
r (MHz)
99.47 1.62 5.92
10.01 6.09 5.56 5.18

TABLE 4.2. Matrix element (nsJrJnp) for the first optically allowed transition in the alkali-metal atoms. The theoretical value is calculated using the procedure of Bates and Damgaard [32], whereas the experimental value is derived from the lifetimes of the n p-states (see Table C.I in Appendix C).

where the integration limits are over 4n. The integral can be expressed in terms of the 3j-symbols as

At'm',lm = (-1)e' - m' y / max(i, i') (

i' -m'

q

(4.27)

The 3j -symbols are related to the Clebsch-Gordan coefficients and are tabulated
in [33] (see Eq. 4.30). The symmetry of the 3j-symbols dictates that they are
only nonzero when the sum of the entries in the bottom row is zero, which means
m + q = m'. Thus circularly polarized light only couples states that differ in m by
± 1, whereas linearly polarized light only couples states that have equal m's. This
result is thus identical to the result obtained in Sec. 4.4. Table 4.3 shows tabulated
the values of Al'm',lm for optical transitions.

4.5.4 Fine and Hyperfine Interactions
In case of fine and hyperfine interaction the situation changes considerably. .for the fine structure, the energy levels are split by the spin-orbit interaction and L is
i no longer a good quantum number. Here is replaced with i to be more general. S. The states are now specified by], the vector sum of i and However, the optical
r electric field still couples only to the orbital angular momentum i = x p of
the states. In this situation the Wigner-Eckart theorem could also be applied to calculate the transition strength [29], but again this section will follow a different route that provides more insight in the problem. Although the formulas below may appear rather complicated, the principle is simple.

54 4. Multilevel Atoms

i'

q = ±1

q=O

i+l

[(i ± m')(i ± m' + I)] 1/2 2(2i + I)(U + 3)

[(i - m' + l)(i + m' + 1)] 1/2 (2i + I)(U + 3)

i-I

_ [(i =f m')(i =f m' + 1)] 1/2 2(U - I)(U + I)

[(i - m')(i + m')] 1/2 (U - I)(U + 1)

TABLE 4.3. The angular part A for optical transitions (l, m) ---+ (e, m') with the polariza-
tion of the light indicated by q, with q = 0 for linear and q = ± I for right- and left-circular polarized light. Because of the selection rules, l' = l ± I and m' = m + q.

He*
FIGURE 4.7. Transition strength for the D-lines in He*. The strength is normalized to the weakest allowed transition.
The atomic eigenstates are denoted by la J MJ) in the J -basis, and MJ explicitly
indicates for which angular momentum the magnetic quantum number M is the projection. In most cases, this is obvious from the notation, but in this section it is not. The dipole transition matrix element is therefore given by
(4.28)
Since the optical electric field only couples the l component of these Jstates, these
eigenfunctions must be first expanded in terms of the Land S wavefunctions:
(4.29)

4.5 Optical Transitions in Multilevel Atoms 55

where i represents an appropriate set of angular momentum quantum numbers. The Cj 's are Clebsch-Gordan coefficients that can also be expressed in terms of the more symmetrical 3j symbols as

~s _~j). Cj = (LML; SMsIJMj) = (_l)-L+S-MJ.j21 + 1 (!;L

(4.30) The fact that Eq. 4.27 for the integral of the product of three spherical harmonics and Eq. 4.30 both contain the 3j symbols is a result of the important connection between the Ylm 's and atomic angular momenta.
Substitution of Eq. 4.29 in Eq. 4.28 twice leads to a double summation, which contains matrix elements in the (L, S) basis of the form

(a'L' M~ I(S'M~lrlaLMdISM,s) = (a' L'M~lrlaLMd8ssI8MsM's. (4.31)
The first term on the right-hand side is the matrix element that has been evaluated before (see Eq. 4.21). The 8-functions reflect the notion that the light couples the orbital angular momenta of the states, and not the spin. The spin and its projection are not changed by the transition. Substitution ofEq. 4.31 into Eq. 4.28, expansion of the matrix elements in the L-basis, and recoupling of all the Clebsch-Gordan coefficients leads to

J.teg = e(-I)L'+s-M~J(2J + 1)(21' + 1)

(4.32)

x { LJ' JL' S1 } ( JMj q1 -JM'~ ) (a'L'llrllaL).

The array of quantum numbers in the curly braces is not a 3j symbol, but is called a 6j symbol. It summarizes the recoupling of six angular momenta. Values for the 6j symbols are also tabulated in Ref. 33.
Note that the radial part of the dipole moment has remained unchanged, and so the results of the previous section can still be used. For metastable helium the transition strengths for the triplet system are shown in Fig. 4.7. Triplet metastable helium only has one "ground" state, so that decay out ofthe excited states is always to this state.
In case of hyperfine interactions the situation becomes even more complicated. However, the procedure is the same. First the eigenfunctions in the F -basis are expanded in the (J, I)-basis, where I is the nuclear spin, and a 6j symbol involving I, J, and F appears. Then the eigenfunctions of the J -basis are further reduced into the (L, S)-basis. Since the procedure is similar to the procedure for the fine structure interaction, only the result is shown:

= J.teg e(-l)I+L'+S+J+jl+I-M~(a'L'llrllaL)

(4.33)

x J(21 + 1)(21' + 1)(2F + 1)(2F' + 1)

x

{

L' J

J' L

S } { J' 1 F

F' J

I } 1

( F MF

1 q

-FM'~

)

.

56 4. Multilevel Atoms F= l

-2 -1 "

FIGURE 4.8. Transition strength for the first optical transition in an alkali system with a
nuclear spin of '/2, for example, H. The strength is normalized to the weakest transition.
For the D, lines see Appendix D.
The hyperfine interaction is important for the alkalis. For a system with nuclear spin '/2, such as H, the result is given in Fig. 4.8. Since S can be parallel or
anti-parallel to L, J' = '/2, 3/2 and the fine-structure interaction is usually large
compared to the hyperfine interaction. Results for transitions important for the alkalis are given in Appendix D.

5
General Properties Concerning Laser Cooling
This chapter presents some of the general ideas regarding laser cooling. One of the characteristics of optical control of atomic motion is that the speed of atoms can be reduced by a considerable amount. Since the spread of velocities of a sample of atoms is directly related to its temperature, the field has been dubbed laser cooling, and this name has persisted throughout the years. Laser cooling has much in common with the field of optics. In laser cooling, light is used to manipulate atoms, whe-
reas in optics matter is used to manipulate light. The more proper identification for the field would therefore be "atom optics" or "optical control of atomic motion". The similarities between atom optics and electromagnetic optics will be pointed out.
These experiments almost always involve the use of nearly resonant light, which can populate the atomic excited state and hence result in spontaneous emission. As discussed in Chapter 2, such events produce unpredictable changes in atomic momenta. Hence, the discussion here begins with a "random walk" model, which provides the background on a microscopic scale for how the rapid exchange of momenta between the light field and the atoms influences their velocity distribution. This leads to the Fokke-
r-Planck equation, which can be used for a more formal treatment of the laser cooling process. Solutions of the Fokker-Planck equation in a limiting case can ultimately be used to relate the velocity distribution of the atoms with their temperature.

58 5. General Properties Concerning Laser Cooling
5.1 Temperature and Thermodynamics in Laser Cooling
The idea of "temperature" in laser cooling requires some careful discussion and disclaimers. In thermodynamics, temperature is carefully defined as a parameter of the state of a closed system in thermal eqUilibrium with its surroundings. This, of course, requires that there be thermal contact, i.e. heat exchange, with the environment. In laser cooling this is clearly not the case because a sample of atoms is always absorbing and scattering light, making major changes to its environment. Furthermor-
e, there is essentially no heat exchange (the light cannot be considered as heat even though it is indeed a form of energy). Thus the system may very well be in a steady-state situation, but certainly not in thermal equilibrium, so that the assignment of a thermodynamic "temperature" is completely inappropriate.
Nevertheless, it is convenient to use the label of temperature to describe an atomic sample whose average kinetic energy (Ek) in one dimension has been reduced by the laser light, and this is written simply as
(5.1)
where kB is Boltzmann's constant. It must be remembered that this temperature assignment is absolutely inadequate for atomic samples that do not have a welldefined velocity distribution, whether or not they are in thermal eqUilibrium: there are infinitely many velocity distributions that have the same value of (Ek) but are so different from one another that characterizing them by the same "temperature" is a severe error.
With these ideas in mind, it is useful to define a few rather special values of temperatures associated with laser cooling. Each of these quantities appear elsewhere in this book in connection with the special domain of their applications. Their place on the energy scale is shown in Fig. 5.l.
The highest of these temperatures corresponds to the energy associated with atoms whose speed and concomitant Doppler shift puts them just at the boundary
of absorption of light. This velocity is Vc == y / k ~ 1 mis, and the corresponding
temperature is
(5.2)
and is typically several mK. The next characteristic temperature corresponds to the energy associated with
the natural width of atomic transitions, and is called the Doppler temperature. It is given by
(5.3)
Because it corresponds to the limit of certain laser cooling processes, it is often called the Doppler limit, and is typically several hundred JLK (see Sec. 7.2). Asso-
ciated with this temperature is the one-dimensional velocity VD = JkBTD/M ~
30 cmls.

3 300 K 30
3 300 mK 30
3 300 llK 30
3 300 nK 30
3

5.1 Temperature and Thermodynamics in Laser Cooling 59

Surface of the sun Laboratory Resonant collisions Liquid He He cryostat Dilution refrigerator Optical cooling Doppler limit

1Collisions 1Radiative
Laser cooling

Recoil Limit Raman processes Evaporation - BEe sub-kHz bandwidths

~ Evaporation

FIGURE 5.1. Temperature scale.

The last of these three characteristic temperatures corresponds to the energy
associated with a single photon recoil. In the absorption or emission process of a
single photon, the atoms obtain a recoil velocity Vr = lik1M. The corresponding
energy change can be related to a temperature, the recoil limit, defined as

1i 2 k 2

kBTr ==-;;t,

(5.4)

and is generally regarded as the lower limit for optical cooling processes, although there are a few clever schemes that cool below it. It is typically a few ILK, and corresponds to speeds of Vr '" 1 cm/s.
These three temperatures are related to one another through a single parameter e that is ubiquitous in describing laser cooling. It corresponds to the ratio of the
recoil frequency Wr == Iik2/2M to the natural width y, and as such embodies most
of the important information that characterize laser cooling on a particular atomic transition. Typically e '" 10-3 - 10-2, and is given by

e ==wrly

=

Iik 2 --.

(5.5)

2My

From this it is clear that
(5.6)

It is instructive to put these temperatures on a scale to compare with others as shown in Fig. 5.1. Clearly laser cooling is in a temperature domain far below any

60 5. General Properties Concerning Laser Cooling
other previous techniques. Whereas ordinary cryogenic methods span the range from a few K down to around 100 mK, laser cooling turns on well below this range. At sufficiently low temperatures the energy associated with thermal motion becomes dominated by gravitation. For example, the height d of a sample whose temperature could be considered "uniform" to within 10% in a gravitational field is given by 10 d ~ k B T / M g, and thus is ~ 1 mm for temperatures near the Doppler limit of Na (240 JLK). S-
uch temperatures are relatively high for laser cooling as discussed in Chapter 7, and much lower values can be routinely achieved as described in Chapter 8. Temperatures 104 times lower can be achieved with other techniques such as the evaporative cooling described in Chapter 12, and this corresponds to d < A, with A the optical wavelength.
Another thermodynamic variable of state is the entropy. As with temperature, entropy in laser cooling cannot be rigorously defined because it is also a state parameter of a system that is in thermal equilibrium with its surroundings. An even more important consideration arises because the system is not closed, and as laser light enters and fluorescent light leaves a sample of atoms, there is an entropy flow. Of course, thermodynamics requires that, as the system of atoms cools down, more entropy m-
ust flow out than flows in. This must be carried away by the fluorescent light.
There is considerable interest in calculating the entropy exchange in laser cooling, but there are serious difficulties in doing so. Part of the problem arises because it's much more difficult to achieve a working definition for entropy in a non-equilibrium situation than the "average kinetic energy" definition used for temperature earlier in this section. In fact, there is little agreement among the experts in statistical mechanics about a usable definition: every one of the several choices prese-
nts some difficulty. Another part of the problem arises because the energy change of the light field is a small fraction of its total energy because the total number of photons is conserved, and the frequency shift of the fluoresced photons is small. By contrast, the relative entropy change of the light is huge because the light in the incoming, well-defined laser beams of very low entropy is converted into disorganized fluorescence having very high entropy. Unlike the energy exchange between the -
atoms and the light field, the entropy exchange cannot be treated as a small perturbation.
Probably the simplest way to begin is to count the number of states accessible to the system, and use the von Neumann "maximum entropy" approach. For an incoming single-mode laser beam, this can only be applied in a quantum mechanical description of the light field (coherent state) because a classical description would lead to a contradiction. Needless to say, the emitted fluorescence can occupy states of various frequencies, polarizations, and directions, so the outgoing entropy flow is huge. In -
general, the outflow calculated this way is orders of magnitude larger than the entropy lost by cooling the atomic sample, so laser cooling is really a quite poor refrigerator [34].
In spite of these difficulties, it is both interesting and challenging to think about the entropy flow in the various laser cooling schemes that are described in Part II of this book. In every case, spontaneous emission is the necessary dissipative process

5.2 Kinetic Theory and the Maxwell-Boltzmann Distribution 61
that provides for the increase ofentropy ofthe light field. In several examples where optical forces based on stimulated emission can lower the average kinetic energy, it must always be remembered that this is not the only criterion for cooling. The width ofthe velocity distribution must be narrowed for cooling, and any scheme purported to accomplish this without spontaneous emission violates thermodynamics.

5.2 Kinetic Theory and the Maxwell-Boltzmann Distribution

The modem era of kinetic theory began with Bernoulli, Clausius, Maxwell, and Boltzmann, who showed that the experimental "laws" of Boyle, Charles, and GayLussac could be derived from considerations of molecular motion. The underlying assumptions are that a gas is composed of a large number of small particles having no intrinsic properties other than their mass. They undergo collisions that redistribute their kinetic energies and momenta without dissipation or bias toward any particular energy or d-
irection. They occupy negligible volume, although there are simple approximate corrections for small volume, and their density is sufficiently low that all collisions are binary because three-body collisions are too improbable.
From these assumptions it is straightforward to calculate the equation of state of
a confined gas, and the perfect gas law follows directly from it as PV = NkBT,
where P, V, and T are the pressure, volume, and temperature of the gas of N particles, and k B is Boltzmann's constant. It is readily shown that all sets of particles in the sample have the same average kinetic energy, even if there are different kinds of particles (i.e., a mixture of different masses). This is not to say that they all have the same energy, but only that the energy distribution of those particles of one mass is the same as those of another mass if they are mixed, so that collision-
al redistribution occurs.
The system can approach true thermal equilibrium at a defined rate, which is generally quite fast on the human scale, and the laws ofthermodynamics are readily applied. At eqUilibrium the velocity, or momentum, distribution is the most likely one of the infinitely many possibilities, and this is the Maxwell-Boltmann (MB) distribution derived in many standard texts. The MB distribution is characterized by a Gaussian shape and is given by

(V2 ) f(v) = -./2-Iieivxp

--_2v2

,

(5.7)

v where == ,JkB T / M. The distribution only depends on the speed of the atoms,
and therefore it is spherically symmetric. Although the MB distribution ofEq. 5.7 is remarkably simple, its use in atomic physics can easily lead to confusion if no proper distinction is made between different cases.
Theoretical descriptions of laser cooling are often done in only ID. In order to test the outcome of such models, experiments are carried out in ID as well. In

62 5. General Properties Concerning Laser Cooling

Distribution f (v)

Range

vmp

vave

vrms

(V2 ) Gas (10)

- -1e x p __x_

,J2iiiJ

2iJ2

(-00,00)

f£ Gas (3D)

V-;

~2
v3

exp

(_

v~
2v2

)

(0,00)

Beam

(0,00)

° °

ViJsi

-
v

v[s9;v- 2iJ

TABLE 5.1. Quantities appropriate for a gas of particles (lD and 3D) and a thermal beam.
Note that the rms velocity is not the same as the average velocity for the distribution. Here
vrnp is the most probable velocity and Vave is the average velocity. For a 3D gas the velocity
v == Vrms is defined as the velocity characteristic for the temperature.

both cases the results can be related to a "temperature", although strictly speaking temperature is not defined when only one velocity component is considered. Furthermore, laser cooling experiments are often done in atomic beams, and it is important to point out that the various averages and distributions of particles in a confined gas are not the same as those in a beam formed by letting that confined gas expand into a vacuum. The detailed nature of the expansion, ranging from thermal to highly -
supersonic, can result in a wide variety of distributions. The simplest case is thermal expansion, and occurs when the size of the aperture between the source volume (for example, an oven for metals) and the vacuum system is small compared with the mean free path of the particles in the oven.
The first case to consider is the distribution of velocities in 10, for instance,
the x-direction. Using v2 = v; + v; + v~, d3v = dvxdvydvz, and integration
of Eq. 5.7 over Vy and Vz yields the result shown in the first row of Table 5.1.
The distribution is Gaussian with a maximum at Vx = 0, and has a width iJ.
The second case is the distribution of speeds in a gas in 3D, where d3 v can be replaced by v2sinO dvdOdc/J. Since the MB distribution is spherically symmetric, the integration over the angles can easily be performed and the result is shown in the second row of Table 5.1. This distribution is only defined for positive values of the speed v. Finally, consider the case of a thermal beam in the z-direction. Since the flux of atoms is proportional to vz, the distribution is peaked toward higher v comp-
ared to that of a thermal gas. The result is shown in the last row of Table 5.1
(see Ref. 11 for a detailed derivation, where ex == ,J2iJ).
Various moments of the velocity distributions are readily calculated from
(5.8)

5.3 Random Walks 63

The lowest moments of the distribution are the average velocity Vave (n = I) and the root mean square (rms) velocity Vnns = IfJi} (n = 2). The various moments

can easily be found by solving the definite integral by using standard integrals (see

e.g., Eqs. 2 and 3 in Sec. 3.461 of Ref. 35). The results for n = 1,2 are sho'Yn in

Table 5.1 together with the most probable velocity vrnp, for which the distribution

has its maximum. Since the primary characteristic denoting the temperature of a

3D gas is the mean kinetic energy, the appropriate choice from Table 5.1 is the rms

velocity jj given by

J3k;/ . jj = J3 jj =

(5.9)

For both the ID and 3D cases the average kinetic energy Mjj2/2 is given by k8T /2 times the number of degrees of freedom for the system, as required by thermodynamics.

5.3 Random Walks

In laser cooling and related aspects of optical control of atomic motion, the forces arise because of the exchange of momentum between the atoms and the laser field. Since the energy and momentum exchange is necessarily in discrete quanta rather than continuous, the interaction is characterized by finite momentum "kicks". This is often described in terms of"steps" in a fictitious space whose axes are momentum rather than position. These steps in momentum space are of size lik and thus are generall-
y small compared to the magnitude of the atomic momenta at thermal velocities. This is easily seen by comparing lik with M jj,

~=
Mjj

'

I[Ti;

«

l.

(5.10)

Thus the scattering of a single photon has a negligibly small effect on the motion of thermal atoms, but repeated cycles of absorption and emission can cause a large change of the atomic momenta and velocities.
Before delving into the details ofthese processes, it is helpful to discuss a simple model to provide some background. Consider an atom that is confined to motion in ID and the effect of a ID light field such as a traveling or standing plane wave. The atomic motion would be related to a "random walk" in aID momentum space whose step sizes are equal to the momentum of a photon, lik. The randomness arises from spontaneous emission from the excited state, and uncertainty of the absorption direction i-
n the case of a standing wave. At a certain instant t, an atom with momentum p has a probability E+(p) to make a step lik and a probability c(p) to make a step -lik. The dependence of E+(p) and c(p) on momentum p can be understood by remembering that the force on an atom may depend on its velocity.
Figure 5.2 shows a simulation of this process. This simulation uses a pseudorandom number generator that produces numbers ex uniformly distributed between

64 5. General Properties Concerning Laser Cooling

-4

~~~~~~~~~~~~~~~~~

o

10

20

30

40

50

Number of steps

FIGURE 5.2. Random walk process for ao=0.42, where a step in the positive direction is taken if the random number is larger than ao and in the opposite direction otherwise. This leads to a drift in the positive direction indicated by the dotted line. The fluctuations around this line is caused by the randomness of the process.

oand 1. When a is below a certain value ao, the step is negative, and otherwise it
is positive. From Fig. 5.2 it is apparent that there is a drift in the positive direction indicated by a dotted line, because in this case ao has been chosen to be smaller than 0.5. In addition, the trajectory of the atom does not follow the dotted line exactly since there is randomness involved in this process, and at each instant the atom might undergo a large number of steps in one direction only (see for instance around 14 and 38 steps).
Ifthis simulation were to be repeated under the same initial conditions for a large number of atoms, each trajectory would be different, but there would still be the same drift. Such random walks form the basis of many processes in physics, such as the Brownian motion of particles in a liquid, the current through an electrical circuit, and the electric field in a laser. Several techniques have been developed over the last century to model these kinds of processes, one of which, the Fokker-Planck e-
quation, will be discussed in the next section.
The distribution of the momenta of the atoms is described by a function W(p, t). As a result of the random walk process, this distribution is changed in time according to

W(p, t + M) - W(p, t) = - + [E+(p) E_(p)] W(p, 1)

(5.11)

+ E+(p -lik)W(p -12k, t) + c(p + Iik)W(p + 12k, t).

The first term on the right-hand side is the probability E± to jump away from the
momentum p in the + or - direction, multiplied by W(p, t), and this product is
the rate. The second and third terms give the rates of jumping toward momentum p. These last two terms can each be Taylor expanded as

5.3 Random Walks 65

E±(p =f hk)W(p =f hk, t) = E±(p)W(p, t)

(5.12)

a )3 =f

a hk ap

[E±(p) W(p,

t)]

+

(hk)2
-2-

2
ap2

[E±(p) W(p,

t)]

+

0

(

hk Mv

'

where the expansion is truncated after the term of the order (hk/Mv)2. When Eq. 5.12 is inserted into Eq. 5.11, the first term E±(p)W(p, t) is cancelled by its negative in Eq. 5.11. As long as Eq. 5.10 is satisfied, so that higher-order terms in Eq. 5.12 can be safely neglected, combining Eqs. 5.11 and 5.12 leads directly to

aw(p, t)

a a [MJ W(p, t)) 1 2 [M2 W(p, t)]

at = -

ap

+ 2 ap2

+ ... ,

(5.13)

with (5. 14a)

and (5. 14b)

The expressions on the right-hand side ofEq. 5.13 are called the drift and diffusion terms respectively.
For the case of Doppler cooling as discussed in Chapter 7, the absorption parameters E+(p) and E_(p) of the two laser beams coming from the right and the left depend on the Doppler shift kv. Since the linewidth for absorption is of the order
of y, the difference in absorption [E+(p) - L (p)] depends on the ratio kv / y .
Since the scattering rate of one beam is proportional to sy for low intensity, MJ and M2 can be written as

(5.15a)

and

M2 = sy(hk)2 = 2D

(5.l5b)

with fJ the damping coefficient and D the diffusion coefficient.
The stationary-state distribution W(p) is found by setting aW(p, t)/at = 0 in Eq. 5.13, and using MJ and M2 as defined as in Eqs. 5.15. Then the simplified partial differential equation can be directly integrated twice to give

(5.16)

This is a Maxwell-Boltzmann distribution with a characteristic temperature of
k8T = D/fJ. Using the values of fJ and D in Eqs. 5.15 gives k8T = hy /2, which
is the usual Doppler cooling limit given in Eq. 5.3, and is derived more carefully
in Sec. 7.2.

66 5. General Properties Concerning Laser Cooling
5.4 The Fokker-Planck Equation and Cooling Limits

The random walk process discussed above is simply a particular case for the more general case of a force on an atom when the force can be written in two parts:

+ F(p, t) = Fc(p) Fv(p, t),

(5.17)

where Fc(p) is a continuous force that damps the atomic motion and Fv(p, t) is a random force that fluctuates in time and has an ensemble time average of zero:

(Fv(p, t)} = O.

(5.18)

Now the ensemble averages for the moments Mi of such a force can be calculated as before for the ID random walk. The first and second moments are given by

(5. 19a)

and (5.19b)
where the second equality with the !'i-function holds if Fv (p, t) is Markovian. Note that M 1 is determined by the continuous force, whereas M2 is determined by the fluctuating force. When the correlation time of the force vanishes (Eq. 5.19b), it can be shown that all higher-order moments also vanish [36]. Using only these first two moments results in the Fokker-Planck equation [36]:

-a-w"-(-p-,-t')- = - a [F(p, t)W(p, t)] + -a'2--[-D-"(-p-,--t')-W:;-(-p--, "t-)-]

at

ap

ap2

(5.20)

For the special case when both the force and the diffusion are independent of time, the formal stationary solution is

10 -

c

( [p F(p') ')

W(p) = D(p) exp

D(p') dp ,

(5.21)

where C is an integration constant. Once the force and diffusion are known, the

stationary solution of the Fokker-Planck equation emerges easily. The fact that this

discussion closely parallels that in Sec. 5.3 shows that the random walk picture in

ID is not only appealing, but is also a close approximation to atomic behavior.

In the simplest and most common case in laser cooling the force is proportional to

the velocity (a true damping force as in Chapter 7) and the diffusion is independent

of velocity:

F(v) = -fiv

(5.22a)

and

D(v) = Do.

(5.22b)

Then the stationary solution of Eq. 5.20 for W(v) is

5.4 The Fokker-Planck Equation and Cooling Limits 67

This distribution is the Maxwell-Boltzmann distribution with a characteristic tem-
perature of kB T = DolfJ. The fact that the conditions ofEqs. 5.22 for the force and
diffusion are often approximately correct explains why the notion of temperature often appears as a description of a laser-cooled sample.
In kinetic theory, a Maxwell-Boltzmann distribution is the result of elastic collision of molecules of a gas with the walls of the container that holds the gas (see Sec. 5.2). After a while the gas is in thermal equilibrium with the walls and its temperature equals that of the walls. In laser cooling quite the opposite is the case, because the atoms have no interaction with the walls. Their only contact with the exterior is through the light field, and it has no definable temperature for the atoms-
 to equilibrate with. Instead there is a competition between cooling and heating effects described by the damping force and the diffusion in momentum space. Thus the conditions of Eq. 5.22 are fulfilled, so the stationary distribution is also a Maxwell-Boltzmann distribution. It should be emphasized as in Sec. 5.2, however, that this stationary state is not an equilibrium state, and thus there is no thermodynamically definable temperature.
In general, laser cooling forces can act over only a limited range of velocity
±vc « ii for atoms at room temperature. This happens because the frequency
of the laser light in the rest frame of a moving atom is modified by the Doppler effect, so the absorption only takes place for a small range of velocities. This can be described by introducing a capture velocity Vc that characterizes the velocity range where an appreciable force can be generated by writing

+ F(v) _ -fJv - 1 (vlvc)2·

(5.24)

In this case the stationary distribution can also be calculated directly from Eq. 5.20:

( 2) (~) W(p) ()( 1+

(-MfJ vz-/2Do)

Mvc

(5.25)

This is a not a Maxwell-Boltzmann distribution. Figure 5.3 shows plots of the
distribution function for a constant ratio of DolfJ but different values of Vc. The
spread of the distribution becomes large when Vc « .jDolMfJ, and it does not
make sense to define (Ek) or a temperature. However, using Vnns as the velocity
for which W(p) has decreased by a factor 1I ..;e with respect to its maximum, and
= taking M v~s k B T, then the temperature can be written as

(5.26)

« For the case DolMfJ v; this reduces to a Maxwell-Boltzmann distribution with a temperature given by Eq. 5.23. For DolMfJ » v; the temperature increases
exponentially with DolfJ.

68 5. General Properties Concerning Laser Cooling

0.015
Q"
g
:E 0.010
,'D"
J:
0.005

0.000

-0.5

0.0

0.5

Velocity v [mls]

FIGURE 5.3. Stationary velocity distribution of the atoms for a constant value of Dol/3,
but different values of the capture velocity Vc. The value of Vc is indicated with arrows.

5.5 Phase Space and Liouville's Theorem
One of the most important properties of laser cooling is its ability to change the phase space density of an atomic sample. Changing the phase space density provides a most important distinction between light optics and atom optics (see Chapters 13 and 15).
p, The phase space density per, t) can be defined in terms of the probability
r that a single particle is at position and has a momentum p at time t. In classical
mechanics it is possible to know position and momentum of a particle with absolute
certainty, and p (r, p, t) is peaked for just these values. Then the phase space density
for a system of N particles is the sum divided by N of the single-particle phase space densities of all the particles in the system, and the position and momentum of the ensemble are of interest.
p, Since p(r, t) is a probability, it is always positive and normalized according
to
(5.27)
Integrating p(r, p, t) only over position yields the velocity distribution function
f(v), which becomes the Maxwell-Boltzmann function for a gas in free space
p, as discussed in Sec. 5.2. Integrating p(r, t) only over momentum yields the
density n(r) divided by the total number of atoms N. However, the aim of laser cooling is to increase the phase space density, not just the density in one or the other parameter.
For the discussion of the phase space density, which is defined in a six-dimen-
sional space of rand p, it is convenient to introduce the 6D vector q = (r, p).
The probability P(V) to find one particle in a subspace V is then simply

5.5 Phase Space and Liouville's Theorem 69

This probability can change only if probability "flows" out of the subspace V

through its surface S, and the rate of change is given by

i i !, a - dP(- V) = -

p(q~ ,t)d6q = - p(q~ ,t) q ·dS~.

dt

at v

S

(5.29)

q Here the 6D flux is given by == (dr/dt, dp/dt), having three components of; p, and three components of and dS is a differential surface element of S. This is
similar to fluid mechanics, where the change of fluid in a volume is just the flow of fluid through the surface out of the volume. Using Gauss' theorem, the surface integral of Eq. 5.29 can be converted in a volume integral, and this leads to

Iv Iv q) :t p(q, t)d6q = - Vq (P(q, t) d6q,

(5.30)

where the 6D gradient operator is defined by Vq = (a / ar, a/a p). Because the

volume V can be defined arbitrarily, the integrands in Eq. 5.30 must be equal, and

this leads to

!,) ap(q,t) at

+

~ Vq

(~ p(q,

t)

q

= O.

(5.31)

The motion of an ensemble of classical particles in phase space can be described

by Hamilton's equations. It is sufficient to describe only a single particle because

the interaction between the particles does not play an important role in laser cool-

ing. The classical Hamiltonian is H(r, p), and Hamilton's equations for the time

dependence are

dp aH

=

dt

ar

dr aH and dt = ap'

(5.32)

Here the Hamiltonian is chosen to be time-independent so the total energy of the
system is conserved, and this leads to the total energy H (r, p) == E.
q. q The gradient operator in Eq. 5.31 acts on both p and However, for the part,
the equations of motion 5.32 demand that

r Note that the order of differentiation can be changed, since and pare independent
coordinates. Using this result in Eq. 5.31 leads to

!, . ap(q, t) + V ( (~ )) = dp(q, t) _ 0

at

q q p q, t - dt - .

(5.34)

Equation 5.34 is the key result of this section, and is called the Liouville theorem. It requires that the phase space density cannot be changed. However, it does not mean that the phase space density cannot be distributed differently over the degrees

70 5. General Properties Concerning Laser Cooling

of freedom. Or, to put it into the context of fluid dynamics, the shape of a volume of flowing fluid can change in time, but the fluid volume is fixed. Traveling with the flow of the fluid, the density does not change.
The Liouville theorem depends on the fact that the motion of the particles can be described by a Hamiltonian. This is not the case when the forces depend not only on position, but also on velocity. Then a Hamiltonian description for the system can no longer be used and Eq. 5.32 no longer applies. For instance, consider the system in Sec. 5.4, where the force is directly proportional to the momentum,
F namely, = - r p, with r = f3 / M. Inserting this force in Eq. 5.33 leads to

dp(ij, t) _ 3r (~ t) dt - p q, ,

(5.35)

where the factorof3 stems from the compression in 3D. This leads to an exponential gain in the phase space density with a time constant 1/3r, so using velocity dependent forces allows phase space compression to be obtained.
The Hamiltonian description of geometrical optics leads to a similar theorem to that of Eq. 5.34, called the brightness theorem, that can be found in many optics books. Thus bundles of light rays obey a similar phase space density conservation. But there is a fundamental difference between light and atom optics. In the first case, the "forces" that determine the behavior of bundles of rays are "conservative" and phase space density is conserved. For instance, a lens can be used to focus a light be-
am to a small spot; however, at the same time the divergence of the beam must be increased, thus conserving phase space density. By contrast, in atom optics dissipative forces that are velocity dependent can be used, and thus phase space density is no longer conserved. Optical elements corresponding to such forces can not exist for light, but in addition to the atom optic elements of lenses, collimators and others described in Chapter 13, phase space compressors can also be built. Such compression-
 is essential in a large number of cases, but most importantly for the achievement of Bose-Einstein condensation.

Part II
Cooling & Trapping

6
Deceleration of an Atomic Beam
6.1 Introduction
The origin of optical forces on atoms has been discussed in Chapter 3, and here a specific application is introduced. The use of electromagnetic forces to influence the motion ofneutral atoms has been a subject ofinterest for some years, and several review articles and books on the subject are listed in Appendix B. The force caused by radiation, particularly by light at or near the resonance frequencies of atomic transitions, originates from the momentum associated with light. In addition to energ-
y E = hw, each photon carries momentum hk and angular momentum h. When an atom absorbs light, it stores the energy by going into an excited state; it stores the momentum by recoiling from the light source with a momentum Ilk; and it stores the angular momentum in the form of internal motion of its electrons. The converse applies for emission, whether it is stimulated or spontaneous. It
is the velocity change of the atoms, Vr = hkj M ::::: few cm/s, that is of special
interest here, and although it is very small compared with thermal velocity, multiple absorptions can be used to produce a large total velocity change. Proper control of this velocity change constitutes a radiative force that can be used to decelerate and/or to cool free atoms.
Although there are many ways to decelerate and cool atoms from room temperature or higher, the one that has received the most attention by far depends on the scattering force that uses this momentum transfer between the atoms and a radiation field resonant with an atomic transition. By making a careful choice of geometry and of the light frequency one can exploit the Doppler shift to make the momentum exchange (hence the force) velocity dependent. Because the force is

74 6. Deceleration of an Atomic Beam
velocity dependent, it can not only be used for deceleration, but also for cooling that results in increased phase space density (see Sec. 5.5).

6.2 Techniques of Beam Deceleration

The idea that the radiation scattering force on free atoms could be velocity dependent and therefore be used for cooling a gas was suggested by Wineland and Dehmelt [37], Hansch and Schawlow [38], and Wineland and Itano [39], although Kastler, Landau, and others had made allusions to it in earlier years. The possibility for cooling stems from the fact that atomic absorption of light near a resonance is strongly frequency dependent, and is therefore velocity dependent because of the Doppler shift o-
f the laser frequency seen by the atoms moving relative to the laboratory-fixed laser. Of course, a velocity-dependent dissipative force is needed for cooling.
The simplest form of this force to study, that from a low-intensity single plane wave of light, has been exploited for cooling of an atomic beam. Early experiments in several laboratories [40-43] have used this force, along with a variety of methods to overcome technical problems [44-46], to decelerate and cool thermal atomic beams to only a few hundredths of a Kelvin.
One very obvious implementation of radiative deceleration and cooling is to direct a laser beam opposite to an atomic beam as shown in Fig. 6.1 [42,43]. In this case each atom can absorb light very many times along its path through the apparatus. Of course, excited-state atoms cannot absorb light efficiently from the laser that excited them, so between absorptions they must return to the ground state by spontaneous decay, accompanied by emission of fluorescent light. The emitted fluorescent light -
will also change the momentum of the atoms, but its spatial symmetry results in an average of zero net momentum transfer after many such fluorescence events. So the net deceleration of the atoms is in the direction of the laser beam, and the maximum deceleration is limited by the spontaneous fluorescence rate.
The maximum attainable deceleration is obtained for very high light intensities, and is limited because the atom must then divide its time equally between ground and excited states. High-intensity light can produce faster absorption, but it also causes equally fast stimulated emission; the combination produces neither deceleration nor cooling because the momentum transfer to the atom in emission is then in the opposite direction to what it was in absorption. The deceleration therefore
a saturates at a value max = hky /2M, where the factor of 2 arises because the
atoms spend half of their time in each state (see the discussion on page 25). The Doppler shifted laser frequency in the moving atoms' reference frame
should match that of the atomic transition to maximize the light absorption and scattering rate. This rate Yp is given by the Lorentzian (see Eq. 2.26)

soy/2
Yp = 1 + So + [2(8 + WD)/Y] 2'

(6.1)

6.2 Techniques of Beam Deceleration 75

<===:::::l!- ---. ~E"~~- - -- - -- - -- - nun -

Cooling laser

FIGURE 6.1. Schematic diagram of apparatus for beam slowing. The tapered magnetic field is produced by layers of varying length on the solenoid. A plot of Bz vs. z is also shown.

where So = 1/ Is is the ratio of the light intensity I to the saturation intensity
Is, which is a few mW/cm2 for typical atomic transitions (see Table C.2). Also
8 = we - Wa is the laser detuning from resonance, We is the laser frequency and Wa
is the atomic resonance frequency. The Doppler shift seen by the moving atoms
v v is WD = -k . (note that k opposite to produces a positive Doppler shift).
Maximum deceleration requires (8 + WD) « y, so that the laser light is nearly resonant with the atoms in their rest frame. The net force F on the atoms is (see
Eq.3.14)
(6.2)

which saturates at large So to Mamax = Fmax == hky /2.
In Table 6.1 are some of the parameters for slowing a few atomic species of
interest from the peak of the thermal velocity distribution. Since the maximum
a deceleration max is fixed by atomic parameters, it is straightforward to calculate
the minimum stopping length Lmin and time tmin for the rms velocity of atoms
ii = 2../kB T / M at the chosen temperature. The result is

Lmin = iP /2amax

(6.3a)

and

tmin = Ii/amax.

(6.3b)

It is comforting to note that IFmax ILmin is just the atomic kinetic energy and that
Lmin is just tminIi/2. If the light source is spectrally narrow, then as the atoms in the beam slow down,
their changing Doppler shift will take them out of resonance. They will eventually cease deceleration after their Doppler shift has been decreased by a few times the
power-broadened width y' = y../l + So as given in Eq. 2.27b, corresponding to
~V of a few times y / k. Although this ~V of a few m/s is considerably larger than the typical atomic recoil velocity Vr of a few cm/s, it is still only a small

76 6. Deceleration of an Atomic Beam

atom
H He* He* Li Na K Rb Cs

Toven (K)
1000 4
650 1017 712 617 568 544

V
(mls)
5000 158 2013 2051 876 626 402 319

Lmin
(m) 0.012 0.03
4.4 1.15 0.42 0.77 0.75 0.93

tmin
(ms)
0.005 0.34 4.4 1.12 0.96 2.45 3.72 5.82

TABLE 6.1. Parameters of interest for slowing various atoms. The stopping length Lmin and time tmin are minimum values. The oven temperature Toven that determines the peak velocity is chosen to give a vapor pressure of 1 Torr. Special cases are H at 1000 K and He in the metastable triplet state, for which two rows are shown: one for a 4 K source and another for the typical discharge temperature.

fraction of the atoms' average thermal velocity, so that significant further cooling or deceleration cannot be accomplished.
In order to accomplish deceleration that changes the atomic speeds by hundreds
of mis, it is necessary to maintain (<5 + WD) « y by compensating such changes of the Doppler sh~ft. This can be done by changing WD, or <5 via either we or Wa.
The two most common methods for overcoming this problem are sweeping the laser frequency Wi to keep it in resonance with the decelerating atoms [47-49], and spatially varying the atomic resonance frequency with an inhomogeneous dc magnetic field to keep the decelerating atoms in resonance with the fixed frequency laser [42,50]. Other methods that have also worked are discussed below.

6.2.1 Laser Frequency Sweep
In the method of changing Wi, the laser frequency is swept upward at rate Wi to compensate the decreasing Doppler shift as the atoms slow down. Of course,
(<5 + WD) must be kept« y in order to maintain atomic resonance, and a < amax
must always be satisfied. This requires that -Wi ~ WD = k·a < Itk2 y 12M = Wr y.
This method of Doppler compensation has several distinct advantages and disadvantages, and choosing it depends on the ultimate purpose for slowing the atoms. Although it was first implemented using a dye laser for Na [47], it is especially easy to use with semiconductor laser diodes [49] because of their fast and simple electronic tunability. A few rnA sweep changes their frequency by several GHz, and
this is easily enough to compensate for a Doppler shift corresponding to v = WD I k
of a few kmls. The most obvious disadvantage is the time structure it imposes on the production of slow atoms. They arrive in pulses separated by a few times tmin given in Eq. 6.3b. This may be desired, of no importance, or undesired, depending on the nature of the experiments.

6.2 Techniques of Beam Deceleration 77

6.2.2 Varying the Atomic Frequency: Magnetic Field Case
The use of a spatially varying magnetic field to tune the atomic levels along the beam path was the first method to succeed in slowing atoms [42]. It works as long as the Zeeman shifts of the ground and excited states are different so that the resonant frequency is shifted (see p. 42). The field can be tailored to provide the appropriate Doppler shift along the moving atom's path. For uniform deceleration
a == 1/amax from initial velocity vo, the appropriate field profile is

B(z) = BoJI - z/zo,

(6.4)

where zo == MV5/1/hky is the length ofthe magnet, Bo = hkvo/IL', IL' == (geMe-
ggMg)ILB, subscripts g and e refer to ground and excited states, gg,e is the Lande g-factor, ILB is the Bohrmagneton, and Mg,e is the magnetic quantum number. The design parameter 1/ < 1 determines the length of the magnet Zoo A solenoid that can produce such a spatially varying field has layers of decreasing lengths as shown schematically in Fig. 6.1. The technical problem of extracting the beam of slow atoms from the end of the solenoid can be simplified by reversing the field gradient and choos-
ing a transition whose frequency decreases with increasing field [44].
The equation of motion of an atom in the magnet cannot be easily solved in general because of the velocity-dependent force, but by transforming to a decelerating
n frame [51] the problem can be addressed. For the special case of uniform decel-
eration the velocity of this frame in the lab is VN- = voJI - z/zo, and the Doppler
shift associated with this velocity is compensated by the position-dependent Zeeman shift in the magnet. The resulting equation of motion for the velocity of atoms
Vi == V - VN- relative to this frame is given by

where Fmax = hky /2. For dv'/dt = 0 the steady-state velocity v~s is given by

kvsI s = 8 ± -y2 ~so-1-/1- -/1.

(6.6)

There are two values of v~s but the one with the (+) sign is unstable. The magnitude of v~s is typically of order 8/ k. This velocity is approximately constant as atoms decelerate along their paths through the magnet so the decreasing Doppler shift is
compensated by the decreasing Zeeman shifts.

6.2.3 Varying the Atomic Frequency: Electric Field Case
The changing Doppler shift can also be compensated by a Stark shift using an inhomogeneous dc electric field, and this has been demonstrated in both Na [52]

78 6. Deceleration of an Atomic Beam

and Cs [53]. There are special problems with this technique that arise because
adequate deceleration requires excited states with y = IjT ~ 107/s or larger.

However, only low-lying atomic states have such large values of y, and the Stark

shifts of such states are relatively small. Thus the method requires rather large

electric fields.

The field profile for the Zeeman-compensated method has the form of Eq. 6.4

because the Zeeman shift is linear in field, but Stark shifts of eigenstates of parity

(usual low-lying atomic states) are not linear. Their Stark shifts IlEs are typically

quadratic in field, given by

IlEs = l1al£12,

(6.7)

where a is the atomic polarizability and £ is the applied dc electric field. Typical
values of the Stark shift difference between ground and excited states are about
100 kHz x 1£1 2, where £ is given in kV/cm. Thus compensation of typical Doppler
shifts of about 700 MHz requires £ ~ 80 kV/cm. Unlike the Zeeman-compensation method where the g-factors are nearly the same for many atoms, a can vary by factors of 3 - 5 among the alkalis. In order to achieve constant acceleration, the resulting field profile is

£(z) = £oJl - ~h - zjzo,

(6.8)

where zo is the length of the field region. Needless to say, the condition a < amax must be maintained, and so zo must still conform to Eq. 6.3a.
The geometry for this experiment has two quite long, oppositely charged plates, typically made of highly polished stainless steel, separated by a tapered gap ranging from one to a few cm, and charged to a few tens of kV. Since the z-dependence of £ is much weaker than that for B(z) in Eq. 6.4, a linearly tapered gap provides an adequate approximation to Eq. 6.8. Like the Zeeman-compensating method, a slowing laser opposes the atomic velocity. However, unlike the Zeeman method, the open geometry al-
lows lateral access to the beam because it's not enclosed in a solenoid, and transverse cooling and/or collimation can easily be applied in one direction [53].

6.2.4 Varying the Doppler Shift: Diffuse Light
It is also possible to compensate the changing Doppler shift of decelerating atoms
v by exploiting the angular dependence embodied in WD = -k· [54-56]. Atoms
moving through diffuse monochromatic light see a range of frequencies that vary with the angle between the velocity and the light direction. The resonance frequency Wa of an atom moving at a velocity v will be matched by the Doppler-
shifted laser frequency when the angle () between the wavevector kof the light and
v the atomic velocity satisfies

/) = = = We - Wa kvcos(} -WD,

(6.9)

6.2 Techniques of Beam Deceleration 79
corresponding to 8 + WD = O. For red detuned light (8 < 0) this resonance
e condition requires > 7r/2, meaning that the recoil caused by absorbing light
opposes the atomic motion and slows the atoms. As in the other cases, subsequent spontaneous emission does not exert a force on the atoms on average, but does provide the dissipative process needed for cooling. As the atoms are decelerated
e (v decreases), they absorb light from an increasingly forward angle until the e maximum value of = 7r is reached.
When the light is tuned below resonance in the lab frame by an amount 8, then the Doppler shift will be toward the blue, closer to resonance, as long as a component of the light's propagation direction is antiparallel to the atomic velocity. (Light propagating nearly parallel to the atomic velocity is shifted further to the red, further out of resonance.)
Atoms can be efficiently slowed by scattering the counterpropagating light if the incident angle required for the Doppler effect to shift it close to atomic resonance is not too close to 7r/2 so that there remains a considerable component of the
momentum vector hk antiparallel to ii. Of course, as the atoms slow down, 8
doesn't change, but the smaller ii requires a larger contribution from the angular
part of k . ii. Thus atoms will interact with counterpropagating light from a cone
of decreasing angle, closer to opposing the velocity direction, until they have
decelerated to nearly v = 8/ k. Below this velocity, there is no angle for which the
Doppler effect can shift the light into resonance, and so the deceleration ends. Because the light is isotropic, the atomic motion in any direction is directly
opposed. This is in contrast to the methods described above in Secs. 6.2.1, 6.2.2, and 6.2.3 where only the longitudinal velocity component of the atomic motion is opposed by the light because the force is determined by the k-vector of the single laser beam. This major advantage helps to prevent the atomic beam from being transversely expanded (apart from spontaneous emissions).
6.2.5 Broadband Light
Still another method of deceleration uses light that is not spectrally narrow, but is
white over a spectral region from Wa to (wa - k. iio). Then Doppler compensation
is not necessary because atoms of any velocity below Vo will find resonant light in a counterpropagating beam. Such white light slowing has been considered in the past [57,58] and has also been demonstrated [59-62]. One important disadvantage is that saturation of the atomic transition for all velocities below Vo requires much
more light power because the spectral density must be at least Is / y , and since k.iio
is typically lOOy, the overall power must be at least 100 times larger than in the other Doppler-compensation techniques discussed above.
6.2.6 Rydberg Atoms
A quite different slowing scheme using the large Stark shifts of Rydberg states was proposed in 1981 [63]. In this method, the force on the atoms does not come from the momentum of the light but from the energy gradient associated with their

80 6. Deceleration of an Atomic Beam
Stark shifts in an inhomogeneous dc electric field. Atoms are optically excited to a Rydberg state whose Stark-shifted energy is downward-going in a region of strong dc electric field. If the field is very inhomogeneous, produced, for example, by a pair of small electrodes of few mm size and separation, then atoms gain potential energy and thus must lose kinetic energy as they leave the region between the electrodes and travel to a region of zero field. When they entered such a region of strong fi-
eld in the ground state, they did not gain as much energy as they lose when they leave it in an excited state.
The lifetime of the selected Rydberg state is chosen so that the atoms will decay to the ground state outside the field region. Thus the size scale of the experiment is determined by the Rydberg state lifetime and the atomic speed. Travel through regions of alternately small and large fields, coupled with proper excitation by well-focused laser beams, causes repeated kinetic energy loss. The atoms always climb up bigger hills than they fall down, and radiate higher frequency light from the tops of-
 those hills than they absorb at the bottoms. Thus their kinetic energy is converted into potential energy and then radiated away.
This method has the advantage that the slowing distance depends on the properties of the Rydberg states, not on the atoms' kinetic energy or speed. Therefore the slowing distance can be much less than Lmin for optical forces as given in Eq. 6.3a, and possibly more useful for fast, light atoms such as He* at discharge temperatures. Such large forces might also be used to control and deflect atomic velocities, and possibly even reverse them, thereby making a Rydberg atom mirror [64].
6.3 Measurements and Results
This section presents some results of experiments that used the Zeeman-tuning technique to compensate the changing Doppler shift. The most common way to measure the slowed velocity distribution is to detect the fluorescence from atoms excited by a second laser beam propagating at a small angle to the atomic beam [42]. Because of the Doppler shift, the frequency dependence of this fluorescence provides a measure of the atomic velocity distribution. In this method, the velocity resolution fl v is li-
mited by the natural width of the excited state to fl v = y / k (~ 6 mls for Na).
In 1997 a new time-of-flight (TOF) method to accomplish the same result was reported, however, with a much improved resolution [65]. In addition, it provided a much more powerful diagnostic of the deceleration process. The TOF method has the capability to map out the velocity distribution for both hyperfine ground states of alkali atoms along their entire path through the solenoid. The experimental arrangement is shown in Fig. 6.2. The atoms emerge through an aperture of 1 mm2 from an effusive Na -
source heated to approximately 300°C. During their subsequent flight through a solenoid, they are slowed by the counterpropagating laser light from laser 2, and the changing Doppler shift is compensated with a field that is well described by Eq. 6.4.

Extraction Magnets
Profile Magnet

6.3 Measurements and Results 81

( ><
40 ern 125 ern

Pump Probe Beam Beam
25 em 40 em

FIGURE 6.2. The TOF apparatus, showing the solenoid magnet and the location of the two laser beams used as the pump and probe. The resolution of the technique is ultimately determined by the flight path zp (figure from Ref. 65).

6

'ji;'
:t:
:§

..Q.. 4
~

~ i:&:

IS o.2q:

2

0

• 0

Instrumental Resolution

, ,
:+- ------)l,,, ,,,

, ,. , • •

, • •
•.- • .t .41'• 0

125 130 135 140 145 150 155
Velocity (m/s)

i FIGURE 6.3. The velocity distribution measured with the TOF method. The experimental
width of approximately (y / k) is shown by the dashed vertical lines between the arrows. The Gaussian fit through the data yields a FWHM of 2.97 mls (figure from Ref. 65).

82 6. Deceleration of an Atomic Beam
For the TOF technique there are two additional beams labeled pump and probe from laser 1 as shown in Fig. 6.2. Because these beams cross the atomic beam at
90°, k . ii = 0 and they excite atoms at all velocities. The pump beam is tuned to
excite and empty a selected ground hyperfine state (hfs), and it transfers more than 98% of the population as the atoms pass through its 0.5 mm width. To measure the velocity distribution of atoms in the selected hfs, this pump laser beam is interrupted for a period ll.t = 10- 50 ILS with an acoustic optical modulator (AOM). A pulse of atoms in the selected hfs passes the pump region and travels to the probe beam. The time dependence of the fluorescence induced by the probe laser, tuned to excite -
the selected hfs, gives the time of arrival, and this signal is readily converted to a velocity distribution. Figure 6.3 shows the measured velocity distribution of the atoms slowed by laser 2.
With this TOF technique, the resolution is limited by the duration of the pump laser gate ll.t and the diameter d of the probe laser beam (d ::s: 1.0 mm) to
ll.v = v(vll.t + d)/z p, typically less than 1 mls. This provides the capability
of measuring the shape of the velocity distribution with resolution ~ lO times bet-
ter than y I k as compared with the Doppler method. Furthermore, the resolution
improves for decreasing velocity v; ll.v is smaller than the Doppler cooling limit of .jhy12M ~ 30 cmls for v ~ 80 mls and Na atoms. Figure 6.3 shows the final velocity distribution for such a measurement giving a FWHM of 3.0 mls at a
central velocity of 138 mls. The width is about one half of y I k.
The method of shutting off the slowing laser beam a variable time l'off before the short shut-off of the pump beam offers a much more informative scheme of data acquisition. The atoms that pass through the pump region during the short time when the pump beam is off have already traveled a distance ll.z = V(Z)l'off (at constant velocity v(z) because the slowing laser was off), and their time ofarrival at the probe laser is zplv(z) = zpl'offl ll.z. Thus theTOF signal contains information
not only about the velocity of the detected atoms, but also about their position z
in the magnet at the time the slowing laser light was shut off. Since the spatial dependence of the magnetic field is known (Fig. 6.1), both the field and atomic velocity at that position can be determined, and the TOF signal is proportional to the number of atoms in that particular region of phase space. This new technique therefore gives a mapping of the atomic population in the z-direction of the phase space, z and v(z), within the solenoid.
Such mapping of the velocity distribution within the solenoid is a powerful diagnostic tool. The contours ofFigs. 6.4a and b represent the strength ofthe TOF signal for each of the two hfs levels, and thus the density of atoms, at each velocity and position in the magnet. The dashed line shows the velocity v(z) = (IL' B(z)/h -lJ)1 k forwhichthemagneticfieldtunestheatomictransition(F, MF) = (2, 2) ~ (3,3) into resonance with the decelerating beam. The most obvious new information in Fig. 6.4a is th-
at atoms are strongly concentrated at velocities just below that of the resonance condition. This corresponds to the strong peak of slow atoms shown in Fig. 6.3. Additional information about optical pumping among the hfs sublevels is also present, and discussed in Sec. 6.4.

6.4 Further Considerations 83

·50

C

50

tVO

Position (em)

V

50

1(}O

Position {em}

FIGURE 6.4. Contour map of the measured velocity and position of atoms in the solenoid, (a) for Fg = 2 atoms and (b) for Fg = I atoms. The dashed line indicates the resonance frequency for the (F, M F)= (2, 2) --+ (3,3) cycling transition. The density of atoms per unit phase space area b. v b.z has been indicated with different gray levels (figure from Ref. 65).

6.4 Further Considerations
6.4.1 Cooling During Deceleration
It is important to stress that deceleration is not the same as cooling: cooling requires a compression of the velocity distribution in phase space as shown in Figs. 6.3 and 6.4. To see how this notion applies to laser deceleration of an atomic beam, consider again the example of Zeeman compensation of the Doppler shift [65].
Some atoms emerging from the oven are moving too fast to be decelerated at all because, for them, the laser frequency is Doppler shifted too far out of resonance to absorb light, even where the magnetic field is strongest at the solenoid entrance.

84 6. Deceleration of an Atomic Beam

These are shown in Fig. 6.4a near the top. Others have velocities whose Doppler shift causes the laser frequency to match the Zeeman shift and begin slowing down as soon as they enter the solenoid. Still others are moving so slowly that they do not absorb light until they have traveled to a point where the static but spatially varying magnetic field has decreased to the appropriate value to match their smaller Doppler shift and produce resonance. These begin accumulating just below the curve of th-
e resonance condition along the length of the solenoid, also shown in Fig. 6.4a. Thus all atoms with velocity lower than Vo can be decelerated by the laser beam to some smaller velocity at the end of the solenoid leading to an increase in phase space density. This final velocity is determined by the atomic resonance condition at the chosen laser frequency in the field at the end of the solenoid. Thus all atoms with velocities below Vo are swept into a narrow velocity group around this final veloci-
ty. The result is that the originally wide thermal velocity distribution is compressed and shifted to lower velocities as shown in Fig. 6.3: this process is called laser cooling of an atomic beam, because it increases the phase space density p (see Sec. 5.5).
This can be viewed in more detail by expanding the velocity in the reference
n frame around v~s. Then Eq. 6.5 can be rewritten as

-ddvt' = -rD(V" - vss )'

(6. lOa)

where

I r D = 4w,112 (l - 11)so _ 1

V So

11

(6. lOb)

when only the lowest-order term in (v' - v~s) is retained. The damping rate r Dis
maximum at r D = hk2/ 4M = w, /2 for 11 = 0.5 and So = 2. The damping time
1/ r D is typically 10 f..Ls, which is much smaller than the time atoms spend in the
magnet. Thus atoms are not only decelerated in the lab frame, but cooled toward
this velocity. With f3 = MrD = hk2/4 and D = sy(h)2/2 as given in Eq. 5.15b,
it is straightforward to show that the final temperature is related to the Doppler
temperature 1'D.

6.4.2 Non-Uniformity ofDeceleration

It is important to realize that even the ideal magnetic field profile does not produce a

constant deceleration [44,65]. This is easily seen by differentiating the resonance

condition found from Eq. 6.4 to find the deceleration satisfying the resonance

condition:

BO) a = -l1amax ( I + 1 -M,/Jf.Z.L' ,

(6.11 )

wherez == (l-z/zo),usingd,JZ/dt = v d,JZ/dz. In the usual operating condition
to extract slow atoms from the solenoid, M / f..L' Bo < 1. Only for M = f..L' Bo is the deceleration constant.

6.4 Further Considerations 85
z Furthermore, it is clear that as the atoms progress through the solenoid, even-
tually becomes small enough that maintaining the resonance condition requires the magnitude of the deceleration to exceed amax . The atoms then drop out of the deceleration process and emerge from the solenoid as desired.
6.4.3 Transverse Motion During Deceleration
As the longitudinal motion of atoms in a beam is slowed by counterpropagating laser light, their transverse motion becomes more important if it, too, is not compensated. For example, if an atomic beam of mean longitudinal velocity of 1000 mls and angular spread 0.01 radian is decelerated to 50 mis, its angular divergence expands to 0.2 radian at the end of the slowing region. It is hardly recognizable as a beam! In order to compensate this effect, the decelerating laser beam is chosen not to be pa-
rallel, but is focused so that it converges toward the atomic beam oven. Thus there is a small transverse component of the optical force that opposes the transverse velocity just enough to maintain the angular spread of the original atomic beam [42,43]. Note that for the case of diffuse light slowing described in Sec. 6.2.4 such considerations are not necessary because the optical force is always directly opposite to the atomic velocity [54,55].
There is another source of transverse motion that is not as easily controlled. Each
time an atom spontaneously decays to the ground state, it receives an impulse lik in
a random direction. Although the average value of these impulses is zero, the rms value is not. Thus the atoms diffuse transversely as they move along their paths. The
f resulting distance from the axis !!.x as a result of this diffusion is !!.X = v(t)dt,
where v(t) = lik.;y;;t/ M (Ypt is the number of photons scattered). Integrating = = from t 0 to VO/1/amax gives!!.x (2Iik/3M)JYp(VO/1/amax )3, which is several
mm for typical experiments. Thus the focused laser beam must be about 1 cm in diameter at the end of the deceleration region if too many atoms are not to escape out the sides as a result of this transverse diffusion. In the case of Stark compensation discussed in Sec. 6.2.3, the transverse motion in one of the two directions can be largely compensated with additional laser beams.
As atoms move down the magnet, their velocities are determined by SQ, l), and B(z) as discussed above. However the light intensity distribution across the coun-
terpropagating laser beam is not uniform, but is given by 1 (x, z) = loe-2x2 /w 2(z),
where w(z) is the Gaussian beam width. If the beam is focused, w(z) is given by the usual expression for Gaussian beam propagation. Thus atoms in a plane perpendicular to the laser beam axis have different velocities, and the shape of the surface containing atoms of the same velocity is determined by the Gaussian intensity profile. Using vn. = .jvQ - 2az and Eq. 6.2 with the Gaussian spatial profile in Yp, this surface has the form z(x) = z\e2x2 / w2 (z) for small x, and is undefined where x is la-
rge enough for the intensity to fall below 1/10, the minimum intensity required to maintain deceleration. Furthermore, fluctuations of the light intensity can cause instabilities on this surface [66] .

86 6. Deceleration of an Atomic Beam
6.4.4 Optical Pumping During Deceleration
In Sec. 6.1 it was pointed out that very many absorptions and emissions are re-
« quired to have a significant effect on the velocity of a thermal atom because vr ii
(see Table 6.1). Since alkali atoms have two well-separated hfs ground states, optical pumping can readily populate the one not in resonance with the slowing laser beam. Even in the first beam-slowing experiment [42], this was taken into account by choosing the laser beam's polarization to operate on a cycling transition that connects the state (Fg = 2, Mg = 2) with (Fe = 3, Me = 3) of Na (see Fig. 4.1). However, even this could be insufficient unless the polarization is very pure. As an added pre-
caution, the authors of Ref. 42 therefore applied a large homogeneous magnetic field in addition to the tapered one that compensated the changing Doppler shift. This homogeneous field altered the coupling among the hyperfine sublevels of the excited state to inhibit the undesired spontaneous decay channel.
The TOF diagnostic technique described in Sec. 6.3 has the capability of measuring such optical pumping processes along the entire length of the solenoid. Figure 6.4a shows a strong buildup of Fg = 2 atoms over a wide velocity range centered near 700 m/s at the entrance of the solenoid, along with a corresponding depletion of Fg = 1 atoms (Fig. 6.4b). This strong optical pumping occurs between the oven and the magnet where the slowing laser light is very intense because it is focused on the oven. -
For typical values of 30 mW laser power and a focal spot size of ~ 100 ILm, the intensity of 3 x 105 mW/cm2 broadens the absorption line from its natural width of 10 MHz to about 2 GHz (see Eq. 2.27), more than enough to compensate the Doppler shift of the entire velocity distribution. Since the detuning is close to the resonance for the Fg = 2 -+ Fe = 3 transition, the optical pumping is most effective on Fg = 1 atoms because they are strongly Doppler-shifted by their velocities near 1000 m/s and-
 not far from the peak of the distribution at 700 m/s. Of course, atoms in Fg = 2 can also be excited, but they are Doppler shifted further from resonance, so that the net transfer of population is from Fg = 1 -+ Fg =2.
As the atoms enter the solenoid, this effect is partially reversed. Figure 6.4a shows a decrease of the Fg = 2 population near 700 m/s in the rising edge of the magnetic field, while Fig. 6.4b shows a corresponding increase of Fg = 1 atoms.
In this field region, the excitatio~s from the Fg = 2, Mg = -1, 0, and +1 levels
to the states appropriate for circularly polarized light come into resonance with the laser [65]. Various other optical pumping schemes can be used to explain the appearance and disappearance of other population islands in Fig. 6.4.

7
Optical Molasses
7.1 Introduction
Chapter 6 presented a discussion of the radiative force on atoms moving in a single laser beam. Here this notion is extended to include the radiative force from more than just one beam. For example, if two low-intensity laser beams of the same frequency, intensity, and polarization are directed opposite to one another (e.g., by retroreflection of a single beam from a mirror), the net force found by adding the radiative forces given in Eq. 6.2 from each of the two beams obviously vanishes
for atoms at rest because kis opposite for the two beams. However, atoms moving
slowly along the light beams experience a net force proportional to their velocity whose sign depends on the laser frequency. If the laser is tuned below atomic resonance, the frequency of the light in the beam opposing the atomic motion is Doppler shifted toward the blue in the atomic rest frame, and is therefore closer to resonance; similarly, the light in the beam moving parallel to the atom will be shifted toward the red, further out of resonance. Atoms will therefore interact more strongly wi-
th the laser beam that opposes their velocity and they will slow down. This is illustrated in Fig. 7.l.
The slowing force is proportional to velocity for small enough velocities, resulting in viscous damping [67,68] as shown in Fig. 3.1 on p. 36 that gives this technique the name "optical molasses"(OM). By using three intersecting orthogonal pairs of oppositely directed beams, the movement of atoms in the intersection region can be severely restricted in all three dimensions, and many atoms can thereby be collected and cooled in a small volume. OM has been demonstrated at several laboratories [69], -
often with the use of low cost diode lasers [70].

88 7. Optical Molasses

0.2
~
..:.c
~ 0.0 ::::::::::::::::.....
~
-0.2

-4

-2

0

2

4

Velocity [y / k]

FIGURE 7.1. Velocity dependence ofthe optical damping forces for one-dimensional optical molasses. The two dotted traces show the force from each beam, and the solid curve is their sum. The straight line shows how this force mimics a pure damping force over a restricted
velocity range. These are calculated for So = 2 and B = -y so there is some power
broadening evident (see Sec. 2.4).

Note that OM is not a trap for neutral atoms because there is no restoring force on atoms that have been displaced from the center. Still, the detainment times of atoms caught in OM of several mm diameter can be remarkably long.

7.2 Low-Intensity Theory for a Two-Level Atom in One Dimension

It is straightforward to estimate the force on atoms in OM from Eq. 3.14. The discussion here is limited to the case where the light intensity is low enough so that stimulated emission is not important. This eliminates consideration of excitation
of an atom by light from one beam and stimulated emission by light from the other, a sequence that can lead to very large, velocity-independent changes in the atom's speed. In this low intensity case the forces from the two light beams are simply
added to give FOM = F+ + F_, where

~

hky

So

F±=±2

1

+

So

+

[2(~

=f

2.
IWDI)/y]

(7.1)

Then the sum of the two forces is

~ '"

8hk2~sov

II.~

FOM = y(1 + So + (2~/y)2)2 == -"'v,

(7.2)

where terms of order (kv/y)4 and higher have been neglected (see Eq. 3.26).

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:00.151Z
- **Text Length:** 195968 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
