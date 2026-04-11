# PDF Document: Walther - 2012 - Controlling Fast Transport of Cold Trapped Ions.pdf

**File Path:** Walther - 2012 - Controlling Fast Transport of Cold Trapped Ions.pdf

**Processed Date:** 2026-02-10T18:17:34.673Z

**File Size:** 238.71 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 295

**Title:** Controlling Fast Transport of Cold Trapped Ions

**Collection:** TEST

---

## Extracted Text Content

arXiv:1206.0364v1 [physics.atom-ph] 2 Jun 2012
Controlling fast transport of cold trapped ions
A. Walther,1, ∗ F. Ziesel,1, ∗ T. Ruster,1 S. T. Dawkins,1 K. Ott,1 M. Hettrich,1 K. Singer,1 F. Schmidt-Kaler,1 and U. Poschinger1, †
1Institut fu ̈r Quantenphysik, Universita ̈t Mainz, Staudingerweg 7, 55128 Mainz, Germany (Dated: November 27, 2024)
We realize fast transport of ions in a segmented micro-structured Paul trap. The ion is shuttled over a distance of more than 104 times its groundstate wavefunction size during only 5 motional cycles of the trap (280 μm in 3.6 μs). Starting from a ground-state-cooled ion, we find an optimized transport such that the energy increase is as low as 0.10±0.01 motional quanta. In addition, we demonstrate that quantum information stored in a spin-motion entangled state is preserved throughout the transpo-
rt. Shuttling operations are concatenated, as a proof-of-principle for the shuttling-based architecture to scalable ion trap quantum computing.
PACS numbers: 42.50.Dv; 03.67.Lx; 37.10.Ty
The field of quantum information began its experimental uprise with the proposal from Cirac and Zoller [1] in 1995, extended by the prospect of scalability of ion trap based systems [2] via shuttling of qubits in multiplexed traps along the ideas pioneered by Wineland [3]. Scalable information processing in a multiplexed ion trap can be accomplished by having fixed processing sites where logic operations are performed, and ion qubits will be moved in and out of these regions by shuttling operation-
s. The duration of such shuttling has to be much faster than the relevant decoherence times [4]. Furthermore, it is desirable to reduce the total time consumption of all relevant operations, where shuttling will contribute a considerable amount [5], and aim for the performance of the naturally fast solid state architectures [6]. So far, ion shuttling in a multiplexed trap has been demonstrated together with additional sympathetic cooling [7], and in the adiabatic regime, where the transient displa-
cement of the ion is smaller than the size of the its wavepacket [8, 9]. Transport of neutral atoms have also been performed using magnetic [10] or optical [11] techniques. Because quantum gate operations require ions close to the motional ground state and fast transport inherently creates motional excitation, the challenge is to develop transport protocols that guarantee sufficiency small energy transfer. In this work we demonstrate shuttling operations that are highly non-adiabatic while the fin-
al state of the ion is close to the motional groundstate. We also show that quantum information stored in both the motional and the spin degree of freedom is preserved through the shuttling. During a shuttling operation, the ion motion in the harmonic trapping potential is excited when the acceleration is sufficiently strong. This motional excitation is a harmonic oscillation, characterized by a well defined phase, thus allowing it to be canceled out by proper management of the forces involved dur-
ing or after the transport. We experimentally demonstrate two methods of canceling the acquired motional excitation. One method uses two shuttles, where the transport to the destination
segment A
segment B
segment voltage
(b) Vk
τk
time
τd
280μm
(c)
(a)
FIG. 1. (color online) Schematic view of the trap and the voltage ramps (not to scale) that are used during the transport operations. In a), the segments used in the experiments are depicted together with the laser beams that are used for qubit interactions and for detection of the motional excitation. The size of each segment is 250 μm, the separation gap is 30 μm and the upper and lower rows are 500 μm apart. Part b) shows the pairwise energy-neutral transport ramp and c) the self-neutral transp-
ort (see text).
generates the same net momentum transfer as the transport back, but is applied 180◦ out of phase with respect to the secular oscillation of the ion (Fig. 1b). We refer to this as the pairwise energy-neutral transport. For the second scheme, the self-neutral transport we apply a sharp counter-“kick” to the ion at the end of a single transport operation, stopping its motion (Fig. 1c). This case of single-sided transport allows even faster shuttling and can be sequentially repeated since it is energy-
 selfneutral, making it the preferred building block for scalable quantum information protocols.

 2
The experiments are carried out in a micro-structured segmented Paul trap [12], where the trapping voltage applied to each electrode segment is controlled by an FPGA-based arbitrary waveform generator that allows high resolution for both timing and voltage, while having
low noise (. 10nV/√Hz at the trap frequency). Further noise reduction at high frequencies is done with a Π-type filter having a cut-off frequency of 300 kHz. The axial trap frequency is νax = ωax/2π = 1.41 MHz, while the radial trap frequencies are ∼ 3 MHz. The transport is carried out by varying the voltages on the segments, such that the minimum of the trapping potential is moved towards the final location in time steps of 400 ns. In order to minimize parametric excitation, the confinement stren-
gth of the trap should remain as close as possible to its original value during transport. To assure this, the voltages required for creating a trap minimum with predefined frequency at a given location are calculated a priori. This relation is established using numerically obtained data for the electrostatic trap potentials [13], and has been experimentally verified [14]. The ion used
for the experiments is 40Ca+, where an external magnetic field splits the S1/2 ground state into two levels, mJ = ±1/2, henceforth referred to as |↑〉 and |↓〉. Qubit rotations between these levels are mediated by stimulated Raman transitions [15, 16]. Each experimental run is started by i) Doppler cooling and followed by ii) optical pumping, leaving the ion in the |↑〉 state. iii) Resolved sideband cooling is then used to prepare the ion close to the motional ground state at a mean thermal phonon nu-
mber of about  ̄nth ≈ 0.1 phonons, to which the motional excitation is then compared. iv) A transport operation is performed. v) For determining the motional state, stimulated Raman transitions between |↑〉 and |↓〉 are driven by a pair of off-resonant beams propagating at 90◦ with respect to each other. The effective wavevector of the beams is aligned along the trap axis, providing a coupling to the axial mode of vibration, characterized by a Lamb-Dicke factor of η ≈ 0.23. vi) Spin read-out is perf-
ormed by a shelving pulse followed by the detection of state-dependent fluorescence [15].
For evaluating the performance of the transport, it is important to have a reliable and efficient method for measuring the amount of motional excitation of the ion. While the dynamics of the ion shuttling is of classical nature, the precision which is required calls for energy measurements schemes which work quantum mechanically, i.e. down to the single phonon regime. Doppler recooling [17] and ion loss rates have previously been used to measure extremely large energy transfers [18]. Rabi oscillat-
ions on the motional sidebands of the Raman transition (see Fig. 2a) provide an accurate but time-consuming tool for reconstruction of the motional state [19]. The measurement principle is based on the dependence of the Rabi frequency on the phonon num
0.1
1
10
100
01234
n_
α
pseudo energy
(a) (b)
0.2
0.4
0.6
0.8
1
P↑
(c)
(a)
0.2
0.4
0.6
0.8
1
0 50 100 150 200
P↑
pulse duration (μs)
(d)
(a)
FIG. 2. (color online) Determination of the motional excitation. a) Relevant levels and transitions in the 40Ca+ system. For the determination of the phonon number we use two methods based on the excitation of sidebands. b) Phonon number as a function of the pseudo energy quantity (see text), indicating the bijective nature for n ̄α . 50. Rabi oscillations for the carrier (black), first blue (blue), first red (red) and second red (dark red) sideband, (c) for the case of n ̄α = 0.10 ± 0.01 and (d) -
n ̄α = 20 ± 0.13.
ber, which manifests itself in the Rabi oscillation signal:
P↑,∆n(θ) = 1
2
n
max
∑
n=0
pn (1 + cos(Mn,∆nθ)) , (1)
where P↑,∆n(θ) indicates the measured probability for finding the ion in the |↑〉 level after driving the stimulated Raman transition, |↑, n〉→|↓, n + ∆n〉, with a pulse area of θ. The Rabi frequency is altered by the matrix element Mn,∆n [16]. The phonon probability distribution pn is given by a convolution between a thermal and a coherent phonon distribution:
pn =
N ∑
m=n
 ̄ntmh
( ̄nth + 1)m+1 · e−n ̄α  ̄n(n−m)
α
(n − m)! , (2)
where  ̄nth is the thermal mean phonon number and
 ̄nα = |α|2 the mean phonon number arising from the coherent displacement, characterized by an amplitude α, allowing for a distinction between the two distributions. The mean phonon numbers are extracted by performing a simultaneous Bayesian analysis of data sets pertaining to different transitions, ∆n, for a given shuttling operation. Imperfect readout and preparation, as well as dephasing of the Rabi oscillations from other decoherence sources, are taken into account. Thus, estimations

 3
and valid confidence intervals for the mean phonon numbers,  ̄nth and  ̄nα, are obtained for each data set. For low excitation energies, probing is done on the transitions ∆n = −1, 0, +1 (see Fig. 2c), and in the high energy regime, ∆n = 0, −1, −2 is better suited (Fig. 2d). As an optimized alternative, yielding the information about 100 times faster, we introduce a new energy metric, the pseudo energy. It is based on P↑,∆n for three different sideband transitions with fixed pulse areas:
Ep = 2 · (P↑,+1(3π) − P↑,−1(3π) − P↑,−2(2π)) + 7/2. (3) The indices refer to the blue (∆n = +1), red (∆n = −1), and second red (∆n = −2) motional sidebands, probed at the time it would take the carrier to reach the indicated pulse area. For phonon numbers below  ̄nα . 50, this measure is positive and monotonically increases with the phonon number (see Fig. 2b) and is moreover robust against small fluctuations of the transition frequencies, laser beam intensities and readout imperfections. For mean-
 phonon numbers > 50, the pseudo energy may still be used, but one must take care of the conversion ambiguity, visible in Fig. 2b. We use the pseudo energy to investigate how the motional energy of the ion depends on a dwell time, τd, between two fast transport operations, i.e. the pair-neutral scheme. The ion starts out in segment A (see Fig. 1a) and is then transported to segment B, where it remains for a time period that can be altered in steps of 20 ns (on top of the 400 ns update time), befor-
e being transported back to segment A where the readout takes place. The result is presented in Fig. 3a. We observe a periodic dependence on the dwell time, with minima in intervals of 1/νax. A few points are evaluated more accurately using the sideband Rabi oscillation method, and for the dips we find minimum excitations of  ̄nα = 0.10 ± 0.01 phonons. When the dwell time instead is such that the momentum transfer from the first and the second transport add up, we find a maximum, where fits to the-
 Rabi oscillations are consistent with a coherent state phonon distribution with up to  ̄nα ∼ 100 phonons. As expected, the energy transfer from the first shuttle can be coherently removed by the transport back, with a periodic dependence on the dwell time. For the energy self-neutral shuttling, a sharp kick is used to stop the motion. This is realized by applying a voltage pulse on a nearby electrode segment, being active for only one update sample of the waveform generator (400 ns). The kick del-
ay time, τk, between the last voltage update of the transport and the stopping momentum kick is scanned. This effectively changes at which phase in the motional period the force is applied, thus either adding to or removing motional energy. The transport back to segment A is performed adiabatically, such that this part contributes only negligibly to the final excitation. The result is presented in Fig. 3b, where both a
0.1
1
10
100
0 0.5 1 1.5 2 2.5 3
n_
α
τd (μs)
(a)
0.1
1
10
100
0 0.2 0.4 0.6 0.8 1 1.2 1.4 1.6
n_
α
τk (μs)
(b)
FIG. 3. (color online) a) Increase of motional energy for a pairwise neutral transport as a function of the dwell time between the two fast transports, with a transport duration of 11.2 μs in each direction. The solid lines show the phonon numbers obtained from the pseudo energy metric and the blue dots indicate phonon numbers obtained from the Rabi oscillation method. b) Energy increase for the self-neutral transport as a function of the kick delay time for when the stopping kick of +3.85 V (red)-
 and of -3.68 V (black) is applied. The transport duration used here is 4 μs, with an adiabatic return transport of 180 μs. Slight drifts in the axial trap frequency affect the precise timing of the optimal kick delay such that a recalibration of the time axis was required.
positive and a negative voltage kick amplitude is shown, displaying a shift of half a cycle with respect to each other. The amplitude of the voltage kick is calibrated by minimizing the energy transfer at the kick delay time corresponding to the minimum. The self-neutral transports displays an excitation as low as the pair-neutral ones, but allows even faster shuttles. The shortest duration, for which transport with negligible excitation was achieved, was 3.6 μs, which corresponds to about 5 oscil-
lation cycles, plus a delay time of τk = 220 ns.
For both types of transports, the results were obtained using ramps where the spatial location of the ion varies in a sin2 shaped manner with respect to time. Other ramp shapes, such as a linear one, yield different results but are also able to realize energy-neutral transport, as considered previously [20, 21]. We also applied both shuttling protocols to two-ion crystals, obtaining similarly low energy increases on both the common and stretch modes of oscillation. The results show that we obtain -
a high degree of control over the dynamics of trapped atomic particles. The placement accuracy in phase space is given by

 4
the minimum excitation of 0.1 phonons compared to the phase space volume occupied by the shuttling trajectory in units ħ. From this we attain a relative accuracy on the order of 10−8. So far, we have shown that after a fast shuttle the motional ground state |n = 0〉 can be recovered. This control is now extended to spin-motion entangled states: We investigate how quantum information can be stored, and transported, in a superposition of Fock states. For this we perform a spin echo experiment using p-
ulses on the blue sideband Raman transition, where a pairneutral transport is carried out in the second branch. Starting with the ion in state |↑, n = 0〉, a π/2 pulse on the blue sideband will put the ion into the state |↑, n = 0〉 + eiφ |↓, n = 1〉, a spin-motion entangled state with phase φ ≡ 0. After the shuttling, a phase shift of this state will arise from changes to the energy levels of both the spin and the motional part of the wavefunction. If one can assure that the spin level splitting rem-
ains constant, any measured phase shift will reveal changes to the motional energy level spacing, making it a versatile and precise probe of the time-dependent trapping potential. In Fig. 4 a and b, spin echo contrast curves are displayed, where the phase of the concluding π/2 pulse is varied. The data in Fig. 4a is obtained using the carrier transition with and without transport. After a magnetic field gradient compensation has been performed [22], no phase shift between the two data sets is obta-
ined, proving that the Zeeman splitting between the spin energy levels remains constant during the transport. The data in Fig. 4b is obtained using the blue sideband transition, and the phase shift visible in the transported case is thus acquired solely from the motional energy difference of the spin-motion entangled state. Upon using the spin-motion entangled state as a sensitive probe for the phonon energy level splitting, we found that the trap frequency varied slightly with the distance betwee-
n the segments, due to technical imperfections. This resulted in a spatial modulation of the trap frequency by at most about 80 kHz for an ion position right between the two segments, and near zero directly above the segment centers. A set of position dependent correction factors can be readily obtained, by scanning the dwell time at various distances and for varying voltages, such that the phase shift is zeroed at each location. After this procedure, the probing is repeated and we find that the t-
rap frequency deviations are reduced by two orders of magnitude, down to the measurement precision of 390 Hz, using a dwell time of 100 μs. This corresponds to less than one per mille of the trap frequency, as shown in Fig. 4c. It is interesting to consider that the quantum information stored in a coherent superposition of two Fock states, even though being displaced by more than 100 phonons during the transport, can be fully retrieved. We have demonstrated fast shuttling operations with small res-
idual motional excitation, such that the ion ends
-0.05
0.00
0.05
0.10
0.0 0.2 0.4 0.6 0.8 1.0
∆ν/νax (%)
transport distance (segments)
(c)
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0.8
0.9
1.0
0 π/2 π 3π/2 2π
P↑
analysis phase
(a)
π/2 π 3π/2 2π
(b)
FIG. 4. (color online) Proof of phase coherence of the qubit during and after transport. a) Spin echo interference when the ion prepared in a superposition of spin states with (|↑〉 + |↓〉) |n = 0〉. No phase shift is observed when comparing the ion at rest (red) to a transport of one segment (280 μm) and back (black). b) When the ion is shuttled in a superposition of Fock states |↑, n = 0〉 + eiφ |↓, n = 1〉, we observe a phase shift between the situation at rest (red) and with transport (black) indic-
ating a change to the motional energy levels during transport. In c), the spin-motion entangled probe is used to obtain a distance-independent trap frequency, with precisions well below 1 kHz. The lines indicate a residual of less than one per mille of the trap frequency, where the dashed lines indicate the standard deviation of the distribution of points.
the transport near the motional groundstate. We also showed that qubit information is preserved through the shuttling by transporting a spin-motion entangled state with negligible loss of coherence. As a next step we intend to perform fast splitting operations of multi-ion crystals. Our long-term goal is to extend the transport scheme to parallel operations on multiple segments and combine it with laser-driven quantum logic gates. The authors acknowledge Alex Wiens for earlier contributions and He-
inz Lenk for development of electronics hardware. We acknowledge financial support by the IARPA SQIP project (MQCO framework), and by the European commission within the IP AQUTE and STREP Diamant, and the VW-Stiftung. A.W. acknowledges funding from the Swedish Research Council.
∗ These authors contributed equally to the work

 5
† contact: poschin@uni-mainz.de, www.quantenbit.de [1] I. Cirac and P. Zoller, Phys. Rev. Lett. 74, 4091 (1995). [2] R. Blatt and D. Wineland, Nature 453, 1008 (2008). [3] D. Kielpinski, C. Monroe, and D. Wineland, Nature 417, 709 (2002). [4] T. Monz, P. Schindler, J. T. Barreiro, M. Chwalla, D. Nigg, W. A. Coish, M. Harlander, W. H ̈ansel, M. Hennrich, and R. Blatt, Phys. Rev. Lett. 106, 130506 (2011). [5] A. Steane, Quantum Information and Computation 3, 171 (2007). [6] M. Mariantoni, H. Wang, T-
. Yamamoto, M. Neeley, R. C. Bialczak, Y. Chen, M. Lenander, E. Lucero, A. D. OConnell, D. Sank, M. Weides, J. Wenner, Y. Yin, J. Zhao, A. N. Korotkov, A. N. Cleland, and J. M. Martinis, Science 334, 61 (2011). [7] J. P. Home, D. Hanneke, J. D. Jost, J. M. Amini, D. Leibfried, and D. J. Wineland, Science 325, 1227 (2009). [8] R. B. Blakestad, C. Ospelkaus, A. P. VanDevender, J. M. Amini, J. Britton, D. Leibfried, and D. Wineland, Phys. Rev. Lett. 102, 153002 (2009). [9] R. B. Blakestad, C. Ospelka-
us, M. J. B. J. VanDevender, J. H. Wesenberg, D. Leibfried, and D. Wineland, Phys. Rev. A 84, 032314 (2011). [10] W. H ̈ansel, J. Reichel, P. Hommelhoff, and T. W. H ̈ansch, Phys. Rev. Lett. 86, 608 (2001). [11] S. Kuhr, W. Alt, D. Schrader, I. Dotsenko, Y. Miroshnychenko, W. Rosenfeld, M. Khudaverdyan, V. Gomer, A. Rauschenbeutel, and D. Meschede, Phys. Rev. Lett. 91, 213002 (2003).
[12] S. Schulz, U. Poschinger, F. Ziesel, and F. SchmidtKaler, New J. Phys. 10, 045007 (2008). [13] K. Singer, U. Poschinger, M. Murphy, P. Ivanov, F. Ziesel, T. Calarco, and F. Schmidt-Kaler, Rev. Mod. Phys. 82, 2609 (2010). [14] G. Huber, F. Ziesel, U. G. Poschinger, K. Singer, and F. Schmidt-Kaler, Appl. Phys. B 100, 725 (2010). [15] U. G. Poschinger, G. Huber, F. Ziesel, M. Deiss, M. Hettrich, S. A. Schulz, G. Poulsen, M. Drewsen, R. J. Hendricks, K. Singer, and F. Schmidt-Kaler, J. Phys. B: A-
t. Mol. Opt. Phys. 42, 154013 (2009). [16] D. Leibfried, R. Blatt, C. Monroe, and D. Wineland, Rev. Mod. Phys. 75, 281 (2003). [17] J. H. Wesenberg, R. J. Epstein, D. Leibfried, R. B. Blakestad, J. Britton, J. P. Home, W. M. Itano, J. D. Jost, E. Knill, C. Langer, R. Ozeri, S. Seidelin, and D. J. Wineland, Phys. Rev. A 76 (2007). [18] G. Huber, T. Deuschle, W. Schnitzler, R. Reichle, K. Singer, and F. Schmidt-Kaler, New J. Phys. 10, 013004 (2008). [19] D. Leibfried, D. M. Meekhof, B. E. King, C. M-
onroe, W. M. Itano, and D. J. Wineland, Phys. Rev. Lett. 77, 4281 (1996). [20] R. Reichle, D. Leibfried, R. Blakestad, J. Britton, J. Jost, E. Knill, C. Langer, R. Ozeri, S. Seidelin, and D. Wineland, Fortschr. Phys. 54, 666 (2006). [21] D. Hucul, M. Yeo, S. Olmschenk, C. Monroe, W. Hensinger, and J. Rabchuk, Quantum Information and Computation 8, 05010578 (2008). [22] A. Walther, U. Poschinger, F. Ziesel, M. Hettrich, A. Wiens, J. Welzel, and F. Schmidt-Kaler, Phys. Rev. A 83, 062329 (2011).

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:34.673Z
- **Text Length:** 22013 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
