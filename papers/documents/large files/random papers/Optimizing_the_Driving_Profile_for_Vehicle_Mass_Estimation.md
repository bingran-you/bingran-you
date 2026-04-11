# PDF Document: Wang et al. - 2025 - Optimizing the Driving Profile for Vehicle Mass Estimation.pdf

**File Path:** Wang et al. - 2025 - Optimizing the Driving Profile for Vehicle Mass Estimation.pdf

**Processed Date:** 2026-02-10T18:13:45.017Z

**File Size:** 8139.90 KB

**Total Pages:** 17

**Extracted Pages:** 17

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3321

**Title:** Optimizing the Driving Profile for Vehicle Mass Estimation

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

IEEE XXX, VOL. 1, NO. 1, OCTOBER 2025 1
Optimizing the Driving Profile for Vehicle Mass Estimation
Le Wang, Jessica Ye, Michael Refors, Oscar Flärdh and Håkan Hjalmarsson, Fellow, IEEE
Abstract—Accurate mass estimation is essential for the safe and efficient operation of autonomous heavy-duty vehicles, particularly during transportation missions in unstructured environments such as mining sites, where vehicle mass can vary significantly due to loading and unloading. While prior work has recognized the importance of acceleration profiles for estimation accuracy, the systematic design of driving profiles during transport has not been thoroughly investigated. This paper presents a -
framework for designing driving profiles to support accurate mass estimation. Based on applicationoriented input design, it aims to meet a user-defined accuracy constraint under three optimization objectives: minimumtime, minimum-distance, and maximum accuracy (within a fixed time). It allows time- and distance-dependent bounds on acceleration and velocity, and is based on a Newtonian vehicle dynamics model with actuator dynamics. The optimal profiles are obtained by solving concave optimization p-
roblems using a branch-and-bound method, with alternative rank-constrained and semi-definite relaxations also discussed. Theoretical analysis provides insights into the optimal profiles, including feasibility conditions, key ratios between velocity and acceleration bounds, and trade-offs between time- and distance-optimal solutions. The framework is validated through simulations and real-world experiments on a Scania truck with different payloads. Results show that the designed profiles are feasib-
le and effective, enabling accurate mass estimation as part of normal transportation operations without requiring dedicated calibration runs. An additional contribution is a non-causal Wiener filter, with parameters estimated via the Empirical Bayes method, used to filter the accelerometer signal with no phase-lag.
Index Terms—application-oriented input design, autonomous heavy-duty vehicles, driving profile optimization, mass estimation
I. Introduction
A
CCURATE mass estimation is fundamental to the safe, efficient, and intelligent control of autonomous heavy-duty vehicles [1], [2]. This need is particularly pronounced in off-road transportation scenarios, such as
This work was supported by VINNOVA Competence Center AdBIOPRO, contract 2016-05181, by the Swedish Research Council through the research environment NewLEADS (New Directions in Learning Dynamical Systems), contract 2016-06079 and contract 2019-04956. Le Wang and Håkan Hjalmarsson are with Division of Decision and Control Systems, School of Electrical Engineering and Computer Science, KTH Royal Institute of Technology, 10044 Stockholm, Sweden. Le Wang is also with Shanghai Jiao Tong University, 200-
240 Shanghai, China. Håkan Hjalmarsson is also with Centre for Advanced Bio Production, 10044 Stockholm, Sweden (email: {le6, hjalmars}@kth.se). Jessica Ye is a Master Thesis student at KTH (email: jessicay@kth.se), Michael Refors and Oscar Flärdh are with Traton R&D, 151 87 Södertälje, Sweden (e-mail: {michael.refors, oscar.flardh}@scania.com).
mining, forestry, and sandy terrains, where vehicle mass can fluctuate significantly during loading and unloading operations, sometimes by as much as 30 tons [3]. These variations lead to considerable changes in braking behavior, traction control, and rollover risk, making realtime estimation essential to maintain vehicle stability and safety under demanding conditions [2]–[4]. In addition to safety considerations, accurate mass information improves energy efficiency by enabling better prediction -
of power demand and facilitating smoother velocity trajectories with reduced reliance on braking. It also supports high-level decision-making processes, including velocity planning, gear selection, and overload detection, all of which contribute to safer and more economical transport operations. Moreover, accurate mass estimation is closely related to accurate powertrain modeling and control. Reflecting these practical demands, the development of reliable and real-time vehicle mass estimation tech-
niques has attracted increasing attention in recent years [5]. A wide range of methods have been proposed for vehicle mass estimation, given its critical role in accurate longitudinal control and energy-efficient operation. These methods are generally categorized into “gray box” and “black box” approaches. “Gray box” methods, which rely on vehicle longitudinal dynamics and are particularly suited for real-time implementation due to low computational complexity, include: i) Extended Kalman Filter (-
EKF) [6]–[8] and its extensions, such as integrations with model predictive control [9], adaptive filtering for realtime noise tuning [10], [11], anti-windup structures for handling outliers and poor excitation [12], and dual-filter frameworks for joint estimation of mass and inertia [13], [14]. ii) Least Squares (LS) based approaches, including Recursive LS (RLS) and Total LS [5], [15]–[18], are also widely applied. iii) Recursive estimation with polynomial chaos and signal-to-noise ratio based r-
eliability [19]. “Black box” methods rely on large-scale sensor data and machine learning to infer vehicle mass from driving signals. Extensions include combining analytical models (e.g., EKF, RLS) with fuzzy logic or neural networks for enhanced adaptability [4], or integrating RLS with Long Short-Term Memory networks for improved accuracy in heavy-duty vehicles [20]. Related efforts apply neural networks together with classical estimators for tasks such as slope and mass co-estimation in braking-
 control [21], but these remain scenario-specific rather than addressing general real-time mass estimation. [22] further proposed a hybrid model with physics-based estimation and neural
arXiv:2511.18154v1 [eess.SY] 22 Nov 2025

IEEE XXX, VOL. 1, NO. 1, OCTOBER 2025 2
0 5 10 15 20 25 30 t (s)
0
5
10
15
20
25
Fig. 1: Normal driving velocity profiles of four trials for the used truck when the mass is 15 tons.
0 5 10 15 20 25 30 t (s)
0
5
10
15
20
Fig. 2: Evolution of the mass estimate using velocity trajectories from Fig. 1.
traction modeling, but the approach relies on offline data collected under controlled tests, not online estimation during unconstrained transport. While various vehicle mass estimation methods have been proposed, the influence of driving profiles on estimation accuracy remains a critical, yet underexplored aspect. Since mass estimation fundamentally relies on vehicle dynamic responses, the identifiability of mass parameters is closely related to the variability in acceleration, velocity, and tract-
ion force. While the influence of input excitation on estimation performance has not been systematically studied, [5] suggests that informative data segments, typically those involving dynamic maneuvers such as acceleration or deceleration, tend to yield more accurate mass estimates. Nevertheless, most existing methods rely on passively identifying informative segments from recorded data, without explicitly addressing how input signals or driving profiles can be proactively designed to improve est-
imation accuracy. To illustrate the issue, we show in Fig. 1 the velocity profiles of four standard trajectories consisting of an acceleration segment followed by a retardation segment for the truck that has been used in the experiments in the paper. These trajectories results in the mass estimates in Fig. 2 using a rather standard LS estimator, detailed later in this paper. Clearly the results are not entirely satisfactory. This motivates the application of input design, a concept rooted in syste-
m identification, where control inputs are deliberately optimized to enhance the information regarding target parameters [23]–[33]. In particular, the least-costly identification [33] and application-oriented input design (AOID) framework explicitly incorporates the intended estimation or control objective into the input signal design process [34]–[39]. Instead of focusing on the accuracy of the estimated parameters, this approach prioritizes excitations that are most relevant for the performance -
of the specific application in which the estimated model is to be used. This is typically achieved by analyzing how uncertainties in model parameters influence performance metrics, using tools such as experiment information matrices and application sensitivity analysis. In this paper, we mainly focus on time-domain feasibility, with explicit amplitude constraints on acceleration, velocity, and required accuracy to ensure physical realism. In the
context of vehicle mass estimation, this framework offers a theoretically sound and practically viable strategy for generating driving profiles that are both informative and physically admissible, while meeting prescribed accuracy requirements. Although similar ideas have been explored in other domains [40]–[42], their targeted application to vehicle mass estimation under such physical constraints remains underdeveloped. The main contributions of this paper are summarized as follows: i) Applicatio-
n-oriented problem formulation: This paper formulates vehicle mass estimation as an applicationoriented system identification problem, where a confidence-bound constraint is imposed to guarantee that the estimation achieves the required accuracy. ii) Constrained input design under realistic driving conditions: This paper develops input design strategies that account for physical constraints on acceleration, velocity, and excitation energy. The framework considers multiple objectives, including min-
imum-time, minimum-distance, and maximum estimation accuracy, and obtains driving profiles suitable for practical use and experimental planning. iii) Global and rank-constrained methods for input design: We adopt a global branch-and-bound method to solve the amplitude-constrained input design problem for moderately sized cases. We also formulate it as a rank-constrained semi-definite program solvable by tools such as LMIRANK [43]. Compared to prior approaches like [40], which rely on local optimiz-
ation methods (e.g., Matlab’s fmincon), the proposed methods offer more reliable global solutions. iv) Analytical characterization of input structures: This paper provides theoretical insights into input design under acceleration and velocity constraints. For distance minimization, we identify a critical ratio between velocity and acceleration bounds that yields shorter distances than time-optimal designs. For time minimization, we construct periodic acceleration profiles and derive a sufficient c-
ondition on excitation length. We also show that the distance gap between the two objectives increases monotonically with the velocity range, highlighting the impact of input flexibility.

IEEE XXX, VOL. 1, NO. 1, OCTOBER 2025 3
v) Validation through simulation and real-world experiments: The proposed input design method is first evaluated in simulation under various constraints and objectives, demonstrating its ability to generate informative excitation. It is then validated on a Scania truck under two payload conditions. Results confirm that the designed trajectories meet the theoretical accuracy bounds and are practically feasible. vi) Phase-lag-free non-causal Wiener Filtering via Empirical Bayes: A non-causal Wiener -
filter where the filter parameters are determined using data by way of the Empirical Bayes method is proposed. The method is applied in the paper for filtering accelerometer signals so as to avoid the phase-lag occuring with standard causal low-pass filters. The remainder of the paper is organized as follows. Section II introduces the vehicle longitudinal model, and Section III presents signal pretreatment and mass estimation formulation. Section IV and V develop and implement the AOID framework, -
respectively. Section VI gives theoretical insights. Sections VII and VIII provide numerical and real-world experimental results, respectively. Section IX concludes the paper.
II. Longitudinal Vehicle Dynamics Model
We consider a sampled data model, with Ts denoting the sampling time. Sampling instances are denoted by k, e.g., a(k) denotes the longitudinal acceleration at sampling instance k. A schematic of the forces acting on the vehicle in the longitudinal direction is given in Fig. 3.
Ftrac
Frolling
Fair
Fres
Fgravity
Fig. 3: Longitudinal forces on the vehicle.
Here, Ftrac represents the effective traction force transmitted to the road surface, Fair represents the air resistance, Frolling the rolling resistance and Fgravity the gravitational force due to movements in a non-horizontal plane. The resulting force at sampling instance k is
Fres(k) := Ftrac(k) − Fair(k) − Frolling(k) − Fgravity(k), (1)
which is the force that changes the velocity of the truck. It should be noted that friction brakes are not included in the model since it is very difficult to estimate the force exerted by such brakes. Thus the model is valid only when friction brakes are not used. The relation between acceleration and the resulting force is given by Newton’s second law. Since the acceleration is the result of the engine force, it may seem more natural from an input-output perspective to express this as
a(k) = 1
m Fres(k), (2)
where m is the mass of the truck, rather than the common expression
Fres(k) = m a(k), (3)
where the acceleration is given the interpretation as the input and the force as the output. There are several issues that need to be considered from a parameter estimation perspective. Firstly, while (2) is a linear regression model with the inverse of the mass, 1/m, as parameter, (3) is a linear regression model with the quantity of interest m as parameter. However, more important is to consider the impact of measurement errors. Commercial trucks include more or less sophisticated online estimat-
ors of the components of Fres(k). For this reason, and in order to focus on the problem of estimating the mass m, we consider Fres(k) as a measured quantity. With exact measurements of the acceleration a(k) this would favor (3) as model. Before proceeding, we mention that the model can be extended to include other unknowns. For example, a common model for the rolling resistance is
Frolling(k) = m g cr,
where cr is the rolling resistance coefficient, and g is the gravitational acceleration. It is easy to extend the model to include cr as a parameter to be estimated as well, and we outline this in Section V-G, see also [44]. However, the acceleration a(k), measured by way of (inertial) accelerometers, can be subject to substantial measurement errors. This means that regardless of the choice of (2) or (3), we are faced with what is known as an errors-in-variables (EIV) model where both inputs and o-
utputs are subject to measurement errors. It is well known that parameter estimation in such models are prone to systematic errors unless dedicated methods are used [45]. In practice, one may often avoid the use of EIV-methods, which can be quite involved, by prefiltering the input signal. In a truck, the acceleration changes much slower than the noise in the accelerometers. Therefore low-pass filtering can reduce the problem of noisy accelerometer signals significantly. We will consider the filte-
ring problem in Section III-A. This leads us to the model
Fres(k) = m a(k) + e(k), (4)
where e(k) is the error in the estimate of the resulting force, which is assumed as a sequence of independent identically normal distributed random variables e(k) ∼ N (0, σe2).
We also need to complement the model with the dynamics from the acceleration and retardation requests. The relation between these quantities comprises the whole drive-train but unfortunately, a precise model for this is not necessary, as we see in the real-world validations of our method in Section VIII. We assume that the acceleration responds in a first-order manner to change the accelerator and brake pedals, and model this using a stable first-order transfer function with unity static gain
a(k) = F (q)u(k), F (q) = (1 − p)
1 − pq−1 , p ∈ (0, 1). (5)

IEEE XXX, VOL. 1, NO. 1, OCTOBER 2025 4
Here, the pole p determines the time constant of the model. In summary, the considered framework consists of (4) and (5), where a(k) is obtained as a low-pass filtered version of the control input u(k), which is physically realized by the accelerometer signal measuring the truck’s longitudinal acceleration. The term Fres(k) denotes an estimate of the resultant force on the truck, computed from the forces on the right-hand side of (1). The pole p in (5) is assumed to be identified from a priori tru-
ck data, and is thus treated as known. Consequently, the only unknown parameter in the model is the mass m in (4).
III. Pretreatment of signals and Mass Estimation
From a parameter estimation perspective, the acceleration model (5) is not required, as the signal {a(k)} is assumed to be directly available. However, the measured acceleration can be considerably noisy. An example from the truck used in the real-world experiments is shown by the blue line in Fig. 4(a). We next present a systematic approach for noise reduction, and address the problem of mass estimation based on model (4).
A. Non-causal Wiener filtering of noisy signals
As it is the noise from the accelerometer that is the primary concern in our application, we use this signal as an illustration. However, the results below can be applied to other signals as well. Consider therefore the simple model
a(k) = a◦(k) + ea(k), (6)
where a◦(k) is the true acceleration and {ea(k)} is a sequence of independent identically distributed normal random variables ea(k) ∼ N (0, σa2), modeling the measurement errors. By making the assumption that the true acceleration can be modeled as a stochastic process, we can use the non-causal Wiener filter to estimate {a◦(k)} from {a(k)}. Denoting its power spectrum by Φa◦a◦ (ω), this filter has frequency function
W (eiω) = Φa◦a◦ (ω)
Φa◦a◦ (ω) + σa2
, (7)
see [46]. One can notice that phase-lag of this filter is zero, which is important as otherwise the acceleration and force will be out-of-sync due to the phase-lag introduced by the filter, leading to a bias in the Least Squares (LS) estimate that will be presented in the next subsection. The performance of this filter depends critically on how well the used power spectrum Φa◦a◦ (ω) reflects the spectral properties of {a◦(k)}. Here, we consider a simple firstorder dynamic model
a◦(k) = Fa(q)v(k), where Fa(q) = 1
1 − ξq−1 , (8)
where {v(k)} is a sequence of independent identically normal distributed random variables v(k) ∼ N (0, σv2). The pole ξ determines the time constant of the model. This model gives that
Φa◦a◦ (ω) = |Fa(eiω)|2 σ2
v. (9)
1) Estimating filter parameters: The model (7) with (9) has two unknown parameters, the noise variance σv2 and the filter pole ξ. One possibility to estimate these from data is to use the Empirical Bayes method [47]–[49] which simply amounts to maximum likelihood estimation. Assuming N measurements to be available, let a = [a(1), · · · , a(N )]T , v = [v(1), · · · , v(N )]T and ea = [ea(1), · · · , ea(N )]T . Then using (8), equation (6) can be written on vector form as
a = T (ξ)v + ea ∼ N (0, Ta(ξ)T T
a (ξ)σ2
v + σ2
aI) ,
where Ta(ξ) is a lower Toeplitz matrix with the first N impulse response coefficients of Fa(q) in the first column. We can now maximize the likelihood function for a with respect to ξ, σv2 and also σa2. The negative log-likelihood function (omitting parameter independent terms) is given by
L(ξ, σ2
v, σ2
a) = aT (T (ξ)T T ξ)σ2
v + σ2
aI)−1 a
+ log det (T (ξ)T T ξ)σ2
v + σ2
aI) ,
which, introducing γ = σv2/σa2, we can write as
L(ξ, σ2
v, σ2
a) = aT (T (ξ)T T ξ)γ + I)−1 a 1
σa2
+ N log σ2
a + log det (T (ξ)T T ξ)γ + I) . (10)
It is straightforward to minimize this expression with respect to σa2 by letting
σ2
a= 1
N aT (T (ξ)T T ξ)γ + I)−1 a, (11)
which inserted in (10) gives the condensed negative loglikelihood
L ̃(ξ, γ) = N − N log N + N log aT (T (ξ)T T ξ)γ + I)−1 a
+ log det (T (ξ)T T ξ)γ + I) .
Minimizing this function with respect to ξ and γ using some numerical solver, gives estimates ξˆ and γˆ, from which also an estimate of σa2 can be obtained from (11) using
ξ = ξˆ and γ = γˆ.
2) Realization of the Wiener filter: The filter (7) with (9) can be realized by a first-order filter
FW (q) = c
1 − βq−1 .
Using one forward and one backward filtering sweep as implemented in Matlab’s filtfilt. These operations give a filter with frequency function
|FW (eiω)|2 = c2
|1 − βe−iω|2 = c2
1 + β2 − 2β cos(ω) = c2
1 + β2
1 1 − 2β
1+β2 cos(ω) .

IEEE XXX, VOL. 1, NO. 1, OCTOBER 2025 5
The filter coefficients c and β can be determined by equating |FW (eiω)|2 with the frequency function for the Wiener filter (7)
W (eiω) =
σ2
v
|1−ξe−iω |2 σv2
|1−ξe−iω|2 + σa2
= σv2
σv2 + σa2(1 + ξ2)
1
1 − 2ξσa2
σv2+σa2(1+ξ2) cos(ω))
.
This gives
c2
1 + β2 = σv2
σv2 + σa2(1 + ξ2) , (12) 2β
1 + β2 = 2ξσa2
σv2 + σa2(1 + ξ2) .
Rewrite the second equation as a second order equation in β
β2 − σv2 + σa2(1 + ξ2)
ξσa2
β + 1 = 0.
This equation shows that the two solutions are both positive since their product and sum are both positive. Since the product of the solutions is 1, it has to hold that one solution is in the interval (0, 1) while the other is larger than 1. We are interested in the first solution since it corresponds to a stable filter. Thus β is given by
β = σv2 + σa2(1 + ξ2)
2ξσa2
−
√( σv2 + σa2(1 + ξ2) 2ξσa2
)2
− 1,
while c is obtained from (12) as
c=
√
(1 + β2) σv2
σv2 + σa2(1 + ξ2) .
3) Real-data illustration: Applying this method to the measured acceleration in Fig. 4(a) yields the red curve. For comparison, the signal obtained with a causal first-order low-pass filter, with unit static gain and a pole at 0.96, is shown in black. In contrast to the causal filter, which fails to capture the oscillations and introduces a visible time lag in the transients, particularly during the rapid rise of the third pulse, the Wiener filter accurately reproduces the oscillations. This diffe-
rence is highlighted in Fig. 4(b), which provides a zoomed-in view of Fig. 4(a).
0 10 20 30 t (s)
-1
0
1
2
(a) Measured, filtered signals
17 18 19 20 21 t (s)
-1
-0.5
0
0.5
1
(b) Zoom-in from (a)
Fig. 4: Measured acceleration and zoomed-in view.
B. Mass estimation
Neglecting the measurement errors in a(k) (due to the low-pass filtering discussed in the previous subsection), (4) is amenable to LS estimation of m, giving the estimate
mˆ =
∑N
t=1 Fres(k)a(k)
R(N ) ,
where
R(t) =
∑t
k=1
a2(k). (13)
Using (4), we can express the estimate as
mˆ = m +
∑N
t=1 a(k)e(k)
R(N ) .
Thus the mass estimate is a Gaussian random variable and using the assumptions on the noise e(k) we obtain
mˆ ∼ N (m, P ), where P = E[( ˆm − m)2] = σe2
R(N ) . (14)
From this, we see that R(N ), the sum of the squared accelerations, is the entity which influences the estimation accuracy and that can be influenced by the driving profile.
0 5 10 15 20 25 t (s)
0
5
10
15
Fig. 5: LS estimates of the mass using different regressors.
C. Real-world illustration
Fig. 5 plots the mass estimate versus sample size, with the acceleration signals in Fig. 4(a) serving as regressors. The true mass is 15 tons, and clearly, using the raw accelerometer measurement results in a bias. The noncausal Wiener filter gives significantly better estimates for short sample sizes than the causal low-pass filter. The accuracy is also slightly improved.
IV. Application-oriented input design
Below we outline the ideas behind application-oriented input design (AOID). Following this we in the next section consider input design for mass estimation in vehicles using this framework. Let T denote the length of the experiment and UT denote the decision variables; typically, these are the available external excitation signal sequences to be applied during the experiment.

IEEE XXX, VOL. 1, NO. 1, OCTOBER 2025 6
A. Application-oriented model quality constraints
As mentioned in Section I, it is important to know the vehicle mass in an autonomous heavy-duty vehicle during transport mission in order to achieve accurate powertrain control. In such a setting, we may let Japp(m◦, m) be a function quantifying how the use of the mass m in the control system of the truck degrades the fuel efficiency, as compared to when the control system has access to the true mass m◦. The primary objective of AOID is to design the input to the identification experiment such tha-
t the performance degradation caused by an estimated model mˆ is acceptable from the point of view of the application, i.e., Japp(m◦, mˆ ) is sufficiently small. More generally, let θ ∈ Rn denote the unknown model parameters, Japp(θ◦, θ) denote the performance degradation when θ is used in the application instead of the true system parameters θ◦. The set of acceptable models is then defined as
Eapp :=
{
θ : Japp(θ◦, θ) ≤ 1
2γ
}
, (15)
where γ is a user chosen parameter known as the desired accuracy. The set of acceptable models thus represents all models that gives acceptable performance degradation when the model is used in lieu of the true system parameters. The input excitation is then designed to ensure that the estimated parameter vector θˆ ∈ Eapp with high probability. In general, this is a very difficult problem but via some approximations [34], [35], and this applicationoriented model quality constraint can be (approxim-
ately) expressed as
P −1(UT ) ≥γχ2
α(n)Ja′′pp(θ◦), (16)
where
Ja′′pp(θ◦) := ∂2
∂θ∂θT J (θ◦, θ)∣∣θ=θ◦ ,
P (UT ) is the covariance matrix of the estimate θˆ (which depends on the decision variables) and χ2α(n) is the α
percentile of the χ2(n)-distribution. The parameter α thus determines the desired probability. When the number of parameters is larger than one, this is thus a matrix inequality and by a standard relaxation technique where the input power spectrum rather than the input sequence is considered as design variable [23], [24], [30]. Thus, (16) becomes a linear matrix inequality for linear models and thanks to this a range of AOID problems can be cast as semi-definite programs (SDPs), which can be solve-
d reliably numerically, see [34], [35] for details and [39] for an implementation. We can mention that there are also extensions of this technique able to handle non-linear models [31].
B. Experimental constraints
The excitation in an experiment needs to be constrained. Without such constraints, very large acceleration and velocity may result, as they yield a small covariance matrix P . The system to be modeled is also certainly subject to
physical constraints, e.g., the force of the engine in a truck can generate is limited, and these constraints need to be included. We denote by ET (UT ) the set of constraints for the experiment. When the input power spectrum is chosen as the decision variable, the key to formulating the optimal input design problem as an SDP is that all constraints can be expressed in terms of the input power spectrum. Power constraints on the input excitation fit into this framework, whereas amplitude constraint-
s on signals are not straightforward to use. In this contribution we are faced with the latter type of constraints, as shown below.
C. Experimental cost
Let V (UT ) denote a function quantifying the cost of an experiment as function of the decision variables.
D. Optimal input design formulations
Three different types of optimal input design problems can be formulated: i) minimum-time
mUiTn
T
subject to P −1(UT ) ≥ γχ2
α(n)Ja′′pp(θ◦),
V (UT ) ≤ c,
ET (UT ).
In this formulation, the objective is to minimize the time it takes to achieve a certain accuracy γ, under the experimental constraints as well as a bound on the experimental cost. ii) Minimum experimental cost
mUiTn
V (UT )
subject to P −1(UT ) ≥ γχ2
α(n)Ja′′pp(θ◦),
ET (UT ).
In this formulation, the objective is to minimize the experimental cost to achieve a certain accuracy γ, under the experimental constraints as well as a bound on the experimental cost. iii) Maximum accuracy
mUaTx
γ
subject to P −1(UT ) ≥ γχ2
α(n)Ja′′pp(θ◦),
V (UT ) ≤ c,
ET (UT ).
In this formulation, the objective is to maximize the accuracy γ under the experimental constraints as well as a bound on the experimental cost.
One may argue that the experimental time T can be used as experimental cost, and thus i) could be merged into ii). However, as the number of decision variables depends on the experimental time, it is convenient to treat this case separately.

IEEE XXX, VOL. 1, NO. 1, OCTOBER 2025 7
V. AOID for mass estimation in vehicles
We now apply AOID to our basic model (4)–(5). The decision variables are the elements of the input sequence {u(k)}. With an experiment of N samples, i.e., T = TsN , we collect the corresponding input sequence in the column vector u = [u(1), · · · , u(N )]T . We thus have UT = u for the mass estimation problem. The vehicle dynamics (5) can then be written in matrix form as
a = F u, (17)
where F is a lower Toeplitz matrix with [(1 − p), (1 − p)p, · · · , (1 − p)pN−1]T in the first column.
A. Application-oriented model quality constraint
Among the various performance degradation measures Japp relevant to mass estimation, we focus on accurate powertrain control and, for concreteness, consider the squared relative estimation error,
Japp(m◦, m) =
( m − m◦
m◦
)2
. (18)
However, we emphasize it is just one possible choice, giving
Ja′′pp(m◦) = 2
m2◦
. (19)
The covariance P is given by (14) and thus the quality constraint (16) becomes
R(N ) =
N ∑
k=1
a(k)2 ≥ 2σe2γχ2α(1)
m2◦
. (20)
Using (17), we can express this as
R(N ) = uT F T F u ≥ 2σe2γχ2α(1)
m2◦
.
B. Experimental constraints
In a heavy-duty truck, the longitudinal acceleration and retardation are limited by the maximum engine torque and the retarder mechanism. Additional limitations arise from road slopes, such as uphill and downhill sections. These effects can be modeled by imposing distance-dependent constraints: let d(k) be the distance traveled at sampling instant k, and let amin(d) and amax(d) denote the distancevarying bounds on acceleration. Then,
amin(d(k)) ≤ a(k) ≤ amax(d(k)).
Similarly, we may impose constraints on the velocity v(k)
vmin(d(k)) ≤ v(k) ≤ vmax(d(k)).
In Appendix B, we show that the velocity and distance can be approximately described as
v(k) = Ts
k ∑
l=1
a(l), (21)
d(k) = T 2
s
k ∑
l=1
2(k − l) + 1
2 a(l).
By stacking the values over the experiment horizon, we define v = [v(1), · · · , v(N )]T , d = [d(1), · · · , d(N )]T . Using (17), the velocity and distance vectors can be written as
v = TsGF u,
d = T2
s HF u,
where G is a lower Toeplitz matrix with ones in the first column, and H ∈ RN×N is a lower triangular matrix of entries
Hk,l =
{
k−l+ 1
2 , if l ≤ k, 0, otherwise.
C. Experimental costs
A range of experimental costs V can be associated with heavy-duty truck experiments, such as fuel consumption and wear-and-tear. In our mining site application, time is a key metric, but the traveled distance d(N ) may also be critical due to the limited road length dmax. In this paper, the traveled distance can be interpreted as the experiment cost, as it is positively correlated with fuel consumption. In this paper, the travelled distance is interpreted as a proxy for the experiment cost, since -
it is positively correlated with fuel consumption.
D. Basic AOID expressions
Summarizing the above for the case that all of amin, amax, vmin and vmax are constant, and the experimental cost is the distance traveled, gives the constraints
uT F T F u ≥ 2σe2γχ2α(1)
m2◦
, (22a)
T2
s HN·F u ≤ dmax, (22b)
amin1 ≤ F u ≤ amax1, (22c)
vmin1 ≤ TsGF u ≤ vmax1, (22d)
umin1 ≤ u ≤ umax1, (22e)
where 1 denotes a vector of length N with all elements 1, and HN· denotes the last row of H. Any of the optimal input design problems i)-iii) described above can be obtained from these expressions.
E. Numerical considerations
It is important to notice that while the last four constraints in (22) are linear in the decision variable u, the first constraint is concave in u and therefore all optimal input design problems are concave problems. Such problems are generally hard to solve numerically due to multiple local optima. In our setting, certain symmetry conditions allow one to easily deduce one or more optimal solutions, as discussed in Section VI. However, in general, one needs to use some numerical solvers. There is -
a wide range of alternatives, e.g., trust-region, sequential quadratic programming, and interior-point methods (all three available, e.g., in Matlab’s fmincon), relaxation techniques leading to SDPs, or global solvers, such as branch-and-bound (BnB) techniques. In Appendix A, we

IEEE XXX, VOL. 1, NO. 1, OCTOBER 2025 8
demonstrate how the constraints can be reformulated to enable SDP-relaxations as well as global optimization methods based on rank constraints, such as the Newtonbased LMIRANK [43]. Below, we use the BnB-method bmibnb available in YALMIP [50], as this method has proven reliable for solving the type of optimal input design problems we consider for moderately sized problems. Due to the special structure of the constraints, it has also been shown to be meaningful to optimize specific input profiles [-
44].
F. The ‘chicken and egg’ problem
It is common that optimal input design problems depend on the parameters that are going to be estimated. For the mass estimation problem, for example, it can be noted that (22a) depends on the unknown mass m◦. This can be traced back to that we are using the quadratic relative error in our performance degradation function Japp, see (18). For the case of the quadratic error, Japp(m◦, m) = (m − m◦)2, (22a) does not depend on m◦ and we thus have this problem for this choice of Japp. The most common a-
pproach to handle this is to use some a priori estimates of the unknowns in the input design. Alternatively, one may use adaptive (sequential) input design where the parameters are estimated on-line and the optimal input design is updated at each time instance (or periodically) using the last available parameter estimate. It has been shown that such a procedure leads to the same asymptotic performance as if the true parameters had been used in the optimal input design in the first place [51], [52]-
.
G. Handling nuisance parameters
As mentioned in Section II, it may be necessary to estimate additional parameters than the mass m. In this section we show how to handle this. To capture this scenario, we replace the model (4) by the more general linear regression model
y(k) = φT (k)θ + e(k),
where θ ∈ Rn, and θ(1) = m is the quantity of interest and where φ(k) are measured regressors with its first element being a(k). With θ◦ being the true parameters, and assuming that the performance degradation Japp(θ◦, θ) only depends on m, we obtain that
Ja′′pp(θ◦) =
[Ja′′pp,11 0
0 0n−1,n−1
] ,
where 0n−1,n−1 is the n − 1 × n − 1 zero matrix and where Ja′′pp,11 is the 1, 1-element in Ja′′pp. This means that in the case of nuisance parameters, we only need to modify (19) by replacing Ja′′pp(θ◦) with Ja′′pp,11. VI. Upper bounding the optimal solution
In this section, we analyze some specific profiles to gain insights into the solution structure of optimal input design problems for mass estimation. For simplicity, the vehicle dynamics (5) are neglected, hence the acceleration sequence {a(k)} is considered as the decision variable instead of {u(k)}.
A. Sufficient condition for time minimization The quality constraint (20) can be expressed as
R(N ) ≥ Rdesigned, (23)
where Rdesigned = 2σ2
e γχ2
α (1) m2◦
. Equation (23) imposes a lower bound on R(N ). From the acceleration bounds it follows that
R(N ) ≤ N max(a2
max, a2
min
) , (24)
providing an upper bound. Hence, R(N ) must lie within the interval defined by (23) and (24). The upper bound in (24) is attained when the acceleration bounds are symmetric, i.e., amin = −amax, and the initial velocity is vmin, provided that Tsamax ≤ vmax − vmin. In this case, any input profile that alternates between amax and amin at every sample will respect the velocity limits and achieve the bound, resulting in a minimum-time design. A simple example is alternating between amax and amin at eve-
ry sample. When vehicle dynamics (5) cannot be neglected, such rapid switching becomes ineffective, as input changes may not immediately affect acceleration. A more realistic alternative is to apply maximum or minimum acceleration over longer intervals. Inspired by this observation, we consider the family of driving profiles shown in Fig. 6. Each acceleration phase uses the maximum acceleration amax, and each deceleration phase uses the maximum deceleration amin. In the symmetric case amax = −amin-
, such profiles are optimal. The following result provides a sufficient condition on the number of cycles required to ensure feasibility, which also holds for the asymmetric case.
n+ n− samples
vmin
vmax
Fig. 6: Schematic of the observed time-optimal structure.
Theorem 1 (Sufficient condition for feasibility via periodic acceleration). Assume the system starts from initial velocity vmin. Let acceleration be bounded by ak ∈ [amin, amax],
where amin < 0 < amax. Define 1:
n+ := vmax − vmin
Tsamax
, n− := vmax − vmin
Ts|amin| .
Let N = M (n+ + n−) where M is the number of periods, and define the periodic acceleration pattern:
ak =
{
amax, if (k − 1) mod (n+ + n−) < n+, amin, otherwise.
Then: 1) The velocity trajectory satisfies vk ∈ [vmin, vmax], ∀k;
1Noting that Ts is sufficiently small, we assume that n+ and n−
are integers.

IEEE XXX, VOL. 1, NO. 1, OCTOBER 2025 9
2) The quality constraint R(N ) ≥ Rdesigned is satisfied if the number of periods satisfies
M ≥ Rdesigned
(n+a2max + n−a2
min) .
The proof is given in Appendix C. The theorem provides a constructive sufficient condition for feasibility of the time minimization problem under velocity and accuracy constraints. It yields an upper bound on the required horizon length N to satisfy the quality constraint. This bound does not guarantee optimality, and shorter feasible trajectories may exist outside this profile structure.
Remark 1. Returning to the symmetric case amax = −amin, the profile reduces to an alternation between amax and −amax, with each half cycle consisting of nc samples (thus 2nc samples per full cycle). The velocity oscillates between vmin and vmin + ncTsamax, and feasibility requires
nc ≤ vmax − vmin
Tsamax
.
The excitation energy per cycle is 2nca2max, and the minimal number of cycles must satisfy:
M ≥ Rdesigned
2nca2max
.
B. Distance minimization
The optimization results reveal that, under fixed time and accuracy constraints, the optimal velocity profile for minimizing distance typically features repeated acceleration–deceleration cycles, ending with a final acceleration to vmax, as illustrated in Fig. 7. The vehicle accelerates at amax and decelerates at amin (assumed negative) during each cycle.
t1 t2 t3 p
t
vmin
vmax
v1
Fig. 7: Schematic of the observed distance-optimal structure.
To gain analytical insight, we consider a simplified scenario where the vehicle starts from vmin, performs M repeated cycles between vmin and an intermediate velocity v1, and then accelerates to vmax. Next, we turn to the case of distance minimization, for which a critical ratio between velocity and acceleration bounds can be established as follows.
Theorem 2 (Critical Ratio for Distance Minimization). For a fixed sampling period Ts, and time-invariant upper and lower bounds on acceleration and velocity (amax, amin,
vmax and vmin), use the profile in Fig. 7, then the distance traveled to have R(N ) ≥ Rdesigned is lower bounded by
TsRdesigned
vmin
|amin|amax
− (amax − |amin|)2 v2
min 2|amin|2amax
.
The bound is achieved in the limit as v1 → vmin. For this limit case, and for given amin, amax and vmin, the distance is minimized by taking
vmax = amax
|amin| vmin, (25)
which gives the distance
d⋆ = TsRdesignedvmax
a2max
− v2max − v2
min
2amax
. (26)
The proof is given in Appendix D. While this limiting case is not physically realizable, it can be approximated by taking v1 close to vmin, and it offers valuable insights. First, it suggests that staying near the lower bound of the velocity range helps reduce the traveled distance. Second, expression (26) shows that a smaller vmin allows for shorter distances. Third, (25) reveals how vmax should relate to amax/|amin| and vmin to minimize distance.
C. Monotonic growth of distance gap with velocity range
The previous two theorems characterize the driving profiles for the minimum-time and minimum-distance objectives. Notably, the minimum-distance solution always yields a shorter travel distance than the minimum-time one, and this gap grows with increasing velocity range.
Theorem 3 (Monotonic Amplification of the Travel Distance Gap with Respect to Velocity Range). Denote the velocity gap by ∆v = vmax − vmin and the distance gap
by ∆d(∆v) = dtime −ddistance, where dtime and ddistance
are given in Equations (31) and (29), respectively. Then
(i) ∆d(∆v) = − ∆v2
2amax
+ ∆v
|amin|
(
vmin + RdesignedTs
2amax
) −
vminRdesignedTs
2|amin|amax
;
(ii) Assuming that condition (25) holds, ∆d(∆v) is strictly increasing in ∆v.
The proof is given in Appendix E. Hence, a larger velocity range produces a larger travel distance gap between the minimum-time and minimum-distance objectives.
VII. Numerical Examples
We set Rdesigned = 600 with the pole set as p = 0.979 in (5), matching the values used in the real-world experiments. This numerical study aims to verify whether the insights from Section VI regarding the influence of velocity constraints on the minimum-time and minimum-distance profiles, derived from a restricted family of driving profiles, also hold for the optimal designs.

IEEE XXX, VOL. 1, NO. 1, OCTOBER 2025 10
0 5 10 15 20 25 t (s)
0
0.5
1
(a) Small Vel. (Min. Time)
0 10 20 30 t (s)
0
0.5
1
(b) Small Vel. (Min. Dist.)
0 5 10 15 20 t (s)
-0.5
0
0.5
1
1.5
2
2.5
(c) Large Vel. (Min. Time)
0 10 20 30 t (s)
-0.5
0
0.5
1
1.5
2 Input
Acceleration (m/s2) Velocity (km/h/10) Distance (m/60)
(d) Large Vel. (Min. Dist.) Fig. 8: Minimum-time and distance under small and large velocity ranges.
A. Effects of a small velocity range
We set vmax = 12 km/h, vmin = 4 km/h, amax =
0.9 m/s2, and amin = −0.3 m/s2. Since the system dynamics in (5) have a static gain of 1, the control input u(k) is subject to the same bounds as the acceleration, i.e., u(k) ∈ [amin, amax]. The optimization results for the minimum-time and minimum-distance problems under these settings are shown in Fig. 8 (a) and (b), respectively. To enhance visual clarity, the velocity and distance are scaled by factors of 1/10 and 1/60, respectively, as indicated in the legend. The blue curve represents the in-
put profile u(k), corresponding to the accelerator and brake actions. The red curve shows the acceleration profile a(k), which lags behind u(k) due to the system dynamics in (5). The yellow and purple curves depict the velocity v(k) and distance d(k), respectively. The optimal solution to the minimum-time problem results in a travel time of 23 seconds and a total distance of 52.3 m. By extending the time horizon by 7 seconds in the minimum-distance optimization, the resulting trajectory achieves a-
 shorter travel distance of 46.3 m, corresponding to a reduction of approximately 6 m, or about 13% compared to the minimum-time case.
B. Effects of a large velocity range
We set vmax = 23 km/h, vmin = 4 km/h, and amax =
0.9 m/s2, and amin = −0.23 m/s2. The optimization results for the minimum-time and minimum-distance under these settings are shown in Fig. 8 (c) and (d), respectively. The optimal solution to the minimum-time problem results in a travel time of 17 seconds and a distance of 77.8 m. When the time horizon is extended by 6 seconds in the minimum-distance design, the resulting trajectory reduces the travel distance to 53.6 m, a decrease of approximately 24 m or 30%. This reduction is notably greater th-
an what is typically observed under a smaller velocity range.
C. Summary
The simulation results consistently align with the theoretical acceleration–deceleration patterns. For the minimum-time objective, the system accelerates rapidly to vmax before decelerating to vmin, while for the minimumdistance objective, the velocity remains low initially and
gradually increases toward vmax near the end. This behavior is consistent with the structural patterns shown in Fig. 6 and Fig. 7 and discussed in Section VI. Moreover, the total travel distance under the minimumdistance objective is consistently shorter than that under the minimum-time objective, and this difference becomes more pronounced as the velocity range ∆v = vmax − vmin increases, which is consistent with Theorem 3.
VIII. Real World Results
We implemented the proposed method on a Scania heavy-duty rigid chassis S-Cab truck to collect data under realistic conditions. The truck had a 770hp diesel engine, air suspension, 4 axles (1 front axle, 2 drive axles with twin montage, and 1 support axle), and was equipped with automated manual transmission and exhaust brake and retarder. The total mass could be manipulated through the use of different containers filled with gravel. The experiments were carried out on a test track using productio-
ngrade sensors and data acquisition systems. Fig. 9 shows the test vehicle and the road section at Scania’s test site in Stockholm, where all experiments took place.
(a) Test truck (b) Test road
Fig. 9: Test truck and test road at Scania’s site in Stockholm.
A. Set-up
The measured mass of the truck was 15.01 tons for the first payload and 31.28 tons for the second payload. However, in addition to this, the inertia of the 12 rotating wheels has to be accounted for. This contribution was estimated to be 528 kg. Thus, the true parameter for the two cases were m1◦ = 15.01 + 0.528 = 15.5 tons and m2◦ =
31.28 + 0.528 = 31.8 tons, respectively. Based on previous trials, the pole p in the input dynamics (5) was set to p =

IEEE XXX, VOL. 1, NO. 1, OCTOBER 2025 11
0.979. In order to obtain a large difference in the traveled distance for the minimum-time and the minimum-distance design, the velocity range was set to vmin = 6 km/h and vmax = 23 km/h. The maximum acceleration was set to
amax = 0.9 m/s2, and a minimum acceleration of amin =
−0.4 m/s2 was chosen. No gear shift was allowed during the experiment time and the experiment was considered to begin when the truck reached the minimum velocity for the first time. A human driver was present, but the driving profile was executed by custom in-truck software, which controlled the accelerator pedal and auxiliary brake lever signals upon reaching the specified velocity limits. This resulted in far from perfect implementation of the designed driving profiles, yet the obtained results -
are very informative as we will see below. The model that was used was (4) complemented with an offset term
Fres(k) = m a(k) + δ + e(k),
where the offset δ was estimated together with the mass m. Thus n = 2 parameters were estimated and the procedure in Section V-G was used to handle this. For the model quality constraint (22a), the 99%percentile (α = 0.99) was used, giving χ2α(2) = 9.2. The constraint was expressed as
uT F T F u =
N ∑
k=1
a(k)2 ≥ Rdesigned,
with Rdesigned taken as Rdesigned = 600 for both payload cases. Comparing with (22a), this gives that
γ = Rdesigned m2◦
2σe2χ2α(2) .
From (15) we have that the upper bound on the relative error |mˆ − m◦|/m◦ for which the design is made is 1/(2γ), which then means that the designed maximum relative error is
Relative Errordesigned =
√
σe2 χ2α(2)
m2◦ Rdesigned
.
In the plots for the mass estimates below, the bounds (1 ± Relative Errordesigned)m◦ are shown as dashed lines. The noise variance used in this expression is taken as the mean of the noise variance estimates from the different experiments using the same input design.
B. Results for the 15 tons payload
1) Minimum-time design: The minimum-time design yielded a total duration of T = 13 s. Five experiments were conducted, with results shown in the upper panel of Fig. 10. As seen in Fig. 10(a), the simple control system (see Section VIII-A) struggled to track the designed acceleration profile, leading to deviations in the resulting velocity profile (Fig. 10(b)). Consequently, the designed value Rdesigned was reached earlier than planned, around 10–11 s, as shown in Fig. 10(c), where the dashed line -
marks the target duration T = 13 s. Fig. 10(d) illustrates
how the LS mass estimates evolve across the experiments. The black vertical line indicates the average actual time when Rdesigned was reached, while the red line shows the designed time. Although most estimates converge within a band comparable to 2Relative Errordesigned, a slight bias appears to be present. 2) Minimum-distance design: For the minimumdistance design, a total duration of T = 16 s was used, allowing 3 additional seconds to reach Rdesigned. Five experiments were conducted, with resul-
ts presented in the lower panel of Fig. 10. As shown in Fig. 10(e), the control system again struggled to follow the designed acceleration profile. Nevertheless, the resulting velocity profile retained a shape similar to the desired one, as illustrated in Fig. 10(f). As a result, Rdesigned was reached in close alignment with the design specifications, as seen in Fig. 10(g), where the dashed vertical line marks the end of the experiment (T = 16 s). Fig. 10(h) shows the evolution of the LS mass esti-
mates over time across the five experiments. The black vertical line indicates the average time when Rdesigned was reached, while the red line indicates the designed time. It can be observed that the estimates converge to the desired relative accuracy within the allotted experiment duration. 3) Comparison of the designs: Fig. 12(a) shows the time it takes to reach Rdesigned for the different trials and the different designs. We can see that the actual times match the designed ones relatively well,-
 considering the challenges to follow the designs. As shown in Fig. 12(b), the same goes for the distances it takes to reach Rdesigned. In particular, the minimum-time design systematically leads to experiments requiring shorter time than the minimum-distance designs, despite the difficulties in following the trajectory. It takes an average of 10 s and 15 s to reach the design objective for the minimum-time and minimum-distance designs, respectively. Conversely, the minimum-distance design systema-
tically leads to experiments requiring shorter distances to be traveled than the minimum-time designs. It takes an average of 32.7 m and 44.6 m to reach the design objective for the minimum-time and minimum-distance designs, respectively.
C. Results for 31 tons payload
1) Minimum-time design: The minimum-time design resulted in a total duration of T = 13 s. Five experiments were conducted, with results shown in the upper panel of Fig. 11. As seen in Fig. 11(a), the achieved acceleration profile roughly follows the desired shape. However, prolonged high acceleration led to higher-than-expected velocities midway through the trials, see Fig. 11(b). Still, due to the overall similarity in acceleration shape, Rdesigned was reached at the intended time, as shown in Fi-
g. 11(c), where the dashed line marks the designed end time T = 13 s. Fig. 11(d) presents the LS mass estimates over time for the five trials. The black vertical line indicates the average time Rdesigned is reached, while the red line shows the designed target time. The estimates converge to a strip

IEEE XXX, VOL. 1, NO. 1, OCTOBER 2025 12
0 5 10 t (s)
-1.5
-1
-0.5
0
0.5
1
1.5
(a) Acceleration (Min. Time)
0 5 10 t (s)
0
5
10
15
20
25
(b) Velocity (Min. Time)
0 5 10 t (s)
0
200
400
600
800
1000
(c) R(t) (Min. Time)
0 5 10 t (s)
0
5
10
15
20
(d) Mass (Min. Time)
0 5 10 15 t (s)
-1
0
1
2
(e) Acceleration (Min. Dist.)
0 5 10 15 t (s)
0
5
10
15
20
25
(f) Velocity (Min. Dist.)
0 5 10 15 t (s)
0
200
400
600
800
1000
(g) R(t) (Min. Dist.)
0 5 10 15 t (s)
0
5
10
15
20
(h) Mass (Min. Dist.)
Fig. 10: Acceleration, velocity, R(t), and mass estimate for the minimum-time and distance designs (m◦ = 15.5 tons).
of width approximately equal to Relative Errordesigned, except for one outlier, though a slight bias appears to be present. 2) Minimum-distance design: For the minimumdistance design, T = 16 s was used, i.e., 3 extra seconds were allowed to reach Rdesigned. Five experiments were conducted, as shown in the lower panel of Fig. 11. As seen in Fig. 11(e), the acceleration profile was mostly followed, except that the final large acceleration occurred too late. This is also reflected in the velocity pro-
files in Fig. 11(f). Consequently, Rdesigned was reached several seconds after the target time, as shown in Fig. 11(g). Despite this, the LS mass estimates in Fig. 11(h) reached the desired accuracy well before Rdesigned was actually achieved (around 19 s, marked by the black vertical line). 3) Comparison of the designs: From Fig. 12(c) and (d), we can draw the same conclusions as we did for the 15 tons payload case, see Section VIII-B3. That is the actual times and distances required to reach Rde-
signed match the designed ones relatively well. Furthermore, the minimumtime design systematically leads to shorter experiments whereas the minimum-distance design systematically leads to shorter distances traveled. It takes an average of 12 s and 19 s to reach the design objective for the minimumtime and minimum-distance designs, respectively. It takes an average of 57.6 m and 42.0 m to reach the design objective for the minimum-time and minimum-distance designs, respectively.
D. Summary
From the comparisons between the results of the minimum-time and minimum-distance designs made above, we can conclude that the results are robust.
Even with non-perfect following of the designed driving profile, the outcome is still in line with the design objective: a minimum-time design leads to shorter time used than a minimum-distance design, whereas a minimumdistance design leads to a shorter traveled distance than a minimum-time design, and both give much improved accuracy as compared to normal driving. For the minimum-time design, we observed a clear bias in the estimates for both payload cases, whereas bias was minor for the minimum--
distance design. This may be attributed to the more aggressive profiles of the minimumtime design, which involve higher velocities. This may be an important observation for cases where very accurate mass estimates are required. We also remark that the difference in time and distance between the two designs can be substantial, with gains up to 35% in our tests. In particular, when the road length is limited, a minimum-distance design may therefore be preferable.
IX. Conclusion
This paper presented a framework for optimal driving profile design for real-world mass estimation in heavyduty vehicles. The estimation problem was formulated under practical constraints on acceleration, velocity, and accuracy. Three representative objectives were considered: minimum-time, minimum experiment cost (minimumdistance), and maximum accuracy under fixed time. We also showed how nuisance parameters, i.e., parameters not of direct relevance to the mass, can be handled. Theoretical analys-
is provides insights into the optimal profiles, including feasibility conditions, key ratios between velocity and acceleration bounds, and trade-offs between time

IEEE XXX, VOL. 1, NO. 1, OCTOBER 2025 13
0 5 10 t (s)
-1
-0.5
0
0.5
1
1.5
(a) Acceleration (Min. Time)
0 5 10 t (s)
0
5
10
15
20
25
(b) Velocity (Min. Time)
0 5 10 t (s)
0
200
400
600
800
(c) R(t) (Min. Time)
0 5 10 t (s)
0
10
20
30
40
(d) Mass (Min. Time)
0 5 10 15 20 t (s)
-0.5
0
0.5
1
1.5
(e) Acceleration (Min. Dist.)
0 5 10 15 20 t (s)
0
5
10
15
20
25
(f) Velocity (Min. Dist.)
0 5 10 15 20 t (s)
0
200
400
600
800
1000
(g) R(t) (Min. Dist.)
0 5 10 15 20 t (s)
0
10
20
30
40
(h) Mass (Min. Dist.)
Fig. 11: Acceleration, velocity, R(t), and mass estimate for the minimum-time and distance designs (m◦ = 31.8 tons).
12345
10
12
14
16
t (s)
(a) Min. Time (15.5 tons)
12345
25
30
35
40
45
50
(b) Min. Dist. (15.5 tons)
12345
12
14
16
18
20
t (s)
(c) Min. Time (31.8 tons)
12345
35
40
45
50
55
60
(d) Min. Dist. (31.8 tons)
Fig. 12: Time and distance to reach Rdesigned under different mass configurations. Dashed lines indicate the designed values.
optimal and distance optimal solutions. The approach was validated through Scania truck experiments with two distinct payloads. Despite implementation challenges due to the simple control system, the designed inputs achieved estimation errors consistent with the theoretical ones. These findings confirm the method’s applicability in practice and its potential for accurate mass estimation. A separate finding is that the minimum-distance designs, which generally use lower velocities, yielded mass est-
imates with less bias than minimum-time designs.
An independent contribution was the development of a non-causal Wiener filter where the parameters are tuned using the Empirical Bayes method. This filter was used in the real-world tests to filter accelerometer signals. The advantage over standard causal low-pass filters commonly used for this type of filtering is that no phase-lag was introduced. Another advantage was that the filter parameters are tuned on the data to which the filter is to be
applied. A natural next step in these developments is the implementation on an autonomous vehicle. With a more sophisticated control system, improved tracking of the designed profile can be achieved, leading to more reliable results. Another interesting topic would be to investigate other experimental costs. For example, the idea of stealthy experiments [53] could be pursued to minimize deviations from normal driving behavior while improving the mass estimation accuracy.
Appendix A Rank constrained formulation
We follow the lifting approach taken in [54], also pursued in, e.g., [55]. It holds that
U = uuT ⇔
[U u uT 1
]
⪰ 0, Rank
[U u uT 1
]
= 1.

IEEE XXX, VOL. 1, NO. 1, OCTOBER 2025 14
Introducing A = aaT , we have
A = aaT = F uuT F T = F U F T , (27)
from which it follows that the application quality constraint (22a) can be expressed as
Tr U F T F ≥ 2σe2γχ2α(1)
m2◦
.
It is easy to verify that the inequalities amin ≤ a(k) ≤ amax, occuring in (22c) can be expressed as
a(k)2 − (amin + amax)a(k) + aminamax ≤ 0,
which we can write as
A(k, k) − (amin + amax)a(k) + aminamax ≤ 0.
The equation above is a linear constraint in U and u, since A and a are linear in U and u, respectively (see (27) and (17)). Velocity at time k is given by (21), and the constraint vmin ≤ vk ≤ vmax in (22d) can be expressed using the same technique,
T2
s
( k ∑
l=1
a(l)
)2
− (vmin + vmax)Ts
k ∑
l=1
a(l) + vminvmax ≤ 0,
which, in lifted form, becomes:
T2
s
k ∑
l1 =1
k ∑
l2 =1
A(l1, l2) − (vmin + vmax)Ts
k ∑
l=1
a(l)
+ vminvmax ≤ 0.
This is a linear constraint with respect to (A, a) and therefore, by way of (27) and (17), also with respect to (U, u).
Since (22b) is linear in u, all constraints in (22) can be expressed as linear in U and u. Thus, the optimal input design problems in Section IV-D, based on (22), can be formulated with U and u as decision variables, a linear objective, linear constraints, and a semi-definite constraint
U ⪰ 0,
and finally, the non-convex constraint
Rank
[U u uT 1
]
= 1. (28)
Without (28), the problem becomes convex. A common approach is to relax such a rank constraint using penalty functions that encourage U = uuT , as in [54], [55]. One example is nuclear norm relaxation [56], where the nuclear norm ∥A∥∗, defined as the sum of the singular values of A, serves as a convex surrogate for the rank function. Instead
of enforcing Rank [ U u
uT 1
] = 1, we impose the convex
constraint ∥ [ U u
uT 1
] ∥∗ ≤ η for some chosen threshold η, which results in a convex SDP without introducing penalty terms into the objective. There also exist solvers, e.g., LMIRANK [43], that allow one to keep (A), meaning that in case the solver finds a solution, it will be optimal for the original problem.
Appendix B Derivation of the Velocity and Distance
A. Velocity derivation
Let Ts denote sampling time. Acceleration is assumed piecewise constant over each interval [(k − 1)Ts, kTs), i.e., the acceleration is a(k) for t ∈ [(k − 1)Ts, kTs). Under this assumption, velocity evolves linearly within each interval, i.e., the velocity at s ∈ [(l − 1)Ts, lTs) is
Ts
l− ∑1
q=1
a(q) + (s − (l − 1)Ts)a(l),
where the first term gives the velocity at (l−1)Ts, and the second term adds the linear contribution from constant acceleration a(l) within the interval. In particular, the velocity at time kTs is given by:
v(k) = Ts
k ∑
l=1
a(l).
B. Distance derivation
The distance at time kTs is given by:
d(k) =
k ∑
l=1
∫ lTs
(l−1)Ts
(
Ts
l− ∑1
q=1
a(q) + (s − (l − 1)Ts)a(l)
)
ds
= T2
s
k ∑
l=1
2(k − l) + 1
2 a(l).
Appendix C Proof of Theorem 1
Proof. Each period consists of n+ steps of amax followed by n− steps of amin. By construction,
Tsn+amax = vmax − vmin, Tsn−|amin| = vmax − vmin,
ensuring that the velocity oscillates between vmin and vmax within each cycle, so that vk ∈ [vmin, vmax] holds throughout the horizon. The total excitation energy over M periods is
N ∑
k=1
a(k)2 = M (n+a2
max + n−a2
min).
The accuracy constraint ∑N
k=1 a2
k ≥ Rdesigned is satisfied
if
M ≥ Rdesigned
(n+a2max + n−a2
min) .
This completes the proof.
Appendix D Proof of Theorem 2
Proof. Each cycle consists of acceleration from vmin to v1 with amax over time t1 = ∆v1/amax, and deceleration back to vmin with amin over time t2 = ∆v1/|amin|, where ∆v1 = v1 − vmin. The total duration of one cycle is:
p = t1 + t2 = (|amin| + amax)∆v1
|amin| amax
.

IEEE XXX, VOL. 1, NO. 1, OCTOBER 2025 15
The excitation energy per cycle is:
ap = 1
Ts
(t1a2
max + t2|amin|2) = ∆v1(|amin| + amax)
Ts
.
The distance traveled in one cycle is:
dp = p · vmin + p · ∆v1
2
= (|amin| + amax) ∆v1 (v1 + vmin)
2|amin|amax
.
The final acceleration from vmin to vmax takes time t3 = (vmax − vmin)/amax, with excitation energy
afinal = (vmax − vmin)amax
Ts
.
The total excitation energy is the sum of that from all cycles and the final segment:
Rdesigned = M · ap + afinal
=1
Ts
(
M · ∆v1(|amin| + amax) + (vmax − vmin)amax
) .
The total distance, as the sum of contributions from the periodic and final acceleration segments, simplifies in the limiting case v1 → vmin. By substituting the expression for M ∆v1, yielding
ddistance =M · dp + t3 · vmin + t3(vmax − vmin)
2
= (RdesignedTs + vminamax − amaxvmax) vmin
|amin|amax
+ (vmax − vmin)2
2amax
. (29)
To minimize the total distance with respect to vmax, we take the derivative:
∂ ddistance
∂vmax
= − vmin
|amin| + vmax
amax
.
Setting the derivative to zero yields the optimality condition:
vmax
vmin
= amax
|amin| . (30)
By using (30), then (29) comes to
d⋆ = TsRdesignedvmax
a2max
− v2max − v2
min
2amax
.
This completes the proof.
Appendix E Proof of Theorem 3
Proof. In the minimum-time solution with periodic acceleration, the vehicle repeatedly accelerates from vmin to vmax using amax > 0, and then decelerates back to vmin using amin < 0. Each cycle thus consists of two symmetric phases:
• d+: distance during the acceleration phase; • d−: distance during the deceleration phase; • dcyc = d+ + d−: total distance per cycle.
Distance in a single cycle: Using the kinematic relation, the distance for a full acceleration–deceleration cycle is
dcyc = d+ + d− = v2max − v2
min
2amax
+ v2max − v2
min
2|amin| = v2max − v2
min
2
(1
amax
+1
|amin|
) .
Distance of time minimization objective: By Theorem 2, the minimum number of cycles required to satisfy the designed excitation-energy Rdesigned is M = Rdesigned
n+ a2max +n− a2
min
. Then,
dtime = M dcyc = RdesignedTs
vmax + vmin
2amax|amin|
= RdesignedTs
amax|amin|
(vmin + ∆v
2
) , (31)
where ∆v := vmax − vmin.
Distance gap: The difference between (31) and (29) gives the distance gap,
∆d(∆v) =dtime − ddistance
= − ∆v2
2amax
+ ∆v
|amin|
(
vmin + RdesignedTs
2amax
)
− vminRdesignedTs
2|amin|amax
. (32)
Equation (32) is a downward-opening quadratic in ∆v. Its axis of symmetry is located at
∆v⋆ = amax
|amin| vmin + RdesignedTs
2|amin| .
Monotonicity to the left of the axis: From Theorem 1 the admissible velocity upper bound satisfies vmax = (amax/|amin|) vmin. Consequently ∆v = vmax −vmin ≤ ∆v⋆, so the operating point is located on the left‐hand side of the symmetry axis of the downward-opening quadratic ∆d(∆v). Because the derivative is positive in this interval, ∆d(∆v) is strictly increasing. Hence, a larger admissible velocity range ∆v always produces a larger travel distance gap ∆d.
References
[1] B. Li, J. Zhang, H. Du, and W. Li, “Two-layer structure based adaptive estimation for vehicle mass and road slope under longitudinal motion,” Measurement, vol. 95, pp. 439–455, 2017. [2] M. L. McIntyre, T. J. Ghotikar, A. Vahidi, X. Song, and D. M. Dawson, “A two-stage lyapunov-based estimator for estimation of vehicle mass and road grade,” IEEE Transactions on Vehicular Technology, vol. 58, no. 7, pp. 3177–3185, 2009. [3] B. L. Pence, H. K. Fathy, and J. L. Stein, “Sprung mass estimation for -
off-road vehicles via base-excitation suspension dynamics and recursive least squares,” in Proceedings of American Control Conference, 2009, pp. 5043–5048. [4] Z. Yu, X. Hou, B. Leng, and Y. Huang, “Mass estimation method for intelligent vehicles based on fusion of machine learning and vehicle dynamic model,” Autonomous Intelligent Systems, vol. 2, no. 1, p. 4, 2022. [5] H. K. Fathy, D. Kang, and J. L. Stein, “Online vehicle mass estimation using recursive least squares and supervisory data extrac-
tion,” in Proceedings of American Control Conference, 2008, pp. 1842–1848.

IEEE XXX, VOL. 1, NO. 1, OCTOBER 2025 16
[6] R. Zarringhalam, A. Rezaeian, W. Melek, A. Khajepour, S.-k. Chen, and N. Moshchuk, “A comparative study on identification of vehicle inertial parameters,” in Proceedings of American Control Conference, 2012, pp. 3599–3604. [7] B. Lundin and A. Olsson, “Estimation of vehicle mass using an extended Kalman filter,” Master thesis, Chalmers University of Technology, Gothenburg, Sweden, 2012. [8] P. Lingman and B. Schmidtbauer, “Road slope and vehicle mass estimation using Kalman filtering,” Vehicle-
 System Dynamics, vol. 37, no. sup1, pp. 12–23, 2002. [9] V. Winstead and I. V. Kolmanovsky, “Estimation of road grade and vehicle mass via model predictive control,” in Proceedings of IEEE Conference on Control Applications, 2005, pp. 15881593. [10] X. Zhang, J. He, X. Hua, and Z. Chen, “Identification of time-varying stiffness with unknown mass distribution based on extended Kalman filter,” Mechanical Systems and Signal Processing, vol. 211, p. 111218, 2024. [11] X. Huang and J. Wang, “Real-time-
 estimation of center of gravity position for lightweight vehicles using combined AKFEKF method,” IEEE Transactions on Vehicular Technology, vol. 63, no. 9, pp. 4221–4231, 2014. [12] S. Altmannshofer and C. Endisch, “Robust vehicle mass and driving resistance estimation,” in Proceedings of American Control Conference, 2016, pp. 6869–6874. [13] S. Hong, C. Lee, F. Borrelli, and J. K. Hedrick, “A novel approach for vehicle inertial parameter identification using a dual Kalman filter,” IEEE Transacti-
ons on Intelligent Transportation Systems, vol. 16, no. 1, pp. 151–161, 2014. [14] B. L. Boada, M. J. L. Boada, and H. Zhang, “Sensor fusion based on a dual Kalman filter for estimation of road irregularities and vehicle mass under static and dynamic conditions,” IEEE/ASME Transactions on Mechatronics, vol. 24, no. 3, pp. 1075–1086, 2019. [15] S. Rhode and F. Gauterin, “Vehicle mass estimation using a total least-squares approach,” in Proceedings of International IEEE Conference on Intelligent Tra-
nsportation Systems, 2012, pp. 1584–1589. [16] N. Lin, C. Zong, and S. Shi, “The method of mass estimation considering system error in vehicle longitudinal dynamics,” Energies, vol. 12, no. 1, p. 52, 2018. [17] W. T. Chor, C. P. Tan, A. Bakibillah, Z. Pu, and J. Y. Loo, “Robust vehicle mass estimation using recursive least msquares algorithm for intelligent vehicles,” IEEE Transactions on Intelligent Vehicles, vol. 9, no. 1, pp. 165–177, 2023. [18] A. Vahidi, A. Stefanopoulou, and H. Peng, “Recurs-
ive least squares with forgetting for online estimation of vehicle mass and road grade: theory and experiments,” Vehicle System Dynamics, vol. 43, no. 1, pp. 31–55, 2005. [19] B. L. Pence, H. K. Fathy, and J. L. Stein, “Recursive estimation for reduced-order state-space models using polynomial chaos theory applied to vehicle mass estimation,” IEEE Transactions on Control Systems Technology, vol. 22, no. 1, pp. 224–229, 2013. [20] A. Isbitirici, “Data-driven mass estimation of heavy-duty vehicles,”-
 Ph.D. dissertation, University of Bologna, Bologna, Italy, 2025. [21] Z. Chen, R. Xiong, X. Cai, Z. Wang, and R. Yang, “Regenerative braking control strategy for distributed drive electric vehicles based on slope and mass co-estimation,” IEEE Transactions on Intelligent Transportation Systems, vol. 24, no. 12, pp. 14 61014 619, 2023. [22] Z. Zhou, Y. Wang, X. Liu, Z. Li, M. Wu, and G. Zhou, “Hybrid of neural network and physics-based estimator for vehicle longitudinal dynamics modeling using limi-
ted driving data,” IEEE Transactions on Intelligent Transportation Systems, 2025. [23] R. Mehra, “Optimal input signals for parameter estimation in dynamic systems – Survey and new results,” IEEE Transactions on Automatic Control, vol. 19, no. 6, pp. 753–768, 1974. [24] G. C. Goodwin and R. L. Payne, Dynamic System Identification: Experiment Design and Data Analysis. New York: Academic Press, 1977. [25] M. Gevers and L. Ljung, “Optimal experiment designs with respect to the intended model applicat-
ion,” Automatica, vol. 22, no. 5, pp. 543–554, 1986. [26] L. Ljung, System Identification: Theory for the User, 2nd ed. Englewood Cliffs, NJ: Prentice-Hall, 1999.
[27] U. Forssell and L. Ljung, “Some results on optimal experiment design,” Automatica, vol. 36, no. 5, pp. 749–756, 2000. [28] A. Atkinson and R. Bailey, “One hundred years of the design of experiments on and off the pages of Biometrika,” Biometrika, vol. 88, pp. 53–97, 2001. [29] M. Gevers, X. Bombois, R. Hildebrand, and G. Solari, “Optimal experiment design for open and closed-loop system identification,” Communications in Information and Systems, vol. 11, pp. 197–224, 2011. [30] H. Jansson and-
 H. Hjalmarsson, “Input design via LMIs admitting frequency-wise model specifications in confidence regions,” IEEE Transactions on Automatic Control, vol. 50, no. 10, pp. 1534–1549, 2005. [31] P. Valenzuela, C. Rojas, and H. Hjalmarsson, “A graph theoretical approach to input design for identification of nonlinear dynamical models,” Automatica, vol. 51, no. 1, pp. 233–242, 2015. [32] Z.-H. Pang, G.-P. Liu, D. Zhou, and D. Sun, “Data-driven control with input design-based data dropout compensation -
for networked nonlinear systems,” IEEE Transactions on Control Systems Technology, vol. 25, no. 2, pp. 628–636, 2016. [33] X. Bombois, G. Scorletti, M. Gevers, P. M. Van den Hof, and R. Hildebrand, “Least costly identification experiment for control,” Automatica, vol. 42, no. 10, pp. 1651–1662, 2006. [34] H. Hjalmarsson, “System identification of complex and structured systems,” European Journal of Control, vol. 15, no. 3-4, pp. 275–310, 2009. [35] M. Annergren, C. A. Larsson, H. Hjalmarsson, X. B-
ombois, and B. Wahlberg, “Application-oriented input design in system identification: Optimal input design for control,” IEEE Control Systems Magazine, vol. 37, no. 2, pp. 31–56, 2017. [36] C. A. Larsson, “Application-oriented experiment design for industrial model predictive control,” Ph.D. dissertation, KTH Royal Institute of Technology, Stockholm, Sweden, 2014. [37] A. Ebadat, D. Varagnolo, G. Bottegal, B. Wahlberg, and K. H. Johansson, “Application-oriented input design for room occupancy esti-
mation algorithms,” in 2017 IEEE 56th Conference on Decision and Control. IEEE, 2017, pp. 3417–3424. [38] H. Hjalmarsson, “From experiment design to closed loop control,” Automatica, vol. 41, no. 3, pp. 393–438, 2005. [39] M. Annergren and C. Larsson, “MOOSE: A model based optimal input design toolbox,” in 16th IFAC Symposium on System Identification, 2012, pp. 1535–1540. [40] G. Sigurdsson, A. Isaksson, M. Lundh, H. Hjalmarsson, and S. Munusamy, “Optimal experiment design for multivariable system-
 identification using simultaneous excitation,” in 20th IFAC Symposium on System Identification, 2024, pp. 544–549. [41] D. Rivera, H. Lee, H. Mittelmann, and M. Braun, “Constrained multisine input signals for plant-friendly identification of chemical process systems,” Journal of Process Control, vol. 19, no. 4, pp. 623–635, 2009. [42] M. Lundh, S. Munusamy, A. Isaksson, H. Hjalmarsson, and V. Pinnamaraju, “Optimal design of sequential excitation for identification of multi-variable systems,” in 1-
2th IFAC Symposium on Advanced Control of Chemical Processes, 2024, pp. 409–415. [43] R. Orsi, U. Helmke, and J. B. Moore., “A Newton-like method for solving rank constrained linear matrix inequalities,” Automatica, vol. 42, no. 11, pp. 1875–1882, 2006. [44] J. Ye, “Application-oriented input design for mass estimation of heavy-duty autonomous mining trucks,” Master thesis, KTH Royal Institute of Technology, Stockholm, Sweden, 2025. [45] T. Söderström, Errors-in-Variables Methods in System Identif-
ication. Springer, 2018. [46] T. Kailath, A. H. Sayed, and B. Hassibi, Linear estimation. Prentice Hall, 2000. [47] E. L. Lehmann and G. Casella, Theory of Point Estimation, 2nd ed. New York: John Wiley & Sons, 1998. [48] C. E. Rasmussen and C. K. I. Williams, Gaussian Processes for Machine Learning. MIT Press, 2006. [49] G. Pillonetto, A. Chiuso, and G. De Nicolao, “Prediction error identification of linear systems: A nonparametric Gaussian regression approach,” Automatica, vol. 47, no. 2, pp. 29-
1–305, 2011. [50] J. Lofberg, “YALMIP: A toolbox for modeling and optimization in MATLAB,” in Proceedings of IEEE International Conference on Robotics and Automation, 2004, pp. 284–289.

IEEE XXX, VOL. 1, NO. 1, OCTOBER 2025 17
[51] L. Gerencsér, H. Hjalmarsson, and J. Mårtensson, “Identification of ARX systems with non-stationary inputs - asymptotic analysis with application to adaptive input design,” Automatica, vol. 45, no. 3, pp. 623–633, March 2009. [52] L. Gerencsér, H. Hjalmarsson, and L. Huang, “Adaptive input design for LTI systems,” IEEE Transactions on Automatic Control, vol. 62, no. 5, pp. 2390–2405, May 2016. [53] M. Potters, X. Bombois, M. Forgione, P. Modén, M. Lundh, H. Hjalmarsson, and P. Van den Hof, “O-
ptimal experiment design in closed loop with unknown nonlinear or implicit controllers using stealth identification,” in Proceedings of European Control Conference, 2014. [54] I. Manchester, “Input design for system identification via convex relaxation,” in 49th IEEE Conference on Decision and Control, 2010, pp. 2041–2046. [55] C. Larsson, C. Rojas, X. Bombois, and H. Hjalmarsson, “Experimental evaluation of model predictive control with excitation (MPC-X) on an industrial depropanizer,” Journal o-
f Process Control, vol. 31, pp. 1–16, Jul 2015. [56] B. Recht, M. Fazel, and P. A. Parrilo, “Guaranteed minimumrank solutions of linear matrix equations via nuclear norm minimization,” SIAM Review, vol. 52, no. 3, pp. 471–501, 2010.
Le Wang is currently pursuing a joint Ph.D. degree with KTH Royal Institute of Technology and Shanghai Jiao Tong University, majoring in electrical engineering and control science and engineering, respectively. She received her Bachelor’s degree in Automation from Shandong University in 2019. Her research interests include system identification, input design, optimization algorithms, signal processing, and their related applications.
Jessica Ye is currently pursuing a Master’s degree in Systems, Control and Robotics at KTH Royal Institute of Technology, where she also completed her Bachelor’s degree in Electrical Engineering. In the spring of 2025, she conducted her thesis project on enhancing mass estimation through an applicationoriented input design approach.
Michael Refors is an Embedded Software Developer at TRATON Group R&D, specializing in powertrain control systems. His work focuses on the development of parameter estimation functions and energy consumption algorithms for advanced vehicle powertrains. Prior to his current role, Michael held embedded software development and architecture positions at Scania CV AB and Atlas Copco Industrial Technique AB, where he contributed to a range of mechatronic and control system solutions. He holds a Master o-
f Science in Engineering Design with a specialization in Mechatronics from KTH Royal Institute of Technology, earned in 2016.
Oscar Flärdh is a Product Owner at Traton Group R&D. His current work focuses on parameter estimation and energy consumption functions. Prior to that, he has had various positions at Powertrain Control Systems Development at Scania CV AB in Södertalje, Sweden. That work contained various aspects of powertrain control algorithms, mainly focusing on energy efficiency. He received the Ph.D. degree in Automatic Control from KTH Royal Institute of Technology, Stockholm, Sweden, in 2012 and the M.Sc. de-
gree in electrical engineering and applied physics from Linköping University, Linköping, Sweden, in 2003.
Håkan Hjalmarsson was born in 1962. He received the M.S. degree in Electrical Engineering in 1988, and the Licentiate degree and the Ph.D. degree in Automatic Control in 1990 and 1993, respectively, all from Linköping University, Sweden. He has held visiting research positions at California Institute of Technology, Louvain University and at the University of Newcastle, Australia. He has served as an Associate Editor for Automatica (1996-2001), and IEEE Transactions on Automatic Control (2005-2007)-
 and been Guest Editor for European Journal of Control and Control Engineering Practice. He is Professor at the Division of Decision and Control Systems, School of Electrical Engineering and Computer Science, KTH, Stockholm, Sweden and also affiliated with the Competence Centre for Advanced BioProduction by Continuous Processing, AdBIOPRO. He is an IEEE Fellow and past Chair of the IFAC Coordinating Committee CC1 Systems and Signals. In 2001 he received the KTH award for outstanding contribution t-
o undergraduate education. He was General Chair for the IFAC Symposium on System Identification in 2018. His research interests include system identification, learning of dynamical systems for control, process modeling control and also estimation in communication networks.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:13:45.017Z
- **Text Length:** 78974 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 17 of 17
