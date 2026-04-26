# PDF Document: Zhou et al. - 2025 - LaGen Towards Autoregressive LiDAR Scene Generation.pdf

**File Path:** Zhou et al. - 2025 - LaGen Towards Autoregressive LiDAR Scene Generation.pdf

**Processed Date:** 2026-02-10T18:13:50.568Z

**File Size:** 5820.58 KB

**Total Pages:** 11

**Extracted Pages:** 11

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3770

**Title:** LaGen: Towards Autoregressive LiDAR Scene Generation

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

LaGen: Towards Autoregressive LiDAR Scene Generation
Sizhuo Zhou1,2, Xiaosong Jia4(B), Fanrui Zhang1,2, Junjie Li1,2, Juyong Zhang1, Yukang Feng2, Jianwen Sun2, Songbur Wong3, Junqi You3, Junchi Yan2,3(B) 1University of Science and Technology of China 2Shanghai Innovation Institute 3Shanghai Jiao Tong University 4Fudan University
szzhou@mail.ustc.edu.cn, jiaxiaosong1997@gmail.com, yanjunchi@sjtu.edu.cn
a) Autoregressive Continuous Scene Generation b) Multi Perspective Scene Layout
: Car : Pedestrian
Figure 1. This work introduces LaGen, a novel 4D LiDAR scene generation framework that can autoregressively generate (a) long-horizon autonomous driving scenarios based solely on single-frame input. It is capable of generating high-fidelity LiDAR data consistent with the real world; (b) illustrates the visualization results of object-level layouts in a generated scene from different viewpoints.
Abstract
Generative world models for autonomous driving (AD) have become a trending topic. Unlike the widely studied image modality, in this work we explore generative world models for LiDAR data. Existing generation methods for LiDAR data only support single frame generation, while existing prediction approaches require multiple frames of historical input and can only deterministically predict multiple frames at once, lacking interactivity. Both paradigms fail to support long-horizon interactive generatio-
n. To this end, we introduce LaGen, which to the best of our knowledge is the first framework capable of frame-by-frame autoregressive generation of long-horizon LiDAR scenes. LaGen is able to take a single-frame LiDAR input as a starting point and effectively utilize bounding box information as condi
tions to generate high-fidelity 4D scene point clouds. In addition, we introduce a scene decoupling estimation module to enhance the model’s interactive generation capability for object-level content, as well as a noise modulation module to mitigate error accumulation during long-horizon generation. We construct a protocol based on nuScenes for evaluating long-horizon LiDAR scene generation. Experimental results comprehensively demonstrate LaGen outperforms state-of-the-art LiDAR generation and pr-
ediction models, especially on the later frames.
1. Introduction
In recent years, autonomous systems have attracted increasing attention in both academia and industry. Light Detection and Ranging (LiDAR) is one of the key sen
1
arXiv:2511.21256v1 [cs.CV] 26 Nov 2025

sors in various autonomous systems. It provides precise and rich geometric information about the surrounding environment [4, 25, 26, 62, 64] and has been widely applied across a range of fields [33, 44, 47, 48, 55, 67]. Unlike the extensively studied image modality, research on LiDAR is still limited. Existing studies have focused on two main directions: one is generating high-quality LiDAR data [36, 61, 70] to reduce the high cost of real-world acquisition [34, 60], and the other is predicting L-
iDAR data [22, 56, 57] to support decision-making in autonomous systems.
However, these research directions encounter substantial limitations in practical applications. Existing works on LiDAR generation predominantly focus on learning the data distribution within a dataset, enabling them to synthesize only non-sequential, single LiDAR point clouds. In contrast, the autonomous driving field often requires temporally continuous LiDAR scene segments [2, 10]. For LiDAR prediction tasks, with the rise of end-to-end autonomous driving (E2E-AD) [17, 20, 58], current methods -
are confronted with the following fundamental challenges:
1) Prediction requires multiple frames of historical scene data; however, in closed-loop simulation [5, 8, 19, 41], only the initial frame is available; 2) These methods are limited to predicting LiDAR scenes along a fixed trajectory, while the ego-vehicle may generate diverse trajectories based on different decisions; 3) They cannot accurately predicte LiDAR data over long temporal horizons, due to their inability to utilize diverse scene condition information in real time.
To address these challenges, we explore LiDAR-based generative world models and propose LaGen. LaGen is an autoregressive LiDAR point cloud generation framework capable of producing high-fidelity, long-horizon LiDAR scenes on a frame-by-frame basis. Specifically, we first utilize spherical projection to convert the three-dimensional LiDAR data into a more compact form: a range image. This representation not only improves computational efficiency but also better accommodates advanced diffusion mode-
ls. Next, we construct a high-fidelity LiDAR data generator based on the Latent Diffusion Model (LDM) [45], and guide the diffusion process using multiple control conditions.
To further enhance the spatiotemporal consistency of the entire generative framework, we also introduce the following carefully designed strategies: To improve the spatial consistency of generated results, we introduce a Scene Decoupling Estimation (SDE) module. It can provide the model with real-time object-level estimations of current scene, thereby enhancing the model’s interactive generation capability. To enhance the temporal consistency of generated results, we introduce a Noise Modulation (-
NM) module designed to alleviate error accumulation. This is because the autoregressive paradigm suffers from a traininference mismatch; during inference, errors in the gen
erated samples accumulate over longer temporal horizons. The proposed module injects noise into the conditional features containing information from the previous frame, thereby reducing the model’s over-reliance on prior frames and enabling it to better adapt to imperfect conditions. We compare LaGen’s generator with several state-of-theart LiDAR generation models on the nuScenes dataset. Experimental results demonstrate that our method achieves superior performance in generating high-fidelity LiD-
AR point clouds. In addition, we establish an evaluation protocol based on the nuScenes dataset for long-horizon LiDAR scene generation tasks. Experimental results indicate that LaGen can accurately generate long-horizon LiDAR scenes using only a single-frame historical input. It is noteworthy that our autoregressive framework further enables autonomous systems to incorporate decisions made at each time step into the generation of future predictions, thereby naturally supporting interactive world -
simulation. In summary, our contributions are as follows: • We propose LaGen, which to the best of our knowledge is the first interactive framework capable of autoregressively generating high-fidelity, long-horizon LiDAR scenes; • We design a scene decoupling estimation module and a noise modulation module, which effectively enhance the model’s performance in interactive scene-detail generation and long-horizon autoregressive generation; • We comprehensively evaluate the performance of the LaGen g-
enerator on the nuScenes dataset and establish a nuScenes-based benchmark for long-horizon generation tasks to demonstrate the superiority of our approach.
2. Related Work
Generative Models. Generative models aim to learn the underlying data distribution and generate novel samples. Generative Adversarial Networks (GANs) [11] are a prominent example. GANs alternately train a pair of competing networks, the generator and the discriminator, to minimize the adversarial objective. However, GANs often suffer from unstable training dynamics. Diffusion models (DMs) [49] have shown outstanding performance in the field of image synthesis. Mainstream diffusion models include s-
corebased models [51–53] and Denoising Diffusion Probabilistic Models (DDPM) [13, 23, 38, 46]. They enable stable training using simple objective functions, addressing challenges associated with GANs. Recently, Latent Diffusion Models (LDMs) [45] have been proposed. They perform the diffusion process in the latent space, greatly improving generation efficiency. They have also enabled significant advances in multimodal conditional generation [37, 42, 68].
LiDAR Data Generation. Generating LiDAR point clouds is a three-dimensional data generation task. Caccia et al. [1] were the first to represent LiDAR data as range images and employed Variational Autoencoders (VAEs) [24]
2

NM
3D Bounding Box
SDE Module
LiDAR frame (t)
Foreground
Background
Noise U-net
Ego vehicle States
Speed Related Location Related
D
Autoregressive
Denoising Loop
Spherical Projection
LiDAR frame (t + 1)
Cross Attention
Spherical Projection
E
Spherical Projection
Spherical Projection
Reverse Spherical Projection
E
E
NM
E
E VAE
Encoder
NM
D VAE
Decoder
NM Module
Figure 2. Overview of the LaGen framework. It first obtains estimates of the current frame’s foreground and background point clouds via the Scene Decoupling Estimation (SDE) module. Subsequently, all three-dimensional information is projected to the two-dimensional range image space via spherical mapping. These range-view representations are then processed by a pretrained VAE and a noise modulation (NM) module, before being passed to the U-net network to generate the LiDAR scene for the current fr-
ame. Afterward, the current generated scene is iteratively used as the input to the model, thereby completing the autoregressive process.
and Generative Adversarial Networks (GANs) [11] for generation. Subsequently, LiDARGen [70] introduced a scorebased LiDAR data generation model. UltraLiDAR [61] voxelizes LiDAR point clouds and employs VQ-VAE [65] for generation. LiDM [43] separately generates scenes, objects, and trajectories, and simulates ray casting to produce point clouds. R2DM [36], based on Denoising Diffusion Probabilistic Models (DDPMs) [50], further improves the fidelity of generated point clouds. RangeLDM [15] introduce-
s a range-guided discriminator, enabling fast generation through a latent diffusion model. However, most of these frameworks are only capable of generating isolated single-frame LiDAR data, or lack real-time interactivity.
LiDAR Data Forecasting. Point cloud prediction [35, 56, 57, 59] is a fundamental self-supervised task in autonomous driving, where multiple frames of historical point clouds are used as input to predict future point clouds. Early works focused on estimating scene flow between consecutive point clouds to forecast future point cloud sequences [31, 66]. However, such approaches typically incur high computational costs, limiting their practical applicability. Recent studies have started to directly pr-
edict from raw point cloud data [32, 39, 56, 57]. 4D-Occ [22] predicts point clouds from the perspective of geometric occupancy prediction, which further improves prediction accuracy. ViDAR [63] focuses on visual point cloud prediction, using historical images to predict future point clouds, and thereby improves performance in downstream applications to some extent. These prediction-based frameworks typically require multiple frames of historical input, yet still cannot accurately
predict long-horizon LiDAR scenes and lack interactivity.
3. Method
3.1. Preliminaries
Range Image: A Reversible and Compact Representation for LiDAR Data. Range images offer a compact representation of LiDAR data by parametrizing unstructured point clouds in 3D space into a 2D pixel space. Specifically, for a point p = (x, y, z) ∈ R3 in Cartesian coordinates, it is transformed to the spherical coordinates (r, θ, φ) via spherical projection. We adopt the corrected range image representation [15] as follows:
r=
q
x2 + y2 + (z − hj)2,
θ = arctan(y, x), φ = φj,
(1)
where r denotes the depth value, θ is the azimuth angle, φ is the elevation angle, hj and φj denote the sensor height and elevation angle estimated by Hough voting. Next, we convert the spherical coordinates (r, θ, φ) into pixel coordinates (u, v) of the range image using the equations:
u = W − ((θ + π)/2π) · W, v = H − j, (2)
where W and H are the width and height of the image in pixels. Finally, we normalize the depth and intensity values of the point cloud to obtain a two-channel range image I.
Latent Diffusion Model for LiDAR Generation. We employ the Latent Diffusion Model [45] for LiDAR data
3

generation. LDM consists of two components: a Variational Autoencoder (VAE) and a 2D UNet. The VAE encodes the input range image I ∈ RH×W ×2 into a latent representation zˆ ∈ Rh×w×c. The decoder then takes latent zˆ as input and generates the reconstructed range image Iˆ ∈ RH×W ×2. During the diffusion process, noise is progressively added to the initial latent z0 to obtain noisy latent zt, with the noise level increasing as the timestep t ∈ {1, 2, . . . , T } advances. The UNet is trained to pre-
dict the noise added to the latent feature zˆ at each timestep t. The training loss of the LDM is defined as:
LLDM = Eεt∈N (0,1),t∈U[0,T ],c
h
∥εt − εθ (zt; t, c)∥2i
, (3)
where zt denotes the noisy latent at timestep t, εθ is the noise prediction network to be trained, and c is the encoded conditional information. During inference, LDM generates range images by iteratively removing the noise predicted by UNet from randomly sampled Gaussian noise over T steps.
3.2. Overall Framework
Given the first frame of LiDAR data for a driving scenario P 0 ∈ RN0×4, our objective is to recursively generate subsequent LiDAR framesP s, for s = 1, 2, . . . , S, in accordance with the actual motion of the ego-vehicle. In autonomous driving simulators, the following information for each frame of the driving scenario can be tracked [21]: • 3D bounding boxes and semantic labels: Bs = {(bi, ci)}Nb
i=1, where bi = (xj , yj , zj )8
j=1 ∈ R8×3 denotes the bounding boxes of dynamic and static objects (such as vehicles, pedestrians, and obstacles) within a predefined range, and ci ∈ Cbox is the associated semantic category. • Ego states: Es = {Eego, Etrans}, where Eego includes ego-vehicle speed, acceleration and steering angle information, while Etrans is the transformation matrix from the ego-vehicle to the global coordinate frame. Accordingly, at each step of the generation process, we aim to generate the current LiDAR frame-
 based solely on the previous frame, while incorporating 3D bounding box information and ego-vehicle states from the previous and current frames. The pipeline of LaGen is shown in Figure 2.
3.3. Strongly Spatiotemporally Consistent LiDAR Scene Generator and Inference Framework
To achieve autoregressive LiDAR scene generation, a key requirement is to design a generator capable of producing LiDAR data with strong temporal coherence. In our framework, this generator is instantiated as a latent diffusion model, which can integrate multiple forms of conditional information during the diffusion process to generate spatiotemporally consistent sequences of LiDAR data for autonomous driving scenarios, as illustrated in Figure 3.
3D Bounding Box
SDE Output
Previous frame
Current Ground Truth
E
E
E
E
Proj FPN
C
ε!
ε"
Ego states
Cross Attention
D
U-net Inv
Proj
Generated Results
Proj
Proj
Proj
🔥
Figure 3. The schematic diagram of the LiDAR generator architecture. It mainly comprises a VAE and a U-Net. Additionally, it includes the following modules: a) Spherical projection module, which provides a compact representation of 3D data; b) SDE module, designed to enhance the model’s ability to learn detailed features; c) NM module, which mitigates error accumulation during long-horizon generation by introducing noise modulation.
3.3.1. Multi condition control generation process
Previous Frame’s LiDAR Data. Using the previous frame’s LiDAR point cloud P s−1 ∈ RNs−1×4 as one of the control conditions in the generation process is crucial for endowing the generator with autoregressive inference capability. To incorporate previous frame information into the denoising process, we first convert the 3D point cloud P s−1 into a 2D range image Is−1 ∈ R2×H×W using Equation (1). The variational autoencoder then projects Is−1 into the latent space as a latent variable zs−1 ∈ Rc×h×w. -
We can perform the following computation:
E s−1
rel = (Es
ego2glb · Es
li2ego)−1 · (Es−1
ego2glb · Es−1
li2ego), (4)
to obtain the transformation matrix Es−1
rel ∈ R4×4, which represents the coordinate transformation from the previous frame’s LiDAR sensor to the current frame’s LiDAR sensor. Here, Es−1
ego2glb and Es
ego2glb are the transformation matrices
from the ego-vehicle to the global coordinate system, while
E s−1
li2ego, Es
li2ego denote the transformation matrices from the LiDAR sensor to the ego-vehicle. Next, we apply a Featurewise Linear Modulation (FiLM) layer to adjust the latent feature zs−1 of the previous frame’s LiDAR data:
zˆs−1 = F iLM (zs−1, Es−1
rel ), (5)
and inject it into the latent diffusion process of the model.
Object-Level 3D Bounding Box Projection. 3D bounding box information is one of the most important cues in autonomous driving scenarios. To fully exploit this information, we first extract the four corner vertices of bi that are
4

Previous Scene Previous Foreground Current Bounding Box
Category Search
Decoupling
Decoupling
Coordinate Transformation
Previous Background Estimated Background Estimated Foreground
Match and Merge
SDE Output
12
4 53
6
7 8
1
1 2
3 4
5
67
8
23
4 5
6
1 2
3
4
5 6
Figure 4. The schematic diagram of scene decoupling estimation module. This module performs a coarse estimation of current foreground and background based on the previous frame’s scene and the object-level bounding box information of the current frame.
closest to the ground and perform pairwise interpolation between these vertices to obtain a point cloud ˆbi that encloses the object region. Next, according to the semantic label ci, we using Equation (1) to project point clouds of different classes into range image binary masks MB ∈ RD×H×W , where D denotes the number of categories. Then, we encode these masks into latent features HB ∈ RN×D in the latent space using an object-level mask encoder Emask. Subsequently, we inject HB into multiple laye-
rs of the UNet via a cross-attention mechanism:
q = HB, k = Hprev
B , v = Hcur
B , (6)
where q, k, v denote the query, key, and value in the crossattention layer, and Hcur
B , H prev
B are the features of bounding box projections for the current and previous frames.
Ego States. We encode the ego-vehicle state Eego along with the transformation matrix Etrans from the ego-vehicle to the global coordinate system to obtain features at multiple level, which are then injected into the UNet. By leveraging multiple control conditions to guide the denoising process, the latent diffusion model can generate high-fidelity samples, thereby ensuring robust performance in autoregressive LiDAR data generation scenarios.
3.3.2. Scene Decoupling Estimation
Having established the basic framework for LiDAR data generation conditioned on multiple control conditions, we further design a Scene Decoupling Estimation (SDE) module to improve the quality of generated details (see Figure 4). This module decouples the previous frame’s LiDAR scene into foreground (such as vehicles and pedestrians) and background parts. It then provides a coarse estimation of
Frame 1 Frame 2 Frame 3 Frame T
Noise
Latent Estimation
Noise
Noise
Latent Previous Frame
ε! ε"
U-net
Noise
Noise Est.
Noise Prev.
Figure 5. The schematic diagram of noise modulation module. This module adds noise to the latent features containing previous frame information at each autoregressive step.
the foreground and background in the current frame based on the ego-vehicle’s transformation matrix between adjacent frames. The design is described in detail below. For the previous frame LiDAR point cloud P s−1 ∈ RNs−1×4, we decouple it into foreground and background components based on its associated bounding box information Bs−1. The foreground point cloud P s−1
obj consists of all points in P s−1 that fall within any of the bounding boxes:
P s−1
obj = {pij}, i ∈ {1, 2, ..., D}, j ∈ {1, 2, ..., Ki}, (7)
where pij denotes the set of points within the j-th bounding box of the i-th category, D is the total number of semantic categories of bounding boxes, and Ki is the total number of bounding boxes in category i. The background point cloud P s−1
bg is defined as the set of all points in P s−1 that lie
outside the bounding boxes. For each ps−1
ij , we first adjust the viewpoint of the point cloud according to the coordinate transformation matrix of the sensor between the two frames:
pˆs−1
ij = trans(P s−1
ij , Es−1
rel ), (8)
To estimate the position of pˆij in the current-frame scene, we further design a nearest neighbor search algorithm targeting the centers of bounding boxes of the same category. Specifically, we first compute the centers Cs−1
ij and Cs
ij
of all bounding boxes in the two adjacent frames. For each bounding box bs
ij in the current scene, we search among the bounding boxes of the same semantic category in the previous frame for the one whose center is nearest to Cs
ij ,
denoted as bs−1
ij′ . Thus, we obtain an estimated foreground
object point cloud ps
ij for the current frame by:
pes
ij = pˆs−1
ij + (Cs
ij − Cs−1
ij′ ), i ∈ {1, 2, ..., D}. (9)
Then, we aggregate all pes
ij to obtain an estimate Pes
obj of the
foreground point cloud P s
obj in the current scene. Based on the characteristics of real LiDAR data acquisition, we estimate the background point cloud P s
bg using only
5

Ours Vidar (3s) 4D-Occ (3s) GT
0.5s 3.0s 5.5s 9.5s
7.5s
Figure 6. Qualitative results. LaGen, based on single-frame input, clearly outperforms other baseline methods in prediction accuracy.
the rotation matrix:
Pes
bg = trans(P s−1
bg , Es−1
rotate). (10)
Finally, we project both Pes
obj and Pes
bg into the range-view space and encode them using the VAE, after which the resulting features are injected into the diffusion process. It is worth noting that, compared with directly providing bounding box location information, the SDE module better captures object-level details. Mask information from bounding boxes only provides the model with a coarse understanding of each object’s location within the scene, whereas SDE enables the model to better capture the detailed point distribution of each-
 object.
3.3.3. Noise Modulation Module and Error Accumulation Mitigation
Autoregressive generation, which relies on information from the previous frame, often leads to a train-inference discrepancy. Specifically, during training, the previous data is always ground truth, whereas during inference, it is generated by the model and inevitably contains some error compared to the real data. As the recursive generation continues, these errors can accumulate, resulting in deviations from the actual situation when generating long-horizon data. To this end, we design a module t-
o mitigate error accumulation and enhance temporal consistency in long-horizon
generation. The core idea of this module is to inject different levels of random noise into the previous frame’s image [3, 7], thereby reducing the model’s over-reliance on it. As shown in Figure 5, we add Gaussian noise with varying intensities to the latent feature zˆs−1 corresponding to the previous frame’s LiDAR point cloud:
zˆs−1
ε = √αn · zˆs−1 + √1 − αn · ε, (11)
where ε ∼ N (0, 1) is randomly sampled Gaussian noise, and n ∈ U [0, N ] is the noise level. Similarly, we inject Gaussian noise to the encoded features of Pes
obj and Pes
bg.
This strategy ensures better spatiotemporal consistency for the model when inferring long-horizon scenes, while only causing minor impact on short-horizon generation.
3.3.4. Frame-by-Frame Inference Framework for Autoregressive LiDAR Scene Generation
We have already developed a generator capable of producing high-quality LiDAR data. Building upon this, we design an inference framework for autoregressive LiDAR scene generation. In summary, at each step of the autoregressive generation process, the inputs to the generator include: • The range image corresponding to the previous frame’s LiDAR point cloud: Is−1 ∈ RH×W ×2; • The 3D bounding boxes and semantic labels of objects in the driving scene: Bs = {(bi, ci)}Nb
i=1;
6

Table 1. Comparison of our method with several state-of-the-art LiDAR prediction models. Given that prediction models rely on multiple frames of historical input, we evaluate the model architectures using 2-frame and 6-frame historical inputs, respectively. The underlined data represents the results obtained by introducing rolling inference on the original 4D-Occ model.
Method Input Chamfer Distance (m2)↓
frames 0.5s 1.0s 1.5s 2.0s 2.5s 3.0s 3.5s 4.0s 5.5s 7.5s 9.5s
4D-Occ [22] 2 1.15 1.61 1.84 2.15 2.56 3.10 4.30 6.24 12.30 25.11 55.47
4D-Occ [22] 6 1.00 1.19 1.33 1.48 1.64 1.85 2.41 3.49 7.73 12.82 21.08
ViDAR [63] 2 1.15 1.36 1.56 1.75 1.98 2.22 2.50 2.81 3.79 5.18 6.37
ViDAR [63] 6 1.14 1.31 1.47 1.66 1.86 2.08 2.30 2.54 3.25 4.12 5.06
LaGen 1 0.50 0.61 0.71 0.81 0.92 1.08 1.22 1.32 1.73 2.14 2.66
• The ego-vehicle state in the driving scene: Es ∈ RNe ; • The range images of the estimated foreground and background point clouds for the current frame provided by the scene decoupling estimation module: Ies
obj , Ies
bg.
Based on this control information, the model can generate the LiDAR data for the current frame. In this process, the input LiDAR data is generated iteratively; in other words, the LiDAR data input at the current step is the output from the generator at the preceding step. Meanwhile, during inference, the SDE module is also computed based on the generated data. Consistent with the training phase, during inference the NM module also adds varying levels of noise to these data.
Table 2. The results of LaGen and baseline models on Nuscenes dataset. MMD values are reported in 10−4 and JSD in 10−2.
Method Years MMD ↓ JSD ↓
LiDARGen [70] ECCV’22 5.89 9.66 LiDM [43] CVPR’24 3.32 6.75 RangeLDM [15] ECCV’24 1.92 5.47 LaGen - 0.35 3.97
4. Experiments
4.1. Experimental Setups
Dateset. We conducted experiments on the challenging large-scale public nuScenes dataset [2]. It contains 1,000 autonomous driving sequences collected from the Boston and Singapore regions. These two cities are known for their dense traffic and highly challenging driving conditions. The nuScenes training set contains 297,737 LiDAR scans, while the validation set contains 52,423 LiDAR scans, with each LiDAR scan comprising 32 beams. This dataset is widely used for various tasks in autonomous drivin-
g, including but not limited to 3D object detection [18, 27–29], multi-object tracking [14, 40, 69], trajectory prediction [12, 30], seman
tic occupancy prediction [6, 54], and open-loop planning for end-to-end autonomous driving [16, 17, 20].
Evaluation Metrics. We introduce two categories of metrics to evaluate both the generator’s performance and the quality of long-horizon scene generation. For evaluating the performance of the LiDAR data generator, we follow the approach in [70] and use two metrics: Maximum Mean Discrepancy (MMD) and Jensen-Shannon Divergence (JSD). To evaluate the accuracy of autoregressive generation, we use the Chamfer Distance (CD) [9] along with two additional error metrics based on ray depth, which quantify t-
he difference between the generated point cloud for each frame and the corresponding ground truth in the driving scenario.
4.2. LiDAR Data Generation
An important component of our approach is the LiDAR data generator, as the quality of its generated samples plays a crucial role in the overall framework performance. Table 2 summarizes the quantitative results of LaGen and several baseline LiDAR generation models. The experimental results demonstrate that our approach outperforms these baselines on both key metrics for LiDAR data generation.
4.3. Autoregressive LiDAR Scene Generation
This subsection assesses the performance of LaGen on long-horizon LiDAR scene generation tasks. To this end, we develop a nuScenes-based evaluation protocol tailored for this task and compare LaGen with several state-of-theart prediction-based approaches.
4.3.1. Benchmark for Autoregressive Scene Generation
The nuScenes dataset consists of a large number of driving scene clips with varying numbers of frames. We divide the dataset into sequential scene segments, each lasting 10 seconds. Our principle is: if a segmented scene sequence contains frames belonging to different scenes, that sequence is removed. As a result, we obtain a dataset containing 176 valid scenes, with each scene segment consisting of 20 consecutive LiDAR frames and other scene information.
7

Table 3. Comparison of our method with several state-of-the-art LiDAR prediction models on two indicators based on ray depth. The underlined data represents the results obtained by introducing rolling inference on the original 4D-Occ model.
Method Input L1 Error (m)↓ Absrel (%)↓
frames 0.5s 1.5s 3.5s 5.5s 7.5s 9.5s 0.5s 1.5s 3.5s 5.5s 7.5s 9.5s
4D-Occ [22] 2 1.24 2.04 3.41 4.87 7.07 9.95 8.88 14.82 25.36 40.14 56.24 67.37
4D-Occ [22] 6 1.23 1.62 2.60 3.48 4.74 6.49 8.41 12.15 22.16 29.20 35.78 39.50
ViDAR [63] 2 2.38 2.70 3.34 4.24 5.40 6.06 16.29 19.96 27.34 36.25 48.61 54.13
ViDAR [63] 6 2.15 2.60 3.06 3.49 3.91 4.42 17.98 20.57 25.87 30.18 33.77 38.34
Ours 1 0.13 0.18 0.24 0.30 0.36 0.41 2.06 2.51 3.05 3.56 4.09 4.36
4.3.2. Comparison with Prediction Models
To quantitatively assess LaGen’s capability in generating spatiotemporally consistent LiDAR scenes, we compare it with several state-of-the-art prediction models, as shown in Table 1. Note that the original version of 4d-occ can predict at most 6 frames; we adopt a rolling scheme to extend its predictions to longer sequences. Based on these results, we can conclude that LaGen offers the following significant advantages over these prediction models: 1) LaGen can generate future driving scenes using-
 only a single-frame historical input; 2) LaGen achieves lower errors in short-horizon generation and can stably generate scenes over a longer time range.
4.4. Editability and Interactive Generation
In this subsection, we demonstrate LaGen’s interactive generation capabilities. Since it generates scenes frame by frame, we can edit the positions of objects in the scene at any intermediate frame. In Figure 7, we illustrate interactive generation by moving or removing a bounding box corresponding to a vehicle. We observe that after moving the other vehicle, LaGen accurately restore the occlusion effects caused by the object’s new position. Additionally, when the vehicle is removed, LaGen success-
fully completes the previously occluded portions of the road during standard generation. The interactivity of LaGen in autoregressive generation represents a significant advancement, enabling it to generate more diverse and realistic 4D scenes in real time according to changes in the external environment.
4.5. Ablation Study
We perform ablation studies to evaluate the contributions of the SDE and NM modules. As shown in Table 4, the SDE module can improve the prediction accuracy to some extent, but when the prediction horizon is very long, it may introduce additional error accumulation. Table 5 indicates that the NM module can significantly mitigate error accumulation in long-horizon LiDAR scene generation.
Ground Truth Standard Generation
Moving Bounding Box Removing Bounding Box
Figure 7. Object-level editing and interaction. By moving or removing a bounding box within the scene, we achieve precise object-level editing and interactive control.
Table 4. The ablation results on the SDE module of LaGen.
LaGen Chamfer Distance (m2)↓
0.5s 1.0s 2.0s 3.0s 4.0s 6.0s 8.0s 9.5s
w/o SDE 0.58 0.72 0.98 1.18 1.38 1.89 2.33 2.60
w/ SDE 0.50 0.61 0.80 1.08 1.32 1.84 2.24 2.66
Table 5. The ablation results on the NM module of LaGen.
LaGen Chamfer Distance (m2)↓
6.0s 6.5s 7.0s 7.5s 8.0s 8.5s 9.0s 9.5s
w/o NM 1.98 2.20 2.33 2.60 2.73 2.86 3.08 3.18
w/ NM 1.84 1.92 2.03 2.14 2.24 2.39 2.54 2.66
8

5. Conclusion
We propose LaGen, a novel framework capable of autoregressively generating long-horizon LiDAR scenes in a frame-by-frame manner. We develop a LiDAR data generator conditioned on multiple control conditions within the driving scenario. We further enhance the spatiotemporal consistency of long-horizon generation through the scene decoupling estimation module and the noise modulation module. We comprehensively evaluate our generator’s performance on the nuScenes dataset and propose a nuScenes-based p-
rotocol for assessing long-horizon generation tasks. Experimental results demonstrate the effectiveness and superiority of the LaGen framework. In the future, we expect LaGen to play an important role in applications such as closed-loop simulation and world modeling, thereby advancing the development of autonomous driving.
References
[1] Lucas Caccia, Herke Van Hoof, Aaron Courville, and Joelle Pineau. Deep generative modeling of lidar data. In 2019 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), pages 5034–5040. IEEE, 2019. 2 [2] Holger Caesar, Varun Bankiti, Alex H Lang, Sourabh Vora, Venice Erin Liong, Qiang Xu, Anush Krishnan, Yu Pan, Giancarlo Baldan, and Oscar Beijbom. nuscenes: A multimodal dataset for autonomous driving. In Proceedings of the IEEE/CVF conference on computer vision and patter-
n recognition, pages 11621–11631, 2020. 2, 7 [3] Boyuan Chen, Diego Mart ́ı Mons ́o, Yilun Du, Max Simchowitz, Russ Tedrake, and Vincent Sitzmann. Diffusion forcing: Next-token prediction meets full-sequence diffusion. Advances in Neural Information Processing Systems, 37:24081–24125, 2024. 6 [4] Wenhao Cheng, Junbo Yin, Wei Li, Ruigang Yang, and Jianbing Shen. Language-guided 3d object detection in point cloud for autonomous driving. arXiv preprint arXiv:2305.15765, 2023. 2
[5] Kashyap Chitta, Aditya Prakash, Bernhard Jaeger, Zehao Yu, Katrin Renz, and Andreas Geiger. Transfuser: Imitation with transformer-based sensor fusion for autonomous driving. IEEE transactions on pattern analysis and machine intelligence, 45:12878–12895, 2022. 2 [6] OpenScene Contributors. Openscene: The largest up-to-date 3d occupancy prediction benchmark in autonomous driving. In Proceedings of the Conference on Computer Vision and Pattern Recognition, Vancouver, Canada, pages 18–22, 2023. 7-
 [7] Boyang Deng, Richard Tucker, Zhengqi Li, Leonidas Guibas, Noah Snavely, and Gordon Wetzstein. Streetscapes: Large-scale consistent street view generation using autoregressive video diffusion. In ACM SIGGRAPH 2024 Conference Papers, pages 1–11, 2024. 6 [8] Alexey Dosovitskiy, German Ros, Felipe Codevilla, Antonio Lopez, and Vladlen Koltun. Carla: An open urban driving simulator. In Conference on robot learning, pages 1–16. PMLR, 2017. 2
[9] Haoqiang Fan, Hao Su, and Leonidas J Guibas. A point set generation network for 3d object reconstruction from a single image. In Proceedings of the IEEE conference on computer vision and pattern recognition, pages 605–613, 2017. 7
[10] Andreas Geiger, Philip Lenz, Christoph Stiller, and Raquel Urtasun. Vision meets robotics: The KITTI dataset. International Journal of Robotics Research, 32(11):1231 – 1237, 2013. 2 [11] Ian J Goodfellow, Jean Pouget-Abadie, Mehdi Mirza, Bing Xu, David Warde-Farley, Sherjil Ozair, Aaron Courville, and Yoshua Bengio. Generative adversarial nets. Advances in neural information processing systems, 27, 2014. 2, 3
[12] Junru Gu, Chenxu Hu, Tianyuan Zhang, Xuanyao Chen, Yilun Wang, Yue Wang, and Hang Zhao. Vip3d: End-to-end visual trajectory prediction via 3d agent queries. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pages 5496–5506, 2023. 7 [13] Jonathan Ho, Ajay Jain, and Pieter Abbeel. Denoising diffusion probabilistic models. Advances in neural information processing systems, 33:6840–6851, 2020. 2 [14] Hou-Ning Hu, Yung-Hsu Yang, Tobias Fischer, Trevor Darrell, F-
isher Yu, and Min Sun. Monocular quasi-dense 3d object tracking. IEEE Transactions on Pattern Analysis and Machine Intelligence, 45:1992–2008, 2022. 7
[15] Qianjiang Hu, Zhimin Zhang, and Wei Hu. Rangeldm: Fast realistic lidar point cloud generation. In European Conference on Computer Vision, pages 115–135. Springer, 2024. 3, 7
[16] Shengchao Hu, Li Chen, Penghao Wu, Hongyang Li, Junchi Yan, and Dacheng Tao. St-p3: End-to-end vision-based autonomous driving via spatial-temporal feature learning. In European Conference on Computer Vision, pages 533–549. Springer, 2022. 7 [17] Yihan Hu, Jiazhi Yang, Li Chen, Keyu Li, Chonghao Sima, Xizhou Zhu, Siqi Chai, Senyao Du, Tianwei Lin, Wenhai Wang, et al. Planning-oriented autonomous driving. In Proceedings of the IEEE/CVF conference on computer vision and pattern recognition, pag-
es 17853–17862, 2023. 2, 7 [18] Junjie Huang, Guan Huang, Zheng Zhu, Yun Ye, and Dalong Du. Bevdet: High-performance multi-camera 3d object detection in bird-eye-view. arXiv preprint arXiv:2112.11790, 2021. 7 [19] Xiaosong Jia, Zhenjie Yang, Qifeng Li, Zhiyuan Zhang, and Junchi Yan. Bench2drive: Towards multi-ability benchmarking of closed-loop end-to-end autonomous driving. Advances in Neural Information Processing Systems, 37:819844, 2024. 2 [20] Bo Jiang, Shaoyu Chen, Qing Xu, Bencheng Liao, Ji-
ajie Chen, Helong Zhou, Qian Zhang, Wenyu Liu, Chang Huang, and Xinggang Wang. Vad: Vectorized scene representation for efficient autonomous driving. In Proceedings of the IEEE/CVF International Conference on Computer Vision, pages 8340–8350, 2023. 2, 7 [21] Napat Karnchanachari, Dimitris Geromichalos, Kok Seang Tan, Nanxiang Li, Christopher Eriksen, Shakiba Yaghoubi, Noushin Mehdipour, Gianmarco Bernasconi, Whye Kit Fong, Yiluan Guo, et al. Towards learning-based planning:
9

The nuplan benchmark for real-world autonomous driving. In 2024 IEEE International Conference on Robotics and Automation (ICRA), pages 629–636. IEEE, 2024. 4 [22] Tarasha Khurana, Peiyun Hu, David Held, and Deva Ramanan. Point cloud forecasting as a proxy for 4d occupancy forecasting. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pages 11161124, 2023. 2, 3, 7, 8 [23] Diederik Kingma, Tim Salimans, Ben Poole, and Jonathan Ho. Variational diffusion models. Ad-
vances in neural information processing systems, 34:21696–21707, 2021. 2
[24] Diederik P Kingma and Max Welling. Auto-encoding variational bayes. arXiv preprint arXiv:1312.6114, 2013. 2
[25] Xiang Li, Junbo Yin, Botian Shi, Yikang Li, Ruigang Yang, and Jianbing Shen. Lwsis: Lidar-guided weakly supervised instance segmentation for autonomous driving. In Proceedings of the AAAI conference on artificial intelligence, pages 1433–1441, 2023. 2 [26] Xiang Li, Junbo Yin, Wei Li, Chengzhong Xu, Ruigang Yang, and Jianbing Shen. Di-v2x: Learning domaininvariant representation for vehicle-infrastructure collaborative 3d object detection. In Proceedings of the AAAI Conference on Artificial I-
ntelligence, pages 3208–3215, 2024. 2
[27] Yinhao Li, Zheng Ge, Guanyi Yu, Jinrong Yang, Zengran Wang, Yukang Shi, Jianjian Sun, and Zeming Li. Bevdepth: Acquisition of reliable depth for multi-view 3d object detection. In Proceedings of the AAAI conference on artificial intelligence, pages 1477–1485, 2023. 7 [28] Yanwei Li, Zhiding Yu, Jonah Philion, Anima Anandkumar, Sanja Fidler, Jiaya Jia, and Jose Alvarez. End-to-end 3d tracking with decoupled queries. In Proceedings of the IEEE/CVF International Conference on Computer Vision, pa-
ges 18302–18311, 2023. [29] Zhiqi Li, Wenhai Wang, Hongyang Li, Enze Xie, Chonghao Sima, Tong Lu, Qiao Yu, and Jifeng Dai. Bevformer: learning bird’s-eye-view representation from lidar-camera via spatiotemporal transformers. IEEE Transactions on Pattern Analysis and Machine Intelligence, 2024. 7
[30] Ming Liang, Bin Yang, Wenyuan Zeng, Yun Chen, Rui Hu, Sergio Casas, and Raquel Urtasun. Pnpnet: End-to-end perception and prediction with tracking in the loop. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pages 11553–11562, 2020. 7 [31] Xingyu Liu, Charles R Qi, and Leonidas J Guibas. Flownet3d: Learning scene flow in 3d point clouds. In Proceedings of the IEEE/CVF conference on computer vision and pattern recognition, pages 529–537, 2019. 3
[32] Zhen Luo, Junyi Ma, Zijie Zhou, and Guangming Xiong. Pcpnet: An efficient and semantic-enhanced transformer network for point cloud prediction. IEEE Robotics and Automation Letters, 8(7):4267–4274, 2023. 3 [33] Flavio BP Malavazi, Remy Guyonneau, Jean-Baptiste Fasquel, Sebastien Lagrange, and Franck Mercier. Lidaronly based navigation algorithm for an autonomous agricultural robot. Computers and electronics in agriculture, 154: 71–79, 2018. 2 [34] Qinghao Meng, Wenguan Wang, Tianfei Zhou, Jia-
nbing Shen, Luc Van Gool, and Dengxin Dai. Weakly supervised
3d object detection from lidar point cloud. In European Conference on computer vision, pages 515–531. Springer, 2020. 2
[35] Benedikt Mersch, Xieyuanli Chen, Jens Behley, and Cyrill Stachniss. Self-supervised point cloud prediction using 3d spatio-temporal convolutional networks. In Conference on Robot Learning, pages 1444–1454. PMLR, 2022. 3 [36] Kazuto Nakashima and Ryo Kurazume. Lidar data synthesis with denoising diffusion probabilistic models. In 2024 IEEE International Conference on Robotics and Automation (ICRA), pages 14724–14731. IEEE, 2024. 2, 3 [37] Alex Nichol, Prafulla Dhariwal, Aditya Ramesh, Pranav S-
hyam, Pamela Mishkin, Bob McGrew, Ilya Sutskever, and Mark Chen. Glide: Towards photorealistic image generation and editing with text-guided diffusion models. arXiv preprint arXiv:2112.10741, 2021. 2
[38] Alexander Quinn Nichol and Prafulla Dhariwal. Improved denoising diffusion probabilistic models. In International conference on machine learning, pages 8162–8171. PMLR, 2021. 2 [39] Kaustab Pal, Aditya Sharma, Avinash Sharma, and K Madhava Krishna. Atppnet: Attention based temporal point cloud prediction network. In 2024 IEEE International Conference on Robotics and Automation (ICRA), pages 11140–11146. IEEE, 2024. 3 [40] Ziqi Pang, Zhichao Li, and Naiyan Wang. Simpletrack: Understanding and -
rethinking 3d multi-object tracking. In European Conference on Computer Vision, pages 680–696. Springer, 2022. 7 [41] Aditya Prakash, Kashyap Chitta, and Andreas Geiger. Multimodal fusion transformer for end-to-end autonomous driving. In Proceedings of the IEEE/CVF conference on computer vision and pattern recognition, pages 7077–7087, 2021. 2 [42] Aditya Ramesh, Prafulla Dhariwal, Alex Nichol, Casey Chu, and Mark Chen. Hierarchical text-conditional image generation with clip latents. arXiv prepri-
nt arXiv:2204.06125, 1 (2):3, 2022. 2 [43] Haoxi Ran, Vitor Guizilini, and Yue Wang. Towards realistic scene generation with lidar diffusion models. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pages 14738–14748, 2024. 3, 7 [44] Jonathan P Resop, Laura Lehmann, and W Cully Hession. Drone laser scanning for modeling riverscape topography and vegetation: Comparison with traditional aerial lidar. Drones, 3(2):35, 2019. 2 [45] Robin Rombach, Andreas Blattmann, -
Dominik Lorenz, Patrick Esser, and Bj ̈orn Ommer. High-resolution image synthesis with latent diffusion models. In Proceedings of the IEEE/CVF conference on computer vision and pattern recognition, pages 10684–10695, 2022. 2, 3 [46] Chitwan Saharia, William Chan, Saurabh Saxena, Lala Li, Jay Whang, Emily L Denton, Kamyar Ghasemipour, Raphael Gontijo Lopes, Burcu Karagol Ayan, Tim Salimans, et al. Photorealistic text-to-image diffusion models with deep language understanding. Advances in neural inf-
ormation processing systems, 35:36479–36494, 2022. 2
10

[47] Shaoshuai Shi, Xiaogang Wang, and Hongsheng Li. Pointrcnn: 3d object proposal generation and detection from point cloud. In Proceedings of the IEEE/CVF conference on computer vision and pattern recognition, pages 770–779, 2019. 2
[48] Shaoshuai Shi, Chaoxu Guo, Li Jiang, Zhe Wang, Jianping Shi, Xiaogang Wang, and Hongsheng Li. Pv-rcnn: Pointvoxel feature set abstraction for 3d object detection. In Proceedings of the IEEE/CVF conference on computer vision and pattern recognition, pages 10529–10538, 2020. 2
[49] Jascha Sohl-Dickstein, Eric Weiss, Niru Maheswaranathan, and Surya Ganguli. Deep unsupervised learning using nonequilibrium thermodynamics. In International conference on machine learning, pages 2256–2265. pmlr, 2015. 2
[50] Jiaming Song, Chenlin Meng, and Stefano Ermon. Denoising diffusion implicit models. arXiv preprint arXiv:2010.02502, 2020. 3
[51] Yang Song and Stefano Ermon. Generative modeling by estimating gradients of the data distribution. Advances in neural information processing systems, 32, 2019. 2
[52] Yang Song and Stefano Ermon. Improved techniques for training score-based generative models. Advances in neural information processing systems, 33:12438–12448, 2020.
[53] Yang Song, Jascha Sohl-Dickstein, Diederik P Kingma, Abhishek Kumar, Stefano Ermon, and Ben Poole. Score-based generative modeling through stochastic differential equations. arXiv preprint arXiv:2011.13456, 2020. 2
[54] Wenwen Tong, Chonghao Sima, Tai Wang, Li Chen, Silei Wu, Hanming Deng, Yi Gu, Lewei Lu, Ping Luo, Dahua Lin, et al. Scene as occupancy. In Proceedings of the IEEE/CVF International Conference on Computer Vision, pages 84068415, 2023. 7
[55] Ulrich Weiss and Peter Biber. Plant detection and mapping for agricultural robots using a 3d lidar sensor. Robotics and autonomous systems, 59(5):265–273, 2011. 2
[56] Xinshuo Weng, Jianren Wang, Sergey Levine, Kris Kitani, and Nicholas Rhinehart. Inverting the pose forecasting pipeline with spf2: Sequential pointcloud forecasting for sequential pose forecasting. In Conference on robot learning, pages 11–20. PMLR, 2021. 2, 3
[57] Xinshuo Weng, Junyu Nan, Kuan-Hui Lee, Rowan McAllister, Adrien Gaidon, Nicholas Rhinehart, and Kris M Kitani. S2net: Stochastic sequential pointcloud forecasting. In European Conference on Computer Vision, pages 549–564. Springer, 2022. 2, 3
[58] Xinshuo Weng, Boris Ivanovic, Yan Wang, Yue Wang, and Marco Pavone. Para-drive: Parallelized architecture for realtime autonomous driving. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pages 15449–15458, 2024. 2
[59] Benjamin Wilson, William Qi, Tanmay Agarwal, John Lambert, Jagjeet Singh, Siddhesh Khandelwal, Bowen Pan, Ratnesh Kumar, Andrew Hartnett, Jhony Kaesemodel Pontes, et al. Argoverse 2: Next generation datasets for self-driving perception and forecasting. arXiv preprint arXiv:2301.00493, 2023. 3
[60] Yutian Wu, Yueyu Wang, Shuwei Zhang, and Harutoshi Ogai. Deep 3d object detection networks using lidar data: A review. IEEE Sensors Journal, 21(2):1152–1171, 2020. 2 [61] Yuwen Xiong, Wei-Chiu Ma, Jingkang Wang, and Raquel Urtasun. Ultralidar: Learning compact representations for lidar completion and generation. arXiv preprint arXiv:2311.01448, 2023. 2, 3
[62] Yan Yan, Yuxing Mao, and Bo Li. Second: Sparsely embedded convolutional detection. Sensors, 18(10), 2018. 2 [63] Zetong Yang, Li Chen, Yanan Sun, and Hongyang Li. Visual point cloud forecasting enables scalable autonomous driving. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pages 14673–14684, 2024. 3, 7, 8 [64] Junbo Yin, Jianbing Shen, Runnan Chen, Wei Li, Ruigang Yang, Pascal Frossard, and Wenguan Wang. Is-fusion: Instance-scene collaborative fusion-
 for multimodal 3d object detection. In Proceedings of the IEEE/CVF conference on computer vision and pattern recognition, pages 1490514915, 2024. 2 [65] Jiahui Yu, Xin Li, Jing Yu Koh, Han Zhang, Ruoming Pang, James Qin, Alexander Ku, Yuanzhong Xu, Jason Baldridge, and Yonghui Wu. Vector-quantized image modeling with improved vqgan. arXiv preprint arXiv:2110.04627, 2021. 3 [66] Mingliang Zhai, Xuezhi Xiang, Ning Lv, and Xiangdong Kong. Optical flow and scene flow estimation: A survey. Pattern Rec-
ognition, 114:107861, 2021. 3
[67] Ji Zhang, Sanjiv Singh, et al. Loam: Lidar odometry and mapping in real-time. In Robotics: Science and systems, pages 1–9. Berkeley, CA, 2014. 2 [68] Lvmin Zhang, Anyi Rao, and Maneesh Agrawala. Adding conditional control to text-to-image diffusion models. In Proceedings of the IEEE/CVF international conference on computer vision, pages 3836–3847, 2023. 2 [69] Tianyuan Zhang, Xuanyao Chen, Yue Wang, Yilun Wang, and Hang Zhao. Mutr3d: A multi-camera tracking framework via 3d-to-2d queries. In -
Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pages 4537–4546, 2022. 7 [70] Vlas Zyrianov, Xiyue Zhu, and Shenlong Wang. Learning to generate realistic lidar point clouds. In European Conference on Computer Vision, pages 17–35. Springer, 2022. 2, 3, 7
11

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:13:50.568Z
- **Text Length:** 48770 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 11 of 11
