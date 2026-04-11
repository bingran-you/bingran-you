# PDF Document: Gu et al. - 2024 - Context-Guided Spatio-Temporal Video Grounding.pdf

**File Path:** Gu et al. - 2024 - Context-Guided Spatio-Temporal Video Grounding.pdf

**Processed Date:** 2026-02-10T18:18:24.760Z

**File Size:** 4239.71 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2751

**Title:** Context-Guided Spatio-Temporal Video Grounding

**Collection:** Large Files

---

## Extracted Text Content

Context-Guided Spatio-Temporal Video Grounding
Xin Gu1,3∗, Heng Fan2∗, Yan Huang2, Tiejian Luo1, Libo Zhang1,3† 1University of Chinese Academy of Sciences, Beijing, China 2Department of Computer Science and Engineering, University of North Texas, Denton, USA 3Institute of Software, Chinese Academy of Sciences, Beijing, China
Abstract
Spatio-temporal video grounding (or STVG) task aims at locating a spatio-temporal tube for a specific instance given a text query. Despite advancements, current methods easily suffer the distractors or heavy object appearance variations in videos due to insufficient object information from the text, leading to degradation. Addressing this, we propose a novel framework, context-guided STVG (CG-STVG), which mines discriminative instance context for object in videos and applies it as a supplementary -
guidance for target localization. The key of CG-STVG lies in two specially designed modules, including instance context generation (ICG), which focuses on discovering visual context information (in both appearance and motion) of the instance, and instance context refinement (ICR), which aims to improve the instance context from ICG by eliminating irrelevant or even harmful information from the context. During grounding, ICG, together with ICR, are deployed at each decoding stage of a Transformer a-
rchitecture for instance context learning. Particularly, instance context learned from one decoding stage is fed to the next stage, and leveraged as a guidance containing rich and discriminative object feature to enhance the target-awareness in decoding feature, which conversely benefits generating better new instance context for improving localization finally. Compared to existing methods, CG-STVG enjoys object information in text query and guidance from mined instance visual context for more acc-
urate target localization. In our experiments on three benchmarks, including HCSTVG-v1/-v2 and VidSTG, CGSTVG sets new state-of-the-arts in m tIoU and m vIoU on all of them, showing its efficacy. The code will be released at https://github.com/HengLan/CGSTVG.
1. Introduction
Spatio-temporal video grounding task, or STVG, is recently introduced in [42] and aims to localize the object of interest
†Corresponding author: Libo Zhang (libo@iscas.ac.cn).
in an untrimmed video with a spatio-temporal tube (formed by a sequence of bounding boxes) given a free-form textual query. It is a challenging multimodal task which is involved with learning and understanding spatio-temporal visual representations in videos and their connections to the linguistic representation of text. Due to the importance in multimodal video understanding, STVG has drawn increasing attention in recent years (e.g., [17, 22, 30, 32, 36, 41, 42]).
Current methods usually use the given textual expression as the only cue for retrieving object in videos (see Fig. 1 (a)). Despite progress, they may degrade in complex scenes (e.g., in presence of distractors, or severe appearance changes, or both in videos), because text query is insufficient to describe and distinguish the foreground object in these cases. To alleviate this problem, one straightforward solution is to enhance the textual query by including more fine-grained linguistic descriptio-
n. However, there may exist several issues. First, this needs reconstruction of text queries for all objects with longer detailed descriptions, which is laborious as well as expensive. Second, longer text query will result in more computational overheads for training and inference. Third, although the text query can be enhanced with more details, it might still be hard to comprehensively describe certain visual details [44]. Thus, it is natural to ask: Is there any other way, besides enhancing tex-
t query, that improves efficiently, effectively, and friendly spatio-temporal video ground?
We answer yes! Instead of enhancing the text query, we propose to exploit visual information of the object to offer a guidance, directly from the vision perspective, for improving STVG. As indicated in the famous saying, “A Picture Is Worth a Thousand Words”, visual cues can provide richer information with description granularity about the target object. Nevertheless, for the STVG task, there is no additional external visual information allowed, besides the text query, for target localization. So,-
 where to acquire the desired visual information for improving STVG?
From the video itself! In this paper, we introduce a novel framework, context-guided STVG or CG-STVG, that mines internally discriminative visual context information from a video for the object, and uses it as a supplementary guidance
1
arXiv:2401.01578v1 [cs.CV] 3 Jan 2024

⋯⋯
Existing Methods Our CG-STVG
⋮
Query Query
Instance Context
Video Output Output
(a) Existing STVG methods (b) Our Context-Guided STVG
Context Guidance The boy in striped clothes raises his finger forward, then steps back against the door.
The boy in striped clothes raises his finger forward, then steps back against the door.
Figure 1. Comparison between (a) existing methods that localize the target using object information from text query and (b) our CG-STVG that enjoys object information from text query and guidance from mined instance context for STVG. Best viewed in color for all figures.
to improve target localization (see Fig. 1 (b)). The crux of CG-STVG lies in two crucial modules, including instance context generation (or ICG) and instance context refinement (or ICR). ICG focuses on discovering visual information of the object. Specifically, ICG first estimates potential regions for the foreground and then uses them to extract contextual information of both appearance and motion from the visual features. Considering there might exist noises in contextual features that are irrel-
evant or even harmful for the localization due to inaccurate foreground region estimation, ICR is leveraged to eliminate the useless information. Concretely, it adopts a joint temporal-spatio filtering way based on the temporal and spatio relevance scores to suppress irrelevant features, greatly enhancing the context for localization. In this work, we adopt DETR-similar architecture [5] to implement CG-STVG. During video grounding, ICG, together with the ICR, are deployed at each of the decoding s-
tage for instance context learning. Particularly, the instance context learned from one decoding stage is fed to the next stage, and used as a supplementary guidance containing rich and discriminative object information to enhance target-awareness of decoding feature, which in turn benefits generating better new instance context for improving the localization finally. Fig. 2 illustrates the architecture of CG-STVG. To our best knowledge, CG-STVG is the first to mine instance visual context from th-
e videos to guide STVG. Compared with existing approaches, CG-STVG can leverage the object information from both text query, as in current methods, and guidance from its mined instance context for more accurate target localization. To validate its effectiveness, we conduct extensive experiments on three datasets, including HCSTVG-v1/-v2 [32] and VidSTG [43], CG-STVG outperforms existing methods and sets new state-of-the-arts in m tIoU and m vIoU on all of these benchmarks, evidencing the efficacy -
of guidance from instance context for STVG. In summary, the main contributions are as follows:
♠ We introduce CG-STVG, a novel and simple approach for improving STVG via mining instance visual context from
the video to guide target localization.
♡ We propose an instance context generation module (ICG) to discover visual context information of the object.
♣ An instance context refinement (ICR) module is presented to improve the context of object by eliminating irrelevant contextual features, greatly enhancing the performance.
♢ In extensive experiments on three benchmarks, including HCSTVG-v1/-v2 [32] and VidSTG [43], CG-STVG sets new state-of-the-arts, showing the effectiveness.
2. Related Work
Spatio-temporal video grounding. Spatio-temporal video grounding [32] aims to generate a spatio-temporal tube for a target given its text query. Early methods (e.g., [32, 41, 42]) mainly follow a two-stage paradigm, which leverages a pretrained detector to obtain the candidate region proposals and then finds the correct region proposals through the designed network. The main issue of these methods is the heavy reliance on pre-trained detectors, and the performance is restricted by a detector’s own-
 limitations. Differently, recent works (e.g., [17, 22, 30, 36]) adopt a one-stage paradigm, directly generating spatio-temporal object proposals without relying on any pre-trained object detectors. The method of [30] is the first of this kind, which leverages the visuallinguistic transformer to generate a spatio-temporal object tube corresponding to the textual sentence. Inspired by the success of the model for text-conditioned object detection [18], the method in [36] introduces a spatio-tempora-
l transformer decoder together with a video-text encoder for STVG. The approach of [17] utilizes a multi-modal template as the global objective to deal with the inconsistency issue for improvement. The work of [22] proposes to explore static appearance and dynamic motion cues collaboratively for target localization, showing promising results. In this paper, we focus on exploiting discriminative instance visual context from the video and adopt it as a guid
2

Time
Multimodal Feature Fusion
(in Sec. 3.1)
2D
Backbone
Text
Backbone
There is a white dog pushing a white and black dog.
Spatial-Decoding Block 1 (Fig. (b))
ICG (Sec. 3.3)
ICR (Sec. 3.4)
P!
Q!
X#
X#
X# C"
Video
Text
3D
Backbone
Decoding Stage 1
⋯
⋯
Spatial Head
P"
Q" Spatial-Decoding
Block 2 (Fig. (b))
ICG (Sec. 3.3)
ICR (Sec. 3.4)
X#
X#
X# C#
P#
Q#
Decoding Stage 2
Temporal Head
Predicted Tube
X#
Multimodal Encoder (Sec. 3.1) Context-Guided Decoder for Grounding (Sec. 3.2)
Temporal-Decoding Block 1 (Fig. (c))
Temporal-Decoding Block 2 (Fig. (c))
(b) Spatial-Decoding Block k
Cross-Attention
Block
Q$
Self-Attention
Block
X#
Q$%"
C$
Cross-Attention
Block
P$
Self-Attention
Block
X#
P$%"
MLP
(c) Temporal-Decoding Block k
(a) Pipeline of CG-STVG for spatio-temporal video grounding
w/ (k>1) or w/o (k=1)
Cross-Attention
Block
Figure 2. Overview of our method, which consists of a multimodal encoder for feature extraction and a context-guided decoder by cascading a set of decoding stages for grounding. In each decoding stage, instance context is mined to guide query learning for better localization.
ance for target localization. Different from existing STVG approaches (e.g., [17, 22, 30, 36]) which explore object information only from the text query for localization, the proposed CG-STVG is able to leverage both textual cue and object guidance from the mined instance context, significantly enhancing the STVG performance and outperforming other methods, particularly in complicated scenarios with similar distractors or large appearance changes.
Temporal Grounding. Temporal grounding aims at locating and understanding specific objects or events in a video. In specific, the goal is to jointly comprehend visual information and natural language descriptions in a video, identify the target objects, understand their actions and environments, and link them with the natural language descriptions. Relevant to but different than the STVG, temporal grounding does not require bounding box localization of the target. Numerous approaches (e.g., [3, 4,-
 7, 10, 25, 34, 40]) have been introduced recently. For example, the algorithm of [3] proposes an effective strategy to avoid the long-form burden by applying a guidance model for grounding time. The approach of [4] leverages cross-modal contrastive learning at coarse-grained (video-sentence) and fine-grained (clipword) levels for grounding. The work in [7] designs a multimodal framework to learn complementary features from images, flow, and depth for the temporal grounding. Different than these m-
ethods, we focus on the more challenging STVG that spatially and temporally localizes the object.
Vision-Language Modeling. Vision-language modeling is to simultaneously process visual and linguistic information for joint multimodal understanding and it has drawn extensive interest from researchers in various tasks such as visual question answering [2, 6, 16, 20, 28, 39], image captioning [1, 13, 38], video captioning [14, 27, 29, 37, 45], text-toimage generation [21, 26], visual-language tracking [9, 46], etc. Different from the above tasks, we focus on modeling
vision and language for spatio-temporal target localization.
3. The Proposed Method
Overview. In this work, we introduce CG-STVG by mining the discriminative visual context of object and using it as a guidance to improve the target localization. Inspired by the DETR [5] for detection, CG-STVG employs an encoderdecoder architecture, which comprises the multimodal encoder (Sec. 3.1) and the context-guided decoder (Sec. 3.2). As illustrated in Fig. 2, the encoder aims at generating multimodal visual-linguistic feature that contains object information from text query, which is sent t-
o the context-guided decoder for target localization guided by instance context learned with ICG (Sec. 3.3) and ICR (Sec. 3.4).
3.1. Multimodal Encoder
The multimodal encoder is to generate a robust multimodal feature for the target localization in decoder, and consists of visual and textual feature extraction and fusion as follows.
Visual Feature Extraction. To leverage rich cues from the videos, we extract both the appearance and motion features. In specific, we first sample a set of frames F = {fi}Nv
i=1 of
length Nv from the video, and then utilize ResNet-101 [11] for appearance feature extraction and VidSwin [24] for motion feature extraction, respectively. We denote the appearance feature as Va = {va
i }Nv
i=1, where va
i ∈ RH×W ×Ca with H, W , and Ca the height, width and channel dimensions. Similarly, we denote the motion feature as Vm = {vm
i }Nv
i=1,
where vm
i ∈ RH×W ×Cm with Cm the channel dimension. Textual Feature Extraction. We adopt RoBERTa [23] for textual feature extraction. We first tokenize query to obtain a word sequence W = {wi}i=Nt
i=1 and then apply RoBERTa
to produce an embedding sequence T = {ti}i=Nt
i=1 , where
ti ∈ RCt with Ct the word embedding dimension.
Multimodal Feature Fusion. STVG is a multimodal task.
3

To enhance feature representation, we perform multimodal fusion of the appearance feature Va, motion feature Vm, and text feature T . Specifically, we first map Va, Vm and T to the same channel number through linear projection and then concatenate corresponding features to obtain the representation of multimodal features X = {xi}Nv
i=1 as follows,
xi = [va
i1 , va
i2 , ..., va
iH×W | {z }
appearance features va
i
, vm
i1 , vm
i2 , ..., vm
iH×W | {z }
motion features vm
i
, t1, t2, ..., tNt
| {z }
textual features T
]
where xi is the multimodal feature in frame i. Then, we add position embedding Epos and type embedding Etyp to X by
X ′ = X + Epos + Etyp
Finally, we perform multimodal feature fusion by applying a self-attention encoder on X ′ as follows,
X ̃ = SAEncoder(X ′)
where X ̃ is the enhanced multimodal feature for decoding, and SAEncoder(·) the self-attention encoder with L (L=6) standard self-attention encoder blocks [33]. Please refer to supplementary material for architecture of SAEncoder(·).
3.2. Context-Guided Decoder for Grounding
CG-STVG designs a context-guided decoder with K stages in a cascade for grounding as in Fig. 2 (a). Since CG-STVG needs to locate target spatially and temporally, each decoding stage has two blocks, including a spatial-decoding block (SDB) and a temporal-decoding block (TDB), for spatial and temporal feature learning. In each stage (except for the first), instance context by ICG and ICR (see later) is applied as a guidance with rich visual cue to enhance the query feature, which is in turn used to-
 generate new instance context. Specifically, let Qk−1={qk−1
i }Nv
i=1 denote spatial query
features for Nv frames and Pk−1={pk−1
i }Nv
i=1the temporal
query features sent to the kth (1 < k ≤ K) decoding stage. Q0 and P0 fed to the first decoding stage are initialized following DETR [5]. Then, in decoding stage k, we use SDBk to learn query feature Qk using instance context Ck−1 from decoding stage (k-1) as a guidance and multimodal feature X ̃ from the encoder. As in Fig. 2 (b), SDBk contains three components with one self-attention and two cross-attention blocks. The self-attention block is to enhance query features by interacting them. The for-
mer cross-attention block aims to guide query features using Ck−1, while the later is
for learning object position information from X ̃. The process of SDBk for learning Qk can be formulated as follows,
Qk = SDBk(Qk−1, Ck−1, X ̃)
= CA(CA(SA(Qk−1), Ck−1), X ̃)
where SA(z) denotes the self-attention block with z generating query/key/value, and CA(z, u) the cross-attention block
(a) Attention maps in frames for the spatial queries in SDB without instance context
Text: The woman wearing a brown coat walks into the wind.
(b) Attention maps in frames for the spatial queries in SDB with instance context
Figure 3. Attention maps for spatial queries in video frames in the spatial-decoding block without (image (a)) and with our proposed instance context (image (b)). We can clearly see that our instance context effectively improves target-awareness in the spatial queries and thus the target position information learning for localization. The red boxes indicate the foreground object to localize.
with z generating query and u key/value, as in [33]. Due to limited space, please see supplementary material for detailed architectures. For SDB1, because the instance context does not exist, Q1 is learned as follows,
Q1 = SDB1(Q0, X ̃) = CA(SA(Q0), X ̃)
In decoding, the spatial query feature aims to learn object information progressively from X ̃. In our SDB, the spatial query feature is guided by the visual context of the object to enhance its target-awareness in vision perspective such that it can explicitly exploit rich and discriminative visual cues to learn more accurate position information from X ̃ for better target localization, even when text cannot well describe the object, which significantly differs than existing methods (e.g., [17, 2-
2, 30, 36]). Similarly in decoding stage k, the temporal query feature Pk is learned by TDBk which consists of self-attention and cross-attention blocks followed by the MLP, as in Fig. 2 (c). The process for learning Pk can be expressed as follows,
Pk = TDBk(Pk−1, X ̃) = MLP(CA(SA(Pk−1), X ̃))
Notice that, instance context Ck−1 is not used in TDB, as it mainly works to localize target when it exists in the frames, instead of detecting if the object exists or not. When applying instance context in TDB, it even cause slight performance drop. Thus, instance context is only applied in STB. Once generating Qk and Pk, they are used to learn new instance context Ck in decoding stage k with already acquired object position and frame information using ICG and ICR (as explained later), which will-
 be applied to guide further query learning in subsequent stages for improving target-awareness and position information learning, as evidenced in Fig. 10, in a progressive way. In the decoding stage K, the learned QK and PK are fed to two heads to
predict the final object boxes BK = {bi}Nv
i=1, where bi ∈ R4
4

Pk
Cka Ckm Ck
m,t
Ck
a,t
Sigmoid
Cka Ckm
HFt
skt
MLP
MLP
Avg.
Sigmoid
MLP
Sigmoid
sks
Ck
m,ts
Ck
a,ts Temporal Refinement
Spatial Refinement
MLP
C
HFs
Ck
X෩ X෩a2d
X෩m2d
Qk
Rk
Cka
Ckm
RoIAlign
MLP
RoIAlign
extract &
reshape
(a) ICG (b) ICR
Figure 4. Illustration ICG (image (a)) and ICR (image (b)).
denotes the central position, width and height of the prediction box, and the start and end probabilities of each frame HK = {(hs
i , he
i )}Nv
i=1, where the start and end times are determined by the maximum joint start and end probability.
3.3. Instance Context Generation (ICG)
To exploit instance context in the video, we introduce a simple yet effective module, termed instance context generation (ICG). Specifically, ICG is deployed in each decoding stage k of the context-guided decoder and takes the spatial query feature Qk learned from SDBk to discover the potential features of the foreground (i.e., the so-called instance context), as in Fig. 4 (a). The intuition is that, during the progressive video grounding for localization, Qk has gradually learned more and more po-
sition information for the object and thus can be employed to find target regions in a video, which are used to further mine object features in the decoding stage k. To this end, we first utilize a three-layer MLP in ICG to transform Qk into foreground regions Rk as follows,
Rk = MLP(Qk) = {rk
i }Nv
i=1 (1)
where rk
i ∈ R4 denotes estimated object center and scale in frame i. Then with Rk, we leverage it to extract the corresponding foreground features, including both appearance and motion features. In specific, we first extract the appearance and motion features, denoted by X ̃a and X ̃m, from the
multimodal feature X ̃, and then reshape them into 2D feature maps X ̃a2d=reshape(X ̃a) and X ̃2md=reshape(X ̃m). After that, we use RoIAlign [12] to extract appearance and motion instance context as follows,
Ca
k = RoIAlign(X ̃2d
a , Rk) Cm
k = RoIAlign(X ̃2d
m , Rk)
where Ca
k denotes the appearance instance context and Cm
k
the motion instance context. Ca
k mainly encompass various rich visual attributes of the target, such as shape, texture and color, while Ca
k predominantly captures motion properties of the object, including speed and trajectory. Both of these two context are beneficial to enhance the target-awareness, enhancing target-awareness in spatial query feature for better target position learning.
Text: The boy in white clothes turns and stops by the railing touches the railing with his hand.
(a) Instance context generated from ICG
(b) Instance context refined after ICR
deleted deleted
Figure 5. Illustration of ICR for context refinement. The red boxes indicate the foreground, while yellow boxes the instance context. We can see that, our ICR is able to help eliminate irrelevant features in the initial instance context generated from ICG.
3.4. Instance Context Refinement (ICR)
Considering that the estimated foreground regions may contain noise because the target position information in Qk is not enough, the instance visual context of Ca
k and Cm
k might contain irrelevant and even harmful features, and thus is degraded. To remedy, we further present the instance context refinement module (ICR) to refine Ca
k and Cm
k for better final instance context by eliminating irrelevant features. In particular, we introduce a two-level temporal-spatial joint refinement mechanism in ICR. In the first level, instance context is refined by a temporal filter with temporal-confidence of each feature. Then, at the second level, a spatial filter is designed to suppress irrelevant features. Fig. 4 (b) shows the architecture of ICR, which is detailed as follows. Temporal Refinement. Because instance context is only related to t-
he object in a certain temporal window, instead of the whole video, we leverage the temporal query feature Pk in decoding stage k to calculate the confidence score of each frame being relevant to the object. Specifically, we simply apply an MLP module followed by a Sigmoid function to transform Pk to the temporal confidence scores as follows,
st
k = Sigmoid(MLP(Pk))
where st
k ∈ RNv represents the temporal confidence scores.
The higher the st
k(i) is, the more relevant the instance feature in frame i is. To eliminate irrelevant feature, we design a filter to drop instance context features with temporal confidence scores lower than a preset threshold θt as follows,
C a,t
k = HFt(Ca
k , st
k, θt) Cm,t
k = HFt(Cm
k , st
k, θt)
where Ca,t
k and Cm,t
k are refined instance context. HFt is a
high-pass filter that passes instance context features of Ca
k
and Cm
k with confidence scores greater than θt. Spatial Refinement. Different from the temporal refinement, spatial refinement aims to measure the quality of context features Ca
k and Cm
k from spatial dimension. To this end, we apply two MLP modules with each followed by a Sigmoid function to compute the spatial appearance and
5

motion confidence scores, which are averaged to obtain the final spatial confidence scores, as follows,
ss
k = (Sigmoid(MLP(Ra
k)) + Sigmoid(MLP(Rm
k )))/2
where ss
k ∈ RNv represents spatial confidence scores which are measured using the predicted IoU confidence [15], originally used for detection. To suppress irrelevant features, we drop features in Ca,t
k and Cm,t
k with temporal confidence scores lower than a preset threshold θs as follows,
C a,ts
k = HFs(Ca,t
k , st
k, θs) Cm,ts
k = HFs(Cm,t
k , st
k, θs)
where Ca,ts
k and Cm,ts
k are refined instance context. HFs is a high-pass filter that passes instance context features with confidence scores greater than θs. Fig. 5 illustrates the instance refinement by ICR. Final Instance Context. After the two-level refinement, we concatenate Ca,ts
k and Cm,ts
k and apply an MLP module to obtain the final instance context Ck as in Fig. 4, which is used to improve target position learning in the next stage.
3.5. Optimization
Given a video and its text, after the kth decoding stage, we predict: (1) start timestamps Hs
k = {hs
i }Nv
i=1 and end timestamps He
k = {he
i }Nv
i=1 of the video clip related to text, (2)
bounding box Bk = {bi}Nv
i=1 of the object on which the text
focuses, (3) temporal and spatial confidence scores st
k and
ss
k in context refinement. In training, given groundtruth start
timestamps Hs∗, the end timestamps He∗, the bounding box
sequence B∗. For temporal grounding, the KL divergence and binary cross-entropy are used as the loss function and the losses of start and end times are computed as follows,
Lt
k =λsLKL(H∗
s, Hs
k) + λeLKL(H∗
e, He
k )+
λtLBCE ((H∗
s, H∗
e ), st
k)
For spatial grounding, smooth L1 loss, IoU loss and binary cross-entropy loss are used as follows,
Ls
k =λlLL1 (B∗, Bk) + λiLIoU (B∗, Bk)+
λbLBCE(IoU (B∗, Bk), ss
k)
The total training loss for training is L = PK
k=1(Lt
k + Ls
k ).
4. Experiments
Implementation. Our CG-STVG is implemented using PyTorch. We use ResNet-101 [11] as 2D backbone, VidSwintiny [24] as 3D backbone, and RoBERTa-base [23] as text backbone. Following [17, 22], we utilize pre-trained MDETR [18] to initialize the 2D backbone and text backbone. We use the Adam optimization algorithm [19] with
a weight decay of 1e − 4 to end-to-end train our method. The initial learning rate for three backbones is set to 2e − 5 and 3e − 4 for the rest modules. We uniformly resize the video frames to a short side of H=420 and data augmentation methods such as random resizing and random cropping are applied to all training videos. The number of attention heads is set to 8 and the hidden dimension of the encoder and decoder is 256. The batch size is set to 16 in HCSTVGv1, 32 in HCSTVG-v2 and 64 in VidSTG d-
ataset. The loss weight parameters λs, λe, λt, λl, λi, λb are set to 10, 10, 1, 5, 3, 1, respectively. The number of decoding stages K is set to 6. We set the video frame length Nv to 64 and the text sequence length Nt to 30. The dimensions of the appearance feature, motion feature and text embedding Ca, Cm and Ct are 2048, 768, 768. The temporal threshold θt and spatial threshold θs are set to 0.7 and 0.8, respectively.
4.1. Datasets and Metrics.
Datasets. Extensive experiments are conducted on three datasets, i.e., HCSTVG-v1 [32], HCSTVG-v2 [32] and VidSTG [42]. HCSTVG, focusing solely on humans in videos, is available in two versions: HCSTVG-v1 and HCSTVGv2. Following [17, 32, 36], we divide the HCSTVG-v1 into 4, 500 and 1, 160 video-sentence pairs for training and testing, respectively. HCSTVG-v2 further expands HCSTVGv1, which includes 10, 131, 2, 000, and 4, 413 samples for training, validation, and testing, respectively. As the annot-
ations for test set are not publicly available, we present the results based on validation set as existing methods [22, 36]. VidSTG is another dataset constructed based on video relation dataset. Following [17, 22, 36], VidSTG is divided into training, validation, and test subsets with 80, 684, 8, 956, and 10, 303 distinct sentences, respectively, and 5, 436, 602, and 732 distinct videos, respectively.
Metrics. Following [17, 30, 36], we use m tIoU, m vIoU and vIoU@R as evaluation metrics. m tIoU measures temporal localization performance, while m vIoU and vIoU@R evaluate spatial localization. In specifc, m tIoU represents the average tIoU score over all testing sequences and tIoU is calculated as |Pi|
|Pu| , where Pi and Pu represent the intersection and union between the predicted segments and the ground-truth segments, respectively. Similarly, m vIoU represents the average vIoU score over all testing videos and vIoU is calculated as 1
|Pu |
P
t∈Pi IoU(bt∗, bt), where bt∗ and bt are the groundtruth bounding box and the predicted bounding box of the t-th frame. As for vIoU@R, it represents the ratio of samples with vIoU > R in test subset.
4.2. State-of-the-art Comparison
HCSTVG-v1 and HCSTVG-v2. To validate the effectiveness of CG-STVG, we compare it with other state-of-thearts on HCSTVG-v1 and HCSTVG-v2. Tab. 1 shows the results on the HCSTVG-v1 test set, and our proposed method
6

Methods m tIoU m vIoU vIoU@0.3 vIoU@0.5
STGVT [TCSVT22] [32] - 18.2 26.8 9.5 STVGBert [ICCV2021] [30] - 20.4 29.4 11.3 TubeDETR [CVPR22] [36] 43.7 32.4 49.8 23.5 STCAT [NeurIPS22] [17] 49.4 35.1 57.7 30.1 CSDVL [CVPR23] [22] - 36.9 62.2 34.8 Baseline 50.4 36.5 58.6 32.3 CG-STVG 52.8 ( +2.4) 38.4 ( +1.9) 61.5 ( +2.9) 36.3 ( +4.0)
Table 1. Comparison with others on HCSTVG-v1 test set (%).
Methods m tIoU m vIoU vIoU@0.3 vIoU@0.5
PCC [arxiv2021] [8] - 30.0 - 2D-Tan [arxiv2021] [31] - 30.4 50.4 18.8 MMN [AAAI22] [35] - 30.3 49.0 25.6 TubeDETR [NeurIPS22] [36] - 36.4 58.8 30.6 CSDVL [CVPR23] [22] 58.1 38.7 65.5 33.8 Baseline 58.6 37.8 62.4 32.1 CG-STVG 60.0 ( +1.4) 39.5 ( +1.7) 64.5 ( +2.1) 36.3 ( +4.2)
Table 2. Comparison with others on HCSTVG-v2 val. set (%).
Declarative Sentences Interrogative Sentences
Methods m tIoU m vIoU vIoU@0.3 vIoU@0.5 m tIoU m vIoU vIoU@0.3 vIoU@0.5
STGRN [CVPR20] [43] 48.5 19.8 25.8 14.6 47.0 18.3 21.1 12.8 OMRN [IJCAI20] [41] 50.7 23.1 32.6 16.4 49.2 20.6 28.4 14.1 STGVT [TCSVT22] [32] - 21.6 29.8 18.9 - - - STVGBert [ICCV21] [30] - 24.0 30.9 18.4 - 22.5 26.0 16.0 TubeDETR [CVPR22] [36] 48.1 30.4 42.5 28.2 46.9 25.7 35.7 23.2 STCAT [NeurIPS22] [17] 50.8 33.1 46.2 32.6 49.7 28.2 39.2 26.6 CSDVL [CVPR23] [22] - 33.7 47.2 32.8 - 28.5 39.9 26.2 Baseline 49.7 32.4 45.0 31.4 48.8 27.7 38.7 25.6
CG-STVG 51.4 ( +1.7) 34.0 ( +1.6) 47.7 ( +2.7) 33.1 ( +1.7) 49.9 ( +1.1) 29.0 ( +1.3) 40.5 ( +1.8) 27.5 ( +1.9)
Table 3. Comparison with existing state-of-the-art methods on VidSTG test set (%).
ICG ICR m tIoU m vIoU vIoU@0.3 vIoU@0.5
- - 50.42 36.52 58.62 32.33 ✓ - 51.07 37.42 59.48 32.93 ✓ T 51.26 37.86 60.95 33.28 ✓ S 52.80 38.04 60.90 35.40 ✓ S+T 52.84 38.42 61.47 36.29
Table 4. Ablation study of ICG and ICR on HCSTVG-v1 test set of. “T” and “S” represent the temporal and spatial refinement.
achieves state-of-the-art performance in 3 out of 4 metrics. Specifically, our method improves the 3.4 absolute m tIoU score compared to STCAT [17] and improves 1.5 absolute m vIoU score compared to CSDVL [22]. Compared to our baseline that does not use the proposed instance context by removing ICG and ICR modules, our method achieves improvements of 2.4, 1.9, 2.9, and 4 scores on the four metrics, respectively. On the validation set of the HCSTVG-v2, our method also achieves SOTA in 3 out of 4 me-
trics as shown in Tab. 2. CSDVL [22] won the first place in the HCSTVG track of the 4-th Person in Context Challenge. Compared to the CSDVL, our approach outperforms it by 1.9, 0.8 and 2.5 scores on m tIoU, m vIoU, and vIoU@0.5 metrics, respectively. The significant improvement in metric vIoU@0.5 across two datasets indicates that instance context excels at refining bounding boxes with an IoU under 0.5.
VidSTG Dataset. Besides HCSTVG-v1/-v2, we compare CG-STVG with other methods on the challenging VidSTG dataset in Tab. 3. As shown, our method achieves the best results on all 8 metrics for both declarative sentences and in
θt m tIoU m vIoU vIoU@0.5 0.3 52.82 38.19 35.34 0.5 52.80 38.29 35.43 0.7 52.84 38.42 36.29 0.9 52.84 38.27 36.12
(a) Ablation study for θt.
θs m tIoU m vIoU vIoU@0.5 0.4 51.64 37.47 32.41 0.6 51.86 37.44 31.64 0.8 52.84 38.42 36.29 0.9 51.79 37.61 32.33
(b) Ablation study for θs.
Table 5. Ablation of thresholds in ICR on HCSTVG-v1 test set.
Usage of st
k and ss
k m vIoU vIoU@0.3 vIoU@0.5
Two-level (ours) 38.42 61.47 36.29 one-level w/ “st
k + ss
k” 38.31 61.12 35.69 one-level w/ “st
k × ss
k” 38.25 61.07 35.52
Table 6. Ablation of usage of temporal and spatial confidence.
TDB m tIoU m vIoU vIoU@0.3 vIoU@0.5
w/o Instance Context 52.84 38.42 61.47 36.29 w/ Instance Context 52.61 38.01 61.03 35.78
Table 7. Ablation on applying instance context to TDB.
terrogative sentences. With the proposed instance context, our method shows an improvement of 1.7 m tIoU scores and 1.6 m vIoU scores for declarative sentences and a gain of 1.1 m tIoU scores and 1.3 m vIoU scores for interrogative sentences over the baseline. The experimental results further evidence the effectiveness of our method, showing that instance context information helps ground the target.
4.3. Ablation Study
Impact of ICG and ICR. The key of CG-STVG lies in two simple yet effective modules, including ICG and ICR, for
7

GT
CG-STVG
Baseline
Video
GT
CG-STVG
Baseline
Video
Text: The man in blue clothes speaks, and the blue man follows him and walks forward.
Text: The woman in the white dress to the right of the woman in the gray dress hands the document to the gray woman.
Figure 6. Qualitative results on HCSTVG-v1 test set. Our method (red) shows better localization than the baseline (blue).
instance context learning. In order to verify their effectiveness, we conduct ablation experiments on HCSTVG-v1 in Tab. 4. As in Tab. 4, our baseline achieves a m vIoU score of 36.52 without ICG and ICR module. After incorporating ICG for instance context, the m vIoU score is increased to 37.42, demonstrating that the visual context extracted helps improve the grounding performance of the model. To enhance the quality of the instance context, we employ a spatial-temporal joint refinement mechanism-
 in ICR module. When we applied temporal refinement alone, we observed that the m vIoU score improved by 0.44. Applying the spatial refinement alone resulted in a slightly higher increase of 0.62. However, when we employed both the spatial and temporal refinements simultaneously, the performance improvement is the most significant, with an increase of 1.0, 37.42 vs 38.42. This demonstrates the synergistic effect of spatial and temporal refinements and underscores the effectiveness of our proposed -
spatial-temporal joint refinement mechanism in enhancing model performance.
Impact of temporal and spatial thresholds in ICR. In order to improve the quality of the instance visual context, we use the ICR module to filter the visual context from the ICG module. The ICR module refines the instance context through a two-level temporal-spatial joint refinement mechanism. Within this mechanism, there are two crucial parameters, temporal threshold θt and spatial threshold θs, which are used as standards to filter the context. To investigate the influence of the temporal and sp-
atial threshold on the performance of the model, we performed ablation experiments at different thresholds, as shown in Tab. 5. We can see that the model performs best when θt is 0.7 and θs is 0.8.
Impact of temporal and spatial confidence score usage. Temporal and spatial confidence scores st
k and ss
k are crucial for instance context refinement. In this work, we adopt a two-level method to separately use st
k and ss
k for refinement. To further study the impact of different methods for the usage of temporal and spatial confidence scores, we design two additional one-level methods for refinement: one is to add st
k and ss
k and then apply a single fused confidence
for refinement (one-level with “st
k + ss
k”), and the other is to
multiple st
k and ss
k for refinement (one-level with “st
k ×ss
k ”). We show the architectures of these two variants and comparison with our strategy in supplementary material due to limited space. We conduct experiments on HCSTVG-v1 in Tab. 6, and we can see that our two-level method to separately use st
k and ss
k achieves better performance.
Impact of applying instance context to TDB. From the Tab. 4, it can be seen that as the spatial grounding improves with the help of context, the temporal grounding is also improving, 50.42 vs 52.84. To explore the impact of applying instance context to the TDB on model performance, we conduct ablation study as shown in Tab. 7. There is a slight drop in model performance after employing context to the TDB. We believe the temporal branch is mainly used to determine the boundaries of events, and the -
context from the spatial branch has a gap with the temporal branch. Directly using context in temporal branch may cause boundary blur.
4.4. Qualitative Analysis
We present qualitative results in Fig. 6. Compared to our baseline, CG-STVG could accurately locate the target temporally and spatially with instance context. More results
8

can be seen in the supplementary material.
5. Conclusion
In this work, we introduce CG-STVG, a novel and simple method for improving STVG via exploiting instance visual context from video to guide target localization. The strength of CG-STVG comes from two key modules, including ICG that mines coarse visual context, and ICR that refines this context using time and space information. The experimental results on three challenging benchmarks further demonstrate the effectiveness of our method.
References
[1] Jyoti Aneja, Aditya Deshpande, and Alexander G Schwing. Convolutional image captioning. In CVPR, 2018. 3 [2] Stanislaw Antol, Aishwarya Agrawal, Jiasen Lu, Margaret Mitchell, Dhruv Batra, C Lawrence Zitnick, and Devi Parikh. Vqa: Visual question answering. In ICCV, 2015. 3 [3] Wayner Barrios, Mattia Soldan, Fabian Caba Heilbron, Alberto Mario Ceballos-Arroyo, and Bernard Ghanem. Localizing moments in long video via multimodal guidance. In ICCV, 2023. 3 [4] Meng Cao, Tianyu Yang, Junwu Weng, Ca-
n Zhang, Jue Wang, and Yuexian Zou. Locvtp: Video-text pre-training for temporal localization. In ECCV, 2022. 3 [5] Nicolas Carion, Francisco Massa, Gabriel Synnaeve, Nicolas Usunier, Alexander Kirillov, and Sergey Zagoruyko. End-toend object detection with transformers. In ECCV, 2020. 2, 3, 4 [6] Long Chen, Yuhang Zheng, and Jun Xiao. Rethinking data augmentation for robust visual question answering. In ECCV, 2022. 3 [7] Yi-Wen Chen, Yi-Hsuan Tsai, and Ming-Hsuan Yang. Endto-end multi-modal video-
 temporal grounding. In NeurIPS, 2021. 3 [8] YiYu XinyingWang WeiHu XunLuo ChengLi. 2rd place solutions in the hc-stvg track of person in context challenge 2021. 7 [9] Mingzhe Guo, Zhipeng Zhang, Heng Fan, and Liping Jing. Divert more attention to vision-language tracking. NeurIPS, 2022. 3 [10] Jiachang Hao, Haifeng Sun, Pengfei Ren, Jingyu Wang, Qi Qi, and Jianxin Liao. Can shuffling video benefit temporal bias problem: A novel training framework for temporal grounding. In ECCV, 2022. 3 [11] Kaim-
ing He, Xiangyu Zhang, Shaoqing Ren, and Jian Sun. Deep residual learning for image recognition. In CVPR, 2016. 3, 6 [12] Kaiming He, Georgia Gkioxari, Piotr Dolla ́r, and Ross Girshick. Mask r-cnn. In ICCV, 2017. 5 [13] Lun Huang, Wenmin Wang, Jie Chen, and Xiao-Yong Wei. Attention on attention for image captioning. In ICCV, 2019. 3
[14] Vladimir Iashin and Esa Rahtu. Multi-modal dense video captioning. In CVPR, 2020. 3
[15] Borui Jiang, Ruixuan Luo, Jiayuan Mao, Tete Xiao, and Yuning Jiang. Acquisition of localization confidence for accurate object detection. In ECCV, 2018. 6 [16] Huaizu Jiang, Ishan Misra, Marcus Rohrbach, Erik LearnedMiller, and Xinlei Chen. In defense of grid features for visual question answering. In CVPR, 2020. 3 [17] Yang Jin, Yongzhi Li, Zehuan Yuan, and Yadong Mu. Embracing consistency: A one-stage approach for spatiotemporal video grounding. In NeurIPS, 2022. 1, 2, 3, 4, 6, 7 [18] Aishw-
arya Kamath, Mannat Singh, Yann LeCun, Gabriel Synnaeve, Ishan Misra, and Nicolas Carion. Mdetrmodulated detection for end-to-end multi-modal understanding. In ICCV, 2021. 2, 6 [19] Diederik P Kingma and Jimmy Ba. Adam: A method for stochastic optimization. arXiv preprint arXiv:1412.6980, 2014. 6 [20] Thao Minh Le, Vuong Le, Svetha Venkatesh, and Truyen Tran. Hierarchical conditional relation networks for video question answering. In CVPR, 2020. 3 [21] Bowen Li, Xiaojuan Qi, Thomas Lukasiewicz, an-
d Philip Torr. Controllable text-to-image generation. NeurIPS, 2019. 3
[22] Zihang Lin, Chaolei Tan, Jian-Fang Hu, Zhi Jin, Tiancai Ye, and Wei-Shi Zheng. Collaborative static and dynamic visionlanguage streams for spatio-temporal video grounding. In CVPR, 2023. 1, 2, 3, 4, 6, 7 [23] Yinhan Liu, Myle Ott, Naman Goyal, Jingfei Du, Mandar Joshi, Danqi Chen, Omer Levy, Mike Lewis, Luke Zettlemoyer, and Veselin Stoyanov. Roberta: A robustly optimized bert pretraining approach. arXiv preprint arXiv:1907.11692, 2019. 3, 6 [24] Ze Liu, Jia Ning, Yue Cao, Yixuan Wei, Zheng Z-
hang, Stephen Lin, and Han Hu. Video swin transformer. In CVPR, 2022. 3, 6 [25] Jonghwan Mun, Minsu Cho, and Bohyung Han. Localglobal video-text interactions for temporal grounding. In CVPR, 2020. 3 [26] Aditya Ramesh, Mikhail Pavlov, Gabriel Goh, Scott Gray, Chelsea Voss, Alec Radford, Mark Chen, and Ilya Sutskever. Zero-shot text-to-image generation. In ICML, 2021. 3 [27] Paul Hongsuck Seo, Arsha Nagrani, Anurag Arnab, and Cordelia Schmid. End-to-end generative pretraining for multimodal video c-
aptioning. In CVPR, 2022. 3 [28] Zhenwei Shao, Zhou Yu, Meng Wang, and Jun Yu. Prompting large language models with answer heuristics for knowledge-based visual question answering. In CVPR, 2023. 3
[29] Yaojie Shen, Xin Gu, Kai Xu, Heng Fan, Longyin Wen, and Libo Zhang. Accurate and fast compressed video captioning. In ICCV, 2023. 3 [30] Rui Su, Qian Yu, and Dong Xu. Stvgbert: A visuallinguistic transformer based framework for spatio-temporal video grounding. In ICCV, 2021. 1, 2, 3, 4, 6, 7 [31] Chaolei Tan, Zihang Lin, Jian-Fang Hu, Xiang Li, and Wei-Shi Zheng. Augmented 2d-tan: A two-stage approach for human-centric spatio-temporal video grounding. arXiv, 2021. 7
9

[32] Zongheng Tang, Yue Liao, Si Liu, Guanbin Li, Xiaojie Jin, Hongxu Jiang, Qian Yu, and Dong Xu. Human-centric spatio-temporal video grounding with visual transformers. IEEE TCSVT, 32(12):8238–8249, 2021. 1, 2, 6, 7 [33] Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N Gomez, Łukasz Kaiser, and Illia Polosukhin. Attention is all you need. In NIPS, 2017. 4 [34] Lan Wang, Gaurav Mittal, Sandra Sajeev, Ye Yu, Matthew Hall, Vishnu Naresh Boddeti, and Mei Chen. Proteg-
e: Untrimmed pretraining for video temporal grounding by video temporal grounding. In CVPR, 2023. 3 [35] Zhenzhi Wang, Limin Wang, Tao Wu, Tianhao Li, and Gangshan Wu. Negative sample matters: A renaissance of metric learning for temporal grounding. In AAAI, 2022. 7 [36] Antoine Yang, Antoine Miech, Josef Sivic, Ivan Laptev, and Cordelia Schmid. Tubedetr: Spatio-temporal video grounding with transformers. In CVPR, 2022. 1, 2, 3, 4, 6, 7 [37] Antoine Yang, Arsha Nagrani, Paul Hongsuck Seo, Antoine -
Miech, Jordi Pont-Tuset, Ivan Laptev, Josef Sivic, and Cordelia Schmid. Vid2seq: Large-scale pretraining of a visual language model for dense video captioning. In CVPR, 2023. 3 [38] Quanzeng You, Hailin Jin, Zhaowen Wang, Chen Fang, and Jiebo Luo. Image captioning with semantic attention. In CVPR, 2016. 3 [39] Zhou Yu, Jun Yu, Yuhao Cui, Dacheng Tao, and Qi Tian. Deep modular co-attention networks for visual question answering. In CVPR, 2019. 3 [40] Yimeng Zhang, Xin Chen, Jinghan Jia, Sijia Liu, -
and Ke Ding. Text-visual prompting for efficient 2d temporal video grounding. In CVPR, 2023. 3 [41] Zhu Zhang, Zhou Zhao, Zhijie Lin, Baoxing Huai, and Jing Yuan. Object-aware multi-branch relation networks for spatio-temporal video grounding. In IJCAI, 2020. 1, 2, 7 [42] Zhu Zhang, Zhou Zhao, Yang Zhao, Qi Wang, Huasheng Liu, and Lianli Gao. Where does it exist: Spatio-temporal video grounding for multi-form sentences. In CVPR, 2020. 1, 2, 6 [43] Zhu Zhang, Zhou Zhao, Yang Zhao, Qi Wang, Huasheng-
 Liu, and Lianli Gao. Where does it exist: Spatio-temporal video grounding for multi-form sentences. In CVPR, 2020. 2, 7 [44] Kaiyang Zhou, Jingkang Yang, Chen Change Loy, and Ziwei Liu. Conditional prompt learning for vision-language models. In CVPR, 2022. 1 [45] Luowei Zhou, Yingbo Zhou, Jason J Corso, Richard Socher, and Caiming Xiong. End-to-end dense video captioning with masked transformer. In CVPR, 2018. 3 [46] Li Zhou, Zikun Zhou, Kaige Mao, and Zhenyu He. Joint visual grounding and tracki-
ng with natural language specification. In CVPR, 2023. 3
10

Context-Guided Spatio-Temporal Video Grounding
Supplementary Material
In this supplementary material, we present more details and analysis as well as results of our work, as follows, A. Detailed Architectures of Modules
We display the detailed architectures for SAEncoder(·), SA(·) and CA(·) in the main text. In addition, we present the architectures for different usage of temporal and spatial confidence scores.
B. Additional Ablation on Motion Information
We conduct an extra experiment to ablate motion information in our approach.
C. More Visualization Analysis on Attention Maps
We include more visualization analysis on the attention maps to show the effectiveness of instance context in improving target-awareness for localization.
D. More Qualitative Results
We demonstrate more qualitative results of our method for grounding the target object.
6. Detailed Architectures of Modules
6.1. Architecture of Self-Attention Encoder
The self-attention encoder module, i.e., SAEncoder(·), is to enhance multimodal feature X ′ and output X ̃, which is composed of L (L=6) standard self-attention blocks, as depicted in Fig. 7.
Multi-Head
Attention
Add & Norm
Feed
Forward
Add & Norm
L×
Multi-Head
Attention
Add & Norm
Feed
Forward
Add & Norm
u
(a) Self-attention block SA(z) (b) Cross-attention block CA(z, u)
Q
V
K
Q
K
V
z
Multi-Head
Attention
Add & Norm
Feed
Forward
Add & Norm
Q
V
K
z
Cka Ckm HFt
skt sks
HFs Ck
MLP
Cka Ckm HF
skt + sks
Ck
MLP
Cka Ckm HF
skt × sks
Ck
MLP
(a) Two-level (ours)
(b) One-level with “skt + sks”
(c) One-level with “skt × sks”
Figure 7. Detailed architecture of SAEncoder(·).
6.2. Architectures of Attention Blocks in Decoder
In our context-guided decoder, we employ attention blocks, including the self-attention block, i.e., SA(z) and the crossattention block, i.e., CA(z, u). There architectures are shown in Fig. 8.
6.3. Architectures for Different Usage of Temporal and Spatial Confidence Scores
In the ablation, we compare our two-level strategy with two additional one-level strategiess for exploiting the temporal
Multi-Head
Attention
Add & Norm
Feed
Forward
Add & Norm
L×
Multi-Head
Attention
Add & Norm
Feed
Forward
Add & Norm
u
(a) Self-attention block SA(z) (b) Cross-attention block CA(z, u)
Q
V
K
Q
K
V
z
Multi-Head
Attention
Add & Norm
Feed
Forward
Add & Norm
Q
V
K
z
Cka Ckm HFt
skt sks
HFs Ck
MLP
Cka Ckm HF
skt + sks
Ck
MLP
Cka Ckm HF
skt × sks
Ck
MLP
(a) Two-level (ours)
(b) One-level with “skt + sks”
(c) One-level with “skt × sks”
Figure 8. The architectures SA(z) and CA(z, u) in our model.
Multi-Head
Attention
Add & Norm
Feed
Forward
Add & Norm
L×
Multi-Head
Attention
Add & Norm
Feed
Forward
Add & Norm
u
(a) Self-attention block SA(z) (b) Cross-attention block CA(z, u)
Q
V
K
Q
K
V
z
Multi-Head
Attention
Add & Norm
Feed
Forward
Add & Norm
Q
V
K
z
Cka
Ckm HFt
skt sks
HFs Ck
MLP
Cka
Ckm HF
skt + sks
Ck
MLP
Cka
Ckm HF
skt × sks
Ck
MLP
(a) Two-level (ours)
(b) One-level with “skt + sks”
(c) One-level with “skt × sks”
Figure 9. Architectures for different usage of spatial and temporal confidence scores. Image (a) is the proposed two-level architecture, and image (b) and (c) are two one-level variants with “addition” and “multiplication”, respectively.
Motion
Feature Context m tIoU m vIoU vIoU@0.3 vIoU@0.5
- - 49.28 35.81 58.36 29.91
✓ - 51.56 37.62 59.57 32.16
✓ ✓ 52.84 38.42 61.47 36.29
Table 8. Ablation of motion information on HCSTVG-v1 (%).
and spatial confidence scores. The structures of these three mechanisms are compared and illustrated in Fig. 9.
7. Ablation on Motion Information
Motion information is complementary to appearance cues and can benefit STVG. Specifically, it provides a few extra advantages: (1) Motion features contain the movement details of the target object, which are crucial for the STVG task; (2) Motion cues can provide useful temporal information to some extent even when the appearance partially invisible; (3) Motion features can better comprehend the spatial relationships between objects in the video, such as distance and relative position. Thus inspire-
d, we utilize both appearance and motion features in our CG-STVG, as in many other STVG methods. To study the impact of mo
11

tion information in our CG-STVG, we provide additional ablation results in Tab. 8. As shown in Tab. 8, with the help of the motion features X ̃m in multimodal feature X ̃, the m vIoU increases by 1.81, achieving 37.62, which shows that motion features can provide the necessary action information for STVG. After integrating motion context extracted from motion features, the m vIoU score has improved to 38.42, demonstrating the effectiveness of motion context.
8. More Visualization on Attention Maps
In order to analyze the role of instance context, we compare the attention maps of spatial queries in the spatial-decoding block (SDB), with and without using instance context, as in Fig. 10. From Fig. 10, we can clearly see that, the queries, without being enhanced by the instance context, are unable to focus on the foreground object across different frames. However, when employing instance context, the queries are significantly enhanced by gaining more targetawareness knowledge to focus on the f-
oreground regions, which benefits accurate localization of the target object and thus improves the STVG performance.
9. More Qualitative Results
To further validate the effectiveness of our method (with instance context), we provide additional examples of grounding results compared to the baseline method (without instance context) on the HCSTVG dataset in Fig. 11. From the shown visualizations, the baseline model struggles to locate the target object accurately within the video frames. However, when employing the mined instance visual context, our method is able to localize the target object with better temporal and spatial accuracy. In de-
tail, for the second example, the key words in the text “The woman in the white skirt adjusts her skirt and walks slowly to the other woman” are “white” and “walks”. However, since there are three women wearing white in the video, the information of “white” may not be discriminative and useful. Therefore, we can merely rely on other information such as “walks” and only the fourth frame of the video contains information about “walks”. As a result, our method and the baseline method can both accurat-
ely locate the target in the fourth frame. However, since the baseline method does not have context guidance, there is no reliable information to use in the remaining frames, leading to errors in time and space localization. Our method, on the other hand, accurately locates the target by using the mined instance context from the fourth frame to assist in locating the target in the remaining frames. The same comparison can also be observed in the fourth example. These examples further demonstrate t-
he importance of instance context in guiding target localization.
Text: The bald man waves his hat, then turns and walks away.
Text: The woman in the white skirt adjusts her skirt and walks slowly to the other woman.
without instance context
Text: A man with glasses takes off his glasses and holds them in his hand.
Text: The man in green uniform salutes the man in front of him then gets on the car.
Text: The man in blue shirt talks to the two in front of him and throws away things.
with instance context
without instance context
with instance context
without instance context
with instance context
with instance context
without instance context
without instance context
with instance context
Figure 10. Attention maps for spatial queries in video frames in the spatial-decoding block without and with our proposed instance context. The red boxes indicate the foreground object to localize.
12

Baseline
GT CG-STVG
Video
Text: The bald man waves his hat, then turns and walks away.
Video
Text: The woman in the white skirt adjusts her skirt and walks slowly to the other woman.
Video
Text: A man with glasses takes off his glasses and holds them in his hand.
Video
Text: The man in green uniform salutes the man in front of him then gets on the car.
Baseline
GT
CG-STVG
Baseline
GT
CG-STVG
Baseline
GT CG-STVG
Video
Text: The man in blue shirt talks to the two in front of him and throws away things.
Baseline
GT CG-STVG
Figure 11. Qualitative results of our method (red), our baseline method (blue) and ground truth (green). In all examples, our method shows better localization than the baseline, which proves the importance of instance context.
13

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:24.760Z
- **Text Length:** 54029 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
