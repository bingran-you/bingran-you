# PDF Document: Wang et al. - 2021 - AFEC Active Forgetting of Negative Transfer in Continual Learning.pdf

**File Path:** Wang et al. - 2021 - AFEC Active Forgetting of Negative Transfer in Continual Learning.pdf

**Processed Date:** 2026-02-10T18:16:43.025Z

**File Size:** 7483.55 KB

**Total Pages:** 20

**Extracted Pages:** 20

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2774

**Title:** AFEC: Active Forgetting of Negative Transfer in Continual Learning

**Collection:** Large Files

---

## Extracted Text Content

AFEC: Active Forgetting of Negative Transfer in Continual Learning
Liyuan Wang1,2,3 Mingtian Zhang4 Zhongfan Jia5 Qian Li1,2
Kaisheng Ma5 Chenglong Bao6 Jun Zhu3∗ Yi Zhong1,2∗
1School of Life Sciences, IDG/McGovern Institute for Brain Research, Tsinghua University. 2Tsinghua-Peking Center for Life Sciences. 3Dept. of Comp. Sci. & Tech., Institute for AI, BNRist Center, THBI Lab, Tsinghua University. 4AI Center, University College London. 5IIIS, Tsinghua University. 6Yau Mathematical Sciences Center, Tsinghua University. {wly19,jzf20}@mails.tsinghua.edu.cn, mingtian.zhang.17@ucl.ac.uk {liqian8,kaisheng,clbao,dcszj,zhongyithu}@tsinghua.edu.cn
Abstract
Continual learning aims to learn a sequence of tasks from dynamic data distributions. Without accessing to the old training samples, knowledge transfer from the old tasks to each new task is difficult to determine, which might be either positive or negative. If the old knowledge interferes with the learning of a new task, i.e., the forward knowledge transfer is negative, then precisely remembering the old tasks will further aggravate the interference, thus decreasing the performance of continual l-
earning. By contrast, biological neural networks can actively forget the old knowledge that conflicts with the learning of a new experience, through regulating the learning-triggered synaptic expansion and synaptic convergence. Inspired by the biological active forgetting, we propose to actively forget the old knowledge that limits the learning of new tasks to benefit continual learning. Under the framework of Bayesian continual learning, we develop a novel approach named Active Forgetting with sy-
naptic Expansion-Convergence (AFEC). Our method dynamically expands parameters to learn each new task and then selectively combines them, which is formally consistent with the underlying mechanism of biological active forgetting. We extensively evaluate AFEC on a variety of continual learning benchmarks, including CIFAR-10 regression tasks, visual classification tasks and Atari reinforcement tasks, where AFEC effectively improves the learning of new tasks and achieves the state-of-the-art performa-
nce in a plug-and-play way.
1 Introduction
The ability to continually learn numerous tasks from dynamic data distributions is critical for deep neural networks, which needs to remember the old tasks by avoiding catastrophic forgetting [18] while effectively learn each new task by improving forward knowledge transfer [17]. Due to the dynamic data distributions, forward knowledge transfer might be either positive or negative, and is difficult to determine without accessing to the old training samples. If the forward knowledge transfer is neg-
ative, i.e., learning a new task from the old knowledge is worse than learning the new task on a randomly-initialized network [37, 17], then precisely remembering the old tasks will severely interfere with the learning of the new task, thus decreasing the performance of continual learning.
∗Corresponding author: J. Zhu and Y. Zhong.
35th Conference on Neural Information Processing Systems (NeurIPS 2021).
arXiv:2110.12187v2 [cs.LG] 4 Nov 2021

By contrast, biological neural networks can effectively learn a new experience on the basis of remembering the old experiences, even if they conflict with each other [18, 5]. This advantage, called memory flexibility, is achieved by active forgetting of the old knowledge that interferes with the learning of a new experience [28, 5]. The latest data suggested that the underlying mechanism of biological active forgetting is to regulate the learning-triggered synaptic expansion and synaptic converge-
nce (Fig. 1, see Appendix A for neuroscience background and our biological data). Specifically, the biological synapses expand additional functional connections to learn a new experience together with the previously-learned functional connections (synaptic expansion). Then, all the functional connections are pruned to the amount before learning (synaptic convergence).
Figure 1: The biological active forgetting is achieved by regulating the learning-triggered synaptic expansion-convergence.
Inspired by the biological active forgetting, we propose to actively forget the old knowledge that interferes with the learning of new tasks without significantly increasing catastrophic forgetting, so as to benefit continual learning. Specifically, we adopt Bayesian continual learning and actively forget the posterior distribution that absorbs all the information of the old tasks with a forgetting factor to better learn each new task. Then, we derive a novel method named Active Forgetting with sy-
naptic Expansion-Convergence (AFEC), which is formally consistent with the underlying mechanism of biological active forgetting at synaptic structures. Beyond regular weight regularization approaches [12, 1, 36, 2], which selectively penalize changes of the important parameters for the old tasks, AFEC dynamically expands parameters only for each new task to avoid potential negative transfer from the main network, while the forgetting factor regulates a penalty to selectively merge the main network-
 parameters with the expanded parameters, so as to learn a better overall representation of both the old tasks and the new task.
We extensively evaluate AFEC on continual learning of CIFAR-10 regression tasks, a variety of visual classification tasks, and Atari reinforcement tasks [10], where AFEC achieves the state-of-theart (SOTA) performance. We empirically validate that the performance improvement results from effectively improving the learning of new tasks without increasing catastrophic forgetting. Further, AFEC can be a plug-and-play method that significantly boosts the performance of representative continual learnin-
g strategies, such as weight regularization [12, 1, 36, 2] and memory replay [21, 9, 6].
Our contributions include: (1) We draw inspirations from the biological active forgetting and propose a novel approach to actively forget the old knowledge that interferes with the learning of new tasks for continual learning; (2) Extensive evaluation on a variety of continual learning benchmarks shows that our method effectively improves the learning of new tasks and achieves the SOTA performance in a plug-and-play way; and (3) To the best of our knowledge, we are the first to model the biologica-
l active forgetting and its underlying mechanism at synaptic structures, which suggests a potential theoretical explanation of how the underlying mechanism of biological active forgetting achieves its function of forgetting the past and continually learning conflicting experiences [28, 5].
2 Related Work
Continual learning needs to minimize catastrophic forgetting and maximize forward knowledge transfer. Existing work in continual learning mainly focuses on mitigating catastrophic forgetting. Representative approaches include: weight regularization [12, 1, 36, 2], which selectively penalizes changes of the previously-learned parameters; parameter isolation [24, 10], which allocates a dedicated parameter subspace for each task; and memory replay [21, 9, 31, 32], which approximates and recovers the -
old data distributions through storing old training data, their embedding or learning a generative model. In particular, Adaptive Group Sparsity based Continual Learning (AGS-CL) [10] proposed to regularize the group sparsity with separation of the important nodes for the old tasks to prevent catastrophic forgetting, which takes advantages of weight regularization and parameter isolation, and achieved the SOTA performance on various continual learning benchmarks.
2

Several studies suggested that forward knowledge transfer is critical for continual learning [17, 4], which might be either positive or negative due to the dynamic data distributions. Although it is highly nontrivial to mitigate potential negative transfer while overcoming catastrophic forgetting, the efforts that specifically consider this challenging issue are limited. [3] developed a method to mitigate negative transfer when fine-tuning tasks on a pretrained network. For the scenario where the-
 old tasks can be learned again, [26] learned an additional active column to better exploit potential positive transfer. [22] tried to maximize transfer and minimize interference from a memory buffer containing a few old training data. Similarly, [6, 16, 34] attempted to more effectively balance stability and plasticity with the memory buffer in class incremental learning, while [33] stored and updated the old features. By contrast, since pretraining or old training data might not be available in -
continual learning, we mainly focus on a more restrict yet realistic setting that a neural network incrementally learns a sequence of tasks from scratch, without storing old training data. Further, we extend our method to the scenarios where pretraining or memory buffer can be used, as well as the scenarios other than classification tasks, such as regression tasks and reinforcement tasks.
3 Method
In this section, we first describe the framework of Bayesian continual learning [12, 20]. Under such framework, we propose an active forgetting strategy, which is formally consistent with the underling mechanism of biological active forgetting at synaptic structures.
3.1 Basics of Bayesian Continual Learning
Continual learning needs to remember the old tasks and learn each new task effectively. Let’s consider a simple case that a neural network with parameter θ continually learns two independent tasks, task A and task B, from their training datasets Dtrain
A and Dtrain
B [12]. The training dataset of each task is only available when learning the task.
Bayesian Learning: After learning Dtrain
A , the posterior distribution
p(θ|Dtrain
A ) = p(Dtrain
A |θ)p(θ)
p(Dtrain
A)
incorporates the knowledge of task A. Then, we can get the predictive distribution for the test data of task A:
p(Dtest
A |Dtrain
A )=
∫
p(Dtest
A |θ)p(θ|Dtrain
A )dθ.
As the posterior p(θ|Dtrain
A ) is generally intractable (except very special cases), we must resort to approximation methods, such as the Laplace approximation [12] or other approaches of approximate inference [20]. Let’s take Laplace approximation as an example. If p(θ|Dtrain
A ) is smooth and
majorly peaked around the mode θ∗
A = arg maxθ log p(θ|Dtrain
A ), we can approximate it with a
Gaussian distribution whose mean is θ∗
A and covariance is the inverse Hessian of the negative log posterior (detailed in Appendix B.1).
Bayesian Continual Learning: Next, we want to incorporate the new task into the posterior, which uses the posterior p(θ|Dtrain
A ) as the prior of the next task [12]:
p(θ|Dtrain
A , Dtrain
B ) = p(Dtrain
B |θ) p(θ|Dtrain
A) p(Dtrain
B ) . (1)
Then we can test the performance of continual learning by evaluating
p(Dtest
A , Dtest
B |Dtrain
A , Dtrain
B )=
∫
p(Dtest
A , Dtest
B |θ)p(θ|Dtrain
A , Dtrain
B )dθ. (2)
Similarly, p(θ|Dtrain
A , Dtrain
B ) can be approximated by a Gaussian using Laplace approximation whose mean is the mode of the posterior:
θ∗
A,B = arg mθax log p(θ|Dtrain
A , Dtrain
B ) (3)
= arg mθax log p(Dtrain
B |θ) + log p(θ|Dtrain
A ) − log p(Dtrain
B)
} {{ }
const.
. (4)
3

This MAP estimation is also known as the Elastic Weight Consolidation (EWC) [12]:
LEWC(θ) = LB(θ) + λ
2
∑
i
FA,i(θi − θ∗
A,i)2, (5)
where LB(θ) is the loss for task B and i is the label of each parameter. FA is the Fisher Information
matrix (FIM) of θ∗
A on Dtrain
A (the computation is detailed in Appendix B.1), which indicates the “importance” of parameter i for task A. The hyperparameter λ explicitly controls the penalty that selectively merges each θi to θ∗
A,i to alleviate catastrophic forgetting.
3.2 Active Forgetting with Synaptic Expansion-Convergence
However, if precisely remembering task A interferes with the learning of task B, e.g., task A and task B are too different, it might be useful to actively forget the original data, similar to the biological strategy of active forgetting. Based on this inspiration, we introduce a forgetting factor β and replace p(θ|Dtrain
A ) that absorbs all the information of Dtrain
A with a weighted product distribution [8, 19]:
pm(θ|Dtrain
A , β) = p(θ|Dtrain
A )(1−β)p(θ)β
Z , (6)
where we use m to denote that we are ‘mixing’ p(θ|Dtrain
A ) and p(θ) to produce the new distribution
pm. Z is the normalizer that depends on β, which keeps pm(θ|Dtrain
A , β) following a Gaussian
distribution if p(θ|Dtrain
A ) and p(θ) are both Gaussian (detailed in Appendix B.2). When β → 0, pm
will be dominated by p(θ|Dtrain
A ) and remember all the information about task A. When β → 1, pm will actively forget all the information about task A. Modified from Eqn. (2), our target becomes:
p(Dtest
A , Dtest
B |Dtrain
A , Dtrain
B , β) =
∫
p(Dtest
A , Dtest
B |θ)p(θ|Dtrain
A , Dtrain
B , β)dθ. (7)
We first need to determine β, which decides how much information from task A is forgotten to maximize the probability of learning task B well. A good β should be as follows:
β∗ = arg mβax p(Dtrain
B |Dtrain
A , β) = arg mβax
∫
p(Dtrain
B |θ)pm(θ|Dtrain
A , β)dθ. (8)
Since the integral is difficult to solve, we can make a grid search to determine β, which should be between 0 and 1. Next, p(θ|Dtrain
A , Dtrain
B , β) can also be approximated by a Gaussian using
Laplace approximation (the proof is detailed in Appendix B.3), and the MAP estimation is
θ∗
A,B = arg mθax log p(θ|Dtrain
A , Dtrain
B , β)
= arg mθax (1 − β) (log p(Dtrain
B |θ) + log p(θ|Dtrain
A )) + β log p(θ|Dtrain
B ) + const.. (9)
Then we obtain the loss function of Active Forgetting with synaptic Expansion-Convergence (AFEC):
LAFEC(θ) =LB(θ) + λ
2
∑
i
FA,i(θi − θ∗
A,i)2 + λe
2
∑
i
Fe,i(θi − θ∗
e,i)2. (10)
θe∗ are the optimal parameters for the new task and Fe is the FIM of θe∗ (the computation is detailed in Appendix B.1). As shown in Fig. 2, we first learn a set of expanded parameters θe with LB(θe)
to obtain θe∗ and Fe. Then we can optimize Eqn. (10), where two weight-merging regularizers
selectively merge θi with θ∗
A,i for the old tasks and θ∗
e,i for the new task. The forgetting factor β is integrated into a hyperparameter λe ∝ β/(1 − β) to control the penalty that promotes active forgetting. Therefore, derived from active forgetting of the original posterior in Eqn. (6), we obtain an algorithm that dynamically expands parameters to learn a new task and then selectively converges the expanded parameters to the main network. Intriguingly, this algorithm is formally consistent with the underlying mechanism of biological active forgetting-
 (the neuroscience evidence is detailed in Appendix A), which also expands additional functional connections for a new experience (synaptic expansion) and then prunes them to the amount before learning (synaptic convergence).
4

Figure 2: Conceptual comparison of EWC and AFEC (ours).  ̈ Synaptic Expansion: Learn the expanded parameters θe with LB(θe) to obtain θe∗ and Fe. ≠ Synaptic Convergence: Learn the main network parameters θ with Eqn. (10) for selective weight-merging.
As the proposed active forgetting is integrated into the third term, our method can be used in a plug-and-play way to improve continual learning (detailed in Appendix E, F). Here we use Laplace approximation to approximate the intractable posteriors, which can be other strategies of approximate inference [20] in further work. Note that θe∗ and Fe are not stored in continual learning, and the architecture of the main network is fixed. Thus, AFEC does not cause additional storage cost compared with -
regular weight regularization approaches such as [12, 36, 1, 2]. Further, it is straightforward to extend our method to continual learning of more than two tasks. We discuss it in Appendix B.4 with a pseudocode.
Now we conceptually analyze how AFEC mitigates potential negative transfer in continual learning (see Fig. 2). When learning task B on the basis of task A, regular weight regularization approaches [12, 36, 1, 2] selectively penalize changes of the old parameters learned for task A, which will severely interfere with the learning of task B if they conflict with each other. In contrast, AFEC learns a set of expanded parameters only for task B to avoid potential negative transfer from task A. Then, t-
he main network parameters selectively merge with both the old parameters and the expanded parameters, depending on their contributions to the overall representations of task A and task B.
4 Experiment
In this section, we evaluate AFEC on a variety of continual learning benchmarks, including: CIFAR10 regression tasks, which is a toy experiment to validate our idea about negative transfer in continual learning; visual classification tasks, where the forward knowledge transfer might be either positive or negative; and Atari reinforcement tasks, where the forward knowledge transfer is severely negative. All the experiments are averaged by 5 runs with different random seeds and task orders.
4.1 CIFAR-10 Regression Tasks
Figure 3: CIFAR-10 regression tasks. Each circle represents the position of a class. Task A and Task B use different relative positions. “Transfer” applies the same relative position as Task A, but rotates by several phases.
First, we propose CIFAR-10 regression tasks to explicitly show how negative transfer affects continual learning, and how AFEC effectively addresses this challenging issue. CIFAR-10 dataset [13] contains 50,000 training samples and 10,000 testing samples of 10-class colored images of size 32 × 32. The regression task is to evenly map the ten classes around the origin of the two-dimensional coordinates and train the neural network to predict the angle of the origin to each class (see Fig. 3). We cha-
nge the relative position of the ten classes to construct different regression tasks with mutual negative transfer, in which remembering the old knowledge will severely interfere with the learning of a new task.
5

Figure 4: Continual learning of two CIFAR-10 regression tasks with a two-layer LeNet architecture. Larger strength of weight regularization can better remember the old task but limits the learning of the new task. AFEC can more effectively learn a new task while remembering the old task.
Table 1: Continual learning of CIFAR-10 regression tasks with various architectures. We present the averaged accuracy (%) of five runs for twotask and ten-task, and five runs of five rotations for transfer experiment.
Methods LeNet [15] VGG11 [29] VGG11BN [29] ResNet10 [7]
Two-Task
Fine-tuning 29.23 ±0.72 46.37 ±0.11 46.54 ±0.29 60.67 ±1.52 EWC [12] 39.91 ±1.44 73.55 ±1.26 82.00 ±0.32 71.94 ±1.61 AFEC (ours) 44.45 ±1.03 77.76 ±0.09 86.07 ±0.24 75.67 ±1.19
Ten-Task
Fine-tuning 46.57 ±0.68 18.03 ±0.03 18.08 ±0.04 54.97 ±1.33 EWC [12] 49.95 ±1.81 79.39 ±1.12 85.98 ±0.07 82.91 ±0.22 AFEC (ours) 53.50 ±1.70 82.50 ±0.47 88.31 ±0.11 85.33 ±0.31
Transfer
Fine-tuning 38.93 ±0.80 80.37 ±0.40 84.30 ±0.10 85.69 ±0.93 EWC [12] 35.87 ±0.87 76.66 ±0.44 82.25 ±0.11 84.96 ±0.91 AFEC (ours) 40.90 ±1.35 83.81 ±0.42 86.30 ±0.17 87.80 ±0.66
As shown in Fig. 4 for continual learning of two different regression tasks, regular weight regularization approaches, such as MAS [1] and EWC [12], can effectively remember the old tasks, but limits the learning of new tasks. In particular, larger strength of the weight regularization results in better performance of the first task but worse performance of the second task. In contrast, AFEC improves the learning of new tasks on the basis of remembering the old tasks, so as to achieve better avera-
ged accuracy. Note that EWC is equal to the ablation of active forgetting in AFEC, i.e., β = 0, so the performance improvement of AFEC on EWC validates the effectiveness of our proposal. We further demonstrate the efficacy of AFEC on a variety of architectures and a larger amount of tasks (see Table 1).
In addition, we evaluate the ability of transfer learning after continual learning of two different regression tasks. We fix the feature extractor of the neural network and only fine-tune a linear classifier to predict a new task that is similar to the first task. Specifically, the similar task applies the same relative position as the first task, but rotates by 60◦, 120◦, 180◦, 240◦ or 300◦. Therefore, if the neural network effectively remembers and transfers the relative position learned in the -
first task, it will be able to learn the similar task well. As shown in Table 1, AFEC can more effectively learn the similar task, while EWC is even worse than sequentially fine-tuning without weight regularization.
4.2 Visual Classification Tasks
Dataset: We evaluate continual learning on a variety of benchmark datasets for visual classification, including CIFAR-100, CUB-200-2011 and ImageNet-100. CIFAR-100 [13] contains 100-class colored images of the size 32 × 32, where each class includes 500 training samples and 100 testing samples. CUB-200-2011 [30] is a large-scale dataset including 200 classes and 11,788 colored images of birds, split as 30 images per class for training while the rest for testing. ImageNet-100 [9] is a subset of iIL-
SVRC-2012 [23], consisting of randomly selected 100 classes of images and 1300 samples per class. We follow the regular preprocessing pipeline of CUB-200-2011 and ImageNet-100 as [10], which randomly resizes and crops the images to the size of 224 × 224 before experiment.
Benchmark: We consider five representative benchmarks of visual classification tasks to evaluate continual learning in different aspects. The first three are on CIFAR-100, with forward knowledge transfer from more negative to more positive (detailed in Fig. 5), while the second two are on largescale images. (1) CIFAR-100-SC [35]: CIFAR-100 can be split as 20 superclasses (SC) with 5 classes per superclass dependent on semantic similarity, where each superclass is a classification task. Since the s-
uperclasses are semantically different, forward knowledge transfer in such a task sequence is
6

Table 2: Averaged accuracy (%) of all the tasks learned so far in continual learning of visual classification tasks, averaged by 5 different random seeds (see Appendix C for error bar). *AFEC is our method described in Sec. 3.2, while w/ AFEC is the adaptation of our method to representative weight regularization methods (detailed in Appendix E).
CIFAR-100-SC CIFAR-100 CIFAR-10/100 CUB-200 w/ PT CUB-200 w/o PT ImageNet-100
Methods A10 A20 A10 A20 A2 A2+20 A5 A10 A5 A10 A5 A10
Fine-tuning 32.58 28.40 40.92 33.53 78.96 37.81 78.75 78.13 31.91 39.82 50.56 44.80
P&C [26] 53.48 52.88 70.10 70.21 86.72 78.29 81.42 81.74 33.88 42.79 76.44 74.38
AGS-CL [10] 55.19 53.19 71.24 69.99 86.27 80.42 82.30 81.84 32.69 40.73 51.48 47.20
EWC [12] 52.25 51.74 68.72 69.18 85.07 77.75 81.37 80.92 32.90 42.29 76.12 73.82
∗AFEC (ours) 56.28 55.24 72.36 72.29 86.87 81.25 83.65 82.04 34.36 43.05 77.64 75.46
MAS [1] 52.76 52.18 67.60 69.41 84.97 77.39 79.98 79.67 31.68 42.56 75.48 74.72
w/ AFEC (ours) 55.26 54.89 69.57 71.20 86.21 80.01 82.77 81.31 34.08 42.93 75.64 75.66
SI [36] 52.20 51.97 68.72 69.21 85.00 76.69 80.14 80.21 33.08 42.03 73.52 72.97
w/ AFEC (ours) 55.25 53.90 69.34 70.13 85.71 78.49 83.06 81.88 34.04 43.20 75.72 74.14
RWALK [2] 50.51 49.62 66.02 66.90 85.59 73.64 80.81 80.58 32.56 41.94 73.24 73.22
w/ AFEC (ours) 52.62 51.76 68.50 69.12 86.12 77.16 83.24 81.95 33.35 42.95 74.64 73.86
relatively more negative. (2) CIFAR-100 [21]: The 100 classes in CIFAR-100 are randomly split as 20 classification tasks with 5 classes per task. (3) CIFAR-10/100 [10]: The 10-class CIFAR-10 are randomly split as 2 classification tasks with 5 classes per task, followed by 20 tasks with 5 classes per task randomly split from CIFAR-100. This benchmark is adapted from [10] to keep the number of classes per task the same as benchmark (1, 2), where the large amounts of training data in the first two CI-
FAR-10 tasks bring a relatively more positive transfer. (4) CUB-200 [10]: The 200 classes in CUB-200-2011 are randomly split as 10 classification tasks with 20 classes per task. (5) ImageNet-100 [21]: The 100 classes in ImageNet-100 are randomly split as 10 classification tasks with 10 classes per task.
Architecture: We follow [10] to use a CNN architecture with 6 convolution layers and 2 fully connected layers for benchmark (1, 2, 3), and AlexNet [14] for benchmark (4, 5). Since continual learning needs to quickly learn a usable model from incrementally collected data, we mainly consider learning the network from scratch. Following [10], we also try AlexNet with ImageNet pretraining for CUB-200.
Baseline: First, we consider a restrict yet realistic setting of continual learning without access to the old training data, and perform multi-head evaluation [2]. Since AFEC is a weight regularization approach, we mainly compare with representative approaches that follow a similar idea, such as EWC [12], MAS [1], SI [36] and RWALK [2]. We also compare with AGS-CL [10], the SOTA method that takes advantage of weight regularization and parameter isolation, and P&C [26], which learns an additional a-
ctive column on the basis of EWC to improve forward knowledge transfer. We reproduce the results of all the baselines from the officially released code of [10], where we do an extensive hyperparameter search and report the best performance for fair comparison (detailed in Appendix C). Then, we relax the restriction of using old training data and plug AFEC in representative memory replay approaches, where we perform single-head evaluation [2] (detailed in Appendix F).
Averaged Accuracy: In Table 2, we summarize the averaged accuracy of all the tasks learned so far during continual learning of visual classification tasks. AFEC achieves the best performance on all the continual learning benchmarks and is much better than EWC [12], i.e., the ablation of active forgetting in AFEC. In particular, AGS-CL [10] is the SOTA method on relatively small-scale images and on CUB-200 with ImageNet pretraining (CUB-200 w/ PT). While, AFEC achieves a better performance than AGS-
-CL on small-scale images from scratch and CUB-200 w/ PT, and substantially outperforms AGS-CL on the two benchmarks of large-scale images from scratch. Further, since regular weight regularization approaches are generally in a re-weighted weight decay form, AFEC can be easily adapted to such approaches (the adaptation is detailed in Appendix E) and effectively boost their performance on the benchmarks above.
Knowledge Transfer: Next, we evaluate knowledge transfer in the three continual learning benchmarks developed on CIFAR-100 in Fig. 5. We first present the accuracy of learning each new task
7

Figure 5: Knowledge transfer in continual learning. (a) The accuracy of learning each new task in continual learning. (b) Forward Transfer (FWT), which is from more negative to more positive on CIFAR-100-SC, CIFAR-100 and CIFAR-10/100. (c) Backward Transfer (BWT).
Figure 6: Visualization of predictions of the latest task after continual learning on CIFAR-100-SC. We present the results on five different random seeds, which determine five different superclasses.
in continual learning, where AFEC learns each new task much better than other baselines. Since continual learning of more tasks leads to less network resources for a new task, the overall trend of all the baselines is declining, indicating the necessity to improve forward knowledge transfer on the basis of overcoming catastrophic forgetting. Then we calculate forward transfer (FWT) [17], i.e., the averaged influence that learning the previous tasks has on a future task, and backward transfer (BWT)-
 [17], i.e., the averaged influence that learning a new task has on the previous tasks (detailed in Appendix D). FWT is from more negative to more positive in CIFAR-100-SC, CIFAR-100 and CIFAR-10/100, while AFEC achieves the highest FWT among all the baselines. The BWT of AFEC is comparable as EWC, indicating that the proposed active forgetting does not cause additional catastrophic forgetting. Therefore, the performance improvement of AFEC in Table 2 is achieved by effectively improving the learn-
ing of new tasks in continual learning. In particular, AFEC achieves a much larger improvement on the learning of new tasks than P&C, which attempted to improve forward transfer of EWC through learning an additional active column. Due to the progressive
8

parameter isolation, although AGS-CL achieves the best BWT, its ability of learning each new task drops more rapidly than other baselines. Thus, it underperforms AFEC in Table 2.
Visual Explanation: To explicitly show how AFEC improves continual learning, in Fig. 6 we use Grad-CAM [27] to visualize predictions of the latest task after continual learning on CIFAR-100-SC, where FWT is more negative as discussed above. The predictions of EWC overfit the background information since it attempts to best remember the old tasks with severe negative transfer, which limits the learning of new tasks. In contrast, the visual explanation of AFEC is much more reasonable than EWC, indic-
ating the efficacy of active forgetting to address potential negative transfer and benefit the learning of new tasks.
Plugging-in Memory Replay: We further implement AFEC in representative memory replay approaches in Appendix F, where we perform single-head evaluation [2]. On CIFAR-100 and ImageNet100 datasets, we follow [9, 6] that first learn 50 classes and then continually learn the other 50 classes by 5 phases (10 classes per phase) or 10 phases (5 classes per phase), using a small memory buffer of 20 images per class. AFEC substantially boosts the performance of representative memory replay approaches such a-
s iCaRL [21], LUCIR [9] and PODNet [6].
4.3 Atari Reinforcement Tasks
Figure 7: Continual learning of Atari reinforcement tasks. AFEC1 is our method described in Sec. 3.2, while AFEC2 is the adaptation of our method to MAS.
Next, we evaluate AFEC in continual learning of Atari reinforcement tasks (Atari games). We follow the implementation of [10] to sequentially learn eight randomly selected Atari games. Specifically, we applies a CNN architecture consisting of 3 convolution layers with 2 fully connected layers and identical PPO [25] for all the methods (detailed in Appendix G). The evaluation metric is the normalized accumulated reward: the evaluated rewards are normalized with the maximum reward of fine-tuning on -
each task, and accumulated. We present the results of three different orders of task sequence, averaged by five runs with different random initialization.
Table 3: Averaged performance increase of learning each new task on Atari reinforcement tasks.
Sequence 1 Sequence 2 Sequence 3
AFEC1 on EWC +35.28% +50.55% +28.00%
AFEC2 on MAS +30.09% +61.12% +26.63%
For continual learning of Atari reinforcement tasks, forward knowledge transfer is severely negative, possibly because the optimal policies of each Atari games are highly different. We first measure the normalized rewards of learning each task with a randomly initialized network, which are 2.16, 1.44 and 1.68 on the three task sequences, respectively. That is to say, the initialization learned from the old tasks results in an averaged performance decline by 53.67%, 30.66% and 40.56%, compared with-
 random initialization. Then, we evaluate the maximum reward of learning each new task in Table 3, and the normalized accumulated reward of continual learning in Fig. 7. AFEC effectively improves the learning of new tasks and thus boosts the performance of EWC and MAS, particularly when learning more incremental tasks. AFEC also achieves a much better performance than the reproduced results of AGS-CL on its officially released code [10] (see Appendix G for an extensive analysis).
9

5 Conclusion
In this work, we draw inspirations from the biological active forgetting and propose a novel approach to mitigate potential negative transfer in continual learning. Our method achieves the SOTA performance on a variety of continual learning benchmarks through effectively improving the learning of new tasks, and boosts representative continual learning strategies in a plug-and-play way. Intriguingly, derived from active forgetting of the past with Bayesian continual learning, we obtain the algorith-
m that is formally consistent with the synaptic expansion and synaptic convergence (detailed Appendix A), and is functionally consistent with the advantage of biological active forgetting in memory flexibility [5]. This connection provides a potential theoretical explanation of how the underlying mechanism of biological active forgetting achieves its function of forgetting the past and continually learning conflicting experiences. We will further explore it with artificial neural networks and biol-
ogical neural networks in the future.
Acknowledgements
This work was supported by NSF of China Projects (Nos. 62061136001, 61620106010, U19B2034, U181146, 62076145), Beijing NSF Project (No. JQ19016), Tsinghua-Peking Center for Life Sciences, Beijing Academy of Artificial Intelligence (BAAI), Tsinghua-Huawei Joint Research Program, a grant from Tsinghua Institute for Guo Qiang, and the NVIDIA NVAIL Program with GPU/DGX Acceleration.
10

References
[1] Rahaf Aljundi, Francesca Babiloni, Mohamed Elhoseiny, Marcus Rohrbach, and Tinne Tuytelaars. Memory aware synapses: Learning what (not) to forget. In Proceedings of the European Conference on Computer Vision (ECCV), pages 139–154, 2018.
[2] Arslan Chaudhry, Puneet K Dokania, Thalaiyasingam Ajanthan, and Philip HS Torr. Riemannian walk for incremental learning: Understanding forgetting and intransigence. In Proceedings of the European Conference on Computer Vision (ECCV), pages 532–547, 2018.
[3] Xinyang Chen, Sinan Wang, Bo Fu, Mingsheng Long, and Jianmin Wang. Catastrophic forgetting meets negative transfer: Batch spectral shrinkage for safe transfer learning. In Advances in Neural Information Processing Systems, pages 1908–1918, 2019.
[4] Natalia Díaz-Rodríguez, Vincenzo Lomonaco, David Filliat, and Davide Maltoni. Don’t forget, there is more than forgetting: new metrics for continual learning. arXiv preprint arXiv:1810.13166, 2018.
[5] Tao Dong, Jing He, Shiqing Wang, Lianzhang Wang, Yuqi Cheng, and Yi Zhong. Inability to activate rac1-dependent forgetting contributes to behavioral inflexibility in mutants of multiple autism-risk genes. Proceedings of the National Academy of Sciences, 113(27):7644–7649, 2016.
[6] Arthur Douillard, Matthieu Cord, Charles Ollion, Thomas Robert, and Eduardo Valle. Podnet: Pooled outputs distillation for small-tasks incremental learning. In Proceedings of the European Conference on Computer Vision (ECCV), volume 12365, pages 86–102, 2020.
[7] Kaiming He, Xiangyu Zhang, Shaoqing Ren, and Jian Sun. Deep residual learning for image recognition. In Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition, pages 770–778, 2016.
[8] Geoffrey E Hinton. Training products of experts by minimizing contrastive divergence. Neural Computation, 14(8):1771–1800, 2002.
[9] Saihui Hou, Xinyu Pan, Chen Change Loy, Zilei Wang, and Dahua Lin. Learning a unified classifier incrementally via rebalancing. In Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition, pages 831–839, 2019.
[10] Sangwon Jung, Hongjoon Ahn, Sungmin Cha, and Taesup Moon. Continual learning with node-importance based adaptive group sparse regularization. arXiv e-prints, pages arXiv–2003, 2020.
[11] Steven M Kay. Fundamentals of statistical signal processing. Prentice Hall PTR, 1993.
[12] James Kirkpatrick, Razvan Pascanu, Neil Rabinowitz, Joel Veness, Guillaume Desjardins, Andrei A Rusu, Kieran Milan, John Quan, Tiago Ramalho, Agnieszka Grabska-Barwinska, et al. Overcoming catastrophic forgetting in neural networks. Proceedings of the National Academy of Sciences, 114(13):3521–3526, 2017.
[13] Alex Krizhevsky, Geoffrey Hinton, et al. Learning multiple layers of features from tiny images. Technical report, Citeseer, 2009.
[14] Alex Krizhevsky, Ilya Sutskever, and Geoffrey E Hinton. Imagenet classification with deep convolutional neural networks. In Advances in Neural Information Processing Systems, volume 25, pages 1097–1105, 2012.
[15] Yann LeCun. The mnist database of handwritten digits. http://yann. lecun. com/exdb/mnist/, 1998.
[16] Yaoyao Liu, Bernt Schiele, and Qianru Sun. Meta-aggregating networks for class-incremental learning. arXiv preprint arXiv:2010.05063, 2020.
[17] David Lopez-Paz et al. Gradient episodic memory for continual learning. In Advances in Neural Information Processing Systems, pages 6467–6476, 2017.
11

[18] Michael McCloskey and Neal J Cohen. Catastrophic interference in connectionist networks: The sequential learning problem. In Psychology of Learning and Motivation, volume 24, pages 109–165. Elsevier, 1989.
[19] Thomas Minka. Power ep. Technical report, Microsoft Research, Cambridge, 2004.
[20] Cuong V Nguyen, Yingzhen Li, Thang D Bui, and Richard E Turner. Variational continual learning. arXiv preprint arXiv:1710.10628, 2017.
[21] Sylvestre-Alvise Rebuffi, Alexander Kolesnikov, Georg Sperl, and Christoph H Lampert. icarl: Incremental classifier and representation learning. In Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition, pages 2001–2010, 2017.
[22] Matthew Riemer, Ignacio Cases, Robert Ajemian, Miao Liu, Irina Rish, Yuhai Tu, and Gerald Tesauro. Learning to learn without forgetting by maximizing transfer and minimizing interference. arXiv preprint arXiv:1810.11910, 2018.
[23] Olga Russakovsky, Jia Deng, Hao Su, Jonathan Krause, Sanjeev Satheesh, Sean Ma, Zhiheng Huang, Andrej Karpathy, Aditya Khosla, Michael Bernstein, et al. Imagenet large scale visual recognition challenge. International Journal of Computer Vision, 115(3):211–252, 2015.
[24] Andrei A Rusu, Neil C Rabinowitz, Guillaume Desjardins, Hubert Soyer, James Kirkpatrick, Koray Kavukcuoglu, Razvan Pascanu, and Raia Hadsell. Progressive neural networks. arXiv preprint arXiv:1606.04671, 2016.
[25] John Schulman, Filip Wolski, Prafulla Dhariwal, Alec Radford, and Oleg Klimov. Proximal policy optimization algorithms. arXiv preprint arXiv:1707.06347, 2017.
[26] Jonathan Schwarz, Wojciech Czarnecki, Jelena Luketina, Agnieszka Grabska-Barwinska, Yee Whye Teh, Razvan Pascanu, and Raia Hadsell. Progress & compress: A scalable framework for continual learning. In Proceedings of International Conference on Machine Learning, pages 4528–4537. PMLR, 2018.
[27] Ramprasaath R Selvaraju, Michael Cogswell, Abhishek Das, Ramakrishna Vedantam, Devi Parikh, and Dhruv Batra. Grad-cam: Visual explanations from deep networks via gradientbased localization. In Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition, pages 618–626, 2017.
[28] Yichun Shuai, Binyan Lu, Ying Hu, Lianzhang Wang, Kan Sun, and Yi Zhong. Forgetting is regulated through rac activity in drosophila. Cell, 140(4):579–589, 2010.
[29] Karen Simonyan and Andrew Zisserman. Very deep convolutional networks for large-scale image recognition. arXiv preprint arXiv:1409.1556, 2014.
[30] Catherine Wah, Steve Branson, Peter Welinder, Pietro Perona, and Serge Belongie. The caltech-ucsd birds-200-2011 dataset. 2011.
[31] Liyuan Wang, Bo Lei, Qian Li, Hang Su, Jun Zhu, and Yi Zhong. Triple-memory networks: A brain-inspired method for continual learning. IEEE Transactions on Neural Networks and Learning Systems, 2021.
[32] Liyuan Wang, Kuo Yang, Chongxuan Li, Lanqing Hong, Zhenguo Li, and Jun Zhu. Ordisco: Effective and efficient usage of incremental unlabeled data for semi-supervised continual learning. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pages 5383–5392, 2021.
[33] Shipeng Wang, Xiaorong Li, Jian Sun, and Zongben Xu. Training networks in null space of covariance for continual learning. arXiv preprint arXiv:2103.07113, 2021.
[34] Shipeng Yan, Jiangwei Xie, and Xuming He. Der: Dynamically expandable representation for class incremental learning. arXiv preprint arXiv:2103.16788, 2021.
[35] Jaehong Yoon, Saehoon Kim, Eunho Yang, and Sung Ju Hwang. Scalable and order-robust continual learning with additive parameter decomposition. arXiv preprint arXiv:1902.09432, 2019.
12

[36] Friedemann Zenke, Ben Poole, and Surya Ganguli. Continual learning through synaptic intelligence. In Proceedings of International Conference on Machine Learning, pages 39873995, 2017.
[37] Wen Zhang, Lingfei Deng, and Dongrui Wu. Overcoming negative transfer: A survey. arXiv preprint arXiv:2009.00909, 2020.
13

A Neural Mechanism of Biological Active Forgetting
Forgetting is an important mechanism in biological learning and memory. The biological forgetting is not simply passive, but can be actively regulated by specialized signaling pathways. An identified pathway is called Rac1 signaling pathway, where the active forgetting regulated by Rac1 signaling pathway is called Rac1-dependent active forgetting [28]. So, why do organisms evolve such a mechanism to actively forget the learned information? A study discovered that the abnormality of Rac1-dependent -
active forgetting results in severe defects of memory flexibility, where the organisms cannot effectively learn a new experience that conflicts with the old memory [5].
Figure 8: Summary of the mechanism underlying Rac1-dependent active forgetting at the level of synaptic structures. (a) Down-regulation of Rac1 through dominant negative overexpression (Rac1-DN) substantially slows down forgetting of the learned experience. (b) Rac1-dependent active forgetting is achieved by regulating the learning-triggered synaptic expansion and synaptic convergence. (c) A conceptual model of the learning-triggered synaptic expansion-convergence in continual learning.
However, the understanding to the neural mechanism of active forgetting is still limited. Our latest biological data in drosophila indicated that Rac1-dependent active forgetting is achieved by regulating a synaptic expansion-convergence process. Specifically, learning of a new experience triggers the increase and subsequent elimination in the number of presynaptic active zones (AZs, i.e., the site of neurotransmitter release), which is regulated by Rac1 signaling pathway (Fig. 8). After learning -
an aversive olfactory conditioning task, the number of AZs is significantly increased followed by elimination within the mushroom body γ lobe where a new memory is formed (Fig. 8, a, b). The time course of AZ addition-induced elimination is in parallel with Rac1-dependent active forgetting that lasts for only hours (Fig. 8, a, b). In particular, inhibition of Rac1 and its downstream Dia specifically blocks the increase of the number rather than the size of AZs. Suppressing activity of either Rac1 -
or its downstream signaling pathway blocks AZ addition. Such manipulations that block AZ addition-induced elimination all prevent forgetting.2
The evidences above suggested that Rac1-dependent active forgetting is achieved by regulating the learning-triggered synaptic expansion-convergence, both sufficiently and necessarily. Since Rac1dependent active forgetting is critical for organisms to continually learn a new task that conflicts with the old knowledge [5], we adapt the synaptic expansion-convergence to the scenario of continual learning (see Fig. 8, c). After learning the historical experiences (task A), the neural network continual-
ly learns a new experience (task B). The learning of task B triggers the synaptic expansion, where both the expanded and the old AZs can learn the new experience. While, the subsequent synaptic convergence eliminates the AZs to the amount before learning.
2The detailed biological evidence will be published elsewhere, so we do not include them in the published version of this paper.
14

B Computation Details
B.1 Laplace Approximation
The objective of continual learning is to estimate θ∗ = arg maxθ log p(θ|Dtrain
A , Dtrain
B ), which can be written as:
log p(θ|Dtrain
A , Dtrain
B ) = log p(Dtrain
B |θ) + log p(θ|Dtrain
A ) − log p(Dtrain
B ). (11)
As the posterior p(θ|Dtrain
A ) is generally intractable (except very special cases), we must resort
to approximation methods, such as the Laplace approximation [12]. If p(θ|Dtrain
A ) is smooth and
majorly peaked around its point of maxima (i.e., θ∗
A), we can approximate it with a Gaussian
distribution with mean θ∗
A and variance σ2
A. To determine θ∗
A and σ2
A of the Gaussian distribution, we
begin with computing the second order Taylor expansion of a function l(θ) around θ∗
A as follows:
l(θ) = l(θ∗
A) + ( ∂l(θ)
∂θ |θ∗
A )(θ − θ∗
A) + 1
2 (θ − θ∗
A)T( ∂2l(θ)
∂θ2 |θ∗
A )(θ − θ∗
A) + R2(x), (12)
where R2(x) is the higher order term. Neglecting the higher order term, we have:
l(θ) ≈ l(θ∗
A) + ( ∂l(θ)
∂θ |θ∗
A )(θ − θ∗
A) + 1
2 (θ − θ∗
A)T( ∂2l(θ)
∂θ2 |θ∗
A )(θ − θ∗
A). (13)
Now we approximate p(θ|Dtrain
A ) with Eqn. (13). Noting that ∂ log p(θ|Dtrain
A)
∂θ |θ∗
A = 0, we have:
log p(θ|Dtrain
A ) ≈ log p(θ∗
A|Dtrain
A )+ 1
2 (θ − θ∗
A)T( ∂2 log p(θ|Dtrain
A)
∂θ2 |θ∗
A )(θ − θ∗
A)
=δ+ 1
2 (θ − θ∗
A)T( ∂2 log p(θ|Dtrain
A)
∂θ2 |θ∗
A )(θ − θ∗
A).
(14)
Then, we can rewrite Eqn. (14) to obtain the Laplace approximation of p(θ|Dtrain
A ) as:
p(θ|Dtrain
A ) = exp(δ) exp(− 1
2 (θ − θ∗
A)T((− ∂2 log p(θ|Dtrain
A)
∂θ2 |θ∗
A )−1)−1(θ − θ∗
A)), (15)
p(θ|Dtrain
A ) ∼ N (θ∗
A, (− ∂2 log p(θ|Dtrain
A)
∂θ2 |θ∗
A )−1). (16)
The variance represents the inverse of Fisher Information matrix (FIM) FA, which can be approximated from the first order derivatives to avoid computing the Hessian matrix [11]:
FA = E[− ∂2 log p(θ|Dtrain
A)
∂θ2 |θ∗
A]
≈ E[( ∂ log p(θ|Dtrain
A)
∂θ )( ∂ log p(θ|Dtrain
A)
∂θ )|θ∗
A ].
(17)
Taking Eqn. (14) and Eqn. (11) together, we obtain the objective of EWC [12] in Eqn. (5). To address continual learning of more than two tasks, we follow [12] that averages the FIM among all the tasks ever seen for EWC and AFEC. If the network continually learns t tasks, we compute the FIM of the current task as Ft and update the FIM of all the old tasks as
F1:t = ((t − 1) F1:t−1 + Ft)/t. (18)
In Eqn. (9), the posterior p(θ|Dtrain
B ) can be similarly approximated as a Gaussian distribution with
mean θe∗ and variance σe2. In particular, the inverse of σe2 can be computed as:
Fe ≈ E[( ∂ log p(θ|Dtrain
B)
∂θ )( ∂ log p(θ|Dtrain
B)
∂θ )|θe∗ ]. (19)
15

B.2 Weighted Product Distribution with Forgetting Factor
Here we prove that if two distribution p1(x) ∼ N (μ1, σ12), p2(x) ∼ N (μ2, σ22), then we can find a
normalizer Z that depends on β to keep pm(x) = p1(x)1−βp2(x)β
Z following a Gaussian distribution.
The probability density functions of p1(x) and p2(x) are
p1(x) = 1
√2πσ12
e− (x−μ1)2
2σ12 , (20)
p2(x) = 1
√2πσ22
e− (x−μ2)2
2σ22 , (21)
So we get
p1(x)1−βp2(x)β = 1
√
2πσ2(1−β)
1 σ2β
2
e−[ (1−β)(x−μ1)2
2σ12
+ β(x−μ2)2
2σ22
]
=1
√
2πσ2(1−β)
1 σ2β
2
e−[ (x−m)2
2v2 + k−m2
2v2 ].
(22)
where
v2 = σ12σ22
βσ12 + (1 − β)σ22
, (23)
m = (1 − β)σ22μ1 + βσ12μ2
βσ12 + (1 − β)σ22
, (24)
k = (1 − β)σ22μ21 + βσ12μ22
βσ12 + (1 − β)σ22
. (25)
Then we get
pm(x) = p1(x)1−βp2(x)β
Z ∼ N (m, v2), (26)
Z=
√
v2
σ2(1−β)
1 σ2β
2
e− k−m2
2v2 . (27)
B.3 New Log Posterior of AFEC
In AFEC, the original posterior p(θ|Dtrain
A ) is replaced by pm(θ|Dtrain
A , β) defined in Eqn. (6).
Then the new log posterior log p(θ|Dtrain
A , Dtrain
B , β) becomes:
log p(θ|Dtrain
A , Dtrain
B , β) = log p(Dtrain
B |θ) + log pm(θ|Dtrain
A , β) − log p(Dtrain
B)
= (1 − β) [log p(Dtrain
B |θ) + log p(θ|Dtrain
A ) − log p(Dtrain
B )]
+ β [log p(Dtrain
B |θ) + log p(θ) − log p(Dtrain
B )] − log Z
= (1 − β) [log p(Dtrain
B |θ) + log p(θ|Dtrain
A )] + β log p(θ|Dtrain
B)
− [(1 − β) log p(Dtrain
B ) + log Z]
} {{ }
const.
,
(28)
where (1 − β) log p(Dtrain
B ) + log Z only depends on β and is constant to θ. Note that Eqn. (28) can be further derived as
log p(θ|Dtrain
A , Dtrain
B , β) = (1 − β) log p(θ|Dtrain
A , Dtrain
B ) + β log p(θ|Dtrain
B ) + const., (29)
p(θ|Dtrain
A , Dtrain
B , β) = p(θ|Dtrain
A , Dtrain
B )(1−β)p(θ|Dtrain
B )β
Z . (30)
16

As proved in Appendix B.2, the new posterior p(θ|Dtrain
A , Dtrain
B , β) follows a Gaussian distribu
tion if p(θ|Dtrain
A , Dtrain
B ) and p(θ|Dtrain
B ) are both Gaussian. Therefore, we can use a Laplace approximation of it, as discussed in the main text.
B.4 Continual Learning of More than Two Tasks
Here we discuss the scenario of continual learning of more than two tasks. First, let’s consider the case of three tasks, where the neural network continually learns task C from its training dataset
Dtrain
C after learning task A and task B with active forgetting. Now we use the old posterior
p(θ|Dtrain
A , Dtrain
B , βB) as the prior to incorporate the new task, where βB is the forgetting factor used to learn task B:
p(θ|Dtrain
A , Dtrain
B , Dtrain
C ) = p(Dtrain
C |θ) p(θ|Dtrain
A , Dtrain
B , βB)
p(Dtrain
C ) . (31)
To mitigate potential negative transfer to task C, we replace p(θ|Dtrain
A , Dtrain
B , βB) that absorbs all
the information of Dtrain
A and Dtrain
B with
pm(θ|Dtrain
A , Dtrain
B , βB, β) = p(θ|Dtrain
A , Dtrain
B , βB )(1−β)p(θ)β
Z . (32)
β is the forgetting factor to learn task C. Z is the normalizer that depends on β, which keeps pm(θ|Dtrain
A , Dtrain
B , βB, β) following a Gaussian distribution if p(θ|Dtrain
A , Dtrain
B , βB) and p(θ) are both Gaussian (proved in Appendix B.2). Next, we use a Laplace approximation of p(θ|Dtrain
A , Dtrain
B , Dtrain
C , β), and the MAP estimation is
θ∗
A,B,C = arg mθax log p(θ|Dtrain
A , Dtrain
B , Dtrain
C , β)
= arg mθax (1 − β) (log p(Dtrain
C |θ) + log p(θ|Dtrain
A , Dtrain
B , βB)) + β log p(θ|Dtrain
C ) + const..
(33)
Then we obtain the loss function to learn the third task:
LAFEC(θ) =LC(θ) + λ
2
∑
i
FA,B,i(θi − θ∗
A,B,i)2 + λe
2
∑
i
Fe,i(θi − θ∗
e,i)2, (34)
where LC(θ) is the loss for task C, θ∗
A,B has been obtained after learning task A and task B, and
FA,B is the FIM updated with Eqn. (18). θe∗ is obtained by optimizing the expanded parameter with LC(θe) and its FIM Fe is calculated similarly as Eqn. (19).
Similarly, for continual learning of more tasks, where a neural network with parameter θ continually learns T tasks from their task specific training datasets Dtrain
t (t = 1, 2, ..., T ), the loss function is
LAFEC(θ) =LT(θ) + λ
2
∑
i
F1:T −1,i(θi − θ∗
1:T −1,i)2 + λe
2
∑
i
Fe,i(θi − θ∗
e,i)2. (35)
To demonstrate our method more clearly, we provide a pseudocode as below:
Algorithm 1 AFEC Algorithm
1: Require: θ: the main network parameters; θe: the expanded parameters; λ, λe: hyperparameters;
Dtrain
t : training dataset of task t, t = 1, 2, ..., T . 2: for task t = 1, 2, ..., T do 3: // Synaptic Expansion
4: Learn θe with LT (θe) to obtain θe∗; 5: Calculate Fe with Eqn. (19); 6: // Synaptic Convergence 7: Learn θ with Eqn. (35); 8: Calculate FT with Eqn. (17); 9: Update F1:T with Eqn. (18); 10: end for
17

Table 4: Hyperparameter search for continual learning of visual classification tasks. We present the range of hyperparameter search and bold the selected hyperparameter. 1We follow the implementation of [10] for CUB-200 w/ PT. 2For AGS-CL [10], we make an extensive grid search of λ and μ. We follow [10] to choose ρ for the variants of CIFAR-100 and CUB-200 w/ PT, and make a grid search on CUB-200 w/o PT and ImageNet-100. 3For P&C [26], we make a grid search of the hyperparameter that controls the-
 EWC penalty. 4Since β is integrated into λe, AFEC only needs to make a grid search of λe while keeping λ the same as the corresponding weight regularization approaches.
Methods Hyperparameter CIFAR-100-SC CIFAR-100 CIFAR-10/100 1CUB-200 w/ PT CUB-200 w/o PT ImageNet-100
2AGS-CL [10]
λ 400, 800, 1600, 3200, 6400 400, 800, 1600, 3200 1000, 4000, 7000, 10000 1.5 0.0001, 0.001, 0.01, 0.1, 1, 1.5 0.0001, 0.001, 0.01, 0.1, 1, 1.5, 3 μ 5, 10, 20, 40 5, 10, 20 10, 20, 40 0.5 0.001, 0.01, 0.1, 0.5 0.0001, 0.001, 0.01, 0.1, 0.5 ρ 0.3 0.3 0.2 0.1 0.05, 0.1, 0.2 0.05, 0.1, 0.2 EWC [12] λ 10000, 20000, 40000, 80000 10000, 20000, 40000 10000, 25000, 50000, 100000 40 0.1, 1, 5, 10, 20, 40, 80 40, 80, 160, 320 3P&C [26] λ 10000, 20000, 40000, 80000 10000, 20000, 40000 10000, 25000, 50000, 10-
0000 40 0.1, 1, 10 40, 80, 160 MAS [1] λ 4, 8, 16, 32 2, 4, 8 1, 2, 5, 10 0.6 0.001, 0.01, 0.05, 0.5, 1.2 0.01, 0.03, 0.1, 0.3, 1 SI [36] λ 4, 8, 16, 32 2, 4, 8, 10, 20 0.7, 3, 6, 12 0.75 0.1, 0.2, 0.4, 0.75, 1.5 0.3, 1, 3, 10 RWALK [2] λ 64, 128, 256 1, 3, 6, 8 6, 12, 24, 48, 96 50 10, 25, 50, 100 0.3, 1, 3, 10 4 w/ AFEC (ours) λe 0.1, 1, 10 0.1, 1, 10 0.1, 1, 10 0.1, 0.01, 0.001, 0.0001 1, 0.1, 0.01, 0.001 0.01, 0.001, 0.0001
C Details of Visual Classification Tasks
C.1 Implementation
We follow the implementation of [10] for visual classification tasks with small-scale and large-scale images. For CIFAR-100-SC, CIFAR-100 and CIFAR-10/100, we use Adam optimizer with initial learning rate 0.001 to train all methods with mini-batch size of 256 for 100 epochs. For CUB-200 w/ PT, CUB-200 w/o PT and ImageNet-100, we use SGD with momentum 0.9 and initial learning rate 0.005 to train all methods with mini-batch size of 64 for 40 epochs. We make an extensive hyperparameter search of all -
methods and report the best performance for fair comparison. The range of hyperparameter search and the selected hyperparameter are summarized in Table 4. Due to the space limit, we include error bar (standard deviation) of the classification results in Table. 5.
C.2 Longer Task Sequence
We further evaluate AFEC on 50-split Omniglot [10]. The averaged accuracy of the first 25 tasks is 66.45% for EWC and 84.08% for AFEC, while the averaged accuracy of all the 50 tasks is 76.53% for EWC and 83.00% for AFEC, respectively. Therefore, AFEC can still effectively improve continual learning for a much larger number of tasks.
D ACC, FWT and BWT
We evaluate continual learning of visual classification tasks by three metrics: averaged accuracy (AAC), forward transfer (FWT) and backward transfer (BWT) [17].
AAC = 1
T
T
∑
i=1
AT,i, (36)
BWT = 1
T−1
T−1
∑
i=1
AT,i − Ai,i, (37)
FWT = 1
T−1
T
∑
i=2
Ai−1,i −  ̄Ai, (38)
where Aj,k is the test accuracy task k after continual learning of task j, and  ̄Ak is the test accuracy of each task k at random initialization. Averaged accuracy (ACC) is the averaged performance on all the tasks ever seen to evaluate the performance of both the old tasks and the new tasks.
Forward transfer (FWT) indicates the averaged influence that learning a task has on a future task, which can be either positive or negative. If a new task conflicts with the old tasks, negative transfer will substantially decrease the performance on the task sequence, which is a common issue for
18

Table 5: Averaged accuracy (%) of all the tasks learned so far in continual learning of visual classification tasks, averaged by 5 different random seeds with error bar (± standard deviation).
CIFAR-100-SC CIFAR-100 CIFAR-10/100 CUB-200 w/ PT CUB-200 w/o PT ImageNet-100
Methods A10 A20 A10 A20 A2 A2+20 A5 A10 A5 A10 A5 A10
Fine-tuning 32.58 ±1.41 28.40 ±0.78 40.92 ± 4.33 33.53 ±3.25 78.96 ±1.74 37.81 ±0.99 78.75 ±0.99 78.13 ±0.61 31.91 ±2.38 39.82 ±2.26 50.56 ± 1.97 44.80 ± 2.65 P&C [26] 53.48 ±2.79 52.88 ±1.68 70.10 ±1.22 70.21 ±1.22 86.72 ±1.33 78.29 ±0.74 81.42 ±1.72 81.74 ±1.10 33.88 ±4.48 42.79 ±3.29 76.44 ±1.65 74.38 ±1.61 AGS-CL [10] 55.19 ±2.09 53.19 ±1.04 71.24 ±0.77 69.99 ±1.06 86.27 ±0.79 80.42 ±0.19 82.30 ±0.38 81.84 ±0.51 32.69 ±3.45 40.73 ±2.82 51.48 ±1.74 47.20 ±2.05
EWC [12] 52.25 ±2.99 51.74 ±1.74 68.72 ±0.24 69.18 ±0.69 85.07 ±0.84 77.75 ±0.57 81.37 ±0.28 80.92 ±1.04 32.90 ±2.98 42.29 ±2.34 76.12 ±2.08 73.82 ±1.46 AFEC (ours) 56.28 ±3.27 55.24 ±1.61 72.36 ±1.23 72.29 ±1.07 86.87 ±0.78 81.25 ±0.23 83.65 ±0.55 82.04 ±0.77 34.36 ±4.39 43.05 ±3.00 77.64 ±1.80 75.46 ±1.30 MAS [1] 52.76 ±2.85 52.18 ±2.22 67.60 ±1.85 69.41 ±1.27 84.97 ±0.51 77.39 ±1.03 79.98 ±1.41 79.67 ±0.77 31.68 ±2.37 42.56 ±1.84 75.48 ±0.66 74.72 ±0.79 w/ AFEC (ours) 55.26 ±4.14 54.89 ±2.23 69-
.57 ±1.73 71.20 ±0.70 86.21 ±1.24 80.01 ±0.51 82.77 ±0.32 81.31 ±0.25 34.08 ±3.80 42.93 ±3.51 75.64 ±0.94 75.66 ± 1.33 SI [36] 52.20 ±4.37 51.97 ±2.07 68.72 ±1.11 69.21 ±0.77 85.00 ±2.52 76.69 ±2.11 80.14 ±0.88 80.21 ±0.89 33.08 ±4.05 42.03 ±3.06 73.52 ±1.35 72.97 ±1.85 w/ AFEC (ours) 55.25 ±3.43 53.90 ±2.31 69.34 ±1.87 70.13 ±1.36 85.71 ±1.08 78.49 ±0.89 83.06 ±0.82 81.88 ±0.73 34.04 ±3.40 43.20 ±2.50 75.72 ± 1.06 74.14 ±1.70 RWALK [2] 50.51 ±4.53 49.62 ±3.28 66.02 ±1.89 66.90 ±0.29 85.59 ±1.31 7-
3.64 ±1.53 80.81 ±0.90 80.58 ±0.83 32.56 ±3.76 41.94 ±2.35 73.24 ±1.45 73.22 ±1.14 w/ AFEC (ours) 52.62 ±2.61 51.76 ±1.72 68.50 ±1.80 69.12 ±0.96 86.12 ±0.94 77.16 ±0.66 83.24 ±0.46 81.95 ±0.41 33.35 ±2.44 42.95 ±1.59 74.64 ±1.38 73.86 ±1.54
existing continual learning strategies. Since AFEC aims to improve the learning of new tasks in continual learning, FWT should reflect this advantage.
Backward transfer (BWT) indicates the averaged influence that learning a new task has on the old tasks. Positive BWT exists when learning of a new task increases the performance on the old tasks. On the other hand, negative BWT exists when learning of a task decreases the performance on the old tasks, which is also known as catastrophic forgetting.
E Adapt AFEC to Representative Weight Regularization Approaches
Regular weight regularization approaches, such as EWC [12], MAS [1], SI [36] and RWALK [2], generally add a regularization (Reg) term to penalize changes of the important parameters for the old tasks. The loss function of such methods can be written as:
LReg(θ) = LB(θ) + λ
2
∑
i
ξA,i(θi − θ∗
A,i)2, (39)
where λ is the hyperparameter that explicitly controls the strength to remember task A, and ξA,i indicates the “importance” of parameter i to task A.
Through plugging-in the regularization term of active forgetting, AFEC can be naturally adapted to regular weight regularization approaches. Here we consider a simple adaptation, and validate its effectiveness in Table 2:
LReg w/ AFEC(θ) = LB(θ) + λ
2
∑
i
ξA,i(θi − θ∗
A,i)2 + λe
2
∑
i
Fe,i(θi − θ∗
e,i)2], (40)
where we learn the expanded parameters θe with LB(θe) to obtain θe∗, and calculate Fe with Eqn. (19).
F Adapt AFEC to Representative Memory Replay Approaches
Table 6: Plugging AFEC in representative memory replay approaches with their officially released codes. We present the averaged incremental accuracy (%) on CIFAR-100 and ImageNet-100.
CIFAR-100 ImageNet-100
Methods 5-phase 10-phase 5-phase 10-phase
iCaRL [21] 57.12 52.66 65.44 59.88
w/ AFEC (ours) 62.76 ±0.52 59.00 ±0.72 70.75 ±1.12 65.62 ±0.78
LUCIR [9] 63.17 60.14 70.84 68.32
w/ AFEC (ours) 64.47 ±0.46 62.26 ±0.29 73.38 ±0.78 70.20 ±0.84
PODNet [6] 64.83 63.19 75.54 74.33
w/ AFEC (ours) 65.86 ±0.75 63.79 ±0.86 76.90 ±0.82 75.80 ±0.90
Here we relax the restriction of accessing to old training data, and plug AFEC in representative memory replay approaches such as iCaRL [21], LUCIR [9] and PODNet [6] with single-head evaluation [2]. We follow the setting widely-used in the above memory replay approaches that the neural network first learns 50 classes and then continually learns the other 50 classes by 5 phases (10 classes per phase) or 10 phases (5 classes per phase) with a small memory buffer of 20 images per class [21, 9, 6]. W-
e implement AFEC in the officially released code of corresponding methods for
19

fair comparison. For CIFAR-100, we use ResNet32 and train each model for 160 epochs with minibatch size of 128 and weight decay of 5 × 10−4. For ImageNet-100, we use ResNet18 and train each model for 90 epochs with minibatch size of 128 and weight decay of 1 × 10−4. For all the datasets, we use a SGD optimizer with momentum of 0.9, initial learning rate of 0.1 and cosine annealing scheduling. As shown in Table 6, AFEC substantially boosts the performance of representative memory replay approaches-
 such as iCaRL [21], LUCIR [9] and PODNet [6].
G Details of Atari Reinforcement Tasks
G.1 Implementation
Figure 9: We use the same hyperparameters as [10] for Sequence 1: λ = 100000 for EWC, λ = 100, μ = 0.1 for AGS-CL. We use λ = 100000, λe =
100 for AFEC1 and λ = 10, λe = 100 for AFEC2.
The officially released code of [10] provided the implementations of EWC, AGS-CL and fine-tuning. We reproduce the above baselines, and implement MAS, AFEC1 and AFEC2 on it with the same hyperparameters of PPO [25] and training details. Specifically, we use Adam optimizer with the initial learning rate of 0.0003 and evaluate the normalized accumulated reward of all the tasks ever seen for 30 times during training each task. Also, we follow [10] to search the hyperparameters of AGS-CL (λ = 100, 100-
0; μ = 0.1, 0.125), EWC (λ = 10000, 25000, 100000) and MAS (λ = 1, 10).
We observe that the normalized rewards obtained in continual learning are highly unstable in different runs and random seeds for all the baselines, possibly because the optimal policies for Atari games are highly different from each other, which results in severe negative transfer. Thus, we average the performance for five runs with different random seeds to acquire consistent results, and evaluate three orders of the task sequence as below:
Sequence 1 (the original task order used in [10]): StarGunner - Boxing - VideoPinball - Crazyclimber - Gopher - Robotank - DemonAttack - NameThisGame
Sequence 2: DemonAttack - Robotank - Boxing - NameThisGame - StarGunner - Gopher - VideoPinball - Crazyclimber
Sequence 3: Crazyclimber - Robotank - Gopher - NameThisGame - DemonAttack - StarGunner Boxing - VideoPinball
G.2 Reproduced Results of AGS-CL
Unfortunately, the officially released code cannot reproduce the reported performance of AGS-CL [10]. For the reported performance, the normalized rewards of AGS-CL are significantly higher than EWC on Task 1 and Task 7, while are comparable with or slightly higher than EWC on the other six tasks. Thus, the reported accumulated performance of AGS-CL significantly outperforms EWC [10]. However, the officially released code cannot reproduce the advantage of AGS-CL on Task 1 and Task 7, so the reprod-
uced accumulated performance of AGS-CL only slightly outperforms EWC but underperforms both AFEC1 and AFEC2, as shown in Fig. 9.
20

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:43.025Z
- **Text Length:** 62284 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 20 of 20
