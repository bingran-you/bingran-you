# PDF Document: Huang et al. - 2024 - Enhancing Representation in Medical Vision-Language Foundation Models via Multi-Scale Information Ex.pdf

**File Path:** Huang et al. - 2024 - Enhancing Representation in Medical Vision-Language Foundation Models via Multi-Scale Information Ex.pdf

**Processed Date:** 2026-02-10T18:18:28.622Z

**File Size:** 477.15 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2754

**Title:** Enhancing Representation in Medical Vision-Language Foundation Models via Multi-Scale Information Extraction Techniques

**Collection:** Large Files

---

## Extracted Text Content

ENHANCING REPRESENTATION IN MEDICAL VISION-LANGUAGE FOUNDATION MODELS VIA MULTI-SCALE INFORMATION EXTRACTION TECHNIQUES
Weijian Huang1,2,3 Cheng Li1 Hong-Yu Zhou4 Jiarun Liu1,2,3 Hao Yang1,2,3 Yong Liang2,5 Guangming Shi2 Hairong Zheng1 Shanshan Wang1,†
1Paul C. Lauterbur Research Center for Biomedical Imaging, Shenzhen Institute of Advanced Technology, Chinese Academy of Sciences, Shenzhen, China 2Peng Cheng Laboratory, Shenzhen, China 3University of Chinese Academy of Sciences, Beijing, China 4Department of Computer Science, The University of Hong Kong, Pokfulam, China 5Pazhou Laboratory (Huangpu), Guangzhou, China
ABSTRACT
The development of medical vision-language foundation models has attracted significant attention in the field of medicine and healthcare due to their promising prospect in various clinical applications. While previous studies have commonly focused on feature learning at a single learning scale, investigation on integrating multi-scale information is lacking, which may hinder the potential for mutual reinforcement among these features. This paper aims to bridge this gap by proposing a method that e-
ffectively exploits multi-scale information to enhance the performance of medical foundation models. The proposed method simultaneously exploits features at the local, instance, modality and global aspects, facilitating comprehensive representation learning within the models. We evaluate the effectiveness of the proposed method on six open-source datasets across different clinical tasks, demonstrating its ability to enhance the performance of medical foundation models.
Index Terms— Medical foundation model, Multi-scale feature learning, Vision-language model
1. INTRODUCTION AND RELATED WORK
Recent advancements in machine learning have greatly improved automated diagnostic systems (ADS), achieving expert-level performance [1–5]. In the domain of medical imaging, medical foundation models have emerged as a highly promising method [6]. These models can adapt to diverse clinical applications while minimizing the reliance on extensive downstream annotations [7]. To enhance the expressive capabilities of the foundation models, researchers are progressively incorporating multimodal data, su-
ch as clinical reports derived from routine
† Corresponding author. ss.wang@siat.ac.cn
examinations, alongside the radiography [8–16]. This visionlanguage models aim to capture a wealth of expert knowledge and improve the models’ understanding of the medical context, leading to more comprehensive and accurate representations. To achieve this, common strategies involve leveraging contrastive learning to align paired multimodal data and disentangle the feature distributions of unpaired data, thereby improving the representation capability of the image encoder [13, 14, 17].
However, since medical data has many properties, including fine-grained semantic understanding, radiographyspecific clinical reports, and the inherent properties of singlemodality representation, several crucial factors necessitate further consideration. Firstly, on a local scale, it is commonly observed that each semantic within a medical report corresponds to distinct and independent local areas within the image. To ensure precise and comprehensive representation, it is crucial to effectively es-
tablish the spatial correspondence between each semantic and specific regions of the image [11]. Secondly, at the instance scale, the report and corresponding image typically exhibit a unique correspondence compared to other images. Neglecting the individual characteristics of each image-language pair may lead to suboptimal performance and incomplete representation learning [18]. Thirdly, at the modality scale, both images and reports inherently contains distinct medical semantics that should be i-
ndependently extracted and exploited. Disregarding these unique features of each modality may hinder the comprehensive expression of the foundation model in downstream tasks, limiting its effectiveness and clinical applications.
As a result, relying solely on single scale learning may limit the performance of the learned foundation models [11, 19]. Some methods have been proposed to address this issue by extracting features at different scales [11, 19]. For example, Gloria [11] utilizes word-scale responses to capture local
arXiv:2401.01583v2 [cs.CV] 26 Feb 2024

matching representations. However, relying solely on individual words may not fully represent a specific region adequately. At the instance scale, ALBEF [18] considers imagetext matching pairs to enhance model performance. However, it relies on a large transformer for modal fusion, which raises concerns regarding its applicability in clinical practice. At the modality scale, MAE [20] and Bert [21] propose to use selfsupervised masked training to obtain unique representations of images/text. Howev-
er, they do not consider the multimodal context in medical environments. Improved approaches such as MRM [9] combine the mechanisms of masking but sacrifice important capabilities like zero-shot learning due to the fusion of modalities, thereby limiting their application in certain scenarios. More importantly, to the best of our knowledge, there is currently no method that simultaneously takes into account the aforementioned multi-scale information, potentially overlooking the mutual enhancement r-
elationships among these different scale features. In light of these observations, this paper develops a multiscale feature learning framework for radiography-reports medical foundation models, taking into consideration four different scale of information: global-, local-, instance- and modality-scale feature learning. The proposed method has been validated on six open-source datasets, covering four clinical tasks, including classification, segmentation, zeroshot classification, and phase groundin-
g. The experimental results comprehensively demonstrate the effectiveness of the proposed method in enhancing the performance of medical foundation models.
2. METHOD
The overall methodology is illustrated in Fig. 1. In the following, we will describe the proposed multi-scale feature learning framework in detail, concentrating on the extraction and utilization of features across four distinct scales within our framework.
Image Encoder
Text Encoder
Global scale alignment
Large area of [mask] like peripheral consolidation ...
Image Decoder
Text Decoder
Local scale alignment
[0.45, 0.55]
Instance matching
Modality reconstruction
Global scale alignment
Local scale alignment
Instance matching
Modality reconstruction
Large area of mass like peripheral consolidation ...
Large area of mass like peripheral consolidation ...
chronic deformity of the posterior left sixth and seventh ribs ...
Fig. 1. The proposed foundation model. Four scales of features are simultaneously exploited to enhance the representation learning of the model.
2.1. Global scale alignment
Alignment based on complete image and text is usually treated as global scale alignment. It is an important technology in multimodal research, aiming at aligning the distributions of paired images and text representations and separating unpaired samples. Inspired by existing approaches [10, 11, 14], we employ a CLIP-base framework [17] to obtain the global scale feature through contrastive learning. Let ⟨v, t⟩ represents the cosine similarity between the visual representation v ∈ RB×C and the repo-
rt representation t ∈ RB×C , the global scale alignment loss Lg can be written as:
Lvt
g =−
B
X
i
log( exp(⟨vi, ti⟩/τ1)
PB
k exp(⟨vi, tk⟩/τ1) )
Ltv
g =−
B
X
i
log( exp(⟨ti, vi⟩/τ1)
PB
k exp(⟨ti, vk⟩/τ1) )
Lg = Ltv
g + Ltv
g (1)
where B is the batch size and τ1 is a learnable parameter initialized to 0.07 in our experiments.
2.2. Local scale alignment
Each medical sentence in a report can typically correspond to an independent local region in the image. It is crucial to effectively capture the local scale correspondence between sentence information and image regions to ensure accurate and comprehensive representations. GLoRIA [11] introduces a local alignment framework that contrasts image sub-regions with words in the paired report, leading to associations between words and their corresponding image regions. However, relying solely on individu-
al words extracted from medical text reports may be insufficient to capture the original semantic information, potentially resulting in erroneous associations. In contrast, a sentence is often a better choice. Therefore, we propose an improved approach that treats sentences as the fundamental units instead of words. Let Nt, Nv denote the number of divided report’s sentences and the number of divided image patches, respectively. We use a localized feature matching function Z [11] to aggregate the s-
imilarities between all sentence representation tl ∈ RB×Nt×C and their image weighted representation vl ∈ RB×Nv×C , the local loss is then define as:
Lvt
l =−
B
X
i
log( Z(vl
i, tl
i)/τ2)
PB
k exp(Z(vl
i, tl
k)/τ2) )
Ltv
l =−
B
X
i
log( exp(Z(vl
i, tl
i)/τ2)
PB
k exp(Z(vl
k, tl
i)/τ2) )
Ll = Lvt
l + Ltv
l (2)

2.3. Instance scale matching
In clinical practice, each instance consists of a distinct pair of image and report. Considering the unique matching relationship at the instance aspects can be advantageous as it further distinguishes positive and negative sample pairs of text and image through modality fusion. This leads to a more robust feature distribution, enhancing the overall reliability of the approach. ALBEF [18] employs an image-text-matching (ITM) approach to discriminate positive and negative samples after fusing them -
with a multi-modal transformer. In contrast to using a complex multi-modal transformer, we adopt a simpler approach of summarizing the features of the two modalities. We followed by binary classification using two linear layers. The instance scale matching loss function Lim is defined as:
Lim = −y · log(f im) + (1 − y) · log(1 − f im) (3)
where f im denotes the feature representation obtained by concatenating the sampled (v, t) pair in channel dimension and passing them through a linear classifier. The input of image and text may not necessarily be matched, while y denotes the corresponding matching ground truth. Here, difficult samples with higher similarity have a greater probability of being sampled, as demonstrated by ALBEF [18].
2.4. Modality reconstruction
Each individual modality inherently carries specific information. For instance, a medical radiography can reveal the precise location of a lesion, while a textual clinical report can reflect a physician’s positive or negative judgment of a disease. Thus, extracting crucial information from each modality before combining them in a multi-modal framework is beneficial. In this study, we employ well-established selfsupervised training paradigms, namely Masked Language Modeling (MLM) and Masked Autoenc-
oder (MAE) [20], to extract the modality-based features from radiography and reports, respectively. For the image modality, let vrecon ∈ RB×N×C denotes the decoder’s reconstruction output with the input of masked image patches, and grecon ∈ RB×N×C denotes the corresponding embeddings for the ground truth patches. N and C represent the number of sampled patches and the dimension of the embeddings, respectively. We use a simple meansquare-error as the MAE loss function Lmae:
Lmae = (vrecon − grecon)2 (4)
For text modality, we adopt a cross entropy loss denoted as Lmlm. The overall modality reconstruction loss Lmr is:
Lmr = Lmae + Lmlm (5)
The final loss function of the proposed method is:
L = λ1Lg + λ2Ll + λ3Lim + λ4Lmr (6)
Table 1. Comparison of AUC scores for classification performance on three open-source datasets (CheXpert, NIH ChestX-ray and RSNA Pneumonia) with varying ratios of annotated samples. Methods CheXpert NIH RSNA
1% 10% 100% 1% 10% 100% 1% 10% 100% ConVIRT 85.9 86.8 87.3 77.4 80.1 81.3 GLoRIA 86.6 87.8 88.1 86.1 88 88.6 BioViL 88.1 88.4 89.1 M3AE 86.2 87.3 87.9 89 90.8 92.3 REFERS 87.2 88.1 88.2 76.7 80.9 84.7 89.4 91.6 92.7 MedKLIP 77.2 78.9 83.2 87.3 88 89.3 MFLAG 62.2 71.6 78.7
Ours 88.2 88.2 88.3 78.6 82.3 84.9 91.7 92.1 93.0
Here, λ is a hyperparameter to balance the loss terms.
3. EXPERIMENTS AND RESULTS
Extensive experiments have been conducted on six opensource datasets to fully validate the effectiveness of the proposed multi-scale foundation model. In the first set of experiments, we first fine-tuned the proposed foundation model on various classification datasets and conducted a comprehensive performance evaluation. We took into account different annotation ratios and compared our method to seven recent approaches. The results are listed in Table 1. Our method achieves the highest AUC score u-
nder different situations, outperforming all the seven comparison methods.
Table 2. Comparison of Dice scores for segmentation performance on ’SIIM-ACR Pneumothorax Segmentation’ dataset with varying ratios of annotations. Methods 1% 10% 100% ConVIRT 25 43.2 59.9 GLoRIA 35.8 46.9 63.4 MGCA 49.7 59.3 64.2 M-FLAG 52.5 61.2 64.8 Med-UniC 56.7 62.2 64.4 Ours 57.8 70.3 84.4
Next, we evaluate the performance of our method on segmentation tasks. We utilized the publicly available database, ”SIIM-ACR Pneumothorax Segmentation”, and compared our method with five top-performing benchmark algorithms. As shown in Table 2, the quantitative segmentation results once again validate the effectiveness of our proposed method in extracting meaningful segmentation features. We conducted zero-shot classification on the RSNA Pneumonia dataset. The quantitative results are presented i-
n Table 3. Benefiting from the utilization of structured text, MedKLIP

Table 3. Comparison of AUC scores for zero-shot classifica
tion on RSNA Pneumonia datasets. method RSNA GLoRIA 71.45 ConVIRT 80.42 BioViL 82.80 CheXzero 85.79 MedKLIP 86.94 Ours 90.28
achieves a high AUC (Area Under the Curve) score of 86.94. Nevertheless, our method obtains the highest score of 90.28, demonstrating the superiority of the proposed multi-scale feature mining approach in zero-shot classification. Zero-shot phase ground experiments were also conducted. In Table 4, we present the phase grounding performance of different methods. Our proposed method surpasses all three comparison methods, achieving notably improved scores with a mIoU of 0.298 and a CNR of 1.468. Thi-
s indicates that with the incorporation of multi-scale and cross-modality features, the model has gained a more detailed and granular representation. Qualitative analysis, as depicted in Fig. 2, involves visualizing examples with varying quantities and different types of diseases. The results provide evidence that our method successfully captures the fine-grained associations between radiological images and reports.
Table 4. Comparison of zero-shot phase grounding on MS
CXR datasets. Methods mIoU CNR ConVIRT 0.238 0.818 GLoRIA 0.246 0.930 BioViL 0.266 1.027 Ours 0.298 1.468
Finally, in our last set of experiments, we compared the
Table 5. Ablation Study. Impact of training methods with different scale on finetuning and zero-shot classfication Tasks. The comparative experiment is completed on RSNA Pneumo
nia dataset. Scale RSNA local instance modality 1% finetune Zero-shot
! 91.3 89.5 ! 91.1 89.5 ! 91.2 85.4 ! ! 91.1 90.0 ! ! 91.4 88.6 ! ! 91.6 86.3 ! ! ! 91.7 90.3
increased opacification again at the right base
bibasilar opacities extensive pulmonary parenchymal infiltrate of pneumonic appearance
Persistent focal bibasilar opacities, most consistent with infection
probable left pleural effusion with adjacent atelectasis
cardiac silhouette appears enlarged
Fig. 2. Visualization of Phase Grounding. We visualize the correlation between Radiographic Images and Clinical Reports on MS-CXR Dataset. The black bounding box represents the ground truth, while deeper color of red indicates higher degree of similarity.
results of combining features at different aspects on finetuning and zero-shot classification tasks. Table 5 summarizes the results. Our findings showed that training strategies based on local and instance learning significantly improved zeroshot learning performance by establishing fine-grained associations between textual and visual elements. On the other hand, methods relying on modality training performed better in finetuning tasks but showed a decline in zero-shot performance. This is because-
 these methods primarily focused on the representation capabilities of individual modalities, neglecting the intermodal correlations. In conclusion, training strategies designed based on different aspects offer distinct advantages. To achieve optimal performance, our approach combines the strengths of these methods, leveraging the benefits of each aspect to maximize overall model performance.
4. CONCLUSION
In this study, we proposed a novel multi-scale feature learning method for building medical vision-language foundation models. By effectively incorporating local, instance, modality, and global scale information, our method enhances the model’s representation capabilities and performance across various clinical tasks. To evaluate the efficacy of our method, we conducted extensive experiments on six open-source datasets, covering diverse clinical tasks such as classification, segmentation, zero-sho-
t classification, and phase grounding. The experimental results comprehensively validated the effectiveness of our method. The findings of this work hold great potential to contribute to the advancement of automated diagnostic systems and medical image analysis, offering new insights into achieving more accurate and comprehensive analysis of medical data in clinical practice.

5. COMPLIANCE WITH ETHICAL STANDARDS
This research study was conducted retrospectively using human subject data made available in open access. Ethical approval was not required as confirmed by the license attached with the open access data.
6. ACKNOWLEDGMENTS
This research was partly supported by the National Natural Science Foundation of China (62222118, U22A2040), Shenzhen Science and Technology Program (RCYX20210706092104034, JCYJ20220531100213029), Guangdong Provincial Key Laboratory of Artificial Intelligence in Medical Image Analysis and Application (2022B1212010011), the major key project of Peng Cheng Laboratory under grant PCL2023AS1-2, and Key Laboratory for Magnetic Resonance and Multimodality Imaging of Guangdong Province (2020B1212060051).
7. REFERENCES
[1] Qi Chang et al., “Mining multi-center heterogeneous medical data with distributed synthetic learning,” Nature Communications, vol. 14, no. 1, pp. 5510, 2023.
[2] Shanshan Wang et al., “Annotation-efficient deep learning for automatic medical image segmentation,” vol. 12, no. 1, pp. 5915, 2021.
[3] Yongjin Zhou et al., “D-UNet: a dimension-fusion u shape network for chronic stroke lesion segmentation,” IEEE/ACM transactions on computational biology and bioinformatics, vol. 18, no. 3, pp. 940–950, 2019.
[4] Hong-Yu Zhou et al., “A transformer-based representation-learning model with unified processing of multimodal input for clinical diagnostics,” Nature Biomedical Engineering, pp. 1–13, 2023.
[5] Hong-Yu Zhou et al., “A Unified Visual Information Preservation Framework for Self-supervised PreTraining in Medical Image Analysis,” IEEE Transactions on Pattern Analysis and Machine Intelligence, vol. 45, no. 7, pp. 8020–8035, 2023.
[6] Rayan Krishnan, Pranav Rajpurkar, and Eric J Topol, “Self-supervised learning in medicine and healthcare,” Nature Biomedical Engineering, vol. 6, no. 12, pp. 1346–1352, 2022.
[7] Yucheng Tang et al., “Self-Supervised Pre-Training of Swin Transformers for 3d Medical Image Analysis,” in 2022 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), 2022, pp. 20698–20708.
[8] Hong-Yu Zhou et al., “Generalized radiograph representation learning via cross-supervision between images and free-text radiology reports,” Nature Machine Intelligence, vol. 4, no. 1, pp. 32–40, 2022.
[9] Hong-Yu Zhou et al., “Advancing radiograph representation learning with masked record modeling,” The Eleventh International Conference on Learning Representations., 2022.
[10] Benedikt Boecking et al., “Making the most of text semantics to improve biomedical vision-language processing,” in European conference on computer vision. Springer, 2022, pp. 1–21.
[11] Shih-Cheng Huang et al., “GLoRIA: A Multimodal Global-Local Representation Learning Framework for Label-efficient Medical Image Recognition,” in 2021 IEEE/CVF International Conference on Computer Vision (ICCV), 2021, pp. 3922–3931.
[12] Che Liu et al., “M-FLAG: Medical vision-language pretraining with frozen language models and latent space geometry optimization,” in International Conference on Medical Image Computing and Computer-Assisted Intervention. Springer, 2023, pp. 637–647.
[13] Chaoyi Wu et al., “MedKLIP: Medical Knowledge Enhanced Language-Image Pre-Training,” Proceedings of the IEEE/CVF International Conference on Computer Vision, 2023.
[14] Yuhao Zhang et al., “Contrastive learning of medical visual representations from paired images and text,” in Machine Learning for Healthcare Conference. PMLR, 2022, pp. 2–25.
[15] Zhongwei Wan et al., “Med-unic: Unifying crosslingual medical vision-language pre-training by diminishing bias,” Advances in Neural Information Processing Systems, vol. 36, 2024.
[16] Weijian Huang et al., “Enhancing representation in radiography-reports foundation model: A granular alignment algorithm using masked contrastive learning,” arXiv preprint arXiv:2309.05904, 2023.
[17] Alec Radford et al., “Learning transferable visual models from natural language supervision,” in International conference on machine learning. PMLR, 2021, pp. 8748–8763.
[18] Junnan Li et al., “Align before fuse: Vision and language representation learning with momentum distillation,” Advances in neural information processing systems, vol. 34, pp. 9694–9705, 2021.
[19] Fuying Wang et al., “Multi-granularity cross-modal alignment for generalized medical visual representation learning,” Advances in Neural Information Processing Systems, vol. 35, pp. 33536–33549, 2022.
[20] Kaiming He et al., “Masked autoencoders are scalable vision learners,” in Proceedings of the IEEE/CVF conference on computer vision and pattern recognition, 2022, pp. 16000–16009.
[21] Jacob Kenton et al., “BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding,” in Proceedings of naacL-HLT, 2019, vol. 1, p. 2.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:28.622Z
- **Text Length:** 22572 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
