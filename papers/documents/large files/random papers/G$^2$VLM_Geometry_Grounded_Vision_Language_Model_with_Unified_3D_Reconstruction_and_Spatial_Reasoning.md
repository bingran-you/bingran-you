# PDF Document: Hu et al. - 2025 - G$^2$VLM Geometry Grounded Vision Language Model with Unified 3D Reconstruction and Spatial Reasoni.pdf

**File Path:** Hu et al. - 2025 - G$^2$VLM Geometry Grounded Vision Language Model with Unified 3D Reconstruction and Spatial Reasoni.pdf

**Processed Date:** 2026-02-10T18:15:02.154Z

**File Size:** 12295.80 KB

**Total Pages:** 14

**Extracted Pages:** 14

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3765

**Title:** G$^2$VLM: Geometry Grounded Vision Language Model with Unified 3D Reconstruction and Spatial Reasoning

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

G2VLM: Geometry Grounded Vision Language Model with Unified 3D
Reconstruction and Spatial Reasoning
Wenbo Hu1,2∗ Jingli Lin1,3∗ Yilin Long1,4∗ Yunlong Ran1,5 Lihan Jiang1,6 Yifan Wang1,3 Chenming Zhu1,7 Runsen Xu1,8 Tai Wang1† Jiangmiao Pang1† 1Shanghai AI Lab 2UCLA 3SJTU 4FDU 5ZJU 6USTC 7HKU 8CUHK
∗Equal Contribution †Corresponding Author Project Page GitHub
Interleaved Reasoning
Interleaved Reasoning
Depth Prediction
❶<Explore the environment>
Found the teddy bear.
<Pick up the teddy bear>
Which one is closer to me? The brown chair or red sofa?
❷<Navigate to the bedroom and search for a gift box> <Try placing the teddy bear into the gift box> Too small.
❸<Navigate to the living room and search for a gift box> <Try placing the teddy bear into the gift box>
It fits, but it's a bit loose.
❹<Navigate to the kitchen and search for a gift box> <Try placing the teddy bear into the gift box>
It fits, but too large. Recall: the living room box is the most suitable.
❺<Navigate to the gift box in the living room> <Place the teddy bear into the gift box>
Task complete.
G2VLM
What movement would produce the second image from the perspective of the first?
G2VLM
Sitting on the chair below the picture on the wall, what is the relation of the bookshelf relative to you?
The brown chair is closer.
Interleaved Reasoning
Camera Pose Estimation
Movement of 3.4 meters in the forward direction. Shift sideways 2.6 meters to the right ....... Horizontal rotation 110 degrees left.
Answer:
G2VLM
3D Point Reconstruction
The bookshelf in on my right
Facing the fridge, how to navigate to the PC monitor on the desk?
Answer:
Answer:
Figure 1. We present G2VLM, a geometry grounded vision-language model proficient in both spatial 3D reconstruction and spatial understanding tasks. For spatial reasoning questions, G2VLM can directly predict 3D geometry and employ interleaved reasoning for an answer.
Abstract
Vision-Language Models (VLMs) still lack robustness in spatial intelligence, demonstrating poor performance on spatial understanding and reasoning tasks. We attribute this gap to the absence of a visual geometry learning process capable of reconstructing 3D space from 2D images. We present G2VLM, a geometry grounded vision-language model that bridges two fundamental aspects of spatial intelligence: spatial 3D reconstruction and spatial under
standing. G2VLM natively leverages learned 3D visual geometry features to directly predict 3D attributes and enhance spatial reasoning tasks via in-context learning and interleaved reasoning. Our unified design is highly scalable for spatial understanding: it trains on abundant multiview image and video data, while simultaneously leveraging the benefits of 3D visual priors that are typically only derived from hard-to-collect annotations. Experimental results demonstrate G2VLM is proficient in both-
 tasks, achieving comparable results to state-of-the-art feed
1
arXiv:2511.21688v1 [cs.CV] 26 Nov 2025

forward 3D reconstruction models and achieving better or competitive results across spatial understanding and reasoning tasks. By unifying a semantically strong VLM with low-level 3D vision tasks, we hope G2VLM can serve as a strong baseline for the community and unlock more future applications, such as 3D scene editing.
1. Introduction
Recent advancements in Vision-Language Models (VLMs) have established them as powerful foundation models across a wide range of tasks [6, 43, 64, 81]. Yet several studies [10, 20, 52, 78] have found that VLMs exhibit a significant gap in robust spatial understanding, a crucial capability for spatial intelligence, robotics, and embodied AI. We argue that this limitation stems from how current VLMs acquire their physical world knowledge. Their spatial understanding is largely gained implicitly from -
training on massive, unstructured 2D image-text datasets, relying primarily on language and 2D visual priors. Except incorporating 3D priors as in specific 3D-VLMs [25, 86, 87], general VLMs simply employ feature projection layers and are trained with auto-regressive next-token prediction, which treat inputs like multiple images or video frames as a “flat” sequence of 2D data. This approach lacks the explicit learning of visual geometry that can “lift” these 2D perceptions into a coherent 3D repre-
sentation of the world, which is crucial for genuine spatial understanding. To overcome this limitation, we propose to integrate visual geometry learning into the VLM. As illustrated in Figure 1, our method can directly predict 3D outputs and employ them within an interleaved reasoning process to enhance spatial reasoning. Our approach is inspired by the two-streams hypothesis in human cognition [22], which posits a “ventral stream” for object recognition (correlating with multimodal understanding-
) and a “dorsal stream” for spatial location (corresponding to visual geometry learning). We introduce G2VLM, a geometry grounded visionlanguage model that bridges two fundamental aspects of spatial intelligence: spatial 3D reconstruction and spatial understanding. G2VLM natively leverages learned 3D geometry features to enhance spatial reasoning tasks via incontext learning and interleaved reasoning. As illustrated in Figure 2, G2VLM adopts a Mixture-ofTransformer-Experts (MoT) [18, 36] architect-
ure that comprises two experts: one geometric perception expert (our “where pathway”) for visual geometry learning and one semantic perception expert (our “what pathway”) for multimodal understanding. These experts interact via shared self-attention, enabling the interplay between these two fundamental aspects to mutually improve one another. Our unified design also offers advantages in scaling. It learns
Geometric Perception (GP)
Perception
Interleaved Reasoning
Semantic Perception (SP)
G2VLM
The ventral stream (or, "what pathway") leads to the temporal lobe, which is involved
with object and visual identification and recognition.
Two-Streams Hypothesis:
The dorsal stream (or, "where pathway") leads to the parietal lobe, which is involved with processing the object's spatial location relative to the viewer.
Figure 2. Our model, G2VLM, employs an architecture inspired by the two-streams hypothesis. It features two experts: a geometric perception expert (our “where pathway”) for visual geometry learning and a semantic perception expert (our “what pathway”) for multimodal understanding.
to reason about 3D geometry from pure 2D image inputs, eliminating the reliance on difficult-to-collect 3D data (e.g., depth maps and camera poses) and allowing our framework to scale by leveraging abundant, in-the-wild multi-view images and videos for spatial understanding.
To train both experts effectively, G2VLM employs a two-stage training strategy. In the first stage, the semantic perception expert is initialized from a frozen pretrained VLM (e.g., Qwen2-VL), while the geometric perception expert is trained from scratch on a large-scale 3D-annotated dataset to learn a geometry-rich representation. In the second stage, we unfreeze the semantic expert and jointly train it with the geometric expert on spatial understanding data. This allows it to effectively integra-
te the learned geometric features, further enhancing its spatial reasoning performance.
Through extensive experiments, G2VLM demonstrates significant performance across a wide range of visual geometry and spatial reasoning tasks. On visual geometry tasks, G2VLM achieves competitive results against state-of-theart (SOTA) feed-forward 3D reconstruction models, such as VGGT [57], across depth estimation, point estimation, and camera pose estimation tasks. Notably, it reduces the monocular depth estimation Absolute Relative Error from VGGT’s 0.335 to 0.297 on the Sintel benchmark. On spa-
tial reasoning tasks, our model achieves the best results on SPAR-Bench among all existing works, surpassing GPT-4o by 18.5 points. Across all four spatial reasoning benchmarks, G2VLM achieves results that are better than or comparable to those of much larger models, despite its relatively small 2B size. Furthermore, we conducts studies that confirms a positive interplay between geometric and semantic representations: as the geometric expert’s performance improves, it also leads to greater improve-
ments in spatial reasoning.
Our contributions can be summarized as follows:
• We introduce G2VLM, the first unified model that bridges spatial 3D reconstruction and high-level spatial under
2

Interleaved Reasoning
Qwen Vision Enoder
<Navigate to kitchen>
G2VLM
DinoV2 Enoder Text Tokenizer
Geometry Heads
Self-Attention
QKV
FFN FFN
QKV
Geometric Perception Expert Semantic Perception Expert
Camera poses
Depth
Maps Point
Clouds
Facing the fridge, how to navigate to the PC monitor on the desk?
Text De-Tokenizer
Turn around, go straight to the white printer. Then turn right, go straight pass the boxes to get to the black monitor.
Answer:
Figure 3. We present G2VLM, a unified model that integrates both a geometric perception expert for 3D reconstruction and a semantic perception expert for multimodal understanding and spatial reasoning tasks. All tokens can do shared multi-modal self attention in each transformer block.
standing in a single vision-language model. • G2VLM employ a novel architecture with dedicated geometric and semantic perception experts, enabling the model to learn 3D geometry from 2D data and enhance spatial reasoning via shared self attention. • Experimental results demonstrate G2VLM is proficient in both tasks, achieving competitive results against SOTA 3D reconstruction models and the best performance on most spatial reasoning benchmarks. • By unifying a semantically strong VLM with low-leve-
l 3D vision tasks, we hope G2VLM can serve as a strong baseline for the community and unlock more future applications, such as 3D scene editing.
2. Related Works
VLMs as Unified Foundation Models Recent advancements in Vision-Language Models (VLMs) have transformed multimodal research into a foundation-model paradigm. By combining visual understanding and language generation, VLMs demonstrates zero-shot generalizability across a wide range of multimodal tasks [23, 24, 32, 82]. More recently, VLMs are being further unified to handle diverse tasks in an Any-to-Any input and output paradigm spanning audio, image, and video [33, 41, 70, 75]. One of the most su-
ccessful unifications has been between multimodal understanding and generation, which has produced highly capable models [11, 65, 66, 70]. Among these, Bagel [18] also adopts a Mixture-of-Transformer-Experts (MoT) architecture for multimodal understanding and image generation. While we adopt a similar design for our geometric and semantic perception experts, our work differs significantly. Our experts are trained for the vastly differ
ent tasks of visual geometry learning and spatial reasoning, which in turn necessitates distinct detailed model architecture design, pretraining objectives and joint training strategies from the one used by Bagel.
Spatial Reasoning VLMs. Spatial understanding is a crucial step toward spatial intelligence, which is important for world understanding, robotics, and embodied AI. Recent progress in this area has led to the emergence of a wide range of spatial reasoning benchmarks [27, 37, 72, 73] and a corresponding rise in spatial VLMs [10, 14, 15, 26, 42]. Many of these works, including SpatialVLM and [10], SpaceQwen [15], adhere to the standard VLM design: they treat images as “flat” 2D data and rely on curat-
ed spatial reasoning datasets to achieve good performance. Recognizing the limitations of 2D data priors, other recent works have noted the lack of geometric features in VLMs. For example, VLM-3R [21] and Spatial MLLM [68] both integrate a frozen geometry encoder (e.g., VGGT) as an extra representation and train the VLM to learn from these features. In contrast, our work directly integrates a geometric expert within our VLM, which offers a more natural alignment and unifies visual geometry predict-
ion tasks with high-level spatial reasoning. Our model natively supports both geometric and semantic perception and can serve as a strong baseline to unlock future capabilities.
Feedforward Visual Geometry. Recent works like DUSt3R [62] and MASt3R [29] alleviate the need for known camera parameters by utilizing Transformers [55] to directly predict pixel-aligned 3D point maps. A subsequent wave of feed-forward visual geometry works, such as MV-DUSt3R+ [54], Cut3R [60], Fast3R [71], VGGT [57], and π3 [67], have further extended this approach to han
3

dle multi-view scenarios. These methods adopt a simple and efficient end-to-end inference to predict accurate 3D geometries, surpassing optimization-based pipelines. However, these methods remain focused on geometric reconstruction, often neglecting higher-level scene understanding and limiting their use in spatial reasoning tasks. Our work unifies visual geometry and multimodal reasoning within one framework by natively learning and predicting geometric features. This design inherits the geometr-
ic accuracy and efficiency of feed-forward architectures while enabling spatial comprehension for semantic downstream tasks.
3. Unified Spatial Vision-Language Model
We introduce G2VLM, a unified geometry-grounded VLM that integrates spatial 3D reconstruction and spatial understanding. We present the model’s architecture in § 3.1 and detail the learning process for the geometric perception expert in § 3.2 and the semantic perception expert in § 3.3.
3.1. Model Architecture
As illustrated in Figure 3, G2VLM adopts a Mixture-ofTransformer-Experts (MoT) architecture [18] that consists of two transformer experts-one geometry perception expert dedicated to visual geometry learning and one semantic perception expert to multimodal understanding. Our model’s input is a sequence (Ii)N
i=1 of N RGB images
Ii ∈ R3×H×W , we present the detailed design for each expert as follows.
Geometric Perception Expert. For geometric perception expert, we incorporate a DINOV2 vision encoder to inject low-level visual information to LLM which further reasons the 3D-aware feature through global attention. This process maps each image Ii to LLM hidden states hi ∈ RC×d. These hidden states are decoded with 3D geometry heads for task-specific predictions, where the heads composed of a local point head, camera head and a global point head for stabilizing the training. All heads are designed-
 as lightweight transformer decoders. The geometry heads is a function that maps the visual geometry hidden states to a corresponding set of 3D annotations:
f (hi)N
i=1 = (Ti, Xi, )N
i=1 . (1)
where Ti ∈ SE(3) ⊂ R4×4 is the camera pose, Xi ∈ RH×W ×3 is the associated pixel-aligned 3D point map represented in its own camera coordinate system, each corresponding to the input image Ii.
Semantic Perception Expert. For semantic perception expert, we builds upon a pretrained VLM (Qwen2-VL2B) [59] as our foundation. We adopt the Qwen2 vision encoder which supports native dynamic resolution, along with the design of Multimodal Rotary Position Embedding (MRoPE). It worth noting that our design can directly leverage
off-the-shelf pretrained VLM which can be easily integrated with stronger VLMs. To better support visual geometry learning inside a VLM and narrow the representation gap to foster the mutual growth, we simplify some designs such as not incorporating register tokens [17], and use only global attention layers. To make our model further scalable, we also remove the camera token designs as in VGGT, and use permutation equivariant design as in π3 [67]. These choices together makes the LLM directly util-
ize encoded visual features from both DINOV2 and semantic Qwen2 vision encoder in the same way without special priors.
3.2. Visual Geometry Learning
We train our model in two stages. First, we freeze the semantic perception expert which is loaded with Qwen2-VL weights, then we initialize the geometric perception expert from random parameters and train it from scratch using large-scale 3D annotated datasets. Following MoGe [61] and π3 [67], our visual geometry (VG) loss function LV G is formulated as a weighted sum of the point reconstruction loss, the camera pose loss and the normal loss:
LV G = Lpoints + λcamLcam + λnormalLnormal (2)
where λ is a pre-defined hyperparameter. Specifically, we describe each loss below. The point cloud reconstruction loss, Lpoints, is defined using the optimal scale factor s∗:
Lpoints = 1
3N HW
N
X
i=1
H ×W
X
j=1
1
zi,j
∥s∗xˆi,j − xi,j ∥1 (3)
where s∗ = arg min
s
PN i=1
PH×W j=1
1
zi,j ∥sxˆi,j − xi,j ∥1.
Here, xˆi,j ∈ R3 denotes the predicted 3D point at index j of the point map Xˆi. Similarly, xi,j is its ground-truth counterpart in Xi. The term zi,j is the ground-truth depth, which is the z-component of xi,j and is solved using the ROE solver proposed by [61]. The camera loss Lcam is a weighted sum of a rotation loss term and a translation loss term, averaged over all ordered view pairs where i ̸= j:
Lcam = 1
N (N − 1)
X
i̸=j
(Lrot(i, j) + λtransLtrans(i, j))
(4) where λ is a hyperparameter to balance the two terms. Specifically, the rotation loss minimizes the geodesic distance (angle) between the predicted relative rotation Rˆi←j and its ground-truth target Ri←j:
Lrot(i, j) = arccos


Tr (Ri←j )⊤Rˆi←j − 1
2

 (5)
4

The translation loss is calculated using the Huber loss, Hδ, by comparing scaled prediction against the ground-truth relative translation, ti←j:
Ltrans(i, j) = Hδ(s∗tˆi←j − ti←j ) (6)
Finally, the normal loss Lnormal encourages the reconstruction of locally smooth surfaces by minimizing the angle between the predicated normal vector ˆni,j and their ground-truth counterparts ni,j:
Lnormal =
N
X
i=1
H ×W
X
j=1
arccos (ˆni,j · ni,j) (7)
3.3. Spatial Reasoning Learning
After pretraining the geometric perception expert, we perform a joint-training stage to leverage its learned geometric representations for spatial understanding tasks. The primary goal is to optimize the semantic perception expert to effectively utilize these geometric features via in-context learning and interleaved reasoning. This is achieved by optimizing the standard language modeling loss (cross-entropy). This process naturally raises several design choices. We explore three distinct joint-tr-
aining strategies, where the semantic perception expert is, by default, optimized using a cross-entropy (CE) loss: • CE Loss Only: Freeze the geometric perception expert, only the semantic perception expert is updated. This forces the model to learn to use the visual geometry features via in-context learning. This design also maintains the visual geometry performance unaltered. • CE + CE Loss: Optimize the geometric perception expert with CE loss. This fine-tunes the geometry features explicitly f-
or spatial understanding. • VG + CE Loss: Optimize the geometric perception expert with both the CE loss and its visual geometry (VG) loss. This aims to adapt the expert for spatial understanding abilities while simultaneously maintaining its core pretrained geometry capabilities. We conduct this study on the Scannet [16] dataset with semantic annotations. As demonstrated in Figure 4, the VG + CE Loss approach yields the strongest results, improving performance on both tasks. However, this method -
requires a large-scale 3D annotated dataset for the joint training stage, which limits its scalability. Given this scalability constraint, we select the CE Loss Only approach for our main G2VLM. This method represents the best tradeoff: it preserves the geometric expert’s strong, pretrained geometry performance by freezing it, while also achieving good spatial reasoning capabilities by scaling with abundant video data. Furthermore, the CE + CE Loss variant was shown to be the most effective for op-
timizing spatial reasoning performance specifically. We therefore designate
Figure 4. Comparison of three different loss supervision mechanisms for the joint-training stage. Note that for visual geometry scores, lower is better. The VG + CE Loss approach yields the best performance, demonstrating that combining visual geometry and spatial understanding supervision mutually benefits spatial reasoning tasks.
this specialized model as G2VLM-SR (Spatial Reasoning) in this paper.
Implementation Details. For the pre-training stage of geometric perception expert, we further divide it into two stage training. We first fix image resolution to 224x224 and use AdamW optimizer for 100K iterations with a learning rate (lr) of 2e-4 using cosine scheduler. Then we further train at lr of 5e-4 for another 20K steps with a higher resolution of 518x518, and apply randomized aspect ratio between 0.5 and 1.0. Similar to VGGT, for every batch, we randomly sample 2–24 frames from a random t-
raining scene. The low-resolution pretraining runs on 32 A800 GPUs over 7 days and high-resolution runs on 64 A800 GPUs over 3 days. For joint-training, we use AdamW optimizer for 16K iterations with a lr of 2e-5 on 64 A800 GPUs over 3 days. Throughout all training, we employ gradient norm clipping with a threshold of 1.0 to ensure training stability and leverage bfloat16 precision and gradient checkpointing to improve GPU memory and computational efficiency. We provide more training details in ou-
r supplementary materials.
Training Data. The model was trained using a large and diverse collection of datasets for the geometric perception expert, including: ScanNet [16], Co3Dv2 [46], BlendMVS [74], DL3DV [38], MegaDepth [35], WildRGBD [69], TarTanAir [63], Taskonomy [79], ArkitScenes [7], HyperSim [48], Habitat [53], ScanNetPP [76], GTA-SFM [58], Matrixcity [34], Aria Synthetic Environments [44], Mapfree [4], and an internal synthetic indoor datasets. For joint training stage, we employ spatial understanding datasets s-
uch as SPAR-7M [83], the training sets of Omnispatial [27], Mindcube [77] and OST-Bench [37] and general VQA dateset such as LLaVA-One-Vision [31].
5

Model
Depth Estimation Point Estimation Camera Pose Estimation
Sintel NYU-v2 ETH3D 7Scenes Co3Dv2
Abs Rel↓ δ < 1.25 ↑ Abs Rel↓ δ < 1.25 ↑ Acc. ↓ Comp. ↓ Acc. ↓ Comp. ↓ RRA@30↑ RTA@30↑ AUC@30↑
Fast3R [71] 0.544 0.509 0.093 0.898 0.832 0.978 0.040 0.056 97.49 91.11 73.43 CUT3R [60] 0.418 0.52 0.081 0.914 0.617 0.747 0.023 0.027 96.19 92.69 75.82 FLARE [84] 0.606 0.402 0.089 0.898 0.464 0.664 0.019 0.026 96.38 93.76 73.99 VGGT [57] 0.335 0.599 0.056 0.951 0.28 0.305 0.022 0.026 98.96 97.13 88.59 π3 [67] 0.277 0.614 0.054 0.956 0.194 0.210 0.016 0.022 99.05 97.33 88.41
G2VLM (Ours) 0.297 0.589 0.062 0.954 0.414 0.309 0.046 0.029 97.91 95.20 74.81
(a) Visual Geometry tasks spanning Depth Estimation, Point Estimation, and Camera Pose Estimation. Our model, G2VLM, demonstrate comparable performance against SOTA feed-forward 3D recontruction methods.
Model
SPAR-Bench MindCube OST-Bench∗ OmniSpatial∗
Avg. Low Medium High Avg. Rotation Among Around Avg. A. State A. Info AO. Avg. SI PT
Proprietary Models
GPT-4o [43] 36.39 29.25 24.93 45.11 38.81 32.65 40.17 29.16 53.05 37.58 77.66 41.93 50.74 59.31 46.16 Claude-3.7-Sonnet [2] 21.77 25.43 7.33 23.33 40.50 41.33 40.00 39.50 - - - - 48.76 60.07 42.71 Claude-4-Sonnet-20250514 [3] - - - - 44.75 48.42 44.21 47.62 - - - - - - 
Open-source Models
LLaVA-v1.5-7B [39] 23.65 10.85 26.50 34.09 - - - - - - - - 37.44 35.11 38.69 LLaVA-Video-7B [85] 32.33 23.55 24.83 42.62 41.96 35.71 43.55 30.12 44.11 36.80 64.49 32.51 - - LLaVA-OneVision-7B [31] 31.20 21.79 26.12 40.14 47.43 36.45 48.42 44.09 43.93 28.81 61.49 37.14 37.17 35.00 38.32 Qwen2-VL-7B [59] 30.74 27.52 20.44 37.03 31.50 35.50 31.00 25.75 36.56 32.49 47.60 32.49 - - InternVL2.5-8B [12] 36.28 29.46 31.88 43.80 18.68 36.45 18.20 13.11 49.56 45.38 65.12 39.51 - - Qwen2.5-VL-3B [6] 29.39 26-
.69 24.87 33.29 33.21 37.37 33.26 30.34 31.17 26.94 49.35 18.87 39.98 44.27 37.68 Qwen2.5-VL-7B [6] 33.07 28.75 22.97 40.27 29.26 38.76 29.50 21.35 44.22 42.19 56.12 34.21 41.83 46.20 39.50 Qwen2.5-VL-72B [6] 39.40 35.35 23.05 48.44 37.25 41.17 32.50 30.50 50.54 48.69 71.59 31.09 47.13 54.80 43.03
Spatial Expert Models
SpaceMantis-13B [47] 28.93 23.56 23.27 35.60 22.81 37.65 21.26 29.32 - - - - 38.84 35.93 40.40 Spatial-MLLM-7B [68] 32.15 29.88 20.30 38.13 32.06 38.39 20.92 32.82 26.72 22.95 42.19 20.97 44.94 47.33 43.67 SpaceQwen2.5-VL-3B [15] 24.24 14.46 24.00 33.01 33.28 38.02 33.71 26.32 26.61 26.69 43.05 13.82 42.63 41.00 43.49 VLM3R-7B [21] 43.21 39.78 28.43 51.18 42.09 36.73 44.22 24.45 - - - - 48.08 55.33 44.21
Qwen2-VL-2B (base model) 24.60 19.43 27.55 28.22 37.83 34.50 41.16 32.25 22.59 30.43 26.85 17.94 43.90 49.00 41.18 G2VLM-2B (Ours) 41.66 56.49 32.60 31.49 38.83 47.00 26.50 32.75 24.60 25.32 36.23 17.18 44.13 42.67 44.92 G2VLM-SR-2B (Ours) 54.87 59.99 36.27 56.51 48.33 53.17 31.50 49.50 37.02 30.73 45.54 31.42 50.41 52.67 49.20
(b) Spatial Understanding and Reasoning Results. Higher scores are better. We bold the best and underline the second-best results for open-source and spatial expert models, separately. OST-Bench∗ denotes a subset with ≤15 input frames. OmniSpatial∗ denotes evaluation on its two main categories: Spatial Interaction (SI) and Perspective Taking (PT). G2VLM-SR achieves the best results on most tasks, while G2VLM also demonstrates significant improvements over the base model on all tasks.
Table 1. Comparison with mainstream feed-forward 3D reconstruction methods on visual geometry tasks and with representative VLMs on spatial understanding and reasoning tasks. Our model demonstrates proficient performance in both aspects of spatial tasks, demonstrating its universality and effectiveness.
4. Experiments
We evaluate our method across a wide range of spatial tasks. For visual geometry, we evaluate on monocular depth estimation, point map estimation, and camera pose estimation tasks (§ 4.1). For spatial understanding and reasoning, we evaluate our model on comprehensive benchmarks, including SPAR-Bench [83], OmniSpatial [27], MindCube [77] (spatial mental modeling), and OST-Bench [37] (online spatio-temporal scene understanding) (§ 4.2). Across the visual geometry tasks, our model achieves performan-
ce comparable to existing feed-forward 3D reconstruction methods. Furthermore, it achieves the best or comparable performance results on most spatial understanding and reasoning
tasks. We also discuss our design choices and validate them through a detailed ablation study in § 4.3.
4.1. Visual Geometry Results
Monocular Depth Estimation. Following the methodology of [60, 62, 67], we evaluate our method on monocular depth estimation task using the Sintel [8] and NYU-V2 [51] datasets. We report the Absolute Relative Error (Abs Rel) and the prediction accuracy at a threshold of δ < 1.25. As demonstrated in Table 1a, our method achieves on-par performance with SOTA multi-frame feed-forward reconstruction approaches, such as VGGT and π3. Point Map Estimation. Following the evaluation settings in [60, 67], we-
 evaluate the quality of reconstructed multi
6

Figure 5. Qualitative results of our model. G2VLM effectively reconstructs a diverse set of open-domain images, spanning object-level, structure-level, indoor, and outdoor scenes, including both dynamic and static content.
view point maps on the 7-Scenes [50] and ETH3D [49] datasets. We sample keyframes using a stride of 40 for 7-Scenes and every 5 images for ETH3D. Predicted point maps are aligned to the ground truth using the Umeyama algorithm for a coarse Sim(3) alignment, followed by refinement with the Iterative Closest Point (ICP) algorithm. Consistent with prior works [5, 56, 60, 62], we report Accuracy (Acc.) and Completion (Comp.) in Table 1a. These results demonstrate that our method achieves on-par perfor-
mance with VGGT in completion and comparable results in accuracy. This confirms our model’s effectiveness, despite that it uses a simpler attention mechanism. Camera Pose Estimation. Following prior work [57, 62], we evaluate predicted camera poses on the Co3Dv2 [46] dataset, which features over 1000 test sequences, using angular accuracy. For each sequence, we randomly sample 10 images, form all possible pairs, and compute the angular errors of the relative rotation and translation vectors. This -
process yields the Relative Rotation Accuracy (RRA) and Relative Translation Accuracy (RTA) at a given threshold (e.g., RRA@30 for 30 degrees). The Area Under the Curve (AUC) of the min(RRA,RTA)-threshold curve serves as a unified metric. As shown in Table 1a, our method achieves on-par performance on the RRA and RTA metrics and comparable results on the AUC metric when compared with SOTA models. These results underscore our model’s strong capabilities, particularly since it does not use camera to-
kens (like VGGT) which provides a strong camera pose prior or require fine-tuning from pre-trained weights (like π3). We further present qualitative results of G2VLM in Figure 5. Our model generates high-quality predictions and generalizes well across a diverse set of open-domain images, spanning object-level, structure-level, indoor, and outdoor scenes, including both dynamic and static content.
4.2. Spatial Understanding & Reasoning Results
We evaluate our model on comprehensive spatial understanding and reasoning benchmarks, including SPARBench [83], OmniSpatial [27], MindCube [77] (spatial mental modeling), and OST-Bench [37] (online spatiotemporal scene understanding). As demonstrated in Table 1b, we compare our model against a wide range of methods, including proprietary, open-source, and spatial-expert models.
Across all tasks, both G2VLM and G2VLM-SR demonstrate a significant improvement over our base model, Qwen2-VL-2B, illustrating the effectiveness of our approach. Notably, G2VLM-SR achieves the best results among all existing works, surpassing the proprietary GPT4o by 18.48 points on SPAR-Bench. When compared with spatial expert models, G2VLM-SR also achieves the best results on all four spatial benchmarks, despite its relatively small 2B size.
Comparing with open-source models, G2VLM-SR achieves the best results on SPAR-Bench, Mindcube, and OmniSpatial. On OST-Bench, the much larger Qwen2.5VL-72B demonstrates the best results. This suggests a trend that online spatio-temporal scene understanding requires models to store significant knowledge, favoring larger architectures. It is worth noting, however, that G2VLM-SR still outperforms spatial expert models of similar or larger sizes on OST-Bench, further demonstrating the effectiveness of-
 our architecture. We leave the scaling of our model to future work, as this is a promising direction to unlock even stronger performance.
7

Figure 6. Experimental study results. (a) The dual encoder design, with both a semantic-rich CLIP encoder and a low-level vision DINO encoder, yields the best performance on both visual geometry and spatial understanding tasks. (b) Training loss curves for three different attention mechanisms during geometric perception expert training; global attention is consistently the best variant.
4.3. Discussions and Ablation Study
In our work, we adopt a dual-expert design comprising two distinct experts: one for geometric perception and one for semantic perception. This naturally raises several research questions about the optimal design.
Encoder Design: Single vs. Dual? Our first question is: Do the two experts require separate vision encoders, or can they share one? Can benefits be gained from pure visual geometry learning? VLMs typically adopt vision encoders trained with language-contrastive loss (e.g., CLIP [45], SigLIP [80]), as their strong semantic capabilities provide a natural basis for visual understanding. In contrast, visual geometry models often utilize self-supervised encoders like DINO [9], which is well-suited for -
low-level vision tasks such as 3D reconstruction. To bridge these two domains, we compare a single-encoder design (using CLIP for both tasks) with a dual-encoder design (using DINO for visual geometry and CLIP for multimodal understanding). As demonstrated in Figure 6(a), the dual-encoder design yields the best results for both tasks. While DINO’s suitability for low-level tasks is intuitive, we found it also significantly benefits spatial understanding. This indicates that DINO incorporates visua-
l information that complements the multimodal vision encoder, ultimately enhancing performance on spatial reasoning tasks.
Attention Mechanism for Geometric Perception Expert. Our second question is: What is the most effective attention mechanism for the geometry expert? Existing state-of-the-art visual geometry models such as MapAnything [28], VGGT [57], and π3 [67] adopt transformers with alternating-attention layers, which switch between framewise and global attention. However, this architecture is not directly compatible with modern LLM frameworks that apply consistent attention masks at every layer. Therefore, we-
 explore three mask-based attention variants: 1) frame attention, where the mask is applied to each frame individually; 2) global attention, where the mask is applied to the entire
Model
SPAR-Bench
Avg. Low Medium High
Qwen2-VL-2B (base model) 24.60 19.43 27.55 28.22 Qwen2-VL-2B (finetuned) 48.93 56.31 24.82 50.42 G2VLM-SR (Frame-Att. in GP) 52.34 58.23 34.47 53.81 G2VLM-SR (Mixed-Att. in GP) 53.64 59.16 35.33 55.16 G2VLM-SR (Ours) 54.87 59.99 36.27 56.51
Table 2. Ablation study on the design choices for G2VLM. GP denotes the geometric perception expert. Our results validate the superiority of our approach over the baselines. Notably, it confirms a positive interplay between geometric and semantic representations: as the geometric expert’s performance improves, it also leads to greater improvements in spatial reasoning.
sequence of all frames; and 3) mixed attention, which randomly alternates between masks to encourage the model to learn both local geometry and global correspondence. As illustrated in Figure 6(b), the global attention variant consistently outperforms the other designs, demonstrating its effectiveness within an LLM-compatible framework.
Interplay Between Geometry and Reasoning. Following this, we investigated if better geometric features lead to greater performance improvements on spatial reasoning tasks. As shown in Table 2, the global attention design (which is the best for geometry) also yields the strongest spatial reasoning results. This confirms a positive interplay between the two representations: as the geometric expert’s performance improves, it also leads to greater improvements in spatial reasoning.
Impact of Geometry Pretraining. Finally, we conduct an ablation to isolate the overall effect of our geometry expert. We compare our full model to a baseline variant that was finetuned only on the spatial understanding data. As shown in Table 2, our model significantly outperforms this finetuned-only variant, demonstrating that the learned visual geometry representations are essential to our model’s effectiveness.
5. Conclusion
In this work, we introduce G2VLM, a unified visionlanguage model that bridges two fundamental aspects of spatial intelligence: 3D reconstruction and spatial understanding. G2VLM natively leverages learned 3D visual geometry features to directly predict 3D attributes and enhance spatial reasoning tasks via in-context learning and interleaved reasoning. Experimental results demonstrate G2VLM is proficient in both tasks, achieving competitive results against SOTA 3D reconstruction models and the best-
 performance on most spatial reasoning benchmarks. While our model exhibits strong generalization abilities in both visual geometry and spatial reasoning, one potential limitation is training instability with large-scale models. This challenge requires advanced optimization techniques, care
8

ful data curation, and significant computational resources. However, the primary advantage of our approach is its universality and effectiveness. It can serve as a strong baseline for the community to unlock future opportunities in semantic spatial tasks, spanning both high-level and low-level applications.
References
[1] Josh Achiam, Steven Adler, Sandhini Agarwal, Lama Ahmad, Ilge Akkaya, Florencia Leoni Aleman, Diogo Almeida, Janko Altenschmidt, Sam Altman, Shyamal Anadkat, et al. Gpt-4 technical report. arXiv preprint arXiv:2303.08774, 2023. 2 [2] Anthropic. Claude 3.7 sonnet system card. https : / / www . anthropic . com / news / claude - 3 - 7 sonnet, 2025. Hybrid reasoning multimodal model released November 2025. 6, 2 [3] Anthropic. Claude 4 sonnet system card. https://www. anthropic.com/news/claude- 4- -
sonnet, 2025. Claude 4 Sonnet model released May 14 2025. 6 [4] Eduardo Arnold, Jamie Wynn, Sara Vicente, Guillermo Garcia-Hernando, Aron Monszpart, Victor Prisacariu, Daniyar Turmukhambetov, and Eric Brachmann. Map-free visual relocalization: Metric pose relative to a single image. In European Conference on Computer Vision, pages 690–708. Springer, 2022. 5 [5] Dejan Azinovic ́, Ricardo Martin-Brualla, Dan B Goldman, Matthias Nießner, and Justus Thies. Neural rgb-d surface reconstruction. In Proce-
edings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pages 62906301, 2022. 7 [6] Shuai Bai, Keqin Chen, Xuejing Liu, Jialin Wang, Wenbin Ge, Sibo Song, Kai Dang, Peng Wang, Shijie Wang, Jun Tang, et al. Qwen2. 5-vl technical report. arXiv preprint arXiv:2502.13923, 2025. 2, 6
[7] Gilad Baruch, Zhuoyuan Chen, Afshin Dehghan, Yuri Feigin, Peter Fu, Thomas Gebauer, Daniel Kurz, Tal Dimry, Brandon Joffe, Arik Schwartz, et al. Arkitscenes: A diverse real-world dataset for 3d indoor scene understanding using mobile rgb-d data. In Thirty-fifth Conference on Neural Information Processing Systems Datasets and Benchmarks Track (Round 1), 2021. 5
[8] Aljaz Bozic, Pablo Palafox, Justus Thies, Angela Dai, and Matthias Nießner. Transformerfusion: Monocular rgb scene reconstruction using transformers. In Advances in Neural Information Processing Systems, pages 1403–1414, 2021. 6 [9] Mathilde Caron, Hugo Touvron, Ishan Misra, Herv ́e J ́egou, Julien Mairal, Piotr Bojanowski, and Armand Joulin. Emerging properties in self-supervised vision transformers. In Proceedings of the IEEE/CVF international conference on computer vision, pages 9650–9660, -
2021. 8 [10] Boyuan Chen, Zhuo Xu, Sean Kirmani, Brain Ichter, Dorsa Sadigh, Leonidas Guibas, and Fei Xia. Spatialvlm: Endowing vision-language models with spatial reasoning capabilities. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pages 14455–14465, 2024. 2, 3
[11] Jiuhai Chen, Zhiyang Xu, Xichen Pan, Yushi Hu, Can Qin, Tom Goldstein, Lifu Huang, Tianyi Zhou, Saining Xie, Silvio Savarese, Le Xue, Caiming Xiong, and Ran Xu. Blip3o: A family of fully open unified multimodal modelsarchitecture, training and dataset, 2025. 3 [12] Zhe Chen, Weiyun Wang, Yue Cao, Yangzhou Liu, Zhangwei Gao, Erfei Cui, Jinguo Zhu, Shenglong Ye, Hao Tian, Zhaoyang Liu, et al. Expanding performance boundaries of open-source multimodal models with model, data, and testtime scalin-
g. arXiv preprint arXiv:2412.05271, 2024. 6, 2 [13] Zhe Chen, Weiyun Wang, Hao Tian, Shenglong Ye, Zhangwei Gao, Erfei Cui, Wenwen Tong, Kongzhi Hu, Jiapeng Luo, Zheng Ma, Ji Ma, Jiaqi Wang, Xiaoyi Dong, Hang Yan, Hewei Guo, Conghui He, Botian Shi, Zhenjiang Jin, Chao Xu, Bin Wang, Xingjian Wei, Wei Li, Wenjian Zhang, Bo Zhang, Pinlong Cai, Licheng Wen, Xiangchao Yan, Min Dou, Lewei Lu, Xizhou Zhu, Tong Lu, Dahua Lin, Yu Qiao, Jifeng Dai, and Wenhai Wang. How far are we to gpt-4v? closing the gap -
to commercial multimodal models with opensource suites, 2024. 2 [14] An-Chieh Cheng, Hongxu Yin, Yang Fu, Qiushan Guo, Ruihan Yang, Jan Kautz, Xiaolong Wang, and Sifei Liu. Spatialrgpt: Grounded spatial reasoning in vision-language models. Advances in Neural Information Processing Systems, 37:135062–135093, 2024. 3 [15] RemyxAI (community) and QwenLM Team. Spaceqwen2.5vl-3b-instruct. https : / / huggingface . co / remyxai / SpaceQwen2 . 5 - VL - 3B - Instruct, 2025. Fine-tuned version of Qwen2.5-V-
L on spatial reasoning data. 3, 6, 2 [16] Angela Dai, Angel X Chang, Manolis Savva, Maciej Halber, Thomas Funkhouser, and Matthias Nießner. Scannet: Richly-annotated 3d reconstructions of indoor scenes. In Proceedings of the IEEE conference on computer vision and pattern recognition, pages 5828–5839, 2017. 5 [17] Timothe ́e Darcet, Maxime Oquab, Julien Mairal, and Piotr Bojanowski. Vision transformers need registers, 2024. 4 [18] Chaorui Deng, Deyao Zhu, Kunchang Li, Chenhui Gou, Feng Li, Zeyu Wan-
g, Shu Zhong, Weihao Yu, Xiaonan Nie, Ziang Song, et al. Emerging properties in unified multimodal pretraining. arXiv preprint arXiv:2505.14683, 2025. 2, 3, 4 [19] Siyan Dong, Shuzhe Wang, Shaohui Liu, Lulu Cai, Qingnan Fan, Juho Kannala, and Yanchao Yang. Reloc3r: Large-scale training of relative camera pose regression for generalizable, fast, and accurate visual localization. In Proceedings of the Computer Vision and Pattern Recognition Conference, pages 16739–16752, 2025. 1 [20] Mengfei Du, Bin-
hao Wu, Zejun Li, Xuan-Jing Huang, and Zhongyu Wei. Embspatial-bench: Benchmarking spatial understanding for embodied tasks with large vision-language models. In Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (Volume 2: Short Papers), pages 346–355, 2024. 2 [21] Zhiwen Fan, Jian Zhang, Renjie Li, Junge Zhang, Runjin Chen, Hezhen Hu, Kevin Wang, Huaizhi Qu, Dilin Wang, Zhicheng Yan, et al. Vlm-3r: Vision-language models augmented with instruction-aligned 3d -
reconstruction. arXiv preprint arXiv:2505.20279, 2025. 3, 6, 2
9

[22] M. A. Goodale and A. D. Milner. Separate visual pathways for perception and action. Trends in neurosciences, 15(1): 20–25, 1992. 2 [23] Yining Hong, Haoyu Zhen, Peihao Chen, Shuhong Zheng, Yilun Du, Zhenfang Chen, and Chuang Gan. 3d-llm: Injecting the 3d world into large language models. In Advances in Neural Information Processing Systems 36: Annual Conference on Neural Information Processing Systems 2023, NeurIPS 2023, New Orleans, LA, USA, December 10 - 16, 2023, 2023. 3
[24] Wenbo Hu, Yifan Xu, Yi Li, Weiyue Li, Zeyuan Chen, and Zhuowen Tu. BLIVA: A simple multimodal LLM for better handling of text-rich visual questions. In Thirty-Eighth AAAI Conference on Artificial Intelligence, AAAI 2024, ThirtySixth Conference on Innovative Applications of Artificial Intelligence, IAAI 2024, Fourteenth Symposium on Educational Advances in Artificial Intelligence, EAAI 2014, February 20-27, 2024, Vancouver, Canada, pages 2256–2264. AAAI Press, 2024. 3 [25] Wenbo Hu, Yining Hon-
g, Yanjun Wang, Leison Gao, Zibu Wei, Xingcheng Yao, Nanyun Peng, Yonatan Bitton, Idan Szpektor, and Kai-Wei Chang. 3dllm-mem: Long-term spatial-temporal memory for embodied 3d large language model, 2025. 2 [26] Yuheng Ji, Huajie Tan, Jiayu Shi, Xiaoshuai Hao, Yuan Zhang, Hengyuan Zhang, Pengwei Wang, Mengdi Zhao, Yao Mu, Pengju An, et al. Robobrain: A unified brain model for robotic manipulation from abstract to concrete. In Proceedings of the Computer Vision and Pattern Recognition Conference, p-
ages 1724–1734, 2025. 3 [27] Mengdi Jia, Zekun Qi, Shaochen Zhang, Wenyao Zhang, Xinqiang Yu, Jiawei He, He Wang, and Li Yi. Omnispatial: Towards comprehensive spatial reasoning benchmark for vision language models, 2025. 3, 5, 6, 7 [28] Nikhil Keetha, Norman Mu ̈ller, Johannes Scho ̈nberger, Lorenzo Porzi, Yuchen Zhang, Tobias Fischer, Arno Knapitsch, Duncan Zauss, Ethan Weber, Nelson Antunes, Jonathon Luiten, Manuel Lopez-Antequera, Samuel Rota Bulo`, Christian Richardt, Deva Ramanan, Sebastian -
Scherer, and Peter Kontschieder. MapAnything: Universal feedforward metric 3D reconstruction, 2025. arXiv preprint arXiv:2509.13414. 8 [29] Vincent Leroy, Yohann Cabon, and Je ́roˆme Revaud. Grounding image matching in 3d with mast3r. In European Conference on Computer Vision, pages 71–91. Springer, 2024. 3 [30] Jake Levinson, Carlos Esteves, Kefan Chen, Noah Snavely, Angjoo Kanazawa, Afshin Rostamizadeh, and Ameesh Makadia. An analysis of svd for deep rotation estimation. In Advances in Neural In-
formation Processing Systems, pages 22554–22565, 2020. 1 [31] Bo Li, Yuanhan Zhang, Dong Guo, Renrui Zhang, Feng Li, Hao Zhang, Kaichen Zhang, Peiyuan Zhang, Yanwei Li, Ziwei Liu, et al. Llava-onevision: Easy visual task transfer. Transactions on Machine Learning Research, 2024. 5, 6, 2 [32] KunChang Li, Yinan He, Yi Wang, Yizhuo Li, Wenhai Wang, Ping Luo, Yali Wang, Limin Wang, and Yu Qiao. Videochat: Chat-centric video understanding, 2023. 3
[33] Shufan Li, Konstantinos Kallidromitis, Akash Gokul, Zichun Liao, Yusuke Kato, Kazuki Kozuka, and Aditya Grover. Omniflow: Any-to-any generation with multi-modal rectified flows, 2025. 3 [34] Yixuan Li, Lihan Jiang, Linning Xu, Yuanbo Xiangli, Zhenzhi Wang, Dahua Lin, and Bo Dai. Matrixcity: A large-scale city dataset for city-scale neural rendering and beyond. In Proceedings of the IEEE/CVF International Conference on Computer Vision, pages 3205–3215, 2023. 5 [35] Zhengqi Li and Noah Snavely.-
 Megadepth: Learning singleview depth prediction from internet photos. In Proceedings of the IEEE conference on computer vision and pattern recognition, pages 2041–2050, 2018. 5 [36] Weixin Liang, Lili Yu, Liang Luo, Srinivasan Iyer, Ning Dong, Chunting Zhou, Gargi Ghosh, Mike Lewis, Wen tau Yih, Luke Zettlemoyer, and Xi Victoria Lin. Mixture-oftransformers: A sparse and scalable architecture for multimodal foundation models, 2025. 2 [37] Jingli Lin, Chenming Zhu, Runsen Xu, Xiaohan Mao, Xihui Liu-
, Tai Wang, and Jiangmiao Pang. Ost-bench: Evaluating the capabilities of mllms in online spatio-temporal scene understanding, 2025. 3, 5, 6, 7 [38] Lu Ling, Yichen Sheng, Zhi Tu, Wentian Zhao, Cheng Xin, Kun Wan, Lantao Yu, Qianyu Guo, Zixun Yu, Yawen Lu, et al. Dl3dv-10k: A large-scale scene dataset for deep learning-based 3d vision. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pages 22160–22169, 2024. 5 [39] Haotian Liu, Chunyuan Li, Yuheng Li, and Yong -
Jae Lee. Improved baselines with visual instruction tuning. In Proceedings of the IEEE/CVF conference on computer vision and pattern recognition, pages 26296–26306, 2024. 6, 2 [40] Haotian Liu, Chunyuan Li, Yuheng Li, Bo Li, Yuanhan Zhang, Sheng Shen, and Yong Jae Lee. Llava-next: Improved reasoning, ocr, and world knowledge, 2024. 2 [41] Jiasen Lu, Christopher Clark, Sangho Lee, Zichen Zhang, Savya Khosla, Ryan Marten, Derek Hoiem, and Aniruddha Kembhavi. Unified-io 2: Scaling autoregressive mult-
imodal models with vision, language, audio, and action, 2023. 3 [42] Chenyang Ma, Kai Lu, Ta-Ying Cheng, Niki Trigoni, and Andrew Markham. Spatialpin: Enhancing spatial reasoning capabilities of vision-language models through prompting and interacting 3d priors. Advances in neural information processing systems, 37:68803–68832, 2024. 3 [43] OpenAI. Gpt-4o system card. https://cdn.openai. com/gpt-4o-system-card.pdf, 2024. Multimodal omni-model released May 2024. 2, 6 [44] Xiaqing Pan, Nicholas Char-
ron, Yongqian Yang, Scott Peters, Thomas Whelan, Chen Kong, Omkar Parkhi, Richard Newcombe, and Yuheng (Carl) Ren. Aria digital twin: A new benchmark dataset for egocentric 3d machine perception. In Proceedings of the IEEE/CVF International Conference on Computer Vision (ICCV), pages 20133–20143, 2023. 5
[45] Alec Radford, Jong Wook Kim, Chris Hallacy, Aditya Ramesh, Gabriel Goh, Sandhini Agarwal, Girish Sastry, Amanda Askell, Pamela Mishkin, Jack Clark, Gretchen
10

Krueger, and Ilya Sutskever. Learning transferable visual models from natural language supervision. In Proceedings of the 38th International Conference on Machine Learning, ICML 2021, 18-24 July 2021, Virtual Event, pages 87488763. PMLR, 2021. 8 [46] Jeremy Reizenstein, Roman Shapovalov, Philipp Henzler, Luca Sbordone, Patrick Labatut, and David Novotny. Common objects in 3d: Large-scale learning and evaluation of real-life 3d category reconstruction. In Proceedings of the IEEE/CVF international -
conference on computer vision, pages 10901–10911, 2021. 5, 7 [47] remyx.ai. Spacemantis-13b. https://huggingface. co/remyxai/SpaceMantis, 2025. Vision-language model specialised for spatial reasoning; model size 13B parameters. Accessed: 2025-11-13. 6, 2 [48] Mike Roberts, Jason Ramapuram, Anurag Ranjan, Atulit Kumar, Miguel Angel Bautista, Nathan Paczan, Russ Webb, and Joshua M. Susskind. Hypersim: A photorealistic synthetic dataset for holistic indoor scene understanding. In International Confer-
ence on Computer Vision (ICCV) 2021, 2021. 5 [49] Thomas Schops, Johannes L Schonberger, Silvano Galliani, Torsten Sattler, Konrad Schindler, Marc Pollefeys, and Andreas Geiger. A multi-view stereo benchmark with highresolution images and multi-camera videos. In Proceedings of the IEEE conference on computer vision and pattern recognition, pages 3260–3269, 2017. 7 [50] Jamie Shotton, Ben Glocker, Christopher Zach, Shahram Izadi, Antonio Criminisi, and Andrew Fitzgibbon. Scene coordinate regression-
 forests for camera relocalization in rgb-d images. In Proceedings of the IEEE conference on computer vision and pattern recognition, pages 2930–2937, 2013. 7 [51] Nathan Silberman, Derek Hoiem, Pushmeet Kohli, and Rob Fergus. Indoor segmentation and support inference from rgbd images. In European conference on computer vision, pages 746–760. Springer, 2012. 6 [52] Ilias Stogiannidis, Steven McDonagh, and Sotirios A Tsaftaris. Mind the gap: Benchmarking spatial reasoning in vision-language models.-
 In Greeks in AI Symposium 2025, 2025. 2 [53] Andrew Szot, Alex Clegg, Eric Undersander, Erik Wijmans, Yili Zhao, John Turner, Noah Maestre, Mustafa Mukadam, Devendra Chaplot, Oleksandr Maksymets, Aaron Gokaslan, Vladimir Vondrus, Sameer Dharur, Franziska Meier, Wojciech Galuba, Angel Chang, Zsolt Kira, Vladlen Koltun, Jitendra Malik, Manolis Savva, and Dhruv Batra. Habitat 2.0: Training home assistants to rearrange their habitat. In Advances in Neural Information Processing Systems (NeurIPS), 202-
1. 5 [54] Zhenggang Tang, Yuchen Fan, Dilin Wang, Hongyu Xu, Rakesh Ranjan, Alexander Schwing, and Zhicheng Yan. Mv-dust3r+: Single-stage scene reconstruction from sparse views in 2 seconds. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), pages 5283–5293, 2025. 3 [55] Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N Gomez, Ł ukasz Kaiser, and Illia
Polosukhin. Attention is all you need. In Advances in Neural Information Processing Systems. Curran Associates, Inc., 2017. 3 [56] Hengyi Wang and Lourdes Agapito. 3d reconstruction with spatial memory. arXiv preprint arXiv:2408.16061, 2024. 7
[57] Jianyuan Wang, Minghao Chen, Nikita Karaev, Andrea Vedaldi, Christian Rupprecht, and David Novotny. Vggt: Visual geometry grounded transformer. In Proceedings of the Computer Vision and Pattern Recognition Conference, pages 5294–5306, 2025. 2, 3, 6, 7, 8, 1 [58] Kaixuan Wang and Shaojie Shen. Flow-motion and depth network for monocular stereo and beyond. IEEE Robotics and Automation Letters, 5(2):3307–3314, 2020. 5 [59] Peng Wang, Shuai Bai, Sinan Tan, Shijie Wang, Zhihao Fan, Jinze Bai, Keqi-
n Chen, Xuejing Liu, Jialin Wang, Wenbin Ge, et al. Qwen2-vl: Enhancing vision-language model’s perception of the world at any resolution. arXiv preprint arXiv:2409.12191, 2024. 4, 6, 2
[60] Qianqian Wang, Yifei Zhang, Aleksander Holynski, Alexei A. Efros, and Angjoo Kanazawa. Continuous 3d perception model with persistent state, 2025. 3, 6, 7 [61] Ruicheng Wang, Sicheng Xu, Cassie Dai, Jianfeng Xiang, Yu Deng, Xin Tong, and Jiaolong Yang. Moge: Unlocking accurate monocular geometry estimation for open-domain images with optimal training supervision. In Proceedings of the Computer Vision and Pattern Recognition Conference, pages 5261–5271, 2025. 4, 1 [62] Shuzhe Wang, Vincent Ler-
oy, Yohann Cabon, Boris Chidlovskii, and Jerome Revaud. Dust3r: Geometric 3d vision made easy. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pages 2069720709, 2024. 3, 6, 7 [63] Wenshan Wang, Delong Zhu, Xiangwei Wang, Yaoyu Hu, Yuheng Qiu, Chen Wang, Yafei Hu, Ashish Kapoor, and Sebastian Scherer. Tartanair: A dataset to push the limits of visual slam. In 2020 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), pages 4909–4916. IEEE,-
 2020. 5 [64] Weiyun Wang, Zhangwei Gao, Lixin Gu, Hengjun Pu, Long Cui, Xingguang Wei, Zhaoyang Liu, Linglin Jing, Shenglong Ye, Jie Shao, Zhaokai Wang, Zhe Chen, Hongjie Zhang, Ganlin Yang, Haomin Wang, Qi Wei, Jinhui Yin, Wenhao Li, Erfei Cui, Guanzhou Chen, Zichen Ding, Changyao Tian, Zhenyu Wu, Jingjing Xie, Zehao Li, Bowen Yang, Yuchen Duan, Xuehui Wang, Zhi Hou, Haoran Hao, Tianyi Zhang, Songze Li, Xiangyu Zhao, Haodong Duan, Nianchen Deng, Bin Fu, Yinan He, Yi Wang, Conghui He, Botian Shi,-
 Junjun He, Yingtong Xiong, Han Lv, Lijun Wu, Wenqi Shao, Kaipeng Zhang, Huipeng Deng, Biqing Qi, Jiaye Ge, Qipeng Guo, Wenwei Zhang, Songyang Zhang, Maosong Cao, Junyao Lin, Kexian Tang, Jianfei Gao, Haian Huang, Yuzhe Gu, Chengqi Lyu, Huanze Tang, Rui Wang, Haijun Lv, Wanli Ouyang, Limin Wang, Min Dou, Xizhou Zhu, Tong Lu, Dahua Lin, Jifeng Dai, Weijie Su, Bowen Zhou, Kai Chen, Yu Qiao, Wenhai Wang, and Gen Luo. Internvl3.5: Advancing open-source multimodal models in versatility, reasoning, and -
efficiency, 2025. 2
11

[65] Xinlong Wang, Xiaosong Zhang, Zhengxiong Luo, Quan Sun, Yufeng Cui, Jinsheng Wang, Fan Zhang, Yueze Wang, Zhen Li, Qiying Yu, Yingli Zhao, Yulong Ao, Xuebin Min, Tao Li, Boya Wu, Bo Zhao, Bowen Zhang, Liangdong Wang, Guang Liu, Zheqi He, Xi Yang, Jingjing Liu, Yonghua Lin, Tiejun Huang, and Zhongyuan Wang. Emu3: Next-token prediction is all you need, 2024. 3 [66] Yi Wang, Mushui Liu, Wanggui He, Hanyang Yuan, Longxiang Zhang, Ziwei Huang, Guanghao Zhang, Wenkai Fang, Haoze Jiang, Shengxuming-
 Zhang, Dong She, Jinlong Liu, Weilong Dai, Mingli Song, Hao Jiang, and Jie Song. Towards enhanced image generation via multi-modal chain of thought in unified generative models, 2025. 3 [67] Yifan Wang, Jianjun Zhou, Haoyi Zhu, Wenzheng Chang, Yang Zhou, Zizun Li, Junyi Chen, Jiangmiao Pang, Chunhua Shen, and Tong He. π3: Permutation-equivariant visual geometry learning. arXiv preprint arXiv:2507.13347, 2025. 3, 4, 6, 8, 1 [68] Diankun Wu, Fangfu Liu, Yi-Hsin Hung, and Yueqi Duan. Spatial-mllm: B-
oosting mllm capabilities in visual-based spatial intelligence. arXiv preprint arXiv:2505.23747, 2025. 3, 6, 2 [69] Hongchi Xia, Yang Fu, Sifei Liu, and Xiaolong Wang. Rgbd objects in the wild: Scaling real-world 3d object learning from rgb-d videos, 2024. 5 [70] Jinheng Xie, Zhenheng Yang, and Mike Zheng Shou. Showo2: Improved native unified multimodal models, 2025. 3 [71] Jianing Yang, Alexander Sax, Kevin J Liang, Mikael Henaff, Hao Tang, Ang Cao, Joyce Chai, Franziska Meier, and Matt Feiszli. -
Fast3r: Towards 3d reconstruction of 1000+ images in one forward pass. arXiv preprint arXiv:2501.13928, 2025. 3, 6 [72] Jihan Yang, Shusheng Yang, Anjali W. Gupta, Rilyn Han, Li Fei-Fei, and Saining Xie. Thinking in space: How multimodal large language models see, remember, and recall spaces, 2025. 3 [73] Sihan Yang, Runsen Xu, Yiman Xie, Sizhe Yang, Mo Li, Jingli Lin, Chenming Zhu, Xiaochen Chen, Haodong Duan, Xiangyu Yue, Dahua Lin, Tai Wang, and Jiangmiao Pang. Mmsi-bench: A benchmark for multi-
-image spatial intelligence, 2025. 3 [74] Yao Yao, Zixin Luo, Shiwei Li, Jingyang Zhang, Yufan Ren, Lei Zhou, Tian Fang, and Long Quan. Blendedmvs: A largescale dataset for generalized multi-view stereo networks. In Proceedings of the IEEE/CVF conference on computer vision and pattern recognition, pages 1790–1799, 2020. 5
[75] Hanrong Ye, De-An Huang, Yao Lu, Zhiding Yu, Wei Ping, Andrew Tao, Jan Kautz, Song Han, Dan Xu, Pavlo Molchanov, and Hongxu Yin. X-vila: Cross-modality alignment for large language model, 2024. 3 [76] Chandan Yeshwanth, Yueh-Cheng Liu, Matthias Nießner, and Angela Dai. Scannet++: A high-fidelity dataset of 3d indoor scenes. In Proceedings of the IEEE/CVF International Conference on Computer Vision, pages 12–22, 2023. 5
[77] Baiqiao Yin, Qineng Wang, Pingyue Zhang, Jianshu Zhang, Kangrui Wang, Zihan Wang, Jieyu Zhang, Keshigeyan Chandrasegaran, Han Liu, Ranjay Krishna, Saining Xie, Manling
Li, Jiajun Wu, and Li Fei-Fei. Spatial mental modeling from limited views, 2025. 5, 6, 7 [78] Songsong Yu, Yuxin Chen, Hao Ju, Lianjie Jia, Fuxi Zhang, Shaofei Huang, Yuhan Wu, Rundi Cui, Binghao Ran, Zaibin Zhang, et al. How far are vlms from visual spatial intelligence? a benchmark-driven perspective. arXiv preprint arXiv:2509.18905, 2025. 2
[79] Amir R Zamir, Alexander Sax, William Shen, Leonidas J Guibas, Jitendra Malik, and Silvio Savarese. Taskonomy: Disentangling task transfer learning. In Proceedings of the IEEE conference on computer vision and pattern recognition, pages 3712–3722, 2018. 5 [80] Xiaohua Zhai, Basil Mustafa, Alexander Kolesnikov, and Lucas Beyer. Sigmoid loss for language image pre-training. In Proceedings of the IEEE/CVF international conference on computer vision, pages 11975–11986, 2023. 8 [81] Boqiang Zhang, -
Kehan Li, Zesen Cheng, Zhiqiang Hu, Yuqian Yuan, Guanzheng Chen, Sicong Leng, Yuming Jiang, Hang Zhang, Xin Li, et al. Videollama 3: Frontier multimodal foundation models for image and video understanding. arXiv preprint arXiv:2501.13106, 2025. 2
[82] Hao Zhang, Hongyang Li, Feng Li, Tianhe Ren, Xueyan Zou, Shilong Liu, Shijia Huang, Jianfeng Gao, Lei Zhang, Chunyuan Li, and Jianwei Yang. Llava-grounding: Grounded visual chat with large multimodal models, 2023. 3
[83] Jiahui Zhang, Yurui Chen, Yanpeng Zhou, Yueming Xu, Ze Huang, Jilin Mei, Junhui Chen, Yu-Jie Yuan, Xinyue Cai, Guowei Huang, Xingyue Quan, Hang Xu, and Li Zhang. From flatland to space: Teaching vision-language models to perceive and reason in 3d, 2025. 5, 6, 7 [84] Shangzhan Zhang, Jianyuan Wang, Yinghao Xu, Nan Xue, Christian Rupprecht, Xiaowei Zhou, Yujun Shen, and Gordon Wetzstein. Flare: Feed-forward geometry, appearance and camera estimation from uncalibrated sparse views, 2025. 6
[85] Yuanhan Zhang, Jinming Wu, Wei Li, Bo Li, Zejun Ma, Ziwei Liu, and Chunyuan Li. Video instruction tuning with synthetic data, 2024. 6 [86] Duo Zheng, Shijia Huang, and Liwei Wang. Video-3d llm: Learning position-aware video representation for 3d scene understanding, 2025. 2 [87] Chenming Zhu, Tai Wang, Wenwei Zhang, Jiangmiao Pang, and Xihui Liu. Llava-3d: A simple yet effective pathway to empowering lmms with 3d-awareness. ArXiv preprint, abs/2409.18125, 2024. 2
12

G2VLM: Geometry Grounded Vision Language Model with Unified 3D
Reconstruction and Spatial Reasoning
Supplementary Material
A. Architecture Details
We employ a pretrained DINOv2 encoder. Unlike VGGT [57] or π3 [67], where DINO features directly match the geometry transformer’s hidden dimension, our architecture adopt an additional feature alignment step. Because we initialize the geometric perception expert to match the dimensions of the underlying LLM (Qwen2-VL-2B), we use a linear projection layer to map the DINO features into the expert’s input space. This approach is very commonly adopted in VLM literature. Both the geometric expert and s-
ematic expert comprises 28 layers, which mirroring the Qwen2VL-2B architecture, and utilizes global attention. In contrast to VGGT, which relies on a computationally intensive DPT head that aggregates multi-scale features, we adopt lightweight transformer-based geometry heads which is similar to π3. The decoders for camera poses, local point maps, and global point maps, share the same trasformer architecture but do not share weights. This architecture is a lightweight, 5-layer transformer that app-
lies self-attention exclusively to the features of each individual image. Following the decoder, the output heads vary by task. The heads for local point maps consist of a simple MLP followed by a pixel shuffle operation. For camera poses, the head is adapted from Reloc3r [19] and Pi3 [67] and uses an MLP, average pooling, and another MLP. The rotation is initially predicted in a 9D representation [30] and is then converted to a 3×3 rotation matrix via SVD orthogonalization. As we mentioned in Sec-
 3.1, the global point head serves solely to stabilize training and is excluded during inference.
B. Training Details
For the pre-training stage of geometric perception expert, we further divide it into two stage training. We first fix image resolution to 224x224 and use AdamW optimizer for 100K iterations with a learning rate (lr) of 2e-4 using cosine scheduler. Then we further train at lr of 5e-4 for another 20K steps with a higher resolution of 518x518, and apply randomized aspect ratio between 0.5 and 1.0. Similar to VGGT, for every batch, we randomly sample 2–24 frames from a random training scene. For our v-
isual geometry loss function, we set the weights for each component as follows: λnormal = 1.0, λcam = 0.2, and λtrans = 200.0. The implementation of our normal loss follows that of MoGe [61] and π3 [67], and the resolution for aligning the local point map loss is set to 4096. The low-resolution pretraining runs
on 32 A800 GPUs over 7 days and high-resolution runs on 64 A800 GPUs over 3 days. For visual geometry learning, we clip the loss that is greater than 10 and smooth it to 0 to avoid training instabilities. The loss spikes are due to noisy large 3D annotation data and further data cleaning efforts can help minimize these phenomena. For joint-training, we use AdamW optimizer and cosine scheduler for 16K iterations with a lr of 2e-5 on 64 A800 GPUs over 3 days. We do not apply loss clipping here. Thro-
ughout all training, we employ gradient norm clipping with a threshold of 1.0 to ensure training stability and leverage bfloat16 precision and gradient checkpointing to improve GPU memory and computational efficiency.
C. More results
We evaluate our model on the SPAR-Bench which is a comprehensive spatial reasoning benchmark. Here we present the detailed results of each sub-task in SPAR-Bench in Table 3. Our model, G2VLM-SR, demonstrates the best performance consistently across all tasks. Notably, it surpasses human performance in the low category.
1

Methods
Rank
Avg.
Low
Depth-OC
Depth-OC-MV
Depth-OO
Depth-OO-MV
Dist-OC
Dist-OC-MV
Dist-OO
Dist-OO-MV
Medium
PosMatch
CamMotion
ViewChgI
High
DistI-OO
DistI-OO-MV
ObjRel-OC-MV
ObjRel-OO
ObjRel-OO-MV
SpImag-OC
SpImag-OC-MV
SpImag-OO
SpImag-OO-MV
Baseline
Chance Level (Random) - - - - - - - - - - - - 22.65 24.50 - 25.09 23.82 22.02 31.25 25.27 22.16 25.81 24.42 24.17 26.89 Chance Level (Frequency) - 32.74 31.19 43.09 43.51 17.38 13.05 41.90 30.99 27.40 32.17 38.25 29.01 26.75 59.00 32.29 52.94 50.60 28.25 26.92 26.59 26.34 26.74 26.49 25.77 SPAR-Bench (tiny) API
Human Level 1 67.27 55.31 72.75 74.25 28.75 36.25 78.25 52.25 66.5 33.50 72.32 92 64 60.97 76.22 80 94 70 92 80 78 82 50 60 GPT-4o [1] 3 36.39 29.25 53.80 45.00 15.00 13.60 37.40 34.40 23.40 24.40 24.93 30 16 28.80 45.11 64 64 58 46 46 32 44 30 22 Claude-3.7-Sonnet [2] 5 21.77 25.43 41.00 45.40 11.20 12.20 42.60 19.60 26.00 5.40 7.33 16 6 0.00 23.33 40 48 22 36 14 12 20 6 12 Qwen2-VL-72B [59] 4 35.62 35.28 45.40 49.80 13.80 10.00 54.60 49.40 36.80 22.40 23.39 42 18 10.16 40.00 60 68 50 38 44 18 28-
 18 36 Qwen2.5-VL-72B [6] 2 39.40 35.35 53.20 46.80 17.80 29.00 49.60 57.40 14.40 14.60 23.05 40 16 13.16 48.44 74 74 60 56 50 20 34 24 44 SPAR-Bench (full)
LLaVA-Video-7B 5 32.33 23.55 26 37.4 26.9 12 16.4 16.3 26.9 26.5 24.83 35.4 30.8 8.3 42.62 58.2 54.2 53.8 43.1 38.8 34.9 36.6 26.5 37.5 InternVL2-2B [13] 15 28.06 21.74 18.06 24.81 23.20 20.97 19.47 19.95 26.83 20.61 22.83 39.69 23.00 5.81 35.42 51.18 55.95 46.00 31.59 23.82 36.02 34.30 17.55 22.41 InternVL2-4B [13] 7 32.01 28.94 23.94 27.22 20.00 18.12 42.57 40.16 31.29 28.18 29.16 49.87 21.00 16.62 35.70 56.76 55.36 40.25 36.81 25.21 28.76 32.27 21.19 24.65 InternVL2.5-2B [12] 11 30.14 25.79 39.-
67 39.72 12.12 15.03 30.94 29.59 20.22 19.02 22.93 37.91 24.25 6.64 36.41 51.47 56.85 50.25 33.79 24.10 27.15 35.17 26.49 22.41 InternVL2.5-4B [12] 10 30.55 25.66 29.06 32.97 21.77 16.83 20.84 26.85 28.13 28.79 29.75 47.07 33.25 8.92 35.16 54.12 58.93 35.50 29.67 34.63 24.73 31.39 19.21 28.29 InternVL2.5-8B [12] 3 36.28 29.46 25.78 29.31 23.79 18.76 46.82 42.68 22.62 25.89 31.88 61.32 28.00 6.32 43.80 59.71 56.85 51.75 44.23 41.55 36.56 41.57 22.52 39.50 LLaVA-OV-0.5B [31] 12 29.48 30.14 49.22 42.-
72 18.04 14.92 31.48 25.67 28.98 30.10 15.89 24.43 21.75 1.50 33.42 50.88 50.00 32.00 27.75 26.04 30.91 34.01 24.50 24.65 LLaVA-OV-7B [31] 8 31.20 21.79 30.33 26.94 18.58 13.87 10.43 13.64 31.24 29.29 26.13 38.68 30.25 9.47 40.14 56.47 55.06 37.25 48.63 38.23 30.38 33.72 26.49 35.01 Qwen2-VL-2b [59] 16 24.60 19.43 38.03 40.63 18.84 14.09 7.81 7.07 17.82 11.14 27.55 26.21 25.25 31.20 28.22 54.12 49.11 21.75 25.27 12.47 23.92 27.62 24.83 14.85 Qwen2-VL-7b [59] 9 30.74 27.52 35.97 35.22 20.83 12.88 2-
8.68 29.95 28.21 28.45 20.44 35.37 20.25 5.69 37.03 59.71 52.38 30.25 38.46 41.00 22.04 28.49 22.52 38.38 Qwen2.5-VL-3B [6] 13 29.39 26.69 31.7 34.2 32.1 17.5 18.4 22.7 32.1 24.8 24.87 39.2 27.3 8.1 33.29 55.6 60.7 37.5 32.1 20.2 21 27 20.9 24.6 Qwen2.5-VL-7b [6] 4 33.07 28.75 31.33 33.66 21.99 14.97 42.88 37.73 23.83 23.64 22.97 33.33 28.75 6.83 40.27 58.24 51.49 44.75 50.00 32.13 33.87 32.85 27.15 31.93 LLaVA-v1.5-7b [39] 18 23.65 10.85 5.17 12.53 17.37 11.34 7.25 5.26 18.73 9.12 26.50 24.43 26.-
75 28.31 34.09 51.18 52.38 34.25 24.18 26.87 34.68 29.94 22.52 30.81 LLaVA-v1.6-7b [40] 19 13.21 8.53 12.14 0.00 20.35 0.27 10.76 0.41 24.27 0.00 4.79 6.62 7.75 0.00 20.18 51.76 7.74 6.25 32.14 6.37 39.52 10.47 21.52 5.88 SpaceMantis-13B [47] 14 28.93 23.56 35.2 29.1 18.1 13.3 21.4 23.1 24.9 23.4 23.27 31.8 31.8 6.2 35.60 56.5 55.4 41.8 31 36.3 25.3 25.6 25.5 23 SpaceQwen2.5-VL-3B [15] 17 24.24 14.46 23.7 25.8 18.9 19.1 4.7 3.3 13.1 7.1 24.00 34.4 29.5 8.1 33.01 58.5 58.6 35.5 23.9 24.1 22.6 27.9 -
19.9 26.1 Spatial-MLLM-7B [68] 6 32.15 29.88 31.9 22.9 22.8 16.4 35.9 38.7 35.5 34.9 20.30 34.1 26.8 0 38.13 54.7 50.9 39 34.6 24.7 38.7 41.3 28.8 30.5 VLM3R-7B [21] 2 43.21 39.78 47.8 45.6 40.1 20.6 42.2 44.3 40.1 37.5 28.43 42 30 13.3 51.18 55.9 59.2 58.8 53 54.6 47.3 50.6 30.5 50.7 G2VLM-SR 1 54.87 59.99 80.27 73.75 21.42 18.87 78.44 75.17 68.44 63.55 36.27 27 28.2 53.3 56.51 53.5 49.1 76.8 50 68.7 50.5 52.6 44.4 63
Table 3. Performance of different models on SPAR-Bench The highest, second-highest, and third-highest scores in each category are highlighted with light red , light orange , and light yellow , respectively. SPAR-Bench (tiny) refers to a subset of the full benchmark,
where 50 questions are sampled per task. Our model, G2VLM-SR, demonstrate the best performance consistently across all tasks. Notably, it surpasses human performance in low category.
2

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:02.154Z
- **Text Length:** 67049 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 14 of 14
