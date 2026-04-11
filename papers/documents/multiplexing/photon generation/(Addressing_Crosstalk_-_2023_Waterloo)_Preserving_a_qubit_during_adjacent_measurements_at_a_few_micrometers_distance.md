# PDF Document: (Addressing Crosstalk - 2023 Waterloo) Preserving a qubit during adjacent measurements at a few micrometers distance.pdf

**File Path:** (Addressing Crosstalk - 2023 Waterloo) Preserving a qubit during adjacent measurements at a few micrometers distance.pdf

**Processed Date:** 2026-02-10T18:17:43.192Z

**File Size:** 2337.69 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 615

**Title:** (Addressing Crosstalk - 2023 Waterloo) Preserving a qubit during adjacent measurements at a few micrometers distance

**Collection:** Multiplexing > Photon Generation

---

## Extracted Text Content

Preserving a qubit during adjacent measurements at a few micrometers distance
Sainath Motlakunta,∗ Nikhil Kotibhaskar, Chung-You Shih, Anthony Vogliano, Darian Mclaren, Lewis Hahn, Jingwen Zhu,
Roland Hablu¨tzel, and Rajibul Islam Institute for Quantum Computing and Department of Physics and Astronomy,
University of Waterloo, Waterloo, Ontario N2L 3G1, Canada (Dated: June 6, 2023)
Protecting a quantum object against irreversible accidental measurements from its surroundings is necessary for controlled quantum operations. This becomes especially challenging or unfeasible if one must simultaneously measure or reset a nearby object’s quantum state, such as in quantum error correction. In atomic systems - among the most established quantum information processing platforms - current attempts to preserve qubits against resonant laser-driven adjacent measurements waste valuable ex-
perimental resources such as coherence time or extra qubits and introduce additional errors. Here, we demonstrate high-fidelity preservation of an ‘asset’ ion qubit while a neighboring ‘process’ qubit is reset or measured at a few microns distance. We achieve < 1 × 10−3 probability of accidental measurement of the asset qubit while the process qubit is reset, and < 4 × 10−3 probability while applying a detection beam on the same neighbor for experimentally demonstrated fast detection times, at a d-
istance of 6 µm or four times the addressing Gaussian beam waist. These low probabilities correspond to the preservation of the quantum state of the asset qubit with fidelities above 99.9% (state reset) and 99.6% (state measurement). Our results are enabled by precise wavefront control of the addressing optical beams while utilizing a single ion as a quantum sensor of optical aberrations. Our work demonstrates the feasibility of in-situ state reset and measurement operations, building towards enha-
ncements in the speed and capabilities of quantum processors, such as in simulating measurement-driven quantum phases and realizing quantum error correction.

arXiv:2306.03075v1 [quant-ph] 5 Jun 2023

Programmable many-body quantum systems are an excellent platform for quantum information processing (QIP), including simulation of complex quantum phenomena and quantum computing. Full programmability requires both coherent and incoherent control, such as state resets (initialization) and state measurements at the level of its individual building blocks[4, 5]. Coherent dynamics are, in principle, reversible, while incoherent operations generally constitute irreversible quantum measurements. The ab-
ility to perform measurements and resets on a subsystem in the middle of coherent dynamics (‘mid-circuit measurements and resets’) is a powerful tool for simulating new classes of quantum phenomena such as measurement-driven quantum phase transitions [6–12] and executing quantum error correction protocols [4, 13, 14]. A primary challenge [15] of subsystem midcircuit measurement and reset is the accidental quantum measurement (AQM) of the remaining system during the process, leading to irreparable -
decohering errors. In particular, for atomic quantum systems such as trapped ions, state reset, and measurement are performed via resonant laser beam illumination, and accidental scattering of photons leads to a finite probability of AQM (PAQM). This probability can be prohibitively high, as the typical interatomic separation is comparable to the optical resolution. To mitigate the high probability of AQM in atomic QIP experiments, strategies such as physical separation
∗ smotlaku@uwaterloo.ca

of atoms through shuttling [3, 16–18], usage of additional ancilla qubits of the same [6] or different atomic species [19–22], hiding [23–27] qubits to states outside the computational Hilbert space or adopting other suppression techniques [15] are employed. However, these techniques waste resources (circuit time, extra qubits) and introduce additional errors (e.g., errors due to motional heating or imperfect coherent operations).
Here, we demonstrate preservation of the quantum state of an ‘asset’ ion qubit with high fidelity while a neighboring ‘process’ qubit at a few microns distance is reset or measured. We achieve PAQM < 1 × 10−3 of the asset qubit during the process qubit reset operation and PAQM < 4 × 10−3 while applying detection light on the process qubit for experimentally demonstrated [3] fast detection times. These low probabilities of AQM correspond to retaining the quantum state of the asset qubit to above 99-
.9% and 99.6% fidelities for the reset and measurement processes, respectively. Our explorations, presented here, further provide a framework to optimize multidimensional optical parameters for maximizing insitu operation fidelity. Our in-situ incoherent operations are enabled by exquisite control over optical wavefronts from a holographic addressing system [28] that compensates for aberrations sensed using a single ion’s quantum state. This approach relies on robust optical engineering rather tha-
n special trapping architectures and can be adapted to other atomic QIP systems. Our demonstrated high-fidelity results immediately enable explorations of novel measurement-driven quantum simulation protocols [7] and open quantum systems, such as quantum simulations with local dissipation and measurements, and

2

a)
Engineered wavefront

asset qubit (ion1): qubit to be preserved
process qubit (ion2): qubit to be measured/reset

NA ~ 0.16

⬆

⬆

⬆

b)

2P1/2

F'=1 F'=0

2S1/2

F=1 F=0

State-reset (Optical pumping)

⬆

PAQM(ion 1)
⬆

⬆⬆
12
a

⬆

⬆

⬆

z

x

y x

2P1/2

F'=1 F'=0

2S1/2

F=1 F=0

State-measurement (Detection)

c) 10−1 10−2

Operations on ion1
Detection light (11μs) State reset

10−3

10−4 10−5

10−6

Results in this work

10−5

10−4

10−3

Intensity crosstalk (IX)

10−2

FIG. 1. Accidental quantum measurement (AQM) of neighboring qubits. a) While addressing a ‘process’
qubit (ion2) in a trapped ion chain, an ‘asset’ qubit (ion1)
at a distance a away may be accidentally measured by pho-
tons that are either scattered from ion2 (red wavy lines) or
from intensity crosstalk due to imperfect optical address-
ing (lightly shaded violet). AQM from imperfect optical
addressing can be minimized by engineering the wavefronts incident on the microscope objective. b) Atomic transitions in 171Yb+ (Zeeman splitting not shown) for relevant
incoherent processes. The ground state hyperfine levels
S1/2 |F = 0, mF = 0⟩ and S1/2 |F = 1, mF = 0⟩ are assigned as the |↓⟩ and |↑⟩ of the effective spin-1/2 object or a qubit,
respectively. Left - a quantum state is reset through opti-
cal pumping into |↓⟩. Right - a quantum state is measured
in {|↓⟩ , |↑⟩} basis by detecting state-dependent fluorescence[1] from the cycling transition. c) Calculated probability of AQM
(PAQM) of the asset qubit (ion1) as a function of intensity crosstalk (IX ). The intensity crosstalk (IX = I1/I2) is defined as the ratio of the optical intensity of the addressing
beam on the asset qubit (I1) to that on the process qubit (I2). Here, PAQM is estimated from the asset qubit’s infidelity after a state detection or reset on the process qubit. The fidelity
[2] is estimated with respect to |↑⟩ to represent the worst-case
scenario (See supplementary information). For this figure, we choose a = 6 µm, and I2 = Isat (the saturation intensity of the transition). For low crosstalk regime (IX < 1 × 10−5), inter-ion scattering sets a fundamental limit, PA∗QM, which can vary (shaded region) depending on the geometric prop-
erties of the system, such as the orientation of the magnetic field (B⃗ ) defining the quantization axis(see Methods). The
results presented in this manuscript are in the regime with IX ≲ 8 × 10−5, leading to PAQM < 4 × 10−3 for state reset, and PAQM < 1 × 10−3 with a detection beam applied for 11 µs [3].

quantum reservoir engineering. The in-situ operations lead to scalable, simple, robust, and fast QIP protocols compared to other error mitigation techniques like shut-

tling and usage of ancilla for mid-circuit measurements.
Figure 1a describes the two mechanisms for AQM of the asset qubit (ion1) during a measurement or reset on the process qubit(ion2): finite intensity crosstalk (due to imperfect optical addressing) and inter-ion scattering (absorption of photons emitted by ion2). Here, we ignore any additional measurement arising due to the entanglement of qubits in the system. While both the state reset and detection (Fig. 1b) generally constitute quantum measurements, in practice, detection involves at least an or-
der of magnitude more scattered photons due to the inefficiency of the measurement apparatus. Due to the increased number of scattered photons as well as finite intensity crosstalk from the laser beam, PAQM will increase with detection time. However, advances in state measurement techniques and protocols have enabled highfidelity detection in ∼ 10 µs [3]. The fast detection times allow in-situ, site-selective measurement of the process qubit with PAQM ∼ 10−3 for the asset qubit as long as the inte-
nsity crosstalk can be contained below 10−4 level (Fig. 1c). Inter-ion scattering sets a fundamental limit to PAQM of PA∗QM ∼ 1/a2 in the regime where inter-ion spacing a is much larger than the wavelength of radiation. In addition, the exact value of PA∗QM will depend on the magnetic field (quantization axis) configuration (See methods). We find, by atomic physics calculations as well as experiments, that the PAQM with our measured intensity crosstalk of IX ≲ 8 × 10−5 at the asset qubit approache-
s but is not yet limited by PA∗QM.
We use the ground state hyperfine levels of 171Yb+ ions trapped and Doppler-cooled in a ‘four-rod’ Paul trap as |↓⟩ and |↑⟩ of the effective spin-1/2 object or a qubit. These ions are individually probed through an addressing system with an effective numerical aperture of 0.16(1). The optical aberrations in the system are characterized (see Methods) using a single ion as a quantum sensor. Using a measured aberration phase profile, a Fourier hologram employed on a digital micromirror device (DMD) i-
s programmed to create a diffraction-limited Gaussian beam of waist w=1.50(5) µm in the ion plane. This beam is positioned at a programmable distance d from the ion while minimizing intensity leakage onto neighboring ions.
In the regime where the probability of the asset qubit accidentally scattering a photon, PAQM ≪ 1, we find numerically that the infidelity of the asset qubit is a good estimate of PAQM (Fig. 1c). The fidelity [2] of preserving the state of asset qubit is estimated from fringe contrast in a Ramsey interferometry experiment (Fig. 2a.) We measure the fringe decay (decoherence) time T2∗ of the asset qubit(ion1) and estimate (see Supplementary information) the fidelity of preserving its state after mea-
surement or reset on the process qubit (ion2) from,

2

τ (ion2) 1

F1|2 = 3 exp

− T2∗(ion1)

+. 3

(1)

Here, τ (ion2) is the time for which the resonant probe beam illuminates the process qubit. From the measured

T2∗, we estimate the intensity of probe light sampled by the asset qubit. The long quantum memory of the asset qubit (T2∗ without any probe light is at least two orders of magnitude longer than the results in Fig. 2b) enables
it to act as a sensitive, high-dynamic range sensor for
intensity crosstalk.

a)
Initialize to

Detuned

Detuned

μ-wave π/2 Probe (T) μ-wave π/2

Global Detection

3
probe
⬆
d

To distinguish the decoherence caused by inter-ion scat-
tering and the imperfect optical addressing, we perform
the above Ramsey measurements for two different cases.
case-A uses two ions, separated by a distance d, with
a probe beam parked on ion2. case-B uses only one
ion with a probe beam parked at the same distance d from the ion (Fig. 2b). For d = 6w (9 µm), we find that the Ramsey fringe decay time (T2∗) for both experiments is indistinguishable (within the experimental
fluctuations)(Fig. 2b). This verifies that the inter-ion
scattering is not the major source of decoherence in our
experiment. Thus we could use a single-ion (case-B) to
quantify the fidelity F1|2 in our addressing scheme, which greatly simplifies the measurement scheme.
The process duration τ and the decoherence time T2∗ in Eq.1 may have different dependence or optima over
optical parameters (such as polarizations, spectral pu-
rity, etc.). In the following experiments, we maximize
F1|2 by maximizing the fraction of light contributing to the process (state reset or measurement) while minimiz-
ing (where possible) the fraction of light that accidentally
measures the asset qubit.
Site-selective state reset - The process of state re-
set through optical pumping is done by using a probe that drives the transition D1(11) from S1/2 |F = 1⟩ to P1/2 |F ′ = 1⟩ [1] (Fig. 3a). We choose the process time τop(ion2) = 7T1, where T1 indicates the time at which the normalized ion fluorescence of ion2 drops to 1/e com-
pared to its initial value. This will ideally reset the quan-
tum state of the process qubit to |↓⟩ with the fidelity of 1 − e−7 = 0.999. Note that spectral components of light apart from D1(11) may decohere the asset qubit while not contributing to the reset on the process qubit (ion2).
For example, optical pumping light derived by frequency
modulation (electro-optic modulation) employed in typical ion trap experiments [1] contains residual D1(10) component (the spectral component used for detection). This D1(10) component will increase PAQM and hence reduce F1|2 , as shown by numerical simulation data in Fig. 3b where F1|2 is maximized for a probe with relatively higher intensity in D1(11) component (I(11)).
Probe light of different polarizations has unequal con-
tributions to the asset qubit’s fidelity F1|2 for the case of state reset. For D1(11) transition, since the |↑⟩ = S1/2 |F = 1, mF = 0⟩ to P1/2 |F ′ = 1, m′F = 0⟩ is dipole forbidden, the component with π polarization with inten-
sity Iπ doesn’t contribute to the AQM of the asset qubit. So, for the case of probe with I(11)/I = 1, F1|2 increases

Normalized Ramsey fringe contrast

b)
1.0 0.8 0.6 0.4 0.2 0.0
0

Case-A:

Data

Fit

Case-B:

Data

Fit

1000 2000 3000 4000 5000 6000 Wait time T(μs)

Case-A
d Case-B
1

⬆

⬆

⬆

Probe 2

FIG. 2. AQM characterization scheme. a) (Top) Ramsey
interferometric protocol (see Supplementary information) to measure qubit coherence time T2∗ when the incoherent probe beam is applied for time T at a distance d. (Bottom) Ramsey
fringes in normalized fluorescence originating from the detuning between the microwave source and the qubit frequency. T2∗ is extracted from the decay in Ramsey fringe contrast. Here,
the background-subtracted fluorescence counts are measured
during the global detection step and are normalized with re-
spect to the counts from |↑⟩. The data shown here are for a
single ion (N = 1) illuminated with the state-detection probe light (I = 1.25(16)Isat, waist w=1.50(5) µm) at a distance of d = 6.0(3)w = 9.0(4) µm and Ramsey detuning of 10 kHz. Error bars indicate standard error from 200 experimental rep-
etitions. Intensity crosstalk IX is estimated from numerical simulations of the master equation from the measured T2∗. We find, using numerical simulations solving the master equation
of the system (dashed line, see supplementary information), that the intensity cross-talk, IX = 3.4(6) × 10−5 for this data. b) Comparison of Ramsey fringe decay profiles between case-
A: an ion located at the probe beam focus (N = 2), and
case-B: no ion at probe beam focus (N = 1). Data points rep-
resent Ramsey fringe contrast measured over two fringes, and the fits are exponential decay with T2∗ as a fitting parameter. The Ramsey fringe contrast is normalized with the contrast
measured at T ≈ 0. Error bars denote standard deviation
in estimating Ramsey fringe contrast, using 20 bootstrapping
repetitions from 200 measurements. The shaded region indi-
cates fluctuations of experimental settings over periodic cali-
bration of the probe beam location with respect to ion2 (see supplementary information) for case-A. T2∗ values measured for case-A and case-B lie within the error bounds, indicating
that the decoherence is limited by the intensity crosstalk and
not by inter-ion scattering.

with Iπ/I (Fig. 3b). This increase in F1|2 comes at the cost of increasing the state reset τop of ion2. For the case of I(11)/I ̸= 1, the π polarizations of the D1(10) transition component of the probe still contribute to the AQM
of the asset qubit. Hence an increase in Iπ/I decreases

4

F1|2 Proportion of π light (Iπ/I) (1 − F1|2) × 10−4

a) P1/2 F'=1 F'=0
F=1 S1/2 F=0

12.642813 GHz

c) 1.0000 0.9998 0.9996 0.9994 0.9992 0.9990
-20w -16w -12w

P1/2 F'=1 F'=0
F=1 S1/2 F=0

b)

Results in this manuscript

0.9

0.9

6

0.7

0.7

10

14

0.5

0.5

18

0.3

0.3 (I(11)/I) =1

22

0.1

0.1

26

0.2 0.4 0.6 0.8 1.0 2.5 5.0 Relative intensity of D1(11) (I(11)/I) τ op(μs)

diffraction limited Gaussian (w = 1.5μm, NA = 0.16)
Data Probe attenuated to 7.2(2) × 10−5

-8w

-4w

0w

4w

8w

Beam position relative to ion1 (d)

12w

16w

20w

FIG. 3. Fidelity (F1|2) of preserving ion1 for state reset light at ion2 location. a) Excitation and decay mechanisms
for the D1(11) and D1(10) transitions in 171Yb+ ion initialized in state |↑⟩ [1], for various polarizations (thick arrows representing π and thin arrows representing σ±). The D1(11) transitions contribute to state reset via optical pumping, although any residual D1(10) light (e.g., from frequency modulation via an electro-optic modulator[1]) may degrade F1|2 . b) Calculated F1|2 for the state reset process as a function of the ratio of the intensity of D1(11) component I(11) to the total intensity-
 I (where I = I(11) + I(10) with I(10) indicating D1(10) component) and ratio of the intensity of π polarization Iπ to the total intensity I (where I = Iπ +Iσ+ +Iσ− with equal intensities in σ+ and σ− polarizations) Here, F1|2 is calculated using numerical simulations of the master equation (see supplementary information) under the conditions of I2 = 1.25Isat and IX = 5 × 10−5. The red star
marker indicates the parameters used to measure F1|2 in (c). Additionally, the plot on the right shows an estimation of state
reset times τop(ion2) as a function of Iπ/I for I(11)/I = 1 c) F1|2 vs d expressed in multiples of the beam waist w (case-B in Fig. 2b). Here, w = 1.50(5) µm is the Gaussian beam waist for the addressing beam. Error bars denote standard deviation in
estimating F1|2 , using 20 bootstrapping repetitions from 200 measurements (See supplementary information). For calibrating crosstalk IX , we measure F1|2 for a probe beam with relative intensity attenuated to 7.2(2) × 10−5 addressing ion1 (triangle
marker at d = 0). For comparison, F1|2 is calculated (solid gray line) for a diffraction-limited (NA = 0.16) Gaussian beam of beam waist w = 1.50 µm. F1|2 is >99.9% for d ≥ 4w (see discussion). For these measurements, I2 = 1.25(16)Isat, Iπ/I = 0.86,
I(11)/I = 1, τop = 9.73(7) µs.

F1|2 as the light with π polarization only contributes to AQMs of the asset qubit but not to the reset of the process qubit(Fig. 3b).
With the polarization of the state reset beam optimized, we characterize F1|2 (in case-B configuration) as a function of beam position relative to the ion (d) (Fig. 3c) and observe F2|1 > 99.90% for d ≥ 4w. To calibrate the intensity crosstalk for these measurements, we perform another experiment with d = 0 with attenuated intensity. F1|2 measured with attenuated light confirms that our intensity crosstalk is in the regime of ≲ 8 × 10−5 (Fig. 3c). This estimation of the intensity of crosstalk is a-
lso corroborated by our atomic physics simulations (see supplementary information).
Site-selective state measurement - State measurement of the ion qubits is achieved by detection of the state-dependent fluorescence [1]. The ions are excited by light resonant to the D1(10) cycling transition and the light they scatter is detected with finite efficiency by a

measurement apparatus. The duration of this measurement (detection time τd) is chosen such that the state of the ion can be inferred with high fidelity. Detection time is highly dependent on the efficiency of the measurement apparatus, and a detection time of as low as 11 µs with state-detection fidelities as high as 99.931(6)% has been recently demonstrated for 171Yb+ trapped ions [3]. Hence we report F1|2 when a detection beam was applied on ion2 location for a time of 11 µs (Fig. 4). Note that -
the detection beam parameters used in Ref. [3] are compatible with our detection beam.
σ+ and σ−-polarized D1(10) light don’t cause AQMs to the asset qubit in S1/2 |F = 1, mF = 0⟩ state, ignoring low probability off-resonant excitation (Fig. 3a). Hence, the asset qubit’s fidelity is maximized with the least proportion of π light (Fig. 4a). But the optimal polarization [29] for the highest scattering rate and hence the highest detection fidelity for ion2 is Iπ = I(σ+) = I(σ−).
We examine F1|2 as a function of beam position rel-

5

F1|2

F1|2
⬆

a) 0.999 0.998

simulations

Data

0.2

0.4

0.6

0.8

Proportion of π light (Iπ/I)

c) Probe

b) 1.000 0.999 0.998 0.997 0.996 0.995

d

b

-20w -16w -12w Center of FOV

-8w -4w

0w

4w

8w

Beam position relative to ion1 (d)

d)

0.998

diffraction limited Gaussian (w = 1.5μm, NA = 0.16) data Probe attenuated to 7.2(2) × 10−5
12w 16w 20w

ion1

ion2

Product

Fidelity

b = -230 µm
0.998 0.996 0.994

b = -90 µm

b = 0 µm

b = 90 µm

b = 230 µm

0.996
5.0 7.5 10.0 12.5 15.0 17.5 20.0 Detection time τ d(μs)
e) 60 40 20

Opt. τ d (μs)

F1|2

−10

0

10 −10

0

10 −10

0

10 −10

0

10 −20

0

20

Beam position (d/w) relative to the ion1

1

2

3

4

5

Net quantum efficiency (%)

FIG. 4. Fidelity (F1|2) of preserving ion1 for detection light at ion2 location. a) F1|2 vs polarization of the detection probe light, showing that it is maximized for probe light with no π−polarization. The dashed line represents the optimal
polarization [29] for the process qubit (ion2) state-detection. The dotted line represents the polarization used to measure F1|2 in parts b-c. Measured values of F1|2 at d = 4w, shown in parts a-c, are for detection probe light of intensity I = 1.25(16)Isat applied for τd = 11 µs. Error bars in parts a-c denote standard deviation in estimating F1|2 , using 20 bootstrapping repetitions from 200 measurements (See supplementary information). b)F1|2 vs the distance d (case-B in Fig. 2b). For comparing-
 the crosstalk IX , we measure F1|2 for a probe beam with relative intensity attenuated to 7.2(2) × 10−5 addressing ion1 (triangle marker at d = 0). For comparison, F1|2 is calculated(solid gray line) for a diffraction-limited (NA=0.16) Gaussian beam of beam waist w, F1|2 fidelity is >99.6% for d ≥ 4w. c) Measured F1|2 for various shifted locations of the ion from the center of the field of view (FOV). Here the center of FOV denotes the location at which the aberrations have been characterized and-
 compensated (see methods). F1|2 is preserved for a large FOV of 460 µm. d) Calculated process qubit (ion2) detection fidelity[3, 30] (See supplementary information) and asset qubit(ion1) preservation fidelity (F1|2 ) as the function of τd (detection time). Here, for estimating the process qubit (ion2) detection fidelity, we assume that the process qubit is illuminated with a detection
beam of I2 = Isat with optimal polarization and a measurement apparatus of net detection efficiency of 4%, compatible with the state-of-the-art experiments. We employ a photon count thresholding method to differentiate between |↑⟩ and |↓⟩ states.
Furthermore, we use an algorithm that completes the detection process upon measuring the first photon, reducing detection time by a factor of 2 [3, 31, 32]. For estimating F1|2 , we assume intensity crosstalk of IX = 5 × 10−5, I2 = Isat, and optimal polarization for the process qubit state-detection. The vertical line at τd ≈ 8.5 µs represents the optimal detection time that maximizes the product of these two fidelities. e) Optimal detection time (opt. τd) as a function of the net detection effici-
ency of the measurement apparatus.

ative to the ion (d) (Fig. 4b) using a detection beam in a case-B configuration. We find that the long coherence times (T2∗) result in fidelities F1|2 > 99.5% for d ≥ 4w and F1|2 > 99.9% for d ≥ 20w. Note that the polarization of the probe beam for these measurements is Iπ ≈ 0.6 and even higher fidelities could be acheived for the optimal detection polarization (Fig. 4a). This high fidelity is maintained in the measurements with ion shifted 100 µm and 200 µm away from the center of the field of vi-
ew (FOV) (Fig. 4c), demonstrating that in-situ measurements are possible in a long chain of ions. Note that, for all the aforementioned measurements, the aberration was compensated using the phase profile measured at b=0 (See Methods) Moreover, by compensating

the aberrations using a phase profile measured at a different point located away from the center of the field of view, it is possible to achieve even higher fidelities at that specific point.
The detection-fidelity of the process qubit for a given detection efficiency (from a limited NA and photon collection loss) increases with increasing the detection time (τd) (ignoring the off-resonant effects) whereas F1|2 decreases (Fig. 4d). The optimal detection time depends on the relative importance of these fidelities in a given quantum algorithm. For example, one metric to find optimal detection time could be to maximize the product of these fidelities. This optimal detection time is highly-
 dependent on the net efficiency of the detection

6

apparatus (Fig. 4e).
Discussion - In summary, we have demonstrated high fidelity in preserving an ion qubit while the neighboring qubit is reset or measured at a few microns distance. Our results are comparable to the state-of-the-art QIP experiments [3, 15, 33] that employ shuttling of qubits to be preserved away from reset or measurement laser beams by hundreds of microns distance.
Further, our protocol could be combined with other error-mitigation methods, such as shorter-distance shuttling or usage of a different isotope of the same ion species, paving ways to reduce crosstalk errors compatible with quantum error correction protocols. Shortdistance (tens of microns) shuttling would also improve the speed of the quantum algorithms and reduce errors from motional heating when compared to hundreds of microns shuttling used in current experiments. For a typical isotope shift o-
f a few hundred MHz and our demonstrated ≲ 8 × 10−5 intensity crosstalk, the PAQM for state reset and measurement can be reduced to the 10−6 level. Using a different isotope of the same ion species will also remove challenges, such as reduced motional coupling between ions of disparate masses [34–36] during mid-circuit sympathetic cooling and quantum gate operations.
Our crosstalk measurement scheme employs temporal separation of probe light illumination and detection of an ion qubit and hence overcomes sensitivity limitations due to unwanted background scattering of resonant light from optics leaking onto photon detectors in previous experiments [28]. This in turn allows measurement of crosstalk over a large dynamic range.
Ions are localized to < 100 nm at typical laser-cooling temperatures and trap frequencies, making it possible to characterize aberrations with the ion sensor for larger numerical aperture (NA) systems. With large NA, the beam waist w decreases, thus the ion separations can be decreased without increasing PAQM to achieve higher qubit-qubit interaction strengths [37].
Our demonstrated high fidelity over a field of view (FOV) of 450 µm corresponds to ∼ 50 ions in a linear chain for typical harmonic trapping parameters (radial trap frequency of approx. 2π × 5 MHz and axial trap frequency of approx. 2π × 30 kHz). The slight decay of fidelity away from the center of FOV can be compensated by recalibrating aberrations away from the center. However, even without extra calibrations, the fidelity F1|2 can be maintained over the entire chain, as inter-ion separation awa-
y from the center of an ion chain also increases in a harmonic trap (from 4w = 6 µm at the center becoming ≈ 10w = 15 µm near the edge for parameters above [38]).
For typical radiofrequency ion traps (e.g., surface traps [39], ‘blade’ electrode traps[40]), NA > 0.5 is accessible for photon collection simultaneously with NA ∼ 0.3 (in a perpendicular direction) for optical addressing, allowing for independent optimization for photon collection and addressing. While high quantum efficiency and negligible dark counts make ∼ 10 µs detection time possible

[3], less-expensive photomultiplier tubes (PMT) can also allow ∼ 20 µs detection time (Fig. 4e) [3, 30] under otherwise identical conditions for maintaining high asset qubit preservation fidelities of > 99.2%.
While the asset qubit coherence in our measurements is limited by intensity crosstalk, the PA∗QM from interion scattering for state detection may be suppressed even further with the proper choice of the local magnetic field. For 171Yb+ , it is possible to suppress (see methods) the intensity of π light scattered from the process qubit in the direction of the asset qubit by aligning the magnetic field along the ion chain [41], thereby maximizing F1|2 (Fig. 4a). In contrast, the optimal orientation -
of the magnetic field for state reset is perpendicular to the ion chain.
Comparing with the inter-ion scattering calculations in Ref. [20], we find that the insensitivity to σ± photons (for state-detection through D1(10) transition) for 171Yb+ gives about ∼ 2 times reduction in PAQM compared to some other species, such as 40Ca+ that is affected by all polarizations. Our scheme of obtaining low PAQM can be easily adapted to other ion species or different QIP platforms that benefit from high-quality individual optical addressing.
AUTHOR CONTRIBUTIONS
SM, C-YS, AV, LH, and JZ performed the experiments following an initial feasibility study by RH, C-YS, and SM. SM, NK, and DM performed theory calculations, numerical simulations, and analyses. SM, AV, and RI wrote the manuscript with inputs from all authors. All the authors contributed to the scientific discussions. RI supervised the whole project.
ACKNOWLEDGEMENTS
We thank Yu-Ting Chen and Crystal Senko for scientific discussions. We acknowledge financial support from the Canada First Research Excellence Fund (CFREF), the Natural Sciences and Engineering Research Council of Canada (NSERC) Discovery program (RGPIN2018-05250), the Government of Canada’s New Frontiers in Research Fund (NFRF), Ontario Early Researcher Award, University of Waterloo, and Innovation, Science and Economic Development Canada (ISED).

7

I. METHODS

PA∗QM due to inter-ion scattering - Consider two ions (ion1 and ion2) separated by a distance a in an ion chain. An ideal resonant laser beam illuminates ion2 without leaking any photons onto ion1. ion2 scatters photons at a rate Γsc(ion2), a portion of which are incident on ion1. The effective intensity of light on ion1 from these scattered photons is denoted by Iab(ion1). The relation between Γsc(ion2) and Iab(ion1) is given as

Iab(ion1)

=

fpolfangle

hνΓsc(ion2) 4πa2

Here, ν represents the frequency of the scattered light,
fpol denotes the fraction of light whose polarization affects ion1, and fangle represents the angular dependence of the scattered light.
When ion2 is illuminated with an ideal state-detection
beam, it emits light of all polarizations. However, only the π polarization causes PA∗QM in ion1. Therefore, we have fpol = 1/3. The angular dependence of light scattered in π polarization by ion2 in the direction of ion1 is given by fangle = cos2(θ) [41], where θ is the angle between the magnetic field and the ion chain. In our
setup, since the magnetic field is perpendicular to the
ion chain, fangle = 1. However, by choosing the magnetic field along the ion chain, fangle can be suppressed to zero. For a state-detection probe beam with an intensity of
I2 = Isat, we use the optimal scattering rate of ion2 [42] to estimate Γsc(ion2). Assuming an inter ion spacing of 6 µm, we estimate that Iab(ion1) ≈ 9.5 × 10−6Isat. This results in a PA∗QM = 2 × 10−4 for 11 µs state-detection.
For a state reset operation on ion2, fpol = 2/3 since light with both σ+and σ− polarizations affect ion1. Ad-
ditionally, for the case of a magnetic field perpendicular
to the ion chain, we have fangle = 1/2 [41]. We estimate that Iab(ion1) ≈ 1.3 × 10−6Isat for the state reset operation. This results in a PA∗QM = 1 × 10−5 for state reset.
Aberration correction - We characterize optical
aberrations in the entire beam path in terms of a Fourier
plane (FP) phase map. An amplitude hologram on a Dig-
ital Micromirror Device (DMD) in the FP allows us to
control the amplitude and phase of the diffracted light.
The relative optical phase between two FP ‘patches’
is measured from the interference of beams that are
diffracted from these patches. We use a single ion as a
quantum sensor to measure this interference signal. We
use an optical pumping beam on the ion, initialized in
state |↑⟩, and observe state-dependent fluorescence signal
from the ion as it gets pumped into state |↓⟩. By varying
the phase of one of the FP patches and observing ion fluo-
rescence for a fixed optical pumping time, we extract the
interference profile and hence the relative phase. This
approach is highly sensitive, as only a few photons are
needed for optical pumping, allowing us to map out the
phase diagram for the entire FP with very low optical power (∼ 200 µW of 369 nm light). By decoupling the

probing and measurement, we achieve a higher signalto-noise ratio compared with our previous approach [28], where an unwanted scattering of the probe beam from optics leaking onto the detector was a limiting factor. The aberrations are then compensated by generating the corrective hologram on the DMD using an iterative Fourier transform algorithm (IFTA) [28].
Intensity and polarization calibration - We collect the ion fluorescence time-series data from many optical pumping experiments, where we controllably vary the relative optical power and polarization of the optical pumping light between experiments. Trends in these time-series data are fitted by numerical simulation to extract the saturation parameter and polarization of the light illuminating the ion (See Supplementary information).

8

SUPPLEMENTARY INFORMATION
Appendix A DETAILED EXPERIMENTAL SETUP
Our apparatus (Fig. S1) consists of 171Yb+ ions trapped in a four-rod paul trap with radial secular frequencies (ωx,ωz) of around 2π× 1.1 MHz and axial trap frequencies (ωy) of 2π× 270 kHz. The ground state hyperfine levels S1/2 |F = 0, mF = 0⟩ and S1/2 |F = 1, mF = 0⟩ (separated by 12.642813 GHz) are assigned as the |↓⟩ and |↑⟩ of effective spin-1/2 particle, respectively. A magnetic field (B) perpendicular to the ion chain provides the quantization axis and a Zeeman splitting of ∆zm = 2π × 3.25 -
MHz between S1/2 |F = 1, mF = 0⟩ and S1/2 |F = 1, mF = 1⟩ levels. Global Doppler cooling, state-detection, and optical pumping all derived from a laser source (369nmlaser-1) along with repump beams (935 nm) are illuminated onto the ions in the XY plane. The fluorescence from the ions is collected through an in-house built objective onto a PMT(Hamamatsu: H10682-210) through a pellicle beam splitter(45:55) (Thorlabs: BP145B5). The state-dependent fluorescence transmitted after the trap is also monit-
ored using a CMOS camera C2 (FLIR: Blackfly S BFS-PGE-04S2M) as shown in Fig. S1. A microwave field drives the |↓⟩ to |↑⟩ transition. A probe beam (along z) is illuminated onto the ions through an addressing system of effective numerical aperture(NA) of 0.16(1). This probe beam is resonant to D1(10) or D1(11) transitions to perform site-selective state reset or measurement. We use another 369nm(369nm-laser-2) source for the probe beams whose frequency can be independently tuned (without affecting -
the global detection and cooling beams) to either D1(10) or D1(11) transitions. An acousticoptic modulator (AOM1) in a double pass configuration, placed after the 369nm-laser-2, is used as a switch with precise timing and power control for the probe light. The light is then coupled to a PM fiber which is then expanded using a single lens(L1) and is polarization-cleaned using a polarizer. The light is sampled onto a photodiode (PD) that is used to stabilize the intensity fluctuations using PID feed-
back to the AOM. The polarizationcleaned and power-stabilized light from the PM fiber illuminates a Digital Micromirror device (DMD) (Visitech Luxbeam 4600 DLP) placed in the Fourier plane. A motorized λ/2 waveplate(WP1) is placed after the DMD to control the final polarization of the light. The DMD is programmed with an aberration-corrected amplitude hologram generated from an iterative Fourier transform algorithm (IFTA)(Sec. H) to produce a Gaussian beam of waist w=1.50(5) µm in the ion plane (I-
P2). The negative first-order beam diffracted from the hologram on DMD is then relayed to the ion through the reflection of the pellicle. A flip mirror placed before the intermediate image plane IP1 is used to image the IP1 onto a camera C1 for initial characterization. Due to the limitations of

our trap parameters, such as maximum electrode voltage, we could trap two 171Yb+ ions with an inter-ion spacing
no smaller than 9 µm = 6w.
Despite designating the ground state hyperfine levels of 171Yb+ ions (S1/2 |F = 0, mF = 0⟩ and S1/2 |F = 1, mF = 0⟩) with |↓⟩ and |↑⟩ of an effective spin-1/2 particle, the measurement and reset processes
involve additional states. Consequently, the ions may
ultimately occupy the states S1/2 |F = 1, mF = −1⟩ and S1/2 |F = 1, mF = 1⟩ outside the Hilbert space of the qubit. To model the dynamics of the ion pertaining to
this work, we account for eight levels in our Hilbert space,
4 for S1/2 and 4 for P1/2 (Fig. S2). The process of state detection mixes the ion in state |2⟩ with states |1⟩ and |3⟩,
and with |0⟩ when off-resonant excitation to P1/2 |F = 1⟩ states are included. The process of state reset mixes the
ion in state |2⟩ with states |0⟩, |1⟩ and |3⟩. The mi-
crowave field used in the Ramsey measurements (Sec. B)
only couples the levels |2⟩ and |0⟩.

Appendix B RAMSEY INTERFEROMETRY

To estimate the Fidelity F1|2 (main text Eq. 1), we use a set of Ramsey measurements to characterize the
PAQM caused by the probe beam parked at a distance d from the ion-1. (Main text Fig. 2). Each set of mea-
surements is initialized by a sequence of Doppler cooling
for 2.5 ms, optically pump(global) to |↓⟩ (|0⟩) for 20 µs.
The probe light is illuminated for a time T between two
microwave π/2 pulses (detuned from a transition |↓⟩ to
|↑⟩ by ∆uw = 2π × 10 kHz) for a duration of about 6 µs each. A detection step follows where the ions are il-
luminated by a global detection beam for 1.5 ms, during
which the state-dependent fluorescence from the ions is
collected using a PMT. Each such experiment is repeated
200 times, and the PMT counts are averaged over. The
averaged PMT counts are then normalized using mea-
sured counts from preparing |↓⟩ and |↑⟩ states. The nor-
malized fluorescence(≈ P (|↑⟩)) oscillates at a frequency
of 10 kHz as the time T is varied. We denote the contrast
of these oscillations by Rc(T ). To extract the characteristic decay time(T2∗) of the Ramsey contrast Rc(T ) for a given configuration of d, these Ramsey measurements
are done with varying T (main text Fig. 2a). Using the preliminary coarse estimate of Ramsey contrast, T2∗ is roughly estimated, and the time interval between 10µs and 2T2∗ is divided into five intervals, with each interval containing 21 data points in a span of 200 µs.
After the Ramsey measurements for these five inter-
vals, the PMT counts are fit using the following function to extract the T2∗.

f (T )T2∗,α,β,ϕ,C = sin2(ωT + ϕ)(αe−T /T2∗ ) + β(1 − e−T /T2∗ ) + C

(S1)

As a baseline measurement, we characterize the Ramsey measurements with no probe beam during the wait time

9

AOM1

C2

369nm laser-2

Double pass AOM

PID

PM fiber

PD

z

L1

Ion plane IP2

x y

Laser beams (369, 935 nm) Vacuum chamber

Objective

DMD FP

Polarizer

λ/2

f

L3

Flip mirror +1

WP1 L2

-1 IP1

Microwave horn
Pellicle (PB)

x

f = 200 mm

z y

C1

PMT

FIG. S1. Experimental setup

P1/2 F'=1 F'=0

metric (F1|2 ) [2] defined as

F1|2(t) = tr ρ(0)1/2ρ(t)ρ(0)1/2

(S2)

F=1 S1/2 F=0

12.642813 GHz

FIG. S2. Encoding for S1/2 and P1/2 energy levels of 171Yb+ ion

(Fig. S3) and estimate that the T2∗ is much larger than 200ms.

Appendix C FIDELITY ESTIMATION
To quantify how well the quantum state of ion-1 is preserved after an operation on ion-2, we use the fidelity

where ρ(0) and ρ(t) denote density matrix operators of ion-1 (assuming unentangled with ion-2) before and after a state-reset or measurement operation (performed for time t) on ion-2, respectively. This metric yields a different value based on the initial state of ion-1, and using numerical simulations (Sec. E), we find that ρ(0) = |2⟩ ⟨2| represents the worst case scenario (Fig. S4).

By analytically solving the master equation of the system we find that the Ramsey fringe contrast Rc(T ) could be used to estimate the worst-case fidelity of ion-1 after an operation ion-2 for a time (T) using

2

1

F1|2(T ) = 3 Rc(T ) + 3

(S3)

To derive the above expression analytically, we assume that the intensity of probe light decohering the ion-1 is very weak, that it causes a low probability of accidental measurement PAQM << 1. In this limit, consider the density matrix of ion-1 in a reduced Hilbert space with

10

Initialize to

Detuned μ-wave π/2

Wait (T)

Detuned μ-wave π/2

Global Detection

FIG. S3. Ramsey measurements without probe beam

For ion-1 initialized in ρ(0) = |2⟩ ⟨2| state, the final state of the ion-1 after the AQM due to weak probe for a time t is calculated by analytically solving the Lindblad master equation

i ρ˙(t) = − [Hatom, ρ(t)]
ℏ

+

1 2

2Cnρ(t)Cn† − ρ(t)Cn† Cn − Cn† Cnρ(t)

n

(S4)

Here, Hatom in interaction picture is given by

Hatom = −(∆uw+∆zm) |1⟩⟨1|−∆uw |2⟩⟨2|−(∆uw−∆zm) |3⟩⟨3|

FIG. S4. Infidelity( 1-F1|2 ) as a function of Bloch angle θ.

Here the ion-1 is initialized in state ρ(0) = |ψ⟩ ⟨ψ| where |ψ⟩ =

cos(θ/2) |2⟩ + sin(θ/2) |0⟩. The F1|2 (Eq. S2) is measured

after a weak state-detection (D1(10)) light of intensity I =

5 × 10−5Isat

and

polarization

Iπ /I

=

1 3

is

applied

on

ion-1

for

11us. For comparison, the infidelity (1 − F1|2)is shown(dotted

line) from Ramsey interferometry(Sec. B) where a probe light

of similar parameters as above is illuminated on ion-1 during

the wait time.

only (|0⟩ , |1⟩ , |2⟩ , |3⟩) states. We model the√action of probe light using the collapse operators Cn = γn |i⟩ ⟨j| where i, j ∈ {0, 1, 2, 3} where γn is the rate of collapse. The collapse operators and their rates depend on the transition the probe is driving and its polarization. For example, in state detection, only the probe with π polarization causes the AQM of ion-1. In the limit PAQM << 1 with γ << 1 representing the rate of PAQM we use the the following collapse operators

Transition Polarization

D1(10)

π

D1(11)

σ+

D1(11)

σ−

Collapse operators

γ 3

|2⟩

⟨2|,

γ 3

|2⟩

⟨2|,

γ 3

|2⟩

⟨2|,

γ 3

|1⟩

⟨2|,

γ 3

|3⟩

⟨2|,

γ 3

|1⟩

⟨2|,

γ 3

|3⟩

⟨2|

γ 3

|0⟩

⟨2|

γ 3

|0⟩

⟨2|

Here ∆uw, ∆zm denote the detuning of the microwave field and Zeeman splitting, respectively. From the solution, we find the fidelity F1|2 to be

F1|2(t) =

ρ22(t)

=

e−

1 3

γ

t

≈

1

−

1 γt
3

(S5)

Similarly, after the Ramsey experiment (Sec. B), the normalized is given as

ρ22(t)

=

1 + 1 e−1/2γt−i∆uwt + 1 e−1/2γt+i∆uwt + 1 e−2/3γt

44

4

4

(S6)

The Ramsey fringe contrast is then given by Rc(T ) =

ρ22

(2m+1)π ∆uw

− ρ22

2mπ ∆uw

for a positive integer m and

assuming γ << ∆uw we get

Rc(T )

≈

e−

1 2

γt

≈

1

−

1 γt
2

(S7)

Combining Eq. S5 and S7 we get S3. Further, the Ram-
sey fringe decays exponentially with a characteristic time T2∗ which leads to

F1|2(T )

=

2 e−(T /T2∗) 3

+

1 3

(S8)

11

Appendix D CALIBRATIONS

4 Absolute intensity and polarization calibration

1 FP aberration phase profile calibration
We characterize optical aberrations in the entire beam path in terms of a Fourier plane (FP) phase map. The optical aberrations till IP1 (Φ(a0b) + Φ(a1b)) are characterized using the camera C1 [28] as a sensor to measure the relative optical phase between two FP ‘patches’(Fig. S5a). The optical aberrations from IP1 to IP2 (Φ(a0b)) are measured using a single ion as a sensor (see main text methods)(Fig. S5b). The phase profile Φ(a0b) + Φ(a1b) + Φ(a2b) is used to compensate for optical aberrations u-
sing an iterative Fourier transform algorithm (IFTA) [28] to create a diffraction-limited gaussian beam spot in IP2.
2 Fourier plane intensity profile calibration
The incident light on DMD from L1 is nonuniform and has a Gaussian intensity profile. Further, the pellicle beam splitter (PB) has an angular dependence on reflection. The effective intensity profile on the FP is measured using an ion in IP2 as a sensor. The ion is prepared in |2⟩ state, and the optical pumping light from DMD is used to pump to |0⟩ state for a fixed time. The value of the intensity of probe light reflected by a circular patch(30 pixels diameter) on DMD is inferred from the decreas-
e in ion fluorescence. This measurement is repeated for different phase-corrected (Sec. D 1) patches on the DMD to construct an effective intensity profile. The intensity profile is then smoothened and interpolated, and a square root of the intensity profile is used as the amplitude profile of the incident electric field. This amplitude profile is further used as an input to IFTA hologram generation algorithm [28].
3 Relative Intensity calibration
The intensity of the probe light illuminating the ion through DMD is controlled by adjusting the RF power of the AOM1(Fig. S1). The RF power vs. intensity of the light is calibrated using camera C1. To ensure accurate reporting, the linearity of C1’s exposure time is confirmed over four orders of magnitude from 100 µs to 5 s (Fig. S6). The linearity of the RF source power setting and the RF power output is calibrated using a spectrum analyzer. The pellicle placed after the IP1 has a polarizationde-
pendent transmission profile that is calibrated using camera C2 and compensated using the AOM. This calibration also gives a relative measurement connecting the attenuated and unattenuated probe beam intensity(main text Fig. 3b and Fig. 4b) through the camera’s exposure time and pixel intensity (at a fixed gain).

The intensity of the probe beam (calibrated using C1) on the ion is calibrated with respect to the saturation intensity (Isat) of the ion. A series of optical pumping experiments are done with the probe using varying calibrated power and input polarization(varied using the λ/2 waveplate WP). These experiments are then fit using numerical simulations to extract the absolute intensity and polarization of the light illuminating the ion.
5 Probe beam position and size calibration
The position of the probe beam and its beam waist is calibrated by using a single ion as a sensor for the intensity. The ion is initialized in state |2⟩, and the probe beam (state-reset) illuminates the ion for a time smaller than the optical pumping time, followed by a state measurement. The dependence of ion fluorescence as a function of beam position is used to extract the relative beam position and the beam waist (Fig. S7). Here the position of the probe beam is changed by programming the holo-
gram on the Digital micromirror device (DMD) to generate a shifted Gaussian beam. This procedure is regularly done before every set of experiments to fix the slow drift of the relative position of the beam to the ion. We measured that the probe beam drifts by about 0.20(15) µm over the period of 15 min (a single Ramsey measurement).
6 Length scale calibration
The imaging system’s effective focal length (≈ 24mm) translates the known length scale in the Fourier plane (FP) to the length scale in IP2. We find the relative beam positions of two ions in a trap using an experiment similar to (Sec. D 5). The inter-ion spacing could be calculated from the difference between the estimated relative beam positions of the two ions. This estimated inter-ion spacing is compared to an estimation of equilibrium positions (estimated from the measured trap frequencies) t-
o further calibrated the system’s effective focal length of the system. We could calibrate the length scale in IP2 using this method to within 5% accuracy.
7 Frequency calibration
The relative shift of the laser frequency is calibrated by tuning the laser to the optical pumping transition and maximizing its pumping efficiency onto the ion.

a)

b)

12
c)

x y

FIG. S5. FP phase and amplitude profile. a)The aberration phase profile was measured using camera C1. b) The aberration phase profile is measured using the ion at IP2. For a-b, the piston and tilt terms are removed from the measured phase profiles, and the profile is further smoothened and interpolated. c) The scaled amplitude profile measured at IP2. The measured amplitude profile is smoothened, interpolated, and fit to 2D Gaussian.

Camera counts (background corrected)

IP1 camera linearity test
Fit: y = 161.98x 108
107
106
105

102

103

104

105

106

exposure(μs)

FIG. S6. C1 camera linearity calibration

1.2

1.0

0.8

0.6

0.4

Master equation simulations

ion location:-0.32μm,

0.2

beam waist(w):1.55μm

−6

−4

−2

0

2

4

6

Probe beam offset(um)

FIG. S7. Probe beam position and size calibration

Appendix E SETUP FOR NUMERICAL SIMULATIONS OF LINDBLAD MASTER
EQUATION

To model the dynamics of the ion pertaining to this

work, the relevant levels are within the S1/2 and the P1/2 manifolds (Fig. S2) The Hamiltonian, describing the in-

teraction with radiation, accounts for couplings due to

optical pumping, state detection, and the microwave. For

the purpose of efficient numerical simulations, it is use-

ful to remove the time dependence through a rotating

transform

(U (t))

[43]

such

that

Hrot

=

UHU†

−

U

d dt

U

†

.

We find that when the optical pumping, detection, and

microwave couplings are monochromatic, the solution of

U exists, and we use this to remove the time dependence

from our total Hamiltonian. With the time dependence

of the Hamiltonian accounted for, the time evolution of

the density matrix can be determined by solving the

Lindblad master equation(Eq. S4) with appropriate col-

lapse operators due to the spontaneous emission. Using

such numerical simulations, the evolution of the density

matrix is calculated in a Ramsey interferometry(Sec. B).

T2∗ is extracted from the simulations, and the dependence as a function of input intensity on ion-1 is calculated.

This dependence is used to extract the intensity crosstalk

IX from measured T2∗ of Ramsey measurements.

1 Rabi fequencies
The rabi frequencies for a simple 2-level system are set according to the formula:

I 2Ω2

= Isat

Γ2 ,

where I is the intensity of the laser, Isat is the satura-

Scaled fluorescence

13

tion intensity, and Γ is the spontaneous emission rate of the transition. In our case, we are interested in finding the rabi frequency pertaining to a specific transition i.e

ΩF,mF ,F ′,mF ′

=

⟨F, mF |d · E|F ′, mF ′ ⟩ ℏ

Applying the Wigner-Eckart theorem, we get

⟨F, mF |dq|F ′, mF ′ ⟩ = ⟨F, mF |F ′, mF ′ , 1, q⟩ ⟨F ||dq||F ′⟩
Now, the reduced matrix element can be further broken down as

⟨F ||d||F ′⟩ = ⟨JIF ||d||J′IF ′⟩ = ⟨J ||d||J ′⟩ (−1)F ′+J+1+I

(2F ′ + 1)(2J + 1)

J J′ 1 F′ F I

The reduced matrix element between the J levels can simply be calculated from the decay rate of the excited state using Fermi’s golden rule as follows:

ΓJ gJ e

=

ω03 3πϵ0ℏc3

2Jg 2Je

+ +

1 1

|

⟨Jg

||d||Je⟩

|2

Since it is commonly used in 171Yb+ literature, we introduce the saturation intensity as defined for the 2S1/2 to 2P1/2 ignoring the internal structure:

πΓch Isat = 3λ3
Combining these equations along with |E| = I/2cϵ0 we get

Ω2
F,mF ,F ′,mF ′

=

I Isat

Γ2J gJ 2

e

|

⟨F,

mF

|F

′

,

mF

′

,1,q

⟩

|2

×

2

(2F ′ + 1)(2J + 1)

J J′ 1 F′ F I

× 2Je + 1 2Jg + 1

In the case of 171Yb+ , for all the allowed transitions between 2S1/2 and 2P1/2, the second line of the above expression evaluates to 1/3, leaving us with a particularly
simple expression for the rabi frequency

Ω2 = I Γ2 Isat 6

(S9)

Appendix F PROCESS QUBIT DETECTION EFFICIENCY
Consider a probe beam resonant to D1(10) transition illuminates the process qubit for a time t. The scattered

light from the process qubit is collected using a detector of efficiency εsys. The state of the qubit is inferred to be |↑⟩ if the detector registers a single count. We use the approach presented in Ref. [3, 30, 42] to estimate the detection fidelity. The error in detecting the |↑⟩ is given by the probability of detecting no photons when the qubit is initialized in |↑⟩ state [3].

Pt,|↑⟩(n

=

0)

=

Rd εsysRo +

Rd

e−Rbg t

1 − e−(εsysRo+Rd)t

+ e e −Rdt −((εsysRo+Rbg)t

(S10)

Here Ro denotes the scattering rate of state |↑⟩, Rb denotes the bright pumping rate, and Rd denotes the dark pumping rate [42]. We note a plausible typo in the above

expression in Ref. [3] with a prefactor εsys missing in the exponential of the second term. Similarly, the probabil-

ity of detecting no photons when the qubit is initialized

in state |↓⟩ [3]

Pt,|↓⟩(n

=

0)

=

Rb εsysRo −

Rb

e−Rbg t

e−Rbt − e−εsysRot

+ e−Rbte−Rbgt

(S11)

The average fidelity of state-detection of the process

qubit is given by

F = 1 − Pt,|↑⟩(n = 0) + Pt,|↓⟩(n = 0) 2

Appendix G ERROR ANALYSIS
We use the bootstrapping method to get the standard error of the fitted parameters of the population transfer or the decoherence time. We randomly resampled the dataset of the same DMD probing duration with replacement. The resampled dataset is used for extracting the fitted parameters. Repeating the resampling and fit process creates the empirical distribution of the fitting parameters. In this work, we repeatedly resample the dataset 20 times, and the standard deviation of the 20 fitting paramet-
ers of the resampled datasets is used as the error. With the error of the τ (ion2) and T2∗(ion1) time through bootstrapping, the error of estimating fidelity can be derived with error propagation.

Appendix H ALGORITHM FOR HOLOGRAM GENERATION

In this work, we used an iterative Fourier transform

algorithm [28] to calculate the required hologram to dis-

play on the DMD. However, we improved the power ef-

ficiency(see ‘power efficiency’ of supplementary informa-

tion in Ref.

[28]) by scaling up the target field with

4 π

during the IFTA binarization process.

14

This new improvement is based on the fact that for a square wave x(t) its fundamental mode sin(ωt) can have a coefficient greater than 1.

4 ∞ sin((2k − 1)ωt)

x(t) =

π

2k − 1

k=1

(S12)

4

1

1

= sin(ωt) + sin(3ωt) + sin(5ωt) + ...

π

3

5

(S13)

Even though DMD can have binarized control on the

grating amplitude (0 1), a higher modulation level can

be achieved. With the new improvement, the power of

the

signal

can

be

enhanced

by

(

4 π

)2

≈

1.6

times,

which

also effectively improves the signal-to-noise background

ratio.

[1] S. Olmschenk, K. C. Younge, D. L. Moehring, D. N. Matsukevich, P. Maunz, and C. Monroe, Manipulation and detection of a trapped Yb+ hyperfine qubit, Physical Review A 76, 052314 (2007).
[2] M. A. Nielsen and I. L. Chuang, Quantum Computation and Quantum Information (Cambridge University Press, 2012).
[3] S. Crain, C. Cahall, G. Vrijsen, E. E. Wollman, M. D. Shaw, V. B. Verma, S. W. Nam, and J. Kim, High-speed low-crosstalk detection of a 171Yb+ qubit using superconducting nanowire single photon detectors, Communications Physics 2, 97 (2019).
[4] T. D. Ladd, F. Jelezko, R. Laflamme, Y. Nakamura, C. Monroe, and J. L. O’Brien, Quantum computers, Nature 464, 45 (2010).
[5] D. P. DiVincenzo, The Physical Implementation of Quantum Computation, Fortschritte der Physik 48, 771 (2000).
[6] C. Noel, P. Niroula, D. Zhu, A. Risinger, L. Egan, D. Biswas, M. Cetina, A. V. Gorshkov, M. J. Gullans, D. A. Huse, and C. Monroe, Measurement-induced quantum phases realized in a trapped-ion quantum computer, Nature Physics 18, 760 (2022).
[7] S. Czischek, G. Torlai, S. Ray, R. Islam, and R. G. Melko, Simulating a measurement-induced phase transition for trapped-ion circuits, Physical Review A 104, 062405 (2021).
[8] Y. Li, X. Chen, and M. P. A. Fisher, Quantum Zeno effect and the many-body entanglement transition, Physical Review B 98, 205136 (2018).
[9] B. Skinner, J. Ruhman, and A. Nahum, MeasurementInduced Phase Transitions in the Dynamics of Entanglement, Physical Review X 9, 031009 (2019).
[10] A. Chan, R. M. Nandkishore, M. Pretko, and G. Smith, Unitary-projective entanglement dynamics, Physical Review B 99, 224307 (2019).
[11] S. Sang and T. H. Hsieh, Measurement-protected quantum phases, Physical Review Research 3, 023200 (2021).
[12] A. Lavasani, Y. Alavirad, and M. Barkeshli, Measurement-induced topological entanglement transitions in symmetric random quantum circuits, Nature Physics 17, 342 (2021).
[13] C. Ryan-Anderson, J. Bohnet, K. Lee, D. Gresh, A. Hankin, J. Gaebler, D. Francois, A. Chernoguzov, D. Lucchetti, N. Brown, T. Gatterman, S. Halit, K. Gilmore, J. Gerber, B. Neyenhuis, D. Hayes, and R. Stutz, Realization of Real-Time Fault-Tolerant Quantum Error Correction, Physical Review X 11, 041058 (2021).

[14] P. W. Shor, Scheme for reducing decoherence in quantum computer memory, Physical Review A 52, R2493 (1995).
[15] J. P. Gaebler, C. H. Baldwin, S. A. Moses, J. M. Dreiling, C. Figgatt, M. Foss-Feig, D. Hayes, and J. M. Pino, Suppression of midcircuit measurement crosstalk errors with micromotion, Physical Review A 104, 062440 (2021).
[16] J. M. Pino, J. M. Dreiling, C. Figgatt, J. P. Gaebler, S. A. Moses, M. S. Allman, C. H. Baldwin, M. Foss-Feig, D. Hayes, K. Mayer, C. Ryan-Anderson, and B. Neyenhuis, Demonstration of the trapped-ion quantum CCD computer architecture, Nature 592, 209 (2021).
[17] D. Zhu, G. D. Kahanamoku-Meyer, L. Lewis, C. Noel, O. Katz, B. Harraz, Q. Wang, A. Risinger, L. Feng, D. Biswas, L. Egan, A. Gheorghiu, Y. Nam, T. Vidick, U. Vazirani, N. Y. Yao, M. Cetina, and C. Monroe, Interactive Protocols for Classically-Verifiable Quantum Advantage, arxiv 2112 (2021).
[18] Y. Wan, D. Kienzler, S. D. Erickson, K. H. Mayer, T. R. Tan, J. J. Wu, H. M. Vasconcelos, S. Glancy, E. Knill, D. J. Wineland, A. C. Wilson, and D. Leibfried, Quantum gate teleportation between separated qubits in a trapped-ion processor, Science 364, 875 (2019).
[19] V. Negnevitsky, M. Marinelli, K. K. Mehta, H.-Y. Lo, C. Flu¨hmann, and J. P. Home, Repeated multi-qubit readout and feedback with a mixed-species trapped-ion register, Nature 563, 527 (2018).
[20] C. Bruzewicz, R. McConnell, J. Sedlacek, J. Stuart, W. Loh, J. Sage, and J. Chiaverini, High-Fidelity, SingleShot, Quantum-Logic-Assisted Readout in a MixedSpecies Ion Chain, (2017).
[21] J. P. Home, D. Hanneke, J. D. Jost, J. M. Amini, D. Leibfried, and D. J. Wineland, Complete Methods Set for Scalable Ion Trap Quantum Information Processing, Science 325, 1227 (2009).
[22] K. Singh, C. E. Bradley, S. Anand, V. Ramesh, R. White, and H. Bernien, Mid-circuit correction of correlated phase errors using an array of spectator qubits, Science 10.1126/science.ade5337 (2023).
[23] M. Riebe, H. Ha¨ffner, C. F. Roos, W. Ha¨nsel, J. Benhelm, G. P. T. Lancaster, T. W. Ko¨rber, C. Becher, F. SchmidtKaler, D. F. V. James, and R. Blatt, Deterministic quantum teleportation with atoms, Nature 429, 734 (2004).
[24] T. Manovitz, Y. Shapira, L. Gazit, N. Akerman, and R. Ozeri, Trapped-Ion Quantum Computer with Robust Entangling Gates and Quantum Coherent Feedback, PRX Quantum 3, 010347 (2022).
[25] J. Hilder, D. Pijn, O. Onishchenko, A. Stahl, M. Orth, B. Lekitsch, A. Rodriguez-Blanco, M. Mu¨ller,

15

F. Schmidt-Kaler, and U. Poschinger, Fault-Tolerant Parity Readout on a Shuttling-Based Trapped-Ion Quantum Computer, Physical Review X 12, 011032 (2022). [26] P. Schindler, D. Nigg, T. Monz, J. T. Barreiro, E. Martinez, S. X. Wang, S. Quint, M. F. Brandl, V. Nebendahl, C. F. Roos, M. Chwalla, M. Hennrich, and R. Blatt, A quantum information processor with trapped ions, New Journal of Physics 15, 123012 (2013). [27] J. W. Lis, A. Senoo, W. F. McGrew, F. Ro¨nchen, A. Jenkins, and A. M. Kaufman, Mid-
-circuit operations using the omg-architecture in neutral atom arrays, arXiv preprint arXiv:2305.19266 (2023). [28] C.-Y. Shih, S. Motlakunta, N. Kotibhaskar, M. Sajjan, R. Hablu¨tzel, and R. Islam, Reprogrammable and highprecision holographic optical addressing of trapped ions for scalable quantum control, npj Quantum Information 7, 57 (2021). [29] S. Ejtemaee, R. Thomas, and P. C. Haljan, Optimization of Yb+ fluorescence and hyperfine-qubit detection, Physical Review A 82, 063419 (2010). [30] Ma-
rk Acton, Detection and Control of Individual Trapped Ions and Neutral Atoms, Ph.D. thesis, The University of Michigan (2008). [31] D. Hume, T. Rosenband, and D. Wineland, High-Fidelity Adaptive Qubit Detection through Repetitive Quantum Nondemolition Measurements, Physical Review Letters 99, 120502 (2007). [32] C. Langer, High Fidelity Quantum Information Processing with Trapped Ions, Ph.D. thesis, University of Colorado (2006). [33] E. Chertkov, J. Bohnet, D. Francois, J. Gaebler, D. Gresh, A. H-
ankin, K. Lee, D. Hayes, B. Neyenhuis, R. Stutz, A. C. Potter, and M. Foss-Feig, Holographic dynamics simulations with a trapped-ion quantum computer, Nature Physics 18, 1074 (2022). [34] Y. H. Teoh, M. Sajjan, Z. Sun, F. Rajabi, and R. Islam, Manipulating phonons of a trapped-ion system using optical tweezers, Physical Review A 104, 022420 (2021). [35] I. Inlek, C. Crocker, M. Lichtman, K. Sosnova, and C. Monroe, Multispecies Trapped-Ion Node for Quantum Networking, Physical Review Letters 118, 2-
50502 (2017). [36] K. Sosnova, A. Carter, and C. Monroe, Character of motional modes for entanglement and sympathetic cooling of mixed-species trapped-ion chains, Physical Review A 103, 012610 (2021). [37] C. Monroe, W. Campbell, L.-M. Duan, Z.-X. Gong, A. Gorshkov, P. Hess, R. Islam, K. Kim, N. Linke, G. Pagano, P. Richerme, C. Senko, and N. Yao, Programmable quantum simulations of spin systems with trapped ions, Reviews of Modern Physics 93, 025001 (2021). [38] A. Steane, The ion trap quantum in-
formation processor, Applied Physics B: Lasers and Optics 64, 623 (1997). [39] P. Maunz, High Optical Access Trap 2.0., Tech. Rep. (Sandia National Laboratories (SNL), Albuquerque, NM, and Livermore, CA (United States), 2016). [40] R. He, J.-M. Cui, R.-R. Li, Z.-H. Qian, Y. Chen, M.-Z. Ai, Y.-F. Huang, C.-F. Li, and G.-C. Guo, An ion trap apparatus with high optical access in multiple directions, Review of Scientific Instruments 92, 073201 (2021). [41] D. Budker, D. F. Kimball, and D. P. DeMille, -
Atomic physics: an exploration through problems and solutions (Oxford University Press, USA, 2004).

[42] R. Noek, G. Vrijsen, D. Gaultney, E. Mount, T. Kim, P. Maunz, and J. Kim, High speed, high fidelity detection of an atomic hyperfine qubit, Optics Letters 38, 4735 (2013).
[43] T. H. Einwohner, J. Wong, and J. C. Garrison, Analytical solutions for laser excitation of multilevel systems in the rotating-wave approximation, Physical Review A 14, 1452 (1976).

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:43.192Z
- **Text Length:** 63842 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
