# PDF Document: Sakurai and Napolitano - 2020 - Modern Quantum Mechanics.pdf

**File Path:** Sakurai and Napolitano - 2020 - Modern Quantum Mechanics.pdf

**Processed Date:** 2026-02-10T18:13:50.425Z

**File Size:** 6624.39 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 1388

**Title:** Modern Quantum Mechanics

**Collection:** Courses > Quantum Mechanics

---

## Extracted Text Content

Cambridge University Press 978-1-108-47322-4 — Modern Quantum Mechanics Jun John Sakurai , Jim Napolitano Frontmatter More Information
Modern Quantum Mechanics
Modern Quantum Mechanics is a classic graduate level textbook, covering the main quantum mechanics concepts in a clear, organized, and engaging manner. The original author, J. J. Sakurai, was a renowned theorist in particle theory. The Third Edition, revised by Jim Napolitano, introduces topics that extend the text’s usefulness into the twenty-ﬁrst century such as advanced mathematical techniques associated with quantum-mechanical calculations, while at the same time retaining classic developments-
 such as neutron interferometer experiments, Feynman path integrals, correlation measurements, and Bell’s inequality. A solution manual for instructors using this textbook can be downloaded from www.cambridge.org/sakurai3.
J. J. Sakurai was a noted theorist in particle physics and Professor of Physics at UCLA (1970–1982) and University of Chicago (1964–1970). He received his Ph.D. from Cornell University in 1958. He contributed greatly to the ﬁeld of particle physics before passing away at the age of 49 in 1982, while he was visiting CERN in Geneva.
In addition he held visiting staff appointments at the California Institute of Technology, Universities of Tokyo and Nagoya, University of Paris d’Orsay, Scuola Normale Superiore at Pisa, Stanford Linear Accelerator, CERN at Geneva, and Max Planck Institute at Munich. He was a Sloan Fellow (1962–1966), Fellow of the American Physical Society (1964–1982), a Guggenheim Fellow (1975–1976) and a von Humboldt Fellow (1981– 1982).
Jim Napolitano is Professor of Physics and Department Chair at the College of Science and Technology, Temple University. He is an experimental nuclear physicist, with over 320 articles published in refereed journals and an h-index of 81. He shared in the 2016 Breakthrough Prize in Fundamental Physics and currently works on experiments using parity-violating electron scattering. An innovative educator, he has developed coursework and curricula at Rensselaer Polytechnic Institute and Temple Universi-
ty. In all cases, his teaching and instructional development make use of modern techniques. Professor Napolitano has also published textbooks on quantum mechanics, experimental physics, and using MATHEMATICA for physics.

© in this web service Cambridge University Press

www.cambridge.org

Cambridge University Press 978-1-108-47322-4 — Modern Quantum Mechanics Jun John Sakurai , Jim Napolitano Frontmatter More Information
Modern Quantum Mechanics
Third Edition
J. J. SAKURAI JIM NAPOLITANO
Temple University, Philadelphia, PA

© in this web service Cambridge University Press

www.cambridge.org

Cambridge University Press 978-1-108-47322-4 — Modern Quantum Mechanics Jun John Sakurai , Jim Napolitano Frontmatter More Information
University Printing House, Cambridge CB2 8BS, United Kingdom One Liberty Plaza, 20th Floor, New York, NY 10006, USA
477 Williamstown Road, Port Melbourne, VIC 3207, Australia 314–321, 3rd Floor, Plot 3, Splendor Forum, Jasola District Centre, New Delhi – 110025, India
79 Anson Road, #06–04/06, Singapore 079906
Cambridge University Press is part of the University of Cambridge. It furthers the University’s mission by disseminating knowledge in the pursuit of education, learning, and research at the highest international levels of excellence.
www.cambridge.org Information on this title: www.cambridge.org/9781108473224
DOI: 10.1017/9781108587280 © Cambridge University Press 2021 This publication is in copyright. Subject to statutory exception and to the provisions of relevant collective licensing agreements, no reproduction of any part may take place without the written permission of Cambridge University Press.
First published 2021 Printed in the United Kingdom by TJ International Ltd, Padstow Cornwall A catalogue record for this publication is available from the British Library.
ISBN 978-1-108-47322-4 Hardback Additional resources for this publication at www.cambridge.org/sakurai3. Cambridge University Press has no responsibility for the persistence or accuracy of URLs for external or third-party internet websites referred to in this publication and does not guarantee that any content on such websites is, or will remain,
accurate or appropriate.

© in this web service Cambridge University Press

www.cambridge.org

Cambridge University Press 978-1-108-47322-4 — Modern Quantum Mechanics Jun John Sakurai , Jim Napolitano Frontmatter More Information

Contents

Preface Preface to the Revised First Edition In Memoriam to J. J. Sakurai Foreword from the First Edition

1 Fundamental Concepts

1.1 The Stern–Gerlach Experiment

1.1.1 Description of the Experiment

1.1.2 Sequential Stern–Gerlach Experiments

1.1.3 Analogy with Polarization of Light

1.2 Kets, Bras, and Operators

1.2.1 Ket Space

1.2.2 Bra Space and Inner Products

1.2.3 Operators

1.2.4 Multiplication

1.2.5 The Associative Axiom

1.3 Base Kets and Matrix Representations

1.3.1 Eigenkets of an Observable

1.3.2 Eigenkets as Base Kets

1.3.3 Matrix Representations

1.3.4

Spin

1 2

Systems

1.4 Measurements, Observables, and the Uncertainty Relations

1.4.1 Measurements

1.4.2

Spin

1 2

Systems,

Once

Again

1.4.3 Compatible Observables

1.4.4 Incompatible Observables

1.4.5 The Uncertainty Relation

1.5 Change of Basis

1.5.1 Transformation Operator

1.5.2 Transformation Matrix

1.5.3 Diagonalization

1.5.4 Unitary Equivalent Observables

1.6 Position, Momentum, and Translation

1.6.1 Continuous Spectra

1.6.2 Position Eigenkets and Position Measurements

1.6.3 Translation

v

page xiii xvii xix xxi
1 1 2 4 6 10 10 12 13 14 15 16 16 17 18 21 22 22 24 27 29 31 33 33 34 35 36 37 37 38 40

© in this web service Cambridge University Press

www.cambridge.org

Cambridge University Press 978-1-108-47322-4 — Modern Quantum Mechanics Jun John Sakurai , Jim Napolitano Frontmatter More Information

vi

Contents

1.6.4 Momentum as a Generator of Translation

42

1.6.5 The Canonical Commutation Relations

45

1.7 Wave Functions in Position and Momentum Space

47

1.7.1 Position-Space Wave Function

47

1.7.2 Momentum Operator in the Position Basis

49

1.7.3 Momentum-Space Wave Function

49

1.7.4 Gaussian Wave Packets

51

1.7.5 Generalization to Three Dimensions

53

Problems

54

2 Quantum Dynamics

62

2.1 Time Evolution and the Schro¨dinger Equation

62

2.1.1 Time-Evolution Operator

62

2.1.2 The Schro¨dinger Equation

65

2.1.3 Energy Eigenkets

67

2.1.4 Time Dependence of Expectation Values

68

2.1.5 Spin Precession

69

2.1.6 Neutrino Oscillations

71

2.1.7 Correlation Amplitude and the Energy-Time Uncertainty Relation 74

2.2 The Schro¨dinger Versus the Heisenberg Picture

75

2.2.1 Unitary Operators

75

2.2.2 State Kets and Observables in the Schro¨dinger and the

Heisenberg Pictures

77

2.2.3 The Heisenberg Equation of Motion

78

2.2.4 Free Particles: Ehrenfest’s Theorem

79

2.2.5 Base Kets and Transition Amplitudes

81

2.3 Simple Harmonic Oscillator

83

2.3.1 Energy Eigenkets and Energy Eigenvalues

83

2.3.2 Time Development of the Oscillator

88

2.4 Schro¨dinger’s Wave Equation

91

2.4.1 Time-Dependent Wave Equation

91

2.4.2 The Time-Independent Wave Equation

92

2.4.3 Interpretations of the Wave Function

94

2.4.4 The Classical Limit

96

2.5 Elementary Solutions to Schro¨dinger’s Wave Equation

97

2.5.1 Free Particle in Three Dimensions

97

2.5.2 The Simple Harmonic Oscillator

99

2.5.3 The Linear Potential

101

2.5.4 The WKB (Semiclassical) Approximation

104

2.6 Propagators and Feynman Path Integrals

108

2.6.1 Propagators in Wave Mechanics

108

2.6.2 Propagator as a Transition Amplitude

112

2.6.3 Path Integrals as the Sum over Paths

114

© in this web service Cambridge University Press

www.cambridge.org

Cambridge University Press 978-1-108-47322-4 — Modern Quantum Mechanics Jun John Sakurai , Jim Napolitano Frontmatter More Information

vii

Contents

2.6.4 Feynman’s Formulation

115

2.7 Potentials and Gauge Transformations

120

2.7.1 Constant Potentials

120

2.7.2 Gravity in Quantum Mechanics

122

2.7.3 Gauge Transformations in Electromagnetism

126

2.7.4 The Aharonov–Bohm Effect

131

2.7.5 Magnetic Monopole

135

Problems

138

3 Theory of Angular Momentum

149

3.1 Rotations and Angular Momentum Commutation Relations

149

3.1.1 Finite Versus Inﬁnitesimal Rotations

149

3.1.2 Inﬁnitesimal Rotations in Quantum Mechanics

152

3.1.3 Finite Rotations in Quantum Mechanics

153

3.1.4 Commutation Relations for Angular Momentum

154

3.2

Spin

1 2

Systems

and

Finite

Rotations

155

3.2.1

Rotation

Operator

for

Spin

1 2

155

3.2.2 Spin Precession Revisited

157

3.2.3 Neutron Interferometry Experiment to Study 2π Rotations

158

3.2.4 Pauli Two-Component Formalism

159

3.2.5 Rotations in the Two-Component Formalism

161

3.3 SO(3), SU(2), and Euler Rotations

163

3.3.1 Orthogonal Group

163

3.3.2 Unitary Unimodular Group

164

3.3.3 Euler Rotations

166

3.4 Density Operators and Pure Versus Mixed Ensembles

169

3.4.1 Polarized Versus Unpolarized Beams

169

3.4.2 Ensemble Averages and Density Operator

170

3.4.3 Time Evolution of Ensembles

175

3.4.4 Continuum Generalizations

176

3.4.5 Quantum Statistical Mechanics

176

3.5 Eigenvalues and Eigenstates of Angular Momentum

180

3.5.1 Commutation Relations and the Ladder Operators

180

3.5.2 Eigenvalues of J2 and Jz

182

3.5.3 Matrix Elements of Angular-Momentum Operators

184

3.5.4 Representations of the Rotation Operator

185

3.6 Orbital Angular Momentum

188

3.6.1 Orbital Angular Momentum as Rotation Generator

188

3.6.2 Spherical Harmonics

191

3.6.3 Spherical Harmonics as Rotation Matrices

194

3.7 Schro¨dinger’s Equation for Central Potentials

195

3.7.1 The Radial Equation

196

3.7.2 The Free Particle and Inﬁnite Spherical Well

198

© in this web service Cambridge University Press

www.cambridge.org

Cambridge University Press 978-1-108-47322-4 — Modern Quantum Mechanics Jun John Sakurai , Jim Napolitano Frontmatter More Information

viii

Contents

3.7.3 The Isotropic Harmonic Oscillator

199

3.7.4 The Coulomb Potential

201

3.8 Addition of Angular Momenta

205

3.8.1 Simple Examples of Angular-Momentum Addition

205

3.8.2 Formal Theory of Angular-Momentum Addition

208

3.8.3 Recursion Relations for the Clebsch–Gordan Coefﬁcients

212

3.8.4 Clebsch–Gordan Coefﬁcients and Rotation Matrices

216

3.9 Schwinger’s Oscillator Model of Angular Momentum

218

3.9.1 Angular Momentum and Uncoupled Oscillators

218

3.9.2 Explicit Formula for Rotation Matrices

222

3.10 Spin Correlation Measurements and Bell’s Inequality

224

3.10.1 Correlations in Spin-Singlet States

224

3.10.2 Einstein’s Locality Principle and Bell’s Inequality

226

3.10.3 Quantum Mechanics and Bell’s Inequality

229

3.11 Tensor Operators

231

3.11.1 Vector Operator

231

3.11.2 Cartesian Tensors Versus Irreducible Tensors

233

3.11.3 Product of Tensors

235

3.11.4 Matrix Elements of Tensor Operators; the Wigner–Eckart

Theorem

236

Problems

240

4 Symmetry in Quantum Mechanics

249

4.1 Symmetries, Conservation Laws, and Degeneracies

249

4.1.1 Symmetries in Classical Physics

249

4.1.2 Symmetry in Quantum Mechanics

250

4.1.3 Degeneracies

251

4.1.4 SO(4) Symmetry in the Coulomb Potential

252

4.2 Discrete Symmetries, Parity, or Space Inversion

256

4.2.1 Wave Functions under Parity

258

4.2.2 Symmetrical Double-Well Potential

261

4.2.3 Parity-Selection Rule

263

4.2.4 Parity Nonconservation

264

4.3 Lattice Translation as a Discrete Symmetry

265

4.4 The Time-Reversal Discrete Symmetry

270

4.4.1 Digression on Symmetry Operations

272

4.4.2 Time-Reversal Operator

275

4.4.3 Wave Function

279

4.4.4

Time

Reversal

for

a

Spin

1 2

System

280

4.4.5 Interactions with Electric and Magnetic Fields; Kramers

Degeneracy

283

Problems

285

© in this web service Cambridge University Press

www.cambridge.org

Cambridge University Press 978-1-108-47322-4 — Modern Quantum Mechanics Jun John Sakurai , Jim Napolitano Frontmatter More Information

ix

Contents

5 Approximation Methods

288

5.1 Time-Independent Perturbation Theory: Nondegenerate Case

288

5.1.1 Statement of the Problem

288

5.1.2 The Two-State Problem

289

5.1.3 Formal Development of Perturbation Expansion

291

5.1.4 Wave Function Renormalization

295

5.1.5 Elementary Examples

296

5.2 Time-Independent Perturbation Theory: The Degenerate Case

300

5.2.1 Linear Stark Effect

303

5.3 Hydrogenlike Atoms: Fine Structure and the Zeeman Effect

305

5.3.1 The Relativistic Correction to the Kinetic Energy

305

5.3.2 Spin-Orbit Interaction and Fine Structure

307

5.3.3 The Zeeman Effect

311

5.3.4 Van der Waals’ Interaction

314

5.4 Variational Methods

316

5.5 Time-Dependent Potentials: The Interaction Picture

320

5.5.1 Statement of the Problem

320

5.5.2 The Interaction Picture

321

5.5.3 Time-Dependent Two-State Problems: Nuclear Magnetic

Resonance, Masers, and So Forth

323

5.5.4 Spin Magnetic Resonance

325

5.5.5 Maser

326

5.6 Hamiltonians with Extreme Time Dependence

327

5.6.1 Sudden Approximation

328

5.6.2 Adiabatic Approximation

328

5.6.3 Berry’s Phase

331

5.6.4

Example:

Berry’s

Phase

for

Spin

1 2

333

5.6.5 Aharonov–Bohm and Magnetic Monopoles Revisited

335

5.7 Time-Dependent Perturbation Theory

337

5.7.1 Dyson Series

337

5.7.2 Transition Probability

339

5.7.3 Constant Perturbation

341

5.7.4 Harmonic Perturbation

345

5.8 Applications to Interactions with the Classical Radiation Field

347

5.8.1 Absorption and Stimulated Emission

347

5.8.2 Electric Dipole Approximation

348

5.8.3 Photoelectric Effect

350

5.8.4 Spontaneous Emission

352

5.9 Energy Shift and Decay Width

355

Problems

358

6 Scattering Theory

371

6.1 Scattering as a Time-Dependent Perturbation

371

6.1.1 Transition Rates and Cross Sections

373

© in this web service Cambridge University Press

www.cambridge.org

Cambridge University Press 978-1-108-47322-4 — Modern Quantum Mechanics Jun John Sakurai , Jim Napolitano Frontmatter More Information

x

Contents

6.1.2 Solving for the T Matrix

374

6.1.3 Scattering from the Future to the Past

376

6.2 The Scattering Amplitude

376

6.2.1 Wave Packet Description

381

6.2.2 The Optical Theorem

381

6.3 The Born Approximation

384

6.3.1 The Higher-Order Born Approximation

387

6.4 Phase Shifts and Partial Waves

388

6.4.1 Free-Particle States

388

6.4.2 Partial-Wave Expansion

392

6.4.3 Unitarity and Phase Shifts

394

6.4.4 Determination of Phase Shifts

397

6.4.5 Hard-Sphere Scattering

398

6.5 Eikonal Approximation

400

6.5.1 Partial Waves and the Eikonal Approximation

403

6.6 Low-Energy Scattering and Bound States

405

6.6.1 Rectangular Well or Barrier

406

6.6.2 Zero-Energy Scattering and Bound States

408

6.6.3 Bound States as Poles of Sl(k)

410

6.7 Resonance Scattering

412

6.8 Symmetry Considerations in Scattering

416

6.9 Inelastic Electron-Atom Scattering

419

6.9.1 Nuclear Form Factor

423

Problems

424

7 Identical Particles

429

7.1 Permutation Symmetry

429

7.2 Symmetrization Postulate

433

7.3 Two-Electron System

434

7.4 The Helium Atom

437

7.5 Multiparticle States

441

7.6 Density Functional Theory

443

7.6.1 The Energy Functional for a Single Particle

443

7.6.2 The Hohenberg–Kohn Theorem

445

7.6.3 The Kohn–Sham Equations

447

7.6.4 Models of the Exchange-Correlation Energy

450

7.6.5 Application to the Helium Atom

451

7.7 Quantum Fields

454

7.7.1 Second Quantization

454

7.7.2 Dynamical Variables in Second Quantization

456

7.7.3 Example: The Degenerate Electron Gas

460

7.8 Quantization of the Electromagnetic Field

464

7.8.1 Maxwell’s Equations in Free Space

465

© in this web service Cambridge University Press

www.cambridge.org

Cambridge University Press 978-1-108-47322-4 — Modern Quantum Mechanics Jun John Sakurai , Jim Napolitano Frontmatter More Information

xi

Contents

7.8.2 Photons and Energy Quantization

467

7.8.3 The Casimir Effect

468

7.8.4 Concluding Remarks

472

Problems

474

8 Relativistic Quantum Mechanics

478

8.1 Paths to Relativistic Quantum Mechanics

478

8.1.1 Natural Units

479

8.1.2 The Energy of a Free Relativistic Particle

479

8.1.3 The Klein–Gordon Equation

480

8.1.4 An Interpretation of Negative Energies

484

8.1.5 The Klein–Gordon Field

485

8.1.6 Summary: The Klein–Gordon Equation and the Scalar Field

489

8.2 The Dirac Equation

490

8.2.1 The Conserved Current

491

8.2.2 Free-Particle Solutions

493

8.2.3 Interpretation of Negative Energies

494

8.2.4 Electromagnetic Interactions

495

8.3 Symmetries of the Dirac Equation

496

8.3.1 Angular Momentum

497

8.3.2 Parity

497

8.3.3 Charge Conjugation

498

8.3.4 Time Reversal

499

8.3.5 CPT

501

8.4 Solving with a Central Potential

502

8.4.1 The One-Electron Atom

505

8.5 Relativistic Quantum Field Theory

509

Problems

510

Appendix A Electromagnetic Units

514

Appendix B Elementary Solutions to Schrödinger’s Wave Equation

520

Appendix C Hamiltonian for a Charge in an Electromagnetic Field

530

Appendix D Proof of the Angular-Momentum Rule (3.358)

532

Appendix E Finding Clebsch–Gordan Coefficients

534

Appendix F Notes on Complex Variables

535

Bibliography

541

Index

544

© in this web service Cambridge University Press

www.cambridge.org

Preface
This book covers the material on quantum mechanics typically found in a ﬁrst year graduate physics curriculum. The approach emphasizes states, operators, eigenvalues, and representations from the start. Building on these foundations, the reader sees, for example, how the Schro¨dinger representation is just one of several ways to realize quantum dynamics, and how classical physics emerges as an approximation. This approach also helps the reader gain an appreciation of purely quantum-mechanical phen-
omena, for example the magnetic moment and spin of an electron, that have no classical analogue.
The intended audience is the same as for earlier editions, that is, students having taken upper level undergraduate coursework in quantum physics, classical mechanics and electromagnetism, multivariable calculus, and ordinary and partial differential equations.
Professor Jun John Sakurai originally conceived the idea for this textbook, I think inspired by Dirac’s monograph. Sakurai’s life was cut short suddenly, as he was preparing the ﬁrst manuscript. His colleague San Fu Tuan took over as Editor, completing a seven chapter manuscript for Addison-Wesley, who published the First Edition in 1985 and a Revised Edition in 1993. Some time later, I started work on the Second Edition for Pearson (who had since acquired Addison-Wesley). This volume contained a -
lot of new material, including an eighth chapter, and was published in 2010. The text was reissued by Cambridge University Press in 2017, which was also when I started work on the Third Edition.
Quantum mechanics has always fascinated me, but it was the First Edition of Modern Quantum Mechanics that ﬁnally explained to me the logical progression from fundamental assumptions to practical applications, with classical physics emerging as an approximation. When I ﬁrst taught this material at Rensselaer Polytechnic Institute, I used the Revised Edition, but found myself supplementing with my own notes on solutions of the Schro¨dinger equation and other topics. I also tried to use my course to -
prepare students for quantum ﬁeld theory, introducing second quantization and relativistic quantum mechanics, neither of which were included in Sakurai’s book.
I was therefore pleased to be asked to take on the Second Edition. Sections were added to Chapters Two and Three on solutions to the Schro¨dinger equation. I reversed the order of Chapters Six and Seven, so that Scattering Theory came ﬁrst, and I reworked the treatment so that it was based on the formal theory of time-dependent perturbations. The following chapter on Identical Particles was augmented to include second quantization and the quantization of the free electromagnetic ﬁeld, and I added -
a new chapter on Relativistic Quantum Mechanics. I also included several connections throughout the book to experimental measurements, and worked to ﬁx a number of idiosyncrasies that I found when I taught out of the book. xiii

xiv

Preface

The result was a text that, I thought, achieved my goal of a high level treatment respecting Sakurai’s vision, adding reference to additional modern concepts and experiment, and preparing the reader for quantum ﬁeld theory and beyond. The ﬁrst two chapters lay the mathematical and physical foundations for the rest of the book, and connect the reader to undergraduate topics in wave mechanics. Chapter Three covers angular momentum from the perspective of the rotation operator, with strong connection-
s to important concepts such as the density operator, central potentials, and Bell’s inequality. Groups are also introduced here, with further exposition in Chapter Four. Applications to “real world” problems are the focus of Chapters Five and Six, all the while keeping to the focus of building on the fundamentals. Chapters Seven and Eight move the discussion towards the “next” course in quantum mechanics, covering many-body formalism and the inclusion of special relativity.
The Third Edition keeps the same ordering of the eight chapters. Signiﬁcant new material has been added, but I also worked to clarify some of the discussions and to ﬁx various issues that I discovered after teaching out of the Second Edition. In fact, I compiled a long list of “Typographical Errors, Mistakes, and Comments” based on covering nearly the entire book in class, and working through all of the end-of-chapter problems. The Third Edition addresses all of the errors. It also addresses most -
of the comments, having to give up on some only for lack of time.
There are three new sections of new material. Despite its increasing use in condensed matter physics, I found no treatments of density functional theory in any quantum mechanics textbook. So, I added Section 7.6 to introduce the subject and take it through to its application in the helium atom. A reviewer’s suggestion inspired me to add Section 8.1.5 to show how the Klein–Gordon ﬁeld, built using second quantization, ﬁxes the problems of negative energies and nonpositive deﬁnite probability curren-
ts in the Klein–Gordon wave equation. The Second Edition treated spontaneous emission only as an end-ofchapter problem, but Section 5.8.4 now goes through the derivation, with some details and numerical calculations left as problems.
I added new appendices on the Hamiltonian for a Charge in an Electromagnetic Field, Notes on Complex Analysis, and Calculating Clebsch–Gordan Coefﬁcients. The appendix on Electromagnetic Units has been signiﬁcantly revised, and I updated the appendix on Elementary Solutions to Schro¨dinger’s Wave Equation to better connect to the discussions in the text.
Instructors may elect to pick and choose from topics in the book, and not necessarily in the order of presentation. Chapter One should be covered ﬁrst, since it lays down the notation and fundamental assumptions. One could then, for example, take parts of Chapters Three and Four to expand on operators, observables, and symmetries, prior to discussing dynamics in Chapter Two. Many other combinations are possible. Indeed, throughout the book, I have tried to refer to other places in the text where r-
elevant related material is covered or discussed.
As beﬁts a graduate level textbook, the strategy here is to lay down the principles, following up with implications by deduction. Some example calculations are carried through in the text, but the end-of-chapter problems are generally meant to extend the discussion, and not simply practice what was covered. As such, I recommend that

xv

Preface

instructors choose problems, from the text or otherwise, that follow this idea, including connection to experimental measurements, where practical.
In several places in the book, either explicitly or implicitly, computer calculations are necessary to completely follow the arguments or to work the problems. I worked through these using MATHEMATICA, and am happy to share the code with anyone who would like to see it, but any other programming language or application can also be used, of course.

Producing the Second Edition was a long process that would not have been possible without help from many, many people. Colleagues in physics include John Cummings, Jack Fishburn, Joel Giedt, David Hertzog, Barry Holstein, Bob Jaffe, Matthew Kirby, Joe Levinger, Alan Litke, Kam-Biu Luk, Bob McKeown, Harry Nelson, Joe Paki, Murray Peshkin, Olivier Pﬁster, Mike Snow, John Townsend, San Fu Tuan, David Van Baak, Dirk Walecka, and Tony Zee. The people at Addison-Wesley/Pearson who guided me included Ada-
m Black, Ashley Eklund, Deb Greco, Dyan Menezes, John Rogosich, and Jim Smith.
So many others were very helpful to me as I developed the Third Edition. This includes colleagues Kieron Burke, Mark Caprio, Carl Carlson, Benjamin Chandran, Chris Cocuzza, Martha Constantinou, Patrick Fasano, Jeremias Gonzalez, Aaron Kaplan (with special thanks for helping me learn DFT), Toh-Ming Lu, Carl Maes, Andreas Metz, Jerry Miller, Djordje Minic, Adilson Motter, Nick Murphy, Steve Naculich, Celso Nishi, John Perdew, Jon Rosner, and Roland Winkler. I am forever grateful to Simon Capelin at -
Cambridge University Press, for ﬁrst bringing to me the possibility of republishing the Second Edition, and encouraging me to consider a Third Edition. Other key people at CUP include Jane Adams, Nick Gibbons, Lisa Pinto, and Ilaria Tassistro.
I can only offer my sincere apologies to people I should have listed, but whose name doesn’t appear because I’ve been careless with note keeping. There are also the very many people who, over the past several years, offered comments, some of which I’ve not been able to incorporate.
Finally, I give a special acknowledgement for Stuart Freedman, my mentor, colleague, and friend. Stuart’s Ph.D. thesis experiment was the ﬁrst veriﬁcation of the violation of Bell’s inequality, and he used this to stoke my interest in quantum mechanics. His guidance during my years as a graduate student and young scientist shaped my career, and he remained my friend and counselor until his untimely passing.
Jim Napolitano Philadelphia, PA

Preface to the Revised First Edition
Since 1989 the Editor has enthusiastically pursued a revised edition of Modern Quantum Mechanics by his late great friend J. J. Sakurai, in order to extend this text’s usefulness into the twenty-ﬁrst century. Much consultation took place with the panel of Sakurai friends who helped with the original edition, but in particular with Professor Yasuo Hara of Tsukuba University and Professor Akio Sakurai of Kyoto Sangyo University in Japan.
This book is intended for the ﬁrst year graduate student who has studied quantum mechanics at the junior or senior level. It does not provide an introduction to quantum mechanics for the beginner. The reader should have had some experience in solving timedependent and time-independent wave equations. A familiarity with the time evolution of the Gaussian wave packet in a force-free region is assumed, as is the ability to solve one-dimensional transmission-reﬂection problems. Some of the general pro-
perties of the energy eigenfunctions and the energy eigenvalues should also be known to the student who uses this text.
The major motivation for this project is to revise the main text. There are three important additions and/or changes to the revised edition, which otherwise preserves the original version unchanged. These include a reworking of certain portions of Section 5.2 on time-independent perturbation theory for the degenerate case by Professor Kenneth Johnson of M.I.T., taking into account a subtle point that has not been properly treated by a number of texts on quantum mechanics in this country. Professor-
 Roger Newton of Indiana University contributed reﬁnements on lifetime broadening in Stark effect, additional explanations of phase shifts at resonances, the optical theorem, and on nonnormalizable state. These appear as “remarks by the editor” or “editor’s note” in the revised edition. Professor Thomas Fulton of the Johns Hopkins University reworked his Coulomb Scattering contribution (Section 7.13) so that it now appears as a shorter text portion emphasizing the physics, with the mathematical de-
tails relegated to Appendix C.
Though not a major part of the text, some additions were deemed necessary to take into account developments in quantum mechanics that have become prominent since November 1, 1982. To this end, two supplements are included at the end of the text. Supplement I is on adiabatic change and geometrical phase (popularized by M. V. Berry since 1983) and is actually an English translation of the supplement on this subject written by Professor Akio Sakurai for the Japanese version of Modern Quantum Mechanic-
s (copyright © YoshiokaShoten Publishing of Kyoto). Supplement II is on non-exponential decays written by my colleague here, Professor Xerxes Tata, and read over by Professor E. C. G. Sudarshan of the University of Texas at Austin. Though non-exponential decays have a long history theoretically, experimental work on transition rates that tests indirectly such decays was done only in 1990. Introduction of additional material is of course a subjective matter on xvii

xviii

Preface to the Revised First Edition

the part of the Editor; the readers will evaluate for themselves its appropriateness. Thanks to Professor Akio Sakurai, the revised edition has been “ﬁnely toothcombed” for misprint errors of the ﬁrst ten printings of the original edition. My colleague, Professor Sandip Pakvasa, provided overall guidance and encouragement to me throughout this process of revision.
In addition to the acknowledgments above, my former students Li Ping, Shi Xiaohong, and Yasunaga Suzuki provided the sounding board for ideas on the revised edition when taking my graduate quantum mechanics course at the University of Hawaii during the spring of 1992. Suzuki provided the initial translation from Japanese of Supplement I as a course term paper. Dr. Andy Acker provided me with computer graphic assistance. The Department of Physics and Astronomy and particularly the High Energy Physi-
cs Group of the University of Hawaii at Manoa provided again both the facilities and a conducive atmosphere for me to carry out my editorial task. Finally I wish to express my gratitude to Physics (and sponsoring) Senior Editor, Stuart Johnson, and his Editorial Assistant, Jennifer Duggan, as well as Senior Production Coordinator Amy Willcutt, of Addison-Wesley for their encouragement and optimism that the revised edition will indeed materialize.
San Fu TUAN Honolulu, Hawaii

Cambridge University Press 978-1-108-47322-4 — Modern Quantum Mechanics Jun John Sakurai , Jim Napolitano Frontmatter More Information

In Memoriam to J. J. Sakurai
Jun John Sakurai was born in 1933 in Tokyo and came to the United States as a high school student in 1949. He studied at Harvard and at Cornell, where he received his Ph.D. in 1958. He was then appointed assistant professor of Physics at the University of Chicago, and became a full professor in 1964. He stayed at Chicago until 1970 when he moved to the University of California at Los Angeles, where he remained until his death. During his lifetime he wrote 119 articles in theoretical physics of ele-
mentary particles as well as several books and monographs on both quantum and particle theory.
The discipline of theoretical physics has as its principal aim the formulation of theoretical descriptions of the physical world that are at once concise and comprehensive. Because nature is subtle and complex, the pursuit of theoretical physics requires bold and enthusiastic ventures to the frontiers of newly discovered phenomena. This is an area in which Sakurai reigned supreme with his uncanny physical insight and intuition and also his ability to explain these phenomena in illuminating physica-
l terms to the unsophisticated. One has but to read his very lucid textbooks on Invariance Principles and Elementary Particles and Advanced Quantum Mechanics as well as his reviews and summer school lectures to appreciate this. Without exaggeration I could say that much of what I did understand in particle physics came from these and from his articles and private tutoring.
When Sakurai was still a graduate student, he proposed what is now known as the V-A theory of weak interactions, independently of (and simultaneously with) Richard Feynman, Murray Gell-Mann, Robert Marshak, and George Sudarshan. In 1960 he published in Annals of Physics a prophetic paper, probably his single most important one. It was concerned with the ﬁrst serious attempt to construct a theory of strong interactions based on Abelian and non-Abelian (Yang–Mills) gauge invariance. This seminal wor-
k induced theorists to attempt an understanding of the mechanisms of mass generation for gauge (vector) ﬁelds, now realized as the Higgs mechanism. Above all it stimulated the search for a realistic uniﬁcation of forces under the gauge principle, now crowned with success in the celebrated Glashow–Weinberg–Salam uniﬁcation of weak and electromagnetic forces. On the phenomenological side, Sakurai pursued and vigorously advocated the vector mesons dominance model of hadron dynamics. He was the ﬁrst t-
o discuss the mixing of ω and φ meson states. Indeed, he made numerous important contributions to particle physics phenomenology in a much more general sense, as his heart was always close to experimental activities.
I knew Jun John for more than 25 years, and I had the greatest admiration not only for his immense powers as a theoretical physicist but also for the warmth and generosity of his spirit. Though a graduate student himself at Cornell during 1957–1958, he took time from his own pioneering research in K-nucleon dispersion relations to help me xix

© in this web service Cambridge University Press

www.cambridge.org

Cambridge University Press 978-1-108-47322-4 — Modern Quantum Mechanics Jun John Sakurai , Jim Napolitano Frontmatter More Information

xx

In Memoriam to J. J. Sakurai

(via extensive correspondence) with my Ph.D. thesis on the same subject at Berkeley. Both Sandip Pakvasa and I were privileged to be associated with one of his last papers on weak couplings of heavy quarks, which displayed once more his infectious and intuitive style of doing physics. It is of course gratifying to us in retrospect that Jun John counted this paper among the score of his published works that he particularly enjoyed.
The physics community suffered a great loss at Jun John Sakurai’s death. The personal sense of loss is a severe one for me. Hence I am profoundly thankful for the opportunity to edit and complete his manuscript on Modern Quantum Mechanics for publication. In my faith no greater gift can be given me than an opportunity to show my respect and love for Jun John through meaningful service.
San Fu Tuan (From the First Edition)

© in this web service Cambridge University Press

www.cambridge.org

Foreword from the First Edition
J. J. Sakurai was always a very welcome guest here at CERN, for he was one of those rare theorists to whom the experimental facts are even more interesting than the theoretical game itself. Nevertheless, he delighted in theoretical physics and in its teaching, a subject on which he held strong opinions. He thought that much theoretical physics teaching was both too narrow and too remote from application: “. . .we see a number of sophisticated, yet uneducated, theoreticians who are conversant in th-
e LSZ formalism of the Heisenberg ﬁeld operators, but do not know why an excited atom radiates, or are ignorant of the quantum theoretic derivation of Rayleigh’s law that accounts for the blueness of the sky.” And he insisted that the student must be able to use what has been taught: “The reader who has read the book but cannot do the exercises has learned nothing.”
He put these principles to work in his ﬁne book Advanced Quantum Mechanics (1967) and in Invariance Principles and Elementary Particles (1964), both of which have been very much used in the CERN library. This new book, Modern Quantum Mechanics, should be used even more, by a larger and less specialized group. The book combines breadth of interest with a thorough practicality. Its readers will ﬁnd here what they need to know, with a sustained and successful effort to make it intelligible.
J. J. Sakurai’s sudden death on November 1, 1982 left this book unﬁnished. Reinhold Bertlmann and I helped Mrs. Sakurai sort out her husband’s papers at CERN. Among them we found a rough, handwritten version of most of the book and a large collection of exercises. Though only three chapters had been completely ﬁnished, it was clear that the bulk of the creative work had been done. It was also clear that much work remained to ﬁll in gaps, polish the writing, and put the manuscript in order.
That the book is now ﬁnished is due to the determination of Noriko Sakurai and the dedication of San Fu Tuan. Upon her husband’s death, Mrs. Sakurai resolved immediately that his last effort should not go to waste. With great courage and dignity she became the driving force behind the project, overcoming all obstacles and setting the high standards to be maintained. San Fu Tuan willingly gave his time and energy to the editing and completion of Sakurai’s work. Perhaps only others close to the hect-
ic ﬁeld of high-energy theoretical physics can fully appreciate the sacriﬁce involved.
For me personally, J. J. had long been far more than just a particularly distinguished colleague. It saddens me that we will never again laugh together at physics and physicists and life in general, and that he will not see the success of his last work. But I am happy that it has been brought to fruition.
John S. Bell CERN, Geneva
xxi

1

Fundamental Concepts

The revolutionary change in our understanding of microscopic phenomena that took place during the ﬁrst 27 years of the twentieth century is unprecedented in the history of natural sciences. Not only did we witness severe limitations in the validity of classical physics, but we found the alternative theory that replaced the classical physical theories to be far richer in scope and far richer in its range of applicability.
The most traditional way to begin a study of quantum mechanics is to follow the historical developments – Planck’s radiation law, the Einstein–Debye theory of speciﬁc heats, the Bohr atom, de Broglie’s matter waves, and so forth – together with careful analyses of some key experiments such as the Compton effect, the Franck–Hertz experiment, and the Davisson–Germer–Thompson experiment. In that way we may come to appreciate how the physicists in the ﬁrst quarter of the twentieth century were forced -
to abandon, little by little, the cherished concepts of classical physics and how, despite earlier false starts and wrong turns, the great masters – Heisenberg, Schro¨dinger, and Dirac, among others – ﬁnally succeeded in formulating quantum mechanics as we know it today.
However, we do not follow the historical approach in this book. Instead, we start with an example that illustrates, perhaps more than any other example, the inadequacy of classical concepts in a fundamental way. We hope that by exposing the reader to a “shock treatment” at the onset, he or she may be attuned to what we might call the “quantum-mechanical way of thinking” at a very early stage.
This different approach is not merely an academic exercise. Our knowledge of the physical world comes from making assumptions about nature, formulating these assumptions into postulates, deriving predictions from those postulates, and testing those predictions against experiment. If experiment does not agree with the prediction, then, presumably, the original assumptions were incorrect. Our approach emphasizes the fundamental assumptions we make about nature, upon which we have come to base all of-
 our physical laws, and which aim to accommodate profoundly quantum-mechanical observations at the outset.
1.1 The Stern–Gerlach Experiment
The example we concentrate on in this section is the Stern–Gerlach experiment, originally conceived by O. Stern in 1921 and carried out in Frankfurt by him in collaboration with
1

2

Fundamental Concepts

Classical prediction

What was actually observed
N

Silver atoms

S
Furnace

Fig. 1.1 The Stern–Gerlach experiment.

Inhomogeneous magnetic field

W. Gerlach in 1922.1 This experiment illustrates in a dramatic manner the necessity for a radical departure from the concepts of classical mechanics. In the subsequent sections the basic formalism of quantum mechanics is presented in a somewhat axiomatic manner but always with the example of the Stern–Gerlach experiment in the back of our minds. In a certain sense, a two-state system of the Stern–Gerlach type is the least classical, most quantum-mechanical system. A solid understanding of problems-
 involving two-state systems will turn out to be rewarding to any serious student of quantum mechanics. It is for this reason that we refer repeatedly to two-state problems throughout this book.
1.1.1 Description of the Experiment
We now present a brief discussion of the Stern–Gerlach experiment, which is discussed in almost any book on modern physics.2 First, silver (Ag) atoms are heated in an oven. The oven has a small hole through which some of the silver atoms escape. As shown in Figure 1.1, the beam goes through a collimator and is then subjected to an inhomogeneous magnetic ﬁeld produced by a pair of pole pieces, one of which has a very sharp edge.
We must now work out the effect of the magnetic ﬁeld on the silver atoms. For our purpose the following oversimpliﬁed model of the silver atom sufﬁces. The silver atom is made up of a nucleus and 47 electrons, where 46 out of the 47 electrons can be visualized as forming a spherically symmetrical electron cloud with no net angular momentum. If we ignore the nuclear spin, which is irrelevant to our discussion, we see that the atom as a whole does have an angular momentum, which is due solely to the-
 spin – intrinsic as opposed to orbital – angular momentum of the single 47th (5s) electron. The 47 electrons

1 For an excellent historical discussion of the Stern–Gerlach experiment, see “Stern and Gerlach: how a bad cigar helped reorient atomic physics,” by Friedrich and Herschbach, Phys. Today, 56 (2003) 53.
2 For an elementary but enlightening discussion of the Stern–Gerlach experiment, see French and Taylor (1978), pp. 432–438.

3

1.1 The Stern–Gerlach Experiment

are attached to the nucleus, which is ∼2 × 105 times heavier than the electron; as a result, the heavy atom as a whole possesses a magnetic moment equal to the spin magnetic moment of the 47th electron. In other words, the magnetic moment μ of the atom is proportional to the electron spin S,

μ ∝ S,

(1.1)

where the precise proportionality factor turns out to be e/mec (e < 0 in this book) to an accuracy of about 0.2%.
Because the interaction energy of the magnetic moment with the magnetic ﬁeld is just −μ · B, the z-component of the force experienced by the atom is given by

Fz

=

∂ ∂z

(μ

·

B)

μz

∂ Bz ∂z

,

(1.2)

where we have ignored the components of B in directions other than the z-direction.

Because the atom as a whole is very heavy, we expect that the classical concept of trajectory

can be legitimately applied, a point which can be justiﬁed using the Heisenberg uncertainty principle to be derived later. With the arrangement of Figure 1.1, the μz > 0 (Sz < 0) atom experiences an upward force, while the μz < 0 (Sz > 0) atom experiences a downward force. The beam is then expected to be split according to the values of μz. In other words, the SG (Stern–Gerlach) apparatus “measures” the z-component of μ or, equivalently, the

z-component of S up to a proportionality factor.

The atoms in the oven are randomly oriented; there is no preferred direction for the orientation of μ. If the electron were like a classical spinning object, we would expect all values of μz to be realized between |μ| and −|μ|. This would lead us to expect a continuous bundle of beams coming out of the SG apparatus, as indicated in Figure 1.1, spread more or

less evenly over the expected range. Instead, what we experimentally observe is more like

the situation also shown in Figure 1.1, where two “spots” are observed, corresponding to

one “up” and one “down” orientation. In other words, the SG apparatus splits the original

silver beam from the oven into two distinct components, a phenomenon referred to in the early days of quantum theory as “space quantization.” To the extent that μ can be identiﬁed

within a proportionality factor with the electron spin S, only two possible values of the z-

component of S are observed to be possible, Sz up and Sz down, which we call Sz+ and Sz−. The two possible values of Sz are multiples of some fundamental unit of angular momentum; numerically it turns out that Sz = h¯ /2 and −h¯ /2, where

h¯ = 1.0546 × 10−27 erg-s = 6.5822 × 10−16 eV-s.

(1.3)

This “quantization” of the electron spin angular momentum3 is the ﬁrst important feature we deduce from the Stern–Gerlach experiment.
Figure 1.2a shows the result one would have expected from the experiment. According to classical physics, the beam should have spread itself over a vertical distance corresponding

3 An understanding of the roots of this quantization lies in the application of relativity to quantum mechanics. See Section 8.2 of this book for a discussion.

4

Fundamental Concepts

Fig. 1.2

(a)

(b)

(a) Classical physics prediction for results from the Stern–Gerlach experiment. The beam should have been spread out vertically, over a distance corresponding to the range of values of the magnetic moment times the cosine of the orientation angle. Stern and Gerlach, however, observed the result in (b), namely that only two orientations of the magnetic moment manifested themselves. These two orientations did not span the entire expected range.

to the (continuous) range of orientation of the magnetic moment. Instead, one observes Figure 1.2b which is completely at odds with classical physics. The beam mysteriously splits itself into two parts, one corresponding to spin “up” and the other to spin “down.”
Of course, there is nothing sacred about the up-down direction or the z-axis. We could just as well have applied an inhomogeneous ﬁeld in a horizontal direction, say in the x-direction, with the beam proceeding in the y-direction. In this manner we could have separated the beam from the oven into an Sx+ component and an Sx− component.
1.1.2 Sequential Stern–Gerlach Experiments
Let us now consider a sequential Stern–Gerlach experiment. By this we mean that the atomic beam goes through two or more SG apparatuses in sequence. The ﬁrst arrangement we consider is relatively straightforward. We subject the beam coming out of the oven to the arrangement shown in Figure 1.3a, where SGzˆ stands for an apparatus with the inhomogeneous magnetic ﬁeld in the z-direction, as usual. We then block the Sz− component coming out of the ﬁrst SGzˆ apparatus and let the remaining Sz+ compone-
nt be subjected to another SGzˆ apparatus. This time there is only one beam component coming out of the second apparatus, just the Sz+ component. This is perhaps not so surprising; after all if the atom spins are up, they are expected to remain so, short of any external ﬁeld that rotates the spins between the ﬁrst and the second SGzˆ apparatuses.
A little more interesting is the arrangement shown in Figure 1.3b. Here the ﬁrst SG apparatus is the same as before but the second one (SGxˆ) has an inhomogeneous magnetic ﬁeld in the x-direction. The Sz+ beam that enters the second apparatus (SGxˆ) is now split into two components, an Sx+ component and an Sx− component, with equal intensities. How can we explain this? Does it mean that 50% of the atoms in the Sz+ beam coming out of the ﬁrst apparatus (SGzˆ) are made up of atoms characterized by b-
oth Sz+ and Sx+, while the remaining 50% have both Sz+ and Sx−? It turns out that such a picture runs into difﬁculty, as will be shown below.

5

1.1 The Stern–Gerlach Experiment

Oven

Sz+ comp.

SGzˆ

SGzˆ

Sz– comp.

(a)

Sz+ comp. No Sz– comp.

Oven

Sz+ beam

SGzˆ

SGxˆ

Sz– beam

(b)

Sx+ beam Sx– beam

Fig. 1.3

Oven

Sz+ beam SGzˆ
Sz– beam

Sequential Stern–Gerlach experiments.

Sx+ beam SGxˆ
Sx– beam (c)

Sz+ beam SGzˆ
Sz– beam

We now consider a third step, the arrangement shown in Figure 1.3c, which most dramatically illustrates the peculiarities of quantum-mechanical systems. This time we add to the arrangement of Figure 1.3b yet a third apparatus, of the SGzˆ type. It is observed experimentally that two components emerge from the third apparatus, not one; the emerging beams are seen to have both an Sz+ component and an Sz− component. This is a complete surprise because after the atoms emerged from the ﬁrst apparatus, -
we made sure that the Sz− component was completely blocked. How is it possible that the Sz− component which, we thought, we eliminated earlier reappears? The model in which the atoms entering the third apparatus are visualized to have both Sz+ and Sx+ is clearly unsatisfactory.
This example is often used to illustrate that in quantum mechanics we cannot determine both Sz and Sx simultaneously. More precisely, we can say that the selection of the Sx+ beam by the second apparatus (SGxˆ) completely destroys any previous information about Sz.
It is amusing to compare this situation with that of a spinning top in classical mechanics, where the angular momentum

L = Iω

(1.4)

can be measured by determining the components of the angular velocity vector ω. By observing how fast the object is spinning in which direction we can determine ωx, ωy, and ωz simultaneously. The moment of inertia I is computable if we know the mass density and the geometric shape of the spinning top, so there is no difﬁculty in specifying both Lz and Lx in this classical situation.
It is to be clearly understood that the limitation we have encountered in determining
Sz and Sx is not due to the incompetence of the experimentalist. By improving the

6

Fundamental Concepts

experimental techniques we cannot make the Sz− component out of the third apparatus in Figure 1.3c disappear. The peculiarities of quantum mechanics are imposed upon us by the experiment itself. The limitation is, in fact, inherent in microscopic phenomena.

1.1.3 Analogy with Polarization of Light

Because this situation looks so novel, some analogy with a familiar classical situation may be helpful here. To this end we now digress to consider the polarization of light waves. This analogy will help us develop a mathematical framework for formulating the postulates of quantum mechanics.
Consider a monochromatic light wave propagating in the z-direction. A linearly polarized (or plane polarized) light with a polarization vector in the x-direction, which we call for short an x-polarized light, has a space-time dependent electric ﬁeld oscillating in the x-direction

E = E0xˆ cos(kz − ωt).

(1.5)

Likewise, we may consider a y-polarized light, also propagating in the z-direction,

E = E0yˆ cos(kz − ωt).

(1.6)

Polarized light beams of type (1.5) or (1.6) can be obtained by letting an unpolarized light beam go through a Polaroid ﬁlter. We call a ﬁlter that selects only beams polarized in the x-direction an x-ﬁlter. An x-ﬁlter, of course, becomes a y-ﬁlter when rotated by 90◦ about the propagation (z) direction. It is well known that when we let a light beam go through an x-ﬁlter and subsequently let it impinge on a y-ﬁlter, no light beam comes out provided, of course, we are dealing with 100% efﬁcient Po-
laroids; see Figure 1.4a.
The situation is even more interesting if we insert between the x-ﬁlter and the y-ﬁlter yet another Polaroid that selects only a beam polarized in the direction – which we call the x direction – that makes an angle of 45◦ with the x-direction in the xy plane; see Figure 1.4b.

No beam

x-filter

y-filter

(a)

100%

x-filter
Fig. 1.4 Light beams subjected to Polaroid filters.

x -filter (45° diagonal)
(b)

y-filter

No light

7

1.1 The Stern–Gerlach Experiment

y
y yˆ
yˆ

x xˆ

xˆ x

Fig. 1.5 Orientations of the x - and y -axes.

This time, there is a light beam coming out of the y-ﬁlter despite the fact that right after the beam went through the x-ﬁlter it did not have any polarization component in the ydirection. In other words, once the x -ﬁlter intervenes and selects the x -polarized beam, it is immaterial whether the beam was previously x-polarized. The selection of the x -polarized beam by the second Polaroid destroys any previous information on light polarization. Notice that this situation is quite analogous to the-
 situation that we encountered earlier with the SG arrangement of Figure 1.3b, provided that the following correspondence is made:

Sz ± atoms ↔ x-, y-polarized light Sx ± atoms ↔ x -, y -polarized light,

(1.7)

where the x - and the y -axes are deﬁned as in Figure 1.5. Let us examine how we can quantitatively describe the behavior of 45◦-polarized beams
(x - and y -polarized beams) within the framework of classical electrodynamics. Using Figure 1.5 we obtain

E0xˆ cos(kz − ωt) = E0 √1 xˆ cos(kz − ωt) + √1 yˆ cos(kz − ωt) ,

2

2

(1.8)

E0yˆ cos(kz − ωt) = E0

− √1 xˆ cos(kz − ωt) + √1 yˆ cos(kz − ωt)

2

2

.

In the triple-ﬁlter arrangement of Figure 1.4b the beam coming out of the ﬁrst Polaroid is an xˆ-polarized beam, which can be regarded as a linear combination of an x -polarized beam and a y -polarized beam. The second Polaroid selects the x -polarized beam, which can in turn be regarded as a linear combination of an x-polarized and a y-polarized beam. And ﬁnally, the third Polaroid selects the y-polarized component.

8

Fundamental Concepts

Applying correspondence (1.7) from the sequential Stern–Gerlach experiment of Figure 1.3c, to the triple-ﬁlter experiment of Figure 1.4b suggests that we might be able to represent the spin state of a silver atom by some kind of vector in a new kind of two-dimensional vector space, an abstract vector space not to be confused with the usual two-dimensional (xy) space. Just as xˆ and yˆ in (1.8) are the base vectors used to decompose the polarization vector xˆ of the xˆ -polarized light, it is reaso-
nable to represent the Sx+ state by a vector, which we call a ket in the Dirac notation to be developed fully in the next section. We denote this vector by |Sx; + and write it as a linear combination of two base vectors, |Sz; + and |Sz; − , which correspond to the Sz+ and the Sz− states, respectively. So we may conjecture

|Sx; + =? √1 |Sz; + + √1 |Sz; −

2

2

(1.9a)

|Sx; − =? − √1 |Sz; + + √1 |Sz; −

2

2

(1.9b)

in analogy with (1.8). Later we will show how to obtain these expressions using the general formalism of quantum mechanics.
Thus the unblocked component coming out of the second (SGxˆ) apparatus of Figure 1.3c is to be regarded as a superposition of Sz+ and Sz− in the sense of (1.9a). It is for this reason that two components emerge from the third (SGzˆ) apparatus.
The next question of immediate concern is: How are we going to represent the Sy± states? Symmetry arguments suggest that if we observe an Sz± beam going in the x-direction and subject it to an SGyˆ apparatus, the resulting situation will be very similar to the case where an Sz± beam going in the y-direction is subjected to an SGxˆ apparatus. The kets for Sy± should then be regarded as a linear combination of |Sz; ± , but it appears from (1.9) that we have already used up the available possibilitie-
s in writing |Sx; ± . How can our vector space formalism distinguish Sy± states from Sx± states?
An analogy with polarized light again rescues us here. This time we consider a circularly polarized beam of light, which can be obtained by letting a linearly polarized light pass through a quarter-wave plate. When we pass such a circularly polarized light through an x-ﬁlter or a y-ﬁlter, we again obtain either an x-polarized beam or a y-polarized beam of equal intensity. Yet everybody knows that the circularly polarized light is totally different from the 45◦-linearly polarized (x -polarized or y-
 -polarized) light.
Mathematically, how do we represent a circularly polarized light? A right circularly polarized light is nothing more than a linear combination of an x-polarized light and a y-polarized light, where the oscillation of the electric ﬁeld for the y-polarized component is 90◦ out of phase with that of the x-polarized component:4

E = E0

√1 xˆ cos(kz − ωt) + √1 yˆ cos

2

2

kz − ωt + π 2

.

(1.10)

4 Unfortunately, there is no unanimity in the deﬁnition of right versus left circularly polarized light in the literature.

9

1.1 The Stern–Gerlach Experiment

It is more elegant to use complex notation by introducing ε as follows:

Re(ε) = E/E0.

(1.11)

For a right circularly polarized light, we can then write

ε = √1 xˆei(kz−ωt) + √i yˆ ei(kz−ωt) ,

2

2

where we have used i = eiπ/2. We can make the following analogy with the spin states of silver atoms:

(1.12)

Sy + atom ↔ right circularly polarized beam, Sy − atom ↔ left circularly polarized beam.

(1.13)

Applying this analogy to (1.12), we see that if we are allowed to make the coefﬁcients preceding base kets complex, there is no difﬁculty in accommodating the Sy± atoms in our vector space formalism:

|Sy; ±

=?

√1 2

|Sz;

+

±

√i 2

|Sz

;

−

,

(1.14)

which are obviously different from (1.9). We thus see that the two-dimensional vector space needed to describe the spin states of silver atoms must be a complex vector space; an arbitrary vector in the vector space is written as a linear combination of the base vectors |Sz; ± with, in general, complex coefﬁcients. The fact that the necessity of complex numbers is already apparent in such an elementary example is rather remarkable.
The reader must have noted by this time that we have deliberately avoided talking about photons. In other words, we have completely ignored the quantum aspect of light; nowhere did we mention the polarization states of individual photons. The analogy we worked out is between kets in an abstract vector space that describes the spin states of individual atoms with the polarization vectors of the classical electromagnetic ﬁeld. Actually we could have made the analogy even more vivid by introducing th-
e photon concept and talking about the probability of ﬁnding a circularly polarized photon in a linearly polarized state, and so forth; however, that is not needed here. Without doing so, we have already accomplished the main goal of this section: to introduce the idea that quantum-mechanical states are to be represented by vectors in an abstract complex vector space.5
Finally, before outlining the mathematical formalism of quantum mechanics, we remark that the physics of a Stern–Gerlach apparatus is of far more than simply academic interest. The ability to separate spin states of atoms has tremendous practical interest as well. Figure 1.6 shows the use of the Stern–Gerlach technique to analyze the result of spin manipulation in an atomic beam of cesium atoms. The only stable isotope, 133Cs, of this alkali atom has a nuclear spin I = 7/2, and the experiment sort-
s out the F = 4 hyperﬁne magnetic substate, giving nine spin orientations. This is only one of many examples where this once mysterious effect is used for practical devices. Of course, all of these uses only go

5 The reader who is interested in grasping the basic concepts of quantum mechanics through a careful study of photon polarization may ﬁnd Chapter 1 of Baym (1969) extremely illuminating.

10

Fundamental Concepts

Fluorescence [arb. units]

Fig. 1.6

Cesium atomic beam

CCD camera image

1.0
(a)
0.8

−1 −2

0.6

−3 0

0.4

+1

−4

0.2

+4 +3 +2

0.0

Fluorescence [arb. units]

Detection

laser

1.0

0.8

(b)

0.6

Permanent

magnet

0.4

+4

−4

(movable)

0.2

0.0 0

5

10

15

20

25

Position [mm]

60 cm

A modern Stern–Gerlach apparatus, used to separate spin states of atomic cesium, taken from Lison et al., Phys. Rev. A, 61 (1999) 013405. The apparatus is shown on the left, while the data show the nine different projections for the spin-four atom, (a) before and (b) after optical pumping is used to populate only extreme spin projections. The spin quantum number F = 4 is a coupling between the outermost electron in the atom and the nuclear spin I = 7/2.

to ﬁrmly establish this effect, and the quantum-mechanical principles which we will now present and further develop.

1.2 Kets, Bras, and Operators

In the preceding section we showed how analyses of the Stern–Gerlach experiment led us to consider a complex vector space. In this and the following section we formulate the basic mathematics of vector spaces as used in quantum mechanics. Our notation throughout this book is the bra and ket notation developed by P. A. M. Dirac. The theory of linear vector spaces had, of course, been known to mathematicians prior to the birth of quantum mechanics, but Dirac’s way of introducing vector spaces has ma-
ny advantages, especially from the physicist’s point of view.
1.2.1 Ket Space
We consider a complex vector space whose dimensionality is speciﬁed according to the nature of a physical system under consideration. In Stern–Gerlach type experiments where the only quantum-mechanical degree of freedom is the spin of an atom, the dimensionality is determined by the number of alternative paths the atoms can follow when subjected to an SG apparatus; in the case of the silver atoms of the previous section, the dimensionality is just two, corresponding to the two possible values Sz c-
an assume.6 Later, in Section 1.6,
6 For many physical systems the dimension of the state space is denumerably inﬁnite. While we will usually indicate a ﬁnite number of dimensions, N, of the ket space, the results also hold for denumerably inﬁnite dimensions.

11

1.2 Kets, Bras, and Operators

we consider the case of continuous spectra, for example, the position (coordinate) or momentum of a particle, where the number of alternatives is nondenumerably inﬁnite, in which case the vector space in question is known as a Hilbert space after D. Hilbert, who studied vector spaces in inﬁnite dimensions.
In quantum mechanics a physical state, for example, a silver atom with a deﬁnite spin orientation, is represented by a state vector in a complex vector space. Following Dirac, we call such a vector a ket and denote it by |α . This state ket is postulated to contain complete information about the physical state; everything we are allowed to ask about the state is contained in the ket. Two kets can be added:

|α + |β = |γ .

(1.15)

The sum |γ is just another ket. If we multiply |α by a complex number c, the resulting product c|α is another ket. The number c can stand on the left or on the right of a ket; it makes no difference:

c|α = |α c.

(1.16)

In the particular case where c is zero, the resulting ket is said to be a null ket. One of the physics postulates is that |α and c|α , with c = 0, represent the same physical
state. In other words, only the “direction” in vector space is of signiﬁcance. Mathematicians may prefer to say that we are here dealing with rays rather than vectors.
An observable, such as momentum and spin components, can be represented by an operator, such as A, in the vector space in question. Quite generally, an operator acts on a ket from the left,

A · (|α ) = A|α ,

(1.17)

which is yet another ket. There will be more on multiplication operations later. In general, A|α is not a constant times |α . However, there are particular kets of
importance, known as eigenkets of operator A, denoted by

|a , |a , |a ,. . .

(1.18)

with the property

A|a = a |a , A|a = a |a ,. . .

(1.19)

where a , a ,. . . are just numbers. Notice that applying A to an eigenket just reproduces the same ket apart from a multiplicative number. The set of numbers {a , a , a ,. . .}, more compactly denoted by {a }, is called the set of eigenvalues of operator A. When it becomes necessary to order eigenvalues in a speciﬁc manner, {a(1), a(2), a(3),. . .} may be used in place of {a , a , a ,. . .}.

The physical state corresponding to an eigenket is called an eigenstate. In the simplest

case

of

spin

1 2

systems,

the

eigenvalue-eigenket

relation

(1.19)

is

expressed

as

Sz|Sz; +

=

h¯ 2

|Sz;

+

,

Sz|Sz; −

=

−

h¯ 2

|Sz;

−

,

(1.20)

where |Sz; ± are eigenkets of operator Sz with eigenvalues ±h¯ /2. Here we could have used just |h¯ /2 for |Sz; + in conformity with the notation |a , where an eigenket is labeled

12

Fundamental Concepts

by its eigenvalue, but the notation |Sz; ± , already used in the previous section, is more convenient here because we also consider eigenkets of Sx:

Sx|Sx; ±

=

±

h¯ 2

|Sx

;

±

.

(1.21)

We remarked earlier that the dimensionality of the vector space is determined by

the number of alternatives in Stern–Gerlach type experiments. More formally, we are

concerned with an N-dimensional vector space spanned by the N eigenkets of observable A. Any arbitrary ket |α can be written as

|α = ∑ ca |a , a

(1.22)

with a , a ,. . . up to a(N), where ca is a complex coefﬁcient. The question of the uniqueness of such an expansion will be postponed until we prove the orthogonality of eigenkets.

1.2.2 Bra Space and Inner Products

The vector space we have been dealing with is a ket space. We now introduce the notion of a bra space, a vector space “dual to” the ket space. We postulate that corresponding to every ket |α there exists a bra, denoted by α|, in this dual, or bra, space. The bra space is spanned by eigenbras { a |} which correspond to the eigenkets {|a }. There is a one-to-one correspondence between a ket space and a bra space:

|α ↔DC α| |a , |a ,. . . ↔DC a |, a |,. . .
|α + |β ↔DC α| + β|

(1.23)

where DC stands for dual correspondence. Roughly speaking, we can regard the bra space as some kind of mirror image of the ket space.
The bra dual to c|α is postulated to be c∗ α|, not c α|, which is a very important point. More generally, we have

cα|α + cβ|β ↔DCc∗α α| + c∗β β|.

(1.24)

We now deﬁne the inner product of a bra and a ket.7 The product is written as a bra

standing on the left and a ket standing on the right, for example,

β|α = ( β|) · (|α ) .
bra (c) ket

(1.25)

This product is, in general, a complex number. Notice that in forming an inner product we always take one vector from the bra space and one vector from the ket space.
We postulate two fundamental properties of inner products. First,

β|α = α|β ∗.

(1.26)

7 In the literature an inner product is often referred to as a scalar product because it is analogous to a · b in Euclidean space; in this book, however, we reserve the term scalar for a quantity invariant under rotations in the usual three-dimensional space.

13

1.2 Kets, Bras, and Operators

In other words, β|α and α|β are complex conjugates of each other. Notice that even though the inner product is, in some sense, analogous to the familiar scalar product a · b, β|α must be clearly distinguished from α|β ; the analogous distinction is not needed in real vector space because a · b is equal to b · a. Using (1.26) we can immediately deduce that α|α must be a real number. To prove this just let β| → α|.
The second postulate on inner products is

α|α ≥ 0,

(1.27)

where the equality sign holds only if |α is a null ket. This is sometimes known as the postulate of positive deﬁnite metric. From a physicist’s point of view, this postulate is essential for the probabilistic interpretation of quantum mechanics, as will become apparent later.8
Two kets |α and |β are said to be orthogonal if

α|β = 0,

(1.28)

even though in the deﬁnition of the inner product the bra α| appears. The orthogonality relation (1.28) also implies, via (1.26),

β|α = 0.

(1.29)

Given a ket which is not a null ket, we can form a normalized ket |α˜ , where

|α˜ =

1

|α ,

α|α

(1.30)

with the property

α˜|α˜ = 1.

(1.31)

Quite g√enerally, α|α is known as the norm of |α , analogous to the magnitude of vector a · a = |a| in Euclidean vector space. Because |α and c|α represent the same physical state, we might as well require that the kets we use for physical states be normalized in the sense of (1.31).9

1.2.3 Operators

As we remarked earlier, observables like momentum and spin components are to be represented by operators that can act on kets. We can consider a more general class of operators that act on kets; they will be denoted by X, Y, and so forth, while A, B, and so on will be used for a restrictive class of operators that correspond to observables.
An operator acts on a ket from the left side,

X · (|α ) = X |α ,

(1.32)

8 Attempts to abandon this postulate led to physical theories with “indeﬁnite metric.” We shall not be concerned with such theories in this book.
9 For eigenkets of observables with continuous spectra, different normalization conventions will be used; see Section 1.6.

14

Fundamental Concepts

and the resulting product is another ket. Operators X and Y are said to be equal,

X = Y,

(1.33)

if

X|α = Y|α

(1.34)

for an arbitrary ket in the ket space in question. Operator X is said to be the null operator if, for any arbitrary ket |α , we have

X |α = 0.

(1.35)

Operators can be added; addition operations are commutative and associative:

X + Y = Y + X,

(1.36a)

X + (Y + Z) = (X + Y ) + Z.

(1.36b)

With the single exception of the time-reversal operator to be considered in Chapter 4, the operators that appear in this book are all linear, that is,

X(cα|α + cβ|β ) = cαX |α + cβX |β .

(1.37)

An operator X always acts on a bra from the right side

( α|) · X = α|X,

(1.38)

and the resulting product is another bra. The ket X |α and the bra α|X are, in general, not dual to each other. We deﬁne the symbol X † as

X |α ↔DC α|X †.

(1.39)

The operator X † is called the Hermitian adjoint, or simply the adjoint, of X. An operator X is said to be Hermitian if

X = X†.

(1.40)

1.2.4 Multiplication

Operators X and Y can be multiplied. Multiplication operations are, in general, noncommutative, that is,

XY = YX.

(1.41)

Multiplication operations are, however, associative:

X(YZ) = (XY )Z = XYZ.

(1.42)

We also have

X(Y |α ) = (XY )|α = XY |α , ( β|X )Y = β|(XY ) = β|XY.

(1.43)

15

1.2 Kets, Bras, and Operators

Notice that

(XY )† = Y †X †

(1.44)

because

XY |α = X(Y |α )↔DC( α|Y †)X † = α|Y †X †.

(1.45)

So far, we have considered the following products: β|α , X |α , α|X, and XY. Are there other products we are allowed to form? Let us multiply |β and α|, in that order. The resulting product

(|β ) · ( α|) = |β α|

(1.46)

is known as the outer product of |β and α|. We will emphasize in a moment that |β α| is to be regarded as an operator; hence it is fundamentally different from the inner product β|α , which is just a number.
There are also “illegal products.” We have already mentioned that an operator must stand on the left of a ket or on the right of a bra. In other words, |α X and X α| are examples of illegal products. They are neither kets, nor bras, nor operators; they are simply nonsensical. Products like |α |β and α| β| are also illegal when |α and |β ( α| and β|) are ket (bra) vectors belonging to the same ket (bra) space.10

1.2.5 The Associative Axiom

As is clear from (1.42), multiplication operations among operators are associative. Actually the associative property is postulated to hold quite generally as long as we are dealing with “legal” multiplications among kets, bras, and operators. Dirac calls this important postulate the associative axiom of multiplication.
To illustrate the power of this axiom let us ﬁrst consider an outer product acting on a ket:

(|β α|) · |γ .

(1.47)

Because of the associative axiom, we can regard this equally well as

|β · ( α|γ ),

(1.48)

where α|γ is just a number. So the outer product acting on a ket is just another ket; in other words, |β α| can be regarded as an operator. Because (1.47) and (1.48) are equal, we may as well omit the dots and let |β α|γ stand for the operator |β α| acting on |γ or, equivalently, the number α|γ multiplying |β . (On the other hand, if (1.48) is written as ( α|γ )·|β , we cannot afford to omit the dot and brackets because the resulting expression would look illegal.) Notice that the operator |β α| r-
otates |γ into the direction of |β . It is easy to see that if

X = |β α|,

(1.49)

10 Later in the book we will encounter products like |α |β , which are more appropriately written as |α ⊗|β , but in such cases |α and |β always refer to kets from different vector spaces. For instance, the ﬁrst ket belongs to the vector space for electron spin, the second ket to the vector space for electron orbital angular momentum; or the ﬁrst ket lies in the vector space of particle 1, the second ket in the vector space of particle 2, and so forth.

16

Fundamental Concepts

then

X † = |α β|,

(1.50)

which is left as an exercise. In a second important illustration of the associative axiom, we note that

( β|) · (X |α ) = ( β|X ) · (|α ) .

bra

ket

bra

ket

(1.51)

Because the two sides are equal, we might as well use the more compact notation

β|X |α

(1.52)

to stand for either side of (1.51). Recall now that α|X † is the bra that is dual to X |α , so

β|X |α = β| · (X |α ) = {( α|X †) · |β }∗ = α|X †|β ∗,

(1.53)

where, in addition to the associative axiom, we used the fundamental property of the inner product (1.26). For a Hermitian X we have

β|X |α = α|X |β ∗.

(1.54)

1.3 Base Kets and Matrix Representations

1.3.1 Eigenkets of an Observable

Let us consider the eigenkets and eigenvalues of a Hermitian operator A. We use the symbol A, reserved earlier for an observable, because in quantum mechanics Hermitian operators of interest quite often turn out to be the operators representing some physical observables.
We begin by stating an important theorem.
Theorem 1 The eigenvalues of a Hermitian operator A are real; the eigenkets of A corresponding to different eigenvalues are orthogonal.

Proof First, recall that

A|a = a |a .

(1.55)

Because A is Hermitian, we also have a |A = a ∗ a |,

(1.56)

where, a , a ,. . . are eigenvalues of A. If we multiply both sides of (1.55) by a | on the left, both sides of (1.56) by |a on the right, and subtract, we obtain

(a − a ∗) a |a = 0.

(1.57)

17

1.3 Base Kets and Matrix Representations

Now a and a can be taken to be either the same or different. Let us ﬁrst choose them to be the same; we then deduce the reality condition (the ﬁrst half of the theorem)

a = a ∗,

(1.58)

where we have used the fact that |a is not a null ket. Let us now assume a and a to be different. Because of the just proved reality condition, the difference a − a ∗ that appears in (1.57) is equal to a − a , which cannot vanish, by assumption. The inner product a |a
must then vanish:

a |a = 0 (a = a ),

(1.59)

which proves the orthogonality property (the second half of the theorem).

2

We expect on physical grounds that an observable has real eigenvalues, a point that will become clearer in the next section, where measurements in quantum mechanics will be discussed. The theorem just proved guarantees the reality of eigenvalues whenever the operator is Hermitian. That is why we talk about Hermitian observables in quantum mechanics.
It is conventional to normalize |a so the {|a } form an orthonormal set:

a |a = δa a .

(1.60)

We may logically ask: Is this set of eigenkets complete? Since we started our discussion by asserting that the whole ket space is spanned by the eigenkets of A, the eigenkets of A must therefore form a complete set by construction of our ket space.11

1.3.2 Eigenkets as Base Kets

We have seen that the normalized eigenkets of A form a complete orthonormal set. An arbitrary ket in the ket space can be expanded in terms of the eigenkets of A. In other words, the eigenkets of A are to be used as base kets in much the same way as a set of mutually orthogonal unit vectors is used as base vectors in Euclidean space.
Given an arbitrary ket |α in the ket space spanned by the eigenkets of A, let us attempt to expand it as follows:

|α = ∑ ca |a . a

(1.61)

Multiplying a | on the left and using the orthonormality property (1.60), we can

immediately ﬁnd the expansion coefﬁcient,

ca = a |α .

(1.62)

In other words, we have

|α = ∑ |a a |α , a

(1.63)

11 The astute reader, already familiar with wave mechanics, may point out that the completeness of eigenfunctions we use can be proved by applying the Sturm–Liouville theory to the Schro¨dinger wave equation. But to “derive” the Schro¨dinger wave equation from our fundamental postulates, the completeness of the position eigenkets must be assumed.

18

Fundamental Concepts

which is analogous to an expansion of a vector V in (real) Euclidean space:

V = ∑ eˆi(eˆi · V), i

(1.64)

where {eˆi} form an orthogonal set of unit vectors. We now recall the associative axiom of multiplication: |a a |α can be regarded either as the number a |α multiplying |a or, equivalently, as the operator |a a | acting on |α . Because |α in (1.63) is an arbitrary ket,

we must have

∑ |a a | = 1,
a

(1.65)

where the 1 on the right-hand side is to be understood as the identity operator. Equation (1.65) is known as the completeness relation or closure.

It is difﬁcult to overestimate the usefulness of (1.65). Given a chain of kets, operators, or

bras multiplied in legal orders, we can insert, in any place at our convenience, the identity operator written in form (1.65). Consider, for example α|α ; by inserting the identity operator between α| and |α , we obtain

α|α = α| · ∑|a a | · |α a

= ∑| a |α |2. a

(1.66)

This, incidentally, shows that if |α is normalized, then the expansion coefﬁcients in (1.61)

must satisfy

∑ |ca |2 = ∑ | a |α |2 = 1.

a

a

(1.67)

Let us now look at |a a | that appears in (1.65). Since this is an outer product, it must be an operator. Let it operate on |α :

(|a a |) · |α = |a a |α = ca |a .

(1.68)

We see that |a a | selects that portion of the ket |α parallel to |a , so |a a | is known as the projection operator along the base ket |a and is denoted by Λa :

Λa ≡ |a a |.

(1.69)

The completeness relation (1.65) can now be written as

∑ Λa = 1.
a

(1.70)

1.3.3 Matrix Representations

Having speciﬁed the base kets, we now show how to represent an operator, say X, by a square matrix. First, using (1.65) twice, we write the operator X as

X = ∑ ∑ |a a |X |a a |. aa

(1.71)

19

1.3 Base Kets and Matrix Representations

There are altogether N2 numbers of form a |X |a , where N is the dimensionality of the ket space. We may arrange them into an N × N square matrix such that the column and row indices appear as follows:

a | X |a .
row column

Explicitly we may write the matrix as

⎛ a(1)|X |a(1)

X =. ⎜⎜⎝

a(2)|X |a(1) ...

a(1)|X |a(2) a(2)|X |a(2)
...

where the symbol =. stands for “is represented by.”12 Using (1.53), we can write

⎞ ··· · · · ⎟⎟⎠ , ...

(1.72) (1.73)

a |X |a = a |X †|a ∗.

(1.74)

At last, the Hermitian adjoint operation, originally deﬁned by (1.39), has been related to the (perhaps more familiar) concept of complex conjugate transposed. If an operator B is Hermitian, we have

a |B|a = a |B|a ∗.

(1.75)

The way we arranged a |X |a into a square matrix is in conformity with the usual rule of matrix multiplication. To see this just note that the matrix representation of the operator relation

Z = XY

(1.76)

reads

a |Z|a

= a |XY |a
= ∑ a |X |a a

a |Y |a .

(1.77)

Again, all we have done is to insert the identity operator, written in form (1.65), between X and Y!
Let us now examine how the ket relation

|γ = X|α

(1.78)

can be represented using our base kets. The expansion coefﬁcients of |γ can be obtained by multiplying a | on the left:

a |γ = a |X |α
= ∑ a |X |a a |α . a

(1.79)

12 We do not use the equality sign here because the particular form of a matrix representation depends on the particular choice of base kets used. The operator is different from a representation of the operator just as the actress is different from a poster of the actress.

20

Fundamental Concepts

But this can be seen as an application of the rule for multiplying a square matrix with a

column matrix, once the expansion coefﬁcients of |α and |γ are themselves arranged to

form column matrices as follows:

⎛ a(1)|α ⎞

⎛ a(1)|γ ⎞

|α =. ⎜⎜⎜⎜⎝

a(2)|α a(3)|α

⎟⎟⎟⎟⎠ ,

|γ =. ⎜⎜⎜⎜⎝

a(2)|γ a(3)|γ

⎟⎟⎟⎟⎠ .

...

...

(1.80)

Likewise, given

γ| = α|X,

(1.81)

we can regard
γ|a = ∑ α|a a |X |a . a
So a bra is represented by a row matrix as follows: γ| =. ( γ|a(1) , γ|a(2) , γ|a(3) ,. . .) = ( a(1)|γ ∗, a(2)|γ ∗, a(3)|γ ∗,. . .).

(1.82) (1.83)

Note the appearance of complex conjugation when the elements of the column matrix are written as in (1.83). The inner product β|α can be written as the product of the row matrix representing β| with the column matrix representing |α :

β|α = ∑ β|a a |α

a

⎛

⎞

a(1)|α

= ( a(1)|β ∗, a(2)|β ∗,. . .) ⎜⎜⎝

a(2)|α ...

⎟⎟⎠ .

(1.84)

If we multiply the row matrix representing α| with the column matrix representing |β ,

then we obtain just the complex conjugate of the preceding expression, which is consistent

with the fundamental property of the inner product (1.26). Finally, the matrix representation

of the outer product |β α| is easily seen to be ⎛ a(1)|β a(1)|α ∗
|β α| =. ⎜⎜⎝ a(2)|β a(1)|α ∗ ...

a(1)|β a(2)|α ∗ a(2)|β a(2)|α ∗
...

⎞ ... . . . ⎟⎟⎠ . ...

(1.85)

The matrix representation of an observable A becomes particularly simple if the eigenkets of A themselves are used as the base kets. First, we have

A = ∑∑|a a |A|a a |. aa
But the square matrix a |A|a is obviously diagonal,

(1.86)

a |A|a = a |A|a δa a = a δa a ,

(1.87)

21

1.3 Base Kets and Matrix Representations

so

A = ∑a |a a | a = ∑a Λa . a

(1.88)

1.3.4

Spin

1 2

Systems

It

is

here

instructive

to

consider

the

special

case

of

spin

1 2

systems.

The

base

kets

used

are |Sz; ± , which we denote, for brevity, as |± . The simplest operator in the ket space

spanned by |± is the identity operator, which, according to (1.65), can be written as

1 = |+ +| + |− −|.

(1.89)

According to (1.88), we must be able to write Sz as Sz = (h¯ /2)[(|+ +|) − (|− −|)].

(1.90)

The eigenket-eigenvalue relation

Sz|± = ±(h¯ /2)|±

(1.91)

immediately follows from the orthonormality property of |± . It is also instructive to look at two other operators,

S+ ≡ h¯ |+ −|, S− ≡ h¯ |− +|,

(1.92)

which are both seen to be non-Hermitian. The operator S+, acting on the spin-down ket |− , turns |− into the spin-up ket |+ multiplied by h¯ . On the other hand, the spin-up ket

|+ , when acted upon by S+, becomes a null ket. So the physical interpretation of S+ is that

it raises the spin component by one unit of h¯ ; if the spin component cannot be raised any

further, we automatically get a null state. Likewise, S− can be interpreted as an operator that lowers the spin component by one unit of h¯ . Later we will show that S± can be written as Sx ± iSy.
In constructing the matrix representations of the angular-momentum operators, it is

customary to label the column (row) indices in descending order of angular-momentum

components, that is, the ﬁrst entry corresponds to the maximum angular-momentum

component,

the

second,

the

next

highest,

and

so

forth.

In

our

particular

case

of

spin

1 2

systems, we have

|+ =.

1 0

, |− =.

0 1

,

(1.93a)

Sz

=.

h¯ 2

10 0 −1

, S+ =. h¯

01 00

, S− =. h¯

00 10

.

(1.93b)

We will come back to these explicit expressions when we discuss the Pauli two-component formalism in Chapter 3.

22

Fundamental Concepts

1.4 Measurements, Observables, and the Uncertainty Relations

1.4.1 Measurements

Having developed the mathematics of ket spaces, we are now in a position to discuss the quantum theory of measurement processes. This is not a particularly easy subject for beginners, so we ﬁrst turn to the words of the great master, P. A. M. Dirac, for guidance (Dirac (1958), p. 36): “A measurement always causes the system to jump into an eigenstate of the dynamical variable that is being measured.” What does all this mean? We interpret Dirac’s words as follows: Before a measurement of observable-
 A is made, the system is assumed to be represented by some linear combination

|α = ∑ca |a = ∑|a a |α .

a

a

(1.94)

When the measurement is performed, the system is “thrown into” one of the eigenstates, say |a of observable A. In other words,

|α −A−m−e−as−ur−em−e→nt |a .

(1.95)

For example, a silver atom with an arbitrary spin orientation will change into either |Sz; + or |Sz; − when subjected to an SG apparatus of type SGzˆ. Thus a measurement usually changes the state. The only exception is when the state is already in one of the eigenstates of the observable being measured, in which case

|a −A−m−e−as−ur−em−e→nt |a

(1.96)

with certainty, as will be discussed further. When the measurement causes |α to change into |a , it is said that A is measured to be a . It is in this sense that the result of a measurement yields one of the eigenvalues of the observable being measured.
Given (1.94), which is the state ket of a physical system before the measurement, we do not know in advance into which of the various |a the system will be thrown as the result of the measurement. We do postulate, however, that the probability for jumping into some particular |a is given by

Probability for a = | a |α |2,

(1.97)

provided that |α is normalized. Although we have been talking about a single physical system, to determine probability
(1.97) empirically, we must consider a great number of measurements performed on an ensemble, that is, a collection, of identically prepared physical systems, all characterized by the same ket |α . Such an ensemble is known as a pure ensemble. (We will say more about ensembles in Chapter 3.) As an example, a beam of silver atoms which survive the ﬁrst SGzˆ apparatus of Figure 1.3 with the Sz− component blocked is an example of a pure ensemble because every member atom of the ensemble is characteri-
zed by |Sz; + .
The probabilistic interpretation (1.97) for the squared inner product | a |α |2 is one of the fundamental postulates of quantum mechanics, so it cannot be proven. Let us note,

23

1.4 Measurements, Observables, and the Uncertainty Relations

however, that it makes good sense in extreme cases. Suppose the state ket is |a itself even

before a measurement is made; then according to (1.97), the probability for getting a , or,

more precisely, for being thrown into |a , as the result of the measurement is predicted

to be 1, which is just what we expect. By measuring A once again, we, of course, get |a

only; quite generally, repeated measurements of the same observable in succession yield

the same result.13 If, on the other hand, we are interested in the probability for the system

initially characterized by |a to be thrown into some other eigenket |a with a = a , then

(1.97) gives zero because of the orthogonality between |a and |a . From the point of view

of measurement theory, orthogonal kets correspond to mutually exclusive alternatives; for

example,

if

a

spin

1 2

system

is

in

|Sz; +

,

it

is

not

in

|Sz; −

with certainty.

Quite generally, the probability for anything must be nonnegative. Furthermore, the

probabilities for the various alternative possibilities must add up to unity. Both of these

expectations are met by our probability postulate (1.97).

We deﬁne the expectation value of A taken with respect to state |α as

A ≡ α|A|α .

(1.98)

To make sure that we are referring to state |α , the notation A α is sometimes used. Equation (1.98) is a deﬁnition; however, it agrees with our intuitive notion of average

measured value because it can be written as

A = ∑ ∑ α|a a |A|a a |α

aa

=∑

a

a

↑

measured value a

| a |α |2 .
probability for obtaining a

(1.99)

It is very important not to confuse eigenvalues with expectation values. For example, the

expectation

value

of

Sz

for

spin

1 2

systems

can

assume

any

real

value

between

−h¯ /2

and

+h¯ /2, say 0.273h¯ ; in contrast, the eigenvalue of Sz assumes only two values, h¯ /2 and −h¯ /2.

To clarify further the meaning of measurements in quantum mechanics, we introduce

the notion of a selective measurement, or ﬁltration. In Section 1.1 we considered a

Stern–Gerlach arrangement where we let only one of the spin components pass out of the

apparatus while we completely blocked the other component. More generally, we imagine

a measurement process with a device that selects only one of the eigenkets of A, say |a ,

and rejects all others; see Figure 1.7. This is what we mean by a selective measurement;

it is also called ﬁltration because only one of the A eigenkets ﬁlters through the ordeal.

Mathematically we can say that such a selective measurement amounts to applying the

projection operator Λa to |α :

Λa |α = |a a |α .

(1.100)

J. Schwinger has developed a formalism of quantum mechanics based on a thorough examination of selective measurements. He introduces a measurement symbol M(a ) in the beginning, which is identical to Λa or |a a | in our notation, and deduces a number

13 Here successive measurements must be carried out immediately afterward. This point will become clear when we discuss the time evolution of a state ket in Chapter 2.

24

Fundamental Concepts

a a
A Measurement

Fig. 1.7 Selective measurement.

a with a a

of properties of M(a ) (and also of M(b , a ) which amount to |b a |) by studying the outcome of various Stern–Gerlach type experiments. In this way he motivates the entire mathematics of kets, bras, and operators. In this book we do not follow Schwinger’s path; the interested reader may consult Gottfried (1966).

1.4.2

Spin

1 2

Systems,

Once

Again

Before proceeding with a general discussion of observables, we once again consider spin

1 2

systems.

This

time

we

show

that

the

results

of

sequential

Stern–Gerlach

experiments,

when combined with the postulates of quantum mechanics discussed so far, are sufﬁcient

to determine not only the Sx,y eigenkets, |Sx; ± and |Sy; ± , but also the operators Sx and

Sy themselves.

First, we recall that when the Sx+ beam is subjected to an apparatus of type SGzˆ, the

beam splits into two components with equal intensities. This means that the probability for

the

Sx+

state

to

be

thrown

into

|Sz; ±

,

simply

denoted

as

|±

,

is

1 2

each;

hence,

|

+|Sx; +

|

=|

−|Sx; +

|=

√1 . 2

(1.101)

We can therefore construct the Sx+ ket as follows:

|Sx; +

= √1 |+ 2

+ √1 eiδ1 |− , 2

(1.102)

with δ1 real. In writing (1.102) we have used the fact that the overall phase (common to both |+ and |− ) of a state ket is immaterial; the coefﬁcient of |+ can be chosen to be real and positive by convention. The Sx− ket must be orthogonal to the Sx+ ket because the Sx+ alternative and Sx− alternative are mutually exclusive. This orthogonality requirement leads to

|Sx; − = √1 |+ − √1 eiδ1 |− ,

2

2

(1.103)

where we have, again, chosen the coefﬁcient of |+ to be real and positive by convention. We can now construct the operator Sx using (1.88) as follows:

Sx

=

h¯ 2

[(|Sx

;

+

Sx; +|) − (|Sx; −

Sx; −|)]

= h¯ [e−iδ1 (|+ −|) + eiδ1 (|− +|)]. 2

(1.104)

25

1.4 Measurements, Observables, and the Uncertainty Relations

Notice that the Sx we have constructed is Hermitian, just as it must be. A similar argument with Sx replaced by Sy leads to

|Sy; ± = √1 |+ ± √1 eiδ2 |− ,

2

2

(1.105)

Sy

=

h¯ [e−iδ2 (|+ 2

−|) + eiδ2 (|−

+|)].

(1.106)

Is there any way of determining δ1 and δ2? Actually there is one piece of information

we

have

not

yet

used.

Suppose

we

have

a

beam

of

spin

1 2

atoms

moving

in

the

z-direction.

We can consider a sequential Stern–Gerlach experiment with SGxˆ followed by SGyˆ. The

results of such an experiment are completely analogous to the earlier case leading to

(1.101):

| Sy; ±|Sx; + | = | Sy; ±|Sx; − | = √1 , 2

(1.107)

which is not surprising in view of the invariance of physical systems under rotations. Inserting (1.103) and (1.105) into (1.107), we obtain

1 |1 ± ei(δ1−δ2)| = √1 ,

2

2

(1.108)

which is satisﬁed only if

δ2

−

δ1

=

π 2

or

− π. 2

(1.109)

We thus see that the matrix elements of Sx and Sy cannot all be real. If the Sx matrix elements are real, the Sy matrix elements must be purely imaginary (and vice versa). Just from this extremely simple example, the introduction of complex numbers is seen to be an essential feature in quantum mechanics. It is convenient to take the Sx matrix elements to be real14 and set δ1 = 0; if we were to choose δ1 = π, the positive x-axis would be oriented in the opposite direction. The second phase angle δ2-
 must then be −π/2 or π/2. The fact that there is still an ambiguity of this kind is not surprising. We have not yet speciﬁed whether
the coordinate system we are using is right-handed or left-handed; given the x- and the
z-axes there is still a twofold ambiguity in the choice of the positive y-axis. Later we will
discuss angular momentum as a generator of rotations using the right-handed coordinate system; it can then be shown that δ2 = π/2 is the correct choice.
To summarize, we have

|Sx; ±

= √1 |+ 2

± √1 |− , 2

(1.110a)

|Sy; ±

= √1 |+ 2

± √i |− , 2

(1.110b)

14 This can always be done by adjusting arbitrary phase factors in the deﬁnition of |+ and |− . This point will become clearer in Chapter 3, where the behavior of |± under rotations will be discussed.

26

Fundamental Concepts

and

Sx

=

h¯ [(|+ 2

−|) + (|−

+|)],

(1.111a)

Sy

=

h¯ [−i(|+ 2

−|) + i(|−

+|)].

(1.111b)

The Sx± and Sy± eigenkets given here are seen to be in agreement with our earlier guesses (1.9) and (1.14) based on an analogy with linearly and circularly polarized light. (Note, in this comparison, that only the relative phase between the |+ and −| components is of physical signiﬁcance.) Furthermore, the non-Hermitian S± operators deﬁned by (1.92) can now be written as

S± = Sx ± iSy.

(1.112)

The operators Sx and Sy, together with Sz given earlier, can be readily shown to satisfy the commutation relations

[Si, Sj] = iεijkh¯ Sk,

and the anticommutation relations

{Si, Sj}

=

1 2

h¯ 2

δij

,

where the commutator [ , ] and the anticommutator { , } are deﬁned by

(1.113) (1.114)

[A, B] ≡ AB − BA,

(1.115a)

{A, B} ≡ AB + BA.

(1.115b)

(We make use of the totally antisymmetric symbol εijk which has the value +1 for ε123 and any cyclic permutation of indices, the value −1 for ε213 and any cyclic permutation

of indices, and the value 0 when any two indices are the same. We also make use of the

implied summation convention, that is the assumption that we perform a summation over

any pair of repeated indices.) The commutation relations in (1.113) will be recognized

as the simplest realization of the angular-momentum commutation relations, whose

signiﬁcance will be discussed in detail in Chapter 3. In contrast, the anticommutation

relations

in

(1.114)

turn

out

to

be

a

special

property

of

spin

1 2

systems.

We can also deﬁne the operator S · S, or S2 for short, as follows:

S2 ≡ S2x + S2y + S2z .

(1.116)

Because of (1.114), this operator turns out to be just a constant multiple of the identity operator

S2 = 3 h¯ 2. 4

(1.117)

We obviously have

[S2, Si] = 0.

(1.118)

As

will

be

shown

in

Chapter

3,

for

spins

higher

than

1 2

,

S2

is

no

longer

a

multiple

of

the

identity operator; however, (1.118) still holds.

27

1.4 Measurements, Observables, and the Uncertainty Relations

1.4.3 Compatible Observables

Returning now to the general formalism, we will discuss compatible versus incompatible observables. Observables A and B are deﬁned to be compatible when the corresponding operators commute,

[A, B] = 0,

(1.119)

and incompatible when

[A, B] = 0.

(1.120)

For example, S2 and Sz are compatible observables, while Sx and Sz are incompatible observables.
Let us ﬁrst consider the case of compatible observables A and B. As usual, we assume that the ket space is spanned by the eigenkets of A. We may also regard the same ket space as being spanned by the eigenkets of B. We now ask: How are the A eigenkets related to the B eigenkets when A and B are compatible observables?
Before answering this question we must touch upon a very important point we have bypassed earlier, the concept of degeneracy. Suppose there are two (or more) linearly independent eigenkets of A having the same eigenvalue; then the eigenvalues of the two eigenkets are said to be degenerate. In such a case the notation |a that labels the eigenket by its eigenvalue alone does not give a complete description; furthermore, we may recall that our earlier theorem on the orthogonality of different eigenke-
ts was proved under the assumption of no degeneracy. Even worse, the whole concept that the ket space is spanned by {|a } appears to run into difﬁculty when the dimensionality of the ket space is larger than the number of distinct eigenvalues of A. Fortunately, in practical applications in quantum mechanics, it is usually the case that in such a situation the eigenvalues of some other commuting observable, say B, can be used to label the degenerate eigenkets.
Now we are ready to state an important theorem.

Theorem 2 Suppose that A and B are compatible observables, and the eigenvalues of A are nondegenerate. Then the matrix elements a |B|a are all diagonal. (Recall here that the matrix elements of A are already diagonal if {|a } are used as the base kets.)

Proof The proof of this important theorem is extremely simple. Using the deﬁnition (1.119) of compatible observables, we observe that

a |[A, B]|a = (a − a ) a |B|a = 0.

(1.121)

So a |B|a must vanish unless a = a , which proves our assertion.

2

We can write the matrix elements of B as

a |B|a = δa a a |B|a .

(1.122)

So both A and B can be represented by diagonal matrices with the same set of base kets. Using (1.71) and (1.122) we can write B as

B = ∑ |a a |B|a a |. a

(1.123)

28

Fundamental Concepts

Suppose that this operator acts on an eigenket of A:

B|a = ∑ |a a |B|a a |a = ( a |B|a )|a . a

(1.124)

But this is nothing other than the eigenvalue equation for the operator B with eigenvalue

b ≡ a |B|a .

(1.125)

The ket |a is therefore a simultaneous eigenket of A and B. Just to be impartial to both operators, we may use |a , b to characterize this simultaneous eigenket.
We have seen that compatible observables have simultaneous eigenkets. Even though the proof given is for the case where the A eigenkets are nondegenerate, the statement holds even if there is an n-fold degeneracy, that is,

A|a (i) = a |a (i) for i = 1, 2,. . . , n

(1.126)

where |a (i) are n mutually orthonormal eigenkets of A, all with the same eigenvalue a . To see this, all we need to do is construct appropriate linear combinations of |a (i) that diagonalize the B operator by following the diagonalization procedure to be discussed in Section 1.5.
A simultaneous eigenket of A and B, denoted by |a , b , has the property

A|a , b = a |a , b ,

(1.127a)

B|a , b = b |a , b .

(1.127b)

When there is no degeneracy, this notation is somewhat superﬂuous because it is clear from (1.125) that if we specify a , we necessarily know the b that appears in |a , b . The notation |a , b is much more powerful when there are degeneracies. A simple example may be used to illustrate this point.
Even though a complete discussion of orbital angular momentum will not appear in
this book until Chapter 3, the reader may be familiar from his or her earlier training in elementary wave mechanics that the eigenvalues of L2 (orbital angular momentum squared) and Lz (the z-component of orbital angular momentum) are h¯ 2l(l + 1) and mlh¯ , respectively, with l an integer and ml = −l, −l+1,. . . , +l. To characterize an orbital angular momentum state completely, it is necessary to specify both l and ml. For example, if we just say l = 1, the ml value can still be 0, +1, or −1; if-
 we just say ml = 1, l can be 1, 2, 3, 4, and so on. Only by specifying both l and ml do we succeed in uniquely characterizing the orbital angular momentum state in question. Quite often a collective index K is used to stand for (a , b ), so that

|K = |a , b .

(1.128)

We can obviously generalize our considerations to a situation where there are several (more than two) mutually compatible observables, namely,

[A, B] = [B, C] = [A, C] = · · · = 0.

(1.129)

Assume that we have found a maximal set of commuting observables; that is, we cannot add any more observables to our list without violating (1.129). The eigenvalues

29

1.4 Measurements, Observables, and the Uncertainty Relations

of individual operators A, B, C,. . . may have degeneracies, but if we specify a combination (a , b , c ,. . .), then the corresponding simultaneous eigenket of A, B, C,. . . is uniquely speciﬁed. We can again use a collective index K to stand for (a , b , c ,. . .). The orthonormality relation for

|K = |a , b , c ,. . .

(1.130)

reads

K |K = δK K = δaa δbb δcc . . . ,

(1.131)

while the completeness relation, or closure, can be written as

∑ |K K | = ∑ ∑ ∑. . . |a , b , c ,. . . a , b , c ,. . . | = 1.

K

abc

(1.132)

We now consider measurements of A and B when they are compatible observables. Suppose we measure A ﬁrst and obtain result a . Subsequently, we may measure B and get result b . Finally we measure A again. It follows from our measurement formalism that the third measurement always gives a with certainty, that is, the second (B) measurement does not destroy the previous information obtained in the ﬁrst (A) measurement. This is rather obvious when the eigenvalues of A are nondegenerate:

|α −A−m−e−as−ur−em−e→nt |a , b −B−m−e−as−ur−em−e→nt |a , b −A−m−e−as−ur−em−e→nt |a , b .

(1.133)

When there is degeneracy, the argument goes as follows: After the ﬁrst (A) measurement, which yields a , the system is thrown into some linear combination

n
∑ c(ai)|a , b(i) , i

(1.134)

where n is the degree of degeneracy and the kets |a , b(i) all have the same eigenvalue a as far as operator A is concerned. The second (B) measurement may select just one of the terms in the linear combination (1.134), say, |a , b(j) , but the third (A) measurement applied to it still yields a . Whether or not there is degeneracy, A measurements and B measurements do not interfere. The term compatible is indeed deemed appropriate.

1.4.4 Incompatible Observables

We now turn to incompatible observables, which are more nontrivial. The ﬁrst point to be emphasized is that incompatible observables do not have a complete set of simultaneous eigenkets. To show this let us assume the converse to be true. There would then exist a set of simultaneous eigenkets with property (1.127a) and (1.127b). Clearly,

AB|a , b = Ab |a , b = a b |a , b .

(1.135)

Likewise,

BA|a , b = Ba |a , b = a b |a , b ;

(1.136)

30

Fundamental Concepts

a A

b B

c C

(a) a = b ba
A

c C

(b)
Fig. 1.8 Sequential selective measurements.

hence,

AB|a , b = BA|a , b ,

(1.137)

and thus [A, B] = 0 in contradiction to the assumption. So in general, |a , b does not make sense for incompatible observables. There is, however, an interesting exception; it may happen that there exists a subspace of the ket space such that (1.137) holds for all elements of this subspace, even though A and B are incompatible. An example from the theory of orbital angular momentum may be helpful here. Suppose we consider an l = 0 state (s-state). Even though Lx and Lz do not commute, this state i-
s a simultaneous eigenstate of Lx and Lz (with eigenvalue zero for both operators). The subspace in this case is one dimensional.
We already encountered some of the peculiarities associated with incompatible observables when we discussed sequential Stern–Gerlach experiments in Section 1.1. We now give a more general discussion of experiments of that type. Consider the sequence of selective measurements shown in Figure 1.8a. The ﬁrst (A) ﬁlter selects some particular |a and rejects all others, the second (B) ﬁlter selects some particular |b and rejects all others, and the third (C) ﬁlter selects some particular |c and rejects-
 all others. We are interested in the probability of obtaining |c when the beam coming out of the ﬁrst ﬁlter is normalized to unity. Because the probabilities are multiplicative, we obviously have

| c |b |2| b |a |2.

(1.138)

Now let us sum over b to consider the total probability for going through all possible b routes. Operationally this means that we ﬁrst record the probability of obtaining c with all but the ﬁrst b route blocked, then we repeat the procedure with all but the second b blocked, and so on; then we sum the probabilities at the end and obtain

∑ | c |b |2| b |a |2 = ∑ c |b b |a a |b b |c .

b

b

(1.139)

31

1.4 Measurements, Observables, and the Uncertainty Relations

We now compare this with a different arrangement, where the B ﬁlter is absent (or not operative); see Figure 1.8b. Clearly, the probability is just | c |a |2, which can also be written as follows:

| c |a |2 = | ∑ c |b b |a |2 = ∑ ∑ c |b b |a a |b b |c .

b

bb

(1.140)

Notice that expressions (1.139) and (1.140) are different! This is remarkable because in both cases the pure |a beam coming out of the ﬁrst (A) ﬁlter can be regarded as being made up of the B eigenkets

|a = ∑ |b b |a , b

(1.141)

where the sum is over all possible values of b . The crucial point to be noted is that the result coming out of the C ﬁlter depends on whether or not B measurements have actually been carried out. In the ﬁrst case we experimentally ascertain which of the B eigenvalues are actually realized; in the second case, we merely imagine |a to be built up of the various |b in the sense of (1.141). Put in another way, actually recording the probabilities of going through the various b routes makes all the di-
fference even though we sum over b afterwards. Here lies the heart of quantum mechanics.
Under what conditions do the two expressions become equal? It is left as an exercise for the reader to show that for this to happen, in the absence of degeneracy, it is sufﬁcient that

[A, B] = 0 or [B, C] = 0.

(1.142)

In other words, the peculiarity we have illustrated is characteristic of incompatible observables.

1.4.5 The Uncertainty Relation

The last topic to be discussed in this section is the uncertainty relation. Given an observable A, we deﬁne an operator

ΔA ≡ A − A ,

(1.143)

where the expectation value is to be taken for a certain physical state under consideration. The expectation value of (ΔA)2 is known as the dispersion of A. Because we have

(ΔA)2 = (A2 − 2A A + A 2) = A2 − A 2,

(1.144)

the last equality of (1.144) may be taken as an alternative deﬁnition of dispersion. Sometimes the terms variance and mean square deviation are used for the same quantity.

Clearly, the dispersion vanishes when the state in question is an eigenstate of A. Roughly

speaking, the dispersion of an observable characterizes “fuzziness.” For example, for the

Sz+

state

of

a

spin

1 2

system,

the

dispersion

of

Sx

can

be

computed

to

be

S2x − Sx 2 = h¯ 2/4.

(1.145)

In contrast the dispersion (ΔSz)2 obviously vanishes for the Sz+ state. So, for the Sz+ state, Sz is “sharp,” a vanishing dispersion for Sz, while Sx is fuzzy.

32

Fundamental Concepts

We now state the uncertainty relation, which is the generalization of the well-known x-p uncertainty relation to be discussed in Section 1.6. Let A and B be observables. Then for any state we must have the following inequality:

(ΔA)2 (ΔB)2 ≥ 1 | [A, B] |2. 4
To prove this we ﬁrst state three lemmas.

(1.146)

Lemma 1 The Schwarz inequality α|α β|β ≥ | α|β |2,

(1.147)

which is analogous to

|a|2|b|2 ≥ |a · b|2

(1.148)

in real Euclidian space.

Proof First note

( α| + λ∗ β|) · (|α + λ|β ) ≥ 0,

(1.149)

where λ can be any complex number. This inequality must hold when λ is set equal to − β|α / β|β :

α|α β|β − | α|β |2 ≥ 0, which is the same as (1.147).

(1.150) 2

Lemma 2 The expectation value of a Hermitian operator is purely real.

Proof The proof is trivial, just use (1.75).

2

Lemma 3 The expectation value of an anti-Hermitian operator, deﬁned by C = −C†, is purely imaginary.

Proof The proof is also trivial.

2

Armed with these lemmas, we are in a position to prove the uncertainty relation (1.146). Using Lemma 1 with

|α = ΔA| , |β = ΔB| ,

(1.151)

where the blank ket | emphasizes the fact that our consideration may be applied to any ket, we obtain

(ΔA)2 (ΔB)2 ≥ | ΔAΔB |2,

(1.152)

33

1.5 Change of Basis

where the Hermiticity of ΔA and ΔB has been used. To evaluate the right-hand side of (1.152), we note

ΔAΔB = 1 [ΔA, ΔB] + 1 {ΔA, ΔB},

2

2

(1.153)

where the commutator [ΔA, ΔB], which is equal to [A, B], is clearly anti-Hermitian

([A, B])† = (AB − BA)† = BA − AB = − [A, B] .

(1.154)

In contrast, the anticommutator {ΔA, ΔB} is obviously Hermitian, so

ΔAΔB = 1 [A, B] + 1 {ΔA, ΔB} , 2 purely imaginary 2 purely real

(1.155)

where Lemmas 2 and 3 have been used. The right-hand side of (1.152) now becomes

| ΔAΔB |2 = 1 | [A, B] |2 + 1 | {ΔA, ΔB} |2.

4

4

(1.156)

The proof of (1.146) is now complete because the omission of the second (the anticommu-

tator) term of (1.156) can only make the inequality relation stronger.15

Applications

of

the

uncertainty

relation

to

spin

1 2

systems

will

be

left

as

exercises.

We

come back to this topic when we discuss the fundamental x-p commutation relation, that

is, the Heisenberg uncertainty principle, in Section 1.6.

1.5 Change of Basis

1.5.1 Transformation Operator

Suppose we have two incompatible observables A and B. The ket space in question can

be viewed as being spanned either by the set {|a } or by the set {|b }. For example, for

spin

1 2

systems

|Sxˆ ±

may be used as our base kets; alternatively, |Sz±

may be used as

our base kets. The two different sets of base kets, of course, span the same ket space. We

are interested in ﬁnding out how the two descriptions are related. Changing the set of base

kets is referred to as a change of basis or a change of representation. The basis in which

the base eigenkets are given by {|a } is called the A representation or, sometimes, the A

diagonal representation because the square matrix corresponding to A is diagonal in this

basis.

Our basic task is to construct a transformation operator that connects the old orthonormal

set {|a } and the new orthonormal set {|b }. To this end, we ﬁrst show the following.

Theorem 3 Given two sets of base kets, both satisfying orthonormality and completeness, there exists a unitary operator U such that

|b(1) = U|a(1) , |b(2) = U|a(2) ,. . . , |b(N) = U|a(N) .

(1.157)

15 In the literature most authors use ΔA for our (ΔA)2 so the uncertainty relation is written as ΔAΔB ≥

1 2

|

[A, B]

|.

In

this

book,

however,

ΔA

and

ΔB

are

to

be

understood

as

operators

[see

(1.143)],

not

numbers.

34

Fundamental Concepts

By a unitary operator we mean an operator fulﬁlling the conditions U†U = 1

as well as

UU† = 1.

(1.158) (1.159)

Proof We prove this theorem by explicit construction. We assert that the operator

∑ U = |b(k) a(k)| k
will do the job and we apply this U to |a(l) . Clearly,

(1.160)

U|a(l) = |b(l)

(1.161)

is guaranteed by the orthonormality of {|a }. Furthermore, U is unitary:

∑∑ ∑ U†U =

|a(l) b(l)|b(k) a(k)| = |a(k) a(k)| = 1,

kl

k

(1.162)

where we have used the orthonormality of {|b } and the completeness of {|a }. We obtain

relation (1.159) in an analogous manner.

2

1.5.2 Transformation Matrix

It is instructive to study the matrix representation of the U operator in the old {|a } basis. We have

a(k)|U|a(l) = a(k)|b(l) ,

(1.163)

which is obvious from (1.161). In other words, the matrix elements of the U operator are

built up of the inner products of old base bras and new base kets. We recall that the rotation

matrix in three dimensions that changes one set of unit base vectors (xˆ, yˆ, zˆ) into another

set (xˆ , yˆ , zˆ ) can be written as (Goldstein et al. (2002), pp. 134–144 for example)

⎛

⎞

xˆ · xˆ xˆ · yˆ xˆ · zˆ

R = ⎝ yˆ · xˆ yˆ · yˆ yˆ · zˆ ⎠ .

(1.164)

zˆ · xˆ zˆ · yˆ zˆ · zˆ

The square matrix made up of a(k)|U|a(l) is referred to as the transformation matrix from the {|a } basis to the {|b } basis.
Given an arbitrary ket |α whose expansion coefﬁcients a |α are known in the old basis,

|α = ∑ |a a |α , a

(1.165)

how can we obtain b |α , the expansion coefﬁcients in the new basis? The answer is very simple: Just multiply (1.165) (with a replaced by a(l) to avoid confusion) by b(k)|

∑ ∑ b(k)|α = b(k)|a(l) a(l)|α = a(k)|U†|a(l) a(l)|α .

l

l

(1.166)

35

1.5 Change of Basis

In matrix notation, (1.166) states that the column matrix for |α in the new basis can be obtained just by applying the square matrix U† to the column matrix in the old basis:

(new) = (U†)(old).

(1.167)

The relationships between the old matrix elements and the new matrix elements are also easy to obtain:

∑ ∑ b(k)|X |b(l) =

b(k)|a(m) a(m)|X |a(n) a(n)|b(l)

mn

∑ ∑ =

a(k)|U†|a(m) a(m)|X |a(n) a(n)|U|a(l) .

mn

(1.168)

This is simply the well-known formula for a similarity transformation in matrix algebra,

X = U†XU.

(1.169)

The trace of an operator X is deﬁned as the sum of diagonal elements:

tr(X ) = ∑ a |X |a . a

(1.170)

Even though a particular set of base kets is used in the deﬁnition, tr(X) turns out to be independent of representation, as shown:

We can also prove

∑ a |X |a = ∑ ∑ ∑ a |b b |X |b b |a

a

a bb

= ∑ ∑ b |b b |X |b

bb

= ∑ b |X |b .

b

(1.171)

tr(XY ) = tr(YX ), tr(U†XU) = tr(X ),

(1.172a) (1.172b)

tr(|a a |) = δa a , tr(|b a |) = a |b .

(1.172c) (1.172d)

1.5.3 Diagonalization

So far we have not discussed how to ﬁnd the eigenvalues and eigenkets of an operator B whose matrix elements in the old {|a } basis are assumed to be known. This problem turns out to be equivalent to that of ﬁnding the unitary matrix that diagonalizes B. Even though the reader may already be familiar with the diagonalization procedure in matrix algebra, it is worth working out this problem using the Dirac bra-ket notation.
We are interested in obtaining the eigenvalue b and the eigenket |b with the property

B|b = b |b .

(1.173)

36

Fundamental Concepts

First, we rewrite this as

∑ a |B|a a |b = b a |b .
a

(1.174)

When |b in (1.173) stands for the lth eigenket of operator B, we can write (1.174) in

matrix notation as follows:

⎛ B11
⎜⎝ B21 ...

B12
B22 ...

B13
B23 ...

... ... ...

⎞⎛ ⎟⎠ ⎜⎜⎝

C(1l ) C(2l )
...

⎞

⎛

⎟⎟⎠ = b(l) ⎜⎜⎝

C(1l ) C(2l )
...

⎞ ⎟⎟⎠ ,

(1.175)

with

Bij = a(i)|B|a(j) ,

(1.176a)

and

C(kl) = a(k)|b(l) ,

(1.176b)

where i, j, k run up to N, the dimensionality of the ket space. As we know from linear algebra, nontrivial solutions for C(kl) are possible only if the characteristic equation

det(B − λ1) = 0

(1.177)

is satisﬁed. This is an Nth order algebraic equation for λ, and the N roots obtained are to be identiﬁed with the various b(l) we are trying to determine. Knowing b(l) we can solve for the corresponding C(kl) up to an overall constant to be determined from the normalization condition. Comparing (1.176b) with (1.163), we see that the C(kl) are just the elements of the unitary matrix involved in the change of basis {|a } → {|b }.
For this procedure the Hermiticity of B is important. For example, consider S+ deﬁned
by (1.92) or (1.112). This operator is obviously non-Hermitian. The corresponding matrix,
which reads in the Sz basis as

S+ =. h¯

01 00

,

(1.178)

cannot be diagonalized by any unitary matrix. In Chapter 2 we will encounter eigenkets of a non-Hermitian operator in connection with a coherent state of a simple harmonic oscillator. Such eigenkets, however, are known not to form a complete orthonormal set, and the formalism we have developed in this section cannot be immediately applied.

1.5.4 Unitary Equivalent Observables

We conclude this section by discussing a remarkable theorem on the unitary transform of an observable.
Theorem 4 Consider again two sets of orthonormal basis {|a } and {|b } connected by the U operator (1.160). Knowing U, we may construct a unitary transform of A,

37

1.6 Position, Momentum, and Translation

UAU−1; then A and UAU−1 are said to be unitary equivalent observables. The eigenvalue equation for A,

A|a(l) = a(l)|a(l) ,

(1.179)

clearly implies that

UAU−1U|a(l) = a(l)U|a(l) .

(1.180)

But this can be rewritten as

(UAU−1)|b(l) = a(l)|b(l) .

(1.181)

This deceptively simple result is quite profound. It tells us that the |b are eigenkets of UAU−1 with exactly the same eigenvalues as the A eigenvalues. In other words, unitary
equivalent observables have identical spectra. The eigenket |b(l) , by deﬁnition, satisﬁes the relationship

B|b(l) = b(l)|b(l) .

(1.182)

Comparing (1.181) and (1.182), we infer that B and UAU−1 are simultaneously diagonalizable. A natural question is, is UAU−1 the same as B itself? The answer quite often is yes
in cases of physical interest. Take, for example, Sx and Sz. They are related by a unitary operator, which, as we will discuss in Chapter 3, is actually the rotation operator around the y-axis by angle π/2. In this case Sx itself is the unitary transform of Sz. Because we know that Sx and Sz exhibit the same set of eigenvalues, namely, +h¯ /2 and −h¯ /2, we see that our theorem holds in this particular example.

1.6 Position, Momentum, and Translation

1.6.1 Continuous Spectra

The observables considered so far have all been assumed to exhibit discrete eigenvalue spectra. In quantum mechanics, however, there are observables with continuous eigenvalues. Take, for instance, pz, the z-component of momentum. In quantum mechanics this is again represented by a Hermitian operator. In contrast to Sz, however, the eigenvalues of pz (in appropriate units) can assume any real value between −∞ and ∞.
The rigorous mathematics of a vector space spanned by eigenkets that exhibit a continuous spectrum is rather treacherous. The dimensionality of such a space is obviously inﬁnite. Fortunately, many of the results we worked out for a ﬁnite-dimensional vector space with discrete eigenvalues can immediately be generalized. In places where straightforward generalizations do not hold, we indicate danger signals.
We start with the analogue of eigenvalue equation (1.19), which, in the continuous spectrum case, is written as

ξ|ξ = ξ |ξ ,

(1.183)

38

Fundamental Concepts

where ξ is an operator and ξ is simply a number. The ket |ξ is, in other words, an eigenket of operator ξ with eigenvalue ξ , just as |a is an eigenket of operator A with eigenvalue a .
In pursuing this analogy we replace the Kronecker symbol by Dirac’s δ-function, a discrete sum over the eigenvalues {a } by an integral over the continuous variable ξ , so

a |a = δa a → ξ |ξ = δ(ξ − ξ ),

(1.184a)

∑ |a a | = 1 → dξ |ξ ξ | = 1,
a
|α = ∑ |a a |α → |α = dξ |ξ ξ |α , a ∑ | a |α |2 = 1 → dξ | ξ |α |2 = 1, a
β|α = ∑ β|a a |α → β|α = dξ β|ξ ξ |α , a

(1.184b) (1.184c) (1.184d) (1.184e)

a |A|a = a δa a → ξ |ξ|ξ = ξ δ(ξ − ξ ).

(1.184f)

Notice in particular how the completeness relation (1.184b) is used to obtain (1.184c) and (1.184e).

1.6.2 Position Eigenkets and Position Measurements

In Section 1.4 we emphasized that a measurement in quantum mechanics is essentially a ﬁltering process. To extend this idea to measurements of observables exhibiting continuous spectra it is best to work with a speciﬁc example. To this end we consider the position (or coordinate) operator in one dimension.
The eigenkets |x of the position operator x satisfying

x|x = x |x

(1.185)

are postulated to form a complete set. Here x is just a number with the dimension of length 0.23 cm, for example, while x is an operator. The state ket for an arbitrary physical state can be expanded in terms of {|x }:

∞
|α = dx |x x |α .
−∞

(1.186)

We now consider a highly idealized selective measurement of the position observable. Suppose we place a very tiny detector that clicks only when the particle is precisely at x and nowhere else. Immediately after the detector clicks, we can say that the state in question is represented by |x . In other words, when the detector clicks, |α abruptly “jumps into” |x in much the same way as an arbitrary spin state jumps into the Sz+ (or Sz−) state when subjected to an SG apparatus of the Sz type.
In practice the best the detector can do is to locate the particle within a narrow interval around x . A realistic detector clicks when a particle is observed to be located within some

39

1.6 Position, Momentum, and Translation

narrow range (x − Δ/2, x + Δ/2). When a count is registered in such a detector, the state ket changes abruptly as follows:

|α =

∞
dx |x

x |α −−m−ea−su−re−m−en→t

x +Δ/2
dx |x

x |α .

−∞

x −Δ/2

(1.187)

Assuming that x |α does not change appreciably within the narrow interval, the probability for the detector to click is given by

| x |α |2dx ,

(1.188)

where we have written dx for Δ. This is analogous to | a |α |2 for the probability for |α to be thrown into |a when A is measured. The probability of recording the particle somewhere between −∞ and ∞ is given by

∞
dx | x |α |2,
−∞

(1.189)

which is normalized to unity if |α is normalized:

∞
α|α = 1 ⇒ dx α|x x |α = 1.
−∞

(1.190)

The reader familiar with wave mechanics may have recognized by this time that x |α is the wave function for the physical state represented by |α . We will say more about this identiﬁcation of the expansion coefﬁcient with the x-representation of the wave function in Section 1.7.
The notion of a position eigenket can be extended to three dimensions. It is assumed in nonrelativistic quantum mechanics that the position eigenkets |x are complete. The state ket for a particle with internal degrees of freedom, such as spin, ignored can therefore be expanded in terms of {|x } as follows:

|α = d3x |x x |α ,

(1.191)

where x stands for x , y , and z ; in other words, |x is a simultaneous eigenket of the observables x, y, and z in the sense of Section 1.4:

|x ≡ |x , y , z ,

(1.192a)

x|x = x |x , y|x = y |x , z|x = z |x .

(1.192b)

To be able to consider such a simultaneous eigenket at all, we are implicitly assuming that the three components of the position vector can be measured simultaneously to arbitrary degrees of accuracy; hence, we must have

[xi, xj] = 0,

(1.193)

where x1, x2, and x3 stand for x, y, and z, respectively.

40

Fundamental Concepts

1.6.3 Translation

We now introduce the very important concept of translation, or spatial displacement. Suppose we start with a state that is well localized around x . Let us consider an operation that changes this state into another well-localized state, this time around x + dx with everything else (for example, the spin direction) unchanged. Such an operation is deﬁned to be an inﬁnitesimal translation by dx , and the operator that does the job is denoted by J (dx ):

J (dx )|x = |x + dx ,

(1.194)

where a possible arbitrary phase factor is set to unity by convention. Notice that the righthand side of (1.194) is again a position eigenket, but this time with eigenvalue x + dx . Obviously |x is not an eigenket of the inﬁnitesimal translation operator.
By expanding an arbitrary state ket |α in terms of the position eigenkets we can examine the effect of inﬁnitesimal translation on |α :

|α → J (dx )|α = J (dx ) d3x |x x |α = d3x |x + dx x |α . (1.195)

We also write the right-hand side of (1.195) as d3x |x + dx x |α = d3x |x x − dx |α

(1.196)

because the integration is over all space and x is just an integration variable. This shows that the wave function of the translated state J (dx )|α is obtained by substituting x − dx for x in x |α .
There is an equivalent approach to translation that is often treated in the literature. Instead of considering an inﬁnitesimal translation of the physical system itself, we consider a change in the coordinate system being used such that the origin is shifted in the opposite direction, −dx . Physically, in this alternative approach we are asking how the same state ket would look to another observer whose coordinate system is shifted by −dx . In this book we try not to use this approach. Obviously i-
t is important that we do not mix the two approaches!
We now list the properties of the inﬁnitesimal translation operator J (−dx ). The ﬁrst property we demand is the unitarity property imposed by probability conservation. It is reasonable to require that if the ket |α is normalized to unity, the translated ket J (dx )|α also be normalized to unity, so

α|α = α|J †(dx )J (dx )|α .

(1.197)

This condition is guaranteed by demanding that the inﬁnitesimal translation be unitary:

J †(dx )J (dx ) = 1.

(1.198)

Quite generally, the norm of a ket is preserved under unitary transformations. For the second property, suppose we consider two successive inﬁnitesimal translations, ﬁrst by dx and subsequently by dx , where dx and dx need not be in the same direction. We expect

41

1.6 Position, Momentum, and Translation

the net result to be just a single translation operation by the vector sum dx + dx , so we demand that

J (dx )J (dx ) = J (dx + dx ).

(1.199)

For the third property, suppose we consider a translation in the opposite direction; we expect the opposite-direction translation to be the same as the inverse of the original translation:

J (−dx ) = J −1(dx ).

(1.200)

For the fourth property, we demand that as dx → 0, the translation operation reduce to the identity operation

lim J (dx ) = 1
dx →0

(1.201)

and that the difference between J (dx ) and the identity operator be of ﬁrst order in dx . We now demonstrate that if we take the inﬁnitesimal translation operator to be

J (dx ) = 1 − iK · dx ,

(1.202)

where the components of K, Kx, Ky, and Kz, are Hermitian operators, then all the properties listed are satisﬁed. The ﬁrst property, the unitarity of J (dx ), is checked as follows:

J †(dx )J (dx ) = (1 + iK† · dx )(1 − iK · dx ) = 1 − i(K − K†) · dx + 0[(dx )2]

1,

(1.203)

where terms of second order in dx have been ignored for an inﬁnitesimal translation. The second property (1.199) can also be proved as follows:

J (dx )J (dx ) = (1 − iK · dx )(1 − iK · dx ) 1 − iK ·(dx + dx )
= J (dx + dx ).

(1.204)

The third and fourth properties are obviously satisﬁed by (1.202). Accepting (1.202) to be the correct form for J (dx ), we are in a position to derive an
extremely fundamental relation between the K operator and the x operator. First, note that

xJ (dx )|x = x|x + dx = (x + dx )|x + dx

(1.205a)

and

J (dx )x|x = x J (dx )|x = x |x + dx ;

(1.205b)

hence,

[x, J (dx )] |x = dx |x + dx dx |x ,

(1.206)

42

Fundamental Concepts

where the error made in writing the last part of (1.206) is of second order in dx . Now |x can be any position eigenket, and the position eigenkets are known to form a complete set. We must therefore have an operator identity

[x, J (dx )] = dx ,

(1.207)

or

−ixK · dx + iK · dx x = dx ,

(1.208)

where on the right-hand sides of (1.207) and (1.208) dx is understood to be the number dx multiplied by the identity operator in the ket space spanned by |x . By choosing dx in the direction of xˆj and forming the scalar product with xˆi, we obtain

[xi, Kj] = iδij,

(1.209)

where again δij is understood to be multiplied by the identity operator.

1.6.4 Momentum as a Generator of Translation

Equation (1.209) is the fundamental commutation relation between the position operators x, y, z and the K operators Kx, Ky, Kz. Remember that so far the K operator is deﬁned in terms of the inﬁnitesimal translation operator by (1.202). What is the physical signiﬁcance we can attach to K?
J. Schwinger, lecturing on quantum mechanics, once remarked, “. . . for fundamental properties we will borrow only names from classical physics.” In the present case we would like to borrow from classical mechanics the notion that momentum is the generator of an inﬁnitesimal translation. An inﬁnitesimal translation in classical mechanics can be regarded as a canonical transformation,

xnew ≡ X = x + dx, pnew ≡ P = p,

(1.210)

obtainable from the generating function (Goldstein et al. (2002), pp. 386 and 403)

F(x, P) = x · P + p · dx,

(1.211)

where p and P refer to the corresponding momenta. This equation has a striking similarity to the inﬁnitesimal translation operator (1.202) in
quantum mechanics, particularly if we recall that x · P in (1.211) is the generating function for the identity transformation (X = x, P = p). We are therefore led to speculate that the operator K is in some sense related to the momentum operator in quantum mechanics.
Can the K operator be identiﬁed with the momentum operator itself ? Unfortunately the dimension is all wrong; the K operator has the dimension of 1/length because K · dx must be dimensionless. But it appears legitimate to set

p

K=

.

universal constant with the dimension of action

(1.212)

From the fundamental postulates of quantum mechanics there is no way to determine the actual numerical value of the universal constant. Rather, this constant is needed here

43

1.6 Position, Momentum, and Translation

because, historically, classical physics was developed before quantum mechanics using units convenient for describing macroscopic quantities – the circumference of the Earth, the mass of 1 cm3 of water, the duration of a mean solar day, and so forth. Had microscopic physics been formulated before macroscopic physics, the physicists would have almost certainly chosen the basic units in such a way that the universal constant appearing in (1.212) would be unity.
An analogy from electrostatics may be helpful here. The interaction energy between two particles of charge e separated at a distance r is proportional to e2/r; in unrationalized Gaussian units, the proportionality factor is just 1, but in rationalized mks units, which may be more convenient for electrical engineers, the proportionality factor is 1/4πε0. (See Appendix A.)
The universal constant that appears in (1.212) turns out to be the same as the constant h¯ that appears in L. de Broglie’s relation, written in 1924,

2π p

λ

=, h¯

(1.213)

where λ is the wavelength of a “particle wave.” In other words, the K operator is the quantum-mechanical operator that corresponds to the wave number, that is, 2π times the reciprocal wavelength, usually denoted by k. With this identiﬁcation the inﬁnitesimal translation operator J (dx ) reads

J (dx ) = 1 − ip · dx /h¯ ,

(1.214)

where p is the momentum operator. The commutation relation (1.209) now becomes

[xi, pj] = ih¯ δij.

(1.215)

The commutation relations (1.215) imply, for example, that x and px (but not x and py) are incompatible observables. It is therefore impossible to ﬁnd simultaneous eigenkets of x and px. The general formalism of Section 1.4 can be applied here to obtain the positionmomentum uncertainty relation of W. Heisenberg:

(Δx)2 (Δpx)2 ≥ h¯ 2/4.

(1.216)

Some applications of (1.216) will appear in Section 1.7. So far we have concerned ourselves with inﬁnitesimal translations. A ﬁnite translation,
that is, a spatial displacement by a ﬁnite amount, can be obtained by successively compounding inﬁnitesimal translations. Let us consider a ﬁnite translation in the xdirection by an amount Δx :

J (Δx xˆ)|x = |x + Δx xˆ .

(1.217)

By compounding N inﬁnitesimal translations, each of which is characterized by a spatial displacement Δx /N in the x-direction, and letting N → ∞, we obtain

J (Δx xˆ) = lim 1 − ipxΔx N

N→∞

Nh¯

= exp − ipxΔx . h¯

(1.218)

44

Fundamental Concepts

D

B

Δy yˆ

A

C

Δ x xˆ

Fig. 1.9 Successive translations in different directions.

Here exp(−ipxΔx /h¯ ) is understood to be a function of the operator px; generally, for any operator X we have

exp(X ) ≡ 1 + X + X2 + · · · . 2!

(1.219)

A fundamental property of translations is that successive translations in different directions, say in the x- and y-directions, commute. We see this clearly in Figure 1.9; in shifting from A and B it does not matter whether we go via C or via D. Mathematically,

J (Δy yˆ)J (Δx xˆ) = J (Δx xˆ + Δy yˆ), J (Δx xˆ)J (Δy yˆ) = J (Δx xˆ + Δy yˆ).

(1.220)

This point is not so trivial as it may appear; we will show in Chapter 3 that rotations about different axes do not commute. Treating Δx and Δy up to second order, we obtain

[J (Δy yˆ), J (Δx xˆ)] =

1 − ipyΔy h¯

−

p2y (Δy 2h¯ 2

)2

+···

,

1 − ipxΔx h¯

−

p2x (Δx 2h¯ 2

)2

+···

−

(Δx

)(Δy )[ h¯ 2

py,

px

]

.

Because Δx and Δy are arbitrary, requirement (1.220), or

[J (Δy yˆ), J (Δx xˆ)] = 0,

immediately leads to

[ px, py] = 0,

or, more generally,

[ pi, pj] = 0.

(1.221) (1.222) (1.223) (1.224)

45

1.6 Position, Momentum, and Translation

This commutation relation is a direct consequence of the fact that translations in different directions commute. Whenever the generators of transformations commute, the corresponding group is said to be Abelian. The translation group in three dimensions is Abelian.
Equation (1.224) implies that px, py, and pz are mutually compatible observables. We can therefore conceive of a simultaneous eigenket of px, py, pz, namely,

|p ≡ |px, py, pz ,

(1.225a)

px|p = px|p , py|p = py|p , pz|p = pz|p .

(1.225b)

It is instructive to work out the effect of J (dx ) on such a momentum eigenket:

J (dx )|p = 1 − ip · dx |p = 1 − ip · dx |p .

h¯

h¯

(1.226)

We see that the momentum eigenket remains the same even though it suffers a slight phase change, so unlike |x , |p is an eigenket of J (dx ), which we anticipated because

[p, J (dx )] = 0.

(1.227)

Notice, however, that the eigenvalue of J (dx ) is complex; we do not expect a real eigenvalue here because J (dx ), though unitary, is not Hermitian.

1.6.5 The Canonical Commutation Relations

We summarize the commutator relations we inferred by studying the properties of translation:

[xi, xj] = 0, [ pi, pj] = 0, [xi, pj] = ih¯ δij.

(1.228)

These relations form the cornerstone of quantum mechanics; in his book, P. A. M. Dirac (1958) calls them the “fundamental quantum conditions.” More often they are known as the canonical commutation relations, or the fundamental commutation relations.
Historically it was W. Heisenberg who, in 1925, showed that the combination rule for atomic transition lines known at that time could best be understood if one associated arrays of numbers obeying certain multiplication rules with these frequencies. Immediately afterward M. Born and P. Jordan pointed out that Heisenberg’s multiplication rules are essentially those of matrix algebra, and a theory was developed based on the matrix analogues of (1.228), which is now known as matrix mechanics.16
Also in 1925, P. A. M. Dirac observed that the various quantum-mechanical relations can be obtained from the corresponding classical relations just by replacing classical Poisson brackets by commutators, as follows:

[

,

[ ]classical →

, ih¯

] ,

(1.229)

16 Appropriately, pq − qp = h/2πi is inscribed on the gravestone of M. Born in Go¨ttingen.

46

Fundamental Concepts

where we may recall that the classical Poisson brackets are deﬁned for functions of q and p as

∑ ∂A ∂B ∂A ∂B

[A(q, p), B(q, p)]classical ≡
s

∂ qs ∂ ps − ∂ ps ∂ qs .

(1.230)

For example, in classical mechanics, we have

[xi, pj]classical = δij,

(1.231)

which in quantum mechanics turns into (1.215). Dirac’s rule (1.229) is plausible because the classical Poisson brackets and quantum-
mechanical commutators satisfy similar algebraic properties. In particular, the following relations can be proved regardless of whether [ , ] is understood as a classical Poisson bracket or as a quantum-mechanical commutator:

[A, A] = 0

(1.232a)

[A, B] = − [B, A]

(1.232b)

[A, c] = 0 (c is just a number)

(1.232c)

[A + B, C] = [A, C] + [B, C]

(1.232d)

[A, BC] = [A, B] C + B [A, C]

(1.232e)

[A, [B, C]] + [B, [C, A]] + [C, [A, B]] = 0,

(1.232f)

where the last relation is known as the Jacobi identity.17 However, there are important differences. First, the dimension of the classical Poisson bracket differs from that of the quantum-mechanical commutator because of the differentiations with respect to q and p appearing in (1.230). Second, the Poisson bracket of real functions of q and p is purely real, while the commutator of two Hermitian operators is anti-Hermitian (see Lemma 3 of Section 1.4). To take care of these differences the factor -
ih¯ is inserted in (1.229).
We have deliberately avoided exploiting Dirac’s analogy in obtaining the canonical commutation relations. Our approach to the commutation relations is based solely on (1) the properties of translations and (2) the identiﬁcation of the generator of translation with the momentum operator modulo a universal constant with the dimension of action. We believe that this approach is more powerful because it can be generalized to situations where observables have no classical analogues. For example, the sp-
in angular-momentum components we encountered in Section 1.4 have nothing to do with the p and q of classical mechanics; yet, as we will show in Chapter 3, the spin angular-momentum commutation relations can be derived using the properties of rotations just as we derived the canonical commutation relations using the properties of translations.

17 It is amusing that the Jacobi identity in quantum mechanics is much easier to prove than its classical analogue.

47

1.7 Wave Functions in Position and Momentum Space

1.7 Wave Functions in Position and Momentum Space

1.7.1 Position-Space Wave Function

In this section we present a systematic study of the properties of wave functions in both position and momentum space. For simplicity let us return to the one-dimensional case. The base kets used are the position kets satisfying

x|x = x |x ,

(1.233)

normalized in such a way that the orthogonality condition reads

x |x = δ(x − x ).

(1.234)

We have already remarked that the ket representing a physical state can be expanded in terms of |x ,

|α = dx |x x |α ,

(1.235)

and that the expansion coefﬁcient x |α is interpreted in such a way that | x |α |2 dx

(1.236)

is the probability for the particle to be found in a narrow interval dx around x . In our formalism the inner product x |α is what is usually referred to as the wave function ψα(x ) for state |α :

x |α = ψα(x ).

(1.237)

In elementary wave mechanics the probabilistic interpretations for the expansion coefﬁcient ca ( = a |α ) and for the wave function ψα(x )( = x |α ) are often presented as separate postulates. One of the major advantages of our formalism, originally due to Dirac, is that the two kinds of probabilistic interpretations are uniﬁed; ψα(x ) is an expansion coefﬁcient [see (1.235)] in much the same way as ca is. By following the footsteps of Dirac we come to appreciate the unity of quantum mechanics.
Consider the inner product β|α . Using the completeness of |x , we have

β|α = dx β|x x |α

= dx ψ∗β(x )ψα(x ),

(1.238)

so β|α characterizes the overlap between the two wave functions. Note that we are not deﬁning β|α as the overlap integral; the identiﬁcation of β|α with the overlap integral follows from our completeness postulate for |x . The more general interpretation of β|α , independent of representations, is that it represents the probability amplitude for state |α to be found in state |β .

48

Fundamental Concepts

This time let us interpret the expansion

|α = ∑ |a a |α a

(1.239)

using the language of wave functions. We just multiply both sides of (1.239) by the position eigenbra x | on the left. Thus

x |α = ∑ x |a a |α . a
In the usual notation of wave mechanics this is recognized as

(1.240)

ψα(x ) = ∑ ca ua (x ), a
where we have introduced an eigenfunction of operator A with eigenvalue a :

ua (x ) = x |a .

(1.241)

Let us now examine how β|A|α can be written using the wave functions for |α and |β . Clearly, we have

β|A|α = dx dx β|x x |A|x x |α

= dx dx ψ∗β(x ) x |A|x ψα(x ).

(1.242)

So to be able to evaluate β|A|α , we must know the matrix element x |A|x , which is, in general, a function of the two variables x and x .
An enormous simpliﬁcation takes place if observable A is a function of the position operator x. In particular, consider

A = x2,

(1.243)

which actually appears in the Hamiltonian for the simple harmonic oscillator problem to be discussed in Chapter 2. We have

x |x2|x = ( x |) · (x 2|x ) = x 2δ(x − x ),

(1.244)

where we have used (1.233) and (1.234). The double integral (1.242) is now reduced to a single integral:

β|x2|α = dx β|x x 2 x |α

= dx ψ∗β(x )x 2ψα(x ).

(1.245)

In general,

β| f (x)|α = dx ψ∗β(x )f (x )ψα(x ).

(1.246)

Note that the f (x) on the left-hand side of (1.246) is an operator, while the f (x ) on the right-hand side is not an operator.

49

1.7 Wave Functions in Position and Momentum Space

1.7.2 Momentum Operator in the Position Basis

We now examine how the momentum operator may look in the x-basis, that is, in the representation where the position eigenkets are used as base kets. Our starting point is the deﬁnition of momentum as the generator of inﬁnitesimal translations:
1 − ipΔx |α = dx J (Δx )|x x |α h¯
= dx |x + Δx x |α

= dx |x x − Δx |α

= dx |x

x |α

−

Δx

∂ ∂x

x |α

.

(1.247)

Comparison of both sides yields

p|α = dx |x

−ih¯

∂ ∂x

x |α

(1.248)

or

x |p|α

=

−ih¯

∂ ∂x

x |α ,

(1.249)

where we have used the orthogonality property (1.234). For the matrix element p in the

x-representation, we obtain

x |p|x

=

−ih¯

∂ ∂x

δ(x

−x

).

From (1.248) we get a very important identity:

(1.250)

β|p|α = dx β|x

−ih¯

∂ ∂x

x |α

=

dx ψ∗β(x )

−ih¯

∂ ∂x

ψα(x ).

(1.251)

In our formalism (1.251) is not a postulate; rather, it has been derived using the basic

properties of momentum. By repeatedly applying (1.249), we can also obtain

x |pn|α

=

(−ih¯ )n

∂n ∂x n

x |α ,

β|pn|α =

dx

ψ∗β

(x

)(−ih¯ )n

∂n ∂x n

ψ α (x

).

(1.252) (1.253)

1.7.3 Momentum-Space Wave Function
So far we have worked exclusively in the x-basis. There is actually a complete symmetry between x and p, apart from occasional minus signs, which we can infer from the

50

Fundamental Concepts

canonical commutation relations. Let us now work in the p-basis, that is, in the momentum representation.
For simplicity we continue working in one-space. The base eigenkets in the p-basis specify

p|p = p |p

(1.254)

and

p |p = δ(p − p ).

(1.255)

The momentum eigenkets {|p } span the ket space in much the same way as the position eigenkets {|x }. An arbitrary state ket |α can therefore be expanded as follows:

|α = dp |p p |α .

(1.256)

We can give a probabilistic interpretation for the expansion coefﬁcient p |α ; the probability that a measurement of p gives eigenvalue p within a narrow interval dp is | p |α |2dp . It is customary to call p |α the momentum-space wave function; the notation φα( p ) is often used:

p |α = φα(p ).

(1.257)

If |α is normalized, we obtain

dp α|p p |α = dp |φα(p )|2 = 1.

(1.258)

Let us now establish the connection between the x-representation and the prepresentation. We recall that in the case of the discrete spectra, the change of basis from the old set {|a } to the new set {|b } is characterized by the transformation matrix (1.163). Likewise, we expect that the desired information is contained in x |p , which is a function of x and p , usually called the transformation function from the x-representation to the p-representation. To derive the explicit form of x |p , ﬁrst-
 recall (1.249); letting |α be the momentum eigenket |p , we obtain

x |p|p

=

−ih¯

∂ ∂x

x |p

or

p

x |p

=

−ih¯

∂ ∂x

x |p

.

The solution to this differential equation for x |p is

(1.259) (1.260)

x |p = N exp ip x , h¯

(1.261)

where N is the normalization constant to be determined in a moment. Even though the transformation function x |p is a function of two variables, x and p , we can temporarily regard it as a function of x with p ﬁxed. It can then be viewed as the probability amplitude for the momentum eigenstate speciﬁed by p to be found at position x ; in other words, it is

51

1.7 Wave Functions in Position and Momentum Space

just the wave function for the momentum eigenstate |p , often referred to as the momentum eigenfunction (still in the x-space). So (1.261) simply says that the wave function of a momentum eigenstate is a plane wave. It is amusing that we have obtained this plane wave solution without solving the Schro¨dinger equation (which we have not yet written down).
To get the normalization constant N let us ﬁrst consider

x |x = dp x |p p |x .

(1.262)

The left-hand side is just δ(x − x ); the right-hand side can be evaluated using the explicit form of x |p :

δ(x − x ) = |N|2 dp exp ip (x − x ) h¯

= 2πh¯ |N|2δ(x − x ).

(1.263)

Choosing N to be purely real and positive by convention, we ﬁnally have

x |p = √ 1 exp ip x .

2πh¯

h¯

(1.264)

We can now demonstrate how the position-space wave function is related to the momentum-space wave function. All we have to do is rewrite

x |α = dp x |p p |α

(1.265a)

and

p |α = dx p |x x |α

(1.265b)

as

ψα(x ) =

√1 2πh¯

ip x dp exp
h¯

φα(p )

(1.266a)

and

φα(p ) =

√1 2πh¯

−ip x dx exp
h¯

ψα(x ).

(1.266b)

The pair of equations is just what one expects from Fourier’s inversion theorem. Apparently the mathematics we have developed somehow “knows” Fourier’s work on integral transforms.

1.7.4 Gaussian Wave Packets

It is instructive to look at a physical example to illustrate our basic formalism. We consider what is known as a Gaussian wave packet, whose x-space wave function is given by

x |α =

1√ π1/4 d

exp

ikx

−

x2 2d2

.

(1.267)

52

Fundamental Concepts

This is a plane wave with wave number k modulated by a Gaussian proﬁle centered on the origin. The probability of observing the particle vanishes very rapidly for |x | > d; more quantitatively, the probability density | x |α |2 has a Gaussian shape with width d.
We now compute the expectation values of x, x2, p, and p2. The expectation value of x
is clearly zero by symmetry:

∞

∞

x = dx α|x x x |α = dx | x |α |2x = 0.

−∞

−∞

(1.268)

For x2 we obtain

∞
x2 = dx x 2| x |α |2
−∞

=

√1 πd

∞
dx x 2 exp
−∞

−x 2 d2

d2 =,
2

(1.269)

which leads to

(Δx)2 = x2 − x 2 = d2 2

(1.270)

for the dispersion of the position operator. The expectation values of p and p2 can also be computed as follows:

p = h¯ k

(1.271a)

p2

=

h¯ 2 2d2

+ h¯ 2k2,

which is left as an exercise. The momentum dispersion is therefore given by

(1.271b)

(Δp)2

=

p2

−

p

2

=

h¯ 2 2d2 .

(1.272)

Armed with (1.270) and (1.272), we can check the Heisenberg uncertainty relation (1.216);

in this case the uncertainty product is given by

(Δx)2 (Δp)2 = h¯ 2 , 4

(1.273)

independent of d, so for a Gaussian wave packet we actually have an equality relation

rather than the more general inequality relation (1.216). For this reason a Gaussian wave

packet is often called a minimum uncertainty wave packet.

We now go to momentum space. By a straightforward integration, just completing the

square in the exponent, we obtain

p |α = √ 1 2πh¯

1√ π1/4 d

∞

−ip x

x2

dx exp
−∞

h¯ + ikx − 2d2

=

h¯ √dπ exp

−(p − h¯ k)2d2 2h¯ 2

.

(1.274)

53

1.7 Wave Functions in Position and Momentum Space

This momentum-space wave function provides an alternative method for obtaining p and p2 , which is also left as an exercise. The probability of ﬁnding the particle with momentum p is Gaussian (in momentum space) centered on h¯ k, just as the probability of ﬁnding the particle at x is Gaussian (in position space) centered on zero. Furthermore, the widths of the two Gaussians are inversely proportional to each other, which is just another way of expressing the constancy of the uncertainty product (Δ-
x)2 Δp)2 explicitly computed in (1.273). The wider the spread in the p-space, the narrower the spread in the x-space, and vice versa. As an extreme example, suppose we let d → ∞. The position-space wave function (1.267) then becomes a plane wave extending over all space; the probability of ﬁnding the particle is just constant, independent of x . In contrast, the momentum-space wave function is δ-function-like and is sharply peaked at h¯ k. In the opposite extreme, by letting d → 0, we obtain a pos-
ition-space wave function localized like the δ-function, but the momentum-space wave function (1.274) is just constant, independent of p . We have seen that an extremely well-localized (in the x-space) state is to be regarded as a superposition of momentum eigenstates with all possible values of momenta. Even those momentum eigenstates whose momenta are comparable to or exceed mc must be included
in the superposition. However, at such high values of momentum, a description based on nonrelativistic quantum mechanics is bound to break down.18 Despite this limitation our formalism, based on the existence of the position eigenket |x , has a wide domain of applicability.
1.7.5 Generalization to Three Dimensions

So far in this section we have worked exclusively in one-space for simplicity, but everything we have done can be generalized to three-space, if the necessary changes are made. The base kets to be used can be taken as either the position eigenkets satisfying

x|x = x |x

(1.275)

or the momentum eigenkets satisfying

p|p = p |p .

(1.276)

They obey the normalization conditions x |x = δ3(x − x )

(1.277a)

and

p |p = δ3(p − p ),

(1.277b)

where δ3 stands for the three-dimensional δ-function δ3(x − x ) = δ(x − x )δ(y − y )δ(z − z ).

(1.278)

18 It turns out that the concept of a localized state in relativistic quantum mechanics is far more intricate because of the possibility of “negative energy states,” or pair creation. See Chapter 8 of this textbook.

54

Fundamental Concepts

The completeness relations read

d3x |x x | = 1

and d3p |p p | = 1,

which can be used to expand an arbitrary state ket:

|α = d3x |x x |α ,

(1.279a) (1.279b) (1.280a)

|α = d3p |p p |α .

(1.280b)

The expansion coefﬁcients x |α and p |α are identiﬁed with the wave functions ψα(x ) and φα(p ) in position and momentum space, respectively.
The momentum operator, when taken between |β and |α , becomes

β|p|α = d3x ψ∗β(x )(−ih¯ ∇ )ψα(x ).

(1.281)

The transformation function analogous to (1.264) is

x |p

=

1 (2πh¯ )3/2

exp

ip · x h¯

,

(1.282)

so that

ψα(x ) =

1 (2πh¯ )3/2

d3p exp ip · x h¯

φα(p )

(1.283a)

and

φα(p ) =

1 (2πh¯ )3/2

d3x exp −ip · x h¯

ψα(x ).

(1.283b)

It is interesting to check the dimension of the wave functions. In one-dimensional problems the normalization requirement (1.190) implies that | x |α |2 has the dimension of inverse length, so the wave function itself must have the dimension of (length)−1/2.
In contrast, the wave function in three-dimensional problems must have the dimension of (length)−3/2 because | x |α |2 integrated over all spatial volume must be unity
(dimensionless).

Problems

1.1 A beam of silver atoms is created by heating a vapor in an oven to 1000◦C, and

selecting atoms with a velocity close to the mean of the thermal distribution. The

beam moves through a one-meter long magnetic ﬁeld with a vertical gradient 10 T/m,

and impinges a screen one meter downstream of the end of the magnet. Assuming

the

silver

atom

has

spin

1 2

with

a

magnetic

moment

of

one

Bohr

magneton,

ﬁnd

the

separation distance in millimeters of the two states on the screen.

55

Problems

1.2 Prove

[AB, CD] = −AC{D, B} + A{C, B}D − C{D, A}B + {C, A}DB.

1.3

For

the

spin

1 2

state

|Sx; +

,

evaluate

both

sides

of

the

inequality

(1.146),

that

is

(ΔA)2 (ΔB)2 ≥ 1 | [A, B] |2 4

for the operators A = Sx and B = Sy, and show that the inequality is satisﬁed. Repeat for the operators A = Sz and B = Sy.

1.4 Suppose a 2 × 2 matrix X (not necessarily Hermitian, nor unitary) is written as

X = a0 + σ · a,

where the matrices σ are given in (3.50) and a0 and a1,2,3 are numbers. a. How are a0 and ak(k = 1, 2, 3) related to tr(X ) and tr(σkX )? b. Obtain a0 and ak in terms of the matrix elements Xij.

1.5 Show that the determinant of a 2 × 2 matrix σ · a is invariant under

σ · a → σ · a ≡ exp iσ · nˆ φ σ · a exp −iσ · nˆ φ ,

2

2

where the matrices σ are given in (3.50). Find ak in terms of ak when nˆ is in the positive z-direction and interpret your result.

1.6 Using the rules of bra-ket algebra, prove or evaluate the following: a. tr(XY ) = tr(YX ), where X and Y are operators; b. (XY )† = Y †X †, where X and Y are operators; c. exp[if (A)] =? in ket-bra form, where A is a Hermitian operator whose eigenvalues are known; d. ∑a ψa∗ (x )ψa (x ), where ψa (x ) = x |a .

1.7 a. Consider two kets |α and |β . Suppose a |α , a |α ,. . . and a |β , a |β ,. . .

are all known, where |a , |a ,. . . form a complete set of base kets. Find the matrix

representation of the operator |α β| in that basis.

b.

We

now

consider

a

spin

1 2

system

and

let

|α

and |β

be |Sz; +

and |Sx; + ,

respectively. Write down explicitly the square matrix that corresponds to |α β|

in the usual (sz diagonal) basis.

1.8 Suppose |i and | j are eigenkets of some Hermitian operator A. Under what condition can we conclude that |i + | j is also an eigenket of A? Justify your answer.

1.9 Consider a ket space spanned by the eigenkets {|a } of a Hermitian operator A. There is no degeneracy. a. Prove that
∏(A − a )
a
is the null operator.

56

Fundamental Concepts

b. What is the signiﬁcance of

∏
a =a

(A − a (a − a

) ?
)

c.

Illustrate (a) and (b) using

A set equal to Sz

of a spin

1 2

system.

1.10 Using the orthonormality of |+ and |− , prove

[Si, Sj] = iεijkh¯ Sk,

{Si, Sj} =

h¯ 2 2

δij,

where

Sx

=

h¯ (|+ 2

−| + |− +|),

Sy

=

ih¯ (−|+ 2

−| + |−

+|),

Sz

=

h¯ (|+ 2

+| − |−

−|).

1.11 Construct |S · nˆ ; + such that

S · nˆ |S · nˆ ; + = h¯ |S · nˆ ; + 2

where nˆ is characterized by the angles shown in the ﬁgure. Express your answer as a linear combination of |+ and |− . [Note: The answer is

cos β |+ + sin β eiα|− .

2

2

But do not just verify that this answer satisﬁes the above eigenvalue equation. Rather, treat the problem as a straightforward eigenvalue problem. Also do not use rotation operators, which we will introduce later in this book.]
z

nˆ

β
y α
x
1.12 The Hamiltonian operator for a two-state system is given by H = a(|1 1| − |2 2| + |1 2| + |2 1|),
where a is a number with the dimension of energy. Find the energy eigenvalues and the corresponding energy eigenkets (as linear combinations of |1 and |2 ).

57

Problems

1.13 A two-state system is characterized by the Hamiltonian

H = H11|1 1| + H22|2 2| + H12[|1 2| + |2 1|]

where H11, H22, and H12 are real numbers with the dimension of energy, and |1 and |2 are eigenkets of some observable ( = H). Find the energy eigenkets and corresponding energy eigenvalues. Make sure that your answer makes good sense for H12 = 0.

1.14

A

spin

1 2

system

is

known

to

be

in

an

eigenstate

of

S · nˆ

with

eigenvalue

h¯ /2,

where

nˆ is a unit vector lying in the xz-plane that makes an angle γ with the positive z-axis.

a. Suppose Sx is measured. What is the probability of getting + h¯ /2? b. Evaluate the dispersion in Sx, that is,

(Sx − Sx )2 .

(For your own peace of mind check your answers for the special cases γ = 0, π/2, and π.)

1.15

A

beam

of

spin

1 2

atoms

goes

through

a

series

of

Stern–Gerlach

type

measurements

as follows.

a. The ﬁrst measurement accepts sz = h¯ /2 atoms and rejects sz = −h¯ /2 atoms.

b. The second measurement accepts sn = h¯ /2 atoms and rejects sn = −h¯ /2 atoms, where sn is the eigenvalue of the operator S · nˆ , with nˆ making an angle β in the

xz-plane with respect to the z-axis.

c. The third measurement accepts sz = −h¯ /2 atoms and rejects sz = h¯ /2 atoms.

What is the intensity of the ﬁnal sz = −h¯ /2 beam when the sz = h¯ /2 beam surviving

the ﬁrst measurement is normalized to unity? How must we orient the second

measuring apparatus if we are to maximize the intensity of the ﬁnal sz = −h¯ /2 beam?

1.16 A certain observable in quantum mechanics has a 3 × 3 matrix representation as

follows:

⎛

⎞

√1

⎝

0 1

1 0

0 1 ⎠.

2 010

a. Find the normalized eigenvectors of this observable and the corresponding eigenvalues. Is there any degeneracy?
b. Give a physical example where all this is relevant.

1.17 Let A and B be observables. Suppose the simultaneous eigenkets of A and B {|a , b } form a complete orthonormal set of base kets. Can we always conclude that

[A, B] = 0?

If your answer is yes, prove the assertion. If your answer is no, give a counterexample.

58

Fundamental Concepts

1.18 Two Hermitian operators anticommute:

{A, B} = AB + BA = 0.

Is it possible to have a simultaneous (that is, common) eigenket of A and B? Prove or illustrate your assertion.

1.19 Two observables A1 and A2, which do not involve time explicitly, are known not to commute,
[A1, A2] = 0,

yet we also know that A1 and A2 both commute with the Hamiltonian:

[A1, H] = 0, [A2, H] = 0.

Prove that the energy eigenstates are, in general, degenerate. Are there exceptions? As an example, you may think of the central-force problem H = p2/2m + V(r), with A1 → Lz, A2 → Lx.
1.20 a. The simplest way to derive the Schwarz inequality goes as follows. First, observe
( α| + λ∗ β|) · (|α + λ|β ) ≥ 0

for any complex number λ; then choose λ in such a way that the preceding inequality reduces to the Schwarz inequality. b. Show that the equality sign in the generalized uncertainty relation holds if the state in question satisﬁes
ΔA|α = λΔB|α

with λ purely imaginary. c. Explicit calculations using the usual rules of wave mechanics show that the wave
function for a Gaussian wave packet given by

x |α

= (2πd2)−1/4 exp

i

px h¯

− (x

−x 4d2

)2

satisﬁes the minimum uncertainty relation

Prove that the requirement

(Δx)2

(Δp)2

=

h¯ .

2

x |Δx|α = (imaginary number) x |Δp|α

is indeed satisﬁed for such a Gaussian wave packet, in agreement with (b).

1.21 a. Compute

(ΔSx)2 ≡ S2x − Sx 2,

59

Problems

where the expectation value is taken for the Sz+ state. Using your result, check the generalized uncertainty relation
(ΔA)2 (ΔB)2 ≥ 1 | [A, B] |2, 4
with A → Sx, B → Sy. b. Check the uncertainty relation with A → Sx, B → Sy for the Sx+ state.
1.22 Find the linear combination of |+ and |− kets that maximizes the uncertainty product (ΔSx)2 (ΔSy)2 .

Verify explicitly that for the linear combination you found, the uncertainty relation for Sx and Sy is not violated.
1.23 Evaluate the x-p uncertainty product (Δx)2 (Δp)2 for a one-dimensional particle conﬁned between two rigid walls

V=

0 for 0 < x < a, ∞ otherwise.

Do this for both the ground and excited states.

1.24 Estimate the rough order of magnitude of the length of time that an ice pick can be balanced on its point if the only limitation is that set by the Heisenberg uncertainty principle. Assume that the point is sharp and that the point and the surface on which it rests are hard. You may make approximations which do not alter the general order of magnitude of the result. Assume reasonable values for the dimensions and weight of the ice pick. Obtain an approximate numerical result and express it in-
 seconds.

1.25 Consider a three-dimensional ket space. If a certain set of orthonormal kets, say, |1 ,

|2 , and |3 , are used as the base kets, the operators A and B are represented by

⎛

⎞

⎛

⎞

a0 0

b0 0

A =. ⎝ 0 −a 0 ⎠ , B =. ⎝ 0 0 −ib ⎠

0 0 −a

0 ib 0

with a and b both real. a. Obviously A exhibits a degenerate spectrum. Does B also exhibit a degenerate
spectrum? b. Show that A and B commute. c. Find a new set of orthonormal kets which are simultaneous eigenkets of both A
and B. Specify the eigenvalues of A and B for each of the three eigenkets. Does your speciﬁcation of eigenvalues completely characterize each eigenket?
√ 1.26 a. Prove that (1/ 2)(1 + iσx), where the matrix σx is given in (3.50), acting on
a two-component spinor can be regarded as the matrix representation of the rotation operator about the x-axis by angle −π/2. (The minus sign signiﬁes that the rotation is clockwise.)

60

Fundamental Concepts

b. Construct the matrix representation of Sz when the eigenkets of Sy are used as base vectors.

1.27 Some authors deﬁne an operator to be real when every member of its matrix elements b |A|b is real in some representation ({|b } basis in this case). Is this concept representation independent, that is, do the matrix elements remain real even if some basis other than {|b } is used? Check your assertion using familiar operators such as Sy and Sz (see Problem 1.26) or x and px.

1.28 Construct the transformation matrix that connects the Sz diagonal basis to the Sx diagonal basis. Show that your result is consistent with the general relation
∑ U = |b(r) a(r)|. r
1.29 a. Suppose that f (A) is a function of a Hermitian operator A with the property A|a = a |a . Evaluate b | f (A)|b when the transformation matrix from the a basis to the b basis is known.
b. Using the continuum analogue of the result obtained in (a), evaluate

p |F(r)|p .

Simplify your expression as far as you can. Note that r is x2 + y2 + z2, where x, y, and z are operators.

1.30 a. Let x and px be the coordinate and linear momentum in one dimension. Evaluate the classical Poisson bracket

[x, F(px)]classical.
b. Let x and px be the corresponding quantum-mechanical operators this time. Evaluate the commutator x, exp ipxa . h¯
c. Using the result obtained in (b), prove that
exp ipxa |x (x|x = x |x ) h¯
is an eigenstate of the coordinate operator x. What is the corresponding eigenvalue?

1.31 a. On p. 247, Gottfried (1966) states that

∂G [xi, G(p)] = ih¯ ∂ pi ,

[

pi,

F(x)]

=

−ih¯

∂ ∂

F xi

can be “easily derived” from the fundamental commutation relations for all functions of F and G that can be expressed as power series in their arguments. Verify this statement. b. Evaluate [x2, p2]. Compare your result with the classical Poisson bracket [x2, p2]classical.

61

Problems

1.32 The translation operator for a ﬁnite (spatial) displacement is given by J (l) = exp −ip · l , h¯
where p is the momentum operator. a. Evaluate
[xi, J (l)].
b. Using (a) (or otherwise), demonstrate how the expectation value x changes under translation.

1.33 In the main text we discussed the effect of J (dx ) on the position and momentum eigenkets and on a more general state ket |α . We can also study the behavior of expectation values x and p under inﬁnitesimal translation. Using (1.207), (1.227), and |α → J (dx )|α only, prove x → x + dx , p → p under inﬁnitesimal translation.

1.34 Starting with a momentum operator p having eigenstates |p , deﬁne an inﬁnitesimal boost operator B(dp ) that changes one momentum eigenstate into another, that is

B(dp )|p = |p + dp .

Show that the form B(dp ) = 1 + iW · dp , where W is Hermitian, satisﬁes the unitary, associative, and inverse properties that are appropriate for B(dp ). Use dimensional analysis to express W in terms of the position operator x, and show that the result satisﬁes the canonical commutation relations [xi, pj] = ih¯ δij. Derive an expression for the matrix element p |x|α in terms of a derivative with respect to p of p |α .

1.35 a. Verify (1.271a) and (1.271b) for the expectation value of p and p2 from the Gaussian wave packet (1.267).
b. Evaluate the expectation value of p and p2 using the momentum-space wave function (1.274).

1.36 a. Prove the following:

(i)

p |x|α

∂ = ih¯ ∂ p

p |α ,

(ii) β|x|α =

dp

φ∗β (p

∂ )ih¯ ∂ p

φ α (p

),

where φα(p ) = p |α and φβ(p ) = p |β are momentum-space wave functions.

b. What is the physical signiﬁcance of

ixΞ

exp

,

h¯

where x is the position operator and Ξ is some number with the dimension of momentum? Justify your answer.

2

Quantum Dynamics

So far we have not discussed how physical systems change with time. This chapter is devoted exclusively to the dynamic development of state kets and/or observables. In other words, we are concerned here with the quantum-mechanical analogue of Newton’s (or Lagrange’s or Hamilton’s) equations of motion.

2.1 Time Evolution and the Schrödinger Equation

The ﬁrst important point we should keep in mind is that time is just a parameter in quantum mechanics, not an operator. In particular, time is not an observable in the language of the previous chapter. It is nonsensical to talk about the time operator in the same sense as we talk about the position operator. Ironically, in the historical development of wave mechanics both L. de Broglie and E. Schro¨dinger were guided by a kind of covariant analogy between energy and time on the one hand and moment-
um and position (spatial coordinate) on the other. Yet when we now look at quantum mechanics in its ﬁnished form, there is no trace of a symmetrical treatment between time and space. The relativistic quantum theory of ﬁelds does treat the time and space coordinates on the same footing, but it does so only at the expense of demoting position from the status of being an observable to that of being just a parameter.

2.1.1 Time-Evolution Operator

Our basic concern in this section is, How does a state ket change with time? Suppose we have a physical system whose state ket at t0 is represented by |α . At later times, we do not, in general, expect the system to remain in the same state |α . Let us denote the ket corresponding to the state at some later time by

|α, t0; t (t > t0),

(2.1)

where we have written α, t0 to remind ourselves that the system used to be in state |α at some earlier reference time t0. Because time is assumed to be a continuous parameter, we expect

lim
t→t0

|α,

t0

;

t

= |α

(2.2)

62

63

2.1 Time Evolution and the Schrödinger Equation

and we may as well use a shorthand notation,

|α, t0; t0 = |α, t0 ,

(2.3)

for this. Our basic task is to study the time evolution of a state ket:

|α, t0 = |α t−im−e−e−v−ol−ut−io→n |α, t0; t .

(2.4)

Put in another way, we are interested in asking how the state ket changes under a time displacement t0 → t.
As in the case of translation, the two kets are related by an operator which we call the time-evolution operator U (t, t0):

|α, t0; t = U (t, t0)|α, t0 .

(2.5)

What are some of the properties we would like to ascribe to the time-evolution operator? The ﬁrst important property is the unitary requirement for U (t, t0) that follows from probability conservation. Suppose that at t0 the state ket is expanded in terms of the eigenkets of some observable A:

|α, t0 = ∑ ca (t0)|a . a

(2.6)

Likewise, at some later time, we have

|α, t0; t = ∑ ca (t)|a .

(2.7)

a

In general, we do not expect the modulus of the individual expansion coefﬁcient to remain the same:1

|ca (t)| = |ca (t0)|.

(2.8)

For

instance,

consider

a

spin

1 2

system

with

its

spin

magnetic

moment

subjected

to

a

uniform magnetic ﬁeld in the z-direction. To be speciﬁc, suppose that at t0 the spin is

in the positive x-direction; that is, the system is prepared in an eigenstate of Sx with

eigenvalue h¯ /2. As time goes on, the spin precesses in the xy-plane, as will be quantitatively

demonstrated later in this section. This means that the probability for observing Sx + is no longer unity at t > t0; there is a ﬁnite probability for observing Sx − as well. Yet the sum of the probabilities for Sx + and Sx − remains unity at all times. Generally, in the notation of

(2.6) and (2.7), we must have

∑ |ca (t0)|2 = ∑ |ca (t)|2

a

a

(2.9)

despite (2.8) for the individual expansion coefﬁcients. Stated another way, if the state ket is initially normalized to unity, it must remain normalized to unity at all later times:

α, t0|α, t0 = 1 ⇒ α, t0; t|α, t0; t = 1.

(2.10)

1 We later show, however, that if the Hamiltonian commutes with A, then |ca (t)| is indeed equal to |ca (t0)|.

64

Quantum Dynamics

As in the translation case, this property is guaranteed if the time-evolution operator is taken to be unitary. For this reason we take unitarity,

U †(t, t0)U (t, t0) = 1,

(2.11)

to be one of the fundamental properties of the U operator. It is no coincidence that many authors regard unitarity as being synonymous with probability conservation.
Another feature we require of the U operator is the composition property:

U (t2, t0) = U (t2, t1)U (t1, t0) (t2 > t1 > t0).

(2.12)

This equation says that if we are interested in obtaining time evolution from t0 to t2, then we can obtain the same result by ﬁrst considering time evolution from t0 to t1, then from t1 to t2, a reasonable requirement. Note that we read (2.12) from right to left!
It also turns out to be advantageous to consider an inﬁnitesimal time-evolution operator U (t0 + dt, t0):

|α, t0; t0 + dt = U (t0 + dt, t0)|α, t0 .

(2.13)

Because of continuity [see (2.2)], the inﬁnitesimal time-evolution operator must reduce to the identity operator as dt goes to zero,

lim
dt→0

U

(t0

+

dt,

t0)

=

1,

(2.14)

and as in the translation case, we expect the difference between U (t0 + dt, t0) and 1 to be of ﬁrst order in dt.
We assert that all these requirements are satisﬁed by

U (t0 + dt, t0) = 1 − iΩ dt, where Ω is a Hermitian operator,2
Ω† = Ω.

(2.15) (2.16)

With (2.15) the inﬁnitesimal time-displacement operator satisﬁes the composition property

U (t0 + dt1 + dt2, t0) = U (t0 + dt1 + dt2, t0 + dt1)U (t0 + dt1, t0);

(2.17)

it differs from the identity operator by a term of order dt. The unitarity property can also be checked as follows:

U †(t0 + dt, t0)U (t0 + dt, t0) = (1 + iΩ†dt)(1 − iΩdt) 1,

(2.18)

to the extent that terms of order (dt)2 or higher can be ignored. The operator Ω has the dimension of frequency or inverse time. Is there any familiar
observable with the dimension of frequency? We recall that in the old quantum theory, angular frequency ω is postulated to be related to energy by the Planck–Einstein relation

E = h¯ ω.

(2.19)

2 If the Ω operator depends on time explicitly, it must be evaluated at t0.

65

2.1 Time Evolution and the Schrödinger Equation

Let us now borrow from classical mechanics the idea that the Hamiltonian is the generator of time evolution (Goldstein et al. (2002), pp. 401–402). It is then natural to relate Ω to the Hamiltonian operator H:

Ω

=

H .

h¯

To sum up, the inﬁnitesimal time-evolution operator is written as

(2.20)

U

(t0

+

dt,

t0)

=

1

−

iH dt h¯

,

(2.21)

where H, the Hamiltonian operator, is assumed to be Hermitian. The reader may ask

whether the h¯ introduced here is the same as the h¯ that appears in the expression for the

translation operator (1.214). This question can be answered by comparing the quantum-

mechanical equation of motion we derive later with the classical equation of motion.

It turns out that unless the two h¯ are taken to be the same, we are unable to obtain a

relation like

dx p =
dt m

(2.22)

as the classical limit of the corresponding quantum-mechanical relation.

2.1.2 The Schrödinger Equation

We are now in a position to derive the fundamental differential equation for the timeevolution operator U (t, t0). We exploit the composition property of the time-evolution operator by letting t1 → t, t2 → t + dt in (2.12):

U (t + dt, t0) = U (t + dt, t)U (t, t0) =

1 − iH dt h¯

U (t, t0),

(2.23)

where the time difference t − t0 need not be inﬁnitesimal. We have

U (t + dt, t0) − U (t, t0) = −i

H h¯

dtU (t, t0),

(2.24)

which can be written in differential equation form:

ih¯

∂ ∂t

U

(t,

t0)

=

HU

(t,

t0).

(2.25)

This is the Schro¨dinger equation for the time-evolution operator. Everything that has

to do with time development follows from this fundamental equation.

Equation (2.25) immediately leads to the Schro¨dinger equation for a state ket. Multiply-

ing both sides of (2.25) by |α, t0 on the right, we obtain

ih¯

∂ ∂t

U

(t,

t0)|α,

t0

= HU (t, t0)|α, t0 .

(2.26)

But |α, t0 does not depend on t, so this is the same as

ih¯

∂ ∂t

|α,

t0

;

t

= H|α, t0; t ,

(2.27)

where (2.5) has been used.

66

Quantum Dynamics

If we are given U (t, t0) and, in addition, know how U (t, t0) acts on the initial state ket |α, t0 , it is not necessary to bother with the Schro¨dinger equation for the state ket (2.27). All we have to do is apply U (t, t0) to |α, t0 ; in this manner we can obtain a state ket at any t. Our ﬁrst task is therefore to derive formal solutions to the Schro¨dinger equation for the time-evolution operator (2.25). There are three cases to be treated separately.
Case 1. The Hamiltonian operator is independent of time. By this we mean that even when the parameter t is changed, the H operator remains unchanged. The Hamiltonian for a spin-magnetic moment interacting with a time-independent magnetic ﬁeld is an example of this. The solution to (2.25) in such a case is given by

U (t, t0) = exp

−iH(t − t0) h¯

.

(2.28)

To prove this let us expand the exponential as follows:

exp −iH(t − t0) = 1 + −iH(t − t0) + (−i)2

H(t − t0)

2
+··· .

h¯

h¯

2

h¯

(2.29)

Because the time derivative of this expansion is given by

∂ ∂ t exp

−iH(t − t0) h¯

−iH (−i)2

=+

h¯

2

2

H h¯

2
(t − t0) + · · · ,

(2.30)

expression (2.28) obviously satisﬁes differential equation (2.25). The boundary condition is also satisﬁed because as t → t0, (2.28) reduces to the identity operator. An alternative way to obtain (2.28) is to compound successively inﬁnitesimal time-evolution operators just as we did to obtain (1.218) for ﬁnite translation:

lim

1 − (iH/h¯ )(t − t0)

N
= exp

−iH(t − t0)

.

N→∞

N

h¯

(2.31)

Case 2. The Hamiltonian operator H is time dependent but the H at different times commute. As an example, let us consider the spin-magnetic moment subjected to a magnetic ﬁeld whose strength varies with time but whose direction is always unchanged. The formal solution to (2.25) in this case is

U (t, t0) = exp −

i h¯

t
dt H(t ) .
t0

(2.32)

This can be proved in a similar way. We simply replace H(t − t0) in (2.29) and (2.30) by

t t0

dt

H(t

).

Case 3. The H at different times do not commute. Continuing with the example involving spin-magnetic moment, we suppose, this time, that the magnetic ﬁeld direction also changes with time: at t = t1 in the x-direction, at t = t2 in the y-direction, and so forth. Because Sx and Sy do not commute, H(t1) and H(t2), which go like S · B, do not commute either. The formal solution in such a situation is given by

∑∞
U (t, t0) = 1 +
n=1

−i h¯

nt

t1

tn−1

dt1 dt2 · · ·

dtn H(t1)H(t2) · · · H(tn),

t0

t0

t0

(2.33)

67

2.1 Time Evolution and the Schrödinger Equation

which is sometimes known as the Dyson series, after F. J. Dyson, who developed a perturbation expansion of this form in quantum ﬁeld theory. We do not prove (2.33) now because the proof is very similar to the one presented in Chapter 5 for the time-evolution operator in the interaction picture.
In elementary applications, only case 1 is of practical interest. In the remaining part of this chapter we assume that the H operator is time independent. We will encounter timedependent Hamiltonians in Chapter 5.
2.1.3 Energy Eigenkets

To be able to evaluate the effect of the time-evolution operator (2.28) on a general initial ket |α , we must ﬁrst know how it acts on the base kets used in expanding |α . This is particularly straightforward if the base kets used are eigenkets of A such that

[A, H] = 0;

(2.34)

then the eigenkets of A are also eigenkets of H, called energy eigenkets, whose eigenvalues are denoted by Ea :

H|a = Ea |a .

(2.35)

We can now expand the time-evolution operator in terms of |a a |. Taking t0 = 0 for simplicity, we obtain

−iHt exp
h¯

= ∑∑|a aa

a | exp −iHt |a h¯

a|

= ∑ |a exp a

−iEa t h¯

a |.

(2.36)

The time-evolution operator written in this form enables us to solve any initial-value problem once the expansion of the initial ket in terms of {|a } is known. As an example, suppose that the initial ket expansion reads

|α, t0 = 0 = ∑ |a a |α = ∑ ca |a .

a

a

(2.37)

We then have

|α, t0 = 0; t = exp

−iHt h¯

|α, t0 = 0 = ∑ |a a

a |α exp

−iEa t h¯

.

(2.38)

In other words, the expansion coefﬁcient changes with time as

ca (t = 0) → ca (t) = ca (t = 0) exp

−iEa t h¯

(2.39)

with its modulus unchanged. Notice that the relative phases among various components do vary with time because the oscillation frequencies are different.
A special case of interest is where the initial state happens to be one of {|a } itself. We have

|α, t0 = 0 = |a

(2.40)

68

Quantum Dynamics

initially, and at a later time

|a, t0 = 0; t = |a exp

−iEa t h¯

,

(2.41)

so if the system is initially a simultaneous eigenstate of A and H, it remains so at all times. The most that can happen is the phase modulation, exp(−iEa t/h¯ ). It is in this sense that an observable compatible with H [see (2.34)] is a constant of the motion. We will encounter this connection once again in a different form when we discuss the Heisenberg equation of motion.
In the foregoing discussion the basic task in quantum dynamics is reduced to ﬁnding an observable that commutes with H and evaluating its eigenvalues. Once that is done, we expand the initial ket in terms of the eigenkets of that observable and just apply the timeevolution operator. This last step merely amounts to changing the phase of each expansion coefﬁcient, as indicated by (2.39).
Even though we worked out the case where there is just one observable A that commutes with H, our considerations can easily be generalized when there are several mutually compatible observables all also commuting with H:

[A, B] = [B, C] = [A, C] = · · · = 0, [A, H] = [B, H] = [C, H] = · · · = 0.

(2.42)

Using the collective index notation of Section 1.4 [see (1.130)], we have

exp

−iHt h¯

= ∑ |K exp K

−iEK t h¯

K |,

(2.43)

where EK is uniquely speciﬁed once a , b , c ,. . . are speciﬁed. It is therefore of fundamental importance to ﬁnd a complete set of mutually compatible observables that also commute

with H. Once such a set is found, we express the initial ket as a superposition of the

simultaneous eigenkets of A, B, C, . . . and H. The ﬁnal step is just to apply the time-

evolution operator, written as (2.43). In this manner we can solve the most general initial-

value problem with a time-independent H.

2.1.4 Time Dependence of Expectation Values

It is instructive to study how the expectation value of an observable changes as a function of time. Suppose that at t = 0 the initial state is one of the eigenstates of an observable A that commutes with H, as in (2.40). We now look at the expectation value of some other observable B, which need not commute with A nor with H. Because at a later time we have

|a , t0 = 0; t = U (t, 0)|a

(2.44)

for the state ket, B is given by

B = ( a |U †(t, 0)) · B · (U (t, 0)|a )

= a | exp iEa t B exp −iEa t |a

h¯

h¯

= a |B|a ,

(2.45)

69

2.1 Time Evolution and the Schrödinger Equation

which is independent of t. So the expectation value of an observable taken with respect to an energy eigenstate does not change with time. For this reason an energy eigenstate is often referred to as a stationary state.
The situation is more interesting when the expectation value is taken with respect to a superposition of energy eigenstates, or a nonstationary state. Suppose that initially we have

|α, t0 = 0 = ∑ ca |a . a
We easily compute the expectation value of B to be

(2.46)

∑ B =

c∗a a | exp
a

iEa t h¯

· B · ∑ ca exp a

−iEa t h¯

|a

= ∑ ∑ c∗a ca aa

a |B|a

exp

−i(Ea − Ea )t h¯

.

(2.47)

So this time the expectation value consists of oscillating terms whose angular frequencies are determined by N. Bohr’s frequency condition

ωa a

= (Ea

− Ea ) . h¯

(2.48)

2.1.5 Spin Precession

It is appropriate to treat an example here. We consider an extremely simple system which,

however, illustrates the basic formalism we have developed.

We

start

with

a

Hamiltonian

of

a

spin

1 2

system

with

magnetic

moment

eh¯ /2mec

subjected

to an external magnetic ﬁeld B:

e

H=−

S·B

mec

(2.49)

(e < 0 for the electron). Furthermore, we take B to be a static, uniform magnetic ﬁeld in the z-direction. We can then write H as

H=−

eB mec

Sz.

(2.50)

Because Sz and H differ just by a multiplicative constant, they obviously commute. The Sz eigenstates are also energy eigenstates, and the corresponding energy eigenvalues are

E±

=

∓

eh¯ B 2mec

,

for Sz ± .

(2.51)

It is convenient to deﬁne ω in such a way that the difference in the two energy eigenvalues is h¯ ω:

ω

≡

|e|B .

mec

(2.52)

70

Quantum Dynamics

We can then rewrite the H operator simply as

H = ωSz.

(2.53)

All the information on time development is contained in the time-evolution operator

U (t, 0) = exp −iωSzt . h¯

(2.54)

We apply this to the initial state. The base kets we must use in expanding the initial ket are obviously the Sz eigenkets, |+ and |− , which are also energy eigenkets. Suppose that at t = 0 the system is characterized by

|α = c+|+ + c−|− .

(2.55)

Upon applying (2.54), we see that the state ket at some later time is

|α, t0 = 0; t = c+ exp

−iωt 2

|+ + c− exp

+iωt 2

|− ,

(2.56)

where we have used

H|± = ±h¯ ω |± . 2

(2.57)

Speciﬁcally, let us suppose that the initial ket |α represents the spin-up (or, more precisely, Sz+) state |+ , which means that

c+ = 1, c− = 0.

(2.58)

At a later time, (2.56) tells us that it is still in the spin-up state, which is no surprise because this is a stationary state.
Next, let us suppose that initially the system is in the Sx+ state. Comparing (1.110a) with (2.55), we see that

c+ = c− = √1 . 2

(2.59)

It is straightforward to work out the probabilities for the system to be found in the Sx± state at some later time t:

| Sx; ±|α, t0 = 0; t |2 =

√1 +| ± √1 −| · √1 exp −iωt |+

2

2

2

2

+ √1 exp +iωt |− 2

2

2

1

−iωt

= exp

± 1 exp +iωt

2

2

2

2

2

= cos2 ωt 2

for

Sx+,

= sin2 ωt 2

for

Sx − .

(2.60a) (2.60b)

Even though the spin is initially in the positive x-direction, the magnetic ﬁeld in the z-direction causes it to rotate; as a result, we obtain a ﬁnite probability for ﬁnding

71

2.1 Time Evolution and the Schrödinger Equation

Sx− at some later time. The sum of the two probabilities is seen to be unity at all times, in agreement with the unitarity property of the time-evolution operator.
Using (1.99), we can write the expectation value of Sx as

Sx =

h¯ 2

cos2

ωt +
2

−h¯ 2

sin2

ωt 2

= h¯ cos ωt, 2

(2.61)

so this quantity oscillates with an angular frequency corresponding to the difference of the two energy eigenvalues divided by h¯ , in agreement with our general formula (2.47). Similar exercises with Sy and Sz show that

Sy =

h¯ 2

sin ωt

(2.62a)

and

Sz = 0.

(2.62b)

Physically this means that the spin precesses in the xy-plane. We will comment further on spin precession when we discuss rotation operators in Chapter 3.
Experimentally, spin precession is well established. In fact, it is used as a tool for other investigations of fundamental quantum-mechanical phenomena. For example, the form of the Hamiltonian (2.49) can be derived for pointlike particles, such as electrons or muons, which obey the Dirac equation, for which the gyromagnetic ratio g = 2. (See Section 8.2.) However, higher-order corrections from quantum ﬁeld theory predict a small but precisely calculable deviation from this, and it is a high prior-
ity to produce competitively precise measurements of g − 2.
Such an experiment has been recently completed. See Bennett et al., Phys. Rev. D, 73 (2006) 072003. Muons are injected into a “storage ring” designed so that their spins would precess in lock step with their momentum vector only if g ≡ 2. Consequently, observation of their precession measures g − 2 directly, facilitating a very precise result. Figure 2.1 shows the experimenters’ observation of the muon spin rotation over more than one hundred periods. They determine a value for g − 2 to a precisio-
n smaller than one part per million, which agrees reasonably well with the theoretical value.

2.1.6 Neutrino Oscillations

A lovely example of quantum-mechanical dynamics leading to interference in a two-state system, based on current physics research, is provided by the phenomenon known as neutrino oscillations.3
Neutrinos are elementary particles with no charge, and very small mass, much smaller than that of an electron. They are known to occur in nature in three distinct “ﬂavors,”
3 The treatment here is the straightforward approach usually covered in the literature, but it has shortcomings. See, for example, Cohen et al., Phys. Lett. B, 678 (2009) 191 and Akhmedov (2018) arXiv:1901.05232 [hep-ph].

72

Quantum Dynamics

10

Million events per 149.2 ns

1

10–1

10–2

Fig. 2.1

10–3

0

20

40

60

80

100

Time modulo 100 μs

Observations of the precession of muon spin by Bennett et al., Phys. Rev. D, 73 (2006) 072003. Data points are wrapped around every 100 μs. The size of the signal decreases with time because the muons decay.

although for this discussion it sufﬁces to only consider two of them. These two ﬂavors are identiﬁed by their interactions which may be either with electrons, in which case we write νe, or with muons, that is νμ. These are in fact eigenstates of a Hamiltonian which controls those interactions.
On the other hand, it is possible (and, in fact, now known to be true) that neutrinos may have some other interactions, in which case their energy eigenvalues correspond to states that have a well-deﬁned mass. These “mass eigenstates” would have eigenvalues E1 and E2, say, corresponding to masses m1 and m2, and might be denoted as |ν1 and |ν2 . The “ﬂavor eigenstates” are related to these through a simple unitary transformation, speciﬁed by some mixing angle θ , as follows:

|νe = cos θ |ν1 − sin θ |ν2

(2.63a)

|νμ = sin θ |ν1 + cos θ |ν2 .

(2.63b)

If the mixing angle were zero, then |νe and |νμ would respectively be the same as |ν1 and |ν2 . However, we know of no reason why this should be the case. Indeed, there is no strong theoretical bias for any particular value of θ , and it is a free parameter which, today, can only be determined through experiment.
Neutrino oscillation is the phenomenon by which we can measure the mixing angle. Suppose we prepare, at time t = 0, a momentum eigenstate of one ﬂavor of neutrino, say |νe . Then according to (2.63a) the two different mass eigenstate components will evolve with different frequencies, and therefore develop a relative phase difference. If the difference in the masses is small enough, then this phase difference can build up over a macroscopic distance. In fact, by measuring the interference as a func-
tion of difference,

73

2.1 Time Evolution and the Schrödinger Equation

one can observe oscillations with a period that depends on the difference of masses, and an amplitude that depends on the mixing angle.
It is straightforward (see Problem 2.4 at the end of this chapter) to use (2.63) along with (2.28) and our quantum-mechanical postulates, and ﬁnd a measurable quantity that exhibits neutrino oscillations. In this case, the Hamiltonian is just that for a free particle, but we need to take some care. Neutrinos are very low mass, so they are highly relativistic for any practical experimental conditions. Therefore, for a ﬁxed momentum p, the energy eigenvalue for a neutrino of mass m is given to an ex-
tremely good approximation as

E = p2c2 + m2c4 1/2 ≈ pc

m2c2 1 + 2p2

.

(2.64)

If we then allow our state |νe to evolve, and then at some later time t ask what is the probability that it still appears as a |νe (as opposed to a |νμ ), we ﬁnd

P(νe → νe) = 1 − sin2 2θ sin2

Δm2c4 L 4Eh¯ c

(2.65)

where Δm2 ≡ m21 − m22, L = ct is the ﬂight distance of the neutrino, and E = pc is the nominal neutrino energy.
The oscillations predicted by (2.65) have been dramatically observed by the KamLAND experiment. See Figure 2.2. Neutrinos from a series of nuclear reactors are detected at a distance of ∼150km, and the rate is compared to that expected from reactor power and properties. The curve is not a perfect sine wave because the reactors are not all at the same distance from the detector.

Data - BG - Geo ve Expectation based on osci. parameters

1.0

determined by KamLAND

Survival probability

0.8

0.6

0.4

0.2

Fig. 2.2

0 20

30

40

50

60

70

80

90 100

L0 /E ve (km/MeV)

Neutrino oscillations as observed by the KamLAND experiment, taken from Abe et al., Phys. Rev. Lett., 100 (2008) 221803. The oscillations as a function of L/E demonstrate interference between different mass eigenstates of neutrinos.

74

Quantum Dynamics

2.1.7 Correlation Amplitude and the Energy-Time Uncertainty Relation

We conclude this section by asking how state kets at different times are correlated with each other. Suppose the initial state ket at t = 0 of a physical system is given by |α . With time it changes into |α, t0 = 0; t , which we obtain by applying the time-evolution operator. We are concerned with the extent to which the state ket at a later time t is similar to the state ket at t = 0; we therefore construct the inner product between the two state kets at different times:

C(t) ≡ α|α, t0 = 0; t = α|U (t, 0)|α ,

(2.66)

which is known as the correlation amplitude. The modulus of C(t) provides a quantitative measure of the “resemblance” between the state kets at different times.
As an extreme example, consider the very special case where the initial ket |α is an eigenket of H; we then have

C(t) = a |a , t0 = 0; t = exp

−iEa t h¯

,

(2.67)

so the modulus of the correlation amplitude is unity at all times, which is not surprising for a stationary state. In the more general situation where the initial ket is represented by a superposition of {|a }, as in (2.37), we have

C(t) = ∑ c∗a a | a

∑ ca exp
a

−iEa t h¯

|a

∑ = |ca |2 exp a

−iEa t h¯

.

(2.68)

As we sum over many terms with oscillating time dependence of different frequencies, a strong cancellation is possible for moderately large values of t. We expect the correlation amplitude that starts with unity at t = 0 to decrease in magnitude with time.
To estimate (2.68) in a more concrete manner, let us suppose that the state ket can be regarded as a superposition of so many energy eigenkets with similar energies that we can regard them as exhibiting essentially a quasi-continuous spectrum. It is then legitimate to replace the sum by the integral

∑ → dEρ(E), ca → g(E)

,

a

E Ea

(2.69)

where ρ(E) characterizes the density of energy eigenstates. Expression (2.68) now becomes

C(t) = dE|g(E)|2ρ(E) exp −iEt , h¯

(2.70)

subject to the normalization condition

dE|g(E)|2ρ(E) = 1.

(2.71)

75

2.2 The Schrödinger Versus the Heisenberg Picture

In a realistic physical situation |g(E)|2ρ(E) may be peaked around E = E0 with width ΔE. Writing (2.70) as

C(t) = exp −iE0t h¯

dE|g(E)|2ρ(E) exp −i(E − E0)t , h¯

(2.72)

we see that as t becomes large, the integrand oscillates very rapidly unless the energy interval |E − E0| is small compared with h¯ /t. If the interval for which |E − E0| h¯ /t holds is much narrower than ΔE, the width of |g(E)|2ρ(E), we get essentially no contribution to C(t) because of strong cancellations. The characteristic time at which the modulus of the
correlation amplitude starts becoming appreciably different from 1 is given by

t

h¯ ΔE

.

(2.73)

Even though this equation is obtained for a superposition state with a quasi-continuous

energy spectrum, it also makes sense for a two-level system; in the spin-precession problem

considered earlier, the state ket, which is initially |Sx+ , starts losing its identity after ∼ 1/ω = h¯ /(E+ − E−), as is evident from (2.60).
To summarize, as a result of time evolution the state ket of a physical system ceases to

retain its original form after a time interval of order h¯ /ΔE. In the literature this point is

often said to illustrate the energy-time uncertainty relation

ΔtΔE h¯ .

(2.74)

However, it is to be clearly understood that this energy-time uncertainty relation is of a very different nature from the uncertainty relation between two incompatible observables discussed in Section 1.4. In Chapter 5 we will come back to (2.74) in connection with time-dependent perturbation theory.

2.2 The Schrödinger Versus the Heisenberg Picture

2.2.1 Unitary Operators
In the previous section we introduced the concept of time development by considering the time-evolution operator that affects state kets; that approach to quantum dynamics is known as the Schro¨dinger picture. There is another formulation of quantum dynamics where observables, rather than state kets, vary with time; this second approach is known as the Heisenberg picture. Before discussing the differences between the two approaches in detail, we digress to make some general comments on unitary ope-
rators.
Unitary operators are used for many different purposes in quantum mechanics. In this book we introduced (Section 1.5) an operator satisfying the unitarity property. In that section we were concerned with the question of how the base kets in one representation are related to those in some other representations. The state kets themselves are assumed not to change as we switch to a different set of base kets even though the numerical values of the expansion coefﬁcients for |α are, of course, differen-
t in different representations.

76

Quantum Dynamics

Subsequently we introduced two unitary operators that actually change the state kets, the translation operator of Section 1.6 and the time-evolution operator of Section 2.1. We have

|α → U|α ,

(2.75)

where U may stand for T (dx) or U (t, t0). Here U|α is the state ket corresponding to a physical system that actually has undergone translation or time evolution.
It is important to keep in mind that under a unitary transformation that changes the state kets, the inner product of a state bra and a state ket remains unchanged:

β|α → β|U†U|α = β|α .

(2.76)

Using the fact that these transformations affect the state kets but not operators, we can infer how β|X |α must change:

β|X |α → ( β|U†) · X · (U|α ) = β|U†XU|α .

(2.77)

We now make a very simple mathematical observation that follows from the associative axiom of multiplication.

( β|U†) · X · (U|α ) = β| · (U†XU) · |α .

(2.78)

Is there any physics in this observation? This mathematical identity suggests two approaches to unitary transformations.

Approach 1:

|α → U|α , with operators unchanged.

(2.79a)

Approach 2:

X → U†XU, with state kets unchanged.

(2.79b)

In classical physics we do not introduce state kets, yet we talk about translation, time evolution, and the like. This is possible because these operations actually change quantities such as x and L, which are observables of classical mechanics. We therefore conjecture that a closer connection with classical physics may be established if we follow approach 2.
A simple example may be helpful here. We go back to the inﬁnitesimal translation operator T (dx ). The formalism presented in Section 1.6 is based on approach 1; T (dx ) affects the state kets, not the position operator:

|α → 1 − ip · dx |α . h¯
x → x.

(2.80)

In contrast, if we follow approach 2, we obtain

|α → |α ,

x→

ip · dx 1+

x 1 − ip · dx

h¯

h¯

= x + i [p · dx , x] h¯

= x + dx .

(2.81)

77

2.2 The Schrödinger Versus the Heisenberg Picture

We leave it as an exercise for the reader to show that both approaches lead to the same result for the expectation value of x:

x → x + dx .

(2.82)

2.2.2 State Kets and Observables in the Schrödinger and the Heisenberg Pictures

We now return to the time-evolution operator U (t, t0). In the previous section we examined how state kets evolve with time. This means that we were following approach 1, known as the Schro¨dinger picture when applied to time evolution. Alternatively we may follow approach 2, known as the Heisenberg picture when applied to time evolution.
In the Schro¨dinger picture the operators corresponding to observables like x, py, and Sz are ﬁxed in time, while state kets vary with time, as indicated in the previous section. In contrast, in the Heisenberg picture the operators corresponding to observables vary with time; the state kets are ﬁxed, frozen so to speak, at what they were at t0. It is convenient to set t0 in U (t, t0) to zero for simplicity and work with U (t), which is deﬁned by

U (t, t0 = 0) ≡ U (t) = exp

−iHt h¯

.

(2.83)

Motivated by (2.79b) of approach 2, we deﬁne the Heisenberg picture observable by

A(H)(t) ≡ U †(t)A(S)U (t),

(2.84)

where the superscripts H and S stand for Heisenberg and Schro¨dinger, respectively. At t = 0, the Heisenberg picture observable and the corresponding Schro¨dinger picture observable coincide:

A(H)(0) = A(S).

(2.85)

The state kets also coincide between the two pictures at t = 0; at later t the Heisenberg picture state ket is frozen to what it was at t = 0:

|α, t0 = 0; t H = |α, t0 = 0 ,

(2.86)

independent of t. This is in dramatic contrast with the Schro¨dinger picture state ket,

|α, t0 = 0; t S = U (t)|α, t0 = 0 .

(2.87)

The expectation value A is obviously the same in both pictures:
S α, t0 = 0; t|A(S)|α, t0 = 0; t S = α, t0 = 0|U †A(S)U |α, t0 = 0 = H α, t0 = 0; t|A(H)(t)|α, t0 = 0; t H.

(2.88)

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:13:50.425Z
- **Text Length:** 198249 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
