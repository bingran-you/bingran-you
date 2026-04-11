# PDF Document: Tian et al. - 2025 - Sampling Control for Imbalanced Calibration in Semi-Supervised Learning.pdf

**File Path:** Tian et al. - 2025 - Sampling Control for Imbalanced Calibration in Semi-Supervised Learning.pdf

**Processed Date:** 2026-02-10T18:14:51.073Z

**File Size:** 2097.22 KB

**Total Pages:** 13

**Extracted Pages:** 13

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3409

**Title:** Sampling Control for Imbalanced Calibration in Semi-Supervised Learning

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Sampling Control for Imbalanced Calibration in Semi-Supervised Learning
Senmao Tian, Xiang Wei, Shunli Zhang*
School of Software Engineering, Beijing Jiaotong University smtian1204@gmail.com, slzhang@bjtu.edu.cn
Abstract
Class imbalance remains a critical challenge in semisupervised learning (SSL), especially when distributional mismatches between labeled and unlabeled data lead to biased classification. Although existing methods address this issue by adjusting logits based on the estimated class distribution of unlabeled data, they often handle model imbalance in a coarse-grained manner, conflating data imbalance with bias arising from varying class-specific learning difficulties. To address this issue, we propos-
e a unified framework, SC-SSL, which suppresses model bias through decoupled sampling control. During training, we identify the key variables for sampling control under ideal conditions. By introducing a classifier with explicit expansion capability and adaptively adjusting sampling probabilities across different data distributions, SC-SSL mitigates feature-level imbalance for minority classes. In the inference phase, we further analyze the weight imbalance of the linear classifier and apply post--
hoc sampling control with an optimization bias vector to directly calibrate the logits. Extensive experiments across various benchmark datasets and distribution settings validate the consistency and state-of-the-art performance of SC-SSL.
Code — https://github.com/Sheldon04/SC-SSL
Introduction
Semi-supervised learning (SSL) (Berthelot et al. 2019b; Miyato et al. 2017; Tarvainen and Valpola 2017) is a powerful strategy aimed at enhancing the generalization capabilities of deep neural networks (DNNs) (Chen et al. 2024a,b; Hong et al. 2023; Lin et al. 2025) by leveraging limited labeled data, particularly in scenarios where labeled samples are scarce. The core of most SSL methods (Sohn et al. 2020; Li, Xiong, and Hoi 2020; Berthelot et al. 2019a) lies in generating pseudo-labels for unlabe-
led data and selecting reliable labels for model training. However, real-world data often exhibits a long-tailed distribution (Li et al. 2022; Wang et al. 2020; Xiang and Ding 2020), leading models to primarily focus on common categories during training, which results in an imbalance of pseudo-labels. This phenomenon has given rise to class-imbalanced semi-supervised learning (CISSL). Traditional CISSL approaches (Fan, Dai, and
*Corresponding author. Copyright © 2026, Association for the Advancement of Artificial Intelligence (www.aaai.org). All rights reserved.
Schiele 2021; Lee, Shin, and Kim 2021; Wei et al. 2021) typically assume that the class distributions of labeled and unlabeled data are consistent, a premise that is often overly idealistic. In practical applications, class distributions may be inconsistent or even unknown (Lai et al. 2022; Kim et al. 2020; Oh, Kim, and Kweon 2021), especially when continuously collecting new data or processing data from different tasks. Variations in the distribution of unlabeled data significantly affect the per-
formance of CISSL methods. To address these challenges, recent approaches (Wang et al. 2022a; Zheng et al. 2024; Li et al. 2024; Lee and Kim 2024) have focused on adapting to unknown and mismatched class distributions. Techniques such as ACR (Wei and Gan 2023), CPE (Ma et al. 2024), and SimPro (Du, Han, and Huang 2024) have been proposed to estimate the distance between distributions and train classifiers that adapt to specific or arbitrary distributions. However, due to the inherent limitations i-
n the accuracy of classifiers, the adjusted pseudolabels may not accurately reflect the true distribution of unlabeled data. Current methods (Wei and Gan 2023; Ma et al. 2024; Du, Han, and Huang 2024) improve model generalization by retaining a small portion of high-quality pseudolabels to avoid confirmation bias (Wang et al. 2022b), resulting in a significant amount of unlabeled data not effectively contributing to training. Although some methods (Guo and Li 2022; Yu, Li, and Lee 2023) use adapti-
ve thresholds to adjust the class probabilities for pseudo-labeling, these methods rely on the model’s prediction confidence. These methods overlook the importance of addressing imbalance from a finer-grained perspective, which results in featurelevel model bias and renders logit adjustment ineffective in targeting the root cause. As a result, these methods still yield suboptimal performance.
To address this issue, we propose a novel method called SC-SSL (Sampling Control for Imbalanced Semisupervised Learning), which suppresses model bias through decoupled sampling control. Starting from known information, we divide the labeled data into head and non-head classes based on their sample sizes. During training, instead of solely focusing on improving classification accuracy, SCSSL emphasizes whether the learned features of non-head classes are balanced.
Without altering the training objective (i.e., the classification loss), we introduce an expansive classifier that focuses
arXiv:2511.18773v1 [cs.LG] 24 Nov 2025

Head Class Non-head Class
Figure 1: We select one image from a head class and one from a non-head class, and visualize their features using Grad-CAM (Selvaraju et al. 2016). The top row shows the results from training with uniform sampling, while the bottom row shows the results from SC-SSL. It can be observed that the attention regions for the non-head class are significantly improved, capturing more relevant features. To enhance visual clarity, we applied upsampling.
on feature learning for non-head classes. We incorporate the expansion–separation assumption and leverage the inherent denoising property of consistency regularization, allowing even noisy pseudo-labels to be used effectively. This balances the gradient contributions between head and non-head classes during training. To improve the sampling probability of non-head classes, we theoretically identify key control factors and associate them with the expansion factor in the assumption. This enables eff-
ective sampling regulation across various data distributions, allowing SC-SSL to mitigate the effects of data imbalance and suppress feature-level bias as fig. 1 shows. However, the supervised losses of the three classifiers are influenced by their respective sampling factors, leading to additional imbalance. This imbalance arises from both data distribution and optimization dynamics. As a result, an imbalance remains in the linear layers due to optimization. At inference time, since feature imbal-
ance has been alleviated, we can directly correct the optimization-induced imbalance in the classifier. We observe that the bias term of the linear layer reflects a combination of optimization imbalance and data imbalance. Under random sampling, head classes tend to have higher bias values; under the expansive classifier’s sampling, tail classes exhibit higher bias values; whereas the output classifier—trained with balanced sampling for inference—has bias terms that exclude data imbalance, thus is-
olating the optimization bias. Unlike the classifier weights, which require interaction with feature vectors and are harder to isolate, the bias term serves as a clean proxy for optimization imbalance. Therefore, we treat it as an optimization bias vector to calibrate the final logits, producing an overall unbiased prediction. Additionally, SC-SSL also leverages this bias estimation prior to training to approximate the distribution of the unlabeled data. The resulting estimation is then used to in-
itialize
pseudo-label sampling strategies for both the balanced and expansive classifiers. We summarize our contributions as follows:
• We propose SC-SSL, a unified framework that mitigates both feature-level bias and logits-level bias in imbalanced settings through decoupled sampling control with an expansion classifier guided by the expansion–separation assumption.
• We theoretically analyze the key factors for controlling pseudo-label sampling under class imbalance, and dynamically adjust the sampling probabilities during training.
• Our proposed method achieves state-of-the-art performance on datasets such as CIFAR10-LT, CIFAR100-LT, STL10-LT, and ImageNet-127, across various distributions of unlabeled data.
Related Work
Semi-supervised Learning In the realm of SSL, a subset of algorithms has risen to prominence by leveraging unlabeled data to enhance model performance. These algorithms operate on the principle of generating pseudo-labels, thereby establishing a self-training mechanism that refines the model iteratively. Advanced SSL strategies have taken this a step further by merging pseudo labeling with consistency regularization. This fusion promotes consistent predictions for the same image across different p-
resentations, enhancing the resilience of DNNs. Among these, FixMatch (Sohn et al. 2020) and ReMixMatch (Berthelot et al. 2019a) stand out as particularly effective methods, achieving remarkable success in image recognition tasks and surpassing other SSL techniques in performance.
Class Imbalanced Semi-supervised Learning CISSL has garnered considerable interest due to its effectiveness in various real-world applications. CReST (Wei et al. 2021) emphasizes the importance of leveraging unlabeled instances from less common classes during its iterative selftraining phase. Meanwhile, ABC (Lee, Shin, and Kim 2021) and CoSSL (Fan, Dai, and Schiele 2021) introduce an additional classifier to prevent bias in the training process towards any specific class. Although these methods ha-
ve shown significant performance enhancements, they generally operate under the assumption that the class distributions for both labeled and unlabeled data are the same. In realworld scenarios, the distribution of unlabeled data may be unknown and mismatched. To tackle the challenges of realistic CISSL, DASO (Oh, Kim, and Kweon 2021) innovatively adjusts the ratio of linear and semantic pseudo-labels based on the unknown class distribution of unlabeled data. Conversely, ACR (Wei and Gan 2023) seek-
s to improve consistency regularization by establishing predefined distribution anchors, yielding encouraging outcomes. Following ACR, SimPro (Du, Han, and Huang 2024) takes a step further to model arbitrary unlabeled data distributions using probability theory. CPE (Ma et al. 2024) takes a different approach by training multiple experts, with each expert focusing on modeling a specific distribution. When generating

Dog Cat
Non-head Classes
Head Classes
Expansive Classifier Labeled
Loss
Unlabeled Data Distribution
SC-Training
Labeled Data Distribution
Estimation
Unlabeled Loss
Backbone
Base Algorithm
Output Classifier
SC-Inference
Final Prediction
Feature
Forward
Backward
Optimization bias vector
Estimated distribution
Subtraction
Logits-level bias
Feature-level bias
Figure 2: Illustration of the proposed framework. Details of the three key factors γu, ∆p, and ρ can be found in eq. (4). The utilization of these factors can be found in the Method section.
pseudo-labels, logit adjustments are made by ACR and SimPro based on the estimated distribution, which makes the quality of the pseudo-labels heavily dependent on the accuracy of the estimates.
Method
Preliminaries
Problem Setup In the domain of CISSL, which is also referred to as long-tailed semi-supervised learning, we deal with a scenario that includes a labeled training dataset Dl = {(xl
i, yl
i )}N
i=1 and an unlabeled training dataset Du =
{xu
j }M
j=1. Both datasets share the same set of classes. Each
data point x is associated with a class label yi ∈ {0, 1}K . For the labeled dataset Dl, the number of samples for the k-th class is denoted by Nk, and for the unlabeled dataset Du, it is denoted by Mk. The number of samples in the most frequent class in the labeled and unlabeled datasets are N and M , respectively. Given that the distribution of classes in Dl is typically imbalanced, classes are arranged in descending order, resulting in N1 > N2 > . . . > NK . Here, the head classes are defined a-
s those in the first half, while the non-head classes are those in the latter half. The imbalance
ratio for the labeled dataset is defined as γl = N1
NK . The class distribution for the unlabeled dataset Du remains unknown due to the absence of labels. Although we do not need to make assumptions about the distribution of unlabeled data, we still utilize predefined anchor distributions for a better comparison with previous methods. We consider two general types of distributions: long-tail and Gaussian. For longtail settings, we adopt consistent, uniform, and inverse distributions as the pre-defined anchors with an imbalance ratio
γu. In the inverse setting, the sample count for each class is sorted in ascending order, meaning it is the opposite of the labeled data. For Gaussian scenes, we have normal and inverse settings. The mean and variance of the Gaussian distribution are set to (K − 1)/2 and K/6, respectively.
Notations Du is the set of samples drawn from distribution P , reflecting the characteristics of the data in the input space X . We let B : X → RQ denote a learned backbone mapping function (e.g., the continuous features output by a neural network), F : RQ → [K] the scoring function from features to logits, G : X → [K] the discrete labels from G(x) ≜ argmaxi(σ(F (B(x))i)) and σ(·) denotes the Softmax function. For different classification heads, Fb denotes the output classifier and Fe denotes the -
expansive classifier, respectively. They share the backbone B.
Motivation
When the class distributions of labeled and unlabeled datasets are misaligned, many existing approaches (Wei and Gan 2023; Du, Han, and Huang 2024; Ma et al. 2024) adopt conservative strategies, avoiding the use of pseudolabels for tail classes due to concerns about noise and label errors. However, recent theoretical perspectives on selftraining suggest that consistency regularization can still extract meaningful supervision from noisy pseudo-labels, as long as certain structural assumptions about-
 the data distribution hold. Specifically, the expansion assumption implies that even if only a small fraction of samples from a class are confidently predicted, their surrounding regions in the feature space are likely to contain samples from the same class.

This implies that well-initialized class-conditional feature clusters can propagate label information to nearby unlabeled samples, thereby enhancing the balance of feature representations across classes. Formally, the class-conditional distribution Pi is said to satisfy an (a, c)-expansion if for any subset V ⊆ X with Pi(V ) ≤ a, the following holds:
Pi(N (V )) ≥ min{cPi(V ), 1}, (1)
where N (V ) denotes a neighborhood around V in feature space. Complementary to this, the separation assumption ensures local consistency under input perturbation. It requires that augmented versions of the same sample are predicted consistently:
RB(G) ≜ EP [I (∃x′ ∈ A(x) s.t. G(x′) ̸= G(x))]
≤ μ, (2)
where A(x) defines the augmentation neighborhood of x, and μ reflects the classifier’s robustness to such perturbations. Under these assumptions, the classifier’s generalization error is upper-bounded by the quality of the pseudo-label generator and its robustness to augmentations. Specifically, the pseudo-label denoising theorem states that the error of the classifier Gb satisfies:
Err(Gb) ≤ 2c
c − 3 μ, (3)
where c > 3 denotes the expansion factor. The detailed derivation can be found in the Appendix of (Wei et al. 2020). We adopt the FixMatch (Sohn et al. 2020) setting, using Gb directly as the pseudo-labeler. This implies that even if pseudo-labels are noisy, as long as the model maintains low perturbation sensitivity (small μ) and high feature-local consistency (large c), it can still facilitate class-balanced feature learning, especially for tail classes.
The Design of SC-SSL
Sampling Control for Training In cases of long-tailed distributions of labeled data, the classifier’s predictions tend to be biased towards the head classes, which leads to an imbalance in the predictions of pseudo-labels. This results in a misalignment between directly using thresholds to adjust sampling probabilities and prediction biases, leading to the occurrence of confirmation bias. Fortunately, prior work has proposed using logit adjustment-based balanced loss (Menon et al. 2020; Wei and Ga-
n 2023; Du, Han, and Huang 2024; Ma et al. 2024) to reduce the bias of classifiers. Building on this insight and some explorations from previous studies (Wang et al. 2022b; Yang and Xu 2020), we utilize a simplified binary classification problem to further investigate the sampling probabilities of pseudo-labels. Given the imbalanced unlabeled data, we assume that the probability of the label Y being positive (+1) is γ ∈ 1
2,1 ,
while the probability of it being negative (-1) is 1 − γ. The input X has the following conditional distributions:
X | Y = −1 ∼ N (μ1, σ2
1), X | Y = +1 ∼ N (μ2, σ2
2 ).
We assume μ2 > μ1 without loss of generality. Since we have already balanced the labeled loss and the adjusted input can be viewed as (§ + ∆p) (∆p is set to the natural log of the label frequency of the positive class), we can roughly estimate the prediction of the pseudo-labels as (§ − ∆p). Suppose the classifier outputs a confidence score defined as:
s(§) = 1/(1 + exp −β (§ − ∆p) − μ1+μ2
2 ), where β
is a positive parameter reflecting the model’s learning status and is expected to increase during training as the model be
comes more confident gradually, and μ1+μ2
2 represents the
Bayes’ optimal linear decision boundary. We consider a scenario where a fixed threshold ρ ∈ 1
2 , 1 is used to generate
pseudo labels. A sample § is assigned a pseudo label of +1 if s(§) > ρ and -1 if s(§) < 1 − ρ. The pseudo label is set to 0 (masked) if 1 − ρ ≤ s(§) ≤ ρ.
Theorem 0.1. The pseudo label Ypsl has the following probability distribution:
P (Ypsl = 1) = γΦ(
μ2 −μ1
2 −1
β log( ρ
1−ρ ) − ∆p
σ2
)
+ (1 − γ)Φ(
μ1 −μ2
2 −1
β log( ρ
1−ρ ) − ∆p
σ1
),
P (Ypsl = −1) = (1 − γ)Φ(
μ2 −μ1
2 −1
β log( ρ
1−ρ ) + ∆p
σ1
)
+ γΦ(
μ1 −μ2
2 −1
β log( ρ
1−ρ ) + ∆p
σ2
),
P (Ypsl = 0) = 1 − P (Ypsl = 1) − P (Ypsl = −1),
(4) where Φ is the cumulative distribution function of a standard normal distribution.
The proof can be found in the Appendix. Then we can derive the following implications:
• The sampling probability of pseudo-labels is primarily influenced by γ. Given that μ2 > μ1, the sampling probability for the head classes in the labeled data is naturally greater than that for the non-head classes, assuming other factors are not considered.
• By controlling the logit adjustment amount ∆p, it is possible to mitigate or even reverse the extent to which the sampling probabilities are affected by the inherent imbalance in the data.
• The choice of confidence also impacts the sampling probabilities; however, it is essential to consider that lower sampling probabilities can lead to confirmation bias as β gradually increases.
In dual-classifier settings (Lee, Shin, and Kim 2021; Wei and Gan 2023), the original classifier is typically kept unchanged, while the second classifier is usually introduced to produce balanced output logits. However, this setup prevents us from adjusting the pseudo-label sampling probabilities of either classifier under the separation assumption. On one hand, for the balanced classifier, balanced logits imply that the pseudo-labels sampled are likely to be balanced as well—meaning they approxim-
ately match the true distribution of pseudo-labels. In this true distribution, the proportion

Figure 3: We choose the distribution setting of Consist to illustrate the pattern of the linear layer’s bias term. Under random sampling, since the data follows a long-tailed distribution, the bias term tends to favor head classes. In contrast, under SC-SSL’s controlled expansive sampling, the pseudolabel sampling probability is deliberately skewed toward minority classes, resulting in the opposite trend. Therefore, under balanced sampling, the bias term reflects the effect of optimization imbala-
nce.
of non-head classes may be high or low. When the proportion is low, the sampling probability is essentially governed by the data imbalance factor γ, meaning head classes are still sampled with high probability. Since this classifier is responsible for producing the final outputs and optimizing classification accuracy, it becomes difficult to make significant adjustments to ∆p, the change in sampling probability. As a result, increasing the sampling rate of non-head classes becomes challenging. On -
the other hand, for the original classifier, since ∆p cannot be modified directly, the only option is to increase the sampling probability of non-head classes by adjusting the confidence threshold ρ. However, due to the classifier’s inherent bias toward head classes, strong data augmentations tend to obscure class-discriminative features, causing the prediction G(x′) to favor head classes. This violates the separation assumption defined in Eq. (2). In summary, neither the output classifier nor the-
 original classifier is suitable for significantly adjusting pseudo-label sampling. Therefore, we introduce an additional expansive classifier that shares the same backbone but allows direct control over the sampling probability of non-head classes.
Sampling Control for Inference At inference time, despite the alleviation of feature imbalance through our expansive classifier during training, an optimization-induced imbalance still persists within the linear classifier parameters. Formally, a classifier can be expressed as:
F (B(x)) = WB(x) + b,
where W represents the weight matrix, B(x) is the feature vector produced by the backbone network, and b is the bias term. Since supervised losses of all linear classifiers are optimized using labeled data and traditional cross-entropy, the inherent class imbalance within labeled data inevitably impacts the bias term b. We observe that these bias terms encapsulate two distinct sources of imbalance: data distribution imbalance and optimization-induced imbalance, as fig. 3 shows. Under a random samp-
ling regime, head classes
typically exhibit higher bias values, reflecting data imbalance. Conversely, under expansive sampling during training, tail classes display elevated bias values, suggesting an overcorrection that inversely mirrors the original data imbalance. However, the output classifier, trained using a balanced sampling strategy intended for inference, contains bias terms largely independent of data imbalance, thus isolating pure optimization-induced bias. Unlike classifier weights W, which involve complex int-
eractions with feature vectors and are challenging to decouple clearly, the bias term b provides a straightforward proxy for optimization imbalance. Therefore, we define this bias term explicitly as an optimization bias vector, denoted as bopt. At inference, we leverage this vector to calibrate final logits as follows:
F ̃(B(x)) = Fb(B(x)) − bopt = Wb(B(x)), (5)
where F ̃(B(x)) represents the bias-corrected logits. This simple yet effective adjustment ensures that the predictions are unbiased with respect to the optimization-induced imbalance, enhancing overall classification performance. Additionally, we incorporate the bopt as a prior to approximate the underlying distribution of unlabeled data. After several epochs of estimation training and performing inference on the unlabeled dataset, we can roughly determine the quantity of each class N e = {N1e, .-
 . . , N e
k } for k = 1, ..., K
according to the adjusted balanced output. Let there be O predefined distributions P (1), P (2), . . . , P (o), where each distribution P (o) = {p(o)
k }K
k=1 satisfies PK
k=1 p(o)
k = 1 for
o = 1, . . . , O. These distributions are then re-scaled based on the counts of Ne:
Q(o)
k = p(o)
k · sum(N e)
PK
i=1 p(o)
i
.
The closest distribution can be identified as (DKL measures KL divergence):
o∗ = arg moin DKL(N e, Q(o)).
The Loss Design
Building on the FixMatch algorithm (Sohn et al. 2020), the supervised loss with balanced softmax for each classifier can be formulated as:
Lsup(τ, F ) = 1
Bl
Bl
X
i=1
lCE F B(xl
i) + τ · ∆pyi , yi ,
(6) where ∆pyi is interpreted as the label frequency of class yi, τ is a hyperparameter and lCE denotes the cross entropy loss. For unlabeled data, the consistency loss is:
Lcon(ρ, F ) = 1
Bu
Bu
X
j=1
lCE F B(A(xu
j )) , y ̃j · M(xu
j , ρ),
M(xu
j , ρ) = I max F (B(xu
j )) ≥ ρ ,
(7)

Dataset CIFAR10-LT CIFAR100-LT
Distribution Consist Inverse Consist Consist Inverse Inverse γl-γu 100-100 10-10 15-15 10-10 15-15
N -M 1500-3000 500-4000 1500-3000 500-4000 150-300
Supervised 64.25 (±0.43) 49.55 (±0.92) 64.25 (±0.43) 49.55 (±0.92) 47.92 (±0.55) 45.65 (±0.63) 48.25 (±0.39) 46.23 (±0.50)
FixMatch+LA 81.49 (±0.77) 75.26 (±1.58) 80.68 (±0.54) 73.23 (±1.01) 58.56 (±0.19) 55.26 (±0.05) 58.21 (±0.24) 57.93 (±0.69) w/ DARP 80.41 (±0.63) 76.93 (±0.52) 81.19 (±0.37) 74.05 (±1.28) 59.94 (±0.33) 55.71 (±0.42) 59.88 (±0.39) 56.04 (±0.25) w/ CReST 79.45 (±0.15) 77.24 (±0.35) 85.92 (±0.76) 78.52 (±0.90) 58.78 (±0.64) 56.20 (±0.13) 60.44 (±0.09) 56.40 (±0.17)
FixMatch+CDMAD 83.33 (±0.52) 79.10 (±1.32) 77.76 (±0.56) 74.65 (±1.88) 59.31 (±0.42) 56.05 (±0.23) 58.72 (±0.45) 55.46 (±0.30) w/ ABC 84.56 (±0.12) 80.09 (±0.31) 83.55 (±0.08) 79.46 (±0.29) 58.95 (±0.33) 56.09 (±0.26) 60.23 (±0.18) 57.49 (±0.04) w/ DASO 79.56 (±0.98) 75.24 (±0.66) 75.01 (±0.12) 68.88 (±0.35) 58.72 (±0.14) 56.39 (±0.28) 61.06 (±0.29) 58.12 (±0.17)
FixMatch 76.49 (±0.72) 73.14 (±0.13) 68.92 (±0.79) 62.52 (±0.93) 57.61 (±0.44) 54.02 (±0.14) 57.10 (±0.31) 53.88 (±0.25) w/ ABC 82.69 (±0.64) 79.96 (±0.09) 83.22 (±0.47) 79.26 (±0.35) 58.30 (±0.24) 55.67 (±0.09) 59.24 (±0.40) 56.65 (±0.33) w/ DASO 78.68 (±0.59) 73.62 (±0.40) 74.52 (±0.61) 67.59 (±1.50) 58.16 (±0.45) 54.92 (±0.10) 59.25 (±0.19) 55.38 (±0.14) w/ ACR 84.10 (±0.39) 81.52 (±0.24) 89.46 (±0.42) 84.88 (±0.16) 60.34 (±0.66) 57.46 (±0.32) 61.79 (±0.43) 58.53 (±0.51) w/ CPE 84.46 (±0.20) 80-
.89 (±0.09) 87.10 (±0.21) 83.76 (±0.32) 59.83 (±0.29) 57.00 (±0.51) 60.83 (±0.30) 58.54 (±0.08) w/ SC-SSL (Ours) 86.53 (±0.16) 83.89 (±0.35) 89.97 (±0.20) 86.02 (±0.09) 60.65 (±0.14) 57.88 (±0.26) 62.99 (±0.42) 60.27 (±0.14)
Table 1: Test accuracy of previous CISSL algorithms and our proposed SC-SSL under consistent and inverse distributions with different numbers of training samples on CIFAR10-LT and CIFAR100-LT benchmarks. The network architecture is WRN-28-2 trained from scratch. We highlight the best number in bold and the second best is underlined.
Dataset CIFAR10-LT STL10-LT
Distribution Uniform Gaussian Gaussian-I Unknown Unknown γl-γu 100-1 100- 100- 10- 20
N -M 1500-3000 1500-300 500-4000 500-400 1500-3000 150
FixMatch 81.51 (±1.15) 73.27 (±0.99) 73.01 (±3.81) 66.47 (±0.84) 76.25 (±1.29) 74.74 (±2.03) 66.67 (±1.89) 55.99 (±3.84) w/ ABC 87.89 (±1.24) 81.89 (±0.32) 86.92 (±0.68) 78.26 (±0.60) 86.15 (±0.45) 85.78 (±0.39) 71.12 (±1.36) 66.23 (±2.14) w/ CDMAD 90.79 (±0.43) 82.12 (±0.74) 87.11 (±0.73) 80.65 (±0.78) 87.64 (±0.36) 86.25 (±0.67) 71.66 (±0.22) 66.84 (±0.37) w/ ACR 93.52 (±0.11) 84.61 (±0.50) 92.13 (±0.15) 80.10 (±1.21) 89.65 (±0.68) 90.00 (±0.76) 76.94 (±0.35) 74.53 (±0.83) w/ CPE 93.81 (±0.14) 8-
5.86 (±0.40) 92.29 (±0.35) 82.32 (±0.43) 89.26 (±0.12) 88.01 (±0.08) 73.07 (±0.47) 69.60 (±0.20) w/ SC-SSL (Ours) 93.79 (±0.22) 86.45 (±0.02) 93.33 (±0.19) 83.11 (±0.17) 90.84 (±0.29) 91.25 (±0.34) 79.26 (±0.31) 77.11 (±0.35)
Table 2: Test accuracy of recent CISSL algorithms and our proposed SC-SSL under uniform, Gaussian, and unknown distributions on CIFAR10-LT and STL10-LT benchmarks.
where y ̃j denotes the predicted pseudo-labels and ρ is initialized from an estimated distribution, which is dynamically adjusted at each iteration t by:
ρt(k) = ρt−1(k) − α · I(bopt(k) > ν), (8)
where α and ν are hyperparameters. ρ0 is initialized based on the expansion factor c. The assumed expansion factor c is determined by o∗. Generally, the greater the relative quantity of non-head classes in the unlabeled data, the larger the expansion factor c. Keeping ρb(head) and ρe(head) constant, we only need to initialize ρb(non-head) and ρe(non-head) based on c:
ρ0
b (non-head) = ρmax − c − 4
10 · min{γu/50, 1}, (9)
ρ0
e(non-head) = ρmax − c − 3
5 · min{γu/20, 1}. (10)
where ρmax is a constant representing the maximum confi
dence level and γu is the imbalance ratio according to o∗.
The overall training objective function is formulated as:
L = Lbasic
+ Lb
sup(τb, Fb) + Lb
con(ρb, Fb)
+ Le
sup(τe, Fe) + Le
con(ρe, Fe),
(11)
where Lbasic is the loss of base SSL algorithms, τb and τe are hyperparameters for output classifier and expansive classifier respectively.
Experiments
Analysis
Experimental Settings
Datasets and Baselines We conduct the experiments on widely used datasets, including CIFAR10-LT (Krizhevsky 2009), CIFAR100-LT (Krizhevsky 2009), STL10-LT (Coates, Ng, and Lee 2011), and ImageNet-127 (Fan, Dai, and Schiele 2021). Following previous works, we split the training data with a certain number of samples while

Algorithm / Resolution 32 × 32 64 × 64
FixMatch 35.7 44.0 w/ CDMAD 55.6 61.7 w/ ACR 57.2 63.6 w/ CPE 57.8 64.1 w/ SimPro 59.4 67.2 w/ SC-SSL 62.3 69.4
Table 3: Test accuracy of recent CISSL algorithms and our proposed SC-SSL on ImageNet-127 benchmarks.
-C I
2 83.89 86.02 3 83.54 85.98 4 83.50 86.15
Table 4: Comparison of different partitioning strategies. Classes are divided into 2/3/4 intervals. ’C’ and ’I’ denote consist and inverse, respectively.
- A1 A2 B1 B2
ACR 82.9 82.7 83.4 83.1 CPE 82.0 81.4 82.7 81.9 Ours 84.2 83.1 85.1 85.2
Table 5: Test accuracy on 4 chaotic distributions (N : M = 500 : 4000). A and B indicate the dominance of head/non-head classes in the unlabeled data. We generate 2 types of random distribution for each of them.
controlling the imbalance ratio of data. taub and τe are set to 2 and 4 for all datasets. For simplicity, we assume that c is dataset-independent and varies only with changes in the distribution of unlabeled data. Given 5 anchor distributions (consist, uniform, inverse, Gaussian, and inverse-Gaussian) above, the values of c are set to 4, 5, 6, 4, and 6, respectively. ρmax is set to 0.95. ρb(head) and ρe(head) are set to ρmax. Step size α and threshold ν in eq. (8) are set to 0.005 and 1.0 for all -
datasets. We conduct comparisons with several CISSL algorithms that have been published in leading conferences and journals over the last few years. The baseline algorithms include LA (Menon et al. 2020), DARP (Kim et al. 2020), CReST (Wei et al. 2021), ABC (Lee, Shin, and Kim 2021), DASO (Oh, Kim, and Kweon 2021), ACR (Wei and Gan 2023), CDMAD (Lee and Kim 2024), CPE (Ma et al. 2024), and SimPro (Du, Han, and Huang 2024). All the reproduced results are consistent with the original paper or the co-
debase. We test our SC-SSL algorithm on the widely used USB codebase. More comparisons can be found in the Appendix.
Training Details We adhere to the default hyperparameters specified in USB, setting the batch sizes for labeled and unlabeled data to 64 and 128, respectively. For CIFAR10-LT, CIFAR100-LT, and STL10-LT, the input images are resized to 32 × 32 pixels and the backbone network is WRN-28-2 (Zagoruyko and Komodakis 2016) without any pre-training. For ImageNet-127, we downsample the images to 64 × 64 and 32 × 32 following CoSSL (Fan, Dai, and Schiele 2021) and the backbone is ResNet-50 (He et al. 2015).-
 For the balanced and expansive classifier, the loss ratio of the unlabeled part is set to 2. Additionally, since the distributions of unlabeled data for comparison follow predefined distributions (as in some previous works (Ma et al. 2024; Wei and Gan
ρ τ c Consist Inverse
c-init (0, 0) 4 82.33 82.16 c-init (2, 2) 6 81.55 86.79 c-init (1, 2) 4 85.28 86.12 c-init (2, 4) 4 86.53 88.54 c-init (2, 4) 6 84.11 89.97 fix-max (2, 4) - 84.70 86.90 fix-max (2, - ) - 83.80 86.49 fix-min (2, 1) - 80.22 85.65 fix-min (2, 4) - 79.04 86.05
Table 6: Ablation study of the key factors in our framework. ‘fix’ indicates the ρ is set to be ρmax or ρmin without dynamic sampling.
2023; Lee and Kim 2024)), SC-SSL reweights (Lai et al. 2022) the loss function based on the prior of unlabeled sample counts. We employ the SGD optimizer with a fixed learning rate of 0.03, a momentum of 0.9, and a weight decay of 0.0005.
Main Results
In our experiments, we assessed the test accuracy of various CISSL algorithms, including our proposed SC-SSL, on CIFAR10-LT and CIFAR100-LT datasets. Using a WRN28-2 architecture trained from scratch, we measured performance under consistent and inverse distributions as well as uniform and Gaussian distributions. The results are shown in table 1, table 2 and table 3.
Why are classes simply divided into head and non-head types? —— What if the unlabeled data distribution is chaotic? Due to the current research focusing on longtailed distributions, there is a significant disparity in the amount of labeled data between head and tail classes. Our goal is to enable non-head classes to leverage unlabeled data to enhance generalization performance, so we have roughly categorized them into two groups. This distinction is sufficient for the distributions discussed in pr-
evious work. Our experimental results in table 4 also support this when we try finer-grained ρ initialization. When the unlabeled data is chaotic, as the example in fig. 2 shows, there is no significant difference in quantity between non-head and head classes. We can treat them as uniformly distributed, assuming c = 5, since the dynamic sampling probabilities will come into play. The experimental results are shown in table 5.
What is the impact of ignoring certain factors? All three key factors are essential. Without γ, it is impossible to initialize the sampling settings; when c is small, excessively high sampling probabilities can lead to confirmation errors. If ∆p is not used, it becomes challenging to address the impact of bias in the labeled data itself. Furthermore, without ρ, there is no way to dynamically adjust the sampling probabilities, as ∆p is determined based on the labeled data, making it difficult to es-
timate the effect of unlabeled data consistency regularization on it. The experimental results (N : M = 1500 : 3000) are shown in table 6.

References
Berthelot, D.; Carlini, N.; Cubuk, E. D.; Kurakin, A.; Sohn, K.; Zhang, H.; and Raffel, C. 2019a. ReMixMatch: SemiSupervised Learning with Distribution Alignment and Augmentation Anchoring. ArXiv, abs/1911.09785. Berthelot, D.; Carlini, N.; Goodfellow, I. J.; Papernot, N.; Oliver, A.; and Raffel, C. 2019b. MixMatch: A Holistic Approach to Semi-Supervised Learning. ArXiv, abs/1905.02249. Chen, J.; Yang, Q.; Tian, S.; and Zhang, S. 2024a. Adaptive quantization with mixed-precision based on low-cost -
proxy. In ICASSP 2024-2024 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), 6720–6724. IEEE. Chen, T.; Lin, B.; Jin, Y.; Yan, W.; Ye, W.; Yuan, Y.; and Tan, R. T. 2024b. Dual-rain: Video rain removal using assertive and gentle teachers. In European Conference on Computer Vision, 127–143. Springer. Coates, A.; Ng, A.; and Lee, H. 2011. An Analysis of SingleLayer Networks in Unsupervised Feature Learning. In International Conference on Artificial Intelligence and St-
atistics. Du, C.; Han, Y.; and Huang, G. 2024. SimPro: A Simple Probabilistic Framework Towards Realistic Long-Tailed Semi-Supervised Learning. ArXiv, abs/2402.13505. Fan, Y.; Dai, D.; and Schiele, B. 2021. CoSSL: CoLearning of Representation and Classifier for Imbalanced Semi-Supervised Learning. 2022 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), 1455414564. Guo, L.-Z.; and Li, Y.-F. 2022. Class-Imbalanced SemiSupervised Learning with Adaptive Thresholding. In Internation-
al Conference on Machine Learning.
He, K.; Zhang, X.; Ren, S.; and Sun, J. 2015. Deep Residual Learning for Image Recognition. 2016 IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 770778. Hong, G.; Wang, F.; Tian, S.; Lu, M.; Liu, J.; and Zhang, S. 2023. HQRetouch: Learning professional face retouching via masked feature fusion and semantic-aware modulation. In 2023 IEEE International Conference on Image Processing (ICIP), 440–444. IEEE. Kim, J.; Hur, Y.; Park, S.; Yang, E.; Hwang, S. J.; and Shin, J. 2020. Distr-
ibution Aligning Refinery of Pseudolabel for Imbalanced Semi-supervised Learning. ArXiv, abs/2007.08844. Krizhevsky, A. 2009. Learning Multiple Layers of Features from Tiny Images. Lai, Z.; Wang, C.; Gunawan, H.; Cheung, S.-C. S.; and Chuah, C.-N. 2022. Smoothed Adaptive Weighting for Imbalanced Semi-Supervised Learning: Improve Reliability Against Unknown Distribution Data. In International Conference on Machine Learning.
Lee, H.; and Kim, H. 2024. CDMAD: Class-DistributionMismatch-Aware Debiasing for Class-Imbalanced SemiSupervised Learning. 2024 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), 2389123900.
Lee, H.; Shin, S.; and Kim, H. 2021. ABC: Auxiliary Balanced Classifier for Class-imbalanced Semi-supervised Learning. In Neural Information Processing Systems.
Li, J.; Tan, Z.; Wan, J.; Lei, Z.; and Guo, G. 2022. Nested Collaborative Learning for Long-Tailed Visual Recognition. 2022 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), 6939–6948.
Li, J.; Xiong, C.; and Hoi, S. C. H. 2020. CoMatch: Semisupervised Learning with Contrastive Graph Regularization. 2021 IEEE/CVF International Conference on Computer Vision (ICCV), 9455–9464.
Li, L.; Tao, B.; Han, L.; Zhan, D.-C.; and Ye, H.-J. 2024. Twice Class Bias Correction for Imbalanced SemiSupervised Learning. ArXiv, abs/2312.16604. Lin, B.; Jin, Y.; Wending, Y.; Ye, W.; Yuan, Y.; and Tan, R. T. 2025. Nighthaze: Nighttime image dehazing via selfprior learning. In Proceedings of the AAAI Conference on Artificial Intelligence, 5, 5209–5217.
Ma, C.; Elezi, I.; Deng, J.; Dong, W.; and Xu, C. 2024. Three Heads Are Better Than One: Complementary Experts for Long-Tailed Semi-supervised Learning. In AAAI Conference on Artificial Intelligence.
Menon, A. K.; Jayasumana, S.; Rawat, A. S.; Jain, H.; Veit, A.; and Kumar, S. 2020. Long-tail learning via logit adjustment. ArXiv, abs/2007.07314. Miyato, T.; ichi Maeda, S.; Koyama, M.; and Ishii, S. 2017. Virtual Adversarial Training: A Regularization Method for Supervised and Semi-Supervised Learning. IEEE Transactions on Pattern Analysis and Machine Intelligence, 41: 1979–1993. Oh, Y.; Kim, D.-J.; and Kweon, I.-S. 2021. DASO: Distribution-Aware Semantics-Oriented Pseudo-label for Imbalanced S-
emi-Supervised Learning. 2022 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), 9776–9786. Selvaraju, R. R.; Das, A.; Vedantam, R.; Cogswell, M.; Parikh, D.; and Batra, D. 2016. Grad-CAM: Visual Explanations from Deep Networks via Gradient-Based Localization. International Journal of Computer Vision, 128: 336 – 359. Sohn, K.; Berthelot, D.; Li, C.-L.; Zhang, Z.; Carlini, N.; Cubuk, E. D.; Kurakin, A.; Zhang, H.; and Raffel, C. 2020. FixMatch: Simplifying Semi-Supervised Learni-
ng with Consistency and Confidence. ArXiv, abs/2001.07685. Tarvainen, A.; and Valpola, H. 2017. Weight-averaged consistency targets improve semi-supervised deep learning results. ArXiv, abs/1703.01780. Wang, R.; Jia, X.; Wang, Q.; Wu, Y.; and Meng, D. 2022a. Imbalanced Semi-supervised Learning with Bias Adaptive Classifier. In International Conference on Learning Representations.
Wang, X.; Lian, L.; Miao, Z.; Liu, Z.; and Yu, S. X. 2020. Long-tailed Recognition by Routing Diverse DistributionAware Experts. ArXiv, abs/2010.01809. Wang, Y.; Chen, H.; Heng, Q.; Hou, W.; Savvides, M.; Shinozaki, T.; Raj, B.; Wu, Z.; and Wang, J. 2022b. FreeMatch: Self-adaptive Thresholding for Semi-supervised Learning. ArXiv, abs/2205.07246.

Wei, C.; Shen, K.; Chen, Y.; and Ma, T. 2020. Theoretical Analysis of Self-Training with Deep Networks on Unlabeled Data. ArXiv, abs/2010.03622.
Wei, C.; Sohn, K.; Mellina, C.; Yuille, A. L.; and Yang, F. 2021. CReST: A Class-Rebalancing Self-Training Framework for Imbalanced Semi-Supervised Learning. 2021 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), 10852–10861.
Wei, T.; and Gan, K. 2023. Towards Realistic Long-Tailed Semi-Supervised Learning: Consistency is All You Need. 2023 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), 3469–3478.
Xiang, L.; and Ding, G. 2020. Learning From Multiple Experts: Self-paced Knowledge Distillation for Long-tailed Classification. In European Conference on Computer Vision.
Yang, Y.; and Xu, Z. 2020. Rethinking the Value of Labels for Improving Class-Imbalanced Learning. ArXiv, abs/2006.07529.
Yu, Z. L.; Li, Y.; and Lee, Y. J. 2023. InPL: Pseudo-labeling the Inliers First for Imbalanced Semi-supervised Learning. ArXiv, abs/2303.07269.
Zagoruyko, S.; and Komodakis, N. 2016. Wide Residual Networks. ArXiv, abs/1605.07146.
Zheng, H.; Zhou, L.; Li, H.; Su, J.; Wei, X.; and Xu, X. 2024. BEM: Balanced and Entropy-Based Mix for LongTailed Semi-Supervised Learning. 2024 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), 22893–22903.
Supplementary Material
Proof of Theorem 0.1
Theorem. The pseudo-label Ypsl has the following probability distribution:
P (Ypsl = 1) = γΦ


μ2 −μ1
2 −1
β log ρ
1−ρ − ∆p
σ2


+ (1 − γ)Φ


μ1 −μ2
2 −1
β log ρ
1−ρ − ∆p
σ1

,
P (Ypsl = −1) = (1 − γ)Φ


μ2 −μ1
2 −1
β log ρ
1−ρ + ∆p
σ1


+ γΦ


μ1 −μ2
2 −1
β log ρ
1−ρ + ∆p
σ2

,
P (Ypsl = 0) = 1 − P (Ypsl = 1) − P (Ypsl = −1),
where Φ(·) denotes the cumulative distribution function (CDF) of the standard normal distribution.
Proof. We consider a binary classification setting with class prior P (Y = 1) = γ and P (Y = −1) = 1 − γ. The input § follows class-conditional distributions: § | Y = 1 ∼ N (μ2, σ2
2), § | Y = −1 ∼ N (μ1, σ2
1 ),
where μ2 > μ1 without loss of generality. The classifier predicts a confidence score:
s(§) = 1
1 + exp −β § − ∆p − μ1+μ2
2
,
where ∆p is the logit adjustment term and β reflects the model’s confidence sharpness. A pseudo-label Ypsl is assigned by comparing s(§) to a fixed threshold ρ ∈ (0.5, 1):
• Ypsl = 1 if s(§) > ρ,
• Ypsl = −1 if s(§) < 1 − ρ,
• Ypsl = 0 otherwise (i.e., abstain).
We now compute P (Ypsl = 1) by considering the threshold condition for s(§) > ρ. This is equivalent to:
§ > μ1 + μ2
2 +1
β log ρ
1 − ρ + ∆p.
Define the right-hand side as T :
T := μ1 + μ2
2 +1
β log ρ
1 − ρ + ∆p.
Now, under the distribution § | Y = 1 ∼ N (μ2, σ22): P (Ypsl = 1 | Y = 1) = P (§ > T | Y = 1)
= 1 − Φ T − μ2
σ2
= Φ μ2 − T
σ2
.

Substituting T back in:
P (Ypsl = 1 | Y = 1) = Φ


μ2 −μ1
2 −1
β log ρ
1−ρ − ∆p
σ2

.
Similarly, under Y = −1:
P (Ypsl = 1 | Y = −1) = Φ


μ1 −μ2
2 −1
β log ρ
1−ρ − ∆p
σ1

.
Thus, using the law of total probability:
P (Ypsl = 1) = γ · P (Ypsl = 1 | Y = 1)
+ (1 − γ) · P (Ypsl = 1 | Y = −1)
= γΦ


μ2 −μ1
2 −1
β log ρ
1−ρ − ∆p
σ2


+ (1 − γ)Φ


μ1 −μ2
2 −1
β log ρ
1−ρ − ∆p
σ1

.
The derivation of P (Ypsl = −1) follows the same logic, with threshold:
§ < μ1 + μ2
2 −1
β log ρ
1 − ρ + ∆p,
leading to the expressions in the theorem. Finally, P (Ypsl = 0) is obtained by subtracting:
P (Ypsl = 0) = 1 − P (Ypsl = 1) − P (Ypsl = −1).
This completes the proof.
Overview of Algorithm 1.
The SC-SSL algorithm presents a training framework that integrates adaptive sampling control into semi-supervised learning under class-imbalanced settings. It maintains two classifiers—a standard output classifier Fb and an expansive classifier Fe—that share a common backbone B(·). At the beginning of training, an anchor distribution matching procedure is used to estimate the expansion factor c, which guides the initialization of class-wise confidence thresholds ρb and ρe. In each iteration, super-
vised loss is computed using balanced softmax adjustment for labeled samples. For unlabeled data, SC-SSL generates pseudo-labels via the expansive classifier and applies a dynamic thresholding strategy to decide which predictions are confident enough to be used for consistency regularization. The key novelty lies in adaptively lowering the thresholds for non-head classes based on an optimization bias signal bopt, thereby increasing their sampling probability. Finally, both classifiers are jointly -
updated by minimizing the total loss comprising supervised and consistency components. This design allows SC-SSL to expand the decision boundaries of minority classes while preserving classification robustness, thereby addressing the dual challenges of label imbalance and pseudo-label noise.
Algorithm 1: SC-SSL
Require: Labeled dataset Dl = {(xl
i, yl
i)}, Unlabeled
dataset Du = {xu
j}
Require: Backbone B(·), Classifiers Fb, Fe, Confidence thresholds ρb, ρe Require: Hyperparameters τb, τe, α, ν, ρmax 1: Initialize expansion factor c via anchor distribution matching (KL) 2: Initialize ρ0
b(non-head), ρe0(non-head) based on c
3: for each training step t = 1, . . . , T do 4: Sample minibatches Bl ⊆ Dl, Bu ⊆ Du
5: for all (xl
i, yl
i) ∈ Bl do
6: Compute features hi ← B(xl
i) 7: Compute supervised loss:
Lsup(xl
i) = lCE(F (hi) + τ · ∆pyi , yl
i)
8: for all xu
j ∈ Bu do
9: Get weak and strong augmentations: xu
j , A(xu
j) 10: Compute pseudo-label:
y ̃j ← arg max σ(Fe(B(xu
j )))
11: Compute confidence: sj ← max σ(Fe(B(xu
j ))) 12: if sj > ρte(y ̃j) then
13: Compute consistency loss:
Lcon(xu
j ) = lCE(Fe(B(A(xu
j ))), y ̃j)
14: Update ρte+1(k) ← ρte(k) − α · I(bopt(k) > ν)
15: Same update for ρt+1
b (k) if applied to Fb 16: Update parameters via total loss:
L = Lbasic + Lb
sup + Lb
con + Le
sup + Le
con
17: return Trained classifiers Fb, Fe
More Comparison with SOTA Methods
Table 7 and Table 8 comprehensively compare our method with existing state-of-the-art approaches on four benchmark datasets: CIFAR100, STL10, CIFAR10, and ImageNet127, under various labeled-unlabeled ratios and distribution scenarios. In Table 7, we evaluate the performance on CIFAR100 and STL10 with extremely limited labeled data (150 samples) and varying imbalance settings (γl : γu = 10 : 10 and 20 : 20). FixMatch yields suboptimal performance under these imbalanced conditions. While ADELLO, REC-
D, and TCBC provide modest improvements, our method—both standalone and combined with BEM—achieves the highest test accuracy across all configurations. Notably, the combination of BEM and our SC-SSL achieves a substantial improvement over BEM+ACR, with up to +2.1% gain on CIFAR100 and +1.7% gain on STL10, indicating that our sampling strategy better supports balanced feature learning under long-tailed semi-supervised scenarios. In Table 8, we report results on CIFAR10 and ImageNet127. We consider -
different imbalance directions (e.g., γl : γu = 100 : −100) and image resolutions (32×32

Table 7: Test accuracy on Cifar100 (labeld nums 150, unlabeled nums 300) and STL10 (labeled 150).
Dataset Cifar100 STL10 γl:γu 10:10 20:20 10: 20:
FixMatch 47.92 (±0.55) 42.23 (±0.89) 66.67 (±1.89) 55.99 (±3.84) w/ ADELLO [3] 58.72 (±0.18) NA 75.70 (±0.70) 74.60 (±0.40) w/ RECD [5] 59.41 (±0.37) NA 76.01 (±0.55) 74.95 (±0.66) w/ TCBC [6] 59.40 (±0.28) 53.90 (±0.72) 77.60 (±0.93) 74.90 (±1.42) w/ IFMatch [4] NA 53.61 (±0.25) NA NA w/ BEM+ACR 60.99 (±0.55) 59.80 (±0.37) 79.30 (±0.34) 75.90 (±0.15) w/ BEM[1] 59.00 (±0.23) 54.30 (±0.36) 74.32 (±1.05) 72.69 (±0.88) w/ BEM+Ours 61.88 (±0.23) 60.69 (±0.18) 80.70 (±0.41) 78.05 (±0.35)
w/ Ours 60.65 (±0.23) 59.88 (±0.37) 79.26 (±0.31) 77.11 (±0.55)
Table 8: Test accuracy on Cifar10 (labeld 1500, unlabeled 3000) and ImageNet127. ”-” denotes the reverse distribution. ”x” denotes the resolution of images.
Dataset Cifar10 ImageNet γl:γu 100:100 100:-100 150:150 x32 x64
FixMatch 76.49 (±0.72) 68.92 (±0.79) 72.15 (±0.94) 35.7 44.0 w/ ADELLO [3] 83.80 (±0.30) 86.10 (±0.40) 79.47 (±0.22) 47.5 58.0 w/ RECD [5] 84.60 (±0.13) 85.91 (±0.46) 80.60 (±0.53) 47.3 59.5 w/ TCBC [6] 84.00 (±0.55) 85.70 (±0.17) 80.40 (±0.58) 48.2 NA w/ IFMatch [4] 79.46 (±0.35) NA 75.59 (±0.48) 48.6 NA w/ BEM+ACR 85.50 (±0.28) 89.80 (±0.12) 83.80 (±0.12) 58.0 63.9 w/ BEM[1] 80.30 (±0.62) 79.10 (±0.77) 75.70 (±0.22) 53.3 58.2 w/ BEM+Ours 87.45 (±0.11) 90.50 (±0.25) 85.03 (±0.12) 62.9 69.7 w/ Our-
s 86.53 (±0.16) 89.97 (±0.20) 83.86 (±0.15) 62.3 69.4
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
Classes
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
Classes
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
Classes
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
Classes
Uniform
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
Classes
Inverse
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
Classes
Consist
Figure 4: t-SNE visualization results on CIFAR10-LT(Top: SC-SSL, bottom: ABC).
and 64×64). Our method consistently outperforms all baselines across these more realistic and challenging setups. Particularly on the large-scale ImageNet127 dataset, our approach improves the performance by a clear margin, achiev
ing 62.9% and 69.6% accuracy on 32×32 and 64×64 resolutions respectively—substantially higher than prior methods such as ADELLO, RECD, and TCBC. These results demonstrate that our pseudo-label sampling control not only gen

0123456789
9876543210
0.95 0.001 0.011 0.004 0.001 0.001 0.002 0.002 0.025 0.007
0.001 0.98 0 0 0 0.001 0 0 0.002 0.02
0.027 0 0.91 0.004 0.014 0.018 0.02 0.005 0.002 0
0.009 0.001 0.019 0.83 0.016 0.079 0.032 0.011 0.004 0.003
0.003 0 0.009 0.013 0.95 0.008 0.007 0.008 0 0
0.001 0 0.012 0.069 0.024 0.86 0.012 0.016 0.004 0
0.008 0 0.009 0.004 0.001 0.003 0.97 0 0 0
0.003 0 0.006 0.004 0.016 0.009 0 0.96 0.001 0.002
0.01 0.01 0.005 0 0 0 0 0 0.97 0.006
0.002 0.025 0.001 0 0 0 0.002 0 0.007 0.96 0.0
0.2
0.4
0.6
0.8
Uniform
0123456789
9876543210
0.92 0.003 0.02 0.003 0.005 0.001 0.004 0.007 0.027 0.014
0.001 0.97 0.001 0 0 0 0 0 0.005 0.025
0.029 0 0.83 0.024 0.033 0.026 0.038 0.012 0.005 0.002
0.016 0.002 0.019 0.75 0.029 0.085 0.061 0.022 0.009 0.011
0.005 0 0.016 0.022 0.88 0.022 0.017 0.031 0.002 0.002
0.005 0.001 0.016 0.12 0.028 0.78 0.021 0.026 0.001 0
0.005 0 0.016 0.014 0.002 0.008 0.95 0.003 0.001 0
0.002 0 0.008 0.01 0.008 0.013 0.004 0.95 0 0.001
0.011 0.009 0.006 0.002 0.001 0 0.001 0.001 0.96 0.008
0.002 0.019 0.002 0.003 0 0.001 0 0 0.006 0.97 0.0
0.2
0.4
0.6
0.8
Inverse
0123456789
9876543210
0.92 0.002 0.012 0.006 0.01 0.005 0.007 0.003 0.024 0.009
0.001 0.97 0 0 0 0 0 0 0.001 0.024
0.023 0 0.85 0.02 0.027 0.032 0.035 0.006 0.004 0
0.008 0.003 0.02 0.79 0.037 0.077 0.034 0.017 0.006 0.004
0.003 0 0.018 0.02 0.91 0.014 0.019 0.019 0.001 0
0.002 0.001 0.019 0.14 0.037 0.76 0.015 0.023 0.001 0.003
0.004 0.001 0.021 0.056 0.012 0.012 0.89 0.003 0.002 0
0.003 0 0.016 0.046 0.056 0.046 0.008 0.82 0.001 0.003
0.11 0.037 0.013 0.013 0.003 0.004 0.004 0.001 0.8 0.015
0.014 0.1 0.002 0.011 0.002 0 0.004 0.001 0.013 0.85 0.0
0.2
0.4
0.6
0.8
Consist
Figure 5: Confusion matrix on CIFAR10-LT test set.
Image Feature
Per-Class Weight Distribution (Output Head) Per-Class Weight Distribution (Expansive Head)
Figure 6 eralizes well across datasets, but also scales effectively with data complexity and image resolution. Overall, these tables highlight the effectiveness, robustness, and scalability of our proposed method under both small-data and large-scale long-tailed semi-supervised learning settings.
t-SNE results
To further validate the effectiveness of SC-SSL, we visualize the learned feature space using t-SNE and report the confusion matrices for model predictions. As shown in Fig. 4, the feature embeddings produced by our expansive classifier exhibit a significantly better separation between head and non-head classes compared to the baseline. Notably, samples from minority (non-head) classes are no longer collapsed into ambiguous regions, indicating that SC-SSL successfully mitigates feature dominance b-
y head classes. The improved inter-class margin and intraclass compactness suggest that our sampling-aware feature learning promotes more discriminative and balanced representations across the long-tailed label spectrum.
Confusion Matrics
Additionally, the confusion matrices in Fig. 5 quantitatively demonstrate the advantage of our approach. Compared to the baseline, our model yields noticeably higher recall for tail classes, as reflected by the stronger diagonal patterns even in the lower-frequency class regions. This aligns with our theoretical motivation that adaptive pseudo-label sampling (enabled by the expansive classifier and optimization bias correction) helps expand decision boundaries for underrepresented classes, thereby-
 enhancing robustness. Together, these visualizations confirm that SC-SSL not only improves overall classification performance but also achieves more balanced learning under imbalanced semisupervised settings.
Visualization of Linear Layer and Features
Figure 6 presents a qualitative analysis of the learned representations and classifier parameters. The upper part shows the 128-dimensional features projected to 2D via t-SNE, indicating that the learned representations vary significantly across samples and are highly dependent on input augmentation and feature dynamics. The lower part visualizes the ab

solute magnitude of the linear classifier’s weights across different classes. Although some classes exhibit larger weights than others, this pattern is influenced by the current feature distribution during forward propagation rather than the intrinsic data imbalance in the training set. In other words, the absolute weight values alone do not reliably reflect the class frequency or long-tailed structure of the dataset, since weight magnitudes adapt to the scale and dispersion of the input features-
. This motivates our use of the bias term as a more stable proxy for optimization-induced imbalance, independent of feature variation.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:51.073Z
- **Text Length:** 53808 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 13 of 13
