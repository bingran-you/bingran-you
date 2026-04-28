# PDF Document: Hajek et al. - 2018 - Closing the Calibration Loop An Inside-out-tracking Paradigm for Augmented Reality in Orthopedic Su.pdf

**File Path:** Hajek et al. - 2018 - Closing the Calibration Loop An Inside-out-tracking Paradigm for Augmented Reality in Orthopedic Su.pdf

**Processed Date:** 2026-02-10T18:15:38.436Z

**File Size:** 3415.86 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2708

**Title:** Closing the Calibration Loop: An Inside-out-tracking Paradigm for Augmented Reality in Orthopedic Surgery

**Collection:** Large Files

---

## Extracted Text Content

Closing the Calibration Loop: An
Inside-out-tracking Paradigm for Augmented
Reality in Orthopedic Surgery
Jonas Hajek1,2,?, Mathias Unberath1,?, Javad Fotouhi1,?, Bastian Bier1,2, Sing Chun Lee1, Greg Osgood3, Andreas Maier2, Mehran Armand4, and Nassir Navab1
1 Computer Aided Medical Procedures, Johns Hopkins University 2 Pattern Recognition Lab, Friedrich-Alexander-Universita ̈t Erlangen-N ̈urnberg 3 Department of Orthopaedic Surgery, Johns Hopkins Hospital 4 Applied Physics Laboratory, Johns Hopkins University
Abstract. In percutaneous orthopedic interventions the surgeon attempts to reduce and fixate fractures in bony structures. The complexity of these interventions arises when the surgeon performs the challenging task of navigating surgical tools percutaneously only under the guidance of 2D interventional X-ray imaging. Moreover, the intra-operatively acquired data is only visualized indirectly on external displays. In this work, we propose a flexible Augmented Reality (AR) paradigm using optical see-
-through head mounted displays. The key technical contribution of this work includes the marker-less and dynamic tracking concept which closes the calibration loop between patient, C-arm and the surgeon. This calibration is enabled using Simultaneous Localization and Mapping of the environment of the operating theater. In return, the proposed solution provides in situ visualization of pre- and intra-operative 3D medical data directly at the surgical site. We demonstrate pre-clinical evaluation of -
a prototype system, and report errors for calibration and target registration. Finally, we demonstrate the usefulness of the proposed inside-out tracking system in achieving ”bull’s eye” view for C-arm-guided punctures. This AR solution provides an intuitive visualization of the anatomy and can simplify the hand-eye coordination for the orthopedic surgeon.
Keywords: Mixed Reality, Human Computer Interface, Intra-operative Visualization and Guidance, C-arm, Cone-beam CT
1 Introduction
Modern orthopedic trauma surgery focuses on percutaneous alternatives to many complicated procedures [1,2]. These minimally invasive approaches are guided by intra-operative X-ray images that are acquired using mobile, non-robotic C-arm systems. It is well known that X-ray images from multiple orientations are required to warrant understanding of the 3D spatial relations since 2D fluoroscopy
? These authors have contributed equally.
arXiv:1803.08610v1 [cs.CV] 22 Mar 2018

suffers from the effects of projective transformation. Mastering the mental mapping of tools to anatomy from 2D images is a key competence that surgeons acquire through extensive training. Yet, this task often challenges even experienced surgeons leading to longer procedure times, increased radiation dose, multiple tool insertions, and surgeon frustration [3,4]. If 3D pre- or intra-operative imaging is available, challenges due to indirect visualization can be mitigated substantially reducing sur-
geon task load and fostering improved surgical outcome. Unfortunately, most of the previously proposed systems provide 3D information at the cost of integrating outside-in tracking solutions that require additional markers and intra-operative calibration that hinder clinical acceptance [3]. As an alternative, intuitive and real-time visualization of 3D data in Augmented Reality (AR) environments has recently received considerable attention [4,5]. In this work, we present a purely image-based insid-
e-out tracking concept and prototype system that dynamically closes the calibration loop between surgeon, patient, and C-arm enabling intra-operative optical see-through head-mounted display (OST HMD)-based AR visualization overlaid with the anatomy of interest. Such in situ visualization could benefit residents in training that observe surgery to fully understand the actions of the lead surgeon with respect to the deep-seated anatomical targets. These applications in addition to simple task such -
as optimal positioning of C-arm systems, do not require the accuracy needed for surgical navigation and, therefore, could be the first target for OST HMD visualization in surgery. To the best of our knowledge, this prototype constitutes the first marker-less solution to intra-operative 3D AR on the target anatomy.
2 Materials and Methods
2.1 Calibration
The inside-out tracking paradigm, core of the proposed concept, is driven by the observation that all relevant entities (surgeon, patient, and C-arm) are positioned relative to the same environment, which we will refer to as the ”world coordinate system”. For intra-operative visualization of 3D volumes overlaid with the patient, we seek to dynamically recover
STV(t) =S TW
(TT−1
W (t0) TTC(t0)) VT−1
C
} {{ }
W TV
, (1)
the transformation describing the mapping from the surgeon’s eyes to the 3D image volume. In Eq. 1, t0 describes the time of pre- to intra-operative image registration while t is the current time point. The spatial relations required to dynamically estimate STV are explained in the remainder of this section and visualized in Fig. 1.
WTS/T : The transformations WTS/T are estimated using Simultaneous Localization and Mapping (SLAM) thereby incrementally constructing a map of the

Fig. 1. Spatial relations that are required to be estimated dynamically to enable the proposed AR environment. Transformations shown in black are estimated directly while transformations shown in orange are derived.
environment, i. e. the world coordinate system [6]. Exemplarily for the surgeon, SLAM solves
WTS(t) = arg min
W ˆTS
d
(
fW
(
P WTˆ S(t)xS(t)
)
, fS(t)
)
, (2)
where fS(t) are features in the image at time t, xS(t) are the 3D locations of these feature estimates either via depth sensors or stereo, P is the projection operator, and d(·, ·) is the feature similarity to be optimized. A key innovation of this work is the inside-out SLAM-based tracking of the C-arm w. r. t. the environment map by means of an additional tracker rigidly attached to the C-shaped gantry. This becomes possible if both trackers observe partially overlapping parts of the environment-
, i. e. a feature rich and temporally stable area of the environment. This suggests, that the cameras on the C-arm tracker (in contrast to previous solutions [7,5]) need to face the room rather than the patient.
TTC : The tracker is rigidly mounted on the C-arm gantry suggesting that onetime offline calibration is possible. Since the X-ray and tracker cameras have no overlap, methods based on multi-modal patterns as in [7,5,4] fail. However, if poses of both cameras w. r. t. the environment and the imaging volume, respectively, are known or can be estimated, Hand-Eye calibration is feasible [8]. Put concisely, we estimate a rigid transform TTC such that A(ti) TTC = TTCB(ti), where (A/B)(ti) is the relativ-
e pose between subsequent poses at times i, i+1 of the tracker and the C-arm, respectively. Poses of the C-arm VTC(ti) are known because our prototype (Sec. 2.2) uses a cone-beam CT (CBCT) enabled C-arm

with pre-calibrated circular source trajectory such that several poses VTC are
known. During one sweep, we estimate the poses of the tracker WTT(ti) via
Eq. 1. Finally, we recover TTC, and thus WTC, as detailed in [8].
VTC : To close the loop by calibrating the patient to the environment, we need
to estimate the VTC describing the transformation from 3D image volumes to
an intra-operatively acquired X-ray image. For pre-operative data, VTC can be estimated via image-based 3D/2D registration, e. g. as in [9,10]. If the Carm is CBCT capable and the 3D volume is acquired intra-procedurally, VTC is known and can be defined as one of the pre-calibrated C-arm poses on the source trajectory, e. g. the first one. Once VTC is known, the volumetric images
are calibrated to the room via WTV = WTT(t0) TTC
VT−1
C (t0), where t0 denotes the time of calibration.
2.2 Prototype
For visualization of virtual content we use the Microsoft HoloLens (Microsoft, Redmond, WA) that simultaneously serves as inside-out tracker providing WTS according to see Sec. 2.1. To simplify communication between devices, we mount a second HoloLens device on C-arm to track movement of the gantry WTT. We use a CBCT enabled mobile C-arm (Siemens Arcadis Orbic 3D, Siemens Healthineers, Forchheim, Germany) and rigidly attach the tracking device to the image intensifier with the principal ray of the-
 front facing RGB camera oriented parallel to the patient table as demonstrated in Fig. 2. TTC is estimated via Hand-Eye calibration from 98 (tracker, C-arm) absolute pose pairs acquired during a circular source trajectory yielding 4753 relative poses. Since the C-arm is CBCT enabled, we simplify estimation of VTC and define t0 to correspond to the first C-arm pose.
Fig. 2. The prototype uses a Microsoft Hololens as tracker which is rigidly mounted on the C-arm detector, as demonstrated in Figs. a) and b). In c), the coordinate axis of the RGB tracker is shown in relation to the mobile C-arm.
2.3 Virtual Content in the AR Environment
Once all spatial relations are estimated, multiple augmentations of the scene become possible. We support visualization of the following content depending

Fig. 3. Since STV(t) is known, the real object in a) is overlaid with the rendered volume shown in b). Correct overlay persists even if the real object is covered in c).
Fig. 4. a) Pelvis phantom used for TRE assessment. b) Lines placed during the experiment to evaluate point-to-line TRE. c) Visualization of the X-ray source and principal ray next to the same phantom.
on the task (see Fig. 4): Using STV(t) we provide volume renderings of the 3D image volumes overlaid with the patient’s anatomy as shown in Fig. 3. In addition to the volume rendering, annotations of the 3D data (such as landmarks) can be displayed. Further and via STC(t), the C-arm source and principal ray, seen in Fig. 4 c) can be visualized as the C-arm gantry is moved to different viewing angles. Volume rendering and principal ray visualization combined are an effective solution to determine ”-
bull’s eye” views to guide punctures [11].
2.4 Experiments and Feasibility Study
Hand-Eye Residual Error: Following [8], we compute the rotational and translational component of TTC independently. Therefore, we state the residual of
solving A(ti) TTC = TTCB(ti) for TTC separately for rotation and translation averaged over all relative poses.
Target Registration Error: We evaluate the end-to-end target registration error (TRE) of our prototype system using a Sawbones phantom (Sawbones, Vashon, WA) with metal spheres on the surface. The spheres are annotated in a CBCT of the phantom and serve as the targets for TRE computation. Next, M = 4 medical experts are asked to locate the spheres in the AR environment: For every of the N = 7 spheres pi, the user j changes position in the room, and using the
”air tap” gesture defines a 3D line lj
i corresponding to his gaze that intersects

the sphere on the phantom. The TRE is then defined as
TRE = 1
M ·N
M
∑
j=1
N
∑
i=1
d(pi, lj
i ) , (3)
where d(p, l) is the 3D point-to-line distance.
Achieving ”Bull’s Eye” View: Complementary to the technical assessment, we conduct a clinical task-based evaluation of the prototype: Achieving ”bull’s eye” view for percutaneous punctures. To this end, we manufacture cubic foam phantoms and embed a radiopaque tubular structure (radius ≈ 5 mm) at arbitrary orientation but invisible from the outside. A CBCT is acquired and rendered in the AR environment overlaid with the physical phantom such that the tube is clearly discernible. Further, the princ-
ipal ray of the C-arm system is visualized. Again, M = 4 medical experts are asked to move the gantry such that the principal ray pierces the tubular structure, thereby achieving the desired ”bull’s eye” view. Verification of the view is performed by acquiring an X-ray image. Additionally, users advance a K-wire through the tubular structure under ”bull’s eye” view guidance using X-rays from the view selected in the AR environment. Placement of the K-wire without breaching of the tube is verified -
in the guidance and a lateral X-ray view.
3 Results
Hand-Eye Residual Error: We quantified the residual error of our Hand-Eye calibration between the C-arm and tracker separately for rotational and translational component. For rotation, we found an average residual of 6.18◦, 5.82◦, and 5.17◦ around ex, ey, and ez, respectively, while for translation the rootmean-squared residual was 26.6 mm. It is worth mentioning that the median translational error in ex, ey, and ez direction was 4.10 mm, 3.02 mm, 43.18 mm, respectively, where ez corresponds to th-
e direction of the principal ray of the tracker coordinate system, i. e. the rotation axis of the C-arm.
Target Registration Error: The point-to-line TRE averaged over all points and users was 11.46 mm.
Achieving ”Bull’s Eye” View: Every user successfully achieved a ”bull’s eye” view in the first try that allowed them to place a K-wire without breach of the tubular structure. Fig. 5 shows representative scene captures acquired from the perspective of the user. We would like to refer to the supplementary material where we provide a video documenting one trial from both a bystander’s and the user’s perspective.

Fig. 5. Screen captures from the user’s perspective attempting to achieve the ”bull’s eye” view. The virtual line (purple) corresponds to the principal ray of the C-arm system in the current pose while the CBCT of the phantom is volume rendered in light blue. a) The C-arm is positioned in neutral pose with the laser cross-hair indicating that the phantom is within the field of view. The AR environment indicates mis-alignment for ”bull’s eye” view that is confirmed using an X-ray (b). After alignm-
ent of the virtual principal ray with the virtual tubular structure inside the phantom (d), an acceptable ”bull’s eye” view is achieved (c).
4 Discussion and Conclusion
We presented an inside-out tracking paradigm to close the transformation loop for AR in orthopedic surgery based upon the realization that surgeon, patient, and C-arm can be calibrated to the environment. Our entirely marker-less approach enables rendering of virtual content at meaningful positions, i. e. dynamically overlaid with the patient and the C-arm source. The performance of our prototype system is promising and enables effective ”bull’s eye” viewpoint planning for punctures. Despite an ov-
erall positive evaluation, some limitations remain. The TRE of 11.46 mm is acceptable for viewpoint planning, but may be unacceptably high if the aim of augmentation is direct feedback on tool trajectories as in [4,5]. The TRE is compound of multiple sources of error: 1) Residual errors in Hand-Eye calibration of TTC, particularly due to the fact that poses are acquired on a circular trajectory and are, thus, co-planar as supported by our quantitative results; and 2) Inaccurate estimates of WTT an-
d WTS that indirectly affect all other transformations. We anticipate improvements in this regard when additional out-of-plane pose pairs are sampled for Hand-Eye calibration. Further, the accuracy of estimating WTT/S is currently limited by the capabilities of Microsoft’s HoloLens and is expected to improve in the future. In summary, we believe that our approach has great potential to benefit orthopedic trauma procedures particularly when pre-operative 3D imaging is available. In addition to the -
benefits for the surgeon discussed here, the proposed AR environment may prove beneficial in an educational context where residents must

comprehend the lead surgeon’s actions. Further, we envision scenarios where the proposed solution can support the X-ray technician in achieving the desired views of the target anatomy.
References
1. Gay, B., Goitz, H.T., Kahler, A.: Percutaneous CT Guidance : Screw Fixation of Acetabular Fractures Preliminary Results of a New Technique with. American Journal of roentgenology 158(4) (1992) 819–822 2. Hong, G., Cong-Feng, L., Cheng-Fang, H., Chang-Qing, Z., Bing-Fang, Z.: Percutaneous screw fixation of acetabular fractures with 2d fluoroscopy-based computerized navigation. Archives of orthopaedic and trauma surgery 130(9) (2010) 1177–1183 3. Markelj, P., Tomaˇzeviˇc, D., Likar, B., Pernusˇ, -
F.: A review of 3D/2D registration methods for image-guided interventions. Med Image Anal 16(3) (2012) 642–661 4. Andress, S., Johnson, A., Unberath, M., Winkler, A., Yu, K., Fotouhi, J., Weidert, S., Osgood, G., Navab, N.: On-the-fly augmented reality for orthopedic surgery using a multimodal fiducial. Journal of Medical Imaging 5 (2018) 5 – 5 – 12 5. Tucker, E., Fotouhi, J., Lee, S., Unberath, M., Fuerst, B., Johnson, A., Armand, M., Osgood, G., Navab, N.: Towards clinical translation of augment-
ed orthopedic surgery: from pre-op CT to intra-op X-ray via RGBD sensing. In: SPIE Medical Imaging. (2018) 6. Endres, F., Hess, J., Engelhard, N., Sturm, J., Cremers, D., Burgard, W.: An evaluation of the rgb-d slam system. In: Robotics and Automation (ICRA), 2012 IEEE International Conference on, IEEE (2012) 1691–1696 7. Fotouhi, J., Fuerst, B., Johnson, A., Lee, S.C., Taylor, R., Osgood, G., Navab, N., Armand, M.: Pose-aware C-arm for automatic re-initialization of interventional 2D/3D image reg-
istration. International Journal of Computer Assisted Radiology and Surgery 12(7) (2017) 1221–1230 8. Tsai, R.Y., Lenz, R.K.: A new technique for fully autonomous and efficient 3D robotics hand/eye calibration. IEEE Transactions on Robotics and Automation 5(3) (1989) 345–358 9. Berger, M., M ̈uller, K., Aichert, A., Unberath, M., Thies, J., Choi, J.H., Fahrig, R., Maier, A.: Marker-free motion correction in weight-bearing cone-beam CT of the knee joint. Medical Physics 43(3) (2016) 1235–1248 10. D-
e Silva, T., Uneri, A., Ketcha, M., Reaungamornrat, S., Kleinszig, G., Vogt, S., Aygun, N., Lo, S., Wolinsky, J., Siewerdsen, J.: 3D–2D image registration for target localization in spine surgery: investigation of similarity metrics providing robustness to content mismatch. Physics in Medicine & Biology 61(8) (2016) 3009 11. Morimoto, M., Numata, K., Kondo, M., Nozaki, A., Hamaguchi, S., Takebayashi, S., Tanaka, K.: C-arm cone beam CT for hepatic tumor ablation under real-time 3D imaging. American-
 Journal of Roentgenology 194(5) (2010) W452–W454

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:38.436Z
- **Text Length:** 18396 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
