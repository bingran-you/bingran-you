# PDF Document: Srinivasu et al. - 2025 - Bifurcation-Based Guidance Law for Powered Descent Landing.pdf

**File Path:** Srinivasu et al. - 2025 - Bifurcation-Based Guidance Law for Powered Descent Landing.pdf

**Processed Date:** 2026-02-10T18:15:12.910Z

**File Size:** 3287.79 KB

**Total Pages:** 12

**Extracted Pages:** 12

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3325

**Title:** Bifurcation-Based Guidance Law for Powered Descent Landing

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Bifurcation-Based Guidance Law for Powered Descent Landing
Neon Srinivasu ∗, Amit Shivam †, and Nobin Paul ‡
This paper develops a new guidance law for powered descent landing of a rocket-powered vehicle. The proposed law derives the acceleration command for a point mass model of the vehicle by expressing velocity as a dynamical system undergoing supercritical transcritical bifurcation with three bifurcation parameters. The parameters are designed such that the stable equilibrium points of the velocity dynamics correspond to the guided targeting state, that is, the landing point. Numerical simulations ar-
e performed to demonstrate the working of the proposed guidance law.
I. Introduction
P
OWERED descent phase is arguably the most intricate part of the entry, descent, and landing part of the precision landing technology. Powered Descent Guidance(PDG) law primarily determines the landing vehicles direction of motion and speed leading it to fly a trajectory satisfying targeting conditions, such as to reach the designated landing site. In this regard, an utmost important requirement by the PDG law is that it has to be computationally tractable on physical flight processors.
PDG algorithms can be broadly classified into three categories: Polynomial guidance laws [1–8], optimal control [9–25] and learning based methods [26–28]. Its been over 50 years since the famous Apollo Powered Descent Guidance(APDG) law [1] landed the Apollo Lunar Module on the Moon. Owing to its computational simplicity and closed-form solutions, APDG law has been the baseline powered descent guidance approach for many actual missions [2–5]. APDG and Apollo E-guidance law [6] assumes a thrust acc-
eleration vector profile as quadratic and linear functions of time, respectively. For APDG law the coefficients of the quadratic polynomial are determined to satisfy initial and final positions and velocity constraints along with final acceleration. In E-guidance law only initial and final positions and velocity constraints can be satisfied. The main issue of polynomial guidance laws is the determination of time-to-go that specifies the burn time. Time-to-go determines the fuel consumed and whethe-
r the thrust will saturate between minimum and maximum allowable bounds. When APDG law is used on actual missions the time-to-go is determined using trial and error method on ground. In Ref. [7] acceleration is expressed as functions of position and velocity with two tunable gains and specific choices of gains leads to APDG and E-guidance laws. The tuning parameters are used as trade off quantity between trajectory shaping and fuel usage. Ref. [8] recently investigated on a family of guidance laws-
 where acceleration is expressed as fractional polynomial of time-to-go and showed that APDG and E-guidance laws belong to that family.
Optimal control based PDG laws are widely investigated in the literature because fuel optimality is a necessary requirement for landing missions. Fuel optimal PDG problem can be solved using direct and indirect methods. Direct methods involve approximating the optimal control problem with collocation methods and solving it numerically using nonlinear optimization methods. Indirect method concerns with Pontryagin’s maximum principle to form Hamiltonian and first-order necessary conditions to solve -
two point boundary value problem. Interested readers are directed to Ref. [9] for more details on optimal control theory. Ref. [10] first used indirect method to formulate guidance law which minimizes commanded acceleration and the obtained result was surprisingly E-guidance law. In that work, cost function is modelled as integral of quadratic acceleration, which is not theoretically fuel optimal but control effort optimal. Fuel optimal consideration requires integral of thrust magnitude not quadr-
atic index [11]. An important result optimal control method reveals is that the solutions to fuel optimal PDG are such that thrust profile has bang-bang structure operating at either maximum or minimum thrust bounds. In a constant gravity field, three dimensional fuel optimal PDG problem Refs. [12–14] showed that there can be at most two switching in optimal thrust magnitude. In non-constant gravity field, depending on how gravity is modelled number of thrust switching varies. Optimal Thrust
The paper was accepted for presentation at the AIAA SciTech Forum 2026 but was later withdrawn by the authors - budget constraints. ∗Department of Mechanical and Aerospace Engineering, Syracuse University, Syracuse, NY 13244, USA, neonsrin@syr.edu †Research Assistant, Department of Electrical and Computer Engineering, University of Porto, Porto, Portugal, amitshivam@alum.iisc.ac.in ‡Post Doctoral Researcher, Department of Aerospace Engineering, KAIST, nobinpaul@kaist.ac.kr
1
arXiv:2511.18603v1 [eess.SY] 23 Nov 2025

profile with thrust pointing as a constraint in PDG problem is analyzed in Refs. [15, 16]
Although, direct methods give enough information on how thrust should behave for fuel optimality, when several operational constraints on the generated trajectory are considered, such as, velocity, thrust pointing, glide-slope it becomes difficult to analyze the problem analytically. Thus several numerical optimization techniques, are investigated in Refs. [17–25]. Among the optimization methods, convex optimization is frequently used to solve PDG problem where, convex problem is formulated and so-
lved using interior point method [17, 18]. Since, thrust is non-convex input constraint (due to non-zero lower thrust bound), it can be mapped to a convex set by introducing additional slack variable and can be solved using lossless convexification method [19–25]. That method has flown onboard a real rocket dubbed G-fold algorithm [24, 25]. Main drawback of optimization methods is that is computationally expensive and may not be feasible to implement onboard the vehicle. Moreover, convergence of d-
irect methods relies heavily on initial guess of the unknown variables and global convergence to a local optimum isn’t guaranteed. If the optimal solution’s convergence time is greater than the guidance cycle then the system fails.
In recent times, learning based methods have been used to find solution to fuel optimal PDG problem. Ref. [26] applied deep neural network to learn relationship between initial condition and optimal state-control pairs. Therein, calculating all of the state-control variables demands heavy computation. Ref. [27] combined the supervised learning and optimal control theory to reduce the dimension of learning space thereby reducing computation load. Therein, the learning process is supported by necess-
ary conditions on Pontryagins’s minimum principle to find critical parameters required to obtain optimal solution. Ref. [28] extends the work in Ref. [27] by using mixed-input deep neural network to map the relationship between the optimal problem inputs and the critical parameters, which reduces the computational time. In general, to achieve high accuracy of the learning result it is required to generate large-scale neural networks to calculate optimal state-control pair for given input demanding-
 heavy computational load. Also, learning based methods lacks theoretical proof of convergence to optimal solution.
This work proposes a new bifurcation based PDG law (BPDG) based on bifurcation phenomenon in dynamical systems theory [29–31]. The velocity dynamics is modelled as a dynamical system undergoing supercritical transcritical bifurcation with three bifurcation parameters. Stability properties of the proposed system is analyzed and closed-form analytical expressions are derived for determining the bifurcation parameters as a function of initial position and velocity and final targeting condition. Furth-
er, deterministic performance characteristics of the position, velocity and acceleration profiles, that is, the monotonic nature along with closed-form expression for the extreme values is established. Overall, BPDG law enjoys same computational simplicity and elegancy of APDG.
The remainder of this paper is arranged as follows: Section II defines the problem statement. The proposed velocity dynamics is discussed in Sec. III. Section IV presents proposed guidance law, which is followed by simulation studies in Sec. V. Section VI concludes this paper.
II. Problem Statement
In cartesian coordinate system the three-dimensional point-mass powered descent dynamics for planetary landing is described by
r§ = V (1)
V§ = g + A (2) A = T(t)
m(t) (3) m§ = − ‖T(t) ‖
vex
(4)
where r, V, A, T ∈ R3 are the position, velocity, acceleration, and thrust vector of the vehicle and g is constant gravitational acceleration vector. vex is the exhaust velocity of the engine and is a constant. The aerodynamic forces on the vehicle are neglected by assuming the planet atmosphere is sufficiently thin. Subscripts 0 and f denote initial and final values of corresponding physical quantities. The guidance objective is to determine A that transfers the vehicle from the powered descent i-
nitiation(PDI) position r0 to the powered descent termination(PDT) position rf. It is desired that the guidance command A has deterministic performance characteristics and easily computable.
2

r0
V0
rf
g
Landing site
Generated
trajectory Thrust
X
Y
Z
Fig. 1 Problem Description
III. Proposed Velocity Dynamics
The velocity dynamics of the landing vehicle in each of the three axis is proposed as,
Vi = r§i =
(
airi + ri2
)
bi + ci, i = x, y, z (5)
where a, b, c ∈ R are bifurcation parameters to be designed. Subscript i corresponding to three axes are excluded in few figures and analysis and, all the results are valid true for all i = x, y, z. The equilibrium points rie1, rie2 of the
considered dynamical system are obtained using V§ = 0,
rie1 = − ai
2+
√
ai2
4 − ci
bi
(6)
rie2 = − ai
2−
√
ai2
4 − ci
bi
(7)
Further, the stability properties can be determined using,
∂r§i
∂ri r=rie1
=2
√
a i2 b i2
4 − cibi (8)
∂r§i
∂ri r=rie2
= −2
√
ai2 bi2
4 − cibi (9)
Eqs. (8) and (9) indicates that the equilibrium point rie1 is unstable and rie2 stable. A typical plot of the variation of V as a function of r is shown in Fig. (2) where red and blue dot represents unstable and stable equilibrium points, respectively. The nature of velocity depends on where the initial position r0 lies. This work considers 0 < ri0 ≤ −a/2. The plot of the variation of equilibrium points as a function of parameter a with fixed b > 0 for different c is shown in Fig. (3) where, the b-
lue and red curve represents stable and unstable equilibrium points, respectively. In Fig. (3), when c ≤ 0 there always exist two equilibrium points, one stable and another unstable. But, when c > 0 equilibrium points exist iff (a2/4 − c/b) > 0 which can be readily concluded using Eqs. (6) and (7).
3

−a
2
−a
2+
r
a2
4 −c
b
−a
2−
r
a2
4 −c
b
V = r ̇
r
− a2b
4 +c
Fig. 2 Velocity profile
Using the method of separation of variables the solution of Eq. (5) is obtained as
ri(t) =
√ Pi
bi
tanh
(
−√Pibi (t + Ki)
)
− ai
2 (10)
where, Ki = − √P1ibi
tanh−1
( √biri0 + ai
√bi/2
√Pi
)
(11)
where, Pi = (ai2bi)/4 − ci. The settling value of distance dynamics ri (t) as t → ∞ is
ri (t → ∞) = − ai
2−
√
ai2
4 − ci
bi
(12)
corresponding to the stable fixed point which is the guided targeting state, rif = (rxf, ryf, rzf).
A. Designing Bifurcation Parameters
The three Bifurcation parameters ai, bi, ci are designed to satisfy vehicles initial position and velocity with final position constraints as described below. Referring to Fig. (1) we impose the constraints so that the velocity monotonically decreases from Vi0 at PDI to zero at PDT. The extreme value of V is obtained as,
dVi dri
= aibi + 2biri = 0 (13)
=⇒ ri = −ai/2 (14)
Vi |r=−ai/2 = − ai2bi
4 + ci (15)
Vehicles initial Velocity Vi0 is equated to the extreme value in Eq. (15) which leads to,
− ai2bi
4 + ci = Vi0 (16)
ci = Vi0 + (ai2bi)/4 (17)
Further, The value of r at which the extreme value occurs is equated to vehicles initial position constraint as,
ai = −2ri0 (18)
4

a
re
(0, 0)
(a) Bifurcation diagram for c < 0
a
re
(0, 0)
(b) Bifurcation diagram for c = 0
a
re
(0, 0)
(c) Bifurcation diagram for c > 0
Fig. 3 Bifurcation diagrams for different choices of c
In addition, if rif is the final targeting constraint then the stable equilibrium point rie2 = rif which readily gives,
rif = − ai
2−
√
ai2
4 − ci
bi
(19)
bi = −Vi0/(rif − ri0)2 (20)
Eqs. (17),(18) and (20) gives the closed-form expression for determining bifurcation parameters. With the specific design of bifurcation parameters and referring to Fig. (1) it can be readily observed that the maximum velocity of the vehicle occurs at the powered descent initiation and it monotonically reduces to zero.
B. Powered Descent Termination Time
As seen from Eq. (12) that the time taken to reach the equilibrium state is infinite. Hence, we consider error bound as, r (tis) − r (tif) = εi and calculate the time taken to reach the bound. Solving,
r (tsi) − rif = εi (21)
5

Substituting for r (tsi) using Eq. (5) readily gives
tsi = 1
2bi
(rif + ai
2
) ln εi (ri0 + rif + ai)
(2rif + ai + εi) (ri0 − rif) (22)
Eq. (22) gives the expression for time taken by the vehicle to reach the final landing site with εi error. Since, tsi in each of the three axes depend on corresponding parameters ai, bi, ci, we express
Ts = max{tsi; i = x, y, z} (23)
where Ts is the powered decent termination time.
IV. Guidance Command Differentiating Eq. (5) leads to
Ai = V§i = r•i = 2bir3
i + 3aibi2ri2 +
(
ai2bi2 + 2bici
)
ri + aibici; i = x, y, z (24)
Eq. (24) describes the acceleration to be commanded to the vehicle so that the velocity and distance dynamics behaves
−a
2r
V = r ̇
A∗
A = V ̇
r∗
Fig. 4 Acceleration profile
as given in Eqs. (5) and (12). A typical plot of variation of acceleration experienced by the vehicle with the proposed velocity dynamics in Eqs. (5) is shown in Fig. (4). The acceleration starts with zero at ri = −ai/2 monotonically increasing and decreasing to zero towards the end of PDT time. The maximum acceleration demanded by the vehicle can be obtained as
dAi dri
= 6bi2ri2 + 6aibi2ri + (2bici + ai2bi2) = 0 (25)
=⇒ ri = − ai
2±
√
ai2
12 − ci
3bi
(26)
Substituting Qi =
√
ai2/12 − ci/3bi of Eq. (26) in Eq. (25) leads to
Ai∗ = −2bi2Q3
i + ai2bi2Qi
2 − 2Qibici (27)
With the analysis discussed so far, the sequence to generate the guidance command are detailed in Algorithm 1.
6

Algorithm 1: Guidance logic
1: Initialize ri0, Vi0, rfi 2: Determine ai , bi, and ci using Eqs. (17), (18), and (20), respectively 3: Compute Ts using Eq. (23) 4: Use (ai, bi, ci) to generate the guidance command using Eq. (24)
V. Simulation Results
Numerical simulations of the BPDG algorithm is demonstrated on a vehicle landing on Mars with martian gravity g = 3.721 m/s2 . The total initial mass m0 = mV (Vehicle mass) + mF0 (Fuel mass) = 2000 kg where, mV = 1500 kg, and mF0 = 500 kg. The exhaust velocity of the engine eex = 2206.575 m/s. The allowed error in guided targeting state εi = 0.1 m.
A. Sample Landing Scenario
The vehicles initial conditions at which powered descent starts are tabulated in Table (1)
PDI Position Velocity PDT position
x0 = 1900 m Vx0 = −40 rxf = 0
y0 = 1000 m Vy0 = −10 ryf = 0
z0 = 3100 m Vz0 = −50 rzf = 5
Table 1 Initial and Terminal conditions
The bifurcation parameters and settling times corresponding for the PDI are given in Table (2). Thus, PDT time should be chosen as Ts = max{250.4512, 495.1718, 341.4793} = 495.1718 s. Fig. (5) shows the trajectory terminating at specified target with error 1.6908, 10, 0.077 cm in x, y and z axes respectively, which is less than ε = 0.1 m as desired. Fig. (6a) clearly shows the position histories where z position reaches 5 m directly above the landing site with x, y position reducing to zero with a-
llowed error. Velocity monotonically reduces to zero from PDI position in Fig. (6b) as shown from the analysis with maximum velocity occurring at PDI time. Acceleration components Ax, Ay initially increases then reduces to zero with monotonic nature as evident from Fig. (6c) and Az reaching −g nullifying the martian gravity. The maximum accelerations calculated analytically using Eq. (27) are ( A∗x, A∗y, Az∗) = (0.6482, 0.0769, 0.6218) m/s2, shown in Fig. (6c) but, along z-axes the plot shows Az∗ -
− g = −3.0992 m/s2. Fuel mass history in Fig. (6d) shows that 221.307 kg of fuel is consumed.
Axes a b × 10−5 c ts x -3800 1.1080 0 250.4512 y -2000 1 0 495.1718 z -6200 0.5219 0.1616 341.4793
Table 2 Simulation Parameters
B. Powered descent from multiple initial conditions
This demonstration of BPDG considers different initial positions as powered descent initiation conditions. All the simulation parameters are listed in Table (3). The vehicle is assumed to be heading toward the landing site with initial velocity of (Vx0, Vy0, Vz0) = (−30, −10, −50) m/s. PDT condition and all other parameters are same as mentioned for Case A. Fig. (7) shows three different powered descent trajectories for varying PDI conditions. Fig. (8a) shows the net
thrust acceleration magnitude profiles calculated as
√
T2x + T2y + Tz2 N where, T = m A. Net Velocity magnitude profile is shown in Fig. (8b) reducing to zero as desired. Fuel mass history is plotted in Fig. (8c) showing the amount of fuel consumed.
7

0
1000
1000
2000
3000
500 2000
1500
1000
0 500
0
X 1900 Y 1000 Z 3100
X 0.0169098 Y 0.1 Z 5.00077
Fig. 5 Powered Descent Trajectory
0 100 200 300 400 500
0
500
1000
1500
2000
2500
3000
3500
495.1 495.2
0
2
4
6
X 495.172 Y 5.00077
(a) Position profiles
0 100 200 300 400 500
-50
-40
-30
-20
-10
0
10
492 494
-20
-10
0
10-4
(b) Velocity profiles
0 100 200 300 400 500
-4
-3
-2
-1
0
1
2
X 31.2791 Y 0.648253
X 40.7764 Y -3.09919
X 65.7809 Y 0.0769799
(c) Acceleration profiles
0 100 200 300 400 500 600
200
250
300
350
400
450
500
X 495.172 Y 221.616
(d) Fuel mass history
Fig. 6 Results for case A: Sample powered descent landing
8

Case (x0, y0, z0) km (a, b, c) (txs, tys, tys), s Ts, s
1 (3, 0.5, 2)
(ax, ay, az)=(-6000,-1000,-4000) (bx, by, bz) =(0.3333,4,1.2562) ×10−5 (cx, cy, cz)=(0,0,0.2509)
txs = 550.1041 tys = 230.2560 tzs = 211.3524
550.1041
2 (3.5, 1, 2.5)
(ax, ay, az)=(-7000,-2000,-5000) (bx, by, bz) =(0.2448,1,0.8032) ×10−5 (cx, cy, cz)=(0,0,0.2006)
txs = 650.7804 tys = 495.1718 tzs = 269.9030
650.7804
3 (4, 1.5, 3)
(ax, ay, az)=(-8000,-3000,-6000) (bx, by, bz) =(0.1875,0.4444,0.5574) ×10−5 (cx, cy, cz)=(0,0,0.1670)
txs = 752.6512 tys = 773.1689 tzs = 329.4624
773.1689
Table 3 Simulation Parameters
0
500
4000
1000
1500
2000
2500
3000
0
2000 500 1000
0 1500
Case 1 Case 2 Case 3
X 4000 Y 1500 Z 3000 X 3500 Y 1000 Z 2500 X 3000 Y 500 Z 2000
Fig. 7 Powered Descent Trajectories
VI. Conclusion
This paper presents a novel BPDG law for powered descent phase of planetary pin-point landing. The velocity dynamics of the vehicle is expressed as algebraic function of position and three bifurcation parameters. The bifurcation parameters are varied so that the stable equilibrium point is made to correspond to the guided targeting condition. Closed-form analytical expressions are derived for determining the bifurcation parameters as a function of initial position and velocity and final targeting -
condition. Simulation results comply with the analytic findings. Future work directions include developing the methodology considering fuel optimality and operational constraints in the BPDG problem.
9

0 200 400 600 800
500
1000
1500
2000 Case 1 Case 2 Case 3
(a) Net thrust acceleration magnitude profiles
0 200 400 600 800
0
10
20
30
40
50
60 Case 1 Case 2 Case 3
(b) Net velocity magnitude profiles
0 200 400 600 800
100
200
300
400
500 Case 1 Case 2 Case 3
550.102
202.156
202.158
202.16
650.78
170.578
170.58
170.582
170.584
X 773.169 Y 138.783
X 550.104 Y 202.158
X 650.78 Y 170.58
(c) Fuel mass histories
Fig. 8 Results for case B: Multiple powered descent landings
Acknowledgments
This work was carried out during the author’s tenure at the Autonomous Vehicles Laboratory, Department of Aerospace Engineering, Indian Institute of Science, Bangalore, India.
References
[1] Klumpp, A. R., “Apollo lunar descent guidance,” Automatica, Vol. 10, No. 2, 1974, pp. 133, 146. https://doi.org/https://doi. org/10.1016/0005-1098(74)90019-3.
[2] Ives, D., Geller, D., and Carman, G., “Apollo-derived Mars precision lander guidance,” 23rd Atmospheric Flight Mechanics Conference, AIAA Paper 1998-4570, 1998. https://doi.org/10.2514/6.1998-4570.
[3] Wong, E. C., Singh, G., and Masciarelli, J. P., “Guidance and Control Design for Hazard Avoidance and Safe Landing on Mars,” Journal of Spacecraft and Rockets, Vol. 43, No. 2, 2006, pp. 378–384. https://doi.org/10.2514/1.19220.
[4] Sostaric, R., and Rea, J., “Powered Descent Guidance Methods For The Moon and Mars,” AIAA Paper, 2005-6287,Aug.2005. https://doi.org/10.2514/6.2005-6287.
[5] Steinfeldt, B. A., Grant, M. J., Matz, D. A., Braun, R. D., and Barton, G. H., “Guidance, Navigation, and Control System Performance Trades for Mars Pinpoint Landing,” Journal of Spacecraft and Rockets, Vol. 47, No. 1, 2010, pp. 188–198. https://doi.org/10.2514/1.45779.
10

[6] Cherry, G., “A general, explicit, optimizing guidance law for rocket-propelled spaceflight,” Astrodynamics Guidance and Control Conference, AIAA Paper 1964-638, Aug.1964. https://doi.org/10.2514/6.1964-638.
[7] Lu, P., “Augmented Apollo Powered Descent Guidance,” Journal of Guidance, Control, and Dynamics, Vol. 42, No. 3, 2019, pp. 447–457. https://doi.org/10.2514/1.G004048.
[8] Lu, P., “Theory of Fractional-Polynomial Powered Descent Guidance,” Journal of Guidance, Control, and Dynamics, Vol. 43, No. 3, 2020, pp. 398–409. https://doi.org/10.2514/1.G004556.
[9] Pontryagin, L. S., Boltyanskii, V. G., Gamkrelidze, R. V., and Mishechenko, E. F., “The Mathematical Theory of Optimal Processes,” Interscience, New York,1962.
[10] D’Souza, C., and D’Souza, C., “An optimal guidance law for planetary landing,” Guidance, Navigation, and Control Conference, AIAA Paper 1997-3709, Aug.1997. https://doi.org/10.2514/6.1997-3709.
[11] Ross, I., “How to Find Minimum-Fuel Controllers,” AIAA Guidance, Navigation, and Control Conference and Exhibit, AIAA Paper 2004-5346, Aug.2004. https://doi.org/10.2514/6.2004-5346.
[12] Lu, P., “Propellant-Optimal Powered Descent Guidance,” Journal of Guidance, Control, and Dynamics, Vol. 41, No. 4, 2018, pp. 813–826. https://doi.org/10.2514/1.G003243.
[13] Lu, P., and Callan, R., “Propellant-Optimal Powered Descent Guidance Revisited,” Journal of Guidance, Control, and Dynamics, Vol. 46, No. 2, 2023, pp. 215–230. https://doi.org/10.2514/1.G007214.
[14] You, S., Dai, R., and Rea, J. R., “Theoretical Analysis of Fuel-Optimal Powered Descent Problem with State Constraints,” Journal of Guidance, Control, and Dynamics, Vol. 45, No. 12, 2022, pp. 2350–2359. https://doi.org/10.2514/1.G006815.
[15] Ito, T., and Sakai, S.-i., “Throttled Explicit Guidance to Realize Pinpoint Landing Under a Bounded Thrust Magnitude,” Journal of Guidance, Control, and Dynamics, Vol. 44, No. 4, 2021, pp. 854–861. https://doi.org/10.2514/1.G005577.
[16] Ito, T., and Sakai, S.-i., “Optimal Powered Descent Guidance Under Thrust Pointing Constraint,” Journal of Guidance, Control, and Dynamics, Vol. 46, No. 4, 2023, pp. 695–708. https://doi.org/10.2514/1.G006727.
[17] Reynolds, T. P., Szmuk, M., Malyuta, D., Mesbahi, M., Açıkmeşe, B., and Carson, J. M., “Dual Quaternion-Based Powered Descent Guidance with State-Triggered Constraints,” Journal of Guidance, Control, and Dynamics, Vol. 43, No. 9, 2020, pp. 1584–1599. https://doi.org/10.2514/1.G004536.
[18] Szmuk, M., Reynolds, T. P., and Açıkmeşe, B., “Successive Convexification for Real-Time Six-Degree-of-Freedom Powered Descent Guidance with State-Triggered Constraints,” Journal of Guidance, Control, and Dynamics, Vol. 43, No. 8, 2020, pp. 1399–1413. https://doi.org/10.2514/1.G004549.
[19] Blackmore, L., Açikmeşe, B., and Scharf, D. P., “Minimum-Landing-Error Powered-Descent Guidance for Mars Landing Using Convex Optimization,” Journal of Guidance, Control, and Dynamics, Vol. 33, No. 4, 2010, pp. 1161–1171. https: //doi.org/10.2514/1.47202.
[20] Carson, J. M., Açikmeşe, B., and Blackmore, L., “Lossless convexification of Powered-Descent Guidance with non-convex thrust bound and pointing constraints,” Proceedings of the 2011 American Control Conference, 2011, pp. 2651–2656. https: //doi.org/10.1109/ACC.2011.5990959.
[21] Acikmese, B., Scharf, D., Blackmore, L., and Wolf, A., “Enhancements on the Convex Programming Based Powered Descent Guidance Algorithm for Mars Landing,” AIAA/AAS Astrodynamics Specialist Conference and Exhibit, AIAA Paper 2008-6426, Aug.2008. https://doi.org/10.2514/6.2008-6426.
[22] Topcu, U., Casoliva, J., and Mease, K. D., “Minimum-Fuel Powered Descent for Mars Pinpoint Landing,” Journal of Spacecraft and Rockets, Vol. 44, No. 2, 2007, pp. 324–331. https://doi.org/10.2514/1.25023.
[23] Acikmese, B., and Ploen, S. R., “Convex Programming Approach to Powered Descent Guidance for Mars Landing,” Journal of Guidance, Control, and Dynamics, Vol. 30, No. 5, 2007, pp. 1353–1366. https://doi.org/10.2514/1.27553.
[24] Scharf, D. P., Regehr, M. W., Vaughan, G. M., Benito, J., Ansari, H., Aung, M., Johnson, A., Casoliva, J., Mohan, S., Dueri, D., Açikmeşe, B., Masten, D., and Nietfeld, S., “ADAPT demonstrations of onboard large-divert Guidance with a VTVL rocket,” 2014, pp. 1–18. https://doi.org/10.1109/AERO.2014.6836462.
11

[25] Scharf, D. P., Açıkmeşe, B., Dueri, D., Benito, J., and Casoliva, J., “Implementation and Experimental Demonstration of Onboard Powered-Descent Guidance,” Journal of Guidance, Control, and Dynamics, Vol. 40, No. 2, 2017, pp. 213–229. https://doi.org/10.2514/1.G000399.
[26] Sánchez-Sánchez, C., and Izzo, D., “Real-Time Optimal Control via Deep Neural Networks: Study on Landing Problems,” Journal of Guidance, Control, and Dynamics, Vol. 41, No. 5, 2018, pp. 1122–1135. https://doi.org/10.2514/1.G002357.
[27] You, S., Wan, C., Dai, R., and Rea, J. R., “Learning-Based Onboard Guidance for Fuel-Optimal Powered Descent,” Journal of Guidance, Control, and Dynamics, Vol. 44, No. 3, 2021, pp. 601–613. https://doi.org/10.2514/1.G004928.
[28] You, S., Pei, C., Dai, R., and Rea, J. R., “Mixed-Input Learning for Multi-point Landing Guidance with Hazard Avoidance Part II: Learning-based Guidance Algorithm,” AIAA SCITECH 2023 Forum, AIAA Paper 2023-1446, Jan.2023. https://doi. org/10.2514/6.2023-1446.
[29] Anjaly, P., and Ratnoo, A., “Target tracking and prosecution using look-angle bifurcation,” Journal of Guidance, Control, and Dynamics, Vol. 43, No. 3, 2020, pp. 589–598.
[30] Srinivasu, N., and Ratnoo, A., “Standoff Target Tracking Using Line-of-Sight Distance Bifurcation,” Journal of Guidance, Control, and Dynamics, Vol. 45, No. 10, 2022, pp. 1934–1945.
[31] Srinivasu, N., and Ratnoo, A., “Guidance Design using Line-of-Sight Angle Bifurcation,” AIAA SCITECH 2022 Forum, 2022, p. 1434.
12

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:12.910Z
- **Text Length:** 27046 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 12 of 12
