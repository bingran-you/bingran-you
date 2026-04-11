# PDF Document: Yuan et al. - 2025 - AutoMAS A Generic Multi-Agent System for Algorithm Self-Adaptation in Wireless Networks.pdf

**File Path:** Yuan et al. - 2025 - AutoMAS A Generic Multi-Agent System for Algorithm Self-Adaptation in Wireless Networks.pdf

**Processed Date:** 2026-02-10T18:17:15.088Z

**File Size:** 995.14 KB

**Total Pages:** 6

**Extracted Pages:** 6

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3296

**Title:** AutoMAS: A Generic Multi-Agent System for Algorithm Self-Adaptation in Wireless Networks

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

AutoMAS: A Generic Multi-Agent System for
Algorithm Self-Adaptation in Wireless Networks
Dingli Yuan∗, Jingchen Peng∗, Jie Fan∗, Boxiang Ren∗, Lu Yang†‡ and Peng Liu† ∗Department of Mathematical Sciences, Tsinghua University, Beijing, China †Wireless Technology Lab, Central Research Institute, 2012 Labs, Huawei Tech. Co. Ltd., China Email: yanglu87@huawei.com
Abstract—The wireless communication environment has the characteristic of strong dynamics. Conventional wireless networks operate based on the static rules with predefined algorithms, lacking the self-adaptation ability. The rapid development of artificial intelligence (AI) provides a possibility for wireless networks to become more intelligent and fully automated. As such, we plan to integrate the cognitive capability and high intelligence of the emerging AI agents into wireless networks. In this-
 work, we propose AutoMAS, a generic multiagent system which can autonomously select the most suitable wireless optimization algorithm according to the dynamic wireless environment. Our AutoMAS combines theoretically guaranteed wireless algorithms with agents’ perception ability, thereby providing sounder solutions to complex tasks no matter how the environment changes. As an example, we conduct a case study on the classical channel estimation problem, where the mobile user moves in diverse enviro-
nments with different channel propagation characteristics. Simulation results demonstrate that our AutoMAS can guarantee the highest accuracy in changing scenarios. Similarly, our AutoMAS can be generalized to autonomously handle various tasks in 6G wireless networks with high accuracy. Index Terms—multi-agent system, cloud-radio access network, algorithm self-adaptation
I. INTRODUCTION
The advancement of artificial intelligence (AI) technologies has enabled the technical feasibility of fully automated and intelligent wireless networks [1]. Current wireless networks are operated based on static rules, such as 3rd generation partnership project (3GPP) standard, and each vendor owning its core algorithms embedded in its equipments. Note that due to the lack of intelligence, existing wireless algorithms cannot be changed automatically to keep the optimal performance in the dynamic w-
ireless environments [2]. In the following, we will take the cloud-radio access network (C-RAN) architecture as an example, to describe the necessity and feasibility of the algorithm self-adaptive scheme. In C-RAN, baseband units (BBUs) are centralized for processing baseband signals, while remote radio heads (RRHs) are distributed separately to provide radio coverage [3]. However, due to spatial and temporal variations across different RRH coverage areas, the fixed algorithms pre-deployed in BBUs-
 become inadequate for maintaining consistent optimal performance across diverse
The first two authors contributed equally to this work and ‡ marked the corresponding author.
scenarios. Therefore, a new paradigm for automatically choosing the optimal algorithm to deal with various complicated problems in wireless system is necessitated no matter how the wireless environment changes. With the advancements in large language models (LLMs), AI agents powered by LLMs have demonstrated remarkable cognitive and decision-making capabilities [4], showing great potential for addressing wireless communication tasks [5]. Among these, the multi-agent systems (MAS), where rolespecia-
lized agents collaborate through a structured workflow, have become a hot research focus. This role-playing mechanism enables better performance in diverse real-world tasks [6] and have been adopted in solving wireless communication problems. For example, Zou et al. proposed a preliminary multi-agent reasoning framework with simulation on an energy saving problem [7]. Mongaillar et al. developed three fixed agents for the power scheduling problem [8]. Additionally, the real-time environmental info-
rmation can be converted into text data through the integrated perception module [5], further making the intelligent processing of dynamic and complex wireless tasks possible. However, current LLMs still face difficulties in physicallayer modeling, mathematical derivation, and mathematical operations [9]–[11]. Yet, solving actual wireless issues requires end-to-end steps from modeling and analytical derivations to numerical computation, which remain challenging for current LLMs. Thus, it is not re-
liable to directly use LLMpowered agents to solve complex communication tasks with high performance. For example, existing MAS for wireless systems simply tackle wireless optimization problems through agent dialogues [7], [8], which may result in infinite loops or malfunctions due to the lack of theoretical guarantees. The accuracy and reliability of the outputs from multi-agent conversations are uncertain when MAS face complex and dynamic wireless problems. To this end, we aim to leverage the the-
oretically guaranteed wireless algorithms combined with the perception and cognitive ability of AI agents, addressing wireless problems in an intelligent way. In this paper, we propose AutoMAS, a generic MAS for algorithm self-adaptation to solve tasks in wireless communication systems. To simulate the task delegation and resolution process in communication systems, we implement AutoMAS in a C-RAN architecture as an
arXiv:2511.18414v1 [eess.SP] 23 Nov 2025

example. Specifically, the C-RAN infrastructure delegates various baseband processing tasks (e.g., resource allocation, channel estimation, etc.) to AutoMAS. By perceiving environmental conditions and inferring user intents, AutoMAS dynamically selects suitable algorithms to solve the tasks efficiently. In AutoMAS, we design a supervisor-executor mechanism, where a suitable set of role-specific agents and their workflow are autonomously generated according to the task and the environment. This me-
chanism not only enhances the framework’s ability to address diverse tasks, but also enables fully autonomous execution in dynamic environments. Then, we provide a case study for channel estimation problem, where the user moves in diverse environments with different propagation characteristics. Simulations show that our AutoMAS obtains the optimal performance in each scenario, enabling the ability for algorithm self-adaptation.
II. MULTI-AGENT SYSTEM FOR AUTONOMOUS WIRELESS
ALGORITHM ADAPTATIONS
In this section, we introduce our AutoMAS, a MAS framework for algorithm self-adaptation to handle wireless tasks. We begin with an overview of AutoMAS. Next, we describe its two core components: the single-agent architecture and the multi-agent collaboration mechanism. Fig. 1 provides a visual representation that integrates these three key aspects.
A. AutoMAS for RAN-Intelligent Algorithm Adaptation
Fig. 1 (top-right) illustrates an overview of AutoMAS, which enables autonomous algorithm adaptation. The objective is to enable the wireless networks to have the ability of automatically and intelligently selecting the most suitable algorithms with the environment changing, thereby solving wireless tasks effectively. Here, we deploy AutoMAS in a practical C-RAN architecture as an example to validate its operational capabilities. This architecture centralizes BBUs for baseband processing while dis-
tributing RRHs geographically to handle radio frequency (RF) transmission. AutoMAS can be deployed at the BBUs and operates centrally, enabling intelligent resolution of baseband processing tasks (e.g., resource allocation, channel estimation, and power control), to maintain consistent performance across heterogeneous and dynamic RRH coverage areas. The process of AutoMAS consists of two key stages: perception and inference. In the perception stage, multi-dimensional sensing information about the -
user’s environment within a specific RRH coverage area is observed and collected in textual form. This information is denoted as observation, which includes user intent (e.g., a detected request for continuous 4K video playback), environmental information (e.g., radio frequency metrics such as SNR, device states like GPS location and mobility, and obstruction data from radar or cameras), and resource constraints (e.g., available frequency bandwidth, computational resources like GPU memory). Then, -
this observation is sent to the AutoMAS for the following processing, guiding the selection of appropriate algorithms.
In the inference stage, AutoMAS receives a baseband processing task and infers the appropriate algorithmic response based on the observation. Specifically, a supervisor agent first analyzes the task and observation, selecting the relevant agents and designing their workflow. The selected agents then execute their designated roles and collaborate within this structured workflow. Details are further elaborated in next two subsections. Ultimately, the chosen algorithms are executed, achieving perform-
ance-optimized solutions.
B. Single Agent Architecture
Then we introduce the modular design of a single agent. The agent operates within a closed-loop cognitive architecture, where a LLM coordinates observation, reasoning, and action by tightly integrating memory and external tool. The core modules are formalized as follows:
• Task (T ) defines the agent’s primary objectives and operational goals. • Observation (O) serves as the agent’s perception interface with the environment, and consists of:
– Initial observation (o0) is a multi-dimensional input containing user intent, environmental information and resource constraints. – State observation (ot) captures the system state at step t, reflecting both the environmental configuration and the agent’s status after an action is executed.
• LLM (L) performs probabilistic reasoning over task specifications, memory contents, and environmental inputs to determine optimal actions. • Action (A) contains the set of executable instructions the agent can perform to interact with and influence the environment. It includes default base actions such as think for logical reasoning, and finish for process termination. Additionally, the action set is expandable to include customized actions, such as code execution, which executes the generated c-
ode. • Memory (M ) serves as the agent’s long-term knowledge repository, encompassing:
– Role definition specifies operational boundaries (e.g., the Algorithm Designer role focuses solely on algorithm development). – Domain knowledge stores expert knowledge for complex tasks, such as a LS estimator. – Interaction history records past action-observation pairs ht = (ai, oi)t
i=1 to support consistent reasoning and lead agent to operate based on the past state and environment information.
• Toolbox (T ) provides access to external tools, extending action capabilities. This includes code interpreters (e.g., Python), solvers (e.g., Gurobi), and domain-specific assets such as channel datasets, pre-trained neural network checkpoints and so on.
We next present the agent’s internal operational workflow, centered on the observation–action chain:

Fig. 1. The left part is the single agent architecture. The right part is the overview of AutoMAS for algorithm adaptation and the autonomous multi-agent collaboration mechanism.
1) Task specifications (T ) and initial observation (o0) activate the LLM engine. 2) The LLM selects a probability-maximizing action: at = arg maxa∈A P (a|T, M, o0), by reasoning over the task (T ), memory (M ) and initial observation (o0). If needed, external tools are invoked from the toolbox during execution. 3) The execution of at modifies the environment, resulting in a new observation at → ot. 4) The new action–observation pair is recorded in memory: M ← M ∪ (at, ot).
5) The loop continues until termination conditions are met (e.g., executing finish).
This closed-loop interaction allows the agent to take informed action based on both past experiences and current state information, while the integrated modules enhance its ability to handle diverse tasks.
C. Autonomous Multi-agent Collaboration Mechanism
Existing MAS schemes for tackling with wireless communication tasks are designed for certain scenarios predefined by human [8], which thus lacks the self-adaptation ability in dynamic scenarios. To address this, we introduce an autonomous multi-agent collaboration mechanism implemented in AutoMAS to equip the network with the self-adaptation ability in a wide range of dynamic scenarios. The effectiveness of AutoMAS relies on two synergistic components: a well-curated agent pool for domain-specific-
 expertise, and a supervisor-executor mechanism for flexible task solving. The core components are as follows:
• Agent pool: The agent pool consists of specialized executors, each assigned a distinct role to tackle targeted tasks. For example, a communication specialist handles domain-specific analysis, an algorithm designer develops
specific algorithms, and a code engineer implements and executes the corresponding solutions. These executors are pre-deployed and on standby. The supervisor dynamically invokes them based on task complexity and environmental observations, ensuring flexibility and efficiency.
• Supervisor–executor mechanism: In this master–slave architecture, the supervisor acts as the controller, analyzing task semantics and observations to both select executors and orchestrate the workflow. The selected executors then perform their roles and interact with the others to accomplish the task. For example, for channel estimation, the supervisor activates two executors: an algorithm selector and a code agent. The algorithm selector proposes a strategy based on the environment, the code ag-
ent implements and validates it, and performance feedback is iteratively fed back to the selector for continuous optimization. Beyond this simple closed-loop, the supervisor can configure other workflow based on the task characteristics, such as group discussion mode for collective reasoning. By configuring specialized agents’ workflows, the supervisor–executor mechanism not only enhances task reasoning efficiency but also achieves automation without rigid predefined patterns, adapting to dynamica-
lly changing network environment requirements.
III. CASE STUDY: CHANNEL ESTIMATION ALGORITHM
SELF-ADAPTATION IN DYNAMIC SCENARIOS
In this section, we conduct a case study on dynamic channel estimation using AutoMAS to validate its effectiveness. We first introduce the channel estimation problem and its mathematical formulation. Then, we describe the primitive configuration of AutoMAS executors for this task. Next, we present a detailed example illustrating how AutoMAS handles

the channel estimation task through agent collaboration. Finally, we conduct a simulation in diverse scenarios to validate the self-adaptation ability of AutoMAS.
A. Pilot-Aided Channel Estimation Formulation in C-RAN
Accurate channel state information (CSI) is essential for C-RAN systems, as it directly affects the design of optimal precoders, energy-efficient resource allocation, and other key signal processing tasks [12]. Consider a C-RAN system with G RRHs and a single multi-antenna user device. There are Nr antennas in each RRH and Nt antennas in user device. We introduce the standardized formulation for pilot-aided timevarying channel estimation. The received signal Yng ∈ CNr×1 at the g-th RRH, correspond-
ing to the n-th time slot, is given by:
Yg
n = Hg
nsn + N g
n, (1)
where sn ∈ CNt×1 denotes the vector of the transmitted pilot, Hng ∈ CNr×Nt is the channel matrix between the user
and the g-th RRH, and Nng ∈ CNr×1 is the complex noise
vector with zero mean and variance σ2. The objective is to estimate channel matrix Hng with the known received signal, transmitted pilot and the distribution of the noise. Existing research on channel estimation has proposed various solutions, ranging from iterative mathematical algorithms to pre-trained AI models [13] [14]. However, due to the diversity and variability of wireless environments, fixed methods often fail to adapt effectively [15]. In the following, we apply AutoMAS for estimation, -
enabling the autonomous selection of suitable algorithms based on environmental changes to achieve robustness and efficiency.
B. Main Executor Configuration Details
In this subsection, we detail the configuration of the executors within AutoMAS’s agent pool, including their roles, required domain knowledge in memory, and external tools. Algorithm selector: This executor chooses the most accurate and efficient estimation algorithm based on user intent, environmental context, and available resources. Recognizing current LLM limitations in physical-layer modeling [9], we equip this agent’s memory with the core methodologies of pilot-aided channel estimation appr-
oaches as basic knowledge. Specifically, we roughly categorize these approaches into four groups:
• No Prior Assumptions: It requires no statistical knowledge. A typical approach is the LS estimator, which features low computational complexity and wide applicability but exhibits limited noise robustness. • Feature-Driven: It utilizes abstract channel features (e.g., sparsity). For instance, compressed sensing methods like Iterative Shrinkage Thresholding Algorithm (ISTA) [16] obtain satisfactory accuracy under valid assumptions, but are sensitive to the channel characteristics. • Statistics-Dr-
iven: It relies on accurate channel statistics (e.g., covariance matrix). For example, Linear Minimum Mean Square Error (LMMSE) [17] provides strong noise
resilience, but comes with high computational cost and requires prior knowledge. • Data-Driven: It requires a ground-truth dataset. For example, ResNet [18], a classical neural network, learns implicit patterns from data, but needs large training datasets and faces generalization challenges.
The algorithm selector stores these classification templates in memory and uses them as prompts to guide selection. For example, if the user’s location is identified as an open area, the executor infers a sparse multipath characteristic and selects ISTA to exploit the sparsity. Code agent: This executor converts algorithm specifications into executable code and runs it using external interpreters. Its memory stores code snippets that are used as prompts to instantiate and invoke LS, ISTA, LMMSE, o-
r ResNet. Additionally, its LLM-based reasoning dynamically translates environmental parameters and validation requirements into corresponding code. For example, when deploying ISTA, it translates descriptors such as “64-antenna configuration” and “20 dB SNR” into code variables (antenna_num = 64, snr_level = 20), generates the corresponding sparse channel estimation module, and executes it via the code interpreter. If negative feedback is observed (e.g., poor estimation performance), the code age-
nt packages the relevant channel observations into a diagnostic report and sends it to the algorithm selector to trigger algorithm reselection. This cross-agent feedback loop, with the goal of enhancing accuracy and efficiency, ensures continual alignment between algorithmic theory and implementation constraints.
C. AutoMAS-Enabled Channel Estimation
In this subsection, we provide a detailed example to demonstrate AutoMAS’s practical capabilities. We adopt the QuaDRiGa toolbox [19] as the channel simulator to generate training, validation and testing data. We consider a scenario where the user device (with a single antenna) is located in an open area, served by a 64-antenna RRH installed at a height of 30 meters and positioned 60 meters away, operating at 60 GHz. The RRH uses a “3GPP-3D” antenna array (AA) with 8 × 8 elements, 0.5-wavelength s-
pacing, and vertical polarization. The validation requirements specify physicallayer parameters, including a unit-scalar pilot design, and an AWGN channel with 10 dB SNR, along with the testing channel path for validation. These observations, together with the instruction to perform channel estimation, are first sent to the supervisor in AutoMAS for the following processing. The LLM for simulations uses qwen2.5-vl-72b-instruct. We use the Normalized Mean Squared Error (NMSE) to measure the perform-
ance: NMSE = 10 × lg(∥h − ˆh∥22/∥h∥22), where h is
the estimated channel, and ˆh is the ground truth channel. Fig. 2 illustrates the overall process for the scenario and highlights the key prompts associated with each agent, presented in a simplified form for clarity. The process begins with the supervisor, which receives task specifications and environmental observations. It is responsible for selecting appropriate executors from the agent pool

Fig. 2. Operation and simplified prompts of AutoMAS for channel estimation
and orchestrating their workflow. As illustrated in Fig. 2, the supervisor activates two executors: the algorithm selector and the code agent, and designs a closed-loop structure to guide their interaction for accomplishing the estimation task. During the executor interaction phase, the algorithm selector first processes the task based on its specific role. It analyzes the environmental conditions and infers a sparse multipath structure, typical for high-frequency (60 GHz) propagation in open terr-
ain. Based on this analysis, it selects a compressed sensing method (ISTA) as the estimation strategy. Next, the code agent implements the selected algorithm with executable code, and invokes an external test module for validation. As shown in Fig. 2, the code agent successfully implements the selected algorithm and estimates the channel. The achieved performance is -15.3 dB, indicating satisfactory estimation accuracy without the need for the refinement loop.
D. Further Comparison in Dynamic Scenarios
We compare the estimation performance of AutoMAS against baseline methods (LS, ISTA, LMMSE, ResNet) across diverse scenarios to simulate their adaptability to environmental changes induced by user mobility. These scenarios are
generated by QuaDRiGa, including dense area with low noise, open area, dense area with high noise, and indoor office . Each scenario is configured with the same “3GPP-3D” AA (8×8 elements, 0.5-wavelength spacing, vertical polarization), but differs significantly in scattering environments, multipath characteristics, carrier frequencies, and other channel parameters. In addition, we assume that users move at a speed of 1.5 m/s. The specific validation settings for each scenario are summarized as fo-
llows.
• Scenario 1: Dense area with low noise, 15 GHz, SNR = 20 dB, initial user distance from AA = 50 meters, AA height = 30 meters. • Scenario 2: Open area, 60 GHz, SNR = 10 dB, initial user distance from AA = 60 meters, AA height = 30 meters. • Scenario 3: Dense area with high noise, 15 GHz, SNR = 2 dB, initial user distance from AA = 50 meters, AA height = 30 meters, with only 1,000 ground-truth channel samples available. • Scenario 4: Indoor office, 15 GHz, SNR = 10 dB, initial user distance from A-
A = 20 meters, AA height = 3

Scenario 1 Performance
LS ISTA
MMSE
ResNet
AutoMAS
-22 -20 -18 -16 -14 -12 -10 -8 -6 -4 -2 0
NMSE (dB)
(a) Scenario 1
Scenario 2 Performance
LS ISTA
MMSE
ResNet
AutoMAS
-22 -20 -18 -16 -14 -12 -10 -8 -6 -4 -2 0
NMSE (dB)
(b) Scenario 2
Scenario 3 Performance
LS ISTA
MMSE
ResNet
AutoMAS
-8
-7
-6
-5
-4
-3
-2
-1
0
NMSE (dB)
(c) Scenario 3
Scenario 4 Performance
LS ISTA
MMSE
ResNet
AutoMAS
-22 -20 -18 -16 -14 -12 -10 -8 -6 -4 -2 0
NMSE (dB)
(d) Scenario 4
Fig. 3. Comparisons between our AutoMAS and existing channel estimation algorithms (LS, ISTA, LMMSE, ResNet) across different scenarios.
meters, with 30,000 ground-truth samples available.
For the algorithm implementation in the simulation, the ResNet model consists of three residual blocks, each containing two convolutional layers followed by batch normalization. The network is trained using the Adam optimizer with a learning rate of 1e-3 for 150 epochs. For a fair comparison, LMMSE utilizes the covariance matrix of Scenario 3, while ResNet uses the checkpoints of Scenario 4 to test in samplefree scenarios. As shown in Fig. 3, fixed algorithm approaches for dynamic channel estimati-
on exhibit many defects. LS performs poorly in the high noise scenario, ISTA struggles when multipath components are not sparse, and LMMSE and ResNet failed in scenarios without access to prior CSI statistics or training data. In contrast, AutoMAS always selects the most suitable algorithm for each scenario. It selects LS, ISTA, LMMSE, and ResNet for Scenarios 1–4, respectively, achieving the best performance across all tested environments. These findings highlight the dynamic adaptation capabilit-
y of AutoMAS, enabling seamless handling of increasing heterogeneity and environmental dynamics, which lays a scalable foundation for future wireless network.
IV. CONCLUSION
In this work, we propose AutoMAS, a MAS for wireless algorithm self-adaptation through multi-agent collaboration. Our system contains a supervisor-executor mechanism for multi-agent coordination, enabling autonomous adjustment to various scenarios. A case study on dynamic channel estimation, along with simulations across diverse environments, validates our AutoMAS self-adaptive capabilities, highlighting its generalization for next-generation communication networks.
Future work will measure and reduce decision-time cost and extend AutoMAS to multi-user and interference-limited settings with joint accuracy–latency optimization.
REFERENCES
[1] X. Wang, X. Li, and V. C. Leung, “Artificial intelligence-based techniques for emerging heterogeneous network: State of the arts, opportunities, and challenges,” IEEE Access, vol. 3, pp. 1379–1391, 2015. [2] F. Jiang, C. Pan, L. Dong, K. Wang, O. A. Dobre, and M. Debbah, “From large ai models to agentic ai: A tutorial on future intelligent communications,” arXiv preprint arXiv:2505.22311, 2025.
[3] P. Rost, C. J. Bernardos, A. De Domenico, M. Di Girolamo, M. Lalam, A. Maeder, D. Sabella, and D. Wu ̈bben, “Cloud technologies for flexible 5g radio access networks,” IEEE Communications Magazine, vol. 52, no. 5, pp. 68–76, 2014. [4] X. Xu, Y. Wang, C. Xu, Z. Ding, J. Jiang, Z. Ding, and B. F. Karlsson, “A survey on game playing agents and large models: Methods, applications, and challenges,” arXiv preprint arXiv:2403.10249, 2024. [5] J. Tong, J. Shao, Q. Wu, W. Guo, Z. Li, Z. Lin, and J. Zha-
ng, “Wirelessagent: Large language model agents for intelligent wireless networks,” arXiv preprint arXiv:2409.07964, 2024.
[6] Q. Wu, G. Bansal, J. Zhang, Y. Wu, B. Li, E. Zhu, L. Jiang, X. Zhang, S. Zhang, J. Liu et al., “Autogen: Enabling next-gen llm applications via multi-agent conversation,” arXiv preprint arXiv:2308.08155, 2023. [7] H. Zou, Q. Zhao, L. Bariah, M. Bennis, and M. Debbah, “Wireless multi-agent generative ai: From connected intelligence to collective intelligence,” arXiv preprint arXiv:2307.02757, 2023.
[8] T. Mongaillard, S. Lasaulce, O. Hicheur, C. Zhang, L. Bariah, V. S. Varma, H. Zou, Q. Zhao, and M. Debbah, “Large language models for power scheduling: A user-centric approach,” in 2024 22nd International Symposium on Modeling and Optimization in Mobile, Ad Hoc, and Wireless Networks (WiOpt). IEEE, 2024, pp. 321–328.
[9] T. Guo, X. Chen, Y. Wang, R. Chang, S. Pei, N. V. Chawla, O. Wiest, and X. Zhang, “Large language model based multi-agents: A survey of progress and challenges,” arXiv preprint arXiv:2402.01680, 2024.
[10] Z. Shao, P. Wang, Q. Zhu, R. Xu, J. Song, X. Bi, H. Zhang, M. Zhang, Y. Li, Y. Wu et al., “Deepseekmath: Pushing the limits of mathematical reasoning in open language models,” arXiv preprint arXiv:2402.03300, 2024. [11] J. Ahn, R. Verma, R. Lou, D. Liu, R. Zhang, and W. Yin, “Large language models for mathematical reasoning: Progresses and challenges,” arXiv preprint arXiv:2402.00157, 2024.
[12] Q. He, T. Q. Quek, Z. Chen, Q. Zhang, and S. Li, “Compressive channel estimation and multi-user detection in c-ran with low-complexity methods,” IEEE Transactions on Wireless Communications, vol. 17, no. 6, pp. 3931–3944, 2018. [13] H. Kaur, M. Khosla, and R. Sarin, “Channel estimation in mimoofdm system: a review,” in 2018 second international conference on electronics, communication and aerospace technology (ICECA). IEEE, 2018, pp. 974–980. [14] D. Yuan, S. Wu, H. Tang, L. Yang, and C. Peng-
, “A peaceman-rachford splitting approach with deep equilibrium network for channel estimation,” in 2024 IEEE 24th International Conference on Communication Technology (ICCT), 2024, pp. 1525–1533. [15] C. R. Berger, S. Zhou, J. C. Preisig, and P. Willett, “Sparse channel estimation for multicarrier underwater acoustic communication: From subspace methods to compressed sensing,” IEEE transactions on signal processing, vol. 58, no. 3, pp. 1708–1721, 2009. [16] A. Beck and M. Teboulle, “A fast iterat-
ive shrinkage-thresholding algorithm for linear inverse problems,” SIAM journal on imaging sciences, vol. 2, no. 1, pp. 183–202, 2009. [17] J.-J. van de Beek, O. Edfors, M. Sandell, S. Wilson, and P. Borjesson, “On channel estimation in ofdm systems,” in 1995 IEEE 45th Vehicular Technology Conference. Countdown to the Wireless Twenty-First Century, vol. 2, 1995, pp. 815–819 vol.2. [18] K. He, X. Zhang, S. Ren, and J. Sun, “Deep residual learning for image recognition,” in Proceedings of the IEEE C-
onference on Computer Vision and Pattern Recognition, 2016, pp. 770–778.
[19] S. Jaeckel, L. Raschkowski, K. Bo ̈rner, and L. Thiele, “Quadriga: A 3-d multi-cell channel model with time evolution for enabling virtual field trials,” IEEE Transactions on Antennas and Propagation, vol. 62, no. 6, pp. 3242–3256, 2014.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:15.088Z
- **Text Length:** 29681 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 6 of 6
