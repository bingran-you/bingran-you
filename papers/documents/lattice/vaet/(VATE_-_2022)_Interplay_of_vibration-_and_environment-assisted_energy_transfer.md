# PDF Document: (VATE - 2022) Interplay of vibration- and environment-assisted energy transfer

**File Path:** (VATE - 2022) Interplay of vibration- and environment-assisted energy transfer

**Processed Date:** 2026-02-10T18:13:55.599Z

**File Size:** 2944.35 KB

**Total Pages:** 15

**Extracted Pages:** 15

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 997

**Title:** (VATE - 2022) Interplay of vibration- and environment-assisted energy transfer

**Collection:** Lattice

---

## Extracted Text Content

PAPER • OPEN ACCESS
Interplay of vibration- and environment-assisted energy transfer
To cite this article: Zeng-Zhao Li et al 2022 New J. Phys. 24 033032
View the article online for updates and enhancements.
You may also like
A dimensionality reduction algorithm for mapping tokamak operational regimes using a variational autoencoder (VAE) neural network Y. Wei, J.P. Levesque, C.J. Hansen et al.

Interpretable embeddings from molecular simulations using Gaussian mixture variational autoencoders Yasemin Bozkurt Varolgüne, Tristan Bereau and Joseph F Rudzinski

Effects of runoff sensitivity and catchment characteristics on regional actual evapotranspiration trends in the conterminous US Il Won Jung, Heejun Chang and John Risley

This content was downloaded from IP address 192.31.105.31 on 12/11/2022 at 00:17

New J. Phys. 24 (2022) 033032 https://doi.org/10.1088/1367-2630/ac5841
OPEN ACCESS
RECEIVED
26 October 2021
REVISED
11 February 2022
ACCEPTED FOR PUBLICATION
24 February 2022
PUBLISHED
23 March 2022
Original content from this work may be used under the terms of the Creative Commons Attribution 4.0 licence.
Any further distribution of this work must maintain attribution to the author(s) and the title of the work, journal citation and DOI.
PAPER
Interplay of vibration- and environment-assisted energy transfer
Zeng-Zhao Li1, Liwen Ko1 , Zhibo Yang1 , Mohan Sarovar2,∗ and K Birgitta Whaley1,3,∗
1 Department of Chemistry, University of California, Berkeley, CA 94720, United States of America 2 Sandia National Laboratories, Livermore, CA 94551, United States of America 3 Berkeley Center for Quantum Information and Computation, Berkeley, CA 94720, United States of America ∗ Authors to whom any correspondence should be addressed.
E-mail: mnsarov@sandia.gov and whaley@berkeley.edu
Keywords: biophysics, energy transfer, quantum information
Abstract
We study the interplay between two environmental influences on excited state energy transfer in photosynthetic light harvesting complexes, namely, vibrationally assisted energy transfer (VAET) and environment-assisted quantum transport (ENAQT), considering a dimeric chromophore donor–acceptor model as a prototype for larger systems. We demonstrate how the basic features of the excitonic energy transfer are influenced by these two environments, both separately and together, with the environment bei-
ng fully quantum in the case of VAET and treated in the Haken–Strobl–Reineker classical limit in the case of ENAQT. Our results reveal that in the weak noise regime, the presence of a classical noise source is detrimental to the energy transfer that is resonantly assisted by the exciton-vibration interactions intrinsic to VAET. In the strong noise regime we reproduce all the features of ENAQT, including the turnover into a Zeno regime where energy transfer is suppressed, and VAET is insignificant.
1. Introduction
Recent years have seen a rapid growth in understanding how underdamped vibrational degrees of freedom play a role in efficient exciton transport in photosynthetic light harvesting systems [1–9], and in the long time room-temperature coherence observed in these systems [10–14]. This phenomenon has been referred to as vibrationally-assisted energy transfer (VAET) in the literature [15]. At the same time, fluctuating environments, such as those due to overdamped vibrational modes, have also been show-
n to promote exciton transport under certain conditions, a phenomenon termed environment-assisted quantum transport (ENAQT) [16, 17]. In particular, the latter occurs when the excitonic degrees of freedom interact with the environment via a pure dephasing interaction, which can be understood as the direct manifestation of a quantum random walk with dephasing [18]. In this work we study the interplay between these two environment-driven exciton transport mechanisms. Earlier theoretical work has est-
ablished that it is possible to observe oscillations due to excitonic-vibronic quantum coherence even in the presence of additional strong environmental noise [19]. We extend this line of study here by analyzing a dimeric chromophore donor–acceptor system to provide a comprehensive picture of the regimes where either VAET or ENAQT dominate, as well as the effect of the interplay between these two processes on the energy transfer efficiency in intermediate regimes. VAET is modeled by explicit treat-
ment of an underdamped vibrational mode, while the environmental effect of the overdamped modes is captured by the addition of a classical noise, pure dephasing process (the Haken–Strobl–Reineker model [20]). While not all the details of the vibrational environment of natural photosynthetic systems are captured by such a classical noise model—most importantly, thermal effects and relaxation are not captured—the phenomenon of ENAQT has been observed within such a model of environmental noise [16], -
and therefore it is sufficient in the first instance to study the interplay between this phenomenon and VAET.
© 2022 The Author(s). Published by IOP Publishing Ltd on behalf of the Institute of Physics and Deutsche Physikalische Gesellschaft

New J. Phys. 24 (2022) 033032 Z-Z Li et al
The model we study is particularly suited to experimental validation by trapped ion quantum simulators which could also simulate other interesting physics such as Dirac dynamics [21]. This platform has been used to experimentally study VAET [15], and the addition of classical fluctuations can be easily achieved by noisy modulation of addressing lasers. We have also recently studied the effect of multiple underdamped vibrational modes on energy transfer within the context of a trapped ion simulatio-
n [22]. We expect that the predictions made below for regimes of energy transfer can also be validated on the circuit-QED platform [23]. The remainder of the paper is organized as follows. In section 2 we summarize the model and our theoretical approach. In section 3 we present an analysis of the symmetries in our model that explain the physical relevance of some of the parameters, especially in the trapped ion simulation of the model. In section 4 we undertake numerical simulations to analyze var-
ious aspects of the interplay of VAET and ENAQT. Specifically, we find that the presence of additional classical dephasing noise tends to weaken the effects of vibrational assistance of energy transfer, with the VAET peaks eventually disappearing as the variance of the classical noise is increased. The optimum transfer efficiency is obtained at zero classical noise, where the only environmental effect is vibrational assistance of energy transfer from a vibration that is resonant with an excitonic -
energy difference. At larger values of classical noise, the energy transfer efficiency can be maximized at a finite noise variance and the resulting dephasing-enhanced energy transfer is found to occur at a given finite dimer energy gap that could be either resonant or off-resonant with the vibrational mode. Finally, in section 5 we conclude with a brief discussion.
2. A dimeric noisy chromophore donor–acceptor system
A basic model for demonstrating the VAET processes is a dimeric chromophore donor–acceptor system [15]. We therefore exploit it here as a prototype for larger photosynthetic energy transfer systems to explore the interplay between quantum and classical noise. The noisy VAET system is schematized in figure 1 and is described by the Hamiltonian
H=1
2 ωdσ(d)
z +1
2 [ωa − δ(t)]σ(a)
z +1
2 Jσ(d)
x σ(a)
x + νa†a + 1
2 κσ(a)
z (a + a†), (1)
where σz(i) = |e〉i〈e| − |g〉i〈g| and σx(i) = |e〉i〈g| + |g〉i〈e| with i = d, a. Equation (1) includes donor (d) and acceptor (a) sites, each of which is modeled by a two-level system with transition frequency ωi, as well as the excitonic coupling J between these. The single vibration denoted by annihilation/creation operators a/a† coupled to the acceptor is a source of quantum noise and may coherently assist the excitation energy transfer [15]. The term δ(t) added to the site energy describes a class-
ical Gaussian white noise source within the Haken–Strobl–Reinker model [20, 24–26], i.e., δ at any time instant is distributed as
1/√2πσ2 e−δ2/(2σ2), characterized by zero mean and variance σ2. Here, we consider only diagonal fluctuations that are typically larger than fluctuations of the inter-molecular couplings [27, 28] and the decoherence is dominated by pure dephasing [20]. We focus here on the single-excitation manifold. This subspace is spanned by the basis states |eg〉 and |ge〉. With the projection operator Π = |eg〉〈eg| + |ge〉〈ge|, we obtain an effective Hamiltonian
H ̃ = ΠHΠ = 1
2 [Δ + δ(t)]σ ̃z + 1
2 Jσ ̃x + νa†a + 1
2 κσ ̃z(a + a†). (2)
Here Δ(= ωd − ωa) is the difference between the excitation energies of donor (d) and acceptor (a). The Pauli operators in this two-dimensional single-excitation subspace are defined as σ ̃z = |eg〉〈eg| − |ge〉〈ge| and σ ̃x = |eg〉〈ge| + |ge〉〈eg|. In the absence of noise, negative Δ means uphill energy transfer from the donor to the acceptor that may be accompanied by an absorption of a phonon from the vibrational mode to assist the transfer, while positive Δ corresponds to downhill transfer that can -
be enhanced by a phonon emitted to the vibration [15]. When the classical noise is present, the energy levels fluctuate. The form of the coupling term σ ̃z implies that these two excitations are anticorrelated via the noise source [22, 29]. This means that the noise can bring the excitation levels to resonance and thereby enhance the excitation energy transfer efficiency. The chromophore donor–acceptor dimeric system shown in figure 1 has been experimentally engineered on a trapped-ion platform [1-
5]. The energy sites can be encoded in internal electronic state of the ions, for example, Ca+ (|S〉 (mj = 1/2) and |D〉 (mj = 1/2)) and therefore the single excitation states are represented by the combined state (e.g., |DS〉 and |SD〉). The interaction between the sites can be engineered via a bichromatic laser beam along the axis of the trap to be a two-qubit Mølmer–Sørensen quantum interaction and the site-vibration coupling can be achieved via a tightly focused laser beam localized to each ion. T-
he dephasing noise represented by δ(t)σz(a)/2 that causes fluctuations in the acceptor
2

New J. Phys. 24 (2022) 033032 Z-Z Li et al
Figure 1. A schematic diagram of the dimeric noisy chromophore donor–acceptor system as simulated on a trapped-ion platform. The yellow ions in the chain represent the donor and acceptor species. The magenta ellipse encircling the energy levels of the acceptor indicates the energetic shifts induced by classical stochastic fluctuations of the environment. The basic mechanism of excitation energy transfer from the donor to the acceptor (blue sold arrow) may be assisted by quantum noise in a form of -
the single vibration (red solid arrow). Dashed arrows illustrate the inverse downhill process.
splitting in equation (1) might be incorporated in the trapped-ion platform by either engineering fluctuations of local magnetic fields acting on internal electronic states of the ion [30] or modulating a Stark-shift generated by a laser beam. In appendix A, we present a microscopic derivation of the site-vibration coupling that allows a direct mapping between the Hamiltonian of molecular photosynthetic systems and an emulation of the Hamiltonian on platforms such as trapped ions. To demonstrate h-
ow the VAET process is influenced by the classical noise, we consider the physical quantities
Pa = 1
Nr
N ∑r
i=1
Pa,i, (3)
ηa = 1
Nr
N ∑r
i=1
ηa,i, (4)
where Pa,i(t) = Tr(Πaρi(t)) and ηa,i = 1
tf
∫ tf
0 Pa,i(t)dt are the transfer probability and efficiency, where the latter is defined as the accumulated acceptor population during a given time period tf , for each noise realization. Here Πa = |ge〉〈ge| is the projection operator onto the excited state at acceptor site a and Nr is the number of noise realizations over which we average. The total density matrix operator for the ith noise realization is ρi(t) = Uρs(t = 0)ρbU†, with U = e−iH ̃t. For the calculations shown here the initial states are
ρs(t = 0) = |eg〉〈eg| and ρb = ∑∞
n=0
nn
b
(nb+1)n+1 |n〉〈n| for the donor–acceptor dimer and for the vibration, respectively. In our work the temperature of the vibration is quantified by the average phonon number nb via the relation nb = 1
ehν/kBT−1 with h and kB being the Planck and Boltzmann constants, respectively,
implying more phonons at a higher temperature. The number of the noise realizations and Fock space size of the vibration are made large enough to ensure the accuracy and convergence of our results, specifically, we employ Nr = 800 and N = 24. In the numerical simulations below we use values for parameters that are typical of trapped-ion energy scales (i.e., kHz frequencies), rather than values typical of natural photosynthetic systems. However, these can be related by a simple scaling of energies -
(see, e.g., table 1 in reference [22]).
3. An invariance of the VAET system
In this section, we show that the effective Hamiltonian in equation (2) possesses an important symmetry implying that, for the quantities we compute here, only the difference in sign between the excitation energy difference Δ and the vibrational frequency ν is significant. This symmetry has some practical importance in the context of trapped-ion simulation of these dynamics, since sweeping ν to negative values can be easier than sweeping Δ to negative values. This is because the former is defined -
by a difference in frequencies that can be tuned, while the latter corresponds to an energy gap, which is more difficult to tune [15].
3

New J. Phys. 24 (2022) 033032 Z-Z Li et al
Figure 2. An example of the invariance of the transfer probability Pa under the simultaneous sign change of Δ and ν in the
dimeric VAET system. The red curves denote the resonant case (Δ2 + J2 = ν2) while two other curves refer to off-resonant cases. We take J/2π = 1.3 kHz, κ/2π = 0.229 kHz, nb = 0.4, and Nr = 800. The classical noise δ = 0 is used in these calculations.
In general we expect that the probability Pa will be different when the Hamiltonian is different (e.g., transformed by some symmetry operations). However, the acceptor population Pa, is invariant under the simultaneous sign change of the excitation energy difference Δ and of the vibrational frequency ν. Consider the time traces of the transfer probability Pa(t), equation (3), shown in figure 2 as an example. It is evident from these plots that for the off-resonant transition (i.e., ν2 = Δ2 + J2), -
the empty circles for which {Δ/2π, ν/2π} = {1.2, −0.9} kHz give the same probability as the filled circles, for which {Δ/2π, ν/2π} = {−1.2, 0.9} kHz, i.e., with opposite signs of both Δ and ν. This is also true for the resonant transitions ν2 = Δ2 + J2, both in the absence of classical noise, indicated by the red empty and filled squares with {Δ/2π, ν/2π} = {1.2, −0.9} kHz and {−1.2, 0.9}kHz, respectively, in figure 2, and in the presence of the classical noise source (δ = 0, not shown here). To u-
nderstand this invariance, we performed a symmetry-based analysis for both the situation in the absence of noise and the situation in the presence of noise. As detailed in appendix B, we find that if the initial state is an eigenstate of a parity operator and of the Pauli operator σz, and if all coefficients in the initial state have the same phase modulo π, then the probability Pa(t) is invariant when simultaneously changing the sign of Δ and ν. This invariance is independent both of the value of-
 the temperature parameter nb, and of whether or not the resonance condition (Δ2 + J2 = ν2) is satisfied. This surprising independence derives fundamentally from the inherited parity symmetry and the time-reversal symmetry of the Hamiltonian that fully governs the dynamical evolution under a certain initial state associated with an additional symmetry. See appendix B for full details. We finally mention that, for more complex photosynthetic systems or trapped-ion platforms that go beyond the Hamil-
tonian under our consideration, one could perform a similar analysis as that in appendix B to assess whether an invariant property exists or not.
4. Features of the noisy VAET
Here we demonstrate how the basic features of excitonic energy transport are influenced by the interplay between quantum and classical noise present in the dimeric chromophore donor–acceptor system of equation (1), considering in particular the effect of the classical stochastic noise on the VAET induced by the quantum noise. In figure 3 we first present a typical example of the time evolution of the transfer probability in the absence of classical noise. This shows oscillations characterized by t-
he transition
frequency ν ∼ √
Δ2 + J2, with a corresponding oscillatory period 2π/ν ∼ 0.556 ms (approximately four cycles in each period of 2.4 ms). Because of the coherent coupling of the donor–acceptor dimer to the underdamped vibration, we expect additional slow oscillations at a frequency ∼ κJ
ν
√n (period ∼6.4 ms).
4

New J. Phys. 24 (2022) 033032 Z-Z Li et al
Figure 3. A sample time evolution of transfer probability between electronic excited states at sites of the donor–acceptor dimer for various values of temperature (nb = 0.04, 0.4, 4, 8) in the absence of classical noise (δ = 0). The other parameters are Δ/2π = 1.2 kHz, ν/2π = 1.8 kHz, J/2π = 1.3 kHz, κ/2π = 0.229 kHz, and Nr = 800.
These occur on a longer time scale than that shown here. Figure 3 also shows that on increasing the average phonon number nb that quantifies the temperature of the vibration mentioned in section 2, Pa first increases as expected but becomes suppressed at later times. This suppression results from a reduced period of the above-mentioned slow oscillations for an increased nb which has a relatively higher probability (i.e., nn
b/(nb + 1)n+1) for a larger n state |n〉〈n|. Starting from this reference behavior with no classical noise (δ = 0), in the following we shall develop an understanding of the effect of finite classical noise by sweeping the values of both the vibrational frequency (ν) and the donor–acceptor excitation energy difference (Δ).
4.1. VAET in the presence of weak noise
The upper panels in figure 4 show two-dimensional plots of the acceptor population Pa as a function of the vibrational mode frequency ν/2π and the classical noise variance σ2 over the time period 0 − tf , for tf = 2 ms and three different temperatures (panels (a)–(c)). The lower panels (d)–(f) show the corresponding efficiencies ηa (accumulated population) over same time period. These plots correspond to the weak noise (small variance) regime. The distinct horizontal bars at resonance,
ν = ±√
Δ2 + J2 ̃± 2π × 1.8 kHz (here Δ/2π = 1.2 kHz, J/2π = 1.3 kHz), for example, those in panels (a) and (d), are signatures of VAET corresponding to an energy transfer process assisted by one phonon from the underdamped vibration. In addition to these resonant points that show high transfer probability Pa and correspondingly high efficiency ηa, we also observe VAET processes involving more than one phonon. Specifically, the lower intensity horizontal bars at ν ∼ ±2π × 0.9 kHz or ν ∼ ±2π × 0.6 kHz indi-
cate the two- or three-phonon absorption processes that can assist excitonic transfer in the donor–acceptor system. The plots show that classical noise injected as a random Gaussian modulation of the energy gap between excitations at the donor and acceptor sites begins to play a role as σ2 is increased from zero. As expected, this noise is seen to gradually reduce the extent of VAET as σ2 increases. However the extent of this reduction depends on whether the vibrational frequency is positive or ne-
gative, as
demonstrated in panels (a) and (b). This asymmetry in the degree of vibrational assistance for ±√
Δ2 + J2 becomes less pronounced as temperature increases (see panels (b) and (e) (nb = 4) and panels (c) and (f) (nb = 8)). It is also evident that the effect of VAET is increasingly suppressed as the classical noise variance increases, with both Pa and ηa becoming increasingly uniform as a function of the vibrational frequency ν. The meaning of the negative vibrational frequency (ν < 0) that appears in figure 4 is already mentioned in section 3 above and will be further explained in appendix B. I-
n addition to sweeping the vibrational mode frequency in figure 4, we have also considered sweeping the donor-acceptor energy difference, Δ, since this may be easier to realize in experiments. Figure 5 shows the transfer probability (upper panels (a)–(c)) and efficiency (lower panels (d)–(f)) as a two-dimensional function now of Δ/2π and of the classical noise variance σ2. In this case, the optimal transfer efficiency is found at Δ = 0 since the donor and acceptor are in resonance here. There are -
still distinct peaks around
Δ = ±√ν2 − J2 ∼ ±2π × 1.2 kHz (with ν/2π = 1.8 kHz and J/2π = 1.3 kHz), see for example panel (a).
5

New J. Phys. 24 (2022) 033032 Z-Z Li et al
Figure 4. Probability Pa(tf ) (upper panels (a)–(c)) and efficiency ηa(tf ) (lower panels (d)–(f)) of energy transfer as a function of
vibrational mode frequency (ν) and classical noise variance (σ2). The detuning between donor and acceptor is Δ/2π = 1.2 kHz. The three upper/lower plots are at different temperatures with mean boson mode occupation number ranging from low (nb = 0.4), intermediate (nb = 4), and high (nb = 8). Other parameters are tf = 2 ms, J/2π = 1.3 kHz, κ/2π = 0.229 kHz, and Nr = 800.
Note that a peak at a positive value of Δ represents downhill energy transfer with emission of a phonon, so the signatures of these features are more intense. Peaks at negative values of Δ signify uphill VAET processes assisted by absorption of a phonon from the vibration. There are additional peaks observable near Δ/2π ∼ ±1.8 kHz in figure 5(a), implying off-resonant transitions assisted by the vibrational mode ν/2π = 1.8 kHz. We see again that increasing the variance of the classical noise decre-
ases the VAET signatures (see figure 5(b) or figure 5(c)), similar to what was observed in figure 4. Comparing figures 4 and 5 we see a clear difference in the behavior of the energy transfer efficiency depending on which parameter is swept, i.e., ν or Δ. This difference derives fundamentally from the different aspects of the basic relation nν = ±
√
Δ2 + J2 (with n the number of phonons in the vibration), revealed by either fixing the donor-acceptor gap Δ (> 0 in figure 4) and sweeping ν, or fixing the vibrational frequency ν (> 0 in figure 5) while sweeping Δ. Sweeping ν allows the n > 1, multiple phonons resonances to be seen, while sweeping Δ allows the Δ = 0, donor/acceptor resonance to be seen.
4.2. Optimal value of the classical noise variance for energy transport efficiency
The previous plots have focused on the low noise regime. In this regime, the existence of an optimal classical noise variance σ2 at which the efficiency is maximized, the key prediction of purely dephasing-enhanced energy transfer [16], is not evident. Instead, the efficiency for a finite donor–acceptor gap (Δ = 0) is seen to increase with increasing σ2. In order to see a turnover of efficiency with increasing noise variance, one has to study larger values of σ2. Figure 6(a) shows plots of the ene-
rgy transfer efficiency at larger values of the classical noise variance σ2. For a given finite energy detuning between donor and
acceptor (Δ = √ν2 − J2 ∼ 2π × 1.2 kHz), the efficiency is seen to be low for small noise variance σ2, to rise as σ2 increases, and is then seen to subsequently decrease again at the significantly higher values of σ2 used here. This behavior is characteristic of the turnover of quantum random walks under dephasing [18] and has been termed an ENAQT turnover [16]. Figure 6(b) shows the corresponding probability Pa(tf ), which also shows an optimal σ value but with a weaker maximum. It is evident from-
 these plots that the appearance of a quantum Zeno regime at large σ2, where the dephasing severely inhibits any amount of energy transfer, is more easily observable for large detuning values |Δ| > J. We conclude that in the high noise regime, ENAQT dominates and VAET plays little role in energy transfer dynamics. This is expected since vibrational assistance is a resonant phenomenon, and noise broadening of the energy difference between donor and acceptor eliminates a well-defined energy gap for -
the vibrational mode to be on resonance with.
6

New J. Phys. 24 (2022) 033032 Z-Z Li et al
Figure 5. Probability Pa(tf ) (upper panels (a)–(c)) and efficiency ηa(tf ) (lower panels (d)–(f)) of energy transfer as a function of
donor-acceptor energy difference (Δ) and classical noise variance (σ2), for three different temperatures. The three upper/lower plots have mean boson mode occupation number ranging from low (nb = 0.4), intermediate (nb = 4), and high (nb = 8), corresponding to values of temperature T = 0.069 μK, 0.387 μK, and 1.77 μK, respectively. Here the vibrational mode frequency is ν/2π = 1.8 kHz and all other parameters are the same as in figure 4. Note that a trapped-ion quantum simulator can be operated in-
 the regime where all Hamiltonian parameters are of order a few kHz [15] that leads to low temperatures evaluated above.
Figure 6. The turnover of efficiency (a) and probability (b) of the excitation energy transfer as a function of the classical noise variance σ2 for larger values of this, with nb = 4. All other parameters are the same as in figure 5.
5. Discussions and conclusions
We have studied the interplay between vibrationally assisted excitonic energy transfer due to coupling of electronically excited states with underdamped vibrational modes and the effect of classical dephasing that has been previously identified as enabling energy transfer in certain regimes. We illustrated the interplay between these two processes by considering a dimeric chromophore donor–acceptor dimer system, which provides the basic features of a larger light-harvesting complex that are releva-
nt to the interaction of excitonic and vibrational degrees of freedom. We find that while addition of the classical noise weakens the VAET processes and destroys the quantum signature of this in the weak noise regime, it can nevertheless
7

New J. Phys. 24 (2022) 033032 Z-Z Li et al
enhance the VAET when the noise becomes higher. We also established an invariance property of this dimeric VAET system and provided a symmetry-based explanation for this. We look forward to experiments, e.g., on trapped ion emulation platforms, that will demonstrate and validate the results shown here, in particular the interplay between VAET and dephasing-induced optimal values of classical noise, as well as the invariance property. We expect that the basic features of the interplay between quant-
um and classical noise, representing coupling with underdamped and overdamped oscillators, the latter confined to dephasing interactions, that have been demonstrated and analyzed here for a typical dimeric chromophore donor–acceptor system can be manifested also in larger and more complex photosynthetic systems. Generalization to other kinds of noise, or to noise injected as a modulation of the vibrational mode frequency or of the exciton-vibration coupling is straightforward. We expect that our o-
bservation that weak classical noise tends to weaken VAET will generally hold for other kinds of generic noise as well. It would be interesting if this is not true for some highly structured noise with tailored spectrum. We emphasize that the detrimental effect of the classical noise on the VAET reported in the present work is dependent on frequency of molecular vibration and difference of excitonic energies [31]. Specifically, in figures 4(a)–(c) with a fixed donor–acceptor gap, the detrimental e-
ffect of the classical noise manifests itself in different ways for a resonant absorption of either single or multiple phonons from the vibration. For the off-resonant cases in figures 4(a)–(c), the classical noise demonstrates a beneficial effect (this is because noise can bring the excitation levels to resonance and thereby enhance the energy transfer). In figures 5(a)–(c) with a fixed vibrational mode frequency, the detrimental effect of the classical noise truly depends on the donor–acceptor g-
ap, e.g., downhill (Δ > 0) or uphill (Δ < 0), and on whether the transfer is resonant or off-resonant. In addition, our observation in figures 5(a)–(c) is consistent with that in reference [31], namely the vibration plays a minor role in the region of small absorption energy difference but contributes strongly to assist the transfer in the region of large absorption energy. We also comment on the relationship between our work and reference [32], which studied a similar problem of excitation energy-
 transfer of a dimer under the influence of both a vibration and an environment. In that work, it is claimed that the transfer dynamics are dominated by the environment and the vibrational modes contribute to acceleration the energy transfer only slightly. While this conclusion is consistent with the conclusions drawn in the present work, we would like to point out a few differences between reference [32] and our work. The first one is the theoretical methods employed. The environment and the vibr-
ation were taken into account in reference [32] via relaxation functions in the form of either an exponential decay or Brownian oscillator model, respectively, which is different from the Gaussian white noise or the quantized oscillator included in a straightforward way into the Hamiltonian (i.e., equation (1)) in our work. The second difference is that reference [32] considered a specific case, namely, resonant downhill energy transfer affected by a vibration and an environment. In contrast, we c-
onsider the effect of finite classical noise in a more complete way by sweeping the values of the vibrational frequency, the donor–acceptor excitation energy difference, or the variance of the classical noise, as shown explicitly in the weak-noise regime in figures 4 and 5. Finally, we note that in addition to the trapped-ion platform that we focus on in our work, the circuit-QED platform could also be used for the implementation of our predictions. The effects of classical noise on energy transfe-
r have already been studied on this platform [23], where individual superconducting qubits played the role of energy sites. As in that case, the interaction between sites can be achieved by cavity-mediated, or direct, coupling between qubits. The new element, the vibrational mode, can be modeled by a mode of a transmission line resonator. A key difference in superconducting platforms, is that the usual coupling between qubits and resonator modes is of the form σ+a + σ−a†, which is different from t-
he usual VAET coupling considered here, σz(a + a†). However, this coupling could be engineered by operating in the dispersive regime [33] and linearizing the interaction around a large classical pump.
Acknowledgments
We thank Robert Cook, Joseph Broz, and Hartmut Häffner for helpful discussions. Work at the University of California, Berkeley was supported by the U.S. Department of Energy (DOE), Office of Science, Basic Energy Sciences (BES) under Award DE-SC0019376. Work at Sandia National Laboratories was supported by the U.S. Department of Energy, Office of Science, Basic Energy Sciences, Chemical Sciences, Geosciences, and Biosciences Division. Sandia National Laboratories is a multimission laboratory manag-
ed and operated by NTESS, LLC., a wholly owned subsidiary of Honeywell International, Inc., for the U.S. DOE’s NNSA
8

New J. Phys. 24 (2022) 033032 Z-Z Li et al
Figure 7. Schematic of the electronic excitation and reorganization processes with the Franck–Condon transition energy ħΩ and the reorganization energy ħλ.
under Contract DE-NA-0003525. This paper describes objective technical results and analysis. Any subjective views or opinions that might be expressed in the paper do not necessarily represent the views of the U.S. Department of Energy or the United States Government.
Data availability statement
All data that support the findings of this study are included within the article (and any supplementary files).
Appendix A. Derivation of the electron-vibration interaction
In this appendix, we demonstrate how to connect the Hamiltonian for light harvesting systems that is commonly studied for the natural systems with an equivalent description derived for emulation of these by artificial systems such as trapped ions.
A.1. Equivalent descriptions with different coupling forms
To demonstrate in a simple manner an equivalence between two Hamiltonian descriptions that consider a coupling of a vibration to either an excited state or both ground and excited states [34], respectively, we take the molecular system shown in figure 7 as an example. This is described by the Hamiltonian
H(q1, q2) =
( p2
2m + mω2
2 q2
1
)
|g〉〈g| +
( p2
2m + mω2
2 q2
2 + ε0
)
|e〉〈e|. (A1)
Here the zero of energy is defined to be at the minimum of the nuclear potential energy surface for the electronic ground state |g〉. According to figure 7, we define the Franck–Condon transition energy ħΩ and reorganization energy ħλ as
ħΩ = ε0 + mω2q1d, (A2)
ħλ = 1
2 mω2d2, (A3)
respectively. Written in terms of the center of mass and difference coordinates  ̄q and d, defined as q ̄ = q2+q1
2 and
d = q2−q1
2 with q1 and q2 the potential surface coordinate of the ground and excited states, respectively, the above Hamiltonian becomes
9

New J. Phys. 24 (2022) 033032 Z-Z Li et al
H(q ̄, d) =
[ p2
2m + mω2
2 (q ̄ − d)2
]
|g〉〈g| +
[ p2
2m + mω2
2 (q ̄ + d)2 + ε0
]
|e〉〈e|
=
( p2
2m + mω2
2 q ̄2
)
(|g〉〈g| + |e〉〈e|) + mω2
2 (d2 − 2q ̄d)|g〉〈g| +
[ mω2
2 (d2 + 2q ̄d) + ε0
]
|e〉〈e|
= p2
2m + mω2
2 q ̄2 + mω2
2 d2 + ε0|e〉〈e| + mω2q ̄dσz. (A4)
Here σz = |e〉〈e| − |g〉〈g|. It is then obvious that both the ground and the first excited states are coupled to the vibration. An alternative equivalent form H(q1, d) is obtained by substituting q2 = q1 + 2d into H(q1, q2). This yields
H(q1, d) =
( p2
2m + mω2
2 q2
1
)
|g〉〈g| +
[ p2
2m + mω2
2 (q1 + 2d)2 + ε0
]
|e〉〈e|
=
( p2
2m + mω2
2 q2
1
)
(|g〉〈g| + |e〉〈e|) + ε0|e〉〈e| + 2mω2q1d|e〉〈e| + 2mω2d2|e〉〈e|
= p2
2m + mω2
2 q2
1 + ε0|e〉〈e| + 2mω2q1d|e〉〈e| + 2mω2d2|e〉〈e|. (A5)
It is evident that in this form the vibration is coupled only to the excited state. As demonstrated, H(q ̄, d) and H(q1, d) are both equivalent to H(q1, q2), despite containing different forms for the coupling between the vibration and the electron. This equivalence can be also illustrated by further substituting q1 =  ̄q − d,
H(q1, d) = p2
2m + mω2
2 (q ̄ − d)2 + ε0|e〉〈e| + 2mω2(q ̄ − d)d|e〉〈e| + 2mω2d2|e〉〈e|
= p2
2m + mω2
2 q ̄2 + mω2
2 d2 − mω2q ̄d + ε0|e〉〈e| + 2mω2(q ̄d − d2)|e〉〈e| + 2mω2d2|e〉〈e|
= p2
2m + mω2
2 q ̄2 + mω2
2 d2 + ε0|e〉〈e| + mω2 ̄qd(|e〉〈e| − |g〉〈g|) = H(q ̄, d). (A6)
A.2. Connection to our model
The lesson that we learn from the above analysis is that two alternative forms of a Hamiltonian with coupling of the vibration to either the ground state or both excited and ground states can be appropriate for describing the system. In particular, one needs to be careful about which additional energetic terms are needed in order to establish an equivalence between the two forms. To make the connection of the above-demonstrated equivalence with our current model more apparent, we rewrite equations-
 (A4) and (A5) by performing a shift of the zero of energy to the average of the minima of the two potential surfaces and further quantizing the two quadratic Hamiltonians. When the zero of energy is shifted to ε0
2 , equation (A4) can be rewritten as
H(q ̄, d) = p2
2m + mω2
2 q ̄2 + mω2
2 d2 + ε0
2 (|e〉〈e| − |g〉〈g|) + mω2q ̄dσz
= p2
2m + mω2
2 q ̄2 + mω2
2 d2 + ε0
2 σz + mω2 ̄qdσz.
(A7)
A further quantization of the harmonic oscillator, i.e., p2
2m + mω2
2 q ̄2 → ħa†a and  ̄q → a† + a, yields the Hamiltonian
H = ħωa†a + ε0
2 σz − κ(a† + a)σz + mω2d2
2
= ħωa†a + ε0
2 σz − κ(a† + a)σz + κ2
2mω2 , (A8)
10

New J. Phys. 24 (2022) 033032 Z-Z Li et al
where κ = −mω2d. Similarly, equation (A5) under the consideration of the same shifted zero of energy becomes
H(q1, d) = p2
2m + mω2
2 q2
1 + ε0
2 (|e〉〈e| − |g〉〈g|) + 2mω2q1d|e〉〈e| + 2mω2d2|e〉〈e|
= p2
2m + mω2
2 q2
1 + ε0
2 σz + 2mω2q1d|e〉〈e| + 2mω2d2|e〉〈e|. (A9)
Quantization of equation (A9) using p2
2m + mω2
2 q21 → ħa ̃†a ̃ and q1 →  ̃a† + a ̃ leads to
H ̃ = ħa ̃†a ̃ + ε0
2 σz − 2κ(a ̃† + a ̃)|e〉〈e| + 2κ2
mω2 |e〉〈e|
= ħa ̃†a ̃ +
( ε0
2 + 2κ2
mω2
)
|e〉〈e| − 2κ(a ̃† + a ̃)|e〉〈e| − ε0
2 |g〉〈g|. (A10)
Comparison between equations (A8) and (A10) clearly shows the relationship between equivalent descriptions with different forms of the electron-vibration coupling. Finally we illustrate the connection between the Huang–Rhys parameter in the natural systems and the site-vibration coupling of the simulation systems. The Huang–Rhys parameter D is a dimensionless factor related to the scaled mean square displacement
D = d′2mω
2ħ , (A11)
where d′ = q2 − q1 = 2d. This yields the displacement d′ =
√
2ħD
mω . The interaction term between the local excitonic degree of freedom and the vibration in equation (A7) has the form
mω2q ̄dσz = mω2 × 1
2
√ 2ħD
mω ×
√ħ
2mω (a† + a) × (|e〉〈e| − |g〉〈g|)
=1
2 ħω√D(a† + a)σz. (A12)
Equivalently, if we consider the alternative coupling form in equation (A9), this interaction is given by
2mω2q1d|e〉〈e| = mω2
√ 2ħD
mω ×
√ħ
2mω (a† + a) × |e〉〈e|
= ħω√D(a† + a)|e〉〈e|. (A13)
This implies the site-vibration coupling parameter κ = −√Dħω/2.
Appendix B. Symmetry analysis on the VAET system
In this appendix we present a symmetry-based analysis to support the invariance property of our VAET system both in the absence and in the presence of the classical noise.
B.1. Absence of classical noise
We first consider the case of the absence of classical noise, H ̄ = H ̃ (δ = 0). Given the effective Hamiltonian in equation (2) and the initial state |φ0〉(= |eg, n〉), the probability of being in the target state at time t is
P(t) = 〈φ0|eiH ̄tΠa e−iH ̄t|φ0〉, where the Πa = |ge〉〈ge| is the projection onto the target state. The extension to
a thermal state of the vibration ρb = ∑∞
n=0
nn
b
(nb+1)n+1 |n〉〈n| is straightforward. We are going to transform the Hamiltonian by conjugating it with different symmetry operations, which corresponds to changing the signs of some subsets of the four parameters Δ, J, ν, and κ. We will show that when the initial state |φ0〉 is an eigenstate of the relevant symmetry operations, P(t) is invariant under the corresponding sign changes. The first symmetry is the parity corresponding to a sign change of the exciton-vibration coupling constant κ. Under th-
is sign change the Hamiltonian H ̄ becomes H1 = Δ
2 σ ̃z + J
2 σ ̃x + νa†a − κ
2 σ ̃z(a + a†). The physical meaning of this sign change is to invert the coordinate of the harmonic oscillator (i.e., a parity operation). If our initial state treats both directions of the coordinate equally, then we expect that inverting
11

New J. Phys. 24 (2022) 033032 Z-Z Li et al
the coordinate will have no effect on the system dynamics other than inverting the spatial coordinates. We define the parity operator Υ just as for the spatial coordinate of the 1D harmonic oscillator, i.e.,
Υ|n〉 =
{−|n〉 n is odd,
|n〉 n is even,
(B1)
so the new Hamiltonian can be written as H1 = Υ†H ̄ Υ. The probability of being in the target state then becomes
P1(t) = 〈φ0|eiH1tΠa e−iH1t|φ0〉
= 〈φ0|eiΥ†H ̄Υt Πa e−iΥ†H ̄ Υt |φ0〉
= 〈φ0|Υ†eiH ̄tΥΠaΥ† e−iH ̄tΥ|φ0〉
= 〈φ0|Υ† eiH ̄tΠa e−iH ̄tΥ|φ0〉, (B2)
where we have used the identity eiΥ†H ̄Υt = Υ† eiH ̄tΥ and the fact that ΥΠaΥ† = Πa. Since the eigenvalue of the parity operator Υ is ±1, P1(t) = P(t) if |φ0〉 is an eigenstate of Υ, i.e., P(t) is invariant under the sign change of κ. Similarly, a sign change of J leads to H2 = Δ
2 σ ̃z − J
2 σ ̃x + νa†a − κ
2 σ ̃z(a + a†), which corresponds to redefining the ground state with a minus sign, i.e., −|eg〉 or −|ge〉 for Δ < 0 or > 0, respectively. Unless the initial state has nonzero coefficients on both |eg〉 and |ge〉, we expect this redefinition to have no effect on the system dynamics. The Hamiltonian H2 is obtained by conjugating H ̄ with σ ̃z (i.e., H2 = σ ̃z†H ̄ σ ̃z). So the target state probability now becomes
P2(t) = 〈φ0|eiH2tΠa e−iH2t |φ0〉
= 〈φ0|eiσ ̃z†H ̄σ ̃zt Πae−iσ ̃z†H ̄σ ̃zt |φ0〉
= 〈φ0|σ ̃†
z eiH ̄t σ ̃zΠaσ ̃†
z e−iH ̄ t σ ̃z|φ0〉
= 〈φ0|σ ̃†
z eiH ̄tΠa e−iH ̄tσ ̃z|φ0〉. (B3)
Therefore when the initial state |φ0〉 is an eigenstate of σ ̃z, P(t) is invariant under the sign change of J. The last symmetry to be discussed is the time reversal symmetry. The physical meaning of the sign change of the entire Hamiltonian H ̄ , namely, H3 = −H ̄ , is most apparent when we look at the time evolution operator U3 = e−iH3t = e−iH(−t). Evolving H3 forward in time corresponds to evolving the original Hamiltonian H ̄ backward in time. Conjugating the forward time evolution operator e−i-
Ht with the time reversal operator Θ will give us the backward time evolution operator, which is the forward time evolution operator of H3, i.e., Θ† e−iH ̄t Θ = eiH ̄t = e−iH3t . In the Hilbert space of our VAET system, the effect
of Θ acting on a state is to replace all the coefficients of the basis states by their complex conjugates, i.e.,
Θ∑
α=eg,ge
∑
ncα,n|α, n〉 = ∑
α=eg,ge
∑
nc∗α,n|α, n〉. Note that Θ is an antiunitary (antilinear and unitary) operator, so one has to be careful when using this with the Dirac bracket notation. The target state probability under the time-reversed dynamics is
P3(t) = 〈φ0|eiH3tΠa e−iH3t|φ0〉
= 〈φ0|Θ† eiH ̄tΘΠaΘ† e−iH ̄tΘ|φ0〉
= 〈φ0|Θ† eiH ̄t Πae−iH ̄tΘ|φ0〉. (B4)
If all the coefficients in the initial state have the same phase (mod π), then complex conjugation just adds an overall phase factor, i.e., Θ|φ0〉 = eiφ|φ0〉 and 〈φ0|Θ† = e−iφ|φ0〉. Since these two phase factors cancel each other out, we arrive at the result that P(t) is invariant under sign change of the entire Hamiltonian when all coefficients in the initial state |φ0〉 have the same phase modulo π. For initial states |φ0〉 = |eg, n〉 we can combine the results from the above three symmetry analyses, -
obtaining relevant combinations of the three possible sign changes. Furthermore, the above arguments and
conclusions also hold for thermal states of the vibration, ρb = ∑∞
n=0
nn
b
(nb+1)n+1 |n〉〈n| given that a thermal
states is a superposition of many Fock states (i.e., phonon number states |n〉〈n|). In particular, it is useful to understand why putting a minus sign on the vibrational frequency ν yields the same result as putting a minus sign on excitonic detuning Δ. We can see this by realizing that a simultaneous sign change on ν and
12

New J. Phys. 24 (2022) 033032 Z-Z Li et al
Δ in H ̄ = H ̃ (δ = 0) = 1
2 Δσ ̃z + 1
2 Jσ ̃x + νa†a + 1
2 κσ ̃z(a + a†) is equivalent to first changing the sign of the
entire Hamiltonian H ̄ (time-reversal operation), and then reverting the signs of both κ (parity operation) and J (σ ̃z operation) back to their original values.
B.2. Presence of classical noise
To show that the invariance property also holds in the presence of classical noise, we have numerically demonstrated that the same results can be obtained via consideration of the Lindblad master equation. This demonstration supports the equivalence between the Lindblad equation and the average behavior of adding Gaussian white noise to Hamiltonian [35]. We can therefore perform the symmetry analysis on the Lindblad equation ρ ̇(t) = Lρ = −i[H ̄ , ρ(t)] + γ[σz, [σz, ρ(t)]], where γ is proportional-
 to the variance of the Gaussian white noise, and the probability of being in the target state is given by P(t) = Tr(Πa e−iLtρ0). For the parity symmetry that changes the Hamiltonian to Υ†H ̄ Υ, we have
L1ρ = −i[Υ†H ̄ Υ, ρ(t)] + γ, σz, [σz, ρ(t)]]
= −iΥ†[H ̄ , Υρ(t)Υ†]Υ − γΥ†[σz, [σz, Υρ(t)Υ†]]Υ
= Υ†LΥρ. (B5)
This gives rise to the time evolution
e−iL1t =
∑ ∞
n=0
1
n! (−iL1t)n =
∑ ∞
n=0
1
n! (−iΥ†LΥt)n
= Υ† e−iLtΥ. (B6)
Therefore P′1(t) = Tr(Πa e−iL1tρ0) = Tr(Πa e−iLtΥρ0Υ†). We then arrive at an analogous conclusion to the
noiseless case, namely that P(t) is invariant under sign change of κ when Υρ(0)Υ† = ρ0.
Similarly, for the symmetry that leads to the transformed Hamiltonian σ ̃z†H ̄ σ ̃z,
L2ρ = −i[σ†
z H ̄ σz, ρ(t)] + γ, σz, [σz, ρ(t)]]
= −iσ†
z [H ̄ , σzρ(t)σ†
z ]σz − γσ†
z [σz, [σz, σzρ(t)σ†
z ]]σz
= σ†
z Lσzρ, (B7)
which leads to P′2(t) = Tr(Πa e−iL2tρ0) = Tr(Πa e−iLtσzρ0σz†). We then conclude that when σzρ0σz† = ρ0, P(t) is invariant under a sign change of J. For the time reversal symmetry we have,
L3ρ = −i[Θ†H ̄ Θ, ρ(t)] + γ, σz, [σz, ρ(t)]]
= −i[−H ̄ , ρ(t)] + γ, σz, [σz, ρ(t)]]
= −iΘ†(−1)[H ̄ , Θρ(t)Θ†]Θ − γΘ†[σz, [σz, Θρ(t)Θ†]]Θ
= Θ†LΘρ. (B8)
Note that Θ and Θ† are both antilinear. We then have e−iL3t = Θ† e−iLtΘ and P′3(t) = Tr(Πa e−iL3tρ0) = Tr(Πa e−iLtΘρ0Θ†). This leads to the conclusion that P(t) is invariant under a
sign change of H ̄ when either Θρ0Θ† = ρ0 or ρ0 is real. Combining the above analyses, we find that in the presence of Gaussian white noise P(t) is still invariant under a simultaneous sign change of both ν and Δ when Υρ0Υ† = σzρ0σz† = ρ0 and ρ0 is real.
ORCID iDs
Liwen Ko https://orcid.org/0000-0002-5919-7296 Zhibo Yang https://orcid.org/0000-0002-4637-7175 Mohan Sarovar https://orcid.org/0000-0003-4091-9508 K Birgitta Whaley https://orcid.org/0000-0002-7164-4757
13

New J. Phys. 24 (2022) 033032 Z-Z Li et al
References
[1] Chin A W, Prior J, Rosenbach R, Caycedo-Soler F, Huelga S F and Plenio M B 2013 The role of non-equilibrium vibrational structures in electronic coherence and recoherence in pigment-protein complexes Nat. Phys. 9 113 [2] Irish E K, Go ́mez-Bombarelli R and Lovett B W 2014 Vibration-assisted resonance in photosynthetic excitation-energy transfer Phys. Rev. A 90 012510
[3] Sato Y and Doolittle B 2014 Influence of intra-pigment vibrations on dynamics of photosynthetic exciton J. Chem. Phys. 141 185102 [4] Killoran N, Huelga S F and Plenio M B 2015 Enhancing light-harvesting power with coherent vibrational interactions: a quantum heat engine picture J. Chem. Phys. 143 155102 [5] Lee M H and Troisi A 2017 Vibronic enhancement of excitation energy transport: interplay between local and non-local exciton-phonon interactions J. Chem. Phys. 146 075101 [6] Kolli A, O’Re-
illy E J, Scholes G D and Olaya-Castro A 2012 The fundamental role of quantized vibrations in coherent light harvesting by cryptophyte algae J. Chem. Phys. 137 174109 [7] Juhász I B and Csurgay A ́ I 2018 Impact of undamped and damped intramolecular vibrations on the efficiency of photosynthetic exciton energy transfer AIP Adv. 8 045318 [8] Nalbach P, Mujica-Martinez C A and Thorwart M 2015 Vibronically coherent speed-up of the excitation energy transfer in the Fenna–Matthews–Olson complex Phys. R-
ev. E 91 022706 [9] O’Reilly E and Olaya-Castro A 2014 Non-classicality of the molecular vibrations assisting exciton energy transfer at room temperature Nat. Commun. 5 3012 [10] Cina J A and Fleming G R 2004 Vibrational coherence transfer and trapping as sources for long-lived quantum beats in polarized emission from energy transfer complexes J. Phys. Chem. A 108 11196 [11] Christensson N, Kauffmann H F, Pullerits T and Manˇcal T 2012 Origin of long-lived coherences in light-harvesting complexes -
J. Phys. Chem. B 116 7449
[12] Plenio M B, Almeida J and Huelga S F 2013 Origin of long-lived oscillations in 2D-spectra of a quantum vibronic model: electronic versus vibrational coherence J. Chem. Phys. 139 235102 [13] Scholes G D et al 2017 Using coherence to enhance function in chemical and biophysical systems Nature 543 647 [14] Wang L, Allodi M A and Engel G S 2019 Quantum coherences reveal excited-state dynamics in biophysical systems Nat. Rev. Chem. 3 477
[15] Gorman D J, Hemmerling B, Megidish E, Moeller S A, Schindler P, Sarovar M and Haeffner H 2018 Engineering vibrationally assisted energy transfer in a trapped-ion quantum simulator Phys. Rev. X 8 011038 [16] Rebentrost P, Mohseni M, Kassal I, Lloyd S and Aspuru-Guzik A 2009 Environment-assisted quantum transport New J. Phys. 11 033003 [17] Chen L, Shenai P, Zheng F, Somoza A and Zhao Y 2015 Optimal energy transfer in light-harvesting systems Molecules 20 15224 [18] Kendon V 2007 Decoherence in-
 quantum walks—a review Math. Struct. Comput. Sci. 17 1169–220 [19] Dijkstra A G, Wang C, Cao J and Fleming G R 2015 Coherent exciton dynamics in the presence of underdamped vibrations J. Phys. Chem. Lett. 6 627
[20] Capek V 1993 Haken–Strobl–Reineker model: its limits of validity and a possible extension Chem. Phys. 171 79 [21] Song X-K, Deng F-G, Lamata L and Muga J G 2006 Robust state preparation in quantum simulations of Dirac dynamics Phys. Rev. A 95 022332 [22] Li Z-Z, Ko L, Yang Z, Sarovar M and Whaley K B 2021 Unraveling excitation energy transfer assisted by collective behaviors of vibrations New J. Phys. 23 073012 [23] Potocnik A et al 2018 Studying light-harvesting models with superconducting c-
ircuits Nat. Commun. 9 904 [24] Hoyer S, Sarovar M and Whaley K B 2010 Limits of quantum speedup in photosynthetic light harvesting New J. Phys. 12 065041 [25] Sarovar M, Cheng Y-C and Whaley K B 2011 Environmental correlation effects on excitation energy transfer in photosynthetic light harvesting Phys. Rev. E 83 011906 [26] Fujita T, Huh J and Aspuru-Guzik A 2014 A stochastic reorganizational bath model for electronic energy transfer J. Chem. Phys. 140 244103 [27] Cho M, Vaswani H M, Brixner T, -
Stenger J and Fleming G R 2005 Exciton analysis in 2D electronic spectroscopy J. Phys. Chem. B 109 10542 [28] Adolphs J and Renger T 2006 How proteins trigger excitation energy transfer in the FMO complex of green sulfur bacteria Biophys. J. 91 2778
[29] Uchiyama C, Munro W J and Nemoto K 2018 Environmental engineering for quantum energy transport npj Quantum Inf. 4 011038 [30] Schindler P et al 2013 A quantum information processor with trapped ions New J. Phys. 15 123012 [31] Ishizaki A and Fleming G R 2021 Insights into photosynthetic energy transfer gained from free-energy structure: coherent transport, incoherent hopping, and vibrational assistance revisited J. Phys. Chem. B 125 3286–95 [32] Fujihashi Y, Fleming G R and Ishizaki A 2015 Im-
pact of environmentally induced fluctuations on quantum mechanically mixed electronic and vibrational pigment states in photosynthetic energy transfer and 2D electronic spectra J. Chem. Phys. 142 212403 [33] Blais A, Huang R-S, Wallraff A, Girvin S M and Schoelkopf R J 2004 Cavity quantum electrodynamics for superconducting electrical circuits: an architecture for quantum computation Phys. Rev. A 69 062320 [34] Ishizaki A, Calhoun T R, Schlau-Cohen G S and Fleming G R 2010 Quantum coherence and it-
s interplay with protein environments in photosynthetic electronic energy transfer Phys. Chem. Chem. Phys. 12 7319 [35] Ban M, Kitajima S and Shibata F 2010 Reduced dynamics and the master equation of open quantum systems Phys. Lett. A 374 2324
14

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:13:55.599Z
- **Text Length:** 51210 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 15 of 15
