# PDF Document: Hu et al. - 2025 - Harmony Harmonizing Audio and Video Generation through Cross-Task Synergy.pdf

**File Path:** Hu et al. - 2025 - Harmony Harmonizing Audio and Video Generation through Cross-Task Synergy.pdf

**Processed Date:** 2026-02-10T18:14:04.020Z

**File Size:** 27441.60 KB

**Total Pages:** 21

**Extracted Pages:** 21

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3798

**Title:** Harmony: Harmonizing Audio and Video Generation through Cross-Task Synergy

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Harmony: Harmonizing Audio and Video Generation
through Cross-Task Synergy
Teng Hu1* Zhentao Yu2* Guozhen Zhang2 Zihan Su1 Zhengguang Zhou2 Youliang Zhang2 Yuan Zhou2 Qinglin Lu2 Ran Yi1† 1Shanghai Jiao Tong University 2Tencent Hunyuan
Project page: https://sjtuplayer.github.io/projects/Harmony
Diverse Style Voice Cloning Music Generation
Human-Speech Joint Generation Environment Sound Joint Generation
Audio-Driven Video Generation Video-Driven Audio Generation
Ref Audio
Figure 1. Harmony employs a cross-task synergy training strategy to achieve robust audio-visual synchronization. This versatile framework supports multiple generation paradigms, including joint audio-video synthesis as well as audio-driven and video-driven generation, while also demonstrating strong generalizability to diverse audio types (e.g., music) and visual styles.
Abstract
The synthesis of synchronized audio-visual content is a key challenge in generative AI, with open-source models facing challenges in robust audio-video alignment. Our analysis reveals that this issue is rooted in three fundamental challenges of the joint diffusion process: (1) Correspondence Drift, where concurrently evolving noisy latents impede stable learning of alignment; (2) inefficient global attention mechanisms that fail to capture fine-grained temporal cues; and (3) the intra-modal bias o-
f conventional Classifier-Free Guidance (CFG), which enhances conditionality but not cross-modal synchronization. To overcome
* Equal Contribution. † Corresponding author.
these challenges, we introduce Harmony, a novel framework that mechanistically enforces audio-visual synchronization. We first propose a Cross-Task Synergy training paradigm to mitigate drift by leveraging strong supervisory signals from audio-driven video and video-driven audio generation tasks. Then, we design a Global-Local Decoupled Interaction Module for efficient and precise temporal-style alignment. Finally, we present a novel Synchronization-Enhanced CFG (SyncCFG) that explicitly isolates -
and amplifies the alignment signal during inference. Extensive experiments demonstrate that Harmony establishes a new state-of-the-art, significantly outperforming existing methods in both generation fidelity and, critically, in achieving fine-grained audio-visual synchronization.
arXiv:2511.21579v1 [cs.CV] 26 Nov 2025

1. Introduction
The unified synthesis of audio and video represents a pivotal frontier in contemporary generative AI, with profound implications for content creation, digital avatars, and immersive virtual worlds. Industry-leading proprietary models, such as Veo 3 [8] and Sora 2 [37], have set a high benchmark, delivering outputs with remarkable fidelity and demonstrating substantial practical utility. However, a significant gap persists between these closed-source systems and the capabilities of existing open-so-
urce methods [5, 38, 43]. A fundamental challenge, in particular, remains largely unsolved in the open-source community: achieving precise and harmonious audio-visual alignment. While recent open-source models have made strides in generation quality, they often struggle with robust audiovisual synchronization. Recent explorations into end-to-end joint audio-video generation [14, 26, 34, 35, 42, 50] underscore this limitation. Specifically, these methods often exhibit specialized limitations: many -
are confined to generating ambient sounds and fail to synthesize natural human speech [14, 26, 34, 42]; while others, such as JAMFlow [30], focus solely on speech generation but lack the capability to generate environmental sounds. Even among more general models, Ovi [35] exhibits deficiencies in robust alignment, while UniVerse-1 [50] suffers from poor audio-video synchronization. Table 1 presents a capability comparison. These shortcomings reveal a critical gap in current research: few methods i-
nvestigate the root causes of audio-video misalignment from a methodological standpoint. Consequently, there remains a lack of highly generalizable and well-aligned audio-video joint generation methods. This leaves a significant void in the open-source landscape for a unified framework capable of generating a comprehensive audio spectrum—from ambient sounds to human speech—while maintaining precise audio-visual harmony. In this work, we posit that the difficulty in achieving robust synchronization-
 stems from three fundamental challenges inherent to the joint diffusion process. (1) During joint generation, both modalities are progressively denoised from pure noise. In the early, highly stochastic stages, attempting to align two concurrently evolving, highly noisy latents causes a phenomenon we term Correspondence Drift, where the optimal mapping continuously shifts, impeding stable learning. (2) Audio-visual synchronization presents a fundamental architectural tension between two competing -
objectives: precise, frame-level temporal alignment (e.g., lip movements) and holistic, global style consistency (e.g., emotional tone). Existing designs, often relying on a single, monolithic mechanism like global cross-attention, conflate these distinct goals, forcing the model into a suboptimal trade-off where neither objective is fully achieved. (3) Conventional Classifier-Free Guidance (CFG) [16] operates by amplifying conditioning sig
Table 1. Comparison of capabilities among existing joint audiovideo generation models. We evaluate their ability to generate different sound types and the quality of their temporal alignment with the video. (✓: Good, ❍: Fair/Limited, ✗: Poor/Unsupported)
Model Human
Speech
Environmental Sound
Speech-Video Alignment
Sound-Video Alignment
MM-Diffusion [42] ✗ ❍ ✗ ❍ JavisDiT [34] ✗ ❍ ✗ ❍ AnimateSI [52] ✗ ❍ ✗ ❍ JAM-Flow [30] ✓ ✗ ✓ ✗ UniVerse-1 [50] ✓ ✓ ✗ ❍ Ovi [35] ✓ ✓ ❍ ❍
Harmony (Ours) ✓ ✓ ✓ ✓
nals for each modality in isolation. Consequently, it does not inherently promote or enhance the crucial cross-modal correspondence between the generated audio and video. To overcome these challenges, we propose Harmony, a novel joint audio-video generation framework designed to generate highly synchronized audio-video content with cross-task synergy. Harmony’s design is centered on three core innovations, each targeting one of the aforementioned challenges. To mitigate Correspondence Drift, we em-
ploy a Cross-Task Synergy training paradigm, co-training the joint generation task with auxiliary audio-driven video and video-driven audio generation tasks to leverage the latter’s strong supervisory signal for instilling robust alignment priors. To resolve the conflation of local and global synchronization objectives, we further propose a Global-Local Decoupled Interaction Module that ensures both holistic style consistency and precise temporal synchronization through the decoupled global style -
attention and localized, RoPE-aligned frame-wise attention. Finally, to address the fact that conventional CFG lacks a mechanism for enhancing audio-visual alignment, we propose SynchronizationEnhanced CFG (SyncCFG). This novel technique redefines the negative condition learned from the cross-task training stage to explicitly isolate and amplify the guidance vector corresponding to audio-visual alignment. Extensive experiments on our newly proposed Harmony-Bench validate our framework on the chall-
enging task of jointly generating human speech and ambient sounds. Harmony achieves the best audio-video alignment, maintaining fine-grained temporal synchronization in complex acoustic scenes, which confirms the efficacy of our approach. The main contributions of our work are summarized as follows:
• We propose Harmony, a novel joint audio-video generation framework built upon the principle of CrossTask Synergy to resolve the fundamental Correspondence Drift problem in joint diffusion models.
• We design a Global-Local Decoupled Interaction Module that achieves comprehensive alignment in both overall style and fine-grained temporal details.
• We propose a novel Synchronization-Enhanced CFG

(SyncCFG) that guides the model towards better audiovisual correspondence during inference by using muteaudio and static-video condition as negative guidance. • We establish a new state-of-the-art in audio-visual generation, with extensive experiments validating Harmony’s superior performance in cross-modal synchronization.
2. Related Work
2.1. Video Generation
The field of video generation has rapidly advanced [13, 21, 29, 49, 55], transitioning from early Generative Adversarial Networks (GANs) [11] to the now-dominant diffusion models [17]. Building on their success in image synthesis [23, 39, 41], models like AnimateDiff [13] and SVD [1] extended diffusion to the temporal domain. Architectures have also evolved from UNets to more powerful Diffusion Transformers (DiT) [33, 56], with recent open-source models like HunyuanVideo [29] and Wan [49] achievin-
g state-of-the-art visual quality, which inspired a lot of downstream video generation methods, like video customization [19, 20], video editing [4, 32], and camera control [18, 22, 53]. However, a critical limitation persists across this body of work: a singular focus on the visual modality. By generating silent videos, these models produce content that feels incomplete and lacks the immersive quality of real-world experiences, underscoring the need for cohesive audio-visual synthesis.
2.2. Joint Audio-Video Generation
Recently, a growing body of research has begun to explore the simultaneous generation of audio and video within a single, unified framework [34, 35, 42, 50, 51, 54]. However, most of the early open-source approaches in this domain were restricted to synthesizing coarse environmental sounds and were unable to generate meaningful human speech [26, 34, 42]. A significant advancement came with models like UniVerse-1 [50] and Ovi [35], which integrated more powerful audio synthesis components to enable-
 the joint generation of both ambient sounds and human vocals. Despite this progress, a key challenge remains in the detailed alignment of the overall soundscape. These models often struggle to cohesively blend human speech with its surrounding environmental audio in a manner that is acoustically and semantically consistent with the visual context, highlighting a remaining gap in creating truly immersive audio-visual experiences.
3. Method
In this section, we introduce Harmony, a novel framework for joint audio-video synthesis designed to overcome the fundamental challenge of cross-modal alignment in diffusion models, capable of joint audio-video generation on
speech, sound effects, and ambient audio. We introduce three core innovative designs: (1) a Cross-Task Synergy training strategy that combines the standard joint audiovideo generation task with auxiliary audio-driven video and video-driven audio generation tasks, leveraging the strong, uni-directional supervisory signals from both to accelerate and stabilize the learning of audio-video alignment (2) a Global-Local Decoupled Interaction Module that efficiently ensures both fine-grained temporal cor-
respondence and holistic stylistic consistency; and (3) a CrossTask Alignment-Enhanced CFG mechanism that repurposes guidance by designing more meaningful negative anchors, to explicitly amplify audio-video synchronization during inference.
3.1. Preliminary: Joint Audio-Video Diffusion
Joint audio-video synthesis typically employs a dual-stream Latent Diffusion Model. After encoding a video V and audio A into latents (zv, za), a denoising network εθ is trained to reverse a standard Gaussian noising process. The network consists of parallel video and audio backbones that process their respective noisy latents, zv,t and za,t. Synchronization is learned through an interaction module (e.g., cross-attention) that couples the two streams. The model is optimized by minimizing the noise-
 prediction error for both modalities:
L = ||εv − εˆv(zv,t, za,t, t)||2 + ||εa − εˆa(za,t, zv,t, t)||2. (1)
However, this standard approach struggles to learn robust alignment from two concurrently noisy signals—a core challenge our work addresses.
3.2. Cross-Task Synergy for Enhanced Alignment
3.2.1. The Challenge of Correspondence Drift
Problem Formulation. While recent advancements in joint audio-video generation have focused on novel architectures, a fundamental challenge persists: achieving robust crossmodal alignment. We identify the root cause not as an architectural limitation, but as an inherent instability in the training paradigm, a phenomenon we term Correspondence Drift. During the initial stages of joint training, both audio and video signals are heavily diffused with noise. Attempting to learn a correspondence betwee-
n two concurrently evolving, highly stochastic latent variables results in an unstable and inefficient learning target, causing the alignment process to drift and converge slowly. Empirical Motivation. To empirically validate this hypothesis, we present a comparative analysis in Fig. 3. We compare the lip-sync alignment scores of an audio-driven video generation task versus a joint audio-video generation task, utilizing an identical network architecture (detailed in Sec. 3.3). The results reveal t-
hat the audio-driven model, conditioned on a clean audio signal, rapidly converges to a high alignment score; in contrast, the joint generation

Figure 2. (a) Mitigating Correspondence Drift with Cross-Task Synergy. Our training paradigm leverages a supervised audio- and video-driven task to provide a strong alignment signal. This instills robust synchronization features in the model, stabilizing the otherwise stochastic joint generation process. (b) Overview of the Harmony Model. The architecture features parallel branches for multimodal inputs. The video stream is conditioned on a reference image and a descriptive prompt. The audio stre-
am is conditioned on a reference audio, an ambient sound description, and a speech transcript. The model then generates a single, synchronized audio-visual result.
0 1000 2000 3000 4000 5000 Training Iterations
1.5
2.0
2.5
3.0
3.5
4.0
4.5
5.0
5.5
Average Sync Confidence
Audio-Driven (Conf) Cross-Task Synergy (Conf) Joint Generation (Conf)
Audio-Driven (Dis) Cross-Task Synergy (Dis) Joint Generation (Dis)
10
11
12
13
14
Average Sync Distance
Figure 3. Comparison of the audio-video alignment score among different training strategies.
model exhibits markedly slower convergence. This disparity strongly indicates that anchoring one modality with a deterministic, noise-free signal, as implemented in the audiodriven model, provides a stable learning gradient, enabling the cross-modal interaction module to efficiently capture alignment cues.
3.2.2. Cross-Task Synergy
Overview of Cross-Task Synergy. Based on this insight, we propose a novel training framework, Cross-Task Synergy, which synergistically combines the standard joint audio-video generation task (the primary task) with audiodriven video and video-driven audio generation tasks. By leveraging the high-quality, noise-free learning signal from the uni-directional supervisory task, our model efficiently learns intricate audio-video correspondences. This prelearned alignment knowledge then acts as a powerf-
ul catalyst, accelerating the convergence and enhancing the final alignment quality of the primary joint generation task.
Dual-Branch Model Architecture. Our model features a dual-branch architecture for video and audio generation. The video branch adapts the pre-trained Wan2.25B model [49]. To ensure structural parity, we design a symmetric audio generation branch that synthesizes an audio clip A conditioned on a speech transcript Ts (phonetic content), a descriptive caption Ta (describing the acoustic scene, e.g., vocal emotion or ambient sounds), and a reference audio Ar (timbre). We process these inputs with a mu-
lti-encoder setup: an audio VAE [5] encodes A and Ar into latents za and zr. Crucially, departing from prior works [34, 35], we use separate text encoders to preserve phonetic precision: a dedicated speech-encoder [3] for the transcript Ts (→ espeech) and a T5 encoder [6] for the descriptive prompt Ta (→ eprompt). During denoising, the reference latent zr is prepended to the noisy target latent za,t, forming a composite input latent z′a,t. This composite latent, along with the speech and prompt em-
beddings, is then processed by a Multi-Modal Diffusion Transformer (MMDiT) to predict the noise:
εˆa = MM-DiT(concat(z′
a,t, espeech, eprompt), ta). (2)
To facilitate effective cross-modal interaction between the two branches, we instantiate a bidirectional global-local decoupled interaction module at each layer, with further details provided in Sec. 3.3.
Cross-Task Synergy Training. We design a hybrid training strategy that realizes the principle of Cross-Task Synergy. By concurrently training on both the joint generation task and and two deterministic, single-modality-driven tasks (audio-driven video gen and video-driven audio gen),

we provide the model with a stable alignment signal to counteract Correspondence Drift. The audio-driven task conditions video generation on the clean audio latent by setting the audio timestep ta to 0. Symmetrically, the video-driven task conditions audio generation on the clean video latent by setting the video timestep tv to 0. The total training objective is a weighted sum of the three corresponding losses:
L = Ljoint + λvLaudio
driven + λaLvideo
driven, (3)
where λv and λa are balancing hyperparameters, and c represents the set of auxiliary conditions (e.g., text prompts and speech embeddings). The loss components are defined as:
Ljoint =||εv − εˆv(zv,t, za,t, c, t)||2
+ ||εa − εˆa(za,t, zv,tc, t)||2,
Laudio
driven =||εv − εˆv(zv,t, za,0, c, t)||2,
Lvideo
driven =||εa − εˆa(za,t, zv,0, c, t)||2.
(4)
This bidirectional, synergistic training approach enables our model to achieve faster convergence and a superior degree of final audio-video alignment.
3.3. Global-Local Decoupled Interaction Module
Robust audio-video synchronization presents a fundamental tension between two objectives: (1) precise, finegrained temporal alignment and (2) holistic, global style consistency (e.g., emotional tone, ambient features). Prior works [34, 35] often attempt to address both with a single, monolithic mechanism like global cross-attention, which conflates these goals and leads to a suboptimal trade-off. To resolve this, we propose a novel Global-Local Decoupled Interaction Module with two specialized com-
ponents: (1) a RoPE-Aligned Frame-wise Attention module for precise local synchronization, and (2) a Global Style Alignment module for holistic consistency. This decoupled design allows each component to excel at its specific task, resolving the conflict between fine-grained temporal alignment and global style propagation.
3.3.1. RoPE-Aligned Frame-wise Attention
To achieve precise temporal synchronization, we employ a local frame-wise attention strategy, which is more computationally efficient and better suited for fine-grained alignment than global cross-attention. However, a key challenge arises from the mismatched sampling rates of video and audio latents (Tv ̸= Ta). This discrepancy means a specific event in one modality can occur at a timepoint that falls between two discrete frames in the other. A standard attention mechanism, forced to operate on a-
 discrete set of keys, must attend to the nearest but temporally imperfect frame. This forced approximation introduces temporal jitter and fundamentally degrades fine-grained synchronization.
Temporal Alignment via RoPE Scaling. To resolve this mismatch, we introduce an alignment step prior to the attention operation [5]. Our key insight is to unify the temporal coordinate spaces of both modalities by dynamically scaling their Rotary Positional Embeddings (RoPE) [45]. Before attention operation, we rescale the positional indices of the source modality to match the timeline of the target. For instance, in Audio-to-Video (A2V) attention, an audio frame at index j is mapped to a virtual p-
osition j′ = j ·(Tv/Ta) for its RoPE calculation. This ensures their positional encodings are directly comparable, establishing a strong inductive bias for correct temporal correspondence. Frame-wise Cross-Attention Mechanism. With the latents now temporally aligned in the RoPE space, we apply a symmetric, bidirectional cross-attention mechanism. Each frame’s attention is confined to a small, relevant temporal window in the other modality. Taking A2V as an example, given a video latent zv and an a-
udio latent za, we first reshape zv to expose its temporal dimension (z′v). For each video frame i, we construct a local context window Ca,i from adjacent audio frames. Cross-attention is then applied independently for each video frame, attending to its corresponding audio context window:
∆z′
v[:, i, :, :] = Cross-Attn(Qv,i, Ka,i, Va,i), ∀i ∈ [0, Tv-1],
Qv,i = z′
v[:, i, :, :]W Q
v,i, Ka,i = Ca,iW K
a,i, Va,i = Ca,iW V
a,i.
(5) The Video-to-Audio (V2A) frame-wise alignment operates analogously. The updates are then integrated via residual connections:
zupdated
v = zv + ∆z′
v, zupdated
a = za + ∆za. (6)
This RoPE-aligned frame-wise mechanism efficiently enforces mutual temporal synchronization, leveraging the benefits of local attention while correctly handling disparate timescales.
3.3.2. Global Style Alignment
While frame-wise attention excels at establishing finegrained temporal correspondence, its localized nature inherently limits the propagation of holistic stylistic attributes, such as the overall emotional tone or ambient characteristics, which require a global context to be consistently maintained. Prior methods often rely on a single, monolithic global attention mechanism, which conflates the distinct tasks of temporal alignment and global style consistency, overburdening the module. To address -
this, we propose a principled decoupling: our RoPE-Aligned Frame-wise Attention is exclusively responsible for precise temporal correspondence, while a dedicated Global Style Alignment module handles holistic consistency. This separation allows each component to specialize, preventing interference between the two objectives.

Figure 4. SyncCFG employs the mute audio and static video as the negative anchors to capture the synchronization feature, which can effectively enhance the audio-video alignment.
Our core insight for global alignment is to leverage the reference audio latent, zr (which provides speaker identity and timbre), as a compact carrier for style information. Instead of directly modifying the target audio za and disrupting its fine-grained denoising, we modulate zr with the global context from the entire video latent zv. This is achieved by treating zr as the query and zv as the key and value within a residual cross-attention block:
zupdated
r = zr + Cross-Attn(Qr, Kv, Vv),
Qr = zrW Q
r , Kv = zvW K
v , Vv = zvW V
v . (7)
The resulting visually-informed reference audio latent
zupdated
r is then prepended to the noisy audio latent za,t (as described in Sec. 3.2.2), allowing the audio generation to condition on a visually-grounded global style. This decoupled design offers a key advantage: by confining the global style injection to the reference latent, it prevents interference between holistic style consistency and precise framewise temporal alignment, preserving the stability and fidelity of the final audio generation.
3.4. Synchronization-Enhanced CFG
While Classifier-Free Guidance (CFG) is a powerful technique for conditional generation, its standard application in audio-video synthesis fails to explicitly amplify the crucial correspondence between modalities. To address this, we introduce Synchronization-Enhanced (SyncCFG), a novel scheme that repurposes the guidance mechanism to specifically target and enforce audio-video synchronization. Our approach leverages the dual capabilities—joint generation and audio&video-driven synthesis—acquired -
during our cross-task training to enhance the alignment signal.
3.4.1. Analysis of Standard Guidance Limitations
The standard CFG formulation in previous work [35] is used to strengthen the conditioning on a text prompt c:
ε ̃ = εˆθ(zv,t, za,t, ∅c) + s εˆθ(zv,t, za,t, c) − εˆθ(zv,t, za,t, ∅c) .
(8) Here, the guidance pushes the denoising process away from an unconditional (null-text ∅c) prediction and towards one that aligns with the text prompt c. The key limitation of standard CFG is that its guidance is oriented solely towards text-adherence. The guidance vector, computed by contrasting the text-conditioned output with a text-unconditioned one, exclusively strengthens how well the output matches the prompt. This process, however, is agnostic to the internal consistency between audio a-
nd video. It provides no mechanism to isolate or amplify the crucial synchronization signal between the two streams.
3.4.2. SyncCFG Formulation for Video Guidance
To explicitly compute an alignment-enhancing direction, we aim at isolating the visual dynamics caused by the audio. Our key insight is to design a more meaningful Negative Anchor that represents a static baseline—how the video should look in the absence of sound. For instance, for a person speaking, the correct video for a silent audio track would be a still face with a closed mouth. We achieve this by creating a “silent audio” negative anchor. We leverage the audio-driven pathway of our model to-
 predict the noise for the video latent zv,t conditioned on a “muted” audio input, znull
a,0 . The resulting prediction, εˆdriven
θ (zv,t, znull
a,0 ), represents the model’s expectation for this visually static scene. The guided prediction for the video noise ε ̃v is then formulated as:
ε ̃v =εˆdriven
θ (zv,t, znull
a,0 )+
sv εˆjoint
θ (zv,t, za,t) − εˆdriven
θ (zv,t, znull
a,0 ) . (9)
The subtraction term isolates the precise visual modifications—such as mouth movements or object impacts—that are directly correlated with the audio. By amplifying this difference, SyncCFG specifically enhances the synchronization between sound and motion.
3.4.3. SyncCFG Formulation for Audio Guidance
Similarly, for audio guidance, we design a null video-based negative anchor to isolate motion-driven sounds. Using a “static video” latent znull
v,0 , we predict a baseline audio sig
nal εˆdriven
θ (znull
v,0 , za,t) that represents the ambient sound of a motionless scene, as the video content is static. The guided prediction for audio noise ε ̃a is then formulated as:
ε ̃a =εˆdriven
θ (znull
v,0 , za,t)+
sa εˆjoint
θ (zv,t, za,t) − εˆdriven
θ (znull
v,0 , za,t) . (10)

Harmony (Ours)
Ovi
UniVerse-1
Amanisspeaking:“Theagreementcoversanythingpurchased.Theruleisstrictly enforced.Thatcontractisactive”
Afolkmusiciansittingonawoodenporch,happilyplayinganold-fashioned mandolin;Amandolinisbeingplayed,producingabright,lightmelody
Figure 5. Qualitative Comparison between Harmony and the state-of-the-art methods, including Universe-1 [50] and Ovi [35].
This approach transforms CFG from a generic conditional amplifier into a targeted mechanism, effectively enforcing fine-grained audio-video correspondence.
4. Experiments
4.1. Experimental Settings
Datasets and Training. Our model is trained on a diverse corpus of over 4 million audio-visual clips, covering both human speech and environmental sounds. The data is aggregated from public sources like OpenHumanVid [31], AudioCaps [28], and WavCaps [36], and supplemented with our own curated high-quality collections. All data is uniformly annotated using Gemini [12]. Our training follows a three-stage curriculum: (1) foundational audio pre-training on all audio data, (2) timbre disentanglement fi-
netuning using multi-utterance speech data, and (3) final cross-task joint audio-visual training. The video branch is initialized from Wan2.2 [49]. The final joint stage is trained for 10,000 iterations with a batch size of 128 and a learning rate of 1e-5. A comprehensive list of datasets, data processing details, and full training hyperparameters are provided in the supplementary material.
Harmony-Bench and Metrics. To facilitate a rigorous evaluation, we introduce Harmony-Bench, a new benchmark of 150 test cases designed to assess core audio-visual generation capabilities. It is structured into three 50-item subsets with increasing complexity: 1. Ambient Sound-Video: Evaluates temporal alignment of non-speech sounds using AI-generated scenarios conditioned on audio and video captions. 2. Speech-Video: Assesses lip-sync and speech quality on a mix of real-world and synthetic multili-
ngual data, conditioned primarily on a transcript.
3. Complex Scene (Ambient + Speech): Tests the model’s ability to generate and synchronize co-occurring speech and ambient sounds in complex scenes, using a full set of multimodal prompts. We evaluate performance using a comprehensive suite of automated metrics. For Video, we measure Aesthetic Quality (aesthetic-predictor-v2-5), Imaging Quality (MUSIQ), Dynamic Degree (RAFT), Motion Smoothness and Identity Consistency (DINOv3). For Audio, we report AudioBoxAesthetics (PQ, PC, CE, CU), WER (Whisper-
-large-v3), and IB-A Score. For AV-Sync, we use lip-sync metrics (Sync-C, Sync-D), and overall consistency (IB-score). Further details on the benchmark construction and metric implementations are available in the appendix.
4.2. Comparison on audio-video generation
To evaluate the performance of our model, we compare it with state-of-the-art audio-video generation methods on the three types of datasets (Ambient Sound-Video, SpeechVideo, and Complex Scene), including MM-Diffusion [42], JavisDiT [34], UniVerse-1 [50], and Ovi [35]. The quantitative results are shown in Tab. 2. Our model, Harmony, demonstrates a highly competitive performance, achieving state-of-the-art or comparable results in both video quality (e.g., AQ, DD, ID) and audio fidelity (e.g., PC,-
 PQ). Most notably, its primary advantage lies in audio-visual synchronization. Harmony significantly outperforms all baselines on key synchronization metrics, achieving the highest SyncC score of 5.61 and the lowest (best) Sync-D score of 7.53. This substantial improvement in temporal alignment directly validates the effectiveness of our proposed cross-task synergy mechanism in enhancing cross-modal coherence. We provide qualitative comparisons with UniVerse-1 and Ovi in Fig. 5. In the talking he-
ad example (left), both

Table 2. Quantitative comparison with state-of-the-art methods averaging on ambient sound-video, speech-video, and complex scenevideo generation. We evaluate performance across three categories: video quality, audio fidelity, and audio-visual synchronization. Best results are in bold, second-best are underlined. For more comprehensive and detailed evaluations, please refer to the supplementary material. Some metrics could not be generated for MM-Diffusion, as it is an unconditional generation mod-
el.
Method Video Quality & Coherence Audio Fidelity & Quality Audio-Visual Synchronization
AQ ↑ IQ ↑ DD ↑ MS ↑ ID ↑ PQ ↑ PC ↓ CE ↑ CU ↑ WER ↓ IB-A ↑ Sync-C ↑ Sync-D ↓ DeSync ↓ IB ↑
MM-Diffusion [42] 0.32 0.43 0.13 0.99 - 5.37 4.07 4.27 5.89 - - - - - 0.12 JavisDiT [34] 0.34 0.53 0.38 0.99 0.38 5.46 2.24 3.19 4.54 1.00 0.14 0.89 11.62 1.13 0.18 UniVerse-1 [50] 0.52 0.67 0.24 0.99 0.89 5.52 2.13 3.63 4.84 0.24 0.07 0.97 10.71 1.10 0.12 Ovi [35] 0.57 0.65 0.34 0.99 0.90 6.19 2.13 4.44 5.84 0.49 0.12 4.04 9.62 1.14 0.18 Harmony (Ours) 0.59 0.65 0.36 0.99 0.91 6.39 2.05 4.73 5.67 0.15 0.12 5.61 7.53 0.92 0.19
Human Voice
Animal Audio
Figure 6. Visualization of the audio-to-video frame-wise crossattention map, where the audio can accurately capture the sound source from the videos.
competing methods fail to produce synchronized lip movements. For the music-driven case (right), their limitations persist: UniVerse-1 generates irrelevant noise, while Ovi produces audio that, while musically correct, is less dynamic—a fact reflected in its simpler waveform. Visually, both methods yield videos with minimal motion. In contrast, our Harmony generates a fluid video of a person playing the mandolin with motions that are dynamically synchronized with the rich, corresponding music, as -
evidenced by the more complex audio waveform.
4.3. Visualization of Cross-modal Attention
To validate the effectiveness of our frame-wise crossattention mechanism, we visualize the attention maps from the audio-to-video module. As illustrated in Fig. 6, when synthesizing human speech, the model precisely localizes its attention on the speaker’s oral region. Notably, in scenarios with multiple individuals, our model can distinguish between them, focusing exclusively on the active speaker. This capability extends to natural sounds, where the model accurately identifies the primary sound -
source (e.g., an animal) while also attending to ambient environmental sounds, such as the rain in the cat example and the birdsong in the crocodile case. Collectively, these visualizations underscore our model’s superior ability to achieve fine-grained
Table 3. Ablation study on the core components of Harmony. We start with a baseline and progressively add each module: Global-local decoupled interaction module (GLDI), RoPE Alignment (RoPE), Cross-Task Synergy (CTS) , and SynchronizationEnhanced CFG (SyncCFG). Note that this experiment is evaluated on the human-speech dataset; therefore, it has different synchronization results compared to Tab. 2.
Model Structure Methodology Synchronization Metrics
GLDI RoPE CTS SyncCFG Sync-C ↑ Sync-D ↓ IB ↑
4.20 10.93 0.13 ✓ 4.29 10.67 0.14 ✓ ✓ 4.80 10.30 0.14 ✓ ✓ ✓ 5.09 10.16 0.15 ✓ ✓ ✓ ✓ 6.51 8.63 0.18
and contextually aware audio-visual alignment.
4.4. Ablation Studies
We conduct a comprehensive ablation study to validate our core components, with the results presented in Tab. 3. In this study, we train all ablated models on the human speech dataset and evaluate their audio-visual alignment. Our baseline model replaces the proposed Global-Local Decoupled Interaction (GLDI) module with a standard global crossattention mechanism, similar to Ovi [35], and is trained without cross-task synergy (CTS). As shown in the table, progressively integrating our contributions-
 yields consistent improvements. First, introducing the GLDI module demonstrates the benefit of decoupling local and global interactions. This is further enhanced by the RoPE Alignment, which effectively resolves timescale mismatches and boosts fine-grained synchronization (Sync-C from 4.29 to 4.80). Subsequently, the Cross-Task Synergy (CTS) training strategy further refines the model’s alignment capabilities. Finally, applying the Synchronization-Enhanced CFG (SyncCFG) during inference provides -
the most substantial performance gain, catapulting Sync-C from 5.09 to 6.51. This systematic improvement validates that each component of Harmony is crucial for achieving the state-of-the-art audiovideo synchronization performance.

5. Conclusion
In this work, we presented Harmony, a novel framework addressing the audio-visual synchronization gap in generative models. We find this gap stems from key methodological flaws: Correspondence Drift, an architectural conflict between global style and local timing, and the limitations of standard CFG for cross-modal alignment. To address these issues, Harmony introduces three core components. Cross-Task Synergy training instills robust alignment priors to counteract drift. A Global-Local Decoupled -
Module resolves the architectural conflict by handling style and timing separately. Finally, our novel Synchronization-Enhanced CFG (SyncCFG) provides an explicit mechanism to amplify the alignment signal during inference. Our experiments validate that Harmony establishes a new state-of-theart in audio-video synchronization, proving more effective than simply scaling up models. We believe this work provides a strong foundation for a new generation of accessible and well-aligned audio-visual models-
.
Acknowledgments
This work is supported by Tencent Hunyuan. We thank our team lead, Yuan Zhou, and Qinglin Lu, for their guidance. We also thank Zhentao Yu, Guozheng Zhang, Zhengguang Zhou, Youliang Zhang, Yi Chen, Zixiang Zhou, and Sen Liang for their help with data and technique support.
References
[1] Andreas Blattmann, Tim Dockhorn, Sumith Kulal, Daniel Mendelevitch, Maciej Kilian, Dominik Lorenz, Yam Levi, Zion English, Vikram Voleti, Adam Letts, et al. Stable video diffusion: Scaling latent video diffusion models to large datasets. arXiv preprint arXiv:2311.15127, 2023. 3
[2] Honglie Chen, Weidi Xie, Andrea Vedaldi, and Andrew Zisserman. Vggsound: A large-scale audio-visual dataset. In ICASSP 2020-2020 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), pages 721–725. IEEE, 2020. 12 [3] Yushen Chen, Zhikang Niu, Ziyang Ma, Keqi Deng, Chunhui Wang, Jian Zhao, Kai Yu, and Xie Chen. F5-tts: A fairytaler that fakes fluent and faithful speech with flow matching. arXiv preprint arXiv:2410.06885, 2024. 4
[4] Yinan Chen, Jiangning Zhang, Teng Hu, Yuxiang Zeng, Zhucun Xue, Qingdong He, Chengjie Wang, Yong Liu, Xiaobin Hu, and Shuicheng Yan. Ivebench: Modern benchmark suite for instruction-guided video editing assessment. arXiv preprint arXiv:2510.11647, 2025. 3
[5] Ho Kei Cheng, Masato Ishii, Akio Hayakawa, Takashi Shibuya, Alexander Schwing, and Yuki Mitsufuji. Mmaudio: Taming multimodal joint training for high-quality video-toaudio synthesis. In Proceedings of the Computer Vision and Pattern Recognition Conference, pages 28901–28911, 2025. 2, 4, 5, 16
[6] Hyung Won Chung, Noah Constant, Xavier Garcia, Adam Roberts, Yi Tay, Sharan Narang, and Orhan Firat. Unimax: Fairer and more effective language sampling for large-scale multilingual pretraining. arXiv preprint arXiv:2304.09151, 2023. 4 [7] Joon Son Chung and Andrew Zisserman. Out of time: automated lip sync in the wild. In Asian conference on computer vision, pages 251–263. Springer, 2016. 14 [8] Google DeepMind. Veo3. https : / / deepmind . google/models/veo/, 2025. 2
[9] Konstantinos Drossos, Samuel Lipping, and Tuomas Virtanen. Clotho: An audio captioning dataset. In ICASSP 20202020 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), pages 736–740. IEEE, 2020. 12 [10] Rohit Girdhar, Alaaeldin El-Nouby, Zhuang Liu, Mannat Singh, Kalyan Vasudev Alwala, Armand Joulin, and Ishan Misra. Imagebind: One embedding space to bind them all. In Proceedings of the IEEE/CVF conference on computer vision and pattern recognition, pages 15180–15-
190, 2023. 14 [11] Ian J. Goodfellow, Jean Pouget-Abadie, Mehdi Mirza, Bing Xu, David Warde-Farley, Sherjil Ozair, Aaron Courville, and Yoshua Bengio. Generative adversarial nets. In NeurIPS, 2014. 3
[12] Google. Gemini. https://gemini.google.com/, 2025. 7, 12 [13] Yuwei Guo, Ceyuan Yang, Anyi Rao, Zhengyang Liang, Yaohui Wang, Yu Qiao, Maneesh Agrawala, Dahua Lin, and Bo Dai. Animatediff: Animate your personalized text-toimage diffusion models without specific tuning. In ICLR, 2024. 3 [14] Moayed Haji-Ali, Willi Menapace, Aliaksandr Siarohin, Ivan Skorokhodov, Alper Canberk, Kwot Sin Lee, Vicente Ordonez, and Sergey Tulyakov. Av-link: Temporally-aligned diffusion features for cross-modal audi-
o-video generation. arXiv preprint arXiv:2412.15191, 2024. 2
[15] Haorui He, Zengqiang Shang, Chaoren Wang, Xuyuan Li, Yicheng Gu, Hua Hua, Liwei Liu, Chen Yang, Jiaqi Li, Peiyang Shi, et al. Emilia: An extensive, multilingual, and diverse speech dataset for large-scale speech generation. In 2024 IEEE Spoken Language Technology Workshop (SLT), pages 885–890. IEEE, 2024. 12 [16] Jonathan Ho and Tim Salimans. Classifier-free diffusion guidance. arXiv preprint arXiv:2207.12598, 2022. 2
[17] Jonathan Ho, Ajay Jain, and Pieter Abbeel. Denoising diffusion probabilistic models. NeurIPS, 2020. 3 [18] Teng Hu, Jiangning Zhang, Ran Yi, Yating Wang, Hongrui Huang, Jieyu Weng, Yabiao Wang, and Lizhuang Ma. Motionmaster: Training-free camera motion transfer for video generation. arXiv preprint arXiv:2404.15789, 2024. 3
[19] Teng Hu, Zhentao Yu, Zhengguang Zhou, Sen Liang, Yuan Zhou, Qin Lin, and Qinglin Lu. Hunyuancustom: A multimodal-driven architecture for customized video generation. arXiv preprint arXiv:2505.04512, 2025. 3
[20] Teng Hu, Zhentao Yu, Zhengguang Zhou, Jiangning Zhang, Yuan Zhou, Qinglin Lu, and Ran Yi. Polyvivid: Vivid multisubject video generation with cross-modal interaction and enhancement. arXiv preprint arXiv:2506.07848, 2025. 3

[21] Teng Hu, Jiangning Zhang, Zihan Su, and Ran Yi. Ultragen: High-resolution video generation with hierarchical attention. arXiv preprint arXiv:2510.18775, 2025. 3
[22] Teng Hu, Jiangning Zhang, Ran Yi, Hongrui Huang, Yabiao Wang, and Lizhuang Ma. High-efficient diffusion model fine-tuning with progressive sparse low-rank adaptation. In 13th International Conference on Learning Representations, ICLR 2025, pages 92066–92078. International Conference on Learning Representations, ICLR, 2025. 3 [23] Teng Hu, Jiangning Zhang, Ran Yi, Jieyu Weng, Yabiao Wang, Xianfang Zeng, Zhucun Xue, and Lizhuang Ma. Improving autoregressive visual generation with clusteroriente-
d token prediction. In Proceedings of the Computer Vision and Pattern Recognition Conference, pages 93519360, 2025. 3 [24] Ziqi Huang, Yinan He, Jiashuo Yu, Fan Zhang, Chenyang Si, Yuming Jiang, Yuanhan Zhang, Tianxing Wu, Qingyang Jin, Nattapol Chanpaisit, et al. Vbench: Comprehensive benchmark suite for video generative models. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pages 21807–21818, 2024. 13 [25] Vladimir Iashin, Weidi Xie, Esa Rahtu, and Andrew Z-
isserman. Synchformer: Efficient synchronization from sparse cues. In ICASSP 2024-2024 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP), pages 5325–5329. IEEE, 2024. 14 [26] Masato Ishii, Akio Hayakawa, Takashi Shibuya, and Yuki Mitsufuji. A simple but strong baseline for sounding video generation: Effective adaptation of audio and video diffusion models for joint generation. arXiv preprint arXiv:2409.17550, 2024. 2, 3
[27] Junjie Ke, Qifei Wang, Yilin Wang, Peyman Milanfar, and Feng Yang. Musiq: Multi-scale image quality transformer. In Proceedings of the IEEE/CVF international conference on computer vision, pages 5148–5157, 2021. 13 [28] Chris Dongjoo Kim, Byeongchang Kim, Hyunmin Lee, and Gunhee Kim. Audiocaps: Generating captions for audios in the wild. In Proceedings of the 2019 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, Volume 1 (-
Long and Short Papers), pages 119–132, 2019. 7, 12 [29] Weijie Kong, Qi Tian, Zijian Zhang, Rox Min, Zuozhuo Dai, Jin Zhou, Jiangfeng Xiong, Xin Li, Bo Wu, Jianwei Zhang, et al. Hunyuanvideo: A systematic framework for large video generative models. arXiv preprint arXiv:2412.03603, 2024. 3
[30] Mingi Kwon, Joonghyuk Shin, Jaeseok Jung, Jaesik Park, and Youngjung Uh. Jam-flow: Joint audio-motion synthesis with flow matching. arXiv preprint arXiv:2506.23552, 2025. 2
[31] Hui Li, Mingwang Xu, Yun Zhan, Shan Mu, Jiaye Li, Kaihui Cheng, Yuxuan Chen, Tan Chen, Mao Ye, Jingdong Wang, et al. Openhumanvid: A large-scale high-quality dataset for enhancing human-centric video generation. In Proceedings of the Computer Vision and Pattern Recognition Conference, pages 7752–7762, 2025. 7, 12 [32] Sen Liang, Zhentao Yu, Zhengguang Zhou, Teng Hu, Hongmei Wang, Yi Chen, Qin Lin, Yuan Zhou, Xin Li, Qinglin
Lu, et al. Omniv2v: Versatile video generation and editing via dynamic content manipulation. arXiv preprint arXiv:2506.01801, 2025. 3
[33] Bin Lin, Yunyang Ge, Xinhua Cheng, Zongjian Li, Bin Zhu, Shaodong Wang, Xianyi He, Yang Ye, Shenghai Yuan, Liuhan Chen, et al. Open-sora plan: Open-source large video generation model. arXiv preprint arXiv:2412.00131, 2024. 3
[34] Kai Liu, Wei Li, Lai Chen, Shengqiong Wu, Yanhao Zheng, Jiayi Ji, Fan Zhou, Rongxin Jiang, Jiebo Luo, Hao Fei, et al. Javisdit: Joint audio-video diffusion transformer with hierarchical spatio-temporal prior synchronization. arXiv preprint arXiv:2503.23377, 2025. 2, 3, 4, 5, 7, 8, 12, 13, 14, 15 [35] Chetwin Low, Weimin Wang, and Calder Katyal. Ovi: Twin backbone cross-modal fusion for audio-video generation. arXiv preprint arXiv:2510.01284, 2025. 2, 3, 4, 5, 6, 7, 8, 13, 14, 15 [36] Xinhao M-
ei, Chutong Meng, Haohe Liu, Qiuqiang Kong, Tom Ko, Chengqi Zhao, Mark D Plumbley, Yuexian Zou, and Wenwu Wang. Wavcaps: A chatgpt-assisted weaklylabelled audio captioning dataset for audio-language multimodal research. IEEE/ACM Transactions on Audio, Speech, and Language Processing, 32:3339–3354, 2024. 7, 12
[37] Openai. Sora2. https://openai.com/zh- HansCN/index/sora-2/, 2025. 2
[38] Ziqiao Peng, Jiwen Liu, Haoxian Zhang, Xiaoqiang Liu, Songlin Tang, Pengfei Wan, Di Zhang, Hongyan Liu, and Jun He. Omnisync: Towards universal lip synchronization via diffusion transformers. arXiv preprint arXiv:2505.21448, 2025. 2 [39] Dustin Podell, Zion English, Kyle Lacey, Andreas Blattmann, Tim Dockhorn, Jonas Mu ̈ller, Joe Penna, and Robin Rombach. SDXL: Improving latent diffusion models for high-resolution image synthesis. In ICLR, 2024. 3 [40] Alec Radford, Jong Wook Kim, Tao Xu, Gre-
g Brockman, Christine McLeavey, and Ilya Sutskever. Robust speech recognition via large-scale weak supervision. In International conference on machine learning, pages 28492–28518. PMLR, 2023. 14 [41] Robin Rombach, Andreas Blattmann, Dominik Lorenz, Patrick Esser, and Bjo ̈rn Ommer. High-resolution image synthesis with latent diffusion models. In CVPR, 2022. 3 [42] Ludan Ruan, Yiyang Ma, Huan Yang, Huiguo He, Bei Liu, Jianlong Fu, Nicholas Jing Yuan, Qin Jin, and Baining Guo. Mm-diffusion: Learnin-
g multi-modal diffusion models for joint audio and video generation. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pages 10219–10228, 2023. 2, 3, 7, 8, 13, 14, 15 [43] Sizhe Shan, Qiulin Li, Yutao Cui, Miles Yang, Yuehai Wang, Qun Yang, Jin Zhou, and Zhao Zhong. Hunyuanvideofoley: Multimodal diffusion with representation alignment for high-fidelity foley audio generation. arXiv preprint arXiv:2508.16930, 2025. 2
[44] Oriane Sime ́oni, Huy V. Vo, Maximilian Seitzer, Federico Baldassarre, Maxime Oquab, Cijo Jose, Vasil Khalidov, Marc Szafraniec, Seungeun Yi, Michae ̈l Ramamonjisoa,

Francisco Massa, Daniel Haziza, Luca Wehrstedt, Jianyuan Wang, Timothe ́e Darcet, Th ́eo Moutakanni, Leonel Sentana, Claire Roberts, Andrea Vedaldi, Jamie Tolan, John Brandt, Camille Couprie, Julien Mairal, Herv ́e J ́egou, Patrick Labatut, and Piotr Bojanowski. DINOv3, 2025. 13 [45] Jianlin Su, Murtadha Ahmed, Yu Lu, Shengfeng Pan, Wen Bo, and Yunfeng Liu. Roformer: Enhanced transformer with rotary position embedding. Neurocomputing, 568:127063, 2024. 5 [46] Zachary Teed and Jia Deng. Raft: Recu-
rrent all-pairs field transforms for optical flow. In European conference on computer vision, pages 402–419. Springer, 2020. 13 [47] Andros Tjandra, Yi-Chiao Wu, Baishan Guo, John Hoffman, Brian Ellis, Apoorv Vyas, Bowen Shi, Sanyuan Chen, Matt Le, Nick Zacharov, et al. Meta audiobox aesthetics: Unified automatic quality assessment for speech, music, and sound. arXiv preprint arXiv:2502.05139, 2025. 13
[48] Aesthetic Predictor V2.5. Aesthetic predictor v2.5. https://github.com/discus0434/aestheticpredictor-v2-5, 2024. 13
[49] Ang Wang, Baole Ai, and et al Bin Wen. Wan: Open and advanced large-scale video generative models. arXiv preprint arXiv:2503.20314, 2025. 3, 4, 7, 12
[50] Duomin Wang, Wei Zuo, Aojie Li, Ling-Hao Chen, Xinyao Liao, Deyu Zhou, Zixin Yin, Xili Dai, Daxin Jiang, and Gang Yu. Universe-1: Unified audio-video generation via stitching of experts. arXiv preprint arXiv:2509.06155, 2025. 2, 3, 7, 8, 12, 13, 14, 15 [51] Kai Wang, Shijian Deng, Jing Shi, Dimitrios Hatzinakos, and Yapeng Tian. Av-dit: Taming image diffusion transformers for efficient joint audio and video generation. In Proceedings of the 33rd ACM International Conference on Multimedia, pag-
es 10486–10495, 2025. 3 [52] Xihua Wang, Ruihua Song, Chongxuan Li, Xin Cheng, Boyuan Li, Yihan Wu, Yuyue Wang, Hongteng Xu, and Yunfeng Wang. Animate and sound an image. In Proceedings of the Computer Vision and Pattern Recognition Conference, pages 23369–23378, 2025. 2 [53] Zhouxia Wang, Ziyang Yuan, Xintao Wang, Yaowei Li, Tianshui Chen, Menghan Xia, Ping Luo, and Ying Shan. Motionctrl: A unified and flexible motion controller for video generation. In ACM SIGGRAPH 2024 Conference Papers, pages -
1–11, 2024. 3 [54] Yazhou Xing, Yingqing He, Zeyue Tian, Xintao Wang, and Qifeng Chen. Seeing and hearing: Open-domain visualaudio generation with diffusion latent aligners. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pages 7151–7161, 2024. 3 [55] Zhucun Xue, Jiangning Zhang, Teng Hu, Haoyang He, Yinan Chen, Yuxuan Cai, Yabiao Wang, Chengjie Wang, Yong Liu, Xiangtai Li, et al. Ultravideo: High-quality uhd video dataset with comprehensive captions. arXiv pr-
eprint arXiv:2506.13691, 2025. 3
[56] Zhuoyi Yang, Jiayan Teng, Wendi Zheng, Ming Ding, Shiyu Huang, Jiazheng Xu, Yuanming Yang, Wenyi Hong, Xiaohan Zhang, Guanyu Feng, et al. Cogvideox: Text-to-video diffusion models with an expert transformer. arXiv preprint arXiv:2408.06072, 2024. 3
[57] Youliang Zhang, Zhaoyang Li, Duomin Wang, Jiahe Zhang, Deyu Zhou, Zixin Yin, Xili Dai, Gang Yu, and Xiu Li. Speakervid-5m: A large-scale high-quality dataset for audiovisual dyadic interactive human generation. arXiv preprint arXiv:2507.09862, 2025. 12

A. Overview
In this supplementary material, we provide more implementation details, experiment results, including:
• Implementation details (Sec. B); • Benchmark settings (Sec. C); • More quantitative comparisons (Sec. D); • More qualitative comparisons (Sec. E); • Details about voice clone (Sec. F); • Audio-driven performance; (Sec. G); • More qualitative results (Sec. H);
We also provide a demo video and project page in https://sjtuplayer.github.io/projects/Harmony, where the demo video shows the powerful and comprehensive ability of our model in audio-video generation and the project page provides a comparison between the existing methods.
B. Implementation Details
Datasets. Our training corpus is curated from a diverse range of public and newly collected sources to cover both human speech and environmental sounds. 1) Human Speech Data: We aggregate vocal data from multiple open-source datasets, including the TTS-specific Emilia dataset [15], as well as audio-visual corpora such as OpenHumanVid [31] and SpeakerVid [57]. To ensure high-quality alignment, we employed an audio-visual consistency scoring model to filter this collection, resulting in a high-quali-
ty subset of 2 million video clips, each 3-10 seconds in duration. We then utilized the Gemini [12] for automated annotation, generating ASR transcripts, descriptive video captions, and captions for any background sounds present in the clips.
2) Environmental Sound Data: For environmental sounds, we leverage several established public datasets, including AudioCaps [28] (∼128 hours, manually captioned), Clotho [9] (∼31 hours, manually captioned), and WavCaps [36] (∼7,600 hours, automatically captioned). Recognizing the often-suboptimal visual quality of the VGGSound dataset [2], we supplemented our data by collecting an additional 2 million audio-visual clips rich in environmental sounds. These new clips were subsequently annotated usin-
g Gemini [12] to generate corresponding audio and video captions. Training Strategy. Our training protocol is structured in three distinct stages to ensure stable convergence and highfidelity generation. For the video branch, we initialize our model with the pre-trained weights of Wan2.2-5B [49]. The audio model undergoes a dedicated two-stage pre-training process before the final joint training.
Stage 1: Foundational Audio Pre-training. The audio model is first pre-trained on a balanced 1:1 mixture of our human speech and environmental sound datasets. We train for 100,000 iterations with a global batch size of 1536, us
ing clips with a maximum duration of 10 seconds. During this stage, the reference audio is a randomly selected 1-3 second segment from the ground-truth clip. This phase enables the model to learn to replicate both the timbre and content from the provided reference audio.
Stage 2: Timbre Disentanglement Finetuning. To enable the model to disentangle general acoustic characteristics from specific content, we finetune it using mismatched reference and target content. For human speech, we use cross-utterance data from the same speaker. For environmental sounds, we sample a non-overlapping reference clip from the same long recording as the ground-truth target. This setup compels the model to extract the invariant acoustic signature—be it a speaker’s voice or an environ-
mental ambience—from the reference and apply it to the new content dictated by the prompt or transcript. We finetune for an additional 20,000 iterations in this configuration.
Stage 3: Cross-Task Audio-Visual Training. Finally, we proceed to the Cross-Task joint training stage. The full audio-visual model is trained for 10,000 iterations with a batch size of 128, again using a 1:1 mixture of human speech and environmental sound data. Across all training stages, we employ a constant learning rate of 1e-5 for all model parameters. Hyperparameters. During the final cross-task training stage, the balancing weights for our synergistic loss (Eq. 3) are set to λv = 0.1 and λa -
= 0.3. The model is trained using a Flow Matching objective with shift of 5. For inference, we use 40 integration steps with classifier-free guidance (CFG) scales of sv = 3 for video and sa = 2 for audio. The sampler’s shift parameter is also maintained at 5.
C. Benchmark Settings
C.1. The Harmony-Bench Dataset
Existing benchmarks for audio-visual generation are inadequate for comprehensive evaluation. JavisBench [34] lacks evaluation for human speech, while Verse-Bench [50] is hampered by low-quality labels and a limited focus on audio-visual synchronization. To enable a more rigorous and holistic assessment, we construct and introduce Harmony-Bench. This new benchmark features 150 meticulously designed test cases, organized into three progressively challenging subsets (50 items each). It is specificall-
y crafted to disentangle and systematically evaluate a model’s semantic consistency and temporal synchronization across diverse and complex acoustic scenarios.
• Ambient Sound-Video Generation. This subset is designed to assess the model’s ability to generate nonspeech acoustic events that are precisely synchronized with corresponding visual dynamics. The 50 test cases feature synthetically constructed scenarios, enabling the creation of complex audio-visual interactions that are dif

Table 4. Human-speech set comparison with state-of-the-art joint audio-visual generation models. We evaluate performance across three categories: video quality, audio fidelity, and audio-visual synchronization. Best results are in bold, second-best are underlined.
Method Video Quality & Coherence Audio Fidelity & Quality Audio-Visual Synchronization
AQ ↑ IQ ↑ DD ↑ MS ↑ ID ↑ PQ ↑ PC ↓ CE ↑ CU ↑ WER ↓ IB-A ↑ Sync-C ↑ Sync-D ↓ DeSync ↓ IB ↑
MM-Diffusion [42] 0.32 0.43 0.13 0.99 - 5.37 4.07 4.27 5.89 - - - - - 0.12 JavisDiT [34] 0.30 0.54 0.28 0.99 0.35 5.34 2.16 3.61 3.92 1.00 0.14 1.20 12.73 - 0.22 UniVerse-1 [50] 0.47 0.67 0.15 0.99 0.89 4.28 1.86 3.84 3.91 0.23 0.16 1.22 13.10 - 0.16 Ovi [35] 0.48 0.65 0.17 0.99 0.88 6.19 1.59 5.41 6.21 0.19 0.10 5.13 10.38 - 0.17 Harmony (Ours) 0.48 0.63 0.20 1.00 0.93 6.20 1.57 5.30 5.93 0.15 0.15 6.51 8.63 - 0.18
Table 5. Environment set comparison with state-of-the-art joint audio-visual generation models. We evaluate performance across three categories: video quality, audio fidelity, and audio-visual synchronization. Best results are in bold, second-best are underlined.
Method Video Quality & Coherence Audio Fidelity & Quality Audio-Visual Synchronization
AQ ↑ IQ ↑ DD ↑ MS ↑ ID ↑ PQ ↑ PC ↓ CE ↑ CU ↑ WER ↓ IB-A ↑ Sync-C ↑ Sync-D ↓ DeSync ↓ IB ↑
MM-Diffusion [42] 0.32 0.43 0.13 0.99 - 5.37 4.07 4.27 5.89 - - - - - 0.12 JavisDiT [34] 0.37 0.55 0.33 0.99 0.45 5.64 2.29 3.06 5.14 - 0.18 - - 0.94 0.16 UniVerse-1 [50] 0.57 0.68 0.16 1.00 0.92 6.14 2.30 3.20 5.46 - 0.04 - - 1.10 0.07 Ovi [35] 0.62 0.66 0.44 0.99 0.93 6.45 2.46 3.78 5.98 - 0.20 - - 1.06 0.20 Harmony (Ours) 0.64 0.65 0.56 0.98 0.90 6.53 2.68 4.12 6.22 - 0.14 - - 0.70 0.21
ficult to capture or isolate in real-world recordings. The model is conditioned on a detailed audio caption and a separate video caption. Evaluation centers on audio fidelity, temporal synchrony, and the semantic consistency between the generated audio and visual events. • Speech-Video Generation. This 50-item subset assesses the fidelity of speech synthesis and lip synchronization. To test for robustness and multilingual generalization, it includes a balanced mix of 25 real-world and 25 AIsynthes-
ized samples, driven by transcripts in both English (spoken word en) and Chinese (spoken word zh). The video caption is deliberately kept minimal (e.g., ”a man is speaking”), compelling the model to derive lip movements and facial expressions directly from the transcript’s content. Key evaluation criteria are speech intelligibility, naturalness, and the precision of lip-audio synchronization.
• Complex Scene: Ambient + Speech. Representing the most challenging scenario, this subset evaluates the model’s capacity to simultaneously generate and synchronize both speech and ambient sounds within a unified, complex scene. Each of the 50 test cases is constructed to feature co-occurring audio-visual events, requiring the model to process a combination of inputs: a transcript (spoken word en), an ambient sound description (audio caption), and a visual scene description (video caption). The ev-
aluation critically examines the model’s ability for sound source separation and mixing (e.g., maintaining speech clarity over a background door-closing sound). Furthermore, it assesses multi-modal temporal alignment: speech must synchronize with lip movements, while ambient sounds must
align with their corresponding visual actions.
To provide a comprehensive evaluation on this benchmark, we adopt a suite of automated metrics designed to assess three key aspects: 1) Visual Quality and Coherence, 2) Audio Fidelity, and 3) Audio-Visual Synchronization and Consistency.
C.2. Evaluation Metrics
To comprehensively assess model performance on Harmony-Bench, we employ a suite of automated metrics targeting three core aspects of audio-visual quality.
Visual Quality and Coherence. We evaluate the visual quality and temporal consistency of the generated videos using the following metrics:
• Aesthetic and Imaging Quality. We assess aesthetic quality (AQ) and imaging quality (IQ) using the pre-trained aesthetic-predictor-v2-5[48] and MUSIQ[27] models, respectively. • Motion Dynamics. Temporal coherence is evaluated through Dynamic Degree (DD) and Motion Smoothness (MS)[24]. We employ RAFT[46] to quantify the magnitude of motion and a pre-trained video frame interpolation model to evaluate motion smoothness. • Identity Consistency (ID). For subject-specific generation, we measure ID b-
y computing the mean DINOv3[44] feature similarity between a reference image and all generated frames.
Audio Fidelity and Quality. The quality of the generated audio is measured by: • AudioBox-Aesthetics.[47] We employ this model to evaluate perceptual quality across four dimensions: Production Quality (PQ), Production Complexity (PC),

Table 6. Complex set comparison with state-of-the-art joint audio-visual generation models. We evaluate performance across three categories: video quality, audio fidelity, and audio-visual synchronization. Best results are in bold, second-best are underlined.
Method Video Quality & Coherence Audio Fidelity & Quality Audio-Visual Synchronization
AQ ↑ IQ ↑ DD ↑ MS ↑ ID ↑ PQ ↑ PC ↓ CE ↑ CU ↑ WER ↓ IB-A ↑ Sync-C ↑ Sync-D ↓ DeSync ↓ IB ↑
MM-Diffusion [42] 0.32 0.43 0.13 0.99 - 5.37 4.07 4.27 5.89 - - - - - 0.12 JavisDit [34] 0.34 0.50 0.54 0.98 0.33 5.40 2.26 2.91 4.56 1.00 0.09 0.58 10.50 1.32 0.17 UniVerse-1 [50] 0.52 0.65 0.42 0.99 0.85 6.14 2.23 3.85 5.15 0.25 0.00 0.72 8.32 1.09 0.14 Ovi [35] 0.60 0.63 0.41 0.99 0.88 5.94 2.33 4.14 5.33 0.79 0.06 2.94 8.86 1.21 0.18 Harmony (Ours) 0.64 0.66 0.32 1.00 0.91 6.43 1.90 4.76 4.86 0.15 0.06 4.70 6.43 1.13 0.18
Apersonisspeaking:‘hurtstobeignoredbyyouandwatchyou praiseothers’.
Harmony (Ours)
Ovi
UniVerse-1
JavisDiT
Apersonisspeaking:‘hispositivechangefeelslikeit'scomingfrom peoplewhofinallygainedtheauthoritytospeak’.
Figure 7. More comparison on human-speech video generation.
Table 7. Chinese speech comparison with state-of-the-art models, focusing on audio fidelity (WER) and audio-visual synchronization. Best results are in bold, second-best are underlined.
Method WER ↓ Sync-C ↑ Sync-D ↓ IB ↑
JavisDiT [34] 4.84 1.27 12.63 0.20 UniVerse-1 [50] 2.32 0.91 11.02 0.22 Ovi [35] 9.10 4.45 10.79 0.20 Harmony (Ours) 0.92 5.05 9.38 0.22
Content Enjoyment (CE), and Content Usefulness (CU).
• Word Error Rate (WER). For speech synthesis, accuracy is measured by WER. We transcribe the generated audio using Whisper-large-v3[40] and compare it against the ground-truth transcript. • IB-A Score. Semantic alignment between the generated audio and the text prompt is quantified using the IB-A Score[10].
Audio-Visual Synchronization. The critical capability of joint generation is assessed through synchronization met
rics: • Sync-C & Sync-D. Lip-sync accuracy is explicitly measured using these two established metrics[7]. • DeSync Score. Predicted by Synchformer[25], this score quantifies the temporal misalignment (in seconds) between the audio and video streams. • ImageBind (IB) Score. Following [10], we use the IB score to assess overall audio-visual consistency by computing the cosine similarity between their respective feature embeddings.
D. More Quantitative Comparisons
In this section, we present detailed quantitative comparisons against state-of-the-art methods for joint audio-video generation, including Ovi [35], UniVerse-1 [50], JavisDiT [34], and MM-Diffusion [42]. Our evaluation spans multiple challenging test sets, with results for environmental sounds and complex audio scenes presented in Tables 4–6. Across these diverse datasets, our model consistently demonstrates superior performance. A key observation is our model’s superior video dynamism compared to-
 competitors. For in

Oceanwavesarecrashingandrollingontothesandybeach. Gunshotsarefiringrapidlywithsharploudcrackingsounds.
Harmony (Ours)
Ovi
UniVerse-1
JavisDiT
Figure 8. More comparison on environment-sound video generation.
stance, while UniVerse-1 and Ovi sometimes achieves a favorable Identity Distance (ID) score, this is often a consequence of generating static or nearly static videos, where frame-to-frame identity is trivially high but fails to capture the scene’s intended motion. Crucially, our method consistently achieves the lowest Word Error Rate (WER) and the best scores on audio-visual synchronization metrics. This combination of high fidelity, strong dynamism, and precise alignment underscores our model’s -
robustness in generating coherent and realistic content for complex scenes. Furthermore, we specifically assess the cross-lingual capabilities of the models on a dedicated Chinese speech test set, with key results summarized in Table 7. The results highlight a significant performance gap. Our model achieves a substantially lower WER and markedly better synchronization scores. It is worth noting that the standard WER metric is not perfectly optimized for the tokenization of the Chinese language; th-
erefore, the relative performance between models serves as the most meaningful indicator. The pronounced improvement in both WER and synchronization metrics strongly validates the effectiveness and superiority of our approach for cross-lingual audio-visual speech generation.
E. More Qualitative Comparisons
In this section, we present further qualitative comparisons of our method against state-of-the-art approaches: Ovi [35], UniVerse-1 [50], and JavisDiT [34]. We focus on two challenging scenarios: synchronized human speech and dynamic environmental sounds. We exclude MMDiffusion [42] from this analysis as it is designed for unconditional generation and is therefore not directly comparable.
Comparisons on Human Speech. As illustrated in Figure 7, our model demonstrates superior performance in audio-visual speech generation. Competing methods like Ovi and UniVerse-1 tend to produce static or minimally dynamic video frames, resulting in a ”talking head” effect with little natural movement. In contrast, our model generates high-fidelity video with fluid, naturalistic motion. The accompanying audio is clear and, most importantly, precisely synchronized with the lip movements, resulting i-
n a significantly more coherent and believable output.
Comparisons on Environmental Sounds. We further evaluate performance on generating dynamic environmental sounds in Figure 8, where the shortcomings of other methods are even more pronounced. JavisDiT struggles in this domain, producing low-quality video and unstable audio; for instance, in the ”gunfire” example, its generated audio waveform is highly irregular and fails to represent the acoustic event convincingly. UniVerse-1 and Ovi frequently generate static or partially static scenes. A clear e-
xample is the ”ocean waves” case, where the main waves remain frozen while only the water surface shows minimal movement. This lack of dynamism is compounded by poor audio-visual synchronization, where the sound of crashing waves does not align with the visual content. In stark contrast, our method excels in all aspects: it generates highquality, dynamic videos with realistic motion, and the synthesized audio is both high-fidelity and precisely synchronized with the visual events, delivering a coh-
esive and immersive audio-visual experience.

Reference Voice
Figure 9. Visualization of the voice-clone results of our model.
F. Details about Voice Clone
In this section, we provide additional details on the voice cloning capability of our model, which is achieved through the use of a reference audio input, Ar. The mechanism begins by processing a short reference audio clip (typically 1-3 seconds) containing the desired voice timbre with our pre-trained audio VAE encoder [5]. This yields a compact latent representation, zr, which effectively captures the unique, time-invariant characteristics of the speaker’s voice while discarding the original pho-
netic content. As described in our main methodology, this reference latent zr is then prepended to the noisy target audio latent za,t during each step of the denoising process. By conditioning the MM-DiT on this fixed reference latent, the model is guided to synthesize new speech—based on the phonetic content from the transcript Ts—in the desired target voice.
To qualitatively validate the effectiveness of this approach, we provide examples in Figure 9. The figure demonstrates that our model can successfully clone a variety of distinct voice timbres onto newly generated speech content. Importantly, this high-fidelity voice cloning is
achieved without degrading the visual quality of the generated video. The lip movements remain precisely synchronized with the cloned audio, and the overall facial expressions and video coherence are maintained at a high level. This highlights the model’s ability to disentangle audio timbre from other generation aspects, enabling robust voice cloning within a coherent audio-visual output.
G. Audio-Driven Performance
As detailed in our main paper, our Cross-Task Synergy Training strategy is fundamental to the model’s performance. A key component of this strategy is the inclusion of a deterministic, audio-driven video generation task, represented by the loss term Laudio
driven. During training, this task explicitly requires the video branch to generate video conditioned on the clean, non-noisy audio latent za,0 (i.e., the audio latent at timestep ta = 0). By directly optimizing for this objective, our model is inherently equipped with the ability to perform high-fidelity audio-driven video synthesis at inference time, making it a native capability rather than an emergent one. To demonstrate the effectiveness of this native capability,

Driven Audio
Figure 10. Visualization of the audio-driven results of our model.
we present qualitative results for audio-driven video generation in Figure 10. The figure showcases examples where video is generated solely from a target speech audio clip. The results exhibit high visual quality, characterized by natural facial expressions and coherent head movements. More importantly, the lip movements are precisely and accurately synchronized with the nuances of the input speech, validating the strong audio-visual alignment instilled by our training approach. This confirms tha-
t our Cross-Task Synergy strategy not only enhances joint generation but also directly enables high-fidelity, single-modality-driven applications.
H. More qualitative results
To further demonstrate the capabilities and robustness of our model, we present additional qualitative results organized into three key areas: generating high-quality human speech videos, rendering diverse artistic styles, and synthesizing complex ambient sounds.
More results on human speech. First, we showcase additional results on generating human speech videos in Fig
ure 11. These examples highlight the model’s ability to produce highly realistic talking heads with natural facial expressions and coherent movements. The synthesized speech is characterized by its clarity and natural prosody, capturing a range of vocal tones. Crucially, we maintain precise lip synchronization across all examples, which is fundamental for creating believable human speech. These results reinforce our model’s core capability in generating high-quality, well-synchronized audio-visual-
 speech content across various identities.
Diverse visual styles. Beyond photorealism, a key strength of our model is its capacity to generate video content across a wide spectrum of artistic styles. As illustrated in Figure 12, our model can produce outputs in distinct aesthetics such as Disney-style animation and traditional ink wash painting. These stylized generations maintain high visual quality, characterized by sharp details, vibrant colors, and temporally coherent motion consistent with the target aesthetic. This demonstrates the m-
odel’s flexibility in capturing and rendering complex artistic attributes.

Diverse Ambient Sounds. Our model demonstrates a remarkable capability to generate a wide spectrum of ambient sounds, extending beyond simple environmental noise. As illustrated in Figure 13, it can produce diverse and complex acoustic events—from the sharp, percussive bursts of fireworks to the structured harmonies of music. Crucially, each sound is rendered with high fidelity and meticulously synchronized with its corresponding visual source. This ability to construct rich, thematically consist-
ent auditory environments validates our model’s strength in enhancing the overall visual narrative. Collectively, these examples validate our model’s comprehensive generation capabilities. From producing highly synchronized human speech to rendering diverse artistic styles and creating rich, context-aware ambient soundscapes, our model demonstrates remarkable versatility. The ability to master these distinct yet complementary domains underscores its potential for creating highly expressive and imm-
ersive audio-visual content, pushing the boundaries beyond conventional generation methods.

Figure 11. More results on human-speech video generation.

Figure 12. Visualization of speech-video generation in diverse style.

Figure 13. More results on ambient-sound video generation.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:04.020Z
- **Text Length:** 72332 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 21 of 21
