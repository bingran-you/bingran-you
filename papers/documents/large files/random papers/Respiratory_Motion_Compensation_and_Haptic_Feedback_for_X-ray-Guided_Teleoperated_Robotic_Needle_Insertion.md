# PDF Document: Cordon-Avila et al. - 2024 - Respiratory Motion Compensation and Haptic Feedback for X-ray-Guided Teleoperated Robotic Needle Ins.pdf

**File Path:** Cordon-Avila et al. - 2024 - Respiratory Motion Compensation and Haptic Feedback for X-ray-Guided Teleoperated Robotic Needle Ins.pdf

**Processed Date:** 2026-02-10T18:17:32.459Z

**File Size:** 18029.12 KB

**Total Pages:** 7

**Extracted Pages:** 7

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3307

**Title:** Respiratory Motion Compensation and Haptic Feedback for X-ray-Guided Teleoperated Robotic Needle Insertion

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Respiratory Motion Compensation and Haptic Feedback for X-ray-Guided Teleoperated Robotic Needle Insertion
Ana Cordón-Avila , Mostafa Selim and Momen Abayazid
Abstract— Respiratory motion limits the accuracy and precision of abdominal percutaneous procedures. In this paper, respiratory motion is compensated robotically using motion estimation models. Additionally, a teleoperated insertion is performed using proximity-based haptic feedback to guide physicians during insertion, enabling a radiationfree remote insertion for the end-user. The study has been validated using a robotic liver phantom, and five insertions were performed. The resulting motion est-
imation errors were below 3 mm for all directions of motion, and the overall resulting 3D insertion errors were 2.60 mm, 7.75 mm, and 2.86 mm for the superior-inferior, lateral, and anteriorposterior directions of motion, respectively. The proposed approach is expected to minimize the chances of inaccurate treatment or diagnosis due to respiratory-induced motion and reduce radiation exposure. A video summary can be found in: https://youtu.be/2Xw6AMe2mco
Keywords: Liver cancer, motion compensation, teleoperated insertion
I. INTRODUCTION
The Global Cancer Observatory reported in 2020 that the incidence of liver cancer accounted for approximately 905,000 cases worldwide [1]. Percutaneous liver biopsy is considered the gold-standard technique to diagnose hepatic lesions [2]. Ultrasound (US) or computed-tomography (CT) scans are usually used to guide physicians throughout the insertion [3]. US provides real-time guidance without ionizing radiation [4]. However, there is high interoperator variability and the spatial resolution is lim-
ited [5]. CT-guidance can be preferred when there is difficulty in visualizing lesions under US [4,6]. Some limiting factors of X-ray-guided percutaneous procedures are radiation exposure, increase in interventional time, and increase in costs [6]. The precision of needle placement in percutaneous procedures is significantly affected by respiratory motion [5]. Physicians advance the needle at the endexpiration phase or during a breath-hold [5,8]. However, some patients might not be able to hold th-
eir breath for sufficient time. For those interventions in which the needle is not completely inserted within the same breathhold, respiratory-induced motion can lead to inaccurate needle placement [5]. In such cases, respiratory motion
*This work is part of the 20044 ASSIST project and funded by ITEA All authors are affiliated with the Robotics and Mechatronics research group, TechMed Centre, Faculty of Electrical Engineering, Mathematics and Computer Science, University of Twente, 7500 AE Enschede, The Netherlands. Email: a.cordon@utwente.nl; m.s.selim@utwente.nl; m.abayazid@utwente.nl
management leads to several extra scans to ensure that the needle advances along the planned path [8]. This leads to an increase in radiation exposure and interventional time [7]. Alternatively, real-time respiratory motion models offer the possibility to estimate and compensate for respiratory motion. Real-time respiratory motion models based on external signals offer the opportunity to estimate the location of the tumor and thus compensate for respiratoryinduced motion. These external signals ar-
e known as surrogate signals and their objective is to capture the external changes due to breathing to estimate the tumor position. These signals need to be easy to measure, be highly correlated with the induced motion at the region of interest, and have high-frame rate [10]. The correlation between the surrogate signal and the tumor displacement can be developed prior to the intervention and the created motion model can be tested during the procedure [10]. Motion models can provide the precision-
 needed in hepatic percutaneous procedures while decreasing the number of CT images required for targeting the lesion since the real-time position of the tumor is known [11]. Additionally, it is not required for the patient to maintain a specific breath-hold position throughout the intervention since motion models are able to estimate the location of the tumor at any breath-hold position [9]. Needle alignment can be achieved by integrating motion models and robotics. The model can update the pose -
of a robotic arm to steer the needle towards the moving target and thus compensate for the respiratory-induced motion. Several studies have implemented robotic manipulators in X-ray-based image-guided percutaneous procedures [7,12]–[15]. Robotic arms offer the opportunity of increasing stability, accuracy, and dexterity during needle positioning with fewer adjustments. Accurate placement is important to avoid loss of time, additional X-ray exposure, misdiagnosis in liver biopsy, or incomplete trea-
tment in tumor ablation [16]. In [12], the Epione (Quantum Surgical, Montpellier, France) system was used in a clinical study to perform robotic-assisted CTguided percutaneous needle insertion for hepatic thermal ablation. Other attempts for robotic CT-guided biopsies have shown that reducing the number of check scans can reduce the duration of the procedure and the radiation dose without sacrificing the accuracy of the procedure [7]. Additionally, robotic arms can be teleoperated to perform surgi-
cal tasks such as needle insertion. A tele
arXiv:2511.21273v1 [eess.SY] 26 Nov 2025

operated X-ray-guided insertion would enable the interventional radiologist to perform the procedure without radiation exposure. However, the loss of needle depth perception relative to the targeted tumor might affect the insertion accuracy. Haptic feedback has been shown to enhance proximity perception to target objects and for spatial navigation [17]–[19]. Mieling et al. proposed a proximity-based haptic feedback method for epidural anesthesia [20]. The method reduced unintentional punctures an-
d improved needle placement compared to visual and force-based haptic feedback. Moreover, Dagnino et al. developed an endovascular catheterization teleoperation system with vision-based haptic feedback that reduced vessel-collision forces [21]. Haptic cues were provided to be aware of the proximal vessels to the catheter through viscous forces and to detect collision incidents. Using haptic feedback during needle insertion provides reliable real-time guidance to surgeons, potentially mitigating ra-
diation exposure to the patients by reducing the number of extra scans. The contribution of this work includes the integration of respiratory motion compensation with teleoperated needle insertion for robotic X-ray-guided percutaneous procedures. Respiratory motion models estimate the position of a target in the liver, and the motion is compensated by robotic needle steering. The remote insertion is performed with target proximity-based haptic feedback. Additionally, physicians perform a teleopera-
ted insertion, eliminating radiation exposure during the procedure. Aspects other than respiratory motion that influence the accuracy of needle insertion, such as needle deflection during insertion and tissue deformation due to tool-tissue interaction are beyond the scope of this study. The proposed system aims to enhance physicians’ guidance during insertion using haptic feedback while increasing the accuracy of the procedure using robotic motion compensation.
II. MATERIALS AND METHODS
The proposed approach consists of two main steps; firstly, the respiratory motion compensation, and secondly, the remote needle insertion. The motion compensation step uses an electromagnetic (EM) tracker as a surrogate signal to estimate the target motion. The EM sensor is attached externally to a liver phantom. The phantom simulates the respiratory-induced motion in the liver in the Anterior-Posterior (AP) and SuperiorInferior (SI) directions of motion. A spherical lead target visible under X-ra-
ys is placed inside the liver phantom to simulate the tumor. A motion model is trained using the EM sensor data as a surrogate, and the actual target motion as ground truth. The target displacement is extracted using fluoroscopy images. The robotic manipulator uses the estimated target location to compensate for the respiratory motion by steering a needle attached to its end-effector. Needle steering preserves the alignment between the needle and the
target. The second step involves the remote teleoperation of the robotic arm. An end-user uses a haptic device to control the motion of the arm to perform the needle insertion task (Fig. 1).
A. Respiratory Motion Compensation
1) Surrogate Signal: An EM sensor was implemented to track the displacement of the liver phantom. The detected displacements in the y- and z-axes of the sensor served as a surrogate signal. In [24] and [25], it was observed that EM trackers can be used in human subjects as surrogate signals when attached to the abdominal area. In this work, the sensor was attached externally to the liver phantom. The obtained motion simulates the external abdominal skin motion during respiration. 2) Ground Truth: -
The ground truth represents the actual motion of the target. It is mainly required in the training phase of motion models and is used for validation purposes during the test phase. For the present experiments, an angiography scan was used to extract the SI and AP respiratory-induced motion of the target. The training phase involves acquiring lateral fluoroscopic images of the liver phantom for 30 seconds at 15 frames per second. The motion of the liver phantom during the training time consisted of-
 12 seconds of regular breathing, and three 5-second breath-holds at three different phases of the respiratory cycle (target positions). Simultaneously, the external motion tracked by the EM tracker is measured and used as input for the motion model. The EM data and target motion are synchronized by introducing changes in the respiratory phase at the beginning and end of the training. 3) Correspondence Model: Two motion models were created for each breathing phase to estimate the respiratory-induc-
ed motion in the SI and AP directions. Eq. 1 depicts the general relationship that defines a motion model. The target location or ground truth signal (M (t)) is estimated fitting the surrogate signal (s(t)) into the function ψ.
M (t) = ψ(s(t)) (1)
A polynomial regression model was selected to define the correspondence between the target motion and the EM sensor data.
yi ≈ yi(β) = β0 + β1x + β2x2 + ... + βnxn (2)
The β coefficients of the model are determined during the training phase using the ordinary least squares method. Each model was validated by computing the mean absolute error (MAE) between the ground truth (yi) and the estimation (yi(β)) obtained using the surrogate signal (x). 4) Robotic Motion Compensation: Motion models estimate the target location in the SI and AP directions of motion and the estimated displacements enable the adjustment of the robotic manipulator end-effector. This motion al-
igns the needle with the target correcting

Motion estimation M(t)=φ(s(t))
Training/ Evaluation
User
Haptic device
Robotic arm controller
Fuser
xuser
Electromagnetic tracker
NDI
Fluoroscopy image
Fluoroscopy image
(a) Respiratory Motion Compensation (b) Remote Needle Insertion
Robotic arm controller
Liver phantom Liver phantom
Needle steering
Ground
Truth Evaluation
Needle insertion
Lateral view
Top view
Time
Displacement
Time
Displacement
Fig. 1. (a) The respiratory motion compensation step uses an electromagnetic tracker attached to the liver phantom to create a motion model. The model is trained using as ground truth the motion of the target inside the liver phantom extracted from fluoroscopic images. The robotic arm with a needle at its end-effector compensates for the respiratory motion using the output of the motion model. The robot performs needle steering to maintain the alignment between the target and the needle. (b) In th-
e remote needle insertion step, the end-user remotely controls the robotic arm by operating the haptic device with force feedback (Fuser), guiding the physicians to reach the desired displacement (xuser).
Robotic arm
C-arm
Liver phantom
EM system
EM tracker
Haptic device
Needle
Target
(a)
(b) (c)
zB
xB
yB
xEM yEM
zEM
yEE
zEE
xEE
ΨT
zO
yO
xO
TEE
B
Ψ EM
Ψ EE
ΨB
ΨO
zT xT
yT
Fig. 2. (a) A transformation matrix from the base frame (ΨB) to the end-effector (ΨEE ) realigns the robotic arm with the frame of the moving target (ΨT ). The arm moves based on the estimations made using the electromagnetic (EM) system as a surrogate. The estimations relate the real-time position of the sensor in the EM frame (ΨEM ) to the target frame (ΨT ). (b) The source side contains the haptic device controlled by the user to move the robotic arm. The user moves the handle in the yo directi-
on relative to the initial location of frame (ΨO). (c) The replica side contains the liver phantom with a spherical lead target located inside the phantom. The EM tracker system is attached to the phantom and used as a surrogate signal, and the C-arm scan is used to train and validate our methods. The robotic arm with a needle at the end-effector enables respiratory motion compensation and remote insertion steps.
for the respiratory-induced motion and enabling a preinsertion autonomous alignment.
B. Teleoperated Needle Insertion with Haptic Feedback
The end-user operates the haptic device to remotely control the robotic arm. The displacement of the handle of the haptic device is directly mapped to the
displacement in the axial direction of the needle. The displacement needed to reach the target is defined based on an initial cone beam CT 3-D reconstruction of the liver phantom. A manual registration between the needle and the liver phantom is performed prior to this step. The registration is further explained in the experiments

section. The proposed haptic feedback strategy enables the user to experience viscous forces that depend on how far is the needle from the targeted tumor. The closer the needle is to the target, the higher the forces. A virtual wall indicates that the needle has reached the target. The forces in the control laws are represented in the axial direction of the body-fixed frame of the haptic device’s handle. The control law of the proximity-based feedback is based on a damping coefficient b, the curr-
ent distance to the target d, the offset distance o, and the speed of insertion v as illustrated in Eq. 3.
fproximity = bv(o − d) (3)
The controller maintains the handle’s position when the user is not inserting the needle to avoid unintentional movement of the handle. Moreover, the device is programmed to enable one DoF movement to achieve more natural insertion. The objective is to slow down the user during insertion to reach the target accurately. The control law of the virtual wall is a proportionaldifferential (PD) position controller. When the user tries to move the needle beyond the target position, the PD controller push-
es them back to the target position. The control law shown in Eq. 4 depends on the distance x from the target into the wall, the proportional gain kp, the velocity of needle v and the differential gain kd.
fwall = kpx − kdv (4)
The source device is used by the end-user to perform needle insertion axially.
C. Robotic Manipulator Control
The robotic arm is controlled to perform surgical tasks such as needle steering and insertion. The desired transformation (Tdesired) of the end-effector (ΨEE) relative to the base frame (ΨB) is given to the robotic manipulator using the following transformation matrix.
Tdesired = TB
EEi +


O3×3 R


dx dy dz


000 1

 , (5)
where TB
EEi is the initial pose of the ΨEE to ΨB before
motion compensation or needle insertion, and O3×3 is a zero matrix. R is set to two different magnitudes. In the case of motion compensation, R is set to the rotation matrix of the EM frame (ΨEM ) to ΨB of the arm. Additionally, the estimated displacements of the AP and SI motion models update dy and dz expressed in ΨEM , respectively. During needle insertion, R is the rotation matrix defined from ΨEE to ΨB of the robotic arm. The user moves the haptic device handle to perform the displacement dx -
in the axial direction of the needle expressed relative to ΨEE (Fig. 2 (a)).
D. Liver phantom
The liver phantom was developed in [22] and mimics the respiratory-induced motion in the liver. The phantom consists of a soft tissue made of silicon resin mixed with styrofoam beds that simulates the liver, and a cart that moves the liver mimicking respiration. The cart includes actuators to achieve the desired motion through pneumatic actuation. The liver phantom moves in two DoF simulating the SI and AP motion. Additionally, a spherical target made of lead with a diameter of 3 mm was placed ins-
ide of the liver phantom. The liver phantom is shown in Fig. 1 and Fig. 2 (a) and (c).
E. Experiments
1) Experimental setup: Fig. 2 (b) and (c) display the setup layout. The replica side (Fig. 2 (c)) contains the ARTIS pheno C-arm scan (Siemens Healthineers, Erlangen, Germany), the robotic arm 7-DoF Franka Emika (GmBH, Munich, Germany) with a needle attached to the end-effector, the EM tracker system (Northern Digital Inc., Waterloo, Canada) which is externally attached to the liver phantom. The source side (Fig. 2 (b)) contains the haptic device Omega.7 (Force Dimension, Nyon, Switzerland) that i-
s operated to remotely control the robotic manipulator and provide feedback to the user based on the proximity between the needle and the target. 2) Experimental Protocol: We present the experimental plan to robotically compensate for respiratory motion and perform a teleoperated insertion with haptic feedback. • Determine insertion point: A cone beam CT 3D reconstruction of the liver phantom is obtained during a breath-hold and an insertion point is defined based on the position of the target. A -
biopsy grid from the scan is projected on the phantom at the defined insertion site. A reference needle with a length of 3 cm is inserted into the phantom following the orientation and position set by the grid. The reference needle is an essential component to further align the robotic manipulator with the defined insertion point by the biopsy grid. • Manual registration: The biopsy needle is placed at the end-effector of the robotic arm and the arm is manually moved to align the biopsy needle wit-
h the reference needle. This ensures the alignment between the robotic manipulator and the target. • Teleoperated retraction: The robotic arm is remotely moved to a safe position away from the liver phantom in the axial direction (4 cm), and the reference needle is removed. • Motion model training: The training of the motion model is performed using the target motion obtained from the fluoroscopic images as ground truth and the data from the EM sensor as a surrogate which was acquired simultaneous-
ly. During the training, the liver phantom simulates regular breathing and

(a) Motion Models Training (b) Respiratory Motion Compensation
Time [s]
Displacement [mm]
60
50
40
30
20
10
0
0 10 20 30 40 50 Time [s]
0 2 4 6 8 10 12 14
0
5
10
15
20
25
30
Displacement [mm]
0
2
4
6
8
10
12
14
Displacement [mm]
(c) Remote Needle Insertion
Force [N]
Displacement [cm]
-5 -4 -3 -2 -1 0
-1
0
1
2
3
4
5
-6
Fig. 3. (a) The liver phantom simulates different types of breathing patterns during the training phase. The target location (ground truth) is extracted in the two directions of motion Anterior-Posterior and Superior-Inferior which are represented by the solid lines in blue and gray, respectively. The motion models are trained to estimate the ground truth (the dotted lines). (b) The liver phantom simulates regular breathing and the location of the target is extracted for validation (solid lines). -
The motion models estimate the current target position (dotted lines), and the robotic manipulator compensates for the respiratory motion by steering the needle attached to the end-effector (dashed lines). (c) The insertion is performed remotely using the haptic device. The forces felt by the user increase as the distance between the tip of the needle and the target decreases.
three types of breath-holds at different respiratory phases. If the target was placed in a new location inside the liver phantom, a new training session was conducted. • Motion compensation: The breathing of the phantom starts, and the created motion model uses the EM sensor data to estimate the displacement of the tumor. The estimations are given to the robotic manipulator to move the needle in the two directions of motion to keep it aligned with the target position. • Teleoperated insertion: The-
 liver phantom stops at one of the three breath-hold positions to allow the user to perform the remote needle insertion at the source side. • Validation using fluoroscopic images: A sagittal and transverse fluoroscopic images of the liver phantom are obtained to measure the deviation between the needle tip and the target. The lateral εx, top εy, and depth εz errors are extracted, and the Euclidean distance was computed to measure the targeting error. Five insertions were performed at different bre-
ath-hold positions. Additionally, the location of the target inside the phantom did not change for the first three insertions and was moved to a different position for the remaining two.
III. RESULTS
In this section, we first present the results of the respiratory motion compensation step, which include the performance of the created respiratory motion estimation models, and the robotic motion compensation. Secondly, the errors of each insertion are presented.
A. Respiratory Motion Compensation
A variety of breathing patterns were simulated by the liver phantom during the training phase (Fig. 3 (a)).
Table I displays the results obtained for the SI and AP motion models created for regular breathing (Mr) and for the different breath-hold states (Mb−h). The errors of the motion models were below 3 mm for the AP and SI directions of motion for the different breathing phases.
TABLE I Motion models results based on the mean absolute error for the train and test phases. All values are in mm.
Direction of Motion Motion Models
Mr(t) Mb−h(t)
AP Train 1.07 ± 0.17 0.15 ± 0.21 Test 1.85 ± 1.14 0.07 ± 0.03
SI Train 0.84 ± 0.13 0.04 ± 0.02 Test 1.16 ± 1.48 2.56 ± 2.65
Fig. 3 (b) displays the performance of the motion model estimations, and the robotic needle steering during motion compensation. The overall error of needle steering in regular breathing was 3.00 ± 1.81 mm, and 7.44 ± 4.95 mm for the AP and SI directions of motion, respectively.
B. Needle Insertion
The insertion is remotely performed by the end-user using a haptic device. The forces provided as feedback increase while the needle moves towards the tumor (Fig. 3 (c)). The user feels an increase in the forces until they reach the virtual wall (5 N), which indicates they have reached the target. The 3D insertion error was computed from a sagittal, and transverse fluoroscopy images obtained after insertion. The errors are defined as the distance of the tip of the needle to the circumference of th-
e target. The obtained results for the needle insertion step are displayed in Table II.

TABLE II 3D Insertion errors between the tip of the needle and the target. all values are in mm.
Insertion εx εy εz Euclidean distance
1 4.13 8.35 3.45 9.93 2 1.65 11.58 1.75 11.83 3 6.32 14.51 5.14 16.64 4 0.28 3.11 3.58 4.75 5 0.62 1.19 0.37 1.39
Overall 2.60 ± 2.30 7.75 ± 5.01 2.86 ± 1.64 8.91 ± 5.35
IV. DISCUSSION AND CONCLUSION
This work presents the integration of robotic respiratory motion compensation and teleoperated needle insertion with haptic feedback for X-ray-guided percutaneous procedures. The results of the robotic motion compensation were presented in the previous section, it was observed that the highest errors were obtained during the real-time needle steering when the liver phantom simulated regular breathing. Especially, in the SI direction of motion, an overall error of 7.44 mm was observed, possibly due-
 to the higher amplitude of motion compared to the AP direction. Nonetheless, in this work, the insertions are only performed during a breath-hold state. In Table II, it can be observed that in the directions in which motion was compensated (εx and εz), the errors are lower than 3 mm. Moreover, the maximum errors were obtained in insertion 3 with an Euclidean distance of 16.64 mm, and the minimum errors were observed in insertions 4 and 5 with an Euclidean distance of 4.75 and 1.39 mm. During the -
first three insertions, it was observed that the liver phantom moved during the insertion due to the tool-tissue interaction. This error is specifically highlighted in the lateral direction of the liver phantom (εy). For the final two insertions, it was observed that the liver phantom motion was limited. Furthermore, the radiation exposure from the physician’s perspective has been eliminated since the insertion is performed remotely. Additionally, the provided haptic feedback during insertion is e-
xpected to reduce the need for additional check scans, thus reducing the patient’s radiation exposure. However, further research needs to focus on minimizing the patient’s radiation exposure. Future work should also include possible tool-tissue interactions that consider needle deflections during insertion. These aspects should be incorporated into motion models to accurately estimate the position of the target. Also, experimental validation could be extended by performing animal or cadaveric stud-
ies and by including interventional radiologists as end-users. It can be concluded from this study that respiratory motion models can compensate for breathing changes to minimize the chances of misdiagnosis or incomplete treatment in percutaneous procedures. Additionally, teleoperated insertion with haptic feedback provides the guidance needed to complete an insertion while
potentially reducing radiation exposure in X-ray-guided interventions.
ACKNOWLEDGMENT
The work in this paper was supported by ITEA under the 20044 ASSIST project. The authors would like to thank Remco Liefers for his contribution during the experiments, Yoeko Xavier Mak for his contribution on the preparation of the experiments, Girindra Wardhana for his contribution in providing graphics and Youssef Aboudorra for reviewing the manuscript.
References
[1] J. Ferlay, M. Ervik, M. Colombet, L. Mery, M. Piñeros, A. Znaor, I. Soerjomataram and F. Bray, “Global Cancer Observatory: Cancer Today,” International Agency for Research on Cancer, 2020. [2] B. Al Knawy and M. Shiffman, “Percutaneous liver biopsy in clinical practice,” International Association for the Study of the Liver, vol. 27, no. 9, pp. 1166-1173, Nov. 2007. [3] A. B. Chowdhury and K. J. Mehta, “Liver biopsy for assessment of chronic liver diseases: a synopsis,” Clinical and experimenta-
l medicine, vol. 23, no. 2, pp. 273-285, Jun. 2023. [4] G. Mauri, L. Cova , S. De Beni, T. Ierace, T. Tondolo, A. Cerri, S. N. Goldberg and L. Solbiati, “Real-time US-CT/MRI image fusion for guidance of thermal ablation of liver tumors undetectable with US: results in 295 cases,” Cardiovascular and interventional radiology, vol. 38, no. 1, pp. 143–151, Feb. 2015. [5] M. A. Clifford, F. Banovac, E. Levy and K. Cleary, “Assessment of hepatic motion secondary to respiration for computer assisted inte-
rventions,” Computer Aided Surgery, vol. 7, no. 5, pp. 291-299, August 2002. [6] K. B. Gala, D. Chandra, N. S. Shetty, U. Agarwal, H. Bansal, M. Shariq, H. A. Pendse, A. Janu, R. Mandava and S. S. Kulkarni, “Imaging Recommendations for Image-Guided Biopsy in Oncology,” Indian Journal of Medical and Paediatric Oncology, vol. 44, no. 3, pp. 334-342, May 2023. [7] S. Levy, S. N. Goldberg, I. Roth, M. Shochat, J. Sosna, I. Leichter and S. Flacke, “Clinical evaluation of a robotic system for precise CT-
-guided percutaneous procedures,” Abdominal radiology, vol. 46, no. 10, pp. 5007–5016, Oct. 2021. [8] A. M. Sorensen, A. M. Zlevor, M. A. Kisting, A. B. Couillard, T. J. Ziemlewicz, G. V. Toia, J. L. Hinshaw, M. Woods, L. M. Stratchko, P. J. Pickhardt and M. L. Foltz, “CT Navigation for Percutaneous Needle Placement: How I Do It,” Techniques in Vascular and Interventional Radiology, vol. 26, no. 3, pp. 100911, Sep. 2023. [9] M. Guckenberger, A. Richter, J. Boda-Heggemann and F. Lohr, “Motion compe-
nsation in radiotherapy,” Critical reviews in biomedical engineering, vol. 40, no. 3, pp. 187–197, Jun. 2012. [10] J. R. McClelland, D. J. Hawkes, T. Schaeffter and A. P. King, “Respiratory motion models: a review,” Medical image analysis, vol. 17, no. 1, pp. 19-42, Jan. 2013. [11] L. Maier-Hein, S. A. Müller, F. Pianka, S. Wörz, B. P. MüllerStich, A. Seitel, K. Rohr, H. P. Meinzer, B. M. Schmied, and I. Wolf, “Respiratory motion compensation for CT-guided interventions in the liver,” Computer Aid-
ed Surgery, vol. 13, no. 3, pp. 125-138, Feb. 2008. [12] T. de Baere, C. Roux, F. Deschamps, L. Tselikas and B. Guiu, “Evaluation of a new CT-guided robotic system for percutaneous needle insertion for thermal ablation of liver tumors: a prospective pilot study,” Cardiovascular and Interventional Radiology, vol. 45, no. 11, pp. 1701-1709, Nov. 2022. [13] W. J. Heerink, S. J. Ruiter, J. P. Pennings, B. Lansdorp, R. Vliegenthart, M. Oudkerk and K. P. de Jong, “Robotic versus freehand needle position-
ing in CT-guided ablation of liver tumors: a randomized controlled trial,” Radiology, vol. 290, no. 3, pp. 826-832, Mar. 2019.

[14] I. M. Spenkelink, J. Heidkamp, Y. Avital, and J. J. Fütterer, “Evaluation of the performance of robot assisted CT-guided percutaneous needle insertion: Comparison with freehand insertion in a phantom,” European Journal of Radiology, vol. 162, pp. 110753, Feb. 2023. [15] S. Franckenberg, T. Sieberth, T. Frauenfelder, M. J. Thali and L. C. Ebert, “Semiautomated robotic, CT-guided needle placement for postmortem CSF sampling–a Novel application of the Virtobot,” All Life, vol. 14, no. 1, pp. 75-
-79, Jan. 2021. [16] P. Durand, A. Moreau-Gaudry, A. S. Silvent, J. Frandon, E. Chipon, M. Medici and I. Bricault, “Computer assisted electromagnetic navigation improves accuracy in computed tomography guided interventions: A prospective randomized clinical trial,” PloS ONE, vol. 12, no. 3, pp. e0173751, Mar. 2017. [17] Y. Lu, B. Gao, H. Tu, W. Luo, H. Kim, “Effects of Different Proximity-Based Feedback on Virtual Hand Pointing in Virtual Reality,” in Proc. of Int. Conf. on Advances in Computer Gr-
aphics (CGI 2021), 2021, pp. 608-620. [18] B. Jones, J. Maiero, A. Mogharrab, I. A. Aguliar, A. Adhikari, B. E. Riecke, E. Kruijff, C. Neustaedter and R. W. Lindeman, “Feetback: augmenting robotic telepresence with haptic feedback on the feet,” in Proc. of Int. Conf. on multimodal interaction (ICMI20), 2020, pp. 194-203. [19] S. Chung, K. Lee, and U. Oh, “Investigating three-dimensional directional guidance with nonvisual feedback for target pointing task,” in 2020 IEEE Int. Symp. on Mixed and Aug-
mented Reality Adjunct (ISMAR-Adjunct), 2020, pp. 206-210. [20] R. Mieling, C. Stapper, S. Gerlach, M. Neidhardt, S. Latus, M. Gromniak, P. Breitfeld and A. Schlaefer, “Proximity-based haptic feedback for collaborative robotic needle insertion,” in Proc. of Int. Conf. on Human Haptic Sensing and Touch Enabled Computer Applications, 2022, pp. 301-309. [21] G. Dagnino, J. Liu, M. E. Abdelaziz, W. Chi, C. Riga and G. Z. Yang, “Haptic feedback and dynamic active constraints for robot-assisted endovasc-
ular catheterization,” in 2018 IEEE Proc. Int. Conf. on Intelligent Robots and Systems (IROS), 2018, pp. 1770-1775. [22] H. Naghibi, P. A. Costa and M. Abayazid, “A soft robotic phantom to simulate the dynamic respiratory motion of human liver,” in 2018 7th IEEE Int. Conf. on Biomedical Robotics and Biomechatronics (BIOROB), 2018, pp. 577-582. [23] Franka Emika GmbH: Panda arm, 2017. https://www.franka.de [24] J. D. Hoisak, K. E. Sixel, R. Tirona, P. C. Cheung, and J. P. Pignol, “Correlation of lu-
ng tumor motion with external surrogate indicators of respiration,” International Journal of Radiation Oncology Biology Physics, vol. 60, no. 4, pp. 12981306, Nov. 2004. [25] M. Yang, H. Ding, J. Kang, L. Zhu, and G. Wang, “Subject-specific real-time respiratory liver motion compensation method for ultrasound-MRI/CT fusion imaging,” International journal of computer assisted radiology and surgery, vol. 10, no. 5, pp. 517-529, May 2015.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:32.459Z
- **Text Length:** 32567 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 7 of 7
