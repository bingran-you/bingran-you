# PDF Document: Zhu et al. - 2025 - First Deep Learning Approach to Hammering Acoustics for Stem Stability Assessment in Total Hip Arthr.pdf

**File Path:** Zhu et al. - 2025 - First Deep Learning Approach to Hammering Acoustics for Stem Stability Assessment in Total Hip Arthr.pdf

**Processed Date:** 2026-02-10T18:13:31.012Z

**File Size:** 3679.83 KB

**Total Pages:** 5

**Extracted Pages:** 5

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3338

**Title:** First Deep Learning Approach to Hammering Acoustics for Stem Stability Assessment in Total Hip Arthroplasty

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

FIRST DEEP LEARNING APPROACH TO HAMMERING ACOUSTICS FOR STEM STABILITY ASSESSMENT IN TOTAL HIP ARTHROPLASTY
Dongqi Zhu1,3, Zhuwen Xu2, Youyuan Chen1, Minghao Jin2, Wan Zheng1, Yi Zhou1,3, Huiwu Li2, Yongyun Chang2, Feng Hong1∗, Zanjing Zhai2∗
1Shanghai Acoustics Laboratory, Chinese Academy of Sciences 2Shanghai Key Laboratory of Orthopaedic Implants, Department of Orthopaedic Surgery, Shanghai 9th People’s Hospital, Shanghai Jiao Tong University School of Medicine 3University of Chinese Academy of Sciences
ABSTRACT
Audio event classification has recently emerged as a promising approach in medical applications. In total hip arthroplasty (THA), intra-operative hammering acoustics provide critical cues for assessing the initial stability of the femoral stem, yet variability due to femoral morphology, implant size, and surgical technique constrains conventional assessment methods. We propose the first deep learning framework for this task, employing a TimeMIL model trained on Log-Mel Spectrogram features and enh-
anced with pseudo-labeling. On intraoperative recordings, the method achieved 91.17% ± 2.79% accuracy, demonstrating reliable estimation of stem stability. Comparative experiments further show that reducing the diversity of femoral stem brands improves model performance, although limited dataset size remains a bottleneck. These results establish deep learning–based audio event classification as a feasible approach for intra-operative stability assessment in THA.
Index Terms— Audio event classification, total hip arthroplasty, stem stability, hammering acoustics, deep learning
1. INTRODUCTION
Acoustic analysis combined with deep learning has shown immense potential in the medical field in recent years[1, 2]. This technology transforms traditional subjective, experiencedependent diagnostic processes into objective and efficient ones. Its applications are wide-ranging, from accurately diagnosing cardiovascular diseases by analyzing heart sounds and electrocardiogram (ECG) signals, to assisting in the diagnosis of respiratory diseases like asthma and Chronic Obstructive Pulmonary Disease -
(COPD) by identifying unique patterns in cough and breath sounds[3, 4, 5, 6]. The technology can also be used to assess the risk of sleep apnea by evaluating
Dongqi Zhu and Zhuwen Xu are co-first authors Feng Hong and Zanjing Zhai are co-corresponding authors
snoring sounds[7]. Furthermore, acoustic signal processing has significant value in orthopedic surgery. For example, in THA, a damaged joint is removed and replaced with artificial acetabular and femoral stem implants[8]. The initial stability of these implants is critical for a successful surgical outcome. Conventionally, surgeons rely on subjective auditory and tactile feedback from hammering during the procedure to make assessments. This experience-based method carries inherent risks, as it may-
 lead to under-fixation and subsequent early loosening, or to over-impaction that could result in an intraoperative fracture[9]. The reported incidence of intraoperative fracture alone ranges from 0.4% to 4.9%[10].
Acoustic perception technologies offer a new appreach for the objective avaluation of initial femoral stem stability during THA. In 2011, Sakai et al. found that a decrease in hammering sound frequency correlated with an increase in interanl bone stress, proposing that this prequency change could serve as an objective indicator for predicting intraoperative fractures[11]. Subsequently, in 2017, Morohashi et al. further correlated hammering sound patterns with complication-free results, whereas a f-
requency near 1kHz was indicative of potential complications[12]. Goossen et al. introduced quantitative metrics the Band Power Feature (BPF) and Pearson Correlation Coefficient (PCC) and confirmed in a clinical study that the convergence of these metrics aligned with the implant’s optimal initial stability. They also demonstrated that an abrupt drop in BPF and PCC could serve as an early warning for intraoperative fractures[13]. More recently, in 2023, Homma et al. coumbined sound analysis with m-
achine learning to predict the risk of postoperative femoral stem subsidence. By analyzing the normalized sound pressure (nSP) of hammering alongside patient-specific pre-operative freatures, they significantly enhanced the accuracy and practical utlity of intraoperative monitoring[14].
While some preliminary work has explored machine learning, most existing studies have relied on traditional statistical methods to analyze the acoustic signals from femoral stem implantation[15]. These signals are, however, inher
arXiv:2511.18725v1 [eess.AS] 24 Nov 2025

ently complex and variable due to multiple factors, including femoral morphology, implant design, and a surgeon’s specific technique[16]. The rapid growth of deep learning offers a promising solution. With their powerful ability to learn non-linear features, deep learning models can automatically extract key characteristics from raw acoustic data that directly relate to implant stability, potentially overcoming these limitations[17, 18]. The main contributions of this paper are as follows: (1) We-
 demonstrate the feasibility of assessing THA stem initial stability using a deep learning model trained on preprocessed audio features. This model, which was enhanced by incorporating a pseudo-labeling approach, achieved an audio classification accuracy of 91.17% ± 2.79%. (2) Our comparative experiments proved that reducing the diversity of femoral stem brands helps improve model performance, but insufficient data size may remain a performance bottleneck.
2. METHODS
The overall workflow is shown in Fig. 1. Intra-operative hammering sounds from THA procedures were collected and preprocessed. Log-Mel spectrograms and related audio features were extracted to represent the signals. A TimeMIL-based deep learning model was then trained on these features, and its performance was improved with a pseudo-labeling strategy. For inference, the trained model was deployed to predict stem stability from unseen recordings.
Fig. 1. Workflow of the proposed deep learning framework for intra-operative stem stability assessment.
2.1. Audio Recording and Pre-processing
Hammering sounds were recorded during stem implantation in 118 THA procedures conducted from February 2024 to August 2025, as no public dataset is currently available. The data is summarized in Table 1. All hammering sounds were recorded using a Focusrite Scarlet CM25 MKIII condenser microphone and a Focusrite Scarlet 2i2 Studio audio interface. As shown in Fig. 2, the microphone was mounted on a stand at a height of 1m and positioned 1.5 meters from the operating table. The audio was saved in WAV-
 format at 48 kHz sampling rate and 16-bit resolution. The raw audios were preprocessed and segmented to create our experimental dataset. As illustrated in Fig. 3, ShortTime Energy (STE) was applied to identify the onset of each
Fig. 2. Intraoperative Audio Recording Setup.
Table 1. Summary of the THA Intraoperative Audio.
Category Value
Total Cases 118 Total Duration 2743s Surgeons 5 Patient Age (years) 65.3 (range: 23–94) Male/Female 45/73 Left/Right Hip Surgery 56/62 Femoral Stem Brands Summit (51), Corail (36), Montaine (9), Others (22)
hammering. Fixed-length 1-second segments were then extracted, starting 0.05 seconds before each onset, ensuring a complete hammering event per segment. The clips were classified into two categories based on the implantation stage: positive for the final implantation stage and negative for the initial stage. To prevent patient overlap, the dataset was split at the patient level into 75% training, 15% validation, and 15% test sets.
Fig. 3. Workflow for Audio Segmentation and Classification.
To exploit unlabeled data, a two-stage semi-supervised pseudo-labeling framework was adopted (Fig. 4). In Stage 1, a base model was trained on surgeon-labeled data, which provided highly reliable ground-truth. Since surgeons are generally conservative in labeling, the base model was then used to generate pseudo-labels for unlabeled segments in Stage 2. To ensure confidence, negative pseudo-labels preceding the first

positive prediction were retained, whereas positive ones were accepted only after ten consecutive predictions. The pseudolabeled data were balanced across classes, resulting in an expanded dataset of 2,711 segments from the original 1,467.
Fig. 4. Workflow of the Pseudo-labeling Method.
2.2. Feature Extraction
We extracted several acoustic features to capture the distinct characteristics of hammering sounds during femoral stem implantation. First, we extracted Log-Mel features to simulate non-linear human auditory perception. Building on this, we computed Mel-frequency cepstral coefficients (MFCCs). We also extracted Gammatone frequency cepstral coefficients (GFCCs), which use a Gammatone filterbank, as well as power-normalized cepstral coefficients (PNCCs). For consistent feature extraction, we used a -
2048-sample Fast Fourier Transform (FFT) window with a 512-sample hop size. The number of filterbands was set to 128, and we extracted 40 cepstral coefficients for MFCCs, GFCCs, and PNCCs.
2.3. Models
To identify an effective model for prosthetic stability audio classification, six deep learning networks were compared: CNNs, LSTMs, CRNNs, Transformer-based models, TapNet[19], and TimeMIL[20], with details summarized in Table 2. Specifically, TapNet and TimeMIL have shown strong performance in audio classification tasks, which motivated their inclusion in our comparison. TapNet addresses limited training data through an attentional prototype network with random dimension permutation (RDP), while-
 TimeMIL introduces a time-aware Multiple Instance Learning (MIL) pooling with Transformer self-attention and wavelet positional encoding (WPE) to capture temporal dependencies[19][20]. The architecture of the TimeMIL model is illustrated in Fig. 5.
3. EXPERIMENTS AND RESULTS
3.1. Experimental Settings
All models were trained on a server with the NVIDIA GeForce RTX 3090Ti GPUs using the PyTorch framework.
Table 2. Simplified Model Architectures and Parameters.
Network Arch. #Param(M)
CNN Conv×4 + AdaptiveAvgPool2d + Dropout + Linear
0.02
CRNN Conv×3 + LSTM + Dropout + Linear
1.3
Transformer Encoder×2 + Dropout + Linear
0.5
LSTM LSTM + Linear 0.5 TapNet TapNet[19] 6.8 TimesMIL TimesMIL[20] 0.4
Fig. 5. TimeMIL Model Architecture.
The AdamW optimizer was used with an initial learning rate of 1 × 10−5 and a weight decay of 1 × 10−4. We trained for 200 epochs with a batch size of 64, employing a linear learning rate warm-up over the first 10 epochs to stabilize convergence. Binary cross-entropy (BCE) loss was employed as the objective:
L=−1
N
N
X
i=1
[yi log pi + (1 − yi) log(1 − pi)], (1)
where N is the number of samples, yi (0 or 1) the groundtruth label, and pi the predicted probability for the i-th sample. Model performance was evaluated using accuracy, reported as the mean ± standard deviation over 10 independent runs.
3.2. Results
3.2.1. Feasibility Experiments
We first evaluated the feasibility of using deep learning to assess implant initial stability, selecting the most suitable model–feature combination. As shown in Figure 6, Log-Mel spectrogram features with the TimeMIL model achieved the highest accuracy of 90.72% ± 1.16%. MFCC and GFCC features also yielded competitive results, whereas PNCC features likely suppressed stability-related information and led to

inferior performance. The attention mechanism in TimeMIL further contributed by focusing on acoustic cues indicative of stem stability.
TimeMIL CNN LSTM CRNN
Transformer
TapsNet
0.6
0.7
0.8
0.9
1
Accuracy
Log-Mel MFCCs GFCCs PNCCs
Fig. 6. Accuracy of different model–feature combinations, showing that TimeMIL with Log-Mel achieves the best performance.
To enhance classification performance using unlabeled audio, we conducted comparative experiments with pseudolabeling. The results in Fig. 7 indicate that pseudo-labeling improved most models, with the best result reaching 91.17% ± 2.79%. This gain is attributed to the transitional audio segments, which expanded the training set and enabled clearer class boundary learning, although inconsistencies in the quality of the pseudo-labels led to a higher standard deviation in some models.
TimeMIL CNN LSTM CRNN
Transformer
TapNet
0.7
0.8
0.9
1
Accuracy
baseline pseudo-label
Fig. 7. Effect of pseudo-labeling, where most models benefit, with TimeMIL reaching 91.17% ± 2.79%.
3.2.2. Comparative Experiment
To investigate the influence of implant brand diversity, we created dataset subsets with details given in Table 3. As shown
in Fig. 8, model accuracy generally increased as the number of brands decreased. For TimeMIL, accuracy improved from the baseline to 90.84% ± 2.03% on a three-brand dataset and peaked at 91.24% ± 2.62% on a two-brand dataset. This trend indicates that different brands exhibit distinct acoustic patterns, and reducing brand diversity yields a more uniform feature distribution that simplifies learning. While performance on single-brand datasets remained above baseline, it did not exceed the two-brand-
 case, likely due to insufficient data limiting generalization.
Table 3. Dataset Details for Brand Diversity.
Dataset Brands Surgeons Patients Audio
baseline S+C+M+O 5 118 1467 3 brands S+C+M 5 96 1184 2 brands S+C 5 87 1073 1 brands S 5 51 615
Note: S stands for Summit, C for Corail, M for Montaine, and O for Others.
TimeMIL CNN LSTM CRNN
Transformer
TapsNet
0.7
0.8
0.9
1
Accuracy
baseline 3 brands 2 brands 1 brand
Fig. 8. The Influence of Brand Diversity on Model Performance.
4. CONCLUSION
We introduced the first deep learning framework for assessing stem stability in THA from intra-operative hammering acoustics. Using a real surgical dataset, we benchmarked six models and found TimeMIL with Log-Mel features performed best. Pseudo-labeling further improved accuracy, while experiments showed brand diversity significantly affects generalization. Future work will expand the dataset and develop a real-time edge-deployable system for intra-operative decision support.

5. REFERENCES
[1] Xi Xu, Jianqiang Li, Zhichao Zhu, Linna Zhao, et al., “A comprehensive review on synergy of multi-modal data and ai technologies in medical diagnosis,” Bioengineering, vol. 11, no. 3, pp. 219, 2024.
[2] Norah Saleh Alghamdi, Mohammed Zakariah, and Hanen Karamti, “A deep cnn-based acoustic model for the identification of lung diseases utilizing extracted mfcc features from respiratory sounds,” Multimedia Tools and Applications, vol. 83, no. 35, pp. 82871–82903, 2024.
[3] Motaz Faroq A Ben Hamza and Nilam Nur Amir Sjarif, “A comprehensive overview of heart sound analysis using machine learning methods,” IEEE Access, 2024.
[4] Aikeliyaer Ainiwaer, Wen Qing Hou, Quan Qi, Kaisaierjiang Kadier, et al., “Deep learning of heart-sound signals for efficient prediction of obstructive coronary artery disease,” Heliyon, vol. 10, no. 1, 2024.
[5] Prakash Sahu, Santosh Kumar, and Ajoy Kumar Behera, “Soundnet: Leveraging deep learning for the severity classification of chronic obstructive pulmonary disease based on lung sound analysis,” in 2024 IEEE International Conference on Electronics, Computing and Communication Technologies (CONECCT). IEEE, 2024, pp. 1–6.
[6] Gowri Sankar Marepalli, Praveen Kumar Kollu, and Mohan Datta Inavolu, “Early detection of chronic obstructive pulmonary disease in respiratory audio signals using cnn and lstm models,” in 2024 IEEE International Conference on Contemporary Computing and Communications (InC4). IEEE, 2024, vol. 1, pp. 1–6.
[7] Bo Dang, Danqing Ma, Shaojie Li, et al., “Deep learning-based snore sound analysis for the detection of night-time breathing disorders,” Applied and Computational Engineering, vol. 76, no. 1, pp. 109–114, 2024.
[8] Matthew P Kelly, Priscilla H Chan, Heather A Prentice, et al., “Cause-specific stem revision risk in primary total hip arthroplasty using cemented vs cementless femoral stem fixation in a us cohort,” The Journal of Arthroplasty, vol. 37, no. 1, pp. 89–96, 2022.
[9] Nico Schumacher, Franziska Geiger, Sascha Spors, et al., “Detection of total hip replacement loosening based on structure-borne sound: Influence of the position of the sensor on the hip stem,” Sensors, vol. 24, no. 14, pp. 4594, 2024.
[10] Rina Sakai, Kazuhiro Yoshida, Masanobu Ujihira, et al., “Development of total hip arthroplasty support system for predicting intraoperative fractures by the frequency
of hammering sound,” Biomedical Journal of Scientific & Technical Research, vol. 44, no. 4, pp. 35685–35690, 2022.
[11] Rina Sakai, Aki Kikuchi, Towa Morita, et al., “Hammering sound frequency analysis and prevention of intraoperative periprosthetic fractures during total hip arthroplasty,” Hip International, vol. 21, no. 6, pp. 718–723, 2011.
[12] Itaru Morohashi, Hideaki Iwase, Akio Kanda, et al., “Acoustic pattern evaluation during cementless hip arthroplasty surgery may be a new method for predicting complications,” SICOT-J, vol. 3, pp. 13, 2017.
[13] Quentin Goossens, Leonard Pastrav, Jorg Roosen, et al., “Acoustic analysis to monitor implant seating and early detect fractures in cementless tha: An in vivo study,” Journal of Orthopaedic Research, vol. 39, no. 6, pp. 1164–1173, 2021.
[14] Yasuhiro Homma, Xu Zhuang, Hiroshi Ohtsu, et al., “Highly accurate acoustical prediction using support vector machine algorithm for post-operative subsidence after cementless total hip arthroplasty,” International Orthopaedics, vol. 47, no. 1, pp. 187–192, 2023.
[15] Yasuhiro Homma, Xu Zhuang, Naotake Yanagisawa, et al., “Patients with shorter stature exhibit minimal hammering sound changes during cementless stem insertion in total hip arthroplasty,” Arthroplasty Today, vol. 21, pp. 101136, 2023.
[16] Xu Zhuang, Yasuhiro Homma, Taichi Sato, et al., “Factors influence on the broaching hammering sound during cementless total hip arthroplasty,” Journal of Biomedical Science and Engineering, vol. 15, no. 9, pp. 229240, 2022.
[17] Jiayuan Zhu, Hui Liu, Xiaowei Liu, et al., “Cardiovascular disease detection based on deep learning and multi-modal data fusion,” Biomedical Signal Processing and Control, vol. 99, pp. 106882, 2025.
[18] Peng Liu, Wei Qian, Hua Zhang, et al., “Automatic sleep stage classification using deep learning: signals, data representation, and neural networks,” Artificial Intelligence Review, vol. 57, no. 11, pp. 301, 2024.
[19] Xuchao Zhang, Yifeng Gao, Jessica Lin, et al., “Tapnet: Multivariate time series classification with attentional prototypical network,” in Proceedings of the AAAI conference on artificial intelligence, 2020, vol. 34, pp. 6845–6852.
[20] Xiwen Chen, Peijie Qiu, Wenhui Zhu, et al., “Timemil: Advancing multivariate time series classification via a time-aware multiple instance learning,” arXiv preprint arXiv:2405.03140, 2024.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:13:31.012Z
- **Text Length:** 18954 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 5 of 5
