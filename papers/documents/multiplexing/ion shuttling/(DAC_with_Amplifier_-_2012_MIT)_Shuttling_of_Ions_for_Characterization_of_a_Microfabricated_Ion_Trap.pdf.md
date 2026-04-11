# PDF Document: (DAC with Amplifier - 2012 MIT) Shuttling of Ions for Characterization of a Microfabricated Ion Trap.pdf

**File Path:** (DAC with Amplifier - 2012 MIT) Shuttling of Ions for Characterization of a Microfabricated Ion Trap.pdf

**Processed Date:** 2026-02-10T18:17:52.347Z

**File Size:** 8424.31 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 82

**Collection:** Multiplexing > Ion Shuttling

---

## Extracted Text Content

Shuttling of Ions for Characterization of a

ARCHVS

Microfabricated Ion Trap

MASSACHUSETTS INSTITUTE

by

Zachary Fisher

L

Submitted to the Department of Physics

L

in partial fulfillment of the requirements for the degree of

@Eli:3TIF

Bachelor of Science in Physics

at the

MASSACHUSETTS INSTITUTE OF TECHNOLOGY

June 2012
© Zachary Fisher, MMXII. All rights reserved.

The author hereby grants to MIT permission to reproduce and distribute publicly paper and electronic copies of this thesis document
in whole or in part.

Author............... Certified by................

................................. Department of Physics May 17, 2012
...... .................. Professor Isaac L. Chuang
Professor of Physics Thesis Supervisor

Accepted by ..................... . . . . . . . . . . . . .... . . . . . .. . . . . . . . . . . . Professor Nergis Mavalvala
Senior Thesis Coordinator, Department of Physics

2

Shuttling of Ions for Characterization of a Microfabricated Ion Trap by
Zachary Fisher
Submitted to the Department of Physics on May 17, 2012, in partial fulfillment of the
requirements for the degree of Bachelor of Science in Physics
Abstract
In this thesis, I present experimental results demonstrating the characterization of a planar Paul trap. I discuss the theory of ion trapping and analyze the voltages required for shuttling. Next, the characteristics of a digital-to-analog converter (DAC) are calibrated, and this instrument is integrated into trapping experiments to test the viability of the analytic model. Combining theory with the capabilities of the DAC, I calculate that the new experimental system is capable of 3 nm-precision -
control of the ion. Taking advantage of this ion control, I present initial results for a lock-in micromotion detection method which minimizes stray fields around an 88Sr+ ion using Fourier analysis on the ion fluorescence to detect resonance at the secular frequencies. This method drives the ion oscillator across resonance using a superimposed radiofrequency electric field, which allows for off-axis field measurements as well as trap characterization. With this method, the secular frequencies of -
the trap are measured and are observed to fall within 3.50- of the analytic prediction.
Thesis Supervisor: Professor Isaac L. Chuang Title: Professor of Physics
3

4

Acknowledgments
This thesis marks the completion of a year-long adventure in the Quanta lab. There are many people who made this unique experience possible and who deserve thanks for the help they've given me.
First, I'd like to thank my thesis advisor, Isaac Chuang, without whose guidance and advice none of this work would have been possible. For all the input he has given to this project, I'd also like to recognize one other aspect of the experience that I appreciate: whenever we went to lunch, he would always pose some interesting physics or computational problem that I would think about for the rest of the day. He introduced me to new ideas and problems outside my comfort zone, and for expanding my -
horizons, I am very grateful.
I would like to thank Peter Herskind, who was my compass on both the short and long term aspects of this project, always believed in my ability to succeed, and showed me that good things come in small packages (not always microfabricated). He was always patient in showing me the ropes of the experiments and in showing me how to present real-world data.
Michael Gutierrez, my UROP supervisor, was always helpful with theoretical work and in guiding me through the engineering aspects of the project. His development of the theory of the lock-in detection part of this experiment represents a critical element of my thesis. For his good humor, active mind and helping hand, I'd like to give him recognition.
Amira Eltony worked hard with me on the micromotion minimization parts of this experiment. I really appreciate her spirit of enterprise and cooperation in the lab process, and her proactive assistance in teaching me real-world laboratory practice. We spent many, many late nights programming and trapping ions in the lab with me, yet never lost her helpful spirit and good humor.
Several other members of the lab, including Molu Shi, Hans Anderson, Rena Katz, Shannon Wang, Yufei Ge and Daniel Li, helped and guided me when I needed it. They too inspired me to think about exciting new problems and were patient in guiding
5

me towards their solution. This thesis is dedicated to the special people in my life, who know who they are.
6

Contents

1 Introduction

13

1.1 Ion trapping . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 14

1.1.1 Quantum networking . . . . . . . . . . . . . . . . . . . . . . . 16

1.1.2 Technical challenges . . . . . . . . . . . . . . . . . . . . . . . 17

1.2 Ion traps as force sensors . . . . . . . . . . . . . . . . . . . . . . . . . 18

1.3 Overview of this thesis . . . . . . . . . . . . . . . . . . . . . . . . . . 18

1.3.1 Contributions . . . . . . . . . . . . . . . . . . . . . . . . . . . 19

1.3.2 Contents . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 19

2 Theory of Ion Trapping

21

2.1 Planar Paul Traps . . . . . . . . . . . . . . . . . . . . . . . . . . . . 21

2.2 Equations of motion of a trapped ion . . . . . . . . . . . . . . . . . . 23

2.3 Analytic model of a planar Paul Trap . . . . . . . . . . . . . . . . . . 26

2.3.1 Trap parameters . . . . . . . . . . . . . . . . . . . . . . . . . 29

2.4 Trap design with the analytic model . . . . . . . . . . . . . . . . . . 29

2.5 Shuttling . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 30

2.5.1 T heory . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 31

2.5.2 Requirements for Shuttling . . . . . . . . . . . . . . . . . . . . 33

2.6 Summary . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 35

3 High precision digital-to-analog Converters for ion trapping

37

3.1 Specifications . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 37

3.1.1 Digital-to-analog Converter . . . . . . . . . . . . . . . . . . . 38

7

3.1.2 Amplifier . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 38 3.2 Calibration . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 39
3.2.1 Linearity . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 39 3.2.2 Noise . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 40 3.2.3 Speed . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 41 3.3 Computer interface . . . . . . . . . . . . . . . . . . . . . . . . . . . . 42 3.4 Integration into ion trap experiment . . . . . . . . . . . . . . . . . . . 43 3.5 Summary . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 45

4 Micromotion minimization and trap characterization

47

4.1 M icromotion compenstion . . . . . . . . . . . . . . . . . . . . . . . . 47

4.2 Gradient-based x-micromotion minimization . . . . . . . . . . . . . . 49

4.3 Lock-in tickle spectroscopy . . . . . . . . . . . . . . . . . . . . . . . . 50

4.3.1 Theory . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 52

4.3.2 Experimental setup . . . . . . . . . . . . . . . . . . . . . . . . 54

4.3.3 Results. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 55

4.4 Summary . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 59

5 Conclusion

61

5.1 Review . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 61

5.2 Outlook and plans for the future . . . . . . . . . . . . . . . . . . . . 62

5.2.1 ZAC2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 62

5.2.2 Heating rates with trapping location variation . . . . . . . . . 63

5.2.3 Optical cavity trap integration . . . . . . . . . . . . . . . . . . 64

8

List of Figures

1-1 Photos of a planar ion trap in operation. . . . . . . . . . . . . . . . . 16

2-1 Tower of London trap. (Scale: diameter - 12.7 mm.) . . . . . . . . . 22

2-2 Equi-pseudopotential contours. . . . . . . . . . . . . . . . . . . . . . 25

2-3 Analytic evaluation of trap depth versus ratio of rf width to ground

width . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 30

2-4 Analytically-determined shuttling voltages at a constant axial secular

frequency wz = 27r x 500 kHz and 150 radial tilt in the Tower of London

trap. .........

....................................

34

2-5 Electrode definitions for the simulated TOL trap. . . . . . . . . . . . 34

2-6 Voltage range requirements for different shuttling criteria . . . . . . . 35

3-1 Schematic of signaling chain with DAC. . . . . . . . . . . . . . . . . . 38 3-2 Drift in DAC output voltage at three DAC set points (25, 50, 75% of
the full -20 to 20 V range) over time, with linear fit to guide the eye. 39 3-3 DAC power spectral density from oscilloscope traces, with and without
10 kHz RC filter. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 40 3-4 Two methods of measuring DAC update speed. . . . . . . . . . . . . 41 3-5 Block diagram of ZACI modules. . . . . . . . . . . . . . . . . . . . . 42 3-6 ZACI embedded in the custom-built laboratory data acquisition pro-
gram . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 43 3-7 TOL-Superman trap. Electrode names are selected to match the mi-
crocavity loading zone. Green and red spot indicates trapping zone. (Scale: square width = 10.4 mm) . . . . . . . . . . . . . . . . . . . . 44

9

3-8 Signal chain for the initial ZAC digital-to-analog converter trapping

tests.. .... .... ... .. ......

.. ... .. ... .. .. . .. . 45

3-9 CCD image of an ion trapped with the DAC. (Scale: 3.58 tm across.) 46

4-1 Micromotion compensation pairs in the x, y and z direction. . . . . . 48 4-2 Micromotion amplitude change from scanning compensation pair volt-
age in an untilted trap. . . . . . . . . . . . . . . . . . . . . . . . . . . 49 4-3 Micromotion minimization along the x (coplanar radial) direction with
a simple gradient-based minimization algorithm. . . . . . . . . . . . . 50 4-4 Block diagram of the tickle spectroscopy experiment with expected
outcome. The couplers and mixers in the rf chain are shown in Figure 3-8. 54 4-5 Measurement chain for tickle spectroscopy and micromotion minimiza-
tion. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 55 4-6 Tickle spectroscopy raw results and theoretical fits for the x secular
frequency scan. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 57

10

List of Tables
3.1 Parts list for the digital-to-analog converter box. . . . . . . . . . . . . 38 3.2 Untilted and 150 tilted trapping potentials in the loading zone in the
Tower of London-Superman trap with six electrodes. . . . . . . . . . 45 4.1 x-compensated 15' tilted trapping potentials in the Tower of London-
Superm an trap. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 51 4.2 y-compensated 15' tilted trapping potentials in the Tower of London-
Superman trap. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 59
11

12

Chapter 1
Introduction
In the 1950s and 1960s, the experimentalists Hans Dehmelt and Wolfgang Paul developed experimental apparatuses capable of suspending individual atoms through elec-
tric and magnetic fields [Pau90]. These devices, called ion traps, are excellent tools
to experiment with the fundamental constituents of matter, individual atoms. Since then, numerous individuals have demonstrated fascinating applications of trapped ions, using single ions as mass spectrometers or charge sensors [Wan12]. More fundamentally, ion traps are excellent systems for observing and experimenting with the quantum properties of atoms. The atoms trapped in an ion trap are localized and effectively isolated from their environment, and the energy levels of this system are readil-
y measured and perturbed via interaction with a laser. For this reason, ion traps are an excellent candidate for the quantum system that will eventually power a scalable quantum computer, the holy grail of quantum information science, as well as smaller-scale quantum simulators and sensors [Ste97]. However, the science of ion trapping is still relatively young. Researchers continue to test the capabilities of ion trapping systems and take advantage of the quantum properties of atoms.
One immediate question is, with what precision can an experimenter move the ion around an ion trap? This question is important as, when the ion is localized and mobile, many new experiments can be performed. Treating the ion from the perspective of a sensor, the ion gains resolution in space potentially up to a precision of a few nanometers. Complementing this ability to control the ion's position, the ion's
13

isolation from environmental noise means that atomic energy shifts due to electric and magnetic fields may be studied quite directly. These two properties, mobility and environmental isolation, together make ion trapping a particularly powerful tool for field sensing.
This thesis presents theoretical and experimental aspects to using the ion as a field sensor. The remainder of the chapter contains an introduction to the essential aspects of ion trapping. Section 1.1 discusses various methods to implement ion confinement. Following this, section 1.1.2 contains a brief discussion of the technical aspects and implementation challenges in a specific type of ion trap, the planar Paul trap, which is the experimental system used throughout this thesis. The notion of t-
he ion as a force sensor is revisited in section 1.2. The chapter concludes with a discussion of the contributions of this thesis in the area of ion force sensing in section 1.3.

1.1 Ion trapping
The essential difficulty of using electric fields for ion trapping is that the electric potential experienced by the ion satisfies Laplace's equation in free space:

V2#= 2+

+

= 0.

(1.1)

(9X2 (9y2 1Bz2

This equation implies that at least one of 8 2g/8xa must be positive (i = 1, 2,3). In
this direction, the trap cannot be a local minimum. Therefore, an ion cannot be stably confined in a static electric potential, as no configuration of electrostatic fields will confine the ion in all directions. This statement is also known as Earnshaw's theorem [Ear42].
However, an atom may be confined by changing the confinement scheme. Two schemes build on the electronic confinement method to attain confinement along every axis. In one scheme, a static uniform magnetic field is applied to the atom, counterbalancing the defocusing effect of the electric field in one direction by driving the ion in a (bounded) epicyclic orbit [Hol02]. In another scheme, the potentials are

14

altered with time so that an unconfined axis becomes confining after a short time, and vice-versa. This time-varying potential averages to a nearly harmonic potential well, called the pseudopotential, which is indeed confining. These two schemes are called the Penning [NHTD80] and Paul [Pau9o] trapping schemes, after their inventors. Both schemes are used today, but the Paul scheme offers some unique advantages. For example, since Paul traps do not require a magnetic field for its operation, there-
 is no magnetic sublevel splitting intrinsic to the trapping process. Moreover, electric fields are readily produced accurately due to the abundance of inexpensive electrical manufacturing technologies.
The issue of ease of manufacturing is particularly important in the larger scheme of using ion traps for quantum computation. One of the primary barriers to implementing quantum computation with ion traps is the difficulty involved in scaling, i.e. in the process of trapping an arbitrary number of ions using one or more traps. Traditional ion traps involved four electrodes arranged in a grid in 3D space to create a quadrupole potential field like those used to trap particles in a particle accelera-
tor. However, those systems have difficulty in creating junctions, which are used in a quantum computer to delineate quantum logic gate zones [Wan12], and are generally difficult to manufacture in bulk due to their 3D structure.
One alternative that addresses these issues is to build the trap on a planar surface, using printed electrodes instead of 3D ones to form the potential to confine the ions. These are developed by micro-fabricating a series of electrodes on a planar surface [KPM+05]. An immediate advantage of this approach is that planar electrode printing processes are widely available and thus these systems are straightforward to produce in bulk.
One printed trap from our laboratory, with identical electrode configuration as is used throughout this thesis, is shown in Figure 1.1. These photos show various stages in the operation of a planar trap. Figure 1-1(a) shows the loading process for such a trap. A blue ionization laser is directed at a beam of neutral atoms, appearing as a blue streak above the gold trap surface. In this image, the gaps dividing the electrodes are clearly visible. In Figure 1-1(b), a number of ions have been created
15

(a) Neutral atom fluorescence (contrast enhanced). Scale: mirror diameter - 12.7 mm.

(b) Ion crystallization in a trap similar to (a). Trap axis is along the main diagonal, as in (a).

Figure 1-1: Photos of a planar ion trap in operation.

and stored in a similar ion trap, then cooled such that the ions have crystallized into a lattice formation. Individual ions can be trapped in a similar manner by allowing the ions to heat and re-cool until only one ion remains trapped, or by tuning the oven flux and photoionization laser power to load only single ions with high probability.

1.1.1 Quantum networking
An important feature of ion traps is that their isolation in space makes it possible to integrate quantum systems of a diverse nature. This property opens up the possibility of implementing quantum networking, i.e. for reversible mapping of the quantum state of one physical system onto those of another system. Quantum networks are an exciting possible way to combine the advantages of distinct quantum systems for quantum computation. For example, quantum light-matter interfaces can combine the long-
 coherence time and high fidelity of ions with the abilities of photon-based quantum systems to preserve their information over a long distance [KimO8]. This interface may be implemented through the strong interaction of atoms with the modes of a high-finesse optical cavity [HWS+11]. To this end, the integration of an optical cavity into an ion trap is an active area of research, with researchers actively improv-
16

ing the fidelity of optical qubit state readout [MSW+08] and in constructing coherent light-matter quantum interfaces to implement a quantum internet [KimO8]. Herskind et al. [HWS+11] have demonstrated the integration of a mirror with an ion trap operating at 15 K, demonstrating as a proof of concept that ion traps may be useful for developing light-matter interfaces to study cavity quantum-electrodynamical systems [MD02]. This ongoing project has been deemed the pCavity (microcavity) trap experim-
ent. While these quantum networking systems are of immense physical interest, there are also some technical and experimental challenges involved in the implementation.
1.1.2 Technical challenges
An significant physical issue in this endeavor is electric field noise, which may drive the ion out of its harmonic confining potential and heat it into a higher motional quantum state. This challenge is especially critical in the pCavity experiment, as the mirrors of an optical cavity are necessarily an exposed dielectric surface which are experimentally observed to be a cause for electric field noise [WMI+98]. Despite the importance of this problem and after a decade of investigation, the relati-
onship between distance from surfaces and motional heating rates are still unknown [Wan12]. Several experimental investigations [DOS+06, ESL+07] have suggested that the noise follows a functional relationship of d-', where d is the distance from the dielectric surface and 2 < a < 4, but several competing theories exist to explain the exact relationship and source of the noise [LHC11, KHKC10].
Finally, traps must be built such that moving ions without motional state heating is possible with a high rate of success [WMI+98, Lei09]. The difficulty in the case of optical cavity-integrated traps is that the loading region of the trap, that is the region through which the stream of atoms crosses the trap to be ionized, should be far from the mirror to prevent degradation of the mirror quality. Consequently, in order to bring the ion closer to the mirror, it is necessary to transport it along -
the trap axis without heating it out of a stationary motional state. This process, called shuttling, necessitates the gradual, although not necessarily adiabatic, sliding of the
17

trap potential along the trap plane [Sch09, HouO8].
1.2 Ion traps as force sensors
Ion traps are also excellent systems for characterizing external properties of a system. As a charged particle with low mass confined in a nearly-harmonic potential, the ion represents a very high quality oscillator, being isolated from its environment (with low damping in the absence of laser cooling) and highly sensitive to displacement from the desired trapping point. This property may be undesirable in the case that one wishes to remain in a particular motional state, as in quantum information-
 experiments, as the ion's interaction Hamiltonian coupling to the electric field can result in heating to higher motional states over time.
However, the sensitivity of the ion to external electric fields may also be seen as a great advantage. Ions represent an excellent system with which to characterize stray electric fields. The smallest displacement of the ion from its trapping location results in an oscillatory pattern that depends upon the stray fields of the ion, which can be detected and use as a probing field microscope. Prior experiments [NDM+11] have demonstrated the feasibility of mobile ions as a force probe, observing when-
 the ion absorbs a Doppler-shifted photon to calculate the energy state of the ion. This thesis takes a similar approach, but proposes a method of lock-in spectroscopy to enhance the sensitivity of this technique. This method proves to be an accurate way of calibrating both the surrounding field and the properties of the trap itself.
1.3 Overview of this thesis
This thesis begins with the theory of ion trapping, and leads into an analysis of the voltages required for shuttling. In order to implement the trapping potentials, we introduce a high precision digital-to-analog converter, discuss its calibration, and then observe its properties of flexibility in a trapping experiment. Finally, I present initial results for the novel micromotion detection method discussed at the end of
18

section 1.2 that takes advantage of the capabilities of the digital-to-analog converter.
1.3.1 Contributions
In this work, I contribute software empowering experiments to gain 3 nm-precision control over the transport of single atomic ions and use this to implement various experiments in the field of field sensing. This work involved building the software foundation for analytic calculation of trap potentials and controlling the digital analog converter to implement these potentials. However, this work builds on the work of many. The digital to analog converter box was built by Isaac Chuang based on a de-
sign by Chris Pearson, and later calibrated and modified by me to achieve higher speed. The aforementioned micromotion detection method is the brainchild of Michael Gutierrez, improving upon a previous method of resonance-based micromotion detection [NDM+11]. I carried out this experiment with assistance from, and taking advantage of the cryogenic imaging systems previously established by, Amira Eltony. Michael Gutierrez and I worked in parallel on the design of the ion trap using the analytic mod-
el developed in House [Hou08], and he developed and finalized the design of the trap while I provided input and verified the model. The trap was ultimately fabricated by Molu Shi and Yufei Ge.
1.3.2 Contents
The remainder of this thesis is divided according to distinct theoretical and experimental aspects of the ion trapping and shuttling experiment.
Chapter 2 discusses the theoretical aspects of ion trapping, encapsulating important results in ion trapping physics and apparatus design. This chapter also contains a discussion of the theoretical aspects of ion shuttling, that is, transporting the ion's confining potential along one axis of the trap in such a way that heating is minimized.
Chapter 3 examines the implementation of a high-precision digital-to-analog Converter (DAC) to create the trapping potentials discussed in chapter 2. This chapter concludes with results from the initial demonstration of trapping with the
19

DAC. Chapter 4 demonstrates the use of the DAC of chapter 3 to correct for motion of
the ion due to offset from the rf null, a generally undesirable phenomenon called micromotion. Two feedback algorithms are described for reducing micromotion, including a novel method of lock-in spectroscopy, and using the micromotion-compensated ion, the heating rate of the motional state is measured.
Chapter 5 contains a reflection, analysis and outlook for the future of the pCavity trap experiment.
20

Chapter 2
Theory of Ion Trapping
This chapter discusses the critical aspects of ion trapping which are relevant to this thesis work. In section 2.1, we examine planar Paul traps in further depth, analyzing how the layout of electrodes on the surface results in the required potentials to trap an ion. In section 2.2, the equations of motion of trapped ions in Paul traps are calculated using Floquet theory. This section introduces several critical notions to describe the motion of a trapped ion in a general Paul trap, such as secula-
r oscillation and micromotion. In section 2.3, we use our new understanding of the equations of motion of trapped ions and pair this to the potential field due to a planar electrode, enabling an analysis specifically for ions in a planar Paul trap. These analytic principles are applied to trap design in section 2.4. Finally, we introduce the principle of shuttling and analyze its viability in the pCavity trap in section 2.5.
2.1 Planar Paul Traps
In a planar Paul trap, a time-varying radiofrequency (rf) potential is applied to a pair of electrodes, resulting in a potential that alternates between confining and deconfining in a specified direction. This traps the ion at a time-averaged potential minimum which is typically hundreds of microns above the planar surface.
The first step is to determine how the layout of electrodes affects the ability to trap ions. The simplest way to shape a confining potential is to break the in-plane
21

y

gnd-

z1

v0 v8
v2 v10 v3 V11 v4 A12 v5 v13 v6 v14

(a) Trap labelled with channel names, axes.

(b) CAD rendering of the trap, demonstrating the experimental installation orientation of the trap.

Figure 2-1: Tower of London trap. (Scale: diameter ~ 12.7 mm.)

symmetry of the trap surface and define an axial axis z in which the rf field is nonconfining; the remaining two axes, the radial axes, alternate in being confining or deconfining, but over time average to be confining. The radial axes are labelled as x (the in-plane radial direction) and y (the out-of-plane radial direction), as shown in the upper right hand corner of Figure 2-1(a). The rf electrodes (pink in Figure 2-1(a)) are oriented along the axial axis and by symmetry can not produce an elec-
tric field in the axial direction. Instead, a static electric field from dc electrodes is used for axial confinement. These dc electrodes are segmented on the planar surface to provide a potential well in z for axial ion trapping.
In practice, at least four electrodes (plus the two rf electrodes) are required in order to achieve the minimum required degrees of freedom for trapping. Careful selection of the dc electrode potentials allows the ion to be moved along the trap axis while remaining trapped by the rf potential in the radial plane. This process is called shuttling and is discussed further in section 2.5.
The segmented electrode configuration designed for the pCavity experiment is
22

also shown in Figure 2.1. These direct current electrodes are displayed in blue. The arrangement of electrodes, known as the "Tower of London" design, allows ions to be shuttled through manipulation of the sixteen segmented outer electrodes (vW - v15). These electrodes provide axial confinement as well as the capability for shuttling. A central ground electrode runs between the two rf electrodes, which can be utilized to reduce the voltage applied to the outer segmented electrodes.

2.2 Equations of motion of a trapped ion
We begin by analyzing the motion of the ion from a classical approach. The potential
# in a Paul trap takes the form

#(x, y, z, t) = #dc (X, y, z) + #rf (X, y, z) cos(Qt)
where #dc is a static potential and #rf is an oscillatory potential with angular frequency
Q. The ion is trapped when the gradient of the potential vanishes. Requiring the constant potential offset to vanish at the trap center, we can drop the first two terms in a Taylor expansion about the trap center, resulting in the approximate potential

#(x, y, z, t) = I
2

ac
89xiox

xix3 + I cos(Qt)
2

( 2a#x'ac /
Jxiax;

where xi (i = 1, 2, 3) represents ion displacement from the trap center in three dimensions. A singly ionized (Z = 1) atom of mass m in this potential thus satisfies the equation of motion

d2X,

m

=-e

:+ -asd

dt2

j

{

a2 brf1
a

cos Qt xj.

(2.1)

Rewriting this equation in terms of new variables

AZ3

4Ze (2a9$dc
mQ2 y

_ 2Ze (92rf
maXaxj2 (x 2 DXa 23

= t

(2.2)

2

we recover the multidimensional Mathieu equation

d2

dr 2 + [A + 2Q cos(2r)]x =0.

(2.3)

Hence, A = [Aij] and Q = [Qij] are unitless measures of the curvature of the potential. Often, the matrices A and Q are simultaneously diagonalizable. In those occasions,
the Mathieu equation reduces to the one-dimensional analog of equation (2.3). In
this case, one can determine a range for the scalar quantities ai =Ai and qi = Qjj
such that the motion of the ion in the direction xi is confined.

Even when A and Q cannot be simultaneously diagonalized, the Mathieu equation
(2.3) may still be solved in general using techniques from Floquet theory [Hou08]. Defining
x

equation (2.3) can be rewritten

n = Fu

(2.4)

where

I3

03x3(25

A + 2Qcos(2T) I3

The solution to the differential equation (2.4) is a result of with Floquet theory; the

solution is found to be

u(r) = elb(r).

(2.6)

where bQr) is periodic with period 7 [HouO8]. If (and only if) p,, is purely imaginary
for all i so that p, = i03, for #3, real, then every mode of the motion is stable and
the ion will oscillate with unitless frequency 0#,/2, or w, = 3Q/2 in units of inverse time. This frequency is known as the secularfrequency and describes the fundamental frequency of oscillation of the ion in the confining potential.

24

U
S25( an
EL20( 0)
U
i515(

Figure 2-2: Equi-pseudopotential contours.

Expanding equation (2.6) in a Fourier series, we find

x(r) - e

S00 bne 2 n.
n=-oo

(2.7)

and substituting this result into the equation of motion yields a relationship for the Fourier coefficients bn. If the rf driving frequency Q is much greater than the trap secular frequencies, as is typically the case, then the secular motion dominates: The first-order Fourier coefficient bo is greater in magnitude than all other coefficients, the b±1 terms are greater in magnitude than the b± 2 terms, and so on for each successive order. In this case, the secular motion of the ion reduces as clai-
med to a confining time-averaged potential, called the pseudopotential energy, which is given by [Hou08]

= Z 2 Vr .2 4mO

(2.8)

This potential vanishes at the rf potential minimum, as required. Figure 2-2 shows the equi-pseudopotential contours between the electrodes v3 and v 11 (recall Figure 21(a)), demonstrating the nearly harmonic potential at the trap center as well as the loss of confinement for large y.
In the case that the separable Mathieu equation has small, stable stability pa-
rameters (at, qi < 1), the ion equation of motion may be written in a particularly
25

revealing way. In this case, the motion is given (to first order in q) by

zi = Xo cos(wit + di) (I + cos(Qt))

(2.9)

where

si ~ 2-

(2.10)

is the secular frequency of the trap, d3 is a term accounting for the freedom to choose
the origin of time, and Q is the angular radiofrequency of the trap, as before [ITU11]. Thus the secular motion of an ion in a trap is modulated with a beat pattern at the rf frequency. This motion is called the micromotion and is an intrinsic feature of radiofrequency (Paul) traps. The oscillation amplitude may be suppressed by laser cooling techniques.

If, however, there is a uniform dc electric field near the pseudopotential minimum, the ion will be shifted off of the potential minimum and driven by the radiofrequency field. In this case, the equation of motion takes a different form, resulting in motion coherent with the trap radiofrequency drive [ITU11]:

Xi(t) = eE mWo2

() cos(wit + #i) I + i cos(Qt))

f

2

(2.11)

Confusingly given their differing origins, this phenomenon, too, is termed micromotion, and this micromotion is the focus of this thesis since it may be cancelled by eliminating stray dc fields. This micromotion can be minimized, and this minimization is the subject of chapter 4.

2.3 Analytic model of a planar Paul Trap
We now follow the analytic model of [HouO8] to derive the electric potential at the ion due to a single square electrode on the trap. By superposition, the entire trap can be analyzed by summing the contributions to the potential from each electrode. Therefore, the analysis of a single square electrode readily extends to an expression
26

for the potential of the entire trap.

In this analysis, we assume that the electrode occupies a square on the trap (y = 0) plane with opposing corners (x1 , z1 ) and (x 2, Z2). To simplify the analysis, we assume that the plane outside of the trap is grounded. The problem reduces to
solving Laplace's equation V 2 #(x,y, z) = 0 (that is, equation (1.1)) on top of the
plane (y > 0) subject to boundary conditions at infinity,

#(x, y, z) -+ 0 as y -* o,

#(x, y, z) -* const. as x, z -+ o0

(2.12)

as well as boundary conditions on the plane specifying that the electrode is held at a

voltage V,

{ (x,0,z) 0

if xi < X < X2 and z1 < Z < Z2 otherwise

(2.13)

Applying the discussion of Earnshaw's theorem from section 2.1 to this static electric potential, at least one direction must be non-confining, so that k2 = 0. We select the y direction to be deconfining, so that

k =i/k2+ kz.

Substituting this into a Fourier expansion and taking the real part, we find

0

0

A 1(kx, kz) cos(kxx) cos(kzz) +A 2 (k,, kz) cos(k~x) sin(kzz) +A 3(kx,k) sin(kxx) cos(kzz) +A4(kx, kz) sin(kxx) sin(kz)

where the Ai(kx, kz) are prefactors dependent on k. These can be extracted by integrating over the radial spacetime dimensions x and y:

27

J A 1 (kx, kz) = 2 dzj dx (x, 0, z) cos(kxx) cos(kzz)
A 2 (kxI kz) = j dzj dx $(x, 0, z) cos(kxx) sin(kzz) A 3 (kx, kz) = 2 dz dx p(x, 0, z) sin(kxx) cos(kzz)
A 4 (kx, kz) 2 dz dx $(x, 0, z) sin(kxx) sin(kzz)
Evaluating this integral, we gain the following important result: if an electrode at potential V occupies the on-plane rectangle (x1, x 2) x (zi, z 2), then its potential is given as a function of position by

V

arctan

(x2-x)(z2-z)
Y\y 2 +(x2-x) 2 +(z2

z) 2

-arctan

(Xi -x)(z2-z) Y Ny 2 +(x1-x) 2 +(z2-z) 2 ,

27 - arctan

(2X2X)(Z-Z)

+ arctan

(orX)(Z1-Z)

vy+(X2 -x)2+(z1 -Z)2

(Y Vy2+(x1-_x)2+ (zIz)

As previously mentioned, superpositions of this potential gives the potential everywhere in space. The planar trap can be well-modeled by this type of analytic analysis. However, there were some assumptions that enter into the model construction which are unphysical. For instance, the assumption that the y = 0 plane is grounded outside of the trap electrodes is incorrect, although easily mitigated by extending the electrodes far enough that the effect on the ion is reduced by the inverse-r depende-
nce of the potential from a charge distribution. This problem also extends to the gaps in between the electrodes on the trap, which must be present and reasonably large to minimize the likelihood electrostatic breakdown, shorting and capacitative coupling between the rf and dc electrodes. House [Hou08] estimates the correction for these gaps are second order in the gap width, and in practice the analytic model is a reasonable approximation. The gaps in the Tower of London traps are approximately 1-
0 pim in width, far smaller than the center electrode width of 163 pum.

28

2.3.1 Trap parameters
Several parameters are particularly important in designing an ion trap. The trap center is the location in the radial (z = 0) plane of the rf potential minimum. The off-plane distance of the trap center is called the trap height, and is typically specified to allow room for laser cooling beams to avoid skimming the trap and cause laserinduced charging [WLL+11]. Deviations of the ion from the trap center result in the rf oscillation pattern described at the end of section 2.2.
Given the boundary conditions at infinite y used to derive the trap equations of motion, the pseudopotential cannot be confining for an atom of arbitrarily high energy. Instead, the pseudopotential energy attains a saddle point, called the escape point. This property is evident from Figure 2-2. The value of the pseudopotential energy at this point is called the trap depth, and serves as a metric of the maximum energy of an ion that can be trapped. Since higher trap depth makes it easier to trap an-
 energetic ion, trap depth is an important parameter to maximize in the design process. The geometry of a planar trap is generally less suitable for shaping potentials than 3D traps, and consequently cannot usually match those trap depths. Nevertheless, planar Paul traps are still capable of trapping ions with a depth of hundreds of milli-electron volts, which is orders of magnitude greater than the typical trap depths for magneto-optical traps of tens of milli-electron volts [RPC+87].
Since the Q matrix represents the curvature of the potential due to the rf elec-
trodes, it is diagonal in a symmetric trap (i.e. a trap when the rf electrode widths are the same, so that the trap has mirror symmetry across the middle of the center electrode). Consequently, the secular axes, the principle axes of motion of the ion, are determined by the eigenvectors of the A matrix.
2.4 Trap design with the analytic model
The above sections present an exact strategy for designing the layout of trap electrodes: maximize desirable trap properties, such as trap depth for a given trap height, with respect to the geometry of the trap. Since the solution for the potentials is an-
29

Tp depth of rf electrodes in a symmetric planar Paul trap

135-

130-

57125E
= 120-
- 115C.
110

105

100

-

98.4

0.6

0.8

1.0

1.2

1 4

1.6

ratio, rf electrode width to ground (b/a)

Figure 2-3: Analytic evaluation of trap depth versus ratio of rf width to ground width.

alytic, this process is considerably faster than a finite-element method or boundary value method.
This method is often used to maximize trap depth over some range of parameters. This technique is useful in determining the relative size of the rf, segmented dc and ground electrodes. Since the solution to Laplace's equation are scale-invariant, we pose the problem in the following way: what ratio of dc electrode width to rf, or rf width to ground, maximizes the trap depth? In Figure 2.4, we plot the trap depth as a function of rf width. The maximum at b ~ 1.2a is consistent with the predictions -
of House [Hou08].

2.5 Shuttling
An ion trap gains several additional useful features when the ion is mobile. One can use the ion as a mobile force probe, as one may develop a sense for the spatial dependence and correlation function for the electric field along the trap axis. Provided the axial confining potentials are varied in such a way that the trap characteristics are not altered, the ion acts like a mobile atomic force microscope cantilever, coupling to stray fields in a deterministic way. The shuttling of ions is a critic-
al goal in the pCavity project and is here analyzed from a physical and technical perspective using
30

the analytic model previously derived.

2.5.1 Theory

The essential aspect of the shuttling experiment is that the trapping potential should
move smoothly along the trap [SchO9]. Therefore, the problem of shuttling is to
ensure that the electric field must vanish at the trap center and the curvature of the matrix must be specified by the original A matrix; additionally, one would also minimize the total voltages required to shuttle as well, in order to minimize the power requirements. In an untilted shuttling problem, left and right-hand side electrodes can be tied together to achieve the mirror symmetry condition, so that all of the parameters except Azz are already specified. Let Vk denote the voltage applied to-
 the kth electrode. In the symmetric case, the shuttling problem is to minimize i V2 subject to the conditions that the dc electric field vanishes at the trap center (Vdc= 0), and that constant potential curvature in the z direction is maintained at the ion position, i.e.

minimize Z V2

subject to

=d0c 1i=, 1,2, 3 8xi &82dce 4Ze a(92z2 mnQ2 Az = (const.)

where #dc = Odc(V) is a function of the voltage applied to the electrodes, evaluated
at the trap center, and which by the principle of superposition is a linear function in
Vk:
.dc kqde,k k
where #dc,k is the potential at the trap center due to the kth electrode.
This minimization problem may be solved using the method of Lagrange multipliers. Define the Lagrange multipliers a (i = 1... m, where m is the number of

31

constraints in the problem). Then define the new objective function

f >V2±

(

objective
and the constraint function

S dc,i
1x

+ e+Va20dye,i + a3

,

+ aV) (92O)

constraints (evaluated at trap center)

Vdc1
g(Vi, - -- Vn) = 2 dc

-

2
OZ

- at trap center

Using Lagrange's method, the optimization problem can thus be rewritten as the

system

0

af
a Vi

0 o= ff
a

This reduces to

4Ze mQ 2

A ZZ

J

0 = 2E V +c

8 d c ,
09X

j +

a2 %2

7(9

+

a 3 V,

a7dc,i
(z9

+

a4% a2 (9z2

LVOqdc 0

2 85 dc,i VX2

m4ZQe2AA

which is a system of linear equations in Vi and ai. Rewriting in terms of a matrix

32

equation,

2

0

...

0

aeDdcx,1

aD4dyc,1

adDcz ,l

a2Dzd2c,-

V1

00

o

2

DkBd0c,2 D9Ddyc,2 aDDdzc,2 a2+Dkzd2c,2

V2

o

2

D

a acndcn

adcn a 2 'dc~n

V

0x

Dy

Dz

Dz 2

n

DNdc,1

Odc,2 ..

dc,n

0

0

0

0

aZ

Dx

Dx

ax

Ddc,1 Odc,2

Dqde,n

0

0

0

0

Dy

Dy ...

Dy

a2

Dkdc,1
Dz

Odc,2 Dz

D d,n

0

0

0

Dz

0

a3

a2___

______

______adc

D a,

D|2

--- ata"z"

0

0

0

0

a4

0
0
0
4e mQ2AZZ
(2.14)

and the square matrix may be inverted to solve for the dc potentials V.

This process is easily generalized to constraints beyond the case of untilted shut-

tling, for which one simply needs to specify additional constraints corresponding to

enforcing the desired A matrix in order to maintain the eigenaxes of the trap motion

throughout the shuttling process.

With a rf frequency Q/2-r of 36 MHz and rf amplitude of 300 Vpp, the desired

secular axial frequency of wz = 27 x 0.50 MHz and a tilt of the secular axes of 15'

in the radial plane, the voltages for shuttling in the Tower of London trap are shown

in Figure 2-4, where the labels correspond to those in 2-1(a) and the remainder of

channels are grounded. This graph demonstrates the shuttling voltages required to

shuttle from the center of one pair of electrodes to the center of the adjacent pair, in

this case from the center of v3/v11 pair to the v4/v12 pair. Shuttling through the

remainder of the trap required nearly identical voltages to these, requiring potentials

modified only on the order of single millivolts by effects from broken symmetry while

transporting along the trap axis.

2.5.2 Requirements for Shuttling
Using the above model, we can calculate the necessary dc voltages for shuttling in the TOL trap. The following discussion assumes a rf frequency Q/27 of 36 MHz and
33

Shuttling voltages

-10o
0
-200--300

1V2
- v3

-

v54

- v11 v12
- v13 v4

-300

-200

-100

0

100

200

300

z (pm)

Figure 2-4: Analytically-determined shuttling voltages at a constant axial secular frequency wz = 27r x 500 kHz and 15' radial tilt in the Tower of London trap.

rf amplitude of 300 Vpp. The desired secular axial frequency was wz = 0.400 MHz. The simulation assumes a trapped ion with the charge and mass of SSSr+. Using the electrode width definitions from Figure 2-5, the simulation assumed a center electrode width of a = 163 microns, rf electrode widths of b = c = 194 microns, and segmented electrode widths of w = 597 microns. There were no gaps in the model. The segmented electrode widths were modeled as finite squares which extended between 398 to 548 mi-
crons in the x direction.

a
Figure 2-5: Electrode definitions for the simulated TOL trap.
From these calculations, the currently available voltage range of -20 V to 20 V is sufficient to shuttle, although the tilting angle is limited to around 0.1 rad ~ 60 if one wishes to shuttle from one electrode to the next. Generally, one wishes to maximize the tilt angle to maximize the component of the secular motion that falls onto the
34

cooling laser axis, so generally it is desirable to be able to exceed the ±20 V range. Indeed, if the experimenter wishes to specify every element of the A matrix and
thereby preserve the radial secular frequencies and radial-plane tilt along the trap, the shuttling voltages immediately begin to exceed 20 V and rise higher still at greater tilting angles. The complete results are displayed in Figure 2-6(b).
4 'aximum Vd,, constant sec. freq. (pCavity TOL trap)
35030E 25--
(U
E 20 --
1.0 0.1 0.2 0.3 0 4 0.5 0.6 0.7 0.8 Tilt angle 9 [radians]
(a) Holding all three secular frequencies constant, as well as tilt in the radial plane.
Ma 'mum voltage required for shuttling (pCavity TOL trap)
on35-
0
U 30-
25-
28.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8
Tilt angle 0 [radians] (b) Three-dimensional tilt constraint.
Figure 2-6: Voltage range requirements for different shuttling criteria.
2.6 Summary
This chapter introduced the most important aspects of ion trapping physics and summarized an analytic model of the potential from a square electrode. We discussed the motion of an ion in a radiofrequency radially confining potential and demonstrated the application of this model to the electrodes in a planar Paul trap. These trapping
35

potentials are put to the test in the next chapter, where the potentials are implemented with a digital-to-analog converter. We revisit the stray field micromotion again in chapter 4, when we discuss methods of minimizing stray fields by examining Doppler cooling profiles of the ion.
36

Chapter 3
High precision digital-to-analog
Converters for ion trapping
We saw in chapter 2 how the segmented dc electrodes of a planar Paul trap can be used for confining and shuttling an ion. In order to perform these important tasks reliably, it is critical to have a stable, programmable and non-noisy voltage source for each electrode. Various commercial power supply systems exist but are typically not designed to produce the array of output channels and smooth changes in voltage required for shuttling an ion. This chapter discusses an alternative approach: a high -
speed, high precision, multichannel digital-to-analog converter (DAC). The DAC is a flexible and low-latency way to control the segmented electrodes on our ion trap. The components involved in the DAC board are discussed in section 3.1, and calibration of these components is discussed in section 3.2. We consider the benefits and potential applications of using a DAC in place of power supplies. The software powering the DAC in discussed in section 3.3. Finally, we discuss the use of the DAC to perf-
orm initial trapped ion experiments in section 3.4.
3.1 Specifications
The essential components of the DAC board are shown in Table 3.1. These components were built on a PCB and integrated into a box to shield noise and present the
37

Type DAC Arduino Operational Amplifier Regulator

Manufacturer Linear Technology
AdaFruit Burr-Brown National Semiconductor

Part Number LTC2600
ATMega32u4-breakout OPA2604AP LM2937ET-5.0

Table 3.1: Parts list for the digital-to-analog converter box.

serial

Vret 4.096V

R3 10k (1%)
R20 12.5k (1%)

R11 50k (1%)
C23 100 pF

E
g-ngnd
5V -5V 1- CS/LD
1- SCK

ouVout Iou+

ATMega32u4 LTC2600 DAC

+24V reg
-24V reg
(x8)

R28 25k (1%)1

Figure 3-1: Schematic of signaling chain with DAC.

voltage output via 8 grounded BNC cables.

3.1.1 Digital-to-analog Converter
The digital-to-analog converter chosen for our experiment was the Linear Technology LTC2600 octal 16-bit rail-to-rail DAC. In addition to guaranteeing monotonicity, the LTC2600 offers high precision and an -10 microsecond update time.

3.1.2 Amplifier
The LTC2600 provides a voltage range of 0 to 4 volts, which is far less than the bipolar voltage range of tens of volts typically required for trapping ions. Therefore, the LTC2600 is accompanied by an operational amplifier circuit which brings the overall voltage range to -20 to 20 volts through 10-fold amplification and 4.096 V reference.
38

DAC voltage shift over time

25% of full range

-X

50% of full range

0 0

75% of full range

*0

4- -
-
0

Linear fit Linear fit
Linear fit

2 4

6

8 10 12 14 16 18 Days

Figure 3-2: Drift in DAC output voltage at three DAC set points (25, 50, 75% of the full -20 to 20 V range) over time, with linear fit to guide the eye.

Combining the DAC and amplifier circuit, the resultant system is capable of producing the full spectrum of voltages from -20 to 20 V to a precision of 0.6 mV.

3.2 Calibration
3.2.1 Linearity
The digital-to-analog converter, while highly monotonic, was not perfectly linear over its entire range of operating voltages. Voltage values differed slightly from day to day, resulting in a drift of a few millivolts over the course of several days. Figure 3-2 shows the drift of three different channels over the course of fourteen days.
Since the precision of the DAC is 0.6 mV, this shift is non-negligible and must be corrected for in code. In order to perform this correction, the software accompanying the DAC (see section 3.3) includes a calibration script for scanning over the complete range of the DAC and performing linear interpolations between calibration points to achieve a high degree of precision across the entire voltage range of the DAC.
39

-: -55 i -65
- 75

- -- --- --- ---

- - -.-.-..

- Filtered
-

. .. . .. .-...-... --.--.-_-- ---

---......

4-1 5 -

0- -1 5 -

-

1 .0

0.5

1.0

1.5

2.0

2.5

Frequency [MHz]

Figure 3-3: DAC power spectral density from oscilloscope traces, with and without 10 kHz RC filter.

3.2.2 Noise

Temporal noise is a critical concern for the DAC. In particular, noise in the frequency spectrum near the secular frequency of the trap could potentially drive the ion near resonance, resulting in ion heating. The effect of near-resonance driving of the ion via stray electric fields is further discussed from a micromotion perspective in chapter 4; in the meantime, it will suffice to say that temporal noise near the secular frequencies of the trap generally represent an undesirable source of ion he-
ating.
The noise of the DAC was observed (see Figure 3-3) by downloading ten oscilloscope traces with and without filtering, by connecting a scope probe to the DAC ribbon cable output. Without a filter, the DAC was observed to have a substantial power spectral component in the megahertz frequency regime, a significant barrier since this regime is typically where the secular frequencies of traps reside. However, the trap electrodes are filtered with a 10kHz RC lowpass filter which substantially reduces th-
e spectral component in the megahertz regime. Recreating this filter this filter on a prototype board with a 1 kQ resistor and a 10 nF capacitor, the power spectral density in the MHz regime was reduced from ~ -100 dB/Hz to - -130 dB/Hz.
While recreating the trap characteristics is a fair way to test the noise characteristics of the DAC, a better test still is to compare the heating rate of the ion with the DAC to the heating rate when using commercial power supplies as the voltage
40

1.2
1
0.8 0.6 >0 0.4 0.2
0 0

0.2

0.4

0.6

0.8

Time [ps]

(a) Slew rate.

1.2

(minimum)

1

0.8

0.6 >0 0.4

0.2

0-

I

I

I

1

0 1 2 3 4 5 6 7 8 9 10

Time [ps]

(b) Square wave.

Figure 3-4: Two methods of measuring DAC update speed.

source. This test requires scanning the sidebands of the atomic transitions to extract the heating rate. The initial experimental work on compensating for stray fields is the subject of the following chapter, while section 5.2.2 discusses further tests to perform with the DAC.

3.2.3 Speed
There are two methods of measuring the response speed of the DAC. One can choose to measure either the slew rate, which measures the rate of change of voltage as the DAC is updated. Alternatively, one can measure the settling rate, for example by applying a square waveform and observing the minimum square wave length such that the DAC is able to sweep the full voltage range. These two methods of measuring speed are shown schematically in Figure 3-4.
The slew rate of the DAC was measured to be 3.1 V/ps and the update rate for a single channel was measured to be 8±1 ps using a square wave height of 0 to 1 V, in comparison to the spec sheet quotes of 3.2 V/ps (adjusted for amplification) and 10 ps. Microsecond precision was the limiting source of error on the update rate, as the custom-built calibration software used to measure the update speed only guarantees microsecond-level resolution delay times. The update rate scaled linearly with the num-
ber of channels, as expected.
In addition to concerns about DAC speed, an additional concern is that the speed of communication with the DAC is rate-limiting and therefore that the above discus-
41

Figure 3-5: Block diagram of ZACI modules.
sion is moot. In practice, the delay due to finite serial baud rate of 115200 bits per second is on the order of, and in fact is slightly faster than, the delay due to settling time.
3.3 Computer interface
The DAC is controlled via an AdaFruit ATMega32u4-breakout Teensyduino, a compact microprocessor which receives commands via an inbuilt serial port and updates the digital-to-analog converter via Serial Peripheral Interface. The microprocessor was programmed to support setting both individual channels at a time as well as setting several values in bulk, which has the advantage of requiring fewer commands.
Clearly, interfacing with the microprocessor needs to be as seamless as possible. In order to provide a friendly user interface to the DAC functionality, I developed a suite of Python module-based software called ZAC1. This software is divided into several submodules. The ZACi communicates directly with the DAC, accounting for linearity and offset calibrations and setting the voltage of the DAC as close to the set point as possible. The software is accompanied by a logic script which performs the -
calibration of the DAC. Thanks to its integration with a custom-built Python module PyIontrap which encapsulates the analytic results from the previous chapter, the software is capable of calculating the analytic voltages for trapping and shuttling,
42

as well as calculating pseudopotentials and dc potentials. The modular design of PyIontrap allows the library to be reused for the purpose of analytic trap design and modeling, and is further capable of drawing an arbitrary electrode geometry for future integration into the software interface. A block diagram of the software layout is shown in Figure 3-5.

0 x -

DATA ACQ

File Logic 10 Control
Device(directory)

Run(file)

Save Print Delete Blog GFX

I/0 ABORT
Set ZAC Mnull ModeL
Geometry: ucavity.tsv WF [MHz]: 28.0 RFAmp[V]: 0.3
Model-hardware interface: Trapmodel Hardware
Channels:
Registereido streamzac

* - - Set ZAC Manually Memory Zeroallchannels

Load

Channel13: 2768 counts=0.00000 Channe2l: 32768 counts= 0.00000

volts
: volts

Channe3l: 32768 Channe4l: 31926 Channe5l: 32768 Channe6l: 32768 Channel73: 2768

counts= 0.00000 count=s 0,00000 count=s 0.00000 counts= 0 00000 counts 0o0OOO

volts Z volts
volts volts volts

Channe8l: 32768 counts= 0,00000 volts

Se AC

x U ZACCatibratlon

File Channel1: r-2012-04-10-15-50-12txt -

Y1 Y2

Channel2: i-2012-04-10-lS-SO-1 txt -

Channel3: 201204-10 15-50-12.txt

Channel4: 2012-04-10-15-50.t-x1t2 v

Channel5:12012-04-10-15-50-12 tat -

Channe6l: -201204-10-15-50-t1a2t

ChanneTl f-201204-10-15-50-1tx2t ,

Channel: t-2012-04-1-1S-W0-12ta,t

Figure 3-6: ZACI embedded in the custom-built laboratory data acquisition program.

ZACI has many convenient features such as integrated analytic calculation of trapping potentials using the analytic model for chapter 2, scripts to calibrate the linearity, noise and speed of the output, and a memory to record specific potentials for later use. Many of these features are shown in the screenshot of ZACi in Figure 3-6. ZACI was integrated into the custom-built laboratory data acquisition program DAQ to improve the experimental workflow.

3.4 Integration into ion trap experiment
The first test of the digital-to-analog converter took place in the closed-cycle cryostat described in technical detail in [ASA+09]. The experiment was performed at 4 Kelvin
43

with an rf drive of 300 millivolts peak-to-peak at a angular drive frequency of 27 x 28 MHz. Due to manufacturing issues related to rf electric breakdown in the Tower of London trap, this experiment and the remainder of the thesis was experimentally performed on a variant of the Tower of London called TOL-Superman. Except for a different fabrication process, the trap is effectively the same configuration of electrodes; see Figure 3-7. The trap was manufactured on a 0.5 mm thick wafer of quartz wit-
h a 100 nm thick niobium layer sputtered at 200 'C. The electrodes are labelled as before, except only electrodes v0, v1, v2, v8, v9 and v0 were attached to the DAC; the remainder of the electrodes were grounded. The names of the channels were chosen so that the loading zones of the TOL trap and the TOL-Superman trap would be the same.
Figure 3-7: TOL-Superman trap. Electrode names are selected to match the microcavity loading zone. Green and red spot indicates trapping zone. (Scale: square width = 10.4 mm)
One additional implementation detail is of note: all of the trapping experiments were performed with strontium ions (88Sr+). This ion is ideal for several reasons: it has no nuclear spin, hence no hyperfine structure to complicate the state diagram; has convenient optical transition wavelengths; and has a high relative abundance [Lei09]. The cooling laser used for this ion is a 422 nm beam.
The signal chain shown in Figure 3-8. The analytic potentials calculated from section 2 were successful in trapping individual Sr ions. The voltages before and after compensation are shown in Table 3.2 for both tilted and untilted experiments. For
44

Radiofrequency (28 MHz)

Figure 3-8: Signal chain for the initial ZAC digital-to-analog converter trapping tests.

simplicity of the initial trap operation, only 6 electrodes were wired to the experiment, which was reflected in the model by grounding the unused channels in the optimization problem.

Channel' Untilted [V]

vO

4.092

V1

-3.866

v2

4.091

v8

4.091

v9

-3.867

v1O

4.091

15' Tilted [V] 14.5646 -7.446 14.562 -7.328 0.609 -7.328

1 Unlisted channels are all grounded.

Table 3.2: Untilted and 15' tilted trapping potentials in the loading zone in the Tower of London-Superman trap with six electrodes.

3.5 Summary
The DAC proved to be a convenient and accurate method of controlling the trap electrodes. Various techniques were used to correct for the DAC offset and nonlinearity but excellent monotonicity properties were observed. The DAC was measured to be a very fast (less than ten millisecond per channel update rate) method of applying desired voltages to the trap electrodes. While the power spectral density of the DAC were observed to be quite low at or near the secular frequencies after a 10 kHz filter, -
further tests should be performed in the trap to determine whether the small effect
45

Figure 3-9: CCD image of an ion trapped with the DAC. (Scale: 3.58 pm across.) of electric field noise is observable as a source of ion heating.
46

Chapter 4
Micromotion minimization and
trap characterization
Minimizing the stray electric fields experienced by a trapped ion is critically important in any Paul trap. As discussed in section 2.2, any uniform dc electric field near the ion pushes the ion off the rf null, which results in oscillation synchronous to the rf field called micromotion. Micromotion causes broadening of the ion's electronic transitions, leads to a higher limit for Doppler heating, and leads to heating of the ion [NDM+11]. A deeper overview of micromotion is the topic of section 4.-
1.
Several schemes for quantifying and compensating for micromotion have been demonstrated in ion traps [BMB+98, ITU11, NDM+11]. In this chapter, we review the ideas for and present our implementations of two such schemes: a gradient-based method that works for any dimension in which the cooling laser has some projection (section 4.2), and a method called lock-in tickle spectroscopy (section 4.3) which was used successfully to observe not only micromotion amplitudes but to characterize the secular fr-
equencies of the trap as well.
4.1 Micromotion compenstion
As previously mentioned, micromotion is the result of dc fields pushing the ion off of the rf null. These fields can be cancelled by repurposing the direct current electrodes
47

-- Ex

Ey

Ez

Figure 4-1: Micromotion compensation pairs in the x, y and z direction.
that provide axial confinement of the ion to the additional purpose of creating uniform electric fields. In this way, the experimenter can create a compensating electric field in each of the three dimensions, canceling the dc fields and minimizing the micromotion. To accomplish this, there should be a reliable way to apply a field that lies solely each of the three orthogonal directions. These fields can be determined by applying symmetry considerations to the direct current electrode potentials. -
Figure 4-1 shows the compensation pairs required to compensate dc fields in the x, y and z directions. With these compensation pairs, it is possible to apply compensation fields at the trap center with a precision of 0.5 - 0.6 volts per meter.
There remains the question of how to observe the micromotion of the trapped atom; the experimenter requires a reliable method of determining the components of micromotion oscillation along all three axes. The simplest method of measuring micromotion is to apply a Fourier transform to a photon counter signal and evaluating at the rf frequency. This quantity, after normalization by the overall counts, is the micromotion amplitude signal, and represents the component of fluorescence due to rf-driven -
oscillation due to the Doppler shift. It is this micromotion signal that the experimenter uses as the objective in the minimization problem.
However, by the nature of this measurement, the photon counts only measure micromotion along a direction for which there is some projection of the cooling laser. This projection issue is an intrinsic technical difficulty for planar Paul traps. For reasons of laser-induced charging and trapping efficiency, it is undesirable to apply any laser beam that reflects off the trap, although this method of micromotion detection has been implemented by breaking the mirror symmetry of the trap in reflections-
 across the axial axis, which poses its own difficulties [ASS+ 10]. In contrast, in a three-
48

Micromotion am litude with comnensation

fa C.
-0.04

0.28

C 0.02
E
0 U
N 0.00
0

0.24 0.20 0.16

0.12 -L 0.02
0.08

S0.04

0.04

0

-0.10 -0.08 -0.06 -0.04 -0.02 0.00 Voltage applied to X compensation pair

Figure 4-2: Micromotion amplitude change from scanning compensation pair voltage in an untilted trap.

dimensional quadrupole trap, the experimenter can easily pass a laser beam through the electrode poles and obtain a projection in each axis. For symmetric traps like the one under consideration in this thesis, only the micromotion components parallel to the trap can be reliably measured with this scheme. We discuss one method for circumventing this problem in section 4.3.

4.2 Gradient-based x-micromotion minimization
Figure 4-2 demonstrates the variation in micromotion amplitude from application of a variable compensation voltage in x and z, the planar directions in which the cooling laser has some projection in our setup. The micromotion exhibits a clear minimum when applying compensation in the x direction. Despite having some projection of the cooling beam, the z axis has no visible micromotion, likely due to its low axial secular frequency (of hundreds of kilohertz). Rather than sweeping over the full rang-
e of these compensation pairs, it is desirable to develop an algorithm to perform this compensation-based minimization intelligently.
Applying a variable compensation field precisely in the x direction and measuring the resultant signal, one may implement a gradient descent algorithm to minimize the micromotion signal. If the fundamental axes of the secular motion are tilted, then
49

this compensation field will affect both radial directions; consequently, micromotion will be suppressed in both radial directions. A simple variant of gradient descent was implemented in our experiment. Starting from a trapping potential, we applied x-direction compensation pair fields in user-defined steps, starting with a field corresponding to hundreds of volts per meter in the x direction at the trap center. If the micromotion signal decreases, the algorithm continues to increase the compensa-
tion pair voltage in this direction. However, if the micromotion signal worsens (i.e. increases), the algorithm reverses the sign of the step and halves the step size in order to traverse the entire space. This stepping process repeats until the precision of the digital-to-analog converter is reached.
This process was repeated almost every occasion after an ion was trapped in the red cryostat experiment. One example is shown in Figure 4-3.

Micromotion minimization with gradient descent 0.20

. 0.15E C 0.10 -
0
E 0 0.05~-
0.0%.04

--- Micromotion amplitude
Start point
* End point
-0.03 -0.02 -0.01 0.00 0.01 0.02 Voltage applied to X compensation pair [VI

Figure 4-3: Micromotion minimization along the x (coplanar radial) direction with a simple gradient-based minimization algorithm.

Over the course of several days, the compensation amount typically ranged from 30 to 40 mV, corresponding to an uniform x electric field at the trap center of between 250 and 320 V/m. The compensated voltages are listed in Table 4.1.

4.3 Lock-in tickle spectroscopy
An alternative method of micromotion minimization [NDM+ 11] happens to be useful for purposes of trap characterization as well. In this scheme, the radiofrequency
50

Channeli

Analytic Untilted [V] Tilted [V]

v0

4.092

14.564

vI

-3.866

-7.446

v2

4.091

14.562

v8

4.091

-7.328

v9

-3.867

0.609

v10

4.091

-7.328

x-Compensated 2
Tilted [V]
14.596 -7.482 14.581 -7.375 0.648 -7.360

Unlisted channels are all grounded. 2 Compensation voltages for April 20, 2012.

Table 4.1: x-compensated 15' tilted trapping potentials in the Tower of LondonSuperman trap.

electrodes are used to generate an additional electric field in the off-plane (y) direction. This field is designed to oscillate at a secular frequency of the trap for which the rf electrodes have some projection (the y direction in an untilted trapping potential, or both x and y radial directions in a tilted potential). Since the rf field is designed to vanish at the trap center, an ion sitting precisely at this point will experience no field, but an ion sitting slightly off-center will act as a -
driven oscillator with an extremely
high Q factor. The location of the resonance corresponds to a secular frequency of the
trap. Therefore, by mixing sidebands into the radiofrequency signal with a specified frequency and scanning this frequency over a range on the order of megahertz, one can simultaneously observe the trap frequencies as well as the strength of the off-null micromotion, and thereby characterize the trap potential in addition to minimizing micromotion.
This method can be improved further by considering the Fourier phase near resonance instead of frequency. One can observe the secular frequencies of the trap even when the micromotion signal is suppressed or driven at a weak frequency, as the phase will still undergo a 90' phase change across resonance even if driven quite weakly.
51

4.3.1 Theory

The equation of motion for an ion undergoing Doppler cooling in a harmonic confining potential is the same as that of a harmonic oscillator with a friction term,

z + zi+W2Wzi i = 0

where wi is the secular frequency along the x axis. Applying a uniform timedependent electric field Ei(w) results in a driving term F(t) = eEi(t), or

x2j +y -: + i-w2xi

e - () m

Applying a Fourier transform,

m
where z = F{x} and 53(w) = F{Ej(t)}. Therefore, the Fourier response function
exhibits a characteristic amplitude and phase relationship with the driving field:

|z ) =

W)2

(4.1)

argz(w) tan-1 ( 2(4.2)

From the amplitude equation (4.1), we see that the amplitude of oscillation is maximized if the ion is driven at close to its secular frequency, i.e. when W = wi. The phase too undergoes a change as w is scanned near wi, undergoing a characteristic 7 phase shift.

This ion motion is detectable through fluorescence spectroscopy. The ion scattering rate depends on detuning from resonance of the 422 nm Doppler cooling laser incident on the ion. Assuming that the laser frequency linewidth is the natural linewidth '/27r = 21 MHz, i.e. assuming power broadening is suppressed, the ion

52

scattering rate takes the form of a Lorentzian in the center laser frequency v:

So

S('/) =1 + (27[v - Vpeakl) 2 /F 2

(4.3)

Typically, the center frequency v is detuned from Vpeak close to F/47r for optimum Doppler cooling [Win79]. However, the ion motion produces some variation in the frequency in the ion reference frame from the Doppler effect.. Let vi denote the velocity of the ion in the xi direction (i = 1, 2, 3). Expanding equation (4.3) to
second order about the Doppler cooling frequency v' = vo + F/47 and substituting
the equations of motion derived in chapter 2, the scattering rate becomes

So [I v'vV,+ v'1 VII(V 2 +0

S1=+2

++

Vi )3-

(4.4)

The first term in equation (4.4) is suppressed by a factor of v'/(Fc) ~ 0.1, but is proportional to v and thus averages to zero by symmetry. The second term is suppressed by 12 ~ .0003, but does not average to zero. Consequently, the timeaveraged Doppler-shifted counting rate is highly suppressed relative to the overall signal. However, using the principle behind lock-in detection, applying a homodyne signal and observing relative phase shifts, it is possible to observe this first-order term, a mu-
ch stronger signal of micromotion excitation [NDM+111.

The setup and expected results are schematically represented in Figure 4-4.

Even without lock-in, it is possible to perform two functions: to measure the height of the resonance peak and thereby the strength of the dc fields around the trap center, and to determine the secular frequency of the trap. The advantage for lock-in measurement is primarily in the latter function, as lock-in measurements are far more sensitive than simply observing the increased fluorescence, and therefore may be performed effectively with a lower tickling amplitude. As a result, the properties o-
f the trap change less during the measurement, reducing the change in secular frequency wi - w where

3=1 w

(4.5)

53

-----------------Standard Method
6v<

10Counter

L

10

-I Laser- f-requ-enIcy --

Photon

sync

in

I

Lock-in Detection

: C

T
1n

------------------I _

-or\/\/\

422 nm laser

den

s no 0 Tickle u

Couplers,

RF

Figure 4-4: Block diagram of the tickle spectroscopy experiment with expected outcome. The couplers and mixers in the rf chain are shown in Figure 3-8.

which can be used to estimate the systematic error of this method.

4.3.2 Experimental setup
The measurement chain for our lock-in tickle spectroscopy experiment is shown in Figure 4-5. The rf function generator for the rf trap electrodes (an Agilent 33250A function generator with frequency Q/2-r) is passed through a coupler (MiniCircuits ZDC-10-1 directional coupler), from which some small portion of the amplitude is extracted. This is mixed (with a MiniCircuits ZFM-3 frequency mixer) with a local oscillator signal from a second function generator to generate a tickle signal WT. The mixe-
d signal produces a superposition of waves with angular frequencies Q ± WT. The resultant signal is recombined via a coupler with the rf signal to produce the carrier radiofrequency signal at Q, and amplified with a helical resonator inside the cryostat. This radiofrequency is passed through BNC cables to the trap rf electrodes. Since the couplers reduce the amplitude of the radiofrequency signal, we increased the pre-helical resonator amplitude of the rf drive to 345 mVpp in order that the post-
54

Radiofrequency (28 MHz)
Figure 4-5: Measurement chain for tickle spectroscopy and micromotion minimization. helical resonator amplitude would remain at 280 Vpp, the estimated rf amplitude corresponding to an rf drive of 300 mVpp before the helical resonator.
The fluorescence of the ion is measured with a photomultiplier tube which is recorded and binned by a photon counter. The photon counter communicates to the computer via USB. The TTL sync signal from the tickle generator, which varies with the tickle set frequency, is divided and used as the photon counter clock to provide phase synchronization for the lock-in measurement. The tickle frequency is swept via GPIB while the Fourier amplitude and phase of oscillation at WT is read off from the photon -
counter.
The gradient descent algorithm from section 4.1 was modified to minimize dc field micromotion-induced tickle spectroscopy peaks, which increased the sensitivity of the algorithm to fine adjustments in micromotion amplitude as well as allowing for compensation in the vertical direction in which the cooling laser has no projection.
4.3.3 Results
Figure 4-6 shows an x-compensated ion passing through a tickle resonance both forward and back. The tickle amplitude was set to 200 mV, which was highly suppressed due to it being off-resonance from the helical resonator (i.e. rf) frequency. The scan involved cycling forward and backward once, whence the error bars were derived. We
55

used a 250 ms integration time for the photon counter. While the counts shows no clearly discernible response at this low tickle amplitude,
the phase and amplitude fits both reveal the functional form of a driven oscillator passing through resonance, although the residuals of the amplitude fit shows some structure near the resonance crossing. This source of error may be due to hysteresis effects from performing the secular frequency scan in both directions which resulted in different heating processes on the forward and reverse cycles. Nevertheless, the
900 phase shift is clearly visible and the fits are reasonable, with X2 = 2.38 and
2.07 for the amplitude and phase fits, respectively. The discrepancy between the amplitude theoretical form and observed values are likely the result of hysteresis, as the ion tended to heat quickly while crossing resonance and thus the resonance shifted depending on the scanning direction. This phenomenon was observed to materially affect the position of the Fourier amplitude scan but not noticeably perturb the Fourier phase, which is responsible for the relatively better fit of the phase scan.
Using the phase fit, the secular frequencies are determined to be
w2/27 =(1.064 ±stat 0.0001 tsys 0.008) MHz.
wU/2r (1.40 ±stat 0.00002 ±sys 0.01) MHz.
The first error term in each result is due to statistical fluctuations in the counts due to the underlying Poissonian distribution of the photon counter counts; the second error term is the estimated systematic error based on the shift in secular frequencies from equation (4.5) using an analytic evaluation of the factor qj. The Nyquist resolution was a negligible source of error. The axial secular frequency was not measurable with this method, as the rf electrodes cannot create an electric field i-
n this direction by symmetry and thus cannot be used to drive the ion in the axial direction.
To compare with the analytic model, we need to know the rf amplitude applied to the trap. Unfortunately, a calibration of the rf chain at the trap was unavailable at publishing time to determine the exact rf amplitude after the helical resonator, as the helical resonator is mounted inside the cryostat with no connection available
56

Counts/s

61000

60500 -

%0. *.00 *

.

-

60000

-.

.

- *..-'

- . * . 0-,

*.*...*

**

. 0. *.

.00

* .0 .

" .

-

-

0 -

0 U

59500

-. *

- *.

* -*

* -* -. -e ** %

59000

-.*

-

58500

1.0 bU 1.Ub2

1.064

1.066

Tickle frequency WT/27r [MHz]

CU E 0
C
:3

E
CU-

LL

1.060

1.062

1.064

1.066

Tickle frequency WT/ 27r [MHz]

~0
U
4
_0
3

Phase
Fit to #=tan~1 (yW/(wO2 u2) wo/27r=1.064t0.008 MHz
7=(1.69±0.09) x103 Hz

CU 2

L- 1 *
0 U-
n
1.060

*

1.062

1.064

1.066

Tickle frequency wT/27r [MHz]

Figure 4-6: Tickle spectroscopy raw results and theoretical fits for the x secular frequency scan.

57

for monitoring (see, e.g. [Wan12]). However, since the rf amplitude enters into both of the radial secular frequencies, one may test the model and experiment by finding the rf amplitude that gives one of the radial secular frequencies and comparing the prediction for the other.
Thus we hold one of the secular frequencies constant and compare with the other radial direction. With an rf drive of 274.44 Vpp at 28 MHz, the model of chapter 2 predicts for the same tilted dc voltages

W274.44 vpp 2-r x (1.064, 1.353) MHz.

(4.6)

which gives a value 4.5o- from the measured value in the y direction. With an rf drive of 285.10 Vpp, the model predicts

W28 5.10 vpp =27r x (1.120, 1.397) MHz

(4.7)

which is 7cr from the measured value in the x direction. However, using an rf drive of the arithmetic mean of these two powers, i.e. of 279.77 Vpp, the model predicts radial secular frequencies of

W279.77 vpp 27r x (1.092, 1.375) MHz

(4.8)

which is 3.5cr and 2cr different from the measured values, respectively. The agreement with the analytic model is not perfect, but the simplifying assumptions in the model suggest that the error may lie with the model itself. For example, the model does not account for the gaps between electrodes, which are 10 pm wide and potentially non-negligible compared to the rf electrode widths of ~ 200 Pm. The discrepancy may also be explained as a consequence of anharmonicities in the trapping potential, a-
s the analytic secular frequencies in this case were derived from second derivatives of the trapping potentials rather than fitting a parabola to the potential well.
The y-micromotion compensation was successfully minimized to within noise levels using the algorithm described in section 4.3.1. The y-compensated electrode values
58

are shown in Table 4.2.

Channel' Analytic

vO

14.564

vI

-7.446

v2

14.562

v8

-7.328

v9

0.609

v1O

-7.328

x-Compensated 14.596 -7.482 14.581 -7.375 0.648 -7.360

y-Compensated' 14.614 -7.451 14.613 -7.357 0.659 -7.357

Unlisted channels are all grounded. 2 Compensation voltages for May 3, 2012.

Table 4.2: y-compensated 150 tilted trapping potentials in the Tower of LondonSuperman trap.

4.4 Summary
Micromotion may be seen as either a desirable or an undesirable element of Paul traps, depending on the investigation at hand. This section has shown some ways in which micromotion can be invaluable from two perspectives, both as an electric field sensor and as a method for characterizing the trap. Analysis revealed that the micromotion in the radial direction can be used to recast the ion as a forced harmonic oscillator, and resonance of the oscillator can be observed via lock-in spectroscopy. Us-
ing this method, the secular frequencies of the trap are extracted and agree with the model to better than 3.5o. The ability to compensate of both calibrations benefits from the high-precision digital-to-analog converter from chapter 3.

59

60

Chapter 5
Conclusion
This thesis work has laid the groundwork for ion shuttling in an optical cavityintegrated planar Paul ion trap, but several aspects of this project are still being developed. These future plans build on the work already performed in this thesis, from analytic trap modeling and comprehension of the voltage requirements for shuttling to tests of the high resolution digital-to-analog converter for trapping. In section 5.1, we take a look back at the work done in this thesis and how this work will be -
extended upon in the future as part of the grander pCavity trap experiment. In section 5.2, we turn our attention to the future, discussing aspects of the experiment that will be performed once the final trap environment is ready.
5.1 Review
The first section of this thesis addressed issues of trap design with an analytic approach to modeling the ion trapping potential. The voltage requirements for shuttling have been analyzed as a function of the tilting angle in a realistic ion trap. In order to implement the trapping potentials thus calculated, I have documented my calibration and trapping experiments using a high-precision digital-to-analog converter. This work has produced the ability to control the ion to a calculated precision -
of three nanometers. The essential elements of shuttling are now well-understood as a result of this work. The precise voltages, constraints on shuttling and the accompanying
61

hardware/software are now fully documented. The flexibility of the DAC has proven itself in practice when used to observe mi-
cromotion for the purpose of trap characterization. We have seen how the DAC can be used to correct for micromotion due to stray external dc electric fields with high precision, and considered two strategies for minimizing micromotion. Alternatively, micromotion has proven to be an invaluable method of characterizing the trap. The method of lock-in measurement of the micromotion signal and the subsequent micromotion minimization has shown the viability of the DAC as a tool for changing the positio-
n of the ion about the trap, and the experimental model for the dc field matches within 3.5o- to the analytic solution.
5.2 Outlook and plans for the future
Various elements of the pCavity project proved to take longer than originally budgeted for. Initial trapping efforts were hindered by an unexpected problem in fabrication leading to electrical breakdown at relatively low radiofrequency amplitudes, which limits its ability to trap. As a result of synchronicity problems relating to the manufacturing delay, several plans for the pCavity experiment were not ready in time for the completion of this thesis publication. However, when these problems are s-
olved, this work will have placed the experiment on solid ground for near-term completion of the shuttling project.
The following suggested areas of research and experimentation build off the work of this thesis and bring it closer to the end-stage goal of an optical cavity-integrated ion trap.
5.2.1 ZAC2
There are several modifications to ZAC1, both hardware and software related, which would be desirable for the next generation of shuttling experiments. Some of these ideal features include:
62

" A greater voltage range through greater post-DAC amplification, up to ±40 V or ±80 V. Since bipolar amplifiers are often limited to near ±20 V and a higher range is desirable for raising the axial secular frequency, this change will probably necessitate specialty audio-based amplifiers.
" Built-in analog-to-digital converters to perform the voltage linearity calibration from chapter 3 automatically.
* A second LTC2600 DAC and amplifier board to gain access to an additional 8 channels, bringing the total to 16 and providing a sufficient number of channels to shuttle the ion across the full range of the Tower of London trap.
* Ability to draw the trap electrodes within the ZAC2 software. There exists the capability for this functionality already, but it has not been implemented in the GUI.
" FPGA control of the DAC to allow for simultaneous setting of each of the DAC channels.
While none of these features prevented ZACi from successful integration in the cryostat experiment, the larger voltage range in particular would improve shuttling capabilities as discussed in section 2.5.2.
5.2.2 Heating rates with trapping location variation
Even before shuttling can be implemented in the trap, it will be very useful to obtain measurements to confirm or refute the rate of anomalous heating discussed in chapter 1 as a function of distance from trap dielectrics. With the ZACI software developed and discussed in chapter 3, this endeavor will be straightforward once a trap compatible for shuttling is available. This transport may either occur through shuttling or by changing the trap height by varying the confinement secular frequency.
The methodology of measuring of heating rates is well-established and involves the measurement of red and blue sideband transitions from the primary motional state
63

transition, the relative amplitude of which is nonlinear in the motional quantum number [Labi1]. Recent data measuring heating rates in this manner was taken recently [Wan12], and the lasers required to address the sideband transitions are presently available for use. The current experimental barrier is calibration of the cooling laser motor-controlled stage to follow the ion as it is transported about the trap. Work is being performed now to complete this calibration. 5.2.3 Optical cavity trap in-
tegration This thesis serves as proof-of-concept that the digital-to-analog converter and associated software is suitable for implementing sophisticated ion trapping techniques like micromotion minimization. When it comes time to integrate ZAC into the optical cavity ion trap, there is now a host of calibration and preliminary experimental data performed that will put this effort on a solid footing.
64

Bibliography

[ASA+09] P B Antohi, D Schuster, G M Akselrod, J Labaziewicz, Y Ge, Z Lin, W S Bakr, and I L Chuang. Cryogenic ion trapping systems with surface-
electrode traps. Review of Scientific Instruments, 80(1), 2009.

[ASS+ 10]

D T C Allcock, J A Sherman, D N Stacey, A H Burrell, M J Curtis, G Imreh, N M Linke, D J Szwer, S C Webster, A M Steane, and D M Lucas. Implementation of a symmetric surface-electrode ion trap with field compensation using a modulated Raman effect. New Journal of Physics, 12(5), May 2010.

[BMB+98] D J Berkeland, J D Miller, J C Bergquist, W M Itano, and D J Wineland. Minimization of ion micromotion in a Paul trap. Journal of Applied Physics, 83(10), 5025-5033, 1998.

[DOS+06] L Deslauriers, S Olmschenk, D Stick, W Hensinger, J Sterk, and C Monroe. Scaling and Suppression of Anomalous Heating in Ion Traps. Physical Review Letters, 97(10), 2006.

[Ear42]

S Earnshaw. On the nature of the molecular forces which regulate the
constitution of the luminiferous ether. Trans. Camb. Phil. Soc, 7, 97-112, 1842.

[ESL+07]

R J Epstein, S Seidelin, D Leibfried, J H Wesenberg, J J Bollinger, J M Amini, R B Blakestad, J Britton, J P Home, and W M Itano. Simplified
motional heating rate measurements of trapped ions. Physical Review A, 76(3), 2007.

[Hol02]

M H Holzscheiter. Ion-Trap Quantum Computation. Los Alamos Science, (27), 2002.

[HouO8]

M House. Analytic model for electrostatic fields in surface-electrode ion traps. Physical Review A, 78(3), 2008.

[HWS+11] P F Herskind, S X Wang, M Shi, Y Ge, M Cetina, and IL Chuang. Microfabricated surface ion trap on a high-finesse optical mirror. Optics Letters, 36(16), 3045-3047, 2011.

65

[ITU11]

Y Ibaraki, U Tanaka, and S Urabe. Detection of parametric resonance of trapped ions for micromotion compensation. Applied Physics B: Lasers and Optics, 105(2), 219-223, 2011.

[KHKC10] T H Kim, P F Herskind, J Kim, and I L Chuang. Surface-electrode point Paul trap. Physical Review A, 82(4), 2010.

[KimO8] H J Kimble. The quantum internet. Nature, 453(7198), 1023-1030, 2008.

[KPM+05] J Kim, S Pau, Z Ma, H R Mclellan, J V Gates, A Kornblit, R E Slusher, R M Jopson, I Kang, and M Dinu. System design for large-scale ion trap
quantum information processor. Quantum Information & Computation, 5(7), 515-537, 2005.

[Labll]

J Labaziewicz. High Fidelity Quantum Gates with Ions in Cryogenic MicrofabricatedIon Traps. Ph.D. thesis, Massachusetts Institute of Technology, September 2011.

[Lei09]

D R Leibrandt. Integrated chips and optical cavities for trapped ion quantum information processing. Ph.D. thesis, Massachusetts Institute of Technology, 2009.

[LHC11]

GH Low, P F Herskind, and I L Chuang. Finite-geometry models of
electric field noise from patch potentials in ion traps. Physical Review A, 84(5), 2011.

[MD02]

H Mabuchi and A C Doherty. Cavity Quantum Electrodynamics: Coherence in Context. Science, 298(5597), 1372-1377, 2002.

[MSW+08] A H Myerson, D J Szwer, S C Webster, D T C Allcock, M J Curtis, G Imreh, J A Sherman, D N Stacey, A M Steane, and D M Lucas. High-Fidelity Readout of Trapped-Ion Qubits. Physical Review Letters, 100(20), May 2008.

[NDM+11]

S Narayanan, N Daniilidis, S A Moeller, R Clark, F Ziesel, K Singer, F Schmidt-Kaler, and H Haeffner. Electric field compensation and sensing
with a single ion in a planar trap. Journal of Applied Physics, 110(11), 2011.

[NHTD80] W Neuhauser, M Hohenstatt, P E Toschek, and H Dehmelt. Localized
visible Ba+ mono-ion oscillator. Physical Review A, 22(3), 1137-1140, September 1980.

[Pau90]

W Paul. Electromagnetic traps for charged and neutral particles. Reviews of Modern Physics, 62(3), 1990.

[RPC+87] E Raab, M Prentiss, A Cable, S Chu, and D Pritchard. Trapping of
Neutral Sodium Atoms with Radiation Pressure. Physical Review Letters, 59(23), 2631-2634, 1987.

66

[Sch09]

S Schulz. Scalable Microchip Ion Traps for Quantum Computation. Ph.D. dissertation, Universitst Ulm, 2009.

[Ste97]

A Steane. The ion trap quantum information processor. Applied Physics B: Lasers and Optics, 64(6), 1997.

[Wan12] S X Wang. Quantum Gates, Sensors, and Systems with Trapped Ions. Ph.D. thesis, Massachusetts Institute of Technology, 2012.

[Win79] D J Wineland. Laser cooling of atoms. Physical Review A, 20(4), October 1979.

[WLL+11] S X Wang, G H Low, N S Lachenmyer, Y Ge, P F Herskind, and I L Chuang. Laser-induced charging of microfabricated ion traps. Journal of Applied Physics, 110(10), 2011.

[WMI+98] D J Wineland, C Monroe, W M Itano, D Leibfried, B E King, and D M Meekhof. Experimental issues in coherent quantum-state manipulation of trapped atomic ions. Journal of Research of the National Institute of Standards and Technology, 103(3), 259-328, 1998.

67

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:52.347Z
- **Text Length:** 92146 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
