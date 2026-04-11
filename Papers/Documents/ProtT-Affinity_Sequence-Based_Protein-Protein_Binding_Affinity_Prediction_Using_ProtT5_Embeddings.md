# PDF Document: Lou - 2025 - ProtT-Affinity Sequence-Based Protein-Protein Binding Affinity Prediction Using ProtT5 Embeddings.pdf

**File Path:** Lou - 2025 - ProtT-Affinity Sequence-Based Protein-Protein Binding Affinity Prediction Using ProtT5 Embeddings.pdf

**Processed Date:** 2026-02-10T18:18:04.372Z

**File Size:** 312.92 KB

**Total Pages:** 9

**Extracted Pages:** 9

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3646

**Title:** ProtT-Affinity: Sequence-Based Protein-Protein Binding Affinity Prediction Using ProtT5 Embeddings

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

ProtT-Affinity: Sequence-Based Protein–Protein
Binding Affinity Prediction Using ProtT5 Embeddings
Hongfu Lou1
1Department of Physics, Huazhong University of Science and Technology
Author Contributions: H.L. conceived the study, designed the methodology, performed all experiments, analyzed the data, and wrote the manuscript. Competing Interests:The author declares no competing interests.
Abstract
Predicting the binding affinity of protein–protein complexes directly from sequence remains a challenging problem, particularly in the absence of reliable structural information. Here I present ProtT-Affinity, a sequence-only model that combines ProtT5 embeddings with a lightweight Transformer architecture. The model is trained and evaluated on homology-filtered subsets of the PDBBind database following a curation protocol consistent with prior structure-based work. Across two independent test set-
s, ProtT-Affinity reaches Pearson correlation coefficients of 0.628 and 0.459, respectively. Although its performance does not match the strongest structure-based methods, it is competitive with several widely used approaches and provides a practical alternative when structural data are missing or uncertain. The results suggest that large protein language models capture features relevant to binding energetics, and that these features can be exploited to approximate affinity trends at scale. All co-
de and data used in this study are available at https://github.com/fufuhonghong/ProtT-Affinity/ .
Keywords: Protein–protein interaction, Binding affinity prediction, Sequence-based model
1 Introduction
Protein–protein interactions (PPIs) underpin a wide range of cellular processes, including signal transduction, immune recognition, and transcriptional regulation[1]. Characterizing the binding affinity of protein complexes is therefore central to understanding biological mechanisms and plays an important role in areas such as drug discovery and protein engineering[2]. Experimental measurements, however, remain time-consuming and often difficult to scale, which has motivated the development of com-
putational alternatives.
1
arXiv:2511.16113v1 [q-bio.QM] 20 Nov 2025

A large body of work has approached affinity prediction from a structural perspective. Methods such as DFIRE[3], PRODIGY[4], and the more recent ProAffinity-GNN[2] make explicit use of high-resolution complex structures, drawing on energy-based or graph-based representations. Other efforts, including AFTGAN[5] and PLANET[6], have incorporated attention mechanisms and advanced neural architectures to improve predictive performance. While these approaches have demonstrated strong accuracy, their de-
pendence on experimentally solved or confidently predicted structures limits their applicability to large-scale sequence datasets. Sequence-based approaches offer a more flexible alternative. Early methods relied mainly on handcrafted features or traditional machine learning models[7, 8, 9]. Subsequent deep learning models such as DNN-PPI[10] and PIPR[11] showed improved generalization by learning patterns directly from sequence. More recent studies have leveraged protein language models (PLMs)—fo-
r instance BAPULM[12] and PPIretrieval[13]—which capture evolutionary and functional relationships without requiring multiple sequence alignments or structural templates. Building on these developments, this work introduces ProtT-Affinity, a sequence-only framework for predicting the binding affinity of protein–protein complexes. The approach employs ProtT5[14] embeddings in combination with a compact Transformer encoder to model interactions between partner sequences. The model is evaluated under-
 the same stringent data curation protocol used by structure-based benchmarks[2], enabling a more direct comparison between sequence-derived and structure-derived representations. In doing so, this study also explores the broader question of how effectively large PLMs encode affinityrelevant properties and whether such embeddings can approximate structural information for quantitative tasks.
2 Methods
2.1 Dataset Preparation and Curation
The dataset used in this study follows the curation procedure described by Zhou et al.[2] and is based on the protein–protein complex subset of the PDBBind 2020 release[15]. Starting from 2,852 complexes with experimentally measured binding affinities, complexes involving nucleic acids were removed, and only entries with reported dissociation constants (Kd) were retained, resulting in 2,071 usable samples. To reduce redundancy, the dataset was filtered using a sequence identity cutoff of 25%, foll-
owing the homology reduction protocol in[2]. This produced a final training set of 1,741 complexes. Two separate test sets were adopted from the same reference: (i) 79 complexes from a commonly used structure-based benchmark[16], and (ii) 82 two-chain complexes drawn from PDBBind. Consistent with previous affinity prediction studies[2, 6], all Kd values were converted to pKa = − log10(Kd) prior to training and evaluation.
2

2.2 Sequence Representation and Feature Extraction
Protein sequences were represented using embeddings generated by the ProtT5-XL-U50 model[14], a transformer-based protein language model trained on hundreds of millions of sequences. ProtT5 adopts the T5 architecture originally developed for natural language processing, but is pre-trained on large-scale protein databases using a masked language modeling objective. Through this pre-training strategy, the model learns contextual relationships among amino acids in a way that reflects both evolutionar-
y conservation and higher-level functional constraints. Several recent studies have shown that embeddings derived from ProtT5 implicitly capture a broad range of structural features, including secondary structure tendencies, disorder, and aspects of long-range residue interactions. These properties make ProtT5 a suitable backbone for tasks that traditionally rely on structural information but for which explicit 3D models may be unavailable or unreliable. In this work, each protein sequence was pas-
sed through ProtT5 to obtain a sequence of 1,024-dimensional residue embeddings. To construct a fixed-size representation for downstream modeling, we averaged these residue-level vectors to produce a single embedding for each protein. Although this pooling operation discards position-specific details, we found it sufficient for capturing overall biophysical trends relevant to binding energetics. The embeddings of the two interacting proteins were concatenated into a 2,048-dimensional vector, provi-
ding the model with a combined representation of the pair. This setup aims to retain complementary information from both partners while keeping the overall architecture lightweight and computationally manageable.
2.3 Model Architecture
The overall model design is illustrated in Figure 1. ProtT5 embeddings for each protein serve as the initial input. In some experiments, we applied Principal Component Analysis (PCA) to reduce dimensionality, mainly to assess whether a more compact representation would affect performance. Inter-protein dependencies were modeled using a bidirectional cross-attention module: one attention block computes the influence of protein A on protein B, and a second block computes the reverse. Each block empl-
oys four attention heads, which allows the model to capture a range of interaction patterns. Outputs from the cross-attention layers were averaged along the sequence dimension and concatenated, yielding a joint representation for the paired proteins. This vector was passed through a small feed-forward network with ReLU activations and dropout for regularization, producing the final pKa prediction. Source code and processed datasets are available at: https://github.com/fufuhonghong/ProtT-Affinity/ -
.
2.4 Training Protocol and Evaluation Metrics
The model was trained using the Huber loss (δ = 2.0), which we found to be more stable than mean squared error when dealing with occasional large deviations. Optimization was performed using AdamW with a learning rate of 1 × 10−4 and weight decay of the same magnitude. Training ran for up to 200 epochs with early stopping (patience of 15 epochs)
3

1024
sequenceA
sequenceB
ProtT5
ProtT5
2*64
Connection
Transformer pK
Embedding
PCA
PCA
Preprocessing Reasoning
Input Output
Figure 1: Architecture of the ProtT-Affinity model. ProtT5 embeddings of both interacting proteins are processed through a Transformer encoder and regression head to predict the binding affinity.
based on validation loss. Batch size was set to 16, and gradients were clipped at a norm of 1.0 to avoid instability. A ReduceLROnPlateau scheduler (factor 0.5, patience 8) was used to adjust the learning rate when validation performance plateaued. All experiments were repeated with three random seeds, and reported values correspond to the mean and standard deviation across these runs. Performance was evaluated using Pearson’s correlation coefficient (R), mean absolute error (MAE), mean squared er-
ror (MSE), and the coefficient of determination (R2).
3 Results
3.1 Performance Evaluation
The predictive performance of ProtT-Affinity on the two benchmark test sets is summarized in Table 2. On the first test set, which consists primarily of complexes drawn from a widely used structure-based affinity benchmark, the model achieved a Pearson correlation coefficient of 0.628 and a mean absolute error (MAE) of 1.645 kcal/mol. Performance on the second test set was somewhat lower (R = 0.459; MAE = 1.794 kcal/mol), which is consistent with prior reports indicating that this subset includes -
a broader diversity of complex types and generally poses a more challenging prediction task. When the two test sets are combined, ProtT-Affinity obtains an overall correlation of 0.579 and an MAE of 1.722 kcal/mol. While these values do not reach the accuracy of the
4

Table 1: Training hyperparameters and settings. Parameter Value Loss function Huber loss (δ = 2.0) Optimizer AdamW Learning rate 1 × 10−4 Weight decay 1 × 10−4 Batch size 16 Maximum epochs 200 Early stopping patience 15 Gradient clipping norm 1.0 Learning rate scheduler ReduceLROnPlateau Scheduler factor 0.5 Scheduler patience 8 Sample weighting Based on deviation from mean pK
best structure-dependent methods, they demonstrate that sequence-only features extracted from protein language models capture a substantial portion of the variation in experimental binding affinities. Importantly, the results were stable across the three independent training runs, with standard deviations remaining small relative to the absolute performance metrics.
Table 2: Performance of ProtT-Affinity on PDBBind benchmark sets (mean ± std over three runs).
Dataset Size Pearson’s R MAE (kcal/mol)
Test set 1 79 0.628 ± 0.015 1.645 ± 0.032 Test set 2 82 0.459 ± 0.021 1.794 ± 0.028 Combined set 161 0.579 ± 0.018 1.722 ± 0.030
3.2 Comparison with Existing Methods
To contextualize the performance of ProtT-Affinity, we compared the model with a range of sequence-based and structure-based predictors under the same benchmarking protocol (Table 3). As expected, state-of-the-art structure-derived models such as ProAffinity-GNN outperform sequence-only approaches, particularly on the more heterogeneous test sets. Nevertheless, ProtT-Affinity achieves comparable accuracy to the traditional PPI-Affinity SVM model and surpasses several well-established baselines, in-
cluding DFIRE and CP PIE. Interestingly, the gap between sequence-based and structure-based methods is not uniform across datasets. On Test Set 1, ProtT-Affinity is noticeably closer to the performance of mid-tier structure-based methods, whereas on Test Set 2 the difference widens. This may reflect the extent to which the underlying complexes conform to the types of interactions that PLM embeddings can represent effectively. Several recent studies have noted that PLM-derived features tend to corr-
elate well with general trends in binding energetics but may struggle when fine-grained structural details dominate the interaction landscape.
5

Figure 2 illustrates the relationship between predicted and experimental pKa values for both test sets. The scatterplots show that the model captures the overall trends in affinity but exhibits larger variability for complexes with intermediate binding strengths. This is consistent with the behavior of many sequence-based models and suggests that hybrid approaches incorporating structural priors or predicted complex geometries may further improve performance.
Table 3: Comprehensive comparison with existing methods on standard benchmarks.
Method Type Test set 1 (79) Test set 2 (82) Combined set (161)
R MAE R MAE R MAE
PRODIGY[2, 4] Structure 0.735 1.43 0.334 2.52 0.456 1.98 DFIRE[2, 3] Structure 0.602 4.64 0.145 26.02 -0.005 15.53 CP PIE[2, 17] Structure 0.517 8.80 0.111 7.26 0.167 8.02 ISLAND[2, 18] Sequence 0.378 2.10 0.217 2.15 0.314 2.13 PPI-Affinity (SVM)[2, 19] Structure 0.616 1.82 0.436 1.78 0.545 1.80 ProAffinity-GNN[2] Structure 0.697 1.52 0.620 1.49 0.669 1.50 ProtT-Affinity Sequence 0.628 1.65 0.459 1.79 0.579 1.72
These findings are consistent with recent sequence-only studies such as BAPULM[12] and PPIretrieval[13], which confirm that PLMs can effectively capture binding-related representations without explicit structure input.
4 Discussion
ProtT-Affinity establishes that large-scale protein language models can effectively infer binding energetics solely from sequence. By leveraging ProtT5 embeddings and attention mechanisms, it achieves performance competitive with sophisticated structure-dependent predictors. These results echo recent findings that PLMs implicitly encode secondary and tertiary structure features[20]. In pharmaceutical research, the need to screen massive protein libraries for drug development is often constrained b-
y the high computational costs of structure-based methods. ProtT-Affinity, by leveraging sequence-only inference, avoids the resource-heavy demands of structural modeling (such as molecular docking or 3D structure prediction), thus drastically reducing computational overhead. This efficiency enables rapid prioritization of promising protein targets, accelerating the transition from target discovery to experimental validation and ultimately shortening the timeline of drug development pipelines. Des-
pite its strengths, ProtT-Affinity remains limited in residue-level interpretability and cannot yet rival structure-based approaches such as ProAffinity-GNN in absolute accuracy. Future research could integrate predicted 3D structures from AlphaFold, or hybridize graphbased frameworks such as PPI-Graphomer[21] and AFTGAN[5] for enhanced contextual reasoning. Expanding training datasets following strategies from PLANET[6] or Lv et al.[22] may further improve generalization across unseen protein fam-
ilies.
6

Figure 2: Correlation between predicted and experimental pKa values across test sets. (A) Test set 1 (R = 0.628), (B) Test set 2 (R = 0.459). The diagonal indicates perfect agreement.
5 Conclusion
This work introduces ProtT-Affinity, a scalable, sequence-only framework for protein–protein binding affinity prediction. Through rigorous benchmarking, this work demonstrates that sequence embeddings from large PLMs can approximate the predictive power of structurebased models, offering an accessible alternative when 3D information is unavailable. This work advances the frontier of sequence-driven biophysical modeling and lays a foundation for future integration with structure prediction and inte-
raction analysis tools. The success of ProtT-Affinity exemplifies the growing synergy between natural language processing and biophysics, marking a step toward universal, structure-free modeling of molecular interactions.
References
[1] Tanlin Sun, Bo Zhou, Luhua Lai, and Jianfeng Pei. Sequence-based prediction of protein protein interaction using a deep-learning algorithm. BMC bioinformatics, 18(1):277, 2017.
7

[2] Zhiyuan Zhou, Yueming Yin, Hao Han, Yiping Jia, Jun Hong Koh, Adams Wai-Kin Kong, and Yuguang Mu. Proaffinity-gnn: a novel approach to structure-based proteinprotein binding affinity prediction via a curated data set and graph neural networks. Journal of chemical information and modeling, 64(23):8796–8808, 2024.
[3] Song Liu, Chi Zhang, Hongyi Zhou, and Yaoqi Zhou. A physical reference state unifies the structure-derived potential of mean force for protein folding and binding. Proteins: Structure, Function, and Bioinformatics, 56(1):93–101, 2004.
[4] Li C Xue, Joa ̃o Pglm Rodrigues, Panagiotis L Kastritis, Alexandre Mjj Bonvin, and Anna Vangone. Prodigy: a web server for predicting the binding affinity of proteinprotein complexes. Bioinformatics, 32(23):3676–3678, 2016.
[5] Yanlei Kang, Arne Elofsson, Yunliang Jiang, Weihong Huang, Minzhe Yu, and Zhong Li. Aftgan: prediction of multi-type ppi based on attention free transformer and graph attention network. Bioinformatics, 39(2):btad052, 2023.
[6] Xiangying Zhang, Haotian Gao, Haojie Wang, Zhihang Chen, Zhe Zhang, Xinchong Chen, Yan Li, Yifei Qi, and Renxiao Wang. Planet: a multi-objective graph neural network model for protein–ligand binding affinity prediction. Journal of Chemical Information and Modeling, 64(7):2205–2220, 2023.
[7] Hong Guo, Bingjing Liu, Danli Cai, and Tun Lu. Predicting protein–protein interaction sites using modified support vector machine. International Journal of Machine Learning and Cybernetics, 9(3):393–398, 2018.
[8] Yuanmiao Gui, Rujing Wang, Yuanyuan Wei, and Xue Wang. Dnn-ppi: a large-scale prediction of protein–protein interactions based on deep neural networks. Journal of Biological Systems, 27(01):1–18, 2019.
[9] Satyajit Mahapatra, Vivek Raj Gupta, Sitanshu Sekhar Sahu, and Ganapati Panda. Deep neural network and extreme gradient boosting based hybrid classifier for improved prediction of protein-protein interaction. IEEE/ACM transactions on computational biology and bioinformatics, 19(1):155–165, 2021.
[10] Zhu-Hong You, Wen-Zhun Huang, Shanwen Zhang, Yu-An Huang, Chang-Qing Yu, and Li-Ping Li. An efficient ensemble learning approach for predicting protein-protein interactions by integrating protein primary sequence and evolutionary information. IEEE/ACM transactions on computational biology and bioinformatics, 16(3):809–817, 2018.
[11] Dima Kozakov, Ryan Brenke, Stephen R Comeau, and Sandor Vajda. Piper: an fftbased protein docking program with pairwise potentials. Proteins: Structure, Function, and Bioinformatics, 65(2):392–406, 2006.
[12] Radheesh Sharma Meda and Amir Barati Farimani. Bapulm: Binding affinity prediction using language models. arXiv preprint arXiv:2411.04150, 2024.
8

[13] Chenqing Hua, Connor Coley, Guy Wolf, Doina Precup, and Shuangjia Zheng. Effective protein-protein interaction exploration with ppiretrieval. arXiv preprint arXiv:2402.03675, 2024.
[14] Ahmed Elnaggar, Michael Heinzinger, Christian Dallago, Ghalia Rehawi, Yu Wang, Llion Jones, Tom Gibbs, Tamas Feher, Christoph Angerer, Martin Steinegger, et al. Prottrans: Toward understanding the language of life through self-supervised learning. IEEE transactions on pattern analysis and machine intelligence, 44(10):7112–7127, 2021.
[15] Renxiao Wang, Xueliang Fang, Yipin Lu, and Shaomeng Wang. The pdbbind database: Collection of binding affinities for protein- ligand complexes with known three-dimensional structures. Journal of medicinal chemistry, 47(12):2977–2980, 2004.
[16] Panagiotis L Kastritis, Iain H Moal, Howook Hwang, Zhiping Weng, Paul A Bates, Alexandre MJJ Bonvin, and Jo ̈el Janin. A structure-based benchmark for proteinprotein binding affinity. Protein Science, 20(3):482–491, 2011.
[17] Sun Kim, Soo-Yong Shin, In-Hee Lee, Soo-Jin Kim, Ram Sriram, and Byoung-Tak Zhang. Pie: an online prediction system for protein–protein interactions from text. Nucleic acids research, 36(suppl 2):W411–W415, 2008.
[18] Wajid Arshad Abbasi, Adiba Yaseen, Fahad Ul Hassan, Saiqa Andleeb, and Fayyaz Ul Amir Afsar Minhas. Island: in-silico proteins binding affinity prediction using sequence information. BioData Mining, 13(1):20, 2020.
[19] Zhongliang Guo and Rui Yamaguchi. Machine learning methods for protein-protein binding affinity prediction in protein design. Frontiers in Bioinformatics, 2:1065703, 2022.
[20] Maad Shatnawi. Protein-protein interaction prediction: Recent advances. In 2017 28th International Workshop on Database and Expert Systems Applications (DEXA), pages 69–73. IEEE, 2017.
[21] Jun Xie, Youli Zhang, Ziyang Wang, Xiaocheng Jin, Xiaoli Lu, Shengxiang Ge, and Xiaoping Min. Ppi-graphomer: enhanced protein-protein affinity prediction using pretrained and graph transformer models. BMC bioinformatics, 26(1):116, 2025.
[22] Hang Zhou, Weikun Wang, Jiayun Jin, Zengwei Zheng, and Binbin Zhou. Graph neural network for protein–protein interaction prediction: a comparative study. Molecules, 27(18):6135, 2022.
9

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:04.372Z
- **Text Length:** 21019 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 9 of 9
