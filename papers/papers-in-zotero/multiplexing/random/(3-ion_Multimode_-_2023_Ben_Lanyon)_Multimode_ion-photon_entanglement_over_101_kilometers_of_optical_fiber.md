# PDF Document: (3-ion Multimode - 2023 Ben Lanyon) Multimode ion-photon entanglement over 101 kilometers of optical fiber.pdf

**File Path:** (3-ion Multimode - 2023 Ben Lanyon) Multimode ion-photon entanglement over 101 kilometers of optical fiber.pdf

**Processed Date:** 2026-02-10T18:15:23.507Z

**File Size:** 4161.58 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 352

**Title:** (3-ion Multimode - 2023 Ben Lanyon) Multimode ion-photon entanglement over 101 kilometers of optical fiber

**Collection:** Multiplexing > Random

---

## Extracted Text Content

Multimode ion-photon entanglement over 101 kilometers of optical fiber
V. Krutyanskiy,1, 2, ∗ M. Canteri,1, 2 M. Meraner,1 V. Krcmarsky,2, 1 and B. P. Lanyon1, 2 1Institut fu¨r Experimentalphysik, Universita¨t Innsbruck, Technikerstr. 25, 6020 Innsbruck, Austria
2Institut fu¨r Quantenoptik und Quanteninformation, Osterreichische Akademie der Wissenschaften, Technikerstr. 21a, 6020 Innsbruck, Austria
(Dated: August 21, 2023)
A three-qubit quantum network node based on trapped atomic ions is presented. The ability to establish entanglement between each of the qubits in the node and a separate photon that has travelled over a 101 km-long optical fiber is demonstrated. By sending those photons through the fiber in close succession, a remote entanglement rate is achieved that is greater than when using only a single qubit in the node. Once extended to more qubits, this multimode approach can be a useful technique to boost-
 entanglement distribution rates in future long-distance quantum networks of light and matter.

arXiv:2308.08891v1 [quant-ph] 17 Aug 2023

I. INTRODUCTION
Envisioned quantum networks consist of matter-based nodes for information processing and storage, that are interconnected with photonic links for the establishment of entanglement between the nodes [1, 2]. Such networks could span distances from a few meters to a world-wide quantum network and would enable applications in computing, sensing and communication. Photon-mediated entanglement has been established across elementary networks consisting of two [3–11] and three [12] remote matter qubits, d-
istributed over distances up to a 1.5 kilometers [13]. Recently, two atoms 400 m apart were entangled over a spooled 33 km-long fiber channel [14].
A key requirement for long-distance quantum networking is the ability to entangle a matter qubit with a photon and to distribute that photon over many tens of kilometers. That ability has been demonstrated using a range of different systems including trapped ions [15–17] and atoms [18], for distances of up to 50 kilometers [17]. A second key requirement is the ability to integrate multiple quantum-logic capable qubits into network nodes [2]. Nodes consisting of two co-trapped atoms [19], two qubit-
s in a diamond-defect system [20] and two trapped ions [21–24] have been demonstrated.
One advantage of having multiple qubits in network nodes is the possibility to perform multimode entanglement distribution [25]. With a single matter-qubit, one has to wait at least the light travel time to learn if entanglement distribution was successful between nodes before trying again, or entanglement with the first photon is lost. For example, over 100 kilometers of optical fiber, the light travel time limits the maximum attempt rate for establishing remote entanglement to 1 kHz, which given-
 the 1 % transmission probability using standard optical fibers at 1550 nm, would yield a maximum possible success rate of 10 Hz. This limit could be overcome by sending many photons into the channel, each entangled with a different matter-qubit in the node: thereby performing
∗ Correspondence should be sent to viktor.krutianskii@uibk.ac.at

multiple entanglement distribution attempts within the single photon travel time.
In this paper we present two main results. First, matter-photon entanglement is achieved over a spooled 101 km-long fiber channel: twice the distance of previous works (e.g., [15–18]) and requiring a matter-qubit coherence time on the order of the photon travel time (500 µs) to achieve. Second, using three co-trapped matter qubits in the node we demonstrate a multimoding enhancement for the rate of entanglement distribution.

II. EXPERIMENTAL SETUP AND SEQUENCE

A conceptual schematic of the experimental setup is presented in Figure 1 and now summarised. Our network node includes three 40Ca+ ions confined in a 3D linear Paul trap and at the position of the waist of an optical cavity for photon collection at 854 nm [26, 27]. The ions are positioned at anti-nodes of the vacuum cavity standing wave. Because the cavity axis is not quite perpendicular to the ion-string axis (differing by a designed angle of 5 degrees), it is not possible to position the ions i-
n the same anti-node. Instead, there is a unique axial confinement (and corresponding axial centre-of-mass frequency ωz) at which the ions can be positioned in neighbouring anti-nodes. A calibration process is performed to find that unique value, see Appendix A, yielding ωz = 0.869(20) MHz. Given ωz, we calculate that the ion spacing is 5.26(10) µm and that the angle between the ion string and the cavity axis is 85.3(1)◦.
Single photons are generated via a bichromatic cavitymediated Raman transition (BCMRT) [26, 29], driven via a 393 nm Raman laser beam with a 1.2 µm waist at the ions [23]. A Raman laser pulse on an ion in the state |S⟩ = |42S1/2,mj=−1/2⟩ ideally generates the maximallyentangled state

√

|ψ(θ)⟩ =(|D′, V ⟩ + eiθ|D, H⟩)/ 2,

(1)

where |D′⟩ and |D⟩ are the respective Zeeman states |32D5/2, mj = −3/2⟩ and |32D5/2, mj = −5/2⟩, |V ⟩ and |H⟩ are the respective vertical and horizontal polarization

2

FIG. 1. Experimental schematic. (a) Three 40Ca+ ions at neighbouring antinodes of an 854 nm vacuum standing wave mode
in an optical cavity. Sequential lasers pulses, one on each ion, generate three photons, each entangled by polarisation to the ion that emitted it. Inset: Atomic energy level diagram. |S⟩ = |42S1/2,mj=−1/2⟩, |P ⟩ = |42P3/2,mj=−3/2⟩, |D⟩ = |32D5/2,mj=−5/2⟩, |D′⟩ = |32D5/2,mj=−3/2⟩. The frequency difference ∆2 − ∆1 is equal to the one between |D′⟩ and |D⟩. (b) The photons are converted to 1550 nm via quantum frequency conversion (QFC) using the system of [17, 28]. (c) A 101 km-long single mode
fiber spool (SMF-28). (d) Polarisation analysis involving half (λ/2) and quarter (λ/4) waveplates, filter network, a polarising
beam splitter (PBS) and superconducting nanowire single photon detectors (SNSPDs). The narrowest element of the filter
network is an air-spaced Fabry-P´erot cavity with a 250 MHz linewidth centred at 1550 nm [17].

components of a single photon emitted into the cavity vacuum mode, and θ is a phase set by the relative phase of the two freqeuency components in the bichromatic beam [29]. After exiting the vacuum chamber through an optical viewport, photons are coupled into single mode optical fiber and then converted to 1550 nm (telecom C band) via the polarisation-preserving single-photon frequency conversion system of [17, 28]. Telecom photons are then sent into a 101km-long single mode fiber spool with a cal-
culated photon travel time of 494 µs and measured total transmission probability of 1.36(4)%. Neither the optical length nor temperature of the fiber spool is actively stabilised. Finally, the photon polarisation is analysed in a chosen basis using a combination of motorised waveplates, a polarising beam splitter and two superconducting single photon nanowire detectors (Figure 1(d)).
The experimental pulse sequence consists of three parts: initialisation, photon generation and ion-qubit measurement. Initialisation consists of 7 ms of Doppler cooling followed by 20 µs of optical pumping into the state |S⟩. Photon generation consists of a sequence of pulses, that we call an attempt, which is repeated up to 15 times (15 attempts). Each attempt begins with 50 µs of Doppler cooling and 20 µs of optical pumping, which serve to reinitialise the ions after any previous attempt. Next c-
omes a 50 µs Raman laser pulse on each ion sequentially, spaced by 12 µs to allow e.g., the laser focus to be switched between ions using an acoustooptic deflector. The ideal result is a train of three photons, in which each photon is maximally entangled with the ion that emitted it. Next comes a 503 µs wait time to allow all three photons to traverse the 101 km fiber spool and be detected. At the beginning of that wait time, the |D⟩ electron population of all ions is moved to the state |S⟩ via an-
 6.4 µs π-pulse using a laser at 729 nm. As such, the ion-qubits are encoded in superpositions of the |S⟩ and |D′⟩ states while the photons travel. After 243.6 µs

of the wait time from the last 729-nm pulse, a 729 nm π-pulse then swaps the |S⟩ and |D′⟩ population of all ion qubits, realising a spin echo. The pulse sequence for a single attempt is now completed. In the cases in which no photons are detected within the expected arrival time windows, another attempt is performed. In the cases in which at least one photon is detected within the expected arrival time windows, further attempts are aborted and ion-qubit measurement is executed.
Ion-qubit measurement begins with an optional 729 nm π/2-pulse implemented on the |S⟩ to |D′⟩ transition on all ions. The optional pulse is implemented when the ionqubits are to be measured in the Pauli σx or σy basis: we set the optical phase of the pulse to determine in which of the two bases the measurement is made. The optional pulse is not implemented when the ion-qubit is to be measured in the σz basis. Finally, single-ion resolved state detection is performed via electron shelving for 1.5 m-
s on all three ions simultaneously, at which point the experimental sequence is concluded. The chosen ionqubit measurement basis and photon polarisation-qubit measurement are fixed throughout a single execution of the experimental pulse sequence.
The experimental pulse sequence is repeated sufficiently many times, and in sufficiently many measurement bases, to allow for reconstruction of the two-qubit states ρij of all nine possible combinations of one ionqubit (i) and one photon-qubit (j), via state tomography. States are reconstructed via the maximum-liklihood method and are conditional on successful detection of photon j. Uncertainties in parameters derived from the states ρij are obtained via the Montecarlo technique. We use the concur-
rence C [30] to quantify the degree of entanglement in the states ρij, where 0 ≤ C ≤ 1 and C = 1 is a maximally entangled state achieved e.g., by the state of Equation 1.

3

FIG. 2. Ion-photon entanglement over 0 km. (a) Histograms of 854 nm photon arrival times. Probability densities are shown on the vertical axis: number of counts normalized by the number of attempts A and by the time-bin width of 1 µs, measured before QFC in Figure 1 and without the fiber spool. Three single photon wavepackets are visible. Color is used to demark the ion that is expected to have produced the photon, following the ion colouring scheme in Figure 1. Time zero is when an acousto-optic -
modulator received a radio frequency signal to send a laser pulse to ion 1. Detection efficiencies and quantum states are determined within the 65 µslong time windows shown via coloured vertical lines. Dashed black lines show results of a theoretical model. (b) Absolute values of measured density matrices ρ0ij of all nine ion-photon pairs. The ion (photon) involved in each row (column) is constant and indicated by the colored ball on the left (photon wavepacket above). States ρ0i=j are colored red-
, green and blue. States ρ0i̸=j are shown in grey.
III. EXPERIMENTAL RESULTS
In our first experiment we characterise the ion-photon states ρij before the photon conversion setup, at the emitted photon wavelength of 854 nm. For those states we use the new notation ρ0ij, reflecting that the photons have traveled over zero kilometers of fiber. A modified setup is used in which the fiber-coupled photons after the cavity output are sent to a polarisation analysis setup that is similar to the one shown in Figure 1, but with optics and detectors optimised for 854 nm. The experime-
ntal pulse sequence has the following differences compared to the one described in the previous section: only one attempt to make a photon train is made per sequence, the 503 µs wait time is removed as well as the spin echo, and a Raman pulse length of 60 µs is used on each ion.
The modified pulse sequence was implemented over a 42 minute period during which A = 41645 attempts were

made to generate a photon from each ion. Figure 2(a) shows a histogram of the single photon detection events, in which three single photon wavepackets are clearly visible. Photons detected in the first, second and third 65 µs-long time windows are the ones expected to have been produced due to the corresponding Raman laser pulse applied to the first, second and third ion, respectively. The total number of counts recorded in those windows are 13127, 14465, 13326, corresponding to estimated detectio-
n probabilities for 854 nm photons of 0.315(3), 0.347(3), and 0.320(3) where uncertainties are based on Poissonian photon detection statistics. Only in 14 attempts was more than one detection event registered in the same time window, illustrating the single photon character of our source. In Nsingle = 18337 cases, exactly one photon detection event was registered in one of the window. In Ndouble = 9037 cases, exactly two photon detection events were registered in different windows. In Ntriple = 14-
85 cases, exactly three detection events were registered in different windows. The total probability to detect at least one photon within one photon generation attempt was (Nsingle + Ndouble + Ntriple)/A = 0.693(4). The expectation value of the number of photons detected in an attempt was (Nsingle +2×Ndouble +3×Ntriple)/A = 0.981(5).
Each measured single photon wavepacket in Figure 2(a) is well described by a theoretical model based on a master equation with model parameters for each wavepacket that differ only in the values used for the ioncavity coupling strengths of the corresponding ion (see Appendix B). The differences in those values are consistent with the effect of the Gaussian profile of the vacuum cavity mode across the ion string. The simulations include an overall detection path efficiency of 0.518 for each of the -
photons which is consistent with a value of 0.53(3) obtained from independent calibrations (see Appendix C). The detection path efficiency includes all losses encountered by a photon after emission into the cavity, including the finite probability of exiting the cavity into the output mode (independently measured to be 0.78(2) [26]) all the way to the average 854 nm detector efficiencies (independently measured to be 0.87(2) [26]). The simulations predict probabilities of 0.575, 0.664, 0.575 for e-
mission of photons into the cavity from ions 1, 2 and 3, respectively. Lower detected photon efficiencies are achieved in this work, compared to [26], largely due to the lack of ground state cooling and a sub-optimal Raman laser beam direction with respect to the principle magnetic field (quantisation) axis. Both issues could be corrected by reconfiguring the experimental setup in future.
In all presented density matrices in this paper we use the following notion for ion-qubit states: |D′⟩ = |↑⟩ and |S⟩ = |↓⟩. Figure 2(b) presents the absolute values of all nine tomographically reconstructed two-qubit ion-photon density matrices ρ0ij. The concurrences of the three states ρ011, ρ022 and ρ033 are 0.90(1), 0.91(1), 0.92(1), respectively, proving strongly entangled states.

4

The concurrences of the remaining six states ρ0i̸=j are zero. The fidelities of the absolute values of the states ρ011, ρ022 and ρ033, with |ψ(0)⟩ (Equation 1 for θ = 0) are 0.945(6), 0.950(5), 0.952(4), respectively. The fidelities of all the states ρ0i̸=j with the maximally mixed two-qubit state are greater than 0.96 to within three standard de-
viations of uncertainty. We use the fidelity defined as Tr (ρ0i=j |ψ(0)⟩ ⟨ψ(0)|).
The entangled states ρ0i=j are locally rotated with respect to each other. Specifically, the phases of the large
coherence terms (|↓, H⟩ ⟨↑, V | and its complex conjugate) are 0.731(5)π, 0.632(5)π, 0.530(7)π, for ρ011, ρ022 and ρ033, respectively. Those phases are consistent with a σz rotation of the ion-qubit states as a function of time due to
an incorrect setting of the frequency difference between
the two fields in the Raman laser drive by 689 Hz. That
frequency difference should ideally be equal to the one between the |D⟩ and |D′⟩ states (Figure 1(a)). The in-
correct setting was due to a miscalibration in the transi-
tion frequencies and could be reduced to below the Hertz
level by a more careful calibration using 729 nm spec-
troscopy. Alternatively, such frequency offsets can be
corrected by spin echos implemented on the ion-qubits
during the photon travel time, as we demonstrate in the
next experiment. The physical origins of the remaining
imperfections in the entangled states are not yet known
and identifying them will be the subject of future work.
We conclude from analysis of the data in Figure 2 that
an 854 nm photon can be generated that is strongly en-
tangled with any desired ion in the string.
In our second experiment the ion-photon states ρij are characterised using the full setup of Figure 1. For these states we use the new notation ρ1ij01, reflecting that the photons have traveled over 101 kilometers of optical
fiber. Measurements were taken over 45 minutes, during which A101 = 882, 982 attempts were made. Figure 3(a)
shows a histogram of the recorded single photon detection
events. The three photon wavepackets are spaced over a total of 172 µs and thus simultaneously fit well within the travel time of the fiber spool. The total number of counts recorded in the three sequential 50 µs-long time windows were 572, 693 and 643, corresponding to detection probabilities of p1 = 6.5(3) × 10−4, p2 = 7.8(3) × 10−4, and p3 = 7.3(3) × 10−4, respectively. Only in two attempts was more than one detection event registered in the same
time window. In Nsingle = 1900 cases, exactly one photon detection event was registered in one of the windows.
In Ndouble = 4 cases, exactly two photon detection events were registered in different windows. There were no cases
in which exactly three or more detection events were reg-
istered in different windows. The total probability to
detect (successfully distribute) at least one photon over 101km per attempt was 2.16(5) × 10−3. The expectation
value of the number of photons detected in an attempt was also 2.16(5) × 10−3.
The measured wavepackets of Figure 3(a) are well de-
scribed by the ones from the master equation model. The
only model parameter values that differ from those used

FIG. 3. Ion-photon entanglement over 101 km. (a) Histograms of 1550 nm photon arrival times. Probability densities are shown on the vertical axis: normalized by the number of attempts A100 and by the time-bin width of 1 µs, measured using the setup of Figure 1. The colour scheme is as described in Figure 2. Dashed black lines show results of a theoretical model. (b) Absolute values of measured ion-photon density matrices ρ1i=00j. The presented states are locally-rotated from the ones reconstructed-
 directly from the data, as described in the main text. (c) Conceptual schematic of the experimental sequence. One attempt—involving three Raman laser pulses—took 757 µs (dashed line labelled ii). Attempts using a single ion would have taken 633 µs (dashed line labelled i). Re. Init. is the 70 µs-long cooling and optical pumping performed after each attempt.
to produce the simulations in Figure 2(a) are: a lower total detection path efficiency of 1.26 × 10−3; the shorter Raman laser pulse used; a 7 % lower Raman laser Rabi frequency and; ion-cavity coupling strengths that differ by up to 10 %, consistent with an ion string shift of 1.4 µm away from the cavity axis (see Appendix B). The lower path efficiency and Rabi frequencies are consistent with independent calibrations. The shift of the string was not calibrated, however, the calibration process us-
ed to position the middle ion in the centre of the cavity waist had not been performed for a month before the data was taken and therefore a relative drift of 1.4 µm due to thermal effects is not unreasonable.
Figure 3(b) presents the absolute values of the three tomographically-reconstructed states ρ1i=01j, after the application of the same local two-qubit rotation was applied to each state. A local two-qubit rotation is a tensor product of single qubit rotations—one to the ion and one to the photon—which cannot change the entanglement content. The method used to obtain that local rotation is now described. First, the data from all matched ion-photon pairs (i = j) were added up and used to tomographica-
lly reconstructed a single ion-photon state ρ101. Second, a numerical search was performed over local rotations that maximises the fidelity of ρ101 with

5

the state |ψ(0)⟩ ⟨ψ(0)|, yielding the optimum local rotation and a fidelity of 0.89(2). The concurrence of the state ρ101 is 0.76(4). The concurrences of the states ρ11011, ρ12021 and ρ13031 are 0.71(8), 0.80(6), 0.83(6), respectively. After the local rotation, the fidelities of those states with |ψ(0)⟩ ⟨ψ(0)| are 0.85(4), 0.88(3) and 0.90(3), respectively. No statistically significant rotation of the ion-qubits states with respect to each other is evident. In Appendix D we describe a model of the-
 effect of our photon detector background counts on ideal ion-photon entangled states. The results of the model show that the infidelities in the tomographically-reconstructed states ρ1i=01j are statistically consistent with the effects of those imperfections alone. Decoherence of the ion-qubits during the 494 µs photon travel time is insignificant: coherence times of 62(3) ms are expected in our system when using optical spin echos [23].
We turn now to consider the achieved multi-moding enhancement. Each attempt in the 101 km experiment took τ = 757 µs (Figure 3(c)) and provided three opportunities to succeed in detecting a photon (one from each ion). The total probability for at least one successful photon detection per attempt was P = 2.16(5)×10−3, which yields an effective success rate of P/τ = 2.85(7) Hz. If instead we had used only one ion in the string, completing each attempt would have taken 633 µs (Figure 3(c)), as in add-
ition to the reinitialisation and photon generation times, one has to wait 494 µs for the photon to travel and be detected, before trying again. For the probability of success for that attempt we take the value from our experiment, for the most efficient central ion, of p2 = 7.8(3) × 10−4. One then calculates a predicted effective success rate of 1.23(5) Hz for the single-ion case. Therefore, by using all three ions we achieved a success rate increase by a factor of 2.3(1). That factor is reduced -
from the ideal value of three due to three separate effects: slightly lower photon emission probabilities from the ions not in the centre of the string; the times for switching the focus of the laser between the ions and; that we wait for all three photons to (potentially) arrive before trying to generate new photons. The last effect could be eliminated in future, after development of a single-ion-focused reinitialisation scheme. Even considering a scenario in which the time for generating and rei-
nitialising photons was effectively zero, such that each attempt took 494 µs, the 101km success rate for a single ion emitting in the string would still be only 1.59(7) Hz. .
IV. CONCLUSION AND OUTLOOK
In conclusion, ion-photon entanglement was achieved over a 101 km-long fiber channel with a Bell state fidelity largely limited by detector background counts. The use of three co-trapped ion qubits allowed entanglement to be distributed at a higher rate than when using a single ion, by overcoming the attempt rate limit set by the photon travel time over the channel. In future, photon detection

after the fiber channel could be used to swap entanglement to a duplicate remote ion-node via entanglement swapping [3, 11, 31]. Here, each remote node sends a photon trains and coincident photon detection between different temporal pairs heralds entanglement of known remote ion pairs. The quantum processing and coherence times possible in ion-qubit registers could then be used to store the established entanglement for extended periods of time, as well as to purify the distributed entanglement and-
 to grow the number of remote Bell pairs over time.
The multimoding depth in our system could be significantly increased in future by coupling more ions in the node to travelling photons. For example, longer ion strings could perhaps be shuttled stepwise through the cavity mode by modulated the trap electrodes, allowing generation of a photon from each one. Alternatively, a single stationary ion could be used to generate photons sequential, and have its quantum state transferred to cotrapped ions after each attempt via quantum logic operations, as -
demonstrated for two ions in [24]. Benefiting from multimoding with hundreds or thousands of ions would require significantly shortening the current single photon wavepacket lengths (Figure 3(a)) such that they all fit simultaneously within the light travel time. Achieving that without compromising photon generation efficiency requires an increased ion-cavity coupling strength afforded e.g., by the smaller mode volume cavities [32– 34].
Datasets are available online [35]
ACKNOWLEDGMENTS
This work was funded in part by the Austrian Science Fund (FWF) START prize project Y 849-N20 and FWF Standalone project QMAP with project number P 34055. This work received funding from the DIGITAL-2021QCI-01 Digital European Program under Project number No 101091642 and project name ‘QCI-CAT’, and the European Union’s Horizon Europe research and innovation programme under grant agreement No. 101102140’ and project name ‘QIA-Phase 1’. We acknowledge funding for V. Krutyanskiy by the Erwin Schr¨od-
inger Center for Quantum Science & Technology (ESQ) Discovery Programme, and for B.P.L. by the CIFAR Quantum Information Science Program of Canada. The opinions expressed in this document reflect only the author’s view and reflects in no way the European Commission’s opinions. The European Commission is not responsible for any use that may be made of the information it contains. For the purpose of open access, the author has applied a CC BY public copyright licence to any Author Accepted Manuscrip-
t version arising from this submission.
Experimental data taking was done by V.Kru., M.M., V.Krc. and M.C.. Development of the experimental setup was done by V.Kru., M.C., M.M, and B.P.L.. Data analysis and interpretation was done by V.Kru., M.C.,

6

M.M. and B.P.L.. Modelling was done by V.Kru.. The manuscript was written by B.P.L. and V. Kru., all authors provided detailed comments. The project was conceived and supervised by B.P.L..
Appendix A: Positioning the ion string in the cavity
The process is carried out in three steps. The goal of the first step is to overlap the centre of the ion trap (equivalently, the middle ion in the string) with the center of the waist of the cavity’s 854 nm TEM00 mode. This is achieved using a single ion following the method described in Appendix B. 1d of [26].
The goal of the second step is to obtain an ion-ion distance such that, when projected onto the cavity axis, the ions are spaced by 427 nm: the distance between nodes (and anti-nodes) in the 854 nm vacuum cavity standing wave. That is achieved by varying the axial confinement of the three-ion string and, for each value, performing measurements similar to the ones presented and explained in [36]. Specifically, we record the 854 nm photons when illuminating all three ions with a broadly-focused 393 -
nm beam together with an 854 nm and 866 nm repumper. For each axial confinement we minimize the rate of the detected 854 nm cavity photons by fine adjustment of the cavity position along its axis using an in-vacuum translation stage. The axial confinement that offers the lowest count-rate is found and interpreted as the situation in which each ion is located at a node of the vacuum-cavity standing wave.
The goal of the third step is to position each of the three ions at a cavity anti-node. That is achieved using the single-ion focused Raman beam and repumpers to generate cavity photons from the central ion, then adjusting the cavity position along its axis using in-vacuum translation stages until the count rate is maximised.
Appendix B: Numerical simulations of photon wavepackets
Numerical simulations were performed to obtain an estimation for the photon generation efficiencies and single photon wavepackets. Specifically, the master-equation model of the laser-atom-cavity system is used from [26]. The model parameters include the experimental geometries of the Raman laser, cavity and magnetic field, which are the same as described in [23] (in particular, see Sec. I.B and III.C of the supplementary material).
A key model parameter is the maximum strength of the coherent coupling between a single photon in the cavity and a single ion, which is calculated to be g0 = 2π × 1.53 MHz in our system, based on the cavity geometry and the properties of the atomic transition. Here we consider the |P ⟩ − |D⟩ and |P ⟩ − |D′⟩ transitions but do not take into account the different Clebsch-Gordon coefficients for the two transitions or

the projection of the transition polarizations onto the cavity-photon polarizations, both of which are accounted for separately in simulations [29]. The coupling strength of the bichromatic cavity-mediated Raman transition on a given ion in a string is reduced by e.g., the ion’s motion in the trap and by any displacement of the ion’s position away from the cavity axis. We model those effects using a reduced ion-cavity coupling strength for ion i as gi = xiγg0, where 0 ≤ xi ≤ 1 and 0 ≤ γ ≤ 1. The p-
arameter xi quantifies any reduction in ion-cavity coupling strength due to ion i not being positioned at the cavity axis. The parameter γ quantifies any other reduction in the coupling strength of the bichromatic cavity-mediated Raman process e.g., due to the motion of the ion in the trap. We use a single value for γ for all ions and determine its value by comparing measured single-photon temporal wavepackets with simulated wavepackets based on numerical integration of the master equation for a r-
ange of values of the coupling strength [26].
Another key model parameter is the strength of the bichromatic drive. In order to determine that strength we measure the AC Stark shift of the Raman transition via spectroscopy, as described in Sec. I.B and III.C of the supplementary material of [23]. The bichromatic drive field polarization in the experiment (and simulations) is set to linear and perpendicular to the magnetic field and thus consists of an equal superposition of two circularly polarized components σ− and σ+. While only the σ− comp-
onent is set to resonantly drive the bichromatic cavity-mediated Raman transition, both polarisation components contribute to the AC Stark shift. In the simulations we set the strength of the bichromatic drive Ω−—the Rabi frequency with which the σ− transition |S⟩ = |42S1/2, mj = −1/2⟩ to |42P3/2, mj = −3/2⟩ is driven—to the value for which the model predicts the same total AC Stark shift as measured in the experiment. The model requires specifying both Rabi frequencies, Ω−1 , Ω−2 of the two σ−-po-
larized frequency components of the bichromatic drive. Here, Ω−1 stands for the component that drives |S⟩ − |D′⟩ and results in a vertically polarized (V ) photon and Ω−2 stands for the component that drives |S⟩ − |D⟩ and results in a horizontallypolarized (H) photon. For all the simulations we set (Ω−1 )2 + (Ω−2 )2 = (Ω−)2 and Ω−1 /Ω−2 = 0.81: the value for which the model predicts equal probabilities for the generation of the H and V polarized photons.
Now we provide more information about the simulations for the experiment in which 854-nm photons are detected, shown in Figure 2 of the manuscript. By considering the ion string to be centred around the cavity axis and, from the Gaussian cavity mode profile, we calculate the values of {xi} to be {0.83, 1, 0.83} for the three ions. Next, γ = 0.784 is found to provide a close match between the measured and simulated wavepackets. We measured an AC Stark shift of the Raman transition of 0.88(2) MHz fo-
r all the three ions. In simulations we use

7

the value of Ω− = 2π × 31.47 MHz for which the model predicts an AC Stark shift of the Raman transition of 0.88 MHz.
We now provide more information about the simulations for the experiment in which 1550-nm photons are detected, shown in Figure 3 of the manuscript. We use γ = 0.784 as found using the data of Figure 2. We use {xi} values of {0.739, 0.9870.894} which are calculated from the Gaussian cavity mode profile in the case of a 1.4 µm displacement of the ion string along the trap axis direction with respect to the center of the cavity mode. This shift is found by comparing simulated wavepackets and another-
 experiment performed on the same date as the one presented in Figure 3 but involving 50 km of fiber instead of 101 km (in which the measurement statistics is better due to the higher photon detection efficiency). In the 101 km experiment, we measured AC Stark shifts of the Raman transition of 0.82(2) MHz for all the three ions. In simulations we used the value of Ω− = 2π × 30.41 MHz for which the model predicts AC Stark shifts of the Raman transition of 0.82 MHz.

for 854 nm [26]. In case of detection of 1550 nm photons (Figure 3) this item is not relevant and the list continues.
5. 0.30(1): fiber-input to free-space-output efficiency of the quantum frequency conversion setup together with the spectral filtering and polarization analysis optics (see panels (b) and (d) of Figure 1). This value was measured with laser light directly before acquiring the data presented in Figure 3.
6. 0.0136(4): measured transmissions of the 101-km fiber, consisting of two 50.4-km SMF-28 fiber spools and one fiber connector. See panel (c) of Figure 1 for the position of the fiber in the optical path.
7. 0.95: transmission of a fiber joiner present in the path.

Appendix C: Photon path efficiency
Here, a detailed efficiency budget is presented for the photon detection path. When not given explicitly, uncertainties in given probabilities are half of the last significant digit. The beginning of each element in the following list gives the probability associated with a distinct part or process in the experiment. The detection path efficiencies provided in the main text should be compared with a product of these probabilities (or a subset thereof, for the data taken involving 854 nm photons). -
For the photons detected at 854 nm, the total probability of the list is 0.53(3). For the photons detected at 1550 nm, the total probability of the list is 15(1.2)10−4.
1. 0.78(2): probability that, once a cavity photon is emitted into the cavity, the photon exits the cavity into freespace on the other side of the output mirror [26].
2. 0.96(1): transmission of free-space optical elements that are between the cavity output mirror and first fiber coupler (see Pel in [26]).
3. 0.81(3): efficiency of coupling the photons into the first single mode fiber [26]. This value should rather be considered an upper bound, since it was measured some days before the data presented in this paper was taken. We anticipate that coupling could be improved in future with better couplers and an anti-reflection coated fiber end facet.
4. In case of detection of 854 nm photons (Figure 2) the lists ends here with 0.87(2): detection efficiency of either of the single photon detectors

8. 0.83(3): efficiencies of coupling the telecom photons into the detector’s single mode fibers, see panel (d) of Figure 1.
9. 0.75(2): detection efficiency of either of the telecom single photon detectors [23].
Appendix D: Infidelity due to photon detector background counts
We model the effect of background photon detector counts on the 1550-nm ion-photon states presented in Figure 3 (defined as a detector click that didn’t result from a photon from the ion). For this, the background count rate is extracted from the measured counts in the tomography experiments by looking far outside the time windows in which the photons from the ions arrive and summing the contributions from both detectors, giving 2.0(1)-cps. The infidelity that those background counts would contrib-
ute, when added to a perfect maximallyentangled Bell state, is simulated numerically. Specifically, the expected background count probabilities in our photon time windows are added to the expected measurement outcome probabilities for a perfect state, then, after renormalisation, a new ‘noisy’ state density matrix is reconstructed via Maximum Likelihood tomography. Using the background count rate of 2-cps we thereby calculate the maximum observable fidelities to be 0.88, 0.90, 0.90 for the three i-
on-photon pairs respectively, as ordered elsewhere in the manuscript. These fidelities can be compared with the ones obtained in the experiment of 0.85(4), 0.88(3) and 0.90(3).

8

[1] H. J. Kimble, The quantum internet, Nature 453, 1023 (2008).
[2] S. Wehner, D. Elkouss, and R. Hanson, Quantum internet: A vision for the road ahead, Science 362 (2018).
[3] D. L. Moehring, P. Maunz, S. Olmschenk, K. C. Younge, D. N. Matsukevich, L.-M. Duan, and C. Monroe, Entanglement of single-atom quantum bits at a distance, Nature 449, 68 (2007).
[4] S. Ritter, C. No¨lleke, C. Hahn, A. Reiserer, A. Neuzner, M. Uphoff, M. Mu¨cke, E. Figueroa, J. Bochmann, and G. Rempe, An elementary quantum network of single atoms in optical cavities, Nature 484, 195 (2012).
[5] J. Hofmann, M. Krug, N. Ortegel, L. G´erard, M. Weber, W. Rosenfeld, and H. Weinfurter, Heralded entanglement between widely separated atoms, Science 337, 72 (2012).
[6] H. Bernien, B. Hensen, W. Pfaff, G. Koolstra, M. Blok, L. Robledo, T. Taminiau, M. Markham, D. Twitchen, L. Childress, and R. Hanson, Heralded entanglement between solid-state qubits separated by three metres, Nature 497, 86 (2013).
[7] A. Delteil, Z. Sun, W.-b. Gao, E. Togan, S. Faelt, and A. Imamog˘lu, Generation of heralded entanglement between distant hole spins, Nat. Phys. 12, 218 (2016).
[8] R. Stockill, M. J. Stanley, L. Huthmacher, E. Clarke, M. Hugues, A. J. Miller, C. Matthiesen, C. Le Gall, and M. Atatu¨re, Phase-tuned entangled state generation between distant spin qubits, Phys. Rev. Lett. 119, 010503 (2017).
[9] P. Magnard, S. Storz, P. Kurpiers, J. Sch¨ar, F. Marxer, J. Lu¨tolf, T. Walter, J.-C. Besse, M. Gabureac, K. Reuer, A. Akin, B. Royer, A. Blais, and A. Wallraff, Microwave quantum link between superconducting circuits housed in spatially separated cryogenic systems, Phys. Rev. Lett. 125, 260502 (2020).
[10] L. J. Stephenson, D. P. Nadlinger, B. C. Nichol, S. An, P. Drmota, T. G. Ballance, K. Thirumalai, J. F. Goodwin, D. M. Lucas, and C. J. Ballance, High-rate, highfidelity entanglement of qubits across an elementary quantum network, Phys. Rev. Lett. 124, 110501 (2020).
[11] V. Krutyanskiy, M. Galli, V. Krcmarsky, S. Baier, D. A. Fioretto, Y. Pu, A. Mazloom, P. Sekatski, M. Canteri, M. Teller, J. Schupp, J. Bate, M. Meraner, N. Sangouard, B. P. Lanyon, and T. E. Northup, Entanglement of trapped-ion qubits separated by 230 meters, Phys. Rev. Lett. 130, 050803 (2023).
[12] M. Pompili, S. L. N. Hermans, S. Baier, H. K. C. Beukers, P. C. Humphreys, R. N. Schouten, R. F. L. Vermeulen, M. J. Tiggelman, L. dos Santos Martins, B. Dirkse, S. Wehner, and R. Hanson, Realization of a multinode quantum network of remote solid-state qubits, Science 372, 259 (2021).
[13] B. Hensen, H. Bernien, A. E. Dr´eau, A. Reiserer, N. Kalb, M. S. Blok, J. Ruitenberg, R. F. Vermeulen, R. N. Schouten, C. Abella´n, et al., Loophole-free Bell inequality violation using electron spins separated by 1.3 kilometres, Nature 526, 682 (2015).
[14] T. van Leent, M. Bock, F. Fertig, R. Garthoff, S. Eppelt, Y. Zhou, P. Malik, M. Seubert, T. Bauer, W. Rosenfeld, W. Zhang, C. Becher, and H. Weinfurter, Entangling single atoms over 33 km telecom fibre, Nature 607, 69 (2022).

[15] M. Bock, P. Eich, S. Kucera, M. Kreis, A. Lenhard, C. Becher, and J. Eschner, High-fidelity entanglement between a trapped ion and a telecom photon via quantum frequency conversion, Nature Communications 9, 1998 (2018).
[16] T. Walker, K. Miyanishi, R. Ikuta, H. Takahashi, S. Vartabi Kashanian, Y. Tsujimoto, K. Hayasaka, T. Yamamoto, N. Imoto, and M. Keller, Long-distance single photon transmission from a trapped ion via quantum frequency conversion, Phys. Rev. Lett. 120, 203601 (2018).
[17] V. Krutyanskiy, M. Meraner, J. Schupp, V. Krcmarsky, H. Hainzer, and B. P. Lanyon, Light-matter entanglement over 50 km of optical fibre, npj Quantum Information 5, 72 (2019).
[18] T. van Leent, M. Bock, R. Garthoff, K. Redeker, W. Zhang, T. Bauer, W. Rosenfeld, C. Becher, and H. Weinfurter, Long-distance distribution of atomphoton entanglement at telecom wavelength, Phys. Rev. Lett. 124, 010510 (2020).
[19] S. Langenfeld, P. Thomas, O. Morin, and G. Rempe, Quantum repeater node demonstrating unconditionally secure key distribution, Phys. Rev. Lett. 126, 230506 (2021).
[20] N. Kalb, A. A. Reiserer, P. C. Humphreys, J. J. W. Bakermans, S. J. Kamerling, N. H. Nickerson, S. C. Benjamin, D. J. Twitchen, M. Markham, and R. Hanson, Entanglement distillation between solid-state quantum network nodes, Science 356, 928 (2017).
[21] I. V. Inlek, C. Crocker, M. Lichtman, K. Sosnova, and C. Monroe, Multispecies trapped-ion node for quantum networking, Phys. Rev. Lett. 118, 250502 (2017).
[22] D. Hucul, I. V. Inlek, G. Vittorini, C. Crocker, S. Debnath, S. M. Clark, and C. Monroe, Modular entanglement of atomic qubits using photons and phonons, Nature Physics 11, 37 (2014).
[23] V. Krutyanskiy, M. Canteri, M. Meraner, J. Bate, V. Krcmarsky, J. Schupp, N. Sangouard, and B. P. Lanyon, Telecom-wavelength quantum repeater node based on a trapped-ion processor, Phys. Rev. Lett. 130, 213601 (2023).
[24] P. Drmota, D. Main, D. P. Nadlinger, B. C. Nichol, M. A. Weber, E. M. Ainley, A. Agrawal, R. Srinivas, G. Araneda, C. J. Ballance, and D. M. Lucas, Robust quantum memory in a trapped-ion quantum network node, arXiv preprint ArXiv:2210.11447 (2022).
[25] C. Simon, H. de Riedmatten, M. Afzelius, N. Sangouard, H. Zbinden, and N. Gisin, Quantum repeaters with photon pair sources and multimode memories, Phys. Rev. Lett. 98, 190503 (2007).
[26] J. Schupp, V. Krcmarsky, V. Krutyanskiy, M. Meraner, T. Northup, and B. Lanyon, Interface between trappedion qubits and traveling photons with close-to-optimal efficiency, PRX Quantum 2, 020331 (2021).
[27] J. Schupp, Interface between trapped-ion qubits and travelling photons with close-to-optimal efficiency, Ph.D. thesis, University of Innsbruck (2021).
[28] V. Krutyanskiy, M. Meraner, J. Schupp, and B. P. Lanyon, Polarisation-preserving photon frequency conversion from a trapped-ion-compatible wavelength to the telecom c-band, Applied Physics B 123, 228 (2017).
[29] A. Stute, B. Casabone, P. Schindler, T. Monz, P. O.

9

Schmidt, B. Brandsta¨tter, T. E. Northup, and R. Blatt, Tunable ion-photon entanglement in an optical cavity, Nature 485, 482 (2012). [30] S. A. Hill and W. K. Wootters, Entanglement of a pair of quantum bits, Phys. Rev. Lett. 78, 5022 (1997). [31] L. J. Stephenson, D. P. Nadlinger, B. C. Nichol, S. An, P. Drmota, T. G. Ballance, K. Thirumalai, J. F. Goodwin, D. M. Lucas, and C. J. Ballance, High-rate, highfidelity entanglement of qubits across an elementary quantum network, Phys. Rev. Lett. 124, -
110501 (2020). [32] P. Kobel, M. Breyer, and M. Ko¨hl, Deterministic spinphoton entanglement from a trapped ion in a fiber fabry– perot cavity, npj Quantum Information 7, 6 (2021).

[33] M. Teller, V. Messerer, K. Schu¨ppert, Y. Zou, D. A. Fioretto, M. Galli, P. C. Holz, J. Reichel, and T. E. Northup, Integrating a fiber cavity into a wheel trap for strong ion–cavity coupling, AVS Quantum Science, AVS Quantum Science 5 (2023).
[34] C. Christoforou, C. Pignot, E. Kassa, H. Takahashi, and M. Keller, Enhanced ion–cavity coupling through cavity cooling in the strong coupling regime, Scientific Reports 10, 15693 (2020).
[35] Will be provided upon acceptance. [36] S. Begley, M. Vogt, G. K. Gulati, H. Takahashi, and
M. Keller, Optimized multi-ion cavity coupling, Phys. Rev. Lett. 116, 223001 (2016).

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:23.507Z
- **Text Length:** 44316 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
