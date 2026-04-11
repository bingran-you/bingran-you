# PDF Document: Cui et al. - 2025 - FAST Topology-Aware Frequency-Domain Distribution Matching for Coreset Selection.pdf

**File Path:** Cui et al. - 2025 - FAST Topology-Aware Frequency-Domain Distribution Matching for Coreset Selection.pdf

**Processed Date:** 2026-02-10T18:18:43.405Z

**File Size:** 2611.55 KB

**Total Pages:** 11

**Extracted Pages:** 11

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3375

**Title:** FAST: Topology-Aware Frequency-Domain Distribution Matching for Coreset Selection

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

FAST: Topology-Aware Frequency-Domain Distribution Matching for Coreset
Selection
Jin Cui∗1, Boran Zhao∗2, Jiajun Xu2, Jiaqi Guo3, Shuo Guan2, Pengju Ren†1
1State Key Laboratory of Human-Machine Hybrid Augmented Intelligence, National Engineering Research Center for Visual Information and Applications, and Institute of Artificial Intelligence and Robotics, Xi’an Jiaotong University 2School of Software Engineering, Xi’an Jiaotong University 3School of Mathematical Sciences, Nankai University
andycui@stu.xjtu.edu.cn, {boranzhao, pengjuren}@xjtu.edu.cn
Abstract
Coreset selection compresses large datasets into compact, representative subsets, reducing the energy and computational burden of training deep neural networks. Existing methods are either: (i) DNN-based, which are inherently coupled with network-specific parameters, inevitably introducing architectural bias and compromising generalization; or (ii) DNN-free, which utilize heuristics that lack rigorous theoretical guarantees for stability and accuracy. Neither approach explicitly constrains distrib-
utional equivalence of the representative subsets, largely because continuous distribution matching is broadly considered inapplicable to discrete dataset sampling. Furthermore, prevalent distribution metrics (e.g., MSE, KL, MMD, and CE) are often incapable of accurately capturing higher-order moments differences. These deficiencies lead to suboptimal coreset performance, preventing the selected coreset from being truly equivalent to the original dataset.
We propose FAST (Frequency-domain Aligned Sampling via Topology), the first DNN-free distribution-matching coreset selection framework that formulates coreset selection task as a graph-constrained optimization problem grounded in spectral graph theory and employs the Characteristic Function Distance (CFD) to capture full distributional information (i.e., all moments and intrinsic correlations) in the frequency domain. We further discover that naive CFD suffers from a “vanishing phase gradient” iss-
ue in medium and high-frequency regions; to address this, we introduce an Attenuated Phase-Decoupled CFD. Furthermore, for better convergence, we design a Progressive Discrepancy-Aware Sampling strategy that pro
*Equal contribution. †Corresponding author.
gressively schedules frequency selection from low to high. This preserves global structure before refining local details, enabling accurate matching with few frequencies while preventing overfitting. Extensive experiments demonstrate that FAST significantly outperforms state-of-the-art coreset selection methods across all evaluated benchmarks, achieving an average accuracy gain of 9.12%. Compared to other baseline coreset methods, it reduces power consumption by 96.57% and achieves a 2.2× average -
speedup even on CPU with 1.7GB of memory, underscoring its high performance and energy efficiency.
1. Introduction
Deep Neural Networks (DNNs) have achieved—and in some cases even surpassed—human-level performance across diverse domains such as vision [5, 12, 26], programming [7, 24, 31], and science [18, 28]. This remarkable success is primarily driven by the availability of massive training datasets [15, 25, 35]. However, training on such large-scale data incurs prohibitive energy costs, as illustrated in Fig. 1, the total energy consumption can reach up to 103 MWh, exceeding the annual electricity usage of -
numerous households by several orders of magnitude. To mitigate this challenge, a variety of dataset compression techniques have been proposed to condense large-scale datasets into compact yet representative subsets [17, 41, 45, 46]. These methods have found widespread adoption in tasks such as neural architecture search, continual learning [33, 43], and transfer learning [23]. Among existing compression techniques, coreset selection [17, 19, 29] offers superior efficiency over synthesisbased dist-
illation [41, 45, 46] by avoiding computationally intensive nested gradient descent, making it ideal for ondevice deployment. Furthermore, it preserves the fidelity of data and mitigates the failure modes of synthesis methods,
1
arXiv:2511.19476v1 [stat.ML] 22 Nov 2025

Annual household electricity consumption (MWh) AI Model Training Energy (MWh) Dataset Size (GB)
MWh/GB (Log)
ImgNet
MNIST CIFAR10
COCO
1998 2010 2012 2014 2018 2019 2020 2021 2022 2023 2024
BERT DALL-E
GPT2
GPT3
PaLM ChCA
Gemini
101
102
103
104
~5000x Energy Gap
Figure 1. The energy consumption of training exceeds the annual electricity usage of numerous households by several orders of magnitude.
which often struggle to generate highly discriminative samples for classification tasks with high inter-class similarity.
Existing coreset selection methods can be broadly categorized into two paradigms: (i) DNN-based approaches that adopt a proxy DNN to evaluate each sample’s contribution to training performance. While effective, these methods are intrinsically tied to specific network architectures, thereby introducing architectural bias and limiting generalization; and (ii) DNN-free methods that eschew DNNs entirely and rely on heuristic criteria, but often lack rigorous theoretical guarantees. Critically, the eff-
icacy of coreset selection hinges on the metrics used to identify representative samples. However, neither paradigm explicitly enforces complete distributional alignment, resulting in subsets that lack comprehensive data coverage and cannot fully represent the original dataset, thereby exhibiting instability and poor generalization. Moreover, prevalent distribution metrics such as MSE [39], KL [21], MMD [16], and CE [22] are constrained by the difficulty of selecting model families or kernels [3] -
with appropriate representational capacity, rendering them incapable of capturing high-order moment differences or multivariate correlations [11, 34], and ultimately leading to degraded performance, as visualized in Fig. 2.
To address these issues, recent study [41] has introduced gradient-based distribution matching methods, which adopt continuous optimization in the feature space to improve matching accuracy. However, its application has been largely confined to synthesis-based dataset distillation, since direct continuous optimization in the feature space deviates from the discrete data manifold, preventing the discovery of corresponding real samples in the original dataset.
To bridge this continuous-to-discrete gap, we introduce topology-aware constraints based on spectral graph theory into the loss function, ensuring that the optimized samples maintain a one-to-one correspondence with the original data space and preserve critical local topological structures. This enables, for the first time, the application of distribution matching method with continuous optimization based on gradient descent to the discrete coreset selection task. Most of important, we leverage fr-
equency-domain features as the evaluation criterion, specifically employing the Characteristic Function Distance (CFD). The underlying Char
acteristic Function (CF) uniquely captures all correlations and high-order moments by projecting them into the frequency domain, thereby providing a more rigorous guarantee of distributional equivalence. Furthermore, we identify and address a critical vanishing phase gradient problem in standard CFD, where phase–magnitude coupling blinds the optimizer to medium and high-frequency details (e.g., edges and textures, as illustrated in Fig. 3). We propose a novel Attenuated Phase-Decoupled CFD (PD-CFD-
) to resolve this issue and experimentally validate its superiority on datasets rich in high-frequency content (e.g., DTD [10]). We further find that the efficacy of CFD significantly depends on frequency selection. We observe that premature inclusion of high-frequency components destabilizes optimization by causing an overemphasis on fine details while mismatching the global structure. To address this, we design Progressive Discrepancy-Aware Sampling (PDAS), a curriculum-learning strategy that ma-
tches frequencies progressively from low to high, ensuring stable and accurate alignment with a minimal set of essential frequencies. Building upon these insights, we propose Frequencydomain Aligned Sampling via Topology (FAST) framework. FAST improves accuracy by an average of 9.12% over state-of-the-art (SOTA) coreset selection methods, even when running on a CPU with only 1.7 GB of memory, while reducing power consumption by 96.57% and achieving a 2.2× speedup on average, benefited from the fas-
t convergence realized by powerful distribuction matching of our proposed methods. Our main contributions are as follows: 1. We propose a novel, topology-aware, DNN-free coreset selection framework that, for the first time, enables distribution matching in the discrete domain while eliminates architectural bias. 2. We are the first to employ Characteristic Function Distance (CFD) in coreset selection to evaluate full distributional information, and we introduce Attenuated PhaseDecoupled CFD to add-
ress the vanishing phase gradient issue in medium and high-frequency regions. 3. We conduct a thorough analysis of frequency selection and propose the curriculum-learning-based Progressive Discrepancy-Aware Sampling strategy for robust matching with a minimal number of frequencies. 4. Our method achieves SOTA performance with significantly lower computational overhead, making it suitable for deployment in resource-limited environments.
2. Related Work
Dataset Condensation. Dataset Condensation (DC) comprises two main branches: synthesis-based distillation [6, 41, 45, 46, 48] and sampling-based coreset selection. Coreset selection circumvents the prohibitive nested training overhead of distillation, offering superior efficiency, and is broadly categorized as either DNN-based or DNN-free.
2

0°
30°
60°
90°
120°
150°
180°
210°
240° 270°
300°
330°
(a) Ground Truth
0°
30°
60°
90°
120°
150°
180°
210°
240° 270°
300°
330°
(b) Disturbed
0°
30°
60°
90°
120°
150°
180°
210°
240° 270°
300°
330°
(c) MSE
0°
30°
60°
90°
120°
150°
180°
210°
240° 270°
300°
330°
(d) KL
0°
30°
60°
90°
120°
150°
180°
210°
240° 270°
300°
330°
(e) CFD
Stronger representational capacity, stronger alignment power
Figure 2. Comparison of distribution alignment under different metrics in frequency domain (on complex-plane). MSE aligns the mean, KL aligns both mean and variance, while CFD captures complete distributional structures in the frequency domain.
(a) Original (b) Low-frequency (c) High-frequency
(d) Amplitude (e) Amplitude Spectrum (f) Phase
Figure 3. Low frequencies (b) capture smooth shading and coarse shapes; high frequencies (c) capture edges and fine textures. Amplitude (d) (and corresponding spectrum (e)) encodes the energy distribution across frequencies, while phase (f) specifies the spatial arrangement of structures.
DNN-based approaches typically rely on a fixed (often DNN-provided) feature embedding for geometric sampling [8, 36], or utilize training signals (e.g., losses, gradients) supplemented by adjustment mechanisms to identify informative samples [19, 20, 30, 32]. However, this deep coupling with the proxy DNN introduces strong architectural bias, leading to poor generalization and incurring significant computational overhead. DNN-free methods eliminate this bias and are more efficient, but existing wo-
rk is scarce, the only representative method [47] relies on manifold reduction and heuristic grid sampling—an unreliable approach lacking stable guarantees across diverse datasets. Critically, both paradigms face inherent limitations: (1) Their selection metrics (e.g., MSE, KL) are insufficient to capture full distributional discrepancies. (2) Their guiding principles are incomplete, either emphasizing specific training contributions, compromising generalization, or relying on heuristics that matc-
h only low-order statistics, leading to instability. As a result, the selected coresets fail to reflect the full data distribution, ultimately degrading downstream performance. Characteristic Function. The Characteristic Function (CF) of a probability distribution (its Fourier transform) uniquely determines the distribution in the frequency do
main, making the Characteristic Function Distance (CFD) an effective metric for comparing complex distributions. In statistics, it serves as a powerful non-parametric statistic for two-sample testing [9, 13, 14]. This capability has also been adopted in Generative Models, where CFD (or its variant, MMD [2]) is employed as a loss function to train GANs [4] by minimizing the real-to-generated discrepancy. Similarly, in domain adaptation, CFD is used as a domain discrepancy metric to learn domain-inv-
ariant representations [42]. However, to the best of our knowledge, no prior work has utilized CFD as an evaluation metric for coreset selection. The only work applying frequency-domain features to dataset compression is NCFM [41], but it is limited to synthesis-based methods and thus inapplicable to discrete coreset selection. Furthermore, NCFM suffers from two critical limitations: (1) It relies on DNNs for feature extraction and frequency selection, thereby inheriting architectural bias, lackin-
g interpretability, and leading to suboptimal frequency selection. (2) Its loss function couples phase with magnitude, failing to distinguish phase differences in high-frequency regions where magnitude decays.
3. Method
3.1. Graph Construction
To provide a stable optimization space for distribution matching, we first capture the intrinsic manifold structure of the data. We construct a multi-scale weighted undirected graph B ∈ RN×N based on the fuzzy topological theory from UMAP [27], which serves as the foundation for all subsequent feature extraction and topological constraints. Multi-Scale Manifold Graph Construction. To capture geometry at multiple scales, rather than relying on a single k-nearest neighbor scale, we construct graphs -
for a set of knearest neighbor scales {k1, k2, . . . }. For each scale k and data point xi, we find the local connectivity distance ρi and the local scale factor σi by solving the following equation:
k
X
j=1
exp − max(0, d(xi, xij ) − ρi)
σi
= log2(k) (1)
This defines the directed edge weights. We first symmetrize these weights for each scale k using the probabilistic t
3

(c) GraphEncoder
Multi-k kNN
Mutual Refinment
MST Enhancement
Graph Laplacian
(b) GraphDecoder
Cost Matrix
Graph
Encoder
Graph
Decoder
GSAC
Lgraph
Ldiv
Lmatch Ltotal
ωN
ω4ω3ω2ω1ω0
0°
30°
60°
90°
120°
150°
180°
210°
240°
270° 300°
330°
0°
30°
60°
90°
120°
150°
180°
210°
240° 270° 300°
330°
LCF = φYref ω − φ෩Y ω 2
Lpha = θYref ω − θ෩Y ω
2
PD-CFD
ω0
ω2
ωk
ω0
ω2
ωk
ω0 ω2 ωk
(a) Coreset Selection with Distribution Matching
Coreset
Anisotropic Frequency Space
Original Dataset
PD-CFD
TOP-K
Pre-optimized
Gradient for Optimization
Initialization Matching Loss
Phase Extraction
CurricSchd
PDAS Selected
Frequencies
Original
Coreset
Figure 4. (a) Overview of proposed FAST. Graph-Structure-Aware Constraints (GSAC) preserves topological consistency, while Progressive Discrepancy-Aware Sampling (PDAS) progressively aligns distributions via phase-decoupled characteristic function distance (PDCFD). (b)Graph Decoder. Maps the optimized coreset back to the original data space, ensuring structural consistency. (c) Graph Encoder. Constructs the graph topology based-on spectral graph theory.
conorm (a fuzzy set union), Ak = Ak + AT
k − Ak ◦ AT
k. Subsequently, we fuse the graphs Ak from all scales into a single multi-scale adjacency matrix B by iteratively applying the same fuzzy set union. Finally, we ensure global connectivity by incorporating the graph’s Minimum Spanning Tree (MST) via B = B ∪ MST(B).
Spectral Embedding as Manifold Features. From the multi-scale graph B, we compute its Symmetric Normalized Laplacian:
Lsym = I − D−1/2BD−1/2 (2)
where D is the diagonal degree matrix. The eigenvectors of Lsym serve as a discrete approximation of the manifold’s Laplace-Beltrami operator, revealing its intrinsic geometry. We extract the d eigenvectors (d ≪ N ) corresponding to the smallest non-zero eigenvalues to form the N × d manifold feature matrix Vfull. This matrix provides a robust representation of the original data’s geometry and serves as the reference for all subsequent optimizations.
3.2. Topology-Aware Alignment and Regularization
Our method optimizes a continuous coreset representation Y ̃ ∈ RM×d (M ≪ N ) by aligning its frequency-domain features with the reference Vfull. The core challenge lies
in the continuous-to-discrete gap: Y ̃ must ultimately map back to M discrete samples from Vfull. To address this, the optimization is guided by a composite constraint system that enforces both diversity and topological alignment.
Diversity Constraint. To ensure Y ̃ spans the feature space and covers the full distribution, we introduce a diversity loss Ldiv based on Determinantal Point Processes (DPP). We minimize Ldiv = − log det(K), where K = ΨΨT + δI
is the Gram matrix of the RFF features (Ψ) of Y ̃ , explicitly penalizing feature redundancy.
Graph-Aware Alignment Constraint. To bridge the gap between continuous optimization and discrete selection, we introduce a complementary constraint inspired by graph alignment (GUNN), which maintain structural consistency between Y ̃ and a subset of Vfull throughout the optimization. This constraint is composed of two main components.
At each optimization step, we find an optimal, bijective mapping π : {1, .., M } → {1, .., N } by solving the linear assignment problem using the Hungarian Algorithm. This mapping assigns each point yi ∈ Y ̃ to a unique real feature vj ∈ Vfull. The assignment is guided by a graph-aware cost matrix C ∈ RM×N whose entries consider both Euclidean proximity and topological significance:
Ci,j = ||yi − vj ||2
deg(vj) + ε (3)
where deg(vj) is the degree of node vj in the original graph B, anchoring points in continuous space to real nodes that are central to the manifold’s topology.
Based on the computed optimal mapping π, we apply two alignment losses: (i) A Positional Loss (Lmatch) that
4

pulls each yi to its assigned discrete anchor Vfull[π(i)]:
Lmatch = 1
M
M
X
i=1
||yi − Vfull[π(i)]||2 (4)
and (ii) A Topological Loss (Lgraph) that preserves the original structure of the selected anchors. Let Lsub be the M ×M submatrix of Lsym indexed by π. The loss is the Laplacian regularizer:
Lgraph = Tr(Y ̃ T LsubY ̃ ) (5)
Lgraph ensures that if anchor points vπ(i), vπ(j) are strongly connected in the original manifold, their continuous counterparts yi, yj also remain close in the optimization space.
3.3. Phase-Decoupled Characteristic Function Distance
We optimize the coreset Y ̃ by minimizing its distance in the CF space from the reference dataset Yref. We build our objective function by first defining the standard CFD. From CF to CFD. The theoretical Characteristic Function (CF) of a d-dimensional distribution P provides a complete frequency-domain representation, defined as φP (t) = EX∼P [ei⟨t,X⟩] = R
Rd ei⟨t,x⟩dP (x), where t ∈ Rd is the frequency vector. In practice, we use the Empirical Characteristic Function (ECF) computed from a set of samples Y:
φY (t) = 1
|Y |
X
y∈Y
ei⟨t,y⟩ (6)
Our goal is to match the ECF φY ̃ (t) of the coreset, to that of the reference set φYref (t), over a frequency distribution t. The L2 CFD measures the distance between two theoretical distributions P and Q by integrating the squared difference of their CFs over a weighting function w(t): D2(P, Q) = R
Rd |φP (t) − φQ(t)|2w(t)dt. In practice, the empirical CFD (ECFD) replaces theoretical CFs with their empirical estimates and approximates the integral as an expectation over a frequency sampling distribution p(t) (corresponding to w(t)):
LCFD = Et∼p(t)[|φY ̃ (t) − φYref (t)|2] (7)
This standard ECFD serves as the foundation for our main loss Lmain.
The Vanishing Phase Gradient Problem. To analyze the behavior of D2w, we examine its integrand in polar form with magnitude A(t) = |φ(t)| and phase θφ(t) (omitting t for brevity):
|φY ̃ − φYref |2 = A2
Y ̃ + A2
Yref − 2AY ̃ AYref cos(θY ̃ − θYref ) (8)
This expansion exposes the Vanishing Phase Gradient problem: the contribution of the phase difference ∆θ = (θY ̃ − θYref ) is scaled by (coupled with) the magnitude product AY ̃ AYref . According to the Riemann–Lebesgue lemma (see Appendix), magnitudes A(t) → 0 as frequency ||t|| →
∞. This coupling suppresses the phase gradient in mediumhigh frequency regions, causing naive CFD to ignore essential information before the phase degenerates into highfrequency noise. Phase-Decoupled CFD Loss. To address this, we introduce a Phase-Decoupled loss function LCF . This loss is defined for each sampled frequency ω ∼ p(t) used in the Monte Carlo estimation:
LCF (ω) = |φYref (ω)−φY ̃ (ω)|2 +λφ(ω)(θYref (ω)−θY ̃ (ω))2 (9) where θ(ω) denotes the phase angle, and λφ(ω) represents a phase-penalty term. Constant penalty λφ is suboptimal as it amplifies high-frequency noise (where A(t) → 0 and phase θ(t) is unstable). Therefore, we propose PD-CFD, using a penalty λφ(ω) that adaptively decays in noisy, highfrequency regions:
λφ(ω) = λp
1 + α||ω||2 (10)
Here, λp and α control the penalty and its decay rate. This formulation amplifies the mid-range phase signal (where A(ω) has decayed but λφ(ω) remains significant) while suppressing noise. The final objective is the average of this loss over k adaptively sampled frequencies {ωj}k
j=1:
Lmain = 1
k
k
X
j=1
LCF (ωj) (11)
3.4. Progressive Discrepancy-Aware Sampling
Moment Encoding in Characteristic Functions. The characteristic function φ(t) provides a complete representation of a distribution by systematically encoding all of its moments. The mixed partial derivatives of φ(t) evaluated at t = 0 correspond directly to the mixed raw moments, ∂αφ(0) = i|α|E[Xα]. This property enables φ(t) to be expressed through its multivariate Taylor expansion:
φ(t) =
X
|α|≤m
1
α! ∂αφ(0)tα =
X
|α|≤m
i|α|
α! E[Xα]tα (12)
This expansion reveals that the value of φ(t) at any nonzero frequency t is a weighted polynomial combination of all its constituent moments E[Xα]. Furthermore, the logCF, ψ(t) = log φ(t), similarly encodes the mixed cumulants κα, which capture higher-order dependencies, via its derivatives at the origin: ∂αψ(0) = i|α|κα. Detailed derivations are provided in the Appendix. The objective of the CFD is to estimate the integral measure D2w(P, Q) = R |φP (t)−φQ(t)|2w(t)dt. The momentencoding property i-
mplies that if two distributions P and Q differ in any k-th order moment, their characteristic functions φP (t) and φQ(t) must diverge in certain regions of the frequency domain. Therefore, the frequency sampling
5

distribution p(t) (corresponding to w(t)) is a critical hyperparameter that determines the estimator’s sensitivity to specific types of distributional discrepancies.
Anisotropic Frequency Initialization. Instead of adopting a standard Gaussian frequency bank N (0, I), we first perform an initialization stage to construct an anisotropic frequency space that is sensitive to the current data distribution Yref. This stage partitions the frequency selection range into low, medium, and high-frequency bands based on the norm ∥ω∥. For each band, we optimize a set of anisotropic scaling (variance) coefficients sband by maximizing the CF difference within that band: s∗
band = arg msax Et∼N (0,diag(s2)) [LCF (t) | t ∈ Band]
(13) This procedure assigns a data-driven anisotropic scaling to each frequency in the frequency space, enhancing sensitivity to the structural differences of the dataset. The resulting Anisotropic Frequency Library (AFL) serves as the foundation for subsequent progressive sampling.
Progressive Discrepancy-Aware Sampling. In the main optimization loop, we employ a curriculum-based strategy for adaptive frequency selection from the pre-optimized AFL. We define a frequency norm upper bound τt that progressively increases with iteration t. The candidate frequency pool at iteration t is restricted to Ct = {ω ∈ AFL | ∥ω∥ ≤ τt}. This progressive strategy ensures the model first matches low-frequency global statistics before gradually shifting to high-frequency fine-grained structur-
es. Within Ct, importance sampling is performed based on the current discrepancy. The probability pt(ω) of sampling a frequency ω ∈ Ct is proportional to a composite score:
pt(ω) ∝ LCF (ω) · D(ω) (ω ∈ Ct) (14)
where LCF (ω) is the total phase-decoupled loss defined in Eq. (9), D(ω) represents a diversity term that penalizes high correlations with previously selected frequencies. This sampling strategy ensures that each batch Bt for gradient estimation consistently focuses on the most informative, highdiscrepancy frequencies within the current boundary τt.
3.5. Joint Optimization
We guide the gradient descent optimization of the coreset Y ̃ by minimizing a comprehensive loss function Ltotal that combines the primary frequency-domain matching loss with topological regularization terms:
Ltotal = Lmain + λdivLdiv + Lalign (15)
where Lalign is a composite constraint term that includes two key sub-terms from our dual alignment constraint:
Lalign = λmatchLmatch + λgraphLgraph (16)
4. Experiment
4.1. Setup
Datasets. We evaluate FAST on multiple benchmarks of varying scales and complexities: (1) Small-scale: CIFAR
10 (10 classes, 60k 32×32 images), CIFAR-100 (100 classes, 60k 32×32 images), and SVHN (10 classes, 99k 32×32 images). (2) Medium-scale: Tiny ImageNet (200 classes, 120k 64×64 images). (3) Large-scale and texturerich: DTD (47 classes, 5,640 images resized to 224×224) and RESISC45 (45 classes, 31k 256×256 images). Models. We comprehensively evaluate the generalization of our method on a diverse range of network architectures. These include standard CNNs (ResNet18, ResNet50) as general benchmarks, l-
ightweight CNNs (ShuffleNetV2, MobileNetV2) and a Transformer (ViT). All models are trained for 200 epochs using SGD with a momentum of 0.9, weight decay of 5 × 10−4. The batch size is set to 256 for 32×32 datasets and 64 for 224×224 or 256×256 datasets. Sampling ratios of 10%, 20%, and 30% are used to assess performance under different compression levels. Baseline methods. We compare FAST against a comprehensive set of coreset selection baselines, categorized as shown in Table 1. Among them, only-
 FAST and NMS are DNN-free methods. Hardware Platform. Experiments are conducted on two platforms: (1) CPU/GPU: Intel(R) Xeon(R) Platinum 8358P CPU, NVIDIA A100 GPU (80 GB), and 512 GB system memory; (2) Edge: Rockchip RK3588 (4×Cortex-A76 and 4×Cortex-A55, NPU disabled) with 4 GB memory. Energy measurements are obtained using Zeus toolkit [44] and Intel’s Running Average Power Limit (RAPL) interface.
4.2. Results and Analysis
Overall Performance. We validated FAST’s effectiveness across datasets of different scales and keep rates. As demonstrated in Table 1, FAST consistently outperforms all competing baselines. It achieves an average accuracy improvement of 17.63% over DNN-based methods and 9.12% over SOTA DNN-free methods. Critically, FAST demonstrates a substantial 21.93% average performance gain on DTD and RESISC45, datasets characterized by complex textures and edges (further analyzed in Appendix). This SOTA perfo-
rmance derives from optimizing full distributional equivalence rather than model-dependent information and heuristics (e.g., learning difficulty or training trajectory). As shown in Fig. 5, we observe a positive correlation between the coreset’s distributional alignment and downstream accuracy, demonstrating the robustness of this model-agnostic approach. The exceptional performance on complex datasets directly stems from the performance of PD-CFD to captures the higher-order moments and finegrain-
ed structures (textures, edges) that other metrics miss while also resolving the vanishing phase gradient problem. Cross-Architecture Generalization. As demonstrated in Fig. 6, FAST exhibits strong cross-architecture generalization. When evaluated across diverse architectures at multiple keep rates 10%, 20%, 30%, our coreset shows a negligi
6

Table 1. Results of FAST on CIFAR-10/100, SVHN, TinyImageNet, and high resolution datasets DTD and RESISC-45. (Dist. M.: Distribution Matching, Grid S.: Grid Sampling, Des. B.: Desicion Boundary, Grad. M.: Gradient Matching, Bil. O.: Bilevel Optimization)
Category
Dataset CIFAR-10 CIFAR-100 RESISC-45 SVHN DTD TinyImageNet Ratio(%) 10 20 30 10 20 30 10 20 30 10 20 30 10 20 30 10 20 30
Dist. M. FAST 90.32 93.39 94.93 66.61 72.79 75.85 85.00 89.32 91.14 92.86 94.53 95.30 45.77 54.69 61.85 34.55 51.49 56.85
Grid S. NMS 86.57 90.18 92.58 55.13 63.77 68.79 74.26 80.12 83.37 91.76 93.89 94.08 38.63 50.28 59.94 31.41 47.97 52.30
Geometry Herding 71.49 72.87 78.37 40.44 50.19 54.89 36.57 49.62 56.86 61.72 86.50 93.00 17.02 26.84 45.22 22.24 39.55 49.78
kCenter 77.82 83.99 88.63 41.29 53.58 61.33 69.45 80.36 83.54 81.73 90.33 93.36 26.22 37.64 44.46 22.06 42.01 52.48
Scoring
Entropy 56.37 68.92 81.68 25.93 39.49 49.54 47.18 65.62 76.38 69.67 90.19 94.05 17.25 29.58 33.82 14.61 28.12 41.45 Forget 69.07 80.63 87.18 48.07 58.32 65.70 72.64 79.98 81.42 77.50 91.81 93.90 36.73 50.24 55.33 30.31 47.84 53.86 GraNd 45.46 62.67 75.48 19.64 27.89 39.85 35.72 55.70 69.25 50.99 86.47 92.85 24.60 37.28 41.33 10.45 20.07 30.09
Des. B.
Cal 81.76 81.88 85.86 56.04 63.23 68.12 64.22 70.36 73.15 81.19 87.69 90.19 40.45 49.72 58.07 30.92 47.41 52.86 Dfool 59.78 75.19 81.21 33.47 43.82 53.20 57.79 70.16 76.71 67.33 87.88 93.07 24.88 40.10 48.79 21.74 40.71 47.85
Grad. M.
Craig 61.21 70.01 81.24 36.45 43.17 53.05 61.23 74.21 77.02 65.75 89.63 93.15 37.18 46.57 50.90 24.71 38.05 45.14 GradM 60.73 68.46 78.85 32.47 43.47 48.31 52.62 62.94 73.32 62.17 86.24 92.62 33.49 46.41 53.44 27.35 39.60 50.25
Bil. O. Glister 57.42 69.45 79.22 31.24 40.83 50.52 53.01 62.84 72.12 58.70 86.23 92.36 34.15 45.81 49.90 26.07 39.09 49.50
Submod.
FL 78.83 82.55 86.25 53.62 58.38 62.99 76.05 81.27 83.14 80.92 90.08 93.22 40.60 45.46 44.70 31.75 45.04 50.99 GC 85.02 85.34 89.06 58.18 64.86 69.22 70.57 75.91 78.04 88.24 90.96 93.13 35.62 50.45 54.71 31.66 46.76 51.88 DQ 85.21 87.90 90.98 55.61 60.12 64.67 72.12 78.37 80.12 90.07 92.24 93.18 36.12 49.13 55.84 31.24 45.79 52.03
Whole Dataset 95.56 80.59 94.01 96.37 71.65 66.35
Table 2. Comparison of computational efficiency. (FAST is CPU-only, incurring zero GPU overhead)
Works FAST-CPU FAST-EDGE kCenter NMS DQ Cal Craig DeepFool GraNd Forgetting GradM Glister Submodular Uncertainty
Time/s 353.0 960.0 616.7 398.0 426.3 542.8 437.9 1079.0 4403.0 410.3 431.4 425.0 811.3 414.3 Energy/Wh 1.409 0.67 50.66 21.01 34.57 42.35 37.2 96.46 402.4 33.81 35.47 39.36 59.02 39.05 Accuracy 90.32 90.31 78.2 88.0 85.2 72.8 64.6 63.3 54.6 68.5 63.9 69.8 76.0 60.7
Accuracy (%)
50
60
70
80
90
100
Ours
NMS
K-greedy
GC
FL
Cal
Glister
Forgetting
Herding
Craig
Gradmatch
Deepfood
Margin
Cd
Leasconf
Entropy
Grand
Alignment Score (Higher is Better)
0.0
5.0
7.5
10.0
12.5
15.0
2.5
Alignment Score (Right Axis) Accuracy (Left Axis)
Figure 5. Relationship between downstream training accuracy and distributional equivalence. Results indicate that enforcing distributional equivalence leads to improved performance.
77.00%
82.00%
87.00%
92.00%
97.00%
102.00%
ResNet18 ResNet50 ShuffleNetV2 MobileNetV2 ViT
FAST NMS Herding Forget Cal GradM Glister GC
Accuarcy
Downstream Models
Figure 6. Cross-model generalization (Normalized). DNN-based methods suffer from performance degradation when transferring to other architectures while DNN-free approaches (FAST and NMS) remain stable performance.
ble accuracy drop (average 0.53%, even even achieves accuracy gains on some models) upon cross-architecture transfer, while competing DNN-free and DNN-based methods degrade by 3.02% and 8.68% on average.
Probability Density Initialized (74.74%) MSE (81.16%) CE (85.59%) KL (83.17%)
CFD (Ours 90.32%)
Ground Truth Distribution
Best Distribution Match
0 50 100 150 200 250 Value
0.000
0.002
0.004
0.006
0.008
Figure 7. Ablation on distribution alignment with different metrics
This strong generalization confirms that FAST is a truly DNN-free method which seeks fundamental distributional equivalence rather than fitting a proxy model. By avoiding architectural bias, the resulting coreset faithfully mimics the full dataset’s behavior across diverse downstream scenarios, embodying a valuable Write once, run anywhere property.
Computational Efficiency. Given the importance of computational efficiency, especially on resource-constrained edge devices, we evaluate FAST’s efficiency on CIFAR-10 (10% keep rate) against strong baselines. As detailed in Table 2, we assess the total cost (sampling and training with early stopping) via runtime and energy. As shown, DNNbased methods, that require network inference for sampling, inevitably suffer from high energy consumption and slow sampling speeds. While gradient or trajectory-b-
ased methods may converge faster during training, their substantial sampling overhead negates this benefit. In contrast, FAST not only drastically reduces sampling time but also enables downstream models to achieve comparable accuracy with fewer training epochs. Furthermore, the FAST-edge results
7

(b) Diversity Const. (c) Topology Const.
Selected Samp.
(a) Graph-Aware Alignment Const.
82.5
85.0
87.5
90.0
92.5
95.0
443
461
479
490 496 498 500 500 500 500
440
460
480
500
0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1.0
(d) Abaltion Performance
Accuracy(%)
70
90
80 75
85
95 90.32 89.26 87.32 85.12
74.74
Std. w/o Mcth w/o Grpw/o Div Inital.
Figure 8. Ablation on graph regulations. Removing any of the three constraints—(a) GUNN (Lalign), (b) DPP (Ldiv), or (c) graph regularization (Lgraph)—leads to degraded alignment, coverage, or topology, confirming their complementary roles in maintaining stability.
in Table 2, confirming its potential to be deployed on edge devices with limited resources.
Performance on LLM Datasets. We evaluate FAST on LLM tuning using the Alpaca [37] dataset. Coresets with 10%, 20% and 30% keep ratios are sampled to finetune LLaMA-7B [38]and the resulting models were assessed on the InstructEval benchmark [1]. FAST surpasses the SOTA DNN-free method by 2.6% in average accuracy, demonstrating its effectiveness on semantically rich LLM tasks. Detailed results and discussion are provided in Appendix.
4.3. Ablation Ablation on Distribution Metrics. Building on our analysis in Fig. 2, we ablate the distribution metric on CIFAR-10 (10% keep rate, ResNet18 backbone) by replacing PD-CFD with KL, CE, and MSE, holding all other parameters constant. As shown in Fig. 7, using MSE as the metric results in significant high-order moment deviations and a 9.16% accuracy drop. Similarly, KL and CE, while improving variance alignment, still fail to match skewness and kurtosis, causing accuracy drops of 7.15% -
and 4.73%, respectively. Since the effectiveness of the MMD method directly depends on the chosen kernel function, we will not expand the discussion here. But when the chosen kernel is insufficient to align high-order moments, the MMD method still cannot guarantee complete distribution alignment. We provide more detailed proof in Appendix.
Ablation on Spectral Graph Regularization. We conduct an ablation study to quantify the efficacy of our graph constraints. Results in Fig. 8 demonstrate the necessity of each component. Lacking GUNN (Lalign), optimized points clump and map to a few identical samples, causing degradation in sampling quality. Without DPP (Ldiv), points are attracted to a few high-density modes, resulting in poor coverage. Removing graph regularization (Lgraph) disrupts local topology by inducing excessive local clus-
tering. These failures highlight the core difficulty of addressing a discrete sampling task through continuous optimization. The continuous-to-discrete gap causes gradient descent (with only LCF ) to converge to degenerate solutions where multiple proxies y ̃i collapse into a single mode, shrinking the effective coreset. Our constraints bridge this gap: DPP (Ldiv) enforces spatial diversity in the continuous space, while GUNN (Lalign) and Lgraph ensures topological consistency with the discrete ma-
nifold, preventing mode collapse and ensuring a stable, representative coreset.
Progressive Discrepancy-Aware Selec. Non-Progr. Discrepancy-Aware Selc. Progressive Energy-Based Selection Progressive Uniform Selection Non-Progressive Uniform Selection ColinearSelection
0.0
0.2
0.6
0.4
0.8
1.0
1.2
Loss
Iteration
0 50 100 150 200 250 300 350 400
Figure 9. Ablation on PDAS. PDAS achieves stable and rapid convergence by progressively selecting discriminative frequencies, while other strategies yield unstable and suboptimal optimization.
40
50
60
70
80
90
100
1 8 16 32 64 128 256 512 102420484096
Accuracy-FAST Accuracy-NCFM
Accuarcy (%)
# Selected frequencies
Figure 10. Effect of the number of selected frequencies.
Ablation on Frequency Selection. We validate our PDAS by fixing the frequency count (64) and comparing it against baselines in Fig. 9. The results confirm the critical importance of the selection strategy: (1) A worst-case collinear set degenerates the effectiveness of the CFD metric, causing optimization failure. (2) Magnitude-based Top-K selection performs poorly, as it ignores the distributional discrepancies and fails to select the most discriminative frequencies. (3) Non-progressive strategie-
s are also suboptimal, as their erratic global selection (e.g., alternating between low and high frequencies) leads to unstable convergence. In contrast, our adaptive, curriculum-based PDAS achieves optimal matching, stably converges within fewer iterations .
We further analyze the impact of the total frequency count, as illustrated in Fig. 10. FAST saturates significantly faster and requires far fewer frequencies to reach optimal performance than the NCFM baseline. This high frequency utilization efficiency is attributable to PDAS prioritizing frequencies with the largest contribution to the current distributional discrepancy under pre-optimized anisotropic frequency distribution. This not only yields superior performance but also reduces the computat-
ional overhead of CFD. Ablation on Phase Constraint. We evaluate the phasedecoupled constraint (λp) on the detail-rich RESISC45 dataset (α fixed at 1.2). As shown in Fig. 11, performance
8

Phase Constraint Weight ( )
Test Accuracy
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 
90
88
88
Figure 11. Ablation on phase-decoupled constraint. Performance peaks at λp = 0.4, while larger weights introduce noise and degrade alignment. peaks at λp = 0.3, confirming its effectiveness in reinforcing high-frequency structures. For λp > 0.4, overemphasis on phase leads to high-frequency noise and degraded global consistency, reducing overall distributional alignment. To verify its generality, we integrate the optimal λp = 0.3 into NCFM [41], achieving a 19.12% accuracy gain on the detail-rich -
CUB-200-2011 [40] dataset at IPC=10, demonstrating its robust ability to capture fine-grained structures. Detailed results are provided in the Appendix.
5. Conclusion
In this work, we introduced FAST, the first DNN-free distribution-matching coreset selection framework that formulates coreset selection task as a graph-constrained optimization problem grounded in spectral graph theory and employs the Characteristic Function Distance (CFD) to capture full distributional information (i.e., all moments and intrinsic correlations) in the frequency domain. Our phase-decoupled CFD formulation further resolves the amplitude–phase coupling that obscures medium and highf-
requency structural information, enabling accurate preservation of fine-grained semantics and high-order dependencies. Extensive experiments across image classification, finegrained recognition, texture and remote-sensing datasets, and LLM instruction tuning demonstrate that FAST consistently outperforms both DNN-based and DNN-free baselines. Moreover, FAST’s excellent performance on LLM datasets further suggests that high-level semantic structure can be retained through spectral-graph-based distr-
ibution alignment, without explicit reliance on neural feature extractors. By leveraging geometric and frequency-domain signals, FAST preserves the underlying semantic neighborhood relations required for downstream reasoning. These experiments jointly demonstrate the robustness and broad generalization ability of FAST, even on tasks that rely heavily on semantic consistency. Beyond accuracy, FAST also delivers significant efficiency gains. Since FAST operates completely without neural network infe-
rence, and our PDAS strategy prioritizes only the most discriminative frequencies, the computation required for distribution alignment is drastically reduced. Furthermore, our graph-based manifold construc
tion avoids the repeated forward passes central to traditional gradient- or loss-based methods, which significantly lowers the sampling cost and highlights FAST’s practical utility for resource-constrained environments.
References
[1] Anirudh Ajith, Chris Pan, Mengzhou Xia, Ameet Deshpande, and Karthik Narasimhan. Instructeval: Systematic evaluation of instruction selection methods. In Findings of the Association for Computational Linguistics: NAACL 2024, Mexico City, Mexico, June 16-21, 2024, pages 43364350. Association for Computational Linguistics, 2024. 8 [2] Abdul Fatir Ansari, Jonathan Scarlett, and Harold Soh. A characteristic function approach to deep implicit generative modeling. In 2020 IEEE/CVF Conference on Comp-
uter Vision and Pattern Recognition, CVPR 2020, Seattle, WA, USA, June 13-19, 2020, pages 7476–7484. Computer Vision Foundation / IEEE, 2020. 3 [3] Mart ́ın Arjovsky, Soumith Chintala, and Le ́on Bottou. Wasserstein generative adversarial networks. In Proceedings of the 34th International Conference on Machine Learning, ICML 2017, Sydney, NSW, Australia, 6-11 August 2017, pages 214–223. PMLR, 2017. 2 [4] Florian Bru ̈ck. Generative neural networks for characteristic functions. CoRR, abs/2401.04778-
, 2024. 3 [5] Nicolas Carion, Francisco Massa, Gabriel Synnaeve, Nicolas Usunier, Alexander Kirillov, and Sergey Zagoruyko. End-toend object detection with transformers. In Computer Vision - ECCV 2020 - 16th European Conference, Glasgow, UK, August 23-28, 2020, Proceedings, Part I, pages 213–229. Springer, 2020. 1 [6] George Cazenavette, Tongzhou Wang, Antonio Torralba, Alexei A. Efros, and Jun-Yan Zhu. Dataset distillation by matching training trajectories. In IEEE/CVF Conference on Computer Visi-
on and Pattern Recognition, CVPR 2022, New Orleans, LA, USA, June 18-24, 2022, pages 10708–10717. IEEE, 2022. 2 [7] Mark Chen, Jerry Tworek, Heewoo Jun, Qiming Yuan, Henrique Ponde ́ de Oliveira Pinto, Jared Kaplan, Harri Edwards, Yuri Burda, Nicholas Joseph, Greg Brockman, Alex Ray, Raul Puri, Gretchen Krueger, Michael Petrov, Heidy Khlaaf, Girish Sastry, Pamela Mishkin, Brooke Chan, Scott Gray, Nick Ryder, Mikhail Pavlov, Alethea Power, Lukasz Kaiser, Mohammad Bavarian, Clemens Winter, Philippe -
Tillet, Felipe Petroski Such, Dave Cummings, Matthias Plappert, Fotios Chantzis, Elizabeth Barnes, Ariel Herbert-Voss, William Hebgen Guss, Alex Nichol, Alex Paino, Nikolas Tezak, Jie Tang, Igor Babuschkin, Suchir Balaji, Shantanu Jain, William Saunders, Christopher Hesse, Andrew N. Carr, Jan Leike, Joshua Achiam, Vedant Misra, Evan Morikawa, Alec Radford, Matthew Knight, Miles Brundage, Mira Murati, Katie Mayer, Peter Welinder, Bob McGrew, Dario Amodei, Sam McCandlish, Ilya Sutskever, and Wojciec-
h Zaremba. Evaluating large language models trained on code. CoRR, abs/2107.03374, 2021. 1 [8] Yutian Chen, Max Welling, and Alexander J. Smola. Supersamples from kernel herding. In UAI 2010, Proceedings of
9

the Twenty-Sixth Conference on Uncertainty in Artificial Intelligence, Catalina Island, CA, USA, July 8-11, 2010, pages 109–116. AUAI Press, 2010. 3 [9] Kacper Chwialkowski, Aaditya Ramdas, Dino Sejdinovic, and Arthur Gretton. Fast two-sample testing with analytic representations of probability measures. In Advances in Neural Information Processing Systems 28: Annual Conference on Neural Information Processing Systems 2015, December 7-12, 2015, Montreal, Quebec, Canada, pages 1981–1989, 2015. 3 [-
10] Mircea Cimpoi, Subhransu Maji, Iasonas Kokkinos, Sammy Mohamed, and Andrea Vedaldi. Describing textures in the wild. In 2014 IEEE Conference on Computer Vision and Pattern Recognition, CVPR 2014, Columbus, OH, USA, June 23-28, 2014, pages 3606–3613. IEEE Computer Society, 2014. 2 [11] William Cook. A hierarchical decomposition of kullbackleibler divergence: Disentangling marginal mismatches from statistical dependencies. CoRR, abs/2504.09029, 2025. 2 [12] Alexey Dosovitskiy, Lucas Beyer, Alexa-
nder Kolesnikov, Dirk Weissenborn, Xiaohua Zhai, Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Georg Heigold, Sylvain Gelly, Jakob Uszkoreit, and Neil Houlsby. An image is worth 16x16 words: Transformers for image recognition at scale. In 9th International Conference on Learning Representations, ICLR 2021, Virtual Event, Austria, May 3-7, 2021. OpenReview.net, 2021. 1 [13] T.W. Epps and Kenneth J. Singleton. An omnibus test for the two-sample problem using the empirical characteristic f-
unction. Journal of Statistical Computation and Simulation, 26 (3-4):177–203, 1986. 3 [14] V. Alba Ferna ́ndez, Mar ́ıa-Dolores Jime ́nez-Gamero, and Joaqu ́ın Mun ̃oz-Garc ́ıa. A test for the two-sample problem based on empirical characteristic functions. Comput. Stat. Data Anal., 52(7):3730–3748, 2008. 3 [15] Leo Gao, Stella Biderman, Sid Black, Laurence Golding, Travis Hoppe, Charles Foster, Jason Phang, Horace He, Anish Thite, Noa Nabeshima, Shawn Presser, and Connor Leahy. The pile: An 800gb -
dataset of diverse text for language modeling. CoRR, abs/2101.00027, 2021. 1 [16] Arthur Gretton, Karsten M. Borgwardt, Malte J. Rasch, Bernhard Scho ̈lkopf, and Alexander J. Smola. A kernel twosample test. J. Mach. Learn. Res., 13:723–773, 2012. 2 [17] Rishabh K. Iyer, Ninad Khargoankar, Jeff A. Bilmes, and Himanshu Asanani. Submodular combinatorial information measures with applications in machine learning. In Algorithmic Learning Theory, 16-19 March 2021, Virtual Conference, Worldwide, pages 72-
2–754. PMLR, 2021. 1 [18] John Jumper, Richard Evans, Alexander Pritzel, Tim Green, Michael Figurnov, Olaf Ronneberger, Kathryn Tunyasuvunakool, Russ Bates, Augustin ˇZ ́ıdek, Anna Potapenko, Alex Bridgland, Clemens Meyer, Simon A. A. Kohl, Andrew J. Ballard, Andrew Cowie, Bernardino RomeraParedes, Stanislav Nikolov, Rishub Jain, Jonas Adler, Trevor Back, Stig Petersen, David Reiman, Ellen Clancy, Michal Zielinski, Martin Steinegger, Michalina Pacholska, Tamas Berghammer, Sebastian Bodenstein, Dav-
id Silver, Oriol
Vinyals, Andrew W. Senior, Koray Kavukcuoglu, Pushmeet Kohli, and Demis Hassabis. Highly accurate protein structure prediction with AlphaFold. Nature, 596(7873):583–589, 2021. 1
[19] KrishnaTeja Killamsetty, Durga Sivasubramanian, Ganesh Ramakrishnan, Abir De, and Rishabh K. Iyer. GRADMATCH: gradient matching based data subset selection for efficient deep model training. In Proceedings of the 38th International Conference on Machine Learning, ICML 2021, 18-24 July 2021, Virtual Event, pages 5464–5474. PMLR, 2021. 1, 3
[20] KrishnaTeja Killamsetty, Durga Sivasubramanian, Ganesh Ramakrishnan, and Rishabh K. Iyer. GLISTER: generalization based data subset selection for efficient and robust learning. In Thirty-Fifth AAAI Conference on Artificial Intelligence, AAAI 2021, Thirty-Third Conference on Innovative Applications of Artificial Intelligence, IAAI 2021, The Eleventh Symposium on Educational Advances in Artificial Intelligence, EAAI 2021, Virtual Event, February 2-9, 2021, pages 8110–8118. AAAI Press, 2021. 3
[21] Diederik P. Kingma and Max Welling. Auto-encoding variational bayes. In 2nd International Conference on Learning Representations, ICLR 2014, Banff, AB, Canada, April 1416, 2014, Conference Track Proceedings, 2014. 2
[22] Alex Krizhevsky, Ilya Sutskever, and Geoffrey E. Hinton. Imagenet classification with deep convolutional neural networks. In Advances in Neural Information Processing Systems 25: 26th Annual Conference on Neural Information Processing Systems 2012. Proceedings of a meeting held December 3-6, 2012, Lake Tahoe, Nevada, United States, pages 1106–1114, 2012. 2
[23] Dong Bok Lee, Seanie Lee, Joonho Ko, Kenji Kawaguchi, Juho Lee, and Sung Ju Hwang. Self-supervised dataset distillation for transfer learning. In The Twelfth International Conference on Learning Representations, ICLR 2024, Vienna, Austria, May 7-11, 2024. OpenReview.net, 2024. 1
[24] Yujia Li, David H. Choi, Junyoung Chung, Nate Kushman, Julian Schrittwieser, Re ́mi Leblond, Tom Eccles, James Keeling, Felix Gimeno, Agustin Dal Lago, Thomas Hubert, Peter Choy, Cyprien de Masson d’Autume, Igor Babuschkin, Xinyun Chen, Po-Sen Huang, Johannes Welbl, Sven Gowal, Alexey Cherepanov, James Molloy, Daniel J. Mankowitz, Esme Sutherland Robson, Pushmeet Kohli, Nando de Freitas, Koray Kavukcuoglu, and Oriol Vinyals. Competition-level code generation with alphacode. CoRR, abs/2203.078-
14, 2022. 1
[25] Tsung-Yi Lin, Michael Maire, Serge J. Belongie, James Hays, Pietro Perona, Deva Ramanan, Piotr Doll ́ar, and C. Lawrence Zitnick. Microsoft COCO: common objects in context. In Computer Vision - ECCV 2014 - 13th European Conference, Zurich, Switzerland, September 6-12, 2014, Proceedings, Part V, pages 740–755. Springer, 2014. 1
[26] Ze Liu, Yutong Lin, Yue Cao, Han Hu, Yixuan Wei, Zheng Zhang, Stephen Lin, and Baining Guo. Swin transformer: Hierarchical vision transformer using shifted windows. In 2021 IEEE/CVF International Conference on Computer Vi
10

sion, ICCV 2021, Montreal, QC, Canada, October 10-17, 2021, pages 9992–10002. IEEE, 2021. 1 [27] Leland McInnes and John Healy. UMAP: uniform manifold approximation and projection for dimension reduction. CoRR, abs/1802.03426, 2018. 3 [28] Amil Merchant, Simon L. Batzner, Samuel S. Schoenholz, Muratahan Aykol, Gowoon Cheon, and Ekin Dogus Cubuk. Scaling deep learning for materials discovery. Nat., 624 (7990):80–85, 2023. 1 [29] Baharan Mirzasoleiman, Jeff A. Bilmes, and Jure Leskovec. Coresets fo-
r data-efficient training of machine learning models. In Proceedings of the 37th International Conference on Machine Learning, ICML 2020, 13-18 July 2020, Virtual Event, pages 6950–6960. PMLR, 2020. 1 [30] Seyed-Mohsen Moosavi-Dezfooli, Alhussein Fawzi, and Pascal Frossard. Deepfool: A simple and accurate method to fool deep neural networks. In 2016 IEEE Conference on Computer Vision and Pattern Recognition, CVPR 2016, Las Vegas, NV, USA, June 27-30, 2016, pages 2574–2582. IEEE Computer Society, 2-
016. 3 [31] Erik Nijkamp, Bo Pang, Hiroaki Hayashi, Lifu Tu, Huan Wang, Yingbo Zhou, Silvio Savarese, and Caiming Xiong. Codegen: An open large language model for code with multi-turn program synthesis. In The Eleventh International Conference on Learning Representations, ICLR 2023, Kigali, Rwanda, May 1-5, 2023. OpenReview.net, 2023. 1
[32] Mansheej Paul, Surya Ganguli, and Gintare Karolina Dziugaite. Deep learning on a data diet: Finding important examples early in training. In Advances in Neural Information Processing Systems 34: Annual Conference on Neural Information Processing Systems 2021, NeurIPS 2021, December 6-14, 2021, virtual, pages 20596–20607, 2021. 3 [33] Sylvestre-Alvise Rebuffi, Alexander Kolesnikov, Georg Sperl, and Christoph H. Lampert. icarl: Incremental classifier and representation learning. In 2017 IEEE Co-
nference on Computer Vision and Pattern Recognition, CVPR 2017, Honolulu, HI, USA, July 21-26, 2017, pages 5533–5542. IEEE Computer Society, 2017. 1 [34] Donald Richards. Distance correlation: A new tool for detecting association and measuring correlation between data sets, 2017. 2 [35] Olga Russakovsky, Jia Deng, Hao Su, Jonathan Krause, Sanjeev Satheesh, Sean Ma, Zhiheng Huang, Andrej Karpathy, Aditya Khosla, Michael S. Bernstein, Alexander C. Berg, and Li Fei-Fei. Imagenet large scale visual re-
cognition challenge. Int. J. Comput. Vis., 115(3):211–252, 2015. 1 [36] Ozan Sener and Silvio Savarese. Active learning for convolutional neural networks: A core-set approach. In 6th International Conference on Learning Representations, ICLR 2018, Vancouver, BC, Canada, April 30 - May 3, 2018, Conference Track Proceedings. OpenReview.net, 2018. 3 [37] Rohan Taori, Ishaan Gulrajani, Tianyi Zhang, Yann Dubois, Xuechen Li, Carlos Guestrin, Percy Liang, and Tatsunori Hashimoto. Alpaca: A strong, repli-
cable instructionfollowing model, 2023. Stanford Center for Research on Foundation Models (CRFM). 8 [38] Hugo Touvron, Thibaut Lavril, Gautier Izacard, Xavier Martinet, Marie-Anne Lachaux, Timothe ́e Lacroix, Baptiste
Rozie`re, Naman Goyal, Eric Hambro, Faisal Azhar, Aur ́elien Rodriguez, Armand Joulin, Edouard Grave, and Guillaume Lample. Llama: Open and efficient foundation language models. CoRR, abs/2302.13971, 2023. 8 [39] Pascal Vincent, Hugo Larochelle, Yoshua Bengio, and Pierre-Antoine Manzagol. Extracting and composing robust features with denoising autoencoders. In Machine Learning, Proceedings of the Twenty-Fifth International Conference (ICML 2008), Helsinki, Finland, June 5-9, 2008, pages 1096–1103.-
 ACM, 2008. 2 [40] Catherine Wah, Steve Branson, Peter Welinder, Pietro Perona, and Serge Belongie. Caltech-ucsd birds-200-2011 dataset. Technical Report CNS-TR-2011-001, California Institute of Technology, 2011. 9 [41] Shaobo Wang, Yicun Yang, Zhiyuan Liu, Chenghao Sun, Xuming Hu, Conghui He, and Linfeng Zhang. Dataset distillation with neural characteristic function: A minmax perspective. In IEEE/CVF Conference on Computer Vision and Pattern Recognition, CVPR 2025, Nashville, TN, USA, June 11-15-
, 2025, pages 25570–25580. Computer Vision Foundation / IEEE, 2025. 1, 2, 3, 9 [42] Fuping Wu and Xiahai Zhuang. CF distance: A new domain discrepancy metric and application to explicit domain adaptation for cross-modality cardiac image segmentation. IEEE Trans. Medical Imaging, 39(12):4274–4285, 2020. 3 [43] Jaehong Yoon, Divyam Madaan, Eunho Yang, and Sung Ju Hwang. Online coreset selection for rehearsal-based continual learning. In The Tenth International Conference on Learning Representations,-
 ICLR 2022, Virtual Event, April 25-29, 2022. OpenReview.net, 2022. 1 [44] Jie You, Jae-Won Chung, and Mosharaf Chowdhury. Zeus: Understanding and optimizing GPU energy consumption of DNN training. In USENIX NSDI, 2023. 6 [45] Bo Zhao and Hakan Bilen. Dataset condensation with distribution matching. In IEEE/CVF Winter Conference on Applications of Computer Vision, WACV 2023, Waikoloa, HI, USA, January 2-7, 2023, pages 6503–6512. IEEE, 2023. 1, 2
[46] Bo Zhao, Konda Reddy Mopuri, and Hakan Bilen. Dataset condensation with gradient matching. In 9th International Conference on Learning Representations, ICLR 2021, Virtual Event, Austria, May 3-7, 2021. OpenReview.net, 2021. 1, 2 [47] Boran Zhao, Haiduo Huang, Qiwei Dang, Wenzhe Zhao, Tian Xia, and Pengju Ren. NMS: efficient edge DNN training via near-memory sampling on manifolds. CoRR, abs/2508.02313, 2025. 3 [48] Yongchao Zhou, Ehsan Nezhadarya, and Jimmy Ba. Dataset distillation using neura-
l feature regression. In Advances in Neural Information Processing Systems 35: Annual Conference on Neural Information Processing Systems 2022, NeurIPS 2022, New Orleans, LA, USA, November 28 - December 9, 2022, 2022. 2
11

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:43.405Z
- **Text Length:** 55635 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 11 of 11
