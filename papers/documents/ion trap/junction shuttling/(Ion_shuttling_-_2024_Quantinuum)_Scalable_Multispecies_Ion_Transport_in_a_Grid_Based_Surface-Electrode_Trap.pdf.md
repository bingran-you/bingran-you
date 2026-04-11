# PDF Document: (Ion shuttling - 2024 Quantinuum) Scalable Multispecies Ion Transport in a Grid Based Surface-Electrode Trap.pdf

**File Path:** (Ion shuttling - 2024 Quantinuum) Scalable Multispecies Ion Transport in a Grid Based Surface-Electrode Trap.pdf

**Processed Date:** 2026-02-10T18:16:27.121Z

**File Size:** 1922.65 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 419

**Title:** (Ion shuttling - 2024 Quantinuum) Scalable Multispecies Ion Transport in a Grid Based Surface-Electrode Trap.pdf

**Collection:** Ion Trap > Junction Shuttling

---

## Extracted Text Content

Scalable Multispecies Ion Transport in a Grid Based Surface-Electrode Trap
Robert D. Delaney,1, ∗ Lucas R. Sletten,2, ∗ Matthew J. Cich,2 Brian Estey,1 Maya Fabrikant,1 David Hayes,1 Ian M. Hoffman,1 James Hostetter,2 Christopher Langer,1 Steven A. Moses,1 Abigail R. Perry,1 Timothy A. Peterson,2 Andrew Schaffer,2 Curtis Volin,1 Grahame Vittorini,2 and William Cody Burton1, †
1Quantinuum, 303 S. Technology Ct., Broomfield, CO 80021, USA 2Quantinuum, 1985 Douglas Dr. N., Golden Valley, MN 55422, USA
(Dated: March 4, 2024)
We present a scalable method for the control of ion crystals in a grid-based surface electrode Paul trap and characterize it in the context of transport operations that sort and reorder multispecies crystals. By combining co-wiring of control electrodes at translationally symmetric locations in each grid site with the site-wise ability to exchange the voltages applied to two special electrodes gated by a binary input, site-dependent operations are achieved using only a fixed number of analog volta-
ge signals and a single digital input per site. In two separate experimental systems containing nominally identical grid traps, one using 171Yb+-138Ba+ crystals and the other 137Ba+-88Sr+, we demonstrate this method by characterizing the conditional intra-site crystal reorder and the conditional exchange of ions between adjacent sites on the grid. Averaged across a multi-site region of interest, we measure sub-quanta motional excitation in the axial in-phase and out-of-phase modes of the crystals -
following these operations at exchange rates of 2.5 kHz. These conditional transport operations display all necessary components for sorting qubits, and could be extended to implement other conditional operations involving control fields such as gates, initialization, and measurement.

arXiv:2403.00756v1 [quant-ph] 1 Mar 2024

I. INTRODUCTION
As one of the original platforms suggested for quantum computing more than 25 years ago [1], trapped ion systems have maintained their status as a leading candidate for gate based quantum processors. Trapped ion qubits have been used to demonstrate the published world records in two-qubit gate fidelity [2, 3], single qubit gate fidelity [4] and state preparation and measurement error [5]. In conjunction with the all-to-all qubit connectivity enabled by ion transport operations [6–8], trapped ion q-
uantum computers have raised quantum computing performance benchmarks such as quantum volume [9] to new heights [10].
Existing trapped ion quantum computers typically have achieved all-to-all connectivity using linear Paul traps, which use a combination of low bandwidth control electrodes and an rf potential to provide confinement [7, 8, 11]. In the quantum charge coupled device (QCCD) architecture, the control electrodes are leveraged to create an array of discrete confining locations (“wells”) within the linear trap. Ion pairs co-trapped in a single well are entangled through their shared motional modes [12]. A-
rbitrary qubit connectivity is then realized by co-trapping target qubits using operations that merge and separate wells along the trap, interleaved with swap operations that reorder qubits within a well [8, 10].
Trapped ion quantum processors with one-dimensional geometry suffer scaling limitations as the number of ions increases. The increased length of the trap becomes an engineering challenge, while the poor linear scaling of
∗ These authors contributed equally to this work. † William.Burton@quantinuum.com

sorting time with qubit count presents a fundamental barrier [13]. Some measure of success has been achieved by obviating transport and instead using the collective normal modes of a long linear chain of ions trapped in a single potential well as a bus for interactions among the ions [14–18]. Long chains also encounter severe scaling obstacles, including low axial frequencies that are challenging to cool, increased crowding of radial motional mode frequencies, and gate times that scale with chain -
length [19].
A proposed solution for scaling the size of ion traps is a 2D (or 3D) grid of short linear traps connected by junctions. Proof-of-concept demonstrations of transport through such junctions have been performed [20–27], including high-fidelity, low heating transport for single-ions [23] and multispecies crystals [27]. In particular, multispecies junction transport eliminates the need to separate a qubit ion from its sympathetic coolant [28], vastly simplifying the transport operations required for i-
on sorting [27] and mid-circuit cooling.
Without a mitigating strategy, the number of control electrodes and associated wiring elements scales linearly with the number of ions in the trap. This “wiring problem” is a common issue that is shared by many quantum computing platforms [29]. In the ion case, this scaling challenge has been partially alleviated through cowiring, or “broadcasting”, of individual control signals across multiple surface electrodes in order to perform the same operations on multiple wells in parallel [10, 30]. This -
approach allows storage of more ions with fewer analog signals but does not fundamentally change the scaling, as individual control electrodes must be incorporated throughout the trapping array in order to perform arbitrary sorting. A recent proposal suggested supplementing broadcasting with a switch network between the DACs and electrodes, making the co-wiring dynamically

2

configurable. As a result, a single, multi-bit input to the switch bank per site could determine which set of DACs is connected and therefore which sorting operation occurs [13].
In this work, we experimentally demonstrate the transport operations for sorting qubits in a grid-based rf Paul trap based on a new, scalability-focused transport primitive termed ‘center-to-left-or-right’ (C2LR). This new primitive enables independent control of the well trajectory in each grid leg using a single digital control signal per site and a fixed number of analog signals independent of grid size. The C2LR primitive can be combined with global shifts and rotations to implement higher-lev-
el operations required for a full qubit-sorting algorithm, namely site-dependent swapping of qubit pairs between adjacent legs through their shared junction and sitedependent reordering of ion crystals. In two experimental setups using nominally identical traps, we test these siteswapping operations with either 171Yb+-138Ba+ (Yb-Ba) or 137Ba+-88Sr+ (Ba-Sr) two-ion crystals and show that these crystals remain in their motional ground state at swap rates exceeding Γswap = 2.5 kHz, paving the way for-
 large scale, periodic, 2D ion traps with practically realizable wiring demands.
II. EXPERIMENTAL SYSTEMS
The surface trap presented here is a 2D tiling of square cells, each made of a pair of 375 um long linear Paul segments connected at 90 degrees by an X-junction (Fig. 1). Two systems use this trap to both demonstrate the flexibility of the design but also to pursue different potential benefits: Yb-Ba is a thoroughly tested pair with existing demonstrations in junction transport [27] as well as commercial operation [8, 10], while Ba-Sr is an attractive alternative species combination requiring no u-
ltraviolet light for trapping and control, a favorable trait for optical systems in general and integrated photonic structures in particular [31]. Individual ions are loaded through a hole through the entire trap stack using neutral flux from atomic ovens and standard photoionization techniques [32]. Crystals are formed by shifting ions away from the load hole where a combine operation joins two wells into one.
The rf confinement is provided by a single, continuous electrode that uses sub-surface routing to connect otherwise separate top metal traces (Fig. 1). An rf voltage V (t) = Vrf sin (ωrf t) with amplitude of Vrf ≈ 180 V is applied to trap Yb-Ba crystals, while a smaller voltage of Vrf ≈ 167 V is used to trap Ba-Sr crystals, due to the smaller total mass. In both experimental setups the rf voltage is driven at a frequency of ωrf /2π ≈ 42 MHz through a cryogenic rf resonator. Segmented control elect-
rodes located on or near the trap axis provide the dynamic control over the electric potential required for transport operations. In addition, large shim electrodes, located off the trap axis, are used to compensate large-

100 um

a

b c

d

e

fg

h

a

b c

d

e

fg

h

a

b c

d

e

fg

h

a

b c

d

e

fg

h

a

b c

d

e

fg

h

a

b c

d

e

fg

h

a

b c

d

a

b c

d

a

b c

d

RF rail RF rail

broadcast broadcast

shim shim

C2LR C2LR

FIG. 1. Representative drawing of the top metal detailing the rf rail (red), generic control electrodes (yellow), special center-to-left-or-right electrodes (C2LR, shown in purple), shim electrodes (green), and ground plane (gray). The rf rail is continuous; the apparently isolated top metal features are connected through traces routed beneath the surface [10] The generic control electrodes are co-wired between equivalent locations in each leg. Lettering on several such electrodes illustrates the -
pattern. All measurements here use legs in the 3 × 2 region at the center of the grid (bold).

scale, static potential inhomogeneities. The shim electrodes are held at 0 V except during split/merge operations or while the ions are idling in the leg centers.
The majority of the electrodes in the trap are physically co-wired according to the translational symmetry of the trap (Fig. 1). In each leg, there are 12 broadcast control electrodes, two shim electrodes and two centerto-left-or-right electrodes (C2LR, described in the next section). The junction center electrode included in this count is shared by horizontal and vertical legs. The four electrodes surrounding the junction center are independently wired for testing purposes but are counted among t-
he broadcast electrodes as they are tied together in software for all presented operations. The C2LR electrodes are located on either side of the leg center electrode and can be controlled independently. While the trap is symmetric under 90 degree rotation, vertical and horizontal legs are wired independently.

3

axial shift (μm)

50 (a)

0

-50

3.0 (b)

2.5

2.0

1.5

0

2

C2 C1 V2 V1

RCOM 2

XSTR

RCOM 1 RSTR 2

4

6

8

time (μs)

RSTR 1 XCOM 10 12

navg (quanta)

(c) coolant qubit
V2 V1 V2 V1
C2LR-RU (d)
speed (m/s)`

V2 V1 V2 V1
C2LR-LD (e)
round trips

frequency (MHz)

FIG. 2. Illustration and validation of the center-to-left-or-right (C2LR) primitive. (a) Voltages V1 and V2 can be applied either as V1 → C1, V2 → C2 for a rightward shift (C2LR-R) or V1 → C2, V2 → C1 for C2LR-L. The red and blue traces are the resulting simulated ion trajectories for the as-solved waveform (C2LR-R) and with C1 and C2 voltages exchanged (C2LR-L). (b) Simulated motional modes of a Yb-Ba crystal during the C2LR waveform, showing: the axial in-phase (XCOM) and outof-phase (XSTR) mode-
s, two pairs of radial stretch (RSTR 1 and RSTR 2) and radial center-of-mass (RCOM 1 and RCOM 2) modes. (c) Depiction of C2LR running in two vertical and two horizontal legs. The voltage exchange in the experiment is equivalent to these cross-over switches but is realized in software. (d) Thermal occupancy after cooling and C2LR operations, averaged over both directions and all measurement locations, remains low to speeds of at least 8 m/s. (e) Thermal occupancy as a function of the number of roun-
d trips at a fixed transport speed of 6 m/s with linear fits, reported in Tab. I. In (d) and (e), error bars represent one standard deviation on the mean.

III. CENTER-TO-LEFT-OR-RIGHT PRIMITIVE
At the core of our two dimensional ion transport protocol is the C2LR operation, where crystals are shifted left or right depending on how two voltages, V1 and V2, are mapped onto the two C2LR electrodes, C1 and C2 (inset Fig. 2(a)). If the mapping between electrodes and voltage sources is fixed, as is the case in the experimental systems here, then C2LR in conjunction with broadcasting reduces the number of additional analog signals per zone required to control the trap down to two. However, a cr-
oss-over switch (double pole, single throw) in each leg could be used to dynamically control the mapping between the two voltages and C2LR electrodes with a single binary input. In this case, transport in an N site trap could be controlled with a fixed number of analog signals (here, 27), N digital inputs, and N crossover switches.
To generate the C2LR primitive, we impose mirror symmetry about the center of the legs on the applied voltages, tying pairs of electrodes on opposite sides of the center together in software. Crucially, the voltages V1 and V2, applied to C1 and C2 respectively, are permitted

Crystal
Yb-Ba Ba-Sr

XCOM ∆n¯avg (mq/round trip)
18.5 ± 1 12.5 ± 0.7

XSTR ∆n¯avg (mq/round trip)
1.0 ± 0.6 2.8 ± 0.3

TABLE I. Motional excitation per C2LR round trip based on sideband asymmetry for Yb-Ba and Ba-Sr crystals at a fixed linear transport speed of 6 m/s (see fit in Fig. 2(e)), where mq is one thousandth of a quanta

to vary independently (inset Fig. 2(a)). With this singleexception mirror-symmetry constraint, we solve for a linear transport segment [27] that shifts the ions 63 µm to the right from the zone center (Fig. 2(a) and (c)). The wells are constrained such that the axial center-ofmass frequency remains constant during the transport, at ωXCOM/2π = 1.4 MHz for Yb-Ba and ωXCOM/2π = 1.85 MHz for Ba-Sr, while the radial mode frequencies are free to vary (Fig. 2(b)).
The axial symmetry of the electrode geometry about the leg center in conjunction with the constraints described above implies that exchanging the voltages ap-

4

plied to the the C2LR electrodes (V1 → C2, V2 → C1), will move the ion crystal to the left with an equivalent but mirrored trajectory compared to the as-solved rightward shift (Fig. 2(a)). In this demonstration, the re-mapping is done in software, though the outcome is identical to if a cross-over switch were used. As the horizontal and vertical legs are symmetric but independently wired, there exist equivalent operations for conditional upward or downward shifts that can be implemented in paralle-
l with the conditional horizontal shifts described above. (Fig. 2(c)).
A method for scalable ion sorting with similar ambitions was recently proposed by Malinowski et al [13] with two key differences from the experimental demonstration here. First merge, swap, and split operations are fundamental primitives in their sorting algorithm, while the proposal here uses only linear transport through junctions. Compared to the 1D merge, swap, and split strategy, these linear shifts–even through junctions [27]–are generally faster, more reliable [33], and less sensitive to mi-
scalibration and stray fields [34, 35]. Second, the proposal in Ref. [13] uses a switchable input on every electrode in a conditional zone, a multi-bit conditional signal, and a separate set of DACs for each condition. Our method, in its full realization, uses one binary signal and one crossover switch per zone with no additional DAC channels. Despite the increased constraints, we show that there is no sacrifice in performance; arbitrary sorting is possible with low motional excitation and high tr-
ansport speeds.
To demonstrate the performance of the C2LR protocol, we prepare Yb-Ba and Ba-Sr crystals in their motional ground state through a combination of Doppler, electromagnetically-induced-transparency [36] and sideband cooling. This cooling brings all motional modes to near their quantum ground state, after which we apply C2LR operations in either direction followed by its time reverse to return the ions to the zone center for measurement. We then perform thermometry using the asymmetry of the motional -
sidebands to measure the resulting excitation [37, 38]. The measurement ion is 171Yb+ for Yb-Ba crystals and 137Ba+ for Ba-Sr, and numerical analysis assumes a thermal phonon distribution with mean n¯. We focus on the the axial in-phase (XCOM) and axial out-of-phase (XSTR) modes as they are the most relevant modes for current gating schemes [8].
For all presented Yb-Ba measurements, transport sequences begin and end in one of the six horizontal legs where ion fluorescence can be collected with our specific imaging apparatus, while for all Ba-Sr measurements, transport sequences begin and end in the two central vertical legs where all desired operations can be tested while cooling and measurement are calibrated in the minimal number of locations. These two cases of measurement location, while a result of particularities of the experimental-
 setups, nevertheless demonstrates that the trap itself is capable of high quality operation in both vertical and horizontal legs. Note that the axial modes of a crystal located in a vertical leg retain the labels XCOM

and XSTR despite being rotated in the lab frame. In Fig. 2(d), we show the resulting thermal occupa-
tion of XCOM and XSTR as a function of speed averaged over all locations and both direction, with this occupation remaining low up to 8 m/s for Ba-Sr and to at least 10 m/s for Yb-Ba. The resulting occupation is dominated by how cold we can prepare the crystals (n¯XCOM ≈ 0.20 quanta, n¯XSTR ≈ 0.03 quanta), excluding for Ba-Sr XCOM above 8 m/s. In Fig. 2(e) we show that the occupancy n¯avg increases linearly as a function of the number of round trips when running the transport sequence at a fixed s-
peed of 6 m/s, suggesting an incoherent excitation source. The values of the fits are displayed in Tab. I.
All aggregated measurements, including C2LR measurements above and swap-or-stay measurements below, calculate uncertainties on the average n¯avg over the N individual measurements n¯i using one standard deviation on the mean Var(ni)/N . These N measurements include variation in shift direction and measurement location.
IV. SWAP-OR-STAY
We use the C2LR primitive as the key conditional step in a 2D sorting operation that we term ‘swap-orstay’. The swap-or-stay sequence acts on the entire trap, swapping a target set of diagonally adjacent qubit pairs while returning the others to their initial locations after only intra-leg excursions. Swap-or-stay begins with a C2LR operation and ends with its time reverse. Between the conditional shifts are global transports that primarily transport ions into and out of the junction during which -
the C2LR electrodes act as generic broadcast electrodes. As these intermediate steps are global, they must be agnostic to the initial C2LR displacement direction and therefore accomplish the swap and stay operations in parallel.
There are four swap-or-stay variations, each acting on a pair of adjacent crystals but across a different diagonal; for illustration, consider the swap between the crystal that is to the left (pair 1) and the one below (pair 2) the junction (Fig. 3). The swap begins with a conditional shift towards the junction center for both pairs, i.e. right for pair 1 and up for pair 2, followed by a continued upward shift sending pair 2 into the junction. Next, a rightward shift simultaneously brings pair 2 o-
ut of the junction while pair 1 moves in. After this, pair 1 shifts down towards its destination, followed by a leftward shift back through the junction by pair 2. The swap concludes with the reverse of the initial conditional shifts.
Conversely, the stay operation begins with a conditional shift away from the junction. The global shifts that follow are small enough that neither pair leaves its respective leg. The final shift returns both pairs to their starting locations and, as in the swap case, is the reverse of the initial conditional shift.

5

a) C2LR

b) Up

c) R(-90)

d) Right

e) R(-90)

f) Down

Crystal operation XCOM n¯avg (q) XSTR n¯avg (q)

Yb-Ba Yb-Ba Ba-Sr Ba-Sr

swap stay swap stay

0.56 ± 0.05 0.53 ± 0.09 0.48 ± 0.04 0.25 ± 0.06

0.31 ± 0.04 0.10 ± 0.02 0.30 ± 0.03 0.08 ± 0.03

TABLE II. Motional excitation in quanta (q) after a doubled swap-or-stay operation based on sideband asymmetry for YbBa and Ba-Sr crystals at the fastest rate before substantial excitation. The swap-or-stay excitation at a rate (speed) of 2.5 kHz (3.3 m/s) for Yb-Ba and 3.2 kHz (3.0 m/s) for Ba-Sr

g) Left j) C2LR*

h) R(180)

i) Left
coolant qubit pair 1 stay pair 1 swap pair 2 stay pair 2 swap

FIG. 3. Step-by-step depiction of the ion movement during a swap-or-stay operation. The pairs are colored based on their initial locations, with saturation indicating whether swap (dark, solid) or stay (light, dashed) was chosen. All shift and rotation operations are global. Rotations of the crystal at the junction center are required to maintain the correct crystal order for Yb-Ba but not Ba-Sr crystals

In the case of Yb-Ba, there is an additional crystal axis rotation between junction transport operations. This rotation reorients the crystal in the plane of the trap so that the crystal is aligned with the subsequent linear transport direction with Yb facing the junction. With trajectories and potential well constraints chosen here combined with its larger mass ratio, the Ba-Sr crystals orient vertically at the junction center [27], thereby rendering these rotations irrelevant.
Because the intermediate global transport supports either choice of initial C2LR direction, these global shifts must begin with two wells on each leg of the grid, one at each potential endpoint of the C2LR operation. The C2LR condition chooses which of the wells are occupied after the first step or brought back to the center after the penultimate one. This multi-well transport through junctions in a broadcast grid presents a challenging problem given the demands of multispecies junction transport -
and the limited number of electrodes per zone. Through judicious prescription of constraints on the potential wells, we successfully generated solutions for the required global shifts with constraints on the wells that enter junctions based upon previous work [27].
We then characterize the motional excitation and

achievable speed of the four swap-or-stay permutations throughout the region of interest. A crystal is moved sequentially to each location, where it is cooled close to its motional ground state. A doubled swap-or-stay operation at rate Γswap is then executed, which unconditionally returns the ions to the measurement zone, and the resulting excitation of the axial motional modes is characterized with sideband asymmetry. The total swap time 1/Γswap consists of the active transport duration, interpol-
ation time between steps (10 µs per step, Fig. 3), and, for Yb-Ba, rotation duration (20 µs, Fig. 4(e)). The varied parameter is the transport duration, determined by the average speed and the total effective distance traveled of 750 µm, twice the on-grid distance between sites. When testing the doubled swap operations, both crystal types perform the same round trip operation, differing only in where the round trip begins (Fig. 4(f)).
The measured excitation across the swap-or-stays of interest (Fig. 4(a-d)) clearly demonstrates that we can perform the operation for both Yb-Ba and Ba-Sr across a range of rates and grid locations while maintaining the crystal near its motional ground state. Furthermore, the spatial uniformity of the performance illustrates the high degree of translation symmetry achieved in the trap. For Yb-Ba, we measure the fastest swap before substantial motional excitation at a rate of 2.5 kHz, corresponding-
 to linear transport speeds of 3.3 m/s, while for Ba-Sr this occurs at 3.2 kHz and a speed of 3.0 m/s. The average resulting excitations are presented in Tab. II. We do not subtract off the substantial contribution of imperfect XCOM ground state cooling (approximately 0.1-0.2 quanta) as the mode occupations mix considerably during junction transits [27]. This mixing does imply that measurement of the axial modes serves as an effective gauge of the radial mode excitation.
Several features worthy of note emerge from these measurements (Fig. 4(a)-(d)). For large Γswap, the excitation sharply increases, a sign of the onset of coherent excitation caused by fast transport [27]. For longer transport times (Γswap < 2.0 kHz), the resulting excitation is dominated by an effective heating rate that is independent of operation. In this regime, the motional excitation scales with total transport time 1/Γswap, particularly for XCOM. This effective heating rate during the transp-
ort operations matches closely with the measured static

XCOM navg (quanta)

6

(e)

(a)

(b)

InterpolationRotation

C2GLlRobal shifts

(c)

(d)

(f)

XSTR navg (quanta)

Γswap

Γswap

FIG. 4. Swap-or-stay performance. (a-d) Resulting occupancy of axial modes following cooling and two swap or two stay operations as a function of swap rate Γswap. Solid lines are sideband asymmetry measurements averaged across all 8 swapor-stay directions and starting locations (n¯avg), faint lines are the 8 individual cases (n¯i), and the dotted lines in (a-b) are extrapolated temperatures after an equivalent duration of static heating. Error bars represent one standard deviation on the spatial a-
verage n¯avg across all legs to demonstrate the uniformity of the swap-or-stay operation. The total swap time (1/Γswap) is varied by changing the linear transport speed with additional fixed overhead time due to waveform interpolation [27] and crystal rotations in the junction. (e) Transport time broken down by operation for Yb-Ba and Ba-Sr at a fixed linear transport speed of 2 m/s. (f) Despite different starting locations for Yb-Ba (red) and Ba-Sr (teal) crystals, measuring repeated pairs of swa-
p operations means that both setups measure the same 8 swap operations (arrows).

heating rate (Fig. 6) with an offset from imperfect initial cooling. This coarse agreement demonstrates the act of transport itself contributes little motional excitation until speeds increase to the onset of coherent excitation.
The XSTR static heating rates are substantially smaller than XCOM; indeed, little heating occurs in XSTR during a stay operation. However, the junction transport present in a swap operation alters the frequency and character of the motional modes, resulting in mixing of motional occupation [27] and an observable effective XSTR heating rate.
The measurements described were all performed on a single pair of ions that serially sampled the numerous wells present in the broadcast transport operations, and all with identical initial and final measurement locations. We validated that the transport operations accomplished their intended outcome in several ways, including a crystal tagging method using Ba-Sr presented in the Sec. D. To clearly demonstrate the ability of the swap-or-stay primitive to sort a fully loaded 2D grid trap in paralle-
l, we loaded Yb ions in all eight legs of the region of interest and implemented a 2D sorting sequence via swap-or-stay operations. A stop motion video showing the trajectory of all Yb ions was collected with a complementary metal-oxide-semiconductor (CMOS) camera (see Supplementary Video S1).

V. REORDER-OR-NOT
In addition to swapping qubits between zones, a trapped ion quantum processor may require zone-specific reordering of ion crystals. Such conditional reorders may be part of a larger sorting algorithm [39], or simply be used to correct spontaneous crystal reorders that may occur after a background gas collision [10, 40]. In close analogy with the swap-or-stay sequence, we demonstrate a reorder-or-not operation based on C2LR. This operation is only demonstrated for Yb-Ba, though nothing in principle-
 precludes extending it to Ba-Sr.
This reorder-or-not sequence begins and ends with C2LR, as in swap-or-stay, but with a new intermediate waveform that holds two potential wells but rotates only the left one by 180 degrees (Fig. 5(a)). In Fig. 5(b) we show the resulting excitation of a Yb-Ba crystal following a reorder-or-not operation as a function of angular speed, and as a function of number of round trips in Fig. 5(c). In both Fig. 5(b-c) we average the resulting occupancy over all six horizontal zones of the trap as well as b-
oth conditions. The error bars represent one standard deviation on the average value of the excitation across all measured zones.
From the multiple reorder-or-not operations performed sequentially, we can infer heating rates per operation and compare this to baseline rates. For C2LR transport

7

(a)

C2LR

Rotate left 180

C2LR*

(b) XSTR

(c)

XCOM

n̅avg (quanta)

angular speed (rad/ms)

number of round trips

FIG. 5. Reorder-or-not description and performance. (a) The sequence begins with C2LR, continues with the a twowell solution where the left well executes a 180 degree rotation while the right well is static, and ends with the reverse of the initial C2LR. (b-c) Average occupancy over measurements zones and conditions of a Yb-Ba crystal following a reorder-ornot operation as a function of angular speed (b) and number of round trips (c). The mode occupancy increases approximately linearly with the nu-
mber of round trips. Linear fits yield an added noise per reorder of 19.5 ± 0.9 mq/reorder-or-not for the XCOM mode and 7 ± 2 mq/reorder-or-not for the XSTR mode.

speed of 10 m/s and an angular speed of 79 rad/ms, we infer (19.5 ± 0.9) × 10−2 quanta/reorder-or-not in the XCOM mode, and (7 ± 2) × 10−3 quanta/reorder-or-
not for the XSTR mode. Including interpolation time, reorder-or-not takes 93 µs to complete, and with our measured XCOM static heating rate of 181 quanta/s predicts ≈ 16 × 10−3 quanta/reorder-or-not (see Tab. III
for heating rate data). The XSTR mode heats less at 12.3 quanta/s, giving ≈ 1.1 × 10−3 quanta/reorder-or-
not. As in the case of swap-or-stay, the heating inferred
during transport is close to that of our background heat-
ing rates seen in static potential wells with approximately
equivalent axial frequencies.

VI. CONCLUSION
Here we have demonstrated the fundamental building blocks for scaling ion transport in a grid-based Paul trap, namely the conditional exchange of crystals between sites and the reorder of crystals within a site, both requiring only a fixed number of analog signals independent of the grid size and one digital input per site. The key novel ingredient in this demonstration is the C2LR primitive, a shift whose direction in a given site can be reversed with the exchange of voltages applied to two parti-
cular electrodes. Incorporating C2LR with global transport operations realizes the conditional transport operations presented here, but C2LR could also be combined with location-dependent control fields, such as focused lasers, to realize conditional qubit operations such as initialization, measurement, and gates.
The success of the transport operations, attaining subquanta motional excitation at 3 m/s speeds across multiple sites in the trap and with crystals of different composition, confirms the necessary control for multispecies junction transport can be realized despite the restrictions imposed by extensive electrode co-wiring. Looking forward, scaling to a larger grid should improve transport performance and simplify waveform development as the trap will more closely resemble a periodic tiling.
While here the voltages for the different C2LR conditions were exchanged in software, that control can readily be moved in vacuum [41] and even as far downstream as the trap chip itself through the delivery of binary signals and integrated double-pole single-throw switches. Compared to analog signals, the delivery of a large number of binary signals presents minimal technical challenge, and draws directly from application-specific integrated circuit techniques used in classical computing. The numb-
er of on-chip switches needed to implement this method for sorting qubits in a large scale trap are well within the capabilities of cryogenic CMOS technology, and indeed this is already an active area of research for ion traps [42, 43].
This demonstration solidifies a key pillar in scaling up the QCCD architecture that, when combined with other crucial scalability efforts such as integrating photonics on chip [44–46] or controlling qubits without lasers [47, 48], will bring trapped ion quantum computers from the tens to the thousands of qubits and beyond.
ACKNOWLEDGMENTS
We would like to thank the entire Quantinuum team, in particular contributions from Alex An and Mark Kokish.

[1] J. I. Cirac and P. Zoller, Quantum computations with cold trapped ions, Physical review letters 74, 4091 (1995).

[2] R. Srinivas, S. C. Burd, H. M. Knaack, R. T. Sutherland, A. Kwiatkowski, S. Glancy, E. Knill, D. J. Wineland, D. Leibfried, A. C. Wilson, et al., High-fidelity laser-free

8

universal control of trapped ion qubits, Nature 597, 209 (2021). [3] C. R. Clark, H. N. Tinkey, B. C. Sawyer, A. M. Meier, K. A. Burkhardt, C. M. Seck, C. M. Shappert, N. D. Guise, C. E. Volin, S. D. Fallek, et al., High-fidelity bellstate preparation with 40Ca+ optical qubits, Physical Review Letters 127, 130505 (2021). [4] T. P. Harty, D. T. Allcock, C. J. Ballance, L. Guidoni, H. A. Janacek, N. M. Linke, D. N. Stacey, and D. M. Lucas, High-fidelity preparation, gates, memory, and readout of a t-
rapped-ion quantum bit, Physical review letters 113, 220501 (2014). [5] F. A. An, A. Ransford, A. Schaffer, L. R. Sletten, J. Gaebler, J. Hostetter, and G. Vittorini, High fidelity state preparation and measurement of ion hyperfine qubits with I > 1/2, Physical Review Letters 129, 130501 (2022). [6] D. J. Wineland, C. Monroe, W. M. Itano, D. Leibfried, B. E. King, and D. M. Meekhof, Experimental issues in coherent quantum-state manipulation of trapped atomic ions, Journal of Research of the Nation-
al Institute of Standards and Technology 103, 259 (1998). [7] D. Kielpinski, C. Monroe, and D. J. Wineland, Architecture for a large-scale ion-trap quantum computer, Nature 417, 709 (2002). [8] J. M. Pino, J. M. Dreiling, C. Figgatt, J. P. Gaebler, S. A. Moses, M. S. Allman, C. H. Baldwin, M. Foss-Feig, D. Hayes, K. Mayer, C. Ryan-Anderson, and B. Neyenhuis, Demonstration of the trapped-ion quantum ccd computer architecture, Nature 592, 209 (2021). [9] A. W. Cross, L. S. Bishop, S. Sheldon, P. D. -
Nation, and J. M. Gambetta, Validating quantum computers using randomized model circuits, Physical Review A 100, 032328 (2019). [10] S. Moses, C. Baldwin, M. Allman, R. Ancona, L. Ascarrunz, C. Barnes, J. Bartolotta, B. Bjork, P. Blanchard, M. Bohn, et al., A race-track trapped-ion quantum processor, Phys. Rev. X 13, 041052 (2023). [11] W. Paul, Electromagnetic traps for charged and neutral particles, Reviews of modern physics 62, 531 (1990). [12] A. Sørensen and K. Mølmer, Entanglement and quantu-
m computation with ions in thermal motion, Phys. Rev. A 62, 022311 (2000). [13] M. Malinowski, D. Allcock, and C. Ballance, How to wire a 1000-qubit trapped-ion quantum computer, PRX Quantum 4, 040313 (2023). [14] G.-D. Lin, S.-L. Zhu, R. Islam, K. Kim, M.-S. Chang, S. Korenblit, C. Monroe, and L.-M. Duan, Large-scale quantum computation in an anharmonic linear ion trap, Europhysics Letters 86, 60004 (2009). [15] T. Monz, P. Schindler, J. T. Barreiro, M. Chwalla, D. Nigg, W. A. Coish, M. Harlander-
, W. H¨ansel, M. Hennrich, and R. Blatt, 14-qubit entanglement: Creation and coherence, Physical Review Letters 106, 130506 (2011). [16] S. Ulm, J. Roßnagel, G. Jacob, C. Degu¨nther, S. Dawkins, U. Poschinger, R. Nigmatullin, A. Retzker, M. Plenio, F. Schmidt-Kaler, et al., Observation of the Kibble–Zurek scaling law for defect formation in ion crystals, Nature communications 4, 2290 (2013). [17] S. Debnath, N. M. Linke, C. Figgatt, K. A. Landsman, K. Wright, and C. Monroe, Demonstration of a smal-
l programmable quantum computer with atomic qubits, Nature 536, 63 (2016). [18] J.-S. Chen, E. Nielsen, M. Ebert, V. Inlek, K. Wright,

V. Chaplin, A. Maksymov, E. Pa´ez, A. Poudel, P. Maunz, et al., Benchmarking a trapped-ion quantum computer with 29 algorithmic qubits, arXiv preprint arXiv:2308.05071 (2023). [19] O. Katz, M. Cetina, and C. Monroe, Programmable nbody interactions with trapped ions, PRX Quantum 4, 030311 (2023). [20] W. K. Hensinger, S. Olmschenk, D. Stick, D. Hucul, M. Yeo, M. Acton, L. Deslauriers, C. Monroe, and J. Rabchuk, T-junction ion trap array for twodimensional ion shuttling, storage, and manipulation, A-
pplied Physics Letters 88 (2006). [21] J. M. Amini, H. Uys, J. H. Wesenberg, S. Seidelin, J. Britton, J. J. Bollinger, D. Leibfried, C. Ospelkaus, A. P. VanDevender, and D. J. Wineland, Toward scalable ion traps for quantum information processing, New journal of Physics 12, 033031 (2010). [22] D. L. Moehring, C. Highstrete, D. Stick, K. M. Fortier, R. Haltli, C. Tigges, and M. G. Blain, Design, fabrication and experimental demonstration of junction surface ion traps, New Journal of Physics 13, 075-
018 (2011). [23] R. Blakestad, C. Ospelkaus, A. VanDevender, J. Wesenberg, M. Biercuk, D. Leibfried, and D. J. Wineland, Nearground-state transport of trapped-ion qubits through a multidimensional array, Physical Review A 84, 032314 (2011). [24] K. Wright, J. M. Amini, D. L. Faircloth, C. Volin, S. C. Doret, H. Hayden, C. Pai, D. W. Landgren, D. Denison, T. Killian, et al., Reliable transport through a microfabricated X-junction surface-electrode ion trap, New Journal of Physics 15, 033004 (2013).-
 [25] G. Shu, G. Vittorini, A. Buikema, C. Nichols, C. Volin, D. Stick, and K. R. Brown, Heating rates and ion-motion control in a Y-junction surface-electrode trap, Physical Review A 89, 062308 (2014). [26] C. Decaroli, R. Matt, R. Oswald, C. Axline, M. Ernzer, J. Flannery, S. Ragg, and J. P. Home, Design, fabrication and characterization of a micro-fabricated stacked-wafer segmented ion trap with two X-junctions, Quantum Science and Technology 6, 044001 (2021). [27] W. C. Burton, B. Estey, I. M.-
 Hoffman, A. R. Perry, C. Volin, and G. Price, Transport of multispecies ion crystals through a junction in a radio-frequency Paul trap, Physical Review Letters 130, 173202 (2023). [28] M. D. Barrett, B. DeMarco, T. Schaetz, V. Meyer, D. Leibfried, J. Britton, J. Chiaverini, W. Itano, B. Jelenkovi´c, J. Jost, et al., Sympathetic cooling of 9Be+ and 24Mg+ for quantum logic, Physical Review A 68, 042302 (2003). [29] S. Krinner, S. Storz, P. Kurpiers, P. Magnard, J. Heinsoo, R. Keller, J. Luetolf, C.-
 Eichler, and A. Wallraff, Engineering cryogenic setups for 100-qubit scale superconducting circuit systems, EPJ Quantum Technology 6, 2 (2019). [30] P. L. W. Maunz, High optical access trap 2.0. 10.2172/1237003 (2016). [31] C. Sorace-Agaskar, D. Kharas, S. Yegnanarayanan, R. T. Maxson, G. N. West, W. Loh, S. Bramhavar, R. J. Ram, J. Chiaverini, J. Sage, and P. Juodawlkis, Versatile silicon nitride and alumina integrated photonic platforms for the ultraviolet to short-wave infrared, IEEE Journal o-
f Selected Topics in Quantum Electronics 25, 1 (2019). [32] S. Olmschenk, K. C. Younge, D. L. Moehring, D. N. Matsukevich, P. Maunz, and C. Monroe, Manipulation and

detection of a trapped Yb+ hyperfine qubit, Physical Review A 76, 052314 (2007). [33] F. Lancellotti, S. Welte, M. Simoni, C. Mordini, T. Behrle, B. de Neeve, M. Marinelli, V. Negnevitsky, and J. Home, Low-excitation transport and separation of high-mass-ratio mixed-species ion chains, arXiv preprint arXiv:2312.14006 (2023). [34] T. Ruster, C. Warschburger, H. Kaufmann, C. T. Schmiegelow, A. Walther, M. Hettrich, A. Pfister, V. Kaushal, F. Schmidt-Kaler, and U. G. Poschinger, Experimental realizat-
ion of fast ion separation in segmented Paul traps, Physical Review A 90, 033410 (2014). [35] P. Murali, D. M. Debroy, K. R. Brown, and M. Martonosi, Architecting noisy intermediate-scale trapped ion quantum computers, in 2020 ACM/IEEE 47th Annual International Symposium on Computer Architecture (ISCA) (IEEE, 2020) pp. 529–542. [36] R. Lechner, C. Maier, C. Hempel, P. Jurcevic, B. P. Lanyon, T. Monz, M. Brownnutt, R. Blatt, and C. F. Roos, Electromagnetically-induced-transparency ground-state cool-
ing of long ion strings, Phys. Rev. A 93, 053401 (2016). [37] C. Monroe, D. M. Meekhof, B. E. King, S. R. Jefferts, W. M. Itano, D. J. Wineland, and P. Gould, Resolvedsideband raman cooling of a bound atom to the 3d zeropoint energy, Phys. Rev. Lett. 75, 4011 (1995). [38] A. Rasmusson, M. D’Onofrio, Y. Xie, J. Cui, and P. Richerme, Optimized pulsed sideband cooling and enhanced thermometry of trapped ions, Physical Review A 104, 043108 (2021). [39] H. Kaufmann, T. Ruster, C. T. Schmiegelow, M. A. -
Luda, V. Kaushal, J. Schulz, D. von Lindenfels, F. Schmidt-Kaler, and U. G. Poschinger, Fast ion swapping for quantum-information processing, Physical Review A 95, 052319 (2017). [40] A. M. Hankin, E. Clements, Y. Huang, S. M. Brewer, J.-S. Chen, C.-W. Chou, D. Hume, and D. Leibrandt, Systematic uncertainty due to background-gas collisions in trapped-ion optical clocks, Physical Review A 100, 033419 (2019). [41] J. Alonso, F. M. Leupold, Z. U. Sol`er, M. Fadel, M. Marinelli, B. C. Keitch, V. Negne-
vitsky, and J. P. Home, Generation of large coherent states by bang–bang control of a trapped-ion oscillator, Nature Communications 7, 11243 (2016). [42] J. Stuart, R. Panock, C. Bruzewicz, J. Sedlacek, R. McConnell, I. Chuang, J. Sage, and J. Chiaverini, Chipintegrated voltage sources for control of trapped ions, Physical Review Applied 11, 024010 (2019). [43] M. G. Blain, R. Haltli, P. Maunz, C. D. Nordquist, M. Revelle, and D. Stick, Hybrid mems-cmos ion traps for nisq computing, Quantum Scienc-
e and Technology 6, 034011 (2021). [44] M. Ivory, W. J. Setzer, N. Karl, H. McGuinness, C. DeRose, M. Blain, D. Stick, M. Gehl, and L. P. Parazzoli, Integrated optical addressing of a trapped ytterbium ion, Physical Review X 11, 041033 (2021). [45] K. K. Mehta, C. D. Bruzewicz, R. McConnell, R. J. Ram, J. M. Sage, and J. Chiaverini, Integrated optical addressing of an ion qubit, Nature nanotechnology 11, 1066 (2016). [46] C. Mordini, A. R. Vasquez, Y. Motohashi, M. Mu¨ller, M. Malinowski, C. Zhang-
, K. K. Mehta, D. Kienzler, and J. P. Home, Multi-zone trapped-ion qubit

swap

9
stay

XCOM navg (quanta)

XSTR navg (quanta)

183 ± 19 q/s 123 ± 4 q/s
85 ± 19 q/s 34 ± 13 q/s

202 ± 12 q/s 113 ± 15 q/s 37 ± 11 q/s 7.8 ± 2.5 q/s

2 x swap time (ms)

2 x swap time (ms)

FIG. 6. Effective heating rate fits for transport during swapor-stay operations for XCOM and XSTR, removing the fastest 4 speeds from the measurements in the main text.

control in an integrated photonics qccd device (2024), arXiv:2401.18056 [quant-ph]. [47] B. Lekitsch, S. Weidt, A. G. Fowler, K. Mølmer, S. J. Devitt, C. Wunderlich, and W. K. Hensinger, Blueprint for a microwave trapped ion quantum computer, Science Advances 3, e1601540 (2017). [48] R. T. Sutherland and M. Foss-Feig, Laser-free trapped ion entangling gates with aese: Adiabatic elimination of spin-motion entanglement, New Journal of Physics (2024). [49] J. H. Wesenberg, Ideal intersections for rad-
io-frequency trap networks, Physical Review A 79, 013416 (2009). [50] K. Wright, J. M. Amini, D. L. Faircloth, C. Volin, S. C. Doret, H. Hayden, C. Pai, D. W. Landgren, D. Denison, T. Killian, et al., Reliable transport through a microfabricated X-junction surface-electrode ion trap, New Journal of Physics 15, 033004 (2013).

Appendix A: Effective heating rate during transport
For slow transport speeds (Γswap < 2.0 kHz), we observe a linear increase in excitation with increased transport time that can be described by an effective heating rate. The linear fits are plotted in Fig. 6 and the resulting effective heating rates are shown in Tab. III alongside the measured heating rates in the zone centers for Yb-Ba (Ba-Sr) in multiple horizontal (vertical) zones.
For both Ba-Sr and Yb-Ba, the effective heating rates of the XCOM modes are comparable to the heating rates measured in a static well at the zone center (Tab. III), while XSTR heats significantly more during a swap than a stay. This good XCOM agreement is despite the complicated behavior that occurs as ions approach the junction, involving excursions of the crystal off of the pseu-

10

leg XCOM XSTR RSTR1 RSTR2 crystal

(r, c) q/s

q/s

q/s q/s

(0, 0) 141 (0, 2) 213 (2, 0) 169 (2, 2) 167 (4, 0) 204 (4, 2) 191 average 180 ± 11 swap 183 ± 19 stay 202 ± 12

11.8 12.2 13.3 10.7 13.7 11.9 12.3 ± 0.9 85 ± 19 37 ± 10

17.9 37.6 30.6 27.2 37.4 24.4 29 ± 3
− −

28.2 28.5 30.0 31.2 33.7 38.4 32 ± 2
− −

Yb − Ba Yb − Ba Yb − Ba Yb − Ba Yb − Ba Yb − Ba Yb − Ba Yb − Ba Yb − Ba

(1, 1) 91 (1, 3) 110 average 101 ± 27 swap 123 ± 4 stay 113 ± 15

11 8 10 ± 3 34 ± 13 8±3

14

35 Ba − Sr

35

31 Ba − Sr

25 ± 11 33 ± 12 Ba − Sr

−

− Ba − Sr

−

− Ba − Sr

TABLE III. . Measured heating rates in quanta per second (q/s) across the six horizontal (upper table portion) sites for Yb-Ba and two vertical (lower table portion) sites for BaSr compared to effective heating rates during swap or stay extracted from slow transport operations (Fig. 6)
.

dopotential minima, rapidly changing motional mode frequencies and directions, including population exchange between different normal modes.

Appendix B: Modeling ion transport waveforms

As outlined in previous work [27], we generate a numerical electrostatic model that includes the entire trap surface. This allows us to estimate the total potential as a function of position above the trap:

ϕ(x) = ϕpp(x) + ϕi(x),
i

(B1)

where ϕpp(x) is the pseudopotential resulting from the rf drive and ϕi(x) is the potential generated by control electrode i. To transport ions between locations in the grid we find multiple potential wells evenly spaced across the transport path through a least-squares numerical optimization procedure. We then interpolate between these voltages to form waveforms that can be played out on a arbitrary waveform generator to effect ion transport.
In typical surface electrode traps the ions are constrained to follow paths of minimum pseudopotential to avoid unnecessary micromotion and concomitant heating from noise emitted by the rf source. However, in junctions it is well studied that the confinement, which is defined as C = ∇2ϕ(x) ∝ i ωi can drop precipitously [27, 49] leaving the ion crystal susceptible to noise due to the lowered motional frequencies ωi.
It is possible to preserve confinement by allowing the ions to deviate from the paths of minimum pseudopotential [25, 27, 50]. This has been used successfully to

generate low heating transport waveforms through junction based ion traps [27], and is the strategy used in this work.
Appendix C: Static potential well frequencies
A key component of our broadcast electrode scheme is the uniformity/periodicity of the trap zones. One experimentally accessible proxy for this uniformity, in addition to the success of transport operations in different legs presented in the main text, is the consistency of the motional mode frequencies from leg to leg (using Yb-Ba). These frequencies are presented in six legs for Yb-Ba in Tab. IV.
Appendix D: Validation of swap-or-stay transport operations
As we can run transport with the Yb-Ba (Ba-Sr) crystals remaining in their quantum ground state, and that this agrees with our numerical simulations, is sufficient evidence that the swap/stay is being completed as expected.
To directly verify the intended outcome of the operation in parallel operation, two Ba-Sr crystals were loaded into adjacent horizontal and vertical zones. The two crystals are Doppler cooled using a pair of co-propagating 422 nm and 493 nm beams aligned at 45 degrees to the grid axis, illuminating both crystals simultaneously, with repump beams (at 1092 nm and 650 nm) delivered as sheet beams. A single 1762 nm beam aligned with the vertical leg drives transitions between the 6S1/2 to 5D5/2 states-
 of the Ba ion. The 5D5/2 state is isolated from the fluorescence cycling transitions, and so the ion is dark if driven to this ’shelved’ state [5].
A sequence of either swaps or stays with a π pulse on the shelving transition results in a clear demonstration of successful swaps and stays with two crystals in parallel. During repeated stay operations, the Ba in the vertical leg is driven to the 5D5/2 state or back every cycle, and therefore oscillates between bright or dark with a period of two operations, while the Ba in the horizontal leg remains bright at all times. For the swap case, the Ba that is initially shelved in the vertical zone th-
en swaps to the horizontal zone, where it remains dark until it returns to the vertical zone after the next swap (Fig. 7). The toggle between bright and dark is half as fast because it was twice the ions to shelve, resulting in oscillations between bright and dark in both zones with twice the period (4 operations) of the stay case.
A third experimental setup and nominally identical trap went farther and demonstrated basic sorting using the swap-or-stay operation. A 369 nm sheet beam was used to address single 171Yb ions in a fully loaded section of a 3 × 2 section of the grid trap, and the resulting fluorescence was detected by a CMOS camera spanning

11

leg (r, c)

XCOM (MHz)

XSTR (MHz)

RSTR1 (MHz)

RSTR2 (MHz)

(0, 0)

1.45944

2.56496

2.15928

2.03187

(0, 2)

1.46225

2.56298

2.14316

2.02713

(2, 0)

1.46375

2.56526

2.17374

2.054441

(2, 2)

1.46440

2.56589

2.16279

2.04457

(4, 0)

1.46176

2.55997

2.15341

2.03401

(4, 2)

1.46060

11.9

2.14302

2.01260

average 1.4620 ± 7 × 10−4 2.5634 ± 9 × 10−4 2.155 ± 4 × 10−3 2.034 ± 5 × 10−3

TABLE IV. . The axial center-of-mass and axial/radial stretch mode frequencies of a Yb-Ba crystal in a static well in each leg differ on the single kHz scale.

1

vertical

thresholded Ba counts

0 1

horizontal

0

0 5 10 15 20 0 5 10 15 20

swaps

stays

FIG. 7. The Ba fluorescence of two Ba-Sr crystals in two diagonally adjacent legs is measured after a number of either swap or stay operations. The crystals are ‘tagged’ using 1762 nm light resonant with the shelving transition 6S1/2 to 5D5/2. A π-pulse on this transition is driven just before fluorescence is measured. During the repeated stay operations, this results in the Ba in the vertical leg oscillating between dark (shelved) and bright (ground state) with a period of two, while both legs os-
cillate with twice the period during the repeated swap operation

the entire grid section of the trap. In Supplementary Video S1, using the exact same voltage waveforms for the Yb-Ba data shown in the main text, we show swapping of Yb ions between the vertical zones and horizontal zones above and to the left. We chose to record the video using a third experimental setup as this system had a sheet beam and camera setup that was capable of imaging the entire 3 × 2 grid section of the trap. Single Yb atoms were used since a Ba sheet beam was not immediately availab-
le.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:27.121Z
- **Text Length:** 50950 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
