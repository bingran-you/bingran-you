# PDF Document: Kovalenko - 2025 - Hybrid Control for Robotic Nut Tightening Task.pdf

**File Path:** Kovalenko - 2025 - Hybrid Control for Robotic Nut Tightening Task.pdf

**Processed Date:** 2026-02-10T18:15:11.470Z

**File Size:** 1987.27 KB

**Total Pages:** 6

**Extracted Pages:** 6

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3733

**Title:** Hybrid Control for Robotic Nut Tightening Task

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Hybrid Control for Robotic Nut Tightening Task
Dmitri Kovalenko IEEE Member, Helsinki, Finland
Abstract— An autonomous robotic nut tightening system for a serial manipulator equipped with a parallel gripper is proposed. The system features a hierarchical motion-primitive-based planner and a control-switching scheme that alternates between force and position control. Extensive simulations demonstrate the system’s robustness to variance in initial conditions. Additionally, the proposed controller tightens threaded screws 14% faster than the baseline while applying 40 times less contact force -
on manipulands. For the benefit of the research community, the system’s implementation is open-sourced. Index Terms—force control, motion control, manipulation planning
I. INTRODUCTION
The robotics research community is working towards autonomous robotic systems that could multiply the productivity of every individual and organisation. Presently versatility of the planet’s best manipulator (a human’s hand controlled by human’s mind & reflex [1]) is unparalleled by any autonomous robotic system. There is an argument [2] that traditional research problems in manipulation, such as pickand-place, peg-in-hole, are not sufficient for advancing the field toward more challenging practic-
al applications, which require mastering sophisticated contact interactions between the autonomous system and its manipulands. The present work aims to address these challenging practical applications by exploring a novel hybrid control scheme for a standard robot used in manipulation research - a serial manipulator with a parallel gripper. The specific manipulation task considered is nut tightening. This task is significant for two reasons. First, the assembly of threaded fasteners has widespread-
 applications, ranging from heavy industries to home improvement [3]. Second, nut tightening is inherently complex [4], as it cannot be easily reduced to classic motion primitives like pick-and-place. A large body of literature covers fastening manipulation tasks, with early contributions [5] emerging during the dawn of the ubiquitous computing era. These tasks are often formulated in terms of impedance control [6] or hybrid control [7]. The valve-turning task is closely related to fastening, and -
therefore, works addressing the former are also considered here. Manipulation research is equally active for UAV platforms; however, due to significant differences in implementation, most of this research falls outside the scope of the present work. An exception is [2], where a robust controller enables screwdriving in UAV’s lateral plane. Dynamic movement primitives are used in [8] to plan autonomous valve turning by an underwater robot. Ajoudani et al. [9] employ impedance control to manipulate -
a valve in a dual-arm setup. Shauri et al. [10] proposed a dual-arm
Fig. 1. A schematic depiction of the considered task. An autonomous manipulation system that uses a parallel gripper and signals from F/T sensor to tighten a nut onto a bolt is proposed.
manipulation framework that not only performs the fastening task, but also addresses object pickup and the small-clearance peg-hole subproblem (fitting a nut onto a bolt). The screwing task is explored in a collaborative setting in [11], where an operator can guide the manipulator during the process. The proposed controller in [11] demonstrated superior accommodation of the operator’s interventions compared to classical impedance control. The authors in [12] introduce a novel perception modality f-
or controlling a screwing task using a tactile sensor, while [13] presents the estimation framework that derives gripper-valve misalignment from sensed torques. Unlike the force-controlled screwdriving framework in [14], the present work does not consider tool use. Zhang el al. [15] propose an autoregressive deep-learning model for manipulation planning, which consistently achieves successful nut tightening in real-world experiments. Meanwhile, the authors in [16] aim to bridge the productivity ga-
p in collaborative robotics by incorporating high-frequency camera feedback into manipulation control. Manipulation research which considers other tasks besides fastening is still relevant for the present inquiry; a survey by Suomalainen et al. [17] presents autonomous systems with such contact-rich capabilities as wiping, scooping and part assembly. An elastic end-effector is used jointly with torque-position control to demonstrate [18] successful tool use for wiping. Hou et al. [19] present a hy-
brid force-velocity control framework that models both manipulands and the robot throughout contact-rich phases of their trajectories. The key contributions of this work are: a) an autonomous robotic manipulation system for nut tightening with a serial manipulator; b) a hierarchical motion-primitive-based planning framework; c) a robust hybrid control scheme with a secondary objective. The author’s goal is to develop such an autonomous
arXiv:2511.21366v1 [cs.RO] 26 Nov 2025

Fig. 2. The proposed autonomous manipulation system architecture for nut tightening task. The planner iterates through the approach, screw, retract stages to guide the robot’s interaction with the manipuland. Hybrid control is applied during the screw stage and stiffness control is applied otherwise.
system and experimentally verify it, in order to unlock author’s future research in contact-rich manipulation. The proposed system was evaluated via simulation, and the visual perception part of the robot’s autonomy stack was de-emphasized. This is the reason for absence of the visual perception component in the system’s architecture diagram (Fig. 2). The remaining components in the robot’s autonomy stack (the planner and control) rely on a perfect oracle provided by the simulation software for ge-
ometric perception data. A detailed presentation of said components follows.
II. PLANNING FRAMEWORK
The planner employed in the proposed system is hierarchical in that, firstly, a sequence of task space ”keyframes” is constructed which the robot’s gripper needs to traverse ([20], Ch.7), then secondly, an optimisation problem is solved in order to obtain a continuous trajectory for the controller to execute. The latter part of the planning computation is uniform across the manipulation stages, while the former part is stage-specific and exploits properties of the task.
A. Keyframe Planning
During the keyframe planning the approach and retract stages mirror one another temporally, and consist of three keyframes (an example is shown in Fig. 3.a,c). The approach stage plan includes the initial keyframe, the pre-grasp keyframe and the grasp keyframe. The retract plan is the same but in reverse. The initial keyframe is determined trivially. The selection of grasp keyframe relies on the dedicated procedure visualised in Fig. 4. The need for intermediate keyframes ”pre-grasp” and ”post-gra-
sp” is due to avoiding spurious contact with the manipuland. The robot’s gripper must approach and retract radially relative to the bolt’s center to achieve a stable grasp. A hexagonal manipuland offers six distinct directions for grasping. The planning framework presently retrieves these directions from the visual perception oracle available in the simulation software. Then such a direction is selected which is the one closest to the present manipulator’s inner space configuration (qnow ∈ R7) pro-
vided it is within the manipulator’s joint limits. Finally, the maximal rotation around the manipuland that does not result in robot’s kinematic singularity informs the keyframe selection for the screw stage plan (Fig. 3.b).
a) c)
b)
Fig. 3. The planning framework models explicitly the three stages of nut tightening task: a) approach, b) screw, c) retract. Note: the forward direction of the gripper (co-axial with the major axes of the gripper’s fingers) coincides with the Y-axis of the gripper’s model (green). The opacity of the keyframes encodes the precedence information: lower-opacity keyframes must be reached before higher-opacity ones. 30◦ turn plan is shown in b).
B. Trajectory Planning
At the time of the stage transition (see the planner’s state machine in Fig. 2), the trajectory optimisation is conducted. It solves for manipulator’s inner space configuration q at the time of the new stage, provided q0, which is the previous stage configuration or a nominal one.
qˆ ← q0
mqˆin(qˆ · q0)2 s.t.
∥TkeyframeW
G −TW
G (qˆ)∥ < [0.01, 0.01, 0.01]T
−0.5◦ <[RkeyframeW
G ]−1 · RW
G (qˆ) < 0.5◦
(1)
T ∈ R3, R ∈ SO3 in (1) stand for the translation and attitude of bodies, e.g.: gripper (G), expressed in the world frame (W). All keyframe-subscripted quantities are input to this optimisation and are estimated before (Sec. II-A). The closest to q0 configuration of qˆ is optimised for, while guaranteeing the gripper’s pose being within the tolerance limits of the keyframe pose. The optimisation runs SNOPT [21] that is bundled with the simulation software. A sequence of these optimisations over the-
 plan’s keyframes generates the sequence of manipulator’s generalised coordinate vectors. A trajectory optimisation failure constitutes the termination condition for the autonomous system. Conversely, upon the successful termination of the optimisation, a continuous inner space trajectory is constructed for the manipulator using the first-order hold and is communicated to the controller

a) b)
Fig. 4. The grasp selection problem is solved during the keyframe planning for the screw stage. a) A hexagonal manipuland allows for six distinct stable grasps. b) The grasp that is the most advantageous kinematically is selected.
via the message passing system. The above discussion did not cover the planning for gripper trajectories because of its triviality in the proposed planning framework. The keyframe plans admit dedicated time windows before and after nut tightening interactions for gripper’s fingers to open and close. The manipulator is kept stationary during fingers actuation. Provided the actuation time windows, a 1D gripper position trajectory is generated and communicated to a dedicated controller. The planner e-
xecutes this policy greedily without feedback, except reacting to the termination conditions, which could be normal or exceptional. Either the total amount of commanded nut tightening manipulations is completed successfully, or the trajectory optimisation has diverged (exceptional). The experimental evaluation of the proposed system (Sec. IV) has examples of both, while the following section details the control framework.
III. CONTROL FRAMEWORK
The goal of the controller components in Fig. 2 is to execute the trajectories obtained from the planner. The central focus of this work is to study the impact that varying control schemes have on the autonomous robotic system. Hereafter, the control schemes which were experimentally evaluated are explained in detail.
A. Stiffness Controller
This position control scheme is used throughout approach, retract stages of manipulation and is dedicated to tracking the manipulator’s inner space trajectories Qt∈{Tn...Tm}
d , with Tn, Tm representing the start and end times of the trajectories. Here and in the following, the variables subscripted with d denote desired values, while the subscript s, respectively, means sensed (i.e. measured). The manipulator’s inner space dynamics in the absence of contact forces are formulated below. This implementation is informed by [22].
τ = M (q)q ̈ + C(q, q ̇)q ̇ + g(q) (2)
M is the mass matrix, C is the Coriolis and gyroscopic effects term, g is the gravity term. Then, the commanded robot torques τ ∈ R7 are: τ = τ0 + P D(q, q ̇), where P D(q, q ̇) = M (q)(Kp · (qd − q) + Kd · (q ̇d − q ̇)), and τ0 is a
stabilizing term for withstanding the gravity force, obtained from (2).
B. Hybrid Controller
Aside from the inherent distinction of controlling the force instead of velocity along a certain dimension, the proposed hybrid controller differs from the one described above in that it is formulated in task space [22]. This is because the forcecontrolled dimension depends on the pose of the manipuland. The manipulator’s inner trajectory Qd is also converted into a gripper pose trajectory Xd (where each datum is a SE3 pose, xT = (α, β, γ, tx, ty, tz)) for controlling the dimensions orthogonal to -
the one being force-controlled. An additional input to this controller is the sensed force wrench ρT = (Mx, My, Mz, fx, fy, fz), which is projected into the manipuland’s coordinate frame by the F/T processor. Following [23], the control is:
τ =τ0 (3a)
+Kp · J T (xd − x)4,6 + Kd · J T (x ̇d − x ̇ )4,6 (3b)
+K f
p · J T (ρd − ρs)2 + Kf
d · J T (x ̇d − x ̇ )2 (3c)
+ε(I − J †J )[K2nd
p · (q0 − q) + K2nd
d · q ̇] (3d)
In (3) J is the 6 × 7 manipulator’s spatial velocity Jacobian with respect to the manipuland’s coordinate frame. J† is its pseudoinverse. Note, that error term vectors are zero-padded to match the dimension of JT . The first two rows (3a, 3b) parallel the terms present in stiffness control (Sec. III-A), with the distinction that position control is applied only along maipuland’s tx, tz axes. The third row (3c) describes the moment of force control around manipuland’s major axis (ry, β). ρd2 = M de-
sired
y = 0.2 N · m. The pitch angle rate is used in the differential term because the measured force signal is not differentiable. The last row (3d) implements null space projection for the secondary task (ε = 10−2), which is the joint centering objective towards the nominal configuration q0.
IV. EXPERIMENTS
The proposed nut tightening manipulation system was evaluated in simulation using the MIT Drake software [24]. The manipulator used in the testing scenario is a collaborative robot 7 DoF KUKA iiwa with the parallel gripper by Schunk. The scenario involves the robot starting in a nominal position, then reaching towards the manipuland, turning it, and then returning back to the nominal position. The manipulating sequence is repeated several times, as a nut progressively gets tightened onto a bolt. T-
he main stages along this sequence are imaged in Fig. 5, where the robot completes three turning interactions. The simulation is run in discrete mode with an integration step of 10−4 sec. The bolt’s thread pitch is 8 mm. The control parameters include: a) Kp = 100, Kd = 20 (stiffness control), b) Kpf = 0.2, Kf
d = 10 (force control), c) Kp2nd = 100,
K 2nd
d = 20 (the secondary objective, position control). When stated separately in an experiment description, another set of parameters is randomised in the simulation for statistical

1st turn: approach, screw, retract 2nd turn: approach
2nd turn: screw, retract 3rd turn: approach, screw
Fig. 5. A visualisation of simulated manipulation sequence by the proposed system. The robot completes three nut tightening sequences, with grasp adjustments between the screwing interactions. Each sequence includes the approach, screw, retract stages. Green arrows indicate the directions and relative magnitudes of the contact forces. The initial and terminal states of the system are omitted for brevity.
analysis. These include the initial world poses of the gripper and manipuland. Instantaneous states of the simulated world are accumulated across all experiments for the quantitative evaluation that follows.
A. Ablation Study
The proposed manipulation system features a novel hybrid controller. Therefore, a comparison with a variant of the system where only the baseline controller is used is required. The proposed system uses the stiffness control (Sec. IIIA) for non-contact portions of control sequence. This same controller is employed throughout the simulation to obtain a baseline result, whereas the full result is obtained when the control is switching to hybrid as illustrated in Fig. 2. Two versions of the manipulat-
ion system (baseline and full) share the planning framework in its entirety, thus planned manipulation sequences will have similar properties. Notably, these sequences will be of the same length. The efficiency is then judged by the amount of movement generated in the manipuland by the robot during tests, all of which take the same amount of simulation time. This comparison is presented in Fig. 6, where the color bars mirror the approach-turn-retract stages of Fig. 5 while overlaying the simulatio-
n timespan. The proposed manipulation system demonstrates a 14.5% efficiency advantage over the baseline. The smoothness or jaggedness of manipuland’s pitch angle trajectory indicates whether excessive force was ever commanded by the control. The pitch angle has a smoother curve in the proposed system. In order to highlight this distinction further, the grippermanipuland contact wrench was recorded from the simulation’s states for both systems under study. Fig. 7 plots the force profiles, averaged-
 over three consecutive turning motions within the same manipulation sequence. Among all the dimensions of the contact wrench, the moment of force,
1
2
3
Turn #
0 10 20 30 40 50 60
Simulation Time, seconds
0
10
20
30
40
50
60
70
80
Nut Turning Progress, degrees
approach at turn #
screw at turn #
retract at turn #
stiffness
hybrid
Fig. 6. Higher is better. The changes in the nut’s pitch angle for both the baseline (stiffness) and the proposed (hybrid) manipulation systems are compared during simulations, starting from the same initial configuration. The proposed system demonstrates a 14.5% greater progress in reference to the baseline. Notably, the baseline plot shows undesirable jaggedness, suggesting excessive contact force. The color bars highlight the stages of the manipulation sequence as shown in Fig.5.
6 8 10 12 14 16
Simulation # #
%$-Gripper Average Contact Moment, N•m
stiffness
target_moment
hybrid 0
1
2
3
Fig. 7. Lower magnitude is better. The averaged moments of contact force My between the gripper and the manipuland for the baseline (stiffness) and the proposed (hybrid) manipulation systems. The green horizontal line represents the commanded moment for the hybrid controller. The baseline controller exerts excessive force on the manipuland during the screwing stage.
which is co-axial with the bolt’s major axis (My), is of primary interest. This exact dimension is used in Fig. 7, and allows to observe that the proposed system shows no trend in commanded force, whereas the baseline applies a linearly growing force to the manipuland, while maintaining near-constant velocity (as demonstrated in Fig. 6). The dimensions which are not force-controlled are position-controlled in the proposed system. To further verify it, the system is compared to the baseline in term-
s of the tracking error (Fig. 8). The proposed system appears to have progressively higher error during the turning stages; however, this is a consequence of the hybrid control. The commanded

1
2
3
Turn #
0 10 20 30 40 50 60
Simulation Time, seconds
0.000
0.025
0.050
0.075
0.100
0.125
0.150
0.175
0.200
Planned Trajectory Tracking Error, meters
approach at turn #
screw at turn #
retract at turn #
stiffness
hybrid
a)
1
2
3
Turn #
0 10 20 30 40 50 60
Simulation Time, seconds
0
5
10
15
20
25
30
Planned Trajectory Tracking Error, degrees
approach at turn #
screw at turn #
retract at turn #
stiffness
hybrid
b)
Fig. 8. Lower is better. The planned trajectory tracking errors in translation (a) and rotation (b) for the baseline (stiffness) and the proposed (hybrid) manipulation systems. The proposed system has higher error during the screw stages because the controller executes a faster trajectory than the planner suggested. For a discussion on error spikes during contact-free stages, refer to Sec. IV-A.
moment of force allows the manipulator to tighten the nut faster than it was specified in the planned trajectory. The reason for the increasing errors in the baseline system during the turning stages is different: this is due to the planned trajectory being wrapped around the manipuland without explicitly accounting for the interaction forces. As expected, the approach and retract stages do not differ significantly between two systems. The contact-free parts of the manipulation sequences are contr-
olled by the same position control. The spikes in error plots during these stages, as seen in Fig. 8, are caused by discontinuities at the boundaries of the trajectories produced for adjacent stages by the planning framework. Unrelated to this ablation study, the issue is considered further in Sec.V.
B. Evaluation
The holistic evaluation of the proposed system concludes the experiments section. This test examines its robustness
TABLE I
THE MANIPULATION ROBUSTNESS IN A NUT TIGHTENING TASK
Initialisation
disturbance limit, m Trials amount Success rate, %
0.1 10 100 0.125 10 70 0.15 10 50
The initial positions of the gripper and manipuland are disturbed by a random 3D offset, drawn from a uniform distribution within the specified limits. Notably, these offsets are relatively large, being 1.5 times the length of the manipuland’s diameter. The proposed manipulation system successfully completes the task in the majority of simulations. The typical failure mode is a denial from the planning framework at the retract stage.
to variance in the initial configuration: translations of both the gripper and the manipuland are randomised. The random distributions have progressively larger supports to capture extreme cases in the system’s behavior. Over 30 random trials were conducted, with the statistics summarized in Tab. I. A trial is considered successful if at least one turning interaction is fully completed during the simulation. A randomised position disturbance (d ∈ R3) is added to the initial pose of either the mani-
puland or the gripper. In the case of the gripper, inverse kinematics is used to compute a configuration that satisfies the new initial pose. The orthogonal axes of d are randomised independently via a uniform distribution: d ∼ U [−l . . . l], where l stands for the support’s boundaries. The tests with varying parameter l are listed in Tab. I and demonstrate that the proposed system is robust even under significant disturbances. The larger displacement simulations that did not succeed failed due t-
o a limitation in the planning framework. In no case did the system fail to establish a stable grasp or execute a fastening turn, but the planner’s greedy policy caused the manipulator to translate into configurations where the retract stage plan fails to converge. This limitation is discussed in the following section.
V. CONCLUSIONS
The proposed robotic nut tightening system (a) is comprised of: b) motion-primitive-based planning framework operating in the task space, and c) hybrid controller that leverages sensed interaction forces to execute the contactrich portion of the planned trajectory more efficiently. The experimental evaluation revealed that this system is 14.5% faster in completing the objective compared to the baseline system, while being safer and more efficient by applying two orders of magnitude less contact fo-
rce to the manipuland than the baseline system. Both the planning and control components of the proposed system have low computational costs, consuming a negligible fraction of CPU resources compared to the simulation software with which they were run. The system demonstrated high robustness to variance in initial configuration with a clear direction for further improvements. One exisiting robustness bottleneck lies in the retract motion primitive of the planning framework. In future work, the tig-
hter coupling between planning and control will mitigate the position tracking error spiking on

switches to the retract stage. Further, the proposed system will obtain perception capabilities and enable experiments in a physically embodied setup. The open source implementation of the system is made available at https://github.com/wf34/study controllers.
REFERENCES
[1] J. M. Elliott and K. Connolly. “A classification of manipulative hand movements”. In: Developmental Medicine & Child Neurology 26.3 (1984), pp. 283296. [2] C. Ding, L. Lu, C. Wang, and C. Ding. “Design, sensing, and control of a novel UAV platform for aerial drilling and screwing”. In: IEEE Robotics and Automation Letters 6.2 (2021), pp. 3176–3183. [3] M. Gautam, H. Fagerlund, B. Greicevci, F. Christophe, and J. Havula. “Collaborative robotics in construction: A test case on screwing gypsum bo-
ards on ceiling”. In: 2020 5th international conference on green technology and sustainable development (GTSD). IEEE. 2020, pp. 88–93. [4] N.-A. Noda, X. Liu, Y. Sano, Y. Huang, and Y. Takase. “Three-Dimensional Finite Element Analysis during Tightening of Bolt-Nut Connection Having Slight Pitch Difference”. In: International Journal of Mechanical Engineering and Robotics Research 8 (May 2019), pp. 494–497. DOI: 10.18178/ijmerr.8. 3.494-497.
[5] B. H. Yoshimi and P. K. Allen. “Integrating realtime vision and manipulation”. In: Proceedings of the Thirtieth Hawaii International Conference on System Sciences. Vol. 5. IEEE. 1997, pp. 178–187. [6] N. Hogan. “Impedance control: An approach to manipulation”. In: 1984 American control conference. IEEE. 1984, pp. 304–313. [7] M. H. Raibert and J. J. Craig. “Hybrid position/force control of manipulators”. In: (1981). [8] A. Carrera, N. Palomeras, N. Hurto ́s, P. Kormushev, and M. Carreras. “Lea-
rning multiple strategies to perform a valve turning with underwater currents using an I-AUV”. In: OCEANS 2015-Genova. IEEE. 2015, pp. 1–8. [9] A. Ajoudani, J. Lee, A. Rocchi, M. Ferrati, E. M. Hoffman, A. Settimi, D. G. Caldwell, A. Bicchi, and N. G. Tsagarakis. “A manipulation framework for compliant humanoid coman: Application to a valve turning task”. In: 2014 IEEE-RAS International Conference on Humanoid Robots. IEEE. 2014, pp. 664670. [10] R. Shauri, K. Saiki, S. Toritani, and K. Nonami. “Se-
nsor integration and fusion for autonomous screwing task by dual-manipulator hand robot”. In: Procedia Engineering 41 (2012), pp. 1412–1420. [11] N. Villa, E. Mobedi, and A. Ajoudani. “A contactadaptive control framework for co-manipulation tasks with application to collaborative screwing”. In: 2022 31st IEEE International Conference on Robot and
Human Interactive Communication (RO-MAN). IEEE. 2022, pp. 1131–1137. [12] J. An, Q. Jia, T. Li, X. Zhu, Y. Yan, and G. Chen. “Robot screwing state detection based on tactile sequences”. In: 2024 IEEE 19th Conference on Industrial Electronics and Applications (ICIEA). IEEE. 2024, pp. 1–6. [13] G. Golani, S. H. Turlapati, L. Yang, M. Z. B. Ariffin, and D. Campolo. “Robotic valve turning: axial misalignment estimation from reaction torques”. In: 2024 IEEE/RSJ International Conference on Intelligent R-
obots and Systems (IROS). IEEE. 2024, pp. 5275–5280. [14] L. Tang and Y.-B. Jia. “Robotic fastening with a manual screwdriver”. In: 2023 IEEE International Conference on Robotics and Automation (ICRA). IEEE. 2023, pp. 5269–5275. [15] X. Zhang, Y. Liu, H. Chang, L. Schramm, and A. Boularias. “Autoregressive action sequence learning for robotic manipulation”. In: arXiv preprint arXiv:2410.03132 (2024).
[16] M. Fujioka and Y. Yamakawa. “Hex nut screwing with a high-speed vision and a high-speed robot hand”. In: 2022 IEEE International Conference on Robotics and Biomimetics (ROBIO). IEEE. 2022, pp. 1662–1667. [17] M. Suomalainen, Y. Karayiannidis, and V. Kyrki. “A survey of robot manipulation in contact”. In: Robotics and Autonomous Systems 156 (2022), p. 104224.
[18] H. T. Suh, N. Kuppuswamy, T. Pang, P. Mitiguy, A. Alspach, and R. Tedrake. “Seed: Series elastic end effectors in 6d for visuotactile tool use”. In: 2022 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS). IEEE. 2022, pp. 4684–4691. [19] Y. Hou and M. T. Mason. “Robust execution of contact-rich motion plans by hybrid forcevelocity control”. In: 2019 International Conference on Robotics and Automation (ICRA). IEEE. 2019, pp. 1933–1939. [20] S. M. LaValle. Planning algor-
ithms. Cambridge university press, 2006. [21] P. E. Gill, W. Murray, M. A. Saunders, and E. Wong. “User’s guide for SNOPT 7.7: Software for largescale nonlinear programming”. In: Center for Computational Mathematics Report CCoM 15.3 (2018). [22] F. L. Lewis, D. M. Dawson, and C. T. Abdallah. Robot manipulator control: theory and practice. CRC Press, 2003. [23] H. Zhang and R. Paul. “Hybrid control of robot manipulators”. In: Proceedings. 1985 IEEE International Conference on Robotics and Automatio-
n. Vol. 2. IEEE. 1985, pp. 602–607. [24] R. Tedrake and the Drake Development Team. Drake: Model-based design and verification for robotics. 2019. URL: https://drake.mit.edu.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:11.470Z
- **Text Length:** 28703 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 6 of 6
