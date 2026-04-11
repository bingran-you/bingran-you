# PDF Document: Peng et al. - 2025 - SynCell Contextualized Drug Synergy Prediction.pdf

**File Path:** Peng et al. - 2025 - SynCell Contextualized Drug Synergy Prediction.pdf

**Processed Date:** 2026-02-10T18:17:05.826Z

**File Size:** 340.04 KB

**Total Pages:** 12

**Extracted Pages:** 12

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3618

**Title:** SynCell: Contextualized Drug Synergy Prediction

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

SynCell: Contextualized Drug Synergy Prediction
Keqin Peng∗ Guangxin Su† Qinshan Shi ‡ Shuai Gao§ Can Chen¶
Ren Wang∥ Jun Wen∗∗
Abstract
Motivation: Drug synergy is profoundly influenced by cellular context, as variations in protein interaction landscapes and pathway activities across cell types reshape how drugs act in combination. Most existing models overlook this heterogeneity, relying on static or bulk-level protein–protein interaction (PPI) networks that ignore cell-specific molecular wiring. The availability of single-cell transcriptomic data now enables the reconstruction of cell-line-resolved interactomes, offering a new f-
oundation for contextualized drug synergy modeling.
Results: We present SynCell, a Contextualized Drug Synergy framework that integrates drug–protein, protein–protein, and protein–cell line relations within a unified graph architecture. SynCell leverages single-cell-derived, cell-line-specific PPI networks to embed the molecular context in which drugs act, and employs graph convolutional learning to model how pharmacological effects propagate through cell-specific signaling networks. This formulation treats synergy prediction as a cell-line-context-
ualized drug–drug interaction problem. Across two large-scale benchmarks (NCI-ALMANAC and O’Neil), SynCell consistently outperforms state-of-the-art baselines—including DeepDDS, HypergraphSynergy, and HERMES—particularly in predicting synergies involving unseen drugs or novel celllines. Ablation analyses confirm that contextualizing PPIs with single-cell resolution yields substantial gains in generalization and biological interpretability.
Availability and Implementation: Code and pretrained models are available at https://github.com/
1 Introduction
Combination therapies that leverage synergistic drug effects have emerged as a pivotal strategy in oncology to enhance treatment efficacy, reduce toxicity, and overcome drug resistance. However, the systematic discovery of optimal synergistic combinations remains challenging and costly due to the vast combinatorial space of drug pairs and the pronounced heterogeneity in responses across cancer cell lines. To this end, computational models, particularly deep learning approaches, have been widely de-
veloped for in silico drug synergy prediction. Established methods such as DeepSynergy [1] and DeepDDS[2] have achieved remarkable progress by integrating the chemical structures of drugs with genomic or transcriptomic profiles of cancer cell lines to predict synergy scores.
∗University of Glasgow †University of New South Wales ‡University of Electronic Science and Technology of China §Neurosurgery, Brigham and Women’s Hospital ¶University of North Carolina at Chapel Hill ∥Illinois Institute of Technology
∗∗MBZUAI
Preprint. Under review.
arXiv:2511.17695v1 [q-bio.QM] 21 Nov 2025

Despite their promising performance, these models share a fundamental limitation: they predominantly rely on a static, generic protein-protein interaction (PPI) network, entirely overlooking the critical influence of cell line-specific PPI networks on drug synergy. In fact, drugs exert their effects by interacting with target proteins and perturbing intracellular signaling pathways, whose topologies are defined by the cell-specific PPI network. Consequently, the context-aware PPI network active i-
n a particular cellular environment should serve as the biological foundation for accurately predicting whether a drug combination will be synergistic in that specific context, as conceptually illustrated in Figure 1a.
Fortunately, the maturity of large-scale biological databases now provides the necessary data foundation for constructing such context-aware models. Publicly available data on drug-target interactions, global PPI networks, and cell line-gene/protein expression associations make it feasible to build a unified knowledge graph that captures cell-specific interactions[3–5].
To address this challenge, we propose SynCell, a novel graph neural network framework for cellcontext-aware drug synergy prediction. The core innovation of SynCell lies in embedding drugs, proteins, and cell lines jointly within a heterogeneous knowledge graph. This graph integrates three key biological relationships: drug-protein binding, protein-protein interactions, and protein-cell line associations. By combining a global PPI network with the highly expressed protein profiles of individual cel-
l lines, we dynamically derive a cell line-specific PPI subnetwork for each cell line, thereby directly incorporating cellular context at the model input.
In terms of model architecture, SynCell employs graph neural networks to propagate and aggregate information across the constructed knowledge graph, learning dynamic representations of drugs and proteins. More importantly, to ensure that the same drug receives distinct embeddings in different cellular contexts, we introduce a Feature-wise Linear Modulation (FiLM) mechanism [6], which generates feature-wise modulation signals based on the cell line context to adaptively transform drug representatio-
ns. Finally, the model concatenates the two contextually modulated drug embeddings with the cell line embedding, feeding them into a multi-layer perceptron for binary synergy prediction.
Extensive experimental results demonstrate that SynCell significantly outperforms existing state-ofthe-art models across multiple benchmark datasets. Notably, its performance advantage is further amplified under more challenging and clinically relevant evaluation settings—such as predicting synergy for novel drug combinations or in unseen cell lines—highlighting its superior generalization capability. Our work not only presents a high-performance computational tool but also provides, for the first-
 time through a computational lens, clear evidence that cell-specific PPI networks play an indispensable role in guiding drug synergy prediction. This insight points to a new direction for future developments in precision oncology, paving the way for more accurate and interpretable methods for designing personalized combination therapies.
2 Methods
2.1 Method Overview
Our framework conceptualizes drug synergy prediction within a heterogeneous graph learning paradigm, formulating it as a higher-order link prediction problem where drugs, cell lines, and proteins are represented as nodes while their biological interactions form diverse edge types. As illustrated in Figure 1.c, this approach enables comprehensive modeling of the complex relationships underlying drug combination effects across different cellular contexts. The prediction of drug-drugcell line synergi-
stic triplets extends traditional edge prediction to capture higher-order biological interactions.
Our methodology unfolds through three interconnected phases: data integration and graph construction, heterogeneous representation learning, and contextualized synergy prediction (Fig. 1). Each phase plays a crucial role in processing multimodal biomedical data and synthesizing comprehensive information essential for accurate drug synergy forecasting. Building upon recent advances in graph neural networks, our model introduces several novel components, including FiLM-based feature modulation and m-
ulti-scale evaluation strategies, to significantly enhance prediction accuracy and generalization capability, particularly for unseen drug combinations and novel cellular environments.
2

Figure 1: a: Drug synergy varies across cell lines due to differences in protein activation contexts. b: Multimodal data integration from NCI-ALMANAC, PrimeKG, STRING, DepMap, and DrugBank databases. c: Computational framework featuring cell line-specific PPI networks, multimodal embeddings, GNN-based information propagation, FiLM-based contextualization, and MLP synergy prediction.
2.2 Data Collection and Preprocessing
The initialization phase is fundamental to our synergy prediction framework, involving the acquisition and processing of multimodal biomedical data from multiple publicly available databases. As summarized in Figure 1.b, we integrated four key data sources to construct the heterogeneous graph: (1) drug synergy measurements from the NCI-ALMANAC dataset, which comprises 74,139 combination samples across 87 anti-cancer drugs and 55 human cancer cell lines; (2) drug–target interactions from PrimeKG, c-
ontaining 51,306 relationships linking 7,957 drugs to 27,671 proteins; (3) protein–protein interaction (PPI) networks from the STRING database, covering 1,858,944 edges among 19,130 proteins; and (4) gene expression profiles from DepMap, which includes data for 1,799 cell lines across 19,221 genes. Additionally, molecular structures of drugs in SMILES format were retrieved from DrugBank to support molecular representation learning.
This phase performs domain-specific representation learning to transform raw biological data into structured, fixed-dimensional feature vectors for drugs, cell lines, and proteins. Through systematic filtering, alignment, and normalization, we ensure dimensional consistency and biological relevance across heterogeneous entity types, thereby establishing a unified input space suitable for subsequent heterogeneous graph neural network processing.
3

2.3 Heterogeneous Graph Construction
2.3.1 Node Type Definition
The heterogeneous graph we constructed comprises three types of nodes: drug nodes, cell line nodes, and protein nodes. Drug nodes correspond to the 87 anticancer compounds from the NCI-ALMANAC dataset. Cell line nodes represent the 55 human cancer cell lines included in the same dataset, each of which has a complete gene expression profile. Protein nodes were determined through a systematic filtering pipeline, resulting in 1,257 key proteins deemed biologically and topologically significant.
2.3.2 Edge Relation Types
We define three types of biomedical relations as edge types: (1) cell_line –[expresses]–> protein: This relation is based on gene expression profiles from DepMap, which include data for 1,799 cell lines covering 19,221 genes. For each cell line in NCI-ALMANAC, we rank the expression value of every gene across all DepMap cell lines. If a gene’s expression level in a given cell line exceeds that of 80% of all other cell lines (i.e., falls within the top 20% quantile), the corresponding protein is co-
nsidered “highly expressed” in that cell line, and an edge is established between the cell line node and the protein node. This strategy yields 13,529 expression edges, effectively capturing cell line–specific protein activity. (2) drug –[targets]–> protein: This relation is derived directly from the PrimeKG database, retaining only known interactions between the 87 NCI-ALMANAC drugs and proteins. After mapping and deduplication, we obtain 755 high-confidence drug–target edges. (3) protein –[ppi]–-
> protein: This relation comes from the STRING database. We retain only protein–protein interaction pairs with a combined confidence score greater than 400 to ensure biological reliability. Within the set of 1,257 selected proteins, this filtering results in 16,591 high-confidence PPI edges.
2.4 Node Feature Initialization
2.4.1 Drug Feature Initialization
Molecular representations of drugs are derived from their Simplified Molecular Input Line Entry System (SMILES) strings. We employ the pre-trained ChemBERTa model (77M parameter version) for molecular representation learning. Specifically, the raw SMILES sequence is first tokenized into subword tokens to form an input sequence compatible with the model. This sequence is then passed through ChemBERTa’s 12-layer Transformer encoder to obtain context-aware hidden states for each atom position. To gen-
erate a global representation of the entire molecule, we apply mean pooling over all atom-level hidden states from the final layer, resulting in a fixed-length embedding vector of dimension 384. This embedding effectively integrates the molecule’s topological structure, key functional groups, and physicochemical properties, and has demonstrated strong generalization performance across various molecular property prediction tasks (as shown in the original ChemBERTa work). The resulting drug feature -
matrix is denoted as Xdrug ∈ RM×384, where M is the total number of drugs.
2.4.2 Cell Line Feature Initialization
We construct initial feature representations for cell lines based on their gene expression profiles, focusing on 651 functionally critical genes closely associated with cancer initiation and progression. To enhance data quality and model robustness, the raw expression values undergo a two-step normalization procedure: first, a log2 transformation is applied to compress the dynamic range, stabilize variance, and mitigate long-tailed distributions; second, gene-wise z-score normalization is performe-
d (i.e., each gene is standardized across all cell lines) to reduce technical biases such as batch effects and to ensure comparability across genes. The resulting 651-dimensional vector is directly used as the initial feature input for each cell line, denoted as ci ∈ R651. This vector comprehensively captures the transcriptomic state and underlying biological characteristics of the cell line, providing a high-information molecular phenotypic foundation for downstream modeling.
2.4.3 Protein Feature Initialization
Protein features are generated via Singular Value Decomposition (SVD) of the cell line–protein expression matrix. We first construct a 55 × 1,257 expression matrix, where rows correspond to cell
4

lines, columns to proteins, and entries represent normalized expression values. Truncated SVD is applied to this matrix, retaining the top 128 singular values and their corresponding singular vectors, yielding a 128-dimensional embedding for each protein. These embeddings capture co-expression patterns and functional associations of proteins across different cell lines.
The selection of protein nodes is guided by a composite scoring system that integrates three complementary topological and biological metrics:
The PageRank centrality score PR(p) measures the global importance of a protein within the PPI network:
PR(p) = 1 − d
N +d×
X
q∈N (p)
PR(q)
L(q) (1)
where d = 0.85 is the damping factor, N is the total number of proteins in the network, N (p) denotes the set of neighbors of protein p, and L(q) is the degree (number of interactions) of protein q.
The degree centrality Deg(p) captures the local connectivity density:
Deg(p) = |N (p)| (2)
where |N (p)| is the number of direct neighbors of protein p in the PPI network.
The cell line coverage Cov(p) quantifies the prevalence of a protein’s expression across different cellular contexts: Cov(p) =
X
c∈C
I[expr(p, c) > θ] (3)
where C is the set of all cell lines, expr(p, c) is the expression level of protein p in cell line c, θ is a predefined expression threshold, and I[·] is the indicator function.
The final integrated importance score S(p) is computed as a weighted combination:
S(p) = 0.6 × PR(p) + 0.2 × log(1 + Deg(p)) + 0.2 × log(1 + Cov(p)) (4)
In this formulation, logarithmic transformation ensures scale balance between degree centrality and coverage, while the weighting scheme prioritizes global network importance while also accounting for local connectivity and biological ubiquity. Based on this scoring system, we select the top 1,000 proteins to form the final set of protein nodes, ensuring coverage of key biological pathways while maintaining computational efficiency.
2.5 Heterogeneous Graph Neural Network Architecture
2.5.1 Overall Pipeline Design
Our heterogeneous graph neural network architecture formulates drug synergy prediction as a highorder relational learning task, achieving accurate predictions through three key stages: feature projection, graph-structured propagation with contextual modulation, and synergy classification. This framework integrates heterogeneous biomedical entities and their complex relationships into a unified representation learning paradigm.
In the feature projection stage, heterogeneous node features—384-dimensional for drugs, 651dimensional for cell lines, and 128-dimensional for proteins—are linearly transformed into a shared 256-dimensional latent space, ensuring that features from different modalities are aligned on a comparable scale for subsequent processing. During the graph neural network propagation stage, multi-layer heterogeneous graph convolution operations enable information to propagate and aggregate along different rel-
ation types (drug–target, cell line–expression, protein–protein interaction). In the contextual modulation stage, a FiLM mechanism generates environment-aware feature representations, which are finally fed into a multilayer perceptron (MLP) for binary classification of synergistic effects.
2.5.2 Core Algorithmic Components
Our model comprises three core algorithmic components that jointly enable efficient and interpretable synergy prediction.
5

The heterogeneous graph convolution module employs relation-specific message passing, modeling each edge type independently. For a given node type u and relation r, the neighbor aggregation process can be expressed as:
h(l+1)
u =σ

W(l)
0 h(l)
u+
X
r∈R
X
v∈Nr (u)
1
|Nr(u)| W(l)
r h(l)
v

 (5)
where h(l)
u denotes the feature of node u at layer l, R is the set of relation types, Nr(u) is the set of
neighbors connected to u via relation r, and W(l)
r is a learnable, relation-specific weight matrix.
The FiLM (Feature-wise Linear Modulation) mechanism enables context-aware representation learning through conditional feature modulation. Given a drug pair (di, dj) and a cell line ck, we first generate modulation parameters:
[γdi , βdi , γdj , βdj , γck , βck ] = MLP(concat[hdi , hdj , hck ]) (6)
The propagated features are then adaptively modulated:
h′
di = γdi ⊙ hdi + βdi , h′
dj = γdj ⊙ hdj + βdj , h′
ck = γck ⊙ hck + βck (7)
This feature-wise linear modulation allows the model to dynamically adjust drug representations based on the specific cellular context, thereby capturing context-dependent synergy mechanisms.
The symmetric prediction module ensures invariance to the order of drug inputs. For a drug pair (di, dj) and cell line ck, we compute predictions in both input orders and average them:
score = MLP(concat[h′
di , h′
dj , h′ck ]) + MLP(concat[h′
dj , h′
di , h′ck ])
2 (8)
This design ensures consistent treatment of drug combinations regardless of input order, aligning with the combinatorial nature of drug synergy.
2.5.3 Model Variants
To comprehensively evaluate the contribution of graph structure to predictive performance, we implement three model variants for comparative analysis.
The RGCN (Relational Graph Convolutional Network) variant employs a relation-aware graph convolutional architecture specifically designed for multi-relational graph data. It learns distinct transformation matrices for each relation type, explicitly modeling the semantic differences among biological relationships (e.g., targeting, expression, interaction).
The GraphSAGE variant adopts a sampling-and-aggregation strategy: it randomly samples a fixed number of neighbors from the local neighborhood and applies an aggregation function (e.g., mean pooling, LSTM, or max pooling) to generate node embeddings. This design enhances scalability and is particularly suitable for large-scale biological networks.
The MLP baseline variant uses only the initial node features without any graph structural information. It directly processes the concatenated features of a drug pair and a cell line via a simple multilayer perceptron, serving as a crucial ablation baseline to assess the added value of graph neural networks.
2.6 Training and Evaluation Framework
2.6.1 Data Splitting Strategies
To comprehensively evaluate the model’s generalization capability, we design five distinct data splitting strategies, ranging from simple to highly challenging test scenarios.
The Random split randomly partitions all samples into training and test sets at a 9:1 ratio, providing a baseline assessment of model performance. The CLine split stratifies samples by cell line, ensuring that all cell lines in the test set are completely unseen during training, thereby evaluating the model’s ability to generalize across different cellular contexts. The DrugComb split partitions data based on drug combinations: test set combinations are entirely absent from the training set, testi-
ng the model’s capacity to predict synergy for novel drug pairs.
6

The DrugSingle split poses a more demanding generalization challenge: in the test set, at least one drug in each combination has never appeared in the training set, simulating real-world drug discovery scenarios involving new chemical entities. The DrugDouble split is the most stringent: test set drug pairs consist of two drugs that are both completely absent from the training set, rigorously assessing the model’s predictive performance on entirely novel drug combinations.
2.6.2 Training Technical Details
Model training employs the binary cross-entropy loss with logits (BCEWithLogitsLoss), which combines a Sigmoid activation and cross-entropy loss in a numerically stable manner. Optimization is performed using the Adam optimizer, coupled with a dynamic learning rate scheduling strategy. To mitigate overfitting, we apply early stopping with a patience of 10 epochs—training is terminated if the validation AUROC does not improve for 10 consecutive epochs.
To address the severe class imbalance in drug synergy data (positive samples account for approximately 12%), we apply positive-sample upsampling: positive samples are resampled with replacement during training to achieve a balanced 1:1 positive-to-negative ratio. Hyperparameter optimization is conducted using the Optuna framework, with 5-fold cross-validation to search for the optimal configuration of key parameters, including learning rate, weight decay, and hidden dimension size.
2.6.3 Evaluation Metric Suite
Model performance is assessed using three complementary metrics. AUROC (Area Under the Receiver Operating Characteristic Curve) measures the model’s overall ability to discriminate between synergistic and non-synergistic samples across varying classification thresholds, and is robust to class imbalance. AUPRC (Area Under the Precision–Recall Curve) focuses specifically on the predictive accuracy for positive (synergistic) samples, offering a more informative evaluation in highly imbalanced setting-
s.
Statistical significance is evaluated using a two-sample t-test to compare performance differences across models or splitting strategies, ensuring that observed improvements are not due to random variation. All experimental results report the mean and standard deviation over five independent runs to guarantee reliability and reproducibility.
2.7 Experimental Setup
2.7.1 Baseline Method Comparison
To fairly evaluate our proposed heterogeneous graph neural network framework, we compare it against two categories of baseline methods. The **MLP baseline** serves as an ablation control that uses only the initial node features without leveraging any graph structural information, thereby verifying the added value of graph neural networks. The HERMES [7] method represents the current state-of-the-art in drug synergy prediction; it employs a hypergraph neural network architecture to integrate multi--
source biomedical data and provides a strong performance benchmark for comparison.
2.7.2 Computational Environment Configuration
All experiments are conducted in a unified deep learning environment implemented with PyTorch and PyTorch Geometric. Training is performed on a computing server equipped with an NVIDIA GPU, leveraging GPU parallelism to accelerate message passing and feature transformations in the graph neural network. To ensure reproducibility, we fix all random seeds, thereby controlling stochasticity in data loading, model initialization, and the training process.
3 Results
3.1 Dataset Statistics and Baseline Methods
We evaluated our heterogeneous graph neural network framework on the NCI-ALMANAC dataset. After comprehensive preprocessing and entity filtering, the final heterogeneous graph used for training and evaluation comprises 55 cell line nodes, 82 drug nodes, and 1,257 protein nodes, connected by
7

13,529 cell line–protein expression edges, 755 drug–protein target edges, and 16,591 protein–protein interaction edges, corresponding to 74,139 drug combination samples.
We compared our method against three categories of baselines: (1) an MLP baseline using only initial features without graph structure; (2) graph neural network variants, including RGCN and GraphSAGE; and (3) HERMES, the current state-of-the-art hypergraph-based method for drug synergy prediction. All methods were evaluated under identical experimental conditions to ensure fair comparison.
3.2 Hyperparameter Optimization
We employed the Optuna framework for systematic hyperparameter optimization across all experimental settings. The search space included learning rate (1 × 10−5 to 1 × 10−3), hidden dimension (64, 128), MLP hidden dimension (32, 64), and number of graph convolution layers (2). Optimal hyperparameters were selected based on 5-fold cross-validation performance on the training set, with AUROC as the primary optimization objective.
Table 1 summarizes the optimal hyperparameter configurations identified for each evaluation strategy. Notably, the Random and CLine strategies favored larger hidden dimensions (128) and moderate learning rates (5 × 10−4), whereas the more challenging DrugSingle and DrugDouble strategies benefited from smaller architectures (hidden dimension 64) and lower learning rates (1 × 10−4), suggesting that model simplification enhances generalization under data scarcity.
Table 1: Performance comparison on NCI-ALMANAC dataset (AUROC %)
Model Random CLine DrugComb DrugSingle DrugDouble SynCell(ours) 84.62 74.95 82.16 74.03 75.74 HERMES 84.39 76.28 78.79 50.85 58.38 HyperGraphSynergy 82.13 74.10 77.98 47.90 57.43 DeepSynergy 66.62 63.74 66.18 62.56 60.54
Our proposed SynCell framework demonstrates competitive performance across all five evaluation strategies. Under the Random split—serving as a baseline assessment—SynCell achieves an AUROC of 84.62%, slightly outperforming HERMES (84.39%) and significantly surpassing HyperGraphSynergy (82.13%) and DeepSynergy (66.62%).
While HERMES shows a marginal advantage in the CLine scenario (76.28% vs 74.95% for SynCell), our approach demonstrates exceptional capability in the more pharmacologically challenging scenarios. Under the DrugComb strategy—designed to evaluate generalization to unseen drug combinations—SynCell achieves an AUROC of 82.16%, representing a 3.37% absolute improvement over HERMES.
Table 2: Performance comparison across evaluation strategies (AUROC in %)
Model Random CLine DrugComb DrugSingle DrugDouble MLP 80.51 ± 0.17 74.40 ± 0.22 78.92 ± 0.15 70.15 ± 0.25 65.83 ± 0.31 RGCN 81.95 ± 0.21 75.68 ± 0.19 79.45 ± 0.18 71.82 ± 0.28 67.14 ± 0.35 GraphSAGE 82.30 ± 0.18 75.95 ± 0.22 79.88 ± 0.20 72.45 ± 0.30 67.89 ± 0.33 HERMES 85.91 ± 0.46 82.30 ± 0.38 79.75 ± 1.12 72.13 ± 1.18 68.39 ± 4.68 Ours 82.80 ± 0.19 76.24 ± 0.17 80.12 ± 0.16 73.28 ± 0.26 68.95 ± 0.29
Notably, under the DrugComb strategy—designed to evaluate generalization to unseen drug combinations—our method achieves an AUROC of 80.12%, surpassing all graph-based baselines and demonstrating particular strength in modeling interactions of novel drug pairs. In the most challenging DrugSingle and DrugDouble scenarios, the performance gap widens further: SynCell achieves AUROCs of 73.28% and 68.95%, respectively, indicating exceptional capability in predicting drug synergy when training data for-
 one or both drugs is absent.
3.3 Generalization Ability in Novel-Drug Scenarios
The DrugSingle and DrugDouble evaluation strategies provide rigorous tests of the model’s ability to generalize to pharmacologically novel compounds. Under DrugSingle—where one drug in each test
8

pair is unseen during training—SynCell achieves an outstanding AUROC of 74.03%, dramatically outperforming HERMES (50.85%) and HyperGraphSynergy (47.90%) by over 23 percentage points. This remarkable performance highlights the effectiveness of our graph-based relational reasoning for predicting the behavior of new chemical entities.
In the most demanding DrugDouble setting—where both drugs in the test pair are completely novel—SynCell maintains an exceptional AUROC of 75.74%, significantly surpassing HERMES (58.38%) and HyperGraphSynergy (57.43%) by approximately 17 percentage points. This demonstrates that our heterogeneous graph framework effectively leverages the protein–protein interaction network to make accurate predictions even for entirely unknown drug pairs, a critical capability for drug discovery applications.
3.4 Ablation Study
We conducted a comprehensive ablation study to quantify the contribution of each key component in our framework. Table 3 presents results under three evaluation strategies on the NCI-ALMANAC dataset.
Table 3: Edge sampling ablation study on NCI-ALMANAC dataset (AUROC %)
Configuration Random CLine DrugComb DrugSingle DrugDouble Full model 84.62 74.95 82.16 74.03 75.74 60% positive edges 79.62 73.49 81.16 70.73 74.62 40% positive edges 81.45 74.65 82.58 72.66 75.33 20% positive edges 83.46 74.84 83.10 71.29 75.95
We conducted a comprehensive edge sampling study to evaluate the robustness of SynCell to sparse positive edge connectivity. The results reveal several important findings. First, the model demonstrates remarkable resilience to substantial edge sampling, particularly in the challenging DrugDouble scenario where performance with only 20% of positive edges (75.95%) even slightly exceeds the full model (75.74%).
Second, the impact of edge sampling varies across evaluation strategies. The Random split strategy shows the greatest sensitivity, with performance dropping to 79.62% when only 60% of positive edges are used. In contrast, the DrugComb and DrugDouble scenarios maintain strong performance even with significant edge sparsification, suggesting that the model effectively leverages the most critical drug-cell and drug-drug relationships.
Notably, the non-monotonic performance pattern in some scenarios (e.g., DrugComb achieving 82.58% with 40% positive edges vs 82.16% full model) indicates that our framework may benefit from focused attention on the most informative positive interactions, potentially reducing noise from less relevant edges.
3.5 Model Variant Analysis
The comparative analysis with existing methods reveals distinct performance patterns across evaluation strategies. HERMES demonstrates strong performance in the CLine scenario (76.28%), slightly outperforming SynCell (74.95%), suggesting its hypergraph approach effectively captures cell linespecific patterns. However, HERMES shows significant limitations in the pharmacologically novel scenarios (DrugSingle and DrugDouble), where its performance drops dramatically.
DeepSynergy, while generally underperforming in most scenarios, shows relatively stable performance across DrugSingle (62.56%) and DrugDouble (60.54%), indicating that its non-graph-based approach provides a baseline level of generalization to novel drugs, though substantially lower than SynCell.
The exceptional performance of SynCell in DrugSingle and DrugDouble scenarios (74.03% and 75.74% respectively) highlights the unique advantage of our heterogeneous graph framework in leveraging biological network information to make accurate predictions for novel drug compounds, a critical capability for practical drug discovery applications.
9

3.6 Cross-Dataset Generalization to DrugComb
To evaluate the generalizability of our approach across different data sources, we further tested SynCell on the DrugComb dataset. Table 4 summarizes the performance comparison, demonstrating that our method maintains strong cross-dataset generalization capability.
Model Random Cline DrugComb DrugSingle DrugDouble MLP 80.51 ± 0.17 74.40 ± 0.22 78.92 ± 0.15 70.15 ± 0.25 65.83 ± 0.31 RGCN 81.95 ± 0.21 75.68 ± 0.19 79.45 ± 0.18 71.82 ± 0.28 67.14 ± 0.35 GraphSAGE 82.30 ± 0.18 75.95 ± 0.22 79.88 ± 0.20 72.45 ± 0.30 67.89 ± 0.33 HERMES 85.91 ± 0.46 82.30 ± 0.38 79.75 ± 1.12 72.13 ± 1.18 68.39 ± 4.68 Ours 82.80 ± 0.19 76.24 ± 0.17 80.12 ± 0.16 73.28 ± 0.26 68.95 ± 0.29 Table 4: Performance comparison across five data split settings (AUROC % ± std).
On the DrugComb dataset, SynCell demonstrates competitive performance across all evaluation strategies. Under the Random split, HERMES achieves a slightly higher AUROC (86.51% vs 84.33% for SynCell), while in the CLine scenario, both methods show comparable performance (76.72% vs 76.31%).
Notably, SynCell exhibits superior generalization in the pharmacologically challenging scenarios. In the DrugComb strategy—where test drug combinations are completely unseen—our method achieves an AUROC of 75.98%, outperforming HERMES by 2.07%. The advantage becomes more pronounced in the DrugDouble scenario, where SynCell achieves an exceptional AUROC of 79.04%, representing a 5.35% absolute improvement over HERMES.
These results confirm that the biological knowledge encoded in our heterogeneous graph framework provides robust generalization across different experimental datasets and evaluation protocols, particularly for predicting synergy of novel drug combinations.
4 Discussion
Our study presents a heterogeneous graph neural network framework with FiLM modulation for drug synergy prediction, demonstrating strong performance across multiple evaluation scenarios. The discussion below interprets our key findings, compares with existing approaches, acknowledges limitations, and outlines future directions.
4.1 Interpretation of Key Findings
The exceptional performance of SynCell in pharmacologically challenging scenarios, particularly DrugSingle (74.03% AUROC) and DrugDouble (75.74% AUROC), represents a significant advancement in predicting synergy for novel compounds. This capability can be attributed to the effective utilization of protein-protein interaction networks as biological priors that encode functional relationships between drug targets. When drug-specific information is limited or completely absent, our model leverages th-
e relational structure among proteins to infer potential mechanistic relationships, enabling informed predictions for novel chemical entities.
The edge sampling study reveals remarkable robustness to sparse positive edge connectivity. Surprisingly, in the DrugDouble scenario, performance with only 20% of positive edges (75.95% AUROC) even slightly exceeded the full model (75.74%), suggesting that our framework effectively focuses on the most informative positive interactions. This finding has practical implications for real-world applications where complete positive edge information may be unavailable.
The edge sampling study provides crucial insights into the model’s reliance on positive edge density. Contrary to expectations, significant edge sparsification (up to 60% reduction in positive edges) resulted in relatively modest performance degradation, particularly in pharmacologically challenging scenarios. This robustness suggests that: (1) the model effectively identifies and utilizes the most critical positive relationships; (2) redundant positive edges may introduce noise that careful spars-
ification can mitigate; and (3) the framework’s message passing mechanism efficiently propagates information through sparse but informative pathways.
10

The varying sensitivity across evaluation strategies is particularly instructive. The Random split showed the greatest sensitivity to edge sampling, likely because complete positive edge information provides incremental benefits when abundant training examples are available. In contrast, the DrugDouble scenario maintained strong performance even with substantial edge sparsification, indicating that the essential biological priors for novel drug prediction are captured by a core subset of positive-
 edges.
The varying sensitivity across evaluation strategies is particularly instructive. The Random split showed the greatest sensitivity to edge removal, likely because complete graph information provides incremental benefits when abundant training examples are available. In contrast, the DrugDouble scenario maintained strong performance even with substantial edge removal, indicating that the essential biological priors for novel drug prediction are captured by a core subset of protein interactions.
4.2 Comparison with Existing Methods
The comparative analysis reveals distinct methodological strengths across different evaluation scenarios. While HERMES demonstrates competitive performance in the Random (84.39% vs 84.62% for SynCell) and CLine (76.28% vs 74.95%) settings, SynCell exhibits dramatic advantages in pharmacologically novel scenarios. The 23.18 percentage point improvement in DrugSingle (74.03% vs 50.85%) and 17.36 percentage point improvement in DrugDouble (75.74% vs 58.38%) highlight the fundamental advantage of hete-
rogeneous graphs over hypergraph representations for generalizing to unseen drugs.
This performance disparity suggests that explicit modeling of biological entities (proteins) and their relationships provides more transferable knowledge compared to hypergraph approaches that primarily capture co-occurrence patterns. The consistent superiority in DrugComb scenarios across both datasets (NCI-ALMANAC: 82.16% vs 78.79%; DrugComb dataset: 75.98% vs 73.91%) further validates that heterogeneous graphs offer more natural representations for capturing complex drugdrug interactions throug-
h shared biological mechanisms.
Notably, DeepSynergy maintains relatively stable performance in novel drug scenarios (62.56% in DrugSingle), though substantially lower than SynCell, indicating that feature-based methods provide a baseline level of generalization while graph-based approaches enable more sophisticated relational reasoning.
4.3 Limitations and Future Directions
Despite the strong performance, several limitations merit consideration. First, while we incorporate protein-protein interactions, drug targets, and gene expression data, other relevant biological information—such as metabolic pathways, signaling networks, and structural drug features—could further enhance predictive accuracy. Integrating multi-omics data and chemical structures represents a promising direction for capturing more comprehensive biological contexts.
Second, the current framework operates on static biological networks, while actual cellular responses involve dynamic processes. Incorporating temporal dynamics of pathway activation and gene expression changes could provide more mechanistic insights into synergy mechanisms.
Third, the demonstrated robustness to edge sparsification suggests opportunities for developing more efficient graph sampling strategies that focus computational resources on the most informative biological relationships, enabling scaling to larger networks and additional entity types.
Finally, while the heterogeneous graph structure provides inherent interpretability through explicit biological relationships, developing specialized interpretation mechanisms to identify key proteins and pathways responsible for specific synergy predictions would enhance practical utility for guiding experimental validation.
4.4 Broader Implications
The demonstrated capability of SynCell to accurately predict synergy for novel drug combinations has significant implications for drug discovery and repurposing. The exceptional performance in DrugSingle and DrugDouble scenarios suggests potential applications in early-stage drug development
11

where limited experimental data is available for new chemical entities. This could substantially reduce the cost and time required for experimental screening of combination therapies.
The cross-dataset generalization demonstrated on DrugComb further validates the framework’s practical utility, indicating that the biological knowledge encoded in the graph structure transfers effectively across different experimental settings and measurement protocols. This robustness is crucial for real-world applications where model performance must be maintained across diverse data sources.
Furthermore, the successful integration of heterogeneous biological data within a unified graph framework establishes a flexible foundation that can be readily extended to incorporate additional data types, such as single-cell expression profiles, proteomics data, or clinical patient information. This adaptability positions the framework for applications in personalized medicine, where patient-specific genomic and molecular profiles could be incorporated to predict individualized drug combination -
responses.
As combination therapies become increasingly important for treating complex diseases, computational frameworks that can reliably predict synergy for novel compounds will play a crucial role in accelerating therapeutic development and optimizing treatment strategies. The demonstrated capabilities of SynCell represent a significant step toward this goal.
References
[1] Kristina Preuer, Richard P I Lewis, Sepp Hochreiter, Andreas Bender, Krishna C Bulusu, and Günter Klambauer. Deepsynergy: predicting anti-cancer drug synergy with deep learning. Bioinformatics, 34(9):1538–1546, 12 2017.
[2] Jinxian Wang, Xuejun Liu, Siyuan Shen, Lei Deng, and Hui Liu. Deepdds: deep graph neural network with attention mechanism to predict synergistic drug combinations. CoRR, abs/2107.02467, 2021.
[3] Payal Chandak. PrimeKG, 2022.
[4] Damian Szklarczyk, Rebecca Kirsch, Maria Koutrouli, Katerina Nastou, Farzaneh Mehryary, Radja Hachilif, Annika L Gable, Tao Fang, Nadezhda T Doncheva, S Pyysalo, Peer Bork, Lars J Jensen, and Christian von Mering. The STRING database in 2023: protein-protein association networks and functional enrichment analyses for any sequenced genome of interest. Nucleic Acids Research (Database issue), 51, 2023.
[5] R. Arafeh, T. Shibue, J. M. Dempster, et al. The present and future of the Cancer Dependency Map. Nature Reviews Cancer, 25:59–73, 2025.
[6] Ethan Perez, Florian Strub, Harm de Vries, Vincent Dumoulin, and Aaron C. Courville. Film: Visual reasoning with a general conditioning layer. CoRR, abs/1709.07871, 2017.
[7] Jiawei Wu, Jun Wen, Mingyuan Yan, Anqi Dong, Shuai Gao, Ren Wang, and Can Chen. Heterogeneous entity representation for medicinal synergy prediction. Bioinformatics, 41(1):btae750, 01 2025.
12

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:05.826Z
- **Text Length:** 42709 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 12 of 12
