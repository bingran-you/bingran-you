# PDF Document: Li - 2025 - Sparse Broad Learning System via Sequential Threshold Least-Squares for Nonlinear System Identificat.pdf

**File Path:** Li - 2025 - Sparse Broad Learning System via Sequential Threshold Least-Squares for Nonlinear System Identificat.pdf

**Processed Date:** 2026-02-10T18:17:12.040Z

**File Size:** 198.89 KB

**Total Pages:** 6

**Extracted Pages:** 6

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3257

**Title:** Sparse Broad Learning System via Sequential Threshold Least-Squares for Nonlinear System Identification under Noise

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Sparse Broad Learning System via Sequential
Threshold Least-Squares for Nonlinear System
Identification under Noise
Zijing Li
School of Astronautics Harbin Institute of Technology Harbin, China 24S104221@stu.hit.edu.cn
Second Author
School of Astronautics Harbin Institute of Technology Harbin, China email@address.com
Abstract—The Broad Learning System (BLS) has gained significant attention for its computational efficiency and less network parameters compared to deep learning structures. However, the standard BLS relies on the pseudoinverse solution, which minimizes the mean square error with L2-norm but lacks robustness against sensor noise and outliers common in industrial environments. To address this limitation, this paper proposes a novel Sparse Broad Learning System (S-BLS) framework. Instead of the tradi-
tional ridge regression, we incorporate the Sequential Threshold Least-Squares (STLS) algorithm—originally utilized in the sparse identification of nonlinear dynamics (SINDy)—into the output weight learning process of BLS. By iteratively thresholding small coefficients, the proposed method promotes sparsity in the output weights, effectively filtering out noise components while maintaining modeling accuracy. This approach falls under the category of sparse regression and is particularly suitable f-
or noisy environments. Experimental results on a numerical nonlinear system and a noisy Continuous Stirred Tank Reactor (CSTR) benchmark demonstrate that the proposed method is effective and achieves superior robustness compared to standard BLS. Index Terms—Broad Learning System, Noise Robustness, Sequential Threshold Least-Squares, System Identification.
I. INTRODUCTION
Nonlinear system identification plays a pivotal role in modern industrial applications, such as chemical process control and robotics, where capturing complex dynamics from data is essential. While Deep Learning (DL) approaches, including Recurrent Neural Networks (RNNs) and Long Short-Term Memory (LSTM) networks, have demonstrated powerful approximation capabilities, they are often plagued by computationally intensive training processes, massive data requirements, and the need for extensive hyper-
parameter tuning. To address these limitations and offer a computationally efficient alternative, the Broad Learning System (BLS) was proposed by Chen and Liu [1]. Unlike deep architectures that stack layers vertically, BLS expands nodes horizontally and determines output weights analytically using the Moore-Penrose pseudoinverse. This unique flat structure ensures extremely fast training speeds, making BLS highly suitable for real-time industrial modeling.
To enhance the performance of standard BLS, extensive research has been conducted regarding structural evolution, robust learning, and regularization. From a structural perspective, various architectures have been developed to adapt BLS to complex tasks. Inspired by the depth concept, Stacked BLS [2] was introduced to enhance feature abstraction while maintaining the system’s learning ability. Similarly, to handle uncertainty and dynamic variations, Fuzzy BLS (FBLS) [3] and Recurrent BLS (RBLS) [4-
] have been proposed. However, these structural expansions often result in a substantial increase in the number of network nodes, leading to model redundancy and higher computational costs during the inference phase. Regarding optimization objectives, standard BLS relies on the L2-norm (Mean Square Error), which is sensitive to non-Gaussian noise and outliers commonly found in industrial environments. To mitigate this, robust variants such as the Maximum Correntropy Criterion (MCC-BLS) [5] and Wei-
ghted BLS (WBLS) [6] have been introduced. WBLS improves robustness by assigning lower weights to outliers. Nevertheless, these methods face two critical limitations: First, while they reduce the impact of noise, they typically retain the full network topology without eliminating redundant nodes (i.e., lack of sparsity). Second, the introduction of complex non-convex loss functions or iterative weighting often precludes the use of the pseudoinverse closed-form solution, thereby sacrificing the cor-
e speed advantage of BLS. To induce sparsity, regularization techniques have been applied. Initially, sparse models based on the L1-norm (Lasso), such as the Compact BLS [7], were developed. While L1 regularization can suppress insignificant nodes, it acts as a ”soft” thresholding operator, which may not sufficiently prune small coefficients caused by noise. More recently, direct L0norm optimization has been explored. Chu et al. proposed a Controllable Sparse BLS (CSBLS) [8], which enforces sparsi-
ty via a cardinality constraint (‖W ‖0 ≤ Q) and solves it using Normalized Iterative Hard Thresholding (NIHT). Although CSBLS effectively controls model size, it fundamentally relies on a first-order gradient descent approach, which can be slow
arXiv:2511.18081v1 [eess.SY] 22 Nov 2025

to converge compared to analytical methods. Furthermore, CSBLS requires the number of active nodes Q to be fixed a priori. In system identification, the true order of the system is often unknown, making it difficult to pre-determine the optimal Q without extensive trial and error. In the field of data-driven discovery of dynamics, the Sparse Identification of Nonlinear Dynamics (SINDy) [9] has demonstrated that finding a sparse representation can effectively filter out noise. The core solver of S-
INDy is the Sequential Threshold Least-Squares (STLS) algorithm. Unlike soft regularization or gradient-based pruning, STLS acts as a ”hard” thresholding operator combined with leastsquares projection. It rapidly converges to a sparse solution by iteratively zeroing out coefficients smaller than a noise threshold λ. This mechanism allows the model to focus solely on the underlying dynamics while discarding noise-induced connections. Inspired by the efficiency of STLS, we propose a robust Sparse Br-
oad Learning System (S-BLS). Instead of imposing a fixed node constraint like CSBLS or employing slow iterative solvers, we integrate the STLS algorithm directly into the BLS weight optimization process. This approach differs from existing methods in that it adaptively determines the active feature nodes based on the noise level, allowing SBLS to simultaneously achieve structural sparsity and noise robustness while maintaining the computational efficiency characteristic of the original BLS. The ma-
in contributions of this paper are summarized as follows:
1) We propose a unified framework that integrates the Sequential Thresholded Least-Squares (STLS) algorithm into BLS. This effectively replaces the dense L2 pseudoinverse solution with a sparse, noise-resilient solution. Unlike CSBLS [8], our method does not require a preset number of nodes and avoids slow gradient-based optimization. 2) The proposed method exhibits superior robustness and interpretability. The STLS mechanism acts as a ”hard” filter, automatically pruning redundant feature nodes c-
orrupted by noise, which significantly reduces the model complexity. 3) We validate the proposed S-BLS on both numerical nonlinear identification tasks and a highly nonlinear Continuous Stirred Tank Reactor (CSTR) process. The experimental results demonstrate that S-BLS outperforms standard BLS and its robust variants (e.g., WBLS) in terms of both prediction accuracy and noise immunity.
II. PRELIMINARIES
A. Broad Learning System (BLS)
The Broad Learning System (BLS) is built upon the concept of the Random Vector Functional Link Neural Network (RVFLNN) [10]. It eliminates the need for time-consuming backpropagation by fixing the input weights and optimizing only the output weights. Theoretically, BLS ensures universal
approximation capability, meaning it can approximate any continuous function to arbitrary accuracy given a sufficient number of nodes. Given input data X ∈ RN×D, where N is the number of samples and D is the input dimension, the mapped feature nodes for the i-th group, denoted as Zi, are generated as:
Zi = φ(XWei + βei ), i = 1, . . . , n (1)
Here, n denotes the total number of feature mapping groups. Assuming each group contains k nodes, the random weights and biases are defined as Wei ∈ RD×k and βei ∈ Rk, respectively. Consequently, the i-th mapped feature block has the dimension Zi ∈ RN×k. The complete mapped feature matrix is defined by concatenating all groups:
Zn = [Z1, Z2, . . . , Zn] ∈ RN×nk (2)
These mapped features are then fed into enhancement nodes. The j-th group of enhancement nodes Hj is calculated as:
Hj = ξ(ZnWhj + βhj ), j = 1, . . . , m (3)
where ξ(·) is the activation function (typically tanh), and m represents the number of enhancement groups. If each enhancement group consists of q nodes, the connecting weights are Whj ∈ Rnk×q and biases are βhj ∈ Rq. Note that the input dimension for the enhancement layer corresponds to the total number of feature nodes, nk. The enhancement nodes matrix is formulated as:
Hm = [H1, H2, . . . , Hm] ∈ RN×mq (4)
The final system state matrix A, which serves as the regressor, is constructed by concatenating both mapped features and enhancement nodes:
A = [Zn | Hm] ∈ RN×L (5)
where L = nk + mq denotes the total number of nodes in the hidden layer. The relationship between the input matrix A and the target output Y ∈ RN×C (where C is the output dimension) is modeled linearly as Y = AWout. The objective of standard BLS is to minimize the structural risk using Ridge Regression (L2-regularization):
min
Wout
‖Y − AWout‖22 + λ‖Wout‖22 (6)
where Wout ∈ RL×C is the output weight matrix and λ is the regularization parameter. The optimal solution is analytically given by the ridge inverse:
Wout = (AT A + λI)−1AT Y (7)
Remark: Although Equation (7) provides a rapid closedform solution, it fundamentally relies on the L2-norm. This results in a dense weight matrix Wout, where almost all elements are non-zero. In noisy industrial environments, this dense structure forces the model to fit not only the system dynamics but also the noise, leading to poor generalization and a lack of interpretability.

Mapped Features Zn Enhancement Nodes Hm
Input Data
X ∈ RN×D
Z
1
...
Zn
H
1
...
Hm
System State Matrix A = [Zn | Hm]
Y
Feature Mapping Zi = φ(XWei + βei )
Enhancement Hj = ξ(ZnWhj + βhj ) Sparse Weights (Wout)
Optimized via STLS
Fig. 1: The architecture of the proposed Sparse Broad Learning System (S-BLS). The input X is mapped to feature nodes Zn, which are cascaded to enhancement nodes Hm. Both groups are concatenated to form the system matrix A. The output weights Wout are solved sparsely using the Sequential Thresholded Least-Squares (STLS) algorithm.
B. Sparse Optimization Problem
To address the overfitting issue caused by the dense solution of standard BLS, a sparse representation is desirable. In the context of system identification, we seek a parsimonious model where only the most relevant nodes contribute to the output. Mathematically, this is formulated as an optimization problem with an L0-norm penalty:
mWin ‖Y − AW ‖22 + α‖W ‖0 (8)
where W ∈ RL×C is the sparse weight matrix we aim to solve, ‖W ‖0 counts the number of non-zero elements in W , and α is a parameter controlling the sparsity level. However, directly solving Equation (8) is known to be an NP-hard combinatorial problem, making it intractable for large-scale systems. While relaxations such as L1regularization (Lasso) exist, they typically act as ”soft” thresholding operators, which may shrink coefficients without eliminating them completely, and often require slow i-
terative solvers (e.g., ADMM or coordinate descent). Therefore, an efficient algorithm capable of solving the sparse identification problem within the fast computing framework of BLS is highly demanded.
III. PROPOSED METHOD: S-BLS
In this section, we present the Sparse Broad Learning System (S-BLS). Existing robust variants of BLS primarily rely on weighting samples or complex non-convex loss functions, which often compromise the computational efficiency of the original framework. To address this, we propose a structural sparsity approach. By integrating a sequential thresholding strategy into the BLS learning paradigm, S-BLS automatically
identifies and prunes redundant feature nodes corrupted by noise while maintaining a rapid closed-form solution. The SBLS structure is displayed in Fig. 1.
A. Model Formulation
Consider the augmented feature matrix A = [Zn|Hm] ∈ RN×L generated by the BLS structure, where L is the total number of nodes (L = nk + mq). In standard BLS, the output weight matrix W ∈ RL×C is obtained by minimizing the L2regularized error:
mWin JBLS(W ) = 1
2 ‖Y − AW ‖2F + λridge
2 ‖W ‖2F (9)
where ‖ · ‖F denotes the Frobenius norm and λridge is the regularization parameter. While this formulation yields a closed-form solution W = (AT A + λridgeI)−1AT Y , the resulting weight matrix is dense. In scenarios with heavy noise, the model tends to assign non-zero weights to all L nodes to fit the noise, leading to overfitting. To enhance robustness and interpretability, we introduce an L0-norm constraint to enforce sparsity. The objective function of S-BLS is formulated as:
mWin JS−BLS(W ) = 1
2 ‖Y − AW ‖2F + α‖W ‖0 (10)
where ‖W ‖0 counts the number of non-zero elements in W , and α is the sparsity penalty parameter controlling the tradeoff between error and model complexity. Since optimizing the L0-norm is NP-hard, standard gradient-based methods cannot be applied directly.

B. Sequential Thresholding Optimization
To solve the optimization problem in (10) efficiently, we adopt a Sequential Thresholded Least-Squares (STLS) strategy. Unlike soft-thresholding methods—such as the Iterative Shrinkage-Thresholding Algorithm (ISTA) or Lasso—that shrink coefficients continuously, STLS employs a hard thresholding operator combined with iterative projections. Let W (t) ∈ RL×C denote the weight matrix at iteration t. The optimization procedure consists of two alternating steps: Step 1: Hard Thresholding (Pruning): We -
define a hard thresholding operator Tλ(·). For each element wij in the weight matrix, small coefficients dominated by noise are truncated to zero:
w(t)
ij = Tλ(w(t−1)
ij ) =
{
0, if |w(t−1)
ij | < λ
w(t−1)
ij , otherwise (11)
where λ is the explicit truncation threshold derived from the sparsity parameter α. This step identifies the active set of nodes, denoted as S(t), which contains the indices of the retained significant features for each output dimension. Physical Interpretation: In the context of BLS, this thresholding step acts as a structural pruner. Since A is composed of mapped features and enhancement nodes, setting a row in W to zero is equivalent to physically removing the corresponding node connection from-
 the network. This allows S-BLS to automatically discard invalid feature nodes that capture only noise.
Step 2: Projection on Active Set: Once the insignificant nodes are pruned, we update the weights of the remaining nodes to minimize the reconstruction error. This is achieved by solving the least-squares problem restricted to the active set S(t):
W (t)
S = arg mWin ‖Y − AS W ‖2F = (AT
S AS )−1AT
S Y (12)
where AS ∈ RN×|S| denotes the sub-matrix of A formed by extracting only the columns corresponding to the active indices in S(t), and |S| represents the number of active nodes. Elements not in the active set remain zero.
Convergence and Stopping Criterion: Instead of relying on a small perturbation threshold ǫ for convergence, which may lead to prolonged computation in oscillatory cases, we employ a **fixed-iteration** strategy. Since the STLS algorithm utilizes the Moore-Penrose pseudoinverse for projection, it finds the optimal solution within the current subspace in a single step. Empirical studies observe that the active support set S typically stabilizes extremely quickly. Therefore, we set a maximum iteratio-
n count T (e.g., T = 10) as the stopping criterion. This ensures strictly bounded computational time, which is critical for industrial applications. The complete training procedure is summarized in Algorithm 1.
C. Complexity Analysis
We compare the computational complexity of the proposed S-BLS with standard BLS and Lasso-BLS. Let N be the
Algorithm 1 Training Algorithm for S-BLS
Require: Input X ∈ RN×D, Output Y ∈ RN×C ; Require: BLS Hyperparameters (n, m); Sparsity Threshold λ; Max Iterations T . Ensure: Sparse Output Weights W ∈ RL×C. 1: 1. Initialization:
2: Randomly generate weights Wei , βei and Whj , βhj .
3: Compute feature nodes Zn and enhancement nodes Hm.
4: Construct system matrix A = [Zn | Hm] ∈ RN×L. 5: Compute initial dense solution: W (0) = A†Y . 6: 2. Sequential Thresholding Loop: 7: for t = 1 to T do
8: // Step A: Hard Thresholding
9: Identify small coefficients: small idx ← {(i, j) :
|W (t−1)
ij | < λ}.
10: Prune weights: W (t) ← W (t−1). 11: W (t)[small idx] ← 0.
12: // Step B: Update Active Set
13: for each output dimension d = 1 to C do
14: Identify active indices: Sd ← {i : W (t)
i,d 6= 0}. 15: Construct sub-matrix ASd ∈ RN×|Sd|. 16: Update non-zero weights via Least Squares:
17: W (t)
Sd,d = (AT
Sd ASd )−1AT
Sd Y:,d.
18: end for 19: end for
20: return Sparse weights W (T ).
number of samples and L be the total number of nodes (L = nk + mq). Assume N > L.
1) Standard BLS: Requires one pseudoinverse calculation. The complexity involves calculating the correlation matrix AT A and its inversion. Thus, the complexity scales as O(N L2 + L3). While computationally fast, standard BLS lacks sparsity, leading to dense matrices. 2) Lasso-BLS (L1): Solves the sparse optimization problem using iterative algorithms such as the Alternating Direction Method of Multipliers (ADMM) or Iterative Shrinkage-Thresholding Algorithm (ISTA). These methods typically require-
 a large number of iterations (Klasso) to converge. Each iteration involves matrixvector multiplications with complexity O(N L). Therefore, the total complexity is roughly O(Klasso · N L). Since Klasso is usually large (e.g., hundreds of iterations), this approach is computationally expensive for large-scale datasets. 3) Proposed S-BLS: The STLS algorithm is also iterative but employs a fixed, small number of iterations T (e.g., T = 10). The initialization step requires O(N L2 + L3). However, in s-
ubsequent iterations, the number of active nodes Lactive decreases significantly (Lactive ≪ L). The complexity of the update step in Eq. (13) reduces to O(N L2active + L3active). Given that T is small and Lactive shrinks rapidly, the additional computational cost

over standard BLS is marginal, and the total complexity remains far lower than that of Lasso-BLS.
IV. EXPERIMENTS AND ANALYSIS
In this section, we evaluate the proposed S-BLS on two benchmark tasks: a numerical nonlinear system identification problem and a highly nonlinear Continuous Stirred Tank Reactor (CSTR) process control task. Comparisons are conducted between the standard BLS and the proposed S-BLS under various noise conditions to demonstrate the robustness and sparsity of our method.
A. Experimental Setup
All experiments were implemented in Python on a workstation equipped with an Intel Core i7 CPU and 32GB RAM. To quantify the prediction performance, we utilize the Root Mean Square Error (RMSE):
RM SE =
√ √ √ √
1
Ntest
Ntest ∑
k=1
(yk − yˆk)2 (13)
where yk and yˆk represent the ground truth and the predicted output, respectively. Additionally, we define the Sparsity Ratio to measure model compactness:
Sparsity =
(
1 − Nactive
Ntotal
)
× 100% (14)
where Nactive is the number of non-zero weights in the output layer.
B. Hyperparameter Settings
The hyperparameters for both experiments are detailed in Table I. We increased the number of nodes compared to typical settings to simulate an over-parameterized environment, where standard BLS is prone to overfitting noise. The pruning threshold λ (or sparsity target) for S-BLS was selected based on cross-validation on the training set.
TABLE I: Hyperparameter Settings for Experiments
Parameter Nonlinear System CSTR Process
Feature Nodes (Nf × Ng) 30 × 10 (300) 20 × 10 (200) Enhancement Nodes (Ne) 200 200
Total Initial Nodes 501 (w/ bias) 401 (w/ bias) Regularization (β) 0.01 10−8 Sparsity Target (Ratio) 0.6 (60%) 0.5 (50%) Training Samples 2000 2000
C. Case Study 1: Numerical Nonlinear System
The first task involves identifying a nonlinear dynamic system described by the following difference equation:
y(n) = y(n − 1)y(n − 2)(y(n − 1) + 2.5)
1 + y2(n − 1) + y2(n − 2) + u(n − 1) (15)
where the input u(n) ∈ [−2, 2] is uniformly distributed for training, and u(n) = sin(2πn/25) for testing. To simulate
harsh industrial environments, we introduce uniform noise with varying intensities γ ∈ {0.1, 0.2, 0.3, 0.4} into the training data.
1) Results and Analysis: Table II summarizes the performance comparison. It is observed that the standard BLS suffers from performance fluctuations due to its tendency to fit all data points, including outliers and noise. In contrast, S-BLS consistently outperforms the standard BLS across all noise levels. Notably, as the noise level increases to 0.4, S-BLS demonstrates robust generalization capabilities, reducing the RMSE from 0.2528 (Standard BLS) to 0.1632. More importantly, S-BLS achieves this-
 accuracy by pruning approximately 50% of the redundant nodes, retaining only about 201 active nodes out of 401. This indicates that the proposed STLS algorithm successfully identifies the compact structure of the system dynamics, effectively filtering out connections that were merely fitting the random noise. Fig. 2 illustrates the output tracking performance under 0.3 noise level. The S-BLS trajectory (red) follows the ground truth (black) more closely than the standard BLS (blue), which exhibit-
s deviations caused by noise fitting.
TABLE II: Performance Comparison on Nonlinear System under Varying Noise Levels
Noise RMSE (Error) Active Nodes (Sparsity) Level Standard BLS S-BLS (Ours) Total Active
0.1 0.3370 0.2588 401 201 (49.9%) 0.2 0.2222 0.1673 401 201 (49.9%) 0.3 0.2361 0.1648 401 201 (49.9%) 0.4 0.2528 0.1632 401 201 (49.9%)
" (%
*'( " )(%)(
)(%)( & # $ ' )(! &
&( !#
Fig. 2: Output tracking performance of the nonlinear system under noise level 0.4. S-BLS demonstrates superior smoothness and tracking accuracy compared to Standard BLS.
D. Case Study 2: CSTR Process Benchmark
The Continuous Stirred Tank Reactor (CSTR) is a classic benchmark in chemical process control, characterized by

strong nonlinearity and instability. The dynamics are governed by the mass and energy balance equations:
C ̇ A = q
V (CAf − CA) − k0 exp
(
−E
RT
)
CA
T ̇ = q
V (Tf − T ) + −∆H
ρCp
k0 exp
(
−E
RT
)
CA
+ UA
V ρCp
(Tc − T )
(16)
where CA is the concentration of product A, T is the reactor temperature, and Tc is the coolant temperature (control input). The physical parameters are defined as follows: q is the feed flow rate (100L/min), V is the reactor volume (100L), k0 is the reaction rate constant (7.2 × 1010min−1), E is
the activation energy (8.75 × 104J/mol), R is the universal gas constant, ∆H is the heat of reaction, ρ and Cp are the density and specific heat capacity, and U A is the heat transfer coefficient. We generated 2000 training samples with additional outliers to test robustness. 1) Results and Analysis: The comparison results on the CSTR dataset are presented in Table III. The proposed S-BLS consistently outperforms the standard BLS across all noise levels. A key finding is the high sparsity ratio: S-
-BLS retains only 61 active nodes out of 201 (pruning ratio ≈ 70%), yet achieves lower prediction errors (e.g., 0.0590 vs 0.0644 at noise 0.2). This result confirms that the full-connected structure of standard BLS contains significant redundancy when modeling physical systems like CSTR. By forcing the weights of irrelevant nodes to zero, S-BLS not only reduces the computational burden for future inference but also effectively ignores the ”noisy features” that do not contribute to the underlying p-
hysical dynamics. This makes S-BLS particularly suitable for industrial applications where interpretability and robustness are paramount.
TABLE III: Performance and Sparsity Comparison on CSTR Benchmark
Noise RMSE (Error) Compactness Level Standard BLS S-BLS (Ours) Total Active Nodes
0.2 0.0644 0.0590 201 61 0.3 0.0886 0.0809 201 61 0.4 0.1111 0.1031 201 61
In summary, both experiments confirm that integrating the STLS pruning strategy into BLS significantly enhances noise immunity and model interpretability without sacrificing approximation accuracy.
V. CONCLUSION
In this paper, we presented a robust Sparse Broad Learning System (S-BLS). By integrating the Sequential Thresholded Least-Squares algorithm, the method enforces sparsity in the output weights. Experiments on CSTR demonstrate that SBLS effectively ignores noise compared to the standard BLS, offering a robust solution for industrial system identification.
REFERENCES
[1] C. P. Chen and Z. Liu, “Broad learning system: An effective and efficient incremental learning system without the need for deep architecture,” IEEE Transactions on Neural Networks and Learning Systems, vol. 29, no. 1, pp. 10–24, 2017. [2] Z. Liu, C. L. P. Chen, S. Feng, Q. Feng, and T. Zhang, “Stacked broad learning system: From incremental flatted structure to deep model,” IEEE Transactions on Systems, Man, and Cybernetics: Systems, vol. 51, no. 1, pp. 209–222, 2021. [3] S. Feng and C. P. Che-
n, “Fuzzy broad learning system: A novel neurofuzzy model for regression and classification,” IEEE Transactions on Cybernetics, vol. 50, no. 2, pp. 414–424, 2020. [4] M. Xu, M. Han, C. L. P. Chen, and T. Qiu, “Recurrent broad learning systems for time series prediction,” IEEE Transactions on Cybernetics, vol. 50, no. 4, pp. 1405–1417, 2020. [5] Y. Zheng, B. Chen, S. Wang, and W. Wang, “Broad learning system based on maximum correntropy criterion,” IEEE Transactions on Neural Networks and Learning -
Systems, vol. 32, no. 7, pp. 3083–3097, 2020. [6] F. Chu, T. Liang, C. P. Chen, X. Wang, and X. Ma, “Weighted broad learning system and its application in nonlinear industrial process modeling,” IEEE transactions on neural networks and learning systems, vol. 31, no. 8, pp. 3017–3031, 2019. [7] ——, “Compact broad learning system based on fused lasso and smooth lasso,” IEEE Transactions on Cybernetics, vol. 54, no. 1, pp. 435–448, 2023. [8] F. Chu, G. Wang, J. Wang, C. P. Chen, and X. Wang, “Learnin-
g broad learning system with controllable sparsity through l0 regularization,” Applied Soft Computing, vol. 136, p. 110068, 2023. [Online]. Available: https://www.sciencedirect.com/science/article/pii/S1568494623000868 [9] S. L. Brunton, J. L. Proctor, and J. N. Kutz, “Discovering governing equations from data by sparse identification of nonlinear dynamical systems,” Proceedings of the national academy of sciences, vol. 113, no. 15, pp. 3932–3937, 2016. [10] Y.-H. Pao, G.-H. Park, and D. J. Sobaji-
c, “Learning and generalization characteristics of the random vector functional-link net,” Neurocomputing, vol. 6, no. 2, pp. 163–180, 1994.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:12.040Z
- **Text Length:** 27124 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 6 of 6
