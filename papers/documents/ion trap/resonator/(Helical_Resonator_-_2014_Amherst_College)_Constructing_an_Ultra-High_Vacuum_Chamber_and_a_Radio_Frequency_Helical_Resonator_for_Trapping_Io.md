# PDF Document: (Helical Resonator - 2014 Amherst College) Constructing an Ultra-High Vacuum Chamber and a Radio Frequency Helical Resonator for Trapping Ions.pdf

**File Path:** (Helical Resonator - 2014 Amherst College) Constructing an Ultra-High Vacuum Chamber and a Radio Frequency Helical Resonator for Trapping Ions.pdf

**Processed Date:** 2026-02-10T18:17:08.350Z

**File Size:** 16243.16 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 1092

**Title:** (Helical Resonator - 2014 Amherst College) Constructing an Ultra-High Vacuum Chamber and a Radio Frequency Helical Resonator for Trapping Ions

**Collection:** Ion Trap

---

## Extracted Text Content

Constructing an Ultra-High Vacuum Chamber and a Radio Frequency Helical Resonator for
Trapping Ions
Phyo Aung Kyaw
Advisor: Professor David A. Hanneke May 5, 2014
Submitted to the Department of Physics of Amherst College
in partial fulﬁlment of the requirements for the degree of Bachelors of Arts with honors
c 2014 Phyo Aung Kyaw

Abstract
We describe the construction of an ultra-high vacuum (UHV) chamber and a radio frequency helical resonator for use in co-trapping atomic and molecular ions. Cleaning procedures for the in-vacuum components are provided. These procedures give positive results in cleaning copper electrodes. The thesis also provides general UHV construction techniques and design choices for our UHV chamber.
For the helical resonator, we design a 20 MHz resonator with a high quality factor and have built a preliminary version, whose resonant frequency matches with theoretical predictions. However, the measured quality factor diﬀers signiﬁcantly from the predicted values.
The UHV chamber and the RF resonator are essential for trapping ions using a linear Paul trap. Ion traps have applications in mass spectrometry and quantum information processing. We aim to use our ion trap apparatus to perform precision measurements on atomic and molecular ions which can be excellent probes for time-variation of electron-proton mass ratio.

Acknowledgments
First, Professor Hanneke, thank you for your patient guidance throughout this thesis project. You are always resourceful and patiently answer all the questions that I have. It has been a great learning process to work in your lab.
To Jim Kubasek and Norm Page, I am grateful for your help in building the resonator. Half of this thesis would not have been possible without your help.
And I am grateful to all the professors in the physics department. Your enthusiasm for physics and research have inspired me to do physics. You are always available and supportive. Learning physics has been a major part of my college career; it has been a tough experience but it is a great and a rewarding one.
To all the fellow physics students, thank you. We managed to pass together through the tough physics curriculum at Amherst with problem sessions and iLab experiments in the middle of the nights. To all the physics thesis writers, it has been a pleasure to rant about our theses during this past year.
Thanks to my lovely suitemates and friends from the badminton club for making my non-thesis Amherst senior life enjoyable. I really enjoy spending time together with all of you and feel lucky to have known you.
i

This thesis would not have been possible without generous funding from the Amherst College Dean of the Faculty, the National Science Foundation and the Research Corporation, and I am grateful to them all for their support.
Finally, of course, I am grateful to my parents and family who have always supported me, had faith in me, and urged me to pursue my passions.
ii

Contents

1 Introduction

1

1.1 Quantum Logic Spectroscopy . . . . . . . . . . . . . . . . . . 2

1.2 Linear Paul Trap . . . . . . . . . . . . . . . . . . . . . . . . . 3

1.3 An Overview . . . . . . . . . . . . . . . . . . . . . . . . . . . 4

2 Vacuum Chamber

7

2.1 Sources of gas in a vacuum chamber . . . . . . . . . . . . . . . 8

2.2 Cleaning procedures . . . . . . . . . . . . . . . . . . . . . . . 13

2.2.1 General cleaning procedure . . . . . . . . . . . . . . . 13

2.2.2 Copper cleaning process . . . . . . . . . . . . . . . . . 15

2.2.3 Gold-coating of the copper electrodes . . . . . . . . . . 17

2.3 Bake-out and pump-down . . . . . . . . . . . . . . . . . . . . 20

3 Helical RF Resonator: Theory and Design

26

3.1 Resonant frequency and quality factor calculation . . . . . . . 28

3.2 Impedance matching . . . . . . . . . . . . . . . . . . . . . . . 35

3.3 Design considerations . . . . . . . . . . . . . . . . . . . . . . . 38

3.4 Design process . . . . . . . . . . . . . . . . . . . . . . . . . . . 40

3.5 Tuning . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 45

4 Helical RF Resonator: Building and Testing

51

4.1 Building the resonator . . . . . . . . . . . . . . . . . . . . . . 51

4.2 Testing and data analysis . . . . . . . . . . . . . . . . . . . . 53

4.2.1 Setup . . . . . . . . . . . . . . . . . . . . . . . . . . . 53

4.3 Data analysis . . . . . . . . . . . . . . . . . . . . . . . . . . . 57

5 Conclusion

65

A Estimation of trap capacitance Ct

67

iii

List of Figures
1.1 Fully constructed linear Paul trap . . . . . . . . . . . . . . . . 5
2.1 Diagram of the UHV system . . . . . . . . . . . . . . . . . . . 9 2.2 Sources of gas in a vacuum system . . . . . . . . . . . . . . . 10 2.3 Comparison of dirty and cleaned copper electrodes . . . . . . . 17
3.1 Sketch of a helical resonator . . . . . . . . . . . . . . . . . . . 29 3.2 Equivalent circuit model for the resonator circuit . . . . . . . 31 3.3 Plot of end correction factor vs the coil diameter-length ratio . 34 3.4 Transmitted-input power ratio as a function of load impedance 37 3.5 Circuit of the RF source and the resonator connected to the
trap load . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 38 3.6 The resonator design . . . . . . . . . . . . . . . . . . . . . . . 44 3.7 Relation between trap capacitance, resonant frequency and main
coil winding pitch . . . . . . . . . . . . . . . . . . . . . . . . . 47 3.8 Relation between trap capacitance, quality factor and main coil
winding pitch . . . . . . . . . . . . . . . . . . . . . . . . . . . 48 3.9 Relation between trap capacitance, input impedance and an-
tenna coil winding pitch . . . . . . . . . . . . . . . . . . . . . 49
4.1 The fully constructed resonator . . . . . . . . . . . . . . . . . 52 4.2 Experimental setup to characterize the resonance . . . . . . . 54 4.3 Calibration data for the crystal detector . . . . . . . . . . . . 56 4.4 Frequency spectrum of the unloaded resonator . . . . . . . . . 58 4.5 Input and reﬂected voltages of the resonator as a function of
the RF frequency . . . . . . . . . . . . . . . . . . . . . . . . . 60 4.6 Plot of resonant frequency vs trap capacitance . . . . . . . . . 62 4.7 Plot of measured quality factor vs trap capacitance . . . . . . 63
A.1 Approximation of the trap electrodes as four parallel wires . . 68
iv

Chapter 1
Introduction
This thesis is a part of the apparatus building process in an endeavor to discover whether the electron-proton mass ratio µ = me/mp varies with time. Such an endeavor may seem peculiar given that the two masses are considered as “fundamental constants”. However, changes in such constants have been predicted by certain uniﬁed ﬁeld theories, such as superstring theories and generalized Kaluza-Klein models. These theories predict the existence of extra dimensions, whose expansion or contraction can m-
anifest as timevariation of fundamental constants in 3+1 dimensions. [1] Another reason we are interested in the electron-proton mass ratio is its possible explanation on the relative strength of the electroweak and the strong interactions since the two masses depend on diﬀerent fundamental forces. [2] Thus, a non-zero timevariation of µ can conﬁrm or refute some of the uniﬁed ﬁeld theories and provide us with better understanding of the fundamental interactions.
Inspired by the profound implication of the time-variation of µ on our
1

understanding of Nature, we aim to perform precision measurements of dµ/dt. Molecular transition lines are particularly good probes for testing the variation of µ. In a diatomic molecule, the energy diﬀerence between two rotational energy levels is proportional to the reduced mass M , which varies with the total nuclear mass, hence the total mass of protons in the molecule. On the other hand, the electronic transition energies scale with the mass of electrons me. [3, 4] Therefore, a comparison of -
spectra of rotational transitions and electronic transitions of molecules can give a measurement of µ.
1.1 Quantum Logic Spectroscopy
Although molecules possess transitions sensitive to changes in µ, it is challenging to perform high-precision molecular spectroscopy of these transitions. Spectroscopy usually has four requirements: an atomic or molecular species with a narrow reference transition, possibility of cooling the species to minimize velocity-induced frequency shifts, reliable initial state preparation and eﬃcient state detection. [5] Although simple atoms usually satisfy these, molecules lack the latter three requireme-
nts because of their complicated structures.
Quantum logic spectroscopy oﬀers a solution to this diﬃculty. It involves co-trapping two diﬀerent ions, called the spectroscopy and the logic ions. The simpler logic ion satisﬁes the requirements for cooling, state preparation and detection. The more complicated ion, called the spectroscopy ion, lacks these requirements but has the transitions that we are interested in. These ions can be coupled to each other via the Coulomb interaction when trapped in the same
2

ion trap. This interaction enables the spectroscopy ion to be sympathetically cooled to its motional ground state by the logic ion. And any state manipulation such as state preparation and detection performed on the logic ion can be transferred to the spectroscopy ion. Quantum logic spectroscopy has been realized with an 27Al+ ion sympathetically cooled by a 9Be+ ion. [5] We hope to perform similar spectroscopy on a molecular ion 16O2+ with 9Be+ as the logic ion.
1.2 Linear Paul Trap
Quantum logic spectroscopy requires co-trapping of the two ions, which we plan to perform using a linear Paul trap. The trap contains radio frequency (RF) electrodes that generate a two-dimensional pseudopotential well and direct current (DC) electrodes that conﬁne the ions in the third direction. One may wonder how ions can be trapped since no electrostatic potential minimum can be created in space according to the Mean Value Theorem. However, an oscillating electric ﬁeld of appropriate amplitude-
 and frequency can exert an average force on charged ions towards a potential minimum in two dimensions. A DC potential can be added to conﬁne the ions in the third dimension. [6] Such an ion trap has applications not only in quantum logic spectroscopy but also in mass spectrometry, quantum information procesing and quantum simulations. [7]
An analogy can be drawn between the Paul trap and a rotating saddle device. A small ball, put at the saddle point of this device, will roll oﬀ the
3

surface due to gravity. If the device is rotating around the normal axis through the saddle point, the ball may stay on the surface and oscillate around the saddle point. [6] There is a limited range of frequency for which the ball will stay on the surface. Above this range, the oscillation of the ball around the saddle point is too large to be sustained by the device. Below the range, the device may not be rotating fast enough to compensate for the downward force of the gravity. The only diﬀerenc-
e between this analogy and our ion trap is that the trap potential is alternating high and low between the two electrodes rather than rotating.
Shenglan Qiao [2] has studied linear Paul traps extensively and built an ion trap suitable for trapping 16O2+ and 9Be+. Fig. 1.1 shows a picture of the constructed ion trap. The trap consists of two RF electrodes for the oscillating potential and two 5-segment rows of DC electrodes for a step potential well. We plan to use a 500 V, 20 MHz RF signal to produce a trap of radial potential depth 25.4 V (25.4 eV for singly charged ions) and a 5 V DC signal for an axial potential depth of 5 V, which sho-
uld deep enough to conﬁne both ion species we intend to trap. [2]
1.3 An Overview
To trap ions successfully, the ion trap needs to be sealed inside an ultra-high vacuum (UHV) chamber with pressure between 10−7 Pa and 10−10 Pa. The lower the pressure, the better it is for trapping ions and performing quantum logic spectroscopy. Some air molecules at room temperature may have enough
4

Figure 1.1: The linear Paul trap constructed by Shenglan Qiao [2]. The trap comprises two RF electrodes and two 5-segment rows of DC electrodes, and is built to conﬁne 9Be+and 16O2+with a 20 MHz RF signal.
energy to knock the trapped ions out of the potential well. Lower pressure reduces the number of such particles that can interfere with the motion of the trapped ions and makes it possible to trap ions for longer times, allowing for better precision. At UHV pressures, we should be able to trap ions for hours or longer. The ﬁrst part of this thesis describes the process of constructing a UHV chamber for our experiment.
Constructing a UHV chamber requires procedures more complicated than simply pumping out air from the chamber. Materials contain adsorbed and dissolved gases, and at such low pressures, these gases can come out of the bulk of the materials into the chamber, a phenomenon known as outgassing. Outgassing is a slow process that usually dictates the lowest achievable pressure and the time required to pump down a system to the UHV pressures. Therefore, UHV construction techniques mainly involve reducing -
the reserve
5

of adsorbed and dissolved gases and increasing the outgassing rate during the pump-down process. Chapter 2 describes general UHV procedures that include design consideration for components inside the vacuum chamber, rigorous chemical cleaning of these components, baking the chamber to control outgassing rate and pumping the gases out of the chamber.
In addition to the UHV chamber,the ion trap requires a narrow band-width RF signal to produce a pseudopotential well. Because of the possible power reﬂection from the ion trap if it is directly connected to an RF source, it is desirable to match the impedances of the trap and the source. Moreover, a narrow band-width signal can be produced by a resonator with a high quality resonance at the desired frequency (20 MHz for our trap). A helical resonator of a practical size can produce resonance in th-
e radio frequency range with a narrow bandwidth and allows for impedance matching.
A helical resonator consists of a cylindrical shield with a wire coiled into a helix at the center of the shield. The resonator can be considered as an eﬀective RLC circuit that resonates with a narrow band-width. The resonant frequency and the quality factor of the resonator depends on the resistance, capacitance and inductance of the coil, the shield and the ion trap, which in turn depend on the geometry of the resonator. The latter part of this thesis describes the process of designing, buildin-
g and testing a high quality resonator at 20 MHz. Chapter 3 provides the theory of the helical resonator and the process of designing a resonator with the desired resonant frequency and a high quality factor. Chapter 4 presents the process of building the resonator and subsequent experimental characterization of the resonance.
6

Chapter 2
Vacuum Chamber
To achieve long trapping times for quantum logic spectroscopy, the ion trap and other related components need to be sealed inside an ultra-high vacuum chamber. An ultra-high vacuum is deﬁned as the pressure range between 10−7 Pa and 10−10 Pa. [8] Our ion trap is designed to provide a potential well that is deeper than the average energy of air molecules at room temperature. However, the energy of air molecules has a Maxwell distribution and a molecule at the higher end of the distribution may have-
 an energy high enough to knock the trapped ion out of the trap. In addition, we are planning to co-trap an atomic ion with a molecular ion and the latter has rotational states that can be easily thermalized by room temperature collisions. The lower the vacuum pressure, the lower is the probability of such collisions and the more stable the trap will be.
Ultra-high vacuum systems for ion trapping usually contain a main chamber in which the experiment takes place and pumps and pressure gauges that
7

are usually connected to the chamber via tubes. Our vacuum system, as shown in Fig. 2.1, consists of a 10-port main chamber (8 ports on the side, one each at the top and the bottom) which will house the ion trap, a beryllium oven as a source for 9Be+and an electron gun for ionization of atoms and molecules. Six of the sideways ports are reserved for laser access, the top for imaging and the bottom for vacuum feedthroughs. One of the remaining sideways ports is for a feedthrough to relay the RF sig-
nal to the RF electrodes and the other port is connected to UHV instruments such as vacuum pumps, an ion gauge and a leak valve for controlled infusion of gas molecules for quantum logic spectroscopy.
The main source of gas contributing to the pressure inside a vacuum chamber is outgassing from the surface and the bulk material rather than the atmospheric gas present in the volume of the chamber. Accordingly, most ultrahigh vacuum construction techniques are concerned with reducing the reserve of gas that can outgas and increasing the outgassing rate during the pumpdown process for faster pumping. This chapter describes our design options and procedures in constructing the UHV chamber that will-
 house our ion trap.
2.1 Sources of gas in a vacuum chamber
The lowest achievable pressure of a UHV chamber and the time required to pump down the chamber to this ﬁnal equilibrium pressure are dependent on the amount of gas released from the bulk material and other virtual leaks present in the vacuum components. Sources of gas inside a UHV system include gases
8

To roughing station Ion gauge
Non-evaporable getter pump and ion pump

Leak valve Vacuum chamber Linear Paul trap Helical RF resonator

Figure 2.1: Diagram of the UHV system with helical RF resonator. A section of the vacuum chamber is cut out to show the inside of the chamber. The stainless steel nipple housing the ion gauge is shown as transparent. For length scale, the diameter of the helical RF resonator and that of the top viewport ﬂange of the vacuum chamber are 6”.
trapped in the volume and on the surface of the bulk material, vaporization of the components, permeation from the outside environment and gases trapped in enclosed cavities inside the vacuum chamber. Fig. 2.2 shows an illustration of these sources of gas. The sources continually introduce gas into the vacuum chamber during and after the pump-down process so it is important to reduce gas contribution from these sources as much as possible when constructing a UHV chamber. This section explains thes-
e sources of gas and material choice,
9

design consideration and procedures required to eliminate them.
Figure 2.2: Carton of the sources of gas in a vacuum chamber.
One of the main sources of gas in a UHV chamber is outgassing from the bulk of the chamber components, also known as volume outgassing. Gases can be dissolved inside the bulk of materials during fabrication processes and due to diﬀusion from the atmosphere. [9] These gases can escape from the bulk of the materials due to the concentration gradient when the chamber is pumped down to low pressures. Volume outgassing can be reduced by appropriate choice of materials that have been produced with as li-
ttle contact with air as possible. For instance, electrolytically tough pitch (ETP) copper is usually not vacuum compatible because of the copper oxide it contains; oxygen free electronic (OFE) copper, on the other hand, is usually used for UHV applications for its reduced copper oxide content. For some materials such as stainless steel, volume outgassing can also be signiﬁcantly reduced by high-
10

temperature vacuum baking to lower the initial concentration of the trapped gas or air-baking to form an oxide layer on the surface as a barrier to passage of gas out of the bulk of the material. [8] In addition, raising the temperature of the entire chamber during the pump-down stage increases the outgassing rate, thereby reducing the time required to reach the ﬁnal pressure. [9]
Adsorbed gases can also escape from the surfaces inside the vacuum chamber. Adsorption occurs when a gas molecule bombards a solid surface and sticks to it because of the van der Waals forces of the particles on the surface. These gas molecules may escape from the surface when they acquire suﬃcient energy to overcome the attractive van der Waals force. [9] The amount of such adsorbed gases may be reduced by rigorous cleaning of the surfaces inside the vacuum and heating the chamber to increase the-
 outgassing rate before and during the pump-down stage. [8]
The bulk material can also introduce gases into the vacuum system by vaporization or permeation from the outside environment. Vaporization occurs when atoms or molecules of a solid obtain enough energy to overcome the binding force of the solid. [9, p. 13] Materials diﬀer in their rate of vaporization, also known as vapor pressure, and it is important that all the components inside a UHV chamber are made of materials with low vapor pressure. For example, zinc, cadmium, selenium and sulfur (hence, -
certain alloys of stainless steel, namely 303Se and 303S)are not suitable for UHV application due to their high vapor pressures. [8, p. 291] Atmospheric gases, especially hydrogen, can permeate into the vacuum chamber due to the pressure diﬀerence between inside and outside of the chamber. Certain materials such as nickel
11

and palladium have high hydrogen permeability and are unsuitable for a UHV system. [8, p. 292] Therefore, appropriate choice of materials is important to reduce gas contribution from vaporization and permeation.
Virtual leaks, gases trapped inside non-air-tight enclosed volumes, are another possible source of gas inside a UHV system. During assembly of a vacuum system, air may be trapped inside blind screw holes that are not entirely ﬁlled by a screw. When the system is at UHV pressures, such trapped air may leak through the threads of the screw into the vacuum due to the diﬀerence in pressure between the trapped volume and the vacuum system. Depending on the pressure diﬀerence and the conductance of the -
screw threads, it may take days or longer to remove the trapped gas. [9, p. 12] This signiﬁcantly increases the time required to pump down the system to the ﬁnal equilibrium pressure. Sources of virtual leaks can be eliminated by appropriate design considerations such as drilling additional holes to the bottom of each screw hole [2] or using vented screws that have a hole along their length through the center.
These are the possible sources of gas in a vacuum system and our UHV chamber is designed and constructed to minimize gas contribution from these sources. First, all the components inside the vacuum are made of UHVcompatible materials: vacuum-compatible stainless steel and aluminum for the chamber structure, OFE copper and Macor for the trap electrodes, titanium for screws and ceramics for electrical feedthroughs. As described in the next section, we have ruled out gold-plating as a solution to pre-
vent oxide formation on the trap electrode because of the absence of non-ferromagnetic vacuum-compatible material that can serve as a barrier layer between gold
12

and copper. The components, particularly the trap electrodes, are designed to eliminate any possible sources of virtual leaks. We have also developed a rigorous cleaning procedure, described in the next section, for all the components inside the vacuum and have cleaned the trap electrodes with positive results. Moreover, the vacuum system will undergo two bake-out processes, high-temperature air-baking of the stainless steel components to reduce volume outgassing and low-temperature baking of the -
entire assembled system during the pump-down stage to reduce the time required to reach the ﬁnal equilibrium pressure.
2.2 Cleaning procedures
To reduce the surface outgassing rate, all the surfaces and components inside the vacuum chamber need to be rigorously cleaned. The surface of the components may have impurities such as ﬁnger oil, traces of lubricants and other air-borne particles from fabrication, manufacturing and handling. These impurities, more often than not, have high outgassing rates undesirable for an ultra-high vacuum chamber. A rigorous cleaning procedure can remove most of these impurities, thereby signiﬁcantly reducing-
 the outgassing rate inside the vacuum chamber.
2.2.1 General cleaning procedure
We studied reports from several groups and have developed a suitable procedure for cleaning the components inside the vacuum chamber. Our general
13

cleaning procedure, as described below, is adapted from [10–12]. As discussed later in the chapter, components made of copper, particularly the trap electrodes, require a special cleaning procedure in addition to the general procedure described here.
1. Mechanical cleaning using methanol swipe to remove any visible dirt, marker marks, etc.
2. Ultrasonic bath in Alconox detergent for 10 minutes
3. Vapor degrease with trichloroethylene for 10 minutes. (Components taken out every three minutes to let cool.) (OR) A bath in Simple Green cleaning solution for 10 minutes.
4. Ultrasonic bath in acetone for 10 minutes
5. Ultrasonic bath in methanol for 10 minutes
6. Blow dry with nitrogen
The pieces are rinsed in deionized water after each cleaning step. The above procedure is ﬂexible depending on the piece we are cleaning. For instance, vapor degreasing with trichloroethylene is only necessary for pieces that have been exposed to oil during the fabrication process. Alconox detergent should not be used to clean aluminum parts since it can attack the aluminum surface. It also should not be used for components with grooves since it can leave precipitates. Isopropanol can be used inst-
ead of the more aggressive methanol for delicate pieces. [13, p. 146]
14

During the entire cleaning process, care must be taken not to touch the components with bare hands or unclean equipment. Appropriate personal protective equipment, especially gloves, should be used throughout the process. Latex reacts with methanol to form white residues [10], acetone can easily penetrate nitrile and trichloroethylene penetrates both nitrile and latex. Thus, we use nitrile gloves for handling all the solvents except acetone and trichloroethylene, for which we use latex and neopren-
e gloves respectively.1
Electropolishing the in-vacuum components can reduce the overall surface area of the parts, hence the surface outgassing rate, and can be considered as a part of the general cleaning process. The commercial vacuum components such as the main chamber and stainless steel nipples all come electropolished. We are currently looking into electropolishing procedures and hope that we can electropolish the homemade components such as the aluminum base plate for the ion trap and possibly the copper trap ele-
ctrodes.
2.2.2 Copper cleaning process
Copper requires a special cleaning procedure because it readily forms an oxide layer when exposed to air. This oxide layer is undesirable in constructing an ultrahigh vacuum chamber because it can convert to a hydroxide layer or cause adsorption of water on its surface. [14] This adsorbed water provides a source of gas inside the vacuum chamber and can increase the time required for pumping down to the ﬁnal desired pressure. In addition to performing
1Glove companies usually provide chemical resistance guides that list permeation rates of diﬀerent solvents and chemicals into diﬀerent types of gloves. We have used the guide from AnsellPro.
15

the general vacuum cleaning procedure described in the previous section, we need a special process to remove the oxide layer formed on the surface of the copper electrode. For our vacuum chamber, the trap electrodes are the main components made of copper and need a special cleaning procedure.
The extra steps for cleaning copper, in addition to the general procedure described above, are adapted from [11] and [12, p. 125] and our experience and results from trying out these procedures. In addition to the alkaline detergent Alconox, we also use an acidic detergent called Citranox to aid in removing the copper oxide layer. We also perform an acidic treatment using citric acid or sulfuric acid before the ﬁnal cleaning steps with acetone and methanol. Moreover, because we kept seeing some ﬁn-
gerprint marks on the electrodes after the acid treatment, we decided to use Simichrome polish to wipe oﬀ all the ﬁnger oil and impurities as the ﬁrst step in the copper cleaning process. Simichrome leaves a protective coating on the copper but this coating is dissolved later in the acid treatment. The cleaning procedure for copper is, therefore, as follows (rinse in deionized water after each step):
1. Use Simichrone polish to wipe oﬀ visible markings and ﬁnger oil
2. Ultrasonic bath in Alconox detergent for 10 minutes
3. Ultrasonic bath in methanol for 10 minutes
4. Ultrasonic bath in Citranox for 10 minutes
5. Acid treatment (citric acid bath at 75 ◦C for 2 hours or ultrasonic bath in 10% sulfuric acid for 10 minutes)
16

6. Ultrasonic bath in acetone for 10 minutes 7. Ultrasonic bath in methanol for 10 minutes 8. Blow dry with nitrogen We have cleaned the ion trap, both the copper electrodes and the Macor ends, using the above procedures and have obtained satisfactory cleaning results. Fig. 2.3 compares a copper electrode before and after the cleaning procedure. Thus, we believe that we have developed a rigorous cleaning procedure which can signiﬁcantly reduce the outgassing rate inside the vacuum chamber.
Figure 2.3: Comparison of copper electrode (a) before and (b) after the general and special cleaning procedures. We can see that the cleaning processes have removed all the visible marks and the tarnished surface of oxide layer.
2.2.3 Gold-coating of the copper electrodes
Not only does copper require a special cleaning procedure, its ready reaction with air also creates a complication regarding the storage of cleaned copper electrodes before they are assembled. Oxide layers can form again on the clean surfaces if there is prolonged exposure to air during the storage period. One
17

solution for this complication is to coat the clean copper electrodes with gold, a corrosion-resistant material with high electrical conductivity. In doing so, we need to ensure that the coated gold layer is at least as thick as the skin-depth ρ of gold to prevent the RF signal from traveling in two diﬀerent materials, which can cause complications in calculating the trapping potential. Gold’s skin-depth at 20 MHz is 17.58 µm and we planned to deposit twice as much gold onto the electrodes.
Depositing gold onto copper electrodes is not without its own complexities. During the pump-down stage, we need to bake the entire vacuum chamber up to 200 ◦C for a prolonged period of time. At temperatures higher than 60 ◦C, copper can diﬀuse through gold to the surface of the electrode. [12] This will cause the RF signal to travel through two materials with diﬀerent electrical resistivity, which can disrupt the required trapping potential. In order to prevent this copper-gold interdiﬀusion, a fe-
w microns of a barrier metal (usually nickel, cobalt or palladium) can be plated onto copper before gold-plating. However, nickel and cobalt are ferromagnetic at room temperature and they can generate an uncontrollable magnetic ﬁeld when exposed to the RF signal applied to the trap electrodes. This magnetic ﬁeld is undesirable since we need a well-deﬁned and controllable potential inside the ion trap. Moreover, palladium has a high capacity for absorbing hydrogen. [15, p. 333] Therefore, a palladi-
um barrier layer will create a source for hydrogen outgassing inside the vacuum chamber which can prolong the required pumping time and limit the lowest achievable pressure.
Titanium, which is non-ferromagnetic and vacuum-compatible, can also be
18

used as a barrier layer between copper and gold to prevent interdiﬀusion. Due to its high reactivity, titanium is usually evaporated onto the substrate rather than electroplated, and electroplating solutions for titanium are not commercially available. Blakestad [16, p. 140] used an electron-beam evaporator to deposit 30 nm of titanium as a barrier layer before depositing 3.5 µm of gold onto his trap wafer. However, we are reluctant to use the evaporation method since unlike Blakestad’s trap wafer-
, our trap electrodes have a complicated 3D geometry with screw holes that may cause uneven deposition of titanium and gold on the electrode.
Since we were not able to ﬁnd a suitable material to be used as a barrier layer between copper and gold, we have decided against gold-coating as a way to prevent oxide formation on the electrode surface before it is assembled. The next best option is to store the electrodes in an inert environment without much air and water vapor so that there is little formation of oxide and adsorption of water. Some containers, such as gloveboxes, provide an inert environment in which one can store and manipulat-
e materials. However, we decided to simply store the clean electrodes in a sealed and deﬂated bag with some dessicants inside. There will be little air inside the bag and the dessicant can signiﬁcantly reduce adsorption of water onto the electrode surface. This is not as good a solution for preventing formation of oxide layer as gold-plating. However, given that we have ruled out the viability of electroplating, the only option for us is to minimize the amount of oxide formation during storage and-
 assembly.
19

2.3 Bake-out and pump-down
After all the components are rigorously cleaned as described in the previous section, they need to go through bake-out processes. The ﬁrst of two bakeouts is for reducing the amount of hydrogen outgassing from stainless steel and takes place before the vacuum system is assembled. The second bake-out takes place after the entire chamber is assembled and it is done for increasing the outgassing rate during the pump-down stage in order to achieve the equilibrium pressure in a shorter time. Pumping do-
wn from atmospheric to UHV pressure requires a turbomolecular pump, an oil-free diaphragm pump, an ion pump and a non-evaporable getter pump. It will take several days to obtain the ﬁnal equilibrium pressure.
Before the assembly of the vacuum chamber, stainless steel components need to be air-baked around 450◦C to prevent hydrogen outgassing from the bulk of the steel. Outgassing from hydrogen embedded in stainless steel during fabrication can be reduced in two ways: it can be baked in vacuum to remove most of the embedded hydrogen (vacuum-baking) or it can be baked in air to introduce an oxide layer on the surface as a barrier to passage of hydrogen (airbaking). We choose air-baking over vacuum-baking-
 since the latter requires a vacuum oven, which we do not have access to. An oxide layer on a surface is usually not desirable inside a UHV system since it can adsorb water vapor. However, due to the material composition of stainless steel, air-baking produces a chrome oxide layer which is eﬀective as a barrier to hydrogen diﬀusion into the vacuum system. [8] Air-baking other components such as the copper electrodes only introduces an oxide layer that is not eﬀective in reducing the
20

hydrogen outgassing. Moreover, some components such as the chamber windows and some pressure gauges cannot be baked to such a high temperature. Thus, only stainless steel components are air-baked before the assembly of the vacuum chamber.
The second bake-out process takes place after assembly of the entire vacuum system simultaneously with pumping down to UHV pressure. This bakeout increases the outgassing rate, especially that of adsorbed water vapor, during the pump-down. This will allow us to reach the ﬁnal equilibrium pressure in a shorter time. [9] The whole system will be wrapped with heating tape followed by aluminum foil and insulation for eﬀective and even baking. [10] The baking temperature is limited by speciﬁcation of e-
ach component and the system should be baked only up to the maximum endurable temperature of the weakest joint in the system. For our system, the maximum bakable temperature is 200◦ C, which is due to the windows of the chamber. Depending on the cleanliness and hence the outgassing rate of surfaces inside the vacuum chamber, the pumping speeds of vacuum pumps and the conductance of tubes connecting the chamber to the pumps, this bake-out and pump-down process can take a few days to reach the equil-
ibrium pressure.
The pump-down process takes place simultaneously with vacuum-baking and starts with rough pumping down to high vacuum pressures. We are using the same rough-pumping system described in ref. [10] that consists of a turbomolecular pump with an oil-free diaphragram pump, a residual gas analyzer (RGA) and pressure gauges. A turbomolecular pump is a high-speed molecular bat that transfers momentum from rotating blades to gas molecules and
21

transports them to the pump outlet. It works most eﬃciently in the molecular ﬂow region, deﬁned as when the mean free path is larger than the characteristic dimension of the system. For our system with characterisitic length on the order of 0.1 m, the molecular ﬂow region corresponds to a pressure of 0.1 Pa or lower. [8, p. 15,25] Thus, a turbomolecular pump needs to be backed by a pump that can exhaust to the atmosphere, a diaphragm pump for our system. An RGA can measure partial pressure of diﬀe-
rent gases in the vacuum system and is useful for analyzing the type of gases left inside the vacuum and for detecting possible leaks. [10] This rough-pumping can lower the pressure inside the chamber from atmosphere to the high vacuum regime and is only required for the initial pump down process. Once the system is in the high vacuum regime and we have conﬁrmed that no leaks are present, we will only need to operate the UHV pumps to sustain the UHV pressures during the experiment.
Unlike turbomolecular pumps or diaphragm pumps, UHV pumps are sensitive to gas types and most systems usually employ two or more UHV pumps for eﬀective pumping of diﬀerent types of gases. The three pump types usually used in UHV systems are titanium sublimation (Ti-sub) pumps, nonevaporable getter (NEG) pumps and ion pumps. Ti-sub pumps consist of a titanium ﬁlament which is heated periodically to deposit titanium as a thin ﬁlm on the chamber surface that reacts with and adsorbs gases in the vacuu-
m. NEG pumps contain a getter material, usually zirconium-aluminum alloy that adsorbs gases on the surface, which are then diﬀused into the bulk. They need to be activated by heating to around 800◦C ﬁrst, after which they can pump gases at room temperature without much power requirement. [8] A heater for
22

this activation is built into the pump. Both Ti-sub pumps and NEG pumps are

eﬀective in pumping out chemically active gases such as hydrogen, oxygen and

water. However, they cannot pump inert gases such as argon and methane.

Thus, they usually need to be supplemented by ion pumps, which emit elec-

trons to ionize gas molecules in the chamber, which are then accelerated by an

electric ﬁeld and become embedded in a nearby surface. [8] Ion pumps usually

release some gases during their operation so the most eﬀective pumping can

be obtained by a combination of ion pump with a Ti-sub pump or an NEG

pump. We plan to use a NEXTorr 100-5 pump from SAES Getters, which is

a combination of a 100 L/s NEG pump with a 5 L/s ion pump.

It is important to consider the minimum required pump speed when choos-

ing the UHV pumps. The lowest achievable pressure Pult of a UHV system is

related to the gas ﬂow into the system Qi and the eﬀective pump speed S as

follows: [9]

Pult

=

Qi . S

(2.1)

The surface and volume outgassing from the components inside the vacuum chamber is the main contributor to the gas ﬂow of the system and can be estimated with the knowledge of the material and the surface area of the components. For our vacuum system, Qi is estimated to be on the order of 2 × 10−11 W. The gas ﬂow is deﬁned as the rate of change of the product of the pressure and the volume inside the chamber (d(P V )/dt) and so has a unit of Watt. Thus, for a desired pressure on the order of 10−9 -
Pa, the eﬀective pump speed inside the vacuum chamber needs to be around 20 L/s. [2] The eﬀective pump speed depends on the speed of the UHV pumps S0 and conductance of

23

the tubes and the holes of the system C, which combine like resistances in

parallel: [9]

111 = +.
S S0 C

(2.2)

From the speciﬁcations of the components that we ordered and hand-made,

Shenglan Qiao [2] has estimated the conductance C of our vacuum system to

be around 40 L/s. This means that we need the two UHV pumps to have a

combined pump speed on the order of 40 L/s. The NEXTorr 100-5 pump, with

its 100 L/s NEG pump, should be more than enough to pump out the active

gases (hydrogen, oxygen, water, carbon dioxide) which are the predominant

gases in the system. The 5 L/s ion pump seems to be small, but given that

outgassing of inert gases is very small, the ion pump should also have enough

pumping speed to pump out these inert gases.

To eﬀectively control the pumps and characterize the vacuum system, the

pressure inside the chamber needs to be continuously monitored. The type

of the required pressure gauge depends on the range of pressure to be mea-

sured, and ion gauges are most commonly used in the UHV range. Ion gauges

measure the pressure indirectly by measuring the number density of gases

present in the system. They work on a principle similar to ion pumps; gas

molecules are ionized and accelerated by an electric ﬁeld. However, instead of

hitting and being embedded into the nearby surfaces, gas ions are collected

by a collector, inducing an ionization current which is proportional to the

number density inside the chamber. There is a limit to the lowest pressure

measurable by ion gauges and this limit is due to the soft x-ray produced by

electron bombardment. When the soft x-ray strikes the collector, it produces

24

a photocurrent, which is indistinguishable from ion current. Bayard-Alpert gauges, due to their small collector size along the axis of the ion gauge, have a lower x-ray limit and are usually used in UHV systems for ion trapping. [8] For our vacuum system, we have bought NR-F-UHV ion gauge from Stanford Research Systems (SRS) that can measure pressure from 1 × 10−3 Torr down to 2 × 10−11 Torr and that contains two thoriated iridium (ThO2/Ir) ﬁlaments as a precaution for the ﬁlament burning out. We -
believe that this ion gauge can give us accurate pressure measurement of our UHV system.
In this chapter, we have described the general procedures for ultra-high vacuum construction and the speciﬁcs of our vacuum chamber. We have developed a rigorous cleaning procedure and successfully cleaned the copper trap electrodes using this procedure. Moreover, we have looked into the necessary components that are commercially available and have most of the parts ready to be cleaned. We are currently in the process of fabricating the beryllium oven that is to be housed inside the vacuum chamber-
. We are also looking into electropolishing in-vacuum components to reduce the overall surface area as part of the cleaning process to reduce the outgassing rate. After the beryllium oven is fabricated, all the in-vacuum components can be cleaned and electropolished, and the stainless steel parts air-baked. We can then assemble these vacuum chamber parts and pump down to the UHV pressure.
25

Chapter 3
Helical RF Resonator: Theory
and Design
The ion trap constructed by Shenglan Qiao [2] consists of DC and RF electrodes to generate a trapping potential for ions. Although the DC electrodes can be directly connected to a DC power supply, it is desirable for the RF electrodes to be connected to an RF power source via a resonator with a high quality factor Q. We need a 500 V RF signal applied to the electrodes to generate a deep potential well. This high voltage requirement means that connecting the trap electrodes directly to a function g-
enerator with typical 50 Ω impedance will require far higher power than is actually necessary. Since only the RF voltage and not the current aﬀects the trapping potential, we can reduce the power requirement if we boost the RF voltage using a transformer. Minimization of power reﬂected from the ion trap by matching the impedances of the RF source and the trap load can also lower the power dissipated over the
26

source impedance. Since a resonator allows for impedance matching and acts like a step-transformer, the trapping potential can be generated with lower power requirement if we use a resonator. [2, 7]
Moreover, a resonator forms an eﬀective RLC circuit when connected to the ion trap and RF source. Thus, it acts like a band-pass ﬁlter that allows the passage of a narrow band of frequencies around resonance while signiﬁcantly attenuating frequencies outside this band. A resonator can, therefore, supply a stable RF signal to the trap electrodes, generating a stable potential well for trapping ions. It is also eﬀective in ﬁltering out the noise from the ampliﬁer that can cause trapped ions to heat -
up. [7]
Helical resonators and quarter-wave coaxial resonators are most commonly used for ion trapping and we have chosen to use the former for our ion trap system. A coaxial resonator is basically a transmission line whose length equals a quarter-wavelength of the resonating signal. A helical resonator consists of a coil of wire inside a shield and the signal can be coupled to the coil via inductive or capacitive coupling. At 20 MHz, the RF frequency we have chosen for the trapping potential, quarter-wav-
e coaxial resonators have a practical size limitation. It would need to be 3.75 m long to ﬁt a quarter wave of a 20 MHz signal along its length while a helical resonator at the same frequency can be as small as 15 cm in length. Moreover, ampliﬁers for RF power sources have ﬁnite output impedances and directly connecting a resonator to the ampliﬁer can lower the quality factor due to damping eﬀect. A helical resonator allows for a high Q factor by connecting the main resonating coil to the ampliﬁer-
 by inductive coupling, which eﬀectively decouples the resonator from the output
27

impedance of the ampliﬁer. [7] A helical resonator consists of a main resonating coil and a smaller antenna
coil for inductive coupling enclosed in a cylindrical shield. See Fig. 3.1 for a sketch of a typical helical resonator. One end of the antenna coil is connected to the RF source while the other end is grounded. This antenna coil creates a magnetic ﬁeld which is then coupled to the main coil, whose capacitance and inductance inside the shield create a resonance at the desired frequency. The resonant output of the main coil is then connected to the ion trap via a vacuum feedthrough. The geometry of -
the antenna coil can be altered to match the impedance of the ion trap load and that of the RF source, which is usually 50 Ω. The resonant frequency ω0 and the quality factor Q depends on the geometry of the sheild and the main coil. Thus, by varying the geometry of the two coils, we can obtain an impedance-matched resonator with desired ω0 and Q. This chapter describes the theory and design phase of the helical resonator and our choice of the resonator geometry that we believe will give us a reso-
nator at 20 MHz with a high quality factor.
3.1 Resonant frequency and quality factor cal-
culation
To calculate the resonant frequency ω0 and the quality factor Q, the resonator can be modeled as a lumped element circuit. The circuit model shown in Fig. 3.2 considers the resistances, inductances and capacitances of the coils, the shield and the trap. Explanation of these variables used in Fig. 3.2 and
28

Figure 3.1: Sketch of a helical resonator showing the electrical connections and the variables representing the resonator geometry.

throughout this thesis is described in Table 3.1. Resonance of this circuit model, as calculated in [7], occurs at the resonant frequency

1

ω0 =

,

(Cs + Cc + Ct + Cw)Lc

with a quality factor

(3.1)

where

RESR

Q = ω0Lc , RESR

Rj + Rc + Rs + Rt

Ct Ct + Cs + Cw

2
.

29

(3.2a) (3.2b)

In other words, a resonator connected to a trap load and an RF source can be considered as an RLC circuit with a resistance of RESR, an inductance of Lc and a capacitance of Cs + Cc + Ct + Cw. The peak output voltage Vpeak from such a circuit is related to the power input P by [7]

Vpeak

Vpeak

1
L4
C

2P Q

1

Lc

4

Cs + Cc + Ct + Cw

2P Q.

(3.3)

Therefore, to calculate the resonator geometry that resonates at the desired

frequency with maximum quality factor and to calculate the required input

power, we need to know the dependence of the resistances, inductance and

capacitances on the geometry of the resonator.

Variable
Lc La Cc Cs Ct Cw Rc Rs Rt Rj RESR

Explanation Inductance of the main coil Inductance of the antenna coil Self-capacitance of the main coil Capacitance between the main coil and the shield Capacitance of the ion trap Capacitance of the wire connecting the trap and the resonator Resistance of the main coil Resistance of the shield Resistance of the trap Resistance of the solder joint between the main coil and the shield Equivalent series resistance of the resonator-trap system

Table 3.1: Explanation of variables in the circuit model shown in Fig. 3.2

Of the four resistances in the circuit model, only those of the coil Rc and the shield Rs depend on the geometry of the resonator. Those of the joint Rj and the trap Rt are external to the resonator and they can only be experimentally
30

Figure 3.2: Equivalent circuit model for the resonator circuit. The variables in the ﬁgure are explained in Table 3.1. The circuit model is adapted from [7].

measured. Rc and Rs depends on the cross-sectional area and the length along which current travels through the main coil and the shield. When calculating the cross-sectional area, it should be noted that RF signal penetrates into a conductor only up to the skin depth ρ. The resistance of the coil is therefore

where

Rc

=

ρlc , d0πδ

b lc = τ

τ 2 + (πd)2

(3.4a) (3.4b)

where ρ is the resistivity, δ the skin depth, lc length of the coil wire, b length of the coil, d0 diameter of the wire and τ the winding pitch. Similarly, the

31

resistance of the shield is

Rs

=

Nsρls , bδ

where

Ns

=

blc 4π(D −

d)2

,

and

b2 ls = Ns (πD)2 + Ns ,

(3.5a) (3.5b) (3.5c)

where D and d are diameters of the shield and the coil respectively, Ns the number of turns the current travels in the shield and ls the length the current travels. [7] From the above equations, we can see that Rc and Rs can be calculated if we know the resonator geometry D, d, b and τ .
The inductance of a long coil (Lc for the main coil) inside a cylindrical shield for b/d ≥ 1 is empirically given by [7, 17]

Lc = bKLc

3.937bd2

d2

1−

µH,

4τ 2

D

(3.6)

where all the lengths are in meters. However, Equation 3.6 is only accurate

for a long coil; for ﬁnite-length coils, the coil and the shield lengths need to

be considered. The inductance a free-standing coil (L0) with a ﬁnite length

is [18, p. 252]

3.948bd2

L0 =

K µH, 4τ 2

(3.7)

where all the lengths are in meters and K is the correction factor for end eﬀects, which is a function of the coil diameter-length ratio (b/d). There is no explicit formula for K, which is given in a table in [18, p. 183]. Fig. 3.3 shows

32

a plot of K vs. b/d generated using this table. In the presence of a shield, this inductance is modiﬁed by [19, p. 129]

d2b Lc = L0 1 − D BK

(3.8)

where B is the length of the shield. Although Equations 3.7 and 3.8 are more

accurate than Equation 3.6, the former complicates the calculation of the

coil length b for a desired resonant frequency ω0. Thus, we use Equation 3.6

(referred to as the approximate equation) in the design phase to calculate

the desired resonator geometry and Equations 3.7 and 3.8 (referred to as the

exact equations) in the testing phase to characterize the resonance using the

measured geometry of the resonator. Because these equations are continuous

in b, we can always tune the frequency by squishing or stretching the resonator

to obtain the desired resonant frequency after it is constructed.

The capacitances of the wire Ct and the trap Cw are external to the res-

onator and can only be experimentally measured while the self-capacitance of

the main coil Cc and the capacitance between the coil and the shield Cs are

related to the resonator geometry. The empirical equation for calculating Cs

is [7, 17]

0.75b

Cs = bKCs

39.37

pF,

log10 (D/d)

(3.9)

and that for Cc is [7, 20]

b

27

Cc

d 11.26 + 8 + d

b/d

pF.

(3.10)

33

Figure 3.3: End correction factor K as a function of the coil diameter-length ratio b/d. The plot is generatd by using the table in [18, p. 183]. The horizontal axis is drawn in log scale.

Because of the non-linear dependence on b, a linear approximation of Equation 3.10 is in order for easier calculation of the resonator geometry, particularly b. A simple linear approximation can be done by setting b/d = 1, resulting in [7]

Cc Kcbb + Kcd, , where Kcb = 11.26 pF/m and
Kcd = 35d pF.

(3.11a) (3.11b) (3.11c)

We have expressed the inductance, resistances and capacitances that de-

34

pend on the resonator geometry and are now ready to calculate the geometry that gives the maximum quality factor at the desired resonant frequency of 20 MHz. Substituting the Equations 3.6, 3.9 and 3.11 into 3.1 gives [7]

b Cw + Ct + Kcd KCs + Kcb

(Cw

+

KCs + Kcb Ct + Kcd)2KLc ω02

+

1 4

−

1 2

m.

(3.12)

From the above equations, we can see that ω0 and Q depends on the resonator geometry d, D and τ and measurable external parameters such as Ct, Cw, Rt and Rj. Given our desired resonant frequency at 20 MHz and assuming that τ = 2d0, which is usually recommended for hand-winding of the resonator coil, we can express Q in terms of d, D and the external parameters. Using estimated values of the external parameters in the design phase, we can ﬁnd the values of d and D that gives the maximum Q for a par-
ticular ω0. The actual trap load, after it is assembled in the UHV chamber, may be diﬀerent from these estimated values, in which case we can change the length of the main coil to tune the resonant frequency. It would be acceptable for the resonant frequency to be within 10% of the desired 20 MHz. The frequency of ions in the trap varies inversely with the resonant frequency. However, we can tune the trap potential by varying the RF voltage rather than the resonant frequency.

3.2 Impedance matching
Mismatched impedance between an RF source and its load causes the input RF power to be reﬂected from the load and to dissipate power over the output
35

impedance of the source. Since this increases the power required to supply a certain RF signal to the load, it is important to match these two impedances. The reﬂection coeﬃcient Γ, deﬁned as the ratio of the reﬂected voltage to the input voltage, is related to the output impedance of the source Z0 and the input impedance of the load Zin by [21, p. 58]

Γ = Zin − Z0 . Zin + Z0

(3.13)

The power transmitted Pt from a source to a load is related to this reﬂection

coeﬃcient by

Pt = 1 − |Γ|2 . Pin

(3.14)

where Pin is the input power from the RF source. Fig. 3.4 shows a plot of the ratio of the transmitted to the input power as a function of the load impedance

assuming a 50 Ω source impedance. We can see that all of the input power is

transmitted only when Zin completely matches Z0. Lower transmitted power poses a limit, external to the RF power source, to the trapping potential

and the trap depth that can be achieved. Therefore, to minimize the power

required for the RF electrode, it is important that we match the impedances

of the load and the source.

The circuit model in Fig. 3.2 can be simpliﬁed as the RF source connected

to the antenna coil La and a combined trap load ZL connected to the main coil Lc as shown in Fig. 3.5. For impedance matching, the combined impedance of the resonator and the trap load Zin needs to be matched to the output impedance of the RF source Z0. By considering the self-inductances and mu-

36

1.0

0.8

Ptransmitted Pinput

0.6

0.4

0.2

0.0 0

50

100

150

200

Zin

Figure 3.4: Transmitted-input power ratio as a function of load impedance. The output impedance of the source is assumed to be 50 Ω. All the input power is transmitted when the impedance of the load matches that of the source.

tual inductance of the two coils, Siverns [7] derived an equation for Zin in terms of La, Lc, ZL, ω0 and coupling between the two coils k:

Zin = La

iω + k2Lcω2 iωLc + ZL

,

La

=

µ0NaAa τa

(3.15)

where Na is the number of turns, A the area and τa the winding pitch of the antenna coil. As described in the previous section, ZL and Lc depends on the geometry of the sheild and the main coil. Equation 3.15 means that for a particular ω0, the impedance of the resonator-trap system Zin can be matched with Z0 = 50 Ω by changing the diameter da and/or the winding pitch τa of the antenna coil.

37

Figure 3.5: Circuit of the RF source and the resonator connected to the trap load. The resonator is represented as two coupled inductor coils, La for the antenna coil and Lc for the main coil, and the impedance of the ion trap as ZL. The ﬁgure is adapted from [7].
3.3 Design considerations
To build a helical resonator with a quality factor as high as possible for a particular resonant frequency and ion trap load, there are certain universal design issues and guidelines that we should be aware of. The guidelines described below are adapted from [7] and include considerations for precision, resistive losses and fringe eﬀects.
According to Equation 3.2, to obtain a high quality factor resonator for a particular frequency, we need a high main coil inductance Lc or a low equivalent series resistance RESR. As discussed in Section 3.1, Lc is a characteristic of the resonator and is determined by the resonator geometry that maximizes
38

the quality factor but RESR can be minimized independently of the resonator geometry. Using a material with high electrical conductivity such as copper can reduce the resistance of the shield Rs and the coil Rc. Solder joints for connecting coils to the BNC bulkheads should be made with good solder ﬂow between the part surfaces. Using a thick wire for the main coil is desirable since it reduces the resistance while providing for structural rigidity against mechanical vibration; a wire diameter of -
3 − 5 mm provides a good balance between ease of winding the wire and rigidity. Both the coil and the shield should be thicker than the skin depth of RF signal at the desired resonant frequency (14.59 µm for copper at 20 MHz).
The main coil inductance Lc has a quadratic relation with the coil diameter d and the pitch τ so a change in these can cause a signiﬁcant change in the inductance. To get a resonant frequency and a quality factor as close to the calculated value as possible, we need to make sure that the coil diameter and the pitch are fairly constant throughout the coil. Ideally, this can be done by winding the coil over a tube with threaded notches of diameter d − d0 and a thread pitch of τ . In practice, the di-
ameter and the thread pitch should be a little smaller since the wound coil has some elastic force that can make it expand outward a little after winding. A winding pitch twice the size of the wire diameter (τ = 2d0) is recommended for hand-winding since narrower and wider pitches are harder to wind with precision. Another advantage of the 2d0 winding pitch is that we can use a second strand of wire as the coil form by winding both wires simultaneously. We use the threaded tube described above as -
the coil form for our resonator. Annealing the wire can also make it more
39

ﬂexible and easier for winding. The length of the shield B should be larger than that of the coil b to prevent
fringe eﬀects on the coil inductance and capacitance. The shield should be longer by at least a quarter of the shield diameter D on both sides of the coil, resulting in B ≥ b + D/2. Without the clearance at the bottom, the lowest few coils would not be eﬀective for energy storage (i.e. they would not contribute to the coil inductance) while contributing to resistive losses. [22, p. 503] The clearance at the top prevents the fringe eﬀects from increasing the shield capacitance. [7] It is usually re-
commended to use B = b + D/2 since longer coils would not be much more eﬀective in reducing the fringe eﬀect.
3.4 Design process
As shown in Section 3.1, four loads Ct, Cw, Rt and Rj are external to the resonator and can only be experimentally measured after the trap electrodes are assembled inside the UHV chamber. Because we are still in the process of building components for the vacuum chamber, we can only use estimates rather than the actual values of these loads for calculating the required resonator geometry. Of these four external loads, the main contributions to the total load are from Rt and Ct. Rt refers to the com-
bined resistances of the trap, the wire connecting the trap to the RF feedthrough and the connection between the resonator and the feedthrough. We expect these resistances to be at most a few ohms. Appendix A shows the estimation of the capacitance Ct. We estimate the external loads as follows: Ct = 8 pF, Cw = 0.1 pF, Rt = 2 Ω and
40

Rj = 0.5 Ω. These estimates may be diﬀerent from the actual values and the calculated geometry may not give a resonant frequency of 20 MHz when the trap load is diﬀerent. The plan is to build a resonator with these estimates and then tune the frequency by stretching or squishing the two coils after the vacuum assembly and measurement of the external loads.
When calculating the resonator geometry, we need to consider the size of pipes and wires that are commercially available. The main coil wires are usually 3 − 5 mm thick for rigidity and the diameter of the shield is usually around 8 − 15 cm for a 20 MHz resonator. Copper pipes are available with 3” (7.62 cm), 4” (10.16 cm) or 6” (15.24 cm) diameters, and copper wires with 1/8” (3.174 mm), 3/16” (4.7625 mm) or 5 mm diameters. There are nine possible combinations of D and d0 that we can use for the -
resonator. Throughout the calculation, we set τ = 2d0 for easy winding of a thick copper wire. For each combination, we can use Mathematica to ﬁnd the coil diameter d that gives the maximum Q for b/d ≥ 1. Using this coil diameter and the diameter of the pipe, we can calculate the coil length b using Equation 3.12 and the quality factor Qmax using Equation 3.2. The shield length can then be calculated as B = b + D/2. Since an RF ampitude of 500 V is desirable for a deep potential for our ion trap [-
2, p. 23], we use Equation 3.3 to calculate the required power input for 500 V output amplitude. Table 3.2 shows the resonator geometry, maximum achievable quality factor and power input for each of the nine combinations of D and d0.
We need to consider the quality factor, structural rigidity and ease of winding the coil when choosing a resonator geometry. According to Table 3.2, the
41

D (cm) 7.62 7.62 7.62 10.16 10.16 10.16 15.24 15.24 15.24

d0 (mm) 3.175 4.7625 5 3.180 4.7625 5 3.175 4.7625 5

Qmax 255 176 166 329 292 284 330 352 352

d (cm) 3.24 3.08 3.07 4.62 4.44 4.42 5.13 6.48 6.60

b (cm) 13.86 24.35 25.96 8.50 15.28 16.37 7.29 9.11 9.47

B (cm) 17.67 28.16 29.77 13.58 20.36 21.45 14.91 16.73 17.09

Pin (W) 2.69 5.38 5.94 1.72 2.58 2.75 1.40 1.66 1.71

Table 3.2: Resonator geometry, quality factor and required input power for a 20 MHz resonator with 500 V output amplitude for diﬀerent wire and shield diameters. These numbers are calculated with the assumption that the resonator is loaded with a trap of 8 pF capacitance and 2 Omega resistance.

larger the shield diameter, the larger the quality factor and the lower the required input power. Moreover, the smaller diameter shields require the coil length to be much larger than its diameter. The resonator will be in a horizontal position when connected to the vacuum chamber as shown in Fig. 2.1 and a large b/d value means that the coil will be less rigid. Thus, we chose the 6” (15.24 cm) diameter shield over the smaller diameters. As for the wire choice, the three wire diameters for D0 = 15-
.24 cm have comparable quality factors and input power, and all three should be thick enough for structural rigidity. Therefore, we choose the 1/8” (3.175 mm) wire over the thicker ones since thinner wires are more easily wound. For our choice of D = 15.24 cm and d0 = 3.175 mm, we should be able to get a 20 MHz resonator with a high quality factor of around 350 and a reasonable power input of 1.4 W.
Using this speciﬁc resonator geometry, we can calculate the input impedance of the resonator-trap system Zin and match it to the 50 Ω output impedance

42

of the RF power source. According to Equation 3.15, Zin depends on the combined trap load ZL and the main coil inductance Lc, which we can calculate using the geometry we have chosen. It also depends on the number of turns,

area and winding pitch of the antenna coil but not on the diameter of the

antenna coil wire. We chose 1/16” for the wire diameter and set Na = 3 and τa = 1 cm to ﬁnd the area Aa, hence the diameter da, of the antenna coil required to match Zin with 50 Ω. The required da thus calculated, using coupling constant k = 0.1, is 3.675 cm. Table 3.3 describes the resonator geometry we

have chosen and the corresponding quality factor and input power required for

500 V output.

Shield Main Coil Antenna Coil Resonator

diameter (D) length (B)
wire diameter (d0) winding pitch (τ ) diameter (d) length (b)
wire diameter (da0) winding pitch (τa) diameter (da) number of turns (Na) resonant frequency ω0 maximum quality factor (Qmax) input impedance (Zin) required input power (Pin) for 500 V output

15.24 cm (6”) 14.91 cm 3.175 mm (1/8”) 6.35 mm 5.13 cm 7.29 cm 1.5875 mm (1/16”) 1 cm 3.675 cm 3 20 MHz 342.5 50 Ω 1.40 W

Table 3.3: Geometry and property of the resonator, assuming a trap load of Ct = 8 pF and Rt = 2 Omega.

Fig. 3.6 shows a SolidWorks model of the resonator we want to build. The whole resonator is held together with six brass threaded rods. The threaded rods outside the shield do not aﬀect the RF signal so electrical conductivity is
43

Figure 3.6: SolidWorks model of the resonator in Table 3.3 with the main coil and the grounding rod connected to the vacuum feedthrough. The resonator shield is made transparent to see the coils inside. The top hat provides support for connection to the UHV chamber and has a window cut out for screw-driver access to make connections to the feedthrough. For length scale, the shield diameter is 6”.
not important and we can use brass rather than copper. The two end plates should be thick enough to withstand mechanical pressure from the hex nuts and have grooves cut into them for easy positioning of the shield. We can
44

also solder the end plates onto the shield instead of threaded rods. The two methods should have little diﬀerence in the properties of the resonator since each can give as good an electrical connection between the shield and the end plates as the other. However, using threaded rods is more ﬂexible in terms of tuning the resonator whereas it would be diﬃcult to alter the resonator geometry once the end plates and the shield are soldered. One end of the antenna coil is connected to a BNC bulkhead an-
d the other end is grounded with the resonator body. The main coil is soldered to another BNC bulkhead at one end and can be grounded with the resonator body by using a BNC shorting cap. The other end of the main coil is to be connected to a Solid Sealing Technology FA11650 vacuum feedthrough using an Accu-Glass 110113 in-line connector. The grounding rod is for providing a ground reference to the RF electrodes. The top hat provides mechanical support for connecting the resonator to the vacuum cha-
mber and should be big enough to ﬁt the vacuum feedthrough. It also has a window cut out on the side for screw-driver access for making wire-feedthrough connection.
3.5 Tuning
This is only a preliminary design before we can measure the actual values of the external loads, which may be diﬀerent from what we have chosen to calculate the resonator geometry. Since such diﬀerences have an impact on the resonant frequency, the quality factor and the input impedance, we need to make sure that the resonator can be tuned reasonably easily for the desired
45

resonant frequency and impedance matching. The wire capacitance Cw and the joint resistance Rj are relatively small and the trap resistance Rt only aﬀects the quality factor and the input impedance without any impact on the resonant frequency (see Equation 3.1). Therefore, the trap capacitance Ct is the only parameter that can signiﬁcantly change the resonant frequency and we describe here its eﬀect on the properties of the resonator.
An increase in trap capacitance Ct decreases the resonant frequency according to Equation 3.1. Fig. 3.7(a) shows ω0 vs. Ct plot for a resonator with geometry as given in Table 3.3 and 1 pF increase in Ct may decrease the resonant frequency by about 0.5 − 1 MHz. In case of such a diﬀerence, we can tune the resonant frequency by changing the length of the main coil, hence also the winding pitch. Fig. 3.7(b) shows the ω0 vs. τ relation for a trap capacitance of 8 pF, and we can see that the resonant -
frequency can be tuned by about 1 MHz for 1 mm increase in the winding pitch. However, the winding pitch is limited from below by the diameter of the wire d0, which in our case is 3.175 mm. Moreover, there is also a limit to how consistently we can decrease or increase the winding pitch without much deformation to the coil. For the resonator in Table 3.3, it would be quite diﬃcult to change the winding pitch to be smaller than 4 mm or larger than 10 mm. Thus, we need to wind a new coil if the reso-
nant frequency for the actual trap load is outside the tunable range, which is about 18 − 26 MHz as shown in Fig. 3.7(b). We expect that this should not be necessary since the trap capacitance should be quite close to 8 pF.
It should be noted that even though the approximate expressions for Lc
46

and Cc (Equations 3.6 and 3.11) are useful for calculating the approximate coil length for a particular resonant frequency, they are inaccurate for characterizing the resonance for a speciﬁc geometry. Fig. 3.7 shows a comparison between the exact expressions (Equations 3.8 and 3.10) and the approximate ones. For the same trap load, the latter gives a resonant frequency about 4 MHz lower than the former does. However, this can be tuned by changing the winding pitch of the main coil as described abo-
ve.
Figure 3.7: (a)Plot of resonant frequency ω0 vs trap capacitance Ct for a resonator with geometry given in Table 3.3. The black solid curve is for the exact equations and the blue dashed curve is for approximate equations. (b)Plot of ω0 vs main coil winding pitch τ for Ct = 8 pF. Note the diﬀerence in vertical scale between two plots.
An actual trap load that is diﬀerent from the estimates causes a diﬀerence not only in the resonant frequency but also in the quality factor. An increase in trap capacitance decreases the resonant frequency as described above and increases the resistance of the resonator according to Equation 3.2b. Overall, the quality factor is inversely proportional to the trap capacitance. Fig. 3.8(a)
47

shows a plot of the quality factor as a function of the trap capacitance for the resonator described in Table 3.3. Like the resonant frequency, a change in the main coil winding pitch τ , hence its length, changes the quality factor as shown in Fig. 3.8(b). However, the quality factor cannot be tuned independently of the resonant frequency since τ is the only variable that can be tuned easily and it aﬀects both Q and ω0. As shown in Fig. 3.8(b) and 3.7(b), the quality factor for Ct = 8 pF only var-
ies from 260 to 360 within the tunable range of the main coil while the resonant frequency changes by as much as 8 MHz. Thus, the best action here is to tune for the desired resonant frequency since the quality factor should not change a lot.
Figure 3.8: (a)Plot of quality factor Q vs trap capacitance Ct plot for the resonator in Table 3.3, calculated using exact equations. (b)Plot of Q vs the main coil winding pitch τ for Ct = 8 pF. Note the diﬀerence in vertical scale between two plots.
Similarly, a diﬀerence in the actual trap load aﬀects the input impedance of the resonator-trap system. The Zin vs. Ct plot in Fig. 3.9 shows that 1 pF increase in the trap capacitance may change the input impedance by as much as 1 − 4 Ω. However, like the resonant frequency as described above, Zin can
48

be tuned by changing the winding pitch of the antenna coil. The antenna coil winding pitch can be easily changed from about 5 mm to 15 mm without much deformation. For this range of winding pitch, the input impedance ranges from 40 Ω to 100 Ω according to Fig. 3.9. Therefore, we should be able to tune the input impedance by changing the winding pitch of the antenna coil without having to wind a new coil.
Figure 3.9: (a)Plot of input impedance Zin vs trap capacitance Ct for the resonator in Table 3.3 calculated using the exact equations. (b)Plot of Zin vs antenna coil winding pitch τa for Ct = 8 pF. Note the diﬀerence in vertical scale between two plots.
We have described the relations among the resonant frequency, the quality factor, the input impedance and geometry of a helical resonator, and have used these relations to calculate the geometry of a structurally rigid helical resonator with 20 MHz resonant frequency. Since we still have to assemble the UHV chamber, we do not yet have the actual values of the impedances relating to the trap and have used estimates to come up with a preliminary design as described in Table 3.3. This potential diﬀer-
ence between the estimate and the actual values of the trap load may result in a resonant frequency and input
49

impedance diﬀerent from those in Table 3.3. However, this diﬀerence can be tuned by changing the winding pitch of the main coil and the antenna coil respectively. Being aware of this potential tuning, we have built a helical resonator according to this preliminary design and the next chapter describes the process of building and testing the resonator.
50

Chapter 4
Helical RF Resonator: Building and Testing
We use the geometry for a 20 MHz resonator with the maximum possible quality factor to build a preliminary version of the helical RF resonator for our linear Paul trap. We then test the characteristics of the resonator by taking frequency spectra and comparing the measured resonant frequency and quality factor to the values predicted in the last chapter. This chapter describes the geometry of the resonator we constructed and the process of testing the resonator.
4.1 Building the resonator
We want to build a resonator as described in Table 3.3 and shown in Fig. 3.6. We use a shield that is 2 mm thick and has 15.1 cm inner diameter. We use American Wire Gauge (AWG) 8 wire for the main coil and AWG 14 wire for
51

the antenna coil. These are diﬀerent from the diameters of the shield and coil wires used for calculation in Section 3.4 so the coil diameter, its length and the winding pitch will be diﬀerent from the ones in Table 3.3. The end plates are held together by brass threaded rods and are quarter inch thick to withstand pressure. The top hat has 1.37” inner diameter and three screw holes to ﬁt with the 1.33” diameter vacuum feedthrough. Fig. 4.1 shows the fully constructed resonator and Table 4.1 shows-
 the measurements with uncertainties of the geometry of this resonator.
Figure 4.1: Picture of the fully constructed resonator. (a) Base plate of the resonator with the antenna coil. (b) Inside the shield showing the main coil and the ground rod. (c) The resonator assembled and ready to be connected to the ion trap via a vacuum feedthrough.
52

Shield Main Coil
Antenna Coil Top Hat End Plate

inner diameter (D) length (B) wire diameter (d0) winding pitch (τ ) diameter (d) length (b) thickness wire diameter (da0) winding pitch (τa) diameter (da) number of turns (Na) inner diameter length thickness thickness

15.1(2) cm 15.9(1) cm 3.25(5) mm 6.5(5) mm 5.00(5) cm 7.8(2) cm 2.00(2) mm 1.65(5) mm 1.0(1) cm 3.65(3) cm 3 3.48(1) cm 5.511 cm 1.73(3) mm 6.40(5) mm

Table 4.1: Measurement of the geometry of the resonator in Fig. 4.1

4.2 Testing and data analysis

Before the resonator is connected to the ion trap inside the UHV chamber via a vacuum feedthrough, the resonator needs to be tuned based on the trap capacitance. For the time being, we would like measure the properties of the resonator (the resonant frequency, the quality factor and the input impedance) to discover any potential major design issues.

4.2.1 Setup
Fig. 4.2 shows the experimental setup to measure the properties of the resonator. Various capacitors are inserted as eﬀective trap loads between the main coil and the grounding rod to obtain the relation between the resonator properties and the trap capacitance. A Rigol DG4062 function generator sup-

53

plies an RF signal to the antenna coil via a Mini-Circuits ZFBDC20-61HP+ bi-directional coupler that couples out a fraction (20 dB in our case) of the input signal to the resonator and the reﬂected signal from it for measurement. The signals from the two coupling ports are then passed through Agilent 8472B crystal detectors which convert RF power levels to DC signals with proportional voltages. An Agilent DSO-X 2004A oscilloscope is used to read these voltage signals.
Figure 4.2: Experimental setup to characterize the resonance, i.e. to measure the resonant frequency, the quality factor and input impedance. The resonator is connected to a function generator via a bi-directional coupler whose coupling ports are connected to an oscilloscope. Crystal detectors are used to convert the RF signal to a proportional DC signal. The function generator and the oscilloscope can be automated using LabVIEW.
To ﬁnd the resonance of the resonator, we scan over a frequency range of 10 − 45 MHz and measure the dc voltage at each frequency. A quick frequency scan with no load connected to the resonator shows a resonance-like response around 35 MHz. For accurate measurements, the function generator and the
54

oscilloscope are automated using LabVIEW for measuring the voltages with 50 kHz steps. We expect to see a sharp peak in the coupled voltages, hence the applied power to the resonator and reﬂected power from it, at the resonant frequency. The quality factor is the ratio of the resonant frequency ω0 to the full width of resonance at half the maximum power level δω0. For Ct = 8 pF and Rt = 2 Ω, we expect the peak to be around 70 kHz wide for a 20 MHz resonator with a quality factor of around 300. Thu-
s, 50 kHz steps should be small enough to detect the resonance during the frequency scan.
The measured voltages can then be converted to power by using calibration data of the crystal detectors. We calibrate the detectors by connecting them directly to the function generator and measuring the detector output voltage for diﬀerent power levels applied to the detector. Fig. 4.3 shows the calibration data for the crystal detector used to measure the coupling of the input signal. The detector for the reﬂected signal has approximately the same calibration and the diﬀerence between the two de-
tectors is not visible with the plot scale used in Fig. 4.3. The calibration data is for 35 MHz frequency and the detector response is diﬀerent for diﬀerent frequencies. However, the diﬀerence should be negligible for frequencies with the same order of magnitude. Since we only have sixteen data points, we use Interpolate function in Mathematica to convert all the measured voltages to corresponding power levels.
We then calculate the ratio of the interpolated power levels to get the reﬂected-input power ratio and the transmitted-input power ratio as a spectrum of the applied frequency. For every value of load capacitance, the pitch of the antenna coil, hence the resonator input impedance, is to be tuned such
55

Figure 4.3: Calibration data for the Agilent 8472B crystal detector at 35 MHz. The detector converts applied RF power levels to proportional DC voltages. that less than 5% of the applied RF power is reﬂected back from the resonator at the resonant frequency. We can then measure the resonant frequency ω0 and the quality factor Q using the frequency spectrum for each capacitance value. However, because the input impedance of the resonator does not aﬀect ω0 and Q, we plan to measure ω0 and Q without -
matching the impedance. We would still be able to see lower resonant peaks with the same width.
56

4.3 Data analysis

Resonant peaks can be characterized by the Lorentzian distribution L(ω) given

by

1

1

L(ω) = π1+

2,
ω−ω0 δω0/2

(4.1)

where ω0 is the center of the distribution (the resonant frequency) and δω0 is the width of the resonance. Instead of manually ﬁnding ω and δω0 by estimating the frequency of the maximum and half the maximum power level,

we can ﬁnd them by performing a Lorentzian ﬁt of the spectrum.

We ﬁrst take the frequency spectrum with no capacitive or resistive load

connected to the resonator output. The transmitted-input power ratio is mea-

sured with 50 kHz steps within the range 15 − 45 MHz. The experimental data

is then ﬁt with the Lorentzian distribution as shown in Fig. 4.4. We can see

that there is a nice ﬁt between the frequency spectrum and the Lorentzian.

The resonant peak occurs at 35.277(13) MHz, is 2.54(4) MHz wide and has a

quality factor of 14. The resonant frequency from the ﬁt agrees within uncer-

tainty with the exact theoretical prediction of 33(3) MHz. However, the data

shows a much wider resonance width than the theoretically predicted width of

38(4) kHz and quality factor of 8.6(5) × 102. See Table 4.2 for a comparison of

the experimental data and the exact theoretical prediction.

We are not sure as to what might be causing this large discrepancy. There

may be error in the prediction due to the placement of the main coil oﬀ the

shield center. The equations described in Chapter 3 assume that the main coil

is placed exactly at the center of the shield and deviation from the center may

57

Figure 4.4: Frequency spectrum of the unloaded resonator and the Lorentzian ﬁt of the spectrum. The vertical axis shows the transmitted power normalized with the input power. The experimental data is shown with the black solid curve and the Lorentzian ﬁt with the blue dashed curve. The peak occurs at 35.277(13) MHz with a width of 2.54(4) MHz.
result in higher coil-shield capacitance Cs. Nevertheless, with careful placement of the coil close to the shield center, such error should be small enough and cannot account for the factor of 61 diﬀerence between the prediction and the data. Although we have skipped the impedance matching step before taking the frequency spectrum, the mismatched impedance should not have an impact on the width of the resonance.
One possible explanation might be the potential resonance or attenuation inside the coaxial cable connecting the resonator to the RF source. Such cable resonance may interfere with the helical resonator resonance and lower the
58

ω0 (MHz) δω0 MHz)
Q

Lorentzian Fit 35.277(13) 2.54(4) 13.9(2)

Exact Equations 33(3)
0.038(4) 8.6(5) × 102

Table 4.2: Characteristics of the unloaded resonator obtained from the Lorentzian ﬁt of the frequency spectrum and calculated from the exact equations using the measured geometry of the resonator

quality of the resonance. There are visible changes in the input and reﬂected voltages from the resonator when we switch to a longer coaxial cable. However, we still have to characterize such cable resonance and attenuation, and it may not totally explain the large discrepancy.
The coupling between the antenna coil and the main coil k play a role in this anomaly concerning the quality factor. Strong coupling between the two coils means that the main coil magnetic ﬁeld induces a strong magnetic ﬁeld in the antenna coil. This strong induced ﬁeld creates a current through the antenna coil, which then dissipates energy over the 50 Omega impedance of the RF source. This will reduce the energy stored in the magnetic ﬁeld of the main coil, thereby decreasing the quality factor.-
 Equations 3.1 and 3.2 assumes that the mutual inductance M between the two coils is negligible. [7] However, M may not be negligible when there is a strong coupling. The coupling factor’s relation to the quality factor needs to be examined further.
Another possible explanation is that the 50 kHz steps that we use are a little too large for the resonance peak and we may have missed the peak during the frequency scan. We can reﬁne our result by using smaller steps. It is worthwhile to note that for the same RF amplitude applied by the function generator, the input voltage into the resonator is higher and the reﬂected

59

voltage is lower at resonance than oﬀ resonance. Even though it is expected that lower voltage will be reﬂected at resonance, we are not sure why the same applied RF amplitude generates a higher input voltage into the resonator. Further examination is needed to characterize these diﬃculties and explain the discrepancy between the predicted and measured quality factors.
Figure 4.5: Plot of input voltage to and reﬂected voltage from the resonator vs the applied RF frequency. The black solid curve shows the input voltages and the blue dashed curve the output voltages. It should be noted that the input voltage is higher (more negative) and the reﬂected voltage is lower (less negative) at resonance than oﬀ resonance, resulting in more power transmitted.
The same process of taking the frequency spectrum and ﬁtting with the Lorentzian is repeated with diﬀerent values of capacitance. The capacitances that we use are 0, 3.8, 4.9, 6.7, 7.5, 10.5, 11.9 and 21.6 pF, which are capacitances of nominal 10, 12, 20 and 33 pF capacitors and their series com-
60

binations. These capacitors are clipped directly onto the output leads of the resonator. No long cables are used to minimized any extra capacitance. However, due to stray capacitances from the clips connecting the capacitors to the resonator output, the actual capacitance connected to the resonator may be larger than the values speciﬁed above. Each frequency spectrum is ﬁtted with the Lorentzian to ﬁnd the resonant frequency and the width of the resonance. Fig. 4.6 shows a plot of the resonant fre-
quency as a function of the trap capacitance. We can see that ω0 obtained from the Lorentzian ﬁt of each frequency spectrum agree with the theoretical prediction within uncertainty. It should be noted that all the measured resonant frequencies of the loaded resonator lie at the lower end of the predicted range for each trap capacitance. This is possibly due to the stray capacitances from the clips connecting the capacitors to the resonator, which means that the capacitance values used in the plot -
may be lower than the actual capacitances connected to the load. We can see from Fig. 4.6 that such stray capacitances may be as large as a few picofarads.
Even though the measured resonant frequency agrees with the theoretical prediction within uncertainty for all trap capacitances, there is a large discrepancy between the measured and the predicted quality factors. The measured Q are on the order of 101 while the predicted values are on the order of 102. Fig. 4.7 shows a plot of the quality factor as a function of the capacitances connected to the resonator. The data indicates that the quality factor increases with the trap capacitance. This contra-
dicts the theoretical prediction of Equation 3.2 and Fig. 3.8(a) that there is a negative correlation between
61

Figure 4.6: Plot of the resonant frequency ω0 as a function of the trap capacitance Ct. The black dots are the resonant frequencies obtained from the Lorentzian ﬁt of experimental data. The blue curve is the expected values of ω0 calculated using the exact equations and the measured resonator geometry. The dotted curves represent uncertainty in the expected values due to the uncertainty in measuring the resonator geometry.
Q and Ct. As discussed above, such large discrepancy may not be due to the positioning of the main coil inside the shield, the mismatched impedance or the coupling between the two coils. Further examination is needed to discover the cause of this discrepancy.
We have built a preliminary version of the helical RF resonator as shown in Fig. 4.1 for supplying RF signal to the trap electrodes and performed subsequent testing to characterize the resonance of the resonator for diﬀerent trap capacitances. Even though the measured value of the resonant frequency agree with theoretically predicted value within uncertainty, there is a large
62

Figure 4.7: Plot of the quality factor Q as a function of the trap capacitance Ct. The trap capacitances are obtained from the Lorentzian ﬁt of experimental data. The data indicates that the quality factor increases with the trap capacitance, which does not agree with the theoretical prediction as given in Fig. 3.8(a).
discrepancy between theory and data for the value of the quality factor. This discrepancy needs to be explained and the quality factor needs to be improved before we can connect the resonator to the ion trap. The ﬁrst option in solving this discrepancy is to make sure that the main coil lies as close to the center of the shield as possible and to resolder the main coil to the BNC bulkhead. Further options can be explored depending on the result of the repositioning of the main coil. After we have -
ﬁgured out what is causing this discrepancy in the quality factors and after the ion trap is set up in the UHV chamber, we can measure the values of the trap load, match the impedance of the resonator-trap
63

system to that of the RF source and tune the resonator to the desired resonant frequency. We also need to calculate the power that needs to be supplied to this impedance matched and tuned resonator to obtain a desired RF output of 500 V amplitude. This impedance matched and tuned resonator can then be connected to the ion trap to supply a 20 MHz, 500 V RF signal for co-trapping 9Be+ and 16O2+ ions.
64

Chapter 5
Conclusion
We have designed our ion trap system to be ultra-high vacuum compatible, developed a rigorous cleaning procedure to reduce outgassing rate and looked into bake-out and pump-down procedures. We have started the cleaning process and cleaned the copper trap electrodes with positive results. We are currently looking into electropolishing procedures to reduce the overall surface area of homemade components. We still have yet to ﬁnish fabricating a few in-vacuum parts, after which we can start the bake--
out process, assemble the vacuum chamber and pump down to the UHV pressures.
For the RF resonator, we have designed and built a preliminary version of a 20 MHz helical resonator using estimates of the trap capacitance and resistance. Testing of the resonator and analysis of the frequency spectra shows that the resonance frequency of the resonator matches with theoretical prediction whereas there is a large discrepancy between the measured and the predicted quality factors. We are not sure as to the cause of this discrepancy.
65

Further examinations are needed to characterize this discrepancy. As a ﬁrst step, we plan to resolder the main coil to the shield, making sure that the coil is exactly at the shield center or as close to the center as possible. We also plan to take the frequency spectrum using smaller steps (probably 10 kHz) to prevent failure to detect narrow resonance peaks in case there is one. Dependence of the resonance on the length of the BNC cable connecting the resonator to the RF source and the coupling -
between the two coils should also be investigated.
After we have characterized and ﬁxed the discrepancy regarding the quality factor, we can then tune the resonant frequency and impedance match the resonator to the RF source. Since we need to measure the capacitance and the resistance of the trap after it is assembled inside the vacuum chamber, we ﬁrst need to ﬁnish making the in-vacuum components and assembling the chamber. After the vacuum assembly and the trap load measurement, we can ﬁne-tune the resonator for the desired 20 MHz frequency, a h-
igh quality factor and better impedance matching with the RF source. We also need to calculate the required input RF power to produce an output voltage of 500 V, which is estimated to produce a deep potential potential well.
In addition to the linear Paul trap and the ultra-high vacuum chamber for trapping ions, we also need laser beams to cool down and manipulate the state of these ions for quantum logic spectroscopy. Celia Ou [23] has worked on frequency tripling of an infrared laser beam for cooling and detecting 9Be+ and Cheyenne Teng [24] has worked on controlling and stabilizing the frequency of the laser system. We hope to ﬁnish assembling the ion rap, the UHV chamber, the RF resonator and the laser system and -
trap our ﬁrst ion in a few months.
66

Appendix A
Estimation of trap capacitance
Ct
We can estimate the trap capacitance Ct by considering only the tips of the trap electrodes and approximating the electrodes as four long parallel wires. Fig. A shows the diagram of such approximation.
The long wire approximation is relevant since the radius of the electrode tip is 1.25 mm and the length of the electrode is 49.4 mm. r, r0 and z0 are speciﬁcations of the trap and equal 1.25 mm, 1.25 mm and 1.5 mm respectively. [2] The other lengths can be calculated from these as r1 = 3.72 mm, r2 = 5 mm and r3 = 5.5 mm.
Ct refers to the capacitance of the RF electrodes with respect to the DC electrodes. There are four diﬀerent combinations of RF and DC electrodes and capacitance for each pair will be the same so we only need to calculate the capacitance of one pair.
67

Figure A.1: Diagram for approximation of the trap electrodes as four long parallel wires. For our ion trap, r = 1.25 mm, r0 = 1.25 mm, z0 = 1.5 mm. [2] The ﬁgure is not drawn to scale.

Capacitance between RF electrode ‘a’ and DC electrode ‘b’ can be calculated by placing a charge of Q on each of the four electrodes and calculating the potential required to move a charge from the surface of one electrode to another.
According to Gauss’s law, the electric ﬁeld outside an inﬁnitely long wire of radius r with linear charge density λ is

λ

E=

.

2π 0r

(A.1)

68

Since the electric ﬁeld is radially outward, the potential diﬀerence in bringing a charge from a point A to a point B is

V=

rB
Edl =

λ

ln rB .

rA

2π 0 rA

(A.2)

The potential diﬀerence between electrodes a and b Vab has contributions from all four electrodes. These contributions can be combined by the superposition principle as follows:

λ Vab = 2π 0

ln r1 − ln r − ln r1 + ln r3

r

r1

r2

r1

= λ ln r2r3 . 2π 0 r2

(A.3)

The capacitance between the RF electrode a and the DC electrode b is

Cab

=

Q V

=

2π 0l

ln

r2 r3 r2

,

(A.4)

where l is the length of the wire (or the trap electrodes). Using the values of the lengths as speciﬁed above, this gives a capacitance of about 1 pF. For the four combination, the total trap capacitance would be 4 pF.
We are using 8 pF since we have only considered the tip of the electrodes in this approximation. Even though the rest of the electrodes are spaced farther apart, have larger surface area. Therefore, they may have the same amount of contribution to the trap capacitance.

69

Bibliography
[1] W. Marciano, “Time Variation of the Fundamental “Constants” and Kaluza-Klein Theories,” Physical Review Letters 52, 489 (1984).
[2] S. Qiao, “Constructing a Linear Paul Trap System for Measuring TimeVariation of the Electron-Proton Mass Ratio,” Amherst College Undergraduate Thesis (2013).
[3] R. Thompson, “The Determination of the Electron to Proton Inertial Mass Ratio via Molecular Transitions,” Astrophysical Letters 16, 3 (1975).
[4] J.-P. Uzan, “THe fundamental constants and their variation: observational and theoretical status,” Review of Modern Physics 75, 403 (2003).
[5] P. Schmidt, T. Rosenband, C. Langer, W. Itano, J. Bergquist, and D. Wineland, “Spectroscopy Using Quantum Logic,” Science 309, 749 (2005).
[6] W. Paul, “Electromagnetic traps for charged and neutral particles,” Reviews of Modern Physics 62, 531 (1990).
70

[7] J. Siverns, L. Simkins, S. Weidt, and W. Hensinger, “On the application of radio frequency voltages to ion traps via helical resonators,” Applied Physics B: Lasers and Optics 107, 921 (2012).
[8] J. O’Hanlon, A User’s Guide to Vacuum Technology (Wiley-Interscience, New York, 2003), 3rd ed.
[9] G. Weston, Ultrahigh Vacuum Practice (Butterworth, London, 1985).
[10] B. Samelson-Jones, “Vacuum Construction and Magneto-Optic Trapping for Bose-Einstein Condensation,” Amherst College Undergraduate Thesis (2001).
[11] Y. He, Y. Li, N. Misry, and S. Greenwald, “Cornell Electron Storage Ring phase-III interaction region vacuum chamber,” J. Vac. Sci. Technol., A 19, 1699 (2001).
[12] P. Kohl, Modern Electroplating (Wiley, 2010), chap. Electrodeposition of Gold, pp. 115–130, 5th ed.
[13] K. M. Birnbaum, Cavity QED with Multilevel Atoms, Ph.D. thesis, California Institute of Technology (2005).
[14] M. Taborelli, “Cleaning and surface properties,” in “CAS - CERN Accelerator School and ALBA Synchrotron Light Facility : Course on Vacuum in Accelerators,” (CERN, 2006).
[15] J. Abys, Modern Electroplating (Wiley, 2010), chap. Palladium Electroplating, pp. 327–368, 5th ed.
71

[16] R. B. Blakestad, Transport of Trapped-Ion Qubits wiwith a Scalable Quantum Processor, Ph.D. thesis, University of Colorado (2010).
[17] W. Macalpine and R. Schildknecht, “Coaxial Resonators with Helical Inner Conductor,” Proceedings of the IRE 47, 2099 (1959).
[18] “Radio Instruments and Measurements,” Bureau of Standards Circular C74, 252 (1937).
[19] F. Terman, Radio Engineers’ Handbook (McGraw-Hill, 1943). [20] R. Medhurst, “H.F. Resistance and Self-Capacitance of Single-Layer
Solenoids,” Wireless Engineer pp. 80–92 (1947). [21] D. Pozar, Microwave Engineering (Wiley, 2005). [22] A. I. Zverev, Handbook of Filter Synthesis (Wiley, 1967). [23] C. Ou, “Third Harmonic Conversion,” Amherst College Undergraduate
Thesis (2013). [24] C. Teng, “Frequency Control and Stabilization of A Laser System,”
Amherst College Undergraduate Thesis (2013).
72

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:08.350Z
- **Text Length:** 99077 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
