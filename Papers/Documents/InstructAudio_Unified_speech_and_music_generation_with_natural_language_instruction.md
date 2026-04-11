# PDF Document: Qiang et al. - 2025 - InstructAudio Unified speech and music generation with natural language instruction.pdf

**File Path:** Qiang et al. - 2025 - InstructAudio Unified speech and music generation with natural language instruction.pdf

**Processed Date:** 2026-02-10T18:16:52.479Z

**File Size:** 592.53 KB

**Total Pages:** 5

**Extracted Pages:** 5

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3250

**Title:** InstructAudio: Unified speech and music generation with natural language instruction

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

INSTRUCTAUDIO: UNIFIED SPEECH AND MUSIC GENERATION WITH NATURAL LANGUAGE INSTRUCTION
Chunyu Qiang1,2, Kang Yin2, Xiaopeng Wang2, Yuzhe Liang2, Jiahui Zhao1, Ruibo Fu3, Tianrui Wang1, Cheng Gong1, Chen Zhang2, Longbiao Wang1, Jianwu Dang1
1 Tianjin University, Tianjin, China 2 Kuaishou Technology, Beijing, China 3 Institute of Automation, Chinese Academy of Sciences, Beijing, China
ABSTRACT
Text-to-speech (TTS) and text-to-music (TTM) models face significant limitations in instruction-based control. TTS systems usually depend on reference audio for timbre, offer only limited text-level attribute control, and rarely support dialogue generation. TTM systems are constrained by input conditioning requirements that depend on expert knowledge annotations. The high heterogeneity of these input control conditions makes them difficult to joint modeling with speech synthesis. Despite sharing c-
ommon acoustic modeling characteristics, these two tasks have long been developed independently, leaving open the challenge of achieving unified modeling through natural language instructions. We introduce InstructAudio, a unified framework that enables instruction-based (natural language descriptions) control of acoustic attributes including timbre (gender, age), paralinguistic (emotion, style, accent), and musical (genre, instrument, rhythm, atmosphere). It supports expressive speech, music, and-
 dialogue generation in English and Chinese. The model employs joint and single diffusion transformer layers with a standardized instruction-phoneme input format, trained on 50K hours of speech and 20K hours of music data, enabling multi-task learning and crossmodal alignment. Fig. 1 visualizes performance comparisons with mainstream TTS and TTM models, demonstrating that InstructAudio achieves optimal results on most metrics. To our best knowledge, InstructAudio represents the first instruction-c-
ontrolled framework unifying speech and music generation. Audio samples are available at: https://qiangchunyu.github.io/InstructAudio/
Index Terms— Unified Audio Generation, Natural Language Instruction, TTS, TTM
1. INTRODUCTION
Text-based controllable generation of speech and music is an important research topic in the field of audio generation. Recent developments in TTS [3–13] have achieved impressive results through zero-shot voice cloning and controllable generation. TTM [14–18] has advanced with models such as MusicGen [14] and ACE-Step [15], alongside commercial systems like Suno [16] and Udio [17]. Despite these advances, instruction-controlled speech and music generation remains a challenging problem in audio pro-
cessing. Existing TTS models excel at either zero-shot voice cloning [6, 8, 9, 19] or style control [20, 21], but lack text-based control over multiple acoustic attributes through natural language descriptions. For instance, while CosyVoice [8, 19] and ControlSpeech [20] support
†Corresponding Author.
• Note: All metrics normalized to [0,1] for comparative visualization. • WER metrics inverted (higher = better). • Zero values indicate unsupported capabilities.
Fig. 1: Comparing model capabilities across TTS and TTM tasks. The chart shows normalized performance on 13 metrics: SeedTTS-WER [1], TTS-Control, and SongEval [2]. InstructAudio (red line) uniquely supports all evaluation dimensions, demonstrating best performance in both TTS and TTM while providing comprehensive controllability across multiple attributes.
text-based emotion and style control, they require additional reference audio for timbre attributes and cannot handle text-controlled dialogue generation. Similarly, current TTM models exhibit limited control capabilities. DiffRhythm+ [18] supports text-based control of genre, instrument, rhythm, and atmosphere but lacks singer timbre control (e.g., gender and age). ACE-Step [15], one of the state-of-the-art (SOTA) open-source music generation model, provides text-based control for all acoustic at-
tributes but focuses exclusively on music without unified speech modeling capabilities. Speech and music generation are typically treated as separate tasks (TTS & TTM), overlooking their shared acoustic modeling abilities and control mechanisms. This separation stems from the difficulty of aligning inputs across TTS and TTM tasks, as speech control involves acoustic attributes such as timbre and paralinguistics, while music generation requires musical attributes such as genre, instrumentation, and-
 rhythm. Vevo2 [22] introduced the first unified speech and singing generation framework, demonstrating that joint modeling leverages rich speech data to improve singing quality while utilizing singing’s expressive characteristics to enhance TTS. However, Vevo2 relies on reference audio for acoustic attribute control rather than text instructions and generates only vocals without instrumental music capabilities. UniAudio [23] builds upon the VALL-E [6] framework to create a single model capable of-
 executing multiple tasks; however, it requires inconsistent input formats across different tasks and necessitates taskspecific fine-tuning. AudioBox [24], a flow-matching-based unified model supporting multiple tasks, pre-trains on speech, music, and sound effect data but ultimately supports only speech and sound effect
arXiv:2511.18487v1 [eess.AS] 23 Nov 2025

Phoneme Embedding
Gaussian Noise
Flow
Timestep t~ U[0,1)
Joint Diffusion Transformer
Input of Speech Synthesis
Instruct Description:
The first speaker (Speaker 0) has an elderly adult male voice with a neutral emotional tone. His timbre is clear and steady, without much expressive variation, and it carries the smooth, natural pronunciation of Mandarin Chinese. The second speaker (Speaker 1) also has a young adult male voice, but her timbre is brighter and more animated. With a happy and casual style, her voice conveys liveliness and friendliness, again shaped by the American accent.
Text:
[S0] 你好呀,今天天气怎么样? [S1] Hello! What a sunny day!
Instruct Description:
This is a pop ballad featuring a male vocalist in his 30s with a smooth, melodic tone. The instrumentation is centered around piano and strings, which weave together to create a soft, dreamy backdrop. The tempo is moderate, around 120 BPM, and the piece is set in F major. The overall mood carries a sense of nostalgia and longing, with the flowing piano lines and gentle harmonies evoking reflection and emotional warmth.
Lyrics:
[S0] Like you to see the things I hide.
Input of Music Generation
Text / Lyrics
Instruct Embedding
Instruct Description
+ Noise (Training)
Target Mel
Input Latent
VAE Latent
Instruct Encoder
Phoneme Encoder
Mel Encoder
Joint Diffusion Transformer
Single Diffusion Transformer
Joint Diffusion Transformer
C
...
ODE Solver
(Inference)
Mel Decoder
L "#$%
Frozen Inference Only Training Only Train/Infer
✖N1
N2
NFE = k
Speech / Song
Fig. 2: InstructAudio achieves unified generation of both speech and music through an MM-DiT architecture. This framework enables multi-attribute control through natural language instructions. The input format remains consistent across different tasks, comprising a natural language instruction description along with corresponding text or lyrics. Audio is represented using continuous latents extracted from a pre-trained Mel-VAE. During inference, the VAE latent of the target speech or music is obta-
ined through an ODE solver.
generation. AudioLDM 2 [25] proposes a two-stage model applicable to speech, sound, and music generation, yet requires different model architecture hyperparameters for each task. Current approaches lack text-based (natural language descriptions) control mechanisms, limiting their ability to achieve unified speech and music generation. To address these limitations, we propose InstructAudio, an instructioncontrolled unified framework for speech and music generation. Our method makes three key contri-
butions: a) We introduce a joint modeling framework for speech and music generation based on a multimodal diffusion transformer (MM-DiT) architecture. b) We achieve unified text-based control over TTS and TTM through natural language descriptions (a standardized instruction-phoneme input format), encompassing timbre attributes (gender, age), paralinguistic attributes (emotion, style, accent), and musical attributes (genre, instrument, rhythm, atmosphere), while supporting dialogue speech generatio-
n. c) Experimental results demonstrate best performance in instruction-based TTS (best WER, speaker similarity, emotion similarity, classification control accuracy, and distortion/error metrics) while maintaining competitive TTM capabilities (best SongEval metrics), validating the effectiveness of our unified approach.
2. METHOD
2.1. Overview
As illustrated in Fig. 2, InstructAudio introduces a novel approach for unified speech and music generation, drawing inspiration from MM-Audio [26] through its MM-DiT architecture. The model comprises two core components: joint diffusion transformer layers and single diffusion transformer layers. During training, the instruct encoder, mel-encoder, and mel-decoder remain frozen as pretrained
modules. The first-layer joint diffusion transformer takes temporally concatenated instruct embedding and phoneme embedding as text modal conditioning input, and noised mel vae latents as audio modal input (see Section 2.4). Unlike existing non-autoregressive architectures [9, 11, 12], InstructAudio eliminates the need for textupsampling alignment with audio representations. For TTS, the model achieves multi-attribute control, including gender, age, emotion, style, and accent, through natural lang-
uage instructions, and also supports two-speaker dialogue generation. In TTM, it similarly enables multi-attribute control covering singer timbre (e.g., gender and age), music genre, instrumentation, melody, and emotional expression.
2.2. Unified Instruction-Guided Input
To enable the unified generation of speech and singing, we designed a standardized instruction-phoneme input format that aligns both tasks, as illustrated in Fig. 2. This format consists of two primary components: an instruction description and a phoneme sequence. The instruction description is a natural language prompt specifying the desired acoustic attributes of the output. For speech synthesis, these attributes include speaker characteristics such as gender, age, emotion, style, and accent. In-
 dialogue scenarios, we provide separate descriptions for each of the two speakers and prepend special tokens, [S0] and [S1], to their respective text inputs to differentiate the utterances. Similarly, for music generation, the description specifies attributes like the singer’s gender and age, music genre, instrumentation, melody, and emotion. For both tasks, the input text (for speech) or lyrics (for music) is converted into phonemes using a Graphemeto-Phoneme (G2P) [27] model. This unified repre-
sentation allows a single model to seamlessly process input for both speech and music

generation.
2.3. Latent Audio Codec
The Latent Audio Codec extends our previous SecoustiCodec framework [28–30] and comprises three core components: a mel-encoder, mel-decoder, and discriminator. The VAE architecture enables the model to learn continuous and complete distributions in the latent space, significantly enhancing audio representation capabilities. This high compression ratio facilitates efficient MM-DiT training while improving reconstruction quality for both speech and music. Due to space constraints, we omit the analys-
is of audio representation effects from this work. For comprehensive results, readers are referred to Section 4.5 of our prior work on Kling-Foley [31].
2.4. Multimodal Diffusion Transformer Architecture
We employ conditional flow matching [32] with an MM-DiT architecture based on Stable Diffusion 3 [33], comprising N2 Joint Diffusion Transformer layers. To enhance speech and singing voice generation quality, we incorporate N1 additional Single Diffusion Transformer layers for audio-only processing. The input instruction embeddings ∈ RB×L1×D and phoneme embeddings ∈ RB×L2×D are temporally concatenated to form the text modality input Ctext ∈ RB×(L1+L2)×D. The linear interpolation path xt between Ga-
ussian noise and VAE latents serves as the audio modality input. The two modalities interact through joint attention, where queries, keys, and values from both modalities are concatenated and processed using scaled dot-product attention. The output maintains input dimensionality and is split back into respective modalities. In Single Diffusion Transformer layers, only audio latents are processed, reducing joint attention to self-attention. During training, flow matching optimizes the objective: E -
vθ(t, Ctext, xt) − u(t, xt) 2 where vθ represents the learned conditional velocity field, u denotes the target conditional vector field, and t is the time step. During inference, an ODE solver generates the target VAE latents.
3. EXPERIMENTS
3.1. Model Details and Datasets
InstructAudio comprises 1.34 billion parameters with a flow matching feedforward dimension of 1024. The architecture includes 14 joint diffusion transformer layers and 6 single diffusion transformer layers, incorporating RoPE positional encoding [34]. We employ a Zipformer-based [11] phoneme encoder with a feedforward dimension of 512 and utilize Qwen2.5-7B [35] as the instruct encoder. The mel encoder processes 44.1kHz input waveforms and generates embeddings at 43 Hz, achieving 1024× downsamplin-
g relative to the input sampling rate. Training is conducted on 32 NVIDIA Tesla A800 80GB GPUs with a batch size of 16 per GPU, using the Adam optimizer [36] with an initial learning rate of 1e-4. We collect 50K hours of speech and 20K hours of music data from internet sources, applying our internal data processing pipeline to generate instruction descriptions and text/lyrics annotations. For speech data, descriptions encompass gender, age, emotion, style, and accent attributes. Music data descrip-
tions include genre, instrument, gender, age, rhythm, and atmosphere characteristics. Audio clips (220s) maintain 1:1 Chinese-English and male-female ratios, with 90%+ neutral emotions and 0.5% dialogue data, standardized to 44.1kHz sampling rate.
Table 1: Comparison of TTS models on instruction control and word error rate performance.
Model Data(hrs) Params Text-Control WER(%)↓ [1]
G&A E&S&A Dial EN ZH
Ground Truth – – – – – 2.14 1.25 MaskGCT [37] 100K Speech 1B ✗ ✗ ✗ 2.26 2.40 E2-TTS [12] 100K Speech 333M ✗ ✗ ✗ 2.49 1.91 F5-TTS [9] 100K Speech 336M ✗ ✗ ✗ 1.89 1.53 ZipVoice [11] 100K Speech 123M ✗ ✗ ✗ 1.70 1.40 CosyVoice1 [19] 170K Speech 416M ✗ ✓ ✗ 4.29 3.63 CosyVoice2 [8] 167K Speech 618M ✗ ✓ ✗ 2.57 1.45
InstructAudio 50K Speech
+ 20K Music 1.3B ✓ ✓ ✓ 1.52 1.35
Note: G&A = Gender&Age, E&S&A = Emotion&Style&Accent, Dial = Dialog.
3.2. Compared Method and Evaluation Metrics
To evaluate our model’s unified speech and music generation capabilities, we compare against SOTA models in each task. For TTS, we benchmark fundamental capabilities against MaskGCT [37], E2-TTS [12], F5-TTS [9], ZipVoice [11], CosyVoice1 [19], and CosyVoice2 [8] (Table 1), and instruction-based TTS performance against the current SOTA model CosyVoice2 (Table 2). Notably, since InstructAudio is a purely instruction-controlled model while the Seed-TTS benchmark comprises natural emotional speech sa-
mples, we evaluate WER metrics using natural, calm-style text descriptions with randomized speakers as control conditions. For CosyVoice2, which lacks text-based control for timbre attributes (gender, age), we provide reference audio that matches timbre description during inference and map inputs to its supported short-form control text (e.g., "Please speak very happy"). For music generation, we compare with DiffRhythm+ [18] and ACE-Step [15] (Table 3). Note that DiffRhythm+ does not support music-
 synthesis under 90 seconds; therefore, we generate longer sequences and truncate them to create test samples, which may introduce evaluation bias. We employ comprehensive objective and subjective metrics to ensure thorough evaluation. Objective metrics include Word Error Rate (WER) using Seed-TTS [1], Speaker Similarity1, Emotion Similarity2, Log-Spectral Distance (LSD), Mel-Cepstral Distortion (MCD), Mean Squared Error of Pitch (MSEP), Voiced/Unvoiced Mismatch Rate (MR), SongEval [2] music evalu-
ation benchmark, and classification control accuracy through perceptual consistency assessment. Subjective evaluation employs Quality Mean Opinion Score (QMOS), Naturalness Mean Opinion Score (NMOS), and Musicality Mean Opinion Score (MMOS), conducted by professionally trained evaluators. Classification control accuracy is evaluated through human listening tests, where annotators select the perceptually consistent category from predefined options (e.g., choosing among "child," "young/middle-aged,"-
 or "elderly" for age attributes). For WER evaluation, we utilize the complete Seed-TTS benchmark test set. For instruction-based TTS tasks, we construct a manually annotated test set of 500 samples with natural language descriptions covering multiple attributes (gender, age, emotion, style, accent), selecting 100 samples for subjective evaluation. Similarly, for music tasks, we create a 500-sample test set with natural language descriptions of musical attributes (gender, age, genre, instrumentati-
on, melody, emotion), with 100 samples selected for subjective evaluation. The distribution across categories within each attribute is uniform. Notably, InstructAudio’s conditioning input consists of descriptive text corresponding to ground truth, with similarity and distortion/error calculations performed against ground truth.
1https://github.com/resemble-ai/Resemblyzer 2https://huggingface.co/emotion2vec

Table 2: Performance comparison of instruction-based TTS on control accuracy, similarity, distortion/error metrics, and subjective evaluation.
Model Classification Control Accuracy Rate (%)↑ Similarity↑ Distortion/Error ↓ MOS↑
Gender Age Emotion Style Accent Dialog Speaker Emotion LSD MCD MSEP MR QMOS NMOS
Ground Truth 100.00 100.00 100.00 100.00 100.00 100.00 1.00 1.00 0.00 0.00 0.00 0.00 – CosyVoice2 [8] – – 58.33 65.00 100.00 – 0.68 0.53 2.57 7.11 547.87 0.46 3.90 ± 0.11 3.65 ± 0.22 InstructAudio 100.00 86.67 83.33 86.67 100.00 90.00 0.76 0.71 1.88 5.71 437.58 0.33 3.73 ± 0.24 3.46 ± 0.32
Table 3: Performance comparison of TTM on control accuracy, SongEval, and subjective evaluation.
Model Data(hrs) Params Classification Control Accuracy Rate (%)↑ SongEval↑ [2] MOS↑
Genre Instrument Gender Age Rhythm Atmosphere Coh Mus Mem Cla Nat QMOS MMOS
Ground Truth – – 100.00 100.00 100.00 100.00 100.00 100.00 3.60 3.52 3.56 3.43 3.34 – DiffRhythm+ [18] 120K Music 1B 51.33 81.67 22.22 44.44 93.33 87.22 2.68 2.61 2.57 2.48 2.37 3.04 ± 0.46 2.79 ± 0.54 ACE-Step [15] 100K Music 3B 94.44 85.56 96.11 95.00 89.44 90.56 2.89 2.87 2.83 2.77 2.71 3.30 ± 0.28 2.88 ± 0.20
InstructAudio 50K Speech
+ 20K Music 1.3B 92.78 83.89 98.89 97.22 94.44 95.00 3.08 2.98 3.00 2.89 2.82 2.82 ± 0.26 2.91 ± 0.35
Note: Coh = Coherence, Mus = Musicality, Mem = Memorability, Cla = Clarity, Nat = Naturalness.
3.3. Results and Analysis
Evaluation of TTS: Table 1 compares InstructAudio with mainstream TTS models. MaskGCT, E2-TTS, F5-TTS, and ZipVoice do not support text-based control capabilities. CosyVoice1 and CosyVoice2 only support emotion, style, and accent control, requiring additional prompt speech for timbre control. In contrast, InstructAudio supports comprehensive text-based control including gender, age, emotion, style, and accent, while uniquely enabling text-controlled dialogue synthesis (a capability absent in other-
 models). Although InstructAudio has the largest parameter count (1.3B) among TTS models, it additionally supports music generation. As shown in Table 3, mainstream music generation models like DiffRhythm+ and ACEStep also exceed 1B parameters. Notably, InstructAudio achieves superior performance with the smallest training dataset. On the Seed-TTS WER metric, InstructAudio achieves the best results when conditioned on neutral emotion and calm style text control. Control Capability: Table 2 evaluat-
es text-based control TTS capabilities by comparing against CosyVoice2, the current SOTA model. For classification control accuracy, InstructAudio supports gender, age, and dialogue control capabilities unavailable in CosyVoice2 (while outperforming CosyVoice2 across all control categories). InstructAudio achieves precise dialogue synthesis control, attaining 90% accuracy in a capability that other models lack entirely. InstructAudio also demonstrates superior speaker and emotion similarity. This -
advantage stems from CosyVoice2’s reliance on additional prompt speech (random speaker audio with matching gender and age) for timbre control, which causes emotion leakage that compromises emotion control effectiveness. InstructAudio outperforms CosyVoice2 across all distortion and error metrics. While CosyVoice2 achieves a higher MOS score, it notably requires reference audio as input conditioning. Text-only control introduces TTS one-to-many mapping ambiguity, reducing average audio quality and -
naturalness for InstructAudio outputs. However, InstructAudio achieves comparable MOS results despite the unfair disadvantage of missing input modality, while comprehensively outperforming CosyVoice2 on all other metrics. Evaluation of TTM: Table 3 evaluates music generation capabilities against current SOTA models ACE-Step and DiffRhythm+. For classification control accuracy, ACE-Step achieves the best performance in genre and instrument categories, while InstructAudio excels in gender, age, rhyt-
hm, and atmosphere control. DiffRhythm+ scores poorly on gender and age due to its lack of singer timbre control capabilities. InstructAudio achieves the best SongEval scores across all metrics. ACE-Step obtains the highest QMOS score, indicating
superior perceived audio quality, while InstructAudio achieves the best MMOS score. We acknowledge that our music evaluation uses 520 second clips matching speech durations, which may disadvantage models like ACE-Step and DiffRhythm+ that are optimized for longer music generation. This comparison demonstrates that InstructAudio maintains competitive music generation capabilities while achieving SOTA text-based control TTS performance.
3.4. Discussion
While the text-only control mechanism achieves unified input formatting for TTS and TTM tasks, it introduces inherent information loss compared to audio modalities, resulting in one-to-many mapping ambiguity. This leads to averaged audio quality and naturalness compared to reference audio-based methods, as evidenced by lower NMOS scores in both TTS and TTM tasks. Additionally, to enable joint speech-music modeling, we constrain music generation to 520 second clips, limiting long-form music generat-
ion capabilities. Our evaluation focuses on short segments to match speech durations, which is detrimental to models like DiffRhythm+ that are optimized for full-length music generation. These limitations above, we expect to address in future work.
4. CONCLUSIONS AND FUTURE WORK
This paper presents InstructAudio, an instruction-controlled unified framework for speech and music generation based on a MM-DiT architecture, demonstrating the effectiveness of joint TTS and TTM modeling. Our main contributions include: (1) introducing the first instruction-controlled unified framework for speech and music generation that eliminates reference audio requirements in attribute control; (2) achieving comprehensive controllability over timbre, paralinguistic, and musical attributes th-
rough standardized instruction-phoneme input formatting (natural language descriptions); and (3) demonstrating SOTA performance in instruction-based TTS while maintaining competitive music generation capabilities. Experimental validation confirms our approach’s effectiveness, achieving optimal results across multiple metrics including WER, similarity measures, and classification control accuracy. InstructAudio demonstrates the viability of unified audio generation frameworks. Future work will expl-
ore multimodal control mechanisms to address quality and naturalness issues, support longer music generation, and incorporate sound effect generation.

5. REFERENCES
[1] Philip Anastassiou, Jiawei Chen, Jitong Chen, Yuanzhe Chen, Zhuo Chen, Ziyi Chen, Jian Cong, Lelai Deng, Chuang Ding, Lu Gao, et al., “Seed-tts: A family of high-quality versatile speech generation models,” arXiv preprint arXiv:2406.02430, 2024.
[2] Jixun Yao, Guobin Ma, Huixin Xue, Huakang Chen, Chunbo Hao, Yuepeng Jiang, Haohe Liu, Ruibin Yuan, Jin Xu, Wei Xue, et al., “Songeval: A benchmark dataset for song aesthetics evaluation,” arXiv preprint arXiv:2505.10793, 2025.
[3] Ziqiang Zhang, Long Zhou, Chengyi Wang, Sanyuan Chen, Yu Wu, Shujie Liu, Zhuo Chen, Yanqing Liu, Huaming Wang, Jinyu Li, et al., “Speak foreign languages with your own voice: Cross-lingual neural codec language modeling,” arXiv preprint arXiv:2303.03926, 2023.
[4] Eugene Kharitonov, Damien Vincent, Zalán Borsos, Raphaël Marinier, Sertan Girgin, Olivier Pietquin, Matt Sharifi, Marco Tagliasacchi, and Neil Zeghidour, “Speak, read and prompt: High-fidelity text-to-speech with minimal supervision,” arXiv preprint arXiv:2302.03540, 2023.
[5] Chunyu Qiang, Hao Li, Hao Ni, He Qu, Ruibo Fu, Tao Wang, Longbiao Wang, and Jianwu Dang, “Minimally-supervised speech synthesis with conditional diffusion model and language model: A comparative study of semantic coding,” in ICASSP 2024-2024 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP). IEEE, 2024, pp. 10186–10190.
[6] Chengyi Wang, Sanyuan Chen, Yu Wu, Ziqiang Zhang, Long Zhou, Shujie Liu, Zhuo Chen, Yanqing Liu, Huaming Wang, Jinyu Li, et al., “Neural codec language models are zero-shot text to speech synthesizers,” arXiv preprint arXiv:2301.02111, 2023.
[7] Chunyu Qiang, Hao Li, Yixin Tian, Yi Zhao, Ying Zhang, Longbiao Wang, and Jianwu Dang, “High-fidelity speech synthesis with minimal supervision: All using diffusion models,” in ICASSP 2024-2024 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP). IEEE, 2024, pp. 10781–10785.
[8] Zhihao Du, Yuxuan Wang, Qian Chen, Xian Shi, Xiang Lv, Tianyu Zhao, Zhifu Gao, Yexin Yang, Changfeng Gao, Hui Wang, et al., “Cosyvoice 2: Scalable streaming speech synthesis with large language models,” arXiv preprint arXiv:2412.10117, 2024.
[9] Yushen Chen, Zhikang Niu, Ziyang Ma, Keqi Deng, Chunhui Wang, Jian Zhao, Kai Yu, and Xie Chen, “F5-tts: A fairytaler that fakes fluent and faithful speech with flow matching,” arXiv preprint arXiv:2410.06885, 2024.
[10] Shuchen Shi, Ruibo Fu, and et al, “PPPR: Portable Plug-in Prompt Refiner for Text to Audio Generation,” in Interspeech 2024, 2024, pp. 4898–4902.
[11] Han Zhu, Wei Kang, Zengwei Yao, Liyong Guo, Fangjun Kuang, Zhaoqing Li, Weiji Zhuang, Long Lin, and Daniel Povey, “Zipvoice: Fast and high-quality zero-shot text-to-speech with flow matching,” arXiv preprint arXiv:2506.13053, 2025.
[12] Sefik Emre Eskimez, Xiaofei Wang, Manthan Thakker, Canrun Li, Chung-Hsien Tsai, Zhen Xiao, Hemin Yang, Zirun Zhu, Min Tang, Xu Tan, et al., “E2 tts: Embarrassingly easy fully non-autoregressive zero-shot tts,” in 2024 IEEE Spoken Language Technology Workshop (SLT). IEEE, 2024, pp. 682–689.
[13] Xin Qi, Ruibo Fu, and et al, “Dpi-tts: Directional patch interaction for fastconverging and style temporal modeling in text-to-speech,” in ICASSP 2025 2025 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), 2025, pp. 1–5.
[14] Jade Copet, Felix Kreuk, Itai Gat, Tal Remez, David Kant, Gabriel Synnaeve, Yossi Adi, and Alexandre Défossez, “Simple and controllable music generation,” Advances in Neural Information Processing Systems, vol. 36, pp. 47704–47720, 2023.
[15] Junmin Gong, Sean Zhao, Sen Wang, Shengyuan Xu, and Joe Guo, “Acestep: A step towards music generation foundation model,” arXiv preprint arXiv:2506.00045, 2025.
[16] Suno AI, “Suno: Ai music generation platform,” https://suno.com, 2024.
[17] Udio AI, “Udio: Ai music creation platform,” https://udio.com, 2024.
[18] Huakang Chen, Yuepeng Jiang, Guobin Ma, Chunbo Hao, Shuai Wang, Jixun Yao, Ziqian Ning, Meng Meng, Jian Luan, and Lei Xie, “Diffrhythm+: Controllable and flexible full-length song generation with preference optimization,” arXiv preprint arXiv:2507.12890, 2025.
[19] Zhihao Du, Qian Chen, Shiliang Zhang, Kai Hu, Heng Lu, Yexin Yang, Hangrui Hu, Siqi Zheng, Yue Gu, Ziyang Ma, et al., “Cosyvoice: A scalable multilingual zero-shot text-to-speech synthesizer based on supervised semantic tokens,” arXiv preprint arXiv:2407.05407, 2024.
[20] Shengpeng Ji, Jialong Zuo, Wen Wang, Minghui Fang, Siqi Zheng, Qian Chen, Ziyue Jiang, Hai Huang, Zehan Wang, Xize Cheng, et al., “Controlspeech: Towards simultaneous zero-shot speaker cloning and zero-shot language style control with decoupled codec,” arXiv preprint arXiv:2406.01205, 2024.
[21] Zhifang Guo, Yichong Leng, Yihan Wu, Sheng Zhao, and Xu Tan, “Prompttts: Controllable text-to-speech with text descriptions,” in ICASSP 2023-2023 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP). IEEE, 2023, pp. 1–5.
[22] Xueyao Zhang, Junan Zhang, Yuancheng Wang, Chaoren Wang, Yuanzhe Chen, Dongya Jia, Zhuo Chen, and Zhizheng Wu, “Vevo2: Bridging controllable speech and singing voice generation via unified prosody learning,” arXiv preprint arXiv:2508.16332, 2025.
[23] Dongchao Yang, Jinchuan Tian, Xu Tan, Rongjie Huang, Songxiang Liu, Xuankai Chang, Jiatong Shi, Sheng Zhao, Jiang Bian, Xixin Wu, et al., “Uniaudio: An audio foundation model toward universal audio generation,” arXiv preprint arXiv:2310.00704, 2023.
[24] Apoorv Vyas, Bowen Shi, Matthew Le, Andros Tjandra, Yi-Chiao Wu, Baishan Guo, Jiemin Zhang, Xinyue Zhang, Robert Adkins, William Ngan, et al., “Audiobox: Unified audio generation with natural language prompts,” arXiv preprint arXiv:2312.15821, 2023.
[25] Haohe Liu, Yi Yuan, Xubo Liu, Xinhao Mei, Qiuqiang Kong, Qiao Tian, Yuping Wang, Wenwu Wang, Yuxuan Wang, and Mark D Plumbley, “Audioldm 2: Learning holistic audio generation with self-supervised pretraining,” IEEE/ACM Transactions on Audio, Speech, and Language Processing, vol. 32, pp. 2871–2883, 2024.
[26] Ho Kei Cheng, Masato Ishii, Akio Hayakawa, Takashi Shibuya, Alexander Schwing, and Yuki Mitsufuji, “Mmaudio: Taming multimodal joint training for high-quality video-to-audio synthesis,” in Proceedings of the Computer Vision and Pattern Recognition Conference, 2025, pp. 28901–28911.
[27] Chunyu Qiang, Peng Yang, Hao Che, Jinba Xiao, Xiaorui Wang, and Zhongyuan Wang, “Back-translation-style data augmentation for mandarin chinese polyphone disambiguation,” in 2022 Asia-Pacific Signal and Information Processing Association Annual Summit and Conference (APSIPA ASC). IEEE, 2022, pp. 1915–1919.
[28] Chunyu Qiang, Haoyu Wang, Cheng Gong, Tianrui Wang, Ruibo Fu, Tao Wang, Ruilong Chen, Jiangyan Yi, Zhengqi Wen, Chen Zhang, et al., “Secousticodec: Cross-modal aligned streaming single-codecbook speech codec,” arXiv preprint arXiv:2508.02849, 2025.
[29] Chunyu Qiang, Wang Geng, Yi Zhao, Ruibo Fu, Tao Wang, Cheng Gong, Tianrui Wang, Qiuyu Liu, Jiangyan Yi, Zhengqi Wen, et al., “Vq-ctap: Cross-modal fine-grained sequence representation learning for speech processing,” IEEE Transactions on Audio, Speech and Language Processing, 2025.
[30] Chunyu Qiang, Hao Li, Yixin Tian, Ruibo Fu, Tao Wang, Longbiao Wang, and Jianwu Dang, “Learning speech representation from contrastive token-acoustic pretraining,” in ICASSP 2024-2024 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP). IEEE, 2024, pp. 10196–10200.
[31] Jun Wang, Xijuan Zeng, Chunyu Qiang, Ruilong Chen, Shiyao Wang, Le Wang, Wangjing Zhou, Pengfei Cai, Jiahui Zhao, Nan Li, et al., “Kling-foley: Multimodal diffusion transformer for high-quality video-to-audio generation,” arXiv preprint arXiv:2506.19774, 2025.
[32] Yaron Lipman, Ricky TQ Chen, Heli Ben-Hamu, Maximilian Nickel, and Matt Le, “Flow matching for generative modeling,” arXiv preprint arXiv:2210.02747, 2022.
[33] Patrick Esser, Sumith Kulal, Andreas Blattmann, Rahim Entezari, Jonas Müller, Harry Saini, Yam Levi, Dominik Lorenz, Axel Sauer, Frederic Boesel, et al., “Scaling rectified flow transformers for high-resolution image synthesis,” in Fortyfirst international conference on machine learning, 2024.
[34] Jianlin Su, Murtadha Ahmed, Yu Lu, Shengfeng Pan, Wen Bo, and Yunfeng Liu, “Roformer: Enhanced transformer with rotary position embedding,” Neurocomputing, vol. 568, pp. 127063, 2024.
[35] An Yang, Baosong Yang, Beichen Zhang, Binyuan Hui, and et al. Bo Zheng, “Qwen2.5:technical report,” 2025.
[36] Diederik P. Kingma and Jimmy Ba, “Adam: A method for stochastic optimization,” CoRR, vol. abs/1412.6980, 2014.
[37] Yuancheng Wang, Haoyue Zhan, Liwei Liu, Ruihong Zeng, Haotian Guo, Jiachen Zheng, Qiang Zhang, Xueyao Zhang, Shunsi Zhang, and Zhizheng Wu, “Maskgct: Zero-shot text-to-speech with masked generative codec transformer,” arXiv preprint arXiv:2409.00750, 2024.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:52.479Z
- **Text Length:** 33329 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 5 of 5
