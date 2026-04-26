# PDF Document: Bhattarai et al. - 2025 - DreamTexture Shape from Virtual Texture with Analysis by Augmentation.pdf

**File Path:** Bhattarai et al. - 2025 - DreamTexture Shape from Virtual Texture with Analysis by Augmentation.pdf

**Processed Date:** 2026-02-10T18:14:33.041Z

**File Size:** 3246.99 KB

**Total Pages:** 17

**Extracted Pages:** 17

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2790

**Title:** DreamTexture: Shape from Virtual Texture with Analysis by Augmentation

**Collection:** Large Files

---

## Extracted Text Content

DreamTexture: Shape from Virtual Texture with Analysis by Augmentation
Ananta R. Bhattarai1 Xingzhe He2 Alla Sheffer2 Helge Rhodin1,2
1Bielefeld University 2University of British Columbia
Analysis by Synthesis Analysis by Augmentation (AbA) - Ours
Depth Map SDS
Real & Virtual View
Augmented Texture
Multiple Real Views Real View
NeRF/GS NeRF/GS
Virtual View
Input Image
Virtual Texture
Superposition
Figure 1. Teaser. While existing analysis-by-synthesis approaches (left) rely on volumetric rendering of multiple real or virtual views, DreamTexture (right) takes one image as input, augments a virtual texture, and optimizes the output depth map by aligning the real and virtual shape cues with a pre-trained image prior via Score Distillation Sampling (SDS). This analysis by augmentation (AbA) approach reconstructs depth without any 3D supervision and unlike classical shape from texture, it applie-
s to both textured and textureless objects.
Abstract
DreamFusion established a new paradigm for unsupervised 3D reconstruction from virtual views by combining advances in generative models and differentiable rendering. However, the underlying multi-view rendering, along with supervision from large-scale generative models, is computationally expensive and under-constrained. We propose DreamTexture, a novel Shape-from-Virtual-Texture approach that leverages monocular depth cues to reconstruct 3D objects. Our method textures an input image by aligning -
a virtual texture with the real depth cues in the input, exploiting the inherent understanding of monocular geometry encoded in modern diffusion models. We then reconstruct depth from the virtual texture deformation with a new conformal map optimization, which alleviates memoryintensive volumetric representations. Our experiments reveal that generative models possess an understanding of monocular shape cues, which can be extracted by augmenting and aligning texture cues—a novel monocular reconstru-
ction paradigm that we call Analysis by Augmentation.
1. Introduction
Unsupervised 3D reconstruction is now possible without restrictive assumptions on object class, texture regularity, and
shading by methods such as DreamFusion [44]. Figure 1 shows how their virtual multi-view reconstruction renders virtual views and optimizes the 3D scene parameters to look plausible—such that a pre-trained image prior gives a high likelihood for each view. However, the utilized image priors and the rendering of 3D scenes to multiple views are costly.
To the best of our knowledge, virtual single-view reconstruction has not been attempted. The extent to which stateof-the-art generative models understand monocular shape cues and how these can be leveraged remains unexplored. The key benefits of a monocular solution would be alleviating the costly volumetric rendering with NeRFs [39] or the memory-intensive Gaussian splitting (GS) [21] and providing additional cues beyond multi-view constraints.
Our new analysis-by-augmentation (AbA) principle reconstructs from a single view by superimposing a virtual object on the real image. Likewise, virtual 3D objects must be perfectly registered in the real world for giving humans a realistic augmented reality experience, we leverage a pretrained image prior to quantify the alignment of our virtual augmentation on the input image. Our focus is on using texture cues, for which Figure 2 shows the alignment process.
Our shape-from-virtual-texture reconstruction (SVT) inverts the notion of classical shape-from-texture (SfT). Traditionally, SfT requires an image of a regularly textured object as input, which is rare in practice [59]. By contrast, we
1
arXiv:2503.16412v1 [cs.CV] 20 Mar 2025

Input Unaligned Partially Aligned Image Aligned
Figure 2. Analysis by Augmentation. The virtual texture is augmented and incrementally aligned with the perspective cues in the image (left to right: initialization, 1k iterations, 11k iterations).
generate a virtual object that, when textured with a regular pattern, aligns with the superimposed monocular depth cues in the input image. It exploits that the image prior has learned how multiple monocular depth cues appear and align on a particular object.1 An image prior assigns a lower likelihood to misaligned textures, which we utilize as a loss for 3D reconstruction. Notably, this also applies to 3D from text by dreaming up the input image with a text-conditioned generative model. A key dif-
ficulty in realizing the proposed SVT is generating texture cues that allow gradients to flow from the image prior via the virtual texture to the 3D object shape. To this end, we rely on conformal maps, which have been extensively studied in the computer graphics literature for texturing a curved object with a regular pattern while minimizing distortion. We re-deploy these principles to find the object shape that best reverts the texture distortion recovered by the image prior. More precisely, Dre-
amTexture leverages a depth map as a 3D representation and textures it with an associated mesh and hierarchical texture coordinate field. This form has a small memory footprint, and rendering is trivial compared to NeRF or Gaussian Splatting. In Stage I, texture coordinates are aligned in 2D using the SDS loss [44]. Stage II optimizes depth to minimize 2D-to-3D deformation using an angle-preserving loss from conformal maps [26, 51]. Closely related but different in nature is the explicit decomposi-
tion of the image into 3D shape, albedo without lighting effects, and a simple shading model with randomized light, as done by DreamFusion [44] and RealFusion [37]. The analysis-by-synthesis approach by RealFusion uses a reconstruction objective to minimize the difference between input image and rendering and relies on virtual multi-view constraints because shading cues are insufficient on their own. In contrast, our method superimposes multiple cues on a single view without requiring a perfect de-
composition of all factors. We replace decomposition with augmentation and the difference loss with a
1One could say that the prior has learned the 3D object shape from 2D, but this is rather a philosophical discourse. We only require that the prior recognizes cues that are consistent and rejects inconsistent ones.
measure for alignment through the image likelihood. This enables us to utilize texture cues even if the object to be reconstructed is not regularly textured or provides complex, irreproducible shading cues. Our analysis-by-augmentation approach differs in both construction and effect, enabling generative reconstruction from a single virtual view. To summarize, our main contributions are: • Establishing the principle of analysis-by-augmentation through the augmentation of monocular texture cues. • -
Developing a two-stage SVT method by i) tailoring texture coordinate parameterizations to align virtual texture cues using diffusion priors, and ii) reframing least squares conformal mapping (LSCM) for depth optimization.
Our qualitative and quantitative evaluation show that our monocular shape-from-virtual-texture approach excels in cases where existing virtual multi-view approaches [37, 44] struggle due to a lack of image features. The AbA principle is scalable without 3D supervision, and we foresee new applications, such as augmenting logos on real images and temporal reconstruction using video diffusion models.
2. Related Work
Generative models have introduced new ways to reconstruct 3D objects from virtual views. In the following, we review the different approaches, examine how they resemble multiview methods in classical computer vision, and outline how monocular shape cues remain underutilized.
Multi-View Image Reconstruction. Neural Radiance Fields (NeRFs) [3, 22, 36, 39] have brought dense multiview reconstruction into the era of neural networks, while Gaussian splatting [19, 21, 34, 65] has reinforced the value of classical geometric scene representations. In either case, a differentiable renderer implementing ray tracing or rasterization is used to render each view and backpropagate image reconstruction errors to the scene representation. While these methods offer high-fidelity recon-
struction, they require images taken from dozens of views, and optimizing the high-dimensional scene parameters is a costly, offline process, making them impractical. Learning-based approaches shift this cost to the training stage [13, 53], optimizing the network to predict a 3D scene representation that explains all the training views, with also some learning the rendering step [14, 48, 49]. However, much like approaches that utilize ground truth 3D annotation for supervised learning [4, 16, 20, -
47, 66, 67], including those using GANs [5, 7, 15, 60] and diffusion models [8, 25, 28, 33, 42, 61, 69], they struggle to generalize due to the limited availability of multi-view recordings. Even stereo footage is rare, and exploiting symmetry for this purpose in single images is effective only for quasi-symmetric objects such as faces [62].
2

Virtual Multi-view Reconstruction. Generative image models learn what constitutes a realistic image. When evaluated on a synthetic rendering, this provides a loss for reconstruction quality that can replace the real image reconstruction loss in classical multi-view methods. In the extreme case, reconstruction is achieved solely by rendering randomly generated views, as established by DreamFusion [44] and later followed by [12, 29, 30, 32, 38, 57], using SDS on image diffusion models. This enables-
 monocular reconstruction by pairing one [9, 37] or multiple real input images [46, 68] with multiple virtual views. The earliest models using virtual views were GAN-based [6, 10, 17, 41, 43], where the discriminator takes the role of the image prior and the generator includes an explicit or learned rendering step. Irrespective of the backbone used, whether the parameters of a single scene or a generative model, they all share a common underlying 3D representation and volumetric novel-view rendere-
r, similar to the classical multiview approaches discussed in the previous paragraph. Our work alleviates the novel-view rendering by relying solely on single-view monocular cues.
Some recent methods include pre-trained depth estimators [54, 63] and 3D priors [11, 27, 45, 64], which counter ambiguities such as the Janus problem but requires massive labeled 3D datasets. By contrast, our method utilizes monocular cues in an unsupervised setting—without leveraging 3D data.
Towards Virtual Single-View Reconstruction. To the best of our knowledge, all attempts at 3D reconstruction with an image prior rely on novel view synthesis. DreamFusion [44] and RealFusion [37] synthesize shading, which provides a virtual monocular cue, but only as auxiliary information within virtual multi-view analysis by synthesis. In contrast, our virtual SfT method extracts the 3D understanding that the model derives from other monocular cues, such as silhouette and shading, through the new -
concept of analysis-by-augmentation. We therefore utilize monocular cues as in classical shape-from-X methods, where X includes shading [18, 70], texture [59], and silhouette [24].
The closest existing SfT method [56] leverages generative models to infer 3D shape from texture cues in real images by learning a texture generator and discriminator for each input image. Thus, like classical shape-fromtexture [31, 35], it applies only to input images that are regularly textured. In contrast, our texture cues are virtual and can reconstruct untextured or irregularly textured objects.
3. Preliminaries and Notation
This section introduces the core methods we build upon.
Score Distillation Sampling. Given a 2D image X, rendered from a differentiable representation with parameters θ, score distillation sampling (SDS) [44] utilizes a pretrained diffusion model φ to optimize θ via gradient descent. Specifically, a gradient towards a more likely image is found from the noise εφ predicted by φ given a noisy image Xt, text embedding c, and the noise level t,
∇θLSDS(X, c) = εE,t
w(t) (εφ(Xt; c, t) − ε) ∂X
∂θ , (1)
where w(t) is a weighting function and ε ∼ N (0, I). In DreamFusion [44], the SDS loss matches the 2D renderings from random angles with the text prompt. In our work, we optimize texture coordinates using SDS to align an augmented virtual texture with shape cues in the input image.
Least Squares Conformal Mapping. Given a 3D mesh T with each triangle T ∈ T having vertex locations ((x1, y1, z1), (x2, y2, z2), (x3, y3, z3)) and associated 2D texture coordinates ((u1, v1), (u2, v2), (u3, v3)), Least Squares Conformal Mapping (LSCM) [26] minimizes the angle distortion between corresponding triangle edges in 3D and 2D. It is implemented as a loss by measuring gradients of the texture mapping that maps points (x, y) on the triangle T to points (u, v) on the texture through interpo-
lation,
LLSCM(T ) =
X
T ∈T
∂u
∂x + ∂v
∂y
2
+ ∂u
∂y − ∂v
∂x
2
!
A,
(2) where 3D points (x, y, z) are expressed in local triangle coordinates such that z is aligned with the normal and is zero for points on T . The gradients are integrated over the triangle area A. Following [26], we compute the gradients as
∂u/∂x
∂u/∂y = 0.5
A
y2 − y3 y3 − y1 y1 − y2 x3 − x2 x1 − x3 x2 − x1


u1 u2 u3

.
The expressions for ∂v/∂x and ∂v/∂y are computed similarly by replacing u with v. While the original LSCM optimizes the texture coordinates to ensure minimal distortion in texture mapping, we utilize the same energy to optimize the global z-vertex location, the depth, from the estimated texture coordinates.
4. Method
Given a single input image I ∈ RC×W ×H , DreamTexture reconstructs a depth map D ∈ RW ×H from monocular cues using the proposed analysis-by-augmentation method. The key to our approach is the representation of the depth as a triangle mesh T with associated texture coordinates W ∈ R2×W ×H . Figure 3 (right) shows how
3

🔥 Texture Coordinates
Input Texture
Virtual Texture
Input Image
SDS Loss
Stable Diffusion
Mask
Grid Sample
Backpropagate onto Texture Coordinates
LSCM Energy
🔥 🔥 Depth
Optimize depth
Stage I: Texture Optimization
ablackandwhitesquare checkerboardpattern wrappedintoacube
Stage II: Depth Optimization
Texture Coordinates
🔥 🔥 Depth Map as 3D Mesh
Minimize angular distortion
Segment Anything
Background
Foreground
Mask
Augmented Texture
Superposition Masking Frozen
Optimized (Stage II output)
🔥
🔥
N = 0 N = 20K
Texture Coordinates
Optimized (Stage I output) 🔥🔥
Blended Texture
🔥
Figure 3. DreamTexture overview. In Stage I, we use the SDS loss to faithfully augment the texture on the input image, producing texture coordinates that align the virtual texture with depth cues in the input image. In Stage II, we apply shape from virtual texture by viewing the depth map as the z-coordinates of a 3D mesh and optimize it using the LSCM energy, minimizing angular texture distortion.
neighboring pixels in the depth map form faces with vertices (i, j, D(i, j)) ∈ R3 and associated texture coordinates W(i, j). The mesh is special, with pixel positions (i, j) frozen such that the mesh remains a regular grid. It lets us map one vertex to every pixel by representing depth and texture coordinates as tensors with dimensions equal to the input image. Figure 3 (left) shows how rendering the virtual texture boils down to sampling the flat input texture at the texture coordinates. This me-
sh representation lets us optimize a shared parametrization in two steps: In stage I, mesh vertex positions are frozen and only the texture coordinates are optimized to make the virtual texture look natural using SDS (Section 3). Stage II in turn optimizes the depth that parametrizes vertex coordinates while keeping the texture coordinates fixed. The triangle mesh representation is required such that the LSCM energy is applicable (Section 3) to recover the depth that explains the frozen texture ma-
pping—shape from virtual texture.
Assumptions We exploit that texture and shading have an additive and multiplicative effect, which we model by affine blending. We furthermore use an orthographic projection model, which holds unless the object is close to the camera.
Initialization. We estimate the foreground mask using the Segment Anything Model 2 (SAM 2) [23], use a checkerboard pattern as the regular texture, initialize the texture coordinates to preserve it and start with a spherical depth map unless otherwise stated in specific experiments.
4.1. Augmentation Stage I - Texture Optimization
The goal is to deform a flat, regular texture T ∈ RC×W ×H by optimizing texture coordinates W ∈ R2×W ×H until it aligns with I, yielding a virtually textured image  ̃T.
Texture augmentation. We incorporate monocular depth cues from the input image I by superimposing them with the virtual texture image  ̃T through alpha blending
I ̃ = M ◦ [αI + (1 − α)  ̃T], (3)
where M is a mask distinguishing foreground objects from the background in I, and α is a blend weight.
Stage I Loss. The primary objective is to optimize W with the SDS loss LSDS(I ̃, c) that evaluates the pre-trained image prior to quantify alignment of the augmentation with existing shape cues in the input image. Gradient descent is technically possible since the blending and the preceding texture sampling are differentiable. However, without our subsequent extensions, direct optimization collapses, causing foldover in the texture coordinates. We propose to optimize the texture coordinates hierar-
chically using a combination of SDS, L1, and integrability [56] regularization,
Ltex( ̃I, c, W) = LSDS( ̃I, c)+λ1L1(W)+λ2Lint(W), (4)
where λ1 and λ2 control the strength of regularization.
Relative texture coordinates. To prevent degenerate deformations, we parametrize the texture coordinates W = (Wu, Wv) through its spatial gradients V = ( ∂Wu
∂u , ∂Wv
∂v )
as in [52]. The absolute coordinates are reconstructed from V via a spatial integration layer W(V). Foldovers are prevented by enforcing non-negativity on these gradients with a Rectified Linear Unit (ReLU) [1], smoothness is ensured
4

with L1(W(V)) = ∥V∥1 , and local integrability with
Lint(W(V)) = 1
HW
X
i,j
h
Vi,j+1
u − Vi+1,j+1
u + Vi,j
u
− Vi+1,j
u + Vi,j+1
v + Vi+1,j+1
v
− Vi,j
v − Vi+1,j
v
i2
. (5)
Multiscale Optimization. Rather than optimizing perpixel spatial gradients V directly, we adopt the multiscale approach from [2]. Specifically, we optimize a set of N scales {V(j)}N−1
j=0 , where each V(j) has dimensions W/2j ×H/2j and represents a coarse-to-fine hierarchy. The full-resolution gradients are then reconstructed as
V = GT (V(0) ◦ · · · ◦ V(N−1)). (6)
To construct the Gaussian pyramid G, we apply a 2D kernel kT · k, where k = m · 1
16 [1, 4, 6, 4, 1], and m = 1.4, as in [2]. This hierarchical representation improves texture deformations by progressively refining coarse structures before fine-grained details.
Text Prompt. To encourage the diffusion model to perceive the augmentation as a checkerboard texture, we set the input text prompt to a black and white square checkerboard pattern wrapped into a {object}. The object description could also be determined automatically using large language models (LLMs) such as LaMa [55].
4.2. Analysis Stage II - Depth Optimization
This stage can be seen as performing shape from texture on the virtual texture optimized from Stage I. Opposed to classical SfT, our texture coordinates provide absolute texture position, which eases reconstruction. It lets us apply the LSCM energy to optimize depth such that the texture appears undistorted on the surface of the 3D mesh T . The LSCM energy is typically used to find a conformal, i.e., deformation preserving, texture mapping given a static mesh. Here we keep texture coordinates froz-
en and optimize vertex positions instead. Figure 3 (right) gives an example. When initialized with zero depth, all 3D triangles have the same size and angles but some triangles in texture coordinates are stretched. During the optimization with the LSCM energy, the corresponding depth values are altered to form a correspondingly stretched triangle in 3D. To improve stability we minimize the LSCM energy together with an L1 regularization on depth gradients,
Ldepth(T , D, W) = LLSCM(T , W)+ λ3
hw
X
i,j
∆Di,j (7)
with respect to D(i, j), keeping only triangles formed by foreground pixels in the mask M for LLSCM. The parameter λ3 is the regularization weight.
The outcome is a 3D mesh that has a regular texture in 3D while its projection augments the input image, such that the virtual texture appears like a natural texture that follows the geometry in the image—analysis by augmentation.
5. Experiments
We conduct extensive experiments to evaluate the effectiveness of DreamTexture and the associated analysis-byaugmentation principle for depth reconstruction from a single image and demonstrate its computational efficiency. Figure 4 shows the main results, additional ones are provided in the appendix.
Datasets. For qualitative and quantitative evaluation of our proposed approach, we construct a synthetic dataset, PrimitiveShapesX, consisting of four basic primitives (cube, pyramid, cylinder, and sphere) in Blender. Each primitive is rendered from a single camera view, and we record both the rendered image and the corresponding depth map. The simplicity of these shapes is chosen to evaluate flat, curved, and cornered objects in isolation. To explore the influence of different monocular depth cue-
s, we render each primitive under three conditions: without any texture (shaded only), with a regular (repetitive) texture, and with a natural (wood) texture. We also evaluate qualitatively on dreamed-up images and pictures of real objects without ground truth.
Metrics. We use Mean Squared Error (MSE) to measure the discrepancy between the ground truth and reconstructed depth maps, computing it only within the foreground region. To overcome the scale ambiguity in monocular reconstruction, we normalize predictions to zero mean and unit variance, then rescale it to match the ground truth statistics. For text-to-3D evaluation without a ground truth depth map, we apply min-max normalization within the foreground.
Baselines. We evaluate our approach against DreamFusion (DF) [44] and RealFusion (RF) [37], both of which rely exclusively on multi-view cues without using any pre-trained depth or normal estimators. As the official implementation of DreamFusion is not publicly available, we utilize a widely adopted open-source reimplementation (https://github.com/chinhsuanwu/ dreamfusionacc). To ensure a fair comparison, we employ for all models the same Stable Diffusion model for guidance and render images at a -
resolution of 64 × 64 as in the original DreamFusion. All other hyperparameters for both methods follow the default values specified in their respective example configurations. We focus on the unsupervised reconstruction regime and hence exclude related methods that utilize pre-trained
5

Input Recon. Recon. Render Render Render Depth Normal View 1 View 2 View 3
RF DF
Ours
RF DF
Ours
RF DF
Ours
Input Recon. Recon. Render Render Render Depth Normal View 1 View 2 View 3
RF DF
Ours
RF DF
Ours
RF DF
Ours
Figure 4. Text-to-3D comparison. Compared to RealFusion (RF) and DreamFusion (DF), our method achieves more accurate reconstructions, particularly for objects that lack prominent visual features. We use the same text prompt as DreamFusion to generate input images with Stable Diffusion. To render novel views in our approach, we resample the input image using the inverse texture coordinates and render using PyTorch3D with orthographic projection (elevation = 0◦) and azimuth angles of 0◦ (view 1), −1-
0◦ (view 2), and +10◦ (view 3).
monocular depth estimators [54, 63].
Implementation Details. We conduct our experiments following the original setup of DreamFusion, with a resolution of 64 × 64 for both the depth map and corresponding texture coordinates. For SDS guidance, we utilize Stable Diffusion v1.5 [50]. Since Stable Diffusion operates at a resolution of 512 × 512, we upscale the augmented texture to 512 × 512 before feeding it into the diffusion model. The texture is blended onto the input image using a factor of α = 0.5.
For optimization, we adopt the AdamW optimizer with a learning rate of 5 × 10−5 for the texture coordinates and 10−3 for the depth map. The weighting coefficients are set to λ1 = 10, λ2 = 104, and λ3 = 0.01. Stage I is optimized for 100K iterations, with snapshots taken every 10K
iterations. Stage II is optimized for 20K iterations for each. Among these, we select the smoothest depth map as the final output i.e. the depth map with the lowest ∆D(i, j). All experiments are conducted on a single NVIDIA A40 GPU. To compute surface normals, we take the crossproduct of the numerical horizontal and vertical gradients of the depth map. Further implementation details are provided in Appendix A.
5.1. Qualitative Evaluation
To highlight the effectiveness of our approach, we first evaluate it on the PrimitiveShapesX dataset, as shown in Figure 5. Evaluating on basic primitives allows us to assess whether the method can accurately model curved surfaces, flat planes, and sharp edges. Our results demonstrate that the depth maps are reconstructed with high fidelity, while
6

Stage II Output Stage I Output
Input GT Recon. Recon. Texture Augmented Image Depth Depth Normal Coord. Texture
Figure 5. Qualitative evaluation on PrimitiveShapesX. Our method reconstructs depth maps with high fidelity, producing accurate surface normals for smooth and sharp-edged objects.
Table 1. Quantitative Comparison with RealFusion (RF) on the naturally textured PrimitiveShapesX dataset. We outperform RealFusion by a significant margin due to better robustness.
Object Depth MSE ↓ Normal MSE ↓
RF Ours RF Ours
Cube 0.0706 0.0071 0.5618 0.0673 Sphere 0.0969 0.0062 0.6729 0.0291 Pyramid 0.0302 0.0088 0.4007 0.0675 Cylinder 0.0774 0.0255 0.5544 0.1097
the estimated surface normals are both accurate and smooth. Additionally, the augmented texture image exhibits correct texture mapping onto the object with minimal distortion. This suggests that the SDS loss effectively models the texture coordinates to ensure accurate texture augmentation.
5.2. Quantitative Evaluation
Table 1 presents a quantitative comparison of our approach against RealFusion (RF) on the naturally textured PrimitiveShapesX dataset. We use naturally textured objects as input images, as Stable Diffusion is trained primarily on real-world images. Our results demonstrate a substantial performance improvement over RealFusion. Furthermore, we compare our method against DreamFusion and RealFusion in terms of the number of trainable parameters and training time per iteration, as summarized in Table 2-
. Notably, the implementations of DreamFusion and RealFusion leverage Instant Neural Graphics Primitives [40], a highly efficient implementation of their NeRF model. This differs from the original DreamFusion implementation, which employs a standard NeRF. Nevertheless,
Table 2. Efficiency Comparison in terms of training parameters and training time, measured on a single Nvidia A40 GPU. Our method has a significantly lower parameter count and achieves a shorter training time per iteration. Ours (100K) runs for 100K iterations, and Ours (10K) runs for 10K in Stage I.
Method Trainable Parameters ↓ Training Time (s) ↓
Stage I Stage II Total Stage I Stage II Total
DF 12604016 - 12604016 3126.2 - 3126.2 RF 37946112 1806983 39753095 3384,3 1470.7 4855.0 Ours (100K) 10922 4096 15018 10679.2 1408.7 12087.9 Ours (10K) 10922 4096 15018 1070.0 140.8 1210.9
our method has significantly fewer parameters and requires a shorter training time for the same number of iterations.
5.3. Text-to-3D Evaluation
We compare our text-to-3D generation results against the state-of-the-art approaches, DreamFusion (DF) [44] and RealFusion (RF) [37], in Figure 4. To ensure a fair comparison, we use the same text prompt as DreamFusion to generate the input image for RealFusion and our method. Our results demonstrate that DreamFusion struggles to accurately reconstruct a cube, instead generating a fivesided die. Additionally, it exhibits artifacts around shading highlights, particularly on surfaces such as spheres-
. RealFusion, on the other hand, performs poorly on objects like lamps and mugs. In contrast, our method successfully reconstructs simple objects. However, for more complex objects, such as a hamburger, we observe missing details in the reconstruction. We attribute this limitation to the low resolution of the texture coordinates and the reliance only on virtual texture cues. Their complementary strengths suggest future work combining additional monocular cues or multi-view information. We provide -
further analysis of RealFusion in Appendix E.
5.4. Ablation Study
Our virtual shape-from-texture approach could only be realized through a set of design choices and extensions. The extensive ablation study in Appendix C isolates and quantifies the effect of each. In Figure 6 and Table 3, we analyze the impact of different shape cues in the input image. We evaluate four different input complexities, with an increasing number of depth cues: (0) silhouette, (1) shading only, (2) shading with regular texture (circular patterns), and (3) shading with natural texture -
(wood texture). Our results indicate that while a silhouette is sufficient to capture the rough geometry, the resulting surface lacks details. Although adding texture helps to smooth the geometry, it introduces some artifacts around the edges. In this setting, a textureless scene (shading only) provides the strongest cues for recovering accurate geometry.
7

Table 3. Quantitative ablation study on the effect of input image cues. We study the effect of four different cues in the input image: silhouette, shading, regular texture, and natural texture. The input with shading and silhouette cues achieves the lowest errors.
Cue Depth MSE ↓ Normal MSE ↓
Cube Sphere Pyramid Cylinder Avg. Cube Sphere Pyramid Cylinder Avg.
Silhouette 0.0080 0.0067 0.0240 0.0175 0.0140 0.0996 0.0334 0.2122 0.1230 0.1170 Silhouette + Shading 0.0070 0.0046 0.0079 0.0162 0.0089 0.0629 0.0177 0.0858 0.0905 0.0642 Silhouette + Shading + Regular Tex 0.0092 0.0053 0.0107 0.0136 0.0358 0.1545 0.0195 0.1074 0.0655 0.0867 Silhouette + Shading + Natural Tex 0.0071 0.0062 0.0088 0.0255 0.0119 0.0673 0.0291 0.0675 0.1097 0.0684
Input GT Recon. Recon. Image Depth Depth Normal
S + SH S + SH S
+ RT
S + SH
+ NT
Figure 6. Qualitative ablation study on the effect of combining four different input image cues: silhouette (S), shading (SH), regular texture (RT), and natural texture (NT). The input with silhouette and shading (S + SH) cues yields the most accurate and smooth geometry, confirming the quantitative results.
Input Recon. Recon. Render Render Render Depth Normal View 1 View 2 View 3
Figure 7. In-the-wild reconstruction. DreamTexture reconstructs 3D objects from single-view in-the-wild images with high fidelity.
5.5. Reconstruction in the Wild
We demonstrate the application of our method for reconstructing in-the-wild images from a single view. In Figure 7, we present images taken from the internet, along with the depth and normal maps reconstructed by our pipeline.
Input Recon. Recon. Image Depth Normal
Figure 8. Limitations. Our method struggles with complex objects such as cars and fails to resolve concave and convex ambiguities, treating objects like cups as convex instead of concave.
These results show that our approach is capable of estimating depth from single-view in-the-wild images.
5.6. Limitations and Future Work
As our method introduces a new paradigm for object reconstruction, this first realization has several limitations and areas for improvement. Our depth map reconstructs only the visible part of the object but it could be combined with virtual multi-view reconstruction. In Figure 8, we present representative failure cases. Our approach struggles with complex objects, such as the car. Future work could improve by partitioning the image into parts and by augmenting additional monocular cues, such as s-
hading and contours. These could also overcome the concave and convex ambiguities visible in the cup example, demonstrated for classical SfT in combination with shape from shading [58].
6. Conclusion
Making machines learn by themselves remains a key challenge in AI. Towards this goal, our shape-from-virtualtexture implementation DreamTexture provides an efficient unsupervised 3D reconstruction method. The underlying analysis-by-augmentation principle applies more broadly, to shape cues beyond texture, and offers new ways for leveraging pre-trained generative models for reconstruction, paving the way for unsupervised learning at scale.
8

Acknowledgments
We thank all the members of Visual AI for Extended Reality lab at Bielefeld University including Bianca Schröder, Jerin Philip and Sebastian Dawid for providing crucial feedback and participating in helpful discussions.
References
[1] Abien Fred Agarap. Deep learning using rectified linear units (relu). ArXiv, abs/1803.08375, 2018. 4 [2] Jonathan T Barron and Jitendra Malik. Shape, illumination, and reflectance from shading. IEEE transactions on pattern analysis and machine intelligence, 37(8):1670–1687, 2014. 5
[3] Jonathan T. Barron, Ben Mildenhall, Matthew Tancik, Peter Hedman, Ricardo Martin-Brualla, and Pratul P. Srinivasan. Mip-NeRF: A multiscale representation for anti-aliasing neural radiance fields. In Proceedings of the IEEE/CVF International Conference on Computer Vision (ICCV), pages 5855–5864, 2021. 2 [4] Shariq Farooq Bhat, Ibraheem Alhashim, and Peter Wonka. Adabins: Depth estimation using adaptive bins. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (C-
VPR), 2021. 2
[5] Eric R. Chan, Marco Monteiro, Petr Kellnhofer, Jiajun Wu, and Gordon Wetzstein. pi-GAN: Periodic implicit generative adversarial networks for 3d-aware image synthesis. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pages 5799–5809, 2021. 2
[6] Eric R. Chan, Connor Z. Lin, Matthew A. Chan, Koki Nagano, Boxiao Pan, Shalini De Mello, Orazio Gallo, Leonidas Guibas, Jonathan Tremblay, Sameh Khamis, Tero Karras, and Gordon Wetzstein. Efficient Geometry-aware 3D Generative Adversarial Networks. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), pages 16122–16133, 2022. 3 [7] Zhiqin Chen and Hao Zhang. Learning implicit fields for generative shape modeling. In Proceedings of the IEEE/CVF Conference -
on Computer Vision and Pattern Recognition, pages 5939–5948, 2019. 2 [8] Yen-Chi Cheng, Hsin-Ying Lee, Sergey Tulyakov, Alexander Schwing, and Liangyan Gui. SDFusion: Multimodal 3d shape completion, reconstruction, and generation. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pages 4456–4465, 2023. 2
[9] Congyue Deng, Zexiang Xu, Kalyan Sunkavalli, and Ulrich Neumann. NeRDi: Single-view NeRF synthesis with language-guided diffusion as general image priors. arXiv preprint arXiv:2303.07308, 2023. 3
[10] Yu Deng, Jiaolong Yang, Jianfeng Xiang, and Xin Tong. GRAM: Generative radiance manifolds for 3d-aware image generation. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), pages 10673–10682, 2022. 3 [11] Lihe Ding, Shaocong Dong, Zhanpeng Huang, Zibin Wang, Yiyuan Zhang, Kaixiong Gong, Dan Xu, and Tianfan Xue.
Text-to-3d generation with bidirectional diffusion using both 2d and 3d priors. arXiv preprint arXiv:2312.04963, 2023. 3 [12] Yilun Du, Shuang Li, Joshua B Tenenbaum, Igor Mordatch, and Antonio Torralba. Score jacobian chaining: Lifting pretrained 2d diffusion models for 3d generation. arXiv preprint arXiv:2304.03442, 2023. 3
[13] Ziya Erkoç, Fangchang Ma, Qi Shan, Matthias Nießner, and Angela Dai. Hyperdiffusion: Generating implicit neural fields with weight-space diffusion. In Proceedings of the IEEE/CVF international conference on computer vision, pages 14300–14310, 2023. 2 [14] SM Ali Eslami, Danilo Jimenez Rezende, Frederic Besse, Fabio Viola, Ari S Morcos, Marta Garnelo, Avraham Ruderman, Andrei A Rusu, Ivo Danihelka, Karol Gregor, et al. Neural scene representation and rendering. Science, 360 (6394):1204–1210, 2-
018. 2 [15] Matthias Fey, Jan Eric Lenssen, Frank Weichert, and Heinrich Müller. Adversarial generation of continuous implicit shape representations. arXiv preprint arXiv:2002.00349, 2020. 2 [16] Huan Fu, Mingming Gong, Chaohui Wang, Kayhan Batmanghelich, and Dacheng Tao. Deep ordinal regression network for monocular depth estimation. In Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2018. 2
[17] Jiatao Gu, Lingjie Liu, Peng Wang, and Christian Theobalt. StyleNeRF: A style-based 3d-aware generator for high-resolution image synthesis. arXiv preprint arXiv:2110.08985, 2022. 3
[18] Berthold K. P. Horn and Michael J. Brooks. Shape from Shading. MIT Press, Cambridge, Massachusetts, 1989. 3 [19] Binbin Huang, Zehao Yu, Anpei Chen, Andreas Geiger, and Shenghua Gao. 2d gaussian splatting for geometrically accurate radiance fields. In SIGGRAPH 2024 Conference Papers, 2024. 2 [20] Po-Han Huang, Kevin Matzen, Johannes Kopf, Narendra Ahuja, and Jia-Bin Huang. Deepmvs: Learning multi-view stereopsis. In Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition-
 (CVPR), 2018. 2
[21] Bernhard Kerbl, Georgios Kopanas, Thomas Leimkühler, and George Drettakis. 3d gaussian splatting for real-time radiance field rendering. ACM Transactions on Graphics (TOG), 42(4), 2023. 1, 2 [22] Justin Kerr, Chung Min Kim, Ken Goldberg, Angjoo Kanazawa, and Matthew Tancik. LERF: Language embedded radiance fields. In Proceedings of the International Conference on Computer Vision (ICCV), 2023. 2
[23] Alexander Kirillov, Eric Mintun, Nikhila Ravi, Hanzi Mao, Chloe Rolland, Laura Gustafson, Tete Xiao, Spencer Whitehead, Alexander C. Berg, Wan-Yen Lo, Piotr Dollár, and Ross Girshick. Segment anything. arXiv:2304.02643, 2023. 4
[24] Jan J. Koenderink. What does the occluding contour tell us about solid shape? Perception, 13(3):321–330, 1984. 3 [25] Jumin Lee, Woobin Im, Sebin Lee, and Sung-Eui Yoon. Diffusion probabilistic models for scene-scale 3d categorical data. arXiv preprint arXiv:2301.00527, 2023. 2
9

[26] Bruno Lévy, Sylvain Petitjean, Nicolas Ray, and Jérome Maillot. Least squares conformal maps for automatic texture atlas generation. 21(3), 2002. 2, 3 [27] Weiyu Li, Rui Chen, Xuelin Chen, and Ping Tan. Sweetdreamer: Aligning geometric priors in 2d diffusion for consistent text-to-3d. arXiv preprint arXiv:2310.02596, 2023. 3
[28] Yuhan Li, Yishun Dou, Xuanhong Chen, Bingbing Ni, Yilin Sun, Yutian Liu, and Fuzhen Wang. Generalized deep 3d shape prior via part-discretized diffusion process. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, 2023. 2
[29] Chen-Hsuan Lin, Jun Gao, Luming Tang, Towaki Takikawa, Xiaohui Zeng, Xun Huang, Karsten Kreis, Sanja Fidler, Ming-Yu Liu, and Tsung-Yi Lin. Magic3D: Highresolution text-to-3d content creation. arXiv preprint arXiv:2211.10440, 2022. 3
[30] Yuan Liu, Zhen Zhu, and Xiang Bai. HiFA: High-fidelity text-to-3d with advanced diffusion guidance. arXiv preprint arXiv:2305.16213, 2023. 3
[31] Anthony Lobay and David A Forsyth. Shape from texture without boundaries. International Journal of Computer Vision, 67(1):71–91, 2006. 3 [32] Jonathan Lorraine, Yiyi Liao, David Levin, Alec Jacobson, Ben Mildenhall, and Andrea Tagliasacchi. ATT3D: Amortized text-to-3d object synthesis. In Proceedings of the IEEE/CVF International Conference on Computer Vision (ICCV), 2023. 3
[33] Shitong Luo and Wei Hu. Diffusion probabilistic models for 3d point cloud generation. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pages 2837–2845, 2021. 2 [34] Xiaoyang Lyu, Yang-Tian Sun, Yi-Hua Huang, Xiuzhe Wu, Ziyi Yang, Yilun Chen, Jiangmiao Pang, and Xiaojuan Qi. 3DGSR: Implicit surface reconstruction with 3d gaussian splatting. arXiv preprint arXiv:2404.00409, 2024. 2
[35] Jitendra Malik and Ruth Rosenholtz. Computing local surface orientation and shape from texture for curved surfaces. International Journal of Computer Vision, 23(2):149–168, 1997. 3 [36] Ricardo Martin-Brualla, Noha Radwan, Mehdi S. M. Sajjadi, Jonathan T. Barron, Alexey Dosovitskiy, and Daniel Duckworth. NeRF in the Wild: Neural Radiance Fields for Unconstrained Photo Collections. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pages 7210–7219, 2021. 2 [3-
7] Luke Melas-Kyriazi, Iro Laina, C. Rupprecht, and Andrea Vedaldi. Realfusion 360° reconstruction of any object from a single image. 2023 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), pages 8446–8455, 2023. 2, 3, 5, 7 [38] Gal Metzer, Elad Richardson, Or Patashnik, Raja Giryes, and Daniel Cohen-Or. Latent-nerf for shape-guided generation of 3d shapes and textures. arXiv preprint arXiv:2211.07600, 2022. 3 [39] Ben Mildenhall, Pratul P. Srinivasan, Matthew Tancik, Jonathan -
T. Barron, Ravi Ramamoorthi, and Ren Ng. NeRF:
Representing scenes as neural radiance fields for view synthesis. In Proceedings of the European Conference on Computer Vision (ECCV), pages 405–421, 2020. 1, 2 [40] Thomas Müller, Alex Evans, Christoph Schied, and Alexander Keller. Instant neural graphics primitives with a multiresolution hash encoding. ACM Transactions on Graphics (TOG), 41:1 – 15, 2022. 7 [41] Thu Nguyen-Phuoc, Chuan Li, Lucas Theis, Christian Richardt, and Yong-Liang Yang. HoloGAN: Unsupervised learning of 3d representations f-
rom natural images. In Proceedings of the IEEE/CVF International Conference on Computer Vision (ICCV), pages 7588–7597, 2019. 3 [42] Alex Nichol, Heewoo Jun, Prafulla Dhariwal, Pamela Mishkin, and Mark Chen. Point-e: A system for generating 3d point clouds from complex prompts. arXiv preprint arXiv:2212.08751, 2022. 2
[43] Michael Niemeyer and Andreas Geiger. GIRAFFE: Representing scenes as compositional generative neural feature fields. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), pages 1145311464, 2021. 3 [44] Ben Poole, Ajay Jain, Jonathan T. Barron, and Ben Mildenhall. Dreamfusion: Text-to-3d using 2d diffusion. arXiv preprint arXiv:2209.14988, 2022. 1, 2, 3, 5, 7
[45] Guocheng Qian, Jinjie Mai, Abdullah Hamdi, Jian Ren, Aliaksandr Siarohin, Bing Li, Hsin-Ying Lee, Ivan Skorokhodov, Peter Wonka, Sergey Tulyakov, and Bernard Ghanem. Magic123: One image to high-quality 3d object generation using both 2d and 3d diffusion priors. In International Conference on Learning Representations, 2024. 3
[46] Animesh Raj, Jason Y. Zhang, Zekun Huang, Richard Zhang, Zoya Bylinskii, Irfan Essa, Radhakrishna Achanta, Jianming Zhang, Jun Ma, Jun-Yan Zhu, Orazio Gallo, Sylvain Paris, Ravi Ramamoorthi, Miika Aittala, Alexei A. Efros, Eli Shechtman, and Taesung Wang. DreamBooth3D: Subject-driven text-to-3d generation. arXiv preprint arXiv:2303.13508, 2023. 3
[47] René Ranftl, Katrin Lasinger, David Hafner, Konrad Schindler, and Vladlen Koltun. Midas: Robust monocular depth estimation in the wild. arXiv preprint arXiv:1907.01341, 2020. 2
[48] Helge Rhodin, Mathieu Salzmann, and Pascal Fua. Unsupervised geometry-aware representation for 3d human pose estimation. In Proceedings of the European conference on computer vision (ECCV), pages 750–767, 2018. 2
[49] Helge Rhodin, Victor Constantin, Isinsu Katircioglu, Mathieu Salzmann, and Pascal Fua. Neural scene decomposition for multi-person motion capture. In Proceedings of the IEEE/CVF conference on computer vision and pattern recognition, pages 7703–7713, 2019. 2 [50] Robin Rombach, A. Blattmann, Dominik Lorenz, Patrick Esser, and Björn Ommer. High-resolution image synthesis with latent diffusion models. 2022 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), pages 10674–10685, -
2021. 6 [51] Alla Sheffer, Emil Praun, Kenneth Rose, et al. Mesh parameterization methods and their applications. Foundations and
10

Trends® in Computer Graphics and Vision, 2(2):105–171, 2007. 2 [52] Zhixin Shu, Mihir Sahasrabudhe, Riza Alp Guler, Dimitris Samaras, Nikos Paragios, and Iasonas Kokkinos. Deforming autoencoders: Unsupervised disentangling of shape and appearance. In Proceedings of the European Conference on Computer Vision (ECCV), 2018. 4
[53] Jessica Shue, Eric Chan, Ryan Po, Zachary Ankner, Jiajun Wu, and Gordon Wetzstein. 3d neural field generation using triplane diffusion. 2023 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), pages 2087520886, 2022. 2 [54] Junshu Tang, Xiaoyu Li, Yingqing He, Peng Wang, Lingxi Xie, and Qi Tian. Make-It-3D: High-fidelity 3d creation from a single image with diffusion prior. arXiv preprint arXiv:2305.16214, 2023. 3, 6
[55] Hugo Touvron, Thibaut Lavril, Gautier Izacard, Xavier Martinet, Marie-Anne Lachaux, Timothée Lacroix, Baptiste Rozière, Naman Goyal, Eric Hambro, Faisal Azhar, Aurélien Rodriguez, Armand Joulin, Edouard Grave, and Guillaume Lample. Llama: Open and efficient foundation language models. ArXiv, abs/2302.13971, 2023. 5 [56] Dor Verbin and Todd Zickler. Toward a universal model for shape from texture. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), page-
s 419–428, 2020. 3, 4 [57] Zhengyi Wang, Zexiang Xu, Kalyan Sunkavalli, and Ulrich Neumann. ProlificDreamer: High-fidelity and diverse textto-3d generation with variational score distillation. arXiv preprint arXiv:2304.14473, 2023. 3
[58] Ryan White and David A Forsyth. Combining cues: Shape from shading and texture. In 2006 IEEE Computer Society Conference on Computer Vision and Pattern Recognition (CVPR’06), pages 1809–1816. IEEE, 2006. 8 [59] Andrew P. Witkin. Recovering surface shape and orientation from texture. Artificial Intelligence, 17(1-3):17–45, 1981. 1, 3
[60] Jiajun Wu, Chengkai Zhang, Tianfan Xue, William T. Freeman, and Joshua B. Tenenbaum. Learning a probabilistic latent space of object shapes via 3d generative-adversarial modeling. In Advances in Neural Information Processing Systems, pages 82–90, 2016. 2 [61] Rundi Wu, Ruoshi Liu, Carl Vondrick, and Changxi Zheng. Sin3DM: Learning a diffusion model from a single 3d textured shape. In International Conference on Learning Representations, 2024. 2
[62] Shangzhe Wu, Christian Rupprecht, and Andrea Vedaldi. Unsupervised learning of probably symmetric deformable 3d objects from images in the wild. In Proceedings of the IEEE/CVF conference on computer vision and pattern recognition, pages 1–10, 2020. 2 [63] Dejia Xu, Yifan Jiang, Zhen Shen, Lincheng Li, Zhangyang Wang, and Xiaoqian Shen. NeuralLift-360: Lifting an in-thewild 2d photo to a 3d object with 360° views. arXiv preprint arXiv:2303.13716, 2023. 3, 6
[64] Jiale Xu, Xintao Wang, Weihao Cheng, Yan-Pei Cao, Ying Shan, Xiaohu Qie, and Shenghua Gao. Dream3D: Zero-shot
text-to-3d synthesis using 3d shape prior and text-to-image diffusion models. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pages 20908–20918, 2023. 3 [65] Chen Yang, Sikuang Li, Jiemin Fang, Ruofan Liang, Lingxi Xie, Xiaopeng Zhang, Wei Shen, and Qi Tian. Gaussianobject: High-quality 3d object reconstruction from four views with gaussian splatting. ACM Transactions on Graphics, 43 (6), 2024. 2 [66] Yao Yao, Zixin Luo, Shiwei Li, Tian Fang, and Long Quan. Mv-
snet: Depth inference for multi-view stereo with learned regularization. In Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2018. 2 [67] Yao Yao, Zixin Luo, Shiwei Li, Tianwei Shen, Tian Fang, and Long Quan. Rmvsnet: Recurrent multi-view stereo network. In Proceedings of the IEEE/CVF International Conference on Computer Vision (ICCV), 2019. 2
[68] Paul Yoo, Jiaxian Guo, Yutaka Matsuo, and Shixiang Shane Gu. DreamSparse: Escaping from plato’s cave with 2d frozen diffusion model given sparse views. In Advances in Neural Information Processing Systems, 2023. 3
[69] Xiaohui Zeng, Arash Vahdat, Francis Williams, Zan Gojcic, Or Litany, Sanja Fidler, and Karsten Kreis. LION: Latent point diffusion models for 3d shape generation. In Advances in Neural Information Processing Systems, 2022. 2
[70] Ruo Zhang, Ping-Sing Tsai, James Edwin Cryer, and Mubarak Shah. Shape-from-shading: a survey. IEEE Transactions on Pattern Analysis and Machine Intelligence, 21(8): 690–706, 1999. 3
11

DreamTexture: Shape from Virtual Texture with Analysis by Augmentation
Supplementary Material
This document provides additional details and results that complement the main document.
A. Implementation Details
We realize the Score Distillation Sampling (SDS) that is defined in Equation 4 through its gradient ∇θLSDS(X, c) as an MSE loss,
LSDS(X, c) = εE,t
1
2 w(t) (X − Z)2 , (8)
where Z = (X − (εφ(Xt; c, t) − ε)) is taken as a constant, ε ∼ N (0, I), and X represents the rendering from a differentiable representation with parameters θ, and εφ(Xt; c, t) is the predicted noise from the diffusion prior, parameterized by φ, given the noisy image Xt, text embedding c, and noise level t. We implement the discrete Laplacian operator ∆D(i, j) at pixel location (i, j) in Equation 7 as:
∆Di,j = Di+1,j + Di−1,j + Di,j+1 + Di,j−1 − 4Di,j .
(9)
B. Motivation for the LSCM Energy
To align the virtual textured image with monocular cues from the input image, the SDS loss induces distortions in the texture coordinates field. This effect is illustrated in Figure 9. Specifically, to match the sphere in the input image, the field exhibits highly stretched triangles near the boundaries, while those near the center appear more compressed or less stretched. This suggests that large stretches in the texture coordinates field correspond to curved or deeper regions in 3D space, wherea-
s smaller stretches indicate flatter areas. A similar effect is observed when generating the texture coordinates field using the Least Squares Conformal Map (LSCM). In this case, triangles near the boundaries in the texture space appear stretched, whereas those closer to the center remain compressed. Therefore, we use the same LSCM energy to infer the 3D shape treating the depth map as a 3D mesh from the optimized texture coordinates.
C. Additional Ablation Study
To evaluate depth reconstruction from the texture coordinates using LSCM, we begin with a cube’s ground-truth depth map and initialize its texture coordinates as an identity grid. We then optimize these coordinates following Equation 2. Next, we use a spherical depth initialization
Input Image Texture Coordinates
GT Depth LSCM Texture Coordinates
Figure 9. Effect of SDS on texture coordinates for a sphere. SDS deforms the texture coordinate field by stretching triangles near the poles and equator to better align the texture with the input image. A similar effect is observed when applying LSCM to the corresponding ground-truth depth of the sphere, treating the depth map as a 3D mesh. This demonstrates that LSCM energy can be utilized to optimize a depth map to capture the distortions introduced by SDS in the 2D texture coordinates. Electron-
ic zoom-in recommended.
GT Depth Recovered Depth (MSE: 2.152 × 10−5)
Figure 10. Experiment validating bidirectional optimization in LSCM via gradient descent. We first optimize the texture coordinates coordinates using the ground-truth (GT) depth map. Then, starting from an initial spherical depth, we optimize the depth map using the previously optimized texture coordinates. The low MSE of the reconstructed depth verifies the feasibility of both forward and backward optimization in LSCM.
and attempt to recover the original depth map using the optimized texture coordinates. As illustrated in Figure 10, this approach successfully reconstructs the depth, confirming that depth can be reliably inferred from texture coordi
1

Table 4. Quantitative ablation study for the changes in loss function weights, blend weight, and texture coordinates parametrization.
Cue Depth MSE ↓ Normal MSE ↓
Cube Sphere Pyramid Cylinder Avg. Cube Sphere Pyramid Cylinder Avg.
Ours 0.0070 0.0046 0.0079 0.0162 0.0089 0.0629 0.0177 0.0858 0.0905 0.0642 . . . λ1 = 0 0.0137 0.0144 0.0074 0.0110 0.0116 0.0786 0.0938 0.0771 0.1049 0.0886 . . . λ2 = 0 0.0128 0.0083 0.0107 0.0131 0.0112 0.0765 0.0497 0.1139 0.1015 0.0854 . . . λ3 = 0 0.0087 0.0169 0.0315 0.0263 0.0208 0.0954 0.1741 0.2878 0.1506 0.1770 . . . α = 0.3 0.0048 0.0108 0.0158 0.0166 0.0120 0.0613 0.0639 0.1129 0.1102 0.0871 . . . α = 0.7 0.0057 0.0081 0.0205 0.0176 0.0130 0.0646 0.0367 0.1503 0.0798 0.0829 . . . w/o -
multi-scale texture coordinates 0.0088 0.0055 0.0120 0.0178 0.0110 0.0567 0.0256 0.1051 0.0806 0.0670
Input GT Recon. Recon. Texture Image Depth Depth Normal Coord.
Ours
λ3 = 0 λ2 = 0 λ1 = 0
α = 0.7 α = 0.3
w/o MS
tex. coord.
Figure 11. Qualitative ablation study for the changes in loss function weights, blend weight, and texture coordinates parametrization.
nates within the LSCM energy framework.
In Figure 11 and Table 4, we present the ablation study on the possible variations in our model design, such as loss function weights, blend weight, and the effect of removing the multi-scale optimization of the texture coordinates.
Furthermore, we show a qualitative ablation study on the impact of input image cues on additional objects not shown in the main paper in Figures 12, 13, and 14.
D. Uncurated Samples Reconstruction
To ensure a fair evaluation and rule out cherry-picking, we assess our approach on uncurated samples. For each object shown in Figure 4 in the main paper, we generate 10 images using Stable Diffusion with the same text prompt. We then apply our method to these images and present the results in Figures 15 and 16. Our evaluations show that our method is stable, without requiring any hyperparameter tuning, and performs best when the object is centered in the image.
E. RealFusion Analysis
Since RealFusion (RF) [37] performs poorly on some of our input images, we analyzed the cause and verified that we were correctly running the code (https://github. com/lukemelas/realfusion). To this end, we ran the official implementation on the example input images reported on their paper and webpage using the default configuration, except operating at a 64 × 64 resolution to do a fair comparison with DreamFusion. While we were unable to replicate their results exactly, the method generally succe-
eds (see Figure 17). Since our test cases were simpler in shape and texture, it suggests that RealFusion requires dense visual features from either texture or small-scale geometric details to succeed. This is logical as multi-view constraints require distinct features that can be matched across views. By contrast, our virtual textures work well on untextured objects yet struggle to reconstruct geometric details as the projected texture is relatively coarse—the two approaches are complementary.
2

Input GT Recon. Recon. Image Depth Depth Normal
S + SH S + SH S
+ RT
S + SH
+ NT
Figure 12. Qualitative ablation study on the effect of input image cues for cylinder reconstruction. We analyze the impact of four different cues in the input image: (S) silhouette, (S + SH) silhouette + shading, (S + SH + RT) silhouette + shading + regular texture, and (S + SH + NT) silhouette + shading + natural texture.
Input GT Recon. Recon. Image Depth Depth Normal
S + SH S + SH S
+ RT
S + SH
+ NT
Figure 13. Qualitative ablation study on the effect of input image cues for pyramid reconstruction. We analyze the impact of four different cues in the input image: (S) silhouette, (S + SH) silhouette + shading, (S + SH + RT) silhouette + shading + regular texture, and (S + SH + NT) silhouette + shading + natural texture.
Input GT Recon. Recon. Image Depth Depth Normal
S + SH S + SH S
+ RT
S + SH
+ NT
Figure 14. Qualitative ablation study on the effect of input image cues for sphere reconstruction. We analyze the impact of four different cues in the input image: (S) silhouette, (S + SH) silhouette + shading, (S + SH + RT) silhouette + shading + regular texture, and (S + SH + NT) silhouette + shading + natural texture.
3

Input Recon. Recon. Depth Normal
Input Recon. Recon. Depth Normal
Input Recon. Recon. Depth Normal
Figure 15. Evaluation of our method on 10 uncurated samples of a soccer ball (first column), a cube (second column), and a hamburger (third column). The input images are generated using Stable Diffusion with the text prompt a soccer ball, a cube, and a hamburger.
4

Input Recon. Recon. Depth Normal
Input Recon. Recon. Depth Normal
Input Recon. Recon. Depth Normal
Figure 16. Evaluation of our method on 10 uncurated samples of a lamp (first column), a mug (second column), and a sphere (third column). The input images are generated using Stable Diffusion with the text prompt a lamp, a mug, and a sphere.
5

Input Recon. Recon. Render Render Render Depth Normal View 1 View 2 View 3
Input Recon. Recon. Render Render Render Depth Normal View 1 View 2 View 3
Figure 17. Reproduced RealFusion results. We ran the official implementation of RealFusion on the images provided in the original paper. RealFusion performs well on textured objects. However, its failure on a number of our input images suggests that the multi-view cues alone are insufficient for reconstruction when the object lacks texture and fine-grained geometric features.
6

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:33.041Z
- **Text Length:** 57664 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 17 of 17
