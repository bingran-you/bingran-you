# PDF Document: Liu et al. - 2025 - Bridging the genotype-phenotype gap with generative artificial intelligence.pdf

**File Path:** Liu et al. - 2025 - Bridging the genotype-phenotype gap with generative artificial intelligence.pdf

**Processed Date:** 2026-02-10T18:16:08.190Z

**File Size:** 18563.43 KB

**Total Pages:** 130

**Extracted Pages:** 130

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3634

**Title:** Bridging the genotype-phenotype gap with generative artificial intelligence

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Bridging the Genotype-Phenotype Gap with
Generative Artificial Intelligence
Yangfan Liu1,2†, Xiong Xiong1,3*†, Yong Liao1,3, Mingli Qin1,3, Zhen Huang6, Shilin Zhu1,3, Lilin Yin1,3, Yuhua Fu1,3, Haohao Zhang7, Jingya Xu1,3, Dong Yin1,3, Xin Huang1,3, Yuan Quan8, Xuan Li9, Tengfei Jiang1,3, Wanneng Yang3,10, Xiaohui Yuan2,11, Laurent Frantz4,5*, Xinyun Li1,3*, Xiaolei Liu1,3*, Shuhong Zhao1,2,3*
1*Key Laboratory of Agricultural Animal Genetics, Breeding and Reproduction, Ministry of Education & College of Animal Science and Technology, Frontiers Science Center for Animal Breeding and Sustainable Production, Huazhong Agricultural University, Wuhan, Hubei, China. 2*Yazhouwan National Laboratory, Sanya, Hainan, China. 3*Hubei Hongshan Laboratory, Wuhan, Hubei, China. 4*Palaeogenomics Group, Institute of Palaeoanatomy, Domestication Research and the History of Veterinary Medicine, Ludwig Maxi-
milian University of Munich, Munich, Bavaria, Germany. 5*School of Biological and Behavioural Sciences, Queen Mary University of London, London, UK. 6Fujian-Hong Kong-Macau-Taiwan Collaborative Laboratory for the Inheritance and Innovation of Traditional Chinese Medicine, Fujian University of Traditional Chinese Medicine, Fuzhou, Fujian, China. 7School of Computer Science and Technology, Wuhan University of Technology, Wuhan, Hubei, China. 8College of Informatics, Huazhong Agricultural University,-
 Wuhan, Hubei, China. 9College of Engineering, Huazhong Agricultural University, Wuhan, Hubei, China. 10National Key Laboratory of Crop Genetic Improvement, National Center of Plant Gene Research, Huazhong Agricultural University, Wuhan, Hubei, China.
1
arXiv:2511.13141v1 [q-bio.QM] 17 Nov 2025

11College of Plant Protection, College of Mycology, Jilin Agricultural University, Changchun, Jilin, China.
*Corresponding author(s). E-mail(s): xiongxiong@mail.hzau.edu.cn; laurent.frantz@lmu.de; xyli@mail.hzau.edu.cn; xiaoleiliu@mail.hzau.edu.cn; zhaoshuhong@yzwlab.cn; †These authors contributed equally to this work.
Abstract
The genotype-phenotype gap is a persistent barrier to complex trait genetic dissection, worsened by the explosive growth of genomic data (1.5 billion variants identified in the UK Biobank WGS study) alongside persistently scarce and subjective human-defined phenotypes. Digital phenotyping offers a potential solution, yet existing tools fail to balance scalable non-manual phenotype generation and biological interpretability of these quantitative traits. Here we report AIPheno, the first generative -
AI-driven ”phenotype sequencer” that bridges this gap. It enables high-throughput, unsupervised extraction of digital phenotypes from imaging data and unlocks their biological meaning via generative network analysis. AIPheno transforms imaging modalities into a rich source of quantitative traits, dramatically enhancing cross-species genetic discovery, including novel loci such as CCBE1 (humans), KITLG-TMTC3 (domestic pigeons), and SOD2IGF2R (swine). Critically, its generative module decodes AI-der-
ived phenotypes by synthesizing variant-specific images to yield actionable biological insights. For example, it clarifies how the OCA2-HERC2 locus pleiotropically links pigmentation to retinal vascular traits via vascular visibility modulation. Integrating scalable non-manual phenotyping, enhanced genetic discovery power, and generative mechanistic decoding, AIPheno establishes a transformative closed-loop paradigm. This work addresses the longstanding genotype-phenotype imbalance, redefines digi-
tal phenotype utility, and accelerates translation of genetic associations into actionable understanding with profound implications for human health and agriculture.
1 Introduction
The genotype-phenotype gap remains one of the most persistent bottlenecks in complex trait genetic dissection, the root cause of which lies in the stark mismatch between genomic data and phenotypic data. Genomic data has undergone explosive growth, for instance, the UK Biobank Whole-Genome Sequencing (WGS) study of 490,640 participants identified 1.5 billion genetic variants[1]. By sharp contrast, phenotypic research remains severely lagging. Furthermore, traditional Genome-Wide Association Studie-
s (GWAS) rely entirely on human-defined phenotypes (HDPs). These phenotypes are not only sparse in number and limited in coverage but also burdened with strong
2

subjective classification biases. Such coarse-grained phenotyping capabilities neither match the massive scale of genomic data nor capture subtle true biological differences. Ultimately, this imbalance, which is defined as excess genomic data versus insufficient phenotypic capacity, directly introduces systematic biases into genetic research and severely undermines the power of genetic discovery. The emergence of advanced digital phenotyping (e.g., imaging, wearable signals) and data-driven repre-
sentation learning[2–8] has partially addressed this by enabling automated phenotyping of digital phenotypic variation, which consistently outperform human-defined phenotypes (HDPs) in enhancing genetic discovery power and identifying novel loci[9–14]. For example, Yun et al. [9] demonstrated that low-dimensional embeddings generated via Representation Learning for Genetic Discovery (REGLE) encode clinically relevant information in one-dimensional clinical data, specifically the information that c-
onventional expert-defined features do not fully capture. This ability of REGLE-derived embeddings, in turn, enhances the performance of both genetic discovery and disease prediction. Kirchler et al.[10] and Xie et al.[11] applied transfer learning and self-supervised learning, respectively, to 2D human retinal fundus images, leading to the identification of additional candidate loci associated with eye-related traits and diseases. Bonazzola et al.[12] and Patel et al.[13] respectively applied uns-
upervised learning methods to 3D left ventricle mesh data and brain Magnetic Resonance Imaging (MRI) data, with the former identifying 49 significant loci and 25 suggestive loci related to left ventricular morphology, and the latter identifying 97 independent genetic loci (60 replicated) linked to brain structure. Liu et al.[14] used wearable-derived features as digital phenotypes to link with underlying genetics, achieving more accurate and objective classification of adolescents with psychiatric-
 disorders than previously possible. However, a critical gap remains: while these methods excel at detecting genetic associations, they offer little insight into what the learned phenotypes biologically represent or how associated genes exert their effects, mainly because the acquired phenotypes are mutually coupled and lack interpretable modules. Without interpretability, gene-associated digital phenotypes remain abstract constructs that are statistically powerful but biologically opaque. This di-
sconnect impedes the translation of genetic hits into testable hypotheses and creates a troubling paradox: although phenotypic dimension and discovery power continue to grow, biological understanding does not necessarily keep pace. Existing studies have attempted to address this limitation from three perspectives, though with certain constraints: First, they rely solely on pre-existing indirect evidence, such as annotating identified genetic variants using curated databases, conducting Phenome-Wid-
e Association Studies (PheWAS), or searching for meaningful human-defined phenotypes with high (or genetic) correlation with the trait. These approaches, however, remain constrained by the scope of prior knowledge: they cannot account for phenotypic variations that are either unrecorded in existing gene annotation databases or too complex/abstract to be captured by human-defined phenotypic descriptions. As a result, they fail to uncover novel biological insights that extend beyond the boundaries o-
f currently known information[10, 11]. Second, when using heatmaps for interpretability analysis of the image-variation phenotypes (IVPs), these
3

tools only identify static regions of association. One can only infer that genes significantly associated with the IVP affect a specific region in the image by relying on the approximate ”regional” correspondence between image variation and the image itself, with brighter areas on the heatmap indicating stronger associations. Notably, heatmaps fail to capture dynamic changes in these associated regions (e.g., how the region’s phenotypic features evolve or vary across contexts). For instance, in h-
uman brain MRI, while such analyses may associate genes with anatomical regions like the putamen, pallidum, or thalamus, they lack the resolution to specify how these genes modulate the size, structural organization, or other phenotypic variation trends of these regions[13, 14]. Third, other methods first stratify individuals into subgroups based on a gene-associated phenotypic trait (e.g., high vs. low values of pupil size in domestic pigeon iris images). Then, researchers identify shared image p-
atterns between subgroups images in two ways: one is manual inspection of subgroup images, and the other is computing group-level average images. While this workflow is intended to reveal trait-related anatomical trends, it cannot isolate the target phenotypic variation from confounding factors. These factors include variations in pupil morphology and orientation, all of which also shape subgroup images. As a result, observed image differences cannot be definitively attributed to the target phenot-
ype, precluding precise insights into how the phenotype drives specific anatomical or structural changes in images[10, 12]. Collectively, these methods fall short of bridging the gap between gene discovery and biological insights. They generate lists of genes associated with phenotypes but fail to close the research loop. Without resolving the mechanistic links that connect specific genotypes to distinct phenotypic traits, these genetic hits remain abstract associations. They provide little action-
able insight into the biological processes underlying genotype-phenotype relationships. To bridge this gap, we introduce AIPheno (Automated Phenotyping and Interpretation of Image-variation Phenotypes), a generative AI framework that functions as a ”phenotype sequencer”. It links digital phenotypes to genetic associations and further enables the visualization of actual phenotypic differences explained by specific genes, which in turn enables human interpretation of the genotype-phenotype link, off-
ering new biological insights. Built on an Encoder-Generator architecture, AIPheno automatically extracts scalable image-variation phenotypes with high genetic discovery power, while its Generator module synthesizes visual representations of the phenotypic trends captured by each IVP, enabling intuitive, actionable interpretation of how associated genes modulate traits. We validated AIPheno across simulated data and real-world “Image-Genotype” datasets from four species: Homo sapiens (human), Colu-
mba livia (domestic pigeon), Oryza sativa (rice), and Sus scrofa (swine). AIPheno consistently outperforms both human-defined and deep learning-based phenotyping methods, identifying novel loci such as CCBE1 in humans, the KITLG-TMTC3 locus in domestic pigeons, and the SOD2-IGF2R locus in swine. Crucially, its interpretable design not only validates reported gene-phenotype associations with visual evidence, but also refines their mechanistic context and reveals biological insights for newly identi-
fied loci. By linking digital phenotypes to genes and genes to biological insights, AIPheno establishes a closed-loop paradigm for the genetic dissection of complex traits.
4

2 Results
2.1 Overview of the AIPheno framework
A persistent challenge in genetic dissection is the stark imbalance between the exponential growth of genomic data and the limited, often subjective nature of available phenotypic data. The traditional definition of phenotypes is established through manual observation. This approach can only yield limited phenotypes and fails to capture the variations of high-dimensional image data adequately. Representation learningbased genetic dissection helps alleviate this imbalance by generating a multitude -
of data-driven digital phenotypes, which significantly boosts genetic discovery power. However, its lack of interpretability gives rise to a troubling paradox: our discovery power continues to grow, yet our biological understanding does not keep pace. This is because the uninterpretable digital phenotypes remain biologically opaque, obscuring the precise image variations associated with genetic variants. Consequently, the crucial step of translating statistically significant associations into mech-
anistically testable hypotheses is impeded, limiting the biological insights gained from the analysis. Therefore, we propose a novel and efficient data-driven framework for genetic dissection, effectively a ”phenotype sequencer”. Independent of prior knowledge, this generative AI-driven framework enables the scalable Automated Phenotyping and Interpretation of image-variation Phenotypes (AIPheno). This interpretable genetic dissection framework, which consists of two core modules for automated phe-
notyping and interpretation, closes the loop from image-variation phenotypes to genes, which enhances genetic discovery power, and subsequently to biological insight by providing generative biological insights decoding and actionable interpretability (Fig.1A, Data S1). Model training and automated phenotyping of IVPs can be divided into four steps (Fig.1B). First, an unconditional Generator was constructed to approximate the spatial distribution of input image data, which represents an unsupervise-
d learning approach. Second, an additional Encoder was trained (via joint training with the Generator) for rapid image representation acquisition: the Encoder mapped original images to a latent representation, which was input to the Generator for reconstruction; the reconstruction loss (calculated as the difference between original and reconstructed images) was then used to optimize the Encoder. Third, within the latent space of the Generator (which approximates the original image distribution), s-
everal interpretable directions existed, which signified a specific variational tendency in the image. To obtain these, data-driven methods such as Independent Component Analysis[15] (ICA, for mutually independent directions) and Principal Component Analysis[16] (PCA, for orthogonal directions) were utilized. Finally, the degree of image variation was measured by projecting the image representation onto the interpretable directions obtained in the third step. This final step concluded the process -
within the automated phenotyping module, and its output constituted the final IVPs. The automated phenotyping module aims to extract disentangled IVPs from each input image that can effectively generalize image variation phenotypes. We referenced the same notation as GANSpace to denote IVP identifiers[17]. For instance, IVP(vi, j) was defined as the projection of the representation from the j-th layer in the W + space along the i-th direction.
5

Processing of images by the automated phenotyping module yields a large number of IVPs. Each IVP was subsequently subjected to association analysis with genetic variants using a univariate Mixed Linear Model (MLM)[18]. The significance levels in the association analysis were subjected to Bonferroni correction[19], which is the most stringent method to control for false positives, based on the number of genetic variants multiplied by the number of IVPs. IVPs that were associated significantly with-
 genetic variants were used for interpretability analysis. In the interpretation module, we conducted direction-wise analysis on the directions that exhibited significant signals in the association analysis by synthesizing high-quality images for visualization (Fig.1C). We traversed the latent space representation of images along each significant direction (in units of standard deviation) and used the Generator to generate images, thereby observing directional changes. This approach constrains ima-
ge variation to phenotypic axes alone while preserving other details, enabling actionable visualization of trends (e.g., size and color shifts) to clarify gene function. To validate AIPheno’s genetic discovery and interpretability, we generated a simulated maize root anatomy dataset encompassing two heritable traits: aerenchyma proportion and metaxylem size. To mimic real-world environmental perturbations (e.g., lighting variability), we introduced random brightness and contrast adjustments to eac-
h image, independent of genetically driven phenotypic variations. Genomic variation data were derived from real maize datasets. Quantitative Trait Nucleotides (QTNs) linked to aerenchyma proportion were mapped to the first half of all variants (red markers), whereas those associated with metaxylem size were mapped to the second half (blue markers). Details are provided in Methods. Despite environmental perturbations, AIPheno accurately identified the true loci underlying the two genetically driven-
 image traits, and these results were consistent with GWAS findings. As shown in Fig.1D, this consistency is reflected in the overlap between red circles (representing aerenchyma QTL), blue circles (representing metaxylem QTL), and purple inverted triangles (representing true QTL). Furthermore, visualizations from the interpretation module aligned with these loci: aerenchyma-associated loci correlated with more pronounced changes in aerenchyma proportion (marked in the red stomatal region), while -
metaxylem-linked loci corresponded to subtler differences in metaxylem size (marked by the dimensions of the blue central sphere). Collectively, the GWAS and interpretability analyses of simulated data validated the reliability of both the automated phenotyping module and interpretation module in the AIPheno framework.
6

Fig. 1
7

Fig.1 Overview of the AIPheno framework. A, Genetic dissection faces a stark imbalance between the massive, exponential growth of genomic data and the sparse, subjective nature of phenotypic data, creating a persistent genotype-phenotype gap. The traditional definition of phenotypes is established through manual observation of data space. This approach only generates limited phenotypes and fails to capture the variations of high-dimensional image data adequately. While representation learning enh-
ances genetic discovery, its lack of interpretability prevents linking variants to specific image variations, thereby impeding biological insights from the association analysis. Driven by generative AI , AIPheno closes the loop from scalable digital phenotypes to genes—a process that involves enhancing genetic discovery power—and subsequently from genes to biological insights, which is achieved through generative biological insights decoding and actionable interpretability. A dynamic video include-
d in the Data S1 provides a more intuitive and comprehensive illustration of the phenomenon presented in this figure, and is recommended for optimal understanding. B, First, a Generator was trained using a latent space as input, which was mapped from a standard normal distribution via a mapping network. With the Generator fixed, an Encoder was then trained to encode images into the latent space, from which the Generator reconstructed the original images. Next, mutually independent or orthogonal di-
rections in the latent space were identified using either Independent Component Analysis (ICA) or Principal Component Analysis (PCA). Finally, images were encoded by the Encoder into the latent space and projected onto these previously identified directions to yield image-variation phenotypes. C, In the AIPheno framework, a large number of image-variation phenotypes were automatically detected in a data-driven manner by the automated phenotyping module. Each image-variation phenotype was subsequen-
tly subjected to association analysis with genetic variants using a univariate Mixed Linear Model (MLM). The significance levels from this analysis were adjusted using a Bonferroni correction, based on the number of genetic variants multiplied by the number of image-variation phenotypes, to control for false positives. Imagevariation phenotypes that were significantly associated with genetic variants were then used for interpretability analysis. In the interpretation module, a direction-wise analy-
sis was conducted on the significant directions by synthesizing high-quality images for visualization. The image’s representation in the latent space was traversed along each significant direction in units of standard deviation, and the Generator created images to show the changes along that direction. Images can be controlled to change only along phenotypic variation directions while preserving other details, enabling the actionable observation of trends (e.g., size and color variations) to facil-
itate the understanding of gene function. D, To validate the genetic discovery and interpretability of the AIPheno framework, we generated a simulated dataset of maize root anatomy. This dataset included two types of heritable variations: aerenchyma proportion and metaxylem size. To mimic real-world environmental perturbations such as lighting variability, we introduced random brightness and contrast adjustments to each image, independent of the genetically driven phenotypic variations. Simulation-
 results show that true loci were identified by associating genetic variants with the image-variation phenotypes detected by the AIPheno framework’s automated phenotyping module.
8

The visualizations from the interpretation module were also consistent with the corresponding loci: aerenchyma loci correspond to more obvious image variations in aerenchyma proportion (marked in the red stomatal region. Also see a dynamic video included in the Data S2), whereas metaxylem loci correspond to more subtle variations in metaxylem size (marked by blue central sphere dimensions. Also see a dynamic video included in the Data S3). In the plot, red circles denote aerenchyma QTL, blue circ-
les represent metaxylem QTL, and purple inverted triangles indicate the true QTL. All image-variation phenotypes were aggregated to generate the Manhattan plot.
2.2 AIPheno enhances the power of genetic discovery with scalable digitial phenotypes
To validate the practical utility of the AIPheno framework, we constructed ”ImageGenotype” datasets across four species: Homo sapiens (human), Columba livia (domestic pigeon), Oryza sativa (rice), and Sus scrofa (swine). For human data, we utilized 253,463 public retinal fundus images (from UK Biobank and the Kaggle EyePACS dataset, Fig.S1) primarily for model training. Genetic analyses were performed on 76,829 individuals from the UK Biobank cohort, for whom 13,874,430 genetic markers were availa-
ble. We additionally generated and open-sourced three novel datasets: a domestic pigeon iris RGB image dataset (Fig.S2; with genome assembly; 28,903 images and 12,113,557 genetic markers, with 641 individuals used for genetic analysis), a potted rice multi-view RGB image dataset (Fig.S3; 327,734 images and 4,321,306 genetic markers, with 529 individuals included in genetic analysis), and a swine Computed Tomography (CT) dataset (Fig.S4; 3,803 images and 17,810,683 genetic markers, with 795 individ-
uals used for genetic analysis). Details are provided in Methods. For human retinal fundus data, AIPheno’s automated phenotyping module processed left-eye images to identify 420 IVPs. Association analyses and heritability estimation (using a mixed linear model with covariate control) yielded heritability estimates ranging from 0.009 to 0.221 (mean=0.08, s.d.=0.05; Fig.2A), with 6,037 significant SNPs (168 lead SNPs forming 106 loci). These loci were distributed across all chromosomes (Fig.2B). Gen-
e annotation revealed 84 loci overlapping with GWAS Catalog entries linked to eye traits or pigmentation, while 22 loci were novel. A word cloud of associated traits highlighted ”Color” as the most frequent term, followed by eye disease-related terms (”Myopia,” ”Refraction,” and ”Error”) and eye/pigmentation tissues (”Retinal,” ”Hair,” ”Eye,” and ”Macular”) (Fig.2C). FUMA enrichment analysis (Fig.S5) using top GWAS Catalog entries (ranked by p value) confirmed associations with eye diseases (e.g.,-
 Refractive Error), eye physiology (e.g., Optic Disc Size), and pigmentation (e.g., Hair Color). Furthermore, pigmentation-related terms also topped the GO, KEGG, Reactome, and WikiPathways enrichment results (Fig.S6A-D). To benchmark the power of genetic discovery, we compared AIPheno with HDPs and state-of-the-art deep learning-based phenotyping methods using human data. While HDPs were limited to a few metrics, including vascular branching complexity (fractal dimension), density, and color chan-
nels, AIPheno detected a multitude of IVPs, such as pigmentation, retinal lesions, and optic disc/vasculature morphology, thereby capturing more biologically meaningful variation (Fig.2D). For specific
9

metrics, the vascular branching complexity (fractal dimension) and vascular density metrics from Zekavat et al.[20] showed 6/7 and 10/13 lead SNPs overlapping AIPheno’s loci, respectively. However, they missed 94.3% (100/106) and 90.6% (96/106) of AIPheno’s unique loci, respectively. Additionally, color channel HDPs (mean R/G/B values) overlapped with 49/53 lead SNPs but missed 71.7% (76/106) of AIPheno’s loci. For deep learning-based approaches, iGWAS (Xie et al.[11]) showed 13/14 lead SNPs over-
lapping with AIPheno’s loci but missed 88.7% (94/106) of AIPheno’s loci. Zhao et al.[21] applied transferGWAS[10], using 11 ImageNet pre-trained models and taking the top 10 principal components (PCs) from each model’s final layer output as traits for downstream GWAS. Their ensemble results across 11 models showed 70.0% (432/617) of lead SNPs overlapping with AIPheno’s loci, yet 31.1% (33/106) of AIPheno’s loci remained uncovered (Fig.S7). AIPheno also detected numerous IVPs in the domestic pigeon-
, rice, and swine datasets, exhibiting higher genetic discovery power than HDPs. For domestic pigeon, AIPheno’s automated phenotyping module detected 140 IVPs per image, which encompassed a rich set of image variations: the orientation of the eyeball and pupil, pupil size, and iris color and texture (Fig.S9A). These 140 IVPs were significantly associated with two loci. The locus on chromosome 25 was consistent with a traditional case-control phenotyping approach that classifies domestic pigeon iri-
ses as either ”pearl” or ”gravel” (Fig.S8), while the other locus, on chromosome 1, was unique to AIPheno (Fig.2E). For rice, AIPheno’s automated phenotyping module detected 420 IVPs per image. These IVPs encompassed not only environmental variations, such as plant illumination, but also biologically meaningful image variations, including plant architecture, stem and leaf morphology, color, and texture (Fig.S9B). For comparison, we defined 11 HDPs with clear biological significance (Details in Met-
hods). We performed association analyses and compared genetic discovery power for both phenotype types across 22 time points spanning the seedling to mature stages, revealing that AIPheno identified more genetic loci at most time points (Fig.S10). Given the highest overlap between the two at T13, we focused subsequent analyses on this time point. GWAS results for all IVPs and HDPs at T13 are shown in Fig.2F: 10 of the 15 lead SNPs from HDPs overlapped with AIPheno’s loci, but missed 54.5% (12/22) -
of AIPheno’s unique loci. For swine, AIPheno detected 5,880 IVPs per image. These image variations, which encompass not only changes in fat content and distribution but also alterations in body length and body shape (Fig.S9C), were significantly associated with three loci. In contrast, four HDPs (total fat content, average fat content, and image-based body length and body height) were extracted for comparison, none of which yielded significant associations. The results showed that HDPs failed to c-
apture the image variation of fat distribution, while the IVPs detected by AIPheno were able to successfully uncover the genetic basis behind swine fat distribution (Fig.2G).
10

Fig. 2
11

Fig.2 AIPheno enhances the power of genetic discovery with scalable digitial phenotypes across multi-species datasets. A, Heritability distribution of the 420 image-variation phenotypes of human retinal fundus images detected by AIPheno (mean = 0.08, SD = 0.05, min = 0.009, max = 0.221). B, GWAS Manhattan plot for the Human Retinal Fundus dataset (p values were truncated at 1 × 10−100). In this plot, the p value for each SNP was the minimum p value of that SNP across all image-variation phenotype-
s GWAS results. The significance threshold was adjusted using a Bonferroni correction for the number of image-variation phenotypes (poriginal = 5 × 10−8, pcorrection = 1.19 × 10−10). The density plot below indicated the number of image-variation phenotypes with significant signals per 2 MB interval. Information for all lead SNPs, genetic loci, and candidate genes is provided in Table S1. C, Word cloud of reported phenotypes from the GWAS Catalog associated with the identified candidate genes. The -
word cloud results indicate that the most frequent word is Color, followed by terms associated with eye diseases (”Myopia,” ”Refraction,” and ”Error”), and then by tissues related to the eye or pigmentation (”Retinal,” ”Hair,” ”Eye,” and ”Macular”). D, Comparison of genetic discovery power between AIPheno and human-defined methods in Homo sapiens (human). For AIPheno, a large number of image-variation phenotypes were detected, such as pigmentation, retinal lesions, and the morphology of the optic -
disc and vasculature (Also see dynamic videos included in the Data S4-S8). For human-defined phenotypes, Fractal Dimension quantifies vascular branching complexity, Vascular Density is defined as the total number of segmented pixels given a consistent field of view and fixed pixel dimensions across all individuals, and Color Channels refer to the mean values of the R, G, and B image channels. Left bar: Percentage of lead SNPs reported by the comparison methods overlapping with AIPheno loci. Bottom-
 right bar: Percentage of AIPheno loci that overlapped with reported lead SNPs. Top right bar: Percentage of AIPheno-specific loci. E, Comparison of genetic discovery power between AIPheno and human-defined methods in Columba livia (domestic pigeon). GWAS results for all image-variation phenotypes of AIPheno with significant signals were aggregated to plot the Manhattan plot. The green dashed line highlights significant signals associated with the two types of phenotypes. The human-defined phenoty-
pes are the ”pearl” and ”gravel” iris categories. The significance threshold of human-defined methods was 4.13 × 10−9. The significance threshold of AIPheno was adjusted using a Bonferroni correction for the number of image-variation phenotypes (poriginal = 4.13 × 10−9, pcorrection = 2.95 × 10−11). F, Comparison of genetic discovery power between AIPheno and human-defined methods in Oryza sativa (rice). The GWAS results with significant signals for image-variation phenotypes of AIPheno and human-d-
efined phenotypes were aggregated separately to plot the Manhattan plots. The green dashed line highlights significant signals associated with the two types of phenotypes. The dashed line indicates the original significance threshold (poriginal = 1.16 × 10−8). The effective thresholds were then determined by Bonferroni correction (dividing the original threshold by the number of phenotypes), resulting in pcorrection = 1.05 × 10−9 for human-defined methods and pcorrection = 2.75 × 10−11 for AIPheno-
. The human-defined phenotypes are histogrambased mean, histogram-based variance, total projected area, height of the bounding
12

rectangle, width of the bounding rectangle, ratio of total projected area to circumscribed box area, circumscribed box area, ratio of total projected area to hull area, ratio of perimeter to total projected area, perimeter, and green projected area. Information for all lead SNPs, genetic loci, and candidate genes of T13, identified using image-variation phenotypes, is provided in Table S2 to Table S25. G, Comparison of genetic discovery power between AIPheno and human-defined methods in Sus scrof-
a (swine). GWAS results for all human-defined phenotypes were aggregated to plot the Manhattan plot. GWAS results for all image-variation phenotypes of AIPheno with significant signals were aggregated to plot the Manhattan plot. The green dashed line highlights significant signals associated with the two types of phenotypes. In the Manhattan plot, the dashed threshold line was set at poriginal = 2.81 × 10−9, with pcorrection = 7.02 × 10−10 for human-defined methods and pcorrection = 4.77 × 10−13 f-
or AIPheno. The human-defined phenotypes are total fat content, average fat content, and image-based body length and body height. Table S26 presents information on all lead SNPs, genetic loci, and candidate genes identified using image-variation phenotypes.
2.3 AIPheno’s actionable interpretability validates reported gene-phenotype associations
By generating images for visualization, AIPheno validated the consistency of reported gene-phenotype associations using its interpretation module. Next, we will demonstrate this through detailed analyses in two species: domestic pigeon and rice. For domestic pigeons, three independent studies defined two case-control categories (gravel versus pearl iris, based on the presence or absence of white coloration in the iris) to identify SLC2A11B, which carries a protein-truncating nonsense mutation[2224-
]. Loss of function in this gene impairs differentiation of xanthophore-like stromal pigment cells and pteridine biosynthesis, reducing yellow pigment production and resulting in the pearl iris phenotype. Consistent with these findings, AIPheno identified corresponding image variations associated with the same genetic mutation: IVP(v1, 11) captured the G-to-A nonsense mutation on chromosome 25 (Fig.3A). Interpretability analyses revealed progressive image changes correlated with genetic variants: -
the white sector of the iris progressively diminished in area, transitioning into neighboring pigmented regions until color saturation enveloped the entire iris structure, manifesting a gradual phenotypic continuum from pearl iris to gravel iris. As shown in the standard deviation (std) image, image variation was focused on the region outside the pupil and light spot (Fig.3A). For rice, the IVP(v1, 1) mapped to Os01g0866400 (CGSNL: MOC2 ) (Fig.3B), a locus repeatedly linked to plant height and gro-
wth rate in previous studies[25–27]. Experimental evidence shows that MOC2 mutations reduce tiller number, cause palegreen leaves, slow growth, and result in dwarfism[28], which aligns with AIPheno’s interpretability analysis of IVP(v1, 1). Not only did plant height decrease, but it was also more intuitively observable that the plants exhibited a dwarf phenotype due to a delayed growth rate (Fig.3B). As shown in the std image, image variation was concentrated at the top and bottom of the plant.
13

Collectively, these findings from diverse species demonstrate that AIPheno not only validates reported gene-phenotype associations but also offers interpretable visual evidence of how genetic variations manifest as specific phenotypic changes.
2.4 AIPheno’s actionable interpretability refines insights into established gene-phenotype associations
AIPheno’s powerful interpretability extends beyond merely validating established gene-phenotype associations, refining these insights by underlying mechanistic links and revealing the subtle phenotypic variations. Below, we will demonstrate this ability in humans and swine. In humans, multiple studies have identified the OCA2 -HERC2 locus as the most statistically significant locus: For deep learning-based approaches, this included iGWAS[11], the study by Zhao et al.[21] (excluding the vgg19 model-
), and AIPheno. This locus’s high significance was also observed using HDP-based methods; specifically, studies employing fractal dimension (an indicator quantifying vascular branching complexity), such as those by Zekavat et al.[20] and Villaplana-Velasco et al.[29], similarly highlighted its strong association. In addition, this locus was associated with retinal vessel diameter[30]. Notably, previous studies have further linked this locus to pigmentation traits—including hair color, eye color, a-
nd skin pigmentation[3133]. This indicates a pleiotropic effect between pigmentation and retinal vascular morphology. However, due to the limitations of human-defined phenotyping and non-interpretable deep learning-based approaches, the reason why these two distinct phenotypes share a common genetic basis remains unclear. From the interpretability analysis of IVP(v23, 13), we observed that the overall color of the retinal image gradually lightened from orange-red to orange-yellow, a change likely -
attributable to variations in retinal pigmentation. As the color lightened, the brightness and contrast of the optic disc and vasculature progressively increased, thereby enhancing the visibility of these two tissues. Concurrently, with improved vasculature visibility, a gradual increase in the vasculature’s complexity and width was visually observed. As can also be clearly seen from the std image, image variation was not only diffused across the entire fundus region, but it was also concentrated -
in the optic disc and vascular areas, which further corroborated the aforementioned observation (Fig.3C). The actionable interpretability analysis of AIPheno revealed coordinated variations between the two phenotypes: pigmentation and retinal vascular morphology. IVP(v21, 9) identified a lead SNP, rs5442, mapped to the GNB3 gene (Fig.3D). This variant is a highly conserved and deleterious missense mutation (p.Gly272Ser) located within an exon[34]. In the retina, GNB3 is integral to the phototransd-
uction cascade, where it functions as part of a heterotrimeric G-protein that enhances visual signaling[35]. Consistent with its critical role, rs5442 has been previously associated with a range of retinal anatomical parameters, including arteriolar width[36], macular thickness[37], ganglion cell inner plexiform layer thickness[38], retinal microvascular diameter[39], and vascular density[20], as well as with ocular diseases such as refractive error[34, 40], myopia[41], and open-angle glaucoma[42]-
. Our interpretability analysis of AIPheno elucidated the specific fundus changes attributable to this variant. The primary finding was a progressive coarsening of the
14

vasculature and a decrease in pigmentation across the entire fundus, corresponding to the development of a tessellated fundus. Furthermore, as the severity of the fundus tessellation increased, peripapillary atrophy-like lesions progressively emerged. The std image confirmed that these variations were distributed across the fundus but were particularly concentrated in the tessellated lesions in the periphery and center, peripapillary lesions, and the vasculature (Fig.3D), highlighting these as ke-
y areas of impact for the variant. These AI-driven observations are consistent with established clinical knowledge. Fundus tessellation and peripapillary atrophy are often observed concurrently in myopic eyes. Their shared pathophysiological basis is the mechanical stretching and thinning of posterior pole tissues caused by excessive axial elongation[43, 44]. While fundus tessellation represents a general, diffuse thinning of the choroid and retinal pigment epithelium, peripapillary atrophy is a m-
ore localized and concentrated result of this same tensile stress at the optic disc margin[44]. The strong association between these two clinical signs is well-supported by external evidence. A meta-analysis of population studies, for instance, confirmed that the severity of fundus tessellation is significantly associated with a larger area of peripapillary atrophy[45]. This link is also corroborated in non-human primate models, where highly myopic macaques showed a higher incidence of fundus tess-
ellation and peripapillary atrophy[46]. The consistency between our AIPheno analysis and these clinical and research findings suggests our approach successfully identified the key pathological features. Therefore, our work refines the understanding of the specific retinal fundus image changes caused by the rs5442 variant. IVP(v28, 7) identified LINC00461, a long non-coding RNA that is the principal target of a disease-associated enhancer at 5q14.3 and serves as the primary transcript for miR-9-2 (-
Fig.3E). In retinal progenitor cells and Mu ̈ller glia, regulation of LINC00461 by this enhancer is critical for the normal timing of retinal neurogenesis, and its disruption alters cell class specification and leads to a reduction in rod photoreceptors[47]. Studies have reported that LINC00461 is associated not only with retinal anatomical parameters such as macular thickness[37] and retinal thickness[48], representing one of the most significant signals in association analyses, but also with ocu-
lar diseases such as age-related macular degeneration[49] and macular telangiectasia type 2[50]. The interpretability results from AIPheno show that the severity of the tessellated fundus gradually decreased. The std image also revealed that these lesions were primarily concentrated in the fundus periphery, near the optic disc margin and the macula (Fig.3E). Tessellated fundus is considered the initial stage of myopic maculopathy[51], and studies have also shown that its severity is associated wit-
h macular choroidal thickness[52, 53]. This further corroborates the findings of AIPheno. Therefore, our findings refine the changes in retinal fundus images caused by LINC00461 variants. For swine, a peak identified by AIPheno was associated significantly with IVP(v112, 4) (Fig.3F). Two candidate genes were identified via positional mapping and literature review: FABP3 and BMP2. In swine, genetic variants of FABP3 were associated not only with backfat thickness, but also with intramuscular fat co-
ntent[54, 55]. Multiple studies have shown that BMP2 was associated with body shape, body size, and carcass morphology. Fan et al. reported that BMP2 was associated with increased
15

body length, decreased body depth, and reduced body width[56]. BMP2 was reported by Li et al. to be associated with carcass straight length[57]. Similar observations were made by Zhang et al., who identified associations between BMP2 and carcass length, body length, body height, and BMIBL traits, which suggested that BMP2 was a strong candidate gene for body size due to its involvement in growth and bone development[58]. The interpretability results of AIPheno demonstrated consistency with previo-
us studies, indicating changes in fat deposition and body length in swine. Interestingly, we discovered a variation in body shape not reported in previous research: the loin of the swine gradually became concave, which made the body shape progressively more slender. As shown in the std image, the image variation was diffused across the entire body region of the swine and is focused on the front and loin areas (Fig.3F). This visual discovery aligns remarkably with established findings, which identi-
fied BMP2 as a key candidate gene regulating Loin Muscle Depth (LMD)[59]. The depth of the loin muscle directly determines the contour of the pig’s back and loin; therefore, when a genetic variant of BMP2 leads to a shallower muscle, the external morphology naturally presents as a ”concave” appearance. Thus, the visualization from AIPheno provides an actionable morphological meaning to these previously established quantitative traits.
16

Fig. 3
17

Fig.3 AIPheno’s actionable interpretability validates and refines insights into established gene-phenotype associations. Identified genes for which AIPheno validated or refined established gene-phenotype associations are highlighted in blue. In std images, which are visualizations of the standard deviation for each pixel across the generated images, a brighter pixel indicates greater change at that point during image traversal. A, Interpretability analysis of IVP(v1, 11) in domestic pigeon. The s-
ignificance threshold was adjusted using a Bonferroni correction for the number of image-variation phenotypes (poriginal = 4.13 × 10−9, pcorrection = 2.95 × 10−11). A transition from the Pearl-type to the Gravel-type was observed; the white texture in the iris diminished gradually. As shown in the std image, image variation was focused on the region outside the pupil and light spot. Also see a dynamic video included in the Data S9. B, Interpretability analysis of IVP(v1, 1) in rice. The significan-
ce threshold was adjusted using a Bonferroni correction for the number of image-variation phenotypes (poriginal = 1.16 × 10−8, pcorrection = 2.75 × 10−11). The plant height of rice decreased gradually. As shown in the std image, image variation was concentrated at the top and bottom of the plant. Also see a dynamic video included in the Data S10. C, Interpretability analysis of IVP(v23, 13) in human. The significance threshold was adjusted using a Bonferroni correction for the number of image-vari-
ation phenotypes (poriginal = 5 × 10−8, pcorrection = 1.19 × 10−10, p values were truncated at 1 × 10−100). As the color gradually lightened, the visibility of the optic disc and vasculature progressively increased, in turn revealing greater complexity and width within the vasculature. As shown in the std image, image variation was not only diffused across the entire fundus region, but it was also concentrated in the optic disc and vascular areas. Also see a dynamic video included in the Data S11.-
 D, Interpretability analysis of IVP(v21, 9) in human. The significance threshold was adjusted using a Bonferroni correction for the number of image-variation phenotypes (poriginal = 5 × 10−8, pcorrection = 1.19 × 10−10). Pigmentary changes occurred, a tessellated fundus gradually developed, peripapillary atrophy appeared, and the retinal vessels progressively coarsened. The std image also showed that the image variation was distributed across the entire fundus, particularly concentrating on sever-
al areas: the tessellated lesions in the periphery and center, peripapillary lesions, and the vasculature. Also see a dynamic video included in the Data S12. E, Interpretability analysis of IVP(v28, 7) in human. The significance threshold was adjusted using a Bonferroni correction for the number of image-variation phenotypes (poriginal = 5 × 10−8, pcorrection = 1.19 × 10−10). The severity of the tessellated fundus gradually decreased. The std image also revealed that these lesions were primarily c-
oncentrated in the fundus periphery, near the optic disc margin and the macula. Also see a dynamic video included in the Data S13. F, Interpretability analysis of IVP(v112, 4) in swine. The significance threshold was adjusted using a Bonferroni correction for the number of image-variation phenotypes (poriginal = 2.81 × 10−9, pcorrection = 4.77 × 10−13). The body shape became progressively more slender with increased body length and a more concave loin, while fat deposition progressively increased.-
 As shown in the std image, the image variation was diffused across the entire body region of the pig and was focused on the front and loin areas. Also see a dynamic video included in the Data S14.
18

2.5 AIPheno’s actionable interpretability uncovers biological insights into newly identified loci
AIPheno not only refines insights into established gene-phenotype associations but, more importantly, also identifies novel loci and reveals their biological insights through actionable interpretability analysis. Next, we demonstrate this capability in three species: domestic pigeon, swine and human. The domestic pigeon displays three primary iris color types: yellow to orange ”gravel” (wild type), white ”pearl”, and black ”bull” eyes[60] (Fig.S8). Anatomically, the avian iris comprises three laye-
rs: the posterior pigment epithelium, which is densely packed with melanin; the stroma, which is a thick middle layer that contains muscle, connective tissue, nerves, and pigment cells; and the anterior border layer, which may include pigment cells or blood vessels in certain species[60–64] (Fig.4A). In ”bull-eyed” pigeons, there is a lack of pigment in both the stroma and the anterior border layer, with the black eye coloration observed in these breeds due primarily to the melanin present in the -
pigment epithelium[65]. The irises of both gravel and pearl pigeons exhibit anterior stromal pigment cells that contain birefringent crystals, with guanine identified as their primary pigment. The white color of the pearl eye arises because pigment cells deposit only guanine crystals and lack pteridine synthesis[60]. In domestic pigeon, a highly significant signal was identified on chromosome 1. Following genome annotation, positional mapping, and LD block analysis, two candidate genes, KITLG and -
TMTC3, were prioritized (Fig.4B). The KIT ligand (KITLG) gene, which encodes the ligand for the KIT -encoded tyrosine kinase receptor, plays a crucial role in cell development, migration, and melanogenesis regulation[66–68]. Supported by extensive cross-species evidence (e.g., humans, mice, swine, geese, chickens, goats, and threespine stickleback fish), KITLG was associated functionally with pigmentation phenotypes in skin, hair, and feathers[69–77]. Furthermore, KITLG exhibits a direct associati-
on with iris pigmentation. Zazo et al. reported a Waardenburg syndrome type 2 (WS2)-affected family exhibiting heterochromia iridis, which was characterized by abnormal iris pigmentation concurrent with abnormal skin pigmentation, and they demonstrated that these abnormalities were associated with a leucine-to-valine substitution at position 104 (p.Leu104Val) in KITLG[78]. Similarly, identical findings were observed in swine. Moscatelli et al. demonstrated in a Large White swine population that bo-
th heterochromia iridis and heterochromia iridum were associated with the KITLG gene[79]. In addition to KITLG, the TMTC3 gene was also associated with pigmentation in both humans and chickens[73, 75, 80]. However, such an association has not been reported in the domestic pigeon. AIPheno’s interpretability analysis provided visual evidence consistent with the potential roles of the candidate genes identified from previous studies. A statistically significant peak on chromosome 1 that was identifie-
d by IVP(v3, 10) drove consistent progressive image variations. Initially, pigmented iris regions exhibited interspersed fine black patches, which resulted in an overall darker appearance. Along the positive axis, these black patches diminished progressively, which led to enhanced vibrancy and brightness of the iris (Fig.4C). Based on this cross-species evidence and interpretability analyses, we propose the following mechanism. Genetic variations in KITLG or
19

TMTC3 may induce differential melanization within the posterior pigment epithelium of the pigeon iris. The std image showed that variation in melanin levels was present throughout the iris, except for the pupil and the light spot. Notably, the mean value of the R channel (quantifying the degree of redness in the image) and the mean value of the V channel (quantifying the brightness of the image), these two HDPs, also identified this locus (Fig.S11). However, the definitions of these phenotypes ar-
e based on fundamental photometric metrics, which inherently lack biological context, thus making their connection to a specific biological process like melanin accumulation unintuitive. In swine, AIPheno identified a peak on Chromosome 1, which was associated significantly with IVP(v174, 10) (Fig.4D). Through the interpretability analysis, the porcine body parts in the image became increasingly brighter overall, which indicated an increase in the degree of whole-body fat deposition (Fig.4D). This-
 increase was particularly evident in the backfat and abdominal regions in std image. Based on these image variations, and through positional mapping within the significant locus, two plausible functional candidate genes, SOD2 and IGF2R, were identified. In swine, no association between SOD2 and fat deposition has been reported in previous research. Post-developmental deletion of skeletal muscle-specific SOD2 induced systemic physiological effects through escalating mitochondrial deficits and subs-
equent impairment of energy metabolism in murine models. Additionally, SOD2 has been implicated in the modulation of lipid pathways, which demonstrated its direct association with both energy homeostasis and lipid metabolic regulation[81]. In humans, genetic variants of SOD2 were related to glucose metabolism[82]. More direct evidence has been demonstrated that genetic polymorphisms in SOD2 were associated with increased percentage of body fat and accumulation of visceral fat in obese populations,-
 a finding that is directly aligned with our interpretability analysis[83]. For IGF2R, studies have also reported that its function is related to fat deposition. The IGF2 locus was associated with muscle mass and fat deposition in swine[84], and its receptor, IGF2R, may also be implicated in the variation of these traits. The exonic polymorphism of IGF2R was associated with obesity in humans[85]. Based on interpretability analysis and cross-species evidence, we propose that the SOD2 -IGF2R locus i-
s associated with whole-body fat deposition in swine. In human retinal fundus images, the disc-fovea angle, which is defined as the angle between the optic disc center and the foveola, serves as a key parameter for the posterior fundus by defining the positional relationship of the optic nerve head relative to the foveola[86]. IVP(v22, 0) was associated with the disc-fovea angle. The optic disc was moved downward gradually, while the position of the fovea remained almost unchanged, which indicated-
 that a downward shift of the optic disc relative to the fovea had occurred, thus, the disc-fovea angle was decreasing gradually (Fig.4E). The std image showed that image variation was primarily concentrated in the optic disc and the connecting vasculature, while the fovea region showed almost no variation. Jonas et al. indicated that a larger optic disc-fovea angle was associated with a higher risk of retinal vein occlusion[87]. Compared with participants without the disease, the optic disc-fovea-
 angle was significantly larger in individuals with retinal vein occlusion. Choi et al. demonstrated that the optic disc-fovea angle was associated with the thickness
20

of the Retinal Nerve Fiber Layer (RNFL)[88]. They found that an increase in the optic disc-fovea angle was associated with corresponding changes in RNFL thickness, which potentially led to a greater susceptibility to glaucomatous damage in specific regions of the optic disc. Moreover, Amini et al. demonstrated that the disc-fovea angle itself can be considered an anatomical feature or risk marker associated with glaucoma[89]. Apart from the optic disc-fovea angle, IVP(v22, 0) was also associated -
with optic disc size because optic disc size was reduced gradually (Fig.4E). Myopic eyes have larger optic disc sizes[90]. Estimation of the disc size is also important in diagnosing diseases, such as glaucoma, optic disc drusen, pseudopapilledema, optic nerve hypoplasia, and anterior ischemic optic neuropathy[91]. Consistent with the aforementioned imaging variations, four lead SNPs were identified within the significant association signals of IVP(v22, 0), all of which showed the highest signific-
ance across all IVPs. Among these, three were mapped to genes associated with optic disc measurement (DCDC1 ) or abnormality of refraction (RUNX1 and ADAMTS9 ). Notably, the remaining SNP was mapped to CCBE1, which is a gene not reported previously to be linked to ocular phenotypes. In human, given that lead SNPs may exhibit statistical significance across multiple IVPs, a systematic min-p analysis was conducted to identify the IVP that exhibited the strongest statistical association (smallest p v-
alue) for each lead SNP and a Sankey diagram was constructed to visualize their interrelationships (Fig.4F). The IVPs showing the strongest statistical association with lead SNPs—those not previously reported in the GWAS Catalog database for pigmentation or eye-related traits—were selected, where blue and red lead SNPs denote previously reported and novel associations, respectively. The thickness of the lines connecting the columns is proportional to the − log10(p) value of the lead SNP. The image-
 variations captured in IVP(v6, 13) corresponded to pigmentation (Fig.S12). Of the lead SNPs identified for this IVP, four were novel: TRIM56 (rs79529160, p = 6.50 × 10−15), TRRAP and SMURF1 (rs188617085, p = 3.59 × 10−19), CYP3A5 (rs117445819, p = 1.76 × 10−13) and RAB38 (rs747572, p = 5.56 × 10−20). Details for the remaining IVPs are provided in Fig.S12.
21

Fig. 4
22

Fig.4 AIPheno’s actionable interpretability uncovers biological insights into newly identified genes. A, Schematic diagram of domestic pigeon eye and iris anatomy. The different eye colors of the domestic pigeon are determined by the iris, which is composed of three layers. The outermost Anterior Border Layer and the middle Stroma contain pigment cells, within which yellow pteridines and reflective purines are found. The innermost Pigment Epithelium is rich in melanin. B, Manhattan plot and LD an-
alysis of GWAS results. Results for all image-variation phenotypes were integrated for plotting, with two threshold lines indicating the significance levels before (p = 4.13 × 10−9) and after (p = 2.95 × 10−11) Bonferroni correction that was based on the number of image-variation phenotypes. Newly identified genes are highlighted in pink. LD analysis was performed within a 300 kb region surrounding the lead SNP on chromosome 1. Significant signals clustered between the TMTC3 and KITLG genes. C, In-
terpretability analysis of IVP(v3, 10) in domestic pigeon. The accumulation level of melanin was reduced gradually. The significance threshold was adjusted using a Bonferroni correction for the number of image-variation phenotypes (poriginal = 4.13×10−9, pcorrection = 2.95×10−11). The std image showed that variation in melanin levels was present throughout the iris, except for the pupil and the light spot. Also see a dynamic video included in the Data S15. D, Interpretability analysis of IVP(v174,-
 10) in swine. The significance threshold was adjusted using a Bonferroni correction for the number of image-variation phenotypes (poriginal = 2.81 × 10−9, pcorrection = 4.77 × 10−13). Whole-body fat deposition increased, especially in the backfat and abdominal regions. The std image also showed that image variation was primarily concentrated in the backfat and abdominal regions. Also see a dynamic video included in the Data S16. E, Interpretability analysis of IVP(v22, 0) in human. The significan-
ce threshold was adjusted using a Bonferroni correction for the number of image-variation phenotypes (poriginal = 5 × 10−8, pcorrection = 1.19 × 10−10). The optic disc (blue arrow) gradually moved downward with the fovea (red arrow) position unchanged, decreasing the disc-fovea angle (angle between the optic disc center and the foveola), while its size was reduced gradually. Such variations have been reported to be associated with ocular diseases. The std image showed that image variation was prim-
arily concentrated in the optic disc and the connecting vasculature, while the fovea region showed almost no variation. Also see a dynamic video included in the Data S17. F, A single lead SNP can be statistically significant for multiple imagevariation phenotypes. To resolve this, we first conducted a systematic min-p analysis to assign each lead SNP to the single image-variation phenotype with which it had the strongest association (smallest p value). Next, we constructed a Sankey diagram to visu-
alize these relationships. Finally, to highlight novel discoveries, we selected associations involving lead SNPs that had no previously reported links to pigmentation or eye-related traits in the GWAS Catalog. In the diagram, chromosomes (left column) are linked to lead SNPs (center column) and their corresponding smallest p value image-variation phenotypes (right column). The lead SNPs in the central column are colored red if unreported previously in an eye or pigmentation context and blue if rep-
orted. The thickness of the lines connecting the columns is proportional to the − log10(p) value of the lead SNP.
23

3 Discussion
Images, which are non-invasive, high-dimensional data acquired in a high-throughput manner, have been used increasingly for phenotyping to bridge the gap in throughput and information complexity between phenomics and genomics. Although numerous studies have demonstrated that data-driven representations of image data capture more effectively data variability than traditional HDPs, few have provided clear interpretations of the image variations that correspond to these representations. This study pr-
oposes a framework for scalable automated phenotyping and interpretation of image-variation phenotypes, acting as a ”phenotype sequencer”. The efficacy of the framework was validated across multispecies datasets, which included human retinal fundus, domestic pigeon iris, potted rice, and swine CT datasets. The results show that AIPheno’s automated phenotyping enhances the power of genetic discovery compared with human-defined and other deep learning-based phenotyping methods. AIPheno’s interpretab-
ility not only validates and refines reported gene-phenotype associations but also uncovers biological insights into newly identified loci, thereby closing the loop in genetic dissection. We attribute the greater genetic discovery power of AIPheno to three primary reasons. First, AIPheno excels at capturing fine-grained image variations, overcoming the limitations of coarse, discrete phenotyping. A key advantage of this approach is its ability to detect subtle, genetically driven variation within -
phenotypic groups traditionally considered uniform. For instance, domestic pigeon irises are typically categorized as ”gravel,” ”pearl,” or ”bull,” assuming no variation within each group. AIPheno, however, identifies substantial intra-group variation. Even when GWAS was restricted to only the ”pearl” or ”gravel” group, AIPheno still detected the KITLG-TMTC3 locus via IVP(v3, 10), confirming the existence of genetically driven variation within these predefined categories (Fig.S13A-B). The interpre-
tability module further visualized these subtle differences as varying melanin levels within both groups (Fig.S13C). Moreover, AIPheno identified IVPs for subtle features like eyeball orientation, pupil size, and pupil angle (Fig.S14A), which notably showed low correlation with HDPs that primarily capture global color variation (Fig.S14B). This highlights its capacity to uncover novel biological traits missed by conventional, human-defined phenotypes. Furthermore, this fine-grained approach enable-
s the quantification of complex image variations that are difficult to define or describe manually. For example, in humans, AIPheno successfully quantified the severity of tessellated fundus through IVPs (IVP(v21, 9) and IVP(v28, 7)). Similarly, in rice, it captured complex traits like drought resistance, which manifest as coordinated color shifts across different plant tissues (Fig.S15A), and developmental rates, reflected in both biomass and subtle color changes (Fig.S15B). These IVPs refined th-
e understanding of image variations associated with validated genes like GLR1.1 and SCR8. Such intricate and multi-faceted phenotypes are challenging to capture and quantify using traditional human-defined methods. Second, AIPheno effectively captures disentangled IVPs, allowing for the separation of distinct biological features. This is achieved through two complementary
24

mechanisms. First, we employ methods like ICA or PCA to identify statistically independent or orthogonal directions within the latent space of the generator. Second, we leverage the hierarchical structure of the StyleGAN generator, which synthesizes images progressively from coarse to fine resolutions. This layered architecture naturally disentangles different scales of image features, separating high-level morphology from fine-grained color and texture details. Our multi-species analyses confirm-
 that different layers of AIPheno’s generator capture distinct types of biological variation. The initial layers consistently model morphological traits. For example, IVPs from these layers corresponded to the optic disc-fovea angle in humans (IVP(v22, 0)) and overall plant height in rice (IVP(v1, 1)). In contrast, the final layers capture semantic features like color and texture. These layers identified variations in retinal color in humans (IVP(v23, 13)) and iris texture in domestic pigeons (IVP-
(v1, 11), IVP(v3, 10)), and changes in whole-body grayscale intensity in swine (IVP(v174, 10)), which directly corresponds to fat deposition, that occurred without altering body shape. Intermediate layers captured a blend of subtle morphology and texture, such as changes in both body shape and fat deposition in swine CT scans (IVP(v112, 4)). This hierarchical disentanglement ensures that individual IVPs represent more specific and biologically interpretable features. Third, models trained on a lar-
ge-scale, highly diverse, and comprehensive dataset can uncover richer IVPs. In rice, if the images at the T13 time point are examined alone, no drought-induced plant wilting is observed, whereas such image features appear at other time points. Notably, models trained solely on image data from the T13 time point failed to detect relevant genetic variats. After integrating image data from all time points for model training, a broader spectrum of variations from green to withered phenotypes across t-
he dataset was captured. This integration facilitated the detection of subtle drought stress responses in plants at early stages. AIPheno achieves actionable and precise interpretability analysis of IVPs used for association studies. First, AIPheno does not require pre-existing indirect evidence to speculate on phenotypic variations; instead, it directly generates high-quality images through the Generator to visually present IVPs, providing novel biological insights for genetic research. Second, A-
IPheno can intuitively display regions with significant changes via std images and present specific image variations through image traversal. Third, during interpretability analysis, AIPheno controls specific IVP for association studies while holding others constant, ensuring such visualized variations are also precise. In terms of its framework design and application, two further key advantages were also exhibited by AIPheno. The first advantage is flexibility. The Generator, Encoder, and Directi-
on Discovery components were trained independently, thus the framework was configured flexibly based on the specific data characteristics of the research. For the Encoder, a CNN- or Transformer-based architecture can be chosen and trained either from scratch or by initializing it with a pre-trained model. As for Direction Discovery, methods such as ICA, PCA, or even some unsupervised learning approaches can be implemented[92, 93]. The second advantage is usability. For researchers whose data align-
 with our study species and acquisition protocols, but which lack sufficient scale for training high-performance models, the
25

pre-trained Encoder, Generator, and Directions based on our large-scale high-quality dataset can be utilized directly to extract IVPs for downstream association and interpretability analyses, provided that consistent image data preprocessing procedures are maintained. For cases where researchers’ data differ in study species or acquisition approaches, no time-consuming and labor-intensive manual annotation is required because all model training approaches are based on unsupervised learning. Curre-
ntly, the AIPheno framework presents several areas for further optimization and exploration in future work. First, the current AIPheno only processes 2D images. For CT image analysis, 3D CT scans were converted into 2D projections. However, contemporary 3D generators have demonstrated superior performance in generating realistic outputs across domains that included natural objects, humans, and medical imaging[94–97]. Consequently, future improvements will be made to AIPheno architectures to enable-
 direct processing of 3D medical data modalities such as CT, MRI, point clouds, and mesh structures. Second, the integration of multimodal data for joint training has not been achieved. Although AIPheno can be applied to different modalities, only single-modal data input is supported in each training session, which restricts the model’s ability to extract complementary and richer information from diverse modalities. Additionally, the training of AIPheno remains independent from downstream genetic -
analysis, which result in the captured image variations that originate potentially from both genetic and non-genetic factors. In future developments, AIPheno should not only leverage phenotypic data from multiple modalities but also implement joint training with genetic data, thereby facilitating the model’s learning of rich information from genetically based multi-modal sources. Third, current methods for direction discovery, specifically ICA and PCA, are still based on linear transformations. Wh-
en the variance of components is very small, the results of interpretability analysis barely reveal image variation. Future trainable and disentangled direction discovery approaches are suggested to be integrated seamlessly into the AIPheno framework in a plug-and-play manner, which will enable enhanced adaptability and interpretability in complex data representations. In the future, we will enable AIPheno to process 3D images, integrate genetic information and other modal data during model traini-
ng, and develop a learnable Direction Discovery component. These optimizations will enhance AIPheno’s capability for complex trait dissection. Overall, in the genetic dissection of important traits in humans, animals, and plants, AIPheno not only validates and refines established gene-phenotype associations but also uncovers biological insights into newly identified genes, providing an effective framework for human disease risk prediction and precision breeding in animals and plants.
4 Methods
4.1 Ethical Approval Declarations
UK Biobank data was accessed through approved project 97563. Ethics Statement: All experimental procedures adhered to the principles of the Declaration of Helsinki. The experiments that involved swine were approved by the Ethics Committee of Huazhong Agricultural University (Approval No. HZAUSW-2023-0022),
26

and the experiments for domestic pigeons were approved by the Institutional Animal Care and Use Committee (IACUC) of Fujian University of Traditional Chinese Medicine (Approval No. FJTCM IACUC 2024331).
4.2 Data Collection and Preprocessing
Four datasets were released in this study for the first time: the simulated maize root dataset, the domestic pigeon iris dataset, the potted rice dataset, and the swine CT dataset. The acquisition of multi-species biological images and genotypic datasets was documented, with data derived from both public repositories and in-house generated sources. Low-quality variants were comprehensively and systematically filtered using standardized criteria to retain high-confidence genetic variation data. In -
parallel, a series of targeted preprocessing operations were initially performed on the input multispecies bio-images. The main purposes of such preprocessing were to suppress the influence of background noise, to remove low-quality images, and to extract relevant image information through format transformation. Subsequently, the preprocessing pipelines of different species were introduced respectively.
4.2.1 Simulation Maize Root Dataset
To validate the effectiveness of the AIPheno framework, a simulated dataset was produced. Maize root anatomical images were generated by the R package GRANAR[98], and a real maize genotypic dataset was used. The specific simulation process was as follows: Image Data Generation. Two types of genetically relevant image variations were simulated: one with more obvious variation of aerenchyma proportion, and the other with more subtle variation of metaxylem size. The parameter for aerenchyma proportio-
n was set to range from 0.150 to 0.650 with a step size of 0.001, which resulted in 501 values. The parameter for metaxylem size was set to range from 0.02 to 0.07, also with a step size of 0.001, which was 51 values. From all combinations of these two parameters, a total of 501 × 51 = 25, 551 images were generated. In addition to these two genetically related image variations, to simulate variations in real data caused by environmental effects, such as lighting, random brightness, and contrast, a-
djustments were applied to each image using the albumentations package[99]. The adjustment range for both the brightness and contrast factors was set to 0.2. Simulation design. First, the heritabilities of both aerenchyma proportion and metaxylem size were set to 0.5. Second, SNPs were quality-controlled for a Minor Allele Frequency (MAF) ≥ 0.05, which ultimately produced 397,323 SNPs for subsequent analysis. QTNs were divided into three groups, and their contributions to the phenotype all followe-
d normal distributions: the first group consisted of five QTNs that followed a normal distribution N (0, 1); the second group consisted of five QTNs that followed a normal distribution N (0, 0.01); the third group consisted of 10 QTNs that followed a normal distribution N (0, 0.0001). QTNs for both parameters were selected randomly from the first half and the second half of the genetic variants. The simulated phenotypic values were scaled linearly to within the value range of each parameter.
27

Finally, images and genotypes of 2,279 individuals with parameter values that matched the simulated phenotypic values were selected for downstream association analysis.
4.2.2 Human Retinal Fundus Dataset
The image data of this dataset were collected from the UK Biobank (UKB) and Kaggle, with a total of 253,463 images that were utilized for model training and evaluation. Genotypic data were available for 76,829 individuals, among which 13,874,430 SNPs were identified. Only images from the left eye were utilized for downstream genetic analysis. Data Collection. Access to the UK Biobank data was granted under an approved research protocol, in compliance with the UK Biobank Data Access Agreement. The -
imaging data were derived from fields 21015 and 21016 of the UK Biobank, which corresponded to the left and right eyes, respectively. Genotypic data were obtained from field 22828, where the imputed genotypes were aligned to the + strand of the reference genome, with their positions reported in GRCh37 coordinates. To enhance data diversity, the EyePACS dataset from Kaggle (https://www.kaggle.com/ c/diabetic-retinopathy-detection/data) was utilized, which included both training and test sets that c-
omprised fundus images obtained from healthy individuals and those exhibiting varying severity levels of diabetic retinopathy. Imaging data. The image quality control method provided by ContIG was adopted[100]. Initially, images were selected based on successful circle detection using the Hough Transform algorithm, followed by central region cropping. Subsequently, the top and bottom 0.5% of remaining images that exhibited extreme brightness values were excluded. Genetic data. The genotypes of ind-
ividuals with imaging data that passed quality control were extracted, and only SNPs were selected. Filtering was performed based on minor allele frequency (MAF ≥ 0.1%), Hardy-Weinberg equilibrium (HWE significance threshold: 10−12), imputation quality (information score ≥ 0.4), and maximum missingness rates of 10% for both SNPs and samples. Missing genotypes were subsequently imputed using Beagle software (v5.4)[101], followed by a second round of quality control that applied the same criteria. U-
ltimately, 13,874,430 SNPs were retained for analysis.
4.2.3 Domestic Pigeon Iris Dataset
The image data in this dataset were collected primarily through web crawling, with a total of 28,903 images used for model training and evaluation. To facilitate improved genetic analyses, a new, high-quality telomere-to-telomere (T2T) domestic pigeon genome was assembled. Among these, genotypic data were obtained from 641 individuals that contained 12,113,557 SNPs. Data Collection. The image data were crawled primarily from the Youth Pigeon Information Website (https://qingnianxinge.com/index.htm-
l), with public data from 51 pigeon lofts being collected through this platform. Additionally, a portion of the data was derived from publicly accessible records of pigeon racing competitions. The images of individuals utilized for genetic analysis were captured through our own
28

photography. Genotypic data were derived from whole-genome resequencing of feather samples obtained from domestic pigeons. Imaging data. A total of 1,936 images were annotated initially to train a U-Net[102] semantic segmentation model for automatic iris segmentation from the images. After each iris region was segmented from individual images, the iris region was cropped and padded with zero pixels to form a square shape, which ensured that the iris remained centered within the image. Finally, al-
l processed images were resized to 512 × 512 pixels. This image processing pipeline prevented effectively geometric distortion during square resizing while maintaining consistent dimensions across all images, eliminated positional variations caused by Regions of Interest (ROIs) located at different regions, and further addressed size inconsistencies in ROIs thatresulted from non-uniform distances between the camera and subjects. Sample preparation. An adult female domestic pigeon was selected for -
genome assembly. The individual was maintained under standard husbandry conditions at Xinglian Pigeon Industry Co., Ltd.. Ten tissues, which included muscle, skin, heart, liver, gizzard, intestine, ovary, lung, eye, and brain, were dissected, flash-frozen in liquid nitrogen, and stored at -80°C until further processing.
Genomic DNA preparation and sequencing. Total genomic DNA (gDNA) was isolated from muscle using the Sodium Dodecyl Sulfate (SDS) lysis protocol. DNA integrity was evaluated using the Agilent Bioanalyzer 2100 system (Agilent Technologies, CA, USA), and quantification was performed using a Qubit 3.0 Fluorometer (Invitrogen, Waltham, MA, USA). Three sequencing libraries were constructed: (1) a short-read library compatible with the DNBSEQ-T7 sequencing platform (MGI Tech, Shenzhen, China), (2) a high-
-fidelity (HiFi) library for PacBio SMRT sequencing (Pacific Biosciences, CA, USA), and (3) an ultra-long-read library for the Nanopore PromethION platform (Oxford Nanopore Technologies, Oxford Science Park, UK). Chromosome conformation capture (Hi-C) experiment. Hi-C technology was used for chromosomal scaffolding. Biotinylated DNA fragments were sheared mechanically to 300-500 bp using a Covaris S220 sonicator, followed by streptavidin bead enrichment (Dynabeads M-280, Thermo Fisher Scientific) -
to generate paired-end Hi-C libraries. Sequencing was performed on the DNBSEQ-T7 system (MGI Tech). RNA extraction and sequencing. Total RNA was extracted from all 10 tissues using the TRIzol reagent (Thermo Fisher Scientific, MA, USA). Pooled RNA-seq libraries were prepared with the TruSeq RNA Library Preparation Kit v2 (Illumina, CA, USA) and sequenced on the DNBSEQ-T7 platform. Raw reads were processed using fastp (---l = 50, v0.19.3)[103] to remove adapter sequences and low-quality bases (Phre-
d score < 20), which yielded clean reads for downstream analysis.
Telomere-to-telomere genome assembly. HiFi reads, Oxford Nanopore Technologies (ONT) ultra-long reads, and Hi-C data were assembled into contigs using Hifiasm (v0.17.4-r455)[104] with default parameters (GitHub: https://github.com/ chhylp123/hifiasm). Chromosome-level scaffolding was performed by integrating HiC data with Juicer (v1.6)[105] and HapHiC (v1.0.1)[106]. Manual refinement and chromosome ordering were conducted using Juicebox (v1.11.08)[107]. To resolve telomeric regions, ONT ultra-long-
 reads were aligned to the assembly with Minimap2 (v2.24-r1122, parameters: ---ax map-ont)[108]. Reads mapped
29

within 100 bp of chromosome ends were analyzed for telomeric repeat motifs (”CCCTAA”/”TTAGGG”)[109]. Reads with the highest motif frequency were designated as reference (REF), and others were classified as query (QUERY). Consensus telomeric sequences were generated using medaka consensus (v1.2.1, model: r941 prom fast g507, https://github.com/nanoporetech/medaka) for REF and QUERY reads independently. These sequences were then aligned to chromosome termini using Nucmer (v4.0.0rc1)[110], and regio-
ns with ≥ 90% alignment coverage were integrated to replace original telomeric sequences. Scaffold gaps were resolved using TGS-GapCloser (v1.2.0, parameters: ---min nread 10)[111], which leveraged ONT read-to-contig coverage relationships. Final genome polishing was performed with Pilon (v1.23, parameters: ---fix snps, indels ---changes)[112] using Illumina short reads. Repeat and gene annotation. Repetitive elements in the genome were annotated using a combined strategy of homology-based and de -
novo prediction methods. Homology-based identification was performed with RepeatMasker and RepeatProteinMask (RepBase library) to detect known repeats, and de novo prediction utilized RepeatModeler and LTR-FINDER to identify novel repetitive sequences based on structural features. Tandem repeats were predicted using TRF (v4.09) with default parameters. For protein-coding gene annotation, we used a multi-evidence integration approach was employed. Homologous genes were identified by aligning known -
protein sequences from Columba livia (GCF 036013475.1, GCA 032206205.1, GCA 000337935.2) and Columba guinea (GCA 032206185.1) to the genome using Miniprot (v0.11-r234)[113] with the parameter -j 1. De novo gene prediction was conducted using Augustus[114] and Genscan[115] to model potential coding regions. Transcriptomic evidence was incorporated by aligning RNA-seq reads to the genome with HISAT2[116], followed by transcript assembly using StringTie[117] and coding sequence prediction using Trans-
Decoder. These heterogeneous datasets (i.e., homology alignments, de novo predictions, and transcript-derived evidence) were integrated into a nonredundant gene set using MAKER[118]. With priority given to transcript-supported and homology-based annotations, the final gene set was refined using HiFAP[119] to resolve conflicts and to ensure consistency. Genome annotation was assessed with BUSCO (v5.5.0) against the aves odb10 lineage, which achieved 99.80% completeness. Non-coding RNAs were annotat-
ed as follows: tRNAscan-SE[120] for tRNA identification, BLASTN[121] against homologous rRNA references for rRNA detection, and INFERNAL[122] with Rfam covariance models for miRNA and snRNA prediction. Functional annotation of protein-coding genes included DIAMOND (v2.0.14) alignment (blastp, e − value ≤ 1e − 5) to TrEMBL, SwissProt, NR, KOG/COG, and KEGG databases, KOBAS (v3.0)[123] for KEGG pathway mapping, InterProScan (v5.61-93.0)[124] for domain/motif analysis, and HMMER3 (v3.3.1)[125] for Pf-
am and annotation transcription factors. Genetic data. All collected WGS data were processed using standard bioinformatics pipelines. By using fastp (v0.12.4)[103], raw data were first trimmed by removing adapters and low-quality (-W 4 -M 20 -q 20 -u 40 -n 5 -l 15) bases. The remaining high-quality reads were aligned against the reference sequence using
30

BWA (v0.7.17)[126]. Uniquely mapped reads were used for detection of short variants with Sentieon (v2023.08)[127]. To obtain highly confident short variants, samples with sequencing depth < 3 and coverage < 70% were removed. GATK (v4.0.3.0)[128] was next used the parameter QUAL < 30.0 | | QD < 2.0 | | FS > 60.0 | | MQ < 40.0 | | SOR > 3.0 | | ReadPosRankSum < -8.0 / QUAL < 30.0 | | QD < 2.0 | | FS > 200.0 | | SOR > 10.0 | | ReadPosRankSum < -20.0 | | MQ < 40.0 | | MQRankSum < -12.5 to retain high-
-quality. The SNP data were filtered through criteria that included a MAF threshold ≥ 0.05, maximum missing genotype rates per variant of 0.1, and maximum missing genotype rates per sample of 0.1. The missing genotypes were imputed using Beagle software (v5.4), followed by quality control with the same filtering criteria, which resulted in a final set of 12,113,557 SNPs.
4.2.4 Potted Rice Dataset
This dataset was compried of side-view images captured from 529 accessions across 22 developmental timepoints from seedling to maturity stages. A total of 327,734 images were utilized for model training and evaluation. The genotypic data of the 529 individuals were characterized by 4,321,306 SNPs. Data Collection. A previous study provided detailed information on the rice accessions and their genotyping[129]. Two biological replicates were established for each accession. Each replicate was imaged -
from 15 distinct side-view angles to ensure complete 360◦ circumferential coverage of the plant. Twenty-two time points were designated from the seeding to heading stages. Imaging was conducted at each time point using the aforementioned protocol. Imaging data. The foreground region of each image was cropped and pasted onto the center of a blank square image of uniform size. The composite images were then resized uniformly to 256 × 256. This approach eliminated variations caused by inconsistent po-
sitioning of plants within images and prevented deformation induced by direct resizing of all images to a uniform dimension. Genetic data. The SNP data were processed using filtering criteria with a MAF threshold ≥ 0.05, with maximum missing genotypic rates per variant and per sample of 0.1. Missing genotypes were filled using Beagle software (v5.4), and quality control was reapplied with identical thresholds, which yielded a final dataset of 4,321,306 SNPs.
4.2.5 Swine CT Dataset
The dataset was comprised of two-dimensional CT fat projection images of 3,803 boars from four breeds (i.e., Landrace, Yorkshire, Pietrain, and Duroc), which were utilized for model training and evaluation. Genotypic data were available for 795 individuals, which contained 17,810,683 SNPs. Data Collection. After anesthesia, the pigs were positioned prone and scanned using a Siemens AS plus CT scanner with the following parameters: 110 kV/160 mA, 512 × 512 matrix, axial orientation, and 5 mm slice -
thickness. The remaining body parts of the boar, excluding the head, were scanned. The genotypic data were obtained through whole-genome resequencing of ear tissue samples.
31

Imaging data. A dataset of 80 annotated samples was utilized to train a 3D semantic segmentation model for CT images using nnU-Net[130], with the purpose of removing extraneous targets, such as CT tables from boar body scans. After nnU-Net segmentation, a threshold segmentation (-200 < HU < 0) was performed to isolate whole-body fat voxels[131]. Subsequently, the entire CT image was interpolated linearly to achieve isotropic voxels with a spacing of 1 × 1 × 1, which ensured alignment with real-wo-
rld physical dimensions. Because higher HU values indicated greater voxel density, the HU values of all voxels were increased uniformly by 200 to guarantee non-negative pixel values post-projection. Then, a sagittal projection of the 3D volume was generated by summing all voxel values along the same directional axis, which resulted in a 2D projection image. After projection, the foreground within the image was cropped out, then pasted into the center of a uniformly sized square blank image. The ma-
ximum value across all images was identified, and the image was normalized accordingly. Finally, the image was scaled to the 0-255 range and saved as a PNG image in uint8 format. After preprocessing with the aforementioned methods, image variations caused by positional differences among individuals were eliminated. Additionally, a unified normalization procedure was applied, which enabled the comparability of pixel values across different individuals. A higher pixel value was indicative of a great-
er fat content in the corresponding projection direction. Genetic data. A population of 795 individuals from four breeds (i.e., Duroc, Landrace, Pietrain, and Large White) was subjected to next-generation short-read sequencing. Initially, quality control of the raw FASTQ sequencing data was performed using fastp (v0.12.4), whereby adapters and low-quality bases were removed. Subsequently, the high-quality data that remained after quality control were aligned to the swine reference genome (Sus Scro-
fa 11.1) using BWA (v0.7.17) software. Uniquely mapped reads were used for detection of short variants with Sentieon (v2023.08). If multiple sequences were mapped to the same genomic location, only the unique alignment that possessed the highest mapping quality was retained. The SNP dataset was filtered based on criteria that included a MAF threshold ≥ 0.05 and maximum missing genotypic rates of 0.1 for both variants and samples. Missing genotypes were imputed using Beagle software (v5.4), followe-
d by reapplying the same quality control thresholds, which ultimately yielded a final dataset of 17,810,683 SNPs.
4.3 The Encoder-Generator Framework of AIPheno
The primary and core objective of AIPheno is to acquire high-dimensional phenotypic variations from the input images and to perform interpretable analyses on those phenotypes that exhibit significant signals in GWAS. In pursuit of this goal, we have devised a deep learning framework predicated on an encoder-generator architecture (Fig.S16). Subsequently, the specific structures of the Generator and the Encoder will be introduced. Generator. In consideration of the limited volume of bio-image data,-
 an unconditional StyleGAN[132, 133] network was selected to construct the generator. The fundamental structure of a StyleGAN consists of a standard gaussian probability distribution p(z), from which a latent vector z is sampled, and a Mapping network M (z)
32

maps the latent vector z to the w space, and then a synthesis network S(z) is utilized to generate an output image I. This can be represented mathematically as z ∼ p(z), w = M (z) and I = S(w). The neural network S(·) can be disassembled further into a sequence of L intermediate layers, denoted as S1, S2, ..., SL. The initial layer takes the latent vector w as the input and yields a feature tensor Y1 = S1(w). For the subsequent layers, each layer generates features as a function of the output of -
the preceding layer, that is, Yi = Si(Yi−1). The final output of the last layer, I = SL(YL−1), is an RGB image. In this study, we used the Generator for unsupervised training to fit the distribution of the original input bio-images. For all the preprocessed bio-image data, we first resized the image to 256 × 256. The value of L was set to 14, and the dimension of w was 512. To enhance the ability to restore image details, we mapped the w ∈ R1×512 space into the w+ ∈ R14×512 space[134] (Fig.S18A). -
Therefore, the mathematical representation of generating images using the synthesis network was transformed into I = S(w+). Notice that each vector in w+ was first projected by the affine layer Ai, then it affected the corresponding layers Si by modulating on the convolution kernels, where i = 1, 2, ..., L. Fig.S19, Fig.S20, Fig.S21 and Fig.S22 respectively present the images generated unconditionally from retinal fundus of human, irises of domestic pigeon, potted rice, and swine CT, which demonst-
rated that the generator possessed the capacity to fit the spatial distribution of the original input data. Encoder. The objective of the Encoder is to achieve precise image reconstruction in combination with our proposed Generator, thereby obtaining the latent vector of the input image within the w+ space. This was represented mathematically as given a bio-image I ∈ RH×W ×C ; the Encoder was able to specify L different style vectors denoted by wi ∈ R1×C , where i = 1, 2, ..., L was the index of t-
he vector injected into the different stages of the Generator. The overall structure of the Encoder was divided into two components (Fig.S16). One component consisted of the global and local image representation modules, and the other component was composed of L learnable tokens. Within the first component, the input image I was encoded by Swin[135] Backbone, which generated a series of local image features F 0
local to F 3
local at multiresolutions and a global image feature Fglobal. The second component utilized a CrossModality Multi-Head Attention (X-MHA)[136] to interact with the local information of the image and then fused it with the global image representation to obtain the final representation in the w+ space. Four layers of X-MHA were incorporated with the intention of fusing the local features of images at various resolutions. The whole process was written as according to Eq.1, where Xf2t represents the fu-
sion pathway from local image feature to learnable tokens X, and Fbt2f represents the opposite fusion pathway. Notice that when i = 0, the feature fusion has not been performed yet, and the corresponding formula is shown as Formula Eq.2. Subsequent to passing through X-MHA, the features of learnable tokens will proceed directly into the X-MHA of the next layer. Concurrently, the local image feature F i+1
t2f was subjected to up-sampling
processing and was integrated with the local image feature F i+1
local of the next layer prior to entering the X-MHA (Eq.3).
X i+1
f 2t , F i+1
t2f = X-MHA(Xi
f2t, Fbi
t2f ), i = 0, 1, 2, 3 (1)
33

X0
f2t = X, Fb0
t2f = F 0
local (2)
Fbi+1
t2f = U P (F i+1
t2f ) + F i+1
local, i = 0, 1, 2 (3)
For simplicity, the preprocessed input bio-images were resized uniformly to a specific dimension of 256 × 256. In this context, the parameters L and C were set as 14 and 512, respectively. Moreover, we selected the network size of Swin-Large and employed the weights pre-trained on the basis of the ImageNet-22K[137] data to initialize the Backbone network. Fig.S17 presents an overview of the proposed X-MHA. More precisely, X ∈ R14×512 learnable tokens were initialized randomly. Subsequently, within-
 the X-MHA, the learnable tokens X and the flattened local feature after fusion Fbi
t2f ∈ RHW ×512 of the image functioned as Query and Key-Value, respectively, to participate in the cross-fusion process; each head computed the context vectors of one modality by attending to the other modality. With respect to the Xf2t, the query Q, key K, and value V were all projected in accordance with Eq.4. Conversely, the Ft2f was as depicted in Eq.5. It is noted that W X-MHA
Q , W X-MHA
K , and W X-MHA
V ∈ R512×512
were learnable projection heads in the X-MHA module. The calculation formula of Attention is presented in Eq.6, where the feature dimension d was 512. The final update results from the Multi-Head Attention are given in Eq.7, where W X-MHA
O ∈ R512×512
was also learnable and was responsible for fusing the results Attn from different heads h. In this case, H was set to 4.
Qi = Xi
f 2tW X-MHA
Q , Ki = Fbi
t2f W X-MHA
K , Vi = Fbi
t2f W X-MHA
V (4)
Qi = Fbi
t2f W X-MHA
Q , Ki = Xi
f 2tW X-MHA
K , Vi = Xi
f 2tW X-MHA
V (5)
Attn(Qi, Ki, Vi) = Sof tmax( QiKT
i
√d )Vi, i = 0, 1, 2, 3 (6)
M HA(Qi, Ki, Vi) = [Attn(Qi, Ki, Vi)]h=1:H W X-MHA
O (7)
4.4 Model Training
The entire Encoder-Generator framework adopted a two-step training approach. First, a Generator was trained independently to adapt to the distribution of the input bioimages. Subsequently, the parameters of the trained Generator were held constant, and the Encoder and Generator were trained jointly with the aim of obtaining image representation. Because the entire training process was unsupervised, each dataset was split randomly into a training set and a validation set; the training set accounted-
 for 95% and the validation set for 5% (with the exception of the swine CT dataset, for which the GWAS individuals were used as the validation set, and the remainder as the training set). The following subsequent section provides a detailed description of the two steps. Generator Training. In the initial stage, the processed training, multi-species bio-images were resized to a dimension of 256 × 256 and converted into the Lightning
34

Memory-Mapped Database (LMDB) format for storage purposes. These processed images were then used for the subsequent training of the Generator. Subsequently, a normalization procedure was conducted out on the three RGB channels of the images. Specifically, the means of the channels were set to [0.5, 0.5, 0.5], and the variances were set to [0.5, 0.5, 0.5]. The initial learning rate, denoted as lr, was established as 0.002, and the training batch size was configured to be 24. The remaining training-
 parameters were assigned the default values as described in StyleGAN2[133]. The entire training process was implemented using a single 40G-A100 GPU, and we adopted the Adam optimization strategy. The total number of training iterations was set to 250,000. Upon the attainment of convergence in the training of the Generator, we used an early stopping strategy to obtain the final model, thereby achieving a reduction in the training time. Encoder Training. We adopted the strategy of training the Enco-
der and the Generator jointly to obtain the Encoder model. Similar to the training of the Generator, the preprocessed, multi-species bio-images were also resized to 256 × 256. During training, a random horizontal flip was applied to the input bio-images with a probability of 0.5 for data augmentation. A normalization operation was then performed on the three RGB channels of the images, with the means set to [0.5, 0.5, 0.5] and the variances set to [0.5, 0.5, 0.5]. The training batch size was confi-
gured as 16, and the entire training process was carried out using a single 40G-A100 GPU, with the Adam optimization strategy. The total number of training iterations was 600,000. Once the Encoder model converged, we used an early stopping strategy to obtain the final model. Notice that, during training, the synthesis backbone of Generator that included the affine layer A was strictly fixed. Furthermore, the pixel-wise Mean Squared Error (MSE) loss and Learned Perceptual Image Patch Similarity (LP-
IPS[138]) were utilized to measure the pixel-level and perceptual-level similarities between the input image I
and the reconstructed image I′ . Simultaneously, LPIPS, which was calculated based on the features within an Inception[139] net V GG(·), was also used. It formulated the objective as Eq.8.
LLP IP S = ||V GG(I) − V GG(I′ )||2 (8)
Ltotal = λLP IP S LLP IP S + λMSE LMSE (9)
As shown in Eq.9, the overall loss function was composed of two parts. λLP IP S and λMSE acted as weights for balancing each loss. During the training process, for Human Retinal Fundus Dataset, Domestic Pigeon Iris Dataset and Swine CT Dataset, the initial learning rate was configured as lr=0.0001, λLP IP S was set to 4, and λMSE was set to 1. In contrast, for Potted Rice Dataset, the initial learning rate was set as lr=0.001, λLP IP S was set to 0.8, and λMSE was set to 1. Fig.S23 showed the reco-
nstructed input images of four datasets. Results demonstrated that the Encoder exhibited robust capability to restore the overall image information, with consistent preservation of fine details.
35

4.5 Phenotype Extraction
The high-dimensional features extracted by the Encoder we proposed have reflected satisfactorily the variation information of the original bio-images. Nevertheless, GWAS processes single-dimensional values separately, and the deep features were mutually disentangled in different dimensions, which was not conducive to the subsequent interpretable analysis of phenotypes. Therefore, the objective of this section was to utilize the pre-trained Generator to discover the mutually independent and interpr-
etable directions hidden in the W space, and output the projection values of the input bio-images onto these directions as the phenotypes that described the image variation. Discovering Interpretable Directions. A data-driven Independent Component Analysis (ICA)[140] approach was used to discover the interpretable directions. For a fixed and trained synthesis network, a randomly sampled z from the standard normal distribution p(z), which was mapped to w using the mapping network, corresponded to a-
 generated image I (Fig.S18A). This process was denoted as z-w-I, that is, each z and w corresponded to a generated image. Generally, the quantity of original bio-images is rather limited. Direct exploration of directions is prone to introducing biases. Consequently, we sampled 100,000 times from the standard normal distribution p(z) to simulate and to generate a set of 100,000 images that conformed to the distribution of the original bio-images, and this generated image set was then utilized for -
the discovery of meaningful directions (Fig.S18B). In the W space, each image was represented by a vector w with C = 512 dimensions. Meanwhile, a direction in the W space was denoted by a vector with C = 512 dimensions. The core objective of ICA was to decompose the observed mixed vectors into several mutually independent source vectors. Suppose there existed multiple source vectors that were mixed through an unknown linear mixing matrix. ICA aimed to estimate the mixing matrix and the source vect-
ors through statistical methods, thereby achieving vector separation. In this study, we used the FastICA [141] algorithm in the Scikit-Learn python package[142] to solve for the independent components of ICA; the number of independent components of ICA after solution was K, which produced K × 512 interpretable directions.
Project and Phenotype Extraction. For any image within the population to be analyzed genetically, a trained Encoder network was adopted to obtain the representation in the W + space. Subsequently, the L-layer features in the W + space were respectively dot-multiplied with the K directions to acquire the projection values (Fig.S18C). Notice that the dimension of the image representation in the W + space was L×C, and the dimension of the directions was K ×C. Therefore, L×K projection values were obt-
ained finally, which constituted the final phenotype of the input bioimage. Specifically, we set L = 14 and C = 512 in this study. For different image data, the value of K varied. However, to reduce the computational cost of GWAS, it was not recommended that the value of K exceed 30.
36

4.6 Interpretation Analysis
Direction Traversing. For the phenotypic dimensions that exhibited significant signals within the GWAS analysis, we performed a traversal operation along their corresponding directions to acquire the image phenotypes subsequent to the traversal. Thereafter, the well-trained Generator was utilized to convert traversaled phenotypes into corresponding images Iˆ, thereby providing an actionable visualization of the specific implications of the phenotypic dimension. In essence, this process constituted-
 an interpretability analysis. More concretely, prior section4.4 proposed to use a certain direction D ∈ R512 in the W space to represent a semantic concept. After identifying a semantically meaningful direction, the traversing was achieved using the following Eq.10, which was applied in image editing[17, 143, 144].
Iˆ = S(wˆ) = S(w + αD) (10)
In other words, the target semantic was modified by displacing the latent code w ∈ R512 (in W space) linearly along the identified direction D. The parameter α represented the manipulation intensity. Layer-Wise Interpretation. As introduced in Section4.3, it is common practice for us to utilize the W + space as a substitute for the W space space to represent the input image features. Moreover, the L layers within the W + space acted respectively on the corresponding affine layer Ai in the Generato-
r, thereby generating images iteratively. Consequently, we also extended the traversal of directions to be carried out within the W + space. Suppose that the phenotype of the i-th layer in the W + space of an image yielded a significant locus. Then, only the phenotype of this layer was traversed along direction D, but the phenotypes of the other layers remained unchanged. The traversed phenotype wˆi was then fed into the trained Generator together with
the phenotypes of the other layers to generate an image Iˆ. The specific calculation formulas are shown in Eq.11 and Eq.12.
wˆi = wi + αD (11)
Iˆ = S((w1, w2, ..., wˆi, wL)) (12)
By virtue of the layer-by-layer iterative generation approach adopted during image generation, in the L layers, the shallow-layer wi(i = 0, 1, ..., 6) represented information, such as image texture and contour, and the deep-layer wi(i = 7, 8, ..., L) represented image variations that were more meaningful semantically, such as pigment deposition in human retinal images, and drought resistance or developmental rate in rice. In this way, phenotypic extraction in the W + space achieved layer-wise inte-
rpretability of bio-image variation.
4.7 Genetic Analysis
4.7.1 Simulation Study
Phenotypes. Because the W + space was decomposed into 30 directions using ICA, 420 IVPs were included in the GWAS analysis.
37

GWAS. GWAS analysis was performed using the MLM method in rMVP[145] with the top three genetic principal components were included as covariates. To maintain the false discovery rate < 5%, Bonferroni correction was applied by dividing the significance level by both the number of markers and the number of phenotypes. The significance threshold for the IVPs was calculated as 0.05
397,323×420 = 3.00 × 10−10.
Identification of true loci. Genetic variants within 250 kb upstream and downstream of each QTN were defined as true loci.
4.7.2 Human
Phenotypes. Only the left-eye images were utilized to extract phenotypes for downstream analysis. As the W + space was decomposed into 30 directions using ICA, the number of IVPs employed in the GWAS analysis amounted to 420. For comparison, a 400×400 pixel patch at coordinates [600:1000, 800:1200] was cropped, and the average intensities of its red, green, and blue channels were taken as the quantitative traits[11]. GWAS. Given the substantial size of the UKB dataset, traditional GWAS methods bec-
ome computationally prohibitive when analyzing numerous phenotypes. To address this, we implemented a three-step approach for UKB GWAS analysis. First, the kinship matrix was constructed using HIBLUP[146], followed by calculation of the top 10 principal components (PCs) from its principal component analysis (PCA). Subsequently, age, sex, and the top 10 genetic PCs were incorporated as covariates, while the kinship matrix and all phenotypes were input into rMVP. We used restricted maximum likelihoo-
d (REML) methodology to estimate variance components and heritability for all phenotypes, with eigenvalues and eigenvectors of each phenotype computed simultaneously. Finally, all phenotypes, their eigenvalues, eigenvectors, variance components, and heritability were input into rMVP. Analysis of all traits was implemented in a single step based on the MLM. To maintain the false discovery rate < 5%, we used a stringent threshold: Bonferroni correction was applied by dividing the conventional thresh-
old of 5 × 10−8 by the number of tested phenotypes, which yielded an adjusted threshold of 5×10−8
420 = 1.19 × 10−10. For HDPs, the
threshold was 5×10−8
3 = 1.67 × 10−8.
Identification of lead SNPs and genomic loci. The SNP2GENE function of FUMA was utilized to identify lead SNPs and genomic loci. Initially, GWAS results from all phenotypes were integrated into a single summary statistics file (hereafter referred to as the ”minP file”) by identifying the minimum p value for each SNP across all phenotypes. We used a two-step clumping procedure. First, significant SNPs (i.e., the p value was p < 1.19 × 10−10 for IVPs and p < 1.67 × 10−8 for HDPs.) were clumped using-
 an LD threshold of r2 = 0.6 to derive independent significant SNPs. Thereafter, the independent significant SNPs were reclumped at an LD threshold of r2 = 0.1 to determine independent lead SNPs. A genomic locus was the minimal continuous segment that encompassed all SNPs (i.e., both GWAS markers and 1000 Genomes reference panel markers that surpassed the MAF cutoff) showing an r2 > 0.1 with the lead SNPs. Adjacent regions separated by ≤ 250 kb were combined into a single locus.
38

Identification of candidate genes. We performed gene mapping using the positional mapping function of the FUMA SNP2GENE module, with the maximum distance parameter maintained at the default setting of 10 kb. In instances where a lead SNP failed to be mapped to any gene, the GWAS Catalog database (https://www.ebi.ac.uk/gwas/home) or the LDtrait Tool developed by the National Institutes of Health (https://ldlink.nih.gov/?tab=ldtrait) was examined systematically to determine the presence of identica-
l or highly linked SNPs with previously documented gene associations. Querying GWAS catalog. All mapped genes were inspected manually in the GWAS Catalog database (The query date was November 2024). All traits that were reported previously to be associated with these genes were collected, with a specific focus on identifying documented ocular-related or pigmentation-related traits. Enrichment analysis. The enrichment analyses for GO Biological Process, KEGG, Reactome, WikiPathways, and GWAS Catalo-
g were all implemented using the GENE2FUNC module of FUMA.
4.7.3 Domestic pigeon
Phenotypes. Because the W + space was decomposed into 10 directions using ICA, 140 IVPs were utilized for GWAS analysis. For comparison, eight HDPs were extracted: gravel-type iris and pearl-type iris that served as case-control traits, the mean values of the three RGB channels in the foreground region, the mean values of the three HSV channels in the foreground region, and the mean value of the grayscale image in the foreground region. GWAS. Because the images of sequenced individuals were obtain-
ed from two separate captures, the GWAS analysis was performed using the MLM in the rMVP package, with batch effects and the top three genetic PCs included as covariates. To maintain the false discovery rate < 5%, the Bonferroni correction was performed by dividing the significance level by both the number of markers and the number of phenotypes. Due to the different numbers of phenotypes between IVPs (n = 140) and HDPs (n = 8), distinct thresholds were applied: for IVPs, the adjusted threshold wa-
s calculated as 0.05
12,113,557×140 = 2.95×10−11, and for HDPs as 0.05
12,113,557×8 = 5.16×10−10. Identification of candidate genes. LDBlock analysis was performed using LDBlockShow[147]. The input GWAS results file that was with the -InGWAS parameter contained the minimum p value (minP) for each SNP. The input annotation file that was specified with the -InGFF parameter provided functional annotations for protein-coding genes of the optimal transcript isoforms. The analyzed region spanned 150 kb upstream and downstream of the top SNP.
4.7.4 Rice
Phenotypes. Because the W + space was decomposed into 30 directions using ICA, 420 IVPs were included in the GWAS analysis. For comparison, 11 HDPs with relatively clear biological significance were extracted, specifically: histogram-based mean (M TEX), histogram-based variance (SE TEX), total projected area (TPA), height of the bounding rectangle (H), width of the bounding rectangle (W), ratio of total projected area to circumscribed box area (TBR), circumscribed box area (CBA), ratio
39

of total projected area to hull area (THR), ratio of perimeter to total projected area (PAR), perimeter (P), and green projected area (GPA). GWAS. GWAS analysis was performed using the MLM method in rMVP with the top three genetic principal components included as covariates. To maintain the false discovery rate < 5%, the Bonferroni correction was applied by dividing the significance level by both the number of markers and the number of phenotypes. Due to differences in phenotype counts between th-
e IVPs (n = 420) and HDPs (n = 11), distinct thresholds were adopted: for IVPs, the adjusted threshold was calculated as
0.05
4,321,306×420 = 2.75 × 10−11, and for HDPs as 0.05
4,321,306×11 = 1.05 × 10−9.
Identification of lead SNPs and genomic loci. Lead SNPs were determined by implementing the clumping function of PLINK2[148] to cluster SNPs that were associated significantly. For the IVPs, the parameters were configured as follows: --clump-p1 = 2.75 × 10−11, --clump-p2 = 1.16 × 10−8, --clump-kb = 300, and --r2 = 0.25. In parallel, the HDP parameters were established with --clump-p1 = 1.05 × 10−9, --clump-p2 = 1.16 × 10−8, --clump-kb = 300, and --r2 = 0.25. The minP file was utilized as the input-
 file for both analytical approaches. The region spanning 300 kb on each side of the lead SNP was defined as a locus. The parameter configurations were derived from prior research studies[129, 149, 150].
Identification of candidate genes. The coordinates of the lead SNPs were converted from MSU6.1 to MSU7 using the convtool provided in RiceVarMap v2.0 (http://ricevarmap.ncpgr.cn/)[151]. All potential candidate genes located within 100kb flanking regions of the lead SNP were identified systematically. The querying procedure was performed using PyRice, a unified programming API that enabled simultaneous access to all supported databases with standardized output formats[152]. Subsequently, manual val-
idation was conducted using the Rice Annotation Project Database (https://rapdb.dna.affrc.go.jp/index.html) for quality assurance.
4.7.5 Swine
Phenotypes. Due to the limited dataset size, the encoder for this species was trained using transfer learning with Swin Transformer that was pre-trained on the ImageNet dataset (swin large patch4 window12 384 22k)[135]. The W + space was decomposed into 5,880 principal components through PCA. Consequently, 5,880 IVPs were included in the GWAS analysis. For comparison, four HDPs were extracted, specifically: total fat content, average fat content, body length based on image and body height based on-
 image. GWAS. GWAS analysis was performed using the MLM method in rMVP with the top three genetic principal components were included as covariates. To maintain the false discovery rate < 5%, Bonferroni correction was applied by dividing the significance level by both the number of markers and the number of phenotypes. The significance threshold for the IVPs was calculated as 0.05
17,810,683×5,880 = 4.77 × 10−13
and for HDPs as 0.05
17,810,683×4 = 7.02 × 10−10.
Identification of lead SNPs and genomic loci. The clump function of PLINK2 was utilized to identify lead SNP by applying the specific parameters (--clump-p1 = 4.77 × 10−13, --clump-p2 = 2.81 × 10−9, --clump-kb = 500, and --r2 = 0.1), and
40

the minP file served as the input for analysis. A genomic locus was defined as a 500 kb region spanning both sides of the lead SNP.
Identification of candidate genes. Genes located within 500 kb upstream and downstream of the lead SNP were considered potential candidate genes. The entire query process was conducted on the IAnimal database (https://ianimal.pro/ index)[153].
Correspondence and requests for materials. Correspondence and requests for materials should be addressed to Shuhong Zhao.
Declarations
Funding
This work was supported by the National Natural Science Foundation of China [32221005, 32494801], the National Key Research and Development Program of China [2021YFD1300800], the Fundamental Research Funds for the Central Universities [2662023PY008], the earmarked fund for CARS [CARS-35], and Agricultural Science and Technology Major Project.
Conflict of interest
The authors declare no competing interests.
Consent for publication
Not applicable
Data availability
The data will be released publicly upon the article’s publication.
Materials availability
Not applicable
Code availability
The code will be released publicly upon the article’s publication.
Author contribution
S.H.Z., X.L.L., X.Y.L., L.F., and X.X. conceived the study; X.L.L. and X.X. designed the experiments; Y.F.L. performed the data collection and analyses under the assistance and guidance from Y.L., M.L.Q., Z.H., S.L.Z., L.L.Y, Y.H.F., J.Y.X., D.Y., X.H., Y.Q., T.F.J., W.N.Y., X.L.L., and S.H.Z.; X.X. developed and evaluated the model under the assistance and guidance from H.H.Z., X.L. and X.H.Y., and X.Y.L.; Y.F.L. and X.X. drafted the paper, X.L.L., L.F., X.Y.L., and S.H.Z. modified the paper; all-
 authors reviewed and approved the final manuscript.
41

References
[1] Consortium, U.B.W.-G.S., et al.: Whole-genome sequencing of 490,640 uk biobank participants. Nature 645(8081), 692 (2025) https://doi.org/10.1038/ s41586-025-09272-9
[2] Krizhevsky, A., Sutskever, I., Hinton, G.E.: Imagenet classification with deep convolutional neural networks. Adv. Neural Inf. Process. Syst. 25 (2012) https: //doi.org/10.1145/3065386
[3] Bengio, Y., Courville, A., Vincent, P.: Representation learning: a review and new perspectives. IEEE Trans. Pattern Anal. Mach. Intell. 35(8), 1798–1828 (2013) https://doi.org/10.1109/tpami.2013.50
[4] Chen, X., Fan, H., Girshick, R., He, K.: Improved baselines with momentum contrastive learning. Preprint at arXiv (2020) https://doi.org/10.48550/arXiv. 2003.04297
[5] Chen, T., Kornblith, S., Norouzi, M., Hinton, G.: A simple framework for contrastive learning of visual representations. In: Proceedings of the 37th International Conference on Machine Learning (ICML). Proceedings of Machine Learning Research, vol. 119, pp. 1597–1607. PMLR, Virtual (2020). https: //doi.org/10.5555/3524938.3525087 . International Machine Learning Society
[6] He, K., Chen, X., Xie, S., Li, Y., Doll ́ar, P., Girshick, R.: Masked autoencoders are scalable vision learners. In: Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), pp. 16000–16009. IEEE Computer Society, New Orleans, LA, USA (2022). https://doi.org/10.1109/ CVPR52688.2022.01553 . IEEE/CVF
[7] Klibaite, U., Li, T., Aldarondo, D., Akoad, J.F.,  ̈Olveczky, B.P., Dunn, T.W.: Mapping the landscape of social behavior. Cell 188(8), 2249–2266 (2025) https: //doi.org/10.1016/j.cell.2025.01.044
[8] Saunders, R.A., Allen, W.E., Pan, X., Sandhu, J., Lu, J., Lau, T.K., Smolyar, K., Sullivan, Z.A., Dulac, C., Weissman, J.S., et al.: Perturb-multimodal: A platform for pooled genetic screens with imaging and sequencing in intact mammalian tissue. Cell (2025) https://doi.org/10.1016/j.cell.2025.05.022
[9] Yun, T., Cosentino, J., Behsaz, B., McCaw, Z.R., Hill, D., Luben, R., Lai, D., Bates, J., Yang, H., Schwantes-An, T.-H., et al.: Unsupervised representation learning on high-dimensional clinical data improves genomic discovery and prediction. Nat. Genet. 56(8), 1604–1613 (2024) https://doi.org/10.1038/ s41588-024-01831-6
[10] Kirchler, M., Konigorski, S., Norden, M., Meltendorf, C., Kloft, M., Schurmann,
42

C., Lippert, C.: transfergwas: Gwas of images using deep transfer learning. Bioinformatics 38(14), 3621–3628 (2022) https://doi.org/10.1093/bioinformatics/ btac369
[11] Xie, Z., Zhang, T., Kim, S., Lu, J., Zhang, W., Lin, C.-H., Wu, M.-R., Davis, A., Channa, R., Giancardo, L., et al.: igwas: Image-based genome-wide association of self-supervised deep phenotyping of retina fundus images. PLoS Genet. 20(5), 1011273 (2024) https://doi.org/10.1371/journal.pgen.1011273
[12] Bonazzola, R., Ferrante, E., Ravikumar, N., Xia, Y., Keavney, B., Plein, S., Syeda-Mahmood, T., Frangi, A.F.: Unsupervised ensemble-based phenotyping enhances discoverability of genes related to left-ventricular morphology. Nat. Mach. Intell. 6(3), 291–306 (2024) https://doi.org/10.1038/s42256-024-00801-1
[13] Patel, K., Xie, Z., Yuan, H., Islam, S.M.S., Xie, Y., He, W., Zhang, W., Gottlieb, A., Chen, H., Giancardo, L., et al.: Unsupervised deep representation learning enables phenotype discovery for genetic association studies of brain imaging. Commun. Biol. 7(1), 414 (2024) https://doi.org/10.1038/s42003-024-06096-7
[14] Liu, J.J., Borsari, B., Li, Y., Liu, S.X., Gao, Y., Xin, X., Lou, S., Jensen, M., Garrido-Martin, D., Verplaetse, T.L., et al.: Digital phenotyping from wearables using ai characterizes psychiatric disorders and identifies genetic associations. Cell 188(2), 515–529 (2025) https://doi.org/10.1016/j.cell.2024.11.012
[15] Lee, T.-W.: Independent component analysis. In: Hyv ̈arinen, A., Karhunen, J., Oja, E. (eds.) Independent Component Analysis: Theory and Applications, pp. 27–66. Springer, Boston, MA (1998). https://doi.org/10.1007/ 978-1-4757-2851-4 2
[16] Greenacre, M., Groenen, P.J.F., Hastie, T., d’Enza, A.I., Markos, A., Tuzhilina, E.: Principal component analysis. Nat. Rev. Methods Primers 2(1), 100 (2022) https://doi.org/10.1038/s43586-022-00184-w
[17] H ̈ark ̈onen, E., Hertzmann, A., Lehtinen, J., Paris, S.: Ganspace: Discovering interpretable gan controls. Adv. Neural Inf. Process. Syst. 33, 9841–9850 (2020) https://doi.org/10.48550/arXiv.2004.02546
[18] Zhang, Z., Ersoz, E., Lai, C.-Q., Todhunter, R.J., Tiwari, H.K., Gore, M.A., Bradbury, P.J., Yu, J., Arnett, D.K., Ordovas, J.M., et al.: Mixed linear model approach adapted for genome-wide association studies. Nat. Genet. 42(4), 355360 (2010) https://doi.org/10.59350/f0mqf-dem95
[19] Haynes, W.: Bonferroni correction. In: Dubitzky, W., Wolkenhauer, O., Cho, K.H., Yokota, H. (eds.) Encyclopedia of Systems Biology, pp. 154–154. Springer, New York, NY (2013). https://doi.org/10.1007/978-1-4419-9863-7 1213
[20] Zekavat, S.M., Raghu, V.K., Trinder, M., Ye, Y., Koyama, S., Honigberg,
43

M.C., Yu, Z., Pampana, A., Urbut, S., Haidermota, S., et al.: Deep learning of the retina enables phenome-and genome-wide analyses of the microvasculature. Circulation 145(2), 134–150 (2022) https://doi.org/10.1161/circulationaha.121. 057709
[21] Zhao, B., Li, Y., Fan, Z., Wu, Z., Shu, J., Yang, X., Yang, Y., Wang, X., Li, B., Wang, X., et al.: Eye-brain connections revealed by multimodal retinal and brain imaging genetics. Nat. Commun. 15(1), 6064 (2024) https://doi.org/10. 1101/2023.02.16.23286035
[22] Andrade, P., Gazda, M.A., Arau ́jo, P.M., Afonso, S., Rasmussen, J.A., Marques, C.I., Lopes, R.J., Gilbert, M.T.P., Carneiro, M.: Molecular parallelisms between pigmentation in the avian iris and the integument of ectothermic vertebrates. PLoS Genet. 17(2), 1009404 (2021) https://doi.org/10.1371/journal. pgen.1009404
[23] Maclary, E.T., Phillips, B., Wauer, R., Boer, E.F., Bruders, R., Gilvarry, T., Holt, C., Yandell, M., Shapiro, M.D.: Two genomic loci control three eye colors in the domestic pigeon (columba livia). Mol. Biol. Evol. 38(12), 5376–5390 (2021) https://doi.org/10.1093/molbev/msab260
[24] Si, S., Xu, X., Zhuang, Y., Gao, X., Zhang, H., Zou, Z., Luo, S.-J.: The genetics and evolution of eye color in domestic pigeons (columba livia). PLoS Genet. 17(8), 1009770 (2021) https://doi.org/10.1371/journal.pgen.1009770
[25] Li, X., Chen, Z., Zhang, G., Lu, H., Qin, P., Qi, M., Yu, Y., Jiao, B., Zhao, X., Gao, Q., et al.: Analysis of genetic architecture and favorable allele usage of agronomic traits in a large collection of chinese rice accessions. Sci. China Life Sci. 63, 1688–1702 (2020) https://doi.org/10.1007/s11427-019-1682-6
[26] Sandhu, N., Subedi, S.R., Singh, V.K., Sinha, P., Kumar, S., Singh, S.P., Ghimire, S.K., Pandey, M., Yadaw, R.B., Varshney, R.K., et al.: Deciphering the genetic basis of root morphology, nutrient uptake, yield, and yield-related traits in rice under dry direct-seeded cultivation systems. Sci. Rep. 9(1), 9334 (2019) https://doi.org/10.1038/s41598-019-45770-3
[27] Lv, Y., Ma, J., Wang, Y., Wang, Q., Lu, X., Hu, H., Qian, Q., Guo, L., Shang, L.: Loci and natural alleles for low-nitrogen-induced growth response revealed by the genome-wide association study analysis in rice (oryza sativa l.). Front. Plant Sci. 12, 770736 (2021) https://doi.org/10.3389/fpls.2021.770736
[28] Koumoto, T., Shimada, H., Kusano, H., She, K.-C., Iwamoto, M., Takano, M.: Rice monoculm mutation moc2, which inhibits outgrowth of the second tillers, is ascribed to lack of a fructose-1, 6-bisphosphatase. Plant Biotechnol. 30(1), 47–56 (2013) https://doi.org/10.5511/plantbiotechnology.12.1210a
[29] Villaplana-Velasco, A., Pigeyre, M., Engelmann, J., Rawlik, K., Canela-Xandri,
44

O., Tochel, C., Lona-Durazo, F., Mookiah, M.R., Doney, A., Parra, E.J., et al.: Fine-mapping of retinal vascular complexity loci identifies notch regulation as a shared mechanism with myocardial infarction outcomes. Commun. Biol. 6(1), 523 (2023) https://doi.org/10.1038/s42003-023-04836-9
[30] Ortı ́n Vela, S., Beyeler, M.J., Trofimova, O., Iuliani, I., Vargas Quiros, J.D., Vries, V.A., Meloni, I., Elwakil, A., Hoogewoud, F., Liefers, B., et al.: Phenotypic and genetic characteristics of retinal vascular parameters and their association with diseases. Nat. Commun. 15(1), 9593 (2024) https://doi.org/10.1038/ s41467-024-52334-1
[31] Liu, F., Wollstein, A., Hysi, P.G., Ankra-Badu, G.A., Spector, T.D., Park, D., Zhu, G., Larsson, M., Duffy, D.L., Montgomery, G.W., et al.: Digital quantification of human eye color highlights genetic association of three new loci. PLoS Genet. 6(5), 1000934 (2010) https://doi.org/10.1371/journal.pgen.1000934
[32] Sulem, P., Gudbjartsson, D.F., Stacey, S.N., Helgason, A., Rafnar, T., Magnusson, K.P., Manolescu, A., Karason, A., Palsson, A., Thorleifsson, G., et al.: Genetic determinants of hair, eye and skin pigmentation in europeans. Nat. Genet. 39(12), 1443–1452 (2007) https://doi.org/10.1038/ng.2007.13
[33] Adhikari, K., Mendoza-Revilla, J., Sohail, A., Fuentes-Guajardo, M., Lampert, J., Chac ́on-Duque, J.C., Hurtado, M., Villegas, V., Granja, V., Acun ̃a-Alonzo, V., et al.: A gwas in latin americans highlights the convergent evolution of lighter skin pigmentation in eurasia. Nat. Commun. 10(1), 358 (2019) https://doi.org/ 10.1038/s41467-018-08147-0
[34] Tedja, M.S., Wojciechowski, R., Hysi, P.G., Eriksson, N., Furlotte, N.A., Verhoeven, V.J.M., Iglesias, A.I., Meester-Smoor, M.A., Tompson, S.W., Fan, Q., et al.: Genome-wide association meta-analysis highlights light-induced signaling as a driver for refractive error. Nat. Genet. 50(6), 834–848 (2018) https: //doi.org/10.1038/s41588-018-0127-7
[35] Ritchey, E.R., Zelinka, C., Tang, J., Liu, J., Code, K.A., Petersen-Jones, S., Fischer, A.J.: Vision-guided ocular growth in a mutant chicken model with diminished visual acuity. Exp. Eye Res. 102, 59–69 (2012) https://doi.org/10. 1016/j.exer.2012.07.001
[36] Jiang, X., Hysi, P.G., Khawaja, A.P., Mahroo, O.A., Xu, Z., Hammond, C.J., Foster, P.J., Welikala, R.A., Barman, S.A., Whincup, P.H., et al.: Gwas on retinal vasculometry phenotypes. PLoS Genet. 19(2), 1010583 (2023) https: //doi.org/10.1371/journal.pgen.1010583
[37] Gao, X.R., Huang, H., Kim, H.: Genome-wide association analyses identify 139 loci associated with macular thickness in the uk biobank cohort. Hum. Mol. Genet. 28(7), 1162–1172 (2019) https://doi.org/10.1093/hmg/ddy422
45

[38] Currant, H., Hysi, P., Fitzgerald, T.W., Gharahkhani, P., Bonnemaijer, P.W.M., Senabouth, A., Hewitt, A.W., Eye, U.B., Consortium, V., Consortium, I.G.G., Atan, D., et al.: Genetic variation affects morphological retinal phenotypes extracted from uk biobank optical coherence tomography images. PLoS Genet. 17(5), 1009497 (2021) https://doi.org/10.1371/journal.pgen.1009497
[39] Jensen, R.A., Sim, X., Smith, A.V., Li, X., Jakobsd ́ottir, J., Cheng, C.-Y., Brody, J.A., Cotch, M.F., Mcknight, B., Klein, R., et al.: Novel genetic loci associated with retinal microvascular diameter. Circ. Cardiovasc. Genet. 9(1), 45–54 (2016) https://doi.org/10.1161/CIRCGENETICS.115.001142
[40] Hysi, P.G., Choquet, H., Khawaja, A.P., Wojciechowski, R., Tedja, M.S., Yin, J., Simcoe, M.J., Patasova, K., Mahroo, O.A., Thai, K.K., et al.: Meta-analysis of 542,934 subjects of european ancestry identifies new genes and mechanisms predisposing to refractive error and myopia. Nat. Genet. 52(4), 401–407 (2020) https://doi.org/10.1038/s41588-020-0599-0
[41] Xue, Z., Yuan, J., Chen, F., Yao, Y., Xing, S., Yu, X., Li, K., Wang, C., Bao, J., Qu, J., et al.: Genome-wide association meta-analysis of 88,250 individuals highlights pleiotropic mechanisms of five ocular diseases in uk biobank. EBioMedicine 82 (2022) https://doi.org/10.1016/j.ebiom.2022.104161
[42] Han, X., Gharahkhani, P., Hamel, A.R., Ong, J.S., Renterı ́a, M.E., Mehta, P., Dong, X., Pasutto, F., Hammond, C., Young, T.L., et al.: Large-scale multitrait genome-wide association analyses identify hundreds of glaucoma risk loci. Nat. Genet. 55(7), 1116–1125 (2023) https://doi.org/10.1038/s41588-023-01428-5
[43] Cho, B.-J., Shin, J.Y., Yu, H.G.: Complications of pathologic myopia. Eye Contact Lens 42(1), 9–15 (2016) https://doi.org/10.1097/ICL.0000000000000223
[44] Tan, N.Y.Q., Tham, Y.-C., Ding, Y., Yasuda, M., Sabanayagam, C., Saw, S.-M., Wang, J.J., Mitchell, P., Wong, T.Y., Cheng, C.-Y.: Associations of peripapillary atrophy and fundus tessellation with diabetic retinopathy. Ophthalmology Retina 2(6), 574–581 (2018) https://doi.org/10.1016/j.oret.2017.09.019
[45] Chen, X.-Y., He, H.-L., Xu, J., Liu, Y.-X., Jin, Z.-B.: Clinical features of fundus tessellation and its relationship with myopia: a systematic review and metaanalysis. Ophthalmol. Ther. 12(6), 3159–3175 (2023) https://doi.org/10.1007/ s40123-023-00802-0
[46] Tian, J., Wu, J., Liu, W., Chen, K., Zhu, S., Lin, C., Liu, H., Hou, S., Huang, Z., Zhu, Y., et al.: Fundus tessellation and parapapillary atrophy, as ocular characteristics of spontaneously high myopia in macaques: The non-human primates eye study. Transl. Vis. Sci. Technol. 13(5), 8–8 (2024) https://doi.org/10.1167/ tvst.13.5.8
[47] Thomas, E.D., Timms, A.E., Giles, S., Harkins-Perry, S., Lyu, P., Hoang, T.,
46

Qian, J., Jackson, V.E., Bahlo, M., Blackshaw, S., et al.: Cell-specific cisregulatory elements and mechanisms of non-coding genetic disease in human retina and retinal organoids. Dev. Cell 57(6), 820–836 (2022) https://doi.org/ 10.1016/j.devcel.2022.02.018
[48] Jackson, V.E., Wu, Y., Bonelli, R., Owen, J.P., Scott, L.W., Farashi, S., Kihara, Y., Gantner, M.L., Egan, C., Williams, K.M., et al.: Multi-omic spatial effects on high-resolution ai-derived retinal thickness. Nat. Commun. 16(1), 1317 (2025) https://doi.org/10.1038/s41467-024-55635-7
[49] Han, X., Gharahkhani, P., Mitchell, P., Liew, G., Hewitt, A.W., MacGregor, S.: Genome-wide meta-analysis identifies novel loci associated with age-related macular degeneration. J. Hum. Genet. 65(8), 657–665 (2020) https://doi.org/ 10.1038/s10038-020-0750-x
[50] Scerri, T.S., Quaglieri, A., Cai, C., Zernant, J., Matsunami, N., Baird, L., Scheppke, L., Bonelli, R., Yannuzzi, L.A., Friedlander, M., et al.: Genome-wide analyses identify common variants associated with macular telangiectasia type 2. Nat. Genet. 49(4), 559–567 (2017) https://doi.org/10.1038/ng.3799
[51] Ohno-Matsui, K., Kawasaki, R., Jonas, J.B., Cheung, C.M.G., Saw, S.-M., Verhoeven, V.J.M., Klaver, C.C.W., Moriyama, M., Shinohara, K., Kawasaki, Y., et al.: International photographic classification and grading system for myopic maculopathy. Am. J. Ophthalmol. 159(5), 877–883 (2015) https://doi.org/10. 1016/j.ajo.2015.01.022
[52] Yan, Y.N., Wang, Y.X., Xu, L., Xu, J., Wei, W.B., Jonas, J.B.: Fundus tessellation: prevalence and associated factors: the beijing eye study 2011. Ophthalmology 122(9), 1873–1880 (2015) https://doi.org/10.1016/j.ophtha.2015.05. 031
[53] Lyu, H., Chen, Q., Hu, G., Shi, Y., Ye, L., Yin, Y., Fan, Y., Zou, H., He, J., Zhu, J., et al.: Characteristics of fundal changes in fundus tessellation in young adults. Front. Med. 8, 616249 (2021) https://doi.org/10.3389/fmed.2021.616249
[54] Cho, K.H., Kim, M.J., Jeon, G.J., Chung, H.Y.: Association of genetic variants for fabp3 gene with back fat thickness and intramuscular fat content in pig. Mol. Biol. Rep. 38, 2161–2166 (2011) https://doi.org/10.1007/s11033-010-0344-3
[55] Wang, B., Li, P., Zhou, W., Gao, C., Liu, H., Li, H., Niu, P., Zhang, Z., Li, Q., Zhou, J., et al.: Association of twelve candidate gene polymorphisms with the intramuscular fat content and average backfat thickness of chinese suhuai pigs. Animals 9(11), 858 (2019) https://doi.org/10.3390/ani9110858
[56] Fan, B., Onteru, S.K., Du, Z.-Q., Garrick, D.J., Stalder, K.J., Rothschild, M.F.: Genome-wide association study identifies loci for body composition and structural soundness traits in pigs. PLoS One 6(2), 14726 (2011) https://doi.org/10.
47

1371/journal.pone.0014726
[57] Li, L.-Y., Xiao, S.-J., Tu, J.-M., Zhang, Z.-K., Zheng, H., Huang, L.-B., Huang, Z.-Y., Yan, M., Liu, X.-D., Guo, Y.-M.: A further survey of the quantitative trait loci affecting swine body size and carcass traits in five related pig populations. Anim. Genet. 52(5), 621–632 (2021) https://doi.org/10.1111/age.13112
[58] Zhang, H., Zhuang, Z., Yang, M., Ding, R., Quan, J., Zhou, S., Gu, T., Xu, Z., Zheng, E., Cai, G., et al.: Genome-wide detection of genetic loci and candidate genes for body conformation traits in duroc× landrace× yorkshire crossbred pigs. Front. Genet. 12, 664343 (2021) https://doi.org/10.3389/fgene. 2021.664343
[59] Miao, Y., Zhao, Y., Wan, S., Mei, Q., Wang, H., Fu, C., Li, X., Zhao, S., Xu, X., Xiang, T.: Integrated analysis of genome-wide association studies and 3d epigenomic characteristics reveal the bmp2 gene regulating loin muscle depth in yorkshire pigs. PLoS Genet. 19(6), 1010820 (2023) https://doi.org/10.1371/ journal.pgen.1010820
[60] Oliphant, L.W.: Observations on the pigmentation of the pigeon iris. Pigment Cell Res. 1(3), 202–208 (1987) https://doi.org/10.1111/j.1600-0749.1987. tb00414.x
[61] Oliphant, L.W.: Crystalline pteridines in the stromal pigment cells of the iris of the great horned owl. Cell Tissue Res. 217, 387–395 (1981) https://doi.org/10. 1007/bf00233588
[62] Oliphant, L.W.: Pteridines and purines as major pigments of the avian iris. Pigment Cell Res. 1(2), 129–131 (1987) https://doi.org/10.1111/j.1600-0749. 1987.tb00401.x
[63] Hudon, J., Oliphant, L.W.: Reflective organelles in the anterior pigment epithelium of the iris of the european starling sturnus vulgaris. Cell Tissue Res. 280, 383–389 (1995) https://doi.org/10.1007/bf00307811
[64] Sweijd, N., Craig, A.J.F.K.: Histological basis of age-related changes in iris color in the african pied starling (spreo bicolor). The Auk, 53–59 (1991)
[65] Corbett, E.C., Brumfield, R.T., Faircloth, B.C.: The mechanistic, genetic and evolutionary causes of bird eye colour variation. Ibis 166(2), 560–589 (2024) https://doi.org/10.1111/ibi.13276
[66] Amyere, M., Vogt, T., Hoo, J., Brandrup, F., Bygum, A., Boon, L., Vikkula, M.: Kitlg mutations cause familial progressive hyper- and hypopigmentation. J. Investig. Dermatol. 131(6), 1234–1239 (2011) https://doi.org/10.1038/jid.2011. 29
48

[67] Picardo, M., Cardinali, G.: The genetic determination of skin pigmentation: Kitlg and the kitlg/c-kit pathway as key players in the onset of human familial pigmentary diseases. J. Investig. Dermatol. 131(6), 1182–1185 (2011) https:// doi.org/10.1038/jid.2011.67
[68] Wehrle-Haller, B.: The role of kit-ligand in melanocyte development and epidermal homeostasis. Pigment Cell Res. 16(3), 287–296 (2003) https://doi.org/10. 1034/j.1600-0749.2003.00055.x
[69] Guenther, C.A., Tasic, B., Luo, L., Bedell, M.A., Kingsley, D.M.: A molecular basis for classic blond hair color in europeans. Nat. Genet. 46(7), 748–752 (2014) https://doi.org/10.1038/ng.2991
[70] Cuell, A., Bansal, N., Cole, T., Kaur, M.R., Lee, J., Loffeld, A., Moss, C., O’donnell, M., Takeichi, T., Thind, C.K., et al.: Familial progressive hyper-and hypopigmentation and malignancy in two families with new mutations in kitlg. Clin. Exp. Dermatol. 40(8), 860–864 (2015) https://doi.org/10.1111/ced.12702
[71] Wang, J., Li, W., Zhou, N., Liu, J., Zhang, S., Li, X., Li, Z., Yang, Z., Sun, M., Li, M.: Identification of a novel mutation in the kitlg gene in a chinese family with familial progressive hyper-and hypopigmentation. BMC Med. Genomics 14(1), 12 (2021) https://doi.org/10.21203/rs.3.rs-28033/v1
[72] Wang, Z.-Q., Si, L., Tang, Q., Lin, D., Fu, Z., Zhang, J., Cui, B., Zhu, Y., Kong, X., Deng, M., et al.: Gain-of-function mutation of kit ligand on melanin synthesis causes familial progressive hyperpigmentation. Am. J. Hum. Genet. 84(5), 672–677 (2009) https://doi.org/10.1016/j.ajhg.2009.03.019
[73] Kim, B., Kim, D.S., Shin, J.-G., Leem, S., Cho, M., Kim, H., Gu, K.-N., Seo, J.Y., You, S.W., Martin, A.R., et al.: Mapping and annotating genomic loci to prioritize genes and implicate distinct polygenic adaptations for skin color. Nat. Commun. 15(1), 4874 (2024) https://doi.org/10.1038/s41467-024-49031-4
[74] Ren, S., Lyu, G., Irwin, D.M., Liu, X., Feng, C., Luo, R., Zhang, J., Sun, Y., Shang, S., Zhang, S., et al.: Pooled sequencing analysis of geese (anser cygnoides) reveals genomic variations associated with feather color. Front. Genet. 12, 650013 (2021) https://doi.org/10.3389/fgene.2021.650013
[75] Shen, Q., Zhou, J., Li, J., Zhao, X., Zheng, L., Bao, H., Wu, C.: Genomewide association study identifies candidate genes for stripe pattern feather color of rhode island red chicks. Genes 13(9), 1511 (2022) https://doi.org/10.3390/ genes13091511
[76] Talenti, A., Bertolini, F., Williams, J., Moaeen-ud-Din, M., Frattini, S., Coizet, B., Pagnacco, G., Reecy, J., Rothschild, M.F., Crepaldi, P., et al.: Genomic analysis suggests kitlg is responsible for a roan pattern in two pakistani goat breeds. J. Hered. 109(3), 315–319 (2018) https://doi.org/10.1093/jhered/esx093
49

[77] Miller, C.T., Beleza, S., Pollen, A.A., Schluter, D., Kittles, R.A., Shriver, M.D., Kingsley, D.M.: cis-regulatory changes in kit ligand expression and parallel evolution of pigmentation in sticklebacks and humans. Cell 131(6), 1179–1189 (2007) https://doi.org/10.1016/j.cell.2007.10.055
[78] Zazoseco, C., Serrodecastro, L., Vannierop, J.W., Morı ́n, M., Jhangiani, S., Verver, E.J.J., Schraders, M., Maiwald, N., Wesdorp, M., Venselaar, H.: Allelic mutations of kitlg, encoding kit ligand, cause asymmetric and unilateral hearing loss and waardenburg syndrome type 2. Am. J. Hum. Genet. 97(5), 647–660 (2015) https://doi.org/10.3410/f.725901771.793511836
[79] Moscatelli, G., Bovo, S., Schiavo, G., Mazzoni, G., Bertolini, F., Dall’Olio, S., Fontanesi, L.: Genome-wide association studies for iris pigmentation and heterochromia patterns in large white pigs. Anim. Genet. 51(3), 409–419 (2020) https://doi.org/10.1111/age.12930
[80] Morgan, M.D., Pairo-Castineira, E., Rawlik, K., Canela-Xandri, O., Rees, J., Sims, D., Tenesa, A., Jackson, I.J.: Genome-wide study of hair colour in uk biobank explains most of the snp heritability. Nat. Commun. 9(1), 5271 (2018) https://doi.org/10.1038/s41467-018-07691-z
[81] Zhuang, A., Yang, C., Liu, Y., Tan, Y., Bond, S.T., Walker, S., Sikora, T., Laskowski, A., Sharma, A., Haan, J.B., et al.: Sod2 in skeletal muscle: New insights from an inducible deletion model. Redox Biol. 47, 102135 (2021) https: //doi.org/10.1016/j.redox.2021.102135
[82] Wu, N., Zhai, X., Yuan, F., Li, J., Yu, N., Zhang, F., Li, D., Wang, J., Zhang, L., Shi, Y., et al.: Fasting glucose mediates the influence of genetic variants of sod2 gene on lean non-alcoholic fatty liver disease. Front. Genet. 13, 970854 (2022) https://doi.org/10.3389/fgene.2022.970854
[83] Hern ́andez-Guerrero, C., Hern ́andez-Ch ́avez, P., Romo-Palafox, I., BlancoMelo, G., Parra-Carriedo, A., P ́erez-Lizaur, A.: Genetic polymorphisms in sod (rs2070424, rs7880) and cat (rs7943316, rs1001179) enzymes are associated with increased body fat percentage and visceral fat in an obese population from central mexico. Arch. Med. Res. 47(5), 331–339 (2016) https://doi.org/10.1016/j. arcmed.2016.08.007
[84] Nezer, C., Moreau, L., Brouwers, B., Coppieters, W., Detilleux, J., Hanset, R., Karim, L., Kvasz, A., Leroy, P., Georges, M.: An imprinted qtl with major effect on muscle mass and fat deposition maps to the igf2 locus in pigs. Nat. Genet. 21(2), 155–156 (1999) https://doi.org/10.1038/5935
[85] Yang, S.-A.: Association between exonic polymorphism (rs629849, gly1619arg) of igf2r gene and obesity in korean population. J. Exerc. Rehabil. 11(5), 282 (2015) https://doi.org/10.12965/jer.150239
50

[86] Rohrschneider, K.: Determination of the location of the fovea on the fundus. Invest. Ophthalmol. Vis. Sci. 45(9), 3257–3258 (2004) https://doi.org/10.1167/ iovs.03-1157
[87] Jonas, R.A., Wang, Y.X., Yang, H., Li, J.J., Xu, L., Panda-Jonas, S., Jonas, J.B.: Optic disc-fovea angle: the beijing eye study 2011. PLoS One 10(11), 0141771 (2015) https://doi.org/10.1371/journal.pone.0141771
[88] Choi, J.A., Kim, J.-S., Park, H.-Y.L., Park, H., Park, C.K.: The foveal position relative to the optic disc and the retinal nerve fiber layer thickness profile in myopia. Invest. Ophthalmol. Vis. Sci. 55(3), 1419–1426 (2014) https://doi.org/ 10.1167/iovs.13-13604
[89] Amini, N., Nowroozizadeh, S., Cirineo, N., Henry, S., Chang, T., Chou, T., Coleman, A.L., Caprioli, J., Nouri-Mahdavi, K.: Influence of the disc–fovea angle on limits of rnfl variability and glaucoma discrimination. Invest. Ophthalmol. Vis. Sci. 55(11), 7332–7342 (2014) https://doi.org/10.1167/iovs.14-14962
[90] Haarman, A.E.G., Enthoven, C.A., Tideman, J.W.L., Tedja, M.S., Verhoeven, V.J.M., Klaver, C.C.W.: The complications of myopia: a review and metaanalysis. Invest. Ophthalmol. Vis. Sci. 61(4), 49–49 (2020) https://doi.org/10. 1167/iovs.61.4.49
[91] Hoffmann, E.M., Zangwill, L.M., Crowston, J.G., Weinreb, R.N.: Optic disk size and glaucoma. Surv. Ophthalmol. 52(1), 32–49 (2007) https://doi.org/10.5005/ jp/books/18037 3
[92] Voynov, A., Babenko, A.: Unsupervised discovery of interpretable directions in the gan latent space. In: Proceedings of the 37th International Conference on Machine Learning (ICML). Proceedings of Machine Learning Research, vol. 119, pp. 9786–9796. PMLR, Virtual (2020). https://doi.org/10.5555/3524938. 3525845 . International Machine Learning Society
[93] Ren, X., Yang, T., Wang, Y., Zeng, W.: Learning disentangled representation by exploiting pretrained generative models: A contrastive learning view. In: ICLR (2022). https://doi.org/10.48550/arXiv.2102.10543
[94] Wang, T., Zhang, B., Zhang, T., Gu, S., Bao, J., Baltrusaitis, T., Shen, J., Chen, D., Wen, F., Chen, Q., et al.: Rodin: A generative model for sculpting 3d digital avatars using diffusion. In: Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), pp. 4563–4573. IEEE Computer Society, Vancouver, BC, Canada (2023). https://doi.org/10.1109/CVPR52729. 2023.00443 . IEEE/CVF
[95] Anciukeviˇcius, T., Xu, Z., Fisher, M., Henderson, P., Bilen, H., Mitra, N.J., Guerrero, P.: Renderdiffusion: Image diffusion for 3d reconstruction, inpainting and generation. In: Proceedings of the IEEE/CVF Conference on Computer
51

Vision and Pattern Recognition (CVPR), pp. 12608–12618. IEEE Computer Society, Vancouver, BC, Canada (2023). https://doi.org/10.1109/CVPR52729. 2023.01213 . IEEE/CVF
[96] Jung, E., Luna, M., Park, S.H.: Conditional gan with 3d discriminator for mri generation of alzheimer’s disease progression. Pattern Recognit. 133, 109061 (2023) https://doi.org/10.1016/j.patcog.2022.109061
[97] Friedrich, P., Frisch, Y., Cattin, P.C.: Deep generative models for 3d medical image synthesis. In: Maier-Hein, K., Ourselin, S., Joskowicz, L. (eds.) Generative Machine Learning Models in Medical Image Computing, pp. 255–278. Springer, Cham, Switzerland (2024). https://doi.org/10.1007/978-3-031-80965-1 13
[98] Heymans, A., Couvreur, V., LaRue, T., Paez-Garcia, A., Lobet, G.: Granar, a computational tool to better understand the functional importance of monocotyledon root anatomy. Plant Physiol. 182(2), 707–720 (2020) https://doi.org/ 10.1104/pp.19.00617
[99] Buslaev, A., Iglovikov, V.I., Khvedchenya, E., Parinov, A., Druzhinin, M., Kalinin, A.A.: Albumentations: fast and flexible image augmentations. Information 11(2), 125 (2020) https://doi.org/10.3390/info11020125
[100] Taleb, A., Kirchler, M., Monti, R., Lippert, C.: Contig: Self-supervised multimodal contrastive learning for medical imaging with genetics. In: Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), pp. 20908–20921. IEEE Computer Society, New Orleans, LA, USA (2022). https://doi.org/10.1109/CVPR52688.2022.02024 . IEEE/CVF
[101] Browning, B.L., Zhou, Y., Browning, S.R.: A one-penny imputed genome from next-generation reference panels. Am. J. Hum. Genet. 103(3), 338–348 (2018) https://doi.org/10.1016/j.ajhg.2018.07.015
[102] Ronneberger, O., Fischer, P., Brox, T.: U-net: Convolutional networks for biomedical image segmentation. In: Proceedings of the 18th International Conference on Medical Image Computing and Computer-Assisted Intervention (MICCAI). Lecture Notes in Computer Science, vol. 9351, pp. 234–241. Springer, Munich, Germany (2015). https://doi.org/10.1007/978-3-319-24574-4 28 . MICCAI Society
[103] Chen, S., Zhou, Y., Chen, Y., Gu, J.: fastp: an ultra-fast all-in-one fastq preprocessor. Bioinformatics 34(17), 884–890 (2018) https://doi.org/10.1093/ bioinformatics/bty560
[104] Cheng, H., Concepcion, G.T., Feng, X., Zhang, H., Li, H.: Haplotype-resolved de novo assembly using phased assembly graphs with hifiasm. Nat. Methods 18(2), 170–175 (2021) https://doi.org/10.1038/s41592-020-01056-5
52

[105] Durand, N.C., Shamim, M.S., Machol, I., Rao, S.S.P., Huntley, M.H., Lander, E.S., Aiden, E.L.: Juicer provides a one-click system for analyzing loop-resolution hi-c experiments. Cell Syst. 3(1), 95–98 (2016) https://doi.org/10.1016/j.cels. 2016.07.002
[106] Zeng, X., Yi, Z., Zhang, X., Du, Y., Li, Y., Zhou, Z., Chen, S., Zhao, H., Yang, S., Wang, Y., et al.: Chromosome-level scaffolding of haplotype-resolved assemblies using hi-c data without reference genomes. Nat. Plants 10(8), 1184–1200 (2024) https://doi.org/10.1038/s41477-024-01755-3
[107] Durand, N.C., Robinson, J.T., Shamim, M.S., Machol, I., Mesirov, J.P., Lander, E.S., Aiden, E.L.: Juicebox provides a visualization system for hi-c contact maps with unlimited zoom. Cell Syst. 3(1), 99–101 (2016) https://doi.org/10.1016/j. cels.2015.07.012
[108] Li, H.: Minimap2: pairwise alignment for nucleotide sequences. Bioinformatics 34(18), 3094–3100 (2018) https://doi.org/10.1093/bioinformatics/bty191
[109] Vega, L.R., Mateyak, M.K., Zakian, V.A.: Getting to the end: telomerase access in yeast and humans. Nat. Rev. Mol. Cell Biol. 4(12), 948–959 (2003) https: //doi.org/10.1038/nrm1256
[110] Kurtz, S., Phillippy, A., Delcher, A.L., Smoot, M., Shumway, M., Antonescu, C., Salzberg, S.L.: Versatile and open software for comparing large genomes. Genome Biol. 5, 1–9 (2004) https://doi.org/10.1186/gb-2004-5-2-r12
[111] Xu, M., Guo, L., Gu, S., Wang, O., Zhang, R., Peters, B.A., Fan, G., Liu, X., Xu, X., Deng, L., et al.: Tgs-gapcloser: a fast and accurate gap closer for large genomes with low coverage of error-prone long reads. GigaScience 9(9), 094 (2020) https://doi.org/10.1093/gigascience/giaa094
[112] Walker, B.J., Abeel, T., Shea, T., Priest, M., Abouelliel, A., Sakthikumar, S., Cuomo, C.A., Zeng, Q., Wortman, J., Young, S.K., et al.: Pilon: an integrated tool for comprehensive microbial variant detection and genome assembly improvement. PLoS One 9(11), 112963 (2014) https://doi.org/10.1371/journal. pone.0112963
[113] Li, H.: Protein-to-genome alignment with miniprot. Bioinformatics 39(1), 014 (2023) https://doi.org/10.1093/bioinformatics/btad014
[114] Stanke, M., Keller, O., Gunduz, I., Hayes, A., Waack, S., Morgenstern, B.: Augustus: ab initio prediction of alternative transcripts. Nucleic Acids Res. 34(suppl 2), 435–439 (2006) https://doi.org/10.1093/nar/gkl200
[115] Burge, C., Karlin, S.: Prediction of complete gene structures in human genomic dna. J. Mol. Biol. 268(1), 78–94 (1997) https://doi.org/10.1006/jmbi.1997.0951
53

[116] Kim, D., Paggi, J.M., Park, C., Bennett, C., Salzberg, S.L.: Graph-based genome alignment and genotyping with hisat2 and hisat-genotype. Nat. Biotechnol. 37(8), 907–915 (2019) https://doi.org/10.1038/s41587-019-0201-4
[117] Pertea, M., Pertea, G.M., Antonescu, C.M., Chang, T.-C., Mendell, J.T., Salzberg, S.L.: Stringtie enables improved reconstruction of a transcriptome from rna-seq reads. Nat. Biotechnol. 33(3), 290–295 (2015) https://doi.org/10.1038/ nbt.3122
[118] Holt, C., Yandell, M.: Maker2: an annotation pipeline and genome-database management tool for second-generation genome projects. BMC Bioinformatics 12, 1–14 (2011) https://doi.org/10.1186/1471-2105-12-491
[119] Sun, S., Han, X., Han, Z., Liu, Q.: Chromosomal-scale genome assembly and annotation of the land slug (meghimatium bilineatum). Sci. Data 11(1), 35 (2024) https://doi.org/10.1038/s41597-023-02893-7
[120] Lowe, T.M., Eddy, S.R.: trnascan-se: a program for improved detection of transfer rna genes in genomic sequence. Nucleic Acids Res. 25(5), 955–964 (1997) https://doi.org/10.1093/nar/25.5.955
[121] Altschul, S.F., Gish, W., Miller, W., Myers, E.W., Lipman, D.J.: Basic local alignment search tool. J. Mol. Biol. 215(3), 403–410 (1990) https://doi.org/10. 32388/rhq6vj
[122] Griffiths-Jones, S., Moxon, S., Marshall, M., Khanna, A., Eddy, S.R., Bateman, A.: Rfam: annotating non-coding rnas in complete genomes. Nucleic Acids Res. 33(suppl 1), 121–124 (2005) https://doi.org/10.1093/nar/gki081
[123] Bu, D., Luo, H., Huo, P., Wang, Z., Zhang, S., He, Z., Wu, Y., Zhao, L., Liu, J., Guo, J., et al.: Kobas-i: intelligent prioritization and exploratory visualization of biological functions for gene enrichment analysis. Nucleic Acids Res. 49(W1), 317–325 (2021) https://doi.org/10.1093/nar/gkab447
[124] Jones, P., Binns, D., Chang, H.-Y., Fraser, M., Li, W., McAnulla, C., McWilliam, H., Maslen, J., Mitchell, A., Nuka, G., et al.: Interproscan 5: genome-scale protein function classification. Bioinformatics 30(9), 1236–1240 (2014) https: //doi.org/10.1093/bioinformatics/btu031
[125] Mistry, J., Finn, R.D., Eddy, S.R., Bateman, A., Punta, M.: Challenges in homology search: Hmmer3 and convergent evolution of coiled-coil regions. Nucleic Acids Res. 41(12), 121–121 (2013) https://doi.org/10.1093/nar/gkt263
[126] Li, H., Durbin, R.: Fast and accurate short read alignment with burrows–wheeler transform. Bioinformatics 25(14), 1754–1760 (2009) https://doi.org/10.1093/ bioinformatics/btp324
54

[127] Freed, D., Aldana, R., Weber, J.A., Edwards, J.S.: The sentieon genomics toolsa fast and accurate solution to variant calling from next-generation sequence data. BioRxiv, 115717 (2017) https://doi.org/10.1101/115717
[128] DePristo, M.A., Banks, E., Poplin, R., Garimella, K.V., Maguire, J.R., Hartl, C., Philippakis, A.A., Angel, G., Rivas, M.A., Hanna, M., McKenna, A., Fennell, T.J., Kernytsky, A.M., Sivachenko, A.Y., Cibulskis, K., Gabriel, S.B., Altshuler, D., Daly, M.J.: A framework for variation discovery and genotyping using nextgeneration dna sequencing data. Nature Genetics 43(5), 491–498 (2011) https: //doi.org/10.1038/ng.806
[129] Yang, W., Guo, Z., Huang, C., Duan, L., Chen, G., Jiang, N., Fang, W., Feng, H., Xie, W., Lian, X., et al.: Combining high-throughput phenotyping and genomewide association studies to reveal natural genetic variation in rice. Nat. Commun. 5(1), 5087 (2014) https://doi.org/10.1038/ncomms6087
[130] Isensee, F., Jaeger, P.F., Kohl, S.A.A., Petersen, J., Maier-Hein, K.H.: nnunet: a self-configuring method for deep learning-based biomedical image segmentation. Nat. Methods 18(2), 203–211 (2021) https://doi.org/10.1038/ s41592-020-01008-z
[131] Gjerlaug-Enger, E., Kongsro, J., Ødega ̊rd, J., Aass, L., Vangen, O.: Genetic parameters between slaughter pig efficiency and growth rate of different body tissues estimated by computed tomography in live boars of landrace and duroc. Anim. 6(1), 9–18 (2012) https://doi.org/10.1017/s1751731111001455
[132] Karras, T., Laine, S., Aila, T.: A style-based generator architecture for generative adversarial networks. In: 2019 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), pp. 4396–4405 (2019). https://doi.org/10.1109/ CVPR.2019.00453
[133] Karras, T., Aittala, M., Hellsten, J., Laine, S., Lehtinen, J., Aila, T.: Training generative adversarial networks with limited data. In: Proceedings of the 34th International Conference on Neural Information Processing Systems. NIPS ’20. Curran Associates Inc., Red Hook, NY, USA (2020). https://doi.org/10.5555/ 3495724.3496739
[134] Kim, H., Choi, Y., Kim, J., Yoo, S., Uh, Y.: Exploiting spatial dimensions of latent in gan for real-time image editing. In: Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), pp. 852–861. IEEE Computer Society, Virtual (2021). https://doi.org/10.1109/CVPR46437. 2021.00091 . IEEE/CVF
[135] Liu, Z., Lin, Y., Cao, Y., Hu, H., Wei, Y., Zhang, Z., Lin, S., Guo, B.: Swin transformer: Hierarchical vision transformer using shifted windows. In: Proceedings of the IEEE/CVF International Conference on Computer Vision (ICCV), pp. 10012–10022. IEEE Computer Society, Virtual (2021). https://doi.org/10.
55

1109/ICCV48922.2021.00986 . IEEE/CVF
[136] Li, L.H., Zhang, P., Zhang, H., Yang, J., Li, C., Zhong, Y., Wang, L., Yuan, L., Zhang, L., Hwang, J.-N., et al.: Grounded language-image pre-training. In: Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), pp. 10965–10975. IEEE Computer Society, New Orleans, LA, USA (2022). https://doi.org/10.1109/CVPR52688.2022.01069 . IEEE/CVF
[137] Russakovsky, O., Deng, J., Su, H., Krause, J., Satheesh, S., Ma, S., Huang, Z., Karpathy, A., Khosla, A., Bernstein, M., et al.: Imagenet large scale visual recognition challenge. Int. J. Comput. Vis. 115(3), 211–252 (2015) https://doi. org/10.1007/s11263-015-0816-y
[138] Zhang, R., Isola, P., Efros, A.A., Shechtman, E., Wang, O.: The unreasonable effectiveness of deep features as a perceptual metric. In: Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition (CVPR), pp. 586–595. IEEE Computer Society, Salt Lake City, UT, USA (2018). https://doi.org/10. 1109/CVPR.2018.00068 . IEEE
[139] Liu, S., Deng, W.: Very deep convolutional neural network based image classification using small training sample size. In: 2015 3rd IAPR Asian Conference on Pattern Recognition (ACPR), pp. 730–734 (2015). https://doi.org/10.1109/ ACPR.2015.7486599
[140] Hyv ̈arinen, A., Oja, E.: Independent component analysis: algorithms and applications. Neural Netw. 13(4-5), 411–430 (2000) https://doi.org/10.1016/ s0893-6080(00)00026-5
[141] Langlois, D., Chartier, S., Gosselin, D.: An introduction to independent component analysis: Infomax and fastica algorithms. Tutorials Quant. Methods Psychol. 6(1), 31–38 (2010) https://doi.org/10.20982/tqmp.06.1.p031
[142] Hao, J., Ho, T.K.: Machine learning made easy: a review of scikit-learn package in python programming language. J. Educ. Behav. Stat. 44(3), 348–361 (2019) https://doi.org/10.3102/1076998619832248
[143] Shen, Y., Zhou, B.: Closed-form factorization of latent semantics in gans. In: Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), pp. 1532–1540. IEEE Computer Society, Virtual (2021). https://doi.org/10.1109/CVPR46437.2021.00158 . IEEE/CVF
[144] Song, Y., Zhang, J., Sebe, N., Wang, W.: Householder projector for unsupervised latent semantics discovery. In: Proceedings of the IEEE/CVF International Conference on Computer Vision (ICCV), pp. 7712–7722. IEEE Computer Society, Paris, France (2023). https://doi.org/10.1109/ICCV51070.2023.00709 . IEEE/CVF
56

[145] Yin, L., Zhang, H., Tang, Z., Xu, J., Yin, D., Zhang, Z., Yuan, X., Zhu, M., Zhao, S., Li, X., et al.: rmvp: a memory-efficient, visualization-enhanced, and parallel-accelerated tool for genome-wide association study. Genomics Proteomics Bioinformatics 19(4), 619–628 (2021) https://doi.org/10.1016/j.gpb. 2020.10.007
[146] Yin, L., Zhang, H., Tang, Z., Yin, D., Fu, Y., Yuan, X., Li, X., Liu, X., Zhao, S.: Hiblup: an integration of statistical models on the blup framework for efficient genetic evaluation using big genomic data. Nucleic Acids Res. 51(8), 3501–3512 (2023) https://doi.org/10.1093/nar/gkad074
[147] Dong, S.-S., He, W.-M., Ji, J.-J., Zhang, C., Guo, Y., Yang, T.-L.: Ldblockshow: a fast and convenient tool for visualizing linkage disequilibrium and haplotype blocks based on variant call format files. Brief. Bioinform. 22(4), 227 (2021) https://doi.org/10.1093/bib/bbaa227
[148] Purcell, S., Neale, B., Todd-Brown, K., Thomas, L., Ferreira, M.A.R., Bender, D., Maller, J., Sklar, P., De Bakker, P.I.W., Daly, M.J., et al.: Plink: a tool set for whole-genome association and population-based linkage analyses. Am. J. Hum. Genet. 81(3), 559–575 (2007) https://doi.org/10.1086/519795
[149] Yang, W., Guo, Z., Huang, C., Wang, K., Jiang, N., Feng, H., Chen, G., Liu, Q., Xiong, L.: Genome-wide association study of rice (oryza sativa l.) leaf traits with a high-throughput leaf scorer. J. Exp. Bot. 66(18), 5605–5615 (2015) https: //doi.org/10.1093/jxb/erv100
[150] Guo, Z., Yang, W., Chang, Y., Ma, X., Tu, H., Xiong, F., Jiang, N., Feng, H., Huang, C., Yang, P., et al.: Genome-wide association studies of image traits reveal genetic architecture of drought resistance in rice. Mol. Plant 11(6), 789805 (2018) https://doi.org/10.1016/j.molp.2018.03.018
[151] Zhao, H., Li, J., Yang, L., Qin, G., Xia, C., Xu, X., Su, Y., Liu, Y., Ming, L., Chen, L.-L., et al.: An inferred functional impact map of genetic variants in rice. Mol. Plant 14(9), 1584–1599 (2021) https://doi.org/10.1016/j.molp.2021.06.025
[152] Do, Q., Bich Hai, H., Larmande, P.: Pyrice: a python package for querying oryza sativa databases. Bioinformatics 37(7), 1037–1038 (2021) https://doi.org/10. 1093/bioinformatics/btaa694
[153] Fu, Y., Liu, H., Dou, J., Wang, Y., Liao, Y., Huang, X., Tang, Z., Xu, J., Yin, D., Zhu, S., et al.: Ianimal: a cross-species omics knowledgebase for animals. Nucleic Acids Res. 51(D1), 1312–1324 (2023) https://doi.org/10.1093/nar/gkac936
Supplementary information.
57

Fig. S1: Overview of the Human Retinal Fundus Dataset, related to Figure 1, Figure 2 and Methods ”Data Collection and Preprocessing” section. One hundred random images from dataset. Retinal fundus images of left and right eyes from UKB and Kaggle datasets were integrated for model training.
58

Fig. S2: Overview of the Domestic Pigeon Iris Dataset, related to Figure 1, Figure 2 and Methods ”Data Collection and Preprocessing” section. One hundred random images from dataset. Iris segmented and scaled uniformly. The dataset is dominated by the gravel and pearl types; the bull type is less frequent.
59

Fig. S3: Overview of the Potted Rice Dataset, related to Figure 1, Figure 2 and Methods ”Data Collection and Preprocessing” section. One hundred random images from dataset. 22 developmental timepoints from seedling to maturity stages. Rice plants were segmented and centered in the middle of the image.
60

Fig. S4: Overview of the Swine CT Dataset, related to Figure 1, Figure 2 and Methods ”Data Collection and Preprocessing” section. One hundred random images from dataset. Pixel intensity in the projection directly correlates with fat deposition density. The image highlights two main depots: backfat and abdominal (leaf) fat.
61

Fig. S5: GWAS Catalog enrichment analysis, related to Figure 2. Enrichment analysis was performed with the
GENE2FUNC module in FUMA.
62

Fig. S6: Enrichment analyses, related to Figure 2. In the enrichment analysis performed with the GENE2FUNC module
in FUMA, the top-ranked term based on p value was related to pigmentation. A, Enrichment analyses of GO Biological Process.
B, Enrichment analyses of KEGG. C, Enrichment analyses of RECTOME. D, Enrichment analyses of WikiPathways.
63

Fig. S7: Comparison of genetic discovery power between AIPheno and other deep learning-based phenotyping methods in Homo sapiens (human), related to Figure 2. A, a self-supervised learning model (iGWAS); and B, 11 ImageNet pre-trained transfer learning models (e.g., alexnet) and their Ensemble (the union of results from all 11 models). A lead SNP was considered to overlap with a locus if it fell within that locus. Bottom right bar: Percentage of AIPheno loci that overlapped with reported lead SNP-
s. Top right bar: Percentage of AIPhenospecific loci.
64

Fig. S8: Traditional classification of domestic pigeon irises, related to Figure 2. In domestic pigeons, three principal types of iris coloration are observed: the wild-type ”gravel,” which is yellow to orange; the white ”pearl”; and the black ”bull” eye.
65

Fig. S9: Abundant image-variation phenotypes detected by AIPheno in domestic pigeon, rice, and swine, related to Figure 2. A, For domestic pigeon, AIPheno detected image-variation phenotypes such as the orientation of the eyeball and pupil, pupil size, and iris color and texture. B, For rice, environmental variations, such as plant illumination, and biologically meaningful image variations, including plant architecture, stem and leaf morphology, color, and texture, detected by AIPheno. C, AIPheno-
 detected not only changes in fat content and distribution but also alterations in body length and body shape.
66

Fig. S10: Comparison of genetic discovery power between AIPheno and human-defined phenotypes at 22 time points, related to Figure 2. At most time points, more genetic loci were discovered by AIPheno. AIPheno Overlap: Loci where lead SNPs from human-defined phenotypes lie within AIPheno loci. AIPheno Unique: Loci unique to AIPheno. Human-defined Overlap: Loci where lead SNPs from AIPheno lie within Human-defined phenotypes loci. Human-defined Unique: Loci unique to Human-defined phenotypes.
67

Fig. S11: Human-defined phenotypes also identified the KITLG-TMTC3 locus, related to Figure 4. This locus was also identified by two human-defined phenotypes: the mean R (redness) and V (brightness) channel values. However, it is difficult to recognize that it is related to melanin accumulation solely through the definitions of these phenotypes. The significance thresholds of AIPheno were adjusted using a Bonferroni correction for the number of phenotypes (poriginal = 4.13 × 10−9, pcorrection = 2-
.95 × 10−11 for image-variation phenotypes and pcorrection = 5.16 × 10−10 for human-defined phenotypes).
68

Fig. S12: Interpretability of image-variation phenotypes in Sankey diagram, related to Figure 4. The image-variation phenotypes exhibiting the most significant association (i.e., the smallest p value) with lead SNPs not previously reported in the GWAS Catalog database for associations with pigmentation and eye-related traits were selected.
69

Fig. S13: Identification of KITLG-TMTC3 locus in both gravel and pearl iris subpopulations with IVP(v3, 10), related to Discussion. A, Manhattan plot of the Gravel subpopulation (n = 328). There are two threshold lines in the Manhattan plot (poriginal = 4.17 × 10−9, pcorrection = 2.98 × 10−11). B, Manhattan plot of the Pearl subpopulation (n = 311). There are two threshold lines in the Manhattan plot (poriginal = 4.19 × 10−9, pcorrection = 2.99 × 10−11). C, Interpretability analysis of IVP(v3, 10-
) within the gravel and pearl subgroups. It can be seen that differences in melanin levels exist in both the gravel and pearl groups. The std image further reveals that this variation occurs across the entire iris region, excluding the pupil and light spots.
70

Fig. S14: Fine-grained image-variation phenotypes captured by AIPheno in the domestic pigeon, related to Discussion. A, Interpretability Analysis of fine-grained image-variation phenotypes. B, Pearson correlation coefficients between fine-grained image-variation phenotypes and human-defined phenotypes. The imagevariation phenotypes exhibit low correlation with the human-defined phenotypes, as they capture fine-grained features independent of color, whereas human-defined phenotypes primarily captu-
re global color variations.
71

Fig. S15: Complex image variation quantified by AIPheno in rice, related to Discussion. A, Interpretability analysis of IVP(v5, 12) in rice. The significance threshold was adjusted using a Bonferroni correction for the number of IVPs (poriginal = 1.16 × 10−8, pcorrection = 2.75 × 10−11). The plant darkened from lightto dark-green, while leaf tips and stems yellowed, which is consistent with drought stress. As shown in the std image, image variation is distributed throughout the entire plant. Also-
 see a dynamic video included in the Data S18. B, Interpretability analysis of IVP(v8, 11) in rice. The significance threshold was adjusted using a Bonferroni correction for the number of IVPs (poriginal = 1.16 × 10−8, pcorrection = 2.75 × 10−11). Rice plants transitioned gradually from verdant green to mature yellow with increasing stem and leaf density. As shown in the std image, image variation is distributed throughout the entire plant. Also see a dynamic video included in the Data S19.
72

Fig. S16: The overall of the proposed AIPheno framework based on Encoder-Generator architecture, related to Figure 1 and Methods ”The Encoder-Generator Framework of AIPheno” section. The framework consists of two core modules: the Encoder and the Generator. Specifically, the overall structure of the Encoder can be divided into two components. The first component comprises global and local image representation pathways, while the second component is composed of L learnable tokens (∈ RL×C ). Within-
 the first component of the Encoder, the input image is encoded by a Backbone (which can adopt CNN-based or Transformer-based network structure). The Backbone generates multi-resolution local image features through different layers and a global image feature after passing through an AVG Pooling layer, where CONV denotes a convolution layer. The second component utilizes a Cross-Modality Multi-Head Attention (X-MHA) mechanism to interact with the local image information (where the UP represents an -
upsampling layer for aligning spatial resolutions), then fuses it with the global image representation to finally obtain the encoded representation in the w+ space (∈ RL×C ). Details within the X-MHA block are depicted on the Fig. 4. For Generator, an unconditional StyleGAN2 style network is selected to construct the generator. Specifically, a series of affine layers Ai (where i = 1, 2, ..., L) and a synthesis network is utilized to generate the reconstructed input image from w+ ∈ RL×C .
73

Fig. S17: The architecture of the Cross-Modality Multi-Head Attention (XMHA) block, related to Figure 1 and Methods ”The Encoder-Generator Framework of AIPheno” section. The X-MHA block primarily serves to enable cross-modality information interaction between local image features (∈ RH×W ×C ) with L learnable tokens (∈ RL×C ), facilitating mutual feature enhancement through bidirectional attention mechanisms. The main module in X-MHA is two Multi-Head Cross-Attention blocks, following the common -
routine in transformer model. Specifically, the flattened local feature ∈ RHW ×C of the image will function as Query and Key-Value respectively to participate in the cross-fusion process, each head computes the context vectors of one modality by attending to the other modality. Similarly, the L learnable tokens will also serve as Query and Key-Value respectively to participate in the information interaction. Finally, the output of this block is the local fused features (∈ RH×W ×C ) and L learnable-
 tokens (∈ RL×C ) after interactive fusion, with their dimensionality remaining consistent with the input.
74

Fig. S18: The overall phenotype extraction process, related to Figure 1 and Methods ”The Encoder-Generator Framework of AIPheno” section. A, illustrates the training of an unconditional Synthesis Network to fit the distribution of input images. Specifically, a random sample z from the standard normal distribution N (0, 1) is mapped to w ∈ RC space via the Mapping Network, corresponding to a generated image. B, involves sampling 100,000 times from N (0, 1) to simulate and generate a dataset of 100-
,000 images that conform to the original bio-image distribution. This generated set is then used to discover mutually independent directions (∈ RK×C ), where K denotes the number of directions and C represents their dimensionality (see methods). C, describes that for any image in the population subject to genetic analysis, a trained Encoder network is employed to obtain its representation in W + ∈ RL×C space. The L-layer features in W + space are then dot-multiplied with the K directions to derive-
 projection values, which serve as the final image phenotypes (∈ RL×K ).
75

Fig. S19: Images generated unconditionally from retina fundus of human, related to Figure 1 and Methods ”The Encoder-Generator Framework of AIPheno” section. In the AIPheno framework, the Generator synthesizes highquality human retinal fundus images unconditionally.
76

Fig. S20: Images generated unconditionally from iris of domestic pigeon, related to Figure 1 and Methods ”The Encoder-Generator Framework of AIPheno” section. In the AIPheno framework, the Generator synthesizes highquality domestic pigeon iris images unconditionally.
77

Fig. S21: Images generated unconditionally from potted rice, related to Figure 1 and Methods ”The Encoder-Generator Framework of AIPheno” section. In the AIPheno framework, the Generator synthesizes high-quality potted rice images unconditionally.
78

Fig. S22: Images generated unconditionally from swine CT, related to Figure 1 and Methods ”The Encoder-Generator Framework of AIPheno” section. In the AIPheno framework, the Generator synthesizes high-quality swine CT images unconditionally.
79

Fig. S23: High-quality reconstruction of the original image, related to Figure 1 and Methods ”Model Training” section. Generated images from four species show that the Encoder exhibits robust capability in restoring the overall image information, with consistent preservation of fine details.
80

Table S2: Lead SNPs and genomic loci in rice at T13, related to Figure 2
Lead SNP
(MSU6.1)
Lead SNP
(MSU7) Chr Position
(MSU6.1)
Position
(MSU7) p value Locus Start
(MSU7)
End
(MSU7)
sf0113368830 vg0113369856 1 13368830 13369856 2.41 × 10−13 1 13069856 13669856
sf0114732944 vg0114733970 1 14732944 14733970 1.94 × 10−13 2 14433970 15033970
sf0115877533 vg0115878559 1 15877533 15878559 1.72 × 10−12 3 15578559 16178559
sf0118143691 vg0118144737 1 18143691 18144737 1.02 × 10−11 4 17844737 18444737
sf0136973473 vg0136974516 1 36973473 36974516 1.10 × 10−11 5 36674516 37274516
sf0137595036 vg0137596079 1 37595036 37596079 1.89 × 10−13 6 37296079 37896079
sf0323937770 vg0323939596 3 23937770 23939596 1.75 × 10−11 7 23639596 24239596
sf0327583070 vg0327590017 3 27583070 27590017 1.92 × 10−11 8 27290017 27890017
sf0426935488 vg0427120618 4 26935488 27120618 7.04 × 10−13 9 26820618 27420618
sf0428557370 vg0428742518 4 28557370 28742518 8.05 × 10−12 10 28442518 29042518
sf0428988813 vg0429173951 4 28988813 29173951 7.79 × 10−12 11 28873951 29473951
sf0431202219 vg0431387321 4 31202219 31387321 1.54 × 10−12 12 31087321 31687321
sf0501670937 vg0501670953 5 1670937 1670953 2.39 × 10−11 13 1370953 1970953
sf0504419821 vg0504419844 5 4419821 4419844 2.51 × 10−11 14 4119821 4719821
sf0601367485 vg0601368484 6 1367485 1368484 9.00 × 10−12 15 1068484 1668484
sf0719790827 vg0719791820 7 19790827 19791820 1.13 × 10−11 16 19491820 20091820
sf0809027844 vg0809028840 8 9027844 9028840 6.23 × 10−12 17 8728840 9328840
sf0824675627 vg0824678341 8 24675627 24678341 5.40 × 10−12 18 24378341 24978341
sf0905061479 vg0905062479 9 5061479 5062479 8.33 × 10−13 19 4762479 5362479
sf0915724607 vg0915725608 9 15724607 15725608 8.09 × 10−12 20 15425608 16025608
sf0922835847 vg0922836328 9 22835847 22836328 2.32 × 10−12 21 22536328 23136328
sf1010959303 vg1011030483 10 10959303 11030483 5.76 × 10−13 22 10730483 11330483
sf1014955970 vg1015027204 10 14955970 15027204 1.46 × 10−13 23 14727204 15327204
This table summarizes the lead SNPs identified in rice at T13, including their genomic positions, associated loci,
and flanking regions. For each lead SNP, both the identifier and genomic coordinates are provided with respect
to the MSU6.1 and MSU7 reference genomes.
81

Table S3: Information about all potential candidate genes within 200 kb (100 kb upstream and downstream) of the lead SNP
sf0113368830, related to Figure 2
RAP Locus ID Description RAP-DB CGSNL Oryzabase
Os01g0337900 Lipoamide dehydrogese 2, Paralog of
OsLPD1 (lipoamide dehydrogese 1)
OsLPD2 LPD2 ptPDC-E3, OsptPDC-E3,
OsLPD2
Os01g0338000 Small GTPase, Rice storage proteins
proglutelin and alpha-globulin export from
the endoplasmic reticulum in endosperm
OsSar1a SAR1A OsARL1e, ARL1e,
OsSar1b, Sar1b, OsSar1a,
Sar1a
Os01g0338150 Hypothetical gene
Os01g0338100 Similar to Transcription initiation factor
IID, 18kD subunit family protein
Os01g0338200 Mov34/MPN/PAD-1 family protein
Os01g0338401 Hypothetical gene
Os01g0338600 Similar to cysteine sulfite desulfise/cysteine
desulfurase and related enzymes
Os01g0339001 Non-protein coding transcript
Os01g0339200
Os01g0339400 Conserved hypothetical protein OsCLE102, CLE102
Os01g0339500 Similar to No apical meristem protein NAC30 ONAC030, ONAC30
Os01g0339550
Os01g0339600 Proteasome assembly chaperone 3 domain
containing protein
Os01g0339851 Conserved hypothetical protein
Os01g0339900 Thioredoxin domain 2 containing protein PDIL2-2 PDIL2;2, OsPDIL2;2,
OsPDIL2-2, OsTrx02,
Trx02, OsTrx2, Trx2
Os01g0339950 Non-protein coding transcript
Os01g0340000 MADS92 OsMADS92
82

Table S3 – continued
RAP Locus ID Description RAP-DB CGSNL Oryzabase
Os01g0340100 Transcription factor, MADS-box domain
containing protein
MADS93 OsMADS93
Os01g0340200 MADS94 OsMADS94
Os01g0340400 Transcription factor, MADS-box domain
containing protein
MADS95 OsMADS95
Os01g0340600 Conserved hypothetical protein
Os01g0340801 Non-protein coding transcript
Os01g0340900
Os01g0341000 Conserved hypothetical protein
Os01g0341100
Os01g0341200 Tubulin, conserved site domain containing
protein
Os01g0341300 Conserved hypothetical protein
83

Table S4: Information about all potential candidate genes within 200 kb (100 kb upstream and downstream) of the lead SNP
sf0114732944, related to Figure 2
RAP Locus ID Description RAP-DB CGSNL Oryzabase
Os01g0360466
Os01g0360600 Dephospho-CoA kise family protein
Os01g0361000 Conserved hypothetical protein
Os01g0361500 Phospholipid/glycerol acyltransferase
domain containing protein
PES1B OsPES1b
Os01g0361700 Conserved hypothetical protein
Os01g0361800 Hypothetical conserved gene
Os01g0362000 Conserved hypothetical protein
Os01g0362100 Esterase/lipase/thioesterase domain
containing protein
PES1A OsPES1a
Os01g0362150
Os01g0362200
Os01g0362300
Os01g0362400 Conserved hypothetical protein
Os01g0362533 Conserved hypothetical protein
Os01g0362800 Conserved hypothetical protein
Os01g0362900
Os01g0363000 Hypothetical protein
Os01g0363300 Uncharacterised protein family UPF0497,
trans-membrane plant subgroup domain
containing protein
CASP LIKE2 OsCASP like2
Os01g0363500 Similar to predicted protein
Os01g0363600 Similar to hydroxyethylthiazole kise family
protein
Os01g0363750
84

Table S4 – continued
RAP Locus ID Description RAP-DB CGSNL Oryzabase
Os01g0363900 Ortholog of Arabidopsis HASTY (HST)
and human exportin-5 (XPO5), Xpo1
domain protein, Regulation of miR
accumulation and crown root development
CRD1 CRD1 CRD1/OsHST, OsCRD1,
OsHST, HST
Os01g0363950 Hypothetical gene
Os01g0364000 Hypothetical gene
Os01g0364100 Similar to OSIGBa0145M07.8 protein WAK5 OsWAK5
85

Table S5: Information about all potential candidate genes within 200 kb (100 kb upstream and downstream) of the lead SNP
sf0115877533, related to Figure 2
RAP Locus ID Description RAP-DB CGSNL Oryzabase
Os01g0379400 Cyclin-like F-box domain containing protein OsFbox010, OsFbox10,
Os F0156, OsFBX6,
OsFBX6, FBX6
Os01g0381400
Os01g0379601
Os01g0379800 Similar to HAT family dimerisation domain
containing protein
Os01g0380000
Os01g0380200 ZOS1-07 OsZOS1-07
Os01g0380800 F-box domain, cyclin-like domain
containing protein
FBOX11 OsFbox011, OsFbox11,
Os F0196, OsFBX7,
FBX7, OsFBX7, FBX7
Os01g0381325 Conserved hypothetical protein
Os01g0381850
Os01g0382000 Pathogenesis-related protein, Disease
resistance
PR1, OsPR1b PR1B OsPR1b, PR1b,
OsPR1#011, OsPR1-11,
PR-1b, OsPR-1b, PR1,
PR-1, OsPR1a, PR1a
Os01g0382200 Transferase family protein
Os01g0382400 Similar to Pathogenesis-related protein
PRB1-2 precursor
PR1-12 OsPR1#012, PR1#012,
OsPR1-12, OsPR1.1,
PR1.1
Os01g0382450 Similar to Kinesin heavy chain (Fragment)
Os01g0382500 Conserved hypothetical protein
Os01g0382700 Similar to stress regulated protein
86

Table S6: Information about all potential candidate genes within 200 kb (100 kb upstream and downstream) of the lead SNP
sf0118143691, related to Figure 2
RAP Locus ID Description RAP-DB CGSNL Oryzabase
Os01g0512100 Similar to Chaperone protein dJ 15
(Protein ALTERED RESPONSE TO
GRAVITY) (AtARG1) (AtJ15) (AtDjB15)
OsDjC7
Os01g0512200 Armadillo-type fold domain containing
protein
Os01g0512400 Conserved hypothetical protein GEBP2 OsGeBP2, GeBP2
Os01g0512700 Zinc finger, C2H2 domain containing protein ZOS1-08 OsZOS1-08
Os01g0512800 CS-like domain domain containing protein
Os01g0512950
Os01g0513100 Similar to Protein phosphatase 2C ABI2 ABI2 OsPP2C03, PP2C03,
OsPP2C3, PP2C3, OsPP7,
OsABI2
Os01g0513200 Hypothetical conserved gene
Os01g0513400 Protein of unknown function DUF789
family protein
Os01g0513500 Hypothetical gene
Os01g0513700 Similar to trafficking protein particle
complex subunit 1
Os01g0513800 Similar to Brix domain containing protein 1
homolog
Os01g0513850 Hypothetical protein
Os01g0513900 Similar to Kinesin heavy chain (Fragment) OsACK1, ACK1
Os01g0513950 Hypothetical protein
Os01g0514000 Similar to 50S ribosomal protein L24e OsRPL24B, RPL24B
Os01g0514300 Armadillo-type fold domain containing
protein
87

Table S6 – continued
RAP Locus ID Description RAP-DB CGSNL Oryzabase
Os01g0514450 Pentatricopeptide repeat domain containing
protein
Os01g0514600 Similar to Fimbrin 1 (AtFIM1)
Os01g0514700 LRR-receptor-like kise (LRR-RLK) family
protein
Os01g0514850 Hypothetical protein
Os01g0515001
Os01g0515300 Similar to Leucine Rich Repeat family
protein
88

Table S7: Information about all potential candidate genes within 200 kb (100 kb upstream and downstream) of the lead SNP
sf0136973473, related to Figure 2
RAP Locus ID Description RAP-DB CGSNL Oryzabase
Os01g0855200 Tetratricopeptide-like helical domain
containing protein
Os01g0855301
Os01g0855400 R2R3-MYB transcription factor 17 Os2R MYB17 DLN29 OsDLN29, Os2R MYB17,
2R MYB17, MYB2-18,
OsMYB2-18
Os01g0855600 Similar to Hs1pro-1 protein HS1
Os01g0855700 Hypothetical protein
Os01g0855850
Os01g0855900 Hypothetical gene
Os01g0856000 Similar to CDC6 protein CDC6 OsCDC6
Os01g0856166
Os01g0856332
Os01g0856500 Auxin transporter, Primary root and root
hair elongation, Cd stress response
OsLAX1, OsRAU1,
OsAUX1
RAU1 OsLAX1, OsRAU1,
OsAUX1, LAX1, AUX1
Os01g0856550 Non-protein coding transcript
Os01g0856600 Nsp1-like, C-termil family protein
Os01g0856800 Similar to pleckstrin homology
domain-containing protein 1
Os01g0856850 Similar to ribosomal protein S7
Os01g0856900 Carbohydrate-binding module 20
(CBM20)-containing protein, Starch
biosynthesis
SBDCP1 SBDCP1 OsSBDCP1
Os01g0857200 Di-trans-poly-cis-decaprenylcistransferase
family protein
Os01g0857250 Conserved hypothetical protein
89

Table S7 – continued
RAP Locus ID Description RAP-DB CGSNL Oryzabase
Os01g0857300 Three-deoxy-D-manno-octulosonic-acid
transferase, N-termil domain containing
protein
Os01g0857400 Amino acid transporter, transmembrane
domain containing protein
OsGAT3
Os01g0857500 Xanthine/uracil/vitamin C permease family
protein
Os01g0857600 Similar to H0811D08.6 protein
Os01g0857650 Hypothetical protein
Os01g0857700 Similar to G10
Os01g0857100
Os01g0857000 Double-stranded R-binding-like domain
containing protein
OsCPL2, CPL2
90

Table S8: Information about all potential candidate genes within 200 kb (100 kb upstream and downstream) of the lead SNP
sf0137595036, related to Figure 2
RAP Locus ID Description RAP-DB CGSNL Oryzabase
Os01g0866000 Similar to E3 ubiquitin ligase EL5 (EC
6.3.2.-)
RING189 OsRING189
Os01g0865900 Hypothetical protein
Os01g0866100 Similar to Actin 4 AC7 RAc7, OsAc7
Os01g0866133 Hypothetical gene
Os01g0866200 Similar to Histone H3 OsHTR702
Os01g0866300 VAMP-like protein YKT61 (AtYKT61)
(Geranylgeranylated protein 1) (AtGP1)
Os01g0866400 Cytosolic fructose-1, 6-bisphosphatase,
Sucrose biosynthesis, Required for tiller bud
outgrowth
OscFBP1, MOC2 MOC2 FR, OsFR, FBP1,
OsFBP1, OsMOC2,
OscFBP1, cFBP1,
MOC2/FBP1
Os01g0866500 Similar to Soluble inorganic
pyrophosphatase (EC 3.6.1.1)
(Pyrophosphate phospho- hydrolase)
(PPase)
Os01g0866550 Non-protein coding transcript
Os01g0866600 Similar to bolA-like protein
Os01g0866700 Similar to Sm-like protein
Os01g0866750 Hypothetical conserved gene
Os01g0866775
Os01g0866800 Similar to F24P17.15 protein (Tubby-like
protein TULP9)
TLP3 OsTLP5, TLP5, OsTLP3,
OsFbox050, OsFbox50,
Os F0396, OsFBT3, FBT3
Os01g0866950
Os01g0867100 Conserved hypothetical protein
91

Table S8 – continued
RAP Locus ID Description RAP-DB CGSNL Oryzabase
Os01g0867200 WD40 repeat-like domain containing protein
Os01g0867450 Non-protein coding transcript
Os01g0867500
Os01g0867600 Similar to UDP-glucose:sterol
glucosyltransferase (EC 2.4.1.173)
Os01g0867700 Yip1 domain containing protein
Os01g0867800 Nucleotide-binding, alpha-beta plait domain
containing protein
OsPTB1 PTB1 OsPTB1, RRM1-11,
OsRRM1-11
Os01g0867900 Protein of unknown function DUF502
family protein
Os01g0868000 AP2/ERF transcription factor, Abiotic
stress response, Salt stress response
ERF99,
OsEREBP2,
EREBP2,
OsERF#099,
OsERF099,
OsERF99,
AP2/EREBP#080,
AP2/EREBP80
ERF99 OsERF#099, OsERF099,
OsERF99,
AP2/EREBP#080,
AP2/EREBP80,
OsEREBP2, EREBP2
Os01g0868200 Zinc finger, DHHC-type domain containing
protein
DHHC3 OsDHHC3, OsDHHC03,
DHHC03
Os01g0868301 Hypothetical protein
Os01g0868400 Hypothetical protein
Os01g0868300 Similar to D polymerase alpha catalytic
subunit (EC 2.7.7.7)
POLA OSPOLA, Ospolalpha,
OsDNAP, DNAP
Os01g0868500
Os01g0868550 Hypothetical protein
Os01g0868600 Hypothetical conserved gene
Os01g0868800 Similar to Subtilase SUB10 OsSub10
92

Table S8 – continued
RAP Locus ID Description RAP-DB CGSNL Oryzabase
Os01g0868900 Peptidase S8, subtilisin-related domain
containing protein
SUB11 OsSub11
Os01g0869000 Protein of unknown function DUF639
family protein
Os01g0869100
Os01g0869200 Magnesium transporter, Mg-mediated
aluminum tolerance
OsMGT1,
OsMRS2-2
MRS2-2 OsMGT1, OsMRS2-2,
MGT1
Os01g0869300 Conserved hypothetical protein
Os01g0869400 Similar to Anthocyanidin 5,
3-O-glucosyltransferase
Os01g0869450 Hypothetical protein
Os01g0869500 Plant nuclear matrix 1 family protein
Os01g0869550 Conserved hypothetical protein
Os01g0869600 TRAM, LAG1 and CLN8 homology domain
containing protein
Os01g0869750 Conserved hypothetical protein
Os01g0867300 bZIP transcription factor, Abiotic stress
response, ABA sigling, Suppressor of floral
transition upon drought stress
BZIP12, OsbZIP12,
OsABF1
BZIP12 OsbZIP12, OsABF1,
ABF1, OsOSE2, OSE2,
OsbZIP12/OsABF1
Os01g0867400 Non-protein coding transcript
93

Table S9: Information about all potential candidate genes within 200 kb (100 kb upstream and downstream) of the lead SNP
sf0323937770, related to Figure 2
RAP Locus ID Description RAP-DB CGSNL Oryzabase
Os03g0626200 Conserved hypothetical protein
Os03g0626400 Hypothetical conserved gene
Os03g0626500 Similar to predicted protein
Os03g0626600 Zinc finger, LIM-type domain containing
protein
HDR3.1 OsHDR3.1
Os03g0626650 Non-protein coding transcript
Os03g0626700 Multi antimicrobial extrusion protein MatE
family protein
MATE16 OsMATE16
Os03g0626750 Hypothetical protein
Os03g0626800 Calcineurin-B-like protein 3,
Calcium-binding protein
OsCBL3 CBL3 OsCBL3
Os03g0626900 Non-protein coding transcript
Os03g0627000
Os03g0627100 Pentatricopeptide repeat domain containing
protein
Os03g0627200
Os03g0627300 Similar to nucleotide-binding protein-like ISC37 OsISC37
Os03g0627500 Similar to KH domain containing protein,
expressed
KH15 OsKH15
Os03g0627600
Os03g0627701
Os03g0627900 Similar to H0102C09.1 protein
Os03g0628200
Os03g0628300
Os03g0628800 Similar to H1flk (Fragment)
Os03g0628900 Prefoldin domain containing protein
94

Table S9 – continued
RAP Locus ID Description RAP-DB CGSNL Oryzabase
Os03g0629001
Os03g0629100 OsHyPRP11, HyPRP11
Os03g0629450 Similar to F-box domain containing protein OsFbox155, Os F0503,
OsFBX96, FBX96
Os03g0627650 GTPase-regulated protein, Regulation of
grain size and weight
GSW3 GSW3 OsGSW3
95

Table S10: Information about all potential candidate genes within 200 kb (100 kb upstream and downstream) of the lead SNP
sf0327583070, related to Figure 2
RAP Locus ID Description RAP-DB CGSNL Oryzabase
Os03g0689100 Histidine acid phosphatase family protein
Os03g0689300 Plasma membrane H+-ATPase 1,
Regulation of ammonium (NH+
4 ) uptake,
Regulation of stomatal opening for C
fixation, Control of photosynthesis
OSA1 AHA1 OSA1, OsA1, osAHA1,
AHA1
Os03g0689350 Hypothetical protein
Os03g0689400 Similar to NB-ARC domain containing
protein, expressed
Os03g0689544 Hypothetical protein
Os03g0689688 Hypothetical protein
Os03g0689900 Similar to predicted protein
Os03g0690000 Similar to Costars family protein
Os03g0690500 Similar to Oxidoreductase, 2OG-Fe oxygese
family protein, expressed
Os03g0690600 Similar to SCARECROW-like protein GRAS17 OsSCL14, SCL14,
OsGRAS-17, OsGRAS17,
GRAS-17, DLN96,
OsDLN96, OsGRAS15,
GRAS15
Os03g0690700 Conserved hypothetical protein RHA5 OsRHA5
Os03g0691050 Hypothetical gene
Os03g0691400 Thioesterase superfamily domain containing
protein
Os03g0691500 Hypothetical conserved gene
Os03g0691600
96

Table S10 – continued
RAP Locus ID Description RAP-DB CGSNL Oryzabase
Os03g0691800 Hedgehog-interacting protein-like 1 protein,
Regulation of seed vigor, Regulation of
ABA metabolism and sigling during seed
germition
OsHIPL1 HIPL1 OsHIPL1
Os03g0691900 Non-protein coding transcript
Os03g0692000 Glycosyl transferase, family 14 protein
Os03g0689866 Conserved hypothetical protein
Os03g0689833 Similar to NB-ARC domain containing
protein, expressed
97

Table S11: Information about all potential candidate genes within 200 kb (100 kb upstream and downstream) of the lead SNP
sf0426935488, related to Figure 2
RAP Locus ID Description RAP-DB CGSNL Oryzabase
Os04g0540000
Os04g0540200 BBX transcription factor, Regulation of
heading date
OsRIP1 OsBBX13, BBX13,
OsRIP1, RIP1
Os04g0540300 COBRA-like protein 7 PCS10 OsPCS10
Os04g0540401 Hypothetical protein
Os04g0540500 Hypothetical protein
Os04g0540600 Aldehyde dehydrogese domain containing
protein
ALDH3B1 OsALDH3B1
Os04g0540750 Hypothetical protein
Os04g0540900 Receptor-like cytoplasmic kise, Salt
tolerance, Oxidative stress tolerance
STRK1 RLCK154 OsRLCK154, STRK1,
OsSTRK1
Os04g0541100 Similar to Gt-2 OsGT-2, GT-2, OsMSL22,
MSL22
Os04g0541234 Hypothetical protein
Os04g0541366
Os04g0541466
Os04g0541500 Long-chain base kise, Regulation of disease
resistance response and programmed cell
death (PCD)
OsLCBK2 OsLCBK2
Os04g0541700 Similar to Homeobox-leucine zipper protein
HOX22
HOX22, Oshox22,
OsHox22
HOX22 Oshox22, OsHox22,
OsHDZ14, OsHDZIP14,
HDZ14, HDZIP14
Os04g0541900 Similar to cysteine-type endopeptidase/
ubiquitin thiolesterase
Os04g0542000 A member of S40 gene family, Leaf
senescence
OsS40-5 S40-5 OsS40-5
98

Table S11 – continued
RAP Locus ID Description RAP-DB CGSNL Oryzabase
Os04g0542100 Similar to HAT family dimerisation domain
containing protein
Os04g0542200 Similar to H0501D11.7 protein YSL9 OsYSL9, OsYs13
Os04g0542302 Similar to TCP-domain protein
Os04g0542400
Os04g0542800 Transporter of the Copper-Nicotiamine
Complex, Fe(III)-deoxymugineic acid
transporter, Copper distribution, Allocation
of iron
YSL16, OsYSL16,
Os-YSL16, OsYs14
YSL16 OsYSL16, Os-YSL16,
OsYs14
Os04g0542900 Similar to endonuclease, polyU-specific
Os04g0543000 Receptor-like cytoplasmic kise 155, Control
of pattern-triggered immunity, Basal
resistance to bacterial and fungal pathogens
OsRLCK155 RLCK155 OsRLCK155
Os04g0543033 Hypothetical protein
Os04g0543066
Os04g0543100 Hypothetical gene
Os04g0543200 Nucleotide-binding, alpha-beta plait domain
containing protein
RRM1-89 OsRRM1-89
Os04g0543250
Os04g0543300
Os04g0543500 Hypothetical conserved gene
Os04g0543600 Amino acid/polyamine transporter I family
protein
OsCAT5
Os04g0543650 Hypothetical protein
99

Table S12: Information about all potential candidate genes within 200 kb (100 kb upstream and downstream) of the lead SNP
sf0428557370, related to Figure 2
RAP Locus ID Description RAP-DB CGSNL Oryzabase
Os04g0569300 Similar to Membrane protein OsRhmbd11, RHMBD11
Os04g0569500 Hypothetical protein
Os04g0569400 Similar to OSIGBa0139P06.9 protein
Os04g0569900 IQ calmodulin-binding region domain
containing protein
Os04g0570000 Cytochrome P450 87A3, Auxin sigling in
the regulation of coleoptile growth
CYP87A3 CYP87A3 OsCYP87A3
Os04g0570125 Hypothetical protein
Os04g0570250 Hypothetical gene
Os04g0570500 Cytochrome P450 family protein DWF1, DIM/DWF1, DIM
Os04g0570600 Cytochrome P450 family protein
Os04g0570650 Hypothetical protein
Os04g0570700 Hypothetical protein
Os04g0570800 Protein of unknown function DUF248,
methyltransferase putative family protein
Os04g0570850 Hypothetical protein
Os04g0571200 RING H2-type E3 ligase, Salinity tolerance OsSIRH2-14,
OsRFPH2-14
OsRFPH2-14,
OsRING130, RING130
Os04g0571300 Cyclin-like F-box domain containing protein OsFBX148 OsFbox228, Os F0553,
OsFBX148, FBX148
Os04g0571450 Hypothetical protein
Os04g0571600 Multi antimicrobial extrusion protein MatE
family protein
MATE19 OsMATE19
Os04g0571700 Non-protein coding transcript
Os04g0571800 RING-H2 protein, Regulation of anther and
root lignification
OsATL53 RING94 OsRING94, OsATL53,
ATL53
100

Table S12 – continued
RAP Locus ID Description RAP-DB CGSNL Oryzabase
Os04g0572100 Hypothetical gene
Os04g0572200 Similar to OSIGBa0127A14.7 protein ERF23 OsERF#023, OsERF023,
OsERF23,
AP2/EREBP#144,
AP2/EREBP144
Os04g0572400 Dehydration-responsive element binding
protein 1E, Chilling tolerance, Positive
regulation of heat tolerance
OsDREB1E DREB1E OsDREB1E, OsERF030,
OsERF#030, OsERF30,
ERF30,
AP2/EREBP#160,
AP2/EREBP160,
OsDREB1-1
Os04g0572500 Similar to OSIGBa0147H17.2 protein
Os04g0572600 Similar to DNA-directed RNA polymerase OsNRPD1a,
OsNRPD1
NRPD1A OsNRPD1a
101

Table S13: Information about all potential candidate genes within 200 kb (100 kb upstream and downstream) of the lead SNP
sf0428988813, related to Figure 2
RAP Locus ID Description RAP-DB CGSNL Oryzabase
Os04g0576800 Similar to predicted protein
Os04g0576850 Non-protein coding transcript
Os04g0576900 LRR receptor-like kise, Non-canonical,
Control of organ size
XIAO XIAO OsXIAO, OsCLV2e, CLV2e
Os04g0577000 Similar to H0404F02.2 protein
Os04g0577200 Similar to Rac GTPase activating protein 1
Os04g0577300 Similar to GDSL-motif lipase/hydrolase-like
protein
GELP58 OsGELP58, OsGELP58a,
OsGELP58b, OsGELP58c,
OsGELP58d
Os04g0577337 Conserved hypothetical protein
Os04g0577375 Hypothetical conserved gene
Os04g0577450
Os04g0577500 Deoxyribonuclease, TatD Mg-dependent
domain containing protein
Os04g0577600 Hypothetical protein
Os04g0577700 Protein of unknown function DUF623, plant
domain containing protein
OsOFP11, OsOFP16
Os04g0577800 Uncharacterised protein family UPF0136,
Transmembrane domain containing protein
Os04g0578000 ACC synthase, Ethylene biosynthesis ACS2, OsACS2,
Os-ACS2
ACS2 OsACS2, Os-ACS2
Os04g0578200 Similar to H0404F02.9 protein
Os04g0578250 Non-protein coding transcript
Os04g0578300 Similar to H0404F02.10 protein
Os04g0578400 Similar to Beta-ring hydroxylase (Fragment) OsBCH2, BCH2, OsHYD1,
HYD1
102

Table S13 – continued
RAP Locus ID Description RAP-DB CGSNL Oryzabase
Os04g0578500
Os04g0578550
Os04g0578600 Similar to H0404F02.15 protein OsFRO2, OsFRO1 FRO2 OsFRO2, OsFRO1
Os04g0578700 Similar to H0404F02.16 protein
Os04g0578800 Protein of unknown function DUF604
family protein
Os04g0578833 Hypothetical gene
Os04g0578900 Similar to H0404F02.18 protein
Os04g0579000
Os04g0579200 Zinc finger, RING/FYVE/PHD-type
domain containing protein
RING328 OsRING328
Os04g0579600
Os04g0579700 Similar to Predicted protein H-BTB3 OsH-BTB3
Os04g0580001 Hypothetical gene
103

Table S14: Information about all potential candidate genes within 200 kb (100 kb upstream and downstream) of the lead SNP
sf0431202219, related to Figure 2
RAP Locus ID Description RAP-DB CGSNL Oryzabase
Os04g0616400 Similar to H0525G02.12 protein MRLK16 OsMRLK16
Os04g0616500 LRR-receptor-like kise (LRR-RLK) family
protein
MRLK17 OsMRLK17
Os04g0616600 Serine/threonine protein kise-related
domain containing protein
Os04g0616700 Hypothetical conserved gene MRLK18 OsMRLK18
Os04g0616800 Similar to H0525G02.13 protein
Os04g0616900 Similar to H0525G02.14 protein
Os04g0617050 Similar to H0313F03.1 protein SAUR21 OsSAUR21
Os04g0617200 Conserved hypothetical protein
Os04g0617350 Similar to H0313F03.3 protein
Os04g0617500 Similar to H0313F03.4 protein
Os04g0617600 Similar to Cdc48 cell division control
protein 48, AAA family
CDC48-4 OsCDC48-4
Os04g0617700 Similar to H0313F03.6 protein
Os04g0617800 Similar to Imidazoleglycerol-phosphate
dehydratase 1 (EC 4.2.1.19) (IGPD 1)
STS22
Os04g0617900 Similar to germin-like protein subfamily 1
member 11
GLP4-1 OsGLP4-1, OsCDP4.1,
CDP4.1
Os04g0618050 Pentatricopeptide repeat containing protein
Os04g0618100 Hypothetical gene
Os04g0618200 Similar to cD clone:J013046D23, full insert
sequence
Os04g0618250
Os04g0618301 Non-protein coding transcript
Os04g0618400 Similar to H0313F03.13 protein
104

Table S14 – continued
RAP Locus ID Description RAP-DB CGSNL Oryzabase
Os04g0618500 Similar to Gamma-SP (Fragment)
Os04g0618600 bHLH transcription factor, Positive
regulation of deep sowing tolerance,
Mesocotyl elongation
PIF1 BHLH101 OsbHLH101, bHLH101,
OsPIF1, PIF1
Os04g0618700 LRR-receptor-like kise (LRR-RLK) family
protein, Ortholog of Arabidopsis FLS2,
flg22 (peptide derived from the bacterial
flagellin N-terminus ) receptor, Immune
response, Resistance against A. avee
OsFLS2 FLS2 Os-FLS2, OsFLS2,
OsCLV2f, CLV2f
Os04g0618800 Hypothetical protein
Os04g0618900
Os04g0618950 Similar to H0114G12.1 protein
Os04g0619000 Similar to L1332.9 protein ONAC083 NAC83 ONAC083, ONAC83
Os04g0619200 Similar to H0114G12.3 protein
Os04g0619300 F-box protein, Cold tolerance Ctb1 OsFbox232, Os F0576,
Ctb1, OsCtb1, OsFBK15,
FBK15
Os04g0619400 Receptor-like kise, Positive regulation of
flavonoid metabolism, UV-B tolerance
OsRLCK160 RLCK160 OsRLCK160, PTK6,
OsPTK6
Os04g0619500 Ovarian tumour, otubain domain containing
protein
Os04g0619600 Similar to Resistance protein candidate
(Fragment)
RLCK161 OsRLCK161,
OsCrRLK1L9, CrRLK1L9,
OsMRLK19, MRLK19,
FLR8, OsFLR8
105

Table S14 – continued
RAP Locus ID Description RAP-DB CGSNL Oryzabase
Os04g0619700 Similar to H0114G12.8 protein OsWD40-110, OsFbox233,
Os F0069, OsFBW1,
FBW1
106

Table S15: Information about all potential candidate genes within 200 kb (100 kb upstream and downstream) of the lead SNP
sf0501670937, related to Figure 2
RAP Locus ID Description RAP-DB CGSNL Oryzabase
Os05g0128000 Homeodomain-like containing protein MSL24 OsMSL24
Os05g0128100 Hypothetical conserved gene
Os05g0128200 CCCH-tandem zinc finger protein, Drought
resistance
OsTZF5, OsC3H33 C3H33 OsC3H33, OsTZF5, TZF5,
OsCCCH-Zn-5,
CCCH-Zn-5
Os05g0128300 Conserved hypothetical protein
Os05g0128350 Hypothetical protein
Os05g0128400 Cation diffusion facilitator (CDF) family
protein, Bivalent cation transporter,
Translocation of Zn, Cd and other heavy
metals, Ion homeostasis
OsMTP1 MTP1 OsMTP1
Os05g0128500
Os05g0128900 Similar to Trehalose-phosphatase family
protein
Os05g0129000 Gamma-glutamylcysteine synthetase,
Glutathione (GSH) synthesis protein
OsECS OsECS, ECS, GSH2,
OsGSH2
Os05g0129100 Similar to Acetylornithine
aminotransferase, mitochondrial
Os05g0129200 Endoglucase 14 GH9B12 OsGH9B12
Os05g0129250 Hypothetical protein
Os05g0129300 Low-temperature-induced protein, Basic
region/leucine zipper (bZIP) protein,
Mediation of low-temperature sigl switching
LIP19 LIP19 Lip19, lip19, OsLIP9,
OsbZIP38, bZIP38
Os05g0129400 Ankyrin repeat containing protein
107

Table S15 – continued
RAP Locus ID Description RAP-DB CGSNL Oryzabase
Os05g0129700 KNOX (Knotted1-like) class homeobox
protein, Regulation of embryogenesis,
Regulation of shoot apical meristem (SAM)
formation
Oskn2, OSH71,
Oskn2/OSH71
OSKN2 OsKn2, OsH71, HOS9,
OSH71, OSH71/Oskn2
Os05g0129800 D-binding WRKY domain containing
protein
WRKY109 OsWRKY109
Os05g0129900 Tetratricopeptide-like helical domain
containing protein
Os05g0130100 Hypothetical conserved gene
Os05g0130200 Conserved hypothetical protein
Os05g0128700 Similar to PH domain containing protein
Os05g0128600 Similar to predicted protein
108

Table S16: Information about all potential candidate genes within 200 kb (100 kb upstream and downstream) of the lead SNP
sf0504419821, related to Figure 2
RAP Locus ID Description RAP-DB CGSNL Oryzabase
Os05g0172400 Conserved hypothetical protein
Os05g0172500 Cyclin-like F-box domain containing protein OsFbox250, Os F0011,
OsFBX161, FBX161
Os05g0172800 Conserved hypothetical protein
Os05g0173500 Conserved hypothetical protein
Os05g0173600
Os05g0173700 Similar to DNA replication licensing factor
MCM3 homolog (Replication origin
activator) (ROA protein) (Fragment)
Os05g0173800 TPP-binding enzymes, conserved site
domain containing protein
Os05g0173900
Os05g0175000
Os05g0175033
Os05g0175100
Os05g0175450 Similar to OSIGBa0157K09-H0214G12.6
protein
109

Table S17: Information about all potential candidate genes within 200 kb (100 kb upstream and downstream) of the lead SNP
sf0601367485, related to Figure 2
RAP Locus ID Description RAP-DB CGSNL Oryzabase
Os06g0123750
Os06g0124300 Protein of unknown function DUF594
family protein
Os06g0124400 Conserved hypothetical protein
Os06g0124900 Conserved hypothetical protein
Os06g0125000 Nucleotide-binding LRR receptor (NLR)
family protein
Os06g0125132 Conserved hypothetical protein
Os06g0125200 FCS-like zinc finger (FLZ) protein 18, DUF
domain containing protein, Flooding
tolerance during germition
OsFLZ18 FLZ18 OsFLZ18
Os06g0125300 Pentatricopeptide repeat domain containing
protein
Os06g0125400 Similar to Oligopeptide transporter 9 OsOPT2
Os06g0125500 Similar to Oligopeptide transporter 9 OsGT1, OsOPT3 OsOPT3, OsGT1
Os06g0125600 Hypothetical conserved gene PLS12 OsPLS12
Os06g0125700 Hypothetical protein
Os06g0125800 RING finger protein with E3 ligase activity,
Mediation of broad-spectrum disease
resistance
OsBBI1 OsBBI1, OsRING242,
RING242
Os06g0125900 Hypothetical protein
Os06g0126000 LIM binding protein domain containing
protein
OsSLK SEU3 OsSEU3, OsSLK, SLK
Os06g0126050 Hypothetical protein
Os06g0126100 ABC transporter, conserved site domain
containing protein
110

Table S17 – continued
RAP Locus ID Description RAP-DB CGSNL Oryzabase
Os06g0126250 Receptor-like kise, A member of the
Catharanthus roseus receptor-like kise1-like
(CrRLK1L) subfamily, Control of high
affinity potassium transporters, Regulation
of pollen tube growth and integrity
RLCK193, RUPO RUPO OsRLCK193, RLCK193,
OsCrRLK1L13,
CrRLK1L13, OsMRLK40,
MRLK40, FLR9, OsFLR9
Os06g0126400 Conserved hypothetical protein OsSTA167
Os06g0126500 Bcl-2-associated athanogene (BAG) protein,
BAG protein containing a ubiquitin-like
(UBL) structure, Plant development
OsBAG3 BAG3 OsBAG3
Os06g0126700
Os06g0127000 Peroxisomal biogenesis factor 11 family
protein
PEX11-5,
OsPEX11-5
PEX11-5 OsPEX11-5
Os06g0127100 Dehydration-responsive element binding
protein 1C, Chilling tolerance, Positive
regulation of heat tolerance, Positive
regulation of salt tolerance
OsDREB1C DREB1C OsDREB1C, CBF1,
ERF26, OsERF026,
OsERF#026, OsERF26,
AP2/EREBP#098,
AP2/EREBP98, OsCBF2,
CBF2
Os06g0127200 SET domain containing protein SDG748 OsSDG748
Os06g0127250 Hypothetical protein
Os06g0127300 Similar to Calcium-dependent protein kise
Os06g0127500 Hypothetical conserved gene RRM1-114 OsRRM1-114
Os06g0127600 Similar to Glutathione transporter
Os06g0127700 Similar to Oligopeptide transporter 9 OsOPT4
111

Table S17 – continued
RAP Locus ID Description RAP-DB CGSNL Oryzabase
Os06g0127800 GAI-RGA-SCR (GRAS) family protein,
Brassinosteroid sigling
DLT, dlt,
OsGRAS32, OsDLT
DLT dlt, OsGRAS32, OsDLT,
OsDLT1, DTL1, OsGRAS
32, GRAS-32, GRAS32,
SMOS2/DLT, SMOS2,
OsSMOS2, OsGS6, GS6,
DLT/GS6/SMOS2
Os06g0127825 Hypothetical protein
Os06g0127850
112

Table S18: Information about all potential candidate genes within 200 kb (100 kb upstream and downstream) of the lead SNP
sf0719790827, related to Figure 2
RAP Locus ID Description RAP-DB CGSNL Oryzabase
Os07g0513600 Hypothetical conserved gene
Os07g0513700
Os07g0513900
Os07g0514000
Os07g0514101
Os07g0514200
Os07g0514300
Os07g0514400 Domain of unknown function DUF629
domain containing protein
Os07g0514550 Hypothetical gene
Os07g0514600
Os07g0514700
Os07g0515000 tRNA wybutosine-synthesizing protein
2/3/4
Os07g0515100 Calcium-dependent protein kise, isoform 2
(EC 2.7.1.-) (CDPK 2)
OsCDPK2 CDPK19 OsCDPK19, OsCPK19,
OsCDPK2, CPK2, CDPK2
Os07g0515150 Hypothetical protein
Os07g0515200 Conserved hypothetical protein
Os07g0515366
Os07g0515532
Os07g0515700 Similar to cD, clone: J100054L12, full insert
sequence
Os07g0515900 Similar to cD, clone: J100054L12, full insert
sequence
Os07g0516000 Neuraminidase domain containing protein
Os07g0516050 Similar to predicted protein
113

Table S18 – continued
RAP Locus ID Description RAP-DB CGSNL Oryzabase
Os07g0516100 Hypothetical conserved gene PP2C63 OsPP2C63, OsPP96
Os07g0516200 Similar to Endoribonuclease, L-PSP family
Os07g0516250 Non-protein coding transcript
Os07g0516300 A member of S40 gene family, Leaf
senescence, Response to pathogen infection
OsS40-15 S40-15 OsS40-15
114

Table S19: Information about all potential candidate genes within 200 kb (100 kb upstream and downstream) of the lead SNP
sf0809027844, related to Figure 2
RAP Locus ID Description RAP-DB CGSNL Oryzabase
Os08g0246200
Os08g0246300 CC-NBS-LRR protein, Defense response,
Control of crown root development
SCR8, RGly8 SCR8 OsSCR8
Os08g0246351 Hypothetical protein
Os08g0246400 Similar to Ubiquinol-cytochrome c
reductase complex 14 kDa protein (EC
1.10.2.2) (CR14)
Os08g0246550 Hypothetical gene
Os08g0246800 Conserved hypothetical protein
Os08g0246950 Hypothetical protein
Os08g0247600 LRR-receptor-like kinase (LRR-RLK)
family protein, Non-canonical
Os08g0247700 LRR-receptor-like kinase (LRR-RLK)
family protein
Os08g0247801 LRR-receptor-like protein (LRR-RLP)
family protein
Os08g0248000 G1 like protein 13 OsG1L13 G1L13 OsG1L13
Os08g0248100 LRR-receptor-like kinase (LRR-RLK)
family protein
Os08g0248300 Hypothetical protein
Os08g0248400 Pentatricopeptide repeat domain containing
protein
Os08g0248700 MYELOBLASTOSIS (MYB) transcription
factor 36a, Regulation of Casparian strip
formation at the root endodermis
OsMYB36a MYB36A OsMYB36a,
Os2R MYB75, 2R MYB75,
MYB2-90, OsMYB2-90
115

Table S19 – continued
RAP Locus ID Description RAP-DB CGSNL Oryzabase
Os08g0248800 Similar to Aspartate carbamoyltransferase
3, chloroplast precursor (EC 2.1.3.2)
(Aspartate transcarbamylase 3) (ATCase 3)
Os08g0248900 Similar to ADP-ribosylation factor 3 ARF3 OsARF3, ARF3
Os08g0249000 Zinc finger, B-box domain containing
protein
BBX25 OsBBX25, OsG,
OsCCT29, CCT29
Os08g0249100 Serine/threonine protein kise-related
domain containing protein
RLCK249 OsRLCK249, OsUSP32,
USP32
Os08g0249200 Similar to GDU1
Os08g0249300 Hypothetical protein
Os08g0249400 Hypothetical conserved gene
Os08g0249600 Similar to predicted protein DGK6 OsSTA208, OsDGK6
Os08g0246500 Similar to Mitochondrial GTPase
Os08g0246700 Hypothetical protein
Os08g0249675 Hypothetical protein
Os08g0249501 Hypothetical protein
116

Table S20: Information about all potential candidate genes within 200 kb (100 kb upstream and downstream) of the lead SNP
sf0824675627, related to Figure 2
RAP Locus ID Description RAP-DB CGSNL Oryzabase
Os08g0497600 WD40 subfamily protein, Salt stress SRWD1, SRWD1,
OsWD40-162
SRWD1 SRWD1, OsWD40-162,
OsDWD57, DWD57
Os08g0497750
Os08g0497900 Conserved hypothetical protein
Os08g0498100 O-methyltransferase ROMT-15 OsOMT26, ROMT-15,
ROMT15, COA20,
OsCCoAOMT,
CCoAOMT,
OsCCoAOMT5,
CCoAOMT5
Os08g0498400 O-methyltransferase ROMT-17 ROMT-17, OsROMT-17,
ROMT17, Os ROMT17,
CCoAOMT1,
OsCCoAOMT1,
OsCCoAOMT3,
CCoAOMT3
Os08g0498600 Similar to Caffeoyl-CoA
3-O-methyltransferase (Fragment)
ROMT-27, ROMT27
Os08g0499000 Conserved hypothetical protein
Os08g0499100 ATPase, AAA+ type, core domain
containing protein
Os08g0499200 Similar to Chloride channel protein CLC-f
(AtCLC-f). Splice isoform 2
CBSCLC8 OsCBSCLC8
Os08g0499225
Os08g0499250 Hypothetical conserved gene
117

Table S20 – continued
RAP Locus ID Description RAP-DB CGSNL Oryzabase
Os08g0499300 WRKY transcription factor, Disease
resistance against X. oryzae, Drought
tolerance
WRKY30 OsWRKY30
Os08g0499400 Conserved hypothetical protein
Os08g0499466
Os08g0499532 Hypothetical protein
Os08g0499600
Os08g0499700 Conserved hypothetical protein
Os08g0499750
Os08g0499800 Pentatricopeptide repeat domain containing
protein
Os08g0499900 Conserved hypothetical protein Os F0779
Os08g0500000 Subunit of the COP9 siglosome, Early
response to iron deficiency
CSN6 CSN6 OsCSN6
Os08g0500100 Peroxisomal targeting sequence1 (PTS1)
receptor protein, Type I peroxisomal
targeting sigl (PTS1) receptor, Regulation
of spikelet development, Modulation of
jasmonic acid biosynthesis, Antifungal
activity
OsPEX5,
OsPEX5S,
OsPex5pS, DFO2,
OsPEX5L,
OsPex5pL
PEX5 OsPEX5, OsPex5pL,
OsPex5pS, OsPex5L,
OsPex5S, OsPex5p
Os08g0500200 CBF1-interacting co-repressor CIR,
N-termil domain containing protein
Os08g0500300 Protein phosphatase 2C domain containing
protein
PP2C66 OsPP2C66, OsPP102
Os08g0500400 Hypothetical protein
Os08g0500500 Conserved hypothetical protein
Os08g0500600 Pentatricopeptide repeat domain containing
protein
PLS19 OsPLS19
118

Table S20 – continued
RAP Locus ID Description RAP-DB CGSNL Oryzabase
Os08g0500700 Similar to Heat shock protein 82 HSP82A OsHSP82A, hsp82A,
HSP90, OsHSP90,
OsHSP81, HSP81
Os08g0500800 WLM domain containing protein
Os08g0500900 Similar to Phosphoribosylglycimide
formyltransferase, chloroplast precursor (EC
2.1.2.2) (GART) (GAR transformylase)
(5’-phosphoribosylglycimide transformylase)
GART OsGART
Os08g0501000 Hypothetical conserved gene
Os08g0501044 Non-protein coding transcript
Os08g0501132 Similar to glycimide ribonucleotide
transformylase
Os08g0501300 Conserved hypothetical protein
Os08g0501400
Os08g0501500 Wall-associated kinase 74, Negative
regulation of grain length and weight,
Regulation of cell proliferation in spikelet
hulls, Regulation of grain number
GWN1, OsWAK74 WAK74 OsWAK74
Os08g0501600 Similar to Wall associated kise WAK75 OsWAK75
Os08g0501088 Similar to J013100G02, full insert sequence
Os08g0501200 EGF-type aspartate/asparagine
hydroxylation site domain containing
protein
WAK73 OsWAK73
119

Table S21: Information about all potential candidate genes within 200 kb (100 kb upstream and downstream) of the lead SNP
sf0905061479, related to Figure 2
RAP Locus ID Description RAP-DB CGSNL Oryzabase
Os09g0265800 HGWP repeat domain containing protein
Os09g0266000 Similar to predicted protein
Os09g0266100 Conserved hypothetical protein
Os09g0266200 Non-protein coding transcript
Os09g0266300 Conserved hypothetical protein
Os09g0266400 PGAP1-like family protein
Os09g0266600 NPH3 domain containing protein BTBN18, OsBTBN18
Os09g0266950 Hypothetical protein
Os09g0267300 Hypothetical conserved gene
Os09g0267400 Harpin-induced 1 domain containing protein
Os09g0267500 WD-40 repeat containing protein OsWD40-168
Os09g0267600 ESCRT (endosomal sorting complex
required for transport)-III component,
Control of leaf rolling
OsSNF7.2, RL17 RL17 NP39, OsSNF7.2, SNF7.2,
OsRL17
Os09g0267701 Hypothetical protein
Os09g0267800 Nucleotide-binding LRR receptor (NLR)
family protein
RPM1 OsRPM1
Os09g0268000 Similar to lectin-like receptor kise 7
Os09g0268100 Similar to lectin-like receptor kise 7
Os09g0268200
Os09g0268300 Similar to Hexose carrier OsSTP23 STP23 OsSTP23
Os09g0268401 Hypothetical protein
Os09g0268500 Non-protein coding transcript
Os09g0268600 Zinc finger, SWIM-type domain containing
protein
120

Table S21 – continued
RAP Locus ID Description RAP-DB CGSNL Oryzabase
Os09g0268700 Protein of unknown function DUF247, plant
domain containing protein
OsDUF247
Os09g0268800 Conserved hypothetical protein
121

Table S22: Information about all potential candidate genes within 200 kb (100 kb upstream and downstream) of the lead SNP
sf0915724607, related to Figure 2
RAP Locus ID Description RAP-DB CGSNL Oryzabase
Os09g0429500 Similar to Glutamate receptor GLR2.4 OsGLR2.4, GLR2.4
Os09g0429600 Non-protein coding transcript
Os09g0429766 Hypothetical protein
Os09g0429932
Os09g0430600 Hypothetical conserved gene ZOS9-10 OsZOS9-10
Os09g0430701 Conserved hypothetical protein
Os09g0431001
Os09g0431050 Hypothetical gene
Os09g0431100 GPCR, family 3, metabotropic glutamate
receptor-like protein
GLR1.3 OsGLR1.3, OsGLR1.1,
GLR1.1, OsGLR9.7,
GLR9.7
Os09g0431200 Glutamate receptor 9.8, Response to
cadmium, cold and drought stress,
Response to ABA treatment
OsGLR9.8 GLR1.1 OsGLR1.1, OsGLR1.2,
GLR1.2, OsGLR9.8,
GLR9.8
Os09g0431300 R2R3-MYB transcription factor 84 Os2R MYB84 2R MYB84 OsMYB30, MYB30,
Os2R MYB84, MYB2-101,
OsMYB2-101
Os09g0431500 Similar to TATA box-binding protein
associated factor 10
Os09g0431600 Cystathionine beta-synthase, core domain
containing protein
CBSPPR1 OsCBSPPR1
Os09g0431750 Hypothetical conserved gene ZOS9-11 OsZOS9-11
122

Table S23: Information about all potential candidate genes within 200 kb (100 kb upstream and downstream) of the lead SNP
sf0922835847, related to Figure 2
RAP Locus ID Description RAP-DB CGSNL Oryzabase
Os09g0569700 Conserved hypothetical protein
Os09g0569800 Serine/threonine protein kise-related
domain containing protein
RLCK280 OsPUB52, PUB52,
OsRLCK280, OsUSP33,
USP33
Os09g0569900 Hypothetical protein
Os09g0570000 Serine/threonine protein kise-related
domain containing protein
RLCK281 OsPUB56, PUB56,
OsRLCK281, OsUSP34,
USP34
Os09g0570100 Protein kinase, catalytic domain domain
containing protein
RLCK282 OsRLCK282
Os09g0570150 Hypothetical conserved gene
Os09g0570200 Zinc finger, C2H2-type domain containing
protein
ZOS9-21 OsZOS9-21
Os09g0570300 Similar to Short-chain dehydrogese Tic32
Os09g0570400 Phosphate transporter 4;4 OsPHT4;4 PT24 OsPT24, OsPHT4;4,
PHT4;4
Os09g0570500 Zinc finger, RING-type domain containing
protein
OsRFPHC-16,
OsRING322, RING322
Os09g0570600 PAP/25A core domain containing protein
Os09g0570800 Dioxygese, Shoot development, Salicylic
acid (SA) production, Phytohormone
homeostasis
SLC2 SLC2 OsSLC2, OsACO, ACO
Os09g0570850 Similar to Histone H2B
Os09g0570900 Amino acid-binding ACT domain
containing protein
Os09g0570951 Hypothetical gene
123

Table S23 – continued
RAP Locus ID Description RAP-DB CGSNL Oryzabase
Os09g0571000 Protein of unknown function DUF966
family protein
OsDSR7
Os09g0571033 Conserved hypothetical protein
Os09g0571100 Pectin lyase fold/virulence factor domain
containing protein
PME28 OsPME28
Os09g0571200 C2 domain-containing protein, Salt
tolerance
OsC2DP C2DP78 OsC2DP, C2DP,
OsC2DP78
Os09g0571400 Cyclophilin, Mediation of wide range of
cellular response under multiple abiotic
stresses
OsCYP-25 CYP19-3 OsCYP19-3, Cyp1,
OsCYP-25, OsCYP19-2a,
OsCYP19-2b
Os09g0571500 Lipase, class 3 family protein
Os09g0571632
Os09g0571666
Os09g0571700 Similar to Ethylene-responsive transcription
factor ERF096
ERF123 OsERF#123, OsERF123,
AP2/EREBP#066,
AP2/EREBP66
Os09g0572000 Pathogenesis-related transcriptiol factor
and ERF domain containing protein
ERF87 OsERF#087, OsERF087,
OsERF87,
AP2/EREBP#067,
AP2/EREBP67
Os09g0572100 Protein kinase, core domain containing
protein
RLCK283 OsRLCK283
Os09g0572150 Hypothetical gene
Os09g0572200 OsLpa1 (low phytic acid 1) paralog, Phytic
acid biosynthesis
OsLpa1-P LPA1-P OsLpa1-P, Lpa1-P
Os09g0572250
Os09g0572301 Hypothetical conserved gene
124

Table S23 – continued
RAP Locus ID Description RAP-DB CGSNL Oryzabase
Os09g0572400 Similar to Abcf2-prov protein ABCF5 OsABCF5, OsABCF5 1,
OsABCF5 2, OsABCF5 3
Os09g0572450 Hypothetical protein
Os09g0572500 Mann synthase, Rice ortholog of cellulose
synthase like A12 (CslA12), Regulation of
white core formation and grain quality
OsCslA12, OsMnS CSLA12 OsEnS-131,
OsCslA12, OsMnS,
MnS
Os09g0572525 Hypothetical gene
Os09g0572550 Hypothetical gene
Os09g0572600 Receptor-like cytoplasmic kise, Positive
regulation of salt tolerance
STK RLCK284 OsRLCK284, YK12,
PTK16, OsPTK16, STK,
OsSTK
Os09g0572700 Similar to Blue copper-binding protein UCL33 OsUCL33
Os09g0572800 Ole e 1 allergen family protein
Os09g0572900 Dymin-related protein 1E, Negative
regulation of programmed cell death,
Control of cytochrome c release
DJLM, OsDRP1E DJLM DJ-LM, OsDRP1E,
DRP1E
Os09g0572950 Non-protein coding transcript
Os09g0573000 Pentatricopeptide repeat domain containing
protein
Os09g0573100 Ubiquitin domain containing protein
Os09g0573150 AIG2-like domain containing protein
Os09g0573200 Hypothetical conserved gene
125

Table S24: Information about all potential candidate genes within 200 kb (100 kb upstream and downstream) of the lead SNP
sf1010959303, related to Figure 2
RAP Locus ID Description RAP-DB CGSNL Oryzabase
Os10g0357700 Conserved hypothetical protein
Os10g0357750
Os10g0357800 N2,N2-dimethylguanosine tRNA
methyltransferase family protein
Os10g0357850 Hypothetical gene
Os10g0357900
Os10g0357950
Os10g0358100 Non-protein coding transcript
Os10g0358150 Conserved hypothetical protein
Os10g0358200 Nucleotide-binding LRR receptor (NLR)
family protein
Os10g0358600 Similar to
OSIGBa0136O08-OSIGBa0153H12.4
protein
Os10g0358700 Pentatricopeptide repeat domain containing
protein
Os10g0358725
Os10g0358750
Os10g0358900
Os10g0359200 Similar to UPF0496 protein 1
Os10g0359500 No apical meristem (NAM) protein domain
containing protein
NAC61 ONAC061, ONAC61
Os10g0359700 Hypothetical gene
Os10g0359801 Conserved hypothetical protein
Os10g0360000
126

Table S24 – continued
RAP Locus ID Description RAP-DB CGSNL Oryzabase
Os10g0360100 Monosaccharide transporter (PLT
subfamily), PLT protein 3, Salt, osmotic
and drought stress response, Response to
ABA, IAA, 6-BA, SA, and GA treatments
OsPLT3 PLT3 OsPLT3
Os10g0360175 Hypothetical gene
Os10g0360600 Non-protein coding transcript
Os10g0360750
Os10g0360900 Hypothetical protein
Os10g0360800 LRR-receptor-like kinase (LRR-RLK)
family protein
Os10g0361000 Lipoxygese, LH2 domain containing protein LOX
Os10g0361200
Os10g0361300 Lipoxygese, LH2 domain containing protein
Os10g0361375 Hypothetical conserved gene
Os10g0361450
127

Table S25: Information about all potential candidate genes within 200 kb (100 kb upstream and downstream) of the lead SNP
sf1014955970, related to Figure 2
RAP Locus ID Description RAP-DB CGSNL Oryzabase
Os10g0422300 Pentatricopeptide repeat domain containing
protein
Os10g0422401 Similar to T6D22.22
Os10g0422500 Endonuclease/exonuclease/phosphatase
domain containing protein
Os10g0422583 Hypothetical protein
Os10g0422700 Conserved hypothetical protein
Os10g0422800 Protein of unknown function DUF1677,
plant domain containing protein
Os10g0423000 Conserved hypothetical protein
Os10g0423300 Similar to BTB/POZ domain containing
protein
OsMB40, MB40,
OsMBTB33, MBTB33
Os10g0423700 Conserved hypothetical protein OsMB33, MB33,
OsMBTB36, MBTB36
Os10g0423800 Similar to BTB/POZ domain containing
protein
MBTB37 MBTB37
Os10g0423900 BTB/POZ-like domain containing protein MBTB38 OsMBTB38
Os10g0424100 Similar to BTB/POZ domain containing
protein
Os10g0424400 Conserved hypothetical protein OsMB28, MB28,
OsMBTB39, MBTB39
Os10g0424733 Non-protein coding transcript
Os10g0425066 Non-protein coding transcript
Os10g0425400 BTB/POZ-like domain containing protein OsSTA244, OsBTB6,
BTB6
128

Table S25 – continued
RAP Locus ID Description RAP-DB CGSNL Oryzabase
Os10g0425700 MATH domain containing protein OsMB26, MB26,
OsATBPM2, ATBPM2
Os10g0422600 Protein of unknown function DUF581
family protein
FLZ28 OsFLZ28
Os10g0422566 Similar to predicted protein
Os10g0423400 Similar to BTB/POZ domain containing
protein
OsMB41, MB41,
OsMBTB34, MBTB34,
OsMBTB35, MBTB35,
OsMB48, MB48
Os10g0423501 Conserved hypothetical protein
129

Table S26: Lead SNPs, genomic loci, and mapped genes of swine, related to Figure 2
Lead SNP Chr Position p value Locus Start End Genes
1-7680166 1 7680166 2.00 × 10−13 1 7180166 8180166 ACAT2,
TCP1, Mas1, IGF2R, MRPL18, Pnldc1, SLC22A1, SLC22A2, FNDC1, SOD2, Wtap, SLC22A3 6-44068807 6 44068807 1.12 × 10−13 2 43568807 44568807 LSM14A, WTIP, KIAA0355, GPI, ZNF181, PDCD2L, UBA2, ZNF792, ZNF543, ZNF599 17-15860017 17 15860017 1.30 × 10−13 3 15360017 16360017 BMP2, FABP3
This table summarizes the lead SNPs identified in swine, including their genomic positions, associated loci, flanking regions, and mapped genes. Genes highlighted in bold represent candidate genes inferred through AIPheno interpretability analysis and supported by previously reported studies.
130

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:08.190Z
- **Text Length:** 219063 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 130 of 130
