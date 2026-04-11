# PDF Document: Manetsch et al. - 2025 - A tweezer array with 6100 highly coherent atomic qubits.pdf

**File Path:** Manetsch et al. - 2025 - A tweezer array with 6100 highly coherent atomic qubits.pdf

**Processed Date:** 2026-02-10T18:17:47.433Z

**File Size:** 7478.16 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 291

**Title:** A tweezer array with 6100 highly coherent atomic qubits

**Collection:** TEST

---

## Extracted Text Content

A tweezer array with 6100 highly coherent atomic qubits
Hannah J. Manetsch, Gyohei Nomura, Elie Bataille, Xudong Lv, Kon H. Leung & Manuel Endres
This is a PDF file of a peer-reviewed paper that has been accepted for publication. Although unedited, the content has been subjected to preliminary formatting. Nature is providing this early version of the typeset paper as a service to our authors and readers. The text and figures will undergo copyediting and a proof review before the paper is published in its final form. Please note that during the production process errors may be discovered which could affect the content, and all legal disclaim-
ers apply.
Received: 20 March 2024
Accepted: 17 September 2025
Accelerated Article Preview Published online xx xx xxxx
Cite this article as: Manetsch, H. J. et al. A tweezer array with 6100 highly coherent atomic qubits. Nature https://doi.org/ 10.1038/s41586-025-09641-4 (2025)
https://doi.org/10.1038/s41586-025-09641-4
Nature | www.nature.com
Accelerated Article Preview
CCELERATED
ARTICLE
PREVIEW

 A tweezer array with 6100 highly coherent atomic qubits
Hannah J. Manetsch,1, ∗ Gyohei Nomura,1, ∗ Elie Bataille,1, ∗ Xudong Lv,1, † Kon H. Leung,1, ‡ and Manuel Endres1, §
1California Institute of Technology, Pasadena, CA 91125, USA
Optical tweezer arrays1,2 have transformed atomic and molecular physics, now forming the backbone for a range of leading experiments in quantum computing3–8, simulation1,9–12, and metrology13–15. Typical experiments trap tens to hundreds of atomic qubits, and recently systems with around one thousand atoms were realized without defining qubits or demonstrating coherent control16–18. However, scaling to thousands of atomic qubits with long coherence times, low-loss, and high-fidelity imaging is an -
outstanding challenge and critical for progress in quantum science, particularly towards quantum error correction19,20. Here, we experimentally realize an array of optical tweezers trapping over 6,100 neutral atoms in around 12,000 sites, simultaneously surpassing stateof-the-art performance for several metrics that underpin the success of the platform. Specifically, while scaling to such a large number of atoms, we demonstrate a coherence time of 12.6(1) seconds, a record for hyperfine qubits in -
an optical tweezer array. We show room-temperature trapping lifetimes of ∼23 minutes, enabling record-high imaging survival of 99.98952(1)% with an imaging fidelity of over 99.99%. We present a plan for zone-based quantum computing5,21 and demonstrate necessary coherence-preserving qubit transport and pick-up/drop-off operations on large spatial scales, characterized through interleaved randomized benchmarking. Our results, along with recent developments8,22–24, indicate that universal quantum com-
puting and quantum error correction with thousands to tens of thousands of physical qubits could be a near-term prospect.
Optical tweezer arrays1,2 have transformed atomic and molecular physics experiments by simplifying detection and enabling individual-particle control25–27, resulting in rapid, recent progress in quantum computing3–8, simulation1,9–12, and metrology13–15. In this context, each atom typically encodes a single qubit that is controlled with electromagnetic fields, and ideally features long coherence times to enable these applications with high fidelity. Such optically trapped atomic qubit devices, coe-
xist with other platforms that have single-qubit control and readout, including ion traps28 and superconducting qubits29. There are important incentives to scale up such fully programmable qubit platforms. Optical atomic clocks gain stability with increasing atom number30, while quantum simulation experiments benefit from thousands of qubits to explore emergent collective phenomena31,32 or demonstrate verifiable quantum advantage33,34. Most critically, quantum error correction (QEC) demands both l-
arge system sizes and exceptional fidelities: even the most resource-efficient protocols require several thousand physical qubits operating with error rates below 10−3 to encode >100 logical qubits20,35. This represents a fundamental scalability challenge that has limited the practical impact of quantum technologies. Current universal quantum computing architectures, such as those based on neutral atoms5–8, ions28, and superconducting qubits29, typically operate with tens to hundreds of qubits. Wh-
ile most platforms suffer from increasingly deleterious effects as system size grows28,29,
∗ These authors contributed equally to this work † Present address: Shanghai Institute of Optics and Fine Mechanics, Chinese Academy of Sciences, Shanghai, China, 200031. ‡ kleung@caltech.edu § mendres@caltech.edu
neutral atoms in optical tweezer arrays offer a promising solution for rapid scalability in the near term thanks to a programmable architecture adaptable to larger system sizes. Universal quantum computing capabilities with neutral atoms have recently been realized in optical tweezer array systems, based on demonstrations of individual qubit addressing36–39, high-fidelity entangling gates8,22, coherence-preserving dynamical reconfigurability5,8,40, and ancilla-based mid-circuit measurement8,21,41.-
 Very recently, tweezer systems with about a thousand atoms have been realized in a discontiguous array based on interleaved microlens elements16, and via repeated reloading from a reservoir17,18; none of these experiments, however, report control of qubits, measurement of coherence times, or coherence-preserving transport. Here, we demonstrate a tweezer array with 11,998 sites, that traps over 6,100 atomic qubits, simultaneously matching or surpassing state-of-the-art values for metrics underpinn-
ing the usefulness of the platform, including hyperfine qubit coherence time, trapping lifetime in a room-temperature apparatus, coherent transport distance and fidelity, trap transfer fidelity, as well as combined imaging fidelity and survival (Fig. 1). Our results have implications for the aforementioned applications in quantum science, in particular, concerning large-scale quantum computing and error correction, as discussed in more detail below.
Summary of approach and results
Our approach leverages high-power trapping of single cesium-133 atoms at far-off-resonant wavelengths in a specially designed, room-temperature vacuum chamber (Methods, Ext. Data Fig. 1a), enabling low-loss, highfidelity imaging in combination with long hyperfine coherence times at the scale of 6,100 qubits (Fig. 1e).
ACCELERATEDARTICLEPREVIEW

 2
Specifically, we demonstrate single-atom imaging with a survival probability of 99.98952(1)% and a fidelity of 99.99374(8)%, surpassing the state-of-the-art achieved in much smaller arrays42. This, alongside a 22.9(1)-minute vacuum-limited lifetime in our room-temperature apparatus43—significantly longer than typical state-of-the-art vacuum lifetimes for tweezer arrays in room-temperature apparatuses—provides realistic timescales for array operations in large scale arrays with minimal loss; e.g., -
for atomic rearrangement25–27. Importantly, we further demonstrate a coherence time of 12.6(1) s, a record for a hyperfine qubit tweezer array, surpassing previous values by almost an order of magnitude5,6. We also show a single-qubit gate fidelity of 99.9834(2)% measured with global randomized benchmarking. Finally, we demonstrate coherent atomic transport across 610 μm with a fidelity of ∼99.95% and coherent transfer between static and dynamic traps with a fidelity of 99.81(3)%. These together f-
orm crucial ingredients for scaling atomic quantum processors in a zonebased architecture, with a detailed plan laid out further in the Supplementary Information (SI). Our results indicate that quantum computing with 6,000 atomic qubits is a near-term prospect, providing a path towards QEC with hundreds of logical qubits20.
Large-scale optical tweezer generation
To scale the optical tweezer array platform, while extending hyperfine coherence times, we generate traps using near-infrared wavelengths, far-detuned from dominant electric-dipole transitions, thus minimizing photon scattering and dephasing processes44. Cesium atoms possess the highest polarizability among the stable alkalimetal atoms at near-infrared wavelengths where commercial fiber amplifiers provide continuous-wave laser powers that exceed 100 W. Thus, a large number of traps can be created -
with sufficient depth. A representative single shot image of the array is shown in Fig. 1a, and an averaged image is shown in Fig. 1b. The atoms are spaced by ∼7.2 μm and held in traps at 1055 nm and 1061 nm, generated using spatial light modulators (SLMs), whose hologram phases are optimized with a weighted Gerchberg-Saxton algorithm45 to uniformize the tweezer trap depth (Methods). The tweezer light is combined with polarization and focused through a high numerical aperture objective with a larg-
e field of view of 1.5 mm in diameter, usable for atom trapping and manipulation (Fig. 1c). The tweezers are created with 130 W of optical power generated from fiber amplifiers. After transmission through the optical path, around 35-40 W reaches the objective, and from trap parameter measurements (see “Tweezer generation” Methods section), we estimate ∼1.4 mW to be used per tweezer at the atom plane. We measure an average trap depth of kB × 0.18(2) mK, with a standard deviation of 11.4% across all-
 sites (Ext. Data Fig. 2d), enabling consistent loading probability per site.
Loading and imaging single atoms
We demonstrate uniform loading and high imaging fidelity across the sites in the array. To load single atoms in the tweezers, we cool and then parity-project from a ∼1.6 mm 1/e2 diameter magneto-optical trap. Before imaging the atoms, we use a multi-pronged approach to filter out atoms in spurious off-plane traps, residual from the SLM tweezer creation (Methods, Ext. Data Fig. 3). We then zero the magnetic field and apply twodimensional polarization gradient cooling (2D PGC) in the atom array plan-
e (x-z plane in Fig. 1c) for fluorescence imaging of single atoms, which simultaneously cools the atoms. Imaging light is applied for 80 ms, and photons are imaged on a quantitative CMOS camera (qCMOS). We find that each site has a loading probability of 51.2% with a relative standard deviation of 3.4% across the sites, demonstrating uniform filling of single atoms (Ext. Data Fig. 2c). This allows us to load over 6,100 sites on average in each iteration (Fig. 1d). We distinguish atomic presence in-
 the array with high fidelity. Each image undergoes a binarization procedure (Methods) whereby each site is attributed a value of 0 (no atom detected) or 1 (one atom detected). We weight the collected photons in a 7 × 7-pixel box centered around each site, so as to add more weight to pixels close to the center of each site’s point-spread function (Ext. Data Fig. 4a). The resulting signal is compared with a threshold to determine if an atom is present or not (Fig. 2). We characterize the imaging fi-
delity, defined as the probability of correctly labeling atomic presence in a site, with a model-free approach, where no assumption is made about the photon distribution from Fig. 2. To this end, we identify anomalous series of binary outputs46 in three consecutive images. For instance, 0 → 1 → 1 would point to a false negative event in the first image, while 1 → 1 → 0 could be due to atom loss during the second image or a false negative event in the third one. This approach allows us to precisely-
 decouple inherent atom loss from false negatives or positives. From this we find an imaging fidelity of 99.99374(8)% (note that we excise the first image, which we find has slightly lower fidelity and survival probability; Methods). Crucial to this result is the homogeneous photon scattering rate across the array (Ext. Data Fig. 4d) and the consistency of the point-spread function across the array (waist radius of 1.7 pixels with a standard deviation of 0.2 pixels). Consistent imaging parameters -
across the array further are evidenced in that we find that treating each site with an individual threshold only marginally improves the imaging fidelity to 99.9939(1)%. Finally, we estimate that the imaging fidelity in the absence of atomic loss would be closer to 99.999% (Methods).
Imaging survival and vacuum-limited lifetime
The probability of losing no atom in a tweezer array during imaging and due to finite vacuum lifetime both decrease exponentially in the number of atoms in an array, making these crucial metrics to optimize for large-scale array operation. The vacuum-limited lifetime, in partic
ACCELERATEDARTICLEPREVIEW

 3
ular, sets an upper bound on the duration during which operations can be executed without loss of an atom in a given experimental run. This can, for example, be applied as an upper limit on the fidelity with which one can achieve a defect-free array via atom rearrangement25,26. We probe the vacuum-limited lifetime using an empirically optimized cooling sequence consisting of a 10-ms 2D PGC cooling block every 2 s. By fitting the exponential decay of the atom survival, we find a 1/e lifetime of 22.-
9(1) min (Fig. 3a). This is a significantly long timescale compared with state-of-the-art roomtemperature atomic experiments, and within a factor of five of the longest reported lifetime in a cryogenic apparatus43. The result indicates that the probability of losing a single atom across the entire array remains under 50% during 100 ms, a relevant timescale for dynamical array reconfiguration and quantum processor operation. Moreover, we accurately characterize the imaging survival probability, wit-
hout assuming any parameters, by performing 80-ms repeated imaging up to 1,000 times, after which ∼90% of initially loaded atoms still survive (Fig. 3b). This corresponds to a steady-state imaging survival probability of 99.98952(1)%, mostly limited by vacuum lifetime. This, to the best of our knowledge, surpasses prior studies reporting record steady-state imaging survival using single alkaline-earth metal42 and alkalimetal47 atoms in optical tweezers. These results, and the uniformity of imaging-
 survival across the array (Ext. Data Fig. 5a), enable low-loss, high-fidelity detection of single atoms in large-scale arrays, crucial components for the practical use of the system. In Ext. Data Fig. 6 we present imaging fidelity and survival results with a shorter imaging duration of 20 ms.
Qubit coherence
Key to recent progress in quantum computing and metrology with neutral atoms is the ability to encode a qubit in long-lived states of an atom, such as hyperfine states5,6, nuclear spin states36–38, or optical clock states13,14. In cesium atoms, the hyperfine ground states (|F = 3, mF = 0⟩ ≡ |0⟩ and |F = 4, mF = 0⟩ ≡ |1⟩) provide such a subspace for storing quantum information (see Methods for state preparation and readout procedures). Furthermore, entanglement via Rydberg interactions can be readi-
ly transferred to this qubit to realize high-fidelity two-qubit gates22. We demonstrate the storage and manipulation of quantum information in a large-scale atom array by measuring the coherence time and global single-qubit gate fidelity using a microwave horn to drive the hyperfine transition (Fig. 4a). For microwave operation we adiabatically ramp down tweezers to a depth of kB × 55 μK. Preserving the coherence of a quantum system as it is scaled up is a known challenge across platforms for quan-
tum computing and simulation29. This difficulty persists even for neutral atoms, albeit at a lower level, due to residual interactions with a noisy and inhomogeneous electromagnetic environment, particularly with
the tweezers themselves. Thus, we choose to trap in faroff-resonant optical tweezers to preserve coherence, since at constant trap depth the differential light shift of the hyperfine qubit decreases as 1/∆tweezer and the scattering rate as 1/∆t3weezer, where ∆tweezer is the tweezer laser detuning relative to the dominant electronic transition44. We indeed observe long coherence times, measuring a depolarization time of T1 = 119(1) s (Ext. Data Fig. 7d), and an array-averaged ensemble dephasing tim-
e of T2∗ = 14.0(1) ms (Fig. 4b), limited by trap depth inhomogeneity. Measured site-by-site, the dephasing time
is T ∗(site)
2 = 25.5 ms, consistent with being limited by an atomic temperature of ∼4.3 μK during microwave operation (Methods). In Ext. Data Fig. 8 and in the Methods we present and discuss site-resolved qubit coherence data. The dephasing can be further mitigated by dynamical decoupling. By applying cycles of XY16 sequences48 with a period of 12.5 ms between π pulses, the measured dephasing time is T2 = 12.6(1) s, a new benchmark for the coherence time of an array of hyperfine qubits in optical tweezers5,6 -
(Fig. 4c). In addition, we investigate in Ext. Data Fig. 7g the coherence time at different trap depths, yielding notably T2 = 3.19(5) s at the full trap depth of kB × 0.18 mK. Although lower, this result also surpasses previous known results with hyperfine qubits in a tweezer array. Finally, we determine single-qubit gate fidelities through global randomized benchmarking49. To compensate for the inhomogeneous Rabi frequency across the array, we use the SCROFULOUS composite pulse50. We apply gates-
 sampled from the Clifford group C1, followed by an inverse operation, and measure the final population in |1⟩ (Fig. 4d). Fitting the decay as the number of gates increases yields an average Clifford gate fidelity Fc = 0.999834(2), limited by phase noise in our system likely due to magnetic field noise (Methods). This could be readily addressed by upgrading the current sources driving the magnetic field coils or by operating at MHzscale Rabi rates with optical Raman transitions (notably used to pe-
rform sideband spectroscopy in Ext. Data Fig. 9).
Towards zone-based quantum computing — coherent long-distance transport and atom transfer We now focus more specifically on the practical implementation of a quantum computer, as it is a flagship application of our work and because it demands the most sophisticated toolbox of aforementioned use cases. Universal quantum computing requires single-qubit and twoqubit gates which have been implemented either through single-site addressing6 or a zone-based architecture5,21. Zone-based architectures leve-
rage the ability to dynamically move atoms in a coherence-preserving manner5,40, enabling long-range, non-local connectivity, which allows for less stringent quantum error correction bounds51. This architecture also provides a path for mid-circuit readout21. We depict a possible zone layout in Ext. Data Fig. 10a and the Supplementary Information (SI), which
ACCELERATEDARTICLEPREVIEW

 4
includes a storage zone large enough for more than 6,100 atoms. We do not foresee challenges in creating the zones themselves, e.g., Rydberg-based two-qubit gates should be feasible in a large interaction zone for more than 500 gates in parallel with state-of-the-art fidelities (SI §IV). However, coherence-preserving transport between storage and adjacent interaction or readout zones might require covering large distances of ∼500 μm. While moving atoms using acousto-optic deflectors (AODs) is now -
a well-established practice to resort them into a deterministic configuration25,26 or to transport them coherently5,8,21,39, this distance is significantly further than previously demonstrated distances for single-atom transport with tweezers5,21. Furthermore, transferring atoms between dynamic (AOD-generated) and static (SLMgenerated) tweezers requires precise relative alignment, conceivably challenging in our system due to the high laser power or potential for worsening aberrations over the larg-
e FOV. Thus, we investigate the feasibility of coherencepreserving transport and SLM-AOD trap transfer over larger length scales. First, isolating challenges with the coherent transport operation, we load atoms directly into ten AOD-generated tweezers and characterize coherent moves up to ∼610 μm (Fig. 5, top section of Ext. Data Fig. 10). Second, we assess the viability of large-scale parallel AOD-SLM trap transfers with 195 AOD-generated tweezers that span a square of 504 μm × 468 μm (Fig. 6). A-
s an outlook, we demonstrate a proof-of-principle combination of these techniques in a large-scale static array (although in a different trap layout) moving a 2D array of 47 atoms over 375 μm, a distance comparable to predicted zone spacings in our system (Ext. Data Fig. 10e, f). For all operations, we utilize the most wide-band commercially available AODs at near-infrared wavelengths, which cover up to 500 − 600 μm along one axis for the optical parameters used here (Methods). In probing atom sur-
vival as a function of long-distance movement speeds, we find that the speed of transport is strongly constrained by cylindrical lensing—an effect that occurs when the AOD frequency is rapidly swept52which becomes increasingly deleterious as the AOD field of view is increased (SI III.A). Notably, using a pair of crossed AODs for diagonal transport converts cylindrical lensing into spherical lensing, enabling significantly faster movement (Fig. 5a). With diagonal moves, we first demonstrate in Fig.-
 5b negligible loss of coherence for atoms transported by 610 μm in 1.6 ms. We suppress dephasing with one XY4 dynamical decoupling sequence per move. Realistic applications of coherent transport involve multiple consecutive moves. Therefore, we characterize the fidelity of the quantum channel defined by coherent transport through interleaved randomized benchmarking53 (IRB, Fig. 5c, Methods). To the best of our knowledge, such a quantitative characterization of transport fidelity in neutral atoms -
has not been previously demonstrated. To maximize the dephasing cancellation, we ap
ply dynamical decoupling in a transformed Clifford frame (Methods). We perform this benchmarking technique for a distance of 610 μm (Fig. 5d), with diagonal moves. We first measure the survival probability of an atom in a tweezer at the end of the sequence for different move durations (top panel). For a 1.6-ms move using kB ×0.28 mK-deep traps, we then characterize the return probability to the initial quantum state after IRB as a function of the number of moves (middle panel). Other distances, tr-
ap depths and move times are shown in Ext. Data Fig. 10. The resulting IRB return probability data is nonexponential in the number of moves, because at large numbers of moves, trap losses become dominant and the fidelity for the transport channel depends on the number of previously executed moves. This motivates defining an instantaneous fidelity; i.e., the fidelity of the transport channel after a certain number of previous moves (Methods), shown in the bottom panel of Fig. 5d. The instantaneous -
fidelity approaches a constant value of 99.953(2)% for small numbers of one-way moves (≲ 30), where losses are the sub-dominant error. This regime is most relevant for QEC, since data qubits and ancilla qubits can, in principle, be swapped every few layers of gates54. We then move on to characterizing the atom transfer between static and dynamic tweezers. We demonstrate that these operations proceed without the emergence of unexpected technical challenges by performing highfidelity parallel AOD-SL-
M transfer across the full field of view of the AOD (Fig. 6). We use 195 AOD tweezers spread across 504 μm × 468 μm (Fig. 6a) to perform and characterize the repeated transfer procedure, post-selected on initially filled SLM sites. As with coherent transport benchmarking, we evaluate the transfer fidelity as a function of the number of one-way transfers through IRB (Fig. 6d). To execute faster (or higher-fidelity transfers at a given duration), we propose and implement a trajectory where AOD ramp--
and-move operations are simultaneously optimized with machine learning techniques to maximize survival (Fig. 6c, Methods). Compared with our manually optimized trajectory (Fig. 6b), this technique yields significantly higher atomic survival, and enables a one-way transfer fidelity of 99.81(3)% for ≲ 12 transfers (compare blue and gray data in Fig. 6d, top panel). In the future, such machine learning techniques could also be used to optimize combined pick-up and transport, where we find a fidelity -
of 99.87(1)% for the first ∼12 operations at the chosen timescales with manually optimized methods (Methods, Ext. Data Fig. 10f). Finally, to cover the full extent of the array, we envision utilizing multiple pairs of crossed AODs, with the demonstrated long-distance transport allowing overlap between adjacent AOD-pair controlled regions (SI Fig. 2). With the layout presented in Ext. Data Fig. 10a and the SI, four such regions would be necessary. Alternatively, additional scanning techniques (e.g.-
, fast-scanning mirrors) can be used to position the field of view of a single pair
ACCELERATEDARTICLEPREVIEW

 5
of crossed AODs across the full array iteratively. Such techniques are also applicable to initial rearrangement of atoms in the storage zone. For example, by implementing a parallel assembly algorithm55,56 in four quadrants (SI §II), with estimates for relevant timings based on simulation, data, and previous experiments (SI Table I), we expect that we can sort the array in parallel in ∼137 ms or sequentially quadrant-by-quadrant in ∼522 ms.
Conclusion and outlook
We have shown scaling of neutral atom qubit numbers in optical tweezers to more than 6,100. We simultaneously achieve high imaging survival and fidelity as well as a long room-temperature vacuum-limited lifetime. We find record coherence times in alkali-metal atom tweezer arrays and a high global single-qubit gate fidelity, limited by technical noise. Further, we additionally characterize the fidelity of quantum transport channels for moves and trap transfer at relevant length scales, utilizing ra-
ndomized benchmarking. Our results usher in a new generation of neutral atom quantum processors based on several thousand qubits, particularly relevant for QEC20,35. Additionally, largescale programmable devices enabling advances in quantum metrology8,13–15,30 and simulation31–33 are made accessible through this work. For example, our platformwith the demonstrated qubit numbers—could be used for verifiable quantum advantage with low-depth evolution33,34. Tweezer clocks could be scaled using nearin-
frared, high-power tweezers for loading and imaging57 before transferring atoms to magic-wavelength traps for clock operation8,13–15. We also foresee applications in quantum simulation for problems where boundary effects
play an important role1,9–11,31, which can be minimized with the large system sizes demonstrated here. Finally, our work indicates that further scaling of the optical tweezer array platform to tens of thousands of trapped atoms should be achievable with current technology, while essentially preserving high-fidelity control. In our present apparatus, several factors limit the number of sites. One limitation is the finite number of pixels of each SLM (reducing the diffraction efficiency as the array-
 size is increased), along with reduced SLM diffraction efficiency at higher incident laser powers. By using available higher resolution SLMs, and by exploring techniques with higher pixel modulation depth58, we hope to utilize both power and field of view more efficiently. Furthermore, we observe worsening optical aberrations at tweezer powers greater than that in the present study due to thermal heating of the objective. This is the main limitation on atom number for the results in this work, ev-
en after aberrations were mitigated using the SLM (Methods). This constraint could be circumvented by utilizing an objective with a housing material that retains less heat or with integrated cooling strategies. Such upgrades should allow us to almost double the number of tweezers that we create using two fiber amplifiers. We further anticipate the potential to switch from polarization combination to wavelength-based array combination, opening up further avenues for increasing tweezer number with s-
imilar techniques to those utilized in this work. Atom numbers may further be increased in our array with the same number of tweezers by utilizing enhanced loading59 or re-loading techniques17,60. Already in the near term, we expect to increase the number of atomic qubits to over ten thousand with the current system using a subset of these techniques.
[1] Browaeys, A. & Lahaye, T. Many-body physics with individually controlled Rydberg atoms. Nat. Phys. 16, 132142 (2020). [2] Kaufman, A. M. & Ni, K.-K. Quantum science with optical tweezer arrays of ultracold atoms and molecules. Nat. Phys. 17, 1324–1333 (2021). [3] Saffman, M. Quantum computing with atomic qubits and Rydberg interactions: progress and challenges. J. Phys. B: At. Mol. Opt. Phys. 49, 202001 (2016).
[4] Henriet, L. et al. Quantum computing with neutral atoms. Quantum 4, 327 (2020). [5] Bluvstein, D. et al. A quantum processor based on coherent transport of entangled atom arrays. Nature 604, 451–456 (2022). [6] Graham, T. M. et al. Multi-qubit entanglement and algorithms on a neutral-atom quantum computer. Nature 604, 457–462 (2022). [7] Ma, S. et al. Universal gate operations on nuclear spin qubits in an optical tweezer array of 171Yb atoms. Phys. Rev. X 12, 021028 (2022). [8] Finkelstein, R.-
 et al. Universal quantum operations and ancilla-based read-out for tweezer clocks. Nature 634,
321–327 (2024). [9] Bernien, H. et al. Probing many-body dynamics on a 51atom quantum simulator. Nature 551, 579–584 (2017). [10] Ebadi, S. et al. Quantum phases of matter on a 256-atom programmable quantum simulator. Nature 595, 227–232 (2021). [11] Scholl, P. et al. Quantum simulation of 2D antiferromagnets with hundreds of Rydberg atoms. Nature 595, 233–238 (2021). [12] Shaw, A. L. et al. Benchmarking highly entangled states on a 60-atom analogue quantum simulator. Nature 628, 71–77 (2024). [13-
] Norcia, M. A. et al. Seconds-scale coherence on an optical clock transition in a tweezer array. Science 366, 93–97 (2019). [14] Madjarov, I. S. et al. An Atomic-Array Optical Clock with Single-Atom Readout. Phys. Rev. X 9, 041052 (2019). [15] Young, A. W. et al. Half-minute-scale atomic coherence and high relative stability in a tweezer clock. Nature 588, 408–413 (2020). [16] Pause, L. et al. Supercharged two-dimensional tweezer
ACCELERATEDARTICLEPREVIEW

 6
array with more than 1000 atomic qubits. Optica 11, 222–226 (2024). [17] Norcia, M. A. et al. Iterative assembly of 171Yb Atom Arrays with Cavity-Enhanced Optical Lattices. PRX Quantum 5, 030316 (2024). [18] Gyger, F. et al. Continuous operation of large-scale atom arrays in optical lattices. Phys. Rev. Res. 6, 033104 (2024). [19] Preskill, J. Quantum Computing in the NISQ era and beyond. Quantum 2, 79 (2018). [20] Xu, Q. et al. Constant-overhead fault-tolerant quantum computation with reconfigura-
ble atom arrays. Nat. Phys. 20, 1084–1090 (2024). [21] Bluvstein, D. et al. Logical quantum processor based on reconfigurable atom arrays. Nature 626, 58–65 (2024). [22] Evered, S. J. et al. High-fidelity parallel entangling gates on a neutral-atom quantum computer. Nature 622, 268272 (2023). [23] Ma, S. et al. High-fidelity gates and mid-circuit erasure conversion in an atomic qubit. Nature 622, 279–284 (2023). [24] Zhang, B., Peng, P., Paul, A. & Thompson, J. D. Scaled local gate controller for -
optically addressed qubits. Optica 11, 227–233 (2024). [25] Barredo, D., de L ́ese ́leuc, S., Lienhard, V., Lahaye, T. & Browaeys, A. An atom-by-atom assembler of defect-free arbitrary two-dimensional atomic arrays. Science 354, 1021–1023 (2016). [26] Endres, M. et al. Atom-by-atom assembly of defect-free one-dimensional cold atom arrays. Science 354, 10241027 (2016). [27] Kim, H. et al. In situ single-atom array synthesis using dynamic holographic optical tweezers. Nat. Commun. 7, 13317 (2016). [-
28] Bruzewicz, C. D., Chiaverini, J., McConnell, R. & Sage, J. M. Trapped-ion quantum computing: Progress and challenges. Appl. Phys. Rev. 6, 021314 (2019). [29] Kjaergaard, M. et al. Superconducting Qubits: Current State of Play. Annu. Rev. Condens. Matter Phys. 11, 369–395 (2020). [30] Rosenband, T. & Leibrandt, D. R. Exponential scaling of clock stability with atom number. Preprint at http://arxiv.org/abs/1303.6357 (2013). [31] O’Rourke, M. J. & Chan, G. K.-L. Entanglement in the quantum phases-
 of an unfrustrated Rydberg atom array. Nat. Commun. 14, 5397 (2023).
[32] Julia`-Farr ́e, S., Vovrosh, J. & Dauphin, A. Amorphous quantum magnets in a two-dimensional Rydberg atom array. Phys. Rev. A 110, 012602 (2024). [33] Haferkamp, J. et al. Closing Gaps of a Quantum Advantage with Short-Time Hamiltonian Dynamics. Phys. Rev. Lett. 125, 250501 (2020). [34] Ringbauer, M. et al. Verifiable measurement-based quantum random sampling with trapped ions. Nat. Commun. 16, 106 (2025). [35] Bravyi, S. et al. High-threshold and low-overhead faulttolerant quantum memory. Na-
ture 627, 778–782 (2024). [36] Huie, W. et al. Repetitive Readout and Real-Time Control of Nuclear Spin Qubits in 171Yb Atoms. PRX Quantum 4, 030337 (2023). [37] Lis, J. W. et al. Midcircuit Operations Using the omg Architecture in Neutral Atom Arrays. Phys. Rev. X 13, 041035 (2023). [38] Norcia, M. et al. Midcircuit Qubit Measurement and
Rearrangement in a 171Yb Atomic Array. Phys. Rev. X 13, 041034 (2023). [39] Shaw, A. L. et al. Multi-ensemble metrology by programming local rotations with atom movements. Nat. Phys. 20, 195–201 (2024). [40] Beugnon, J. et al. Two-dimensional transport and transfer of a single atomic qubit in optical tweezers. Nat. Phys. 3, 696–699 (2007). [41] Singh, K. et al. Mid-circuit correction of correlated phase errors using an array of spectator qubits. Science 380, 1265–1269 (2023). [42] Covey, J. P., Ma-
djarov, I. S., Cooper, A. & Endres, M. 2000-Times Repeated Imaging of Strontium Atoms in Clock-Magic Tweezer Arrays. Phys. Rev. Lett. 122, 173201 (2019). [43] Schymik, K.-N. et al. Single Atoms with 6000-Second Trapping Lifetimes in Optical-Tweezer Arrays at Cryogenic Temperatures. Phys. Rev. Applied 16, 034013 (2021). [44] Ozeri, R. et al. Errors in trapped-ion quantum gates due to spontaneous photon scattering. Phys. Rev. A 75, 042329 (2007). [45] Di Leonardo, R., Ianni, F. & Ruocco, G. Computer-
 generation of optimal holograms for optical trap arrays. Opt. Express 15, 1913 (2007). [46] Norcia, M., Young, A. & Kaufman, A. Microscopic Control and Detection of Ultracold Strontium in OpticalTweezer Arrays. Phys. Rev. X 8, 041054 (2018). [47] Blodgett, K. N. et al. Imaging a 6Li Atom In An Optical Tweezer 2000 Times with Λ-Enhanced Gray Molasses. Phys. Rev. Lett. 131, 083001 (2023).
[48] Gullion, T., Baker, D. B. & Conradi, M. S. New, compensated Carr-Purcell sequences. J. Magn. Reson. 89, 479–484 (1990). [49] Knill, E. et al. Randomized benchmarking of quantum gates. Phys. Rev. A 77, 012307 (2008). [50] Cummins, H. K., Llewellyn, G. & Jones, J. A. Tackling Systematic Errors in Quantum Logic Gates with Composite Rotations. Phys. Rev. A 67, 042308 (2003). [51] Bravyi, S., Poulin, D. & Terhal, B. Tradeoffs for Reliable Quantum Information Storage in 2D Systems. Phys. Rev. Lett.-
 104, 050503 (2010). [52] Dickson, L. D. Optical Considerations for an Acoustooptic Deflector. Appl. Opt. 11, 2196 (1972). [53] Magesan, E. et al. Efficient Measurement of Quantum Gate Error by Interleaved Randomized Benchmarking. Phys. Rev. Lett. 109, 080505 (2012).
[54] Chow, M. N. H. et al. Circuit-Based Leakage-to-Erasure Conversion in a Neutral-Atom Quantum Processor. PRX Quantum 5, 040343 (2024). [55] Tian, W. et al. Parallel Assembly of Arbitrary DefectFree Atom Arrays with a Multitweezer Algorithm. Phys. Rev. Appl. 19, 034048 (2023). [56] Wang, S. et al. Accelerating the Assembly of Defect-Free Atomic Arrays with Maximum Parallelisms. Phys. Rev. Appl. 19, 054032 (2023). [57] Tao, R., Ammenwerth, M., Gyger, F., Bloch, I. & Zeiher, J. High-Fidelity Detec-
tion of Large-Scale Atom Arrays in an Optical Lattice. Phys. Rev. Lett. 133, 013401 (2024). [58] Moreno, I. et al. Diffraction efficiency of stepped gratings using high phase-modulation spatial light modulators. Opt. Lasers Eng. 126, 105910 (2020). [59] Brown, M., Thiele, T., Kiehl, C., Hsu, T.-W. & Regal, C. Gray-Molasses Optical-Tweezer Loading: Controlling
ACCELERATEDARTICLEPREVIEW

 7
Collisions for Scaling Atom-Array Assembly. Phys. Rev. X 9, 011057 (2019). [60] Shaw, A. L. et al. Dark-State Enhanced Loading of an Optical Tweezer Array. Phys. Rev. Lett. 130, 193402 (2023).
ACCELERATEDARTICLEPREVIEW

 8
Fig. 1 | Large-scale tweezer array. a, Representative single-shot image of single cesium atoms across a 11,998-site tweezer array. Inset: magnified view of a subsection of the stochastically loaded array. b, Averaged image of single atoms across a 11,998-site tweezer array. Inset: magnified view of a subsection of the averaged array. Atoms are spaced by 7.2 μm and held in 1061 nm and 1055 nm optical tweezers. The contrast is enhanced for visual clarity. c, Schematic of the optical tweezer array ge-
neration. Tweezer arrays, generated by two spatial light modulators (SLM), at 1061 nm and 1055 nm are combined with orthogonal polarization, and focused through an objective with a numerical aperture (NA) of 0.65 and a field of view (FOV) of 1.5 mm in diameter. The direction of gravity is along yˆ. We collect scattered photons from single atoms through the same objective and image them on a qCMOS camera. d, Histogram of filling fraction. We load 6,139 single atoms on average per experimental itera-
tion (51.2% of the array on average), with a relative standard deviation of 1.13% over 16,000 iterations. e, Summary of the key metrics demonstrated in this work.
Fig. 2 | High-fidelity atom detection in a large-scale tweezer array. Imaging histogram showing the number of photons collected per site and per image. Note that the horizontal axes are weighted photon counts (see text); for non-weighted photon counts, see Ext. Data Fig. 4b. a, Imaging histogram of three randomly selected sites in the array (where x and y respectively denote the horizontal and vertical site indices in the array), and b, averaged over all sites in the array. Per-site histograms are-
 fitted with a Poissonian model that integrates losses during imaging (Methods). The wide separation of peaks for empty and filled tweezers enables the high imaging fidelity presented in this work. The binarization threshold used to determine tweezer occupation is indicated by the vertical dashed line, and the average point-spread functions for the two classifications (atom absent and atom detected) are shown next to their corresponding peaks. Note that we detect no more than one atom in each twee-
zer. Inset: the same histogram presented with a log-scale vertical axis. The weighted average relative error bar per bin is 0.08% (0.05% for the log-scale inset due to the smaller number of bins).
Fig. 3 | Long vacuum-limited lifetime and high imaging survival probability a, Vacuum-limited lifetime.
Array-averaged survival fraction as a function of hold time is plotted. Three experiments are shown in the figure: pulsed cooling, continuous cooling, and no cooling. The green markers show data with a 10-ms 2D PGC block applied every 2 s during the wait time (pulsed PGC). The red markers show data with 2D PGC block continuously applied during the wait time (continuous PGC), while the blue markers show the data without cooling during the wait time (no PGC). The error bars are smaller than the mark-
ers. We find a 1/e lifetime of around 2.2 min without cooling. When the pulsed PGC block is applied, by fitting the data with p(t) ∝ exp(−t/τ ), we find a vacuum lifetime of τ = 22.9(1) min. When the 2D PGC is applied continuously, we obtain τ = 17.7(2) min. b, Array-averaged survival fraction after many successive images. Between each image, we hold the atoms for 10 ms, without applying any cooling beams. We fit the data with p(N ) ∝ pN
1 , where p(N ) is the survival fraction after imaging N times. From the fit, we find a steady-state imaging survival probability of p1 = 0.9998952(1). The light purple fill shows the estimated 68% confidence interval.
Fig. 4 | Long coherence times and high-fidelity single-qubit gates in a large atom array. a, Array-averaged Rabi oscillations between the hyperfine clock states |0⟩ and |1⟩. The fitted Rabi frequency is 24.611(1) kHz. The observed decay after several hundred microseconds stems from the spatially-varying Rabi frequency (Ext. Data Fig. 7b). b, Array-averaged Ramsey oscillations. During free evolution, the microwave drive field is detuned by 1 kHz, resulting in Ramsey oscillations. The characteristic-
 decay time of these oscillations is T ∗
2 = 14.0(1) ms from fitting the average signal of all atoms. The light blue dashed line shows the decay time T ∗(site)
2 = 25.5 ms from fitting individual sites first and averaging the decay time afterwards. c, Measurement of the dephasing time T2 after dynamical decoupling. After an initial π/2 pulse, a variable number of XY16 dynamical decoupling cycles with a fixed time τ = 12.5 ms between π pulses are used to offset the reversible dephasing. The phase of the final π/2 pulse is chosen to be either 0 or π, and subtracting the population difference in these two cases provides the coherence contrast. The contrast -
decay is fitted to obtain T2 = 12.6(1) s. d, Randomized benchmarking of the global single-qubit gate fidelity. For each number of Clifford gates, 60 different random gate strings of this length are applied, after which the overall inverse of the string is applied. For a given gate string length, each translucent marker of a given color represents the return probability for a string of gates while the solid green markers indicate the averaged return probability over the 60 different strings. The in-
set lists all the colors used to indicate the 60 random gate strings for a given length. The decay of the final population to 1/2 is fitted to (1 − d)N and Fc = 1 − d/2 represents the average Clifford gate fidelity.
Fig. 5 | Long-distance and high-fidelity coherent transport. a, Schematic and atom survival for a diagonal (blue) or straight (pink) move for ten tweezers (with depth kB × 0.28 mK) spaced by ∼10.6 μm. Despite being shorter, a straight move needs to be executed more slowly than a diagonal one due to cylindrical lensing. b, Coherence of an atom after being transported diagonally 610 μm (blue) in 1.6 ms or held stationary (gray). c, IRB sequence used to benchmark the move fidelity. Random Clifford ga-
tes are interleaved between each of the M (< N ) moves, with the total number of gates N constant. d, Benchmarking results for repeated 610 μm diagonal moves. Top: atom survival for varied times, fitted to a clipped Boltzmann distribution (Methods). 1.6-ms moves are used for the middle and bottom panels. Middle panel: IRB return probability for static and transported atoms. Curves are fits that include coherence and atom losses (Methods). Bottom panel: average instantaneous transport fidelity afte-
r a given number of moves, fitted from the IRB return probability (Methods). The curve width represents the 68% confidence interval. The instantaneous fidelity of 99.953(2)% is constant for the first ∼30 moves.
ACCELERATEDARTICLEPREVIEW

 9
Fig. 6 | Large-scale high-fidelity coherent transfer between static and dynamic traps. a, Layout of the transfer experiment showing 195 dynamic AOD traps (bright blue) overlapped with 1061-nm static SLM traps (pale blue). Atoms are repeatedly picked up and moved away by 2.4 μm, then held for 100 μs. During this time, the SLM traps are turned off to ensure that atoms left behind in SLM traps are removed (this way, atom survival correctly corresponds to a successful pick-up and drop-off). Then SLM t-
raps are subsequently turned on, and atoms held in AOD tweezers are moved back and dropped off into the SLM traps. For IRB data shown in (d), gates are interleaved between each round-trip transfer. A pick-up and split-move operation (or equivalently a merge-move and drop-off operation) are considered a ‘one-way transfer’. b, Best hand-optimized trajectory for trap transfer (Methods), using a quadratic depth profile and a constant jerk movement. Here we implement the pick-up and the tweezer separat-
ion move in sequence, without overlap. c, To speed up atom transfer between static and dynamic traps while preserving high survival, we optimize, via machine learning, a trajectory where dynamic AOD traps are simultaneously ramped and moved. The dashed lines and black dots represent the values that are optimized by the algorithm. d, Top panel: atom survival as a function of the number of repeated one-way transfers for various one-way ‘pick-up & split’ total durations. A 400μs trajectory is optimiz-
ed through machine learning. Middle panel: return probability after IRB for the machine-learning optimized trajectory. Bottom panel: extracted instantaneous fidelity of a coherent one-way transfer as a function of the number of previous one-way transfers.
ACCELERATEDARTICLEPREVIEW

 10
METHODS
Vacuum apparatus
A schematic of our vacuum system is shown in Ext. Data Fig. 1. After the initial chamber assembly and multi-round baking process, we fire two titanium sublimation pumps (TSPs), mounted such that every surface except the rectangular portion of the glass cell and the interior of the ion pump are covered by line-of-sight sputtering. This creates a vacuum chamber in which essentially every surface is pumping. We do not find it necessary to re-fire the TSPs in order to maintain the vacuum level that we-
 measure. We additionally maintain ultra-high vacuum conditions with an ion pump, connected to the primary chamber via a 45◦ elbow joint. The secondary, science chamber consists of a rectangular glass cell (JapanCell) optically bonded to a 24-cm long glass flange (also sputtered by the TSP) that connects to the primary chamber. From lifetime measurements of tweezer trapped atoms (see main text) and collisional cross-sections available in literature61, we estimate the pressure in the glass cell to -
be ∼7 × 10−12 mbar, consistent with vacuum simulations using the MolFlow program62.
Tweezer generation
We utilize light from two fiber amplifiers, at 1061 nm (Azurlight Systems) and 1055 nm (Precilasers) to create the optical tweezers through an objective (Special Optics) with NA = 0.65 at the trapping wavelengths (NA = 0.55 at the imaging wavelength of 852 nm) and a field of view of 1.5 mm. The tweezers are imprinted onto the light in each pathway by a Meadowlark phaseonly Liquid Crystal on Silicon Spatial Light Modulator (SLM) that is water cooled to maintain a temperature of 22 ◦C. On each path,-
 there are two 4f telescopes utilized to map the SLM phase pattern onto the back focal plane of the objective, which subsequently focuses the tweezers into the vacuum cell as shown in Fig. 1c. In the first focal plane after the SLM, we perform spatial filtering on the two paths in order to remove the 0th order and reflect the 1st-order diffracted light from the SLM. On the 1061-nm path we use two D-mirrors spaced by a few hundred microns, and on the 1055-nm path we use a mirror with a manufactured-
 300-μm hole as spatial filters to separate 0th-order light from the tweezer light. The 1055-nm tweezers are essentially used to fill the gap between two halves of the array created by the 1061-nm tweezers (Ext. Data Fig. 2a), although we anticipate increasing the number of tweezers created with this path after implementing the objective heat-dissipation strategies as described in the discussion and outlook section. We currently use 120 W of power from the 1061-nm fiber amplifier, and around 10 W -
of power from the 1055-nm fiber amplifier to create the tweezers. On the 1061-nm
path after all the optical elements, we estimate that only around 35-40 W of the total power reaches the objective and, given measurements of trap parameters, that we have ∼1.4 mW per tweezer. At low optical power, we estimate a ratio between the incoming power and the light diffracted into the 1st order of the SLM of around 65% into the full array, and at full optical power, we estimate a diffraction efficiency of around 45%, even after optimizing the SLM global calibration at high power. We leav-
e further improvement to future work. While one would like to separate the 1st-order hologram phase pattern and 0th-order reflection in a more convenient manner, the largest angular separation that is possible between the 0th and 1st orders of the SLM, as determined by the SLM pixel size, would not separate the large tweezer array from the 0th order, due to the large angular distribution of the tweezers. Furthermore, the diffraction efficiency of the SLM into the 1st order decreases with increasin-
g separation from the 0th order. Therefore, it is the most power-efficient choice to center the tweezers around the 0th order, and to filter it at the first focal plane after the SLM. This decreasing diffraction efficiency with increasing distance from the 0th order, at the center of the array, informs our choice of a circular tweezer array. We highlight the development of these techniques of 0th order filtering as uniquely necessary for a large-scale array. The SLM phase patterns are optimized wi-
th a weighted Gerchberg-Saxton (WGS) algorithm45,63–65 to create a tweezer array that we uniformize through a multi-step process, first adjusting weights in the algorithm based on photon count on a CCD camera that images the tweezers63, and secondly adjusting weights based on the loading probability of each site in the atomic array with a variable gain feedback, as demonstrated on smaller arrays in previously developed schemes66. We implement around 5 iterations of each step in order to achieve th-
e loading and survival probabilities that are shown in Ext. Data Figs. 2c, 5a. The WGS goal weight Wi on each tweezer for the ith iteration is given by
Wi = 1 − G(1 − √Hi)
⟨Wi⟩ ,
normalized by the mean weight ⟨Wi⟩, where the height Hi is determined by adjusting the value from the previous iteration using the loading probability per tweezer Pload, normalized by the average loading probability,
Hi = Hi−1 1 − g 1 − Pload
⟨Pload⟩ .
We choose the weight of the gains G and g in order to reach convergence for the given configuration of tweezers (here we use a value of 0.6 for each), and additionally add a cap to the allowable values of Hi in order to avoid oscillatory behavior. We show in Ext. Data Fig. 2b, the weights for tweezers for different angular diffraction off of the SLM, obtained after utilizing the
ACCELERATEDARTICLEPREVIEW

 11
loading-based uniformization. We also show the theoretical weights that would be expected based on the inverse of the naive diffraction efficiency calculations for blazed gratings. The diffraction efficiency is given by
DE = sinc2 πax
λf sinc2 πay
λf , where a is the SLM pixel
size, x and y are the horizontal and vertical displacements from the 0th order at the tweezer plane, f is the effective focal length of the objective, and λ is the trapping wavelength. We expect that some divergence in behavior could be due to angular-dependent transmission in optics in the imaging path. We furthermore add aberration correction to the SLM phase hologram based on Zernike polynomials67. We perform a gradient-descent-type optimization to determine the amplitude of the Zernike polynom-
ial coefficients that maximizes the filling fraction in the array. We iterate between this optimization and 2-3 rounds of loading-based uniformization. To align the tweezers created by the two fiber amplifiers in angle, we change the goal configuration for the WGS algorithm. The CCD camera on which we image the tweezers after the vacuum cell provides a helpful reference for this alignment.
Loading single atoms in tweezers
The typical experimental sequence can be seen in Ext. Data Fig. 1c. From an atomic beam generated with a twodimensional magneto-optical trap (2D MOT) of cesium133 atoms (Infleqtion CASC), we load ∼107 atoms in the three-dimensional (3D) MOT in 100 ms using three pairs of counter-propagating beams in each axis and create a ∼1.6-mm 1/e2 diameter MOT cloud. The magnetic field gradient is set to 20 G cm−1 with a quadrupole configuration using a pair of coils that is perpendicular to the objective axis-
. Each beam has a size of 2.5 cm in diameter, detuning of ∆ = −3.17Γ from the bare atom |6S1/2, F = 4⟩ ↔ |6P3/2, F ′ = 5⟩ resonant transition (Ext. Data Fig. 1b), and a total intensity of 10I0 (1.6I0 for repumping beams), where I0 ≈ 1.1 mW cm−2 is the saturation intensity of the transition between the stretched states, and Γ ≈ 2π × 5.2 MHz is the natural linewidth of the 6P3/2 electronically excited state68. After loading atoms into the 3D MOT, we switch off the quadrupole magnetic field and, at t-
he same time, lower the intensity to 7I0 and detune the laser further to ∆ = −19.5Γ to cool atoms below the Doppler temperature limit via 3D polarization gradient cooling (PGC), which loads atoms into ∼kB × 0.18-mK depth tweezers, and parity projects the number of atoms in a tweezer69 to either 0 or 1. This 3D PGC is applied for 40 ms, after which we wait another 40 ms for the remaining atomic vapor from the MOT to drop and dissipate. The optical tweezer array is kept on for the entirety of the ex-
periment. Generating optical tweezers with an SLM results in
weak out-of-plane traps that can trap sufficiently cold atoms from the MOT70. This could lead to a strong background in the image or to false positives detection of single atoms, both of which affect the imaging fidelity. To avoid this issue, we apply a resonant pushout beam for 2 μs, apply 2D PGC for 30 ms, quasi-adiabatically rampdown the tweezer power to one-fifth of the full power, wait for 70 ms, then ramp-up the power. After this sequence, we apply 2D PGC for 180 ms with an added bias magnet-
ic field of 0.19 G. Note that this sequence for removing atoms in spurious traps was not fully optimized and we believe this can be readily shortened in future work. In particular, the bias field during the 180-ms PGC segment could be more carefully optimized to reduce this time.
Single-atom imaging
For single-atom imaging in the optical tweezers, we use two pairs of PGC beams in a crossed-beam configuration (1/e2 diameter of 3.5 mm, 1.0 mW total). One pair is frequency detuned relative to the other pair. Each PGC beam copropagates with a repumping beam (∼100 μW) and is independently-steered. Auxiliary vertical PGC beams (not shown) aligned at a slight grazing angle along the objective axis are not used due to high background reflections off the uncoated glass cell surface. During imaging, we-
 increase the total intensity of the 2D PGC beams by ∼3% and set the detuning to ∆ = −15.5Γ from the bare atom |6S1/2, F = 4⟩ ↔ |6P3/2, F ′ = 5⟩ resonant transition. We collect scattered photons for 80 ms on a qCMOS camera (Hamamatsu ORCA-Quest C1555020UP), which we choose for its fast readout time and its high resolution. The optical losses in the imaging system result in around 2.7% of scattered photons entering the camera, of which 44% are detected on the sensor due to the quantum efficiency at-
 852 nm. The total magnification factor of the imaging system is 5.1. The averaged point-spread function waist radius is measured to be 1.7 pixels on the qCMOS camera, corresponding to 7.8 μm on the camera plane or 1.5 μm on the atom plane. We estimate that, accounting for a finite atomic temperature (up to 50 μK in this simulation) and camera sensor discretization, the ideal PSF radius should be 1.25 pixels. We leave an investigation of the discrepancy to future work. In addition to the high-fide-
lity high-survival demonstrated and characterized in Fig. 2 and Ext. Data Fig. 4,5, we show in Ext. Data Fig. 6 imaging results acquired with an imaging time of 20 ms. Notably, this imaging data was acquired with a PGC detuning of ∆ = −9.5Γ. We measure an imaging fidelity and survival probability of 99.9571(4)% and 99.176(1)%.
ACCELERATEDARTICLEPREVIEW

 12
Imaging model and characterization
We now describe the binarization procedure applied to each image acquired by the qCMOS camera. For each experimental run, typically consisting of a few hundred to a few thousand iterations, we apply this procedure anew. We identify all sites by comparing the average image with the known optical tweezer array pattern generated by the SLM. The signal for each site and each image is obtained by weighting71 the number of photons per pixel with a function W (u, v) (Ext. Data Fig. 4a). These weights are-
 optimized via a quasi-Newton numerical method to maximize the imaging fidelity obtained with the model-free approach described below. This approach is agnostic of the photon distribution and relies on the consistency of the imaging outcomes. This helps guarantee that the imaging fidelity we quote is accurate, and not artificially larger due to overfitting. We then compare the signal obtained for each site and each image with a threshold to determine if an atom has been loaded. To position the thr-
eshold and estimate the fidelity, we employ two complementary methods: an analytical model that predicts the shape of the imaging histogram by integrating the loss probability in a Poisson distribution, and a model-free approach that estimates the fidelity by identifying anomalous atom detection results in three consecutive images. The first method infers classification errors from the shape of the photon histogram while the second method detects errors directly; thus, the first method requires le-
ss samples to reach satisfactory accuracy. This first method is also compatible with any type of experimental runs while the second one requires to specifically acquire three consecutive images. Hence, we use the first method to position the binarization threshold in most experimental runs, as well as for site-by-site analysis; we use the second method to accurately estimate the fidelity with a single array-wide threshold. The fidelities quoted in the main text are calculated using this second met-
hod. We first describe the analytical model that predicts of the shape of histogram, which we call “lossy Poisson model”. We fit six parameters: the initial filling fraction (before the first image) F , the mean number of photons collected from the background light λ0 and the atoms λ1, the broadening from an ideal Poisson distribution r0 and r1, and the pseudo-loss probability L. The exact meaning of all parameters is described below. We first derive this model in the absence of broadening from an-
 ideal Poisson distribution. We are interested in the photon distribution given that there is no atom at a given site at the beginning of imaging P (N = n|0) and the photon distribution given that there is an atom at this site at the beginning of imaging P (N = n|1), where N is the number of photons collected. For the background photon distribution, we simply assume a Poisson distribution: P (N = n|0) = e−λ0 λ0n/n!. For the atom photon distribution we derive an expression by considering a loss
rate model where each photon collection event (occurring with probability λ1dt) imparts a loss probability L/λ1. By integrating over t ∈ [0, 1] the system of equations that describes the evolution of the joint distribution of atom presence and photon count, we find the distribution given that one atom was initially present,
P (N = n|1) = (λ0 + λ1 − L)ne−(λ1+λ0)
n!
+L
λ1
e
λ0 L
λ1−L 1 − L
λ1
n−1
(n − 1)!
× Γ n, λ0
1 − L/λ1
− Γ n, λ1 + λ0
1 − L/λ1
.
Here, Γ represents the upper incomplete gamma function. The real loss probability during imaging is then given by L ̃ = 1 − e−L. This equation illustrates the two mechanisms that limit the imaging fidelity in experiments with single-atom imaging. The first mechanism, represented by the first term in the r.h.s. of the equation, manifests as a Gaussian/Poissonian overlap between the two peaks of the photon distribution, reflecting our ability to record a significant photon count above the imaging no-
ise floor. Finite scattering rate, limited photon collection efficiency, background light leakage from the imaging beams or the ambient light, and readout noise from the camera contribute to this limitation. The other mechanism that limits imaging fidelity is loss of atom during imaging. This manifests as a characteristic ‘bridge’-like feature, and is represented by the second term in the r.h.s. of the above equation. The probability density in the bridge is small but finite across a wide range of-
 photon counts between the two peaks of the imaging histogram72. The overall photon probability distribution is then given by P (N = n) = F P (N = n|1)+(1−F )P (N = n|0). For practical purposes we empirically include a broadening of the Poisson distribution by writing P (N = n) = F P (N = n/r1|1)/r1 + (1 − F )P (N = n/r0|0)/r0 and by effectively considering non-integer photon numbers (by replacing factorials with the gamma function). For large n this amounts to considering a Gaussian distribution -
for either of the two peaks, but with the added benefit of including the loss through a physically-motivated derivation using a Poisson process. In this model the true negative probability is given by F0 = R T
0 P (N = n|0)dn, where T denotes the
threshold; and the true positive probability, by F1 =
R∞
T P (N = n|1)dn. Finally the imaging fidelity can be
estimated as F = F F1 + (1 − F )F0 and the optimal threshold T can be found by maximizing the fidelity. We find that this model performs well when predicting the shape of the histogram site-by-site (Fig. 2a), but fails when the distribution of the background or atom photons in the array is non-Gaussian. The second method we use to characterize imaging fidelity and survival requires no assumption for the photon
ACCELERATEDARTICLEPREVIEW

 13
distribution, but considers that the imaging survival and fidelity is identical for three successive images46,73. We start by estimating the probability P ̃x1x2x3 of the presence of an atom in three images being x1x2x3, where xi is a Boolean, equal to 1 if there is an atom and 0 if there is none,
P ̃111 = S2F,
P ̃110 = (1 − S)SF,
P ̃100 = (1 − S)F,
P ̃000 = 1 − F.
Here, S is the survival probability during imaging and F is the initial filling fraction. From this we can estimate the probability of detecting y1y2y3 as Py1y2y3 =
P
x1x2x3 P (y1|x1)P (y2|x2)P (y3|x3)P ̃x1x2x3 . The condi
tional probabilities on the detection categorization given the true atomic presence are P (1|1) = F1, P (0|1) = 1 − F1, P (1|0) = 1 − F0, and P (0|0) = F0. We use the method of least squares to minimize the difference between the experimental frequencies of bitstrings y1y2y3 and the Py1y2y3 by tuning the four parameters F , S, F0 and F1. The imaging fidelity is then defined as F = F F1 + (1 − F )F0. The array-wide binarization threshold is chosen to maximize the imaging fidelity (Ext. Data Fig. 4c-
). Using this method, we find an imaging fidelity F = 0.9999374(8), with a false positive probability 1 − F0 = 7.01(8) × 10−5 and a false negative probability 1−F1 = 5.5(1)×10−5; we find the survival to be S = 0.999864(2), slightly lower than the steady-state imaging survival probability measured by repeated imaging. Finally, we can inject the model-free survival probability into the lossy Poisson model to increase its accuracy (trying to extract the loss directly from the lossy Poisson model woul-
d indeed be inaccurate, since losses appear as a small tail feature between the two peaks of the imaging histogram). Using this approach, and fitting each site independently, we find an average imaging fidelity of 99.992(1)%, in reasonable agreement with the model-free imaging fidelity. By setting the atom loss to zero while keeping the five other fit parameters constant for each site, we can estimate a hypothetical imaging fidelity in the absence of atomic loss of 99.999(1)%. This analysis also i-
llustrates that fitting the imaging histogram with a Gaussian or Poissonian model without including losses leads to overestimating imaging fidelities67. Note that for data shown in this work pertaining to loading and imaging, we use images 2-4 of a set of 16,000 iterations containing each 4 successive images, since we a posteriori realize that the survival probability and imaging fidelity are significantly higher than for images 13. In this latter case we measure an imaging fidelity of 0.999882(1)-
 and survival of 0.999817(2). This could be due to remaining background vapor from the MOT loading stage, or to imperfect background atom removal during the off-plane trapped atom push-out stage. To quantify the combined survival and fidelity in each of the im
ages, we can use the conditional probability of observing one atom given that one atom was observed in the previous image, p(1|1). We find p(1|1) = 0.99963 between the first and second images, 0.99977 between the second and the third images, and 0.99981 between the third and the fourth one. These numbers still can qualify as ‘highfidelity and high-survival’. In principle, we could obtain the same fidelity and survival from the first image by waiting more for the background vapor to diffuse in the -
chamber or by extending our push-out scheme. In the context of atomic rearrangement, we expect that several rounds of imaging and rearrangement will be required to maximize the defect-free probability, as is already common in experiments with dozens or hundreds of atoms17,26. Hence, the lower fidelity and survival in the first image should not impact the final efficiency of rearrangement.
Qubit state preparation, control, and readout
To initialize the tweezer-trapped atoms in the |6S1/2, F = 4, mF = 0⟩ ≡ |1⟩ state, we perform 5 ms
of optical pumping on the 895 nm, F = 4 ↔ F ′ = 4 D1 transition. Simultaneously, we repump atoms in the F = 3 hyperfine ground state on the 852 nm, F = 3 ↔ F ′ = 4 D2 transition. Both beams are coaligned and linearly polarized using a Glan-Thompson prism, parallel to the quantization axis defined by a 2.70-G bias magnetic field to drive π-transitions. The beams are focused to a dimension of 3.3 mm × 73 μm (1/e2 waists) at the tweezer array. Angular momentum selection rules forbid the mF = 0 ↔ m′
F = 0 transition for ∆F = 0, and the atomic population accumulates in |1⟩ after multiple spontaneous emissions. We estimate a state preparation fidelity of 99.2(1)%, inferred from the early-time contrast of the Rabi oscillations in Fig. 4a. After preparing the atoms in |1⟩, the trap depth is adiabatically lowered to kB × 55 μK for microwave operation. The setup used to drive microwave transitions is described in Ext. Data Fig. 7a. Similarly to other experiments74,75 the RF signal from an arbitrary-
 waveform generator (AWG, Spectrum Instrumentation M4i.6622x8) IQ-modulates a microwave signal generator (Stanford Research Systems SG386) set at a fixed frequency of 4.6 GHz. The signal is then frequency-doubled, filtered, passed through an isolator before being amplified to 10 W of microwave power (Qubig QDA). A 10 dBi-gain pyramidal horn emits the microwave field on the atom array at a distance of 15 cm. For state readout we apply a resonant |6S1/2, F =
4⟩ ↔ |6P3/2, F ′ = 5⟩ pulse to push out atoms in |1⟩, before imaging remaining atoms in |0⟩ with the scheme described above. By measuring the off-resonantly depumped population during push-out after pumping all atoms in |F = 4⟩, we infer a spin-resolved push-out fidelity of 99.88(5)%. The data in Fig. 4, Fig. 5, Ext. Data Fig. 7, Ext. Data Fig. 8, and Ext. Data Fig. 10
ACCELERATEDARTICLEPREVIEW

 14
are not corrected for state preparation and measurement (SPAM) errors. Instead, our measurements of the coherence time and gate fidelity rely on protocols that are intrinsically insensitive to SPAM errors. Microwave spectroscopy reveals that the initial atomic population is close to an even distribution among the F = 4 sublevels. We measure a depumping rate of 0.064(5) μs−1 from F = 4 to F = 3 at our operating D1 optical pumping beam intensity when the D2 repump is shuttered off. The intensity of -
the D2 repump is increased until there is no measurable improvement in state preparation fidelity. Factors that limit the state preparation include imperfect linear polarization purity, spatial variations in the pump laser intensity due to interference fringes arising from the surface of the science glass cell, and heating incurred during the optical pumping. Modeling our magnetic field coils, we estimate that the local direction of the bias magnetic field deviates by < 10−5 radians for distances -
of ∼1 mm from the geometric center, and this has a negligible impact on the state preparation of our large scale array. Other state preparation schemes with higher fidelity have been demonstrated previously on smaller arrays and could be implemented in our system in the future22,76.
Characterizing the atomic qubits
To characterize the Rabi frequency across the array, we drive the qubit for variable times and measure the population in |1⟩, both at early times (0-150 μs) and at late times (900-1,000 μs). We observe a spatially-varying Rabi frequency across the array (Ext. Data Fig. 7b), with a gradient that is orthogonal to the propagation axis of the microwave field, which points to a reflection off a vertical metallic optical breadboard next to the vacuum cell. We also characterize the dephasing in the array-
 using Ramsey interferometry. During the free-evolution time, we detune the microwave drive field by δ = 2π × 1 kHz from the average qubit frequency. The envelope of the Rabi oscillation has a Gaussian decay with a characteristic time T2∗ = 14.0(1) ms. However, when considering
each site individually we find an average ⟨T ∗(site)
2 ⟩ = 25.5 ms with a standard deviation of 3.2 ms (in the per-site case we fit the oscillation decay with the dephasing decay function from Ref.77). This shows that dephasing across the array primarily occurs because of trap depth inhomogeneities (Ext. Data Fig. 2d): assuming a Gaussian distribution of trap depth with a standard deviation δU , the qubit frequencies in the array also follow a Gaussian distribution, which results in an ensemble-wide dephasing time T ∗(inh)
2 = √2ħ/(η δU ) where η is the ratio of the scalar differential polarizability of the hyperfine ground states to their polarizability at the fine structure level77. On the other hand, finite atomic temperature limits the per-site dephasing time T ∗(site)
2 . We observe an un
even distribution of T2∗ across the atom array (Ext. Data
Fig. 8b), with a significantly lower T2∗ measured for atoms trapped in tweezers at 1055 nm than for those trapped in the bottom half of tweezers at 1061 nm. This discrepancy could be due to worse optical aberrations in these areas that decrease the efficiency of polarization-gradient cooling, or due to different intensity noise profiles from the different fiber amplifiers or SLMs used on the two pathways. These data reveal that further investigation of noise sources specific to lasers or tweezer p-
athways could elucidate limiting factors on coherence times in neutral atom arrays beyond those due to photon scattering and dephasing processes44,78. In order to relate T2∗ and trap depth inhomogeneity or atomic temperature, the parameter η can be calculated as the ratio of the differential light shift of the hyperfine states to the electronic ground state light shift, which yields η = 1.50 × 10−4. (At the few-percent accuracy level, it becomes important to account for higherorder processes79,80,-
 but such accuracy is not required here). We corroborate this value by experimentally measuring the differential light shift via Ramsey interferometry at different depths (Ext. Data Fig. 7c). We find η = 1.3(1) × 10−4, in reasonable agreement with the theoretical value. This allows us to estimate the atomic temperature during microwave operation as77
T = √e2/3 − 1 × 2ħ/(ηkB⟨T ∗(site)
2 ⟩) ≈ 4.3 μK (assuming the temperature is sufficiently homogeneous to invert the fraction and the mean). This temperature may differ from the effective atomic temperature during other points of the experimental sequence that do not include the ramp-down and state preparation steps that may decrease and increase the temperature respectively.
Dynamical decoupling
In order to extend the operation time of a realistic quantum processor well beyond the dephasing time of the array, we can apply dynamical decoupling on the atomic qubits. We empirically find that a period of 12.5 ms yields the longest dephasing time of 12.6(1) s for the reduced trap depth of kB × 55 μK. This timescale is a record for hyperfine qubit tweezer array5,6 and approaches results for a single hyperfine qubit in a customized blue-detuned trap81, alkali atoms in an optical lattice76, and n-
uclear qubits in a tweezer array82 We vary the number of symmetric XY16 cycles and we obtain the coherence contrast by applying a final π/2 pulse with phase 0 or π. Subtracting the population difference in these two cases yields the coherence contrast after the dynamical decoupling sequences. We investigate in Ext. Data Fig. 7g the coherence time T2 as a function of the trap depth for two different periods between π pulses (only for atoms trapped with the fiber amplifier at 1061 nm), 12.5 ms and 6-
.2 ms. We attribute the different optimal periods at different depths to a trade-off between the unfiltered noise at a specific
ACCELERATEDARTICLEPREVIEW

 15
dynamical decoupling period83 and the effective depolarization induced by each π pulse. At the full trap depth, we measure a coherence time of 3.19(5) s, which still constitutes a record for hyperfine qubits in a tweezer array. Considering the Raman scattering rate at a trap depth of kB × 0.18 mK, we expect that a significantly longer coherence time should be achievable. Based on this observation and the discrepancy in coherence time between atoms trapped at 1061 nm and 1055 nm seen in siteresolve-
d data (Ext. Data Fig. 8c), we posit that the observed coherence time is limited by intensity noise due to the trapping lasers or the SLMs. We leave further investigation to future work.
Single-qubit gate randomized benchmarking
We measure our single-qubit gate fidelity via randomized benchmarking, similarly to Refs.84,85. For each given length n, we select Un−1, . . . , U0 at random from the 24 unitaries composing the Clifford group. We then apply U−1Un−1 · · · U0 where U−1 is the inverse of Un−1 · · · U0. We decompose Clifford gates into elementary rotations around Bloch sphere axes using the zyz Euler angles. Rotations around z are implemented by offsetting the phase of all following x and y rotations86. Due to the inh-
omogeneous Rabi frequency, each rotation must be applied using length error-resilient composite pulses. Among common families of error-resilient pulses50,87,88, we find that SCROFULOUS performs the best in our case. The SCROFULOUS implements a rotation of angle θ around the axis indexed by the angle φ on the Bloch sphere equatorial plane (abbreviated as θφ) with a symmetric composite pulse (θ1)φ1 (θ2)φ2 (θ3)φ3 where θ1 = θ3 = arcsinc(2 cos(θ/2)/π), φ1 = φ3 =
φ + arccos − π cos θ1
2θ1 sin(θ/2) , θ2 = π and φ2 = φ1 −
arccos − π
2θ1 . In our implementation, the average pulse
area for a random Clifford unitary is 2.02π. We fit the decay of the final population with the number of applied Clifford gates as 1
2+1
2 (1 − d0)(1 − d)n
where d0 stems from SPAM errors, d is the average depolarization probability at each gate and n is the number of gates. The average Clifford gate fidelity is then given by49: Fc = 1 − d/2. Even though the measured single-qubit gate fidelity is competitive with other state-of-the-art atom arrays experiments6,7,21,89, single-qubit gate fidelities >0.9999 have been reported85,90 in smaller arrays. Moreover, the maximal theoretical fidelity achievable for a given dephasing time is84 F = 3
4+ 1
4(1+0.95(t/T ∗
2 )2)3/2 where t is the
average time needed to apply a Clifford gate, t = ⟨θ⟩/Ω; ⟨θ⟩ being the average pulse area per Clifford gate. Hence, gate fidelities higher than 0.99999 should be achievable solely based on this value. Beyond infidelities due to decoherence, other parameters that may limit single-qubit gate fidelities are: (a) amplitude errors due to instabilities in the microwave power;
(b) phase errors due to the microwave setup; (c) phase errors due to optical tweezer intensity noise; (d) phase errors due to magnetic field noise. We are interested in which of these factors is limiting the gate fidelity. We rule out (a) because we observe that the Rabi frequency is very stable shot-to-shot (variations of less than 0.1 %), and we estimate that such variations should be completely suppressed by the SCROFULOUS pulse. We also rule out (c) since reducing the trap depth further does n-
ot significantly improve the randomized benchmarking results (Ext. Data Fig. 7g), and the fidelity is identical for atoms trapped in tweezers at 1055 nm and 1061 nm (unlike T2∗ and T2). Although we cannot formally rule out (b), we estimate that it is unlikely since active components in the microwave setup have a very low phase noise, and we observe a sub-10 Hz linewidth of the microwave signal with a spectrum analyzer. We also notice a dominant phase noise at 60 Hz in the qubit array due to the ma-
ins AC voltage. We measure the intensity of this noise with a spin-echo sequence, where the time between each pulse is τ = 1/(2 × 60 Hz) (Ext. Data Fig. 7e). Although this low-frequency noise cannot by itself explain the single-qubit gate fidelity loss, it points out more generally to residual magnetic field noise that could be mitigated by shielding the vacuum cell, upgrading the current sources driving the magnetic field coils, and/or by operating at MHz-scale via Raman transitions. This can be -
achieved, for instance, by utilizing the amplitude-modulation setup used for Raman sideband spectroscopy.
Raman sideband spectroscopy with amplitude-modulation setup
In order to measure the axial and radial trapping frequencies we use a Raman setup based on amplitude modulation of a laser beam91. The laser beam, red-detuned by 345 GHz from the D1 electronic transition in 133Cs, is phase-modulated using an resonant electro-optic modulator at 9.2 GHz (Qubig) before reflecting twice off a highly dispersive chirped Bragg grating (Optigrate CBG894-90) that transforms phase modulation into amplitude modulation. Two amplitude-modulated beams with different wavevector-
s k1 and k2 drive sideband transitions, akin to previous works with mode-locked lasers used to address the motion of trapped ions92,93. A schematic of the setup is shown in Ext. Data Fig. 9a. In this configuration, the effective Lamb-Dicke param
eter is ηαLD = |(k1 − k2) · α|
qħ
2mωα , where m represents
the mass of cesium-133, and α denotes the radial or axial motion (with unit vector α). Out of 1 W of fibercoupled amplitude-modulated laser light, each beam has 1-5 mW of laser power and a Gaussian 1/e2 diameter of ∼2 mm. The sideband spectroscopy results are shown in Ext. Data Fig. 9b,c, with radial and axial trapping frequencies measured to be, respectively, 29.30(4) kHz
ACCELERATEDARTICLEPREVIEW

 16
and 5.64(3) kHz. From this measurement we infer a 1/e2 tweezer waist w0 = 1.17(6) μm. From the lineshape fit, we extract standard deviations across the array of 4.7 kHz and 1.9 kHz, respectively. Note that this measurement was done with atoms in the 1061-nm tweezer array.
Atom transport
We create 10 transport tweezers using 1055 nm light through two AODs (Gooch & Housego AODF 4085), mounted in a crossed configuration and with an active aperture of ∼15 mm diameter. We map the output after the pair of AODs to the back aperture of the objective using a telescope with 3:2 demagnification to match the same beam size at the back aperture of the objective as the beam from the SLM trapping tweezers. The 1055-nm light for transport is split from the same laser source that makes tweezers i-
n the center of the array (see Ext. Data Fig. 2a). The 1055-nm static and transport tweezers are then recombined with polarization, and combined with 1061-nm light with a polarizing beam splitting cube as well. These two pathways are not used concurrently for the long-distance coherent transport demonstration in Fig. 5 or in Ext. Data Fig. 10b,c, and d. We plan to switch in the near term to combining the 1055-nm and 1061-nm light using a dichroic mirror, such that we can use the power in the 1055--
nm path for both static and transport tweezers simultaneously without loss. For the atomic movement, we use an adiabatic sine trajectory described by x = 1
π sin(πt) + t (t, x ∈ [−1, 1]).
We find that we can execute a single move faster with the constant jerk trajectory5 (which we use for Fig. 5b and SI Fig. 4), but that the adiabatic sine trajectory incurs less heating: in the harmonic oscillator approximation, the increase in the average radial motional quanta ∆N for an adiabatic sine trajectory scales as ∆N ∝ D2
ω5T 6
where D is the distance of the trajectory, T is the time of the trajectory, and ω is the trap frequency. In the case of a constant jerk trajectory, ∆N ∝ D2
ω3T 4 .
Note that in the coherent transport data, the tweezer depth change along the trajectory is compensated with RF power which we calibrate beforehand with static tweezers at each position. We believe the transport fidelity can be further increased with more careful compensation of the trap depth including the AOD lensing effect in the future.
Randomized benchmarking of coherent transport
Coherent transport is achieved by suppressing dephasing during transport with dynamical decoupling. By evaluating the coherence contrast after 80 moves, we empirically find that the asymmetric XY4 sequence94 performs best (implemented using bare pulses). To perform inter
leaved randomized benchmarking53, we fix a total number of single-qubit gates N drawn from the Clifford group C1. We then interleave M (< N ) total moves between the first M gates (atoms are held for ∼54 μs between moves), after which we apply the remaining N − M gates to keep the total number of gates N constant and then apply the inverse of these gates. For the return probability data shown in Fig. 5 and Ext. Data Fig. 10a-d, we average over 72 sequences of random gates for each number of moves -
and apply N = 80 total random single-qubit Clifford gates. For the static and transported return probabilities, we apply the same single-qubit control sequence, including the XY4 dynamical decoupling. As in the case of randomized benchmarking, we utilize SCROFULOUS pulses for implementing the Clifford gates. During each move of the benchmarking sequence, we apply XY4 in a transformed Clifford frame. Previous works have examined the interplay of dynamical decoupling and quantum operations by; e.g.,-
 studying a system Hamiltonian in the “toggling frame” induced by dynamical decoupling pulses95. Here, we use related ideas but examine the decoupling operations in the frame rotated by the previously applied Clifford gates. For instance, ignoring the Clifford gates between moves k − 1 and k, it is possible to concatenate two XY4 sequences X − Y − X − Y (with a symmetry operation) to obtain an XY8 sequence X − Y − X − Y − Y − X − Y − X that yields higher-order dephasing (and pulse-length error) su-
ppression. However, the random Clifford gate Uk between the two sequences will cancel this effect by twirling the second XY4 sequence with respect to the first one. Thus, we can “counter-twirl” the second XY4 sequence by applying it in a specific Clifford frame: the Pauli operator P becomes P ′ = U †
k P Uk. Up to a global
phase, U †
k XUk and U †
k Y Uk are two distinct elements of {X, Y, Z}, because Uk is a Clifford gate. If one of these two unitaries is Z, we further conjugate with a Hadamard gate H (or the equivalent basis change unitary between Y and Z) to map these two unitaries into X and Y , or Y and X. This can easily be generalized to n-qubit Clifford gates. A paradigmatic example is the transport between the storage and interaction zone to apply a CZ gate: since CZ(X ⊗ X)CZ = −Y ⊗ Y , we can appropriately transform the decoupling-
 sequence applied during the return move. This could also be extended to yield higher-order sequences, such as XY16. Importantly, typical architectures for fault-tolerant quantum computation (FTQC) use almost exclusively Clifford gates96 (e.g., past the initial generation of noisy magic-state inputs, all gates are Clifford). Therefore this technique is fully applicable to FTQC. At the end of the randomized benchmarking sequence, we measure both the atomic survival and the return probability (note -
that we apply a final π pulse to map the return state to the non-pushed-out state |0⟩). We fit the atomic survival to a clipped Boltzmann distribution Sn = 1 − exp(−1/(a + bn)) where a and b are respectively the normalized initial temperature and normal
ACCELERATEDARTICLEPREVIEW

 17
ized temperature accumulated per move. For the selected durations for interleaved randomized benchmarking, we find that a is negligible. We then fit the return probability to (1 − exp (−1/bn)) · 1
2+1
2 (1 − d′0)(1 − d′)n ,
where d′ is the depolarizing probability for coherence, not accounting for atom loss. Owing to the randomized benchmarking procedure, coherence loss also includes the impact of XY4 dynamical decoupling since it would not be necessary without transport. We then extract the instantaneous fidelity after n moves as Fn =
1 − d′
2
1−exp (−1/b(n+1))
1−exp (−1/bn) . Note that this is the most con
servative approach and amounts to considering that the channel infidelity due to losses is equal to the loss probability itself. In the context of fault-tolerant quantum computation, losses could be directly detected, leading to a higher tolerance to such errors than to Pauli errors. One could therefore assimilate loss to a depolarizing channel, which would significantly increase late-time instantaneous fidelities in Fig. 5, Fig. 6, and Ext. Data Fig. 10. It is worth noting that losses are subdomi-
nant for early-time IRB results presented in Fig. 5 and Ext. Data Fig. 10, therefore the quoted early-time fidelity in these figures is independent of the specific model we use for losses. To compute the 68% confidence interval we bootstrap b and d′ using the fit results and covariance matrix. We corroborate the obtained fidelity with a simple exponential fit for the first few data points of the return probability, where losses are negligible, and find similar early-time fidelities and error bars.-
 We also notice that the shorter move of 270 μm has a slightly lower early-time instantaneous fidelity of 99.935(2)% compared with with the 610 μm-move (99.953(2)%). We believe the discrepancy is likely due a trap depth calibration imperfection, and leave further investigation to future work. For some applications, one might desire to optimize on the speed of movement and use a deeper trap to do so. In Ext. Data Fig. 10d, we show that atoms can be moved by 270 μm in 400 μs with a trap depth of kB -
× 0.92 mK, at the cost of a reduced fidelity of ∼99.85%. Comparing Ext. Data Fig. 10b and Ext. Data Fig. 10d illustrates a trade-off pertaining to coherent transport: while atoms can be moved faster by increasing the trap depth U , the associated transport fidelity for small number of moves is also reduced. In the limit where noise is entirely induced by tweezer intensity fluctuations, this can be understood by noticing that the dephasing strength scales as U when the required duration for long-di-
stance transport merely scales as U −1/2. We note that experimentally in static traps, we find an even stronger scaling of coherence time than linear in U , likely due to other sources of noise (Ext. Data Fig. 7g).
Atom transfer between SLM and AOD tweezers
To transfer atoms between static and dynamic traps, we generate an evenly-spaced grid of 15 × 14 AOD tweez
ers (with a spacing five times that of SLM sites, Fig. 6a), of which 195 sites overlap with SLM tweezers generated with the 1061-nm tweezer laser (out of 11,397 sites in the SLM array). The focal planes are matched by imprinting a Zernike defocus polynomial using the SLM. The position of each SLM site is adjusted in the WGS algorithm to match the corresponding AOD site, first by matching the point-spread function on the qCMOS camera, and then by optimizing the transfer survival. For the data shown-
 in Fig. 6, the SLM trap depth is ramped down to ∼kB × 0.14 mK, which we find is optimal for transfer into kB ×0.28 mK-deep AOD tweezers. We note that adiabatic ramping between full depth and this depth does not incur noticeable losses. For hand-optimized trajectories shown in Fig. 6b, the AOD trap depth is quadratically increased over the course of 48% of the total ramp-and-move duration, after which the AOD trap is moved with a constant jerk trajectory by 2.4 μm during the remaining 52%. These r-
atios, as well as the ramp and trajectory used, are set to empirically maximize atom survival. As an alternative, we propose and implement a machine-learned procedure for faster (or equivalently, higher-survival) atom transfer, for which the AOD trap depth and position can be simultaneously changed (Fig. 6c). For both trap depth and position, 14 pointsfrom which ramps are obtained by cubic interpolationare adjusted by a machine learner97 for a fixed one-way duration of 400 μs and 60 consecutive on-
e-way transfers. This trajectory is inverted to merge and drop off atoms back into static traps. For data shown in Fig. 6, AOD tweezers are repeatedly ramped up and moved away from the corresponding SLM sites by 2.4 μm, and then held static for 100 μs. The direction of motion is as pictured in Fig. 6a, and does not match the direction of transport used in Fig. 5 because cylindrical lensing is not detrimental at the speeds being reached. During the 100 μs wait time, SLM tweezers are turned off afte-
r which they are turned back on, such that atoms held in SLM tweezers and not AOD tweezers are dropped. This enables us to ensure that atoms that may have remained in traps rather than being successfully picked up, are not counted towards survival. At the end of the sequence atoms are imaged again in SLM tweezers. We use the same dynamical decoupling sequence as for the AOD-only transport experiment, including notably the transformed Clifford frame technique. Unlike for long-distance transport, we-
 find that the survival as a function of the number of transfers has an exponential component—likely due to experimental imperfections. Hence, we fit it to: Sn = p0pn(1 − e−1/bn). In order to accurately distinguish between depolarizing effects and atom loss in the IRB return signal, we fit the return probability as Rn = SnDn
where Dn = p′0p′n(1 − e−1/b′n). The fidelity per move is then extracted as Fn = Sn+1/Sn · Dn+1/Dn. The uncertainty is obtained by first bootstrapping fitting parameters for Sn, and then, for each sample, by bootstrap
ACCELERATEDARTICLEPREVIEW

 18
ping those for Dn. Unlike for AOD-only transport, the choice of convention used to account for losses impacts the early-time instantaneous fidelity. In a scenario where losses can be directly detected, one could assign an infidelity from loss equal to half the loss probability—as in a depolarizing model. In this scenario, the instantaneous fidelity quoted in Fig. 6d would increase from 99.81(3)% to 99.88(3)%.
Combined atom transfer and move
In order to combine atom transfer and long moves, we change the static tweezer configuration to one featuring alternating spacing as shown in Ext. Data Fig. 10e. This configuration is motivated by the compatibility with diagonal motion (as schematized in SI Fig. 5), and by the observation of additional losses in the absence of wider pathways for transport. We did not attempt to optimize SLM parameters in the original configuration to mitigate these losses and leave further investigation to future -
work. We include a simulation for the out-of-plane interference for this spatial distribution of tweezers now in Ext. Data Fig. 3. Apart from a slightly lower imaging fidelity—which, in the context of fault-tolerant quantum computation, matters much less than, e.g., for quantum simulation—we do not expect this array to exhibit different metrics from the configuration characterized in the rest of this paper. We then transport atoms with 8 × 6 AOD tweezers (of which 47 are overlapped with one of the-
 11,416-site 1061-nm tweezer array) spanning 285 μm × 204 μm. The combined transfer and move sequence is realized as follows (Ext. Data Fig. 10e): we first apply a singlequbit gate, pick up atoms from the highlighted sites on the top side of the array, and then perform a constant jerk movement for the initial separation move. We then implement the 375 μm-move using an adiabatic sine tra
jectory, apply a single-qubit gate while atoms are held in AOD tweezers on the bottom side of the array (shown in highlighted locations), before applying the reverse move and transfers. Timescales for each operation are shown in Ext. Data Fig. 10e. During the pick-up operation, AOD tweezers are ramped up from 0 to kB × 0.28 mK while SLM tweezers are ramped down from kB × 0.18 mK to kB × 0.06 mK (the trap depth used for the measurement of coherence times in Fig. 4). Possible deleterious effects fro-
m the repeated ramps on static atoms are captured by the ‘static’ data in Ext. Data Fig. 6f: the equivalent idle fidelity is > 99.96%. We notice no significant exponential component in the survival signal. Therefore, when we evaluate the instantaneous fidelity using the technique described in the “Randomized benchmarking of coherent transport” section, the early-time estimate of instantaneous fidelity is not impacted by the choice of convention for handling loss. We anticipate that the timescales -
used here can be considerably sped up by leveraging machine-learning to optimize various trajectories and ramps, as demonstrated in Fig. 6. Additionally, we envision integrating the short move to split (and merge) AOD and SLM tweezers with the longer move in a single, curved trajectory.
DATA AVAILABILITY
The data supporting the main findings of this study are available in the CaltechDATA repository98. Additional data are available from the corresponding authors upon request.
CODE AVAILABILITY
The codes supporting the findings of this study are available from the corresponding authors upon request.
[61] Monroe, C., Swann, W., Robinson, H. & Wieman, C. Very cold trapped atoms in a vapor cell. Phys. Rev. Lett. 65, 1571–1574 (1990). [62] Kersevan, R. & Ady, M. Recent developments of MonteCarlo codes Molflow+ and Synrad+. In 10th International Particle Accelerator Conference, TUPMP037 (2019). [63] Nogrette, F. et al. Single-Atom Trapping in Holographic 2D Arrays of Microtraps with Arbitrary Geometries. Phys. Rev. X 4, 021034 (2014). [64] Kim, H., Kim, M., Lee, W. & Ahn, J. Gerchberg-Saxton algor-
ithm for fast and efficient atom rearrangement in optical tweezer traps. Opt. Express 27, 2184 (2019). [65] Kim, D. et al. Large-scale uniform optical focus array generation with a phase spatial light modulator. Opt. Lett. 44, 3178–3181 (2019). [66] Schymik, K.-N. et al. In situ equalization of single-atom loading in large-scale optical tweezer arrays. Phys. Rev.
A 106, 022611 (2022).
[67] Levine, H. J. Quantum Information Processing and Quantum Simulation with Programmable Rydberg Atom Arrays. Ph.D. thesis, Harvard University (2021). [68] Steck, D. A. Cesium D Line Data. URL https://steck. us/alkalidata/cesiumnumbers.pdf (2023).
[69] Schlosser, N., Reymond, G., Protsenko, I. & Grangier, P. Sub-poissonian loading of single atoms in a microscopic dipole trap. Nature 411, 1024–1027 (2001). [70] Singh, K., Anand, S., Pocklington, A., Kemp, J. T. & Bernien, H. Dual-Element, Two-Dimensional Atom Array with Continuous-Mode Operation. Phys. Rev. X 12, 011040 (2022). [71] Cooper, A. et al. Alkaline-Earth Atoms in Optical Tweezers. Phys. Rev. X 8, 041055 (2018). [72] Bloch, D., Hofer, B., Cohen, S. R., Browaeys, A. & Ferrier-Barbut-
, I. Trapping and Imaging Single Dysprosium Atoms in Optical Tweezer Arrays. Phys. Rev. Lett.
ACCELERATEDARTICLEPREVIEW

 19
131, 203401 (2023).
[73] Madjarov, I. S. Entangling, controlling, and detecting individual strontium atoms in optical tweezer arrays. Ph.D. thesis, California Institute of Technology (2021).
[74] Li, X. Toward a neutral atom quantum computer. Ph.D. thesis, The Pennsylvania State University (2009).
[75] Maller, K. M. Single- and two-qubit operations on an atomic qubit array. Ph.D. thesis, University of WisconsinMadison (2015). [76] Wu, T.-Y., Kumar, A., Giraldo, F. & Weiss, D. S. Stern–Gerlach detection of neutral-atom qubits in a state-dependent optical lattice. Nat. Phys. 15, 538–542 (2019). [77] Kuhr, S. et al. Analysis of dephasing mechanisms in a standing-wave dipole trap. Phys. Rev. A 72, 023406 (2005). [78] Ozeri, R. et al. Hyperfine Coherence in the Presence of Spontaneous Photon Sca-
ttering. Phys. Rev. Lett. 95, 030403 (2005). [79] Rosenbusch, P. et al. ac Stark shift of the Cs microwave atomic clock transitions. Phys. Rev. A 79, 013404 (2009). [80] Carr, A. & Saffman, M. Doubly Magic Optical Trapping for Cs Atom Hyperfine Clock Transitions. Phys. Rev. Lett. 117, 150801 (2016). [81] Tian, Z. et al. Extending the coherence time limit of a single-alkali-atom qubit by suppressing phonon-jumpinginduced decoherence. Optica 11, 1391–1396 (2024). [82] Barnes, K. et al. Assembly and -
coherent control of a register of nuclear spin qubits. Nat. Commun. 13, 2779 (2022). [83] Viola, L., Knill, E. & Lloyd, S. Dynamical Decoupling of Open Quantum Systems. Phys. Rev. Lett. 82, 2417–2421 (1999). [84] Xia, T. et al. Randomized Benchmarking of Single-Qubit Gates in a 2D Array of Neutral-Atom Qubits. Phys. Rev. Lett. 114, 100503 (2015). [85] Nikolov, B., Diamond-Hitchcock, E., Bass, J., Spong, N. & Pritchard, J. Randomized Benchmarking Using Nondestructive Readout in a Two-Dimensional At-
om Array. Phys. Rev. Lett. 131, 030602 (2023).
[86] McKay, D. C., Wood, C. J., Sheldon, S., Chow, J. M. & Gambetta, J. M. Efficient Z gates for quantum computing. Phys. Rev. A 96, 022330 (2017). [87] Wimperis, S. Broadband, Narrowband, and Passband Composite Pulses for Use in Advanced NMR Experiments. J. Magn. Reson., Ser A 109, 221–231 (1994). [88] Kukita, S., Kiya, H. & Kondo, Y. Short Composite Quantum Gate Robust against Two Common Systematic Errors. J. Phys. Soc. Jpn. 91, 104001 (2022). [89] Wang, Y., Kumar, A., Wu, T.-Y. & Weiss, D. S. S-
inglequbit gates based on targeted phase shifts in a 3D neutral atom array. Science 352, 1562–1565 (2016). [90] Sheng, C. et al. High-Fidelity Single-Qubit Gates on Neutral Atoms in a Two-Dimensional Magic-Intensity Optical Dipole Trap Array. Phys. Rev. Lett. 121, 240501 (2018). [91] Levine, H. et al. Dispersive optical systems for scalable Raman driving of hyperfine qubits. Phys. Rev. A 105, 032618 (2022). [92] Hayes, D. et al. Entanglement of Atomic Qubits Using an Optical Frequency Comb. Phys. -
Rev. Lett. 104, 140501 (2010). [93] Inlek, I. V., Vittorini, G., Hucul, D., Crocker, C. & Monroe, C. Quantum gates with phase stability over space
and time. Phys. Rev. A 90, 042316 (2014). [94] Souza, A. M.,  ́Alvarez, G. A. & Suter, D. Robust dynamical decoupling. Phil. Trans. R. Soc. A 370, 4748–4769 (2012). [95] Morong, W. et al. Engineering Dynamically Decoupled Quantum Simulations with Trapped Ions. PRX Quantum 4, 010334 (2023). [96] Campbell, E. T., Terhal, B. M. & Vuillot, C. Roads towards fault-tolerant universal quantum computation. Nature 549, 172–179 (2017). [97] Wigley, P. B. et al. Fast machine-learning online optimization of ul-
tra-cold-atom experiments. Sci. Rep. 6, 25890 (2016). [98] Manetsch, H. J. et al. Supporting data for “A tweezer array with 6100 highly coherent atomic qubits”. URL https://doi.org/10.22002/4m9sp-yzr58 (2025).
ACKNOWLEDGMENTS
We acknowledge insightful discussions with, and feedback from, Adam Shaw, Harry Levine, Richard Tsai, Nadine Meister, Zunqi Li, Ran Finkelstein, Pascal Scholl, Joonhee Choi, Dolev Bluvstein, and Soonwon Choi. We acknowledge support from the Gordon and Betty Moore Foundation (Grant GBMF11562), the Weston Havens Foundation, the Institute for Quantum Information and Matter, an NSF Physics Frontiers Center (NSF Grant PHY-2317110), the NSF QLCI program (2016245), the NSF CAREER award (1753386), the Arm-
y Research Office MURI program (W911NF2010136), the U.S. Department of Energy (DE-SC0021951), the DARPA ONISQ program (W911NF2010021), the Air Force Office for Scientific Research Young Investigator Program (FA955019-1-0044), and the Heising-Simons Foundation (20244852). Support is also acknowledged from the U.S. Department of Energy, Office of Science, National Quantum Information Science Research Centers, Quantum Systems Accelerator. H.J.M. acknowledges support from the NSF Graduate Research Fel-
lowship Program under Grant No. 2139433. K.H.L. acknowledges support from the AWS-Quantum postdoctoral fellowship and the NUS Development Grant AY2023/2024.
AUTHOR CONTRIBUTION
H.J.M. and M.E. conceived the idea and experiment. H.J.M., G.N., E.B., K.H.L., and X.L. performed numerical simulations and contributed to the experimental setup. H.J.M., G.N., E.B., and K.H.L. performed the experiments. H.J.M., G.N., and E.B. analyzed the data. All authors contributed to the manuscript. M.E. supervised this project.
ACCELERATEDARTICLEPREVIEW

 20
COMPETING INTERESTS
The authors have filed a patent application (U.S. Patent Application 19/083,149) related to the methods described in this work.
ADDITIONAL INFORMATION
Correspondence and requests for materials should be addressed to Manuel Endres and Kon H. Leung. Reprints and permissions information is available at http://www.nature.com/reprints.
ACCELERATEDARTICLEPREVIEW

 21
Extended Data Fig. 1 | Experiment apparatus and sequence. a, Simplified view of the vacuum chamber. The 2D MOT cell (Infleqtion CASC) containing an electrically heated cesium dispenser, shown inside its integrated photonics assembly. It is attached to a stainless steel vacuum chamber on which an ion pump is mounted. We further use two titanium sublimation pumps (one mounted from the top, as shown, and one mounted from the bottom, not visible), sputtering almost the entire surface area of the chamb-
er, except the rectangular part of the science glass cell and the ion pump. We use the following conventions for the laser beams: thick red for MOT beams, thin red for PGC beams, dark red (along xˆ) for state preparation beam, and purple for tweezer beam. b, Summary of the relevant states and transitions used in this work. c, Summary of a typical experimental sequence, as described in the Methods.
Extended Data Fig. 2 | Tweezer uniformity details. a, The tweezers created by two fiber amplifiers are labeled on the averaged atomic image shown in Fig. 1b. We create 11,513 (488) tweezers with laser light at 1061 nm (1055 nm), as described in the tweezer generation section. b, WGS weights given to tweezers during the tweezer homogenization procedure, as a function of angular distance from the 0th-order reflection off the SLM, with the physical distance shown on the upper axis. In teal are plotte-
d the weights obtained after the tweezer depths are uniformized based on loading probability. In yellow is shown the weight compensation that would be expected based on diffraction efficiency calculations assuming blazed gratings are utilized for displacement. c, Per-site loading probability array map and its histogram. We feedback on the WGS weights based on the loading rate per site to uniformize the trap depth. We see an average loading probability per site of 51.2% with a relative standard dev-
iation of 3.4%. The lowest loading probability is 25.1% for one tweezer, which is the only tweezer not shown in the histogram, but included in the quoted average. This tweezer does not exhibit a significant difference in imaging survival probability, coherence time, or single-qubit gate fidelity (Ext. Data Fig. 5a and Ext. Data Fig. 8). Three tweezers in the array are excluded for the data shown in this work, since they are affected by leakage from the 0th order of the SLM on the 1061-nm tweezer p-
athway, resulting in 11,998 usable sites out of 12,001 generated sites. d, Per-site tweezer depth map and its histogram, obtained by measuring the differential light shift on F = 4 ↔ F ′ = 4 D2 transition. We see an average trap depth of kB × 0.18(2) mK with a standard deviation of 11.4% across the sites.
Extended Data Fig. 3 | Tweezer spacing details. Calculation of an out-of-plane intensity profile from a section of a 122 by 122 site tweezer array at 1061 nm, whose phase pattern is generated by a WGS algorithm. The tweezer axis (x-axis in plots) is centered along a selected row in the array and the out-of-plane axis (y-axis in plots) is perpendicular to the focal plane of the tweezers, along the direction of light propagation. The focal plane for the tweezers is at 0 μm, and we simulate for diffe-
rent spacing between the tweezers: a, 7.2 μm and b, 5.0 μm. We also show in c, the case for which 5.0 μm spacing is achieved by alternating traps generated with two different lasers such that they do not interfere by using for example orthogonal polarization or sufficiently different wavelengths. One could imagine using such an interleaved configuration to achieve tighter tweezer spacing without being limited by out-of-plane interference, in order to increase the number of atoms within the field o-
f view. In d, we show the out-of-plane interference for the case of alternating spacing between tweezers of 9.6 μm and 4.8 μm as is used in Ext. Data Fig. 10e,f. The color scale for each case is normalized by the highest intensity in the simulated slice.
Extended Data Fig. 4 | Imaging characterization. a, Weight function W (u, v) applied to each pixel of the 7 × 7
square-pixel box around each site. Here, u and v refer to the camera pixel coordinates centered on a given site. b, Imaging histogram obtained by summing the number of photons in the 7 × 7 square-pixel box around each site, without any weights. c, Imaging fidelity as the binarization threshold is displaced from its optimal position. d, Map and histogram of the scattering rate per site across the tweezer array.
Extended Data Fig. 5 | Imaging survival details. a, Map and histogram of the imaging survival probability per site across the tweezer array, as characterized using the three image analysis of data from 16,000 iterations. Note that the vertical axis of the histogram figure is plotted on a log scale. The mean of site-resolved imaging survival probability is 99.985%, and the minimum value 99.66%. b, Predicted upper bound on the probability of detecting a defect-free array after an ideal rearrangement-
 sequence (estimated as p(1|1)n where n is the number of atoms in the first image), limited by imaging survival and false positives. The threshold in the first image can be displaced to reduce false positives, at the cost of excluding some atoms. Note that we may ignore the issue of false negatives in the first image, since we can always physically eject residual atoms in sites that are determined to be negative.
Extended Data Fig. 6 | Imaging in 20 ms. Imaging histogram obtained with an imaging time of 20 ms. The weight function is the same as the one shown in Ext. Fig. 3a. Using the model-free imaging characterization, we find an imaging fidelity of 99.9571(4)% and a survival probability of 99.176(1)%. Inset: log-scale histogram where the number of photons for each site is rescaled by the threshold for this site.
ACCELERATEDARTICLEPREVIEW

 22
Extended Data Fig. 7 | Characteristics of microwave-driven qubits. a, Schematic of the setup used to drive the hyperfine qubit. b, Inhomogeneity of the Rabi frequency across the atom array. The Rabi frequency standard deviation is 0.5%. c, Estimation of η, the ratio of the differential polarizability of the hyperfine qubit to the electronic ground state scalar polarizability. The average qubit frequency is measured by Ramsey interferometry for different trap depths, and the slope is compared with -
the trap depth inferred from the light shift of the F = 4 ↔ F ′ = 4 D2 transition from its free-space resonance. d, Measurement of the depolarization time T1. Atoms are initially prepared in |1⟩. After a given time, the remaining population in |1⟩ is measured, with or without a π pulse before the measurement. The population difference, conditioned by the application of the pulse, constitutes the T1 contrast. e, A spin-echo sequence is employed to probe the 60 Hz phase noise in our system. The free-
-evolution time of each arm, τ , is set to a half-period of 60 Hz, which enhances the noise. By varying the time tdelay between the line trigger and the spin-echo sequence, we map the periodic noise at 60 Hz to the population in |1⟩. f, The population in |1⟩ after 1,000 random Clifford gates is measured for different trap depths, exhibiting only limited improvement when the trap depth is reduced. Error bars indicate estimated 68% confidence intervals. g, Measurement of the coherence time T2 at dif-
ferent trap depths, for two different periods between π pulses. Error bars indicating 68% confidence intervals are shown when larger than the dot itself. Note that this experiment was performed with the 11,513 tweezers generated by the fiber amplifier at 1061 nm only (Ext. Data Fig. 2a).
Extended Data Fig. 8 | Site-resolved coherence metrics. a, Relative difference of the qubit frequency with the cesium clock frequency fclock ≡ 9, 192, 631, 770 Hz, measured by Ramsey interferometry. The standard deviation is 1.5 × 10−9, or 14 Hz in absolute value. b, Map and histogram of T ∗
2 across the atom array. The average uncertainty per site is 1.5 ms. The
average T ∗
2 for sites generated by the fiber amplifier at 1055 nm is 23.2(1) ms, while it is 25.58(3) ms for sites generated by the fiber amplifier at 1061 nm. c, Map and histogram of T2 across the atom array. The average uncertainty per site is 2.8 s. The average T2 for sites generated by the fiber amplifier at 1055 nm is 19.2(4) s, while it is 12.32(6) s for sites generated by the fiber amplifier at 1061 nm. We use averages weighted by the uncertainty on each site, since we observe that the unweighted ave-
rage results in a bias from the value obtained by global fitting. d, Map and histogram of single-qubit gate fidelity obtained by global randomized benchmarking. The average gate fidelity is 99.9834(2)%.
Extended Data Fig. 9 | Raman sideband spectroscopy. a, Schematic of the Raman configuration used to address the atomic motion. The amplitude modulation setup and Raman configuration are detailed in the Methods. b, Raman spectroscopy results exhibiting sidebands corresponding to the radial motion (in green) and the axial motion (in purple). We measure an radial trapping frequency of 29.30(4) kHz and an axial trapping frequency of 5.64(3) kHz. The sideband signal is broadened due to inhomogeneities -
in the array. The measurement is averaged over the 11,513 tweezers created with the 1061 nm light as shown in Ext. Data Fig. 2a c, Fine-grained spectroscopy data acquired with a lower Rabi frequency to resolve the axial sideband.
Extended Data Fig. 10 | Long distance AOD movement and large-scale AOD-SLM trap transfer. [AOD only] a, Proposed layout of a zone-based universal quantum processor with 6,100 atoms. Atoms anywhere in the storage zone can be transported with AODs to the interaction or readout zones in under 500 μm. b, c, d, Results of the randomized benchmarking of transport, for different distances and trap depths, as specified above each subfigure. Similarly to Fig. 5d we present the atomic survival for various m-
ove durations (top panel), the IRB return probability for the specific duration highlighted in blue (middle panel), and the extracted instantaneous transport fidelity. The curve width in the bottom panel represents the 68% confidence interval. [AOD and SLM] e, Schematic representing the configuration and operations used for coherent transfer and transport of atoms using 47 AOD tweezers. The SLM layout (totaling 11,416 sites) alternates narrow column spacings of 4.8 μm and wide column spacings of 9-
.6 μm, between which AOD tweezers are moved diagonally (see Methods). Timescales for each operation composing one-way moves are detailed in the figure. f, Results of the randomized benchmarking of coherent transfer and transport, similarly to previous figures.
ACCELERATEDARTICLEPREVIEW

 Vacuum lifetime
Imaging survival*
Imaging �delity*
*Non-spin resolved
Coherence time (T2)
22.9(1) min
0.9998952(1)
0.9999374(8)
12.6(1) s
Global single-qubit
gate RB �delity 0.999834(2)
ab
c d Number of loaded tweezer sites
Filling fraction
Normalized counts
e
Dichroic
mirror
1061 nm
Tweezer
Imaging 852 nm
SLM
Spatial �lter
Spatial �lter
PBS
NA = 0.65
FOV = 1.5 mm
SLM
1055 nm
Tweezer
qCMOS
NA = 0.55
x z
y
5600 5800 6000 6200
0.48 0.5 0.52
0
0.05
0.1
0.15
900 μm 7.2 μm
200 μm 200 μm
Single-shot image Averaged image
LERATEDARTICLEPREV

 Threshold
Photons
0 10
Photons
0 10
6.3 μm
0 20 40 60 80 100 120 Number of photons (weighted)
0
0.01
0.02
0.03
0.04
0.05
0.06
Probability density
0 50 100 150
10−6
10−5
10−4
10−3
10−2
10−1
x = 26
y = 41
a
b 0 50 100
0
0.02
0.04
0.06
Probability density
0 50 100 0 50 100
x = 86
y = 59 x = 34
y = 102
TEDARTICLE

 a
b
Fitted survival probability: 0.9998952(1)
0 0.5 1 1.5
0 200 400 600 800 1000 Number of images
0.9
0.92
0.94
0.96
0.98
1
Survival fraction
0 0.5 1 1.5 2 2.5 3 Time (min)
0
0.2
0.4
0.6
0.8
1
Survival fraction
τ = 17.7 min (continuous PGC) τ = 2.2 min (no PGC)
τ = 22.9 min (pulsed PGC)
TEDARTICLE

 a b T2* = 14.0(1) ms
T2 = 12.6(1) s
60 random
Clifford strings
Total time (s)
XY16 ‒ n
Fc = 0.999834(2)
|F=4, mF=0⟩ ≡ |1⟩ |F=3, mF=0⟩ ≡ |0⟩
Horn
T2* (site) = 25.5 ms
0 250 500 750 1000
0.8
0.85
0.9
0.95
1
0 12 3
0.7
0.8
0.9
1
0 5 10 15
0 50 100 150 900 950 1000
0
0.2
0.4
0.6
0.8
1
cd
Return probability
TEDARTICLEP

 a Straight
510 μm Diagonal
610 μm
U0
U1
U4 UN-1U-1
....
z
x
10 tweezers
0.8
1
1.8 ms 1.6 ms 1.4 ms 1.2 ms
Static
Transported
Atom survival
IRB return
probability
Fidelity
M moves
and Clifford gates gNa-tMes
XY4
XY4
0.9
1
Number of one-way moves
0
−π −π/2 π/2 π
0
Static Transported
Time
Space IRB sequence
Analyzer phase
0
0.25
0.5
0.75
1
P|0⟩
d
0.5 1 1.5 Move duration (ms)
0
0.5
1
Survival
U2
U3
XY4
XY4
610μm
b
c
610 μm
F = 0.99953(2)
25 50 75
0.998
1
DARTICLE

 0 100 200 300 400 Time (μs)
0
0.05
0.1
0.15
0.2
0.25
AOD trap depth (mK)
AOD trap depth
0.5
1.0
1.5
2.0
Distance from static trap (μm)
AOD trap position
AOD trap depth AOD trap position
Atom survival
Time (μs)
0
0.05
0.1
0.15
0.2
0.25
AOD trap depth (mK)
0.0
0.5
1.0
1.5
2.0
Distance from static trap (μm)
Manual optimization
504 μm
7.2 μm
468 μm
(i)
(ii) (iii)
(i) pick-up & split (ii) wait (100 μs) (iii) merge & drop-off
SLM tweezer AOD tweezer
Static
Transported
Atom survival
a
0 100 200 300 400
0.0
0.4
0.6
0.8
1
Atom survival
0.2 ms
0.4 ms
0.6 ms
0.4 ms (ML-optimized)
0.7
0.8
0.9
1
IRB return
probability
b
c
d
Number of one-way transfers
1
Fidelity
F = 0.9981(3)
0 20 40 60
0.99
0.995
EDARTICLE

 Extended Data Fig. 1
ACCELERATEDARTICLEPREVIEW

 Extended Data Fig. 2
ACCELERATEDARTICLEPREVIEW

 Extended Data Fig. 3
ACCELERATEDARTICLEPREVIEW

 Extended Data Fig. 4
ACCELERATEDARTICLEPREVIEW

 Extended Data Fig. 5
ACCELERATEDARTICLEPREVIEW

 Extended Data Fig. 6
ACCELERATEDARTICLEPREVIEW

 Extended Data Fig. 7
ACCELERATEDARTICLEPREVIEW

 Extended Data Fig. 8
ACCELERATEDARTICLEPREVIEW

 Extended Data Fig. 9
ACCELERATEDARTICLEPREVIEW

 Extended Data Fig. 10
ACCELERATEDARTICLEPREVIEW

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:47.433Z
- **Text Length:** 116229 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
