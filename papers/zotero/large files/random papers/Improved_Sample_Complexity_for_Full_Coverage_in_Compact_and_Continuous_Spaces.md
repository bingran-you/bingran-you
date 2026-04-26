# PDF Document: Yuhuan - 2025 - Improved Sample Complexity for Full Coverage in Compact and Continuous Spaces.pdf

**File Path:** Yuhuan - 2025 - Improved Sample Complexity for Full Coverage in Compact and Continuous Spaces.pdf

**Processed Date:** 2026-02-10T18:16:36.170Z

**File Size:** 7735.16 KB

**Total Pages:** 19

**Extracted Pages:** 19

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3476

**Title:** Improved Sample Complexity for Full Coverage in Compact and Continuous Spaces

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Improved Sample Complexity for Full Coverage in Compact
and Continuous Spaces
Lyu Yuhuan 1113488238@mail.dlut.edu.cn Dalian University of Technology
Abstract
Verifying uniform conditions over continuous spaces through random sampling is fundamental in machine learning and control theory, yet classical coverage analyses often yield conservative bounds, particularly at small failure probabilities. We study uniform random sampling on the d-dimensional unit hypercube and analyze the number of uncovered subcubes after discretization. By applying a concentration inequality to the uncoveredcount statistic, we derive a sample complexity bound with a logarithmi-
c dependence on the
failure probability (δ), i.e., M = O(C ̃ ln( 2C ̃
δ )), which contrasts sharply with the classical
linear 1/δ dependence. Under standard Lipschitz and uniformity assumptions, we present a self-contained derivation and compare our result with classical coupon-collector rates. Numerical studies across dimensions, precision levels, and confidence targets indicate that our bound tracks practical coverage requirements more tightly and scales favorably as δ → 0. Our findings offer a sharper theoretical tool for algorithms that rely on grid-based coverage guarantees, enabling more efficient sampling, -
especially in high-confidence regimes.
1 Introduction
Many algorithms in machine learning and control theory rely on theoretical conditions that must hold uniformly across continuous, compact spaces (Hornik et al., 1989; Lillicrap et al., 2015; Antos et al., 2007; Bensoussan et al., 2022; Jia & Zhou, 2022; Tabuada & Gharesifard, 2020). Verifying such conditions at every point is infeasible, as it would require checking an uncountable set. This challenge has motivated statistical frameworks that discretize compact domains into grid cells and cast the -
verification task as a variant of the coupon collector problem (Motwani & Raghavan, 1996; Younes & Simmons, 2002; Kakade, 2003).
A concrete and important example of this challenge arose in the context of Deep Contraction Drift Calculators (DCDC) for solving Contraction Drift Equations (CDEs) (Qu et al., 2024). This algorithm requires a Contraction Drift (CD) condition to be satisfied throughout the continuous state space X for solution validity. In the theoretical analysis of such algorithms, a critical step involves determining sample sizes M and N to ensure that a probability inequality of the form
P
(
sup
x∈X
[KV (x) − V (x) + U (x)] ≤ sup
x∈M
[KˆN V (x) − V (x) + U (x)] + ε/2
)
> 1 − δ,
where ε > 0 is the target tolerance and δ ∈ (0, 1) is the failure probability, holds with high confidence. Here, X represents the continuous state space, M denotes a finite sample set, and the functions KV , V and U encode the contraction drift condition essential for algorithm convergence.
The core challenge in such problems lies in bridging the gap between the supremum over the entire continuous space X and the supremum over a finite sample set M (Shalev-Shwartz & Ben-David, 2014). Specifically, we aim to bound the probability that
P
(
sup
x∈X
[KV (x) − V (x) + U (x)] > sup
x∈M
[KV (x) − V (x) + U (x)] + ε/2
)
≤δ
2.
1
arXiv:2511.17784v1 [cs.LG] 21 Nov 2025

This probability constraint ensures that the finite sample approximation is sufficiently accurate for practical algorithm implementation (Webb et al., 2018; Caflisch, 1998; Mey & Loog, 2021).
Verifying these conditions pointwise is infeasible, as it requires checking an uncountable set. A common strategy, therefore, is to sample M discrete points uniformly at random (Cochran, 1977; Metropolis & Ulam, 1949; Caflisch, 1998; Calafiore & Campi, 2006; Valiant, 1984; Vapnik, 2013) from the space X and verify the condition on this finite set (Qu et al., 2024). If the desired condition holds for all M sample points, it is inferred with some controlled probability that the condition holds over -
the entire space (Fournier et al., 2011; Valiant, 1984; Vapnik, 2013; Tem, 2005). This immediately raises the critical research question: what is the minimum number of samples M (the sample complexity) needed to "cover" the space adequately, ensuring the reliability of this approximation?
The sample complexity M is often linked to the classical coupon collector problem (Motwani & Raghavan, 1996; Ferrante & Saltalamacchia, 2014; Azimi et al., 2017). Here, the continuous domain is discretized into
C ̃ subregions (“coupons”), with C ̃ typically scaling as O(ε−d) for a precision parameter ε. Standard analyses
show an expected requirement of Θ(C ̃ ln C ̃) (Motwani & Raghavan, 1996; Ferrante & Saltalamacchia, 2014). When considering a failure probability δ (risk of incomplete coverage), analyses using Markov’s inequality typically yield sample complexity bounds of M = O( C ̃ ln C ̃
δ ).
However, a significant deficiency of these existing bounds is their linear 1/δ dependence on the failure probability. This means that requiring higher confidence dramatically increases the estimated sample size M , often leading to overly conservative estimates. For instance, in the DCDC algorithm context(Qu et al.,
2024), when dealing with functions satisfying Lipschitz conditions with constant L ̃, the classical approach often overestimates the required sample size, potentially hindering practical implementation in resourceconstrained scenarios.
The primary objective of this research is to address this gap by deriving a more precise sample complexity bound for achieving full coverage in compact spaces via uniform random sampling, specifically aiming for an improved dependency on the failure probability δ. Our study employs a direct probabilistic analysis of uncovered sub-regions after space discretization, leveraging Chebyshev’s inequality (Feller, 1991) rather than the classical Markov bound. The scope is focused on uniform random sampli-
ng within a d-dimensional unit hypercube [0, 1]d, with applications to problems like the DCDC verification task.
Our analysis establishes a sample complexity of M = O(C ̃ ln( 2C ̃
δ )), offering a more favorable ln(1/δ) de
pendency compared to the classical 1/δ scaling. This improvement is particularly significant for scenarios requiring high confidence (small δ) or addressing high-precision problems. The result is further substantiated by comprehensive numerical experiments across various parameter regimes.
Our contributions are threefold:
• We derive a sample complexity bound with logarithmic dependence on the failure probability, M =
O(C ̃ ln(2C ̃/δ)), by analyzing the uncovered-subcube count under uniform sampling and standard Lipschitz assumptions.
• We contrast this result with classical coupon-collector-based rates exhibiting linear 1/δ dependence, clarifying when and why the proposed bound yields tighter coverage requirements.
• We validate our theoretical claims through a tripartite numerical study. Across a direct grid-coverage simulation, a deep learning model for DCDC algorithm, and a real-world housing price regression, we analyze the impact of varying data dimension, precision, and confidence. The findings consistently indicate that our bound more closely reflects the actual sample sizes required for task success.
The remainder of this paper is organized as follows. Section 2 introduces the necessary mathematical preliminaries, outlines core assumptions, and presents our main theoretical results. Section 3 describes the numerical studies conducted to validate our theoretical findings, including the experimental setup and analysis of parameter impacts, and discusses the implications of our results and compares them with classical approaches. Finally, Section 4 concludes the paper by summarizing the main cont-
ributions, discussing
2

limitations, and suggesting directions for future work. The appendix provides a detailed proof of Theorem 1.
2 Related Work
Coverage analysis in discrete settings traces back to classical occupancy and coupon collector problems (Motwani & Raghavan, 1996; Ferrante & Saltalamacchia, 2014). In learning theory and Monte Carlo methods, uniform guarantees over discretized spaces are typically established through union bounds or metric entropy arguments (Shalev-Shwartz & Ben-David, 2014; Caflisch, 1998; Webb et al., 2018). In high dimensions, Lipschitz structure and metric entropy guide discretization complexity (Valiant, 198-
4; Fournier et al., 2011). Our work focuses on the uncovered-count statistic and obtains a bound with improved ln(1/δ) dependence under uniform sampling; it complements classical expectation-based arguments and aligns with concentration-based perspectives (Feller, 1991). We also connect to verification-style use cases in control-inspired learning where uniform conditions drive correctness (Mey & Loog, 2021; Qu et al., 2024).
3 Preliminaries and Main Results
3.1 Mathematical Foundations and Core Assumptions
Based on the motivating example discussed in the Introduction, we now formalize the mathematical framework for our analysis. Consider the problem of random sampling on a compact space X = [0, 1]d. Our goal is to determine the sample size M such that the probability inequality
P
(
sup
x∈X
[KV (x) − V (x) + U (x)] > sup
x∈M
[KV (x) − V (x) + U (x)] + ε/2
)
≤δ
2
holds with high confidence, where M represents a finite random sample set of size M . To address this problem systematically, we must analyze the Lipschitz properties of the function KV − V + U . For any x, y ∈ X , the Lipschitz analysis yields:
|KV (x) − KV (y)| = |EDf (x)V (f (x)) − EDf (y)V (f (y))|
≤ |EDf (x)V (f (x)) − EDf (x)V (f (y))| + |EDf (x)V (f (y)) − EDf (y)V (f (y))|
≤ EDf (x) |V (f (x)) − V (f (y))| + E |Df (x) − Df (y)| V (f (y))
≤ DV · EDf 2 · ∥x − y∥ + sup V · ED2f · ∥x − y∥,
where DV denotes the Lipschitz constant of the function V . Therefore, the Lipschitz constant L ̃ of the function KV − V + U satisfies:
L ̃ d=ef DV · EDf 2 + sup V · ED2f + DV + DU.
Without loss of generality, let the research space be a d-dimensional unit cube X = [0, 1]d. We discretize the space by uniformly dividing each dimension into k segments. To ensure the function variation within any
sub-region is bounded, we set k = ⌈2L ̃√d/ε⌉. The parameter r ̃ is defined as r ̃ = ε
2L ̃ , where ε is the precision
parameter and L ̃ is the Lipschitz constant. The total number of subcubes C ̃, is thus given by:
C ̃ = kd =
(⌈
2L ̃√d ε
⌉)d
= O(ε−d). (1)
Let Z be the number of subcubes that are not covered after M independent random samples. The coverage failure event is Z ≥ 1. For each subcube i, define the indicator random variable Ii,j:
Ii,j =
{
1, the j-th sample does not cover subcube i ; 0, the j-th sample covers subcube i.
3

Assuming that the sample points are uniformly distributed in [0, 1]d, the probability that a particular subcube
i is covered by a single sample is ps = 1/C ̃. Let Yi denote the indicator variable that subcube i is not covered after M samples:
Yi =
M
∏
j=1
Ii,j .
The total number of uncovered subcubes Z can be expressed as:
Z=
C ̃
∑
i=1
Yi. (2)
The following core assumptions underpin this study:
1. The sample points are independently and identically distributed (i.i.d.), following a uniform distribution on [0, 1]d.
2. The space [0, 1]d can be divided into C ̃ equal volume subcubes.
3. The probability of a single sampling covering any subcube is equal, that is, ps = 1/C ̃.
3.2 Main Theorems and Corollaries
Lemma 1:(Expectation of the number of uncovered subcubes)
The expected value of the number of uncovered subcubes Z after M independent samples is:
E[Z] = C ̃
(
1− 1
C ̃
)M
. (3)
Proof. : For any subcube i, the probability of being uncovered after M samples is:
E[Yi] = P (Yi = 1) =
(
1− 1
C ̃
)M
. (4)
By the linearity of expectation, combining equations (2) and (4), we obtain:
E[Z] =
C ̃
∑
i=1
E[Yi] = C ̃
(
1− 1
C ̃
)M
.
Theorem 1 (Sample Complexity with Logarithmic Dependence). Suppose X = [0, 1]d is discretized into C ̃ equal subcubes, and the sampling distribution is uniform over X . Under the assumed Lipschitz continuity of V and U (with discretization resolution chosen accordingly), to achieve full coverage with probability at least 1 − δ, it suffices that
M = O(C ̃ ln 2C ̃
δ ).
A more precise lower bound is given by the following formula:
M = O( ln q1
ln(1 − C1 ̃ ) ),
where q1 = 2C ̃(1+δ)−
√
4C ̃ 2 +8C ̃ δ (C ̃ −1)
2(2C ̃+δC ̃2) .
Comparing with the classical method, the classic coupon collection model gives M2 = O(C ̃ ln C ̃/δ).
The method in this paper yields M1 = O(C ̃ ln 2C ̃
δ ). Our bound replaces the linear dependence on 1/δ with
a much milder logarithmic dependenceln(1/δ), clarifying a potentially substantial improvement in highconfidence regimes.
4

4 Numerical Studies
This section presents a series of numerical experiments designed to validate the theoretical sample complexity bounds derived in Section 2. We conduct a comprehensive parameter analysis to assess the performance of our proposed model against classical theories under various conditions.
4.1 Validation of Theoretical Sample Complexity
This section presents a series of numerical experiments designed to validate the theoretical sample complexity bounds derived in Section 2. We conduct a comprehensive parameter analysis to assess the performance of our proposed model against classical theories under various conditions. The benchmark parameters for this study are set as follows: dimension d = 2, precision ε = 0.1, failure probability δ = 0.1, and Lipschitz
constant L ̃ = 1.0. When analyzing one parameter, the others are held at their benchmark values. For each parameter configuration, we performed 32 independent trials to ensure statistical robustness. In the first experiment, we analyze the effect of dimension d ∈ {1, 2, 3}. The results are presented in Figure 1. The left plot shows that the ratio of actual samples to our theoretical bound (Mactual/Mtheory) remains consistently around an average of 0.72, indicating a tight and accurate prediction. -
The center plot starkly contrasts our theoretical sample size requirement with the classic method’s, showing that the classic bound grows much more rapidly with dimension. The rightmost plot quantifies this advantage, indicating an improvement of over 80% across all tested dimensions, reaching up to 87.6% for d = 3.
Figure 1: Analysis of Dimension Parameter (d). Subplots show: (a) Ratio of actual to theoretical sample complexity, (b) Comparison of theoretical and actual sample sizes, (c) Improvement of our method over the classic method.
The second experiment details the analysis for precision ε ∈ [0.05, 0.5], with results shown in Figure 2. The ratio analysis (left plot) shows that our theoretical bound remains a strong predictor across the entire range of ε values, with the average ratio fluctuating around 0.80. The theoretical comparison (center plot) reveals that the sample size required by the classic method increases dramatically for small ε, whereas our method requires a much more manageable number of samples. The improveme-
nt plot (right) confirms a consistent performance gain of over 85% for our method.
5

Figure 2: Analysis of Precision Parameter (ε). Subplots show: (a) Ratio of actual to theoretical sample complexity, (b) Comparison of theoretical and actual sample sizes, (c) Improvement of our method over the classic method.
The third experiment examines the impact of the failure probability δ ∈ [0.02, 0.2], as illustrated in Figure 3. The ratio plot (left) confirms that our model’s predictions are robust, with the Mactual/Mtheory ratio staying close to an average of 0.77. The center plot highlights the practical benefit of our model’s logarithmic dependence on 1/δ. As δ approaches zero, the sample size required by the classic method becomes prohibitively large, while our proposed requirement grows much more slowly. T-
he improvement plot (right) shows that the advantage of our method is most pronounced at high-confidence (low δ) requirements, with improvements ranging from 74.6% to over 95.9%.
Figure 3: Analysis of Failure Probability Parameter (δ). Subplots show: (a) Ratio of actual to theoretical sample complexity, (b) Comparison of theoretical and actual sample sizes, (c) Improvement of our method over the classic method.
In summary, the numerical results across all three parameter studies robustly validate our theoretical findings. Our proposed sample complexity bound is not only significantly tighter and more practical than classical bounds but also accurately predicts the actual sample requirements observed in simulations.
4.2 Application in DCDC Framework
To further validate the practical utility of our theoretical bounds, we conducted an experiment within the Deep Contraction Drift Calculators (DCDC) framework, applying it to a 2D Ornstein-Uhlenbeck process. The experiment was configured with a precision of ε = 0.05 and a failure probability of δ = 0.01.
Based on these parameters, our theoretical sample size was calculated to be Mtheory = 43, 486, whereas the classical method yielded a much larger requirement of Mclassic = 2, 852, 379. We established three experimental groups: an "Insufficient" group with half of our theoretical sample size, a "Sufficient" group using our full theoretical sample size, and a "Conservative" group using the classical sample size.
6

The primary results, summarized in Figure 4, demonstrate that the "Sufficient" group achieved a CDE satisfaction rate of 99.19%, which is comparable to the 99.15% rate of the "Conservative" group, despite using approximately 98.5% fewer samples. This outcome strongly supports our theory’s effectiveness in a real-world application, confirming that it provides a reliable and significantly more efficient sample complexity bound.
Figure 4: Validation of sample complexity in the DCDC framework. The chart displays the CDE satisfaction rate and final training loss for the Insufficient, Sufficient, and Conservative sample groups.
The training dynamics are detailed in Figure 5, which plots the average training loss on a logarithmic scale. All three groups show robust convergence, characterized by a rapid initial decrease in loss followed by stabilization. The "Sufficient" and "Conservative" groups achieve nearly indistinguishable final loss values, demonstrating that the sample size derived from our theory is adequate for effective training. While the "Insufficient" group also converges, its final loss is slightly elevated,-
 which is consistent with its lower CDE satisfaction rate. The tight and overlapping variance bands across all groups highlight the stability of the learning process.
Furthermore, Figure 6 visualizes the learned Lyapunov-like function (V-function) and the CDE residual surfaces, averaged over five trials. All three groups learned the expected bowl-shaped V-function, indicative of a stable system. The residual plots confirm that the CDE condition (KV − V < 0) was satisfied across most of the state space, with minor positive residuals near the origin, which is an expected artifact of the learning process. The similarity of the surfaces between the "Sufficient" and-
 "Conservative" groups further reinforces that our sample complexity bound is adequate for learning the correct system dynamics.
4.3 Empirical Validation of Sample-Complexity Bounds on the California Housing Dataset
To empirically validate the theoretical sample complexity bounds derived in this paper, we conducted a series of experiments on the California Housing dataset. This dataset is a classic regression problem, well-suited for testing our framework’s ability to predict performance and guide sample size selection in a real-world scenario.
The primary objective of the experiment is to verify whether the model’s performance on the test set aligns with the predictions of our theoretical bounds. We designed the experiment around three distinct groups of training sample sizes, determined by our theoretical calculations:
7

Figure 5: Average DCDC training loss over 5 trials. The plot shows the convergence of the training process for each sample group on a log scale.
Figure 6: Average V-function and CDE residual surfaces. The top row shows the learned V-function, and the bottom row shows the CDE residual (KV − V ) for each sample group.
8

• Insufficient Group: A sample size significantly smaller than our calculated sufficient bound (0.1 × M1), intended to represent a scenario where the data is inadequate for achieving the desired performance.
• Sufficient Group: The sample size is set to M1, our theoretically derived lower bound for achieving the target performance with high probability.
• Conservative Group: The sample size is set to M2, a more conservative bound, which should comfortably meet or exceed the target performance.
For each group, we trained a RandomForestRegressor model and evaluated its performance using Mean Absolute Error (MAE), Root Mean Squared Error (RMSE), and the coefficient of determination (R2). We also evaluated the data coverage using our proposed integrated coverage metric, which combines k-NN, adaptive grid, and manifold-based approaches. The experiment was repeated over 10 trials with different random seeds to ensure the statistical robustness of our findings.
The key parameters for the experiment were set as follows:
• Target MAE (εtarget): We set a target performance of 0.5 for the Mean Absolute Error.
• Confidence Level (δ): The confidence parameter was set to 0.05, implying a 95% confidence that the true MAE is within our target.
• Intrinsic Dimension (d∗): Estimated from the data, yielding d∗ ≈ 6.03.
• Lipschitz Constant (Lest): Estimated using a Ridge model, resulting in Lest ≈ 0.45.
• Derived Epsilon (ε): Calculated as ε = εtarget/Lest ≈ 1.10.
Based on these parameters, the theoretical sample complexity bounds were calculated as:
• M1 (Sufficient) = 7,494
• M2 (Conservative) = 106,212
The corresponding sample sizes for the experimental groups were 749, 7,494, and 106,212.
The experimental results strongly support our theoretical framework. The average performance metrics across 10 trials for each group are summarized in Table 1 and visualized in Figure 7.
Table 1: Mean Performance Metrics Across Experimental Groups
Group Sample Size MAE RMSE R2 Insufficient 749 0.440 0.632 0.692 Sufficient 7,494 0.379 0.566 0.755 Conservative 106,212 0.361 0.546 0.772
As predicted, we observe a clear trend of performance improvement with increasing sample size. The MAE for the Sufficient group (0.379) is significantly better than the Insufficient group (0.440) and successfully meets our target MAE of 0.5. The Conservative group shows a marginal improvement over the Sufficient group, suggesting that the M1 bound is already effective at capturing the required sample size.
Figure 8 further details the relationship between sample size and performance. The plots show a clear trend of diminishing returns, where performance gains (lower MAE, higher R2) and coverage rate saturate as the sample size increases towards the ’Conservative’ level. This saturation effect underscores the efficiency of the M1 bound, as it achieves most of the potential performance gains with a fraction of the data required by the M2 bound.
9

Figure 7: Comprehensive performance comparison across the three experimental groups. The bar chart (top-left) and box plot (top-right) illustrate the improvement in MAE and R2 with larger sample sizes. The scatter plots show the trade-off between sample size and MAE (bottom-left) and coverage versus R2 (bottom-right).
Figure 8: Analysis of sample efficiency. The plots show a clear trend of diminishing returns, where performance gains (lower MAE, higher R2) and coverage rate saturate as the sample size increases. The efficiency comparison (bottom-left) highlights how the ’Sufficient’ group offers a good balance between performance and data cost.
10

Statistical analysis confirms these observations. An ANOVA test revealed a statistically significant difference in MAE, RMSE, and R2 across the three groups (p < 0.001 for all metrics). Subsequent Tukey’s HSD posthoc tests showed that all pairwise comparisons between the groups were significant. Figure 9 visualizes these results, where a value of "1" (red) indicates a statistically significant difference (p < 0.05) between the groups. This confirms that each increase in sample size tier led to a -
meaningful performance gain.
Figure 9: Heatmaps of statistical significance from Tukey’s HSD post-hoc tests. The value "1" (red) indicates a statistically significant difference (p < 0.05) between the groups, while "0" (blue) indicates no significant difference. All pairwise comparisons for MAE, RMSE, R2, and Integrated Coverage are shown to be significant.
In conclusion, the experimental results on the California Housing dataset provide strong empirical evidence for the validity of our theoretical sample complexity bounds. The experiment demonstrates that our framework can effectively estimate the required sample size to achieve a predefined performance target in a practical machine learning application, with visualizations and statistical tests confirming the significance of our proposed sample size tiers.
5 Broader Impact
Our result supports principled, resource-aware sampling strategies for verification tasks that require uniform guarantees over continuous domains. Positive impacts include reduced computational burden and a clearer calibration of confidence vs. cost. Potential risks arise if assumptions (uniformity, independence, Lipschitz structure) are violated in deployment; we recommend diagnostics to detect distribution shift or non-uniform sampling. Environmental benefits follow from fewer samples at high co-
nfidence, reducing energy costs.
6 Conclusion and Future Work
This study establishes a tight lower bound of M = O(C ̃ ln( 2C ̃
δ )) for complete coverage in uniformly sampled
d-dimensional unit cubes, representing a fundamental improvement over classical coupon collector bounds. Our analysis leverages spatial discretization and Chebyshev-based probabilistic techniques to achieve logarithmic dependence on failure probability, compared to the classical linear dependence. This improvement is particularly significant for high-confidence scenarios and high-dimensional problems, where classical bounds become overly conservative. The theoretical results are validated through -
comprehensive numerical experiments, demonstrating practical relevance for algorithm verification and resource allocation. Future work
11

will explore tighter bounds using advanced concentration inequalities and extend the framework to adaptive sampling schemes and broader applications in machine learning and optimization.
References
Sequential Algorithms for Probabilistic Robust Design, pp. 149–178. Springer London, London, 2005. ISBN 978-1-84628-052-8. doi: 10.1007/1-84628-052-4_11. URL https://doi.org/10.1007/1-84628-052-4_ 11.
András Antos, Csaba Szepesvári, and Rémi Munos. Fitted q-iteration in continuous action-space mdps. In J. Platt, D. Koller, Y. Singer, and S. Roweis (eds.), Advances in Neural Information Processing Systems, volume 20. Curran Associates, Inc., 2007. URL https://proceedings.neurips.cc/paper_files/paper/ 2007/file/da0d1111d2dc5d489242e60ebcbaf988-Paper.pdf.
Iman Azimi, Arman Anzanpour, Amir M. Rahmani, Tapio Pahikkala, Marco Levorato, Pasi Liljeberg, and Nikil Dutt. Hich: Hierarchical fog-assisted computing architecture for healthcare iot. ACM Trans. Embed. Comput. Syst., 16(5s), September 2017. ISSN 1539-9087. doi: 10.1145/3126501. URL https: //doi.org/10.1145/3126501.
Alain Bensoussan, Yiqun Li, Dinh Phan Cao Nguyen, Minh-Binh Tran, Sheung Chi Phillip Yam, and Xiang Zhou. Chapter 16 - machine learning and control theory. In Emmanuel Trélat and Enrique Zuazua (eds.), Numerical Control: Part A, volume 23 of Handbook of Numerical Analysis, pp. 531–558. Elsevier, 2022. doi: https://doi.org/10.1016/bs.hna.2021.12.016. URL https://www.sciencedirect.com/ science/article/pii/S1570865921000314.
Russel E Caflisch. Monte carlo and quasi-monte carlo methods. Acta numerica, 7:1–49, 1998.
Giuseppe Carlo Calafiore and Marco C Campi. The scenario approach to robust control design. IEEE Transactions on automatic control, 51(5):742–753, 2006.
William Gemmell Cochran. Sampling techniques. john wiley & sons, 1977.
William Feller. An introduction to probability theory and its applications, Volume 2, volume 2. John Wiley & Sons, 1991.
Marco Ferrante and Monica Saltalamacchia. The coupon collector’s problem. Materials matematics, pp. 0001–35, 2014.
Laurent Fournier, Avi Ziv, Ekaterina Kutsy, and Ofer Strichman. A probabilistic analysis of coverage methods. ACM Transactions on Design Automation of Electronic Systems (TODAES), 16(4):1–20, 2011.
Kurt Hornik, Maxwell Stinchcombe, and Halbert White. Multilayer feedforward networks are universal approximators. Neural networks, 2(5):359–366, 1989.
Yanwei Jia and Xun Yu Zhou. Policy gradient and actor-critic learning in continuous time and space: Theory and algorithms. Journal of Machine Learning Research, 23(275):1–50, 2022. URL http://jmlr. org/papers/v23/21-1387.html.
Sham Machandranath Kakade. On the sample complexity of reinforcement learning. University of London, University College London (United Kingdom), 2003.
Timothy P Lillicrap, Jonathan J Hunt, Alexander Pritzel, Nicolas Heess, Tom Erez, Yuval Tassa, David Silver, and Daan Wierstra. Continuous control with deep reinforcement learning. arXiv preprint arXiv:1509.02971, 2015.
Nicholas Metropolis and S. Ulam. The monte carlo method. Journal of the American Statistical Association, 44(247):335–341, 1949. doi: 10.1080/01621459.1949.10483310.
12

Alexander Mey and Marco Loog. Consistency and finite sample behavior of binary class probability estimation. In Proceedings of the AAAI Conference on Artificial Intelligence, volume 35, pp. 8967–8974, 2021.
Rajeev Motwani and Prabhakar Raghavan. Randomized algorithms. ACM Computing Surveys (CSUR), 28 (1):33–37, 1996.
Yanlin Qu, Jose Blanchet, and Peter Glynn. Deep learning for computing convergence rates of markov chains. In Advances in Neural Information Processing Systems, volume 37, pp. TBD, 2024. URL https: //proceedings.neurips.cc/paper/2024/.
Shai Shalev-Shwartz and Shai Ben-David. Understanding machine learning: From theory to algorithms. Cambridge university press, 2014.
Paulo Tabuada and Bahman Gharesifard. Universal approximation power of deep neural networks via nonlinear control theory. CoRR, abs/2007.06007, 2020. URL https://arxiv.org/abs/2007.06007.
Leslie G Valiant. A theory of the learnable. Communications of the ACM, 27(11):1134–1142, 1984.
Vladimir Vapnik. The nature of statistical learning theory. Springer science & business media, 2013.
Stefan Webb, Tom Rainforth, Yee Whye Teh, and M Pawan Kumar. A statistical approach to assessing neural network robustness. arXiv preprint arXiv:1811.07209, 2018.
Håkan LS Younes and Reid G Simmons. Probabilistic verification of discrete event systems using acceptance sampling. In International Conference on Computer Aided Verification, pp. 223–235. Springer, 2002.
A Appendix: Proof of Theorem 1
To derive the lower bound of sample complexity, we first apply the unilateral Chebyshev inequality:
P (Z − E[Z] ≥ a) ≤ V ar[Z]
a2 .
Let a = kE[Z], satisfying (k + 1)E[Z] = 1. Assuming E[Z] < 1, when 1 − E[Z] > 0, substituting into the inequality yields:
P (Z ≥ 1) ≤ V ar[Z]
(kE[Z])2 = V ar[Z]
(1 − E[Z])2 . (5)
The requirement P (Z ≥ 1) ≤ δ/2 is given by (5), that is:
V ar[Z]
(1 − E[Z])2 ≤ δ
2 . (6)
From Lemma 1 and (3):
E[Z] = C ̃(1 − 1
C ̃ )M . (7)
For any subcube i, its uncovered indicator variable Yi satisfies:
E[Yi] = (1 − 1
C ̃ )M , V ar[Yi] = E[Yi](1 − E[Yi]).
Since the expression for Z is:
Z=
C ̃
∑
i=1
Yi.
13

Therefore, the variance of Z can be obtained as:
V ar[Z] =
C ̃
∑
i=1
V ar[Yi] + ∑
i̸=j
Cov(Yi, Yj).
Meanwhile, calculate Cov(Yi, Yj):
Cov(Yi, Yj) = E[YiYj] − E[Yi] · E[Yj]
= (1 − 2
C ̃ )M − (1 − 1
C ̃ )2M
=1
C ̃2M · (C ̃M (C ̃ − 2)M − (C ̃ − 1)2M ) < 0. (8)
Then it can be obtained that Cov(Yi, Yj) < 0, so the upper bound of variance is:
V ar[Z] =
C ̃
∑
i=1
V ar[Yi] + ∑
i̸=j
Cov(Yi, Yj) ≤
C ̃
∑
i=1
V ar[Yi] = C ̃V ar[Yi]. (9)
Substitute equations (7) and (9) into (6):
C ̃E[Yi](1 − E[Yi])
(1 − C ̃E[Yi])2 ≤ δ
2 . (10)
Let q = E[Yi] = (1 − C1 ̃ )M , and (10) transforms to:
C ̃q(1 − q)
(1 − C ̃q)2 ≤ δ
2.
Expand and organize to obtain the quadratic inequality:
q2(2C ̃ + δC ̃2) − 2C ̃q(1 + δ) + δ ≥ 0. (11)
Solve the inequality (11), whose discriminant is:
∆ = 4C ̃2 + 8C ̃δ(C ̃ − 1). (12)
Since C ̃ ≥ 1 and δ > 0, ∆ > 0. The quadratic equation has two real roots:
q1 = 2C ̃(1 + δ) − √∆
2(2C ̃ + δC ̃2) , q2 = 2C ̃(1 + δ) + √∆
2(2C ̃ + δC ̃2) . (13)
Since a = 2C ̃ + δC ̃2 > 0, the inequality solves to q ≤ q1 or q ≥ q2. Analysis shows that q2 ≥ 1, so we take
q ≤ q1. Substituting q = (1 − C1 ̃ )M for q ≤ q1 and taking the logarithm gives:
M ≥ C ̃ ln 1
q1
≥ ln q1
ln(1 − C1 ̃ ) . (14)
Therefore, we can choose M = O(C ̃ ln 1
q1 ). To establish this bound, we first derive the asymptotic approxi
mation for q1 when δ → 0+. Firstly, we analysis the expansion of ∆ (12):
∆ = 4C ̃2 + 8C ̃δ(C ̃ − 1). =⇒
√∆ = 2C ̃
√
1 + 2δ(1 − 1
C ̃ ) .
By a Taylor expansion
√1 + x = 1 + x
2 − x2
8 + O(x3),
14

we can obtain that √∆ = 2C ̃(1 + δ(1 − 1
C ̃ ) − δ2
2 (1 − 1
C ̃ )2 + O(δ3)). (15)
Substitute equation (15) into (13)
q1 = 2C ̃(1 + δ) − √∆
2(2C ̃ + δC ̃2)
= 2C ̃(1 + δ) − 2C ̃(1 + δ(1 − C1 ̃ ) − δ2
2 (1 − C1 ̃ )2 + O(δ3))
2(2C ̃ + δC ̃2)
= 2δ + C ̃δ2(1 − C2 ̃ ) + O(δ3)
4C ̃(1 + δC ̃
2) .
Then we calculate the ratio:
q1 δ
2C ̃
= q1 · 2C ̃
δ = 4C ̃ + 2C ̃2δ(1 − C2 ̃ ) + O(δ2)
4C ̃(1 + δC ̃
2)
= 1 + δC ̃
2 (1 − C2 ̃ ) + O(δ2)
1 + δC ̃
2
= 1 + O(δ)
1 + O(δ) .
Such that, when δ → 0+
δl→im0+
q1 δ
2C ̃
= δl→im0+
1 + O(δ)
1 + O(δ) = 1.
Finally, we prove that
q1 ≈ δ
2C ̃ .
Substitute (14) to obtain the final lower bound:
M = O(C ̃ ln( 2C ̃
δ )).
B Experiment Appendix
B.1 Hardware Configuration
The experiments were conducted on a workstation with the following specifications:
• CPU: AMD Ryzen® 9 9950X3D @ 4.3 GHz base / 5.7 GHz boost
• Memory: 96 GB DDR5-5600
• GPU: NVIDIA® GeForce RTXTM 5090 32 GB GDDR7
B.2 Experimental Environment for Parameter Analysis of Grid Coverage
B.2.1 Software Environment
The software stack used for the experiments is detailed below:
• Operating System: Windows 10 Pro (64-bit)
15

• Python Version: 3.12.3
• Core Libraries:
– numpy: 1.26.4 – matplotlib: 3.9.0 – seaborn: 0.13.2 – psutil: 5.9.8
B.2.2 Dataset: Synthetic Grid Coverage Simulation
• Source: This experiment does not use an external dataset. It is a pure simulation based on the GridCoverage class, which models the problem of covering a d-dimensional grid with randomly sampled points.
• Scale: The simulation runs up to a maximum of 1,000,000 samples (max_samples) for each parameter configuration to determine the point at which full grid coverage is achieved.
• Preprocessing: Not applicable, as the experiment is a direct simulation of a mathematical model.
B.2.3 Parameter Settings
The experiment systematically analyzes the impact of three key parameters by varying one while keeping the others fixed. The ranges and fixed values are:
• Dimension (d):
– Varied values: [1, 2, 3] – Fixed value (when not varied): 2
• Precision (epsilon):
– Varied values: np.linspace(0.05, 0.5, 10) – Fixed value (when not varied): 0.1
• Failure Probability (delta):
– Varied values: np.linspace(0.02, 0.2, 10) – Fixed value (when not varied): 0.1
• Lipschitz Constant (L_tilde): Fixed at 1.0 for all simulations.
• Number of Trials (num_trials): 10 trials are run for each parameter setting to ensure statistical robustness.
B.2.4 Running Conditions
• The script leverages multiprocessing to run experimental trials in parallel, significantly reducing the total execution time. It is designed to utilize all available CPU cores.
• The simulation can be memory-intensive, especially for higher dimensions, but is generally manageable with 32 GB of RAM.
• The primary output consists of three enhanced analysis plots (dimension_enhanced_analysis.png, epsilon_enhanced_analysis.png, delta_enhanced_analysis.png), which are saved to disk. Ensure write permissions are available.
16

B.3 Experimental Environment for DCDC Sample Complexity Validation
B.3.1 Software Environment
The software stack used for the experiments is detailed below:
• Operating System: Windows 10 Pro (64-bit)
• Python Version: 3.12.3
• Core Libraries:
– torch: 2.3.1 – numpy: 1.26.4 – matplotlib: 3.9.0 – seaborn: 0.13.2 – tqdm: 4.66.4
B.3.2 Dataset: Synthetic Ornstein-Uhlenbeck Process
• Source: The data is synthetically generated on-the-fly by simulating a 2-dimensional OrnsteinUhlenbeck (OU) process. This avoids reliance on external datasets and allows for precise control over the data-generating dynamics.
• Scale: For each experimental group (Insufficient, Sufficient, Conservative), a set of points is sampled uniformly from the domain. The number of samples is determined by the theoretical sample complexity calculations (Mtheory and Mclassic).
• Preprocessing: No explicit preprocessing is required as the data is generated in a controlled manner. The training process involves sampling mini-batches from a fixed set of uniformly distributed points within the specified bounds.
B.3.3 Parameter Settings
The key parameters for the DCDC experiment are defined in the ExperimentConfig class:
• System Parameters:
– dimension: 2
– epsilon: 0.05 (error tolerance) – delta: 0.01 (failure probability)
– lipschitz_constant: 1.0
• Ornstein-Uhlenbeck Process:
– beta: 4.0 (mean reversion rate) – sigma: 4.0 (volatility) – dt: 0.01 (time step)
• Training Parameters:
– max_epochs: 50,000
– learning_rate: 7e-5
– batch_size: 256
• Network Architecture (MLPNetwork):
– hidden_dims: [512, 512, 256] with Tanh activation.
17

B.3.4 Running Conditions
• A CUDA-enabled GPU is highly recommended for this experiment due to the computational demands of training the deep neural network over many epochs.
• The script is self-contained and generates all necessary data.
• The experiment saves comprehensive results, including JSON files with detailed metrics, loss curves, 3D surface plots of the learned value function, and a summary report in Markdown format. Ensure write permissions are available in the execution directory.
B.4 Experimental Environment for California Housing Sample Complexity Validation
B.4.1 Software Environment
The software stack used for the experiments is detailed below:
• Python Version: 3.12.3
• Core Libraries:
– numpy: 1.26.4 – pandas: 2.2.2 – scikit-learn: 1.5.0 – umap-learn: 0.5.6 – scipy: 1.13.1 – matplotlib: 3.9.0 – seaborn: 0.13.2 – statsmodels: 0.14.2 – plotly: 5.22.0
B.4.2 Dataset: California Housing
• Source: The experiment utilizes the California Housing dataset, available through the scikit-learn library. This dataset is based on data from the 1990 California census.
• Scale: The dataset consists of 20,640 samples and 8 numerical features. The target variable is the median house value for California districts.
• Preprocessing: The features are first standardized using StandardScaler to have zero mean and unit variance. Subsequently, a whitening transformation is applied to the scaled data to remove correlations between features and ensure they have a common variance. The data is then split into training (80%) and testing (20%) sets.
B.4.3 Parameter Settings
The key parameters for the California Housing experiment are defined in the ExperimentConfig class:
• Target MAE (target_mae): 0.5. This defines the desired precision for the regression model, which is used to derive the error tolerance ε.
• Failure Probability (delta): 0.05. This is the acceptable probability of the sample complexity bounds not holding.
• Random State (random_state): 42. Used for ensuring reproducibility in data splitting and model training.
• Number of Trials (n_trials): 10. The number of Monte Carlo simulations to run for robust statistical analysis.
• Test Set Size (test_size): 0.2. Specifies that 20% of the data is reserved for testing.
18

B.4.4 Running Conditions
• The experiment is designed to be self-contained and does not require external data downloads beyond what is provided by scikit-learn.
• The execution involves multiple Monte Carlo trials, which can be computationally intensive and time-consuming.
• The script generates and saves several output files, including detailed JSON results, statistical analysis reports, and performance visualizations (.png, .html). Ensure write permissions are available in the execution directory.
19

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:36.170Z
- **Text Length:** 40648 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 19 of 19
