# PDF Document: Mitra et al. - 2024 - Distributed Mixture-of-Agents for Edge Inference with Large Language Models.pdf

**File Path:** Mitra et al. - 2024 - Distributed Mixture-of-Agents for Edge Inference with Large Language Models.pdf

**Processed Date:** 2026-02-10T18:17:03.532Z

**File Size:** 462.00 KB

**Total Pages:** 5

**Extracted Pages:** 5

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2842

**Title:** Distributed Mixture-of-Agents for Edge Inference with Large Language Models

**Collection:** Large Files

---

## Extracted Text Content

Distributed Mixture-of-Agents for Edge Inference
with Large Language Models
Purbesh Mitra1, Priyanka Kaswan2, and Sennur Ulukus1
1University of Maryland, College Park, MD, USA 2Princeton University, Princeton, NJ, USA
Abstract—Mixture-of-Agents (MoA) has recently been proposed as a method to enhance performance of large language models (LLMs), enabling multiple individual LLMs to work together for collaborative inference. This collaborative approach results in improved responses to user prompts compared to relying on a single LLM. In this paper, we consider such an MoA architecture in a distributed setting, where LLMs operate on individual edge devices, each uniquely associated with a user and equipped with its-
 own distributed computing power. These devices exchange information using decentralized gossip algorithms, allowing different device nodes to talk without the supervision of a centralized server. In the considered setup, different users have their own LLM models to address user prompts. Additionally, the devices gossip either their own user-specific prompts or augmented prompts to generate more refined answers to certain queries. User prompts are temporarily stored in the device queues when their-
 corresponding LLMs are busy. Given the memory limitations of edge devices, it is crucial to ensure that the average queue sizes in the system remain bounded. In this paper, we address this by theoretically calculating the queuing stability conditions for the device queues under reasonable assumptions, which we validate experimentally as well. Further, we demonstrate through experiments, leveraging open-source LLMs for the implementation of distributed MoA, that certain MoA configurations produce -
higher-quality responses compared to others, as evaluated on AlpacaEval 2.0 benchmark. The implementation is available at: https://github.com/purbeshmitra/distributed moa.
I. INTRODUCTION
Large language models (LLMs) have significantly advanced the field of natural language processing through their ability to generate contextually relevant responses to general user queries [1]–[5]. To further enhance the capabilities of LLMs, mixture-of-agents (MoA) has been proposed in [6] as a method for collaborative inference with LLMs to produce high-quality responses to prompts. The inference is facilitated by the semantic exchange of information between neighboring LLM models, where differen-
t smaller open sourced models talk with one another in natural language to produce high quality answers that rival cutting-edge proprietary models, such as OpenAI’s GPT-4o, across various benchmarks. MoA improves upon the performance of individual models by employing a structure consisting of multiple proposer models and an aggregator model. The proposer LLMs propose new plausible responses for a given prompt, while the aggregator LLM either chooses the most appropriate answer or refines them by c-
orrecting the mistakes of the proposers. The effectiveness
central server
single point of failure
collaboration among edge devices
edge computer
error-prone links with large communication delays
Fig. 1. An example of decision-making with edge devices. The central server with large compute power is directly connected to the edge devices. However, it is spatially separated from the edge devices, incurring large communication delays. Further, it is also a single point of failure, which can go offline due to link failures or adversarial attacks. The collaborations among edge devices, however, provides more diverse connections to more compute power than individual edge devices, thus making the-
 system more robust.
of this approach was demonstrated in [6], where the authors implemented a three-layer MoA system with three proposer LLMs in each layer. By utilizing a fixed prompt template for aggregation, which we refer to as the system prompt, it was shown that this method successfully generates highquality responses comparable to GPT-4o on benchmarks such as AlpacaEval 2.0, Flusk 2.0, and MT-bench. In a subsequent work [7], sparse mixture-of-agents (SMoA) framework was proposed to further improve the efficien-
cy, diversity, and scalability of multi-agent LLMs by introducing sparsity in agent interactions through mechanisms like response selection and early stopping.
An interesting observation about the MoA framework is that its proposer-aggregator format can be interpreted as different
arXiv:2412.21200v1 [cs.IT] 30 Dec 2024

user 1
user 2
user 3
user 4
user 5
prompt buffer
individual LLM
Fig. 2. System model of distributed MoA. Each device has their local prompts and which they infer by their local LLMs. Simultaneously, these prompts are sent to a few of their neighboring LLMs for inference and their responses are then aggregated by the original LLM. This response generation and aggregation process can continue for multiple rounds, constituting multiple layers of the MoA.
LLMs talking to one another using the semantics of natural language and refining the outputs to generate an improved response to a prompt. In the traditional communication setting, the main objective is accurate decoding of a data stream from a source on the bit-level, using tools such as error correcting codes. This approach is completely agnostic of the semantics of the communicated data, i.e., it does not take into account the accuracy of transferred information, like logical soundness, or fact-
uality. In semantic communication [8]–[10], however, the goal is to efficiently relay the most accurate information content, where the bit-level representation at the receiver can be completely different from that of the source. This leads to an intuitive understanding of device-to-device communication on a semantic level, where the information can be corrected or refined by leveraging machine intelligence. Indeed, such semantic communication between agents is the key to achieving the hyper-connec-
tivity in the upcoming 6G standards [11], [12]. With continuing progress in machine intelligence, we anticipate the deployment of more such agents in distributed edge devices, which will serve the user queries and often collaborate with other agents for accurate inference [13], [14]. Such distributed systems enable users to utilize their own data and computational resources without relying on a centralized server, which is often a single point of failure susceptible to issues such as link disrupti-
ons and adversarial attacks, as well as incurring large communication delays with the edge devices. On the other hand, maintaining a diverse network of connections among edge devices enhances the overall computational robustness of the system, as shown in Fig. 1. This motivates us to explore the idea of semantic gossiping within a distributed MoA setting. In our model, we consider multiple edge devices for computation or inference tasks, with each device hosting its own individual LLM. Thus, each -
of the agents or LLMs are spatially separated; see Fig. 2. When multiple such devices are involved in semantic communication, their information exchange can be framed within the context of rumor-spreading or gossiping, where different
system prompt
original prompt
layer 1 layer 2
final aggregator
final response proposer LLM
proposer response
Fig. 3. An illustration of a 2-layer mixture-of-agents system. The original prompt is inferred via 3 proposer LLMs in each layer and is finally aggregated at a single aggregator LLM. From second layer onwards, the LLMs use the system prompt to generate refined outputs from the concatenated prompts.
devices communicate with one another to accomplish certain goal-oriented tasks without the supervision of any centralized server [15]. This process of information hopping between nodes incurs some latency within the system. There has been significant research focusing on the timing aspect of gossiping for a single source of fixed information [16] and the timeliness of gossiping for a time-varying source [17]. Subsequent works have explored how gossip network scaling impacts the timeliness of the o-
verall system [18]. However, all these works only consider the latency aspect of the system, without taking the content or semantics of the data into account. To the best of our knowledge, there has not been any work that has considered both the semantics of the data being gossiped and its timeliness. This gap motivates us to formulate the goal of our paper of analyzing the capacity or stability of gossiping in the context of a distributed MoA system.
This goal of this paper is to implement a distributed MoA network and analyze its queuing stability. In other words, we aim to achieve maximum possible accuracy while ensuring that the overall system latency remains bounded. This approach allows edge devices to participate in the MoA framework while operating under memory constraints. Since system performance is influenced by the prompt generation rate at different users, we analyze the queuing stability of the LLMs at various users under some rea-
sonable assumptions. In particular, we assume that the prompts are generated for each user with a mean inter-arrival time, and these user LLMs can gossip their prompts for further assistance in the MoA format. The LLMs also have some mean prompt-inference time. We calculate the queuing stability as a function of this prompt generation rate and analytically determine whether the system is stable or if the queue size can grow exponentially. Additionally, we demonstrate through simulations how accura-
cy varies when the MoA structure is modified, such as by increasing the number of layers or the number of proposers within a layer.

user i
user j
System Prompt: “You have been provided with a set of responses from various opensource models to the latest user query. Your task is to synthesize these responses into a single, high-quality response...”
final response
LLMi
Pt
Pt+1
Prompt by user i
Prompt by user j
gossiping of response
Fig. 4. An overview of user i in distributed MoA. It has the LLMi in it, which sequentially infers prompts from the adjacent queue. The prompts are generated by user i itself and also from its neighbour j. The output of the LLM is sent to the neighboring node for further assistance in inferring. The final output comes from aggregating over different responses at the LLMi.
II. SYSTEM MODEL
In this section, we describe the system model for the distributed mixture-of-agents (MoA). We consider a network of n users, as illustrated in Fig. 2, where each user has its own individual LLM at its edge device. These LLMs can exchange prompts with one another to infer collaboratively for improving the quality of prompt responses. The LLM i gets prompts from its corresponding user i at rate λ as well as prompts from other LLMs for collaborative inference, which get stored in a first-come-first-s-
erved (FCFS) queue at the device. Once a prompt from the queue is inferred by an LLM, it is then either directly sent back to the user or stored in a buffer if further processing is needed; see Fig. 4. For simplicity, we assume that the average LLM inference time is α. We aim to analyze the conditions under which the queue remains stable as a function of λ (the prompt generation rate) and α (the average inference time). Each user sends its prompts to the device queue for processing by its correspo-
nding LLM, and also additionally selects, uniformly at random, k out of other n − 1 neighboring devices to transmit the prompts for inference. When the responses from the neighboring k LLMs have been returned, the original user’s LLM acts as an aggregator to synthesize a refined output. The aggregator LLM takes the original prompt and the collected responses as input, guided by the following system prompt for instruction:
“You have been provided with a set of responses from various open-source models to the latest user query. Your task is to synthesize these responses into a single, highquality response. It is crucial to critically evaluate the information provided in these responses, recognizing that some
of it may be biased or incorrect. Your response should not simply replicate the given answers but should offer a refined, accurate, and comprehensive reply to the instruction. Ensure your response is well-structured, coherent, and adheres to the highest standards of accuracy and reliability. Do not add any additional comments about how you created these responses. Just synthesize these responses as instructed.” [6].
Algorithm 1 Distributed Mixture of Agents Algorithm
1: Prompt arrival rate is λ
n at all the users. 2: for j ∈ [M ] do 3: for i ∈ [n] do
4: procedure PROMPTARRIVAL(user i) 5: Push the prompt into its LLM queue. 6: If generated by user i, choose k LLMs randomly to transmit. 7: procedure MODELINFERENCE(user i) 8: Infer the generated prompt with expected time α. 9: If prompt is generated by user j ̸= i, send the response back to j.
10: procedure PROMPTCONCATENATION(user i) 11: Concatenate the responses from different LLMs for an inferred prompt. 12: Push the concatenated prompt into the LLM inference queue. 13: j ← j + 1 14: Send the concatenated prompt to k randomly chosen LLMs if j < M .
This is essentially the basic structure of the MoA for a single layer. If multiple layers are employed, the prompt, along

TABLE I ACCURACY, LATENCY, AND AVERAGE QUEUE FOR DIFFERENT MOA CONFIGURATIONS WITH SAME LLM MODEL WITH 0.7 TEMPERATURE
MoA configuration Accuracy (%) Latency (seconds) Average queue size M = 0, k = 0 21.91 94.01 0.6 M = 1, k = 1 29.55 329.92 2.04 M = 1, k = 2 39.63 484.81 3.28 M = 2, k = 1 28.88 603.43 2.32 M = 2, k = 2 39.89 790.01 4.80 M = 1, k = 3 39.79 578.88 3.74 M = 2, k = 3 40.63 1074.28 5.78
with the concatenated responses and system prompt, is again forwarded to k randomly selected LLMs for further inference. The MoA process iterates through these layers until the final result is aggregated by the user’s LLM, as illustrated in Fig. 3. The complete distributed LLM communication protocol is shown in Algorithm 1.
III. QUEUING STABILITY CALCULATION
In this section, we analyze the queuing stability of the distributed MoA system. The following theorem establishes the conditions for system stability as a function of the prompt generation rate and the average inference time.
Theorem 1 The individual queues in the distributed MoA setting remain stable if the following condition is satisfied:
α((k + 1)M + 1)λ < 1. (1)
Proof: In the distributed MoA setting, each LLM processes its own user’s prompts that are arriving with rate λ. Additionally,
it processes prompts from the other users with probability
(n−2
k−1) (n−1
k)= k
n−1 . Hence, each LLM proposer in a single layer
has the prompt arrival rate,
Rprop
in = λ + (n − 1)λ × k
n − 1 = (k + 1)λ. (2)
If there are M number of layers in the MoA, then an LLM receives these prompts at a rate that is M times the original rate. Thus, the input throughput for a device queue becomes,
Rlayer
in = Rprop
in × M = (k + 1)M λ. (3)
Additionally, for the aggregation step, the original user’s LLM is used again, resulting in total contribution of (k + 1)M + 1 times the original throughput. Thus, the final input throughput generated from a single user can be expressed as,
Rin = ((k + 1)M + 1)λ. (4)
Based on our assumption that the average inference time of an LLM is α, the output throughput of an LLM is Rout = 1
α . For a stable FCFS queue, the stability condition is known to be Rin < Rout. Consequently, the stability condition becomes,
((k + 1)M + 1)λ < 1
α , (5)
concluding the proof. ■
Remark 1 Note that a diverse set of LLMs can be used by different devices, and their average inference times will not necessarily be the same constant α. Let us denote the average inference times as {α1, α2, · · · , αn} for all the n LLMs. Then, the queuing stability condition depends on the inference rate of the slowest LLM, i.e., the LLM with the highest mean inference time. Hence, for a general case, (5) can be written as,
((k + 1)M + 1)λ < 1
αmax
=1
max{α1, α2, · · · , αn} . (6)
IV. NUMERICAL RESULTS
In this section, we present the experimental results with distributed MoA settings. We use four different open-source LLMs: Llama-3-70B, Qwen-1.5-72B, Mixtral-8x22B-v0.1 and dbrx-instruct, i.e., n = 4. The prompt arrival rate for individual users is λ = 1
4 . We compute the accuracy in a
subset of AlpacaEval 2.0 dataset.1 The accuracy of the LLM responses are evaluated via GPT-4 API. Additionally, we evaluate the system’s average queue size and average prompt latency. The implementation is available at: https://github.com/ purbeshmitra/distributed moa. In our first experiment, we implement a system where all the users use a Qwen-1.5-72B model at their edge devices. All the models sample at their output with the temperature parameter 0.7. This makes the output token streams differe-
nt for different LLMs with the same prompt. We experiment with different number of layers M and different number of proposers k and find the accuracy in AlpacaEval 2.0 dataset and the corresponding average system latency. The results are summarized in Table I. Additionally, we also calculate the average queue size, which measures the average number of prompts waiting in the queues for LLM inference. In Table I, we observe that there is a clear trade-off between the accuracy and the average queuesi-
ze. To obtain higher accuracy, it is necessary for the prompts to be processed with multiple LLMs, and thus the individual queue sizes must be larger to accommodate higher prompt
1Due to resource constraints, our evaluation focuses on 10 representative samples. This exploratory analysis provides preliminary insights into the distributed MoA’s capabilities, latency limitations, and trends, which align with the findings of the full simulation for MoA in [6].

TABLE II ACCURACY, LATENCY, AND AVERAGE QUEUE FOR DIFFERENT MOA CONFIGURATIONS WITH DIVERSE LLMS
MoA configuration Accuracy (%) Latency (seconds) Average queue size M = 0, k = 0 23.62 409.58 1.71 M = 1, k = 1 39.41 806.88 2.36 M = 1, k = 2 39.52 1112.33 2.72 M = 2, k = 1 38.22 1357.74 1.83 M = 2, k = 2 40.51 1971.50 3.07 M = 1, k = 3 38.96 1292.73 2.92 M = 2, k = 3 55.55 2274.59 4.21
traffic. As observed in the table, increasing the number of layers or proposers in a layer clearly deteriorates the timeliness performance of the system. The highest accuracy and latency are observed with a configuration of M = 2 layers and k = 4 proposers. Thus, for achieving higher accuracy, while keeping a constrained budget on processing time or user memory, requires some trade-off in the choice of parameters M and k, as evident from the table.
Finally, we show the results for a distributed MoA with all four of the different LLMs combined. In this case, we use the four LLMs: Llama-3-70B, Qwen-1.5-72B, Mixtral8x22B-v0.1 and dbrx-instruct for inferring the prompts. Each prompt is generated randomly at different users, and the users communicate with their neighbors for processing the prompt in a MoA format. We show the accuracy and latency for different model configurations, as well as the average queue size, for different values of M and k-
 in Table II.
We observe that using diverse LLMs increases the accuracy. This is evident from the fact that keeping the number of proposers and the layers the same as in Table I increases the accuracy. We also observe similar trends of increasing accuracy with more number of layers and proposers per layer as in the single LLM case. Another observation is that the average queue size also increases with higher system latency, thus confirming the trade-off between accuracy and queue size.
V. CONCLUSION
In this work, we implemented a distributed MoA framework for edge device collaboration with LLMs. Each edge device has their own individual LLM. If a device only uses its own LLM, its response accuracy remains poor. This accuracy can be increased if the LLMs collaborate together in a MoA framework. The MoA framework allows the LLMs to generate responses, which are further refined by other LLMs in multiple layers to generate higher quality responses. We showed how such a system can be implemented v-
ia gossiping prompts and responses in a decentralized manner. Our experimental simulations show that there exists a trade-off between accuracy and system latency. Furthermore, higher latency also necessitates the device queue size to be larger.
REFERENCES
[1] T. Brown, B. Mann, N. Ryder, M. Subbiah, J. D. Kaplan, P. Dhariwal, A. Neelakantan, P. Shyam, G. Sastry, A. Askell, et al. Language models are few-shot learners. NeurIPS, December 2020. [2] J. Wei, Y. Tay, R. Bommasani, C. Raffel, B. Zoph, S. Borgeaud, D. Yogatama, M. Bosma, D. Zhou, D. Metzler, et al. Emergent abilities of large language models. Trans. on Machine Learning Research, August 2022. [3] W. X. Zhao, K. Zhou, J. Li, T. Tang, X. Wang, Y. Hou, Y. Min, B. Zhang, J. Zhang, Z. Dong, et a-
l. A survey of large language models. 2023. Available at arXiv:2303.18223. [4] Q. Dong, L. Li, D. Dai, C. Zheng, J. Ma, R. Li, H. Xia, J. Xu, Z. Wu, B. Chang, X. Sun, L. Li, and Z. Sui. A survey on in-context learning. In ACL EMNLP, November 2024. [5] S. Minaee, T. Mikolov, N. Nikzad, M. Chenaghlu, R. Socher, X. Amatriain, and J. Gao. Large language models: A survey. 2024. Available arXiv:2402.06196. [6] J. Wang, J. Wang, B. Athiwaratkun, C. Zhang, and J. Zou. Mixture-ofagents enhances large langu-
age model capabilities. 2024. Available at: arXiv:2406.04692. [7] D. Li, Z. Tan, P. Qian, Y. Li, K. S. Chaudhary, L. Hu, and J. Shen. SMoA: Improving multi-agent large language models with sparse mixture-of-agents. 2024. Available at arXiv:2411.03284. [8] X. Luo, H. Chen, and Q. Guo. Semantic communications: Overview, open issues, and future research directions. IEEE Wireless Communications, 29(1):210–219, January 2022. [9] Z. Qin, X. Tao, J. Lu, W. Tong, and G. Y. Li. Semantic communications: Pri-
nciples and challenges. 2021. Available at arXiv:2201.01389. [10] A. Kalita. Large language models (LLMs) for semantic communication in edge-based iot networks. 2024. Available at arXiv:2407.20970. [11] H. Lee, B. Lee, H. Yang, J. Kim, S. Kim, W. Shin, B. Shim, and H. V. Poor. Towards 6G hyper-connectivity: Vision, challenges, and key enabling technologies. Journal of Communications and Networks, 25(3):344–354, June 2023. [12] W. Yang, H. Du, Z. Q. Liew, W. Y. B. Lim, Z. Xiong, D. Niyato, X. Chi, -
X. Shen, and C. Miao. Semantic communications for future internet: Fundamentals, applications, and challenges. IEEE Communications Surveys & Tutorials, 25(1):213–250, November 2022. [13] K. Wang, Y. Lu, M. Santacroce, Y. Gong, C. Zhang, and Y. Shen. Adapting LLM agents through communication. 2023. Available at arXiv:2310.01444. [14] Y. Li, H. Wen, W. Wang, X. Li, Y. Yuan, G. Liu, J. Liu, W. Xu, X. Wang, Y. Sun, et al. Personal LLM agents: Insights and survey about the capability, efficiency and se-
curity. 2024. Available at arXiv:2401.05459. [15] A. J. Demers, D. H. Greene, C. H. Hauser, W. Irish, J. Larson, S. Shenker, H. E. Sturgis, D. C. Swinehart, and D. B. Terry. Epidemic algorithms for replicated database maintenance. In Epidemic algorithms for replicated database maintenance, August 1987. [16] D. Shah. Gossip algorithms. Foundations and Trends in Networking, 3(1):1–125, 2008. [17] R. D. Yates. The age of gossip in networks. In IEEE ISIT, July 2021. [18] P. Kaswan, P. Mitra, A. Srivas-
tava, and S. Ulukus. Age of information in gossip networks: A friendly introduction and literature survey, 2023. Available at arXiv:2312.16163.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:03.532Z
- **Text Length:** 23601 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 5 of 5
