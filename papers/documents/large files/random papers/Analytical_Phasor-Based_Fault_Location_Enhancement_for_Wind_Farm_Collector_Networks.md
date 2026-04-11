# PDF Document: Junior et al. - 2025 - Analytical Phasor-Based Fault Location Enhancement for Wind Farm Collector Networks.pdf

**File Path:** Junior et al. - 2025 - Analytical Phasor-Based Fault Location Enhancement for Wind Farm Collector Networks.pdf

**Processed Date:** 2026-02-10T18:16:05.407Z

**File Size:** 969.93 KB

**Total Pages:** 10

**Extracted Pages:** 10

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3360

**Title:** Analytical Phasor-Based Fault Location Enhancement for Wind Farm Collector Networks

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

JOURNAL OF LATEX CLASS FILES, VOL. 14, NO. 8, AUGUST 2021 1
Analytical Phasor-Based Fault Location
Enhancement for Wind Farm Collector Networks
Alailton J. Alves J ́unior, Daniel Barbosa, Ricardo A. S. Fernandes, and Denis V. Coury
Abstract—The increasing integration of Inverter-Based Resources (IBRs) is reshaping fault current characteristics, presenting significant challenges to traditional protection and fault location methods. This paper addresses a key limitation in fault location within wind farm collector networks, i.e., oneterminal phasor-based methods become inaccurate when IBRs are electrically located downstream from the fault. In such cases, the voltage drop caused by IBR fault current injections is not captured -
by the Intelligent Electronic Device, resulting in a systematic overestimation of fault distance. To mitigate this issue, a general compensation framework was proposed by augmenting classical loop formulations with a distance-dependent voltage correction term. The methodology was derived analytically using a sequence-domain representation and generalized to multiple fault types through a unified notation. It maintains the simplicity and interpretability of conventional approaches and can be implem-
ented using only local measurements. The method was evaluated through EMT simulations in PSCAD using a realistic wind farm model. Results show significant improvements in location accuracy, with average and maximum errors notably reduced, especially for ground-involved faults where reductions exceed 90%. Furthermore, the compensation eliminates sensitivity to wind penetration levels and ensures uniform performance across feeders, positioning the method as a practical solution for modern renewable--
dominated grids.
Index Terms—Fault location, inverter-based resources, wind farm collector, one-terminal methods
I. INTRODUCTION
G
LOBAL commitments to decarbonization, supported by national targets, market instruments, and sustained cost declines, have accelerated the deployment of wind and solar generation worldwide [1]. As the resource mix shifts from synchronous machines to converter-interfaced generation, shortcircuit characteristics are being reshaped across transmission, distribution, and plant-level networks: fault magnitudes, temporal waveforms, and sequence components increasingly diverge from the assumptions that h-
istorically guided protection engineering and fault-analysis practice [2]. These shifts are driven chiefly by the dynamics of InverterBased Resources (IBRs). Unlike synchronous machines, IBRs inject fault current through control-driven mechanisms that inherently limit magnitude, shape the current waveform via
A. J. Alves J ́unior, R. A. S. Fernandes and D. V. Coury are with the Department of Electrical and Computer Engineering, S ̃ao Carlos School of Engineering (EESC), University of Sa ̃o Paulo (USP), Sa ̃o Carlos, SP 13566-590, Brazil (e-mail: alailtonjunior@usp.br; ricardo.asf@usp.br; coury@sc.usp.br). D. Barbosa is with the Department of Electrical Engineering, Federal University of Bahia (UFBA), Salvador, BA 40170-110, Brazil (e-mail: dbarbosa@ufba.br). (Corresponding author: Alailton J. Alves Ju -
́nior.)
fast control loops, and alter sequence components [3], [4]. Therefore, the accurate fault location is a prerequisite for dependable system operations, as it shortens isolation and restoration times, and limits service disruptions. Accordingly, this study examines the performance of traditional fault location methods in IBR-rich networks and proposes a method tailored to their specific characteristics. Most fault-location categorized into four groups: phasorbased, voltage-sag, traveling-wave, and d-
ata-driven. Among these, phasor-based methods are often preferred because they are straightforward to implement, interpretable, and compatible with existing measurement infrastructures [5]. Within phasor-based methods, single-ended schemes use only local measurements to estimate the fault distance. Common methods include the impedance method [6], the reactance method [7], and Takagi-type methods [8], [5], [9]. Twoended schemes extend this approach by using synchronized measurements at both line te-
rminals and, therefore, require a communications link. The main studies include [10], [11], [12], [13]. Despite this variety, phasor-based methodologies are grounded in standard short-circuit assumptions associated with synchronous-machine behavior. Motivated by these limitations, recent literature has begun to explicitly account for IBR effects in fault-location algorithms. At the distribution and microgrid scales, three studies exemplify these directions [14], [15], [16]. In [14], the authors pr-
oposed an optimization-based three-phase fault-location method that fuses synchronized and unsynchronized measurements, models IBR fault response without Phasor Measurement Unit data, and explicitly treats load-value uncertainty. Additionally, in [15], the authors rely only on unsynchronized source-side phasors, avoid IBR source-impedance modeling, and jointly estimate fault distance, resistance, and synchronization angles. A supercapacitor fault current correction was proposed by [16], enabling c-
onventional overcurrent protection and fault location to remain effective under inverter-limited currents. In transmission systems with substantial IBR penetration, two complementary directions emerged: (i) benchmarkingdriven adaptations of classical phasor/impedance methods; and (ii) sequence-aware single-ended formulations tailored to converter behavior. Along the first direction, the authors of [17] benchmarked ten one- and two-terminal impedance-based schemes across tens of thousands of PSCAD -
cases spanning diverse IBR controls and short-circuit levels, and proposed a multi-method selector that reduced location error in the absence of communications. Along the second, [18] derived a sequence-network model for IBRs showing that the apparent 0000–0000/00$00.00ne©ga2t0i2v1e-IsEeEqEuence impedance became effectively infinite when
arXiv:2511.21319v1 [eess.SY] 26 Nov 2025

JOURNAL OF LATEX CLASS FILES, VOL. 14, NO. 8, AUGUST 2021 2
grid codes did not mandate negative-sequence injection, and designed a single-ended locator that employed negative- and zero-sequence polarizing currents, incorporated remote-infeed and line-charging effects, and maintained accuracy across wide ranges of fault resistance and grid-code settings. Despite this progress, the collector system within wind farms remains comparatively underexplored. Collector feeders are typically radial and host multiple IBRs at varying electrical distances from a prospe-
ctive fault. Addressing this gap, the authors of [19] investigate the performance of non-conventional single-ended phasor-based methods in a wind-farm collector system. The study highlights the most promising traditional methods for each fault condition, but does not account for IBR influence on these methods. Motivated by these gaps, this paper focuses on singleended, phasor-based fault location for feeder lines within wind-farm collector systems. Specifically, it proposes a simple and transparen-
t modification to the classical single-ended loop equation to account for the voltage drop induced by IBR currents. The resulting formulation preserves the simplicity and interpretability of classical phasor-based locators while improving accuracy in inverter-dominated networks. The paper proceeds as follows. Section II analyzes how IBR placement with respect to the fault point affects the singleended loop and motivates the inclusion of a compensation term in the loop equation. Section III develop-
s the compensated formulation, presents the full Single Line-to-Ground (SLG) derivation, and generalizes the notation for other fault types. Section IV describes the test system and scenarios. Section V evaluates the proposed method’s performance against a classical phasor-based scheme. Finally, Section VI summarizes the findings.
II. IBR EFFECT ON ONE-TERMINAL FAULT LOCATORS
Modern wind farms comprise numerous wind turbine generators (WTGs) distributed across multiple radial feeders that converge at a central collector substation. This collector system is responsible for aggregating the generated power and exporting it to the transmission network, as shown in Fig. 1. Each feeder consists of a primary distribution line and several lateral branches, with IBRs interfacing the WTGs to the grid.
Fig. 1. Schematic overview of a wind-farm collector system with multiple IBRs connected along radial feeders.
During fault conditions, IBRs inject positive-sequence current with a limited amplitude and controlled characteristics, fundamentally different from the behavior of traditional synchronous generators. While this distinction in current profile
is significant, the most critical factor in fault location analysis is not the nature of the injected current itself, but rather the position of the IBR in relation to the fault point and the Intelligent Electronic Device (IED) installed at the feeder’s extremity. The presence of an IBR between the IED and the fault introduces a substantial change in the fault loop, which can distort the voltage and current measurements used for distance estimation. Traditional phasor-based fault location algorith-
ms rely on the premise that the current flowing through the IED is the same current traversing the segment of the line between the IED and the fault. Under this assumption, the ratio between the voltage and current phasors, termed the loop impedance, reflects the impedance of the line segment up to the fault point [9]. However, this assumption fails in the presence of IBRs depending on their location relative to the fault.
A. Fault Located Upstream of the IBR
In Fig. 2, the feeder was configured in per-unit distance from the IED at the local end to the remote end. A fault at location d ∈ [0, 1] was measured from the IED toward the remote end, and the k-th IRB was located at dw,k ∈ [0, 1]. Under the scenario, the inverters lie electrically beyond the fault, so d < dw,k for every k. Let N denote the number of
inverters, with locations dw,k|kN=1. The total positive-sequence
line impedance was Z(1)
L . Therefore, a per-unit segment of
length ∆d has impedance ∆d, Z(1)
L . Analogous definitions
apply to the negative- and zero-sequence impedances, Z(2)
L
N1
Ea
Ze(q1)
d · Z(1)
L
Z (1)
Lw
Z (w1)
I (1)
wa,1 Z(1)
Lw
Z (w1)
I (1)
wa,2 Z(1)
Lw
Z (w1)
I (1)
wa,3
(1 − d) · Z(1)
L
Ia(1)
−
+
Va(1)
IED
Faulty Point
N2
Ze(q2)
d · Z(2)
L
Z (2)
Lw
Z (w2)
I (2)
wa,1 Z(2)
Lw
Z (w2)
I (2)
wa,2 Z(2)
Lw
Z (w2)
I (2)
wa,3
(1 − d) · Z(2)
L
Ia(2)
−
+
Va(2)
IED
Faulty Point
N0
Ze(q0)
d · Z(0)
L
Z (0)
Lw
Z (w0)
I (0)
wa,1 Z(0)
Lw
Z (w0)
I (0)
wa,2 Z(0)
Lw
Z (w0)
I (0)
wa,3
Ia(0)
−
+
Va(0)
IED
(1 − d) · Z(0)
L
Faulty Point
Fig. 2. Sequence-network representation of a feeder with all IBRs located upstream from the fault.

JOURNAL OF LATEX CLASS FILES, VOL. 14, NO. 8, AUGUST 2021 3
and Z(0)
L . The current injected by the k-th inverter was denoted
Iwa,k .
In this configuration, the entire voltage drop between the IED and the fault point was captured by the IED measurements. Although a portion of the fault current injected by the IBR may flow toward the grid and pass through the IED, the relation between voltage and current along the line segment from the IED to the fault remains unaltered. This occurred because the entire voltage drop in the faulty segment was captured in the measured voltage, and the associated current represents the net current t-
hrough that same segment. As a result, the loop impedance computed from the phasors measured at the IED still reflects the impedance of the line up to the fault. Consequently, the conventional loop formulation remains valid in this scenario and can be expressed in (1):
Zloop = Vloop
Iloop
, (1)
where Vloop and Iloop are the phasor voltage and current measured locally at the IED. This formulation provides an accurate representation of the impedance between the IED and the fault point, assuming no intermediate IBRs alter the current path.
B. Fault Located Downstream from the IBR
In contrast, when the fault was located downstream from at least one IBR illustrated in Fig. 3, the assumption that the fault current measured at the IED traverses the entire faulted segment was no longer valid. This occurs when there exists at least one k such that dw,k < d, meaning the IBR was positioned upstream of the fault. In such configurations, a portion of the fault positivesequence current injected by the IBR must flow through part of the line between the IBR and the fault point. This se-
gment, denoted by (d − dw,k) Z(1)
L , introduces a voltage drop that was not visible to the IED, as the IED does not measure the IBR’s injected current directly. Therefore, while the IED records the voltage drop only up to the IBR, it does not capture the additional drop across the remainder of the line up to the fault. This leads to a mismatch between the measured voltage and the actual current path, distorting the loop impedance and resulting in an overestimation of the fault distance. To correct this discrepancy, a compensation-
 term was added to the loop voltage to reconstruct the total voltage drop across the actual faulted segment. This leads to a modified expression for the loop impedance that includes the IBR-induced voltage component, as shown in (2):
Zloop = Vloop + Vcomp(d)
Iloop
, (2)
where Vcomp(d) represents the voltage drop introduced by the IBR current flowing through the segment between the IBR and the fault. By incorporating this compensation term, the fault location algorithm can restore the accuracy lost due to the distortion caused by upstream IBRs. This correction becomes essential in wind farm collector systems, where multiple IBRs are distributed along the feeders.
N1
Ea
Ze(q1)
dw · Z(1)
L (d − dw) · Z(1)
L
Z (1)
Lw
Z (w1)
I (1)
wa,1 Z(1)
Lw
Z (w1)
I (1)
wa,2 Z(1)
Lw
Z (w1)
I (1)
wa,3
(1 − d) · Z(1)
L
d · Z(1)
L
Ia(1)
−
+
Va(1)
IED
Faulty Point
N2
Ze(q2)
dw · Z(2)
L (d − dw) · Z(2)
L
Z (2)
Lw
Z (w2)
I (2)
wa,1 Z(2)
Lw
Z (w2)
I (2)
wa,2 Z(2)
Lw
Z (w2)
I (2)
wa,3
(1 − d) · Z(2)
L
d · Z(2)
L
Ia(2)
−
+
Va(2)
IED
Faulty Point
N0
Ze(q0)
dw · Z(0)
L (d − dw) · Z(0)
L
Z (0)
Lw
I (0)
wa,1 Z(0)
Lw
I (0)
wa,2 Z(0)
Lw
I (0)
wa,3
Ia(0)
−
+
Va(0)
IED
(1 − d) · Z(0)
L
d · Z(0)
L
Faulty Point
Fig. 3. Sequence-network representation of a feeder with one IBR located downstream from the fault.
III. METHODOLOGY
To address the challenge posed in Section II, the present section develops a transparent and fully traceable compensation framework that augments a one-terminal phasor-based fault-location method. The core idea was to include a distancedependent voltage term, Vcomp(d), in the loop formulation to correct the effect of inverter injections that do not traverse the entire path between the IED and the fault.
A. Single-Line-to-Ground Fault Derivation
The formulation was first obtained for the SLG fault case and then generalized. Fig. 4 illustrates the interconnection used to represent the series connection of the three sequence networks during an SLG fault. Within this setting, consider the faulted phase a located at distance d from the IED, and its currents and voltages measurements are represented by Ia, Ib, Ic and Va, Vb, Vc respectively. By extracting the loop relations in Fig. 4, the voltage at the fault node was given by Equation (3):
VF = V (1)
F + V (2)
F + V (0)
F , (3)
where VF represents the voltage at the fault point, and the
upscript (·)(1), (·)(2), and (·)(0) denote the positive- , negative-, and zero-sequence components, respectively. Firstly, analysing the positive-sequence network, each IBR injects a current I(1)
wa,k that splits between an upstream branch

JOURNAL OF LATEX CLASS FILES, VOL. 14, NO. 8, AUGUST 2021 4
N1
Ea
Ze(q1)
dw · Z(1)
L (d − dw) · Z(1)
L
Z (1)
Lw
Z (w1)
I (1)
wa,1 Z(1)
Lw
Z (w1)
I (1)
wa,2 Z(1)
Lw
Z (w1)
I (1)
wa,3
(1 − d) · Z(1)
L
d · Z(1)
L
+
−
V (1)
F
I1
Ia(1)
−
+
Va(1)
IED
N2
Ze(q2)
dw · Z(2)
L (d − dw) · Z(2)
L
Z (2)
Lw
Z (w2)
I (2)
wa,1 Z(2)
Lw
Z (w2)
I (2)
wa,2 Z(2)
Lw
Z (w2)
I (2)
wa,3
(1 − d) · Z(2)
L
d · Z(2)
L
+
−
V (2)
F
I2
Ia(2)
−
+
Va(2)
IED
N0
Ze(q0)
dw · Z(0)
L (d − dw) · Z(0)
L
Z (0)
Lw
I (0)
wa,1 Z(0)
Lw
I (0)
wa,2 Z(0)
Lw
I (0)
wa,3
Ia(0)
−
+
Va(0)
IED
(1 − d) · Z(0)
L
d · Z(0)
L
+
−
V (0)
F
I0
3Zf
Fig. 4. Sequence representation of an SLG fault on a feeder with intermediate inverters.
toward the IED and a downstream branch toward the fault, as
depicted in Fig. 5. Denoting these components by I(1)
wag,k (to
the grid/IED side) and I(1)
waf ,k (to the fault side), the partition is shown in (4):
I (1)
wa,k = I (1)
wag,k + I (1)
waf ,k. (4)
N1
Ea
Ze(q1)
dw · Z(1)
L (d − dw) · Z(1)
L
Z (1)
Lw
Z (w1)
I (1)
wa,1
I (1)
wag,1 I (1)
waf ,1
Ia(1) + I(1)
wag ,1
+
−
V (1)
F
I1 = Ia(1) + I(1)
wag,1 + I (1)
waf ,1 I1 = Ia(1) + I(1)
wa,1
Ia(1)
−
+
Va(1)
IED
Fig. 5. Current-divider illustration for one IBR in the positive-sequence network.
Consequently, the positive-sequence current seen by the IED equals the grid-side contribution minus the portion of the IBR injections flowing back toward the IED, estimated by (5):
Ia(1) = Ig(1a) −
N
X
k=1
I (1)
wag,k, (5)
where Ig(1a) denotes the grid-side contribution observed at the IED. Equation (5) makes clear that the IED does not necessarily measure the entire inverter injection. For any IBR with dw,k < d, the current flowing toward the fault increases downstream from dw,k. Consequently, the segment of length (d − dw,k) experiences an additional voltage drop
(d − dw,k) Z(1)
L I (1)
wa,k that is not captured at the IED. To expose the role of downstream inverter injections, consider a single inverter at dw,1 with dw,1 < d just as illustrated in Fig. 4. Splitting the line into IED→inverter (length dw,1) and inverter→fault (length d − dw,1) yields the positivesequence voltage drops in Equations (6) and (7):
V (1)
F = Va(1) − Vdrop,1 + Vdrop,2
Vdrop,1 = Ia(1) dw,1 Z(1)
L (6)
Vdrop,2 =
h
I (1)
waf ,1 + Ia(1) + I (1)
wag ,1
i
(d − dw,1) Z(1)
L (7)
being Vdrop,1 the voltage drop along the upstream segment, while Vdrop,2 is the drop along the downstream segment. Combining Equations (6) and (7) leads to (8):
V (1)
F = Va(1) − Ia(1) d Z(1)
L
− I(1)
waf ,1 + I (1)
wag,1 (d − dw,1) Z(1)
L,
= Va(1) − Ia(1) d Z(1)
L − I(1)
wa,1(d − dw,1) Z(1)
L . (8)
It was possible to observe that Equation (8) makes the decomposition explicit. The conventional loop Va(1) − Ia(1)d Z(1)
L applies when no IBR was located between the IED and the fault, whereas any IBR at dw,k < d introduces an additional voltage drop over the segment of length (d − dw,k) because its injected current does not traverse the entire distance d. By superposition, for N inverters, the general positive-sequence fault voltage is given by Equation (9):
V (1)
F = Va(1) − Ia(1) d Z(1)
L
−
N
X
k=1
(
(d − dw,k) Z(1)
L I (1)
wa,k, if dw,k < d,
0, otherwise,
(9)
which motivates the definition of the compensation term in (10).
V (SLG)
comp (d) = −
N
X
k=1
(
(d − dw,k) Z(1)
L I (1)
wa,k, if dw,k < d,
0, otherwise. (10) Consistent with [20], typical inverter controls suppress negative- and zero-sequence injections. Under this assumption, the negative- and zero-sequence fault-point voltages contain no inverter-current terms and are written in Equations (11) and (12):
V (2)
F = Va(2) − Ia(2) d Z(2)
L (11) V (0)
F = Va(0) − Ia(0) d Z(0)
L . (12)
Together with the positive-sequence relation in Equation (9), these expressions fully specify the sequence-domain fault

JOURNAL OF LATEX CLASS FILES, VOL. 14, NO. 8, AUGUST 2021 5
voltages (V (1)
F , V (2)
F , V (0)
F ). For other fault types, the persequence forms remain valid, i.e., what changed was the interconnection of the sequence networks at the fault. For instance, in an SLG fault the three sequence networks were connected in series, whereas in a line-to-line fault the positiveand negative-sequence networks were in series and the zerosequence path was open. Substituting Equations (9), (11), and (12) into the fault constraint, Equation (3) yields the fault voltage loop in Equation (13).
VF = Va(1) + Va(2) + Va(0) + V (SLG)
comp (d)
− d Z(1)
L Ia(1) + Z(2)
L Ia(2) + Z(0)
L Ia(0) ,
IF RF = Va − d Z(1)
L Ia + K0Ia(0) + V (SLG)
comp (d). (13)
where K0 = Z(0)
L /Z(1)
L is the zero-sequence compensation
factor, IF and RF accounts for the fault current and resistance respective. The negative-sequence line follows under the explicit assumption Z(2)
L ≈ Z(1)
L.
Rearranging Equation (13), it was possible to isolate the loop-impedance contribution, leading to Equation (14):
Zloop = d Z(1)
L = Va + V (SLG)
comp (d) − IF RF
Ia + K0Ia(0)
, (14)
which holds the same structure as the classical loop equation but includes the compensation voltage Vcomp(d). Therefore, this formulation can be extended to any phasor-based faultlocation method or even distance protection schemes.
B. Extension to Other Fault Types
The proposed formulation can be expanded to consider the general loop equation for any fault type, as shown in (15):
Zloop = d Z(1)
L = Vloop + Vcomp(d) − IF RF
Iloop
, (15)
where, Vloop and Iloop are the voltage and current loop for the fault type under consideration. For distance estimation, isolating the d term and applying the imaginary part operator to remove the fault resistance, leads to (16):
d = Im{(Vloop + Vcomp(d)) · IF∗ }
Im{Z (1)
L · Iloop · IF∗ } (16)
being Im{·} the imaginary part operator and IF∗ is the complex
conjugate of the fault current. Vcomp(d) is the compensation voltage for any fault type given by Equation (17):
Vcomp(d) = −
N
X
k=1
(
(d − dw,k) Z(1)
L Iw,k, if dw,k < d,
0, otherwise. (17) where Iw,k is the sequence-appropriate inverter current for the loop under consideration.
Table I consolidates representative loops for common faults, explicitly linking each row to Equations (16) and (17). Rows marked (∗) follow loop formulations adopted in [17].
TABLE I LOOP QUANTITIES FOR DIFFERENT FAULT TYPES.
Fault Type Vloop Iloop Iw,k
A–G Va Ia + K0I0 Iwa,k B–G Vb Ib + K0I0 Iwb,k C–G Vc Ic + K0I0 Iwc,k
AB Va − Vb Ia − Ib Iwa,k − Iwb,k
BC Vb − Vc Ib − Ic Iwb,k − Iwc,k
CA Vc − Va Ic − Ia Iwc,k − Iwa,k AB–G∗ Va + Vb Ia + Ib + 2K0I0 Iwa,k + Iwb,k BC–G∗ Vb + Vc Ib + Ic + 2K0I0 Iwb,k + Iwc,k CA–G∗ Vc + Va Ic + Ia + 2K0I0 Iwc,k + Iwa,k
Because the compensation term Vcomp(d) depends explicitly on the unknown distance d, its evaluation requires an iterative solution procedure. The estimation begins with an initial distance obtained from (16) by setting Vcomp(d) = 0. This preliminary value is then substituted into (17) to update the compensation term, yielding a revised value of Vcomp(d). The updated compensation is subsequently reintroduced into (16) to compute a refined estimate of d. This fixed-point iteration continues until su-
ccessive distance estimates differ by less than a prescribed tolerance, ensuring convergence.
C. Practical Considerations and Iterative Estimation Procedure
Table I shows that Vcomp(d) depends on the inverter currents Iw,k, which are not typically obtained in a synchronous phasor-based form. Thus, when per-inverter currents are unavailable, a pragmatic approximation can use the pre-fault IED measurements as a proxy for the aggregate inverter contribution and distribute it uniformly across devices. Assuming that: (i) all inverter generations are equal during and previous the fault; and (ii) their positive-sequence injections maintain magnitude and phas-
e angle close to pre-fault values, those assumptions can lead to an approximated form of Equation (17) as shown next:
Vcomp(d) = −
N
X
k=1



(d − dw,k) Z(1)
L
Iw
N , if dw,k < d,
0, otherwise. (18) where Iw is a pre-fault proxy selected consistently with the loop in use. Thus, Table II enumerates these proxies for the rows of Table I. It is important to observe that this approximation can estimate the fault distance d using only the IED measurements.
IV. TEST SYSTEM
Fig. 6 shows a realistic onshore wind-farm collector network modeled in PSCAD. The power system has 30 Type-4 wind turbine generators (WTGs), each rated at 4.2 MW, connected

JOURNAL OF LATEX CLASS FILES, VOL. 14, NO. 8, AUGUST 2021 6
Fig. 6. Schematic overview of the test system.
TABLE II PRACTICAL LOOP QUANTITIES FOR DIFFERENT FAULT TYPES.
Fault Type Vloop Iloop Iw A–G Va Ia + K0I0 Iapre B–G Vb Ib + K0I0 Ipre
b
C–G Vc Ic + K0I0 Icpre AB Va − Vb Ia − Ib Iapre − Ipre
b
BC Vb − Vc Ib − Ic Ipre
b − Icpre
CA Vc − Va Ic − Ia Icpre − Iapre AB–G∗ Va + Vb Ia + Ib + 2K0I0 Iapre + Ipre
b
BC–G∗ Vb + Vc Ib + Ic + 2K0I0 Ipre
b + Icpre
CA–G∗ Vc + Va Ic + Ia + 2K0I0 Icpre + Iapre
via pad-mounted transformers to a collector bus. These collectors were linked through a three-winding transformer (rated at 280 MVA) to a main collector bus, which connects to the high-voltage grid through a substation transformer. All WTGs were modeled using full-converter technology with a grid-following (GFL) control architecture [21], [22]. The GFL inverter synchronizes with the grid via a synchronous-reference-frame PLL [23] and regulates the current through cascaded control loops. The inner -
current-control loop operates in the dq frame and enforces the commanded current using PI controllers tuned via internal model control [24]. The outer loop manages active and reactive power set-points, with a default operation at a unity power factor during steady-state. The current magnitude was constrained to 1.1 p u , and fault ride-through behavior was incorporated such that when the PCC voltage drops below 0.85 p u , the control system injects positive-sequence reactive current [25], as manda-
ted by the Brazilian grid code [26].
A. Monte Carlo Generation of Wind-Penetration Scenarios
The accuracy of the proposed fault-location methodology was influenced not only by the fault location and resistance, but also by the spatial distribution of wind-power injections
along the collector system. The position of each wind turbine and its local operating point affect the pre-fault current sharing and, consequently, the short-circuit level seen at the relay. In practical installations, however, only the aggregated measurements at the IED bus are typically available, and the individual turbine currents are not recorded. In this work, each IBR contribution was therefore approximated as the prefault current at the IED divided by the number of WTGs (see Section III-C)-
, implicitly assuming identical power output among turbines. Any dispersion in turbine output around this average may introduce additional location errors in the proposed methodology. To obtain a realistic and systematic assessment of this sensitivity, a Monte Carlo model was adopted to generate a large set of penetration scenarios that explicitly accounts for turbine-to-turbine variability. Field measurements reported in [27] indicate that, under normal operating conditions, the correlation betwe-
en the power output of an individual turbine and the total farm production typically lies in the range 0.973–0.982. To stress-test the proposed scheme and ensure that the simulated scenarios cover operating conditions with stronger variability than those observed in [27], the penetration model was parameterized so that the correlation between each turbine and the farm-level factor remains strictly above 0.97 for all simulated scenarios. Let NWT = 5 denote the number of WTGs in the wind
farm. In each Monte Carlo scenario s, the per-unit penetration
P (s)
i ∈ [0, 1] of turbine i was modeled as the sum of a farmlevel component and a local deviation, followed by clipping to the physical interval:
P (s)
i = clip P (s)
farm + ε(s)
i , 0, 1 , i = 1, . . . , NWT, (19)
where P (s)
farm is the farm-level penetration common to all
turbines in scenario s, ε(s)
i is a turbine-specific deviation,
and clip(·, 0, 1) denotes projection onto [0, 1]. As defined in Equation (19), the same farm-level factor drives all turbines,

JOURNAL OF LATEX CLASS FILES, VOL. 14, NO. 8, AUGUST 2021 7
while ε(s)
i introduces controlled dispersion around this common operating point. The farm-level penetration was modeled as uniformly distributed on the unit interval, expressed as:
P (s)
farm ∼ U (0, 1). (20)
In this sense, across scenarios, the wind farm operates between 0% and 100% of rated power. The deviations were independently drawn from a symmetric uniform law as:
ε(s)
i ∼ U (−∆, ∆), i = 1, . . . , NWT, (21)
where the half-width ∆ > 0 was calibrated to enforce the desired upper bound on the correlation. Before clipping, the variances of Pfarm and εi follow directly from Equations (20) and (21) as:
Var Pfarm = 1
12 , Var(εi) = ∆2
3 . (22)
Under the additive model implied by Equation (19), with Pfarm independent of εi, one obtains:
Var(Pi) = Var Pfarm + Var(εi), (23)
Cov Pi, Pfarm = Var Pfarm . (24)
Using the Equation (24), the correlation between turbine i and the farm-level factor can be given as:
ρi,farm = Corr(Pi, Pfarm) =
s
Var(Pfarm)
Var(Pfarm) + Var(εi) . (25)
Imposing a lower bound Rmax > 0.97 on this correlation and substituting Equation (22) into (25) yields the required deviation variance:
Var(εi) = Var Pfarm
1
R2max
− 1 . (26)
From Equation (26), it can be obtained the corresponding half-width:
∆ = p3 Var(εi) =
s
3 Var Pfarm
1
R2max
− 1 . (27)
Therefore, Equation (27) was used to select a single value of ∆ that guarantees, in combination with Equation (19), that the empirical correlation between each turbine and the farm-level penetration remains strictly above the prescribed threshold Rmax across all simulated scenarios, while preserving strong coupling through the common factor Pfarm. The complete sampling procedure for a single penetration scenario can be summarized as follows: (i) compute ∆ from Equation (27) using the prescribed Rm-
ax; (ii) draw a farm
level penetration P (s)
farm according to Equation (20); (iii) draw
deviations ε(s)
i according to Equation (21); and (iv) form P (s)
i for all turbines using Equation (19). From a probabilistic standpoint, the penetration model above was embedded into the broader Monte Carlo framework
used to generate the fault scenarios. Each scenario s was characterized by the joint random tuple:
Ξ(s) = P (s), F (s), D(s), R(s)
f , φ(s) , (28)
where P (s) = [P (s)
1 , . . . , P (s)
NWT ]⊤ is the penetration vector
generated as described above, F (s) is the fault type, D(s) is
the fault location, R(s)
f is the fault resistance, and φ(s) is the fault inception angle. The combinations of discrete parameters considered in this work were summarized in Table III.
TABLE III PARAMETERS AND VALUES USED TO GENERATE THE SCENARIOS.
Parameters Values
Fault Location 17 locations shown in Fig. 6
Fault Type A-G, AB, AB-G, ABC
Fault Resistance 0Ω, 5Ω, 10Ω, 25Ω, 40Ω, 50Ω
For each realization Ξ(s), a time-domain PSCAD simulation of the test system in Fig. 6 was performed, and the three-phase short-circuit level and phasor quantities at the IED bus were computed and processed by the proposed algorithm. To ensure that the set of Monte Carlo scenarios was sufficiently rich in terms of short-circuit levels, a nearestneighbor resolution criterion was applied to the resulting fault currents. Let Ic(cs) denote the magnitude of the three-phase short-circuit current at the -
IED bus for scenario s, and let
{Ic(c1), Ic(c2), . . . , Ic(cn)} be the first n realizations. For each n, these values were sorted as:
x(n)
1 ≤ x(n)
2 ≤ · · · ≤ x(nn), (29)
Thus, the distance from each point to its closest neighbor in current space was computed as:
y(n)
i = min |x(n)
i − x(n)
i−1|, |x(n)
i+1 − x(n)
i | , i = 1, . . . , n, (30) with the convention that x(n)
0 and x(n)
n+1 were omitted at the boundaries. The p-th percentile of these nearest-neighbor dis
tances, εp(n) = Percentilep {y(n)
i }in=1 , provides a measure of how densely the short-circuit current space was sampled. In this work, p = 99 was adopted, so that ε99(n) was the distance such that 99% of the simulated short-circuit levels have another scenario within ε99(n) amperes. A tolerance ∆Icc,tol was then specified (here, ∆Icc,tol = 10 A), and the Monte Carlo process was deemed converged when ε99(n) ≤ ∆Icc,tol. Fig. 7 shows the evolution of ε99(n) as a function of the number of scenarios, together with the convergence thr-
eshold. As the number of simulations increases, the nearest-neighbor distance decreases approximately monotonically, indicating progressively finer resolution of the short-circuit current distribution. The resolution criterion (??) was satisfied only when the Monte Carlo set approaches its final size, implying that additional simulations beyond this point would not introduce materially new short-circuit levels, but only refine alreadysampled regions.

JOURNAL OF LATEX CLASS FILES, VOL. 14, NO. 8, AUGUST 2021 8
0 5000 10000 15000 20000 Number of scenarios
101
102
103
104
Nearest-neighbor e99 [A]
Convergence at n=15900
Fig. 7. Nearest-neighbor Monte Carlo convergence of the short-circuit current at the IED bus.
0 50 100 Total Circuit Power [%]
0
200
400
600
800
1000
Frequency
(a)
0 10 20 Max. Individual Difference [%] (b)
Fig. 8. Monte Carlo statistics of wind penetration: (a) distribution of the total circuit power across all scenarios; (b) distribution of the maximum turbineto-turbine penetration difference.
Based on the converged Monte Carlo set, the resulting distributions of the total wind-farm penetration and of the maximum turbine-to-turbine difference across all Monte Carlo realizations were illustrated in Fig. 8. The final Monte Carlo set encompass the 15,900 fault cases analyzed in this study.
V. ASSESSMENT OF THE METHODOLOGY
To assess the proposed methodology, its performance was benchmarked against state-of-the-art one-terminal phasorbased fault-location techniques. For each fault category, the most accurate method reported in the literature was selected to ensure a fair and representative comparison. All benchmark locators were implemented using the general compensated formulation in Equation (16), with the loop-dependent voltage and current quantities defined according to the corresponding fault type. The evaluatio-
n employed the simulation scenarios described in Section IV, enabling a consistent comparison of faultlocation accuracy between the best conventional approaches and the proposed method. Following the recommendations in [19], the TAKZ [8] algorithm was adopted for singleline-to-ground (SLG) faults, the enhanced TAKZ New [28] formulation for double-line-to-ground (DLG) faults, the TAKN [9] method for line-to-line (LL) faults, and the Reactance [7] approach for three-phase (3P) faults. The overall pe-
rformance across these four major fault classes is summarized in Fig. 9.
SLG DLG LL 3P Fault Type
0
2
4
6
8
10
Error [%]
Best Traditional Methods Compensated Methods
Fig. 9. Fault location error comparison between the most promising locator methods with and without the compensation voltage.
The boxplots show a contrast in fault location errors when compensation was applied. Notably, SLG and DLG faults exhibit exceptional improvement, with error distributions concentrated near zero and very narrow interquartile ranges. This enhanced accuracy stems from the fact that both fault types rely on the zero-sequence current component to estimate the fault current, a quantity unaffected by inverter injections due to the ∆-Y configuration of the inverter step-up transformers. In contrast, LL fa-
ults use the negative-sequence component, which can be distorted by fault ride-through controls that inject negative-sequence current when the voltage drops below a threshold [29]. For 3P faults, which depend solely on the positive-sequence component, the situation worsens because the injected current was significantly altered even under normal conditions, making the benefits of compensation less significant, although still substantial. Complementing this qualitative insight, Table IV quantifies t-
he average location error for each fault type, with and without the proposed compensation. These results corroborate the trends observed in Fig. 9, i.e., average errors for SLG and DLG faults drop from 0.584% and 0.386% to 0.065% and 0.095%, respectively (improvements that exceed 75%). LL and 3P faults also benefit, with error reductions of approximately 46% and 16%, respectively. These findings confirm that the compensation term significantly mitigates the distortions caused by IBRs, especially f-
or faults that are not dominated by positive-sequence contributions.
TABLE IV AVERAGE FAULT LOCATION ERROR FOR THE MOST PROMISING LOCATOR METHODS WITH AND WITHOUT THE COMPENSATION VOLTAGE.
Method SLG DLG LL 3P
Impedance [6] 24.659% 29.601% 27.649% 24.462% Reactance [7] 27.739% 12.269% 9.124% 2.199% TAKS [8] 3.592% 18.772% 6.871% 11.028% TAKN [9] – – 2.455% TAKZ [8] 0.584% 39.259% – TAKZ New [28] – 0.386% – 
Proposed Method 0.065% 0.095% 1.310% 1.838% Improvement 88.95% 75.47% 46.66% 16.41%

JOURNAL OF LATEX CLASS FILES, VOL. 14, NO. 8, AUGUST 2021 9
Further demonstrating the robustness of the proposed methodology, Table V reports the maximum fault location errors observed across the full simulation set. The results show that, even under the most adverse operating conditions, the proposed approach consistently outperforms the traditional techniques. The improvement was most pronounced for SLG faults, where the worst-case error was reduced from 6.208% to 0.529%. DLG and LL faults exhibit similarly strong gains, with reductions exceeding 59% in -
their respective maximum errors. In contrast, no improvement was observed for the 3P fault category. This outcome was attributed to the fact that the peak error in this case originates from a fault on the primary line, where the proposed formulation does not yield additional corrective benefit.
TABLE V MAX FAULT LOCATION ERROR FOR THE MOST PROMISING LOCATOR METHODS WITH AND WITHOUT THE COMPENSATION VOLTAGE.
Method SLG DLG LL 3P
Impedance [6] 100.000% 100.000% 100.000% 100.000% Reactance [7] 97.903% 100.000% 89.973% 9.439% TAKS [8] 30.019% 100.000% 61.302% 69.447% TAKN [9] – – 11.234% TAKZ [8] 6.208% 100.000% – TAKZ New [28] – 3.676% – 
Proposed Method 0.529% 1.482% 4.537% 9.439% Improvement 91.48% 59.69% 59.61% 0.00%
The influence of wind power penetration on fault location performance was illustrated in Fig. 10. Without compensation, the error increases markedly with higher levels of wind generation, reflecting the growing impact of IBR current injections on the voltage and current phasors measured at the IED. In contrast, the compensation methodology neutralizes this effect, yielding nearly constant error distributions across all generation levels. This invariance to wind penetration levels underscores the m-
ethod’s scalability and adaptability to evolving system conditions with higher renewable integration. Finally, Fig. 11 compares the error distribution between faults occurring in the primary line (upstream of any inverter) and the secondary line, where IBR injections are present between the IED and the fault. As expected, in the primary line, compensated and uncompensated errors were nearly identical as no IBRs intervene in the loop. However, for the secondary line, the uncompensated error was sig-
nificantly larger, reflecting the distortion introduced by unaccounted inverter injections. The compensated results in the secondary line closely match those of the primary line, demonstrating that the methodology effectively attenuates the influence of IBRs when their position lies between the IED and the fault. Taken together, the results shown in these figures and tables demonstrate that the proposed compensation methodology offers substantial and consistent gains in fault location accuracy acr-
oss fault types, system conditions, and topological configurations. Its ability to mitigate the distortive effects of inverter injections, particularly in complex wind farm collector systems, suggests that it can serve as a robust enhancement to conventional one-terminal phasor-based locators.
0% 25%25% 50%50% 75%
75% 100%
IBR Penetration Level
0
10
Distance Error [%]
(a)
Best Traditional Methods Compensated Methods
0% 25%25% 50%50% 75%
75% 100%
IBR Penetration Level (b)
0% 25%25% 50%50% 75%
75% 100%
IBR Penetration Level
0
10
Distance Error [%]
(c)
0% 25%25% 50%50% 75%
75% 100%
IBR Penetration Level (d)
Fig. 10. Fault location error comparison between the most promising locator methods with and without the compensation voltage for the fault types: (a) SLG, (b) DLG, (c) LL, and (d) 3P.
Main Line Secondary Line Faulted Line
0
10
20
Distance Error [%]
(a)
Best Traditional Methods Compensated Methods
Main Line Secondary Line Faulted Line (b)
Main Line Secondary Line Faulted Line
0
10
20
Distance Error [%]
(c)
Main Line Secondary Line Faulted Line (d)
Fig. 11. Fault location error comparison between the primary and secondary lines for the fault types: (a) SLG, (b) DLG, (c) LL, and (d) 3P.
VI. CONCLUSION
This paper highlighted a fundamental limitation in traditional one-terminal phasor-based fault location methods when applied to wind farm collector networks, namely their reduced accuracy in the presence of IBRs located downstream from the fault point. To address this challenge, a simple and general compensation methodology was proposed to correct the loop quantities affected by IBR current injections. The framework maintains the structural simplicity of classical approaches while significantly im-
proving fault location accuracy in IBR

JOURNAL OF LATEX CLASS FILES, VOL. 14, NO. 8, AUGUST 2021 10
dominated environments. The methodology was validated through an extensive set of simulations conducted in PSCAD using a realistic onshore wind farm model comprising 27 full-converter turbines. More than 15,000 fault cases were evaluated, spanning variations in fault type, resistance, inception angle, distance, and wind penetration level. For each scenario, the proposed method was applied in conjunction with the best-performing phasor-based locator for that specific fault condition. Quantitative r-
esults demonstrated that the proposed compensation strategy reduces both average and maximum fault location errors. Improvements exceeding 90% were observed for SLG and DLG faults. Significant error reductions were also achieved for line-to-line and three-phase faults, despite their partial reliance on sequence components affected by IBR dynamics. Furthermore, the methodology was demonstrated to mitigate the sensitivity of fault location error to variations in wind power penetration and to equaliz-
e performance across feeder segments, regardless of whether IBRs are present between the fault and the measurement point. In conclusion, this addresses a previously underexplored challenge in fault location for wind farm collector systems with high IBR integration. The proposed compensation framework provides a low-complexity, method-agnostic enhancement to traditional phasor-based schemes, thereby restoring fault location accuracy in scenarios where conventional methods exhibit low accuracy. As r-
enewable penetration increases, such techniques become essential for ensuring fast and reliable system restoration following faults.
REFERENCES
[1] J. Lee and F. Zhao, Global Wind Report 2024. Brussels, BE: GWEC, 2024. [2] K. Jones, J. Smith, and A. Lee, “Impact of inverter based generation on bulk power system dynamics and short-circuit performance,” IEEE Power & Energy Society technical report, 07 2018.
[3] R. Chowdhury and N. Fischer, “Transmission line protection for systems with inverter-based resources – part i: Problems,” IEEE Transactions on Power Delivery, 2021.
[4] A. Haddadi, E. Farantatos, I. Kocar, and U. Karaagac, “Impact of inverter based resources on system protection,” Energies, 2021. [5] S. Das, S. Santoso, A. Gaikwad, and M. Patel, “Impedance-based fault location in transmission networks: theory and application,” IEEE Access, vol. 2, pp. 537–557, 2014.
[6] G. Ziegler, Numerical Distance Protection: Principles and Applications, 4th Ed. Erlangen: Germany: Publicis Publishing, 2011. [7] A. C ̧ apar and A. Basa Arsoy, “Evaluating accuracy of fault location algorithms based on terminal current and voltage data,” International Journal of Electronics and Electrical Engineering, vol. 3, 01 2014.
[8] T. Takagi, Y. . Yamakoshi, M. Yamaura, R. Kondow, and T. Matsushima, “Development of a new type fault locator using the one-terminal voltage and current data,” IEEE Transactions on Power Apparatus and Systems, vol. PAS-101, no. 8, pp. 2892–2898, 1982. [9] SEL, “Advanced line differential protection, automation, and control system,” Schweitzer Engineering Laboratories, 2018.
[10] A. Girgis, D. Hart, and W. Peterson, “A new fault location technique for two- and three-terminal lines,” IEEE Transactions on Power Delivery, vol. 7, no. 1, pp. 98–107, 1992. [11] A. T. Johns and S. Jamali, “Accurate fault location technique for power transmission lines,” IEEE Proc., vol. 137, no. 6, pp. 395–402, 1990. [12] G. Preston, Z. M. Radojevic, C. H. Kim, and V. Terzija, “New settingsfree fault location algorithm based on synchronised sampling,” IEEE Proc., vol. 5, no. 3, pp. 376–383,-
 2011. [13] Z. He, R. Mai, W. He, and Q. Qian, “Phasor-measurement-unit-based transmission line fault location estimator under dynamic conditions,” GTD IET, vol. 5, pp. 1183–1191, 11 2011.
[14] A. S. Kahnamouei and S. Lotfifard, “Optimized fault location identification in power distribution systems with inverter-interfaced distributed generations,” IEEE Transactions on Power Delivery, vol. 38, no. 5, pp. 3429–3440, 2023. [15] C. A. Apostolopoulos, C. G. Arsoniadis, P. S. Georgilakis, and V. C. Nikolaidis, “Unsynchronized measurements based fault location algorithm for active distribution systems without requiring source impedances,” IEEE Transactions on Power Delivery, vol. 37, no. -
3, pp. 2071–2082, 2022. [16] R. C. Matthews, S. Hossain-McKenzie, and M. J. Reno, “Fault current correction strategies for effective fault location in inverter-based systems,” in 2019 IEEE 46th Photovoltaic Specialists Conference (PVSC), 2019, pp. 3124–3131. [17] M. J. Davi, M. Oleskovicz, and F. V. Lopes, “An impedancemulti-method-based fault location methodology for transmission lines connected to inverter-based resources,” International Journal of Electrical Power & Energy Systems, vol. 154, p.-
 109466, 2023. [Online]. Available: https://www.sciencedirect.com/science/article/pii/ S0142061523005239 [18] M. M. Mobashsher, S. M. Hosseini, A. A. Abdoos, S. M. Hashemi, M. Sanaye-Pasand, and H. Mehrjerdi, “A new fault location scheme based on local measurements for transmission lines connected to inverter-based resources,” Electric Power Systems Research, vol. 228, p. 110079, 2024. [Online]. Available: https: //www.sciencedirect.com/science/article/pii/S0378779623009665 [19] M. Davi, A. J ́uni-
or, C. Grilo, T. Cunha, L. Lessa, M. Oleskovicz, and D. Coury, “An improved methodology to locate faults in onshore wind farm collector systems,” Energies, vol. 18, no. 3, 2025. [Online]. Available: https://www.mdpi.com/1996-1073/18/3/693 [20] A. Haddadi, E. Farantatos, I. Kocar, and U. Karaagac, “Impact of inverter based resources on system protection,” Energies, vol. 14, no. 4, 2021. [Online]. Available: https://www.mdpi.com/1996-1073/14/4/1050 [21] O. Tremblay, R. Gagnon, and M. Fecteau, “Real--
time simulation of a fully detailed type-iv wind turbine,” in Proceedings of the IPST, vol. 13, 2013, pp. 18–20. [22] N. Miller, J. Sanchez-Gasca, W. Price, and R. Delmerico, “Dynamic modeling of ge 1.5 and 3.6 mw wind turbine-generators for stability simulations,” in 2003 IEEE Power Engineering Society General Meeting, vol. 3, 2003, pp. 1977–1983 Vol. 3. [23] S.-K. Chung, “A phase tracking system for three phase utility interface inverters,” IEEE Transactions on Power Electronics, vol. 15, no. 3,-
 pp. 431–438, may 2000. [24] L. Harnefors and H.-P. Nee, “Model-based current control of AC machines using the internal model control method,” IEEE Transactions on Industry Applications, vol. 34, no. 1, pp. 133–141, 1998. [25] S. D. Tavakoli, E. Prieto-Araujo, O. Gomis-Bellmunt, and S. GalceranArellano, “Fault ride-through control based on voltage prioritization for grid-forming converters,” IET Renewable Power Generation, jan 2023. [26] National Electric System Operator (ONS), “Submodule 2.10 – M-
inimum technical requirements for connection to transmission facilities,” Grid Procedures, version 2023.1, May 2023, [Online]. Available: https://www. ons.org.br/. [In Portuguese]. [27] K. R. Ward, O. Bamisile, C. J. Ejiyi, and I. Staffell, “Time-averaged wind power data hides variability critical to renewables integration,” Energy Strategy Reviews, vol. 50, p. 101235, 2023. [Online]. Available: https://www.sciencedirect.com/science/article/pii/S2211467X23001852 [28] M. J. B. B. Davi, M. Oleskovic-
z, and F. V. Lopes, “An impedancemulti-method-based fault location methodology for transmission lines connected to inverter-based resources,” International Journal of Electrical Power and Energy Systems, 2023.
[29] Y. Fang, K. Jia, Z. Yang, Y. Li, and T. Bi, “Impact of inverter-interfaced renewable energy generators on distance protection and an improved scheme,” IEEE Transactions on Industrial Electronics, vol. 66, no. 9, pp. 7078–7088, 2019.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:05.407Z
- **Text Length:** 49328 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 10 of 10
