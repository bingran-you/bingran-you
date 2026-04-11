# PDF Document: Tao et al. - 2025 - Toward Trustworthy Digital Twins in Agentic AI-based Wireless Network Optimization Challenges, Solu.pdf

**File Path:** Tao et al. - 2025 - Toward Trustworthy Digital Twins in Agentic AI-based Wireless Network Optimization Challenges, Solu.pdf

**Processed Date:** 2026-02-10T18:14:50.783Z

**File Size:** 2647.17 KB

**Total Pages:** 7

**Extracted Pages:** 7

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3330

**Title:** Toward Trustworthy Digital Twins in Agentic AI-based Wireless Network Optimization: Challenges, Solutions, and Opportunities

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

IEEE COMMUNICATIONS MAGAZINE 1
Toward Trustworthy Digital Twins in Agentic
AI-based Wireless Network Optimization:
Challenges, Solutions, and Opportunities
Zhenyu Tao, Graduate Student Member, IEEE, Wei Xu, Fellow, IEEE, and Xiaohu You, Fellow, IEEE
Abstract—Optimizing modern wireless networks is exceptionally challenging due to their high dynamism and complexity. While the agentic artificial intelligence (AI) powered by reinforcement learning (RL) offers a promising solution, its practical application is limited by prohibitive exploration costs and potential risks in the real world. The emerging digital twin (DT) technology provides a safe and controlled virtual environment for agentic AI training, but its effectiveness critically depends on-
 the DT’s fidelity. Policies trained in a low-fidelity DT that does not accurately represent the physical network may experience severe performance degradation upon real-world deployment. In this article, we introduce a unified DT evaluation framework to ensure trustworthy DTs in agentic AI-based network optimization. This evaluation framework shifts from conventional isolated physical accuracy metrics, such as wireless channel and user trajectory similarities, to a more holistic, task-centric DT -
assessment. We demonstrate it as an effective guideline for design, selection, and lifecycle management of wireless network DTs. A comprehensive case study on a real-world wireless network testbed shows how this evaluation framework is used to pre-filter candidate DTs, leading to a significant reduction in training and testing costs without sacrificing deployment performance. Finally, potential research opportunities are discussed.
I. INTRODUCTION
The vision for the sixth-generation (6G) wireless networks promises to support a new wave of transformative applications, from immersive extended reality (XR) to the massive-scale Internet of things (IoT). However, realizing this vision presents unprecedented challenges for network optimization [1]. Firstly, 6G networks are expected to accommodate various services, each with stringent and diversified performance requirements on latency, throughput, and reliability. This creates an environment of s-
ignificant dynamism, driven by varying traffic, diversified user mobility, and rapidly changing channel conditions. Meanwhile, the intricate and heterogeneous 6G network architecture leads to optimization tasks with incredibly high dimensionality. For a typical network optimization task like resource allocation, a network controller should adjust hundreds of parameters simultaneously, including resource block assignment, beamforming, and power management, to seek optimal overall performance. The c-
ombined challenges of dynamic and high-dimensional network environments surpass the capabilities of classical
Zhenyu Tao, Wei Xu, and Xiaohu You are with the National Mobile Communications Research Lab, Southeast University, Nanjing 210096, China, and also with the Pervasive Communication Research Center, Purple Mountain Laboratories, Nanjing 211111, China (email: {zhenyu tao, wxu, xhyu}@seu.edu.cn). Corresponding author: Xiaohu You.
network optimization techniques, such as linear programmingbased resource allocation [2]. These methods often rely on precise mathematical models that are difficult to formulate in real-world 6G networks and struggle to find real-time solutions due to prohibitive computational complexity. In response, research has shifted towards agentic artificial intelligence (AI)-empowered solutions, with reinforcement learning (RL) emerging as a powerful, data-driven framework [3]. By directly interacting with-
 network environments to refine control policies parameterized by neural networks (NNs), ranging from simple multi-layer perceptrons (MLPs) to complex large language models, RL is uniquely suited to handle complex and ever-changing 6G network optimization tasks [4]. However, the foundational trial-and-error learning process of RL is fraught with peril if conducted on a live operational network. Unrestricted exploration in the real world could lead to prohibitive costs, significant degradation in q-
uality of service (QoS), potential service level agreement (SLA) violations, and even risks to network stability [3]. This practical barrier has facilitated the digital twin (DT)driven RL paradigm [5]. By creating a high-fidelity virtual replica of the physical network, a DT provides a safe and efficient environment for agentic AI training [6]. For instance, in resource allocation tasks, an RL agent can explore countless strategies rapidly within such a DT, assigning different resource blocks and -
power levels to simulated users under various traffic and channel conditions, all without affecting the operation of physical networks. After being exhaustively trained and validated, the resulting agent policy can then be deployed to real-world network controllers, thereby avoiding dangerous exploration [7], reducing trial-and-error costs [8], and accelerating the entire training process [9]. Despite these compelling advantages, the effectiveness of DT-driven RL paradigm closely depends on the DT-
’s fidelity to the real world. While a precise DT can yield highly effective control policies, an inaccurate one would result in a risky simulation-to-reality gap [10], leading to a significant performance degradation upon policy deployment. An RL agent trained in a DT with an oversimplified, stable traffic model learns a rigid resource allocation policy that should fail upon real-world deployment due to bursty and dynamic traffic in physical networks. This raises the pivotal question of this arti-
cle: How can we trust an AI agent trained in a DT to perform effectively and safely in real wireless networks?
Addressing this question requires a solid bridge between DT and real physical world, the establishment of which poses
arXiv:2511.19961v1 [eess.SY] 25 Nov 2025

IEEE COMMUNICATIONS MAGAZINE 2
Real-world network
Update
Policy trial Feedback
Control policy
Traditional Optimization Methods RL Methods DT-driven RL Methods
Optimization
Policy trial
Feedback Real-world data
DT of network
AI agent
Classical optimization techniques
UE DT Channel DT RAN DT Topology DT CN DT
Traffic
Trajectory
N1 PDU session Establishment request N4 PDU session Establishment request
N4 PDU session CP Establishment response UP
RRC PDCP SDAP PDCP RLC MAC PHY
Real-world network
Lack of holistic evaluation methods
Absence of performance guarantees
Inefficient DT design and maintenance
Real-world network Real-world network
AI agent
Fig. 1. Evolution of wireless network optimization techniques.
three critical challenges:
• Lack of holistic evaluation methods: A DT for network optimization is typically a composite system, integrating multiple models of physical entities, such as user equipment [7], wireless channel [6], and core network [11], as schematized in Fig. 1. Current assessment methods are designed to evaluate the physical accuracy of each model [12], e.g., channel model accuracy. However, the effectiveness of a DT for agentic AI training is a holistic property arising from interactions among all its const-
ituent components, which is hardly captured by a straightforward aggregation of individual fidelity metrics. • Inefficient DT design and maintenance: The absence of an effective evaluation metric forces DT development to become a process driven by empiricism and expert intuition rather than principled refinement. How do we choose the most suitable models for DT construction? How much data is sufficient to ensure its fidelity? When should the DT be updated to reflect changes in the real world? Thes-
e unresolved questions lead to either wasted resources in building an overly complex DT or poor performance from an inadequate one.
• Absence of performance guarantees: Critically, there lacks a reliable way to predict how a policy trained in the DT will perform upon deployment into the physical wireless network [13]. If we cannot theoretically analyze and guarantee its real-world performance before actual
deployment, the DT’s core advantage of avoiding risky real-world exploration is fundamentally undermined.
In this article, we provide a holistic DT evaluation framework as a theoretically guaranteed solution to ensure trustworthys DT in agentic AI-based network optimization. Section II elaborates on this framework and introduces the DT bisimulation metric as a concrete example to showcase the effectiveness of the evaluation. Section III presents potential applications by integrating such evaluation into DT-driven network optimization. Following this, Section IV provides a real-world case study validat-
ing the framework’s practical value. Finally, we conclude with promising future directions.
II. THE SOLUTION: HOLISTIC EVALUATION OF DT
To establish a bridge between DT and the real world for wireless network optimization, a new evaluation paradigm is required that advances beyond conventional physical accuracy to a holistic and task-centric assessment.
A. Moving Beyond Component-centric Accuracy
The conventional approach to DT evaluation is componentcentric, focusing on the physical accuracy of each component in isolation. As shown in Fig. 2, a channel DT’s fidelity is often measured using structural similarity or root mean squared error (RMSE) against real-world data [6]. Likewise, user mobility models can be evaluated by the Euclidean

IEEE COMMUNICATIONS MAGAZINE 3
AI agent
Real-world network
DT of network
Sample
Sample
Real-world data
s1 s2
s3 s4
s5 s6
Real MDP
R
(s3 | s1, a)
R(s1, a)
21
(s | s ,a)
s1
s3 s4
s2
s5 s6
DT MDP
(s3 | s1, a)
R(s1, a)
(s2 | s1, a)
R

1
( ,, ,)
st a st+ r
1
( ,, ,)
st a st+ r

Real-world dataset
DT dataset
Mismatch evaluation
Policy deployment
Policy trial (action)
Policy feedback (reward, next state)
Gradient update
State
Action
Transition probability
Reward
Task-centric modeling:
R(s, a)
(s | s, a)
a
s
Real-world network
DT of network
RMSE,
KL/JS divergence ...
Euclidean distance, edit distance ...
Bayesian disagreement metric, frequentist log-likelihood ...
Channel accuracy:
Mobility accuracy:
Traffic accuracy:
Component-centric evaluation Holistic DT evaluation
Fig. 2. Holistic DT evaluation framework.
distance or edit distance between their simulated trajectories and real ones [7], while traffic models are often assessed using Bayesian disagreement or frequentist log-likelihood prediction metrics [8]. While useful for evaluating individual models, these component-centric approaches are fundamentally insufficient for validating a DT’s effectiveness for agentic AI training. They fail to capture the holistic mismatch between the two environments, as the RL training is associated with complex inter-
actions between DT components, not just isolated model accuracies. For instance, a DT with a high-fidelity channel model but a flawed mobility model could generate unrealistic training environments. This combination should be much less effective for RL training than a DT with two moderately accurate models. Conventional evaluation metrics, focused on isolated model accuracy, thus cannot adequately assess models for constituting a suitable training environment.
B. Holistic DT Evaluation Framework
To overcome this limitation, we propose a task-centric framework that evaluates the DT based on its utility for a given RL-based network optimization task, as depicted in the right part of Fig. 2. Instead of pursuing absolute physical fidelity, our approach quantifies the behavioral equivalence between the DT and the real-world environments as perceived by the RL agent. This framework is grounded in the standard RL formulation, where environments are modeled as Markov decision processes (MDPs). Th-
e MDP-based modeling is a common prerequisite for RL-based network optimization, from resource allocation to beamforming [3]. An MDP frames the problem through four key elements:
• State s ∈ S: The network information used by the RL agent to make a control decision, e.g., current base station loads, user traffic demands.
• Action a ∈ A: The operation performed by the agent, e.g., a specific resource block assignment scheme.
• Transition probability P(s ̃|s, a): The underlying dynamics of the environment that govern how a state and an action result in a new state s ̃. • Reward function R(s, a): The immediate outcome of an action, associated with the optimization goal, e.g., the resulting overall network throughput.
This representation allows us to formalize mismatch evaluation as a principled comparison between two MDPs, respectively corresponding to a real-world network and its DT.
C. Data-driven Mismatch Evaluation
The primary challenge in this evaluation is the lack of exact mathematical expressions for these complex MDPs, especially the real-world one. Data-driven sampling provides a numerical solution to this problem. By monitoring the running real network and the DT, we collect data samples from both environments. Unlike traditional evaluation methods, we do not focus on every precise physical value like channel gain or user locations. Instead, we only sample the key information in agentic AI learning pr-
ocess: states provided to the agent, actions it takes, and resulting rewards it receives. For instance, in a resource allocation task, we would record the state of network status used to make an allocation action and the resulting overall throughput as the reward for each resource block allocation epoch. Notably, since transition probabilities and reward functions are inherent properties of environments and are independent of specific control policies, this sampling process could be conducted with-
 default network configurations prior to the agent policy deployment. After collecting sufficient data, we can construct data-driven approximations of their respective MDPs. This enables us to evaluate the holistic mismatch in a formal and principled manner. Most importantly, this

IEEE COMMUNICATIONS MAGAZINE 4
quantified mismatch can then be used to analyze and even theoretically bound the performance gap when deploying a policy trained in the DT to the real-world network.
D. The DT-bisimulation Metric
As a concrete example of our holistic evaluation framework, we introduce the DT bisimulation metric (DT-BSM), which we proposed and analyzed in [14]. Its formulation is designed to holistically capture the mismatch relevant to the optimization task. Specifically, DT-BSM captures differences in both rewards and transition probabilities jointly through a recursive definition d(s,s′) = maxa |R(s,a) − R′(s′,a)| + γW1(P(·|s,a), P′(·|s′,a); d) based on the Wasserstein distance W1 [15]. It quantifies the-
 distance between a state in the real-world MDP and a state in the DT MDP by considering two factors simultaneously, i.e., the immediate mismatch in rewards received, and the subsequent mismatch in transition probabilities to other states. Crucially, the mismatch to other states is weighted by the metric itself through the Wasserstein distance, thereby capturing long-term and multi-step influences inherent in RL settings. Another strength of the DT-BSM is its direct, provable connection to deploym-
ent performance. There are three core factors governing the DT-driven RL paradigm: 1) deployment suboptimality, the real-world performance gap between a deployed DT-trained policy and the actual optimal policy in a network optimization task, 2) training suboptimality, a similar performance gap measuring how well the RL agent is trained within DT, and 3) mismatch between DT and the real world. By precisely quantifying this mismatch, DT-BSM links all three factors in theory via an additive performan-
ce bound: deployment suboptimality ≤ α×DT-BSM+β×training suboptimality, where α and β are both constant factors [14]. This theoretical guarantee of RL deployment performance is a key to making the DT-driven paradigm practical and reliable, which effectively decouples the complex DT-driven RL problem into two independent, manageable sub-problems:
• Improving the DT: We design and refine DT to minimize its mismatch with the real-world network, regardless of the specific RL algorithm to be used.
• Optimizing the agent policy: We apply and modify any advanced RL algorithms to achieve the best performance in DT and thus minimize the training suboptimality.
More importantly, by computing the DT-BSM and training suboptimality, we can secure a quantitative worst-case performance guarantee before deployment, thereby establishing a theoretically reliable bridge between DT and the real world.
III. ENHANCING NETWORK DTS THROUGH EVALUATION
The holistic DT evaluation framework unlocks significant opportunities to enhance the entire lifecycle of wireless network DTs, from their initial construction to their long-term maintenance. In this section, we explore how evaluation can be applied to two primary categories of DTs in wireless network optimization: simpler, MDP-level DTs that directly model system dynamics, and more complex, environment-level DTs that consist of multiple wireless network components.
A. Guiding the Construction of MDP-level DTs
MDP-level DTs are those that directly seek to model the transition probabilities P and reward functions R in real-world wireless networks [9]. DT evaluation provides crucial guidance for creating such models via two main approaches: statistical estimation from collected samples and approximation using NNs, as shown at the top of Fig. 3. Sampling-based DT: A straightforward method to build a DT is to collect a massive dataset of state-transition tuples, i.e., state, action, reward, and next state, -
from the real-world network and use it to statistically estimate the underlying MDP. This approach, however, inevitably leads to a critical question: How much data is enough to ensure the DT is reliable? Collecting too little data results in an inaccurate DT, while collecting too much incurs unnecessary costs. Here, the DT evaluation framework provides a quantitative solution. For instance, DT-BSM offers explicit sample complexity to calculate the minimum data required to achieve a target accuracy-
 level [14]. This transforms data collection from an open-ended endeavor into a targeted process with a clear stopping criterion, ensuring that resources are used efficiently to build a DT that is provably good enough for subsequent RL applications. NN-based DTs: For systems with vast state spaces, exhaustive sampling is infeasible. In such cases, a common approach is to use NNs to learn a parameterized model of environment dynamics from sparse data [9]. However, conventional NN training only capt-
ures one-step dynamics, as it uses cross-entropy loss to predict transition probabilities and mean squared error to predict rewards. This approach could be effective on the training set but often leads to overfitting, producing a model that is predictively accurate but behaviorally flawed for RL agents. In contrast, the holistic evaluation of DT provides a multi-step assessment of the model’s behavioral fidelity from an RL perspective. By integrating such evaluation into the DT training loop, eith-
er as a metric to guide hyperparameter tuning or directly as a regularization term in the loss function, we can ensure that the learned DT model captures the long-term dynamics essential for decision-making, thereby avoiding overfitting and underfitting, and finally yielding a reliable DT.
B. Optimizing Complex Environment-level DTs
In most applications in practice, a wireless network DT is not a singular model but a complex, environment-level simulator composed of multiple wireless network components, for instance, an integration of a channel model [6], a mobility model [7], and a traffic model [8]. The selection and configuration of these components, which we refer to as DT orchestration, play a crucial role in determining the fidelity and effectiveness of DT for specific RL tasks. In such cases, taskcentric DT evaluation w-
ould effectively guide its orchestration. Evaluation-guided DT orchestration: Typically, DT orchestration faces a multitude of choices across various modeling domains. For instance, in channel modeling, the choice may lie between a high-fidelity but computationally expensive ray-tracing model and a simpler statistical one. For user mobility, one might select from a basic random waypoint model

IEEE COMMUNICATIONS MAGAZINE 5
Explicit sample complexity
Real-world network
Real-world network
Model granularity
DT cost
0.1m 1m 10m
Mismatch
Best granularity
Mismatch evaluation
Sampling-based estimation
MDP-level DT
Sparsely-sampled data Estimated
Optimizing
NN-based approximation
Compare

Sampling
Which one is better?
Collect from real world
1
( ,, ,)
tt
s a s+ r
DT 2
DT 1
Environment-level DT
Components
Model-based
Data-driven Channel reconstruction
User trajectory generation
User traffic generation
Path loss and shadow fading model
AWGN/Rayleigh/ Rican channel model
Exponential service model
...
...
Radio Map prediction
Random waypoint/ Gauss-Markov mobility model
Poisson traffic model
1
( ,, ,)
tt
s a s+ r
Mismatch evaluation
Mismatch evaluation
ˆ
 , , , R
prediction
s1
s3 s4
s2
(s3 | s1, a)
R(s1, a)
Sampling
Sampling
Sampling
Prevent overfitting and underfitting
Reduce DT construction and operation cost
Smaller mismatch value → Better DT for RL training
Filter out inferior DTs
Reduce trial-anderror cost and risk
ˆ
Fig. 3. Enhancing wireless network DT through evaluation.
or a sophisticated AI-based trajectory generator. Similarly, for traffic modeling, options could range from a traditional Poisson process to a complex generative model. Evaluating these components in isolation is insufficient, as their interaction and integration ultimately determine the DT’s effectiveness. Task-centric DT evaluation offers a principled method for this selection. To illustrate, consider building two candidate DT environments for a user association task, as shown in the central par-
t of Fig. 3. Without loss of generality, let DT 1 combine a data-driven radio map with a mathematical mobility model, while DT 2 uses a statistical channel model with a generative, NN-based user trajectory model. By sampling the state transitions from the user association MDP within DT 1, DT 2, and the real network, the mismatch value against the real network for each candidate DT can be calculated via the holistic DT evaluation framework. The DT with the lower mismatch value is provably better, a-
s it corresponds to a tighter upper bound on the final deployment suboptimality. This guidance provides a systematic methodology for composing the most effective DT environment.
Balancing fidelity and cost: There is an inherent tradeoff between DT’s fidelity and its construction and operation cost. Modeling with higher granularity, for example, building a radio map at a 0.1-meter resolution instead of a 10-meter resolution, requires substantially more data, computation, storage, and operational resources. However, this increased investment may not translate into a meaningfully better agent policy if the targeted task is insensitive to such fine-grained details. DT evaluat-
ion via DT-BSM can be used to identify the optimal balance in this trade-off, finding the modeling granularity that minimizes cost without sacrificing training utility. To achieve
this, several versions of a DT should be constructed at different fidelity levels, e.g., radio maps at 0.1-meter, 1-meter, and 10meter resolutions. The mismatch value for each version is then calculated against the real network. As depicted in the lower part of Fig. 3, if decreasing the resolution from 0.1-meter to 1-meter does not cause a significant increase in the mismatch value, it indicates that the RL task’s performance is robust to this level of detail. This insight allows for the deliberat-
e selection of a model with lower granularity, reducing construction and operational costs without compromising the utility of DT and enabling a cost-effective DT tailored to a specific RL task.
IV. A REAL-WORLD CASE STUDY
To demonstrate the practical utility of the DT evaluation framework, we provide a practical case study conducted on a real-world wireless network testbed. The experiments showcased how DT evaluation can guide the selection of highfidelity DTs, ensuring the effectiveness of agentic AI policies upon deployment.
A. Experimental Setup
The experiment focused on a wireless resource allocation task aimed at maximizing overall user performance. The physical testbed, depicted in Fig. 4, consisted of a single gNodeB (gNB) serving three distinct user equipments (UEs): a surveillance camera, a gaming laptop, and a livestreaming smartphone. The camera and laptop were connected to the network via 5G customer premise equipment (5G-CPE). This setup was designed to represent a typical environment of heterogeneous services. Each UE generated-
 uplink traffic with unique characteristics.

IEEE COMMUNICATIONS MAGAZINE 6
Camera
Camera 5G-CPE
5G-CPE
Laptop
Phone
gNB
Frequency
Time Resource allocation
Upload traffic
Upload traffic
Upload traffic
5G-CPE
5G-CPE
Laptop
Phone
gNB
Fig. 4. Case study on a real-world wireless network testbed.
The objective for the RL agent was to learn a policy that dynamically assigned resource blocks to the three UEs at each time step to maximize the overall weighted-sum throughput, where the weights were configured to prioritize the different service requirements of UEs. The agent’s state space includes information such as current allocated resources and throughput history, while its action space consists of possible resource block allocation schemes.
B. DT Construction and Evaluation
To create a realistic scenario for the DT evaluation, we first collected 36 hours of operational data from the live testbed, capturing a wide range of network conditions, traffic patterns, and channel dynamics. Using this dataset, we constructed a pool of 120 candidate DTs, each implemented as an MDPlevel, NN-based model designed to learn the environment’s dynamics. This pool was intentionally diversified by varying the model settings, such as the width and depth of NN architectures and the number-
 of training episodes. This process yielded a collection of DTs with varying degrees of fidelity. For each of the 120 candidate DTs, we calculated its mismatch value against the real environment using DT-BSM [14]. This was achieved by sampling state-action-reward transitions from both the DT and the real environment to empirically estimate the transition probabilities and reward functions. Subsequently, an RL agent was thoroughly trained within each of the 120 DTs until convergence. Each of these -
120 resulting agentic AI policies was then deployed and evaluated in the wireless network testbed to measure its final sum-throughput performance. Fig. 5a empirically validates our theoretical performance bound by plotting each DT’s DT-BSM value against its trained policy’s deployment performance. The results explicitly show
6 7 8 9 10 DT-BSM
2180
2200
2280
2300 Pre-filtering (5%)
Sum throughput (bits)
(a) Mismatch value versus deployment performance
100% 50% 25% 10% 5% Selection ratio
2250
2260
2270
2280
2290
2300
2288.2 2288.2 2286.0 2287.5 2288.2 2286.0 2285.2
2288.2 2286.0
2278.2
2288.2
2270.6 2271.4
Final policy performance
Brute-force Reward-based Random
100% 50% 25% 10% 5% Selection ratio
102
103
3990.5
1901.7 1984.5 1985.3
847.4 1043.6 986.2
248.5
356.7 383.2
108.4
169.6 193.0
Testing cost
Brute-force Evaluation-based Reward-based Random
Evaluation-based
Sum throughput (bits) Sum throughput (bits)
(b) Pre-filtering results
Fig. 5. Experimental results in a real-world case study.
a linear correlation where a lower DT-BSM consistently yields better worst-case performance. While a low DT-BSM does not always guarantee optimality, since a suboptimal DT could still train a successful policy by coincidence, it obviously and effectively precludes training failures, as no DT with a low DT-BSM yielded a poorly performing policy. This confirms that the evaluated mismatch value reliably reflects the DT’s ability to produce a robust and high-performing agentic AI policy, providing a c-
rucial performance guarantee in theory for DT-driven network optimization.
C. Pre-filtering
Beyond performance guarantee, a significant practical impact of the DT evaluation lies in its ability to streamline the DT-driven RL workflow. Without a reliable evaluation method, it is necessary to train agents in all the 120 candidate DTs and then test each policy via real-world deployment to identify the best one. This exhaustive search, known as the brute-force

IEEE COMMUNICATIONS MAGAZINE 7
method, incurs substantial policy trial costs, encompassing both the computational resources for 120 full training processes and the testing cost of 120 separate deployments. The holistic DT evaluation offered an efficient alternative: pre-filtering. By calculating the mismatch value for each of the 120 candidates, we identified and selected a small subset of the most promising, high-fidelity DTs (e.g., the top 5%) for subsequent RL training and deployment tests. To validate its superiority, we al-
so compared this evaluation-based selection method with two baseline strategies: a straightforward random selection and a reward-based method that selected DTs based on the agent’s final training performance within the DT environment itself. The results of such a comparison were compelling. As depicted in Fig. 5b, the evaluation-based approach, using only the top 5% of DTs, produced a final policy whose performance was comparable to the optimal policy found through the exhaustive brute-force metho-
d. This results in a notable reduction in resource expenditure: training costs were reduced by 95%, and testing costs were cut by over 97%. Here, the testing cost is defined as the performance gap between a tested policy and the optimal policy in deployment. In contrast, the baseline methods proved to be far less effective. While they also reduced training cost, they failed to consistently exclude the inferior DTs, leading to higher testing costs. More critically, they risked filtering out the bes-
t-performing DTs, resulting in a suboptimal final policy, particularly when the selection ratio was small.
V. CONCLUSION AND FUTURE DIRECTIONS
In this article, we have provided a holistic evaluation framework for wireless network DTs. It transforms the DT into a reliable and theoretically grounded tool for agentic AIbased wireless network optimization by quantifying the taskcentric mismatch between DT and the real world. The potential applications are vast, and we conclude by highlighting several promising directions for future research.
A. Evaluation-in-the-loop Synchronization
Current DTs are often synchronized with the real world on a fixed schedule, which can be inefficient if the system state is stable, or out-of-date if rapid changes occur. The evaluated mismatch value could serve as a dynamic trigger for DT synchronization, where the DT would be updated from the real world only when the mismatch exceeds a predetermined threshold. This ensures that synchronization occurs precisely when the DT begins to diverge from reality, guaranteeing both operational efficiency a-
nd high-fidelity accuracy for learning.
B. DT Transferability Prediction
The cost of developing a high-fidelity DT for a complex network is substantial. A key question is whether a DT built for one environment can be effectively used in another. By utilizing a similar evaluation framework to measure the similarity between two different real-world environments, we can predict whether a DT built for one wireless network could
be effectively transferred to another, saving redevelopment costs and enabling the creation of foundational DT models that can be adapted across similar wireless network environments.
C. Mismatch-aware Training
A common challenge in DT-driven RL is that AI agents may learn to overfit to inaccuracies in the simulation, leading to poor generalization in the real world. Incorporating mismatch value as a regularization term into the RL training would encourage the agent to learn policies that are not only optimal within the given DT but are also robust to the inherent simulation-to-reality gap, facilitating the development of more generalizable policies in the real world.
REFERENCES
[1] X. You et al., “Toward 6G TKμ extreme connectivity: Architecture, key technologies and experiments,” IEEE Wireless Commun., vol. 30, no. 3, pp. 86–95, June 2023. [2] A. R. Elsherif, W.-P. Chen, A. Ito, and Z. Ding, “Resource allocation and inter-cell interference management for dual-access small cells,” IEEE J. Sel. Areas Commun., vol. 33, no. 6, pp. 1082–1096, June 2015. [3] A. Feriani and E. Hossain, “Single and multi-agent deep reinforcement learning for AI-enabled wireless networks: A tuto-
rial,” IEEE Commun. Surveys Tuts., vol. 23, no. 2, pp. 1226–1252, Secondquarter 2021. [4] W. Xu, Z. Yang, D. W. K. Ng, M. Levorato, Y. C. Eldar, and M. Debbah, “Edge learning for B5G networks with distributed signal processing: Semantic communication, edge computing, and wireless sensing,” IEEE J. Sel. Topics Signal Process., vol. 17, no. 1, pp. 9–39, Jan. 2023. [5] Z. Tao, W. Xu, Y. Huang, X. Wang, and X. You, “Wireless network digital twin for 6G: Generative AI as a key enabler,” IEEE Wireless C-
ommun., vol. 31, no. 4, pp. 24–31, Aug. 2024. [6] X. Lin, L. Kundu, C. Dick, E. Obiodu, T. Mostak and M. Flaxman, “6G digital twin networks: From theory to practice,” IEEE Commun. Mag., vol. 61, no. 11, pp. 72-78, Nov. 2023. [7] Z. Tao, W. Xu, and X. You, “Large vision model-enhanced digital twin with deep reinforcement learning for user association and load balancing in dynamic wireless networks,” arXiv preprint arXiv:2410.07611, Oct. 2024. [Online]. Available: https://arxiv.org/abs/2410.07611 [8-
] C. Ruah, O. Simeone, and B. Al-Hashimi, “A Bayesian framework for digital twin-based control, monitoring, and data collection in wireless systems,” IEEE J. Sel. Areas Commun., vol. 41, no. 10, Aug. 2023, pp. 3146–3160. [9] Z. Zhang et al., “Digital twin-enhanced deep reinforcement learning for resource management in network slicing,” IEEE Trans. Commun., vol. 72, no. 10, pp. 6209-6224, Oct. 2024. [10] C. Ruah, O. Simeone, and B. Al-Hashimi, “How to bridge the sim-to-real gap in digital twin-aide-
d telecommunication networks,” arXiv preprint arXiv:2507.07067, July 2025. [Online]. Available: https://arxiv.org/abs/ 2507.07067 [11] Z. Tao, Y. Guo, G. He, Y. Huang, and X. You, “Deep learning-based modeling of 5G core control plane for 5G network digital twin,” IEEE Trans. Cogn. Commun. Netw., vol. 10, no. 1, pp. 238–251, Feb. 2024. [12] R. Liu, T. H. Luan, Y. Qu, Y. Xiang, L. Gao and D. Zhao, “Internet of digital twin: Framework, applications and enabling technologies,” IEEE Commun. Surveys Tu-
ts., Early access, Mar. 2025. [13] S. Mihai et al., “Digital twins: A survey on enabling technologies, challenges, trends and future prospects,” IEEE Commun. Surveys Tuts., vol. 24, no. 4, pp. 2255-2291, Fourthquarter 2022. [14] Z. Tao, W. Xu, and X. You, “Provable performance bounds for digital twin-driven reinforcement learning in wireless networks: A novel digitaltwin bisimulation metric,” IEEE Trans. Signal Process., Early access, Oct. 2025. [15] C. Villani, Topics in Optimal Transportation. A-
merican Mathematical Soc., 2021, vol. 58.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:50.783Z
- **Text Length:** 35522 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 7 of 7
