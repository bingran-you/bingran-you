# PDF Document: Yeh and Yang - 2025 - Uncertainty of Network Topology with Applications to Out-of-Distribution Detection.pdf

**File Path:** Yeh and Yang - 2025 - Uncertainty of Network Topology with Applications to Out-of-Distribution Detection.pdf

**Processed Date:** 2026-02-10T18:17:26.205Z

**File Size:** 1166.76 KB

**Total Pages:** 19

**Extracted Pages:** 19

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3432

**Title:** Uncertainty of Network Topology with Applications to Out-of-Distribution Detection

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

UNCERTAINTY OF NETWORK TOPOLOGY WITH APPLICATIONS
TO OUT-OF-DISTRIBUTION DETECTION
A PREPRINT
Sing-Yuan Yeh
Data Science Degree Program
National Taiwan University and Academia Sinica
Taipei 106, Taiwan
d10948003@ntu.edu.tw
Chun-Hao Yang∗
Institute of Statistics and Data Science
National Taiwan University
Taipei 106, Taiwan
chunhaoy@ntu.edu.tw
November 25, 2025
ABSTRACT
Persistent homology (PH) is a crucial concept in computational topology, providing a multiscale
topological description of a space. It is particularly significant in topological data analysis, which
aims to make statistical inference from a topological perspective. In this work, we introduce a new
topological summary for Bayesian neural networks, termed the predictive topological uncertainty
(pTU). The proposed pTU measures the uncertainty in the interaction between the model and the
inputs. It provides insights from the model perspective: if two samples interact with a model in a
similar way, then they are considered identically distributed. We also show that the pTU is insensitive
to the model architecture. As an application, pTU is used to solve the out-of-distribution (OOD)
detection problem, which is critical to ensure model reliability. Failure to detect OOD input can lead
to incorrect and unreliable predictions. To address this issue, we propose a significance test for OOD
based on the pTU, providing a statistical framework for this issue. The effectiveness of the framework
is validated through various experiments, in terms of its statistical power, sensitivity, and robustness.
1 Introduction
Over the past few decades, deep neural networks have achieved remarkable successes in various fields, e.g., computer
vision, medical image analysis, and natural language processing. However, for models to be reliable, uncertainty must
be taken into account. Uncertainty quantification (UQ) is a crucial aspect of machine learning, as it provides insights
into the model’s reliability and robustness. The UQ methods for deep learning are broadly categorized into three groups:
Bayesian methods (e.g., MC dropout [10], Bayes By Backprop [3], and many others), ensemble methods (e.g., deep
∗Corresponding author.
arXiv:2511.18813v1 [stat.ML] 24 Nov 2025

Uncertainty of Network Topology with Applications to Out-of-Distribution Detection A PREPRINT
ensemble [16, 22]), and others. See [1] for a comprehensive review of UQ methods in deep learning. In this work, we
focus mainly on Bayesian neural networks.
Bayesian Neural Network Compared to a typical neural network, a Bayesian neural network requires an additional
assumption on the prior distributions on the network weights, which are usually assumed to be Gaussian distributions.
Applying the Bayes theorem, one gets the unnormalized posterior distributions. However, due to the ultra-high
dimensionality, the intractable normalizing constant, and complicated network structures, direct and exact inference for
the posterior distributions of the weights is impossible. An alternative approach is to consider variational inference,
which seeks approximation to the actual posterior. For example, the author of [23] proposed the black-box variational
inference, which maximizes the evidence lower bound to find the approximation. This is equivalent to minimizing the
Kullback-Leibler divergence to the actual posterior. See Table B.3 in [1] for a more comprehensive list of methods
in this line of research. With approximate posterior distributions for the network weights, the uncertainty is directly
associated with the randomness of the posterior distributions, usually defined as the posterior variance or the entropy of
the posterior distribution.
Topological Uncertainty There are two main types of uncertainty: epistemic uncertainty, which arises from the
model’s lack of knowledge, and aleatoric uncertainty, which arises from the inherent randomness in the data [13]. In
recent years, there has been a growing interest in applying topological tools, in particular the persistent homology (PH),
to analyze neural networks. PH is a crucial concept in computational topology, providing a multiscale topological
description of a space. It is particularly significant in topological data analysis, which aims to make statistical inference
from a topological perspective. For example, [24] used PH to measure the complexity of neural networks, while [20]
studied the topological properties of neural networks. [15] introduced the concept of topological uncertainty that
describes the uncertainty in the activation graph of a neural network. The notion of activation graph is proposed by [11].
As opposed to static graphs (i.e., the weights in a neural network), activation graphs are able to capture the interaction
between the input and the network. However, the uncertainty proposed by [15] fails to consider the model uncertainty,
i.e., the uncertainty in the model parameters. The main goal of this work is to quantify the topological uncertainty of
Bayesian neural networks.
Contribution In this work, we introduce the concept of predictive topological uncertainty (pTU), which measures the
uncertainty in the interaction between the model and the input to be predicted. The pTU is defined as the variation
of the persistent homology of the activation graphs. A more precise definition will be given in Section 3. The pTU
provides insights from the perspective of model-input interactions: if two samples interact with a model in a similar way,
then they are considered identically distributed. The following statistical inference is made based on the distribution of
pTU, rather than the value of pTU. The main reason for this choice is that making inference based on the distribution
incorporates the randomness inherent to the inputs.
As an application, pTU is used to solve the out-of-distribution (OOD) detection problem. OOD is an important
issue when applying a trained model to unseen data. Failure to detect OOD inputs can lead to incorrect and unreliable
predictions. There are three kinds of OOD: (i) distribution shift (shift in the distributions of both the inputs and the
outputs), (ii) covariate shift (shift in the input distribution), and (iii) semantic shift (shift in the conditional distribution
of output given input). See [27] for a survey on the research of OOD detection. In this work, we focus on the covariate
2

Uncertainty of Network Topology with Applications to Out-of-Distribution Detection A PREPRINT
shift (CS) problem. To handle this, we propose a significance test for CS based on the deviation of the pTU distribution,
providing a statistical framework for the detection of CS.
To sum up, the main contribution of this work is two-fold: (i) we propose a novel definition of topological
uncertainty for Bayesian neural networks, and (ii) we derive a significance test for CS based on pTU and we validate
its performance in terms of its statistical power, robustness, and sensitivity.
The rest of the paper is organized as follows. In Section 2, we briefly review the concept of persistent homology
and how to compute the persistent homology of the activation graph of a neural network. In Section 3, we present
the definition of predictive topological uncertainty and its estimator. In Section 4, we propose a significance test for
CS based on the pTU. In Section 5, we evaluate the proposed framework in terms of its sensitivity, robustness, and
statistical power and show that our method can effectively detect the presence of CS. Finally, we conclude this paper in
Section 7 by discussing the advantages of our methods and some potential issues that are worth further investigation.
2 Persistent Homology of Neural Networks
In this section, we will first review the concept of persistent homology, as well as its computation and representation.
Next, we review the construction of activation graphs [11] from neural networks.
2.1 Persistent Homology and Persistence Diagram
Homology Homology groups are fundamental constructs in algebraic topology, providing a way to algebraically
describe topological spaces. For a topological space X , the k-th homology group Hk(X ) of captures information about
the k-dimensional holes in X . Each of these homology groups provides critical insights into the underlying structure of
the topological space, contributing to a comprehensive understanding of its geometric and topological properties. For
each k, the k-th Betti number, βk, is the rank of the k-th homology group. That is, the k-th Betti number βk represents
the number of k-dimensional holes in a topological space. These Betti numbers essentially summarize the topological
structure of the space.
Persistent Homology Given a filtration ∅ ⊆ X1 ⊆ X2 ⊆ · · · ⊆ Xn = X , we have the homology groups for each space
Hk(Xi), i = 1, . . . , n, k = 0, 1, 2, . . .. The inclusion Xi ⊆ Xj induces homeomorhphisms f i,j
k : Hk(Xi) → Hk(Xj )
for each k. The k-th persistent homology group is the image of f i,j
k , denoted by Hi,j
k = imf i,j
k for 1 ≤ i ≤ j ≤ n.
The Hi,j
k contains k-dimensional topological information of Xi that are still present in Xj. The k-th persistent Betti
number βi,j
k = rank(Hi,j
k ) is the number of k-dimensional holes in Xi that are still in Xj. Let μi,j
k be the number of
k-dimensional holes born at Xi and dying entering Xj, i.e.,
μi,j
k = βi,j−1
k − βi,j
k − βi−1,j−1
k − βi−1,j
k.
The collection {(i, j, μi,j
k ) : 1 ≤ i ≤ j ≤ n} is called the k-th persistence diagram and the collection of all k-th
persistence diagrams, k = 0, 1, 2, . . ., is called the persistence diagram (PD) of X , denoted by PD(X ). For a more
detailed description, see the books by [28] and [8].
Computation One of the commonly used filtrations is the Vietoris–Rips filtration. Let X = {x1, . . . , xn} ⊆ Rd
be a point cloud. The Vietoris-Rips complex of X with diameter r is VRr(X) = {S ⊆ X : diam S ≤ r}, where
3

Uncertainty of Network Topology with Applications to Out-of-Distribution Detection A PREPRINT
diam S = maxxi,xj∈S ∥xi − xj∥. With 0 ≤ r1 ≤ r2 ≤ · · · ≤ rm, we have the Vietoris-Rips filtration
∅ ⊆ VRr1 (X) ⊆ VRr2 (X) ⊆ · · · ⊆ VRrm (X).
The k-th PD of X, denoted by PDk(X), is the collection of (ri, rj, μi,j
k ); that is, the number of k-dimensional holes that
are born at ri and die at rj is μi,j
k . There are other ways to represent the persistent homology, for example persistence
images [2] and persistence landscapes [4]. By viewing PDs as empirical distributions, the commonly used distance
metrics, the Wasserstein distance [7] and the bottleneck distance [6], can be used to measure the distance between
persistence diagrams.
2.2 Activation Graph
Let Fθ be a L-layer neural network; that is, for x ∈ Rh0 ,
Fθ(x) = fL ◦ fL−1 ◦ · · · ◦ f2 ◦ f1(x)
where fl : Rhl−1 → Rhl is defined by fl(x) = σ(Wlx + bl) and σ : R → R is called an activation function, which is
an element-wise operation on Rhl . Here, the number of neurons in the l-th layer is denoted hl, l = 0, . . . , L with h0
and hL being the dimension of input and output. The parameter to be learned is
θ = (Wl, bl) : Wl ∈ Rhl×hl−1 , bl ∈ Rhl L
l=1 .
Every two consecutive layers can be treated as a weighted bipartite graph: the nodes are the neurons in the (l − 1)-th
and l-th layers and the edge weights are given by the absolute value of the model weights Wl. This is referred to as the
static graph since it depends only on the model weights. The author of [11] introduced the concept of activation graph
in which the edge weights are defined based on an input and the model weights. Specifically, if xl−1 ∈ Rhl−1 is an
input to the l-th layer of wights, then the weight on the edge connecting the i-th neuron in (l − 1)-th layer and the j-th
neuron in the l-th layer is |Wl(j, i)xl−1(i)| where xl−1(i) is the i-th entry of xl−1 and Wl(j, i) is the (j, i)-th entry
of Wl. The quantities |Wl(j, i)xl−1(i)| characterize the interaction between the input and the model and the network
topology. Formally, let the vertex set Vl collect the neurons from both the (l − 1)-th and l-th neurons and the edge set
El collect all connections between the (l − 1)-th and l-th neurons. Moreover, each edge (i, j) ∈ El endows a weight
|Wl(j, i)xl−1(i)|. The weighted bipartile graph (Vl, El, φl) is the activation graph, where φl : E → R≥0 defined by
φl(i, j) = |Wl(j, i)xl−1(i)|. See Figure 1 for an illustration.
To compute the PH of the activation graphs, we follow the construction proposed by [24]. First, a filtration is
defined based on the magnitude of the edge weights. Given this filtration, the zero-dimensional PD is equivalent to the
empirical distribution of the weights of its maximum spanning tree2 (MST). We denote by Dl(xl−1, Fθ) the PD of the
l-th activation graph of a neural network Fθ and an input xl−1 (to the l-th layer). For more details about this procedure,
please refer to [15, 24].
2Note that we only collect the zero-dimensional topological feature since it is impossible for bipartite graphs to contain a circle.
Also, all the zero-dimensional topological features have the same birth, and hence the zero-dimensional PD is equivalent to the
empirical distribution of the weights.
4

Uncertainty of Network Topology with Applications to Out-of-Distribution Detection A PREPRINT
0-th layer x0 1-st layer x1 L-th layer xL
1-st layer of
weights / bipartite graph
L-th layer of
weights / bipartite graph
f1(x0) f2(x1) fL(xL−1)
Figure 1: L-layer neural network diagram with L = 4.
3 Topological Uncertainty
In this section, we present our definitions of topological uncertainty for a Bayesian neural network. We define two
notions of topological uncertainty: the predictive Topological Uncertainty (pTU) (Definition 3.1) and the model
Topological Uncertainty (TU) (Definition 3.2). The main difference between these two notions is that the pTU is defined
with respect to a particular input (sample) and a model, whereas the TU is defined with respect to a model.
3.1 Predictive Topological Uncertainty
Suppose Fθ is a neural network trained using the dataset Dtrain. We denote the (approximated) posterior distribution
of the parameters by π(θ | Dtrain). Given x0 ∈ Rh0 and a parameter θ drawn from π(θ | Dtrain), we construct the
PDs Dl(xl−1, Fθ) where xl−1 = fl−1 ◦ · · · ◦ f1(x) and l = 1, . . . , L. Note the PDs Dl(xl−1, Fθ) have inherent
randomness from both the posterior distribution of θ and the sampling distribution of x. The definition of pTU is given
below.
Definition 3.1 (Predictive Topological Uncertainty). The predictive topological uncertainty (pTU) of an input x0 ∈ Rh0
and a (trained) Bayesian neural network Fθ is defined as
pTU(x | Dtrain) = 1
L
L
X
l=1
Varθ [Dl(xl−1, Fθ) | Dtrain] (1)
where xl−1 = fl−1 ◦ · · · ◦ f1(x) is the input of the (l − 1)-th layer.
The Var(·) in the Definition 3.1 is the Fréchet variance [9] taken with respect to the posterior distribution
π(θ | Dtrain), i.e.,
Varθ [Dl(xl−1, Fθ) | Dtrain] = inmf
Z
Dist(Dl(xl−1, Fθ), m)2π(θ | Dtrain)dθ (2)
where Dist(·, ·) is a distance metric for PDs and the infimum is taken over all possible PDs. In practice, the posterior
distribution is often intractable and hence the posterior Fréchet variance can only be approximated by
Va [rθ [Dl(xl−1, Fθ) | Dtrain] = inmf
k
X
i=1
Dist(Dl(xl−1, Fθi ), m)2 (3)
5

Uncertainty of Network Topology with Applications to Out-of-Distribution Detection A PREPRINT
where θ1, . . . , θk
ii∼d π(θ | Dtrain). In this work, we choose the 2-Wasserstein distance for the PDs. The main reason for
this choice is that, under the 2-Wasserstein distance, Eq. (3) can be efficiently computed3 as described in Algorithm 1.
Algorithm 1 Predictive Topological Uncertainty 1: function PTU(x, Fθ)
2: Sample θ1, . . . , θm
ii∼d π(θ | Dtrain)
3: D(i)
l := Dl(xl−1, Fθi ) for all i = 1, . . . m, l = 1, . . . , L ▷ Compute PDs by Section 2.2
4: for l = 1, . . . , L do
5: Compute D ̄ l = 1
m
Pm
i=1 D(i)
l ▷ The Fréchet mean w.r.t W2
6: Compute σˆ2
l := 1
m
Pm
i=1 ∥D(i)
l − D ̄l∥2 ▷ The Fréchet variance w.r.t W2
7: end for
8: Return 1
L
PL
l=1 σˆ2
l
9: end function
The intuition behind this definition of pTU is that for any Bayesian model, the uncertainty is captured by the
posterior variance of the parameters, and the predictive uncertainty is captured by the variance of the posterior predictive
distribution. Hence, we use the posterior variance of the PD as a measure for the topological uncertainty.
3.2 Model Topological Uncertainty
The pTU is defined based on an input x and a Bayesian neural network Fθ and π(θ | Dtrain). If we consider X ∼ P ,
then pTU(X | Dtrain) is a positive-valued random variable. The distribution of pTU is determined by both the posterior
distribution of θ and the sampling distribution P . Hence, we can define the model topological uncertainty by taking the
expectation of pTU with respect to the sampling distribution P .
Definition 3.2 (Model Topological Uncertainty). The model topological uncertainty is defined as
TU(P | Dtrain) = EP [pTU(X | Dtrain)] (4)
where the expectation is taken with respect to X ∼ P .
The TU(P | Dtrain) can be estimated by the empirical mean
TdU(P | Dtrain) = 1
n
n
X
i=1
pTU(Xi | Dtrain) (5)
where X1, . . . , Xn
ii∼d P . In the context of machine learning, the distribution P is often referred to as the testing
distribution. Therefore, the empirical TU Eq. (5) is a measure of topological uncertainty of the testing distribution with
respect to the model Fθ and the training data Dtrain. There are a few remarks regarding pTU and TU:
1. Even if the test data X1, . . . , Xn
ii∼d P is identical to the training data, the empirical TU Eq. (5) would not be
zero. This makes sense since the model has limited capacity.
2. In the context of Bayesian inference, the training data Dtrain are treated as given, and therefore the distribution
of training data is not relevant.
3Since the zero-dim PDs can be viewed as one-dimensional empirical distributions, the Wasserstein distance has a closed form
expression and so do the Wasserstein barycenter and variance.
6

Uncertainty of Network Topology with Applications to Out-of-Distribution Detection A PREPRINT
3. Suppose now we have two distributions P1 and P2. The similarity of the pTU’s distributions indicates that the
network topology activated by P1 and P2.
4. However, if the distributions of pTUs are diverging, it suggests that the two distributions P1 and P2 are
different. A formal mathematical result is provided in the subsequent section.
Based on these observations, we propose to use pTU and TU for out-of-distribution (OOD) detection, see Section 4.
3.3 Stability of pTU under the Wasserstein distance
The computation of pTU depends heavily on the distance metrics for PD, for example, the p-Wasserstein distance or
the bottleneck distance. These metrics are motivated by stability theorems. In topological data analysis, the stability
theorems [5, 25, 15] are essential for preserving the robustness of persistent diagrams, which allow us to reliably
capture the underlying structures in data. In our work, the pTU(X | Dtrain) can be viewed as a function of the random
variable X ∼ P . As our main application for pTU is the OOD detection, the stability, or Lipschitzness, of the mapping
x 7→ pTU(x | Dtrain) is important, serving as the theoretical basis for the significance test for OOD in Section 4.
Therefore, we provide Theorem 3.1 to show the stability property of pTU.
Before stating the theorem, we recall that, for two distributions μ and ν, the p-Wasserstein distance is defined by
Wp(μ, ν) = inf
γ∈Γ(μ,ν) E(x,y)∼γ c(x, y)p 1/p
where Γ(μ, ν) is the set of all couplings of μ and ν, and c(·, ·) is the cost function between x and y. The Wasserstein
distance is motivated by the optimal transport problem, and the cost function c(·, ·) can be chosen according to the
specific application. One common choice is an appropriate distance metric defined on the support of γ. In the following
analysis, we use the L∞ norm as the cost function, i.e., c(x, y) = ∥x − y∥∞.
We make a few assumptions for the Bayesian neural network Fθ and the training data Dtrain:
(A.1) The activation function σ is 1-Lipschitz.
(A.2) The posterior distribution π(θ | Dtrain) is asymptotically normal.
(A.3) The training dataset Dtrain is in a bounded domain.
These assumptions are easy to satisfy in practice. For example, the commonly used activation functions ReLU(x) =
max(x, 0) and sigmoid σ(x) = (1 + exp(−x))−1 are 1-Lipschitz. The posterior normality assumption follows from
the Bernstein-von Mises Theorem, see [18] for example.
Theorem 3.1 (Stability of pTU). Suppose that there are random variables X ∼ PX and Y ∼ PY . Under the
assumptions (A.1) – (A.3), the distribution of pTU is stable with respect to the p-Wasserstein distance for p ≥ 1, i.e.,
Wp(pTU(X | Dtrain), pTU(Y | Dtrain)) ≤ CWp(X, Y ).
Note that the Lipschitz constant C depends on the network architecture, weights, and the radius of the input
domain. The proof of Theorem 3.1 is provided in Section 6. We shall mention that the Lipchitz constant might not be
optimal. However, these assumptions are typically easy to satisfy in practice.
7

Uncertainty of Network Topology with Applications to Out-of-Distribution Detection A PREPRINT
4 Significance Test for Out-of-Distribution
In this section, we propose a significance test for OOD detection based on pTU. Given a model Fθ trained on the dataset
Dtrain, we want to perform a statistical test for two random variables X ∼ P1 and X′ ∼ P2 to test
H0 : P1 = P2 v.s. H1 : P1 ̸= P2. (6)
This is a two-sample problem, and numerous research works on this problem, for example, the kernel two-sample test
based on maximum mean discrepancy [12] and Stein discrepancy [19]. However, the standard two-sample problem
does not take into account the interaction between the model and the sample. Therefore, we propose to use
Wp(pTU(X | Dtrain), pTU(X′ | Dtrain))
as the test statistic for testing Eq. (6).
In practice, we approximate the pTU distribution using the dataset {Xi}m
i=1. From Algorithm 1, we obtain the
empirical distribution {pTdU(Xi | Dtrain)}n
i=1, which allows us to directly compute the discrete Wasserstein distance
between two distributions. That is, if P and Q are two empirical distributions of samples Y1, . . . , Yn and Z1, . . . , Zn
respectively, then the discrete p-Wasserstein distance is computed based on the order statistics:
Wp(P, Q) :=
n
X
i=1
Y(i) − Z(i)
p
!1/p
.
If we collect two datasets X1, . . . , Xm
ii∼d P1 and X′1, . . . , X′m
ii∼d P2, we can compute {pT [U(Xi | Dtrain)}m
i=1
and {pT [U(X′
i | Dtrain)}m
i=1. Then we use a permutation test with the test statistic being the discrete p-Wasserstein
distance to test (6). The procedure is described in Algorithm 2. If the resulting p-value is less than α = 0.05, we reject
the null hypothesis (H0), concluding that P1 ̸= P2.
Algorithm 2 Two-sample pTU Test
Require: X1, . . . , Xm
ii∼d P1, X′1, . . . , X′m
ii∼d P2, M ∈ N
1: X = pTU(Xi | Dtrain) and Y = pTU(X′
i | Dtrain)
2: combined_data = CONCATENATE(X, Y)
3: Tobs = Wp(X, Y)
4: for i = 1, . . . , M do
5: new_X = shuffled_data[: LEN(X)]
6: new_Y = shuffled_data[LEN(X) :]
7: T ∗
i = Wp(new_X, new_Y)
8: end for
9: p−value = 1
M
PM
i=1 I(T ∗
i ≥ Tobs)
5 Experiments
In this section, we demonstrate the application of pTU on image classification tasks.
8

Uncertainty of Network Topology with Applications to Out-of-Distribution Detection A PREPRINT
Datasets and preprocessing. We utilize publicly available image datasets with 10 classes, namely SVHN, MNIST,
Fashion-MNIST, and CIFAR-10. Please see Appendix for more details. All images are resized to 28 × 28 × 1,
converted to grayscale, and rescaled from a range of [0, 255] to [0, 1]. When we feed the images into our model, we
reshape them to 784 × 1.
Bayesian models setting. In these experiments, we use a Bayesian model based on the work of [3], which is known as
Bayes-by-Backprop algorithm. We leverage Bayes-by-Backprop to train the model. For each layer, the prior distribution
is set as a mixture of Gaussians, described in [3], with σ1 = 1 and σ2 = 0.007. The network architecture is implemented
as multi-layer perceptron (MLP) with an input layer of 784 neurons, two hidden layers of rectified linear neurons, and
a softmax output layer with 10 neurons. For each input, we use Monte Carlo sampling to draw two parameters from
posterior π(θ|Dtrain) and ensemble these two models. That is, we combine the predictions of both models to make a
final decision, by averaging their outputs.
5.1 Sensitivity to Network Architecture
The following experiment shows the behavior of pTU from models with different number of hidden layers. To show the
relationship between pTU and the model architecture, we train models with different numbers of layers on the Fashion
MNIST dataset. We have a total of 7 models, with the number of layers ranging from 2 to 8, and the total number of
neurons being 874. These models are denoted as M3, M4, ..., M9. We use Algorithm 1 and set the number of samples
to 30. In this subsection, we focus not only on pTU but also the variance Var(Dl|xi, DF−MNIST) in each layer, which
corresponds to σˆ2
l in the algorithm for l = 1, · · · , L. The distributions of these statistics are shown in Figure 2.
We can see that for each model, the distribution of empirical variances, σˆ2
L, in the last layer is wider than in the
other layers. As the layer depth increases, more nonlinear functions are composited, which allows the model to capture
more complex or abstract features. This leads to a wider distribution of pTU(X|DF-MNIST). This indicates that the
model is more flexible and capable of carrying more information.
Figure 2: From left to right, top to bottom, the seven images: the distribution of empirical variance {σˆ2
l }i for
l = 1, · · · , 7. Each color of line stands for one model. The eighth image: the distribution of {pT [U (xi|DF−MNIST)}i.
9

Uncertainty of Network Topology with Applications to Out-of-Distribution Detection A PREPRINT
5.2 Detection of out-of-distribution samples
The following experiment demonstrates how the distribution of pTU can be used to determine if a trained network
faces an out-of-distribution (OOD) dataset. To illustrate this approach, we train three models on SVHN, MNIST, and
Fashion-MNIST individually, and then use SVHN, MNIST, Fashion-MNIST, and CIFAR-10 to assess whether they
are OOD. Let P (X) be the underlying input distribution of training dataset mentioned above and P (X′) be the
underlying input distribution of new dataset mentioned above. These two distributions may or may not be identical. Let
pT [U (xi|Dtrain), pT [U (x′
i|Dtrain) be the realization of pTU(X|Dtrain), pTU(X′|Dtrain) where X ∼ P (X) and X′ ∼
P (X′), obtained by Algorithm 1 with m = 30. Given two sets {pT [U (xi|Dtrain)}xi∈X and {pT [U (x′
i|Dtrain)}xi∈X ′ ,
Algorithm 2 is applied to test whether new dataset X ′ is OOD. This allows us to use the p-value to distinguish two
empirical distributions of pTU following the same distribution or not. We show the results in Table 1. If a significance
level of 0.05 is chosen, we can observe that the OOD datasets are correctly identified except CIFAR with respect to
SVHN. According to the test accuracy in Table 3, we can see that the model’s performance on SVHN is not ideal, with
an accuracy of only 70.36%. It can be inferred that it did not “activate” enough neurons, resulting in an insignificant
difference in pTU distributions.
Table 1: The p-values from the permutation test comparing the two distributions are listed in this table. The significance
levels are indicated by stars: * p < 0.05, ** p < 0.01, *** p < 0.001.
p-value Test data X ′
Training data X SVHN MNIST F-MNIST CIFAR
SVHN 0.976 0.001*** 0.012** 0.026*
MNIST 0.001*** 0.946 0.001*** 0.001***
F-MNIST 0.001* 0.001*** 0.053 0.001***
5.3 Sensitivity to shifts in sample distribution
In this experiment, we aim to investigate the impact on the distribution of pTU(X|DF-MNIST), where X ∼ P (X), when
the dataset undergoes perturbations from the original dataset. In particular, we consider a family of shifts {sμ}μ defined
by sμ(x) = x + N (μ1784, 1/9I784×784) where x ∈ R784 and 1784 is a vector of size 784 with all elements equal to
1. The perturbed dataset is obtained by first drawing X = {xi}n
i=1 from the original dataset Fashion-MNIST, and
then use the shift operator to gradually move the distribution away from X , i.e. {sμ(xi)}n
i=1 for μ ∈ [0, 0.5]. Then,
by Algorithm 1 with m = 30, we can obtain {pT [U (sμ(xi)|DF−MNIST)}xi∈X and we can compare the difference of the
empirical distribution of pT [U (s0(X)|DF−MNIST) and pT [U (sμ(X)|DF−MNIST) where μ ∈ (0, 0.5] by permutation test.
If the p-value is smaller than 0.05, then we will reject H0, and accept {sμ(xi)} is OOD. The process is repeated 100
times and the result is shown in the blue curve in Figure 3, with each cyan point representing the proportion of rejecting
H0 under the corresponding shift μ. Besides, the standard deviation is given by ppˆ(1 − pˆ)/n where n = 100. The
curves represent the corresponding moving averages of each experiment. As expected, when the shift μ increases, the
probability of rejecting H0 also increases.
10

Uncertainty of Network Topology with Applications to Out-of-Distribution Detection A PREPRINT
5.4 Robustness Evaluation
For this experiment, we aim to investigate the relation between model robustness and the distribution of pTU. By
augmenting the training data, we can increase the robustness of the model. Therefore, we train five models on the
Fashion-MNIST dataset: one without any data augmentation, and the others with varying levels of augmentation. We
add four different levels of Gaussian noise to generate augmented data: from weak noise to strong noise, represented as
N (0.05, 1/9), N (0.1, 1/9), N (0.2, 1/9) and N (0.3, 1/9). These training datasets are denoted as D05
F−MNIST, D1
F−MNIST, D2
F−MNIST, and D3
F−MNIST respectively. We compare the statistical power (probability of rejecting H0) to evaluate the
robustness of model for μ = [0, 0.4].
We apply the same method as in Section 5.3 to distinguish between the distribution of pTU trained with F-MNIST
and with augmented F-MNIST. The results are shown in Figure 3. We observe that adding a soft noise during training
helps improve the model’s robustness. However, adding strong noise may have an adverse effect and reduce performance.
Therefore, we can conclude that after adding suitable augmentation, the model learns the underlying essence of the
dataset rather than the superficial perturbations.
Figure 3: Power curve for testing OOD. For a model trained by given training dataset D•
F-MNIST, each curve stands for the
probability of rejecting H0 for μ = [0, 0.4]. Blue: the model is trained by non-augmentation dataset DF-MNIST. Orange,
green, red, purple: the model is trained by augmentation dataset D05
F-MNIST, D1
F-MNIST, D2
F-MNIST, D3
F-MNIST, respectively.
6 Proof of Theorem 3.1
Before we prove Theorem 3.1, we introduce some assumptions on network. Consider an l-th layer and the layer takes
xl−1 as input. Let hl and hl−1 be number of nodes in the l-th layer and the (l − 1)-th layer, respectively. Define the
constant
Al = sup
1≤j≤hl
hl−1 X
i=1
|Wl(j, i)| . (7)
11

Uncertainty of Network Topology with Applications to Out-of-Distribution Detection A PREPRINT
for l = 1, · · · , L. Then, if the activation map σl is 1-Lipschitz, it is obvious that the transformation fl is Al
Lipschitz in ∞-norm. On the other hand, we assume the transformation fl is bounded by Bl in (∞,∞)-norm. That is,
∥fl(xl−1)∥∞ ≤ Bl∥xl−1∥∞ for all xl−1 ∈ Rhl−1 , 1 ≤ l ≤ L. Note that if bl = 0, then Bl = Al.
Now, we can organize the following proposition.
Proposition 6.1. For xl−1, yl−1 ∈ Rhl−1 , there are some facts.
1. By Lipschitz property, we have ∥fl(xl−1) − fl(yl−1)∥∞ < Al∥xl−1 − yl−1∥∞. We further have
∥fl(xl−1) − fl(yl−1)∥∞ < Al∥x0 − y0∥∞
where we denote Al := Ql
k=1 Ak .
2. By bounded transformation property, we have
∥xl∥∞ = ∥fl(xl−1)∥∞ ≤ Bl∥x0∥∞
where denote Bl := Ql
k=1 Bk .
3. Let Cl := sup1≤i≤hl−1,1≤j≤hl |Wl(j, i)|. Then, the persistent diagram is bounded by
∥Dl(xl−1, Fθ)∥∞ ≤ ClBl−1∥x0∥∞ .
The stability of persistent diagram is stated as the following.
Lemma 6.1 (Appendix A.2 in [15]). Consider a l-th dense layer and layer inputs xl, yl. Assume that activation map
σl is 1-Lipschitz such that the fl is Al-Lipschitz transformation. Then, we have
W∞ (Dl(xl−1, Fθ), Dl(yl−1, Fθ)) ≤ Al∥xl−1 − yl−1∥∞
where W∞(·, ·) is ∞-Wasserstein distance (bottleneck distance).
Now we establish the stability of pTU stated by the following lemma.
Lemma 6.2. Consider neural network Fθ and input x, y ∈ Dtrain which are bounded by B0 in ∞-norm. Let activation
maps σl be 1-Lipschitz and the constants Al, Bl, Cl be defined in 6.1. Then, we have
|pTU(x|Dtrain) − pTU(y | Dtrain)| ≤ c∥x − y∥∞. (8)
where c depends on Al, Bl, Cl.
Proof. First, consider the l-th layer and the layer input xl−1, yl−1. Let N denote the number of nodes in the l-th
bipartite graph, which is given by hl + hl−1 − 1. Thus, persistence diagram Dl(xl−1, Fθ) of the l-th bipartite graph is
a ordered vector of size N .
Let mxl−1 and myl−1 denote the Frechet means of the random variables Dl(xl−1, Fθ) and Dl(yl−1, Fθ), respec
tively, with mz given by R
Θ Dl(z, Fθ)π(θ | Dtrain) dθ for z = xl−1, yl−1. Note that the closed form of p-Wasserstein
distance on R is well-known. Thus, we can rewrite Definition (2) as
Varθ [Dl(xl−1, Fθ) | Dtrain] = inm ̄f
Z
W2(Dl(xl−1, Fθ),  ̄m)2π(θ | Dtrain)dθ
=
Z
W2(Dl(xl−1, Fθ), mxl−1 )2π(θ | Dtrain)dθ =
Z1
N ∥Dl(xl−1, Fθ) − mxl−1 ∥2π(θ | Dtrain)dθ ,
12

Uncertainty of Network Topology with Applications to Out-of-Distribution Detection A PREPRINT
where ∥ · ∥ is Euclidean 2-norm. Then, we have
N |Varθ [Dl(xl−1, Fθ) | Dtrain] − Varθ [Dl(yl−1, Fθ) | Dtrain]|
=
Z
∥Dl(xl−1, Fθ) − mxl−1 ∥2π(θ | Dtrain)dθ −
Z
∥Dl(yl−1, Fθ) − myl−1 ∥2π(θ | Dtrain)dθ
≤
Z
Dl(xl−1, Fθ)⊤Dl(xl−1, Fθ) − Dl(yl−1, Fθ)⊤Dl(yl−1, Fθ) π(θ|Dtrain)dθ
+ m⊤
xl−1 mxl−1 − m⊤
yl−1 myl−1
(9)
For the first term in (9), we have
Z
Dl(xl−1, Fθ)⊤Dl(xl−1, Fθ) − Dl(yl−1, Fθ)⊤Dl(yl−1, Fθ) π(θ|Dtrain)dθ
≤
Z
∥Dl(xl−1, Fθ)∥ − ∥Dl(yl−1, Fθ)∥ (∥Dl(xl−1, Fθ)∥ + ∥Dl(yl−1, Fθ)∥) π(θ|Dtrain)dθ
≤
Z
∥Dl(xl−1, Fθ) − Dl(yl−1, Fθ)∥ (∥Dl(xl−1, Fθ)∥ + ∥Dl(yl−1, Fθ)∥) π(θ|Dtrain)dθ
≤N
Z
W∞ (Dl(xl−1, Fθ), Dl(yl−1, Fθ)) (ClBl−1∥x0∥∞ + ClBl−1∥y0∥∞) π(θ|Dtrain)dθ
≤N
Z
Al ∥xl−1 − yl−1∥∞ (ClBl−1∥x0∥∞ + (ClBl−1∥y0∥∞) π(θ|Dtrain)dθ
≤2N ClAlBl−1B0 ∥xl−1 − yl−1∥∞
where the third inequality is due to Proposition 6.1 and the last inequality is due to Lemma 6.1 and the boundness of x0,
y0.
Second, for the second term in (9), we have
m⊤
xl−1 mxl−1 − m⊤
yl−1 myl−1 ≤ ∥mxl−1 ∥ − ∥myl−1 ∥ ∥mxl−1 ∥ + ∥myl−1 ∥
≤
Z
∥Dl(xl−1, Fθ) − Dl(yl−1, Fθ)∥ π(θ|Dtrain)dθ (ClBl−1∥x0∥∞ + ClBl−1∥y0∥∞)
≤2N ClAlBl−1B0 ∥xl−1 − yl−1∥∞
Now, for l-th layer, we have (9) ≤ 4N ClAlBl−1B0 ∥xl−1 − yl−1∥∞. By definition of pTU in (1), for x, y ∈ Dtrain,
we have
|pTU(x) − pTU(y)| ≤ 1
L
L
X
l=1
Varθ [Dl(xl−1, Fθ) | Dtrain] − Varθ [Dl(yl−1, Fθ) | Dtrain]
≤
L
X
l=1
4ClAlBl−1B0
L ∥xl−1 − yl−1∥∞
≤
L
X
l=1
4ClAlBl−1B0
L
l−1
Y
k=1
Ak∥x0 − y0∥∞ ≤
L
X
l=1
4ClAlAl−1Bl−1B0
L ∥x − y∥∞ .
Hence, the constant c, defined as c := PL
l=1
4Cl Al Bl−1 B0
L , is the desired constant in 8.
We restate Theorem 3.1 here for convenience.
Theorem 6.1. Consider neural network Fθ. Let random variables X, Y ∼ P (X) are bounded. Let activation maps σl
be 1-Lipschitz and the constants Al, Bl, Cl be defined in Proposition 6.1. Then, under the normality assumption of
13

Uncertainty of Network Topology with Applications to Out-of-Distribution Detection A PREPRINT
posterior, we have
W2(pTU(X|Dtrain), pTU(Y |Dtrain)) ≤ CW2(X, Y ) (10)
where C depends on Al, Bl, Cl.
Proof. By definition, it is equivalent to show
γin∈fΓ Eγ
h
|pTU(X|Dtrain) − pTU(Y | Dtrain)|2i
≤ c γin∈fΓ Eγ
h
∥X − Y ∥2
∞
i
,
where Γ is the set of all coupling of Dtrain × Dtrain. Let ε > 0. There exists γ ̄ ∈ Γ such that
Eγ ̄
h
∥X − Y ∥2
∞
i
≤ γin∈fΓ Eγ
h
∥X − Y ∥2
∞
i
+ε.
By Lemma 6.2, for given γ ̄, we can obtain that
Eγ ̄
h
|pTU(X|Dtrain) − pTU(Y | Dtrain)|2i
≤ c2Eγ ̄ ∥X − Y ∥2
∞.
Thus, by putting above two inequalities together, we have
Eγ ̄
h
|pTU(X|Dtrain) − pTU(Y | Dtrain)|2i
≤ c2 γin∈fΓ Eγ
h
∥X − Y ∥2
∞
i
+ε.
On the other hand, to show the existence of γ ̄
γin∈fΓ Eγ
h
|pTU(X|Dtrain) − pTU(Y | Dtrain)|2i
≤ c2Eγ ̄
h
∥X − Y ∥2
∞
i
is straightforward, refer to Lemma 6.2. Therefore, the desired result follows.
7 Conclusion
In this work, we generalize the concept of Topological Uncertainty to Bayesian neural networks, leveraging activation
graphs to analyze the behavior of the model. Additionally, we show that pTU exhibits a stability property, which
allows for distinguishing whether a given dataset is out-of-distribution (OOD). This property not only enhances the
understanding of model predictions but also provides a robust indicator for assessing the reliability of the network under
varying conditions. Our findings highlight the potential of pTU as a powerful tool for evaluating both OOD and model
robustness.
A Additional Experimental Details
A.1 Networks architectures and training
Architecture In Section 5, all networks are implemented as multi-layer perceptrons (MLPs), which input the flattened
image as 784-dim input and return probabilities of 10 class. In Section 5.1, the network architectures are as follows: M3
(784 → 80 → 10), M4 (784 → 64 → 16 → 10), M5 (784 → 40 → 20 → 20 → 10), M6 (784 → 32 → 16 → 16 →
16 → 10), M7 (784 → 20 → 20 → 16 → 12 → 12 → 10), M8 (784 → 16 → 16 → 12 → 12 → 12 → 12 → 10),
M9 (784 → 16 → 12 → 12 → 10 → 10 → 10 → 10). All the other models in Section 5.2 - Section 5.4 are 3-layer
models with the architecture (784 → 64 → 16 → 10).
14

Uncertainty of Network Topology with Applications to Out-of-Distribution Detection A PREPRINT
Loss Variational learning determines the parameters φ of a weight distribution q(θ|φ) in order to minimize the KL
divergence from the actual Bayesian posterior distribution π(θ|D) on weights. Let π(θ) be the prior distribution of the
parameters and P (D | θ) be the likelihood, which corresponds to the cross-entropy or softmax loss. Then, according to
[3], the loss function is designed as
F (D, θ) = KL[q(θ | φ)∥π(θ)] − Eq(θ|φ)[log P (D | θ)]. (11)
Training We utilized the Adam optimizer for its efficient computation. We train the model without regularization,
following the guidelines in [3]. To prevent overfitting and ensure efficient training, we implemented early stopping. We
specifically set the patience to 25 epochs. The test accuracies of various architectural models trained on F-MNIST and
discussed in Section 5.1 are shown in Table 2. The test accuracies of 3-layer model trained on various datasets are listed
in Table 3.
Table 2: The accuracies of models trained on F-MNIST, which is discussed in Section 5.1.
Model name # of layers # of neurals Test acc
M3 2 874 87.56 %
M4 3 874 87.33 %
M5 4 874 86.90 %
M6 5 874 86.98 %
M7 6 874 86.1 %
M8 7 874 85.12 %
M9 8 874 83.24 %
Table 3: The test accuracies of 3-layer model trained on various datasets.
Training set Test acc
SVHN w/o aug 70.36 %
MNIST w/o aug 97.39 %
F-MNIST w/o aug 87.33 %
F-MNIST w/ aug μ = 0.05 88.26 %
F-MNIST w/ aug μ = 0.1 88.39 %
F-MNIST w/ aug μ = 0.2 87.24 %
F-MNIST w/ aug μ = 0.3 85.31 %
A.2 Datasets preprocessing
Datasets description The MNIST and F-MNIST datasets [17, 26] both include 60,000 training sample and 10,000 test
samples. These samples are grayscale images with a resolution of 28 × 28 pixels, categorized into 10 classes. MNIST
represents handwritten digits, while F-MNIST contains images of fashion items.
15

Uncertainty of Network Topology with Applications to Out-of-Distribution Detection A PREPRINT
The SVHN dataset [21] consists of 73,257 training sample and 26,032 test samples. These samples are RGB images
with dimensions 32 × 32 × 3, representing street view of house numbers. The images are divided into 10 classes, each
corresponding to a digit extracted from natural images.
The CIFAR10 dataset [14] consists of 10,000 test samples. These samples are RGB images with dimensions
32 × 32 × 3, representing nature images. Since the CIFAR10 is used here, the images are divided into 10 classes.
Preprocessing All image pixels are rescaled to [0, 1] from [0, 255], then converted to grayscale and resized to
28 × 28 × 1. Additionally, images with added noise are clipped to the range [0, 1].
B Additional Results
B.1 More figures for Section 5.2
Figure 4 shows the distributions of pTU(X|Dtrain) for given training dataset Dtrain and given underlying distribution of
dataset X′ ∼ P (X′) where P (X′) may or may not be the same as the underlying distribution of the training dataset, as
discussed in Section 5.2. Each subfigure presents a model trained on a given dataset Dtrain where Dtrain may be SVHN,
MNIST or F-MNIST. Furthermore, each curve stands for an empirical distribution {pT [U (xi|Dtrain)}xi∈X ′ where X ′
may be drawn from the underlying distribution of SVHN, MNIST, F-MNIST or CIFAR. In particular, we highlight the
distributions with blue dashed lines when P (X′) = P (X), indicating that P (X′) represents the underlying distribution
of the training set. It is important to note that these represent the same underlying distributions, but the data we sample
from them may not necessarily be the same.
Figure 4: Left: the empirical distributions {pT [U (xi|DSVHN)}xi∈X ′ where X ′ drawn from different underlying dis
tribution. Middle: the empirical distributions {pT [U (xi|DMNIST)}xi∈X ′ where X ′ drawn from different underlying
distribution. Right: the empirical distributions {pT [U (xi|DF-MNIST)}xi∈X ′ where X ′ drawn from different underlying
distribution.
16

Uncertainty of Network Topology with Applications to Out-of-Distribution Detection A PREPRINT
B.2 More figures for Section 5.4
Figure 5 shows the distribution of pTU(sμ(X)|D•
F-MNIST) for given μ and given training dataset D•
F-MNIST, which
represents the distribution of the results from a single experiment discussed in Section 5.4. Each subfigures presents the
shift level sμ of the datasets and each curve stands for different training dataset D•
F-MNIST.
Figure 5: Leftmost: five curves show the empirical distributions {pT [U (s0(xi)|DF-MNIST)}, {pT [U (s0(xi)|D05
F-MNIST)},
{pT [U (s0(xi)|D1
F-MNIST)}, {pT [U (s0(xi)|D2
F-MNIST)} and {pT [U (s0(xi)|D3
F-MNIST)}, respectively. The other subfigures
are similar, with the only difference being the shift level, meaning that s0 should be changed to s0.1, s0.2, s0.3 and s0.4,
respectively.
References
[1] M. ABDAR, F. POURPANAH, S. HUSSAIN, D. REZAZADEGAN, L. LIU, M. GHAVAMZADEH, P. FIEGUTH,
X. CAO, A. KHOSRAVI, U. R. ACHARYA, ET AL., A review of uncertainty quantification in deep learning:
Techniques, applications and challenges, Information fusion, 76 (2021), pp. 243–297.
[2] H. ADAMS, T. EMERSON, M. KIRBY, R. NEVILLE, C. PETERSON, P. SHIPMAN, S. CHEPUSHTANOVA,
E. HANSON, F. MOTTA, AND L. ZIEGELMEIER, Persistence images: A stable vector representation of persistent
homology, Journal of Machine Learning Research, 18 (2017), pp. 1–35.
[3] C. BLUNDELL, J. CORNEBISE, K. KAVUKCUOGLU, AND D. WIERSTRA, Weight uncertainty in neural network,
in International conference on machine learning, PMLR, 2015, pp. 1613–1622.
[4] P. BUBENIK, Statistical topological data analysis using persistence landscapes, Journal of Machine Learning
Research, 16 (2015), pp. 77–102.
[5] F. CHAZAL, V. DE SILVA, M. GLISSE, AND S. OUDOT, The structure and stability of persistence modules,
Springer, abs/1207.3674 (2016), https://api.semanticscholar.org/CorpusID:2460562.
[6] D. COHEN-STEINER, H. EDELSBRUNNER, AND J. HARER, Stability of persistence diagrams, Discrete Computa
tional Geometry, 37 (2007), pp. 103–120.
[7] D. COHEN-STEINER, H. EDELSBRUNNER, J. HARER, AND Y. MILEYKO, Lipschitz functions have l p-stable
persistence, Foundations of computational mathematics, 10 (2010), pp. 127–139.
[8] H. EDELSBRUNNER AND J. L. HARER, Computational topology: an introduction, American Mathematical
Society, 2010.
[9] M. FRÉCHET, Les éléments aléatoires de nature quelconque dans un espace distancié, Annales de l’institut Henri
Poincaré, 10 (1948), pp. 215–310.
17

Uncertainty of Network Topology with Applications to Out-of-Distribution Detection A PREPRINT
[10] Y. GAL AND Z. GHAHRAMANI, Dropout as a bayesian approximation: Representing model uncertainty in deep
learning, in international conference on machine learning, PMLR, 2016, pp. 1050–1059.
[11] T. GEBHART, P. SCHRATER, AND A. HYLTON, Characterizing the shape of activation space in deep neural
networks, in 2019 18th IEEE International Conference On Machine Learning And Applications (ICMLA), IEEE,
2019, pp. 1537–1542.
[12] A. GRETTON, K. M. BORGWARDT, M. J. RASCH, B. SCHÖLKOPF, AND A. SMOLA, A kernel two-sample test,
The Journal of Machine Learning Research, 13 (2012), pp. 723–773.
[13] E. HÜLLERMEIER AND W. WAEGEMAN, Aleatoric and epistemic uncertainty in machine learning: An introduc
tion to concepts and methods, Machine learning, 110 (2021), pp. 457–506.
[14] A. KRIZHEVSKY, Learning multiple layers of features from tiny images, 2009, https://api.
semanticscholar.org/CorpusID:18268744.
[15] T. LACOMBE, Y. IKE, M. CARRIERE, F. CHAZAL, M. GLISSE, AND Y. UMEDA, Topological uncertainty:
Monitoring trained neural networks through persistence of activation graphs, in International Joint Conferences
on Artificial Intelligence, 2021.
[16] B. LAKSHMINARAYANAN, A. PRITZEL, AND C. BLUNDELL, Simple and scalable predictive uncertainty
estimation using deep ensembles, Advances in neural information processing systems, 30 (2017).
[17] Y. LECUN AND C. CORTES, The mnist database of handwritten digits, 2005, https://api.semanticscholar.
org/CorpusID:60282629.
[18] J. LIU, Variable selection with rigorous uncertainty quantification using deep bayesian neural networks: Posterior
concentration and bernstein-von mises phenomenon, in International Conference on Artificial Intelligence and
Statistics, PMLR, 2021, pp. 3124–3132.
[19] Q. LIU, J. LEE, AND M. JORDAN, A kernelized stein discrepancy for goodness-of-fit tests, in Proceedings of
The 33rd International Conference on Machine Learning, M. F. Balcan and K. Q. Weinberger, eds., vol. 48 of
Proceedings of Machine Learning Research, New York, New York, USA, 20–22 Jun 2016, PMLR, pp. 276–284,
https://proceedings.mlr.press/v48/liub16.html.
[20] G. NAITZAT, A. ZHITNIKOV, AND L.-H. LIM, Topology of deep neural networks, The Journal of Machine
Learning Research, 21 (2020), pp. 7503–7542.
[21] Y. NETZER, T. WANG, A. COATES, A. BISSACCO, B. WU, AND A. NG, Reading digits in natural images
with unsupervised feature learning, in NIPS workshop on deep learning and unsupervised feature learning, 2011,
https://api.semanticscholar.org/CorpusID:16852518.
[22] R. RAHAMAN ET AL., Uncertainty quantification and deep ensembles, Advances in neural information processing
systems, 34 (2021), pp. 20063–20075.
[23] R. RANGANATH, S. GERRISH, AND D. BLEI, Black box variational inference, in Artificial intelligence and
statistics, PMLR, 2014, pp. 814–822.
[24] B. RIECK, M. TOGNINALLI, C. BOCK, M. MOOR, M. HORN, T. GUMBSCH, AND K. BORGWARDT, Neural
persistence: A complexity measure for deep neural networks using algebraic topology, in International Conference
on Learning Representations, 2019.
18

Uncertainty of Network Topology with Applications to Out-of-Distribution Detection A PREPRINT
[25] P. SKRABA AND K. TURNER, Wasserstein stability for persistence diagrams, arXiv preprint arXiv:2006.16824,
(2020).
[26] H. XIAO, K. RASUL, AND R. VOLLGRAF, Fashion-mnist: a novel image dataset for benchmarking machine learn
ing algorithms, ArXiv, abs/1708.07747 (2017), https://api.semanticscholar.org/CorpusID:702279.
[27] J. YANG, K. ZHOU, Y. LI, AND Z. LIU, Generalized out-of-distribution detection: A survey, arXiv preprint
arXiv:2110.11334, (2021).
[28] A. J. ZOMORODIAN, Topology for computing, vol. 16, Cambridge university press, 2005.
19

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:26.205Z
- **Text Length:** 48083 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 19 of 19
