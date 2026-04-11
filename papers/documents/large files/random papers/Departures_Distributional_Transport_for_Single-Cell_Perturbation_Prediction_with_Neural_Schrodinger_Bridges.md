# PDF Document: Chi et al. - 2025 - Departures Distributional Transport for Single-Cell Perturbation Prediction with Neural Schrödinger.pdf

**File Path:** Chi et al. - 2025 - Departures Distributional Transport for Single-Cell Perturbation Prediction with Neural Schrödinger.pdf

**Processed Date:** 2026-02-10T18:16:54.171Z

**File Size:** 501.49 KB

**Total Pages:** 9

**Extracted Pages:** 9

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3710

**Title:** Departures: Distributional Transport for Single-Cell Perturbation Prediction with Neural Schrödinger Bridges

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Departures: Distributional Transport for Single-Cell Perturbation Prediction with Neural Schro ̈dinger Bridges
Changxi Chi1,2, Yufei Huang1,2, Jun Xia3, Jiangbin Zheng1,2, Yunfan Liu1,2, Zelin Zang4 and Stan Z. Li2
1Zhejiang University 2Westlake University 3The Hong Kong University of Science and Technology (Guangzhou) 4Centre for Artificial Intelligence and Robotics Hong Kong Institute of Science & Innovation, Chinese Academy of Sciences {12563057, huangyufei}@zju.edu.cn
Abstract
Predicting single-cell perturbation outcomes directly advances gene function analysis and facilitates drug candidate selection, making it a key driver of both basic and translational biomedical research. However, a major bottleneck in this task is the unpaired nature of single-cell data, as the same cell cannot be observed both before and after perturbation due to the destructive nature of sequencing. Although some neural generative transport models attempt to tackle unpaired single-cell perturbat-
ion data, they either lack explicit conditioning or depend on prior spaces for indirect distribution alignment, limiting precise perturbation modeling. In this work, we approximate Schro ̈dinger Bridge (SB), which defines stochastic dynamic mappings recovering the entropyregularized optimal transport (OT), to directly align the distributions of control and perturbed single-cell populations across different perturbation conditions. Unlike prior SB approximations that rely on bidirectional modeling -
to infer optimal source-target sample coupling, we leverage MinibatchOT based pairing to avoid such bidirectional inference and the associated ill-posedness of defining the reverse process. This pairing directly guides bridge learning, yielding a scalable approximation to the SB. We approximate two SB models, one modeling discrete gene activation states and the other continuous expression distributions. Joint training enables accurate perturbation modeling and captures single-cell heterogeneity. E-
xperiments on public genetic and drug perturbation datasets show that our model effectively captures heterogeneous single-cell responses and achieves state-of-the-art performance.
Code — https://github.com/ChangxiChi/Departures
Introduction
Genetic perturbation and drug perturbation constitute the two primary avenues for studying and modeling singlecell responses to perturbations. Genetic perturbations, predominantly based on CRISPR technologies (Barrangou and Doudna 2016; Lino et al. 2018), target specific genes to reveal their functional roles, enabling systematic dissection of gene regulatory mechanisms at single-cell resolution. Drug perturbations, by contrast, modulate molecular pathways
Copyright © 2026, Association for the Advancement of Artificial Intelligence (www.aaai.org). All rights reserved.
Other Unperturbed Cell
Unperturbed Cell Perturbed Cell
RNA-Seq
Perturbation
RNA-Seq
Figure 1: Single-cell perturbation data are unpaired as RNAseq is destructive.
through small-molecule compounds (Peidli et al. 2024), offering complementary insights into cellular responses and pharmacological effects. Together, these two perturbation strategies form the foundation of single-cell perturbation studies, providing mechanistic and translational perspectives on cell transitions under diverse experimental conditions. However, due to the high cost and limited scalability of single-cell experiments, it is impractical to measure all combinations of perturbations and -
cell types. This limitation highlights the need for computational models that can predict cellular responses under unseen perturbation conditions. A major challenge in this task is that single-cell perturbation data are inherently unpaired (Bunne et al. 2023; Chi et al. 2025a). This arises from the destructive nature of RNA sequencing, which requires cell lysis to release RNA content (Mortazavi et al. 2008), as illustrated in Fig. 1. As a result, it is impossible to observe the same cell under bot-
h control and perturbed conditions. Some studies (Bunne et al. 2023; Cao et al. 2024) attempt to address this unpaired nature, but their use of unconditional models limits generalization to unseen perturbation conditions. In contrast, (Chi et al. 2025a) incorporates gene regulatory network (GRN) priors to model the effects of perturbations, providing a biologically grounded representation of cellular responses. It then aligns control and perturbed cell populations using dual conditional diffusion -
models with a shared prior space, enabling accurate prediction under unseen perturbation conditions. However, by aligning distributions indirectly through the prior space, it bypasses the underlying physical energy landscape, leading to transition paths that deviate from energy-optimal trajectories and fail to capture ideal optimal transport (OT).
arXiv:2511.13124v1 [cs.LG] 17 Nov 2025

In this paper, we purpose Departures (Distributional Transport for Single-Cell Perturbation Prediction with Neural Schro ̈dinger Bridges), a generative framework designed to predict cellular gene expression under diverse genetic and molecular perturbation conditions. By directly aligning the distributions of control and perturbed cells, the framework captures population-level transitions without relying on potentially noisy explicit cell pairing or restrictive latent space alignment. This method -
reduces information loss, improves robustness to biological variability and noise, and provides a principled, scalable solution to the challenges posed by unpaired single-cell perturbation data.
While classical Schro ̈dinger Bridge methods typically rely on alternating forward and backward updates (R ̈uschendorf 1995; Shi et al. 2023) to iteratively refine the source-target node pairing between marginal distributions, the backward process is often ill-defined in conditional settings (Fig. 3) (Tamir, Trapp, and Solin 2023; Tang et al. 2024). Moreover, training two coupled models significantly increases computational cost and reduces scalability. To address this, we build upon Minibatch OT -
(Fatras et al. 2021; Tong et al. 2023) to directly enhance source-target sample coupling during training, without requiring alternating bidirectional model updates for pairing consistency. Built upon this alignment, we adopt bridge matching (Liu et al. 2022; Peluchetti 2023) to learn the Markovian projection (Gyo ̈ngy 1986), yielding a tractable approximation to the SB between control and perturbed distributions. To faithfully capture single-cell perturbation outcomes, we learn two SB models, the -
first models discrete gene activation states, and the second learns continuous expression dynamics. Joint training of these bridges enhances both biological fidelity and generative robustness. The main contributions of our work are as follows:
• We introduce Departures, a Schr ̈odinger Bridge-based generative model that directly aligns the distributions of control and perturbed cells. To better approximate the Schro ̈dinger Bridge, we use minibatch OT to compute source-target sample pairings that guide bridge matching training, eliminating the need for bidirectional iterative updates.
• To model single-cell responses to perturbations, we design two Schro ̈dinger bridge models, one for discrete gene activation and one for continuous expression, which are trained jointly to improve fidelity and robustness.
• We demonstrate the superiority of Departures over existing methods on publicly available genetic and molecular perturbation datasets.
Related Works and Preliminaries
Existing Perturbation Prediction Model
There are numerous methods designed to predict singlecell perturbation responses, encompassing both genetic and drug-induced perturbations. These methods typically employ either generative models (Lotfollahi, Wolf, and Theis 2019; Hetzel et al. 2022; Wu et al. 2022; Bereket and
Karaletsos 2024; Cui et al. 2024) or regression-based approaches (Roohani, Huang, and Leskovec 2024; He et al. 2024; Chi et al. 2025b). However, many of these models overlook the inherently unpaired nature of single-cell perturbation data and fail to explicitly model the relationship between control and perturbed samples. While a few studies have addressed the unpaired nature of the data (Bunne et al. 2023; Cao et al. 2024), their reliance on unconditional models limits their ability to generalize-
 to unseen perturbation settings. (Chi et al. 2025a) addresses this by incorporating gene regulatory network (GRN) priors to model perturbation effects, and aligning control and perturbed cell populations via dual conditional diffusion models that share a common prior space. Additionally, a regression-based mask model is introduced to predict gene expression status, thereby improving generation quality. However, this implicit alignment bypasses the true physical energy landscape, resulting in tran-
sitions that deviate from energy-optimal trajectories and fail to recover the ideal OT. Moreover, the mask model is trained separately, leading to suboptimal efficiency.
Schro ̈dinger Bridges
The path measure space P(C) refers to the space of probability measures over continuous trajectories x : [0, T ] → Rd, that is, P(C) = P(C([0, T ], Rd)). The Schro ̈dinger Bridge (SB) problem (Schro ̈dinger 1932) seeks a stochastic process P∗ ∈ P(C) that evolves between two given marginal distributions π0 and πT , while staying close to a reference process Q ∈ P(C). It is formulated as:
P∗ = argminP∈P(C){KL(P|Q) : P0 = π0, PT = πT } (1)
The SB is an entropy-regularized dynamic Optimal Transport problem. Its path distribution implicitly defines an optimal pairing between nodes at the endpoints. A common approach to solving this problem is Iterative Proportional Fitting (IPF,(Ru ̈schendorf 1995)), which alternates KL projections onto path measures with fixed initial or terminal marginals. However, it enforces marginal consistency without explicitly modeling the bridge dynamics. In contrast, following the formulation in (Shi et al. -
2023), the reference process Q is defined by a diffusion dXt = ft(Xt)dt + σtdBt, with X0 ∈ Q0 = π0 and (Bt)t∈[0,T ] is Brownian motion. To enforce QT also matches πT , we construct a diffusion bridge Q|0,T (·|x0, xT ) using Doob’s h-transform (Rogers and Williams 2000), such that it is conditioned to start at x0 and end at xT :
dX0,T
t = {ft(X0,T
t ) + σ2
t ∇logQT |t(xT |X0,T
t )}dt + σtdBt (2) where X0,T
0 = x0. Given Π0,T = π0 ⊗ πT and Π = Π0,T Q|0,T , our goal is to find a Markov process dYt = {ft(Yt) + vt(Yt)}dt + σtdBt. The implicit analytical solution of this problem is given by: v∗
t (xt) = σ2
t EΠT |t [∇logQT |t(XT |Xt)|Xt = xt] (3)
which corresponds to the Markovian projection (Gyo ̈ngy 1986). When ft = 0 and σt = σ, Q|0,T is a Brownian Bridge, and we have:
X0,T
t =t
T xT + (1 − t
T )x0 + σ(Bt − t
T BT ) (4)

Source Domain π0ct
Target Domain
πcTt,P
Continuous
Discrete Discrete
Continuous
Bridge Matching
Time t
reference bridge
Matching
generated bridge
∈ π0ct ∈ πcTt,P endpoint of generated bridge
Figure 2: Overview of Departures. Conditioned on cell type ct, the model learns the distributional transition of single-cell gene expression profiles from the control population π0ct to perturbed population πct,P
T . The problem is formulated by decoupling
into two components: (1) modeling the distributional shift of gene expression levels before and after perturbation (Continuous), and (2) modeling the distributional shift of gene activation status induced by perturbation (Discrete).
dX0,T
t = {(xT − X0,T
t )/(T − t)}dt + σdBt (5) with (Bt − t
T BT ) ∼ N (0, t(1− t
T )Id), and Bt is a standard
Brownian motion. The objective of the model vθ is to predict vt∗. Specifically, the bridge matching (Peluchetti 2023; Liu et al. 2022) operation learns the Markovian projection by optimizing the following objective:
EΠt,T [||(XT − Xt)/(T − t) − vθ(t, Xt)||2] (6)
To generate sample paths of the continuous bridge process, we implement the dynamics using the Euler–Maruyama method (Heng et al. 2025), a standard numerical scheme for approximating solutions to stochastic differential equations (SDEs). Based on the above, Iterative Markovian Fitting (IMF, (Shi et al. 2023)) is an algorithm designed to approximate Schro ̈dinger bridges by alternating between Markovian projection and Reciprocal projection (Jamison 1970). It employs two time-symmetric models to mat-
ch the marginals at both ends of the path, iteratively refining their source-target sample coupling to approximate SB. However, learning both forward and backward models is challenging due to the inherently one-directional nature of perturbations.
Methodology
We introduce the proposed model Departures in this section. The overview is shown in Fig. 2. Specifically, Departures learns the distributional transition mapping from control to perturbed samples, modeling both gene expression levels (Continuous) and gene activation states (Discrete) via bridge matching. To approximate the SB without requiring two time-reversal models, the node-level pairing is optimized using Minibatch OT (Fatras et al. 2021; Tong et al. 2023).
Problem Statement
In single-cell perturbation prediction, the objective is to infer the gene expression profile of a specific cell type ct under a given perturbation condition P . These conditions may stem from either genetic interventions or treatments with smallmolecule compounds. For genetic perturbations, the condition is typically specified by the names of targeted genes, corresponding to gene knockout experiments. In contrast, small-molecule perturbations are characterized by the drug’s chemical structure alo-
ng with its administered dosage. In our setting, instead of estimating a population-level summary (e.g., mean), the model generates a batch of samples under the given condition condition, aiming to represent the underlying distribution.
Distribution Transfer of Continuous Gene Expression
Suppose under cell type ct and perturbation condition P , we obtain a pairing (x0, xT ) ∼ γ, γ ∈ Π(π0ct, πct,P
T ), where
each x0, xT ∈ RN denotes a gene expression vector of a single cell, with x0 sampled from the control distribution π0,
and xT sampled from the perturbed distribution πP
T . A detailed discussion of the joint distribution γ is provided later. To learn the transition between distributions, it is necessary to build bridges between x0 and xt. Specifically, we construct a diffusion bridge using the Doob’s h-transform (Rogers and Williams 2000), following the assumption in (Liu et al. 2022; Shi et al. 2023) that ft = 0 and σt = σ. Referring to Eq. 4, we have:
x0,T
t =t
T xT + (1 − t
T )x0 + σ(Bt − t
T BT ) (7)
where t ∈ [0, T ], Bt ∼ N(0, Id), and (Bt − t
T BT ) ∼
N(0, t(1 − t
T )Id).

The continuous bridge dynamics between the initial state and the fixed terminal point xT are described by the stochastic differential equation (SDE):
dx0,T
t = vtdt + σdBt, dBt ∼ N (0, Id) (8)
where vt = (xT − x0,T
t )/(T − t), σ denotes noise scale, and z ∼ N (0, 1). Our objective is to train the model to learn the time-dependent drift term of this SDE, whose analytical solution is given by Eq. 3, as guided by the vt prediction loss function in Eq. 6. In practice, sample paths of this SDE are generated by discretizing it using the Euler–Maruyama method (Heng et al. 2025). Rather than regressing the velocity field vt directly, we instead predict the endpoint xT , which can be equivalently transformed to the -
drift vt. This alternative formulation leads to more stable optimization and reduced numerical error (Huang et al. 2024). Moreover, due to the sparsity of gene expression data, directly computing the loss over all genes can lead to mode collapse (Chi et al. 2025a). To address this, we compute the loss only over genes with non-zero expression after perturbation. A separate module for predicting gene expression status will be introduced in a later section. As a result, the model xθ focuses on expres-
sed genes during training. The final objective function is defined as follows:
Lcont = Et,(x0,xT )∼γ
"
||dT ⊙ (xT − xθ(t, x0,T
t , ct, P ))||2
P
i dT,i
#
(9) where ⊙ denotes Hadamard Product, dT ∈ {0, 1}N is a binary mask vector defined as:
dT,i = 1, if xT,i ̸= 0
0, otherwise (10)
Distribution Transfer of Discrete Gene Status
As previously mentioned, gene expression data are highdimensional and sparse. To prevent the model from treating all genes equally and thus causing mode collapse, we apply a mask to the loss in Eq. 9 based on the true gene expression status at the endpoint. Therefore, it is necessary to train a separate module capable of accurately predicting whether a gene is expressed or not. Given a pairing (x0, xT ) ∼ γ, we convert it into discrete labels (d0, dT ) ∼ γd using Eq. 10. However, in the discrete s-
etting, directly applying the interpolation in Eq.7 to the discrete labels is not meaningful, as the labels represent categorical states rather than continuous values. We define the intermediate states of the bridge process as stochastic mixtures of the two endpoints according to the following distribution:
dt,i = xT,i with prob = κ(t)
x0,i with prob = (1 − κ(t)) (11)
where we set κ(t) = t
T is monotonic increasing with κ(0) =
0 and κ(T ) = 1. This process captures the discrete interpolation from the initial state to the terminal state by randomly selecting each coordinate from x0 or xT according to κ(t).
Perturbation
Unperturbed Cell Perturbed Cell
Perturbation
Figure 3: Perturbations induce natural, directional transitions from control to treated states. In contrast, reconstructing control states from perturbed ones is ill-posed, and training a backward model adds significant computational overhead.
Unlike diffusion bridges in continuous spaces governed by SDE, the discrete bridge corresponds to a continuoustime Markov chains (CTMC, (Campbell et al. 2024; Gat et al. 2024)) on discrete space characterized by the transition probability:
pt+h|t(dt+h|dt) = δ(dt+h, dt)+hut(dt+h, dt)+o(h) (12)
where dt, dt+h ∈ {0, 1}N , δ is Kronecker delta function, and ut(dt+h, dt) represents transition rate from dt to dt+h. Our goal is to learn the transition rate function ut, which fully characterizes the dynamics of the CTMC. As shown in (Lipman et al. 2024), this can be achieved by learning the conditional distribution pT |t as:
ut(dt+h, dt) = EdT
"
κ(t)
1 − κ(t) δ(dt+h, dT ) − δ(dt+h, dt)
× pT |t(dT |dt)
#
(13)
with pT |t(dT |dt) = E(d0,dT )∼γd p0,1|t(d0, dT |dt). We aim to approximate this conditional posterior pT |t(·|dt) using a parameterized neural network. Intuitively, learning the posterior transition probabilities pT |t(·|dt) is correspond to the conditional distribution of the bridge’s terminal state given the intermediate state. The objective function is as follows:
Ldisc = Et,(d0,dT )∼γd [D(dT , dθ(t, dt, ct, P ))] (14)
where D(·, ·) denotes the cross-entropy loss between the true discrete state dT and the prediction.
Initialization Pairing for Schro ̈dinger Bridge
We now discuss the joint distribution γ. As introduced earlier, IMF(Shi et al. 2023) employs two time-symmetric neural networks to model the forward and backward processes, matching the marginal distributions at both ends of the trajectory through Markovian projection and reciprocal projection. A core design goal of IMF is to reduce error accumulation during node rectification, where the joint distribution γ is iteratively updated. By obtaining higher-quality pairing

between nodes from γ, it subsequently facilitates the learning of the diffusion bridge. Through iterative optimization, the process converges to the true SB. However, a major obstacle in applying IMF to conditional generation tasks is the need to learn models in both forward and backward directions. The backward process of generating from the perturbed distribution back to the control distribution is ill-defined (Fig. 3), which makes bidirectional training impractical (Tamir, Trapp, and Solin 202-
3; Tang et al. 2024). To address this problem, we draw inspiration from Minibatch OT (Fatras et al. 2021; Tong et al. 2023) to construct local OT pairings by selecting subsets of control samples for all samples under each perturbation condition. Specifically, under perturbation conditon P and cell type ct, we obtain a batch of perturbed cell samples {x(i)
T }B
i=1. Correspondingly,
we sample an equal number of control samples {x(i)
0 }B
i=1
from the same cell type ct to serve as the source for pairing. Then we compute an optimal transport (OT) plan πbatch between these two sets of samples using the Sinkhorn algorithm (Cuturi 2013), which efficiently solves the entropically regularized OT problem. The OT plan defines a joint distribution over matched pairs (x(j)
0 , x(i)
T ) that approximately minimizes the transport cost within each batch. Based on these pairs, we apply Eq. 10 to derive the corresponding discrete gene activation states (d(j)
0 , d(i)
T ). The continuous and discrete pairings define the endpoints of the bridge, guiding the model to learn Markovian projections via bridge matching (Eq. 9, Eq. 14), thereby approximating the Schro ̈dinger Bridge.
Implementation and Generation
Before training, we perform log1p normalization on the gene expression matrix using Scanpy (Wolf, Angerer, and Theis 2018), followed by the selection of the top N highly variable genes (HVGs). In modeling various perturbation conditons, we adopt the approach of (Chi et al. 2025a), which incorporates the Gene Regulation Network (GRN) to model perturbation conditions. During training, we initialize the sourcetarget sample couplings at the beginning of each epoch using the strategy described in the f-
or Schro ̈dinger bridge Section. We jointly train the model xθ predicting changes in continuous gene expression values and the model dθ predicting changes in discrete gene activation status introduced above, with the following loss function:
L = Lcont + Ldisc (15)
In predicting the perturbation results, we perform sampling separately from the two models to obtain predictions of gene expression values xˆT and gene activation states dˆT . Specifically, when predicting perturbation outcomes of cells of type ct under perturbation condition P , we iteratively generate the results according to the following procedure, as introduced in Eq. 8:
dxt = (xθ(t, xt, ct, P ) − xt)
(T − t) dt + σdBt (16)
where at time t = 0, x0 denotes a sample drawn from the control group of the same cell type ct, and at time t = T , xT = xˆT represents the final predicted outcome. When predicting the discrete activation states of genes, we follow (Lipman et al. 2024) and define the conditional transition probability of moving from state dt at time t to the next state after a small increment h as follow:
pt+h|t(·|dt) = dt + h × dθ(t, dt, ct, P )
T − t (17)
where d0 denotes the discrete initial state representing gene activation of a control sample of cell type ct. The next state dt+h is then sampled from the distribution pt+h|t(·|dt), and by iteratively applying this sampling procedure over time steps, the final predicted discrete activation state dT = dˆT is obtained. In practice, to generate predictions, we first sample a real control group example x0 from cell ct and its corresponding discretized state d0 (Eq. 10) as the respective starting point-
s for the continuous and discrete models. We then perform iterative sampling using Eq. 16 and Eq. 17 to obtain xˆT and dˆT . The final predicted outcome x ̃T is given by:
x ̃T = xˆT ⊙ dˆT (18)
where ⊙ denotes Hadamard Product.
Experiments and Results Dataset
In the main experiments, we leverage diverse datasets covering both genetic and chemical perturbations to evaluate our method, including the Adamson CRISPR knockout dataset (Adamson et al. 2016) and the sci-Plex3 chemical perturbation dataset (Srivatsan et al. 2020). The Adamson dataset comprises gene expression profiles from 87 distinct singlegene perturbations in a single cell type, while the sci-Plex3 dataset spans 187 chemical perturbations across four dosage levels and three different cell ty-
pes. Each perturbation condition in both datasets is represented by the average profile of hundreds of single cells, ensuring robust statistical coverage. We consider 5,000 genes in the Adamson dataset and 2,000 genes in sci-Plex3, providing a rich and representative foundation for model training and evaluation. By evaluating our model across different perturbation modalities and biological settings, we demonstrate its broad applicability and effectiveness.
Experiment Settings
We conduct experiments on two widely-used datasets in the single-cell perturbation modeling field, Adamson (Adamson et al. 2016) and SciPlex3 (Srivatsan et al. 2020). For the Adamson dataset, we randomly split the perturbed genes into 70% for training and 30% for testing across all gene perturbation types. All control group cells are included in the training set. For the SciPlex3 dataset, all control group cells are included in the training set. For each experimental condition (defined by a unique-
 combination of drug, dosage, and cell type), we assign the entire group of corresponding cells to the test set with a 30% probability; otherwise, it is

Dataset Methods All DE20 DE40
E-distance(↓) EMD(↓) E-distance(↓) EMD(↓) E-distance(↓) EMD(↓)
Adamson
GRAPE 0.7905
±0.0484
0.0444 ±0.0024
0.7514 ±0.0575
0.1528 ±0.0234
0.7648 ±0.0565
0.1503 ±0.0182
GEARS 0.8721
±0.1304
0.0531 ±0.0027
0.7884 ±0.1245
0.1298 ±0.0324
0.7935 ±0.0544
0.1221 ±0.0231
GraphVCI 1.3182
±0.9763
0.3026 ±0.1953
2.4499 ±0.2446
1.2457 ±0.5183
2.6327 ±0.4950
1.0801 ±0.0866
scGPT 2.1368
±0.0441
0.1724 ±0.0355
1.2571 ±0.3373
0.3895 ±0.1032
1.4484 ±0.3087
0.3781 ±0.0866
Departures (Ours) 0.5955
±0.1212
0.0356 ±0.0053
0.5028 ±0.1942
0.0953 ±0.0487
0.5243 ±0.2243
0.1013 ±0.0442
sci-Plex3
chemCPA 0.7847
±0.1029
0.0838 ±0.0081
0.4717 ±0.1571
0.1836 ±0.0358
0.5008 ±0.1659
0.1784 ±0.0261
CPA 0.9894
±0.1336
0.1357 ±0.0461
0.9737 ±0.9768
0.3761 ±0.0667
1.0794 ±1.1890
0.3856 ±0.0387
GraphVCI 0.8393
±0.1823
0.0986 ±0.0108
0.4958 ±0.1275
0.2016 ±0.0379
0.5174 ±0.1347
0.1861 ±0.0288
Departures (Ours) 0.5478
±0.1461
0.0254 ±0.0051
0.2764 ±0.1246
0.0623 ±0.0317
0.2827 ±0.1113
0.0565 ±0.0340
Table 1: Performance comparison on Adamson and sci-Plex3 datasets, evaluated using E-distance and EMD on all genes, top 20, and top 40 differentially expressed (DE) genes.
assigned to the training set. We select the top 5,000 highly variable genes (HVGs) for the Adamson dataset and the top 2,000 HVGs for the SciPlex3 dataset. All baseline methods are evaluated using the same gene selection to ensure a fair comparison. The model is trained using the AdamW (Loshchilov 2017) optimizer with a learning rate of 0.001 and a batch size of 64. During inference, we use 50 uniformly spaced time steps in Eq. 16 and Eq. 17 (i.e., a step size of 0.02). We set the noise scale σ in-
 Eq. 16 to 0.2. All our method and its competitors are conducted using two Nvidia A100 GPU. For evaluation, we follow previous work and adopt distribution-aware metrics to account for the strong heterogeneity observed in single-cell data. Specifically, we use Energy Distance (E-distance) to capture overall distributional alignment by considering both inter-group and intra-group distances, and Earth Mover’s squared Distance (EMD) to quantify gene-level shifts by measuring the minimal cost to align -
predicted and true distributions. These metrics together provide a comprehensive and robust assessment of model performance at both the population and gene levels. Detailed computation procedures can be found in the Appendix.
Departures Outperform Existing Methods
To assess the effectiveness of our model in predicting gene expression under perturbations, we compare it against several baseline methods, including GraphVCI (Wu et al. 2022), scGPT (Cui et al. 2024), CPA (Lotfollahi et al. 2023), chemCPA (Hetzel et al. 2022), GEARS (Roohani, Huang, and Leskovec 2024), and GRAPE (Chi et al. 2025b). For regression-based methods (GEARS and GRAPE), we augment their outputs by adding the predicted gene expression changes to different control samples. This promotes di-
ver
True Pred
Figure 4: Violin plots comparing predicted and actual expression levels of the top differentially expressed (DE) genes under the TMEM167A knockout condition, which was unseen during training, from the Adamson dataset.
sity in the generated profiles and ensures a more equitable comparison. Table 1 shows that Departures outperforms graphVCI, scGPT, GEARS, GRAPE, which rely on forced pairing of perturbed and unperturbed cells during training. This forced matching can limit the model’s ability to capture true biological variability and cell heterogeneity. Although GEARS and GRAPE inherit control group variability by adding a fixed predicted delta to control samples, this approach does not fully translate the contro-
l group’s diversity into the predicted results. Because they do not condition their predictions on the starting point information, their performance is inferior to that of Departures. Methods such as (Hetzel et al. 2022) and (Lotfollahi et al.

UMAP2
UMAP1
UMAP2
UMAP1 true pred
Figure 5: UMAP visualization of predicted and actual gene activation states. The left panel shows results for the unseen HSD17B12 perturbation condition from the Adamson test set. The right panel presents predictions for a held-out perturbation (compound Sodium – dosage 0.001 – cell type MCF7) from the sciplex3 test set.
2023) focus solely on reconstructing perturbed cells without modeling the transitional dynamics from unperturbed states. By relying only on predictions of mean and variance, these approaches oversimplify the perturbation process, limiting their ability to capture the inherent complexity and heterogeneity of cellular responses. In contrast, our model starts from the initial state and guides the state transitions through the learned Schro ̈dinger bridge dynamics. Moreover, as illustrated in Fig. 4, -
our model accurately captures the distribution of top differentially expressed (DE) genes after perturbation.
Adamson sciplex3 PCC all 0.9910±0.0078 0.9652±0.0690 PCC DE20 0.9515±0.0685 0.9437±0.0969 PCC DE40 0.9493±0.0716 0.9520±0.0722
Table 2: Pearson correlation coefficients (PCC) between the predicted gene activation probabilities after perturbation and the true probabilities.
Discrete Model Effectively Captures Gene Activation States
To evaluate the effectiveness of our discrete bridge model in predicting gene activation states after perturbation, we showcase the Pearson correlation coefficients (PCC) between predicted and true gene activation probabilities in Table 2. Specifically, under each perturbation condition, we first predict the activation states of k cells {dˆ(i)
T }k ∈
{0, 1}k×N using Eq. 17, and then compute gene-wise activation probabilities. Similarly, we estimate the ground-truth activation probabilities from the real cell samples under the same condition, and compute the PCC between predicted and true probabilities. Additionally, we visualize the predicted gene activation states of individual cells in Fig. 5. The high PCCs and visualization results show strong alignment between predicted and actual gene activation states.
E−distance
EMD!
All DE20 DE40
All DE20 DE40
w/o Discrete
w/o OT
OT cosine
OT euclidean
Figure 6: Ablation study results on Adamson.
Ablation Study
To further evaluate the effectiveness of Departures, we compare it with the following methods through an ablation study. 1)w/o Discrete: Only uses a single model to capture continuous gene expression, without discrete discrete activation prediction model. 2)w/o OT: Node pairing is performed without Minibatch-OT based pairing, relying on random pairing instead. 3)OT cosine: Uses cosine similarity as the transport cost when computing the OT-based pairing between unperturbed and perturbed distributio-
ns. 4)OT euclidean: Uses Euclidean distance as the transport cost when computing the OT-based pairing between unperturbed and perturbed distributions. The results are shown in Fig.6. Experimental results show that modeling gene activation with a discrete model plays a crucial role in accurately predicting gene expression. It helps the prediction focus on important genes rather than overfitting sparse regions, thereby preventing mode collapse. Besides, OT-based pairing, inspired by the Schro ̈dinge-
r Bridge, outperforms random pairing by learning a probabilistically consistent transport plan that better captures biological transitions.
Conclusion
In this work, we present Departures, a generative framework for distribution-level prediction of single-cell responses under various perturbation conditions, via an approximation of the Schro ̈dinger Bridge. Considering that the reverse process of conditional generation under gene perturbation is ill-posed, we employ Minibatch-OT to obtain a relatively better source-target sample coupling. This approach avoids the need to learn bidirectional conditional models with iterative pairing updates as bef-
ore. Based on this pairing, we learn two Markovian projections through bridge matching, one capturing discrete gene activation patterns and the other modeling continuous expression changes. Together, these enhance biological fidelity and generative robustness, enabling an efficient approximation of the Schro ̈dinger Bridge. This approach learns distributional transitions between pre- and post-perturbation cells, effectively addressing the unpaired nature of single-cell perturbation data. By integr-
ating gene regulatory priors and jointly modeling discrete and continuous dynamics, it improves biological fidelity and prediction accuracy, offering a new paradigm for single-cell perturbation modeling.

Acknowledgments
This work was supported by National Science and Technology Major Project (No. 2022ZD0115101), National Natural Science Foundation of China Project (No. 623B2086), National Natural Science Foundation of China Project (No. U21A20427), Project (No. WU2022A009) from the Center of Synthetic Biology and Integrated Bioengineering of Westlake University, and the Zhejiang Province Selected Funding for Postdoctoral Research Projects (ZJ2025113).
References
Adamson, B.; Norman, T. M.; Jost, M.; Cho, M. Y.; Nun ̃ez, J. K.; Chen, Y.; Villalta, J. E.; Gilbert, L. A.; Horlbeck, M. A.; Hein, M. Y.; et al. 2016. A multiplexed single-cell CRISPR screening platform enables systematic dissection of the unfolded protein response. Cell, 167(7): 1867–1882.
Barrangou, R.; and Doudna, J. A. 2016. Applications of CRISPR technologies in research and beyond. Nature biotechnology, 34(9): 933–941.
Bereket, M.; and Karaletsos, T. 2024. Modelling cellular perturbations with the sparse additive mechanism shift variational autoencoder. Advances in Neural Information Processing Systems, 36.
Bunne, C.; Stark, S. G.; Gut, G.; Del Castillo, J. S.; Levesque, M.; Lehmann, K.-V.; Pelkmans, L.; Krause, A.; and Ra ̈tsch, G. 2023. Learning single-cell perturbation responses using neural optimal transport. Nature methods, 20(11): 1759–1768.
Campbell, A.; Yim, J.; Barzilay, R.; Rainforth, T.; and Jaakkola, T. 2024. Generative flows on discrete state-spaces: Enabling multimodal flows with applications to protein codesign. arXiv preprint arXiv:2402.04997.
Cao, Y.; Zhao, X.; Tang, S.; Jiang, Q.; Li, S.; Li, S.; and Chen, S. 2024. scButterfly: a versatile single-cell crossmodality translation method via dual-aligned variational autoencoders. Nature Communications, 15(1): 2973.
Chi, C.; Xia, J.; Huang, Y.; Zhou, J.; Li, S.; Liu, Y.; Yu, C.; and Li, S. Z. 2025a. Unlasting: Unpaired Single-Cell MultiPerturbation Estimation by Dual Conditional Diffusion Implicit Bridges. arXiv preprint arXiv:2506.21107.
Chi, C.; Xia, J.; Zhou, J.; Cheng, J.; Yu, C.; and Li, S. Z. 2025b. GRAPE: Heterogeneous Graph Representation Learning for Genetic Perturbation with Coding and NonCoding Biotype. arXiv preprint arXiv:2505.03853.
Cui, H.; Wang, C.; Maan, H.; Pang, K.; Luo, F.; Duan, N.; and Wang, B. 2024. scGPT: toward building a foundation model for single-cell multi-omics using generative AI. Nature Methods, 21(8): 1470–1480.
Cuturi, M. 2013. Sinkhorn distances: Lightspeed computation of optimal transport. Advances in neural information processing systems, 26.
Fatras, K.; Zine, Y.; Majewski, S.; Flamary, R.; Gribonval, R.; and Courty, N. 2021. Minibatch optimal transport distances; analysis and applications. arXiv preprint arXiv:2101.01792.
Gat, I.; Remez, T.; Shaul, N.; Kreuk, F.; Chen, R. T.; Synnaeve, G.; Adi, Y.; and Lipman, Y. 2024. Discrete flow matching. Advances in Neural Information Processing Systems, 37: 133345–133385.
Gyo ̈ngy, I. 1986. Mimicking the one-dimensional marginal distributions of processes having an Itoˆ differential. Probability theory and related fields, 71(4): 501–516.
He, S.; Zhu, Y.; Tavakol, D. N.; Ye, H.; Lao, Y.-H.; Zhu, Z.; Xu, C.; Chauhan, S.; Garty, G.; Tomer, R.; et al. 2024. Squidiff: Predicting cellular development and responses to perturbations using a diffusion model. bioRxiv, 2024–11.
Heng, J.; De Bortoli, V.; Doucet, A.; and Thornton, J. 2025. Simulating diffusion bridges with score matching. Biometrika, asaf048.
Hetzel, L.; Boehm, S.; Kilbertus, N.; Gu ̈nnemann, S.; Theis, F.; et al. 2022. Predicting cellular responses to novel drug perturbations at a single-cell resolution. Advances in Neural Information Processing Systems, 35: 26711–26722.
Huang, Y.; Zhang, O.; Wu, L.; Tan, C.; Lin, H.; Gao, Z.; Li, S.; Li, S.; et al. 2024. Re-Dock: towards flexible and realistic molecular docking with diffusion bridge. arXiv preprint arXiv:2402.11459.
Jamison, B. 1970. Reciprocal processes: The stationary Gaussian case. The Annals of Mathematical Statistics, 41(5): 1624–1630.
Lino, C. A.; Harper, J. C.; Carney, J. P.; and Timlin, J. A. 2018. Delivering CRISPR: a review of the challenges and approaches. Drug delivery, 25(1): 1234–1257.
Lipman, Y.; Havasi, M.; Holderrieth, P.; Shaul, N.; Le, M.; Karrer, B.; Chen, R. T.; Lopez-Paz, D.; Ben-Hamu, H.; and Gat, I. 2024. Flow matching guide and code. arXiv preprint arXiv:2412.06264.
Liu, X.; Wu, L.; Ye, M.; and Liu, Q. 2022. Let us build bridges: Understanding and extending diffusion generative models. arXiv preprint arXiv:2208.14699.
Loshchilov, I. 2017. Decoupled weight decay regularization. arXiv preprint arXiv:1711.05101.
Lotfollahi, M.; Klimovskaia Susmelj, A.; De Donno, C.; Hetzel, L.; Ji, Y.; Ibarra, I. L.; Srivatsan, S. R.; Naghipourfar, M.; Daza, R. M.; Martin, B.; et al. 2023. Predicting cellular responses to complex perturbations in high-throughput screens. Molecular systems biology, 19(6): e11517.
Lotfollahi, M.; Wolf, F. A.; and Theis, F. J. 2019. scGen predicts single-cell perturbation responses. Nature methods, 16(8): 715–721.
Mortazavi, A.; Williams, B. A.; McCue, K.; Schaeffer, L.; and Wold, B. 2008. Mapping and quantifying mammalian transcriptomes by RNA-Seq. Nature methods, 5(7): 621628.
Peidli, S.; Green, T. D.; Shen, C.; Gross, T.; Min, J.; Garda, S.; Yuan, B.; Schumacher, L. J.; Taylor-King, J. P.; Marks, D. S.; et al. 2024. scPerturb: harmonized single-cell perturbation data. Nature Methods, 21(3): 531–540.
Peluchetti, S. 2023. Non-denoising forward-time diffusions. arXiv preprint arXiv:2312.14589.

Rogers, L. C. G.; and Williams, D. 2000. Diffusions, Markov processes, and martingales, volume 2. Cambridge university press.
Roohani, Y.; Huang, K.; and Leskovec, J. 2024. Predicting transcriptional outcomes of novel multigene perturbations with GEARS. Nature Biotechnology, 42(6): 927–935.
Ru ̈schendorf, L. 1995. Convergence of the iterative proportional fitting procedure. The Annals of Statistics, 11601174.
Schro ̈dinger, E. 1932. Sur la the ́orie relativiste de l’e ́lectron et l’interpre ́tation de la me ́canique quantique. In Annales de l’institut Henri Poincar ́e, volume 2, 269–310.
Shi, Y.; De Bortoli, V.; Campbell, A.; and Doucet, A. 2023. Diffusion schro ̈dinger bridge matching. Advances in Neural Information Processing Systems, 36: 62183–62223.
Srivatsan, S. R.; McFaline-Figueroa, J. L.; Ramani, V.; Saunders, L.; Cao, J.; Packer, J.; Pliner, H. A.; Jackson, D. L.; Daza, R. M.; Christiansen, L.; et al. 2020. Massively multiplex chemical transcriptomics at single-cell resolution. Science, 367(6473): 45–51.
Tamir, E.; Trapp, M.; and Solin, A. 2023. Transport with support: Data-conditional diffusion bridges. arXiv preprint arXiv:2301.13636.
Tang, Z.; Hang, T.; Gu, S.; Chen, D.; and Guo, B. 2024. Simplified diffusion schr\” odinger bridge. arXiv preprint arXiv:2403.14623.
Tong, A.; Fatras, K.; Malkin, N.; Huguet, G.; Zhang, Y.; Rector-Brooks, J.; Wolf, G.; and Bengio, Y. 2023. Improving and generalizing flow-based generative models with minibatch optimal transport. arXiv preprint arXiv:2302.00482.
Wolf, F. A.; Angerer, P.; and Theis, F. J. 2018. SCANPY: large-scale single-cell gene expression data analysis. Genome biology, 19: 1–5.
Wu, Y.; Barton, R. A.; Wang, Z.; Ioannidis, V. N.; De Donno, C.; Price, L. C.; Voloch, L. F.; and Karypis, G. 2022. Predicting cellular responses with variational causal inference and refined relational information. arXiv preprint arXiv:2210.00116.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:54.171Z
- **Text Length:** 41251 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 9 of 9
