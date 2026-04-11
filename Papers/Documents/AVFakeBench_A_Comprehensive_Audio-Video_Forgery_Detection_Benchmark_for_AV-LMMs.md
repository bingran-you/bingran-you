# PDF Document: Xia et al. - 2025 - AVFakeBench A Comprehensive Audio-Video Forgery Detection Benchmark for AV-LMMs.pdf

**File Path:** Xia et al. - 2025 - AVFakeBench A Comprehensive Audio-Video Forgery Detection Benchmark for AV-LMMs.pdf

**Processed Date:** 2026-02-10T18:18:50.294Z

**File Size:** 5914.42 KB

**Total Pages:** 23

**Extracted Pages:** 23

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3758

**Title:** AVFakeBench: A Comprehensive Audio-Video Forgery Detection Benchmark for AV-LMMs

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

AVFakeBench: A Comprehensive Audio-Video Forgery Detection Benchmark
for AV-LMMs
Shuhan Xia1 Peipei Li1 † Xuannan Liu1 Dongsen Zhang1 Xinyu Guo1 Zekun Li2 1 Beijing University of Posts and Telecommunications 2 University of California, Santa Barbara
Human Subject
Audio:Only Human Speech
Single Forgery Type Single-Level Annotation Binary Judgment
Is this audio-visual clip captured from the real physical world without any AI involvement?
Option A. Yes B. No
Traditional AV Deepfake Benchmarks
Social Activities
Rich Forgery Semantics
Human Subject
General Subject
11 Real-World Scenarios
Natural Landscapes
Animals Music Transportation
Life Sports Industry
Signal Science Human Speech
Multi-Level Annotations
L1: Binary Judgment
Is this audio-visual clip captured from the real physical world without any AI involvement?
L2: Forgery Types Classification
Which of the following categories this audio/video clip belongs to?
A. Yes B. No
Option
Option <A> <B> <C> <D> <E> <F> <G>
L3: Forgery Detail Selection
<Answer> ...
<B> ... <C> ... <D> ...
L4: Explanatory Reasoning
<A> ...
AVFakeBench
Social Activities
Video Modality
A. Real (R) B. Edit (E) C. Synthesis (S)
Audio Modality
A. Real (R) B. Edit (E) C. Synthesis (S)
Multi-modal Forgery Types
<A> RA & RV <B> RA & EV <C> RA & SV <D> EA & RV <E> EA & EV <F> SA & RV <G> SA & SV
Various Forgery Types
A. Real (R) B. Edit (E)/ Synthesis (S)
Figure 1. Comparison between traditional AV Deepfake benchmarks and the proposed AVFakeBench. Top: Prior datasets focus on human subjects, employ a single forgery type (editing or synthesis) and provide only binary judgment labels. Bottom: AVFakeBench extends along three axes - Rich Forgery Semantics, Various Forgery Types, and Multi-Level Annotations - covering human and general subjects, seven multi-modal forgery types, and four-level annotations.
Abstract
The threat of Audio-Video (AV) forgery is rapidly evolving beyond human-centric deepfakes to include more diverse manipulations across complex natural scenes. However, existing benchmarks are still confined to DeepFake
based forgeries and single-granularity annotations, thus failing to capture the diversity and complexity of realworld forgery scenarios. To address this, we introduce AVFakeBench, the first comprehensive audio-video forgery detection benchmark that spans rich forgery semantics across both human subject and general subject. AVFakeBench
arXiv:2511.21251v1 [cs.CV] 26 Nov 2025

comprises 12K carefully curated audio-video questions, covering seven forgery types and four levels of annotations. To ensure high-quality and diverse forgeries, we propose a multi-stage hybrid forgery framework that integrates proprietary models for task planning with expert generative models for precise manipulation. The benchmark establishes a multi-task evaluation framework covering binary judgment, forgery types classification, forgery detail selection, and explanatory reasoning. We evaluate-
 11 AudioVideo Large Language Models (AV-LMMs) and 2 prevalent detection methods on AVFakeBench, demonstrating the potential of AV-LMMs as emerging forgery detectors while revealing their notable weaknesses in fine-grained perception and reasoning.
1. Introduction
Recent generative models (e.g., Sora [44], KLING [27], and FoleyCrafter [62]) have shown significant progress in generating realistic videos and synchronized audio. However, this powerful capability also intensifies audio–video forgery risks [12, 24, 54]. Malicious actors can exploit advanced editing and synthesis techniques to produce forged audio–video content that mimics diverse real-world scenarios. As illustrated in Fig. 1(Bottom), a high-fidelity disaster-scene video paired with synchronized-
 background audio can easily mislead the public and trigger widespread panic. These threats pose unprecedented challenges to information security, public safety, and the broader digital ecosystem. Consequently, detecting forged audio–video content in real-world scenarios has become increasingly urgent. However, existing AV-forgery benchmarks provide an inadequate foundation for supporting progress toward realworld forgery detection. As shown in Fig. 1(Top), early datasets [23, 47, 56] focus almost-
 exclusively on human-face manipulations, restricting their applicability to broader scenes or subjects. Benchmarks such as DeepfakeTIMIT [26] and DFDC [14] treat forgery as a binary classification task and do not model hybrid manipulations that combine editing and synthesis. More recent audio–video datasets, including FakeAVCeleb [25] and LAVDF [4], extend to multi-modal forgery combination settings but remain restricted to single manipulation types and lack finegrained or explainable annotations-
. As a result, they cannot represent the diversity, granularity, and reasoning requirements of real-world forgeries. To address these challenges, we introduce AVFakeBench, a comprehensive audio–video forgery detection benchmark that fills gaps across three complementary dimensions (see Fig. 1): 1) Rich Forgery Semantics: AVFakeBench extends beyond human-centric Deepfake manipulations to cover both human and general subjects across
11 diverse real-world scenarios, containing 3,000 paired audio–video clips. 2) Various Forgery Types: AVFakeBench interleaves three data types (i.e., real, edited, and synthesized) across audio and video modalities to form seven distinct multimodal forgery combinations. This structured taxonomy captures the full spectrum of forgery types commonly observed in the real world. 3) Multi-Level Annotations: Beyond binary real/fake labels, AVFakeBench incorporates more complex forgery annotations, includ-
ing forgery types classification, forgery detail selection and explanatory reasoning, totaling 12K question-answer pairs. These multi-level annotations support comprehensive evaluation of not only detection accuracy but also perceptual granularity and reasoning capabilities.
To construct diverse and high-fidelity audio-video forgeries in AVFakeBench, we develop a multi-stage hybrid forgery framework. The framework separates forgery intent planning from modality-specific manipulation, enabling precise control over both editing and synthesis processes. Specifically, we employ proprietary models to generate detailed spatio-temporal manipulation plans, such as dynamic scene prompts for synthesis tasks or specific tampering content and timing for editing tasks. These plans-
 are subsequently executed by specialized generative or editing models that operate on audio and video streams. Human oversight is incorporated at critical stages to ensure the accuracy, realism, and diversity of all forged samples. This design allows AVFakeBench to capture broad real-world manipulation strategies while maintaining high data quality.
Based on AVFakeBench, we establish a multi-task evaluation framework that includes binary authenticity judgment, multiple-choice forgery classification, forgery detail selection and open-ended forgery explanation. Leveraging this framework, we evaluate 5 open-source AV-LMMs, 6 advanced proprietary AV-LMMs, and several expert detection models. Our key findings are summarized as follows: 1) AV-LMMs already exhibit strong potential as unified audio-video forgery detectors. They surpass expert detecti-
on models on binary authenticity judgment and maintain relatively balanced performance across both human subject and general subject. 2) AV-LMMs exhibit an approximately 70% performance drop on more complex forgery scenarios, such as multiple-choice forgery classification and the detection of subtle editing operations. This indicates insufficient fine-grained perception capability and limited sensitivity to localized or complex manipulations. 3) AV-LMMs exhibit poor explanatory reasoning capabilit-
ies, achieving very low scores on both forgery detail selection and openended forgery explanation tasks.
In summary, our main contributions are threefold:
• We introduce AVFakeBench, the first comprehensive audio-video forgery detection benchmark, which includes human and general subjects, 11 real-world scenarios, 7

multi-modal forgery types, and multi-level annotations, totaling 3K audio-video clips and 12K question-answer pairs. • We propose a multi-stage hybrid forgery framework that integrates proprietary models for forgery task planning and expert generative models for precise manipulation, with human supervision to ensure data fidelity, diversity, and scalability. • We conducted a comprehensive evaluation of 11 AVLMMs and 2 expert detection models on AVFakeBench. Our analysis highlights the potential o-
f AV-LMMs as unified forgery detectors, while also revealing their limitations in fine-grained forgery perception and explanatory reasoning.
2. Related work
2.1. Audio-Visual Forgery Detection Benchmark
The rapid development of generative models [2, 19, 29, 33, 52] has made audio-video forgery a critical challenge [18, 60]. Early benchmarks, such as FF++ [47] and CelebDF [31], are largely confined to visual cues. To address complex cross-modal forgery, researchers construct a series of multi-modal benchmarks [4, 5, 21, 25, 42]. Among these, FakeAVCeleb [25] used full-pipeline synthesis to build a multimodal Deepfake dataset covering both audio and video forgery. LAV-DF [4] and AVDeepFake1M [5] in-
troduced partial editing forgery, implementing temporal edits by adding, deleting, or replacing words in the audio transcript. However, these benchmarks all remain primarily focused on human-centric deepfakes, failing to cover the broader natural scenarios of the real world. Concurrently, these datasets often include only one manipulation type (either editing or synthesis), overlooking the real-world co-existence of multiple forgery methods and more complex cross-modal combinations. Recent studies-
 [9, 10, 43, 53, 57] have attempted to expand the forgery subject scope. GenVidBench [43] and DeMamba [9] built multi-scene video generation datasets by introducing diverse I2V models. FakeParts [3] focused on video editing, leveraging tools like ProPainter [64] to achieve local, fine-grained manipulation of video content or timing. Nevertheless, significant gaps persist. These newer datasets remain limited to the video modality, failing to explore multi-scene audio forgeries or cross-modal forger-
y combinations. Furthermore, existing AV forgery benchmarks universally contain only binary authenticity labels, lacking the explainable content for forgery details, which leaves a significant gap with human perception. In contrast to all prior work, we propose the first AV forgery detection dataset that simultaneously includes multi-subject scenarios, multiple forgery types, and multi-level annotations.
2.2. Audio-Visual Large Multimodal Models
The development of Audio-Visual Large Multimodal Models (AV-LMMs) is inspired by the success of Video-LLMs, such as VideoChat [28] and Video-LLaVA [32], which demonstrated remarkable capabilities in video-grounded dialogue and question answering. Research attention subsequently expanded toward audio-visual understanding, where models are capable of jointly processing visual and auditory signals. Representative works, including PandaGPT [49] and ImageBind-LLM [16], leverage a unified embedding spac-
e to enable joint reasoning over images, videos, and audio. Subsequent studies, such as VideoLLaMA2 [11] and video-SALMONN [50], have further emphasized fine-grained modality alignment and semantic consistency. For instance, VideoLLaMA2 [11] enhances long-range temporal modeling, while videoSALMONN [50] adopts a multi-stage alignment strategy to improve cross-modal semantic coherence. The inherent natural language generation capabilities of these AV-LMMs make explainable evaluation of forgery dete-
ction possible, surpassing the limitations of traditional detectors that only output a binary label. Therefore, this paper investigates the forgery detection, detail perception, and reasoning capabilities of AV-LMMs, aiming to evaluate their potential as unified forgery detectors.
3. AVFakeBench
3.1. Overview of AVFakeBench
We introduce AVFakeBench, a comprehensive audio-video forgery detection benchmark for AV-LMMs. AVFakeBench contains human and general subjects, covering 11 realworld scenarios. The human subject focuses on the scenarios of human speech, while the general subject includes ten diverse scenarios, including natural landscapes, animals, social activities, music performances, transportation, dailylife scenes, sports, industrial operations, alarm signals and science.
Table 1. Audio-Video forgery type combination matrix.
Type Real Audio Edited Audio Synthesized Audio
Real Video RA&RV EA&RV SA&RV Edited Video RA&EV EA&EV × Synthesized Video RA&SV × SA&SV
As summarized in Table 1, we define three canonical AV content states: Real (R), Edited (E), and Synthesized (S). Combining these content states across audio and video yields nine theoretical audio-video combinations. In practice, however, combinations that mix synthesized content in one modality with edited content in the other (e.g., synthesized video paired with locally edited audio, or vice versa)

Table 2. The comparison between AVFakeBench and other benchmarks. The Combination in Forgery Types includes 7 multi-modal forgery types. Forgery Tasks include BJ (Binary Judgment), MC (Multiple-choice Forgery Types Classification), DS (Forgery Detail Selection) and ER (Explanatory Reasoning).
Modality Subject Forgery Types Forgery Tasks
Dataset Video Audio Human General Real Edit Synthesis Combination BJ MC DS ER
FF++ [47] ✓ ✗ ✓ ✗ ✓ ✗ ✓ ✗ ✓ ✗ ✗ ✗ Celeb-DF [31] ✓ ✗ ✓ ✗ ✓ ✗ ✓ ✗ ✓ ✗ ✗ ✗
GenVidBench [43] ✓ ✗ ✓ ✓ ✓ ✗ ✓ ✗ ✓ ✗ ✗ ✗ DeMamba [9] ✓ ✗ ✓ ✓ ✓ ✗ ✓ ✗ ✓ ✗ ✗ ✗ FakeParts [3] ✓ ✗ ✓ ✓ ✓ ✓ ✗ ✗ ✓ ✗ ✗ ✗ DFDC [14] ✓ ✓ ✓ ✗ ✓ ✗ ✓ ✗ ✓ ✗ ✗ ✗ FakeAVCeleb [25] ✓ ✓ ✓ ✗ ✓ ✗ ✓ ✓ ✓ ✗ ✗ ✗ LAVDF [4] ✓ ✓ ✓ ✗ ✓ ✓ ✗ ✓ ✓ ✗ ✗ ✗ AVDeepFake1M [5] ✓ ✓ ✓ ✗ ✓ ✓ ✗ ✓ ✓ ✗ ✗ ✗
AVFakeBench (Ours) ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓ ✓
tend to introduce pronounced semantic and temporal mismatches, making it difficult to construct high-fidelity and naturalistic forgeries. To maintain realistic cross-modal coherence and focus on representative attack patterns, we select seven semantically consistent multimodal forgery combinations. Building on these combinations, AVFakeBench provides fine-grained forgery annotations and derives a tiered suite of evaluation tasks, including binary authenticity judgment, multiple-choice forgery clas-
sification, forgery detail selection, and open-ended forgery explanation, resulting in 12K question-answer pairs. Table 2 presents a detailed comparison between AVFakeBench and existing AV forgery datasets. In terms of breadth, AVFakeBench covers a substantially wider range of real-world scenarios and a more structured taxonomy of forgery types, spanning both human and general subjects. In terms of evaluation depth, it goes beyond conventional binary real/fake judgment to support multi-level tasks-
 that test not only detection accuracy but also fine-grained manipulation perception and reasoning. Per-scenario data statistics are provided in the Appendix.
3.2. Data Collection: Human Subject
The Human Subject portion of our benchmark comprises 1,500 carefully curated AV clips. These clips are sourced from several existing datasets and systematically reorganized into our 7-category taxonomy. Detailed description of datasets are provided in the Appendix. Real Samples. We select 500 real AV clips from the DDL dataset [22], filtered by clear speech quality, stable frontal views, and sufficient temporal coherence to support downstream manipulation analysis. Synthesized Samples. We curate 5-
00 synthesized samples covering the RA&SV, SA&RV, and SA&SV categories. For RA&SV, we adopt 150 high-quality AV clips
from DigiFakeAV [35]. For SA&RV, we select 150 real videos from AVDeepfake1M [5] and generate synthetic audios using LipVoicer [58] and TTS [6, 61], followed by temporal alignment with the original video. For SA&SV, we sample 200 synthesized videos from DigiFakeAV and generate corresponding synthetic audios using LipVoicer, forming fully synthetic AV pairs. Edited Samples. We obtain 500 edited samples from LAVDF [4], which provides insertion, deletion, and replacement of spoken words. From this da-
taset, we select 150 EA&RV, 150 RA&EV, and 200 EA&EV clips, ensuring coverage across the three edit types and consistency with our forgery taxonomy.
3.3. Forgery Framework: General Subject
The General Subject component contains 1,500 audio-video clips that systematically cover 10 real-world scenarios. It includes 500 real clips, 550 synthesized clips, and 450 edited clips. The real samples are meticulously selected from VGGSound [8] and all forged samples are generated via our multi-stage hybrid forgery framework, as shown in Fig. 2. Details of the forgery framework’s promptengineering and human-supervision components are presented in Appendix.
3.3.1. Synthesis Framework
The synthesis branch generates semantically coherent, dynamic, and audio-video synchronized content for the realworld scenarios. It follows a three-stage pipeline.
Stage 1: Proprietary Model Planning. Unlike human subject content with relatively constrained motion patterns, real-world scenarios span highly diverse objects, environments, and events. As a result, video generation often produces unstable or physically implausible motion that does not correspond to the intended scene context [39, 63]. To

Propose reasonable editing schemes based on real video
Forgery Plan
Remove the wooden stakes from the middle area of the video within 5-10s.
Stage1: Proprietary Model Planning
Original Video Frames
Stage2: Expert generative models editing
Forgery Plan
Video within
Editing Time SAM
Mask Video Edited Video
Audio Generation
Real Video
Real Audio
Edited Video
Edited Audio Stage3: Forgery Combination
Real Audio & Real Video Real Audio & Edited Video Edited Audio & Real Video Edited Audio & Edited Video
Stage2: Expert generative models synthesizing
Forgery
Plan
Video Generation
KLING QingYing
Audio Generation Real Video Synthesized Video
Real Audio Synthesized Audio
Real Audio & Real Video Real Audio & Syn. Video Syn. Audio & Real Video Syn. Audio & Syn. Video Stage3: Forgery Combination
Imagine a reasonable dynamic scene based on the image.
Forgery Plan
A train passes through a small mountain village from afar ...
A Photo of a train
First Frame
Stage1: Proprietary Model Planning
Original Video
(a) Synthesis Framework
(b) Edit Framework
Figure 2. Overview of the multi-stage hybrid forgery framework. The framework consists of two branches—synthesis and editingeach with three stages: Stage 1: A proprietary model plans the forgery task by generating dynamic descriptions or editing instructions based on the first frame or a short frame strip; Stage 2: An expert generative model performs precise forgery operations according to the planned instructions, producing synthesized or edited audio-video content; Stage 3: real and forged audio-
/video streams are recombined to instantiate different cross-modal forgery types.
stabilize synthesis and constrain scene evolution, inspired by previous works [13, 38], we employ an LMM to first generate detailed dynamic descriptions. We adopt two conditioning strategies: (1) Frame-driven planning, where the first frame of a real video serves as a visual anchor and the LMM predicts its plausible temporal evolution; and (2) Scenario-driven planning, where the LMM generates a static scene description based on one of the ten real-world scenarios. This description is converted int-
o a static image via a T2I model (e.g., Midjourney [41]), which serves as the first frame for video synthesis. The LMM then expands the static description into a structured dynamic specification, providing motion-consistent textual guidance for downstream video generation.
Stage 2: Expert generative models synthesizing. Using the planned first frame and dynamic description, we synthesize videos with Image-to-Video models such as KLING [27] and QingYing [7], treating the frame as a visual anchor and the description as a motion prompt. The generated video is subsequently passed to a Video-to-Audio generator [62] to produce temporally aligned audio that reflects the scene dynamics. This two-step synthesis ensures coherence across appearance, motion, and ambient sound. -
Stage 3: Forgery Combination. In the combination stage, we recombine real and synthesized audio and video streams to instantiate three synthesis-based forgery types: RA&SV, SA&RV, and SA&SV.
3.3.2. Editing Framework
The editing branch targets localized, spatio–temporal manipulations while preserving global visual and acoustic realism. Similar to the synthesis branch, it follows a three-stage construction pipeline.
Stage 1: Proprietary Model Planning. Given a real video, we uniformly sample an 8-frame segment and use a proprietary model to propose a plausible manipulation (e.g., “remove the small boat in the center of the water
within a time segment of 3-5 seconds.”). The LMM then converts this suggestion into a structured edit specification, detailing the target region, temporal window, and edit operation. This stage provides explicit editing guidance for downstream editing.
Stage 2: Expert generative models editing. Using the planned edit instruction, we extract the corresponding video segment and apply two complementary editing pathways. (1) Generative editing: the segment and instruction are fed into a closed source video-to-video editing model (e.g., KLING [27]), with the edit region manually constrained to ensure localized modification. (2) Mask-based editing: the target object is segmented by SAM2 [46] and the mask is passed to video editing models [1, 30] along-
 with the original video segment to execute precise editing operations. To maintain cross-modal consistency, the edited video segment is processed by a Video-to-Audio generator to produce temporally aligned edited audio.
Stage 3: Forgery Combination. Finally, the edited video and audio segments are inserted back into their corresponding positions in the original streams. We then recombine real and edited audio/video streams to instantiate three edit-based forgery types: RA&EV, EA&RV, and EA&EV.
3.4. Multi-Level Annotations and QA Pairs
Our multi-level annotations—L1: Binary Judgment, L2: Forgery Types Classification, L3: Forgery Detail Selection, and L4: Explanatory Reasoning—are designed to evaluate not only whether a model can detect forgeries, but also whether the model can localize, characterize, and explain forgeries in a human-aligned manner. The L1 and L2 labels are directly determined during data construction from the known real/fake state and forgery taxonomy. In contrast, generating higher-level L3 and L4 annotations r-
equires a dedicated annotation pipeline. Manually writing consistent rationales for 12,000 com

L1: Binary Judgment
Annotation: Real
A. This audio and video are completely authentic.
B. The lawn in the middle area is too smooth.
C. The audio has a sudden silence in the second half.
D. There are blurry artifacts at the edge of the sunset area in the upper right corner of the sky.
E. Animal sounds are heard in the audio, which does not match the video content.
L3: Forgery Detail Selection
Question: Is this audio-video manipulated by AI?
The sound of footsteps. The sound of the wind.
Question: Which of the following options is correct?
L2: Forgery Types Classification
Annotation: Real Audio & Edited Video
The sound of a rooster crowing.
Question: Which type does this audio-video belong?
Annotation:
Visually, The pavement in the lower part of the frame shows repeating, pixel-locked texture bands that don’t shift with motion, and the bus windows show static reflections and faint double edges, a typical sign of rendering or compositing. On the audio side, between 1 and 6 seconds, the audio maintains almost the same pitch and timbre, with no natural noise or abrupt changes, classifying it as synthesized audio.
Annotation:
Annotation:
Train whistle.
Question :Please explain whether this audio-video
has been forged.
L4: Explanatory Reasoning
Figure 3. Examples of forgery annotations. AVFakeBench has 4-level annotations, including Binary Judgment, Forgery Types Classification, Forgery Detail Selection and Explanatory Reasoning.
plex AV samples would be prohibitively time-consuming and highly subjective. Inspired by recent work on LMMassisted annotation [20, 34, 55], we build an LMM-based multimodal annotator. To enable accurate analysis of each sample, we provide the LMM with a rich multi-modal context, including uniformly sampled video frames, motion heatmaps, Mel spectrograms, and magnified highfrequency maps and each contributing complementary evidence for forgery analysis. Frames capture spatial appearance, heatmaps -
reveal temporal motion patterns, Mel spectrograms highlight frequency-domain anomalies, and highfrequency maps expose subtle artifacts such as blending traces or tampering noise. Together, they provide the LMM with a balanced view of spatial, temporal, and spectral inconsistencies that characterize diverse forgery types. Furthermore, we provide the ground-truth forgery-type label, enabling the model to focus on explaining how the forgery is created rather than guessing its category.
Based on these inputs, we design specific prompts that instruct LMM to first generate the L4 annotation: a naturallanguage rationale that describes the forgery from multiple aspects, such as its approximate location, manipulated content, and observable visual or semantic artifacts. We then derive the L3 annotation from this rationale by prompting LMM to select the most salient piece of evidence as the correct option and to generate four semantically related but incorrect distractors, forming a 5-c-
hoice question. Finally, all LMM-generated L3 and L4 annotations undergo human verification to validate their plausibility, correctness, and clarity. The resulting L1–L4 annotations yield 12K QA pairs and support the four evaluation tasks defined in our
benchmark. Examples of forged AV clips and their associated annotations are shown in Fig. 3.
4. Experiments
4.1. Experiment Setup
AV-LMMs. We evaluate 5 open-source AV-LMMs and 6 proprietary AV-LMMs, covering different model types and scales. For proprietary models, we consider GPT-4o [45] and the Gemini [15] series, including Gemini-2.0-flash-lite, Gemini-2.5-flash-lite, Gemini-2.0-flash, Gemini-2.5-flash, and Gemini-2.5-pro. For open-source models, we consider PandaGPT [49], OneLLM [17], VideoLLaMA2 [11], video-SALMONN [50], and AVicuna [51]. Expert Models. To contrast unified AV-LMMs with task-specific detectors, we addit-
ionally evaluate recent open-source forgery detection models, including LipFD [36] and AVH-Align [48]. These methods are designed specifically for synthetic audio-video content and are trained on datasets that are disjoint from AVFakeBench, reducing the risk of data contamination. Evaluation Metrics. For binary authenticity judgment, multiple-choice forgery classification and forgery detail selection, we report accuracy and macro-F1, capturing both overall correctness and performance under class i-
mbalance. Due to the poor instruction-following ability of some opensource AV-LMMs, we adopt a robust answer-parsing procedure following prior work [37, 40, 59]. Concretely, we first check whether the model explicitly outputs an option letter; if the textual explanation contains option content inconsistent with the stated letter, we resolve the final choice

Table 3. Overall performance (%) of different models on AVFakeBench across the four evaluation tasks.
Model Name
Binary Authenticity Judgment Multiple-Choice Forgery Classification Forgery Detail Selection Open-Ended Forgery Explanation Human General Overall Human General Overall Human General Overall Human General Overall F1↑ ACC↑ F1↑ ACC↑ F1↑ ACC↑ F1↑ ACC↑ F1↑ ACC↑ F1↑ ACC↑ F1↑ ACC↑ F1↑ ACC↑ F1↑ ACC↑ GPT-Score↑ GPT-Score↑ GPT-Score↑
Expert detection models
LipFD [36] 45.0 45.6 18.9 21.2 32.1 33.4 - - - - - - - - - - - - - - AVH-Align [48] 51.7 51.8 34.3 28.6 42.8 40.2 - - - - - - - - - - - - - - 
Proprietary Audio-Visual Large Multimodal Models
GPT-4o 52.2 53.7 56.9 57.1 56.9 57.1 10.7 29.8 13.5 32.5 12.2 31.2 22.2 35.6 32.5 42.0 27.5 38.8 29.6 28.4 29.0 Gemini-2.0-flash-lite 49.0 51.0 46.6 47.7 46.8 49.3 7.5 20.0 7.3 17.9 7.4 18.9 24.1 33.5 23.8 26.9 24.4 30.2 24.8 19.7 22.2 Gemini-2.5-flash-lite 38.2 41.7 37.4 41.0 37.8 41.3 15.5 35.9 15.6 35.8 15.6 35.9 18.1 33.7 24.8 34.7 21.7 34.2 29.1 22.0 25.5 Gemini-2.0-flash 39.0 42.1 38.8 42.0 38.9 42.1 14.8 35.8 16.4 36.3 15.5 36.0 17.6 33.5 25.1 35.1 21.6 34.3 26.9 21.7 24.3 Gemini-2.5-flash -
64.2 64.3 53.7 53.7 59.0 59.0 8.5 10.5 13.2 30.5 11.3 20.5 30.5 47.2 31.9 39.1 31.8 43.1 28.7 24.5 26.6 Gemini-2.5-pro 63.3 63.7 54.3 54.5 59.9 60.1 20.2 33.7 18.2 30.5 19.2 32.1 21.3 33.3 22.2 31.7 21.9 32.5 35.5 26.3 30.9
Open-source Audio-Visual Large Multimodal Models
PandaGPT 25.0 33.3 25.0 33.3 25.0 33.3 6.0 1.0 5.0 14.7 5.5 17.4 13.0 27.9 14.2 28.0 12.6 27.9 20.3 20.5 20.4 OneLLM 49.7 54.3 50.0 59.8 50.2 57.0 2.6 10.0 2.8 10.0 2.7 10.0 5.7 13.2 7.1 15.7 5.5 14.4 1.1 0.9 1.0 AVicuna 25.0 33.3 16.7 33.3 16.7 33.3 7.1 33.3 6.3 33.3 6.3 33.3 10.2 21.1 18.1 21.7 11.7 21.4 25.0 15.4 20.2 video-SALMONN 33.3 66.7 40.0 66.5 40.0 66.6 4.7 7.4 4.3 9.7 4.6 8.5 22.0 35.6 18.6 35.1 17.8 35.4 5.1 3.8 4.4 Video-LLaMA2 52.8 58.4 49.2 52.0 51.1 55.1 0.0 0.0 4.5 11.1 2.5 5.5 1-
3.1 25.1 15.0 22.7 13.0 23.9 22.9 20.0 21.4
based on the mentioned option content. When necessary, we further use GPT-5 [45] as a neutral parser to extract the intended option from the full response. If no valid option can be identified, the answer is marked as NA. In addition to these metrics, we compute a Normalized Bias Index (NBI) derived from recall across different forgery types to quantify systematic performance bias. Further details on the calculation of evaluation metrics can be found in Appendix.
4.2. Main results
In this section, we analyze the evaluation results for each of the four tasks. Our experiments highlight the AV-LMMs’ potential as unified audio-video forgery detectors, while revealing their limitations in fine-grained forgery perception and explanatory reasoning.
T1: Binary Authenticity Judgment. Binary authenticity judgment assesses the foundational detection capabilities of the models. As shown in Table 3, expert detection models perform poorly even on the human subject with F1-Scores of 45.0% and 51.7%, and further degrade substantially on general subject (18.9-34.3% F1). This indicates that these models rely heavily on face-centric deepfake artifacts and fail to detect forgeries outside their narrow training domain. In contrast, most of AV-LMMs achieve-
 markedly stronger and more stable performance. For example, Gemini-2.5-Pro reaches a score of 63.3% on human subject and maintains 54.3% on general subject, demonstrating cross-domain robustness.
T2: Multiple-Choice Forgery Classification. Compared with T1, all AV-LMMs show a substantial performance drop on T2 (see Table 3), with even the bestperforming Gemini-2.5-Pro reaching only 19.2% F1. This suggests that, once the task shifts to fine-grained type classification, AV-LMMs do not possess sufficient perceptual ability to accurately identify specific forgery categories. To verify this deficiency, we further analysis model performance across the three forgery states—Real, Edited, and Synth-
esized (see Table 4). Edited forgeries emerge as
the most challenging category: even the strongest model, Gemini-2.5-Pro, achieves only 7.5% F1, far below its performance on real or synthetic samples. Edited manipulations often involve localized, low-visibility changes, and the models’ inability to detect them provides direct evidence that current AV-LMMs lack robust fine-grained perception capabilities necessary for reliable multimodal forgery analysis.
Table 4. Performance (%) of AV-LMMs on the Multiple-Choice Forgery Classification task.
Multiple-Choice Forgery Classification
Real Edit Synthesis Overall
Model Name F1↑ ACC↑ F1↑ ACC↑ F1↑ ACC↑ F1↑ ACC↑
GPT-4o 15.2 83.7 3.9 6.6 5.5 7.4 12.2 31.2 Gemini-2.0-flash-lite 29.5 41.8 0.2 0.2 9.9 15.6 7.4 18.9 Gemini-2.5-flash-lite 49.3 97.1 5.4 7.6 5.8 8.0 15.6 35.9 Gemini-2.0-flash 49.3 97.2 5.4 5.0 8.2 6.0 15.5 36.0 Gemini-2.5-flash 20.5 44.4 5.3 4.7 8.1 12.8 11.3 20.5 Gemini-2.5-pro 42.8 74.8 7.5 6.8 13.9 15.2 19.2 32.1 PandaGPT 7.2 47.7 0.3 0.9 2.2 3.8 5.5 17.4 OneLLM 0.0 0.0 0.2 0.1 11.1 28.5 2.7 10.0 AVicuna 1.0 1.0 0.0 0.0 0.0 0.0 6.3 33.3 video-SALMONN 0.0 0.0 1.0 21.8 1.3 28.4 4.6 8.5 Video-LLa-
MA2 0.0 0.0 2.4 6.5 3.7 10.3 2.5 5.5
T3 and T4: Forgery Detail Selection and OpenEnded Forgery Explanation. T3 targets fine-grained evidence identification, whereas T4 probes the model’s capacity for forgery explanation. As shown in the third and fourth blocks of Table 3, AV-LMMs exhibit a pronounced gap between T1 and their performance on these detail- and reasoning-centric tasks. First, absolute scores are uniformly low. Among open-source models, the bestperforming Video-SALMONN reaches only 17.8% F1 on T3, and Video-LLaMA2 reaches-
 a GPT-5 reasoning score of merely 21.4/100 on T4, indicating that current opensource AV-LMMs have very limited capability to pinpoint concrete forgery evidence or provide reliable explanations. Second, proprietary models consistently outperform opensource ones, but still fall far short of satisfactory perfor

Figure 4. Model bias assessment. Warmer colors (closer to red) indicate a stronger tendency to predict the label on the horizontal axis, while cooler colors (closer to blue) indicate the opposite. The size of each square represents the magnitude of the bias.
mance. For example, GPT-4o achieves 27.5% F1 on T3 and a reasoning score of 29.0 on T4—clearly better than all open-source competitors, yet still low in absolute terms. These results indicate that current AV-LMMs still lack the explanatory competence required for real-world forgery detection.
4.3. AV-LMMs Capabilities.
While AV-LMMs can handle all T1-T4 tasks, their overall performance is underwhelming. In this section, we focus exclusively on these AV-LMMs to investigate their unique behavioral patterns and inherent flaws as forgery detectors. Model Bias. We first explore the impact of model bias on forgery detection. We compute the Normalized Bias Index (NBI) for T2, which quantifies how strongly a model prefers a particular option regardless of input content. As shown in Fig. 4, the NBI heatmap reveals pronou-
nced biases across nearly all AV-LMMs. Many models collapse toward one or two dominant categories rather than distributing predictions meaningfully across all types. For instance, a large subset of models—including OneLLM, Video-LLaMA2, and closed-source AV-LMMs show a strong bias toward the Real Audio & Real Video category. These patterns indicate that most AV-LMMs do not learn reliable multimodal manipulation cues. Instead, their decisions are driven by high-level priors acquired during pretrain-
ing (e.g., real content being far more common than edited or cross-modal forgeries). When uncertain, AV-LMMs revert to the most semantically “safe” or statistically dominant choice. This bias impedes the ability of AV-LMMs to perform genuine forgery detection and explanatory reasoning. Modality Disparity. AVFakeBench’s cross-modal forgery taxonomy allows us to directly quantify how well
Table 5. Comparison of Multiple-Choice Forgery Classification performance (F1 score (%)), which indicates the performance drop from video to audio.
Multiple-Choice Forgery Classification
Model Name Audio Video Audio-Video
GPT-4o 8.0 21.7 3.2 Gemini-2.0-Flash-lite 1.3 15.3 0.0 Gemini-2.5-Flash-lite 20.2 20.6 17.2 Gemini-2.0-Flash 16.6 24.5 22.1 Gemini-2.5-Flash 17.7 21.2 16.1 Gemini-2.5-Pro 28.4 23.0 33.6
PandaGPT 0.0 0.0 0.0 OneLLM 0.0 18.8 0.0 AVicuna 0.0 0.0 0.0 video-SALMONN 15.1 25.9 0.0 Video-LLaMA2 0.0 14.7 0.0
AV-LMMs perceive manipulations in each modality. Table 5 compares F1 scores on audio-only forgeries versus video-only forgeries. A clear vision-dominant pattern emerges: most AV-LMMs perform noticeably better on video forgeries while collapsing almost entirely on audio forgeries. For example, OneLLM and Video-LLaMA2 achieve 18.8% and 14.7% F1 on video-only forgeries but fall to 0.0 on audio-only forgeries, and even advanced closed-source AV-LMMs such as GPT-4o show a sizable gap (8.0 vs. 21.7). Th-
ese results reveal that inherent modality imbalance significantly limits the forgery-detection capability of current AV-LMMs. Insufficient audio perception and weak cross-modal alignment make reliable fine-grained or explanatory AV forgery detection particularly challenging.
5. Conclusion
In this paper, we introduce AVFakeBench, a comprehensive benchmark for audio–video forgery detection that spans two major subjects, eleven diverse real-world scenarios, and seven multimodal forgery types, equipped with carefully designed multi-level annotations. To construct high-fidelity and diverse forgeries at scale, we develop a multi-stage hybrid forgery framework that integrates proprietary models for task planning with expert generative and editing models for precise, controllable manipulat-
ion. We evaluate 11 AV-LMMs across four increasingly challenging tasks, highlighting their promising potential as unified forgery detectors while also uncovering fundamental limitations in fine-grained forgery perception, audio–video alignment, modality bias, and explanatory reasoning. We anticipate AVFakeBench to serve as a rigorous and extensible testbed for advancing the scientific understanding of audio–visual manipulation, and as a foundation for future research toward robust, perception-awar-
e, and explainable audio–video forgery detection systems.

References
[1] Yuxuan Bian, Zhaoyang Zhang, Xuan Ju, Mingdeng Cao, Liangbin Xie, Ying Shan, and Qiang Xu. Videopainter: Anylength video inpainting and editing with plug-and-play context control. In Proceedings of the Special Interest Group on Computer Graphics and Interactive Techniques Conference Conference Papers, pages 1–12, 2025. 5
[2] Andreas Blattmann, Tim Dockhorn, Sumith Kulal, Daniel Mendelevitch, Maciej Kilian, Dominik Lorenz, Yam Levi, Zion English, Vikram Voleti, Adam Letts, et al. Stable video diffusion: Scaling latent video diffusion models to large datasets. arXiv preprint arXiv:2311.15127, 2023. 3
[3] Gaetan Brison, Soobash Daiboo, Samy Aimeur, Awais Hussain Sani, Xi Wang, Gianni Franchi, and Vicky Kalogeiton. Fakeparts: a new family of ai-generated deepfakes. arXiv preprint arXiv:2508.21052, 2025. 3, 4
[4] Zhixi Cai, Kalin Stefanov, Abhinav Dhall, and Munawar Hayat. Do you really mean that? content driven audiovisual deepfake dataset and multimodal method for temporal forgery localization. In 2022 International Conference on Digital Image Computing: Techniques and Applications (DICTA), pages 1–10. IEEE, 2022. 2, 3, 4, 1 [5] Zhixi Cai, Shreya Ghosh, Aman Pankaj Adatia, Munawar Hayat, Abhinav Dhall, Tom Gedeon, and Kalin Stefanov. Av-deepfake1m: A large-scale llm-driven audio-visual deepfake datas-
et. In Proceedings of the 32nd ACM International Conference on Multimedia, pages 7414–7423, 2024. 3, 4, 1 [6] Edresson Casanova, Julian Weber, Christopher D Shulby, Arnaldo Candido Junior, Eren Go ̈lge, and Moacir A Ponti. Yourtts: Towards zero-shot multi-speaker tts and zero-shot voice conversion for everyone. In International conference on machine learning, pages 2709–2720. PMLR, 2022. 4 [7] chatglm. Qingying, 2025. https://chatglm.cn. 5 [8] Honglie Chen, Weidi Xie, Andrea Vedaldi, and Andrew Zi-
sserman. Vggsound: A large-scale audio-visual dataset. In ICASSP 2020-2020 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), pages 721–725. IEEE, 2020. 4 [9] Haoxing Chen, Yan Hong, Zizheng Huang, Zhuoer Xu, Zhangxuan Gu, Yaohui Li, Jun Lan, Huijia Zhu, Jianfu Zhang, Weiqiang Wang, et al. Demamba: Ai-generated video detection on million-scale genvideo benchmark. arXiv preprint arXiv:2405.19707, 2024. 3, 4
[10] Weiliang Chen, Wenzhao Zheng, Yu Zheng, Lei Chen, Jie Zhou, Jiwen Lu, and Yueqi Duan. Genworld: Towards detecting ai-generated real-world simulation videos. arXiv preprint arXiv:2506.10975, 2025. 3
[11] Zesen Cheng, Sicong Leng, Hang Zhang, Yifei Xin, Xin Li, Guanzheng Chen, Yongxin Zhu, Wenqi Zhang, Ziyang Luo, Deli Zhao, et al. Videollama 2: Advancing spatialtemporal modeling and audio understanding in video-llms. arXiv preprint arXiv:2406.07476, 2024. 3, 6
[12] Di Cooke, Abigail Edwards, Sophia Barkoff, and Kathryn Kelly. As good as a coin toss: Human detection of ai
generated images, videos, audio, and audiovisual stimuli. arXiv preprint arXiv:2403.16760, 2024. 2
[13] Juntao Dai, Tianle Chen, Xuyao Wang, Ziran Yang, Taiye Chen, Jiaming Ji, and Yaodong Yang. Safesora: Towards safety alignment of text2video generation via a human preference dataset. In NIPS, pages 17161–17214, 2024. 5 [14] Brian Dolhansky, Joanna Bitton, Ben Pflaum, Jikuo Lu, Russ Howes, Menglin Wang, and Cristian Canton Ferrer. The deepfake detection challenge (dfdc) dataset. arXiv preprint arXiv:2006.07397, 2020. 2, 4
[15] google. Gemini, 2025. https://chatglm.cn. 6 [16] Jiaming Han, Renrui Zhang, Wenqi Shao, Peng Gao, Peng Xu, Han Xiao, Kaipeng Zhang, Chris Liu, Song Wen, Ziyu Guo, et al. Imagebind-llm: Multi-modality instruction tuning. arXiv preprint arXiv:2309.03905, 2023. 3
[17] Jiaming Han, Kaixiong Gong, Yiyuan Zhang, Jiaqi Wang, Kaipeng Zhang, Dahua Lin, Yu Qiao, Peng Gao, and Xiangyu Yue. Onellm: One framework to align all modalities with language. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pages 2658426595, 2024. 6 [18] Yue-Hua Han, Tai-Ming Huang, Kai-Lung Hua, and JunCheng Chen. Towards more general video-based deepfake detection through facial component guided adaptation for foundation model. In Proceedings of the Co-
mputer Vision and Pattern Recognition Conference, pages 22995–23005, 2025. 3 [19] Wenyi Hong, Ming Ding, Wendi Zheng, Xinghan Liu, and Jie Tang. Cogvideo: Large-scale pretraining for text-to-video generation via transformers. In ICLR, 2023. 3 [20] Zhengchao Huang, Bin Xia, Zicheng Lin, Zhun Mou, Wenming Yang, and Jiaya Jia. Ffaa: Multimodal large language model based explainable open-world face forgery analysis assistant. arXiv preprint arXiv:2408.10072, 2024. 6
[21] Zhenglin Huang, Jinwei Hu, Xiangtai Li, Yiwei He, Xingyu Zhao, Bei Peng, Baoyuan Wu, Xiaowei Huang, and Guangliang Cheng. Sida: Social media image deepfake detection, localization and explanation with large multimodal model. In Proceedings of the Computer Vision and Pattern Recognition Conference, pages 28831–28841, 2025. 3 [22] IJCAI. The challenge on deepfake detection and localization, 2025. https : / / 2025 . ijcai . org / competitions-and-challenges. 4, 1
[23] Liming Jiang, Ren Li, Wayne Wu, Chen Qian, and Chen Change Loy. Deeperforensics-1.0: A large-scale dataset for real-world face forgery detection. In Proceedings of the IEEE/CVF conference on computer vision and pattern recognition, 2020. 2
[24] Yan Ju, Shan Jia, Lipeng Ke, Hongfei Xue, Koki Nagano, and Siwei Lyu. Fusing global and local features for generalized ai-synthesized image detection. In 2022 IEEE International Conference on Image Processing (ICIP), pages 3465–3469. IEEE, 2022. 2 [25] Hasam Khalid, Shahroz Tariq, Minha Kim, and Simon S. Woo. Fakeavceleb: A novel audio-video multimodal deepfake dataset. In Proceedings of the Neural Information Processing Systems Track on Datasets and Benchmarks 1,

NeurIPS Datasets and Benchmarks 2021, December 2021, virtual, 2021. 2, 3, 4 [26] Pavel Korshunov and Se ́bastien Marcel. Deepfakes: a new threat to face recognition? assessment and detection. arXiv preprint arXiv:1812.08685, 2018. 2
[27] Kwai. Keling, 2024. https://app.klingai.com/cn. 2, 5 [28] KunChang Li, Yinan He, Yi Wang, Yizhuo Li, Wenhai Wang, Ping Luo, Yali Wang, Limin Wang, and Yu Qiao. Videochat: Chat-centric video understanding. arXiv preprint arXiv:2305.06355, 2023. 3
[29] Wuyang Li, Wentao Pan, Po-Chien Luan, Yang Gao, and Alexandre Alahi. Stable video infinity: Infinite-length video generation with error recycling. arXiv preprint arXiv:2510.09212, 2025. 3
[30] Xiaowen Li, Haolan Xue, Peiran Ren, and Liefeng Bo. Diffueraser: A diffusion model for video inpainting. arXiv preprint arXiv:2501.10018, 2025. 5
[31] Yuezun Li, Xin Yang, Pu Sun, Honggang Qi, and Siwei Lyu. Celeb-df: A large-scale challenging dataset for deepfake forensics. In Proceedings of the IEEE/CVF conference on computer vision and pattern recognition, pages 32073216, 2020. 3, 4 [32] Bin Lin, Yang Ye, Bin Zhu, Jiaxi Cui, Munan Ning, Peng Jin, and Li Yuan. Video-llava: Learning united visual representation by alignment before projection. In Proceedings of the 2024 Conference on Empirical Methods in Natural Language Processing, pages 5-
971–5984, 2024. 3 [33] Huadai Liu, Kaicheng Luo, Jialei Wang, Wen Wang, Qian Chen, Zhou Zhao, and Wei Xue. Thinksound: Chainof-thought reasoning in multimodal large language models for audio generation and editing. In arXiv preprint arXiv:2506.21448, 2025. 3
[34] Jiawei Liu, Fanrui Zhang, Jiaying Zhu, Esther Sun, Qiang Zhang, and Zheng-Jun Zha. Forgerygpt: Multimodal large language model for explainable image forgery detection and localization. arXiv preprint arXiv:2410.10238, 2024. 6
[35] Jiaxin Liu, Jia Wang, Saihui Hou, Min Ren, Huijia Wu, Long Ma, Renwang Pei, and Zhaofeng He. Beyond face swapping: A diffusion-based digital human benchmark for multimodal deepfake detection. arXiv preprint arXiv:2505.16512, 2025. 4, 1 [36] Weifeng Liu, Tianyi She, Jiawei Liu, Boheng Li, Dongyu Yao, Ziyou Liang, and Run Wang. Lips are lying: Spotting the temporal inconsistency between audio and visual in lip-syncing deepfakes. In Advances in Neural Information Processing Systems 38: Annual Co-
nference on Neural Information Processing Systems 2024, NeurIPS 2024, Vancouver, BC, Canada, December 10 - 15, 2024, 2024. 6, 7
[37] Xuannan Liu, Zekun Li, Peipei Li, Huaibo Huang, Shuhan Xia, Xing Cui, Linzhi Huang, Weihong Deng, and Zhaofeng He. Mmfakebench: A mixed-source multimodal misinformation detection benchmark for lvlms. In arXiv preprint arXiv:2406.08772, 2024. 6
[38] Xuannan Liu, Zekun Li, Zheqi He, Peipei Li, Shuhan Xia, Xing Cui, Huaibo Huang, Xi Yang, and Ran He. Videosafetybench: A benchmark for safety evaluation of video lvlms. In NIPS, 2025. 5
[39] Yue Ma, Kunyu Feng, Zhongyuan Hu, Xinyu Wang, Yucheng Wang, Mingzhe Zheng, Xuanhua He, Chenyang Zhu, Hongyu Liu, Yingqing He, et al. Controllable video generation: A survey. arXiv preprint arXiv:2507.16869, 2025. 4 [40] Fanqing Meng, Jin Wang, Chuanhao Li, Quanfeng Lu, Hao Tian, Jiaqi Liao, Xizhou Zhu, Jifeng Dai, Yu Qiao, Ping Luo, et al. Mmiu: Multimodal multi-image understanding for evaluating large vision-language models. In ICLR, 2025. 6
[41] Midjourney, 2022. https://www.midjourney.com/ home. 5
[42] Kartik Narayan, Harsh Agarwal, Kartik Thakral, Surbhi Mittal, Mayank Vatsa, and Richa Singh. Df-platter: Multiface heterogeneous deepfake dataset. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pages 9739–9748, 2023. 3 [43] Zhenliang Ni, Qiangyu Yan, Mouxiao Huang, Tianning Yuan, Yehui Tang, Hailin Hu, Xinghao Chen, and Yunhe Wang. Genvidbench: A challenging benchmark for detecting ai-generated video. arXiv preprint arXiv:2501.11340, 2025. 3, 4 [44] Open-
AI. Sora: Creating video from text, 2024. https: //openai.com/sora. 2
[45] openai. chatgpt, 2025. https://chatgpt.com. 6, 7 [46] Nikhila Ravi, Valentin Gabeur, Yuan-Ting Hu, Ronghang Hu, Chaitanya Ryali, Tengyu Ma, Haitham Khedr, Roman R ̈adle, Chloe Rolland, Laura Gustafson, et al. Sam 2: Segment anything in images and videos. In ICLR, 202. 5 [47] Andreas Rossler, Davide Cozzolino, Luisa Verdoliva, Christian Riess, Justus Thies, and Matthias Nießner. Faceforensics++: Learning to detect manipulated facial images. In Proceedings of the IEEE/CVF international conferen-
ce on computer vision, 2019. 2, 3, 4
[48] Stefan Smeu, Dragos-Alexandru Boldisor, Dan Oneata, and Elisabeta Oneata. Circumventing shortcuts in audio-visual deepfake detection datasets with unsupervised learning. In IEEE/CVF Conference on Computer Vision and Pattern Recognition, CVPR 2025, Nashville, TN, USA, June 11-15, 2025, 2025. 6, 7 [49] Yixuan Su, Tian Lan, Huayang Li, Jialu Xu, Yan Wang, and Deng Cai. Pandagpt: One model to instruction-follow them all. arXiv preprint arXiv:2305.16355, 2023. 3, 6
[50] Guangzhi Sun, Wenyi Yu, Changli Tang, Xianzhao Chen, Tian Tan, Wei Li, Lu Lu, Zejun Ma, Yuxuan Wang, and Chao Zhang. video-salmonn: Speech-enhanced audio-visual large language models. In ICML, 2024. 3, 6 [51] Yunlong Tang, Daiki Shimada, Jing Bi, Mingqian Feng, Hang Hua, and Chenliang Xu. Empowering llms with pseudo-untrimmed videos for audio-visual temporal understanding. In Proceedings of the AAAI Conference on Artificial Intelligence, pages 7293–7301, 2025. 6 [52] Zeyue Tian, Yizhu Jin, Zh-
aoyang Liu, Ruibin Yuan, Xu Tan, Qifeng Chen, Wei Xue, and Yike Guo. Audiox: Diffusion transformer for anything-to-audio generation. arXiv preprint arXiv:2503.10522, 2025. 3
[53] Jin Wang, Chenghui Lv, Xian Li, Shichao Dong, Huadong Li, Kelu Yao, Chao Li, Wenqi Shao, and Ping Luo.

Forensics-bench: A comprehensive forgery detection benchmark suite for large vision language models. In Proceedings of the Computer Vision and Pattern Recognition Conference, pages 4233–4245, 2025. 3 [54] Siwei Wen, Junyan Ye, Peilin Feng, Hengrui Kang, Zichen Wen, Yize Chen, Jiang Wu, Wenjun Wu, Conghui He, and Weijia Li. Spot the fake: Large multimodal model-based synthetic image detection with artifact explanation. In NIPS, 2025. 2 [55] Zhipei Xu, Xuanyu Zhang, Runyi Li, Zecheng Tang, Qing Hua-
ng, and Jian Zhang. Fakeshield: Explainable image forgery detection and localization via multi-modal large language models. In ICLR, 2025. 6 [56] Xin Yang, Yuezun Li, and Siwei Lyu. Exposing deep fakes using inconsistent head poses. In ICASSP 2019-2019 IEEE international conference on acoustics, speech and signal processing (ICASSP), 2019. 2
[57] Junyan Ye, Baichuan Zhou, Zilong Huang, Junan Zhang, Tianyi Bai, Hengrui Kang, Jun He, Honglin Lin, Zihao Wang, Tong Wu, et al. Loki: A comprehensive synthetic data detection benchmark using large multimodal models. In ICLR, 2025. 3 [58] Yochai Yemini, Aviv Shamsian, Lior Bracha, Sharon Gannot, and Ethan Fetaya. Lipvoicer: Generating speech from silent videos guided by lip reading. In ICLR, 2024. 4 [59] Kaining Ying, Fanqing Meng, Jin Wang, Zhiqian Li, Han Lin, Yue Yang, Hao Zhang, Wenbo Zhan-
g, Yuqi Lin, Shuo Liu, et al. Mmt-bench: A comprehensive multimodal benchmark for evaluating large vision-language models towards multitask agi. In ICML, 2024. 6 [60] Shuaiwei Yuan, Junyu Dong, and Yuezun Li. Where the devil hides: Deepfake detectors can no longer be trusted. In Proceedings of the Computer Vision and Pattern Recognition Conference, pages 8764–8774, 2025. 3 [61] Zhen Zeng, Jianzong Wang, Ning Cheng, Tian Xia, and Jing Xiao. Aligntts: Efficient feed-forward text-to-speech system wit-
hout explicit alignment. In ICASSP 2020-2020 IEEE international conference on acoustics, speech and signal processing (ICASSP), pages 6714–6718. IEEE, 2020. 4 [62] Yiming Zhang, Yicheng Gu, Yanhong Zeng, Zhening Xing, Yuancheng Wang, Zhizheng Wu, and Kai Chen. Foleycrafter: Bring silent videos to life with lifelike and synchronized sounds. In IJCV, 2024. 2, 5 [63] Zhenghao Zhang, Junchao Liao, Menghao Li, Zuozhuo Dai, Bingxue Qiu, Siyu Zhu, Long Qin, and Weizhi Wang. Tora: Trajectory-oriented diff-
usion transformer for video generation. In Proceedings of the Computer Vision and Pattern Recognition Conference, pages 2063–2073, 2025. 4
[64] Shangchen Zhou, Chongyi Li, Kelvin CK Chan, and Chen Change Loy. Propainter: Improving propagation and transformer for video inpainting. In Proceedings of the IEEE/CVF international conference on computer vision, pages 10477–10486, 2023. 3

AVFakeBench: A Comprehensive Audio-Video Forgery Detection Benchmark
for AV-LMMs
Supplementary Material
A. More details of AVFakeBench
A.1. Statistics of each scenario
AVFakeBench includes 3,000 audio-video pairs across 11 real-world scenarios, with distribution statistics presented in Table 6.
Table 6. Statistics of scenarios and sample counts in AVFakeBench.
Scenarios Subjects Samples
Human Speech Human Subject 1500 Natural Landscapes General Subject 145 Animals General Subject 262 Social Activities General Subject 117 Music Performances General Subject 260 Transportation General Subject 186 Daily-life Scenes General Subject 259 Sports General Subject 144 Industrial Operations General Subject 68 Alarm Signals General Subject 68 Science General Subject 65
A.2. Data Sources
The audio–video clips categorized under the Human Subject are primarily sourced from existing public datasets and reorganized according to our 7-category taxonomy. Below are the detailed description for these datasets. DDL [22]. The DDL dataset originates from The Deepfake Detection and Localization Challenge, encompassing cross-modal forgery types and precise temporal localization of forgeries. From this dataset, we select 500 real samples, which are subsequently categorized under the “Human Subj-
ect-Real” class. DigiFakeAV [35]. DigiFakeAV is a large-scale multimodal Deepfake benchmark dataset generated using diffusion models. The construction of this dataset begins with the selection of high-quality real videos from HDTF and CelebV-HQ. During the synthesis phase, five state-of-theart video diffusion models along with the audio generation model are employed. By conditioning the audio (real or synthesized) and reference images as inputs, the synthesis pipeline generates high-fidelity video-
 frames through diffusion sampling, followed by rigorous quality control to ensure audiovisual consistency. Since the dataset provides
open access to real audio and real video, real audio and synthesized video, and single-modal synthesized video, we directly select 150 samples of real audio paired with synthesized video, categorizing them as the ”Human SubjectReal Audio & Synthesized Video” class. For the singlemodal synthesized videos, 200 samples are chosen and resynthesized using LipVoicer, which are classified under the ”Human Subject-Synthesized Audio & Synthesized Video” category. AV-DeepFake1M [5]. AV-DeepFake1M is a large-
-scale multimodal benchmark specifically tailored for the task of temporal deepfake localization. The dataset construction employs a sophisticated three-stage pipeline: First, Large Language Models (ChatGPT) are leveraged to perform context-aware word-level manipulations—including replacement, deletion, and insertion—on original transcripts to generate semantically inverted text. Subsequently, high-fidelity Text-to-Speech models synthesize the corresponding audio, which is fused with background no-
ise to enhance realism. Finally, the Audio-to-Video model generates visual frames with precise lip-synchronization to the synthetic audio, resulting in high-quality forgery data spanning three distinct modality configurations: ”Edited Audio-Edited Video,” ”Edited Audio-Real Video,” and ”Real Audio-Edited Video”. We select 150 real videos from AVDeepfake1M and generate synthetic audios using LipVoicer and TTS, followed by temporal alignment with the original video. These samples are reorganized int-
o “Synthesized Audio & Real Video”. LAVDF [4]. Similar to AV-DeepFake1M, LAV-DF is a large-scale multimodal Deepfake benchmark dataset designed to address the task of content-driven temporal forgery localization and detection, containing over 136,000 video samples. From this dataset, we select 150 Edited Audio & Real Video, 150 Real Audio & Edited Video, and 200 Edited Audio & Edited Video clips. Among them, the distribution of insertion, deletion, and replacement manipulations is balanced across -
all forgery types. Data Selection Criteria. To ensure the robustness and reliability of the constructed benchmark, we implement a rigorous manual screening process to filter high-quality samples from the aforementioned source datasets. The selection criteria for ”high-quality” data are defined as follows:
• Perceptual Fidelity: The video frames must maintain high resolution without significant compression artifacts, blurring, or lighting inconsistencies. Similarly, audio

You are provided with a real video frame depicting a specific scene. Based on this frame, imagine a plausible continuation of the video, particularly focusing on the dynamic changes in action within the scene. Describe how the scene evolves naturally, including the following aspects:
1. What are the key actions taking place in the scene (e.g., people moving, objects interacting, environmental changes)? 2. How do these actions progress logically over time (e.g., how would a person move or how objects would behave)? 3. What new elements or events might logically appear based on the context of the current frame (e.g., additional characters, background changes, environmental interactions)? 4.How do the visual and physical actions transform or escalate as the scene progresses?
Please ensure that your description focuses on maintaining continuity in terms of motion, character behavior, and environmental interaction. The goal is to create a coherent and realistic extension of the given video frame.
Figure 5. The prompt template used for generating dynamic descriptions.
You are given a list of 10 real-world scenes. For each scene, imagine and describe the visual details in a way that allows an artist or a generative model to create a corresponding image. Your task is to provide a detailed scene description for each of the following categories:
1. Natural Landscapes: Describe a breathtaking landscape, including its natural elements like mountains, rivers, forests, and skies. Consider the lighting, weather conditions, and time of day.
2. Animals: Describe a scene featuring animals in their natural environment. Be specific about the animals’ actions, interactions, and surroundings.
3. Social Activities: Imagine a social gathering, such as a family reunion, a festival, or a casual meeting in a park. Focus on the people’s emotions, interactions, clothing, and the setting. 4. Music Performances: Visualize a live music performance. What type of music is being performed? Describe the stage, performers, audience, lighting, and mood. 5. Transportation: Imagine a busy transportation scene, such as a bustling train station, a traffic jam on a highway, or an airplane taking off at sun-
rise. Describe the vehicles, people, and any notable features like weather conditions, motion, or architecture. 6. Daily-Life Scenes: Depict a moment from everyday life. This could include scenes like a person walking their dog in the park, cooking in the kitchen, or working at a desk. Focus on the ordinary but specific details that make the scene feel real. 7. Sports: Picture a sporting event. Describe the players, the action of the game, the stadium or field, and the audience. Pay attention to t-
he movement, the intensity, and the environment. 8. Industrial Operations: Visualize a scene from an industrial setting, like a factory floor, a construction site, or a warehouse. Describe the machines, workers, equipment, and any movement or process taking place. How does the environment look (e.g., machinery, raw materials, lighting)? 9. Alarm Signals: Picture a scene involving an alarm or emergency situation. This could be a fire drill, a car accident, or an emergency alert in a city. Describe -
the urgency, the individuals involved, the emergency response, and the surrounding environment. 10. Science: Imagine a scientific experiment or laboratory setting. Describe the equipment, scientists, and the process being conducted.
For each scene, ensure the description includes enough detail to generate an image that conveys the mood, atmosphere, and key elements of the environment.
Figure 6. The prompt template used for generating static scenes.
clips must be clear, with minimal background noise (unless intentionally added for realism) and devoid of robotic or metallic artifacts typical of low-quality synthesis.
• Audiovisual Synchronization: For samples involving speech, there must be precise alignment between lip movements and audio streams. Samples exhibiting noticeable desynchronization or unnatural lip-sync jitter are excluded to ensure the challenge arises from subtle forgery traces rather than obvious alignment errors. • Semantic Consistency: For text-edited or context-driven forgeries (e.g., from AV-DeepFake1M), the manipulated content must maintain semantic fluidity. We discard samples where the -
manipulated speech resulted in grammat
ical incoherence or logical breaks that would make the forgery trivially detectable by humans.
Based on these criteria, we curate a balanced subset of samples that represent the challenging and realistic scenarios in current deepfake generation.
A.3. Forgery Framework
The construction of AVFakeBench leverages a proprietary model to assist in generating dynamic descriptions, generating static scenes and proposing a plausible manipulation. The specific prompt templates used for dataset construction are summarized below.
Prompt Templates to generate dynamic descriptions.

Fig. 5 illustrates the prompt template used to instruct LMMs to generate dynamic descriptions based on the first frame extracted from a video.
Prompt Templates to generate static scenes. Fig. 6 illustrates the prompt template used to instruct LMMs to generate static scenes based on the 10 scenarios belonging to General Subject.
Prompt Templates to propose a plausible manipulation. Fig. 7 illustrates the prompt template used to instruct LMMs to propose a plausible manipulation based on 8frames extracted from a real video.
Human Supervision Details. To ensure the high perceptual quality, logical consistency, and precise localization of the General Subject component, we implement a robust human-in-the-loop supervision protocol spanning the entire generation pipeline. This protocol involves human supervision at three key phases:
• Phase 1: Data Preparation and Filtering. During the collection of real samples from VGGSound, we conduct a comprehensive screening process to ensure the data’s relevance and quality. The screening involves assessing the scenario alignment, which verifies that the content precisely matches one of the 10 defined scenarios, and the audio-visual quality, which involves discarding clips that exhibit low resolution, excessive motion blur, or background noise that interfers with the primary audio event-
. These stringent criteria ensured the data’s consistency and suitability for further processing.
• Phase 2: Synthesis Consistency Check. In the synthesis branch, supervision is directed at ensuring both physical plausibility and semantic accuracy. We rigorously review the static visual anchors generated by the T2I model in Stage 1, rejecting any samples that contain obvious artifacts, unrealistic textures, or discrepancies in visual fidelity. Additionally, the dynamic descriptions generated by the LMM are carefully examined to ensure they conform to physical laws, such as proper gravity and m-
otion logic. For the final output in Stage 2, we meticulously verify the synchronization between the generated video dynamics and the Foley-synthesized audio, ensuring seamless cross-modal coherence and preventing any temporal mismatches that may disrupt the audiovisual experience. • Phase 3: Editing Precision and Constraints. In the editing phase, human intervention plays a crucial role in ensuring spatial and temporal precision. Initially, we validate the feasibility of the LMM-proposed editing -
instructions to prevent any logical conflicts, such as attempting to remove an object that does not exist in the scene. During the execution stage (Stage 2), annotators manually refine the segmentation masks provided by SAM2 to correct any boundary errors. Specifically, we specify the exact coordinates of the editing bounding boxes, ensuring that the editing operations are confined to the correct regions
and that no unintended elements are affected. This step is critical for maintaining the spatial accuracy of the edits and preventing ”hallucinations”—unrealistic artifacts introduced into non-target regions of the background. Furthermore, the final output underwent a meticulous quality control process, where we check the transitions between the real and forged segments to reduce visual inconsistencies, such as jumps or distortions in the frame, or acoustic artifacts, such as mismatches between sou-
nd and visual cues, are present.
A.4. Dataset Annotation
Different types of input used for annotation: As shown in Fig. 8, we present examples of the four different types of input used for annotation: Video Frames, Motion Heatmaps, Log-Mel Spectrograms, and High-Frequency Zooms. Each input type contributes distinct evidence that the LMM uses for analysis. Video Frames (Top Row): These frames provide spatial appearance and serve as the primary visual evidence for forgery detection. Each frame shows a different moment in time within the video clip, offeri-
ng a detailed view of the manipulated content. Motion Heatmaps (Second Row): These heatmaps highlight temporal motion patterns, showing areas of significant change in the video. They are particularly useful for detecting anomalies in object movement or forgeries that involve dynamic elements, such as unnatural shifts in the scene or motion artifacts. Log-Mel Spectrogram (Third Row): The full Log-Mel Spectrogram reveals the frequency-domain characteristics of the audio, helping to identify anomalie-
s in the audio track that correspond to visual forgeries. It offers insights into the temporal structure of the sound, making it valuable for detecting mismatches between the audio and visual content. High-Frequency Zoom (Fourth Row): This zoomed-in view of the spectrogram focuses on the high-frequency range, capturing subtle audio artifacts such as blending traces, tampering noise, or unnatural transitions in the sound.
L4 Annotation Prompts for Human and General Subjects. We introduce the distinct prompts used to generate L4 (Explanatory Reasoning) annotations for Human Subject and General Subject. Given the inherent differences in the types of forgeries that can occur in these two categories, the prompts are tailored to guide the model to focus on the most relevant features for each case. As shown in Fig. 9, for Human Subject, the focus is on human actions, facial expressions, body language, and interactions wi-
th the environment. The prompts are structured to direct the model to detect and explain inconsistencies related to these human-centered aspects, such as unnatural gestures, mismatched lip-syncing, or unnatural facial

You are provided with 8 evenly sampled frames from a real video, each with a timestamp labeled at the top-left corner. Your task is to generate a reasonable edit operation based on these frames. The possible editing operations include insertion, deletion, and replacement of specific elements within the frames. For each edit, you must specify the following:
Edit Type: Choose one of the following edit types: 1. Insert: Insert a new element (e.g., an object, person, or background feature) into the scene. 2. Delete: Remove an existing element (e.g., an object, person, or part of the background). 3. Replace: Replace an existing element with a new one (e.g., replacing an object with a different version, or changing the background).
Time Period for Edit: Specify the exact time range (start time and end time) of the edit. The edit should be applied between two or more frames, so provide the timestamps that indicate where the change should begin and end.
Edited Region: Identify the specific region(s) in the frame that will be edited. This could refer to:
A specific object or person in the frame (e.g., replacing a car with a different model, deleting a person walking, etc.). A particular part of the background (e.g., replacing a cloudy sky with a clear one, or removing an object from the background).
Description of Edit: Provide a detailed description of what is being modified. For example:
For insertion, describe what new element is being added to the frame (e.g., inserting a tree in the foreground or adding a new character walking through the scene). For deletion, explain what element is being removed (e.g., deleting a person walking on the street). For replacement, describe what element is being swapped (e.g., replacing a blue car with a red one).
Ensure the edit you propose is coherent with the overall scene and timeline of the video. The goal is to maintain the natural flow of the video while making the specified changes to the scene elements.
Figure 7. The prompt template used for proposing a plausible manipulation.
Figure 8. The prompt template used for proposing a plausible manipulation.
expressions.
As shown in Fig. 10, for General Subject, the emphasis
shifts to spatial and temporal changes in the scene. In these cases, the forgery may involve subtle changes to the envi

You are an audio-video authenticity analysis expert. Your task is to analyze a {forgery type} audio-video clip and provide a clear, concise, and insightful explanation of its authenticity, focusing on the most critical and distinctive evidence rather than listing every minor detail.
You will be given 4 images, each representing a different modality of the clip: Video frame collage (8 sampled frames in chronological order, with timestamps) Motion heatmap collage (optical-flow-based motion intensity for the same 8 frames, showing facial/body dynamics) Full audio spectrogram (Log-Mel Spectrogram across the entire duration) High-frequency zoom (zoomed-in high-frequency region, highlighting sibilance/breath/noise details)
Please evaluate authenticity from two levels: (1) Single-modality authenticity analysis (2) Cross-modality consistency analysis
You may briefly reference key observations in each modality, but you do NOT need to explain every checklist item. Focus on the most important features that strongly support or challenge authenticity. If there are other key features not mentioned, feel free to include them.
I. Video Frame Authenticity (static visual)
(Briefly summarize realism: lighting, texture, expressions, absence of face warping, etc.) Key angles to consider: Lighting & color consistency; Natural textures and clean edges; Resolution and compression coherence; Realistic facial expressions and muscle movement;Stable perspective and natural depth-of-field
II. Motion Heatmap Authenticity (dynamic visual)
(Analyze whether motion patterns align with natural facial/body movement, speech rhythm, and background stability.) Key angles: Motion concentrated in mouth/jaw during speech; Blinking/head movement visible; Background static as expected; Motion intensity follows speech rhythm; No abrupt spikes or melting/block artifacts; Motion hotspots align with facial structure
III. Audio Spectrogram Authenticity (overall speech & environment)
(Highlight whether the spectral structure, environment sounds, and temporal flow look natural and human-like.) Key angles: Balanced low/mid/high frequencies; Energy rises and falls with speech rhythm; No repetitive/template-like spectral blocks; Background noise, breathing, room reverb present; Smooth temporal evolution, no abrupt cuts; Natural formant shifts, emotion, speech rate variation
IV. High-Frequency Zoom Authenticity (fine-grained audio detail)
(Comment on sibilance, breath noise, high-frequency variation, and absence of AI artifacts.) Key angles: Clear sibilance, breath, crackling; Energy decreases during pauses; No grid-like or repetitive high-frequency patterns; High-frequency details align with lower-frequency structure
V. Cross-Modality Consistency
(Determine if modalities reinforce each other. Point out strong coherence or mismatches.) Key angles: Lip movement timing matches audio speech rhythm; Speech pauses align with silent segments; Motion heatmap peaks match spectrogram energy peaks; Facial expressions align with vocal tone; Indoor scene matches indoor reverberation and background audio; Common AI inconsistencies to check: Video real but audio too clean/mechanical; Motion natural but face shows reconstruction artifacts; Audio real but -
lip/motion sync is off
Figure 9. The prompt template used for generating L4 annotations for Human Subject.
ronment, such as altered weather conditions, object placements, or unnatural motion. The prompts guide the model to focus on discrepancies in visual and motion patterns, as well as any audio-visual misalignments that could indicate a forgery. The goal is to encourage the model to explain the forgery in terms of spatial anomalies, such as object distortions, motion inconsistencies, or environmental artifacts.
Extracting L3 Annotations from L4. As shown in
Fig. 11, we proceed to extract L3 (Forgery Detail Selection) annotations from L4. The goal of the L3 annotation is to distill the detailed explanation provided in the L4 annotation into a concise multiple-choice question that captures the most salient piece of evidence for the forgery.
Human Verification and Revision. After the LMM generates L3 and L4 annotations, these annotations undergo a thorough review by human annotators. The verification

You are an audio-video authenticity analysis expert. Your task is to analyze a {forgery type} audio-video clip and provide a clear, concise, and insightful explanation of its authenticity, focusing on the most critical and distinctive evidence rather than listing every minor detail. 1 Global Directives (must follow) G1 | Subject extraction
Begin by listing the top 1–3 subjects/events (e.g., wave & shoreline, two dogs running, road traffic, rotating beacon). Use these names consistently.
G2 | Evidence anchoring
Anchor every claim to timestamps (mm:ss) and visual regions (quadrant/area). For audio claims, provide the corresponding time. Use: Subject + time/region + phenomenon. G3 | Partial anomalies can be decisive
Synthesis may surface in only a few key symptoms. Do not try to fill a checklist—focus on the strongest, most specific evidence. G4 | Examples are patterns, not exhaustive
If new subjects appear (animals, factory siren, sports, weather), apply the same physical/semantic/temporal-consistency principles and name the subjects.
2 Three Analysis Pillars
I. Video: detect visual synthesis (within-frame + across-frames)
Select the most telling and locatable cues: Texture & edges: over-smooth skin/fur/foam/foliage; tiling or repeated micro-patterns; halos, color bleed, doubled contours; “sticker-like” elements drifting relative to scene. Lighting & shadows: light direction vs. shadow direction/length mismatch; contact shadows not hugging geometry; sky/ground brightness relation feels globally filtered. Materials & reflections: water highlights not evolving with shape/view; metal/glass/wet surfaces reflecting the w-
rong content or staying “locked” as the view changes.
Geometry/perspective/depth: inconsistent convergence of building/road lines; far objects oddly sharp/saturated; depth cues fluctuate between frames without cause. Temporal continuity: looped segments; pop-in/pop-out; melting/blocky patches through time; gait/vehicle path/crest advance that jumps phases. Text/symbols (if present): inconsistent letter shapes across frames, broken strokes, implausible spelling. Reflections/occlusion/interaction (if present): mirror/transparent surfaces with wrong par-
allax; contact/occlusion order that violates scene logic.
II. Audio: detect audio synthesis (listening; semantics & timing)
Focus on what you can hear, emphasizing semantics and temporal continuity: Soundscape–visual mismatch: sounds with no visible cause (e.g., steady siren with no beacon, engine idle with no vehicle), or missing sounds for salient visible events. Temporal discontinuities: audible cut points (sudden silence, hard jump), unnatural resets, repeating chunks, or template-like loops. Event correspondence failures: breaking waves, impacts, landings, sharp turns without matching audible change—or audible bur-
sts with no visual trigger. Speech (if present): semantic or prosodic seams (spliced words/phrases), irregular pacing, emotional jumps, or misaligned mouth timing (heard vs. seen).
III. Cross-modal Consistency
Synthesis is revealed by aligning visible events with audible changes: Event-sound synchronization: Visible events (waves breaking, animals taking off and landing, vehicles starting/turning, police lights flashing) should be accompanied by audible changes at the same timeframe; absence or misalignment is suspicious. Motion-loudness relationship: Stronger visible motion is generally accompanied by more noticeable auditory changes; sequence and causality should be reasonable (e.g., post-action atten-
uation). Environmental and material logic: The auditory perception of indoor/outdoor, open/narrow, hard/wet surfaces should align with the image space. Camera movement and auditory perception: Zooming in/out or tracking/static shots correspond to the subjective auditory perception of approaching/removing; if they do not change with the image, it is suspicious. Multi-subject layering: When waves, vehicles, and pedestrians coexist, the audio should exhibit multiple rhythms rather than a single templ-
ate.
Figure 10. The prompt template used for generating L4 annotations for General Subject.
and revision process is designed to assess the plausibility, correctness, and clarity of the generated annotations.
Specifically, annotators check for: • Correctness. Annotators verify the accuracy of the

Based on the explainability content, construct one MCQ that tests the model’s ability to identify the most relevant forgery trace(s) for the declared subtype.
Question: What looks inauthentic in this audio-video clip?
Options:
A. There is nothing inauthentic in this clip.
B. (Visual: subject/time/region + concrete symptom) C. (Audio: subject/time + audible symptom) D. (Cross-modal: event–sound alignment failure with time) E. (Any axis, subject-anchored, time-anchored)
Rules:
Include exactly one correct option that captures the most salient anomaly in one modality (or a clear cross-modal mismatch pointing to it).
The other three must be plausible but wrong distractors.
After the options, explicitly state the correct answer(s), e.g.: Correct Answer(s): C or Correct Answer(s): B and D.
Figure 11. The prompt template used for generating L3 annotations from L4 annotations.
Both the video and audio appear to be synthesized. The person playing the guitar in the video looks very fake; when the camera moves, the person and the guitar seem like a pasted texture with no obvious changes. Also, the campfire looks like it’s just the same frame looping over and over, rather than actual burning flames. The audio sounds unnatural, like a repetitive mechanical noise, and there is some obvious static in the middle. Additionally, the visuals and sound don’t match up—the hand barel-
y moves yet there are strumming sounds, and the fire is burning but you don't hear any crackling.
Before manually revised annotation Synthesis Audio & Synthesis Video.
The video shows clear synthesis artifacts: The guitarist’s body and guitar specular highlight/wood grain remain virtually identical across frames (00:00.00, 00:01.42, 00:02.85, 00:04.29) despite small camera shifts, and the campfire exhibits repeated identical bright outlines and a persistent hotspot in the same pixel cluster across multiple samples (00:00.00 → 00:01.42 → 00:02.85 → 00:05.71) rather than continuously deforming flame geometry.
The audio is likewise synthetic: The audio exhibits almost identical pitch and tone every 0.4-0.6 seconds consistent with generation/codec artifacts rather than natural recording noise. Cross-modal checks reveal desynchronization: visible hand/arm positions change minimally between frames while the audio contains multiple distinct strum events in the same interval (notably around 00:01.42–00:04.29 and the 00:04.29 frame), and the visibly changing flames lack corresponding broadband crackling in th-
e audio.
Manually Revised Annotation
Figure 12. An example of human verification and revision.
forged details identified in the annotation. This includes verifying whether the detected forgery type is consistent with the given forgery type, and verifying whether the answer provided in L3 is correct. • Plausibility. Ensure that the LMM’s explanation of the forgery makes sense given the provided video and audio evidence. This includes confirming that the model’s rationale is consistent with the actual content and that no logical inconsistencies are present. • Clarity. Check that the generated-
 explanation is clear, concise, and easily understandable. This includes ensuring that the LMM’s rationale is well-structured and com
municates the key forgery details effectively. Fig. 12 shows an example of a manually revised annotation. The explanation originally generated by the LMM is rather vague, while the manually revised version provides a more precise description of the forged details.
B. Evaluation
B.1. Evaluation Metrics
For all objective questions (binary judgment, forgery type classification, and forgery detail selection), we report two metrics: Accuracy and macro-F1. Accuracy measures the

overall proportion of correctly answered questions, while macro-F1 evaluates the balance of performance across different classes by giving each class equal weight, which is particularly important under class imbalance.
Normalized Bias Index (NBI): To assess whether the evaluated models exhibit unintended bias when performing forgery-type classification, we adopt the Normalized Bias Index (NBI) to quantify performance asymmetry across different forgery categories. Specifically, for each forgery type, we measure the model’s recall on the correct option and on the other options, and compute the NBI as
NBI = Rcorrect − Rother
Rcorrect + Rother
∈ [−1, 1], (1)
where Rcorrect and Rother denote the recall rates for the correct option and other incorrect options. A positive and large NBI value indicates that the model tends to predict samples of that category as the correct option, while a negative and small NBI value indicates that the model tends to predict them incorrectly. By normalizing the recall difference, NBI provides a stable and comparable measure of type-specific prediction bias, enabling us to analyze whether the model systematically favors or-
 suppresses particular forgery types during classification. GPT-Score: For open-ended questions requiring explanatory analysis of audio–video forgeries, we employ a GPT-based evaluator to assess the quality of modelgenerated responses. The scoring process adheres to three criteria that together capture the correctness, relevance, and reliability of the model’s explanation. 1) Classification Accuracy. The evaluator first determines whether the predicted forgery combination matches the ground-truth -
label. For binary classification, any “Edit” or “Synthesis” state in either audio or video modality is mapped to the “Fake” category, while samples with both modalities labeled as “Real” are mapped to “Real.” For multi-class classification, partial correctness is considered, and the evaluator assigns a score based on the degree of alignment with the ground-truth forgery type. 2) Explainability Content Similarity. The evaluator compares the explanatory content in the model response against a human--
crafted reference rationale, assessing how well the model captures the core evidence relevant to the forgery. This criterion rewards responses that accurately reproduce the essential manipulation details, the affected regions, and the observable artifacts described in the reference answer. 3) Reasonableness of Explanatory Content. Beyond similarity, the evaluator examines whether the explanation is reasonable—that is, whether the model avoids incorrectly treating authentic regions as forged while -
still providing logically coherent justifications for the detected anomalies. If the overall identified region and the reasoning are plausible, even when formulated differently from the reference rationale, the explanation can be credited as correct.
B.2. Case Study
In this section, we present an analysis of AV-LLMs’ behavior on audio-video forgery detection tasks, with an emphasis on the instances where the model produced incorrect answers. Examining these failure cases is essential for revealing the model’s practical strengths and weaknesses. The insights gained from this analysis not only highlight current performance limitations but also inform future model development and training strategies.

Binary Judgment
Question:
(Video-LLaMA2) Response: (A)
You have been shown an audio-video clip. Is this clip entirely captured from the real physical world without any AI involvement? A. Yes B. No
Ground Truth: (A)
Figure 13. An example of Binary Judgment.

Forgery Types Classification
Question:
You have been shown an audio-video clip. This audio-video clip may have been captured from the real world, or it may have been generated or edited by an advanced AI model. Which category does this audio-video belong? A. Real Audio & Real Video B. Real Audio & Edit Video C. Real Audio & Synthesis Video D. Edit Audio & Real Video E. Edit Audio & Edit Video F. Synthesis Audio & Real Video G. Synthesis Audio & Synthesis Video
Ground Truth: (B)
(video-SALMONN) Response: (C)
Analysis: The model detects signs of forgery in the video but overlooks the fact that only the bird in the video exhibits unusual
features, such as a blurred head and high tail saturation, while the rest of the video appears real. Therefore, it incorrectly identifies the edited video as a synthesized video.
Figure 14. An example of Forgery Types Classification.

Forgery Detail Selection
Question:
You have been shown an audio-video clip. This audio-video clip may have been captured from the real world, or it may have been generated or edited by an advanced AI model. Please determine which of the following options is correct.
A. At 00:01.4–00:02.8 the speaker’s mouth is closed while loud speech is audible.
B. The left background briefly contains a person who disappears then reappears one frame later. C. The podium plaque contains duplicated lettering tiles. D. Between 00:02.0 and 00:02.2, the audio suddenly stops, and between approximately 00:03.5 and 00:08.5, a highly stable, repetitive, sharp tone appears. E. There is nothing inauthentic in this clip.
Ground Truth: (D)
(GPT-4o) Response: (E)
Analysis: The model lacks sufficient ability to perceive audio modalities and is completely unable to detect abnormal silences and repetitive pitches in the audio.
Figure 15. An example of Forgery Detail Selection.

Explanatory Reasoning
Question:
You have been shown an audio-video clip. This audio-video clip may have been captured from the real world, or it may have been generated or edited by an advanced AI model. Decide whether this clip is fully real, partially edited, or fully AI-generated. Then provide grounded forensic evidence about why.
Ground Truth: Synthesized Audio & Synthesized Video.
Video: Individual balcony point-lights that keep the same shapes/positions while their local contrast and edge definition jump abruptly between frames (notably between ~00:05.71 and ~00:07.12),
producing a stuttered pattern rather than natural lighting variation. The pianist's head is too smooth, and his profile lacked normal facial texture.
Audio: A strong broadband music/ambience is present from the start until about 00:05–00:06, then a near-total silence occurs from ~00:05.5–00:07.5, after which the signal resumes (~00:07.5–00:10) Critically, the pianist remains visually in performance posture at the piano across 00:05.71–00:07.12 while the soundtrack is silent.
(Gemini-2.5-Pro) Response: Real audio and real video. Video: Lighting/shadows: The lighting and shadows are consistent and realistic. For instance, in the frame at 00:07, the shadows cast by the pianist's fingers on the piano keys accurately reflect the direction of the overhead stage lighting. Geometry/depth: The perspective and depth of the scene are coherent. The receding lines of the stage and the arrangement of the audience in the background (visible at 00:01) adhere to proper geometric persp-
ective. Objects in the background are naturally less focused, indicating a realistic depth of field. Audio: The sequence of sounds—applause for the performer, a pause, and then the start of the music—is semantically correct for a concert performance. The sound of applause at the beginning directly corresponds to the visual of the audience clapping as the pianist walks on stage. The piano music begins shortly after the pianist is shown sitting at the keyboard with hands in position (00:0300:05), wh-
ich is a perfectly logical and natural timing.
Analysis:
In the video modality, the model fails to detect abrupt changes in background lighting and ignores issues such as overly smooth facial surfaces and a lack of detailed facial texture in the human. In the audio modality, the model fails to detect unusually long pauses and sudden audio fluctuations.
Figure 16. An example of Explanatory Reasoning.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:50.294Z
- **Text Length:** 89726 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 23 of 23
