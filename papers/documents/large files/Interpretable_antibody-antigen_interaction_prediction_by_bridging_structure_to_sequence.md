# PDF Document: Liu et al. - Interpretable antibody-antigen interaction prediction by bridging structure to sequence.pdf

**File Path:** Liu et al. - Interpretable antibody-antigen interaction prediction by bridging structure to sequence.pdf

**Processed Date:** 2026-02-10T18:14:47.515Z

**File Size:** 9238.14 KB

**Total Pages:** 31

**Extracted Pages:** 31

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2831

**Title:** Interpretable antibody-antigen interaction prediction by bridging structure to sequence

**Collection:** Large Files

---

## Extracted Text Content

1 Interpretable antibody-antigen interaction
2 prediction by bridging structure to sequence
3 Yutian Liu1†, Zhiwei Nie2,3†, Jie Chen2,3*, Xinhao Zheng4, 4 Jie Fu5, Zhihong Liu6, Xudong Liu2, Fan Xu3, Xiansong Huang3, Wen-Bin Zhang7*, Siwei Ma1*, Wen Gao1,3, Yonghong Tian2,1,3*
5
6 1School of Computer Science, Peking University, China. 7 2School of Electronic and Computer Engineering, Peking University, 8 Shenzhen, China. 9 3Peng Cheng Laboratory, Shenzhen, China. 10 4Department of Computer Science and Engineering, Shanghai Jiao Tong 11 University, China. 12 5Hong Kong University of Science and Technology, Hong Kong, China. 13 6Pingshan Translational Medicine Center, Shenzhen Bay Laboratory, 14 Shenzhen, China. 15 7Beijing National Laboratory for Molecular Sciences, Key La-
boratory of 16 Polymer Chemistry & Physics of Ministry of Education, Center for Soft 17 Matter Science and Engineering, College of Chemistry and Molecular 18 Engineering, Peking University, China.
19 *Corresponding author(s). E-mail(s): jiechen2019@pku.edu.cn; 20 wenbin@pku.edu.cn; swma@pku.edu.cn; yhtian@pku.edu.cn; 21 †These authors contributed equally to this work.
22 Abstract
23 With the application of personalized and precision medicine, more precise and 24 efficient antibody drug development technology is urgently needed. Identifi25 cation of antibody-antigen interactions is key to antibody engineering. The 26 time-consuming and expensive nature of wet-lab experiments calls for efficient 27 computational methods. Previous deep-learning-based computing methods for 28 antibody-antigen interaction prediction are distinctly divided into two categories: 29 structure-based-
 and sequence-based. Taking into account the non-overlapping 30 advantage of these two major categories, we propose an interpretable antibody31 antigen interaction prediction method, S3AI, that bridges structures to sequences
1
made available under aCC-BY-NC-ND 4.0 International license.
(which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is
bioRxiv preprint doi: https://doi.org/10.1101/2024.03.09.584264; this version posted March 13, 2024. The copyright holder for this preprint

32 through structural information distillation. Furthermore, non-covalent interac33 tions are modeled explicitly to guide neural networks in understanding the 34 underlying patterns in antigen-antibody docking. Supported by the two innova35 tive designs mentioned above, S3AI significantly and comprehensively surpasses 36 the state-of-the-art models. S3AI maintains excellent robustness when predict37 ing unknown antibody-antigen pairs, surpassing specialized prediction methods 38 designed for out--
of-distribution generalization in fair comparisons. More impor39 tantly, S3AI captures the universal pattern of antibody-antigen interactions, 40 which not only identifies the CDRs responsible for specific binding to the antigen 41 but also unearthed the importance of CDR-H3 for the interaction. The implicit 42 introduction of knowledge of structure modality and the explicit modeling of 43 chemical constraints build a ’sequence-to-function’ route, thereby facilitating 44 S3AI’s understanding of co-
mplex molecular interactions through providing route 45 and priors guidance. S3AI, which does not require structure input, is suitable 46 for large-scale, parallelized antibody optimization and screening while outper47 forming state-of-the-art prediction methods. It helps to quickly and accurately 48 identify potential candidates in the vast antibody space, thereby accelerating the 49 development process of antibody drugs.
50 1 Introduction
51 As the important immune molecules of the human immune system [1], antibodies are a 52 specialized type of protein with the primary role of recognizing and combating invading 53 pathogens [2, 3]. The interaction between antibodies and antigens is characterized by 54 a remarkable specificity and plays a pivotal role in this immunological process [3]. 55 Therefore, humans continue to explore methods for preparing antibodies to develop 56 antibody drugs and try to apply them in clinical treatments -
[4, 5]. In recent years, 57 the research and development of antibody drugs have entered a new stage, driven 58 by the continuous development of technologies such as genomics [6], proteomics [7], 59 and immunology [8]. Currently, antibody design methods with higher precision and 60 efficiency are urgently needed to meet the promotion and application of personalized 61 treatment and precision medicine [9, 10]. 62 The core of improving the design efficiency of antibody drugs lies in estimating 63 the-
 interaction strength of antibodies and antigens. The interaction strength between 64 an antibody and an antigen extends beyond a mere binary interaction; it should be 65 characterized as a continuous variable. Quantified by metrics such as the dissociation 66 constant (Kd) or the half-maximal inhibitory concentration (IC50), this continuum 67 encapsulates the depth and strength of the interaction. Although there have been 68 several conventional wet-lab experiments [11–14] to estimate the interac-
tions between 69 antibodies and antigens, they remain expensive and time-consuming. This presents a 70 significant barrier to thoroughly exploring the extensive antibody optimization space, 71 limiting the identification of novel and potentially more effective antibody candidates. 72 Therefore, efficient computational methods are urgently needed to predict antibody73 antigen interaction (AAI) to promote antibody optimization and screening.
2
made available under aCC-BY-NC-ND 4.0 International license.
(which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is
bioRxiv preprint doi: https://doi.org/10.1101/2024.03.09.584264; this version posted March 13, 2024. The copyright holder for this preprint

Priors guidance
Route guidance
bc
a
SabDab, ...
OAS, ...
Modality bridging Transfer
Structure modality
Sequence modality
Sequence datasets
Structure datasets
EVQLVESGGGLV QPGLR...GSFDY WGQGTLVTVSS
...
...
Sequence-based methods
Structure-based methods
Antigen
Antibody
GKV
SA
TQV
... Interaction
Property modeling
Interaction matrix
Non-covalent interactions
Interpretable prediction
Fig. 1 Our motivation and methodology. Route and priors guidance are designed to facilitate interpretable prediction of antibody-antigen interactions. a, Two major categories of methods currently used for antibody-antigen interaction prediction are sequence-based and structure-based methods. b, Structural information distillation transfers structural information into sequence modality through modality bridging, thereby providing route guidance for interpretable prediction. c, Interaction matrix ma-
kes non-covalent interactions explicit through property modeling, thereby providing priors guidance for interpretable prediction.
74 As shown in Fig.1a, current computational methods, especially deep-learning 75 methods, can be mainly divided into structure-based and sequence-based methods 76 for characterizing Antibody-Antigen Interactions (AAI). The former exhibits lower 77 task complexity since the model takes protein tertiary structure as input, which is 78 closely related to protein interactions. Srivamshi et al. [15] employed graph convo79 lutional networks and an attention layer to explicitly encode the partner’s cont-
ext 80 in an antibody-antigen complex. While PInet [16] encoded proteins as surface point 81 clouds with physicochemical properties and 3D geometry, predicting epitope-paratope 82 in antibody-antigen. Another line of research is redesigning the complementarity83 determining regions (CDRs) to get a broad-spectrum antibody. Shan et al. [17] 84 developed a geometric neural network with attention mechanisms for antibody’s CDR 85 sequences optimization. However, experimental structure determination met-
hods, such 86 as NMR spectroscopy and X-ray crystallography, prove to be both time-intensive 87 and expensive, resulting in limited available data on antibody structures. Naturally, 88 data insufficiency presents an obstacle to training deep-learning models with ideal 89 generalization capability. In contrast, sequence-based methods, which take advantage
3
made available under aCC-BY-NC-ND 4.0 International license.
(which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is
bioRxiv preprint doi: https://doi.org/10.1101/2024.03.09.584264; this version posted March 13, 2024. The copyright holder for this preprint

90 of extensive antibody sequence data, offer a more efficient framework for large-scale 91 antibody screening. Earlier studies, such as ProABC [18], utilized a sequence-based 92 random forest algorithm to predict paratope residues, eliminating the need for struc93 tured data to achieve accurate predictions. Parapred [19] employed a combination of 94 local and global features, harnessing deep learning techniques to analyze AAI. Mar95 son et al. [20] introduced a convolutional neural network (MCNN-
) to predict the 96 antigen specificity of antibodies. DeepAAI [21] proposes dividing antigens and anti97 bodies into ’seen’ and ’unseen’ collections, utilizing graph neural networks to model 98 the issue of out-of-distribution (OOD) data. However, a common drawback shared 99 by these sequence-based methods is their limited interpretability and prediction per100 formance, primarily stemming from the alienation of one-dimensional sequences from 101 functionality. 102 In order to combine the advanta-
ges of both types of methods while avoiding the 103 disadvantages, it is essential to provide sensible ’sequence-to-function’ guidance to 104 structure-free models. Thus, we propose S3AI (Structure-Assisted Antibody-Antigen 105 Interaction Prediction), a deep-learning method that uses only sequences as inputs to 106 the inference phase. 107 The first form of guidance we introduce aims to establish a clear route from 108 sequence to structure modalities. Modality bridging is a tangible way to build-
 this 109 route (Fig.1b), where we automatically incorporate protein structural information 110 through a structural encoding module. By promoting the model’s ability to map from 111 sequences to structural latent codes via contrastive learning, we break the barrier 112 between these distinct modalities. In this process, knowledge from the 3D structures of 113 massive antibodies is captured in the model parameters, allowing the model to intro114 duce implicit structural information automatically i-
n case only sequence input is used. 115 The S3AI model incorporates two sequence feature extraction modules: one dedicated 116 to antigens and the other to antibodies. Considering the volume of available structure 117 and sequence data, structural information distillation is applied exclusively to the anti118 body feature extraction branch. Subsequently, the derived parameters are fine-tuned 119 in several downstream tasks, aiming to enhance the performance of AAI predictions. 120 Another pivotal -
guidance of S3AI is the explicit modeling of chemical priors 121 (Fig.1c). Recognizing the crucial role of non-covalent interactions in antibody-antigen 122 binding, we devise a module to capture chemical constraints accurately throughout 123 antigen-antibody docking. Beyond the features extracted from sequences using the pro124 tein language model, we generate various property maps of non-covalent interactions 125 from the sequences, adhering to universally applicable chemical rules. This provide-
s 126 the model with insights into potential interaction formations through the integration of 127 chemical priors in the deep-learning framework. The concatenated interaction matri128 ces are passed through convolutional layers, facilitating effective feature aggregation 129 and providing the model with a rich source of localized information. This novel module 130 not only improves interpretability by affording a tangible linkage between molecular 131 interactions and predictive outcomes but also-
 provides a complementary layer of local 132 features that synergize with global features extracted in other stages.
4
made available under aCC-BY-NC-ND 4.0 International license.
(which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is
bioRxiv preprint doi: https://doi.org/10.1101/2024.03.09.584264; this version posted March 13, 2024. The copyright holder for this preprint

133 Overall, S3AI is an interpretable antibody-antigen interaction prediction model 134 that bridges structure to sequence, introducing explicit chemical rules while utiliz135 ing implicit structural information. Downstream tasks for SARS-CoV-2 and HIV 136 demonstrate the exceptional proficiency of S3AI in predicting AAI, surpassing current 137 state-of-the-art predictors. Importantly, S3AI’s capability to operate without requir138 ing structural input during the inference phase positions it as a-
n ideal solution for 139 large-scale antibody optimization and screening. Naturally, S3AI can be applied to the 140 design of antibodies for various targets, making the development of antibody drugs 141 more precise and personalized.
142 2 Results
143 2.1 S3AI harnesses the property-driven architecture that 144 bridges structure to sequence
145 S3AI achieves unparalleled accuracy and throughput in predicting antibody-antigen 146 interactions by effectively integrating structural information with sequence input. 147 Prior to the advent of S3AI, methods focusing solely on sequence inputs attempted to 148 predict metrics related to AAI directly from the sequences of antibody-antigen pairs. 149 However, these approaches often fell short due to their lack of structural informa150 tion, which is crucial for understanding the nuances of int-
eractions. Consequently, the 151 ’routes’ constructed are typically blind, complex, and lack interpretability, making it 152 challenging to derive meaningful insights or predictions. 153 As shown in Fig.2a, S3AI, on the other hand, revolutionizes this approach by 154 actively guiding the mapping from antibody sequences to their structures, thereby 155 providing a more rational and coherent route for predicting AAI from sequence inputs. 156 The above strategy is here called structural information d-
istillation, and its core lies 157 in training a structural encoder through contrastive learning to obtain structure158 enhanced features. In the teacher network, the antibody structure is processed by 159 a pre-trained structure network to extract structural features. In the student net160 work, the antibody sequence is fed to the protein language model (i.e.ESM [22] and 161 then encoded by a learnable structure encoder to obtain features that incorporate 162 structural information. Finally, the -
training manner of contrastive learning allows the 163 knowledge from the antibody structure to be transferred to the structure encoder. 164 This method not only leverages the inherent sequence information but also enriches it 165 with structural data, enhancing the model’s performance and the interpretability of 166 its predictions. By doing so, S3AI offers a more informed and precise framework for 167 understanding the complex dynamics of antibody-antigen interactions. 168 Implicit modeling of A-
AI based on deep learning models is challenging because the 169 complexity of molecular interactions may cause fundamental chemical constraints not 170 to be understood by the neural network. To address this challenge, we propose the 171 interaction matrix, which explicitly models chemical constraints to introduce crucial 172 non-covalent interactions. As shown in Fig.2b, the sequences of an antibody and an 173 antigen are taken to calculate a property matrix containing non-covalent interactions. -
174 Take hydrogen bonds as an example, to construct a H-bond map between an antibody 175 and an antigen, we initially analyze their sequences to identify the number of hydrogen
5
made available under aCC-BY-NC-ND 4.0 International license.
(which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is
bioRxiv preprint doi: https://doi.org/10.1101/2024.03.09.584264; this version posted March 13, 2024. The copyright holder for this preprint

Antibody sequence
H E ... G T Q
Structure latent space Antibody structure
Sequence latent space
Antibody-Antigen interaction
Structural information distillation
Sequence feature Structure-enhanced feature
Structure encoder
Structure network
ESM
Contrastive learning
a
Interaction matrix
Antibody feature
Antigen feature Antigen sequence
lAb×lAg×(640) lAb×lAg× k
lAb×lAg× (640+k)
concat
Antibody sequence
E V
...
T V S
H E ... G T Q
lAb×lAg× 2
Antibody sequence
E V
...
T V S
2. 3.
...
4. 3. 2.
Hydrogen Bonds (example)
Acceptor 5. 4.
...
4. 4. 3.
Donor
min
2. 3.
...
4. 3. 2. Acceptor
5. 4.
...
4. 4. 3. Donor
Antigen sequence
H E
...
G T Q
The maximum number of simple hydrogen bonds.
Chemical priors:
b
c
ESM
Antibody sequence
Interaction matrix
Core-domain sequence feature
Structure-enhanced feature Classfication
Regression
Antibody sequence feature
Antigen sequence feature
E V
...
T V S
ESM
Antigen sequence
H E
...
G T Q
lAb×lAg×640
Structure encoder
CNN module
Interaction prediction module
Chemical rules
concat
IC50 IC50
Structure feature
Fig. 2 a, Structural information distillation, in which the antibody structure information extracted by the structure network is distilled into antibody sequence modality, thereby training the structure encoder to obtain structure-enhanced features. b, Interaction matrix, in which the feature matrix is calculated by implicit sequence embeddings, and the property matrix contains the physicochemical properties calculated by chemical rules. c, The overall framework of S3AI. The input antibody sequenc-
e is extracted with structure-enhanced feature, and the interaction matrix is concatenated with it after passing through the CNN module. The concatenated feature is then input into the subsequent interaction prediction module for classification (neutralization or not) and regression (IC50 estimation) tasks.
176 bond donors and acceptors for each amino acid. This step produces two vectors respec177 tively, with lengths matching those of the antibody and antigen, where each vector 178 element indicates the count of hydrogen bond donors or acceptors at every amino acid 179 position. Next, we compare the corresponding amino acids between the antibody and 180 antigen, determining the minimum number of available donors and acceptors for each
6
made available under aCC-BY-NC-ND 4.0 International license.
(which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is
bioRxiv preprint doi: https://doi.org/10.1101/2024.03.09.584264; this version posted March 13, 2024. The copyright holder for this preprint

a
b IC50 IC50
Fig. 3 a, Performance on integrated SARS-CoV-2 datasets. In both classification and regression tasks, S3AI outperforms state-of-the-art models across the board. b, Visualization of the impact of each module on the final concatenated features. The interaction matrix has a stronger impact on features than structural information distillation, and the joint use of the two modules achieves the best results.
181 pair. This results in two matrices, sized by the antibody and antigen sequence lengths. 182 These matrices delineate the potential H-bond interactions between each amino acid 183 pair, pinpointing regions with high interaction propensity. Furthermore, the sequences 184 of both the antibody and the antigen are processed to extract embeddings using ESM, 185 and these embeddings are then used to create a feature matrix. The above property 186 matrix and feature matrix are concatenated to form the-
 final interaction matrix, which 187 contains both implicit and explicit interaction patterns. 188 With the support of structural information distillation and interaction matrix, 189 the overall architecture of S3AI is shown in Fig.2c. The antibody and antigen 190 sequences are passed through the protein language model (ESM here) to obtain cor191 responding sequence features, in which the sequence features of core-domain of the 192 antigen—determined by the antigen’s specific type—are adopted to f-
orm the feature 193 matrix in the interaction matrix. The interaction matrix performs feature aggregation 194 through the CNN module and is concatenated with the structure-enhanced feature of 195 the antibody obtained through the structure encoder. The above-mentioned concate196 nated features are input into the interaction prediction module for downstream tasks 197 in the manner of multi-task learning, including the binary classification task of whether 198 the antibody-antigen pair is neutralizi-
ng and the regression task of IC50 estimation.
199 2.2 S3AI significantly outperforms state-of-the-art models
200 In order to comprehensively evaluate the predictive ability of S3AI for AAI, we collect 201 SARS-CoV-2-related AAI data from previous studies and integrate them into the
7
made available under aCC-BY-NC-ND 4.0 International license.
(which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is
bioRxiv preprint doi: https://doi.org/10.1101/2024.03.09.584264; this version posted March 13, 2024. The copyright holder for this preprint

202 largest dataset to date. As shown in Fig.3a, we perform a thorough comparison with 203 a series of models for antibody-antigen interaction prediction on regression tasks and 204 classification tasks, including MCNN [20], Parapred [19], Fast-Parapred [23], AG-Fast205 Parapred [23], PIPR [24], and ResPPI [25]. The detailed implementation can be found 206 in Supplementary information, Section S1. 207 For the regression task of IC50 estimation, S3AI significantly surpasses other 208 models. It sh-
owcases superior performance by achieving a Spearman correlation coef209 ficient of 0.655 and a Pearson correlation coefficient of 0.860. Compared to the 210 best-performing existing model, this represents an improvement of approximately 211 13.3% in the Spearman correlation and about 7.1% in the Pearson correlation. 212 For the classification task of neutralization, S3AI still comprehensively surpasses 213 other models, with an accuracy of 84.53% and an MCC of 68.50%. The above results 214 prove -
that S3AI has reached a new watermark on the prediction benchmark of 215 antibody-antigen interactions. 216 Structural information distillation and interaction matrix are crucial to the pre217 diction performance of S3AI, which is demonstrated in the visualization experiment 218 in Fig.3b and Table.S4. Principal component analysis (PCA) is adopted to explore 219 the impact of each module on the concatenated features, i.e., concatenations of 220 structure-enhanced features, and CNN-processed intera-
ction matrices. Compared with 221 the visualization result on the far right without using the above two modules, the 222 use of any module results in better clustering of features, and the joint use of the 223 two modules achieves the best clustering effect. It is worth noting that the impact 224 of the interaction matrix on the clustering effect is stronger than that of structural 225 information distillation, which also confirms our hypothesis: it is difficult for neural 226 networks to directly-
 understand complex molecular interactions, and explicit chemical 227 constraint modeling tends to provide a more accurate learning route.
228 2.3 S3AI is robust in the face of out-of-distribution 229 generalization
230 Out-of-distribution (OOD) generalization is a common challenge faced by all deep 231 learning models. The above challenge is even more pronounced in the prediction sce232 nario of antibody-antigen interactions since most antibodies are ’unseen’, i.e., the 233 interactions of a large number of antibodies with any antigen are unknown [21]. For 234 natural antibodies, the antibody space produced when faced with viral invasion is very 235 large, which makes it time-consuming and costly to measure -
the interaction strength of 236 any antibody-antigen pair through wet-lab experiments. In addition, the interactions 237 of synthetic antibodies with antigens are also blind to us. Therefore, deep learning 238 models for antibody-antigen interaction prediction require robust OOD generalization 239 capabilities. 240 Previous work proposed a deep-learning model, DeepAAI, specifically customized 241 to predict interactions of ’unseen’ antibody-antigen pairs. In order to prove the robust242 ness of S3-
AI, we adopt the original architecture of S3AI to compare performance with 243 DeepAAI without adding any customized modules for OOD. The only adjustment is 244 that we change the multi-task framework of S3AI to the same single-task framework
8
made available under aCC-BY-NC-ND 4.0 International license.
(which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is
bioRxiv preprint doi: https://doi.org/10.1101/2024.03.09.584264; this version posted March 13, 2024. The copyright holder for this preprint

a
b
Fig. 4 Performance on HIV datasets for out-of-distribution generalization. a, In the binary classification task of whether an antibody neutralizes HIV, S3AI comprehensively outperforms the state-of-the-art models specifically designed for out-of-distribution generalization of antibody-antigen interaction prediction, including model variants using PSSM containing rich evolutionary information. b, In the regression task of IC50 estimation, S3AI outperforms most of the model variants, including all m-
odel variants that do not incorporate features with additional evolutionary information.
245 as DeepAAI for a fair comparison. As shown in Fig.4a, in the neutralization classifi246 cation task, S3AI without customization completely surpassed all model variants of 247 DeepAAI. On the regression task of IC50 estimation, S3AI surpasses most model vari248 ants, including the two model variants that only input sequences (Fig.4b). We can see 249 that S3AI is slightly worse than the two model variants whose inputs contain PSSM 250 with evolutionary information. As an extremely time-consuming-
 descriptor, PSSM is 251 calculated based on multiple sequence alignments and incorporates evolutionary infor252 mation. However, S3AI is a deep-learning method that only requires input sequences 253 and does not contain homologous information. This may be the reason why its perfor254 mance on regression tasks is slightly worse than that of the model variants using PSSM 255 of DeepAAI. Overall, S3AI still surpasses the state-of-the-art OOD models without 256 special modifications to adapt to OOD t-
asks. This indicates that S3AI has learned 257 universal patterns of molecular interactions and thus accurately predicts interactions 258 of never-before-seen antibody-antigen pairs.
259 2.4 S3AI captures the universal pattern of antigen-antibody 260 interactions
261 The aforementioned performance comparison demonstrates the excellent ability of 262 S3AI in predicting AAI, and indicates that it has learned universal patterns of molec263 ular interactions to a certain extent. What needs to be further explored is whether the
9
made available under aCC-BY-NC-ND 4.0 International license.
(which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is
bioRxiv preprint doi: https://doi.org/10.1101/2024.03.09.584264; this version posted March 13, 2024. The copyright holder for this preprint

Region Effective Attribution
Samples
Average Attribution
a
b
Sample 1519 Sample 5401
Sample 8485 Sample 27248
c
negative positive
Sample 44 Sample 60 Sample 68 Sample 93
Fig. 5 a, Effective attributions of each region in variable regions to the predictions of antibodyantigen interactions. Among them, CDRs have the most significant average attribution, which is consistent with the basic mode of antibody neutralization. b, Effective attributions of four samples with different characteristics. The structures of antibody variable regions are colored according to the degree of attributions. c, Analysis of effective attributions within CDR regions of four samples. Diffe-
rent sub-regions in the CDRs are colored according to their attributions. Among them, CDR-H3 always tends to have a significant effective attribution, indicating that this sub-region is crucial for antibody neutralization, which is consistent with previous research conclusions.
10
made available under aCC-BY-NC-ND 4.0 International license.
(which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is
bioRxiv preprint doi: https://doi.org/10.1101/2024.03.09.584264; this version posted March 13, 2024. The copyright holder for this preprint

264 interaction pattern extracted by S3AI is consistent with the actual antibody neutral265 ization mechanism. To this end, we adopt a strategy of calculating the region effective 266 attribution, in which the higher the attribution of a region to the prediction result, 267 the more significant impact it has on the final prediction. There are basic modes of 268 neutralization between different antibodies and different antigens, the core of which 269 is that the Complementarity Determining Regions-
 (CDRs) are responsible for bind270 ing to the antigen [26, 27]. As shown in Fig.5a, the region effective attributions of 271 all antibody samples are displayed, and the CDRs of most samples have more signifi272 cant attributions than other framework regions (FRs) in variable regions. The average 273 attributions of all samples show that the impact of CDRs is several times that of 274 FRs, which proves that CDR is the most important region for the interaction between 275 antibody and antigen. In F-
ig.5b, the region effective attributions of four antibody 276 samples are shown. The difference between these samples is that the attributions of 277 FRs to the interactions have different characteristics. In sample 1519, all FRs are pos278 itive attributions, while in sample 5401, it is exactly the opposite, that is, all FRs are 279 negative attributions. Furthermore, in sample 8485 and sample 27248, negative and 280 positive attributions coexist. The above phenomenon confirms a basic fact that t-
he 281 attributions of FRs to the interactions are flexible and variable, which is caused by 282 the binding characteristics of different antibody-antigen pairs. 283 Moreover, CDR includes six sub-regions, namely CDR-L1, CDR-L2, CDR-L3, 284 CDR-H1, CDR-H2, and CDR-H3. A large number of previous works have agreed 285 that CDR-H3 is important for the interaction between antibodies and antigens, which 286 makes us very curious whether S3AI can capture this phenomenon [28–32]. As shown 287 in Fig.5c, -
sub-regions in the CDRs of four antibody samples are displayed. What 288 the four samples have in common is that CDR-H3 always tends to have signifi289 cant effective attribution, which is consistent with the above conclusion. Interestingly, 290 the impacts of sub-regions within the CDRs, aside from CDR-H3, are diverse and 291 irregular [29, 30, 33], which further highlights the complexity of AAI mechanism.
292 3 Discussion
293 Antibodies are important immune molecules that play a crucial role in the immune 294 process. The remarkable specificity of antibodies against antigens has led humans to 295 continue to explore technical routes to develop them into clinical drugs. With the 296 increasingly urgent demand for personalized and precision medicine, the research and 297 development of antibody drugs requires more efficient and high-precision technical 298 means. Computational methods, especially deep learning method-
s, have shown great 299 potential in antibody optimization or screening. However, the two current mainstream 300 methods for predicting AAI, namely structure-based and sequence-based methods, 301 have obvious shortcomings, which come from the scarcity of structural data and the 302 alienation between sequence and function. In addition, the common difficulty faced by 303 the above two types of methods is that it is challenging for neural networks to under304 stand complex molecular interactions. Th-
erefore, the development of an interpretable 305 deep-learning model for AAI prediction that overcomes structural or sequence mode 306 constraints is of great significance for antibody engineering.
11
made available under aCC-BY-NC-ND 4.0 International license.
(which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is
bioRxiv preprint doi: https://doi.org/10.1101/2024.03.09.584264; this version posted March 13, 2024. The copyright holder for this preprint

307 The first contribution of S3AI is to break the barrier between structure-based and 308 sequence-based methods. Predicting AAI based on sequences has a high task com309 plexity, which is rooted in the alienation route from sequence to structure and then 310 to function. This motivates us to utilize structural information implicitly, that is, to 311 incorporate knowledge from the protein structure modality to the sequence modal312 ity. In this work, we propose a strategy named structural inform-
ation distillation to 313 achieve modality bridging. First, a teacher network with structure as input and a stu314 dent network with sequence as input are set up. The training manner of contrastive 315 learning is further used to store the information from the teacher network to the struc316 ture encoder. The structural encoder is capable of transforming sequence features into 317 structure-enhanced features, eliminating the need for input structure in the down318 stream task training and inferenc-
e stages. In short, structural information distillation 319 effectively realizes cross-modal information transfer and promotes the establishment 320 of ’sequence-to-function’ route. 321 S3AI’s second contribution is the explicit modeling of chemical priors to guide 322 neural networks in understanding complex molecular interactions. Antibody-antigen 323 interactions are primarily driven by non-covalent interactions, so we propose interac324 tion matrix to introduce the composite impact of hydrogen-
 bonding, van der Waals 325 forces, electrostatic interaction, and hydrophobic interactions. In general, this inter326 action matrix makes up for the shortcomings of the implicit modeling of AAI. In 327 other words, explicit modeling of interaction patterns reduces the task complexity of 328 predicting functions directly from sequences. 329 The design of the above two modules ensures S3AI’s excellent performance 330 in predicting AAI. In this work, we comprehensively examine the capabilities of 33-
1 S3AI, including its robustness under OOD generalization. S3AI not only significantly 332 surpasses the state-of-the-art models but also exhibits ideal OOD generalization capa333 bilities. Without any adjustments for the OOD task, S3AI still outperforms all variants 334 of the state-of-the-art model customized for OOD generalization in predicting AAI in 335 the neutralization or not classification task. In the regression task of IC50 estimation, 336 S3AI outperforms all model variants that only a-
dopt sequences as input in a fair com337 parison. The above prediction performance indicates that S3AI has a certain degree of 338 understanding of the basic patterns of molecular interactions, which facilitates its gen339 eralization for the prediction of unknown antibody-antigen pairs. We further intuitively 340 explore the ability of S3AI to capture the universal pattern of AAI. Consistent with 341 the antibody neutralization mechanism, S3AI accurately identifies CDRs responsible 342 for specif-
ic binding to antigens. Furthermore, the importance of sub-region CDR-H3 343 for AAI is also discovered by S3AI. The above results demonstrate S3AI’s awareness 344 of molecular interaction mechanisms, which is rooted in explicit modeling of chemical 345 priors and strategy for bridging structure to sequence modality. 346 The potential of S3AI lies in the large-scale optimization and screening of antibod347 ies. The structure-free input mode in the inference stage breaks through the dilemma 348 of -
the scarcity of real antibody structures, ensuring that antibody optimization and 349 screening are only performed at the sequence level and can be massively parallel. 350 This will greatly improve the efficiency of discovering immunologically active or spe351 cific antibodies in the huge antibody space, thereby accelerating the development of
12
made available under aCC-BY-NC-ND 4.0 International license.
(which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is
bioRxiv preprint doi: https://doi.org/10.1101/2024.03.09.584264; this version posted March 13, 2024. The copyright holder for this preprint

352 antibody drugs. It is foreseeable that in the future, as the scale of available real anti353 body structures increases, the structural information distillation module will be able 354 to extract more general and precise implicit structural information. In addition, fur355 ther accurate modeling of chemical constraints is also a feasible way to improve the 356 prediction performance of S3AI.
357 4 Methods
358 4.1 Data
359 4.1.1 Data for structural information distillation
360 The antibody structure data utilized for structural information distillation in this 361 study encompasses two main types: real antibody data collected from the SabDab [34] 362 and predicted antibody structure data derived from sequences using Igfold [35], which 363 is a deep learning model specifically designed for predicting antibody structures. For 364 the real antibody data, we exclude single-chain antibodies, entries with missing infor365 mation, those with formatting errors (such as rede-
fined atoms), and sequences with 366 discontinuities within the chains. The structural data predicted by IgFold includes 367 paired antibodies from the OAS dataset, along with a selection of relevant antibodies 368 from the coronavirus.
369 4.1.2 SARS-CoV-2 data
370 Given the absence of comprehensive studies summarizing IC50 data across various 371 antibody-antigen pairs in the field, IC50 data are collected from several biological 372 studies [36–39] that measured and published IC50 values between SARS-CoV-2 or 373 its variants and human antibodies. These studies encompassed 18 different lineages, 374 including those that emerged after Omicron. We obtain mutations of each lineage 375 from outbreak.info [40, 41]. These mutations are then introduced into t-
he spike pro376 tein sequences of the wild-type coronavirus, as obtained from GISAID [42]), thereby 377 generating the spike protein sequences for each lineage. 378 Manual standardization is necessary because the IC50 values originated from 379 diverse papers with varying experimental conditions. For example, the reporting of 380 negative sample values (where IC50 ≥ 10 μg/ml) varies across studies, with some list381 ing them as ’>10’, ’>100’, or specifying a particular value over 10, or even a con-
stant 382 value (e.g., 1000 μg/ml). In our study, we standardize all negative IC50 samples to 383 a uniform value of 10 μg/ml. Similarly, we classify samples with IC50 ≥ 10 μg/ml as 384 non-neutralizing, while those with values below 10 μg/ml are deemed neutralizing. 385 Moreover, during the de-duplication process of antibody sequences, discrepancies 386 in IC50 values for the same antibody-antigen pair across different studies are observed. 387 Such inconsistent data are identified as errors and -
excluded to ensure dataset accu388 racy. We yield IC50 values for 29,483 pairs of coronavirus antigens and corresponding 389 antibodies.
13
made available under aCC-BY-NC-ND 4.0 International license.
(which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is
bioRxiv preprint doi: https://doi.org/10.1101/2024.03.09.584264; this version posted March 13, 2024. The copyright holder for this preprint

390 4.1.3 HIV data
391 The HIV data used to test OOD performance in our study comes from the Com392 pile Analyze and Tally NAb Panels (CATNAP) at the Los Alamos HIV Database 393 (LANL) [43], as published by DeepAAI. We follow the dataset’s split between ’seen’ 394 and ’unseen’ data, conducting OOD tests on the ’unseen’ dataset.
395 4.2 Architecture overview
S3AI is built on the protein language model that takes paired antibody and antigen sequences as input. The heavy and light chain sequences of the input antibody are concatenated and then encoded by ESM. For antigen, the protein sequence is fed into a separate ESM to produce the sequence feature:
Zseq
ab = ESMab(ABH ⊕ ABL), (1)
Zseq
ag = ESMag(AG), (2)
where ABH = (ab1, ab2 · · · , abk) and ABL = (abk+1, abk+2, · · · , abm) represent the sequences of the heavy and light chains of antibody, respectively, while AG = (ag1, ag2, · · · , agn) denotes the sequence of antigen. Structure encoder introduces
structural information to sequence features of antibody Zseq
ab , producing Zseq2str
ab (see
Section 4.3). Meanwhile, the sequence features Zseq
ab , Zsaegq, along with their respective sequences, are leveraged to generate the interaction matrix Zinter. This matrix is subsequently processed by Convolutional Neural Network (CNN) module, aimed at extracting interaction-related feature Zconv (refer to Section 4.4). Two different multilayer perceptrons (MLPs) are employed to subsequently process the concatenated features, yielding predictions for both classification and regression tasks:
yˆ(cls) = σsigmoid(ψcls(Zseq2str
ab ⊕ Zconv)), (3)
yˆ(reg) = ψreg(Zseq2str
ab ⊕ Zconv), (4)
396 where ψcls and ψreg represent the MLPs for classification and regression tasks, 397 respectively; ⊕ donates the concatenation operation on the final features.
398 4.3 Structural information distillation
399 The tertiary structure and sequence of antibodies can be considered two distinct 400 modalities. In AAI problems, the structural modality often contributes more signifi401 cantly than the sequence modality. However, the scarcity or even absence of structural 402 data in many application scenarios leads to performance loss. To address this chal403 lenge, we look towards a series of cross-modal distillation methods [44–46], which offer 404 a strategy to address the issue of missing modalities. 4-
05 Building on this foundation and inspired by the recent advancements in the field 406 of molecular property prediction, notably the 3DInfomax [47], we leverage contrastive 407 learning to facilitate knowledge transfer between structural and sequence networks. 408 This process can be regarded as a form of cross-modal distillation technique.
14
made available under aCC-BY-NC-ND 4.0 International license.
(which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is
bioRxiv preprint doi: https://doi.org/10.1101/2024.03.09.584264; this version posted March 13, 2024. The copyright holder for this preprint

409 Structural information distillation involves two networks: a teacher network fstr(·) 410 that receives antibody structural inputs and outputs structural representations, and 411 a student network fseq(·) that takes sequence inputs to generate sequence features. 412 The teacher network’s weights are derived from pretraining on a protein structure 413 dataset and remain fixed throughout this process. The student network, comprised of 414 concatenated ESM and structure encoder, is tasked with ex-
tracting features from the 415 antibody sequence. During the training process, the student network’s parameters are 416 updated, enabling it to learn how to incorporate structural information into sequence 417 features. For an antibody x = (xseq, xstr) in a dataset, its sequence and structure are 418 input into fseq(·) and fstr(·), respectively, yielding representations zseq2str and zstr. 419 The training objective at this stage is to maximize the similarity between representations of the same ant-
ibody zseq2str
i and zstr
420 i while minimizing the similarity between
unmatched representations zseq2str
i and zstr
421 j (i ̸= j).
The similarity measurement function is defined as the cosine similarity, which is given by the formula:
sim(zseq2str
i , zstr
j ) = zseq2str
i · zstr
j ∥zseq2str
i ∥∥zstr
j ∥ . (5)
To guide this process, the NT-Xent (normalized temperature-scaled cross entropy) loss is utilized[48]:
Li,j = − log exp (sim (zi, zj) /τ )
P2N
k=1 I[k̸=i] exp (sim (zi, zk) /τ ) , (6)
422 where the indicator function I[k̸=i] takes values from {0, 1}, is used to determine 423 whether k is not equal to i (evaluating to 1 if and only if k ̸= i). Additionally, τ 424 represents a temperature parameter that adjusts the scale of the loss. The NT-Xent 425 loss is calculated for all positive pairs within a mini-batch, ensuring symmetry in the 426 evaluation of pairwise similarities. 427 We adopt the structural representation network proposed in [49] as our teacher 428 network, utilizing-
 the pretrained weights they provided. The teacher network is solely 429 engaged in the process of structural information distillation, extracting representations 430 from structural data, and does not participate in the training or inference processes of 431 downstream tasks. The parameters of the structure encoder within the student network 432 are used for initialization and undergo further fine-tuning on downstream tasks.
433 4.4 Interaction matrix
Within the array of structure-independent methods, beyond the previously mentioned challenge of diminished accuracy stemming from an absence of structural data, lies an additional complication: the issue of ambiguous interpretability. In response, several studies [50–53] have investigated the incorporation of attention mechanisms to enhance interpretability. However, the intricate nature of molecular interactions presents a significant challenge to the implicit modeling efforts of AAI through deep-
 learning
15
made available under aCC-BY-NC-ND 4.0 International license.
(which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is
bioRxiv preprint doi: https://doi.org/10.1101/2024.03.09.584264; this version posted March 13, 2024. The copyright holder for this preprint

models.Thus, given two sequences, the antibody AB = (ab1, ab2 · · · , abm) and the antigen AG = (ag1, ag2, · · · , agn), we propose interaction matrix Zinter ∈ Rm×n×d to capture the interaction pattern between antibody and antigen. The interaction matrix
is composed of two parts:
Zinter = Zfeat, Zprop . (7)
The feature matrix Zfeat is derived from the element-wise multiplication of latent codes, capturing sequence information:
zfeat
ij = hAb
i ⊙ hAg
j . (8)
Here, hAb
i and hAg
434 j are the latent codes for the ith amino acid in the antibody and the 435 jth amino acid in the antigen, respectively. 436 For each type of non-covalent interaction, the property matrix Zprop introduces 437 specific channels, including hydrogen bonding, electrostatic interactions, van der Waals 438 forces, and hydrophobic interactions. We first focus on hydrogen bonding, a fundamental interaction widely prevalent across various protein-protein interactions. For each pair of amino acids, abi fr-
om the antibody and agj from the antigen, the calculation for the H-bond matrix is as follows:
z(1)
ij = min (Pacceptor(abi), Pdonor(agj )) ,
z(2)
ij = min (Pdonor(abi), Pacceptor(agj )) ,
(9)
439 where Pacceptor and Pdonor represent the counts of hydrogen acceptor and donor 440 atoms, respectively, of an amino acid. This process iterates over each amino acid 441 pair between the two sequences, generating a comprehensive interaction profile that 442 captures potential hydrogen bonding. Another type of important non-covalent interaction between antibodies and antigens is electrostatic interactions. These interactions are primarily governed by the charge properties of the amino acids. To -
incorporate electrostatic interactions into the property matrix, a specific channel is introduced, which quantifies the potential for electrostatic interactions between each pair of amino acids. The calculation for this part of the property matrix can be represented as follows:
z(3)
ij = I [Q(abi) · Q(agj) < 0] , (10)
443 where Q(x) denotes the charge of amino acid x, which can be positive, negative, or 444 neutral. This binary representation streamlines the modeling of electrostatic interac445 tions by directly identifying when opposite charges are present between amino acids, 446 thus indicating potential attractive forces that can enhance the interaction. In this 447 context, only pairs of amino acids with opposite charges are considered to possibly 448 contribute to the interaction potential. 449 Building o-
n the foundation laid by the analysis of hydrogen bonding and electro450 static interactions, we next turn our attention to van der Waals forces. While subtler 451 than the previously mentioned forces, van der Waals interactions play a crucial role
16
made available under aCC-BY-NC-ND 4.0 International license.
(which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is
bioRxiv preprint doi: https://doi.org/10.1101/2024.03.09.584264; this version posted March 13, 2024. The copyright holder for this preprint

452 in the nuanced dance of molecular recognition, acting as the fine threads that help 453 weave the complex tapestry of antibody-antigen interactions. To capture potential van der Waals forces within interaction matrix, we introduce an additional layer of analysis. Based on the relationship between distances and interaction strengths between amino acids [54], we employ a Gaussian formula to approximate the effect of distance on van der Waals forces, taking into account the complementary nature -
of steric hindrance of amino acid side chains. The calculation of this addition to our property matrix is as follows:
z(4)
ij = exp − (V (abi) + V (agj) − V0)2
2σ2
!
. (11)
454 Here, V (x) denotes the van der Waals volume [55] of an amino acid x. V0 and σ2 are 455 derived from a Gaussian fit to the aggregate of possible amino acid pair volumes. 456 As the final piece of our interaction matrix, we leverage the hydropathy index [56] 457 to capture hydrophobic interactions. The calculation method is simple yet effective:
z(5)
ij = 1 − H(abi) − H(agj)
M , (12)
458 where H(x) represents the hydropathy index of amino acid x. The term M stands 459 for the maximum absolute difference in hydropathy indices across all possible pairs of 460 amino acids, ensuring the subtraction operation yields a normalized score that reflects 461 the relative hydrophobic compatibility between abi and agj. This channel provides 462 information on hydrophobic interactions through a simple assessment of the differences 463 in hydrophobic and hydrophilic between interacting amino-
 acids. 464 Given the approximations and simplifications involved in creating the property 465 matrix, as well as the complexity of actual interactions, we further extract features 466 from the interaction matrix using a CNN module. This module enriches the network 467 with local feature information. Through interpretability analysis (see Section 4.8), 468 we have also proven its effectiveness in capturing the patterns of antibody-antigen 469 interactions.
470 4.5 Multi-task focal loss
Due to the specificity of the interaction between antibodies and antigens, most of the recorded antibody-antigen pairs do not exhibit neutralization. This has resulted in an imbalance of positive and negative samples in our collected SARS-CoV-2 dataset. Additionally, differences in fitness among different virus lineages lead to a non-uniform data distribution at the lineage level. (see Supplementary information, Fig.S1) Moreover, since the IC50 values in the dataset come from different sources, an-
d the experimental conditions and methods cannot be guaranteed to be completely consistent, the dataset also contains some unavoidable noise. To address these issues, we have adopted a multi-task framework (see Section 4.2) along with the corresponding focal loss [57, 58] for training downstream tasks. The overall loss consists of regression and classification loss: L = βLreg + (1 − β)Lcls, (13)
17
made available under aCC-BY-NC-ND 4.0 International license.
(which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is
bioRxiv preprint doi: https://doi.org/10.1101/2024.03.09.584264; this version posted March 13, 2024. The copyright holder for this preprint

where β is a weighting factor to balance the regression and classification tasks. The regression part of focal loss is defined as:
Lreg = 1
n
n
X
i=1
(yi − yˆi)2. (14)
For the binary classification neutralization prediction task, we adopt the classical focal loss:
Lcls = − 1
n
n
X
i=1
(α(1 − pi)γ log(pi) + (1 − α)pγ
i log(1 − pi)) , (15)
471 where (1 − pi) and pi are the model’s estimated probabilities for the class with label 472 y = 0 and y = 1, respectively; α is a weighting factor for the class; γ is the focusing 473 parameter that smoothly adjusts the rate at which easy examples are down-weighted. 474 (Supplementary information, Table.S8)
475 4.6 Evaluation metrics for regression and classification tasks
476 Mean Absolute Error (MAE)
MAE, conversely, measures the average magnitude of errors in a set of predictions without considering their direction. It’s calculated as the average of the absolute differences between predicted and actual values, thus providing an intuitive measure of prediction accuracy:
MAE = 1
N
N
X
i=1
|yi − yˆi|.
477 Root Mean Square Error (RMSE)
RMSE is a standard way to measure the error of a model in predicting quantitative data. The formula for RMSE is given by:
RMSE =
v u u t
1 N
N
X
i=1
(yi − yˆi)2, (16)
478 where N is the number of observations, yi is the actual value of an observation, and 479 yˆi is the predicted value.
480 Pearson and Spearman Correlation
IC50 values originate from wet-lab experiments across various batches and different laboratories. Thus, given the diversity in experimental conditions, Spearman’s rank correlation coefficient (Spearman’s ρ) is particularly apt for measuring the relationship between ordinal variables, such as comparing the magnitudes of different IC50 values. It assesses how well the relationship between two variables can be described
18
made available under aCC-BY-NC-ND 4.0 International license.
(which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is
bioRxiv preprint doi: https://doi.org/10.1101/2024.03.09.584264; this version posted March 13, 2024. The copyright holder for this preprint

using a monotonic function, focusing on the ranks of values rather than their direct magnitudes:
ρ = 1 − 6 P d2
i
n(n2 − 1) , (17)
481 where di is the difference between the ranks of corresponding values, and n is the 482 number of observations. We also consider Pearson’s correlation coefficient (Pearson’s r) for its ability to measure the linear correlation between two variables, offering a comprehensive analysis when the data distribution permits:
r=
P(xi − x ̄)(yi − y ̄)
pP(xi − x ̄)2 P(yi − y ̄)2 , (18)
483 where xi and yi are the individual sample points indexed with i, x ̄ and y ̄ are the 484 sample means. 485 Considering the variability in IC50 data due to different experimental setups, 486 Spearman’s ρ becomes a more suitable choice for evaluating the ordinal relationship 487 between IC50 values, providing a robust measure against the non-uniformity of data 488 collection methods. Pearson’s r complements this by quantifying the degree of linear 489 relationship where applicable, together offe-
ring a nuanced approach to assess predictive 490 accuracy in the context of IC50 value prediction.
491 Accuracy, F1 Score, and Matthews Correlation Coefficient (MCC)
In evaluating binary classification models, especially with imbalanced datasets like the SARS-CoV-2 datasets, accuracy alone can be misleading. Thus, we supplement it with the F1 Score and the Matthews Correlation Coefficient (MCC). The F1 Score, calculated as the harmonic mean of precision p (correct positive predictions out of all positive predictions) and recall r (correct positive predictions out of all actual positives), offers a balanced metric:
F1 = 2· p·r
p + r . (19)
492 MCC further provides a comprehensive measure by accounting for all aspects of the 493 confusion matrix, capturing the quality of binary classifications beyond the limitations 494 of accuracy and F1 Score. This approach ensures a more accurate assessment of model 495 performance in handling the skewed class distribution typical of the SARS-CoV-2 496 dataset.
MCC = TP × TN − FP × FN
p(T P + F P )(T P + F N )(T N + F P )(T N + F N ) , (20)
497 where TP is the number of true positives, TN is the number of true negatives, FP is 498 the number of false positives, and FN is the number of false negatives.
19
made available under aCC-BY-NC-ND 4.0 International license.
(which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is
bioRxiv preprint doi: https://doi.org/10.1101/2024.03.09.584264; this version posted March 13, 2024. The copyright holder for this preprint

499 Precision–Recall Area Under the Curve (PC-AUC) and Area Under the 500 Receiver Operating Characteristic (ROC-AUC)
501 PR-AUC measures the trade-off between precision and recall across different thresh502 olds. It is particularly valuable in the SARS-CoV-2 datasets, where positive samples 503 (neutralizing pairs) are much less common than negative ones. 504 ROC-AUC evaluates how well the model distinguishes between neutralizing and 505 non-neutralizing pairs over various threshold settings. It plots the true positive rate 506 (recall) against the false positive rate (the ratio of incorrectly identified negativ-
es) to 507 show the model’s discrimination capability.
508 4.7 Module ablation study and principal component analysis
509 To further investigate and analyze the impact of structural information distillation 510 and interaction matrix on model performance, we conduct module ablation study and 511 PCA analysis on the final concatenated features. 512 We employ four configurations of the model: the original S3AI, one without struc513 tural information distillation, one without interaction matrix, and one without both 514 components. For the version without structural information distillation, we randomly 515 initiali-
ze the structural encoding module. For the variant lacking interaction matrix, 516 we pool the sequence features of the antibody and antigen along their length, con517 catenate them with the other final features, and then feed them into the interaction 518 prediction module for prediction. All models are trained under identical settings. After 519 training, we use PCA analysis to visualize the concatenated features of the best check520 point for each model on all samples in the test set. The final-
 performance of ablation 521 study is presented in Table.S4.
522 4.8 Region effective attribution calculation
523 Attribution evaluation
We use the Shapley value [59] to measure the attribution of the regions in the input antibody to the prediction result. The Shapley value is a renowned game-theoretic metric for assessing the attribution/importance of each input variable to the output of the deep learning model. It has been recognized as the sole attribution method that adheres to the axioms of anonymity, symmetry, dummy, additivity, and efficiency. Accordingly, the Shapley value [60] of the i-th variable is computed as follows:
φ(i) =
X
S⊆N \{i}
|S|!(r − |S| − 1)!
r! · v(S ∪ {i}) − v(S) , (21)
524 where N denotes the set of variables and | · | denotes the cardinality of the set. Here, 525 we use v(S) to simplify the notation of v(xS), and v(xS) denotes the model output 526 on a masked sample xS. In the masked sample xS, variables in S are present, and 527 variables in N \ S are masked. In this way, v(∅) represents the model output when all 528 input variables are masked, and v(N ) denotes the model output on the original input 529 sample x.
20
made available under aCC-BY-NC-ND 4.0 International license.
(which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is
bioRxiv preprint doi: https://doi.org/10.1101/2024.03.09.584264; this version posted March 13, 2024. The copyright holder for this preprint

530 Attribution of FRs and entire CDRs
531 As the first step of estimating the attribution of the CDRs, we visualize the effects of 532 the entire CDRs on the prediction result. 533 For an input antibody AB, let Zinter ∈ Rm×n×d denote the interaction matrix, 534 where m, n, and d denote the length of the antibody AB, the length of the antigen 535 AG and channel number of the interaction matrix, respectively. We select the feature 536 of the entire CDRs as a single variable and divide the remained feature of FRs in 537 Zinter into t con-
tinuous regions. These regions and the CDRs are selected as t + 1 538 input variables, which consist of the input variable set N , to calculate the Shapley 539 value. Then, we set v(N ) as the prediction output for antibody-antigen interactions, 540 and v(S) denotes the prediction output when the variable in N \ S is masked.
541 Attribution of each CDR sub-region
542 After calculating the attribution of the entire CDRs, we estimate the attribution of 543 each CDR sub-region. 544 Given an intermediate-layer feature of an input antibody, the entire CDRs consist 545 of 6 parts: CDR-H1, CDR-H2, CDR-H3, CDR-L1, CDR-L2, and CDR-L3. We select 546 the feature of these 6 parts as input variables, which consist of the input variable set 547 N . Then, we set v(N ) as the attribution of the entire CDRs in this input antibody 548 AB and v(S) denotes the attribution of -
the entire CDRs when the variable in N \ S 549 is masked.
550 Mask method
551 When we calculate the prediction output v(S) on a masked input antibody, we system552 atically mask the selected variables in N \S, which represent features in the interaction 553 matrix, and observe their impact on the model’s output. This method involves iter554 atively masking each feature while measuring the change in the model’s predictions. 555 By comparing the model’s output with masked and present variables, Shapley val556 ues can be calculated to quantify the feature’s contribution to-
 the prediction. This 557 method requires a faithful baseline value to mask the variable, which does not provide 558 additional prior information and does not cause the masked feature to be out of the 559 distribution of the original features in the interaction matrix. 560 For the attribution of the entire CDRs, the baseline value to mask the variable 561 is set as the variable’s average feature vector across the dataset, which is a widely 562 used method to set the baseline value, providing a ref-
erence point for evaluating the 563 significance of individual features. 564 For the attribution of each CDR sub-region, since v(N ) is the attribution of the 565 entire CDRs, we calculate the masked output v(S) by replacing the features of the 566 regions in the CDRs that belong to N \ S with baseline values when calculating the 567 attribution entire CDRs. The baseline value to mask the variable is set as the variable’s 568 average feature vector across the dataset.
569 Variable selection
570 In order to encourage greater faithful effective attribution, we generate many parti571 tions of variables for calculating the Shapley value. In the selection of Shapley values
21
made available under aCC-BY-NC-ND 4.0 International license.
(which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is
bioRxiv preprint doi: https://doi.org/10.1101/2024.03.09.584264; this version posted March 13, 2024. The copyright holder for this preprint

572 for the attribution of the entire CDRs, the process involves randomly selecting con573 tiguous regions from the input antibody after choosing CDRs as a whole, and for the 574 attribution of each CDR sub-region, we also use these randomly selected regions to 575 get several attribution value outputs. 576 Besides, these remaining regions can be randomly sampled in various sizes to create 577 different scales of variables. These selected regions form the variables for computing 578 the Shapley v-
alue. Through various combinations of these selections, attributions are 579 calculated for each variable, and the average result across all selections represents the 580 final attribution of the entire CDRs. 581 By calculating the attribution for each variable and averaging the results across 582 all partitions, we obtain a comprehensive assessment of the entire CDRs’ attribution 583 to the prediction outcome. Additionally, by averaging the attribution values outputs 584 {v(S)} from all partition-
s, this approach ensures a comprehensive evaluation of the 585 attribution for each CDR sub-region.
586 Data availability
587 The SabDab data is available at https://opig.stats.ox.ac.uk/webapps/ 588 sabdab-sabpred/sabdab. The processed HIV data is freely available at 589 https://github.com/enai4bio/DeepAAI. SARS-CoV-2 data can be downloaded from 590 https://github.com/stau-7001/S3AI.
591 Code availability
592 Relevant code and models will be available at https://github.com/stau-7001/S3AI.
593 References
594 [1] Jerne, N. K. The immune system. Scientific American 229, 52–63 (1973).
595 [2] Nimmerjahn, F. & Ravetch, J. V. Antibody-mediated modulation of immune 596 responses. Immunological reviews 236, 265–275 (2010).
597 [3] Parkin, J. & Cohen, B. An overview of the immune system. The Lancet 357, 598 1777–1789 (2001).
599 [4] Beck, A., Goetsch, L., Dumontet, C. & Corvaı ̈a, N. Strategies and challenges for 600 the next generation of antibody–drug conjugates. Nature reviews Drug discovery 601 16, 315–337 (2017).
602 [5] Drago, J. Z., Modi, S. & Chandarlapaty, S. Unlocking the potential of antibody603 drug conjugates for cancer therapy. Nature Reviews Clinical Oncology 18, 327–344 604 (2021).
605 [6] Bustamante, C. D., De La Vega, F. M. & Burchard, E. G. Genomics for the 606 world. Nature 475, 163–165 (2011).
22
made available under aCC-BY-NC-ND 4.0 International license.
(which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is
bioRxiv preprint doi: https://doi.org/10.1101/2024.03.09.584264; this version posted March 13, 2024. The copyright holder for this preprint

607 [7] Patterson, S. D. & Aebersold, R. H. Proteomics: the first decade and beyond. 608 Nature genetics 33, 311–323 (2003).
609 [8] Varad ́e, J., Magad ́an, S. & Gonz ́alez-Fern ́andez,  ́A. Human immunology and 610 immunotherapy: main achievements and challenges. Cellular & Molecular 611 Immunology 18, 805–828 (2021).
612 [9] Krzyszczyk, P. et al. The growing role of precision and personalized medicine for 613 cancer treatment. Technology 6, 79–100 (2018).
614 [10] Johnson, K. B. et al. Precision medicine, ai, and the future of personalized health 615 care. Clinical and translational science 14, 86–93 (2021).
616 [11] Lee, C. M., Iorno, N., Sierro, F. & Christ, D. Selection of human antibody 617 fragments by phage display. Nature protocols 2, 3001–3008 (2007).
618 [12] Butler, J. E. Enzyme-linked immunosorbent assay. Journal of immunoassay 21, 619 165–209 (2000).
620 [13] Mun ̃oz-Fontela, C. et al. Animal models for covid-19. Nature 586, 509–515 (2020).
621 [14] Schmidt, F. et al. Measuring sars-cov-2 neutralizing antibody activity using pseu622 dotyped and chimeric viruses. Journal of Experimental Medicine 217, e20201181 623 (2020).
624 [15] Pittala, S. & Bailey-Kellogg, C. Learning context-aware structural representations 625 to predict antigen and antibody binding interfaces. Bioinformatics 36, 3996–4003 626 (2020).
627 [16] Dai, B. & Bailey-Kellogg, C. Protein interaction interface region prediction by 628 geometric deep learning. Bioinformatics 2580–2588 (2021). URL http://dx.doi. 629 org/10.1093/bioinformatics/btab154.
630 [17] Shan, S. et al. Deep learning guided optimization of human antibody against 631 SARS-COV-2 variants with broad neutralization. Proceedings of the National 632 Academy of Sciences 119, e2122954119 (2022).
633 [18] Olimpieri, P. P., Chailyan, A., Tramontano, A. & Marcatili, P. Prediction of 634 site-specific interactions in antibody-antigen complexes: the proabc method and 635 server. Bioinformatics 29, 2285–2291 (2013).
636 [19] Liberis, E., Veliˇckovi ́c, P., Sormanni, P., Vendruscolo, M. & Li`o, P. Parapred: 637 antibody paratope prediction using convolutional and recurrent neural networks. 638 Bioinformatics 34, 2944–2950 (2018).
639 [20] Mason, D. M. et al. Optimization of therapeutic antibodies by predicting anti640 gen specificity from antibody sequence via deep learning. Nature Biomedical 641 Engineering 5, 600–612 (2021).
23
made available under aCC-BY-NC-ND 4.0 International license.
(which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is
bioRxiv preprint doi: https://doi.org/10.1101/2024.03.09.584264; this version posted March 13, 2024. The copyright holder for this preprint

642 [21] Zhang, J. et al. Predicting unseen antibodies’ neutralizability via adaptive graph 643 neural networks. Nature Machine Intelligence 4, 964–976 (2022).
644 [22] Lin, Z. et al. Language models of protein sequences at the scale of evolution 645 enable accurate structure prediction. bioRxiv (2022).
646 [23] Deac, A., VeliCˇ kovic ́, P. & Sormanni, P. Attentive cross-modal paratope 647 prediction. Journal of Computational Biology 26, 536–545 (2019).
648 [24] Chen, M. et al. Multifaceted protein–protein interaction prediction based on 649 siamese residual rcnn. Bioinformatics 35, i305–i314 (2019).
650 [25] Lu, S., Hong, Q., Wang, B. & Wang, H. Efficient resnet model to predict protein651 protein interactions with gpu computing. IEEE Access 8, 127834–127844 (2020).
652 [26] Davies, D. R. & Cohen, G. H. Interactions of protein antigens with antibodies. 653 Proceedings of the National Academy of Sciences 93, 7–12 (1996).
654 [27] Padlan, E. A., Abergel, C. & Tipper, J. P. Identification of specificity-determining 655 residues in antibodies. The FASEB journal 9, 133–139 (1995).
656 [28] Shirai, H., Kidera, A. & Nakamura, H. Structural classification of cdr-h3 in 657 antibodies. FEBS letters 399, 1–8 (1996).
658 [29] Miller, N. L., Clark, T., Raman, R. & Sasisekharan, R. Learned features of 659 antibody-antigen binding affinity. Frontiers in Molecular Biosciences 10, 1112738 660 (2023).
661 [30] Osajima, T. & Hoshino, T. Roles of the respective loops at complementarity 662 determining region on the antigen-antibody recognition. Computational Biology 663 and Chemistry 64, 368–383 (2016).
664 [31] Tsuchiya, Y. & Mizuguchi, K. The diversity of h 3 loops determines the antigen665 binding tendencies of antibody cdr loops. Protein Science 25, 815–825 (2016).
666 [32] Aburatani, T., Ueda, H. & Nagamune, T. Importance of a cdr h3 basal residue in 667 vh/vl interaction of human antibodies. The journal of biochemistry 132, 775–782 668 (2002).
669 [33] Flyak, A. I. et al. An ultralong cdrh2 in hcv neutralizing antibody demonstrates 670 structural plasticity of antibodies against e2 glycoprotein. Elife 9, e53169 (2020).
671 [34] Dunbar, J. et al. Sabdab: the structural antibody database. Nucleic acids research 672 42, D1140–D1146 (2014).
673 [35] Ruffolo, J. A., Chu, L.-S., Mahajan, S. P. & Gray, J. J. Fast, accurate antibody 674 structure prediction from deep learning on massive set of natural antibodies. 675 Nature communications 14, 2389 (2023).
24
made available under aCC-BY-NC-ND 4.0 International license.
(which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is
bioRxiv preprint doi: https://doi.org/10.1101/2024.03.09.584264; this version posted March 13, 2024. The copyright holder for this preprint

676 [36] Cao, Y. et al. Imprinted sars-cov-2 humoral immunity induces convergent omicron 677 rbd evolution. Nature 614, 521–529 (2023).
678 [37] Cao, Y. et al. Omicron escapes the majority of existing sars-cov-2 neutralizing 679 antibodies. Nature 602, 657–663 (2022).
680 [38] Cho, A. et al. Anti-sars-cov-2 receptor-binding domain antibody evolution after 681 mrna vaccination. Nature 600, 517–522 (2021).
682 [39] Wang, Z. et al. mrna vaccine-elicited antibodies to sars-cov-2 and circulating 683 variants. Nature 592, 616–622 (2021).
684 [40] Gangavarapu, K. et al. Outbreak. info genomic reports: scalable and dynamic 685 surveillance of sars-cov-2 variants and mutations. Nature Methods 20, 512–522 686 (2023).
687 [41] Tsueng, G. et al. Outbreak. info research library: A standardized, searchable 688 platform to discover and explore covid-19 resources. Nature Methods 20, 536–540 689 (2023).
690 [42] Khare, S. et al. Gisaid’s role in pandemic response. China CDC weekly 3, 1049 691 (2021).
692 [43] Yoon, H. et al. Catnap: a tool to compile, analyze and tally neutralizing antibody 693 panels. Nucleic acids research 43, W213–W219 (2015).
694 [44] Zhang, L., Chen, Z. & Qian, Y. Knowledge distillation from multi-modality to 695 single-modality for person verification. Proc. Interspeech 2021 1897–1901 (2021).
696 [45] Afouras, T., Chung, J. S. & Zisserman, A. Asr is all you need: Cross-modal 697 distillation for lip reading, 2143–2147 (IEEE, 2020).
698 [46] Jin, Y. et al. Cross-modal distillation for speaker recognition, Vol. 37, 12977–12985 699 (2023).
700 [47] St ̈ark, H. et al. 3d infomax improves gnns for molecular property prediction, Vol. 701 162 of Proceedings of Machine Learning Research, 20479–20502 (PMLR, 2022).
702 [48] Chen, T., Kornblith, S., Norouzi, M. & Hinton, G. E. A simple framework for 703 contrastive learning of visual representations, Vol. 119 of Proceedings of Machine 704 Learning Research, 1597–1607 (PMLR, 2020).
705 [49] Guo, Y., Wu, J., Ma, H. & Huang, J. Self-supervised pre-training for protein 706 embeddings using tertiary structures, 6801–6809 (AAAI Press, 2022).
707 [50] Hosseini, S. & Ilie, L. Pithia: Protein interaction site prediction using multiple 708 sequence alignments and attention. International Journal of Molecular Sciences 709 23, 12814 (2022).
25
made available under aCC-BY-NC-ND 4.0 International license.
(which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is
bioRxiv preprint doi: https://doi.org/10.1101/2024.03.09.584264; this version posted March 13, 2024. The copyright holder for this preprint

710 [51] Chen, L. et al. Transformercpi: improving compound–protein interaction pre711 diction by sequence-based deep learning with self-attention mechanism and label 712 reversal experiments. Bioinformatics 36, 4406–4414 (2020).
713 [52] Li, M., Lu, Z., Wu, Y. & Li, Y. Bacpi: a bi-directional attention neural network 714 for compound–protein interaction and binding affinity prediction. Bioinformatics 715 38, 1995–2002 (2022).
716 [53] Chen, C., Wu, T., Guo, Z. & Cheng, J. Combination of deep neural network with 717 attention mechanism enhances the explainability of protein contact prediction. 718 Proteins: Structure, Function, and Bioinformatics 89, 697–707 (2021).
719 [54] Chari, R., Jerath, K., Badkar, A. V. & Kalonia, D. S. Long-and short-range 720 electrostatic interactions affect the rheology of highly concentrated antibody 721 solutions. Pharmaceutical research 26, 2607–2618 (2009).
722 [55] Zamyatnin, A. Protein volume in solution. Progress in biophysics and molecular 723 biology 24, 107–123 (1972).
724 [56] Eisenberg, D. Three-dimensional structure of membrane and surface proteins. 725 Annual review of biochemistry 53, 595–623 (1984).
726 [57] Lin, T.-Y., Goyal, P., Girshick, R., He, K. & Doll ́ar, P. Focal loss for dense object 727 detection, 2980–2988 (2017).
728 [58] Nie, Z. et al. Evolution-guided large language model is a predictor of virus 729 mutation trends. bioRxiv 2023–11 (2023).
730 [59] Lundberg, S. M. & Lee, S. Guyon, I. et al. (eds) A unified approach to interpreting 731 model predictions. (eds Guyon, I. et al.) Advances in Neural Information Process732 ing Systems 30: Annual Conference on Neural Information Processing Systems 733 2017, December 4-9, 2017, Long Beach, CA, USA, 4765–4774 (2017).
734 [60] Shapley, L. S. et al. A value for n-person games (1953).
735 Acknowledgements
736 This work is financially supported by the National Key R&D Program of China 737 (No. 2022ZD0118201, 2020YFA0908100, 2023YFF1204401), Natural Science Founda738 tion of China (No. 61972217, 32071459, 62176249, 62006133, 62271465, 61825101, 739 62088102, 21991132, 21925102, 92056118, 22331003, 22301010), Shenzhen Medical 740 Research Fund (No. B2302037), and Beijing National Laboratory for Molecular Sci741 ences (BNLMS-CXXM-202006). The work is also supported by the National Center 742 for Protei-
n Sciences at Peking University. W.-B.Z. acknowledges Bayer Pharma 743 for the Bayer Investigator Award. We appreciate the support of AI for Science 744 (AI4S)-Preferred Program, Peking University Shenzhen Graduate School, China.
26
made available under aCC-BY-NC-ND 4.0 International license.
(which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is
bioRxiv preprint doi: https://doi.org/10.1101/2024.03.09.584264; this version posted March 13, 2024. The copyright holder for this preprint

745 Competing interests
746 The authors declare no competing interests.
27
made available under aCC-BY-NC-ND 4.0 International license.
(which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is
bioRxiv preprint doi: https://doi.org/10.1101/2024.03.09.584264; this version posted March 13, 2024. The copyright holder for this preprint

747 Supplementary information
748 S1 Baseline methods
749 In conducting the comparative experiments, as the models utilized for comparison are 750 not all originally designed for IC50 regression or classification tasks, we implement sev751 eral essential adjustments. For the Parapred-series models (Parapred, Fast-Parapred, 752 and AG-Fast-Parapred), originally intended for predicting binding sites, as well as the 753 PPI prediction models PIPR and ResPPI, we modify their output head to replicate 754 the structure of S3AI, thereby enabling the predict-
ion of IC50 values and binary clas755 sification outputs. For MCNN, in addition to the modifications mentioned above, we 756 incorporate a module with the same architecture as the one originally designed for 757 processing antibody inputs. This new module is designed for handling antigen inputs, 758 allowing MCNN to accommodate the diverse antigen inputs in the dataset. All models 759 are trained using the same multitask focal loss as employed by S3AI.
760 S2 Overview of SARS-CoV-2 data
Fig. S1 The distribution of IC50 values across different SARS-CoV-2 lineages
28
made available under aCC-BY-NC-ND 4.0 International license.
(which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is
bioRxiv preprint doi: https://doi.org/10.1101/2024.03.09.584264; this version posted March 13, 2024. The copyright holder for this preprint

761 S3 Results for SARS-CoV-2 test set
Metric MCNN ResPPI parapred fastparapred agparapred PIPR S3AI
MAE ↓ 0.911 0.818 0.967 0.981 1.171 1.045 0.605 RMSE ↓ 1.605 1.475 1.524 1.467 1.697 1.673 1.243 Spearmanr ↑ 0.525 0.579 0.566 0.575 0.528 0.511 0.655 Pearsonr ↑ 0.756 0.803 0.780 0.802 0.743 0.731 0.860 Accuracy ↑ 0.780 0.821 0.801 0.815 0.767 0.768 0.845 F1 score↑ 0.844 0.863 0.851 0.859 0.837 0.836 0.870 PR-AUC ↑ 0.852 0.898 0.888 0.917 0.881 0.843 0.945 ROC-AUC ↑ 0.811 0.874 0.857 0.884 0.846 0.805 0.921 MCC ↑ 0.523 0.612 0.564 0.597 0.499 0.492 0.685
Table S1 Performance of models on SARS-CoV-2 test set.
762 S4 Results for HIV test set
Model Accuracy ↑ F1 score ↑ PR-AUC ↑ ROC-AUC ↑ MCC ↑
DeepAAI (sequence) 0.768 0.744 0.830 0.851 0.533 DeepAAI (k-mer+PSSM) 0.768 0.740 0.828 0.845 0.533 DeepAAI (PSSM+sequence) 0.777 0.757 0.842 0.858 0.552 DeepAAI (k-mer+sequence) 0.777 0.752 0.844 0.862 0.552 DeepAAI (k-mer+PSSM+sequence) 0.776 0.749 0.841 0.859 0.549 S3AI 0.807 0.774 0.861 0.880 0.606
Table S2 Classification Performance of models on OOD test (HIV unseen test set for classification).
Model MSE ↓ MAE ↓
DeepAAI (sequence) 5.15 1.68 DeepAAI (k-mer+PSSM) 3.28 1.36 DeepAAI (PSSM + sequence) 3.63 1.37 DeepAAI (k-mer+sequence) 4.99 1.66 DeepAAI (k-mer+PSSM+sequence) 4.98 1.66 S3AI 4.39 1.59
Table S3 Regression Performance of models on OOD test (HIV unseen test set for regression).
29
made available under aCC-BY-NC-ND 4.0 International license.
(which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is
bioRxiv preprint doi: https://doi.org/10.1101/2024.03.09.584264; this version posted March 13, 2024. The copyright holder for this preprint

763 S5 Results for module ablation study
Model Baseline Structural Information Distillation Interaction Matrix S3AI
MAE ↓ 0.955 0.899 0.645 0.605 RMSE ↓ 1.634 1.578 1.262 1.243 Spearmanr ↑ 0.544 0.552 0.626 0.655 Pearsonr ↑ 0.752 0.761 0.854 0.860 Accuracy ↑ 0.791 0.799 0.837 0.845 F1 score ↑ 0.838 0.847 0.866 0.870 PR-AUC ↑ 0.876 0.881 0.936 0.945 ROC-AUC ↑ 0.836 0.842 0.909 0.921 MCC ↑ 0.545 0.559 0.660 0.685
Table S4 Results for module ablation study, including four configurations of the model: the original S3AI, one without structural information distillation (Interaction Matrix), one without interaction matrix (Structural Information Distillation), and one without both components (Baseline).
764 S6 Region effective attribution
FR1 FR2 FR3 FR4 FR5 FR6 CDRs
1.601e-02 5.857e-02 9.106e-03 9.721e-02 2.373e-02 4.919e-02 1.526e-01
Table S5 Average region effective attribution of FRs and entire CDRs in Fig.5a
Sample FR1 FR2 FR3 FR4 FR5 FR6 CDRs
1519 3.180e-02 9.545e-02 5.059e-02 9.721e-02 3.774e-02 9.212e-02 1.978e-01 5401 -7.455e-04 -1.046e-03 -4.464e-04 -4.709e-04 -1.063e-03 -1.361e-03 4.985e-03 8488 4.115e-02 -8.567e-02 -8.890e-02 5.021e-02 -9.608e-02 -1.039e-01 2.902e-01 27248 -9.986e-03 5.151e-02 1.751e-02 -1.747e-02 4.270e-02 1.611e-02 6.545e-02
Table S6 Region effective attribution of FRs and entire CDRs in Fig.5b
Sample CDR-L1 CDR-L2 CDR-L3 CDR-H1 CDR-H2 CDR-H3
44 -9.326e-03 -1.902e-02 -3.844e-02 -1.459e-02 3.083e-02 1.128e-01 60 2.932e-02 -3.881e-03 2.634e-02 -3.949e-02 2.932e-02 6.291e-02 68 -5.323e-02 1.369e-01 -2.485e-01 1.823e-01 3.043e-01 2.035e-01 93 3.145e-02 3.879e-02 5.390e-02 -5.350e-02 -7.830e-02 1.449e-01
Table S7 Region effective attribution of CDRs in Fig.5c
30
made available under aCC-BY-NC-ND 4.0 International license.
(which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is
bioRxiv preprint doi: https://doi.org/10.1101/2024.03.09.584264; this version posted March 13, 2024. The copyright holder for this preprint

765 S7 Hyperparameters
Hyperparameter Value
Learning rate 0.0001 Number of epochs 200 γ1 β 0.8 ESM embedding dim 640 (150M) Dropout rate 0.6 Convolution layers 3 Kernel size 3
Table S8 Hyperparameters of the model
31
made available under aCC-BY-NC-ND 4.0 International license.
(which was not certified by peer review) is the author/funder, who has granted bioRxiv a license to display the preprint in perpetuity. It is
bioRxiv preprint doi: https://doi.org/10.1101/2024.03.09.584264; this version posted March 13, 2024. The copyright holder for this preprint

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:47.515Z
- **Text Length:** 85242 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 31 of 31
