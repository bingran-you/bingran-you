# PDF Document: Ruderman - 2025 - Model-free practical PI-Lead control design by ultimate sensitivity principle.pdf

**File Path:** Ruderman - 2025 - Model-free practical PI-Lead control design by ultimate sensitivity principle.pdf

**Processed Date:** 2026-02-10T18:16:35.716Z

**File Size:** 851.37 KB

**Total Pages:** 6

**Extracted Pages:** 6

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3342

**Title:** Model-free practical PI-Lead control design by ultimate sensitivity principle

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Model-free practical PI-Lead control design by
ultimate sensitivity principle
Michael Ruderman
Abstract—Practical design and tuning of feedback controllers has to do often without any model of the given dynamic process. Only some general assumptions about the process, in this work type-one stable behavior, can be available for engineers, in particular in motion control systems. This paper proposes a practical and simple in realization procedure for designing a robust PI-Lead control without modeling. The developed method derives from the ultimate sensitivity principles, known in the empiric-
al Ziegler–Nichols tuning of PID control, and makes use of some general characteristics of loop shaping. A threesteps procedure is proposed to determine the integration time constant, control gain, and Lead-element in a way to guarantee a sufficient phase margin, while all steps are served by only experimental observations of the output value. The proposed method is also evaluated with experiments on a noise-perturbed electro-mechanical actuator system with translational motion.
I. INTRODUCTION
Since its first use in [1] as three control terms – proportional, integral, and derivative (PID) – the PID controllers became ‘working horse’, at least in an industrial context, and are considered to be standard feedback strategies in most of the control applications, see also seminal literature e.g. [2]. The number of possible generalizations and extensions of PID control, including also nonlinear [3], [4] just to mention here the few, are enormous, equally as of the works dedicated to PID contro-
l implementation and tuning, see e.g. [5] for overview. Thus, only a little fraction of those (relevant for and in the context of the present work) can be mentioned here. Simple analytic PID tuning rules and associated model reduction were discussed and provided in a seminal work [6]. Also in [7], a simple approach to the automatic tuning of PID process controllers was claimed, while attaining a designpoint on the Nyquist diagram. Also the inherent challenges and limitations of an integral feedbac-
k action (i.e. in PI and PID controllers) are well known, for instance associated with the saturation-driven windup effects [8] or inability to compensate for the Coulomb friction in reversing [9]. Yet, examples of the relatively recent experimental comparisons of PID auto-tuners [10] and discussions of the operational aspects and pros and cons of PID controllers [11] confirm the continuing need for straightforward and practically accessible tuning methods. An automatic (or semi-automatic) tuning -
of standard feedback controllers (like PID-type), when using only the experimental observations and without knowledge of the system
M. Ruderman is with Department of Engineering Sciences, University of Agder, Norway. He is on annual sabbatical at Polytechnic University of Bari. Correspondence to: email michael.ruderman@uia.no The author acknowledges the financial support by NEST (Network for Energy Sustainable Transition) foundation during the sabbatical.
model, was always relevant and in focus of the practicing control engineering, cf. [2]. A typical configuration of tuning a (PID) controller in an experimental application setting is as shown schematically in Fig. 1. An input-output dynamic
non-modeled process
u
dt
ò
noise
tuning monitor
x
Fig. 1. Typical configuration of the model-free controller tuning for type-one dynamic system process: ‘monitor’ includes the sensor and data processing, and ‘tuning’ includes closing the loop for u(t) and computation of the control parameters based on the measured x(t) and the set of the tuning rules.
process is known to be open-loop stable, but there is neither an identified system model, or the available modelling assumptions are very vague and general, i.e., without specifying the structure and set of the (determined) parameters. This is a very common scenario when dealing with electro-mechanical or hydro-mechanical systems – often an industrial equipment for which an already embedded feedback control needs to be appropriately tuned. The monitor implies sensing and all necessary data process-
ing of the process output to be controlled. The tuning involves applying the necessary stimuli to the dynamic process, including closing the loop, and the set and implementation of the tuning rules. An additional assumption that specifies a large class of dynamic processes targeted in the proposed design method is that this is a type-one dynamic system, meaning the input-output system response has an integrating behavior, cf. Fig. 1. Recall that it renders the system as not stable in BIBO (bounded-
-input–bounded-output) sense, cf. e.g. [12]. Worth noting is that the type-one systems, i.e. integrating processes, have no open-loop steady-state value and reveals −90 deg phase lag at lower frequencies. This can make an experimental tuning of feedback controllers more challenging, cf. [6]. Thus, the tuning methodology proposed in this work for type-one processes, can easily be adapted for dynamic processes of type-zero, i.e. without integrating behavior. But it can be rather subject for future w-
orks, since the type-one is especially relevant for motion control systems. The rest of the paper is as follows. Section II introduces briefly a general set of assumptions for the input-output system plant without requiring an explicit model or its structure. The
arXiv:2511.21641v1 [eess.SY] 26 Nov 2025

proposed design methodology for PI-Lead control is provided in section III. An experimental evaluation shown on a noiseperturbed electro-mechanical actuator system is described in section IV. Summary and discussion are in section V.
II. INPUT-OUTPUT SYSTEM PLANT
We consider an input-output system plant without an explicit model available for the control design. The single assumptions, to be known from exploitation (correspondingly operation) of the system, can be summarized as follows.
(i) The system is of type-one, i.e. it exhibits a free integrative behavior. This case is typical for motion control systems, where a relative displacement in the generalized coordinates x is the output of interest and to be controlled. (ii) The system is stable and also minimum phase, in the sense to have no RHP (right half-plane) zeros. However, a process time-delay, i.e. exp(−sτ ) with an unknown time delay constant 0 ≤ τ < ∞, is admissible. (iii) The process can be controlled by the input valu-
e u(t), while no extra saturations of u are considered for the experimental control design and operation. (iv) The process input and output are assumed to be available in real-time, while the measured output can naturally be affected by an amplitude-bounded unbiased sensor noise.
Consequently, one can write for the system process
G(s) = x(s)
u(s) = G ̃(s) 1
s , (1)
where the unknown G ̃(s) satisfies the assumption (ii). Moreover, the overall process G(s) must have a sufficient phase margin, so that closing the loop G(s)[1 + G(s)]−1 would not destabilize the output state. If it cannot be achieved directly, an additional gaining factor k > 0 can be used to allow for a sufficient phase margin of the open-loop kG(s).
III. PROPOSED DESIGN METHOD
The proposed design method is derived from the principles of ultimate sensitivity, see e.g. [12, chapter 4.3], for which the gain margin of an open-loop plays the key role. The unknown but stable input-output process is closed by the feedback loop, upon which the (control) gain factor is gradually increased while monitoring the process output variable. For dynamic processes with the order higher than one, the output exhibits (expectedly) some transient oscillations starting from certain gain value-
 and upwards. With a further fine incrementing of the gain value, one reaches the operation state when the output starts to exhibit permanent oscillations. The corresponding gain is regarded as ultimate gain, since if it is further increased, the oscillating output tends to diverge and hence the system destabilizes. For the found ultimate gain value, it is possible to monitor (correspondingly to record) the period of permanent oscillations. The determined, this way, ultimate gain and ultimate peri-
od serve as basis for various possible calculations of the P/PI/PID control parameters. The method is known as Ziegler and Nichols tuning rule, cf. e.g. [6], and since
its introduction [13], the approach underwent a multitude of adjustments and modifications, see e.g. in [2] for details. The principle of determining experimentally the ultimate value of a controller gain (not necessarily a proportional one), and then using the corresponding oscillation frequency to determine the controller parameters forms the basis for the design method introduced below. To this end, consider first the standard PI feedback controller, with the control error e,
C(s) = u(s)
e(s) = Kp
Tis + 1
Tis , (2)
which is then parameterized by the control gain Kp ≥ 1 and the integrator time constant Ti > 0. An appropriate tuning of both parameters without a given process model G(s) is known to be a sensitive and not always trivial task to manage.
A. Integrator Time Constant
Assume first Kp = 1 and (without loss of generality) that G(s)[1 + G(s)]−1 is already stable. The latter means that an eventually required gain adjustment by k was achieved, cf. section II, so that G(s) is already including k implicitly.
Since the unknown transfer function G ̃(s) contains only stable poles and zeros and, eventually, a time delay element, its phase response starts from zero at steady-state, i.e.
∠G ̃(jω) → 0 for ω → 0. As by default, ω is the angular frequency (in rad/sec) and j is the imaginary unit of complex numbers. Following to that, the phase response of an openloop C(jω)G(jω) starts at −180 deg for ω = 0 and, then, experiences an overall increase by 90 deg per decade around
the corner frequency ωpci = T −1
i of the control C(jω). This under assumption that one starts with a sufficiently high
integrator time constant Ti so that a roll-off of G ̃(jω) at higher frequencies is not yet effective. When gradually reducing Ti, the 90 degree phase advance of C(jω) will unavoidably
confront a phase drop of G ̃(jω) at some unknown but higher frequency ω > ωpci. Note that the drop can be smaller, e.g. −90 deg per decade, or larger, e.g. −180 or −270 deg per
decade, depending on the locus of dominant poles of G ̃(s). Worth case, an even larger phase drop can appear in case of a
10-1 100 101 102 103 104
-270
-225
-180
-135
Ti=0.1 (phase reserve)
Ti=0.04 (phase reserve)
Ti=0.025 (no phase reserve)
Ti
Fig. 2. Example of shift and reduction of the phase advance of PI controller C(jω) by continuously decreasing the integrator time constant Ti.
dominant time delay. But regardless of the shape of the phase drop, the phase advance of C(jω) will be absorbed if further reducing Ti, see exemplary illustration of phase-plot in Fig. 2. As result of a continuously decreasing Ti, the output of the closed-loop C(s)G(s)[1 + C(s)G(s)]−1 starts to oscillate when applying, for instance, a step reference. By

further reducing Ti, the step response oscillations become unavoidably less and less damped. Once the permanent os
cillations occur, the ultimate integrator time constant T ̄i is determined and so the corresponding ultimate corner frequency
ω ̄pci = T ̄−1
i . The situation corresponds to having zero phase
margin φm = 180 + ∠[C(jωgc)G(jωgc)], where ωgc is the gain crossover frequency. The period of the observed, correspondingly recorded, permanent oscillations allows to estimate the gain crossover frequency ω ̄gc. Note that whether ω ̄gc < or > ω ̄pci depends on the actual, but unknown, gain
conditions of G ̃(jω). The largest of both appears crucial for a stable Ti assignment. Following to that, the tuning rule
Ti = 10
max{ω ̄gc, ω ̄pci
} (3)
is suggested for the integrator time constant. Note that the multiplicative factor ten corresponds to one decade of shifting back (i.e. to the left in frequency range) the phase advance of C(jω). The obtained assignment (3) can guarantee that the loop transfer function will have certain (convex) raising in the phase response over the −180 deg asymptote, cf. Fig. 2. At the same time, the Ti-parameter tuned by (3) is still possibly low and, therefore, does not reduce unnecessarily the control bandwi-
dth through an additional conservatism.
B. Control Gain
The determined above integrator time constant (3) guarantees that the phase response of the open-loop has enough phase advance and does not produce critical oscillations. The
initially assigned K ̄p = 1 can be, however, either under-tuned or over-tuned depending on the unknown gain characteristics and so cross-over frequency ωgc of the open-loop, cf. Fig. 3. By gradually first increasing and then decreasing the control
10-1 100 101 102 103 104
-270
-225
-180
-135 Kp=1 and tunded Ti
gc,2
gc,1
Fig. 3. Loop phase advance with phase margin depending on unknown ωgc.
gain, starting from the nominal K ̄p = 1 and correspondingly monitoring the transient overshoot
M = max(x(t)) − xref
xref
for Kp ∈ [K ̄ p × δKp
] (4)
of the process output to the applied step reference xref, one can determine the Kp-tuning for which
M ∈ [30, . . . , 40] % (5)
will be achieved. Note that the suggested tuning range δKp ∈ [0.1, . . . , 10] is also application-dependent and can be further
narrowed or expanded around the initial K ̄p-value. Further
we notice that independent of the unknown G ̃(s) dynamics,
the obtained closed-loop C(s)G(s)(1+C(s)G(s))−1 with the now tuned controller (2) will always have a dominant stable pole pair. The latter is conjugate-complex since the controlled response experiences a transient overshoot (4). Therefore, the damping ratio of that unknown but evident and dominant conjugate-complex pole pair is 0 < ζ < 1. Based on the dynamics of a conjugate-complex pole pair, its closed-loop transient overshoot to the step excitation can be computed analytically, cf. e.g. [12], b-
y using inverse of the function
M = exp
(
− πζ
√1 − ζ2
)
. (6)
Also the corresponding phase margin for the conjugatecomplex pole pair is available per calculation as
φm = arctan 2ζ
√
√1 + 4ζ4 − 2ζ2
. (7)
Following to (6) and (7), the obtained control overshoot (5) will lead to the loop phase margin φm ∈ [40, . . . , 30] deg.
C. Lead Phase Enhancement
A Lead-compensator L(s), see e.g. [12] for basics, is going to be used as a standard flexible tool for the loop shaping, cf. e.g. [14]. This is purposefully chosen instead of an (augmented by low-pass filter) pure differential term of a PID control, cf. [2]. Note that our goal is to provide an additional phase advance within the critical frequency range around ωgc and, this way, to enhance the overall robustness and performance of the unknown loop transfer function C(s)L(s)G(s). This must be achie-
ved without significantly changing the residual frequency characteristics of C(s)G(s). The transfer characteristics of a standard Lead-compensator can be written as
L(s) = KL
τs + 1
ατ s + 1 with 0 < α < 1, (8)
with further design parameters τ, KL > 0. Recall that τ controls the effective frequency range of a Lead-compensator, while α determines the maximal achievable phase lead 0 < φL < 90 deg at the angular frequency
ωmax(φ) = √1ατ . (9)
Also to recognize, from (8), is that the Lead-compensator gain characteristics have |L(0)| → KL and |L(∞)| → KLα−1. With the above summarized properties in mind, we assign α = 0.1. The latter provides a sufficient phase lead φL ≈ 55 deg at ωmax(φ) frequency. For deciding ωmax(φ) of the Leadcompensator, recall the determined corner frequency 1/Ti of the PI controller, and the fact that its phase advance saturates over one decade in frequency range. In order to increase and further extend the overal-
l phase advance, another half-decade of an effective frequency range of the Lead-compensator can also be used. This results in the suggested ωmax(φ) = 101.5/Ti. In order to not affect the overall loop gain at lower frequencies

and, thus, not impair the already tuned PI-controller, the Leadgain is set to KL = 1. Summarizing the above mentioned steps of the Lead-compensator tuning, the latter results in
L(s) =
(101.5/Ti
)s + 1 (100.5/Ti
)s + 1 . (10)
An exemplary exposition of the loop transfer function with and without the Lead-compensator, i.e. C(jω)L(jω)G(jω) and C(jω)G(jω) respectively, is shown in Fig. 4. Note that both the PI-controller C(s) and the Lead-compensator L(s) are designed according to the tuning procedure introduced above. A modeled plant transfer function G(s) of the recent experimental system (see [15], [16]) is used here only for the sake of a numerical emulation of the dynamic process.
10-1 100 101 102 103 104
-100
-50
0
50
100
10-1 100 101 102 103 104
-270
-225
-180
-135
-90
Fig. 4. Exemplary loop transfer function with i.e. C(jω)L(jω)G(jω) and without i.e. C(jω)G(jω) the designed Lead-compensator.
IV. EXPERIMENTAL EVALUATION
The experimental system used in this work for evaluation of the developed practical model-free PI-Lead control design is shown in Fig. 5. The system was previously used in various control related studies, see e.g. [15], [16], while more details on modeling and system parameters can be found in [15], [17]. Note that no model or parameter values are used in this study, so that the dynamic process u(t) 7→ x(t) complies entirely with Fig. 1 and assumptions made in section II. Here, u(t) is the control-
lable input voltage of the voice-coil-motor (VCM) and x(t) in the output relative displacement, measured remotely and hence essentially noisy. A real-time control board operates the system with the set 10 kHz sampling frequency. Since the acting gravity force is considerable (with respect to the overall control signal range), it is pre-compensated in feed-forwarding by the constant value obtained from the gravity acceleration and the known overall moving mass and input (voltage-to-force) gain. Oth-
erwise, the motion dynamics is perturbed by an input-gain nonlinearity (see [17] for the identified details), coil-related force ripples, and nonlinear friction (see [18] for basics) in the translational bearing assembly.
Fig. 5. Experimental setup of electro-mechanical actuator system [15], [16] with one translational degree of freedom x (in laboratory environment).
The control design is performed by following the tuning steps described in sections III-A–III-C. It should be noticed that for the closed-loop becomes responsive at all and thus the integrator tuning can start, a loop gaining factor k = 300 was initially assigned, cf. section II. Therefore, the integrator time constant tuning followed by the successive gain tuning start not with Kp = 1, cf. section III-A, but with Kp = k = 300. With respect to the limited displacement range, which is about 0.02 m,-
 the step reference was set to xref = 0.009 m. The integrator time constant tuning was by gradually decreasing Ti, starting from Ti = 0.1 and going until the permanent oscillations of x(t) appeared with Ti = 0.031. The measured PI-control response with the initial and penultimate Ti = 0.032 values are exemplary shown over each other in Fig. 6. The recorded ωgc and ωpci = 1/Ti values (both in
0.5 1 1.5 2 2.5 3 3.5 4 4.5 5
t (s)
0
0.005
0.01
0.015
0.02
x (m)
Ti=0.032
Ti=0.1
Fig. 6. Measured step response of PI-control with the initial Ti = 0.1 and penultimate (i.e. before permanent oscillations appeared) Ti = 0.032.
rad/sec), cf. section III-A, are exemplary listed in Table I. Note
TABLE I RECORDED TUNING STEPS OF INTEGRATOR TIME CONSTANT
ωc
pi 10.0 20.0 25.0 28.57 30.3 31.25 32.26
ωgc 0 18.92 22.44 24.44 25.43 22.43 20.73
that here ωgc means the monitored frequency of the appearing oscillations, while ωgc = 0 means no oscillations occurred for the corresponding ωpci control assignment. The last column in
Table I shows the ultimate values ω ̄pci and ω ̄gc, cf. (3). For tuning the control gain, Kp was first incrementally increased and then decreased, starting from the initial Kp = 300

value and monitoring the overshoot peaks (4). The overall recorded M (Kp) dependency is depicted in Fig. 7 for the sake of a better exposition. Both the initial and the determined (by
150 200 250 300 350 400 450 500 550 600 650
Kp
0
0.1
0.2
0.3
0.4
0.5
0.6
M
recorded M initial value tuned value
Fig. 7. Recorded overshoot M over the varying Kp gain.
the tuning rule (5)) Kp-gains are highlighted in the figure. The resulting PI-control, upon the executed tuning, is
C(s) = 139.5s + 450
0.31s . (11)
Finally, based on the derived tuning rule (10), the resulting Lead-compensator is directly given by
L(s) = 0.031s + 1
0.0031s + 1 . (12)
Three reference step values xref = {0.005, 0.01, 0.015} m are used for comparing the response of the tuned PI and PILead, i.e. C(s) and C(s)L(s), controllers. The experimental results are shown in Fig. 8. Note that the control tuning was
1 1.5 2 2.5 t (s)
0
0.005
0.01
0.015
0.02
x (m)
C(s)
C(s)L(s)
Fig. 8. Step response comparison of the tuned C(s) and C(s)L(s) controls.
performed closer to the second reference point xref = 0.01 m, while the position-dependent impact of nonlinearities, in particular of the actuator input-gain and Coulomb friction, are essentially large. Nevertheless, the performance of the tuned PI- and PI-Lead-controllers is well in accord with analysis of deriving the tuning rules. Recall that especially the nonlinear Coulomb friction cannot be effectively compensated by an integral feedback action during a set-point control task, see [9]. The e-
ffectiveness and necessity of the Lead-compensator becomes even more evident when applying an external (not necessarily matched) disturbance to the closed-loop system. For that purpose, the moving cartridge of the actuator (see
Fig. 5) was mechanically perturbed by temporary pressing down and then releasing. It should be noted that such manual action cannot be realized with an exactly same effort and same time instants for two consecutive experiments. Nevertheless, the comparison is well interpretable as from Fig. 9, for C(s) and C(s)L(s) controllers with step reference xref = 0.01 m. One can recognize the differences in both transient overshoot and settling after an external disturbance was released.
1 2 3 4 5 6 7 8 9 10
t (s)
0
0.005
0.01
0.015
0.02
x (m)
C(s) C(s)L(s)
disturbed disturbed
Fig. 9. Step response of C(s), C(s)L(s) controls with external disturbance.
Finally, the tuned PI-Lead controller is compared with a standard PID controller which was tuned by the Ziegler and Nichols ultimate sensitivity method, cf. e.g. [12]. Recall that this widely practicing heuristic tuning method requires to
determine the ultimate gain K ̄p and ultimate period Tu which both correspond to permanent oscillations of the closed-loop system and, thus, characterize a boundary-stable case. Then,
the PID control parameters can be assigned as Kp = 0.6 K ̄ p, Ti = 0.5 Tu, and Td = 0.125 Tu, following the so-called Ziegler and Nichols tuning rules, cf. e.g. [2], [12]. Here Td is the (standard) differentiator time constant of PID control. The
experimentally determined ultimate values are K ̄p = 1290 and Tu = 0.098 sec. Following to that, the PID-control tuned by the Ziegler and Nichols method results in
CPID(s) = 774
(
1+ 1
0.049s + 0.012s
)
F (s). (13)
Recall that an additional low-pass F (s), here designed as Butterworth with a relatively hight cutoff frequency of 1 kHz, is indispensable. It brings CPID(s) to become a proper transfer function and thus implementable. The measured response of the tuned PID control (13) and PI-Lead control (11), (12) to the step reference xref = 0.01 m are shown opposite each other in Fig. 10. One should notice that the final settling of the PID control appears faster since it executes several periods of the trans-
ient oscillations and can, this way, compensate faster for the nonlinear Coulomb friction, see [9] for details. Also a higher control dither contributes to it. Should a PI-Lead controller be re-tuned to have a similar oscillating response, a comparable settling would be achieved. At the same time, one can recognize that the PID control response, tuned by the Ziegler and Nichols method, behaves more aggressive and with very large over- and undershoots, that can be less acceptable in multiple applic-
ations. The control values shown in Fig. 10 below confirm the above given explanations as well.

0.5 1 1.5 2 2.5 3 3.5
t (s)
0
0.005
0.01
0.015
0.02
x (m)
PI-Lead (proposed tuning) PID (Ziegler & Nichols tuning)
0.5 1 1.5 2 2.5 3 3.5
t (s)
0
2
4
6
8
10
u (V)
PID (Ziegler & Nichols tuning) PI-Lead (proposed tuning)
Fig. 10. Step response of the tuned C(s)L(s) and CPID(s) controllers: the measured output value (above) and control value (below).
V. SUMMARY AND DISCUSSION
A novel practical model-free design of the PI-Lead control, in other words an experimental tuning method, is proposed. The method relies on the ultimate sensitivity principles but differs significantly from the well-known heuristic Ziegler–Nichols ultimate sensitivity approach. The developed and analyzed procedure includes three consecutive steps for (i) determining the integrator time constant, (ii) fixing the control gain, and (iii) assigning directly the Lead-compensator which enhances robustne-
ss and transient performance. All steps are straightforward and simple to implement on the stable dynamical input-output processes of the type-one. The first half of the paper is dedicated to analysis and introduction of the tuning method. Another half of the paper provides a detailed and illustrative experimental study, which is accomplished on a noise-perturbed electro-mechanical actuator system and without use of any modeling or parameters knowledge. Following remarks and preliminary conclusion-
s can be stated in a discussion. The proposed tuning method is robust against the feedback noise. Indeed, the proposed tuning of the integrator time constant relies on finding the ultimate oscillations due to the missing phase margin. Such oscillations appear unambiguously (i.e. unmistakably detectable) at lower frequencies and do not depend on the sensor noise. Although the possible nonlinearities and perturbation can reshape oscillations to a certain degree, they do not change principally the pe-
riod. These properties result directly from both (dominant) poles of the system in the origin: one due to the controller integrator and another due to the type-one system process. Also the monitoring of transient overshoot by a subsequent variation of the control gain is less sensitive to the system
noise. The developed assignment of the Lead-compensator is generic enough to provide a sufficient phase advance in the detected (critical) frequency range of the open-loop and, simultaneously, to not change the already shaped loop characteristics at lower frequencies. Supposedly, the developed tuning method can also be directly used, or at least slightly adapted, for the processes which include also an oscillatory dynamics, e.g. [19], time-delay elements, or zero(s) in the origin, e.g. [20]. These-
 theoretical and experimental research directions will be subject of the future works.
REFERENCES
[1] N. Minorsky, “Directional stability of automatically steered bodies,” Journal of the American Society for Naval Engineers, vol. 34, no. 2, pp. 280–309, 1922. [2] K. J. A ̊ stro ̈m and T. Ha ̈gglund, Advanced PID control. ISA Instrumentation, Systems and Automation Society, 2006. [3] H. Khalil, “Universal integral controllers for minimum-phase nonlinear systems,” IEEE Transactions on Automatic Control, vol. 45, no. 3, pp. 490–494, 2002. [4] M. Ruderman, “Nonlinear integral extension of PID cont-
rol with improved convergence of perturbed second-order dynamic systems,” Advanced Control for Applications: Engineering and Industrial Systems, vol. 7, no. 2, p. e70017, 2025. [5] K. H. Ang, G. Chong, and Y. Li, “PID control system analysis, design, and technology,” IEEE Transactions on Control Systems Technology, vol. 13, no. 4, pp. 559–576, 2005. [6] S. Skogestad, “Simple analytic rules for model reduction and PID controller tuning,” Journal of Process Control, vol. 13, no. 4, pp. 291309, 2003.-
 [7] I. J. Gyo ̈ngy and D. W. Clarke, “On the automatic tuning and adaptation of PID controllers,” Control Engineering Practice, vol. 14, no. 2, pp. 149–163, 2006.
[8] P. Hippe, Windup in control: its effects and their prevention. Springer, 2006. [9] M. Ruderman, “On convergence analysis of feedback control with integral action and discontinuous relay perturbation,” Communications in Nonlin. Science and Num. Simulation, vol. 145, p. 108698, 2025. [10] T. Ha ̈gglund and J. L. Guzma ́n, “Give us PID controllers and we can control the world,” IFAC-PapersOnLine, vol. 58, pp. 103–108, 2024. [11] J. Berner, K. Soltesz, T. Ha ̈gglund, and K. J. A ̊ stro ̈m, “An exp-
erimental comparison of PID autotuners,” Control Engineering Practice, vol. 73, pp. 124–133, 2018. [12] G. Franklin, J. Powell, and A. Emami-Naeini, Feedback control of dynamic systems, 8th ed. Pearson, 2019. [13] J. G. Ziegler and N. B. Nichols, “Optimum settings for automatic controllers,” Transactions of the American society of mechanical engineers, vol. 64, no. 8, pp. 759–765, 1942. [14] W. C. Messner, M. D. Bedillion, L. Xia, and D. C. Karns, “Lead and lag compensators with complex poles and -
zeros design formulas for modeling and loop shaping,” IEEE Control Systems Magazine, vol. 27, no. 1, pp. 44–54, 2007. [15] M. Ruderman, “Motion control with optimal nonlinear damping: from theory to experiment,” Control Engineering Practice, vol. 127, p. 105310, 2022. [16] M. Ruderman, “Loop shaping of hybrid motion control with contact transition,” in IEEE European Control Conference (ECC), 2025, pp. 2921–2926. [17] B. Voß, M. Ruderman, C. Weise, and J. Reger, “Comparison of fractional-order and -
integer-order H∞ control of a non-collocated twomass oscillator,” IFAC-PapersOnLine, vol. 55, pp. 145–150, 2022.
[18] M. Ruderman, Analysis and compensation of kinetic friction in robotic and mechatronic control systems. CRC Press, 2023.
[19] M. Ruderman, “Adaptive time delay based control of non-collocated oscillatory systems,” in IEEE 32nd Mediterranean Conference on Control and Automation (MED), 2024, pp. 125–130.
[20] R. Tavares and M. Ruderman, “Frequency-domain experimental setup for mechatronic and suspension system components,” in IEEE International Conference on Mechatronics (ICM), 2021, pp. 1–6.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:35.716Z
- **Text Length:** 30513 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 6 of 6
