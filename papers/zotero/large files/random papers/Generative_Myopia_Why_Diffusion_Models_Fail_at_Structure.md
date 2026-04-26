# PDF Document: Siami - 2025 - Generative Myopia Why Diffusion Models Fail at Structure.pdf

**File Path:** Siami - 2025 - Generative Myopia Why Diffusion Models Fail at Structure.pdf

**Processed Date:** 2026-02-10T18:14:08.094Z

**File Size:** 919.41 KB

**Total Pages:** 11

**Extracted Pages:** 11

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3328

**Title:** Generative Myopia: Why Diffusion Models Fail at Structure

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Generative Myopia: Why Diffusion Models Fail at Structure∗
Milad Siami†
Abstract. Graph Diffusion Models (GDMs) optimize for statistical likelihood, implicitly acting as frequency filters that favor abundant substructures over spectrally critical ones. We term this phenomenon Generative Myopia. In combinatorial tasks like graph sparsification, this leads to the catastrophic removal of “rare bridges,” edges that are structurally mandatory (Reff ≈ 1) but statistically scarce. We prove theoretically and empirically that this failure is driven by Gradient Starvation: the -
optimization landscape itself suppresses rare structural signals, rendering them unlearnable regardless of model capacity. To resolve this, we introduce Spectrally-Weighted Diffusion, which re-aligns the variational objective using Effective Resistance. We demonstrate that spectral priors can be amortized into the training phase with zero inference overhead. Our method eliminates myopia, matching the performance of an optimal Spectral Oracle and achieving 100% connectivity on adversarial benchmark-
s where standard diffusion fails completely (0%).
Key words. Spectral Graph Theory, Diffusion Models, Generative AI, Effective Resistance, Graph Learning
1. Introduction. A fundamental tension exists in modern Graph Learning between Statistical Likelihood and Algebraic Connectivity. Generative AI models, such as Denoising Diffusion Probabilistic Models (DDPM) [3], optimize for the average case. They minimize a loss function (e.g., KL divergence) dominated by the most frequent patterns in the dataset. Conversely, Spectral Graph Theory [1] emphasizes worst-case guarantees. The connectivity of a graph is determined by its weakest link (the Fiedler val-
ue), not its densest cluster. With the rise of discrete diffusion models like DiGress [10], there is a growing hypothesis that learned priors can replace classical heuristics. We challenge this hypothesis. We define Generative Myopia as the failure of likelihood-based models to preserve edges that are structurally necessary but statistically rare. Contribution. We present a negative result followed by a constructive solution: 1. We prove theoretically (Theorem 3.2) that standard diffusion fails on-
 “Rare Bridge” instances, performing strictly worse than naive random sampling. 2. We propose Spectrally-Weighted Diffusion (Algorithm 4.1), injecting Effective Resistance [8] into the ELBO to force the model to learn structural importance.
2. Related Work.
2.1. Generative Models on Graphs. Deep generative models for graphs have evolved from autoregressive approaches to permutation-invariant score-based models. Recent advancements in discrete diffusion, such as DiGress [10] and DIFUSCO [9], have shown promise in solving combinatorial optimization (CO) problems. However, these models typically focus on Maxi
∗Under review. Funding: This material is based upon work supported in part by the U.S. Office of Naval Research under Grant Award N00014-21-1-2431; in part by the U.S. National Science Foundation under Grant Award 2208182. Source codes and pre-trained models will be made publicly available upon acceptance. †Department of Electrical and Computer Engineering, Northeastern University, Boston, MA 02115 (m.siami@northeastern.edu).
1
arXiv:2511.18593v1 [cs.LG] 23 Nov 2025

2 M. SIAMI
mum Independent Set (MIS) or Traveling Salesman Problem (TSP), where local constraints dominate. Our work highlights a failure mode in global connectivity tasks which remains unaddressed in current CO-diffusion literature.
2.2. Spectral and Structural Limitations of Diffusion. Recent literature has begun to dissect the failure modes of graph diffusion models through two distinct lenses: architectural expressivity and spectral dynamics. Architectural Constraints. Wang et al. [11] argue that generation failures stem fundamentally from the limited expressivity of standard GNN backbones (e.g., MPNNs). They demonstrate that such architectures theoretically fail to approximate score functions dependent on complex substruc-
ture counts and propose mitigating this with higher-order networks. However, our Frequency Control experiment (Sec. 5.3) reveals a critical nuance: standard backbones can capture structural bottlenecks if the signal is artificially amplified. This suggests that for rare but critical structures (like bridges), the primary failure mode is not architectural incapacity, but rather gradient starvation induced by the likelihood objective. Spectral Dynamics & Sparsification. Parallel work has investigate-
d the intersection of spectral theory and diffusion. Zaghen et al. [12] analyze the discrete diffusion process, observing how noise interacts with the graph spectrum during the forward pass. Similarly, Luo et al. [5] utilize spectral diffusion primarily to accelerate the generation process. In contrast, our work isolates the reverse learning dynamics, showing that the optimizer exhibits a strong bias against spectrally critical global features regardless of the noise process. Finally, while Liguor-
i et al. [4] recently proposed preserving spectral properties during neural graph sparsification, their approach optimizes a specific instance. Our method integrates Effective Resistance directly into the variational lower bound of a generative model, effectively amortizing the spectral cost into the training weights to generate structurally sound graphs ab initio.
2.3. Spectral Graph Theory & Network Control. The importance of Effective Resistance extends beyond sparsification [8]. In the context of multi-agent systems and network control, [7] demonstrated that effective resistance is intrinsically linked to systemic performance measures, such as the H2 norm and network coherence. They showed that spectral sparsification is not merely a compression technique, but a fundamental abstraction method that guarantees performance bounds in consensus networks. This-
 theoretical foundation underscores why our proposed method targets Reff: it is the rigorous proxy for preserving the dynamical properties of the system, not just the visual topology.
2.4. Spectral Bias in Deep Learning. It is well-documented that neural networks exhibit a “Spectral Bias,” learning low-frequency functions faster than high-frequency ones [6]. Similarly, in computer vision, CNNs are biased towards local texture rather than global shape [2]. We extend this analogy to graph generation: Standard diffusion models exhibit “Texture Bias” (learning dense local cliques) while failing to capture “Shape” (global connectivity bridges).
3. Theoretical Analysis: The Generative Myopia Conflict. We explicitly derive the conflict between the diffusion training objective and the requirements for spectral sparsification.

GENERATIVE MYOPIA 3
1. Ground Truth (G0)
Reff ≈ 1
High Structure, Low Freq
Forward Diffusion q(At|A0)
2. Noisy State (At)
Signal Lost in Entropy (Bridge indistinguishable)
StandardLoss
WeightedLoss
3a. Generative Myopia
Disconnected!
Model learns “Cliques are real, Bridges are noise”
3b. Spectral Recovery
Connected
Gradient Boost on Bridge forces learning
Figure 1. The Mechanism of Generative Myopia. (1) The Ground Truth contains dense local clusters (Black) and a sparse global bridge (Red). (2) The Forward Process corrupts all edges equally. (3a) Standard Diffusion discards the bridge. (3b) Spectrally-Weighted Diffusion recovers it.
3.1. Preliminaries. Let G = (V, E) be a graph with Laplacian LG. To sparsify G into a subgraph H while preserving its Laplacian spectrum (i.e., xT LH x ≈ xT LGx), [8] proved that edges must be sampled with probabilities proportional to their Effective Resistance Reff(e):
(3.1) Reff(euv) = (1u − 1v)T L+
G(1u − 1v)
Crucially, if e is a bridge, Reff(e) = 1, necessitating a sampling probability of 1.0 regardless of edge weight. To visualize this conflict, we present the mechanism of Generative Myopia in Figure 1. Consider a “Barbell” graph where two dense cliques are connected by a single bridge. In the data distribution D, the clique edges are frequent patterns, whereas the bridge is a rare anomaly (Pfreq ≈ 0). During the forward diffusion process (Figure 1, Step 2), the structural signal of the bridge is ove-
rwhelmed by noise, making it statistically indistinguishable from empty space. A standard diffusion model, minimizing an average-case likelihood objective, learns to reconstruct the frequent cliques but treats the rare bridge as noise, resulting in a disconnected graph (Step 3a). In contrast, our proposed method uses the high Effective Resistance of the bridge (Reff ≈ 1) to amplify its gradient signal, forcing the model to prioritize its reconstruction despite its statistical rarity (Step 3b).
3.2. The Failure Theorem. We now construct a scenario where likelihood optimization implies catastrophic spectral failure.
Lemma 3.1 (Convergence to Marginal Frequency). Consider a discrete diffusion model minimizing the variational lower bound LELBO. Assuming a factored posterior q(At−1|At, A0) (independent noise), the optimal reverse transition parameter θ∗ for an edge eij satisfies:
(3.2) pθ∗ (Aij = 1) = EG∼D[I(eij ∈ E(G))] = Pfreq(eij)
Proof. The ELBO decomposes into a sum of KL divergences over individual edges. Minimizing DKL(q(·)||pθ(·)) forces the model distribution to match the data marginals.

4 M. SIAMI
Theorem 3.2 (Orthogonality of Likelihood and Connectivity). Let Dε be a distribution of graphs containing a bridge edge eb that appears with probability ε ≪ 1, such that for all G ∼ Dε, removal of eb yields a disconnected graph. A standard diffusion model trained on Dε will generate a disconnected graph with probability 1 − ε.
Proof. By Lemma 3.1, the trained model learns a sampling probability p(eb) ≈ ε. For spectral preservation, the Spielman-Srivastava condition requires sampling eb with probability p ∝ Reff(eb) = 1.0. Since ε can be arbitrarily close to 0 (representing rare data or outliers), the Kullback-Leibler divergence optimized by the model is minimized by setting p(eb) → 0. Thus, the generated graph H will miss the bridge with probability 1 − ε, resulting in λ2(H) = 0 (disconnected), whereas λ2(G) > 0.
This proves that Generative Myopia is not an implementation bug, but a theoretical inevitability of optimizing likelihood on data where structural importance (Reff) is uncorrelated with frequency (Pfreq).
4. Method: Spectrally-Weighted Diffusion. To resolve Theorem 3.2, we modify the optimization landscape. We propose the Resistance-Weighted ELBO:
(4.1) LRW(G) =
X
e∈E
(1 + λ · Reff(e)) · Lstd(e)
where λ is a hyperparameter. This acts as a Gradient Booster: bridge edges receive amplified gradients, forcing the likelihood pθ(e) to deviate from the marginal frequency ε towards the structural requirement Reff.
4.1. Algorithm and Implementation. We detail the training procedure in Algorithm 4.1. The key innovation is the separation of the expensive spectral calculation (Offline) from the training loop (Online).
4.2. Complexity Analysis.
Training (Amortized). While Reff calculation is O(N 3), it is performed only once per training sample. During the training loop, applying the weights is an element-wise multiplication, adding negligible overhead. Inference (Zero Cost). Algorithm 4.1 modifies only the gradient flow. The architecture of NeuralNet(·) remains unchanged. Therefore, generation time complexity is identical to standard diffusion: O(T · N 2).
5. Empirical Verification. We validate our method on two distinct topology classes. To ensure reproducibility, the simulation protocol is defined in Algorithm 5.1. Implementation Details. All numerical simulations were implemented in Python using NetworkX for spectral computations and NumPy for linear algebra. To isolate the effects of the objective function, edge sampling probabilities were derived directly from the theoretical marginal frequencies (Pfreq) and effective resistances (Reff), ensuri-
ng reproducibility with a fixed random seed.
5.1. Experiment I: The Barbell (Single Failure Point). Setup. We generate Barbell graphs (2 × K8 cliques connected by one bridge). We sparsify the graph to a target density

GENERATIVE MYOPIA 5
Algorithm 4.1 Spectrally-Weighted Diffusion Training 1: Input: Graph Dataset D, Hyperparameter λ
2: Phase 1: Offline Pre-computation (One-time) 3: for each graph G ∈ D do 4: Compute Laplacian LG = D − A 5: Compute Pseudoinverse L+
G {O(N 3) or approx O ̃(m)} 6: Extract Effective Resistance Reff(e) for all e ∈ E 7: Store Weight Map: We ← 1 + λ · Reff(e) 8: end for 9: Phase 2: Online Training Loop 10: while not converged do 11: Sample G0 ∼ D, Time t ∼ [1, T ], Noise ε 12: Generate noisy state At 13: Predict Gˆ0 = NeuralNet(At, t) 14: Compute Standard Loss: lstd = CrossEntropy(Gˆ0, G0)
15: Apply Spectral Weights: L = We ⊙ lstd {O(1) Lookup} 16: Backpropagate ∇L 17: end while
Algorithm 5.1 Adversarial Sparsification Protocol 1: Input: Target Density ρ, Trials K = 500 2: Metrics: Connectivity Rate, Relative Spectral Error (RSE) 3: for k = 1 to K do
4: Generate Ground Truth Gtrue (e.g., Chain SBM) 5: Standard: Score Se = Pfreq(e)
6: Weighted: Score Se = Pfreq(e) + λReff(e) 7: Sparsify: Select top ρ · |E| edges based on Score 8: Check Connectivity (λ2 > 0) and compute RSE 9: end for
of 50% (ρ = 0.50). The critical bridge appears in only 5% of training samples (P = 0.05), while clique edges appear in 95%. Results (Table 1). Standard Diffusion fails completely (0% connectivity). Weighted Diffusion corrects this, achieving 89.6% connectivity.
5.2. Experiment II: The Asymmetric Chain (Heterogeneous Failure). Setup. To evaluate robustness under heterogeneous conditions, we simulate an Asymmetric Chain SBM. We arrange three dense cliques of increasing size (N = {10, 15, 20}) in a linear chain. This design serves two specific theoretical purposes: • Breaking Symmetry: Unlike the Barbell graph, the asymmetry ensures that the two bridge edges connect components of different volumes. This results in distinct Effective Resistance values, testi-
ng the model’s ability to rank edges with varying degrees of spectral criticality.

6 M. SIAMI
Table 1
Exp I: Barbell Graph (ρ = 0.50). Standard diffusion fails to capture the bridge. Our Weighted method recovers the performance of the optimal Spectral Oracle.
Method Signal Proxy Spectral Error (↓) Connectivity (↑)
Random Sampling Uniform 0.67 ± 0.35 46.0% Standard Diffusion Frequency 1.00 ± 0.00 0.0%
Weighted Diffusion (Ours) Hybrid 0.36 ± 0.24 89.6% Spectral Oracle Resistance 0.37 ± 0.25 88.2%
Figure 2. Experiment I: Barbell Graph. (A) Ground truth topology; the yellow bridge is the spectral bottleneck. (B) The Generative Gap: The bridge falls into the high-resistance/low-frequency “blind spot.” (C) Results: Standard Diffusion (Red) fails. Weighted Diffusion (Green) recovers the topology.
• Isolating Generative Myopia: We sparsify the graph to 60% density. At this relaxed density, naive Random Sampling succeeds 53% of the time (Table 2). This control proves that the failure of Standard Diffusion (0% success) is not due to a lack of edge budget, but rather a systematic bias against rare structures.
Results (Table 2). At 60% density, Standard Diffusion fails completely (0.0%). Despite having the budget, it allocates all edges to the dense cliques, ignoring the bridges. In contrast, Weighted Diffusion achieves 100.0% connectivity, proving that it explicitly learns to prioritize structural bottlenecks even when they are statistically rare.
5.3. Experiment III: The “Visible” Bridge (Frequency Control). Motivation. A skeptic might argue that diffusion models simply lack the capacity to model global bottlenecks,

GENERATIVE MYOPIA 7
Table 2
Exp II: Asymmetric Chain (Density = 0.60). Even with a generous budget where Random sampling succeeds 53% of the time, Standard Diffusion fails (0%) due to misallocation. Weighted Diffusion achieves perfect performance.
Method Prior Bias Spectral Error (↓) Connectivity (↑)
Random Sampling None 0.51 ± 0.47 53.0% Standard Diffusion Average-Case 1.00 ± 0.00 0.0%
Weighted Diffusion (Ours) Worst-Case 0.01 ± 0.00 100.0% Spectral Oracle Optimal 0.01 ± 0.00 100.0%
Figure 3. Experiment II: Asymmetric Chain SBM Results. (A) Ground truth topology with variable cluster sizes. (B) The Generative Gap: Bridges (Red Dots) have high resistance but low frequency. (C) Performance: Random sampling (Gray) has decent success (53%) due to feasible density. Standard Diffusion (Red) fails completely (0%). Weighted Diffusion (Green) achieves perfect structural recovery (100%), matching the Oracle.
regardless of their frequency. To rule this out, we introduce a Positive Control. We test whether Standard Diffusion can recover the bridge if we artificially amplify its statistical signal. Results (Figure 4). The results provide definitive proof of Generative Myopia. • The Zone of Myopia (k < 3): In the shaded region of Figure 4, the bridge is statistically rare. Standard Diffusion (Red) fails completely (0% connectivity), as the

8 M. SIAMI
signal is drowned out by the noise of the dense cliques. • The Phase Transition (k ≈ 3.5): As the bridge thickness increases, we observe a sharp Phase Transition. Once the bridge becomes sufficiently frequent (k ≥ 4), Standard Diffusion suddenly succeeds, jumping to 100% connectivity. This confirms that the architecture can learn the topology, but only when the edge frequency crosses a “visibility threshold.”
• Spectral Robustness: In contrast, Weighted Diffusion (Green) is invariant to frequency. It achieves ≈ 100% connectivity even at k = 1, because the Effective Resistance (Reff = 1) remains constant regardless of the bridge’s statistical rarity.
Figure 4. The Cure for Myopia. We artificially increase the bridge frequency by thickening it (k edges). Standard Diffusion (Red) exhibits a Phase Transition: it fails in the shaded “Zone of Myopia” (k < 3) where frequency is low, but succeeds once the bridge becomes statistically frequent (k ≥ 4). Weighted Diffusion (Green) remains robust across all regimes, proving it relies on structural importance (Reff) rather than statistical abundance.
5.4. Experiment IV: Optimization Dynamics. Motivation. While Experiments I-III demonstrate that standard models fail on rare structures, a fundamental question remains: is this a data limitation, or an optimization failure? To answer this, we move beyond static probability analysis and simulate the Stochastic Gradient Descent (SGD) trajectory of a neural network output unit learning a rare bridge edge. Simulation Protocol. We isolate the optimization landscape by modeling a single logit θ predicti-
ng the existence of a bridge edge e. We define the target distribution as y ∼ Bernoulli(ε) with a sparsity rate of ε = 0.05 to mimic the rare appearance of structural bottlenecks. The model is trained via Stochastic Gradient Descent (SGD) with a batch size of B = 64 and learning rate η = 0.05. In the Standard setting, gradients are computed on

GENERATIVE MYOPIA 9
the raw cross-entropy loss. In the Weighted setting, we apply a scalar spectral weight ω = 50 solely to the gradients of the positive class (y = 1), strictly enforcing the resistance-based objective defined in (4.1). This setup explicitly simulates the “imbalanced regime” where structural signals are statistically outnumbered within any given mini-batch. Results (Figure 5). The training trajectories reveal two distinct regimes: • Gradient Starvation (Standard): The Standard model (Red) quickly col-
lapses. The gradient signal from the rare positive examples (y = 1) is overwhelmed by the frequent negative examples (y = 0). The model converges to the marginal frequency (p ≈ 0.05), effectively predicting “No Edge.” • Spectral Amplification (Weighted): The Weighted model (Green) modifies the gradient landscape. By scaling the gradient of the positive class by the Effective Resistance, it counterbalances the class imbalance. The model converges to high confidence (p → 1.0), proving that spectral -
re-weighting allows the optimizer to “see” and learn rare structures that are otherwise invisible to SGD.
Figure 5. Optimization Dynamics. We simulate the training of a neural network on a rare bridge (Pfreq = 0.05). Standard Diffusion (Red) suffers from Gradient Starvation, collapsing to the marginal frequency. Weighted Diffusion (Green) uses spectral weights to amplify the rare signal, driving the predicted probability to structural certainty (p ≈ 1.0).
6. Discussion: The Anatomy of Generative Myopia. The empirical evidence from our four experiments reveals a critical flaw in the foundations of modern Graph Generative Models. By systematically isolating topology (Exp I & II), frequency (Exp III), and optimization dynamics (Exp IV), we have proven that standard objectives are fundamentally misaligned with the goal of structural connectivity.

10 M. SIAMI
The Frequency Filter Hypothesis. Experiments I and II demonstrate that standard diffusion models act as Frequency Filters. They accurately reconstruct high-frequency local patterns (cliques) while systematically filtering out low-frequency global connectors (bridges). This confirms our theoretical derivation (Theorem 3.2): when minimizing KL-divergence, the model implicitly prioritizes the “average case,” treating rare structural bottlenecks as statistical noise to be discarded. Not Blind, But Daz-
zled. Experiment III provides the crucial counter-factual. When we artificially increased the frequency of the bridge (thickening it to k ≥ 4), the standard model suddenly succeeded. This proves the model is not “blind” to structure; it is simply “dazzled” by frequency. It requires a high signal-to-noise ratio to detect features that are spectrally obvious (Reff = 1). Standard diffusion conflates statistical abundance with structural importance.
Spectral Weighting as ”Structural Attention”. Our method can be rigorously reinterpreted through the lens of Attention Mechanisms. In standard Graph Transformers, attention scores αij dictate the “bandwidth” of information flow between nodes. These scores are typically learned via feature similarity or local proximity. While we did not explicitly train Transformer heads in Experiment III, the observed Gradient Starvation reveals a fundamental similarity: standard optimization allocates its “learni-
ng budget” (gradients) proportional to frequency (Pfreq). This mirrors the behavior of Soft Attention, which tends to be dominated by highprobability features and often fails to attend to “long-tail” interactions like rare bridges. We therefore argue that Effective Resistance constitutes a form of Ground Truth Structural Attention. The weight map We = 1 + λReff(e) acts as a supervised attention mask derived from spectral theory. By forcing the model to align its gradients with Reff, we effectively-
 inject a “Hard Attention” mechanism that overrides the frequency bias, ensuring the model attends to spectrally critical edges regardless of their statistical rarity.
7. Conclusions. Standard diffusion models excel at synthesizing data defined by local textures (e.g., image generation), but they struggle with domains defined by strict global constraints. We have identified the root cause of this failure as Generative Myopia: an intrinsic bias in the Evidence Lower Bound (ELBO) that filters out spectrally critical but statistically rare structures. Our findings challenge the prevailing hypothesis that simply scaling model capacity or dataset size will solve topo-
logical generation. As demonstrated by the optimization dynamics in Experiment IV, the issue is not one of capacity, but of Gradient Starvation. Without explicit structural guidance, the optimization landscape is fundamentally hostile to rare bridges. Spectrally-Weighted Diffusion offers a mathematically rigorous solution. By integrating Effective Resistance into the training objective, we bridge the gap between Statistical Learning and Spectral Graph Theory. This ensures that generative models re-
spect the algebraic connectivity of the data, providing a robust framework for synthesizing graphs that are not just visually plausible, but structurally sound.

GENERATIVE MYOPIA 11
References.
[1] F. R. Chung, Spectral graph theory, vol. 92, American Mathematical Soc., 1997.
[2] R. Geirhos, P. Rubisch, C. Michaelis, M. Bethge, F. A. Wichmann, and W. Brendel, Imagenet-trained cnns are biased towards texture; increasing shape bias improves accuracy and robustness, in International conference on learning representations, 2018.
[3] J. Ho, A. Jain, and P. Abbeel, Denoising diffusion probabilistic models, Advances in neural information processing systems, 33 (2020), pp. 6840–6851.
[4] A. Liguori, E. Ritacco, P. Sabatino, and A. Socievole, Spectral neural graph sparsification, arXiv preprint arXiv:2510.27474, (2025).
[5] T. Luo, Z. Mo, and S. J. Pan, Fast graph generation via spectral diffusion, IEEE Transactions on Pattern Analysis and Machine Intelligence, 46 (2024), pp. 3496–3508, https://doi.org/10.1109/TPAMI.2023.3344758.
[6] N. Rahaman, A. Baratin, D. Arpit, F. Draxler, M. Lin, F. Hamprecht, Y. Bengio, and A. Courville, On the spectral bias of neural networks, in International conference on machine learning, PMLR, 2019, pp. 5301–5310.
[7] M. Siami and N. Motee, Network abstraction with guaranteed performance bounds, IEEE Transactions on Automatic Control, 63 (2018), pp. 3301–3316, https://doi.org/10. 1109/TAC.2018.2791471.
[8] D. A. Spielman and N. Srivastava, Graph sparsification by effective resistances, SIAM Journal on Computing, 40 (2011), pp. 1913–1926.
[9] Z. Sun and Y. Yang, Difusco: Graph-based diffusion solvers for combinatorial optimization, Advances in neural information processing systems, 36 (2023), pp. 3706–3731. [10] C. Vignac, I. Krawczuk, A. Siraudin, B. Wang, V. Cevher, and P. Frossard, Digress: Discrete denoising diffusion for graph generation, in International Conference on Learning Representations (ICLR), 2023.
[11] X. Wang, Y. Liu, L. Pang, S. Chen, and M. Zhang, Do graph diffusion models accurately capture and generate substructure distributions?, arXiv preprint arXiv:2502.02488, (2025).
[12] O. Zaghen, M. Madeira, L. Toni, and P. Frossard, Graph discrete diffusion: a spectral study, in ICLR 2025 Workshop on Deep Generative Model in Machine Learning: Theory, Principle and Efficacy.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:08.094Z
- **Text Length:** 26366 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 11 of 11
