# PDF Document: Ahmadi and Serdijn - 2025 - Adaptive Gradient Descent MPPT Algorithm With Complexity-Aware Benchmarking for Low-Power PV Systems.pdf

**File Path:** Ahmadi and Serdijn - 2025 - Adaptive Gradient Descent MPPT Algorithm With Complexity-Aware Benchmarking for Low-Power PV Systems.pdf

**Processed Date:** 2026-02-10T18:17:39.285Z

**File Size:** 11078.13 KB

**Total Pages:** 12

**Extracted Pages:** 12

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3323

**Title:** Adaptive Gradient Descent MPPT Algorithm With Complexity-Aware Benchmarking for Low-Power PV Systems

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

1
Adaptive Gradient Descent MPPT Algorithm
With Complexity-Aware Benchmarking for
Low-Power PV Systems
Kimia Ahmadi, Student Member, IEEE, Wouter A. Serdijn, Fellow, IEEE
Abstract—This paper proposes a computationally efficient, real-time maximum power point tracking (MPPT) algorithm tailored for low-power photovoltaic (PV) systems operating under fast-changing irradiance and partial shading conditions (PSC). The proposed method augments the classical perturb and observe (P&O) algorithm with an adaptive gradient descent mechanism that dynamically scales the perturbation step size based on the instantaneous power–voltage slope, thereby minimizing tracking time and s-
teady-state oscillations. An optional initialization routine enhances global MPP (GMPP) tracking under PSC. Extensive simulations, including experimental-derived irradiance data from freely moving rodent subjects relevant for the targeted application, and tests across varying converter topologies and temperatures, demonstrate its robust, topology-independent performance. The proposed algorithm achieves 99.94% MPPT efficiency under standard test conditions (STC), 99.21% when applied on experimental-
 data, and >99.6% for the tested temperature profiles. Under PSC, the initialization routine improves tracking efficiency by up to 7.8%. A normalized gate-level complexity analysis and a unified figure-of-merit (FoM) incorporating efficiency, tracking time, and computational cost demonstrate that the proposed algorithm outperforms 35 state-of-the-art P&O-based MPPT algorithms. These results underscore its suitability for integration in low-power power management integrated circuits (PMICs) operati-
ng under dynamic and resource-constrained conditions.
Index Terms—Real-time maximum power point tracking (MPPT), gradient descent, partial shading, low power PV systems, computational load.
I. INTRODUCTION
Optical wireless power transfer (OWPT) enables efficient, directed wireless power transfer (WPT) where wired or conventional links are impractical, making it suitable for mobile applications such as biomedical wearables and internet of things (IoT) nodes. However, receiver motion and environmental variability lead to fluctuating incident power, complicating reliable energy harvesting. Robust maximum power point tracking (MPPT) is thus
Kimia Ahmadi and Wouter A. Serdijn are with the Department of Microelectronics, Delft University of Technology, The Netherlands. This publication is part of the project Dutch Brain Interface Initiative (DBI2) with project number 024.005.022 of the research programme Gravitation, which is financed by the Dutch Ministry of Education, Culture and Science (OCW) via the Dutch Research Council (NWO).
essential to maximize extraction from photovoltaic (PV) receivers under dynamic conditions [1], [2]. The traditional MPPT algorithms, such as perturb and observe (P&O) and incremental conductance (IC), provide simplicity but suffer under dynamic conditions. Intelligent and hybrid techniques, including artificial neural networks (ANN), and metaheuristic methods such as particle swarm optimization (PSO), provide high accuracy at a high computational cost or offline training and hence are not suitabl-
e for real-time embedded systems [3]–[6]. Partial shade conditions (PSC) introduce multiple local maxima into the power–voltage (P-V) curve, making MPPT challenging. Advanced techniques like gray wolf optimization (GWO), genetic algorithms (GA), etc., enhance global maximum power point (GMPP) tracking but entail significant computation burden or offline training [7]–[9]. Model-based and off-line methods provide alternatives but are not viable for unsupervised applications. Temperature changes furt-
her affect MPPT by shifting the maximum power point (MPP). Some recent research [10], [11] reported degraded tracking under thermal alterations. Intelligent techniques such as long-short-term memory (LSTM)-based MPPT [12] provide improved thermal robustness but come at higher computational cost. This work analyzes the impact of temperature variations on a new adaptive MPPT algorithm applicable to dynamic OWPT scenarios. Motivated by the Dutch Brain Interface Initiative (DBI2) project [13], focused-
 on neural recording with a head-mounted optical receiver for freely moving rodents, this paper addresses the challenges of rapid movements causing irradiance fluctuations. The key contributions include: (1) an adaptive gradient descent–enhanced P&O algorithm for low-power dynamic OWPT systems that scales the perturbation step with the realtime power–voltage gradient to suppress steady-state oscillations and accelerate convergence; (2) a light-weight initialization routine enhancing global MPPT un-
der PSC; (3) an input-independent, converter-agnostic framework for real-time embedded applications; (4) a normalized computational load evaluation based on gate-level ASIC operation costs; and (5) an integrated figure of merit
arXiv:2511.20895v1 [eess.SY] 25 Nov 2025

2
(FoM) balancing efficiency, tracking time, and complexity for equitable benchmarking across various algorithms irrespective of the system’s power level. Collectively, these provide a rigorous foundation for hardware-aware, efficient, and scalable MPPT across dynamic OWPT. The rest of the paper is organized as follows: Section II describes the designed photovoltaic system. Section III presents the proposed adaptive gradient descent–based MPPT algorithm and initialization routine. Section IV present-
s simulation results under varying irradiance, temperature, converter types, and PSC, along with computational complexity benchmarking. Section V establishes a unified FoM for comparison of algorithms under fair conditions. Finally, section VI concludes with observations and future directions.
II. PHOTOVOLTAIC SYSTEM OVERVIEW
A detailed understanding of the PV module and the power conditioning stage is important for the design of an effective MPPT for OWPT systems. This section describes these two core components to support the subsequent algorithm development and analysis.
A. PV Module Modeling
We use the single-diode PV model in Fig. 1, with Rs and Rsh denoting series and shunt resistances, defines the output current as in (1): [14]:
Fig. 1: Single-diode equivalent circuit of a PV cell.
I = Iph − Is exp V + IRs
αVt
− 1 − V + IRs
Rsh
(1)
In (1), the V is the terminal voltage, Iph is the photocurrent, Is is the diode saturation current, α is the diode ideality factor, and Vt = kT
qe is the thermal voltage,
with k being Boltzmann’s constant, T the absolute temperature, and qe the electron charge.
Iph = (Isc,STC + ki(T − TSTC)) · G
GSTC
(2)
Is = Isc,STC + ki(T − TSTC)
exp Voc+kv(T −TSTC)
aVt − 1
(3)
In (2), Isc,STC and Voc are the short-circuit current and open-circuit voltage at STC; (TSTC = 25◦C and GSTC = 1000 W/m2), ki and kv are temperature coefficients, and G is the incident irradiance.
B. DC-DC Boost Converter
The DC–DC converter ensures PV-load impedance matching by regulating energy transfer through the duty cycle. While various topologies, such as boost, buck–boost, and multilevel converters, offer trade-offs in complexity and efficiency [15]–[17], often suffer from high input current ripple when operated at high voltage gains [18], [19]. The 2-phase interleaved boost converter (Fig. 2) addresses these problems by sharing the input current between the two branches, reducing critical inductor current -
ripple and boosting conversion efficiency at moderate complexity [20]–[22]. As proof of principle, we use a 2-phase interleaved converter. However, the proposed algorithm also works for other converter types.
Fig. 2: 2-phase interleaved boost converter.
The 2-phase interleaved converter’s ideal voltage gain remains identical to that of a conventional boost converter. The switches operate in complementary pairs, and the conduction loss is dominated by the equivalent series resistances (ESR) of the inductors and the onresistances of the switches. Losses due to gate charging are proportional to device capacitance and switching frequency. The robustness of the proposed adaptive MPPT algorithm, under dynamic conditions, is verified through comprehensi-
ve simulations in the following sections.
III. PROPOSED MPPT ALGORITHM
This section presents a novel adaptive gradient descent–based P&O MPPT algorithm for low-power OWPT systems, featuring adaptive step size control and an optional initialization for robust performance at PSC.
A. Overview of conventional P&O Algorithm
The conventional P&O algorithm tracks the MPP by incrementally perturbing the duty cycle D and observing the resulting change in power P = V · I, where V and I denote the PV voltage and current, respectively. The sign of ∆P determines the next perturbation direction, as illustrated in Fig. 3 [23], [24]. Large step perturbations enable fast convergence but cause SS oscillations, whereas small steps reduce oscillations but at the cost

3
of slower response. This is particularly critical for lowpower applications, in which any reduction in efficiency drastically degrades device performance.
Fig. 3: Conventional P&O flowchart.
The persistent trade-off between SS oscillations and tracking speed remains a key limitation of P&O-based algorithms. To address this, various approaches have been proposed: modified P&Os [16], [25], [26], hybrid methods incorporating fuzzy logic, NN, or metaheuristic optimization [27]–[32], and logic-based schemes that periodically suspend MPPT operation to suppress oscillations [33]–[35]. However, these strategies often introduce added computational complexity, latency, or the need for offline t-
raining, memory, and additional circuitry, limiting their suitability for low-power, real-time systems. These limitations motivate the need for a lightweight, inherently adaptive solution, which will be discussed next.
B. Proposed Adaptive Gradient Descent–Based P&O MPPT Algorithm with Initialization Routine
To overcome these limitations, we propose an adaptive MPPT algorithm applying principles of gradient descent (GD). The algorithm adapts the perturbation step size (∆D) dynamically with the local gradient of the power–voltage curve, dP
dV , as given in (4), according to the proposed flowchart in Fig. 4. This adaptation ensures fast convergence and eliminates SS oscillations, key metrics for real-time, efficient tracking in highly dynamic conditions. The approach is lightweight, requires no training, and is suitable for unsupervised implementations. Gradient descent is a first-order optimization technique that iteratively updates parameters in the direction of the steepest descent in order to maximize or minimize an objective fun-
ction. When applied in real-time MPPT, it adjusts the duty cycle based upon the dP
dV . A positive dP
dV
implies operation left of MPP (wherein a decreased duty cycle is needed), and a negative dP
dV implies operation to
the right side. This bidirectional, continuous adjustment eliminates the need to periodically suspend or disable MPPT operation to suppress steady-state oscillations. The update based upon the slope is scaled by a tunable factor β, which provides a balance between speed and settling accuracy in SS. Its analytic expression is derived below:
Fig. 4: Proposed adaptive gradient decent-based P&O algorithm with initialization routine.
dP
dV = I + V ·

−
Is
αVt e
V +IRs
αVt + 1
RP
1 + IsRs
αVt e
Vt +I Rs
αVt + Rs
RP

 (4)
dP
dV = Iph − Is exp V
αVt
− 1 −( Is
αVt
) exp V
αVt (5) In order to resolve SS oscillations, the algorithm compares the difference between consecutive power deltas, |∆P (k)−∆P (k −1)|, with a tunable factor (α) of Ppv. This adaptive thresholding suppresses unnecessary updates close to the MPP and the risk of oscillation, ensuring robust performance during transients and SS, making it well-suited for highly dynamic and unsupervised low-power PV applications. A major limitation of GD techniques is their tendency to converge on local extrema in mu-
ltimodal, non-convex search spaces, affecting real-time performance. This can be mitigated by gradient modifiers like Momentum [36], [37] and Adam [38], [39] that enhance convergence stability at the cost of extra tunings; advanced initializations like Xavier [40], [41] and He [42], [43] minimize local optima risk but do not guarantee multimodal trap escape; randomness injection like PSO [44]–[46] and spawning GD techniques [47], [48] enhance exploration at the cost of potential instability and sl-
ow convergence, metaheuristics, and hybrid techniques like genetic algorithms with GD [49], [50] enhance adaptability in complex landscapes but increase computational load. Despite these

4
advances, applying them in real-time MPPT under PSCs with multiple P-V peaks remains challenging. To address this issue, we add a lightweight, optional initialization routine, outlined in pink in Fig. 4. Through this initialization, the algorithm takes a coarse scan of the duty cycle range and saves the resulting duty cycle that provides the maximum observed power. This single scan has the effect of placing the starting operating point close to the GMPP, lowering the risk of local trapping. The op-
tional initialization routine is designed to be resourceefficient, storing just two power and duty cycle values. It does not impose much additional computational load while improving algorithm robustness under PSC.
IV. SIMULATION RESULTS
The proposed MPPT algorithm was verified in MATLAB/Simulink with a parameterized PV model, a 2phase interleaving boost converter, and a lithium-ion rechargeable cell, as depicted in Fig. 5. The load simulates a NeuroLogger 3 probe (25 mA, 3.7 V) powered from a 40 mAh battery for 75 minutes’ continuous operation [51]. PV modeling incorporates high-fidelity characterization from the Photovoltaic Materials and Devices group at Delft University of Technology [52] under standard AM1.5G irradiance by th-
e parameters given in Table I. To satisfy power and form-factor requirements, the PV area is scaled to 10.49 cm2 and gives 250 mW at MPP. The converter’s voltage gain in (6) provides a charging voltage for a 4.2 V lithium-ion cell, while the component specifications given in Table II are for testing the proposed algorithm for operation in a stable manner.
G = Vout
Vin
= 4.2 V
0.650 V ≈ 6.46 (6)
Fig. 5: Simulink model of the proposed PV system.
The average MPPT efficiency in (%), as a primary evaluation metric in this study is defined in (7) [16], where PPV(t) is the instantaneous harvested power and Pmax(t) is the theoretical maximum power, this measure captures transient as well as SS tracking.
ηMPPT,avg =
R PPV(t)dt
R Pmax(t)dt (7)
TABLE I: PV Cell Electrical Specifications [52].
Electrical Data at STC Value
Peak power Pmax (93.3 ± 1.0) mW Form factor (82.18 ± 0.58)% Voltage (maximum power) (650.35 ± 1.35) mV Current (maximum power) (143.5 ± 1.2) mA Open-circuit voltage (721.4 ± 1.8) mV Short-circuit current (157.4 ± 1.5) mA Cell efficiency (23.83 ± 0.29)% Designated area (3.915 ± 0.020) cm2
TABLE II: Interleaved Boost Converter Specifications.
Component Value
inductance – ESR 2.2 μH – 90 mΩ Capacitor 10 μF Voltage gain (4.2/0.65) V Switching frequency 1 MHz Converter efficiency 96.43% Sample time 1 × 10−8 s
The following section evaluates the proposed algorithm across five evaluation metrics: (A) irradiance dynamics tracking, (B) topology-independence and input-source agnosticism, (C) thermal stability, (D) resilience under PSC, and (E) computational complexity evaluation.
A. Dynamic Irradiance Tracking Evaluation
Three representative irradiance profiles were developed to evaluate the performance of the proposed adaptive gradient decent-based algorithm, covering abrupt, gradual, and stochastic irradiance changes as depicted in: Fig. 6(a) worst-case step function, Fig. 6(b) EN50530 standard dynamic test, and Fig. 6(c) an experimentally acquired irradiance profile derived from rodent locomotion data. Profile 1 is designed to emulate worst-case irradiance changes. It combines abrupt step changes, from complete-
 darkness (0 W/m2) to full irradiance (1000 W/m2) and back to test transient response (drift test). Additionally, SS performance is assessed at multiple irradiance levels to stress the algorithm under both dynamic and static extremes. Fig. 7 compares the proposed algorithm with the conventional P&O algorithm under Profile1, evaluated over a 0.16 s at fixed cell temperature (25◦C).
• Fig. 7(a) shows the resulting tracking performance of the conventional P&O algorithm in red and the proposed algorithm in black at Profile 1. • Fig. 7(b) shows the corresponding duty cycle waveform of the proposed algorithm. By adapting the step size based on the P-V gradient, leading to fast yet stable convergence during both dynamic and SS periods, successfully locked at MPP, suppresses oscillations, and maintains a stable duty cycle. • Fig. 7(c) zooms in on the system’s SS response, where the-
 proposed algorithm rapidly locks onto the MPP, and meanwhile is still fully awake, while conventional P&O shows persistent oscillations.

5
Fig. 6: Irradiance profiles used for dynamic MPPT performance evaluation: (a) Worst-case step function (Profile 1), (b) EN50530 standard dynamic test (Profile 2), and (c) experimental rodent trajectory-based profile (Profile 3).
Fig. 7: Tracking performances of conventional P&O algorithm and proposed algorithm at Profile 1: (a) Full power response. (b) Proposed algorithm’s duty cycle. (c) Zoomed SS view. (d) Zoomed transient view.
• Fig. 7(d) zooms in on the transient response, where the proposed algorithm achieves 22× faster tracking with minimal oscillations compared to the modified P&O in [16], reaching 99.89% dynamic and 99.94% STC MPPT efficiency, confirming its robustness under extreme transients.
Profile 2 conforms to the EN50530 standard dynamic test [26], [53], featuring slower ramps for simulating realistic gradual irradiance changes across 0.4 s as illustrated in Fig. 8. The proposed algorithm surpasses the conventional P&O by achieving 8.39% higher MPPT efficiency at Profile (2). The detailed timing for Profile (2) is outlined in Table III.
TABLE III: Profile 2 Test Timings and Results.
Test Type Settle Rise Rest Fall Rest Conv. P&O Proposed 10% – 50% 0.025 0.050 0.025 0.050 0.025 90.98 99.37
30% – 100% 0.025 0.075 0.025 0.075 0.025 Total test time: 0.4 s
Profile 3 simulates dynamic irradiance conditions recorded during an in vivo experiment with freely moving rodents. With post-processing of a head-mounted 3-axis Intan RHD accelerometer, time-varying light exposure was projected onto a 0.17 s irradiance trace (Fig. 6(C)), simulating stochastic irradiance variations. Profile 3 poses challenges to conventional and intelligent MPPT algorithms owing either to low responsiveness, reliance upon offline training, or pre-known data. The proposed algorithm-
 performance is compared to eight widely adopted MPPT algorithms such as IC, hill climbing (HC), conventional and modified P&O in [16], ANN (using PPV and PPV,∆P ), PSO-tuned FLC [54], and adaptive neuro-fuzzy inference system (ANFIS) [55] at Profile 3. As reported in Table IV, by achieving 99.21% MPPT efficiency, the proposed algorithm outperforms all, except ANFIS and PSO-tuned fuzzy logic controllers. A consolidated heatmap (Fig. 9) compares all eight mentioned algorithms for the described 3 ir-
radiance

6
Fig. 8: Tracking performances of conventional P&O algorithm and proposed algorithm at Profile 2.
TABLE IV: MPPT Efficiencies for Irradiance Profile 3.
MPPT Algorithm Efficiency (%) Conventional P&O 89.46 Incremental conductance (IC) 94.45 Hill climbing (HC) 92.44 Kahani’s modified P&O 50.76 Neural Network (P) 99.25 Neural Network (P, ∆P) 98.43 Fuzzy tuned with PSO 99.51 Adaptive neurofuzzy inference system (ANFIS) 99.57 Proposed algorithm 99.21
profiles. The proposed algorithm achieves the highest MPPT efficiencies while remaining low in computational load, as opposed to intelligent or hybrid ones. Such performance-complexity trade-offs, explored further in subsection IV-E, prove the algorithm’s suitability for realtime and low-power embedded PV systems.
Fig. 9: MPPT efficiency heatmap comparing the proposed algorithm with conventional, intelligent, and hybrid algorithms across: STC, Profiles 1, 2, and 3, respectively.
B. Evaluation of Converter and PV Model Independence
The hardware independence of the proposed algorithm was validated across a wide range of DC-DC converter topologies operating in continuous conduction mode (CCM), including non-isolated and isolated configurations, covering a broad spectrum of voltage gains,
efficiencies, and implementation complexities. These topologies are summarized in Table V, where converter types are color-coded by complexity. Ideal voltage gain formulas were provided with respect to the conventional models as detailed in [56]. In spite of wide variations in converter topology and dynamic behavior, the proposed algorithm consistently achieves MPPT efficiencies above 98% at STC and exceeds 95% at Profile 1. Its highest performance of 99.89% is observed when paired with a 2-phase -
interleaved boost converter. As shown in Table V, ideal voltage gains and efficiency metrics demonstrate the algorithm’s robustness across diverse power stage configurations. Notably, no topology-specific tuning or parameter adaptation is required, highlighting the algorithm’s converter independence. To further validate this, the algorithm was tested using load-side voltage and current measurements instead of direct PV-side sensing, an important practical constraint in integrated PV systems. This -
substitution had a negligible impact on performance, further confirming the algorithm’s resilience to both electrical architecture and sensing configuration. These results collectively support the proposed algorithm’s broad applicability in dynamic, topology-agnostic energy harvesting systems.
C. MPPT Performance Under Temperature Variations
While most MPPT research focuses on irradiance dynamics and PSC, temperature variations also significantly affect PV performance; their impact on the P–V curve is depicted in Fig. 10 [10]. Thermal stability of the proposed algorithm is tested under static and dynamic temperature tests according to the EN50530, IEC 61853-1, and Sandia standards [57], [58]. Table VI presents the proposed algorithm’s efficiencies and tracking times, with all cases exceeding 99.8% MPPT efficiency except at 75 degrees.-
 Tracking

7
TABLE V: Converter Topologies Evaluated with the Proposed Algorithm: Characteristics and Efficiency. Color-code: green shades represent non-isolated (light to dark = increasing complexity), blue shades indicate isolated topologies.
DC-DC Converter Ideal voltage Gain in CCM Converter Efficiency (%)
MPPT Efficiency at STC (%)
MPPT Efficiency at Irradiance Profile 1 (%)
MPPT Efficiency Using Output Specs (%)
Simple Boost 1
1−D 93.16 99.76 97.11 99.56
Buck-Boost −D
1−D 91.02 - 91.32 99.53 84.78 99.78
Bidirectional Buck-Boost

 
 
1
1−D (Boost)
1
D (Buck)
94.11 98.84 96.19 92.84
Cuk −D
1−D 89.44 98.31 85.86 99.89
SEPIC D
1−D − (Vf +Vswitch)
Vi 92.52 96.89 89.20 99.81
Zeta D
1−D 91.68 98.26 89.71 99.86
Quadratic Boost 1
(1−D)2 89.64 98.86 88.07 97.95
Multilevel Boost
Vo,N = N.Vin −
X
Vf,N
N· 1
1−D
92.11 99.16 95.01 98.96
High Step-Up Boost 1 + n
1−D 93.75 98.64 92.07 99.84
Switched Capacitor (Fibonacci)
Fk+1 ;
Fj = φj − (1 − φ)j /√5,
φ = (1 + √5)/2
95.75 98.88 88.24 98.93
Interleaved Switched-Capacitor (Hybrid) 1
1−D + α; α : SC − gain 94.08 97.87 90.31 98.03
2-Phase Interleaved Boost 1
1−D 96.43 99.79 99.89 97.23
Flyback nD
1−D 92.76 97.64 75.25 97.61
Forward nD 90.23 94.52 83.38 94.51
Push-Pull 2nD 93.64 96.41 82.71 94.11
Half-Bridge nD 95.80 99.19 86.78 99.36
Full-Bridge 2nD 86.56 99.57 92.01 99.43
Resonant Ns
Np · MResonant-tank gain 97.13 97.52 73.22 93.69
Note: D: duty cycle, Vin: input voltage, Vf : diode forward voltage, n: turns ratio, Np, Ns: primary/secondary windings, M : resonant gain factor.
time refers to the duration from a step change to the point where output power stabilizes within ±2% of the new MPP [59], [60]. These results demonstrate thermal stability of the proposed algorithm.
Fig. 10: Temperature variation effect on the P-V curve.
TABLE VI: Temperature Tests Description and Results.
Temperature Variation Scenarios
MPPT Efficiency (%) Tracking Time (s)
Static Temperature Tests
0°C 99.8632 196.234 μs 25°C (STC) 99.8605 225.162 μs 50°C 99.8418 226.110 μs 75°C 99.6763 307.369 μs Dynamic Temperature Tests
20°C → 50°C (ramp) 99.9598 25°C → 45°C (ramp) 99.9349 
D. MPPT Performance Evaluation Under PSC
Partial shading conditions create multiple local maxima in the P–V curve, which challenge conventional, intelligent, and gradient-based MPPT algorithms. Five challenging PSC scenarios were used to evaluate the proposed algorithm’s global tracking performance, including Moderate and Strong scenarios from [16] consisting of three parallel strings with five modules connected in series per string irradiated by 700/300/100 and 750/150/100 W/m2 levels, respectively, and 3 developed scenarios as depicted-
 in Fig. 11 including Two Peaks with a GMPP leftside of a secondary peak; Three Peaks with the

8
GMPP between two maxima, and total cross tied (TCT), which comprised five four-module strings connected in a mesh, subject to irradiance levels 500, 300, 100, 200, and 25 W/m2, producing the most complex shading and resulting in a highly non-convex P–V curve. The proposed approach is evaluated with and without an optional initialization routine. As demonstrated in Table VII, initialization enhanced MPPT efficiency for all PSC scenarios, boosting MPPT efficiencies by 7.8% from 91.92% (Three-Peaks P-
SC) up to 99.68%. The algorithm sustained robust tracking despite severe mismatch and configuration complexity, while STC performance remained unaffected, confirming its robustness in PSC conditions.
Fig. 11: Defined PSC scenarios: (a) Two-Peak, (b) ThreePeak, and (c, d) TCT configurations.
TABLE VII: MPPT Efficiency Comparison Under PSC without and with Initialization Routine.
PSC Scenario MPPT Efficiency (%)
Without Initialization
MPPT Efficiency (%) With Initialization Two-Peaks PSC 93.66 99.39 Three-Peaks PSC 91.92 99.68 Moderate PSC [16] 94.82 99.30 Strong PSC [16] 96.03 99.63 TCT Connection PSC 97.63 99.51 STC 99.30 99.66
E. Computational Load Evaluation
To be able to compare the complexity of a hardware implementation of the proposed algorithm, a computational complexity analysis is conducted. This evaluation includes all MPPT algorithms studied in this work and some state-of-the-art P&O-based algorithms, focusing on low-power VHDL-compatible digital IC implementation. A normalized ASIC-based gate-level cost measure X is defined, such that 1X is the computational cost of a 10bit add operation. Other operations scaled relatively to X are given in -
synthesis-informed ASIC design heuristics from literature, as given in Table VIII [61]–[64]. Complexity and tracking time for the eight discussed MPPT techniques are compared in Fig. 12. Each computational load is computed per algorithm’s execution
cycle from its proposed flowchart and mapped to X. Intelligent algorithms have the highest complexity due to matrix operations, fuzzy inference, and nonlinear transforms: ANN has 10 hidden neurons that use tansig activation and normalization; ANFIS uses seven psigmf membership functions that use weighted defuzzification; PSO-Fuzzy has optimization overhead. While accurate, these impose substantial hardware costs, restricting use in resource-constrained embedded systems. The proposed algorithm has -
a low computational cost through gradient estimation and adaptive step sizing.
Fig. 12: Heatmap comparing rise time and normalized computational load of MPPT algorithms.
V. UNIFIED PERFORMANCE METRIC FOR MPPT
ALGORITHMS
To enable hardware-relevant comparison between the proposed and state-of-the-art P&O-based MPPT algorithms, a benchmarking figure of merit (FoM) is proposed in (8). This FoM focuses on tracking performance but penalizes time, computational cost, and power oscillation. In contrast to analog-focused metrics (e.g., Schreier FoM [89], [90]), there is no inherent proportionality between these merits in nonlinear PV systems. Hence, the proposed FoM is designed to emphasize empirical tradeoffs and interp-
retability, rather than analytical rigidity. The system’s power level is excluded for maintaining application-independent fairness across use cases.
FoM = ηMPPT
(Ttrack · Xcomp ) · 1 + ∆Pss
100
(8)
Table IX presents a comparative summary of 35 stateof-the-art P&O-based MPPT algorithms, including MPPT efficiency, steady-state power oscillation, power level, tracking time, and normalized computational load. The final column introduces the FoM, derived from these parameters based on Equation 8, to enable fair comparison based on MPPT efficiency, tracking performance, and implementation cost. The corresponding scatter plots in Fig. 13 visualize the resulting FoM versus each key metric; the good -
performance of the proposed algorithm can be appreciated from various performance angles.

9
TABLE VIII: Normalized Computational Cost for Two 10-bit Digital Operations (ASIC-Based) [61]–[64].
Operation Description Relative Complexity (X) Notes
A + B 10-bit addition 1× Single-cycle adder; linear with bit-width A − B 10-bit subtraction 1× Same as addition (add + invert + carry-in) A × B 10-bit multiplication 8–10× Array/tree multiplier; grows quadratically A ÷ B 10-bit division 30–40× Iterative, slow; typically avoided in hardware A ≫ n Bitwise shift right by n bits ∼0.2× Wiring only; negligible logic delay A & B, A | B Bitwise AND, OR ∼0.1× Implemented as simple gates A == B Equality check ∼0.5× Uses XOR followed by NOR A > B Comparator -
∼1.5× Uses subtractor logic if (A > B) Control flow (comparator + MUX) ∼2× Complexity depends on control logic and branching LUT access Lookup table (7-bit address) ∼2× ∼128-entry ROM; 1-cycle latency assumed RAM read/write 1-word access ∼3× Depends on RAM interface and access width exp(x) Exponential 20–40× Typically implemented via LUT or CORDIC log(x) Logarithm 20–40× Typically LUT or iterative approximation
TABLE IX: Comparison of P&O-Based MPPT Algorithms in Terms of Efficiency, Dynamics, Complexity, and FoM.
Ref.- Year MPPT algorithm MPPT efficiency (%) Power oscillation (%) Power level (W) Tracking time (s) Computational load (X) FoM (%/s.X) [65] - 2025 H-ABC-P&O 99.85 0.15 2000 0.14 10413 0.068 [66] - 2025 ChOA optimized P&O 99.82 0.18 440.87 < 0.002 1713 29.084 [66] - 2025 TLBO optimized P&O 98.86 1.14 438.63 0.05 2238 0.874 [67] - 2025 VSS-P&O 99.98 0.02 62.21 0.213 75.5 6.216 [67] - 2025 Modified VSS-MPPT-P&O 99.98 0.01 62.21 0.032 317 9.855 [68] - 2025 PSO optimized P&O 99.85 0.148 235.75 0.042 -
1591.5 1.492 [68] - 2025 Adjustable CSA 99.98 0.018 237.23 0.06 184.5 9.030 [69] - 2025 Hybrid-Fuzzy-Based P&O 99.98 0.02 34.88 5.02 751.5 0.026 [70] - 2025 Hybrid FLC + ANN 99.97 0.079 252.4 0.005 802.5 24.895 [70] - 2025 ANN-based 99.89 0.079 252.2 0.015 161 41.330 [71] - 2024 drift-free P&O 99.9 0.0061 1640 2.00 69 0.724 [71] - 2024 Modifed drift-free IC 99.9 0.061 1640 2.10 89.5 0,531 [72] - 2024 P&O based DISMC 93.2 0.49 412.38 0.32 178.5 1.624 [73] - 2024 Hybrid MPPT with ANN 99.20 0.72 8538-
0 0.23 177 2.419 [5] - 2024 Modified P&O for PSC 99.99 0.011 89.21 0.136 218 3.372 [74] - 2024 Hybrid POA & PO 99.97 0.03 330.4 0.3 165 2.019 [75] - 2024 MPSO-MPC 99.97 0.03 180.8 0.35 344 0.830 [76] - 2024 Binary Search-based adaptive P&O 98.47 1.53 25.8 10 90.5 0.107 [77] - 2024 Hybrid IGWO-P&O 99.37 0.63 137.69 0.15 6025 0.109 [78] - 2024 Modified P&O 99.81 0.19 48.84 0.40 111.5 2.234 [24] - 2024 Fuzzy-Based Adaptive P&O 99.99 0.01 60.20 0.1 99 10.099 [79] - 2024 Hybrid GWO-ANFIS 97.22 2.78 473-
.40 0.031 6677 0.457 [80] - 2023 Fuzzy logic-based 99.5 0.05 280 0.2 125 3.978 [81] - 2023 Fuzzy logic-based enhanced P&O 99.6 0.05 100 0.01 340 29.279 [82] - 2023 IPSO-WOA + P&O 99.24 0.76 5731 0.022 158.5 28.245 [11] - 2023 Modified P&O 99.8 0 160-180 0.3 188.5 1.765 [83] - 2023 P&O-based variable stepsize 99.99 0.26 160.1 0.197 36.5 13.870 [84] - 2021 CPPO 99.88 0.24 250.3 0.12 76 10.926 [9] - 2022 Improved and Fast 99.8 0.1 114.5 0.006 380 43.728 [85] - 2021 Updated P&O 99 0.33 211.5 0.12 74 1-
1.112 [86] - 2021 Improved P&O (IP&O) 95.2 0.5 200 0.02 47.500 99.712 [87] - 2022 Fixed Zone P&O (FZPO) 97.85 0.2 200 4 64.500 0.379 [88] - 2021 DSSO P&O 99.99 0 300.04 0.041 157.5 15.484 [16] - 2023 Kahani’s Modified P&O 98.21 0.65 2500 0.05-0.1 78.5 12.430 2025 Proposed 99.89 0 0.01 0.1702 79 126.443
VI. DISCUSSION AND CONCLUSION
This study introduces an adaptive gradient descent–based P&O MPPT algorithm tailored for highly dynamic low-power OWPT systems. By adapting the perturbation step size using the real-time P–V curve gradient, the algorithm effectively mitigates the trade-off between tracking speed and steady-state oscillations that occurs in conventional P&O-based algorithms. A lightweight initialization routine enhances global maximum power point tracking under partial shading conditions. MPPT efficiency of 99.94% -
with sub-millisecond convergence and low computational complexity is verified by comprehensive simulations for different irradiance profiles, temperatures, and converter topologies, and outperforms conventional P&O and some intelligent MPPTs. Complementing the algorithm, this study provides a computational load evaluation and proposes a figure
of merit for hardware-aware, scalable, and applicationindependent benchmarking. Future research directions are poised toward a mixed-signal integrated power management IC implementation featuring ADCs, DC–DC conversion, and on-chip MPPT logic, aiming to verify the algorithm performance under non-convex irradiance dynamics as a head-mounted optical receiver. These innovations will facilitate autonomous, self-powered microsystems in bio-integrated and wearable applications. Keeping the simplicity of-
 the conventional P&O algorithm with gradient-based adaptation, the proposed algorithm offers a lightweight solution for next-generation selfpowered optical wireless power transfer microsystems, with a clear path toward efficient hardware integration.
ACKNOWLEDGMENT
The authors thank Prof. Francesco Battaglia’s team for rodent locomotion data and Arash Akhoundi, PhD

10
Fig. 13: Scatter plot of the proposed FoM versus (a) computational complexity, (b) MPPT efficiency, (c) Tracking time, (d) Power oscillation across reviewed algorithms in Table IX; proposed method highlighted in red.
candidate at TU Delft, for technical support in algorithm development and signal processing.
REFERENCES
[1] K. Ahmadi and W. A. Serdijn, “Advancements in Laser and LEDBased Optical Wireless Power Transfer for IoT Applications: A Comprehensive Review,” IEEE Internet of Things Journal, pp. 1–1, 2025. [2] G. Di Patrizio Stanchieri et al., “A 0.18 μm CMOS Integrated Optical Wireless Power Transfer System for Implantable Biomedical Devices,” in 2023 30th International Conference on Mixed Design of Integrated Circuits and System, Jun. 2023, pp. 67–72. [3] M. N. S. Khairi et al., “MPPT Design Using PSO Tec-
hnique for Photovoltaic System,” in 2023 IEEE 3rd International Conference in Power Engineering Applications, Mar. 2023, pp. 131–136. [4] S. T et al., “Comparison and analysis of various MPPT controller algorithms for DC-DC converter in solar photovoltaic system,” in 2024 IEEE Recent Advances in Intelligent Computational Systems, May 2024, pp. 1–5. [5] T. Viet Anh et al., “Fast and accurate GMPPT based on modified P&O algorithm,” IEEE Access, vol. 12, pp. 129 588–129 600, 2024. [6] L. Zhao and Y. -
Jia, “A low-ripple switched-capacitor-based DCDC converter with optimal efficiency tracking for self-powered wearable devices,” in 2023 IEEE Biomedical Circuits and Systems Conference, Oct. 2023, pp. 1–5. [7] H. Belmadani et al., “A new fast and efficient MPPT algorithm for partially shaded PV systems using a hyperbolic slime mould
algorithm,” International Journal of Energy Research, vol. 2024, pp. 1–26, Jan. 2024. [8] P. Kumari et al., “Rayleigh distribution-based novel and efficient MPPT algorithm for rooftop PV system with competence to distinguish different dynamics,” IEEE Transactions on Consumer Electronics, vol. 70, no. 1, pp. 58–67, Feb. 2024. [9] M. Etezadinejad et al., “An improved and fast MPPT algorithm for PV systems under partially shaded conditions,” IEEE Transactions on Sustainable Energy, vol. 13, no. 2, pp-
. 732–742, Apr. 2022. [10] A. Chellakhi et al., “An improved maximum power point approach for temperature variation in PV system applications,” International Journal of Photoenergy, vol. 2021, pp. 1–21, Jun. 2021. [11] R. I. Jabbar et al., “A modified P&O-MPPT technique using fuzzy logic controller for PV systems,” in 2023 IEEE IAS Global Conference on Emerging Technologies, May 2023, pp. 1–7.
[12] W. Tang et al., “LSTM-based predictive MPPT control for PV systems subject to rapid environmental variations,” IEEE Transactions on Sustainable Energy, vol. 15, no. 2, pp. 789–799, 2024. [13] Dutch Brain Interface Initiative (DBI2), “DBI2: Dutch brain interface initiative,” https://dbi2.nl/, 2025, accessed: 2025-06-24. [14] M. G. Villalva et al., “Comprehensive approach to modeling and simulation of photovoltaic arrays,” IEEE Transactions on Power Electronics, vol. 24, no. 5, pp. 1198–1208, M-
ay 2009. [15] M. Forouzesh et al., “A survey on voltage boosting techniques for step-up DC-DC converters,” in 2016 IEEE Energy Conversion Congress and Exposition, Sep. 2016, pp. 1–8.

11
[16] R. Kahani et al., “An improved perturb and observe maximum power point tracking algorithm for photovoltaic power systems,” Journal of Modern Power Systems and Clean Energy, vol. 11, no. 4, pp. 1165–1175, 2023. [17] P. Das et al., “Analysis and design of a nonisolated bidirectional ZVS-PWM DC-DC converter with coupled inductors,” IEEE Transactions on Power Electronics, vol. 25, no. 10, pp. 26302641, Oct. 2010. [18] E. Mamarelis et al., “Design of a sliding-mode-controlled SEPIC for PV MPPT app-
lications,” IEEE Transactions on Industrial Electronics, vol. 61, no. 7, pp. 3387–3398, Jul. 2014. [19] S. B. Santra et al., “Coupled inductor based soft switched high gain bidirectional DC-DC converter with reduced input current ripple,” IEEE Transactions on Industrial Electronics, vol. 70, no. 2, pp. 1431–1443, Feb. 2023. [20] J. Roy and R. Ayyanar, “Sensor-less current sharing over wide operating range for extended-duty-ratio boost converter,” IEEE Transactions on Power Electronics, vol. 32, no-
. 11, pp. 8763–8777, Nov. 2017. [21] M. K. B. Parizi et al., “Design and implementation of an interleaved high efficiency and high voltage gain converter with minimum switch count for renewable energy integration,” IEEE Transactions on Industrial Electronics, vol. 71, no. 6, pp. 58635870, Jun. 2024. [22] R. R. Khorasani et al., “An interleaved soft switched high step-up boost converter with high power density for renewable energy applications,” IEEE Transactions on Power Electronics, vol. 37, no. -
11, pp. 13 782–13 798, Nov. 2022. [23] Z. Ishrat et al., “A comprehensive review of MPPT techniques based on ML applicable for maximum power in solar power systems,” Journal of Renewable Energy and Environment, vol. 11, no. 1, Jan. 2024. [24] H. Alhusseini et al., “A fuzzy-based adaptive P&O MPPT algorithm for PV systems with fast tracking and low oscillations under rapidly irradiance change conditions,” IEEE Access, vol. 12, pp. 84 374–84 386, 2024. [25] I. Mandourarakis et al., “Integrated maxim-
um power point tracking system for photovoltaic energy harvesting applications,” IEEE Transactions on Power Electronics, vol. 37, no. 8, pp. 98659875, Aug. 2022. [26] R. I. Rico-Camacho et al., “Transient differentiation maximum power point tracker (Td-MPPT) for optimized tracking under very fast-changing irradiance: A theoretical approach for mobile PV applications,” Applied Sciences, vol. 12, no. 5, p. 2671, Mar. 2022. [27] A. Abdelaziz et al., “A new variable step size maximum power point track-
ing algorithm for PV systems using fuzzy logic control,” Electric Power Systems Research, vol. 123, pp. 113–121, 2015. [28] A. Zemmit et al., “GWO and WOA variable step MPPT algorithms-based PV system output power optimization,” Scientific Reports, vol. 15, no. 1, Mar. 2025. [29] Y. A. Assem Alkarasneh, Khaled Bataineh, “A Multi Fuzzy-based Variable Step Size P&O MPPT Algorithm for PV Systems ,” Jordan Journal of Mechanical and Industrial Engineering, vol. 18, no. 4, pp. 795–810, Dec. 2024. [30] H-
. Pham et al., “Hybrid fuzzy logic and particle swarm optimization based MPPT for photovoltaic systems,” IEEE Access, vol. 10, pp. 10 123–10 132, 2022. [31] D. Salman et al., “Evaluation of MPPT algorithms for solar PV systems with machine learning and metaheuristic techniques,” Mathematical Modelling of Engineering Problems, vol. 12, no. 1, pp. 115–124, Jan. 2025. [32] A. F. Abouzeid et al., “Experimental validation of a low-cost maximum power point tracking technique based on artificial neural n-
etwork for photovoltaic systems,” Scientific Reports, vol. 14, no. 1, Aug. 2024. [33] R. Jain et al., “An energy-efficient MPPT algorithm for solar PV systems using a standby mode,” Renewable Energy, vol. 136, pp. 1275–1287, 2019. [34] H. Bousmaha et al., “MPPT algorithm with a closed-loop control of the input voltage of a boost converter in PV systems,” in 2022 11th International Conference on Renewable Energy Research and Application, Sep. 2022, pp. 107–111.
[35] Z. Yan et al., “A soft-switching bidirectional DC-DC converter with high voltage gain and low voltage stress for energy storage systems,” IEEE Transactions on Industrial Electronics, vol. 68, no. 8, pp. 6871–6880, Aug. 2021. [36] D. E. Rumelhart et al., “Learning representations by backpropagating errors,” Nature, vol. 323, no. 6088, pp. 533–536, Oct. 1986. [37] A. Cui et al., “Introducing MAPO: Momentum-Aided Gradient Descent Prompt Optimization,” 2024, arXiv preprint arXiv:2410.19499. [38] -
D. P. Kingma and J. Ba, “Adam: A method for stochastic optimization,” 2015, arXiv preprint arXiv:1412.6980. [39] F. Kunstner et al., “Heavy-tailed class imbalance and why Adam outperforms gradient descent on language models,” in Advances in Neural Information Processing Systems, vol. 37, 2024, pp. 30 106–30 148. [40] X. Glorot and Y. Bengio, “Understanding the difficulty of training deep feedforward neural networks,” in Proc. 13th Int. Conf. Artificial Intelligence and Statistics, vol. 9, 2010, pp-
. 249–256. [41] J. Liang, “A method for the detection of electricity theft behavior based on Xavier weight initialization,” in Proc. Second Int. Conf. Electronic Information Technology, Aug. 2023, p. 108.
[42] K. He et al., “Delving deep into rectifiers: Surpassing human-level performance on imagenet classification,” in Proc. IEEE Int. Conf. Computer Vision, 2015, pp. 1026–1034.
[43] W. Boulila et al., Weight Initialization Techniques for Deep Learning Algorithms in Remote Sensing: Recent Trends and Future Perspectives, Dec. 2021, pp. 477–484. [44] V. Plevris and M. Papadrakakis, “A hybrid particle swarm–gradient algorithm for global structural optimization,” Computer-Aided Civil and Infrastructure Engineering, Apr. 2010.
[45] J. Yao et al., “Research on hybrid strategy particle swarm optimization algorithm and its applications,” Scientific Reports, vol. 14, no. 1, Oct. 2024. [46] Y. Guo, “Research on enhanced calibration of biological models using hybrid particle swarm optimization and gradient descent method,” in Proc. SPIE, Second International Conference on Big Data, Computational Intelligence, and Applications, S. S. Agaian, Ed., Mar. 2025, p. 158. [47] M. Sheikhottayefe et al., “Spawning gradient descent (SpG-
D): A novel optimization framework for machine learning and deep learning,” SN Computer Science, vol. 6, no. 3, Feb. 2025. [48] T. Shi et al., “Improved spgd algorithm for optical phased array chip phase error correction in lidar applications,” Applied Optics, vol. 64, no. 5, p. 1206, Feb. 2025. [49] B. Alhijawi and A. Awajan, “Genetic algorithms: Theory, genetic operators, solutions, and applications,” Evolutionary Intelligence, vol. 17, no. 3, pp. 1245–1256, Feb. 2023. [50] M. Sheikh-Hosseini an-
d S. R. Samareh Hashemi, “Connectivity and coverage constrained wireless sensor nodes deployment using steepest descent and genetic algorithms,” Expert Systems with Applications, vol. 190, p. 116164, Mar. 2022. [51] K. Ide and S. Takahashi, “A review of neurologgers for extracellular recording of neuronal activity in the brain of freely behaving wild animals,” Micromachines, vol. 13, no. 9, p. 1529, Sep. 2022. [52] L. Cao et al., “Achieving 23.83% conversion efficiency in silicon heterojunction so-
lar cell with ultra-thin moox hole collector layer via tailoring (i)a-Si:H/MoOx Interface,” Prog. Photovolt.: Res. Appl., vol. 31, no. 12, pp. 1245–1254, Oct. 2022.
[53] EN 50530:2010/A1:2013 – Overall Efficiency of Grid-Connected Photovoltaic Inverters, CENELEC Std., 2013, amendment A1 to EN 50530:2010. [54] N. Priyadarshi et al., “Realization of pv power structure with pso tuned fuzzy logic control,” in 2023 IEEE IAS Global Conference on Emerging Technologies (GlobConET). IEEE, May 2023, p. 1–6. [55] M. G. K. Machesa et al., “Performance analysis of stirling engine using computational intelligence techniques (ann & fuzzy mamdani model) and hybrid algorithms-
 (ann-pso & anfis),” Neural Computing and Applications, vol. 35, no. 2, p. 1225–1245, May 2022.

12
[56] M. Forouzesh et al., “Step-up DC-DC converters: A comprehensive review of voltage-boosting techniques, topologies, and applications,” IEEE Trans. Power Electron., vol. 32, no. 12, pp. 9143–9178, 2017. [57] International Electrotechnical Commission (IEC), “Photovoltaic (PV) Module Performance Testing and Energy Rating—Part 1: Irradiance and Temperature Performance Measurements and Power Rating,” 2011, standard No. IEC 61853-1. [58] IEC, “Battery Charge Controllers for Photovoltaic Systems—Perf-
ormance and Functioning,” 2010, standard No. IEC 62509. [59] Y. K. Teklehaimanot et al., “A review and comparative analysis of maximum power point tracking control algorithms for wind energy conversion systems,” International Journal of Dynamics and Control, vol. 12, no. 9, p. 3494–3516, May 2024. [60] C. H. Hussaian Basha and C. Rani, “Performance analysis of MPPT techniques for dynamic irradiation condition of solar PV,” International Journal of Fuzzy Systems, vol. 22, no. 8, p. 2577–2598, Oct. -
2020.
[61] J. M. Rabaey et al., Digital Integrated Circuits: A Design Perspective, 2nd ed. Upper Saddle River, NJ, USA: Prentice Hall, 2003. [62] N. H. E. Weste and D. Harris, CMOS VLSI Design: A Circuits and Systems Perspective, 4th ed. Boston, MA, USA: Addison-Wesley, 2010.
[63] M. J. S. Smith, Application-Specific Integrated Circuits. Reading, MA, USA: Addison-Wesley, 1997. [64] A. Zecevic and M. Rolevski, “Neural network approach to MPPT control and irradiance estimation,” Appl. Sci., vol. 10, no. 15, p. 5051, Jul. 2020. [65] M. Chouiekh et al., “MPPT control based on the H-ABC-P&O hybrid algorithm for a photovoltaic pumping system: A case study in casablanca,” Energy Syst., Apr. 2025. [66] T. Nagadurga et al., “Global MPPT optimization for partially shaded photovo-
ltaic systems,” Sci. Rep., vol. 15, no. 1, Mar. 2025. [67] A. B. Djilali et al., “Enhanced variable step sizes perturb and observe MPPT control to reduce energy loss in photovoltaic systems,” Sci. Rep., vol. 15, no. 1, Apr. 2025. [68] M. Ashwini et al., “Design and comprehensive analysis of adjustable step MPPT controllers for solar PV systems under stochastic atmospheric conditions,” Sci. Rep., vol. 15, no. 1, Mar. 2025. [69] H. Karimi et al., “A hybrid P&O-fuzzy-based maximum power point trackin-
g (MPPT) algorithm for photovoltaic systems under partial shading conditions,” IEEE Access, pp. 1–1, 2025. [70] M. H. Ali et al., “A comprehensive study of recent maximum power point tracking techniques for photovoltaic systems,” Sci. Rep., vol. 15, no. 1, Apr. 2025. [71] S. Kavuru et al., “PV system dynamic performance maximisation using a novel drift-free MPPT method,” in Proc. 2024 IEEE Int. Conf. Power Electron., Drives Energy Syst., Dec. 2024, pp. 1–4. [72] A. C. S. and P. Thekkath, “Performa-
nce assessment of P&O-based and InC-based double integral sliding mode control MPPT for a solar photovoltaic system and DC voltage enhancement using synchronous boost converter,” in Proc. 2024 Int. Conf. Futur. Technol. Control Syst. & Renew. Energy, Sep. 2024, pp. 1–6. [73] M. T. Zubair and K. H. Phanishree, “Hybrid MPPT controller for photovoltaic system under partial shading condition,” in Proc.
2024 3rd Odisha Int. Conf. Electr. Power Eng., Commun. Comput. Technol., Nov. 2024, pp. 1–6. [74] H. Wang et al., “Enhancing MPPT efficiency in PV systems under partial shading: A hybrid POA&PO approach for rapid and accurate energy harvesting,” Int. J. Electr. Power Energy Syst., vol. 162, p. 110260, Nov. 2024. [75] M. A. Hendy et al., “Enhanced maximum power point tracking using modified pso hybrid with mpc under partial shading conditions,” IEEE Access, vol. 12, pp. 145 318–145 330, 2024. [76] -
V. G. Iyer et al., “Binary search-based adaptive P&O MPPT algorithm for tlbc-based photovoltaic system,” in Proc. 2024 IEEE Int. Conf. Power Electron., Drives Energy Syst., Dec. 2024, pp. 1–6. [77] N. F. Baso et al., “An improvement GWO-P&O algorithm based MPPT for PV system under partial shading condition,” in 2024 International Electronics Symposium, Aug. 2024, pp. 54–59.
[78] A. T. Naser et al., “A modified P&O MPPT technique for photovoltaic power systems,” in 2024 IEEE Sustainable Power and Energy Conference. IEEE, Nov. 2024, p. 84–89. [79] C. H. Basha et al., “A novel on design and implementation of hybrid MPPT controllers for solar PV systems under various partial shading conditions,” Sci. Rep., vol. 14, no. 1, Jan. 2024. [80] C. Ichim-Burlacu et al., “Improvements on the P&O method for PV panels,” in Proc. 2023 5th Global Power, Energy Commun. Conf., Jun. 202-
3, pp. 262–269. [81] C. B. N. Fapi et al., “Experimental implementation of improved P&O MPPT algorithm based on fuzzy logic for solar photovoltaic applications,” in Proc. 2023 11th Int. Conf. Smart Grid, Jun. 2023, pp. 1–6. [82] Z. Huang et al., “Application of IPSO-WOA and P&O algorithm in PV MPPT control system,” in Proc. 2023 IEEE 6th Int. Conf. Autom., Electron. Electr. Eng., Dec. 2023, pp. 473–479.
[83] G. Y ̈uksek and A. N. Mete, “A P&O based variable step size MPPT algorithm for photovoltaic applications,” Gazi Univ. J. Sci., vol. 36, no. 2, pp. 608–622, Jun. 2023. [84] M. G. Madhu et al., “Change in power based P&O algorithm for maximum power extraction in solar energy conversion system,” in Proc. 2021 9th IEEE Int. Conf. Power Syst., Dec. 2021, pp. 1–6. [85] S. Manna and A. K. Akella, “Comparative analysis of various P&O MPPT algorithm for PV system under varying radiation condition,” in-
 Proc. 2021 1st Int. Conf. Power Electron. Energy, Jan. 2021. [86] C. Rao et al., “A novel high-gain soft-switching DC-DC converter with improved P&O MPPT for photovoltaic applications,” IEEE Access, vol. 9, pp. 58 790–58 806, 2021. [87] N. Swaminathan et al., “A fixed zone perturb and observe MPPT technique for a standalone distributed PV system,” IEEE Journal of Emerging and Selected Topics in Power Electronics, vol. 10, no. 1, p. 361–374, Feb. 2022. [88] H. S. Geetha et al., “A dual step steady-
 output perturb and observe (DSSO-P&O) algorithm based maximum power point tracking of solar photovoltaic system,” in Proc. 2021 IEEE 2nd Int. Conf. Smart Technol. Power, Energy Control, Dec. 2021, pp. 1–5.
[89] G. Manganaro, Advanced Data Converters. Cambridge University Press, 2011. [90] Manganaro, Gabriele, “Emerging data converter architectures and techniques,” in 2018 IEEE Custom Integrated Circuits Conference. IEEE, apr 2018, pp. 1–8.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:39.285Z
- **Text Length:** 52133 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 12 of 12
