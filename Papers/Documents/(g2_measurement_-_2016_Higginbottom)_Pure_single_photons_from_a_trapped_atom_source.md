# PDF Document: (g2 measurement - 2016 Higginbottom) Pure single photons from a trapped atom source.pdf

**File Path:** (g2 measurement - 2016 Higginbottom) Pure single photons from a trapped atom source.pdf

**Processed Date:** 2026-02-10T18:17:11.700Z

**File Size:** 5047.89 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 828

**Title:** (g2 measurement - 2016 Higginbottom) Pure single photons from a trapped atom source

**Collection:** Multiplexing > Photon Generation

---

## Extracted Text Content

PAPER • OPEN ACCESS
Pure single photons from a trapped atom source
To cite this article: D B Higginbottom et al 2016 New J. Phys. 18 093038
View the article online for updates and enhancements.

You may also like
- Beam steering via peak power decay in nonlinear waveguide arrays Sotiris Droulias, Yoav Lahini, Yannis Kominis et al.
- Unconditionally secure digital signatures implemented in an eight-user quantum network Yoann Pelet, Ittoop Vergheese Puthoor, Natarajan Venkatachalam et al.
- Coherent spin–rotational dynamics of oxygen superrotors Alexander A Milner, Aleksey Korobenko and Valery Milner

This content was downloaded from IP address 136.152.143.35 on 02/08/2023 at 00:07

New J. Phys. 18 (2016) 093038

doi:10.1088/1367-2630/18/9/093038

PAPER

Pure single photons from a trapped atom source

OPEN ACCESS

RECEIVED
11 May 2016
REVISED
23 August 2016
ACCEPTED FOR PUBLICATION
26 August 2016
PUBLISHED
20 September 2016

D B Higginbottom1,2, L Slodička3, G Araneda2, L Lachman3, R Filip3, M Hennrich2 and R Blatt2,4
1 Australian National University, Canberra ACT 0200, Australia 2 Institut für Experimentalphysik, Universität Innsbruck, Technikerstr. 25, A-6020 Innsbruck, Austria 3 Department of Optics Palacký University, 17. Listopadu 12, 77146 Olomouc, Czech Republic 4 Institut für Quantenoptik und Quanteninformation, Österreichische Akademie der Wissenschaften, Technikerstraße 21a, A-6020
Innsbruck, Austria
E-mail: daniel.higginbottom@anu.edu.au
Keywords: single-photon source, quantum non-Gaussian, trapped ion

Supplementary material for this article is available online
Original content from this

work may be used under

the terms of the Creative

Commons Attribution 3.0 licence.

Abstract

Any further distribution of Single atoms or atom-like emitters are the purest source of single photons, they are intrinsically

this work must maintain attribution to the

incapable of multi-photon emission. To demonstrate this degree of photon number-state purity we

author(s) and the title of have realized a single-photon source using a single ion trapped at the common focus of high numerical

the work, journal citation

and DOI.

aperture lenses. Our trapped-ion source produces single-photon pulses with

g 2 (0) = (1.9  0.2) ´ 10-3 without any background subtraction. After subtracting detector dark

counts the residual g 2 (0) is less than 3×10−4 (95% conﬁdence interval). The multi-photon

component of the source light ﬁeld is low enough that we measure violation of a quantum non-

Gaussian state witness, by this characterization the source output is indistinguishable from ideal

attenuated single photons. In combination with efforts to enhance collection efﬁciency from single

emitters, our results suggest that single trapped ions are not only ideal stationary qubits for quantum

information processing, but promising sources of light for scalable optical quantum networks.

Introduction
Light ﬁelds of a deﬁnite, single excitation are an elementary tool for quantum information and a key feature in schemes for encoding, manipulating and communicating quantum information. A number of protocols for unconditionally secure communication harness the indivisibility of single photon states to distribute an unread cryptographic key (QKD) [1, 2]. Long-distance QKD requires remote entanglement distributed over optical repeater networks, and these in turn require further quantum optical resou-
rces. To scale effectively with distance single-photon repeater nodes must be capable of producing single photons with a critically low multi-photon component [3, 4]. The search for low noise single-photon sources is further motivated by their proposed application in systems for performing quantum simulations [5] and computing quantum algorithms without an efﬁcient classical equivalent [6, 7].
An ideal single photon source emits a single photon (and never more than one photon) on demand with 100% probability, at an arbitrarily high rate, and indistinguishable both from previous emissions and from parallel sources [8]. A common source of photons for quantum information experiments [9] is spontaneous parametric down conversion (SPDC) which probabilistically produces correlated pairs of photons across two modes, one of which can be used to herald a single photon in the other. Unless efﬁcie-
nt photon number resolving detectors are available to discriminate single-pair from multi-pair events at the herald, SPDC sources produce ﬁelds with an intrinsic multi-photon component that scales with the pair generation rate [10] which is detrimental for applications in quantum networks [11]. Correlated photon pairs can also be produced using four-wave mixing (FWM) in waveguides or ﬁbers, although Raman scattering produces problematic background noise.
Single emitters, with no inherent capacity to produce multiple photons simultaneously, are more natural candidates for producing pure single-photon ﬁelds. Of these, atoms are appealing because the availability of

© 2016 IOP Publishing Ltd and Deutsche Physikalische Gesellschaft

New J. Phys. 18 (2016) 093038

D B Higginbottom et al

identical systems guarantees the possibility of multiplexed indistinguishable photons [12–14]. Atom–photon networks have already exploited the indistinguishability of atomic photon sources with great success [15] for the generation of entanglement [16, 17] and quantum teleportation [18]. The outstanding challenge for single-atom sources is to efﬁciently capture photons in a convenient spatial mode, although rapid progress is being made with high-ﬁnesse cavities and large numerical aperture optics -
[19–23].
Neutral atoms with Λ-type level schemes have been optically trapped inside high-ﬁnesse cavities for the production of photons by fast excitation [24] and vacuum stimulated Raman adiabatic passage (STIRAP) [25– 29]. The single photon production probability in such a system is limited by the cavity mode density and optical
cavity losses. Shallow optical traps further compromise neutral atom systems; the trap must be reloaded during
operation and the possibility of capturing more than one atom contributes a multi-photon probability. In contrast, ion sources in radio frequency (RF) traps can be held for longer and conﬁned more tightly. A charged
particle source poses some challenges for strong cavity coupling, but both STIRAP and far off resonant Raman schemes have been implemented in ion-cavity systems [30, 31].
Artiﬁcial atoms such as semiconductor quantum dots (QDs) [32, 33] can be integrated with optical microcavities [34–37] to improve collection efﬁciency. While QDs are in principle single emitters, multi-photon noise in these systems is typically present due to interactions with the bulk material [38] and needs to be suppressed [39]. Scalable quantum dot networks require either the capacity to tune multiple dots for mutually indistinguishable photons [40], or a single dot producing long streams of i-
ndistinguishable photons [41] that can be demultiplexed across many spatial modes. Nitrogen vacancy (NV) centers in diamond nanocrystals are an
alternative with similar noise challenges. To compare the performance of single-photon sources it is necessary to have a measure of quantum
behavior that captures the useful properties of the single photon ﬁeld. A ubiquitous number-state measurement of the single photon ﬁeld is the degree of anticorrelation a = Pc Ps2 measured in a Hanbury Brown–Twiss (HBT) experiment, where Ps and Pc are the probability of single detection events and coincidence events respectively. For small mean photon ﬂux the light ﬁeld intensity autocorrelation g(2)(t) reduces to α when t = 0 [42, 43]. a < 1 is a signature of non-classical light states, however t-
his is just the ﬁrst in a hierarchy of more stringent quantum signatures that can be used to test the performance of a single photon source [44] and neglects the vacuum component of the optical state, which crucially characterizes the efﬁciency, η, of ondemand photon sources [3].
The negativity of the Wigner function is a stricter criterion for non-classicality and a necessary quantum computational resource [45]. Wigner function negativity is a distinguishing property of all pure quantum nonGaussian (QNG) states [46], including ideal single-photon states. However, while a strongly attenuated ﬁeld is necessarily non-negative in the Wigner representation, QNG remains an unambiguous and efﬁcient test of higher-order quantum behavior even for mixed or attenuated states [47]. I-
ndeed, QNG is a sufﬁcient condition for security in realistic models of discrete-variable QKD networks [48]. The same HBT conﬁguration as a typical g(2)(t) measurement [49] is sufﬁcient for estimation of a QNG witness that distinguishes light ﬁelds from any convex mixture of coherent and squeezed states [50]. Beating such a QNG threshold is therefore a necessary benchmark for applications in quantum information processing and a sufﬁcient benchmark for realistic QKD
networks. This has stimulated several recent characterizations of single photon sources using the QNG measure for efﬁcient but noisy sources [47, 51].
In this work we develop and characterize an experimental scheme for the generation of low-noise single
photons using a single trapped ion at the focus of high numerical aperture lenses under pulsed excitation. We apply both the conventional g(2)(0) and a new QNG metric to demonstrate that our source produces a singlephoton light ﬁeld with critically low noise sufﬁcient for scalable networks. The source performs with near
optimal QNG witness depth and is limited solely by the dark count rate of the detection technology available at
this wavelength.

Methods
A 138Ba+ ion is trapped and cooled in a linear Paul trap at the common focus of two high aperture lens objectives (HALOs) as per ﬁgure 1. The ion is Doppler cooled to within the Lamb–Dicke regime using a 493 nm cooling laser and a repump beam at 650 nm to close the 6S1/2–6P1/2–5D3/2 cycle, ﬁgure 1 (inset). Three pairs of Helmholtz coils create a magnetic ﬁeld that deﬁnes the atomic quantization axis of the radiating dipole at 90° to the common axis of the cooling and repump beams and lifts the de-
generacy of the three atomic levels in the simple Λ scheme in ﬁgure 1 such that the complete system dynamics is described by a set of eight-level Bloch equations. Each HALO has a numerical aperture of 0.4 and together they collect a combined 12% of the ion’s dipole ﬂuorescence on the 493 nm Doppler cooling transition.
2

New J. Phys. 18 (2016) 093038

D B Higginbottom et al

Figure 1. In this ‘reﬂected’ conﬁguration one side of the ion ﬂuorescence is collimated by a high aperture lens objective (HALO) and reﬂected from a distant mirror. The reﬂected light is focussed back past the ion into the same spatial mode as ﬂuorescence collected by a second HALO. The combined ﬁelds are polarization ﬁltered and split between two ﬁber-coupled APDs. (inset) Electronic level structure of 138Ba+.
The detectors are conﬁgured for a HBT measurement with one reﬂected ﬁeld; two low-noise ﬁber-coupled APDs with quantum efﬁciencies of 70% and 73% on either arm of a 50/50 beamsplitter sample a single spatial and polarization mode of the ion ﬂuorescence collected by one of the HALOs. Fluorescence collected by the second HALO is back-reﬂected over the ion by a distant mirror such that it too is collected by the same APDs. The ion ﬂuorescence in this conﬁguration self-interferes with 90% visibility w-
hen sideband cooled [52] and 70% visibility when Doppler cooled as it is here [53]. It is possible to lock the ion-mirror path length such that constructive interference enhances the detection efﬁciency [52]. However, the results presented here are recorded with the mirror position freely scanning such that self-interference effects average out. This will allow us to compare a QNG witness across multiple modes. Detection events at the APDs are time tagged using a photon counting module with a time-
 resolution of 4 ps.
Photons are produced by pulsing the cooling and repump beams according to the scheme shown in ﬁgure 2(a)., similar to the operation of [54, 55], at an attempt rate of 2 ´ 105s-1. The experimental sequence begins with 2 μs of Doppler cooling by both the cooling and repump beams. The ion is prepared in a statistical mixture of the D3 2 shelving states by 1 μs of driving with only the cooling beam. Both beams are off for 500 ns before the repump is switched back on to trigger the spontaneous emission-
 of an unpolarized 493 nm photon. Polarization ﬁltering reduces the detection probability by 2/3 in the chosen polarization mode. In ﬁgure 2(b) we show arrival time histograms of Raman photons as the repump power is steadily increased to the transition saturation point. The initial state mixture produces frequency mixed photons with a corresponding increase in distinguishability proportional to the magnetic ﬁeld. For applications requiring a high degree of indistinguishability it is necessary to p-
repare a well-deﬁned state. An identical Raman scheme using the 6S1/2– 6P3/2–5D5/2 cycle (for example) would produce polarized photons if the ion was ﬁrst prepared in a single extremal D5 2 Zeeman state [54].
The magnetic ﬁeld (B ) is calibrated by spectroscopy of the quadrupole transition 6S 1 2  5D 5 2 using a ﬁber-coupled 1.7 μm laser locked to a narrow linewidth cavity. The cooling and repump beam powers (Wg , Wr), the detuning (Dg) and common polarization (P ) are inferred from a spectroscopic dark state measurement prior to operation. Eight-level Bloch simulations predict the stationary ﬂuorescence rate as a function of Dr and the above parameters are ﬁtted to the corresponding measurement, see-
 ﬁgure 2(c). The same Bloch equations can then be used to calculate the dynamic single-photon scattering rate as a function of time after the repump is switched on under the driving scheme in ﬁgure 2(a), with repump beam parameters (Wr, Dr, P ) inferred from the continuous-driving dark state scan. This dynamic simulation takes into account the intensity proﬁle of the repump beam (rise time 90 ns) as measured after the switching/shaping AOM, and assumes that the preparation
3

New J. Phys. 18 (2016) 093038

D B Higginbottom et al

Figure 2. (a) The Raman driving scheme that is used to cool, prepare and trigger the trapped ion photon source. Single photon pulses are produced by alternating the cooling (blue) and repump (red) beams. Both beams are on for most of the cycle to Doppler cool the ion. During the preparation stage the repump beam is switched and the ion’s electron is shelved in a D3 2 dark state. A single blue photon is emitted using only the repump beam and detected by ﬁber coupled APDs. (b) Area normalized histog-
rams of single-photon arrival times using the above scheme. These intensity distributions show the mean arrival time decreasing as the repump beam power Wr is steadily increased to the transition saturation point. The eight-level Bloch model of our system predicts corresponding single photon shapes shown by dashed lines. For each trace the model parameters are calibrated using a dark resonance scan under the same driving conditions. A typical example of the dark resonance parameter ﬁt is shown in -
inset (c) with the measured ﬂuorescence rate (solid black line) and ﬁt from the model (dashed blue line) with parameters corresponding to the slowest (blue) single photon shape.
Figure 3. Intensity auto-correlation (g 2 (t)) of the pulsed resonance ﬂuorescence when the trapped-ion single photon source is operated at a rate of 7 ´ 104 s-1. The data is presented without background subtraction and shows g 2 (0) = (1.9  0.2) ´ 10-3. The pulsed source is triggered according to the scheme in (ﬁgure 2(b)) but at one third of the trigger rate so that a statistically signiﬁcant amount of background can be measured during an extended detection window. Fluorescence in the cooling p-
eriods between the photon generation windows has been removed.
process leaves the ion in a mixed state with probabilities equally distributed between the four 5D3 2 levels and with no coherences between that manifold.
The eight-level optical Bloch model predicts dynamic scattering probabilities in close agreement with the measured single photon wavepacket (ﬁgure 2(a)). The arrival time distribution features a distinctive oscillation at a frequency independent of the repump beam power. These quantum beats are caused by interference between 6P1/2–5D3/2 absorption amplitudes that enhances and suppresses the emission of Raman-scattered 6S1/2–6P1/2 photons in the detection mode with frequency determined by the D st-
ate energy splitting [56].
4

New J. Phys. 18 (2016) 093038

D B Higginbottom et al

Figure 4. Coincidence probability Pc versus single photon detection probability Ps in the operational region of our source and over the complete phase space (inset). Classical light coincidence rates cannot be reduced below the NC threshold (red) and Gaussian light ﬁelds are similarly restricted to coincidence rates above the QNG threshold (blue). Light ﬁelds with coincidence rates below this threshold (green region) are unambiguously QNG. Circles correspond to measurements of our pulsed single-ph-
oton source in the reﬂected (red) and symmetric (black) conﬁguration with a 200 ns detection window and under a range of driving conditions. The black cross is a measurement under optimal conditions with a 500 ns detection window. Error bars represent 95% conﬁdence
intervals. The dashed line predicts the performance of an ideal single-photon source measured with our detectors and a 200 ns
detection window.

Results

The second order intensity correlation function g 2 (0) = 0.0019(2) of the ﬁeld emitted by our photon source violates the coherent state condition a  1 under continuous and pulsed driving (ﬁgure 3). The measured α corresponds precisely to the stated and measured dark count rate of our two detectors, 10±2 counts s–1 per
detector. By subtracting this measured dark count rate from the measured coincidences we can say with 95% conﬁdence that the intrinsic α of our source is below 3×10−4.
In numerical models of discrete-variable quantum repeater networks the possible network size is critically
bounded by the multi-photon component. In [3] the authors consider the entanglement-based QKD network of [57] and show that even a small multiple-pair probability can be extremely detrimental. An otherwise ideal network of efﬁcient photon sources with h = 0.9 and a = 0.01 becomes useless for QKD at any rate after only seven concatenated network links. In contrast, an efﬁcient trapped atom source with the same α and dark noise-
rate as our source may support high QKD rates over up to thirty network links.
In this work the efﬁciency of the source is limited by the collection proportion of the two HALOs, polarization ﬁltering, detection efﬁciency, and ﬁber coupling efﬁciency so that the end-to-end efﬁciency is h = 0.0054. However the initial light ﬁeld is so close to a perfect single-photon Fock state that higher-order
quantum behavior is evident even after this high degree of attenuation. We demonstrate this higher order
quantum behavior by showing that the measured photon statistics violate a QNG optical state witness [50]. Following [58], both the traditional non-classicality (NC) criteria a < 1 and this QNG witness can be formulated in terms of probabilities Ps and Pc measured in an optical HBT conﬁguration. Classical states (states that can be written as a mixture of coherent states) are bounded by the inequality Ps  2( Pc - Pc) illustrated by the red curve in ﬁgure 4 (inset). A stricter threshold can be calc-
ulated for Gaussian states [58], blue curve in ﬁgure 4 (inset). The QNG threshold can be written for these observables in an implicit form parametrized by the degree of squeezing (V ) of the threshold states (derivation presented in supplementary material)

Ps

=

1 2

+

(1

-

V

(2

+

V

)

)

eV-1 2V

V (1 + V )2 ,

(1)

Pc =

1 2

-

(1

+

V

2)

eV-1 2V

V (1 + V )2 .

(2)

In the operational region of our source this threshold can be reduced to Pc » Ps3 3, see ﬁgure 4. Any state with single-mode coincidence probability Pc below this threshold is unambiguously QNG. Due to strong

5

New J. Phys. 18 (2016) 093038

D B Higginbottom et al

Figure 5. In the ‘symmetric’ conﬁguration ﬁber-coupled APDs sample separated spatial and polarization modes from opposite sides of the ion simultaneously.
attenuation our source sits in a corner of the Ps, Pc phase space. Nevertheless, because our source is low-noise it beats the QNG threshold by 6 standard deviations in the optimal conﬁguration as depicted in ﬁgure 4 (red circles). The number of detections and coincidences are determined in a detection window 200 ns long from the beginning of the photon trigger. These measurements further conﬁrm an excellent quality of the generated single photons, with performance limited solely by the overall sin-
gle-photon collection efﬁciency and detector dark counts.
The typical approach to enhancing collection efﬁciency from low-efﬁciency single photon emitters employs combinations of high numerical aperture optical elements [13, 23, 59–61]. This corresponds to simultaneous emission of a light ﬁeld into several spatial modes. Such a multi-mode source is useful so long as the purity of emitted single-photons is not compromised. Simultaneous enhancement of spurious background light collection, spatial restrictions on excitation beams, excitation beam scattering-
 into the photon collection modes and other processes can in general make enhancing collection efﬁciency a source of additional photon-number noise. To estimate this effect, we measure the same QNG witness for a light state emitted coherently by a singlephoton source into two spatial modes. We apply this measure to our single trapped ion source as presented in ﬁgure 5. The ﬂuorescence is detected in two spatial directions by APDs positioned behind each HALO lens. In the reﬂected conﬁguration, the -
collected photons were forced to enter the same spatial mode prior to the detection, in the symmetric setup they are emitted into two, in principle independent, directions. As demonstrated in [52, 53], ion ﬂuorescence emitted in two opposite directions remains phase coherent to a very high degree and can be efﬁciently transferred into a single spatial mode, for example by recombination on a beamsplitter. The single ion in the symmetric conﬁguration thus comprises both the emitter and perfect unita-
ry beamsplitter of the typical Hanbury Brown–Twiss measurement conﬁguration. The QNG measurements presented for our source emitting into a single spatial mode can be compared to two-mode coincidence measurement evaluated to yield the same measure.
Measurements made in the symmetric conﬁguration with a detection window of 200 ns, ﬁgure 4 (black circles) suggest that ﬂuorescence collected across two modes remains very close to an ideal single-photon Fock state, more than 20 s.d. from the QNG threshold. Optical losses are lower in this conﬁguration and the ﬁber coupling is more efﬁcient, improving the end-to end efﬁciency h = 0.0089. Increasing the detection window to 500 ns, ﬁgure 4 (black x), further improves the efﬁciency to h = 0.0104 (alb-
eit with coincidence rate increasing with window size). These measurements indicate that the techniques currently being pursued to increase collection efﬁciency from single emitters in free space would not have any detrimental effect on the number state of the collected photons.
Conclusion
In both symmetric and reﬂected conﬁgurations, and for a wide range of driving conditions, this trapped-ion photon source produces a pulsed light ﬁeld with coincidence rates indistinguishable from an ideal single-photon Fock state measured with our detectors, see ﬁgure 4 (dashed line). Single-atom photon sources are therefore sufﬁciently pure for applications in even large quantum networks, without the need for highly multimode
6

New J. Phys. 18 (2016) 093038

D B Higginbottom et al

quantum memories, photon number discriminating detectors or entanglement distillation [3, 11]. Even the low efﬁciency source presented here is demonstrably QNG, the ﬁrst such demonstration for a single atom source, and therefore sufﬁcient for secure QKD [48]. Although trapped atoms are a spectrally bright source of indistinguishable photons and have already been used in rudimentary quantum networks [16–18] it remains to be seen whether they can be coupled efﬁciently to network links. However, the -
efﬁciency of single-atom optical coupling is progressing rapidly [19, 23, 62–64] and our work suggests that efﬁcient collection is possible across multiple spatial modes without any detriment to the single-photon number state. In addition to being excellent stationary qubits, trapped single atoms are promising photon sources for practical quantum photonic networks.
Acknowledgments
The work reported here has been supported by the Austrian Science Fund FWF (SINFONIA, SFB FoQuS), by the European Union (CRYTERION #227959), and by the Institut für Quanteninformation GmbH. LS and RF acknowledge ﬁnancial support from grant No. GB14-36681G of the Czech Science Foundation.
References
[1] Bennett C H and Brassard G 1984 Quantum cryptography: public key distribution and coin tossing Theor. Comput. Sci. 175 8 [2] Ekert A K 1991 Quantum cryptography based on Bellʼs theorem Phys. Rev. Lett. 67 661–3 [3] Guha S, Krovi H, Fuchs C A, Dutton Z, Slater J A, Simon C and Tittel W 2015 Rate-loss analysis of an efﬁcient quantum repeater
architecture Phys. Rev. A 92 022357 [4] Khalique A and Sanders B C 2015 Practical long-distance quantum key distribution through concatenated entanglement swapping
with parametric down-conversion sources J. Opt. Soc. Am. B 32 2382–90 [5] Georgescu I M, Ashhab S and Nori F 2014 Quantum simulation Rev. Mod. Phys. 86 153–85 [6] Knill E, Laﬂamme R and Milburn G J 2001 A scheme for efﬁcient quantum computation with linear optics Nature 409 46–52 [7] Kok P, Nemoto K, Ralph T C, Dowling J P and Milburn G J 2007 Linear optical quantum computing with photonic qubits Rev. Mod.
Phys. 79 135–74 [8] Eisaman M D, Fan J, Migdall A and Polyakov S V 2011 Invited review article: single-photon sources and detectors Rev. Sci. Instrum. 82
071101 [9] Soujaeff A, Nishioka T, Hasegawa T, Takeuchi S, Tsurumaru T, Sasaki K and Matsui M 2007 Quantum key distribution at 1550 nm
using a pulse heralded single photon source Opt. Express 15 726 [10] Waks E, Diamanti E and Yamamoto Y 2006 Generation of photon number states New J. Phys. 8 4 [11] Krovi H, Guha S, Dutton Z, Slater J A, Simon C and Tittel W 2016 Practical quantum repeaters with parametric down-conversion
sources Appl. Phys. B 122 52 [12] Maunz P, Moehring D L, Olmschenk S, Younge K C, Matsukevich D N and Monroe C 2007 Quantum interference of photon pairs
from two remote trapped atomic ions Nat. Phys. 3 538–41 [13] Gerber S, Rotter D, Hennrich M, Blatt R, Rohde F, Schuck C, Almendros M, Gehr R, Dubin F and Eschner J 2009 Quantum
interference from remotely trapped ions New J. Phys. 11 013032 [14] Legero T, Wilk T, Hennrich M, Rempe G and Kuhn A 2004 Quantum beat of two single photons Phys. Rev. Lett. 93 070503 [15] Moehring D L, Madsen M J, Younge K C, Kohn R N Jr, Maunz P, Duan L-M, Monroe C and Blinov B B 2007 Quantum networking
with photons and trapped atoms (Invited) J. Opt. Soc. Am. B 24 300 [16] Moehring D L, Maunz P, Olmschenk S, Younge K C, Matsukevich D N, Duan L-M and Monroe C 2007 Entanglement of single-atom
quantum bits at a distance Nature 449 68–71 [17] Slodička L, Hétet G, Röck N, Schindler P, Hennrich M and Blatt R 2013 Atom–atom entanglement by single-photon detection Phys.
Rev. Lett. 110 083603 [18] Olmschenk S, Matsukevich D N, Maunz P, Hayes D, Duan L-M and Monroe C 2009 Quantum teleportation between distant matter
qubits Science 323 486–9 [19] Maiwald R, Golla A, Fischer M, Bader M, Heugel S, Chalopin B, Sondermann M and Leuchs G 2012 Collecting more than half the
ﬂuorescence photons from a single ion Phys. Rev. A 86 043431 [20] Leuchs G and Sondermann M 2012 Lightmatter interaction in free space J. Mod. Opt. 20 1–7 [21] Slodička L, Hétet G, Hennrich M and Blatt R 2015 Free space interference experiments with single photons and single ions Engineering
the Atom-Photon Interaction: Controlling Fundamental Processes with Photons, Atoms and Solids: Quantum Physics (Cham: Springer) pp 99–124 [22] Monroe C and Kim J 2013 Scaling the ion trap quantum processor Science 339 1164–9 [23] Noek R, Vrijsen G, Gaultney D, Mount E, Kim T, Maunz P and Kim J 2013 High speed, high ﬁdelity detection of an atomic hyperﬁne qubit Opt. Lett. 38 4735 [24] Bochmann J, Mücke M, Langfahl-Klabes G, Erbel C, Weber B, Specht H P, Moehring D L and Rempe G 2008 Fast excitation-
 and photon emission of a single-atom-cavity system Phys. Rev. Lett. 101 223601 [25] Kuhn A, Hennrich M and Rempe G 2002 Deterministic single-photon source for distributed quantum networking Phys. Rev. Lett. 89 067901 [26] McKeever J, Boca A, Boozer A D, Buck J R and Kimble H J 2003 Experimental realization of a one-atom laser in the regime of strong coupling Nature 425 268–71 [27] McKeever J, Boca A, Boozer A D, Miller R, Buck J R, Kuzmich A and Kimble H J 2004 Deterministic generation of single -
photons from one atom trapped in a cavity Science 303 1992–4 [28] Nisbet-Jones P B R, Dilley J, Ljunggren D and Kuhn A 2011 Highly efﬁcient source for indistinguishable single photons of controlled shape New J. Phys. 13 103036 [29] Mücke M, Bochmann J, Hahn C, Neuzner A, Nölleke C, Reiserer A, Rempe G and Ritter S 2013 Generation of single photons from an atom-cavity system Phys. Rev. A 87 063805

7

New J. Phys. 18 (2016) 093038

D B Higginbottom et al

[30] Keller M, Lange B, Hayasaka K, Lange W and Walther H 2004 Continuous generation of single photons with controlled waveform in an ion-trap cavity system Nature 431 1075–8
[31] Barros H G, Stute A, Northup T E, Russo C, Schmidt P O and Blatt R 2009 Deterministic single-photon source from a single ion New J. Phys. 11 103004
[32] Shields A J 2007 Semiconductor quantum light sources Nat. Photon. 1 215–23 [33] Kako S, Santori C, Hoshino K, Götzinger S, Yamamoto Y and Arakawa Y 2006 A gallium nitride single-photon source operating at 200
K Nat. Mater. 5 887–92 [34] Kress A, Hofbauer F, Reinelt N, Kaniber M, Krenner H J, Meyer R, Böhm G and Finley J J 2005 Manipulation of the spontaneous
emission dynamics of quantum dots in two-dimensional photonic crystals Phys. Rev. B 71 241304 [35] Press D, Götzinger S, Reitzenstein S, Hofmann C, Löfﬂer A, Kamp M, Forchel A and Yamamoto Y 2007 Photon antibunching from a
single quantum-dot-microcavity system in the strong coupling regime Phys. Rev. Lett. 98 117402 [36] Förtsch M, Fürst J U, Wittmann C, Strekalov D, Aiello A, Chekhova M V, Silberhorn C, Leuchs G and Marquardt C 2013 A versatile
source of single photons for quantum information processing Nat. Commun. 4 1818 [37] Ding X et al 2016 On-demand single photons with high extraction efﬁciency and near-unity indistinguishability from a resonantly
driven quantum dot in a micropillar Phys. Rev. Lett. 116 020401 [38] Kuhlmann A V, Houel J, Ludwig A, Greuter L, Reuter D, Wieck A D, Poggio M and Warburton R J 2013 Charge noise and spin noise in
a semiconductor quantum device Nat. Phys. 9 570–5 [39] Somaschi N et al 2015 Near optimal single photon sources in the solid state Nat. Photon. 10 340–5 [40] Patel R B, Bennett A J, Farrer I, Nicoll C A, Ritchie D A and Shields A J 2010 Two-photon interference of the emission from electrically
tunable remote quantum dots Nat. Photon. 4 632–5 [41] Loredo J C et al 2016 Scalable performance in solid-state single-photon sources Optica 3 433 [42] Kimble H, Dagenais M and Mandel L 1977 Photon antibunching in resonance ﬂuorescence Phys. Rev. Lett. 39 691–5 [43] Grangier P, Roger G and Aspect A 1986 Experimental evidence for a photon anticorrelation effect on a beam splitter: a new light on
single-photon interferences Europhys. Lett. 1 173–9 [44] Filip R and Lachman L 2013 Hierarchy of feasible nonclassicality criteria for sources of photons Phys. Rev. A 88 043827 [45] Mari A and Eisert J 2012 Positive Wigner functions render classical simulation of quantum computation efﬁcient Phys. Rev. Lett. 109
230503 [46] Lvovsky A, Hansen H, Aichele T, Benson O, Mlynek J and Schiller S 2001 Quantum state reconstruction of the single-photon Fock state
Phys. Rev. Lett. 87 050402 [47] Straka I et al 2014 Robust quantum non-Gaussianity of single-photon states Phys. Rev. Lett. 113 223603 [48] Lasota M, Filip R and Usenko V C 2016 Sufﬁciency of quantum non-Gaussianity for discrete-variable quantum key distribution
arXiv:1603.06620 [49] Brown R H and Twiss R Q 1956 Correlation between photons in two coherent beams of light Nature 177 27–9 [50] Filip R and Mišta L 2011 Detecting quantum states with a positive Wigner function beyond mixtures of Gaussian states Phys. Rev. Lett.
106 200401 [51] Predojević A, Ježek M, Huber T, Jayakumar H, Kauten T, Solomon G S, Filip R and Weihs G 2014 Efﬁciency versus multi-photon
contribution test for quantum dots Opt. Express 22 4789–98 [52] Slodička L, Hétet G, Röck N, Gerber S, Schindler P, Kumph M, Hennrich M and Blatt R 2012 Interferometric thermometry of a single
sub-Doppler-cooled atom Phys. Rev. A 85 043401 [53] Eschner J, Raab C, Schmidt-Kaler F and Blatt R 2001 Light interference from single atoms and their mirror images Nature 413 495–8 [54] Almendros M, Huwer J, Piro N, Rohde F, Schuck C, Hennrich M, Dubin F and Eschner J 2009 Bandwidth-tunable single-photon
source in an ion-trap quantum network Phys. Rev. Lett. 103 213601 [55] Takahashi H, Wilson A, Riley-Watson A, Oručević F, Seymour-Smith N, Keller M and Lange W 2013 An integrated ﬁber trap for
single-ion photonics New J. Phys. 15 053011 [56] Schug M, Kurz C, Eich P, Huwer J, Müller P and Eschner J 2014 Quantum interference in the absorption and emission of single
photons by a single ion Phys. Rev. A 90 023829 [57] Sinclair N et al 2014 Spectral multiplexing for scalable quantum photonics using an atomic frequency comb quantum memory and
feed-forward control Phys. Rev. Lett. 113 053603 [58] Lachman L and Filip R 2013 Robustness of quantum nonclassicality and non-Gaussianity of single-photon states in attenuating
channels Phys. Rev. A 88 063841 [59] Kurz C, Schug M, Eich P, Huwer J, Müller P and Eschner J 2014 Experimental protocol for high-ﬁdelity heralded photon-to-atom
quantum state transfer Nat. Commun. 5 5527 [60] Shu G, Kurz N, Dietrich M R and Blinov B B 2010 Efﬁcient ﬂuorescence collection from trapped ions with an integrated spherical
mirror Phys. Rev. A 81 042321 [61] Streed E W, Norton B G, Jechow A, Weinhold T J and Kielpinski D 2011 Imaging of trapped ions with a microfabricated optic for
quantum information processing Phys. Rev. Lett. 106 010502 [62] Fischer M, Bader M, Maiwald R, Golla A, Sondermann M and Leuchs G 2014 Efﬁcient saturation of an ion in free space Appl. Phys. B
117 797–801 [63] Wong-Campos J D, Johnson K G, Neyenhuis B, Mizrahi J and Monroe C 2016 High resolution adaptive imaging of a single atom Nat
Phot. 10 606–10 [64] Streed E W, Jechow A, Norton B G and Kielpinski D 2012 Absorption imaging of a single atom Nat. Commun. 3 933 [65] Hillery M, O’Connell R F, Scully M O and Wigner E P 1984 Distribution functions in physics: fundamentals Phys. Rep. 106 121–67 [66] Yuen H P 1976 Two-photon coherent states of the radiation ﬁeld Phys. Rev. A 13 2226–43

8

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:11.700Z
- **Text Length:** 35670 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
