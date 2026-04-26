# PDF Document: Liu et al. - 2025 - TeamPath Building MultiModal Pathology Experts with Reasoning AI Copilots.pdf

**File Path:** Liu et al. - 2025 - TeamPath Building MultiModal Pathology Experts with Reasoning AI Copilots.pdf

**Processed Date:** 2026-02-10T18:16:15.668Z

**File Size:** 5080.86 KB

**Total Pages:** 35

**Extracted Pages:** 35

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3633

**Title:** TeamPath: Building MultiModal Pathology Experts with Reasoning AI Copilots

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

TeamPath: Building MultiModal Pathology Experts with
Reasoning AI Copilots
Tianyu Liu1,2,3,14, Weihao Xuan4,5,14, Hao Wu6,15, Peter Humphrey6,15, Marcello DiStasio6,15, Heli
Qi5, Rui Yang7, Simeng Han8, Tinglin Huang8, Fang Wu9, Nan Liu7,10,11, Irene Li12, Hua Xu1,13
and Hongyu Zhao*1,2
1Interdepartmental Program of Computational Biology and Biomedical Informatics, Yale University, 2Department of Biostatistics, Yale University, 3Broad Institute of MIT and Harvard, 4Department of Complexity Science and Engineering, The University of Tokyo, 5Center for Advanced Intelligence Project, RIKEN, 6Department of Pathology, Yale University, 7Center for Quantitative Medicine, Duke-NUS Medical School, 8Department of Computer Science, Yale University, 9Department of Computer Science, Stanford -
University, 10Pre-hospital & Emergency Research Center, Duke-NUS Medical School, 11Department of Biostatistics and Bioinformatics, Duke University, 12The Graduate School of Engineering, The University of Tokyo, 13Department of Biomedical Informatics and Data Science, Yale University, 14These authors contributed equally to this work as leading authors., 15These authors contribute equally to this project as human experts, *Corresponding Authors.
Advances in AI have introduced several strong models in computational pathology to usher it into the
era of multi-modal diagnosis, analysis, and interpretation. However, the current pathology-specific
visual language models still lack capacities in making diagnosis with rigorous reasoning paths as well
as handling divergent tasks, and thus challenges of building AI Copilots for real scenarios still exist.
Here we introduce TeamPath, an AI system powered by reinforcement learning and router-enhanced
solutions based on large-scale histopathology multimodal datasets, to work as a virtual assistant for
expert-level disease diagnosis, patch-level information summarization, and cross-modality generation
to integrate transcriptomic information for the clinical usage. We also collaborate with pathologists
from Yale School of Medicine to demonstrate that TeamPath can assist them in working more efficiently
by identifying and correcting expert conclusions and reasoning paths. Overall, TeamPath can flexibly
choose the best settings according to the needs, and serve as an innovative and reliable system for
information communication across different modalities and experts.
Keywords: Histopathology Analysis, Pathology Foundation Model, Cancer Diagnosis, Large Language Model, Visual Language Model, Large Reasoning Model
1. Introduction
Pathological diagnosis is a complex yet essential component of clinical decision-making. Through the examination of whole-slide images (WSIs), physicians assess disease severity, evaluate the spatial distribution of malignant and healthy cells, and generate diagnostic reports or treatment recommendations (1–4). However, this process is both time-intensive and labor-intensive, and its accuracy can be influenced by uncontrollable factors such as the physician’s workload, fatigue, and level of expert-
ise (5). Recent advances in Artificial Intelligence (AI) have demonstrated considerable promise in augmenting diagnostic workflows (6–10). In particular, the deployment of foundation models for pathology not only reduces resource demands but also enables scalable, reproducible analysis. A deeper understanding of how these models generate diagnostic predictions, together with continued efforts to improve their mechanisms, is crucial for enhancing reliability and precision in clinical
Contact: tianyu.liu@yale.edu
arXiv:2511.17652v1 [q-bio.QM] 20 Nov 2025

TeamPath: Building MultiModal Pathology Experts with Reasoning AI Copilots
applications. This represents an emerging and important direction for future research.
Deconstructing the diagnostic workflow of pathologists provides critical insights into the role of AI in this domain. In practice, physicians analyze WSIs or regions of interest (ROIs) by examining selected patches, which might contain diagnostically relevant features. Localized assessments are then aggregated into a diagnostic report, which can support higher-level clinical investigations (11–13) when paired with the corresponding ROIs. Meanwhile, visual–language models (VLMs) (14) process paired-
 image–text inputs, typically images with accompanying questions or instructions, and generate responses by integrating and aligning information across modalities. Inspired by this parallel, researchers have begun to develop VLMs specifically tailored for WSIs and pathology diagnosis. For instance, SlideChat (15) and PathChat (16) were designed as copilots for pathology interpretation, while HistoGPT (11) can generate medical reports directly from histopathology images. Similarly, spEMO (12) exten-
ds this capability by incorporating both molecular and pathological information for a stronger report generation capacity. Other pathology foundation models (PFMs), such as MUSK (17) and PLIP (18), leverage text–image alignment to improve embedding quality. Collectively, these domain-specific PFMs and VLMs have advanced applications in medical report generation and multimodal integration, establishing pathology-focused VLMs as a promising and rapidly progressing research direction.
Nevertheless, certain tasks in pathology diagnosis are inherently complex and require deliberate reasoning before actions can be taken. To address such challenges, foundation models must demonstrate robust reasoning capabilities. Conventional VLMs, however, often struggle with reasoning-oriented questions, even when trained on extensive datasets. Equipping VLMs with effective reasoning capacity thus remains a central challenge in the medical domain. At the same time, physicians play an indispensab-
le role in the era of medical AI. They are not only domain experts but also important users and researchers for helping us correct errors made by AI models or interact with models to improve each other’s performances. Consequently, developing effective strategies for human–AI collaboration, particularly in ways that enhance rather than replace physician expertise, is an urgent priority for advancing reliable and clinically meaningful solutions.
Fortunately, encouraging progress in reasoning has been achieved in other domains, such as mathematics and logic, through the training of large language models (LLMs, which are text-only) and VLMs. These advances are largely driven by reinforcement learning (RL) with/without chain-ofthought (CoT) supervision, which has demonstrated strong reasoning capabilities (19). Importantly, such techniques can be adapted to medical applications, provided that domain-appropriate datasets are carefully constru-
cted. Within pathology, several groups have begun to explore reasoning-oriented models for diagnostic tasks (20–22). However, current approaches tend to be technically homogeneous and insufficient to disentangle the contribution of the reasoning process from the final answer. Little attention has been given to analyzing errors produced by reasoning, which is critical for improving model reliability. Moreover, most existing models remain closed-source, which limit opportunities for rigorous evaluat-
ion in real-world clinical scenarios and hindering community-driven progress. To address these gaps, we aim to develop a high-precision reasoning model that not only generates accurate diagnostic predictions but also explicates its reasoning path. Such a model would serve as a trustworthy assistant to physicians, support more informed clinical decision-making, and ultimately contribute to alleviating patient burden while advancing the goals of precision medicine.
In this manuscript, we present TeamPath, a framework that augments VLMs with multi-modal reasoning and a task-sensitive routing mechanism, enabling robust performance in several pathologyrelated tasks. Our approach begins with the careful selection of base models and the design of medical-specific prompts to curate high-quality, reasoning-enriched training data. Through comprehensive analyses, we demonstrate both the necessity of equipping VLMs with reasoning capabilities
2

TeamPath: Building MultiModal Pathology Experts with Reasoning AI Copilots
to address complex pathology tasks and the importance of constructing high-quality datasets for model success. We further showcase the effectiveness of TeamPath across diverse downstream applications, including multi-modal pathology visual question answering (Pathology VQA) and caption summarization. By leveraging an LLM-driven router, TeamPath dynamically selects the most suitable strategy to meet task requirements, functioning as a reliable and adaptive system. Importantly, we invite pathologist-
s to evaluate the model’s reasoning pathways, thereby validating its practical utility as a medical assistant. Finally, we introduce a new task, known as spatial transcriptomic profiles generation, to assess the cross-modality generative ability of TeamPath. Overall, TeamPath provides a new avenue for integrative analyses that combine molecular and histopathological signatures.
2. Results
Dataset and Method Overview. The curation of high-quality datasets is increasingly critical for advancing PFMs and VLMs, particularly in the era of multimodal reasoning and summarization. At the same time, careful attention must be paid to preventing data leakage to ensure unbiased evaluation of model performance. To this end, and leveraging prior data collection strategies, we distilled a subset of data from PathGen-1.6M (23), which is a large-scale resource comprising nearly 10,000 WSIs and 1.6 -
million ROIs derived from TCGA data (24), for the usage in the finetuning stage with reinforcement learning. Reasoning data were constructed using COT templates generated based on the advanced reasoning model o4-mini (25), with subsequent quality validation performed by pathologists at Yale School of Medicine. Importantly, this dataset does not overlap with the benchmark testing set used for Pathology VQA evaluation (26), namely PathMMU (27), which contains ROIs paired with questions across five d-
iagnostic categories and represents one of the most advanced evaluation sources. In addition, another subset distilled from PathGen-1.6M was curated as the testing dataset for the ROI summarization task. To assess performance in cross-modality generation, we leveraged HEST-1K (28) and STImage1K4M (29), two multi-omic histopathology collections to assess the prediction of transcriptomic profiles as molecular signatures from ROIs. These two datasets are used to construct training, validation, and te-
st sets. The overall data preprocessing workflow and sample sizes are summarized in Extended Data Figure 1.
The overall process of dataset curation and model training is summarized in Figures 1 (a)-(d). TeamPath emerges as a robust multimodal AI assistant for both disease diagnosis and modality generation. To refine its reasoning capabilities, we employ Group Relative Policy Optimization (GRPO) (30) to finetune the base model (the default setting is Patho-R1-7B), thereby enhancing its ability to perform reasoning over pathology images. With this capacity for structured reasoning, TeamPath demonstrates s-
trong performance in addressing Pathology VQA tasks, as shown in our comprehensive benchmarking analysis. Importantly, the model also maintains high performance on tasks where reasoning is less critical, such as image summarization (known as caption generation) and cross-modality generation. This adaptability enables TeamPath to support task-specific optimization through either reinforcement learning or supervised finetuning. In collaboration with expert pathologists, we further demonstrate that T-
eamPath can function as a clinical copilot, assisting in applications such as correcting inaccurate conclusions and identifying flawed reasoning paths. Taken together, TeamPath advances both biomedical research and clinical practice in histopathology analysis. Finally, a comparative summary of task- and metric-specific rankings, shown in Figure 1 (e), demonstrates the superior performance of TeamPath across multiple dimensions.
TeamPath improves the performance of ROI-level assessment with reasoning ability. The increasing complexity of histopathology image analysis presents significant challenges for developing expert-level VLMs. One particularly demanding setting is Pathology VQA, which requires models to correctly respond to questions grounded in histopathology images. Unlike traditional classification
3

TeamPath: Building MultiModal Pathology Experts with Reasoning AI Copilots
<Answer> ...
</ Answer >
<think> ... </think>
a
Agent Summary
Instruct QA pairs
PathGen-1.6M PathInstruct-Reason
Expert Vis Encoder
Expert Lang Encoder
Expert Lang Decoder
Answer...
You are a pathology expert, your task is to answer question step by step...
VLM Training
c
Task-Spec Instruction
Expert A
SFT
RL
Spatial Transcriptomic Generation
Reasoning-driven VQA
Reasoning-driven Summary
d
TeamPath Router-based Multi-Task System
AI-Physician Collaboration
PathGen-1.6M: 9k WSIs from TCGA 1.6M patches from WSIs
TTS
CST3 GFAP CLU...
The colon tissue exhibits pleomorphism ...
Request
The treatment could be better...
Dataset Curation
PathInstruct-Reason: 20k reasoning prompts 3 pathologists from YSM
Instruct QA pairs w Reasoning
Dataset Statistics
Data retrieval
COT data generation
Expert B
Expert C
Router
F1
SFT
e Pathology VQA Split Pathology Summary Metric Generation Metric
Rank
18
TeamPath-7B
PathGen-LLaVA-13B
Patho-R1-7B
Qwen2.5VL-7B
MedGemma-4B
InternVL3-8B
Qwen2.5VL-3B
MedVLThinker-7B
PubMed SocialPath Atlas EduContent PathCLS BLEU ROUGE-1 ROUGE-2 ROUGE-L BERT MEDCON SPCC GPCC MSE AvgRank
Instruct Transcriptomic pairs
Whole-Slide Image Region of Interests
STImage1K4M: 1k+ Multi-Omic datasets 30,000+ measured genes
HEST-1K: 1k+ Multi-Omic datasets 200+ measured genes
HEST-1K/STImag1K4M
Figure 1: Landscape of TeamPath (a) Steps of dataset curation. We extract image-text pairs from a processed TCGA dataset (PathGen-1.6M). (b) Word cloud visualization of ROI captions (upper) and questions (bottom). (c) The core visual language model architecture of TeamPath. (d) TeamPath as a system with an LLM-enhanced router (with over 80% accuracy in choosing the correct approach) and the corresponding capacities in various downstream applications. The logo fire means that we need to adjust the -
parameters of models, and the logo snowflake means that we do not change the parameters. (e) Overall ranking list of different methods across tasks and metrics. A lower rank (larger bubble) means a better method.
4

TeamPath: Building MultiModal Pathology Experts with Reasoning AI Copilots
tasks (e.g., disease-state classification or cancer cell identification), Pathology VQA involves a broader and more complex range of scenarios (31) and demands higher accuracy in answer production. To evaluate model performances under this setting, we employ the recently published PathMMU dataset, which includes VQA pairs spanning five categories, ranging from expert-annotated questions to images from social media. Importantly, PathMMU is excluded from the training data of all evaluated models to -
ensure fairness. Reflecting the real-world requirements faced by pathologists, we emphasize the need for high-quality, fine-grained answers that integrate multimodal information and contribute meaningfully at the clinical level. Our baseline comparisons encompass (1) general-domain VLMs, including Qwen2.5VL-3B, Qwen2.5VL-7B (32), and InternVL3-8B (33); (2) medical-domain VLMs, including MedGemma-4B (34) and MedVLThinker-7B (35); (3) pathology-specific VLMs, including PathGen-LLaVA-13B (23) and Pat-
ho-R1-7B (20); and (4) a random-answer baseline. Model performance is assessed by computing accuracy relative to expert-generated answers within PathMMU, enabling a rigorous and fair benchmarking analysis.
Figures 2 (a)-(c) show our benchmarking results across different categories, including PubMed, SocialPath, Atlas, EduContent, and PathCLS. PathMMU also pre-defines different sample types, and “overall" represents all testing samples in the selected category, “tiny_test" represents testing samples used for expert evaluation, and “test” represents the rest of the samples. We find that TeamPath outperforms all other baseline models, including domain-expert VLMs with similar or larger parameter size, -
such as Patho-R1-7B and PathGen-LLaVA-13B, in nearly all evaluations. Both general VLMs and medical VLMs performed poorly in this task. We further visualize the comprehensive benchmarking analysis, including ranking and accuracy of each method with all samples in Figure 2 (d), which shows that TeamPath also has the lowest rank by considering all categories jointly. Therefore, our experiment results show that introducing reasoning capacities to build pathology-expert VLMs can enhance their ability -
in making diagnoses, and thus TeamPath can serve as a strong performer for the key feature identification and content understanding of ROIs.
To obtain a more intuitive understanding of the key contributions of TeamPath following reinforcement learning training, we selected two case studies where TeamPath provided the correct answer while other models failed to make accurate judgments.
Figure 3 highlights the importance of precise morphological criteria in recognizing lipoblasts. While several models incorrectly selected option C, describing large, clear vacuoles displacing the nucleus to the periphery, a hallmark of mature adipocytes. We found that TeamPath correctly identified option B as the defining feature of lipoblasts (36). Lipoblasts are diagnostically recognized by the presence of moderately sized cytoplasmic fat vacuoles that indent or scallop the nucleus, a distinctio-
n that separates them from both mature adipocytes and other stromal features. By emphasizing nuclear indentation rather than displacement, TeamPath demonstrated accurate pathological reasoning aligned with standard diagnostic criteria. This correctness not only underscores the reliability of TeamPath in differentiating subtle histologic features but also highlights the critical nuance needed in distinguishing malignant lipoblastic cells from benign adipocytic processes. Moreover, Extended Data Fig-
ure 2 demonstrates that TeamPath correctly identified synaptophysin as the targeted marker in the immunohistochemical stain of section A. The brown, cytoplasmic staining pattern observed is a hallmark of synaptophysin, which is widely used as a marker of neuroendocrine differentiation. While other models misclassified the stain as estrogen receptor or S100 protein, TeamPath distinguished the subtle morphological and staining features that separate synaptophysin from nuclear markers like estrogen r-
eceptor or more diffuse proteins such as S100. This highlights both the accuracy and interpretive strength of TeamPath in immunohistochemistry tasks, particularly in recognizing marker-specific staining patterns and avoiding common pitfalls that lead to misclassification. We also note that previous pathology expert models have obvious shortcomings, such as Patho-R1-7B’s garbled output and PathGen-LLaVA’s lack of interpretable diagnostic outputs. Instead,
5

TeamPath: Building MultiModal Pathology Experts with Reasoning AI Copilots
F2
ab
cd
Type: Tiny test
Type: Large test
Type: Overall
Rank 1 Rank 3 Rank 5 Rank 9
Figure 2: Benchmarking results with PathMMU for the pathology VQA task. We note that since we did not have information about the testing setting of PathGene-LLaVA-13B, we used results reported by the model creators in (23). (a) Accuracy across different categories of all selected methods with all samples. (b) Accuracy across different categories of all selected methods with samples from a tiny set. (c) Accuracy across different categories of all selected methods with samples from a large set. (d) -
Joint visualization with accuracy and ranking information for all selected methods. The darker the bubble color, the higher the model score; The larger the bubble shape, the lower the model ranking.
TeamPath can make correct identification supported by comprehensive explanations, explained in the information provided by the reasoning paths.
We also explored the contributions of different training strategies and highlighted the importance of selecting base models based on a set of ablation studies, discussed in Appendix B and Extended Data Figures 3 (a)-(d), as well as in Appendix C and Extended Data Figure 4 for the data ablation study.
TeamPath acts as a Copilot in the pathologists-AI collaboration system. Beyond demonstrating the capacity of TeamPath in handling VQA sets as a pathology expert, we further explore its potential as an AI-assisted collaborator (37, 38). An effective copilot should not only provide accurate responses to user queries but also reduce the effort required to resolve them, thereby saving both time and cost. To this end, we designed an algorithm in TeamPath with test-time scaling (TTS) (38, 39) and engage-
d expert pathologists from Yale School of Medicine (YSM) to collaborate with TeamPath in analyzing histopathology images and generating answers on demand. Specifically, we randomly subsampled 10 question–image pairs from each category within the PathMMU “tiny_test” set and examined two capacities: (1) the ability of TeamPath to act as an auto-verifier or auto-corrector for incorrect expert assessments, and (2) the ability of TeamPath to revise and correct reasoning pathways when human experts fail-
 to provide accurate answers. The overall paradigm for these two tasks is summarized in Figure 4 (a). Through this study, we aim to establish future paradigms of human–AI collaboration in biomedical research and clinical practice, highlighting the role of TeamPath as a reliable and strong copilot.
We jointly compared the expert-provided results with those corrected by TeamPath and visualized the
6

TeamPath: Building MultiModal Pathology Experts with Reasoning AI Copilots
F3
Question: Which of the following features in the image is indicative of lipoblasts?
Annotated answer: (B) Moderately sized fat vacuoles causing indentation of the nucleus.
Options: (A) Dense fibrous stroma, (B) Moderately sized fat vacuoles causing indentation of the nucleus, (C) Large, clear vacuoles displacing the nucleus to the periphery, (D) Uniform, round nuclei with small vacuoles.
No evidence of epithelioid arrangement or cribriform infiltration typical of neuroendocrine tumors observed, leaving focus on infiltrative lesions...fibrondalkxk12 cells resemble basaloid rhabdomyobe, defined per "fine to dense pale/amphiphilic longitudinal/cnge." C clarifies misidentified cross-placments as basal "rultxkxk1...
Patho-R1
Qwen2.5VL-7B
The image shows a histological section with features that can be indicative of lipoblasts. Lipoblasts are immature adipocytes and are characterized by large, clear vacuoles that displace the nucleus to the periphery. Therefore, the correct answer is (C).
InternVL3-8B
Lipoblasts are large, undifferentiated cells in liposarcomas that have cytoplasmic lipid vacuoles, which cause the nuclei to be pushed to the periphery, creating a characteristic... The answer is: C.
The correct answer is (C) Large, clear vacuoles displacing the nucleus to the periphery. Here‘s why: **Lipoblasts** are immature fat cells. Histologically, they are characterized by: * Large, clear vacuoles (fat droplets) * The nucleus is often displaced to the periphery of the cell * The cytoplasm is largely composed of fat. Other options are wrong...
MedGemma-4B
MedVLThinker-7B
To identify lipoblasts in histological images, it's important to look for features specific to these cells. Lipoblasts are characterized by their large, clear vacuoles that represent lipid storage, which can displace the nucleus to the periphery. This feature is a hallmark of lipid accumulation within the cytoplasm. The answer is: C.
PathGen-LLaVA
C. Large, clear vacuoles displacing the nucleus to the periphery
TeamPath-7B
Think: Lipoblasts are defined by the presence of fat vacuoles that indent the nucleus, making it the most diagnostically important feature. While moderately sized vacuoles are suggestive, only those causing nuclear indentation meet the criteria for lipoblasts. Option B correctly identifies this defining feature. Dense fibrous stroma (A) and large vacuoles with peripheral nuclei (C) are not specific to lipoblasts. Uniform nuclei (D) contradict the pleomorphic, hyperchromatic nuclei typical of lipob-
lasts. Thus, B is the best answer. Answer: B.
Green means right info. Red means wrong info.
Figure 3: Case study (topic: synaptophysin, which is a precursor cell that develops into an adipocyte (fat cell)) based on the outputs from different models. We highlight the correct information with green text and incorrect information with red text. For the models with errors, we consider two cases. The first case is a wrong answer, and the second case is a confused reasoning path.
7

TeamPath: Building MultiModal Pathology Experts with Reasoning AI Copilots
Answer Corrector
Verifier
Proposed Answer
Question
Corrected Answer
Feedback Loop
Reason Corrector
Proposed Answer
Question
Wrong Reason Corrected Answer
Correct Reason
a b Expert Corrector
c
Question: What characteristic features are observed in the nuclei of the cells in this image? Options: A) Large, hyperchromatic, round nuclei with finely divided chromatin. B) Small, elongated nuclei with uniform chromatin. C) Nuclei with multiple intranuclear inclusions. D) Large, vesicular nuclei with prominent nucleoli.
Green means right info
Expert answer: D) Large, vesicular nuclei with prominent nucleoli.
Expert reason: The nuclei are bigger than the nuclei of the stromal cells. They are round, and vesicular. I can’t see nucleoli or inclusions very well at this magnification, but nucleoli are generally expected when the nuclei are vesicular.
TeamPath answer: A) Large, hyperchromatic, round nuclei with finely divided chromatin.
TeamPath reason: Option D describes large, vesicular nuclei with prominent nucleoli, which are features of immunoblasts or Reed–Sternberg cells. The chromatin in the image is not vesicular or pale but rather dark and clumped, and nucleoli are not prominent. The chromatin in the image is not vesicular or pale but rather dark and clumped, and nucleoli are not prominent. Thus, the correct answer is A, not D.
Red means wrong info
P-value=0.0004
Figure 4: Results of using TeamPath as the answer corrector/reason corrector. TeamPath can work with pathologists together to improve the diagnosis accuracy and provide explainable reasons to support the decision. (a) The illustration of self-verification/correction steps for both answers and reasoning paths. (b) Accuracy before and after correction based on selected samples from PathMMU. We report the average scores and standard deviation across three experts. The test is a one-sided Wilcoxon Ran-
k-sum test. (c) A case study to demonstrate the power of TeamPath as an AI assistant.
corresponding accuracies in Figure 4 (b). Our analysis shows that TeamPath significantly improves accuracy across all PathVQA categories (p-value = 0.004), demonstrating that its corrective contribution is consistent and robust regardless of the source of pathology ROIs or questions. Notably, even in categories where expert performance is relatively low, such as PubMed, TeamPath achieves substantial gains. These improvements demonstrate the effectiveness of TeamPath as a corrector, as reflected by-
 the observed accuracy differences. To further illustrate this capability, we conducted a case study (Figure 4 (c)) in which the expert provided an incorrect answer, whereas TeamPath generated the correct response with an improved reasoning path. In this example, the task involved identifying characteristic nuclear features within the image. The expert’s reasoning correctly accounted for cell size but overlooked nucleolar details, leading to an erroneous conclusion. In contrast, TeamPath integrate-
d multiple features, including nuclear size, shape, staining depth, and prior knowledge of the cancer cell line, to eliminate incorrect options and arrive at the correct decision. Moreover, TeamPath was also able to revise flawed reasoning paths when experts could not provide an answer (e.g., “I do not know"), as shown in Extended Data Figure 5. In summary, through collaborative evaluation with pathologists, we demonstrate the capacity of TeamPath to not only fix erroneous answers but also provide-
 explicit reasoning steps, thereby enhancing both the transparency and interpretability of model-assisted pathology diagnosis.
We have also performed ablation studies for the verifier with three different choices (using the corrector, o3 (25), and o4-mini). Extended Data Figure 6 shows that using o4-mini can achieve the best performance on average, while it can also reduce the cost compared with using o3 or a more advanced model, and thus o4-mini is selected here to perform verification.
TeamPath performs better in summarizing the key information from histopathology images.
8

TeamPath: Building MultiModal Pathology Experts with Reasoning AI Copilots
In practical applications, pathology image analysis often extends beyond generating correct answers and reasoning steps to encompass the extraction of important image features for macroscopic or high-level descriptions. To evaluate this capability, we designed experiments aimed at summarizing histopathology information from different ROIs, thereby assessing the capacity of TeamPath to capture and convey high-level image content. For this purpose, we constructed a testing dataset by subsampling 3,0-
00 images and their corresponding captions from PathGen-1.6M, with image categories defined using GPT-4o prompts (40). These captions were further annotated to include tissueand disease-state information. To support training, we curated a separate dataset of 50,000 images, ensuring no overlap with the testing set. For benchmarking, we employed the same set of baseline models used in the Pathology VQA experiments. Model performance was evaluated using multiple similarity metrics between generated s-
ummaries and reference captions, including BLEU (41), ROUGE-1/2/L (42), BERTScore (43), and MEDCON (44). All metrics were scaled to a 0–100 range, with higher values indicating better performance.
Figure 5 (a) compares the performance of TeamPath with other VLMs across all selected metrics on the testing set. TeamPath consistently outperforms the baselines across every metric, demonstrating its strength in generating summaries that align closely with reference annotations in both content and structure. To provide a holistic assessment, we further visualized the aggregated rankings and average scores of all methods in Figure 5 (b), which highlights the leading performance of TeamPath across -
the joint set of evaluation metrics. Recognizing that performance may vary by sample source, we also examined model performance across specific tissue and disease contexts. Figure 5 (c) reports ROUGE-L and BERT scores for samples from patients with adenocarcinoma, while Figure 5 (d) shows results for breast tissue samples. In both cases, TeamPath maintains superior performance compared with competing baselines. As an illustrative case study, Figure 5 (e) presents an example output from TeamPath, w-
hich accurately captures key organizational and pathological features—such as elongated spindle-shaped cells with eosinophilic cytoplasm and elongated nuclei, characteristic of smooth muscle cells. By contrast, outputs from baseline models (Extended Data Figure 7) contain less precise descriptions and, in some cases, incorrect content, further underscoring the advantages of TeamPath in summarization tasks.
Therefore, we conclude that TeamPath demonstrates as a strong performer in providing the high-level interpretations with pathology features of assigned ROIs.
9

TeamPath: Building MultiModal Pathology Experts with Reasoning AI Copilots
a
b
cd
The tissue image reveals elongated, spindle-shaped cells with eosinophilic cytoplasm and elongated nuclei, typical of smooth muscle cells, in a disorganized arrangement. The presence of lighter-staining connective tissue suggests extracellular matrix involvement.
The tissue image displays elongated, spindle-shaped cells with eosinophilic cytoplasm and elongated nuclei, typical of smooth muscle cells, arranged in a disorganized pattern. Moderate pink-staining extracellular matrix suggests connective tissue presence.
Recorded
TeamPath
e
Prompts:
Provide a concise pathological summary of the tissue shown in this histopathology image, highlighting any abnormal cellular or structural features in one paragraph.
Yellow text represents concept matched context.
Figure 5: Benchmarking results of the caption summary task. (a) Performances of different methods for summarizing the caption based on ROI-level information across all metrics. We report the average scores and scaled standard deviation (0.1*sd) with all samples in the testing set. (b) Joint visualization with metric scores and ranking information for all selected methods. The darker the bubble color, the higher the model score; The larger the bubble shape, the lower the model ranking. (c) ROUGE-L -
and BERT scores based on samples from the selected disease across all methods. (d) ROUGE-L and BERT scores based on samples from the selected tissue across all methods. (e) A case study of caption summary generation based on TeamPath.
10

TeamPath: Building MultiModal Pathology Experts with Reasoning AI Copilots
TeamPath introduces new modalities with a cross-modality generation pipeline. Building on our previous research and the existing literature, we observe that current histopathology image analyses primarily rely on textual and visual interpretations. However, given the breadth of biological signatures that can contribute to disease modeling and diagnosis, there is a clear opportunity to design new pipelines that integrate molecular information with histopathology features. Such integration can enabl-
e the generation of new modalities and provide deeper insights into cellular heterogeneity, lineage tracing, and disease mechanisms (45, 46). Therefore, we finetune TeamPath using paired histopathology images and transcriptomic profiles generated with the Visium technology (47), a platform for spatial transcriptomics (ST). Each ST spot includes a histopathology image as background and a corresponding gene expression profile. Inspired by Cell2Sentence (48) and Loki (45), we convert gene expression -
profiles into ranked gene lists, ordering genes from highest to lowest expression. The task is then to generate these “spot sentences” and map them back into the transcriptomic space. For training and evaluation, we use two of the largest public datasets: HEST1K (invasive ductal carcinoma, IDC) and STImage1K4M (brain tissue). HEST-1K includes a broad range of cancer datasets, whereas STimage1K4M contains samples from both disease and normal tissues, thereby enhancing the modeling of ST data. Basel-
ine models for this task include the same VLMs evaluated in the Pathology VQA setting, supplemented with Cell2Sentence-1B. Performance is assessed using Spot-level Pearson Correlation Coefficient (SPCC), Gene-level Pearson Correlation Coefficient (GPCC), and mean squared error (MSE). For SPCC and GPCC, higher values indicate better performance, whereas lower MSE values reflect higher accuracy.
Figures 6 (a) and (b) demonstrate that TeamPath outperforms all baseline methods when evaluated by both SPCC and MSE across datasets from different sources, underscoring its ability to generate spot-level gene expression profiles that closely resemble measured results. Extended Data Figures 8 (a) and (b) further confirm TeamPath’s better performance in GPCC, highlighting its capacity to preserve gene-level heterogeneity across spatial spots. To examine the impact of base model selection on cross-m-
odality generation, we finetuned Qwen2.5VL-7B for the same task and compared it with TeamPath. As shown in Extended Data Figures 8 (c) and (d), TeamPath, which was built on a pathology-knowledge-enhanced VLM, outperformed the finetuned Qwen-series model. We also emphasize the importance of task-specific finetuning, supported by the clear performance gap between the unadapted base model and TeamPath in generating high-quality expression profiles. UMAP visualizations of the generated profiles (Figur-
es 6 (c) and (d)) show that outputs from TeamPath are more structured and closely aligned with reference profiles compared to those from the base model. This observation is further validated by cluster-level heatmaps of gene expression patterns in brain (Figure 6 (e)) and IDC (Figure 6 (f)) datasets, where TeamPath more accurately recapitulates the biological signal present in the ground truth data. Collectively, these findings demonstrate that the effectiveness of TeamPath in cross-modality gener-
ation arises from both the choice of a pathologyinformed base model and targeted task-specific finetuning. With these advantages, TeamPath represents a promising approach for generating in-silico or unseen expression profiles directly from histopathology images, thereby providing molecular-level insights into disease phenotypes.
3. Discussion
Advances in artificial intelligence technology have endowed computational pathology with new capabilities, while the application-level focus on decision-making processes also places higher demands on the capabilities of computational pathology models. Moreover, current research lacks validation and investigation into how AI models collaborate with experts and pathologists, and the modalities of integrated information of these models remain confined to text and images. Therefore, designing an effic-
ient AI assistant for pathology research and diagnosis holds significant practical importance.
11

TeamPath: Building MultiModal Pathology Experts with Reasoning AI Copilots
F6
ab
Patho-R1 TeamPath
c Patho-R1 TeamPath
Generated Reference
Generated Reference
Brain IDC
UMAP1
UMAP2
e
f
TeamPath Real data
d
Figure 6: Evaluation of model performances for transcriptomic profile generation. (a) SPCC (higher is better) and MSE (lower is better) scores across different methods for the brain tissue. We report the average scores and scaled standard deviation (0.1*sd) for better visualization. (b) SPCC and MSE scores across different methods for the IDC samples. We report the average scores and scaled standard deviation (0.1*sd) for better visualization. (c) UMAP visualization from the testing set of brain t-
o compare the generated results between Patho-R1 (base) and TeamPath colored by data sources. (d) UMAP visualization from the testing set of IDC to compare the generated results between Patho-R1 (base) and TeamPath colored by data sources. (e) Comparison of expression profiles between generated data and real data based on the brain tissue. (f) Comparison of expression profiles between generated data and real data based on the IDC samples.
12

TeamPath: Building MultiModal Pathology Experts with Reasoning AI Copilots
Here we present TeamPath, an advanced AI copilot to advance research in computational pathology and disease diagnosis by formulating a multi-task AI assistant, which supports various tasks with an automatic router for solution selection. To empower the generalization ability and thinking process of VLM, we utilize reinforcement learning to finetune a reasoning-enhanced VLM, which serves for handling the pathology visual question-answer task. We perform comprehensive analyses to select the best tra-
ining strategy for this task. We also design a self-verification/correction pipeline to fix the imperfect answer and reasoning paths proposed by experts for the Pathology VQA task. Furthermore, to successfully summarize the caption of a given image, we further train a summarization-enhanced VLM for caption generation and image understanding. To demonstrate the capacity of VLM for multimodal information generation, we also finetune a model for generating spatial transcriptomic data directly from RO-
Is, which also provides a direction for exploring the multimodal information integration for utilizing the potentials of histopathology images.
Our experimental results show that TeamPath works as a state-of-the-art method in several tasks by comparing it with advanced VLMs from general domains, medical domains, and pathology domains. TeamPath can also produce more reliable reasoning paths for disease diagnosis and feature analysis. TeamPath also successfully identifies the incorrect information existing in pathologists’ answers and reasoning processes and provides the correction suggestions as well as corrected answers within a reasonabl-
e response time. Finally, TeamPath works as a strong generator for image caption and transcriptomic information, which supports its capacity in understanding ROI-level information and integrating bimolecular information with a multi-task system.
There are also limitations of the current implementation of TeamPath. First, the improvement of base VLMs will affect the choices of components in this system, and thus, we expect to see regular model updates. Second, our task selection process relies on a trained LLM as a router, which might be substituted with a mixture-of-expert setting. We also found that in rare cases, the model’s reasoning process and its conclusion may not align (Extended Data Figure 9), but it could be identified by physic-
ians. Finally, we have not considered the privacy issues involved in pathological image analysis. Although we have made every effort to ensure that personal privacy information is not used for training, exploring defenses against attacks in this area is also important. In the future, we will work on these directions to make the system alive and improve its capacity and robustness.
4. Methods
Problem definition. In this manuscript, we aim to construct a pathology-expert-level visual language model M () which accepts text prompts T and pathology image P as inputs. The outputs of our model follow the instructions and information provided in T and P. To train M (), we collect a dataset
Dp = {(T1, P1), ..., (Tn, Pn)}n
1 with n items for training, and transfer the trained model to various
downstream applications.
Constructing TeamPath as a system. To enhance our system’s multitasking capabilities, we adopted a method commonly used in current basic model development, namely training a language modelbased router (R ()) according to tasks and requirements. This router accepts questions as input data and outputs the model it selects to solve specific problems. The advantage of this design is to unify the TeamPath as a system for various downstream applications in digital pathology, and select the solution that-
 best meets needs to save costs and improve model capabilities. We mark the best solution settings (one of the following choices: Reinforcement Learning (RL) (49), Supervised FineTuning (SFT) (50), and Test-Time Scaling (TTS) (39)) of each question, and train R with questions and choices. Here, RL is used for solving questions that require reasoning, and SFT is used for summarization and cross-modality generation. Since AI Copilot needs interactions with physicians, TTC
13

TeamPath: Building MultiModal Pathology Experts with Reasoning AI Copilots
is used for tasks requiring human-AI collaboration. Current base model of TeamPath is Patho-R17B (20), which is selected after carefully comparing it with different LMMs such as Qwen2.5VL-7B (32), Qwen2.5VL-3B (32), MedVLThinker-7B (35), PathGen-LLaVA-13B (23), InternVL3-8B (33), and MedGemma-4B (34).
Empowering TeamPath with reasoning capacities. To enhance the reasoning capabilities of TeamPath for complex pathological analysis, we adopt Group Relative Policy Optimization (GRPO), an efficient reinforcement learning algorithm that forgoes the critic model used in traditional PPO (51).
For each pathological query q, GRPO samples a group of G outputs {o1, o2, . . . , oG } from the current policy πθ and optimizes the following objective:
JGRPO (θ) = E q ∼ P (Q), {oi}G
i=1 ∼ πθold (O|q)
"
1
G
G ∑︁
i=1
1
|oi |
|oi |
∑︁
t=1
ˆ
Ai,t
πθ (oi,t |q, oi,<t)
πθold (oi,t |q, oi,<t) − β DKL (πθ ||πre f )
#
,
(1)
where the key novelty lies in the group-relative advantage estimation:
ˆ
Ai,t = ri − mean(r)
std(r) . (2)
Here, r = {r1, r2, . . . , rG } represents the reward scores for all outputs in the group, obtained from a reward model trained on the quality of pathological reasoning. This group-relative formulation eliminates the need for a separate value function Vψ required in PPO, significantly reducing computational overhead while maintaining training stability.
For GRPO, the reward of question i is:
ri = r( yˆi, yi) =
(
1
, is_equivalent ( yˆi, yi)
0
, otherwise
, (3)
where yˆ and y represent the model outputs and observed answers, respectively. is_equivalent() is a function used to determine if the answer is correct or not.
In our ablation studies, we also consider introducing open-ended questions to model training; in that case, we utilize the BLEU score as a reward. The reward for closed-ended samples is the same, but for open-ended sample j, the reward is:
rj = r( yˆj, yj) = BLEU( yˆj, yj). (4)
The comparative nature of this approach aligns naturally with pathological diagnosis workflows, where medical experts simultaneously evaluate multiple diagnostic hypotheses. By learning from the relative quality of responses within each group, TeamPath develops more nuanced reasoning capabilities for tasks requiring differential diagnosis, evidence synthesis, and step-by-step pathological analysis.
In our ablation studies, we also consider Dynamic sAmpling Policy Optimization (DAPO) as an alternative reinforcement learning algorithm. DAPO removes the KL divergence and adjusts the grouplevel normalization method. That is:
14

TeamPath: Building MultiModal Pathology Experts with Reasoning AI Copilots
JDAPO (θ) =E(q,y)∼D,{oi }G
i=1∼πθold ( · |q)
"
1
ÍG
i=1 |oi |
G ∑︁
i=1
|oi |
∑︁
t=1
min rai,t (θ) Aˆi,t, clip rai,t (θ), 1 − εlow , 1 + εhigh Aˆi,t
#
s.t. 0 <| {oi | is_equivalent ( y, oi)} |< G,
(5)
where
rai,t (θ) =
πθ oi,t | q, oi,<t
πθold oi,t | q, oi,<t
, Aˆi,t =
ri − mean {ri}G
i=1
std {ri}G
i=1
. (6)
Here ε is the cut-off value to avoid gradient exploding.
Ablation studies of training framework. To demonstrate the efficiency and optimization of our training framework for this system, we have considered several training strategies, including 1. Supervised finetuning (SFT), which collects paired data with images and queries as inputs and answers as outputs; 2. Reinforcement Learning (RL), which utilizes the same input and output data, but we train TeamPath with GRPO (51) or DAPO (52) to tackle the reasoning capacity of selected base models; 3. SFT+RL,-
 which utilizes the paired data with images, queries, and reasoning paths as inputs and answers as outputs, to train TeamPath with SFT and then with RL. The first step of SFT training ensures the model acquires knowledge in relevant pathological domains, while the second step of RL training enhances the model’s generalization capabilities. Our base models used for ablation studies include Qwen2.5VL-7B and Patho-R1-7B.
Using TeamPath as an AI Copilot to help pathologists. To formalize our method as an AI Assistant, we consider two case studies inspired by the Path VQA experiments with pathologists. We invite the pathologists to answer 50 questions extracted from PathMMU from the five categories, and record their answers as well as reasoning steps. Our first case is a verifier-corrector pipeline, which can detect the incorrect answers made by pathologists and generate the correct answers. Our pipeline utilizes on-
e verifier (a VLM, default as o4-mini) to verify whether the answers and questions proposed by pathologists are correct or not. If it is justified as wrong, we will call the corrector (also a VLM, default as TeamPath used for Pathology VQA) to fix it. Otherwise, the correct answer will be returned. We have a specific threshold to limit the number of epochs in this loop. Our algorithm is summarized in Algorithm 1. We define the success of a self-verification/correction system as follows: if the exp-
ert answer is correct, or the expert answer is wrong but the answer produced by this system is correct.
The second case is a reasoning-correction pipeline. Here we have a reasoning corrector, which takes the wrong answers and reasoning paths from pathologists, and generates the correct reasoning path with the correct answer. This pipeline can detect the wrong information provided in the reasoning process and generate the correct thinking steps. These two components focus on different aspects and work together as a prototype for building an AI Copilot that can work with pathologists and be deployed i-
n the medical system. We have provided an example of correction in the main text. Our prompts used in these two pipelines are summarized in Appendix A.
Adapting TeamPath for image summarization and cross-modality generation. To summarize the concepts in histopathology images and further generate image caption, we finetune our base model based on the paired image-caption dataset with the corresponding training set, and we also prepare 3000 samples which are only used for testing, and we utilize Deepseek-R1 (30) to extract the disease state and tissue source of the testing samples based on their captions. Our finetuning step follows the setting in -
Instruction-Tuning implemented in Llama-factory. We construct 10 different prompts
15

TeamPath: Building MultiModal Pathology Experts with Reasoning AI Copilots
Algorithm 1 Verifier-Corrector Pipeline in TeamPath.
Input: Question QM, pathology image IS, human answer OA, reasoning path OR, verify prompt TV , correct prompt TC, number of iteration N. Helper Models: Verifier Mv (An advanced LMM, such as O4-mini), corrector Mc (An pathologyspecific LMM, such as TeamPath with RL finetuning), concatenation function ·||·. Output: Corrected outputs OC 1: INIT: initialize all parameters.
2: if Mv (TV , QM ||OR ||OA, IS) is True then
3: OC = OA
4: Return OC 5: end if
6: for i in N steps do
7: Oi, Ri = Mc (TC, QM ||OR ||OA, IS)
8: if Mv (TV , QM ||Ri ||Oi, IS) is True then
9: OC = Oi
10: Return OC 11: else
12: OR = Ri
13: OA = Oi
14: end if 15: end for
16: OC = OA
17: Return OC
to ask TeamPath for generating the image captions to reduce the bias of prompt information in the training process.
To perform the cross-modality generation task, we also finetune our base model based on the paired image-transcriptomic profile dataset with the corresponding training datasets. We select sequence data that comes from different batches and resources, but the same tissue/disease, to build a testing dataset. To transfer the information in gene expression space to text space, we first rank the genes of each spot based on their expression profiles and select the top 100 genes to formulate them in natu-
ral language. We then train a linear regressor that takes the natural language information as inputs and original gene expression profiles as outputs based on the training dataset, which finally gives us a method to decode the language information back to gene expression levels. We finetune our base model with the same approach used in image summarization and also construct 10 different prompts to ask TeamPath for generating gene expression profiles.
The prompts used in this section can also be found in Appendix A.
Evaluations. In this manuscript, we consider task-specific evaluation (53, 54) and follow the settings from previous works with shared tasks.
For the evaluation of Path VQA and Human-AI collaboration tasks, we utilize accuracy as a metric. The generated answer should be precisely matched with the provided answer. A higher accuracy represents a better method.
For the evaluation of the image caption summarization task, we utilize several metrics that can measure the similarity between the generated text and the provided text. These metrics include BLEU, ROUGE-1, ROUGE-2, ROUGE-L, BERT score, and MEDCON (41–43, 55, 56), supported by a recent publication (57). We also consider the average score across these metrics. Here are the
16

TeamPath: Building MultiModal Pathology Experts with Reasoning AI Copilots
descriptions:
• BLEU: The BiLingual Evaluation Understudy (BLEU) score evaluates the quality of generated text by breaking both the generated output and the reference text into n-grams, then comparing the overlap between the two sets. The score ranges from 0 to 1 and is typically scaled to a range of 0 to 100, with higher values indicating better model performance. • ROUGE: The Recall-Oriented Understudy for Gisting Evaluation (ROUGE) score assesses text quality by computing the F1 score from n-gram overlaps be-
tween the generated text and the reference text. In this framework, n-grams from the generated text are treated as predictions, while those from the reference text serve as labels. Precision, recall, and the F1 score are calculated using the counts of matching n-grams and their lengths. ROUGE-1 measures unigram overlap, ROUGE-2 measures bigram overlap, and ROUGE-L measures the longest common subsequence. The score ranges from 0 to 1 and is typically scaled to a range of 0 to 100, with higher value-
s indicating better model performance. • BERT: The Bidirectional Encoder Representations from Transformers (BERT) model is pretrained on large-scale text corpora for language understanding and excels at producing rich text representations. The BERTScore metric leverages this capability by measuring the similarity between embeddings of the generated text and the reference text. The score ranges from 0 to 1 and is typically scaled to a range of 0 to 100, with higher values indicating better model pe-
rformance. • MEDCON: MEDCON limits the recognized concepts and entities to the semantic groups defined in QuickUMLS (44), including Anatomy, Chemicals, Drugs, Device, Disorders, Genes, Molecular Sequences, Phenomena, and Physiology. These concepts are extracted from both the generated text and the reference text, and the F1 score is calculated based on the overlap between the two sets. The score ranges from 0 to 1 and is typically scaled to a range of 0 to 100, with higher values indicating better-
 model performance.
A higher score of these metrics represents a better method.
For the evaluation of the cross-modality generation task, we consider spot-level Pearson Correlation Coefficient (SPCC), gene-level PCC (GPCC), and Mean Squared Error (MSE) as metrics. Higher SPCC and GPCC scores represent a better method, while a lower MSE score represents a better method. These metrics are computed between generated gene expression profiles and observed gene expression profiles.
Baselines. Our baseline methods cover current state-of-the-art (SOTA) open-source LMMs based on the open source movement in scientific research and the powerful influence of open source models. Moreover, there are a few powerful closed-source models focusing on digital histopathology. We apply the access to PathChat (16) but have not received the authorization. These models include MedGemma-4B, Qwen2.5VL-3B, Qwen2.5VL-7B, MedVLThinker-7B, InternVL3-8B, PathGen-LLaVA13B, and Patho-R1 (7B). MedGemma-
-4B is an open-source VLM released by Google based on finetuning Gemma with multimodal medical data. Qwen2.5VL-3B and Qwen2.5VL-7B are open-source VLMs from the Qwen team, Alibaba Cloud. They are trained with multimodal data in the general domain. InternVL3-8B is an open-source VLM released by OpenGVLab, and it is also trained with multimodal data from the general domain. For pathology-specific models, we consider PathGen-LLaVA13B (23), which is finetuned based on LLAVA 13B (58) with instruction d-
ata from PathGen; as well as Patho-R1, which has a pathology-specific image encoder and is finetuned based on Qwen2.5VL-3B with reasoning data.
For the cross-modality generation task, we also consider a task-specific baseline method, known as Cell2Sentence (1B) (48). Cell2Sentence is finetuned with instructions and single-cell transcriptomic
17

TeamPath: Building MultiModal Pathology Experts with Reasoning AI Copilots
data from atlas-level datasets based on Pythia. This model can generate cells based on instructions.
5. Code and Data Availability
We utilize NCSA, YCRC, and TokyoU HPC platforms to perform experiments. To train TeamPath, we utilize 32 NVIDIA H100 cores and 8 NVIDIA H200 cores for 24 hours. The CPU memory upper bound is 80GB. The codes can be found in https://github.com/HelloWorldLTY/TeamPath, and the license is the MIT license.
The information on the datasets used in this manuscript can be found in Supplementary File 1. To access TCGA data, an authorized account is required. To protect personal privacy, we will not release experts’ answers.
6. Acknowledgments
We thank Mr. Tong Ding for his suggestion on model training and task selection.
7. Author Contributions
T.L. and W.X. designed this study. T.L., W.X., and H.Q. ran all the experiments. H.W., P.H., M.D. performed human evaluation. All authors involved in writing and reviewing. H.Z. supervised this study.
8. Institutional Review Board (IRB) Approval.
This project has received approval from Yale IRB, with project number 2000039055.
References
[1] Andrew H Song, Guillaume Jaume, Drew FK Williamson, Ming Y Lu, Anurag Vaidya, Tiffany R Miller, and Faisal Mahmood. Artificial intelligence for digital and computational pathology. Nature Reviews Bioengineering, 1(12):930–949, 2023.
[2] Kaustav Bera, Kurt A Schalper, David L Rimm, Vamsidhar Velcheti, and Anant Madabhushi. Artificial intelligence in digital pathology—new tools for diagnosis and precision oncology. Nature reviews Clinical oncology, 16(11):703–715, 2019.
[3] Muhammad Khalid Khan Niazi, Anil V Parwani, and Metin N Gurcan. Digital pathology and artificial intelligence. The lancet oncology, 20(5):e253–e261, 2019.
[4] Shaimaa Al-Janabi, André Huisman, and Paul J Van Diest. Digital pathology: current status and future perspectives. Histopathology, 61(1):1–9, 2012.
[5] Shaoting Zhang and Dimitris Metaxas. On the challenges and perspectives of foundation models for medical image analysis. Medical image analysis, 91:102996, 2024.
[6] Richard J Chen, Tong Ding, Ming Y Lu, Drew FK Williamson, Guillaume Jaume, Andrew H Song, Bowen Chen, Andrew Zhang, Daniel Shao, Muhammad Shaban, et al. Towards a generalpurpose foundation model for computational pathology. Nature Medicine, 30(3):850–862, 2024.
18

TeamPath: Building MultiModal Pathology Experts with Reasoning AI Copilots
[7] Ming Y Lu, Bowen Chen, Drew FK Williamson, Richard J Chen, Ivy Liang, Tong Ding, Guillaume Jaume, Igor Odintsov, Andrew Zhang, Long Phi Le, et al. Towards a visual-language foundation model for computational pathology. arXiv preprint arXiv:2307.12914, 2023.
[8] Hanwen Xu, Naoto Usuyama, Jaspreet Bagga, Sheng Zhang, Rajesh Rao, Tristan Naumann, Cliff Wong, Zelalem Gero, Javier González, Yu Gu, et al. A whole-slide foundation model for digital pathology from real-world data. Nature, pages 1–8, 2024.
[9] Jiabo Ma, Zhengrui Guo, Fengtao Zhou, Yihui Wang, Yingxue Xu, Yu Cai, Zhengjie Zhu, Cheng Jin, Yi Lin, Xinrui Jiang, Anjia Han, Li Liang, Ronald Cheong Kin Chan, Jiguang Wang, KwangTing Cheng, and Hao Chen. Towards a generalizable pathology foundation model via unified knowledge distillation, 2024.
[10] Antti S. Rannikko. Artificial intelligence for prostate cancer diagnostics. Nature Cancer, September 2025.
[11] Manuel Tran, Paul Schmidle, Ruifeng Ray Guo, Sophia J Wagner, Valentin Koch, Valerio Lupperger, Brenna Novotny, Dennis H Murphree, Heather D Hardway, Marina D’Amato, et al. Generating dermatopathology reports from gigapixel whole slide images with histogpt. Nature Communications, 16(1):1–17, 2025.
[12] Tianyu Liu, Tinglin Huang, Tong Ding, Hao Wu, Peter Humphrey, Sudhir Perincheri, Kurt Schalper, Rex Ying, Hua Xu, et al. spemo: Exploring the capacity of foundation models for analyzing spatial multi-omic data. Nature Biomedical Engineering, pages 2025–01, 2025.
[13] George Shaikovski, Eugene Vorontsov, Adam Casson, Julian Viret, Eric Zimmermann, Neil Tenenholtz, Yi Kan Wang, Jan H Bernhard, Ran A Godrich, Juan A Retamero, et al. Prism2: Unlocking multi-modal general pathology ai with clinical dialogue. arXiv preprint arXiv:2506.13063, 2025.
[14] Jingyi Zhang, Jiaxing Huang, Sheng Jin, and Shijian Lu. Vision-language models for vision tasks: A survey. IEEE transactions on pattern analysis and machine intelligence, 46(8):56255644, 2024.
[15] Ying Chen, Guoan Wang, Yuanfeng Ji, Yanjun Li, Jin Ye, Tianbin Li, Ming Hu, Rongshan Yu, Yu Qiao, and Junjun He. Slidechat: A large vision-language assistant for whole-slide pathology image understanding. In Proceedings of the Computer Vision and Pattern Recognition Conference (CVPR), pages 5134–5143, June 2025.
[16] Ming Y Lu, Bowen Chen, Drew FK Williamson, Richard J Chen, Melissa Zhao, Aaron K Chow, Kenji Ikemura, Ahrong Kim, Dimitra Pouli, Ankush Patel, et al. A multimodal generative ai copilot for human pathology. Nature, 634(8033):466–473, 2024.
[17] Jinxi Xiang, Xiyue Wang, Xiaoming Zhang, Yinghua Xi, Feyisope Eweje, Yijiang Chen, Yuchen Li, Colin Bergstrom, Matthew Gopaulchan, Ted Kim, et al. A vision–language foundation model for precision oncology. Nature, pages 1–10, 2025.
[18] Zhi Huang, Federico Bianchi, Mert Yuksekgonul, Thomas J Montine, and James Zou. A visual–language foundation model for pathology image analysis using medical twitter. Nature medicine, 29(9):2307–2316, 2023.
[19] Tianzhe Chu, Yuexiang Zhai, Jihan Yang, Shengbang Tong, Saining Xie, Dale Schuurmans, Quoc V Le, Sergey Levine, and Yi Ma. Sft memorizes, rl generalizes: A comparative study of foundation model post-training. arXiv preprint arXiv:2501.17161, 2025.
19

TeamPath: Building MultiModal Pathology Experts with Reasoning AI Copilots
[20] Wenchuan Zhang, Penghao Zhang, Jingru Guo, Tao Cheng, Jie Chen, Shuwan Zhang, Zhang Zhang, Yuhao Yi, and Hong Bu. Patho-r1: A multimodal reinforcement learning-based pathology expert reasoner. arXiv preprint arXiv:2505.11404, 2025.
[21] Zhe Xu, Cheng Jin, Yihui Wang, Ziyi Liu, and Hao Chen. Discovering pathology rationale and token allocation for efficient multimodal pathology reasoning. arXiv preprint arXiv:2505.15687, 2025.
[22] Jianyu Wu, Hao Yang, Xinhua Zeng, Guibing He, Zhiyu Chen, Zihui Li, Xiaochuan Zhang, Yangyang Ma, Run Fang, and Yang Liu. Pathvlm-r1: A reinforcement learning-driven reasoning model for pathology visual-language tasks. arXiv preprint arXiv:2504.09258, 2025.
[23] Yuxuan Sun, Yunlong Zhang, Yixuan Si, Chenglu Zhu, Kai Zhang, Zhongyi Shui, Jingxiong Li, Xuan Gong, XINHENG LYU, Tao Lin, et al. Pathgen-1.6 m: 1.6 million pathology image-text pairs generation through multi-agent collaboration. In The Thirteenth International Conference on Learning Representations.
[24] John N Weinstein, Eric A Collisson, Gordon B Mills, Kenna R Shaw, Brad A Ozenberger, Kyle Ellrott, Ilya Shmulevich, Chris Sander, and Joshua M Stuart. The cancer genome atlas pancancer analysis project. Nature genetics, 45(10):1113–1120, 2013.
[25] OpenAI. Openai o3 and o4-mini system card, 2025.
[26] Xuehai He, Yichen Zhang, Luntian Mou, Eric Xing, and Pengtao Xie. Pathvqa: 30000+ questions for medical visual question answering. arXiv preprint arXiv:2003.10286, 2020.
[27] Yuxuan Sun, Hao Wu, Chenglu Zhu, Sunyi Zheng, Qizi Chen, Kai Zhang, Yunlong Zhang, Dan Wan, Xiaoxiao Lan, Mengyue Zheng, et al. Pathmmu: A massive multimodal expert-level benchmark for understanding and reasoning in pathology. In European Conference on Computer Vision, pages 56–73. Springer, 2024.
[28] Guillaume Jaume, Paul Doucet, Andrew H. Song, Ming Y. Lu, Cristina Almagro Pérez, Sophia J Wagner, Anurag Jayant Vaidya, Richard J. Chen, Drew FK Williamson, Ahrong Kim, and Faisal Mahmood. HEST-1k: A dataset for spatial transcriptomics and histology image analysis. In The Thirty-eight Conference on Neural Information Processing Systems Datasets and Benchmarks Track, 2024.
[29] Jiawen Chen, Muqing Zhou, Wenrong Wu, Jinwei Zhang, Yun Li, and Didong Li. Stimage1k4m: A histopathology image-gene expression dataset for spatial transcriptomics. Advances in Neural Information Processing Systems, 37:35796–35823, 2024.
[30] Daya Guo, Dejian Yang, Haowei Zhang, Junxiao Song, Ruoyu Zhang, Runxin Xu, Qihao Zhu, Shirong Ma, Peiyi Wang, Xiao Bi, et al. Deepseek-r1: Incentivizing reasoning capability in llms via reinforcement learning. arXiv preprint arXiv:2501.12948, 2025.
[31] Xuehai He, Zhuo Cai, Wenlan Wei, Yichen Zhang, Luntian Mou, Eric Xing, and Pengtao Xie. Pathological visual question answering. arXiv preprint arXiv:2010.12435, 2020.
[32] Qwen Team. Qwen2 technical report. arXiv preprint arXiv:2407.10671, 2024.
[33] Jinguo Zhu, Weiyun Wang, Zhe Chen, Zhaoyang Liu, Shenglong Ye, Lixin Gu, Hao Tian, Yuchen Duan, Weijie Su, Jie Shao, et al. Internvl3: Exploring advanced training and test-time recipes for open-source multimodal models. arXiv preprint arXiv:2504.10479, 2025.
20

TeamPath: Building MultiModal Pathology Experts with Reasoning AI Copilots
[34] Andrew Sellergren, Sahar Kazemzadeh, Tiam Jaroensri, Atilla Kiraly, Madeleine Traverse, Timo Kohlberger, Shawn Xu, Fayaz Jamil, Cían Hughes, Charles Lau, et al. Medgemma technical report. arXiv preprint arXiv:2507.05201, 2025.
[35] Xiaoke Huang, Juncheng Wu, Hui Liu, Xianfeng Tang, and Yuyin Zhou. Medvlthinker: Simple baselines for multimodal medical reasoning. arXiv preprint arXiv:2508.02669, 2025.
[36] Masanori Hisaoka. Lipoblast: morphologic features and diagnostic value. Journal of UOEH, 36(2):115–121, 2014.
[37] Grégoire Mialon, Clémentine Fourrier, Thomas Wolf, Yann LeCun, and Thomas Scialom. Gaia: a benchmark for general ai assistants. In The Twelfth International Conference on Learning Representations, 2023.
[38] Tianyu Liu, Simeng Han, Xiao Luo, Hanchen Wang, Pan Lu, Biqing Zhu, Yuge Wang, Keyi Li, Jiapeng Chen, Rihao Qu, et al. Towards artificial intelligence research assistant for expertinvolved learning. arXiv preprint arXiv:2505.04638, 2025.
[39] Charlie Snell, Jaehoon Lee, Kelvin Xu, and Aviral Kumar. Scaling llm test-time compute optimally can be more effective than scaling model parameters. arXiv preprint arXiv:2408.03314, 2024.
[40] OpenAI. Gpt-4 technical report, 2023.
[41] Kishore Papineni, Salim Roukos, Todd Ward, and Wei-Jing Zhu. Bleu: a method for automatic evaluation of machine translation. In Proceedings of the 40th annual meeting of the Association for Computational Linguistics, pages 311–318, 2002.
[42] Chin-Yew Lin. Rouge: A package for automatic evaluation of summaries, 2004.
[43] Tianyi Zhang, Varsha Kishore, Felix Wu, Kilian Q Weinberger, and Yoav Artzi. Bertscore: Evaluating text generation with bert.
[44] Luca Soldaini and Nazli Goharian. Quickumls: a fast, unsupervised approach for medical concept extraction, 2016.
[45] Weiqing Chen, Pengzhi Zhang, Tu N Tran, Yiwei Xiao, Shengyu Li, Vrutant V Shah, Hao Cheng, Kristopher W Brannan, Keith Youker, Li Lai, et al. A visual–omics foundation model to bridge histopathology with spatial transcriptomics. Nature Methods, pages 1–15, 2025.
[46] Andrew H Song, Mane Williams, Drew FK Williamson, Sarah SL Chow, Guillaume Jaume, Gan Gao, Andrew Zhang, Bowen Chen, Alexander S Baras, Robert Serafin, et al. Analysis of 3d pathology samples using weakly supervised ai. Cell, 187(10):2502–2520, 2024.
[47] 10X Genomics. Visium technology.
[48] Daniel Levine, Syed A Rizvi, Sacha Lévy, Nazreen Pallikkavaliyaveetil, David Zhang, Xingyu Chen, Sina Ghadermarzi, Ruiming Wu, Zihe Zheng, Ivan Vrkic, et al. Cell2sentence: Teaching large language models the language of biology. In International Conference on Machine Learning, pages 27299–27325. PMLR, 2024.
[49] Guangming Sheng, Chi Zhang, Zilingfeng Ye, Xibin Wu, Wang Zhang, Ru Zhang, Yanghua Peng, Haibin Lin, and Chuan Wu. Hybridflow: A flexible and efficient rlhf framework. arXiv preprint arXiv: 2409.19256, 2024.
21

TeamPath: Building MultiModal Pathology Experts with Reasoning AI Copilots
[50] Yaowei Zheng, Richong Zhang, Junhao Zhang, Yanhan Ye, and Zheyan Luo. LlamaFactory: Unified efficient fine-tuning of 100+ language models. In Yixin Cao, Yang Feng, and Deyi Xiong, editors, Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (Volume 3: System Demonstrations), pages 400–410, Bangkok, Thailand, August 2024. Association for Computational Linguistics.
[51] Zhihong Shao, Peiyi Wang, Qihao Zhu, Runxin Xu, Junxiao Song, Xiao Bi, Haowei Zhang, Mingchuan Zhang, YK Li, Yang Wu, et al. Deepseekmath: Pushing the limits of mathematical reasoning in open language models. arXiv preprint arXiv:2402.03300, 2024.
[52] Qiying Yu, Zheng Zhang, Ruofei Zhu, Yufeng Yuan, Xiaochen Zuo, Yu Yue, Weinan Dai, Tiantian Fan, Gaohong Liu, Lingjun Liu, et al. Dapo: An open-source llm reinforcement learning system at scale. arXiv preprint arXiv:2503.14476, 2025.
[53] Fabian Pedregosa, Gaël Varoquaux, Alexandre Gramfort, Vincent Michel, Bertrand Thirion, Olivier Grisel, Mathieu Blondel, Peter Prettenhofer, Ron Weiss, Vincent Dubourg, et al. Scikitlearn: Machine learning in python. the Journal of machine Learning research, 12:2825–2830, 2011.
[54] Pauli Virtanen, Ralf Gommers, Travis E Oliphant, Matt Haberland, Tyler Reddy, David Cournapeau, Evgeni Burovski, Pearu Peterson, Warren Weckesser, Jonathan Bright, et al. Scipy 1.0: fundamental algorithms for scientific computing in python. Nature methods, 17(3):261–272, 2020.
[55] Saahil Jain, Ashwin Agrawal, Adriel Saporta, Steven Truong, Tan Bui, Pierre Chambon, Yuhao Zhang, Matthew P Lungren, Andrew Y Ng, Curtis Langlotz, et al. Radgraph: Extracting clinical entities and relations from radiology reports.
[56] Wen-wai Yim, Yujuan Fu, Asma Ben Abacha, Neal Snider, Thomas Lin, and Meliha Yetisgen. Aci-bench: a novel ambient clinical intelligence dataset for benchmarking automatic visit note generation. Scientific Data, 10(1):586, 2023.
[57] Dave Van Veen, Cara Van Uden, Louis Blankemeier, Jean-Benoit Delbrouck, Asad Aali, Christian Bluethgen, Anuj Pareek, Malgorzata Polacin, Eduardo Pontes Reis, Anna Seehofnerová, et al. Adapted large language models can outperform medical experts in clinical text summarization. Nature medicine, 30(4):1134–1142, 2024.
[58] Haotian Liu, Chunyuan Li, Qingyang Wu, and Yong Jae Lee. Visual instruction tuning. Advances in neural information processing systems, 36:34892–34916, 2023.
[59] Weixun Wang, Shaopan Xiong, Gengru Chen, Wei Gao, Sheng Guo, Yancheng He, Ju Huang, Jiaheng Liu, Zhendong Li, Xiaoyang Li, et al. Reinforcement learning optimization for largescale learning: An efficient and user-friendly scaling library. arXiv preprint arXiv:2506.06122, 2025.
[60] Zihe Liu, Jiashun Liu, Yancheng He, Weixun Wang, Jiaheng Liu, Ling Pan, Xinyu Hu, Shaopan Xiong, Ju Huang, Jian Hu, et al. Part i: Tricks or traps? a deep dive into rl for llm reasoning. arXiv preprint arXiv:2508.08221, 2025.
[61] Hardy Chen, Haoqin Tu, Fali Wang, Hui Liu, Xianfeng Tang, Xinya Du, Yuyin Zhou, and Cihang Xie. Sft or rl? an early investigation into training r1-like reasoning large vision-language models. arXiv preprint arXiv:2504.11468, 2025.
22

TeamPath: Building MultiModal Pathology Experts with Reasoning AI Copilots
[62] Wenhao Zhang, Yuexiang Xie, Yuchang Sun, Yanxi Chen, Guoyin Wang, Yaliang Li, Bolin Ding, and Jingren Zhou. On-policy rl meets off-policy experts: Harmonizing supervised fine-tuning and reinforcement learning via dynamic weighting. arXiv preprint arXiv:2508.11408, 2025.
23

TeamPath: Building MultiModal Pathology Experts with Reasoning AI Copilots
A. Prompt list
The prompt used for the Pathology VQA is:
Your task: 1. Think through the question step by step, enclose your reasoning process in <think>...</think> tags. 2. Then provide the correct single-letter choice (A, B, C, D,...) inside <answer>...</answer> tags. 3. No extra information or text outside of these tags. The prompt used for the self-verifier is:
You are an expert in pathology. You are given a QUESTION and a PROPOSED SOLUTION. Your job is to: 1. Break down each component of the proposed solution. 2. Think step by step to verify if the proposed solution is correct given the question and the figure. 3. Write a line of the form "The proposed solution is correct" or "The proposed solution is incorrect" at the end of your response based on your analysis. QUESTION: question. PROPOSED SOLUTION: solution. The prompt used for the self-corrector is:
You are also given a question and an analysis for the question. Your job is to outline your step-by-step thought process for deriving a correct solution and also write down the correct solution. Using this format: <think> Your step-by-step reasoning of the question and solution </think><answer> Your final answer </answer> Question: question Solution: out_verifier. The prompt used for the reason corrector is:
You are given QUESTION, REASON, and SOLUTION. Your task is to correct the REASON and SOLUTION. QUESTION: question. SOLUTION: solution. REASON: reason The REASON is WRONG. Your solution:
The prompts used for training TeamPath for caption summary include:
Provide a concise pathological summary of the tissue shown in this histopathology image, highlighting any abnormal cellular or structural features in one paragraph. Based on the visual characteristics in this image, summarize the likely histological diagnosis and key indicators leading to it in one paragraph. Describe the main histopathological patterns visible in this image and summarize what they suggest about the tissue state in one paragraph. Summarize the key morphological findings in this hi-
stopathology image, including any signs of malignancy, inflammation, or necrosis in one paragraph. Generate a pathology report-style summary based solely on this histological section, mentioning tissue type, grade, and diagnostic clues in one paragraph. Briefly summarize the clinical implications of the abnormalities visible in this histopathology image in one paragraph. From this histopathology image, extract and summarize the most diagnostically relevant features in one paragraph. Identify and s-
ummarize any histopathological hallmarks (e.g., mitotic figures, glandular formation, stromal invasion) present in the image in one paragraph. Write a summary suitable for a pathology trainee explaining what this histopathology image represents and why in one paragraph. Provide an expert-level summary of the pathological findings in this histopathology image, including your confidence in the assessment in one paragraph.
The prompts used for training TeamPath for cross-modality generation (using IDC as an example) include:
24

TeamPath: Building MultiModal Pathology Experts with Reasoning AI Copilots
Generate a list of 100 genes in order of descending expression from one spot shown in the histopathology image in IDC disease. Cell sentence:, Produce a list of 100 gene names in descending order of expression which represent the expressed genes from one spot shown in the histopathology image in IDC disease. Cell sentence:, Create a ranked list of 100 genes in decreasing order of expression from one spot shown in the histopathology image in IDC disease. Cell sentence:, List the top 100 expressed g-
enes from one spot shown in the histopathology image in IDC disease. Cell sentence:, Identify the highest expressed 100 genes in decreasing order of expression from one spot shown in the histopathology image in IDC disease. Cell sentence:, Enumerate a list of 100 genes in descending order of expression from one spot shown in the histopathology image in IDC disease. Cell sentence:, Compile a descending order list of 100 expressed genes from one spot shown in the histopathology image in IDC disease.-
 Cell sentence:, Present a sequence of 100 genes ordered by decreasing expression level from one spot shown in the histopathology image in IDC disease. Cell sentence:, Generate an ordered list of 100 genes by decreasing expression level from one spot shown in the histopathology image in IDC disease. Cell sentence:, Assemble a list of 100 genes from highest to lowest expression from one spot shown in the histopathology image in IDC disease. Cell sentence:
B. SFT vs RL: Comparison for training strategies.
How to train a mature reasoning model has always been a controversial topic, as there exist several different strategies and their performances and ranks might vary under different task settings or experiment settings (19, 59, 60). Meanwhile, this kind of discussion has not been investigated in training a large reasoning model for histopathology analysis, and thus, we consider several different approaches to provide an empirical analysis to select and interpret the best combination, which might in-
spire future directions or different researchers.
We conduct these experiments based on different base models as well as training strategies. Our base models include Qwen2.5VL-7B, which does not contain domain-specific knowledge and Patho-R1-7B, which contains domain-specific knowledge. We also consider different training strategies, including RL (GRPO), RL (DAPO), SFT, and SFT+RL (GRPO). Extended Data Figures 3 (a) and (b) show that GRPO can achieve a more obvious score improvement while DAPO cannot make an improvement, which implies that a mixt-
ure of tricks does not contribute to training a multi-modal pathology reasoning model. Extended Data Figures 3 (c) and (d) show that it is important to select a base model with domain knowledge for training, and performing SFT+RL or direct SFT settings does not benefit this task. Therefore, our optimal choice to build TeamPath for pathology VQA is Patho-R1-7B+RL (GRPO).
In conclusion, our results showcase that it is important to select a good model with domain knowledge to perform training, and for LMMs that can already possess domain knowledge, directly training them using RL policies can enhance their generalization capabilities without requiring specialized SFT training (also known as cold-start training). Our important findings also align with relevant research across different fields (61, 62), which indirectly validates the reliability of our conclusions.
C. Studies for training data ablation.
We also investigate if incorporating more diverse data could help TeamPath for generating a better reasoning path or not. To examine it, we compare the results between only using multi-choice VQA (mc VQA) data and using both multi-choice VQA and open-ended VQA (full VQA) data. Based on our evaluation results shown in Extended Data Figure 4 with validation from the PathMMU dataset, using
25

TeamPath: Building MultiModal Pathology Experts with Reasoning AI Copilots
full VQA data cannot boost TeamPath’s performances in generalizing the results for solving questions in the PathMMU dataset. Therefore, our optimal setting only takes mc VQA for RL training. Details of the reward design for these two different types of data are explained in the Method section.
26

TeamPath: Building MultiModal Pathology Experts with Reasoning AI Copilots
D. Supplementary figures
a
Download whole-slide histopathology images from TCGA: 9,568
Process the dataset to extract ROI: 1,620,876
Match the images with annotation from PathGen 1.6M: 5,650
Match the ROI with paired question-answer sets: 200,899
Extract ROI with 224 radius from the IDC dataset: 44,974
Extract ROI with 224 radius from the Brain dataset: 47,443
Pair radius with transcriptomic data after filtering: 35, 536
Pair ROI with transcriptomic data after filtering: 47,443
b
Spatial Transcriptomic Generation
Reasoning-driven VQA
Reasoning-driven Summary
AI-Physician Collaboration Spatial Transcriptomic Generation
Extended Data Fig. 1: A flowchart of data-preprocessing used to train TeamPath.
27

TeamPath: Building MultiModal Pathology Experts with Reasoning AI Copilots
Sup correct example
Question: Based on the immunohistochemical stain of section A, which marker is most likely targeted given the pattern and color of staining?
Annotated answer: (C) Synaptophysin.
Options: (A) Estrogen Receptor, (B) S100 protein, (C) Synaptophysin, (D) CD34.
Think: The image shows a strong brown immunohistochemical stain in the tumor cells...S100 protein (B) is a cytoplasmic marker associated with melanoma or neural tumors, which are not supported by the clinical context. Synaptophysin (C) is a neuroendocrine marker, and CD34 (D) is a vascular/stromal marker, neither of which match the observed staining pattern. Answer: A. Patho-R1
Qwen2.5VL-7B
To determine which marker is most likely targeted by the immunohistochemical stain in section A, we need to analyze the pattern and color of the staining. **Estrogen Receptor (ER)** typically stains with a brownish color and is often used to identify breast cancer cells that express ER...The correct answer is: (A) Estrogen Receptor.
InternVL3-8B
The staining is cytoplasmic and brown. The pattern follows neural crest-like cells, indicating a neuroendocrine or melanocytic marker...This matches the description of the staining pattern and cell type (neural crest-like cells).
Based on the image, the immunohistochemical stain shows a pattern of intense red staining, likely corresponding to a strong positive signal. This pattern is characteristic of **(A) Estrogen Receptor**...Therefore, the answer is **(A) Estrogen Receptor**.
MedGemma-4B
MedVLThinker-7B
Think: Section A shows a strong cytoplasmic staining pattern in brown color, which is characteristic of immunohistochemical staining targeting specific markers. To determine the correct marker, it's important to note that the staining intensity and localization seen here align...Answer: C.
PathGen-LLaVA
B: S100 protein.
TeamPath-7B
Think: The immunohistochemical stain in image A demonstrates strong, distinct mammaglobin positivity, which aligns with the description of a characteristic brown staining pattern. Mammaglobin is a marker typically used to confirm breast carcinoma as the primary source in metastatic cases. Estrogen Receptor (A) and S100 (B) are relevant but not directly supported by the image description. CD34 (D) is a vascular marker and unrelated to breast lesions. The brown chromogen in inset A directly correlat-
es with mammaglobin staining, making (C) the correct choice. Answer: C.
Green means right info. Red means wrong info.
Extended Data Fig. 2: Case study (topic: lipoblast, which is a protein found in the presynaptic vesicles of neurons and neuroendocrine cells that plays a role in synaptic transmission) based on the outputs from different models. We highlight the correct information with green text and incorrect information with red text. For the models with errors, we consider two cases. The first case is a wrong answer, the second case is a confused reasoning path.
28

TeamPath: Building MultiModal Pathology Experts with Reasoning AI Copilots
Sup copath sft rl compare
ab
cd
Extended Data Fig. 3: Training strategies optimization with different settings. The results are evaluated based on the PathMMU dataset. (a) Accuracy across different categories based on the base model and different RL strategies. (b) Accuracy and rank across different categories based on the base model and different RL strategies. (c) Accuracy across different categories based on different base models and different RL/SFT strategies. (d) Accuracy and rank across different categories based on diffe-
rent base models and different RL/SFT strategies.
29

TeamPath: Building MultiModal Pathology Experts with Reasoning AI Copilots
40
45
50
55
60
65
70
75
80
PubMed SocialPath Atlas EduContent PathCLS Avg
mc VQA full VQA
Comparisons between data used for RL training
Extended Data Fig. 4: Comparisons for the PathMMU VQA question set with different training data. The metric is accuracy.
30

TeamPath: Building MultiModal Pathology Experts with Reasoning AI Copilots
Sup figure example
Question: Analyzing the tissue section, what can be inferred about the tubular structures with respect to their cellular lining? Options: A) The cells lack specialized features and are consistent with simple squamous epithelium. B) The cells possess distinct brush borders consistent with renal proximal tubules. C) The cells exhibit goblet cells typical of the intestinal lining. D) The cells have cuticular borders suggesting a level of specialization.
Green means right info
Expert answer: I do not know.
Expert reason: I actually don’t know the answer to this question. The cells have brush borders (so they are not squamous), but many cells have brush borders, such as the intestinal epithelium. Goblet cells can be seen in any endoderm-derived epithelium, for example, the bronchus. I don’t know what cuticular border means.
TeamPath answer: D) The cells have cuticular borders suggesting a level of specialization.
TeamPath reason: The tubular structures in the image are not renal proximal tubules. While the cells are multilayered and dome-shaped, the luminal border lacks the brush border of microvilli seen in proximal tubules. Instead, the smooth, homogeneous cuticular border aligns with transitional epithelium, which is specialized for stretching. The absence of goblet cells (intestinal) and single-layered squamous epithelium (simple squamous) further excludes other options.
Red means wrong info
Extended Data Fig. 5: An example of using TeamPath to correct the reasoning path from pathologists.
31

TeamPath: Building MultiModal Pathology Experts with Reasoning AI Copilots
0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0.8
0.9
1
PubMed SocialPath EduContent PathCLS Atlas Avg
Ablation studies for the choices of verifier
Raw Corrector o3 o4-mini
Extended Data Fig. 6: Ablation studies of using different models as verifiers.
32

TeamPath: Building MultiModal Pathology Experts with Reasoning AI Copilots
The tissue image displays elongated, spindle-shaped cells with eosinophilic cytoplasm and elongated nuclei, typical of smooth muscle cells, arranged in a disorganized pattern. Moderate pink-staining extracellular matrix suggests connective tissue presence.
TeamPath
The image shows a microscopic view of tissue with a prominent cellular infiltrate. The cells appear to be of varying sizes and shapes, with some exhibiting increased nuclear-to-cytoplasmic ratio and irregular nuclear contours. There is also evidence of increased mitotic activity, suggesting cell proliferation. These features are indicative of inflammation or a neoplastic process.
MedGemma-4B
The histopathology image shows a section of tissue with a prominent area of necrosis, characterized by a pale, amorphous appearance and loss of cellular detail. Surrounding this necrotic area is a zone of hypercellularity with increased cellularity and a dense, fibrous stroma. The cells appear to be arranged in a disorganized manner, suggesting an inflammatory or reparative process...
The histopathology image depicts a tissue sample with irregularly shaped and sized nuclei, indicative of atypical cells. The presence of multiple, variably sized and shaped nuclei suggests a proliferative process. The cytoplasm appears to be abundant and eosinophilic, which is characteristic of certain types of neoplastic growths...
The histopathological image reveals a tissue section with spindle-shaped cells in a fascicular pattern, indicative of smooth muscle or fibrous tissue. The cells have elongated, cigar-shaped nuclei with mild pleomorphism and no significant atypia. The stroma is collagenous with a loose, fibrous appearance. There is no necrosis or inflammation. These features suggest a benign spindle cell lesion, such as a leiomyoma or fibroma...
The histopathology image shows a section of tissue with a prominent area of necrosis, characterized by a pale, amorphous appearance and loss of cellular detail. Surrounding this necrotic area is a zone of hypercellularity with increased cellularity and a dense, fibrous stroma. The cells appear to be arranged in a disorganized manner, suggesting an inflammatory or reparative process...
The histopathology image reveals necrotic cardiac muscle fibers with acute inflammatory infiltrates and stromal edema. The loss of normal tissue architecture, karyorrhectic debris, and neutrophilic response are hallmark features of acute myocardial infarction, confirming ischemic injury without evidence of malignancy.
The histopathology image shows a section of tissue with what appears to be a cystic structure. The surrounding tissue has a layered appearance, possibly resembling the adrenal gland, given the context of adrenal tumors like pheochromocytoma or paraganglioma. The cystic space is filled with a pink fluid, which might indicate hemorrhage or proteinaceous material...
Qwen2.5VL-7B InternVL3-8B
PathGen-LLaVA-13B Qwen2.5VL-3B Patho-R1-7B MedVLthinker-7B
Yellow text represents concept matched context.
Red text means incorrect context.
Extended Data Fig. 7: Examples of model outputs for caption summary tasks. We highlight both correct and incorrect information.
33

TeamPath: Building MultiModal Pathology Experts with Reasoning AI Copilots
Sup gene exp
ab
c
d
Extended Data Fig. 8: Extended analyses of spatial transcriptomic generation. (a) GPCC across different methods based on the brain tissue. (b) GPCC across different methods based on the IDC sample. (c) Comparison between finetuned Qwen2.5VL-7B and TeamPath based on the brain tissue. (d) Comparison between finetuned Qwen2.5VL-7B and TeamPath based on the IDC sample.
34

TeamPath: Building MultiModal Pathology Experts with Reasoning AI Copilots
Error info CoPath
Question: What type of epithelial lining is present in the cystic structure visible in the image?
Annotated answer: (B) Simple ciliated columnar epithelium.
Options: (A) Stratified squamous epithelium, (B) Simple ciliated columnar epithelium, (C) Simple cuboidal epithelium, (D) Transitional epithelium
TeamPath-7B
Think: The image shows a serous cystadenoma, a benign epithelial tumor of the ovary. Step 1 of the analysis focuses on confirming the epithelial type. The cyst lining here is composed of simple cuboidal cells, as stated in the provided knowledge. Stratified squamous epithelium (A) is unrelated to cystadenomas, which typically have non-stratified linings. Simple ciliated columnar epithelium (B) is more characteristic of fallopian tubes or respiratory tract, not ovarian cystadenomas. Transitional ep-
ithelium (D) is found in the urinary tract. The simple cuboidal epithelium (C) aligns with the described histology of serous cystadenomas and distinguishes it from other malignancies, reinforcing its role in the diagnostic criteria. Answer: B.
Green means right info. Red means wrong info.
Extended Data Fig. 9: A case study of TeamPath output for pathology VQA with an incorrect reasoning path but a correct answer.
35

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:15.668Z
- **Text Length:** 91397 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 35 of 35
