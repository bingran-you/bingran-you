# PDF Document: Zhang et al. - 2025 - MIMIC-MJX Neuromechanical Emulation of Animal Behavior.pdf

**File Path:** Zhang et al. - 2025 - MIMIC-MJX Neuromechanical Emulation of Animal Behavior.pdf

**Processed Date:** 2026-02-10T18:15:13.378Z

**File Size:** 12204.61 KB

**Total Pages:** 44

**Extracted Pages:** 44

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3712

**Title:** MIMIC-MJX: Neuromechanical Emulation of Animal Behavior

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

MIMIC-MJX: Neuromechanical Emulation of
Animal Behavior
Charles Y. Zhang1†, Yuanjia Yang2,3†, Aidan Sirbu4,5, Elliott T.T. Abe6,7,8, Emil Wa ̈rnberg1, Eric J. Leonardis2, Diego E. Aldarondo1, Adam Lee1,2, Aaditya Prasad9,10, Jason Foat2, Kaiwen Bian2, Joshua Park2, Rusham Bhatt2, Hutton Saunders2, Akira Nagamori11, Ayesha R. Thanawalla11, Kee Wui Huang11, Fabian Plum12, Hendrik K. Beck12, Steven W. Flavell9,10,13, David Labonte12, Blake A. Richards4,5,14,15,16, Bingni W. Brunton6,7,8, Eiman Azim11, Bence P.  ̈Olveczky1,17,18*, Talmo D. Pereira2*
1Department of Organismic and Evolutionary Biology, Harvard University, Cambridge, MA, USA. 2Computational Neurobiology Laboratory, Salk Institute for Biological Studies, La Jolla, CA, USA. 3Neurosciences Graduate Program, University of California San Diego, La Jolla, CA, USA. 4Mila, Montre ́al, QC, Canada. 5School of Computer Science, McGill University, Montr ́eal, QC, Canada. 6Biology Department, University of Washington, Seattle, WA, USA. 7eScience Institute, University of Washington, Seattle, -
WA, USA. 8Computational Neuroscience Center, University of Washington, Seattle, WA, USA. 9Department of Brain and Cognitive Sciences, Massachusetts Institute of Technology, Cambridge, MA, USA. 10Picower Institute for Learning and Memory, Massachusetts Institute of Technology, Cambridge, MA, USA. 11Molecular Neurobiology Laboratory, Salk Institute for Biological Studies, La Jolla, CA, USA. 12Department of Bioengineering, Imperial College London, London, United Kingdom. 13Howard Hughes Medical Insti-
tute, Cambridge, MA, USA. 14Department of Neurology and Neurosurgery, McGill University, Montr ́eal, QC, Canada. 15Learning in Machines and Brains Program, Canadian Institute for Advanced Research, Toronto, ON, Canada. 16Montr ́eal Neurological Institute, McGill University, Montr ́eal, QC, Canada. 17Center for Brain Science, Harvard University, Cambridge, MA, USA. 18Kempner Institute, Harvard University, Cambridge, MA, USA.
*Corresponding author(s). E-mail(s): olveczky@fas.harvard.edu; talmo@salk.edu; †These authors contributed equally to this work.
Abstract
The primary output of the nervous system is movement and behavior. While recent advances have democratized pose tracking during complex behavior, kinematic trajectories alone provide only indirect access to the underlying control processes. Here we present MIMIC-MJX, a framework for learning biologicallyplausible neural control policies from kinematics. MIMIC-MJX models the generative process of motor control by training neural controllers that learn to actuate biomechanically-realistic body model-
s in physics simulation to reproduce real kinematic trajectories. We demonstrate that our implementation is accurate, fast, data-efficient, and generalizable to diverse animal body models. Policies trained with MIMIC-MJX can be utilized to both analyze neural control strategies and simulate behavioral experiments, illustrating its potential as an integrative modeling framework for neuroscience.
1
arXiv:2511.20532v1 [q-bio.NC] 25 Nov 2025

1 Main
The nervous system evolved to control complex bodies in dynamic and uncertain environments. Studies on neural control of movement typically break the system down into manageable modules, whether functional and/or anatomic, and probe these in isolation [1–4]. While such reductionist approaches have enabled our current understanding of complex sensorimotor control, holistic alternatives that embrace the complex interplay between the brain, body, and environment [5–8] are ultimately required. Success-
fully embracing this integrated view necessitates new tools for capturing, modeling, and simulating feedback interactions between neural and biomechanical systems in the context of natural behaviors. It is now possible to record the kinematics of natural behaviors in great detail using off-the-shelf cameras and easy-to-use software tools [9–15]. This progress enables routine measurements of detailed postural dynamics, but kinematic descriptions by themselves do not reflect the output of the brain’-
s control system. Instead, the nervous system operates on muscles which actuate a complex biomechanical body in rapid feedback with real-world physics. Leveraging these advances to probe the neural control of movements and behavior will require incorporating the brain’s control of the biomechanical body. Artificial Neural Networks (ANNs) have been widely adopted as tractable and expressive substrates for modeling nervous systems in silico. Making practical use of ANNs as models of neural systems w-
ill require explicit multi-scale alignment to identifiable and measurable components. Work in this area is accelerating, with efforts directed at designing increasingly biologically realistic ANNs [16, 17]. For organisms with mapped connectomes, such as C.elegans [18] and D.melanogaster [19], using whole-brain wiring diagrams to constrain network architectures offers a path toward constructing mechanistic models whose connectivity is grounded in real circuit structure, enabling hypotheses that lin-
k neural circuits to embodied control in behaving animals. Connecting such models of neural control to recorded kinematic trajectories will require modeling how the biomechanics of the body, together with the physics of the environment, generate forces that result in coordinated movement. Recent work has pioneered the use of physics simulation to model the biomechanics of complex behavior in diverse animals, including in rats [20, 21], flies [22–25], worms [26–30], and mice [14, 31, 32]. Unlike ki-
nematics, however, motor commands and force production are not readily observable. Forces which actuate the body must be inferred since joint torques can not be directly measured in settings where animals may behave freely. This creates a significant challenge to align biomechanical simulation with behavioral data. A separate line of work in computer graphics [33], robotics [34] and trajectory forecasting [35] devised approaches that use deep reinforcement learning (DRL) to train neural controller-
s capable of producing motor commands that mimic reference kinematic trajectories, a task commonly referred to as “motion imitation”. Building on this idea, a recent system called MIMIC [21] demonstrated that motion imitation can be successfully applied to a rat body model. However, because MIMIC was not well supported as open-source software and sufficient parallelization of its physics environments requires access to high-performance computing clusters with substantial CPU capacity, the system’s-
 accessibility was substantially constrained. To address these
2

deficits, we develop MIMIC-MJX, an open-source framework that builds on this motion imitation approach, aiming to democratize neuromechanical behavioral emulation from kinematics. MIMIC-MJX generalizes MIMIC’s approach to body models from different species (including muscle-based actuation) and greatly simplifies its deployment by leveraging MuJoCo XLA (MJX) [36] for massively parallel physics simulation on a single GPU, alongside ANN training. MIMIC-MJX implements an end-to-end pipeline in JAX [-
37] that takes 3D pose tracking data as input, aligns it to biomechanically realistic body models, and trains ANNs to control these bodies within embodied physics simulation environments by learning to mimic the input kinematic trajectories. We show that MIMIC-MJX is accurate, fast, and efficient, making it accessible to academic labs without the computing resources available to industry researchers. We demonstrate its generalizability by applying it to a diverse set of scenarios: a wide range of -
species, under freely moving and restrained experimental settings, and using both previously published and novel biomechanical body models (a rat, fruit fly, mouse arm, stick insect, and worm). We validate and demonstrate the utility of our trained controllers by recapitulating results on gait kinematics and behavioral representation learning, and by leveraging their reuse as low-level controllers in a new task environment to enable simulated experimentation. Finally, to facilitate its adoption an-
d further development, we have made our framework available as open-source software, along with all datasets, trained models, and documentation in the project page at: https://mimic-mjx.talmolab.org.
2 Results
2.1 MIMIC-MJX is a complete pipeline for training neuromechanical control models from motion data.
The input to MIMIC-MJX is pose tracking data along with a MuJoCo-compatible biomechanical body model describing the animal’s kinematic chain, actuators that can receive control signals to elicit movement, and optional sensors (e.g., touch) for richer sensory feedback. Given these, stac-mjx is used to estimate calibrated jointangle trajectories from the pose data via inverse kinematics. Then, track-mjx trains a neural controller that computes the motor control signals necessary to realize the track-
ed kinematic trajectories with the biomechanical body model (Fig. 1a). In the first stage, stac-mjx implements a GPU-parallelized version of the Simultaneous Tracking and Calibration (STAC) algorithm for marker calibration and inverse kinematics [38]. It takes 3D pose tracking data as input and uses these to find the optimal configuration of joint angles of a given MuJoCo body model that is most consistent with the keypoint trajectories in the data (Fig. 1b). Because pose tracking data is often bi-
ased towards tracking surface landmarks rather than the internal skeletal structure, stac-mjx first performs marker registration to map keypoints to locations relative to a body part, grounding its position to the body model pose. Our approach is robust to noise in the tracked keypoints, and does not assume that every joint in the body model has a corresponding keypoint.
3

Fig. 1: MIMIC-MJX is a complete pipeline for training neuromechanical control models from pose tracking data. a, Diagram of MIMIC-MJX at a high level b, Diagram of the stac-mjx module c, Diagram of the track-mjx training scheme d, stac-mjx registration is generalizable across arbitrary body models e, Rendered trajectories of track-mjx controlled agents (colored) and stac-mjx reference motion (gray)
To facilitate the application of this system to new body models and tracking data, we developed a graphical user interface (GUI) that enables interactive selection of correspondences between keypoints and their most appropriate counterpart in the body model, while also solving for an optimal geometric transformation (scaling, rotation, translation) to account for coordinate system differences in the data relative to the model (Supplementary Fig. 1).
4

stac-mjx speeds up the inverse kinematics process by parallelizing over temporal segments of the input pose tracking data. It is capable of processing data at ∼300 frames per second on an A100 GPU, enabling full inverse kinematics of an hour-long session of pose tracking in just 20 minutes (Supplementary Fig. 2). The output of stac-mjx is stored in a portable HDF5 file containing the solved body configuration for all frames and derived features, including Euclidean coordinates, joint angles, and -
velocities. In the second stage, track-mjx receives the postural trajectories registered to the body model as input, and optimizes a neural controller to actuate the body model and “track” the movements of the input reference trajectories (Fig. 1c). The neural controller is an ANN policy network trained via deep reinforcement learning (DRL) to maximize a composite reward function capturing the similarity between reference trajectories and reproduced trajectories, using both allocentric and egocent-
ric representations of pose: global position, global quaternion, joint angles, and end effector positions (see Methods for details). The ANN is structured as an encoder-decoder architecture to facilitate reuse in downstream tasks. The encoder receives a window of future timesteps of joint angles in the reference trajectory and compresses these into a Gaussian-regularized stochastic latent vector that represents the “motor intention” of the agent. The intention is then decoded by another ANN module-
, which combines this intention with sensory inputs from the current state of the environment to compute the most appropriate action for the next time step. The action output parametrizes a probability distribution over actuator control signals specific to the body model and can represent any number of degrees-of-freedom (DOFs) or actuator type present in the body model (e.g., direct torque-control, position-control, or muscles). To train the ANN policy, track-mjx uses the Proximal Policy Optimiza-
tion (PPO) learning algorithm due to its effectiveness in continuous control policy learning [39]. track-mjx optimizes the ANN via PPO in batches of “rollouts”—sequences of consecutive timesteps of the agent-environment interaction loop in which the policy attempts to track a given reference trajectory. These batches comprise parallel simulations whose experiences are gathered to compute synchronous gradient updates to the ANN weights. track-mjx implements this approach to learning a neural contro-
ller from reference trajectories with abstractions to generalize to any body model (Fig. 1d). It uses a composable configuration system through Hydra [40] for experimentation and supports extensive logging of the optimization trajectory through Weights & Biases [41], enabling granular visibility into individual reward terms, system performance, rollout visualizations (Fig. 1e) on held-out data and other metrics that facilitate troubleshooting and afford crucial insights when applying this system t-
o new data. Together, this system comprises a full-featured toolkit for neuromechanical emulation that eases the technical barriers to implementing DRL and physics simulation with GPU acceleration.
5

Fig. 2: MIMIC-MJX accurately registers and reproduces observed keypoint sequences from real data. a, An example of a rollout of the rat tracking rearing behavior. Top: representative rendered frames of the biomechanical model during a roll-out showing the reference (gray) and reproduced (blue) trajectories. Bottom: joint-angle traces for the left and right shoulders and elbows over time; stac-mjx-registered reference (orange) and track-mjx-reproduced (blue) trajectories are overlaid, with their d-
ifference highlighted in the shaded region (pink). b, Keypoint error distributions between stac-mjx-registered reference and 3D pose tracking landmarks (orange) and between track-mjx-reproduced trajectories and stac-mjxregistered reference (blue). Errors are grouped by body region (forelimbs, hindlimbs, back, head) and total error. c, Evaluation of continuous tracking performance on a held-out dataset, measured as the percentage of episodes that remain unterminated as a function of elapsed time (m-
inutes). The shaded area denotes the variance of the performance across 3 evaluations. d, Phase-normalized gait kinematics across multiple locomotion cycles. Joint-angle trajectories (degrees) for left/right shoulders and elbows (left panel) and hips and knees (right panel) over the gait cycle (0–100%); stac-mjx-registered (orange) and track-mjxreproduced (blue). Shaded bands indicate variability across strides (n = 18 bouts).
6

2.2 MIMIC-MJX accurately registers and reproduces observed keypoint sequences from real data.
We first applied MIMIC-MJX to train a neural controller for a virtual rat model, using a dataset of diverse freely-moving rat behavior as reference trajectories. Behaviors were classified as walking, rearing, and grooming, and segmented into 5-second clips [21]. ANNs trained with track-mjx reproduced trajectories accurately, closely following the observed reference sequences registered by stac-mjx as measured by the alignment of joint angles between reference and generated trajectories (Fig. 2a). -
Summarized across the entire held-out dataset, we found that stac-mjx and track-mjx achieved low registration and tracking error, respectively. Performance was quantified as the absolute Euclidean distance between predicted and target keypoints. stack-mjx showed low median registration error (∼5 mm) relative to the pose tracking keypoint trajectories, while track-mjx likewise demonstrated low median tracking error (∼10 mm) when evaluated against the stac-mjx-registered keypoints. This corresponds -
to less than ∼5% of the adult rat body length, consistent with previous work [21], and reflects markerless keypoint localization error baselines [11, 42]. We next evaluated track-mjx trained controllers on their ability to track motion sequences at longer timescales than they were trained on. track-mjx tracking errors tended to slowly accumulate when the controller failed to completely recover from mistakes in the control sequence; at a threshold deviation distance from the reference pose, we term-
inated the episode and reset the environment by realigning the pose to the reference at that timestep. We tested our rat controller on an unseen session of kinematic data and measured the “unterminated episode percentage”—the fraction of episodes which were not yet terminated—over time, yielding the survival curve. The survival curve illustrated robust long-duration tracking: ∼75% of episodes persisted at 0.5 minutes, and ∼40% at 2 minutes, far beyond the training clip length of 5 seconds (Fig. 2c-
). This reflects our system’s ability to generalize to longer timescales and to faithfully simulate continuous control at the timescale of complex natural behavior sequences. Finally, we assessed whether these error rates have an impact on downstream kinematic features used to characterize motor behaviors, such as locomotion. To do this, we segmented gait bouts of clear locomotion and phase-aligned the registered and generated movement sequences to a standard gait cycle. We found that MIMIC-MJX re-
plicates expected patterns of locomotor coordination at each stage (Fig. 2d). Together, these results reflect MIMIC-MJX’s ability to accurately reconstruct biomechanically plausible poses through motor actuation while maintaining the necessary temporal structure and joint-level dynamics for precise kinematic reproduction.
2.3 MIMIC-MJX generalizes to diverse animal models and experimental settings
We designed MIMIC-MJX to be flexible for diverse animal body models. To demonstrate this, in addition to our primary focus on the rat model, we successfully applied MIMIC-MJX to biomechanical models and pose tracking data from a fruit fly, a mouse
7

Fig. 3: MIMIC-MJX generalizes to diverse animal models and experimental settings. a-d STAC registration and Track replay with pointwise differences highlighted from rollouts of a fly (a), mouse arm (b), stick insect (c), and worm (d). e, f Individual reward components of the rat (e) and fly model (f ). The dashed line marks a 95% threshold of each term’s maximum observed value. The number of time steps required to reach the 95% threshold is shown.
8

arm, a stick insect, and a worm (Fig. 3a-d). Fruit fly, stick insect, and worm controllers were trained to track locomotor behavior, while the mouse arm controller tracked reaching trajectories. We demonstrate performance through the alignment of track-mjx-controlled joint sequences with stac-mjx-produced reference sequences. Configuration details for each implemented model are provided in the supplement (Supplementary Fig. 3). Because our reinforcement learning reward is made up of multiple imit-
ation accuracy reward components (i.e., alignment of root position, root quaternions, joint angles, and end-effector positions to the reference values), we studied each component’s learning trajectory during training for multiple body models. Root position and quaternion rewards can be thought of as “coarse” terms (global root alignment), and joint and end-effector rewards as “fine” terms (pose alignment). Composing these dense reward signals produces a consistent coarse-to-fine curriculum that is-
 reflected in the learning dynamics of both rat and fruit fly (Fig. 3e,f). Early coarse alignment is achieved when the ANN first stabilizes global position and orientation. Fine kinematic refinement follows coarse alignment as the ANN learns to coordinate the many DoFs to match joint angle and end effector positions—a more constrained, higher-dimensional objective that requires additional experience. We observed degraded overall tracking performance when ablating the different tracking reward comp-
onents (Supplementary Fig. 4).
2.4 MIMIC-MJX is fast and efficient
Making MIMIC-MJX an accessible framework for modeling the neuromechanical basis of behavior requires that training times and data requirements be compatible with iterative experimentation. For example, adding more diverse behavioral data, varying biomechanical or neural controller configurations, or extending it to a new species all require training the system from scratch. In previous work [21], this form of experimentation was limited by the speed of the physics simulation, a CPU-bound component-
 of the pipeline that did not scale well with the computational resources available to academic researchers. Using JAX-based deep reinforcement learning and physics simulation, we bypassed this limitation, as demonstrated by its performance profile across different animal models and datasets. We trained neural controllers for the same five biomechanical models (mouse forelimb, fruit fly, stick insect, rat, and worm) using their corresponding pose tracking datasets. To evaluate training efficiency,-
 we quantified the number of data samples (in terms of environment timesteps—one agent-environment interaction loop) needed for a policy to attain near–asymptotic performance. The DRL training runtime is primarily composed of two components: experience generation through the agent-environment loop and the actor/critic network gradient updates. For our physics-based environments, the dominant component by far is the experience generation. Therefore, we quantified training speed in terms of environm-
ent step throughput, measuring the number of steps required to reach 95% of the normalized test–set reward.
9

Fig. 4: MIMIC-MJX is fast and efficient. a, Normalized test set reward versus environment steps for five biomechanical models (mouse arm, fly, stick insect, rat, and worm). Rewards are normalized to each model’s empirical maximum (unit peak = 1). The horizontal dashed line marks the 95% threshold; colored markers and matching vertical dotted lines indicate the first crossing for each model. The bars below report the number of environment steps (in billions) required to reach the 95% threshold. b,-
 Mean episode reward as a function of training data size. Green: training split. Orange: held-out test split of 673 five-second clips. At each x (number of 5 s clips), the paired markers come from a single training run; red dashed connectors visualize the train–test gap. The y-axis reports the average reward over evaluation rollouts (the state trajectory produced during the environment-agent loop). c, Environment throughput on a single NVIDIA A40 GPU: steps per second (SPS) versus the number of pa-
rallel environments (log scale). Background shading denotes parallelism-bounded, balanced, and GPU-compute-bounded (not memorybounded) regimes.
All agents reached the threshold in fewer than one billion steps: mouse arm ∼0.01B, fruit fly ∼0.12B, stick insect ∼0.20B, rat ∼0.65B, and worm ∼0.70B (Fig. 4a). These results show that convergence time scales with biomechanical and behavioral complexity. The mouse arm, performing simple reaching trajectories with only four joints and nine muscle actuators, trained very quickly—converging in tens of millions of steps. The rat was trained on a richer behavioral repertoire compared to the more const-
rained reference behavior for the other animals, thus taking a longer time for training to converge. However, despite its reference data consisting of only undulatory locomotion, the worm was the slowest to train among the body models. This could be due to its large number of muscle-driven actuators (95), making the sensorimotor controller harder to learn [43]. To investigate generalization performance with respect to dataset size, we trained multiple controllers with varying amounts of training d-
ata. Beginning with 15 seconds of data, we trained on increasing durations of natural behavior until the training dataset totaled 845 seconds, or about 14 minutes. We report mean episode reward on both the training and test splits for each of these runs (Fig. 4b). Test rewards increased monotonically with data, and the train-test gap decreased steadily (red segments), indicating task generalization rather than memorization. Notably, most of the generalization gains were achieved within ∼50 clips, -
and by 100 clips the test
10

curve approached the training curve. This shows that the ANN can generalize to new trajectories with a high-quality training dataset on the order of only minutes. This underscores the data efficiency of the learned controller and shows its ability to reproduce new trajectories without retraining. We benchmarked environment throughput on a single A40 GPU as a function of the number of parallel environments (Fig. 4c). Steps per second (SPS, the number of total environment steps completed per second-
), scaled linearly until GPU compute utilization became saturated. We noticed that for our environments, GPU memory (which constrains the total possible number of environments) is not a bottleneck for maximizing throughput on most GPUs. We evaluated end-to-end throughput across commercial and consumer GPUs with various sizes of policy networks. We found that training converges within 6 to 20 hours on datacenter and consumer-grade GPUs, respectively, while datacenterlevel CPU-only training takes ov-
er 30 hours (Supplementary Fig. 5). We also show predictable scaling when modulating the policy network size. The combination of highthroughput, single-device scaling through parallelism, and portability across widely available hardware lowers the barrier to entry.
2.5 MIMIC-MJX enables experiment simulation and neuromechanical behavioral analysis
A trained motion imitation policy yields useful modules that can be transferred to learn naturalistic solutions to downstream tasks. To transfer the pretrained policy, we repurposed the encoder-decoder architecture by replacing the encoder with a taskspecific policy network. This new policy generated latent representations that served as inputs to the pretrained decoder, effectively grounding task behavior in the same latent motion space used during imitation training. Since the original encoder-d-
ecoder was trained with stochastic regularization, the resulting “motion intention” latent space was easy for the task-specific policy to explore, allowing effective control in novel environments. This produced new policies that were more closely aligned with naturalistic motion when solving the new task. We present the utility of motion imitation pretraining by transferring our rat policy network to solving a “bowl-escape” task [34]. Here, the agent had to navigate an environment of uneven terrai-
n in the shape of a bowl, where the objective was to move away from the center of the bowl as fast as possible. We explored performing the transfer with (1) a frozen pretrained decoder, (2) a pretrained decoder with learnable weights, and (3) training the entire network on the bowl-escape task without imitation pretraining as a baseline (Fig. 5a).
11

Fig. 5: MIMIC-MJX enables experiment simulation and neuromechanical behavioral analysis. a, Diagram of MIMIC-MJX-trained decoder transfer to a downstream task b, Task reward curves for training by transferring a frozen decoder, transferring a learnable decoder, and without transfer (randomly initialized weights). c, Rendered rollout trajectories on the bumpy bowl escape task for policies trained with the three different configurations. Footfall raster plots and reward progression (below) reflect -
the differences in task performance of the three conditions. HR: Hind-right, HL: hind-left, FR: fore-right, FL: fore-left paws. A black line indicates a footfall for the given limb. Reward spectrum ranges from red (low reward) to blue (high reward). d, 3D PCA embeddings of mouse arm reaching trajectories, using representations from the intention space (top-left) and sequential decoder layers (top-right, bottom-left, and bottom-right). The axes show % variance explained for each PC. The colormap vi-
sualizes the extent of the shoulder extension. e, PCA of the fly during locomotion. 3D (top-left) and 2D (top-right) PCs of the neural controller’s intention space. 3D (bottom-left) and 2D (bottom-right) PCs of the stac-mjx-defined joint angles. The colormap visualizes the velocity of the locomotion.
12

We found that a randomly initialized MLP policy is unable to learn the task, while both policies leveraging the pretrained decoder were able to solve the task and reach the same reward (Fig. 5b). As shown by the footfall raster plots, the frozen transferred decoder qualitatively learned a more naturalistic locomotion strategy compared to the learnable decoder and the randomly initialized baseline (Fig. 5c). While the learnable decoder successfully solved the task, it did so through unnatural, “ji-
ttery” movement patterns, likely due to “catastrophic forgetting”—the phenomenon where learning a new task quickly results in the overwriting of previously learned solutions [44]. The randomly initialized baseline failed to solve the task entirely, producing neither natural behavior nor goal achievement. Notably, when we simplified the control problem by switching from torque to position actuators (which are generally easier to optimize), the randomly initialized policy solved the task, yet still -
exhibited unnatural gait patterns (Supplementary Fig. 6). This demonstrates that pretraining on the imitation objective using track-mjx enables the encoding of important priors for naturalistic behavior, which can subsequently be leveraged by higher-level controllers. Critically, freezing the decoder preserved these naturalistic priors while still enabling task learning, whereas allowing the decoder to adapt led to task success at the cost of behavioral realism. In order to demonstrate how the geo-
metry and dimensionality of the intention representation evolve as it is propagated through the decoder, we visualized the first 3 principal components (PCs) of the intention and latent activations of each hidden layer for all reaching tasks of the mouse arm (Fig. 5d). The latent intention encoded a compressed representation with 54.2% variance along its first principal component (98% across the first three PCs), indicating a strongly structured low-dimensional space. In the decoder, it was relati-
vely higher dimensional in the early layers (54.8% explained variance in the first 3 PCs); however, by the final layer, it became lowerdimensional (78.1% variance explained in the first 3 PCs), consistent with the idea that motor activity resides in a low-dimensional subspace, potentially reflecting “motor synergies” [45]. We saw that a topological structure emerged in the later hidden layers of the network, where a toroidal structure with a noticeable topological invariant (or hole) represents th-
e reaching cycle. The learned latent space also encodes kinematically interpretable information. We visualized 3- and 2-dimensional PCA embeddings of the latent vectors during fly walking behavior, showing the low dimensional, cyclic manifold of the gait cycle (Fig. 5e top). Similar to previous work[46], each point represents the PCA embedding of a 30timestep window of latent vectors, representing 0.06 seconds. In addition to the salient cycles along PCs 2 and 3, this manifold reflects a linear re-
presentation of gait velocity along the orthogonal PC1 axis, as shown by the color gradient denoting the average velocity of each clip smoothly changing along this axis. We performed the same analysis on the kinematic features (joint angles) acquired through stac-mjx, and found that it also results in the same structured embedding space (Fig. 5e bottom). While these analyses serve as illustrative examples, they confirm that the latent space captures interpretable structure, highlighting the potent-
ial for applying more directed neural representational analysis techniques to the learned computations in the control policies [47, 48].
13

3 Discussion
Here, we present MIMIC-MJX, a fast and generalizable framework for modeling the neural control of movement during complex behaviors across species. Through its computationally efficient implementation and ease-of-use, MIMIC-MJX makes neuromechanical modeling accessible to a broader set of researchers. However, the MJX physics simulator we rely on has some limitations, with future improvements currently in development by both the developers and open-source contributors. While we model the mechanose-
nsory and proprioceptive sensory systems, other sensory modalities are not yet readily accessible. Vision, notably, is not fully supported, though we expect this to be addressed in the coming updates to the simulation framework. Auditory and olfactory modeling remain challenging due to their diffusive dynamics that are best captured through expensive fluid dynamics simulation [49], which are prohibitively expensive. Surrogate physical models and more efficient implementations are promising directi-
ons for overcoming these technical limitations [50]. MJX also does not scale well with large numbers of contacts with the environment. We circumvent this in MIMIC-MJX by only allowing end effectors (e.g., feet) to be in contact with the ground plane during simulation. Fortunately, the developers’ ongoing integration of Warp [51], another framework for high-performance simulation, into MJX will soon resolve this issue. There are also several promising avenues of future development for MIMIC-MJX: Fi-
rst, our training framework is limited to individual agents, making it unsuitable for exploring social behaviors and interaction dynamics. While the neural controllers produced by MIMIC-MJX can be used in multi-agent simulations, aligning them to social behavioral data requires additional work—particularly in developing reinforcement learning algorithms that integrate cues from other agents with low-level motor control [52]. Second, while we use DRL for optimization, we do not attempt to model rea-
listic learning trajectories. Further work is necessary to simulate the biological and computational mechanisms of motor learning, though we note that our task transfer experiments demonstrate the capability of reusing the neural controller trained by MIMIC-MJX to achieve task-driven learning objectives with more naturalistic behavior (Fig. 5a-c). Third, while we note that MIMIC-MJX is agnostic to specific ANN topologies and computational operators, we did not conduct extensive experiments with im-
plementing ANN architectures intended to directly map to known biological neuroanatomy. It should be noted that this has been demonstrated in recent studies leveraging connectomic and functional data to constrain ANN-based models of the nervous system [53–57], albeit without biomechanical constraints. Finally, a major difficulty in implementing this framework is the requirement of hand-crafted biomechanical body models with realistic actuators compatible with physics simulation. While tooling is b-
eing developed to facilitate the generation of body models [25, 58–60], this is a critical area for enhancing the utility of neuromechanical modeling, not just to broaden the species representation, but also to better capture the diversity of body morphologies across populations and developmental stages. The
14

framework presented here demonstrates the urgent need for, and provides the computational scaffold to integrate, new high-throughput anatomical pipelines. The full power of MIMIC-MJX will be realized in future models incorporating more detailed anatomical and biomechanical models, moving the field beyond hand-crafted models toward comprehensive morphological datasets. Future work will address these technical limitations and incorporate new features, but more broadly, this work is a critical step -
toward a new paradigm in which in silico simulation becomes an indispensable counterpart to in vivo experimentation. The full realization of this “Virtual Neuroscience Lab” extends far beyond a simple hypothesis-generation loop. By creating fully configurable, embodied “digital twins,” we open the possibility of creating simulated test beds for both basic mechanistic discovery as well as simulation of disease states and putative therapeutics. For instance, we can move from virtual lesions to model-
ing the progressive degeneration of both neural and musculoskeletal systems, capturing the complex interdependencies of brain and body pathology in neurodegenerative diseases. This holds particular value for advancing foundational research into movement disorders, stroke and rehabilitation [61–64]. Furthermore, these models can serve as foundational tools for robotics and embodied AI. By uncovering the control architectures and learning algorithms that animals actually use, we can build more agile-
, efficient, and fault-tolerant robots. Ultimately, because our own intelligence co-opted the very circuits that evolved for sensorimotor control, these models of “embodied intelligence” may be a critical step toward artificial agents capable of more general, human-like functions.
4 Methods
4.1 Body Models
We used biomechanically validated models of the organisms we implemented into MIMIC-MJX:
• Rat (Rattus norvegicus): We use a biomechanical rat model developed in previous work [34], matching the structure of Long Evans rats. The model has 74 degrees of freedom (DoF), of which the Cartesian position of the model is represented by 3 degrees and the Cartesian quaternion is represented by 4 degrees. The remaining 67 DoF represent the joint angles relative to the parent’s body frame in the kinematic tree. The model has 38 controllable torque actuators, and we use a subset of the included s-
ensors, which comprises (1) a velocimeter, (2) an accelerometer, (3) a gyroscope, and (4) force, torque, and touch sensors on its end effectors. The end effectors are chosen to be the four paws and the skull. • Fruit fly (Drosophila melanogaster ): We use a fruit fly model developed in previous work [25]. The model consists of 67 rigid body segments linked at 66 joints, yielding 102 degrees of freedom, and was reconstructed from high-resolution confocal microscopy of a female fly. Following their -
design, we remove the actuators for the
15

wings, probiscis, and antennae when training for the walking imitation task, resulting in 61 torque actuators to drive the joints. The end effectors are chosen to be the pretarsal claws. • Mouse arm (Mus musculus): A skeletal model of the mouse forelimb and estimations of muscle attachment points were provided based on light sheet microscopy data [60]. The model has 4 DoF in total: 3 DoF in the shoulder: elevation, rotation, and extension, and 1 DoF in the elbow. Our simplified model has 9 contro-
llable parameters, which are the following Hill-type muscle actuators: triceps (long), triceps (lateral), biceps (long), brachialis, pectoralis (clavicular), latissimus, posterior deltoid, anterior deltoid, and medial deltoid. Muscle attachment points were refined, and muscle parameters were found to produce forces within the range of real mouse forelimb muscles 0.2-1.2N [32]. • Worm (Caenorhabditis elegans): We use a body model developed in previous work [26]. The model consists of 25 body segmen-
ts linked by 24 joints. Each joint is actuated by 4 body wall muscles, dorsal left/right and ventral left/right – except for the tail, which lacks its ventral right muscle – making 95 body wall muscles. The model is constrained to 2D motion, i.e., only displacement in the XY plane and rotation along the Z axis. We also add anisotropic friction contact between the body model and the floor, which has been shown to be used by the worm to propel itself in agar [65]. • Stick insect (Sungaya aeta): We u-
sed a Sungaya aeta model consisting of 43 rigid body segments linked at 42 joints, resulting in 42 degrees of freedom. The model was constructed from a 3D scan obtained with the open photogrammetry platform scAnt [66]. The 3D mesh was preprocessed in Blender (Blender Foundation, Amsterdam, Netherlands; version 3.0), and then converted into an URDF model using Phobos [67]. The URDF model was converted into XML format and extended to an MJCF file using custom scripts.
For each of these models, we limit contacts between the model and the environment (a single ground plane) to only the end effectors to dramatically improve the throughput of MJX, which scales poorly with the number of contacts in the simulation. Because our imitation tasks only involve contact with the end effectors and implicitly constrain behavior to avoid self-collisions, these changes do not negatively impact the training results and are merely an optimization measure.
4.2 Kinematic Data
Markerless pose estimation was performed on multicamera video data to provide the necessary pose tracking data for the subsequent fit of inverse kinematics. The data are publicly available from their respective sources:
• Rat: We use a dataset collected in previous work [21] comprised of 842 5-second clips of freely behaving kinematic data, represented by 23 keypoints captured at 50 Hz. It was collected using DANNCE v1.3 [11] from multicamera video. It represents a wide range of behaviors, including various kinds of walking, rearing, and grooming. • Fruit fly: We use a dataset collected in previous work [68], which uses a spherical treadmill to enable 3D kinematic tracking of the fruit fly at different locomotor
16

speeds. This data was sampled at 300 Hz. The pose estimation was done with DeepLabCut [10] and Anipose [12]. To align the keypoint data (which uses arbitrary coordinate axes) to the body model using Cartesian coordinates, we first performed a Procrustes transformation to scale and rotate the average position of the keypoints in a single clip to the rest position of the fly body model. We then applied the transformation to all frames in the clip. Due to the data being collected on a spherical trea-
dmill, the data was not exactly aligned to the ground plane. To address this, we then performed a second transform that aligned the tarsal-claw keypoints to the ground plane. Finally, we used the rotational velocity of the ball as a proxy for the fly’s linear and angular velocity in the xy-plane. The data was then run through stac-mjx. Then, the result was linearly interpolated to be sampled at 500 Hz so that there are 10 physics steps per control step. • Mouse arm: A three-camera dataset was labe-
led using the CVAT annotation tool to generate ∼10,000 labeled frames per camera. This network was then run on a video consisting of 46 successful water reaching trials [69]. Predictions of the pose of the right shoulder, elbow, and wrist were generated with a single animal pose estimation network using the U-Net architecture in SLEAP [13]. A calibration video was recorded by placing a ChArUco board in the view of all cameras. Calibration was performed using the SLEAP-Anipose package, which is a w-
rapper around Anipose to allow for easy integration of 2D pose data from SLEAP. Calibration was performed with the SLEAP-Anipose library, which uses OpenCV to perform iterative sparse-bundle adjustment. It locates the 2D points on the ChArUco board and then triangulates them into 3D. Then the reprojection error is calculated by projecting back into 2D to evaluate the 3D estimation. This reprojection error is then minimized iteratively using L-BFGS to improve the 3D estimates and provide reliable t-
riangulation. • Nematode worm: We use a dataset collected and analyzed in previous work [70, 71] containing five 6-hour videos of freely moving C. elegans. The videos were collected using a custom LabView program from a tracking microscope captured at 20 Hz. We downsampled the 500 centerline points to 25 points via linear interpolation. The dataset represents a repertoire of forward/backward locomotion, omega turns, and headswings from worms spontaneously behaving on a food plate. However, we limi-
t training to clips of forward locomotion. • Stick insect: We used a dataset collected on a flat and smooth treadmill that perpetually kept S. aeta inside the imaging volume of a five camera array (ORX-10GS-51S5C-C, Teledyne, USA; Lens: 2/3” 8mm f/2.8 16 Megapixel Lens, Computar, Japan); active 2D motion compensation enabled the recording of untethered 3D kinematics at 75 Hz. Marker-less pose estimation of 50 keypoints was achieved across all camera views using a single U-net architecture in SLEAP-
 [13]. The network was pre-trained using synthetic data [72], and iteratively refined using 800 hand-annotated frames, selected from all five views. A calibration video was recorded by placing a checkerboard in view of all cameras. Camera calibration and triangulation were performed using Anipose [12]. The extracted 3D coordinates were translated and rotated to align the XY plane of a body-fixed coordinate system with the treadmill plane. The 3D kinematic data was
17

offset to account for the movement of the treadmill, estimated by tracking ArUco markers printed onto the belt surface using OpenCV, to obtain the absolute walking speed [73, 74].
4.3 stac-mjx Joint Marker Registration and Inverse Kinematics
stac-mjx implements a modified version of the Simultaneous Tracking and Calibration (STAC) algorithm [38], originally developed for system identification in robotics. The algorithm takes an iterative approach to solving inverse kinematics (“tracking”) and marker positions (“calibration”) simultaneously, formulated as the maximum like
lihood problem P
m minθm
PT
t=1 minqt log p (vtm | qt; θm) , where qt represents joint
angles, θm denotes marker site offsets, and vtm are marker site positions. stac-mjx is an implementation of this algorithm designed for use with animal pose tracking, leveraging JAX and MJX for fast parallelization on GPU. Our implementation is based on a previous implementation [21], which incorporated a warm start to inverse kinematics by beginning with optimizing the root body position only before proceeding to full body inverse kinematics. Then, individual parts of the model’s kinematic tree a-
re optimized independently for greater accuracy. We incorporate these additions to our GPU-accelerated implementation. We use Projected Gradient Descent (PGD) to optimize the pose given the individual frame’s keypoints, using box constraints to limit joint angle ranges. For optimizing the marker positions, we use Stochastic Gradient Descent (SGD) given every frame’s keypoints and corresponding body model pose in joint angles. Algorithm 1 describes the process in detail. We include standard configu-
ration parameters for stac-mjx in the code documentation.
18

Algorithm 1 stac-mjx: Parallelized STAC
Require: MuJoCo model M; initial marker offsets θ(0); initial joint states q(0); keypoints {vtm} for frames t = 1 : T , markers m = 1 : M ; body parts B; number of iterations K; box bounds l ≤ q ≤ u. Ensure: Updated poses {qt}tT=1 and marker offsets θ. 1: Initialize MuJoCo environment M. 2: θ ← θ(0); q1:T ← q(0)
1:T
3: Load keypoints vtm. ▷ Inverse kinematics loss
LIK(qt; θ) = 1
M
M
X
m=1
∥p(qt, θm) − vm
t ∥2
▷ Offset calibration loss
Loff(θ; {qt}) = 1
TM
T
X
t=1
M
X
m=1
∥p(qt, θm) − vm
t ∥2
Single clip registration
4: Warm start: update qt[: 7] using LIK(qt; θ) 5: for i = 1 to K do
6: Full-body inverse kinematics: update qt with PGD using LIK(qt; θ) 7: for each body part b ∈ B do 8: Restrict loss to m ∈ b, update qt with PGD 9: end for
10: Offsets: update θ with SGD using Loff(θ; {qt}) 11: end for
Dataset-wide parallelization using updated θ 12: Batch dataset {(q(b)
1:Tb , v(b))}B
b=1
13: In parallel over b: update q(b)
t with PGD using LIK(qt; θ)
14: return Updated {q(b)
t } and offsets θ
4.3.1 Smoothing Edge Effects
We used stac-mjx on a 3 hour continuous session to evaluate our trained policy on long unseen clips. In this scenario, stac-mjx produced small but noticeable edge effects when stitching together segments that were independently processed. To account for this, we include a feature in stac-mjx to handle long continuous data by processing overlapping segments, then blending the overlapping region using a crossfade procedure: Let a, b ∈ RO×D be the two overlapping segments.
19

For j = 0, . . . , O − 1, define the normalized position:
xj = j
O − 1.
Using a fixed center c = 0.5 and steepness s = 10.0, the sigmoid mixing weight is:
mj = 1
2 1 + tanh 10 (xj − 0.5)
2.
The crossfaded output CF(a, b) is defined elementwise by:
CF(a, b)j,d = (1 − mj) aj,d + mj bj,d, j = 0, . . . , O − 1, d = 1, . . . , D.
This procedure, in addition to tuning optimization parameters, results in negligible edge effects.
4.4 Deep Reinforcement Learning for motion imitation
4.4.1 Parallelized training
On-policy reinforcement learning algorithms are generally divided into two phases: data collection and policy updates. Policy updates consist of performing backpropagation on the neural networks, which are housed on the GPU. Data collection from physics environments consists of policy inference, simulating steps, and reward/observation calculation. This phase is most commonly performed on the CPU [75–79] as popular physics engines such as MuJoCo are CPU-bounded. By leveraging MJX, we overcome the -
data transfer problem, and also substantially improve simulation speed through the parallel environments—thousands of environments can run on a single GPU workstation/cluster node. Parallelizing CPU-based simulation is also possible, but typically requires provisioning additional cluster nodes, high-bandwidth interconnects, and a nontrivial distributed-training setup (job schedulers, networking and firewall configuration, synchronization, and data movement). Achieving the necessary throughput with-
 CPUs would ordinarily require multiple server-grade machines, whereas a single GPU can do the same job with far less operational overhead.
4.4.2 Task Environment
Input Observations
The proprioceptive observations are sampled at each timestep from the physics environment and are provided both as feedback to the policy’s decoder and used to calculate the reference observations. They are defined as sp
t ≜ (θt, ωt, τt, zt, φt, et) where θt are the joint angles, ωt are the joint angular velocities, τt are the applied joint torques, zt is the root height above the ground, φt is the direction of the global zaxis relative to the agent (akin to a vestibular sense), and et are the relative positions of the end effectors rotated to the egocentric frame.
20

The reference observations are kinematic features of the next t frames in the target trajectory, given in egocentric coordinates and supplied as input to the policy’s encoder. The reference observations are defined as sg
t ≜ (∆rt, ∆φt, ∆θt, ∆xt) where ∆rt is the difference between the agent and the target’s root position rotated to the agent’s egocentric frame, ∆φt is the difference between the agent and the target’s quaternions, ∆θt is the difference between the agent and the target’s joint angles, and ∆xt is the difference between the agent and the target’s local body positions in cartesian coordinates rotated to the agent’s egocentric frame. We compute the reference observations for 5 time steps into the future-
, allowing the agent’s policy to “lookahead”. We find that the choice of this trajectory length affects the model’s ability to generalize to longer motion clips (Supplementary Fig. 6). The observations are normalized to have μ ≈ 0 and σ2 ≈ 1: oˆt = (ot − μ)/σ. Welford’s online algorithm [80] is used to maintain these statistics efficiently. The running statistics are updated after every data collection round from the environment, and are maintained throughout training
Taking actions
Each environment step takes an action vector which maps to a control signal for each actuator in the animal model. The simulation is driven forward for a fixed timestep using this control signal to actuate the body. The duration of this timestep determines the policy’s action rate, which can be different for each animal model; this is defined in the environment configuration.
Reward
Similar to previous work [21, 25, 33], we decompose the objective of our rat and fly into four complementary reward terms to train the motion imitation policy. Together, they provide a dense reward signal representing the correct pose of the animal. At time t, the instantaneous reward is a weighted sum
rt = λpos rpos
t + λquat rquat
t + λjoint rjoint
t + λee ree
t,
where each r(·)
t ∈ [0, 1] increases as the learner better matches the registered reference trajectory. We define each of the reward terms as a gaussian kernel using L2 distance between the agent’s pose and the reference data:
r(.)
t = exp − 1
2σ2
(.)
∥q − qref∥2
2
!
The σ term is configured for each reward term based on the distance scales.
1. Position (rpos) penalizes the Cartesian displacement between the learner’s root/global position and the reference, encoding where the body is in the arena. 2. Quaternion / orientation (rquat) penalizes angular misalignment of headings, encoding which way the body is pointing. 3. Joint (rjoint) penalizes per-joint angle error, shaping local body configurations.
21

4. End effector (ree) penalizes distances between the learner’s distal effectors (e.g., hands, pretarsal claws) and the registered references, encouraging precise placement.
Termination criteria
Early termination criteria improve sample efficiency during training by avoiding training data in unrecoverable states. The environment terminates (leading to an automatic reset during training) if any of the following conditions are met:
• Fall detection. The agent’s root z-position in global cartesian coordinates falls outside a healthy range. • Maximum cartesian position error. The agent’s root position in global cartesian coordinates sufficiently diverges from the reference. • Maximum orientation error. The root quaternion of the agent sufficiently diverges from the reference. • Maximum joint pose error. The joint angles of the agent in aggregate sufficiently diverges from the reference.
The environment is also reset once it reaches the end of the reference motion trajectory clip.
4.4.3 Training with deep reinforcement learning
We employ Proximal Policy Optimization [39] as our reinforcement learning algorithm, with several modifications tailored for trajectory imitation learning. Our PPO implementation draws heavily from the Brax framework [81] while using our encoderdecoder policy architecture to compress motor intentions into a regularized stochastic latent space.
Problem Formalization
We can formalize the tracking objective as a Markov Decision Process (MDP) defined by the tuple M = ⟨S, A, T , R, γ⟩ containing states, actions, transition dynamics, reward function, and discount factor. The physics environment determines the state sp
t ∈ S and transition dynamics T . The policy πtrack computes the per-step action at ∈ A. The reward function computes the imitation reward, rt, for the policy as a function
of the simulation state, sp
t and the reference motion, smocap
t : rt = R(sp
t , smocap
t ). The
objective of the policy is to maximum the discounted return E
h
PT
t=1 γt−1rt
i
.
Policy network
Similar to prior work [21], our policy has an encoder-decoder architecture with a variational bottleneck in between, akin to a Variational Autoencoder [82]. Both the encoder and decoder are MLPs. The encoder, E(zt|sg
t:t′ ) = N (zt|μte, σte), receives a context window of reference observations as input and outputs the mean and logvariance of a diagonal Gaussian distribution. The reparameterization trick [82] is used to sample this distribution. The sampled latent vector, zt, is passed as
22

input to the decoder along with the proprioceptive observation from the environment, D(at|sp
t , zt) = tanh [N (at|μta, σta)], and outputs a parametric action distribution defined as a normal distribution followed by a hyperbolic tangent to bound the actions within [−1, 1]. At inference, the mean of both the encoder and decoder is used to generate actions. The weights of the networks are initialized using LeCun Uniform [83]. Both the encoder and decoder use SiLU activations [84] followed by layer normalization [85]. Network layer configurations are detailed in the supplement.
Latent space regularization
In order to regularize the intention space of the variational bottleneck, E(z), we enforce an Order 1 Autoregressive (AR(1)) prior [34, 86] through a Kullback-Leibler divergence (KL) loss. Compared to the standard isotropic Gaussian prior in VAEs, this prior encourages temporally correlated latents over action sequences, with each latent being conditioned on the previous one. This form of regularization has been shown to be important when applying the decoder to downstream tasks by making it amena-
ble to RL exploration through stochastic actions [87]. With no previous latent, the first intention is regularized to be close to a standard Gaussian distribution, while subsequent intentions are maintained close to the previous intentions:
First latent: AR(1)[E(z0)] = KL(E(z0)∥N (0, I))
Subsequent latents: AR(1)[E(zt)] = KL(E(zt)∥N (α · zt−1, σ2I))
where α = 0.95 and σ2 = 1 − α2 = 0.0975. During training, we employ a linear ramp-up scheduler for the AR(1) loss.
Value network
We employ a standard feed-forward MLP network as our critic. The network receives the complete observation (proprioceptive and reference observations) as input. The output is a single scalar value representing the estimated value of the current state. This network uses the LeCun Uniform initialization and employs ReLU activations.
Environment initialization and data collection
We use reference motion clips with lengths of Lclip frames sampled at a rate of fmocap. We initialize Nenvs environments in parallel using randomly chosen clips. Each environment begins at a random frame chosen from the first ninit frames in each clip. A small amount of noise σnoise is added to both the pose and the velocity of the first frame to prevent overfitting to exact initial conditions. We define the length of a full episode to be Tepisode. After initialization, we define one iteration of -
the data collection phase as the collection of Nminibatch number of mini-batches, each containing Bbatch trajectories spanning Lunroll frames. We define one round of data collection as collecting Lunroll frames of data from each of the Nenvs environments. Lunroll must be large enough to capture coherent temporal dynamics, but short enough to ensure training stability. If Lunroll is too small, Generalized Advantage Estimation (GAE) cannot leverage rewards from enough timesteps to be effective. If L-
unroll is too large, we obtain less
23

stable gradient estimates, risking training destabilization. As such, multiple rounds of data collection may be needed to fill the mini-batch quota before performing a gradient update. The data collection process is outlined in algorithm 2.
24

Algorithm 2 Motion Imitation Training Pipeline
Hyperparameters: Nenvs, Tepisode, Lunroll, Bbatch, Nminibatch, Nupdates, σnoise
1: // Environment Initialization 2: for environment i = 1 to Nenvs do 3: Sample clip ci and start frame fi randomly 4: q ← reference pose(ci, fi) + N (0, σ2
noise) ▷ Add reset noise 5: Initialize physics simulation with pose q 6: end for
7:
8: // Training Loop
9: while training active do 10: T ← ∅ ▷ Initialize trajectory buffer 11: // Data Collection Phase
12: for round r = 1 to ⌈(Bbatch × Nminibatch)/Nenvs⌉ do 13: // Parallel Trajectory Collection
14: for environment i = 1 to Nenvs in parallel do 15: τi ← ∅ ▷ Initialize trajectory for env i 16: for timestep t = 1 to Lunroll do 17: oi ← [reference window(ci, fi : fi+t); proprioception(si)] 18: ai ← πθ(oi) ▷ Policy inference
19: s′
i ← physics step(si, ai)
20: ri ← tracking reward(s′
i, reference(ci, fi))
21: τi ← τi ∪ {(oi, ai, ri, s′
i)}
22: // Auto-reset On Termination 23: if t ≥ Tepisode or safety violation(s′
i) then 24: Sample new (ci, fi) and reset with noise 25: else 26: si ← s′
i
27: end if 28: end for
29: T ← T ∪ {τi} ▷ Update trajectory buffer 30: end for 31: end for 32: // Training Phase
33: Compute advantages using GAE on all trajectories in T 34: for update u = 1 to Nupdates do 35: Tshuffled ← random permutation(T )
36: Split Tshuffled into Nminibatch chunks of size Bbatch
37: for minibatch m = 1 to Nminibatch do
38: Tm ← Tshuffled[(m − 1) × Bbatch : m × Bbatch]
39: Perform PPO gradient update on Tm ▷ Gradient update 40: end for 41: end for 42: end while
25

4.4.4 Transfer learning via a frozen MIMIC-MJX decoder
Pretraining
First, we training an encoder–decoder policy on motion imitation (Fig. 5a, top). An encoder qφ(zt | sg
t ) maps the guide/target state sequence sg
t (from demonstrations) to a Gaussian over latent commands with parameters (μt, σt). An AR(1) prior imposes
temporal smoothness on the latents, and a decoder, pθ(at | zt, sp
t ), maps the latent
command zt together with the current proprioceptive state sp
t to an action distribution.
Actions are executed in physics to produce sp
t+1. After this stage, θ defines a reusable skill decoder that interprets latent commands into body-specific motor outputs.
Policy transfer instantiation
To reuse the pre-trained controller on new tasks, we freeze the decoder parameters θ (denoted by the snowflake in Fig. 5a, bottom) and replace the encoder with a task policy πψ:
zt = πψ(ot), at ∼ pθ(at | zt, sp
t ),
where ot is any task-specific observation (e.g., vision features, goals, rewards). Only ψ is updated during transfer; θ remains fixed. In practice, we first load the pre-trained decoder pθ(at | zt, sp
t ) and keep its parameters fixed. We then construct a task policy πψ that maps task observations ot to latent commands zt with the same dimensionality used during pretraining. The decoder con
tinues to receive the same proprioceptive input sp
t as in pretraining (for the same body model). Training proceeds by rolling out in simulation: the task policy produces latents, the frozen decoder converts them to actions, rewards are computed for the task, and only ψ is updated (e.g., via reinforcement learning) while θ remains fixed. This modular interface makes the latent space zt effectively taskagnostic—structured during imitation pretraining by the decoder and then driven by a lightweight task policy for rapid transfer.
4.5 Bowl Escape Environment
The overall objective of the bowl escape environment is that the agent needs to learn a way to escape from the center of the bowl as far as possible. Notably, the reward design itself is not concerned about a specific behavior that you use to escape the bowl, since the reward function only cares about the location of the agents.
4.5.1 State Space and Task Overview
The agent (a torque-controlled body with a floating base) starts near the center of a concave heightfield (the “bowl”) and is rewarded for reaching the rim while staying upright and moving near a target speed. Because MJX does not currently support collisions between height fields and ellipsoid geometries, we replaced the rat’s ellipsoid foot geoms with boxes for this transfer task. The ground is a heightfield H ∈ [0, 1]N×N scaled in world coordinates by horizontal scale h > 0 (half–width) and ver-
tical scale v > 0.
26

World/grid mapping.
Let world planar coordinates be (x, y) ∈ [−h, h]2. Define normalized texture coordi
nates
u= x+h
2h , v = y + h
2h (u, v ∈ [0, 1]),
and corresponding grid indices
j = u (N − 1) , i = v (N − 1) , (i, j) ∈ {0, . . . , N − 1}2.
The world’s ground height is
zground(x, y) = v H[i, j]. (1)
The grid spacing in world units is ∆ = 2h
N−1 .
4.5.2 Bowl Geometry
We construct a smooth concave “Gaussian bowl” and add controllable roughness via periodic 2D Perlin noise. A radial gate blends out the noise near the origin to ensure a clean launch zone.
Base Gaussian Depression
On a normalized square (ξ, η) ∈ [−1, 1]2 (linearly mapped from grid indices), define the radially symmetric depression
B(ξ, η; σ, A) = A exp − ξ2 + η2
2σ2 , σ > 0, A < 0, (2)
sampled at N × N points to obtain B ∈ RN×N . Larger |A| deepens the bowl; smaller σ sharpens it.
Tileable 2D Perlin Noise
Let Rx, Ry ∈ N be the desired number of periods across the domain. Construct a rectified integer lattice
L = {(p, q) | p ∈ {0, . . . , Rx}, q ∈ {0, . . . , Ry}},
with periodic boundary conditions so that gradients at p = 0 and p = Rx (and analogously in q) match. Assign each node (p, q) ∈ L a unit gradient gpq ∈ R2. For a continuous coordinate (u ̃, v ̃) ∈ [0, 1]2, scale by periods,
u ̄ = Rx u ̃, v ̄ = Ry v ̃,
and let p = ⌊u ̄⌋, q = ⌊v ̄⌋, with local cell coordinates
tx = u ̄ − p, ty = v ̄ − q (tx, ty ∈ [0, 1]).
27

Define corner dot products
n00 = ⟨gp,q, (tx, ty)⟩, n10 = ⟨gp+1,q, (tx − 1, ty)⟩, (3)
n01 = ⟨gp,q+1, (tx, ty − 1)⟩, n11 = ⟨gp+1,q+1, (tx − 1, ty − 1)⟩, (4)
with indices taken modulo (Rx, Ry) for tileability. Using the quintic fade f (s) = 6s5 − 15s4 + 10s3, interpolate
n ̃0 = (1 − f (tx)) n00 + f (tx) n10, (5)
n ̃1 = (1 − f (tx)) n01 + f (tx) n11, (6)
P (u ̃, v ̃) = (1 − f (ty)) n ̃0 + f (ty) n ̃1. (7)
The raw Perlin field P has zero mean and bounded variance; we optionally scale and shift to [0, 1] by Pe = P − min(P )
max(P ) − min(P ) . (8)
Noise Gating and Normalization
Let c = N−1
2 be the grid center and rij = p(i − c)2 + (j − c)2 a discrete radius.
Choose inner/outer gating radii 0 ≤ rin < rout ≤ √2 N−1
2 . Define a smooth radial weight
wij = smoothstep rij − rin
rout − rin
, smoothstep(s) =

 
 
0, s ≤ 0,
3s2 − 2s3, 0 < s < 1,
1, s ≥ 1.
(9)
Given a noise amplitude λ ≥ 0, the raw height is
H0 = (1 − w) ⊙ B + w ⊙ B + λ Pe , (10)
where ⊙ denotes element-wise multiplication and w the matrix of wij. Finally, normalize to [0, 1]:
H = H0 − min(H0)
max(H0) − min(H0) ∈ [0, 1]N×N . (11)
Surface Tangents and Normal
Finite differences on the grid give
∂xH ij ≈ H[i, j + 1] − H[i, j − 1]
2 , ∂yH ij ≈ H[i + 1, j] − H[i − 1, j]
2 . (12)
28

In world units (with vertical scale v and horizontal step ∆), the ground surface at (i, j) has tangents
tx = ∆, 0, v ∂xH , ty = 0, ∆, v ∂yH , (13)
and the unit normal
nˆ = tx × ty
∥tx × ty∥ . (14)
4.5.3 Observations
At time t, the policy input concatenates a task–specific vector otask
t and a propriocep
tive vector oprop
t:
ot = otask
t ∥ oprop
t.
Task–specific observations.
otask
t = at−1, obase, okin, otouch, oorig , (15)
where at−1 is the previous action; obase contains body–frame base orientation and linear/angular velocities; okin collects joint angles/velocities; otouch encodes contact/tactile readings; and oorig provides the agent pose relative to the bowl origin (e.g., planar displacement and heading in the torso frame).
Proprioceptive observations.
Let q and q ̇ be generalized coordinates and velocities, excluding the floating base entries. With actuator signals τact and selected end–effector positions expressed in the
torso frame,
oprop
t = q7:, q ̇6:, τact, pEE, okin . (16)
4.5.4 Reward and Termination
Let the torso planar position be (xt, yt) and ρt = pxt2 + yt2. The bowl half–width is h.
Reward Scaling
For a scalar s and target interval [a, b] (with a ≤ b), define a piecewise–linear tolerance:
tollin(s; [a, b], m) =

    
    
0, s ≤ 0,
min 1, s
m , a = b = m,
clip s − a
b − a , 0, 1 , a < b,
(17a)
clip(x, 0, 1) = min(1, max(0, x)). (17b)
29

Spawn Launchpad Smoothing
A radius–to–rim shaping that ramps from 0 at the center to 1 by the rim:
resc(t) = min 1, ρt
h . (18)
Uprightness
Let zˆ be the world up-axis, and let ztorso, zhead be the local z-axes (third rotation columns) of torso and head. With allowable tilt θ (typically θ = 0◦),
rup(t) = 1
2 tollin ⟨ztorso, zˆ⟩; [cos θ, ∞), 1+cos θ + 1
2 tollin ⟨zhead, zˆ⟩; [cos θ, ∞), 1+cos θ .
(19)
Speed Setpoint
Let vt = v∥⃗ torso(t)∥ be the torso linear speed and v⋆ > 0 a target speed. A triangular peak at v⋆ is rspd(t) = tollin vt; [v⋆, v⋆], v⋆ , (20)
which equals 1 at vt = v⋆ and decreases linearly to 0 at vt ∈ {0, 2v⋆}.
Total Reward
rt = resc(t) · rup(t)
| {z }
reach rim while upright
+ rspd(t)
| {z }
move near target speed
(21)
Termination
Let zt be the torso height and zground(xt, yt) the terrain height below the torso. The episode fails if
zt ≤ zground(xt, yt) + ε, ε ≈ 0.03 m. (22)
Environment Parameters
N = 128, h = 2.0, v = 0.2,
σ = 1.25, A = −10, λ ∈ [0, 1],
Rx = Ry = 8, rin = 0.05N, rout = 0.25N,
v⋆ = 0.75 m/s, horizon ≈ 1500 control steps.
4.6 Gait Analysis
We segment gait cycles by employing swing-stance transitions, detected as collisions between the rat’s hands and the environment’s ground. A gait cycle is defined from the beginning of a stance until the beginning of the next stance. The left forepaw was chosen to determine the boundaries of the gait cycles. We achieve phase normalization of joint angles by resampling all phase-locked gait cycles to 100 time points to represent the percentage of the gait cycle progression using cubic interpolation-
.
30

4.7 Latent Space Analysis
4.7.1 Mouse arm reaching
To analyze the representational geometry of the network, we applied principal component analysis (PCA) to the intention bottleneck and to each of the three hidden layers of the encoder and decoder. For each layer, activations with dimensionality (clips, timesteps, 512) were reshaped into a two-dimensional matrix of shape (clips × timesteps, 512) and PCA was performed. The first three principal components were retained, and the transformed data were reshaped back into (clips, timesteps, 3) to prese-
rve temporal and clip structure. The same procedure was applied to the intention representations, resulting in the top three principal components. For each analysis, the proportion of variance explained by the first three components was recorded to quantify the representational compression achieved by PCA. To enable joint visualization of neural and behavioral dynamics, the three components were concatenated with a behavioral covariate (the joint angle qpose), producing arrays of shape (clips, tim-
esteps, 4). The 3D visualization of the top 3 PCs was visualized for the latent bottleneck and each layer of the decoder (Fig. 5c).
4.7.2 Fly walking
Using a trained policy on a dataset of fly walking, with a latent dimensionality of 60, we recorded network activations during each clip of walking at various speeds. We represented each trajectory frame by sampling the latent space activity with a timedelay embedding with a half-window of 30ms, resulting in a 31 frame window of latent space activations with a total of 1860 dimensions (60 ∗ 31). To calculate the speed of each clip in Fig. 5d, we calculated the instantaneous speed between each fram-
e, averaging over the clip to get the final value.
31

5 Supplementary Information
The online version of the article contains supplementary material added below.
Supplementary Figures.
Supplementary Fig. 1: Screenshots of the STAC Keypoint Correspondence user interface. Top: Initial interface displaying pose tracking landmarks (blue) and the virtual body model. Bottom: Interface after establishing correspondences. Red dots indicate established correspondences; blue dots indicate unmatched points.
32

0 2000 4000 6000 8000 Number of batches
100
125
150
175
200
Frames Per Second (FPS)
stac-mjx FPS scaling with parallelism
Supplementary Fig. 2: stac-mjx frame processing speed as a function of the number of parallel batches. The plot shows frames per second (FPS) when processing 360,000 total frames across different batch configurations.
Baseline Position Quat Joint EndEff Coarse Fine
0
10
20
30
40
50
60
Keypoint Error (mm)
forelimbs
hindlimbs
back
head
total
Supplementary Fig. 3: Ablation studies on various reward terms of the rat. Keypoint error distributions are shown as between track-mjx-reproduced trajectories and stac-mjx-registered reference.
33

Supplementary Fig. 4: SPS for the rat environment on different hardware: H100, L40S, A100, A6000, V100, RTX8000, and a baseline CPU MuJoCo implementation.
Supplementary Fig. 5: Evaluation of continuous tracking performance for variable trajectory length (TL) on a held-out dataset.
34

Supplementary Fig. 6: Bowl escape task solved by a randomly initialized policy using position actuators. Top: rendered trajectory. Bottom: end-effector contact timing and cumulative reward. The policy achieves task success but with unnatural gait. Paw abbreviations HR: hind-right, HL: hind-left, FR: fore-right, FL: fore-left.
35

Supplementary Tables.
Table 1: Imitation training config parameters for each animal body model.
PPO Params Rat Fly Worm Mouse Arm Stick Insect num envs 4096 4096 4096 4096 4096 batch size 1024 1024 1024 1024 1024 num minibatches 16 16 16 8 16 learning rate 0.0001 0.0001 0.0001 0.0001 0.0001 clipping epsilon 0.2 0.2 0.2 0.2 0.2 discounting 0.95 0.95 0.95 0.95 0.97 entropy cost 0.01 0.01 0.002 0.001 0.0001 unroll length 20 20 20 20 20 kl weight 0.1 0.1 0.0001 0.00001 0.1 Network Params
encoder layer sizes [512,256,256] [256,256] [512,512,512] [512,512,512] [512,512,512] decoder layer sizes [512,512,256,256] [256,256] [512,512,512] [512,512,512] [512,512,512,256] critic layer sizes [512,512,256,256] [256,256] [512,512,512] [512,512,512] [512,512,256] intention size 60 60 8 4 60 Sim Params
sim dt 0.002 0.0002 0.005 0.00125 0.002 ctrl dt (sim dt * steps...) 0.01 0.002 0.1 0.0025 0.01 solver CG CG Newton CG CG iterations 5 4 4 6 6 ls iterations 5 4 4 6 6 Reward Params
pos exp scale 400 400 0.1 0.0 40000 quat exp scale 4 4 30 0.0 4 joint exp scale 0.25 0.25 1 0.2 0.25 end eff exp scale 500 100 0.3 0.0 50000 body pos exp scale 0.0 8 0.5 0.0 8 joint vel exp scale 0.0 0.5 1 0.0 0.5 pos weight 1 1 1 0.0 1 quat weight 1 1 1 0.0 1 joint weight 1 1 2 5 1 end eff weight 1 1 1 0.0 1 body pos weight 0.0 0.0 1 0.0 0.0 joint vel weight 0.0 0.0 3 0.0 0.0 control cost 0.02 0.02 0.0 0.15 0.02 control difference cost 0.02 0.1 0.0 0.0 0.02 energy cost 0.01 0.001 0.0 0.01 0.001 v-
ariance cost 0.01 0.0 0.0 0.0 0.0 variance window 50 0.0 0.0 0.0 0.0
Supplementary Movies. Available online at: https://mimic-mjx.talmolab.org/
1. Supp. Movie 1: The video shows MIMIC-MJX motion capture registration and replay demonstrated across diverse morphologies: rat, fly, mouse arm, worm, and stick insect. 2. Supp. Movie 2: The video shows transfer learning performance in the rat bowlescape task, comparing agents with and without pretrained decoder initialization.
36

6 Acknowledgments
We acknowledge Sean Escola, Yuval Tassa and Josh Merel for helpful discussions throughout the development of this project. This work was supported by a L.I.F.E. Foundation grant to TDP, a Salk Innovation Award to EA and TDP, an NIH BRAIN Initiative grant U01NS136507 to BPO ̈ , TDP, BWB, EA, a SFARI Investigator Award to BPO ̈ , an ARNI award to BPO ̈ and BR, an AFOSR award FA9550-19-1-0386 to BWB, and the Richard & Joan Komen University Chair to BWB. ETTA was supported by a Swartz Theory Postdocto-
ral Fellowship, and the AFOSR FA9550-19-1-0386. EW was supported by the Swedish Foundation for International Cooperation in Research and Higher Education (STINT). Additional support includes National Institutes of Health grant F32 NS120998 and the Salk Pioneer Fund Postdoctoral Scholar Award to AN, the Salk Alumni Fellowship Award and Salk Women & Science Research Award to AT, National Institutes of Health grant F32 NS126231 and the Salk Alumni Fellowship Award to KWH, and National Institutes of H-
ealth grants R01 NS128898 and R01 NS111479 to EA. BAR and AS were supported by the National Science Foundation and DoD OUSD (R&E) under Cooperative Agreement PHY-2229929 (The NSF AI Institute for Artificial and Natural Intelligence). BAR and AS were also supported by the Natural Sciences and Engineering Research Council of Canada (Discovery Grant: RGPIN-2020-05105; Discovery Accelerator Supplement: RGPAS-2020-00031) and the Canadian Institute for Advanced Research (Canada AI Chair; Learning in Mac-
hine and Brains Fellowship). AS was also supported by the FRQNT Master’s Scholarship. The research was enabled, in part, by support provided by (Calcul Qu ́ebec) (https://www.calculquebec.ca/en/), the Digital Research Alliance of Canada (https://alliancecan.ca/en), and NVIDIA, in the form of computational resources. SWF acknowledges funding from the Howard Hughes Medical Institute and the Freedom Together Foundation.
Data Availability. We have open-sourced all the data used in this work. This includes data that is already publicly available, as well as data collected by our team. Data that was already publicly available has been cited in this work. Model weights are available on Hugging Face at https://huggingface.co/talmolab/MIMIC-MJX and sample configuration files and datasets are available at https://huggingface.co/datasets/talmolab/MIMIC-MJX.
Code Availability. Our code is open-sourced and available at https://github.com/talmolab/stac-mjx and https://github.com/talmolab/track-mjx. Documentation, tutorials, and usage guides are available on the documentation page at https://mimic-mjx.talmolab.org.
References
[1] Robinson, D. A. The oculomotor control system: A review. Proc. IEEE Inst. Electr. Electron. Eng. 56, 1032–1049 (1968).
[2] Kristan, W. B., Jr, Calabrese, R. L. & Friesen, W. O. Neuronal control of leech behavior. Prog. Neurobiol. 76, 279–327 (2005).
37

[3] Grillner, S. Biological pattern generation: the cellular and computational logic of networks in motion. Neuron 52, 751–766 (2006).
[4] Marder, E. & Bucher, D. Understanding circuit dynamics using the stomatogastric nervous system of lobsters and crabs. Annu. Rev. Physiol. 69, 291–316 (2007).
[5] Dickinson, M. H. et al. How animals move: an integrative view. Science 288, 100–106 (2000).
[6] Anderson, D. J. & Perona, P. Toward a science of computational ethology. Neuron 84, 18–31 (2014).
[7] Datta, S. R., Anderson, D. J., Branson, K., Perona, P. & Leifer, A. Computational neuroethology: A call to action. Neuron 104, 11–24 (2019).
[8] Pereira, T. D., Shaevitz, J. W. & Murthy, M. Quantifying behavior to understand the brain. Nat. Neurosci. 1–13 (2020).
[9] Pereira, T. D. et al. Fast animal pose estimation using deep neural networks. Nat. Methods 16, 117–125 (2019).
[10] Mathis, A. et al. DeepLabCut: markerless pose estimation of user-defined body parts with deep learning. Nat. Neurosci. 21, 1281–1289 (2018).
[11] Dunn, T. W. et al. Geometric deep learning enables 3D kinematic profiling across species and environments. Nat. Methods 18, 564–573 (2021).
[12] Karashchuk, P. et al. Anipose: A toolkit for robust markerless 3D pose estimation. Cell Rep. 36, 109730 (2021).
[13] Pereira, T. D. et al. SLEAP: A deep learning system for multi-animal pose tracking. Nat. Methods 19, 486–495 (2022).
[14] Monsees, A. et al. Estimation of skeletal kinematics in freely moving rodents. Nat. Methods 19, 1500–1509 (2022).
[15] Biderman, D. et al. Lightning pose: improved animal pose estimation via semisupervised learning, bayesian ensembling and cloud-native open-source tools. Nat. Methods 1–13 (2024).
[16] Doerig, A. et al. The neuroconnectionist research programme. Nat. Rev. Neurosci. 24, 431–450 (2023).
[17] Zador, A. et al. Catalyzing next-generation artificial intelligence through NeuroAI. Nat. Commun. 14, 1597 (2023).
38

[18] Cook, S. J. et al. Whole-animal connectomes of both caenorhabditis elegans sexes. Nature 571, 63–71 (2019).
[19] Dorkenwald, S. et al. Neuronal wiring diagram of an adult brain. Nature 634, 124–138 (2024).
[20] Merel, J. et al. Deep neuroethology of a virtual rodent. arXiv [q-bio.NC] (2019).
[21] Aldarondo, D. et al. A virtual rodent predicts the structure of neural activity across behaviours. Nature 632, 594–602 (2024).
[22] Lobato-Rios, V. et al. NeuroMechFly, a neuromechanical model of adult drosophila melanogaster. Nat. Methods 19, 620–627 (2022).
[23] Wang-Chen, S. et al. NeuroMechFly v2: simulating embodied sensorimotor control in adult drosophila. Nat. Methods 21, 2353–2362 (2024).
[24] Melis, J. M., Siwanowicz, I. & Dickinson, M. H. Machine learning reveals the control mechanics of an insect wing hinge. Nature 628, 795–803 (2024).
[25] Vaxenburg, R. et al. Whole-body physics simulation of fruit fly locomotion. Nature 643, 1312–1320 (2025).
[26] Chen, Z., Yu, Y. & Xue, X. A connectome-based digital twin caenorhabditis elegans capable of intelligent sensorimotor behavior. Mathematics 11, 2442 (2023).
[27] Kim, J., Florman, J. T., Santos, J. A., Alkema, M. J. & Shlizerman, E. Modular integration of neural connectomics, dynamics and biomechanics for identification of behavioral sensorimotor pathways in caenorhabditis elegans. bioRxiv 724328 (2019).
[28] Zhao, M. et al. An integrative data-driven model simulating C. elegans brain, body and environment interactions. Nat. Comput. Sci. 4, 978–990 (2024).
[29] Wang, J. et al. NeuroSimWorm: A multisensory framework for modeling and simulating neural circuits of caenorhabditis elegans. Neurocomputing 638, 130055 (2025).
[30] Sarma, G. P. et al. OpenWorm: overview and recent advances in integrative biological simulation of caenorhabditis elegans. Philos. Trans. R. Soc. Lond. B Biol. Sci. 373, 20170382 (2018).
[31] DeWolf, T., Schneider, S., Soubiran, P., Roggenbach, A. & Mathis, M. Neuromusculoskeletal modeling reveals muscle-level neural dynamics of adaptive learning in sensorimotor cortex. bioRxiv 2024.09.11.612513 (2024).
39

[32] Ramalingasetty, S. T. et al. A whole-body musculoskeletal model of the mouse. IEEE Access 9, 163861–163881 (2021).
[33] Peng, X. B., Abbeel, P., Levine, S. & van de Panne, M. DeepMimic: Exampleguided deep reinforcement learning of physics-based character skills. arXiv [cs.GR] (2018).
[34] Merel, J. et al. Neural probabilistic motor primitives for humanoid control. arXiv [cs.LG] (2018).
[35] Eyjolfsdottir, E., Branson, K., Yue, Y. & Perona, P. Learning recurrent representations for hierarchical behavior modeling. arXiv [cs.AI] (2016).
[36] MuJoCo XLA Authors. MuJoCo XLA (MJX). https://mujoco.readthedocs.io/ en/stable/mjx.html.
[37] Bradbury, J. et al. JAX: composable transformations of Python+NumPy programs (2018).
[38] Wu, T., Tassa, Y., Kumar, V., Movellan, J. & Todorov, E. STAC: Simultaneous tracking and calibration. 2013 13th IEEE-RAS International Conference on Humanoid Robots (Humanoids) 469–476 (2013).
[39] Schulman, J., Wolski, F., Dhariwal, P., Radford, A. & Klimov, O. Proximal policy optimization algorithms. arXiv [cs.LG] (2017).
[40] Yadan, O. Hydra - a framework for elegantly configuring complex applications. Github (2019). URL https://github.com/facebookresearch/hydra.
[41] Biewald, L. Experiment tracking with weights and biases (2020).
[42] Ulutas, E. Z., Pradhan, A., Koveal, D. & Markowitz, J. E. High-resolution in vivo kinematic tracking with customized injectable fluorescent nanoparticles. Sci. Adv. 11, eadu9136 (2025).
[43] Cotton, R. J. KinTwin: Imitation learning with torque and muscle driven biomechanical models enables precise replication of able-bodied and impaired movement from markerless motion capture. arXiv [cs.CV] (2025).
[44] French, R. M. Catastrophic forgetting in connectionist networks. Trends Cogn. Sci. 3, 128–135 (1999).
[45] Shenoy, K. V., Sahani, M. & Churchland, M. M. Cortical control of arm movements: a dynamical systems perspective. Annu. Rev. Neurosci. 36, 337–359 (2013).
[46] DeAngelis, B. D., Zavatone-Veth, J. A. & Clark, D. A. The manifold structure of limb coordination in walking drosophila. Elife 8 (2019).
40

[47] Pandarinath, C. et al. Inferring single-trial neural population dynamics using sequential auto-encoders. Nat. Methods 15, 805–815 (2018).
[48] Keshtkaran, M. R. et al. A large-scale neural network training framework for generalized estimation of single-trial population dynamics. Nat. Methods 19, 1572–1577 (2022).
[49] Singh, S. H., van Breugel, F., Rao, R. P. N. & Brunton, B. W. Emergent behaviour and neural dynamics in artificial agents tracking odour plumes. Nat. Mach. Intell. 5, 58–70 (2023).
[50] Ohana, R. et al. The well: a large-scale collection of diverse physics simulations for machine learning. Proceedings of the 38th International Conference on Neural Information Processing Systems 37, 44989–45037 (2025).
[51] Macklin, M. Warp: A high-performance python framework for gpu simulation and graphics. https://github.com/nvidia/warp (2022). NVIDIA GPU Technology Conference (GTC).
[52] Liu, S. et al. From motor control to team play in simulated humanoid football. Sci Robot 7, eabo0235 (2022).
[53] Lappalainen, J. K. et al. Connectome-constrained networks predict neural activity across the fly visual system. Nature 634, 1132–1140 (2024).
[54] Cowley, B. R. et al. Mapping model units to visual neurons reveals population code for social behaviour. Nature 1–9 (2024).
[55] Ding, Z. et al. Functional connectomics reveals general wiring rule in mouse visual cortex. Nature 640, 459–469 (2025).
[56] Wang, E. Y. et al. Foundation model of neural activity predicts response to new stimulus types. Nature 640, 470–477 (2025).
[57] Pugliese, S. M. et al. Connectome simulations identify a central pattern generator circuit for fly walking. bioRxiv 2025.09.12.675944 (2025).
[58] Plum, F. & Labonte, D. scAnt-an open-source platform for the creation of 3D models of arthropods (and other small objects). PeerJ 9, e11155 (2021).
[59] Bolan ̃os, L. A. et al. A three-dimensional virtual mouse generates synthetic training data for behavioral analysis. Nat. Methods 1–4 (2021).
[60] Gilmer, J. I. et al. A novel biomechanical model of the proximal mouse forelimb predicts muscle activity in optimal control simulations of reaching movements. J. Neurophysiol. 133, 1266–1278 (2025).
41

[61] Ting, L. H. et al. Neuromechanical principles underlying movement modularity and their implications for rehabilitation. Neuron 86, 38–54 (2015).
[62] Unger, T. et al. Differentiable biomechanics for markerless motion capture in upper limb stroke rehabilitation: A comparison with optical motion capture. IEEE Trans. Med. Robot. Bionics PP, 1–1 (2025).
[63] Rosenberg, M. C., Winner, T. S., Berman, G. J., Ting, L. H. & Kesar, T. M. Neuromechanical gait signatures reveal holistic biomechanical responses to walking speed modulation in stroke survivors. medRxiv 2022.12.14.22283438 (2025).
[64] Cotton, R. J. KinTwin: Imitation learning with torque and muscle driven biomechanical models enables precise replication of able-bodied and impaired movement from markerless motion capture. arXiv [cs.CV] (2025).
[65] Chung, T., Chang, I. & Kim, S. ElegansBot: Development of equation of motion deciphering locomotion including omega turns of caenorhabditis elegans. eLife (2023).
[66] Plum, F. & Labonte, D. scant—an open-source platform for the creation of 3d models of arthropods (and other small objects). PeerJ 9, e11155 (2021).
[67] von Szadkowski, K. & Reichel, S. Phobos: A tool for creating complex robot models. Journal of Open Source Software 5, 1326 (2020).
[68] Pratt, B. G., Lee, S.-Y. J., Chou, G. M. & Tuthill, J. C. Miniature linear and split-belt treadmills reveal mechanisms of adaptive motor control in walking drosophila. Curr. Biol. 34, 4368–4381.e5 (2024).
[69] Thanawalla, A. R. et al. Cerebellar outputs for rapid directional refinement of forelimb movement. Neuroscience (2025).
[70] Cermak, N. et al. Whole-organism behavioral profiling reveals a role for dopamine in state-dependent motor program coupling in C. elegans. Elife 9 (2020).
[71] Cohen, A. E., Hastewell, A. D., Pradhan, S., Flavell, S. W. & Dunkel, J. Schr ̈odinger dynamics and berry phase of undulatory locomotion. Phys. Rev. Lett. 130, 258402 (2023).
[72] Plum, F., Bulla, R., Beck, H. K., Imirzian, N. & Labonte, D. replicant: a pipeline for generating annotated images of animals in complex environments using unreal engine. Nature Communications 14, 7195 (2023).
[73] Garrido-Jurado, S., Mun ̃oz-Salinas, R., Madrid-Cuevas, F. & Marı ́n-Jime ́nez, M. Automatic generation and detection of highly reliable fiducial markers under occlusion. Pattern Recognition 47, 2280–2292 (2014).
42

[74] Bradski, G. The opencv library. Dr. Dobb’s Journal: Software Tools for the Professional Programmer 25, 120–123 (2000).
[75] Keller, R. et al. Autonomous Behavior and Whole-Brain Dynamics Emerge in Embodied Zebrafish Agents with Model-based Intrinsic Motivation (2025). URL http://arxiv.org/abs/2506.00138. ArXiv:2506.00138 [q-bio].
[76] Chiappa, A. S., An, B., Simos, M., Li, C. & Mathis, A. Arnold: a generalist muscle transformer policy (2025). URL http://arxiv.org/abs/2508.18066. ArXiv:2508.18066 [cs].
[77] Xu, Z. et al. Open-Source Reinforcement Learning Environments Implemented in MuJoCo with Franka Manipulator (2024). URL http://arxiv.org/abs/2312.13788. ArXiv:2312.13788 [cs] version: 3.
[78] Akki, S. & Chen, T. Benchmarking Model Predictive Control and Reinforcement Learning Based Control for Legged Robot Locomotion in MuJoCo Simulation (2025). URL http://arxiv.org/abs/2501.16590. ArXiv:2501.16590 [cs].
[79] Henaff, M., Fujimoto, S. & Rabbat, M. Scalable Option Learning in High-Throughput Environments (2025). URL http://arxiv.org/abs/2509.00338. ArXiv:2509.00338 [cs].
[80] Welford, B. P. Note on a Method for Calculating Corrected Sums of Squares and Products. Technometrics 4, 419–420 (1962). URL http://www.tandfonline.com/ doi/abs/10.1080/00401706.1962.10490022.
[81] Freeman, C. D. et al. Brax – a differentiable physics engine for large scale rigid body simulation. arXiv [cs.RO] (2021).
[82] Kingma, D. P. & Welling, M. Auto-Encoding Variational Bayes (2022). URL http://arxiv.org/abs/1312.6114. ArXiv:1312.6114 [stat].
[83] LeCun, Y., Bottou, L., Orr, G. B. & Mu ̈ller, K. R. in Efficient BackProp (eds Orr, G. B. & Mu ̈ller, K.-R.) Neural Networks: Tricks of the Trade 9–50 (Springer, Berlin, Heidelberg, 1998). URL https://doi.org/10.1007/3-540-49430-8 2.
[84] Elfwing, S., Uchibe, E. & Doya, K. Sigmoid-Weighted Linear Units for Neural Network Function Approximation in Reinforcement Learning (2017). URL http: //arxiv.org/abs/1702.03118. ArXiv:1702.03118 [cs].
[85] Ba, J. L., Kiros, J. R. & Hinton, G. E. Layer Normalization (2016). URL http://arxiv.org/abs/1607.06450. ArXiv:1607.06450 [stat].
[86] Tirumala, D. et al. Behavior priors for efficient reinforcement learning. arXiv [cs.AI] (2020).
43

[87] Luo, Z. et al. Universal Humanoid Motion Representations for Physics-Based Control (2024). URL http://arxiv.org/abs/2310.04582. ArXiv:2310.04582 [cs].
44

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:13.378Z
- **Text Length:** 91163 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 44 of 44
