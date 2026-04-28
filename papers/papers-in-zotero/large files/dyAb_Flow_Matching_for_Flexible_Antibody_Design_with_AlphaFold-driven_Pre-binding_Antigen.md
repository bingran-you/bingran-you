# PDF Document: Tan et al. - 2025 - dyAb Flow Matching for Flexible Antibody Design with AlphaFold-driven Pre-binding Antigen.pdf

**File Path:** Tan et al. - 2025 - dyAb Flow Matching for Flexible Antibody Design with AlphaFold-driven Pre-binding Antigen.pdf

**Processed Date:** 2026-02-10T18:15:19.044Z

**File Size:** 1798.56 KB

**Total Pages:** 9

**Extracted Pages:** 9

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2809

**Title:** dyAb: Flow Matching for Flexible Antibody Design with AlphaFold-driven Pre-binding Antigen

**Collection:** Large Files

---

## Extracted Text Content

dyAb: Flow Matching for Flexible Antibody Design with AlphaFold-driven Pre-binding Antigen
Cheng Tan*1,2, Yijie Zhang*3,4, Zhangyang Gao*2, Yufei Huang2, Haitao Lin2, Lirong Wu2, Fandi Wu5, Mathieu Blanchette 3,4, Stan Z. Li†2
1Zhejiang University 2AI Lab, Westlake University 3School of Computer Science, McGill University 4MILA - Que ́bec AI Institute 5Tencent, AI for Life Science Lab
Abstract
The development of therapeutic antibodies heavily relies on accurate predictions of how antigens will interact with antibodies. Existing computational methods in antibody design often overlook crucial conformational changes that antigens undergo during the binding process, significantly impacting the reliability of the resulting antibodies. To bridge this gap, we introduce dyAb, a flexible framework that incorporates AlphaFold2-driven predictions to model pre-binding antigen structures and specifi-
cally addresses the dynamic nature of antigen conformation changes. Our dyAb model leverages a unique combination of coarse-grained interface alignment and fine-grained flow matching techniques to simulate the interaction dynamics and structural evolution of the antigenantibody complex, providing a realistic representation of the binding process. Extensive experiments show that dyAb significantly outperforms existing models in antibody design involving changing antigen conformations. These results-
 highlight dyAb’s potential to streamline the design process for therapeutic antibodies, promising more efficient development cycles and improved outcomes in clinical applications.
Code — https://github.com/A4Bio/dyAb
Introduction
Antibodies are pivotal components of the immune system, equipped to identify and neutralize foreign entities such as bacteria, viruses, and other pathogens (Raybould et al. 2019; Kong, Huang, and Liu 2023b; Shi et al. 2022). These Yshaped proteins possess two binding arms that latch onto antigens. Upon binding to an antigen, antibodies mark invaders for destruction by other immune cells, which is a pivotal process for the body’s defense mechanism against infections (Basu et al. 2019). In therapeut-
ic applications, the natural binding capability of antibodies is harnessed to develop targeted treatments for a myriad of diseases, ranging from various types of cancers to autoimmune disorders and infectious diseases (Kuroda et al. 2012; Tiller and Tessier 2015).
*These authors contributed equally. †Corresponding author Copyright © 2025, Association for the Advancement of Artificial Intelligence (www.aaai.org). All rights reserved.
The fundamental role of antibodies in immune surveillance underscores their importance in vaccination, where exposure to a specific antigen primes the immune system for future encounters, offering protection against diseases (Maynard and Georgiou 2000; Akbar et al. 2022a).
Early efforts on antibody design primarily focused on generating sequences for the Complementarity-Determining Regions (CDRs) without modeling the corresponding threedimensional structures (Saka et al. 2021; Alley et al. 2019; Shin et al. 2021). RefineGNN (Jin et al. 2022) enables the co-design of both the sequences and structures of antibody CDRs. Further advancements were made with DiffAb (Luo et al. 2022), which attempts to generate antibodies with high affinity to given antigen structures, and-
 MEAN (Kong, Huang, and Liu 2023a), which incorporates light chain context as a conditional input to generate CDRs. Moreover, dyMEAN (Kong, Huang, and Liu 2023b) further proposes an end-to-end full-atom antibody design model. Despite these developments, a notable flaw persists in these computational methodologies: they typically do not consider the dynamic alterations in antigen structures upon antibody binding. Instead, they take the post-binding structures as the foundation for design, overlooki-
ng the inherent flexibility and conformational shifts that antigens undergo. This deficiency can lead to predictions that fail to accurately capture the dynamics of antibody-antigen interactions, potentially resulting in antibody designs that are less effective in realworld applications. In essence, existing methods are starting with the answer, which limits their practical utility.
The introduction of AlphaFold2 (Jumper et al. 2021; Abramson et al. 2024) marks a paradigm shift to predict protein structures with unprecedented accuracy and efficiency. AlphaFold2’s predictions have been widely adopted in various computational biology applications, including protein folding, protein-protein interactions, and protein design (Varadi et al. 2022; Hu et al. 2022; Hsu et al. 2022). Its high-fidelity structural predictions offer a valuable starting point for modeling the pre-binding c-
onformations of antigens. By employing the predicted antigen structures from AlphaFold2, we can ensure the reliability of the initial antigen conformation. Figure 1 shows that while the root-meansquare deviation (RMSD) between AlphaFold2-predicted
arXiv:2503.01910v1 [q-bio.QM] 1 Mar 2025

4rau RMSD=1.133
1a2y RMSD=0.657
Figure 1: Alignment of predicted and experimental antigen structures before and after binding. The pre-binding antigen structures, predicted by AlphaFold2, are depicted in yellow. The post-binding antigen structures, derived from experimental data of antigen-antibody complexes, are shown in red. The antibodies are colored in green and blue. The epitopes are highlighted with a red box.
structures and experimental post-binding structures of antigens is minimal, significant discrepancies often occur in the interface regions where antibodies bind. This observation underscores the critical need to account for the dynamic nature of antigen structures during antibody design. We introduce dyAb, which leverages AlphaFold2’s predictions to model pre-binding antigen structures and explicitly addresses the dynamic nature of antigen conformation changes when designing the antibody. dyAb com-
bines a coarse-grained interface alignment with a fine-grained flow matching approach to simulate the interaction dynamics and structural evolution of the antigen-antibody complex, providing a more realistic representation of the binding process. Extensive experiments demonstrate that dyAb significantly outperforms existing models in antibody design when involving changing antigen conformations, promising more efficient development cycles in applications.
Related Work
Protein Design Several approaches in structure-based protein design leverage fragment-based and energy-based features derived from protein structures (Wang et al. 2021; Hu et al. 2022). StructGNN (Ingraham et al. 2019) introduced a paradigm shift by framing fixed-backbone design as a structure-to-sequence problem. GVP (Jing et al. 2021) introduced architectures with translational and rotational equivariances. GCA (Tan et al. 2023) utilized global attention to learn geometric representations from r-
esidue interactions. AlphaDesign (Gao et al. 2022) established a protein design benchmark based on AlphaFold DB (Varadi et al. 2022; Jumper et al. 2021). ESM-IF (Hsu et al. 2022) augmented training data by incorporating predicted structures from AlphaFold2 (Jumper et al. 2021). ProteinMPNN (Dauparas et al. 2022) employed expressive structural features with message-passing neural networks. PiFold (Gao, Tan, and Li 2023) introduced additional structural features and generated protein sequences in on-
e shot. Our focus is on antibody design, a specialized area within protein design.
Antibody Design Early approaches used Monte Carlo simulations to iteratively update sequences and structures (Pantazes and Maranas 2010; Adolf-Bryfogle et al. 2018; Warszawski et al. 2019; Ruffolo, Gray, and Sulam 2021), but these were computationally expensive and prone to local energy minima. Deep generative models have since emerged as viable alternatives. Sequence-based methods (Alley et al. 2019; Saka et al. 2021; Shin et al. 2021; Akbar et al. 2022b) paved the way, followed by more advanced -
techniques like RefineGNN (Jin et al. 2022) for CDR co-design, DiffAb (Luo et al. 2022) for antigen-specific antibody generation using diffusion models, and CEM (Fu and Sun 2022) for modeling CDR geometry constraints. MEAN (Kong, Huang, and Liu 2023a) and dyMEAN (Kong, Huang, and Liu 2023b) introduced E(3)-equivariant message passing and full-atom design models, respectively. tFold (Wu et al. 2022) leverages protein language models for antibody-antigen structure prediction, and Kim, Kim, and Park -
(2024) proposed a decoupled sequence-structure generation method. However, these methods do not explicitly account for dynamic antigen structural changes upon antibody binding.
AlphaFold2 Benefits Computational Biology Using AlphaFold2’s predicted structures has become a common practice in various computational biology applications. ESMIF (Hsu et al. 2022) augment training data by predicting structures using AlphaFold2 for protein sequence design. By subsampling the multiple sequence alignments (MSA) input to AlphaFold2, approaches like those discussed in Del Alamo et al. (2022) have successfully predicted alternative conformations. AF-Cluster (WaymentSteele et al. 2024)-
 applies sequence similarity clustering to predict alternative states of metamorphic proteins. AlphaFlow combines the structural prediction power of AlphaFold2 with flow matching techniques to generate protein ensembles (Jing, Berger, and Jaakkola 2024).
Background Antibody-antigen Complex
Proteins are biological molecules consisting of one or more chains of amino acid residues. These residues are the basic building blocks of proteins, each represented by one of 20 standard amino acids. In this context, a protein complex can be described as comprising N amino acids, each denoted as a residue, and collectively forming a sequence S = {si}N
i=1. The three-dimensional structure of a protein is captured through the coordinates of its backbone atoms, specifically denoted as X = {xi}N
i=1, where xi ∈ R3×ci and ci represents the number of atoms in the i-th residue. An antibody-antigen complex, a typical type of protein complex, can be defined by the pair C = (S, X ). Within this complex, the antibody and the antigen play distinct roles: (i) Antibody, Cab = (Sab, Xab), is Y-shaped symmetric protein composed of two identical sets of chains, each set containing a heavy (H) chain and a light (L) chain. These chains are further divided into several constant domains and a variable dom-
ain. The variable domains denoted as VH and VL for the heavy and light chains respectively,

include regions known as framework regions (FRs) and complementarity-determining regions (CDRs). (ii) Antigen, Cag = (Sag, Xag), is a protein that when bound by an antibody, forms a complex that can elicit an immune response. The antibody-antigen complex, C = Cab ∪ Cag, results from the interaction between the antibody and the antigen.
Problem Statement
In this work, we focus on the challenge of designing antibodies that not only bind to antigens with high affinity but also incorporate the dynamic nature of antigen structures during the binding process. Traditional approaches typically focus on static models of antigen structures, often neglecting the significant conformational changes that antigens undergo upon interaction with antibodies:
F : Cag → Cab ∪ Cag, (1)
These approaches use the post-binding antigen structure as the basis for antibody design. Recognizing this gap, we propose a redefined problem statement that considers both the pre-binding and post-binding states of the antigen structures:
F : C(0)
ag → Cab ∪ C(1)
ag , (2)
Here, C(0)
ag explicitly represents the pre-binding antigen
structure, and C(1)
ag denotes the antigen structure after antibody binding. In practice, we focus on the epitope of the antigen and the variable domains of the antibody and model them as graphs GE(VE, EE) and GA(VA, EA), respectively. Here, VE and VA capture intra-residue level features, while EE and EA represent inter-residue level features. They are derived from the sequence and structural data S and X . The connectivity between residues is built using the k-nearest neighbors (kNN) approach, which calculates the m-
inimum pairwise distance between all atoms in residues i and j:
d(vi, vj) = min
1≤p≤ci ,1≤q ≤cj
∥Xi(:, p) − Xj(:, q)∥2, (3)
where Xi(:, p) is the coordinates of the p-th atom in Xi.
Flow Matching
Flow matching (Lipman et al. 2022; Albergo, Boffi, and Vanden-Eijnden 2023; Liu, Gong et al. 2022) is a generative modeling paradigm that has been inspired by and further extends the notable successes of diffusion models in image (Ho, Jain, and Abbeel 2020; Song et al. 2021) and molecule (Jing, Berger, and Jaakkola 2024; Sta ̈rk et al. 2023; Lin et al. 2024) domains. This technique is grounded in the fundamental objective of learning an ordinary differential equation (ODE) to transform a prior dis-
tribution p0 into a target data distribution p1 over a defined time interval from t = 0 to t = 1. Let P denote the space of probability functions over a manifold M equipped with a Riemannian metric g. The transformation is a probability path pt : [0, 1] → P on M, interpolating between p0 and p1. At any time t, the corresponding gradient vector ut(x) at a point x in M lies in the tangent space TxM. To approximate this vector field, a flow matching tangent vector field vt : [0, 1] × M → M is employe-
d, parameterized by θ. The objective is to minimize the loss function
LRF M (θ) = Et,pt(x)∥vt(x) − ut(x)∥g2, which quantifies the discrepancy between the learned vector field and the true gradient vectors. Given the intractable nature of ut(x), flow matching leverages a conditional density path pt(x|x1) and employs a conditional flow matching objective:
LCRF M = Et∼U(0,1),p1(x1),pt(x|x1)∥vt(x)−ut(x|x0, x1)∥2
g. (4)
dyAb
In this work, we introduce dyAb, a framework designed to address the dynamic nature of antigen-antibody interactions. Our approach integrates AlphaFold2-driven pre-binding antigen structures with a unique combination of coarsegrained interface alignment and fine-grained sequencestructure flow matching techniques. This section provides an overview of the proposed dyAb framework and its components, as illustrated in Figure 2.
Antigen
Antibody
V!: ...Y??????????Q... V": ...SLSASVGETVTS...
Epitope
Interface
Paratope
Align
Coarse-grained alignment
Epitope
Fine-grained flow matching
Interface
Template
V!: ...YARERDYRLDYQ...
Figure 2: The overview framework of dyAb. The prebinding antigen structures are predicted by AlphaFold2 and used as input to the model. dyAb consists of two main components: coarse-grained interface alignment and finegrained flow matching. The model is trained end-to-end to predict the post-binding antibody-antigen structures and the designed antibody sequences.
The fundamental idea behind dyAb stems from the understanding that the nature of antigen-antibody interactions varies significantly depending on the spatial proximity between the two molecules. When an antibody and an antigen are far apart, their interactions are primarily influenced by macroscopic forces such as electrostatic attraction and hydrophobic effects. These forces are relatively simple and do not significantly alter the internal structures of the antigen and antibody. However, as the an-
tibody and antigen come into closer proximity, the complexity of their interactions increases dramatically. The binding process becomes dominated by fine, atomic-level forces, including hydrogen bonding, van der Waals forces, and precise steric fits. These interactions necessitate a detailed and accurate modeling approach to capture the dynamic conformational changes and ensure high-affinity binding. Recognizing this transition from macroscopic to microscopic interactions, dyAb employs a two-stage-
 strategy: (i)

coarse-grained interface alignment, which focuses on the macroscopic interactions, and (ii) fine-grained sequencestructure flow matching, which captures the microscopic interactions and structural evolution. dyAb provides a comprehensive representation of the antigen-antibody binding process, enabling the design of high-affinity antibodies that effectively target antigens.
Coarse-grained Interface Alignment
In the initial stage of coarse-grained interface alignment, the objective is to establish an initial binding complex for the antibody and antigen based on the given pre-binding antigen structure and antibody sequences. At this stage, the antibody and antigen are relatively far apart, and their interactions are governed by macroscopic forces such as electrostatic attraction and hydrophobic effects. We assume that these interactions are simple and do not significantly alter their internal structures-
. The key steps of the coarse-grained interface alignment process are illustrated in Figure 3.
Antibody Structure Template Initialization Following previous works (Luo et al. 2022; Kong, Huang, and Liu 2023b,a; Tan et al. 2024), we begin with the pre-binding antigen C(0)
ag = (S(0)
ag , X (0)
ag ). To initialize the antibody structure, we leverage the well-conserved framework regions by utilizing an average backbone template X T
ab based on the IMGT numbering system (Lefranc et al. 2003), which accurately identifies and aligns conserved residues. Conserved residues, crucial for maintaining the structural integrity of the antibody, are directly set according to the positions in the average backbone template X T
ab. For the remaining residues,
a residue at position k (either between or outside the conserved residues), its position xk is determined by:
xk = xi + k − i
j − i (xj − xi), ∀xk ∈ X T
ab, (5)
where xi and xj are the positions of two nearest conserved residues i and j. For residues situated between the two nearest conserved residues (i < k < j), the position xk is linearly interpolated between xi and xj. For residues located at the termini of the antibody chains (k < i or k > j), the position xk is extrapolated based on the same interval defined by the nearest conserved residues. The coordinates of the backbone atoms in these residues are initialized by the coordinates of Cα atoms.
Binding Interface Prediction We employ individual models to predict the full-atom geometry of the antibody and the interface between the antibody and the antigen, which can be formulated as:
S′
ab, X ′
ab = Fθ(Sab, X T
ab, S(0)
ag , X (0)
ag ),
S′
itf , X ′
itf = Fφ(Sab, X T
ab, S(0)
ag , X (0)
ag ), (6)
where Fθ and Fφ are the models used to predict the antibody structure and the binding interface. While the interface is expected to correspond to the paratope of the antibody, a key distinction is that X ′
ab is built around the template X T
ab
whereas X ′
itf is built around the epitope of the antigen X (0)
ag .
Interface Alignment To align the antibody to the predicted interface, we utilize the root-mean-square deviation (RMSD) alignment approach (Kabsch 1976). This involves using the Kabsch algorithm to find the optimal rotation and translation that minimize the RMSD between the two sets of points:
Q, t = Kabsch(X ′
itf , X ′
ab),
X (0)
ab = QX ′
ab + t,
(7)
where Q ∈ R3×3 represents the optimal rotation matrix, and t ∈ R3×1 is the translation vector. This alignment ensures that the antibody’s paratope is correctly positioned relative to the antigen’s epitope.
Fine-grained Sequence-Structure Flow Matching
The fine-grained flow matching stage is designed to capture the detailed atomic-level interactions and dynamic conformational changes that occur during antigen-antibody binding. As the antigen and antibody come into close proximity, their interactions become dominated by precise atomic-level forces. Given this proximity and the refined initial alignment, we employ an Euler method-based ODE solver to simulate the ultimate binding state in Euclidean space (Das et al. 1994; Jing, Berger, and Jaakkola-
 2024; Sta ̈rk et al. 2023). The initial coarse-grained aligned structure serves as a close approximation to the ground truth, enabling the use of direct end-state prediction rather than iteratively predicting the transformation vector field. We show the iterative process of the structure evolution in Figure 4.
Flow Matching on Structure In this approach, instead of predicting the vector field ut(x|x0, x1), we directly predict the end state x1 of the binding process. The loss function is then modified to:
LStr = Et∼U (0,1),p0∼(x0),p1∼(x1),pt(x|x0,x1)∥vstr
t (x)−x1∥2
2. (8) The state update mechanism, analogous to the Euler method, is given by:
xt+∆t = xt + ∆t(xˆ1 − x0), (9)
where xˆ1 = vtstr(x) is the predicted end state at time t. It ensures a smooth and controlled evolution of the state towards the predicted end state, leveraging the stability and simplicity of the Euler method. The detailed analysis of this flow matching approach is presented in Appendix.
Flow Matching on Sequence Similarly, for the amino acid sequence of the antibody CDR regions s ∈ Sab, we directly model the probability vector of each residue type at each position. Here, ct represents the probability vector of a multinomial distribution where st ∼ p(ct). We set
c1 = onehot(si) and c0 = ( 1
20 , ..., 1
20 ). The loss function
for this sequence flow matching is defined as:
LSeq = Et∼U (0,1),p0∼(c0),p1∼(c1),pt(c|c0,c1)∥vseq
t (x)−c1∥2
2. (10) The sequence probabilities are updated iteratively, refining the predicted sequence ct at each step to closely match the desired distribution c1:
ct+∆t = ct + ∆t(cˆ1 − c0), (11)

C! in conserved residues
C! in unconserved residues
Extrapolate
Interpolate
C!
N
C
O
C!
N
C
O
C!
N
C
O
C!
N
C
O
(a) template initialization (b) binding interface prediction
Epitope
template X$&%, S$%
F!
F"
antigen X$'
()), S$'
())
Epitope
Interface
(c) interface alignment
Epitope
Interface
Paratope
Align
Interface
Figure 3: The key steps of the coarse-grained interface alignment process. (a) The pre-binding antigen structure is used to initialize the antibody structure. (b) The antibody structure and the binding interface are predicted by individual models. (c) The antibody structure is aligned to the predicted interface to generate the coarse-grained antibody-antigen complex.
t=0 t=1
t=0.25 t=0.5 t=0.75
Figure 4: Fine-grained iterative refinement process of the antibody-antigen complex. The interfaces of both the antigen and the antibody are iteratively refined.
where cˆ1 = vseq
t (c) is the predicted end state at time t. This iterative refinement process ensures that the sequence evolves towards the high-affinity state represented by c1.
Model and Loss Function
As shown in Figure 5, we employ the adaptive multi-channel equivariant network as the backbone network (Kong, Huang, and Liu 2023a,b; Han et al. 2024; Kong, Huang, and Liu 2024) that inputs the sequence and structure coordinates, modeling them as graphs GE (epitope), GA (antibody), and outputs the predicted sequence and structure. This network is designed to handle the rotational and translational symmetries inherent in molecular structures.
The total loss function comprises several components aimed at optimizing different aspects of the model. These include sequence and structure flow matching losses as well as interface alignment losses. The interface alignment loss LIT F = Lsp + Ldist ensures that the predicted interface between the antibody and antigen is accurate. This loss has two subcomponents: (i) coordinate loss (Lsp), Measures the difference between predicted and actual interface coordinates
using the Huber loss (Huber 1992):
Lsp = 1
|Xitf |
X
i∈Xitf
lhuber(xi, x∗
i ), (12)
where Xitf are the coordinates of the predicted interface and
x∗
i are the ground truth interface coordinates. (ii) distance loss (Ldist): Measures the distance between the predicted interface and the epitope of the antigen using the Huber loss:
Ldist = 1
|Xitf ||Xep|
X
i∈Xitf ,j∈X ep
lhuber(d(i, j), d∗(i, j)),
(13) where d(i, j) is the predicted distance between atoms i and j, and d∗(i, j) is the ground truth distance. The epitope coordinates are denoted by Xep.
...Y??????????Q...
protein graph
Sequence
Structure
backbone F
G
adaptive multi-channel equivariant network
S
X
...YARERDYRLDYQ...
Sequence
Structure
S
X
time step encoding
Figure 5: The overall model architecture of dyAb.
The overall loss function L is a linear combination of the sequence flow matching loss LSeq, structure flow matching

loss LStr, and interface alignment loss LIT F :
Ltotal = LSeq + LStr + LIT F , (14)
This combined loss function ensures that the model accurately predicts both the sequence and structure of the antibody while maintaining a realistic and high-affinity binding interface with the antigen.
Experiments
We conduct comprehensive experiments that take into account the dynamic nature of antigen conformational changes. This novel experimental setting aims to emulate the flexible conditions under which antibodies must function. While the dataset split is consistent with previous works (Kong, Huang, and Liu 2023b) for a fair comparison, we replace the pre-binding antigen structures with AlphaFold2’s predictions and predict the ground-truth antigenantibody complexes. We assess the models’ capabilities i-
n antibody design through three critical tasks: (i) Epitopebinding CDR-H3 generation, assessing the ability to generate the highly variable and functionally crucial CDR-H3 region. (2) Affinity optimization, evaluating the improvements in binding affinity of the designed antibodies to target antigens. (3) Complex structure prediction, predicting the 3D structure of the antibody-antigen complex. Moreover, a detailed ablation study of our proposed dyAb model is conducted to validate its effectiveness-
. Our primary focus is on comparing the performance of our proposed dyAb model with dyMEAN (Kong, Huang, and Liu 2023b), as both are end-to-end models designed to streamline the antibody design process. Additionally, we also benchmark dyAb against other CDR generation baselines that require a multi-stage pipeline, including antibody structure prediction with IgFold (Ruffolo, Gray, and Sulam 2021), antibody-antigen docking with HDock (Yan et al. 2017), antibody CDR generation, and side-chain packin-
g with Rosetta (Das and Baker 2008). The CDR generation baselines include (i) RosettaAb (Adolf-Bryfogle et al. 2018) is a traditional computational approach tailored for antibody design. (ii) HERN (Jin, Barzilay, and Jaakkola 2022) employs a hierarchical message passing to predict atomic forces and use them to refine a binding complex in an iterative, equivariant manner. (iii) DiffAb (Luo et al. 2022) uses a diffusion model to generate antibodies targeting specific antigen structures. (iv) MEAN (K-
ong, Huang, and Liu 2023a) employs E(3)-equivariant message passing and attention mechanisms to generate antibodies.
Epitope-binding CDR-H3 Generation
CDR-H3 plays a pivotal role in determining the binding affinity of antibodies to their target antigens. Due to its high variability and central role in antigen binding, accurately generating its sequence and structure is a fundamental task in antibody design. We train the models on the Structural Antibody Database (SAbDab) (Dunbar et al. 2014) and evaluate them on the RABD Benchmark (AdolfBryfogle et al. 2018), which contains 60 antibody-antigen complexes annotated by biological experts. The input-
 to the
model is the pre-binding antigen structure predicted by AlphaFold2 and the incomplete antibody sequence. We evaluate the models based on six metrics: Amino Acid Recovery (AAR), Complementarity-determining Amino Acid Recovery (CAAR), TMscore, Local Distance Difference Test (lDDT), Root Mean Square Deviation (RMSD), and DockQ. The detailed experimental settings of this evaluation are provided in the Appendix.
Method Generation Docking
AAR ↑ TMscore ↑ lDDT ↑ CAAR ↑ RMSD ↓ DockQ ↑
RosettaAb 31.91% 0.6302 0.6107 15.29% 18.44 0.044 HERN 32.04% - - 17.94% 15.47 0.056 DiffAb 24.01% 0.6306 0.6026 18.57% 16.60 0.039 MEAN 37.26% 0.6334 0.6319 23.71% 17.32 0.047 dyMEAN 35.97% 0.4584 0.2657 24.11% 11.67 0.313 dyAb 37.89% 0.9264 0.6957 26.14% 9.86 0.342
Table 1: Results of epitope-binding CDR-H3 design with dynamic antigens on the RAbD benchmark. The first four approaches are multi-stage pipelines, while the last two are end-to-end models.
We summarize the results in Table 1, showing that dyAb outperforms other methods across various metrics. Compared to dyMEAN, dyAb significantly improves structural metrics like TMscore, lDDT, and RMSD, highlighting its effectiveness in modeling antigen-antibody interactions. Multi-stage methods like RosettaAb, HERN, DiffAb, and MEAN perform worse in DockQ scores because they generate CDR-H3 using pre-binding antigen structures, ignoring conformational changes upon binding. This mismatch leads to l-
ower docking quality. Figure 6 provides examples of dyAb’s ability to predict antigen conformational changes and design accurate antibody-antigen structures. More examples are available in the Appendix.
Affinity Optimization
Affinity optimization is a critical task in antibody design, focusing on enhancing the binding affinity of a given antibodyantigen complex. we quantify binding affinity changes using the metric ∆∆G on the SKEMPI dataset, which represents the change in free energy upon binding. Consistent with previous works (Tan et al. 2024; Kong, Huang, and Liu 2023b,a), we employed a ∆∆G predictor (Shan et al. 2022) and reported the number of average residue changes ∆L in the optimization process because fewer c-
hanges are favored. We summarize the results in Table 2, which presents the outcomes for dyAb and dyMEAN under various constraints on the number of changing residues: 1, 2, 4, 8, and no limit. As we have adapted dyMEAN to take the antigen conformational changes into account, both models show good performance. However, dyAb consistently outperforms dyMEAN across all metrics, achieving superior binding affinity improvements with fewer residue changes. These results suggest that dyAb optimizes antibo-
dy-antigen interactions more effectively while minimizing structural alterations.

5j13 AAR: 33.33% RMSD: 7.94 TMscore: 0.9232 DockQ: 0.225
3uzq AAR: 33.33% RMSD: 5.16 TMscore: 0.9146 DockQ: 0.525
5ggs AAR: 46.15% RMSD: 8.69 TMscore: 0.9503 DockQ: 0.293
2adf AAR: 63.64% RMSD: 9.57 TMscore: 0.9366 DockQ: 0.308
pre-binding antigen post-binding antigen heavy chain light chain ground truth
Figure 6: Visualization examples of the generated antibody-antigen complex structures.
Method dyMEAN dyAb
∆∆G ↓ ∆L ↓ ∆∆G ↓ ∆L ↓
1 -9.59 0.98 -13.23 0.67 2 -10.34 1.87 -13.93 1.37 4 -10.77 4.79 -13.88 1.60 8 -10.89 6.53 -14.04 3.78 Overall -11.13 6.84 -14.44 3.44
Table 2: Comparison on binding affinity optimization under different constraints.
Complex Structure Prediction
The accurate prediction of antibody-antigen complex structures is critical in antibody design. Understanding the precise 3D arrangement of these complexes allows for insights into the binding interactions and mechanisms, which are crucial for developing high-affinity antibodies. We trained our model on the SAbDab dataset and evaluated it on the test set provided by IgFold (Ruffolo, Gray, and Sulam 2021). Table 3 presents the results of complex structure prediction. The w/ AF2 in the multi-stage pi-
peline denotes using AlphaFold2’s predicted antigen structure, whereas w/ GT indicates using the ground-truth post-binding antigen structure. It can be seen that dyAb outperforms the other end-toend baseline, dyMEAN, in all metrics. Furthermore, dyAb achieves comparable results to the multi-stage approaches in TMscore and surpasses them in RMSD and DockQ metrics, highlighting its robustness in predicting the overall structure and docking quality. The relatively lower lDDT score for dyAb may be att-
ributed to the focus on global structural accuracy over local arrangement details.
Ablation Study
We conduct an ablation study and summarize the results in Table 4. Due to the limited space, we leave the detailed analysis in Appendix. Our findings underscore the pivotal role of coarse-grained flow matching in establishing a fundamental conformation. The absence of this alignment significantly degrades both generation and docking performance. Additionally, fine-grained flow matching is crucial for refining the initial conformation, as its removal results in a substantial decline in structural m-
etrics.
Method Structure Docking
TMscore ↑ lDDT ↑ RMSD ↓ DockQ ↑
IgFold→HDock, w/ AF2 0.6768 0.8376 17.21 0.245 IgFold→HDock, w/ GT 0.9502 0.8362 16.82 0.199 IgFold→HERN, w/ AF2 0.8192 0.8251 13.44 0.367 IgFold→HERN, w/ GT 0.9702 0.8441 9.63 0.429 dyMEAN 0.2450 0.1564 10.39 0.391 dyAb 0.9224 0.6871 9.13 0.446
Table 3: Results of complex structure prediction.
Method Generation
AAR ↑ TMscore ↑ lDDT ↑
dyAb 37.89% 0.9264 0.6957 dyAb w/o coarse-grained 13.44% 0.1403 0.0108 dyAb w/o fine-grained 37.54% 0.5072 0.2941 dyAb w/ sampling step=1 31.53% 0.8932 0.6009 dyAb w/ sampling step=50 32.80% 0.9221 0.6793
Table 4: Ablation study on CDR-H3 generation.
Furthermore, we examine the impact of the sampling step size in the flow-matching process. Although the default sampling step is set to 10, we also assess performance using smaller steps of 1 and larger steps of 50. Insufficient sampling with smaller steps and suboptimal performance with larger steps indicate that the sampling size significantly influences performance. Nevertheless, the overall performance across different sampling sizes remains comparable to the default setting, suggesting that w-
hile sampling size is crucial, the chosen default size of 10 is effective.
Conclusion and Limitation
Combining AlphaFold-driven predictions with coarsegrained interface alignment and fine-grained sequencestructure flow matching, dyAb models binding processes with high accuracy. It ensures high-affinity binding and realistic structural evolution, outperforming existing models in dynamic antigen scenarios and streamlining flexible antibody design. However, dyAb’s capability still needs to be further examined by wet lab experiments.

Acknowledgments
This work was supported by National Science and Technology Major Project (No. 2022ZD0115101), National Natural Science Foundation of China Project (No. 624B2115, No. U21A20427), Project (No. WU2022A009) from the Center of Synthetic Biology and Integrated Bioengineering of Westlake University, Project (No. WU2023C019) from the Westlake University Industries of the Future Research Funding, Tencent AI Lab Rhino-Bird Focused Research Program (Tencent AI Lab RBFR2023007) and an AI&Health research chair-
 from the Fonds de recherche du Que ́bec en Sante ́.
References
Abramson, J.; Adler, J.; Dunger, J.; Evans, R.; Green, T.; Pritzel, A.; Ronneberger, O.; Willmore, L.; Ballard, A. J.; Bambrick, J.; et al. 2024. Accurate structure prediction of biomolecular interactions with AlphaFold 3. Nature, 1–3.
Adolf-Bryfogle, J.; Kalyuzhniy, O.; Kubitz, M.; Weitzner, B. D.; Hu, X.; Adachi, Y.; Schief, W. R.; and Dunbrack Jr, R. L. 2018. RosettaAntibodyDesign (RAbD): A general framework for computational antibody design. PLoS computational biology, 14(4): e1006112.
Akbar, R.; Bashour, H.; Rawat, P.; Robert, P. A.; Smorodina, E.; Cotet, T.-S.; Flem-Karlsen, K.; Frank, R.; Mehta, B. B.; Vu, M. H.; et al. 2022a. Progress and challenges for the machine learning-based design of fit-for-purpose monoclonal antibodies. In MAbs, volume 14, 2008790. Taylor & Francis.
Akbar, R.; Robert, P. A.; Weber, C. R.; Widrich, M.; Frank, R.; Pavlovic ́, M.; Scheffer, L.; Chernigovskaya, M.; Snapkov, I.; Slabodkin, A.; et al. 2022b. In silico proof of principle of machine learning-based antibody design at unconstrained scale. In MAbs, volume 14, 2031482. Taylor & Francis.
Albergo, M. S.; Boffi, N. M.; and Vanden-Eijnden, E. 2023. Stochastic interpolants: A unifying framework for flows and diffusions. arXiv preprint arXiv:2303.08797.
Alley, E. C.; Khimulya, G.; Biswas, S.; AlQuraishi, M.; and Church, G. M. 2019. Unified rational protein engineering with sequence-based deep representation learning. Nature methods, 16(12): 1315–1322.
Basu, K.; Green, E. M.; Cheng, Y.; and Craik, C. S. 2019. Why recombinant antibodies—benefits and applications. Current opinion in biotechnology, 60: 153–158.
Das, R.; and Baker, D. 2008. Macromolecular modeling with rosetta. Annu. Rev. Biochem., 77: 363–382.
Das, R.; Mavriplis, D.; Saltz, J.; Gupta, S.; and Ponnusamy, R. 1994. Design and implementation of a parallel unstructured Euler solver using software primitives. AIAA journal, 32(3): 489–496.
Dauparas, J.; Anishchenko, I.; Bennett, N.; Bai, H.; Ragotte, R. J.; Milles, L. F.; Wicky, B. I.; Courbet, A.; de Haas, R. J.; Bethel, N.; et al. 2022. Robust deep learning–based protein sequence design using ProteinMPNN. Science, 378(6615): 49–56.
Del Alamo, D.; Sala, D.; Mchaourab, H. S.; and Meiler, J. 2022. Sampling alternative conformational states of transporters and receptors with AlphaFold2. Elife, 11: e75751.
Dunbar, J.; Krawczyk, K.; Leem, J.; Baker, T.; Fuchs, A.; Georges, G.; Shi, J.; and Deane, C. M. 2014. SAbDab: the structural antibody database. Nucleic acids research, 42(D1): D1140–D1146.
Fu, T.; and Sun, J. 2022. Antibody complementarity determining regions (cdrs) design using constrained energy model. In Proceedings of the 28th ACM SIGKDD Conference on Knowledge Discovery and Data Mining, 389–399.
Gao, Z.; Tan, C.; Li, S.; et al. 2022. AlphaDesign: A graph protein design method and benchmark on AlphaFoldDB. arXiv preprint arXiv:2202.01079.
Gao, Z.; Tan, C.; and Li, S. Z. 2023. PiFold: Toward effective and efficient protein inverse folding. In ICLR.
Han, R.; Huang, W.; Luo, L.; Han, X.; Shen, J.; Zhang, Z.; Zhou, J.; and Chen, T. 2024. HeMeNet: Heterogeneous Multichannel Equivariant Network for Protein Multitask Learning. arXiv preprint arXiv:2404.01693.
Ho, J.; Jain, A.; and Abbeel, P. 2020. Denoising diffusion probabilistic models. NeurIPS, 33: 6840–6851.
Hsu, C.; Verkuil, R.; Liu, J.; Lin, Z.; Hie, B.; Sercu, T.; Lerer, A.; and Rives, A. 2022. Learning inverse folding from millions of predicted structures. In ICML, 8946–8970. PMLR.
Hu, B.; Xia, J.; Zheng, J.; Tan, C.; Huang, Y.; Xu, Y.; and Li, S. Z. 2022. Protein Language Models and Structure Prediction: Connection and Progression. arXiv:2211.16742.
Huber, P. J. 1992. Robust estimation of a location parameter. Breakthroughs in statistics: Methodology and distribution, 492–518.
Ingraham, J.; Garg, V.; Barzilay, R.; and Jaakkola, T. 2019. Generative models for graph-based protein design. NeurIPS, 32.
Jin, W.; Barzilay, R.; and Jaakkola, T. 2022. Antibodyantigen docking and design via hierarchical equivariant refinement. arXiv preprint arXiv:2207.06616.
Jin, W.; Wohlwend, J.; Barzilay, R.; and Jaakkola, T. S. 2022. Iterative Refinement Graph Neural Network for Antibody Sequence-Structure Co-design. In ICLR.
Jing, B.; Berger, B.; and Jaakkola, T. 2024. AlphaFold Meets Flow Matching for Generating Protein Ensembles. arXiv preprint arXiv:2402.04845.
Jing, B.; Eismann, S.; Suriana, P.; Townshend, R. J. L.; and Dror, R. 2021. Learning from Protein Structure with Geometric Vector Perceptrons. In ICLR.
Jumper, J.; Evans, R.; Pritzel, A.; Green, T.; Figurnov, M.; Ronneberger, O.; Tunyasuvunakool, K.; Bates, R.; Zˇ  ́ıdek, A.; Potapenko, A.; et al. 2021. Highly accurate protein structure prediction with AlphaFold. Nature, 596(7873): 583589.
Kabsch, W. 1976. A solution for the best rotation to relate two sets of vectors. Acta Crystallographica Section A: Crystal Physics, Diffraction, Theoretical and General Crystallography, 32(5): 922–923.

Kim, N.; Kim, M.; and Park, J. 2024. Anfinsen Goes Neural: a Graphical Model for Conditional Antibody Design. arXiv preprint arXiv:2402.05982.
Kong, X.; Huang, W.; and Liu, Y. 2023a. Conditional Antibody Design as 3D Equivariant Graph Translation. In The Eleventh ICLR.
Kong, X.; Huang, W.; and Liu, Y. 2023b. End-to-End FullAtom Antibody Design. arXiv preprint arXiv:2302.00203.
Kong, X.; Huang, W.; and Liu, Y. 2024. Full-Atom Peptide Design with Geometric Latent Diffusion. arXiv preprint arXiv:2402.13555.
Kuroda, D.; Shirai, H.; Jacobson, M. P.; and Nakamura, H. 2012. Computer-aided antibody design. Protein engineering, design & selection, 25(10): 507–522.
Lefranc, M.-P.; Pommie ́, C.; Ruiz, M.; Giudicelli, V.; Foulquier, E.; Truong, L.; Thouvenin-Contet, V.; and Lefranc, G. 2003. IMGT unique numbering for immunoglobulin and T cell receptor variable domains and Ig superfamily V-like domains. Developmental & Comparative Immunology, 27(1): 55–77.
Lin, H.; Zhang, O.; Zhao, H.; Wu, L.; Jiang, D.; Liu, Z.; Huang, Y.; and Li, S. Z. 2024. PPFlow: Target-aware Peptide Design with Torsional Flow Matching. bioRxiv, 2024–03.
Lipman, Y.; Chen, R. T.; Ben-Hamu, H.; Nickel, M.; and Le, M. 2022. Flow Matching for Generative Modeling. In The Eleventh ICLR.
Liu, X.; Gong, C.; et al. 2022. Flow Straight and Fast: Learning to Generate and Transfer Data with Rectified Flow. In The Eleventh ICLR.
Luo, S.; Su, Y.; Peng, X.; Wang, S.; Peng, J.; and Ma, J. 2022. Antigen-Specific Antibody Design and Optimization with Diffusion-Based Generative Models for Protein Structures. In NeurIPS.
Maynard, J.; and Georgiou, G. 2000. Antibody engineering. Annual review of biomedical engineering, 2(1): 339–376.
Pantazes, R.; and Maranas, C. D. 2010. OptCDR: a general computational method for the design of antibody complementarity determining regions for targeted epitope binding. Protein Engineering, Design & Selection, 23(11): 849–858.
Raybould, M. I.; Marks, C.; Krawczyk, K.; Taddese, B.; Nowak, J.; Lewis, A. P.; Bujotzek, A.; Shi, J.; and Deane, C. M. 2019. Five computational developability guidelines for therapeutic antibody profiling. Proceedings of the National Academy of Sciences, 116(10): 4025–4030.
Ruffolo, J. A.; Gray, J. J.; and Sulam, J. 2021. Deciphering antibody affinity maturation with language models and weakly supervised learning. arXiv preprint arXiv:2112.07782.
Saka, K.; Kakuzaki, T.; Metsugi, S.; Kashiwagi, D.; Yoshida, K.; Wada, M.; Tsunoda, H.; and Teramoto, R. 2021. Antibody design using LSTM based deep generative model from phage display library for affinity maturation. Scientific reports, 11(1): 1–13.
Shan, S.; Luo, S.; Yang, Z.; Hong, J.; Su, Y.; Ding, F.; Fu, L.; Li, C.; Chen, P.; Ma, J.; et al. 2022. Deep learning guided
optimization of human antibody against SARS-CoV-2 variants with broad neutralization. Proceedings of the National Academy of Sciences, 119(11): e2122954119. Shi, C.; Wang, C.; Lu, J.; Zhong, B.; and Tang, J. 2022. Protein sequence and structure co-design with equivariant translation. arXiv preprint arXiv:2210.08761.
Shin, J.-E.; Riesselman, A. J.; Kollasch, A. W.; McMahon, C.; Simon, E.; Sander, C.; Manglik, A.; Kruse, A. C.; and Marks, D. S. 2021. Protein design and variant prediction using autoregressive generative models. Nature communications, 12(1): 2403. Song, Y.; Sohl-Dickstein, J.; Kingma, D. P.; Kumar, A.; Ermon, S.; and Poole, B. 2021. Score-Based Generative Modeling through Stochastic Differential Equations. In ICLR. Sta ̈rk, H.; Jing, B.; Barzilay, R.; and Jaakkola, T. 2023. Harmonic Self-Conditio-
ned Flow Matching for MultiLigand Docking and Binding Site Design. arXiv preprint arXiv:2310.05764.
Tan, C.; Gao, Z.; Wu, L.; Xia, J.; Zheng, J.; Yang, X.; Liu, Y.; Hu, B.; and Li, S. Z. 2024. Cross-Gate MLP with Protein Complex Invariant Embedding Is a One-Shot Antibody Designer. In Proceedings of the AAAI Conference on Artificial Intelligence, volume 38, 15222–15230. Tan, C.; Gao, Z.; Xia, J.; Hu, B.; and Li, S. Z. 2023. Generative de novo protein design with global context. In ICASSP 2023-2023 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP). IEEE.
Tiller, K. E.; and Tessier, P. M. 2015. Advances in antibody design. Annual review of biomedical engineering, 17: 191216. Varadi, M.; Anyango, S.; Deshpande, M.; Nair, S.; Natassia, C.; Yordanova, G.; Yuan, D.; Stroe, O.; Wood, G.; Laydon, A.; et al. 2022. AlphaFold Protein Structure Database: massively expanding the structural coverage of protein-sequence space with high-accuracy models. Nucleic acids research, 50(D1): D439–D444. Wang, Y.; Xue, P.; Cao, M.; Yu, T.; Lane, S. T.; and Zhao, H. 2021.-
 Directed evolution: methodologies and applications. Chemical reviews, 121(20): 12384–12444. Warszawski, S.; Borenstein Katz, A.; Lipsh, R.; Khmelnitsky, L.; Ben Nissan, G.; Javitt, G.; Dym, O.; Unger, T.; Knop, O.; Albeck, S.; et al. 2019. Optimizing antibody affinity and stability by the automated design of the variable light-heavy chain interfaces. PLoS computational biology, 15(8): e1007207. Wayment-Steele, H. K.; Ojoawo, A.; Otten, R.; Apitz, J. M.; Pitsawong, W.; Ho ̈mberger, M.; Ovchinnikov-
, S.; Colwell, L.; and Kern, D. 2024. Predicting multiple conformations via sequence clustering and AlphaFold2. Nature, 625(7996): 832–839. Wu, J.; Wu, F.; Jiang, B.; Liu, W.; and Zhao, P. 2022. tFoldAb: fast and accurate antibody structure prediction without sequence homologs. Biorxiv, 2022–11. Yan, Y.; Zhang, D.; Zhou, P.; Li, B.; and Huang, S.-Y. 2017. HDOCK: a web server for protein–protein and proteinDNA/RNA docking based on a hybrid strategy. Nucleic acids research, 45(W1): W365–W373.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:19.044Z
- **Text Length:** 45327 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 9 of 9
