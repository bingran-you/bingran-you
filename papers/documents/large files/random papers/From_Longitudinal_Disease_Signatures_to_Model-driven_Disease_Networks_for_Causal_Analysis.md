# PDF Document: Montealegre et al. - From Longitudinal Disease Signatures to Model-driven Disease Networks for Causal Analysis.pdf

**File Path:** Montealegre et al. - From Longitudinal Disease Signatures to Model-driven Disease Networks for Causal Analysis.pdf

**Processed Date:** 2026-02-10T18:18:25.096Z

**File Size:** 498.95 KB

**Total Pages:** 18

**Extracted Pages:** 18

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3613

**Title:** From Longitudinal Disease Signatures to Model-driven Disease Networks for Causal Analysis

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

1
From Longitudinal Disease Signatures to Model-driven Disease
Networks for Causal Analysis
David Patrick Duys Montealegre1, Alexander Fulton2,3, Abicumaran Uthamacumaran4,
Hector Zenil1,4.5,6*
1Algorithmic Dynamics Lab, King’s Institute for Artificial Intelligence, King’s College London, UK 2 Cambridge University NHS Foundation Trust, Cambridge, UK 3 Department of Oncology, University of Cambridge, Cambridge, UK 4 Cancer Research Interest Group, The Francis Crick Institute, London, UK 5 Oxford Immune Algorithmics, Oxford University Innovation & London Institute for Healthcare Engineering, UK 6 Departments of Biomedical Computing and Digital Twins, School of Biomedical Engineering and Me-
dical Sciences, King’s Faculty of Life Sciences and Medicine, King’s Health Partners AHSC (NHS–KCL), King’s College London, UK
Abstract
Artificial Intelligence (AI) has gradually integrated within healthcare systems, permitting the enhancement of clinical decision-making through the automation of diagnostics and the synthesization of patient information, and improving. The integration of AI into healthcare
systems has introduced novel methods for enhancing clinical decision-making, automating diagnostics, and synthesizing patient information. However, the complex dynamic nature of diseases, and the necessity for explainable reasoning have created demand for approaches that can transform large amounts of complex clinical data into actionable, interpretable knowledge.
This work introduces a model-driven framework based on disease patterns converted into correlation graphs for causal exploration. We created a repository of 105 typical disease signatures from common blood markers to build a systematic pipeline to translate multidimensional clinical time series data into intervenable disease networks for causal
discovery and causal analysis.
Significance Statement
This study demonstrates that knowledge graphical models reconstructed from longitudinal data can transform routine medical data into clinically interpretable structures for causal analysis from longitudinal disease-relevant signatures. By integrating multiple thresholding strategies and causal graph design, the framework has the purpose to move beyond statistical correlation toward clinically and testable inference networks. These results highlight a practical pathway for
more transparent, explainable, and scalable tools in clinical decision support for AI training, precision healthcare and predictive medicine, offering interpretable, clinically actionable outputs that support safer use of AI in differential diagnosis.
* Corresponding author: hector.zenil@kcl.ac.uk

2
1. Introduction
1.1 Causal Inference in Clinical Research
Causal inference (CI) in medicine identifies cause–effect relationships to improve diagnosis, evaluation, and prevention by moving beyond correlations in heterogeneous data. Traditional statistical methods often fail to interpret complex markers or handle confounding, whereas CI
allows more accurate, reasoning-based approaches (Sanchez et al., 2022). Current clinical decision support (CDS) tools “learn only associations between variables ... without
distinguishing causal relationships and (spurious) correlations,” limiting actionable insights (Sanchez et al., 2022). Pearl (2009) argued causation enriches statistics by uncovering
mechanisms beyond correlations. Integrating AI with CI thus enhances CDS by synthesizing data, automating diagnostics, and improving predictive tasks across images, notes, and tests (Sanchez et al., 2022). Structural Causal Models (SCMs), represented as directed acyclic graphs (DAGs), estimate causal effects while addressing spurious associations, improving prediction
(Pearl, 2009; Sanchez et al., 2022). CI discovery algorithms further enable automated learning from observational data, strengthening inference in limited or noisy contexts (Kalainathan et al., 2019).
1.1.1 Knowledge Graphs and Medical Ontologies
Knowledge graphs represent biomedical entities as nodes and relationships as edges, enabling visualization of complex disease mechanisms (Renaux, 2023). They enhance structuring of
clinical knowledge using ontologies such as UMLS (Bodenreider et al., 2004) and integrate diverse datasets for hypothesis generation and decision support (Zhang et al., 2020). Despite their utility, graphs remain underused in real-time diagnosis due to static nature and limited integration with machine learning workflows (Zhang et al., 2020). Combining knowledge graphs with CI and generative AI could enable dynamic, interpretable, and context-aware reasoning in
clinical settings (Peng et al., 2023).
1.1.2 Retrieval-Augmented Generation (RAG)
RAG augments large language models by retrieving external knowledge, producing factually grounded outputs and reducing hallucinations (Lewis et al., 2020). In medicine, this supports factuality, comprehension, and reasoning benchmarks, though current models remain inferior to clinicians (Singhal et al., 2023). Refinements such as Med-PaLM and BioMED-RAG integrate
PubMed and case repositories, yielding cited, accurate responses (Singhal et al., 2023). Coupling RAG with causal knowledge graphs further enables counterfactual reasoning for differential diagnosis (Singhal et al., 2023). Unlike parametric memory models, RAG retrieves from external

3
databases and graphs (Karpas et al., 2022; Izacard et al., 2022), aligning outputs with literature and patient safety requirements.
1.2 Problem
AI integration can optimize decision support and diagnosis, but current models prioritize predictive accuracy over interpretability. Black-box deep learning constrains causal reasoning
(Rajkomar et al., 2019; Shiwlani et al., 2024), while pattern-identification without mechanistic understanding yields unstable, non-generalizable outputs (Obermeyer & Emanuel, 2016; Caruana et al., 2015; Topol, 2019). This limits patient-specific inference, especially where distinct conditions share similar FBC profiles (Miotto et al., 2016). Since diagnosis is inherently
a causal task, current AI’s lack of counterfactual reasoning hinders its clinical utility (Pearl, 2009; Zhao et al., 2020).
Heterogeneity in medical data (structured tests, notes, variable standards) further complicates
integration, requiring adaptive preprocessing and harmonization (Miotto et al., 2016; TorabMiandoab et al., 2023). Biomedical knowledge graphs remain static and poorly aligned to evolving patient data, limiting real-time use (Schriml et al., 2019; Hogan et al., 2021). RAG systems, while promising, rely on general embeddings not tailored to complex ontologies,
limiting interpretability and causal reasoning (Lewis et al., 2020; Alsentzer et al., 2019; Pearl & Mackenzie, 2018).
Fragmentation compounds these issues: CI, knowledge graphs, and AI frameworks evolve in isolation, lacking interoperability and integration into real-world CDS (Weissler et al., 2021;
Shortliffe & Sepulveda, 2018; Topol, 2019). This absence of synthesis increases complexity and clinician burden, undermining trust and adoption.
1.3 State of the Art
Generative AI models such as GatorTron (Yang et al., 2022), BioGPT (Luo et al., 2022), and Med-PaLM (Singhal et al., 2023; Lee et al., 2020) demonstrate strong performance in NLP and Q&A tasks but risk hallucinations and lack causal reasoning (Lewis et al., 2020; Shortliffe &
Sepulveda, 2018). Causal machine learning, including forests and Bayesian networks, enables treatment effect estimation and patient stratification (Sanchez et al., 2022), while neural discovery models such as CGNN show promise in nonlinear, multimodal settings (Brouillard et al., 2020). Clinical knowledge graphs (Bodenreider et al., 2004; Schriml et al., 2019) provide
structured biomedical relationships but remain underutilized for personalized reasoning, though integration with GNNs and reasoning engines shows potential.
1.4 Aims and Objectives

4
This project aims to develop a causally informed, context-aware CDS framework by inferring causal networks from biomedical literature such as PubMed, UMLS, and SNOMED, and
validating their consistency with established ontologies (Bodenreider et al., 2004). It further applies causal inference to structured full blood count (FBC) and diagnostic data (Miotto et al., 2016), simulates causal networks to test perturbations and counterfactuals while benchmarking against literature-based relationships (Pearl, 2009; Sanchez et al., 2022), and embeds causal
knowledge graphs into RAG pipelines for dynamic querying (Lewis et al., 2020; Singhal et al., 2023). Evaluation will focus on comparing CI accuracy, diagnostic utility, and predictive performance against established literature.
2. Methodology
We developed an integrated clinical decision support (CDS) workflow combining causal inference and knowledge graphs. The pipeline comprises: (i) data preprocessing, (ii) knowledge
graph construction, (iii) correlation- and causal-style graph generation, (iv) integration with a retrieval-augmented (RAG) interface, and (v) evaluation. Full blood count (FBC) values served as primary inputs to facilitate causal reasoning and in-silico experimentation across diverse clinical conditions.
2.1 FBC Data Collection, Preprocessing, and Refinement
We assembled hematological datasets (>100 clinical profiles) with FBC analytes organized in a
unified tabular format. As illustrated in Table 1 (Microcytic Anaemia), analytes were measured longitudinally (Days 0, 7, 14, 21, 28), enabling trajectory mapping and inter-analyte relationship analysis. Profiles were ingested from a multi-sheet workbook and standardized for graph-based modeling (see Data and Code Availability section). Sheet names corresponding to individual clinical profiles were programmatically enumerated and iterated to extract FBC data. Analytes
were assigned distinct markers/shapes to improve node-level interpretability in graphs (see Data and Code Availability section). Non-numeric headers, free text, and metadata were excluded to retain analyte-level numeric matrices. Rows with all-zero or all-NaN values were removed as a filtering step; sparse within-row gaps were linearly interpolated when ≥2 timepoints were
present, preserving analytes with minor missingness (see Data and Code Availability section).
2.2 Correlation Graph Construction and Threshold Optimization
Pairwise Pearson correlations were computed within each profile to quantify longitudinal analyte
relationships (see Data and Code Availability section). To focus on salient structure and reduce noise, we evaluated three complementary thresholding strategies and selected the most conservative cut-off per profile:

5
• Natural threshold: inflection-based cutoff using Gaussian mixture modeling of |ρ|, capturing structural stability (Zhang et al., 2021; Toubiana et al., 2021).
• Elbow method: identifies the maximum curvature in the sorted |ρ| distribution to define
the cutoff (Atunes et al., 2025).
• Ratio method: retains the top 30% strongest |ρ| values, a conservative hyperparameter applied where curvature is weak.
•
The chosen threshold defined an undirected, weighted correlation graph: nodes are analytes; edges connect pairs with |ρ| ≥ threshold; edge widths scale with |ρ| (see Data and Code
Availability section). Graphs were exported with node coordinates, edge weights, and threshold metadata for each profile.
To statistically assess the discrimination achieved by thresholding, correlation edges were
divided into retained (|ρ| ≥ natural threshold) and discarded (|ρ| < threshold). The distributions of absolute correlations were compared using the Mann–Whitney U test and Welch’s unequalvariance t-test, with effect size quantified by Cohen’s d. This approach evaluates whether
thresholding systematically preserves stronger associations while excluding weaker, potentially spurious correlations.
2.3 Causal-Style Graph Construction
To approximate latent mechanistic structure without imposing analyte-to-analyte directionality, we generated causal-style graphs from the thresholded correlations. For each strong pair, a
shared latent “cause” node was introduced with directed edges to the two analytes, representing a common-cause hypothesis consistent with causal diagram conventions (Pearl, 2009). This yields a directed acyclic representation centered on latent drivers while avoiding unsupported direct
causal claims between analytes (see Data and Code Availability section). The resulting graphs highlight candidate latent events and prioritize analyte interactions for subsequent structural causal modeling and counterfactual testing.
Disease Profile Microcytic Anaemia
Scenario IDA secondary to dietary deficiency
Symptoms*
Fatigue, pallor, dyspnoea, pica. Other symptoms may be present depending on cause such as bleeding or malignancy related symptoms.
*Additional symptoms possible, this list is to highlight some of the common presenting features.
Associated Guidelines: BMJ Best Practice
Comments
Routine blood test with GP
D7 - IV iron replacement
D14 - second iron infusion D21 D28

6
FBC
WBC (1000 cells/uL) 6.5 6.1 6.6 6.1 5.7
Lymphocytes (1000 cells/uL) 2 1.9 2.1 2 1.8
Monocytes (1000 cells/uL) 0.2 0.1 0.1 0.2 0.1
Segmented neutrophils (1000 cells/uL) 4.2 4.1 4.4 3.9 3.8
Eosinophils (1000 cells/uL) 0.1 0 0 0 0
Basophils (1000 cells/uL) 0 0 0 0 0
RBC (million cells/uL) 4 3.9 4.1 4.2 4.4
Haemoglobin (g/dL) 11.8 11.7 12 12.3 12.7
MCV (fL) 76 75 78 79 81
Platelet count (1000 cells/uL) 236 247 272 266 300
MPV (fL) 7.8 7.6 7.5 7.8 7.6
Renal Function
Na (mmol/L) 139 138 135 137 140
K (mmol/L) 3.7 3.9 3.7 4 3.8
Urea (mmol/L) 5.1 5 4.8 5 4.8
Creat (mmol/L) 70 73 69 71 75
CRP (mg/L) <4 <4 <4 <4 <4
Table 1: Input Collected Haematological FBC Clinical Profile Data for Profile 02–Microcytic
anaemia

7
3. Results
A total of 105 clinical profiles were processed using the model described in Section 2. Each
profile included FBC analyte values across 9 variables: WBC (1000 cells/uL), Lymphocytes (1000 cells/uL), Monocytes (1000 cells/uL), Segmented Neutrophils (1000 cells/uL), RBC (million cells/uL), Haemoglobin (g/dL), MCV (fL), Platelet Count (1000 cells/uL), MPV (fL). For each profile, correlation matrices were computed, thresholded using three methods (natural, elbow, and ratio), and used to generate both correlation graphs where the passed correlations are
dynamically adjusted with respect to the thresholding value, and causal graphs with intermediate red causal nodes connecting strongly associated analytes.
Graphs were generated for every profile and saved in PNG and CSV formats, including node coordinates, edge weights, and threshold metadata. As seen below, these are the computed
correlation values for each analyte pair, assorted in strongest to weakest. Moreover, the table below also records all 3 thresholding calculations to demonstrate the yielded estimations and which of these are the most conservative.
Analyte Pair Correlation
WBC ↔ Segmented
neutrophils 0.995
RBC ↔ Haemoglobin 0.994
WBC ↔ Monocytes 0.99
RBC ↔ MCV 0.982
Monocytes ↔
Segmented neutrophils 0.982
Platelet count ↔ MPV 0.964
Haemoglobin ↔ MCV 0.963
WBC ↔ Lymphocytes 0.882
Lymphocytes ↔
Monocytes 0.873

8
Lymphocytes ↔
Segmented neutrophils 0.833
Segmented neutrophils
↔ MCV -0.616
Segmented neutrophils
↔ Haemoglobin -0.564
Segmented neutrophils
↔ RBC -0.553
WBC ↔ MCV -0.549
Monocytes ↔ MCV -0.49
WBC ↔ Haemoglobin -0.484
Lymphocytes ↔ MPV 0.48
WBC ↔ RBC -0.475
MCV ↔ Platelet count 0.456
Lymphocytes ↔
Platelet count 0.452
Monocytes ↔
Haemoglobin -0.44
RBC ↔ Platelet count 0.439
Monocytes ↔ RBC -0.428
WBC ↔ MPV 0.424
Monocytes ↔ MPV 0.419
Segmented neutrophils
↔ MPV 0.4

9
Haemoglobin ↔
Platelet count 0.361
Monocytes ↔ Platelet
count 0.333
WBC ↔ Platelet count 0.31
Segmented neutrophils
↔ Platelet count 0.269
MCV ↔ MPV 0.233
RBC ↔ MPV 0.217
Lymphocytes ↔ MCV -0.176
Haemoglobin ↔ MPV 0.136
Lymphocytes ↔ RBC -0.05
Lymphocytes ↔
Haemoglobin -0.043
Description Value
Natural Threshold 0.797
Elbow Threshold 0.564
Ratio Threshold 0.616
Threshold Used
(Natural) 0.797
Table 2: Output Correlation and Threshold Estimation Results Table for Profile 02
Microcytic anaemia
Employing these computed values, the model constructed correlation graphs according to the
selected threshold and adjusted the correlation values as training progressed on the profile. In this example, thresholding retained 10 edges (|ρ| ≥ 0.797) and discarded 26. The mean absolute correlation of retained edges was substantially higher than discarded edges (0.946 vs. 0.377). Shapiro–Wilk testing indicated non-normality in the retained group (p < 0.05) and borderline

10
normality in the discarded group (p = 0.073). Non-parametric analysis confirmed significantly stronger correlations among retained edges (Mann–Whitney U = 260, p < 0.001), supported by Welch’s t-test (t = 15.86, p < 0.001) and a very large effect size (Cohen’s d = 4.83). These results
demonstrate that thresholding robustly distinguishes high-strength associations from weaker or spurious correlations, reinforcing its utility for generating clinically interpretable graphical structures.
Figure 3: Correlation Graph with Thresholding for Profile 2–Microcytic Anaemia
The correlation graph, however, still retains associations that are not clinically significant or that align with medical literature. Employing the knowledge graph on this specific clinical profile (Microcytic anaemia), the causal graph trains this grounded and medical information to produce
a more accurate causal structure more closely aligning to the accepted literature. As such, as seen below, the causal graph severs edges between analytes it considers as spurious associations or negligible relationships that are not medically grounded. Moreover, it recalculates the correlations over a more conservative dynamic range and stricter thresholding estimation.

11
Figure 4: Causal Graph with Refined Thresholding and Cause Nodes for Profile 2–Microcytic
Anaemia
Additionally, the causal graph includes cause nodes, evidenced by the red nodes placed between
analytes that exhibit strong correlations, with a causal directionality emanating from these nodes to the analytes. This enables the model to visualize the causal nature between analytes without assigning specific directionality, enabling preliminary use of the model in clinical settings.
4. Discussion
The construction of both correlation and causal graphs iterated for all 105 distinct clinical profiles employed throughout this project yield insightful information into the causal structures
and analyte relationships for differing disease profiles. Moreover, the employment of different thresholding and modelling techniques output different results that highlight the complexity in this project at producing results affecting clinical plausibility but also interpretability. This provision of dual-layered representation of FBC analyte relationship enables the deepened

12
comprehension between the correlation and mechanisms of analytes while also understanding the medical significance each has when cross-referenced with grounded literature.
4.1 Comparison of Graph Dynamics and Clinical Coherence
The initial correlation graphs captured statistical co-expression patterns within each clinical profile, allowing us to establish significant associations and train the model on these filtered relationships. The refined causal graph introduced a layer of interpretability grounded in clinically plausible reasoning and ensured the retained associations align with factual literature,
optimizing interpretability for the clinical workflow. By contrasting both modelling techniques while employing varying thresholding approaches (natural, elbow, and top-30% ratio), the study highlights trade-offs between completeness and clarity, statistical strength and medical correctness, and ultimately, correlation and causation.
A key observation is that although correlation graphs demonstrate analyte pairs with highstrength edges, many do not align with established literature and can be attributed to spurious associations, noise, limited training, or insufficient data. This limitation of purely statistical models, which tend to overfit and emphasize approximation over factualness, contrasts with
causal graphs enhanced with domain-informed constraints and conservative thresholds. In the Microcytic Anaemia profile (Figure 4), edges in the causal graph better mirrored known associations, such as RBC–haemoglobin, while weaker links were omitted.
Correlation graphs, despite conservative thresholds, retained many relationships, producing
densely connected structures. For example, the Microcytic Anaemia correlation graph (Figure 3) yielded nearly twice as many edges as its causal counterpart. Across 105 profiles, causal graphs reduced connectivity by ~27.4% relative to correlation graphs, preserving only the strongest associations. In the Iron Deficiency Anaemia (IDA) profile, the correlation graph retained links between clinically unrelated analytes, while the causal graph, trained on knowledge graphs and
benchmark literature, filtered these out and preserved established patterns such as RBChaemoglobin (0.86) and MCH–MCV (0.81), consistent with IDA pathophysiology.
This reduction in redundancy was consistent: correlation graphs retained 27.4% more connections on average, many lacking factual support. Profiles such as Leukemoid Reaction and
Chronic Inflammation showed the most pronounced reductions (~40%) when moving from correlation to causal representation, reflecting their greater prevalence of co-fluctuating analytes and spurious associations likely driven by systemic inflammatory perturbations.
In the causal graphs, each strongly associated analyte pair above the threshold is indirectly
connected through a common cause node (Figure 4). This design frames high-correlation relationships as effects of latent factors or non-directional mechanisms not yet clinically understood, replacing direct mechanistic links with proxy structures. Such representation supports exploration of alternative clinical explanations and distinguishes between mere

13
statistical associations, as in most machine learning tools, and clinically plausible interactions. The model therefore eliminates spurious or clinically insignificant connections despite statistical strength, yielding medically relevant insights.
Across 105 clinical profiles, causal graphs preserved strong, literature-supported interactions while systematically filtering weaker associations present in correlation-only models. Training on knowledge graphs specific to each condition enabled cross-referencing between significant correlations and accepted biomedical relationships, grounding results in published evidence.
Following Pearl’s (2009) framework, this structure highlights interventions and mediating
variables rather than simple covariation. For example, in the Megaloblastic Anaemia profile, strong associations between MCV and haemoglobin, medically explained by B12 deficiency, appear in the causal graph via a shared intermediary node, explicitly representing the biological
driver. This design enhances interpretability, hypothesis generation, and positions the model for integration with formal structural causal modeling tools that combine statistical inference and domain knowledge.
4.2 Comparison of Thresholding Techniques
Thresholding strongly influenced both density and accuracy of the graphs, with the goal of balancing clarity and clinical significance. The natural threshold proved most conservative, yielding a mean of 14.3 edges per profile versus 28.7 for the elbow method and 31.4 for the ratio method. It also retained stronger associations, with mean absolute weight 0.84 compared to 0.74
for elbow.
This conservatism produced clearer graphs and reduced false positives in the causal construction. For example, in the Macrocytic Anaemia profile, the natural threshold preserved only pathognomonic connections such as the MCV–haemoglobin association (0.88), whereas the elbow method included weaker, clinically unsupported edges.
However, in profiles with more even edge distributions, the natural threshold was less effective, highlighting the need for multiple strategies. Using three complementary methods ensured robustness across 105 profiles with varied variance and signal strength. Selecting the most conservative threshold prioritized specificity over sensitivity, reducing false-positive causal
inferences and limiting spurious associations, a critical safeguard in clinical contexts where misinterpretation could drive misdiagnosis.
4.3 Limitations
Reliance on Pearson correlation restricts detection of non-linear, monotonic, or conditional
relationships essential for longitudinal mapping. Incorporating Spearman, mutual information, or kernel-based metrics would expand non-linear capabilities and improve generalizability.

14
Training used synthetic profiles that, while controlled and tailored to known FBC patterns, lack the noise, outliers, and confounders present in real hospital data. This limits ecological validity and requires future training and validation with empirical EHR and laboratory datasets.
Natural and elbow methods assume unimodal correlation decay, which does not generalize across all pathologies. In multimodal profiles, the elbow method sometimes produced thresholds that overemphasized sparsity at the expense of clinical relevance. For conditions such as inflammatory profiles where platelet dynamics dominate, higher-order or conditional models
may better capture underlying dependencies.
The framework treats all correlations as symmetric and undirected between analytes and common cause nodes, limiting causal inference. While cause nodes aid interpretability, they do not provide directionality or conditional independence testing. Future iterations should
incorporate robust causal discovery to assign direction, model latent confounding, and quantify influence on outcomes.
The construction of causal graphs for CDS, while promising, must be approached with diligence given ethical risks. Overinterpreting causal links, omitting associations, and the limited real
world testing of such models raise concerns about misuse and potential harm in differential diagnosis. Misdiagnosis and bias may inhibit acceptance, so rigorous validation and monitoring are essential to ensure safety and to confirm that implementation yields net benefit rather than workflow disruption.
5. Conclusions and Future Work
This study addresses a critical gap in CDS: the absence of interpretable, dynamic, context-aware,
and causal structures for haematological data. To meet this need, we developed a framework for generating causal-style graphical models from FBC disease profiles, emphasizing explainability, transparency, and clinical grounding. By employing multiple thresholding methods tailored to specific profiles, along with correlational and causal visualization techniques, the framework optimizes interpretability and preserves medically significant analyte relationships while
minimizing spurious complexity, statistical noise, and unsupported associations.
Results demonstrate that the causal graph framework consistently produced clinically grounded structures across a sample of 105 pathological FBC profiles, aligning closely with established
relationships through integration with knowledge graphs and improving upon purely correlational approaches. Key limitations include reliance on synthetic data curated by a human clinical domain expert, the assumption of linear correlations, restricted thresholding in multimodal contexts, and the treatment of correlations as symmetric and non-directional.

15
Future work should extend this framework to dynamic longitudinal settings, enabling modelling of evolving haematological trajectories, expanding beyond FBC and using more powerful causal discovery and causal analysis tools such as Algorithmic Information Dynamics (Hernandez et al
2018; Zenil et al 2023). Such advances would bridge current statistical methods with causal AI capabilities even beyond Judea Pearl’s statistical causal inference, enhancing diagnostic utility and CDS while minimizing workflow disruption by incrementing mechanistic automation from first principles without human close supervision.
References
1) Alsentzer, E., Murphy, J., Boag, W., Weng, W. H., Jindi, D., Naumann, T., & McDermott, M. (2019). Publicly available clinical BERT embeddings. Proceedings of the 2nd Clinical Natural Language Processing Workshop, 72-78. https://doi.org/10.18653/v1/W19-1909
2) Bodenreider, O. (2004). The Unified Medical Language System (UMLS): Integrating biomedical terminology. Nucleic Acids Research, 32(Database issue), D267-D270. https://doi.org/10.1093/nar/gkh061 3) Brouillard, P., Lachapelle, S., Lacoste, A., Lacoste-Julien, S., & Drouin, A. (2020).
Differentiable causal discovery from interventional data. Advances in Neural Information Processing Systems, 33, 21865-21877.
https://proceedings.neurips.cc/paper/2020/hash/f8b7aa3a0d349d9562b424160ad18612Abstract.html
4) Burduk, A., & Wójcik, K. (2022). Computer-aided analysis of industrial CT data using the elbow method and decision trees. Applied Sciences, 12(15), 7515. https://doi.org/10.3390/app12157515 5) Caruana, R., Lou, Y., Gehrke, J., Koch, P., Sturm, M., & Elhadad, N. (2015). Intelligible models for healthcare: Predicting pneumonia risk and hospital 30-day readmission.
Proceedings of the 21st ACM SIGKDD International Conference on Knowledge
Discovery and Data Mining, 1721-1730. https://doi.org/10.1145/2783258.2788613 6) Glymour, C., Zhang, K., & Spirtes, P. (2019). Review of causal discovery methods based on graphical models. Frontiers in Genetics, 10, 524.
https://doi.org/10.3389/fgene.2019.00524 7) Hernán, M. A., & Robins, J. M. (2020). Causal inference: What if. Chapman & Hall/CRC. https://www.hsph.harvard.edu/miguel-hernan/causal-inference-book/ 8) Hogan, A., Blomqvist, E., Cochez, M., d'Amato, C., Melo, G. D., Gutierrez, C., ... &
Zimmermann, A. (2021). Knowledge graphs. ACM Computing Surveys, 54(4), 1-37. https://doi.org/10.1145/3447772 9) Izacard, G., Caron, M., Hosseini, L., Riedel, S., Bojanowski, P., Joulin, A., & Grave, E. (2022). Unsupervised dense information retrieval with contrastive learning. Transactions

16
of the Association for Computational Linguistics, 10, 240-253. https://doi.org/10.1162/tacl_a_00460 10) Kalainathan, D., Goudet, O., Guyon, I., Lopez-Paz, D., & Sebag, M. (2019). SAM:
Structural agnostic model, causal discovery and penalized adversarial learning. arXiv preprint arXiv:1803.04929. https://arxiv.org/abs/1803.04929 11) Karpas, E., Perez, O., Abend, O., Belinkov, Y., Lenz, B., Lieber, O., ... & Shoham, Y. (2022). MRKL systems: A modular, neuro-symbolic architecture that combines large
language models, external knowledge sources and discrete reasoning. arXiv preprint arXiv:2205.00445. https://arxiv.org/abs/2205.00445 12) Lee, J., Yoon, W., Kim, S., Kim, D., Kim, S., So, C. H., & Kang, J. (2020). BioBERT: A pre-trained biomedical language representation model for biomedical text mining.
Bioinformatics, 36(4), 1234-1240. https://doi.org/10.1093/bioinformatics/btz682 13) Lewis, P., Perez, E., Piktus, A., Petroni, F., Karpukhin, V., Goyal, N., ... & Kiela, D. (2020). Retrieval-augmented generation for knowledge-intensive NLP tasks. Advances in Neural Information Processing Systems, 33, 9459-9474. https://arxiv.org/abs/2005.11401
14) Luo, R., Sun, L., Xia, Y., Qin, T., Zhang, S., Poon, H., & Liu, T. Y. (2022). BioGPT: Generative pre-trained transformer for biomedical text generation and mining. Briefings in Bioinformatics, 23(6), bbac409. https://doi.org/10.1093/bib/bbac409 15) Miotto, R., Wang, F., Wang, S., Jiang, X., & Dudley, J. T. (2016). Deep learning for
healthcare: Review, opportunities and challenges. Briefings in Bioinformatics, 19(6), 1236-1246. https://doi.org/10.1093/bib/bbw068 16) Obermeyer, Z., & Emanuel, E. J. (2016). Predicting the future—big data, machine learning, and clinical medicine. New England Journal of Medicine, 375(13), 1216-1219. https://doi.org/10.1056/NEJMp1606181
17) Pearl, J. (2000). Causality: Models, reasoning, and inference. Cambridge University Press. https://doi.org/10.1017/CBO9780511803161
18) Pearl, J. (2009). Causal inference in statistics: A primer. John Wiley & Sons. https://doi.org/10.1002/9781119186846
19) Pearl, J., & Mackenzie, D. (2018). The book of why: The new science of cause and effect. Basic Books. 20) Peng, C., Yang, X., Chen, A., Smith, K. E., PourNejatian, N., Costa, A. B., ... & Wu, Y. (2023). A study of generative large language model for medical research and healthcare.
npj Digital Medicine, 6, 210. https://doi.org/10.1038/s41746-023-00958-w 21) Rajkomar, A., Oren, E., Chen, K., Dai, A. M., Hajaj, N., Hardt, M., ... & Dean, J. (2019). Scalable and accurate deep learning with electronic health records. npj Digital Medicine, 1, 18. https://doi.org/10.1038/s41746-018-0029-1
22) Sanchez, P., Carpenter, J. P., & Zisserman, A. (2022). Causal machine learning for healthcare and precision medicine. Royal Society Open Science, 9(8), 220638. https://doi.org/10.1098/rsos.220638

17
23) Schriml, L. M., Arze, C., Nadendla, S., Chang, Y. W. W., Mazaitis, M., Felix, V., ... & Kibbe, W. A. (2019). Disease Ontology: A backbone for disease semantic integration. Nucleic Acids Research, 40(D1), D940-D946. https://doi.org/10.1093/nar/gkr972
24) Shiwlani, A., Ahmad, S., & Kumar, R. (2024). Advancing hepatology with AI: A systematic review of early detection models for hepatitis-associated liver cancer. ResearchGate. https://doi.org/10.13140/RG.2.2.24567.89120 25) Shortliffe, E. H., & Sepulveda, M. J. (2018). Clinical decision support in the era of
artificial intelligence. JAMA, 320(21), 2199-2200. https://doi.org/10.1001/jama.2018.17163 26) Singhal, K., Azizi, S., Tu, T., Mahdavi, S. S., Wei, J., Chung, H. W., ... & Natarajan, V. (2023). Large language models encode clinical knowledge. Nature, 620(7972), 172-180.
https://doi.org/10.1038/s41586-023-06291-2 27) Soleimani, H., Subbaswamy, A., & Saria, S. (2017). Treatment-response models for counterfactual reasoning with continuous-time, continuous-valued interventions. Uncertainty in Artificial Intelligence, 333, 851-861. https://arxiv.org/abs/1704.02038
28) Spirtes, P., Glymour, C. N., Scheines, R., & Heckerman, D. (2000). Causation, prediction, and search. MIT Press. https://doi.org/10.7551/mitpress/1668.001.0001 29) Topol, E. J. (2019). High-performance medicine: The convergence of human and artificial intelligence. Nature Medicine, 25(1), 44-56. https://doi.org/10.1038/s41591
018-0300-7 30) Torab-Miandoab, A., Samad-Soltani, T., Jodatnia, M., & Rezaei-Hachesu, P. (2023). Interoperability of heterogeneous health information systems: A systematic review. BMC Medical Informatics and Decision Making, 23, 18. https://doi.org/10.1186/s12911-02302115-5
31) Toubiana, W., Pinu, F. R., Viant, M. R., Canlet, C., Collakova, E., Rezzi, S., ... & Johanningsmeier, S. D. (2021). Guidelines for correlation coefficient threshold settings in metabolite correlation networks, exemplified on a potato association panel. Metabolomics, 17, 47. https://doi.org/10.1007/s11306-021-01787-3
32) Weissler, E. H., Naumann, T., Andersson, T., Ranganath, R., Elemento, O., Luo, Y., ... & Ghassemi, M. (2021). The role of machine learning in clinical research: Transforming the future of evidence generation. Trials, 22, 537. https://doi.org/10.1186/s13063-021-05489x
33) Yang, X., Chen, A., PourNejatian, N., Shin, H. C., Smith, K. E., Parisien, C., ... & Wu, Y. (2022). GatorTron: A large-scale language model for biomedical text mining and knowledge extraction. npj Digital Medicine, 5, 194. https://doi.org/10.1038/s41746-02200742-2
34) Yu, Y., Chen, J., Gao, T., & Yu, M. (2019). DAG-GNN: DAG structure learning with graph neural networks. International Conference on Machine Learning, 7154-7163. https://proceedings.mlr.press/v97/yu19a.html

18
35) Zhang, Y., Chen, Q., Yang, Z., Lin, H., & Lu, Z. (2020). BioWordVec, improving biomedical word embeddings with subword information and MeSH. Scientific Data, 6, 52. https://doi.org/10.1038/s41597-019-0055-0
36) Zhao, J., Wang, T., Yatskar, M., Ordonez, V., & Chang, K. W. (2020). Bias in deep learning systems for medical diagnosis. Nature Medicine, 26(4), 539-546. https://doi.org/10.1038/s41591-020-0769-4 37) Zheng, X., Aragam, B., Ravikumar, P. K., & Xing, E. P. (2018). DAGs with NO TEARS:
Continuous optimization for structure learning. Advances in Neural Information Processing Systems, 31, 9472-9482.
https://proceedings.neurips.cc/paper/2018/hash/e347c51419ffb23ca3fd5050202f9c3dAbstract.html
38) Hernández-Orozco, S., Kiani, N.A., Zenil, H. (2018). Algorithmically Probable Mutations Reproduce Aspects of Evolution, such as Convergence Rate, Genetic Memory, and Modularity, Royal Society Open Science, 5:180399. 39) Zenil H, Kiani NA, Tegnér J. (2023). Algorithmic Information Dynamics: A
Computational Approach to Causality with Applications to Living Systems. Cambridge University Press.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:25.096Z
- **Text Length:** 37223 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 18 of 18
