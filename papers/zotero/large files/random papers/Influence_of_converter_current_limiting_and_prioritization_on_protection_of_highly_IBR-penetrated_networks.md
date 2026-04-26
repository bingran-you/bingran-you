# PDF Document: Quintero et al. - 2025 - Influence of converter current limiting and prioritization on protection of highly IBR-penetrated ne.pdf

**File Path:** Quintero et al. - 2025 - Influence of converter current limiting and prioritization on protection of highly IBR-penetrated ne.pdf

**Processed Date:** 2026-02-10T18:18:04.310Z

**File Size:** 1226.31 KB

**Total Pages:** 5

**Extracted Pages:** 5

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3339

**Title:** Influence of converter current limiting and prioritization on protection of highly IBR-penetrated networks

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

INFLUENCE OF CONVERTER CURRENT LIMITING
AND PRIORITIZATION ON PROTECTION OF
HIGHLY IBR-PENETRATED NETWORKS
Andrés E Quintero1* , Vinícius A Lacerda1, Oriol Gomis-Bellmunt1, Moisés J. B. B. Davi2, Mario Oleskovicz2
1CITCEA-UPC, Polytechnic University of Catalonia, Barcelona, Spain 2University of São Paulo, Department of Electrical Engineering, São Carlos, Brazil *E-mail: andres.eduardo.quintero@upc.edu
Keywords: CURRENT LIMITATION, CURRENT PRIORITIZATION, INVERTER-BASED RESOURCES, LINE PROTECTION ALGORITHMS, LVRT
Abstract
This paper investigates how grid-forming (GFM) and grid-following (GFL) control strategies in inverter-based resources (IBRs) influence line distance and differential protection in converter-dominated transmission systems. A modified IEEE 39-bus system is evaluated with GFM and GFL units equipped with low-voltage ride-through logic, current limiting, and positive- or negativesequence prioritization. Distance protection is implemented with a mho characteristic, while line differential protection us-
es an alpha-plane approach. Results show that phase-to-ground loops in distance protection can substantially overestimate the fault location near the Zone-1 reach. For line differential protection, external faults may cause the operating point to briefly enter the trip region of the alpha-plane, even for the healthy-phase in ABG faults under GFL control and during the initial moments of the fault, demanding strong external security measures. These findings highlight that modern converter controls,-
 together with current limitation and sequence-current prioritization, can compromise the reliability and security of traditional protection schemes.
1 Introduction
The transition towards renewable-dominated power systems has introduced a steady increase in inverter-based resources (IBRs) in transmission networks. This transition has resulted in challenges for the operation and protection of these systems [1], [2]. IBRs are power-electronic interfaces that exhibit different fault current behavior, thus not following the behavior expected from traditional synchronous generators. Furthermore, in actual power systems these IBRs are integrated into the networks p-
rimarily through two control strategies, grid-following (GFL) and grid-forming (GFM), with the latter introduced to overcome limitations of conventional GFL approaches [3]. This integration has not occurred without challenges. Specifically, line protection such as distance, directional, and phase-selection algorithms are being affected [4], [5], [6]. The operational differences between synchronous generators and inverter-based resources (IBRs) are essential to evaluating the performance of traditi-
onal protection schemes. A critical distinction lies in the limited short-circuit contribution of IBRs, which typically remains close to their nominal rating [7]. To ensure converter integrity, various current-limiting strategies have been proposed and implemented—ranging from control in the stationary frame to the synchronous reference frame [8], [9], [10]. These dynamics have been recently studied [11], [12] and they also influence the dynamic response and system stability during disturbances an-
d its capacity to support the system during low-voltage ride-through (LVRT) events. This has led to efforts to seek improved control strategies for GFM and
GFL converters during LVRT [13]. Consequently, this change of paradigm is directly impacting relay sensitivity, selectivity, and fault detection reliability. To better understand how protection functions are affected by GFL and GFM control, several works have attempted to address this matter [14], [15]. The recent contributions make clear the current need to understand how protection systems are affected by converters. Moreover, a crucial aspect is the existence of many approaches to control and o-
perate GFM and GFL converters, resulting in a wider scope and greater challenge for researchers, making the analysis harder since there is no standard approach and the implementation is usually up to the developer, where only compliance with certain requirements is mandatory. However, most works tend to analyze the response of the system considering only grid-following or grid-forming control approaches, leaving room for a more comprehensive review considering both solutions. The performance of pr-
otection functions is also affected by the capability of an IBR to inject positive- and/or negativesequence currents during LVRT events of asymmetrical faults, which is determined by its control design. This aspect is relevant given that some IBRs are limited to positive-sequence injection only, which restricts the fault signatures detectable by protection devices and reduces the information available for accurate fault classification and localization [16]. Moreover, implementing GFL controls that-
 can handle only positive-sequence injection has been shown to negatively affect negative-sequence directional overcurrent and quadrilateral distance protection elements [14].
1
arXiv:2511.21385v1 [eess.SY] 26 Nov 2025

Y
Fig. 1: Grid-forming converter interface to the AC network
Even after the efforts to understand the impacts of high IBR penetration in modern power systems, there are topics that still need further exploration. For instance, how current limiting and prioritization affect different protection functions is scarcely studied, considering that the selected method will directly affect the electrical quantities available for relays to operate. Furthermore, line differential protection is usually considered to be blinded against these new scenarios and is not oft-
en studied. This work therefore proposes to explore how current limitation and prioritization strategies could affect the operation of line distance and alpha-plane differential protection.
2 Converter control schemes: GFM and GFL
Given the critical influence of the control scheme on protection algorithm performance, as highlighted in recent studies, the GFM and GFL strategies, including the current-limiting and prioritization modules, were implemented to assess line protection behavior. The converter connection at the transmission level is shown in Fig. 1. Each unit connects to the high-voltage terminal vabc
g through a delta–wye transformer, synthesizes the terminal voltage vabc
m , and measures the current iabc
c and voltage
vabc
c after the filter inductance L. The GFM control strategy consists of a cascaded control formed by an outer voltage loop that generates current references, which then pass through the inner current-control loop. The control is performed in decoupled positive- and negativesequence qd frames, enabling independent control of both sequences, which is important for assessing the performance of the protection functions. The inner loop employs typical PI controls, while the outer loop uses a virtual admi-
ttance that responds to grid-voltage changes; this is shown in Fig. 2. Virtual-admittance voltage control has attracted notable interest recently [17], [18], exhibiting favorable small-signal stability margins for GFM operation against strong grids,
qd0
abc
qd0
abc
Current limiting/prioritization
Fig. 2: Control structure of the grid-forming unit
often exceeding those of virtual-impedance schemes [19]. The parameters Rv and Lv correspond to the admittance parameters, while the term ωLv captures the cross-coupling between the q and d axes. Their absolute values and ratio are key determinants of closed-loop stability [19]. Active- and reactive-power regulation in the GFM unit are achieved through virtual synchronous generator and reactive droop control schemes, respectively, as shown in Fig. 3a and Fig. 3b. The active-power loop provides ine-
rtial behavior and smooth convergence to the reference power, while the reactivepower loop maintains voltage regulation at the PCC through a proportional–integral controller.
(a) Virtual synchronous generator (b) Reactive power droop
Fig. 3: P and Q control schemes
Within this architecture, the virtual-admittance stage delivers the unconstrained references iˆqd± , after which LVRT requirements and a current-limiting block produce the final references iqd± delivered to the inner current controllers. The grid-following control, shown in Fig. 4, is simpler and includes an inner current loop and a PLL locked to the vd component, with voltage and current qd components obtained via a decoupled double synchronous reference frame (DDSRF). The reference current i∗qd±-
 is modified by the LVRT logic, complying with reactive-current requirements, and then passed to the current-limiting and prioritization stage.
3 Case Study: Highly IBR-penetrated IEEE 39-bus system
The IEEE 39-bus benchmark in Fig. 5 was reconfigured for high penetration of inverter-based resources and simulated using electromagnetic transient (EMT) models in Matlab/Simulink. The reference case consists of ten synchronous
qd0
abc
qd0
abc
Current limiting/prioritization
Fig. 4: Control structure of the grid-following unit
2

GFM 36
Y
GFM 33
Y
SG 34
Y
Y
Y
Y
Y
Y
GFM 32
Y
SG 31
Y
Y
GFM 35
Y
YY
SG 39
SG 30
Y
Y
GFM 37
Y
GFM 38
Y
Line 23-24
at fault
Terminal 1
Terminal 2
Fig. 5: IEEE 39-bus with embedded GFM/GFL units
generators; however, because more than half of the generation is achieved through converters, the short-circuit contribution and, more critically, the overall dynamic response during disturbances become predominantly shaped by the converters’ control rather than by machine electromechanics. In the modified network, six grid-forming (GFM) units replace part of the original synchronous generation, resulting in an area highly penetrated by converters.
4 Methodology
For assessing the operation of the distance and differential line protection, several scenarios will be studied by faulting the line 23–24 shown in Fig. 5. The highly IBR-penetrated zone is highlighted in blue, where the majority of the shortcircuit current to the fault will come from IBRs. Regarding the protection functions, the distance protection employs the well-known mho characteristic, and the differential algorithm is based on the alpha-plane, using α = IL/IR to map the operating point in t-
he complex plane. The line differential algorithm is known for its high reliability. To deliver a complete analysis, the algorithm will be tested against different fault scenarios for line-to-ground faults and double-line-to-ground faults, where the unbalanced fault naturally induces negativesequence components, as well as different fault resistances and fault locations, including internal and external faults. As previously stated, the implemented strategy for the control system of the converters -
will play a crucial role in the response of the protection functions. To address this, the system will be analyzed for scenarios with GFM and GFL control strategies. Moreover, current prioritization is also considered, testing for positive- or negative-sequence priority during LVRT events. Finally, the current limitation algorithm ensures that the currents remain within the converter-rated current limits.
5 Results
This section briefly evaluates a few scenarios resulting from the performance of the protection algorithms, according to the system shown in Fig. 5 and the control system of Section 2.
Fig. 6: Left: AG loop. Right: AB loop. ABG fault at 80%
5.1 Distance protection
The performance of the distance protection was evaluated by analyzing the calculated apparent impedance under different fault scenarios. Fig. 6 illustrates an ABG fault located at 80% of the line length with a fault resistance of ZF ≈ 0. The left plot presents the trajectory for the AG loop, while the right plot shows that for the AB loop. In both cases, the impedance is compared against the relay reach (dashed blue line). The calculated impedance obtained from the purely synchronous generation sc-
enario (solid yellow line) is the closest to the actual apparent impedance. In contrast, for the GFM and GFL cases, whether prioritizing positive- or negative-sequence currents, the apparent impedance reaches significantly higher values ranging from 81% to 125% of the line length for the AG loops. This deviation is most noticeable in the AG loops, where the zero-sequence current influences the loop impedance calculation. Even when applying the traditional compensation factor
k0 = Z0L−Z1L
3Z1L , the use of a single fixed k0 value cannot prevent
the apparent impedance from exhibiting such large variations, with an overall range of nearly 50% of the line length. When comparing positive- and negative-sequence prioritization, it is clear that with positive prioritization the apparent impedance is larger than when prioritizing negative sequence. This difference is expected to be even larger for converters with only positive-sequence injection, which tend to elevate the positive- and negative-sequence voltage during LVRT events. Following the -
same idea, when analyzing the GFL and GFM control behavior, the value of the impedance tends to oscillate more aggressively when the system is supported by GFL units. It can be concluded that for AG loops, the calculated impedance tends to reach higher values than the actual fault location when using typical k0 values, whereas for AB loops the error is significantly smaller across all scenarios. However, during the initial milliseconds of the fault (the crucial phasor calculation window), the impe-
dance values are critically low, which can be further analyzed in the next scenario. The case in Fig. 7 is important to analyze, as it represents an external fault at terminal 2, corresponding to 100% of the line
Fig. 7: Left: AG loop. Right: AB loop. ABG fault at 100%
3

RESTRAINING REGION
RESTRAINING REGION
Fig. 8: GFM with neg. prior. ABG fault at 0% external
length. The behavior follows a similar pattern: the synchronous generation scenario shows the calculated impedance closest to the real value (dashed red line). Moreover, as previously stated, AG loops tend to be higher and outside the operating zone. However, when analyzing the AB loop, for a few milliseconds the apparent impedance values for all GFM, GFL, positiveor negative-sequence prioritization cases are positioned below the line reach, which could cause a misoperation if security thresholds -
do not block it. It is worth noting that prioritizing negative-sequence current results in a higher impedance. On the other hand, the apparent impedance seen from the synchronous generation system is the only one that stays safely far from the 80% line reach.
5.2 Differential protection
Figure 8 shows the behavior of the mapping in the alpha plane for an external fault fed by the GFM scenario at terminal 1. The upper figures show the terminal currents. The bottom figures show the behavior of the differential quantities: the bottom-left plot shows the phase quantities 87LP , and the bottom-right plot shows the ground 87GL and negative 87QL quantities. It can be observed in Fig. 8 that the final differential quantities during the fault tend to remain inside the restraint zone (soli-
d dots). However, for the zero- and negative-sequence
RESTRAINING REGION
RESTRAINING REGION
Fig. 9: GFL with pos. prior. ABG fault at 0% external
RESTRAINING REGION
RESTRAINING REGION
Fig. 10: GFL with neg. prior. vs SG. ABG fault at 100% external
quantities, some of the initial points during the fault move outside the zone, along the negative real axis. When comparing the GFM scenario with the GFL operation in Fig. 9, the electrical signals are highly distorted for the GFL operation, and more importantly, the zero- and negativesequence differential quantities move into the right half of the alpha-plane for one sample. This is important, given that in these scenarios other security measures should prevent tripping. Moreover, not only the el-
ements 87QL and 87GL show this behavior; in Fig. 10, an external fault at terminal 2 with ZF = 5 Ω shows the GFL prioritizing negative-sequence current injection (left graphs) and is compared to the case with only synchronous generation (right graphs), this shows how the element 87CL (the healthy phase) moves into the right half of the alpha-plane for three samples before converging to the restraint region in the GFL scenario. In general, for internal faults the differential algorithm correctly id-
entifies faults with low and high fault resistances and for the different control schemes.
6 Conclusions
The continuous integration of inverter-based resources into transmission systems has affected their long-established operation, introducing new challenges in modern power systems, and this work provides evidence of that. In addition, new control schemes for integrating renewable resources through converters vary greatly, making the overall integration more complex. Moreover, the physical constraints of converters require current limiting and prioritization, which affect system performance. This wo-
rk has shown how line distance protection, one of the most widely used primary protection schemes today, is greatly affected by the different control strategies of converters, whether based on GFM or GFL control, or on different current-limiting and prioritization decisions. For faults near the limit of Zone 1, the apparent impedance can be larger than expected for LG loops, or exhibit transients that could result in overreaching for LLG loops. Also, prioritizing positiveor negative-sequence curre-
nt injection could lead to different operation. Moreover, some important findings also arise for differential protection. Although generally considered a highly
4

secure algorithm, for external faults at the busbar terminals and during the first instants of the fault, a few samples of the operating quantities may move into the right half of the alpha-plane, which is a trip region, requiring high security margins from other conditions to avoid an incorrect trip indication. These results support the idea that there is still a need to further explore protection algorithms, rather than assuming they are completely reliable when operating in modern power system-
s.
7 Acknowledgments
This publication and other research outcomes are supported by the predoctoral program AGAUR-FI ajuts (2025 FI-1 00374) Joan Oró, backed by the Secretariat of Universities and Research of the Department of Research and Universities of the Generalitat de Catalonia and European Social Plus Fund. Also, it has been supported by the HP2C-DT project (grant TED2021-130351B-C21). The work of Oriol Gomis-Bellmunt was supported by the Institució Catalana de Recerca i Estudis Avançats (ICREA).
8 References
[1] J. C. Quispe and E. Orduña, “Transmission line protection challenges influenced by inverter-based resources: A review,” Protection and Control of Modern Power Systems, vol. 7, no. 3, pp. 1–17, 2022. [2] W. G. C. IEEE PES, Power System Relay & Control Committee, “Protection challenges and practices for interconnecting inverter based resources to utility transmission systems,” Technical Report PES-TR-81 PES-TPTR81, IEEE Power & Energy Society, July 2020. [3] K. Mahmoud, P. Astero, P. Peltoniemi,-
 and M. Lehtonen, “Promising grid-forming vsc control schemes toward sustainable power systems: Comprehensive review and perspectives,” IEEE Access, vol. 10, p. 130024, 2022. [4] B. Kasztenny, “Distance elements for line protection applications near unconventional sources,” in 58th Annual Minnesota Power Systems Conference Saint Paul, Minnesota, SEL, 11 2022. [5] K. Jia, Z. Yang, Y. Fang, T. Bi, and M. Sumner, “Influence of inverter-interfaced renewable energy generators on directional relay and a-
n improved scheme,” IEEE Transactions on Power Electronics, vol. 34, no. 12, pp. 11843–11855, 2019. [6] S. Cao, Q. Hong, D. Liu, L. Ji, and C. Booth, “Impact of converter equivalent impedance on distance protection with the mho characteristic,” in 17th International Conference on Developments in Power System Protection (DPSP 2024), vol. 2024, pp. 336–342, 2024. [7] B. Fan, T. Liu, F. Zhao, H. Wu, and X. Wang, “A review of current-limiting control of grid-forming inverters under symmetrical disturb-
ances,” IEEE Open Journal of Power Electronics, vol. 3, pp. 955–969, 2022. [8] S. F. Zarei, M. A. Ghasemi, and S. Khankalantary, “Current limiting strategy for grid-connected inverters under asymmetrical short circuit faults,” Int. Journal of Electrical Power & Energy Systems, vol. 131, p. 107020, 2021.
[9] W. Du and S. M. Mohiuddin, “A two-stage current limiting control strategy for improved low-voltage ride-through capability of direct-droop-controlled, gridforming inverters,” in 2023 IEEE Energy Conversion Congress and Exposition (ECCE), pp. 2886–2890, 2023. [10] J. Maeng, J.-J. Jung, and S. Cui, “Enhanced currentlimiting method for grid-forming converters based on virtual admittance matrix,” in 2024 9th IEEE Workshop on the Electronic Grid (eGRID), pp. 1–6, 2024.
[11] T. Xu, S. Jiang, and G. Konstantinou, “Impact of current limiting design on the transient stability of grid-forming converters,” in 2024 IEEE 34th Australasian Universities Power Engineering Conference (AUPEC), pp. 1–6, 2024. [12] S. M. Mohiuddin, W. Du, X. Lyu, S. P. Nandanoori, and M. Elizondo, “Transient stability analysis of direct droopcontrolled grid-forming inverter with current clipping as current limiting control,” in 2024 IEEE Power & Energy Society General Meeting (PESGM), pp. 1–5,-
 2024.
[13] J. Wang, “Improved control strategy of grid-forming inverters for fault ride-through in a microgrid system,” in 2022 IEEE Energy Conversion Congress and Exposition (ECCE), pp. 1–7, 2022. [14] C. L. Peralta, H. P. Dang, and H. N. Villegas Pico, “Searching for grid-forming technologies that do not impact protection systems: A promising technology,” IEEE Electrification Magazine, vol. 12, no. 2, 2024.
[15] Y. Li, H. Wu, and X. Wang, “Impact of grid-forming inverters on protective relays: A perspective for current limiting control design,” IEEE Transactions on Industrial Electronics, pp. 1–12, 2025. [16] M. Mehdi Mobashsher, S. M. Hosseini, A. Akbar Abdoos, S. Mohammad Hashemi, M. SanayePasand, and M. Azzouz, “Fault type classification in the presence of inverter-based resources: Review, challenges, and future works,” IEEE Access, vol. 13, pp. 37051–37077, 2025. [17] D. Moutevelis, J. Roldan–Per-
ez, and M. Prodanovic, “Virtual admittance control for providing voltage support using converter interfaced generation,” in 2021 IEEE PES Innovative Smart Grid Technologies Europe (ISGT Europe), pp. 01–06, 2021. [18] Y. Zhao, W. Zhang, W. Wang, and Z. Pan, “Grid forming control with inertial and virtual admittance characteristics for grid-tied converters,” in 2020 39th Chinese Control Conference (CCC), pp. 6164–6189, 2020. [19] L. Huang, C. Wu, D. Zhou, and F. Blaabjerg, “Impact of virtual admitta-
nce on small-signal stability of gridforming inverters,” in 2021 6th IEEE Workshop on the Electronic Grid (eGRID), pp. 1–8, 2021.
5

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:04.310Z
- **Text Length:** 22991 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 5 of 5
