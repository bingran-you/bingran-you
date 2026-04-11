# PDF Document: (Single photon generation - 2009 Innsbruck) Deterministic single-photon source from a single ion.pdf

**File Path:** (Single photon generation - 2009 Innsbruck) Deterministic single-photon source from a single ion.pdf

**Processed Date:** 2026-02-10T18:13:30.269Z

**File Size:** 255.06 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 834

**Title:** (Single photon generation - 2009 Innsbruck) Deterministic single-photon source from a single ion

**Collection:** Multiplexing > Photon Generation

---

## Extracted Text Content

arXiv:0905.2885v1 [quant-ph] 18 May 2009

Deterministic single-photon source from a single ion
H G Barros1,2, A Stute1,2, T E Northup1, C Russo1,2, P O Schmidt1 and R Blatt1,2
1 Institut fu¨r Experimentalphysik, Universit¨at Innsbruck, 6020 Innsbruck, Austria 2 Institut fu¨r Quantenoptik und Quanteninformation (IQOQI), 6020 Innsbruck, Austria E-mail: helena.barros@uibk.ac.at
Abstract. We realize a deterministic single-photon source from one and the same calcium ion interacting with a high-ﬁnesse optical cavity. Photons are created in the cavity with eﬃciency (88 ± 17)%, a tenfold improvement over previous cavity-ion sources. Results of the second-order correlation function are presented, demonstrating a high suppression of two-photon events limited only by background counts. The cavity photon pulse shape is obtained, with good agreement between experiment and simulati-
on. Moreover, theoretical analysis of the temporal evolution of the atomic populations provides relevant information about the dynamics of the process and opens the way to future investigations of a coherent atom-photon interface.
PACS numbers: 42.50.Pq, 32.80.Qk

Deterministic single-photon source from a single ion

2

1. Introduction

Single photons represent an important resource in quantum information science [1, 2], as basis elements in both linear optical quantum computing and quantum cryptography [3, 4, 5] and as “ﬂying qubits” travelling between the nodes of a quantum network [6, 7]. The generation of single photons through the process of spontaneous decay from a single excited emitter has been demonstrated in diverse systems [8], for example in molecules [9, 10], color centers in diamonds [11, 12], quantum dots [13, 14],-
 neutral atoms [15] and ions [16]. Eﬃcient collection of these photons presents a challenge, which has been addressed by coupling the emitter to a resonator in the framework of cavity quantum electrodynamics [17]. A more fundamental diﬃculty lies in the context of quantum networks, in which a coherent process is required in order to map quantum states between atoms and photons.
The latter problem can be overcome when the coupling to the resonator is coherent, in which case we can exploit a vacuum-stimulated process to generate single photons within the cavity mode, as has been realized using trapped neutral atoms and ions [18, 19, 20]. In the case of neutral atoms, the emitter is conﬁned in an optical dipole potential within a high-ﬁnesse optical cavity. The interaction between atom and cavity ﬁeld is achieved via a Stimulated Raman Adiabatic Passage (STIRAP) process [21-
]; a coherent ﬁeld applied between a ground and an excited state of the atom transfers the atom to a second ground state while creating a photon in the cavity. Signiﬁcant accomplishments include strong coupling between the atom and cavity [22], generation of cavity photons with near-unit eﬃciency [18] and the ability to quantify photonemission statistics for a single atom [19]. However, trap lifetimes of neutral atoms in cavities are currently limited to at most one minute [19]. In addition, the s-
trength of the atom-cavity coupling varies from atom to atom due to the geometry of the dipole trap, and the precise control of atom number presents challenges. Ion-trap systems face greater obstacles in coupling strongly to a cavity, due to the necessity of integrating the cavity with the ion-trap structure. In contrast to neutral atoms, however, ions oﬀer the opportunity for extended trap lifetimes and known spatial localization within the cavity, including precise positioning with respect to th-
e cavity standing-wave mode [23, 24, 25]. Furthermore, experiments with trapped ions have already demonstrated signiﬁcant landmarks in the role of stationary qubits in quantum computation, including quantum logic gates and entanglement of up to eight ions [26, 27, 28, 29]. Single-photon generation has been achieved for a single ion in a cavity using the STIRAP process, which moreover enables tailored control of the photon’s waveform [20].
Here we report on the realization of an eﬃcient single-photon source using a single calcium ion trapped within a high-ﬁnesse optical cavity. Our system shares some features with the original ion-trap single-photon experiment [20], including use of the same ion species and transition, although we employ a far-detuned Raman process rather than a STIRAP process. However, while the previous realization generated intracavity photons with at most (8.0 ± 1.3)% eﬃciency, we are able to produce photons wit-
h near-unit

Deterministic single-photon source from a single ion

3

eﬃciency, in (88 ± 17)% of all attempts. This improvement is due in part to a more favorable set of cavity parameters and is aided by the narrow linewidth of our classical drive ﬁeld. Rather than driving simultaneous transitions between multiple Zeeman sublevels, we address a speciﬁc transition, which we resolve via Raman spectroscopy [25]. We use master-equation simulations of the eight-level ion and two cavity modes in order to guide our choice of parameters, with the goal of optimizing the phot-
on generation eﬃciency. Strong agreement of our simulations with experimental results conﬁrms that we have developed a powerful model of our multilevel system, allowing us to investigate the dynamics of the photon generation process.

(a)
APD

APD

drive

MMF

(b)

+1/2

-1/2

d

c

+3/2 +1/2 -1/2 -3/2
d

+1/2 -1/2

40Ca+

Figure 1. Experimental setup. (a) Trapped ion surrounded by a high-ﬁnesse optical cavity and addressed by a drive laser. Photons produced in the cavity are sent through a multimode ﬁbre (MMF) to the Hanbury Brown–Twiss setup, which consists of a beamsplitter and two avalanche photodiodes (APDs). (b) Relevant level scheme of the 40Ca+ ion. A drive laser on the S1/2 −P1/2 transition (Rabi frequency Ωd and detuning ∆d) together with the cavity on the P1/2 − D3/2 (coupling constant g and detuning ∆c) -
perform a Raman transition between the Zeeman sublevels | S1/2, m = +1/2 and | D3/2, m = −1/2 .

2. Overview of experiment
2.1. Experimental apparatus
A detailed description of the experimental setup can be found in [25]. In brief, we trap a single 40Ca+ ion in a linear Paul trap situated in the center of a high-ﬁnesse optical cavity; the cavity is 2 cm long and has asymmetric mirror reﬂectivities. The ion and the cavity ﬁeld interact via the atomic transition | P1/2, m = +1/2 ↔ | D3/2, m = −1/2

Deterministic single-photon source from a single ion

4

at 866 nm (cavity ﬁnesse of 70 000) with a maximum coupling strength of g0 = 2π × 1.6 MHz. With a decay rate given by 2κ = 2π × 0.108 MHz, the photons leave the cavity and are guided by a multimode ﬁbre to a Hanbury Brown–Twiss (HBT) setup, as shown in Figure 1(a). This setup is composed of a 50/50 beamsplitter and two avalanche photodiodes (APDs) with measured quantum eﬃciencies of (41 ± 2)% and (42 ± 2)% and allows us to realize correlation measurements between photons. A series of dichroic mirr-
ors and optical ﬁlters eliminate stray light as well as transmission from the 785 nm laser used to stabilize the cavity length.

2.2. Raman process
The interaction between ion and cavity is achieved via a vacuum-stimulated Raman transition between the S and D manifolds, in which a drive laser at 397 nm (linewidth ≈ 30 kHz) constitutes the ﬁrst arm and the cavity represents the second arm of the transition, as shown in the level scheme of Figure 1(b). A magnetic ﬁeld of B = 0.2 mT is applied to the ion perpendicular to the cavity axis in order to lift the Zeeman degeneracy. Both laser and cavity are detuned from the P 1/2 manifold by ∆d ≈ ∆c ≈-
 335 MHz. The actual values of these detunings are set to fulﬁll one of the six possible Raman resonances between the two S and four D sublevels [25]. In this oﬀ-resonant scheme, we can write the eﬀective Rabi frequency of this Raman transition and the eﬀective atomic decay rate as Ωeﬀ ≈ g · Ωd/2|∆d| and γeﬀ ≈ γ·(Ωd/2|∆d|)2, respectively, where Ωd is the Rabi frequency of the drive laser [30]. With well-chosen values of ∆d and Ωd, it is possible to achieve an intermediate regime of operation in wh-
ich Ωeﬀ ≈ γeﬀ . In this regime, the increased probability of realizing the Raman transition when compared to the eﬀective atomic spontaneous decay rate allows coherent processes to become more pronounced.

2.3. Pulse sequence and data acquisition
The experiment is realized in a pulsed fashion. An initial drive laser pulse of 120 µs generates a photon in the cavity, followed by a wait interval of 250 µs. This long wait interval is not necessary but allows us to resolve photon correlation data easily. As the D3/2 state is metastable, a laser pulse of 20 µs at 866 nm coupling the D3/2 and P 1/2 manifolds is then applied to recycle the atomic population, in conjunction with a reddetuned beam for Doppler cooling on the S1/2 − P1/2 transition. F-
inally, a 20 µs optical pumping laser pulse at 397 nm between the | S1/2, m = −1/2 and | P1/2, m = +1/2 sublevels prepares the ion in the initial state | S1/2, m = +1/2 with an eﬃciency > 98%; the recycling laser remains on during this stage. This 414.5 µs sequence is repeated 3500 times within each run, interleaved with intensity stabilization for the drive and recycling lasers; we obtain 4102 runs over the duration of three hours. Photon events are recorded in the two APDs with a resolution of 4-
 ps and an eﬃciency of ηdet = (5.1 ± 1.0)%, where this number represents the probability that a photon in the cavity will be detected at the APDs. All data presented here were obtained with one and the same ion, its coupling

Deterministic single-photon source from a single ion

5

to the mode of the cavity controlled precisely over the course of many hours. Sudden episodes in which the ion becomes heated are observable as brief dropouts of the signal from the cavity and were discarded from the data obtained, comprising 174 runs (eight minutes of data). In addition, 219 runs (ten minutes) were discarded due to the onset of a rapid drift in the laser frequencies of the experiment.

g(2)(τ)

12 Simulation Experiment
10
8
6
4
2
0 −2000 −1500 −1000 −500 0 500 1000 1500 2000
τ (µs)
Figure 2. Normalized second-order temporal correlation function of the single-photon source, with background subtracted. Experimental data (blue dotted line) is compared with a theoretical simulation (red straight line). The time-bin resolution is 1 µs, and the repetition period is 414.5 µs.

3. Single-photon source statistics
3.1. Temporal correlation function and pulse shape
The second-order temporal correlation function g2(τ ) is obtained from cross-correlations between photon arrival times at the two detectors as a function of time delay τ , normalized to the mean intensity; the results are shown in Figure 2. The temporal structure of g2(τ ) reveals the characteristics of a pulsed source of light: the individual peaks are separated by the drive pulse period of 414.5 µs, and their width is given by the convolution of the waveform of two single pulses. The deﬁning cha-
racteristic of a singlephoton source is evident in the absence of a peak at τ = 0, which reﬂects the probability of detecting two photons within the same drive sequence. We observe a total of 150±150 background-subtracted counts in a window of ±207.25 µs around τ = 0. Suppression is thus limited entirely by background counts, which consist solely of APD dark counts. In comparison, we detect 581000 ± 2000 single photons over the measurement period. Background subtraction is accomplished as describe-
d in [31]. We introduce an artiﬁcial

Deterministic single-photon source from a single ion

6

dead time of 2.5 µs to avoid spurious counts due to after-pulsing of our detectors, which occurs with probability 1.1% within this window. In addition, we observe a narrow peak in cross-correlations at τ = 125 ns corresponding to a photon emitted by one APD during a detection event, then reﬂected back from the cavity output mirror to the other detector. These reﬂected photons are conﬁned to a 20 ns window, which is removed from the data [32]. The single-photon nature of our source is due to the fa-
ct that exactly one ion is trapped within an optical cavity. After emitting a photon into the cavity mode, the ion occupies the metastable D3/2 state with a one-second lifetime, ensuring no further coupling to the drive beam.
In order to evaluate the pulse shape of the photon exiting the cavity, we generate a histogram of the time interval between the start of the drive pulse and detection of a photon. This histogram is then normalized by the number of trials, and the resulting probability distribution of photon arrival times per time bin is shown in Figure 3. The total area of ηexp = 0.045 under the curve thus represents the probability to detect a photon in the course of a single trial. From our previous measurement -
of the detection eﬃciency, we calculate a photon creation eﬃciency of ηc = ηexp/ηdet = (88 ± 17)%.

2.5 x 10−3 2

Experiment Simulation

Photon detection probability per time bin

1.5

1

0.5

0

0

20

40

60

80

100

120

Time after onset of drive pulse (µs)

Figure 3. Photon pulse shape in the time window of a drive pulse. For each 500 ns time bin, we plot the probability to detect a photon (blue dotted line). Simulations are superimposed (red straight line).

3.2. Simulations
Also shown in Figure 3 is the result of a master-equation simulation of the eight-level 40Ca+ ion and two orthogonal cavity modes, each with a truncated basis of three Fock states. Linewidths of the atom, cavity and drive ﬁeld are included as decoherence channels in the Liouvillian [33]. We perform independent calibration measurements for all parameters, including magnetic ﬁeld and Rabi frequency, detuning and linewidth of

Deterministic single-photon source from a single ion

7

the drive ﬁeld. In order to ﬁnd the best agreement with the data, we then adjust three of these parameter values within the error range of their measurement. Speciﬁcally, we use a Rabi frequency of the drive ﬁeld Ωd = 2π × 30 MHz, given our calibrated value of 2π × (40 ± 10) MHz. Second, the cavity and drive laser frequencies are initially set to meet the Raman resonance condition, but over the course of several hours of data acquisition, their relative detuning drifts by a few hundreds of kHz. It-
 is not realistic to reproduce this drift in our simulations, and we instead use an average detuning value of 2π × 60 kHz. Finally, the measured photon detection eﬃciency of 0.045 is taken into account in the simulation result by appropriate scaling of the amplitude. This scaling allows us to infer an output path eﬃciency of 6.1%, consistent with ηdet = (5.1 ± 1.0)% (section 2.3). The strong agreement that we are able to obtain with experiment suggests that our simulations provide a realistic mode-
l of the complex dynamics of our atomcavity system, which in turn allows us to understand the relative processes of cavitystimulated and spontaneous photon emission. For the parameters shown in Figure 3, we extract a photon creation eﬃciency of 74%, consistent with the experimentally determined value ηc = (88 ± 17)%.

(a)

S state populations

Population

(b)

D state populations

Population

Figure 4. Temporal evolution of atomic populations in the (a) S 1/2 manifold, and (b) D 3/2 manifold, in the time window of a drive pulse.
Simulations also provide important information about the temporal evolution of the atomic populations. Before the photon generation sequence begins, we initialize the ion in the state | S1/2, m = +1/2 . We then introduce the drive pulse, which is tuned to Raman resonance with the state | D3/2, m = −1/2 , in order to begin population transfer between the two states. However, due to spontaneous scattering from the

Deterministic single-photon source from a single ion

8

excited P manifold to the S and D manifolds, and to a lesser extent to oﬀ-resonant Raman transfer, population also accumulates in the remaining four S and D sublevels. This process is shown in Figure 4, which plots the S and D populations as a function of time during the interval when the drive pulse is active. In Figure 4(a), the population in the initial state | S1/2, m = +1/2 is seen to decrease with time as expected. In addition, a small fraction of population is transfered to the | S1/2, m = -
−1/2 state, reaching a maximum within approximately 20 µs, after which the state slowly depopulates. This population results from a Raman scattering process in which the excited state P 1/2 is oﬀ-resonantly driven. Rayleigh scattering back to the initial | S1/2, m = +1/2 state is also possible, so that the intended process of Raman transfer to the D manifold may only occur after multiple scattering events.
In Figure 4(b), the corresponding accumulation of population in the four D sublevels is plotted. (Note that the fractional population in the two P sublevels remains negligible, that is, on the order of 10−4.) We emphasize that the laser-cavity Raman transition is indeed the dominant process, and the population of the | D3/2, m = −1/2 state reaches approximately 80% at the end of the pulse interval. The populations of the three remaining D sublevels are primarily due to spontaneous decay from the u-
pper state P; also, excited state decay to the target state | D3/2, m = −1/2 is responsible for 6% of its ﬁnal population, in addition to the 74% reported earlier, attributed to the photon generation process.
These dynamics are highly sensitive to input parameters and have thus guided our selection of appropriate experimental values as well as our understanding of the limits of our apparatus. For example, we have seen that the narrow linewidth of our drive ﬁeld, a recent technical upgrade, results in a signiﬁcant improvement in photon generation eﬃciency. In addition, we have selected the Rabi frequency and detuning of our drive ﬁeld in order to work in a regime of high photon generation eﬃciency. Whil-
e in principle, a smaller eﬀective Rabi frequency for the Raman transition would further increase the eﬃciency, the process would in this case become too sensitive to previously mentioned frequency drifts in the laboratory.

4. Conclusion and outlook
We have demonstrated a highly eﬃcient ion-cavity single-photon source and characterized its output pulse shape and dark-count-limited suppression of two photon events. Such a source oﬀers the prospect for coherent state transfer between atoms and photons within a quantum network. However, one must consider the obstacles that realistic experimental parameters present for this transfer process. The simulations of section 3.2 represent an important step in this direction, as they allow us to analyze -
processes which would destroy coherence during photon generation. Consider, for example, the Raman and Rayleigh scattering processes which may occur between the P and S manifolds. The results of [34, 35] have shown that while Raman scattering events introduce decoherence to the system, coherence may be preserved during Rayleigh

Deterministic single-photon source from a single ion

9

scattering, which returns the atom to its initial state. From this perspective, it is interesting to evaluate the percentage of photons generated in the cavity without Raman scattering. We can explore this situation by modifying our simulation to include an artiﬁcial, ninth atomic level, accessed only through rapid decay from the state | S1/2, m = −1/2 ; the new level thus functions as a dark state which collects any population that undergoes Raman scattering. By comparing the modiﬁed simulation t-
o the original, we ﬁnd that 70.3% of cavity photons belong to this target group, that is, most photon generation events do not include a Raman scattering process.
Moreover, we anticipate that we can increase this fraction by truncating the length of the drive pulse (for the same Rabi frequency). This is suggested by Figure 4(a): the | S1/2, m = −1/2 population accumulates slowly, and its long tail is due to events where the ion must wait for another scattering event before it can undergo Raman transfer from the | S1/2, m = +1/2 state. Thus, by eliminating later events, we suppress Raman scattering, at the cost of a reduction in photon generation eﬃciency. T-
o conﬁrm this, we truncate the drive pulse in our simulation by a factor of ten, so that it has a length of 12 µs. In this case, while the simulated photon generation eﬃciency drops from 74% to 30%, we ﬁnd that 98.3% of the cavity photons are created without Raman scattering. Although our current experiments start with a pure state, where no coherence is stored in the ion, we ﬁnd these results promising for future eﬀorts in which the ion is prepared in a superposition state, with the goal of deter-
ministic state transfer to a photon.

5. Acknowledgments
This work has been partially supported by the Austrian Science Fund (SFB 15), by the European Commission (QUEST network, HPRNCT-2000-00121, QUBITS network, IST-1999-13021, SCALA Integrated Project, Contract No. 015714), and by the “Institut fu¨r Quanteninformation GmbH.” C. Russo acknowledges support from the Fundac¸˜ao para a Ciˆencia e a Tecnologia – SFRH/BD/6208/2001, and A. Stute acknowledges support from the Studienstiftung des deutschen Volkes.

References
[1] Zoller P et al 2005 Eur. Phys. J. D 36 203 [2] Monroe C 2002 Nature 416 238 [3] Knill E, Laﬂamme R and Milburn G J 2001 Nature 409 46 [4] Raussendorf R and Briegel H J 2001 Phys. Rev. Lett. 86 5188 [5] Gisin N, Ribordy G, Tittel W and Zbinden H 2002 Rev. Mod. Phys. 74 145 [6] Cirac I, Zoller P, Kimble J and Mabuchi H 1997 Phys. Rev. Lett. 78 3221 [7] Gheri K M, Ellinger K, Pellizzari T and Zoller P 1998 Fortschr. Phys. 46 401 [8] Grangier P, Sanders B and Vuckovic J 2004 New J. Phys. 6 [9] Bru-
nel C, Lounis B, Tamarat P and Orrit M 1999 Phys. Rev. Lett. 83 2722 [10] Lounis B and Moerner W E 2000 Nature 407 491–3 [11] Brouri R, Beveratos A, Poizat J P and Grangier P 2000 Opt. Lett. 25 1294 [12] Kurtsiefer C, Mayer S, Zarda P and Weinfurter H 2000 Phys. Rev. Lett. 85 290 [13] Santori C, Pelton M, Solomon G, Dale Y and Yamamoto Y 2001 Phys. Rev. Lett. 86 1502

Deterministic single-photon source from a single ion

10

[14] Press D, G¨otzinger S, Reitzenstein S, Hofmann C, Lo¨ﬄer A, Kamp M, Forchel A and Yamamoto Y 2007 Phys. Rev. Lett. 98 117402
[15] Darquie B, Jones M P A, Dingjan J, Beugnon J, Bergamini S, Sortais Y, Messin G, Browaeys A and Grangier P 2005 Science 309 454
[16] Maunz P, Moehring D L, Olmschenk S, Younge K C, Matsukevich D N and Monroe C 2007 Nature Phys. 3 538
[17] Berman P R 1994 Cavity Quantum Electrodynamics (San Diego, Academic Press) [18] McKeever J, Boca A, Boozer A D, Miller R, Buck J R, Kuzmich A and Kimble H J 2004 Science
303 1992 [19] Hijlkema M, Weber B, Specht H P, Webster S C, Kuhn A and Rempe G 2007 Nature Phys. 3
253 [20] Keller M, Lange B, Hayasaka K, Lange W and Walther H 2004 Nature 431 1075 [21] Bergmann K, Theuer H and Shore B W 1998 Rev. Mod. Phys. 70 1003 [22] Miller R, Northup T E, Birnbaum K M, Boca A, Boozer A D and Kimble H J 2005 J. Phys. B
38 S551 [23] Guth¨ohrlein G R, Keller M, Hayasaka K, Lange W and Walther H 2001 Nature 414 49 [24] Mundt A B, Kreuter A, Becher C, Leibfried D, Eschner J, Schmidt-Kaler F and Blatt R 2002
Phys. Rev. Lett. 89 103001 [25] Russo C et al 2009 Appl. Phys. B 95 205 [26] Leibfried D et al 2003 Nature 422 412 [27] Ha¨ﬀner H et al 2005 Nature 438 643 [28] Leibfried D et al 2005 Nature 438 639 [29] Benhelm J, Kirchmair G, Roos C F and Blatt R 2008 Nature Phys. 4 463 [30] Dubin F, Russo C, Barros H G, Stute A, Becher C, Schmidt P O and Blatt R, in preparation [31] Keller M, Lange B, Hayasaka K, Lange W and Walther H 2004 New J. Phys. 6 95 [32] Russo C 2008 Photon statistics of a single ion co-
upled to a high-ﬁnesse cavity (Innsbruck,
University of Innsbruck) [33] Carmichael H 1993 An Open Systems Approach to Quantum Optics (Berlin Heidelberg, Springer-
Verlag) [34] Ozeri R et al 2005 Phys. Rev. Lett. 95 030403 [35] Ozeri R et al 2007 Phys. Rev. A 75 042329

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:13:30.269Z
- **Text Length:** 24133 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
