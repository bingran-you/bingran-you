# PDF Document: Lan et al. - 2025 - Causal Inference, Biomarker Discovery, Graph Neural Network, Feature Selection.pdf

**File Path:** Lan et al. - 2025 - Causal Inference, Biomarker Discovery, Graph Neural Network, Feature Selection.pdf

**Processed Date:** 2026-02-10T18:13:58.084Z

**File Size:** 503.62 KB

**Total Pages:** 17

**Extracted Pages:** 17

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3702

**Title:** Causal Inference, Biomarker Discovery, Graph Neural Network, Feature Selection

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Causal Graph Neural Networks for Mining Stable
Disease Biomarkers
Chaowang Lan1*†, Jingxin Wu1†, Yulong Yuan1, Chuxun Liu1, Huangyi Kang1, Caihua Liu2
1*School of Artificial Intelligence, Guilin University of Electronic Technology, Guilin, China. 2Department of Computer Science, Cornell University, New York, United States of America.
*Corresponding author(s). E-mail(s): chaowanglan@guet.edu.cn; Contributing authors: 1901610218@mails.guet.edu.cn; †These authors contributed equally to this work.
Abstract
Biomarker discovery from high-throughput transcriptomic data is crucial for advancing precision medicine. However, existing methods often neglect gene–gene regulatory relationships and lack stability across datasets, leading to conflation of spurious correlations with genuine causal effects. To address these issues, a causal graph neural network (Causal-GNN) method that integrates causal inference with multi-layer graph neural networks (GNNs) is developed. The key innovation is the incorporation o-
f causal effect estimation for identifying stable biomarkers, coupled with a GNN-based propensity scoring mechanism that leverages crossgene regulatory networks. The experimental results demonstrate that our method achieves consistently high predictive accuracy across four distinct datasets and four independent classifiers. Moreover, it enables the identification of more stable biomarkers compared to traditional methods.Our work provides a robust, efficient, and biologically interpretable tool for-
 biomarker discovery, demonstrating strong potential for broad application across medical disciplines.
Keywords: Causal Inference, Biomarker Discovery, Graph Neural Network, Feature Selection
1
arXiv:2511.13295v1 [q-bio.QM] 17 Nov 2025

1 Introduction
Early diagnosis plays a vital role in clinical medicine by facilitating timely interventions and improving therapeutic outcomes, thereby increasing patient survival rates. Biomarkers —defined as quantifiable molecular indicators of an organism’s physiological or pathological state—serve as fundamental tools in clinical diagnostics [1]. Acting as ”molecular messengers,” they provide a critical bridge between disease mechanisms and clinical applications. Recent research in molecular biology and geno-
mic technologies has further elevated the importance of biomarkers, prompting a transition from traditional morphological assessments toward precision molecular subtyping [2]. This transition focuses on molecular biomarkers such as mRNA and miRNA, which identify key genes and signaling pathways involved in disease progression. Such insights support targeted therapy selection, patient stratification, and prognostic evaluation. Numerous studies highlight the translational value of these molecular bi-
omarkers. For example, Jia Liu et al. identified a plasma-based signature of three miRNAs (miR21, miR-29a, and miR-92a) with high sensitivity and specificity for non-invasive early detection of colorectal cancer [5]. Yi Han et al. discovered a plasma extracellular vesicle (EV) mRNA panel that effectively predicts overall postoperative survival in pancreatic ductal adenocarcinoma patients [6]. Kanta Horie et al. showed that circulating levels of MTBRtau243 protein accurately reflect the cerebral ac-
cumulation of pathogenic tau aggregates and correlate with the severity of Alzheimer’s disease (AD), establishing plasma MTBRtau243 as a key biomarker for quantifying tau pathology in AD [7]. Collectively, these researches indicate the critical essential role of biomarker identification and characterization in advancing clinical diagnostics, with significant implications for enhancing diagnostic accuracy, guiding treatment strategies, and ultimately improving patient outcomes. The RNA-seq technolo-
gy enables the genome-wide quantification of RNA expression levels, providing a powerful platform for the identification of potential biomarkers.Several computational methods have been developed for biomarker identification from RNA-seq data, primarily categorized into three types: wrapper, embedded, and filter methods [9]. However, recent advancements have increasingly emphasized filter and embedded approaches, reflecting their growing prominence in the field. Filter methods assess feature import-
ance based on intrinsic characteristics of data, typically offering higher computational efficiency compared to wrapper methods. Representative examples include Multi-Cluster Feature Selection (MCFS) [30], Orthogonal Least Squares-Based Fast Feature Selection (Fastcan) [31], and Deep Feature Screening(DFS) [32]. Embedded methods strike a balance between filter and wrapper approaches by integrating feature selection within the model training process, thereby combining advantages from both paradigms-
. A notable example is Contrastive Feature Selection (CFS-master) [29] exemplifies this category, though it demonstrates suboptimal performance in practical feature selection tasks compared to theoretically expected outcomes [8, 10, 11]. A key limitation of most existing methodologies is that they primarily rely on correlations between disease phenotypes and molecular features, thereby failing to distinguish genuine causal relationships from confounding associations [13, 14]. This limitation reduc-
es biological interpretability, particularly in complex diseases like cancer and neurodegenerative disorders, where non-linear gene
2

interactions and unmeasured confounders complicate accurate biomarker identification and causal inference [15]. To address this challenge, we previously developed a causal inference method for biomarker discovery in Alzheimer’s disease, aiming to enhance the detection of genuine causal relationships amid intricate biological confounding [33]. However, this approach has several limitations: the propensity scores derived via multiple regression are inherently constrained to capture only co-regulato-
ry information while neglecting cross-regulatory effects—indirect regulation mediated by intermediate molecules. This limitation diminishes the accuracy of propensity score estimation and restricts the method’s ability to encapsulate the full complexity of gene regulatory networks in Alzheimer’s disease. In this paper, we develop a novel method that integrates Graph Neural Networks (GNNs) with causal inference to analyze high-dimensional biological data. This method consists of three steps: (1) re-
gulatory network construction: a gene regulatory graph is created in which nodes represent genes and edges indicate gene co-expression relationship, with edge weights reflecting regulatory strength; (2) propensity scoring using a three-layer GNN: this model integrates up to three-hop neighborhoods to leverage cross-regulatory signals across modules, generating node-level propensity scores that estimate treatment probabilities based on high-dimensional graph-embedded covariates; (3) estimation of a-
verage causal effect : estimating each gene’s average causal effect on the phenotype by utilizing these propensities. Then ranking all genes through their average causal effects. Experimental results demonstrate that our method achieves higher accuracy and F1 scores while significantly reducing the feature set. Additionally, the causal estimation step provides more stable and reproducible biomarkers across multiple runs and datasets, highlighting the efficiency, scalability, and suitability of our-
 method for precision medicine applications in biomarker discovery. Several computational methods have been developed for biomarker identification from RNA-seq data, primarily categorized into three types: wrapper, embedded, and filter methods [9]. However, recent advancements have increasingly emphasized filter and embedded approaches, reflecting their growing prominence in the field.
2 Dataset
In this study, we utilized data of breast cancer, non-small cell lung cancer, and glioblastoma from PltDB [12], as well as datasets of AD from GEO (GSE33000 and GSE44770). Detailed information about each dataset can be found in Table 1. We extract only mRNA data from blood RNA-seq samples and discard all other data. Next, we remove low-quality or redundant entries to ensure data reliability and consistency. We then check for missing values and employ mean imputation to reduce their impact on subse-
quent analyses. To eliminate scale discrepancies across samples, we standardize all gene expression data to a uniform scale.
3 Methodology
Causal inference aims to quantify the causal effects among variables using observational data, going beyond simple statistical associations [18–20]. The core framework
3

Table 1 Dataset Information and Clinical Sample Distribution
Dataset Disease Sample Size Source
Diseased Healthy
Breast Cancer Breast cancer 53 563 PltDB NSCLCa Lung cancer 453 563 PltDB Glioblastoma Glioblastoma 253 563 PltDB GSE33000/44770b Alzheimer’s 258 439 GEO
Table 1: This table lists the datasets used in the study, including the type of disease, sample size, and the source of the data. aNon-Small Cell Lung Carcinoma; bMerged GEO datasets;
Expression Matrix
Genes
Samples
Genes
Genes
Adjacency Matrix
a
c
d
e
h
j
gf
I
b
GNN network Genes
Samples
Propensity Score Matrix
...
Cause Graph
Graph Data
A. Constructing a causal graph
B. Controlling for confounding variables
Samples
Expression Matrix Propensity Score Matrix
Generalized Propensity Score
Estimating Causal Effect Values
Identifying Biomarkers
C. Calculating the average causal effects of each sample
Genes
Genes
Fig. 1 The Framework of Our Methodology. Step1: constructing the gene regulatory network; Step2: calculating propensity score via graph neural network; Step3: calculating the average causal effects of each gene.
for causal discovery in modern causal analysis is the Structural Causal Model (SCM), which is proposed by Judea Pearl [21]. This framework contains three stages: (1) constructing a causal graph, (2) controlling for confounding variables, and (3) calculating the average causal effects of each sample. In this paper, we develop the causal graph neural network method to identify disease biomarkers which has the similar framework of causal inference. Our method comprises three key steps: (1) Constructi-
ng gene-regulatory network; (2) calculating propensity score via graph neural network; and (3) estimating the average causal effect. The overall framework of our method is presented in Fig 1.
4

3.1 Constructing Gene Regulatory Network
For given a expression profile X ∈ RN×d, where d is the number of samples and N is the number of gene. We denote that G = {g1, g2, . . . , gN } is the gene set in X and Y = {Y1, Y2, . . . , Yd} is the label of the sample (disease or not). A ∈ RN×N is the adjacency matrix of gene regulatory network and is calculated by the equation 1:
Aij =
(
1, if ∃ interaction between gi and gj;
0, otherwise (no interaction). (1)
The information of gene interaction is obtained from the RNA Inter Database [22].
3.2 Calculating Propensity Score via Graph Neural Networks
In this section, the graph neural network is employed to calculate the propensity score of each mRNA. The propensity score aims to estimate the effect of a mRNA by counting for its co-regulated mRNAs that predict outcomes (disease or not) [33]. Therefore, the propensity score is the probability of the mRNA conditionally on its coregulated mRNAs. The graph neural network has strong aggregation capabilities for calculating the conditional relationship between mRNA and its co-regulated mRNAs. The gra-
ph neural network has many different types of networks, such as graph convolutional network(GCN), graph attention network (GAT), and message passing neural network (MPNN). The core mechanism of the GCN lies in performing spectral-domain convolutions on graph data, integrating adjacency relationships into the feature propagation process. Therefore, the GCN is suitable for estimating the conditional relationship between mRNA and its co-regulated mRNAs. Taking the simplified model by Kipf & Welling a-
s an example, the propagation in a single-layer GCN in this paper can be represented as equation 2 [26, 27]:
GCNl+1(H(l), A) = σ Dˆ −1/2ADˆ −1/2H(l)W (l) (2)
The key parameters in the formula are as follows:
• H(l) ∈ RN×dl : Node representations at layer l. Where H(0) = X.
• D: The degree matrix of adjacency matrix A. Its diagonal transformation D− 1
2
normalizes the aggregation of neighboring features, mitigating degree bias. • W (l) ∈ Rdl×dl+1 : The trainable parameter matrix at layer l. • σ(·): The activation function, here implemented as ReLU.
The convolutional layer is followed by batch normalization (BatchNorm) and a nonlinear activation function, with dropout applied selectively to mitigate overfitting. These adjustments significantly enhance the model’s robustness and generalization, particularly addressing the high noise and sparsity commonly encountered in gene networks. The number of convolutional layer is the farthest distance that node can travel. The capacity for gene regulation diminished with the increasing number of regulat-
ory
5

layers increase. Therefore, a three layer GCN is applied in this paper. The three layer GCN is presented by equation 3.
H(1) = GCN1(X, A)
H(2) = GCN2(H(1), A)
H(3) = GCN3(H(2), A) + Xskip
(3)
The output of the third layer H(3) is a N × d matrix and regards as the propensity score matrix. The term Xskip denotes a residual connection that adds the original node features X back to the GCN output, which preserves node-specific information and mitigates over-smoothing. It will be used for estimating the average causal effect.
3.3 Estimating the Average Causal Effect
The generalized propensity score is an extension of the propensity score for measuring intervention of continuous values. Given a gene g = {g1, g2, . . . , gd}, H(3)
g presents the generalized propensity score Rg is computed by equation 4:
Rg = tanh g − H(3)
g (4)
where g represents the gene expression values, and fg is the GNN-derived propensity score. Because the RNA-seq data yield a binary outcome (0 for normal, 1 for diseased),the logistic regression model is employed to estimate each gene’s causal effect. The formula of estimating the causal effect of gene g is equation 6:
Logistic(g) = 1
1 + e−M (5)
M = a0 + a1g + a2g2 + a3Rg + a4R2
g + a5Rg · g (6)
Where ai are parameters of logistic regression model. Once trained, this model clarifies the probability of disease occurrence under the regulation of a given gene. We then define the average causal effect (ACE) for gene g as equation 7:
ACE(g) = 1
d
d
X
i=1
Yi − Logistic(gi) 2. (7)
The lower ACE(g) of gene g, the stronger capacity of this gene in distinguishing normal and diseased samples. Consequently, all genes are ranked in ascending order by their ACE values.
6

4 Results and Discussion
4.1 Experimental design and evaluation metrics
A small subset of mRNAs could distinguish patients from healthy samples, resulting in robust classification outcomes. These mRNAs can be viewed as biomarkers. The process of identifying biomarkers is that ranking mRNAs by ascending average causal effect, then using a classifier to evaluate their ability to differentiate between patients and healthy samples. As the number of selected mRNAs increases, the performance of classifier rises with increasing mRNAs, reaching a maximum when the significant -
mRNAs are captured. These significant mRNAs are considered as biomarkers. Different classifiers achieve significantly different classification performance, even they use the same features. Therefore, four classifiers—Support Vector Machine (SVM), Naive Bayes (NB), Decision Tree (DT), and XGBoost (XGB)— are selected(The code for this study will be made available at the following repository upon acceptance https://github.com/32713271/Causal-Graph-Neural-Networks-forMining-Stable-Disease-Biomarkers).-
 The core metric of measuring the performance of classifier are F1-score and Precision. A higher F1-score or a higher precision indicates stronger discriminative capability of the selected mRNAs for differentiating between patient and healthy samples [28]. The F1 score is calculated by equations 8:
F 1 = 2 × precision × recall
precision + recall (8)
Precision: The proportion of true positive samples among all the samples predicted as positive.Recall: The proportion of correctly predicted positive samples among all the actual positive samples. Additionally, the number of selected biomarkers also serves as a performance indicator. The optimal method maximizes the classification performance while minimizing the cardinality of selected features.
4.2 Parameter selection
The depth of GNNs refers to the number of successive message-passing within the network. Similarly, the depth of the GCN in our method implies the number of successive cross-regulate genes within the gene regulate network. In order to determine an appropriate depth of GCN our method, we compare three different depth GCN architectures (2-, 3-, and 4-layer). All architectures apply the same input dimensionality derived from the feature matrix and are optimized by the AdamW algorithm with a learning -
rate of 0.01 and weight decay of 5e − 4. To ensure training stability, gradient clipping with a maximum norm of 1.0 was applied. Furthermore, a ReduceLROnPlateau scheduler was utilized to dynamically adjust the learning rate in response to stagnation in training loss, with a reduction factor of 0.5 and patience set to 10 epochs. The training process was supervised by a custom-designed ImprovedGraphLoss function, aiming to minimize the discrepancy between the learned node embeddings
7

Fig. 2 Training loss trajectories of three different GCN architectures with varying network depths (2-layer, 3-layer, and 4-layer) over 200 epochs.
and the underlying graph topology. The best-performing model during the 500 training epochs was selected based on the minimum training loss. Figure 2 presents the training loss trajectories of these GCN architectures. As illustrated in this figure, the 3-layer GCN architecture consistently outperformed the 2-layer GCN architecture in terms of convergence speed and final loss value, while maintaining better stability than the 4-layer GCN architecture, which showed marginal gains at the cost of incr-
eased computational complexity. Consequently, a 3-layer GCN architecture model was adopted in this study as a trade-off between representational power and training efficiency. This experiment implies that as the number of regulatory layers increases, the impact of cross-regulatory genes diminishes.
4.3 Comparing the predictive performance with other methods
Many methods for feature selection have been developed. In this paper, we focused on comparing the performance of our method with five representative feature selection methods in four datasets (breast cancer, non-small cell lung cancer, glioblastoma, and Alzheimer’s disease). These five popular methods are :
1. CFS-master: Feature Selection in the Contrastive Analysis Setting (as the baseline for a state-of-the-art performance benchmark) [29]. 2. MCFS: Unsupervised feature selection for multi-cluster data [30]. 3. Fastcan: Orthogonal least squares-based fast feature selection for linear classification [31].
8

4. DFS: Deep feature screening for ultra-high-dimensional data via deep neural networks [32]. 5. Traditional Causal Inference :Uses a standard causal inference process (propensity score matching) without incorporating GNN for causal structure learning or parameter optimization [33].
Non-Small Cell Lung Cancer Dataset: In this dataset, the F1-score and precision of our method are higher than other methods across all classifiers,. Although our method do not employ the minimum quantity of feature sets in the Naı ̈ve Bayes (NB) and Decision-tree classifiers, predictive performance margins were large. The predictive performance of our method surpassed Causal Inference by 9.3% (F1: 0.825 vs. 0.755) and 10.0% (F1: 0.867 vs. 0.788) under decision-tree and NB classifiers, respectively-
. These results denote that aggressive feature pruning may discard genes essential for accurate classification, whereas our strategy balances parsimony with predictive power. Alzheimer’s Disease Dataset: In the Alzheimer’s disease (AD) dataset, the method again excelled under complex class-imbalance conditions. Within the decisiontree model it achieved the highest F1-score (0.948) while selecting only 14 biomarkers—the fewest among all contenders. In NB, its F1-score (0.900) was marginally below t-
hat of CFS-Master (0.903), yet it required an order of magnitude fewer features (4 vs. 45), illustrating superior efficiency. Relative to DFS (single-feature), our method improved accuracy by 4.8% (0.900 vs. 0.859), confirming an advantageous trade-off between performance and parsimony. Glioblastoma Dataset:Our algorithm simultaneously maximized accuracy and minimized feature count across all four classifiers. The decision-tree model showed the largest gain: accuracy improved by 4.5% over Causal I-
nference (0.829 vs. 0.793) while reducing the feature count by 77% (11 vs. 47). In NB, accuracy was 4.0 % higher than Fastcan (0.863 vs. 0.830) with an 84% decrease in features (7 vs. 43). Breast Cancer Dataset:On this dataset, our method achieved the highest classification performance (F1-score) in all four models. In the decision-tree classifier, the biomarker panel selected by our approach—only eight features—yielded the best results while keeping the feature count to a minimum. In the SVM, XGB-
oost, and Naı ̈ve Bayes (NB) classifiers, we retained slightly more biomarkers than some competing methods to maximize predictive power. For instance, under NB classifier, our method employed 30 features—16 more than Causal Inference (14)—and these additional variables raised the F1-score from 0.972 to a dataset-leading 0.978. These results show that the proposed approach consistently attains the optimal F1-score, either with a highly compact feature set or with only modest, strategically chosen e-
xpansions when necessary. Across four heterogeneous transcriptomic cohorts, our method consistently delivered very high predictive accuracy under four classifiers and maintained compact biomarker sets. Its gains were most pronounced in the NSCLC and GBM datasets, where it outperformed all baselines both in accuracy and parsimony. In the BC dataset, it achieved a joint optimum of performance and efficiency in the decision-tree model and led accuracy tables compare with other models. In the AD datas-
et, it provided the best decision-tree performance and the most favorable accuracy–feature trade-off in
9

the remaining classifiers. Collectively, these findings establish the method as a reliable and efficient tool for biomarker discovery in heterogeneous genomic data.
4.4 Comparing the stability of biomarkers with other methods
The stability of feature selection pertains to the insensitivity of feature selection algorithms to variations in the dataset [41, 42]. This implies that highly similar subsets of features can still be identified across different resampling or batches. In bioinformatics, the high-dimensional data is often accompanied by a low sample size, thereby the stability of biomarkers becomes particularly critical [41]. Traditional feature selection methods that rely on correlation tend to produce markedly d-
ifferent candidate gene sets when applied to varying data batches or during resampling processes. Such instability directly undermines the reproducibility of research findings, diminishes their biological validity, and may even result in erroneous conclusions regarding key biomarkers [41].A robust method ensures that the identified features are not merely artifacts of random sampling but possess genuine biological relevance, thereby enhancing the credibility of subsequent biomarker validation and -
clinical translation. To quantify the stability of the our method, we employed a robustness assessment protocol in non-small cell lung carcinoma (NSCLC) data. This dataset was randomly partitioned into five disjoint subsets, and feature selection was performed independently on each subset. Stability was evaluated by analyzing the absolute count of overlapping features in the top-50 biomarkers across different group combinations. For each possible combination of group size (where group size ranges -
from 2 to 5), we computed the overlap count defined as:
OverlapCount(Ωg) =
g
\
i=1
Si (9)
where g denotes the group size, Si represents the set of top-50 features from partition i, and T denotes set intersection. As shown in Table 3, our method demonstrated superior stability across all group complexity levels. In pairwise comparisons (10 combinations), our method maintained overlap counts between 17–30 features, with an average of 23.2 features per group combination. This performance has competitive with MCFS method, which averaged 25.7 features across the same pairs. CFS-master never-
 exceeded 2 overlapping features, while DFS remained below 5 in almost all comparisons (peaking at 9 in one pairwise case). Our previous causal inference method is not mentioned since the number of the sample in each sub-dataset is too small to calculate the causal inference of each features. As the number of group combinations increases, the stability performance of our method becomes better than other methods. In the triple-group combinations (10 combinations), our method maintained 12–21 overla-
pping features, yielding an average of 15.1 features – 9.4% higher than MCFS’s average of 13.8 features. In quadruple-group combination comparisons (5 combinations), our method achieved 9–15 overlapping featureswith an average of 11.2 features , outperforming MCFS by 75.0% relative improvement. Most importantly, at the maximum complexity of all five groups, our method preserved 9 common features – nine times more than MCFS (1 feature).
10

These results indicate that as increasing the number of group combinations reduces the ability to identify common biomarkers. Compared to other methods, our approach is less affected by the number of group combinations and consistently identify more stable biomarkers. Furthermore, it provides computational stability not achieved by traditional approaches, which often fail to yield reliable biomarker signatures.
4.5 The Relationship between Biomarkers and Diseases
To validate the effectiveness of the selected biomarkers, this study conducted Gene Ontology (GO) biological process enrichment analysis on the top 100 mRNAs from Glioblastoma datasets. We identified several significantly enriched gene clusters (FDR < 0.05) associated with key pathological mechanisms of Glioblastoma cancers. The detailed analysis is as follows: Ribosome Biogenesis and Tumor Proliferation: Genes encoding ribosomal proteins, such as RPS15A, RPS27, and RPL21, are significantly enrich-
ed in ”Cytoplasmic Translation” (FDR = 3.09 × 10−11) and ”Ribosomal Small Subunit Biogenesis” (FDR = 5.21 × 10−2). Aberrant activation of ribosome biogenesis is a prominent feature of glioblastoma, where it enhances tumor cell proliferation by upregulating nucleolar rDNA transcription [36]. Studies have shown that ribosomal protein genes are abnormally expressed in glioblastoma cells. Platelet Aggregation and Tumor Invasive Microenvironment: Genes such as ACTN1, MYH9, and GP1BA are significantly e-
nriched in ”Platelet Aggregation” (FDR = 3.24 × 10−6). Platelets can influence the tumor microenvironment through interactions between platelet-associated factors and tumor cells [38]. Glioblastoma stem cells promote microtubule formation in glioblastoma by transforming growth factor-β (TGF-β), enhancing tumor cell invasion [39]. Cytoskeletal dynamics and invasion phenotype: Genes like TPM1, MYH9, and ACTN1 are enriched in ”Actin Filament Organization” (FDR = 8.98×10−3). Research indicates that My-
osin IIA and IIB are the most common isoforms of Myosin II in glioblastoma, associated with glioblastoma cell malignancy [40].
5 Conclusion
This study introduces a GNN-augmented causal-effect framework that simultaneously learns gene-network structures and quantifies each gene’s causal impact, facilitating principled feature pruning. A key advantage of this framework is its use of a multi-layer graph neural network, which effectively captures richer cross-regulatory information—particularly indirect regulatory effects through intermediate molecules. This capability significantly enhances the accuracy of propensity score fitting, addre-
ssing the limitations of traditional methods that only consider co-regulatory information. Moreover, integrating causal inference methodologies improves the stability of identified biomarkers by distinguishing genuine causal relationships from spurious associations and accounting for confounding factors. This ensures that selected biomarkers are not artifacts of data variability but possess robust biological relevance. Rigorous stability analysis using five-fold resampling on the NSCLC dataset con-
firms this robustness, with a mean pairwise overlap of 46.4% ± 8.2% among selected gene
11

sets. Thus, the framework provides compact, reproducible, and causally interpretable biomarker panels, serving as a powerful tool to advance precision medicine discovery.
Declarations
• Funding: No funding was received for this work.
• Conflict of interest/Competing interests: The authors declare no competing interests.
• Ethics approval and consent to participate: Not applicable. This study did not involve human participants, and the data used was publicly available. • Consent for publication: Not applicable. The manuscript does not contain any individual data that requires consent for publication. • Data availability: The dataset(s) supporting the conclusions of this article is(are) available in the PltDB repository (https://www.pltdb-hust.com) and the GEO database (https://www.ncbi.nlm.nih.gov/geo/) (GSE33000 -
and GSE44770). • Materials availability: Not applicable. The materials used in the study are publicly available datasets.
References
[1] Kyle Strimbu and Jorge A. Tavel. What are biomarkers? Current Opinion in HIV and AIDS, 5(6):463–466, 2010.
[2] Francis S. Collins and Harold Varmus. A new initiative on precision medicine. New England Journal of Medicine, 372(9):793–795, 2015.
[3] Yixing Han, Shouguo Gao, Kathrin Muegge, Wei Zhang, and Bing Zhou. Advanced applications of RNA sequencing and challenges. Bioinformatics and Biology Insights, 9:BBI–S28991, 2015.
[4] Shanrong Zhao, Baohong Zhang, Ying Zhang, William Gordon, Sarah Du, Theresa Paradis, Michael Vincent, and David von Schack. Bioinformatics for RNA-Seq Data Analysis. In Bioinformatics-Updated Features and Applications. InTechOpen, 2016.
[5] J. Liu, B. Chen, M. Yang, and others. A Three-Plasma miRNA Panel Predicts the Risk of Colorectal Cancer: A Community-Based Nested Case–Control Study. Scientific Reports, 13(1):4196, 2023.
[6] Y. Han, P. Drobisch, A. Kr ̈uger, and others. Plasma Extracellular Vesicle Messenger RNA Profiling Identifies Prognostic EV Signature for Non-Invasive Risk Stratification for Survival Prediction of Patients with Pancreatic Ductal Adenocarcinoma. Journal of Hematology & Oncology, 16(1):7, 2023.
[7] K. Horie, G. Salvad ́o, R. K. Koppisetti, and others. Plasma MTBR-tau243 Biomarker Identifies Tau Tangle Pathology in Alzheimer’s Disease. Nature Medicine, 2025:1–10.
12

[8] J. Li, K. Cheng, S. Wang, and others. Feature Selection: A Data Perspective. ACM Computing Surveys (CSUR), 50(6):1–45, 2017.
[9] Amandeep Kaur, Kalpna Guleria, and Naresh Kumar Trivedi. Feature Selection in Machine Learning: Methods and Comparison. In 2021 International Conference on Advance Computing and Innovative Technologies in Engineering (ICACITE), pages 789–795, 2021.
[10] B. Venkatesh and J. Anuradha. A Review of Feature Selection and Its Methods. Cybernetics and Information Technologies, 19(1):3–26, 2019.
[11] Lior Wolf, Amnon Shashua, and Donald Geman. Feature Selection for Unsupervised and Supervised Inference: The Emergence of Sparsity in a Weight-Based Approach. Journal of Machine Learning Research, 6(11):1455–1487, 2005.
[12] D. Zou, Y. Yuan, L. Xu, and others. PltDB: A Blood Platelets-Based Gene Expression Database for Disease Investigation. Bioinformatics, 38(11):3143–3145, 2022.
[13] Kui Yu, Xianjie Guo, Lin Liu, Jiuyong Li, Hao Wang, Zhaolong Ling, and Xindong Wu. Causality-based feature selection: Methods and evaluations. ACM Computing Surveys, 53(5):1–36, 2020.
[14] Daniel E. Geer Jr. Correlation is not causation. IEEE Security & Privacy, 9(2):93–94, 2011.
[15] Tyler J. VanderWeele and Ilya Shpitser. On the definition of a confounder. Annals of Statistics, 41(1):196, 2013.
[16] Sijie Li, Heyang Hua, and Shengquan Chen. Graph neural networks for single-cell omics data: A review of approaches and applications. Briefings in Bioinformatics, 26(2):bbaf109, 2025.
[17] Hao Li, Yu Sun, Hao Hong, Xin Huang, Huan Tao, Qiya Huang, Longteng Wang, Kang Xu, Jingbo Gan, and Hebing Chen. Inferring transcription factor regulatory networks from single-cell ATAC-seq data based on graph neural networks. Nature Machine Intelligence, 4(4):389–400, 2022.
[18] Clark Glymour, Kun Zhang, and Peter Spirtes. Review of causal discovery methods based on graphical models. Frontiers in Genetics, 10:524, 2019.
[19] Judea Pearl. Causal inference. In Causality: Objectives and Assessment, pages 39–58. PMLR, 2010.
[20] Judea Pearl. Causal inference in statistics: An overview. Statistics Surveys, 2009.
[21] Judea Pearl. An introduction to causal inference. The International Journal of Biostatistics, 2010.
13

[22] J. Kang, Q. Tang, J. He, L. Li, N. Yang, S. Yu, M. Wang, Y. Zhang, J. Lin, T. Cui, Y. Hu, P. Tan, J. Cheng, H. Zheng, D. Wang, X. Su, W. Chen, Y. Huang. RNAInter v4.0: RNA Interactome Repository with Redefined Confidence Scoring System and Improved Accessibility. Nucleic Acids Research, 50(D1):D326–D332, 2022.
[23] Umbeto Benedetto, Stuart J. Head, Gianni D. Angelini, and Eugene H. Blackstone. Statistical primer: Propensity score matching and its alternatives. European Journal of Cardio-Thoracic Surgery, 53(6):1112–1117, 2018.
[24] Kun Zhang and Aapo Hyva ̈rinen. On the Identifiability of the Post-Nonlinear Causal Model. arXiv preprint arXiv:1205.2599, 2012.
[25] Ye Yuan and Ziv Bar-Joseph. GCNG: Graph Convolutional Networks for Inferring Gene Interaction from Spatial Transcriptomics Data. Genome Biology, 21:1–16, 2020.
[26] Thomas N. Kipf and Max Welling. Semi-Supervised Classification with Graph Convolutional Networks. arXiv preprint arXiv:1609.02907, 2016.
[27] Micha ̈el Defferrard, Xavier Bresson, and Pierre Vandergheynst. Convolutional Neural Networks on Graphs with Fast Localized Spectral Filtering. In Advances in Neural Information Processing Systems, volume 29, pages 383–391, 2016.
[28] Margherita Grandini, Enrico Bagli, and Giorgio Visani. Metrics for Multi-Class Classification: An Overview. arXiv preprint arXiv:2008.05756, 2020.
[29] Ethan Weinberger, Ian Covert, and Su-In Lee. Feature Selection in the Contrastive Analysis Setting. In Advances in Neural Information Processing Systems, volume 36, pages 66102–66126, 2023.
[30] Deng Cai, Chiyuan Zhang, and Xiaofei He. Unsupervised Feature Selection for Multi-Cluster Data. In Proceedings of the 16th ACM SIGKDD International Conference on Knowledge Discovery and Data Mining, pages 333–342, 2010.
[31] Sikai Zhang and Zi-Qiang Lang. Orthogonal Least Squares Based Fast Feature Selection for Linear Classification. Pattern Recognition, 123:108419, 2022.
[32] Kexuan Li, Fangfang Wang, Lingli Yang, and Ruiqi Liu. Deep Feature Screening: Feature Selection for Ultra High-Dimensional Data via Deep Neural Networks. Neurocomputing, 538:126186, 2023.
[33] Jingxin Wu, Zhao Liu, Xiaolong Zhou, Yuchen Huang, Caihua Liu, and Chaowang Lan. Causal Inference-Based Feature Selection Method for Identifying Alzheimer’s Disease Biomarker. In International Conference on Applied Intelligence, pages 103–114, 2024.
14

[34] Sarah C. Miller, Clinton C. MacDonald, Morgana K. Kellogg, Zemfira N. Karamysheva, and Andrey L. Karamyshev. Specialized Ribosomes in Health and Disease. International Journal of Molecular Sciences, 24(7):6334, 2023.
[35] Naomi R. Genuth and Maria Barna. Ribosome Specialization in Glioblastoma. Nature Cell Biology, 24(10):1451–1453, 2022.
[36] Weiwei Tao, Hong Lei, Wenlong Luo, Zhi Huang, Peng Ling, Mengyue Guo, Lihao Wan, Kui Zhai, Qian Huang, Qiulian Wu, and others. Novel INHAT Repressor Drives Glioblastoma Growth by Promoting Ribosomal DNA Transcription in Glioma Stem Cells. Neuro-Oncology, 25(8):1428–1440, 2023.
[37] Abu Musa Md Talimur Reza and Yu-Guo Yuan. MicroRNAs Mediated Regulation of the Ribosomal Proteins and Its Consequences on the Global Translation of Proteins. Cells, 10(1):110, 2021.
[38] Jie Xue, Jianzhao Deng, Hongwei Qin, Songxia Yan, Zhen Zhao, Lifeng Qin, Jiao Liu, and Haiyan Wang. The Interaction of Platelet-Related Factors with Tumor Cells Promotes Tumor Metastasis. Journal of Translational Medicine, 22(1):371, 2024.
[39] Hrvoje Miletic. TGF-β Promotes Microtube Formation in Glioblastoma Through Thrombospondin. Acta Neuropathologica, 141(3):595–614, 2021.
[40] Hannah S. Picariello, Rajappa S. Kenchappa, Vandana Rai, James F. Crish, Athanassios Dovas, Katarzyna Pogoda, Mariah McMahon, Emily S. Bell, Unnikrishnan Chandrasekharan, and Amanda Luu. Myosin IIA Suppresses Glioblastoma Development in a Mechanically Sensitive Manner. Proceedings of the National Academy of Sciences, 116(31):15550–15559, 2019.
[41] H. Moradmand, J. Molitoris, X. Ling, and others. Graph Feature Selection for Enhancing Radiomic Stability and Reproducibility Across Multiple Institutions in Head and Neck Cancer. Scientific Reports, 15:27995, 2025.
[42] C. Huang. Feature Selection and Feature Stability Measurement Method for HighDimensional Small Sample Data Based on Big Data Technology. Computational Intelligence and Neuroscience, 2021:3597051, 2021.
15

Table 2 F1-score, accuracy, and number of selected features of six feature-selection methods on four datasets across four classifiers
Disease Method SVM XGB NB DT
Feat. F1 Acc Feat. F1 Acc Feat. F1 Acc Feat. F1 Acc
NSCL
Our 37 0.915 0.915 29 0.907 0.907 47 0.867 0.868 40 0.825 0.825
CI 46 0.856 0.856 44 0.843 0.843 23 0.788 0.790 10 0.755 0.755
CFSM 46 0.785 0.785 47 0.780 0.781 50 0.710 0.711 50 0.667 0.668
MCFS 46 0.818 0.818 47 0.799 0.799 42 0.720 0.726 23 0.691 0.693
Fastcan 50 0.827 0.827 50 0.804 0.804 50 0.711 0.713 50 0.682 0.682
DFS 48 0.754 0.754 50 0.781 0.782 47 0.688 0.690 44 0.646 0.647
AD
Our 48 0.925 0.925 34 0.962 0.963 4 0.900 0.900 14 0.948 0.948
CI 18 0.930 0.930 29 0.970 0.970 10 0.881 0.879 40 0.948 0.948
CFSM 43 0.933 0.934 32 0.963 0.963 45 0.903 0.902 46 0.944 0.944
MCFS 40 0.860 0.864 41 0.938 0.969 7 0.740 0.740 50 0.901 0.901
Fastcan 29 0.925 0.925 35 0.967 0.967 37 0.859 0.858 36 0.948 0.948
DFS 32 0.899 0.900 41 0.960 0.960 1 0.859 0.858 24 0.948 0.948
GBM
Our 34 0.896 0.897 38 0.890 0.891 7 0.863 0.865 11 0.829 0.829
CI 49 0.850 0.852 41 0.860 0.862 29 0.795 0.800 47 0.793 0.794
CFSM 44 0.841 0.843 47 0.848 0.849 40 0.801 0.802 46 0.768 0.768
MCFS 37 0.827 0.829 39 0.811 0.814 42 0.806 0.811 39 0.762 0.765
Fastcan 38 0.877 0.878 39 0.885 0.886 43 0.830 0.831 41 0.788 0.788
DFS 48 0.846 0.848 48 0.838 0.840 15 0.769 0.769 48 0.733 0.734
BC
Our 43 0.974 0.976 48 0.975 0.976 30 0.978 0.978 8 0.955 0.956
CI 13 0.969 0.971 46 0.973 0.973 14 0.972 0.971 16 0.950 0.951
CFSM 45 0.953 0.958 45 0.962 0.967 46 0.949 0.947 45 0.928 0.931
MCFS 36 0.949 0.953 44 0.963 0.964 38 0.958 0.958 35 0.920 0.920
Fastcan 46 0.969 0.971 44 0.973 0.973 49 0.967 0.967 11 0.952 0.951
DFS 31 0.961 0.964 35 0.968 0.969 28 0.958 0.956 41 0.945 0.947
Abbreviations: SVM, support vector machine; NB, Naive Bayes. “Feat.” denotes the number of selected features. DT,Decision Tree. CFSM, CFS-Master.
Acc, Accuracy. F1, F1-score. Bold numbers indicate the best result within each dataset and classifier.
16

Table 3 Stability Analysis of Feature Selection Methods Across Group Combinations
Analysis Type
Group
Combination Our MCFS Fastcan CFS
master
DFS
Pairwise
Group 1,2 25 24 4 0 1
Group 1,3 26 30 0 0 4
Group 1,4 17 22 3 0 0
Group 1,5 30 23 4 0 9
Group 2,3 21 28 2 1 2
Group 2,4 20 22 5 0 1
Group 2,5 21 25 4 2 3
Group 3,4 22 30 1 0 1
Group 3,5 27 29 2 0 5
Group 4,5 23 24 1 0 1
Average 23.2 25.7 2.6 0.3 2.7
Triple
Group 1,2,3 17 17 0 0 0
Group 1,2,4 12 11 1 0 0
Group 1,2,5 17 11 1 0 1
Group 1,3,4 13 19 0 0 0
Group 1,3,5 21 14 0 0 3
Group 1,4,5 14 9 1 0 0
Group 2,3,4 15 15 1 0 0
Group 2,3,5 16 16 0 0 0
Group 2,4,5 12 10 1 0 0
Group 3,4,5 14 16 0 0 0
Average 15.1 13.8 0.5 0 0.4
Quadruple
Group 1,2,3,4 11 9 0 0 0
Group 1,2,3,5 15 6 0 0 0
Group 1,2,4,5 9 3 1 0 0
Group 1,3,4,5 11 7 0 0 0
Group 2,3,4,5 10 7 0 0 0
Average 11.2 6.4 0 0 0
All Groups All 5 Groups 9 1 0 0 0
The percentage calculation is based on the total number of top 50 features, and the cross-validation adopts a 5-group strategy.Symbol description: Pairwise (two-group), Triple (three-group), Quadruple (four-group).
17

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:13:58.084Z
- **Text Length:** 41212 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 17 of 17
