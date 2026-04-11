# PDF Document: Trivedi et al. - 2025 - MODEST Multi-Optics Depth-of-Field Stereo Dataset.pdf

**File Path:** Trivedi et al. - 2025 - MODEST Multi-Optics Depth-of-Field Stereo Dataset.pdf

**Processed Date:** 2026-02-10T18:14:18.749Z

**File Size:** 66479.81 KB

**Total Pages:** 13

**Extracted Pages:** 13

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3284

**Title:** MODEST: Multi-Optics Depth-of-Field Stereo Dataset

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

MODEST: Multi-Optics Depth-of-Field Stereo Dataset
Nisarg K. Trivedi* Vinayak A. Belludi Li-Yun Wang Pardis Taghavi Dante Lok
{nisarg819, belludivinayakaa, wangliyun0117, taghavi.pardis, dantelok93}@gmail.com
Abstract
Reliable depth estimation under real optical conditions remains a core challenge for camera vision in systems such as autonomous robotics and augmented reality. Despite recent progress in depth estimation and depth-of-field rendering, research remains constrained by the lack of large-scale, high-fidelity, real stereo DSLR datasets, limiting real-world generalization and evaluation of models trained on synthetic data as shown extensively in literature. We present the first high-resolution (5472×364-
8px) stereo DSLR dataset with 18000 images, systematically varying focal length and aperture across complex real scenes and capturing the optical realism and complexity of professional camera systems. For 9 scenes with varying scene complexity, lighting and background, images are captured with two identical camera assemblies at 10 focal lengths (28-70mm) and 5 apertures (f/2.8-f/22), spanning 50 optical configurations in 2000 images per scene. This full-range optics coverage enables controlled ana-
lysis of geometric and optical effects for monocular and stereo depth estimation, shallow depth-of-field rendering, deblurring, 3D scene reconstruction and novel view synthesis. Each focal configuration has a dedicated calibration image set, supporting evaluation of classical and learning based methods for intrinsic and extrinsic calibration. The dataset features challenging visual elements such as multi-scale optical illusions, reflective surfaces, mirrors, transparent glass walls, finegrained de-
tails, and natural / artificial ambient light variations. This work attempts to bridge the realism gap between synthetic training data and real camera optics, and demonstrates challenges with the current state-of-the-art monocular, stereo depth and depth-of-field methods. We release the dataset, calibration files, and evaluation code to support reproducible benchmarking and further research on realworld optical generalization.
1. Introduction
Depth estimation is a fundamental and essential application of computer vision, with applications including robotics, autonomous vehicles, augmented or mixed reality, 3D scene creation and novel view synthesis, among others. Recent
years have been revolutionary in creating high-quality and precise depth maps and 3D scenes with breakthrough deeplearning models such as FoundationStereo [42] and Depth Anything [45] for depth estimation and neural radiance fields (NeRFs) [25] and Gaussian splatting (GS) [19] for 3D scene reconstruction. Notably, the applications of depth estimation and singleor multi-view synthesis for computer vision tasks have been studied, and there are popular datasets for model evaluation; however, existing-
 datasets tend to have relatively lowresolution RGB images (e.g., NYU Depth V2 [34], TUM RGB-D [37], or VOID [39] or lack systematic variations of focal lengths and aperture settings (e.g., ScanNet++ [48], Replica [36] , or HAMMER [24]. Another limitation of the existing datasets is that the scene complexity is relatively low, i.e., there are only a few scenes that contain small objects (e.g., flowers and leaves), optical illusions, and reflective and surface transparency (e.g., glass doors). As s-
uch, most datasets fail to yield high-quality depth maps or 3D scene creation due to a lack of variations in scene lighting, including scenes captured by varying focal lengths and aperture setups. Further, calibration algorithms continue seeing advancement. To recalculate calibration parameters using newer algorithms, we need access to calibration images, which are absent in many public datasets (Table 1). We provide a global calibration set and per-focal-length calibration sets, allowing recalibr-
ation flexibility.
1.1. Contributions
In this work, we address the limitations of the existing datasets used for depth model evaluation and shallow depthof-field (DoF) rendering by proposing a new high resolution, balanced, real-world stereo dataset with systematic variations of focal length and aperture settings. Our proposed dataset, Multi-Optics Depth-of-Field Stereo Dataset (MODEST) contains 18000 images across 9 scenes at high resolution (5472 × 3648 px). Each scene has 10 focal lengths and 5 apertures per focal length, with a de-
dicated calibration image set per focal length comprising of large checkerboard images (see Table 1). The dataset also includes challenging visual elements such as optical illusions, reflective surfaces, ambiguous background depths, sharp
1
arXiv:2511.20853v1 [cs.CV] 25 Nov 2025

Table 1. Data comparison categorized per use-case. (†, ‡): systematic focal length and aperture variation, (¶): scene lighting variations. RGB-P: RGB with polarisation sensor. Active Stereo: an active stereo depth sensor. D-ToF, I-TOF: direct, indirect Time-of-Flight sensor.
Dataset Capture Real/ Resolution Focal Len. Aperture Light Depth Calibration Setup Synthetic Variation † Variation ‡ Variation ¶ Range Set
Use Case: Stereo Dataset and Depth-model Evaluation
KITTI (’12) [11] Stereo RGB + LiDAR Real 1242×375px ✗ ✗ ✓ 0.5m − 80m ✗ NYU Depth V2 (’12) [34] Mono RGB-D (Kinect v1) Real 640×480px ✗ ✗ ✗ 0.5m − 10m ✗ TUM RGB-D (’12) [37] Mono RGB-D (Kinect v1) Real 640×480px ✗ ✗ ✗ 0.5m − 5m ✗ vKITTI (’16) [9] Virtual stereo cameras (Unity) Synthetic 1242×375px ✗ ✗ ✓ 0.5m − 100m ✗ ScanNet (’17) [8] Mono RGB-D (iPad + PrimeSense) Real (640-1296)×(480-968)px ✗ ✗ ✗ 0.2m − 10m ✗ Matterport3 (’17) [5] Multi-camera (360-degree RGB-D) Real 1280×1024px ✗ ✗ ✓ 0.2m − 20m -
✗ iBims-1 (’18) [21] Mono RGB (DSLR) Real (640-1500)×(480-1000)px ✗ ✗ ✗ 0.5m − 10m ✗ VOID (’20) [39] Mono RGB-D (RealSense D435i) Real 640×480px ✓ ✗ ✓ 50m ✗ DIML outdoor (’20) [43] Stereo RGB (ZED camera) Real 1920×1080px ✗ ✗ ✓ 0.5m − 100m ✗ HAMMER (’22) [24] Multi-camera (RGB-P + Active/D/I-ToF) Real 1280×720px ✗ ✗ ✗ 10m ✗ ScanNet++ (’24) [48] Mono RGB-D (iPad + Structure Sensor) Real 1920×1440px ✗ ✗ ✗ 0.2m − 20m ✗ MODEST (’25) Stereo RGB (Canon 6D) Real 5472×3648px ✓ ✓ ✓ 0.5m − 10m ✓
Use Case: Multi-view Stereo
ETH3D (’17) [32] Multi-camera (DSLR + LiDAR + Stereo) Real 2048×1536px ✗ ✗ ✓ 0.5m − 50m ✗ Replica (’19) [36] Mono RGB (DSLR + LiDAR) Synthetic 1080×1080px ✗ ✗ ✗ 0.1m − 10m ✗ DDAD (’20) [10] Multi-camera (shutter + LiDAR) Real 1600×900px ✗ ✗ ✓ 0.5m − 100m ✗ MODEST (’25) Stereo RGB (Canon 6D) Real 5472×3648px ✓ ✓ ✓ 0.5m − 10m ✓
Use Case: 3D static and dynamic scene generation
Sintel (’12) [3] Synthetic renderings from 3D film Synthetic 1024×436px ✗ ✗ ✓ 0m − 80m ✗ DIODE (’19) [38] Mono RGB-D (FARO Focus S350) Real 1024×768px ✗ ✗ ✓ 0.5m − 350m ✗ MODEST (’25) Stereo RGB (Canon 6D) Real 5472×3648px ✓ ✓ ✓ 0.5m − 10m ✓
Use Case: Shallow depth-of-field rendering
DPDD (’19) [1] Mono RGB Real 1680×1120px ✗ ✗ ✓ 0.3m − 10m ✗ BLB (’22) [50] Synthetic renderings from Blender Synthetic 1920×1080px ✗ ✓ ✓ 0.5m − 10m ✗ VABD (’24) [13] Mono RGB Real 1536×1024px ✗ ✓ ✓ — ✗ MODEST (’25) Stereo RGB (Canon 6D) Real 5472×3648px ✓ ✓ ✓ 0.5m − 10m ✓
Use Case: Optical illusions
3D-Visual-Illusion (’25) [47] Stereo RGB + LiDAR Real + Synthetic 1080×1920px — — ✓ 0.5m − 50m ✗ MODEST (’25) Stereo RGB (Canon 6D) Real 5472×3648px ✓ ✓ ✓ 0.5m − 10m ✓
brightness changes, etc. Our second contribution is that we implement and evaluate state-of-the-art monocular and stereo depth estimation, shallow depth-of-field, deblurring methods on our dataset. We demonstrate that SOTA monocular and stereo depth estimation models show difficulty generalizing on real data with optical illusions. We produce systematic performance evaluation for shallow depthof-field and deblurring methods across focal lengths, and highlight the need to train and test these model-
s on datasets such as ours, which offer explicit, wide coverage of camera optics. We open source the dataset, illustrations and visuals, processing and evaluation tools to push research frontiers for purely non-commercial and academic purposes.
1.2. Related datasets
Early datasets for depth-model evaluation, including KITTI [11] , NYU Depth V2 [34] , ScanNet [8], TUM RGB-D [37] , and iBims-1 [20], contain low-resolution RGB and depth images. Due to low resolutions, small objects and detailed context in RGB and depth images are difficult to recognize and evaluate. Most recently, new datasets, including DIML outdoor [43] , HAMMER [24], and ScanNet++ [48] , with high-resolution RGB and depth images, were proposed to be adapted to depth-model evaluation problems.-
 The limitation of this data set is that sensors with constant focal lengths and aperture settings are used to capture RGB frames. Thus, the captured scenes are not varied enough for depth estimation evaluation. The HAM
MER [24] and ScanNet++ [48] also include high-resolution RGB and depth images, but they are captured by imaging sensors with constant focal lengths and apertures. Regardless of the above datasets, multi-view stereo datasets have been made available. ETH3D [32] and DDAD [10] datasets comprise images acquired under varying lighting conditions. The limitation of multi-view stereo datasets is variations in focal lengths and apertures during the data acquisition process. 3D scene reconstruction is anot-
her fundamental task in computer vision studies, and pioneering datasets, such as Sintel [3] and DIODE [38], are made available. Sintel [3] is a synthetic dataset made through synthetic renderings from the 3D film Sintel. Due to the synthetic images, the color distribution of the scenes in the Sintel [3] dataset differs from real scenes captured by real sensors [16]. DIODE [38] is another public dataset used for 3D reconstruction tasks. The scenes have varying illumination changes due to indoor an-
d outdoor environments. The problem with the DIODE [38] dataset is that calibration sets (i.e., calibration images) are not provided. Therefore, the calibration parameters are difficult to reuse to calibrate captured images from new sensors. Shallow depth-of-field (DoF) rendering is a process of synthetically creating the photographic effect where only a small portion of the scene in images is in focus, while the rest is blurred. The idea of shallow DoF is to mimic the optics of real cameras with -
wide apertures. DPDD [1] is
2

a pioneering dataset for shallow DoF rendering; however, the limitations of the DPDD [1] dataset include one camera model and optics setup, and only one blur condition. EBB! [14] is another dataset for shallow DoF rendering, but is no longer accessible. Recent data sets for shallow DoF rendering are BLB [50] and VABD [13]. Both datasets solve the issue of single optics and one blur condition in DPDD [1] by providing either multiple blur levels per scene or capturing multiple apertures per scene. -
The problems with the BLB and VABD dataset are that it only provides multiple blur levels or calibration parameters. Optical illusions in depth-model evaluation refer to probing the limitations of depth-estimation models via perceptual tricks or visually deceptive scenes. These illusions reveal where a model relies on texture, shading, or priors in the images rather than true geometric reasoning. 3D-VisualIllusion [47] is a dataset for optical illusion, and it has been used for human vision experi-
ments where illusions help understand how the human visual system infers 3D structure rather than directly measuring it. The limitation of this dataset is the lack of calibration sets for image calibration. Compared to existing datasets, our proposed MODEST dataset includes both high-resolution stereo RGB images captured with different focal lengths and aperture settings per scene, along with calibration sets provided for calibration algorithms. They enable recalibration or adaptation to lens drif-
t or new alignment while performing camera calibration. Additionally, the benefit of our MODEST dataset for shallow DoF rendering tasks is due to a wide range of apertures.
2. Method: Data Acquisition and Processing
The following sections give details on data collection and calibration process, optical illusions in this dataset, and multiple use-cases.
2.1. Data Design and Calibration
During data collection and calibration process, we captured 9 distinct scenes using a balanced stereo setup composed of two identical Canon EOS 6D cameras and lenses capturing full-frame images. For each scene, we acquired image sets across 10 different focal lengths: {28, 32, 36, 40, 45, 50, 55, 60, 65, and 70}mm to examine how focal variation influences geometric accuracy and depth reconstruction. At each focal length, calibration set containing checkerboard patterns and five inference sets with-
out checkerboards were provided. The calibration set, which uses a fixed aperture, comprises approximately 100 stereo image pairs (left and right) and is used to derive intrinsic and extrinsic parameters essential for monocular calibration, stereo calibration, and multi-view stereo (MVS) reconstruction. Each inference set, captured under five distinct apertures, contains around 20 stereo pairs per aperture-resulting in roughly 100
inference images per focal length. The inclusion of multiple focal lengths enables the analysis of depth and scale consistency across varying fields of view and lens distortions, ensuring robust calibration and improving generalization of the depth-estimation and fusion pipeline across different optical configurations.
2.2. Data Component: Optical Illusions
Our dataset includes multi-scale optical illusions purposefully created to be difficult test cases for metric depth estimation models. We are able to assess model resilience under non-trivial perception scenarios because these illusions introduce misleading visual cues that make accurate depth inference challenging as shown in Section 3.2.
2.3. Use-case: Depth Estimation
In depth estimation, our curated stereo dataset provides a controlled setting for both monocular and stereo depth estimation models. Because each scene includes a calibrated stereo pair, consistent focal-length grouping, multiple apertures, and a high-quality checkerboard calibration set, we can evaluate depth-estimation behavior under well-defined optics rather than relying on ad-hoc, noisy or limited-optics image datasets. With optical and geometric, 2D and 3D errors as described in Section 3.2,-
 we are able to detect depth estimation anomalies in state-of-the-art models when met with challenging scenes containing optical illusions.
2.4. Use-case: Shallow Depth of Field
MODEST has systematic aperture variation across multiple focal lengths and scenes in a balanced, high resolution stereo assembly, making it ideal for training and evaluation of shallow depth-of-field (DoF) rendering methods. With stereo depth and focus plane information, the data contains almost all information needed to build circle of confusion (COC) maps. Full frame lenses with wide range of optics enable rigorous evaluation of existing and new DoF methods. Dedicated calibration sets give freed-
om to refine intrinsics and extrinsics to reduce rendering errors. Several scenes contain point lights, rendering beautiful natural bokeh effects.
2.5. Use-case: Multi-view Stereo
In the multi-view stereo (MVS) setting, our curated dataset is designed to support both classical geometric pipelines (e.g.,COLMAP [30, 31],OpenMVS [4]) and modern learning-based approaches such as MapAnything [18]. Each scene is captured with stereo image pairs across 10 focal lengths and multiple apertures, providing diverse baselines, depth ranges, and field-of-view for reconstruction. This configuration allows us to evaluate how different MVS systems handle changes in scale, parallax, and imag-
e resolution, and to compare reconstruction quality between clas
3

Scene 1 2 3 4 5
Scene 6 7 8 9 Global Calibration Set
Figure 1. MODEST dataset. For 9 scenes with varying scene complexity, lighting and background, images are captured with two identical camera assemblies at 10 focal lengths (28-70mm) and 5 apertures (f/2.8-f/22) in 2000 images per scene. The data features challenging elements such as multi-scale optical illusions, reflective surfaces, transparent glass doors, sharp lighting changes, ambiguous background depths. Besides a global calibration set, each scene and each focal length has dedicated calibra-
tion sets enabling use of classical and learning-based calibration methods for intrinsics and extrinsics.
sical and learning-based methods under consistent capture conditions.
3. Experiments and Application
This section describes multiple experiments enabled by the MODEST dataset. Monocular and stereo depth estimation, analysis with optical illusions, shallow depth-of-field rendering, image deblurring, 3D scene reconstruction and novel view synthesis. Most experiments use Scene 1 for evaluation due to many challenging elements.
3.1. Monocular and Stereo Depth Estimation
We implemented four SOTA monocular and four SOTA stereo depth estimation models: Depth Pro [2], MetricDepth V2 [12], UniDepth V2 [29], Depth Anything V2 [45], MonSter [6], Foundation Stereo [41], DEFOM [17], and Selective IGEV [40]. These models provide a balanced spectrum of commercial-grade systems, metric-depth-aware architectures, and open-source frameworks that currently achieve state-of-the-art performance on public depth benchmarks. Collectively, they span a wide range of training priors—in-
cluding large-scale metric supervision and diverse multi-view datasets, making them well-suited for probing how these models generalize under high resolution, diverse real-world conditions. Consistent performance characteristics and trends across these eight models can reveal capabilities, failure modes, and intrinsic limitations of the current research frontier.
3.2. Optical Illusions and Depth Error Analysis
We quantify reliability of state of the art depth methods using four optical and geometric error metrics. These metrics reveal inconsistencies, geometric distortions, and deviations from consensus depth, enabling a rigorous assessment of the model behavior. We evaluate these methods across fo
cal lengths, apertures and multi-scale optical illusions.
a.Gradient Consistency Error: penalizes large depth changes in smooth image regions with small image gradients.
Egrad(u, v) = ∇Z(u, v) · exp − α ∇I(u, v) , (1)
where Z is the depth map, I the intensity image, ∇ the spatial gradient, and α > 0 a weighting factor. b.Planarity Error: captures how well local 3D points conform to a plane via PCA:
Eplan(u, v) = λ3 Cov({Xc(u + i, v + j)}i,j∈N ) , (2)
where Xc are the local 3D points in the camera frame, N a patch neighborhood, and λ3 the smallest eigenvalue of the covariance.
c.Interquartile Range (IQR) Uncertainty: measures depth variability across an ensemble of maps, normalized by inter-quartile range (IQR):
Uiqr(u, v) = Zk(u, v) − median(Z\k(u, v))
IQR(Z\k(u, v)) + ε , (3)
where Zk is the k-th depth map, Z\k the remaining maps, and ε a small constant. IQR(X) = Q3(X)−Q1(X), where Q1(X) and Q3(X) are the first and third quartiles of X.
d.Point Cloud Iterative Closest Point (ICP) Error: compares geometric consistency of 3D reconstructions using pairwise ICP alignment:
Eicp = 1
|P |
X
p∈P
∥p − TICP(p)∥2
2, (4)
where P is a set of 3D points from a depth map, and TICP is the rigid transform aligning it to the reference point cloud obtained form median depth map.
4

Left Image (ref) m:Depth Pro (1.75 - 2.16m) m:Metric3D V2 (2.62 - 4.23m) m:UniDepth V2 (1.76 - 2.13m) m:DAV2 (1.24 - 3.43m)
Right Image s:MonSter (4.85 - 14.38m) s:Foundation Stereo (4.41 - 6.12m) s:DEFOM Stereo (4.13 - 5.89m) s:Selective IGEV (4.51 - 6.09m)
1.5
2.0
2.5
3.0
3.6
Depth (m)
4.5
4.8
5.1
5.4
5.7
(a)
Left Image (ref) m:Depth Pro (2.00 - 4.18m) m:Metric3D V2 (3.43 - 7.01m) m:UniDepth V2 (2.93 - 23.64m) m:DAV2 (1.27 - 14.85m)
Right Image s:MonSter (4.75 - 14.66m) s:Foundation Stereo (4.89 - 5.34m) s:DEFOM Stereo (4.59 - 5.28m) s:Selective IGEV (4.80 - 5.27m)
2.6
4.0
5.4
6.8
8.2
Depth (m)
4.8
4.9
5.0
5.1
5.3
(b)
Left Image (ref) m:Depth Pro (1.71 - 4.33m) m:Metric3D V2 (1.16 - 3.27m) m:UniDepth V2 (1.24 - 3.67m) m:DAV2 (1.25 - 2.54m)
Right Image s:MonSter (4.17 - 29.95m) s:Foundation Stereo (3.91 - 7.35m) s:DEFOM Stereo (3.96 - 7.64m) s:Selective IGEV (4.20 - 7.78m)
1.2
1.9
2.5
3.1
3.8
Depth (m)
4.0
4.9
5.8
6.6
7.5
Gradient Error Planarity Error (x1e6)
0.0
2.0
4.0
6.0
8.0
ICP Error
0.5
1.0
1.5
IQR Error
0.4
0.6
0.8
(c)
Figure 2. SOTA 4 monocular and 4 stereo depth estimation models are evaluated on 3 image pairs with optical illusions and as evident, they perform poorly. The last row shows four error components for the Foundation Stereo [41] depth map, highlighting depth estimation errors not easily visible to human eyes. Gradient error and palnarity error (×1e6) share one colormap. All depth maps are produced in the left view. Monocular and stereo models are denoted by m: and s: prefix, respectively; depth rang-
es show (5 − 95%ile).
As shown for three inputs with different optical illusions in Figure 2, monocular models systematically misestimate scene depth due to absence of stereo parallax. They also produce visually inconsistent depth maps, reflecting more reliance on semantic priors over geometric evidence and a lack of explicit training on illusory scenes. Narrowing camera focus to the illusions amplifies depth anomalies as background geometric cues become less salient, revealing more
severe misestimations in scale and structure.
In contrast, stereo depth models leverage left and right views, appearing more robust to optical illusions. However, quantitative error maps (in last row) reveal structured depth errors largely invisible to human inspection. For instance, the Foundation Stereo [41] model yields visually plausible depth map, yet the error metrics expose significant boundary misalignments, 3D point cloud inconsistencies, devi
5

ations from consensus, and overall performance degradation, all strongly, spatially correlated with optical illusions. This discrepancy corroborates that, despite available stereoderived geometric constraints, learned semantic priors still dominate the final depth estimation in current state of the art monocular and stereo depth estimation. These findings highlight a critical limitation: even methods with strong geometric foundations can be subtly yet significantly compromised by perceptual illus-
ions, underscoring the importance of new datasets that challenge semantic biases and encourages robust generalization to visually ambiguous or anomalous scenes. We include ablation studies across focal length and aperture for these eight state-of-theart depth estimation models in supplementary material due to space constraints.
3.3. Shallow DoF Rendering Models
To evaluate the generalization capabilities of shallow Depth-of-Field (DoF) rendering methods on the MODEST dataset, we benchmarked three representative state-of-theart models: BokehMe [28], Dr.Bokeh [33], and BokehDiff [51]. These models are evaluated across five selected focal length groups (fl28mm to fl70mm). The experiment assesses the model’s ability to synthesize the blurred target image (f /2.8 being the widest aperture) using the sharp image (f /22) as all-in-focus input. From the quantita-
tive results presented in Tab. 2, BokehDiff exhibits the best overall performance balance across the dataset, achieving the highest PSNR (19.88 dB) and the best perceptual score (LPIPS, 0.3576). However, a comparison with its previously reported results on the real-world EBB! Val294 dataset [15] highlights 20% degradation in PSNR, showing a significant challenge in optical generalization. We observe similar trends across all models; for example, Dr.Bokeh’s overall SSIM of 0.7861 represents a perfo-
rmance degradation of approximately 20% compared to its performance on its original paper dataset. As illustrated with 3 examples in Figure 4, the predictions produced by these state-of-the-art DoF rendering models vary considerably from the correct shallow depthof-field captured by the camera. Unlike in real camera where blur transitions occur smoothly and at regions determined by the optical focus plane, the predicted images often exaggerate blur, misplace the focal region, or introduce depth-of-
-field that does not correspond to the actual scene geometry. Examples highlight large image portions getting blurred incorrectly, showing the models’ inability to predict focus plane. Sometimes, models focus on background instead of foreground, effectively reversing focus order. These errors are closely tied to how existing DoF and bokeh-rendering methods are trained. Datasets such as EBB! [15], BLB [27], and other monocular paired collections provide an input image and a target blurred image
without any optical information linking the blur magnitude to lens parameters or scene geometry. Because each image is given as a single monocular view, no information about depth or focus plane is available. Further, the existing datasets feature very few optical combinations on focal length or aperture, so the amount of blur across images is very dataset-specific. As a result, models trained on such data learn correlations between appearance and ”blur style” instead of learning physically ground-
ed depth-of-field formation. This lack of structure prevents networks from understanding where the camera is focusing, how blur should change with distance, or how the circle of confusion is determined by aperture, focal length, and focus distance. Consequently, when evaluated on real camera captures, these models struggle to replicate authentic DoF behavior or perform consistently across scenes, focus settings, or geometric configurations. MODEST overcomes these limitations by offering a capture -
protocol explicitly designed for studying shallow depth of field under controlled but realistic conditions. Each scene contains stereo images at multiple focal lengths, and for every focal length we provide calibration and inference sets with systematically varied wide range of apertures. This structure ensures that the DoF relation with depth, focus distance, and aperture is explicit. High-resolution stereo from two identical full-frame Canon EOS 6D cameras preserve authentic optical characterist-
ics such as bokeh shape, lens characteristics, and depth-dependent blur gradientsproperties that synthetic datasets cannot reproduce faithfully. Together, these components create a well-structured training set and a rigorous testbed for DoF, defocus and deblur tasks.
3.4. Deblurring models
To study how well contemporary deblurring networks respond to aperture-driven blur, we evaluate three models: state-space model EVSSM [23] and two transformer-based models FFTformer [22] and Restormer [49] on the MODEST dataset. The evaluation spans five focal lengths in (fl28-fl70mm), using blurred inputs captured at f /2.8 and sharp all-in-focus references at f /22. This setup enables us to examine the models’ behavior under structured optical blur that varies with focal length. We provide multi-
ple deblurring illustrations in supplementary material due to space constraints. Across the focal-length groups, the results in Tab. 2 show that Restormer generally achieves stronger reconstructions than FFTformer. However, when contrasted with their performance on standard benchmarks, the models exhibit a substantial decline on MODEST. For instance, Restormer drops from roughly 32.9 dB on GoPro dataset [26] to 20.6 dB on our dataset-a reduction of nearly 37% in PSNR; while FFTformer [22] shows a -
similar decrease of about
6

40%. SSIM follows the same trend, with both models losing approximately 20% relative to their originally reported values. These pronounced drops illustrate the difficulty current architectures face in handling aperture-produced optical blur and highlight the value of MODEST as a dataset for stress-testing deblurring models under controlled, optically grounded conditions.
(a) 3D reconstruction results from learning-based MVS [18].
(b) 3D reconstruction results from Gaussian Splatting [35].
Figure 3. 3D scene reconstruction results from two approaches: (a) learning-based Multi-view Stereo (MVS), and (b) Gaussian Splatting (GS).
3.5. Multi-View Stereo and 3D Reconstruction
3.5.1. Limitations of Classical Methods
We first attempted 3D scene reconstruction with classical multi-view-stereo (MVS) methods such as COLMAP [30, 31] and OpenMVS [4]. Classical MVS approaches face fundamental challenges when applied to high-resolution, indoor, or non-Lambertian scenes [44]. Computationally intensive and scaling poorly, these methods consume substantially high runtime and memory, with a full reconstruction from 120 images exceeding 50 GB RAM for several hours on NVIDIA A100 GPU. Downsampling and parameter reduction (-
e.g. fewer iterations, sampling steps, or smaller window radii) alleviate runtime but degrade geometric fidelity and depth consistency. Illustrations are included in the supplementary material. Beyond computational cost, classical MVS performance deteriorates under realistic indoor visual conditions that violate its core assumptions. Patch-based stereo relies on photometric consistency and Lambertian reflectance; thus, glossy, transparent, or reflective materials (e.g., acrylic,
metal, glass, polished plastics) cause severe matching ambiguities, holes, and noise [7]. Low-texture or planar regions such as walls and cardboard provide little discriminative signal, yielding unstable or random depths [46]. Large printed backdrops and planar posters can dominate feature matches, introducing erroneous slanted-plane solutions that occlude true foreground geometry. Variations in illumination, color temperature, or exposure, which is common in indoor environments, further break the-
 normalized crosscorrelation (NCC) assumption, while weak baselines and small triangulation angles lead to poorly constrained depth estimates. Even with careful parameter tuning (depth range limits, triangulation angle thresholds), results often remain noisy and inconsistent. We observed plenty of infinite depth pixels, lost foreground objects and details. Smooth or specular walls yield uncertain, gradient-like depth; repeated textures and occlusions on tabletops generate mismatches; and thin stru-
ctures (wires, twigs, plant leaves) are frequently unrecoverable.
3.5.2. Learning-based Methods
We attempted a recent learning-based MVS model MapAnything [18]. Unlike classical PatchMatch-based pipelines such as COLMAP [30, 31] and OpenMVS [4], this model leverages a feed-forward transformer-based 3D reconstruction framework that predicts metric and globally consistent geometry directly from multi-view inputs, without requiring explicit optimization, bundle-adjustment refinement, or camera-specific fine-tuning. The reconstructed point clouds (Figure 7) demonstrate that this method could rec-
over the main structures of the scene, including the wall relief, red support surface, and objects, while maintaining coherent spatial continuity in all views. Compared with classical MVS, MapAnything produces smoother surfaces and denser, more stable reconstructions, particularly in regions where geometry-driven pipelines struggle, such as glossy surfaces, low-texture regions, or areas with strong illumination changes. Some artifacts persist around object boundaries, surface reflections, thin str-
uctures and specular highlights. The model also perceives some optical illusions like the wall backdrop as 3D structures with depth, inviting further evaluation.Overall, these results indicate that our dataset is compatible with modern learning-based multi-view stereo frameworks for 3D scene reconstruction.
3.6. 3D reconstruction via NeRF, GS
In addition to depth prediction and classical MVS, MODEST also serves useful for neural 3D reconstruction methods such as NeRF-style radiance-field representations and Gaussian Splatting (GS). By providing calibrated multiview captures at multiple focal lengths and apertures, the
7

Input BokehDiff BokehMe DrBokehVis GT
Input BokehDiff BokehMe DrBokehVis GT
Input BokehDiff BokehMe DrBokehVis GT
Figure 4. Visualization of Shallow depth-of-field (DoF) rendering across different scene angles. There are three lens blurring models used to create effects of shallow DoF rendering.
Table 2. Quantitative evaluation of Depth Of Field and deblurring methods across five focal lengths and the overall average. Higher PSNR/SSIM and lower LPIPS indicate better performance. The table is structured into a DoF section, first three methods and a Deblur section, bottom two methods.
Method PSNR ↑ SSIM ↑ LPIPS ↓ Average
fl28 fl36 fl45 fl60 fl70 fl28 fl36 fl45 fl60 fl70 fl28 fl36 fl45 fl60 fl70 PSNR↑ SSIM↑ LPIPS↓ Depth-of-Field (DoF) Methods
BokehDiff (‘25) [51] 22.03 21.98 19.33 18.40 17.66 0.6849 0.7031 0.6473 0.5691 0.5493 0.3387 0.3032 0.3014 0.3576 0.4830 19.88 0.6307 0.3576 Dr.Bokeh (‘24) [33] 20.90 21.93 18.79 18.35 17.73 0.7918 0.8143 0.7697 0.7824 0.7722 0.5407 0.5024 0.5733 0.5305 0.5187 19.54 0.7861 0.5331 BokehMe (‘22) [28] 21.86 22.32 18.66 17.87 17.28 0.7975 0.8216 0.7687 0.7670 0.7535 0.4024 0.3697 0.4274 0.4355 0.4423 19.60 0.7817 0.4155 Deblurring Methods
EVSSM (‘25) [23] 22.64 23.61 18.76 17.03 16.55 0.8089 0.8470 0.7573 0.7175 0.6996 0.0964 0.0795 0.1335 0.1889 0.2429 19.34 0.7586 0.1557 FFTformer (‘23) [22] 23.44 24.78 19.58 17.44 16.97 0.8175 0.8496 0.7695 0.7319 0.7129 0.1225 0.1094 0.1663 0.2326 0.2783 20.03 0.7694 0.1898 Restormer (‘22) [49] 23.24 25.81 20.44 18.25 17.53 0.8052 0.8518 0.7731 0.7236 0.7084 0.0726 0.0500 0.1017 0.1522 0.1932 20.63 0.7653 0.1206
dataset offers the photometric diversity, geometric consistency, and view coverage required for training and validating neural scene representations. Fig. 3b illustrates a reconstruction produced by Splatter3R [35]. Despite generating coherent global geometry, these models also reveal characteristic failure modes on MODEST, including floating artifacts around thin structures and inconsistent reprojections where appearance cues conflict with the true 3D layout. These observations highlight MODEST a-
s a challenging dataset for next-generation neural reconstruction methods, particularly those aiming to maintain multi-view consistency under complex scenes and aperture-dependent image formation.
4. Conclusion
In this work, we introduced the first high-resolution, controlled-optics, balanced, real-world stereo dataset designed for real-world depth estimation, shallow depth-offield rendering, deblurring and other applications. With optical and geometric errors and visual evidence, we demon
strated that existing state-of-the-art systems continue to struggle under real optical effects, including monocular, stereo depth models, as well as DoF rendering and deblurring methods. We highlight the need of datasets such as MODEST to assess quality of these models under realworld camera optics variations and challenging optical illusions. To support future research, we release the complete dataset, illustrations and visuals, processing and evaluation tools for purely non-commercial, academic -
research purposes. With 18000 high-fidelity images and real camera optics, we hope this dataset serves as a catalyst for advancing shallow depth-of-field, depth estimation and related technologies towards more robust real-world performance.
8

MODEST: Multi-Optics Depth-of-Field Stereo Dataset
Supplementary Material
This document supplements the main paper. Section A details ablation study for state-of-the-art monocular and stereo depth models across focal lengths and apertures. Section B illustrates deblurring results from three recent methods on three examples from our dataset, compared with GT. Section C demonstrates performance of classical and learningbased multi-view stereo methods on the challenging visual elements of our dataset. Section D visualizes 3D reconstruction with a recent Gaussian splatting -
method.
A. Ablation Study for Depth Models
In addition to the inter-quantile range (IQR) uncertainty and gradient consistency metrics described in Section 3.2, we compute the following two metrics quantifying local smoothness of depth patches:
e. Relative Planarity Magnitude: quantifies the fraction of local 3D variance orthogonal to the best-fitting plane:
Erel(u, v) = λ3
λ1 + λ2 + λ3
, (5)
where λ1 ≥ λ2 ≥ λ3 are the eigenvalues of the covariance of local 3D points Xc(u + i, v + j) in a patch neighborhood N . It represents the proportion of total local variance that is perpendicular to the estimated plane, i.e., how much the points deviate from planarity in a scale-invariant manner.
f. Scale-Normalized Planarity Deviation: captures depthnormalized deviation of a local patch from planarity:
Enorm(u, v) = λ3
∥X ̄c∥22 + ε , (6)
where λ3 is the smallest eigenvalue of the covariance of 3D points. It reflects intrinsic local curvature independent of absolute depth scale. Figure 5 shows performance of depth models for four metrics. The top row varies focal length for a constant relative aperture of f /2.8. The bottom row varies aperture for a constant focal length of 70mm. Each point on the figure is obtained as a median over 14-20 stereo image pairs from Scene 1 with high complexity and optical illusions. For the median IQR-
 and median gradient errors, the stereo models produce relatively smaller errors than monocular models except the Metric3D V2 [12] monocular model performing closer to the stereo models. The median relative planarity and scale-normalized planarity deviation quantify local smoothness of a patch. We see that 3 monocular models (Metric3D V2 [12], UniDepth
V2 [29] and Depth Anything V2 [45])) and two stereo models (MonSter [6] and DEFOM [17]) produce locally smoother patches. Across all four metrics, we see clear trends with inflection points around focal length of 60 − 65mm for a constant relative aperture of f /2.8, and low sensitivity to aperture variation for a constant focal length of 70mm. The focal length performance bias for 60 − 65mm may be explained with typically wide field-of-view training datasets that aim to include many objects over b-
road scene in each image. Moderate trends favoring aperture f /22 may suggest depthmodel preference for sharp images. Further experiments around these trends could benefit analysis of model robustness as well as design of new depth datasets for training, evaluation and model selection.
B. Deblurring Methods
Multiple pre-trained network checkpoints trained with different objectives are available for the three state-of-the-art deblurring methods EVSSM [23], FFTFormer [22], and Restormer [49]. For each method, we evaluated all available checkpoints across a common set of images with PSNR, SSIM, and LPIPS metrics. We then picked the best performing checkpoints for the respective methods. Quantitative results are discussed in Table 2 in Section 3.4. When tested on 100 images for each of five focal lengths-
, Restormer performs the best. This trend is also evident in the qualitative comparison presented in Figure 6, where the visual difference between Restormer and the other two methods is clearly noticeable. In general, Restormer produces visually pleasing and relatively sharper results. In the region with small LED lights, Restormer demonstrates some struggle compared to other image regions. EVSSM and FFTFormer show more blur in this region. This indicates potential need for new training images to -
learn to deblur light-bokeh with these models.
C. Multi-view Stereo Methods
For our experiments, we selected Scene 1 at focal length 28mm with aperture f/9.0 using both left and right camera images, this configuration provides the best balance of geometric and optical conditions for classical MVS pipelines. The 28 mm focal length offers a wide field of view with strong parallax, giving MVS abundant viewpoint diversity for triangulation. While wider apertures (e.g., f/2.8 or f/5.0) would introduce shallow depth-of-field and blurred regions, reducing the texture needed for -
reliable PatchMatch corre
9

fl28 fl32 fl36 fl40 fl45 fl60 fl65 fl70 Focal Length (mm)
0.8
1.0
1.2
1.4
Magnitude
Median IQR Error
F2.8 F5.0 F9.0 F16.0 F22.0 Aperture (F)
0.8
1.0
1.2
1.4
Magnitude
fl28 fl32 fl36 fl40 fl45 fl60 fl65 fl70 Focal Length (mm)
0.0
0.2
0.4
0.6
0.8
1.0
1.2
Median Gradient Error
F2.8 F5.0 F9.0 F16.0 F22.0 Aperture (F)
0.0
0.2
0.4
0.6
0.8
1.0
1.2
fl28 fl32 fl36 fl40 fl45 fl60 fl65 fl70 Focal Length (mm)
0.00
0.25
0.50
0.75
1.00
1.25
Median Relative Planarity Magnitude (x1e4)
F2.8 F5.0 F9.0 F16.0 F22.0 Aperture (F)
0.00
0.25
0.50
0.75
1.00
1.25
fl28 fl32 fl36 fl40 fl45 fl60 fl65 fl70 Focal Length (mm)
0.01
0.02
0.03
0.04
Median Scale-normalized Planarity Deviation (x1e6)
F2.8 F5.0 F9.0 F16.0 F22.0 Aperture (F)
0.01
0.02
0.03
0.04
m:DepthPro s:MonSter
m:Metric3D s:Foundation
m:UniDepth s:DEFOM
m:DAV2 s:Selective
Figure 5. Ablation study across focal lengths (top row) and apertures (bottom row) for state-of-the-art four monocular and four stereo depth models for four unitless metrics. Monocular and stereo models are denoted by m: and s: prefix, respectively.
Input (Blurry) EVSSM FFTFormer Restormer Ground Truth
Input (Blurry) EVSSM FFTFormer Restormer Ground Truth
Input (Blurry) EVSSM FFTFormer Restormer Ground Truth
Figure 6. Visualization of three state-of-the-art deblurring methods on three images from Scene 1 of our dataset.
spondence, the small apertures (e.g., f/16.0 or f/22.0) increase depth of field but cause diffraction softness, lowering image contrast and weakening MVS photometric matching. The f/9.0 setting provides the optimal balance: enough depth of field to keep the entire scene sharp while maintaining high-frequency detail, leading to more stable and dense reconstructions.
The COLMAP reconstruction result (Figure 7(a)) captures the overall geometry of the scene, successfully recovering the large giraffe backdrop. However, the point cloud exhibits substantial noise and fragmentation in other paintings and forefront objects, particularly in low-texture surfaces and visually complex regions. Even the backdrop wall shows speckled depth inconsistencies, where COLMAP struggles with repetitive patterns and shallow shading cues.
The foreground decorations produce scattered points due to specular highlights, color saturation, and fine geometric detail that PatchMatch fails to match consistently. Planar printed areas on the right appear with warped or missing parts, reflecting ambiguity in photometric matching. Although COLMAP preserves the global layout, the reconstruction result remains incomplete and unstable at fine scales, highlighting the sensitivity of classical MVS to blur, lighting variation, and non-Lambertian mat-
erials present in real optical scenes.
The OpenMVS reconstruction result (Figure 7(b)) captures the global scene layout reliably and achieves dense reconstruction in textured regions. However, OpenMVS continues to struggle with glossy materials, low-texture surfaces, thin structures, and printed high-frequency pat
10

terns, producing noise, depth scattering, and warped planar surfaces, due to the limitations characteristic of classical PatchMatch-based MVS.
Compared with COLMAP and OpenMVS, the learningbased MapAnything reconstruction (Figure 7(c)) is smoother, denser, and more globally consistent, especially on large surfaces such as the giraffe backdrop, the wall, the floor, and the table cloth. The model produces far fewer floating points and significantly less high-frequency noise, yielding a more coherent and visually plausible 3D surface across the entire scene. This learning-based approach also preserves coarse object shapes better and is more-
 tolerant to low-texture areas and lighting inconsistencies that caused severe fragmentation in the classical MVS results. However, this method still exhibits common learning-based failure modes: fine geometric details (e.g., thin branches, wires, object edges) are over-smoothed or lost, and planar printed regions may appear slightly warped due to the model’s appearance-driven priors. Overall, MapAnything offers substantially improved stability and completeness over COLMAP and OpenMVS, while tradi-
ng off some geometric sharpness and fine-scale accuracy.
D. 3D Reconstruction via Gaussian Splatting
We further evaluate the capability of recent neural rendering techniques to reconstruct scenes from our dataset. Specifically, we employ Splatt3R [35], a SOTA 3D Gaussian splatting method, to generate a volumetric representation from a sequence of diverse views. Figure 8 visualizes novel view renderings obtained from the Splatt3R reconstruction. Left column shows two images from the dataset, right column shows model outputs. Despite the method’s established success on baseline benchmarks, it exhib-
its notable limitations in the scene. Specifically in this example, the model struggles to resolve high-frequency details on the tabletop objects. Additionally, we observe persistent failure modes related to optical illusions, where the model erroneously assigns significant geometric depth to flat, textured planar surfaces. These artifacts indicate that such visual ambiguities are not perfectly resolved by the optimized Gaussian set.
E. Upcoming work
As demonstrated in this paper, state-of-the-art methods in many practical applications demonstrate performance challenge when evaluated with real-world scenes across broad range of camera optics. We aim to advance research frontiers in some of these directions based on above findings. Our code and dataset links will be made available with the camera-ready version for purely non-commercial and academic research purposes.
(a) 3D reconstruction results by COLMAP
(b) 3D reconstruction results by OpenMVS
(c) 3D reconstruction results from MapAnything [18].
Figure 7. Comparison of 3D scene reconstruction results among two classical MVS methods and one learning based MVS method: (a) COLMAP, (b) OpenMVS, and (c) MapAnything.
Figure 8. Qualitative Splatt3R [35] results highlighting Gaussian splatting shortcomings.
11

References
[1] Abdullah Abuolaim, Abhijith Punnappurath, and Michael S Brown. Dpdd: A deep photographic defocus dataset. In 2019 IEEE/CVF International Conference on Computer Vision (ICCV), pages 611–619. IEEE, 2019. [2] Aleksei Bochkovskii, Amae ̈l Delaunoy, Hugo Germain, Marcel Santos, Yichao Zhou, Stephan R. Richter, and Vladlen Koltun. Depth pro: Sharp monocular metric depth in less than a second, 2024. [3] Daniel J Butler, Jonas Wulff, Garrett B Stanley, and Michael J Black. A naturalistic open source m-
ovie for optical flow evaluation. In European conference on computer vision, pages 611–625. Springer, 2012. [4] Dan Cernea. OpenMVS: Multi-view stereo reconstruction library. 2020. [5] Angel Chang, Angela Dai, Thomas Funkhouser, Maciej Halber, Matthias Nießner, Manolis Savva, Shuran Song, Andy Zeng, and Yinda Zhang. Matterport3d: Learning from rgb-d data in indoor environments. In International Conference on 3D Vision (3DV), pages 667–676. IEEE, 2017. [6] Junda Cheng, Xueqin Wang, Wei Wang, Lei Zh-
u, Jian Liu, Xinyu Li, and Others. Monster: Marry monodepth to stereo unleashes power. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), pages 10186–10196, 2025. [7] Zhaopeng Cui, Jinwei Gu, Boxin Shi, Ping Tan, and Jan Kautz. Polarimetric multi-view stereo. In 2017 IEEE Conference on Computer Vision and Pattern Recognition (CVPR), pages 369–378, 2017. [8] Angela Dai, Angel X Chang, Manolis Savva, Maciej Halber, Thomas Funkhouser, and Matthias Nießner. Sc-
annet: Richly-annotated 3d reconstructions of indoor scenes. In Proceedings of the IEEE conference on computer vision and pattern recognition, pages 5828–5839, 2017. [9] Adrien Gaidon, Qiao Wang, Yohann Cabon, and Eleonora Vig. Virtual kitti: A synthetic dataset for evaluating stereo and optical flow. In 2016 IEEE Conference on Computer Vision and Pattern Recognition (CVPR), pages 1–10. IEEE, 2016. [10] Suman Garg, Qiao Wang, Siyuan Chen, Yanan Liu, Yuxuan Li, Yujie Wang, Wenqiang Zhang, Raquel Ur-
tasun, and Yukun Li. Ddad: A real-world dataset for unsupervised deep-learning-based depth and ego-motion estimation. In 2020 IEEE International Conference on Robotics and Automation (ICRA), pages 7089–7095. IEEE, 2020. [11] Andreas Geiger, Philip Lenz, and Raquel Urtasun. Are we ready for autonomous driving? the kitti vision benchmark suite. In 2012 IEEE Conference on Computer Vision and Pattern Recognition, pages 3354–3361. IEEE, 2012. [12] Mu Hu, Wei Yin, Chi Zhang, Zhipeng Cai, Xiaoxiao Long, -
Hao Chen, Kaixuan Wang, Gang Yu, Chunhua Shen, and Shaojie Shen. Metric3d v2: A versatile monocular geometric foundation model for zero-shot metric depth and surface normal estimation. IEEE Transactions on Pattern Analysis and Machine Intelligence, 46(12):10579–10596, 2024. [13] Thomas Huang, Fu-Jen Tung, Yirui Sun, and Michael S Brown. Vabd: A video aberration and blur dataset. In
2024 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), pages 25016–25026. IEEE, 2024. [14] Andrey Ignatov, Jagruti Patel, and Radu Timofte. Rendering natural camera bokeh effect with deep learning. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition Workshops, pages 418–419, 2020.
[15] Andrey Ignatov, Radu Timofte, Ming Qian, Congyu Qiao, Jiamin Lin, Zhenyu Guo, Chenghua Li, Cong Leng, Jian Cheng, Juewen Peng, et al. Aim 2020 challenge on rendering realistic bokeh. In European Conference on Computer Vision, pages 213–228. Springer, 2020. [16] Zexi Jia, Chuanwei Huang, Yeshuang Zhu, Hongyan Fei, Xiaoyue Duan, Zhiqiang Yuan, Ying Deng, Jiapei Zhang, Jinchao Zhang, and Jie Zhou. Secret lies in color: Enhancing ai-generated images detection with color distribution analysis. In -
Proceedings of the Computer Vision and Pattern Recognition Conference, pages 13445–13454, 2025. [17] Hualie Jiang, Zexian Lou, Li Ding, Rui Xu, Mingtan Tan, Wei Jiang, and Rong Huang. DEFOM-Stereo: Depth foundation model based stereo matching. In IEEE International Conference on Computer Vision and Pattern Recognition (CVPR), 2025.
[18] Nikhil Keetha, Norman Mu ̈ller, Johannes Scho ̈nberger, Lorenzo Porzi, Yuchen Zhang, Tobias Fischer, Arno Knapitsch, Duncan Zauss, Ethan Weber, Nelson Antunes, et al. Mapanything: Universal feed-forward metric 3d reconstruction. arXiv preprint arXiv:2509.13414, 2025.
[19] Bernhard Kerbl, Georgios Kopanas, Thomas Leimku ̈hler, and George Drettakis. 3d gaussian splatting for real-time radiance field rendering, 2023. [20] Tobias Koch, Lukas Liebel, Friedrich Fraundorfer, and Marco Korner. Evaluation of cnn-based single-image depth estimation methods. In Proceedings of the European Conference on Computer Vision (ECCV) Workshops, pages 0–0, 2018. [21] Tobias Koch, Christian Hane, Johannes Jordan, and Friedrich Fraundorfer. ibims-1: A dataset for rigid multi-view st-
ereo. In 2020 IEEE International Conference on Robotics and Automation (ICRA), pages 7065–7071. IEEE, 2020. [22] Lingshun Kong, Jiangxin Dong, Jianjun Ge, Mingqiang Li, and Jinshan Pan. Efficient frequency domain-based transformers for high-quality image deblurring. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pages 5886–5895, 2023. [23] Lingshun Kong, Jiangxin Dong, Jinhui Tang, Ming-Hsuan Yang, and Jinshan Pan. Efficient visual state space model for image-
 deblurring. In Proceedings of the Computer Vision and Pattern Recognition Conference, pages 12710–12719, 2025. [24] Hamid Laga, Sutanu Jati, Ilaria Falco, Simone Melzi, Marco Manzo, Freek Stulp, Umberto Castellani, Antti Oulasvirta, and Chi Ren. Hammer: a large-scale, hand-object, multiview, temporally-and-spatially-annotated dataset. In 2022 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), pages 21008–21017. IEEE, 2022. [25] Ben Mildenhall, Pratul P. Srinivasan, Matthew Tan-
cik, Jonathan T. Barron, Ravi Ramamoorthi, and Ren Ng. Nerf:
12

Representing scenes as neural radiance fields for view synthesis, 2020. [26] Seungjun Nah, Tae Hyun Kim, and Kyoung Mu Lee. Deep multi-scale convolutional neural network for dynamic scene deblurring. In Proceedings of the IEEE conference on computer vision and pattern recognition, pages 2671–2680, 2017. [27] Juewen Peng, Zhiguo Cao, Xianrui Luo, Hao Lu, Ke Xian, and Jianming Zhang. Bokehme: When neural rendering meets classical rendering. In Proceedings of the IEEE/CVF International Conference on-
 Computer Vision and Pattern Recognition (CVPR), 2022.
[28] Juewen Peng, Zhiguo Cao, Xianrui Luo, Hao Lu, Ke Xian, and Jianming Zhang. Bokehme: When neural rendering meets classical rendering. In Proceedings of the IEEE/CVF conference on computer vision and pattern recognition, pages 16283–16292, 2022. [29] Luigi Piccinelli, Christos Sakaridis, Yung-Hsu Yang, Mattia Segu, Siyuan Li, Wim Abbeloos, and Luc Van Gool. Unidepthv2: Universal monocular metric depth estimation made simpler, 2025. [30] Johannes Lutz Sch ̈onberger and Jan-Michael Frahm. Structu-
re-from-motion revisited. In Conference on Computer Vision and Pattern Recognition (CVPR), 2016.
[31] Johannes Lutz Scho ̈nberger, Enliang Zheng, Marc Pollefeys, and Jan-Michael Frahm. Pixelwise view selection for unstructured multi-view stereo. In European Conference on Computer Vision (ECCV), 2016.
[32] Thomas Scho ̈ps, Johannes L Scho ̈nberger, Silvano Galliani, Torsten Sattler, Konrad Schindler, Marc Pollefeys, and Andreas Geiger. Eth3d: A benchmark for multi-view stereo. In 2017 IEEE Conference on Computer Vision and Pattern Recognition (CVPR), pages 3954–3963. IEEE, 2017. [33] Yichen Sheng, Zixun Yu, Lu Ling, Zhiwen Cao, Xuaner Zhang, Xin Lu, Ke Xian, Haiting Lin, and Bedrich Benes. Dr. bokeh: Differentiable occlusion-aware bokeh rendering. In Proceedings of the IEEE/CVF Conference on Co-
mputer Vision and Pattern Recognition, pages 4515–4525, 2024.
[34] Nathan Silberman, Derek Hoiem, Pushmeet Kohli, and Rob Fergus. Indoor segmentation and support inference from rgbd images. In European conference on computer vision, pages 746–760. Springer, 2012. [35] Brandon Smart, Chuanxia Zheng, Iro Laina, and Victor Adrian Prisacariu. Splatt3r: Zero-shot gaussian splatting from uncalibrated image pairs. arXiv preprint arXiv:2408.13912, 2024.
[36] Julian Straub, Manel Galindo, Dhruv Jayaraman, Sudeep Ramakrishnan, Daniel Gordon, Richard Newcombe, Georgia Gkioxari, and Jitendra Malik. The replica dataset: A digital replica of indoor spaces. arXiv preprint arXiv:1906.05797, 2019. [37] Ju ̈rgen Sturm, Jakob Engel, and Daniel Cremers. A benchmark for the evaluation of rgb-d slam systems. In 2012 IEEE/RSJ International Conference on Intelligent Robots and Systems, pages 573–580. IEEE, 2012. [38] Igor Vlasic, Maria Shugrina, Or Litany, Angel-
a Dai, and Matthias Nießner. Diode: A dense indoor and outdoor depth
dataset. In 2019 International Conference on 3D Vision (3DV), pages 310–320. IEEE, 2019. [39] Lei Wang, Jian-Fang Zhang, Yebin Wang, Kun Yu, Yizhou Liu, and Tian Wu. Void: A new dataset and a baseline for void region filling. In IEEE Transactions on Pattern Analysis and Machine Intelligence, pages 3155–3169. IEEE, 2020. [40] Xianqi Wang, Gangwei Xu, Hao Jia, and Xin Yang. Selective-stereo: Adaptive frequency information selection for stereo matching. In Proceedings of the IEEE/CVF Conference on Co-
mputer Vision and Pattern Recognition, pages 19701–19710, 2024. [41] Bowen Wen, Matthew Trepte, Joseph Aribido, Jan Kautz, Orazio Gallo, and Stan Birchfield. Foundationstereo: Zeroshot stereo matching. CVPR, 2025. [42] Bowen Wen, Matthew Trepte, Joseph Aribido, Jan Kautz, Orazio Gallo, and Stan Birchfield. Foundationstereo: Zeroshot stereo matching. CVPR, 2025. [43] Alex Wong, Wei-Chih Chiu, and Stefano Soatto. Unsupervised monocular depth learning in dynamic scenes. In Conference on Robot Learnin-
g, pages 1016–1031. PMLR, 2020. [44] Kohei Yamashita, Yuto Enyo, Shohei Nobuhara, and Ko Nishino. nlmvs-net: Deep non-lambertian multi-view stereo. In Proceedings of the IEEE/CVF Winter Conference on Applications of Computer Vision (WACV), 2023.
[45] Lihe Yang, Bingyi Kang, Zilong Huang, Zhen Zhao, Xiaogang Xu, Jiashi Feng, and Hengshuang Zhao. Depth anything v2, 2024. [46] Xuyuan Yang and Guang Jiang. A practical 3d reconstruction method for weak texture scenes. Remote Sensing, 13 (16), 2021. [47] Chengtang Yao, Zhidan Liu, Jiaxi Zeng, Lidong Yu, Yuwei Wu, and Yunde Jia. 3d visual illusion depth estimation. arXiv preprint arXiv:2505.13061, 2025.
[48] Chandan Yeshwanth, Shubham Tulsiani, Ishan Nerurkar, Georgia Gkioxari, Jitendra Malik, and Angela Dai. Scannet++: A high-fidelity dataset of 3d indoor scenes. In 2024 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), pages 20997–21007. IEEE, 2024. [49] Syed Waqas Zamir, Aditya Arora, Salman Khan, Munawar Hayat, Fahad Shahbaz Khan, and Ming-Hsuan Yang. Restormer: Efficient transformer for high-resolution image restoration. In Proceedings of the IEEE/CVF conference on compu-
ter vision and pattern recognition, pages 5728–5739, 2022. [50] Jhih-Ciang Zheng, Fu-Jen Tung, and Michael S Brown. Blur-aware lens blur synthesis. In 2022 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), pages 17845–17854. IEEE, 2022. [51] Chengxuan Zhu, Qingnan Fan, Qi Zhang, Jinwei Chen, Huaqi Zhang, Chao Xu, and Boxin Shi. Bokehdiff: Neural lens blur with one-step diffusion. In Proceedings of the IEEE/CVF International Conference on Computer Vision, pages 9508–9518, 2025.
13

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:18.749Z
- **Text Length:** 57684 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 13 of 13
