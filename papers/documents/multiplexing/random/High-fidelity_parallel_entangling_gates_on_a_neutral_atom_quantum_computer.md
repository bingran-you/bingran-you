# PDF Document: Evered et al. - 2023 - High-fidelity parallel entangling gates on a neutr.pdf

**File Path:** Evered et al. - 2023 - High-fidelity parallel entangling gates on a neutr.pdf

**Processed Date:** 2026-02-10T18:15:32.043Z

**File Size:** 3067.40 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 835

**Title:** High-fidelity parallel entangling gates on a neutral atom quantum computer

**Collection:** Multiplexing > Random

---

## Extracted Text Content

arXiv:2304.05420v1 [quant-ph] 11 Apr 2023

High-ﬁdelity parallel entangling gates on a neutral atom quantum computer
Simon J. Evered1,∗, Dolev Bluvstein1,∗, Marcin Kalinowski1,∗, Sepehr Ebadi1, Tom Manovitz1, Hengyun Zhou1,2, Sophie H. Li1, Alexandra A. Geim1, Tout T. Wang1, Nishad Maskara1,
Harry Levine1,†, Giulia Semeghini3, Markus Greiner1, Vladan Vuleti´c4, and Mikhail D. Lukin1 1Department of Physics, Harvard University, Cambridge, MA 02138, USA 2QuEra Computing Inc., Boston, MA 02135, USA 3John A. Paulson School of Engineering and Applied Sciences, Harvard University, Cambridge, MA 02138, USA 4Department of Physics and Research Laboratory of Electronics, Massachusetts Institute of Technology, Cambridge, MA 02139, USA ∗ These authors contributed equally to this work
†Current aﬃliation: AWS Center for Quantum Computing, Pasadena, CA 91125.
The ability to perform entangling quantum operations with low error rates in a scalable fashion is a central element of useful quantum information processing [1]. Neutral atom arrays have recently emerged as a promising quantum computing platform, featuring coherent control over hundreds of qubits [2, 3] and any-to-any gate connectivity in a ﬂexible, dynamically reconﬁgurable architecture [4]. The major outstanding challenge has been to reduce errors in entangling operations mediated through Rydbe-
rg interactions [5]. Here we report the realization of two-qubit entangling gates with 99.5% ﬁdelity on up to 60 atoms in parallel, surpassing the surface code threshold for error correction [6, 7]. Our method employs fast single-pulse gates based on optimal control [8], atomic dark states to reduce scattering [9], and improvements to Rydberg excitation and atom cooling [10]. We benchmark ﬁdelity using several methods based on repeated gate applications [11, 12], characterize the physical error so-
urces, and outline future improvements. Finally, we generalize our method to design entangling gates involving a higher number of qubits, which we demonstrate by realizing low-error three-qubit gates [13, 14]. By enabling high-ﬁdelity operation in a scalable, highly connected system, these advances lay the groundwork for large-scale implementation of quantum algorithms [15], error-corrected circuits [7], and digital simulations [16].

Errors limit the computational capabilities of current quantum devices and must be made suﬃciently low to permit eﬃcient quantum error correction. In particular, two-qubit gate error rates below 1% (i.e. ﬁdelities above 99%) are required to surpass quantum error-correcting thresholds [7]. Moreover, maintaining a combination of such low error rates, highly parallel control, and a high degree of connectivity while scaling system size is crucial to realizing large-scale quantum computers. While high--
ﬁdelity entangling operations were realized on isolated qubit pairs early on [17–20], only recently have these techniques been extended to larger systems. Stateof-the-art examples include 99.4% ﬁdelity on a 72-qubit superconducting chip [21] and 99.4-99.6% ﬁdelity on a 31-ion chain [22]. Scaling these systems to even larger numbers of qubits while maintaining low error and efﬁcient control is an exciting frontier [23, 24], yet also presents substantial platform-speciﬁc scientiﬁc and engineering ch-
allenges.
Recently, arrays of neutral atoms have emerged as a promising quantum processing platform capable of coherent control of hundreds of qubits [2, 3] for analog quantum simulations. This platform also features a ﬂexible, dynamically reconﬁgurable architecture [4], whereby entangling operations can be performed between neutral atom qubits with arbitrary connectivity and in a highly parallel manner. While these capabilities open unique opportunities for both large-scale digital simulations [1]

and computation with error-corrected qubits [7], the major outstanding challenge in the ﬁeld has been to improve the two-qubit gate ﬁdelity signiﬁcantly above the previously demonstrated ≈ 97.5% [5, 25]. In this Article, we experimentally realize two-qubit controlled phase (CZ) gates with 99.5% ﬁdelity while operating on up to 60 neutral atom qubits in parallel, closing the gate-ﬁdelity gap to other state-of-the-art platforms [21, 22, 24, 26]. This advance is achieved by using a family of optimal -
gate schemes [8] relying on the Rydberg blockade mechanism that are robust to experimental imperfections and spontaneous scattering, alongside the implementation of several experimental tools to overcome previously dominant error sources. To characterize the two-qubit gates, we employ multiple complementary benchmarking methods using repeated gate applications, each giving consistent results. Finally, these techniques are generalized to entangling operations involving a higher number of qubits, al-
lowing us to experimentally realize parallel, high-ﬁdelity three-qubit entangling gates.
Neutral atom entangling gates
In our approach, quantum information is encoded in long-lived mF = 0 hyperﬁne qubits [27], where highﬁdelity (>99.97%) coherent single-qubit rotations are driven by Raman laser pulses [28]. Entangling op-

2

Entangling zone

a
Rydberg laser
(t),Á(t)

Gate sites

CZ

CCZ

1/T2*

r

±

°r

e

¢

°e
1

0

b

1
Bright

Dark

Populations

0 ±¢>0 ±¢<0

Experimental Ideal gate

fidelity

/2¼ (MHz)

c

Time-optimal Smooth-amplitude

d

6.9

1.0

4.6

2.3

0.0

0.995

Calibration

Á/2¼

0.1

0.0

-0.1

0

200

Time (ns)

0.3

0.0

-0.3

0

200

Time (ns)

fidelity

1.0

0.99

0.98 0.11 0.12 1.02 1.05 -0.08 0.01

A/2¼

!/

±0/

FIG. 1. Parallel implementation of high-ﬁdelity entangling gates on a neutral atom quantum computer. a, Entangling gates are implemented by arranging atoms into designated gate sites where they interact via Rydberg blockade interactions when pulsing global Rydberg lasers. Two-qubit or three-qubit gates are performed by modulating the Rabi frequency Ω(t) and phase φ(t) proﬁles of the laser driving the ﬁrst leg of the two-photon Rydberg excitation. Inset: atoms in the qubit state |1 are excited to t-
he Rydberg state |r through an intermediate excited state |e , while atoms in |0 are not excited. Main gate error sources include Rydberg state decay γr, intermediate-state scattering γe, and Rydberg dephasing T2∗. b, Numerical comparison of average bright and dark state populations during the Rydberg gate. Choosing opposite intermediate-state (∆) and two-photon (δ) detuning signs at the beginning of the gate maximizes population in the dark state, which minimizes the intermediate-state scattering-
 error. c, Entangling gates are implemented with a single Rydberg laser pulse with smooth phase modulation φ(t), whose slope corresponds to a two-photon detuning δ(t). A few global parameters characterize the gate, allowing for a family of possible gate implementations, including a parameterized version of the timeoptimal CZ gate [8] and a smooth-amplitude CZ gate. d, Example gate calibration sequence. Tuning individual parameters of the parameterized time-optimal gate phase proﬁle φ(t) = A cos(ωt-
 − ϕ) + δ0t allows for fast and simple global calibration (see Extended Data Fig. 6 for additional experimental data). Error bars represent 68% conﬁdence intervals.

erations are performed in parallel by positioning the atoms, trapped in individual optical tweezers, into designated gate sites, followed by state-selective excitation into highly excited atomic Rydberg states using a twophoton transition (Fig. 1a). Errors in such quantum operations can occur due to spontaneous emission from the intermediate atomic state |e , atomic temperature eﬀects, Rydberg state decay during the gate (Fig. 1a inset), as well as miscalibrations and experimental imperfections su-
ch as laser noise or inhomogeneity.
We address these errors through the combination of gate schemes relying on optimal control and experimental improvements. Our method for gate implementation is inspired by the recently proposed time-optimal gate by Jandura and Pupillo [8], which utilizes a numerically optimized continuous phase proﬁle [8, 25, 29] for a single laser pulse (as opposed to a discrete phase jump between two laser pulses [5]). We generalize this gate scheme to a family of single-pulse gates with a small set of tunable g-
ate parameters, including a version of the time-optimal gate consisting of a parameterized sinusoidal phase modulation, as well as a second, smoothamplitude gate (Fig. 1c, see Methods for details).

We calibrate these gates by tuning several global parameters (Fig. 1d), which lends robustness to experimental imperfections: an optimal set of gate parameters can be found even in the presence of systematic oﬀsets such as ﬁnite Rydberg laser pulse rise time (Extended Data Fig. 5a). We further optimize our control pulses to suppress scattering from the short-lived intermediate state |e by minimizing population in the “bright” dressed

state (|B ∼ |1 +

2Ω ∆

|e

+ |r ) containing |e

and max-

imizing population in the “dark” state (|D ∼ − |1 + |r )

not containing |e (where Ω is the two-photon Rabi fre-

quency and ∆ is the intermediate-state detuning) [9, 30].

This optimization is achieved through the appropriate se-

lection of the relative signs of the intermediate and two-

photon detunings (Fig. 1b), as well as through smooth

pulse shaping for the smooth-amplitude gate (Extended

Data Fig. 2).

Our experimental realization makes use of the apparatus described previously in Refs. [2, 4], with which we rearrange 87Rb atoms into programmable, defect-free arrays. Two main experimental upgrades facilitate highﬁdelity entangling gate operation. First, we suppress

3

scattering by signiﬁcantly increasing intermediate-state detuning while maintaining a high two-photon Rabi frequency (Ω/2π = 4.6 MHz), enabled by excitation to a lower-lying (n = 53) Rydberg state with a tenfold higher power laser (Extended Data Fig. 1). Second, to suppress decoherence from atomic velocity and position ﬂuctuations, we implement Λ-enhanced gray molasses cooling [10, 31] and an improved optical pumping technique (Methods) to achieve colder temperatures (radial phonon occupation n¯ ≈-
 1 − 2).
Entangling gate characterization
To characterize the CZ gates realized with this approach, we create arrays of 10 Bell pairs by arranging qubit pairs into separated gate sites (Fig. 2a) and pulsing global Rydberg and Raman lasers. Using the parameterized time-optimal gate from Fig. 1c, we create a Bell state |Φ+ = √1 (|00 + |11 ) [5], which is then
2
characterized by measuring the populations of |00 and |11 , and the oscillation amplitude of the two-atom parity σ1zσ2z upon applying a global single-qubit π/2-pulse of variable phase (Fig. 2b). We extract a raw Bell state ﬁdelity of 98.0(2)% exceeding previous work by ≈ 2% [5], already suggesting a greatly improved gate ﬁdelity. Since this Bell state ﬁdelity appears to be dominated by state preparation and measurement (SPAM) errors (Methods), to characterize the ﬁdelity of the entangling gate mor-
e systematically, we apply an odd-numbered train of CZ gates to repeatedly entangle and disentangle the pairs, and then characterize the ﬁdelity of the ﬁnal resulting Bell state (Fig. 2c) [26, 32]. We ﬁt the decreasing ﬁdelity to an exponential decay to extract a CZ gate ﬁdelity FCZ = 99.52(4)% (Fig. 2d).
As a separate characterization of the gate ﬁdelity, we apply random global single-qubit rotations between sequences of CZ entangling gates (Fig. 3a). This method averages over diﬀerent states involved in the entangling operation similar to randomized benchmarking (see Extended Data Fig. 3 for numerical comparisons) [11, 12, 33, 34]. In the absence of errors during the gate sequence, a precisely calculated ﬁnal single-qubit operation returns the qubit pair to their initial |00 state. Applying a seq-
uence of up to 20 CZ gates with random single-qubit rotations in between, we ﬁt the decaying state ﬁdelity as a function of CZ gate number and extract FCZ = 99.54(2)% (Fig. 3b), consistent with the Bell state method of Fig. 2d. Not only do these methods agree quantitatively, but in practice we optimize the gate with this global randomized benchmarking method (Extended Data Fig. 6) and ﬁnd that the same exact parameters are optimal for generating Bell states. The qubits also acquire a single-partic-
le phase during the CZ gate which this benchmarking approach eliminates by using X gates in between CZ gate pairs (Fig. 3a). There-

a

2 ¹m 10 ¹m

b

1.0

0.5

Two-atom parity Probability

0.5

0.4

0.0

0.3

0.2

-0.5

0.1

-1.0

0.0

0.5

1.0

Phase of final ¼=2 pulse (Á=2¼)

0.0 11 10 01 00 Two-particle state

c

( X(¼/2)
X(¼/2)

) ( ) NCZ
X X

13 ¡ NCZ

X

X(¼/4)

X

X(¼/4)

Z(Á) Z(Á)

X(¼/2) X(¼/2)

Final Bell State Fidelity

d

0.98

FCZ = 99.52(4)%

0.96

0.94

0.92

1

5

9

13

Number of CZ gates

FIG. 2. High-ﬁdelity CZ gates characterized with Bell states. a, Parameterized time-optimal CZ gates are implemented on 20 atoms in parallel. b, Raw Bell state measurements upon application of a single CZ gate, with raw Bell state ﬁdelity of 98.0(2)%. We estimate a SPAM-corrected ﬁdelity of 99.4(4)% (not plotted, see Methods for details). c, Circuit used to benchmark two-qubit gate ﬁdelity by making a Bell state after an odd number of CZ gates interleaved with single-qubit X gates. d, Decay of Bel-
l state ﬁdelity after applying a variable number of CZ gates. A ﬁdelity of 99.52(4)% per CZ gate is extracted from an exponential ﬁt. The plot y-axis on (d) is rescaled by a SPAM correction factor which does not aﬀect the extracted gate ﬁdelity (Methods). Note that the same number of single-qubit gates are performed for each point, so that no normalization of single-qubit errors is necessary, which thereby results in a reduced y-axis intercept. Error bars represent 68% conﬁdence intervals.

fore, we employ a second method of global randomized benchmarking without these X gates, which allows for calibration of the single-particle phase (used for calibrating the Bell state measurement in Fig. 2b) and additionally benchmarks a gate ﬁdelity of FCZ = 99.48(2)% (Extended Data Fig. 7).
We next demonstrate that our gate methods are versatile, where various pulse proﬁles can all realize a highﬁdelity CZ gate. Speciﬁcally, in Fig. 3b we also realize and benchmark the smooth-amplitude gate (Fig. 1c) and achieve a similar ﬁdelity of FCZ = 99.55(3)%. Diﬀerent gate implementations can be tailored to speciﬁc usecases; for example, the smooth-amplitude gate strongly suppresses scattering even with a closer-detuned excitation, which can help achieve high gate ﬁdelities in situa-

4

a
b
0.93

NCZ/2

10 ¡ NCZ/2

d

( Rrand Rrand

)X
X

( ) Rrand X Rrand X

Rf Rf

FCZ = 99.54(2)%

FCZ = 99.55(3)%

0.93

FCZ = 99.48(2)%

Pj00®

Pj00®

0.89

0.89

0.85

Time-optimal gate

0 4 8 12 16 20 Number of CZ gates
c

Gate site

FCZ

Smooth-amplitude gate

0 4 8 12 16 Number of CZ gates
0.998

0.996

0.994

0.992 0

2468 Gate site

20 10

0.85

Time-optimal gate

0 4 8 12 16 20

e

Number of CZ gates

0.998

Row 1

Row 2

0.996

FCZ

0.994

0.992 0

5 10 15 20 25 30 Gate site

FIG. 3. Global randomized benchmarking of the CZ gate. a, Circuit used to benchmark two-qubit gate ﬁdelity with global randomized benchmarking, in which random rotations Rrand are sampled from a Haar-random distribution (Methods) and a ﬁnal rotation Rf is precomputed to return population to the initial product state |00 in the absence of gate errors. All 21 single-qubit rotations are applied for each data point, such that the number of single-qubit operations is independent of the number of two-qu-
bit gates. b, Benchmarking CZ gates on 20 atoms in parallel. We plot the probability of return to the initial product state as a function of the number of applied CZ gates for both the parameterized time-optimal gate and the smoothamplitude gate, extracting ﬁdelities of 99.54(2)% and 99.55(3)%, respectively. c, The extracted time-optimal gate ﬁdelity is consistent within statistical error across the 10 gate sites. d, Scaling to larger systems, we measure a comparable ﬁdelity of 99.48(2)% for the t-
ime-optimal gate implemented on 60 qubits in parallel. e, Site-by-site analysis reveals homogeneous, high-ﬁdelity gate performance across the two rows.

tions where laser intensity is limited.
Scaling up
We next explore the scalability of our approach to larger system sizes. Despite the fact that all calibration and control is done globally and not for individual gate sites, we ﬁnd that the ﬁdelity of the time-optimal gate is constant across the 10 individual gate sites within statistical error (Fig. 3c). This observation of homogeneity across the array highlights the inherent potential for scalability: more gate sites do not increase the calibration overhead. Motivated by this observation, in Fig-
. 3d we extend to a 60-qubit system by using larger Rydberg beams (while maintaining the same intensity), and achieve a gate ﬁdelity of FCZ = 99.48(2)% with good homogeneity across the array (Fig. 3e).
To understand the requirements for continued scaling and realizing high-ﬁdelity operation in even larger system sizes, we analyze the physical error sources in the system. In particular, we compare observed gate ﬁdelities to detailed modeling which utilizes two 8-level atomic systems (Extended Data Fig. 3a) with quantitative decoherence rates informed by experimental measurements. This modeling accounts for the remaining CZ gate inﬁdelity and reveals four main error sources (Extended Data Fig. 4):-
 Rydberg decay, coupling to the other Ry-

dberg mJ level, intermediate-state scattering, and our measured ground-Rydberg T2∗ = 3 µs which is dominated by laser light shift ﬂuctuations and ﬁnite atomic temperature. We further analyze error sources by studying gatesite correlations in the experimental data. We observe that high-weight correlated errors are largely absent from our data, which suggests the feasibility of stable, largescale operation (Extended Data Fig. 8). Careful analysis reveals small growth in the covariance between neighb-
oring gate sites (Extended Data Fig. 9), which can result either from correlated detuning ﬂuctuations (corresponding to our T2∗) or from long-range interactions caused by a Rydberg atom decaying into an adjacent Rydberg state (corresponding to our ﬁnite Rydberg lifetime, see further discussion in Methods).
Informed by these microscopic error sources, we conclude the dominant challenge in maintaining high ﬁdelity at an even larger number of parallel gate sites is to continually scale laser power and maintain beam homogeneity, as the other decoherence mechanisms appear to be independent of system size. However, we emphasize that even with the present laser parameters, system sizes can be directly increased to hundreds of qubits by shuttling atoms in and out of the entangling zone during a quantum circ-
uit [4, 35], or by redirecting the beam to dynamically redeﬁne the position of the entangling zone.

Fast multi-qubit gates
Finally, we explore the generalization of these methods to multi-qubit gates. Using optimal control methods, we ﬁnd a time-optimal CCZ gate and corresponding ansatz phase proﬁle (Fig. 4c) that realizes a native CCZ gate between three qubits [5, 13, 14] in a time only 44% longer than the time-optimal CZ and faster than other known CCZ proﬁles [8]. This CCZ gate is realized experimentally by rearranging triplets of atoms into triangular gate sites (Fig. 4a), and applying the CCZ pulse proﬁle with ou-
r global laser pulse. We characterize our CCZ gate using the sequence described in Fig. 4b to repeatedly entangle and disentangle a three-qubit GHZ state, and subsequently measure the ﬁnal GHZ state ﬁdelity (see Extended Data Fig. 10d for example GHZ states). While this approach does not constitute a rigorous benchmarking of the CCZ gate ﬁdelity (which can be done using e.g. randomized benchmarking [14]), our data indicates high-performing three-qubit entangling gates across 21 qubits in parallel,-
 consistent with a ﬁdelity F = 97.9(2)% (Fig. 4d). These optimal control methods extend to higher-qubit-number controlled-Z gates. We numerically search for and ﬁnd fast gates for up to six qubits (Fig. 4e), with gate times signiﬁcantly shorter than those required to decompose an N-qubit controlled-Z gate into 2N CZ gates and various single-qubit gates [36]. Generically, with these global pulses and Rydberg blockade, one can natively realize symmetric, diagonal gates (e.g. CPHASE gates as illustra-
ted in Extended Data Fig. 5b) [8] which are important for eﬃcient realization of digital quantum simulation algorithms [16].

5

a

c

0.2

b

(X(¼/2)
X(¼/2)

NCCZ

10¡NCCZ

) ( )X

X

X

X

Y(¼/2) Y(¼/2)

0.0 -0.2

Á/2¼

X(¼/2) X

X

Y(¼/2)

0

d
0.90 0.85

Fit, / 0.979(2)NCCZ

e
2.5

2.0

200

400

Time (ns)

Gate time ( T/2¼)

Final GHZ state fidelity

0.80
0.75
0 2 4 6 8 10 12 Number of CCZ gates

1.5
1.0 23456 Number of qubits

FIG. 4. Realizing fast CCZ gates. a, Entangling zone comprising three-qubit gate sites, with 21 qubits total. The triangular conﬁguration enables strong, symmetric interactions between three qubits. b, Circuit used to calibra√te the CCZ gate, by generating GHZ states (|000 + |111 )/ 2 after applying 2, 6, and 10 CCZ gates. c, Phase proﬁle used for implementing a parameterized CCZ gate with a single, ﬁxed-amplitude pulse. d, Raw GHZ state ﬁdelity as a function of CCZ gates applied, with an exponent-
ial decay ﬁt ∝ 0.979(2)NCCZ (see Extended Data Fig. 10d for example GHZ state characterization). e, Theoretical scaling of gate duration as a function of number of qubits for native Rydberg blockade multi-qubit gates (see Extended Data Fig. 10b for corresponding phase proﬁles).

Discussion and outlook

Our results enable a new era of high-ﬁdelity digital circuits with neutral atoms. Based on the detailed microscopic understanding of error sources, we envision various paths to further improve gate ﬁdelity in future work. For example, performing the gate at 3x higher Rabi frequency and 2x further detuning would theoretically result in a gate ﬁdelity of 99.9%. This would require suppressing the coupling to the adjacent Rydberg state, optimization of pulse rise times, and managing high laser intensi-
ty (Methods). The understanding of microscopic error sources can also be used to analyze the type of error, i.e. the decomposition into diﬀerent Pauli channels, atom loss, and leakage [37], as described in Extended Data Fig. 4.
These observations open the door for explorations of large-scale quantum error correction with eﬃcient parallel control of logical qubits [4, 7]. The remaining ingredients associated with mid-circuit readout can be implemented by moving atoms [35] away from the entangling zone to a readout zone, using a second atomic species

as ancilla qubits [38, 39], shelving data qubits in auxiliary atomic levels [40], non-destructive readout with optical cavities [41, 42] or ancillary atomic ensembles [43]. Alkaline-earth atoms also present additional opportunities, including single-photon Rydberg excitation and nuclear spin control [44–46] as well as using erasure conversion for eﬃcient quantum error correction [47]. Additionally, high-ﬁdelity multi-qubit gates enable many possible scientiﬁc directions based on digital quantum si-
mulation [27] of models including non-Abelian topological physics [16], quantum gravity [48, 49], and quantum chemistry [15]. Combining the analog capabilities of the neutral atom platform with digital circuits [4] opens the door for hybrid-analog digital quantum simulation, including techniques such as shadow tomography [50]. Finally, the high-ﬁdelity gate can be used as a tool for other applications with neutral atoms, for example creating a wide variety of entangled states for use in metrology -
[51, 52], and enabling novel optical lattice simulators [53–57].

6

[1] Preskill, J. Quantum Computing in the NISQ era and

beyond. Quantum 2, 79 (2018).

[2] Ebadi, S. et al. Quantum phases of matter on a 256-atom

programmable quantum simulator. Nature 595, 227–232

(2021).

[3] Scholl, P. et al. Quantum simulation of 2D antiferro-

magnets with hundreds of Rydberg atoms. Nature 595,

233–238 (2021).

[4] Bluvstein, D. et al. A quantum processor based on co-

herent transport of entangled atom arrays. Nature 604,

451–456 (2022).

[5] Levine, H. et al. Parallel Implementation of High-Fidelity

Multiqubit Gates with Neutral Atoms. Phys. Rev. Lett.

123, 170503 (2019).

[6] Kitaev, A. Y. Fault-tolerant quantum computation by

anyons. Annals of Physics 303, 2–30 (2003).

[7] Fowler, A. G., Mariantoni, M., Martinis, J. M. & Cle-

land, A. N. Surface codes: Towards practical large-scale

quantum computation. Phys. Rev. A 86, 032324 (2012).

[8] Jandura, S. & Pupillo, G. Time-Optimal Two- and

Three-Qubit Gates for Rydberg Atoms. Quantum 6, 712

(2022).

[9] Boller, K.-J., Imamog˘lu, A. & Harris, S. E. Observation

of electromagnetically induced transparency. Phys. Rev.

Lett. 66, 2593–2596 (1991).

[10] Brown, M. O., Thiele, T., Kiehl, C., Hsu, T.-W. & Regal,

C. A. Gray-molasses optical-tweezer loading: Controlling

collisions for scaling atom-array assembly. Phys. Rev. X

9, 011057 (2019).

[11] Magesan, E. et al. Eﬃcient measurement of quan-

tum gate error by interleaved randomized benchmarking.

Phys. Rev. Lett. 109, 080505 (2012).

[12] Gaebler, J. P. et al. Randomized benchmarking of mul-

tiqubit gates. Phys. Rev. Lett. 108, 260503 (2012).

[13] Monz, T. et al. Realization of the quantum toﬀoli gate

with trapped ions. Phys. Rev. Lett. 102, 040501 (2009).

[14] Kim, Y. et al. High-ﬁdelity three-qubit iToﬀoli gate for

ﬁxed-frequency superconducting qubits. Nat. Phys. 18,

783–788 (2022).

[15] Tazhigulov, R. N. et al. Simulating Models of Challeng-

ing Correlated Molecules and Materials on the Sycamore

Quantum Processor. PRX Quantum 3, 040318 (2022).

[16] Kalinowski, M., Maskara, N. & Lukin, M. D. Non-

Abelian Floquet Spin Liquids in a Digital Rydberg Sim-

ulator (2022). arXiv:2211.00017 [quant-ph].

[17] Benhelm, J., Kirchmair, G., Roos, C. F. & Blatt, R.

Towards fault-tolerant quantum computing with trapped

ions. Nat. Phys. 4, 463–466 (2008).

[18] Barends, R. et al. Superconducting quantum circuits at

the surface code threshold for fault tolerance. Nature

508, 500–503 (2014).

[19] Ballance, C. J., Harty, T. P., Linke, N. M., Sepiol, M. A.

& Lucas, D. M. High-ﬁdelity quantum logic gates us-

ing trapped-ion hyperﬁne qubits. Phys. Rev. Lett. 117,

060504 (2016).

[20] Noiri, A. et al. Fast universal quantum gate above the

fault-tolerance threshold in silicon. Nature 601 (2022).

[21] Acharya, R. et al. Suppressing quantum errors by scaling

a surface code logical qubit. Nature 614, 676–681 (2023).

[22] IonQ.

Introducing

IonQ

Forte.

URL

http://ionq.com/resources/

ionq-forte-first-configurable-quantum-computer. (2023). [23] Jurcevic, P. et al. Demonstration of quantum volume 64 on a superconducting quantum computing system. Quantum Sci. Technol. 6, 025020 (2021). [24] Ryan-Anderson, C. et al. Implementing Fault-tolerant Entangling Gates on the Five-qubit Code and the Color Code (2022). arXiv:2208.01863 [quant-ph]. [25] Fu, Z. et al. High-ﬁdelity entanglement of neutral atoms via a rydberg-mediated single-modulated-pulse controlled-phase gate. Phys. Rev. A 1-
05, 042430 (2022). [26] Pogorelov, I. et al. Compact ion-trap quantum computing demonstrator. PRX Quantum 2, 020343 (2021). [27] Graham, T. M. et al. Multi-qubit entanglement and algorithms on a neutral-atom quantum computer. Nature 604, 457–462 (2022). [28] Levine, H. et al. Dispersive optical systems for scalable Raman driving of hyperﬁne qubits. Phys. Rev. A 032618 (2022). [29] Theis, L. S., Motzoi, F., Wilhelm, F. K. & Saﬀman, M. High-ﬁdelity rydberg-blockade entangling gate using shaped, anal-
ytic pulses. Phys. Rev. A 94, 032306 (2016). [30] Møller, D., Madsen, L. B. & Mølmer, K. Quantum gates and multiparticle entanglement by rydberg excitation blockade and adiabatic passage. Phys. Rev. Lett. 100, 170504 (2008). [31] Ang’ong’a, J., Huang, C., Covey, J. P. & Gadway, B. Gray molasses cooling of 39K atoms in optical tweezers. Phys. Rev. Res. 4, 013240 (2022). [32] Egan, L. et al. Fault-tolerant control of an error-corrected qubit. Nature 598, 281–286 (2021). [33] Xia, T. et al. Randomize-
d benchmarking of single-qubit gates in a 2d array of neutral-atom qubits. Phys. Rev. Lett. 114, 100503 (2015). [34] Baldwin, C. H., Bjork, B. J., Gaebler, J. P., Hayes, D. & Stack, D. Subspace benchmarking high-ﬁdelity entangling operations with trapped ions. Phys. Rev. Res. 2, 013317 (2020). [35] Beugnon, J. et al. Two-dimensional transport and transfer of a single atomic qubit in optical tweezers. Nat. Phys. 3, 696–699 (2007). [36] Shende, V. V. & Markov, I. L. On the cnot-cost of toﬀoli gates.-
 Quantum Inf. Comput. 9 (2009). [37] Cong, I. et al. Hardware-Eﬃcient, Fault-Tolerant Quantum Computation with Rydberg Atoms. Phys. Rev. X 12, 021049 (2022). [38] Singh, K., Anand, S., Pocklington, A., Kemp, J. T. & Bernien, H. Dual-element, two-dimensional atom array with continuous-mode operation. Phys. Rev. X 12, 011040 (2022). [39] Singh, K. et al. Mid-circuit correction of correlated phase errors using an array of spectator qubits (2022). arXiv:2208.11716 [quant-ph]. [40] Graham, T. M. et al.-
 Mid-circuit measurements on a neutral atom quantum processor (2023). arXiv:2303.10051 [quant-ph]. [41] Dordevi´c, T. et al. Entanglement transport and a nanophotonic interface for atoms in optical tweezers. Science 373, 1511–1514 (2021). [42] Deist, E. et al. Mid-circuit cavity measurement in a neutral atom array. Phys. Rev. Lett. 129, 203602 (2022). [43] Xu, W. et al. Fast Preparation and Detection of a Rydberg Qubit Using Atomic Ensembles. Phys. Rev. Lett. 127, 050501 (2021).

7

[44] Madjarov, I. S. et al. High-ﬁdelity entanglement and detection of alkaline-earth rydberg atoms. Nat. Phys. 16, 857–861 (2020).
[45] Ma, S. et al. Universal gate operations on nuclear spin qubits in an optical tweezer array of 171Yb atoms. Phys. Rev. X 12, 021028 (2022).
[46] Jenkins, A., Lis, J. W., Senoo, A., McGrew, W. F. & Kaufman, A. M. Ytterbium nuclear-spin qubits in an optical tweezer array. Phys. Rev. X 12, 021027 (2022).
[47] Wu, Y., Kolkowitz, S., Puri, S. & Thompson, J. D. Erasure conversion for fault-tolerant quantum computing in alkaline earth Rydberg atom arrays. Nat. Commun. 13, 4657 (2022).
[48] Brown, A. R. et al. Quantum gravity in the lab: Teleportation by size and traversable wormholes (2019). arXiv:1911.06314 [quant-ph].
[49] Periwal, A. et al. Programmable interactions and emergent geometry in an array of atom clouds. Nature 600, 630–635 (2021).
[50] Huang, H. Y., Kueng, R. & Preskill, J. Predicting many properties of a quantum system from very few measurements. Nat. Phys. 16, 1050–1057 (2020).
[51] Bornet, G. et al. Scalable spin squeezing in a dipolar rydberg atom array (2023). arXiv:2303.08053 [quant-ph].
[52] Eckner, W. J. et al. Realizing spin squeezing with rydberg interactions in a programmable optical clock (2023). arXiv:2303.08078 [quant-ph].
[53] Yang, B. et al. Cooling and entangling ultracold atoms in optical lattices. Science 369, 550–553 (2020).
[54] Hartke, T., Oreg, B., Jia, N. & Zwierlein, M. Quantum register of fermion pairs. Nature 601, 537–541 (2022).
[55] Young, A. W., Eckner, W. J., Schine, N., Childs, A. M. & Kaufman, A. M. Tweezer-programmable 2D quantum walks in a Hubbard-regime lattice. Science 377, 885–889 (2022).
[56] Srakaew, K. et al. A subwavelength atomic array switched by a single Rydberg atom. Nat. Phys. (2023). arXiv:2207.09383.
[57] Gonza´lez-Cuadra, D. et al. Fermionic quantum processing with programmable neutral atom arrays (2023). arXiv:2303.06985 [quant-ph].
[58] Grier, A. T. et al. Λ-enhanced sub-doppler cooling of lithium atoms in D1 gray molasses. Phys. Rev. A 87, 063411 (2013).
[59] Rosi, S. et al. Λ-enhanced grey molasses on the D2 transition of Rubidium-87 atoms. Sci. Rep. 8, 1301 (2018).
[60] Tuchendler, C., Lance, A. M., Browaeys, A., Sortais, Y. R. P. & Grangier, P. Energy distribution and cooling of a single atom in an optical tweezer. Phys. Rev. A 78, 033425 (2008).
[61] Wu, T.-Y., Kumar, A., Giraldo, F. & Weiss, D. S. Stern–Gerlach detection of neutral-atom qubits in a state-dependent optical lattice. Nat. Phys. 15, 538–542 (2019).
[62] Vandersypen, L. M. K. & Chuang, I. L. Nmr techniques for quantum control and computation. Rev. Mod. Phys. 76, 1037–1069 (2005).
[63] Thompson, J. D., Tiecke, T. G., Zibrov, A. S., Vuleti´c, V. & Lukin, M. D. Coherence and raman sideband cooling of a single atom in an optical tweezer. Phys. Rev. Lett. 110, 133001 (2013).
[64] Wimperis, S. Broadband, narrowband, and passband composite pulses for use in advanced nmr experiments. J. Magn. Reson. Ser. A 109, 221–231 (1994).

[65] Jaksch, D. et al. Fast quantum gates for neutral atoms. Phys. Rev. Lett. 85, 2208–2211 (2000).
[66] Brion, E., Pedersen, L. H. & Mølmer, K. Implementing a neutral atom Rydberg gate without populating the Rydberg state. J. Phys. B: At. Mol. Opt. Phys. 40, S159 (2007).
[67] Møller, D., Madsen, L. B. & Mølmer, K. Quantum Gates and Multiparticle Entanglement by Rydberg Excitation Blockade and Adiabatic Passage. Phys. Rev. Lett. 100, 170504 (2008).
[68] Mu¨ller, M. M. et al. Optimizing entangling quantum gates for physical systems. Phys. Rev. A 84, 042315 (2011).
[69] Shi, X.-F., Bariani, F. & Kennedy, T. A. B. Entanglement of neutral-atom chains by spin-exchange Rydberg interaction. Phys. Rev. A 90, 062327 (2014).
[70] Beterov, I. I. et al. Two-qubit gates using adiabatic passage of the Stark-tuned Fo¨rster resonances in Rydberg atoms. Phys. Rev. A 94, 062307 (2016).
[71] Petrosyan, D., Motzoi, F., Saﬀman, M. & Mølmer, K. High-ﬁdelity Rydberg quantum gate via a two-atom dark state. Phys. Rev. A 96, 042306 (2017).
[72] Yu, D., Wang, H., Ma, D., Zhao, X. & Qian, J. Adiabatic and high-ﬁdelity quantum gates with hybrid RydbergRydberg interactions. Opt. Express 27, 23080–23094 (2019).
[73] Saﬀman, M., Beterov, I. I., Dalal, A., Pa´ez, E. J. & Sanders, B. C. Symmetric Rydberg controlled-Z gates with adiabatic pulses. Phys. Rev. A 101, 062309 (2020).
[74] Sun, Y., Xu, P., Chen, P.-X. & Liu, L. Controlled Phase Gate Protocol for Neutral Atoms via Oﬀ-Resonant Modulated Driving. Phys. Rev. Appl. 13, 024059 (2020).
[75] Rao, D. D. B. & Mølmer, K. Robust Rydberg-interaction gates with adiabatic passage. Phys. Rev. A 89, 030301 (2014).
[76] Shi, X.-F. Rydberg Quantum Gates Free from Blockade Error. Phys. Rev. Appl. 7, 064017 (2017).
[77] Shen, C.-P., Wu, J.-L., Su, S.-L. & Liang, E. Construction of robust Rydberg controlled-phase gates. Opt. Lett. 44, 2036–2039 (2019).
[78] Fromonteil, C., Bluvstein, D. & Pichler, H. Protocols for Rydberg entangling gates featuring robustness against quasi-static errors (2022). arXiv:2210.08824 [quant-ph].
[79] Mohan, M., de Keijzer, R. & Kokkelmans, S. Robust control and optimal Rydberg states for neutral atom twoqubit gates (2022). arXiv:2212.10159 [quant-ph].
[80] Chang, T. H., Wang, T. N., Jen, H. H. & Chen, Y. C. High-ﬁdelity Rydberg control-Z gates with time-optimal pulses (2023). arXiv:2303.16395 [quant-ph].
[81] Jandura, S., Thompson, J. D. & Pupillo, G. Optimizing Rydberg Gates for Logical Qubit Performance (2023). arXiv:2210.06879 [quant-ph].
[82] Li, R., Qian, J. & Zhang, W. Proposal for practical Rydberg quantum gates using a native two-photon excitation (2023). arXiv:2303.16605 [quant-ph].
[83] Su, S.-L. et al. Rabi- and Blockade-Error-Resilient AllGeometric Rydberg Quantum Gates. Phys. Rev. Appl. 19, 044007 (2023).
[84] Wu, H.-Z., Yang, Z.-B. & Zheng, S.-B. Implementation of a multiqubit quantum phase gate in a neutral atomic ensemble via the asymmetric Rydberg blockade. Phys. Rev. A 82, 034307 (2010).
[85] Isenhower, L., Saﬀman, M. & Mølmer, K. Multibit CkNOT quantum gates via Rydberg blockade. Quantum

8
Inf. Process. 10, 755 (2011). [86] Shao, X.-Q., Zheng, T.-Y., Oh, C. H. & Zhang, S. One-
step achievement of robust multipartite GreenbergerHorne-Zeilinger state and controlled-phase gate via Rydberg interaction. J. Opt. Soc. Am. B 31, 827–832 (2014). [87] Khazali, M. & Mølmer, K. Fast Multiqubit Gates by Adiabatic Evolution in Interacting Excited-State Manifolds of Rydberg Atoms and Superconducting Circuits. Phys. Rev. X 10, 021054 (2020). [88] Young, J. T., Bienias, P., Belyansky, R., Kaufman, A. M. & Gorshkov, A. V. Asymmetric Blockade and Multiqubit Gates via Dipole-Dipole Interac-
tions. Phys. Rev. Lett. 127, 120501 (2021). [89] Li, R., Li, S., Yu, D., Qian, J. & Zhang, W. Optimal Model for Fewer-Qubit CNOT Gates With Rydberg Atoms. Phys. Rev. Appl. 17, 024014 (2022). [90] Pelegr´ı, G., Daley, A. J. & Pritchard, J. D. High-ﬁdelity multiqubit Rydberg gates via two-photon adiabatic rapid passage. Quantum Sci. Technol. 7, 045020 (2022). [91] Robicheaux, F., Graham, T. M. & Saﬀman, M. Photonrecoil and laser-focusing limits to rydberg gate ﬁdelity. Phys. Rev. A 103, 022424 (2021-
). [92] Sahay, K., Jin, J., Claes, J., Thompson, J. D. & Puri, S. High threshold codes for neutral atom qubits with biased erasure errors (2023). arXiv:2302.03063 [quant-ph]. [93] Claes, J., Rieﬀel, E. & Wang, Z. Character Randomized Benchmarking for Non-Multiplicity-Free Groups With Applications to Subspace, Leakage, and Matchgate Randomized Benchmarking. PRX Quantum 2 (2021). [94] Lampen, J., Nguyen, H., Li, L., Berman, P. R. & Kuzmich, A. Long-lived coherence between ground and rydberg levels i-
n a magic-wavelength lattice. Physical Review A 98, 33411 (2018). [95] Noh, H.-R. & Moon, H. S. Transmittance signal in real ladder-type atoms. Phys. Rev. A 85, 033817 (2012). [96] Levine, H. et al. High-ﬁdelity control and entanglement of rydberg-atom qubits. Phys. Rev. Lett. 121, 123603 (2018).

9

METHODS
Experimental system We stochastically load hundreds of 87Rb atoms into a programmable array of 850-nm optical tweezers generated by a spatial light modulator (SLM). A second set of 810-nm optical tweezers generated by a crossed pair of acousto-optic deﬂectors (AODs) is then used to rearrange into defect-free arrangements [2]. Subsequently, the atoms are cooled ﬁrst with polarization gradient cooling (PGC) on the 780-nm D2 line, then with Λ-enhanced gray molasses cooling on the 795-nm D1 line [10, -
31, 58, 59]. We estimate an average radial motional quantum number of n¯ ≈ 1 − 2 from ﬁtting a droprecapture curve [60] to ∼ 10 µK in ∼ 1 mK deep traps.
Following rearrangement and cooling, we prepare atoms in the qubit basis, formed from clock states |0 = |F = 1, mF = 0 and |1 = |F = 2, mF = 0 . In our previous work [4, 5], we pump into |F = 1, mF = 0 using Raman-assisted optical pumping, in which we repeatedly apply π pulses on the |F = 1, mF = −1 → |F = 2, mF = −1 transition and the |F = 1, mF = +1 → |F = 2, mF = +1 transition, followed by resonant depumping of the |F = 2 manifold. The main disadvantage of this scheme is that it can require sca-
ttering many photons (we performed 40-70 pumping cycles in Refs. [4, 5]) to end up in |F = 1, mF = 0 , and empirically we ﬁnd this causes signiﬁcant enough heating to negate the beneﬁts of the colder atoms following the Λ-enhanced gray molasses cooling step we use here in this work.
To address this challenge, here instead we ﬁrst optically pump into the |F = 2, mF = +2 stretched state with σ+-polarized 780-nm light, which scatters only several photons [40, 61]. Then, we rotate the magnetic ﬁeld by 90 degrees such that the Raman laser propagation axis has an orthogonal component and can thus drive σ±-polarized transitions in the hyperﬁne manifold (see Ref. [28]). We apply two separate Raman pulses that transfer population ﬁrst from |F = 2, mF = +2 to |F = 1, mF = +1 and then t-
o |F = 2, mF = 0 . We use Knill composite π pulses [62] for these transfers steps, and suppress unwanted transitions to adjacent mF states by utilizing Gaussian-shaped optical pulses [62]. We note that during this transfer process, the magnetic ﬁeld direction is along the axis of the tweezer, which quadratically suppresses vector light shifts from the tweezer polarization gradient [63] that would otherwise limit coherence of the non-clock mF states. Finally, we rotate the magnetic ﬁeld back to its-
 original conﬁguration before performing quantum circuits.
The measurements in Fig. 2b and Fig. 4d have better SPAM performance than other measurements in this paper due to suppression of previously undetected resonant leaked light that we discovered at the end of our

measurements, in addition to adding a ﬁnal 8 rounds of our previous Raman-assisted optical pumping (also using Gaussian-shaped optical pulses to suppress oﬀresonant excitation) to further improve the state preparation ﬁdelity. With leaked light managed and with these two steps of optical pumping, we achieve both low temperatures and an estimated pumping ﬁdelity of ≈ 99.7−99.8%, likely dominated by residual leaked light.
To measure in the computational basis we illuminate with a strong resonant light coupling F = 2 to the F = 3 on the D2 transition, which heats up and expels all atoms in the |1 state; the remaining atoms are imaged in |0 . We estimate the combined ﬁdelity of pushout and imaging to be ≈ 99.83%. Finally, we also have a background atomic loss of ≈ 0.25% before the circuit begins, and ≈ 0.1% after the circuit ends, dominated by a 10s vacuum lifetime.
To drive arbitrary single-qubit rotations we use a Raman laser system [28] which globally illuminates the atoms with a Raman Rabi frequency of 1 MHz. Single-qubit rotations are implemented using robust BB1 pulses [62, 64], while Z rotations are implemented by adjusting the phase in the control software. By applying sequences of random single-qubit rotations we estimate a ﬁdelity of 99.97% when sampling over a Haar-random ensemble of single-qubit rotations, implemented by a combination of two Z rot-
ations and an arbitrary BB1 pulse. This 99.97% is consistent with the Raman scattering limit at our 180 GHz detuning and therefore ﬁdelity can be improved by detuning the Raman laser further.
Rydberg excitation Extended Data Fig. 1 overviews the atomic level structure used and an example pulse sequence for running a quantum circuit, largely the same as our prior work [4]. The atoms are excited from the |F = 2, mF = 0 state to the 53S1/2 Rydberg state in a two-photon scheme with a 420-nm σ+-polarized and a 1013-nm σ−-polarized light. We are able to increase the intermediate-state detuning from our previous works, while maintaining similar or higher two-photon Rabi frequencies, in two wa-
ys. First, by operating at n = 53, we beneﬁt from 50% increase in the Rabi frequency compared to the previously used n = 70. Additionally, we upgraded our 10W 1013-nm ﬁber ampliﬁer laser to a 100W 1013-nm laser (IPG Photonics), which we operate at 20-50W with a duty cycle < 1%. Combined, this allows us to operate at the intermediate-state detuning of ∆/2π = 7.8 GHz with a Rabi frequency of Ω/2π = 4.6 MHz. For the data in Fig. 3d,e, we use the same Rabi frequency but an intermediate-state detuning -
of 6.3 GHz, which marginally increases scattering but allows us to work with lower Rydberg beam intensity.
The 1013-nm laser seed originates from a Toptica DL Pro external-cavity diode laser which is then locked to

10

and ﬁltered through a Stable Laser Systems ultra-low-

expansion cavity (Finesse of 50,000 at 1013 nm) that

then injection locks another laser diode, which then seeds

our 100W laser. Our 420-nm laser is an 840-nm TiSapph

(MSquared) which is locked (but not ﬁltered) to the same

cavity (Finesse of 30,000 at 840 nm) and then frequency

doubled with an MSquared ECD-X. For realizing the

pulses and waveform shaping for quantum gates, we use

an arbitrary waveform generator (Spectrum M4i.6631-

x8) that allows for arbitrary amplitude, frequency, and

phase control which simultaneously drives two 420-nm

AOMs (MQ240-B40A0,2-UV, AA Opto-Electronic) in a

tandem conﬁguration and maps the RF waveform onto

the 420-nm light. The 1013-nm AOM (M1377-aQ80L-

1 coated for 1013 nm, Isomet) is pulsed on for several

hundred microseconds and intensity stabilized during the

duration of the entire circuit.

The two Rydberg beams are shaped into ﬂat intensity

tophat proﬁles by SLMs in order to maximize intensity

while maintaining homogeneity across the gate region [2].

For the 20-atom, one-row data, we aim for a ﬂat 10 µm

x 10 µm beam cross section (to suppress sensitivity to

drift), and for the 60-atom, two-row data, we aim for a

ﬂat 20 µm x 10 µm region so that both rows are ho-

mogeneous. We tune beam parameters, including X and

Y positions, focus, and aberrations, to optimize homo-

geneity as measured by the diﬀerential lighshift on the

hyperﬁne qubit states. We stabilize the beam positions

using a camera and re-calibrate the position often (mul-

tiple times per day) by stepping the beam positions to

maximize the intensity at the atoms as measured by the

diﬀerential light shift on the qubit transition. We ﬁnd

that keeping the beams well-centered on the atoms is

important in our system, and that gate parameters are

highly reproducible (consistently reproducing ﬁdelities of

99.5%) as long as the beams are properly positioned.

We extract the single-photon Rabi frequencies of the

Rydberg excitation using measurements of the two-

photon Rabi frequency and the 420-nm lightshift on

the ground-Rydberg transition, taking note of the ap-

propriate Clebsch-Gordan coeﬃcients for the multiple

intermediate states. We extract Ω420 = 2π × 237 MHz and Ω1013 = 2π × 303 MHz, where we adopt a convention such that the two-photon Rabi frequency is given

by Ω = Ω420Ω1013/2∆. Note that due to the pres-

ence of multiple intermediate states, the ﬁrst-order scat-

tering

estimate

is

proportional

to

4 3

×

(Ω420/2∆)2

and

thus, from the scattering perspective, the eﬀective single-

photon Rabi frequencies are well-balanced (273 MHz vs

303 MHz).

Finally, we comment on the motivation for choosing

the principal quantum number n = 53 for the Rydberg

state. There are several eﬀects that depend on n, includ-

ing the ﬁnite Rydberg state lifetime (∝ n3 for radiative

decay, ∝ n2 for black-body decay), matrix elements

inﬂuencing the 1013-nm Rabi frequency (∝ n−3/2), in-

teraction energy (∝ n11), and sensitivity to electric ﬁelds (∝ n7). Weighing these relative beneﬁts, we work at n = 53, where Rydberg lifetime eﬀects begin to become more relevant but where the matrix element is favorable for increasing intermediate-state detuning. A technical challenge relevant to this choice is that, due to the small blockade radius, we place atoms at 2 µm separation in order to achieve strong interaction strength VRyd/2π ≈ 450 MHz. Operating at such close spacing is enabled by -
using high numerical aperture objectives (NA=0.65 from Special Optics), and allows us to pack many atoms into the entangling zone.

Parameterized entangling gates Inspired by the methods used in Ref. [8] to ﬁnd the timeoptimal gates, we use optimal control to design gates with phase proﬁles given by simple analytical formulas. We ﬁnd that this approach makes the gate experimentally robust and reproducible as small systematic oﬀsets (e.g., rise time, atom-atom separation, etc.) can often be compensated for and are captured by a slightly diﬀerent set of optimal parameters.
In this work we focus on two main gates: one with a ﬁxed amplitude and a phase proﬁle similar to the timeoptimal gate of Ref. [8], and a second one where the amplitude is also varied. We note that in the past, many schemes were proposed to implement two-qubit gates with Rydberg blockade [5, 8, 65–74], engineer robustness to errors [29, 75–83], and to perform multi-qubit gates [84–90]. The ﬁxed-amplitude gate, which we refer to as “time-optimal” since it resembles and is only 0.2% slower than the J-
andura-Pupillo gate [8], has the phase proﬁle given by

φ(t) = A cos(ωt − ϕ0) + δ0t.

(1)

This proﬁle is plotted in the left column of Fig. 1c for the parameters

A = 2π × 0.1122, ϕ0 = −0.7318,

ω = 1.0431 Ω, δ0 = 0 × Ω,

which constitutes an exact gate with time (ΩT /2π) = 1.215, i.e., slightly longer than a resonant single-atom 2π pulse. Note that this set of parameters is not unique and other parameter values can also realize an exact gate, for example at non-zero detuning δ0 as used in Extended Data Fig. 5a.
The smooth-amplitude gate has a varying phase and a varying Rabi frequency of the 420-nm laser. We used optimal control methods in a three-level atomic system to ﬁnd a gate that optimally suppresses scattering, for a ﬁxed intermediate-state detuning and 1013-nm Rabi frequency. The scattering from the intermediate state was incorporated through a non-Hermitian Hamiltonian proportional to the scattering rate (−iγe |e e|). Finally,

11

we inferred an analytical form of the phase and amplitude proﬁles which are given by

Ω420(t)/Ω1013 = Ω0 + Ω1sech[ωΩτ ]α, φ(t) = δ0 τ + B tanh(λ τ ),

where τ = t − T /2; in principle, one can also add a relative phase oﬀset similar to ϕ0 in Eq. (1) for further ﬁne-tuning. This ansatz realizes an exact CZ gate for the gate parameters,

Ω0 = 32.7403, Ω1 = −31.1404, ωΩ = 0.2668 Ω,
α = −0.1131,

B = 2π × 0.2503, λ = 0.9372 Ω, δ0 = −0.9491 Ω,

which has a duration of (ΩT /2π) = 1.207. We set the reference point such that for Ω420 = Ω1013 the system is at two-photon resonance and has a two-photon Rabi frequency Ω. This smooth-amplitude gate has advantages of stronger intermediate-state scattering suppression and reduced oﬀ-resonant coupling to other states. On the other hand, due to a larger peak Rabi frequency, this gate is more susceptible to ﬁnite-blockade eﬀects. The error budget for both gates can be found in Extended Data Fig. 4.
Extending beyond two-qubit gates, we ﬁnd that a slightly more general ansatz allows us to implement a nearly time-optimal three-qubit CCZ gate with the phase proﬁle given by

φ(t) = A1 sin(ω1τ ) + A2 sin(ω2τ ) + B tanh(λτ ) + δ0 τ,

where the Rabi frequency is kept constant and the parameters are,

A1 = 2π × 2.1460, A2 = 2π × −0.0719, B = 2π × −0.6432, δ0 = −1.3646 Ω,

ω1 = 0.2101 Ω, ω2 = 1.8957 Ω, λ = 0.6941Ω,

which results in an exact gate with duration (ΩT /2π) = 1.751. Finally, we note that the same methods can be directly extended to the design of CPHASE(θ) and CCPHASE(θ) gates, which is important in the context of digital quantum simulation [16]. In Extended Data Fig. 5b-c, we show how the two-qubit gate duration scales with the phase θ.

Dark states in two-photon Rydberg gates In this section we describe the physics associated with the three-level system present in the two-photon transition to the Rydberg state and derive how the Rydberg population can be realized through either the dark or bright states. The basic intuition can be developed at

the single-particle level, where the system is described by the three-level Hamiltonian in the {|1 , |e , |r } basis,

0

Ωb 2

0

H

=

Ωb
2

−∆

Ωr 2



,

(2)

0

Ωr 2

−δ

where we use symbols Ωb := Ω420 and Ωr := Ω1013 in this section for clarity of expressions. We also assume that the amplitude and phase of the red 1013-nm laser are kept constant at all times and the blue 420-nm phase is captured by the time-dependent two-photon detuning δ := δ(t) ∼ −φ (t).
At large intermediate detunings (|∆| |δ|, |Ωb/r|), this system is conveniently described in the dark-state basis (as summarized in Extended Data Fig. 2a-b) formed by the eigenstates of (2) at the two-photon resonance (δ = 0), which to the leading order in Ωr/∆ is,

|D = − √ 1 |1 + √ α |r ,

1 + α2

√ 1 + α2

|B = √ α |1 + 1 + α2

1

+ α2Ωr 2∆

|e

+ √ 1 |r 1 + α2

,

|E

=

−

αΩr 2∆

|1

+ |e

−

Ωr 2∆

|r

,

where α = Ωb/Ωr. Note that the “dark state” |D has no contribution from the intermediate state, the “bright state” |B populates the intermediate state ∝ 1/∆2, and |E is composed essentially entirely from |e .
For our purposes the initial state is always |1 , which is subsequently dressed by the blue light to |˜1 . This is because the amplitude rise time of the blue laser to its initial value of Ωb(0) is at the timescale of 10 ns, which is much slower than the adiabaticity limit set by ∆, and much faster than the two-photon Rabi frequency relevant for populating the Rydberg state; thus, the initial state indeed corresponds to

|˜1

= |1

+

αΩr 2∆

|e

=√ α

1 |B − √

|D + O(∆−3) |E ,

1 + α2

1 + α2

which is well supported on the {|D , |B } states alone. Moreover, the excited state |E is detuned from the other two by ∆, and all direct couplings to it are on the order of Ωr/∆; thus any population transfer out of the {|D , |B } manifold will be suppressed by (Ωrδ)2/∆4, and the subsequent evolution of state |˜1 is described by an eﬀective two-level system (Extended Data Fig. 2b). In this picture, the energy splitting is set by the AC stark shift (diagonal terms) and the eﬀective oﬀ-diagonal coup-
ling is given by a combination of the two-photon detuning and diabatic terms (oﬀ-diagonal terms). Crucially, the Rydberg state population can be realized in many inequivalent ways; for example, for α = 1, states of the form

√

√

1 − β |B + β |D have the same Rydberg population

for β and β → 1 − β (where β ∈ [0, 1]) despite very dif-

ferent intermediate state contributions.

First, consider the case of the parameterized time-

optimal gate where the blue Rabi frequency is kept con-

stant throughout the duration of the gate (α(t) = 1), up

to the ﬁnite r√ise and fall times. The initial state is simply (|D − |B )/ 2 and the Hamiltonian is equivalent to

H˜to =

0 −δ/2

−δ/2

Ω2r 2∆

,

where the magnetic ﬁeld sign is decided by ∆, and the phase of the Rabi frequency is given by the sign of the two-photon detuning δ. The time evolution under this Hamiltonian (which corresponds to driving the twophoton transition) can be solved exactly for ﬁxed δ, and the population in the dark state is

√

PD

=

1 2

Ω2r sin2

t 4δ 2 ∆2 +Ω4r
4∆

− δ∆

2δ2∆2 + Ω4r

,

which can go above or below 1/2 depending on the relative sign of the detunings. More precisely, the Rydberg population is realized predominantly via the dark state when δ∆ < 0 (PD > 1/2), i.e., when the intermediatestate detuning ∆ and the two-photon detuning δ have opposite signs; for a time-dependent detuning the relevant sign is the one in the beginning of the pulse. In Extended Data Fig. 2c, we plot the intermediate-state population and the Bloch sphere trajectories for the time-optimal gate -
at two diﬀerent signs of the two-photon detuning δ. As expected, one of the trajectories realizes the Rydberg population through the dark state and as a result minimizes the intermediate-state population, leading to suppressed scattering.
The remaining scattering comes mostly from the large admixture of the bright state in the initial state and can be further reduced by utilizing a smooth amplitude proﬁle, which starts at low blue Rabi frequency (α 1) and only later increases to larger values, as is the case in gate schemes based on the adiabatic passage [67]. Note that operating at a ﬁxed lower α does not further reduce scattering since a larger admixture of the bright state is necessary to realize the same integrated Rydberg popu-
lation as before. In Extended Data Fig. 2d, we show the intermediate-state population and the effective Bloch sphere trajectory for the smooth-amplitude gate introduced in the previous section. This gate occupies the instantaneous dark state for a majority of its execution time, admixing only as much bright state as is necessary to realize the required Rydberg population. We ﬁnd numerically that the degree of scattering suppression depends on the speed relative to the time-optimal gate (assuming ﬁ-
xed 1013-nm Rabi frequency): scattering is

12
suppressed by a factor of 1.2 (relative to the time-optimal gate) if the two gates take the same time, and by a factor of roughly 2.5 if the smooth-amplitude gate is twice as long as the time-optimal gate. This tunability is useful for choosing a gate based on the dominant error source: a slower gate could be more beneﬁcial when scattering dominates while a faster gate can be used when T2∗ or Rydberg decay is the main source of errors.
We note that despite the presence of multiple intermediate states (Extended Data Figs. 1 and 3a) which are at slightly diﬀerent detunings and couple with diﬀerent Rabi frequencies, the dark-state picture remains valid. We ﬁnd this is the case numerically and note the intermediate-state population plots in Extended Data Fig. 2c-d include contributions from all intermediate states in a numerical model realistic for 87Rb.
Simulating two-qubit gate error sources The level diagram in Extended Data Fig. 3a summarizes the atomic level structure used for numerical modeling, as well as the assumed scattering rates, lifetimes, branching ratios, Rabi frequencies, and detunings. We model scattering and Rydberg lifetime by performing a full density-matrix simulation of the two atoms with the 8 levels depicted in Extended Data Fig. 3a (including 3 intermediate states). Our modeling also explicitly includes the coupling to the-
 other (mJ = − 1/2) Rydberg state, which is 24 MHz lower in energy and is driven with a Rabi frequency suppressed by a factor of 3 (due to Clebsch-Gordan coeﬃcients). For the gate we assume approximately 20 ns min-max rise/fall times of our AOM pulse proﬁle (in a Blackman proﬁle), which has signiﬁcant implications for the oﬀ-resonant coupling to the adjacent Rydberg state, in terms of whether it is adiabatically “dressed” or diabatically occupied. Since the impact of the other Rydberg state on the-
 gate ﬁdelity depends on the details of the pulse power proﬁle and degree of calibration, we report a range of values that is reasonable for the assumptions mentioned above.
Finite temperature is also assumed in our error modeling, where for our given temperature we calculate the position spread of the atom in a trap, and the corresponding ﬂuctuation in interaction strength from the distance-dependent blockade interaction VRyd ∝ r−6. We note that ﬁnite temperature can also contribute to single-qubit dephasing through both velocity spread and photon recoil [91], but these eﬀects are already encompassed by our single-qubit ground-Rydberg T2∗ measurements. The T2∗ can al-
so have contributions from other phenomena such as electric ﬁeld ﬂuctuations and ﬂuctuations in the 1013-nm light shift (which has a differential light shift of ≈ 20 MHz on the ground-Rydberg transition), and so for our simulations we simply use the measured T2∗ = 3 µs assuming a Gaussian distribution of detunings.

13

Projecting path to 99.9%, and error breakdown We can also use our detailed microscopic error modeling, which reproduces similar ﬁdelities as the measured 99.5%, to project future performance. To reach 99.9% ﬁdelity, the sum of the errors in Extended Data Fig. 4 needs to be suppressed to below 0.1%, which can be achieved for example by going 2x further detuned, having a 3x longer Rydberg lifetime (for instance, exciting to a higher n state), 2x longer T2∗ (note that dephasing error scales as ∝ 1/(Ω-
T2∗)2), and applying a larger magnetic ﬁeld to suppress coupling to the other mJ state (or using the smooth-amplitude pulse). An alternative approach could be going to 3x higher Rabi frequency (again while suppressing coupling to the other mJ state) and 2x larger detuning.
Separately, this microscopic error analysis can also be used to analyze the type of error produced, i.e. whether it is a Pauli (X,Y,Z) error, atom loss (AL), or leakage (LG) to other mF states. Such an understanding is particularly important for quantum error correction [37, 47] as knowing the noise structure can be used to enhance the performance of error-correcting schemes. Our present modeling suggests that a majority of errors are Z-type and loss/leakage-type errors, as previously highlighted -
in Ref. [37]. If atom loss is directly detected, these errors would constitute a so-called erasure error [47], and moreover, atom loss in this case is in fact a biased erasure error since almost all of it originates from state |1 , as pointed out and developed in Ref. [92]. In Extended Data Fig. 4, we summarize how each error source breaks down into the 5 error types mentioned above and ﬁnd that only the scattering and Rydberg decay errors can lead to X and Y Pauli errors. For simplicity, we estim-
ate the eﬀective single-particle error channel; i.e., we compute the process matrix for the two-qubit gate and then trace out one of the qubits. The full process matrix can be used to study more complicated properties of this Pauli + loss/leakage noise model, such as correlations.
Gate calibration and benchmarking We calibrate the gate using the global randomized benchmarking method shown in Fig. 3. In Extended Data Fig. 6, we show an example sequential optimization of CZ gate parameters for the time-optimal gate and smooth-amplitude gate, leading up to the measurements in Fig. 3b. Once found, these gate parameters are empirically optimal for all the other benchmarking methods such as the Bell state measurements in Fig. 3, and are consistent from day to day.
The qubits additionally pick up a global single-particle phase during the gate, which we cancel here using global X gates between pairs of CZ gates for simplicity. For many applications, such as quantum error correction, our gates are naturally used in this conﬁguration (as was done for the quantum circuits implemented in Ref. [4]). We

also further calibrate and benchmark the CZ gate without the X gate, by performing randomized benchmarking composed of repeated application of CZ gates and random single-qubit rotations, as shown in Extended Data Fig. 7a. Here the ﬁnal several CZ gates and random rotations are calculated to return the qubit pair from the resulting entangled state back to the initial product state. We perform a single-qubit Z rotation after each CZ gate to compensate for the accumulated single-particle phase, which-
 we calibrate as simply another parameter of the gate to scan and optimize. In addition to calibrating this single-qubit Z rotation, this circuit additionally benchmarks a gate ﬁdelity of 99.48(2)% on 20 atoms. To measure the raw Bell state data in Fig. 2b, we utilized both the CZ gate calibration via the ﬁrst method of global randomized benchmarking and this single-particle phase calibration, as two independent calibration stages.
We note that all of our randomized benchmarking methods utilize only global rotations for simplicity. The symmetry introduced by global rotations makes us less sensitive to certain types of errors [93], SWAP being an extreme example, which we expect to be negligible. Nonetheless, since the atoms are identical and placed very close together, there is a large degree of symmetry between the two qubits and we expect this global benchmarking procedure to faithfully capture our gate ﬁdelity, which we co-
nﬁrm with numerical simulations. This is further conﬁrmed by the fact that the experimentally extracted ﬁdelity is consistent between this method and the Bell state measurement. Quantitatively, in Extended Data Fig. 3e, we simulate all the benchmarking methods, including the full randomized benchmarking protocol, using the microscopic error model developed in this work. We ﬁnd that all methods give consistent results, with the Bell state ﬁdelity lower-bounding the other curves.
Here we describe some experimental procedures used while taking data. First, for the benchmarking curves involving varying numbers of CZ gates, we take data in a cyclic manner to avoid systematic biases that could be introduced by experimental drift (for example, alternating in the sequence of 20,0,16,4,12, and 8 CZ gates for the data taken in Fig. 3). We perform multiple rounds of this cyclic sequence in one continuous stretch of time (over roughly a few hours for each plot in Figs. 2-3). For eac-
h gate number we average over 300 sets of random rotations.
To extract a gate ﬁdelity, we ﬁt our data to exponential decays. We note that since we are mostly in the linear regime of the exponential curve, adding an oﬀset to the ﬁt (and then rescaling the ﬁtted exponent, as done in some randomized benchmarking works) has a negligible eﬀect on the extracted ﬁdelity, and so we ﬁt to an exponential decay without an oﬀset.
Bell state ﬁdelity Here we outline the method used for the Bell state data

14

in this work. We measure the Bell state ﬁdelity as the average of coherences and populations [5]. The coherence is extracted by measuring the amplitude of parity oscillations, using the circuit in Fig. 2c. The populations are calculated as the sum of the |00 and |11 states, which we correct for additional atom loss as described below. The Bell state populations can be overestimated due to atom loss contributing to the perceived detection of state |11 [5], since loss shows up identically as |1 in o-
ur state detection procedure. To account for this, here we measure the atom loss probability when applying the sequence of gates (by turning oﬀ the pushout of state |1 for state discrimination), to ﬁnd the extra contribution of atom loss to the Bell state population. To perform this loss subtraction, we subtract the observed |11 (i.e., observed loss of both atoms) population during the loss measurement directly from the measured populations, as well as measuring the loss-per-atom-per-gate which ca-
n also contribute to state |11 by converting |01 and |10 to |11 . This loss subtraction is performed for Fig. 2d of the main text. We emphasize that this correction strictly lowers the measured gate ﬁdelity (without applying this loss subtraction, the measured CZ gate ﬁdelity on the raw Bell state ﬁdelity data is extracted to be 99.57(4)%).
We next evaluate a SPAM-corrected Bell state ﬁdelity from the measured raw Bell state ﬁdelity of 98.0(2)% after a single gate in Fig. 2b. To extract a SPAMcorrected Bell state ﬁdelity, we ﬁrst measure relevant SPAM errors. In particular, we measure a population of 99.6(1)% in state |0 when we try to prepare into |0 , and likewise, a population of 99.4(1)% in state |1 after state preparation into |1 . These measurements include additional eﬀects from loss and imaging/pushout ﬁdelity. Speciﬁcally, t-
here is a 0.35(5)% probability that an atom is lost during the sequence, and the gate itself causes 0.17% additional loss on top of this baseline loss. Our pushout ﬁdelity of 99.83(1)% aﬀects the measurement ﬁdelity of |1 which we additionally correct for. From these measurements, we estimate the amount of population leaked into other mF levels during state preparation, as well as the probability of atom loss both before and after the circuit. From these values, we follow the method described in R-
ef. [5] to extract a SPAM-corrected Bell state ﬁdelity of 99.4(4)%.
Analysis of correlations between gate sites Here we further analyze our data to characterize whether gate errors across the array are correlated. We study the 20-atom and 60-atom global randomized benchmarking data from Fig. 3, and consider the distribution of the number of errors that occur in each experimental shot, where an error is deﬁned as whenever a qubit pair does not return to the initial |00 product state. In Extended Data Fig. 8a,c, we plot the number of errors occurring in each shot as-
 a function of number of CZ gates applied, where the mean number of errors grows due to the 0.5%

error per CZ gate. We compare our data (bottom) with a model consisting of a Poissonian distribution of errors centered at the experimental mean (top). We ﬁnd that the Poisson distribution model approximates our data, and large-scale correlated errors are not common in our system.
To analyze more quantitatively in a single plot, we average the data for all numbers of gates and plot the resulting distribution in Extended Data Fig. 8b,d. We ﬁnd that higher weight errors for both the 20 atoms and 60 atoms data are greatly suppressed. More quantitatively, we compare our data to the average of the Poissonian distributions plotted in Extended Data Fig. 8a,c, and ﬁnd small deviation from the Poisson distribution. We ﬁnd this data is better described by a model in which the CZ gate-
 ﬁdelity is sampled from a Gaussian distribution in each shot (which would arise e.g. from global shot-toshot ﬂuctuations in detuning, captured by our T2∗).
In Extended Data Fig. 9a-b, we plot the covariance matrix between gate sites for the return to the initial state P|00 , after 0 CZ gates and after 20 CZ gates, qualitatively observing evidence of small positive covariance between nearby gate sites. In particular, Extended Data Fig. 9b,d shows the growth of covariance between neighboring gate sites as a function of the number of CZ gates applied. These observations are consistent with known physical eﬀects related to our error budget, namely Rydber-
g lifetime and T2∗. For example, decay of Rydberg atoms to nearby P states during the gate can cause detuning shifts due to strong long-range interactions between S and P Rydberg states (decaying as 1/R3), as well as hopping of the P state to nearby gate sites. Additionally, ﬂuctuations in Rydberg 1013-nm beam intensity can give rise to shot-to-shot ﬂuctuations in gate ﬁdelity with a spatial dependence. Classical Monte Carlo simulations of these two phenomena (not plotted here) reveal that both er-
ror sources can result in nonzero covariance, which appears to be described by quadratic growth for a small number of gates but linear asymptotically. We note that the crosstalk between gate sites, on the scale of 10 kHz, should be negligible.
This measurement of covariance after 20 gates is a highly sensitive probe to small correlations between gate sites building up over the course of the circuit. After one applied gate, this covariance appears to be smaller than other main error sources, so these correlations will have little eﬀect for quantum circuits in which atoms are involved in gates not just at a single gate site but across the entire entangling zone. Moreover, when running quantum circuits using atom transport [4], the ∼ 100 µ-
s delay between subsequent gates would result in leftover Rydberg states being expelled from the array, completely suppressing the eﬀect from Rydberg decay described above.

15

CCZ gate design To ﬁnd time-optimal gates for the multi-qubit controlled phase gates, such as the CCZ gate, we utilize the optimal control methods similar to Ref. [8]. The gates in Ref. [8] are found by looking for two-qubit diagonal gates up to global single-qubit Z rotations. However, for more than two qubits there are several distinct ways of realizing the controlled-Z gates which are not connected by a Z rotation but rather by a general single-qubit rotation, and these various gate realization-
s can be diﬀerent. We use the approach where the controlled phase ﬂip is applied to the |000 state to ﬁnd multi-qubit controlled Z gates for larger number of qubits; we present the obtained times in Fig. 4e and Extended Data Fig. 10a. In Extended Data Fig. 10b, we show the time-optimal pulse proﬁles of multi-qubit control-Z gates up to the 6-qubit CCCCCZ. Finally, we note that an analytical ansatz (deﬁned in the section dedicated to parameterized gates) similar to that used for the CZ gate allows -
us to parameterize the three-qubit controlled-Z gate with only a marginal decrease in speed (ΩT /2π = 1.75). In fact, we ﬁnd that this ansatz can also realize the CCCZ gate and we expect simple generalizations to be capable of realizing these gates for even larger numbers of qubits.
GHZ states To characterize the CCZ gate experimentally, we create a GHZ state using the circuit shown in Extended Data Fig. 10c. In Extended Data Fig. 10d, we generate GHZ states after application of two CCZ gates, with populations of 92.9(3)% and parity contrast of 89(1)%, giving a raw GHZ state ﬁdelity of 90.9(6)% (without any loss subtraction). For Fig. 4, we calibrate the gate by repeatedly applying the CCZ-π-CCZ part of the circuit such that after 6 and 10 CCZ gates we generate GHZ states wit-
h reduced ﬁdelity, and we observe a 2.1(2)% reduction in the raw GHZ ﬁdelity as a function of number of CCZ gates applied. For the data in Fig. 4D, we operate at 7.8 GHz intermediate-state detuning and 3.9 MHz Rabi frequency.
Data Availability The data that supports the ﬁndings of this study are available from the corresponding author on reasonable request.

Acknowledgements We thank S. Hollerith for discussions regarding error contributions from motional states and M. Cain for insights regarding atomic dark states. We further thank M. Abobeih, H. Bernien, N.-C. Chiu, S. Geier, J. Guo, A. Keesling, H. Pichler, and P. Stroganov for useful discussions, technical support, and careful reading of the manuscript. We also thank QuEra Computing and IPG Photonics, and in particular N. Gemelke, M.-G. Hu, M. Kwon, and A. Lukin for support in the development and -
testing of the high-power 1013-nm Rydberg laser. We acknowledge ﬁnancial support from the US Department of Energy (DOE Quantum Systems Accelerator Center, contract number 7568717 and DE-SC0021013), the Center for Ultracold Atoms, the National Science Foundation, the Army Research Oﬃce MURI (grant number W911NF-20-10082), and the DARPA ONISQ program (grant number W911NF2010021). S.J.E. acknowledges support from the National Defense Science and Engineering Graduate (NDSEG) fellowship. D.B. acknowled-
ges support from the NSF Graduate Research Fellowship Program (grant DGE1745303) and The Fannie and John Hertz Foundation. T.M. acknowledges support from the Harvard Quantum Initiative Postdoctoral Fellowship in Science and Engineering. N.M. acknowledges support by the Department of Energy Computational Science Graduate Fellowship under award number DE-SC0021110.
Author contributions S.J.E., D.B., M.K., S.E., T.M., H.Z., S.H.L., and A.A.G. contributed to the building of the experimental setup, performed the measurements, and analyzed the data. M.K. developed two-qubit gate schemes and performed theoretical analysis. N.M. and M.K. developed multi-qubit gate schemes. T.T.W., H.L., and G.S. contributed to initial developments and insights into gate error sources. All work was supervised by M.G., V.V., and M.D.L. All authors discussed the results and contribut-
ed to the manuscript.
Competing interests: M.G., V.V., and M.D.L. are co-founders and shareholders and H.Z. is an employee of QuEra Computing.
Correspondence and requests for materials should be addressed to M.G., V.V., and M.D.L.

16

a

r mJ = +1/2

53S1/2
(Rydberg)

°B/2¼ = 24 MHz mJ = -1/2 ¾-

6P3/2

1013 nm

7.8 GHz

5P1/2

420 nm ¾+

180 GHz

5S1/2

6.8 GHz

¾+ 795 nm
1 = F=2,mF=0
0 = F=1,mF=0

°B/2¼ = 24 MHz

b

X(¼/2) X(¼/2)

X(¼/4) X(¼/4)

BB1 (¼/2) Raman (795 nm)
Rydberg (420 nm)

BB1 (¼/4) CZ

Rydberg (1013 nm)

Trap light (850 nm)

Pushout 1 , image (780 nm)

Extended Data Fig. 1. Atomic level diagram and pulse sequence. a, Level diagram showing key levels of 87Rb used in our quantum circuits. The clock states, |0 , |1 are the qubit states used in this work. Excitation to the Rydberg state between |1 and |r is carried out by a two-photon transition driven by 420-nm and 1013-nm lasers. Single-qubit rotations are realized with an amplitude-modulated 795-nm laser that drives Raman rotations between the mF = 0 clock states. A DC magnetic ﬁeld of 8.5 G is a-
pplied throughout this work. The Rydberg detuning signs and polarization signs are carefully selected for various optimizations: for suppressing 420-induced diﬀerential light shift between |0 and |1 , we are red-detuned of 6P3/2 transition; for utilizing dark-state physics (nominally the phase proﬁle corresponds to a certain sign of two-photon detuning) we thereby choose positive two-photon detuning; which, in turn then suppresses coupling to mJ = −1/2 by being primarily on the upper-side of mJ = -
+1/2; and ﬁnally, suppressing 1013 light shift similarly prefers being at this single-photon detuning sign since there is a magic wavelength 1 GHz red-detuned of 6P3/2 for the |1 → 53S1/2 transition [94]. Two downsides of this detuning choice are that this choice of 420-nm polarization and detuning causes a vector light shift in the hyperﬁne ground-state manifold that causes the mF levels to be pushed closer together, as opposed to further apart, which could exacerbate eﬀects arising from 420-indu-
ced vector light shifts coupling adjacent mF states in the ground state manifold (although negligible here), and the other downside is that the mJ = −1/2 Rydberg pair states are closer detuned to the two-photon excitation, and so we require a larger interaction strength to suppress their excitation, though the matrix element to these states is smaller. b, Example pulse sequence, here for making a |Φ+ Bell state between two qubits. Traps are pulsed oﬀ for a few hundred ns during the Rydberg gate to-
 avoid both anti-trapping of the Rydberg state and inhomogeneous light shifts that broaden the transition, and the ground state atoms are then recaptured for roughly ∼ 3µs between consecutive gate applications.

17

Intermediate state population Intermediate state population

a ± ¢
b

c 6 1e-4 Time-optimal gate

±¢>0

4

¢

2

±¢<0

0

0

100

200

±

Time (ns)

d 6 1e-4 Smooth-amplitude gate

4

2

0

0

100

200

Time (ns)

Extended Data Fig. 2. Dark state physics in two-photon Rydberg gates. a, In the far-detuned limit the three-level system can be eﬀectively described as a two-level system with a “dark” state |D and a “bright” state |B . The population in the excited state |E is suppressed by a factor ∝ ∆−4 and does not participate in system dynamics. b, The Hamiltonian of the bare atomic system and the eﬀective two-level system, where α is the (time-dependent) ratio between the blue and red Rabi frequencies and α˙-
 is its time derivative. c, Intermediate-state population during the parameterized time-optimal gate in the dark and bright conﬁgurations together with their Bloch sphere trajectories in the {|D , |B } basis. d, Intermediate-state population during the smooth-amplitude gate and its Bloch sphere trajectory in the instantaneous {|D , |B } basis. The simulation parameters correspond to the ones mentioned in Extended Data Figs. 3a and 4.

a

b

53S1/2
(Rydberg)

24 MHz

mJ = -1/2

r1 mJ = +1/2
r2 Ω1013 = 2¼ £ 303 MHz

6P3/2

Ω1013/3

87 MHz

51 MHz

c

7.8 GHz

L Leakage / loss
state 1
5S1/2
0

Ω420 = 2¼ £ 237 MHz

1013 light shift

d

20 MHz

6.8 GHz

R1 ¼ R2 ¼

Rf

R1 ¼ R2 ¼

Rf

R1

R2

Rf

R1

R2

Rf

C1

C2

Cf

e

Global (echo) benchmarking (FCZ = 99.51%)

Global benchmarking

(FCZ = 99.49%)

Full benchmarking

(FCZ = 99.48%)

Bell state fidelity

(FCZ = 99.45%)

1.00

Fidelity measure

0.95

0.90

5

10

15

Number of gates

Extended Data Fig. 3. Atomic physics error level diagram and numerical comparison of benchmarking methods. a, Level diagram shows the eight states assumed in the simulation. We assume a 88 µs Rydberg state lifetime (based on measured T1 with 1013-nm scattering lifetime subtracted), and a 110 ns lifetime for the intermediate states. We assume the following branching ratios for the intermediate states [95]: ηe→L = 0.6142, ηe→1 = 0.2504, ηe→0 = 0.1354, and the following ones for the Rydberg states [9-
6]: ηr→L = 0.894, ηr→1 = 0.053, ηr→0 = 0.053. We use the branching ratios between diﬀerent channels of intermediate-state scattering as reported in Refs. [95], and we additionally assume a simpliﬁed model in which all indirect paths (through 4D and 6S) populate the ground-state manifold uniformly. The Rydberg lifetime has both radiative decay (170 µs) and black-body decay (128 µs) components, which we obtain by re-scaling the values in Ref. [96] to n = 53. The microwave component results purely in-
 atom loss and we assume that the radiative decay populates the ground-state manifold uniformly. We note that a more accurate treatment of the decay channels [37] could increase error modeling precision in future work. b, Benchmarking of the CZ-π-CZ sequence with global random rotations, which is insensitive to the single-particle phase. c, Benchmarking a standalone CZ gate with global random rotations, which enables separate calibration of the single-particle phase. d, The usual interleaved rando-
mized benchmarking method utilizing random two-qubit Cliﬀord gates (not performed in this work). e, Numerical simulation of the presented benchmarking methods, and the Bell-state-preparation method, utilizing the realistic error model developed in this work. All approaches give consistent results, with the Bell-state ﬁdelity measurement lower-bounding the other curves.

18

Error source

Scattering* |1

Scattering |0

Rydberg T1 = 88 µs Rydberg T2∗ = 3 µs
Position ﬂuct.

Rydberg

mJ

=−

1 2

Total ﬁdelity

Time optimal 0.103% / 0.043%
0.019% 0.113% 0.134% 0.012% 0.06 - 0.15% 99.53 - 99.62%

Smooth amplitude 0.036% 0.025% 0.085% 0.089% 0.054% 0.01% 99.70%

Error type X, Y, Z, LG, AL** 6%, 6%, 25%, 47%, 15% 7%, 7%, 14%, 62%, 10% 2%, 2%, 6%, 23%, 67% 0%, 0%, 75%, 0%, 25% 0%, 0%, 96%, 0%, 4%
2%, 2%, 41%, 17%, 38%

Extended Data Fig. 4. Simulated error budget for two-qubit CZ gates. Simulations were performed at an intermediatestate detuning of ∆/2π = 7.8 GHz and a two-photon Rabi frequency Ω/2π = 4.6 MHz. (*) The scattering error for two detuning signs (bright/dark). The total ﬁdelity values assume the correct (dark) detuning choice. (**) LG — leakage out of the qubit manifold to other mF states. AL — atom loss from population left in the Rydberg state.

Relative parameter value Gate time ( T/2¼)

a

1.2

1.0

0.8

0.6

0.4

A

±0

!

'0

0

20

40

Rise time (ns)

b
1.0

0.5

0.0

0.0

0.5

1.0

Conditional phase (µ/2¼)

c
1.0

1.6£(µ/2¼)0.23

0.6

0.4

0.3

10−2

100

Conditional phase (µ/2¼)

Extended Data Fig. 5. Robust and versatile two-qubit gates. a, Robustness to experimental oﬀsets. For some systematic experimental oﬀsets, such as ﬁnite rise time of the 420-nm Rydberg laser pulse, an exact CZ gate can still be found. The relative values of gate parameters for the time-optimal gate are plotted as a function of pulse rise time. For no rise time, the parameter values used here are: A/2π = 0.0988, ω/Ω = 1.3629, ϕ0 = −2.6082, and δ0/Ω = −0.0187. b, Duration of a controlled-phase gate -
CPHASE(θ). The CZ gate (θ = π) is the longest in this gate family. Since faster gates are expected to have higher ﬁdelity, an average CPHASE gate should perform even better than the CZ reported in this work, which is an exciting perspective for near-term digital simulation. c, Plotting on a log-log plot, we see that for small angles θ, the gate time decreases with an approximate power law ΩT (θ)/2π = 1.6 × (θ/2π)0.23. This suggests that applying very small phases can be costly and should be taken -
into account when designing digital simulation schemes. While these small-angle gates are time-optimal when applying a single, ﬁxed-amplitude pulse, diﬀerent approaches could perform better. Exploring other exact and approximate gate schemes, such as Rydberg dressing and a detuned 2π-pulse, in the small-angle regime is an interesting direction for future work.

a Time-optimal
0.9

A/2¼ = 0.113
0.9

T = 275 ns
0.9

!/ = 1.038
0.9

Detuning = -145 kHz

19

±0/ = -0.032
0.9

'0 = -0.078

P00 after 20 gates

P00 after 20 gates

P00 after 20 gates

P00 after 20 gates

P00 after 20 gates

0.8

0.8

0.8

0.8

0.8

0.7

0.7

0.7

0.7

0.11
A/2¼
b Smooth-amplitude

0.12
±0/

= 1.008

270

280

T (ns)

1.02 1.04 !/

!/ = 0.957

1.06

-0.11

0.0 ±0/

A/2¼ = -0.225

0.9

0.9

0.9

0.9

0.7

-0.085 -0.080 -0.075 -0.070 '0
® = -0.113

0.9

= 4.56

P00 after 20 gates

P00 after 20 gates

P00 after 20 gates

P00 after 20 gates

P00 after 20 gates

0.8

0.8

0.8

0.8

0.8

0.7 0.95

1.00 ±0/

1.05

0.7
0.925 0.950 0.975 !/

0.7

-0.25

-0.20

A/2¼

0.7 -0.5

0.0 ®

0.7 4.25 4.50 4.75

Extended Data Fig. 6. Empirical optimization of two-qubit gate ﬁdelity. a, Calibrating gate parameters for the time-optimal gate, indicating the chronological sequence of calibrations performed prior to measurement in Fig. 3b. We scan individual gate parameters and measure the probability of return to the initial state after application of 20 entangling gates. b, Analogous calibration of gate parameters for the smooth-amplitude gate, which we performed in the sequence shown prior to the smooth-amp-
litude measurement in Fig. 3b. Additional calibration of other gate parameters was performed before these measurements.

a

NCZ ¡ 4

20¡NCZ

( Rrand Rrand

)Z(ϕ)
Z(ϕ)

Rf1 Rf1

Z(ϕ) Rf2 Z(ϕ) Rf2

Z(ϕ) Rf3 Z(ϕ) Rf3

Z(ϕ) Rf4 Z(ϕ) Rf4

( ) Z(ϕ)
Z(ϕ)

Rrand Rrand

Rf5 Rf5

Pj00®
P00 after 20 gates

b

0.93

0.8

0.7

0.89

FCZ = 99.48(2)%

0.6 0.18 0.20 0.22 Single particle phase / 2¼

0.85 20 atoms, time-optimal gate

0

4

8

12

16

20

Number of CZ gates

Extended Data Fig. 7. CZ gate single-particle phase calibration and benchmarking. a, Digital circuit for global randomized benchmarking method used to calibrate single-particle phase, where a Z rotation can be performed after each CZ gate to compensate for the acquired phase. Rrand are single-qubit rotations sampled from a Haar-random distribution, and the 5 rotations Rf are computed to return the atom pair to the initial product state in the absence of gate errors. For the 0 CZ gates point, 20 ra-
ndom rotations are applied, as well as a ﬁnal rotation precomputed to return population to the initial state. b, Experimental data used for calibrating the single-particle phase by optimizing the return probability P|00 after 20 CZ gates (inset). For the optimal choice of φ, we extract a 99.48(2)% CZ gate ﬁdelity, ﬁtting to an exponential decay.

20

20-atom data

Number of gates

a

0

5

10

15

0

5

10

15

Poisson 10-1

Data

10-2

0

5

10

Number of errors in a shot

60-atom data

Number of gates

c

0

5

10

15

0 5 10 15

Poisson 10-1
Data 10-2

0 10 20 30 Number of errors in a shot

Probability

100 b
10-1
10-2
10-3
10-4
10-5
10-6 0

100

d

10-1

Probability

10-2

10-3

10-4

10-5

10-6 0

Poisson Gaussian-sampled fidelities Data

5

10

Number of errors in a shot

Poisson Gaussian-sampled fidelities Data

10

20

30

Number of errors in a shot

Extended Data Fig. 8. Correlated errors in experimental shots. a, Distribution of errors in each experimental shot as a function of the number of CZ gates applied for the 20-atom data in Fig. 3, showing qualitative agreement with a Poisson distribution centered at the experimental mean for number of errors in a shot. b, Histogram of the number of errors in a shot, averaging over all numbers of gates for the 20-atom data. We compare to one model assuming a Poissonian distribution of errors about th-
e mean, ﬁnding some deviation from our data. In a second model, we consider that in each shot there is a slightly diﬀerent gate ﬁdelity, sampled from a Gaussian distribution with a mean of 99.54% and standard deviation of 0.3%. This second model appears to better capture our data. c, Repeating the analysis for the 60-atom data in Fig. 3, we notably ﬁnd no shot (out of the 5053 total repetitions) with 18 or more errors out of the 30 gate sites. Again, the data is qualitatively similar to a Poisson -
distribution model. d, Averaging over the 60-atom data for all numbers of gates, we ﬁnd again a small quantitative deviation between the data and a model with a Poisson distribution of errors in each shot. The data appears to be better described by a model where in each shot, we sample ﬁdelities from a Gaussian distribution with a mean of 99.5% and a standard deviation of 0.3%.

21

20-atom data

a

0 gates

0

Site 2 4

8

0

4

Site 1

0.08

0.07

0.06

0.05

0.04

0.03

0.02

0.01

8

0.00

Covariance

20 gates

0.14

0.12

0

0.10

0.08 4
0.06

0.04 8
0.02

0

4

8

0.00

Covariance

60-atom data

c

0 gates

0

10
Site 2
20

0

10

20

Site 1

0.10 0
0.08

0.06

10

0.04

20

0.02 0
0.00
Covariance

20 gates

0.14

0.12

0.10

0.08

0.06

0.04

0.02

10

20

0.00

Covariance

b 0.02
0.01

Neighbor Next neighbor Next next neighbor

Covariance

0.00
0 4 8 12 16 20 Number of CZ gates

d 0.02 0.01

Neighbor Next neighbor Next next neighbor

Covariance

0.00 0

4 8 12 16 20 Number of CZ gates

Extended Data Fig. 9. Correlations between gate sites. a, Covariance matrices for the 20-atom data in Fig. 3b after 0 gates and 20 gates, where local correlations appear after 20 gates. b, Covariance averaged over all neighbors, next nearest neighbors, and next next nearest neighbors, as a function of number of CZ gates applied. As a guide to the eye, data is ﬁt to quadratic curves. c, Covariance matrices for 60-atom data in Fig. 3d for 0 gates and 20 gates. d, Plotting covariance for neighboring -
sites for the 60-atom data. Once again, the covariance between nearby sites exhibits small growth throughout the 20 CZ gates applied, in particular for the nearest neighbor sites.

Gate time ( T/2¼) Phase (Á/2¼)
Probability Parity

a
3
2

b
1.0
0.5

CZ CCZ CCCZ

CCCCZ CCCCCZ

1

2

4

6

Number of qubits

0.0 0

1

2

Time ( t/2¼)

c

X(¼/2) X

X(¼/2) X

X(¼/2) X

d 0.5
0.4 0.3 0.2 0.1 0.0
000 001 010 011 100 101 110 111
Three-particle state

Y(¼/2) Z(Á) Y(¼/2)

Y(¼/2) Z(Á) Y(¼/2)

Y(¼/2) Z(Á) Y(¼/2)

1.0

0.5

0.0

-0.5

-1.0

0.0

0.5

1.0

Phase of final ¼=2 pulse (Á=2¼)

Extended Data Fig. 10. Time-optimal pulses for multi-qubit controlled phase gates and GHZ state data. a, The execution time of a CN Z blockade gate as a function of the number of qubits. The N -qubit gates are realized by applying a phase ﬂip to the |0 ⊗N state, which is not equivalent to the method of Ref. [8] for N > 2. For the CCZ gate, applying a π phase to the |111 state (|111 → − |111 ), while leaving all other basis states invariant, is related by a global bit-ﬂip to applying a relative π p-
hase to the |000 state; however, the two implementations are not equivalent up to a global Z rotation, contrary to the two-qubit case. The time-optimal CCZ gate using the second approach realizes the CCZ gate ≈ 34% faster with (ΩT /2π) = 1.72, as compared to (ΩT /2π) = 2.61 from the ﬁrst approach. The two approaches are diﬀerent because the relative phase of π is accumulated between diﬀerent basis states, which have diﬀerent rates of phase accumulation. In the case of applyi√ng |111 →√− |111 , the-
 states with the slowest relative rate are |111 and |011 which a√re dri√ven with the Rabi frequency of 3Ω and 2Ω, respectively, resulting in the phase accumulation rate proportional to ( 3 − 2)Ω ≈ 0.32 Ω. In contrast, when the relative phase is applied on the state |000 , the smallest accumulation rate is given by the |001 state which is driven with the Rabi frequency Ω. In general, an arbitrary global single-qubit rotation at the end of the gate can be included to incorporate all of the above app-
roaches in the optimization procedure. b, Time-optimal phase proﬁles (without analytic parameterization) for the CN Z gates up to 6 qubits realized by applying a phase ﬂip to the |0 ⊗N state. c, Circuit used to
generate the GHZ state (|000 + |111 )/ (2) after two CCZ gates. d, GHZ states measured experimentally upon applying this circuit to 7 three-qubit groups in parallel, with populations in |000 and |111 of 92.9(3)% and a parity contrast of 89(1)%, giving a raw GHZ state ﬁdelity of 90.9(6)%.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:32.043Z
- **Text Length:** 91551 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
