# PDF Document: He et al. - 2025 - Statistically-Guided Dual-Domain Meta-Learning with Adaptive Multi-Prototype Aggregation for Distrib.pdf

**File Path:** He et al. - 2025 - Statistically-Guided Dual-Domain Meta-Learning with Adaptive Multi-Prototype Aggregation for Distrib.pdf

**Processed Date:** 2026-02-10T18:15:37.287Z

**File Size:** 613.91 KB

**Total Pages:** 11

**Extracted Pages:** 11

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3368

**Title:** Statistically-Guided Dual-Domain Meta-Learning with Adaptive Multi-Prototype Aggregation for Distributed Fiber Optic Sensing

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Statistically-Guided Dual-Domain Meta-Learning with Adaptive Multi-Prototype
Aggregation for Distributed Fiber Optic Sensing
Yifan Hea, Haodong Zhangb, Qiuheng Songc, Lin Leia, Zhenxuan Zengd, Haoyang Hea, Hongyan Wua,∗
aCollege of Smart Materials and Future Energy, Fiber-Optic Research Center, Fudan University, Shanghai 200433, China bSchool of Software, Northwestern Polytechnical University, Xi’an 710129, China cSichuan Fujinan Technology Co., Ltd., Chengdu 611400, China dSchool of Computer Science, Northwestern Polytechnical University, Xi’an 710129, China
Abstract
Distributed Fiber Optic Sensing (DFOS) has shown strong potential in perimeter security due to its capability of monitoring vibration events across long distances with fine spatial resolution. However, practical DFOS systems face three critical challenges: (1) signal patterns of the same activity vary drastically under different fiber deployment types (e.g., underground, wall-mounted), causing domain shift; (2) labeled data in new deployment scenarios is often scarce or entirely unavailable, limit-
ing model adaptability; and (3) even within source domains, data scarcity makes it difficult to capture intra-class diversity for robust learning. To address these challenges, we propose a novel meta-learning framework, DUPLE, for cross-deployment DFOS activity identification. First, a dual-domain multi-prototype learner fuses temporal and frequency domain features, enhancing the model’s generalization ability under signal distribution shifts. Second, a Statistical Guided Network (SGN) infers doma-
in importance and prototype sensitivity from raw statistical features, providing data-driven prior information for learning in unlabeled or unseen domains. Third, a query-aware prototype aggregation module adaptively selects and combines relevant prototypes, thereby improving classification performance even with limited data. Extensive experiments on cross-deployment DFOS datasets demonstrate that our method significantly outperforms baseline approaches in domain generalization settings, enabling -
robust event recognition across diverse fiber configurations with minimal labeled data.
Keywords: Distributed Fiber Optic Sensing, Domain Generalization, Meta-Learning, Cross-Domain Recognition
1. Introduction
Fiber-optic sensing acquires continuous measurements of strain, vibration, and temperature along tens of kilometers of cable by interrogating minute variations in the optical field. It delivers meter-scale spatial resolution and high temporal sampling while avoiding any distributed active electronics along the route (Rao et al., 2021; Hartog, 2017; Wang et al., 2020). Owing to its long reach, continuous coverage, immunity to electromagnetic interference, and reuse of existing telecom fiber, the te-
chnology is broadly applicable to pipeline inspection, powerand railway-corridor monitoring, structural-health and geotechnical monitoring, and environmental and seismic sensing. In perimeter security in particular, a single fiber can provide covert, privacy-preserving continuous coverage, eliminating the need to deploy and maintain dense arrays of point sensors (Muñoz and Soto, 2022; Ajo-Franklin et al., 2019; Lindsey et al., 2019; Tejedor et al., 2019; Zhong et al., 2025).
∗Corresponding author. E-mail: hywu@fudan.edu.cn
Email addresses: yfhe25@m.fudan.edu.cn (Yifan He), zhang_haodong@mail.nwpu.edu.cn (Haodong Zhang), qhsong@fudan.edu.cn (Qiuheng Song), leilin0603@163.com (Lin Lei), zengzhenxuan@mail.nwpu.edu.cn (Zhenxuan Zeng), hyhe25@m.fudan.edu.cn (Haoyang He), hywu@fudan.edu.cn (Hongyan Wu)
Current approaches for identifying fiber optic signals range from hand-crafted features using traditional classifiers to end-toend neural networks. The former extracts time- and frequencydomain descriptors (such as statistical moments, short-time Fourier transforms, or wavelet coefficients) and performs classification using support vector machines (SVMs), random forests, or hidden Markov models (HMMs) (He and Liu, 2021; Tejedor et al., 2019). The latter uses one- or two-dimensional CNNs or recurre-
nt architectures to learn discriminative representations directly from the raw data stream (Wu et al., 2019a, 2021). While these methods are effective in fixed settings, they fail to generalize reliably across deployments. Differences in fiber type and layout (e.g., underground or wall-mounted), coupling conditions, and ambient noise can lead to significant domain shift (Muñoz and Soto, 2022). New sites often provide little or no labeled data, and even source deployments may lack sufficient within-
-class coverage to capture the diverse patterns of activity. As a result, models overfit to the training conditions and experience a sharp decline in performance when moved to new locations. A natural response is to seek domain generalization. Conventional domain adaptation or transfer learning improves robustness when some target-domain data (unlabeled or a few labels) are available for fine-tuning or distribution alignment; however, such data are frequently unavailable or costly to obtain
arXiv:2511.17902v1 [cs.LG] 22 Nov 2025

in perimeter security deployments. In contrast, meta-learning offers an attractive fit for this problem: by training episodically across multiple deployments, with support/query splits that mimic cross-deployment testing, the learner acquires tasklevel adaptation skills that transfer to unseen sites without target labels (Finn et al., 2017; Snell et al., 2017; Ye et al., 2020). Metalearning also naturally supports few-shot and low-data regimes, aligning with the realities of field deployment and -
the variability intrinsic to interferometric fiber signals (Luong et al., 2023). Despite this promise, three gaps remain in applying metalearning to fiber-optic sensing: (i) Missing dual-domain synergy under multimodality. Existing models typically emphasize either time-domain or frequency-domain features, or fuse them with static rules (Zhang et al., 2022). They also often assume a single prototype per class, which cannot cover the multi-modal patterns that arise across deployments and coupling c-
onditions. A principled time+frequency collaborative meta-learner with multi-prototype class representations and a sound fusion rule is needed (Zhang et al., 2022; Allen et al., 2019). (ii) Lack of statistical guidance to coordinate views. The relative reliability of time vs. frequency evidence varies by sample and deployment (e.g., SNR, noise color, bandwidth) (Titov et al., 2022). Current methods rarely exploit raw statistical descriptors to infer domain importance or prototype sensitivity, leav-
ing fusion under-informed. (iii) No query-adaptive decision at inference. Most meta-classifiers compare a query to fixed class prototypes; they do not adapt the class representation per query. For interferometric signals with localized artifacts and variable coupling, the classifier should select and weight the most relevant prototypes conditioned on the query’s own statistics (Ye et al., 2020; Vinyals et al., 2016). We address these gaps with Statistically-Guided Dual-Domain Meta-Learning with Ad-
aptive Multi-Prototype Aggregation, a framework tailored for cross-deployment fiber-optic sensing with Michelson-based vibration capture. Our contributions are threefold:
• Dual-domain multi-prototype meta-learner. We learn timedomain and frequency-domain embeddings and perform perclass multi-prototype clustering in each view; class evidence is combined via a soft-OR (log-sum-exp) rule, yielding expressive, deployment-robust class representations.
• Statistical Guidance Network (SGN). From raw statistical descriptors, SGN infers domain importance and prototype sensitivity, providing data-driven priors that coordinate the two views and stabilize learning under unlabeled or unseen deployments.
• Query-aware adaptive aggregation. In the collaborative decision stage, each query uses its SGN guidance to form a key and applies attention over the class’s prototype sets, selecting and weighting the most relevant prototypes before producing the final logits.
Together, these designs align the training objective with cross-deployment use, inject sample-wise statistical priors to guide dual-domain fusion, and enable instance-level adaptation
at decision time—delivering stronger generalization with minimal data requirements.
2. Related Work
With the development of artificial intelligence (AI) technology, its application in distributed optical fiber vibration signal recognition is becoming increasingly widespread. Early research typically employed a paradigm combining feature extraction with traditional classifiers for event recognition. The features used included time-frequency domain statistical descriptors such as short-time Fourier transforms (Wu et al., 2022; Madsen et al., 2007), wavelet coefficients (Jia et al., 2019b), and Mel-
-frequency cepstral coefficients (MFCCs) (Wu et al., 2021).Common classification models include support vector machines (SVMs) (Qu et al., 2010; Xu et al., 2017), Gaussian mixture models (GMMs) (Tejedor et al., 2019, 2017), and hidden Markov models (HMMs) (Wu et al., 2019b). SVMs are often used for event classification in static scenarios, while GMMs/HMMs are used to model the statistical characteristics of time series signals and are suitable for handling the dynamic evolution of events. However,-
these generative models rely on complex parameter design and tuning processes and are generally less stable than discriminative models when sufficient training data is available. Additionally, some work has employed rule-driven heuristic methods, such as energy threshold detection, to achieve preliminary event recognition,but these methods struggle to generalize to complex patterns and diverse deployment scenarios. To further model the temporal structure of signals, recurrent neural networks (RNNs-
) (Medsker et al., 2001) such as long short-term memory (LSTM) (Sherstinsky, 2020) networks have been introduced to capture the temporal dynamics of events. Compared with traditional static feature extraction methods based on sliding windows, RNN can continuously perceive contextual dependencies, thereby improving the recognition of persistent or periodic events.Furthermore, hybrid architectures such as CNN-RNN have been proposed to simultaneously capture local features and temporal dependencies, -
achieving good overall performance (Wang et al., 2016; Khaki et al., 2020). In recent years, the Transformer architecture has gradually demonstrated its powerful capabilities in signal modeling due to its global attention mechanism (Vaswani et al., 2017). Some work has introduced multi-branch or multi-scale Transformer architectures based on attention mechanisms to simultaneously account for different time scales and pattern complexity, achieving more refined event perception(Lim et al., 2021; Zho-
u et al., 2021).. In some tasks, Transformers have even surpassed traditional CNN or RNN models, demonstrating their potential for modeling long-range dependencies and multimodal fusion. Overall, deep learning methods have greatly improved the ability of distributed fiber optic systems to identify various vibration events, reduced feature engineering costs, and significantly lowered false alarm rates(He and Liu, 2021; Wu et al., 2019a, 2021). However, these methods still face two key challenges: F-
irst, they typically rely on a large number of labeled samples to support parameter training, but in actual deployments, data from
2

different deployments and environmental conditions is often difficult to obtain. Second, when the distribution of the model differs between the training deployment and the test environment, performance often degrades significantly, and the model lacks the ability to generalize across deployments. These limitations have prompted researchers to focus on learning mechanisms with greater adaptability and generalizability, such as meta-learning and domain generalization methods. In distributed fiber o-
ptic sensing, domain shift is common. Changes in installation method, soil medium, or equipment can significantly affect signal characteristics, thus violating the training-testing identical distribution assumption. Meta-learning is a recently emerging strategy that aims to enable models to quickly adapt to new tasks or domains by training on a multi-task distribution. Classic meta-learning algorithms such as MAML (ModelAgnostic Meta-Learning) and Prototypical Networks (ProtoNet) have achieved wid-
espread success in fields such as computer vision(Finn et al., 2017; Snell et al., 2017). MAML simulates the fine-tuning process on multiple tasks to learn a parameter initialization that adapts to new tasks after a few gradient updates. ProtoNet is a metric learning method that uses the mean of each class’s samples in the embedding space as a prototype and classifies based on the nearest neighbor prototype. These methods have achieved significant performance improvements on standard few-shot lear-
ning benchmarks such as MiniImageNet, but they generally assume that the training and test tasks are distributed similarly. Building on this foundation, researchers have also proposed a series of meta-learning methods with improvements across different dimensions. For example, R2D2 (Ridge Regression Differentiable Discriminator)(Bertinetto et al., 2018) introduces an analytical solver, enabling the model to perform stable and rapid feature fitting. ANIL (Almost No Inner Loop)(Raghu et al., 2019) e-
mphasizes task specificity by focusing on the classifier layer, fine-tuning only top-level parameters while keeping the feature extractor fixed, reducing computational effort and overfitting risks. FEAT (Few-shot Embedding Adaptation with Transformer)(Ye et al., 2020) utilizes the Transformer module to perform context-aware adjustments to the support set embedding, improving the adaptability of prototype representation in small sample sizes. These methods expand the spectrum of meta-learning algor-
ithms in terms of optimizer structure, parameter update paths, and representation flexibility, and demonstrate differentiated advantages in few-shot and cross-domain tasks. Research on meta-learning in the DFOS field is still in its early stages and faces numerous challenges. For example, tasks in each deployment scenario may have very few samples, and deployments vary significantly. Traditional meta-learning frameworks struggle to directly function in such non-stationary, multimodal, and high-noi-
se scenarios. Furthermore, ProtoNet’s single prototype assumption is not applicable to event categories with significantly varying distributions; mechanisms such as multi-prototype representations or adaptive prototype aggregation become even more necessary in this context. Furthermore, because DFOS signals are long, high-dimensional sequences often accompanied by unstructured noise, meta-learning algo
rithms must also possess temporal modeling capabilities and robustness. In summary, meta-learning approaches for domain generalization offer a potential path to addressing the generalization challenge of DFOS deployment by simulating distributional shifts during training, enabling models to adapt to new domains. However, existing methods such as MAML, ProtoNet, R2D2, ANIL, and FEAT still struggle with the multimodality, statistical bias, and uncertainty in prototype representation of DFOS data. Th-
is motivates us to design a more targeted architecture, namely the statistically guided dual-domain meta-learning framework proposed in this paper. By integrating statistical view guidance, dual-view multi-prototype aggregation, and queryaware decision-making mechanisms, this framework alleviates the adaptation bottlenecks of traditional meta-learning for DFOS tasks. The next section will detail the modeling details and innovative design of this framework.
3. Domain Generalization and Datasets
In a distributed fiber optic sensing (DFOS) system, the same action can produce significantly different signal responses under different deployment conditions. We obtained the action signal by phase demodulating the output signal of a Michelson interferometer system. Figure 1 shows a comparison of the climbing action signals under different deployment configurations. It can be seen that even the same action can exhibit drastically different signal characteristics under the influence of various env-
ironmental factors such as fiber installation location, contact materials, and installation methods. These factors lead to changes in coupling, spectral characteristics, and signal-tonoise ratio, resulting in domain shift. This makes it difficult to generalize models trained only in specific scenarios to other deployment environments.
Amplitude(rad)
Time(s)
Time(s)
Time(s)
Time(s)
Amplitude(rad)
Amplitude(rad) Amplitude(rad)
(a) (b)
(c) (d)
Figure 1: The figure shows the acquisition of climbing vibration signals under four different deployment methods. (a) is the acquisition under the wire mesh fence scenario, (b) is the acquisition under the barbed wire scenario, (c) is the acquisition under the wall scenario, and (d) is the acquisition under the hangnail net scenario. Due to differences in distance from the signal source, installation structure, or coupling conditions, the waveforms acquired under each deployment method show signif-
icant differences in amplitude, frequency distribution, and pulse characteristics.
To systematically study the impact of deployment changes on activity identification, we constructed two domain generalization datasets specifically for Distributed Fiber Optic Sensing
3

(DFOS) systems: OSDG1 and OSDG2. Each dataset contains multiple deployment domains where the same set of activities is recorded under different fiber installation configurations. This design allows for controlled evaluation of cross-deployment generalization without introducing label inconsistencies. Due to differences in deployment across projects, signal lengths vary; these will be uniformly sampled to the same length during subsequent model preprocessing. The OSDG1 dataset contains two deploym-
ent scenarios, representing typical perimeter security setups. In the first scenario, fiber optic cables are directly installed on traditional barbed wire. In the second scenario, fiber optic cables are fixed to a composite boundary structure consisting of a lower railing and an upper spiral barbed wire fence. Both scenarios recorded four types of events, including environmental context, human climbing activities, wind and rain, and the impact of human smash on the deployment environment. See Tabl-
e 1 for details on the dataset size and distribution. Because this data was collected from a real-world project, acquiring signal data for specific actions was challenging, resulting in uneven data distribution and increasing the difficulty of model recognition.
Table 1: OSDG1 Dataset Quantity Distribution Table
Deployment method Background Climb Rain Smash
Barbed wire 70 125 80 104 Wire mesh fence 125 43 37 123
The OSDG2 dataset includes three different deployment conditions, covering a wider range of structural materials. See table 2 for dataset size details. Fiber optic cables were installed on Hangnail net, solid concrete walls, and Railing. Data for each deployment area comes from three action categories: environmental category, ladder climbing, and impact. All records were collected under consistent sensor parameters and sampling settings to ensure that regional differences are entirely attributable-
 to the different deployment methods. The climbing category in OSDG2 differs from that in the OSDG1 dataset in that, in most cases, people use ladders to climb safety facilities. The impact categories include human-made tools striking, rock impacts, and wildlife impacts. These factors also contribute to dividing this data into two separate datasets.Each dataset has a consistent label space across all deployment domains, enabling controlled cross-deployment evaluation, while the two datasets differ-
 in class composition, deployment structures, and class imbalance, providing diverse levels of difficulty for DFOS domain generalization.
Table 2: OSDG2 Dataset Quantity Distribution Table
Deployment method Background Ladder climbing Impact
Hangnail net 200 130 199 Wall 200 133 200 Railing 200 131 200
4. Method
4.1. Overall Framework Overview
Our meta-learning framework consists of three main components operating in concert: a dual-domain multi-prototype meta-learner, a statistical guidance network (SGN), and a collaborative decision module. As shown in Figure 2, the raw input is processed in parallel by time-domain and frequency-domain feature extractors, generating two sets of embeddings for the support and query samples, respectively. Furthermore, a global 26-dimensional statistical feature vector is extracted from each sample, whic-
h the SGN converts into a guidance signal and adjusts the weights. In a single training episode, the support embeddings in each domain are fed into the meta-learner to generate class prototypes and initial class predictions. These intermediate results from the dual domains are then coordinated by the collaborative decision module, which uses the guidance signal from the SGN to adaptively weight the contribution of each domain and perform query-aware prototype aggregation. The result is a final pre-
diction for each query that reflects information from both the time and frequency domains. All components are jointly trained in an episodic manner, enabling the model to quickly adapt to new inference tasks by simply forwarding data through this fixed pipeline without the need for fine-tuning.
4.2. Dual-Domain Multi-Prototype Meta-Learner
To exploit complementary information, we extract features of fiber data in the time and frequency domains, respectively. Let x(t) and x( f ) denote the original time-domain signal and its time-spectrogram of the sample, respectively. We use two parallel feature extractors, ft(·) and f f (·), where the 1DCNN extracts time-domain signal features and the 2DCNN extracts signal time-spectrogram features. They encode x(t) and x( f ) into D-dimensional feature vectors, z(t) = ft(x(t)) ∈ RD and z( f ) = f-
 f (x( f )) ∈ RD. These embedding networks are designed to produce comparable feature representations for both domains (of dimension D = 128 in our implementation). Given a labeled support set, we obtain a set of support embeddings in the time domain zi(t) and the frequency domain zi( f ). These two domains are handled independently by the same meta-learning logic, as described below. We introduce an adaptive multi-prototype representation to capture the complex class distribution, rather than col-
lapsing the support examples for each class into a single prototype as in standard prototypical networks. For each class c, we cluster the embeddings of the support examples zi(t) : yi = c and
zi( f ) : yi = c, generating K(t)
c and K( f )
c prototypes in the time and frequency domains, respectively. The number of prototypes Kc is dynamically determined based on the characteristics of the support set. This strategy is particularly useful when dealing with classes that exhibit diverse patterns, as it allows the model to represent the class with multiple prototype vectors, thereby enhancing its generalization ability. After obtaining prototypes for each class in both domains, we compute the matching score between each query sample and-
 the class prototype. Specifically, for each query sample zq, we use cosine similarity to measure the similarity between the
4

++
+
+
+ +
+ ++
+
+
+
+
+
+
Statistical guidance network
Guidance signals
...
2D-CNN Frequency-domain meta-learning domain
Statistical characteristics
+
+
+
+
+ +
+ ++
+
+
+
+
+
+
1D-CNN Time-domain meta-learning domain
...
...
Signal
Time domain signal
Time-frequency signal
+
Collaborative decision
Result
Main process of the model
Figure 2: Overview of the proposed Dual-Domain Meta-Learning framework. The architecture integrates temporal and spectral information by separately encoding input signals through dual-domain multi-prototype learners, which construct diverse representations across domains. These representations are then dynamically modulated by the Statistical Guidance Network (SGN), which derives instance-specific guidance signals and domain importance weights based on statistical characteristics of the input. Fin-
ally, a Collaborative Decision module leverages a query-aware attention mechanism to adaptively aggregate class prototypes and refine the classification decision by combining domain-specific logits, inter-prototype relational features, and confidence scores.
query and each prototype. For domain d ∈ t, f , we calculate the similarity between the query embedding zq(d) and each prototype cc, k(d) of class c. The matching score of class c in domain d is calculated as follows:
l(d)
c (q) = log
K Xc
k=1
exp λ · sim(zq, c(d)
c,k) . (1)
where sim(·, ·) is the cosine similarity between the query and prototype, and λ is a temperature scaling factor that controls the sharpness of the distribution. The result is a logit score l(d)
c for each class c in both domains. The logits from both domains are then passed to the Collaborative Decision module for further fusion and decision-making.
4.3. Statistical Guidance Network (SGN)
The Statistical Guidance Network (SGN) plays a crucial role in our framework, providing context-aware guidance signals to regulate the learning process. It does this by analyzing the global statistical features of the input data. These features, including average energy, zero-crossing rate, and other relevant statistics, are used to guide the meta-learner, provide domain-specific weights, and enhance the prototype matching process.The specific structure is shown in Figure 3. The SGN receives as in-
put a 26-dimensional statistical feature vector s for each sample. This vector encodes various global properties of the signal, capturing information not immediately apparent from the original time-domain or frequency-domain representations. The network consists of two sub-networks: one
Calculating statistical features
MLP
Physical features
MLP Environment
features
Fusion
features MLP
MLP Softmax Domain weights
MLP Sigmoid Prototype
sensitivity
Guidance signals
Statistical features
SGN Module Flowchart
Figure 3: A schematic diagram of the Statistical Guidance Network (SGN) is shown. This module takes the statistical features of the input signal as input and obtains intermediate feature representations through a physical property analyzer and an environmental feature extractor composed of multi-layer MLPs, respectively. These two representations are then concatenated and mapped to the base guidance signal by a guidance signal generator. Furthermore, the statistical features are also input to a do-
main importance predictor and a prototype sensitivity predictor to estimate the sample’s dependence weights in the time and frequency domains, as well as its sensitivity to prototype aggregation, respectively. Finally, all guidance signals are output to downstream modules for dynamic adjustment.
5

for extracting physical features and the other for extracting environmental context. Each sub-network processes the statistical feature vector s and outputs latent vectors p and e, representing the physical and environmental characteristics of the signal, respectively. These latent vectors are concatenated and fed into a guidance signal generation network, which generates a guidance vector g that informs the meta-learner and decision module. The guidance vector is generated using the tanh activat-
ion function:
g = tanh(Wg[p; e] + bg) . (2)
where [p; e] is the concatenated vector of physical and environmental features, and Wg and bg are learnable weights and biases. The SGN also produces domain importance weights αt and α f for the time and frequency domains, respectively, which indicate the relative relevance of each domain. These weights are learned through a softmax function over the concatenated feature vector s:
αt, α f = softmax(Wαs + bα) . (3)
In addition, the SGN generates a prototype sensitivity scalar β, which controls how strict or flexible the prototype matching should be. This scalar is learned to adapt based on the characteristics of the input sample. The outputs from the SGN—guidance vector g, domain importance weights αt, α f , and prototype sensitivity β—are passed to the Collaborative Decision module, which uses them to adjust the predictions from the time and frequency domains.
4.4. Collaborative Decision with Query-Aware Attention
The Collaborative Decision module combines the predictions from both the time and frequency domains using query-aware attention. Its specific structure is shown in Figure 4. For each query sample, the module computes a query-specific key vector qc, which is a combination of the query’s guidance vector g and its initial logits from the meta-learner. The query key vector qc is used to compute attention weights for each prototype in the time and frequency domains. Specifically, the attention weight f-
or the k-th prototype of class c in domain d is calculated as:
a(d)
c,k = exp τ sim(qc, c(d)
c,k )
PK(d)
c
k=1 exp τ sim(qc, c(d)
c,k )
. (4)
Where τ is a learned temperature parameter. The attention weights a(d)
c,k reflect how relevant each prototype is to the current query, with higher weights corresponding to prototypes that are more similar to the query. These attention weights are then used to aggregate the prototypes into a representative prototype for class c in domain d:
r(d)
c=
K(d)
Xc
k=1
a(d)
c,k c(d)
c,k . (5)
Guidance signals Time scalar
frequency domain scalar
Query key
Temporal prototype
Frequency domain prototype
Query-Aware aggregation
Query-Aware aggregation
Relationship modeling and fusion decision
Collaborative Decision module
Figure 4: A schematic diagram of the Collaborative Decision module. The timedomain and frequency-domain prototypes are processed through two aggregation branches based on queries. The query consists of a guiding signal and two scalars in the time and frequency domains, which are used to modulate the two branches. The aggregation results from both paths are fed into the relation modeling unit and fused to obtain the final decision.
These representative prototypes r(t)
c and r( f )
c are then passed through a cross-domain relation network, which models the relationship between the two domains. The relation vector vc captures the consistency between the time-domain and frequencydomain representations for class c:
vc = frelation([r(t)
c ; r( f )
c ]) . (6)
The relation vector vc is passed through a decision network that combines it with the domain importance weights αt and α f to produce the final logit for class c:
lfinal
c = αt l(t)
c + α f l( f )
c + h(vc, αt, α f , κt, κ f ) . (7)
Where h(·) is a fully-connected decision network that integrates the information from both domains. This final logit is used to make the prediction for the query sample, completing the decision process.
5. Experiments
All experiments are run on an NVIDIA vGPU-32GB platform with batch size fixed at 32. We evaluate on two real-world cross-deployment datasets, OSDG1 and OSDG2, and organize results into: (i) ablations of each component of our framework; (ii) comparisons with conventional deep models; and (iii) evaluations against meta-learning baselines. We report Accuracy, Precision, Recall, and F1. For meta-learning, we adopt a domain-generalization episodic protocol where support samples are drawn from source de-
ployment(s) (TRAIN) and queries from a held-out target deployment (TEST), with class-balanced query sets. Unless otherwise stated: on OSDG1 we use N=4, K=4, Q=12, 1,000 episodes; on OSDG2 we use N=3, K=3, Q=12, 1,000 episodes; all with
6

seed 222. Episodes are sampled over the class intersection with at least K+Q samples per class. Because queries are classbalanced, aggregated Accuracy equals Macro-Recall for the meta-learning rows. All baselines follow the same construction; gradient-based methods use 10 inner steps with inner LR 0.01 at test time, while metric/closed-form methods perform no innerloop adaptation. None of the methods used target labels; they were purely domain generalizations.
5.1. Comparative Experiment
To evaluate the effectiveness of our proposed DUPLE framework, we conducted comparative experiments on the OSDG1 and OSDG2 datasets and compared it with several traditional deep learning and meta-learning methods. To ensure comprehensive testing of the model’s performance in handling domain generalization problems, in the OSDG1 dataset, we used all data from one distribution as training data and all data from the other distribution as the test dataset, completely isolating them. The same approach -
was taken with OSDG2, using data from both distributions for training and data from the other distribution for testing. Table 3 presents the results of the comparison in terms of four key classification metrics: Accuracy, Precision, Recall, and F1 Score. We include both traditional models (XGBoost, SVM, KNN) as well as deep learning models (1DCNN, 2DCNN, LSTM, Transformer), and meta-learning methods (ProtoNet, MAML, ANIL, R2D2, and FEAT). We first consider the performance of traditional machine le-
arning methods, which include XGBoost, SVM, and KNN. These models rely on hand-crafted features, such as statistical moments and signal transformations like the Short-Time Fourier Transform (STFT), to capture relevant patterns from the raw data.XGBoost and SVM performed relatively poorly, especially on the OSDG1 dataset, with accuracies below 0.2. This highlights the difficulty of learning robust features from unevenly distributed training data with domain generalization problems. KNN outperformed-
 XGBoost and SVM on the OSDG1 dataset, achieving an accuracy of 0.4725. However, its performance on the OSDG2 dataset was slightly inferior to XGBoost and SVM. Among the deep learning methods, 2DCNN achieved the highest Accuracy on both datasets, particularly excelling on OSDG1 with an Accuracy of 0.5914. However, the Recall of 2DCNN on OSDG1 was lower than that of the meta-learning models, with a Recall of 0.6520, indicating that while 2DCNN had a reasonable overall performance, it struggled to c-
apture some of the minority classes effectively.1DCNN and LSTM performed relatively poorly, achieving accuracies of 0.4421 and 0.1524 respectively on the OSDG1 dataset, with even lower recall. These models struggle to cope with domain drift and uneven data distribution, which are crucial for the DFOS task with its variable deployment conditions. In domain generalization tasks, meta-learning methods such as ProtoNet, MAML, ANIL, and R2D2 perform significantly better, especially with limited and une-
venly distributed data. ProtoNet, employing a prototype-based approach, achieves accuracies of 0.4320 and 0.7501 on OSDG1 and OSDG2, respectively, with a precision of 0.8087 on the OSDG2 dataset. While
ProtoNet performs well on OSDG2, its generalization ability on OSDG1 is weaker, possibly because domain shifts cannot be well captured by individual prototypes for each class. Another meta-learning method, MAML, outperforms ProtoNet on the OSDG1 dataset, achieving an accuracy of 0.4817 and significantly improved precision. R2D2 also achieves good results, with accuracies of 0.4758 and 0.7400 on the OSDG1 and OSDG2 datasets, respectively. However, none of these methods can match the performance of -
our proposed framework, DUPLE. Our DUPLE framework outperforms all other methods on both datasets, achieving a state-of-the-art accuracy of 0.6372 on OSDG1 and 0.8195 on OSDG2. DUPLE also boasts the highest F1 scores on both datasets, further demonstrating its robustness in balancing precision and recall in challenging scenarios. In summary, our DUPLE framework not only outperforms conventional deep learning models but also surpasses existing meta-learning methods in terms of Accuracy, Recall, and-
 overall F1 Score. This highlights the advantages of our domaingeneralization approach, which combines dual-domain features, statistical guidance, and adaptive prototype aggregation for robust and efficient DFOS activity recognition across various deployment configurations.
5.2. Ablation Experiment
In the ablation experiments, we used the same scenariobased protocol and hyperparameters as in the main experiments to evaluate the contributions of the three main modules: the Two-Domain Multi-Prototype Learner (FPM), the Statistically Guided Network (SGN), and the Query-Aware Collaborative Decision Making (CDM). All variants used the same data partitioning, sampling rules, and evaluation settings to ensure reproducibility of the ablation experiments. We conducted systematic ablation experiments -
on the FPM, SGN, and CDM modules separately, and the results were consistent across both datasets. First, FPM is the main driver of performance improvement, effectively characterizing intra-class diversity across deployments through its two-domain multi-prototype representation. Adding SGN on top of this provides stable and reproducible small gains because it provides priors on domain importance and prototype sensitivity based on sample statistics, making fusion and matching more robust. Using CDM-
 alone without introducing SGN offers limited improvement, but combining the two creates a query-aware aggregation guided by reliable statistical priors, achieving further marginal benefits on top of FPM. Overall, the complete model achieved double-digit accuracy improvements on both datasets compared to the module-free baseline, with F1 and accuracy improving in tandem: from approximately 0.52 to 0.64 on OSDG1 and from approximately 0.68 to 0.82 on OSDG2. This indicates that our method is not onl-
y more accurate but also more stable, significantly mitigating the domain shift problem caused by deployment differences. In general, the performance patterns on both datasets are consistent. FPM explains most of the performance improvement by using adaptive multi-prototypes in both domains to capture intra-class diversity. SGN provides stable, sample-conditional
7

Table 3: Comparison of Deep Learning and Meta-Learning Methods on OSDG1 and OSDG2 Datasets.
Model OSDG1 OSDG2
Accuracy Precision Recall F1 Accuracy Precision Recall F1
Xgboost(Chen and Guestrin, 2016) 0.1463 0.1201 0.2884 0.1339 0.6440 0.7931 0.6849 0.6433 SVM(Qu et al., 2010) 0.1615 0.0793 0.3213 0.1259 0.6459 0.7915 0.6866 0.6255 KNN(Jia et al., 2019a) 0.4725 0.5043 0.4225 0.3669 0.6384 0.7614 0.6685 0.6165 1DCNN(Wu et al., 2019a) 0.4421 0.2240 0.3986 0.2458 0.6723 0.6316 0.6248 0.6203 2DCNN(Xu et al., 2018) 0.5914 0.6687 0.6520 0.5476 0.6534 0.7828 0.6915 0.6104 LSTM(Sherstinsky, 2020) 0.1524 0.1663 0.3019 0.1759 0.7363 0.6091 0.6551 0.5805 Transformer(Vaswan-
i et al., 2017) 0.1951 0.1997 0.2850 0.1861 0.6459 0.6610 0.6427 0.6224
ProtoNet(Snell et al., 2017) 0.4320 0.2218 0.4320 0.2931 0.7501 0.8087 0.7501 0.7563 MAML(Finn et al., 2017) 0.4817 0.4503 0.4817 0.4358 0.7011 0.7207 0.7011 0.6812 ANIL(Raghu et al., 2019) 0.4262 0.4171 0.4262 0.4020 0.6501 0.6774 0.6501 0.6585 R2D2(Bertinetto et al., 2018) 0.4758 0.4563 0.4758 0.4345 0.7400 0.7323 0.7400 0.7327 FEAT(Ye et al., 2020) 0.4907 0.5143 0.4907 0.4478 0.6786 0.6988 0.6786 0.6526 DUPLE (Ours) 0.6372 0.6347 0.6372 0.6244 0.8195 0.8158 0.8195 0.8167
Table 4: Ablation Study Results on OSDG1
FPM SGN CDM Acc Precision Recall F1
– – – 0.5210 0.5224 0.5210 0.5201 ✓ – – 0.5977 0.6192 0.5977 0.5755 ✓ ✓ – 0.6172 0.6407 0.6172 0.5966 ✓ – ✓ 0.5960 0.6078 0.5960 0.5795 ✓ ✓ ✓ 0.6372 0.6347 0.6372 0.6244
Table 5: Ablation Study Results on OSDG2
FPM SGN CDM Acc Precision Recall F1
– – – 0.6765 0.7211 0.6765 0.6817 ✓ – – 0.7946 0.8064 0.7946 0.7984 ✓ ✓ – 0.7990 0.8097 0.7990 0.8024 ✓ – ✓ 0.7935 0.8046 0.7935 0.7971 ✓ ✓ ✓ 0.8195 0.8158 0.8195 0.8167
gains by adjusting domain dependencies and prototype strictness. CDM itself shows little change, but when combined with SGN, it provides additional, repeatable improvements. This suggests that the focus on class prototypes should be guided by statistical priors for each query, rather than applied unguidedly. In summary, FPM provides the main gain, SGN brings stable performance, CDM has limited effect when used alone but is effective when used in conjunction with SGN. The complete model improves pe-
rformance by about 10 to 15 percentage points on the OSDG1 and OSDG2 datasets compared to the module-free baseline, verifying the key role of statistical prior-guided dual-domain multiprototype plus query-aware aggregation in cross-deployment generalization.
5.3. Comparison Experiments by Category
Per-class accuracy highlights the performance of each method in cross-deployment testing.
On the OSDG1 dataset, the results in Table 6 indicate that many baseline methods suffer from severe class skew. The 2DCNN achieved near-perfect accuracy on the Background, Climb, and Rain classes, but its performance on the Smash class was extremely poor. Conversely, KNN demonstrated high accuracy on the Rain class, achieving 0.9919, but performed poorly on the Background class with an accuracy of only 0.0243, essentially failing to recognize the latter. ProtoNet showed a similar pattern, performi-
ng well on the Rain and Smash classes, with respective accuracies of 0.8419 and 0.8864, but yielded zero accuracy on the other two. This indicates its performance is fragile and class-selective under deployment shifts.
Table 6: Per-Class Accuracy (%) and Mean on OSDG1.
Model Background Climb Rain Smash Mean
XGBoost 0.3783 0.0000 0.0081 0.7674 0.1463 SVM 0.3783 0.0000 0.0000 0.9069 0.1615 KNN 0.0243 0.1621 0.9919 0.5116 0.4725 1D-CNN 0.0000 0.0000 0.5945 0.9999 0.4420 2D-CNN 0.9999 0.9999 0.9999 0.0406 0.5914 LSTM 0.0000 0.6511 0.5405 0.0162 0.1524 Transformer 0.0079 0.2558 0.6486 0.2276 0.1951
ProtoNet 0.0000 0.0000 0.8419 0.8864 0.4320 MAML 0.4458 0.9354 0.5054 0.0400 0.4816 ANIL 0.6258 0.6333 0.3100 0.1358 0.4262 R2D2 0.5681 0.9375 0.3333 0.0641 0.4804 FEAT 0.9341 0.2730 0.1758 0.5800 0.4907 DUPLE (Ours) 0.4208 0.3983 0.9891 0.7408 0.6372
In the Climb test, MAML and R2D2 achieved high accuracy of 0.9354 and 0.9375 respectively, but their accuracy dropped sharply in the Smash test. The DUPLE model avoided catastrophic failures on any single class, achieving the best average accuracy of 0.6372. It maintained a high accuracy of 0.9891 in
8

the Rain test, performed stably in the Smash test with an accuracy of 0.7408, and kept its accuracy within acceptable ranges in both the Background and Climb tests. This pattern suggests that the DUPLE model sacrifices some peak performance on simpler classes in exchange for significant improvements on more complex classes, which is crucial for handling data with domain drift issues.
Table 7: Per-Class Accuracy (%) and Mean on OSDG2.
Model Background Climb Impact Mean
XGBoost 0.3649 0.9999 0.6899 0.6440 SVM 0.2499 0.9999 0.8099 0.6459 KNN 0.2649 0.9007 0.8399 0.6384 1D-CNN 0.7549 0.2595 0.8599 0.6723 2D-CNN 0.9149 0.9847 0.1749 0.6534 LSTM 0.9549 0.0305 0.9799 0.7363 Transformer 0.9199 0.6183 0.3899 0.6459
ProtoNet 0.6770 0.8959 0.6775 0.7501 MAML 0.3120 0.9429 0.8483 0.7011 ANIL 0.8159 0.6301 0.5043 0.6501 R2D2 0.8440 0.8514 0.5247 0.7400 FEAT 0.9641 0.8019 0.2698 0.6786 DUPLE (Ours) 0.7292 0.9861 0.7432 0.8195
On OSDG2. Table 7 shows that the domain gap is narrowing, but similar trends still exist. Some deep models perform well in one class but poorly in another; for example, 2D-CNN performs well in background and Climb tests but poorly in Impact tests; FEAT performs well in background tests but poorly in Impact tests; LSTM is close to the upper limit in Impact tests but has almost zero accuracy in Climb tests. Meta-learners generally perform more evenly; ProtoNet and R2D2 provide reasonable coverage ac-
ross all classes. DUPLE achieves the highest macroaverage accuracy of 0.8195, with Climb accuracy close to the upper limit at 0.9861, and strong performance in background and Impact tests at 0.7292 and 0.7432, respectively. This indicates excellent cross-class robustness rather than over-optimization of a single class. In summary, on both datasets, the primary failure mode of the baseline model was single-class collapse caused by domain shift; accuracy was very high for one or two classes, while a-
ccuracy for other classes dropped to near zero. DUPLE’s dualdomain statistically guided prototyping reduces this disparity, improves accuracy for the worst-case class, and results in a more balanced and robust overall model performance, particularly for domain-shifted data. This is a valuable implementation for cross-deployment identification.
6. Conclusion
We propose DUPLE, a statistically guided dual-domain meta-learning framework designed specifically for event recognition in cross-deployment Distributed Fiber Optic Sensing (DFOS). DUPLE combines multi-prototype learners in the time
and frequency domains with a statistically guided network (SGN) and a collaborative decision module (CDM). This design directly addresses three pain points of DFOS: domain shift due to fiber deployment methods, scarcity of new site labels, and intra-class diversity. The model learns expressive class representations and adjusts decisions during the inference phase without requiring target domain labels. DUPLE achieves stable and state-of-the-art results on two cross-deployment benchmarks, OSDG1 and-
 OSDG2. It not only improves overall accuracy but also precision, recall, and F1 score, and achieves more stable single-class performance compared to traditional classifiers, supervised deep networks, and robust meta-learning baseline models. These improvements stem from three synergistic factors: (i) dual-domain features capable of capturing complementary temporal and spectral cues; (ii) multi-prototype class representations covering heterogeneous patterns across different deployment environments-
; and (iii) query-aware aggregation guided by SGN, ensuring decisionmaking aligns with sample-specific statistics. These components work together to achieve robust generalization under a contextdomain generalization protocol, resulting in more stable and accurate model performance. The limitation of this study lies in practical applications rather than the conceptual level; we focus only on single-event, single-channel scenarios. Extending DUPLE to multi-event recognition and multi-channel fusion -
is a logical next step. Nevertheless, the current results confirm that DUPLE is a powerful and deployment-robust baseline method for DFOS activity recognition.
CRediT Authorship Contribution Statement
Yifan He: Conceptualization, Methodology, Software, Investigation, Data curation, Formal analysis, Visualization, Writing – original draft;HaoDong Zhang: Conceptualization, Methodology, Investigation, Writing – review & editing;Qiuheng Song: Conceptualization, Resources;Lin Lei: Conceptualization, Data curation;Zhenxuan Zeng: Conceptualization, Writing – review & editing;Haoyang He: Investigation, Data curation;Hongyan Wu: Conceptualization, Methodology, Supervision, Writing review & editing.
Declaration of Competing Interest
Author Qiuheng Song is a shareholder of Sichuan Fujinan Technology Co., Ltd., which provided the data used in this study. Sichuan Fujinan Technology Co., Ltd. had no role in the study design, data analysis, interpretation of the results, or the decision to submit the manuscript for publication. The other authors declare that they have no competing financial interests or personal relationships that could have influenced the work reported in this paper.
Acknowledgments
The authors would like to thank Sichuan Fujinan Technology Co., Ltd. for providing the distributed fiber-optic sensing
9

data and for their technical assistance with the experimental deployments.
References
Ajo-Franklin, J.B., Dou, S., Lindsey, N.J., Monga, I., Tracy, C., Robertson, M., Rodriguez Tribaldos, V., Ulrich, C., Freifeld, B., Daley, T., et al., 2019. Distributed acoustic sensing using dark fiber for near-surface characterization and broadband seismic event detection. Scientific reports 9, 1328.
Allen, K., Shelhamer, E., Shin, H., Tenenbaum, J., 2019. Infinite mixture prototypes for few-shot learning, in: International conference on machine learning, PMLR. pp. 232–241.
Bertinetto, L., Henriques, J.F., Torr, P.H., Vedaldi, A., 2018. Meta-learning with differentiable closed-form solvers. arXiv preprint arXiv:1805.08136 .
Chen, T., Guestrin, C., 2016. Xgboost: A scalable tree boosting system, in: Proceedings of the 22nd acm sigkdd international conference on knowledge discovery and data mining, pp. 785794.
Finn, C., Abbeel, P., Levine, S., 2017. Model-agnostic metalearning for fast adaptation of deep networks, in: International conference on machine learning, PMLR. pp. 1126–1135.
Hartog, A.H., 2017. An introduction to distributed optical fibre sensors. CRC press.
He, Z., Liu, Q., 2021. Optical fiber distributed acoustic sensors: A review. Journal of Lightwave Technology 39, 3671–3686.
Jia, H., Liang, S., Lou, S., Sheng, X., 2019a. A k-nearest neighbor algorithm-based near category support vector machine method for event identification of φ-otdr. IEEE Sensors Journal 19, 3683–3689.
Jia, H., Lou, S., Liang, S., Sheng, X., 2019b. Event identification by f-elm model for Φ-OTDR fiber-optic distributed disturbance sensor. IEEE Sensors Journal 20, 1297–1305.
Khaki, S., Wang, L., Archontoulis, S.V., 2020. A cnn-rnn framework for crop yield prediction. Frontiers in Plant Science 10, 1750.
Lim, B., Arık, S.Ö., Loeff, N., Pfister, T., 2021. Temporal fusion transformers for interpretable multi-horizon time series forecasting. International journal of forecasting 37, 17481764.
Lindsey, N.J., Dawe, T.C., Ajo-Franklin, J.B., 2019. Illuminating seafloor faults and ocean dynamics with dark fiber distributed acoustic sensing. Science 366, 1103–1107.
Luong, H.V., Deligiannis, N., Wilhelm, R., Drapp, B., 2023. Few-shot classification with meta-learning for urban infrastructure monitoring using distributed acoustic sensing. Sensors 24, 49.
Madsen, C., Bae, T., Snider, T., 2007. Intruder signature analysis from a phase-sensitive distributed fiber-optic perimeter sensor, in: Fiber Optic Sensors and Applications V, SPIE. pp. 141148.
Medsker, L.R., Jain, L., et al., 2001. Recurrent neural networks. Design and applications 5, 2.
Muñoz, F., Soto, M.A., 2022. Enhancing fibre-optic distributed acoustic sensing capabilities with blind near-field array signal processing. Nature Communications 13, 4019.
Qu, Z., Feng, H., Zeng, Z., Zhuge, J., Jin, S., 2010. A svmbased pipeline leakage detection and pre-warning system. Measurement 43, 513–519.
Raghu, A., Raghu, M., Bengio, S., Vinyals, O., 2019. Rapid learning or feature reuse? towards understanding the effectiveness of maml. arXiv preprint arXiv:1909.09157 .
Rao, Y., Wang, Z., Wu, H., Ran, Z., Han, B., 2021. Recent advances in phase-sensitive optical time domain reflectometry (Φ-OTDR). photonic sensors 11, 1–30.
Sherstinsky, A., 2020. Fundamentals of recurrent neural network (rnn) and long short-term memory (lstm) network. Physica D: Nonlinear Phenomena 404, 132306.
Snell, J., Swersky, K., Zemel, R., 2017. Prototypical networks for few-shot learning. Advances in neural information processing systems 30.
Tejedor, J., Macias-Guarasa, J., Martins, H.F., Martin-Lopez, S., Gonzalez-Herraez, M., 2019. A contextual gmm-hmm smart fiber optic surveillance system for pipeline integrity threat detection. Journal of Lightwave Technology 37, 4514–4522.
Tejedor, J., Macias-Guarasa, J., Martins, H.F., Piote, D., Pastor-Graells, J., Martin-Lopez, S., Corredera, P., GonzalezHerraez, M., 2017. A novel fiber optic based surveillance system for prevention of pipeline integrity threats. Sensors 17, 355.
Titov, A., Kazei, V., AlDawood, A., Alfataierge, E., Bakulin, A., Osypov, K., 2022. Quantification of das vsp quality: Snr vs. log-based metrics. Sensors 22, 1027.
Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A.N., Kaiser, Ł., Polosukhin, I., 2017. Attention is all you need. Advances in neural information processing systems 30.
Vinyals, O., Blundell, C., Lillicrap, T., Wierstra, D., et al., 2016. Matching networks for one shot learning. Advances in neural information processing systems 29.
Wang, J., Yang, Y., Mao, J., Huang, Z., Huang, C., Xu, W., 2016. Cnn-rnn: A unified framework for multi-label image classification, in: Proceedings of the IEEE conference on computer vision and pattern recognition, pp. 2285–2294.
10

Wang, Z., Lu, B., Ye, Q., Cai, H., 2020. Recent progress in distributed fiber acoustic sensing with Φ-OTDR. Sensors 20, 6594.
Wu, H., Chen, J., Liu, X., Xiao, Y., Wang, M., Zheng, Y., Rao, Y., 2019a. One-dimensional cnn-based intelligent recognition of vibrations in pipeline monitoring with das. Journal of Lightwave Technology 37, 4359–4366.
Wu, H., Gan, D., Xu, C., Liu, Y., Liu, X., Song, Y., Rao, Y., 2022. Improved generalization in signal identification with unsupervised spiking neuron networks for fiber-optic distributed acoustic sensor. Journal of Lightwave Technology 40, 30723083.
Wu, H., Liu, X., Xiao, Y., Rao, Y., 2019b. A dynamic time sequence recognition and knowledge mining method based on the hidden markov models (hmms) for pipeline safety monitoring with φ-otdr. Journal of Lightwave Technology 37, 4991–5000.
Wu, H., Zhou, B., Zhu, K., Shang, C., Tam, H.Y., Lu, C., 2021. Pattern recognition in distributed fiber-optic acoustic sensor using an intensity and phase stacked convolutional neural network with data augmentation. Optics express 29, 32693283.
Xu, C., Guan, J., Bao, M., Lu, J., Ye, W., 2017. Pattern recognition based on enhanced multifeature parameters for vibration events in φ-OTDR distributed optical fiber sensing system. Microwave and Optical Technology Letters 59, 3134–3141.
Xu, C., Guan, J., Bao, M., Lu, J., Ye, W., 2018. Pattern recognition based on time-frequency analysis and convolutional neural networks for vibrational events in φ-otdr. Optical Engineering 57, 016103–016103.
Ye, H.J., Hu, H., Zhan, D.C., Sha, F., 2020. Few-shot learning via embedding adaptation with set-to-set functions, in: Proceedings of the IEEE/CVF conference on computer vision and pattern recognition, pp. 8808–8817.
Zhang, H., Gao, J., Hong, B., 2022. φ-otdr signal identification method based on multimodal fusion. Sensors 22, 8795.
Zhong, R., Chiang, C.Y., Jaber, M., De Wilde, R., Hayward, P., 2025. Intelligent travel activity monitoring: Generalized distributed acoustic sensing approaches. arXiv preprint arXiv:2506.10237 .
Zhou, H., Zhang, S., Peng, J., Zhang, S., Li, J., Xiong, H., Zhang, W., 2021. Informer: Beyond efficient transformer for long sequence time-series forecasting, in: Proceedings of the AAAI conference on artificial intelligence, pp. 11106–11115.
11

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:37.287Z
- **Text Length:** 55079 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 11 of 11
