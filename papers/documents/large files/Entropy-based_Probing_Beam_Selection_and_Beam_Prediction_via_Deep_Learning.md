# PDF Document: Meng et al. - 2024 - Entropy-based Probing Beam Selection and Beam Prediction via Deep Learning.pdf

**File Path:** Meng et al. - 2024 - Entropy-based Probing Beam Selection and Beam Prediction via Deep Learning.pdf

**Processed Date:** 2026-02-10T18:17:27.024Z

**File Size:** 1050.74 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2753

**Title:** Entropy-based Probing Beam Selection and Beam Prediction via Deep Learning

**Collection:** Large Files

---

## Extracted Text Content

SUBMITTED TO IEEE TRANSACTIONS ON COMMUNICATIONS 1
Entropy-based Probing Beam Selection and Beam
Prediction via Deep Learning
Fan Meng, Cheng Zhang, Member, IEEE, Yongming Huang, Senior Member, IEEE, Zhilei Zhang, Xiaoyu Bai, Zhaohua Lu
Abstract—Hierarchical beam search in mmWave communications incurs substantial training overhead, necessitating deep learning-enabled beam predictions to effectively leverage channel priors and mitigate this overhead. In this study, we introduce a comprehensive probabilistic model of power distribution in beamspace, and formulate the joint optimization problem of probing beam selection and probabilistic beam prediction as an entropy minimization problem. Then, we propose a greedy scheme to iterativ-
ely and alternately solve this problem, where a transformer-based beam predictor is trained to estimate the conditional power distribution based on the probing beams and user location within each iteration, and the trained predictor selects an unmeasured beam that minimizes the entropy of remaining beams. To further reduce the number of interactions and the computational complexity of the iterative scheme, we propose a two-stage probing beam selection scheme. Firstly, probing beams are selected fr-
om a location-specific codebook designed by an entropy-based criterion, and predictions are made with corresponding feedback. Secondly, the optimal beam is identified using additional probing beams with the highest predicted power values. Simulation results demonstrate the superiority of the proposed schemes compared to hierarchical beam search and beam prediction with uniform probing beams.
Index Terms—mmWave communication, beam prediction, probing beam selection, deep learning, entropy minimization.
I. INTRODUCTION
In B5G/6G wireless communications, millimeter wave (mmWave) communication is emerging as an appealing solution to provide abundant available spectrum to meet the critical demands of exploding data traffic [2]. However, the high path loss of mmWave signals poses a significant challenge to data transmission, resulting in limited coverage area. The small carrier wavelength enables packing a large number of antenna elements into small form factors. Leveraging the
This work was supported in part by the National Key R&D Program of China under Grant 2020YFB1806600 and the National Natural Science Foundation of China under Grant No. 62225107, 62001103 and 62201394, and the Fundamental Research Funds for the Central Universities under Grant 2242022k60002. Part of this work has been submitted for possible presentation at the IEEE International Communications Conference (ICC): Wireless Communications Symposium, Denver, United States, June 2024 [1]. (Corresponding-
 authors: Y. Huang and C. Zhang) F. Meng, Z. Zhang, X. Bai, C. Zhang and Y. Huang are with the Purple Mountain Laboratories, Nanjing 211111, China (email: mengfan@pmlabs.com.cn; zhangzhilei@pmlabs.com.cn; baixiaoyu@pmlabs.com.cn; zhangcheng seu@seu.edu.cn; huangym@seu.edu.cn). C. Zhang and Y. Huang are also with the National Mobile Communications Research Laboratory, School of Information Science and Engineering, Southeast University, Nanjing 210096, China. Z. Lu is with the ZTE Corporation and St-
ate Key Laboratory of Mobile Network and Mobile Multimedia Technology, Shenzhen 518057, China (e-mail: lu.zhaohua@zte.com.cn).
large antenna arrays employed at the transmitter and receiver, mmWave systems perform directional beamforming [3] to overcome the high free-space path loss of mmWave signals and also reduce spatial interference. Nevertheless, the massive antennas bring significant challenges for channel estimation, beam alignment/tracking (BA/T), especially in highly mobile and/or complex environments such as high-speed railway, unmanned aerial vehicle (UAV), urban macro (UMa). Pencil-like beamforming for mmWave s-
cenarios such as UMa is challenging. Environmental factors, i.e., wind flow and precipitation, moving vehicles and pedestrians, can cause drastic variations in received power fluctuation. As the transceiver units of mmWave base stations (BS) are mounted to facilities such as poles, pillars or street lamps, vibration and movement can cause unacceptable outage probability if BA/T is not frequently performed [3]. Meanwhile, link stability is improved with frequent BA/T, but at the cost of high beam t-
raining overheads. Therefore, low-overhead mmWave BA/T while maintaining link stability is essential. Traditional model-driven BA/T including exhaustive and hierarchical beam search [4]–[6], fail to adequately exploit the (partial) channel state information (CSI) prior, resulting in large overheads. Furthermore, the CSI prior is difficult to analytically characterize especially in complex scenarios, thus the model-driven methods inherently are inappropriate for the implicit CSI prior. Deep learnin-
g (DL) [7] has been identified as an enabling technology for future wireless mobile networks [8,9], and it has received extensive attention for precoding [10]–[12], positioning [13,14], CSI compression and reconstruction [15,16], beam management [17]–[21], network optimization [22]. Data-driven or -aided BA/T is a promising technique that automatically learns and exploits the underlying correlations of CSI across different times, frequencies, spaces or other out-of-band information [23,24], to red-
uce CSI acquisition overhead and improve system spectral efficiency and robustness.
A. Related Work
Conventional BA/T is measurement-based, the transmit/receive beam is an element within the measured beam set, e.g., the beam with maximal received power is selected in a single-user link-level system. Predictive BA/T, on the other hand, derives the maximum received power or RSRP in the entire beamspace with few or no measurements. The main difference is that the selected beam is not necessarily measured in the beam prediction, but can be inferred from
arXiv:2401.01609v1 [cs.IT] 3 Jan 2024

SUBMITTED TO IEEE TRANSACTIONS ON COMMUNICATIONS 2
measured beams at different times, frequencies and spaces. In some special scenarios, even instantaneous measurement is not required and the beam prediction is performed only with outof-band information such as location, motion and orientation of the mobile user (MU) [19,20,25].
Considering the time correlation, some studies establish the dynamics of the mmWave channel to realize beam prediction [26]–[28]. The studies in [26] propose a two-level probabilistic beam prediction. On a long-time scale, a variational auto-encoder uses noisy beam-training feedback to learn a probabilistic model of beam dynamics and enable predictive beam-tracking; on a short-time scale, an adaptive beam-training procedure is formulated as a partially observable Markov decision process and solved-
 by reinforcement learning. In [27], the neural ordinary differential equation is exploited to predict the arbitrary-instant optimal beam between the current and next beam training instants.
Due to the same physical environment, channels in low and high carrier frequencies are correlated. To reap this benefit, many studies learn to predict the mmWave channel with full sub-6 GHz channel and limited low-overhead measurement of the mmWave channel [29]–[31]. In [30], a dual-input neural network (NN) architecture is designed to merge the sub-6 GHz channel and the mmWave channel of a few active antennas. In addition, an antenna selection method is introduced to better match the mmWave chann-
el instead of a uniform pilot design. Moreover, the work in [29] considers blockage prediction which is important to proactively improve the link reliability.
Location-awareness is becoming a fundamental feature to support various mobile applications, and the radio access network is a promising infrastructure to efficiently and intelligently utilize wireless resources by integrating sensing and communication [32]–[34]. Therefore, recent studies estimate or directly use the MU location or geometric environment between transceivers as side information for beam prediction [25,35]–[38]. The Gaussian process (GP) is a probabilistic machine learning model tha-
t performs inference with uncertainties, and it has been well-applied in small-sample low-dimensional beam prediction [25,37]–[39]. In mmWave fixed wireless access, researchers develop an explicit mapping between transmit/receive beams and MU physical coordinates via a GP [37]. Similarly in the mmWave UAV network, GPenabled beam management scheme utilizing angular domain information is proposed [25,38] to rapidly establish and reliably maintain the communication links. Small-sample learning is pro-
mising for real-time online adaption, but it inherently lacks the ability to exact complex priors from plenty of data. Moreover, GP training involves matrix inversion, making it difficult for large-sample high-dimensional problems where DL tools are better options [35,36,40,41]. As a large amount of training data is presented, offline learning and online inference with DL is well-investigated. In [35], a mapping from the user location to the beam pairs (fingerprints) is realized by a deep neural n-
etwork (NN), with labeled data collected in different locations. Meanwhile, single spatial information is insufficient to accurately infer the reference signal receive power (RSRP) of narrow beams, and low-overhead probing is necessary [42].
B. Motivation and Contribution
Considering a mmWave system with massive antenna arrays, we investigate the location-aware probing beam selection and the probabilistic beam prediction problems. In general, we use the multivariate Gaussian model to approximate the distribution of RSRP in beamspace, and a beam predictor is to estimate the RSRP distribution with MU location. Given the learned beam predictor, the probing beam selection is to minimize the conditional entropy of the unmeasured beams, by selecting the training beam com-
bination which is a subset of the discrete Fourier transform (DFT) codebook. The involved technical difficulties are as follows.
• Prediction Model. The beamspace of RSRP with massive antennas is high-dimensional and the underlying channel prior is implicit and complex. Thus, model-driven or shallow data-driven schemes such as GP cannot work well. On the other hand, DL has the merit of efficiently extracting the channel prior, but the existing literature rarely considers probabilistic inference. • Uncertainty Evaluation. Global uncertainty can be evaluated by entropy, but this is incompatible with beamforming which usually -
concerns only with the optimal beam with maximum RSRP. Meanwhile, the optimal beam can be in any direction, and local uncertainty cannot address this issue. Apparently, there is a trade-off between global and local uncertainty in the probing beam selection.
• Computational Complexity. The probing beam selection is a combinatorial optimization problem requiring exhaustive search, which has extremely high computational complexity in high-dimensional beamspace and is infeasible for practical use. Furthermore, each search consumes one beam prediction involving matrix inversion, which exacerbates this issue.
To address these difficulties, first to realize probabilistic inference, we propose a DL-based beam predictor which is trained by the maximum likelihood (ML) criterion, to estimate the conditional RSRP distribution with the MU location and probing beams. Second, to achieve a trade-off between global and local uncertainty, we mask the entropy with a weight matrix, which is designed by the predicted RSRP values. Third, to reduce the computational complexity, we design a greedy solution to iterativel-
y solve the probing beam selection problem. Furthermore, to reduce the number of interactions and the computational complexity of the iterative solution, we propose a two-stage probing beam selection scheme. The twolevel scheme is feasible for practical implementation, which has only two interactions and one beam prediction operation. Our technical contributions are summarized as follows.
• We establish a generic probabilistic model of the RSRP in beamspace, and formulate the joint probing beam selection and probabilistic beam prediction as an entropy minimization problem. To obtain a tradeoff between the overall entropy and the local entropy w.r.t. large-power beams, we extend the problem as a weighted entropy minimization with a tunable diagonal matrix. • We propose a greedy scheme, i.e., Iter-BP&PBS, to iteratively solve the weighted entropy minimization prob

SUBMITTED TO IEEE TRANSACTIONS ON COMMUNICATIONS 3
lem, to reduce the computational complexity. During an iteration, a beam predictor is trained to estimate the conditional RSRP distribution with the probing beams and the MU location. The learned predictor then selects an unmeasured beam to minimize the weighted entropy of the remaining unmeasured beams. • We propose a two-stage probing beam selection scheme, i.e., 2S-BP&PBS, to further reduce the number of interactions and the computational complexity of Iter-BP&PBS. Firstly, the BS selects probi-
ng beams in a locationspecific codebook by the MU location, and roughly locates the optimal beam by the prediction with the RSRP feedbacks. Secondly, the BS probes several beams with top-predicted RSRP values to find the optimal beam. • We design a scalable beam predictor composed of a mean network and a variance network, using the transformer as the backbone. We design an ML-based cost function to realize probabilistic inference, and simplify the variance network output as a diagonal covariance m-
atrix, to further reduce computational complexity and achieve numerical stability. • Simulation results for an urban scenario demonstrate the superior performance of the proposed schemes compared to the existing hierarchical beam search and beam prediction with uniform probing beams. In addition, the two-stage scheme has low computational, storage and interaction requirements, which is important for real-time deployment.
The rest of this paper is organized as follows. The system model and problem formulation are described in Section II. The iterative algorithm for probing beam selection and beam prediction is clarified in Section III, and the two-stage probing beam selection is introduced in Section IV. Furthermore, the design of the transformer-based beam predictor is given in Section V. The numerical results are shown in Section VI, and the conclusions are drawn in Section VII. Notations: We use lowercase (upper-
case) boldface A(a) to denote the matrix (vector), and a is a scalar. Calligraphy letter A represents the set. Superscripts (·)T represents the transpose. det, diag, | · |, ∥ · ∥2, ⊗ respectively denote determinant, diagonal, absolute, l2 norm, and Kronecker product operators. E{·}, R and C respectively represent the expectation, the real and complex fields.
II. SYSTEM MODEL AND PROBLEM FORMULATION
A. System Model
We consider a link-level mmWave massive multiple-input single-output (MISO) communication system composed of one BS and one MU. The BS is equipped with a massive planer antenna array with N antennas connected to one radio frequency (RF) chain, and the MU is equipped with one isotropic antenna. The scenarios can be readily expanded to cellular or cell-free networks with multiple BSs and MUs, where the beam training is executed through time or frequency division.
1) Channel Model: Without loss of generality, the wireless mmWave propagation is characterized by multi-path propagation due to interactions (reflections, diffractions, penetrations, scattering) at stationary obstacles (hills, buildings, towers) and mobile objects (cars, pedestrians). According to the 3GPP channel modeling [43], the downlink mmWave channel h ∈ CN×1 is modeled as a combination of line-of-sight (LoS) and non-LoS (NLoS) channels, i.e.,
h = hLoS + hNLoS. (1)
The LoS channel hLoS has only a dominant path, the NLoS hNLoS is consisting of Ncl dominant clusters, and each cluster is composed of Nray rays. Thus, the narrow-band channel vectors in the antenna domain respectively are described as
hLoS = αLoSψ(φLoS, θLoS), (2)
hNLoS =
Ncl X
m=1
Nray X
n=1
αm,nψ(φm,n, θm,n), (3)
where α is a complex channel gain, φ and θ respectively are the angles of departure in horizontal and vertical directions, ψ is the planer array response at the BS which is given as follows
ψ(φ, θ) = axy(φ, θ) ⊗ az(θ), (4)
where
axy(φ, θ) = 1
pNφ
[1, eȷπ sin φ sin θ, · · · , eȷπ(Nφ−1) sin φ sin θ]T,
(5)
az(θ) = √1Nθ
[1, eȷπ cos θ, · · · , eȷπ(Nθ−1) cos θ]T, (6)
where Nφ and Nθ respectively are the numbers of antennas in the horizontal and vertical dimensions, and N = NφNθ. The rays in cluster m are closely distributed around the center of this cluster in angles {φm, θm}. Particularly, αLoS = 0 indicates the LoS path is blocked.
2) Data Model: The term ‘data model’ refers to the modeling and formulation of available data, specifically designed for training and evaluation purposes.
The BS exhaustively sweeps the beams in the DFT codebook A ∈ CN×N , and the observed RSRP at the MU side is represented as
x = |Ah + nx|2, (7)
where nx ∈ CN×1 is the measurement noise following N (0, σx2IN ) where σx2 is the noise variance. The relative position of the MU w.r.t. the BS is
s = sr − st + ns, (8)
where st ∈ R2×1 and sr ∈ R2×1 respectively are 2D locations of the BS and the MU, ns denotes the positioning error following N (0, σs2I2).
Measurement-based BA/T typically consumes large beam training overhead to align the optimal beam. Using the potential mapping from the side information to the RSRP, can significantly reduce the overhead. In this work, we propose to realize BA/T with a small number of probing beams and

SUBMITTED TO IEEE TRANSACTIONS ON COMMUNICATIONS 4
the MU location, thus the design of probing beams is crucial. Concretely, given the relative MU location s and the maximal number of probing beams L, the BS sends L probing beams in A and receives the counterpart MU feedbacks, then predicts the RSRPs of other beams in A.
B. Problem Formulation
In this subsection, we formally articulate the problems of beam prediction and probing beam selection. The RSRP x follows an unknown multi-parameter distribution Pr(x). For the convenience of analysis and implementation of learning methods, we assume that x approximately follows the multivariate Gaussian distribution, i.e.,
N (x; μ, Σ) = 1
pdet(2πΣ) exp − 1
2 (x − μ)Σ−1(x − μ)T ,
(9) where μ and Σ respectively are the mean vector and covariance matrix of x, and they are regarded as a function w.r.t. the side information s. Given s, the beam prediction problem is to estimate the distribution of x, which is modeled as a ML estimation, i.e.,
max
Θf ,Θg
Ex,s
n
ln N (x; μ, Σ)
o
, (10)
where
μ = f (s; Θf ), (11)
Σ = g(s; Θg), (12)
where f and g respectively are the functions of the mean network and the variance network, Θf and Θg are the corresponding learnable parameters. Evidently, mean square error (MSE) minimization-based beam prediction w.r.t. x is a special case of (10) with the simpler setting Σ = IN . We define a set of measured beam indices Q ⊆ {1, · · · , N }, and a set of un-measured beam indices P ⊆ {1, · · · , N }. Given the number of measured beams |Q| ≤ L, and we have P
S Q = {1, · · · , N } and P T Q = ∅. Equivalently, {xi|i ∈ Q} and {xi|i ∈ P} respectively can be vectorized as xQ and xP . We re-arrange the order of x to get x = [xT
P , xT
Q]T, thus the counterpart mean and covariance respectively are μ = [μT
P , μT
Q]T and
Σ = ΣPP ΣPQ
ΣQP ΣQQ
,
where xP ∼ N (μP , ΣPP ) and xQ ∼ N (μQ, ΣQQ). Given measured beams xQ, the distribution of the un-measured beams xP is a conditional multivariate Gaussian variable [44] following N (xP ; μP|Q, ΣP|Q) where
μP|Q = μP + ΣPQΣ−1
QQ(xQ − μQ), (13)
ΣP|Q = ΣPP − ΣPQΣ−1
QQΣQP . (14)
Based on the learned statistics μ, Σ in (11) and (12), the conditional distribution N (xP ; μP|Q, ΣP|Q) has a closedform expression based on (13) and (14). The target of probing beam selection is to minimize the uncertainty of the unmeasured beams xP , by finding a com
bination of measured beams xQ. The conditional entropy of xP , i.e.,
H(xP ) = 1
2 ln(2πe det ΣP|Q), (15)
can perform as an uncertainty measure of xP . The entropy H(xP ) is monotonous w.r.t. det ΣP|Q. Given the maximal number of probing beams L, the estimate statistics μ and Σ, the subsequent probing beam selection problem considers the minimization of conditional entropy H(xP ) w.r.t. the set of measured beam indices Q. This problem can be equivalently written as a combinatorial optimization problem as follows
mQin det ΣP|Q
s.t. |Q| ≤ L.
(16)
III. ITERATIVE BEAM PREDICTION AND PROBING BEAM
SELECTION
In Section II-B we have generally formulated the beam prediction and probing beam selection problems, and we will discuss the counterpart solutions below.
A. Weighted Entropy Minimization
In practice, most BA/T only considers the beams with high or maximum RSRP values, so we propose to rewrite problem (16) as
mQin det(∆
1 2
P |Q ΣP |Q ∆
1 2
P |Q )
s.t. |Q| = L,
(17)
where the diagonal matrix ∆P|Q performs as a mask with its diagonal element indicating the weight. The minimum of (16) is only obtained with |Q| = L, and (16) is a special case of (17) with ∆P|Q = IN−|Q|. We propose a mask function h w.r.t. the corresponding conditional mean, i.e.,
∆P|Q = h(μP|Q). (18)
When the mask is designed as [∆P|Q]i∗i∗ = 1 and [∆P|Q]jj = 0, ∀j ̸= i∗ for i∗ = arg max μP|Q, it indicates that only the beam with the maximum mean of RSRP is considered. In this work, we propose a heuristic mask design as
h(a) = sigmoid (β(a − max a + α)) , (19)
where a is an input vector with element scalar a, sigmoid(a) =
1
1+exp(−a) , α and β respectively are defined as the threshold and fairness coefficients.
B. Iterative Beam Prediction and Probing Beam Selection
In this part, we give an iterative beam prediction and probing beam selection algorithm to solve the problems (10) and (16). The primitive beam prediction problem (10) and the combinatorial optimization problem (16) are intractable, especially when the beam space N is large. First, the estimation of the covariance matrix Σ is difficult, requiring a large amount of offline data and having a high computational complexity O(N 3). Besides, learning to generate a covariance matrix involves the matrix i-
nversion operation in (9), which easily

SUBMITTED TO IEEE TRANSACTIONS ON COMMUNICATIONS 5
causes numerical stability issues in engineering. Second, to obtain the optimal solution of the combinatorial optimization problem (16), the computational complexity of the exhaustive search is O(C|Q|
N (N − |Q|)3), which causes a prohibitive overhead.
To address these issues and obtain a low-complexity feasible alternation, one way is to reduce the covariance matrix Σ to be a diagonal matrix Λ, and the subsequent problem (16) is simplified to a trivial question where the optimal combination is a subset of the first L indices with top diagonal values in Λ. However, this reduction completely ignores the correlations across beams, resulting in non-negligible performance degradation.
To achieve a better tradeoff between performance and computational complexity, we propose to alternatively and iteratively address the problems (10) and (16) in a greedy manner. The number of iterations is equal to L. The covariance matrix Σ is simplified to a diagonal matrix Λ. During each iteration, we learn and estimate ΛP|Q using an iterationspecific variance network, instead of the closed-form solutions in (13) and (14). Subsequently, we select only one probing beam by ΛP|Q. Although the cond-
itional variance ΛP|Q can be deducted with Λ, the estimation of Λ is coarse and thus the estimation error will propagate with the deduction. The proposed retraining of the variance network can reduce the error propagation issue. Specifically, in the l-th iteration, the beam prediction problem (10) is rewritten as
max
Θl
f ,Θlg
Ex,s,ql
n
ln N (xPl ; μPl|Ql , ΛPl|Ql )
o
, (20)
where
μPl|Ql = f (xPl|Ql , Ql, s; Θl
f ), (21)
ΛPl|Ql = g(Ql, s; Θl
g), (22)
and Pl = Pl−1,∗\{ql}, Ql = Ql−1,∗ S{ql}, ∀q ∈ Pl−1,∗ with ql being the candidate probing beam index for selection in this round, Pl−1,∗ and Ql−1,∗ respectively are the set of candidate probing beam indices and the set of probing beam indices in the previous round. In the initial round, P0,∗ = {1, · · · , N }, Q0,∗ = ∅. Then, the combinatorial optimization problem (16) is simplified as a one-dimensional search problem as
min
ql∈Pl−1 det ΛPl|Ql . (23)
We denote the computational complexity of one inference of the variance network as O(ω). Then, the computational complexity of (23) is O(ω(N −l +1)), and the total computational complexity of the greedy algorithm is O(ω L(2N−L+1)
2 ). In the l-th round, the selected probing beam index is represented as ql,∗, Ql,∗ = Ql−1,∗ S{ql,∗}, and Pl,∗ = {1, · · · , N }\Ql,∗.
Considering the iterative solution with masking, the problem (23) is reformulated as
min
ql∈Pl−1 det(∆Pl|Ql ΛPl|Ql ), (24)
where ∆Pl|Ql is the weight derived by (18) with μPl|Ql .
The offline collected training data is defined as D =
Algorithm 1: Iterative beam prediction and probing beam selection (offline training).
Input: Dataset D, maximal number of probing beams L.
Output: Learned networks {f l,∗, gl,∗}L
l=1.
1 Initialize the set of candidate probing beam indices P0,∗ = {1, · · · , N }, the set of probing beam indices Q0,∗ = ∅.
2 for l = 1 to L do
3 Choose ∀ql ∈ Pl−1,∗ randomly, and obtain Pl = Pl−1,∗\{ql}, Ql = Ql−1,∗ S{ql}.
4 Train the mean network f and the variance network g by (20) with Pl, Ql. 5 Select the probing beam index ql,∗ by (24) with learned f l,∗ and gl,∗. 6 Update Pl,∗ ← Pl−1,∗\{ql,∗} and
Ql,∗ ← Ql−1,∗ S{ql,∗}.
7 end
Algorithm 2: Iter-BP&PBS: beam selection for data transmission (online inference). Input: Relative MU location s, maximal number of probing beams L. Output: Beam for data transmission ˆi∗.
1 Initialize P0,∗ = {1, · · · , N }, Q0,∗ = ∅, reload the learned mean and variance networks {f l,∗, gl,∗}L
l=1.
2 for l = 1 to L do
3 BS searches the optimal probing beam index ql,∗ by (24) with learned f l,∗ and gl,∗, and transmits the selected beam. 4 MU reports the counterpart RSRP xql,∗ to the BS. 5 BS updates Pl,∗ ← Pl−1,∗\{ql,∗} and
Ql,∗ ← Ql−1,∗ S{ql,∗}.
6 end
7 BS estimates the RSRP with the mean network f L,∗, and select the one with maximal predicted RSRP, i.e., ˆi∗.
{xj , sj }Ns
j=1 where Ns is the number of samples. The parameter sets Θf and Θg are iteratively updated by mini-batch gradient descent (MBGD) until convergence. Fig. 2(a) shows an illustrative ML prediction of RSRP. In summary, at the offline training stage, the iterative beam prediction and probing beam selection are given in Algorithm 1, and the counterpart online inference is named as Iter-BP&PBS and described in Algorithm 2.
IV. TWO-STAGE PROBING BEAM SELECTION
In Section III, we have proposed an iterative probing beam selection and beam prediction algorithm, and we present a twostage probing beam selection with much fewer information interactions in this section. As shown in Fig. 1(a), the proposed Iter-BP&PBS sequentially determines the training beams with RSRP feedback, is similar to the binary search with log2(N ) interactions. The

SUBMITTED TO IEEE TRANSACTIONS ON COMMUNICATIONS 6
transmit beam
receive RSRP
transmit beam
receive RSRP
time
times
stage 1
stage L
(a) Iter-BP&PBS requires L information interactions. In the l-th round, the BS selects and transmits the probing beam ql by the measured beams xQl−1 , then receives the counterpart RSRP report
xql and updates the measured beams as xQl .
transmit beams
receive RSRPs
transmit beams
receive RSRPs
time
2 times
stage 1
stage 2
(b) 2S-BP&PBS requires 2 information interactions. At the first stage, the BS selects L1 probing beams by the MU location, and receives the feedbacks xQL1 . At the second stage, the BS selects
L2 probing beams by xQL1 , and receives the feedbacks xQL2 .
Fig. 1. Plots of information interactions between the BS and the MU.
difference mainly is in the selection of the probing beams, where our proposed scheme decides by an entropy-based criterion, and the latter decides by binary comparison of RSRP values. Iter-BP&PBS is still difficult to implement in practice for the following reasons.
• Interaction latency. In each iteration, the mask in (24) is updated by the RSRP feedback. Hence, the number of interactions between the BS and the MU is L, and the latency linearly grows with the number of interactions. • Computational complexity. In the l-th iteration, the computational complexity is O(ω(N − l + 1)), so
the total computational complexity of L iterations is
O(ω L(2N−L+1)
2 ).
Therefore, the significant interaction latency and computational complexity of Iter-BP&PBS maybe be unacceptable for a real-time system. To address these issues, it is beneficial to design a locationaware probing codebook which is offline designed and online executed, and does not rely on the instantaneous feedback. As shown in Fig. 1(b), we propose a two-stage beam prediction and probing beam selection, i.e., 2S-BP&PBS. Compared to Iter-BP&PBS, the main revision is:
• In Iter-BP&PBS, the mask (18) is both location- and measurement-specific; but in 2S-BP&PBS, the mask is only location-specific by approximating the input μP|Q ≈ f (s).
This means that all probing beams can be fully determined by a location-aware codebook. However, without instantaneous measurement, the location-aware mask is not precise enough to guide the probing beam selection. Thus, we propose a twostage probing method, where L1 < L beams are measured at the first stage, the BS receives the feedbacks and subsequently decides on L2(L = L1 + L2) probing beams in the second
stage. Moreover, the feedbacks of the L1 beams experimentally are able to coarsely locate the strongest channel cluster. To further reduce the search complexity of the training beams in the second stage, we propose to select the top-L2 beams w.r.t. the predicted RSRP for probing instead of the entropybased beam selection. Fig. 2(b) shows an illustrative ML prediction of RSRP. In the following, we will respectively introduce the two-stage probing beam selection, i.e., codebook- and prediction-based-
 beam probings.
A. Codebook-based Beam Probing
Codebook-based beam probing uses a location-specific codebook to generate probing beams. As shown in Fig. 3, the area covered by the BS is assumed to be a rectangle, and is evenly divided into Nx × Ny square grids. The grid i, j stores a codeword including a probing beam set Qi,j and a counterpart location si,j, where i, j respectively are the indices of x-y coordinate. Regarding the l-th element in Qi,j, i.e., ql
i,j, is obtained by (24), where μP|Q to compute ∆Pl|Ql in (18) is approximated by f (si,j)1. Thus, the probing codebook design is still entropy-based, and the corresponding procedure is summarized in Algorithm 3. During online inference, we propose to select the probing beams in C with the closest corresponding distance d(s, si,j), ∀i, j where d is a distance function. Formally, considering the Euclidean distance as d, the selected probing beams are given by
QL1,∗ = Qi,j |i=i∗,j=j∗ where
i∗, j∗ = arg mjin ∥s − si,j∥2
2, 1 ≤ i ≤ Nx, 1 ≤ j ≤ Ny. (25)
The codebook C is represented in the form of a binary tree, and the computational complexity of (25) is O(log2 NxNy) with binary search.
B. Prediction-based Beam Probing
Using the RSRP feedbacks of the codebook-based probing beams, prediction-based beam probing generates the second probing beams with top-L2 predicted RSRPs. In the first stage, the BS transmits the probing beams with indices QL1,∗ and receives the corresponding RSRPs xQL1,∗ , predicts the RSRP μPL1,∗|QL1,∗ with the mean network f L1,∗. Using the RSRPs xQL1,∗ , accurate estimation of the optimal beam poses a challenge for the predictor. However, the predictor is still capable to roughly locate the o-
ptimal beam. Hence, we directly select the top-L2 beams from the predicted RSRP μPL1,∗|QL1,∗ as the second probing beams, i.e., QL2,∗. The MU then reports the counterpart RSRPs xQL2,∗ to the BS. The BS replaces the corresponding prediction result with the measurement xQL2,∗ , and selects the beam with the maximum
RSRP for data transmission, i.e., ˆi∗. In summary, the procedure of the 2S-BP&PBS is clarified as follows. In the first interaction, the BS is aware of the MU location, selects L1 beams from the codebook C for probing,
1Noting that ΛPl|Ql in (24) remains unchanged.

SUBMITTED TO IEEE TRANSACTIONS ON COMMUNICATIONS 7
0
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
76543210
RSRP heatmap (ground truth)
0.80
0.85
0.90
0.95
1.00
0
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
76543210
RSRP heatmap (predict)
0.80
0.85
0.90
0.95
1.00
0
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
76543210
variance heatmap
2.5
5.0
7.5
10.0
0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
76543210
selected probing beams
(a) Iter-BP&PBS (L = 8). The probing beams are depicted in black squares.
0
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
76543210
0.80
0.85
0.90
0.95
1.00
0
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
76543210
0.80
0.85
0.90
0.95
1.00
0
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
76543210
5
10
15
0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
76543210
(b) 2S-BP&PBS (L1 = 3, L2 = 5). The probing beams at the first and second stages respectively are labeled in black and grey squares.
Fig. 2. Plots of selected probing beams and prediction results, where the x and y axes respectively are the numbers of antennas in the horizontal and vertical dimensions. The optimal beams are marked with red circles. The first sub-figure is the ground-truth of RSRP. The second and third sub-figures respectively are the mean and the corresponding variance estimates of the RSRP. The fourth sub-figure is the selected probing beams.
probing beams
+
relative MU location
selected
Fig. 3. The 2D location-specific probing codebook C for probing is composed of Nx × Ny grids. Each grid stores a codeword including a probing beam set and a counterpart relative MU location. Given the location, the probing beams are selected by binary searching.
and receives the RSRP feedbacks from the MU. In the second interaction, the BS predicts the RSRP in beamspace with the MU location and the RSRP feedbacks, selects the top-L2 beams as the probing beams to re-measure the RSRP, and decides the beam for data transmission with the measurement. The proposed 2S-BP&PBS only has twice interactions and a computational complexity O(ω + log2 NxNy) ≈ O(ω), and the corresponding online inference is given in Algorithm 4.
V. DEEP LEARNING-ENABLED BEAM PREDICTOR
In Section III-B, we have generally proposed the DLenabled mean and variance networks, i.e., f and g, and we will present the details in this section. To achieve formidable learning capabilities, we design f and g with the transformer [45] which is a transduction model that relies on self-attention to compute representations of its input and output. As shown in Fig. 4, both the networks are composed of three sequential blocks, i.e., an embedding layer, a transformer, and an output layer. In this w-
ork, we focus on the designs of the embedding and the output layers, while the
Algorithm 3: Probing codebook design.
Input: Dataset D, number of first probing beams L1. Output: Probing codebook C = {{Qi,j, si,j}Nx
i=1}Ny
j=1.
1 Initialize P0,∗ = {1, · · · , N }, Q0,∗ = ∅, number of iterations L, location-specific codebook C = {{Qi,j , si,j }Nx
i=1}Ny
j=1 where Qi,j = ∅, ∀i, j. 2 Train the mean network f only with MU location. 3 for l = 1 to L1 do
4 Choose ∀ql ∈ Pl−1,∗ randomly, and obtain Pl = Pl−1,∗\{ql}, Ql = Ql−1,∗ S{ql}.
5 Train the mean network f l and the variance network gl by (20) with Pl, Ql. Output: Learned networks f l,∗ and gl,∗. 6 Select the probing beam index ql,∗ by (24) with learned f l,∗ and gl,∗. 7 Update Pl,∗ ← Pl−1,∗\{ql,∗} and
Ql,∗ ← Ql−1,∗ S{ql,∗}.
8 for i = 1 to Nx do 9 for j = 1 to Ny do
10 Select the probing beam index ql,∗
i,j by (24) with learned f l,∗ and gl,∗, where μP|Q in (18) is approximated by f (si,j). 11 Update Qi,j ← Qi,j
S{ql,∗
i,j }.
12 end 13 end 14 end
transformer is quite mature in the literature, so we directly use it as the backbone.
A. Embedding and Output Layers
In Section III-B, the dimension of the input xQ ∈ R|Q|×1 is a variable w.r.t. the number of measured beams |Q|. To design a network scalable to |Q|, we propose to equivalently transform xQ into x′
Q ∈ RN×2 where the i-th row vector x′
i

SUBMITTED TO IEEE TRANSACTIONS ON COMMUNICATIONS 8
Embbeding Layer
Transformer:
Self-Attention×2
Mean Network
Output Layer
Variance Network
measured beam RSRPs
relative UE location
measured beam indices
mean vector diagonal variance matrix
Attention
LN
LN
EFB
SelfAttention
Input
Output
Input Shape
Output Shape
Embbeding Layer
Transformer:
Self-Attention×2
Output Layer
Fig. 4. An illustration of the mean and variance networks (left) and a transformer (right).
Algorithm 4: 2S-BP&PBS: two-level probing beam selection (online inference). Input: Relative MU location sˆ, numbers of first and second probing beams L1, L2. Output: Beam for data transmission ˆi∗.
1 Reload the mean network f L1,∗, probing codebook C. 2 Stage 1
3 BS searches the nearest probing beams QL1,∗ in C with s by (25), and transmits the beams. 4 MU reports the counterpart RSRPs xQL1,∗ to the
BS.
5 BS estimates the RSRP μPL1,∗|QL1,∗ with the mean network f L1,∗. 6 Stage 2
7 BS selects the top-L2 beams by the predicted RSRP μPL1,∗|QL1,∗ as the second probing beams, i.e., QL2,∗ 8 MU reports the counterpart RSRPs xQL2,∗ to the
BS.
9 BS replaces the corresponding prediction result with the measurement xQL2,∗ , and selects the beam with maximal RSRP as the beam for data transmission, i.e., ˆi∗.
is
x′
i=
(
[xq, 1], i ∈ Q,
[0, 0], otherwise, (26)
where the first element is the RSRP value, and the second element indicates whether the corresponding beam is selected or not, to distinguish the measured and unmeasured beams both having zero RSRP values. Then, x′
Q is projected as
x′′
Q ∈ RN×16, with a one-dimensional convolution operator2 and the RELU function, i.e.,  ̃a = max(0, a). The relative MU location s is linearly projected as s′ ∈ RN×1. Additionally, a
2In this work, we only use a kernel size of 1, to make the input and output dimensions be equal, and also increase or decrease the data channel.
bias cls ∈ RN×1, i.e., the class token in [45], is introduced.
x′′
Q, s′ and cls are concatenated as an input in RN×18 for the cascaded transformer. The above embedding for the mean network f is also applicable for the variance network g. The only difference is that the map g in (22) is conducted without measured RSRPs, so the first column of x′
Q are all zero. The output of the transformer, i.e., the input for the output layer, is in the space RN×18, and the counterpart output is in the space RN×1, with a one-dimensional convolution and a RELU.
B. Transformer
As shown in Fig. 4, the proposed transformer g is a stack of different operations, layers and modules. The layer normalization (LN) operation is used to speed up training by normalizing the data into a standard normal distribution. In an expansion forward block (EFB), the input is linearly projected into an expanded space, after an activation layer, the expanded vector is projected back into the primary space. Residual connection is used to solve the training loss degradation problem in very deep -
networks by introducing an identity map. In Fig. 4, the residual connection operations are denoted by L. The core module in a transformer is self-attention, which is an attention mechanism that relates different positions of a single sequence to compute a representation of the sequence. An attention function can be described as mapping a query and a set of key-value pairs to an output, where the query, keys, values, and output are all vectors. The output is computed as a weighted sum of the values-
, where the weight assigned to each value is computed by a compatibility function of the query with the corresponding key. Given the input matrix A ∈
RM×M ̃ , the key, query and value vectors are
Q = WqA, (27a)
K = WkA, (27b)
V = WvA, (27c)

SUBMITTED TO IEEE TRANSACTIONS ON COMMUNICATIONS 9
where superscript ( ̃·) denotes the output marker, Wq, Wk, Wv respectively are the corresponding trainable linear transformation matrices, Wq and Wk both are in RNd×M where Nd is the feature dimension of the key matrix, and Wv ∈ RM×M . The result of the scaled dot-product attention is
A ̃ = Vsoftmax KTQ
√Nd
, (28)
where softmax:a ̃ = exp(a)
P
j exp(aj) . Since the variance of the inner product of K and Q increases with increasing embedding size,
the result of the product is scaled by √Nd.
VI. SIMULATIONS
A. Configuration
To evaluate the performance of the proposed location-aware beam probing and prediction, which requires spatial consistency, the mmWave channel is established as a map-based hybrid model according to 3GPP 38.901 clause 8 [43], consisting of deterministic and stochastic components. The deterministic ray tracing model is established by Feko Winprop [46]. The consideration of random scattering by moving objects is used to verify the generalization ability of the proposed schemes. Each BS has 3 sectors-
 covering the whole horizontal plane. The configurations of the BS and MU antennas are given in Table I, the feedback RSRP is logarithmically quantized with an accuracy of 1 dB. As shown in Fig. 5, the geometric layout of the cell-free mmWave network covering 210 × 130 m2 is a representative of the urban scenario. The BSs are located on top of the buildings or along the streets, and their heights are in the range [15, 40] m. The heights of buildings or trees are also marked. Data samples are unifo-
rmly collected from the outdoor area in Fig. 5.
Fig. 5. Layout of a mmWave communication scenario. The BSs marked in circles are located on the buildings or along the streets, and the MUs are distributed outdoors.
For performance evaluation, the following four key performance indicators are concerned.
• MSE: The average prediction MSE (in dBm2) w.r.t. the RSRP in beamspace, i.e., Ex,s 1
N
PN
i=1(xi −xˆi)2 . This is an indicator to evaluate the overall prediction error. • Top-K accuracy: The ratio that the optimal beam is included in the top-K predicted beams (ranked by predicted RSRPs), where K ∈ {1, 3, 5}.
TABLE I SIMULATION CONFIGURATIONS OF SCENARIO
Name Value
carrier Frequency 30 GHz bandwidth B 100 MHz number of BS antennas 16 × 8 number of MU antennas 1 symbol duration Ts 8.92 μs time-slot duration Tc 20 ms noise power spectral density −174 dBm/Hz maximal number of probing beams L 8 position noise variance σ2
s 1 m2
• RSRP difference: The absolute RSRP difference (in dBm) between the predicted beam ˆi∗ and the corresponding ground-truth i∗, i.e., Ex,s |xiˆ∗ − xi∗ | .
• Effective achievable rate (EAR): We define EAR as
EAR ≜ Eh,nx 1 − LTs
Tc
log2 1 + |A[:, i∗]h|2
σx2
,
(29) where Ts and Tc respectively are the durations of a symbol and a time-slot. At the beginning of each timeslot, the probing beams are sent, each occupying one symbol resource.
The proposed beam predictor has already been illustrated in Fig. 4. The detailed hyper-parameters of training are listed in Table II. The simulation platform is: Python 3.10, Torch 2.0.0, CPU Intel i7-9700K, and GPU Nvidia GTX 1070Ti. The following results are averaged over all BS in Fig. 5, and the optimal results are highlighted in bold.
TABLE II HYPER-PARAMETERS
Name Value
number of samples Ns 60,000 number of epochs 100 batch size 200 learning rate 0.001 number of transformer modules 2 number of embedding channels 16 number of multi-heads 1
B. Cost Functions
In this part, the prediction performance of schemes with different cost functions, i.e., cross entropy (CE) minimization3, MSE minimization, and our proposed ML maximization, are studied. The prediction accuracy, MSE, and RSRP difference respectively are given in Fig. 6. All schemes use the uniform probing beams plotted in Fig. 7. In general, the CE has a poor prediction result because it only learns the beam index with the maximum RSRP and neglects the RSRP in the whole beamspace. Meanwhile, the -
performance of MSE and ML is comparable. In the following studies, we use ML as the cost function to evaluate the prediction uncertainty.
3The activation function in the output layer is replaced by softmax.

SUBMITTED TO IEEE TRANSACTIONS ON COMMUNICATIONS 10
CE MSE ML
0
20
40
60
80
100
19.73 %
23.26 %
24.37 %
51.88 %
77.24 %
86.10 %
52.05 %
76.60 %
85.55 %
Prediction accuracy (%)
top-5 top-3 top-1
CE MSE ML
0
1
2
3
4
5
6
None
4.840 4.953
Prediction MSE (dBm2)
CE MSE ML
0
1
2
3
4
5
6
5.428
1.327 1.338
RSRP difference (dBm)
Fig. 6. Predict performance of schemes with different cost functions.
0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 azimuth anttena
76543210
elevation anttena
Fig. 7. Baseline: uniform probing beams (plotted in black squares L = 8).
C. Learning Networks and Input Information
probing beams MU location MU location +
probing beams
0
20
40
60
80
100
77.32 % 77.51 %
65.52 % 67.97 %
37.71 %
45.79 %
52.05 %
76.60 %
85.55 %
70.61 %
36.05 %
75.07 %
56.35 %
27.82 %
61.55 %
27.05 %
16.62 %
32.41 %
Prediction accuracy (%)
top-5 top-3 top-1
top-5 top-3 top-1
probing beams MU location MU location +
probing beams
0
1
2
3
4
5
6
2.386 1.939
1.338
3.177
5.780
2.720
RSRP difference (dBm)
deep model deep model deep model shallow model shallow model shallow model
Fig. 8. A comparison of prediction performance with different input combinations. The results with shallow and the proposed deep networks respectively are shown in grey and color.
We then study the prediction performance with shallow and deep networks4, using different input combinations, i.e., 8 probing beams, MU location, 8 probing beams & MU location. The deep network referred to the one proposed in Fig. 4, the shallow network is obtained by replacing the transformer backbone with 2 fully connected layers and each layer contains 128 neurons. As shown in Fig. 8, the prediction performance of the proposed deep network (in color) significantly outperforms that of the shallo-
w network (in grey), indicating that the potential map between the probing beams and/or MU location to the RSRP distribution is complex, and thus sufficient network depth can improve the prediction. On the other hand, considering different input combinations, the prior of MU spatial information significantly improves the
4GP is a typical shallow model, but it experimentally fails to work with the sklearn tool. Thus, we consider shallow NN as the shallow model.
RSRP prediction performance, and the top-1 accuracy of MU location is up to 45.79% which is better than 37.71% of probing beams. This implies that location-aware probing beam-free BA/T is feasible if the requirement of RSRP difference is not critical. In the following, the scheme of the deep model with 8 probing beams & MU location performs as a benchmark of uniform probing.
D. Location-aware Beam Probing
The above subsections consider uniform probing beams, here we further discuss the influence of non-uniform probing beams. The location-specific probing beams can be designed using Iter-BP&PBS or 2S-BP&PBS, weighted or uniform entropy minimizations. In 2S-BP&PBS, the coverage area is uniformly divided into 2 × 2 m2 square grids. As plotted in Fig. 9, L1 = 3 indicates that the 2SBP&PBS transmits probing beams twice, and the numbers of first and second probing beams respectively are L1 = 3 and L2 = 5-
. Compared to Iter-BP&PBS, 2S-BP&PBS significantly improves the top-1 prediction accuracy and reduces the RSRP difference, by directly measuring the top-L2 beams in the second interaction. Hence, the top-K (K > 1) accuracies of 2SBP&PBS are worse than those of Iter-BP&PBS. Meanwhile, the proposed Iter-BP&PBS and 2S-BP&PBS significantly outperform the baseline with about 5 dB gain in RSRP difference. In terms of prediction MSE with mask in (19), the proposed Iter-BP&PBS without mask has achieved th-
e best result. This is because the use of weighted entropy minimization sacrifices the overall MSE performance to achieve a local entropy minimization on the areas with high predicted RSRP values. The mask design is consistent with the link-level BA/T whereas only the maximum RSRP is concerned. Moreover, our proposed schemes are also potential for the system-level BA/T optimizations, since we have predicted the RSRP in the whole beamspace and thus the estimation of the channel in the inference dir-
ection is feasible. Considering Iter-BP&PBS, the RSRP difference versus maximal number of probing beams L is depicted in Fig. 10(a). When L ≤ 3, the performance of Iter-BP&PBS with the mask rapidly improves, then the improvement slows down as L continues to increase. Meanwhile, Iter-BP&PBS without the mask has a bad performance, and it is comparable to the baseline when L = 7. This indicates that the proposed mask can help the beam predictor roughly locate the strongest cluster with a few probing -
beams, but an accurate prediction of the optimal beam is difficult. Thus, when the strongest cluster is roughly located, it would be better to re-design the mask in (19) or just probe the beams with the top-L2 predicted RSRPs. Considering 2S-BP&PBS, the RSRP difference versus number of first probing beams L1 is shown in Fig. 10(b). The uniform probing beams with L < 8 are designed so that the beams are uniformly located in beamspace. In particular, L1 = 0 is the scheme that probes the top-L beams -
predicted by the networks with only MU location, and the beam probing at the first stage is removed, thus requiring an interaction. The scheme with L1 = 8 is the one that probes the top-L beams predicted by the networks with only MU location, the beam

SUBMITTED TO IEEE TRANSACTIONS ON COMMUNICATIONS 11
probing at the second stage is removed and an interaction is also required. The scheme with L1 = 0 is better than the one with L1 = 8, indicating the importance of obtaining the optimal beam by measurement in the second stage. On the other hand, the proposed 2S-BP&PBS significantly outperforms the baseline, and schemes with or without mask have similar performance, implying that the gain is mainly achieved by the entropy-based probing beam selection.
E. Generalization Performance
In this subsection, we examine the generalization performance w.r.t. the quantization error of RSRP feedback. The performance analysis of RSRP difference concerning the resolution of RSRP feedbacks is presented in Fig. 11. RSRP values are constrained within the range of [−140, −40] dBm, and then quantized with resolutions ranging from 1 dBm to 20 dBm. The term ‘baseline’ denotes the scheme of which both training and test data share the same RSRP resolution, while in other cases, the training data -
are generated with a fixed resolution. In the case of Iter-BP&PBS, schemes with resolutions 1 and 6 dBm exhibit comparable performance to the baseline, showcasing good generalization. However, Iter-BP&PBS struggles to predict accurately when the resolution becomes too coarse, specifically at 20 dBm. On the other hand, the proposed 2S-BP&PBS demonstrates consistent performance across various resolutions, closely matching the baseline. This suggests superior generalization performance compared to It-
er-BP&PBS. The impact of quantization error is akin to that of environmental white noise, and corresponding simulation studies are omitted due to constraints on article space.
F. Data Transmission
In this part, we study the EAR performance of data transmission with the proposed beam prediction schemes. The performance degradation of single-user BA/T is mainly determined by the beam alignment ratio, i.e., top-1 accuracy.
Regarding the influence of mis-alignment, there exists an EAR performance gap between the prediction-based schemes and the upper bound where the transmission beam is assumed to be correctly aligned without any training overhead. As shown in Fig.9, the proposed schemes can align the transmission beam with a top-1 accuracy about 70%, which is far from 100% in a numerical sense. However, the mis-alignment does not mean that the transmission will fail to work, since the sub-optimal beams also have nea-
r-optimal RSRP. Thus, as shown in Fig. 12, the EAR performance versus signal-noiseratio (SNR) of the proposed Iter-BP&PBS and 2S-BP&PBS is very close to the upper bound. In terms of hierarchical measurement-based BA/T, the single-user overhead of two-level search is 24 including 16 wide beams and 8 narrow beams, and the overhead of binary search is 2 log2 N = 14 with 7 interactions. As we consider multiple MUs, the curves of EAR versus number of users U are demonstrated in Fig. 13. When U grows up-
 to 100, all the time resources are consumed in the binary search, more than 60% time resources are consumed in the two-level search. Meanwhile, the prediction-based scheme has about 35% drop due to overhead cost.
TABLE III AVERAGE COMPUTATIONAL TIME AND STORAGE COSTS
two-level search
binary
search Iter-BP&PBS 2S-BP&PBS
storage cost (MB) \ \ 25.152 3.144 + 0.321 computational
time cost (ms) ≈ 0 ≈ 0 34.08 2.10
number of
interactions 2 7 8 2
Moreover, we list the average computational time and storage costs of the proposed schemes in Table III. Considering the storage cost, 3.144 MB and 0.321 MB respectively are the storage space of a mean and variance network and a locationaware codebook. At the online inference stage, the mean
uniform
probing uniform
probing
L1 = 3
Iter
BP&PBS Iter
BP&PBS
mask
2S
BP&PBS
L1 = 3
2S
BP&PBS
Lm1a=sk3
0
20
40
60
80
100
85.55 %
77.84 %
85.99 %
89.36 %
84.16 % 84.28 %
76.60 % 73.83 %
78.09 %
84.71 %
80.95 % 81.15 %
52.05 %
66.20 %
52.91 %
70.26 %
73.88 % 74.01 %
Prediction accuracy (%)
top-5 top-3 top-1
uniform
probing uniform
probing
L1 = 3
Iter
BP&PBS Iter
BP&PBS
mask
2S
BP&PBS
L1 = 3
2S
BP&PBS
Lm1a=sk3
0
2
4
6
8
10
12
14
4.953
14.498
4.752 4.882
7.829 7.795
Prediction MSE (dBm2)
uniform
probing uniform
probing
L1 = 3
Iter
BP&PBS Iter
BP&PBS
mask
2S
BP&PBS
L1 = 3
2S
BP&PBS
Lm1a=sk3
0.00
0.25
0.50
0.75
1.00
1.25
1.50
1.75
2.00
1.338
0.903
1.266
0.430 0.412 0.406
RSRP difference (dBm)
Fig. 9. Prediction results of the Iter-BP&PBS and 2S-BP&PBS with/without mask.

SUBMITTED TO IEEE TRANSACTIONS ON COMMUNICATIONS 12
12345678
0.00
0.25
0.50
0.75
1.00
1.25
1.50
1.75
2.00
RSRP difference (dBm)
uniform probing
Iter-BP&PBS Iter-BP&PBS mask
(a) Maximal number of probing beams L.
012345678
0.00
0.25
0.50
0.75
1.00
1.25
1.50
1.75
2.00
RSRP difference (dBm)
uniform probing Iter-BP&PBS 2S-BP&PBS mask
(b) Number of first probing beams L1 (L = 8).
Fig. 10. RSRP difference versus number of probing beams.
network performs only one inference in 2S-BP&PBS and the computational time cost is 2.10 ms, which roughly satisfies real-time deployment. Meanwhile, the computational time cost in Iter-BP&PBS is 34.08 ms, which is greatly accelerated by the parallel computation in the GPU.
VII. CONCLUSIONS
In this work, we investigated the joint probing beam selection and probabilistic beam prediction, and formulated it as an entropy minimization problem. To solve this problem, we proposed an iterative scheme (Iter-BP&PBS) with a simplified diagonal covariance matrix. To further reduce the number of interactions and the computational complexity of the IterBP&PBS, we proposed a two-stage probing beam selection scheme, i.e., 2S-BP&PBS. Simulation results demonstrated the superiority of the proposed sc-
hemes compared to the existing hierarchical beam search and beam prediction with uniform probing beams. In our future study, we will extend the entropybased method and utilize the channel prior in frequency and time domains, for probing beam selection and beam prediction.
100 101 Resolution of RSRP feedback (dBm)
0.0
0.5
1.0
1.5
2.0
2.5
3.0
RSRP difference (dBm)
Iter-BP&PBS baseline Iter-BP&PBS res = 1 Iter-BP&PBS res = 6 Iter-BP&PBS res = 20 2S-BP&PBS baseline 2S-BP&PBS res = 1 2S-BP&PBS res = 6 2S-BP&PBS res = 20
Fig. 11. EAR versus SNR (number of users U = 1).
0 5 10 15 20 25 30 SNR (dB)
0
2
4
6
8
10
EAR (bps/Hz)
upper bound predict (uniform probing) predict (Iter-BP&PBS mask) predict (2S-BP&PBS mask)
16 18
4.5
5.0
5.5
6.0
6.5
Fig. 12. EAR versus SNR (number of users U = 1).
REFERENCES
[1] F. Meng, Z. Cheng, Y. Huang, and Z. Lu, “Entropy-based probing beam selection and beam prediction via deep learning,” submitted to Proc. IEEE Int. Commun. Conf. (ICC): Wireless Commun. Symp., Denver, United States, June 2024. [2] M. Xiao, S. Mumtaz, Y. Huang, L. Dai, Y. Li, M. Matthaiou, G. K. Karagiannidis, E. Bjo ̈rnson, K. Yang, C.-L. I, and A. Ghosh, “Millimeter wave communications for future mobile networks,” IEEE J. Sel. Areas Commun., vol. 35, no. 9, pp. 1909–1935, 2017. [3] S. Hur, T. -
Kim, D. J. Love, J. V. Krogmeier, T. A. Thomas, and A. Ghosh, “Millimeter wave beamforming for wireless backhaul and access in small cell networks,” IEEE IEEE Trans. Commun., vol. 61, no. 10, pp. 4391–4403, 2013. [4] J. Wang, Z. Lan, C. woo Pyo, T. Baykas, C. sean Sum, M. Rahman, J. Gao, R. Funada, F. Kojima, H. Harada, and S. Kato, “Beam codebook based beamforming protocol for multi-gbps millimeter-wave wpan systems,” IEEE J. Sel. Areas Commun., vol. 27, no. 8, pp. 1390–1399, 2009. [5] J. Wang, Z-
. Lan, C.-S. Sum, C.-W. Pyo, J. Gao, T. Baykas, A. Rahman, R. Funada, F. Kojima, I. Lakkis, H. Harada, and S. Kato, “Beamforming codebook design and performance evaluation for 60ghz wideband wpans,” in 2009 IEEE 70th Veh. Technol. Conf. Fall, 2009, pp. 1–6. [6] Z. Xiao, T. He, P. Xia, and X.-G. Xia, “Hierarchical codebook design for beamforming training in millimeter-wave communication,” IEEE Trans. Wireless Commun., vol. 15, no. 5, pp. 3380–3392, 2016.

SUBMITTED TO IEEE TRANSACTIONS ON COMMUNICATIONS 13
U = 1 U = 4 U = 20 U = 50 U = 100 Number of MUs
0
2
4
6
8
10
12
14
EAR (bps/Hz)
upper bound
binary search two-level search
predict (uniform probing) predict (Iter-BP&PBS mask) predict (2S-BP&PBS mask)
Fig. 13. EAR versus number of users U .
[7] I. Goodfellow, Y. Bengio, and A. Courville, Deep Learning. The MIT Press, 2016. [8] A. Zappone, M. Di Renzo, and M. Debbah, “Wireless networks design in the era of deep learning: Model-based, AI-based, or both?” IEEE Trans. Commun., vol. 67, no. 10, pp. 7331–7376, 2019. [9] H. He, S. Jin, C.-K. Wen, F. Gao, G. Y. Li, and Z. Xu, “Modeldriven deep learning for physical layer communications,” IEEE Wireless Commun., vol. 26, no. 5, pp. 77–83, 2019. [10] J. Zhang, G. Zheng, I. Krikidis, and R. Zhan-
g, “Fast specific absorption rate aware beamforming for downlink SWIPT via deep learning,” IEEE Trans. Veh. Technol., vol. 69, no. 12, pp. 16 178–16 182, 2020. [11] C. Xu, S. Liu, Z. Yang, Y. Huang, and K.-K. Wong, “Learning rate optimization for federated learning exploiting over-the-air computation,” IEEE J. Sel. Areas Commun., vol. 39, no. 12, pp. 3742–3756, 2021. [12] J. Su, F. Meng, S. Liu, Y. Huang, and Z. Lu, “Learning to predict and optimize imperfect MIMO system performance: Framework and-
 application,” in Proc. 41-th IEEE Global Commun. Conf. (GLOBECOM’22), 2022, pp. 335–340. [13] J. Yang, S. Jin, C.-K. Wen, J. Guo, M. Matthaiou, and B. Gao, “Modelbased learning network for 3-D localization in mmWave communications,” IEEE Trans. Wireless Commun., vol. 20, no. 8, pp. 5449–5466, 2021. [14] S. Fan, Y. Wu, C. Han, and X. Wang, “SIABR: A structured intraattention bidirectional recurrent deep learning method for ultra-accurate terahertz indoor localization,” IEEE J. Sel. Areas Commun., -
vol. 39, no. 7, pp. 2226–2240, 2021. [15] Z. Liu, M. del Rosario, and Z. Ding, “A markovian model-driven deep learning framework for massive mimo csi feedback,” IEEE Trans. Wireless Commun., vol. 21, no. 2, pp. 1214–1228, 2022. [16] J. Guo, C.-K. Wen, S. Jin, and G. Y. Li, “Overview of deep learningbased csi feedback in massive mimo systems,” IEEE IEEE Trans. Commun., vol. 70, no. 12, pp. 8017–8045, 2022. [17] J. Zhang, Y. Huang, Y. Zhou, and X. You, “Beam alignment and tracking for millimeter wav-
e communications via bandit learning,” IEEE Trans. Commun., vol. 68, no. 9, pp. 5519–5533, 2020. [18] J. Zhang, Y. Huang, J. Wang, X. You, and C. Masouros, “Intelligent interactive beam training for millimeter wave communications,” IEEE Trans. Wireless Commun., vol. 20, no. 3, pp. 2034–2048, 2021. [19] F. Meng, S. Liu, Y. Huang, and Z. Lu, “Learning-aided beam prediction in mmWave MU-MIMO systems for high-speed railway,” IEEE Trans. Commun., vol. 70, no. 1, pp. 693–706, 2022. [20] K. Ma, Z. Wang, -
W. Tian, S. Chen, and L. Hanzo, “Deep learning for mmwave beam-management: State-of-the-art, opportunities and challenges,” IEEE Wireless Commun., pp. 1–8, 2022. [21] R. Yang, Z. Zhang, X. Zhang, C. Li, Y. Huang, and L. Yang, “Metalearning for beam prediction in a dual-band communication system,” IEEE IEEE Trans. Commun., vol. 71, no. 1, pp. 145–157, 2023. [22] W. He, C. Zhang, Y. Huang, and X. You, “Intelligent optimization of base station array orientations via scenario-specific modeling,” IEEE -
Trans. Commun., vol. 70, no. 3, pp. 2117–2130, 2022.
[23] A. Ali, N. Gonz ́alez-Prelcic, and R. W. Heath, “Millimeter wave beamselection using out-of-band spatial information,” IEEE Trans. Wireless Commun., vol. 17, no. 2, pp. 1038–1052, 2018. [24] W. Xu, F. Gao, X. Tao, J. Zhang, and A. Alkhateeb, “Computer vision aided mmwave beam alignment in v2x communications,” IEEE Trans. Wireless Commun., pp. 1–1, 2022.
[25] H.-L. Song and Y.-C. Ko, “Beam alignment for high-speed uav via angle prediction and adaptive beam coverage,” IEEE Trans. Veh. Technol., vol. 70, no. 10, pp. 10 185–10 192, 2021. [26] M. Hussain and N. Michelusi, “Learning and adaptation for millimeterwave beam tracking and training: A dual timescale variational framework,” IEEE J. Sel. Areas Commun., vol. 40, no. 1, pp. 37–53, 2022. [27] K. Ma, F. Zhang, W. Tian, and Z. Wang, “Continuous-time mmwave beam prediction with ode-lstm learning arc-
hitecture,” IEEE Wireless Commun. Letters, vol. 12, no. 1, pp. 187–191, 2023. [28] S. H. A. Shah and S. Rangan, “Multi-cell multi-beam prediction using auto-encoder lstm for mmwave systems,” IEEE Trans. Wireless Commun., vol. 21, no. 12, pp. 10 366–10 380, 2022. [29] M. Alrabeiah and A. Alkhateeb, “Deep learning for mmwave beam and blockage prediction using sub-6 ghz channels,” IEEE IEEE Trans. Commun., vol. 68, no. 9, pp. 5504–5518, 2020. [30] F. Gao, B. Lin, C. Bian, T. Zhou, J. Qian, and H. Wan-
g, “Fusionnet: Enhanced beam prediction for mmwave communications using sub-6 ghz channel and a few pilots,” IEEE IEEE Trans. Commun., vol. 69, no. 12, pp. 8488–8500, 2021. [31] K. Ma, S. Du, H. Zou, W. Tian, Z. Wang, and S. Chen, “Deep learning assisted mmwave beam prediction for heterogeneous networks: A dualband fusion approach,” IEEE IEEE Trans. Commun., vol. 71, no. 1, pp. 115–130, 2023. [32] J. A. del Peral-Rosado, R. Raulefs, J. A. L ́opez-Salcedo, and G. SecoGranados, “Survey of cellular m-
obile radio localization methods: From 1G to 5G,” IEEE Commun. Surveys Tuts., vol. 20, no. 2, pp. 1124–1148, 2018. [33] H. Wymeersch, G. Seco-Granados, G. Destino, D. Dardari, and F. Tufvesson, “5G mmwave positioning for vehicular networks,” IEEE Wireless Commun., vol. 24, no. 6, pp. 80–86, 2017. [34] Y. Zeng and X. Xu, “Toward environment-aware 6g communications via channel knowledge map,” IEEE Wireless Commun., vol. 28, no. 3, pp. 84–91, 2021. [35] K. Satyanarayana, M. El-Hajjar, A. A. M. Mourad-
, and L. Hanzo, “Deep learning aided fingerprint-based beam alignment for mmWave vehicular communication,” IEEE Trans. Veh. Technol., vol. 68, no. 11, pp. 10 85810 871, 2019. [36] T.-H. Chou, N. Michelusi, D. J. Love, and J. V. Krogmeier, “Fast position-aided mimo beam training via noisy tensor completion,” IEEE J. Sel. Topics Signal Process., vol. 15, no. 3, pp. 774–788, 2021. [37] J. Zhang and C. Masouros, “Learning-based predictive transmitterreceiver beam alignment in millimeter wave fixed wir-
eless access links,” IEEE Trans. Signal Process., vol. 69, pp. 3268–3282, 2021. [38] W. Xu, Y. Ke, C.-H. Lee, H. Gao, Z. Feng, and P. Zhang, “Data-driven beam management with angular domain information for mmwave uav networks,” IEEE Trans. Wireless Commun., vol. 20, no. 11, pp. 70407056, 2021. [39] C. Zhang, M. Wang, W. He, L. Zhang, and Y. Huang, “Channel beam pattern extension for massive MIMO via deep gaussian process regression,” in 2021 IEEE/CIC Int. Conf. Commun. China (ICCC), 2021, pp. 172–-
177. [40] Y. Heng and J. G. Andrews, “Machine learning-assisted beam alignment for mmWave systems,” in 2019 IEEE Global Commun. Conf. (GLOBECOM), Waikoloa, HI, USA, 2019. [41] W. Xu, F. Gao, S. Jin, and A. Alkhateeb, “3D scene-based beam selection for mmWave communications,” IEEE Wireless Commun. Lett., vol. 9, no. 11, pp. 1850–1854, 2020. [42] Y. Heng, J. Mo, and J. G. Andrews, “Learning site-specific probing beams for fast mmwave beam alignment,” IEEE Trans. Wireless Commun., vol. 21, no. 8, pp.-
 5785–5800, 2022. [43] 3GPP, “Study on channel model for frequencies from 0.5 to 100 GHz,” 3GPP TR 38.901, Jan. 2020, version 16.1.0. [44] M. L. Eaton, “Multivariate statistics: a vector space approach,” JOHN WILEY & SONS, INC., 605 THIRD AVE., NEW YORK, NY 10158, USA, 1983. [45] A. Vaswani, N. Shazeer, N. Parmar, J. Uszkoreit, L. Jones, A. N. Gomez, L. u. Kaiser, and I. Polosukhin, “Attention is all you need,” in NIPS, I. Guyon, U. V. Luxburg, S. Bengio, H. Wallach, R. Fergus, S. Vishwanathan, an-
d R. Garnett, Eds., vol. 30, 2017. [46] WinProp, “Wave propagation and radio network planning software (part of altair hyperworks).” [Online]. Available: https://www.altair.com/

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:27.024Z
- **Text Length:** 65764 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
