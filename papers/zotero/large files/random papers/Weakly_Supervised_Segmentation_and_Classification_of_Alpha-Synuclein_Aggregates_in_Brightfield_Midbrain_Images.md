# PDF Document: Dereure et al. - 2025 - Weakly Supervised Segmentation and Classification of Alpha-Synuclein Aggregates in Brightfield Midbr.pdf

**File Path:** Dereure et al. - 2025 - Weakly Supervised Segmentation and Classification of Alpha-Synuclein Aggregates in Brightfield Midbr.pdf

**Processed Date:** 2026-02-10T18:18:56.733Z

**File Size:** 9628.75 KB

**Total Pages:** 5

**Extracted Pages:** 5

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3606

**Title:** Weakly Supervised Segmentation and Classification of Alpha-Synuclein Aggregates in Brightfield Midbrain Images

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

This work has been submitted to the IEEE for possible publication.
Copyright may be transferred without notice, after which this version may no longer be accessible.
WEAKLY SUPERVISED SEGMENTATION AND CLASSIFICATION OF ALPHA-SYNUCLEIN AGGREGATES IN BRIGHTFIELD MIDBRAIN IMAGES
Erwan Dereure1 Robin Louiset2,3,4,5 Laura Parkkinen6 David A Menassa6,7,∗ David Holcman1,8,∗
1Group of Applied Mathematics and Computational Biology, Ecole Normale Supe ́rieure, PSL University, Paris, France.
2AP-HP, Hoˆpital Henri Mondor-Albert Chenevier, Service de Neurologie, F-94010 Cre ́teil, France.
3INSERM U955, Institut Mondor de Recherche Biom ́edicale, UPEC, Equipe NeuroPsychologie Interventionnelle, F-94010 Creteil, France.
4De ́partement d’Etudes Cognitives, E ́ cole normale supe ́rieure, PSL University, 75005 Paris, France.
5NeurATRIS, Cre ́teil, France.
6Nuffield Department of Clinical Neurosciences and the Queen’s College, University of Oxford, UK.
7Department of Women’s and Children’s Health, Karolinska Institutet, Sweden.
8Churchill College, Cambridge University, CB30DS UK.
ABSTRACT
Parkinson’s disease (PD) is a neurodegenerative disorder associated with the accumulation of misfolded alpha-synuclein aggregates, forming Lewy bodies and neuritic shape used for pathology diagnostics. Automatic analysis of immunohistochemistry histopathological images with Deep Learning provides a promising tool for better understanding the spatial organization of these aggregates. In this study, we develop an automated image processing pipeline to segment and classify these aggregates in whole-s-
lide images (WSIs) of midbrain tissue from PD and incidental Lewy Body Disease (iLBD) cases based on weakly supervised segmentation, robust to immunohistochemical labelling variability, with a ResNet50 classifier. Our approach allows to differentiate between major aggregate morphologies, including Lewy bodies and neurites with a balanced accuracy of 80%. This framework paves the way for large-scale characterization of the spatial distribution and heterogeneity of alpha-synuclein aggregates in brig-
htfield immunohistochemical tissue, and for investigating their poorly understood relationships with surrounding cells such as microglia and astrocytes.
Index Terms— Image processing, Segmentation, Parkinson’s disease, Alpha-Synuclein, Image Retrieval, Shape Classification
1. INTRODUCTION
Parkinson’s disease (PD) is a hypokinetic disorder characterized by the inability to generate voluntary movement [1, 2]. The neurodegeneration of the nigrostriatal pathway underlies the symptoms and neuropathologically, dopaminergic neuronal cell loss of up to 80% has been documented in the ventral substantia nigra pars compacta in patients in the late stages of the disease [1]. Misfolded phosphorylated alpha-synuclein aggregates accumulate in neurons as Lewy bodies or in neuronal processes as Lew-
y neurites and are thought to cause neurodegeneration [3]. These alpha-synuclein aggregates can also be present in incidental Lewy Body Disease (iLBD) [4], considered to represent early or prodromal stages of Parkinson’s disease [5]. Concomitant with neurodegeneration is a
* These authors contributed equally to this work. Corresponding author: dereure@bio.ens.psl.eu
state of sustained chronic neuroinflammation centrally orchestrated by microglia, macrophages and astrocytes with increasing evidence suggesting the involvement of the peripheral immune system [6, 7]. To study interactions between microglia and alpha-synuclein aggregates, our aim is to quantify the spatial distribution, morphology, and organization of aggregates, to ultimately reveal their count, fraction, shape heterogeneity, and associations with microglial phenotypes [8]. Neuropathological eval-
uation of alpha-synuclein pathology has traditionally relied on manual or semi-quantitative approaches, with neuroinflammatory responses remaining poorly characterized. Typically, neuropathologists classify alpha-synuclein aggregates by their morphology. In this work, we present an automated pipeline designed to facilitate large-scale analysis. The first stage of the pipeline involves segmenting alpha-synuclein aggregates, which are immunohistochemical labeled (hereafter referred to as stained for-
 simplicity) in magenta in our images (Figure 1). Few studies have addressed this type of segmentation: some analyses rely on channel intensity thresholding only [9, 10], this is not robust to impurities in staining, as shown in Figure 1, where brown stain contamination of the magenta channel disrupts stain-based segmentation. Other studies employ machine learning–based tools such as Aiforia [11] or Ilastik [12], which depend on weak annotations for object detection. Although these annotations are-
 weak, their generation remains costly and time-consuming, as large quantities are required and the process lacks flexibility for more complex tasks, making it unsuitable for large-scale analysis. Then, to better characterize the tissue, the segmented aggregates must be further classified. Here our contribution is three-fold by
• Designing a weakly supervised segmentation pipeline: it is robust to staining impurities, which requires only tile-level binary annotations and leverages self-attention maps and stain matrix factorization to produce high-quality segmentation masks suitable for downstream quantitative analyses, including shape characterization and spatial statistics.
• Developing a self-supervised nearest-neighbors retrieval algorithm. This algorithm could assist neuropathologists in generating annotation.
• Using these annotations to train a neural network classifier: The network will be capable of automatically distinguishing ag
arXiv:2511.16268v1 [eess.IV] 20 Nov 2025

This work has been submitted to the IEEE for possible publication.
Copyright may be transferred without notice, after which this version may no longer be accessible.
gregate subgroups. Importantly, this classification does not rely on segmentation masks, as this network provides greater flexibility in differentiating between challenging aggregate types.
2. DATA DESCRIPTION
Our dataset is composed of 44 Whole Slide Images (WSI) of size approximately 100000 × 100000 pixels. Late stage Parkinson’s (33 slides), controls (3 slides) and iLBD (8 slides) cases were selected from Oxford Brain Bank and the Parkinson’s UK Brain Bank. The control cases, which lack alpha-synuclein pathology, were included as negative controls. We focused on the midbrain area sampled coronally at the level of the substantia nigra, the red nucleus and the oculomotor nerve. Paraffin-embedded blocks-
 were cut into thin sections of 6 μm on a microtome for immunohistochemistry. Brightfield immunohistochemistry experiments were performed using antibodies against microglia with the following dilutions: rabbit (019-19741, Wako, Cambridge Biosciences, UK) anti-IBA1 at 1 : 1000 and anti-alpha synuclein C110-115 epitope at 1 : 10000 [3]. The first step was deparaffinization of formalin-fixed paraffin embedded sections in 100% xylene solution and rehydration in descending concentrations of diluted eth-
anol (100%, 96%, 90%, 70%). Antigen retrieval was done by heat induced epitope opening using citric acid buffer (pH = 6.2) for 30 min in a microwave. Thereafter, sections were pre-treated with dual enzyme block to block endogenous peroxidase and phosphatase activity. Sections were blocked with a solution of 5% Bovine serum albumin + Tween20 (0.1%) + normal horse serum (5%) in 1X PBS and then incubated with primary antibodies overnight. The next day, secondary antibodies were applied using either t-
he Immunopress duet kit (MP7714, Vector labs, UK) with anti-mouse epitopes visualised in magenta with alkaline-phosphatase and anti-rabbit epitopes visualised in brown with DAB, visualizing alpha-synuclein in magenta and microglia in brown. Sections were counterstained with haematoxylin and coverslipped with permanent mounting medium before imaging. Imaging was done using high-resolution histological slide scanners: Aperio Imagescope (Oxford, UK) for analysis at 0.45 μm × 0.45 μm pixel resolution.-
 To be more easily processed, these slides are subdivised in tiles of size 1024 × 1024 pixels.
3. SEGMENTATION AND CLASSIFICATION OF ALPHA-SYNUCLEIN AGGREGATES
3.1. Segmentation of alpha-synuclein aggregates
3.1.1. Stain separation-based segmentation
Our RGB histopathology tiles contain alpha-synuclein stained in magenta via the alkaline-phosphatase substrate. To isolate this signal, we applied the Vahadane stain normalization method [13], which models each pixel’s optical density (OD) as a linear combination of stain-specific basis vectors and decomposes the OD image using Sparse Non-negative Matrix Factorization (SNMF) into a matrix W that represents the stain color basis (columns corresponding to hematoxylin, alkaline-phosphatase and DAB ve-
ctors), and a matrix H that represents the stain concentration maps. The alkaline-phosphatase concentration map, Halkaline, was then extracted and normalized to [0, 1], providing a pixel-wise probability of belonging to an alpha-synuclein aggregate. A binary mask was obtained by thresholding at 0.5: Salkaline = Halkaline > 0.5. While this procedure effectively locates aggregates, further refinement is needed for precise segmentation suitable for shape analysis.
3.1.2. Attention-based segmentation
Instead of using morphological operations on coarse segmentation Salkaline as in [8], which require carefully tuned hyperparameters that do not generalize well across the highly variable shapes and sizes of alpha-synuclein aggregates, we exploit the self-attention mechanism of a Vision Transformer (ViT) [14]. This captures long-range similarities and redundant color and texture patterns, effectively highlighting potential aggregate regions. A classifier composed of a ViT backbone and a linear clas-
sification head is trained to detect whether a patch contains an alpha-synuclein aggregate of any shape or size, and the attention maps of its class token provide spatial information about the locations of these aggregates. To train this classifier, we used a DINOv3 backbone [15], chosen for its favorable balance between performance and ease of use, with unfrozen weights. The model was trained on 390 carefully selected tiles, 200 containing aggregates and 190 without, split into 292 training and 9-
8 validation tiles. Further details regarding the training procedure and hyperparameters are provided in subsection 4.1. Using this model, a tile is defined by x ∈ RH×W ×3, which is tokenized into N non-overlapping patches (called tokens) and embedded as {z0
i }N
i=1, along with a learnable class token z0
cls. At transformer layer l, the multi-head self-attention (MHSA) mechanism produces an attention matrix A(l) ∈ Rh×(N+1)×(N+1), where h is the number of attention heads and (N + 1) accounts for the class token. We are particularly interested in the attention from the class token to the patch tokens in the last layer L, which can be written as acls = 1
h
Ph
k=1 A(L)
k [cls, 1 : N ], where A(L)
k [cls, 1 : N ] are the attention weights from the class token to all N patch tokens for head k. After normalization, the class attention vector is resized to the original image dimensions, and re-normalized to produce a probabilistic map highlighting likely alpha-synuclein aggregate locations. A preliminary mask Sattention is obtained by thresholding P at τ = 0.1, deliberately set very low to be inclusive, and refined with a fullyconnected CRF [16] to produce Srefined. Only connected components o-
verlapping with the alkaline-phosphatase stain Salkaline are retained, yielding Scombined. Post-processing removes small objects below Ts, performs instance segmentation via connected components, and associates components within distance Td to consolidate fragmented aggregates (see Figure 1). Objects with maximum Feret diameter below TF are filtered out to remove small, unreliable detections while retaining thin aggregates like neurites, producing the final segmentation mask S. The hyperparameters-
 involved and the evaluation of the resulting segmentation on the validation dataset are reported in section 4. The final segmentation pipeline is illustrated in Figure 1. We applied the segmentation procedure to all WSI, focusing on the tiles classified by our algorithm as containing aggregates. From these, we constructed an alpha-synuclein aggregate dataset of 4819 images by extracting a 256 × 256 patch centered on the centroid of each aggregate. These patches were subsequently used as input for-
 the classification stage of the pipeline, described below.
3.2. Image Retrieval and Classification of alpha-synucleins aggregates
To classify the aggregates, we first visually identified main classes and characterized their morphology. Lewy bodies are characterized by approximately spherical morphologies. Neurites, in contrast, exhibit elongated morphologies and can correspond to axons, which are typically cylindrical, or dendrites, which are slender. Distinguishing thin axons from thick dendrites, which exhibit similar morphologies and are both neurites, is challenging for pathologists, leading to an “undifferentiated neuri-
tes” class. Multiple Lewy bodies

This work has been submitted to the IEEE for possible publication.
Copyright may be transferred without notice, after which this version may no longer be accessible.
Fig. 1. Overview of the segmentation pipeline for alpha-synuclein aggregates in brightfield immunohistochemistry. (A) Input tile undergoes semantic segmentation using a vision transformer classifier. The resulting attention map is refined with a fully connected Conditional Random Field (CRF) and combined with stain decomposition to isolate magenta-stained regions corresponding to alpha-synuclein. (B) Instance segmentation is performed on the refined binary mask to extract individual aggregates, fo-
llowed by post-processing steps including label association and small object filtering. Output: instance segmentation mask S of alpha-synuclein aggregates. (C) Final output: 256 × 256 image crops centered on each segmented alpha-synuclein aggregate, used for downstream classification, with segmentation contours in green.
may appear closely spaced and are associated in previous instance segmentation, forming clusters of particular pathological interest. In previous instance segmentation, such closely spaced bodies were segmented as a single aggregate through label association of connected components. Finally, some staining artifacts are characterized by irregular and dispersed signal patterns and need to be excluded in subsequent analysis. Based on these considerations, we defined six main classes for analysis: Lew-
y bodies, axons, dendrites, undifferentiated neurites, multiple Lewy bodies, and artifacts. To construct our dataset, we aimed to recover representative images from each class from our unlabeled set of alpha-synuclein aggregate patches. The goal was to obtain a meaningful representation of the images in a feature space, followed by a nearest neighbors approach to select prototypical images for each class, as illustrated in Figure 2. To achieve this, we fine-tuned a DINOv3 backbone with the SimCLR -
algorithm [17] on our unlabeled dataset, to learn feature embeddings in an unsupervised manner (more details in about the training can be found section 4). Next, we chose one image representative of each of the six classes described above as a query and for each of them applied a nearest neighbors search in the feature space to identify the 250 closest images from the unlabeled dataset. These images were subsequently labeled by an expert neuropathologist. After removing potential duplicates and ou-
tliers, the resulting dataset consisted of 953 images composed of 345 axons, 254 Lewy Bodies, 119 dendrites, 83 undifferentiated neurites, 117 multiple Lewy Bodies and 35 staining artifacts. Some representative examples of each classes are then displayed in Figure 2-(B). These images were split into a training set of 664 images and a validation set of 289 images. We then trained different classifiers on this dataset, whose architecture and performances are discussed in section 4.
4. EXPERIMENTS AND RESULTS
4.1. Segmentation of alpha-synuclein aggregates
For the tile classification network, given the relative simplicity of the task, we used the AdamW optimizer with a learning rate of 1 × 10−5 and a step-based learning rate scheduler. Training was performed for
20 epochs using a binary cross-entropy loss. The checkpoint with the lowest validation loss was selected, and the model achieved a balanced accuracy of 96% on the validation split. We used the same validation dataset for evaluating the segmentation. We used an arbitrary surface threshold of Ts = 100 square pixels to remove noisy objects, and empirically determined the associating distance threshold Td = 20 pixels and the maximum Feret diameter threshold TF = 33 pixels through a grid-search procedu-
re. We used the library SimpleCRF [18] with the default hyperparameters. To reduce annotation workload, we used a partial annotation strategy similar to [8]: an expert neuropathologist manually counted alphasynuclein aggregates for the test set tiles, which were then compared to those detected by our algorithm. Segmentation masks were visually assessed and categorized as Good, Medium, or Bad. Overall, the algorithm showed an average relative difference of 24% compared to manual counts, and among t-
he 58 segmented aggregates, 90% of masks were rated Good, 7% Medium, and 3% Bad.
4.2. Classification of alpha-synuclein aggregates
For the image retrieval, the embedding network training used AdamW with batch size 128, learning rate 2 × 10−4 for both backbone and linear head, weight decay 0.05, β1 = 0.9, β2 = 0.95, and a warmup cosine scheduler. For downstream classification, ResNet-50 (ImageNet pretrained), DINOv3, and CONCH [6] were combined with a linear head with a dropout of 0.2 and ReLU activation. Two strategies were tested: full fine-tuning with AdamW (batch size 32, weight decay 1 × 10−4, learning rate 1 × 10−4 with -
warmup cosine scheduler) and training only the linear head on frozen backbones (learning rate of 1 × 10−3 with warmup cosine scheduler). The checkpoint with the lowest validation loss was selected, and balanced accuracies are reported in Table 1.
5. DISCUSSION
The results in subsection 4.1 confirm that our tile classifier reliably detects tiles containing alpha-synuclein aggregates. This capability allows the network’s attention layers to be used for segmentation

This work has been submitted to the IEEE for possible publication.
Copyright may be transferred without notice, after which this version may no longer be accessible.
Fig. 2. Image retrieval procedure. (A) Retrieval of images from the unlabeled dataset Ω that are most similar to the query input image qi, using a k-nearest neighbors search on embeddings generated by the neural network fθ. (B) Representative examples of alpha-synuclein aggregates for each class, extracted using the described method.
Table 1. Classification performance of different backbones on the alpha-synuclein aggregate dataset. Balanced accuracy (%) is reported for full fine-tuning (FT) and frozen backbone.
Backbone Full FT (%) Frozen (%) ResNet-50 (ImageNet) 80.65 16.67 DINOv3 79.26 69.73 CONCH (histopathology) 76.76 55.18
(subsubsection 3.1.2), producing high-quality masks (subsection 4.1) suitable for subsequent shape and spatial analyses. Nevertheless, a relative error of 24% in aggregate detection indicates substantial room for improvement. For example, the label-association step could be enhanced by incorporating aggregate shapes rather than relying solely on distance thresholds, which would help distinguish fragmented objects from genuinely separate ones. Additionally, since the method cannot reliably separate-
 closely spaced Lewy bodies, all images containing multiple Lewy bodies were grouped into a single class (as shown in Figure 2-(B)), making it difficult to determine the exact number of Lewy bodies per image and potentially affecting the accuracy of quantitative analyses. For the classification of aggregates, a comparatively simple network such as a ResNet-50 pretrained on ImageNet outperformed DINOv3, and achieving 80% balanced accuracy is notable given the difficulty of distinguishing some class-
es. This observation aligns with [19], which reported that DINOv3 features do not transfer effectively to histopathology tasks, even though the ResNet-50 must be fully fine-tuned to achieve this high performance. In contrast, DINOv3 benefits from full fine-tuning but still performs reasonably well even with a frozen backbone, suggesting that its pretrained features are more generally representative. Additionally, CONCH, a large foundation model specifically designed for histopathology, did not sur-
pass the performance of DINOv3 on this dataset under either full fine-tuning or frozen backbone conditions. This outcome may be explained by the relatively small size of our dataset and the particu
lar visual characteristics of magenta-stained aggregates. Indeed, the translation-equivariance property of CNNs enables them to generalize from fewer data points, whereas transformers require extremely large datasets to learn similar translation-invariance. While DINOv3 may have already acquired this invariance during pretraining, CONCH may not have, possibly due to a histopathological domain shift. This demonstrates that a relatively lightweight classifier can outperform larger models trained on -
massive datasets, achieving competitive performance with lower computational cost, suggesting that current foundation models may not yet be fully generalizable. Despite strong performance, future improvements could come from leveraging unlabeled images with self-supervised or semisupervised methods [20, 21], and including less common classes such as astrocytic aggregates [3] or closely spaced neurites.
6. CONCLUSION
In this study, we developed an automated pipeline for the detection, segmentation, and classification of alpha-synuclein aggregates in midbrain tissue from PD and iLBD cases. Our approach combines a weakly supervised segmentation method robust to staining variability with a neural network classifier capable of distinguishing major aggregate morphologies, and incorporates a self-supervised nearest-neighbors retrieval algorithm that could serve to assist neuropathologists for annotation and classifi-
cation. The resulting segmentation masks are of sufficient quality for downstream shape and spatial analysis. For classification, a relatively simple ResNet-50 backbone outperformed larger foundation models such as DINOv3 and CONCH, demonstrating the effectiveness of lightweight architectures on histopathology data. The pipeline enables large-scale morphological analysis of alpha-synuclein aggregates, and their spatial interactions with microglial phenotypes. Potential improvements include improve-
d separation of closely spaced Lewy bodies, refined label association strategies, and leveraging unlabeled data through self- or semi-supervised learning. Expanding the classification dataset to include additional and rare aggregate classes could further enhance performance.

This work has been submitted to the IEEE for possible publication.
Copyright may be transferred without notice, after which this version may no longer be accessible.
7. COMPLIANCE WITH ETHICAL STANDARDS
The study was conducted according to the guidelines of the Declaration of Helsinki and approved by the ethics committees at the Oxford Brain Bank (Rec approval: 23/sc/0241, South Central Oxford C) and the Parkinson’s UK Brain Bank.
8. ACKNOWLEDGMENTS
DAM was funded by a Springboard grant funded by the British Council (grant agreement No 1170803491) and an NIH grant (grant agreement No 4R01NS124848-02). D. H. group is funded by ANR AstroXcite and the European Research Council (ERC) under the European Union’s Horizon 2020 research and innovation program (No 882673).
9. REFERENCES
[1] William Dauer and Serge Przedborski, “Parkinson’s disease: mechanisms and models,” Neuron, vol. 39, no. 6, pp. 889–909, 2003.
[2] Hsiao-Chun Cheng, Christina M Ulane, and Robert E Burke, “Clinical progression in Parkinson disease and the neurobiology of axons,” Annals of Neurology, vol. 67, no. 6, pp. 715725, 2010.
[3] Melek Firat Altay, Alan King Lun Liu, Janice L Holton, Laura Parkkinen, and Hilal A Lashuel, “Prominent astrocytic alphasynuclein pathology with unique post-translational modification signatures unveiled across Lewy body disorders,” Acta Neuropathologica Communications, vol. 10, no. 1, pp. 163, 2022.
[4] Anke A Dijkstra, Pieter Voorn, Henk W Berendse, Henk J Groenewegen, Netherlands Brain Bank, Annemieke JM Rozemuller, and Wilma DJ van de Berg, “Stage-dependent nigral neuronal loss in incidental Lewy body and Parkinson’s disease,” Movement Disorders, vol. 29, no. 10, pp. 1244–1251, 2014.
[5] Kavita Prasad, Thomas G Beach, John Hedreen, and Eric K Richfield, “Critical role of truncated α-synuclein and aggregates in Parkinson’s disease and incidental Lewy body disease,” Brain Pathology, vol. 22, no. 6, pp. 811–825, 2012.
[6] Cintia Roodveldt, Liliana Bernardino, Ozgur Oztop-Cakmak, Milorad Dragic, Kari E Fladmark, Sibel Ertan, Busra Aktas, Carlos Pita, Lucia Ciglar, Gaetan Garraux, et al., “The immune system in Parkinson’s disease: what we know so far,” Brain, vol. 147, no. 10, pp. 3306–3324, 2024.
[7] Katrine B Andersen, Anushree Krishnamurthy, Mie Kristine Just, Nathalie Van Den Berge, Casper Skjærbæk, Jacob Horsager, Karoline Knudsen, Jacob W Vogel, Jon B Toledo, Johannes Attems, et al., “Sympathetic and parasympathetic subtypes of body-first Lewy body disease observed in postmortem tissue from prediagnostic individuals,” Nature Neuroscience, pp. 1–12, 2025.
[8] Theo Perochon, Zeljka Krsnik, Marco Massimo, Yana Ruchiy, Alejandro Lastra Romero, Elyas Mohammadi, Xiaofei Li, Katherine R Long, Laura Parkkinen, Klas Blomgren, et al., “Unraveling microglial spatial organization in the developing human brain with deepcellmap, a deep learning approach coupled with spatial statistics,” Nature Communications, vol. 16, no. 1, pp. 1577, 2025.
[9] Naman Vatsa, Julia K Brynildsen, Thomas M Goralski, Kevin Kurgat, Lindsay Meyerdirk, Libby Breton, Daniella DeWeerd, Laura Brasseur, Lisa Turner, Katelyn Becker, et al., “Network analysis of α-synuclein pathology progression reveals p21-activated kinases as regulators of vulnerability,” bioRxiv, 2024.
[10] Bradley Pearce, Peter Coetzee, Duncan Rowland, Scott Linfoot, David T Dexter, Djordje Gveric, and Stephen Gentleman, “Automatic sample segmentation & detection of Parkinson’s disease using synthetic staining & deep learning,” bioRxiv, pp. 2022–08, 2022.
[11] A Barber-Janer, E Van Acker, E Vonck, D Plessers, F Rosada, C Van den Haute, V Baekelandt, and W Peelaerts, “Development of convolutional neural networks for automated brainwide histopathological analysis in mouse models of synucleinopathies,” bioRxiv, pp. 2025–07, 2025.
[12] Ehsan Dadgar-Kiani, Gregor Bieri, Ronald Melki, Aaron D Gitler, and Jin Hyung Lee, “Mesoscale connections and gene expression empower whole-brain modeling of α-synuclein spread, aggregation, and decay dynamics,” Cell Reports, vol. 41, no. 6, 2022.
[13] Abhishek Vahadane, Tingying Peng, Amit Sethi, Shadi Albarqouni, Lichao Wang, Maximilian Baust, Katja Steiger, Anna Melissa Schlitter, Irene Esposito, and Nassir Navab, “Structure-preserving color normalization and sparse stain separation for histological images,” IEEE Transactions on Medical Imaging, vol. 35, no. 8, pp. 1962–1971, 2016.
[14] Alexey Dosovitskiy, “An image is worth 16x16 words: Transformers for image recognition at scale,” arXiv preprint arXiv:2010.11929, 2020.
[15] Oriane Sime ́oni, Huy V Vo, Maximilian Seitzer, Federico Baldassarre, Maxime Oquab, Cijo Jose, Vasil Khalidov, Marc Szafraniec, Seungeun Yi, Michae ̈l Ramamonjisoa, et al., “DINOv3,” arXiv preprint arXiv:2508.10104, 2025.
[16] Philipp Kra ̈henbu ̈hl and Vladlen Koltun, “Efficient inference in fully connected crfs with gaussian edge potentials,” Advances in Neural Information Processing Systems, vol. 24, 2011.
[17] Ting Chen, Simon Kornblith, Mohammad Norouzi, and Geoffrey Hinton, “A simple framework for contrastive learning of visual representations,” in International Conference on Machine Learning. PmLR, 2020, pp. 1597–1607.
[18] Healthcare Intelligence Laboratory, “SimpleCRF: Matlab and python wrap of conditional random field (CRF) and fully connected (dense) CRF for 2D and 3D image segmentation,” .
[19] Che Liu, Yinda Chen, Haoyuan Shi, Jinpeng Lu, Bailiang Jian, Jiazhen Pan, Linghan Cai, Jiayi Wang, Yundi Zhang, Jun Li, et al., “Does DINOv3 set a new medical vision standard?,” arXiv preprint arXiv:2509.06467, 2025.
[20] Mathilde Caron, Ishan Misra, Julien Mairal, Priya Goyal, Piotr Bojanowski, and Armand Joulin, “Unsupervised learning of visual features by contrasting cluster assignments,” Advances in Neural Information Processing Systems, vol. 33, pp. 99129924, 2020.
[21] Kihyuk Sohn, David Berthelot, Nicholas Carlini, Zizhao Zhang, Han Zhang, Colin A Raffel, Ekin Dogus Cubuk, Alexey Kurakin, and Chun-Liang Li, “Fixmatch: Simplifying semisupervised learning with consistency and confidence,” Advances in Neural Information Processing Systems, vol. 33, pp. 596–608, 2020.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:56.733Z
- **Text Length:** 29527 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 5 of 5
