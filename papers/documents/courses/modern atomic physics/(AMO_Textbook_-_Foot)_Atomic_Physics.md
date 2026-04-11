# PDF Document: (AMO Textbook - Foot) Atomic Physics.pdf

**File Path:** (AMO Textbook - Foot) Atomic Physics.pdf

**Processed Date:** 2026-02-10T18:17:43.510Z

**File Size:** 10778.93 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 748

**Title:** (AMO Textbook - Foot) Atomic Physics

**Collection:** Ion Trap > Fundamental

---

## Extracted Text Content

OXFORD MASTER SERIES IN PHYSICS

OXFORD MASTER SERIES IN PHYSICS
The Oxford Master Series is designed for ﬁnal year undergraduate and beginning graduate students in physics and related disciplines. It has been driven by a perceived gap in the literature today. While basic undergraduate physics texts often show little or no connection with the huge explosion of research over the last two decades, more advanced and specialized texts tend to be rather daunting for students. In this series, all topics and their consequences are treated at a simple level, while poin-
ters to recent developments are provided at various stages. The emphasis in on clear physical principles like symmetry, quantum mechanics, and electromagnetism which underlie the whole of physics. At the same time, the subjects are related to real measurements and to the experimental techniques and devices currently used by physicists in academe and industry. Books in this series are written as course books, and include ample tutorial material, examples, illustrations, revision points, and problem-
 sets. They can likewise be used as preparation for students starting a doctorate in physics and related ﬁelds, or for recent graduates starting research in one of these ﬁelds in industry.
CONDENSED MATTER PHYSICS
1. M. T. Dove: Structure and dynamics: an atomic view of materials 2. J. Singleton: Band theory and electronic properties of solids 3. A. M. Fox: Optical properties of solids 4. S. J. Blundell: Magnetism in condensed matter 5. J. F. Annett: Superconductivity 6. R. A. L. Jones: Soft condensed matter
ATOMIC, OPTICAL, AND LASER PHYSICS
7. C. J. Foot: Atomic physics 8. G. A. Brooker: Modern classical optics 9. S. M. Hooker, C. E. Webb: Laser physics
PARTICLE PHYSICS, ASTROPHYSICS, AND COSMOLOGY
10. D. H. Perkins: Particle astrophysics 11. Ta-Pei Cheng: Relativity, gravitation, and cosmology
STATISTICAL, COMPUTATIONAL, AND THEORETICAL PHYSICS
12. M. Maggiore: A modern introduction to quantum ﬁeld theory 13. W. Krauth: Statistical mechanics: algorithms and computations 14. J. P. Sethna: Entropy, order parameters, and complexity

Atomic Physics
C. J. FOOT Department of Physics University of Oxford
1

3
Great Clarendon Street, Oxford OX2 6DP Oxford University Press is a department of the University of Oxford. It furthers the University’s objective of excellence in research, scholarship, and education by publishing worldwide in Oxford New York Auckland Cape Town Dar es Salaam Hong Kong Karachi Kuala Lumpur Madrid Melbourne Mexico City Nairobi New Delhi Shanghai Taipei Toronto
With oﬃces in Argentina Austria Brazil Chile Czech Republic France Greece Guatemala Hungary Italy Japan South Korea Poland Portugal Singapore Switzerland Thailand Turkey Ukraine Vietnam
Oxford is a registered trade mark of Oxford University Press in the UK and in certain other countries
Published in the United States by Oxford University Press Inc., New York
c Oxford University Press 2005
The moral rights of the author have been asserted
Database right Oxford University Press (maker)
First published 2005
Reprinted 2005
All rights reserved. No part of this publication may be reproduced, stored in a retrieval system, or transmitted, in any form or by any means, without the prior permission in writing of Oxford University Press, or as expressly permitted by law, or under terms agreed with the appropriate reprographics rights organization. Enquiries concerning reproduction outside the scope of the above should be sent to the Rights Department, Oxford University Press, at the address above
You must not circulate this book in any other binding or cover and you must impose this same condition on any acquirer
A catalogue record for this title is available from the British Library
Library of Congress Cataloging in Publication Data (Data available)
ISBN-10: 0 19 850695 3 (Hbk) Ean code 978 0 19 850695 9 ISBN-10: 0 19 850696 1 (Pbk) Ean code 978 0 19 850696 6 10 9 8 7 6 5 4 3 2
Typeset by Julie M. Harris using LATEX Printed in Great Britain on acid-free paper by Antony Rowe, Chippenham

Preface
This book is primarily intended to accompany an undergraduate course in atomic physics. It covers the core material and a selection of more advanced topics that illustrate current research in this ﬁeld. The ﬁrst six chapters describe the basic principles of atomic structure, starting in Chapter 1 with a review of the classical ideas. Inevitably the discussion of the structure of hydrogen and helium in these early chapters has considerable overlap with introductory quantum mechanics courses, but an-
 understanding of these simple systems provides the basis for the treatment of more complex atoms in later chapters. Chapter 7 on the interaction of radiation with atoms marks the transition between the earlier chapters on structure and the second half of the book which covers laser spectroscopy, laser cooling, Bose–Einstein condensation of dilute atomic vapours, matter-wave interferometry and ion trapping. The exciting new developments in laser cooling and trapping of atoms and Bose–Einstein cond-
ensation led to Nobel prizes in 1997 and 2001, respectively. Some of the other selected topics show the incredible precision that has been achieved by measurements in atomic physics experiments. This theme is taken up in the ﬁnal chapter that looks at quantum information processing from an atomic physics perspective; the techniques developed for precision measurements on atoms and ions give exquisite control over these quantum systems and enable elegant new ideas from quantum computation to be imp-
lemented.
The book assumes a knowledge of quantum mechanics equivalent to an introductory university course, e.g. the solution of the Schro¨dinger equation in three dimensions and perturbation theory. This initial knowledge will be reinforced by many examples in this book; topics generally regarded as diﬃcult at the undergraduate level are explained in some detail, e.g. degenerate perturbation theory. The hierarchical structure of atoms is well described by perturbation theory since the diﬀerent layers of s-
tructure within atoms have considerably diﬀerent energies associated with them, and this is reﬂected in the names of the gross, ﬁne and hyperﬁne structures. In the early chapters of this book, atomic physics may appear to be simply applied quantum mechanics, i.e. we write down the Hamiltonian for a given interaction and solve the Schro¨dinger equation with suitable approximations. I hope that the study of the more advanced material in the later chapters will lead to a more mature and deeper unders-
tanding of atomic physics. Throughout this book the experimental basis of atomic physics is emphasised and it is hoped that the reader will gain some factual knowledge of atomic spectra.

vi Preface

The selection of topics from the diversity of current atomic physics is necessarily subjective. I have concentrated on low-energy and highprecision experiments which, to some extent, reﬂects local research interests that are used as examples in undergraduate lectures at Oxford. One of the selection criteria was that the material is not readily available in other textbooks, at the time of writing, e.g. atomic collisions have not been treated in detail (only a brief summary of the scattering of ultr-
acold atoms is included in Chapter 10). Other notable omissions include: X-ray spectra, which are discussed only brieﬂy in connection with the historically important work of Moseley, although they form an important frontier of current research; atoms in strong laser ﬁelds and plasmas; Rydberg atoms and atoms in doubly- and multiply-excited states (e.g. excited by new synchrotron and free-electron laser sources); and the structure and spectra of molecules.
I would like to thank Geoﬀrey Brooker for invaluable advice on physics (in particular Appendix B) and on technical details of writing a textbook for the Oxford Master Series. Keith Burnett, Jonathan Jones and Andrew Steane have helped to clarify certain points, in my mind at least, and hopefully also in the text. The series of lectures on laser cooling given by William Phillips while he was a visiting professor in Oxford was extremely helpful in the writing of the chapter on that topic. The follow-
ing people provided very useful comments on the draft manuscript: Rachel Godun, David Lucas, Mark Lee, Matthew McDonnell, Martin Shotter, Claes-Go¨ran Wahlstro¨m (Lund University) and the (anonymous) reviewers. Without the encouragement of So¨nke Adlung at OUP this project would not have been completed. Irmgard Smith drew some of the diagrams. I am very grateful for the diagrams and data supplied by colleagues, and reproduced with their permission, as acknowledged in the ﬁgure captions. Several of-
 the exercises on atomic structure derive from Oxford University examination papers and it is not possible to identify the examiners individually—some of these exam questions may themselves have been adapted from some older sources of which I am not aware.
Finally, I would like to thank Professors Derek Stacey, Joshua Silver and Patrick Sandars who taught me atomic physics as an undergraduate and graduate student in Oxford. I also owe a considerable debt to the book on elementary atomic structure by Gordon Kemble Woodgate, who was my predecessor as physics tutor at St Peter’s College, Oxford. In writing this new text, I have tried to achieve the same high standards of clarity and conciseness of expression whilst introducing new examples and techniqu-
es from the laser era.
Background reading
It is not surprising that our language should be incapable of describing the processes occurring with the atoms, for it was invented to describe the experiences of daily life, and these consist only of processes involving exceeding large numbers

vii

of atoms. Furthermore, it is very diﬃcult to modify our language so that it will be able to describe these atomic processes, for words can only describe things of which we can form mental pictures, and this ability, too, in the result of daily experience. Fortunately, mathematics is not subject to this limitation, and it has been possible to invent a mathematical scheme—the quantum theory—which seems entirely adequate for the treatment of atomic processes. From The physical principles of the quant-
um theory, Werner Heisenberg (1930).

The point of the excerpt is that quantum mechanics is essential for a proper description of atomic physics and there are many quantum mechanics textbooks that would serve as useful background reading for this book. The following short list includes those that the author found particularly relevant: Mandl (1992), Rae (1992) and Griﬃths (1995). The book Atomic spectra by Softley (1994) provides a concise introduction to this ﬁeld. The books Cohen-Tannoudji et al. (1977), Atkins (1983) and Basdevant -
and Dalibard (2000) are very useful for reference and contain many detailed examples of atomic physics. Angular-momentum theory is very important for dealing with complicated atomic structures, but it is beyond the intended level of this book. The classic book by Dirac (1981) still provides a very readable account of the addition of angular momenta in quantum mechanics. A more advanced treatment of atomic structure can be found in Condon and Odabasi (1980), Cowan (1981) and Sobelman (1996).

Oxford

C. J. F.

Web site: http://www.physics.ox.ac.uk/users/foot This site has answers to some of the exercises, corrections and other supplementary information.

This page intentionally left blank

Contents

1 Early atomic physics

1

1.1 Introduction

1

1.2 Spectrum of atomic hydrogen

1

1.3 Bohr’s theory

3

1.4 Relativistic eﬀects

5

1.5 Moseley and the atomic number

7

1.6 Radiative decay

11

1.7 Einstein A and B coeﬃcients

11

1.8 The Zeeman eﬀect

13

1.8.1 Experimental observation of the Zeeman eﬀect 17

1.9 Summary of atomic units

18

Exercises

19

2 The hydrogen atom

22

2.1 The Schro¨dinger equation

22

2.1.1 Solution of the angular equation

23

2.1.2 Solution of the radial equation

26

2.2 Transitions

29

2.2.1 Selection rules

30

2.2.2 Integration with respect to θ

32

2.2.3 Parity

32

2.3 Fine structure

34

2.3.1 Spin of the electron

35

2.3.2 The spin–orbit interaction

36

2.3.3 The ﬁne structure of hydrogen

38

2.3.4 The Lamb shift

40

2.3.5 Transitions between ﬁne-structure levels

41

Further reading

42

Exercises

42

3 Helium

45

3.1 The ground state of helium

45

3.2 Excited states of helium

46

3.2.1 Spin eigenstates

51

3.2.2 Transitions in helium

52

3.3 Evaluation of the integrals in helium

53

3.3.1 Ground state

53

3.3.2 Excited states: the direct integral

54

3.3.3 Excited states: the exchange integral

55

x Contents

Further reading

56

Exercises

58

4 The alkalis

60

4.1 Shell structure and the periodic table

60

4.2 The quantum defect

61

4.3 The central-ﬁeld approximation

64

4.4 Numerical solution of the Schro¨dinger equation

68

4.4.1 Self-consistent solutions

70

4.5 The spin–orbit interaction: a quantum mechanical

approach

71

4.6 Fine structure in the alkalis

73

4.6.1 Relative intensities of ﬁne-structure transitions 74

Further reading

75

Exercises

76

5 The LS-coupling scheme

80

5.1 Fine structure in the LS-coupling scheme

83

5.2 The jj-coupling scheme

84

5.3 Intermediate coupling: the transition between coupling

schemes

86

5.4 Selection rules in the LS-coupling scheme

90

5.5 The Zeeman eﬀect

90

5.6 Summary

93

Further reading

94

Exercises

94

6 Hyperﬁne structure and isotope shift

97

6.1 Hyperﬁne structure

97

6.1.1 Hyperﬁne structure for s-electrons

97

6.1.2 Hydrogen maser

100

6.1.3 Hyperﬁne structure for l = 0

101

6.1.4 Comparison of hyperﬁne and ﬁne structures

102

6.2 Isotope shift

105

6.2.1 Mass eﬀects

105

6.2.2 Volume shift

106

6.2.3 Nuclear information from atoms

108

6.3 Zeeman eﬀect and hyperﬁne structure

108

6.3.1 Zeeman eﬀect of a weak ﬁeld, µBB < A

109

6.3.2 Zeeman eﬀect of a strong ﬁeld, µBB > A

110

6.3.3 Intermediate ﬁeld strength

111

6.4 Measurement of hyperﬁne structure

112

6.4.1 The atomic-beam technique

114

6.4.2 Atomic clocks

118

Further reading

119

Exercises

120

7 The interaction of atoms with radiation

123

7.1 Setting up the equations

123

7.1.1 Perturbation by an oscillating electric ﬁeld

124

7.1.2 The rotating-wave approximation

125

7.2 The Einstein B coeﬃcients

126

7.3 Interaction with monochromatic radiation

127

7.3.1 The concepts of π-pulses and π/2-pulses

128

7.3.2 The Bloch vector and Bloch sphere

128

7.4 Ramsey fringes

132

7.5 Radiative damping

134

7.5.1 The damping of a classical dipole

135

7.5.2 The optical Bloch equations

137

7.6 The optical absorption cross-section

138

7.6.1 Cross-section for pure radiative broadening

141

7.6.2 The saturation intensity

142

7.6.3 Power broadening

143

7.7 The a.c. Stark eﬀect or light shift

144

7.8 Comment on semiclassical theory

145

7.9 Conclusions

146

Further reading

147

Exercises

148

8 Doppler-free laser spectroscopy

151

8.1 Doppler broadening of spectral lines

151

8.2 The crossed-beam method

153

8.3 Saturated absorption spectroscopy

155

8.3.1 Principle of saturated absorption spectroscopy 156

8.3.2 Cross-over resonances in saturation spectroscopy 159

8.4 Two-photon spectroscopy

163

8.5 Calibration in laser spectroscopy

168

8.5.1 Calibration of the relative frequency

168

8.5.2 Absolute calibration

169

8.5.3 Optical frequency combs

171

Further reading

175

Exercises

175

9 Laser cooling and trapping

178

9.1 The scattering force

179

9.2 Slowing an atomic beam

182

9.2.1 Chirp cooling

184

9.3 The optical molasses technique

185

9.3.1 The Doppler cooling limit

188

9.4 The magneto-optical trap

190

9.5 Introduction to the dipole force

194

9.6 Theory of the dipole force

197

9.6.1 Optical lattice

201

9.7 The Sisyphus cooling technique

203

9.7.1 General remarks

203

9.7.2 Detailed description of Sisyphus cooling

204

9.7.3 Limit of the Sisyphus cooling mechanism

207

Contents xi

xii Contents

9.8 Raman transitions

208

9.8.1 Velocity selection by Raman transitions

208

9.8.2 Raman cooling

210

9.9 An atomic fountain

211

9.10 Conclusions

213

Exercises

214

10 Magnetic trapping, evaporative cooling and

Bose–Einstein condensation

218

10.1 Principle of magnetic trapping

218

10.2 Magnetic trapping

220

10.2.1 Conﬁnement in the radial direction

220

10.2.2 Conﬁnement in the axial direction

221

10.3 Evaporative cooling

224

10.4 Bose–Einstein condensation

226

10.5 Bose–Einstein condensation in trapped atomic vapours 228

10.5.1 The scattering length

229

10.6 A Bose–Einstein condensate

234

10.7 Properties of Bose-condensed gases

239

10.7.1 Speed of sound

239

10.7.2 Healing length

240

10.7.3 The coherence of a Bose–Einstein condensate 240

10.7.4 The atom laser

242

10.8 Conclusions

242

Exercises

243

11 Atom interferometry

246

11.1 Young’s double-slit experiment

247

11.2 A diﬀraction grating for atoms

249

11.3 The three-grating interferometer

251

11.4 Measurement of rotation

251

11.5 The diﬀraction of atoms by light

253

11.5.1 Interferometry with Raman transitions

255

11.6 Conclusions

257

Further reading

258

Exercises

258

12 Ion traps

259

12.1 The force on ions in an electric ﬁeld

259

12.2 Earnshaw’s theorem

260

12.3 The Paul trap

261

12.3.1 Equilibrium of a ball on a rotating saddle

262

12.3.2 The eﬀective potential in an a.c. ﬁeld

262

12.3.3 The linear Paul trap

262

12.4 Buﬀer gas cooling

266

12.5 Laser cooling of trapped ions

267

12.6 Quantum jumps

269

12.7 The Penning trap and the Paul trap

271

12.7.1 The Penning trap

272

12.7.2 Mass spectroscopy of ions

274

12.7.3 The anomalous magnetic moment of the electron 274

12.8 Electron beam ion trap

275

12.9 Resolved sideband cooling

277

12.10 Summary of ion traps

279

Further reading

279

Exercises

280

13 Quantum computing

282

13.1 Qubits and their properties

283

13.1.1 Entanglement

284

13.2 A quantum logic gate

287

13.2.1 Making a CNOT gate

287

13.3 Parallelism in quantum computing

289

13.4 Summary of quantum computers

291

13.5 Decoherence and quantum error correction

291

13.6 Conclusion

293

Further reading

294

Exercises

294

A Appendix A: Perturbation theory

298

A.1 Mathematics of perturbation theory

298

A.2 Interaction of classical oscillators of similar frequencies 299

B Appendix B: The calculation of electrostatic energies 302

C Appendix C: Magnetic dipole transitions

305

D Appendix D: The line shape in saturated absorption

spectroscopy

307

E Appendix E: Raman and two-photon transitions

310

E.1 Raman transitions

310

E.2 Two-photon transitions

313

F Appendix F: The statistical mechanics of

Bose–Einstein condensation

315

F.1 The statistical mechanics of photons

315

F.2 Bose–Einstein condensation

316

F.2.1 Bose–Einstein condensation in a harmonic trap 318

References

319

Index

326

Contents xiii

This page intentionally left blank

Early atomic physics

1

1.1 Introduction

1.1 Introduction

1

1.2 Spectrum of atomic

The origins of atomic physics were entwined with the development of

hydrogen

1

quantum mechanics itself ever since the ﬁrst model of the hydrogen 1.3 Bohr’s theory

3

atom by Bohr. This introductory chapter surveys some of the early ideas, including Einstein’s treatment of the interaction of atoms with radiation, and a classical treatment of the Zeeman eﬀect. These methods, developed before the advent of the Schro¨dinger equation, remain useful as an intuitive way of thinking about atomic structure and transitions between the energy levels. The ‘proper’ description in terms of atomic wavefunctions is presented in subsequent chapters.
Before describing the theory of an atom with one electron, some experimental facts are presented. This ordering of experiment followed by explanation reﬂects the author’s opinion that atomic physics should not be presented as applied quantum mechanics, but it should be motivated by the desire to understand experiments. This represents what really happens in research where most advances come about through the interplay of theory and experiment.

1.4 Relativistic eﬀects

5

1.5 Moseley and the atomic

number

7

1.6 Radiative decay

11

1.7 Einstein A and B

coeﬃcients

11

1.8 The Zeeman eﬀect

13

1.9 Summary of atomic units 18

Exercises

19

1.2 Spectrum of atomic hydrogen
It has long been known that the spectrum of light emitted by an element is characteristic of that element, e.g. sodium in a street lamp, or burning in a ﬂame, produces a distinctive yellow light. This crude form of spectroscopy, in which the colour is seen by eye, formed the basis for a simple chemical analysis. A more sophisticated approach using a prism, or diﬀraction grating, to disperse the light inside a spectrograph shows that the characteristic spectrum for atoms is composed of discrete lin-
es that are the ‘ﬁngerprint’ of the element. As early as the 1880s, Fraunhofer used a spectrograph to measure the wavelength of lines, that had not been seen before, in light from the sun and he deduced the existence of a new element called helium. In contrast to atoms, the spectra of molecules (even the simplest diatomic ones) contain many closelyspaced lines that form characteristic molecular bands; large molecules, and solids, usually have nearly continuous spectra with few sharp features. In 1-
888, the Swedish professor J. Rydberg found that the spectral

2 Early atomic physics

lines in hydrogen obey the following mathematical formula:

1 =R
λ

1 n2

−

1 n2

,

(1.1)

1The Swiss mathematician Johann Balmer wrote down an expression which was a particular case of eqn 1.1 with n = 2, a few years before Johannes (commonly called Janne) Rydberg found the general formula that predicted other series.
2A spectrum of the Balmer series of lines is on the cover of this book.

where n and n are whole numbers; R is a constant that has become known as the Rydberg constant. The series of spectral lines for which
n = 2 and n = 3, 4, . . . is now called the Balmer series and lies in the visible region of the spectrum.1 The ﬁrst line at 656 nm is called the Balmer-α (or Hα) line and it gives rise to the distinctive red colour of a hydrogen discharge—a healthy red glow indicates that most of the
molecules of H2 have been dissociated into atoms by being bombarded by electrons in the discharge. The next line in the series is the Balmer-β
line at 486 nm in the blue and subsequent lines at shorter wavelengths tend to a limit in the violet region.2 To describe such series of lines it is
convenient to deﬁne the reciprocal of the transition wavelength as the wavenumber ν˜ that has units of m−1 (or often cm−1),

3In this book transitions are also speciﬁed in terms of their frequency (denoted by f so that f = cν˜), or in electron volts (eV) where appropriate.
4Air absorbs radiation at wavelengths shorter than about 200 nm and so spectrographs must be evacuated, as well as being made with special optics.

1 ν˜ = .
λ

(1.2)

Wavenumbers may seem rather old-fashioned but they are very useful in atomic physics since they are easily evaluated from measured wavelengths without any conversion factor. In practice, the units used for a given quantity are related to the method used to measure it, e.g. spectroscopes and spectrographs are calibrated in terms of wavelength.3 A photon with wavenumber ν˜ has energy E = hcν˜. The Balmer formula implicitly contains a more general empirical law called the Ritz combination principle t-
hat states: the wavenumbers of certain lines in the spectrum can be expressed as sums (or diﬀerences) of other lines: ν˜3 = ν˜1 ± ν˜2, e.g. the wavenumber of the Balmer-β line (n = 2 to n = 4) is the sum of that for Balmer-α (n = 2 to n = 3) and the ﬁrst line in the Paschen series (n = 3 to n = 4). Nowadays this seems obvious since we know about the underlying energy-level structure of atoms but it is still a useful principle for analyzing spectra. Examination of the sums and diﬀerences of the wav-
enumbers of transitions gives clues that enable the underlying structure to be deduced, rather like a crossword puzzle—some examples of this are given in later chapters. The observed spectral lines in hydrogen can all be expressed as diﬀerences between energy levels, as shown in Fig. 1.1, where the energies are proportional to 1/n2. Other series predicted by eqn 1.1 were more diﬃcult to observe experimentally than the Balmer series. The transitions to n = 1 give the Lyman series in the vacuum ultr-
aviolet region of the spectrum.4 The series of lines with wavelengths longer than the Balmer series lie in the infra-red region (not visible to the human eye, nor readily detected by photographic ﬁlm—the main methods available to the early spectroscopists). The following section looks at how these spectra can be explained theoretically.

1.3 Bohr’s theory 3

Fig. 1.1 The energy levels of the hydrogen atom. The transitions from higher shells n = 2, 3, 4, . . . down to the n = 1 shell give the Lyman series of spectral lines. The series of lines formed by transitions to other shells are: Balmer (n = 2), Paschen (n = 3), Brackett (n = 4) and Pfund (n = 5) (the last two are not labelled in the ﬁgure). Within each series the lines are denoted by Greek letters, e.g. Lα for n = 2 to n = 1 and Hβ for n = 4 to n = 2.

1.3 Bohr’s theory

In 1913, Bohr put forward a radical new model of the hydrogen atom using quantum mechanics. It was known from Rutherford’s experiments that inside atoms there is a very small, dense nucleus with a positive charge. In the case of hydrogen this is a single proton with a single electron bound to it by the Coulomb force. Since the force is proportional to 1/r2, as for gravity, the atom can be considered in classical terms as resembling a miniature solar system with the electron orbiting around the pro-
ton, just like a planet going around the sun. However, quantum mechanics is important in small systems and only certain electron orbits are allowed. This can be deduced from the observation that hydrogen atoms emit light only at particular wavelengths corresponding to transitions between discrete energies. Bohr was able to explain the observed spectrum by introducing the then novel idea of quantisation that goes beyond any previous classical theory. He took the orbits that occur in classical mecha-
nics and imposed quantisation rules onto them.
Bohr assumed that each electron orbits the nucleus in a circle, whose radius r is determined by the balance between centripetal acceleration and the Coulomb attraction towards the proton. For electrons of mass me and speed v this gives

mev2 r

=

e2 4π 0r2

.

(1.3)

In SI units the strength of the electrostatic interaction between two

4 Early atomic physics

5Older systems of units give more suc-
cinct equations without 4π 0; some of this neatness can be retained by keeping e2/4π 0 grouped together.

charges of magnitude e is characterised by the combination of constants e2/4π 0.5 This leads to the following relation between the angular frequency ω = v/r and the radius:

ω2

=

e2/4π 0 mer3

.

(1.4)

This is equivalent to Kepler’s laws for planetary orbits relating the square

of the period 2π/ω to the cube of the radius (as expected since all steps

have been purely classical mechanics). The total energy of an electron

in such an orbit is the sum of its kinetic and potential energies:

E

=

1 2

me

v2

−

e2/4π r

0

.

(1.5)

Using eqn 1.3 we ﬁnd that the kinetic energy has a magnitude equal

to half the potential energy (an example of the virial theorem). Taking

into account the opposite signs of kinetic and potential energy, we ﬁnd

E

=

e2/4π −

0

.

2r

(1.6)

This total energy is negative because the electron is bound to the proton

and energy must be supplied to remove it. To go further Bohr made the

following assumption.

Assumption I There are certain allowed orbits for which the electron has a ﬁxed energy. The electron loses energy only when it jumps between the allowed orbits and the atom emits this energy as light of a given wavelength.

That electrons in the allowed orbits do not radiate energy is contrary to classical electrodynamics—a charged particle in circular motion undergoes acceleration and hence radiates electromagnetic waves. Bohr’s model does not explain why the electron does not radiate but simply takes this as an assumption that turns out to agree with the experimental data. We now need to determine which out of all the possible classical orbits are the allowed ones. There are various ways of doing this and we follow-
 the standard method, used in many elementary texts, that assumes quantisation of the angular momentum in integral multiples of
(Planck’s constant over 2π):

mevr = n ,

(1.7)

where n is an integer. Combining this with eqn 1.3 gives the radii of the

allowed orbits as

r = a0n2 ,

(1.8)

where the Bohr radius a0 is given by
2
a0 = (e2/4π 0) me .

(1.9)

This is the natural unit of length in atomic physics. Equations 1.6 and

1.8 combine to give the famous Bohr formula:

E

=

− e2/4π 2a0

0

1 n2

.

(1.10)

1.4 Relativistic eﬀects 5

The positive integer n is called the principal quantum number.6 Bohr’s formula predicts that in the transitions between these energy
levels the atoms emit light with a wavenumber given by

11 ν˜ = R∞ n2 − n 2 .

(1.11)

This equation ﬁts very closely to the observed spectrum of atomic hy-

drogen described by eqn 1.1. The Rydberg constant R∞ in eqn 1.11 is

deﬁned by

hcR∞ =

e2/4π 2

0 2

2 me

.

(1.12)

The factor of hc multiplying the Rydberg constant is the conversion factor between energy and wavenumbers since the value of R∞ is given in units of m−1 (or cm−1 in commonly-used units). The measurement of the spectrum of atomic hydrogen using laser techniques has given an extremely accurate value for the Rydberg constant7 R∞ = 10 973 731.568 525 m−1. However, there is a subtle diﬀerence between the Rydberg constant calculated for an electron orbiting a ﬁxed nucleus R∞ and the constant for real hy-
drogen atoms in eqn 1.1 (we originally wrote R without a subscript but more strictly we should specify that it is the constant for hydrogen RH). The theoretical treatment above has assumed an inﬁnitely massive nucleus, hence the subscript ∞. In reality both the electron and proton move around the centre of mass of the system. For a nucleus of ﬁnite mass M the equations are modiﬁed by replacing the electron mass me by its reduced mass

m = meM . me + M

(1.13)

For hydrogen

6The alert reader may wonder why this is true since we introduced n in connection with angular momentum in eqn 1.7, and (as shown later) electrons can have zero angular momentum. This arises from the simpliﬁcation of Bohr’s theory. Exercise 1.12 discusses a more satisfactory, but longer and subtler, derivation that is closer to Bohr’s original papers. However, the important thing to remember from this introduction is not the formalism but the magnitude of the atomic energies and sizes.
7This is the 2002 CODATA recommended value. The currently accepted values of physical constants can be found on the web site of the National Institute of Science and Technology (NIST).

RH

=

R∞

Mp me + Mp

R∞

1 − me Mp

,

(1.14)

where the electron-to-proton mass ratio is me/Mp 1/1836. This reduced-mass correction is not the same for diﬀerent isotopes of an element, e.g. hydrogen and deuterium. This leads to a small but readily observable diﬀerence in the frequency of the light emitted by the atoms of diﬀerent isotopes; this is called the isotope shift (see Exercises 1.1 and 1.2).

1.4 Relativistic eﬀects
Bohr’s theory was a great breakthrough. It was such a radical change that the fundamental idea about the quantisation of the orbits was at ﬁrst diﬃcult for people to appreciate—they worried about how the electrons could know which orbits they were going into before they jumped. It was soon realised, however, that the assumption of circular orbits is

6 Early atomic physics

8This has a simple interpretation in terms of the de Broglie wavelength associated with an electron λdB = h/mev. The allowed orbits are those that have an integer multiple of de Broglie wavelengths around the circumference: 2πr = nλdB, i.e. they are standing matter waves. Curiously, this idea has some resonance with modern ideas in string theory.

too much of an over-simpliﬁcation. Sommerfeld produced a quantum mechanical theory of electrons in elliptical orbits that was consistent with special relativity. He introduced quantisation through a general rule that stated ‘the integral of the momentum associated with a coordinate around one period of the motion associated with that coordinate is an integral multiple of Planck’s constant’. This general method can be applied to any physical system where the classical motion is periodic. Applying t-
his quantisation rule to momentum around a circular orbit gives the equivalent of eqn 1.7:8

mev × 2πr = nh .

(1.15)

In addition to quantising the motion in the coordinate θ, Sommerfeld also considered quantisation of the radial degree of freedom r. He found that some of the elliptical orbits expected for a potential proportional to 1/r are also stationary states (some of the allowed orbits have a high eccentricity, more like those of comets than planets). Much eﬀort was put into complicated schemes based on classical orbits with quantisation, and by incorporating special relativity this ‘old quantum theory’ cou-
ld explain accurately the ﬁne structure of spectral lines. The exact details of this work are now mainly of historical interest but it is worthwhile to make a simple estimate of relativistic eﬀects. In special relativity a particle of rest mass m moving at speed v has an energy

E (v) = γ mc2 ,

(1.16)

9We

neglect

a

factor

of

1 2

in

the

bino-

mial expansion of the expression for γ

at low speeds, v2/c2 1.

where the gamma factor is γ = 1/ 1 − v2/c2. The kinetic energy of the moving particle is ∆E = E (v) − E(0) = (γ − 1) mec2. Thus relativistic eﬀects produce a fractional change in energy:9

∆E v2

E

c2 .

(1.17)

This leads to energy diﬀerences between the various elliptical orbits of the same gross energy because the speed varies in diﬀerent ways around the elliptical orbits, e.g. for a circular orbit and a highly elliptical orbit of the same gross energy. From eqns 1.3 and 1.7 we ﬁnd that the ratio of the speed in the orbit to the speed of light is

vα =,
cn

(1.18)

where the ﬁne-structure constant α is given by

α = e2/4π 0 . c

(1.19)

10An electron in the Bohr orbit with n = 1 has speed αc. Hence it has linear momentum meαc and angular momentum meαca0 = .

This fundamental constant plays an important role throughout atomic physics.10 Numerically its value is approximately α 1/137 (see inside
the back cover for a list of constants used in atomic physics). From
eqn 1.17 we see that relativistic eﬀects lead to energy diﬀerences of order α2 times the gross energy. (This crude estimate neglects some

1.5 Moseley and the atomic number 7

dependence on principal quantum number and Chapter 2 gives a more quantitative treatment of this ﬁne structure.) It is not necessary to go into all the reﬁnements of Sommerfeld’s relativistic theory that gave the energy levels in hydrogen very precisely, by imposing quantisation rules on classical orbits, since ultimately a paradigm shift was necessary. Those ideas were superseded by the use of wavefunctions in the Schro¨dinger equation. The idea of elliptical orbits provides a connection with our-
 intuition based on classical mechanics and we often retain some traces of this simple picture of electron orbits in our minds. However, for atoms with more than one electron, e.g. helium, classical models do not work and we must think in terms of wavefunctions.

1.5 Moseley and the atomic number

At the same time as Bohr was working on his model of the hydrogen

atom, H. G. J. Moseley measured the X-ray spectra of many elements.

Moseley established that the square root of the frequency of the emitted

lines is proportional to the atomic number Z (that he deﬁned as the

position of the atom in the periodic table, starting counting at Z = 1

for hydrogen), i.e.

f ∝Z.

(1.20)

Moseley’s original plot is shown in Fig. 1.2. As we shall see, this equation is a considerable simpliﬁcation of the actual situation but it was remarkably powerful at the time. By ordering the elements using Z rather than relative atomic mass, as was done previously, several inconsistencies in the periodic table were resolved. There were still gaps that were later ﬁlled by the discovery of new elements. In particular, for the rare-earth elements that have similar chemical properties and are theref-
ore diﬃcult to distinguish, it was said ‘in an afternoon, Moseley could solve the problem that had baﬄed chemists for many decades and establish the true number of possible rare earths’ (Segr`e 1980). Moseley’s observations can be explained by a relatively simple model for atoms that extends Bohr’s model for hydrogen.11
A natural way to extend Bohr’s atomic model to heavier atoms is to suppose that the electrons ﬁll up the allowed orbits starting from the bottom. Each energy level only has room for a certain number of electrons so they cannot all go into the lowest level and they arrange themselves in shells, labelled by the principal quantum number, around the nucleus. This shell structure arises because of the Pauli exclusion principle and the electron spin, but for now let us simply consider it as an empirical-
 fact that the maximum number of electrons in the n = 1 shell is 2, the n = 2 shell has 8 and the n = 3 shell has 18, etc. For historical reasons, X-ray spectroscopists do not use the principal quantum number but label the shells by letters: K for n = 1, L for n = 2, M for n = 3 and so on alphabetically.12 This concept of electronic shells explains the emission of X-rays from atoms in the following way. Moseley produced X-rays by bombarding samples of the given element with electrons that

11Tragically, Henry Gwyn Jeﬀreys Moseley was killed when he was only 28 while ﬁghting in the First World War (see the biography by Heilbron (1974)).
12The chemical properties of the elements depend on this electronic structure, e.g. the inert gases have full shells of electrons and these stable conﬁgurations are not willing to form chemical bonds. The explanation of the atomic structure underlying the periodic table is discussed further in Section 4.1. See also Atkins (1994) and Grant and Phillips (2001).

8 Early atomic physics

8 65 4 3

79.Au. 78.Pt. 77.Ir. 76.Os. 75. 74.W. 73.Ta. 72. 71.Lu. 70.Ny. 69.Tm. 68.Er. 67.Ho. 66.Ds. 65.Tb. 64.Gd. 63.Eu. 62.Sa. 61. 60.Nd. 59.Pr. 58.Ce. 57.La. 56.Ba. 55.Cs. 54.Xe. 53.I. 52.Te. 51.Sb. 50.Sn. 49.In. 48.Cd. 47.Ag. 46.Pd. 45.Rh. 44.Ru. 43. 42.Mo. 41.Nb. 40.Zr. 39.Y. 38.Sr. 37.Rb. 36.Kr. 35.Br. 34.Se. 33.As. 32.Ge. 31.Ga. 3. 0.Zn 29.Cu. 28.Ni. 27.Co. 26.Fe. 25.Mn. 24.Cr. 23.V. 22.Ti. 21.Sc. 20.Ca. 19.K. 18.A. 17.Cl. 16.S. 15.P. 14.Si. 13.Al.
6

8

10

2 1.5

1 0.9 0.8 0.7 0.6

12

14

16

18

20

22

24

13The handwriting in the bottom right corner states that this diagram is the original for Moseley’s famous paper in Phil. Mag., 27, 703 (1914).

Fig. 1.2 Moseley’s plot of the square root of the frequency of X-ray lines of elements

against their atomic number. Moseley’s work established the atomic number Z as

a more fundamental quantity than the ‘atomic weight’ (now called relative atomic

m(1a0s8s√). HzF)olaltowthinegbomttoodmernancdon(1v0e−nt1i0onm)thfoer

units of the the log scale

horizontal at the top.

scales would be (Archives of the

Clarendon Laboratory, Oxford; also shown on the Oxford physics web site.)13

1.5 Moseley and the atomic number 9

had been accelerated to a high voltage in a vacuum tube. These fast electrons knock an electron out of an atom in the sample leaving a vacancy or hole in one of its shells. This allows an electron from a higher-lying shell to ‘fall down’ to ﬁll this hole emitting radiation of a wavelength corresponding to the diﬀerence in energy between the shells.
To explain Moseley’s observations quantitatively we need to modify the equations in Section 1.3, on Bohr’s theory, to account for the eﬀect of a nucleus of charge greater than the +1e of the proton. For a nuclear charge Ze we replace e2/4π 0 by Ze2/4π 0 in all the equations, resulting in a formula for the energies like that of Balmer but multiplied by a factor of Z2. This dependence on the square of the atomic number means that, for all but the lightest elements, transitions between low-lying shel-
ls lead to emission of radiation in the X-ray region of the spectrum. Scaling the Bohr theory result is accurate for hydrogenic ions, i.e. systems with one electron around a nucleus of charge Ze. In neutral atoms the other electrons (that do not jump) are not simply passive spectators but partly screen the nuclear charge; for a given X-ray line, say the K- to L-shell transition, a more accurate formula is

1 λ = R∞

(Z

− σK)2 12

−

(Z

− σL)2 22

.

(1.21)

The screening factors σK and σL are not entirely independent of Z and the values of these screening factors for each shell vary slightly (see the exercises at the end of this chapter). For large atomic numbers this formula tends to eqn 1.20 (see Exercise 1.4). This simple approach does not explain why the screening factor for a shell can exceed the number of electrons inside that shell, e.g. σK = 2 for Z = 74 although only one electron remains in this shell when a hole is formed. This does not mak-
e sense in a classical model with electrons orbiting around a nucleus, but can be explained by atomic wavefunctions—an electron with a high principal quantum number (and little angular momentum) has a ﬁnite probability of being found at small radial distances.
The study of X-rays has developed into a whole ﬁeld of its own within atomic physics, astrophysics and condensed matter, but there is only room to mention a few brief facts here. When an electron is removed from the K-shell the atom has an amount of energy equal to its binding energy, i.e. a positive amount of energy, and it is therefore usual to draw the diagram with the K-shell at the top, as in Fig. 1.3. These are the energy levels of the hole in the electron shells. This diagram shows why the -
creation of a hole in a low-lying shell leads to a succession of transitions as the hole works its way outwards through the shells. The hole (or equivalently the falling electron) can jump more than one shell at a time; each line in a series from a given shell is labelled using Greek letters (as in the series in hydrogen), e.g. Kα, Kβ, . . .. The levels drawn in Fig. 1.3 have some sub-structure and this leads to transitions with slightly diﬀerent wavelengths, as shown in Moseley’s plot. This is ﬁn-
e structure caused by relativistic eﬀects that we considered for Sommerfeld’s theory; the substitution e2/4π 0 → Ze2/4π 0, as above, (or

10 Early atomic physics
Fig. 1.3 The energy levels of the inner shells of the tungsten atom (Z = 74) and the transitions between them that give rise to X-rays. The level scheme has several important diﬀerences from that for the hydrogen atom (Fig. 1.1). Firstly, the energies are tens of keV, as compared to eV for Z = 1, because they scale as Z2 (approximately). Secondly, the energy levels are plotted with n = 1 at the top because when an electron is removed from the K-shell the system has more energy than the neutral ato-
m; energies are shown for an atom with a vacancy (missing electron) in the K-, L-, M- and N-shells. The atom emits X-ray radiation when an electron drops down from a higher shell to ﬁll a vacancy in a lower shell— this process is equivalent to the vacancy, or hole, working its way outwards. This way of plotting the energies of the system shows clearly that the removal of an electron from the Kshell leads to a cascade of X-ray transitions, e.g. a transition between the n = 1 and 2 shells gives a li-
ne in the K-series which is followed by a line in another series (L-, M-, etc.). When the vacancy reaches the outermost shells of electrons that are only partially ﬁlled with valence electrons with binding energies of a few eV (the O- and P-shells in the case of tungsten), the transition energies become negligible compared to those between the inner shells. This level scheme is typical for electrons in a moderately heavy atom, i.e. one with ﬁlled K-, L-, M- and N-shells. (The lines of the L-series-
 shown dotted are allowed X-ray transitions, but they do not occur following Kα emission.)
equivalently α → Zα) shows that ﬁne structure is of order (Zα)2 times the gross structure, which itself is proportional to Z2. Thus relativistic eﬀects grow as Z4 and become very signiﬁcant for the inner electrons of heavy atoms, leading to the ﬁne structure of the L- and M-shells seen in Fig. 1.3. This relativistic splitting of the shells explains why in Moseley’s plot (Fig. 1.2) there are two closely-spaced curves for the Kα-line, and several curves for the L-series.
Nowadays much of the X-ray work in atomic physics is carried out using sources such as synchrotrons; these devices accelerate electrons by the techniques used in particle accelerators. A beam of high-energy electrons circulates in a ring and the circular motion causes the electrons to

1.7 Einstein A and B coeﬃcients 11

radiate X-rays. Such a source can be used to obtain an X-ray absorption spectrum.14 There are many other applications of X-ray emission, e.g. as a diagnostic tool for the processes that occur in plasmas in fusion research and in astrophysical objects. Many interesting processes occur at ‘high energies’ in atomic physics but the emphasis in this book is mainly on lower energies.

14Absorption is easier to interpret than emission since only one of the terms in eqn 1.21 is important, e.g. EK = hcR∞(Z − σK)2.

1.6 Radiative decay

An electric dipole moment −ex0 oscillating at angular frequency ω ra-

diates a power15

P

=

e2x20ω4 12π 0c3

.

(1.22)

An electron in harmonic motion has a total energy16 of E = meω2x20/2, where x0 is the amplitude of the motion. This energy decreases at a rate
equal to the power radiated:

dE

e2ω2

E

dt

=− 6π

0mec3 E = − τ

,

(1.23)

where the classical radiative lifetime τ is given by

1

e2ω2

τ = 6π 0mec3 .

(1.24)

For the transition in sodium at a wavelength of 589 nm (yellow light) this equation predicts a value of τ = 16 ns 10−8 s. This is very close to the experimentally measured value and typical of allowed transitions that emit visible light. Atomic lifetimes, however, vary over a very wide range,17 e.g. for the Lyman-α transition (shown in Fig. 1.1) the upper level has a lifetime of only a few nanoseconds.18,19
The classical value of the lifetime gives the fastest time in which the atom could decay on a given transition and this is often close to the observed lifetime for strong transitions. Atoms do not decay faster than a classical dipole radiating at the same wavelength, but they may decay more slowly (by many orders of magnitude in the case of forbidden transitions).20

1.7 Einstein A and B coeﬃcients
The development of the ideas of atomic structure was linked to experiments on the emission, and absorption, of radiation from atoms, e.g. X-rays or light. The emission of radiation was considered as something that just has to happen in order to carry away the energy when an electron jumps from one allowed orbit to another, but the mechanism was not explained.21 In one of his many strokes of genius Einstein devised a way of treating the phenomenon of spontaneous emission quantitatively,

15This total power equals the integral of the Poynting vector over a closed surface in the far-ﬁeld of radiation from the dipole. This is calculated from the oscillating electric and magnetic ﬁelds in this region (see electromagnetism texts or Corney (2000)).
16The sum of the kinetic and potential energies.
17The classical lifetime scales as 1/ω2. However, we will ﬁnd that the quantum mechanical result is diﬀerent (see Exercise 1.8).
18Higher-lying levels, e.g. n = 30, live for many microseconds (Gallagher 1994).
19Atoms can be excited up to conﬁgurations with high principal quantum numbers in laser experiments; such systems are called Rydberg atoms and have small intervals between their energy levels. As expected from the correspondence principle, these Rydberg atoms can be used in experiments that probe the interface between classical and quantum mechanics.
20The ion-trapping techniques described in Chapter 12 can probe transitions with spontaneous decay rates less than 1 s−1, using single ions conﬁned by electric and magnetic ﬁelds— something that was only a ‘thought experiment’ for Bohr and the other founders of quantum theory. In particular, the eﬀect of individual quantum jumps between atomic energy levels is observed. Radiative decay resembles radioactive decay in that individual atoms spontaneously emit a photon at a given time but taking the a-
verage over an ensemble of atoms gives exponential decay.
21A complete explanation of spontaneous emission requires quantum electrodynamics.

12 Early atomic physics

22This treatment of the interaction of atoms with radiation forms the foundation for the theory of the laser, and is used whenever radiation interacts with matter (see Fox 2001). A historical account of Einstein’s work and its profound implications can be found in Pais (1982).
23The frequency dependence of the interaction is considered in Chapter 7.
24The word laser is an acronym for light ampliﬁcation by stimulated emission of radiation.
25This lifetime was estimated by a classical argument in the previous section.

based on an intuitive understanding of the process.22 Einstein considered atoms with two levels of energies, E1 and E2, as
shown in Fig. 1.4; each level may have more than one state and the number of states with the same energy is the degeneracy of that level represented by g1 and g2. Einstein considered what happens to an atom interacting with radiation of energy density ρ(ω) per unit frequency interval. The radiation causes transitions from the lower to the upper level at a rate proportional to ρ(ω12), where the constant of proportionality is B12. The atom interacts strongly only with that part of the distribution ρ-
(ω) with a frequency close to ω12 = (E2 − E1) / , the atom’s resonant frequency.23 By symmetry it is also expected that the radiation will cause transitions from the upper to lower levels at a rate dependent on the energy density but with a constant of proportionality B21 (the subscripts are in a diﬀerent order for emission as compared to absorption). This is a process of stimulated emission in which the radiation at angular frequency ω causes the atom to emit radiation of the same frequency. This-
 increase in the amount of light at the incident frequency is fundamental to the operation of lasers.24 The symmetry between up and down is broken by the process of spontaneous emission in which an atom falls down to the lower level, even when no external radiation is present. Einstein introduced the coeﬃcient A21 to represent the rate of this process. Thus the rate equations for the populations of the levels, N1 and N2, are

dN2 dt

=

N1B12ρ(ω12)

− N2B21ρ(ω12) −

N2A21

(1.25)

and

dN1 = − dN2 .

(1.26)

dt

dt

The ﬁrst equation gives the rate of change of N2 in terms of the absorp-

tion, stimulated emission and spontaneous emission, respectively. The

second equation is a consequence of having only two levels so that atoms

leaving level 2 must go into level 1; this is equivalent to a condition that

N1 + N2 = constant. When ρ(ω) = 0, and some atoms are initially in

the upper level (N2(0) = 0), the equations have a decaying exponential solution:

N2(t) = N2(0) exp (−A21t) ,

(1.27)

where the mean lifetime25 is

1 τ = A21 .

(1.28)

Fig. 1.4 The interaction of a two-level atom with radiation leads to stimulated transitions, in addition to the spontaneous decay of the upper level.

1.8 The Zeeman eﬀect 13

Einstein devised a clever argument to ﬁnd the relationship between the A21- and B-coeﬃcients and this allows a complete treatment of atoms interacting with radiation. Einstein imagined what would happen to such an atom in a region of black-body radiation, e.g. inside a box whose surface acts as a black body. The energy density of the radiation ρ(ω) dω between angular frequency ω and ω + dω depends only on the temperature T of the emitting (and absorbing) surfaces of the box; this function is given-
 by the Planck distribution law:26

ω3

1

ρ(ω) =

π2c3 exp(

. ω/kBT ) − 1

(1.29)

26Planck was the ﬁrst to consider radiation quantised into photons of energy
ω. See Pais (1986).

Now we consider the level populations of an atom in this black-body radiation. At equilibrium the rates of change of N1 and N2 (in eqn 1.26) are both zero and from eqn 1.25 we ﬁnd that

ρ(ω12)

=

A21 B21

1 (N1/N2)(B12/B21)

−

1

.

(1.30)

At thermal equilibrium the population in each of the states within the levels are given by the Boltzmann factor (the population in each state equals that of the energy level divided by its degeneracy):

N2 = N1 exp − ω .

g2 g1

kBT

(1.31)

Combining the last three equations (1.29, 1.30 and 1.31) we ﬁnd27

ω3 A21 = π2c3 B21

(1.32)

and

B12

=

g2 g1

B21 .

(1.33)

The Einstein coeﬃcients are properties of the atom.28 Therefore these

relationships between them hold for any type of radiation, from narrow-

bandwidth radiation from a laser to broadband light. Importantly,

eqn 1.32 shows that strong absorption is associated with strong emission.

Like many of the topics covered in this chapter, Einstein’s treatment cap-

tured the essential features of the physics long before all the details of

the quantum mechanics were fully understood.29

27These equations hold for all T , so we can equate the parts that contain exp( ω/kBT ) and the temperatureindependent factors separately to obtain the two equations.
28This is shown explicitly in Chapter 7 by a time-dependent perturbation theory calculation of B12.
29To excite a signiﬁcant fraction of the population into the upper level of a visible transition would require black-body radiation with a temperature comparable to that of the sun, and this method is not generally used in practice—such transitions are easily excited in an electrical discharge where the electrons impart energy to the outermost electrons in an atom. (The voltage required to excite weakly-bound outer electrons is much less than for X-ray production.)

1.8 The Zeeman eﬀect

This introductory survey of early atomic physics must include Zeeman’s important work on the eﬀect of a magnetic ﬁeld on atoms. The observation of what we now call the Zeeman eﬀect and three other crucial experiments were carried out just at the end of the nineteenth century, and together these discoveries mark the watershed between classical and quantum physics.30 Before describing Zeeman’s work in detail, I shall

30Pais (1986) and Segr`e (1980) give historical accounts.

14 Early atomic physics

31This led to the measurement of the atomic X-ray spectra by Moseley described in Section 1.5.
32The ﬁeld of nuclear physics was later developed by Rutherford, and others, to show that atoms have a very small dense nucleus that contains almost all the atomic mass. For much of atomic physics it is suﬃcient to think of the nucleus as a positive charge +Ze at the centre of the atoms. However, some understanding of the size, shape and magnetic moments of nuclei is necessary to explain the hyperﬁne structure and isotope shift (see Chapter 6).

brieﬂy mention the other three great breakthroughs and their signiﬁ-

cance for atomic physics. Ro¨ntgen discovered mysterious X-rays emit-

ted from discharges, and sparks, that could pass through matter and

blacken photographic ﬁlm.31 At about the same time, Bequerel’s dis-

covery of radioactivity opened up the whole ﬁeld of nuclear physics.32

Another great breakthrough was J. J. Thomson’s demonstration that

cathode rays in electrical discharge tubes are charged particles whose

charge-to-mass ratio does not depend on the gas in the discharge tube.

At almost the same time, the observation of the Zeeman eﬀect of a mag-

netic ﬁeld showed that there are particles with the same charge-to-mass

ratio in atoms (that we now call electrons). The idea that atoms con-

tain electrons is very obvious now but at that time it was a crucial piece

in the jigsaw of atomic structure that Bohr put together in his model.

In addition to its historical signiﬁcance, the Zeeman eﬀect provides a

very useful tool for examining the structure of atoms, as we shall see

at several places in this book. Somewhat surprisingly, it is possible to

explain this eﬀect by a classical-mechanics line of reasoning (in certain

special cases). An atom in a magnetic ﬁeld can be modelled as a simple

harmonic oscillator. The restoring force on the electron is the same for

displacements in all directions and the oscillator has the same resonant

frequency ω0 for motion along the x-, y- and z-directions (when there is

no magnetic ﬁeld). In a magnetic electron with charge −e, position

rﬁealnddBvetlhoecietqyuvat=ionr.

of is

motion

for

an

dv me dt

=

−meω02 r − ev

×B.

(1.34)

33This is the same force that Thomson used to deﬂect free electrons in a curved trajectory to measure e/me. Nowadays such cathode ray tubes are commonly used in classroom demonstrations.

In addition to the restoring force (assumed to exist without further ex-

planation), there is the Lorentz force that occurs for a charged particle

moving through a magnetic ﬁeld.33 Taking the direction of the ﬁeld to

be the z-axis, B = Bez leads to

.r.

+

.
2ΩLr

×

ez

+

ω02r

=

0

.

(1.35)

This contains the Larmor frequency

eB ΩL = 2me .

(1.36)

We use a matrix method to solve the equation and look for a solution

in the form of a vector oscillating at ω:

 



x



r

=

Re

 

y z

 exp (−iωt) .

(1.37)

Written in matrix form, eqn 1.35 reads

 ω02
 2iωΩL 0

−2iωΩL ω02 0

 

0

x

 x

0   y  = ω2  y  .

ω02

z

z

(1.38)

1.8 The Zeeman eﬀect 15

The eigenvalues ω2 are found from the following determinant:

ω02 − ω2 2iωΩL
0

−2iωΩL ω02 − ω2
0

0
0 ω02 − ω2

= 0.

(1.39)

This gives ω4 − 2ω02 + 4Ω2L ω2 + ω04 (ω2 − ω02) = 0. The solution ω = ω0 is obvious by inspection. The other two eigenvalues can be found exactly by solving the quadratic equation for ω2 inside the curly brackets.

For an optical transition we always have ΩL ω0 so the approximate eigenfrequencies are ω ω0 ± ΩL. Substituting these values back into eqn 1.38 gives the eigenvectors corresponding to ω = ω0 − ΩL, ω0 and

ω0 + ΩL, respectively, as







cos (ω0 − ΩL) t

0

r =  − sin (ω0 − ΩL) t  ,  0 

0

cos ω0t





cos (ω0 + ΩL) t

and  sin (ω0 + ΩL) t 

0

The magnetic ﬁeld does not aﬀect motion along the z-axis and the angular frequency of the oscillation remains ω0. Interaction with the magnetic ﬁeld causes the motions in the x- and y-directions to be coupled together (by the oﬀ-diagonal elements ±2iωΩL of the matrix in eqn 1.38).34 The result is two circular motions in opposite directions in the xy-plane, as illustrated in Fig. 1.5. These circular motions have frequencies shifted up, or down, from ω0 by the Larmor frequency. Thus the action of th-
e external ﬁeld splits the original oscillation at a single frequency (actually three independent oscillations all with the same frequency, ω0) into three separate frequencies. An oscillating electron acts as a classical dipole that radiates electromagnetic waves and Zeeman observed the frequency splitting ΩL in the light emitted by the atom.
This classical model of the Zeeman eﬀect explains the polarization of the light, as well as the splitting of the lines into three components. The calculation of the polarization of the radiation at each of the three diﬀerent frequencies for a general direction of observation is straightforward using vectors;35 however, only the particular cases where the radiation propagates parallel and perpendicular to the magnetic ﬁeld are considered here, i.e. the longitudinal and transverse directions of obse-
rvation, respectively. An electron oscillating parallel to B radiates an electromagnetic wave with linear polarization and angular frequency ω0. This π-component of the line is observed in all directions except along the magnetic ﬁeld;36 in the special case of transverse observation (i.e. in the xy-plane) the polarization of the π-component lies along ez. The circular motion of the oscillating electron in the xy-plane at angular frequencies ω0 + ΩL and ω0 − ΩL produces radiation at these frequenci-
es. Looking transversely, this circular motion is seen edge-on so that it looks like linear sinusoidal motion, e.g. for observation along

Fig. 1.5 A simple model of an atom as an electron that undergoes simple harmonic motion explains the features of the normal Zeeman eﬀect of a magnetic ﬁeld (along the z-axis). The three eigenvectors of the motion are: ez cos ω0t and cos ({ω0 ± ΩL} t) ex ± sin ({ω0 ± ΩL} t) ey.
34The matrix does not have oﬀdiagonal elements in the last column or bottom row, so the x- and ycomponents are not coupled to the zcomponent, and the problem eﬀectively reduces to solving a 2 × 2 matrix. 35Some further details are given in Section 2.2 and in Woodgate (1980).
36An oscillating electric dipole proportional to ez cos ω0t does not radiate along the z-axis—observation along this direction gives a view along the axis of the dipole so that eﬀectively the motion of the electron cannot be seen.

16 Early atomic physics

Fig. 1.6 For the normal Zeeman eﬀect a simple model of an atom (as in Fig. 1.5) explains the frequency of the light emitted and its polarization (indicated by the arrows for the cases of transverse and longitudinal observation).

37This is left-circularly-polarized light (Corney 2000).

the x-axis only the y-component is seen, and the radiation is linearly polarized perpendicular to the magnetic ﬁeld—see Fig. 1.6. These are called the σ-components and, in contrast to the π-component, they are also seen in longitudinal observation—looking along the z-axis one sees the electron’s circular motion and hence light that has circular polarization. Looking in the opposite direction to the magnetic ﬁeld (from the positive z-direction, or θ = 0 in polar coordinates) the circular motion in -
the anticlockwise direction is associated with the frequency ω0 +ΩL.37 In addition to showing that atoms contain electrons by measuring the magnitude of the charge-to-mass ratio e/me, Zeeman also deduced the sign of the charge by considering the polarization of the emitted light. If the sign of the charge was not negative, as we assumed from the start, light at ω0 + ΩL would have the opposite handedness—from this Zeeman could deduce the sign of the electron’s charge.
For situations that only involve orbital angular momentum (and no spin) the predictions of this classical model correspond exactly to those of quantum mechanics (including the correct polarizations), and the intuition gained from this model gives useful guidance in more complicated cases. Another reason for studying the classical treatment of the Zeeman eﬀect is that it furnishes an example of degenerate perturbation theory in classical mechanics. We shall encounter degenerate perturbation theory -
in quantum mechanics in several places in this book and an understanding of the analogous procedure in classical mechanics is very helpful.

1.8.1 Experimental observation of the Zeeman eﬀect
Figure 1.7(a) shows an apparatus suitable for the experimental observation of the Zeeman eﬀect and Fig. 1.7(b–e) shows some typical experimental traces. A low-pressure discharge lamp that contains the atom to be studied (e.g. helium or cadmium) is placed between the pole pieces of an electromagnet capable of producing ﬁelds of up to about 1 T. In the arrangement shown, a lens collects light emitted perpendicular to the ﬁeld (transverse observation) and sends it through a Fabry–Perot ´etalon. The o-
peration of such ´etalons is described in detail by Brooker (2003), and only a brief outline of the principle of operation is given here.
(a)

1.8 The Zeeman eﬀect 17

(b) 1.0
0.5
0.0 (d)
1.0
0.5
0.0

(c) 1.0
0.5
0.0 (e)
1.0
0.5
0.0

Fig. 1.7 (a) An apparatus suitable for the observation of the Zeeman effect. The light emitted from a discharge lamp, between the pole pieces of the electromagnet, passes through a narrow-band ﬁlter and a Fabry– Perot ´etalon. Key: L1, L2 are lenses; F – ﬁlter; P – polarizer to discriminate between π- and σ-polarizations (optional); Fabry–Perot ´etalon made of a rigid spacer between two highlyreﬂecting mirrors (M1 and M2); D – detector. Other details can be found in Brooker (2003). A suitable proc-
edure is to (partially) evacuate the ´etalon chamber and then allow air (or a gas with a higher refractive index such as carbon dioxide) to leak in through a constantﬂow-rate valve to give a smooth linear scan. Plots (b) to (e) show the intensity I of light transmitted through the Fabry–Perot ´etalon. (b) A scan over two free-spectral ranges with no magnetic ﬁeld. Both (c) and (d) show a Zeeman pattern observed perpendicular to the applied ﬁeld; the spacing between the π- and σ-components in these-
 scans is one-quarter and one-third of the freespectral range, respectively—the magnetic ﬁeld in scan (c) is weaker than in (d). (e) In longitudinal observation only the σ-components are observed— this scan is for the same ﬁeld as in (c) and the σ-components have the same position in both traces.

18 Early atomic physics

• Light from the lamp is collected by a lens and directed on to an interference ﬁlter that transmits only a narrow band of wavelengths corresponding to a single spectral line.
• The ´etalon produces an interference pattern that has the form of concentric rings. These rings are observed on a screen in the focal plane of the lens placed after the ´etalon. A small hole in the screen is positioned at the centre of the pattern so that light in the region of the central fringe falls on a detector, e.g. a photodiode. (Alternatively, the lens and screen can be replaced by a camera that records the ring pattern on ﬁlm.)
• The eﬀective optical path length between the two ﬂat highly-reﬂecting mirrors is altered by changing the pressure of the air in the chamber; this scans the ´etalon over several free-spectral ranges while the intensity of the interference fringes is recorded to give traces as in Fig. 1.7(b–e).

1.9 Summary of atomic units

38It equals the potential energy of the electron in the ﬁrst Bohr orbit.
39This Larmor frequency equals the splitting between the π- and σcomponents in the normal Zeeman effect.

This chapter has used classical mechanics and elementary quantum ideas
to introduce the important scales in atomic physics: the unit of length a0 and a unit of energy hcR∞. The natural unit of energy is e2/4π 0a0 and this unit is called a hartree.38 This book, however, expresses energy
in terms of the energy equivalent to the Rydberg constant, 13.6 eV; this
equals the binding energy in the ﬁrst Bohr orbit of hydrogen, or 1/2 a
hartree. These quantities have the following values:

2
a0 = (e2/4π 0) me = 5.29 × 10−11 m ,

hcR∞ =

me

e2/4π 22

0

2

= 13.6 eV .

(1.40) (1.41)

The use of these atomic units makes the calculation of other quantities

simple, e.g. the electric ﬁeld in a hydrogen atom at radius r = a0 equals e/(4π 0a20). This corresponds to a potential diﬀerence of 27.2 V over a distance of a0, or a ﬁeld of 5 × 1011 V m−1.

Relativistic eﬀects depend on the dimensionless ﬁne-structure con-

stant α:

α = e2/4π 0 c

1 .
137

(1.42)

The Zeeman eﬀect of a magnetic ﬁeld on atoms leads to a frequency shift

of ΩL in eqn 1.36.39 In practical units the size of this frequency shift is

ΩL = e = 14 GHz T−1 . 2πB 4πme

(1.43)

Equating the magnetic energy ΩL with µBB, the magnitude of the energy for a magnetic moment µB in a magnetic ﬂux density B, shows that the unit of atomic magnetic moment is the Bohr magneton

µB

=

e 2me

=

9.27

× 10−24 J T−1 .

(1.44)

Exercises for Chapter 1 19

This magnetic moment depends on the properties of the unpaired electron (or electrons) in the atom, and has a similar magnitude for all atoms. In contrast, other atomic properties scale rapidly with the nuclear charge; hydrogenic systems have energies proportional to Z2, and the same reasoning shows that their size is proportional to 1/Z (see eqns 1.40 and 1.41). For example, hydrogenic uranium U+91 has been produced in accelerators by stripping 91 electrons oﬀ a uranium atom to leave a single ele-
ctron that has a binding energy of 922 × 13.6 eV = 115 keV (for n = 1) and an orbit of radius a0/92 = 5.75 × 10−13 m ≡ 575 fm. The transitions between the lowest energy levels of this system have short wavelengths in the X-ray region.40
The reader might think that it would be a good idea to use the same units across the whole of atomic physics. In practice, however, the units reﬂect the actual experimental techniques used in a particular region of the spectrum, e.g. radio-frequency, or microwave synthesisers, are calibrated in Hz (kHz, MHz and GHz); the equation for the angle of diﬀraction from a grating is expressed in terms of a wavelength; and for X-rays produced by tubes in which electrons are accelerated by high voltages it -
is natural to use keV.41 A table of useful conversion factors is given inside the back cover.
The survey of classical ideas in this chapter gives a historical perspective on the origins of atomic physics but it is not necessary, or indeed in some cases downright confusing, to go through a detailed classical treatment—the physics at the scale of atomic systems can only properly be described by wave mechanics and this is the approach used in the following chapters.42

40Energies can be expressed in terms

of the rest mass energy of the electron

mec2 = 0.511 MeV. The gross energy

is is

(Z

α)2

1 2

of order

mec2 and the

(Z

α)4

1 2

me

c2

.

ﬁne

structure

41Laser techniques can measure transition frequencies of around 1015 Hz directly as a frequency to determine a precise value of the Rydberg constant, and there are no deﬁnite rules for whether a transition should be speciﬁed by its energy, wavelength or frequency.
42X-ray spectra are not discussed again in this book and further details can be found in Kuhn (1969) and other atomic physics texts.

Exercises
(1.1) Isotope shift The deuteron has approximately twice the mass of the proton. Calculate the diﬀerence in the wavelength of the Balmer-α line in hydrogen and deuterium.
(1.2) The energy levels of one-electron atoms The table gives the wavelength43 of lines observed in the spectrum of atomic hydrogen and singlyionized helium. Explain as fully as possible the similarities and diﬀerences between the two spectra.

H (nm)
656.28 486.13 434.05 410.17

He+ (nm)
656.01 541.16 485.93 454.16 433.87 419.99 410.00

43These are the wavelengths in air with a refractive index of 1.0003 in the visible region.

20 Early atomic physics

(1.3) Relativistic eﬀects Evaluate the magnitude of relativistic eﬀects in the n = 2 level of hydrogen. What is the resolving power λ/(∆λ)min of an instrument that could observe these eﬀects in the Balmer-α line?
(1.4) X-rays Show that eqn 1.21 approximates to eqn 1.20 when the atomic number Z is much greater than the screening factors.
(1.5) X-rays It is suspected that manganese (Z = 25) is very poorly mixed with iron (Z = 26) in a block of alloy. Predict the energies of the K-absorption edges of these elements and determine an X-ray photon energy that would give good contrast (between regions of diﬀerent concentrations) in an X-ray of the block.
(1.6) X-ray experiments Sketch an apparatus suitable for X-ray spectroscopy of elements, e.g. Moseley’s experiment. Describe the principle of its operation and the method of measuring the energy, or wavelength, of X-rays.
(1.7) Fine structure in X-ray transitions Estimate the magnitude of the relativistic eﬀects in the L-shell of lead (Z = 82) in keV. Also express you answer as a fraction of the Kα transition.
(1.8) Radiative lifetime For an electron in a circular orbit of radius r the electric dipole moment has a magnitude of D = −er and radiates energy at a rate given by eqn 1.22. Find the time taken to lose an energy of ω. Use your expression to estimate the transition rate for the n = 3 to n = 2 transition in hydrogen that emits light of wavelength 656 nm. Comment. This method gives 1/τ ∝ (er)2 ω3, which corresponds closely to the quantum mechanical result in eqn 7.23.
(1.9) Black-body radiation Two-level atoms with a transition at wavelength λ = 600 nm, between the levels with degeneracies g1 = 1 and g2 = 3, are immersed in black-body radiation. The fraction in the excited state is 0.1. What is the temperature of the black body and the energy density per unit frequency interval ρ (ω12) of the radiation at the transition frequency?
(1.10) Zeeman eﬀect What is the magnitude of the Zeeman shift for an atom in (a) the Earth’s magnetic ﬁeld, and (b) a

magnetic ﬂux density of 1 T? Express your answers in both MHz, and as a fraction of the transition frequency ∆f /f for a spectral line in the visible.
(1.11) Relative intensities in the Zeeman eﬀect Without an external ﬁeld, an atom has no preferred direction and the choice of quantisation axis is arbitrary. In these circumstances the light emitted cannot be polarized (since this would establish a preferred orientation). As a magnetic ﬁeld is gradually turned on we do not expect the intensities of the diﬀerent Zeeman components to change discontinuously because the ﬁeld has little eﬀect on transition rates. This physical argument implies that op-
positely-polarized components emitted along the direction of the ﬁeld must have equal intensities, i.e. Iσ+ = Iσ− (notation deﬁned in Fig. 1.6). What can you deduce about
(a) the relative intensities of the components emitted perpendicularly to the ﬁeld?
(b) the ratio of the total intensities of light emitted along and perpendicular to the ﬁeld?
(1.12) Bohr theory and the correspondence principle This exercise gives an alternative approach to the theory of the hydrogen atom presented in Section 1.3 that is close to the spirit of Bohr’s original papers. It is somewhat more subtle than that usually given in elementary textbooks and illustrates Bohr’s great intuition. Rather than the ad hoc assumption that angular momentum is an integral multiple of (in eqn 1.7), Bohr used the correspondence principle. This principle relates the behaviour of-
 a system according to the known laws of classical mechanics and its quantum properties.
Assumption II The correspondence principle states that in the limit of large quantum numbers a quantum system tends to the same limit as the corresponding classical system.
Bohr formulated this principle in the early days of quantum theory. To apply this principle to hydrogen we ﬁrst calculate the energy gap between adjacent electron orbits of radii r and r . For large radii, the change ∆r = r − r r.
(a) Show that the angular frequency ω = ∆E/ of radiation emitted when an electron makes a quantum jump between these levels is
ω e2/4π 0 ∆r . 2 r2
(b) An electron moving in a circle of radius r acts as an electric dipole radiating energy at the

Exercises for Chapter 1 21

orbital frequency ω given by eqn 1.4. Verify that this equation follows from eqn 1.3.

(c) In the limit of large quantum numbers, the quantum mechanical and classical expressions give the same frequency ω. Show that equating the expressions in the previous parts yields ∆r = 2 (a0r)1/2.
(d) The diﬀerence in the radii between two adjacent orbits can be expressed as a diﬀerence equation.44 In this case ∆n = 1 and

∆r ∝ r1/2 . ∆n

(1.45)

This equation can be solved by assuming that
the radius varies as some power x of the quan-
tum number n, e.g. if one orbit is labelled
by an integer n and the next by n + 1, then r = anx and r = a (n + 1)x. Show that ∆r = axnx−1 ∝ nx/2. Determine the power x and the constant a.

Comment. We have found eqn 1.8 from the correspondence principle without considering angular momentum. The allowed energy levels are easily found from this equation as in Section 1.3. The remarkable feature is that, although the form of the equation was derived for high values of the principal quantum number, the result works down to n = 1.
(1.13) Rydberg atoms
(a) Show that the energy of the transitions between two shells with principal quantum numbers n and n = n + 1 is proportional to 1/n3 for large n.
(b) Calculate the frequency of the transition between the n = 51 and n = 50 shells of a neutral atom.
(c) What is the size of an atom in these Rydberg states? Express your answer both in atomic units and in metres.

Web site: http://www.physics.ox.ac.uk/users/foot This site has answers to some of the exercises, corrections and other supplementary information.

44A diﬀerence equation is akin to a diﬀerential equation but without letting the diﬀerences become inﬁnitesimal.

2

The hydrogen atom

2.1 The Schro¨dinger equation 22

2.2 Transitions

29

2.3 Fine structure

34

Further reading

42

Exercises

42

The simple hydrogen atom has had a great inﬂuence on the development of quantum theory, particularly in the ﬁrst half of the twentieth century when the foundations of quantum mechanics were laid. As measurement techniques improved, ﬁner and ﬁner details were resolved in the spectrum of hydrogen until eventually splittings of the lines were observed that cannot be explained even by the fully relativistic formulation of quantum mechanics, but require the more advanced theory of quantum electrodynami-
cs. In the ﬁrst chapter we looked at the Bohr–Sommerfeld theory of hydrogen that treated the electron orbits classically and imposed quantisation rules upon them. This theory accounted for many of the features of hydrogen but it fails to provide a realistic description of systems with more than one electron, e.g. the helium atom. Although the simple picture of electrons orbiting the nucleus, like planets round the sun, can explain some phenomena, it has been superseded by the Schro¨dinger equation-
 and wavefunctions. This chapter outlines the application of this approach to solve Schro¨dinger’s equation for the hydrogen atom; this leads to the same energy levels as the Bohr model but the wavefunctions give much more information, e.g. they allow the rates of the transitions between levels to be calculated (see Chapter 7). This chapter also shows how the perturbations caused by relativistic eﬀects lead to ﬁne structure.

2.1 The Schro¨dinger equation

1The emphasis is on the properties of the wavefunctions rather than how to solve diﬀerential equations.
2The operator for linear momentum is p = −i ∇ and for angular momentum it is l = r × p. This notation diﬀers in two ways from that commonly used in quantum texts. Firstly, is taken outside the angular momentum operators, and secondly, the operators are written without ‘hats’. This is convenient for atomic physics, e.g. in the vector model for the addition of angular momenta.

The solution of the Schro¨dinger equation for a Coulomb potential is
in every quantum mechanics textbook and only a brief outline is given here.1 The Schro¨dinger equation for an electron of mass me in a spherically-symmetric potential is

−

2
∇2 + V (r)

ψ = Eψ .

2me

(2.1)

This is the quantum mechanical counterpart of the classical equation
for the conservation of total energy expressed as the sum of kinetic and potential energies.2 In spherical polar coordinates we have

∇2 =

1∂ r2 ∂r

r2 ∂ ∂r

−

1 r2

l2

,

(2.2)

2.1 The Schr¨odinger equation 23

where the operator l2 contains the terms that depend on θ and φ, namely

l2 = −

1∂ sin θ ∂θ

∂ sin θ
∂θ

1 ∂2 + sin2 θ ∂φ2

,

(2.3)

and 2l2 is the operator for the orbital angular momentum squared. Following the usual procedure for solving partial diﬀerential equations, we look for a solution in the form of a product of functions ψ = R(r)Y (θ, φ). The equation separates into radial and angular parts as follows:

1∂ R ∂r

r2 ∂R ∂r

−

2mer2
2

{V

(r)

−

E}

=

1 Y

l2Y

.

(2.4)

Each side depends on diﬀerent variables and so the equation is only satisﬁed if both sides equal a constant that we call b. Thus

l2Y = b Y .

(2.5)

This is an eigenvalue equation and we shall use the quantum theory of angular momentum operators to determine the eigenfunctions Y (θ, φ).

2.1.1 Solution of the angular equation

To continue the separation of variables we substitute Y = Θ(θ)Φ(φ) into eqn 2.5 to obtain

sin θ ∂ Θ ∂θ

∂Θ sin θ
∂θ

+

b sin2

θ

=

−1 Φ

∂2Φ ∂φ2

=

const .

(2.6)

The equation for Φ(φ) is the same as in simple harmonic motion, so3

Φ = Aeimφ + Be−imφ .

(2.7)

The constant on the right-hand side of eqn 2.6 has the value m2. Physically realistic wavefunctions have a unique value at each point and this imposes the condition Φ(φ + 2π) = Φ(φ), so m must be an integer. The function Φ(φ) is the sum of eigenfunctions of the operator for the z-component of orbital angular momentum

3A and B are arbitrary constants. Alternatively, the solutions can be written in terms of real functions as A sin(mφ) + B cos(mφ).

∂

lz = −i

. ∂φ

(2.8)

The function eimφ has magnetic quantum number m and its complex conjugate e−imφ has magnetic quantum number −m.4
A convenient way to ﬁnd the function Y (θ, φ) and its eigenvalue b in
eqn 2.55 is to use the ladder operators l+ = lx + ily and l− = lx − ily. These operators commute with l2, the operator for the total angular momentum squared (because lx and ly commute with l2); therefore, the three functions Y , l+Y and l−Y are all eigenfunctions of l2 with the
same eigenvalue b (if they are non-zero, as discussed below). The ladder

4The operator −∂2/∂φ2 ≡ lz2 and consequently Φ(φ) is an eigenfunction of lz2 with eigenvalue m2.
5The solution of equations involving the angular part of ∇2 arises in many situations with spherical symmetry, e.g. in electrostatics, and the same mathematical tools could be used here to determine the properties of the spherical harmonic functions, but angular momentum methods give more physical insight for atoms.

24 The hydrogen atom

operators can be expressed in polar coordinates as:

6The raising operator contains the factor eiφ, so that when it acts on an eigenfunction of the form Y ∝ Θ(θ)eimφ the resulting function l+Y contains ei(m+1)φ. The θ-dependent part of this function is found below.
7These properties follow from the commutation relations for angular momentum operators (see Exercise 2.1).
8This statement can be proved rigorously using angular momentum operators, as shown in quantum mechanics texts.
9The dubious reader can easily check that l+Yl,l = 0. It is trivially obvious that lzYl,l = l Yl,l, where m = l for this function.
10l−Y1,−1 = 0 and m = −1 is the lowest eigenvalue of lz. Proportional signs have been used to avoid worrying about normalisation; this leaves an ambiguity about the relative phases of the eigenfunctions but we shall choose them in accordance with usual convention.
11The relation Yl,−m = Yl∗,m shows that, if mmax = l, then mmin = −l. Between these two extremes there are 2l + 1 possible values of the magnetic quantum number m for each l. Note that the orbital angular momentum quantum number l is not the same as the length of the angular momentum vector (in units of ). Quantum mechanics tells us only that the expectation value of the square of the orbital angular momentum is l(l + 1), in units of 2. The length itself does not have a well-deﬁned value in quantu-
m mechanics and it does not make sense to refer to it. When people say that an atom has ‘orbital angular momentum of one, two, etc.’, strictly speaking they mean that the orbital angular momentum quantum number l is 1, 2, etc.

l+ = eiφ

∂

∂

+ i cot θ

∂θ

∂φ

,

l− = e−iφ

−

∂ ∂θ

+

i cot θ

∂ ∂φ

.

(2.9)

The operator l+ transforms a function with magnetic quantum number m into another angular momentum eigenfunction that has eigenvalue

m + 1. Thus l+ is called the raising operator.6 The lowering operator l− changes the magnetic quantum number in the other direction, m → m −

1. It is straightforward to prove these statements and other properties

of these operators;7 however, the purpose of this section is not to present

the general theory of angular momentum but simply to outline how to

ﬁnd the eigenfunctions (of the angular part) of the Schro¨dinger equation.

Repeated application of the raising operator does not increase m

indeﬁnitely—for each eigenvalue b there is a maximum value of the mag-

netic quantum number8 that we shall call l, i.e. mmax = l. The raising operator acting on an eigenfunction with mmax gives zero since by definition there are no eigenfunctions with m > mmax. Thus solving the

equation l+Y = 0 (Exercise 2.11) we ﬁnd that the eigenfunctions with

mmax = l have the form

Y ∝ sinlθ eilφ .

(2.10)

Substitution back into eqn 2.5 shows that these are eigenfunctions l2 with
eigenvalue b = l(l + 1), and l is the orbital angular momentum quantum
number. The functions Yl,m(θ, φ) are labelled by their eigenvalues in the conventional way.9 For l = 0 only m = 0 exists and Y0,0 is a constant with no angular dependence. For l = 1 we can ﬁnd the eigenfunctions
by starting from the one with l = 1 = m (in eqn 2.10) and using the
lowering operator to ﬁnd the others:

Y1,1 ∝ sin θ eiφ ,
Y1,0 ∝ l−Y1,1 ∝ cos θ , Y1,−1 ∝ l−Y1,0 ∝ sin θ e−iφ .

This gives all three eigenfunctions expected for l = 1.10 For l = 2 this

procedure gives

Y2,2 ∝ sin2 θ ei2φ , ...

Y2,−2 ∝ sin2 θ e−i2φ .

These are the ﬁve eigenfunctions with m = 2, 1, 0, −1, −2.11 Normalised angular functions are given in Table 2.1.
Any angular momentum eigenstate can be found from eqn 2.10 by

2.1 The Schr¨odinger equation 25

Table 2.1 Orbital angular momentum eigenfunctions.

1 Y0,0 = 4π

3

Y1,0 =

cos θ 4π

Y1,±1 = ∓

3 sin θ e±iφ 8π

Y2,0 =

5 3 cos2 θ − 1 16π

Y2,±1 = ∓

15 sin θ cos θ e±iφ 8π

Y2,±2 =

15 sin2 θ e±2iφ 32π

2π π

Normalisation:

|Yl,m|2 sin θ dθ dφ = 1

00

repeated application of the lowering operator:12 Yl,m ∝ (l−)l−m sinl θ eilφ .

(2.11)

12This eigenfunction has magnetic quantum number l − (l − m) = m.

To understand the properties of atoms, it is important to know what the wavefunctions look like. The angular distribution needs to be multiplied by the radial distribution, calculated in the next section, to give the square of the wavefunction as

|ψ (r, θ, φ)|2 = Rn2,l (r) |Yl,m (θ, φ)|2 .

(2.12)

This is the probability distribution of the electron, or −e |ψ|2 can be in-

terpreted as the electronic charge distribution. Many atomic properties,

however, depend mainly on the form of the angular distribution and Fig. 2.1 shows some plots of |Yl,m|2. The function |Y0,0|2 is spherically symmetric. The function |Y1,0|2 has two lobes along the z-axis. The
squared modulus of the other two eigenfunctions of l = 1 is proportional
to sin2 θ. As shown in Fig. 2.1(c), there is a correspondence between

these distributions and the circular motion of the electron around the

z-axis that we found as the normal modes in the classical theory of the

Zeeman eﬀect (in Chapter 1).13 This can be seen in Cartesian coordi-

nates where

z Y1,0 ∝ r ,

Y1,1

∝

x

+ r

iy

,

Y1,−1

∝

x

− r

iy

.

(2.13)

13Stationary states in quantum mechanics correspond to the timeaveraged classical motion. In this case both directions of circular motion about the x-axis give the same distribution.

26 The hydrogen atom

 = 

 > 

 ? 

 @ 

 A 

Fig. 2.1 Polar plots of the squared modulus of the angular wavefunctions for the hydrogen atom with l = 0 and 1. For each value of the polar angle θ a point is plotted at a distance proportional to |Y (θ, φ)|2 from the origin. Except for (d), the plots have rotational symmetry about the z-axis and look the same for any value of φ. (a) |Y0,0|2 is spherical. (b) |Y1,0|2 ∝ cos2 θ has two lobes along the z-axis. (c) |Y1,1|2 ∝ sin2 θ has an ‘almost’ toroidal shape—this function equals zero for θ = 0. (-
|Y1,−1|2 looks the same.) (d) |Y1,1 − Y1,−1|2 ∝ |x/r|2 has rotational symmetry about the x-axis and this polar plot is drawn for φ = 0; it looks like (b) but rotated through an angle of π/2. (e) |Y2,2|2 ∝ sin4 θ.

Any linear combination of these is also an eigenfunction of l2, e.g.

14In the absence of an external ﬁeld to break the spherical symmetry, all axes are equivalent, i.e. the atom does not have a preferred direction so there is symmetry between the x-, y- and z-directions. In an external magnetic ﬁeld the states with diﬀerent values of m (but the same l) are not degenerate and so linear combinations of them are not eigenstates of the system.

Y1,−1

− Y1,1

∝

x r

=

sin θ

cos φ ,

y Y1,−1 + Y1,1 ∝ r = sin θ sin φ .

(2.14) (2.15)

These two real functions have the same shape as Y1,0 ∝ z/r but are aligned along the x- and y-axes, respectively.14 In chemistry these distributions for l = 1 are referred to as p-orbitals. Computer programs can produce plots of such functions from any desired viewing angle (see Blundell 2001, Fig. 3.1) that are helpful in visualising the functions with l > 1. (For l = 0 and 1 a cross-section of the functions in a plane that contains the symmetry axis suﬃces.)

2.1.2 Solution of the radial equation
An equation for R(r) is obtained by setting eqn 2.4 equal to the constant b = l(l + 1) and putting in the Coulomb potential V (r) = −e2/4π 0r. It

2.1 The Schr¨odinger equation 27

can be cast in a convenient form by the substitution P (r) = rR (r):

−

2
2me

d2P dr2

+

2
2me

l (l + r2

1)

−

e2/4π r

0

−

E

P =0.

(2.16)

The term proportional to l(l + 1)/r2 is the kinetic energy associated

with the angular degrees of freedom; it appears in this radial equation

as an eﬀective potential that tends to keep wavefunctions with l = 0

away from the origin. Dividing through this equation by E = −|E|

(a negative quantity since E 0 for a bound state) and making the

substitution

ρ2

=

2me |E| r2
2

(2.17)

reduces the equation to the dimensionless form

d2P dρ2 +

−l

(l + ρ2

1)

+

λ ρ

−

1

P = 0.

(2.18)

The constant that characterises the Coulomb interaction strength is

e2 λ=
4π 0

2me 2 |E|

.

(2.19)

The standard method of solving such diﬀerential equations is to look for
a solution in the form of a series. The series solutions have a ﬁnite number of terms and do not diverge when λ = 2n, where n is an integer.15 Thus, from eqn 2.19, these wavefunctions have eigenenergies given by16

E = − 2me

e2/4π
2

0

21 λ2

=

−hcR∞

1 n2

.

(2.20)

This shows that the Schro¨dinger equation has stationary solutions at energies given by the Bohr formula. The energy does not depend on l; this accidental degeneracy of wavefunctions with diﬀerent l is a special feature of Coulomb potential. In contrast, degeneracy with respect to the magnetic quantum number ml arises because of the system’s symmetry, i.e. an atom’s properties are independent of its orientation in space, in the absence of external ﬁelds.17 The solution of the Schro¨dinger equation-
 gives much more information than just the energies; from the wavefunctions we can calculate other atomic properties in ways that were not possible in the Bohr–Sommerfeld theory.
We have not gone through the gory details of the series solution, but we should examine a few examples of radial wavefunctions (see Table 2.2). Although the energy depends only on n, the shape of the wavefunctions depends on both n and l and these two quantum numbers are used to label the radial functions Rn,l(r). For n = 1 there is only the l = 0 solution, namely R1,0 ∝ e−ρ. For n = 2 the orbital angular momentum quantum number is l = 0 or 1, giving

15The solution has the general form P (ρ) = Ce−ρv (ρ), where v(ρ) is another function of the radial coordinate, for which there is a polynomial solution (see Woodgate 1980 and Rae 1992). 16Using eqn 1.41.
17This is true for any sphericallysymmetric potential V (r).

R2,0 ∝ (1 − ρ) e−ρ , R2,1 ∝ ρe−ρ .

28 The hydrogen atom

Table 2.2 Radial hydrogenic wavefunctions Rn,l in terms of the variable ρ = Zr/(na0), which gives a scaling that varies with n. The Bohr radius a0 is deﬁned in eqn 1.40.

R1,0 =

Z

3/2
2 e−ρ

a0

R2,0 =

Z

3/2
2 (1 − ρ) e−ρ

2a0

R2,1 =

Z 3/2 √2 ρ e−ρ

2a0

3

R3,0 = R3,1 = R3,2 =

Z

3/2
2

1 − 2ρ + 2 ρ2

e−ρ

3a0

3

Z 3a0

3/2

√ 42

ρ

3

1

−

1ρ 2

e−ρ

Z

3/2

√ 2√2

ρ2

e−ρ

3a0

35

∞

Normalisation:

Rn2 ,l r2 dr = 1

0

These show a general a feature of hydrogenic wavefunctions, namely that the radial functions for l = 0 have a ﬁnite value at the origin, i.e. the power series in ρ starts at the zeroth power. Thus electrons with l = 0 (called s-electrons) have a ﬁnite probability of being found at the position of the nucleus and this has important consequences in atomic physics.
Inserting |E| from eqn 2.20 into eqn 2.17 gives the scaled coordinate

Zr

ρ=

,

n a0

(2.21)

where the atomic number has been incorporated by the replacement e2/4π 0 → Ze2/4π 0 (as in Chapter 1). There are some important properties of the radial wavefunctions that require a general form of the
solution and for future reference we state these results. The probability density of electrons with l = 0 at the origin is

|ψn,l=0

(0)|2

=

1 π

Z3 .
na0

(2.22)

For electrons with l = 0 the expectation value of 1/r3 is

1 r3

=

∞ 0

1 r3

Rn2 ,l

(r)

r2

dr

=

l

1

l

+

1 2

(l + 1)

Z3 .
na0

(2.23)

These results have been written in a form that is easy to remember; they must both depend on 1/a30 in order to have the correct dimensions and the dependence on Z follows from the scaling of the Schro¨dinger

2.2 Transitions 29

equation. The dependence on the principal quantum number n also

seems to follow from eqn 2.21 but this is coincidental; a counterexample

is18

1 1Z r = n2 a0 .

(2.24)

18This quantity is related to the quantum mechanical expectation value of the potential energy p.e. ; as in the Bohr model the total energy is E = p.e. /2.

2.2 Transitions

The wavefunction solutions of the Schro¨dinger equation for particular
energies are standing waves and give a distribution of electronic charge −e |ψ (r)|2 that is constant in time. We shall now consider how transi-
tions between these stationary states occur when the atom interacts with electromagnetic radiation that produces an oscillating electric ﬁeld19

E (t) = |E0| Re e−iωt erad

(2.25)

19The interaction of atoms with the oscillating magnetic ﬁeld in such a wave is considerably weaker; see Appendix C.

with constant amplitude |E0| and polarization vector erad.20 If ω lies close to the atomic resonance frequency then the perturbing electric ﬁeld puts the atom into a superposition of diﬀerent states and induces an oscillating electric dipole moment on the atom (see Exercise 2.10). The calculation of the stimulated transition rate requires time-dependent perturbation theory (TDPT), as described in Chapter 7. However, the treatment from ﬁrst principles is lengthy and we shall anticipate some of the -
results so that we can see how spectra relate to the underlying structure of the atomic energy levels. This does not require an exact calculation of transition rates, but we only need to determine whether the transition rate has a ﬁnite value or whether it is zero (to ﬁrst order), i.e. whether the transition is allowed and gives a strong spectral line, or is forbidden.
The result of time-dependent perturbation theory is encapsulated in the golden rule (or Fermi’s golden rule);21 this states that the rate of transitions is proportional to the square of the matrix element of the perturbation. The Hamiltonian that describes the time-dependent interaction with the ﬁeld in eqn 2.25 is H = er · E (t), where the electric dipole operator is −er.22 This interaction with the radiation stimulates transitions from state 1 to state 2 at a rate23

Rate ∝ |eE0|2

2
ψ2∗ ( r · erad) ψ1 d3r ≡ |eE0|2 × | 2| r · erad |1 |2 .

(2.26) The concise expression in Dirac notation is convenient for later use. This treatment assumes that the amplitude of the electric ﬁeld is uniform over the atom so that it can be taken outside the integral over the atomic wavefunctions, i.e. that E0 does not depend on r.24 We write the dipole matrix element as the product

2| r · erad |1 = D12 Iang . The radial integral is25

(2.27)

20The unit vector erad gives the direction of the oscillating electric ﬁeld. For example, for the simple case of linear polarization along the x-axis erad = ex and the real part of e−iωt is cos(ωt); therefore E (t) = |E0| cos(ωt) ex.
21See quantum mechanics texts such as Mandl (1992).
22This is analogous to the interaction of a classical dipole with an electric ﬁeld. Atoms do not have a permanent dipole moment, but one is induced by the oscillating electric ﬁeld. For a more rigorous derivation, see Woodgate (1980) or Loudon (2000).
23The maximum transition rate occurs when ω, the frequency of the radiation, matches the transition frequency ω12, as discussed in Chapter 7. Note, however, that we shall not discuss the socalled ‘density of states’ in the golden rule since this is not straightforward for monochromatic radiation. 24In eqn 2.25 the phase of the wave is actually (ωt − k · r), where r is the coordinate relative to the atom’s centre of mass (taken to be the origin) and k is the wavevector. We assume that the variation-
 of phase k · r is small over the atom (ka0 2π). This is equivalent to λ a0, i.e. the radiation has a wavelength much greater than the size of the atom. This is called the dipole approximation.
25Note that D12 = D21.

30 The hydrogen atom

∞

D12 =

Rn2,l2 (r) r Rn1,l1 (r) r2 dr .

0

(2.28)

The angular integral is

2π π

Iang =

Yl∗2,m2 (θ, φ) r · erad Yl1,m1 (θ, φ) sin θ dθ dφ , (2.29)

0

0

where r = r/r. The radial integral is not normally zero although it can be small for transitions between states whose radial wavefunctions have a small overlap, e.g. when n1 is small and n2 is large (or the other way round). In contrast, the Iang = 0 unless strict criteria are satisﬁed— these are the selection rules.

2.2.1 Selection rules

26If either the atoms have random orientations (e.g. because there is no external ﬁeld) or the radiation is unpolarized (or both), then an average over all angles must be made at the end of the calculation.

The selection rules that govern allowed transitions arise from the angular integral in eqn 2.29 which contains the angular dependence of the interaction r · erad for a given polarization of the radiation. The mathematics requires that we calculate Iang for an atom with a well-deﬁned quantisation axis (invariably chosen to be the z-axis) and radiation that has a well-deﬁned polarization and direction of propagation. This corresponds to the physical situation of an atom experiencing the Zeeman eﬀect-
 of an external magnetic ﬁeld, as described in Section 1.8; that treatment of the electron as a classical oscillator showed that the components of diﬀerent frequencies within the Zeeman pattern have diﬀerent polarizations. We use the same nomenclature of π- and σ-transitions here; transverse observation refers to radiation emitted perpendicular to the magnetic ﬁeld, and longitudinal observation is along the z-axis.26
To calculate Iang we write the unit vector r in the direction of the induced dipole as:

1 r = r (xex + yey + zez)
= sin θ cos φ ex + sin θ sin φ ey + cos θ ez .

(2.30)

Expressing the functions of θ and φ in terms of spherical harmonic func-

tions as

2π sin θ cos φ = 3 (Y1,−1 − Y1,1) ,

2π sin θ sin φ = i 3 (Y1,−1 + Y1,1) ,

(2.31)

4π cos θ = 3 Y1,0 ,

leads to

r

∝

Y1,−1

ex

√+ iey 2

+

Y1,0ez

+

Y1,1

−ex√+ 2

iey

.

(2.32)

We write the general polarization vector as

erad

=

Aσ−

ex

√− iey 2

+ Aπez

+ Aσ+

− ex √+ iey 2

,

(2.33)

2.2 Transitions 31

where Aπ depends on the component of the electric ﬁeld along the zaxis and the component in the xy-plane is written as a superposition of

two circular polarizations with amplitudes Aσ+ and Aσ− (rather than in terms of linear polarization in a Cartesian basis).27 Similarly, the

classical motion of the electron was written in terms of three eigenvectors

in Section 1.8: an oscillation along the z-axis and circular motion in the

xy-plane, both clockwise and anticlockwise.

From the expression for r in terms of the angular functions Yl,m(θ, φ) with l = 1 we ﬁnd that the dipole induced on the atom is proportional

to28

r · erad ∝ Aσ− Y1,−1 + Az Y1,0 + Aσ+ Y1,+1 .

(2.34)

The following sections consider the transitions that arise from these three terms.29

π-transitions

The component of the electric ﬁeld along the z-axis Az induces a dipole moment on the atom proportional to erad · ez = cos θ and the integral over the angular parts of the wavefunctions is

2π π

Iaπng =

Yl∗2,m2 (θ, φ) cos θ Yl1,m1 (θ, φ) sin θ dθ dφ .

00

(2.35)

To determine this integral we exploit the symmetry with respect to rotations about the z-axis.30 The system has cylindrical symmetry, so the

value of this integral is unchanged by a rotation about the z-axis through

an angle φ0:

Iaπng = ei(m1−m2)φ0 Iaπng .

(2.36)

This equation is satisﬁed if either Iaπng = 0 or ml1 = ml2. For this polarization the magnetic quantum number does not change, ∆ml = 0.31

σ-transitions

The component of the oscillating electric ﬁeld in the xy-plane excites σtransitions. Equation 2.34 shows that the circularly-polarized radiation with amplitude Aσ+ excites an oscillating dipole moment on the atom proportional Y1,1 ∝ sin θ eiφ, for which the angular integral is

2π π

Iaσn+g =

Yl∗2,m2 (θ, φ) sin θ eiφ Yl1,m1 (θ, φ) sin θ dθ dφ .

00

(2.37)

Again, consideration of symmetry with respect to rotation about the zaxis through an arbitrary angle shows that Iaσn+g = 0 unless ml1 − ml2 + 1 = 0. The interaction of an atom with circularly-polarized radiation of the opposite handedness leads to a similar integral but with eiφ → e−iφ; this integral Iaσn−g = 0 unless ml1 − ml2 − 1 = 0. Thus the selection rule for the σ-transitions is ∆ml = ±1.
We have found the selection rules that govern ∆ml for each of the three possible polarizations of the radiation separately. These apply

27We will see that the labels π, σ+ and σ− refer to the transition that the radiation excites; for this it is only important to know how the electric ﬁeld behaves at the position of the atom. The polarization state associated with this electric ﬁeld, e.g. whether it is rightor left-handed circularly-polarized radiation, also depends on the direction of propagation (wavevector), but we shall try to avoid a detailed treatment of the polarization conventions in this discussion of the principles. Clea-
rly, however, it is important to have the correct polarization when setting up actual experiments.
28The eigenvectors have the following properties:

ex

+ √

iey

·

ex √− iey

=1

2

2

and

ex √± iey · ex √± iey = 0 .

2

2

29In spherical tensor notation (Woodgate 1980) the three vector components are written A−1, A0 and A+1, which is convenient for more general use; but writing eqn 2.34 as given emphasises that the amplitudes A represent the diﬀerent polarizations of the radiation and the spherical harmonics come from the atomic response (induced dipole moment).
30Alternative methods are given below and in Exercise 2.9.
31We use ml to distinguish this quantum number from ms, the magnetic quantum number for spin angular momentum that is introduced later. Speciﬁc functions of the spatial variables such as Yl,m and e−imφ do not need this additional subscript.

32 The hydrogen atom

when the polarized light interacts with an atom that has a well-deﬁned orientation, e.g. an atom in an external magnetic ﬁeld. If the light is unpolarized or there is no deﬁned quantisation axis, or both, then ∆ml = 0, ±1.

32Similar behaviour arises in the classical model of the normal Zeeman effect in Section 1.8, but the quantum treatment in this section shows that it is a general feature of longitudinal observation—not just for the normal Zeeman eﬀect.

Example 2.1 Longitudinal observation
Electromagnetic radiation is a transverse wave with its oscillating elec-
tric ﬁeld perpendicular to the direction of propagation, erad · k = 0. Thus radiation with wavevector k = kez has Az = 0 and π-transitions do not occur.32 Circularly-polarized radiation (propagating along the z-
axis) is a special case for which transitions occur with either ∆ml = +1 or ∆ml = −1, depending on the handedness of the radiation, but not both.

2.2.2 Integration with respect to θ

33See the references on angular momentum in quantum mechanics; the reason why the magnetic quantum numbers add is obvious from Φ(φ).

34We have

2π 0

π 0

Yl

,m

Yl,m sin θ dθ dφ

= δl ,l δm ,m. This reduces to the nor-

malisation in Table 2.1 when l = l and

m = m.

35This argument applies only for electric dipole radiation. Higher-order terms, e.g. quadrupole radiation, can give ∆l > 1.

In the angular integral the spherical harmonic functions with l = 1 (from eqn 2.34) are sandwiched between the angular momentum wavefunctions of the initial and ﬁnal states so that

2π π

Iang ∝

Yl∗2,m2 Y1,m Yl1,m1 sin θ dθ dφ .

00

(2.38)

To calculate this angular integral we use the following formula:33

Y1,m Yl1,m1 = A Yl1+1, m1+m + B Yl1−1,m1+m ,

(2.39)

where A and B are constants whose exact values need not concern us. Thus from the orthogonality of the spherical harmonics34 we ﬁnd

Iang ∝ A δl2,l1+1δm2,m1+m + B δl2,l1−1δm2,m1+m.
The delta functions give the selection rule found previously, namely ∆ml = m, where m = 0, ±1 depending on the polarization, and also ∆l = ±1. In the mathematics the functions with l = 1 that represent the interaction with the radiation are sandwiched between the orbital angular momentum eigenfunctions of the initial and ﬁnal states. Thus the rule ∆l = ±1 can be interpreted as conservation of angular momentum for a photon carrying one unit of angular momentum, (Fig. 2.8 illustrates this reasoning -
for the case of total angular momentum).35 The changes in the magnetic quantum number are also consistent with this picture—the component of the photon’s angular momentum along the z-axis being ∆ml = 0, ±1. Conservation of angular momentum does not explain why ∆l = 0—this comes about because of parity, as explained below.

2.2.3 Parity
Parity is an important symmetry property throughout atomic and molecular physics and its general use will be explained before applying it to

2.2 Transitions 33

selection rules. The parity transformation is an inversion through the origin given by r → −r. This is equivalent to the following transformation of the polar coordinates:

θ −→ π − θ : a reﬂection , φ −→ φ + π : a rotation .

The reﬂection produces a mirror image of the original system and parity is also referred to as mirror symmetry. The mirror image of a hydrogen atom has the same energy levels as those in the original atom since the Coulomb potential is the same after reﬂection. It turns out that all the electric and magnetic interactions ‘look the same’ after reﬂection and all atoms have parity symmetry.36 To ﬁnd the eigenvalues for parity we use the full quantum mechanical notation, with hats to distinguish the o-
perator P from its eigenvalue P in the equation

P ψ =Pψ,

(2.40)

from which it follows that P 2ψ = P 2 ψ. Two successive parity operations correspond to there being no change (the identity operator), i.e. r → −r → r. Thus P 2 = 1. Therefore the parity operator has eigenvalues P = 1 and −1 that correspond to even and odd parity wavefunctions, respectively:
P ψ = ψ or P ψ = − ψ .

36This can be proved formally in quantum mechanics by showing that the Hamiltonians for these interactions commute with the parity operator. The weak interaction in nuclear physics does not have mirror symmetry and violates parity conservation. The extremely small eﬀect of the weak interaction on atoms has been measured in exceedingly careful and precise experiments.

Both eigenvalues occur for the spherical harmonic functions,

P Yl,m = (−1) l Yl,m .

(2.41)

The value of the angular integral does not change in a parity trans-

formation37 so

Iang = (−1) l2+l1+1 Iang .

(2.42)

Thus the integral is zero unless the initial and ﬁnal states have opposite parity (see Exercise 2.12). In particular, electric dipole transitions require an odd change in the orbital angular momentum quantum number (∆l = 0).38
The treatment above of the parity operator acting on a wavefunction is quite general and even in complex atoms the wavefunctions have a deﬁnite parity. The selection rules we have discussed in this section and others are tabulated in Appendix C. If the electric dipole matrix element is zero between two states then other types of transition may occur but at a rate many orders of magnitude slower than allowed transitions.
The allowed transitions between the n = 1, 2 and 3 shells of atomic hydrogen are shown in Fig. 2.2, as an example of the selection rules. The 2s conﬁguration has no allowed transitions downwards; this makes it metastable, i.e. it has a very long lifetime of about 0.125 s.39
Finally, a comment on the spectroscopic notation. It can be seen in Fig. 2.2 that the allowed transitions give rise to several series of

37See, for example, Mandl (1992).
38The radial integral is not changed by the parity transformation.
39This special feature is used in the experiment described in Section 2.3.4.

34 The hydrogen atom

s

p

d

f

g

0 6

5

4

3

2
−5

−10

Fig. 2.2 Allowed transitions between

the conﬁgurations of hydrogen obey the

selection rule ∆l = ±1. The conﬁgu-

rations with l = 0, 1, 2, 3, 4, . . . are la-

belled s, p, d, f, g, and so on alphabeti-

cally (the usual convention). In the spe-

cial case of hydrogen the energy does

not depend on the quantum number l.

−13.6

1

40For hydrogen this is the Lyman series, as marked on Fig. 1.1; however, p-series is a general name.
41These names reﬂect the appearance of the lines in the ﬁrst experimental observations.

lines. The series of lines to the ground conﬁguration is called the p-
series, where p stands for principal—this is the only series observed in absorption40—hence p labels conﬁgurations with l = 1. The s-series of lines goes from l = 0 conﬁgurations (to a level with l = 1), and similarly
the d-series goes from l = 2 conﬁgurations; s and d stand for sharp and diﬀuse, respectively.41

2.3 Fine structure

42By considering elliptical orbits, rather than just circular ones, Sommerfeld reﬁned Bohr’s theory to obtain a relativistic expression for the energy levels in hydrogen that gave very accurate predictions of the ﬁne structure; however, details of that approach are not given here.

Relativistic eﬀects lead to small splittings of the atomic energy levels called ﬁne structure. We estimated the size of this structure in Section 1.4 by comparing the speed of electrons in classical orbits with the speed of light.42 In this section we look at how to calculate ﬁne structure by treating relativistic eﬀects as a perturbation to the solutions of the Schro¨dinger equation. This approach requires the concept that electrons have spin.

2.3 Fine structure 35

2.3.1 Spin of the electron

In addition to the evidence provided by observations of the ﬁne structure itself, that is described in this section, two other experiments showed that the electron has spin angular momentum, not just orbital angular momentum. One of these pieces of experimental evidence for spin was the observation of the so-called anomalous Zeeman eﬀect. For many atoms, e.g. hydrogen and sodium, the splitting of their spectral lines in a magnetic ﬁeld does not have the pattern predicted by the normal Zeeman eﬀect-
 (that we found classically in Section 1.8). This anomalous Zeeman eﬀect has a straightforward explanation in terms of electron spin (as shown in Section 5.5). The second experiment was the famous Stern–Gerlach experiment that will be described in Section 6.4.1.43
Unlike orbital angular momentum, spin does not have eigenstates that are functions of the angular coordinates. Spin is a more abstract concept and it is convenient to write its eigenstates in Dirac’s ket notation as |s ms . The full wavefunction for a one-electron atom is the product of the radial, angular and spin wavefunctions: Ψ = Rn,l(r) Yl,m (θ, φ) |s ms . Or, using ket notation for all of the angular momentum, not just the spin,

Ψ = Rn,l(r) |l ml s ms .

(2.43)

43The ﬁne structure, anomalous Zeeman eﬀect and Stern–Gerlach experiment all involve the interaction of the electron’s magnetic moment with a magnetic ﬁeld—the internal ﬁeld of the atom in the case of ﬁne structure. Stern and Gerlach detected the magnetic interaction by its inﬂuence on the atom’s motion, whereas the Zeeman eﬀect and ﬁne structure are observed by spectroscopy.

These atomic wavefunctions provide a basis in which to calculate the eﬀect of perturbations on the atom. However, some problems do not require the full machinery of (degenerate) perturbation theory and for the time being we shall treat the orbital and spin angular momenta by analogy with classical vectors. To a large extent this vector model is intuitively obvious and we start to use it without formal derivations. But note the following points. An often-used shorthand for the spin eigenfunctions i-
s spin-up:

s=

1 2

,

ms =

1 2

≡ |↑ ,

(2.44)

and similarly |↓

for

the

ms

=

−

1 2

state

(spin-down).

However,

in

quan-

tum mechanics the angular momentum cannot be completely aligned

‘up’ or ‘down’ with respect to the z-axis, otherwise the x- and y-comp-

onents would be zero and we would know all three components simul-

taneously.44 The vector model mimics thi√s feature with classical vectors drawn with length |s| = s(s + 1) = 3/2. (Only the expectation

value of the square of the angular momentum has meaning in quan-

tum mechanics.) The spin-up and spin-down states are as illustrated

in

Fig.

2.3

with

components

along

the

z-axis

of

±

1 2

.

We can think of

the vector as rotating around the z-axis, or just having an undeﬁned

direction in the xy-plane corresponding to a lack of knowledge of the x-

and y-components (see also Grant and Phillips 2001).

The name ‘spin’ invokes an analogy with a classical system spinning on

its axis, e.g. a sphere rotating about an axis through its centre of mass,

but this mental picture has to be treated with caution; spin cannot be

equal to the sum of the orbital angular momenta of the constituents since

that will always be an integer multiple of . In any case, the electron is

44This is not possible since the operators for the x-, y- and z-components of angular momentum do not commute (save in a few special cases; we can know that sx = sy = sz = 0 if s = 0).

36 The hydrogen atom

(a)

(b)

Fig. 2.3 The representation of (a) spinup and (b) spin-down states as vectors precessing around the z-axis.

a structureless elementary particle with no measurable size. So we are left with the experimental fact that the electron has an intrinsic spin angular momentum of /2 and these half-integer values are perfectly acceptable within the general theory of angular momentum in quantum mechanics.

2.3.2 The spin–orbit interaction

The Schro¨dinger equation is non-relativistic, as can readily be seen by
looking at the kinetic-energy operator that is equivalent to the nonrelativistic expression p2/2me. Some of the relativistic eﬀects can be taken into account as follows. An electron moving through an electric
ﬁeld E experiences an eﬀective magnetic ﬁeld B given by

45The Biot–Savart law for the magnetic ﬁeld from a current ﬂowing along a straight wire can be recovered from the Lorentz transformation and Coulomb’s law (Griﬃths 1999). However, this link can only be made in this direction for simple cases and generally the phenomenon of magnetism cannot be ‘derived’ in this way.

1 B = − c2 v × E .

(2.45)

This is a consequence of the way an electric ﬁeld behaves under a Lorentz

transformation from a stationary to a moving frame in special relativity.

Although a derivation of this equation is not given here, it is certainly

plausible since linked through

special relativity and the speed of light c =

e1l/e√ctro0mµ0a.gnTehtiissmeqauraetiionntimforattehlye

speed of electromagnetic waves in a vacuum comes from Maxwell’s equa-

tions; 0 being associated with the electric ﬁeld and µ0 with the magnetic ﬁeld. Rearrangement to give µ0 = 1/ 0c2 suggests that magnetic ﬁelds arise from electrodynamics and relativity.45

We now manipulate eqn 2.45 into a convenient form, by substituting

for the electric ﬁeld in terms of the gradient of the potential energy V

and unit vector in the radial direction:

1 ∂V r

E=

.

e ∂r r

(2.46)

The factor of e comes in because the electron’s potential energy V equals its charge −e times the electrostatic potential. From eqn 2.45 we have

1 1 ∂V

1 ∂V

B = mec2 er ∂r r × mev = mec2 er ∂r l ,

(2.47)

where the orbital angular momentum is l = r × mev. The electron has an intrinsic magnetic moment µ = −gsµBs, where the spin has a magnitude of |s| = s = 1/2 (in units of ) and gs 2, so the moment

2.3 Fine structure 37

has a magnitude close to one Bohr magneton (µB = e /2me). The interaction of the electron’s magnetic moment with the orbital ﬁeld gives the Hamiltonian

H = −µ · B 1 ∂V
= gsµBs · mec2 er ∂r l .

(2.48)

However, this expression gives energy splittings about twice as large
as observed. The discrepancy comes from the Thomas precession—a
relativistic eﬀect that arises because we are calculating the magnetic
ﬁeld in a frame of reference that is not stationary but rotates as the
electron moves about the nucleus. The eﬀect is taken into account by replacing gs with gs −1 1.46 Finally, we ﬁnd the spin–orbit interaction, including the Thomas precession factor, is47

2
Hs−o = (gs − 1) 2m2e c2

1 ∂V r ∂r

s·l.

For the Coulomb potential in hydrogen we have

(2.49)

1 ∂V r ∂r

=

e2/4π r3

0.

(2.50)

The expectation value of this Hamiltonian gives an energy change of48

2 e2 1 Es−o = 2m2e c2 4π 0 r3

s·l .

(2.51)

The separation into a product of radial and angular expectation values follows from the separability of the wavefunction. The integral 1/r3 is given in eqn 2.23. However, we have not yet discussed how to deal with interactions that have the form of dot products of two angular momenta; let us start by deﬁning the total angular momentum of the atom as the sum of its orbital and spin angular momenta,

j =l+s.

(2.52)

46This is almost equivalent to using gs/2 1, but gs − 1 is more accurate at the level of precision where the small deviation of gs from 2 is important (Haar and Curtis 1987). For further discussion of Thomas precession see Cowan (1981), Eisberg and Resnick (1985) and Munoz (2001). 47We have derived this classically, e.g. by using l = r × mev. However, the same expression can be obtained from the fully relativistic Dirac equation for an electron in a Coulomb potential by making a low-velocity appro-
ximation, see Sakurai (1967). That quantum mechanical approach justiﬁes treating l and s as operators. 48Using the approximation gs − 1 1.
s
l j

This is a conserved quantity for a system without any external torque
acting on it, e.g. an atom in a ﬁeld-free region of space. This is true both in classical and quantum mechanics, but we concentrate on the
classical explanation in this section. The spin–orbit interaction between
l and s causes these vectors to change direction, and because their sum is constrained to be equal to j they move around as shown in Fig. 2.4.49 Squaring and rearranging eqn 2.52, we ﬁnd that 2 s · l = j2 − l2 − s2. Hence we can ﬁnd the expectation value in terms of the known values for j2 , l2 and s2 as

s · l = 1 {j (j + 1) − l (l + 1) − s (s + 1)} . 2
Thus the spin–orbit interaction produces a shift in energy of

(2.53)

Es−o

=

β 2

{j

(j

+

1)

−

l (l

+

1)

−

s (s

+

1)} ,

(2.54)

Fig. 2.4 The orbital and spin angular momenta add to give a total atomic angular momentum of j.
49In this precession about j the magnitudes of l and s remain constant. The magnetic moment (proportional to s) is not altered in an interaction with a magnetic ﬁeld, and because of the symmetrical form of the interaction in eqn 2.49, we do not expect l to behave any diﬀerently. See also Blundell (2001) and Section 5.1.

38 The hydrogen atom

50As shown in Section 1.9, meαca0 = and hcR∞ = (e2/4π 0)/(2a0 ).
51Another short form found in the literature is 2 2P1/2 and 2 2P3/2.

where the spin–orbit constant β is (from eqns 2.51 and 2.23)

2 e2

1

β = 2m2e c2 4π 0 (na0)3 l

l

+

1 2

. (l + 1)

(2.55)

A

single

electron

has

s

=

1 2

so,

for

each

l,

its

total

angular

momentum

quantum number j has two possible values:

1 j =l+

or

l− 1.

2

2

From eqn 2.54 we ﬁnd that the energy interval between these levels,

∆Es−o

=

Ej

=l+

1 2

−

Ej=l−

1 2

,

is

∆Es−o = β

l

+

1 2

=

α2hcR∞ n3l (l + 1)

.

(2.56)

Or, expressed in terms of the gross energy E(n) in eqn 1.10,50

α2

∆Es−o

=

n l (l

+

E 1)

(n) .

(2.57)

This agrees with the qualitative discussion in Section 1.4, where we showed that relativistic eﬀects cause energy changes of order α2 times the gross structure. The more complete expression above shows that the energy intervals between levels decrease as n and l increase. The largest interval in hydrogen occurs for n = 2 and l = 1; for this conﬁguration the spin–orbit interaction leads to levels with j = 1/2 and j = 3/2. The full designation of these levels is 2p 2P1/2 and 2p 2P3/2, in the notatio-
n that will be introduced for the LS-coupling scheme. But some of the quantum numbers (deﬁned in Chapter 5) are superﬂuous for atoms with a single valence electron and a convenient short form is to denote these two levels by 2 P1/2 and 2 P3/2; these correspond to n Pj, where P represents the (total) orbital angular momentum for this case. (The capital letters are consistent with later usage.) Similarly, we may write 2 S1/2 for the 2s 2S1/2 level; 3 D3/2 and 3 D5/2 for the j = 3/2 and 5/2 levels, r-
espectively, that arise from the 3d conﬁguration.51 But the full notation must be used whenever ambiguity might arise.

2.3.3 The ﬁne structure of hydrogen

As an example of ﬁne structure, we look in detail at the levels that arise from the n = 2 and n = 3 shells of hydrogen. Equation 2.54 predicts that, for the 2p conﬁguration, the ﬁne-structure levels have energies of

Es−o 2 P1/2 = −β2p ,

Es−o

2 P3/2

=

1 2

β2p

,

as shown in Fig. 2.5(a). For the 3d conﬁguration

3 Es−o 3 D3/2 = − 2 β3d , Es−o 3 D5/2 = β3d ,

2.3 Fine structure 39

as shown in Fig. 2.5(b). For both conﬁgurations, it is easy to see that (a) the spin–orbit interaction does not shift the mean energy

E = (2j + 1) Ej(n, l) + (2j + 1) Ej (n, l) ,

(2.58)

No spin−orbit interaction

where j = l − 1/2 and j = l + 1/2 for the two levels. This calculation of the ‘centre of gravity’ for all the states takes into account the degeneracy of each level.
The spin–orbit interaction does not aﬀect the 2 S1/2 or 3 S1/2 so we might expect these levels to lie close to the centre of gravity of the conﬁgurations with l > 0. This is not the case. Fig. 2.6 shows the energies of the levels for the n = 3 shell given by a fully relativistic calculation. We can see that there are other eﬀects of similar magnitude to the spin–orbit interaction that aﬀect these levels in hydrogen. Quite remarkably, these additional relativistic eﬀects shift the levels by just th-
e right amount to make n P1/2 levels degenerate with the n S1/2 levels, and n P3/2 degenerate with n D3/2. This structure does not occur by chance, but points to a deeper underlying cause. The full explanation of these observations requires relativistic quantum mechanics and the technical details of such calculations lie beyond the scope of this book.52 We shall simply quote the solution of the Dirac equation for an electron in a Coulomb potential; this gives a formula for the energy EDirac (n, j)-
 that depends only on n and j, i.e. it gives the same energy for levels of the same n and j but diﬀerent l, as in the cases above. In a comparison of the

(b)
No spin−orbit interaction
Fig. 2.5 The ﬁne structure of hydrogen. The ﬁne structure of (a) the 2p and (b) the 3d conﬁgurations are drawn on diﬀerent scales: β2p is considerably greater than β3d. All p- and dconﬁgurations look similar apart from an overall scaling factor. 52See graduate-level quantum mechanics texts, e.g. Sakurai (1967) and Series (1988).

S
Relativistic mass

P

D

Non-relativistic limit

Relativistic mass

Relativistic mass
Spin−orbit

Spin−orbit

Darwin term for s-electrons

Fig. 2.6 The theoretical positions of the energy levels of hydrogen calculated by the fully relativistic theory of Dirac depend on n and j only (not l), as shown in this ﬁgure for the n = 3 shell. In addition to the spin–orbit interaction, the eﬀects that determine the energies of these levels are: the relativistic mass correction and, for s-electrons only, the Darwin term (that accounts for relativistic eﬀects that occur at small r, where the electron’s momentum becomes comparable to mec).

40 The hydrogen atom

53The Dirac equation predicts that the electron has gs = 2 exactly.

exact relativistic solution of the Dirac equation and the non-relativistic energy levels, three relativistic eﬀects can be distinguished.
(a) There is a straightforward relativistic shift of the energy (or equivalently mass), related to the binomial expansion of γ = (1−v2/c2)−1/2, in eqn 1.16. The term of order v2/c2 gives the non-relativistic kinetic energy p2/2me. The next term in the expansion is proportional to v4/c4 and gives an energy shift of order v2/c2 times the gross structure—this is the eﬀect that we estimated in Section 1.4.
(b) For electrons with l = 0, the comparison of the Dirac and Schro¨dinger equations shows that there is a spin–orbit interaction of the form given above, with the Thomas precession factor naturally included.53
(c) For electrons with l = 0 there is a Darwin term proportional to |ψ (r = 0)|2 that has no classical analogue (see Woodgate (1980) for further details).
That these diﬀerent contributions conspire together to perturb the wavefunctions such that levels of the same n and j are degenerate seems improbable from a non-relativistic point of view. It is worth reiterating the statement above that this structure arises from the relativistic Dirac equation; making an approximation for small v2/c2 shows that these three corrections, and no others, need to be applied to the (nonrelativistic) energies found from the Schr¨odinger equation.

2.3.4 The Lamb shift

54Lamb and Retherford used a radiofrequency to drive the 2 S1/2–2 P1/2 transition directly. This small energy interval, now know as the Lamb shift, cannot be resolved in conventional spectroscopy because of Doppler broadening, but it can be seen using Doppler-free methods as shown in Fig. 8.7.
55The QED calculation of the Lamb shift is described in Sakurai (1967).
56Broadly speaking, in a mathematical treatment these vacuum ﬂuctuations correspond to the zero-point energy of quantum harmonic oscillators, i.e. the lowest energy of the modes of the system is not zero but ω/2.
57QED also explains why the g-factor of the electron is not exactly 2. Precise measurements show that gs = 2.002 319 304 371 8 (current values for the fundamental constants can be found on the NIST web site, and those of other national standards laboratories). See also Chapter 12.

Figure 2.7 shows the actual energy levels of the n = 2 and n = 3 shells.
According to relativistic quantum theory the 2 S1/2 level should be exactly degenerate with 2 P1/2 because they both have n = 2 and j = 1/2, but in reality there is an energy interval between them, E 2 S1/2 − E 2 P1/2 1 GHz. The shift of the 2 S1/2 level to a higher energy (lower binding energy) than the EDirac (n = 2, j = 1/2) is about onetenth of the interval between the two ﬁne-structure levels, E 2 P3/2 − E 2 P1/2 11 GHz. Although small, this discrepancy in hydrogen was of great historical imp-
ortance in physics. For this simple one-electron
atom the predictions of the Dirac equation are very precise and that
theory cannot account for Lamb and Retherford’s experimental measurement that the 2 S1/2 level is indeed higher than the 2 P1/2 level.54 The explanation of this Lamb shift goes beyond relativistic quantum me-
chanics and requires quantum electrodynamics (QED)—the quantum
ﬁeld theory that describes electromagnetic interactions. Indeed, the ob-
servation of the Lamb shift experiment was a stimulus for the development of this theory.55 An intriguing feature of QED is so-called vacuum
ﬂuctuations—regions of free space are not regarded as being completely empty but are permeated by ﬂuctuating electromagnetic ﬁelds.56 The
QED eﬀects lead to a signiﬁcant energy shift for electrons with l = 0 and hence break the degeneracy of 2 S1/2 and 2 P1/2.57 The largest QED shift occurs for the 1 S1/2 ground level of hydrogen but there is no other level nearby and so a determination of its energy requires a precise mea-

2.3 Fine structure 41

Lamb shift

Spin−orbit

Fig. 2.7 The ﬁne structure of the
n = 2 and n = 3 shells of hydro-
gen and the allowed transitions between
the levels. According to the Dirac
equation, the 2 S1/2 and 2 P1/2 levels should be degenerate, but they are not.
The measured positions show that the 2s 2S1/2 level is shifted upwards relative to the position EDirac (n = 2, j = 1/2) and is therefore not degenerate with the 2p 2P1/2 level. Such a shift occurs for all the s-electrons (but the size of
the energy shift decreases with increasing n). The explanation of this shift
takes us beyond relativistic quantum
mechanics into the realm of quantum
electrodynamics (QED)—the quantum
ﬁeld theory that describes electromag-
netic interactions.

(a)

(b)

(c)

Fig. 2.8 The conservation of total angular momentum in electric dipole transitions that gives the selection rule in eqn 2.59 can be represented as vector addition. The photon has one unit of angular momentum, and so to go from level j1 to j2 the vectors must form a triangle, as shown for the case of (a) j1 = 1/2 to j2 = 1/2, (b) j1 = 1/2 to j2 = 3/2 and (c) j1 = 3/2 to j2 = 3/2.

surement of a large frequency. Nowadays this can be achieved by laser
spectroscopy (Chapter 8) but the near degeneracy of the two j = 1/2 levels with n = 2 was crucial in Lamb’s experiment.58 Another im-
portant feature in that experiment was the metastability of the 2 S1/2 level, whose lifetime was given in Section 2.2.3. That level decays ∼ 108 times more slowly than that of 2 P1/2. In an atomic beam of hydrogen (at room temperature) the atoms have typical velocities of about 3000 m s−1 and atoms excited into the 2p conﬁguration travel an average distance of only 5 × 10−6 m before decaying with the emission of Lyman-α radiation. In contrast, metastable atoms travel the full length
of the apparatus ( 1 m) and are de-excited when they collide with a
detector (or the wall of the vacuum chamber). Hydrogen, and hydro-
genic systems, are still used for experimental tests of fundamental theory
because their simplicity allows very precise predictions.

58Higher shells have smaller shifts between the j = 1/2 levels.

2.3.5 Transitions between ﬁne-structure levels
Transitions in hydrogen between the ﬁne-structure levels with principal quantum numbers n = 2 and 3 give the components of the Balmer-α line shown in Fig. 2.7; in order of increasing energy, the seven allowed

42 The hydrogen atom

transitions between the levels with diﬀerent j are as follows:

2 P3/2 − 3 S1/2 , 2 P3/2 − 3 D3/2 , 2 P3/2 − 3 D5/2 , 2 S1/2 − 3 P1/2 , 2 P1/2 − 3 S1/2 , 2 S1/2 − 3 P3/2 , 2 P1/2 − 3 D3/2 .

These obey the selection rule ∆l = ±1 but an additional rule prevents a

transition between 2 P1/2 and 3 D5/2, namely that the change of the total angular momentum quantum number in an electric dipole transition

obeys

∆j = 0, ±1.

(2.59)

This selection rule may be explained by angular momentum conservation (as mentioned in Section 2.2.2). This rule can be expressed in terms of vector addition, as shown in Fig. 2.8; the conservation condition is equivalent to being able to form a triangle from the three vectors representing j of the initial state, the ﬁnal state, and a unit vector for the (one unit of) angular momentum carried by the photon. Hence, this selection rule is sometimes referred to as the triangle rule. The projection of-
 j along the z-axis can change by ∆mj = 0, ±1. (Appendix C gives a summary of all selection rules.)

Further reading
Much of the material covered in this chapter can be found in the introductory quantum mechanics and atomic physics texts listed in the References. For particular topics the following are useful: Segr`e (1980) gives an overview of the historical development, and Series (1988) reviews the work on hydrogen, including the important Lamb shift experiment.

Exercises

(2.1) Angular-momentum eigenfunctions (a) Verify that all the eigenfunctions with l = 1 are orthogonal to Y0,0.
(b) Verify that all the eigenfunctions with l = 1 are orthogonal to those with l = 2.

(2.2) Angular-momentum eigenfunctions
(a) Find the eigenfunction with orbital angular momentum quantum number l and magnetic quantum number m = l − 1.
(b) Verify that Yl,l−1 is orthogonal to Yl−1,l−1.

Exercises for Chapter 2 43

(2.3) Radial wavefunctions Verify eqn 2.23 for n = 2, l = 1 by calculating the radial integral (for Z = 1).
(2.4) Hydrogen For a hydrogen atom the normalised wavefunction of an electron in the 1s state, assuming a point nucleus, is

ψ(r) =

1 πa30

1/2
e−r/a0 ,

where a0 is the Bohr radius. Find an approximate expression for the probability of ﬁnding the electron in a small sphere of radius rb a0 centred on the proton. What is the electronic charge density in this region?

(2.5) Hydrogen The Balmer-α spectral line is observed from a (weak) discharge in a lamp that contains a mixture of hydrogen and deuterium at room temperature. Comment on the feasibility of carrying out an experiment using a Fabry–Perot ´etalon to resolve (a) the isotope shift, (b) the ﬁne structure and (c) the Lamb shift.

(2.6) Transitions Estimate the lifetime of the excited state in a twolevel atom when the transition wavelength is (a) 100 nm and (b) 1000 nm. In what spectral regions do these wavelengths lie?

(2.7) Selection rules By explicit calculation of integrals over θ, for the case of π-polarization only, verify that p to d transitions are allowed, but not s to d.

(2.8) Spin–orbit interaction The spin–orbit interaction splits a single-electron conﬁguration into two levels with total angular momentum quantum numbers j = l + 1/2 and j = l − 1/2. Show that this interaction does not shift the mean energy (centre of gravity) of all the states given by (2j + 1) Ej + (2j + 1) Ej .
(2.9) Selection rule for the magnetic quantum number Show that the angular integrals for σ-transitions contain the factor

2π ei(ml1 −ml2 ±1)φ dφ .
0

Hence derive the selection rule ∆ml = ±1 for this polarization. Similarly, derive the selection rule for the π-transitions.

(2.10) Transitions An atom in a superposition of two states has the

wavefunction Ψ (t) = Aψ1 (r) e−iE1t/ + Bψ2 (r) e−iE2t/ .

The distribution of electronic charge is given by
−e |Ψ (t)|2 = −e |Aψ1|2 + |Bψ2|2 + |2A∗Bψ1∗ψ2| cos (ω12t − φ) .
Part of this oscillates at the (angular) frequency of the transition ω12 = ω2 − ω1 = (E2 − E1) / . (a) A hydrogen atom is in a superposition of the
1s ground state, ψ1 = R1,0 (r) Y0,0 (θ, φ), and the ml = 0 state of the 2p conﬁguration, ψ2 = R2,1 (r) Y1,0 (θ, φ); A 0.995 and B = 0.1 (so the term containing B2 can be ignored). Sketch the form of the charge distribution for one cycle of oscillation.
(b) The atom in a superposition state may have an oscillating electric dipole moment
−eD (t) = −e Ψ∗ (t) rΨ (t) .

What are the conditions on ψ1 and ψ2 for which D (t) = 0.
(c) Show that an atom in a superposition of the same states as in part (a) has a dipole moment of
−eD (t) = −e |2A∗B| Iang

×

rR2,1(r)R1,0(r)r2 dr cos(ω12t)ez ,

where Iang is an integral with respect to θ and φ. Calculate the amplitude √of this dipole, in units of ea0, for A = B = 1/ 2.
(d) A hydrogen atom is in a superposition of the 1s ground state and the ml = 1 state of the 2p conﬁguration, ψ2 = R2,1 (r) Y1,1 (θ, φ). Sketch the form of the charge distribution at various points in its cycle of oscillation.
(e) Comment on the relationship between the time dependence of the charge distributions sketched in this exercise and the motion of the electron in the classical model of the Zeeman eﬀect (Section 1.8).
(2.11) Angular eigenfunctions We shall ﬁnd the angular momentum eigenfunctions using ladder operators, by assuming that for some value of l there is a maximum value of the magnetic quantum number mmax. For this case Yl,mmax ∝ Θ(θ)eimmaxφ and the function Θ(θ) can be found from
l+Θ(θ) exp (immaxφ) = 0 .

44 The hydrogen atom

(a) Show that Θ(θ) satisﬁes the equation

1 ∂Θ(θ)

cos θ

Θ(θ) ∂θ = mmax sin θ .

(b) Find the solution of the equation for Θ(θ). (Both sides have the form f (θ)/f (θ) whose integral is ln{f (θ)}.) By substituting this solution into eqn 2.5 to show that b = mmax(mmax + 1), or otherwise, obtain eqn 2.10.
(2.12) Parity and selection rules Show that eqn 2.42 implies that l2 − l1 is odd.

Hence, or otherwise, prove that Iang is zero unless the initial and ﬁnal states have opposite parity.
(2.13) Selection rules in hydrogen Hydrogen atoms are excited (by a pulse of laser light that drives a multi-photon process) to a speciﬁc conﬁguration and the subsequent spontaneous emission is resolved using a spectrograph. Infrared and visible spectral lines are detected only at the wavelengths 4.05 µm, 1.87 µm and 0.656 µm. Explain these observations and give the values of n and l for the conﬁgurations involved in these transitions.

Web site: http://www.physics.ox.ac.uk/users/foot This site has answers to some of the exercises, corrections and other supplementary information.

Helium

3

Helium has only two electrons but this simplicity is deceptive. To treat systems with two particles requires new concepts that also apply to multi-particle systems in many branches of physics, and it is very worthwhile to study them carefully using the example of helium. There is truth in the saying that atomic physicists count ‘one, two, many’ and a detailed understanding of the two-electron system is suﬃcient for much of the atomic structure in this book.1

3.1 The ground state of helium 45

3.2 Excited states of helium 46

3.3 Evaluation of the integrals

in helium

53

Further reading

56

Exercises

58

3.1 The ground state of helium
Two electrons in the Coulomb potential of a charge Ze, e.g. the nucleus of an atom, obey a Schro¨dinger equation of the form

1This book considers only those multielectron systems with one, or two, valence electrons ‘outside’ a sphericallysymmetric core of charge.

−2 2m

∇21

+

−2 2m

∇22

+

e2 4π 0

−Z − Z + 1 r1 r2 r12

ψ = Eψ .

(3.1)

Here r12 = |r1 − r2| is the distance between electron 1 and electron 2 and the electrostatic repulsion of electrons is proportional to 1/r12. Neglecting this mutual repulsion for the time being, we can write the equation

as

(H1 + H2) ψ = E(0)ψ ,

(3.2)

where

H1

≡

−2 2m

∇21

−

Z 4π

e2 0r1

(3.3)

and H2 is a similar expression for electron 2. Writing the atomic wavefunction as a product of the wavefunctions for each electron, ψ = ψ (1) ψ (2), allows us to separate eqn 3.2 into two single-electron Schro¨dinger equations:

H1ψ (1) = E1ψ (1)

(3.4)

and a similar equation for ψ (2) with energy E2. The solutions of these one-electron equations are hydrogenic wavefunctions with energies given
by the Rydberg formula. Helium has Z = 2 and in its ground state both electrons have energy E1 = E2 = −4hcR∞ = −54.4 eV. Thus the total energy of the atom (neglecting repulsion) is

E(0) = E1 + E2 = −109 eV .

(3.5)

46 Helium

Now we need to calculate the perturbation produced by the electron– electron repulsion. The system has the spatial wavefunction

21/√4π is the angular part of an selectron wavefunction.

ψ1s2

=

R1Zs=2 (r1) R1Zs=2

(r2)

×

1 4π

,

(3.6)

where radial wavefunctions are deﬁned in Table 2.2.2 The expectation value of the repulsion is (see Section 3.3)

3This is a standard quantum mechanical technique whose mathematical details are given in quantum texts. The essential principle of this technique is to ﬁnd an expression for the energy in terms of a parameter—an eﬀective atomic number in the case of helium— and then minimise the energy with respect to this parameter, i.e. study the variation in the energy as a function of the chosen parameter.
4This is accessible at http://www. oup.co.uk/best.textbooks/physics/ ephys/illustrations/ along with other illustrations of elementary quantum ideas.
5It is often said that ‘one electron is in a spin-up state and the other is spindown’; what this really means is deﬁned in the discussion of spin for the excited states of helium.

e2 4π 0

∞ 0

∞
ψ1∗s2
0

1 r12 ψ1s2

r12

dr1

r22

dr2

=

34 eV .

(3.7)

Adding this to the (zeroth-order) estimate E(0) gives an energy of E(1s2) = −109 + 34 = −75 eV. It takes an energy of 75 eV to remove both electrons from a helium atom leaving a bare helium nucleus He++— the second ionization energy. To go from He+ to He++ takes 54.4 eV, so this estimate suggests that the ﬁrst ionization energy (required to remove one electron from He to create He+) is IE(He) 75 − 54 21 eV. But the expectation value in eqn 3.7 is not small compared to the binding energy and theref-
ore the perturbation has a signiﬁcant eﬀect on the wavefunctions. The necessary adjustment of the wavefunctions can be accounted for by the variational method.3 This method gives a value close to the measured ionization energy 24.6 eV. Helium has the highest ﬁrst ionization energy of all elements because of its closed n = 1 shell. For a plot of the ionization energies of the elements see Grant and Phillips (2001, Chapter 11, Fig. 18).4
According to the Pauli exclusion principle, two electrons cannot have the same set of quantum numbers. Therefore there must be some additional quantum number associated with the two 1s-electrons in the ground state of helium—this is their spin (introduced in Section 2.3.1). The observed ﬁlling-up of the atomic (sub-)shells in the periodic table implies that two spin states are associated with each set of spatial quantum numbers n, l, ml.5 However, electrostatic energies do not depend on spin and w-
e can ﬁnd the spatial wavefunctions separately from the problem of ﬁnding the spin eigenfunctions.

3.2 Excited states of helium

6The spatial wavefunction u contains both radial and angular parts but the energy does not depend on the magnetic quantum number, so we drop m as a subscript on u. The repulsion from a spherically-symmetric 1s wavefunction does not depend on the orientation of the other electron. To show this mathematically we could carry m through all the calculations and examine the resulting angular integrals, but this is cumbersome.

To ﬁnd the energy of the excited states we use the same procedure as
for the ground state—at ﬁrst we neglect the mutual repulsion term and separate eqn 3.1 into two one-electron equations that have solutions6

u1s(1)

=

R1s(r1)

×

√1 4π

,

unl(2) = Rnl(r2)Yl,m (θ2, φ2)

for the conﬁguration 1snl. The spatial part of the atomic wavefunction

is the product

ψspace = u1s(1)unl(2) .

(3.8)

3.2 Excited states of helium 47

Another wavefunction has the same energy, namely

ψspace = u1s(2)unl(1) .

(3.9)

These two states are related by a permutation of the labels on the electrons, 1 ↔ 2; the energy cannot depend on the labeling of identical particles so there is exchange degeneracy. To consider the eﬀect of the repulsive term on this pair of wavefunctions with the same energy (degenerate states) we need degenerate perturbation theory. There are two approaches. The look-before-you-leap approach is ﬁrst to form eigenstates of the perturbation from linear combinations of the initial states.7 In this -
new basis the determination of the eigenenergies of the states is simple. It is instructive, however, simply to press ahead and go through the algebra once.8
We rewrite the Schro¨dinger equation (eqn 3.1) as

(H0 + H ) ψ = Eψ ,

(3.10)

7This is guided by looking for eigenstates of symmetry operators that commute with the Hamiltonian for the interaction, as in Section 4.5.
8In the light of this experience one can take the short cut in future.

where H0 = H1 + H2, and we consider the mutual repulsion of the electrons H = e2/4π 0r12 as a perturbation. We also rewrite eqn 3.2 as

H0ψ = E(0)ψ ,

(3.11)

where E(0) = E1 + E2 is the unperturbed energy. Subtraction of eqn

3.11 from eqn 3.10 gives the energy change produced by the perturbation,

∆E = E − E(0), as

H ψ = ∆E ψ .

(3.12)

A general expression for the wavefunction with energy E(0) is a linear

combination of expressions 3.8 and 3.9, with arbitrary constants a and

b,

ψ = a u1s(1)unl(2) + b u1s(2)unl(1) .

(3.13)

Substitution into eqn 3.12, multiplication by either u∗1s(1)u∗nl(2) or u∗1s(2)u∗nl(1), and then integration over the spatial coordinates for each

electron (r1, θ1, φ1 and r2, θ2, φ2) gives two coupled equations that we

write as

JK KJ

a b

= ∆E

a b

.

(3.14)

This is eqn 3.12 in matrix form. The direct integral is

1 J=
4π 0 1
= 4π 0

|u1s(1)|2

e2 r12

|unl(2)|2

dr31

dr32

ρ1s(r1)ρnl(r2) r12

dr31

dr32

,

(3.15)

where ρ1s(1) = −e |u1s(1)|2 is the charge density distribution for electron 1, and similarly for ρnl(2). This direct integral represents the Coulomb repulsion of these charge clouds (Fig. 3.1). The exchange inte-
gral is

1 K=
4π 0

u∗1s(1)u∗nl(2)

e2 r12

u1s(2)unl(1) dr31

dr32

.

(3.16)

48 Helium

Fig. 3.1 The direct integral in a 1sns conﬁguration of helium corresponds to the Coulomb repulsion between two spherically-symmetric charge clouds made up of shells of charge like those shown.

Unlike the direct integral, this does not have a simple classical interpretation in terms of charge (or probability) distributions—the exchange integral depends on interference of the amplitudes. The spherical symmetry of the 1s wavefunction makes the integrals straightforward to evaluate (Exercises 3.6 and 3.7).
The eigenvalues ∆E in eqn 3.14 are found from

J − ∆E K

K J − ∆E

= 0.

(3.17)

Unperturbed configuration
Fig. 3.2 The eﬀect of the direct and exchange integrals on a 1snl conﬁguration in helium. The singlet and triplet terms have an energy separation of twice the exchange integral (2K).

The roots of this determinantal equation are ∆E = J ± K. The direct integral shifts both levels together but the exchange integral leads to an energy splitting of 2K (see Fig. 3.2). Substitution back into eqn 3.14 gives the two eigenvectors in which b = a and b = −a. These correspond to symmetric (S) and antisymmetric (A) wavefunctions:

ψsSpace

=

√1 2

{

u1s(1)unl(2)

+

u1s(2)unl(1)

}

,

ψsApace

=

√1 2

{

u1s(1)unl(2)

−

u1s(2)unl(1)

}

.

9It is easy to check which wavefunction corresponds to which eigenvalue by substitution into the original equation.
10Another example is the classical treatment of the normal Zeeman eﬀect.

The wavefunction ψsApace has an eigenenergy of E(0) + J − K, and this is lower than the energy E(0) + J + K for ψsSpace. (For the 1snl conﬁgurations in helium K is positive.)9 This is often interpreted as the electrons ‘avoiding’ each other, i.e. ψsApace = 0 for r1 = r2, and for this wavefunction the probability of ﬁnding electron 1 close to electron 2 is
small (see Exercise 3.3). This anticorrelation of the two electrons makes
the expectation of the Coulomb repulsion between the electrons smaller than for ψsSpace.
The occurrence of symmetric and antisymmetric wavefunctions has a
classical analogue illustrated in Fig. 3.3. A system of two oscillators,
with the same resonance frequency, that interact (e.g. they are joined
together by a spring) has antisymmetric and symmetric normal modes
as illustrated in Fig. 3.3(b) and (c). These modes and their frequencies
are found in Appendix A as an example of the application of degenerate perturbation theory in Newtonian mechanics.10
The exchange integral decreases as n and l increase because of the
reduced overlap between the wavefunctions of the excited electron and

3.2 Excited states of helium 49

(a)

Fig. 3.3 An illustration of degenerate

perturbation in a classical system. (a)

Two harmonic oscillators with the same

oscillation frequency ω0—each spring

has a mass on one end and its other end

(b)

is attached to a rigid support. An in-

teraction, represented here by another

spring that connects the masses, cou-

ples the motions of the two masses. The

normal modes of the system are (b)

an in-phase oscillation at ω0, in which

the spring between the masses does not

change length, and (c) an out-of-phase

(c)

oscillation at a higher frequency. Ap-

pendix A gives the equations for this

system of two masses and three springs,

and also for the equivalent system of

three masses joined by two springs that

models a triatomic molecule, e.g. car-

bon dioxide.

the 1s-electron. These trends are an obvious consequence of the form of the wavefunctions: the excited electron’s average orbit radius increases with energy and hence with n; the variation with l arises because the eﬀective potential from the angular momentum (‘centrifugal’ barrier) leads to the wavefunction of the excited electron being small at small r. However, in the treatment as described above, the direct integral does not tend to zero as n and l increase, as shown by the following physical -
argument. The excited electron ‘sees’ the nuclear charge of +2e surrounded by the 1s electronic charge distribution, i.e. in the region far from the nucleus where nl-electron’s wavefunction has a signiﬁcant value it experiences a Coulomb potential of charge +1e. Thus the excited electron has an energy similar to that of an electron in the hydrogen atom, as shown in Fig. 3.4. But we have started with the assumption that both the 1s- and nl-electrons have an energy given by the Rydberg formula for Z-
 = 2. The direct integral J equals the diﬀerence between these energies.11 This work was an early triumph for wave mechanics since previously it had not been possible to calculate the structure of helium.12
In this section we found the wavefunctions and energy levels in helium by direct calculation but looking back we can see how to anticipate the answer by making use of symmetry arguments. The Hamiltonian for the electrostatic repulsion, proportional to 1/r12 ≡ 1/|r1 − r2|, commutes with the operator that interchanges the particle labels 1 and 2, i.e. the swap operation 1 ↔ 2. (Although we shall not give this operator a symbol it is obvious that it leaves the value of 1/r12 unchanged.) Commuting ope-
rators have simultaneous eigenfunctions. This prompts us

11This can also be seen from eqn 3.15. The integration over r1, θ1 and φ1 leads to a repulsive Coulomb potential ∼ e/4π 0r2 that cancels part of the attractive potential of the nucleus, when r2 is greater than the values of r1 where ψ1 is appreciable.
12For hydrogen, the solution of Schr¨odinger’s equation reproduced the energy levels calculated by the Bohr–Sommerfeld theory. However, wave mechanics does give more information about hydrogen than the old quantum theory, e.g. it allows the detailed calculation of transition rates.

50 Helium 0
−5

Helium

H
9 8 7 6 5 4
3
2

−10

−13.6

1

−15

−20

−25
Fig. 3.4 The energy levels of the helium atom with those of hydrogen for comparison. The 1s2 ground conﬁguration is tightly bound. For the excited conﬁgurations of helium the 1s-electron screens the outer electron from the nuclear charge so that the 1snl conﬁgurations in helium have similar energy to the shell with principal quantum number n in hydrogen. The hydrogenic levels are indicated on the right. The interval between the 1L and 3L terms (equal to twice the exchange integral) is clear for th-
e 1s2s, 1s2p, 1s3s, 1s3p and 1s4s conﬁgurations but it is smaller for higher n and l.

3.2 Excited states of helium 51

to construct the symmetrised wavefunctions ψsApace and ψsSpace.13 In this basis of eigenstates it is simple to calculate the eﬀect of the electrostatic repulsion.
3.2.1 Spin eigenstates

13For two electrons, swapping the
particle labels twice brings us back
to where we started, so ψ (1, 2) = ±ψ (2, 1). Therefore the two possible eigenvalues are 1 for ψsSpace and −1 for ψsApace .

The electrostatic repulsion between the two electrons leads to the wavefunctions ψsSpace and ψsApace in the excited states of the helium atom. The ground state is a special case where both electrons have the same spatial wavefunction, so only a symmetric solution exists. We did not consider spin since electrostatic interactions depend on the charge of the particle, not their spin. Neither H0 nor H contains any reference to the spin of the electrons. Spin does, however, have a profound eﬀect on ato-
mic wavefunctions. This arises from the deep connection between spin and the symmetry of the wavefunction of indistinguishable particles.14 Note that here we are considering the total wavefunction in the systems that includes both the spatial part (found in the previous section) and the spin. Fermions have wavefunctions that are antisymmetric with respect to particle-label interchange, and bosons have symmetric ones. As a consequence of this symmetry property, fermions and bosons ﬁll up the levels-
 of a system in diﬀerent ways, i.e. they obey diﬀerent quantum statistics.
Electrons are fermions so atoms have total wavefunctions that are antisymmetric with respect to permutation of the electron labels. This requires ψsSpace to associate with an antisymmetric spin function ψsApin, and the other way round:

14Indistinguishable means that the particles are identical and have the freedom to exchange positions, e.g. atoms in a gas which obey Fermi–Dirac or Bose–Einstein statistics depending on their spin. In contrast, atoms in a solid can be treated as distinguishable, even if they are identical, because they have ﬁxed positions—we could label the atoms 1, 2, etc. and still know which is which at some later time.

ψ = ψsSpaceψsApin

or

ψsApaceψsSpin .

(3.18)

These antisymmetrised wavefunctions that we have constructed fulﬁl the requirement of having particular symmetry with respect to the inter-
change of indistinguishable particles. Now we shall ﬁnd the spin eigenfunctions explicitly. We use the shorthand notation where ↑ and ↓ represent ms = 1/2 and −1/2, respectively. Two electrons have four possible combinations: the three symmetric functions,

ψsSpin = |↑↑ = √1 { |↑↓ + |↓↑ } 2 = |↓↓ ,

(3.19)

corresponding to S = 1 and MS = +1, 0, −1; and an antisymmetric

function

ψsApin

=

√1 2

{ |↑↓

− |↓↑

},

(3.20)

corresponding to S = 0 (with MS = 0).15 Spectroscopists label the eigenstates of the electrostatic interactions with the symbol 2S+1L, where S

is the total spin and L is the total orbital angular momentum quantum

number. The 1snl conﬁgurations in helium L = l, so the allowed terms

15These statements about the result of adding two s = 1/2 angular momenta can be proved by formal angular momentum theory. Simpliﬁed treatments describe S = 0 as having one electron with ‘spin-up’ and the other with ‘spin-down’; but both MS = 0 states are linear combinations of the states |ms1 = +1/2, ms2 = −1/2 and |ms1 = −1/2, ms2 = +1/2 .

52 Helium

16The letter ‘S’ appears over-used in this established notation but no ambiguity arises in practice. The symbol S for the total spin is italic because this is a variable, whereas the symbols S for L = 0 and s for l = 0 are not italic.

are 1L and 3L, e.g. the 1s2s conﬁguration in helium gives rise to the terms 1S and 3S, where S represents L = 0.16
In summary, we have calculated the structure of helium in two distinct stages.
(1) Energies Degenerate perturbation theory gives the space wavefunctions ψsSpace and ψsApace with energies split by twice the exchange integral. In helium the degeneracy arises because the two electrons are identical particles so there is exchange degeneracy, but the treatment is similar for systems where a degeneracy arises by accident.
(2) Spin We determined the spin associated with each energy level by constructing symmetrised wavefunctions. The product of the spatial functions and the spin eigenstates gives the total atomic wavefunction that must be antisymmetric with respect to particle-label interchange.
Exchange degeneracy, exchange integrals, degenerate perturbation theory and symmetrised wavefunctions all occur in helium and their interrelationship is not straightforward so that misconceptions abound. A common misinterpretation is to infer that because levels with diﬀerent total spin, S = 0 and 1, have diﬀerent energies then there is a spindependent interaction—this is not correct, but sometimes in condensed matter physics it is useful to pretend that it is! (See Blundell 2001.) The interaction-
s that determine the gross structure of helium are entirely electrostatic and depend only on the charge and position of the particles. Also, degenerate perturbation theory is sometimes regarded as a mysterious quantum phenomenon. Appendix A gives further discussion and shows that symmetric and antisymmetric normal modes occur when two classical systems, with similar energy, interact, e.g. two coupled oscillators.

3.2.2 Transitions in helium

17This anticipates a more general discussion of this and other selection rules for the LS-coupling scheme in a later chapter.

To determine which transitions are allowed between the energy levels of helium we need a selection rule for spin: the total spin quantum
number does not change in electric dipole transitions. In the matrix element ψﬁnal|r|ψinitial the operator r does not act on spin; therefore, if the ψﬁnal and ψinitial do not have the same value of S, then their spin functions are orthogonal and the matrix element equals zero.17 This selection rule gives the transitions shown in Fig. 3.5.

Singlets 0

3.3 Evaluation of the integrals in helium 53 Triplets

−1

−2

Fig. 3.5 The allowed transitions be-

tween the terms of helium are governed

−3

by the selection rule ∆S = 0 in addi-

tion to the rule ∆l = ±1 found pre-

viously. Since there are no transitions

−4

between singlets and triplets it is convenient to draw them as two separate

systems. Notice that in the radiative

decay of helium atoms excited to high-

−5

lying levels there are bottlenecks in the

metastable 1s2s 1S and 1s2s 3S terms.

3.3 Evaluation of the integrals in helium
In this section we shall calculate the direct and exchange integrals to make quantitative predictions for some of the energy levels in the helium atom, based on the theory described in the previous sections. This provides an example of the use of atomic wavefunctions to carry out a calculation where there are no corresponding classical orbits and gives an indication of the complexities that arise in systems with more than one electron. The evaluation of the integrals requires care and some further-
 details are given in Appendix B. The important point to be learnt from this section, however, is not the mathematical techniques but rather to see that the integrals arise from the Coulomb interaction between electrons treated by straightforward quantum mechanics.

3.3.1 Ground state

To calculate the energy of the 1s2 conﬁguration we need to ﬁnd the ex-

pectation value of e2/4π 0r12 in eqn 3.1—this calculation is the same

as the evaluation of the mutual repulsion between two charge distribu-

tions in classical electrostatics, as in eqn 3.15 with ρ1s(r1) and ρnl(r2) = ρ1s(r2). The integral can be considered in diﬀerent ways. We could

calculate the energy of the charge distribution of electron 1 in the po-

tential created by electron 2, or the other way around. This section does

neither; it uses a method that treats each electron symmetrically (as in

Appendix B), but of course each approach gives the same numerical re-

sult. Electron 1 produces an electrostatic potential at radial distance r2

given by

V12 (r2) =

r2 0

4π

1
0

r12

ρ(r1

)

d3r1

.

(3.21)

54 Helium

The spherical symmetry of s-electrons means that the charge in the region r1 < r2 acts like a point charge at the origin, so that

V12

(r2)

=

Q (r2) 4π 0r2

,

18Here Q (∞) = −e.

where Q (r2) is the charge within a radius of r2 from the origin, which

is given by18

r2

Q (r2) =

ρ (r1) 4πr12 dr1 .

(3.22)

0

The electrostatic energy that arises from the repulsion equals

∞

E12 =

V12 (r2) ρ (r2) 4πr22 dr2 .

0

(3.23)

19As is usual in calculations of the interaction between electric charge distributions, one must be careful to avoid double counting. This method of calculation avoids this pitfall, as shown by the general argument in Appendix B. An alternative method is used in Woodgate (1980), Problem 5.5.

For the 1s2 conﬁguration there is an exactly equal contribution to the
energy from V21 (r1), the (partial) potential at r1 produced by electron 2. Thus the total energy of the repulsion between the electrons is twice that in eqn 3.23.19 Using the radial wavefunction for a 1s-electron, we ﬁnd

e2 ∞

J1s2

=

2× 4π

0

0

r2 0

1 r1

4Z

3 e−(Z/a0 )2r1

r12

dr1

=

e2/4π

0

5 Z

=

(13.6 eV) ×

5 Z.

2a0 4

4

4Z3e−(Z/a0)2r2 r22 dr2 (3.24)

For helium this gives J1Zs=2 2 = 34 eV.

3.3.2 Excited states: the direct integral

20The eﬀect of the repulsion propor-
tional to 1/r12 can be considered in terms of potentials like that in eqn 3.21
(and Appendix B). The potential at
the position of the outer electron r2 arising from the charge distribution of
electron 1 accounts for a large por-
tion of the total repulsion: V12(r2) e2/4π 0r2 in the region where ρnl (r2) has an appreciable value. Hence it makes sense to include e2/4π 0r2 in the zeroth-order Hamiltonian H0a and treat the (small) part left over as a per-
turbation Ha.

A 1snl conﬁguration of helium has an energy close to that of an nlelectron in hydrogen, e.g. in the 1s2p conﬁguration the 2p-electron has a similar binding energy to the n = 2 shell of hydrogen. The obvious explanation, in Bohr’s model, is that the 2p-electron lies outside the 1sorbit so that the inner electron screens the outer one from the full nuclear charge. Applying an analogous argument to the quantum treatment of helium leads to the Hamiltonian H = H0a + Ha, where20

2

H0a

=

− 2m

∇21 + ∇22

− e2 4π 0

21 +
r1 r2

(3.25)

and

e2 1 1

Ha = 4π 0

− r12 r2

.

(3.26)

In the expression for H0a, electron 2 experiences the Coulomb attraction of a charge +1e. In Ha the subtraction of e2/4π 0r2 from the mutual repulsion means that the perturbation tends to zero at a large distance
from the nucleus (which is intuitively reasonable). This decomposition
diﬀers from that in Section 3.1. The diﬀerent treatment of the two
electrons makes the perturbation theory a little tricky, but Heisenberg

3.3 Evaluation of the integrals in helium 55

did the calculation as described in Bethe and Salpeter (1957) or Bethe and Salpeter (1977); he found the direct integral

e2 J1snl = 4π 0

11 −
r12 r2

|u1s(1)|2 |unlm(2)|2 d3r1 d3r2 .

(3.27)

This must be evaluated with the appropriate wavefunctions, i.e. uZnl=m1 rather than uZnl=m2, and uZ1s=2 as before.21 For the excited electron unlm = Rnl(r)Ylm(θ, φ), where Rnl(r) is the radial function for Z = 1. We write
the direct integral as

e2 J1snl = 4π 0

∞∞
J (r1, r2) R120(r1)Rn2l(r2)r12 dr1 r22 dr2 ,
00

where the angular parts are contained in the function22

(3.28)

J (r1, r2) =

2π π 2π π 0 00 0

11 −
r12 r2

1 4π

|Ylm(θ2,

φ2)|2

× sin θ1 dθ1 dφ1 sin θ2 dθ2 dφ2 .

(3.29)

21We have not derived this integral rigorously but it has an intuitively reasonable form.

22 Y00

(θ1,

φ1)

=

√ 1/ 4π.

The calculation of this integral requires the expansion of 1/r12 in terms of spherical harmonics:23

1

1∞

=

r12 r2 k=0

r1 r2

k 4π 2k + 1

k

Yk∗,q (θ1, φ1) Yk,q (θ2, φ2)

q=−k

(3.30)

23Yk∗,q (θ1, φ1) = (−1)q Yk,−q (θ1, φ1).

for r2 > r1 (and r1 ↔ r2 when r1 > r2). Only the term for k = 0 survives in the integration over angles in eqn 3.29 to give24

J (r1, r2) =

0 1/r1 − 1/r2

for r1 < r2 , for r1 > r2 .

24When k = 0 the integral of the function Yk∗,q (θ1, φ1) over θ1 and φ1 equals zero.

When r1 < r2 the original screening argument applies and eqn 3.25 gives a good description. When r1 > r2 the appropriate potential is proportional to −2/r2 − 1/r1 and J(r1, r2) accounts for the diﬀerence between this and −2/r1 − 1/r2 used in H0a. Thus we ﬁnd

e2 ∞ ∞ 1 1

J1snl = 4π 0 0

− r2 r1 r2

R120(r1)r12 dr1 Rn2l(r2)r22 dr2 . (3.31)

Evaluation of this integral for the 1s2p conﬁguration (in Exercise 3.6)

gives J1s2p = −2.8 × 10−2 eV—three orders of magnitude smaller than J1Zs=2 2 in eqn 3.7 (evaluated from eqn 3.24). The unperturbed wavefunction for Z = 1 has energy equal to that of the corresponding level in

hydrogen and the small negative direct integral accounts for the incom-

pleteness of the screening of the nl-electron by the inner electron.

3.3.3 Excited states: the exchange integral
The exchange integral has the same form as eqn 3.16 but with uZnl=m1 rather than uZnl=m2 (and uZ1s=2 as before). Within the spatial wavefunction

56 Helium

unlm = Rnl(r)Ylm(θ, φ) only the radial part depends on Z. We write the exchange integral as (cf. eqn 3.28)

e2 K1snl = 4π 0

K(r1, r2)R1s(r1)Rnl(r1)R1s(r2)Rnl(r2)r12 dr1 r22 dr2 . (3.32)

The function K(r1, r2) containing the angular integrals is (cf. eqn 3.29)

K(r1, r2) =

1 r12

Yl∗m

(θ1

,

φ1)

1 4π

Ylm

(θ2,

φ2

)

(3.33)

× sin θ1 dθ1 dφ1 sin θ2 dθ2 dφ2 .

For the 1snp conﬁguration only the second term of the expansion in eqn 3.30, with k = 1, survives in the integration because of the orthogonality of the spherical harmonic functions (see Exercise 3.7), to give

K(r1, r2) =

r1/3r22 r2/3r12

for r1 < r2 , for r2 < r1 .

(3.34)

25At small r the wavefunction of an
ns-electron deviates signiﬁcantly from uZns=1; for this reason 1s2p was chosen as an example above.

26The overlap of the 1s and nl wave-

functions becomes smaller as n and

l increase. In Heisenberg’s treatment

where screening is taken into account,

the direct integral gives the deviation

from the hydrogenic levels (which could

be characterised by a quantum de-

fect as in the alkalis, see Chapter 4).

For electrons with l = 0 the term 2l (l + 1) /2mr2 in the Schr¨odinger

equation causes the electron’s wave-

function to lie almost the region where uZ1s=2

entirely out√side = R1s (r) / 4π

has a signiﬁcant value.

Carrying out the integration over the radial wavefunctions in eqn 3.32 for the 1s2p conﬁguration gives the splitting between 3P and 1P as 2K1s2p 0.21 eV (close to the measured value of 0.25 eV).
The assumption that the excited electron lies outside the 1s wavefunction does not work so well for 1sns conﬁgurations since ψns (0) has a ﬁnite value and the above method of calculating J and K is less accurate.25 The 1s2s conﬁguration of helium has a singlet–triplet separation of E 1S − E 3S = 2K1s2s 0.80 eV and the direct integral is also larger than that for 1s2p—these trends are evident in Fig. 3.4 (see also Exercise 3.7).26
In some respects, helium is a more typical atom than hydrogen. The Schro¨dinger and Dirac equations can be solved exactly for the oneelectron system, but not for helium or other atoms with more electrons. Thus in a careful study of helium we encounter the approximations needed to treat multi-electron atoms, and this is very important for understanding atomic structure in general. Helium also gives a good example of the inﬂuence of identical particles on the occupation of the states in quantum syst-
ems. The energy levels of the helium atom (and the existence of exchange integrals) do not depend on the fact that the two electrons are identical, as demonstrated in Exercises 3.3 and 3.4; however, this is a common point of confusion. The books recommended for further reading give clear and accurate descriptions of helium that reward careful study.

Further reading
The recommended books are divided into two categories corresponding to the two main themes in this chapter: (a) a description of how to calculate the electrostatic energy in an atom with more than one electron, which introduces principles that can be used in atoms with more

3.3 Evaluation of the integrals in helium 57

electrons; and (b) a discussion of the inﬂuence of identical particles on the statistics of a quantum system that is important throughout physics. The inﬂuence of identical particles on the occupation of the quantum levels of a system with many particles, i.e. Bose–Einstein and Fermi–Dirac statistics, is discussed in statistical mechanics texts. Clear descriptions of helium may be found in the following textbooks: Cohen-Tannoudji et al. (1977), Woodgate (1980) and Mandl (1992). The calculation of -
the direct and exchange integrals in Section 3.3 is based on the deﬁnitive work by Bethe and Salpeter (1957), or see Bethe and Jackiw (1986).
A very instructive comparison can be made between the properties of the two electrons in helium and the nuclear spin statistics of homonuclear diatomic molecules27 described in Atkins (1983, 1994).28 There are diatomic molecules with nuclei that are identical bosons, identical fermions and cases of two similar but not identical particles, and their study gives a wider perspective than the study of helium alone. The nuclei of the two atoms in a hydrogen molecule are protons which are fermions (like-
 the two electrons in helium).29 For reasons explained in the above references, we can consider only those parts of the molecular wavefunction that describe the rotation ψrot and the nuclear spin states ψI —these are spatial and spin wavefunctions, respectively. For H2 the wavefunction must have overall antisymmetry with respect to an interchange of particle labels since the nuclei are protons, each with a spin of 1/2. This requires that a rotational must pair with a spin function of the opposite -
symmetry:

27Molecules made up of two atoms with identical nuclei.
28These books also summarise the helium atom and the quantum mechanics of these molecular systems is very closely related to atomic physics.
29The wavefunction of the hydrogen molecule has exchange symmetry— crudely speaking, the molecule looks the same when rotated through 180◦.

ψmolecule = ψrSotψIA

or

ψrAotψIS .

(3.35)

This is analogous to eqn 3.18 for helium; as described in Section 3.2.1, the two spin-1/2 nuclei in a hydrogen molecule give a total (nuclear) spin of 0 and 1, with one state and three states, respectively. The 1 to 3 ratio of the number of nuclear spins associated with the energy levels for ψrSot and ψrAot, respectively, inﬂuences the populations of these rotational energy levels in a way that is directly observed in molecular spectra (the intensity of the lines in spectra depends on the populati-
on of the initial level). The molecule HD made from hydrogen and deuterium does not have identical nuclei so there is no overall symmetry requirement, but it has similar energy levels to those of H2 apart from the mass dependence. This gives a real physical example where the statistics depends on whether the particles are identical or not, but the energy of the system does not. Exercise 3.4 discusses an artiﬁcial example: a helium-like system that has the same energy levels as a helium atom and he-
nce the same direct and exchange integrals, even though the constituent particles are not identical.

58 Helium

Exercises

More advanced problems are indicated by a *.

(3.1) Estimate of the binding energy of helium
(a) Write down the Schr¨odinger equation for the helium atom and state the physical signiﬁcance of each of the terms.
(b) Estimate the equilibrium energy of an electron bound to a charge +Ze by minimising

E(r)

=

2
2mr2

−

Ze2 4π 0r

.

(c) Calculate the repulsive energy between the two electrons in helium assuming that r12 ∼ r. Hence estimate the ionization energy of helium.
(d) Estimate the energy required to remove a further electron from the helium-like ion Si12+, taking into account the scaling with Z of the energy levels and the expectation value for the electrostatic repulsion. The experimental value is 2400 eV. Compare the accuracy of your estimates for Si12+ and helium. (IE(He) = 24.6 eV.)
(3.2) Direct and exchange integrals for an arbitrary system
(a) Verify that for

ψA(r1, r2)

=

√1 2

{uα(r1)uβ (r2)

−

uα(r2)uβ (r1)

}

and H = e2/4π 0r12 the expectation value ψA H ψA has the form J − K and give the expressions for J and K.
(b) Write down the wavefunction ψS that is orthogonal to ψA.
(c) Verify that ψA H ψS = 0 so that H is diagonal in this basis.
(3.3) Exchange integrals for a delta-function interaction A particle in a square-well potential, with V (x) = 0 for 0 < x < and V (x) = ∞ elsewhere, has normalised eigenfunctions u0(x) = 2/ sin (πx/ ) and u1(x) = 2/ sin (2πx/ ).
(a) What are the eigenenergies E0 and E1 of these two wavefunctions for a particle of mass m?

(b) Two particles of the same mass m are both in the ground state so that the energy of the whole system is 2E0. Calculate the perturbation produced by a point-like interaction described by the potential a δ (x1 − x2), with a constant.
(c) Show that, when the two interacting particles occupy the ground and ﬁrst excited states, the direct and exchange integrals are equal. Also show that the delta-function interaction produces no energy shift for the antisymmetric spatial wavefunction and explain this in terms of correlation of the particles. Calculate the energy of the other level of the perturbed system.
(d) For the two energy levels found in part (c), sketch the spatial wavefunction as a function of the coordinates of the two particles x1 and x2. The particles move in one dimension but the two-particle wavefunction exists in a twodimensional Hilbert space—draw either a contour plot in the x1x2-plane or attempt a threedimensional sketch (by hand or computer).
(e) The two particles are identical and have spin 1/2. What is the total spin quantum number S associated with each of the energy levels found in part (c)?
∗(f) Discuss qualitatively the energy levels of this system for two particles that have slightly different masses m1 = m2, so that they are distinguishable? [Hint. The spin has not been given because it is not important for non-identical particles.]
Comment. The antisymmetric spatial wavefunction in part (c) clearly has diﬀerent properties from a straightforward product u0u1. The exchange integral is a manifestation of the entanglement of the multiple-particle system.
(3.4) A helium-like system with non-identical particles Imagine that there exists an exotic particle with the same mass and charge as the electron but spin 3/2 (so it is not identical to the electron). This particle and an electron form a bound system with a helium nucleus. Compare the energy levels of this system with those of the helium atom. Describe the energy levels of a system with two of the ex-

Exercises for Chapter 3 59

otic particles bound to a helium nucleus (and no electrons). [Hint. It is not necessary to specify the values of total spin associated with the levels.]
(3.5) The integrals in helium (a) Show that the integral in eqn 3.24 gives the value stated in eqn 3.7.

(b) Estimate the ground-state energy of helium using the variational principle. (The details of this technique are not given in this book; see the section on further reading.)
(3.6) Calculation of integrals for the 1s2p conﬁguration (a) Draw a scale diagram of R1Zs=2 (r), R2Zs=1 (r) and R2Zp=1 (r). (See Table 2.2.)
(b) Calculate the direct integral in eqn 3.31 and show that it gives

J1s2p

=

−

e2/4π 2a0

0

13 2 × 55

.

Give the numerical value in eV (cf. that given in the text).
(3.7) Expansion of 1/r12 For r1 < r2 the binomial expansion of

1 =
r12

r12 + r22 − 2r1r2 cos θ12 −1/2

is

11 =
r12 r2
1 r2

1

−

2 r1 r2

cos

θ12

+

r1 2 −1/2 r2

1

+

r1 r2

cos

θ12

+

.

.

.

.

(3.36)

(When r1 > r2 we must interchange r1 and r2 to obtain convergence.) The cosine of the angle between r1 and r2 is

cos θ12 = r1 · r2 = cos θ1 cos θ2 + sin θ1 sin θ2 cos (φ1 − φ2) .

(a) Show that the ﬁrst two terms in the binomial expansion agree with the terms with k = 0 and 1 in eqn 3.30.
(b) The repulsion between a 1s- and an nl-electron is independent of m. Explain why, physically or mathematically.
(c) Show that eqn 3.32 leads to eqn 3.34 for l = 1.
(d) For a 1snl conﬁguration, the quantity K(r1, r2) in eqn 3.34 is proportional to r1l /r2l+1 when r1 < r2. Explain this in terms of mathematical properties of the Yl,m functions.

Web site: http://www.physics.ox.ac.uk/users/foot This site has answers to some of the exercises, corrections and other supplementary information.

4

The alkalis

4.1 Shell structure and the

periodic table

60

4.2 The quantum defect

61

4.3 The central-ﬁeld

approximation

64

4.4 Numerical solution of the

Schro¨dinger equation

68

4.5 The spin–orbit interaction:

a quantum mechanical

approach

71

4.6 Fine structure in the alkalis 73

Further reading

75

Exercises

76

1Also referred to by its original German name as the Aufbauprinciple. An extensive discussion of the atomic structure that underlies the periodic table can be found in chemistry texts such as Atkins (1994).
2Most of the arrangement of elements in a periodic table was determined by chemists, such as Mendeleev, in the nineteenth century. A few inconsistencies in the ordering were resolved by Moseley’s measurements of X-ray spectra (see Chapter 1).
3The conﬁguration of an atom is speciﬁed by a list of nl with the occupancy as an exponent. Generally, we do not need to list the full conﬁguration and it is suﬃcient to say that a sodium atom in its ground state has the conﬁguration 3s. A sodium ‘atom’ with one electron in the 3s level, and no others, is an excited state of the highly-charged ion Na+10—this esoteric system can be produced in the laboratory but confusion with the common sodium atom is unlikely.

4.1 Shell structure and the periodic table
For multi-electron atoms we cannot solve the Hamiltonian analytically, but by making appropriate approximations we can explain their structure in a physically meaningful way. To do this, we start by considering the elementary ideas of atomic structure underlying the periodic table of the elements. In the ground states of atoms the electrons have the conﬁguration that minimises the energy of the whole system. The electrons do not all fall down into the lowest orbital with n = 1 (the K-shell) becaus-
e the Pauli exclusion principle restricts the number of electrons in a given (sub-)shell—two electrons cannot have the same set of quantum numbers. This leads to the ‘building-up’ principle: electrons ﬁll up higher and higher shells as the atomic number Z increases across the periodic table.1 Full shells are found at atomic numbers Z = 2, 10, . . . corresponding to helium and the other inert gases. These inert gases, in a column on the right-hand side of the periodic table (see inside front cover)-
, were originally grouped together because of their similar chemical properties, i.e. the diﬃculty in removing an electron from closed shells means that they do not readily undergo chemical reactions.2 However, inert gas atoms can be excited to higher-lying conﬁgurations by bombardment with electrons in a gas discharge, and such processes are very important in atomic and laser physics, as in the helium–neon laser.
The ground states of the alkalis have the following electronic conﬁgurations:3
lithium Li 1s2 2s , sodium Na 1s22s22p6 3s , potassium K 1s22s22p63s23p6 4s , rubidium Rb 1s22s22p63s23p63d104s24p6 5s , caesium Cs 1s22s22p63s23p63d104s24p64d105s25p6 6s .
The alert reader will notice that the sub-shells of the heavier alkalis are not ﬁlled in the same order as the hydrogenic energy levels, e.g. electrons occupy the 4s level in potassium before the 3d level (for reasons that emerge later in this chapter). Thus, strictly speaking, we should say that the inert gases have full sub-shells, e.g. argon has the electronic

Table 4.1 Ionization energies of the inert gases and alkalis.

Element Z IE (eV)

He

2

24.6

Li

3 5.4

Ne

10

21.6

Na 11 5.1

Ar

18

15.8

K

19 4.3

Kr

36

14.0

Rb 37 4.2

Xe

54

12.1

Cs 55 3.9

4.2 The quantum defect 61

conﬁguration 1s22s22p63s23p6 with the 3d sub-shell unoccupied.4 Each alkali metal comes next to an inert gas in the periodic table
and much of the chemistry of the alkalis can be explained by the simple picture of their atoms as having a single unpaired electron outside a core of closed electronic sub-shells surrounding the nucleus. The unpaired valence electron determines the chemical bonding properties; since it takes less energy to remove this outer electron than to pull an electron out of a closed sub-shell (see Table 4.1), thus the alkalis can form singlycharged positive ions and are chemically reactive.5 However, we nee-
d more than this simple picture to explain the details of the spectra of the alkalis and in the following we shall consider the wavefunctions.
4.2 The quantum defect

4This book takes a shell to be all energy levels of the same principal quantum number n, but the meaning of shell and sub-shell may be diﬀerent elsewhere. We use sub-shell to denote all energy levels with speciﬁc values of n and l (in a shell with a given value of n). We used these deﬁnitions in Chapter 1; the inner atomic electrons involved in X-ray transitions follow the hydrogenic ordering.
5For a plot of the ionization energies of all the elements see Grant and Phillips (2001, Chapter 11, Fig. 18). This ﬁgure is accessible at http://www. oup.co.uk/best.textbooks/physics/ ephys/illustrations/.

The energy of an electron in the potential proportional to 1/r depends only on its principal quantum number n, e.g. in hydrogen the 3s, 3p and 3d conﬁgurations all have the same gross energy. These three levels are not degenerate in sodium, or any atom with more than one electron, and this section explains why. Figure 4.1 shows the probability density of 3s-, 3p- and 3d-electrons in sodium. The wavefunctions in sodium have a similar shape (number of nodes) to those in hydrogen. The 3d wavefunction-
 has a single lobe outside the core so that it experiences almost the same potential as in a hydrogen atom; therefore this electron, and other d conﬁgurations in sodium with n > 3, have binding energies similar to those in hydrogen, as shown in Fig. 4.2. In contrast, the wavefunctions for the s-electrons have a signiﬁcant value at small r— they penetrate inside the core and ‘see’ more of the nuclear charge. Thus the screening of the nuclear charge by the other electrons in the atom is less eﬀectiv-
e for ns conﬁgurations than for nd, and s-electrons have lower energy than d-electrons with the same principal quantum number. (The np-electrons lie between these two.6) The following modiﬁed form of

6This dependence of the energy on the quantum number l can also be explained in terms of the elliptical orbits of Bohr–Sommerfeld quantum theory rather than Schr¨odinger’s wavefunctions; however, we shall use only the ‘proper’ wavefunction description since the detailed correspondence between the elliptical classical trajectories and the radial wavefunctions can lead to confusion.

62 The alkalis (a)

Core

Fig. 4.1 The probability density of the electrons in a sodium atom as a function of r. The electrons in the n = 1 and n = 2 shells make up the core, and the probability density of the unpaired outer electron is shown for the n = 3 shell with l = 0, 1 and 2. The probability is proportional to |P (r)|2 = r2|R(r)|2; the r2 factor accounts for the increase in volume of the spherical shell between r and r + dr (i.e. 4πr2 dr) as the radial distance increases. The decreasing penetration of the core as l -
increases can be seen clearly—the 3delectron lies mostly outside the core with a wavefunction and binding energy very similar to those for the 3d conﬁguration in hydrogen. These wavefunctions could be calculated by the simple numerical method described in Exercise 4.10, making the ‘frozen core’ approximation, i.e. that the distribution of the electrons in the core is not aﬀected by the outer electron—this gives suﬃcient accuracy to illustrate the qualitative features. (The iterative method describ-
ed in Section 4.4 could be used to obtain more accurate numerical wavefunctions.)

0 (b)
Core 0 (c)
Core 0

Bohr’s formula works amazingly well for the energy levels of the alkalis:

E

(n,

l)

=

−hc

(n

R∞ − δl)2

.

(4.1)

7This diﬀers from the modiﬁcation used for X-ray transitions in Chapter 1—hardly surprising since the physical situation is completely diﬀerent for the inner and outer electrons.

A quantity δl, called the quantum defect, is subtracted from the principal quantum number to give an eﬀective principal quantum number n∗ = n − δl.7 The values of the quantum defects for each l can be estimated by inspecting the energy levels shown in Fig. 4.2. The d-electrons
have a very small quantum defect, δd 0, since their energies are nearly hydrogenic. We can see that the 3p conﬁguration in sodium has com-
parable energy to the n = 2 shell in hydrogen, and similarly for 4p and n = 3, etc.; thus δp ∼ 1. It is also clear that the quantum defect for s-electrons is greater than that for p-electrons. A more detailed analysis
shows that all the energy levels of sodium can be parametrised by the
above formula and only three quantum defects:

Sodium

H

0
10 9 8 7
6 5

4 −1

3

−2

4.2 The quantum defect 63

−3 2
−4

Fig. 4.2 The energies of the s, p, d and

f conﬁgurations in sodium. The energy

−5

levels of hydrogen are marked on the

right for comparison. The guidelines

link conﬁgurations with the same n to

show how the energies become closer to

the hydrogenic values as l increases, i.e.

the quantum defects decrease so that

δl 0 for f-electrons (and for the con-

−6

ﬁgurations with l > 3 that have not been drawn).

δs = 1.35 , δp = 0.86 , δd = 0.01 , δl 0.00 for l > 2 .
There is a small variation with n (see Exercise 4.3). Having examined the variation in the quantum defects with orbital angular momentum quantum number for a given element, now let us compare the quantum defects in diﬀerent alkalis. The data in Table 4.1 show that the alkalis have similar ionization energies despite the variation in atomic number. Thus the eﬀective principal quantum numbers n∗ = (13.6 eV/IE)1/2

64 The alkalis

Table 4.2 The eﬀective principal quantum numbers and quantum defects for the ground conﬁguration of the alkalis. Note that the quantum defects do depend slightly on n (see Exercise 4.3), so the value given in this table for the 3s-electron in sodium diﬀers slightly from the value given in the text (δs = 1.35) that applies for n > 5.

Element Conﬁguration n∗ δs

Li

2s

1.59 0.41

Na

3s

1.63 1.37

K

4s

1.77 2.23

Rb

5s

1.81 3.19

Cs

6s

1.87 4.13

(from eqn 4.1) are remarkably similar for all the ground conﬁgurations of the alkalis, as shown in Table 4.2.
In potassium the lowering of the energy for the s-electrons leads to the 4s sub-shell ﬁlling before 3d. By caesium (spelt cesium in the US) the 6s conﬁguration has lower energy than 4f (δf 0 for Cs). The exercises give other examples, and quantum defects are tabulated in Kuhn (1969) and Woodgate (1980), amongst others.

4.3 The central-ﬁeld approximation

The previous section showed that the modiﬁcation of Bohr’s formula by

the quantum defects gives reasonably accurate values for the energies

of the levels in alkalis. We described an alkali metal atom as a single

electron orbiting around a core with a net charge of +1e, i.e. the nucleus

surrounded by N − 1 electrons. This is a top-down approach where we

consider just the energy required to remove the valence electron from

the rest of the atom; this binding energy is equivalent to the ionization

energy of the atom. In this section we start from the bottom up and

consider the energy of all the electrons. The Hamiltonian for N electrons

in the Coulomb potential of a charge +Ze is





H

=

N 2 − 2m ∇2i −
i=1

Z e2/4π ri

0

+

N j>i

e2/4π rij

 0.

(4.2)

8For example, lithium has three interactions between the three electrons, inversely proportional to r12, r13 and r23; summing over all j for each value of i would give six terms.

The ﬁrst two terms are the kinetic energy and potential energy for each
electron in the Coulomb ﬁeld of a nucleus of charge Z. The term with rij = |ri − rj| in the denominator is the electrostatic repulsion between the two electrons at ri and rj . The sum is taken over all electrons with j > i to avoid double counting.8 This electrostatic repulsion is too large
to be treated as a perturbation; indeed, at large distances the repulsion cancels out most of the attraction to the nucleus. To proceed further
we make the physically reasonable assumption that a large part of the repulsion between the electrons can be treated as a central potential

4.3 The central-ﬁeld approximation 65

S (r). This follows because the closed sub-shells within the core have a spherical charge distribution, and therefore the interactions between the diﬀerent shells and between shells and the valence electron are also spherically symmetric. In this central-ﬁeld approximation the total potential energy depends only on the radial coordinate:

VCF (r)

=

− Ze2/4π r

0

+ S(r) .

In this approximation the Hamiltonian becomes

(4.3)

N

2

HCF =

− 2m ∇2i + VCF (ri) .

i=1

(4.4)

For this form of potential, the Schro¨dinger equation for N electrons,

Hψ = Eatomψ, can be separated into N one-electron equations, i.e.

writing the total wavefunction as a product of single-electron wavefunc-

tions, namely

ψatom = ψ1ψ2ψ3 · · · ψN ,

(4.5)

leads to N equations of the form

2
− 2m ∇21 + VCF (r1) ψ1 = E1ψ1 ,

(4.6)

and similar for electrons i = 2 to N . This assumes that all the electrons see the same potential, which is not as obvious as it may appear. This symmetric wavefunction is useful to start with (cf. the treatment of helium before including the eﬀects of exchange symmetry); however, we know that the overall wavefunction for electrons, including spin, should be antisymmetric with respect to an interchange of the particle labels. (Proper antisymmetric wavefunctions are used in the Hartree– Fock method-
 mentioned later in this chapter.) The total energy of the system is Eatom = E1 + E2 + . . . + EN . The Schro¨dinger equations for each electron (eqn 4.6) can be separated into parts to give wavefunctions of the form ψ1 = R(r1)Yl1,m1ψspin(1). Angular momentum is conserved in a central ﬁeld and the angular equation gives the standard orbital angular momentum wavefunctions, as in hydrogen. In the radial equation, however, we have VCF(r) rather than a potential proportional to 1/r and so the equation-
 for P (r) = rR (r) is

2 d2

2l (l + 1)

− 2m

dr2

+

VCF

(r)

+

2mr2

P (r) = EP (r) .

(4.7)

To solve this equation we need to know the form of VCF(r) and compute the wavefunctions numerically. However, we can learn a lot about the behaviour of the system by thinking about the form of the solutions, without actually getting bogged down in the technicalities of solving the equations. At small distances the electrons experience the full nuclear charge so that the central electric ﬁeld is

Ze E(r) → 4π 0r2 r .

(4.8)

66 The alkalis 11

1

Fig. 4.3 The change-over from the short- to the long-range is not calculated but is
drawn to be a reasonable guess, using the following criteria. The typical radius of
the 1s wavefunction around the nucleus of charge +Ze = +11e is about a0/11, and so Zeﬀ will start to drop at this distance. We know that Zeﬀ ∼ 1 at the distance at which the 3d wavefunction has appreciable probability since that eigenstate has
nearly the same energy as in hydrogen. The form of the function Zeﬀ (r) can be found quantitatively by the Thomas–Fermi method described in Woodgate (1980).

9This is not necessarily the best way to parametrise the problem for numerical calculations but it is useful for understanding the underlying physical principles.

At large distances the other N − 1 electrons screen most of the nuclear charge so that the ﬁeld is equivalent to that of charge +1e:

e E(r) → 4π 0r2 r .

(4.9)

These two limits can be incorporated in a central ﬁeld of the form

ECF(r)

→

Zeﬀ e 4π 0r2

r

.

(4.10)

The eﬀective atomic number Zeﬀ (r) has limiting values of Zeﬀ(0) = Z and Zeﬀ (r) → 1 as r → ∞, as sketched in Fig. 4.3.9 The potential

energy of an electron in the central ﬁeld is obtained by integrating from

inﬁnity:

r
VCF(r) = e |ECF(r )| dr .
∞

(4.11)

The form of this potential is shown in Fig. 4.4.

So far, in our discussion of the sodium atom in terms of the wave-

function of the valence electron in a central ﬁeld we have neglected

Fig. 4.4 The form of the potential en-
ergy of an electron in the central-ﬁeld approximation (e2M = e2/4π 0). This approximate sketch for a sodium atom
shows that the potential energy crosses over from VCF(r) = −e2M/r at long range to −11e2M/r + Voﬀset; the constant Voﬀset comes from the integration in eqn 4.11 (if Zeﬀ (r) = 11 for all r then Voﬀset = 0 but this is not the case). For electrons with l > 0 the eﬀective poten-
tial should also include the term that
arises from the angular momentum, as
shown in Fig. 4.5.

4.3 The central-ﬁeld approximation 67

Fig. 4.5 The total potential in the central-ﬁeld approximation including the term that is proportional to l(l + 1)/r2 drawn here for l = 2 and the same approximate electrostatic VCF(r) as shown in Fig. 4.4. The angular momentum leads to a ‘centrifugal barrier’ that tends to keep the wavefunctions of electrons with l > 0 away from r = 0 where the central-ﬁeld potential is deepest.

the fact that the central ﬁeld itself depends on the conﬁguration of the
electrons in the atom. For a more accurate description we must take
into account the eﬀect of the outer electron on the other electrons, and
hence on the central ﬁeld. The energy of the whole atom is the sum of
the energies of the individual electrons (in eqn 4.6), e.g. a sodium atom in the 3s conﬁguration has energy E 1s22s22p6 3s = 2E1s +2E2s +6E2p + E3s = Ecore + E3s. This is the energy of the neutral atom relative to the bare nucleus (Na11+).10 It is more useful to measure the binding energy relative to the singly-charged ion (Na+) with energy E 1s22s22p6 =
2E1s+2E2s+6E2p = Ecore. The dashes are signiﬁcant—the ten electrons in the ion and the ten electrons in the core of the atom have slightly
diﬀerent binding energies because the central ﬁeld is not the same in the two cases. The ionization energy is IE = Eatom − Eion = (Ecore − Ecore) + E3s. From the viewpoint of valence electrons, the diﬀerence in Ecore between the neutral atom and the ion can be attributed to core polarization, i.e. a change in the distribution of charge in the core produced by the valence electron.11 To calculate the energy of multi-

10This is a crude approximation, especially for inner electrons.
11This eﬀect is small in the alkalis and it is reasonable to use the frozen core approximation that assumes Ecore Ecore. This approximation becomes more accurate for a valence electron in higher levels where the inﬂuence on the core becomes smaller.

68 The alkalis

12This is in contrast to an inﬁnite square well where conﬁnement to a region of ﬁxed dimensions gives energies proportional to n2, where n is an integer.

electron atoms properly we should consider the energy of the whole system rather than focusing attention on only the valence electron. For example, neon has the ground conﬁguration 1s22s22p6 and the electric ﬁeld changes signiﬁcantly when an electron is excited out of the 2p subshell, e.g. into the 1s22s22p53s conﬁguration.
Quantum defects can be considered simply as empirical quantities that happen to give a good way of parametrising the energies of the alkalis but there is a physical reason for the form of eqn 4.1. In any potential that tends to 1/r at long range the levels of bound states bunch together as the energy increases—at the top of the well the classically allowed region gets larger and so the intervals between the eigenenergies and the stationary solutions get smaller.12 More quantitatively, in Exercise -
1.12 it was shown, using the correspondence principle, that such a potential has energies E ∝ 1/k2, with ∆k = 1 between energy levels, but k is not itself necessarily an integer. For the special case of a potential proportional to 1/r for all distances, k is an integer that we call the principal quantum number n and the lowest energy level turns out to be n = 1. For a general potential in the central-ﬁeld approximation we have seen that it is convenient to write k in terms of the integer n as k = -
n − δ, where δ is a non-integer (quantum defect). To ﬁnd the actual energy levels of an alkali and hence δ (for a given value of l) requires the numerical calculation of the wavefunctions, as outlined in the following section.

4.4 Numerical solution of the Schro¨dinger equation

Before describing particular methods of solution, let us look at the general features of the wavefunction for particles in potential wells. The radial equation for P (r) has the form

d2P

2m

dr2 = − 2 {E − V (r)} P ,

(4.12)

where the potential V (r) includes the angular momentum term in eqn 4.7. Classically, the particle is conﬁned to the region where E −V (r) > 0 since the kinetic energy must be positive. The positions where E = V (r) are the classical turning points where the particle instantaneously comes to rest, cf. at the ends of the swing of a pendulum. The quantum wavefunctions are oscillatory in the classically allowed region, with the curvature and number of nodes both increasing as E − V (r) increases, as -
shown in Fig. 4.6. The wavefunctions penetrate some way into the classically forbidden region where E − V (r) < 0; but in this region the solutions decay exponentially and the probability falls oﬀ rapidly.
How can we ﬁnd P (r) in eqn 4.12 without knowing the potential V (r)? The answer is ﬁrstly to ﬁnd the wavefunctions for a potential VCF(r) that is ‘a reasonable guess’, consistent with eqn 4.11 and the limits on the central electric ﬁeld in the previous equations. Then, secondly, we

Arbitrary units

4.4 Numerical solution of the Schro¨dinger equation 69

50

100

Fig. 4.6 The potential in the central-

ﬁeld approximation including the term that is proportional to l(l + 1)/r2 is

drawn here for l = 2 and the same

approximate electrostatic VCF(r) as shown in Fig. 4.4. The function P (r) =

rR(r) was drawn for n = 6 and l = 2

using the method described in Exer-

cise 4.10.

make the assumed potential correspond closely to the real potential, as described in the next section. Equation 4.12 is a second-order diﬀerential equation and we can numerically calculate P (r), the value of the function at r, from two nearby values, e.g. u (r − δr) and u (r − 2δr).13 Thus, working from near r = 0, the method gives the numerical value of the function at all points going out as far as is necessary. The region of the calculation needs to extend beyond the classical turning point(s)-
 by an amount that depends on the energy of the wavefunction being calculated. These general features are clearly seen in the plots produced in Exercise 4.10. Actually, that exercise describes a method of ﬁnding the radial wavefunction R(r) rather than P (r) = rR (r) but similar principles apply.14 If you carry out the exercise you will ﬁnd that the behaviour at large r depends very sensitively on the energy E—the wavefunction diverges if E is not an eigenenergy of the potential—this gives a way o-
f searching for those eigenenergies. If the wavefunction diverges upwards for E and downwards for E then we know that an eigenenergy of the system Ek lies between these two values, E < Ek < E . Testing further values between these upper and lower bounds narrows the range and gives a more precise value of Ek (as in the Newton–Raphson method for ﬁnding roots). This so-called ‘shooting’ method is the least sophisticated method of computing wavefunctions and energies, but it is adequate for illustrati-
ng the principles of such calculations. Results are not given here since they can readily be calculated—the reader is strongly encouraged to implement the numerical method of solution, using a spreadsheet program, as described in Exercise 4.10. This shows how to ﬁnd the wavefunctions for an electron in an arbitrary potential and veriﬁes that the energy levels obey a quantum defect formula such as eqn 4.1 in any potential that is proportional to 1/r at long range (see Fig. 4.7).

13The step size δr must be small compared to the distance over which the wavefunction varies; but the number of steps must not be so large that roundoﬀ errors begin to dominate.
14In a numerical method there is no reason why we should not calculate the wavefunction directly; P (r) was introduced to make the equations neater in the analytical approach.

70 The alkalis

Fig. 4.7 Simple modiﬁcations of the

potential energy that could be used

(a)

for the numerical solution of the

Schr¨odinger equation described in Ex-

ercise 4.10. For all these potentials V (r) = −e2/4π 0r for r rcore. (a)

Inside the radial distance rcore the potential energy is V (r) = −Ze2/4π 0r +

Voﬀset, drawn here for Z = 3 and an oﬀset chosen so that V (r) is continuous

at r = rcore. This corresponds to the

situation where the charge of the core is

an inﬁnitely thin shell. The deep poten-

tial in the inner region means that the

wavefunction has a high curvature, so

small steps must be used in the numeri-

(b)

cal calculation (in this region). The hy-

pothetical potentials in (b) and (c) are

useful for testing the numerical method

and for showing why the eigenenergies

of any potential proportional to 1/r at

0

long range obey a quantum defect for-

mula (like eqn 4.1). The form of the

solution depends sensitively on the en-

ergy in the outer region r rcore, but in the inner region where |E| |V (r)|

it does not, e.g. the number of nodes

(‘wiggles’) in this region changes slowly

(c)

with energy E. Thus, broadly speaking, the problem reduces to ﬁnding the

0

wavefunction in the outer region that

matches boundary conditions, at r =

rcore, that are almost independent of

the energy—the potential energy curve

shown in (b) is an extreme example

that gives useful insight into the be-

haviour of the wavefunction for more

realistic central ﬁelds.

4.4.1 Self-consistent solutions
The numerical method described above, or a more sophisticated one, can be used to ﬁnd the wavefunctions and energies for a given potential in the central-ﬁeld approximation. Now we shall think about how to determine VCF itself. The potential of the central ﬁeld in eqn 4.2 includes the electrostatic repulsion of the electrons. To calculate this mutual repulsion we need to know where the electrons are, i.e. their wavefunctions, but to ﬁnd the wavefunctions we need to know the potential. This argumen-
t is circular. However, going round and round this loop can be useful in the following sense. As stated above, the method starts by making a reasonable estimate of VCF and then computing the electronic wavefunctions for this potential. These wavefunctions are then used to calculate a new average potential (using the central-ﬁeld approximation) that is more realistic than the initial guess. This improved potential is then used to calculate more accurate wavefunctions, and so on. On suc-

4.5 The spin–orbit interaction: a quantum mechanical approach 71

cessive iterations, the changes in the potential and wavefunctions should get smaller and converge to a self-consistent solution, i.e. where the wavefunctions give a certain VCF(r), and solving the radial equation for that central potential gives back the same wavefunctions (within the required precision).15 This self-consistent method was devised by Hartree. However, the wavefunctions of multi-electron atoms are not simply products of individual wavefunctions as in eqn 4.5. In our treatment of th-
e excited conﬁgurations of helium we found that the two-electron wavefunctions had to be antisymmetric with respect to the permutation of the electron labels. This symmetry requirement for identical fermions was met by constructing symmetrised wavefunctions that were linear combinations of the simple product states (i.e. the spatial part of these functions is ψsApace and ψsSpace). A convenient way to extend this symmetrisation to N particles is to write the wavefunction as a Slater determinant:

15The number of iterations required, before the changes when going round the loop become very small, depends on how well the initial potential is chosen, but the ﬁnal self-consistent solution should not depend on the initial choice. In general, it is better to let a computer do the work rather than expend a lot of eﬀort improving the starting point.

Ψ = √1 N

ψa (1) ψa (2) · · · ψb (1) ψb (2) · · ·

ψc (1) ψc (2) · · ·

...

...

...

ψx (1) ψx (2) · · ·

ψa (N ) ψb (N ) ψc (N ) .
...
ψx (N )

Here a, b, c, . . . , x are the possible sets of quantum numbers of the individual electrons,16 and 1, 2, . . . , N are the electron labels. The change of sign of a determinant on the interchange of two columns makes the wavefunction antisymmetric. The Hartree–Fock method uses such symmetrised wavefunctions for self-consistent calculations and nowadays this is the standard way of computing wavefunctions, as described in Bransden and Joachain (2003). In practice, numerical methods need to be adapte-
d to the particular problem being considered, e.g. numerical values of the radial wavefunctions that give accurate energies may not give a good value for a quantity such as the expectation value 1/r3 that is very sensitive to the behaviour at short range.

16Including both space and spin.

4.5 The spin–orbit interaction: a quantum
mechanical approach
The spin–orbit interaction βs · l (see eqn 2.49) splits the energy levels to give ﬁne structure. For the single valence in an alkali we could treat this interaction in exactly the same way as for hydrogen in Chapter 2, i.e. use the vector model that treats the angular momenta as vectors obeying classical mechanics (supplemented with rules such as the restriction of the angular momentum to integer or half-integer values). However, in this chapter we shall use a quantum mechanical treatment and rega-
rd the vector model as a useful physical picture that illustrates the behaviour of the quantum mechanical operators. The previous discussion of ﬁne structure in terms of the vector model had two steps that require further justiﬁcation.

72 The alkalis

17The wavefunction for an alkali metal atom in the central-ﬁeld approximation is a product of a radial wavefunction (which does not have an analytical expression) and angular momentum eigenfunctions (as in hydrogen).

18More explicitly,

we have

|l ml s ms ≡ Yl,ml ψspin, where ψspin = |ms = +1/2 or |ms = −1/2 .

19Proof of these commutation re-
lations: [sxlx + syly + szlz , lz ] = sx [lx, lz ] + sy [ly, lz ] = −isxly + isylx = 0. Similarly, [sxlx + syly + szlz , sz] = −isylx + isxly = 0. Note that [s · l, lz] = − [s · l, sz] and hence s · l commutes with lz + sz.

js

l
Fig. 4.8 The total angular momentum of the atom j = l + s is a ﬁxed quantity in the absence of an external torque. Thus an interaction between the spin and orbital angular momenta βs · l causes these vectors to rotate (precess) around the direction of j as shown.
20As for helium in Section 3.2 and in the classical treatment of the normal Zeeman eﬀect in Section 1.8.
21These commutation relations for the operators correspond to the conservation of the total angular momentum, and its component along the z-axis. Only an external torque on the atom aﬀects these quantities. The spin–orbit interaction is an internal interaction.

(a) The possible values of the total angular momentum obtained by the addition of the electron’s spin, s = 1/2, and its orbital angular momentum are j = l + 1/2 or l − 1/2. This is a consequence of the rules for the addition of angular momentum in quantum mechanics
(vector addition but with the resultant quantised).
(b) The vectors have squared magnitudes given by j2 = j(j + 1), l2 = l(l + 1) and s2 = 3/4, where j and l are the relevant angular mo-
mentum quantum numbers.
Step (b) arises from taking the expectation values of the quantum op-
erators in the Hamiltonian for the spin–orbit interaction. This is not straightforward since the atomic wavefunctions R(r) |l ml s ms are not eigenstates of this operator17—this means that we must face the complications of degenerate perturbation theory. This situation arises fre-
quently in atomic physics and merits a careful discussion. We wish to determine the eﬀect of an interaction of the form s · l
on the angular eigenfunctions |l ml s ms . These are eigenstates of the operators l2, lz, s2 and sz labelled by the respective eigenvalues.18 There are 2(2l+1) degenerate eigenstates for each value of l because the energy does not depend on the orientation of the atom in space, or the direction of its spin, i.e. energy is independent of ml and ms. The states |l ml s ms are not eigenstates of s · l because this operator does not commute with lz and sz: [s · l, lz] = 0 and [s · l, sz] = 0.19 Quantum-
 operators only have simultaneous eigenfunctions if they commute. Since |l ml s ms is an eigenstate of lz it cannot simultaneously be an eigenstate of s · l, and similarly for sz. However, s·l does commute with l2 and s2: s · l, l2 = 0 and s · l, s2 = 0 (which are easy to prove since sx, sy, sz, lx, ly and lz all commute with s2 and l2). So l and s are good quantum numbers in ﬁne structure. Good quantum numbers correspond to constants of motion in classical mechanics—the magnitudes of l and s are -
constant
but the orientations of these vectors change because of their mutual
interaction, as shown in Fig. 4.8. If we try to evaluate the expectation value using wavefunctions that are not eigenstates of the operator then
things get complicated. We would ﬁnd that the wavefunctions are mixed
by the perturbation, i.e. in the matrix formulation of quantum mechanics the matrix representing the spin–orbit interaction in this basis has oﬀ-
diagonal elements. The matrix could be diagonalised by following the standard procedure for ﬁnding the eigenvalues and eigenvectors,20 but
a p-electron gives six degenerate states so the direct approach would require the diagonalisation of a 6×6 matrix. It is much better to ﬁnd the eigenfunctions at the outset and work in the appropriate eigenbasis. This
‘look-before-you-leap’ approach requires some preliminary reasoning.
We deﬁne the operator for the total angular momentum as j = l + s. The operator j2 commutes with the interaction, as does its component jz: s · l, j2 = 0 and [s · l, jz] = 0. Thus j and mj are good quantum numbers.21 Hence suitable eigenstates for calculating the expectation value of s · l are |l s j mj . Mathematically these new eigenfunctions can be expressed as combinations of the old basis set:

4.6 Fine structure in the alkalis 73

|lsjmj =

C(lsjmj; ml, ms) |l ml s ms .

ml ,ms

Each eigenfunction labelled by l, s, j and mj is a linear combination of the eigenfunctions with the same values of l and s but various values of ml and ms. The coeﬃcients C are the Clebsch–Gordan coeﬃcients and their values for many possible combinations of angular momenta are tabulated in more advanced books. Particular values of Clebsch– Gordan coeﬃcients are not needed for the problems in this book but it is important to know that, in principle, one set of functions can be expressed in terms o-
f another complete set—with the same number of eigenfunctions in each basis.
Finally, we use the identity22 j2 = l2 + s2 + 2s · l to express the expectation value of the spin–orbit interaction as

lsjmj| s · l |lsjmj

=

1 2

lsjmj| j2 − l2 − s2 |lsjmj

=

1 2

{j(j

+

1) −

l (l

+ 1) − s (s +

1)} .

22This applies both for vector opera-
tors, where j2 = jx2 + jy2 + jz2, and for classical vectors where this is simply j2 = |j|2.

The states |lsjmj are eigenstates of the operators j2, l2 and s2. The importance of the proper quantum treatment may not yet be apparent since all we appear to have gained over the vector model is being able to write the wavefunctions symbolically as |lsjmj . We will, however, need the proper quantum treatment when we consider further interactions that perturb these wavefunctions.

4.6 Fine structure in the alkalis

The ﬁne structure in the alkalis is well approximated by an empirical modiﬁcation of eqn 2.56 called the Land´e formula:

∆EFS

=

Zi2Zo2 (n∗)3 l (l + 1)

α2hcR∞ .

(4.13)

In the denominator the eﬀective principal quantum number cubed (n∗)3 (deﬁned in Section 4.2) replaces n3. The eﬀective atomic number Zeﬀ , which was deﬁned in the discussion of the central-ﬁeld approximation, tends to the inner atomic number Zi ∼ Z as r → 0 (where the electron ‘sees’ most of the nuclear charge); outside the core the ﬁeld corresponds
to an outer atomic number Zo 1 (for neutral atoms). The Land´e formula can be justiﬁed by seeing how the central-ﬁeld approximation modiﬁes the calculation of the ﬁne structure in hydrogen (Section 2.3.2).
The spin–orbit interaction depends on the electric ﬁeld that the electron
moves through; in an alkali metal atom this ﬁeld is proportional to Zeﬀ(r)r/r3 rather than r/r3 as in hydrogen.23 Thus the expectation value of the spin–orbit interaction depends on

Zeﬀ (r) r3

≡

1 ∂VCF (r) er ∂r

23This modiﬁcation is equivalent to using VCF in place of the hydrogenic potential proportional to 1/r.

74 The alkalis

rather than 1/r3 as in hydrogen (eqn 2.51). This results in ﬁne structure for the alkalis, given by the Land´e formula, that scales as Z2—this lies between the dependence on Z4 for hydrogenic ions (no screening)
and the other extreme of no dependence on atomic number for complete screening. The eﬀective principal quantum number n∗ is remarkably
similar across the alkalis, as noted in Section 4.2.
As a particular numerical example of the scaling, consider the ﬁne
structure of sodium (Z = 11) and of caesium (Z = 55). The 3p conﬁguration of sodium has a ﬁne-structure splitting of 1700 m−1, so for a Z2-dependence the ﬁne structure of the 6p conﬁguration of caesium should be (using n∗ from Table 4.2)

1.7 × 103 ×

55 2 ×

2.1

3
= 28.5 × 103 m−1 .

11

2.4

Frequency
Fig. 4.9 The ﬁne-structure components of a p to s transition, e.g. the 3 S1/2–3 P1/2 and 3 S1/2–3 P3/2 transitions in sodium. (Not to scale.) The statistical weights of the upper levels lead to a 1:2 intensity ratio.

This estimate gives only half the actual value of 55.4 × 103 m−1, but the prediction is much better than if we had used a Z4 scaling. (A logarithmic plot of the energies of the gross and ﬁne structure against atomic number is given in Fig. 5.7. This shows that the actual trend of the ﬁne structure lies close to the Z2-dependence predicted.)
The ﬁne structure causes the familiar yellow line in sodium to be a doublet comprised of the two wavelengths λ = 589.0 nm and 589.6 nm. This, and other doublets in the emission spectrum of sodium, can be resolved by a standard spectrograph. In caesium the transitions between the lowest energy conﬁgurations (6s–6p) give spectral lines at λ = 852 nm and 894 nm—this ‘ﬁne structure’ is not very ﬁne.

24The rates of the allowed transitions depend on integrals involving the radial wavefunctions (carried out numerically for the alkalis) and the integrals over the angular part of the wavefunction given in Section 2.2.1, where we derived the selection rules.
25This shortened form of the full LScoupling scheme notation gives all the necessary information for a single electron, cf. 3s 2S1/2–3p 2P3/2.
26This must be true for the physical reason that the decay rate is the same whatever the spatial orientation of the atom, and similarly for the spin states. All the diﬀerent angular states have the same radial integral, i.e. that between the 3p and 3s radial wavefunctions.
27This normal situation for ﬁne structure may be modiﬁed slightly in a case like caesium where the large separation of the components means that the frequency dependence of the lifetime (eqn 1.24) leads to diﬀerences, even though the matrix elements are similar.

4.6.1 Relative intensities of ﬁne-structure transitions
The transitions between the ﬁne-structure levels of the alkalis obey the same selection rules as in hydrogen since the angular momentum functions are the same in both cases. It takes a considerable amount of calculation to ﬁnd absolute values of the transition rates24 but we can ﬁnd the relative intensities of the transitions between diﬀerent ﬁne-structure levels from a simple physical argument. As an example we shall look at p to s transitions in sodium, as shown in Fig. 4.9. The 3 S1/2–3 P1/2 tr-
ansition has half the intensity of the 3 S1/2–3 P3/2 transition.25 This 1:2 intensity ratio arises because the strength of each component is proportional to the statistical weight of the levels (2j + 1). This gives 2:4 for j = 1/2 and 3/2. To explain this we ﬁrst consider the situation without ﬁne structure. For the 3p conﬁguration the wavefunctions have the form R3p(r) |lmlsms and the decay rate of these states (to 3s) is independent of the values of ml and ms.26 Linear combinations of the states-
 R(r) |lmlsms with diﬀerent values of ml and ms (but the same values of n, l and s, and hence the same lifetime) make up the eigenstates of the ﬁne structure, |lsjmj . Therefore an alkali atom has the same lifetime for both values of j.27

4.6 Fine structure in the alkalis 75

If each state has the same excitation rate, as in a gas discharge lamp for example, then all the states will have equal populations and the intensity of a given component of the line is proportional to the number of contributing mj states. Similarly, the ﬁne structure of transitions from s to p conﬁgurations, e.g. 3 P3/2–5 S1/2 and 3 P1/2–5 S1/2, have an intensity ratio of 2:1—in this case the lower frequency component has twice the intensity of the higher component, i.e. the opposite of the p to -
s transition shown in Fig. 4.9 (and such information can be used to identify the lines in an observed spectrum). More generally, there is a sum rule for intensities: the sum of the intensities to, or from, a given level is proportional to its degeneracy; this can be used when both upper and lower conﬁgurations have ﬁne structure (see Exercise 4.8).
The discussion of the ﬁne structure has shown that spin leads to a splitting of energy levels of a given n, of which l levels have diﬀerent j. These ﬁne-structure levels are degenerate with respect to mj, but an external magnetic ﬁeld removes this degeneracy. The calculation of the eﬀect of an external magnetic ﬁeld in Chapter 1 was a classical treatment that led to the normal Zeeman eﬀect. This does not accurately describe what happens for atoms with one valence electron because the contribution -
of the spin magnetic moment leads to an anomalous Zeeman eﬀect. The splitting of the ﬁne-structure level into 2j + 1 states (or Zeeman sub-levels) in an applied ﬁeld is shown in Fig. 4.10. It is straightforward to calculate the Zeeman energy for an atom with a single valence electron, as shown in quantum texts, but to avoid repetition the standard treatment is not given here; in the next chapter we shall derive a general formula for the Zeeman eﬀect on atoms with any number of valence electrons th-
at covers the single-electron case (see Exercise 5.13). We also look at the Zeeman eﬀect on hyperﬁne structure in Chapter 6.

Energy
0
Fig. 4.10 In an applied magnetic ﬁeld of magnitude B the four states of diﬀerent mj of the 2P3/2 level have energies of EZeeman = gj µBBmj —the factor gj arises from the projection of the contributions to the magnetic moment from l and s onto j (see Exercise 5.13).

Further reading
This chapter has concentrated on the alkalis and mentioned the neighbouring inert gases; a more general discussion of the periodic table is given in Physical chemistry by Atkins (1994).
The self-consistent calculations of atomic wavefunctions are discussed in Hartree (1957), Slater (1960), Cowan (1981), in addition to the textbook by Bransden and Joachain (2003).
The numerical solution of the Schro¨dinger equation for the bound states of a central ﬁeld in Exercise 4.10 is discussed in French and Taylor (1978), Eisberg and Resnick (1985) and Rioux (1991). Such numerical methods can also be applied to particles with positive energies in the potential to model scattering in quantum mechanics, as described in Greenhow (1990). The numerical method described in this book has deliberately been kept simple to allow quick implementation, but the Numerov method is m-
ore precise for this type of problem.

76 The alkalis

Exercises
(4.1) Conﬁguration of the electrons in francium Write down the full electronic conﬁguration of francium (atomic number Z = 87). This element comes below caesium in the periodic table.
(4.2) Finding the series limit for sodium Eight ultraviolet absorption lines in sodium have wavenumbers of
38 541 , 39 299 , 39 795 , 40 137 ,
40 383 , 40 566 , 40 706 , 40 814 ,
in units of cm−1. Devise an extrapolation procedure to ﬁnd the ionization limit of sodium with a precision justiﬁed by the data. Convert the result into electron volts. (You may ﬁnd a spreadsheet program useful for manipulating the numbers.) What is the eﬀective principal quantum number n∗ of the valence electron in the ground conﬁguration?
(4.3) Quantum defects of sodium The binding energies of the 3s, 4s, 5s and 6s conﬁgurations in sodium are 5.14 eV, 1.92 eV, 1.01 eV and 0.63 eV, respectively. Calculate the quantum defects for these conﬁgurations and comment on what you ﬁnd. Estimate the binding energy of the 8s conﬁguration and make a comparison with the n = 8 shell in hydrogen.
(4.4) Quantum defect Estimate the wavelength of laser radiation that excites the 5s 2S1/2–7s 2S1/2 transition in rubidium by simultaneous absorption of two photons with the same frequency (IE(Rb) = 4.17 eV). (Twophoton spectroscopy is described in Section 8.4 but speciﬁc details are not required here.)
(4.5) Application of quantum defects to helium and helium-like ions

Conﬁguration
1s2s 1s2p 1s3s 1s3p 1s3d

Binding energy (cm−1)
35 250 28 206 14 266 12 430 12 214

(a) Calculate the wavelength of the 1s2p–1s3d line in helium and compare it with the Balmer-α line in hydrogen.
(b) Calculate the quantum defects for the conﬁgurations of helium in the table. Estimate the binding energies of the 1s4l conﬁgurations.
(c) The levels belonging to the 1s4f conﬁguration of the Li+ ion all lie at an energy of 72.24 eV above the ion’s ground state. Estimate the second ionization energy of this ion. Answer: 75.64 eV.
(4.6) Quantum defects and ﬁne structure of potassium An atomic vapour of potassium absorbs light at the wavelengths (in nm): 769.9, 766.5, 404.7, 404.4, 344.7 and 344.6. These correspond to the transitions from the ground conﬁguration 4s. Explain these observations as fully as you can and estimate the mean wavelength of the next doublet in the series, and its splitting. (Potassium has IE = 4.34 eV.)28
(4.7) The Z-scaling of ﬁne structure Calculate the ﬁne-structure splitting of the 3p conﬁguration of the hydrogen-like ion Na+10 (in eV). Explain why it is larger than the ﬁne structure of the same conﬁguration in the neutral sodium (0.002 eV) and hydrogen (1.3 × 10−5 eV).
(4.8) Relative intensities of ﬁne-structure components
(a) An emission line in the spectrum of an alkali has three ﬁne-structure components corresponding to the transitions 2P3/2–2D3/2, 2P3/2–2D5/2 and 2P1/2–2D3/2. These components have intensities a, b and c, respectively, that are in the ratio 1 : 9 : 5. Show that these satisfy the rule that the sum of the intensities of the transitions to, or from, a given level is proportional to its statistical weight (2J + 1).
(b) Sketch an energy-level diagram of the ﬁnestructure levels of the two terms nd 2D and n f 2F (for n > n). Mark the three allowed electric dipole transitions and ﬁnd their relative intensities.

28For a discussion of how to determine the quantum defect for a series of lines by an iterative method see Softley (1994).

Exercises for Chapter 4 77

(4.9) Spherical symmetry of a full sub-shell

The sum

l m=−l

|Yl,m|2

is

spherically

symmetric.

Show this for the speciﬁc case of l = 1 and com-

ment on the relevance of the general expression,

that is true for all values of l, to the central-ﬁeld

approximation.

(4.10) Numerical solution of the Schro¨dinger equation This exercise goes through a method of ﬁnding the wavefunctions and their energies for a potential (in the central-ﬁeld approximation). This shows how numerical calculations are carried out in a simple case that can be implemented easily on a computer with readily available spreadsheet programs.29 Of course, the properties of hydrogen-like atoms are well known and so the ﬁrst stage really serves as a way of testing the numerical method (and ch-
ecking that the formulae have been typed correctly). It is straightforward to extend the numerical method to deal with other cases, e.g. the potentials in the central-ﬁeld approximation illustrated in Fig. 4.7.30

(a) Derivation of the equations Show from eqn 2.4, and other equations in Chapter 2, that

d2R 2 dR

dx2

+ x

dx

+

E − V (x)

R (x) = 0 , (4.14)

where the position and energy have been
turned into dimensionless variables: x = r/a0 and E is the energy in units of e2/8π 0a0 = 13.6 eV (equal to half the atomic unit of energy used in some of the references).31 In
these units the eﬀective potential is

l (l + 1) 2 V (x) = x2 − x ,

(4.15)

where l is the orbital angular momentum quantum number. The derivatives of a function f (x) can be approximated by

df = f (x + δ/2) + f (x − δ/2) ,

dx

δ

d2f dx2

=

f (x + δ) + f (x − δ) − 2f δ2

(x)

,

where δ is a small step size.32 Show that the second derivative follows by applying the procedure used to obtain the ﬁrst derivative twice. Show also that substitution into eqn 4.14 gives the following expression for the value of the function at x + δ in terms of its value at the two previous points:

R(x + δ) = 2R(x) + V (x) − E R(x)δ2

− 1 − δ R(x − δ) x

1+ δ . x
(4.16)

If we start the calculation near the origin then

1 R (2δ) =

2+

V (δ) − E

δ2

R (δ) ,

2

1 R (3δ) = 3

2R (2δ) +

V (2δ) − E

R (2δ) δ2

+ R (δ) ,

etc. Note that in the ﬁrst equation the value of R (x) at x = 2δ depends only on R (δ)—it can easily be seen why by inspection of eqn 4.16 for the case of x = δ (for this value of x the coeﬃcient of R (0) is zero). Thus the calculation starts at x = δ and works outwards from there.33 At all other positions (x > δ) the value of the function depends on its values at the two preceding points. From these recursion relations we can calculate the function at all subsequent points. The calculated functio-
ns will not be normalised and the starting conditions can be multiplied by an arbitrary constant without aﬀecting the eigenenergies, as will become clear from looking at the results. In the following R (δ) = 1 is the suggested choice but any starting value works.
(b) Implementation of the numerical method using a spreadsheet program Follow these instructions.
1. Type the given text labels into cells A1, B1, C1, D2, E2 and F2 and the three numbers into cells D1, E1 and F1 so that it has the following form:

29With a spreadsheet it is very easy to make changes, e.g. to ﬁnd out how diﬀerent potentials aﬀect the eigenenergies and
wavefunctions. 30It is intended to put more details on the web site associated with this book, see introduction for the address. 31The electron mass me = 1 in these units. Or, more strictly, its reduced mass. 32This abbreviation should not be confused with the quantum defect. 33This example is an exception to the general requirement that the solution of a second-order diﬀerential equation, such as
that for a harmonic oscillator, requires a knowledge of the function at two points to deﬁne both the value of the function and
its derivative.

78 The alkalis

AB C D

E

F

1 x V(x) psi 0.02 −0.25

1

2

step energy ang.mom.

Column A will contain the x-coordinates, the potential will be in column B and the function in column C. Cells D1, E1 and F1 contain the step size, energy and orbital angular momentum quantum number (l = 1), respectively.
2. Put 0 into A2 and the formula =A2+$D$1 into A3. Copy cell A3 to the block A4:A1002. (Or start with a smaller number of steps and adjust D1 accordingly.)
3. The potential diverges at x = 0 so type inf. into B2 (or leave it blank, remembering not to refer to it). Put the formula
=-2/A3 +$F$1*($F$1+1)/(A3*A3)
into cell B3 (as in eqn 4.15). Copy B3 into the block B4:B1002.
4. This is the crucial stage that calculates the function. Type the number 1 into cell C3. (We leave C2 blank since, as explained above, the value of the function at x = 0 does not aﬀect the solution given by the recursion relation in eqn 4.16.) Now move to cell C4 and enter the following formula for the recursion relation:
=( 2*C3+(B3-$E$1)*C3*$D$1*$D$1
- (1-$D$1/A3)*C2 )/ (1+$D$1/A3).
Copy this into the block C5:C1002. Create an xy-plot of the wavefunction (with data points connected by smooth lines and no markers); the x series is A2:A1002 and the y series is C2:C1002. Insert this graph on the sheet.
5. Now play around with the parameters and observe the eﬀect on the wavefunction for a particular energy.
(i) Show that the initial value of the function does not aﬀect its shape, or the eigenenergy, by putting 0.1 (or any number) into cell C3.
(ii) Change the energy, e.g. put -0.251 into cell E1, then -0.249, and observe the change in behaviour at large

x. (The divergence is exponential, so even a small energy discrepancy gives a large eﬀect.) Try the diﬀerent energies again with bigger and smaller step sizes in D1. It is important to search for the eigenenergy using an appropriate range of x. The eigenenergy lies between the two values of the trial energy that give opposite divergence, i.e. upwards and downwards on the graph.
(iii) Change F1 to 0 and ﬁnd a solution for l = 0.
6. Produce a set of graphs labelled clearly with the trial energy that illustrate the principles of the numerical solution, for the two functions with n = 2 and two other cases. Compare the eigenenergies with the Bohr formula. Calculate the eﬀective principal quantum number for each of the solutions, e.g. by putting =SQRT(-1/E1) in G1 (and the label n* in G2). (The search for eigenenergies can be automated by exploiting the spreadsheet’s ability to optimise parameters subject to constraints (e.g. -
the ‘Goal Seek’ command, or similar). Ask the program to make the last value of the function (in cell C1002) have the value of zero by adjusting the energy (cell E1). This procedure can be recorded as a macro that searches for the eigenenergies with a single button click.)
7. Implement one, or more, of the following suggestions for improving the basic method described above.
(i) Find the eigenenergies for a potential that tends to the Coulomb potential (−2/x in dimensionless units) at long range, like those shown in Fig. 4.7, and show that the quantum defects for that potential depend on l but only weakly on n.
(ii) For the potential shown in Fig. 4.7(c) compare the wavefunction in the inner and outer regions for several diﬀerent energies. Give a qualitative explanation of the observed behaviour.
(iii) Calculate the function P (r) = rR(r) by putting A3*C3 in cell D3 and copying this to the rest of the column.

Exercises for Chapter 4 79

Make a plot of P (r), R(r) and V (r) for at least two diﬀerent values of n and l. Adjust the value in C3, as in stage 5(i), to scale the functions to convenient values for plotting on the same axes as the potential.
(iv) Attempt a semi-quantitative calculation of the quantum defects in the lithium atom, e.g. model VCF(r) as in Fig. 4.7(a) for some reasonable choice of rcore.34
(v) Numerically calculate the sum of r2R2 (r) δ for all the values of the function and divide through by its square root to normalise the wavefunction. With normalised functions (stored in a column of the spread-

sheet) you can calculate the electric dipole matrix elements (and their ratios), e.g. | 3p| r |2s |2 / | 3p| r |1s |2 = 36, as in Exercise 7.6 (not forgetting the ω3 factor from eqn 7.23).
(vi) Assess the accuracy of this numerical method by calculating some eigenenergies using diﬀerent step sizes. (More sophisticated methods of numerical integration provided in mathematical software packages can be compared to the simple method, if desired, but the emphasis here is on the atomic physics rather than the computation. Note that methods that calculate higher derivatives of the function cannot cope with discontinuities in the potential.)

Web site: http://www.physics.ox.ac.uk/users/foot This site has answers to some of the exercises, corrections and other supplementary information.

34This simple model corresponds to all the inner electron charge being concentrated on a spherical shell. Making the transition from the inner to outer regions smoother does not make much diﬀerence to the qualitative behaviour, as you can check with the program.

5

The LS-coupling scheme

5.1 Fine structure in the LS-coupling scheme
5.2 The jj-coupling scheme 5.3 Intermediate coupling:
the transition between coupling schemes 5.4 Selection rules in the LS-coupling scheme 5.5 The Zeeman eﬀect 5.6 Summary
Further reading Exercises

In this chapter we shall look at atoms with two valence electrons, e.g. al-

kaline earth metals such as Mg and Ca. The structures of these elements

83 have many similarities with helium, and we shall also use the central-

84 ﬁeld approximation that was introduced for the alkalis in the previous

chapter. We start with the Hamiltonian for N electrons in eqn 4.2 and

insert the expression for the central potential VCF (r) (eqn 4.3) to give

86







90 90

H

=

N i=1

2
− 2m ∇2i

N + VCF (ri) + 
j>i

e2/4π rij

0

 − S(ri) .

93

This Hamiltonian can be written as H = HCF + Hre, where the central-

94 ﬁeld Hamiltonian HCF is that deﬁned in eqn 4.4 and

94





Hre

=

N N 
i=1 j>i

e2/4π rij

0

 − S(ri)

(5.1)

1Choosing S(r) to account for all the repulsion between the sphericallysymmetric core and the electrons outside the closed shells, and also within the core, leaves the repulsion between the two valence electrons, i.e. Hre e2/4π 0r12. This approximation highlights the similarity with helium (although the expectation value is evaluated with diﬀerent wavefunctions). Although it simpliﬁes the equations nicely, this is not the best approximation for accurate calculations—S(r) can be chosen to include m-
ost of the direct integral (cf. Section 3.3.2). For alkali metal atoms, which we studied in the last chapter, the repulsion between electrons gives a spherically-symmetric potential, so that Hre = 0.
2For two p-electrons we cannot ignore ml as we did in the treatment of 1snl conﬁgurations in helium. Conﬁgurations with one, or more, s-electrons can be treated in the way already described for helium but with the radial wavefunctions calculated numerically.

is the residual electrostatic interaction. This represents that part of the repulsion not taken into account by the central ﬁeld. One might think that the ﬁeld left over is somehow non-central. This is not necessarily true. For conﬁgurations such as 1s2s in He, or 3s4s in Mg, both electrons have spherically-symmetric distributions but a central ﬁeld cannot completely account for the repulsion between them—a potential VCF(r) does not include the eﬀect of the correlation of the electrons’ positions -
that leads to the exchange integral.1 The residual electrostatic interaction perturbs the electronic conﬁgurations n1l1n2l2 that are the eigenstates of the central ﬁeld. These angular momentum eigenstates for the two electrons are products of their orbital and spin functions |l1ml1 s1ms1 |l2ml2 s2ms2 and their energy does not depend on the atom’s orientation so that all the diﬀerent ml states are degenerate, e.g. the conﬁguration 3p4p has (2l1 + 1) (2l2 + 1) = 9 degenerate combinations of Yl1,m1 Y-
l2,m2 .2 Each of these spatial states has four spin functions associated with it, but we do not need to consider thirty-six degenerate states since the problem separates into spatial and spin parts, as in helium. Nevertheless, the direct approach would require diagonalising matrices of larger dimensions than the simple 2 × 2 matrix whose determinant was given in eqn 3.17. Therefore, instead of that brute-force approach, we use the ‘look-before-you-leap’ method that starts by ﬁnding the eigenstates-
 of the perturbation Hre. In that representation, Hre is a diagonal matrix with the eigenvalues as its diagonal elements.

The LS-coupling scheme 81

The interaction between the electrons, from their electrostatic repul-

sion, causes their orbital angular momenta to change, i.e. in the vector

model l1 and l2 change direction, but their magnitudes remain constant.

This internal interaction does not change the total orbital angular mo-

mentum L = l1 + l2, so l1 and l2 move (or precess) around this vector, as illustrated in Fig. 5.1. When no external torque acts on the atom, L has

a ﬁxed orientation in space so its z-component ML is also a constant of the motion (ml1 and ml2 are not good quantum numbers). This classical picture of conservation of total angular momentum corresponds to the

quantum mechanical result that the operators L2 and Lz both commute

with Hre:3

L2, Hre = 0 and [Lz, Hre] = 0 .

(5.2)

Since Hre does not depend on spin it must also be true that

S2, Hre = 0 and [Sz, Hre] = 0 .

(5.3)

Actually, Hre also commutes with the individual spins s1 and s2 but we chose eigenfunctions of S to antisymmetrise the wavefunctions, as in helium—the spin eigenstates for two electrons are ψsApin and ψsSpin for S = 0 and 1, respectively.4 The quantum numbers L, ML, S and MS have well-deﬁned values in this Russell–Saunders or LS-coupling scheme.
Thus the eigenstates of Hre are |LMLSMS . In the LS-coupling scheme the energy levels labelled by L and S are called terms (and there is degeneracy with respect to ML and MS). We saw examples of 1L and 3L terms for the 1snl conﬁgurations in helium where the LS-coupling
scheme is a very good approximation. A more complex example is an
npn p conﬁguration, e.g. 3p4p in silicon, that has six terms as follows:

l1 = 1, l2 = 1 ⇒ L = 0, 1 or 2 ,

1

1

s1

=

, 2

s2 = 2

⇒ S = 0 or 1 ;

terms: 2S+1L = 1S, 1P, 1D, 3S, 3P, 3D .

Fig. 5.1 The residual electrostatic interaction causes l1 and l2 to precess around their resultant L = l1 + l2.
3The proof is straightforward for the quantum operator: Lz = l1z + l2z since ml1 = q always occurs with ml2 = −q in eqn 3.30.
4The Hamiltonian H commutes with the exchange (or swap) operator Xij that interchanges the labels of the particles i ↔ j; thus states that are simultaneously eigenfunctions of both operators exist. This is obviously true for the Hamiltonian of the helium atom in eqn 3.1 (which looks the same if 1 ↔ 2), but it also holds for eqn 5.1. In general, swapping particles with the same mass and charge does not change the Hamiltonian for the electrostatic interactions of a system.

The direct and exchange integrals that determine the energies of these terms are complicated to evaluate (see Woodgate (1980) for details) and here we shall simply make some empirical observations based on the terms diagrams in Figs 5.2 and 5.3. The (2l1 + 1) (2l2 + 1) = 9 degenerate states of orbital angular momentum become the 1 + 3 + 5 = 9 states of ML associated with the S, P and D terms, respectively. As in helium, linear combinations of the four degenerate spin states lead to triplet and one-
 singlet terms but, unlike helium, triplets do not necessarily lie below singlets. Also, the 3p2 conﬁguration has fewer terms than the 3p4p conﬁguration for equivalent electrons, because of the Pauli exclusion principle (see Exercise 5.6).
In the special case of ground conﬁgurations of equivalent electrons the spin and orbital angular momentum of the lowest-energy term follow some empirical rules, called Hund’s rules: the lowest-energy term has the largest value of S consistent with the Pauli exclusion principle.5 If

5Two electrons cannot both have the same set of quantum numbers.

82 The LS-coupling scheme

6.4

6.3

6.2

Fig. 5.2 The terms of the 3p4p conﬁgu-

ration in silicon all lie about 6 eV above

6.1

the ground state. The residual electro-

static interaction leads to energy dif-

ferences of ∼ 0.2 eV between the terms,

6.0

and the ﬁne-structure splitting is an or-

der of magnitude smaller, as indicated

5.9

for the 3P and 3D terms. This structure

is well described by the LS-coupling

scheme.

5.8

2.0

1.8

1.6

1.4

1.2

1.0

0.8

0.6

Fig. 5.3 The energies of terms of the

3p2 conﬁguration of silicon. For equivalent electrons the Pauli exclusion prin-

0.4

ciple restricts the number of terms—

there are only three compared to the

0.2

six in Fig. 5.2. The lowest-energy term

is 3P, in accordance with Hund’s rules,

and this is the ground state of silicon

0.0

atoms.

6Hund’s rules are so commonly misapplied that it is worth spelling out that they only apply to the lowest term of the ground conﬁguration for cases where there is only one incomplete subshell.
7The large total spin has important consequences for magnetism (Blundell 2001).

there are several such terms then the one with the largest L is lowest. The lowest term in Fig. 5.3 is consistent with these rules;6 the rule says
nothing about the ordering of the other terms (or about any of the
terms in Fig. 5.2). Conﬁgurations of equivalent electrons are especially
important since they occur in the ground conﬁguration of elements in the periodic table, e.g. for the 3d6 conﬁguration in iron, Hund’s rules give the lowest term as 5D (see Exercise 5.6).7

5.1 Fine structure in the LS-coupling scheme 83

5.1 Fine structure in the LS-coupling scheme

Fine structure arises from the spin–orbit interaction for each of the unpaired electrons given by the Hamiltonian

Hs−o = β1s1 · l1 + β2s2 · l2 .

For atoms with two valence electrons Hs−o acts as a perturbation on the states |LMLSMS . In the vector model, this interaction between the spin and orbital angular momentum causes L and S to change di-
rection, so that neither Lz nor Sz remains constant; but the total electronic angular momentum J = L + S, and its z-component Jz, are both constant because no external torque acts on the atom. We shall now
evaluate the eﬀect of the perturbation Hs−o on a term using the vector model. In the vector-model description of the LS-coupling scheme,
l1 and l2 precess around L, as shown in Fig. 5.4; the components perpendicular to this ﬁxed direction average to zero (over time) so that
only the component of these vectors along L needs to be considered, e.g. l1→ l1 · L / |L|2 L. The time average l1 · L in the vector model becomes the expectation value l1 · L in quantum mechanics; also we have to use L(L + 1) for the magnitude-squared of the vector. Applying
the same projection procedure to the spins leads to

Hs−o

=

β1

S

s1 (S

·S S + 1)

·

L

l1 · L L (L + 1)

+

β2

S

s2 (S

·S S + 1)

·

L

l2 · L L (L + 1)

= βLS S · L .

(5.4)

The derivation of this equation by the vector model that argues by
analogy with classical vectors can be fully justiﬁed by reference to the theory of angular momentum. It can be shown that, in the basis |J MJ of the eigenstates of a general angular momentum operator J and its
component Jz, the matrix elements of any vector operator V are proportional to those of J, i.e. J MJ | V |J MJ = c J MJ | J |J MJ .8 Figure 5.5 gives a pictorial representation of why it is only the component of
V along J that is well deﬁned. We want to apply this result to the case where V = l1 or l2 in the basis of eigenstates |L ML , and analogously for the spins. For L ML| l1 |L ML = c L ML| L |L ML the constant c is determined by taking the dot product of both sides with L to give

c = L ML| l1 · L |L ML ; L ML| L · L |L ML

hence

L ML| l1 |L ML

= l1 · L L(L + 1)

L ML| L |L ML

.

(5.5)

This is an example of the projection theorem and can also be applied to l2 and to s1 and s2 in the basis of eigenstates |S MS . It is clear that, for diagonal matrix elements, these quantum mechanical results give the same result of the vector model.

Fig. 5.4 In the LS-coupling scheme the orbital angular momenta of the two electrons couple to give total angular momentum L = l1 + l2. In the vector model l1 and l2 precess around L; similarly, s1 and s2 precess around S. L and S precess around the total angular momentum J (but more slowly than the precession of l1 and l2 around L because the spin–orbit interaction is ‘weaker’ than the residual electrostatic interaction).
8This is particular case of a more general result called the Wigner– Eckart theorem which is the cornerstone of the theory of angular momentum. This powerful theorem also applies to oﬀ-diagonal elements such as J MJ | V J MJ , and to more complicated operators such as those for quadrupole moments. It is used extensively in advanced atomic physics— see the ‘Further reading’ section in this chapter.
Fig. 5.5 A pictorial representation of the project theorem for an atom, where J deﬁnes the axis of the system.

84 The LS-coupling scheme

Equation 5.4 has the same form as the spin–orbit interaction for the single-electron case but with capital letters rather than s·l. The constant βLS that gives the spin–orbit interaction for each term is related to that for the individual electrons (see Exercise 5.2). The energy shift is

Es−o = βLS S · L .

(5.6)

9Similarly, in the one-electron case we
found the ﬁne structure without deter-
mining the eigenstates |lsjmj explicitly in terms of the Yl,m and spin functions.

To ﬁnd this energy we need to evaluate the expectation value of the operator L · S = (J · J − L · L − S · S) /2 for each term 2S+1L. Each

term has (2S + 1) (2L + 1) degenerate states. Any linear combination

of these states is also an eigenstate with the same electrostatic energy

and we can use this freedom to choose suitable eigenstates and make the

calculation of the (magnetic) spin–orbit interaction straightforward. We

shall use the states |LSJMJ ; these are linear combinations of the basis

states |LMLSMS but we do not need to determine their exact form to

ﬁnd the eigenenergies.9 Evaluation of eqn 5.6 with the states |LSJMJ

gives

Es−o

=

βLS 2

{J

(J

+ 1) − L (L

+ 1) − S (S

+

1) } .

(5.7)

Thus the energy interval between adjacent J levels is

Fig. 5.6 The ﬁne structure of a 3P term obeys the interval rule.
10In classical mechanics the word ‘coupling’ is commonly used more loosely, e.g. for coupled pendulums, or coupled oscillators, the ‘coupling between them’ is taken to mean the ‘interaction between them’ that leads to their motions being coupled. (This coupling may take the form of a physical linkage such as a rod or spring between the two systems.)

∆EFS = EJ − EJ−1 = βLS J .

(5.8)

This is called the interval rule. For example, a 3P term (L = 1 = S) has three J levels: 2S+1LJ = 3P0, 3P1, 3P2 (see Fig. 5.6); and the separation between J = 2 and J = 1 is twice that between J = 1 and J = 0. The existence of an interval rule in the ﬁne structure of a two-electron system generally indicates that the LS-coupling scheme is a good approximation (see the ‘Exercises’ in this chapter); however, the converse is not true. The LS-coupling scheme gives a very accurate description of the en-
ergy levels of helium but the ﬁne structure does not exhibit an interval rule (see Example 5.2 later in this chapter).
It is important not to confuse LS-coupling (or Russell–Saunders coupling) with the interaction between L and S given by βLS S · L. In this book the word interaction is used for real physical eﬀects described by a Hamiltonian and coupling refers to the forming of linear-combination wavefunctions that are eigenstates of angular momentum operators, e.g. eigenstates of L and S. The LS-coupling scheme breaks down as the strength of the interaction βLS S · L increases relative to that of Hre.10

5.2 The jj-coupling scheme

11Es−o ∼ βLS and Ere is comparable to the exchange integral.

To calculate the ﬁne structure in the LS-coupling scheme we treated the spin–orbit interaction as a perturbation on a term, 2S+1L. This is valid when Ere Es−o, which is generally true in light atoms.11 The spin– orbit interaction increases with atomic number (eqn 4.13) so that it can
be similar to Ere for heavy atoms—see Fig. 5.7. However, it is only in cases with particularly small exchange integrals that Es−o exceeds Ere, so that the spin–orbit interaction must be considered before the residual

Energy (eV) 102

5.2 The jj-coupling scheme 85

10

1 He
10−1
10−2
10−3
10−4 H
10−5 1 H He

Hg Mg
Cs

Na

Gross structure Residual electrostatic energy Fine structure

10 Mg
Na

100 Cs Hg

Fig. 5.7 A plot of typical energies as a function of the atomic number Z (on logarithmic scales). A characteristic energy for the gross structure is taken as the energy required to excite an electron from the ground state to the ﬁrst excited state—this is less than the ionization energy but has a similar variation with Z. The residual electrostatic interaction is the singlet–triplet separation of the lowest excited conﬁguration in some atoms with two valence electrons. The ﬁne structure is the spl-
itting of the lowest p conﬁguration. For all cases the plotted energies are fairly close to the maximum for that type of structure in neutral atoms—higherlying conﬁgurations have smaller values.

electrostatic interaction. When Hs−o acts directly on a conﬁguration it causes the l and s of each individual electron to be coupled together to
give j1 = l1 + s1 and j2 = l2 + s2; in the vector model this corresponds to l and s precessing around j independently of the other electrons.
In this jj-coupling scheme each valence electron acts on its own, as
in alkali atoms. For an sp conﬁguration the s-electron can only have
j1 = 1/2 and the p-electron has j2 = 1/2 or 3/2; so there are two levels, denoted by (j1, j2) = (1/2, 1/2) and (1/2, 3/2). The residual electrostatic interaction acts as a perturbation on the jj-coupled levels;
it causes the angular momenta of the electrons to be coupled to give
total angular momentum J = j1 + j2 (as illustrated in Fig. 5.8). Since there is no external torque on the atom, MJ is also a good quantum number. For an sp conﬁguration there are pairs of J levels for each of the
two original jj-coupled levels, e.g. (j1, j2)J = (1/2, 1/2)0 , (1/2, 1/2)1 and (1/2, 3/2)1 , (1/2, 3/2)2. This doublet structure, shown in Fig. 5.10, contrasts with the singlets and triplets in the LS-coupling scheme.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:43.510Z
- **Text Length:** 252179 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
