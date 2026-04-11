# PDF Document: He and Songdechakraiwut - 2025 - Imaging the Topology of Dynamic Brain Connectivity.pdf

**File Path:** He and Songdechakraiwut - 2025 - Imaging the Topology of Dynamic Brain Connectivity.pdf

**Processed Date:** 2026-02-10T18:18:34.997Z

**File Size:** 1255.50 KB

**Total Pages:** 4

**Extracted Pages:** 4

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3696

**Title:** Imaging the Topology of Dynamic Brain Connectivity

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

IMAGING THE TOPOLOGY OF DYNAMIC BRAIN CONNECTIVITY
Peilin He1, Tananun Songdechakraiwut2
1 Division of Natural and Applied Sciences, Duke Kunshan University 2 Department of Computer Science, Duke University
ABSTRACT
Functional brain connectivity changes dynamically over time, making its representation challenging for learning on nonEuclidean data. We present a framework that encodes dynamic functional connectivity as an image representation of evolving network topology. Persistent graph homology summarizes global organization across scales, yielding Wasserstein distance-preserving embeddings stable under resolution changes. Stacking these embeddings forms a topological image that captures temporal reconfigura-
tion of brain networks. This design enables convolutional architectures and transfer learning from pretrained foundational models to operate effectively under limited and imbalanced data. Applied to early Alzheimer’s detection, the approach achieves clinically meaningful accuracy, establishing a principled foundation for imaging dynamic brain topology.
Index Terms— Persistent homology, geometric deep learning, transfer learning, Alzheimer’s disease
1. INTRODUCTION
Learning effective representations of functional brain connectivity remains a central challenge in computational neuroimaging. Functional networks exhibit complex, timevarying organization defined on non-Euclidean domains, which poses a representational bottleneck for conventional deep models optimized for grid-structured data. Existing correlation- and graph-based features capture local interactions but underrepresent higher-order structure and temporal reconfiguration, limiting generalization un-
der the data scarcity and class imbalance typical of clinical neuroimaging. We introduce a framework that transforms time-resolved functional connectivity graphs into a compact image-based representation capturing the dynamically changing topology of brain networks. Using persistent graph homology [1], the method summarizes global network organization across connectivity scales, producing Wasserstein distancepreserving embeddings that remain stable under varying resolutions [2]. Stacking these emb-
eddings sequentially forms a two-dimensional topological image that captures the evolution of network topology over time.
This transformation bridges non-Euclidean brain network analysis with modern computer vision, enabling convolutional architectures and transfer learning from pretrained foundational models [3] to capture functional dynamics effectively under limited and imbalanced data conditions. Applied to early Alzheimer’s disease detection on OASIS-3 [4], the framework achieves clinically meaningful prediction accuracy on dementia ratings [5], demonstrating sensitivity to subtle functional disruptions precedin-
g structural decline. The proposed approach establishes a principled foundation for imaging and analyzing the topology of dynamic brain connectivity.
2. TOPOLOGICAL IMAGE REPRESENTATION
Functional magnetic resonance imaging (fMRI) measures spontaneous fluctuations in the blood-oxygen-level-dependent (BOLD) signal, which reflect hemodynamic responses coupled to neural activity across the brain. The brain is parcellated into |V | regions of interest (ROIs) using a predefined atlas, and the mean BOLD signal within each ROI is extracted to form regional time series. To examine how functional interactions evolve over time, we employ a sliding-window approach that partitions the full B-
OLD time series into overlapping temporal windows. Within each window, pairwise functional correlations between ROIs are calculated, yielding a sequence of time-resolved functional connectivity matrices that describe the evolving organization of brain networks. Each connectivity matrix is represented as an undirected, weighted graph G = (V, W ), where V denotes brain regions and W = [wij] ∈ R|V |×|V | is a symmetric weight matrix encoding the strength of pairwise functional connections. To extract-
 global and interpretable structure from these graphs, we apply persistent graph homology (PGH) [1], which quantifies the evolution of topological invariants, connected components (0-homology), and cycles (1-homology), across all edge-weight thresholds using closed-form computation. For each graph G, we construct a family of thresholded subgraphs Gε by retaining edges whose weights exceed a threshold ε. Increasing ε generates a filtration of nested graphs: Gε0 ⊇ Gε1 ⊇ · · · ⊇ Gεk , where ε0 ≤ ε1 ≤-
 · · · ≤ εk are filtration levels. PGH tracks the birth and death of topological features across this filtration. Each feature that ap
arXiv:2511.09949v1 [q-bio.NC] 13 Nov 2025

pears at bl and disappears at dl corresponds to a point (bl, dl) in a persistence diagram [6]. Because the number of connected components (β0) increases and the number of independent cycles (β1) decreases monotonically with ε [1], the topology of G can be summarized by the birth times of connected components and the death times of cycles: B(G) = {bl}|V |−1
l=1 , D(G) = {dl}1+|V |(|V |−3)/2
l=1 .
To obtain a smooth and resolution-flexible representation, we employ inverse transform sampling to interpolate the empirical distributions of B(G) and D(G). For the birth set, the empirical distribution is fG,B(x) = 1
|B(G)|
P
b∈B(G) δ(x −
b), where δ(x − b) denotes a Dirac delta function centered
at b. The corresponding cumulative function is FG,B(x) =
1 |B(G)|
P
b∈B(G) 1b≤x, and its pseudo-inverse is defined as
F −1
G,B(z) = inf{b ∈ R | FG,B(b) ≥ z}. Sampling F −1
G,B
at m uniform quantiles yields a fixed-length, continuously resampled embedding:
vB = F −1
G,B ( 1
m ), . . . , F −1
G,B ( m
m) ⊤,
and analogously for the death set:
vD = F −1
G,D( 1
n ), . . . , F −1
G,D( n
n) ⊤.
This inverse-transform-based interpolation enables the topological representation to be resampled at arbitrary resolutions (by varying m or n) while preserving Wasserstein distances between persistence diagrams [7], ensuring topological stability under changes in sampling resolution [2]. We then concatenate the two embeddings to form a unified topological feature vector:
F (G) = [vB || vD],
which jointly encodes the 0- and 1-dimensional homological features of the graph. For a sequence of sliding windows {Gt}tT=1, the corresponding feature vectors are concatenated over time:
I = [F (G1), F (G2), . . . , F (GT )] ∈ R(m+n)×T .
The resulting image-like representation I captures the temporal evolution of the brain’s topological connectivity in a compact and interpretable form. Each column of I represents the topological feature vector F (Gt) from a specific time window, while each row traces the temporal evolution of a sampled topological scale. Viewed as a two-dimensional map, the horizontal axis encodes time and the vertical axis encodes persistence scale. Smooth regions indicate stable network topology, whereas abrupt -
or localized intensity changes mark dynamic reconfigurations of persistent connected components and cycles. An overview of the proposed pipeline is shown in Fig. 1.
Fig. 1. Topological representation of a dynamic functional connectome. At each time point t (left), fMRI activation maps are converted into functional connectivity graphs and summarized via persistent graph homology (middle), yielding Betti curves for 0- and 1-dimensional homology (β0, β1) over the filtration values. Stacking the resulting topological summaries across time produces a 2D topological image (right), where rows correspond to time windows and columns encode features from 0- and 1-homol-
ogy.
Item Setting
Learning rates Backbone 1 × 10−4; Head 2 × 10−4 Gradient clipping l2-norm = 5.0 Preprocessing .npy → [0, 255] uint8 Augmentation Rotation ≤ 5◦, translation ≤ 5%
Table 1. Training hyperparameters.
3. APPLICATION TO EARLY DETECTION OF ALZHEIMER’S DISEASE
3.1. Datasets
We evaluate our representation framework using the OASIS3 dataset [4], which provides longitudinal, multimodal neuroimaging and detailed clinical assessments. The cohort comprises 839 participants with resting-state fMRI and corresponding diagnostic labels: 772 with normal cognition (N), 34 with mild cognitive impairment (MCI), and 33 with cognitive impairment not meeting MCI criteria (IMP). All fMRI data were preprocessed using fMRIPrep, following a standardized and reproducible pipeline consiste-
nt with our previous work [8]. Subjects with dementia were excluded to focus on early-stage cognitive decline relevant to Alzheimer’s disease detection. Among the 34 MCI cases, one subject with an extreme Clinical Dementia Rating Sum of Boxes (CDRSB) score (9.0) was treated as an outlier and excluded. To capture this early impairment spectrum, the MCI and IMP groups were merged into a single category (IMP+MCI) and

contrasted with the normal cohort.
3.2. Model configurations
Outlier-weighted mean squared error loss. To improve sensitivity to underrepresented but clinically important largetarget cases (i.e., the positive diagnostic cases), we train with an outlier-weighted mean squared error (OW-MSE). Let (yˆi, yi) denote the prediction and ground-truth for sample i. We first compute the τ -quantile of the targets on the training set, qτ = Quantileτ {yj}j∈train , and assign a piecewiseconstant weight wi = w if yi > qτ and wi = 1 otherwise. The loss is then defined as L-
OW-MSE = 1
N
PN
i=1 wi (yˆi − yi)2. In our study, we use τ = 0.90 and w = 3.0.
Architecture and optimization. We evaluate our method using five Convolutional Neural Networks (CNNs): DenseNet121, EfficientNet-B0, ResNet-18, ResNet-34, and ResNet50 [3]. For ResNet-18/34/50, we use a small-stem variant (initial 3×3 convolution with stride 1 and no first maxpooling layer) to better preserve local spatial detail on our low-resolution inputs. All models are trained on singlechannel inputs for 60 epochs using AdamW. We use a 5-epoch linear warm-up for the learning rate, followed by-
 cosine decay with a minimum of 1 × 10−6; the weight decay is set to 3×10−4. We adopt partial fine-tuning: early backbone stages are frozen (approximately x% of parameters), and only the final stage and task head are updated (see Section 3.4 for ablations on the frozen depth of the backbone). To mitigate class imbalance, we use a rebalanced batch sampler on the training split, enforcing a per-batch IMP+MCI fraction of 0.65 via independent draws with replacement from the IMP+MCI and N pools. The re-
maining hyperparameters (e.g., separate backbone/head learning rates, gradient clipping, preprocessing, and augmentation) are summarized in Table 1.
3.3. Results and clinical relevance
Our primary regression target is the CDR-SB, a widely used quantitative index of cognitive and functional impairment in both research and clinical practice. We split the dataset by subject (ensuring no overlap across partitions) into 5% training, 15% validation, and 80% test sets (see Section 3.4 for ablations on training size). Given the limited number of MCI and IMP cases, this design prioritizes subject-level independence and a large held-out test set for robust generalization assessment. For a-
ll reported metrics, 95% confidence intervals (CIs) are estimated via 5,000 bootstrap resamples of the test set. To summarize performance under class imbalance, we introduce an entropy-weighted combined mean absolute error (MAE). Specifically, for g ∈ {N, IMP+MCI}, let pg = ng/(nN + nIMP+MCI), hg = −pg log pg, and wg = hg/(hN + hIMP+MCI). The combined score is then MAEentropy =
wN MAEN + wIMP+MCI MAEIMP+MCI. Table 2 reports MAE with 95% CIs for each model backbone, evaluated separately on the IMP+MCI and N groups, together with the entropyweighted combined MAE. Relative to the minimum clinically important difference (MCID) for CDR-SB in mildly impaired populations (1.0–2.0 points [5]), all IMP+MCI MAEs fall below 1.0 (lie between 0.65 and 0.71), and even the upper bounds of their 95% CIs remain under 1.0 (no greater than 0.95), suggesting potential clinical utility for e-
arly monitoring and disease staging. The N group achieves lower MAEs (between 0.35 and 0.60) with markedly narrow CIs (about ±0.01), consistent with greater precision arising from a larger sample size and lower within-group heterogeneity. Across backbones, performance differences in the IMP+MCI group are less distinct due to overlapping CIs, whereas in the N group, non-overlapping CIs suggest architecture-dependent variations in predictive precision under our evaluation protocol. Aggregated across-
 diagnoses via the entropy-weighted MAE, all models achieve scores between 0.57 and 0.64, remaining below one CDR-SB point on average, suggesting that our conclusions remain consistent when summarized with this class-imbalance-aware metric. Early-stage detection of Alzheimer’s disease is a longstanding challenge, as clinical symptoms emerge gradually and macrostructural atrophy typically occurs only after earlier network-level dysfunction. By constructing topological image representations of dynam-
ic functional connectivity, our framework quantifies temporally resolved changes in brain network topology that may reflect early synaptic and connectivity alterations preceding structural degeneration. When modeled with convolutional architectures, these representations achieve sub-MCID prediction accuracy on mildly impaired individuals, which is consistent with sensitivity to subtle functional disruptions associated with prodromal Alzheimer’s disease. Taken together, these findings suggest that -
topologically informed functional representations can improve the specificity of learning-based biomarkers and provide a promising pathway toward earlier detection and longitudinal tracking of Alzheimer’s progression.
3.4. Ablation analyses
In this study, we assess how two design choices affect performance, measured by MAE with 95% bootstrap CIs: (i) the fraction of the backbone frozen during training and (ii) the proportion of subjects used for training.
Effect of backbone frozen depth. Table 3 shows that MAE remains below 1.0 across all frozen fractions for both diagnostic groups. As the frozen fraction increases, MAE for IMP+MCI decreases from 0.7193 to 0.6027 with overlapping 95% CIs, whereas MAE for N increases from 0.4438 to 0.6929 with narrow CIs, illustrating a trade-off between performance on impaired and normal subjects.

Model MAE (95% CIs) MAEentropy
IMP+MCI N
EfficientNet-B0 0.6513 (0.4471, 0.8783) 0.5806 (0.5729, 0.5878) 0.6316 ResNet-18 0.7064 (0.5003, 0.9472) 0.4556 (0.4484, 0.4624) 0.6367 DenseNet-121 0.6517 (0.4820, 0.8460) 0.3848 (0.3777, 0.3915) 0.5775 ResNet-34 0.6937 (0.4866, 0.9300) 0.4770 (0.4697, 0.4840) 0.6333 ResNet-50 0.6887 (0.5247, 0.8707) 0.3479 (0.3427, 0.3529) 0.5939
Table 2. CDR–SB regression on the test set (33% frozen fraction). Mean absolute error (MAE) with 95% bootstrap CIs by diagnosis, together with an entropy-weighted combined MAE.
Frozen fraction % MAE (95% CIs)
IMP+MCI N
0% 0.7193 (0.5120, 0.9732) 0.4438 (0.4369, 0.4502) 17% 0.7086 (0.4914, 0.9500) 0.4534 (0.4463, 0.4600) 33% 0.7064 (0.5003, 0.9472) 0.4556 (0.4484, 0.4624) 50% 0.6614 (0.4584, 0.8922) 0.5354 (0.5273, 0.5427) 67% 0.6545 (0.4545, 0.8971) 0.5502 (0.5420, 0.5578) 90% 0.6463 (0.4507, 0.8734) 0.5679 (0.5602, 0.5752) 100% 0.6027 (0.4223, 0.8217) 0.6929 (0.6847, 0.7002)
Table 3. Effect of freezing fraction on ResNet-18: MAE with 95% bootstrap CIs.
Train % MAE (95% CIs)
IMP+MCI N
1% 0.7951 (0.5086, 1.1622) 0.5718 (0.5625, 0.5806) 5% 0.6513 (0.4471, 0.8783) 0.5806 (0.5729, 0.5878) 10% 0.7001 (0.4154, 1.0834) 0.7491 (0.7399, 0.7578)
Table 4. Effect of training set size on EfficientNet-B0: MAE with 95% bootstrap CIs.
Effect of training set size. Table 4 shows that, among the three training fractions evaluated, using 5% of the dataset provides the best overall balance between the N and IMP+MCI cohorts. Increasing the split to 10% does not yield further gains and instead worsens MAE in both groups, indicating that, with our current training setup, more data does not necessarily improve generalization.
4. COMPLIANCE WITH ETHICAL STANDARDS
This research study was conducted retrospectively using human subject data made available in open access by OASIS-3 project [4]. Ethical approval was not required as confirmed by the license attached with the open access data.
5. CONFLICTS OF INTEREST
This work was supported by Duke Science and Technology. The authors declare no competing interests.
6. REFERENCES
[1] Tananun Songdechakraiwut and Moo K Chung, “Topological learning for brain networks,” The Annals of Applied Statistics, vol. 17, no. 1, pp. 403–433, 2023.
[2] Primozˇ Skraba and Katharine Turner, “Wasserstein stability for persistence diagrams,” arXiv preprint arXiv:2006.16824, 2020.
[3] Ibomoiye Domor Mienye, Theo G. Swart, George Obaido, Matt Jordan, and Philip Ilono, “Deep Convolutional Neural Networks in Medical Image Analysis: A review,” Information, vol. 16, no. 3, pp. 195, 2025, Article 195.
[4] Pamela J. LaMontagne, Tammie L. S. Benzinger, John C. Morris, Sarah Keefe, Russ Hornbeck, Chengjie Xiong, Elizabeth Grant, Jason Hassenstab, Krista Moulder, Andrei G. Vlassenko, Marcus E. Raichle, Carlos Cruchaga, Daniel S. Marcus, et al., “OASIS-3: Longitudinal neuroimaging, clinical, and cognitive dataset for normal aging and alzheimer disease,” medRxiv, 2019, preprint.
[5] Ryan T Muir, Michael D Hill, Sandra E Black, and Eric E Smith, “Minimal clinically important difference in Alzheimer’s disease: Rapid review,” Alzheimer’s & Dementia, vol. 20, no. 5, pp. 3352–3363, 2024.
[6] Herbert Edelsbrunner and John L Harer, Computational Topology: An Introduction, American Mathematical Society, 2022.
[7] Tananun Songdechakraiwut, Bryan M. Krause, Matthew I. Banks, Kirill V. Nourski, and Barry D. Van Veen, “Wasserstein distance-preserving vector space of persistent homology,” in Proceedings of the International Conference on Medical Image Computing and Computer-Assisted Intervention (MICCAI), 2023, pp. 277–286.
[8] Luopeiwen Yi, Michael W Lutz, Yutong Wu, Yang Li, and Tananun Songdechakraiwut, “Topological and geometric signatures of brain network dynamics in Alzheimer’s disease,” Alzheimer’s & Dementia, vol. 21, no. 8, pp. e70545, 2025.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:34.997Z
- **Text Length:** 18214 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 4 of 4
