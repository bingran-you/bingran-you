# PDF Document: (VAET - 2018) Engineering Vibrationally Assisted Energy Transfer in a Trapped-Ion Quantum Simulator.pdf

**File Path:** (VAET - 2018) Engineering Vibrationally Assisted Energy Transfer in a Trapped-Ion Quantum Simulator.pdf

**Processed Date:** 2026-02-10T18:14:03.626Z

**File Size:** 769.42 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 998

**Title:** (VAET - 2018) Engineering Vibrationally Assisted Energy Transfer in a Trapped-Ion Quantum Simulator

**Collection:** Lattice

---

## Extracted Text Content

Featured in Physics

PHYSICAL REVIEW X 8, 011038 (2018)

Engineering Vibrationally Assisted Energy Transfer in a Trapped-Ion Quantum Simulator

Dylan J Gorman,1 Boerge Hemmerling,1,* Eli Megidish,1 Soenke A. Moeller,1 Philipp Schindler,2 Mohan Sarovar,3 and Hartmut Haeffner1
1Department of Physics, University of California, Berkeley, California 94720, USA 2Institut für Experimentalphysik, Universität Innsbruck, Technikerstraße 25, A-6020 Innsbruck, Austria
3Extreme-scale Data Science and Analytics, Sandia National Laboratories,
Livermore, California 94550, USA

(Received 12 September 2017; revised manuscript received 5 January 2018; published 7 March 2018)

Many important chemical and biochemical processes in the condensed phase are notoriously difficult to simulate numerically. Often, this difficulty arises from the complexity of simulating dynamics resulting from coupling to structured, mesoscopic baths, for which no separation of time scales exists and statistical treatments fail. A prime example of such a process is vibrationally assisted charge or energy transfer. A quantum simulator, capable of implementing a realistic model of the system of in-
terest, could provide insight into these processes in regimes where numerical treatments fail. We take a first step towards modeling such transfer processes using an ion-trap quantum simulator. By implementing a minimal model, we observe vibrationally assisted energy transport between the electronic states of a donor and an acceptor ion augmented by coupling the donor ion to its vibration. We tune our simulator into several parameter regimes and, in particular, investigate the transfer dynamics in-
 the nonperturbative regime often found in biochemical situations.

DOI: 10.1103/PhysRevX.8.011038

Subject Areas: Quantum Information

I. INTRODUCTION
Charge and energy transfer are essential to many important processes in chemistry, biology, and emerging nanotechnologies. Such transfer processes often occur in noisy thermal environments that strongly modify the transfer dynamics and, in some cases, even improve the transport efficiency or robustness [1–6]. A prominent example is the energy transfer from pigments in light-harvesting complexes towards reaction centers, where efficiency is believed to critically depend on the spectral properties o-
f the environment [7–14].
In these processes, the dominant sources of fluctuations and noise are often intramolecular vibrations and solvent dynamics [4]. Understanding the influence of this molecular environment on transport dynamics requires solving complex and often fully quantized models that become intractable to theoretical treatments even for systems of moderate size. Moreover, direct experimental studies of these vibrationally assisted energy transfer (VAET)
*Present address: Department of Physics and Astronomy, University of California, Riverside, California 92521, USA.
Published by the American Physical Society under the terms of the Creative Commons Attribution 4.0 International license. Further distribution of this work must maintain attribution to the author(s) and the published article’s title, journal citation, and DOI.

phenomena are difficult to interpret since the underlying mechanisms cannot be isolated. A quantum simulation of such models, on the other hand, offers the possibility to both isolate and control the interesting aspects of the underlying mechanisms.
In a simple model featuring vibrationally assisted energy transfer, the environment consists of a thermalized vibrational degree of freedom that can assist the exchange of quantized excitations between a donor and an acceptor site [see Fig. 1(a)]. In general, these sites exhibit different energies such that transfer only occurs if the excess energy is taken up or provided by the vibration—as such, the environment assists in the transfer process. This model captures the important features of vibrat-
ionally enhanced phenomena, such as the dependence of transfer efficiency on the spectral properties and temperature of the environment.
Here, we demonstrate VAET in isolation and under fully controlled conditions. We encode the VAET process in a trapped-ion quantum simulator, where energy transfer between the electronic states of two ions is enhanced when coupled to an environment in the form of the thermal vibrational motion of the ion crystal. We observe the hallmark feature of VAET, namely, the strong dependence of the energy transfer efficiency on the temperature and the spectral characteristics of the environment. In addition-
, we tune our quantum simulator into nonperturbative parameter regimes, similarly to what is encountered in models of biochemical processes.

2160-3308=18=8(1)=011038(7)

011038-1

Published by the American Physical Society

DYLAN J GORMAN et al. (a)
(b)

PHYS. REV. X 8, 011038 (2018) (c)

FIG. 1. (a) Schematic illustrations of the VAET process and time dynamics of the target state population in various regimes. Without the presence of an environment (κ ¼ 0, left drawings), the transition probability from donor to acceptor states is attenuated in the presence of an energy barrier Δ. By coupling to an environment (κ > 0, right drawing), an excitation can move between donor and acceptor sites by exchanging energy with a phononic environment. Time traces illustrate the three situations-
: (1) Δ ¼ 0: black trace (theory) and data points (∘). (2) Δ > J, without assistance from the environment: blue trace (theory) and data points (×). (3) Δ > J, with assistance from the environment (VAET process): red trace (theory) and data points (⋄). (b) Schematics of the ion trap and laser beams
generating the simulated Hamiltonian. Internal levels of the ions (blue spheres) serve as energy sites. A laser beam illuminating both ions generates the site-site coupling with strength J. A localized beam generates the coupling to the environment with strength κ and controls the detuning Δ. (c) Laser tones (orange arrows) generating the simulated Hamiltonian. Vertical black lines represent available transitions, with the atomic resonance of the respective ion in the center. The detuning Δ is int-
roduced via an ac-Stark shift by
imbalancing the relative power of the two tones of the local beam, as indicated in the figure.

The model we consider couples two-level energy sites [donor (d) and acceptor (a)] with strength J described by ðJ/2ÞσðxdÞσðxaÞ [see Fig. 1(a)]. In the absence of additional interactions, this coupling will cause a single excitation to oscillate between the sites with frequency J. A relative energy detuning Δ, represented by a term ðΔ/2ÞσðzdÞ, imposes an energy cost to move an excitation between
the sites, therefore inhibiting complete transfer of excita-
tions. A long-lived vibrational mode in the environment is modeled as a harmonic oscillator with frequency νeff and is coupled to the sites in the form of ðκ/2Þσzða þ a†Þ. Quantum mechanically, the role of the environment may be
understood as providing an extra degree of freedom, which
helps to satisfy energy copnﬃsﬃﬃeﬃﬃrﬃvﬃﬃﬃaﬃﬃtﬃiﬃoﬃﬃﬃn in the transfer process. For instance, if νeff ≈ Δ2 þ J2, intersite transfer can occur, provided the environment changes its vibrational
quantum number by 1 [seepFﬃﬃiﬃgﬃﬃ.ﬃﬃﬃ1ﬃﬃﬃ(ﬃaﬃﬃ)ﬃﬃ]. Higher-order processes also occur: If νeff ≈ Δ2 þ J2/k for any integer k, intersite transfer occurs, and the environment changes by k vibrational quanta. A classical analogue to this process is that the intersite energy difference Δ is modulated, parametrically moving the excitation between the sites.

The resulting Hamiltonian for the VAET model is then (ℏ ¼ 1)

H

¼

J 2

σðxdÞσðxaÞ

þ

Δ 2

σ

ðdÞ z

þ

κ 2

σðzdÞða

þ

a†Þ

þ

νeff a†a:

ð1Þ

The remainder of this article is organized as follows. After discussing details of the implementation in Sec. II, we present our experimental results in Sec. III. Here, we first study the case where the detuning Δ is larger than the sitesite coupling J such that appreciable energy transfer can only occur with the assistance of the environment. Then, we make Δ comparable to J and operate the simulator in a regime where all Hamiltonian terms compete with each other. We then initialize the environmen-
tal mode in a thermal state with variable temperature; as such, this model corresponds to a biochemical scenario where the coupling of one pigment molecule to its environment is dominated by coupling to one slowly relaxing harmonic mode. We finish by providing an outlook and conclusions in Sec. IV.

II. EXPERIMENTAL IMPLEMENTATION
We implement this model in a trapped-ion quantum simulator consisting of two trapped 40Caþ ions confined in

011038-2

ENGINEERING VIBRATIONALLY-ASSISTED ENERGY …

PHYS. REV. X 8, 011038 (2018)

a radio-frequency Paul trap [Fig. 1(b)]. Caþ has a ground
S1/2 orbital and a metastable D5/2 orbital. The magnetic substates jSiðmj ¼ 1/2Þ and jDiðmj ¼ 1/2Þ form a qubit, addressed by an optical transition near 729 nm [15]. The
electronic states of the two ions play the role of the energy sites. The state jDSi (jSDi) corresponds to a single
excitation localized to the donor (acceptor) site. The
two-ion crystal has six normal vibrational modes, only
two of which are relevant to implement the Hamiltonian in Eq. (1): the axial stretch mode with ωax ≈ 2π × 1.3 MHz and the radial rocking mode at ωr ≈ 2π × 2.1 MHz. The rocking mode serves as the thermally occupied bosonic
environment in the simulation, while the axial stretch mode
mediates the coupling between the donor and acceptor
sites. The additional vibrational modes of the ion crystal
generate Hamiltonian terms that rotate with frequencies of at least 2π × 300 kHz. We operate our simulator in the
regime where all Hamiltonian parameters are of order a few
kHz and therefore neglect these additional couplings.
The amplitude of each term in the model Hamiltonian
[Eq. (1)] is controlled by adjusting the strength and frequency
of various laser tones as summarized in Fig. 1(c). In particular, the site-site coupling ðJ/2ÞσðxdÞσðxaÞ is implemented by a Mø lmer-Sø rensen quantum interaction [16] via the
axial vibrational mode. This interaction is generated by
applying a global laser beam with tones detuned from the qubit transition by Æðωax − δmsÞ, where δms ¼ 2π × 30 kHz ≪ ωax [see Fig. 1(c)]. The coupling strength is given by J ¼ η2axΩG1 ΩG2 /δms [16], where ηax ∼ 0.05 is the LambDicke parameter for this mode, and ΩG1;2 are the Rabi frequencies of the two laser tones. For calibrating the
simulator, J is measured independently by operating the simulator with Δ, κ ¼ 0. We extract J by fitting the population transfer as a function of τsim to a sinusoid. Note that in the single excitation manifold, spanned by jSDi and jDSi, the σðxdÞσðxaÞ interaction is the same as the energy exchange interaction σðþdÞσð−aÞ þ σð−dÞσðþaÞ, which is more commonly used in the context of charge and energy transfer
in biochemical systems.
The site-environment coupling is engineered via a
bichromatic laser beam localized to the donor ion. The
two tones of this beam are detuned from the optical transition by −ωr/2 and ωr/2 þ νeff [17]. Note that νeff is defined as the difference between the ion-crystal rockingmode frequency ωr and the frequency splitting between the two laser tones. This generates the effective interaction ðκ/2ÞσðzdÞða þ a†Þ þ νeffa†a, where κ ¼ ηrΩL1 ΩL2 /ωr. Here, ΩLi is the on-resonance coupling between the jSi and jDi states generated by the ith tone of the local beam. The parameter ηr ¼ 0.039ð1Þ is the Lamb-Dicke p-
arameter for the radial rocking mode. Experimentally, we adjust the laser powers of each of the tones to reach the desired coupling κ.
To calibrate the coupling to the environment, κ, we measure the Rabi frequencies ΩL1 and ΩL2 directly in

a two-stage procedure. First, both tones in the local beam
are blue-shifted in a double-pass acousto-optic modulator (AOM) by ωr/2, such that one tone is resonant with the carrier transition. In that configuration, we measure the frequency of Rabi oscillations and extract ΩL1 . Then, we shift both tones red by ωr/2 and again measure Rabi oscillations, extracting ΩL2 .
In order to maintain a stable environment frequency νeff, we actively stabilize the radial trap frequency to within 2π × 250 Hz over the duration of one time scan (several minutes), following a method detailed in Ref. [18]. The rocking-mode frequency ωr is determined via optical spectroscopy on the jSi → jDi transition. However, acStark shifts from the probe beam make a small correction
on the order of a few hundred Hertz necessary. The
systematic effect could be avoided by directly exciting
the vibration with either a modulated optical radiation
pressure force [19] or by measuring all center-of-mass
modes using electrically oscillating fields. We control the detuning Δ by adjusting the power balance
of the two tones on the local beam generating the site-bath
coupling. The resulting detuning is measured by setting νeff ¼ 2π × 30 kHz, sufficiently far off-resonant such that the coupling to the vibrational mode can be neglected. In the case Δ ≳ J, the dynamics can be fit to the one given by the simplified Hamiltonian H ¼ ðJ/2ÞσðxaÞσðxdÞ þ ðΔ/2ÞσðzdÞ, extracting J and Δ. When Δ ≫ J, the population transfer is too small to be fit for the detuning. In this case, we measure Δ in a Ramsey-type experiment [20]. First, a global π/2 pulse is applied to both ions-
. After an interrogation time τ, a second π/2 pulse is applied and the parity P is recorded. The operator P is defined as PðjSSiÞ ¼ PðjDDiÞ ¼ 1 and PðjSDiÞ ¼ PðjDSiÞ ¼ −1. The parity PðτÞ oscillates with frequency Δ. In both cases, an analytical correction is applied to account for the small change in Stark shift (up to 2π × 200 Hz) arising from moving one laser tone by 2π × 30 kHz as necessary to decouple the bath from the dynamics.
The actual experimental procedure for the simulation is
as follows: We start by Doppler cooling all the vibrational
modes of the ion string to a mean occupation number of 6–12, followed by optical pumping both ions to the state jSSi. We further cool the axial center-of-mass and stretch modes to the ground state via resolved sideband cooling
[21]. The assisting mode is then prepared via resolved
sideband cooling [21] to an adjustable mean thermal occupation 0.04 ≲ n¯ ≲ 12. The thermal occupation value is chosen by varying the duration of the cooling process.
For small temperatures, the average population is extracted
by comparing red- and blue-sideband excitation of the
mode [22], while for higher temperatures, the sideband
strength is compared to the carrier transition strength. The
donor is then excited via a local rotation, leading to the combined electronic state jDSi. Then, the local and global laser beams generating the model Hamiltonian are applied

011038-3

DYLAN J GORMAN et al.

PHYS. REV. X 8, 011038 (2018)

for a time τsim. Finally, the combined electronic state of both ions is measured by recording the fluorescence with a charged-coupled device (CCD) camera [23]. For each parameter setting fJ, κ, Δ, νeffg, the simulation is run 100–500 times. The transfer probability is then given by the population in the state jSDi. For all data, we report the conditional probability Pacc that the system has undergone state transfer, i.e., Pacc ¼ PSD/ðPSD þ PDSÞ. This corrects for an average population loss from th-
e simulation subspace of 10% arising from imperfect state preparation and incoherent excitation of optical transitions due to spectral impurities in our qubit laser at 729 nm.
In addition to probing the time dynamics of the VAET process by varying the simulation time τsim, we also investigate its spectroscopic properties. For the spectroscopic measurements, we measure the energy transfer probability for fixed fJ; κ; Δg and simulation time τsim, varying the frequency νeff.
III. ENERGY TRANSFER DYNAMICS
VAET is especially well illustrated in the regime where the detuning Δ is larger than the coupling J. Under these conditions, the energy transfer is suppressed without the

assistance of the environment [Fig. 2(a)]. Significant energy transfer occurs only at appropriate environmental frequencies corresponding to processes jSD; ni → jDS; n Æ ki, k ≥ 1, where k vibrational quanta are either removed from or absorbed by the environment. The most pronounced energy transfer is observed at νeff ¼ Æ2π × 4 kHz, where the occupation of the environment changes by 1. The unresolved peaks at smaller vibrational frequencies correspond to multiphonon processes where the energy gap -
is bridged by several vibrational quanta. The physical interpretation of νeff < 0 is a sign change of the detuning Δ and corresponds to the situation where the environment absorbs the excess energy.
With the environment prepared near the ground state, the vibrations can take up excess energy, but they cannot provide quanta in the transfer process. As a result, the spectral scans in Fig. 2(b), where the environment contains an average of 0.5 quanta, show a suppression for positive νeff but exhibit strong peaks at negative νeff. This asymmetry is expected only when the environment is prepared close to the ground state, and together with the quantized nature of the signal, it is a signature of t-
he quantummechanical nature of the environment.

(a)

(b)

FIG. 2. Energy transfer probability to the acceptor Pacc vs simulation time τsim and vibrational frequency νeff. Left (a) [right (b)] plots show the time dynamics at environmental temperature n¯ ¼ 5 (n¯ ¼ 0.5). Upper plots show the time dynamics Pacc with νeff/2π ≈ þ4.56 kHz (blue points, ×) and νeff/2π ≈ −4.56 kHz (red points, circles). The lower plots show Pacc vs νeff, where the simulation time τsim is fixed to 0.7 ms. For all cases, fJ; κ; Δg ¼ 2π × f1.30ð1Þ; 1.40ð4Þ; 4.56ð2Þg kHz. Solid lines-
 are numerical simulations of the system with all parameters determined through independent calibrations. The shaded regions represent the estimated systematic uncertainty on the theoretical curve, obtained from the measurement error in the calibration parameters. Note that the theory estimates include the effect that the detuning Δ fluctuates around its mean due to relative intensity noise of 0.02 as well as due to variations of the ion-laser coupling strength via finite-temperature effects. In (-
a), the standard deviation of the corresponding distribution is 2π × 0.23 kHz, whereas in (b), it is 2π × 0.1 kHz. Solid lines in the spectral plots represent a numerical solution where a small frequency offset adjusts for a systematic bias of the vibrational frequency measurements. In all plots, the statistical error is smaller than the markers. The measured data points in the spectral plots are connected with a dashed line to guide the eye.
011038-4

ENGINEERING VIBRATIONALLY-ASSISTED ENERGY …
(b) (a)

PHYS. REV. X 8, 011038 (2018)

(c)

FIG. 3. (a) Energy transfer probability Pacc vs vibrational frequency νeff in the small detuning regime with fJ; κ; Δg ¼ 2π × f1.22ð3Þ; 0.63ð2Þ; 1.226ð3Þg kHz, τsim ¼ 0.7 ms, and n¯ ¼ 2.7. Direct coupling between the sites exceeds the energy differences between the various multiphonon processes, and only two peaks remain, corresponding to either subtracting or adding
energy. (b) Pacc vs simulation time for different environmental couplings κ for low environment temperature (n¯ ¼ 0.04). In all three scans, all parameters except κ are constant, fJ; Δ; νeffg ¼ 2π × f1.27ð5Þ; 1.27ð8Þ; −1.72ð4Þg kHz. Coupling κ increases from top to bottom as indicated. Solid traces are numerically simulated dynamics with all parameters determined by independent measurements.
Dashed black traces correspond to the predictions of the perturbative treatment developed in Ref. [24]. (c) Pacc vs simulation time τsim at high temperature (n¯ ¼ 12 quanta). Simulation parameters: fJ; κ; Δ; νeffg ¼ 2π × f1.17ð3Þ; 0.63ð2Þ; 1.59ð3Þ; −1.72ð6Þg kHz. In the time traces, the shaded regions represent the estimated systematic error on the theoretical curve, obtained from the measurement error in
the simulation parameters. In all plots, the statistical error is smaller than the markers.

To study these processes in more detail, we measure the time dynamics of the single-phonon resonances (νeff ¼ Æ2π × 4 kHz). In the low-temperature setting, the time for maximum energy transfer to the acceptor state is around 1 ms, corresponding to a characteristic time scale of ½ðJκÞ/ð2ΔÞ given by a perturbative treatment (see Ref. [24]). The dynamics is faster at higher temperatures owing to stronger fluctuations from the environment. The previously mentioned asymmetry between the positive and n-
egative frequency peaks is also present in the lowtemperature time dynamics.
For sufficiently large detuning Δ, the multiphonon processes jSD; ni → jDS; n þ ki can each be spectrally resolved up to a maximum integer value. However, when Δ becomes comparable to J, these processes cannot be distinguished, as shown in Fig. 3(a). In this regime, the energy sites are partially hybridized because of the intersite coupling, and significant energy transfer occurs even without a coupling to the environment. Here, direct intersite coupling, single-phonon, and multiphonon processes a-
ll contribute simultaneously to the transfer dynamics. This parameter regime, where J ∼ κ ∼ Δ, is most relevant to energy transfer dynamics in photosynthetic light-harvesting

complexes [25]. We note that, exactly in this regime, approximate methods, which typically proceed by perturbation in one of these parameters, are not effective (see Ref. [24]).
When the environment is cooled near the ground state, we observe almost complete energy transfer between donor and acceptor states [see Fig. 3(b)]. This energy transfer is accelerated with increasing site-environment coupling κ. Similarly, we see that the perturbative treatment developed in Ref. [24] breaks down at earlier times. We note that the non-Markovianity of the environment is particularly evident for the case of κ ¼ 2π × 0.64 kHz, since the energy returns to the acceptor during the measur-
ement time. Finally, in Fig. 3(c), we show time dynamics at higher temperatures [n¯ ¼ 12, with all other parameters similar to the lowest time trace in Fig. 3(b)]. The overall trend in population transfer is preserved; however, the coherent oscillations are damped at the higher temperature.
IV. CONCLUSIONS AND OUTLOOK
Realistic models of chemical and biological environments require extending the simple model above to

011038-5

DYLAN J GORMAN et al.

PHYS. REV. X 8, 011038 (2018)

incorporate larger numbers of sites and environmental modes. However, as the number of sites and vibrational modes that must be accounted for increases, these models quickly challenge analytical and numerical methods. This is particularly the case in regimes where a separation of time scales does not exist and perturbative approximations are invalid. Moreover, it may be necessary to include higher excitations of the environment. In particular, vibrationally assisted processes are significant when -
the vibrational modes are almost resonant with the electronic energy differences, typically of order 100–200 cm−1 in photosynthetic systems. At room temperature, the relevant vibrations are each excited with mean phonon numbers on the order of one to two quanta. Capturing the associated Boltzmann distribution via direct numerical simulation may require truncating each harmonic oscillator Hilbert space above five quanta–the computational resource equivalent of 2–3 qubits. Thus, an N-site model with-
 two vibrational modes per site to capture at least some aspects of the local spectral density would require a Hilbert space size comparable to ð1 þ 2 × 2ÞN ¼ 5N qubits. To model the local environment more accurately, a Hilbert space with substantially more dimensions would be required. Currently, it is impossible to study the general dynamics in a Hilbert space equivalent to 50 qubits [26]. Extending our experimental platform, it may be possible to encode the 10-site dynamics of our model in a 10-
-ion crystal, thereby outperforming brute-force classical computation. More sophisticated numerical techniques for simulating vibrational wave-packet dynamics have been developed recently, e.g., the multilayer multiconfiguration time-dependent Hartree method (ML-MCTDH) [27]. While such methods substantially reduce the computational burden of computing nonequilibrium dynamics, their computational cost is still exponential with the number of vibrational modes tracked; hence, they eventually scale ba-
dly.
Even without outperforming classical resources, our platform can be extended to study more qualitatively interesting physics. For example, by applying phase modulation to the site-environment coupling beams, a broadband bath can be implemented in the simulation. Damping can be implemented by adding sideband cooling of particular vibrational modes using auxiliary ions. In addition, moving to a three-site model would allow the investigation of phenomena such as quantum ratcheting [28]. Finally, we n-
ote that one could also study steady-state dynamics of VAET by continuously exciting some of the ions on the jS1/2i ↔ jD5/2i transition while providing a sink to other ions using light on the jD5/2i ↔ jP3/2i transition. Thus, it may be possible to simulate realistic models of energy transfer processes in light-harvesting processes or similar transport phenomena such as those present in organic electronic devices, including solar cells [29–32], or as discussed in the context of olfaction [33] and n-
euroreceptor activation [34].

In conclusion, we have implemented an analog quantum simulation of vibrationally assisted energy transfer using trapped ions. We further demonstrated tuning of the simulator from perturbative to nonperturbative regimes (see Ref. [24] for a more detailed discussion). The latter case is particularly interesting, as VAET dynamics with larger structured environments in this regime becomes inaccessible to numerical treatment on current highperformance computers. We expect that our platform will be capa-
ble of simulating complex models, including larger structured environments, with various experimental advances.
ACKNOWLEDGMENTS
This work has been supported by AFOSR through Grant No. FA9550-15-1-0249 and by the NSF Grant No. PHY 1507160. We thank Clarice Aiello, Jonathan Ouellet, and Birgitta Whaley for insightful discussions. Sandia National Laboratories is a multimission laboratory managed and operated by National Technology and Engineering Solutions of Sandia, LLC, a wholly owned subsidiary of Honeywell International, Inc., for the U.S. Department of Energy’s National Nuclear Security Administration under Contract No. -
DE-NA-0003525.
Note added.—Recently, we became aware of related work carried out at ETH Zürich [35].
[1] T. Förster, Transfer Mechanisms of Electronic Excitation, Discuss. Faraday Soc. 27, 7 (1959).
[2] W. J. Bruno and W. Bialek, Vibrationally Enhanced Tunneling as a Mechanism for Enzymatic Hydrogen Transfer, Biophys. J. 63, 689 (1992).
[3] V. May and O. Kühn, Charge and Energy Transfer Dynamics in Molecular Systems (Wiley, New York, 2011), pp. 255–307.
[4] A. Nitzan, Chemical Dynamics in Condensed Phases (Oxford University Press, New York, 2006).
[5] P. Rebentrost, M. Mohseni, I. Kassal, S. Lloyd, and A. Aspuru-Guzik, Environment-Assisted Quantum Transport, New J. Phys. 11, 033003 (2009).
[6] F. Caruso, A. W. Chin, A. Datta, S. F. Huelga, and M. B. Plenio, Highly Efficient Energy Excitation Transfer in Light-Harvesting Complexes: The Fundamental Role of Noise-Assisted Transport, J. Chem. Phys. 131, 105106 (2009).
[7] J. Adolphs and T. Renger, How Proteins Trigger Excitation Energy Transfer in the FMO Complex of Green Sulfur Bacteria, Biophys. J. 91, 2778 (2006).
[8] A. W. Chin, J. Prior, R. Rosenbach, F. Caycedo-Soler, S. F. Huelga, and M. B. Plenio, The Role of Non-equilibrium Vibrational Structures in Electronic Coherence and Recoherence in Pigment-Protein Complexes, Nat. Phys. 9, 113 (2013).

011038-6

ENGINEERING VIBRATIONALLY-ASSISTED ENERGY …

PHYS. REV. X 8, 011038 (2018)

[9] E. K. Irish, R. Gómez-Bombarelli, and B. W. Lovett, Vibration-Assisted Resonance in Photosynthetic ExcitationEnergy Transfer, Phys. Rev. A 90, 012510 (2014).
[10] C. Kreisbeck, T. Kramer, and A. Aspuru-Guzik, Scalable High-Performance Algorithm for the Simulation of Exciton Dynamics. Application to the Light-Harvesting Complex II in the Presence of Resonant Vibrational Modes, J. Chem. Theory Comput. 10, 4045 (2014).
[11] P. Nalbach, C. A. Mujica-Martinez, and M. Thorwart, Vibronically Coherent Speed-up of the Excitation Energy Transfer in the Fenna-Matthews-Olson Complex, Phys. Rev. E 91, 022706 (2015).
[12] A. G. Dijkstra, C. Wang, J. Cao, and G. R. Fleming, Coherent Exciton Dynamics in the Presence of Underdamped Vibrations, J. Phys. Chem. Lett. 6, 627 (2015).
[13] Y. Fujihashi, G. R. Fleming, and A. Ishizaki, Impact of Environmentally Induced Fluctuations on Quantum Mechanically Mixed Electronic and Vibrational Pigment States in Photosynthetic Energy Transfer and 2D Electronic Spectra, J. Chem. Phys. 142, 212403 (2015).
[14] X. Liu and O. Kühn, Vibrational and Vibronic Coherences in the Dynamics of the FMO Complex, Chem. Phys. 481, 272 (2016).
[15] H. Häffner, C. F. Roos, and R. Blatt, Quantum Computing with Trapped Ions, Phys. Rep. 469, 155 (2008).
[16] A. Sørensen and K. Mølmer, Quantum Computation with Ions in Thermal Motion, Phys. Rev. Lett. 82, 1971 (1999).
[17] K. Kim, C. F. Roos, L. Aolita, H. Häffner, V. Nebendahl, and R. Blatt, Geometric Phase Gate on an Optical Transition for Ion Trap Quantum Computation, Phys. Rev. A 77, 050303 (2008).
[18] K. G. Johnson, J. D. Wong-Campos, A. Restelli, K. A. Landsman, B. Neyenhuis, J. Mizrahi, and C. Monroe, Active Stabilization of Ion Trap Radiofrequency Potentials, Rev. Sci. Instrum. 87, 053110 (2016).
[19] M. Ramm, T. Pruttivarasin, and H. Häffner, Energy Transport in Trapped Ion Chains, New J. Phys. 16, 063062 (2014).
[20] M. Chwalla, K. Kim, T. Monz, P. Schindler, M. Riebe, C. F. Roos, and R. Blatt, Precision Spectroscopy with Two Correlated Atoms, Appl. Phys. B 89, 483 (2007).
[21] F. Diedrich, J. C. Bergquist, W. M. Itano, and D. J. Wineland, Laser Cooling to the Zero-Point Energy of Motion, Phys. Rev. Lett. 62, 403 (1989).
[22] Q. A. Turchette, D. Kielpinski, B. E. King, D. Leibfried, D. M. Meekhof, C. J. Myatt, M. A. Rowe, C. A. Sackett, C. S. Wood, W. M. Itano, C. Monroe, and D. J. Wineland, Heating of Trapped Ions from the Quantum Ground State, Phys. Rev. A 61, 063418 (2000).

[23] H. G. Dehmelt, Proposed 1014Δν > ν Laser Fluorescence Spectroscopy on Tlþ Mono-Ion Oscillator II, Bull. Am. Phys. Soc. 20, 60 (1975).
[24] See Supplemental Material at http://link.aps.org/ supplemental/10.1103/PhysRevX.8.011038 for additional details on the theoretical modeling of VAET.
[25] A. Ishizaki, T. R. Calhoun, G. S. Schlau-Cohen, and G. R. Fleming, Quantum Coherence and Its Interplay with Protein Environments in Photosynthetic Electronic Energy Transfer, Phys. Chem. Chem. Phys. 12, 7319 (2010).
[26] T. Häner and D. S. Steiger, 0.5 Petabyte Simulation of a 45-Qubit Quantum Circuit, arXiv:1704.01127.
[27] J. Schulze, M. F. Shibl, M. J. Al-Marri, and O. Kühn, Multi-layer Multi-configuration Time-Dependent Hartree (ML-MCTDH) Approach to the Correlated ExcitonVibrational Dynamics in the FMO Complex, J. Chem. Phys. 144, 185101 (2016).
[28] C. R. Myers, G. J. Milburn, and J. Twamley, Vibrationally Assisted Quantum Energy Pumps, New J. Phys. 17, 093030 (2015).
[29] A. A. Bakulin, A. Rao, V. G. Pavelyev, P. H. M. van Loosdrecht, M. S. Pshenichnikov, D. Niedzialek, J. Cornil, D. Beljonne, and R. H. Friend, The Role of Driving Energy and Delocalized States for Charge Separation in Organic Semiconductors, Science 335, 1340 (2012).
[30] S. Gelinas, A. Rao, A. Kumar, S. L. Smith, A. W. Chin, J. Clark, T. S. van der Poll, G. C. Bazan, and R. H. Friend, Ultrafast Long-Range Charge Separation in Organic Semiconductor Photovoltaic Diodes, Science 343, 512 (2014).
[31] P. A. van Hal, R. A. J. Janssen, G. Lanzani, G. Cerullo, M. Zavelani-Rossi, and S. D. Silvestri, Full Temporal Resolution of the Two-Step Photoinduced Energy-Electron Transfer in a Fullerene-Oligothiophene-Fullerene Triad Using Sub-10 fs Pump-Probe Spectroscopy, Chem. Phys. Lett. 345, 33 (2001).
[32] S. L. Smith and A. W. Chin, Phonon-Assisted Ultrafast Charge Separation in the PCBM Band Structure, Phys. Rev. B 91, 201302(R) (2015).
[33] I. A. Solovyov, P.-Y. Chang, and K. Schulten, Vibrationally Assisted Electron Transfer Mechanism of Olfaction: Myth or Reality?, Phys. Chem. Chem. Phys. 14, 13861 (2012).
[34] R. D. Hoehn, D. Nichols, H. Neven, and S. Kais, Neuroreceptor Activation by Vibration-Assisted Tunneling, Sci. Rep. 5, 9990 (2015).
[35] A. Potoćnik, A. Bargerbos, F. A. Y. N. Schröder, S. A. Khan, M. C. Collodo, S. Gasparinetti, Y. Salathe´, C. Creatore, C. Eichler, H. E. Türeci, A. W. Chin, and A. Wallraff, Studying Light-Harvesting Models with Superconducting Circuits, arXiv:1710.07466 [Nat. Comm. (to be published)].

011038-7

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:03.626Z
- **Text Length:** 33206 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
