# PDF Document: Koh et al. - 2025 - Group-wise Semantic Splitting Multiple Access for Multi-User Semantic Communication.pdf

**File Path:** Koh et al. - 2025 - Group-wise Semantic Splitting Multiple Access for Multi-User Semantic Communication.pdf

**Processed Date:** 2026-02-10T18:16:16.799Z

**File Size:** 440.09 KB

**Total Pages:** 5

**Extracted Pages:** 5

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3348

**Title:** Group-wise Semantic Splitting Multiple Access for Multi-User Semantic Communication

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

1
Group-wise Semantic Splitting Multiple Access for
Multi-User Semantic Communication
Jungyeon Koh, Member, IEEE, Hyeonho Noh, Member, IEEE, and Hyun Jong Yang, Senior Member, IEEE
Abstract— In this letter, we propose a group-wise semantic splitting multiple access framework for multi-user semantic communication in downlink scenarios. The framework begins by applying a balanced clustering mechanism that groups users based on the similarity of their semantic characteristics, enabling the extraction of group-level common features and user-specific private features. The base station then transmits the common features via multicast and the private features via unicast, effective-
ly leveraging both shared and user-dependent semantic information. To further enhance semantic separability and reconstruction fidelity, we design a composite loss function that integrates a reconstruction loss with a repulsion loss, improving both the accuracy of semantic recovery and the distinctiveness of common embeddings in the latent space. Simulation results demonstrate that the proposed method achieves up to 3.26× performance improvement over conventional schemes across various channel con-
ditions, validating its robustness and semantic efficiency for next-generation wireless networks.
Index Terms—Semantic communication, semantic splitting multiple access, 6G networks, clustering, repulsion loss
I. INTRODUCTION
Next-generation wireless networks, including beyond 5G and 6G, are expected to connect massive numbers of devices and deliver vast volumes of data. This explosive growth in demand exacerbates the longstanding issue of spectrum scarcity, as the available frequency bands remain fundamentally limited. To address this limitation, semantic communication [1], [2] has emerged as a promising paradigm. Instead of transmitting all raw bits, semantic communication extracts and transmits compact semantic repr-
esentations, such as high-level features or embeddings, to substantially reduce the communication load while preserving task-relevant performance. Building on this foundation, recent research has investigated how to further enhance semantic communication performance using conventional wireless techniques. In particular, multiple access methods—such as orthogonal multiple access (OMA) [3]–[5] and rate-splitting multiple access (RSMA) [6]–[10]are increasingly being integrated with semantic communica-
tion. By leveraging separation in the power, frequency, or time domains, these approaches improve communication performance in multi-user scenarios. However, these approaches overlook the heterogeneity of user data when assigning time,
Jungyeon Koh is with the Department of Electrical Engineering, Pohang University of Science and Technology (POSTECH), Korea (e-mail: jungyeon.koh@postech.ac.kr). Hyeonho Noh is with the Department of Information and Communication Engineering, Hanbat National University, Republic of Korea (e-mail: hhnoh@hanbat.ac.kr). Hyun Jong Yang is with the Department of Electrical and Computer Engineering, Seoul National University, Korea (email: hjyang@snu.ac.kr). Jungyeon Koh and Hyeonho Noh contributed equa-
lly to this work.
óȺɯǩ ǗʅɯƠȺɶ
`ɹǩɦ˨ǩɶǍ̺ IU Öʅ̭ǩɹ ǗʅɯƠȺɶ
± Ýç
Ā˃ǩɹ 11月 PPMÖɹȺ̨Ơ˓ǩPR
Ā˃ǩɹ 12月 PPMÖɹȺ̨Ơ˓ǩPR
Ā˃ǩɹ Hg PPMÖɹȺ̨Ơ˓ǩPR
Ā˃ǩɹ erg PPMÖɹȺ̨Ơ˓ǩPR
±˨ɹ˃
cɹʅ˨ʫ PPM)ʅɯɯʅɶPR
cɹʅ˨ʫ 11月 PPM)ʅɯɯʅɶPR
cɹʅ˨ʫ 12月 PPM)ʅɯɯʅɶPR
ó ƽó PPM11月MWƽPRó
Figure 1. Comparison between conventional works and the proposed one.
frequency, or power resources. Since users generate data sporadically with diverse characteristics, the grouping strategy should explicitly account for such heterogeneity. In addition, despite semantic communication’s reliance on deep learning models, existing studies have not sufficiently formulated loss functions that align with the specific multiple access strategies used during semantic training. In this paper, we propose a group-wise semantic split multiple access framework for multi-user dow-
nlink data transmission. The core idea is to group users based on the correlation in their data, and subsequently, for each group, to transmit distinct sets of common and private semantic features, as illustrated in Fig. 1. By organizing users with correlated data into coherent groups and assigning each group its own common and private semantic features, the proposed framework enables a structured separation of representations that enhances both semantic efficiency and multi-user transmission perf-
ormance. To realize this idea, we first introduce a heuristic balanced clustering method that groups users according to the similarity of their data characteristics. This allows the transmitter to construct group-wise common features independently, ensuring that the semantic model learns more homogeneous common representations within each group. To optimize the model for both accurate reconstruction and effective semantic separation, we design a composite loss function that integrates a reconstruc-
tion loss with a repulsion loss. The reconstruction loss guarantees that the combined common and private features can faithfully recover the original input, while the repulsion loss enhances the distinctiveness of common features by maximizing their angular and Euclidean distances in the latent space. Simulation results demonstrate that the proposed approach achieves up to 3.26× performance improvement over conventional methods, particularly in terms of reconstruction accuracy and semantic feature-
 disentanglement.
arXiv:2511.21411v1 [eess.SP] 26 Nov 2025

2
ÖɹȺ̨Ơ˓ǩ 11月
ÖɹȺ̨Ơ˓ǩ
Ā˃ǩɹ ǗƠ˓Ơ nȺșȫMWɝǩ̨ǩɝ
˃ǩɯƠɶ˓ȺǍ ȔǩƠ˓˨ɹǩ˃
çǩɯƠɶ˓ȺǍ @ɶǍʅǗǩɹ
#ç
ÖɹȺ̨Ơ˓ǩ
@ɶǍʅǗǩɹ
)ʅɯɯʅɶ
@ɶǍʅǗǩɹ
#ƠɝƠɶǍǩǗ )ɝ˨˃˓ǩɹȺɶș
)ʅɯɯʅɶ 11月
)ʅɯɯʅɶ c
1ǩǍ 1ǩǍ 1ǩǍ 1ǩǍ
cɹʅ˨ʫ 11月
cɹʅ˨ʫ c
ĥȺɹǩɝǩ˃˃ )ȫƠɶɶǩɝ
Figure 2. Overview of the proposed model.
II. SYSTEM MODEL
We consider a multi-user downlink semantic communication system consisting of a base station (BS) and K single-antenna communication users. The BS transmits independent data to users, so that each user can perform its own task.
A. Semantic Transmitter
As shown in Fig. 2, we denote the source data of the k-th user as sk, which carries task-relevant semantic information. Each source data is first processed by a semantic encoder to extract high-level semantic features, which are represented by
zk = S(sk; β), (1)
where zk is the resulting semantic representation and S(·; β) is the semantic encoder with learnable parameters β. These extracted features are then processed to generate two components: private features, which contain user-specific semantic information, and common features, which capture common semantics across users. The private feature encoder extracts users’ private features, which can be expressed as
pk = fp(zk; θp), (2)
where pk ∈ RLp×1 denotes the private feature of user k, Lp is the length of the private feature, and fp(·; θp) is a learnable private feature encoder parameterized by θp. Before extracting the common features, a clustering step is performed based on the cosine similarities of the private features {pk}K
k=1. Specifically, users with similar semantic
characteristics are clustered into G groups, denoted as {G1, G2, . . . , GG}, where each group Gg contains users sharing similar private semantics. The detailed clustering algorithm is described in III-B. For each group Gg, a Transformer-based encoder is employed to aggregate semantic information and extract a groupwise common feature:
cg = fc({zk}k∈Gg ; θc), g = 1, 2, . . . , G, (3)
where cg ∈ RLc×1 denotes the common feature of group Gg, Lc is the length of the common feature, fc(·; θc) is the common feature encoder with the learnable parameter θc. The resulting {cg}gG=1 capture group-level common semantics that benefit all users within each group and serve as communication-efficient representations shared in the system.
B. Semantic Receiver
After obtaining the common features {cg}gG=1, the BS performs semantic feature transmission in two stages.
Common-Feature Transmission: In the first stage, the BS transmits the group-level common features {cg} to users within the corresponding group Gg. The received signal at user k ∈ Gg can be written as
y(c)
k [l] = hkcg[l] +
∑ G
g′ =1,g′ 6=g
hkcg′ [l] + nk, (4)
where hk denotes the downlink channel coefficient for user k, and nk represents additive white Gaussian noise (AWGN) with variance σk2.
Private-Feature Transmission: Next, the BS transmits user-specific private semantic features {pk}. The received signal at user k can be represented by
y(p)
k [l] = hkpk[l] +
K ∑
k′ =1,k′ 6=k
hkpk′ [l] + nk. (5)
Before transmission over the wireless channel, the extracted features are power-normalized. In this work, we consider three channel models: AWGN, Rician, and Rayleigh fading. Under the AWGN channel, the effects of fading are ignored. For the Rayleigh fading channel, the channel coefficients follow hk ∼ CN (0, 1). For the Rician fading channel, the coefficients
follow hk ∼ CN (μ, σ2), with μ = √r/(r + 1) and σ =
√1/(r + 1), where r is the Rician factor. The semantic decoder aims to reconstruct sˆk based on the features received from the channel. After receiving both the common and private semantic features, each user concatenates

3
(a) Epoch 0 (b) Epoch 300
(c) Epoch 600 (d) Epoch 1000
* Converging to equiangular vectors
Figure 3. t-SNE plots of common features at different epochs. Notably, feature representations converge toward an equiangular, pentagon-shaped configuration.
them and reconstructs its intended semantic information. The reconstructed source data of user k ∈ Gg can be expressed as
sˆk = S−1(CONCAT[cg, pk]; φk), (6)
where S−1(·; φk) denotes the semantic decoder parameterized by φk, which maps the concatenated semantic features back to the reconstructed source domain. This decoding process preserves both the common semantics within the group and the user-specific details unique to each source.
III. PROPOSED METHOD
We propose a composite loss function that jointly optimizes the reconstruction accuracy and latent-space separability of common features. Furthermore, we introduce a balanced clustering strategy for effective common feature grouping.
A. Composite Loss Function Design
The proposed composite loss consists of two components: a reconstruction loss and a repulsion loss, which is written as
Ltotal = Lrecon + λLrepul, (7)
where λ is the weight of the repulsion term. The reconstruction loss Lrecon ensures high-quality image recovery at the receiver sides, while the repulsion loss Lrepul prevents the common features—typically compressed more aggressively than private ones—from collapsing into overlapping regions in the latent space. Fig. 3 shows a t-SNE plot of common features at different epochs. As the repulsion loss is minimized, both Euclidean and angular separations increase, resulting in more discriminative gro-
up-wise embeddings. Reconstruction loss: We adopt the Charbonnier loss [11] as Lrecon, which provides improved robustness to outliers compared with the conventional l2 loss.
Lrecon = 1
K
K ∑
i=1
√(si − sˆi)2 + ǫ2, (8)
where ǫ is a small constant for numerical stability.
Repulsion loss: The repulsion loss consists of three components: a Euclidean repulsion term, a center regularization term, and an angular repulsion term, which is expressed as
Lrepul = 1
G(G − 1)
G ∑
i,j=1 i6=j
e−dij
} {{ } Euclidean repulsion
+ λc
∥ ∥ ∥ ∥ ∥
1 G
G ∑
i=1
gi
∥ ∥ ∥ ∥ ∥
2
2
} {{ } Center regularization
+1
G(G − 1)
G ∑
i,j=1 i6=j
(Xij − Tij )2
} {{ } Angular repulsion
. (9)
where dij = ‖ci − cj‖22 denotes the Euclidean distance between common features ci and cj , and λc is the weight of
the center regularization term. Furthermore, Xij = c⊤
i cj
‖ci‖2 ‖cj ‖2
represents the cosine similarity between common features, and Tij specifies the target pairwise cosine similarity among G group-level common features, which is given by
Tij =
 

1, i = j,
−1
G − 1 , i 6= j . (10)
The Euclidean repulsion term penalizes feature pairs that are spatially close via an exponential distance function. The center regularization term prevents overfitting and improves generalization to unseen data [12]. To maximize the separation between feature representations, it is important to consider not only the Euclidean distance but also the angular distance. Motivated by findings in simplex-based subspace clustering [13], [14], we propose an angular repulsion term. To be specific, the angul-
ar repulsion term drives the pairwise cosine similarity between any two common features toward −1/(G − 1). This enforces an equiangular configuration on the hypersphere, thereby maximizing angular separability among group-wise common features. Since the common feature dimension Lc typically satisfies Lc ≫ G, forming such an equiangular configuration is theoretically feasible.
B. Training Process
Balanced clustering strategy: To address heterogeneous user data and improve group-wise semantic alignment, our framework adopts a label-agnostic clustering strategy. It operates solely on extracted private features, thereby avoiding any dependency on labeled information. We first apply the Kmeans algorithm to obtain G initial centroids, and construct a cost matrix D based on cosine distances between the private features and these centroids. The resulting assignment problem is then solved using th-
e Hungarian matching algorithm [15], formulated as follows:
mMin
K ∑
k=1
∑ G
g=1
dk,g mk,g
s.t. mk,g ∈ {0, 1}, ∀k, g
G ∑
g=1
mk,g = 1, ∀k
(11)

4
Algorithm 1 Balanced Clustering via K-means and Hungarian Matching
Require: Private Feature matrix P ∈ RK×Lp , number of groups G 1: Apply K-means with G clusters to P, obtain centroids
C ∈ RG×Lp
2: Compute D ∈ RK×G 3: Solve the Hungarian matching algorithm in (11) to obtain M ∈ {0, 1}K×G
4: Form groups: Gg ← {k | mk,g = 1}, ∀g ∈ {1, . . . , G}, ∀k ∈ {1, . . . , K} return G = {G1, . . . , GG}
Algorithm 2 Joint Training Algorithm Require: Training dataset S and the batch size K 1: Transmitter:
2: Choose mini-batch data {sj}n+K
j=n from S
3: zk ← S(sk; β) 4: pk ← fp
(FC(MaxPool(zk)); θp
)
5: Derive G = {G1, . . . , GG} using Alg. 1 6: cg ← fc({zk}k∈Gg ; θc)
7: Transmit pk through unicast and cg through multicast over the channel 8: Receiver:
9: sˆk ← S−1(CONCAT[cg, pk]; φk),
10: Compute Lrecon(sk, sˆk) and Lrepul({cg}), 11: Compute Ltotal = Lrecon + λLrepul 12: Update {β, θp, θs, φk} using gradient descent with Ltotal
where M ∈ {0, 1}K×G denotes the binary assignment matrix. This formulation ensures that each user feature is assigned to exactly one cluster. The complete procedure is summarized in Algorithm 1. Joint training algorithm: Algorithm 2 outlines the endto-end training procedure of the proposed framework, which jointly optimizes both common and private feature representations.
IV. PERFORMANCE EVALUATION
A. Datasets and Simulation Environments
The proposed method is trained and evaluated on the CIFAR10 [17] dataset, and its architecture is summarized in Table I. All network modules use ReLU activation functions. Training is performed for 1000 epochs using the Adam optimizer with a learning rate of 10−4. Each training batch contains 50 images, which are evenly divided into 10 groups of 5 images to simulate multi-user semantic encoding. During training, the SNR is uniformly sampled between 12 dB and 18 dB. Model performance is evaluated i-
n terms of peak signalto-noise ratio (PSNR) and perceptual loss, where the latter is computed using a pretrained VGG network [18]. We evaluate the proposed method against three baselines.
• ViT-based: a recently introduced semantic communication model based on a Vision Transformer (ViT). • Private-only: an ablated version of our architecture without group-level common feature sharing.
Table I SEMANTIC NETWORK ARCHITECTURE
Layer Name Units
ConvNext [16] Block(d)
Conv2D (kernel=4, stride=2) 128 Conv2D (kernel=7, padding=3) d Conv2D (kernel=1) 4d GRN (Global Response Norm) 4d Conv2D (kernel=1) d Semantic Encoder 2× ConvNext Block(128) 128
3× ConvNext Block(256) 256 Private Encoder MaxPool2D (kernel=4) 
Dense Lp
Common Encoder
3× ConvNext Block(512) 512 MaxPool2D (kernel=4) 2×Transformer Encoder 512 (4 heads) Dense Lg
Semantic Decoder
Dense 512 Upsample (scale=4, bilinear) TransposeConv2D (kernel=4, stride=2) 256 3× ConvNext Block(256) 256 TransposeConv2D (kernel=4, stride=2) 128 3× ConvNext Block(128) 128 TransposeConv2D (kernel=4, stride=2) 3 2× ConvNext Block(3) 3
• JPG-LDPC: a conventional separate source-channel coding (SSCC) framework that uses JPEG for source compression and LDPC for channel coding. To ensure fairness, all semantic communication methods transmit the same number of symbols per image. For the SSCC baseline, LDPC parameters and modulation formats are selected such that the total number of transmitted bits closely matches that of the proposed system for each source. Reported PSNR values for SSCC corresponds to the best performance achieved -
across various combinations of code rates and modulation configurations.
B. Comparison with Conventional Works
3$
3
3
$
3$
%,#%+./!( *-
*0%, #&!))%(
,*+*-%$
,*+*-%$ ,*+*-%$
,*+*-%$ ,'0!.% *)(1
' "!-%$
Figure 4. Performance comparison in the AWGN channel: (Left) PSNR, (Right) Perceptual Loss.
Fig. 4 presents the PSNR and perceptual loss of the CIFAR10 dataset under the AWGN channel using 1024 transmitted symbols per image. The lines marked with “-C” indicate the use of the balanced clustering strategy, and the value in parentheses denotes the common feature ratio. Among them, Proposed-C (0.2) achieves the best performance in medium-to-high SNRs (≥ 12 dB), clearly demonstrating the effectiveness of both the proposed private-common feature separation and the balanced clustering strategy.-
 While the LDPC baseline shows better PSNR at moderate SNRs, its

5
3!
3
!
3!
") "(+, % '**
'-") $ $ & # &&"%
)'('*"!
)'('*"! )'('*"!
)'('*"! )$- +" '&%.
$ *"!
Figure 5. Performance comparison in the Rician channel with μ = 1: (Left) PSNR, (Right) Perceptual Loss.
3!
3
3
!
3!
"* "),- & (++
(."* /&"%#$ $ ''"&
*()(+"!
*()(+"! *()(+"!
*()(+"! *%. ," ('&/
% +"!
Figure 6. Performance comparison in the Rayleligh channel: (Left) PSNR, (Right) Perceptual Loss.
performance degrades sharply under low SNRs. In contrast, the proposed semantic multiplexing scheme shows smoother degradation and more stable perceptual quality across all SNR regimes, highlighting its robustness against poor channel qualities. Fig. 5 presents the results under Rician fading, where the proposed methods consistently outperform existing baselines. Notably, Proposed-C (0.2) achieves the highest PSNR across all SNR levels Likewise, Fig. 6 confirms the superiority of Proposed-C (0.2) -
under Rayleigh fading, with an even larger performance margin.
Across all three channel conditions, using a higher sharedfeature ratio and balanced clustering consistently yields the best reconstruction quality, and the performance gap increases as SNR grows. This suggests that reliable channel conditions favor a larger portion of common features, as they effectively expand symbol resources available for delivering global semantic information. Conversely, in low-SNR regimes, a smaller shared ratio achieves comparable performance, indicating that allocating mo-
re private features helps preserve user-specific semantics under severe channel distortion. Nevertheless, in all cases, incorporating group-wise common features consistently outperforms the private-only baseline, demonstrating that even minimal global semantic alignment remains beneficial. Furthermore, performance gap between models with and without clustering confirms that the proposed balanced clustering strategy effectively extracts disentangled common representations across user groups.
V. CONCLUSION
In this letter, we introduce a multi-user semantic communication framework that extracts private and group-level common features to enable efficient semantic-aware downlink transmission. The framework incorporates a balanced clustering strategy along with a composite loss function that jointly improves semantic separability and reconstruction fidelity by enforcing both feature diversity and accurate recovery. Experimental results across multiple channel environments demonstrate that the proposed a-
pproach consistently outperforms existing baselines, achieving the highest reconstruction quality and validating its effectiveness for next-generation semantic communication systems.
REFERENCES
[1] C. Chaccour, W. Saad, M. Debbah, Z. Han, and H. V. Poor, “Less data, more knowledge: Building next-generation semantic communication networks,” IEEE Commun. Surveys Tuts., vol. 27, no. 1, pp. 37–76, 2024. [2] Y. Shao, Q. Cao, and D. Gu ̈ndu ̈z, “A theory of semantic communication,” IEEE Trans. Mobile Comput., vol. 23, no. 12, pp. 12 211–12 228, 2024. [3] G. Ding, S. Liu, J. Yuan, and G. Yu, “Joint URLLC traffic scheduling and resource allocation for semantic communication systems,” IEEE Trans.-
 Wireless Commun., vol. 23, no. 7, pp. 7278–7290, 2024. [4] C. Liu, C. Guo, Y. Yang, and N. Jiang, “Adaptable semantic compression and resource allocation for task-oriented communications,” IEEE Trans. Cogn. Commun. Netw., vol. 10, no. 3, pp. 769–782, 2024. [5] H. Noh, S. Park, and H. J. Yang, “Deep reinforcement learning-based resource allocation and mode selection for semantic communication,” in 2024 22nd International Symposium on Modeling and Optimization in Mobile, Ad Hoc, and Wireless Networ-
ks (WiOpt), 2024, pp. 1–6.
[6] Y. Cheng, D. Niyato, H. Du, J. Kang, Z. Xiong, C. Miao, and D. I. Kim, “Resource allocation and common message selection for task-oriented semantic information transmission with RSMA,” IEEE Trans. Wireless Commun., vol. 23, no. 6, pp. 5557–5570, 2023. [7] R. Xu, Z. Yang, Y. Mao, C. Huang, Q. Yang, L. Xu, W. Xu, and Z. Zhang, “Rate-splitting multiple access enabled green probabilistic semantic communication over wireless networks,” IEEE Trans. Green Commun. Netw., 2025.
[8] D. Liu, Y. Liu, L. Zhang, A. Hafid, L. Khoukhi, M. Li, Y. Liu, and Y. Dong, “Generative AI-driven incentive mechanism for semantic communications in RSMA networks,” IEEE Trans. Cogn. Commun. Netw., 2025.
[9] M. Lu, J. Huang, T. Yang, Y. Wang, J. Jiao, and Q. Zhang, “Utility loss of information-optimal for semantic empowered RSMA in satelliteintegrated internet,” IEEE Internet Things J., 2024. [10] O. Dizdar and S. Wang, “Rate-splitting multiple access for semanticaware networks: An age of incorrect information perspective,” IEEE Wireless Commun. Lett., vol. 13, no. 4, pp. 1168–1172, 2024. [11] A. Bruhn, J. Weickert, and C. Schno ̈rr, “Lucas/kanade meets horn/schunck: Combining local and global opt-
ic flow methods,” International journal of computer vision, vol. 61, no. 3, pp. 211–231, 2005. [12] Y. Le Cun, I. Kanter, and S. A. Solla, “Eigenvalues of covariance matrices: Application to neural-network learning,” Physical review letters, vol. 66, no. 18, p. 2396, 1991. [13] J. Xu, M. Yu, L. Shao, W. Zuo, D. Meng, L. Zhang, and D. Zhang, “Scaled simplex representation for subspace clustering,” IEEE Trans. Cybern., vol. 51, no. 3, pp. 1493–1505, 2019. [14] B. Cai, G.-F. Lu, H. Li, and W. Song, “-
Tensorized scaled simplex representation for multi-view clustering,” IEEE Trans. Multimedia, vol. 26, pp. 6621–6631, 2024. [15] H. W. Kuhn, “The hungarian method for the assignment problem,” Naval research logistics quarterly, vol. 2, no. 1-2, pp. 83–97, 1955. [16] Z. Liu, H. Mao, C.-Y. Wu, C. Feichtenhofer, T. Darrell, and S. Xie, “A convnet for the 2020s,” in Proc. IEEE/CVF Conf. Comput. Vis. Pattern Recognit. (CVPR), 2022, pp. 11 976–11 986. [17] A. Krizhevsky, G. Hinton et al., “Learning multi-
ple layers of features from tiny images,” 2009. [18] J. Johnson, A. Alahi, and L. Fei-Fei, “Perceptual losses for real-time style transfer and super-resolution,” in European conference on computer vision. Springer, 2016, pp. 694–711.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:16.799Z
- **Text Length:** 23878 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 5 of 5
