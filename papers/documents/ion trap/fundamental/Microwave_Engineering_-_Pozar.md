# PDF Document: Microwave Engineering - Pozar.pdf

**File Path:** Microwave Engineering - Pozar.pdf

**Processed Date:** 2026-02-10T18:18:12.857Z

**File Size:** 15579.59 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 108

**Collection:** Ion Trap > Fundamental

---

## Extracted Text Content

This page is intentionally left blank

Microwave Engineering

This page is intentionally left blank

Microwave Engineering
Fourth Edition
David M. Pozar
University of Massachusetts at Amherst
John Wiley & Sons, Inc.

Vice President & Executive Publisher Associate Publisher Content Manager Senior Production Editor Marketing Manager Creative Director Senior Designer Production Management Services Editorial Assistant Lead Product Designer Cover Designer

Don Fowley Dan Sayre Lucille Buonocore Anna Melhorn Christopher Ruel Harry Nolan Jim O’Shea Sherrill Redd of Aptara Charlotte Cerf Tom Kulesa Jim O’Shea

This book was set in Times Roman 10/12 by Aptara R , Inc. and printed and bound by Hamilton Printing. The cover was printed by Hamilton Printing.
Copyright C 2012, 2005, 1998 by John Wiley & Sons, Inc. All rights reserved.
No part of this publication may be reproduced, stored in a retrieval system or transmitted in any form or by any means, electronic, mechanical, photocopying, recording, scanning or otherwise, except as permitted under Sections 107 or 108 of the 1976 United States Copyright Act, without either the prior written permission of the Publisher, or authorization through payment of the appropriate per-copy fee to the Copyright Clearance Center, Inc. 222 Rosewood Drive, Danvers, MA 01923, website www.copyr-
ight.com. Requests to the Publisher for permission should be addressed to the Permissions Department, John Wiley & Sons, Inc., 111 River Street, Hoboken, NJ 07030-5774, (201)748-6011, fax (201)748-6008, website http://www.wiley.com/go/permissions.
Founded in 1807, John Wiley & Sons, Inc. has been a valued source of knowledge and understanding for more than 200 years, helping people around the world meet their needs and fulﬁll their aspirations. Our company is built on a foundation of principles that include responsibility to the communities we serve and where we live and work. In 2008, we launched a Corporate Citizenship Initiative, a global effort to address the environmental, social, economic, and ethical challenges we face in our busines-
s. Among the issues we are addressing are carbon impact, paper speciﬁcations and procurement, ethical conduct within our business and among our vendors, and community and charitable support. For more information, please visit our website: www.wiley.com/go/citizenship.
Evaluation copies are provided to qualiﬁed academics and professionals for review purposes only, for use in their courses during the next academic year. These copies are licensed and may not be sold or transferred to a third party. Upon completion of the review period, please return the evaluation copy to Wiley. Return instructions and a free of charge return shipping label are available at www.wiley.com/go/returnlabel. Outside of the United States, please contact your local representative.

Library of Congress Cataloging-in-Publication Data

Pozar, David M. Microwave engineering/David M. Pozar.—4th ed. p. cm. Includes bibliographical references and index. ISBN 978-0-470-63155-3 (hardback : acid free paper) 1. Microwaves. 2. Microwave devices. 3. Microwave circuits.

I. Title.

TK7876.P69 2011 621.381’3—dc23
Printed in the United States of America 10 9 8 7 6 5 4 3 2 1

2011033196

Preface
The continuing popularity of Microwave Engineering is gratifying. I have received many letters and emails from students and teachers from around the world with positive comments and suggestions. I think one reason for its success is the emphasis on the fundamentals of electromagnetics, wave propagation, network analysis, and design principles as applied to modern RF and microwave engineering. As I have stated in earlier editions, I have tried to avoid the handbook approach in which a large amount -
of information is presented with little or no explanation or context, but a considerable amount of material in this book is related to the design of speciﬁc microwave circuits and components, for both practical and motivational value. I have tried to base the analysis and logic behind these designs on ﬁrst principles, so the reader can see and understand the process of applying fundamental concepts to arrive at useful results. The engineer who has a ﬁrm grasp of the basic concepts and principles o-
f microwave engineering and knows how these can be applied toward practical problems is the engineer who is the most likely to be rewarded with a creative and productive career.
For this new edition I again solicited detailed feedback from teachers and readers for their thoughts about how the book should be revised. The most common requests were for more material on active circuits, noise, nonlinear effects, and wireless systems. This edition, therefore, now has separate chapters on noise and nonlinear distortion, and active devices. In Chapter 10, the coverage of noise has been expanded, along with more material on intermodulation distortion and related nonlinear effects-
. For Chapter 11, on active devices, I have added updated material on bipolar junction and ﬁeld effect transistors, including data for a number of commercial devices (Schottky and PIN diodes, and Si, GaAs, GaN, and SiGe transistors), and these sections have been reorganized and rewritten. Chapters 12 and 13 treat active circuit design, and discussions of differential ampliﬁers, inductive degeneration for nMOS ampliﬁers, and differential FET and Gilbert cell mixers have been added. In Chapter 14, o-
n RF and microwave systems, I have updated and added new material on wireless communications systems, including link budget, link margin, digital modulation methods, and bit error rates. The section on radiation hazards has been updated and rewritten. Other new material includes a section on transients on transmission lines (material that was originally in the ﬁrst edition, cut from later editions, and now brought back by popular demand), the theory of power waves, a discussion of higher order mod-
es and frequency effects for microstrip line, and a discussion of how to determine unloaded Q from resonator measurements. This edition also has numerous new or revised problems and examples, including several questions of the “open-ended” variety. Material that has been cut from this edition includes the quasi-static numerical analysis of microstrip line and some material related to microwave tubes. Finally, working from the original source ﬁles, I have made hundreds of corrections and rewrites o-
f the original text.
v

vi Preface
Today, microwave and RF technology is more pervasive than ever. This is especially true in the commercial sector, where modern applications include cellular telephones, smartphones, 3G and WiFi wireless networking, millimeter wave collision sensors for vehicles, direct broadcast satellites for radio, television, and networking, global positioning systems, radio frequency identiﬁcation tagging, ultra wideband radio and radar systems, and microwave remote sensing systems for the environment. Defense-
 systems continue to rely heavily on microwave technology for passive and active sensing, communications, and weapons control systems. There should be no shortage of challenging problems in RF and microwave engineering in the foreseeable future, and there will be a clear need for engineers having both an understanding of the fundamentals of microwave engineering and the creativity to apply this knowledge to problems of practical interest.
Modern RF and microwave engineering predominantly involves distributed circuit analysis and design, in contrast to the waveguide and ﬁeld theory orientation of earlier generations. The majority of microwave engineers today design planar components and integrated circuits without direct recourse to electromagnetic analysis. Microwave computeraided design (CAD) software and network analyzers are the essential tools of today’s microwave engineer, and microwave engineering education must respond to th-
is shift in emphasis to network analysis, planar circuits and components, and active circuit design. Microwave engineering will always involve electromagnetics (many of the more sophisticated microwave CAD packages implement rigorous ﬁeld theory solutions), and students will still beneﬁt from an exposure to subjects such as waveguide modes and coupling through apertures, but the change in emphasis to microwave circuit analysis and design is clear.
This text is written for a two-semester course in RF and microwave engineering for seniors or ﬁrst-year graduate students. It is possible to use Microwave Engineering with or without an electromagnetics emphasis. Many instructors today prefer to focus on circuit analysis and design, and there is more than enough material in Chapters 2, 4–8, and 10–14 for such a program with minimal or no ﬁeld theory requirement. Some instructors may wish to begin their course with Chapter 14 on systems in order to-
 provide some motivational context for the study of microwave circuit theory and components. This can be done, but some basic material on noise from Chapter 10 may be required.
Two important items that should be included in a successful course on microwave engineering are the use of CAD simulation software and a microwave laboratory experience. Providing students with access to CAD software allows them to verify results of the design-oriented problems in the text, giving immediate feedback that builds conﬁdence and makes the effort more rewarding. Because the drudgery of repetitive calculation is eliminated, students can easily try alternative approaches and explore prob-
lems in more detail. The effect of line losses, for example, is explored in several examples and problems; this would be effectively impossible without the use of modern CAD tools. In addition, classroom exposure to CAD tools provides useful experience upon graduation. Most of the commercially available microwave CAD tools are very expensive, but several manufacturers provide academic discounts or free “student versions” of their products. Feedback from reviewers was almost unanimous, however, tha-
t the text should not emphasize a particular software product in the text or in supplementary materials.
A hands-on microwave instructional laboratory is expensive to equip but provides the best way for students to develop an intuition and physical feeling for microwave phenomena. A laboratory with the ﬁrst semester of the course might cover the measurement of microwave power, frequency, standing wave ratio, impedance, and scattering parameters, as well as the characterization of basic microwave components such as tuners, couplers, resonators, loads, circulators, and ﬁlters. Important practical knowl-
edge about connectors, waveguides, and microwave test equipment will be acquired in this way. A more advanced

Preface vii
laboratory session can consider topics such as noise ﬁgure, intermodulation distortion, and mixing. Naturally, the type of experiments that can be offered is heavily dependent on the test equipment that is available.
Additional resources for students and instructors are available on the Wiley website. These include PowerPoint slides, a suggested laboratory manual, and an online solution manual for all problems in the text (available to qualiﬁed instructors, who may apply for access at the website http://he-cda.wiley.com/wileycda/).
ACKNOWLEDGMENTS
It is a pleasure to acknowledge the many students, readers, and teachers who have used the ﬁrst three editions of Microwave Engineering, and have written with comments, praise, and suggestions. I would also like to thank my colleagues in the microwave engineering group at the University of Massachusetts at Amherst for their support and collegiality over many years. In addition I would like to thank Bob Jackson (University of Massachusetts) for suggestions on MOSFET ampliﬁers and related material; -
Juraj Bartolic (University of Zagreb) for the simpliﬁed derivation of the µ-parameter stability criteria; and Jussi Rahola (Nokia Research Center) for his discussions of power waves. I am also grateful to the following people for providing new photographs for this edition: Kent Whitney and Chris Koh of Millitech Inc., Tom Linnenbrink and Chris Hay of Hittite Microwave Corp., Phil Beucler and Lamberto Raffaelli of LNX Corp., Michael Adlerstein of Raytheon Company, Bill Wallace of Agilent Technologi-
es Inc., Jim Mead of ProSensing Inc., Bob Jackson and B. Hou of the University of Massachusetts, J. Wendler of M/A-COM Inc., Mohamed Abouzahra of Lincoln Laboratory, and Dev Gupta, Abbie Mathew, and Salvador Rivera of Newlans Inc. I would also like to thank Sherrill Redd, Philip Koplin, and the staff at Aptara, Inc. for their professional efforts during production of this book. Also, thanks to Ben for help with PhotoShop.
David M. Pozar Amherst

This page is intentionally left blank

Contents

1

ELECTROMAGNETIC THEORY 1

1.1 Introduction to Microwave Engineering 1
Applications of Microwave Engineering 2 A Short History of Microwave Engineering 4

1.2 Maxwell’s Equations 6

1.3 Fields in Media and Boundary Conditions 10
Fields at a General Material Interface 12 Fields at a Dielectric Interface 14 Fields at the Interface with a Perfect Conductor (Electric Wall) 14 The Magnetic Wall Boundary Condition 15 The Radiation Condition 15

1.4 The Wave Equation and Basic Plane Wave Solutions 15
The Helmholtz Equation 15 Plane Waves in a Lossless Medium 16 Plane Waves in a General Lossy Medium 17 Plane Waves in a Good Conductor 19

1.5 General Plane Wave Solutions 20 Circularly Polarized Plane Waves 24

1.6 Energy and Power 25 Power Absorbed by a Good Conductor 27

1.7 Plane Wave Reﬂection from a Media Interface 28
General Medium 28 Lossless Medium 30 Good Conductor 31 Perfect Conductor 32 The Surface Impedance Concept 33

1.8 Oblique Incidence at a Dielectric Interface 35
Parallel Polarization 36 Perpendicular Polarization 37 Total Reﬂection and Surface Waves 38

1.9 Some Useful Theorems 40 The Reciprocity Theorem 40

Image Theory 42

ix

x Contents

2

TRANSMISSION LINE THEORY 48

2.1 The Lumped-Element Circuit Model for a Transmission Line 48 Wave Propagation on a Transmission Line 50 The Lossless Line 51

2.2 Field Analysis of Transmission Lines 51
Transmission Line Parameters 51 The Telegrapher Equations Derived from Field Analysis of a Coaxial Line 54 Propagation Constant, Impedance, and Power Flow for the Lossless Coaxial Line 56

2.3 The Terminated Lossless Transmission Line 56 Special Cases of Lossless Terminated Lines 59

2.4 The Smith Chart 63
The Combined Impedance–Admittance Smith Chart 67 The Slotted Line 68

2.5 The Quarter-Wave Transformer 72 The Impedance Viewpoint 72 The Multiple-Reﬂection Viewpoint 74

2.6 Generator and Load Mismatches 76

Load Matched to Line 77 Conjugate Matching 77

Generator Matched to Loaded Line 77

2.7 Lossy Transmission Lines 78
The Low-Loss Line 79 The Distortionless Line 80 The Terminated Lossy Line 81 The Perturbation Method for Calculating Attenuation 82 The Wheeler Incremental Inductance Rule 83

2.8 Transients on Transmission Lines 85
Reﬂection of Pulses from a Terminated Transmission Line 86 Bounce Diagrams for Transient Propagation 87

3

TRANSMISSION LINES AND WAVEGUIDES 95

3.1 General Solutions for TEM, TE, and TM Waves 96
TEM Waves 98 TE Waves 100 TM Waves 100 Attenuation Due to Dielectric Loss 101

3.2 Parallel Plate Waveguide 102 TEM Modes 103 TM Modes 104

TE Modes 107

3.3 Rectangular Waveguide 110
TE Modes 110 TM Modes 115 TEm0 Modes of a Partially Loaded Waveguide 119

3.4 Circular Waveguide 121 TE Modes 122 TM Modes 125

3.5 Coaxial Line 130 TEM Modes 130 Higher Order Modes 131

Contents xi
3.6 Surface Waves on a Grounded Dielectric Sheet 135 TM Modes 135 TE Modes 137
3.7 Stripline 141 Formulas for Propagation Constant, Characteristic Impedance, and Attenuation 141 An Approximate Electrostatic Solution 144
3.8 Microstrip Line 147 Formulas for Effective Dielectric Constant, Characteristic Impedance, and Attenuation 148 Frequency-Dependent Effects and Higher Order Modes 150
3.9 The Transverse Resonance Technique 153 TE0n Modes of a Partially Loaded Rectangular Waveguide 153
3.10 Wave Velocities and Dispersion 154 Group Velocity 155
3.11 Summary of Transmission Lines and Waveguides 157 Other Types of Lines and Guides 158

4

MICROWAVE NETWORK ANALYSIS 165

4.1 Impedance and Equivalent Voltages and Currents 166
Equivalent Voltages and Currents 166 The Concept of Impedance 170 Even and Odd Properties of Z (ω) and (ω) 173

4.2 Impedance and Admittance Matrices 174 Reciprocal Networks 175 Lossless Networks 177

4.3 The Scattering Matrix 178
Reciprocal Networks and Lossless Networks 181 A Shift in Reference Planes 184 Power Waves and Generalized Scattering Parameters 185

4.4 The Transmission (ABCD) Matrix 188
Relation to Impedance Matrix 191 Equivalent Circuits for Two-Port Networks 191

4.5 Signal Flow Graphs 194
Decomposition of Signal Flow Graphs 195 Application to Thru-Reﬂect-Line Network Analyzer Calibration 197

4.6 Discontinuities and Modal Analysis 203 Modal Analysis of an H-Plane Step in Rectangular Waveguide 203

4.7 Excitation of Waveguides—Electric and Magnetic Currents 210
Current Sheets That Excite Only One Waveguide Mode 210 Mode Excitation from an Arbitrary Electric or Magnetic Current Source 212

4.8 Excitation of Waveguides—Aperture Coupling 215
Coupling Through an Aperture in a Transverse Waveguide Wall 218 Coupling Through an Aperture in the Broad Wall of a Waveguide 220

xii Contents

5

IMPEDANCE MATCHING AND TUNING 228

5.1 Matching with Lumped Elements (L Networks) 229 Analytic Solutions 230 Smith Chart Solutions 231

5.2 Single-Stub Tuning 234 Shunt Stubs 235 Series Stubs 238

5.3 Double-Stub Tuning 241 Smith Chart Solution 242 Analytic Solution 245

5.4 The Quarter-Wave Transformer 246

5.5 The Theory of Small Reﬂections 250 Single-Section Transformer 250 Multisection Transformer 251

5.6 Binomial Multisection Matching Transformers 252

5.7 Chebyshev Multisection Matching Transformers 256 Chebyshev Polynomials 257 Design of Chebyshev Transformers 258

5.8 Tapered Lines 261
Exponential Taper 262 Klopfenstein Taper 264

Triangular Taper 263

5.9 The Bode–Fano Criterion 266

6

MICROWAVE RESONATORS 272

6.1 Series and Parallel Resonant Circuits 272
Series Resonant Circuit 272 Parallel Resonant Circuit 275 Loaded and Unloaded Q 277

6.2 Transmission Line Resonators 278

Short-Circuited λ/2 Line 278 Open-Circuited λ/2 Line 282

Short-Circuited λ/4 Line 281

6.3 Rectangular Waveguide Cavity Resonators 284 Resonant Frequencies 284 Unloaded Q of the TE10 Mode 286

6.4 Circular Waveguide Cavity Resonators 288 Resonant Frequencies 289 Unloaded Q of the TEnm Mode 291

6.5 Dielectric Resonators 293 Resonant Frequencies of TE01δ Mode 294

6.6 Excitation of Resonators 297
The Coupling Coefﬁcient and Critical Coupling 298 A Gap-Coupled Microstrip Resonator 299 An Aperture-Coupled Cavity 302 Determining Unloaded Q from Two-Port Measurements 305

6.7 Cavity Perturbations 306 Material Perturbations 306

Shape Perturbations 309

Contents xiii

7

POWER DIVIDERS AND DIRECTIONAL COUPLERS 317

7.1 Basic Properties of Dividers and Couplers 317
Three-Port Networks (T-Junctions) 318 Four-Port Networks (Directional Couplers) 320

7.2 The T-Junction Power Divider 324 Lossless Divider 324 Resistive Divider 326

7.3 The Wilkinson Power Divider 328
Even-Odd Mode Analysis 328 Unequal Power Division and N-Way Wilkinson Dividers 332

7.4 Waveguide Directional Couplers 333 Bethe Hole Coupler 334 Design of Multihole Couplers 338
7.5 The Quadrature (90◦) Hybrid 343 Even-Odd Mode Analysis 344

7.6 Coupled Line Directional Couplers 347
Coupled Line Theory 347 Design of Coupled Line Couplers 351 Design of Multisection Coupled Line Couplers 356

7.7 The Lange Coupler 359
7.8 The 180◦ Hybrid 362
Even-Odd Mode Analysis of the Ring Hybrid 364 Even-Odd Mode Analysis of the Tapered Coupled Line Hybrid 367 Waveguide Magic-T 371

7.9 Other Couplers 372

8

MICROWAVE FILTERS 380

8.1 Periodic Structures 381
Analysis of Inﬁnite Periodic Structures 382 Terminated Periodic Structures 384 k-β Diagrams and Wave Velocities 385

8.2 Filter Design by the Image Parameter Method 388
Image Impedances and Transfer Functions for Two-Port Networks 388 Constant-k Filter Sections 390 m-Derived Filter Sections 393 Composite Filters 396

8.3 Filter Design by the Insertion Loss Method 399
Characterization by Power Loss Ratio 399 Maximally Flat Low-Pass Filter Prototype 402 Equal-Ripple Low-Pass Filter Prototype 404 Linear Phase Low-Pass Filter Prototypes 406

8.4 Filter Transformations 408
Impedance and Frequency Scaling 408 Bandpass and Bandstop Transformations 411

xiv Contents

8.5 Filter Implementation 415 Richards’ Transformation 416 Kuroda’s Identities 416 Impedance and Admittance Inverters 421
8.6 Stepped-Impedance Low-Pass Filters 422 Approximate Equivalent Circuits for Short Transmission Line Sections 422
8.7 Coupled Line Filters 426 Filter Properties of a Coupled Line Section 426 Design of Coupled Line Bandpass Filters 430
8.8 Filters Using Coupled Resonators 437 Bandstop and Bandpass Filters Using Quarter-Wave Resonators 437 Bandpass Filters Using Capacitively Coupled Series Resonators 441 Bandpass Filters Using Capacitively Coupled Shunt Resonators 443

9

THEORY AND DESIGN OF FERRIMAGNETIC COMPONENTS 451

9.1 Basic Properties of Ferrimagnetic Materials 452
The Permeability Tensor 452 Circularly Polarized Fields 458 Effect of Loss 460 Demagnetization Factors 462

9.2 Plane Wave Propagation in a Ferrite Medium 465
Propagation in Direction of Bias (Faraday Rotation) 465 Propagation Transverse to Bias (Birefringence) 469

9.3 Propagation in a Ferrite-Loaded Rectangular Waveguide 471
TEm0 Modes of Waveguide with a Single Ferrite Slab 471 TEm0 Modes of Waveguide with Two Symmetrical Ferrite Slabs 474

9.4 Ferrite Isolators 475 Resonance Isolators 476

The Field Displacement Isolator 479

9.5 Ferrite Phase Shifters 482
Nonreciprocal Latching Phase Shifter 482 Other Types of Ferrite Phase Shifters 485

The Gyrator 486

9.6 Ferrite Circulators 487 Properties of a Mismatched Circulator 488

Junction Circulator 488

10

NOISE AND NONLINEAR DISTORTION 496

10.1 Noise in Microwave Circuits 496
Dynamic Range and Sources of Noise 497 Noise Power and Equivalent Noise Temperature 498 Measurement of Noise Temperature 501

10.2 Noise Figure 502
Deﬁnition of Noise Figure 502 Noise Figure of a Cascaded System 504 Noise Figure of a Passive Two-Port Network 506 Noise Figure of a Mismatched Lossy Line 508 Noise Figure of a Mismatched Ampliﬁer 510

Contents xv
10.3 Nonlinear Distortion 511 Gain Compression 512 Harmonic and Intermodulation Distortion 513 Third-Order Intercept Point 515 Intercept Point of a Cascaded System 516 Passive Intermodulation 519
10.4 Dynamic Range 519 Linear and Spurious Free Dynamic Range 519

11

ACTIVE RF AND MICROWAVE DEVICES 524

11.1 Diodes and Diode Circuits 525
Schottky Diodes and Detectors 525 PIN Diodes and Control Circuits 530 Varactor Diodes 537 Other Diodes 538

Power Combining 539

11.2 Bipolar Junction Transistors 540 Bipolar Junction Transistor 540 Heterojunction Bipolar Transistor 542

11.3 Field Effect Transistors 543
Metal Semiconductor Field Effect Transistor 544 Metal Oxide Semiconductor Field Effect Transistor 546 High Electron Mobility Transistor 546

11.4 Microwave Integrated Circuits 547
Hybrid Microwave Integrated Circuits 548 Monolithic Microwave Integrated Circuits 548

11.5 Microwave Tubes 552

12

MICROWAVE AMPLIFIER DESIGN 558

12.1 Two-Port Power Gains 558
Deﬁnitions of Two-Port Power Gains 559 Further Discussion of Two-Port Power Gains 562

12.2 Stability 564 Stability Circles 564

Tests for Unconditional Stability 567

12.3 Single-Stage Transistor Ampliﬁer Design 571
Design for Maximum Gain (Conjugate Matching) 571 Constant-Gain Circles and Design for Speciﬁed Gain 575 Low-Noise Ampliﬁer Design 580 Low-Noise MOSFET Ampliﬁer 582

12.4 Broadband Transistor Ampliﬁer Design 585
Balanced Ampliﬁers 586 Distributed Ampliﬁers 588 Differential Ampliﬁers 593

12.5 Power Ampliﬁers 596
Characteristics of Power Ampliﬁers and Ampliﬁer Classes 597 Large-Signal Characterization of Transistors 598 Design of Class A Power Ampliﬁers 599

xvi Contents

13

OSCILLATORS AND MIXERS 604

13.1 RF Oscillators 605
General Analysis 606 Oscillators Using a Common Emitter BJT 607 Oscillators Using a Common Gate FET 609 Practical Considerations 610 Crystal Oscillators 612

13.2 Microwave Oscillators 613 Transistor Oscillators 615 Dielectric Resonator Oscillators 617

13.3 Oscillator Phase Noise 622
Representation of Phase Noise 623 Leeson’s Model for Oscillator Phase Noise 624

13.4 Frequency Multipliers 627
Reactive Diode Multipliers (Manley–Rowe Relations) 628 Resistive Diode Multipliers 631 Transistor Multipliers 633

13.5 Mixers 637

Mixer Characteristics 637

Single-Ended Diode Mixer 642

Single-Ended FET Mixer 643 Balanced Mixer 646

Image Reject Mixer 649

Differential FET Mixer and Gilbert Cell Mixer 650 Other Mixers 652

14

INTRODUCTION TO MICROWAVE SYSTEMS 658

14.1 System Aspects of Antennas 658
Fields and Power Radiated by an Antenna 660 Antenna Pattern Characteristics 662 Antenna Gain and Efﬁciency 664 Aperture Efﬁciency and Effective Area 665 Background and Brightness Temperature 666 Antenna Noise Temperature and G/T 669

14.2 Wireless Communications 671
The Friis Formula 673 Link Budget and Link Margin 674 Radio Receiver Architectures 676 Noise Characterization of a Receiver 679 Digital Modulation and Bit Error Rate 681 Wireless Communication Systems 684

14.3 Radar Systems 690
The Radar Equation 691 Radar Cross Section 695

Pulse Radar 693

Doppler Radar 694

14.4 Radiometer Systems 696
Theory and Applications of Radiometry 697 The Dicke Radiometer 700

Total Power Radiometer 699

14.5 Microwave Propagation 701 Atmospheric Effects 701 Ground Effects 703

Plasma Effects 704

14.6 Other Applications and Topics 705
Microwave Heating 705 Power Transfer 705 Biological Effects and Safety 706

Contents xvii

APPENDICES 712 A Preﬁxes 713 B Vector Analysis 713 C Bessel Functions 715 D Other Mathematical Results 718 E Physical Constants 718 F Conductivities for Some Materials 719 G Dielectric Constants and Loss Tangents for Some Materials 719 H Properties of Some Microwave Ferrite Materials 720 I Standard Rectangular Waveguide Data 720 J Standard Coaxial Cable Data 721

ANSWERS TO SELECTED PROBLEMS 722

INDEX 725

This page is intentionally left blank

Chapter

One

Electromagnetic Theory

We begin our study of microwave engineering with a brief overview of the history and major applications of microwave technology, followed by a review of some of the fundamental topics in electromagnetic theory that we will need throughout the book. Further discussion of these topics may be found in references [1–8].

1.1

INTRODUCTION TO MICROWAVE ENGINEERING
The ﬁeld of radio frequency (RF) and microwave engineering generally covers the behavior of alternating current signals with frequencies in the range of 100 MHz (1 MHz = 106 Hz) to 1000 GHz (1 GHz = 109 Hz). RF frequencies range from very high frequency (VHF) (30–300 MHz) to ultra high frequency (UHF) (300–3000 MHz), while the term microwave is typically used for frequencies between 3 and 300 GHz, with a corresponding electrical wavelength between λ = c/ f = 10 cm and λ = 1 mm, respectively. Signa-
ls with wavelengths on the order of millimeters are often referred to as millimeter waves. Figure 1.1 shows the location of the RF and microwave frequency bands in the electromagnetic spectrum. Because of the high frequencies (and short wavelengths), standard circuit theory often cannot be used directly to solve microwave network problems. In a sense, standard circuit theory is an approximation, or special case, of the broader theory of electromagnetics as described by Maxwell’s equations. This is-
 due to the fact that, in general, the lumped circuit element approximations of circuit theory may not be valid at high RF and microwave frequencies. Microwave components often act as distributed elements, where the phase of the voltage or current changes signiﬁcantly over the physical extent of the device because the device dimensions are on the order of the electrical wavelength. At much lower frequencies the wavelength is large enough that there is insigniﬁcant phase variation across the dimens-
ions of a component. The other extreme of frequency can be identiﬁed as optical engineering, in which the wavelength is much shorter than the dimensions of the component. In this case Maxwell’s equations can be simpliﬁed to the geometrical optics regime, and optical systems can be designed with the theory of geometrical optics. Such
1

2 Chapter 1: Electromagnetic Theory

3 × 105 3 × 106

3 × 107

3 × 108

Frequency (Hz) 3 × 109 3 × 1010 3 × 1011 3 × 1012 3 × 1013 3 × 1014

Microwaves

Long wave radio
AM broadcast radio
Shortwave radio
VHF TV FM broadcast radio
Far Infrared Infrared
Visible light

103

102

10

1

10–1

10–2

10–3

10–4

10–5

10–6

Wavelength (m)

Typical Frequencies
AM broadcast band Short wave radio band FM broadcast band VHF TV (2–4) VHF TV (5–6) UHF TV (7–13) UHF TV (14–83) US cellular telephone
European GSM cellular
GPS
Microwave ovens US DBS US ISM bands
US UWB radio

535–1605 kHz 3–30 MHz 88–108 MHz 54–72 MHz 76–88 MHz 174–216 MHz 470–890 MHz 824–849 MHz 869–894 MHz 880–915 MHz 925–960 MHz 1575.42 MHz 1227.60 MHz 2.45 GHz 11.7–12.5 GHz 902–928 MHz 2.400–2.484 GHz 5.725–5.850 GHz 3.1–10.6 GHz

Approximate Band Designations

Medium frequency High frequency (HF) Very high frequency (VHF) Ultra high frequency (UHF) L band S band C band X band Ku band K band Ka band U band V band E band W band F band

300 kHz–3 MHz 3 MHz–30 MHz 30 MHz–300 MHz 300 MHz–3 GHz 1–2 GHz 2–4 GHz 4–8 GHz 8–12 GHz 12–18 GHz 18–26 GHz 26–40 GHz 40–60 GHz 50–75 GHz 60–90 GHz 75–110 GHz 90–140 GHz

FIGURE 1.1 The electromagnetic spectrum.

techniques are sometimes applicable to millimeter wave systems, where they are referred to as quasi-optical.
In RF and microwave engineering, then, one must often work with Maxwell’s equations and their solutions. It is in the nature of these equations that mathematical complexity arises since Maxwell’s equations involve vector differential or integral operations on vector ﬁeld quantities, and these ﬁelds are functions of spatial coordinates. One of the goals of this book is to try to reduce the complexity of a ﬁeld theory solution to a result that can be expressed in terms of simpler circuit theory, per-
haps extended to include distributed elements (such as transmission lines) and concepts (such as reﬂection coefﬁcients and scattering parameters). A ﬁeld theory solution generally provides a complete description of the electromagnetic ﬁeld at every point in space, which is usually much more information than we need for most practical purposes. We are typically more interested in terminal quantities such as power, impedance, voltage, and current, which can often be expressed in terms of these exten-
ded circuit theory concepts. It is this complexity that adds to the challenge, as well as the rewards, of microwave engineering.

Applications of Microwave Engineering
Just as the high frequencies and short wavelengths of microwave energy make for difﬁculties in the analysis and design of microwave devices and systems, these same aspects

1.1 Introduction to Microwave Engineering 3

provide unique opportunities for the application of microwave systems. The following con-

siderations can be useful in practice:

r Antenna gain is proportional to the electrical size of the antenna. At higher frequen-

cies, more antenna gain can be obtained for a given physical antenna size, and this

r

has important consequences when implementing microwave systems. More bandwidth (directly related to data rate) can be realized at higher

frequencies.

A 1% bandwidth at 600 MHz is 6 MHz, which (with binary phase shift keying

modulation) can provide a data rate of about 6 Mbps (megabits per second), while

r

at 60 GHz a 1% bandwidth is 600 MHz, allowing a 600 Mbps data rate. Microwave signals travel by line of sight and are not bent by the ionosphere

as

are

lower frequency signals. Satellite and terrestrial communication links with very high

r

capacities are The effective

therefore possible, with frequency reuse at minimally distant locations. reﬂection area (radar cross section) of a radar target is usually propor-

tional to the target’s electrical size. This fact, coupled with the frequency character-

istics of antenna gain, generally makes microwave frequencies preferred for radar

r

systems. Various molecular,

atomic,

and

nuclear

resonances

occur

at

microwave

frequencies,

creating a variety of unique applications in the areas of basic science, remote sens-

ing, medical diagnostics and treatment, and heating methods.

The majority of today’s applications of RF and microwave technology are to wireless networking and communications systems, wireless security systems, radar systems, environmental remote sensing, and medical systems. As the frequency allocations listed in Figure 1.1 show, RF and microwave communications systems are pervasive, especially today when wireless connectivity promises to provide voice and data access to “anyone, anywhere, at any time.”
Modern wireless telephony is based on the concept of cellular frequency reuse, a technique ﬁrst proposed by Bell Labs in 1947 but not practically implemented until the 1970s. By this time advances in miniaturization, as well as increasing demand for wireless communications, drove the introduction of several early cellular telephone systems in Europe, the United States, and Japan. The Nordic Mobile Telephone (NMT) system was deployed in 1981 in the Nordic countries, the Advanced Mobile Phone System-
 (AMPS) was introduced in the United States in 1983 by AT&T, and NTT in Japan introduced its ﬁrst mobile phone service in 1988. All of these early systems used analog FM modulation, with their allocated frequency bands divided into several hundred narrow band voice channels. These early systems are usually referred to now as ﬁrst-generation cellular systems, or 1G.
Second-generation (2G) cellular systems achieved improved performance by using various digital modulation schemes, with systems such as GSM, CDMA, DAMPS, PCS, and PHS being some of the major standards introduced in the 1990s in the United States, Europe, and Japan. These systems can handle digitized voice, as well as some limited data, with data rates typically in the 8 to 14 kbps range. In recent years there has been a wide variety of new and modiﬁed standards to transition to handheld services t-
hat include voice, texting, data networking, positioning, and Internet access. These standards are variously known as 2.5G, 3G, 3.5G, 3.75G, and 4G, with current plans to provide data rates up to at least 100 Mbps. The number of subscribers to wireless services seems to be keeping pace with the growing power and access provided by modern handheld wireless devices; as of 2010 there were more than ﬁve billion cell phone users worldwide.
Satellite systems also depend on RF and microwave technology, and satellites have been developed to provide cellular (voice), video, and data connections worldwide. Two large satellite constellations, Iridium and Globalstar, were deployed in the late 1990s to provide worldwide telephony service. Unfortunately, these systems suffered from both technical

4 Chapter 1: Electromagnetic Theory
drawbacks and weak business models and have led to multibillion dollar financial failures. However, smaller satellite systems, such as the Global Positioning Satellite (GPS) system and the Direct Broadcast Satellite (DBS) system, have been extremely successful.
Wireless local area networks (WLANs) provide high-speed networking between computers over short distances, and the demand for this capability is expected to remain strong. One of the newer examples of wireless communications technology is ultra wide band (UWB) radio, where the broadcast signal occupies a very wide frequency band but with a very low power level (typically below the ambient radio noise level) to avoid interference with other systems.
Radar systems ﬁnd application in military, commercial, and scientiﬁc ﬁelds. Radar is used for detecting and locating air, ground, and seagoing targets, as well as for missile guidance and ﬁre control. In the commercial sector, radar technology is used for air trafﬁc control, motion detectors (door openers and security alarms), vehicle collision avoidance, and distance measurement. Scientiﬁc applications of radar include weather prediction, remote sensing of the atmosphere, the oceans, and the grou-
nd, as well as medical diagnostics and therapy. Microwave radiometry, which is the passive sensing of microwave energy emitted by an object, is used for remote sensing of the atmosphere and the earth, as well as in medical diagnostics and imaging for security applications.
A Short History of Microwave Engineering
Microwave engineering is often considered a fairly mature discipline because the fundamental concepts were developed more than 50 years ago, and probably because radar, the ﬁrst major application of microwave technology, was intensively developed as far back as World War II. However, recent years have brought substantial and continuing developments in high-frequency solid-state devices, microwave integrated circuits, and computer-aided design techniques, and the ever-widening applications of RF an-
d microwave technology to wireless communications, networking, sensing, and security have kept the ﬁeld active and vibrant.
The foundations of modern electromagnetic theory were formulated in 1873 by James Clerk Maxwell, who hypothesized, solely from mathematical considerations, electromagnetic wave propagation and the idea that light was a form of electromagnetic energy. Maxwell’s formulation was cast in its modern form by Oliver Heaviside during the period from 1885 to 1887. Heaviside was a reclusive genius whose efforts removed many of the mathematical complexities of Maxwell’s theory, introduced vector notation, an-
d provided a foundation for practical applications of guided waves and transmission lines. Heinrich Hertz, a German professor of physics and a gifted experimentalist who understood the theory published by Maxwell, carried out a set of experiments during the period 1887–1891 that validated Maxwell’s theory of electromagnetic waves. Figure 1.2 is a photograph of the original equipment used by Hertz in his experiments. It is interesting to observe that this is an instance of a discovery occurring aft-
er a prediction has been made on theoretical grounds—a characteristic of many of the major discoveries throughout the history of science. All of the practical applications of electromagnetic theory—radio, television, radar, cellular telephones, and wireless networking—owe their existence to the theoretical work of Maxwell.
Because of the lack of reliable microwave sources and other components, the rapid growth of radio technology in the early 1900s occurred primarily in the HF to VHF range. It was not until the 1940s and the advent of radar development during World War II that microwave theory and technology received substantial interest. In the United States, the Radiation Laboratory was established at the Massachusetts Institute of Technology to develop radar theory and practice. A number of talented scientists, i-
ncluding N. Marcuvitz,

1.1 Introduction to Microwave Engineering 5

FIGURE 1.2

Original apparatus used by Hertz for his electromagnetics experiments. (1) 50 MHz transmitter spark gap and loaded dipole antenna. (2) Wire grid for polarization experiments. (3) Vacuum apparatus for cathode ray experiments. (4) Hot-wire galvanometer. (5) Reiss or Knochenhauer spirals. (6) Rolled-paper galvanometer. (7) Metal sphere probe. (8) Reiss spark micrometer. (9) Coaxial line. (10–12) Equipment to demonstrate dielectric polarization effects. (13) Mercury induction coil interrupter. (14) Me-
idinger cell. (15) Bell jar. (16) Induction coil. (17) Bunsen cells. (18) Large-area conductor for charge storage. (19) Circular loop receiving antenna. (20) Eight-sided receiver detector. (21) Rotating mirror and mercury interrupter. (22) Square loop receiving antenna. (23) Equipment for refraction and dielectric constant measurement. (24) Two square loop receiving antennas. (25) Square loop receiving antenna. (26) Transmitter dipole. (27) Induction coil. (28) Coaxial line. (29) High-voltage disc-
harger. (30) Cylindrical parabolic reﬂector/receiver. (31) Cylindrical parabolic reﬂector/transmitter. (32) Circular loop receiving antenna. (33) Planar reﬂector. (34, 35) Battery of accumulators. Photographed on October 1, 1913, at the Bavarian Academy of Science, Munich, Germany, with Hertz’s assistant, Julius Amman.
Photograph and identiﬁcation courtesy of J. H. Bryant.

I. I. Rabi, J. S. Schwinger, H. A. Bethe, E. M. Purcell, C. G. Montgomery, and R. H. Dicke, among others, gathered for a very intensive period of development in the microwave ﬁeld. Their work included the theoretical and experimental treatment of waveguide components, microwave antennas, small-aperture coupling theory, and the beginnings of microwave network theory. Many of these researchers were physicists who returned to physics research after the war, but their microwave work is summarized in t-
he classic 28-volume Radiation Laboratory Series of books that still ﬁnds application today.
Communications systems using microwave technology began to be developed soon after the birth of radar, beneﬁting from much of the work that was originally done for radar systems. The advantages offered by microwave systems, including wide bandwidths and line-of-sight propagation, have proved to be critical for both terrestrial and satellite

6 Chapter 1: Electromagnetic Theory
communications systems and have thus provided an impetus for the continuing development of low-cost miniaturized microwave components. We refer the interested reader to references [1] and [2] for further historical perspectives on the ﬁelds of wireless communications and microwave engineering.

1.2

MAXWELL’S EQUATIONS

Electric and magnetic phenomena at the macroscopic level are described by Maxwell’s equations, as published by Maxwell in 1873. This work summarized the state of electromagnetic science at that time and hypothesized from theoretical considerations the existence of the electrical displacement current, which led to the experimental discovery by Hertz of electromagnetic wave propagation. Maxwell’s work was based on a large body of empirical and theoretical knowledge developed by Gauss, Ampere, Farada-
y, and others. A ﬁrst course in electromagnetics usually follows this historical (or deductive) approach, and it is assumed that the reader has had such a course as a prerequisite to the present material. Several references are available [3–7] that provide a good treatment of electromagnetic theory at the undergraduate or graduate level.
This chapter will outline the fundamental concepts of electromagnetic theory that we will require later in the book. Maxwell’s equations will be presented, and boundary conditions and the effect of dielectric and magnetic materials will be discussed. Wave phenomena are of essential importance in microwave engineering, and thus much of the chapter is spent on topics related to plane waves. Plane waves are the simplest form of electromagnetic waves and so serve to illustrate a number of basic proper-
ties associated with wave propagation. Although it is assumed that the reader has studied plane waves before, the present material should help to reinforce the basic principles in the reader’s mind and perhaps to introduce some concepts that the reader has not seen previously. This material will also serve as a useful reference for later chapters.
With an awareness of the historical perspective, it is usually advantageous from a pedagogical point of view to present electromagnetic theory from the “inductive,” or axiomatic, approach by beginning with Maxwell’s equations. The general form of timevarying Maxwell equations, then, can be written in “point,” or differential, form as

∇

×

E¯

=

−∂ B¯ ∂t

−

M¯ ,

∇

×

H¯

=

∂ D¯ ∂t

+

J¯ ,

∇ · D¯ = ρ,

(1.1a) (1.1b) (1.1c)

∇ · B¯ = 0.

(1.1d)

The MKS system of units is used throughout this book. The script quantities represent time-varying vector ﬁelds and are real functions of spatial coordinates x, y, z, and the time variable t. These quantities are deﬁned as follows:
E¯ is the electric ﬁeld, in volts per meter (V/m).1 H¯ is the magnetic ﬁeld, in amperes per meter (A/m).

1 As recommended by the IEEE Standard Deﬁnitions of Terms for Radio Wave Propagation, IEEE Standard 211-1997, the terms “electric ﬁeld” and “magnetic ﬁeld” are used in place of the older terminology of “electric ﬁeld intensity” and “magnetic ﬁeld intensity.”

1.2 Maxwell’s Equations 7

D¯ is the electric ﬂux density, in coulombs per meter squared (Coul/m2). B¯ is the magnetic ﬂux density, in webers per meter squared (Wb/m2). M¯ is the (ﬁctitious) magnetic current density, in volts per meter (V/m2). J¯ is the electric current density, in amperes per meter squared (A/m2).
ρ is the electric charge density, in coulombs per meter cubed (Coul/m3).

The sources of the electromagnetic ﬁeld are the currents M¯ and J¯ and the electric charge density ρ. The magnetic current M¯ is a ﬁctitious source in the sense that it is only a mathematical convenience: the real source of a magnetic current is always a loop of electric current or some similar type of magnetic dipole, as opposed to the ﬂow of an actual magnetic charge (magnetic monopole charges are not known to exist). The magnetic current is included here for completeness, as we will have occasi-
on to use it in Chapter 4 when dealing with apertures. Since electric current is really the ﬂow of charge, it can be said that the electric charge density ρ is the ultimate source of the electromagnetic ﬁeld.
In free-space, the following simple relations hold between the electric and magnetic ﬁeld intensities and ﬂux densities:

B¯ = µ0H¯ , D¯ = 0E¯,

(1.2a) (1.2b)

where µ0 = 4π × 10−7 henry/m is the permeability of free-space, and 0 = 8.854 × 10−12 farad/m is the permittivity of free-space. We will see in the next section how media other than free-space affect these constitutive relations.
Equations (1.1a)–(1.1d) are linear but are not independent of each other. For instance, consider the divergence of (1.1a). Since the divergence of the curl of any vector is zero [vector identity (B.12), from Appendix B], we have

∇

·

∇

×

E¯

=

0

=

−

∂ ∂t

(∇

·

B¯)

−

∇

·

M¯ .

Since there is no free magnetic charge, ∇ · M¯ = 0, which leads to ∇ · B¯ = 0, or (1.1d). The continuity equation can be similarly derived by taking the divergence of (1.1b), giving

∇

·

J¯

+

∂ρ ∂t

=

0,

(1.3)

where (1.1c) was used. This equation states that charge is conserved, or that current is continuous, since ∇ · J¯ represents the outﬂow of current at a point, and ∂ρ/∂t represents
the charge buildup with time at the same point. It is this result that led Maxwell to the conclusion that the displacement current density ∂D¯ /∂t was necessary in (1.1b), which
can be seen by taking the divergence of this equation.
The above differential equations can be converted to integral form through the use of
various vector integral theorems. Thus, applying the divergence theorem (B.15) to (1.1c)
and (1.1d) yields

D¯ · ds¯ = ρ dv = Q,

(1.4)

S

V

B¯ · ds¯ = 0,

(1.5)

S

8 Chapter 1: Electromagnetic Theory

C

S dl

nˆ

B

FIGURE 1.3 The closed contour C and surface S associated with Faraday’s law.

where Q in (1.4) represents the total charge contained in the closed volume V (enclosed by a closed surface S). Applying Stokes’ theorem (B.16) to (1.1a) gives

E¯ · dl¯ = − ∂ B¯ · ds¯ − M¯ · ds¯,

C

∂t S

S

(1.6)

which, without the M¯ term, is the usual form of Faraday’s law and forms the basis for Kirchhoff’s voltage law. In (1.6), C represents a closed contour around the surface S, as shown in Figure 1.3. Ampere’s law can be derived by applying Stokes’ theorem to (1.1b):

C

H¯

·

dl¯ =

∂ ∂t

D¯ · ds¯ +
S

S

J¯

·

d s¯

=

∂ ∂t

D¯ · ds¯ + I,
S

(1.7)

where I = S J¯ · ds¯ is the total electric current ﬂow through the surface S. Equations (1.4)–(1.7) constitute the integral forms of Maxwell’s equations.
The above equations are valid for arbitrary time dependence, but most of our work will
be involved with ﬁelds having a sinusoidal, or harmonic, time dependence, with steady-
state conditions assumed. In this case phasor notation is very convenient, and so all ﬁeld quantities will be assumed to be complex vectors with an implied e jωt time dependence
and written with roman (rather than script) letters. Thus, a sinusoidal electric ﬁeld polarized in the xˆ direction of the form

E¯(x, y, z, t) = xˆ A (x, y, z) cos (ωt + φ),

(1.8)

where A is the (real) amplitude, ω is the radian frequency, and φ is the phase reference of the wave at t = 0, has the phasor for

E¯ (x, y, z) = xˆ A(x, y, z)e jφ.

(1.9)

We will assume cosine-based phasors in this book, so the conversion from phasor quantities to real time-varying quantities is accomplished by multiplying the phasor by e jωt and
taking the real part:

E¯(x, y, z, t) = Re{E¯ (x, y, z)e jωt },

(1.10)

as substituting (1.9) into (1.10) to obtain (1.8) demonstrates. When working in phasor notation, it is customary to suppress the factor e jωt that is common to all terms.
When dealing with power and energy we will often be interested in the time average of
a quadratic quantity. This can be found very easily for time harmonic ﬁelds. For example,
the average of the square of the magnitude of an electric ﬁeld, given as

E¯ = xˆ E1 cos(ωt + φ1) + yˆ E2 cos(ωt + φ2) + zˆ E2 cos(ωt + φ3),

(1.11)

has the phasor form

E¯ = xˆ E1e jφ1 + yˆ E2e jφ2 + zˆ E3e jφ3,

(1.12)

1.2 Maxwell’s Equations 9

can be calculated as

|E¯|2avg

=

1 T

T
E¯ · E¯ dt
0

=1 T

T 0

E12 cos2(ωt + φ1) + E22 cos2(ωt + φ2) + E32 cos2(ωt + φ3) dt

=1 2

E12 + E22 + E32

= 1 |E¯ |2 = 1 E¯ · E¯ ∗.

2

2

Then

the

root-mean-square

(rms)

value

is

|E¯ |rms

=

|E¯

√ |/ 2.

(1.13)

J(x, y, z) A/m2 z
y

M(x, y, z) V/m2 z
y

x (a)
z y

x
z y

x Js(x, y) A/m J(x, y, z) = Js(x, y) ␦(z – zo) A/m2
(b)

x Ms(x, y) V/m
M(x, y, z) = Ms(x, y) ␦(z – zo) V/m2

z y
xˆIo(x) A

z y
ˆxVo(x) V

x J(x, y, z) = xˆIo(x) ␦(y – yo) ␦(z – zo) A/m2
(c)
z y

x M(x, y, z) = ˆxVo(x) ␦(y – yo) ␦(z – zo) V/m2
z y

Il A-m

Vl V-m

(xo, yo, zo)

(xo, yo, zo)

x

x

J(x, y, z) = xˆIl␦(x – xo) ␦(y – yo) ␦(z – zo) A/m2

M(x, y, z) = xˆVl␦(x – xo) ␦(y – yo) ␦(z – zo) V/m2

(d)

FIGURE 1.4

Arbitrary volume, surface, and line currents. (a) Arbitrary electric and magnetic vol-
ume current densities. (b) Arbitrary electric and magnetic surface current densities in the z = z0 plane. (c) Arbitrary electric and magnetic line currents. (d) Inﬁnitesimal electric and magnetic dipoles parallel to the x-axis.

10 Chapter 1: Electromagnetic Theory

Assuming an e jωt time dependence, we can replace the time derivatives in (1.1a)– (1.1d) with jω. Maxwell’s equations in phasor form then become

∇ × E¯ = − jωB¯ − M¯ , ∇ × H¯ = jωD¯ + J¯,
∇ · D¯ = ρ, ∇ · B¯ = 0.

(1.14a) (1.14b) (1.14c) (1.14d)

The Fourier transform can be used to convert a solution to Maxwell’s equations for an arbitrary frequency ω into a solution for arbitrary time dependence.
The electric and magnetic current sources, J¯ and M¯ , in (1.14) are volume current densities with units A/m2 and V/m2. In many cases, however, the actual currents will be in the form of a current sheet, a line current, or an inﬁnitesimal dipole current. These special types of current distributions can always be written as volume current densities through the use of delta functions. Figure 1.4 shows examples of this procedure for electric and magnetic currents.

1.3

FIELDS IN MEDIA AND BOUNDARY CONDITIONS

In the preceding section it was assumed that the electric and magnetic ﬁelds were in free-
space, with no material bodies present. In practice, material bodies are often present; this
complicates the analysis but also allows the useful application of material properties to
microwave components. When electromagnetic ﬁelds exist in material media, the ﬁeld
vectors are related to each other by the constitutive relations. For a dielectric material, an applied electric ﬁeld E¯ causes the polarization of the
atoms or molecules of the material to create electric dipole moments that augment the total displacement ﬂux, D¯ . This additional polarization vector is called P¯e, the electric polarization, where

D¯ = 0 E¯ + P¯e.

(1.15)

In a linear medium the electric polarization is linearly related to the applied electric ﬁeld as

P¯e = 0χe E¯ ,

(1.16)

where χe, which may be complex, is called the electric susceptibility. Then, D¯ = 0 E¯ + P¯e = 0(1 + χe)E¯ = E¯ ,

(1.17)

where

= − j = 0(1 + χe)

(1.18)

is the complex permittivity of the medium. The imaginary part of accounts for loss in the medium (heat) due to damping of the vibrating dipole moments. (Free-space, having a real , is lossless.) Due to energy conservation, as we will see in Section 1.6, the imaginary part of must be negative ( positive). The loss of a dielectric material may also be considered as an equivalent conductor loss. In a material with conductivity σ , a conduction current density will exist:

J¯ = σ E¯ ,

(1.19)

1.3 Fields in Media and Boundary Conditions 11

which is Ohm’s law from an electromagnetic ﬁeld point of view. Maxwell’s curl equation for H¯ in (1.14b) then becomes

∇ × H¯ = jωD¯ + J¯

= jω E¯ + σ E¯

= jω E¯ + (ω + σ )E¯

= jω

−j

−

σ jω

E¯ ,

(1.20)

where it is seen that loss due to dielectric damping (ω ) is indistinguishable from conductivity loss (σ ). The term ω + σ can then be considered as the total effective conductivity. A related quantity of interest is the loss tangent, deﬁned as

tan δ

=

ω

+ ω

σ

,

(1.21)

which is seen to be the ratio of the real to the imaginary part of the total displacement
current. Microwave materials are usually characterized by specifying the real relative permittivity (the dielectric constant),2 r , with = r 0, and the loss tangent at a certain frequency. These properties are listed in Appendix G for several types of materials. It is useful
to note that, after a problem has been solved assuming a lossless dielectric, loss can easily be introduced by replacing the real with a complex = − j = (1 − j tan δ) = 0 r (1 − j tan δ).
In the preceding discussion it was assumed that P¯e was a vector in the same direction as E¯ . Such materials are called isotropic materials, but not all materials have this property.
Some materials are anisotropic and are characterized by a more complicated relation between P¯e and E¯ , or D¯ and E¯ . The most general linear relation between these vectors takes the form of a tensor of rank two (a dyad), which can be written in matrix form as

Dx

xx xy xz

Dy = yx yy yz

Dz

zx zy zz

Ex

Ex

Ey = [ ] Ey .

Ez

Ez

(1.22)

It is thus seen that a given vector component of E¯ gives rise, in general, to three components of D¯ . Crystal structures and ionized gases are examples of anisotropic dielectrics. For a
linear isotropic material, the matrix of (1.22) reduces to a diagonal matrix with elements .
An analogous situation occurs for magnetic materials. An applied magnetic ﬁeld may
align magnetic dipole moments in a magnetic material to produce a magnetic polarization (or magnetization) P¯m. Then,

B¯ = µ0(H¯ + P¯m).

(1.23)

For a linear magnetic material, P¯m is linearly related to H¯ as

P¯m = χm H¯ ,

(1.24)

where χm is a complex magnetic susceptibility. From (1.23) and (1.24), B¯ = µ0(1 + χm)H¯ = µH¯ ,

(1.25)

2 The IEEE Standard Deﬁnitions of Terms for Radio Wave Propagation, IEEE Standard 211-1997, suggests that the term “relative permittivity” be used instead of “dielectric constant.” The IEEE Standard Deﬁnitions of Terms for Antennas, IEEE Standard 145-1993, however, still recognizes “dielectric constant.” Since this term is commonly used in microwave engineering work, it will occasionally be used in this book.

12 Chapter 1: Electromagnetic Theory

where µ = µ0(1 + χm) = µ − jµ is the complex permeability of the medium. Again, the imaginary part of χm or µ accounts for loss due to damping forces; there is no magnetic conductivity because there is no real magnetic current. As in the electric case, magnetic
materials may be anisotropic, in which case a tensor permeability can be written as

Bx

µxx µxy µxz

By = µyx µyy µyz

Bz

µzx µzy µzz

Hx

Hx

Hy = [µ] Hy .

Hz

Hz

(1.26)

An important example of anisotropic magnetic materials in microwave engineering is the
class of ferrimagnetic materials known as ferrites; these materials and their applications
will be discussed further in Chapter 9. If linear media are assumed ( , µ not depending on E¯ or H¯ ), then Maxwell’s equa-
tions can be written in phasor form as

∇ × E¯ = − jωµH¯ − M¯ , ∇ × H¯ = jω E¯ + J¯,
∇ · D¯ = ρ, ∇ · B¯ = 0.

(1.27a) (1.27b) (1.27c) (1.27d)

The constitutive relations are

D¯ = E¯ , B¯ = µH¯ ,

(1.28a) (1.28b)

where and µ may be complex and may be tensors. Note that relations like (1.28a) and (1.28b) generally cannot be written in time domain form, even for linear media, because of the possible phase shift between D¯ and E¯ , or B¯ and H¯ . The phasor representation accounts for this phase shift by the complex form of and µ.
Maxwell’s equations (1.27a)–(1.27d) in differential form require known boundary values for a complete and unique solution. A general method used throughout this book is to solve the source-free Maxwell equations in a certain region to obtain solutions with unknown coefﬁcients and then apply boundary conditions to solve for these coefﬁcients. A number of speciﬁc cases of boundary conditions arise, as discussed in what follows.

Fields at a General Material Interface
Consider a plane interface between two media, as shown in Figure 1.5. Maxwell’s equations in integral form can be used to deduce conditions involving the normal and tangential

Medium 2: ⑀2, ␮2

Bn2 Bn1

Ht2 Ht1

nˆ

Et2

Et1

Medium 1: ⑀1, ␮1

Dn2 Js Dn1

␳s

Ms

FIGURE 1.5 Fields, currents, and surface charge at a general interface between two media.

1.3 Fields in Media and Boundary Conditions 13

Medium 2

nˆ

Dn2

h

Medium 1

Dn1

FIGURE 1.6 Closed surface S for equation (1.29).

∆S ␳s
s

ﬁelds at this interface. The time-harmonic version of (1.4), where S is the closed “pillbox”shaped surface shown in Figure 1.6, can be written as

D¯ · ds¯ = ρ dv.

S

V

(1.29)

In the limit as h → 0, the contribution of Dtan through the sidewalls goes to zero, so (1.29) reduces to

S D2n − S D1n = Sρs ,

or

D2n − D1n = ρs ,

(1.30)

where ρs is the surface charge density on the interface. In vector form, we can write

nˆ · (D¯ 2 − D¯ 1) = ρs .

(1.31)

A similar argument for B¯ leads to the result that

nˆ · B¯2 = nˆ · B¯1,

(1.32)

because there is no free magnetic charge. For the tangential components of the electric ﬁeld we use the phasor form of (1.6),

E¯ · dl¯ = − jω B¯ · ds¯ − M¯ · ds¯,

C

S

S

(1.33)

in connection with the closed contour C shown in Figure 1.7. In the limit as h → 0, the surface integral of B¯ vanishes (because S = h vanishes). The contribution from the surface integral of M¯ , however, may be nonzero if a magnetic surface current density M¯ s exists on the surface. The Dirac delta function can then be used to write

M¯ = M¯ sδ(h),

(1.34)

where h is a coordinate measured normal from the interface. Equation (1.33) then gives

Et1 − Et2 = − Ms,

h

S

Et 2

nˆ

C

Et1

∆l

FIGURE 1.7 Closed contour C for equation (1.33).

Medium 2 Msn
Medium 1

14 Chapter 1: Electromagnetic Theory

or

Et1 − Et2 = −Ms,

(1.35)

which can be generalized in vector form as

(E¯2 − E¯1) × nˆ = M¯ s.

(1.36)

A similar argument for the magnetic ﬁeld leads to

nˆ × (H¯2 − H¯1) = J¯s,

(1.37)

where J¯s is an electric surface current density that may exist at the interface. Equations (1.31), (1.32), (1.36), and (1.37) are the most general expressions for the boundary conditions at an arbitrary interface of materials and/or surface currents.

Fields at a Dielectric Interface

At an interface between two lossless dielectric materials, no charge or surface current densities will ordinarily exist. Equations (1.31), (1.32), (1.36), and (1.37) then reduce to

nˆ · D¯ 1 = nˆ · D¯ 2, nˆ · B¯1 = nˆ · B¯2, nˆ × E¯1 = nˆ × E¯2, nˆ × H¯1 = nˆ × H¯2.

(1.38a) (1.38b) (1.38c) (1.38d)

In words, these equations state that the normal components of D¯ and B¯ are continuous across the interface, and the tangential components of E¯ and H¯ are continuous across the interface. Because Maxwell’s equations are not all linearly independent, the six boundary conditions contained in the above equations are not all linearly independent. Thus, the enforcement of (1.38c) and (1.38d) for the four tangential ﬁeld components, for example, will automatically force the satisfaction of the equation-
s for the continuity of the normal components.

Fields at the Interface with a Perfect Conductor (Electric Wall)

Many problems in microwave engineering involve boundaries with good conductors (e.g., metals), which can often be assumed as lossless (σ → ∞). In this case of a perfect conductor, all ﬁeld components must be zero inside the conducting region. This result can be seen by considering a conductor with ﬁnite conductivity (σ < ∞) and noting that the skin depth (the depth to which most of the microwave power penetrates) goes to zero as σ → ∞. (Such an analysis will be performed in Section 1.7.) If we als-
o assume here that M¯ s = 0, which would be the case if the perfect conductor ﬁlled all the space on one side of the boundary, then (1.31), (1.32), (1.36), and (1.37) reduce to the following:

nˆ · D¯ = ρs, nˆ · B¯ = 0, nˆ × E¯ = 0, nˆ × H¯ = J¯s,

(1.39a) (1.39b) (1.39c) (1.39d)

where ρs and J¯s are the electric surface charge density and current density, respectively, on the interface, and nˆ is the normal unit vector pointing out of the perfect conductor. Such

1.4

1.4 The Wave Equation and Basic Plane Wave Solutions 15
a boundary is also known as an electric wall because the tangential components of E¯ are “shorted out,” as seen from (1.39c), and must vanish at the surface of the conductor.

The Magnetic Wall Boundary Condition

Dual to the preceding boundary condition is the magnetic wall boundary condition, where the tangential components of H¯ must vanish. Such a boundary does not really exist in practice but may be approximated by a corrugated surface or in certain planar transmission line problems. In addition, the idealization that nˆ × H¯ = 0 at an interface is often a convenient simpliﬁcation, as we will see in later chapters. We will also see that the magnetic wall boundary condition is analogous to the relations-
 between the voltage and current at the end of an open-circuited transmission line, while the electric wall boundary condition is analogous to the voltage and current at the end of a short-circuited transmission line. The magnetic wall condition, then, provides a degree of completeness in our formulation of boundary conditions and is a useful approximation in several cases of practical interest.
The ﬁelds at a magnetic wall satisfy the following conditions:

nˆ · D¯ = 0, nˆ · B¯ = 0, nˆ × E¯ = −M¯ s, nˆ × H¯ = 0,

(1.40a) (1.40b) (1.40c) (1.40d)

where nˆ is the normal unit vector pointing out of the magnetic wall region.

The Radiation Condition
When dealing with problems that have one or more inﬁnite boundaries, such as plane waves in an inﬁnite medium, or inﬁnitely long transmission lines, a condition on the ﬁelds at inﬁnity must be enforced. This boundary condition is known as the radiation condition and is essentially a statement of energy conservation. It states that, at an inﬁnite distance from a source, the ﬁelds must either be vanishingly small (i.e., zero) or propagating in an outward direction. This result can easily be seen by -
allowing the inﬁnite medium to contain a small loss factor (as any physical medium would have). Incoming waves (from inﬁnity) of ﬁnite amplitude would then require an inﬁnite source at inﬁnity and so are disallowed.

THE WAVE EQUATION AND BASIC PLANE WAVE SOLUTIONS

The Helmholtz Equation

In a source-free, linear, isotropic, homogeneous region, Maxwell’s curl equations in phasor form are

∇ × E¯ = − jωµH¯ , ∇ × H¯ = jω E¯ ,

(1.41a) (1.41b)

and constitute two equations for the two unknowns, E¯ and H¯ . As such, they can be solved for either E¯ or H¯ . Taking the curl of (1.41a) and using (1.41b) gives

∇ × ∇ × E¯ = − jωµ∇ × H¯ = ω2µ E¯ ,

16 Chapter 1: Electromagnetic Theory

which is an equation for E¯ . This result can be simpliﬁed through the use of vector identity (B.14), ∇ × ∇ × A¯ = ∇(∇ · A¯) − ∇2 A¯, which is valid for the rectangular components of an arbitrary vector A¯. Then,

∇2 E¯ + ω2µ E¯ = 0,

(1.42)

because ∇ · E¯ = 0 in a source-free region. Equation (1.42) is the wave equation, or Helmholtz equation, for E¯ . An identical equation for H¯ can be derived in the same manner:

∇2 H¯ + ω2µ H¯ = 0.

(1.43)

A constant k = ω√µ is deﬁned and called the propagation constant (also known as the

phase constant, or wave number), of the medium; its units are 1/m.

As a way of introducing wave behavior, we will next study the solutions to the above

wave equations in their simplest forms, ﬁrst for a lossless medium and then for a lossy

(conducting) medium.

Plane Waves in a Lossless Medium
In a lossless medium, and µ are real numbers, and so k is real. A basic plane wave solution to the above wave equations can be found by considering an electric ﬁeld with only an xˆ component and uniform (no variation) in the x and y directions. Then, ∂/∂ x = ∂/∂ y = 0, and the Helmholtz equation of (1.42) reduces to

∂2Ex ∂z2

+ k2Ex

= 0.

(1.44)

The two independent solutions to this equation are easily seen, by substitution, to be of the form

Ex (z) = E+e− jkz + E−e jkz,

(1.45)

where E+ and E− are arbitrary amplitude constants. The above solution is for the time harmonic case at frequency ω. In the time domain,
this result is written as

Ex (z, t) = E+ cos(ωt − kz) + E− cos(ωt + kz),

(1.46)

where we have assumed that E+ and E− are real constants. Consider the ﬁrst term in (1.46). This term represents a wave traveling in the +z direction because, to maintain a ﬁxed point on the wave (ωt − kz = constant), one must move in the +z direction as time increases. Similarly, the second term in (1.46) represents a wave traveling in the negative z direction—hence the notation E+ and E− for these wave amplitudes. The velocity of the
wave in this sense is called the phase velocity because it is the velocity at which a ﬁxed
phase point on the wave travels, and it is given by

vp

=

dz dt

=

d dt

ωt − constant k

=

ω k

=

1 √µ

(1.47)

In free-space, we have vp = 1/√µ0 0 = c = 2.998 × 108 m/sec, which is the speed of light.
The wavelength, λ, is deﬁned as the distance between two successive maxima (or minima, or any other reference points) on the wave at a ﬁxed instant of time. Thus,

(ωt − kz) − [ωt − k(z + λ)] = 2π,

1.4 The Wave Equation and Basic Plane Wave Solutions 17

so

λ=

2π k

=

2π vp ω

=

vp . f

(1.48)

A complete speciﬁcation of the plane wave electromagnetic ﬁeld should include the magnetic ﬁeld. In general, whenever E¯ or H¯ is known, the other ﬁeld vector can be readily
found by using one of Maxwell’s curl equations. Thus, applying (1.41a) to the electric ﬁeld
of (1.45) gives Hx = Hz = 0, and

Hy

=

j ∂Ex ωµ ∂z

=

1 (E +e− jkz − E −e jkz), η

(1.49)

√ where η = ωµ/k = µ/ is known as the intrinsic impedance of the medium. The ratio of the E¯ and H¯ ﬁeld components is seen to have units of impedance, known as the wave

impedance; medium. In

for planes waves the wave impedance free-space the intrinsic impedance is

is η0

equ√al to the = µ0/ 0

intrinsic = 377

impedance . Note that

of the the E¯

and H¯ vectors are orthogonal to each other and orthogonal to the direction of propagation

(±zˆ); this is a characteristic of transverse electromagnetic (TEM) waves.

EXAMPLE 1.1 BASIC PLANE WAVE PARAMETERS
A plane wave propagating in a lossless dielectric medium has an electric ﬁeld given as Ex = E0 cos(ωt − βz) with a frequency of 5.0 GHz and a wavelength in the material of 3.0 cm. Determine the propagation constant, the phase velocity, the relative permittivity of the medium, and the wave impedance.

Solution

From (1.48) the propagation constant is k

=

2π λ

=

2π 0.03

=

209.4 m−1, and from

(1.47) the phase velocity is

vp

=

ω k

=

2π f k

= λf

= (0.03) (5 × 109) = 1.5 × 108 m/sec.

This is slower than the speed of light by a factor of 2.0. The relative permittivity of the medium can be found from (1.47) as

c 2 3.0 × 108 2 r = vp = 1.5 × 108 = 4.0

The wave impedance is

η

=

η0/√

r

=

377 √
4.0

=

188.5

■

Plane Waves in a General Lossy Medium

Now consider the effect of a lossy medium. If the medium is conductive, with a conductivity σ , Maxwell’s curl equations can be written, from (1.41a) and (1.20) as

∇ × E¯ = − jωµH¯ , ∇ × H¯ = jω E¯ + σ E¯ .

(1.50a) (1.50b)

18 Chapter 1: Electromagnetic Theory

The resulting wave equation for E¯ then becomes

∇2 E¯ + ω2µ 1 − j σ E¯ = 0, ω

(1.51)

where we see a similarity with (1.42), the wave equation for E¯ in the lossless case. The difference is that the quantity k2 = ω2µ of (1.42) is replaced by ω2µ [1 − j (σ/ω )] in

(1.51). We then deﬁne a complex propagation constant for the medium as

γ = α + jβ = jω√µ

1

−

j

σ ω

(1.52)

where α is the attenuation constant and β is the phase constant. If we again assume an electric ﬁeld with only an xˆ component and uniform in x and y, the wave equation of (1.51) reduces to

∂2Ex ∂z2

− γ 2Ex

= 0,

(1.53)

which has solutions

Ex (z) = E +e−γ z + E −eγ z.

(1.54)

The positive traveling wave then has a propagation factor of the form e−γ z = e−αz e− jβz ,

which in the time domain is of the form e−αz cos(ωt − βz).

We see that this represents a wave traveling in the +z direction with a phase velocity

vp = ω/β, a wavelength λ = 2π/β, and an exponential damping factor. The rate of decay with distance is given by the attenuation constant, α. The negative traveling wave term of

(1.54) is similarly damped along the −z axis. If the loss is removed, σ = 0, and we have

γ = jk and α = 0, β = k.

As discussed in Section 1.3, loss can also be treated through the use of a complex

permittivity. From (1.52) and (1.20) with σ = 0 but = − j complex, we have that

γ = jω√µ = jk = jω µ (1 − j tan δ),

(1.55)

where tan δ = / is the loss tangent of the material. The associated magnetic ﬁeld can be calculated as

Hy

=

j ∂Ex ωµ ∂z

=

− j γ (E+e−γ z − E−eγ z). ωµ

The intrinsic impedance of the conducting medium is now complex,

η=

j

ωµ γ

,

(1.56) (1.57)

but is still identiﬁed as the wave impedance, which expresses the ratio of electric to magnetic ﬁeld components. This allows (1.56) to be rewritten as

Hy

=

1 (E +e−γ z η

−

E −eγ z).

(1.58)

Note√that η = µ/

although when γ

η of =j

k(1=.57j)ωi√s,µin .general,

complex,

it

reduces

to

the

lossless

case

of

1.4 The Wave Equation and Basic Plane Wave Solutions 19

Plane Waves in a Good Conductor

Many problems of practical interest involve loss or attenuation due to good (but not perfect)

conductors. A good conductor is a special case of the preceding analysis, where the con-

ductive current is much greater than the displacement current, which means that σ ω .

Most metals can be categorized as good conductors. In terms of a complex , rather than

conductivity, this condition is equivalent to

. The propagation constant of (1.52)

can then be adequately approximated by ignoring the displacement current term, to give

γ = α + jβ

j ω√µ

σ jω

= (1 + j)

ωµσ . 2

(1.59)

The skin depth, or characteristic depth of penetration, is deﬁned as

δs

=

1 α

=

2 ωµσ

.

(1.60)

Thus the amplitude of the ﬁelds in the conductor will decay by an amount 1/e, or 36.8%, after traveling a distance of one skin depth, because e−αz = e−αδs = e−1. At microwave frequencies, for a good conductor, this distance is very small. The practical importance of
this result is that only a thin plating of a good conductor (e.g., silver or gold) is necessary
for low-loss microwave components.

EXAMPLE 1.2 SKIN DEPTH AT MICROWAVE FREQUENCIES
Compute the skin depth of aluminum, copper, gold, and silver at a frequency of 10 GHz.
Solution The conductivities for these metals are listed in Appendix F. Equation (1.60) gives the skin depths as

δs =

2= ωµσ

1 π f µ0σ

=

1 π(1010)(4π × 10−7)

1 σ

= 5.03 × 10−3 1 . σ

For aluminum: δs = 5.03 × 10−3

1 3.816 × 107

=

8.14 × 10−7m.

For copper:

δs = 5.03 × 10−3

1 5.813 × 107

=

6.60 × 10−7m.

For gold:

δs = 5.03 × 10−3

1 4.098 × 107

=

7.86 × 10−7m.

For silver:

δs = 5.03 × 10−3

1 6.173 × 107

=

6.40 × 10−7m.

These results show that most of the current ﬂow in a good conductor occurs in an

extremely thin region near the surface of the conductor.

■

20 Chapter 1: Electromagnetic Theory TABLE 1.1 Summary of Results for Plane Wave Propagation in Various Media

Quantity
Complex propagation constant
Phase constant (wave number)
Attenuation constant Impedance Skin depth Wavelength Phase velocity

Lossless ( = σ = 0) γ = jω√µ
β = k = ω√µ
α=0 η = √µ/ = ωµ/k
δs = ∞ λ = 2π/β v p = ω/β

Type of Medium

General

Lossy

γ = jω√µ

= jω µ

1

−

j

σ ω

β = Im{γ }

α = Re{γ } η = jωµ/γ
δs = 1/α λ = 2π/β vp = ω/β

Good Conductor

(

or σ ω )

√ γ = (1 + j) ωµσ/2

√ β = Im{γ } = ωµσ/2
√ α = Re{γ } = ωµσ/2
√ η = (1 + j) ωµ/2σ
√ δs = 2/ωµσ
λ = 2π/β vp = ω/β

1.5

The intrinsic impedance inside a good conductor can be obtained from (1.57) and (1.59). The result is

j ωµ

ωµ

1

η= γ

(1 + j) 2σ = (1 + j) σ δs .

(1.61)

Notice that the phase angle of this impedance is 45◦, a characteristic of good conductors. The phase angle of the impedance for a lossless material is 0◦, and the phase angle of the impedance of an arbitrary lossy medium is somewhere between 0◦ and 45◦.

Table 1.1 summarizes the results for plane wave propagation in lossless and lossy

homogeneous media.

GENERAL PLANE WAVE SOLUTIONS

Some speciﬁc features of plane waves were discussed in Section 1.4, but we will now look at plane waves from a more general point of view and solve the wave equation by the method of separation of variables. This technique will ﬁnd application in succeeding chapters. We will also discuss circularly polarized plane waves, which will be important for the discussion of ferrites in Chapter 9.
In free-space, the Helmholtz equation for E¯ can be written as

∇2 E¯

+ k02 E¯

=

∂2 E¯ ∂x2

+

∂2 E¯ ∂y2

+

∂2 E¯ ∂z2

+ k02 E¯

= 0,

(1.62)

and this vector wave equation holds for each rectangular component of E¯ :

∂ 2 Ei ∂x2

+

∂ 2 Ei ∂y2

+

∂ 2 Ei ∂z2

+ k02 Ei

= 0,

(1.63)

where the index i = x, y, or z. This equation can be solved by the method of separation of variables, a standard technique for treating such partial differential equations. The method begins by assuming that the solution to (1.63) for, say, Ex , can be written as a product of three functions for each of the three coordinates:

Ex (x, y, z) = f (x)g(y)h(z).

(1.64)

1.5 General Plane Wave Solutions 21

Substituting this form into (1.63) and dividing by f gh gives

f f

+g g

+h h

+ k02 = 0,

(1.65)

where the double primes denote the second derivative. The key step in the argument is to
recognize that each of the terms in (1.65) must be equal to a constant because they are independent of each other. That is, f / f is only a function of x, and the remaining terms in (1.65) do not depend on x, so f / f must be a constant, and similarly for the other terms in (1.65). Thus, we deﬁne three separation constants, kx , ky, and kz, such that

f / f = −kx2; g /g = −k2y; h / h = −kz2;

or

d2 f dx2

+ kx2 f

= 0;

d2g dy2

+

k

2 y

g

=

0;

d2h dz2

+

kz2h

=

0.

(1.66)

Combining (1.65) and (1.66) shows that

kx2

+

k

2 y

+

kz2

=

k02.

(1.67)

The partial differential equation of (1.63) has now been reduced to three separate ordinary differential equations in (1.66). Solutions to these equations have the forms e± jkx x , e± jky y, and e± jkzz, respectively. As we saw in the previous section, the terms with + signs result in waves traveling in the negative x, y, or z direction, while the terms with − signs result
in waves traveling in the positive direction. Both solutions are possible and are valid; the
amount to which these various terms are excited is dependent on the source of the ﬁelds and
the boundary conditions. For our present discussion we will select a plane wave traveling
in the positive direction for each coordinate and write the complete solution for Ex as

Ex (x , y, z) = Ae− j (kx x+ky y+kz z),

(1.68)

where A is an arbitrary amplitude constant. Now deﬁne a wave number vector k¯ as

k¯ = kx xˆ + ky yˆ + kz zˆ = k0nˆ.

(1.69)

Then from (1.67), |k¯| = k0, and so nˆ is a unit vector in the direction of propagation. Also deﬁne a position vector as

r¯ = x xˆ + y yˆ + zzˆ;

(1.70)

then (1.68) can be written as

Ex (x, y, z) = Ae− jk¯·r¯.

(1.71)

Solutions to (1.63) for Ey and Ez are, of course, similar in form to Ex of (1.71), but with different amplitude constants:

Ey(x, y, z) = Be− jk¯·r¯, Ez(x, y, z) = Ce− jk¯·r¯.

(1.72) (1.73)

The x, y, and z dependences of the three components of E¯ in (1.71)–(1.73) must be the same (same kx , ky, kz), because the divergence condition that

∇

·

E¯

=

∂ Ex ∂x

+

∂Ey ∂y

+

∂ Ez ∂z

=

0

22 Chapter 1: Electromagnetic Theory

must also be applied in order to satisfy Maxwell’s equations, and this implies that Ex , Ey, and Ez must each have the same variation in x, y, and z. (Note that the solutions in the preceding section automatically satisﬁed the divergence condition because Ex was the only component of E¯ , and Ex did not vary with x.) This condition also imposes a constraint on the amplitudes A, B, and C because if

E¯0 = Axˆ + B yˆ + C zˆ,

we have

E¯ = E¯0e− jk¯·r¯,

and ∇ · E¯ = ∇ · (E¯0e− jk¯·r¯) = E¯0 · ∇e− jk¯·r¯ = − j k¯ · E¯0e− jk¯·r¯ = 0,

where vector identity (B.7) was used. Thus, we must have

k¯ · E¯0 = 0,

(1.74)

which means that the electric ﬁeld amplitude vector E¯0 must be perpendicular to the direction of propagation, k¯. This condition is a general result for plane waves and implies that only two of the three amplitude constants, A, B, and C, can be chosen independently.
The magnetic ﬁeld can be found from Maxwell’s equation,

∇ × E¯ = − jωµ0 H¯ ,

(1.75)

to give

H¯

=

j∇ ωµ0

×

E¯

=

j∇ ωµ0

× (E¯0e− jk¯·r¯)

=

−j ωµ0

E¯ 0

× ∇e− jk¯·r¯

=

−j ωµ0

E¯ 0

× (− j k¯)e− jk¯·r¯

=

k0 nˆ ωµ0

×

E¯0e− jk¯·r¯

=

1 η0 nˆ

×

E¯0e− jk¯·r¯

=

1 η0 nˆ

×

E¯ ,

(1.76)

where vector identity (B.9) was used in obtaining the second line. This result shows that the magnetic ﬁeld vector H¯ lies in a plane normal to k¯, the direction of propagation, and that H¯ is perpendic√ular to E¯ . See Figure 1.8 for an illustration of these vector relations. The quantity η0 = µ0/ 0 = 377 in (1.76) is the intrinsic impedance of free-space.
The time domain expression for the electric ﬁeld can be found as

E¯(x, y, z, t) = Re E¯ (x, y, z)e jωt = Re E¯0e− jk¯·r¯ e jωt = E¯0 cos(k¯ · r¯ − ωt),

(1.77)

1.5 General Plane Wave Solutions 23

z

y

E

nˆ

H

x FIGURE 1.8 Orientation of the E¯ , H¯ , and k¯ = k0nˆ vectors for a general plane wave.
assuming that the amplitude constants A, B, and C contained in E¯0 are real. If these constants are not real, their phases should be included inside the cosine term of (1.77). It is easy to show that the wavelength and phase velocity for this solution are the same as obtained in Section 1.4.

EXAMPLE 1.3 CURRENT SHEETS AS SOURCES OF PLANE WAVES

An inﬁnite sheet of surface current can be considered as a source for plane waves. If an electric surface current density J¯s = J0xˆ exists on the z = 0 plane in freespace, ﬁnd the resulting ﬁelds by assuming plane waves on either side of the
current sheet and enforcing boundary conditions.

Solution Since the source does not vary with x or y, the ﬁelds will not vary with x or y but will propagate away from the source in the ±z direction. The boundary conditions to be satisﬁed at z = 0 are
nˆ × (E¯2 − E¯1) = zˆ × (E¯2 − E¯1) = 0, nˆ × (H¯2 − H¯1) = zˆ × (H¯2 − H¯1) = J0xˆ,
where E¯1, H¯1 are the ﬁelds for z < 0, and E¯2, H¯2 are the ﬁelds for z > 0. To satisfy the second condition, H¯ must have a yˆ component. Then for E¯ to be orthogonal to H¯ and zˆ, E¯ must have an xˆ component. Thus the ﬁelds will have the following form:

for z < 0, for z > 0,

E¯1 = xˆ Aη0e jk0z, H¯1 = −yˆ Ae jk0z, E¯2 = xˆ Bη0e− jk0z, H¯2 = yˆ Be− jk0z,

where A and B are arbitrary amplitude constants. The ﬁrst boundary condition, that Ex is continuous at z = 0, yields A = B, while the boundary condition for H¯ yields the equation

−B − A = J0.

Solving for A, B gives

A = B = −J0/2,

which completes the solution.

■

24 Chapter 1: Electromagnetic Theory

Circularly Polarized Plane Waves

The plane waves discussed previously all had their electric ﬁeld vector pointing in a ﬁxed direction and so are called linearly polarized waves. In general, the polarization of a plane wave refers to the orientation of the electric ﬁeld vector, which may be in a ﬁxed direction or may change with time.
Consider the superposition of an xˆ linearly polarized wave with amplitude E1 and a yˆ linearly polarized wave with amplitude E2, both traveling in the positive zˆ direction. The total electric ﬁeld can be written as

E¯ = (E1xˆ + E2 yˆ)e− jk0z.

(1.78)

A number of possibilities now arise. If E1 = 0 and E2 = 0, we have a plane wave linearly polarized in the xˆ direction. Similarly, if E1 = 0 and E2 = 0, we have a plane wave linearly polarized in the yˆ direction. If E1 and E2 are both real and nonzero, we have a plane wave
linearly polarized at the angle

φ = tan−1 E2 . E1
For example, if E1 = E2 = E0, we have E¯ = E0(xˆ + yˆ)e− jk0z,
which represents an electric ﬁeld vector at a 45◦ angle from the x-axis. Now consider the case in which E1 = j E2 = E0, where E0 is real, so that E¯ = E0(xˆ − j yˆ)e− jk0z.

(1.79)

The time domain form of this ﬁeld is

E¯(z, t) = E0[xˆ cos(ωt − k0z) + yˆ cos(ωt − k0z − π/2)].

(1.80)

This expression shows that the electric ﬁeld vector changes with time or, equivalently, with distance along the z-axis. To see this, pick a ﬁxed position, say z = 0. Equation (1.80) then reduces to

E¯(0, t) = E0[xˆ cos ωt + yˆ sin ωt],

(1.81)

so as ωt increases from zero, the electric ﬁeld vector rotates counterclockwise from the x-axis. The resulting angle from the x-axis of the electric ﬁeld vector at time t, at z = 0, is then
φ = tan−1 sin ωt = ωt, cos ωt

which shows that the polarization rotates at the uniform angular velocity ω. Since the ﬁngers of the right hand point in the direction of rotation of the electric ﬁeld vector when the thumb points in the direction of propagation, this type of wave is referred to as a righthand circularly polarized (RHCP) wave. Similarly, a ﬁeld of the form

E¯ = E0(xˆ + j yˆ)e− jk0z

(1.82)

constitutes a left-hand circularly polarized (LHCP) wave, where the electric ﬁeld vector rotates in the opposite direction. See Figure 1.9 for a sketch of the polarization vectors for RHCP and LHCP plane waves.
The magnetic ﬁeld associated with a circularly polarized wave may be found from Maxwell’s equations or by using the wave impedance applied to each component of the

y
e (0, t)
x

1.6 Energy and Power 25 y
e (0, t)
x

1.6

z

Propagation

(a)

z

Propagation

(b)

FIGURE 1.9 Electric ﬁeld polarization for (a) RHCP and (b) LHCP plane waves.

electric ﬁeld. For example, applying (1.76) to the electric ﬁeld of a RHCP wave as given in (1.79) yields

H¯ = E0 zˆ × (xˆ − j yˆ)e− jk0z = E0 (yˆ + j xˆ)e− jk0z = j E0 (xˆ − j yˆ)e− jk0z,

η0

η0

η0

which is also seen to represent a vector rotating in the RHCP sense.

ENERGY AND POWER

In general, a source of electromagnetic energy sets up ﬁelds that store electric and magnetic energy and carry power that may be transmitted or dissipated as loss. In the sinusoidal steady-state case, the time-average stored electric energy in a volume V is given by

We

=

1 Re
4

E¯ · D¯ ∗ dv,
V

(1.83)

which in the case of simple lossless isotropic, homogeneous, linear media, where is a real scalar constant, reduces to

We = 4

E¯ · E¯ ∗ dv.
V

(1.84)

Similarly, the time-average magnetic energy stored in the volume V is

Wm

=

1 Re
4

H¯ · B¯ ∗ dv,
V

(1.85)

which becomes

µ Wm = 4

H¯ · H¯ ∗ dv,
V

(1.86)

for a real, constant, scalar µ.
We can now derive Poynting’s theorem, which leads to energy conservation for electromagnetic ﬁelds and sources. If we have an electric source current J¯s and a conduction current σ E¯ as deﬁned in (1.19), then the total electric current density is J¯ = J¯s + σ E¯ . Multiplying (1.27a) by H¯ ∗ and multiplying the conjugate of (1.27b) by E¯ yields

H¯ ∗ · (∇ × E¯ ) = − j ωµ|H¯ |2 − H¯ ∗ · M¯ s, E¯ · (∇ × H¯ ∗) = E¯ · J¯∗ − j ω ∗|E¯ |2 = E¯ · J¯s∗ + σ |E¯ |2 − j ω ∗|E¯ |2,

26 Chapter 1: Electromagnetic Theory

FIGURE 1.10 A volume V , enclosed by the closed surface S, containing ﬁelds E¯ , H¯ , and current sources J¯s , M¯ s .

where M¯ s is the magnetic source current. Using these two results in vector identity (B.8) gives
∇ · (E¯ × H¯ ∗) = H¯ ∗ · (∇ × E¯ ) − E¯ · (∇ × H¯ ∗) = −σ |E¯ |2 + j ω( ∗|E¯ |2 − µ|H¯ |2) − (E¯ · J¯s∗ + H¯ ∗ · M¯ s).
Now integrate over a volume V and use the divergence theorem:

∇ · (E¯ × H¯ ∗) dv = E¯ × H¯ ∗ · ds¯

V

S

= −σ |E¯ |2 dv + j ω ( ∗|E¯ |2 − µ|H¯ |2) dv − (E¯ · J¯s∗ + H¯ ∗ · M¯ s) dv, (1.87)

V

V

V

where S is a closed surface enclosing the volume V , as shown in Figure 1.10. Allowing = − j and µ = µ − jµ to be complex to allow for loss, and rewriting (1.87),
gives

−1 2

(E¯
V

·

J¯s∗

+

H¯ ∗

·

M¯ s) dv

=

1 2

E¯ × H¯ ∗ · ds¯ + σ

S

2

|E¯ |2 dv
V

+ω

(

|E¯ |2 + µ

|H¯ |2) dv +

ω j

(µ |H¯ |2 − |E¯ |2) dv.

2V

2V

(1.88)

This result is known as Poynting’s theorem, after the physicist J. H. Poynting (1852–1914),
and is basically a power balance equation. Thus, the integral on the left-hand side represents the complex power Ps delivered by the sources J¯s and M¯ s inside S:

Ps

=

−1 2

(E¯ · J¯s∗ + H¯ ∗ · M¯ s ) dv.
V

(1.89)

The ﬁrst integral on the right-hand side of (1.88) represents complex power ﬂow out of the closed surface S. If we deﬁne a quantity S¯, called the Poynting vector, as

S¯ = E¯ × H¯ ∗,

(1.90)

then this power can be expressed as

1 Po = 2

E¯ × H¯ ∗ · ds¯ = 1

S

2

S¯ · ds¯.
S

(1.91)

The surface S in (1.91) must be a closed surface for this interpretation to be valid. The real parts of Ps and Po in (1.89) and (1.91) represent time-average powers.
The second and third integrals in (1.88) are real quantities representing the timeaverage power dissipated in the volume V due to conductivity, dielectric, and magnetic losses. If we deﬁne this power as P we have

P = σ |E¯ |2 dv + ω ( |E¯ |2 + µ |H¯ |2) dv,

2V

2V

(1.92)

1.6 Energy and Power 27

which is sometimes referred to as Joule’s law. The last integral in (1.88) can be seen to be related to the stored electric and magnetic energies, as deﬁned in (1.84) and (1.86).
With the above deﬁnitions, Poynting’s theorem can be rewritten as

Ps = Po + P + 2 j ω(Wm − We).

(1.93)

In words, this complex power balance equation states that the power delivered by the sources (Ps) is equal to the sum of the power transmitted through the surface (Po), the power lost to heat in the volume (P ), and 2ω times the net reactive energy stored
in the volume.

Power Absorbed by a Good Conductor

Practical transmission lines involve imperfect conductors, leading to attenuation and power losses, as well as the generation of noise. To calculate loss and attenuation due to an imperfect conductor we must ﬁnd the power dissipated in the conductor. We will show that this can be accomplished using only the ﬁelds at the surface of the conductor, which is a very helpful simpliﬁcation when calculating attenuation.
Consider the geometry of Figure 1.11, which shows the interface between a lossless medium and a good conductor. A ﬁeld is incident from z < 0, and the ﬁeld penetrates into the conducting region, z > 0. The real average power entering the conductor volume deﬁned by the cross-sectional area S0 at the interface and the surface S is given from (1.91) as

Pavg

=

1 Re
2

E¯ × H¯ ∗ · nˆ ds,
S0 + S

(1.94)

where nˆ is a unit normal vector pointing into the closed surface S0 + S, and E¯ , H¯ are the ﬁelds over this surface. The contribution to the integral in (1.94) from the surface S can
be made zero by proper selection of this surface. For example, if the ﬁeld is a normally incident plane wave, the Poynting vector S¯ = E¯ × H¯ ∗ will be in the zˆ direction, and so tangential to the top, bottom, front, and back of S, if these walls are made parallel to the
z-axis. If the wave is obliquely incident, these walls can be slanted to obtain the same result. If the conductor is good, the decay of the ﬁelds away from the interface at z = 0 will be very rapid, so the right-hand end of S can be made far enough away from z = 0 such that there is negligible contribution to the integral from this part of the surface S. The

x ␴ >> ␻⑀

nˆ

␮, ⑀

ˆn = ˆz

P S0

z nˆ

S
FIGURE 1.11 An interface between a lossless medium and a good conductor with a closed surface S0 + S for computing the power dissipated in the conductor.

28 Chapter 1: Electromagnetic Theory

time-average power entering the conductor through S0 can then be written as

Pavg

=

1 Re
2

E¯ × H¯ ∗ · zˆ ds.
S0

From vector identity (B.3) we have

(1.95)

zˆ · (E¯ × H¯ ∗) = (zˆ × E¯ ) · H¯ ∗ = ηH¯ · H¯ ∗,

(1.96)

since H¯ = nˆ × E¯ /η, as generalized from (1.76) for conductive media, where η is the intrinsic impedance (complex) of the conductor. Equation (1.95) can then be written as

where

Pavg =

Rs 2

|H¯ |2 ds,
S0

(1.97)

Rs = Re{η} = Re (1 + j)

ωµ 2σ

=

ωµ = 1 2σ σ δs

(1.98)

is deﬁned as the surface resistance of the conductor. The magnetic ﬁeld H¯ in (1.97) is tangential to the conductor surface and needs only to be evaluated at the surface of the conductor; since Ht is continuous at z = 0, it does not matter whether this ﬁeld is evaluated just outside the conductor or just inside the conductor. In the next section we will show how (1.97) can be evaluated in terms of a surface current density ﬂowing on the surface of the conductor, where the conductor can be approxim-
ated as perfect.

1.7

PLANE WAVE REFLECTION FROM A MEDIA INTERFACE
A number of problems to be considered in later chapters involve the behavior of electromagnetic ﬁelds at the interface of various types of media, including lossless media, lossy media, a good conductor, or a perfect conductor, and so it is beneﬁcial at this time to study the reﬂection of a plane wave normally incident from free-space onto a half-space of an arbitrary material. The geometry is shown in Figure 1.12, where the material half-space z > 0 is characterized by the parameters , µ, and σ .

General Medium
With no loss of generality we can assume that the incident plane wave has an electric ﬁeld vector oriented along the x-axis and is propagating along the positive z-axis. The incident

x ⑀0, ␮0 Ei

⑀, ␮, ␴

Et Er
z

FIGURE 1.12 Plane wave reﬂection from an arbitrary medium; normal incidence.

1.7 Plane Wave Reﬂection from a Media Interface 29

ﬁelds can then be written, for z < 0, as

E¯i = xˆ E0e− jk0z,

(1.99a)

H¯i

=

yˆ

1 η0

E0e−

j

k0

z

,

(1.99b)

where η0 is the impedance of free-space and E0 is an arbitrary amplitude. Also in the region z < 0, a reﬂected wave may exist with the form

E¯r = xˆ E0e+ jk0z,

(1.100a)

H¯r = −yˆ η0 E0e+ jk0z,

(1.100b)

where is the unknown reﬂection coefﬁcient of the reﬂected electric ﬁeld. Note that in
(1.100), the sign in the exponential terms has been chosen as positive, to represent waves traveling in the −zˆ direction of propagation, as derived in (1.46). This is also consistent with the Poynting vector S¯r = E¯r × H¯r∗ = −| |2|E0|2zˆ/η0, which shows power to be traveling in the −zˆ direction for the reﬂected wave.
As shown in Section 1.4, from equations (1.54) and (1.58), the transmitted ﬁelds for z > 0 in the lossy medium can be written as

E¯t = xˆTE0e−γ z,

H¯t

=

yˆ TE0 η

e−γ

z

,

(1.101a) (1.101b)

where T is the transmission coefﬁcient of the transmitted electric ﬁeld and η is the intrinsic impedance (complex) of the lossy medium in the region z > 0. From (1.57) and (1.52) the intrinsic impedance is

η=

j

ωµ γ

,

(1.102)

and the propagation constant is γ = α + jβ = jω√µ 1 − jσ/ω .

(1.103)

We now have a boundary value problem where the general form of the ﬁelds are known via (1.99)–(1.101) on either side of the material discontinuity at z = 0. The two unknown constants and T are found by applying boundary conditions for Ex and Hy at z = 0. Since these tangential ﬁeld components must be continuous at z = 0, we arrive at the fol-
lowing two equations:

1 + = T,

(1.104a)

1− T η0 = η .

(1.104b)

Solving these equations for the reﬂection and transmission coefﬁcients gives

= η − η0 , η + η0 2η
T = 1 + = η + η0 .

(1.105a) (1.105b)

This is a general solution for reﬂection and transmission of a normally incident wave at the interface of an arbitrary material, where η is the intrinsic impedance of the material. We now consider three special cases of this result.

30 Chapter 1: Electromagnetic Theory

Lossless Medium

If the region for z > 0 is a lossless dielectric, then σ = 0, and µ and are real quantities. The propagation constant in this case is purely imaginary and can be written as

γ = jβ = j ω√µ = j k0√µr r ,

(1.106)

where k0 = ω√µ0 0 is the propagation constant (wave number) of a plane wave in freespace. The wavelength in the dielectric is

λ=

2π β

=

2π ω√µ

=

√µλ0r

,
r

(1.107)

the phase velocity is

vp

=

ω β

=

1 √µ

=

c √µr

,
r

(1.108)

(slower than the speed of light in free-space) and the intrinsic impedance of the dielectric is

η=

j ωµ γ

=

µ = η0 µr .
r

(1.109)

For this lossless case, η is real, so both and T from (1.105) are real, and E¯ and H¯ are in phase with each other in both regions.
Power conservation for the incident, reﬂected, and transmitted waves can be demonstrated by computing the Poynting vectors in the two regions. Thus, for z < 0, the complex Poynting vector is found from the total ﬁelds in this region as

since

S¯− = E¯ × H¯ ∗ = (E¯i + E¯r ) × (H¯i + H¯r )∗

=

zˆ

|

E0

|2

1 η0

(e−

j

k0

z

+

e jk0z )(e− jk0z −

e jk0z )∗

=

zˆ | E 0 |2

1 η0

(1

−

|

|2 +

e2 jk0z −

∗e−2 jk0z )

=

zˆ | E 0 |2

1 η0

(1

−

|

|2 + 2 j

sin 2k0z),

is real. For z > 0 the complex Poynting vector is

(1.110a)

S¯ +

=

E¯ t

×

H¯t∗

=

zˆ

|

E0|2|T η

|2

,

which can be rewritten, using (1.105), as

S¯ +

=

zˆ | E 0 |2

(η

4η + η0)2

=

zˆ

|

E0|2

1 η0

(1

−

|

|2).

(1.110b)

Now observe that at z = 0, S¯− = S¯+, so that complex power ﬂow is conserved across the
interface. Next consider the time-average power ﬂow in the two regions. For z < 0 the time-average power ﬂow through a 1 m2 cross section is

P−

=

1 Re

2

S¯−· zˆ

=

1 2

| E 0 |2

1 η0

(1

−

|

|2).

(1.111a)

1.7 Plane Wave Reﬂection from a Media Interface 31

and for z > 0, the time-average power ﬂow through a 1 m2 cross section is

P+

=

1 Re

2

S¯+ · zˆ

=

1 2

|

E0|2

1 η0

(1

−

|

|2) = P−,

(1.111b)

so real power ﬂow is conserved. We now note a subtle point. When computing the complex Poynting vector for z < 0 in
(1.110a), we used the total E¯ and H¯ ﬁelds. If we compute separately the Poynting vectors for the incident and reﬂected waves, we obtain

S¯i

=

E¯ i

×

H¯i∗

=

zˆ |E0|2 , η0

(1.112a)

S¯r

=

E¯r

×

H¯r∗

=

−zˆ |E0|2| η0

|2 ,

(1.112b)

and we see that S¯i + S¯r = S¯− of (1.110a). The missing cross-product terms account for stored reactive energy in the standing wave in the z < 0 region. Thus, the decomposition
of a Poynting vector into incident and reﬂected components is not, in general, meaningful. It is possible to deﬁne a time-average Poynting vector as (1/2)Re{E¯ × H¯ ∗}, and in this
case such a deﬁnition applied to the individual incident and reﬂected components will give the correct result since Pi = (1/2)|E¯0|2/η0 and Pr = (−1/2)|E0|2| |2/η0, so Pi + Pr = P−. However, this deﬁnition will fail to provide meaningful results when the medium for
z < 0 is lossy.

Good Conductor
If the region for z > 0 is a good (but not perfect) conductor, the propagation constant can be written as discussed in Section 1.4:

γ = α + jβ = (1 + j) ωµσ = (1 + j) 1 .

2

δs

Similarly, the intrinsic impedance of the conductor simpliﬁes to

(1.113)

η = (1 + j) ωµ = (1 + j) 1 .

2σ

σ δs

(1.114)

Now the impedance is complex, with a phase angle of 45◦, so E¯ and H¯ will be 45◦ out of phase, and and T will be complex. In (1.113) and (1.114), δs = 1/α is the skin depth, as deﬁned in (1.60).
For z < 0 the complex Poynting vector can be evaluated at z = 0 to give

S¯ − (z

=

0)

=

zˆ | E 0 |2

1 η0

(1

−

|

|2 +

−

∗).

For z > 0 the complex Poynting vector is

(1.115a)

S¯ +

=

E¯ t

×

H¯t∗

=

zˆ|

E0

|2|T

|2

1 η∗

e−2α

z

,

and using (1.105) for T and gives

S¯ +

=

zˆ|E0|2 |η

4η + η0|2

e−2αz

=

zˆ

|

E0|2

1 η0

(1

−

|

|2 +

− ∗)e−2αz .

So at the interface at z = 0, S¯− = S¯+, and complex power is conserved.

(1.115b)

32 Chapter 1: Electromagnetic Theory

Observe that if we were to compute the separate incident and reﬂected Poynting vectors for z < 0 as

S¯i

=

E¯ i

×

H¯i∗

=

zˆ

|

E0|2 η0

,

S¯r

=

E¯r

×

H¯r∗

=

−zˆ |E0|2| η0

|2 ,

(1.116a) (1.116b)

we would not obtain S¯i + S¯r = S¯− of (1.115a), even for z = 0. It is possible, however, to
consider real power ﬂow in terms of the individual traveling wave components. Thus, the time-average power ﬂows through a 1 m2 cross section are

P−

=

1 Re(S¯− 2

·

zˆ)

=

1 2

|

E0|2

1 η0

(1

−

|

|2),

P+

=

1 Re(S¯− 2

·

zˆ)

=

1 2

|

E0|2

1 η0

(1

−

|

|2)e−2αz ,

(1.117a) (1.117b)

which shows power balance at z = 0. In addition, Pi = |E0|2/2η0 and Pr = −|E0|2 | |2 / 2η0, so that Pi + Pr = P−, showing that the real power ﬂow for z < 0 can be decomposed into incident and reﬂected wave components.
Notice that S¯+, the power density in the lossy conductor, decays exponentially according to the e−2αz attenuation factor. This means that power is being dissipated in the lossy material as the wave propagates into the medium in the +z direction. The power, and also
the ﬁelds, decay to a negligibly small value within a few skin depths of the material, which
for a reasonably good conductor is an extremely small distance at microwave frequencies.
The electric volume current density ﬂowing in the conducting region is given as

J¯t = σ E¯t = xˆσ E0T e−γ zA/m2,

(1.118)

and so the average power dissipated in (or transmitted into) a 1 m2 cross-sectional volume of the conductor can be calculated from the conductor loss term of (1.92) (Joule’s law) as

Pt = 1 2

V

E¯ t

·

J¯t∗ dv

=

1 2

1 x =0

1 y=0

∞
(xˆ E0T e−γ z) · (xˆσ E0T e−γ z)∗ dz d y d x
z=0

=

1 2

σ

|

E0|2|T

|2

∞
e−2αz d z
z=0

=

σ

| E 0 |2 |T 4α

|2

.

(1.119)

Since 1/η = σ δs/(1 + j) = (σ/2α)(1 − j), the real power entering the conductor through a 1 m2 cross section [as given by (1/2)Re{S¯+ · zˆ} at z = 0] can be expressed using (1.115b) as Pt = |E0|2|T |2(σ/4α), which is in agreement with (1.119).

Perfect Conductor

Now assume that the region z > 0 contains a perfect conductor. The above results can be specialized to this case by allowing σ → ∞. Then, from (1.113), α → ∞; from (1.114), η → 0; from (1.60), δs → 0; and from (1.105a, b), T → 0 and → −1. The ﬁelds for z > 0 thus decay inﬁnitely fast and are identically zero in the perfect conductor. The perfect conductor can be thought of as “shorting out” the incident electric ﬁeld. For z < 0, from (1.99) and (1.100), the total E¯ and H¯ ﬁelds are, since = −1,

E¯ = E¯i + E¯r = xˆ E0(e− jk0z − e jk0z) = −xˆ2 jE0 sin k0z,

H¯

=

H¯i

+

H¯r

=

yˆ 1 η0

E0(e− jk0z

+

e jk0z)

=

yˆ 2 η0

E0 cos k0z.

(1.120a) (1.120b)

1.7 Plane Wave Reﬂection from a Media Interface 33

Observe that at z = 0, E¯ = 0 and H¯ = yˆ(2/η0)E0. The Poynting vector for z < 0 is

S¯ −

=

E¯

×

H¯ ∗

=

−zˆ

j

4 η0

| E 0 |2

sin k0z

cos

k0z,

(1.121)

which has a zero real part and thus indicates that no real power is delivered to the perfect conductor.
The volume current density of (1.118) for the lossy conductor reduces to an inﬁnitely thin sheet of surface current in the limit of inﬁnite conductivity:

J¯s = nˆ × H¯ = −zˆ ×

2 yˆ η0 E0 cos k0z

2 z=0 = xˆ η0 E0 A/m.

(1.122)

The Surface Impedance Concept

In many problems, particularly those in which the effect of attenuation or conductor loss is needed, the presence of an imperfect conductor must be taken into account. The surface impedance concept allows us to do this in an approximate, but very convenient and accurate, manner. We will develop this method from the theory presented in the previous sections.
Consider a good conductor in the region z > 0. As we have seen, a plane wave normally incident on this conductor is mostly reﬂected, and the power that is transmitted into the conductor is dissipated as heat within a very short distance from the surface. There are three ways to compute this power.
First, we can use Joule’s law, as in (1.119). For a 1 m2 area of conductor surface, the power transmitted through this surface and dissipated as heat is given by (1.119). Using (1.105b) for T , (1.114) for η, and the fact that α = 1/δs gives the following result:

σ |T |2 α

=

σ δs 4|η|2 |η + η0|2

σ

8 δs η02

,

(1.123)

where we have assumed η η0, which is true for a good conductor. Then the power of (1.119) can be written as

where

Pt

=

σ |E0|2|T |2 4α

=

2 |E0|2 σ δs η02

=

2|

E0|2 η02

Rs

,

(1.124)

Rs = Re{η} = Re

1+ j σ δs

1 = σ δs =

ωµ 2σ

(1.125)

is the surface resistance of the metal. Another way to ﬁnd the power loss is to compute the power ﬂow into the conductor
using the Poynting vector since all power entering the conductor at z = 0 is dissipated. As in (1.115b), we have

Pt

=

1 Re

S¯+ · zˆ

2

z=0

=

2|E0|2Re {η} |η + η0|2

,

which for large conductivity becomes, since η η0,

Pt

=

2| E 0 |2 η02

Rs

,

(1.126)

which agrees with (1.124).

34 Chapter 1: Electromagnetic Theory

A third method uses an effective surface current density and the surface impedance, without the need for knowing the ﬁelds inside the conductor. From (1.118), the volume current density in the conductor is

J¯t = xˆσ TE0e−γ z A/m2,

(1.127)

so the total (surface) current ﬂow per unit width in the x direction is

J¯s =

∞
J¯t dz = xˆσ TE0
0

∞
e−γ z

dz

=

xˆσ TE0 A/m.

0

γ

Approximating σ T /γ for large σ and using (1.113), (1.105b), and (1.114) gives

σ T = σ δs

2η

σ δs 2(1 + j) = 2 ,

γ (1 + j ) (η + η0) (1 + j ) σ δsη0 η0

so

J¯s

xˆ

2E0 η0

A/m.

(1.128)

If the conductivity were inﬁnite, then = −1 and a true surface current density of

J¯s

=

nˆ

×

H¯ |z=0

=

−zˆ

×

( H¯ i

+

H¯r )|z=0

=

xˆ

E0

1 η0

(1

−

) = xˆ 2E0 A/m η0

would ﬂow, which is identical to the total current in (1.128). Now replace the exponentially decaying volume current of (1.127) with a uniform
volume current extending a distance of one skin depth. Thus, let

J¯t =

J¯s /δs 0

for 0 < z < δs for z > δs,

(1.129)

so that the total current ﬂow is the same. Then Joule’s law gives the power lost:

Pt = 1 2σ

S

δs z=0

| J¯s |2 δs2

dz ds

=

Rs 2

S

| J¯s |2

ds

=

2|E0|2 Rs η02

,

(1.130)

wThheerreesuSltdeonfo(t1e.s1a30su) rafgacreeeisntwegitrhaloouvrepr rtehveiocounsdruecsutoltrssuforfracPet,

in in

this case chosen as 1 (1.126) and (1.124)

m2. and

shows that the power loss in a good conductor can be accurately and simply calculated as

Pt = Rs 2

|J¯s |2 ds
S

=

Rs 2

|H¯t |2 ds,
S

(1.131)

in terms of the surface resistance Rs and the surface current J¯s, or tangential magnetic ﬁeld H¯t . It is important to realize that the surface current can be found from J¯s = nˆ × H¯ , as if the metal were a perfect conductor. This method is very general, applying to ﬁelds other
than plane waves and to conductors of arbitrary shape, as long as bends or corners have
radii on the order of a skin depth or larger. The method is also quite accurate, as the only approximation was that η η0, which is a good approximation. As an example, copper at 1 GHz has |η| = 0.012 , which is indeed much less than η0 = 377 .

EXAMPLE 1.4 PLANE WAVE REFLECTION FROM A CONDUCTOR
Consider a plane wave normally incident on a half-space of copper. If f = 1 GHz, compute the propagation constant, intrinsic impedance, and skin depth for the conductor. Also compute the reﬂection and transmission coefﬁcients.

1.8

1.8 Oblique Incidence at a Dielectric Interface 35

Solution For copper, σ = 5.813 × 107 S/m, so from (1.60) the skin depth is

δs =

2 ωµσ

= 2.088 × 10−6m,

and the propagation constant is, from (1.113),

γ

=

1+ δs

j

=

(4.789 +

j 4.789) × 105

m−1.

The intrinsic impedance is, from (1.114),

η

=

1+ j σ δs

=

(8.239 +

j 8.239) × 10−3

,

which is quite small relative to the impedance of free-space (η0 = 377 ). The reﬂection coefﬁcient is, from (1.105a),

=

η − η0 η + η0

= 1.0

179.99◦

(practically that of an ideal short circuit), and the transmission coefﬁcient is

T = 2η = 6.181 × 10−5 45◦. η + η0

■

OBLIQUE INCIDENCE AT A DIELECTRIC INTERFACE
We continue our discussion of plane waves by considering the problem of a plane wave obliquely incident on a plane interface between two lossless dielectric regions, as shown in Figure 1.13. There are two canonical cases of this problem: the electric ﬁeld is either in the x z plane (parallel polarization) or normal to the x z plane (perpendicular polarization). An arbitrary incident plane wave, of course, may have a polarization that is neither of these, but it can be expressed as a linear combina-
tion of these two individual cases.
The general method of solution is similar to the problem of normal incidence: we will write expressions for the incident, reﬂected, and transmitted ﬁelds in each region and match boundary conditions to ﬁnd the unknown amplitude coefﬁcients and angles.
x

Er, Hr

␪r

␪t Et, Ht

␪i

z

E i, Hi

⑀1, ␮1 Region 1

⑀2, ␮2 Region 2

FIGURE 1.13 Geometry for a plane wave obliquely incident at the interface between two dielectric regions.

36 Chapter 1: Electromagnetic Theory

Parallel Polarization

In this case the electric ﬁeld vector lies in the x z plane, and the incident ﬁelds can be written as

E¯i = E0(xˆ cos θi − zˆ sin θi )e− jk1(x sin θi +z cos θi ),

(1.132a)

H¯i

=

E0 yˆe− jk1(x sin θi +z cos θi ), η1

(1.132b)

where

k1

=

ω√µ0

1

and

η1

=

√ µ0/

1

are

the

propagation

constant

and

impedance

of

region 1. The reﬂected and transmitted ﬁelds can be written as

E¯r = E0 (xˆ cos θr + zˆ sin θr )e− jk1(x sin θr −z cos θr ),

H¯r

=

−E0 η1

yˆe− jk1(x sin θr −z cos θr ),

E¯t = E0T (xˆ cos θt − zˆ sin θt )e− jk2(x sin θt +z cos θt ),

H¯t

=

E0T yˆe− jk2(x sin θt +z cos θt ). η2

(1.133a) (1.133b) (1.134a) (1.134b)

Here, and T are the reﬂection and transmission coefﬁcients, and k2 and η2 are the propagation constant and impedance of region 2, deﬁned as
k2 = ω√µ0 2, η2 = µ0/ 2.

At this point we have , T, θr , and θt as unknowns. We can obtain two complex equations for these unknowns by enforcing the continuity
of Ex and Hy, the tangential ﬁeld components, at the interface between the two regions at z = 0. We then obtain

cos θi e− jk1x sin θi + cos θr e− jk1x sin θr = T cos θt e− jk2x sin θt ,

1 e− jk1x sin θi − e− jk1x sin θr = T e− jk2x sin θt .

η1

η1

η2

(1.135a) (1.135b)

Both sides of (1.135a) and (1.135b) are functions of the coordinate x. If Ex and Hy are to be continuous at the interface z = 0 for all x, then this x variation must be the same on
both sides of the equations, leading to the following condition:

k1 sin θi = k1 sin θr = k2 sin θt .

This results in the well-known Snell’s laws of reﬂection and refraction:

θi = θr , k1 sin θi = k2 sin θt .

(1.136a) (1.136b)

The above argument ensures that the phase terms in (1.135) vary with x at the same rate on both sides of the interface, and so is often called the phase matching condition.
Using (1.136) in (1.135) allows us to solve for the reﬂection and transmission coefﬁcients as

=

η2 cos θt η2 cos θt

− +

η1 η1

cos cos

θi θi

,

(1.137a)

T=

2η2 cos θi

.

η2 cos θt + η1 cos θi

(1.137b)

1.8 Oblique Incidence at a Dielectric Interface 37

Observe that for normal incidence θi = 0, we have θr = θt = 0, so then

=

η2 η2

− η1 + η1

and

T

=

2η2 η2 + η1

,

which is in agreement with the results of Section 1.7.
For this polarization a special angle of incidence, θb, called the Brewster angle, exists where = 0. This occurs when the numerator of (1.137a) goes to zero (θi = θb): η2 cos θt = η1 cos θb, which can be rewritten using

to give

cos θt =

1 − sin2 θt =

1

−

k12 k22

sin2

θb ,

1

sin θb

=

√ 1

+

. 1/ 2

(1.138)

Perpendicular Polarization

In this case the electric ﬁeld vector is perpendicular to the x z plane. The incident ﬁeld can be written as

E¯i = E0 yˆe− jk1(x sin θi +z cos θi ),

(1.139a)

H¯i

=

E0 η1

(−xˆ

cos θi

+

zˆ

sin θi )e− jk1(x

sin θi +z

cos θi ),

(1.139b)

where

k1

= ω√µ0

1

and

η1

√ = µ0/

1

are

the

propagation

constant

and

impedance

for

region 1, as before. The reﬂected and transmitted ﬁelds can be expressed as

E¯r = E0 yˆe− jk1(x sin θr −z cos θr ),

(1.140a)

H¯r =

E0 η1

(xˆ cos θr + zˆ sin θr )e− jk1(x sin θr −z cos θr ),

(1.140b)

E¯t = E0T yˆe− jk2(x sin θt +z cos θt ),

(1.141a)

H¯t

=

E0T η2

(−xˆ

cos

θt

+ zˆ sin θt )e− jk2(x sin θt +z cos θt ),

(1.141b)

with

k2

= ω√µ0

2

and

η2

√ = µ0/

2

being

the

propagation

constant

and

impedance

in

region 2.

Equating the tangential ﬁeld components Ey and Hx at z = 0 gives

e− jk1x sin θi + e− jk1x sin θr = T e− jk2x sin θt ,

−1 η1

cos θi e− jk1x sin θi

+

η1

cos θr e− jk2x sin θr

=

−T η2

cos θt e− jk2x sin θt .

(1.142a) (1.142b)

By the same phase matching argument that was used in the parallel case, we obtain Snell’s laws

k1 sin θi = k1 sin θr = k2 sin θt

identical to (1.136).

38 Chapter 1: Electromagnetic Theory

Using (1.136) in (1.142) allows us to solve for the reﬂection and transmission coefﬁcients as

= η2 cos θi − η1 cos θt , η2 cos θi + η1 cos θt

T=

2η2 cos θi

.

η2 cos θi + η1 cos θt

(1.143a) (1.143b)

Again, for the normally incident case, these results reduce to those of Section 1.7. For this polarization no Brewster angle exists where = 0, as we can see by examin-
ing the possibility that the numerator of (1.143a) could be zero:

η2 cos θi = η1 cos θt ,

and using Snell’s law to give

k22 η22 − η12 = k22η22 − k12η12 sin2 θi.
This leads to a contradiction since the term in parentheses on the right-hand side is identically zero for dielectric media. Thus, no Brewster angle exists for perpendicular polarization for dielectric media.

EXAMPLE 1.5 OBLIQUE REFLECTION FROM A DIELECTRIC INTERFACE

Plot the reﬂection coefﬁcients versus incidence angle for parallel and perpendicular polarized plane waves incident from free-space onto a dielectric region with r = 2.55.
Solution The impedances for the two regions are

η1 = 377 ,

η2

= √η0 = √377 = 236

r

2.55

.

We then evaluate (1.137a) and (1.143a) versus incidence angle; the results are

shown in Figure 1.14.

■

Total Reflectio and Surface Waves Snell’s law of (1.136b) can be rewritten as

sin θt = 1 sin θi .
2

(1.144)

Consider the case (for either parallel or perpendicular polarization) where 1 > 2. As θi increases, the refraction angle θt will increase, but at a faster rate than θi increases. The incidence angle θi for which θt = 90◦ is called the critical angle, θc, where

sin θc = 2 .
1

(1.145)

At this angle and beyond, the incident wave will be totally reﬂected, as the transmitted wave will not propagate into region 2. Let us look at this situation more closely for the case of θi > θc with parallel polarization.

1.8 Oblique Incidence at a Dielectric Interface 39
|Γ| 1.0
⑀0 ⑀r = 2.55

0.8

␪i

0.6 Perpendicular polarization
0.4

0.2

Parallel polarization

0.0 0 10 20 30 40 50 60 70 80 90 Incidence angle ␪i
FIGURE 1.14 Reﬂection coefﬁcient magnitude for parallel and perpendicular polarizations of a plane wave obliquely incident on a dielectric half-space.

When θi > θc (1.144) shows that sin θt > 1, so that cos θt = 1 − sin2 θt must be imaginary, and the angle θt loses its physical signiﬁcance. At this point, it is better to replace the expressions for the transmitted ﬁelds in region 2 with the following:

E¯t = E0T

− j α xˆ − β zˆ e− jβx e−αz,

k2

k2

H¯t

=

E0T η2

yˆe− jβx e−αz .

(1.146a) (1.146b)

The form of these ﬁelds is derived from (1.134) after noting that − jk2 sin θt is still imaginary for sin θt > 1 but − jk2 cos θt is real, so we can replace sin θt by β/k2 and cos θt by − jα/k2. Substituting (1.146b) into the Helmholtz wave equation for H¯ gives

−β2 + α2 + k22 = 0.

(1.147)

Matching Ex and Hy of (1.146) with the xˆ and yˆ components of the incident and reﬂected ﬁelds of (1.132) and (1.133) at z = 0 gives

cos θi e− jk1x sin θi +

cos θr e− jk1x sin θr

=

− jα T e− jβx , k2

1 e− jk1x sin θi − e− jk1x sin θr = T e− jβx .

η1

η1

η2

(1.148a) (1.148b)

To obtain phase matching at the z = 0 boundary, we must have

k1 sin θi = k1 sin θr = β,

40 Chapter 1: Electromagnetic Theory

which leads again to Snell’s law for reﬂection, θi = θr , and to β = k1 sin θi . Then α is determined from (1.147) as

α = β2 − k22 = k12 sin2 θi − k22,

(1.149)

which is seen to be a positive real number since sin2 θi > 2/ 1. The reﬂection and transmission coefﬁcients can be obtained from (1.148) as

= (− j α/k2)η2 − η1 cos θi , (− j α/k2)η2 + η1 cos θi

T

=

2η2 cos θi (− j α/k2)η2 + η1 cos θi

.

(1.150a) (1.150b)

Since is of the form ( ja − b)/( ja + b), its magnitude is unity, indicating that all incident power is reﬂected.
The transmitted ﬁelds of (1.146) show propagation in the x direction, along the interface, but exponential decay in the z direction. Such a ﬁeld is known as a surface wave3 since it is tightly bound to the interface. A surface wave is an example of a nonuniform plane wave, so called because it has an amplitude variation in the z direction, apart from the propagation factor in the x direction.
Finally, it is of interest to calculate the complex Poynting vector for the surface wave ﬁelds of (1.146):

S¯t

=

E¯ t

×

H¯t∗

=

|E0|2|T |2 η2

zˆ − j α + xˆ β e−2αz.

k2

k2

(1.151)

This shows that no real power ﬂow occurs in the z direction. The real power ﬂow in the x direction is that of the surface wave ﬁeld, and it decays exponentially with distance into region 2. So even though no real power is transmitted into region 2, a nonzero ﬁeld does exist there, in order to satisfy the boundary conditions at the interface.

1.9

SOME USEFUL THEOREMS Finally, we discuss several theorems in electromagnetics that we will ﬁnd useful for later discussions.
The Reciprocity Theorem Reciprocity is a general concept that occurs in many areas of physics and engineering, and the reader may already be familiar with the reciprocity theorem of circuit theory. Here we will derive the Lorentz reciprocity theorem for electromagnetic ﬁelds in two different forms. This theorem will be used later in the book to obtain general properties of network matrices representing microwave circuits and to evaluate the coupling of waveguides from current probes and loops, as -
well as the coupling of waveguides through apertures. There are a number of other important uses of this powerful concept.
3 Some authors argue that the term “surface wave” should not be used for a ﬁeld of this type since it exists only when plane wave ﬁelds exist in the z < 0 region, and so prefer the term “surface wave–like” ﬁeld, or a “forced surface wave.”

1.9 Some Useful Theorems 41

FIGURE 1.15 Geometry for the Lorentz reciprocity theorem.

Consider the two separate sets of sources, J¯1, M¯ 1 and J¯2, M¯ 2, which generate the ﬁelds E¯1, H¯1, and E¯2, H¯2, respectively, in the volume V enclosed by the closed surface S, as shown in Figure 1.15. Maxwell’s equations are satisﬁed individually for these two sets of sources and ﬁelds, so we can write

∇ × E¯1 = − j ωµH¯1 − M¯ 1, ∇ × H¯1 = j ω E¯1 + J¯1, ∇ × E¯2 = − j ωµH¯2 − M¯ 2, ∇ × H¯2 = j ω E¯2 + J¯2.

(1.152a) (1.152b) (1.153a) (1.153b)

Now consider the quantity ∇ · (E¯1 × H¯2 − E¯2 × H¯1), which can be expanded using vector identity (B.8) to give

∇ · (E¯1 × H¯2 − E¯2 × H¯1) = J¯1 · E¯2 − J¯2 · E¯1 + M¯ 2 · H¯1 − M¯ 1 · H¯2.

(1.154)

Integrating over the volume V and applying the divergence theorem (B.15), gives

∇ · (E¯1 × H¯2 − E¯2 × H¯1) dv = (E¯1 × H¯2 − E¯2 × H¯1) · ds

V

S

(1.155)

= (E¯2 · J¯1 − E¯1 · J¯2 + H¯1 · M¯ 2 − H¯2 · M¯ 1) dv
V

Equation (1.155) represents a general form of the reciprocity theorem, but in practice a number of special situations often occur leading to some simpliﬁcation. We will consider three cases.

S encloses no sources: Then J¯1 = J¯2 = M¯ 1 = M¯ 2 = 0, and the ﬁelds E¯1, H¯1 and E¯2, H¯2 are source-free ﬁelds. In this case, the right-hand side of (1.155) vanishes, with the result that

E¯1 × H¯2 · ds¯ = E¯2 × H¯1 · ds¯.

S

S

(1.156)

This result will be used in Chapter 4 when we demonstrate the symmetry of the impedance matrix for a reciprocal microwave network.

S bounds a perfect conductor: For example, S may be the inner surface of a perfectly conducting closed cavity. Then the surface integral of (1.155) vanishes since E¯1 × H¯2 · nˆ = (nˆ × E¯1) · H¯2 [by vector identity (B.3)], and nˆ × E¯1 is zero on the surface of a perfect

42 Chapter 1: Electromagnetic Theory

conductor (similarly for E¯2). The result is

(E¯1 · J¯2 − H¯1 · M¯ 2) dv = (E¯2 · J¯1 − H¯2 · M¯ 1) dv.

V

V

(1.157)

This result is analogous to the reciprocity theorem of circuit theory. In words, this result states that the system response E¯1 or E¯2 is not changed when the source and observation points are interchanged. That is, E¯2 (caused by J¯2) at J¯1 is the same as E¯1 (caused by J¯1) at J¯2.

S is a sphere at inﬁnity: In this case the ﬁelds evaluated on S are very far from the sources and so can be considered locally as plane waves. Then the wave impedance relation H¯ = nˆ × E¯ /η applies to (1.155) to give

(E¯1 × H¯2 − E¯2 × H¯1) · nˆ = (nˆ × E¯1) · H¯2 − (nˆ × E¯2) · H¯1

=

1 η

H¯1

·

H¯2

−

1 η

H¯2

·

H¯1

=

0,

so that the result of (1.157) is again obtained. This result can also be obtained for the case of a closed surface S where the surface impedance boundary condition applies.

Image Theory
In many problems a current source (electric or magnetic) is located in the vicinity of a conducting ground plane. Image theory permits the removal of the ground plane by placing a virtual image source on the other side of the ground plane. The reader should be familiar with this concept from electrostatics, so we will prove the result for an inﬁnite current sheet next to an inﬁnite ground plane and then summarize other possible cases.
Consider the surface current density J¯s = Js0xˆ parallel to a ground plane, as shown in Figure 1.16a. Because the current source is of inﬁnite extent and is uniform in the x, y directions, it will excite plane waves traveling outward from it. The negatively traveling

FIGURE 1.16 Illustration of image theory as applied to an electric current source next to a ground plane. (a) An electric surface current density parallel to a ground plane. (b) The ground plane of (a) is replaced with image current at z = −d.

1.9 Some Useful Theorems 43

wave will reﬂect from the ground plane at z = 0 and then travel in the positive direction. Thus, there will be a standing wave ﬁeld in the region 0 < z < d and a positively traveling wave for z > d. The forms of the ﬁelds in these two regions can thus be written as

E

s x

=

A(e jk0z

− e− jk0z ),

for 0 < z < d,

(1.158a)

Hys

=

− A (e jk0z η0

+ e− jk0z ),

for 0 < z < d,

(1.158b)

Ex+ = Be− jk0z ,

for z > d,

(1.159a)

Hy+

=

B e− jk0z, η0

for z > d,

(1.159b)

where η0 is the impedance of free-space. Note that the standing wave ﬁelds of (1.158) have been constructed to satisfy the boundary condition that Ex = 0 at z = 0. The remaining boundary conditions to satisfy are the continuity of E¯ at z = d and the discontinuity in the H¯ ﬁeld at z = d due to the current sheet. From (1.36), since M¯ s = 0,

Exs = Ex+|z=d ,

(1.160a)

while from (1.37) we have

J¯s = zˆ × yˆ(Hy+ − Hys )|z=d .

(1.160b)

Using (1.158) and (1.159) then gives

2 j A sin k0d = Be− jk0d

and

Js0

=

−

B η0

e− jk0d

−

2A η0

cos

k0d,

which can be solved for A and B: A = − Js0η0 e− jk0d , 2

B = − j Js0η0 sin k0d.

So the total ﬁelds are

Exs = − j Js0η0e− jk0d sin k0z, Hys = Js0e− jk0d cos k0z,

E

+ x

=

−

j

Js0η0

sin

k0de− jk0z,

Hy+ = − j Js0 sin k0de− jk0z,

for 0 < z < d, for 0 < z < d, for z > d, for z > d.

(1.161a) (1.161b) (1.162a) (1.162b)

Now consider the application of image theory to this problem. As shown in Figure 1.16b, the ground plane is removed and an image source of −J¯s is placed at z = −d. By superposition, the total ﬁelds for z > 0 can be found by combining the ﬁelds from the two
sources individually. These ﬁelds can be derived by a procedure similar to that in the above,
with the following results:

Fields due to source at z = d:

Ex

=

⎧ ⎪⎪⎨ ⎪⎪⎩

− Js0η0 e− jk0(z−d) 2
− Js0η0 e jk0(z−d)

2

for z > d for z < d,

(1.163a)

44 Chapter 1: Electromagnetic Theory

⎧

Hy

=

⎪⎪⎨ ⎪⎪⎩

− Js0 e− jk0(z−d) 2
Js0 e jk0(z−d)

2

for z > d for z < d.

(1.163b)

Fields due to source at z = −d:

⎧

Ex

=

⎪⎪⎨ ⎪⎪⎩

Js0η0 e− jk0(z+d) 2
Js0η0 e jk0(z+d)

2

⎧

Hy

=

⎪⎪⎨ ⎪⎪⎩

Js0 e− jk0(z+d) 2 − Js0 e jk0(z+d)

2

for z > −d for z < −d,
for z > −d for z < −d.

(1.164a) (1.164b)

The reader can verify that this solution is identical to that of (1.161) for 0 < z < d and to that of (1.162) for z > d, thus verifying the validity of the image theory solution. Note that image theory only gives the correct ﬁelds to the right of the conducting plane. Figure 1.17 shows more general image theory results for electric and magnetic dipoles.

Original Geometry

Image Equivalent

≡

(a)

≡ (b)

≡ (c)

≡
(d) FIGURE 1.17 Electric and magnetic current images. (a) An electric current parallel to a ground
plane. (b) An electric current normal to a ground plane. (c) A magnetic current parallel to a ground plane. (d) A magnetic current normal to a ground plane.

Problems 45

REFERENCES

[1] T. S. Sarkar, R. J. Mailloux, A. A. Oliner, M. Salazar-Palma, and D. Sengupta, History of Wireless, John Wiley & Sons, Hoboken, N.J., 2006.
[2] A. A. Oliner, “Historical Perspectives on Microwave Field Theory,” IEEE Transactions on Microwave Theory and Techniques, vol. MTT-32, pp. 1022–1045, September 1984 [this special issue contains other articles on the history of microwave engineering].
[3] F. Ulaby, Fundamentals of Applied Electromagnetics, 6th edition, Prentice-Hall, Upper Saddle River, N.J., 2010.
[4] J. D. Kraus and D. A. Fleisch, Electromagnetics, 5th edition, McGraw-Hill, New York, 1999. [5] S. Ramo, T. R. Whinnery, and T. van Duzer, Fields and Waves in Communication Electronics, 3rd
edition, John Wiley & Sons, New York, 1994. [6] R. E. Collin, Foundations for Microwave Engineering, 2nd edition, Wiley-IEEE Press, Hoboken,
N.J., 2001. [7] C. A. Balanis, Advanced Engineering Electromagnetics, John Wiley & Sons, New York, 1989. [8] D. M. Pozar, Microwave and RF Design of Wireless Systems, John Wiley & Sons, Hoboken N.J.,
2001.
PROBLEMS

1.1 Who invented radio? Guglielmo Marconi often receives credit for the invention of modern radio, but there were several important developments by other workers before Marconi. Write a brief summary of the early work in wireless during the period of 1865–1900, particularly the work by Mahlon Loomis, Oliver Lodge, Nikola Tesla, and Marconi. Explain the difference between inductive communication schemes and wireless methods that involve wave propagation. Can the development of radio be attributed t-
o a single individual? Reference [1] may be a good starting point.

1.2 A plane wave traveling along the x-axis in a polystyrene-ﬁlled region with r = 2.54 has an electric ﬁeld given by Ey = E0 cos(ωt − kx). The frequency is 2.4 GHz, and E0 = 5.0 V/m. Find the following: (a) the amplitude and direction of the magnetic ﬁeld, (b) the phase velocity, (c) the wave-
length, and (d) the phase shift between the positions x1 = 0.1 m and x2 = 0.15 m. 1.3 Show that a linearly polarized plane wave of the form E¯ = E0(axˆ + byˆ)e− jk0z, where a and b are
real numbers, can be represented as the sum of an RHCP and an LHCP wave.

1.4 Compute the Poynting vector for the general plane wave ﬁeld of (1.76).

1.5

Aλ0p/l(a4n√e

wave is normally incident on a dielectric slab r ) and λ0 is the free-space wavelength of the

of permittivity incident wave,

r
as

and thickness d, where d = shown in the accompanying

ﬁgure. If free-space exists on both sides of the slab, ﬁnd the reﬂection coefﬁcient of the wave reﬂected

from the front of the slab.

1 T

Γ

⑀0

⑀r ⑀0

⑀0

d

0

d

z

1.6 Consider an RHCP plane wave normally incident from free-space (z < 0) onto a half-space (z > 0) consisting of a good conductor. Let the incident electric ﬁeld be of the form

E¯i = E0(xˆ − j yˆ)e− jk0z ,

46 Chapter 1: Electromagnetic Theory
and ﬁnd the electric and magnetic ﬁelds in the region z > 0. Compute the Poynting vectors for z < 0 and z > 0 and show that complex power is conserved. What is the polarization of the reﬂected wave?
1.7 Consider a plane wave propagating in a lossy dielectric medium for z < 0, with a perfectly conducting plate at z = 0. Assume that the lossy medium is characterized by = (5 − j2) 0, µ = µ0, and that the frequency of the plane wave is 1.0 GHz, and let the amplitude of the incident electric ﬁeld be 4 V/m at z = 0. Find the reﬂected electric ﬁeld for z < 0 and plot the magnitude of the total electric ﬁeld for −0.5 ≤ z ≤ 0.
1.8 A plane wave at 1 GHz is normally incident on a thin copper sheet of thickness t. (a) Compute the transmission losses, in dB, of the wave at the air–copper and the copper–air interfaces. (b) If the sheet is to be used as a shield to reduce the level of the transmitted wave by 150 dB, what is the minimum sheet thickness?
1.9 A uniform lossy medium with r = 3.0, tan δ = 0.1, and µ = µ0 ﬁlls the region between z = 0 and z = 20 cm, with a ground plane at z = 20 cm, as shown in the accompanying ﬁgure. An incident plane wave with an electric ﬁeld
E¯i = xˆ100e−γ z V/m
is present at z = 0 and propagates in the +z direction. The frequency is 3.0 GHz.
(a) Compute Si , the power density of the incident wave, and Sr , the power density of the reﬂected wave, at z = 0.
(b) Compute the input power density, Sin, at z = 0 from the total ﬁelds at z = 0. Does Sin = Si − Sr ?

⑀r = 3.0

Ei

tan ␦ = 0.1

Er

0

l = 20 cm z

1.10 Assume that an inﬁnite sheet of electric surface current density J¯s = J0xˆ A/m is placed on the z = 0 plane between free-space for z < 0 and a dielectric with = r 0 for z > 0, as in the accompanying ﬁgure. Find the resulting E¯ and H¯ ﬁelds in the two regions. HINT: Assume plane wave solutions
propagating away from the current sheet, and match boundary conditions to ﬁnd the amplitudes, as
in Example 1.3.

x

⑀0

⑀r ⑀0

Js = xˆJ0 A/m

0

z

1.11 Redo Problem 1.10, but with an electric surface current density of J¯s = J0xˆe− jβx A/m, where β < k0.

Problems 47

1.12 A parallel polarized plane wave is obliquely incident from free-space onto a magnetic material with permittivity 0 and permeability µ0µr . Find the reﬂection and transmission coefﬁcients. Does a Brewster angle exist for this case where the reﬂection coefﬁcient vanishes for a particular angle of incidence?
1.13 Repeat Problem 1.12 for the perpendicularly polarized case.
1.14 An artiﬁcial anisotropic dielectric material has the tensor permittivity [ ] given as follows:

1 3j 0 [ ] = 0 −3 j 2 0
0 04

At a certain point in the material the electric ﬁeld is known to be E¯ = 3xˆ − 2yˆ + 5zˆ. What is D¯ at this point?
1.15 The permittivity tensor for a gyrotropic dielectric material is
r jκ 0 [ ] = 0 −jκ r 0 .
0 01
Show that the transformations

E+ = Ex − j Ey, E− = Ex + j Ey,

D+ = Dx − j Dy , D− = Dx + j Dy ,

allow the relation between E¯ and D¯ to be written as

D+

E+

D− = [ ] E− ,

Dz

Ez

where [ ] is now a diagonal matrix. What are the elements of [ ]? Using this result, derive wave equations for E+ and E− and ﬁnd the resulting propagation constants.
1.16 Show that the reciprocity theorem expressed in (1.157) also applies to a region enclosed by a closed
surface S, where a surface impedance boundary condition applies.
1.17 Consider an electric surface current density of J¯s = yˆ J0e−βx A/m located on the z = d plane. If a perfectly conducting ground plane is located at z = 0, use image theory to ﬁnd the total ﬁelds for z > 0.
1.18 Let E¯ = Eρ ρˆ + Eφφˆ + Ez zˆ be an electric ﬁeld vector in cylindrical coordinates. Demonstrate that it is incorrect to interpret the expression ∇2 E¯ in cylindrical coordinates as ρˆ∇2 Eρ + φˆ∇2 Eφ + zˆ∇2 Ez by evaluating both sides of the vector identity ∇ × ∇ × E¯ = ∇(∇ · E¯ ) − ∇2 E¯ for the given electric ﬁeld.

Chapter

Two

Transmission Line Theory

Transmission line theory bridges the gap between ﬁeld analysis and basic circuit theory and therefore is of signiﬁcant importance in the analysis of microwave circuits and devices. As we will see, the phenomenon of wave propagation on transmission lines can be approached from an extension of circuit theory or from a specialization of Maxwell’s equations; we shall present both viewpoints and show how this wave propagation is described by equations very similar to those used in Chapter 1 for plane w-
ave propagation.

2.1

THE LUMPED-ELEMENT CIRCUIT MODEL FOR A TRANSMISSION LINE
The key difference between circuit theory and transmission line theory is electrical size. Circuit analysis assumes that the physical dimensions of the network are much smaller than the electrical wavelength, while transmission lines may be a considerable fraction of a wavelength, or many wavelengths, in size. Thus a transmission line is a distributedparameter network, where voltages and currents can vary in magnitude and phase over its length, while ordinary circuit analysis deals with lumped ele-
ments, where voltage and current do not vary appreciably over the physical dimension of the elements.
As shown in Figure 2.1a, a transmission line is often schematically represented as a two-wire line since transmission lines (for transverse electromagnetic [TEM] wave propagation) always have at least two conductors. The piece of line of inﬁnitesimal length z of Figure 2.1a can be modeled as a lumped-element circuit, as shown in Figure 2.1b, where R, L, G, and C are per-unit-length quantities deﬁned as follows:
R = series resistance per unit length, for both conductors, in /m. L = series inductance per unit length, for both conductors, in H/m. G = shunt conductance per unit length, in S/m. C = shunt capacitance per unit length, in F/m.
48

2.1 The Lumped-Element Circuit Model for a Transmission Line 49

i (z , t) + v (z , t) –
i (z , t)

∆z (a)

z i (z +∆ z, t)

+

R∆ z

v (z , t)

–

L∆z G∆ z
∆z (b)

+ C∆ z v (z + ∆z, t)
–

FIGURE 2.1 Voltage and current deﬁnitions and equivalent circuit for an incremental length of transmission line. (a) Voltage and current deﬁnitions. (b) Lumped-element equivalent circuit.

The series inductance L represents the total self-inductance of the two conductors, and the shunt capacitance C is due to the close proximity of the two conductors. The series resistance R represents the resistance due to the ﬁnite conductivity of the individual conductors, and the shunt conductance G is due to dielectric loss in the material between the conductors. R and G, therefore, represent loss. A ﬁnite length of transmission line can be viewed as a cascade of sections of the form shown in F-
igure 2.1b.
From the circuit of Figure 2.1b, Kirchhoff’s voltage law can be applied to give

v(z, t) − R

zi(z, t) − L

z

∂ i (z, ∂t

t)

−

v(z

+

z, t) = 0,

(2.1a)

and Kirchhoff’s current law leads to i(z, t) − G zv(z + z, t) − C

∂v(z +

z

∂t

z, t) − i(z +

z, t) = 0.

(2.1b)

Dividing (2.1a) and (2.1b) by z and taking the limit as z → 0 gives the following differential equations:

∂v(z, t) = −Ri(z, t) − L ∂i(z, t) ,

∂z

∂t

∂i(z, t) ∂z

=

−Gv(z,

t)

−

C

∂v(z, ∂t

t

)

.

(2.2a) (2.2b)

These are the time domain form of the transmission line equations, also known as the telegrapher equations.
For the sinusoidal steady-state condition, with cosine-based phasors, (2.2a) and (2.2b) simplify to

d V (z) = −(R + jωL)I (z), dz
d I (z) = −(G + jωC)V (z). dz

(2.3a) (2.3b)

50 Chapter 2: Transmission Line Theory
Note the similarity in the form of (2.3a) and (2.3b) and Maxwell’s curl equations of (1.41a) and (1.41b).

Wave Propagation on a Transmission Line

The two equations (2.3a) and (2.3b) can be solved simultaneously to give wave equations for V (z) and I (z):

where

d2V (z) dz2

−

γ

2V

(z)

=

0,

d2 I (z) dz2

−

γ

2I

(z)

=

0,

(2.4a) (2.4b)

γ = α + jβ = (R + jωL)(G + jωC)

(2.5)

is the complex propagation constant, which is a function of frequency. Traveling wave solutions to (2.4) can be found as

V (z) = Vo+e−γ z + Vo−eγ z, I (z) = Io+e−γ z + Io−eγ z,

(2.6a) (2.6b)

where the e−γ z term represents wave propagation in the +z direction, and the eγ z term represents wave propagation in the −z direction. Applying (2.3a) to the voltage of (2.6a) gives the current on the line:

I (z) =

γ R + jωL

Vo+e−γ z − Vo−eγ z

.

Comparison with (2.6b) shows that a characteristic impedance, Z0, can be deﬁned as

Z0

=

R + jωL γ

=

R G

+ +

jωL j ωC

,

(2.7)

to relate the voltage and current on the line as follows:

Vo+ Io+

=

Z0

=

−Vo− Io−

.

Then (2.6b) can be rewritten in the following form:

I (z) = Vo+ e−γ z − Vo− eγ z.

Z0

Z0

(2.8)

Converting back to the time domain, we can express the voltage waveform as

v(z, t) = |Vo+| cos(ωt − βz + φ+)e−αz

+ |Vo−| cos(ωt + βz + φ−)eαz,

(2.9)

where φ± is the phase angle of the complex voltage Vo±. Using arguments similar to those in Section 1.4, we ﬁnd that the wavelength on the line is

λ

=

2π β

,

(2.10)

2.2

2.2 Field Analysis of Transmission Lines 51

and the phase velocity is

vp

=

ω β

=

λf.

(2.11)

The Lossless Line
The above solution is for a general transmission line, including loss effects, and it was seen that the propagation constant and characteristic impedance were complex. In many practical cases, however, the loss of the line is very small and so can be neglected, resulting in a simpliﬁcation of the results. Setting R = G = 0 in (2.5) gives the propagation constant as
√ γ = α + jβ = jω LC,

or

√ β = ω LC,

(2.12a)

α = 0.

(2.12b)

As expected for a lossless line, the attenuation constant α is zero. The characteristic impedance of (2.7) reduces to

L

Z0 =

, C

(2.13)

which is now a real number. The general solutions for voltage and current on a lossless transmission line can then be written as

V (z) = Vo+e− jβz + Vo−e jβz,

I (z) = Vo+ e− jβz − Vo− e jβz.

Z0

Z0

(2.14a) (2.14b)

The wavelength is

λ

=

2π β

=

√2π , ω LC

(2.15)

and the phase velocity is

vp

=

ω β

=

1 √
LC

.

(2.16)

FIELD ANALYSIS OF TRANSMISSION LINES
In this section we will rederive the time-harmonic form of the telegrapher’s equations starting from Maxwell’s equations. We will begin by deriving the transmission line parameters (R, L , G, C) in terms of the electric and magnetic ﬁelds of the transmission line and then derive the telegrapher equations using these parameters for the speciﬁc case of a coaxial line.
Transmission Line Parameters Consider a 1 m length of a uniform transmission line with ﬁelds E¯ and H¯ , as shown in Figure 2.2, where S is the cross-sectional surface area of the line. Let the voltage between the conductors be Voe± jβz and the current be Ioe± jβz. The time-average stored magnetic

52 Chapter 2: Transmission Line Theory

FIGURE 2.2 Field lines on an arbitrary TEM transmission line.

energy for this 1 m length of line can be written, from (1.86), as

Wm

=

µ 4

H¯ · H¯ ∗ds,
S

while circuit theory gives Wm = L|Io|2/4 in terms of the current on the line. We can thus identify the self-inductance per unit length as

µ L = |Io|2

H¯ · H¯ ∗ds H/m.
S

(2.17)

Similarly, the time-average stored electric energy per unit length can be found from (1.84) as

We = 4

E¯ · E¯ ∗ds,
S

while circuit theory gives We = C|Vo|2/4, resulting in the following expression for the capacitance per unit length:

C = |Vo|2

E¯ · E¯ ∗ds F/m.
S

(2.18)

From (1.131), the power loss per unit length due to the ﬁnite conductivity of the metallic conductors is

Pc

=

Rs 2

H¯ · H¯ ∗d
C1 +C2

(assuming H¯ is tangential to S), while circuit theory gives Pc = R|Io|2/2, so the series resistance R per unit length of line is

R

=

Rs | Io |2

H¯ · H¯ ∗dl
C1 +C2

/m.

(2.19)

In (2.19), Rs = 1/σ δs is the surface resistance of the conductors, and C1 + C2 represent integration paths over the conductor boundaries. From (1.92), the time-average power dissipated per unit length in a lossy dielectric is

ω Pd = 2

E¯ · E¯ ∗ds,
S

where is the imaginary part of the complex permittivity = − j = (1 − j tan δ). Circuit theory gives Pd = G|Vo|2/2, so the shunt conductance per unit length can be
written as

G

=

ω |Vo|2

E¯ · E¯ ∗ds S/m.
S

(2.20)

2.2 Field Analysis of Transmission Lines 53 y

␮, ⑀

␳

␾

a

x

Rs b

FIGURE 2.3 Geometry of a coaxial line with surface resistance Rs on the inner and outer conductors.

EXAMPLE 2.1 TRANSMISSION LINE PARAMETERS OF A COAXIAL LINE

The ﬁelds of a traveling TEM wave inside the coaxial line of Figure 2.3 can be expressed as

E¯ = Voρˆ e−γ z, ρ ln b/a
H¯ = Ioφˆ e−γ z, 2πρ

where γ is the propagation constant of the line. The conductors are assumed to
have a surface resistivity Rs, and the material ﬁlling the space between the conductors is assumed to have a complex permittivity = − j and a permeability µ = µ0µr . Determine the transmission line parameters.

Solution

From (2.17)–(2.20) and the given ﬁelds the parameters of the coaxial line can be

calculated as

µ

2π b 1

µ

L = (2π )2 φ=0 ρ=a ρ2 ρdρdφ = 2π ln b/a H/m,

2π b 1

2π

C = (ln b/a)2 φ=0 ρ=a ρ2 ρdρdφ = ln b/a F/m,

R

=

Rs (2π )2

2π φ=0

1 a2

ad

φ

+

2π φ=0

1 b2

bdφ

= Rs 2π

1+1 ab

/m,

ω

2π b 1

2π ω

G = (ln b/a)2 φ=0 ρ=a ρ2 ρdρdφ = ln b/a S/m.

■

Table 2.1 summarizes the parameters for coaxial, two-wire, and parallel plate lines. As we will see in the next chapter, the propagation constant, characteristic impedance, and attenuation of most transmission lines are usually derived directly from a ﬁeld theory solution; the approach here of ﬁrst ﬁnding the equivalent circuit parameters (L , C, R, G) is useful only for relatively simple lines. Nevertheless, it provides a helpful intuitive concept for understanding the properties of a transmissio-
n line and relates a transmission line to its equivalent circuit model.

54 Chapter 2: Transmission Line Theory TABLE 2.1 Transmission Line Parameters for Some Common Lines

COAX
a b

TWO-WIRE a
D a

PARALLEL PLATE w
d

µb

L

2π ln a

2π C
ln b/a

R

Rs 2π

1+1 ab

2π ω G
ln b/a

µ cosh−1 D

π

2a

π cosh−1 ( D /2a )

Rs πa

πω cosh−1 (D/2a)

µd w w d
2 Rs w ωw d

The Telegrapher Equations Derived from Field Analysis of a Coaxial Line

We now show that the telegrapher equations of (2.3), derived using circuit theory, can also be obtained from Maxwell’s equations. We will consider the speciﬁc geometry of the coaxial line of Figure 2.3. Although we will treat TEM wave propagation more generally in the next chapter, the present discussion should provide some insight into the relationship of circuit and ﬁeld quantities.
A TEM wave on the coaxial line of Figure 2.3 will be characterized by Ez = Hz = 0 ; furthermore, due to azimuthal symmetry, the ﬁelds will have no φ variation, so ∂/∂φ = 0. The ﬁelds inside the coaxial line will satisfy Maxwell’s curl equations,

∇ × E¯ = − jωµH¯ , ∇ × H¯ = jω E¯ ,

(2.21a) (2.21b)

where = − j may be complex to allow for a lossy dielectric ﬁlling. Conductor loss will be ignored here. A rigorous ﬁeld analysis of conductor loss can be carried out but at this point would tend to obscure our purpose; the interested reader is referred to references [1] and [2].
Expanding (2.21a) and (2.21b) gives the following two vector equations:

−ρˆ

∂ Eφ ∂z

+

φˆ

∂ Eρ ∂z

+

zˆ

1 ρ

∂ ∂ρ (ρ Eφ)

=

− j ωµ(ρˆ Hρ

+ φˆ Hφ),

−ρˆ ∂ Hφ ∂z

+ φˆ ∂ Hρ ∂z

+

zˆ

1 ρ

∂ ∂ρ

(ρ

Hφ

)

=

jω

(ρˆ Eρ

+ φˆ Eφ).

(2.22a) (2.22b)

Since the zˆ components of these two equations must vanish, it is seen that Eφ and Hφ must have the forms

Eφ =

f

(z) ρ

,

(2.23a)

g(z) Hφ = ρ .

(2.23b)

2.2 Field Analysis of Transmission Lines 55

To satisfy the boundary condition that Eφ = 0 at ρ = a, b, we must have Eφ = 0 everywhere, due to the form of Eφ in (2.23a). Then from the ρˆ component of (2.22a), it is seen that Hρ = 0. With these results, (2.22) can be reduced to

∂ Eρ ∂z

= − j ωµHφ,

∂ Hφ ∂z

= −jω

Eρ.

From the form of Hφ in (2.23b) and (2.24a), Eρ must be of the form

(2.24a) (2.24b)

Eρ

=

h(z) ρ

.

(2.25)

Using (2.23b) and (2.25) in (2.24) gives

∂h(z) ∂z

=

− jωµg(z),

∂g(z) ∂z

=

−jω

h(z).

(2.26a) (2.26b)

The voltage between the two conductors can be evaluated as

b

b dρ

b

V (z) =

Eρ(ρ, z)dρ = h(z)
ρ=a

ρ=a ρ

= h(z) ln , a

(2.27a)

and the total current on the inner conductor at ρ = a can be evaluated using (2.23b) as

2π

I (z) =

Hφ(a, z)adφ = 2πg(z).

φ=0

(2.27b)

Then h(z) and g(z) can be eliminated from (2.26) by using (2.27) to give

∂V (z) ∂z

=

−

j

ωµ ln b/a 2π

I (z),

∂ I (z) ∂z

=

−

jω(

−j

)

2π ln

V (z) b/a

.

Finally, using the results for L, G, and C for a coaxial line as derived earlier, we obtain the telegrapher equations as

∂V (z) ∂z

=

− jωL I (z),

∂ I (z) ∂z

=

−(G

+

jωC)V (z).

(2.28a) (2.28b)

This result excludes R, the series resistance, since the conductors were assumed to have perfect conductivity. A similar analysis can be carried out for other simple transmission lines.

56 Chapter 2: Transmission Line Theory

Propagation Constant, Impedance, and Power Flow for the Lossless Coaxial Line

Equations (2.24a) and (2.24b) for Eρ and Hφ can be simultaneously solved to yield a wave equation for Eρ (or Hφ):

∂ 2 Eρ ∂z2

+ ω2µ

Eρ = 0,

(2.29)

from which it is seen that the propagation constant is γ 2 = −ω2µ , which, for lossless

media, reduces to

β = ω√µ

√ = ω LC,

(2.30)

where the last result is from (2.12). Observe that this propagation constant is of the same form as that for plane waves in a lossless dielectric medium. This is a general result for TEM transmission lines.
The wave impedance for the coaxial line is deﬁned as Zw = Eρ/Hφ, which can be calculated from (2.24a), assuming an e− jβz dependence, to give

Zw

=

Eρ Hφ

=

ωµ β

=

µ/ = η.

(2.31)

This wave impedance is seen to be identical to the intrinsic impedance of the medium, η, and is a general result for TEM transmission lines.
The characteristic impedance of the coaxial line is deﬁned as

Z0

=

Vo Io

=

Eρ ln b/a 2π Hφ

=

η ln b/a 2π

=

µ

ln b/a 2π

,

(2.32)

where the forms for Eρ and Hφ from Example 2.1 have been used. The characteristic impedance is geometry dependent and will be different for other transmission line conﬁgurations.
Finally, the power ﬂow (in the z direction) on the coaxial line may be computed from the Poynting vector as

P=1 2

E¯ × H¯ ∗ · ds¯ = 1

s

2

2π φ=0

b ρ=a

Vo Io∗ 2πρ2 ln b/a

ρ

dρ

d

φ

=

1 2

Vo

Io∗,

(2.33)

a result that is in clear agreement with circuit theory. This shows that the ﬂow of power in a transmission line takes place entirely via the electric and magnetic ﬁelds between the two conductors; power is not transmitted through the conductors themselves. As we will see later, for the case of ﬁnite conductivity, power may enter the conductors, but this power is then lost as heat and is not delivered to the load.

2.3

THE TERMINATED LOSSLESS TRANSMISSION LINE
Figure 2.4 shows a lossless transmission line terminated in an arbitrary load impedance Z L . This problem will illustrate wave reﬂection on transmission lines, a fundamental property of distributed systems.
Assume that an incident wave of the form Vo+e− jβz is generated from a source at z < 0. We have seen that the ratio of voltage to current for such a traveling wave is Z0, the characteristic impedance of the line. However, when the line is terminated in an arbitrary load Z L = Z0, the ratio of voltage to current at the load must be Z L . Thus, a reﬂected wave

2.3 The Terminated Lossless Transmission Line 57

V(z), I(z) Z0, ␤

IL + VL ZL –

z

l

0

FIGURE 2.4 A transmission line terminated in a load impedance Z L .

must be excited with the appropriate amplitude to satisfy this condition. The total voltage on the line can then be written as in (2.14a), as a sum of incident and reﬂected waves:

V (z) = Vo+e− jβz + Vo−e jβz.

(2.34a)

Similarly, the total current on the line is described by (2.14b):

I (z) = Vo+ e− jβz − Vo− e jβz.

Z0

Z0

(2.34b)

The total voltage and current at the load are related by the load impedance, so at z = 0 we must have

ZL

=

V (0) I (0)

=

Vo+ Vo+

+ −

Vo− Vo−

Z0.

Solving for Vo− gives

Vo−

=

ZL ZL

− +

Z0 Z0

Vo+.

The amplitude of the reﬂected voltage wave normalized to the amplitude of the incident voltage wave is deﬁned as the voltage reﬂection coefﬁcient, :

=

Vo− Vo+

=

ZL ZL

− +

Z0 . Z0

(2.35)

The total voltage and current waves on the line can then be written as

V (z) = Vo+ e− jβz + e jβz , I (z) = Vo+ e− jβz − e jβz .
Z0

(2.36a) (2.36b)

From these equations it is seen that the voltage and current on the line consist of a superposition of an incident and a reﬂected wave; such waves are called standing waves. Only when = 0 is there no reﬂected wave. To obtain = 0, the load impedance Z L must be equal to the characteristic impedance Z0 of the transmission line, as seen from (2.35). Such a load is said to be matched to the line since there is no reﬂection of the incident wave.
Now consider the time-average power ﬂow along the line at the point z:

Pavg =

1 Re
2

V (z)I (z)∗

= 1 |Vo+|2 Re 1 − 2 Z0

∗e−2 jβz +

e2 jβz − | |2 ,

where (2.36) has been used. The middle two terms in the brackets are of the form A − A∗ =

2 j Im {A} and so are purely imaginary. This simpliﬁes the result to

Pavg

=

1 |Vo+|2 2 Z0

1−|

|2 ,

(2.37)

58 Chapter 2: Transmission Line Theory

which shows that the average power ﬂow is constant at any point on the line and that the total power delivered to the load (Pavg) is equal to the incident power (|Vo+|2/2Z0) minus the reﬂected power (|Vo|2| |2/2Z0). If = 0, maximum power is delivered to the load, while no power is delivered for | | = 1. The above discussion assumes that the generator is matched, so that there is no re-reﬂection of the reﬂected wave from z < 0.
When the load is mismatched, not all of the available power from the generator is
delivered to the load. This “loss” is called return loss (RL), and is deﬁned (in dB) as

RL = −20 log | | dB,

(2.38)

so that a matched load ( = 0) has a return loss of ∞ dB (no reﬂected power), while a total reﬂection (| | = 1) has a return loss of 0 dB (all incident power is reﬂected). Note
that return loss is a nonnegative number for reﬂection from a passive network.
If the load is matched to the line, = 0 and the magnitude of the voltage on the line is |V (z)| = |Vo+|, which is a constant. Such a line is sometimes said to be ﬂat. When the load is mismatched, however, the presence of a reﬂected wave leads to standing waves, and the
magnitude of the voltage on the line is not constant. Thus, from (2.36a),

|V (z)| = |Vo+||1 + e2 jβz| = |Vo+||1 + e−2 jβ | = |Vo+||1 + | |e j (θ−2β )|,

(2.39)

where = −z is the positive distance measured from the load at z = 0, and θ is the phase of the reﬂection coefﬁcient ( = | |e jθ ). This result shows that the voltage magnitude
oscillates with position z along the line. The maximum value occurs when the phase term e j (θ−2β ) = 1 and is given by

Vmax = |Vo+|(1 + | |).

(2.40a)

The minimum value occurs when the phase term e j(θ−2β ) = −1 and is given by

Vmin = |Vo+|(1 − | |).

(2.40b)

As | | increases, the ratio of Vmax to Vmin increases, so a measure of the mismatch of a line, called the standing wave ratio (SWR), can be deﬁned as

SWR = Vmax = 1 + | | . Vmin 1 − | |

(2.41)

This quantity is also known as the voltage standing wave ratio and is sometimes identiﬁed as VSWR. From (2.41) it is seen that SWR is a real number such that 1 ≤ SWR ≤ ∞, where SWR = 1 implies a matched load.
From (2.39), it is seen that the distance between two successive voltage maxima (or minima) is = 2π/2β = π λ/2π = λ/2, while the distance between a maximum and a minimum is = π/2β = λ/4, where λ is the wavelength on the transmission line.
The reﬂection coefﬁcient of (2.35) was deﬁned as the ratio of the reﬂected to the incident voltage wave amplitudes at the load ( = 0), but this quantity can be generalized to any point along the line as follows. From (2.34a), with z = − , the ratio of the reﬂected component to the incident component is

(

)

=

Vo−e− jβ Vo+e jβ

=

(0)e−2 jβ ,

(2.42)

where (0) is the reﬂection coefﬁcient at z = 0, as given by (2.35). This result is useful when transforming the effect of a load mismatch down the line.

2.3 The Terminated Lossless Transmission Line 59

We have seen that the real power ﬂow on the line is a constant (for a lossless line) but that the voltage amplitude, at least for a mismatched line, is oscillatory with position on the line. The perceptive reader may therefore have concluded that the impedance seen looking into the line must vary with position, and this is indeed the case. At a distance = −z from the load, the input impedance seen looking toward the load is

Z in

=

V (− I (−

) )

=

Vo+ Vo+

e jβ e jβ

+ −

e− jβ e− jβ

Z0

=

1 1

+ −

e−2 jβ e−2 jβ

Z0,

(2.43)

where (2.36a,b) have been used for V (z) and I (z). A more usable form may be obtained by using (2.35) for in (2.43):

Z in

=

Z

0

( (

Z Z

L L

+ +

Z0)e jβ Z0)e jβ

+ (Z L − Z0)e− jβ − (Z L − Z0)e− jβ

=

Z0

Z L cos β Z0 cos β

+ j Z0 sin β + j Z L sin β

=

Z0

ZL Z0

+ +

j Z0 j ZL

tan tan

β β

.

(2.44)

This is an important result giving the input impedance of a length of transmission line with an arbitrary load impedance. We will refer to this result as the transmission line impedance equation; some special cases will be considered next.

Special Cases of Lossless Terminated Lines

A number of special cases of lossless terminated transmission lines will frequently appear in our work, so it is appropriate to consider the properties of such cases here.
Consider ﬁrst the transmission line circuit shown in Figure 2.5, where a line is terminated in a short circuit, Z L = 0. From (2.35) it is seen that the reﬂection coefﬁcient for a short circuit load is = −1; it then follows from (2.41) that the standing wave ratio is inﬁnite. From (2.36) the voltage and current on the line are

V (z) = Vo+ e− jβz − e jβz = −2 j Vo+ sin βz,

I (z) = Vo+ e− jβz + e jβz = 2Vo+ cos βz,

Z0

Z0

(2.45a) (2.45b)

which shows that V = 0 at the load (as expected, for a short circuit), while the current is a maximum there. From (2.44), or the ratio V (− )/I (− ), the input impedance is

Zin = j Z0 tan β ,

(2.45c)

which is seen to be purely imaginary for any length and to take on all values between
+ j∞ and − j∞. For example, when = 0 we have Zin = 0, but for = λ/4 we have Zin = ∞ (open circuit). Equation (2.45c) also shows that the impedance is periodic in ,

V(z), I(z) Z0, ␤

+ IL

VL

=

0 –

ZL = 0

–l

0

z

FIGURE 2.5 A transmission line terminated in a short circuit.

60 Chapter 2: Transmission Line Theory

V(z) 2 jVo+ 1

–␭ – 3␭ – ␭ – ␭

z

4

2

4

–1

(a)
I(z)Z0 1 2Vo+

–␭ – 3␭

–␭

–␭

z

4

2

4

–1

(b)
Xin Z0

–␭ – 3␭ – ␭ – ␭

z

4

2

4

(c)
FIGURE 2.6 (a) Voltage, (b) current, and (c) impedance (Rin = 0 or ∞) variation along a shortcircuited transmission line.

repeating for multiples of λ/2. The voltage, current, and input reactance for the short-
circuited line are plotted in Figure 2.6. Next consider the open-circuited line shown in Figure 2.7, where Z L = ∞. Dividing
the numerator and denominator of (2.35) by Z L and allowing Z L → ∞ shows that the reﬂection coefﬁcient for this case is = 1, and the standing wave ratio is again inﬁnite.
From (2.36) the voltage and current on the line are

V (z) = Vo+ e− jβz + e jβz = 2Vo+ cos βz,

I (z) = Vo+ e− jβz − e jβz = −2 j Vo+ sin βz,

Z0

Z0

(2.46a) (2.46b)

V(z), I(z) Z 0, ␤

+ VL –

IL = 0 ZL = ∞

–l

0

z

FIGURE 2.7 A transmission line terminated in an open circuit.

2.3 The Terminated Lossless Transmission Line 61
V(z) 1 2Vo+

–␭ – 3␭ 4

–␭

–␭

z

2

4

–1

(a) I(z)Z0
–2 jVo+ 1

–␭ – 3␭ – ␭

–␭

z

42

4

–1

(b)
Xin Z0

–␭ – 3␭ – ␭ – ␭

z

4

2

4

(c)
FIGURE 2.8 (a) Voltage, (b) current, and (c) impedance (Rin = 0 or ∞) variation along an opencircuited transmission line.

which shows that now I = 0 at the load, as expected for an open circuit, while the voltage is a maximum. The input impedance is

Zin = − j Z0 cot β ,

(2.46c)

which is also purely imaginary for any length, . The voltage, current, and input reactance of the open-circuited line are plotted in Figure 2.8.
Now consider terminated transmission lines with some special lengths. If = λ/2, (2.44) shows that

Zin = Z L ,

(2.47)

meaning that a half-wavelength line (or any multiple of λ/2) does not alter or transform the load impedance, regardless of its characteristic impedance.
If the line is a quarter-wavelength long or, more generally, = λ/4 + nλ/2, for n = 1, 2, 3, . . . , (2.44) shows that the input impedance is given by

Z in

=

Z

2 0

.

ZL

(2.48)

Such a line is known as a quarter-wave transformer because it has the effect of transforming the load impedance in an inverse manner, depending on the characteristic impedance of the line. We will study this case more thoroughly in Section 2.5.

62 Chapter 2: Transmission Line Theory

ΓT

Z0

1

Z1

0

z

FIGURE 2.9 Reﬂection and transmission at the junction of two transmission lines with different characteristic impedances.

Next consider a transmission line of characteristic impedance Z0 feeding a line of different characteristic impedance, Z1, as shown in Figure 2.9. If the load line is inﬁnitely long, or if it is terminated in its own characteristic impedance, so that there are no reﬂec-
tions from its far end, then the input impedance seen by the feed line is Z1, so that the reﬂection coefﬁcient is

=

Z1 Z1

− +

Z0 Z0

.

(2.49)

Not all of the incident wave is reﬂected; some is transmitted onto the second line with a voltage amplitude given by a transmission coefﬁcient.
From (2.36a) the voltage for z < 0 is

V (z) = Vo+ e− jβz + e jβz , z < 0,

(2.50a)

where Vo+ is the amplitude of the incident voltage wave on the feed line. The voltage wave for z > 0, in the absence of reﬂections, is outgoing only and can be written as

V (z) = Vo+T e− jβz for z > 0.

(2.50b)

Equating these voltages at z = 0 gives the transmission coefﬁcient, T , as

T = 1 + = 1 + Z1 − Z0 = 2Z1 . Z1 + Z0 Z1 + Z0

(2.51)

The transmission coefﬁcient between two points in a circuit is often expressed in dB as the insertion loss, IL,

IL = −20 log |T |dB.

(2.52)

POINT OF INTEREST: Decibels and Nepers
Often the ratio of two power levels P1 and P2 in a microwave system is expressed in decibels (dB) as
10 log P1 dB. P2
Thus, a power ratio of 2 is equivalent to 3 dB, while a power ratio of 0.1 is equivalent to −10 dB. Using power ratios in dB makes it easy to calculate power loss or gain through a series of components since multiplicative loss or gain factors can be accounted for by adding the loss or gain in dB for each stage. For example, a signal passing through a 6 dB attenuator followed by a 23 dB ampliﬁer will have an overall gain of 23 − 6 = 17 dB.

2.4

2.4 The Smith Chart 63

Decibels are used only to represent power ratios, but if P1 = V12/R1 and P2 = V22/R2, then the resulting power ratio in terms of voltage ratios is

10 log

V12 R2 V22 R1

=

20 log

V1 V2

R2 dB, R1

where R1, R2 are the load resistances and V1, V2 are the voltages appearing across these loads. If the load resistances are equal, then this formula simpliﬁes to

20 log V1 dB. V2
The ratio of voltages across equal load resistances can also be expressed in terms of nepers (Np) as

ln V1 Np. V2
The corresponding expression in terms of powers is

1 ln P1 Np, 2 P2
since voltage is proportional to the square root of power. Transmission line attenuation is sometimes expressed in nepers. Since 1 Np corresponds to a power ratio of e2, the conversion between nepers and decibels is

1 Np = 10 log e2 = 8.686 dB.

Absolute power can also be expressed in decibel notation if a reference power level is assumed. If we let P2 = 1 mW, then the power P1 can be expressed in dBm as
10 log P1 dBm 1 mW
Thus a power of 1 mW is equivalent to 0 dBm, while a power of 1 W is equivalent to 30 dBm, and so on.

THE SMITH CHART
The Smith chart, shown in Figure 2.10, is a graphical aid that can be very useful for solving transmission line problems. Although there are a number of other impedance and reﬂection coefﬁcient charts that can be used for such problems [3], the Smith chart is probably the best known and most widely used. It was developed in 1939 by P. Smith at the Bell Telephone Laboratories [4]. The reader might feel that, in this day of personal computers and computer-aided design (CAD) tools, graphical solution-
s have no place in modern engineering. The Smith chart, however, is more than just a graphical technique. Besides being an integral part of much of the current CAD software and test equipment for microwave design, the Smith chart provides a useful way of visualizing transmission line phenomenon without the need for detailed numerical calculations. A microwave engineer can develop a good intuition about transmission line and impedance-matching problems by learning to think in terms of the Smith cha-
rt.
At ﬁrst glance the Smith chart may seem intimidating, but the key to its understanding is to realize that it is based on a polar plot of the voltage reﬂection coefﬁcient, . Let the reﬂection coefﬁcient be expressed in magnitude and phase (polar) form as = | |e jθ . Then the magnitude | | is plotted as a radius (| | ≤ 1) from the center of the chart, and the angle θ (−180◦ ≤ θ ≤ 180◦) is measured counterclockwise from the right-hand side of

0.22 0.28 20

10 20 50
0.2 0.4 0.6 0.8

0.6 0.8
0.7

64 Chapter 2: Transmission Line Theory

0.44 0.06

0.1

0.09

0.4

0.41

110

0.7

0.08

0.07 0.43 130 o), OR

0.5

CAPA0C.4I2TIVE12S0USCEPTANCE

0.6

(+jB/Yo)

0.11
0.39 100

0.9

0.12

0.13

0.38

0.37

90

1.0

0.2 0.4

0.14
0.36 80

0.6 0.8 1.0

1.2 1.4

0.15 0.35
70

1.6

1.8

0.16 0.34
60

0.17 0.33

2.0

0.18 0.32 50

0.19 0.31

0.2 0.3
40

3.0
4.0 5.0

0.3 0.4

0.04

—>

0.46 REACTANCE1C50OMPONEN0T.4(5+0j.X10/450Z

0.21 0.29
30

1G6E0N0.E4R7ATOR

1.0

INDUCTIVE

TOWARD 0.48

0.1 0.2

WAVELENGTHS 0.49 170

—>

0.0 0.0 180

±

<—

0.49 TOWARD LOAD
-170

10
20 50

10 20 50

5.0

4.0

3.0

1.8 2.0

1.6

1.4

1.2

1.0

0.9

0.8

0.5

0.4

0.3

0.1 0.2

0.1 0.2

(-jB/Yo)

RESISTANCE COMPONENT (R/Zo), OR CONDUCTANCE COMPONENT (G/Yo) 0.2
0.4
0.6 0.8

1.0

SUSCEPTANCE

0.04 -150 INDUCTIVE

3.0 4.0 5.0

0.8 1.0

0.46

0.29 0.21
-30

0.6

0.45 0.05
-140 X/Zo), OR

0.3 0.4

0.3 0.2
-40

0.48 <—0.4W7A -V1E6L0ENGTHS

0.23

0.27 ANGLE

OF

0.24

0.26

REFLECTION

0.25

0.25

COEFFICIENT

0.26

0.24

IN

DEGREE0S.23

0.27

0.28 -20 0.22

0.44 0.06

1.6 1.8 2.0

0.5

0.32 0.18 -50

0.2 0.4

-120 REACTANCE

0.08 0.43
COMPONEN-T1 (30-.0j07

0.19 0.31

0.6

0.33 0.17

1.2 1.4

0.7 0.8 0.9 1.0

0.34 0.16
-60

CAPACITIVE

0.42

0.35 0.15
-70

-110

0.09

0.36 0.14
-80

-90

0.13

0.12

0.39 0.11 -100

0.1

0.41

0.4

0.37

0.38

FIGURE 2.10 The Smith chart.

the horizontal diameter. Any passively realizable (| | ≤ 1) reﬂection coefﬁcient can then be plotted as a unique point on the Smith chart.
The real utility of the Smith chart, however, lies in the fact that it can be used to convert from reﬂection coefﬁcients to normalized impedances (or admittances) and vice versa by using the impedance (or admittance) circles printed on the chart. When dealing with impedances on a Smith chart, normalized quantities are generally used, which we will denote by lowercase letters. The normalization constant is usually the characteristic impedance of the transmission line. Thus, z = Z /Z0 represents the-
 normalized version of the impedance Z .
If a lossless line of characteristic impedance Z0 is terminated with a load impedance Z L , the reﬂection coefﬁcient at the load can be written from (2.35) as

= zL − 1 = | |e jθ , zL + 1

(2.53)

where zL = Z L /Z0 is the normalized load impedance. This relation can be solved for zL in terms of to give [or, from (2.43) with = 0]

1 + | |e jθ zL = 1 − | |e jθ .

(2.54)

2.4 The Smith Chart 65

This complex equation can be reduced to two real equations by writing and zL in terms of their real and imaginary parts, = r + j i , and zL = rL + j xL , giving

(1 + rL + j xL = (1 −

r) + j r) − j

i.
i

The real and imaginary parts of this equation can be separated by multiplying the numerator and denominator by the complex conjugate of the denominator to give

Rearranging (2.55) gives

1− rL = (1 −

2 r

−

r )2 +

2 i

2 i

,

xL

=

(1 −

2i r )2 +

2.
i

(2.55a) (2.55b)

r

−

1

rL + rL

2
+

2 i

=

( r − 1)2 +

12 i − xL =

1

2
,

1 + rL

12 ,
xL

(2.56a) (2.56b)

which are seen to represent two families of circles in the r , i plane. Resistance circles are deﬁned by (2.56a) and reactance circles are deﬁned by (2.56b). For example, the rL = 1 circle has its center at r = 0.5, i = 0, and has a radius of 0.5, and so it passes through the center of the Smith chart. All of the resistance circles of (2.56a) have centers on the horizontal i = 0 axis and pass through the = 1 point on the right-hand side of the chart. The centers of all of the reactance circles of -
(2.56b) lie on the vertical r = 1 line (off the chart), and these circles also pass through the = 1 point. The resistance and reactance circles are orthogonal.
The Smith chart can also be used to graphically solve the transmission line impedance
equation of (2.44) since this can be written in terms of the generalized reﬂection coefﬁcient
as

Z in

=

1 Z0 1

+ −

e−2 jβ e−2 jβ

,

(2.57)

where is the reﬂection coefﬁcient at the load and is the (positive) length of transmission line. We then see that (2.57) is of the same form as (2.54), differing only by the phase angles of the terms. Thus, if we have plotted the reﬂection coefﬁcient | |e jθ at the load, the normalized input impedance seen looking into a length of transmission line terminated with zL can be found by rotating the point clockwise by an amount 2β (subtracting 2β from θ ) around the center of the chart. The radius sta-
ys the same since the magnitude of does not change with position along the line (assuming a lossless line).
To facilitate such rotations, the Smith chart has scales around its periphery calibrated in electrical wavelengths, toward and away from the “generator” (which simply means the direction away from the load). These scales are relative, so only the difference in wavelengths between two points on the Smith chart is meaningful. The scales cover a range of 0 to 0.5 wavelength, which reﬂects the fact that the Smith chart automatically includes the periodicity of transmission line phenomenon. Thus, a lin-
e of length λ/2 (or any multiple) requires a rotation of 2β = 2π around the center of the chart, bringing the point back to its original position, showing that the input impedance of a load seen through a λ/2 line is unchanged.

66 Chapter 2: Transmission Line Theory
We will now illustrate the use of the Smith chart for a variety of typical transmission line problems through examples.

EXAMPLE 2.2 BASIC SMITH CHART OPERATIONS

A load impedance of 40 + j70 terminates a 100 transmission line that is 0.3λ long. Find the reﬂection coefﬁcient at the load, the reﬂection coefﬁcient at the input to the line, the input impedance, the standing wave ratio on the line, and the return loss.

Solution The normalized load impedance is

zL

=

ZL Z0

= 0.4 +

j 0.7,

which can be plotted on the Smith chart as shown in Figure 2.11. By using a drawing compass and the voltage coefﬁcient scale printed below the chart, one can read off the reﬂection coefﬁcient magnitude at the load as | | = 0.59. This same compass setting can then be applied to the standing wave ratio (SWR) scale to read SWR = 3.87 and to the return loss (RL) (in dB) scale to read RL = 4.6 dB.

ZL

Zin FIGURE 2.11 Smith chart for Example 2.2.

2.4 The Smith Chart 67

Now draw a radial line through the load impedance point and read the angle of the reﬂection coefﬁcient at the load from the outer scale of the chart as 104◦.
Now draw an SWR circle through the load impedance point. Reading the
reference position of the load on the wavelengths-toward-generator (WTG) scale gives a value of 0.106λ. Moving down the line 0.3λ toward the generator brings us to 0.406λ on the WTG scale. Drawing a radial line at this position gives the normalized input impedance at the intersection with SWR circle of zin = 0.365 − j0.611. Then the input impedance of the line is

Zin = Z0zin = 36.5 − j 61.1 .

The reﬂection coefﬁcient at the input still has a magnitude of | | = 0.59; the

phase is read from the radial line at the phase scale as 248◦.

■

The Combined Impedance–Admittance Smith Chart
The Smith chart can be used for normalized admittance in the same way that it is used for normalized impedances, and it can be used to convert between impedance and admittance. The latter technique is based on the fact that, in normalized form, the input impedance of a load zL connected to a λ/4 line is, from (2.44),
zin = 1/zL ,
which has the effect of converting a normalized impedance to a normalized admittance. Since a complete revolution around the Smith chart corresponds to a line length of
λ/2, a λ/4 transformation is equivalent to a 180◦ rotation; this is also equivalent to imaging a given impedance (or admittance) point across the center of the chart to obtain the corresponding admittance (or impedance) point.
Thus, a Smith chart can be used for both impedance and admittance calculations during the solution of a given problem. At different stages of the solution, then, the chart may be either an impedance Smith chart or an admittance Smith chart. This procedure can be made less confusing by using a Smith chart that has a superposition of the scales for a regular Smith chart and the scales of a Smith chart that has been rotated by180◦, as shown in Figure 2.12. Such a chart is referred to as an impedance -
and admittance Smith chart and usually has different-colored scales for impedance and admittance.

EXAMPLE 2.3 SMITH CHART OPERATIONS USING ADMITTANCES
A load of Z L = 100 + j50 terminates a 50 line. What are the load admittance and input admittance if the line is 0.15λ long?
Solution The normalized load impedance is zL = 2 + j1. A standard Smith chart can be used for this problem by initially considering it as an impedance chart and plotting zL and the SWR circle. Conversion to admittance can be accomplished with a λ/4 rotation of zL (easily obtained by drawing a straight line through zL and the center of the chart to intersect the other side of the SWR circle). The chart can now be considered as an admittance chart, and the input admittance can be found by rotating 0-
.15λ from yL .
Alternatively, we can use the combined zy chart of Figure 2.12, where conversion between impedance and admittance is accomplished merely by reading the

0.23

68 Chapter 2: Transmission Line Theory

0.44 0.06 0.5 2.0 1.8

0.7 1.4 0.8 1.2 0.9 1.0 1.0 0.9 1.2 0.8
1.4 0.7
1.6 1.8 0.6 2.0 0.5

0.1

0.09

0.4

0.6 1.6

0.08

0.41

110

0.07 0.43 130 o), OR

CAPA0C.4I2TIVE12S0USCEPTANCE

(+jB/Yo)

0.11
0.39 100

0.12

0.13

0.38

0.37

90

0.2 0.4

0.14
0.36 80

0.6 0.8 1.0

0.15 0.35
70

0.16 0.34
60

0.17 0.33

0.18 0.32 50

0.4

0.19 0.31

0.2 0.3
40

0.21 0.29
30

3.0 0.3
4.0
5.0 0.2

0.46 REACTANCE1C50OMPONEN0T.4(5+0j.X10/450Z

0.04

—>

GENERATOR 160 0.47

1.0

INDUCTIVE

30 20 0.1 10
0.2 5.0
4.0 0.3
3.0 0.4

0.22 0.28 20

TOWARD 0.48

WAVELENGTHS 0.49 170

0.2 0.4 0.6 0.8

0.27 ANGLE

—>

0.0 0.0 180

<—

0.49 TOWARD LOAD
-170

0.48 <—0.4W7A -V1E6L0ENGTHS

±

20 10 0.1
0.2

5.0

4.0 0.3

3.0 0.4

30

RESISTANCE COMPONENT (R/Zo), OR CONDUCTANCE COMPONENT (G/Yo)

0.2 20

0.1 10

yL

(on impedance scales)

(-jB/Yo)

SUSCEPTANCE

0.2 5.0
4.0 0.3

0.46

0.4 0.6 0.8
y

0.04 -150 INDUCTIVE

0.6

0.45 0.05
-140 X/Zo), OR

3.0 0.4

0.5 2.0 1.8 0.6

1.6 0.7 1.4
0.8

1.2 0.9 1.0
1.0 0.9 1.2

0.8 1.4

1.0

0.8 1.0

0.7 1.6

0.6 1.8 2.0
0.5

0.4 3.0
0.3 4.0 5.0
0.2

10
zL (on impedance scales) 0.1 yL (on admittance scales20)
50 0
0.15␭ TG

0.4

3.0

0.19 0.31

10 0.1
20 50

0.3 0.2
-40

0.3

4.0 0.2 5.0

0.29 0.21
-30

0.1 10 20 50

0.28 -20 0.22

DEGREE0S.23

IN

COEFFICIENT

REFLECTION

OF

0.24

0.26

0.25

0.25

0.26

0.24

0.27

1.4 0.7 0.8
1.2 0.9
1.0 1.0 0.9
1.2 0.8
1.4 0.7
1.6 0.6 1.8
2.0 0.5

0.44 0.06 2.0 0.5 1.8

0.32 0.18 -50

0.2 0.4

-120 REACTANCE

0.08 0.43
COMPONEN-T1 (30-.0j07

1.6 0.6

0.33 0.17

0.34 0.16
-60

CAPACITIVE

0.42

0.35 0.15
-70

-110

0.09

0.36 0.14
-80

-90

0.13

0.12

0.39 0.11 -100

0.1

0.41

0.4

0.37

0.38

FIGURE 2.12 Z Y Smith chart with solution for Example 2.3.

appropriate scales. Plotting zL on the impedance scales and reading the admittance scales at this same point gives yL = 0.40 − j0.20. The actual load admittance is then

YL

=

yL Y0

=

yL Z0

=

0.0080 −

j 0.0040

S.

Then, on the WTG scale, the load admittance is seen to have a reference position of 0.214λ. Moving 0.15λ past this point brings us to 0.364λ. A radial line at this point on the WTG scale intersects the SWR circle at an admittance of y = 0.61 + j0.66. The actual input admittance is then Y = 0.0122 + j0.0132 S. ■

The Slotted Line
A slotted line is a transmission line conﬁguration (usually a waveguide or coaxial line) that allows the sampling of the electric ﬁeld amplitude of a standing wave on a terminated line. With this device the SWR and the distance of the ﬁrst voltage minimum from the load can be measured, and from these data the load impedance can be determined. Note that because the load impedance is, in general, a complex number (with two degrees of freedom), two distinct quantities must be measured with the slotte-
d line to uniquely determine this impedance. A typical waveguide slotted line is shown in Figure 2.13.

2.4 The Smith Chart 69

FIGURE 2.13 An X -band waveguide slotted line.

Although slotted lines used to be the principal way of measuring an unknown impedance at microwave frequencies, they have largely been superseded by the modern vector network analyzer in terms of accuracy, versatility, and convenience. The slotted line is still of some use, however, in certain applications such as high millimeter wave frequencies or where it is desired to avoid connector mismatches by connecting the unknown load directly to the slotted line, thus avoiding the use of imperfect tran-
sitions. Another reason for studying the slotted line is that it provides an unexcelled tool for learning the basic concepts of standing waves and mismatched transmission lines. We will derive expressions for ﬁnding the unknown load impedance from slotted line measurements and also show how the Smith chart can be used for the same purpose.
Assume that, for a certain terminated line, we have measured the SWR on the line and min, the distance from the load to the ﬁrst voltage minimum on the line. The load impedance Z L can then be determined as follows. From (2.41) the magnitude of the reﬂection coefﬁcient on the line is found from the standing wave ratio as

|

|

=

SWR SWR

− +

1. 1

(2.58)

From Section 2.3, we know that a voltage minimum occurs when e j(θ−2β ) = −1, where θ is the phase angle of the reﬂection coefﬁcient, = | |e jθ . The phase of the reﬂection
coefﬁcient is then

θ = π + 2β min,

(2.59)

where min is the distance from the load to the ﬁrst voltage minimum. Actually, since the voltage minima repeat every λ/2, where λ is the wavelength on the line, any multiple of λ/2 can be added to min without changing the result in (2.59) because this just amounts to adding 2βnλ/2 = 2πn to θ, which will not change . Thus, the two quantities SWR
and min can be used to ﬁnd the complex reﬂection coefﬁcient at the load. It is then

70 Chapter 2: Transmission Line Theory

straightforward to use (2.43) with = 0 to ﬁnd the load impedance from :

ZL

=

1+ Z0 1 −

.

(2.60)

The use of the Smith chart in solving this problem is best illustrated by an example.

EXAMPLE 2.4 IMPEDANCE MEASUREMENT WITH A SLOTTED LINE
The following two-step procedure has been carried out with a 50 coaxial slotted line to determine an unknown load impedance:
1. A short circuit is placed at the load plane, resulting in a standing wave on the line with inﬁnite SWR and sharply deﬁned voltage minima, as shown in Figure 2.14a. On the arbitrarily positioned scale on the slotted line, voltage minima are recorded at
z = 0.2 cm, 2.2 cm, 4.2 cm.
2. The short circuit is removed and replaced with the unknown load. The standing wave ratio is measured as SWR = 1.5, and voltage minima, which are not as sharply deﬁned as those in step 1, are recorded at
z = 0.72 cm, 2.72 cm, 4.72 cm,
as shown in Figure 2.14b. Find the load impedance.
Solution Knowing that voltage minima repeat every λ/2, we have from the data of step 1 that λ = 4.0 cm. In addition, because the reﬂection coefﬁcient and input impedance also repeat every λ/2, we can consider the load terminals to be effectively located at any of the voltage minima locations listed in step 1. Thus, if we say the load is at 4.2 cm, then the data from step 2 show that the next voltage minimum away from the load occurs at 2.72 cm, giving min = 4.2 − 2.72 = 1.48 cm = 0.37λ.
|V |

01 2 34 5 (a)

Short circuit
|V | Vmax Vmin

01 2 34 5 (b)

Unknown load

FIGURE 2.14 Voltage standing wave patterns for Example 2.4. (a) Standing wave for short-circuit load. (b) Standing wave for unknown load.

2.4 The Smith Chart 71

Applying (2.58)–(2.60) to these data gives

|

|

=

1.5 1.5

− +

1 1

=

0.2,

θ

=

π

+

4π (1.48) 4.0

=

86.4◦,

so

= 0.2e j86.4◦ = 0.0126 + j 0.1996.

The load impedance is then 1+
Z L = 50 1 −

= 47.3 + j19.7 .

For the Smith chart version of the solution, we begin by drawing the SWR circle for SWR = 1.5, as shown in Figure 2.15; the unknown normalized load impedance must lie on this circle. The reference that we have is that the load is 0.37λ away from the ﬁrst voltage minimum. On the Smith chart the position of a voltage minimum corresponds to the minimum impedance point (minimum voltage, maximum current), which is the horizontal axis (zero reactance) to the

0.04

—>

1G6E0N0.E4R7ATOR

0.22 0.28 20

TOWARD 0.48

0.1 0.2

0.23

0.27 ANGLE

WAVELENGTHS 0.49 170

0.6 0.8
0.7

0.44 0.06

0.1

0.09

0.4

0.08

0.41

110

0.7

0.07 0.43 130 o), OR

0.5

CAPA0C.4I2TIVE12S0USCEPTANCE

0.6

(+jB/Yo)

0.11
0.39 100

0.9

0.12

0.13

0.38

0.37

90

1.0

0.2 0.4

0.14
0.36 80

0.6

0.8 1.0

1.2 1.4

0.15 0.35
70

1.6

1.8

0.16 0.34
60

0.17 0.33

2.0

0.18 0.32 50

0.19 0.31

0.2 0.3
40

3.0
4.0 5.0

0.46 REACTANCE1C50OMPONEN0T.4(5+0j.X10/450Z

0.3 0.4

0.21 0.29
30

1.0

INDUCTIVE

10 20 50
0.2 0.4 0.6 0.8

zL
10

20

0.4

0.3

0.1 0.2

0.5

Voltage

0.8

0.9

1.0

1.2

1.4

1.6

1.8 2.0

Voltage

3.0

4.0

5.0

10 20 50

50

min.
RESISTANCE COMPONENT (R/Zo), OR CONDUCTANCE COMPONENT (G/Yo)

max.

0.1

SWR

0.2
circ0.4 le

(-jB/Yo)

0.6
0.8 0.2

1.0

SUSCEPTANCE

0.04 -150 INDUCTIVE

3.0 4.0 5.0

0.8 1.0

0.46

0.29 0.21
-30

0.6

0.45 0.05
-140 X/Zo), OR

0.3 0.4

0.3 0.2
-40

OF

0.24

0.26

REFLECTION

—>

0.0 0.0 180

0.25

0.25

±

<—

COEFFICIENT

0.49 TOWARD LOAD
-170

0.26

0.24

IN

DEGREE0S.23

0.48 <—0.4W7A -V1E6L0ENGTHS

0.27

0.28 -20 0.22

0.37␭ TL

0.44 0.06

1.6 1.8 2.0

0.5

0.32 0.18 -50

0.2 0.4

-120 REACTANCE

0.08 0.43
COMPONEN-T13(0-.0j07

0.19 0.31

0.6

0.33 0.17

1.2 1.4

0.7 0.8 0.9 1.0

0.34 0.16
-60

CAPACITIVE

0.42

0.35 0.15
-70

-110

0.09

0.36 0.14
-80

-90

0.13

0.12

0.39 0.11 -100

0.1

0.41

0.4

0.37

0.38

FIGURE 2.15 Smith chart for Example 2.4.

72 Chapter 2: Transmission Line Theory

left of the origin. Thus, we begin at the voltage minimum point and move 0.37λ

toward the load (counterclockwise), to the normalized load impedance point,

zL = 0.95 + j0.4, as shown in Figure 2.15. The actual load impedance is then Z L = 47.5 + j20 , in close agreement with the above result using equations.

Note that, in principle, voltage maxima locations could be used as well as

voltage minima positions, but voltage minima are more sharply deﬁned than volt-

age maxima and so usually result in greater accuracy.

■

2.5

THE QUARTER-WAVE TRANSFORMER
The quarter-wave transformer is a useful and practical circuit for impedance matching and also provides a simple transmission line circuit that further illustrates the properties of standing waves on a mismatched line. Although we will study the design and performance of quarter-wave matching transformers more extensively in Chapter 5, the main purpose here is the application of the previously developed transmission line theory to a basic transmission line circuit. We will ﬁrst approach the proble-
m from the impedance viewpoint and then show how this result can also be interpreted in terms of an inﬁnite set of multiple reﬂections on the matching section.

The Impedance Viewpoint

Figure 2.16 shows a circuit employing a quarter-wave transformer. The load resistance RL and the feedline characteristic impedance Z0 are both real and assumed to be known. These two components are connected with a lossless piece of transmission line of (unknown) characteristic impedance Z1 and length λ/4. It is desired to match the load to the Z0 line by using the λ/4 section of line and so make = 0 looking into the λ/4 matching section.
From (2.44) the input impedance Zin can be found as

Z in

=

Z1

RL Z1

+ +

j Z1 j RL

tan tan

β β

.

(2.61)

To evaluate this for β = (2π/λ)(λ/4) = π/2, we can divide the numerator and denominator by tan β and take the limit as β → π/2 to get

In order for as

Zin =

Z

2 1

.

RL

(2.62)

= 0, we must have Zin = Z0, which yields the characteristic impedance Z1

Z1 = Z0RL,

(2.63)

Γ ␭/4

Z0

Z1

RL

Zin FIGURE 2.16 The quarter-wave matching transformer.

2.5 The Quarter-Wave Transformer 73
which is the geometric mean of the load and source impedances. Then there will be no standing waves on the feedline (SWR = 1), although there will be standing waves on the λ/4 matching section. In addition, the above condition applies only when the length of the matching section is λ/4 or an odd multiple of λ/4, long, so that a perfect match may be achieved at one frequency, but impedance mismatch will occur at other frequencies.

EXAMPLE 2.5 FREQUENCY RESPONSE OF A QUARTER-WAVE TRANSFORMER
Consider a load resistance RL = 100 to be matched to a 50 line with a quarter-wave transformer. Find the characteristic impedance of the matching section and plot the magnitude of the reﬂection coefﬁcient versus normalized frequency, f / fo, where fo is the frequency at which the line is λ/4 long.
Solution From (2.63), the necessary characteristic impedance is

Z1 = (50)(100) = 70.71 .

The reﬂection coefﬁcient magnitude is given as

| | = Zin − Z0 , Zin + Z0

where the input impedance Zin is a function of frequency as given by (2.44). The frequency dependence in (2.44) comes from the β term, which can be written in terms of f / fo as

β=

2π λ

λ0 4

=

2π f vp

vp = π f ,

4 fo

2 fo

where it is seen that β = π/2 for f = fo, as expected. For higher frequen-

cies the matching section looks electrically longer, and for lower frequencies it

looks shorter. The magnitude of the reﬂection coefﬁcient is plotted versus f / fo in

Figure 2.17.

■

|Γ| 0.3

0.2

0.1

0.0

0.0

1.0

2.0

3.0

4.0 f/fo

FIGURE 2.17 Reﬂection coefﬁcient versus normalized frequency for the quarter-wave transformer of Example 2.5.

74 Chapter 2: Transmission Line Theory

This method of impedance matching is limited to real load impedances, although a complex load impedance can easily be made real, at a single frequency, by transformation through an appropriate length of line.
The above analysis shows how useful the impedance concept can be when solving transmission line problems, and this method is probably the preferred method in practice. It may aid our understanding of the quarter-wave transformer (and other transmission line circuits), however, if we now look at it from the viewpoint of multiple reﬂections.

The Multiple-Reflectio Viewpoint

Figure 2.18 shows the quarter-wave transformer circuit with reﬂection and transmission coefﬁcients deﬁned as follows:

= overall, or total, reﬂection coefﬁcient of a wave incident on the λ/4 transformer (same as in Example 2.5).
1 = partial reﬂection coefﬁcient of a wave incident on a load Z1, from the Z0 line. 2 = partial reﬂection coefﬁcient of a wave incident on a load Z0, from the Z1 line. 3 = partial reﬂection coefﬁcient of a wave incident on a load RL , from the Z1 line. T1 = partial transmission coefﬁcient of a wave from the Z0 line into the Z1 line. T2 = partial transmission coefﬁcient of a wave from the Z1 line into the Z0 line.
These coefﬁcients can be expressed as

1

=

Z1 Z1

− +

Z0 Z0

,

2=

Z0 − Z1 = − Z0 + Z1

1,

3

=

RL RL

− +

Z1 Z1

,

(2.64a) (2.64b) (2.64c)

Γ

1

T2

Z0

T1 Z1

RL

Γ1

Γ2 Γ3

␭/4

1

T1

Γ1

–T1T2Γ3

T2

Γ3

T1T2Γ32Γ2

T2 Γ2

Γ3

Γ2

Γ3

FIGURE 2.18 Multiple reﬂection analysis of the quarter-wave transformer.

2.5 The Quarter-Wave Transformer 75

T1

=

2Z1 , Z1 + Z0

T2

=

Z

2Z0 1+Z

0

.

(2.64d) (2.64e)

Now think of the quarter-wave transformer of Figure 2.18 in the time domain, and imagine
a wave traveling down the Z0 feedline toward the transformer. When the wave ﬁrst hits the junction with the Z1 line, it sees only an impedance Z1 since it has not yet traveled to the load RL and cannot see that effect. Part of the wave is reﬂected with a coefﬁcient 1, and part is transmitted onto the Z1 line with a coefﬁcient T1. The transmitted wave then travels λ/4 to the load, is reﬂected with a coefﬁcient 3, and travels another λ/4 back to the junction with the Z0 line. Part of this wave is tr-
ansmitted through (to the left) to the Z0 line, with coefﬁcient T2, and part is reﬂected back toward the load with coefﬁcient 2. Clearly, this process continues with an inﬁnite number of bouncing waves, and the total
reﬂection coefﬁcient, , is the sum of all of these partial reﬂections. Since each round trip path up and down the λ/4 transformer section results in a 180◦ phase shift, the total
reﬂection coefﬁcient can be expressed as

=

1 − T1T2

3 + T1T2

2

2 3

−

T1 T2

2 2

3 3

+

·

·

·

∞
= 1 − T1T2 3 (− 2 3)n.

n=0

(2.65)

Since | 3| < 1 and | 2| < 1, the inﬁnite series in (2.65) can be summed using the geometric series result that

∞ n=0

xn

=

1

1 −

x

,

for |x| < 1,

to give

=

1−

T1T2 3 1+ 2 3

=

1 + 1 2 3 − T1T2 3 . 1+ 2 3

The numerator of this expression can be simpliﬁed using (2.64) to give

(2.66)

1− 3

2 1

+

T1 T2

=

1−

3

(Z1 (Z1

− +

Z 0 )2 Z 0 )2

+

4Z1Z0 (Z1 + Z0)2

=

1−

3

=

(Z1

−

Z0)(RL + Z1) − (RL − Z1)(Z1 (Z1 + Z0)(RL + Z1)

+

Z0)

=

2

Z

2 1

−

Z0 RL

,

(Z1 + Z0)(RL + Z1)

√ which is seen to vanish if we choose Z1 = Z0 RL , as in (2.63). Then of (2.66) is zero, and the line is matched. This analysis shows that the matching property of the quarter-wave

transformer comes about by properly selecting the characteristic impedance and length of

the matching section so that the superposition of all of the partial reﬂections adds to zero.

Under steady-state conditions, an inﬁnite sum of waves traveling in the same direction with

the same phase velocity can be combined into a single traveling wave. Thus, the inﬁnite

set of waves traveling in the forward and reverse directions on the matching section can be

reduced to two waves traveling in opposite directions. See Problem 2.25.

76 Chapter 2: Transmission Line Theory

2.6

GENERATOR AND LOAD MISMATCHES

In Section 2.3 we treated the terminated (mismatched) transmission line assuming that the generator was matched, so that no reﬂections occurred at the generator. In general, however, both generator and load may present mismatched impedances to the transmission line. We will study this case and also see that the condition for maximum power transfer from the generator to the load may, in some situations, involve a standing wave on the line.
Figure 2.19 shows a transmission line circuit with arbitrary generator and load impedances Zg and Z , which may be complex. The transmission line is assumed to be lossless, with a length and characteristic impedance Z0. This circuit is general enough to model most passive and active networks that occur in practice.
Because both the generator and load are mismatched, multiple reﬂections can occur on the line, as in the problem of the quarter-wave transformer. The present circuit could thus be analyzed using an inﬁnite series to represent the multiple bounces, as in Section 2.5, but we will use the easier and more useful method of impedance transformation. The input impedance looking into the terminated transmission line from the generator end is, from (2.43) and (2.44),

Z in

=

Z0

1 1

+ −

e−2 jβ e−2 jβ

=

Z0

Z Z0

+ +

j Z0 jZ

tan β tan β

,

(2.67)

where is the reﬂection coefﬁcient of the load:

=Z Z

− +

Z0 Z0

.

The voltage on the line can be written as

(2.68)

V (z) = Vo+ e− jβz + e jβz ,

(2.69)

and we can ﬁnd Vo+ from the voltage at the generator end of the line, where z = − :

V (−

)

=

Vg

Z in Zin +

Zg

= Vo+

e jβ

+

e− jβ ,

so that

Vo+

=

Vg

Z in Zin + Zg

e jβ

1 +

e− jβ

.

(2.70)

This can be rewritten, using (2.67), as

Vo+

=

Vg

Z0

Z0 + Zg

1−

e− jβ ge−2 jβ

,

(2.71)

Γ Iin

Zg

+

Vg

Z in

Vin

–

Z0, ␤

Γl Zl

–l

0

z

FIGURE 2.19 Transmission line circuit for mismatched load and generator.

2.6 Generator and Load Mismatches 77

where g is the reﬂection coefﬁcient seen looking into the generator:

g

=

Zg Zg

− +

Z0 Z0

.

(2.72)

The standing wave ratio on the line is then

SWR

=

1 1

+ −

| |

| |

.

(2.73)

The power delivered to the load is

P

=

1 2

Re{Vin

Ii∗n

}

=

1 2

|Vin

|2Re

1 Z in

=

1 2

|Vg

|2

Z in Zin + Zg

2
Re

1 Z in

.

(2.74)

Now let Zin = Rin + j Xin and Zg = Rg + j Xg; then (2.74) can be reduced to

P

=

1 2

|Vg

|2

(

Rin

+

Rin Rg)2 + (Xin

+

Xg)2 .

(2.75)

We now assume that the generator impedance, Zg, is ﬁxed, and consider three cases of load impedance.

Load Matched to Line

In this case we have Zl = Z0, so = 0, and SWR = 1, from (2.68) and (2.73). Then the input impedance is Zin = Z0, and the power delivered to the load is, from (2.75),

P

=

1 2

|Vg

|2

(

Z

0

+

Z0 Rg )2

+

X

2 g

.

(2.76)

Generator Matched to Loaded Line

In this case the load impedance Z and/or the transmission line parameters β , Z0 are chosen to make the input impedance Zin = Zg, so that the generator is matched to the load presented by the terminated transmission line. Then the overall reﬂection coefﬁcient, , is

zero:

=

Zin − Zg Zin + Zg

= 0.

(2.77)

There may, however, be a standing wave on the line since

delivered to the load is

P

=

1 2

|Vg

|2

4

Rg

Rg2

+

X

2 g

.

may not be zero. The power (2.78)

Observe that even though the loaded line is matched to the generator, the power delivered to the load may be less than that of (2.76), where the loaded line was not necessarily matched to the generator. Thus, we are led to the question of what is the optimum load impedance, or equivalently, what is the optimum input impedance, to achieve maximum power transfer to the load for a given generator impedance.

Conjugate Matching
Assuming that the generator series impedance Zg is ﬁxed, we may vary the input impedance Zin until we achieve the maximum power delivered to the load. Knowing Zin, it is then easy to ﬁnd the corresponding load impedance Z via an impedance transformation along

78 Chapter 2: Transmission Line Theory

the line. To maximize P, we differentiate with respect to the real and imaginary parts of Zin. Using (2.75) gives

∂P ∂ Rin

=

0

→

( Rin

+

Rg )2

1 + (Xin

+

X g)2

+

[( Rin

−2Rin(Rin + Rg) + Rg)2 + (Xin + Xg)2]2

=

0,

or

Rg2 − Ri2n + (Xin + Xg)2 = 0,

(2.79a)

and

∂P ∂ Xin

=0→

−2Rin(Xin + Xg) [(Rin + Rg)2 + (Xin + Xg)2]2

=

0,

or

Xin(Xin + Xg) = 0.

(2.79b)

Solving (2.79a) and (2.79b) simultaneously for Rin and Xin gives

Rin = Rg, Xin = −Xg,

or

Z in

=

Z

∗ g

.

(2.80)

This condition is known as conjugate matching, and it results in maximum power transfer to the load for a ﬁxed generator impedance. The power delivered is, from (2.75) and (2.80),

P

=

1 2

|Vg

|2

4

1 Rg

,

(2.81)

which is seen to be greater than or equal to the powers of (2.76) or (2.78). This is also the
maximum available power from the generator. Note that the reﬂection coefﬁcients , g, and may be nonzero. Physically, this means that in some cases the power in the multiple
reﬂections on a mismatched line may add in phase to deliver more power to the load than
would be delivered if the line were ﬂat (no reﬂections). If the generator impedance is real (Xg = 0), then the last two cases reduce to the same result, which is that maximum power is delivered to the load when the loaded line is matched to the generator (Rin = Rg, with Xin = Xg = 0).
Finally, note that neither matching for zero reﬂection (Z = Z0) nor conjugate matching (Zin = Zg∗) necessarily yields a system with the best efﬁciency. For example, if Zg = Z = Z0 then both load and generator are matched (no reﬂections), but only half the power produced by the generator is delivered to the load (the other half is lost in Zg), for a transmission efﬁciency of 50%. This efﬁciency can only be improved by making Zg as small as possible.

2.7

LOSSY TRANSMISSION LINES
In practice, transmission lines have losses due to ﬁnite conductivity and/or lossy dielectric, but these losses are usually small. In many practical problems loss may be neglected, but at other times the effect of loss may be very important, as when dealing with the attenuation of a transmission line, noise introduced by a lossy line, or the Q of a resonator, for example. In this section we will study the effects of loss on transmission line behavior and show how the attenuation constant can be ca-
lculated.

2.7 Lossy Transmission Lines 79

The Low-Loss Line
In most practical microwave and RF transmission lines the loss is small—if this were not the case, the line would be of little practical value. When the loss is small, some approximations can be made to simplify the expressions for the general transmission line parameters of γ = α + jβ and Z0.
The general expression for the complex propagation constant is, from (2.5),

γ = (R + jωL)(G + jωC),

(2.82)

which can be rearranged as

γ=

( jωL)( jωC)

1+

R jωL

1+

G j ωC

√

RG

RG

= jω LC 1 − j ωL + ωC − ω2LC .

(2.83)

For a low-loss line both conductor and dielectric loss will be small, and we can assume that R ωL and G ωC. Then, RG ω2 LC, and (2.83) reduces to

γ

√ jω LC 1 − j

R ωL

+

G ωC

.

(2.84)

If we were to ignore the (R/ωL + G/ωC) term we would obtain the result that γ was purely imagina√ry (no loss), so we will instead use the ﬁrst two terms of the Taylor series expansion for 1 + x 1 + x/2 + · · · to give the ﬁrst higher order real term for γ :

γ

√ jω LC

1− j

2

R ωL

+

G ωC

,

so that

1

C

L 1R

α

2

R

+G L

C

= 2

Z0 + GZ0 ,

√ β ω LC,

(2.85a) (2.85b)

√ where Z0 = L/C is the characteristic impedance of the line in the absence of loss. Note from (2.85b) that the propagation constant β is identical to that of the lossless case
of (2.12). By the same order of approximation, the characteristic impedance Z0 can be approximated as a real quantity:

Z0 =

R + jωL G + jωC

L. C

(2.86)

Equations (2.85)–(2.86) are known as the high-frequency, low-loss approximations for transmission lines, and they are important because they show that the propagation constant and characteristic impedance for a low-loss line can be closely approximated by considering the line as lossless.

80 Chapter 2: Transmission Line Theory

EXAMPLE 2.6 ATTENUATION CONSTANT OF THE COAXIAL LINE

In Example 2.1 the L, C, R, and G parameters were derived for a lossy coaxial line. Assuming the loss is small, derive the attenuation constant from (2.85a) with the results from Example 2.1.

Solution From (2.85a),

α= 1 R C +G L .

2

L

C

Using the results for R and G derived in Example 2.1 gives

α= 1 2

Rs η ln b/a

1+1 ab

+ω

η,

where η = µ/ is the intrinsic i√mpedance√of the dielectric m√aterial ﬁlling the coaxial line. In addition, β = ω LC = ω µ and Z0 = L/C = (η/2π )

ln b/a.

■

This method for the calculation of attenuation requires that the line parameters L, C, R, and G be known. These can sometimes be derived using the formulas of (2.17)−(2.20), but a more direct and versatile procedure is to use the perturbation method, to be discussed shortly.

The Distortionless Line

As can be seen from the exact equations (2.82)–(2.83) for the propagation constant of a lossy line, the phase term β is generally a complicated function of frequency ω when loss is present. In particular, we note that β is generally not exactly a linear function of frequency, as in (2.85b), unless the line is lossless. If β is not a linear function of frequency (of the form β = aω), then the phase velocity vp = ω/β will vary with frequency. The implication of this is that the various frequency com-
ponents of a wideband signal will travel with different phase velocities and so arrive at the receiver end of the transmission line at slightly different times. This will lead to dispersion, a distortion of the signal, and is generally an undesirable effect. Granted, as we have argued, the departure of β from a linear function may be quite small, but the effect can be signiﬁcant if the line is very long. This effect leads to the concept of group velocity, which we will address in detail in Section-
 3.10.
There is a special case, however, of a lossy line that has a linear phase factor as a function of frequency. Such a line is called a distortionless line, and it is characterized by line parameters that satisfy the relation

R = G. LC

(2.87)

From (2.83) the exact complex propagation constant, under the condition speciﬁed by (2.87), reduces to

√ γ = jω LC

1

−

2

j

R ωL

−

R2 ω2 L 2

√ = jω LC

1−

R j ωL

=R

C

+

√ jω LC

=

α

+

jβ,

L

(2.88)

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:12.857Z
- **Text Length:** 196057 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
