# PDF Document: Mo et al. - 2025 - Enhanced Landmark Detection Model in Pelvic Fluoroscopy using 2D3D Registration Loss.pdf

**File Path:** Mo et al. - 2025 - Enhanced Landmark Detection Model in Pelvic Fluoroscopy using 2D3D Registration Loss.pdf

**Processed Date:** 2026-02-10T18:13:32.242Z

**File Size:** 2740.61 KB

**Total Pages:** 9

**Extracted Pages:** 9

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3785

**Title:** Enhanced Landmark Detection Model in Pelvic Fluoroscopy using 2D/3D Registration Loss

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Enhanced Landmark Detection Model in Pelvic Fluoroscopy
using 2D/3D Registration Loss
Chou Mo1,2,4,*, Yehyun Suh1,2,3,*, J. Ryan Martin5, and Daniel Moyer1,2,3,†
1Department of Computer Science, Vanderbilt University, Nashville, TN, USA 2Vanderbilt Institute for Surgery and Engineering, Nashville, TN, USA 3Vanderbilt Lab for Immersive AI Translation, Nashville, TN, USA 4Department of Mathematics, University of California-Los Angeles, Los Angeles, CA, USA 5Department of Orthopedic Surgery, Vanderbilt University Medical Center, Nashville, TN, USA
ABSTRACT
Automated landmark detection offers an efficient approach for medical professionals to understand patient anatomic structure and positioning using intra-operative imaging. While current detection methods for pelvic fluoroscopy demonstrate promising accuracy, most assume a fixed Antero-Posterior view of the pelvis. However, orientation often deviates from this standard view, either due to repositioning of the imaging unit or of the target structure itself. To address this limitation, we propose a n-
ovel framework that incorporates 2D/3D landmark registration into the training of a U-Net landmark prediction model. We analyze the performance difference by comparing landmark detection accuracy between the baseline U-Net, U-Net trained with Pose Estimation Loss, and U-Net fine-tuned with Pose Estimation Loss under realistic intra-operative conditions where patient pose is variable.
Keywords: Landmark Prediction, Landmark-based 2D/3D Registration, Pelvic Fluoroscopy, Pose Estimation
1. INTRODUCTION
Anatomical landmark detection is the process of identifying clinically significant points on medical images that correspond to specific anatomical structures in the underlying physical anatomy. The landmarks in radiographic images function as reference points for surgical planning, post-operative assessment, and other biomechanical analyses.1–3 This is particularly significant in orthopedic procedures for the pelvic region, where complex threedimensional (3D) bone structure is often interpreted fr-
om two-dimensional (2D) projections. Landmarking on the pelvic bone presents difficulties due to its wide anatomical differences between patients, overlapping bone structures in projected radiographs, and the irregular geometry of key structures such as the acetabulum and sacroiliac joints.
The accurate localization and pose estimation of the pelvis is important for Total Hip Arthroplasty (THA), as it guides surgeons in proper component placement and achieving the optimal biomechanical alignment. The acetabular rim serves as a reference for cup placement, while the femoral head center helps determine hip joint mechanics, and the greater trochanter assists with soft tissue balancing. Further, the assessment of gait and loading patterns, together with developmental dysplasia evaluation-
 and trauma surgery, requires pelvic landmarks as crucial references. The traditional method of radiographic landmark annotation through manual marking requires extensive expertise and yields significant observer variability,4 which could impact both surgical outcomes and research reliability.
2D/3D registration is the process of finding dense correspondences between a preoperative 3D volume, commonly collected from CT scans, with an intraoperative 2D image, such as fluoroscopy or X-rays. This is usually parameterized by an explicit rigid transformation; the objective of 2D/3D registration amounts to estimating the camera pose θ ∈ SE(3), which is a 6-degrees of freedom transformation (three rotational variables and
*Equal Contribution, †Corresponding Author, Daniel Moyer: daniel.moyer@vanderbilt.edu
arXiv:2511.21575v1 [cs.CV] 26 Nov 2025

three translational variables).5–7 In the surgical context, the “camera pose” represents the 3D orientation of the imaging device relative to the patient’s anatomy (though in fluroscopy this is actually the X-ray source and detector). Aligning and projecting an entire 3D volume is computationally consuming, which is why anatomical landmarks are adopted as correspondence points for 2D/3D registration. With 3D landmarks and camera pose that illustrate the 3D orientation in which the 2D radiograph i-
s taken, models can more accurately locate the 2D position of landmarks on any designated radiograph of that same 3D volume.
Method proposed in Suh et al. 20238 uses a U-Net9 structure to detect landmarks, which treat the landmarking problem as a semantic segmentation task. In this work, a probability map is generated from the trained U-Net, and landmarks are extracted based on the maximum probability of a landmark being located at a particular pixel location. While this approach has been proven effective for segmentation tasks in other fields, it is limited in precisely locating landmarks. Existing training methods ado-
pt pixel-wise cross-entropy loss between the output probability maps and ground truth masks. This method does not directly penalize spatial inaccuracies in landmark locating - i.e., a network can achieve a low segmentation loss but produce landmarks that are pixels away from their true anatomical locations. Meanwhile, more intuitively, it may be more efficient to prioritize the geometric distance error between the predicted and ground truth landmark coordinates in a landmark detection model.
To address these limitations, we propose integrating pose estimation loss into the landmark detection framework. Using pose estimation loss, the model explicitly accounts for the geometric error between the predicted 2D landmark coordinates and their ground truth coordinates. Our approach recognizes that accurate landmark detection and camera pose estimation are coupled problems: small deviations in 2D predictions can lead to significant pose errors. Therefore, instead of basing optimization solel-
y on probability map loss, we introduce a pose estimation loss component that directly penalizes the Euclidean distance error. We experimentally show that fine-tuning with pose estimation loss improves landmark detection accuracy. In this study, we compared three model structures: a U-Net trained exclusively with pose estimation loss, a U-Net trained with a composite loss function (a combination of segmentation loss with weighted pose estimation loss), and a U-Net that is initially trained with se-
gmentation loss and subsequently fine-tuned using pose estimation loss.
2. METHOD
2.1 Landmark Prediction Model
Given an input image I, the U-Net outputs a heatmap hi(x, y) for each of the landmarks i ∈ {1, ..., 8}, representing the likelihood of the ith landmark located at the pixel (x, y). We adopt Soft-Argmax as a differentiable method to extracting the 2D landmarks from heatmaps:
ˆli = (xˆi, yˆi) =
W −1
X
x=0
H −1
X
y=0
x · softmax(hi)(x,y),
W −1
X
x=0
H −1
X
y=0
y · softmax(hi)(x,y)
!
(1)
softmax(hi)(x,y) = exp(hi(x, y)/τ )
P
x′,y′ exp(hi(x′, y′)/τ ) (2)
Where W and H denote the width and height of the heatmap, respectively, τ is the temperature parameter that controls the sharpness of the softmax distribution, and (x′, y′) are dummy indices used to normalize the softmax over all spatial locations in the heatmap.
2.2 Camera Pose and Landmark-based 2D/3D Registration
We define the orientation of the medical imaging camera as a rigid body transformation with 6 degrees of freedom. The camera pose θ consists of three rotation parameters R ∈ SO(3) and three translation parameters t ∈ R3. The rotations R are parameterized by (rx, ry, rz), representing an Euler angle rotation around the three axes, while the translations are parameterized by (tx, ty, tz), representing the displacement from the origin, which we define to be the center of the CT volume.
By convention, landmark-based 2D/3D registration is computed by extracting the ground truth 3D coordinates of landmarks LGT ∈ M8×3(R) on the CT and the predicted 2D coordinates of landmarks lpred ∈ M8×2(R)

that are output from U-Net, then finding the pose θ that aligns the projection of the 3D coordinates and the 2D coordinates.10 We conduct the registration using a limited memory Broyden-Fletcher-Goldfarb-Shanno (L-BFGS) PyTorch optimizer,11 aiming to minimize the loss function:
θ∗ = arg mθin L(θ). (3)
We define the loss function L(θ) as a sum of squared residuals:
L(θ) =
N
X
i=1
ˆli(θ) − li
2
(4)
where θ = (rx, ry, rz, tx, ty, tz) ∈ R6 is the 6-DoF pose parameter vector, ˆli(θ) is the predicted 2D landmarks of the i-th 3D landmark under pose θ, li is the U-Net outputted 2D landmarks, and N is the number of landmarks. The residual is computed via our perspective projection calculations, which align with DiffDRR projections (see the appendix for more details).
2.3 Pose Estimation
We solve for the optimal pose θ∗ with gradient-based optimization, given predicted 2D landmark coordinates from U-Net li ∈ M8×2(R) and the ground truth 3D landmark coordinates from the CT volume LGT ∈ M8×3(R). As described in Section 2.2, we minimize the loss function defined in Equation (4).
The rotations R ∈ SO(3) are parameterized using the Rodrigues formula. The formula maps a 3-dimensional rotation vector r = (rx, ry, rz) ∈ R3 to a rotation matrix. The magnitude ∥r∥ denotes the rotation angle, while the direction denotes the rotation axis. The rotation matrix is defined as:
R = I + sin(θ) · K + (1 − cos(θ)) · K2 (5)
where θ = ∥r∥, I ∈ R3×3 is the identity matrix, and K is the skew-symmetric matrix constructed from the unit axis rˆ = r/θ:
K=


0 −rˆz rˆy rˆz 0 −rˆx −rˆy rˆx 0

 (6)
This parameterization ensures that R fulfills the orthogonality constraint RT R = I with only three parameters.
In the perspective projection calculation,12 ˆli(θ) transforms each 3D landmark pi ∈ LGT to its corresponding 2D image coordinates. The camera intrinsic matrix K ∈ R3×3 includes information about the source-to-detector distance (SDD) and principal point. The projection is computed as the following:
p′
i = Rpi + t (7)
lˆi = 1
z′
i
K11x′
i + K13z′
i
K22y′
i + K23z′
i
(8)
where p′
i = (x′
i, y′
i, z′
i)T are the transformed 3D coordinates. Further, the z′
i are clamped to a minimum value of
10−3 before performing the perspective division for numerical stability.
We initialize the optimization with r(0) = 0 and t(0) = 0, corresponding to the identity transformation. At each iteration, the loss L(θ) from Equation (4) is computed via forward projection, while the gradients ∂L/∂r and ∂L/∂t are computed through automatic differentiation. We adopt the Adam optimizer with learning rate η = 10−3 to update the pose parameters. To prevent numerical instability, we constrain r ∈ [−2π, 2π] and t within physically reasonable bounds (as specified in Section 3.1). The o-
ptimization ends after a maximum of 100 iterations, yielding the estimated pose θˆ = (rˆ, tˆ).

Figure 1. Model pipeline diagram for three tested models. From top to bottom: (a) Baseline U-Net, (b) U-Net trained on pose estimation loss, and (c) U-Net fine-tuned on pose estimation loss. θ denotes the predicted pose, and θ∗ denotes the ground truth pose.
2.4 Pose Estimation Loss based Landmark Prediction Model
We evaluated three training strategies for landmark detection using a U-Net architecture: Baseline U-Net, U-Net trained on pose estimation loss, and U-Net fine-tuned on pose estimation loss. Each of the three pipelines adopts a different loss mechanism to optimize landmark detection accuracy. The model pipeline architectures and testing process are illustrated in Figure 3.
The Baseline U-Net (Figure 3a) employs a standard U-Net architecture trained with segmentation loss. During training, the model is optimized using Binary Cross-Entropy with Logits Loss (BCEWithLogitsLoss), evaluating the loss between the U-Net probability heatmap and the ground truth mask. The second approach, U-Net trained on pose estimation loss, (Figure 3b) introduces a composite pose estimation loss component during training. The composite pose estimation loss function is formulated as:
Lcomposite = Lseg + λ · Lpose (9)
where λ is the pose loss weighting factor. The pose estimation loss is computed as:
Lpose =
v u u t
1 6
6
X
j=1
(θj − θ∗
j )2 (10)

The pose estimation loss component requires converting the predicted heatmaps to 2D landmark coordinates using differentiable soft-argmax (as shown in Equation 1), followed by 2D/3D registration to estimate the 6 degrees of freedom pose (as shown in Equation 4).
The U-Net fine-tuned on pose estimation loss (Figure 3c) adopts a two-stage training strategy: In the first stage, the U-Net is trained using only segmentation loss as in the baseline model. In the second stage, fine-tuning is conducted on the pre-trained model using only the pose estimation loss. Similar to the U-Net trained on pose estimation loss, pose estimation in fine-tuning is calculated via 2D/3D registration with the L-BFGS optimizer (see Equation 4).
3. EXPERIMENTS
3.1 Data and Experimental Setting
Figure 2. Landmark placement of eight anatomical landmarks on the pelvic bone, enlarged for visualization.
We gathered ninety CT scans for our training and testing dataset from the CTPEL Database.13 Eight landmarks were manually placed on each CT scan via Slicer,14 following the placement defined by Grupp, et al.10 As shown in Fig. 2, Landmarks 1 and 8 are the left and right anterior superior iliac spine (ASIS), 2 and 7 are the left and right inferior obturator foramen (IOF), 3 and 6 are the left and right medial obturator foramen (MOF), 4 is the superior pubis symphysis (SPS), while 5 is the inferior -
pubis symphysis (IPS). From the dataset, eighty scans were used for training all three models, and ten were used for evaluation. One-hundred simulated X-ray images were generated for each CT scan using DiffDRR.15 The source-to-detector distance was set to 1020 mm, and the image size 768 × 768. All images are then rescaled to 512 × 512 prior to training.
Random rotations (rx, ry, rz) within the range of [−45, 45] degrees and random translations (tx, ty, tz) within the range of [−50, 50] were applied for image and landmark projection using DiffDRR. Before passing into pose estimation, loaded 3D voxel coordinates are transformed and centered to real-world coordinates through LGT = (Lvoxel − C) × SCT . C is the center of the CT volume, and SCT denotes the pixel spacing of the CT scan in x, y, and z direction. Then, an additional y-direction displacem-
ent of the volume-to-detector distance is added to the LGT coordinates. Further, the extracted predicted 2D coordinates lˆ also undergo several transformations prior to pose estimation: (1) Scale adjustment for X-ray image rescaling: lˆ · 768
512
(2) X-value centering: lˆ[:, 0] − 768
2
(3) Y-value inversion and centering: −(lˆ[:, 1] − 768
2)
All three models are trained with a learning rate 1 × 10−4, and the seed is set to 42. The Baseline U-Net is trained for 28 epochs, with encoder depth 5, the U-Net trained on pose estimation loss is trained for 28 epochs, and the U-Net fine-tuned on pose estimation loss is fine-tuned for one epoch.

Dataset Model RMSE (pixels)
Mean L1 L2 L3 L4 L5 L6 L7 L8
Novel View
Baseline U-Net 8.58 11.49 4.71 12.34 16.66 5.43 6.87 6.00 5.17 U-Net Trained w/PEL 20.82 39.95 13.83 28.34 19.51 15.36 14.02 20.00 15.54 U-Net Trained w/Only PEL DIV - - - - - - - U-Net Fine-Tuned w/PEL 8.45 10.27 6.67 14.02 17.75 3.67 7.18 4.12 3.89
Novel Subject
Baseline U-Net 5.58 5.68 8.33 4.68 4.01 8.65 4.07 3.07 6.12 U-Net Trained w/PEL 11.73 11.63 23.33 10.59 6.15 10.38 7.7 10.46 13.57 U-Net Trained w/Only PEL DIV - - - - - - - U-Net Fine-Tuned w/PEL 5.09 7.45 8.01 4.68 2.03 2.03 7.52 4.48 4.48 Table 1. RMSE comparison of different approaches’ performance on the novel view set and the held-out subject set. Pose Estimation Loss is abbreviated as PEL.
3.2 Evaluation
All three models are evaluated through the same pipeline. As shown in the bottom section of Figure 3, predicted 2D landmark coordinates are extracted from probability heatmaps using Argmax, which are then compared with the ground truth 2D landmarks to arrive at a Root Mean Square Error (RMSE) across all landmarks and per landmark. The ground truth 2D landmarks were extracted from the DiffDRR X-ray images during dataset generation. Each model was evaluated on 1600 images from unseen views from the -
eighty training CT scans (“Novel View” dataset) and on 1000 images for the ten evaluation CT scans (“Novel Subject” dataset).
4. RESULTS
As shown in Table 1, overall, the proposed fine-tuned U-Net with (composite) pose estimation loss (PEL) achieved improved landmark detection accuracy compared to the baseline U-Net and trained U-Net on PEL. All models performed better in the external test dataset - images that the models had not seen before - than in the internal test dataset.
The baseline U-Net achieved mean RMSE values of 8.58 mm and 5.58 mm on internal and external datasets, respectively. The U-Net fine-tuned with PEL showed consistent improvements, achieving 8.45 mm (1.5% improvement) and 5.09 mm (8.8% improvement) on the respective datasets.
The U-Net trained with composite PEL and with only PEL both showed a significant performance decline. Specifically, the U-Net trained with composite PEL had approximately 2.4 and 2.1 times increases in error relative to the baseline. This deterioration may be explained by the difference in optimization goals ingrained in the composite loss function. The segmentation loss component encourages the generation of smooth, bloblike probability distributions appropriate for semantic segmentation. Whereas-
 the PEL concurrently guides the network towards sharp, point-like distributions that reduce geometric registration error. The U-Net trained exclusively using PEL failed to converge during training, leading to divergence (shown as ”DIV” in Table 1). This finding suggests that pose estimation loss alone does not provide adequate gradient structure for efficient landmark detection learning from random initialization, as the 2D/3D registration component requires sufficiently precise landmark predicti-
ons to yield significant supervision signals.
In comparison to the internal test set, the external test set results demonstrate greater accuracy across all methods. The baseline U-Net achieved a 35% reduction in RMSE on external data (5.58mm compared to 8.58mm), while the fine-tuned method demonstrated a 40% improvement (5.09mm versus 8.45mm). This unexpected generalization capacity indicates that the models effectively adjusted to various imaging conditions or patient demographics present in the external dataset.
5. DISCUSSION
Although our proposed fine-tuning method yields promising results in enhancing landmark detection accuracy, several limitations require consideration. First, we adopted DiffDRR to generate simulated X-ray images for our evaluation. These images may not fully reflect the noise, artifacts, and variations in imaging that are present in real intraoperative fluoroscopy.16 The effectiveness of our method on clinical images has yet to be confirmed.17

Figure 3. Model pipeline diagram for three tested models. From top to bottom: (a) Baseline U-Net, (b) U-Net trained on pose estimation loss, and (c) U-Net fine-tuned on pose estimation loss. θ denotes the predicted pose, and θ∗ denotes the ground truth pose.

The present study focused on eight anatomical landmarks on the pelvic bone. Expanding this methodology to a broader array of landmarks or alternative anatomical regions may uncover different optimization results. A further limitation is the extra processing power needed for the L-BFGS optimization to operate in the training loop. Solving a nonlinear optimization problem is needed for each forward pass, which makes training take longer than with standard segmentation methods.
Future research may address these constraints via various approaches. First, validating on actual clinical fluoroscopy images with manually annotated ground truth would furnish more robust evidence for clinical relevance. Second, exploring different optimization algorithms or pose estimation methods based on learning could reduce the computational cost while maintaining consistent geometry. Third, exploring adaptive loss weighting schemes that automatically balance the goals of segmentation and po-
se estimation during training may help us overcome the optimization problems observed in our composite loss experiments. Lastly, adding temporal consistency to this framework for video fluoroscopy sequences could make it even easier to track landmarks during dynamic surgical procedures.
6. CONCLUSION
This study revealed that the integration of 2D/3D registration constraints through pose estimation loss can improve landmark detection accuracy when implemented through sequential fine-tuning instead of joint optimization. By fine-tuning the baseline U-Net for one epoch, the fine-tuned model achieved higher registration accuracy in internal and external test sets. The declined performance of composite loss training and pose estimation loss only methods underscores the significance of suitable trai-
ning curricula for medical imaging tasks. The sequential method effectively maintains spatial understanding from segmentation training while incorporating geometric constraints for improved localization precision. These findings establish a viable framework for incorporating 3D anatomical constraints into 2D landmark detection, illustrating that geometric consistency may be efficiently utilized to improve clinical accuracy through better optimization additions.
ACKNOWLEDGMENTS
This work was supported in part by NSF 2321684 and a VISE Seed Grant.
REFERENCES
[1] Moon, K.-R., Byon, S. S., Kim, S. H., and Lee, B.-D., “Automated assessment of pelvic radiographs using deep learning: A reliable diagnostic tool for pelvic malalignment,” Heliyon 10, e29677–e29677 (04 2024). [2] Mulford, K. L., Johnson, Q. J., Mujahed, T., Khosravi, B., Rouzrokh, P., Mickley, J. P., Taunton, M. J., and Wyles, C. C., “A deep learning tool for automated landmark annotation on hip and pelvis radiographs,” The Journal of arthroplasty 38, 2024–2031.e1 (10 2023).
[3] Suh, Y., Chan, P., Martin, J. R., and Moyer, D., “Label augmentation method for medical landmark detection in hip radiograph images,” arXiv preprint arXiv:2309.16066 (September 2023). https://arxiv. org/abs/2309.16066.
[4] Chan, P. Y., Baker, C. E., Suh, Y., Moyer, D., and Martin, J. R., “Development of a deep learning model for automating implant position in total hip arthroplasty,” The Journal of Arthroplasty (2025). [5] Gao, C., Liu, X., Gu, W., Killeen, B., Armand, M., Taylor, R., and Unberath, M., “Generalizing spatial transformers to projective geometry with applications to 2d/3d registration,” in [International Conference on Medical Image Computing and Computer-Assisted Intervention ], 329–339, Springer (-
2020).
[6] Unberath, M., Gao, C., Hu, Y., Judish, M., Taylor, R. H., Armand, M., and Grupp, R., “The impact of machine learning on 2d/3d registration for image-guided interventions: A systematic review and perspective,” Frontiers in Robotics and AI 8, 716007 (2021).
[7] Gopalakrishnan, V., Dey, N., and Golland, P., “Intraoperative 2d/3d image registration via differentiable xray rendering,” in [Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) ], 11662–11672 (June 2024). [8] Suh, Y., Mika, A., Martin, J. R., and Moyer, D., “Dilation-erosion methods for radiograph annotation in total knee replacement,” in [Medical Imaging with Deep Learning, short paper track], (2023).

[9] Ronneberger, O., Fischer, P., and Brox, T., “U-net: Convolutional networks for biomedical image segmentation,” (2015). [10] Grupp, R. B., Unberath, M., Gao, C., Hegeman, R. A., Murphy, R. J., Alexander, C. P., Otake, Y., McArthur, B. A., Armand, M., and Taylor, R. H., “Automatic annotation of hip anatomy in fluoroscopy for robust and efficient 2d/3d registration,” International journal of computer assisted radiology and surgery 15(5), 759–769 (2020). [11] Liu, D. C. and Nocedal, J., “On the l-
imited memory bfgs method for large scale optimization,” Mathematical Programming 45, 503–528 (08 1989). [12] Suh, Y., Martin, J. R., and Moyer, D., “2d/3d registration of acetabular hip implants under perspective projection and fully differentiable ellipse fitting,” in [Workshop on Clinical Image-Based Procedures ], 1–10, Springer (2025). [13] Connolly, B. and Wang, C., “Segmented ct pelvis scans with annotated anatomical landmarks.” Available: AIDA Data Hub (2019). [14] Pieper, S., Halle, M., an-
d Kikinis, R., “3d slicer,” in [2004 2nd IEEE international symposium on biomedical imaging: nano to macro (IEEE Cat No. 04EX821) ], 632–635, IEEE (2004).
[15] Gopalakrishnan, V. and Golland, P., “Fast auto-differentiable digitally reconstructed radiographs for solving inverse problems in intraoperative imaging,” in [Workshop on Clinical Image-Based Procedures ], 1–11, Springer (2022). [16] Paalvast, O. T., Hertgers, O., Sevenster, M., and Lamb, H. J., “Assessing the image quality of digitally reconstructed radiographs from chest ct,” Journal of Imaging Informatics in Medicine (01 2025). [17] Gopalakrishnan, V., Dey, N., and Golland, P., “Intraopera-
tive 2d/3d image registration via differentiable x-ray rendering,” (12 2023).

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:13:32.242Z
- **Text Length:** 25314 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 9 of 9
