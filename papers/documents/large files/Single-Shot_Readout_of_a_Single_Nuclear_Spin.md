# PDF Document: Neumann et al. - 2010 - Single-Shot Readout of a Single Nuclear Spin.pdf

**File Path:** Neumann et al. - 2010 - Single-Shot Readout of a Single Nuclear Spin.pdf

**Processed Date:** 2026-02-10T18:13:52.726Z

**File Size:** 257.59 KB

**Total Pages:** 3

**Extracted Pages:** 3

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2843

**Title:** Single-Shot Readout of a Single Nuclear Spin

**Collection:** Large Files

---

## Extracted Text Content

Single-Shot Readout of a Single
Nuclear Spin
Philipp Neumann,1 Johannes Beck,1 Matthias Steiner,1 Florian Rempp,1 Helmut Fedder,1 Philip R. Hemmer,2 Jörg Wrachtrup,1* Fedor Jelezko1*
Projective measurement of single electron and nuclear spins has evolved from a gedanken experiment to a problem relevant for applications in atomic-scale technologies like quantum computing. Although several approaches allow for detection of a spin of single atoms and molecules, multiple repetitions of the experiment that are usually required for achieving a detectable signal obscure the intrinsic quantum nature of the spin’s behavior. We demonstrated single-shot, projective measurement of a singl-
e nuclear spin in diamond using a quantum nondemolition measurement scheme, which allows real-time observation of an individual nuclear spin’s state in a room-temperature solid. Such an ideal measurement is crucial for realization of, for example, quantum error correction protocols in a quantum register.
S
ince the birth of quantum computing, researchers have sought scalable roomtemperature systems that could be incorporated as quantum coprocessors. Much enthusiasm arose when room-temperature nuclear magnetic resonance (NMR) quantum computers were developed (1). However, these are essentially classical as they lack the ability to initialize and read out individual spins at room temperature (2). Recent efforts have focused on the development of ultracold quantum processors like trapped ions and super-
conducting qubits which operate at millikelvin temperatures (3). Electronic and nuclear spins associated with nitrogen-vacancy (NV) centers in diamond have been shown to be a roomtemperature solid-state system with exceptionally long coherence times that fulfills most of the requirements needed to build a quantum computer (4–7). However, it lacked single-shot readout (8), and hence only the cryogenic version was considered to be applicable for most quantum information applications. For example, pr-
ojective readout enables testing Bell-type inequalities and active feedback in quantum error correction protocols. Here, we experimentally showed singleshot readout of a single nuclear spin in diamond. Our technique is based on the repetitive readout of nuclear spins (9) and the essential decoupling of the nuclear from the electronic spin dynamics by means of a strong magnetic field (10). The fluorescence time trace of a single NV center shown in Fig. 1B represents the real-time dynamics of a sing-
le nuclear spin and exhibits well-defined jumps attributed to abrupt, discontinuous evolution of the nuclear spin state
(quantum jumps). The spin used in our experiments belongs to the nucleus of the nitrogen atom [14N; nuclear spin I = 1 (11)] of a single NV defect in diamond (Fig. 1B). In essence, the measurement sequence consists of a correlation of the electron spin state of the NV color center with the nuclear spin state and a subsequent optical readout of the electron spin, which exhibits the nuclear spin state. Therefore, initially the electron spin is optically pumped into the electron spin sublevel j0e〉 (m-
S = 0) of its triplet ground state (S = 1) (8), leaving the nuclear spin in an incoherent mixture of its eigenstates ðjmI 1⁄4 〉Þj−1n〉, j0n〉, and j1n〉 (here and below states are defined according to electron and nuclear magnetic quantum numbers, mS and mI). The application of a narrowband, nuclear spin state–selective microwave (MW) p pulse flips the electron spin into the j−1e〉 state conditional on the state of the nuclear spin. This operation is equivalent to a controlled not (CNOT) operation (Fi-
g. 1A), in that it maps a specific
nuclear spin state onto the electron spin (e.g., j −1n〉j0e〉 → j−1n〉j−1e〉, j0n〉j0e〉 → j0n〉j0e〉). This is possible because of the long coherence time of the NV center, providing a spectral linewidth of the electron spin transitions narrow enough to resolve the hyperfine structure. Because the fluorescence intensity differs by roughly a factor of 2 for electron spin states j0e〉 and j−1e〉 (8, 12), these target states can be distinguished by shining a short laser pulse. This destroys the electron spin -
state but leaves the nuclear spin state population almost undisturbed under the experimental conditions. Thus, repeated application of this scheme allows nondestructive accumulation of fluorescence signal in order to determine the nuclear spin state optically. The fidelity F to detect a given state in a single shot [reaching F = 92 T 2% in our experiments (13)] can be extracted from the photoncounting histograms (Fig. 2A), which show distinguishable peaks corresponding to different nuclear spin st-
ates. The fidelity is limited by the measurement time (bounded by relaxation time of the nuclear spin), fluorescence count rate, and magnetic resonance signal contrast. Further improvement in readout speed can be achieved by engineering of photon emission into photonic nanostructures (14). A consecutive measurement of the same spin state gives an identical result with a probability of (F2) of ~82.5% (Fig. 2C). Such a correlation between consecutive measurements is the signature of so-called quantu-
m nondemolition (QND) protocols (15). For the nitrogen nuclear spin qubit initially in a superposition of two states, the measurement affects its state by projection into one of the eigenstates, but does not demolish it (as happens with photons arriving at a photomultiplier tube or fluorescent atoms that are shelved in a dark state, which is not a qubit state). Hence, the same nuclear spin eigenstate can be redetected in consecutive measurements. The difference between projective measurement and a-
 practical QND has been analyzed in
13rd Physics Institute and Research Center SCoPE, University of Stuttgart, Pfaffenwaldring 57, Stuttgart 70550, Germany. 2Department of Electrical and Computer Engineering, Texas A&M University, College Station, TX 77843, USA.
*To whom correspondence should be addressed. E-mail: f.jelezko@physik.uni-stuttgart.de (F.J.); wrachtrup@physik.unistuttgart.de ( J.W.)
Fig. 1. Single-shot readout reveals quantum jumps of a single nuclear spin in real time. (A) Representation of the single-shot readout scheme. (B) Normalized fluorescence time traces (gray) showing quantum jumps of a single nuclear spin in real time. When MW pulses (controlled-NOT gates) are on, a telegraph-like signal appears, revealing the projective nature of this measurement. Low fluorescence intensity represents nuclear spin state j−1n〉, and high fluorescence intensity indicates j0n〉 or j+1n〉-
. When MW pulses are off (upper trace), the fluorescence intensity remains high because it is not correlated with the nuclear spin state. Each data point was acquired by continuously repeating the readout scheme for 5 ms (2000 repetitions).
0 5 10
0.6
1.0
1.4 MW off MW off
MW on
time (s)
relative fluorescence intensity
0.0 0.5 1.0 1.5
0.6
1.0
N
V
C
B
MW π pulse
|Ψn〉
|0e〉
repeat
AB
REPORTS
542 30 JULY 2010 VOL 329 SCIENCE www.sciencemag.org
Downloaded from https://www.science.org at University of California Berkeley on December 29, 2024

detail (16, 17) and can be summarized as three conditions that must be simultaneously fulfilled in order to have a true QND measurement. Our
system observable is the nuclear spin I%z, our
probe observable is the electron spin S%z, and their Hamiltonians are Hn and He, respectively (13). The interaction Hamiltonian Hi for our case is separable Hi = HA + Hp, where HA describes the hyperfine interaction and Hp represents the MW field applied in the experiment.
The first condition for QND is simply that
the probe observable S%z must be measurably
influenced by the system observable I%z that we desire to measure. Therefore, the interaction Hamiltonian Hi has to depend on Iz and must not commute with the probe observable
S%z (1⁄2S%z, Hi ≠ 0) (16, 17). These demands are met by the CNOT gate. The corresponding Hamil
tonian Hp 1⁄4 W expðiwtÞ S%x ⊗j−1n〉 〈−1nj acts for a time t and flips the electron spin by an angle
b = Wt only for the nuclear spin j−1n〉 subspace (W, Rabi frequency; w, MW frequency). The strength of the QND measurement can by tuned by preparing the electron spin in a superposition state rather than in an eigenstate before the action of Hp (18). The second QND condition requires that the system observable state Iz be stable with respect to back action of the measurement. This translates to the requirement that the system Hamiltonian must not be a function of the observable’s
conjugate (I%x or I%y) in order to avoid back action of the measurement, which imposes a large uncertainty on the conjugates. In our case, this condition is fulfilled as long as the applied magnetic field is exactly parallel to the NV center symmetry axis (13). The third condition is that the probe and
system observables, S%z and I%z in our case, should not be mixed by any interactions that are neither intrinsic to the material nor created by the action of the MW or laser probes (i.e., that the nuclear spin is well isolated from the environment). In other words (16, 17), the interaction Hamiltonian
must commute with the observable (1⁄2 I%z, Hi 1⁄4 0). Fulfilling this condition perfectly is an impossible task for any experimental system, particularly in the solid state. However, defect center spins in diamond are very close to an ideal system for QND measurements. In the case of the NV center, the nuclear spin–selective MW pulse on the electron spin does not act on the nuclear spin subspace
(hence 1⁄2 I%z, Hp 1⁄4 0). However, the hyperfine coupling tensor 1⁄4 A contains contributions parallel and perpendicular to the symmetry axis of the NV center (A∥ and A⊥), and the perpendicular component is responsible for an undesirable mixing. The first term of the hyperfine Hamiltonian HA 1⁄4
ðS%þI%− þ S%−I%þÞA⊥=2 þ S%zI%zA∥ is noncommut
ing with I%z and therefore induces nuclear-electron spin flip-flop processes. This mixing is responsible for the quantum jumps in Fig. 1B. The key to succeeding at QND measurements is therefore to make this jump time longer than the measurement time. To quantify the hyperfine induced flip-flop rate, assume an isotropic case (A∥ ≃ A⊥ ≃ A) and use the measured A∥= 40 MHz in the excited state (19, 20). Electron-nuclear spin dynamics occur on a time scale of 2/A⊥ ~ 50 ns in the vicinity of excited-sta-
te level anticrossing at magnetic field B = 50 mT (19, 21) (Fig. 3A). Relaxation in the ground state is expected to be slower owing to a much weaker hyperfine coupling (13) and can be neglected here. The relaxation process slows down when the magnetic field along the NV symmetry axis is increased owing to the growing energy mismatch between electron and nuclear spin transitions due to increasing Zeeman shifts (Fig. 3A). A detailed analysis (13) and experimental data (Fig. 3B) show that the relaxat-
ion rate g depends on the detuning d from the level anticrossing (1.42 GHz) as g ∼ ðA2⊥=2Þ=1⁄2ðA2⊥=2Þþ
d2 (i.e., like a Lorentzian lineshape). Hence, we expect a quadratic dependence of T1 on the detuning from the excited-state level anticrossing
100 140 180
0
100
200
300
400
500
number of events
number of photons / 5 ms
threshold
100 140 180
0
100
200
300
number of events
number of photons / 5 ms
100 140 180
0
20
40
60
80
0 200 400 600
0.2
0.4
0.6
probability for spin flip
rf pulse length (μs)
|Ψn〉
|0e〉
Rx(φ)
2000
|0n〉,|+1n〉
|0n〉,|+1n〉
|-1n〉
|-1n〉
|-1n〉 |0n〉,|+1n〉
ABC
Fig. 2. Readout fidelity and conditional gates using single-shot readout. (A) Photon-counting histogram of a fluorescence time trace fitted by two Gaussian distributions (solid lines). Left and right peaks correspond to the dark (j−1n〉) and bright (j0n〉, j+1n〉) states, respectively. By setting a threshold (red line), the nuclear spin state j−1n〉 (fluorescence below threshold) can be distinguished from the other nuclear spin states (fluorescence above threshold). For the given lifetimes at 0.65 T a-
nd fluorescence levels, the fidelity to detect a given state correctly is 92 T 2%. (B) Conditional nuclear spin Rabi oscillations and histograms. The wire diagram on top illustrates the conditional Rabi sequence. Only if the measurement outcome is j−1n〉, a resonant radio-frequency (rf) pulse of certain length is applied on the
nuclear spin transition j−1n〉 ↔j0n〉 and a subsequent measurement is performed. Otherwise the sequence
is restarted immediately. (C) Conditional histograms. Two consecutive QND measurements have a high probability (≈82%) of giving the same outcome (lower histogram). If a rf p pulse is applied after detecting j−1n〉, this probability drops to ≈33% (upper histogram). Possible reasons for the Rabi contrast of <1 are, for instance, the setup instability and imperfect initialization and readout of the electron spin.
50
|0e〉
|+1e〉
|-1e〉
EEZ
(GHz)
0 450 B (mT)
1.42
|0n〉
|-1n〉
|+1n〉
40MHz
50 250 450 650
0
20
40
60
80
spin lifetime T1 (ms)
magnetic field B (mT)
-11.0 spin flip
from ... ... to ...
0.2
0.4
0.6
0.8
spin flip probability
30
60
90
120
spin flip rate γ (Hz)
|+1n〉 |0n〉 |-1n〉 |+1n〉
|0n〉
|-1n〉
0 0.2 0.4
t (s) 0.6
|+1n〉
|0n〉
|-1n〉
A BC
Fig. 3. Tuning nuclear spin dynamics. (A) Excited-state fine structure as a function of the magnetic field B
(parallel to the NV axis). The inset shows the 14N hyperfine structure (splitting of ~40 MHz). (B) Experimental results (black dots) confirm the predicted quadratic dependence of nuclear spin lifetime on
the detuning from the level anticrossing [red line, T1 = 230 ms·mT−2 (B − 50 mT)2]. (C) At every point in time, all three nuclear spin states were measured directly and a time trace was acquired. The upper graph shows a part of the corresponding quantum state trajectory (computer fit to the data as in Fig. 1C). The lower graph is the transition matrix calculated from analyzing ~10,000 quantum jumps. Off-diagonal elements represent spin-flip probabilities and diagonal elements represent the probabi-
lity of remaining unchanged. The probabilities are proportional to spin flip rates under continuous application of the readout sequence. Error bars indicate the uncertainty in nuclear state lifetime measurements.
www.sciencemag.org SCIENCE VOL 329 30 JULY 2010 543
REPORTS
Downloaded from https://www.science.org at University of California Berkeley on December 29, 2024

(T1 1⁄4 1=g ∼ d2 for d ≫ A2⊥). Experimental data confirm this behavior (Fig. 3B). This dependence also explains why quantum jumps were not observed in previous experiments with NV centers performed at low magnetic fields [similar magnetic field–enabled decoupling of nuclear spin was proposed recently for alkaline earth metal ions (10, 22)]. The dominance of flip-flop processes is also visible in the quantum state trajectory of the nuclear spin shown in Fig. 3C (top). Here, jumps obey the selectio-
n rule DmI 1⁄4 T1 imposed by the flip-flop term HA. From analyzing the whole quantum state trajectory, a matrix showing the transition probabilities can be obtained (Fig. 3C, bottom). Single-shot measurement of a single nuclear spin places diamond among leading quantum computer technologies. The high readout fidelity (92%) demonstrated in this work is already close to the threshold for enabling error correction (23), although the experiments were carried out in a moderatestrength magnetic field. E-
ven though the optical excitation induces complex dynamics in the NV center (including passage into singlet electronic state), the nuclear spin relaxation rates are defined solely by electron-nuclear flip-flop processes induced by hyperfine interaction. Therefore, we expect improvement of T1 by two orders of magnitude (reaching seconds under illumination) when a magnetic field of 5 T is used. This will potentially allow readout fidelities comparable with that achieved for single ions in traps (24)-
. The present technique can be applied to multiqubit quantum registers (5, 6, 25), enabling
tests of nonclassical correlations. Finally, singleshot measurements open new perspectives for solid-state sensing technologies. Spins in diamond are considered to be among the promising candidates for nanoscale magnetic field sensing (26, 27). Currently their performance is limited by photon shot noise (26): “Digital” QND will provide improvement over conventional photon counting in the case of short acquisition time. This requires that the electron spin state used for magnetic field sensing can -
be mapped onto the nuclear spin with high accuracy, but this was already shown to be practical in NV diamond (5).
References and Notes
1. N. A. Gershenfeld, I. L. Chuang, Science 275, 350 (1997). 2. W. S. Warren, Science 277, 1688 (1997). 3. T. D. Ladd et al., Nature 464, 45 (2010). 4. L. Childress et al., Science 314, 281 (2006). 5. M. V. G. Dutt et al., Science 316, 1312 (2007). 6. P. Neumann et al., Science 320, 1326 (2008). 7. G. D. Fuchs, V. V. Dobrovitski, D. M. Toyli, F. J. Heremans, D. D. Awschalom, Science 326, 1520 (2009). 8. F. Jelezko, T. Gaebel, I. Popa, A. Gruber, J. Wrachtrup, Phys. Rev. Lett. 92, 076401 (2004).
9. L. Jiang et al., Science 326, 267 (2009). 10. A. V. Gorshkov et al., Phys. Rev. Lett. 102, 110503 (2009). 11. The presented single-shot readout works in the same way and shows a similar fidelity for the nuclear spin of the 15N isotope. 12. A. Batalov et al., Phys. Rev. Lett. 100, 077401 (2008). 13. Supporting material is available on Science Online. 14. T. M. Babinec et al., Nat. Nanotechnol. 5, 195 (2010). 15. V. B. Braginsky, F. Y. Khalili, Rev. Mod. Phys. 68, 1 (1996). 16. N. Imoto, H. A. Ha-
us, Y. Yamamoto, Phys. Rev. A 32, 2287 (1985).
17. C. M. Caves, K. S. Thorne, R. W. P. Drever, V. D. Sandberg, M. Zimmermann, Rev. Mod. Phys. 52, 341 (1980). 18. T. C. Ralph, S. D. Bartlett, J. L. O’Brien, G. J. Pryde, H. M. Wiseman, Phys. Rev. A 73, 012113 (2006). 19. G. D. Fuchs et al., Phys. Rev. Lett. 101, 117601 (2008). 20. M. Steiner, P. Neumann, J. Beck, F. Jelezko, J. Wrachtrup, Phys. Rev. B 81, 035205 (2010). 21. V. Jacques et al., Phys. Rev. Lett. 102, 057403 (2009). 22. I. Reichenbach, I. H. Deutsch, Phys. Rev. Lett. 99, 123001 (200-
7). 23. E. Knill, Nature 434, 39 (2005). 24. A. H. Myerson et al., Phys. Rev. Lett. 100, 200502 (2008). 25. L. Jiang, J. M. Taylor, A. S. Sorensen, M. D. Lukin, Phys. Rev. A 76, 062323 (2007). 26. J. R. Maze et al., Nature 455, 644 (2008). 27. G. Balasubramanian et al., Nature 455, 648 (2008). 28. We thank F. Dolde for fabrication of microwave structures; N. Zarrabi for assistance with data analysis; J. Mayer and P. Bertet for helpful information on QND measurements in superconducting qubits; and -
M. D. Lukin, J. Twamley, F. Y. Khalili, and J. O’Brien for comments and discussions. We thank G. Denninger for the loan of a X-band microwave synthesizer. This work was supported by the European Union, Deutsche Forschungsgemeinschaft (SFB/TR21 and FOR1482), Bundesministerium für Bildung und Forschung, and Landesstiftung BW.
Supporting Online Material
www.sciencemag.org/cgi/content/full/science.1189075/DC1 Methods SOM Text Figs. S1 to S6 References
3 March 2010; accepted 21 June 2010 Published online 1 July 2010; 10.1126/science.1189075 Include this information when citing this paper.
Strain-Induced Pseudo–Magnetic
Fields Greater Than 300 Tesla in
Graphene Nanobubbles
N. Levy,1,2*† S. A. Burke,1*‡ K. L. Meaker,1 M. Panlasigui,1 A. Zettl,1,2 F. Guinea,3 A. H. Castro Neto,4 M. F. Crommie1,2§
Recent theoretical proposals suggest that strain can be used to engineer graphene electronic states through the creation of a pseudo–magnetic field. This effect is unique to graphene because of its massless Dirac fermion-like band structure and particular lattice symmetry (C3v). Here, we present experimental spectroscopic measurements by scanning tunneling microscopy of highly strained nanobubbles that form when graphene is grown on a platinum (111) surface. The nanobubbles exhibit Landau levels t-
hat form in the presence of strain-induced pseudo–magnetic fields greater than 300 tesla. This demonstration of enormous pseudo–magnetic fields opens the door to both the study of charge carriers in previously inaccessible high magnetic field regimes and deliberate mechanical control over electronic structure in graphene or so-called “strain engineering.”
G
raphene, a single atomic layer of carbon, displays remarkable electronic and mechanical properties (1, 2). Many of graphene’s distinctive properties arise from a linear band dispersion at low carrier energies (3) that leads to Dirac-like behavior within the twodimensional (2D) honeycomb lattice—charge carriers travel as if their effective mass is zero
(1). An intriguing recent prediction is that a distortion of the graphene lattice should create large, nearly uniform pseudo–magnetic fields and give rise to a pseudo–quantum Hall effect (4). Whereas an elastic strain can be expected to induce a shift in the Dirac point energy from local changes in electron density, it is also predicted to induce an effective vector potential that arises from
changes in the electron-hopping amplitude between carbon atoms (5). This strain-induced gauge field can give rise to large pseudo–magnetic fields (Bs) for appropriately selected geometries of the applied strain (1, 6). In such situations, the charge carriers in graphene are expected to circulate as if under the influence of an applied outof-plane magnetic field (7–10). It has recently been proposed that a modest strain field with triangular symmetry will give approximately uniform, quantizing Bs u-
pward of tens of tesla (4). Here, we report the measurement of Landau levels (LLs) arising from giant strain-induced pseudo–magnetic fields in highly strained graphene nanobubbles grown on the Pt(111) surface. Lan
1Department of Physics, University of California Berkeley, Berkeley, CA 94720, USA. 2Materials Science Division, Lawrence Berkeley National Laboratory, Berkeley, CA 94720, USA. 3Instituto de Ciencia de Materiales de Madrid (CSIC), Madrid 28049, Spain. 4Department of Physics, Boston University, Boston, MA 02215, USA.
*These authors contributed equally to this work. †Present address: Center for Nanoscale Science and Technology, National Institute of Standards and Technology, Gaithersburg, MD 20899, USA. ‡Present address: Department of Physics and Astronomy and Department of Chemistry, University of British Columbia, Vancouver, BC V6T 121, Canada. §To whom correspondence should be addressed. E-mail: crommie@berkeley.edu
544 30 JULY 2010 VOL 329 SCIENCE www.sciencemag.org
REPORTS
Downloaded from https://www.science.org at University of California Berkeley on December 29, 2024

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:13:52.726Z
- **Text Length:** 22608 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 3 of 3
