# PDF Document: Liu et al. - 2025 - Bézier Splatting for Fast and Differentiable Vector Graphics Rendering.pdf

**File Path:** Liu et al. - 2025 - Bézier Splatting for Fast and Differentiable Vector Graphics Rendering.pdf

**Processed Date:** 2026-02-10T18:13:58.531Z

**File Size:** 35863.15 KB

**Total Pages:** 15

**Extracted Pages:** 15

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2780

**Title:** Bézier Splatting for Fast and Differentiable Vector Graphics Rendering

**Collection:** Large Files

---

## Extracted Text Content

B ́ezier Splatting for Fast and Differentiable Vector Graphics
Xi Liu1, Chaoyi Zhou1, Nanxuan Zhao2, Siyu Huang1
1Clemson University, 2Adobe Research
Bézier splatting (ours) PSNR: 28.0, Train: 3.4min
LIVE PSNR: 26.6, Train: 5.0hour
(b) 1,024 closed Bézier curves
DiffVG PSNR: 26.3, Train: 25min (a) 2,048 open Bézier curves
Bézier splatting (ours) PSNR: 29.6, Train: 2.9min
DiffVG PSNR: 26.5, Train: 43min
Closed curve
Open curve
Figure 1. This work proposes Be ́zier splatting, a new differentiable vector graphic (VG) representation that enables fast and high-fidelity vectorization of high-resolution images, achieving the outstanding rendering performance, 20× forward computation speedup, 150× backward computation speedup, and over 10× total training speedup (tested on a NVIDIA A100 GPU for open curve) in comparison with the state-of-the-art differentiable VG rasterization methods. DiffVG [13] and B ́ezier splatting suppor-
t both open and closed curves, while LIVE [16] supports closed curves only. Zoom in for a better view of details.
Abstract
Differentiable vector graphics (VGs) are widely used in image vectorization and vector synthesis, while existing representations are costly to optimize and struggle to achieve high-quality rendering results for high-resolution images. This work introduces a new differentiable VG representation, dubbed B ́ezier splatting, that enables fast yet highfidelity VG rasterization. B ́ezier splatting samples 2D Gaussians along B ́ezier curves, which naturally provide positional gradients at object boundari-
es. Thanks to the efficient splatting-based differentiable rasterizer, B ́ezier splatting achieves over 20× and 150× faster per forward and
backward rasterization step for open curves compared to DiffVG. Additionally, we introduce an adaptive pruning and densification strategy that dynamically adjusts the spatial distribution of curves to escape local minima, further improving VG quality. Experimental results show that B ́ezier splatting significantly outperforms existing methods with better visual fidelity and 10× faster optimization speed.
1. Introduction
Vector graphics (VGs) represent images through parametric primitives such as points, curves, and shapes. Unlike raster images, they enable structured representations, loss
arXiv:2503.16424v1 [cs.GR] 20 Mar 2025

less resizing, compact storage, and precise content editing, making them crucial for various applications such as user interfaces and animation.
Recently, differentiable VG rasterization gains significant attention, as it allows raster-based algorithms to edit or synthesize VGs through gradient-based optimization. DiffVG [13] is the first differentiable VG framework that leverages the anti-aliasing algorithm to differentiate the vector curves that are inherently discontinuous in pixel space. However, it suffers from slow training and low-fidelity rendering, particularly for high-resolution images. LIVE [16] further introduces a layer-wise -
coarse-to-fine strategy to improve quality and topology. However, it is highly computationally expensive, requiring 5 hours to vectorize a 2Kresolution image. Additionally, learning-based methods such as Im2Vec [19] train neural networks to map pixels to VGs, but they are restricted to simple graphics and struggle with out-of-domain generalization. Towards scalable applications of VGs, these challenges highlight the need for a differentiable VG method with better efficiency, fidelity, and generali-
zation capability.
This work presents B ́ezier splatting, a new differentiable VG representation that optimizes Be ́zier curves through Gaussian splatting-based rasterization. We sample 2D Gaussian points along Be ́zier curves and their interior regions, then leverage the Gaussian splatting framework [10] for efficient curve rasterization. Unlike DiffVG [13] which requires computationally intensive boundary sampling and gradient computation, 2D Gaussians inherently provide direct positional gradients at object bound-
aries through its differentiable Gaussian formulation, enabling over 150× faster backward computation over DiffVG for open curves. We further introduce an adaptive pruning and densification strategy that adaptively removes redundant curves while adding new ones to necessary regions during optimization. It helps the optimization process escape the local minima of current spatial distributions of curves, formulating a “global receptive field” for further improving the VG optimization process. As sho-
wn in Fig. 1, Be ́zier splatting outperforms existing differentiable VG rasterizers for both open and closed curves. The open curve training takes only 2.9 minutes, representing an over 10× training acceleration compared to DiffVG [13] (43 minutes). Be ́zier splatting preserves better image details and captures fine-grained texture information. For instance, in Fig. 1(a), B ́ezier splatting presents richer facial details. While LIVE [3] enhances details to some extent, its layer-wise optimization -
strategy results in artifacts like non-smooth shape boundaries on the sky as well as significantly more computing cost, whereas Be ́zier splatting enables 88× training acceleration. We summarize the contribution of this work as follows.
• We propose a novel differentiable vector graphic representation, Be ́zier splatting, which achieves 20× faster for
ward and 150× faster backward computation, while producing higher-fidelity VGs for high-resolution images. • We present an adaptive pruning and densification strategy to improve the optimization process of Be ́zier curves by escaping the local minima of the spatial distributions of curves. • Extensive experiments demonstrate that Be ́zier splatting outperforms existing differentiable VG representations in efficiency and visual quality.
2. Related works
2.1. Vectorization and Rasterization
Image vectorization and vector graphic (VG) rasterization are important research topics in computer graphics and computer vision. DiffVG [13] introduces the first differentiable VG rasterization framework, laying a foundation for optimizing and generating vectorized representations through gradient-based methods. It expands the applicability of VGs to a broader range of tasks including image vectorization, text-to-VG generation, and painterly rendering. Based on DiffVG [13], LIVE [16] further prop-
oses a layer-wise path initialization strategy, vectorizing raster images into compact and semantically consistent VG representations while preserving image topology. Du et al. [3] use linear gradients to fill the regional colors, and Chen et al. [2] propose a specific implicit neural representation to model regional color distributions, enhancing the color representation within closed Be ́zier curves. However, these DiffVG-based VG rasterization approaches [2, 3, 13, 16] suffer from slow optimiza-
tion, often requiring several hours to process a 2K-resolution image with 1,024 curves. With the advancement of deep learning, another line of approaches directly learns deep neural networks for vector synthesis. Lopes et al. [14] combine image-based encoder and VG decoder to generate fonts. Img2Vec [19] integrates the encoder with recurrent neural networks (RNNs) by leveraging sequential modeling for structured vector synthesis. SVGFormer [1] further adopts a Transformerbased architecture [23] to-
 improve the capacity for representing complex geometric structures. More recently, diffusion models [6] have been applied to text-to-VG synthesis [9, 26, 27, 30]. However, existing learning-based VG synthesis approaches are limited to generating simple graphics, and struggle with out-of-domain data. In this work, we propose a novel VG representation dubbed Be ́zier splatting that achieves high-fidelity VG rendering within minutes of optimization for high-resolution images.
2.2. Gaussian Splatting
3D Gaussian Splatting [10, 34] emerges as a promising approach for novel view synthesis (NVS) and attracts significant attention from the community. Its explicit 3D

P0,1 P0,2 P0,M
...... c0 α0
P1,1 P1,2 P1,M
...... c1 α1
PN,1 PN,2 PN,M
...... cN αN
Differentiable rasterization by splatting
Pruning and densification
Initialization Bézier curves Sampling 2D Gaussians Ground truth
Figure 2. An illustration of the algorithm flow of B ́ezier splatting. It begins by randomly initializing B ́ezier curves and uniformly sampling Gaussians points along them. These Gaussians are then rasterized into the image, enabling gradient-based computation to optimize parameters of both Be ́zier curves and Gaussians. Curves with negligible opacity or extremely small shapes are removed, while new curves are adaptively added into areas with high reconstruction error, ensuring curves are placed -
in areas requiring finer details. → forward, ← backpropagation, ← error map.
Gaussian-based volumetric representation enables highfidelity 3D reconstruction, while the differentiable tilebased rasterization pipeline ensures real-time and highquality rendering. It has been applied to various domains and tasks, such as 4D modeling [15, 25] and 3D scene generation [21, 28]. Several works further improve the Gaussian primitives for better representation quality. SuGaR [4] proposes to approximate 3D Gaussians with 2D Gaussians for enhanced surface reconstruction. 2D Gaussian sp-
latting [7] directly adopts 2D Gaussians for 3D reconstruction for simplified optimization and improved geometric fidelity. TetSphere splatting[5] further employs tetrahedral meshes as the geometric primitives to achieve high-quality geometry. Particularly for 2D image representation, GaussianImage [32] adopts 2D Gaussians [7] for efficient image representation, achieving a compact and expressive alternative to rasters or implicit representations [17, 20]. Image-GS [33] further enhances it through-
 a content-adaptive compression approach. This work proposes to integrate Gaussian splatting with vector representations for differentiable VG rasterization. By sampling 2D Gaussians on Be ́zier curves and rasterizing through the efficient Gaussian splatting pipeline, the proposed Be ́zier splatting representation enables fast yet high-quality VG rendering, even for high-resolution images with complex structures.
3. Method
3.1. Overall
Given a raster image, our goal is to efficiently vectorize it into a VG representation that closely resembles the input while preserving the details. Existing methods, including DiffVG [13] and its following work [2, 16], incur substantial computational costs due to the pixel color accumulation computation. Specifically, DiffVG first constructs a bounding volume hierarchy (BVH) tree to determine the curves that intersect with each individual pixel, then solves equations to precisely determine whet-
her a pixel lies within a region and to compute the inward or outward gradients at
boundary points. To overcome this inefficiency, this work proposes a novel VG representation, Be ́zier splatting, which is inspired by the high computational efficiency and expressive fitting capacity of Gaussian splatting [32] for rasterization. Be ́zier splatting samples 2D Gaussian points along Be ́zier curves and represents them as 2D Gaussians, enjoying the following advantages: • This design significantly accelerates the forward and backward pass of B ́ezier curve rasterization, achieving ov-
er 10× training speedup without specialized optimization techniques; • The 2D Gaussian representation inherently provides direct position gradients for object boundaries, eliminating the need for additional computations such as boundary sampling and gradient derivation via the Reynolds transport theorem in DiffVG [13]; • It supports richer texture representation by allowing properties such as spatially varying opacity and width, facilitating complex effects such as linear-gradient color transition-
s within a single curve. To further improve the fidelity and expressiveness of Be ́zier splatting, we introduce a pruning and densification approach (Sec. 3.5), which dynamically removes redundant Be ́zier curves while adaptively adding necessary curves in regions that have high reconstruction error. Fig. 2 illustrates the algorithm flow of Be ́zier splatting. More details are discussed in the following sections.
3.2. Primitives of Be ́zier Splatting
Be ́zier curves. We adopt Be ́zier curves as the parametric primitives of VGs. The representation includes N Be ́zier curves with a degree of M , as:
Bi(t) =
M
X
j=0
BM
j (t)P (i)
j , t ∈ [0, 1], i ∈ {1, . . . , N }, (1)
where t is a normalized position on the curve, P (i)
j represents the j-th control point of the i-th Be ́zier curve, and BM
j (t) is the Bernstein polynomial of degree M , given by:

BM
j (t) = M
j (1 − t)M−jtj. (2)
Each Be ́zier curve Bi(t) is associated with an RGB color parameter ci ∈ R3, and an opacity parameter øi ∈ [0, 1] that defines the transparency of the curve. To formulate an open curve, we follow DiffVG [13] to adopt three sequentially connected Be ́zier curves with two control points on each. An open curve requires an additional width parameter to define the stroke thickness. For a closed curve, we adopt two connected Be ́zier curves, enabling a more efficient sampling in enclosed regions. For cl-
osed curves, color filling is applied. The connected Be ́zier curves in either an open or closed curve share the color parameters, but they have separate opacity parameters to better model the opacity changes along the curves or within closed areas for enriching the texture representation capacity. 2D Gaussians on curves. Our Be ́zier splatting novelly associates 2D Gaussians with each Be ́zier curve. The standard formulation of 2DGS [7] parameterizes each 2D Gaussian by position, color, rotation,-
 scale, opacity, and depth. However, to ensure a compact and differentiable representation, these parameters of Gaussians in our Be ́zier splatting are generated from the corresponding control points. We discuss more details of the sampling of Gaussians, rasterization process, and backaward computation in the following sections.
3.3. Sampling Gaussians on B ́ezier Curves
This work introduces a fast differentiable VG rasterizer based on Gaussian splatting, allowing gradients from raster images to be backpropagated to the 2D Gaussians, then further backpropagated to the Be ́zier curves through a differentiable sampling strategy, resulting in a highly efficient optimization of the Be ́zier curves. Specifically, for each Be ́zier curve Bi(t), we uniformly sample K points along it based on Eq. 1. The sampled point set bi is:
bi = Bi(t0), Bi(t1), . . . , Bi(tK−1) , (3)
where tk is uniformly sampled from [0, 1].
Sampling 2D Gaussians on closed curves. Achieving accurate color filling is non-trivial for closed curves. A straightforward approach involves uniformly sampling a large number of points, identifying intersecting curves, solving equations to determine which curves cover them, and then computing scaling factors based on the sampled points. However, this process is computationally expensive, making it inefficient for curve rasterization and optimization. To address this limitation, we propose a new -
structure named paired B ́ezier curve structure that facilitates an efficient closed area sampling between two Be ́zier curves of
a closed curve. Specifically, the two Be ́zier curves B1(t) and BR+1(t) share the same start and end points, and R intermediate Be ́zier curves are generated by interpolating the control points between the two Be ́zier curves P (0)
j and
P (R+1)
j as:
P (k)
j = (1 − tk)P (0)
j + tkP (R+1)
j , k = 1, . . . , R, (4)
where tk ∈ [0, 1] are sampled from a normalized cumulative
distribution function (CDF). P (k)
j is interpolated new control points. This non-uniform sampling ensures that points near the boundary curves have small scales, mitigating the influence of interior Gaussians to the exterior of closed area. The interpolated Be ́zier curves are:
Binterp
k (t) =
M
X
j=0
BM
j (t)P (k)
j , k = 1, . . . , R. (5)
Then, 2D Gaussians are sampled on these interpolated curves, by following the same procedure as open curves (Eq. 3), resulting in a structured and efficient point sampling within the enclosed region. Furthermore, to mitigate artifacts caused by non-convex curve shapes during interpolation, we incorporate the Xing loss from LIVE [16], which enforces convexity constraints on curve shapes, to improve the stability of the interpolation process. The full set of sampled points on the i-th B ́ezier curve-
 is:
X = b0, b1, . . . , bR+1 ∈ R(R+2)×K×2. (6)
Let Xr,k represents the 2D position of the k-th sampled point on the r-th interpolated curve, the x-direction scale σx(r, k) of a 2D Gaussian is calculated by the pairwise distance between consecutive points along the curve, and ydirection scale σy(r, k) is calculated by the pairwise distance between corresponding points on adjacent curves:
σx(r, k) = ∥Xr,k+1 − Xr,k∥2/ρ,
σy(r, k) = ∥Xr+1,k − Xr,k∥2/ρ. (7)
ρ is a constant that determines the density of 2D Gaussian points. The rotation θ of each Gaussian point is calculated by its left and right neighbors, as
θr,k = atan2 (yr,k+1 − yr,k−1, xr,k+1 − xr,k−1) (8)
For points on boundaries, the rotation is set to align with the nearest neighbor.
Sampling 2D Gaussians on open curves. We represent an open curve by using 3 sequential B ́ezier curves Bi(t) with a degree of 4 to form a single continuous stroke, by following the same setting as DiffVG [13]. The stroke consists of 10 control points, as the end point of each Be ́zier curve serves as the start point of the next. To ensure that the final

rendering result generates a continuous stroke with consistent width and color, we calculate the x-direction scale of a Gaussian point by the distance between neighboring points by following Eq. 7, while the y-direction scale is a learnable parameter that represents the stroke width. For both closed and open curves, the depth d of a Gaussian is assigned based on the area of curves, ensuring that smaller curves are not occluded by larger ones. This prevents them from being ignored during optimizat-
ion, as the gradient would not count Gaussians when the accumulated opacity exceeds 1.
3.4. Differentiable Rasterization by Splatting
Once all Gaussians on Be ́zier curves are sampled, the rasterization process follows the Gaussian splatting pipeline [10], which is very fast in both forward and backward computation. Different from GaussianImage [32], we use αblending for pixel rendering instead of the accumulationbased blending. Accumulation-based blending calculates the pixel value based on all overlapping Gaussians, such that it conflicts with the rendering principles of VGs, where occlusion plays a crucial role in defining ve-
ctor structures. α-blending ensures proper occlusion handling, as it allows foreground elements to contribute more to the final pixel value. The rendering of a pixel is:
Cn =
X
i∈M
ciαi
i−1
Y
j=1
(1 − αj). (9)
Cn is the n-th pixel color, ci is the color of corresponding Gaussians, αi is computed by the projected 2D covariance Σi:
αi = oi exp−σi , σi = 1
2 dT
n Σ−1
i dn. (10)
where dn is the distance between the pixel and Gaussian center, and Σi can be modeled by θi, σix and σiy as:
Σi = (RiSi)(RiSi)T . (11)
Ri = cos(θi) − sin(θi)
sin(θi) cos(θi) , Si = σix 0
0 σiy
. (12)
Discussion on efficiency. The rasterization process of Be ́zier splatting is very efficient, since we directly sample 2D Gaussians from Be ́zier curves in a differentiable manner, then splatting them to the 2D plane. The rasterization pipeline remains end-to-end differentiable while being highly optimized for parallel computation and large-scale matrix operations. As a result, Be ́zier splatting is a highly efficient and fully differentiable VG representation, which ensures both fast rendering and-
 gradient-based optimization. It not only preserves the flexibility of VGs but also allows seamless integration into deep learning frameworks, making it well-suited for tasks requiring high-quality and editable vector representations.
3.5. Optimization
Training objective. Given a raster image I ∈ RH×W ×3, our goal is to vectorize it into Be ́zier curves while achieving high-fidelity reconstruction. We first randomly generate a set of Be ́zier curves to lay on the canvas, then employ the differentiable rasterizer discussed in Sec. 3.4 to render a raster image Iˆ ∈ RH×W ×3. The Be ́zier curves can then be optimized through any gradient-based loss functions. In this work, we formulate the optimization objective as minimizing the loss between I and -
Iˆ while enforcing the curves to be convex. Therefore, we only adopt an L2 loss and a Xing loss LXing [16], as:
L = λ1∥Iˆ − I∥2
2 + λ2LXing (13)
where λ1 and λ2 are hyperparameters that trade off the two loss functions.
Adaptive curve pruning and densification. The gradients of 2D Gaussians are influenced by local pixels only. Therefore, it is hard for 2D Gaussians to dynamically reallocate to regions requiring finer-grained details. The Gaussians would be trapped in local minima, leading to redundant Gaussians that are optimized as either low opacity or excessively large size, resulting in artifacts in the rendering result. In standard 3D Gaussian splatting pipeline [10], Gaussians with low opacity or excessive -
size are pruned, whereas those with high gradient responses are split into two. However, this strategy is not directly applicable to Be ́zier curves. Note that in volumetric representations, large Gaussians are usually unnecessary for modeling any particular structure. In contrast, VG representations often encompass large uniform regions such as backgrounds or areas with homogeneous colors (e.g., walls). Consequently, the size-based pruning strategy would remove critical structures in VG represent-
ations. Similarly, splitting a Be ́zier curve into two can introduce significant randomness, as high-gradient regions do not always indicate poor reconstruction in VGs. Since VGs assume a uniform color within each enclosed region, complex textures naturally produce high gradients. This does not imply the region should be split, as it may disrupt the semantic consistency of the VG representation. To address this issue, this work introduces a new pruning and densification strategy to dynamically adj-
ust the density of Be ́zier curves throughout the optimization process. For pruning redundant Be ́zier curves, we apply three criteria to ensure a stable and precise optimization process. First, we remove curves with opacity below a dynamic threshold that gradually decreases as optimization progresses, ensuring that weakly contributing curves are eliminated while preserving essential structures. Second, we remove curves with an area below a predefined threshold, as they contribute minimally to the-
 final representation. Additionally,

Open, 1024
Closed, 2048
Closed, 256 Closed, 512 Closed, 512
Open, 512
Open, 512
Open, 256 Open, 2048
Closed, 2048
Closed, 512 Closed, 1024
Figure 3. We showcase the image vectorization results by our Be ́zier splatting, with open or closed curves and different curve counts (indicated at the bottom right of each example). The raster inputs, shown at the top left of each example, are taken from the DIV2K [22], KIOAK [12], Clipart [8], and Danbooregions [29] datasets. Zoom in for a better view of details.
we eliminate curves where the opacity is significantly lower in the middle than at both ends. This phenomenon occurs when a single curve improperly spans a region that should be represented by multiple curves, causing the optimization to reduce opacity in the middle while maintaining high opacity at the edges. Third, we remove curves that exhibit high color similarity with surrounding curves and have sig
nificant overlap, as they provide little additional information and can be pruned without affecting the final representation. By removing such curves, we allow the optimization to introduce more appropriate replacements, leading to a more accurate and visually coherent vectorized representation. For curve densification, we adopt an error-driven curve allocation strategy inspired by LIVE [16]. Specifi

Raster input
N = 1024 N = 512
DiffVG Ours DiffVG LIVE Ours
Open curve Closed curve
N = 256
Figure 4. A qualitative comparison of our method and the existing differentiable VG rasterization methods, including DiffVG [13] and LIVE [16], with different number (N ) of open and closed curves. The raster input is taken from the DIV2K dataset [22].
cally, we compute connected error regions, rank them by area, and add new Be ́zier curves into the highest-error regions. This adaptive redistribution mechanism ensures that curves are allocated to where they would contribute the most to the reconstruction fidelity. The pruning and densification strategy enables a “global receptive field” for redistributing curve density, effectively preserving visual details for high-fidelity rendering while maintaining a compact vector representation.
4. Experiments
4.1. Experimental Setups
Implementation details. We implement Be ́zier splatting in PyTorch [18] and optimize it by using the Adam optimizer [11] with a StepLR learning rate scheduler. The learning rate is initialized at 0.01 for color, 2e-4 for Be ́zier curve control points, and 0.1 for opacity. For the pruning and densification strategy, the opacity threshold is set to 0.02, and the overlap threshold based on Axis-Aligned Bounding Boxes (AABB) is set to 0.9. Following the approach in LIVE [16], new curves are initialize-
d in a circular pattern, and the number of added curves matches the number of removed ones to maintain a constant total curve count. Open curves are optimized for 15,000 iterations, and closed curves are optimized for 10,000 iterations. Pruning and densification are applied every 400 steps until 14,000 or 9,200 steps, after which they are halted to stabilize the representation. Datasets. We comprehensively evaluate our method across different image domains. We use the publicly available DIV2K [22]-
 dataset for evaluating natural images. Due to the high computational cost of baseline method LIVE [16], we uniformly subsample the DIV2K dataset by selecting one out of every four images, resulting in a final
Table 1. Forward and backward speed of DiffVG [13] and B ́ezier splatting (tested on a 2,040×1,344 image, using 2,048 curves). DiffVG Be ́zier splatting Speedup Open Forward 141.3ms 7.2ms 19.6×
Backward 701.3.ms 4.7ms 149.2× Closed Forward 85.2ms 14.2ms 6.0×
Backward 448.3ms 15.7ms 28.5×
evaluation set of 200 images from the original 800-image dataset. Additionally, we evaluate our method on nonphotorealistic images, including the clip art images from Clipart1K dataset [8], and cartoon images from Danbooregions dataset [29], to demonstrate its effectiveness for diverse types of images.
4.2. Method Comparison
Table 1 reports the forward and backward runtime for processing 2,048 curves on an image with a resolution of 2,040×1,344. Compared to DiffVG [13], our method significantly accelerates VG rasterization by approximately 20× faster per forward step and 150× faster per backward step for open curves. For closed curves, our color filling strategy requires sampling 20 additional Be ́zier curves per closed curve, while our method remains highly efficient, achieving 6× faster forward and 28.5× faster back-
ward computation. Table 2 quantitatively evaluates the quality of differentiable VG representations by three commonly used metrics, MS-SSIM [24], PSNR, and LPIPS [31]. Our method demonstrates superior performance in both training efficiency and image fidelity, under all curve numbers and open and closed curves. Our method achieves 6×-13× training acceleration compared to DiffVG [13] and 68×-90× compared to LIVE [16] Fig. 4 visually compares DiffVG [13], LIVE [3], and our B ́ezier splatting under v-
arying numbers of open/closed

Table 2. Quantitative evaluation and training efficiency of differentiable VG methods on the DIV2K dataset [22] (256 to 2,048 curves).
Method 256 512 1024 2048
SSIM ↑ P SN R↑ LP IP S↓ Train SSIM ↑ P SN R↑ LP IP S↓ Train SSIM ↑ P SN R↑ LP IP S↓ Train SSIM ↑ P SN R↑ LP IP S↓ Train Open DiffVG 0.552 19.83 0.563 18m56s 0.587 21.47 0.537 22m01s 0.616 22.62 0.517 30m38s 0.654 23.89 0.492 46m36s
Ours 0.600 22.17 0.540 3m37s 0.646 23.79 0.498 3m21s 0.699 25.45 0.448 3m17s 0.756 27.22 0.389 3m24s
Closed
DiffVG 0.578 20.69 0.548 16m27s 0.601 21.82 0.531 18m35s 0.631 22.95 0.509 25m08s 0.668 24.21 0.482 34m16s LIVE 0.576 20.09 0.543 2h41m 0.611 21.70 0.521 4h12m 0.648 23.11 0.495 5h6m - - - Ours 0.581 20.74 0.547 2m22s 0.611 22.14 0.522 2m45s 0.648 23.55 0.491 3m25s 0.690 24.93 0.454 4m46s
GT w/o Prune&Densify w/o Muti-opacity Ours
Figure 5. Ablation study on the proposed adaptive pruning and densification strategy and multi-opacity strategy.
Table 3. Ablation study on adaptive pruning and densification strategy and the number of opacity parameters per curve (tested with 512 open curves on DIV2K dataset [22]).
Method SSIM ↑ P SN R↑ LP IP S↓ Full (w/ Prune&Densify, 3-opacity) 0.65 23.79 0.50 - w/o Prune&Densify 0.63 23.23 0.50 - 1-opacity 0.63 22.97 0.51
curves. As the number of paths increases, it shows progressive enhancement in the visual details of mountains, lakes, and clouds. Compared to DiffVG [13], our method captures significantly more fine-grained textures. Compared to LIVE [16], our method effectively reduces artifacts in the areas of clouds and water, resulting in higher-fidelity rendering results. This improvement stems from our method’s ability to globally optimize all curves, rather than LIVE’s layerby-layer path-adding strategy. By-
 optimizing the entire VG simultaneously, our approach ensures a cohesive and natural appearance, avoiding the accumulation of errors and inconsistencies introduced by layer-wise updates. As shown in Fig. 3, Be ́zier splatting consistently renders high-quality VGs across various image domains, from photorealistic natural images, watercolor paintings, to clip arts and cartoon images. Unlike learning-based image vectorization methods [1, 14, 19], which can not easily generalize to out-of-domain data-
, our method can flexibly handle different types of images.
4.3. Ablation study
Adaptive pruning and densification. We evaluate the effectiveness of our pruning and densification strategy and the quantitative results are shown in the third row of Table 3. The pruning step effectively removes redundant curves, while the densification step utilizes an error map derived from the loss function to initialize new curves, allowing for allocating more curves to areas with fine details. Fig. 5 also demonstrates the texture quality improvement brought by this strategy. Multi-opacity st-
rategy. To enhance the VG representation quality without significantly increasing the number of parameters, we assign opacity values to Be ́zier curves. For
open curves, we assign a single opacity value to each Be ́zier curve. For closed areas, we adopt three opacity values and compute their linear interpolation across the enclosed region, assigning these values to the newly generated Be ́zier curves. As shown in Table 3, incorporating richer opacity variation improves the rendering fidelity. Without the multiopacity strategy, as shown in the third image of Fig. 5, artifacts such as visible lines crossing objects appear (e.g., a line across the chair -
and doll). The multi-opacity strategy helps mitigate this issue by using opacity variations as an effective criterion for adaptively pruning the curves which have low opacities in between the enclosed regions, leading to cleaner and more visually coherent results.
5. Conclusion
This work has presented Be ́zier splatting, a novel differentiable vector graphics (VGs) representation that leverages Gaussian splatting for efficient Be ́zier curve optimization. Our method significantly achieves 20 faster forward computation and 150 faster backward computation in rasterization compared to existing methods, while also delivering superior rendering fidelity. Additionally, our adaptive pruning and densification strategy improves optimization by dynamically adjusting curve placemen-
t during optimization. Extensive experiments have demonstrated that Be ́zier splatting outperforms existing differentiable VG methods in both training efficiency and visual quality, making it a promising solution for scalable applications of VGs.
Limitation and future work. The closed curves in Be ́zier splatting are enforced to have convex shapes using Xing loss [16] to prevent false interpolation results, which may slightly reduce the capacity of VG representations. Additionally, the closed curves require sampling more Gaussian points to represent area boundaries precisely, leading to slower forward-backward compared to open curves. An interesting future direction is to leverage the efficiency and differentiability of our approach for hi-
gh-quality VG synthesis applications such as text-to-VG generation or textbased VG editing.

References
[1] Defu Cao, Zhaowen Wang, Jose Echevarria, and Yan Liu. Svgformer: Representation learning for continuous vector graphics using transformers. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), pages 10093–10102, 2023. 2, 8 [2] Ye Chen, Bingbing Ni, Jinfan Liu, Xiaoyang Huang, and Xuanhong Chen. Towards high-fidelity artistic image vectorization via texture-encapsulated shape parameterization. In Proceedings of the IEEE/CVF Conference on Computer Vision a-
nd Pattern Recognition (CVPR), pages 15877–15886, 2024. 2, 3 [3] Zheng-Jun Du, Liang-Fu Kang, Jianchao Tan, Yotam Gingold, and Kun Xu. Image vectorization and editing via linear gradient layer decomposition. ACM Transactions on Graphics (TOG), 42(4), 2023. 2, 7 [4] Antoine Gu ́edon and Vincent Lepetit. Sugar: Surfacealigned gaussian splatting for efficient 3d mesh reconstruction and high-quality mesh rendering. CVPR, 2024. 3 [5] Minghao Guo, Bohan Wang, Kaiming He, and Wojciech Matusik. Tetsphere -
splatting: Representing high-quality geometry with lagrangian volumetric meshes. arXiv preprint arXiv:2405.20283, 2024. 3
[6] Jonathan Ho, Ajay Jain, and Pieter Abbeel. Denoising diffusion probabilistic models. Advances in neural information processing systems, 33:6840–6851, 2020. 2 [7] Binbin Huang, Zehao Yu, Anpei Chen, Andreas Geiger, and Shenghua Gao. 2d gaussian splatting for geometrically accurate radiance fields. In SIGGRAPH 2024 Conference Papers. Association for Computing Machinery, 2024. 3, 4 [8] Naoto Inoue, Ryosuke Furuta, Toshihiko Yamasaki, and Kiyoharu Aizawa. Cross-domain weakly-supervised object dete-
ction through progressive domain adaptation. In Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition, pages 5001–5009, 2018. 6, 7 [9] Ajay Jain, Amber Xie, and Pieter Abbeel. Vectorfusion: Text-to-svg by abstracting pixel-based diffusion models. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pages 1911–1920, 2023. 2
[10] Bernhard Kerbl, Georgios Kopanas, Thomas Leimku ̈hler, and George Drettakis. 3d gaussian splatting for real-time radiance field rendering. ACM Transactions on Graphics, 42 (4), 2023. 2, 5 [11] Diederik P. Kingma and Jimmy Ba. Adam: A method for stochastic optimization. In ICLR (Poster), 2015. 7 [12] Kodak. Kodak lossless true color image suite, 1999. Accessed: 2025-03-07. 6, 11, 12 [13] Tzu-Mao Li, Michal Luka ́cˇ, Gharbi Michae ̈l, and Jonathan Ragan-Kelley. Differentiable vector graphics ra-
sterization for editing and learning. ACM Trans. Graph. (Proc. SIGGRAPH Asia), 39(6):193:1–193:15, 2020. 1, 2, 3, 4, 7, 8 [14] Raphael Gontijo Lopes, David Ha, Douglas Eck, and Jonathon Shlens. A learned representation for scalable vector graphics. In Proceedings of the IEEE/CVF International Conference on Computer Vision, pages 7930–7939, 2019. 2, 8
[15] Jonathon Luiten, Georgios Kopanas, Bastian Leibe, and Deva Ramanan. Dynamic 3d gaussians: Tracking by persistent dynamic view synthesis. In 3DV, 2024. 3 [16] Xu Ma, Yuqian Zhou, Xingqian Xu, Bin Sun, Valerii Filev, Nikita Orlov, Yun Fu, and Humphrey Shi. Towards layerwise image vectorization. In Proceedings of the IEEE conference on computer vision and pattern recognition, 2022. 1, 2, 3, 4, 5, 6, 7, 8 [17] Thomas Mu ̈ller, Alex Evans, Christoph Schied, and Alexander Keller. Instant neural gra-
phics primitives with a multiresolution hash encoding. ACM transactions on graphics (TOG), 41(4):1–15, 2022. 3 [18] Adam Paszke, Sam Gross, Francisco Massa, Adam Lerer, James Bradbury, Gregory Chanan, Trevor Killeen, Zeming Lin, Natalia Gimelshein, Luca Antiga, et al. Pytorch: An imperative style, high-performance deep learning library. Advances in neural information processing systems, 32, 2019. 7
[19] Pradyumna Reddy, Michael Gharbi, Michal Lukac, and Niloy J Mitra. Im2vec: Synthesizing vector graphics without vector supervision. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pages 7342–7351, 2021. 2, 8 [20] Vincent Sitzmann, Julien Martel, Alexander Bergman, David Lindell, and Gordon Wetzstein. Implicit neural representations with periodic activation functions. Advances in neural information processing systems, 33:7462–7473, 2020. 3
[21] Jiaxiang Tang, Jiawei Ren, Hang Zhou, Ziwei Liu, and Gang Zeng. Dreamgaussian: Generative gaussian splatting for efficient 3d content creation. In The Twelfth International Conference on Learning Representations, 2024. 3
[22] Radu Timofte, Eirikur Agustsson, Luc Van Gool, MingHsuan Yang, Lei Zhang, Bee Lim, et al. Ntire 2017 challenge on single image super-resolution: Methods and results. In The IEEE Conference on Computer Vision and Pattern Recognition (CVPR) Workshops, 2017. 6, 7, 8, 12, 13, 14
[23] Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N Gomez, Łukasz Kaiser, and Illia Polosukhin. Attention is all you need. Advances in neural information processing systems, 30, 2017. 2
[24] Zhou Wang, Eero P. Simoncelli, and Alan C. Bovik. Multiscale structural similarity for image quality assessment. Conference Record of the Asilomar Conference on Signals, Systems and Computers, 2:1398–1402, 2003. Conference Record of the Thirty-Seventh Asilomar Conference on Signals, Systems and Computers ; Conference date: 09-11-2003 Through 12-11-2003. 7 [25] Guanjun Wu, Taoran Yi, Jiemin Fang, Lingxi Xie, Xiaopeng Zhang, Wei Wei, Wenyu Liu, Qi Tian, and Xinggang Wang. 4d gaussian splatting -
for real-time dynamic scene rendering. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), pages 2031020320, 2024. 3 [26] Ximing Xing, Chuang Wang, Haitao Zhou, Jing Zhang, Qian Yu, and Dong Xu. Diffsketcher: Text guided vector sketch synthesis through latent diffusion models. Advances in Neural Information Processing Systems, 36:15869–15889, 2023. 2

[27] Ximing Xing, Haitao Zhou, Chuang Wang, Jing Zhang, Dong Xu, and Qian Yu. Svgdreamer: Text guided svg generation with diffusion model. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pages 4546–4555, 2024. 2 [28] Taoran Yi, Jiemin Fang, Junjie Wang, Guanjun Wu, Lingxi Xie, Xiaopeng Zhang, Wenyu Liu, Qi Tian, and Xinggang Wang. Gaussiandreamer: Fast generation from text to 3d gaussians by bridging 2d and 3d diffusion models. In CVPR, 2024. 3 [29] Lvmin Zha-
ng, Yi JI, and Chunping Liu. Danbooregion: An illustration region dataset. In European Conference on Computer Vision (ECCV), 2020. 6, 7, 15
[30] Peiying Zhang, Nanxuan Zhao, and Jing Liao. Text-to-vector generation with neural path representation. ACM Transactions on Graphics (TOG), 43(4):1–13, 2024. 2
[31] Richard Zhang, Phillip Isola, Alexei A Efros, Eli Shechtman, and Oliver Wang. The unreasonable effectiveness of deep features as a perceptual metric. In CVPR, 2018. 7 [32] Xinjie Zhang, Xingtong Ge, Tongda Xu, Dailan He, Yan Wang, Hongwei Qin, Guo Lu, Jing Geng, and Jun Zhang. Gaussianimage: 1000 fps image representation and compression by 2d gaussian splatting. In European Conference on Computer Vision, 2024. 3, 5
[33] Yunxiang Zhang, Alexandr Kuznetsov, Akshay Jindal, Kenneth Chen, Anton Sochenov, Anton Kaplanyan, and Qi Sun. Image-gs: Content-adaptive image representation via 2d gaussians, 2024. 3 [34] Matthias Zwicker, Hanspeter Pfister, Jeroen Van Baar, and Markus Gross. Ewa volume splatting. In Visualization, 2001. VIS 01. Proceedings, pages 29–538. IEEE, 2001. 2

Appendix
A. More Ablation Study Results
We progressively increase the number of curves for vectorizing a watercolor image with numerous small spots. As the number of curves grows, our approach first reconstructs the foreground object, the bird, then gradually refines the smaller spots as shown in Fig 6. This demonstrates that our method prioritizes the primary structure before optimizing finer details, effectively distributing curves to balance global structure and local texture representation, thanks to our adaptive pruning and densifi-
cation strategy.
256 512 1024 2048 Raster Input
Figure 6. A comparison of curve number (N ) by Be ́zier splatting.
B. More Comparisons
We evaluate the differentiable VG methods on more natural images. We quantitatively evaluate our method on another natural image dataset, Kodak [12], and the results are shown in Table 4. Fig. 7 shows more qualitative comparisons. In the second image, our method successfully captures finer details in the blanket, preserving intricate textures and subtle variations that are less accurately represented by other methods. This demonstrates the superior representation capacity of our Be ́zier Splatting-
, particularly for complex textures and high-frequency details while maintaining structural integrity.
C. More Rendering Results on Different Image Domains
We evaluate our method on more image examples across a broader range of image domains. Fig. 8 shows more natural image examples by open curves, while Fig. 9 shows more results by closed curves. Fig. 10 shows more results on animation images. The results demonstrate that both the global structure and local texture of the images are well reconstructed, highlighting the effectiveness of our approach in capturing fine details and complex shapes.

Table 4. Quantitative evaluation on the Kodak dataset [12] (256 to 2,048 open curves).
Method 256 512 1024 2048
SSIM ↑ P SN R↑ LP IP S↓ SSIM ↑ P SN R↑ LP IP S↓ SSIM ↑ P SN R↑ LP IP S↓ SSIM ↑ P SN R↑ LP IP S↓ DiffVG 0.601 23.43 0.535 0.645 24.70 0.495 0.699 26.04 0.439 0.762 27.56 0.360 Ours 0.679 26.18 0.457 0.743 27.90 0.383 0.797 29.24 0.310 0.793 28.75 0.300
Raster input
N = 1024 N = 512
DiffVG Ours DiffVG LIVE Ours
Open curve Closed curve
N = 256
Raster input
N = 1024 N = 512
DiffVG Ours DiffVG LIVE Ours
Open curve Closed curve
N = 256
Raster input
N = 512
N = 1024
DiffVG Ours DiffVG LIVE Ours
Open curve Closed curve
N = 256
Figure 7. A qualitative comparison of our method and the existing differentiable VG rasterization method on DIV2K dataset [22].

Open, 1024
GT Open, 512 Open, 2048
Figure 8. More rendering results by B ́ezier splatting on DIV2K dataset [22].

Closed, 1024
GT Closed, 512 Closed, 2048
Figure 9. More rendering results by B ́ezier splatting on DIV2K dataset [22].

GT Closed, 512 Closed, 1024 Closed, 2048
Figure 10. More rendering results by Be ́zier splatting on DanbooRegion dataset [29].

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:13:58.531Z
- **Text Length:** 43476 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 15 of 15
