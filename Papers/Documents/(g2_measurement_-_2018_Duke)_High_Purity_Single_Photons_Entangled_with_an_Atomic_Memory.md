# PDF Document: (g2 measurement - 2018 Duke) High Purity Single Photons Entangled with an Atomic Memory.pdf

**File Path:** (g2 measurement - 2018 Duke) High Purity Single Photons Entangled with an Atomic Memory.pdf

**Processed Date:** 2026-02-10T18:16:07.464Z

**File Size:** 2062.33 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 829

**Title:** (g2 measurement - 2018 Duke) High Purity Single Photons Entangled with an Atomic Memory

**Collection:** Multiplexing > Photon Generation

---

## Extracted Text Content

High Purity Single Photons Entangled with an Atomic Memory
C. Crocker,∗ M. Lichtman, K. Sosnova, A. Carter, S. Scarano, and C. Monroe Joint Quantum Institute, Center for Quantum Information and Computer Science,
and Department of Physics, University of Maryland, College Park (Dated: December 6, 2018)
Trapped atomic ions are an ideal candidate for quantum network nodes, with long-lived identical qubit memories that can be locally entangled through their Coulomb interaction and remotely entangled through photonic channels. The integrity of this photonic interface is generally reliant on purity of single photons produced by the quantum memory. Here we demonstrate a singlephoton source for quantum networking based on a trapped 138Ba+ ion with a single photon purity of g2(0) = (8.1 ± 2.3) × 10−5 wi-
thout background subtraction. We further optimize the tradeoﬀ between the photonic generation rate and the memory-photon entanglement ﬁdelity for the case of polarization photonic qubits by tailoring the spatial mode of the collected light.

arXiv:1812.01749v1 [quant-ph] 4 Dec 2018 Double Excitation Error

Entanglement between ﬂying photonic qubits and local memory qubits is an essential component of quantum communication networks and distributed quantum computers [1–5]. Trapped atomic ions provide a natural way to generate this entanglement, with pure and replicable quantum memories that can be locally entangled through their mutual Coulomb interaction [6, 7] and also emit nearly identical photons for networking. When photons are emitted from appropriate atomic excited states, the memory qubit can -
become entangled with the photonic qubit [8, 9]. This entanglement is generally degraded if the atom is re-excited after a photon is emitted or background photons are present, thus the purity of the single-photon source is critical for high ﬁdelity atomphoton entanglement [10, 11]. Moreover, for non-zero collection solid angles, the atomic radiation pattern does not perfectly map onto experimental polarization modes, limiting free-space entanglement ﬁdelity in the case of polarization qubits [12].-
 Here, we demonstrate methods for reducing these errors by using diﬀerent colors of light for excitation and collection, and by applying a custom aperture to maximize collected light while keeping polarization mixing errors low.
The barium ion is an excellent candidate for trapped ion quantum network nodes [13, 14]. While most ions have their primary transitions in the UV wavelengths, barium has two lines in the visible range: a primary cooling transition at 493 nm (62S1/2 to 62P1/2) and an auxiliary transition at 650 nm (52D3/2 to 62P1/2). Compared to the UV transitions in most ions, photons in these visible wavelengths suﬀer less attenuation through optical ﬁbers, permit access to a wide range of supporting photonic tec-
hnologies, and can be converted to IR wavelengths for longer-distance networks [15]. In this work we store the memory qubit in the two Zeeman levels of the 138Ba+ 62S1/2 ground state: |mJ = −1/2 ≡ |↓ and |mJ = +1/2 ≡ |↑ . To generate ion-photon entanglement, 493 nm photons are collected from decays from the 62P1/2 |J = 1/2, mJ = +1/2 ≡ |e excited state (see Fig. 1(a)) based on excitation from the 52D3/2 |J = 3/2, mJ = +3/2 state.

(a)
P1/2

(b)

ȁeۧ

0.005

D3/2

493 nm
ȁσۧ

650 nm
ȁπۧ

0.004 0.003 0.002

0.001

S1/2
ȁ↓ۧ

ȁ↑ۧ

0.0000

5

10

15

20

Pulse Time (TP /ns)

NA = 0.6 Objective
Ba Ion

APD 1
Half-Wave Plate

Aperture

Polarizing Beamsplitter

(c)

APD 2

FIG. 1: (a) Energy level diagram for 138Ba+ atom. (b) Double excitation errors plotted as a function of pulse time Tp assuming a Rabi rate of Ω = π/Tp. Note that even for pulses of order τe ∼ 10 nm the double excitation error is low. (c) Sketch of the setup used to collect light and analyze the polarization of photonic qubits. Light is collected by a NA = 0.6 objective and then directed through a half-wave plate that can perform x-rotations on the polarization qubit. Next is a polarizing, beam-spl-
itting cube and a pair of APDs to detect the photon’s polarization.

We ﬁrst examine the eﬀects of double excitations on the ﬁdelity of ion-photon entanglement in this system. For probabilistic photon collection based on emission from an excited state |e , there are two mechanisms by which double excitations can introduce errors. In the ﬁrst mechanism, the ﬁrst photon emitted by the atom is

2

collected, but the second photon is not. Here, the second excitation degrades the entanglement between the ﬁrst photon and the state of the atom. In the second mechanism, the ﬁrst photon is not collected but the second photon is. This situation still produces entanglement between the ion and the collected photon, but the scrambling of the atomic state after the ﬁrst photon introduces errors into the ﬁdelity of the desired entangled state.
Our previous work has shown ion-photon entanglement with 138Ba+ by ﬁrst pumping into |↓ and exciting the atom to |e with continuous-wave (CW) light at 493 nm [16]. Because this scheme uses the same line for excitation and collection light, it is susceptible to both types of double-excitation errors. These can be mitigated with a fast pulse of excitation light of duration Tp τe where τe is the excited state lifetime [17]. Alternatively, the atom can be weakly excited with probability Pe 1 such that-
 the probability of double excitations scales as Pe2 [18]. However, weak excitation reduces the overall entanglement success rate and forces a fundamental tradeoﬀ between entanglement generation rate and ﬁdelity [19].
To avoid the diﬃculties caused by weak excitation and to eliminate the ﬁrst mechanism of double excitation errors, we initialize the Ba+ ion in the 52D3/2 manifold, excite with 650 nm light, and collect 493 nm ﬂuorescence [15, 20, 21]. Barium’s 52D3/2 level features an 80 s lifetime [22], much longer than conceivable quantum operations, and its 3:1 branching ratio from the 62P1/2 state provides fast initialization and excitation. Because the 650 nm excitation line is spectrally distant from the 49-
3 nm collected photons, once a photon is collected there can be no further excitation events, eliminating the ﬁrst mechanism for double excitations.
We now estimate the expected error from the second mechanism of double excitation errors. We evolve the optical Bloch equations for the excitation and emission in the regime where Tp ∼ τe, keeping track of whether the resulting 62S1/2 state population comes from decays from the desired 62P1/2 state (|e ). We ﬁnd that favorable branching ratios and Clebsch-Gordan coeﬃcients still lead to high-ﬁdelity entanglement, even though Tp τe, as seen in Fig. 1(b). This signiﬁcantly relaxes the need for ultra-
fast excitation pulses, since pulse durations Tp ∼ τe = 10 ns can be created with a CW source and standard acousto-optic (AO) or electro-optic (EO) intensity modulators. The experiments presented in this paper are performed with 10 ns pulses generated by an AO modulator.
Next, we wish to demonstrate the eﬃciency of our system as a single photon source to verify a low level of double excitation errors [23]. To show this, a 138Ba+ ion is initialized in the the 52D3/2(mJ = +3/2) stretch state by applying all polarizations of 493 nm light, and σ+ and π polarizations of 650 nm light. Next, a 10 ns pulse of σ− polarized light at 650 nm excites the atom to |e (see Fig. 1(a)). We collect the resulting

493 nm ﬂuorescence photons with an N A = 0.6 objective

and through a polarization-analyzing 50/50 beamsplitter

with avalanche photodiode (APD) detectors behind each

port as shown in Fig. 1(c). To avoid collecting light from

the initialization cycle the APDs are gated closed except

for a 200 ns window triggered by the 650 nm pulse.

The normalized second-order autocorrelation function

after integrating for 18 hours is plotted in Fig. 2(a).

The strong suppression of the τ = 0 peak demonstrates

the purity of the system as a single-photon source. In Fig. 2(b) we present g(2)(τ = 0) as a function of the integration window. We report a value of g(2)(0) = (8.1 ± 2.3) × 10−5 using a 30 ns integration window. This

window was chosen to provide a signiﬁcant fraction of the

collected photons as shown in the red curve of Fig. 2(b)

while keeping dark counts from contaminating the signal.

We measure 12(3) coincident events at zero delay (τ = 0)

out of a total single photon count rate of 298,290(772),

which is twice the size of adjacent peaks in Fig. 2(a).

This result represents the lowest value ever recorded

for a source of indistinguishable photons [20] and is con-

sistent with the lowest value reported in any system of g(2)(0) = (7.5 ± 1.6) × 10−5 [24]. Dark counts on our detectors limit g(2)(0) to ≥ 3 × 10−5, and we attribute the

extra counts to observed transient light leakage through

our AO modulators. This rate of multi-photon genera-

tion limits the contribution of the ﬁrst mechanism of double excitation errors to a negligible value of ≤ 4 × 10−5.

Moreover, as we show below, these single photons are en-

tangled with the atomic memory, making them useful for

networking applications.

Next we examine errors in ion-photon entanglement ﬁ-

delity that can result from polarization mixing. There

exist several diﬀerent protocols for generating entangle-

ment between an ion’s spin state and the polarization of

an emitted photon [25–29]. One common element is that

they rely on faithfully mapping polarizations from atomic

decays onto orthogonal polarization modes. When the

photons are collected in a single mode ﬁber, the polar-

ization modes can be made orthogonal when the ﬁber

mode is aligned along certain axes [30, 31]. But in free

space, the polarization qubit becomes scrambled over ﬁ-

nite solid angles of collection, leading to entanglement

errors.

Consider a single atom with a quantization axis from

an external magnetic ﬁeld pointing in the z-direction un-

dergoing spontaneous emission. The emitted photon can

carry angular momentum of ∆mz = +1, 0, or −1 quanta along z, and we will refer to these as σ+, π, and σ− events

respectively. The angular radiation patterns resulting

from these decays are shown in Fig. 3, π = i

3 8π

sin(θ)θˆ,

and σ± = ie±iφ

3 16π

(cos

θθˆ

±

iφˆ).

We are interested in the case of light collected along

the x-axis from a P1/2 → S1/2 transition such as the transition in 138Ba+ shown in Fig. 1(a). After a photon

3

(a)

autocorrelation (normalized, log scale)

100 10 1 10 2 10 3 10 4 10 5
100 75 50 25delay0 [ s]25 50 75 100

g2(0) autocorrelation (log scale)

(b) 10 4 10 5 0

20 integ4r0ation tim6e0 [ns] 80

1.0 0.8 0.6 0.4 0.2 0.0 100

fraction of light collected

FIG. 2: (a) Normalized second-order autocorrelation function. 26µs peak spacing corresponds to experimental repetition rate. Strong suppression of τ = 0 peak demonstrates purity of single photon source. (b) Calculated g(2)(0) value (blue) and fraction of light collected (red) plotted as functions of integration time. Dashed line represents the lowest reported g(2)(0) value [24].

iΨs re=mi√t1t2e(d√tPhσe

resulta√nt atom-photon |↓ σ + Pπ |↑ π ) where

state is given Pσ and Pπ are

by the

probabilities of the collected photon coming from a σ or π

decay. Here we are interested in mapping σ+ (or σ−) and

π onto orthogonal, linear polarizations Hˆ = φˆ and Vˆ = θˆ.

This will create the desired maximally entangled state

Ψd

=

√1 (|↓
2

H

+ |↑ V

).

There are two potential sources

of error. First, as implied in Fig. 3(a), for large collection

angles Pσ = Pπ. Second, as shown in Fig. 3(b), σ+(θ) = H(θ) only at θ = π/2. We calculate the resulting errors

by ﬁrst integrating the spatial distributions of σ and π

decays to ﬁnd Pσ and Pπ as a function of the half-angle of our collection optics α1. Next we numerically integrate

the H and V components of the σ decays to ﬁnd PσH

and PσV , the probabilities that a collected σ photon is

detected as H or V . This traces over the spatial proﬁles

of the photon and results in a mixed state ρr with a

diagonal term corresponding to |↓ V population with

magnitude PσV . We then deﬁne the error = 1 − F = 1 − Ψd| ρr |Ψd where F is the ﬁdelity of the ion-photon

(a)
(c) (b)
z
FIG. 3: (a) Spatial distribution of light from a σ-polarized (blue) and π-polarized (yellow) emission along the z quantization axis. Note that in the x-y plane at polar angle θ = π/2 there are equal amounts of σ and π emission. (b) Decomposition of the σ radiation pattern from (a) into horizontal (cyan) and vertical (light blue) linear polarization components. At θ = π/2 there is no vertical component. (c) Two types of apertures are analyzed in this experiment. Circular stop (top) used to restrict-
 collection angle while maintaining a circular aperture. Horizontal stop (bottom) used to restrict collection in the θ (vertical) direction while allowing full collection in the φ (horizontal) direction.
entanglement. This error is plotted as a function of solid angle collected in the blue curve of Fig. 4(a). This result conﬁrms that as larger solid angles are used to improve entanglement generation rates, the ﬁdelity of free-space ion-photon entanglement will suﬀer.
Both types of errors shown here increase for light emitted further oﬀ-axis (away from θ = π/2), but are independent of φ. This suggests that it may be possible to achieve a more favorable trade-oﬀ between rate and ﬁdelity by blocking light in the θ direction. To analyze this possibility, we consider light collected by a lens with collection half-angle α1 with a set of stops that limit collection in the vertical direction to the range θ ∈ [π/2 − α2, π/2 + α2] where α2 ≤ α1 (Fig. 3(c)). The error ca-
lculations are then repeated and the results are plotted in Fig. 4(a) as a function of total solid angle that passes through the apertures for a variety of values of α1. The results conﬁrm that the horizontal stops provide a favorable trade-oﬀ between light collection and ﬁdelity for free-space ion-photon entanglement.
To experimentally examine this polarization mixing, we perform ion-photon entanglement using a single trapped 138Ba+ atom. First, we use 650 nm excitation to generate an entangled ion-photon pair as described in previous sections. For this experiment, we also make use of the half-wave plate that can rotate the photon’s polarization before the polarization measurement. Addition-

Maximum Fidelity
Fidelity
P(| ) P(| )

1.00

0.98

0.96
0.94
0.92 0.00

Variable NA NA = 0.6 NA = 0.7 NA = 0.8
0.05 0.10 0.15 Solid Angle/4π

(a)

0.93

●

0.92

0.91

●

0.90

0.89
●
0.88 0.00 0.02 0.04 0.06 0.08 0.10 Solid Angle/4π

(b)

FIG. 4: (a) Theoretical scaling between solid angle of light collection and polarization-mixing errors on ion-photon ﬁdelity. The blue curve represents the scaling for a simple circular aperture. The yellow, green, and red curves give the scaling assuming a ﬁxed circular aperture of NA = 0.6, 0.7, or 0.8 respectively with added horizontal apertures that restrict collection in the θ direction (see bottom of Fig. 3(c)). (b) The blue and yellow curves are the theoretical scaling curves from (a) appli-
ed to ﬁdelity, including our other sources of error. The blue and yellow points show the data taken with the corresponding apertures applied. The error bars show 1σ uncertainties.

ally, ion spin state rotations and readout are performed using the methods described in [16].
To demonstrate entanglement, we ﬁrst directly show correlations between the state of the ion and the photon by analyzing these correlations as a function of photon rotation angle. Next, the coherences are measured by ﬁxing the wave plate angle to rotate the polarization by π/2 and performing a π/2 Raman rotation on the atom with a variable phase. These results are plotted in Fig. 5 and show an ion-photon entanglement ﬁdelity of F = 0.884(4) when light is collected over the entire circular 0.6 NA o-
f the lens. Intrinsic polarization mixing for this size of aperture accounts for a ﬁdelity loss of 0.046; we attribute the remaining errors to imperfect state initialization and readout, intensity and phase noise on the Raman beams used to analyze the coherences, and polarization mixing in the collection optics [17]. The analysis from previous sections indicates that errors from double excitations contribute an error of < 0.004.
To analyze the eﬀects of spatial ﬁltering on ion light, various optical stops were inserted immediately after the microscope objective (see Fig. 3(c)). These apertures were designed to block half of the solid angle either symmetrically (circular stops) or in only the θ direction (horizontal stops). After inserting the stops, the entanglement experiments were repeated; the circular stops gave a ﬁdelity of 0.912(5) and the horizontal stops improved this further to 0.930(4). These results are plotted-
 along with the theory curves in Fig. 4(b) and conﬁrm that, by taking into consideration the spatial proﬁle of the atomic ﬂuorescence, we can maximize ﬁdelity gained by sacriﬁcing

1.0

Correlations

0.8

0.6

0.4

0.2

60 4W0ave2P0late A0ngle2(d0eg) 40

(a) z-basis correlations

4

1.0

Coherences

0.8

0.6

0.4

0.2

0 Ion1R0o0tation2P0h0ase (de3g0)0

(b) x-basis correlations

FIG. 5: (a) Ion-photon correlation results as a function of wave plate rotation angle. The red (blue) curve shows the probability of ﬁnding the ion in the |↑ state when the photon is detected on APD1 (APD2). No stops were used for these experiments. (b) Coherences in the y-basis are taken by setting the half-wave plate to perform a π/2 rotation on the photon and then applying a π/2 pulse on the ion with a varying phase.

rate. For future quantum networks, the pure entangled pho-
tons demonstrated in this letter can be combined with techniques for performing local operations described in previous works [16] to construct a modular node consisting of a superior Yb memory qubit and visible photon ﬂying qubits. This Yb memory is unaﬀected by the photon generation process, allowing for local operations or storage while the Ba-photon link is created. Multiple nodes can be connected together using a photonic Bell state analyzer [11] to create a distributed network for quantum inf-
ormation processing [9].
We acknowledge the useful discussions with D. Nadlinger and D. Lucas. This work was supported by the ARO with funds from the IARPA LogiQ program and the MURI on Modular Quantum Systems, the AFOSR project on Quantum Networks, the ARL Center for Distributed Quantum Information, and the National Science Foundation Physics Frontier Center at JQI.

∗ ccrocker@umd.edu [1] J. I. Cirac, P. Zoller, H. J. Kimble, and H. Mabuchi,
Phys. Rev. Lett. 78, 3221 (1997). [2] K. R. Brown, J. Kim, and C. Monroe, NPJ Quantum
Information 2, 16034 (2016), review Article. [3] H. J. Kimble, Nature 453, 1023 (2008). [4] N. Sangouard, R. Dubessy, and C. Simon, Phys. Rev. A
79, 042340 (2009). [5] S. Ritter, C. No¨lleke, C. Hahn, A. Reiserer, A. Neuzner,
M. Uphoﬀ, M. Mu¨cke, E. Figueroa, J. Bochmann, and G. Rempe, Nature 484, 195 (2012). [6] J. I. Cirac and P. Zoller, Phys. Rev. Lett. 74, 4091 (1995). [7] K. Mølmer and A. Sørensen, Phys. Rev. Lett. 82, 1835 (1999). [8] L.-M. Duan, B. B. Blinov, D. L. Moehring, and C. Mon-

5

roe, Quantum Info. Comput. 4, 165 (2004). [9] C. Monroe, R. Raussendorf, A. Ruthven, K. R. Brown,
P. Maunz, L.-M. Duan, and J. Kim, Phys. Rev. A 89, 022317 (2014). [10] M. J. Madsen, D. L. Moehring, P. Maunz, R. N. Kohn, L.-M. Duan, and C. Monroe, Phys. Rev. Lett. 97, 040505 (2006). [11] P. Maunz, D. L. Moehring, S. Olmschenk, K. C. Younge, D. N. Matsukevich, and C. Monroe, Nature Physics 3, 538 (2007). [12] B. B. Blinov, D. L. Moehring, L.-M. Duan, and C. Monroe, Nature 428, 153 (2004). [13] G. Araneda, D. B. Higginbottom, L. Slodiˇcka, Y. Colombe, and R. Blatt, Phys. Rev. Lett. 120, 193603 (-
2018). [14] R. D. Graham, S.-P. Chen, T. Sakrejda, J. Wright, Z. Zhou, and B. B. Blinov, AIP Advances 4, 057124 (2014). [15] J. D. Siverns, X. Li, and Q. Quraishi, Appl. Opt. 56, B222 (2017). [16] I. V. Inlek, C. Crocker, M. Lichtman, K. Sosnova, and C. Monroe, Phys. Rev. Lett. 118, 250502 (2017). [17] D. Hucul, I. V. Inlek, G. Vittorini, C. Crocker, S. Debnath, S. M. Clark, and C. Monroe, Nature Physics 11, 37 (2014). [18] L. Slodiˇcka, G. H´etet, N. Ro¨ck, P. Schindler, M. Hennrich, and R. Blatt-
, Phys. Rev. Lett. 110, 083603 (2013). [19] D. L. Moehring, P. Maunz, S. Olmschenk, K. C. Younge, D. N. Matsukevich, L.-M. Duan, and C. Monroe, Nature 449, 68 (2007). [20] D. B. Higginbottom, L. Slodika, G. Araneda, L. Lach-

man, R. Filip, M. Hennrich, and R. Blatt, New Journal of Physics 18, 093038 (2016). [21] M. Bock, P. Eich, S. Kucera, M. Kreis, A. Lenhard, C. Becher, and J. Eschner, Nature Communications 9, 1998 (2018). [22] N. Yu, W. Nagourney, and H. Dehmelt, Phys. Rev. Lett. 78, 4898 (1997). [23] K. Sosnova, C. Crocker, M. Lichtman, A. Carter, S. Scarano, and C. Monroe, in Frontiers in Optics / Laser Science (Optical Society of America, 2018) p. FW7A.5. [24] L. Schweickert, K. D. Jns, K. D. Zeuner, S. F. Covr-
e da Silva, H. Huang, T. Lettner, M. Reindl, J. Zichi, R. Trotta, A. Rastelli, and V. Zwiller, Appl. Phys. Lett. 112, 093106 (2018). [25] L.-M. Duan and H. J. Kimble, Phys. Rev. Lett. 90, 253601 (2003). [26] C. Simon and W. T. M. Irvine, Phys. Rev. Lett. 91, 110405 (2003). [27] D. L. Moehring, M. J. Madsen, K. C. Younge, J. R. N. Kohn, P. Maunz, L.-M. Duan, C. Monroe, and B. B. Blinov, J. Opt. Soc. Am. B 24, 300 (2007). [28] L. Luo, D. Hayes, T. Manning, D. Matsukevich, P. Maunz, S. Olmschenk, J. -
Sterk, and C. Monroe, Fortschritte der Physik 57, 1133 (2009). [29] T. E. Northup and R. Blatt, Nature Photonics 8, 356 (2014), review Article. [30] T. Kim, P. Maunz, and J. Kim, Phys. Rev. A 84, 063423 (2011). [31] D. Nadlinger and D. Lucas, (private communication).

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:07.464Z
- **Text Length:** 21899 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
