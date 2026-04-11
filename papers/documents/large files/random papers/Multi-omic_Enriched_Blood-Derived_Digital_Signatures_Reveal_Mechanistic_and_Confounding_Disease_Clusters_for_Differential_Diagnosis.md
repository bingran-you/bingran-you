# PDF Document: Liu et al. - Multi-omic Enriched Blood-Derived Digital Signatures Reveal Mechanistic and Confounding Disease Clus.pdf

**File Path:** Liu et al. - Multi-omic Enriched Blood-Derived Digital Signatures Reveal Mechanistic and Confounding Disease Clus.pdf

**Processed Date:** 2026-02-10T18:17:00.674Z

**File Size:** 1513.29 KB

**Total Pages:** 23

**Extracted Pages:** 23

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3693

**Title:** Multi-omic Enriched Blood-Derived Digital Signatures Reveal Mechanistic and Confounding Disease Clusters for Differential Diagnosis

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

1
Multi-omic Enriched Blood-Derived Digital Signatures Reveal Mechanistic
and Confounding Disease Clusters for Differential Diagnosis
Bolin Liu1,4, Alexander Fulton2,4, Hector Zenil1,3.4*
1Algorithmic Dynamics Lab, Departments of Biomedical Computing and Digital Twins, King’s Institute for Artificial Intelligence, King’s College London, UK 2 Precision Breast Cancer Institute, Department of Oncology, Department of Surgery, Cambridge University Hospitals NHS Foundation Trust, University of Cambridge, UK 3 Cancer Research Interest Group, The Francis Crick Institute, London, UK 4 Oxford Immune Algorithmics, Oxford University Innovation & London Institute for Healthcare Engineering, UK
Abstract
Understanding disease relationships through blood biomarkers offers a pathway toward data-driven taxonomy and precision medicine. In this study, we constructed a digital blood twin—a computational model derived from 103 disease signatures comprising longitudinal hematological and biochemical analytes. Profiles were standardized into a unified disease–analyte matrix, and pairwise Pearson correlations were computed to assess similarity across conditions. Hierarchical clustering within a phylogenetic-
 framework revealed consistent, robust grouping of hematopoietic disorders, while metabolic, endocrine, and respiratory diseases were more heterogeneous, reflecting weaker internal cohesion.
To evaluate cluster structure, the tree was partitioned at a stringent distance threshold, yielding 16 groups. Enrichment analysis of the largest and most heterogeneous cluster (Cluster 9) demonstrated convergence on cytokine-signaling pathways, indicating shared immunological and inflammatory mechanisms that transcend conventional clinical boundaries. Dimensionality reduction using Principal Component Analysis (PCA) and Uniform Manifold Approximation and Projection (UMAP) corroborated the correla-
tion-based results, consistently separating hematological diseases as a distinct cluster. Random Forest feature selection identified neutrophils, mean corpuscular volume (MCV), red blood cell count, and platelet count as the most discriminative analytes, reinforcing the role of hematopoietic markers as key drivers of disease stratification.
Collectively, these findings demonstrate that blood-derived digital signatures can recover clinically meaningful disease clusters while uncovering mechanistic overlaps across categories. The strong coherence of hematological diseases contrasts with the dispersion of systemic and metabolic disorders, underscoring both the promise and limits of blood-based approaches for disease classification. This framework highlights the potential of integrating routine laboratory data with computational methods -
to refine disease ontology, map comorbidities, and advance precision diagnostics.
* Corresponding author: hector.zenil@kcl.ac.uk

2
Introduction
Blood serves as an unparalleled medium for monitoring systemic health, reflecting both localized pathology and organism-wide physiological changes. The vital role of blood is also evidenced by its critical function in the prevention, diagnosis, and management of chronic diseases, providing critical insights into ongoing physiological and pathological processes [1]. Routine blood tests, such as complete blood counts and biochemical panels, remain among the most frequently ordered investigations wor-
ldwide due to their accessibility, standardization, and diagnostic relevance [2]. The hematological and biochemical composition of blood captures dynamic signatures of immune activity, metabolic status, and organ dysfunction, thereby offering a high-resolution snapshot of disease states across multiple physiological systems [3]. In recent years, the concept of the digital twin has emerged in healthcare, referring to computational representations of biological entities that are continuously updated-
 with real-world data [4–6]. Applications have ranged from cardiovascular modeling to surgery planning and medical imaging analysis [4, 7], highlighting the potential of computational models to refine disease stratification, predict progression, and guide therapeutic decisions. Conventional disease classification systems, such as the International Classification of Diseases (ICD), have long provided a standardized framework for diagnosis, billing, and epidemiology [8, 9]. While indispensable for h-
ealthcare communication, these systems are grounded in clinical presentation and anatomical categorization, prompting investigation into whether blood-derived digital profiles can offer complementary perspectives that may align with, extend, or challenge existing taxonomies.
Despite the ubiquity of blood testing in clinical practice, large-scale computational studies using routine blood analytes to map disease similarity remain underdeveloped. Network medicine has demonstrated the value of constructing disease–disease associations from genes, proteins, or clinical comorbidities, most prominently in the seminal “human disease network,” which revealed how shared genetic associations drive non-random clustering of disorders [6, 10], and the Phenotypic Disease Network (PD-
N), which mapped epidemiological comorbidity patterns across populations [11]. However, these frameworks typically bypass standard laboratory biomarkers, leaving an unexplored opportunity for systematic analysis of blood-derived disease signatures. Although digital twin models have been successfully developed in cardiology, surgery, and medical imaging [4, 7], very few studies operationalize routine blood analytes as the basis for disease-level digital twins [12], despite their accessibility, cost-
-effectiveness, and interpretability relative to omics or imaging-based data. At the same time, ICD-style taxonomies are based on symptoms, anatomy, or pathology rather than biological mechanisms [8, 9], potentially obscuring latent immunoinflammatory connections or conflating clinically similar but mechanistically distinct conditions. These gaps highlight the need to determine whether blood-derived digital signatures can recover established clinical categories, reveal mechanistic overlaps across -
systems, and refine precision medicine frameworks.
The objectives of this study are threefold: (i) to quantify inter-disease similarity by constructing a standardized matrix of 103 disease signatures from blood analytes and applying correlation and clustering methods; (ii) to evaluate whether clinically meaningful categories such as hematopoietic, metabolic, endocrine, or respiratory disorders exhibit coherent clustering or cross-system overlap; and (iii) to identify key analytes and shared mechanisms driving disease stratification using enrichmen-
t analysis and dimensionality reduction, thereby uncovering biological links that transcend conventional classification boundaries.

3
Our findings show that blood-derived digital signatures reliably recover hematopoietic coherence while revealing biologically unified yet clinically heterogeneous disorders via shared immune and inflammatory pathways. These findings demonstrate the potential of analyte-based similarity to complement traditional taxonomies and inform a more mechanistic, data-driven disease ontology.
Methods
Aims and Objectives
The methodological design of this study was structured to translate the overarching research objectives into a reproducible analytical framework. Specifically, the aims were to integrate heterogeneous disease signatures into a standardized matrix that enables direct comparison across 103 conditions, quantify pairwise similarity between diseases using correlation-based measures and a phylogenetic framework, interrogate the biological and clinical relevance of resulting clusters through enrichment a-
nalyses and categorical grouping, and apply machine learning, feature selection, and dimensionality reduction techniques (PCA, UMAP, and Random Forest) to validate clustering patterns and identify key analytes driving disease stratification. Together, these steps operationalize the research objectives by moving from raw disease profiles to standardized data, quantifying relationships, evaluating biological meaning, and refining insights with advanced computational methods.
Data Source and Preprocessing
The dataset consisted of 103 synthetic disease signatures that we created based on medical knowledge from medical guidance. We created profiles with hematological and biochemical trends across multiple timepoints for each disease with five consecutive analyte timepoints. An illustrative generic example is in Table 1, which contains measurements for white blood cells (WBC), lymphocytes, monocytes, segmented neutrophils, eosinophils, red blood cells (RBC), hemoglobin, mean corpuscular volume (MCV), -
platelet count, and mean platelet volume (MPV) across five sequential timepoints.
Analyte t1 t2 t3 ... tn WBC (1000 cells/μL) X1 X2 X3 ... Xn Lymphocytes (1000 cells/μL) X’1 X’2 X’3 ... X’n Monocytes (1000 cells/μL) X’’1 X’’2 X’’3 ... X’’n Segmented neutrophils (1000
cells/μL) ... ... ... ... ... Eosinophils (1000 cells/μL) ... ... ... ... ... RBC (million cells/μL) ... ... ... ... ... Haemoglobin (g/dL) ... ... ... ... ... MCV (fL) ... ... ... ... ... Platelet count (1000 cells/μL) ... ... ... ... ... MPV (fL) ... ... ... ... ...
Table 1. Representative set of longitudinal time series from blood marker values for a disease profile illustrating the structure of five sequential clinical timepoints modelled as random variables.

4
To enable cross-disease comparison, the data were preprocessed into a standardized disease–analyte matrix using Python (Pandas, Regex, and OS libraries). A canonical analyte list was defined (including WBC, RBC, hemoglobin, MCV, platelet count, MPV, among others), and analyte names in each TXT file were normalized (e.g., trimming whitespace and resolving naming inconsistencies) using regular expressions [13]. This ensured that the same analyte recorded under slightly different labels would be cons-
istently aligned across profiles. Values were parsed into numerical format; when a particular analyte was absent from a profile, placeholder values (None) were assigned to preserve dimensional consistency. For each disease profile, a feature vector was constructed by concatenating values of all standardized analytes across five timepoints, with columns following the convention Analyte t1 through Analyte t5. This yielded a matrix encoding both the identity of each analyte and its temporal measureme-
nts. Profile identifiers were extracted from folder names using regular expressions (e.g., Profile 01 through Profile 103) and were sorted numerically to ensure consistency. The final output was a CSV file (“profile matrix filled.csv”) containing 103 rows (one per disease profile) and N×5 columns, where N represents the number of unique analytes in the canonical list. This standardized matrix provided a uniform representation of heterogeneous disease signatures, enabling downstream correlation ana-
lysis, clustering, enrichment testing, and dimensionality reduction.
Pairwise Correlation
To quantify disease–disease similarity, pairwise correlations were computed across all 103 disease profiles. Each profile was represented by its standardized analyte vector encompassing measurements across five clinical timepoints. Similarity was assessed using the Pearson correlation coefficient ρij, defined as:
ρij = Σk (xik − x̄i)(yjk − ȳj)
√[Σk(xik − x̄ i)2 × Σk(yjk − ȳj)2]
where ρij is the Pearson correlation between disease profiles i and j, ranging from −1 (perfect inverse association) to +1 (perfect concordance). Here, xik represents the value of analyte k in disease profile i, x̄ i is the mean analyte value in profile i, yjk is the value of analyte k in disease profile j, and ȳj is the corresponding mean. The index k iterates over all analytes in the standardized disease–analyte matrix [14].
Clustering
The resulting 103×103 symmetric correlation matrix provided a full mapping of similarity among disease signatures. To convert similarity to a distance representation, each correlation coefficient was transformed using dij = 1 − ρij. This transformation ensures that highly similar diseases appear closer together, while weakly correlated or divergent profiles appear more distant. The distance matrix was then subjected to hierarchical agglomerative clustering using the Unweighted Pair Group Method wi-
th Arithmetic Mean (UPGMA), also known as average linkage clustering [15]. This procedure iteratively merges the closest clusters based on average inter-cluster distance, producing a binary phylogenetic tree. Two dendrograms were generated: a full-range tree showing the complete hierarchy and a zoomed-range tree (0–0.07) focusing on fine-grained structure at high correlation thresholds. Both were annotated with disease identifiers to allow direct inspection of relationships. The y-axis of the dend-
rogram encodes clustering distance (1 − ρij), enabling

5
interpretation of relative proximity among profiles. Together, this combination of correlation analysis and hierarchical clustering provides a reproducible, interpretable framework for mapping disease similarity and comparing it with conventional taxonomies.
Enrichment and Cluster Analysis
Cluster Extraction
Hierarchical clustering produced a dendrogram in which diseases were grouped according to their pairwise correlation distances. To define discrete clusters, the tree was cut at a threshold of h = 0.02 on the distance scale d = 1 − ρ, corresponding to a minimum within-cluster similarity of ρ ≥ 0.98. This cut yielded 16 clusters in total, and the cluster assignments were exported in tabular form.
Disease Ontology Annotation
Cluster 9—the largest and most heterogeneous group—was selected for deeper analysis. Each disease in this cluster was manually annotated using Disease Ontology (DO) categories [16], with the underlying mapping retrieved from the Disease Ontology database in July 2025 from the website (https://disease-ontology.org/) [17]. Each condition was assigned both a clinical category (e.g., hematopoietic, metabolic, endocrine, respiratory, renal, cardiovascular, gastrointestinal/hepatobiliary, rheumatologic/-
autoimmune, or infectious) and a broader supercategory to support higher-level interpretation. These labels were later used to contextualize PCA/UMAP projections and Random Forest outputs.
Gene Set Construction from DisGeNET
To explore biological mechanisms associated with Cluster 9, gene–disease associations were retrieved from DisGeNET [18] (downloaded July 2025) [17]. For each disease, records included disease name, gene symbol, score, and NCBI identifier. Gene entries were merged into a nonredundant list based on Entrez IDs and treated as a binary gene set for downstream enrichment, providing a knowledge-based mechanistic context.
Pathway Over-representation Analysis
Exploratory over-representation analysis (ORA) was performed using both KEGG [19] and Reactome [20] databases (accessed July 2025), implemented in R via clusterProfiler [21] and ReactomePA [22]. Both packages use the hypergeometric test with Benjamini–Hochberg (BH) correction [23], and q < 0.05 was considered significant. The background universe was defined as the union of all DisGeNET-retrievable genes for Cluster 9 diseases [24]. Output included enrichment ratios, gene counts, and adjusted p-val-
ues.
Reproducibility
Cluster assignments, enrichment outputs, and analysis parameters were exported as structured tables. All R scripts documented database versions, species (“Homo sapiens”), and thresholds to ensure reproducibility. Interpretation emphasized recurrent pathway themes, given regular database updates.
Dimensionality Reduction and Feature Selection
The standardized disease–analyte matrix was merged with category and super-category labels to form a unified dataset of 103 profiles. Missing values were imputed using median substitution, a robust technique for sparse clinical matrices [25]. For linear structure, PCA was applied [26] and

6
the first two components were visualized with profiles coloured by super-category. To capture nonlinear structure, UMAP was applied [27], generating 2-D embeddings preserving both local and global similarity profiles. For supervised feature selection, a Random Forest classifier [28] with 500 trees was trained on labelled profiles, and feature importance was computed via mean decrease in Gini impurity. The classifier was also used to generate predicted super-category labels for “Unknown” profiles.
Results
Hierarchical clustering of the 103 disease profiles generated a dendrogram summarizing pairwise similarities across the dataset. Two complementary visualizations were produced: a full-scale tree covering the complete distance range (0.0–0.6; Figure 1) and a zoomed tree restricted to the highsimilarity region (0.0–0.07; Figure 2). Together, these representations allow inspection of both global and fine-grained structure within the disease space. At the full scale, the tree demonstrates the broad he-
terogeneity of disease signatures, with branches spanning a wide spectrum of distances. Certain profiles appear as long, isolated branches, reflecting weak correlations with the majority of other conditions, in contrast to several groups of profiles that form tightly linked subtrees with minimal branch lengths, indicating high correlation and internal consistency. The zoomed view highlights the fine resolution of clustering at short distances, where closely related profiles merge into compact grou-
ps, emphasizing the presence of disease pairs or small clusters with very high similarity (ρ > 0.93), which are not as apparent in the full-scale visualization. This level of detail reveals that while some categories exhibit highly cohesive clustering, many profiles are distributed more diffusely across the tree, pointing to variable degrees of internal relatedness.
Figure 1. Complete phylogenetic tree of 103 disease profiles constructed using Pearson correlation distance (1 − ρij ) and UPGMA hierarchical clustering. The yaxis represents clustering distance.

7
Figure 2. Phylogenetic tree of 103 disease profiles- Zoomed phylogenetic tree (distance 00.07), highlighting fine-scale relationships among closely related disease profiles.
Cluster Analysis Outcomes
Cutting the hierarchical tree at a distance threshold of 0.02 produced 16 discrete clusters encompassing all 103 disease profiles. The distribution of cluster sizes was highly uneven, ranging from large, heterogeneous groupings to single-profile clusters. Most profiles (n = 80, 77.7%) aggregated within a single cluster (Cluster 9), which encompassed a wide spectrum of conditions spanning hematopoietic, metabolic, endocrine, cardiovascular, respiratory, gastrointestinal, and immune-related categori-
es. This concentration indicates a 3.5-fold overrepresentation relative to all other clusters combined. The breadth of Cluster 9 indicates a high level of cross-system similarity among many disease signatures, despite their diverse clinical classifications. This heterogeneity motivated further analysis of its composition and potential shared mechanisms.
Outside of Cluster 9, most clusters were small. Several comprised a single disease profile, such as Cluster 1 (acute myeloid leukemia, AML), Cluster 2 (pancytopenia), Cluster 7 (myelodysplastic syndrome), and Cluster 16 (chronic liver disease). These singleton clusters reflect profiles that were relatively distinct from the remainder of the dataset at the chosen threshold. A few clusters contained two to six profiles, often representing conditions with moderate similarity. For example, Cluster 5 g-
rouped viral lower respiratory tract infection with bacterial pneumonia, suggesting partial convergence among respiratory infections. Cluster 6 combined six conditions spanning hematopoietic, renal, cardiovascular, and infectious categories, underscoring cross-system associations. Cluster 10 grouped together chronic hematologic malignancies (CML2, CLL2, lymphoma), which aligns with known clinical relatedness.
Thus, cluster partitioning revealed a spectrum of outcomes: a single large, heterogeneous cluster (Cluster 9), several small clusters with modestly related diseases, and multiple singleton clusters representing distinct outliers. These results confirm that while certain categories, such

8
as hematopoietic malignancies, can form coherent groups, the majority of disease profiles cluster into a broad, mixed set. This variability sets the stage for subsequent enrichment analyses to evaluate whether the observed clusters correspond to biologically meaningful groupings. A complete list of disease profiles within each of the 16 clusters is provided in Appendix Table 1.
Enrichment Analysis Findings
To investigate whether large heterogeneous clusters captured biologically meaningful relationships, enrichment analyses were performed on Cluster 9, which contained 80 disease profiles spanning hematopoietic, metabolic, endocrine, cardiovascular, respiratory, gastrointestinal, and immune-related conditions. Gene–disease associations for these profiles were retrieved from DisGeNET, and the consolidated gene set was subjected to KEGG and Reactome over-representation analysis. Results are presented i-
n Figures 2–8.
KEGG Pathway Analysis
To evaluate shared mechanisms within the largest heterogeneous cluster (Cluster 9), KEGG over-representation analysis was performed and the top results summarized in a dotplot (Figure 2). In this figure, p-values indicate raw significance from the hypergeometric test, whereas adjusted p-values (hereafter referred to as q-values) represent values corrected for multiple testing using the Benjamini–Hochberg false discovery rate procedure. The dot colour encodes q-values (more significant results appe-
ar toward the red end of the scale), dot size reflects the number of genes mapped to each pathway, and the x-axis shows the gene ratio. The most highly enriched KEGG pathways included Cytokine–cytokine receptor interaction, Lipid and atherosclerosis, AGE–RAGE signaling pathway in diabetic complications, Rheumatoid arthritis, Th17 cell differentiation, Leishmaniasis, Inflammatory bowel disease, and Malaria. As indicated by the colour legend in Figure 2, q-values for these top pathways span from app-
roximately 4.3 × 10−15 (e.g., Th17 cell differentiation) down to approximately 9.4 × 10−23 (e.g., Cytokine–cytokine receptor interaction). This gradient confirms that all reported pathways are highly significant, with several reaching extremely small q-values. Such extreme q-values are consistent with exceptionally large enrichment effects, indicating strong biological convergence across immune and inflammatory signaling pathways. Collectively, the KEGG results capture both broad immunological sig-
naling themes and clinically recognizable disease processes, providing a coherent mechanistic context for the cross-system clustering observed in Cluster 9.

9
Figure 3. A) KEGG enrichment dotplot of Cluster 9 diseases. The top 8 pathways include Cytokine–cytokine receptor interaction, Lipid and atherosclerosis, AGE–RAGE signaling in diabetic complications, Rheumatoid arthritis, Th17 cell differentiation, Leishmaniasis, Inflammatory bowel disease, and Malaria. B) KEGG cnetplot of the top 8 enriched pathways, illustrating gene overlapping across immune, inflammatory, and infection-related processes. C) KEGG cnetplot (stringent threshold q < 10−6), showing-
 the gene–pathway network and hub genes connecting multiple pathways. D) KEGG emapplot (cutoff = 0.4), showing functional modules of interconnected pathways, including infection-related, autoimmune, and cytokine signaling clusters.
KEGG cnetplot
Two complementary KEGG cnetplots were generated: (i) a network restricted to the top 8 enriched pathways (Figure 3A), and (ii) a broader network containing all pathways meeting a stringent significance threshold (q < 1 × 10−6; Figure 3B). In both panels, circular nodes represent pathways, smaller nodes represent genes, node size (for pathways) reflects the number of mapped genes, node colour encodes adjusted p-values (q-values), and edges indicate gene–pathway membership. Because no expression fol-
d changes were supplied, gene node colours do not indicate differential regulation. In the top-8 cnetplot (Figure 3A), the eight pathways, such as Cytokine–cytokine receptor interaction, Lipid and atherosclerosis, AGE–RAGE signaling pathway in diabetic complications, Rheumatoid arthritis, Th17 cell differentiation, Leishmaniasis, Inflammatory bowel

10
disease, and Malaria, form a compact, highly interconnected network. Multiple genes are shared across several of these terms, visually apparent as gene nodes linked to more than one pathway, which creates a bridge between the immune/inflammatory module (e.g., cytokine signaling, Th17 differentiation, rheumatoid arthritis, inflammatory bowel disease) and infection-related terms (e.g., leishmaniasis, malaria). The metabolic–vascular pathways (Lipid and atherosclerosis, AGE–RAGE in diabetic complicat-
ions) are not isolated; instead, they connect into the same mesh via shared inflammatory mediators, consistent with the broader immune–inflammation theme observed in the dotplot (see Figure 2). The q < 1 × 10−6 cnetplot (Figure 3B) expands this view, retaining the relationships seen in the top-8 network while introducing additional significant pathways. The resulting graph is larger and denser, revealing sub-modules in which immune signaling and infection pathways cluster together through overlapp-
ing gene sets. This broader network confirms that the core structure observed in the top-8 panel is not an artifact of pathway selection; instead, it persists and becomes more granular when all highly significant terms are included. Practically, the top-8 panel offers a readable summary of the core mechanism, whereas the q-filtered panel provides a comprehensive map of pathway–gene connectivity at stringent significance.
KEGG emapplot
The emapplot (Figure 3C) provides a network-based view of relationships among significantly enriched KEGG pathways, with edges indicating gene overlap greater than 40%. Node colour reflects adjusted p-values (q-values), node size corresponds to the number of mapped genes, and edges denote pathways sharing a substantial proportion of genes. Several functionally coherent modules emerged. First, an infection-related cluster was observed, linking Leishmaniasis, Tuberculosis, and Toxoplasmosis, all of -
which rely on overlapping immune defense genes. Second, an inflammation and autoimmunity module connected Th17 cell differentiation, Inflammatory bowel disease, and Rheumatoid arthritis, reflecting the central role of Th17-driven inflammatory processes in both systemic autoimmunity and gastrointestinal pathology. Third, a cytokine signaling module was evident, in which Cytokine–cytokine receptor interaction was directly linked with Viral protein interaction with cytokine and cytokine receptor, ill-
ustrating convergence between endogenous immune signaling and pathogen-driven modulation of cytokine networks. The majority of these nodes appeared in red or orange hues, consistent with extremely low q-values, indicating robust enrichment. Together, the emapplot highlights how the enriched KEGG pathways in Cluster 9 are not isolated entities but form interconnected modules centered on infection response, cytokine signaling, and chronic inflammatory processes.
Reactome Pathway Analysis
Reactome dotplot
The Reactome dotplot (Figure 3D) summarizes the top enriched pathways for Cluster 9. Node colour encodes adjusted p-values (q-values), node size reflects the number of mapped genes, and the x-axis denotes the gene ratio. The leading terms comprise an interleukin-centered immune axis—Signaling by interleukins, Interleukin-4 and Interleukin-13 signaling, and Interleukin-10 signaling—and a hemostasis/ECM axis—Platelet activation, signaling and aggregation, Platelet degranulation, Response to elevated-
 platelet cytosolic Ca2+, Extracellular matrix organization, and Degradation of the extracellular matrix. The predominance of warm hues (red/orange) indicates very low q-values across these pathways, consistent with robust enrichment. Together, the dotplot highlights two coherent Reactome themes in Cluster 9: cytokine/interleukin signaling and platelet/ECM biology. Collectively, these cnetplots demonstrate that the Cluster 9 gene set is organized around a shared inflammatory and cytokine-mediated -
axis that links canonical immune pathways with infectionrelated and cardio-metabolic terms. The visible gene sharing across multiple pathways explains why heterogeneous clinical entities within Cluster 9 converge mechanistically at the level of KEGG

11
annotations.
Reactome cnetplot
The Reactome cnetplot restricted to the top eight pathways (Figure 4A) visualizes gene–pathway membership as a bipartite network (pathways as larger circular nodes; genes as smaller nodes; edges indicate inclusion of a gene in a pathway; pathway-node colour encodes q-value; size reflects mapped-gene count). Three subgroups are apparent. First, an interleukin module is defined by Signaling by interleukins and Interleukin-4 and Interleukin-13 signaling, which lie in close proximity and share extensi-
ve gene overlap. Interleukin-10 signaling appears as a more isolated node: although positioned near the interleukin cluster, it is linked by fewer genes and thus forms a partially distinct subnode. Second, an extracellular matrix module is represented by Extracellular matrix organization and Degradation of the extracellular matrix, which cluster tightly together. Third, a platelet module encompasses Platelet activation, signaling and aggregation, Platelet degranulation, and Response to elevated pl-
atelet cytosolic Ca2+, which are positioned in close proximity and indicate a coherent theme related to platelet function. This layout highlights that the Cluster 9 gene set maps onto discrete Reactome submodules, namely interleukin signaling, platelet activation, and matrix remodeling, with partial connectivity among them rather than a single unified hub.
The Reactome emapplots (Figure 4B and Figure 4C) present a pathway–pathway similarity network in which edges indicate substantial gene overlap (similarity cutoff ≈ 0.35), node colour encodes qvalue, and node size reflects mapped-gene count. Three features are notable. First, a platelet triad forms a tight triangle among Platelet activation, signaling and aggregation, Platelet degranulation, and Response to elevated platelet cytosolic Ca2+, all rendered in red, indicating very strong significance a-
nd high mutual overlap. Second, an interleukin cluster links Signaling by interleukins with Interleukin-4 and Interleukin-13 signaling, also in red, consistent with shared upstream/downstream mediators across interleukin pathways. Third, Degradation of the extracellular matrix (blue) connects to Extracellular matrix organization (red), indicating a functional pair with asymmetric significance: both participate in matrix remodeling, but the organization term is more strongly enriched.
Dimensionality Reduction Insights
Principal Component Analysis (PCA)
The PCA projection (Figure 5A) shows that PC1 explains 92.7% of the variance, with PC2 explaining 3.3%. Accordingly, the distribution of profiles is stretched predominantly along PC1, reflecting a single dominant axis of variation in the analyte matrix. Despite this, the two-component projection does not yield clean global separation between disease systems. Hematopoietic diseases (blue diamonds) exhibit a relatively narrow vertical spread along PC2, indicating partial convergence on secondary var-
iance dimensions, while spanning an intermediate range across PC1 rather than aligning strictly with one side of the axis. By contrast, endocrine, metabolic, cardiovascular, respiratory, gastrointestinal, and other system categories remain broadly intermixed, clustering near the center of the projection with extensive overlap. These patterns suggest that although PCA captures dominant trends in the data, the variance structure is largely one-dimensional and insufficient on its own to resolve disti-
nct system-level groupings.
Uniform Manifold Approximation and Projection (UMAP)
The UMAP embedding (Figure 5B) yields clearer structure than PCA, revealing three visually coherent zones along a curved manifold. On the rightmost island (UMAP1 ≈ 9–10), hematopoietic

12
system diseases (blue diamonds) form a compact, internally consistent cluster with limited dispersion along UMAP2. A central zone (UMAP1 ≈ 6–8) contains a mixture of cardiovascular, urinary, gastrointestinal, endocrine, and other profiles, indicating cross-system proximity in bloodanalyte space without a single dominant class. A leftward chain (UMAP1 ≈ –2 to 3) shows a graded progression that includes multiple non-hematopoietic super-categories together with several “Unknown” profiles, suggesting -
a continuous, non-linear spectrum rather than discrete partitions. Compared with PCA, UMAP thus enhances class coherence for hematopoietic diseases and reduces overlap among non-hematopoietic groups by capturing non-linear relationships.
Random Forest Feature Importances
A Random Forest classifier (500 trees; Gini impurity; feature importances normalized to sum to 1) was trained on profiles with known super-category labels. The top 15 features are summarized in the bar plot (Figure 11). Importances are distributed across a small set of hematological indices repeated over multiple timepoints, rather than concentrated in a single marker, indicating that several related analytes jointly drive discrimination. Segmented neutrophils (1000 cells/μL) appears four times am-
ong the top features (t5, t4, t1, t3), with t5 ranked first, indicating that absolute neutrophil counts carry strong class-discriminative signal. MCV (fL) appears at all measured timepoints (t1–t5) within the top 15, and RBC (million cells/μL) appears at t5, t1, and t2. Haemoglobin (g/dL) also enters the top 15 (t5). This recurrence across multiple timepoints indicates a dominant discriminative contribution of neutrophils relative to other analytes. Together, these features point to red-cell morph-
ology and mass as major contributors to class separation. Platelet count (1000 cells/μL) is present at t4 and t5 among the highest-ranked features, complementing neutrophil and erythrocyte measures. Several late timepoints (t5) recur among the highest-ranked features, while earlier timepoints also appear, suggesting that the discriminative signal is stable across time rather than confined to a single measurement. The Random Forest highlights a hematology-centric signature: neutrophils, MCV, RBC, h-
aemoglobin, and platelets repeatedly rank at the top across timepoints. This is concordant with earlier findings from clustering and non-linear embedding, in which hematopoietic disorders showed the most coherent grouping. We note that tree-based importances reflect model-specific attributions and can be diluted by collinearity among related features; hence, rankings should be interpreted as relative contributions rather than causal effects.

13
Figure 4. A) Reactome enrichment dotplot of Cluster 9 diseases. The top pathways include Signaling by interleukins, IL-4/IL-13 signaling, Extracellular matrix organization, Platelet activation/degranulation, and IL-10 signaling. B) Reactome cnetplot of the top 8 pathways, highlighting shared genes linking cytokine signaling, platelet function, and extracellular matrix remodeling. C) Reactome emapplot (cutoff = 0.35), showing modules formed by platelet pathways, cytokine signaling, and extracellula-
r matrix remodeling.

14
Figure 5. A) PCA of 103 disease profiles coloured by super-category. Hematopoietic diseases show vertical convergence along PC2, while non-hematopoietic systems remain dispersed. B) UMAP embedding of 103 disease profiles, showing a compact hematopoietic cluster separated from a continuous manifold of non-hematopoietic categories.

15
Figure 6: Random Forest analysis of feature importance. The top 15 features include segmented neutrophils, red blood cell indices (RBC, MCV, haemoglobin), and platelet counts, with hematological parameters dominating disease separation.
Discussion
Hematopoietic clustering
A central and consistent observation across all analytical approaches was the robust clustering of hematopoietic diseases. In the phylogenetic tree, disorders such as acute and chronic leukemias, lymphomas, myelodysplastic syndromes, and anemias either formed discrete compact subclusters or appeared as isolated but internally coherent branches. In correlationbased clustering, these profiles repeatedly grouped together, in stark contrast to the dispersion of most endocrine, metabolic, or cardiovasc-
ular diseases within a large heterogeneous cluster. Dimensionality reduction reinforced this distinction: in PCA, hematopoietic conditions exhibited a relatively narrow vertical spread along PC2, indicating convergence on secondary variance dimensions, while spanning an intermediate range across PC1 without forming complete separation from other systems. In UMAP, by contrast, they formed a particularly tight and distinct cluster that was clearly segregated from the broader manifold of non-hematopo-
ietic categories. Random Forest classification further underscored this pattern by identifying neutrophil counts, red blood cell indices (MCV, RBC), and platelet counts as the top discriminative features, pointing to classical hematological markers as the most informative drivers of disease separation.
The consistency of hematopoietic clustering across correlation, enrichment, dimensionality reduction, and feature selection methods underscores the stability of blood-based phenotyping for these conditions. It also highlights a contrast with other systems: whereas hematopoietic disorders form coherent entities in analyte space, endocrine, metabolic, and cardiovascular profiles appear more diffuse, reflecting greater heterogeneity and overlap. This divergence suggests that blood-based disease simil-
arity measures may be most directly applicable to

16
disorders of the hematopoietic system, and that expanding their interpretability to other systems will require integrating additional modalities ranging from subjective data enrichment (signs and symptoms) to genetic, imaging, or tissue-specific biomarkers.
Taken together, these findings support the notion that hematopoietic clustering reflects both methodological robustness and biological plausibility, establishing a benchmark against which the more complex patterns of non-hematopoietic diseases can be interpreted.
Heterogeneity of Non-Hematopoietic Systems
In contrast to the coherence of hematopoietic disorders, non-hematopoietic disease categories exhibited marked heterogeneity across all analyses. In the phylogenetic tree and correlationbased clustering, most endocrine, metabolic, cardiovascular, gastrointestinal, respiratory, and nervous system diseases were distributed across a large composite cluster, lacking the compact substructures observed in hematopoietic profiles. Dimensionality reduction reinforced this dispersion: PCA captured global va-
riance predominantly along a single axis without resolving system-level structure, while UMAP positioned non-hematopoietic conditions along a continuous manifold with extensive category overlap. Although enrichment analysis showed that these diseases contributed to immune and inflammatory pathways, their analyte profiles converged on broad systemic mechanisms rather than system-specific signatures. Several biological and methodological factors likely explain this pattern. Many non-hematopoietic co-
nditions exert only indirect effects on circulating analytes, with endocrine disorders such as diabetes and thyroid disease frequently coexisting and disrupting shared metabolic pathways with highly variable manifestations [29], and cardiovascular or gastrointestinal diseases presenting secondary hematological changes (e.g., anemia of chronic disease, inflammatory responses, electrolyte shifts) that overlap extensively across systems [30]. These shared downstream phenotypes, compounded by syndromi-
c complexity and comorbidities, dilute the specificity of blood-based signatures. Methodologically, Pearson correlation and PCA emphasize global variance structures, masking finer-grained distinctions, while UMAP reveals gradients rather than discrete partitions, and Random Forest prioritizes hematology-related features, further reflecting the lack of dominant analyte drivers in non-hematopoietic systems. Collectively, this dispersion indicates that blood-analyte signatures alone are insufficient -
for stable categorization outside hematopoietic conditions, highlighting both the interpretive limitations of analyte-based clustering and the need for integrative multimodal frameworks to resolve cross-system biological overlaps.
Inflammation
Cluster 9, which encompassed most non-hematopoietic diseases alongside a subset of hematopoietic and “Unknown” profiles, emerged as the most heterogeneous grouping in the correlation-based clustering. Despite its size and diversity, enrichment analyses provided clear evidence that this cluster is unified by a series of shared immune and inflammatory mechanisms. KEGG pathway analysis identified highly significant enrichment for cytokine–cytokine receptor interaction, Th17 cell differentiation, AGE–-
RAGE signaling in diabetic complications, rheumatoid arthritis, inflammatory bowel disease, and infection-related pathways including leishmaniasis and malaria. The q-values for these pathways were extremely low (spanning approximately 4.3 × 10−15 to 9.4 × 10−23), underscoring the robustness of the enrichment. Notably, these processes encompassed both broad immunological signaling axes and clinically recognized disease categories, indicating that Cluster 9 is not simply a residual grouping of dissi-
milar conditions, but one that reflects convergence on fundamental immune–inflammatory biology.
Network-based visualizations further refined this interpretation. The KEGG cnetplot revealed that multiple pathways within Cluster 9 were connected through overlapping sets of hub genes,

17
particularly pro-inflammatory cytokines and transcriptional regulators, which bridged autoimmune diseases, infection-driven processes, and metabolic complications. The emapplot corroborated these findings by highlighting functional modules: one linking leishmaniasis, tuberculosis, and toxoplasmosis, another connecting Th17 differentiation, rheumatoid arthritis, and inflammatory bowel disease, and a third coupling cytokine–cytokine receptor interaction with viral protein interaction with cytokine s-
ignaling. These modules illustrate how disparate clinical diagnoses can converge on shared gene networks, explaining why such diverse entities are grouped together in correlation space.
Reactome analysis provided complementary evidence, emphasizing interleukin signaling and platelet/ECM biology as key bridging processes. Interleukin pathways (Interleukin-4/13 and Interleukin-10 signaling) clustered tightly, reflecting central cytokine cascades in autoimmune and inflammatory contexts, while platelet activation, degranulation, and calcium-mediated responses formed a parallel submodule linked to extracellular matrix organization and degradation. These findings indicate that although-
 Cluster 9 is clinically heterogeneous, it is biologically coherent at the mechanistic level, converging on shared immune, inflammatory, and hemostatic pathways. This demonstrates that analyte-based similarity can uncover crosscutting biological processes that transcend traditional system-based classifications and may inform refinements to disease taxonomy.
Limitations and System-Level Interpretation
The following subsections are retained verbatim, now grouped under a single interpretive heading to reduce structural fragmentation while preserving all original content exactly as provided. While the analyses presented here provide a coherent account of disease (dis)similarity based on blood-analyte signatures, several methodological considerations and limitations warrant careful discussion.
Choice of similarity metric
Disease–disease similarity was quantified using Pearson correlation, which captures linear associations between analyte profiles. Although widely used and computationally efficient, this approach may underestimate relationships that are non-linear or driven by rare analytes. Alternative metrics, such as Spearman correlation [31], cosine similarity [32], or distance measures more robust to outliers, might reveal additional structure. Moreover, converting correlation to distance through 1 − ρ assume-
s symmetry and equal weight across all analytes, potentially obscuring clinically meaningful heterogeneity.
Clustering and dimensionality reduction
The hierarchical clustering with UPGMA provided an interpretable dendrogram and was useful for partitioning into clusters. However, cluster membership is sensitive to the choice of cut threshold, as demonstrated by the large and heterogeneous Cluster 9. Similarly, PCA captured global variance but failed to separate systemic categories beyond hematopoietic diseases, reflecting the limitations of linear projections [26]. UMAP recovered more nuanced local structures but is inherently stochastic and p-
arameter-dependent [27]; alternative embeddings or repeated runs might yield slightly different layouts. These issues highlight that observed separations are robust only when consistent across multiple methods, as was the case for hematopoietic clustering.
Feature attribution
Random Forest classification identified neutrophils, red blood cell indices, haemoglobin, and platelets as key features. While these results align with biological plausibility, tree-based feature importance is influenced by collinearity among analytes and repeated measurements across

18
timepoints. Importances therefore indicate relative contribution within the model, rather than causal effects.
The findings parallel, yet diverge from organ-based ICD taxonomies, suggesting that inflammatory and immune-network topology may provide a complementary axis of biological disease classification.
Future Directions
The current analysis was based on a curated repository of 103 disease profiles, each derived from knowledge-based synthetic blood-analyte signatures. The disease profiles were curated as part of a synthetic digital signature repository, each containing selected analytes measured at multiple timepoints. While this dataset enabled proof-of-concept analyses, the size and diversity remain limited. Future studies should incorporate clinically derived data beyond synthetic, larger and more heterogeneous-
 cohorts ideally spanning multiple populations, age groups, and clinical settings. Such expansion would increase statistical power, reduce biases, and enable stratified analyses that account for demographic and comorbidity effects. Linking profiles to longitudinal data would further allow investigation of disease progression and treatment response.
Blood-analyte profiles capture only one dimension of disease biology. Integrative frameworks that combine hematology with symptoms, and imaging should be explored. Multi-omic integration would help disentangle heterogeneous systems such as endocrine or gastrointestinal diseases, where blood indices provide only indirect readouts. Incorporating electronic health records and patient-reported outcomes could bridge molecular signatures with clinical trajectories, enhancing translational relevance.
Ultimately, future work should explore how analyte-based clustering can contribute to a hybrid taxonomy that integrates ICD-based classification with cross-system mechanistic axes. This may enable more biologically meaningful groupings, support early disease interception, and guide mechanism-based treatment allocation. Moving from proof-of-concept toward clinicalgrade classification will require iterative refinement between computational analyses, mechanistic interpretation, and translational impl-
ementation. Future work should also incorporate causal-mechanistic frameworks capable of revealing how minimal perturbations to blood-analyte signatures propagate through disease clusters and shared inflammatory axes. Approaches grounded in algorithmic information dynamics (AID) offer such a way to infer generative structure, identify causal drivers of cluster formation, and model counterfactual intervention strategies directly from digital blood twins [37–40]. Integrating these causal tools with -
larger, real-world datasets may help refine mechanistic disease taxonomy, expose latent confounding pathways, and enhance the interpretability of analyte-based disease stratification.
Conclusions
This study demonstrates that blood-derived digital signatures can recover highly coherent disease clusters for hematopoietic conditions while simultaneously revealing a large, mechanistically convergent cluster of systemic disorders driven by immunological and inflammatory pathways. Rather than replicating ICD-style taxonomies, hematology-based similarity exposes confounding factors and a deeper mechanistic substrate, one in which cytokine signaling, interleukin networks, platelet activation, and -
extracellular matrix remodeling form shared axes that unify clinically disparate diseases.
In translational medicine, this suggests that routine laboratory data, already embedded in healthcare workflows, could serve as the basis for a complementary mechanistic disease ontology. Such a hybrid taxonomy, grounded partly in analyte biology and partly in clinical

19
categorization, would support earlier risk stratification, more granular comorbidity mapping, and biologically informed patient grouping. Importantly, this framework does not require new tests, technologies, or invasive sampling; it reuses existing clinical data to surface latent biological structure.
By linking hematologic coherence with immune–inflammatory convergence across systems, this work outlines a pathway toward precision medicine that is computationally accessible and clinically scalable. As future validation studies expand the dataset, integrate multi-modal signals, and evaluate prognostic value, analyte-based digital twins may evolve into real-time stratification tools capable of informing disease monitoring, mechanistic discovery, and precision treatment allocation.
References
[1] Cabalar I, Le TH, Silber A, O’Hara M, Abdallah B, Parikh M, et al. The role of blood testing in prevention, diagnosis, and management of chronic diseases: A review. The American Journal of the Medical Sciences. 2024;368(4):274-86.
[2] Hoffbrand AV. Hoffbrand’s essential haematology. John Wiley & Sons; 2024.
[3] Liotta LA, Ferrari M, Petricoin E. Clinical proteomics: written in blood. Nature. 2003;425(6961):905- 5.
[4] Sun T, He X, Li Z. Digital twin in healthcare: Recent updates and challenges. Digital health. 2023;9:20552076221149651.
[5] Vall ́ee A. Digital twin for healthcare systems. Frontiers in Digital Health. 2023;5:1253050.
[6] Erol T, Mendi AF, Do ̆gan D. The digital twin revolution in healthcare. In: 2020 4th international symposium on multidisciplinary studies and innovative technologies (ISMSIT). IEEE; 2020. p. 1-7.
[7] Li X, Loscalzo J, Mahmud AF, Aly DM, Rzhetsky A, Zitnik M, et al. Digital twins as global learning health and disease models for preventive and personalized medicine. Genome Medicine. 2025;17(1):11.
[8] Organization WH, et al. International statistical classification of diseases and related health prob- lems: 10th revision (ICD-10). http://www who int/classifications/apps/icd/icd. 1992.
[9] WHO O. International classification of diseases. WHO [Internet]. 1992.
[10] Goh KI, Cusick ME, Valle D, Childs B, Vidal M, Barab ́asi AL. The human disease network. Pro- ceedings of the National Academy of Sciences. 2007;104(21):8685-90.
[11] Hidalgo CA, Blumm N, Barab ́asi AL, Christakis NA. A dynamic network approach for the study of human phenotypes. PLoS computational biology. 2009;5(4):e1000353.
[12] Chu Y, Li S, Tang J, Wu H. The potential of the Medical Digital Twin in diabetes management: a review. Frontiers in Medicine. 2023;10:1178912.
[13] Friedl J. Mastering regular expressions. ” O’Reilly Media, Inc.”; 2006.
[14] Pearson K. VII. Mathematical contributions to the theory of evolution.—III. Regression, heredity, and panmixia. Philosophical Transactions of the Royal Society

20
of London Series A, containing papers of a mathematical or physical character. 1896;(187):253-318.
[15] Sokal RR, Michener CD, et al. A statistical method for evaluating systematic relationships. 1958.
[16] Schriml LM, Arze C, Nadendla S, Chang YWW, Mazaitis M, Felix V, et al. Disease Ontology: a backbone for disease semantic integration. Nucleic acids research. 2012;40(D1):D940-6.
[17] Project TDO. Disease Ontology; 2025. Accessed: 2025-07. https://diseaseontology.org/.
[18] Pin ̃ero J, Ram ́ırez-Anguita JM, Sau ̈ch-Pitarch J, Ronzano F, Centeno E, Sanz F, et al. The DisGeNET knowledge platform for disease genomics: 2019 update. Nucleic acids research. 2020;48(D1):D845-55.
[19] Kanehisa M, Goto S. KEGG: kyoto encyclopedia of genes and genomes. Nucleic acids research. 2000;28(1):27-30.
[20] Gillespie M, Jassal B, Stephan R, Milacic M, Rothfels K, Senff-Ribeiro A, et al. The reactome pathway knowledgebase 2022. Nucleic acids research. 2022;50(D1):D687-92.
[21] Xu S, Hu E, Cai Y, Xie Z, Luo X, Zhan L, et al. Using clusterProfiler to characterize multiomics data. Nature protocols. 2024;19(11):3292-320.
[22] Yu G, He QY. ReactomePA: an R/Bioconductor package for reactome pathway analysis and visu- alization. Molecular BioSystems. 2016;12(2):477-9.
[23] Benjamini Y, Hochberg Y. Controlling the false discovery rate: a practical and powerful approach to multiple testing. Journal of the Royal statistical society: series B (Methodological). 1995;57(1):289- 300.
[24] project TD. DisGeNET; 2025. Accessed: 2025-07. https://www.disgenet.org/.
[25] Little RJ, Rubin DB. Statistical analysis with missing data. John Wiley & Sons; 2019.
[26] Jolliffe IT, Cadima J. Principal component analysis: a review and recent developments. Philo- sophical transactions of the royal society A: Mathematical, Physical and Engineering Sciences. 2016;374(2065):20150202.
[27] McInnes L, Healy J, Melville J. Umap: Uniform manifold approximation and projection for dimen- sion reduction. arXiv preprint arXiv:180203426. 2018.
[28] Breiman L. Random forests. Machine learning. 2001;45(1):5-32.
[29] Hage M, Zantout MS, Azar ST. Thyroid disorders and diabetes mellitus. Journal of thyroid research. 2011;2011(1):439463.
[30] Weiss G, Goodnough LT. Anemia of chronic disease. New England Journal of Medicine. 2005;352(10):1011-23.
[31] De Winter JC, Gosling SD, Potter J. Comparing the Pearson and Spearman correlation coefficients across distributions and sample sizes: A tutorial using simulations and empirical data. Psychological methods. 2016;21(3):273.

21
[32] Xia P, Zhang L, Li F. Learning similarity with cosine similarity ensemble. Information sciences. 2015;307:39-52.
[33] Maaten Lvd, Hinton G. Visualizing data using t-SNE. Journal of machine learning research. 2008;9(Nov):2579-605.
[34] Lundberg SM, Lee SI. A unified approach to interpreting model predictions. Advances in neural information processing systems. 2017;30.
[35] Ribeiro MT, Singh S, Guestrin C. ” Why should i trust you?” Explaining the predictions of any clas- sifier. In: Proceedings of the 22nd ACM SIGKDD international conference on knowledge discovery and data mining; 2016. p. 113544.
[36] Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation); 2016. Accessed: 2025-08-29. https://gdpr-info.eu/.
[37] Zenil H, Kiani NA, Marabita F, Deng Y, Elias S, Schmidt A, Ball G, Tegnér J. An Algorithmic Information Calculus for Causal Discovery and Reprogramming Systems. iScience. 2019;19:1160–1172. doi:10.1016/j.isci.2019.07.043.
[38] Uthamacumaran A, Zenil H. A Review of Mathematical and Computational Methods in Cancer Dynamics. Frontiers in Oncology. 2022;12:850731. doi:10.3389/fonc.2022.850731.
[39] Zenil H, Kiani NA, Tegnér J. Algorithmic Information Dynamics: A Computational Approach to Causality with Applications to Living Systems. Cambridge University Press; 2023.
[40] Abrahão FS, Zenil H. Emergence and algorithmic information dynamics of systems and observers. Philosophical Transactions of the Royal Society A. 2022;380:20200429. doi:10.1098/rsta.2020.0429.

22
Supplementary Material
Table 2: Disease profiles grouped by hierarchical clustering (cut at distance = 0.02). Profile IDs are omitted for clarity; only disease names are shown.
Cluster
Number of Diseases
Disease Names
1 1 Acute Myeloid Leukemia (AML)
2 1 Pancytopenia
3 1 AML2
4 1 Lymphoma2
5 2 Viral Lower Respiratory Tract Infection; Bacterial Pneumonia
6 6 Myeloma; Acquired Lymphopenia; CKD v2; Aortic Dissection; Meningitis
v2; Febrile Neutropenia
7 1 Myelodysplastic Syndrome
8 1 Pancytopenia v2
9 80
Microcytic Anaemia; Microcytic Anaemia v2; Normocytic Anaemia; Mixed Micro/Macrocytic Anaemia; Polycythaemia; Essential Thrombocythaemia; Acute Haemolytic Anaemia; Myelofibrosis; Druginduced Neutropenia; Macrocytic Anaemia; Chronic Myeloid Leukemia; Chronic Lymphocytic Leukemia; Acute Blood Loss (Upper GI); Acute Blood Loss (Lower GI); Chronic Blood Loss; Allergic Reaction; Acute IBD Flare; Type 1 Diabetes; Type 2 Diabetes; Diabetic Ketoacidosis; Hyperthyroidism; Hypothyroidism; Hyper-/Hypokalaemi-
a; Hyper/Hypocalcaemia; Acute Kidney Injury (v1–v3); Chronic Kidney Disease; Hyponatraemia (Hypo-/Hyper-/Normovolaemic); Hypernatraemia; Adrenal Insufficiency; Hypophosphataemia; Hypomagnesaemia; Myopericarditis; Pericarditis; Infective Endocarditis; Myocardial Infarction (NSTEMI/STEMI); Heart Failure; Pulmonary Embolism; Deep Vein Thrombosis; Urinary Tract Infection; Pyelonephritis; Bacterial Pharyngitis; COPD; Asthma; Bronchiectasis; Empyema; Gastroenteritis; Hepatitis (v1/v2); Gilbert Syndrome;-
 Cholangitis; Biliary Colic; Cellulitis; Osteomyelitis; Meningitis; Cholangiopathy; Atypical Pneumonia; Acute

23
Cluster
Number of Diseases
Disease Names
Pancreatitis; Chronic Diarrhoea (Coeliac); Diverticulitis; Gout; Giant Cell Arteritis; Rheumatoid Arthritis; Eosinophilic Vasculitis; Polymyalgia Rheumatica
10 3 CML2; CLL2; Lymphoma
11 1 ALL2
12 1 Heparin-Induced Thrombocytopenia (HIT)
13 1 Immune Thrombocytopenia (ITP)
14 1 Acute Lymphoblastic Leukemia (ALL)
15 1 Thrombotic Thrombocytopenic Purpura (TTP)
16 1 Chronic Liver Disease

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:00.674Z
- **Text Length:** 59121 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 23 of 23
