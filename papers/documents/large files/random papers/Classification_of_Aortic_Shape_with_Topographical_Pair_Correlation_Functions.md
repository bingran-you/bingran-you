# PDF Document: Bruno et al. - 2025 - Classification of Aortic Shape with Topographical Pair Correlation Functions.pdf

**File Path:** Bruno et al. - 2025 - Classification of Aortic Shape with Topographical Pair Correlation Functions.pdf

**Processed Date:** 2026-02-10T18:17:21.500Z

**File Size:** 1468.35 KB

**Total Pages:** 14

**Extracted Pages:** 14

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3714

**Title:** Classification of Aortic Shape with Topographical Pair Correlation Functions

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Classification of Aortic Shape with Topographical Pair
Correlation Functions
Cooper Bruno1, Tiago Cecchi1, Joseph A. Pugar2, Luka Pocivavsek∗2, and
Newell Washburn†3,4
1Department of Physics, Carnegie Mellon University, Pittsburgh, PA 15213,
USA
2Department of Surgery, University of Chicago, Chicago, IL 60637, USA
3Department of Chemistry, Carnegie Mellon University, Pittsburgh, PA
15213, USA
4Department of Biomedical Engineering, Carnegie Mellon University,
Pittsburgh, PA 15213, USA
Abstract
Quantitative descriptors convert high-dimensional medical images into low-dimensional features capable of differentiating organ shapes that correlate with injury or disease progression for diagnostic purposes. An important example is aortic dissections, which can be imaged using high-resolution CT scans and for which the shape of the true and false lumens of the aorta has long been used to predict disease state and the potential for positive surgical outcomes (namely thoracic endovascular repair o-
r TEVAR). Here we present a method for calculating the topographical pair correlation function (TPCF), a descriptor of the spatial correlation of point estimates for Gaussian curvature, mean curvature, shape index, and bending ratio constrained to the surface of a meshed image. We used the TPCF as a metric to describe aortic shape and extracted quantitative features from the resulting curves. When the TPCF was parameterized by shape index, the area under the curve of the correlation function contr-
ibuted to a classification accuracy of 0.95 for disease presence and/or impending TEVAR success. Comparison with single-point statistics suggests that the TPCF provides powerful features for classifying the disease state of aortas and more broadly in capturing structural correlations in anatomical data.
Keywords: Image analysis, machine learning, coherence tomography, aorta, image mesh, pathology, pair correlation function
∗Corresponding author †Corresponding author
arXiv:2511.13960v1 [q-bio.TO] 17 Nov 2025

1 Introduction
Quantitative assessment of morphological differences is essential for the classification of 3D images. The general approach reduces a high-dimensional image to a compact set of descriptors then uses these to calculate similarity metrics, allowing probabilistic assessments of injury and disease states. CT images of the liver, the brain, and the vascular system are routinely used in diagnosing injury and disease, but there remains a need for new methods of featurizing them. Given its criticality in -
the circulatory system, there is extensive literature on structural assessments of the aortic arch that are used in planning surgical procedures to treat aneurysms or dissections. Using 3D multiplanar reconstruction of CT images, traditional approaches to morphometry have focused on arch steepness, take-off angles, and distances between supraaortic branches [1]. Aortic arches are commonly classified into types I, II, and III [2] based on the distances between major branches, which are known to cor-
relate with patient age as well as a diversity of other geometric features, making them a useful predictor for planning surgical aneurysm repair [3]. However, there remains a need for more sophisticated metrics capable of guiding clinical decision-making. Principal component analysis (PCA) is a powerful computational tool for analyzing aortic shape [4]. In early applications of PCA, images from 500 asymptomatic patients were segmented into sequentially inscribed circles resulting in 12 geometric p-
arameters that were the basis for PCA, and three components were identified that accounted for ca. 80% of the variability. This has become the basis for statistical shape analysis (SSA) [5], a broader methodology that connects shape with function [6, 7] and has been advanced through machine learning approaches [8] responsible for risk classification accuracies of greater than 95%. However, these approaches to featurization lack interpretability which makes it difficult to understand the prediction-
s and connect them with other biomechanical models. While maps of the displacement fields allow mode decomposition to extend shape analysis to biomechanics [9], this methodology still makes interpretation difficult. Point distributions of the curvature have been used by the authors to diagnose aortic disease state [10] as a physics-based featurization method. The fluctuation of Gaussian curvature δK, calculated as the standard deviation of the point distribution, is a powerful descriptor for disti-
nguishing between healthy and unhealthy aortic shapes — significantly more so than aortic volume, which increases monotonically during growth and development and thus is insensitive to the formation of structural abnormalities. However, δK is insensitive to the spatial correlations between these structural aberrations and thus valuable information is lost during featurization. Continuing with physics-based featurization in this work, we develop a novel method from the pair correlation function. In-
 condensed matter physics, the pair correlation function (PCF) has been used to characterize the structure of disordered systems, ranging from simple liquids to liquid crystals to glasses [11]. The density-density PCF provides a method for calculating important structural parameters, such as the structure of solvation shells in liquids or the spatial fluctuations during phase transitions [12]. It does so by calculating a radial distribution function averaged over each particle, providing the proba-
bility of finding an atom at a certain distance given a particle at the origin of the coordinate system. Thus, it is a low-dimensional representation of the spatial connectivity in a complex material that
2

is intermediate between the full list of particle coordinates, which is unwieldy for making predictions, and a single macroscopic scalar, such as the density, which can be incapable of differentiating between distinct, microscopic states. We present the application of a topographical pair correlation function (TPCF) for characterizing the shape of healthy and diseased aortas from CT imaging. In contrast to the traditional PCF calculated in 3D, we have developed the TPCF to be calculated on the su-
rface of a 3D object. Both synthetic shapes – artificial meshes of spheres and cylinders with controlled perturbations – as well as CT scans of healthy and diseased aortas were used, with the synthetic shapes testing and validating the methodology before it was applied to aortic images. Based on point estimates for the Gaussian curvature, mean curvature, shape index [13], and bending ratio, we demonstrate that the curvature-parameterized TPCF is sensitive to structural differences associated with -
disease progression and could be a powerful tool in performing similarity analyses of complex 3D images of tissues and organs.
2 Methodology
2.1 Coherence Tomography
Imaging and clinical outcomes data was acquired from a retrospective single-center aorta registry at the University of Chicago Medical Center (UCMC). The imaging data was acquired through computed tomography angiography (CTA) scans obtained from 2009 to 2020. Subsequent analysis used the scans from 37 non-pathological and 38 pathological patients. Three unique outcome labels are organized by the anatomy segmented from the scan being normal (label 0); non-pathological anatomy of a non-aortic relate-
d trauma patient, or the presence (label 2) or absence (label 1) of secondary surgical intervention more than 30 days following the initial thoracic endovascular aortic repair (TEVAR). The decisions to intervene in the case of secondary surgery were made by the primary surgeon. The CTA scans were obtained from the Human Imaging Research Office (HIRO) at the UCMC in accordance with institutional review board approval (IRB # 20-0653 and IRB # 21-0299).
2.2 Meshing and Curvature Calculation
2.2.1 Aortic Meshes
Image processing was performed from raw DICOM files extracted from the CTA data. Segmentation masks (isosurfaces) were created for each aorta from the DICOM files using the Simpleware ScanIP software package (Synopsys, Sunnyvale, CA). After segmentation, recursive Gaussian filtering was applied to smooth each surface to reduce noise while preserving the innate geometry of the segmentation. Subsequently, the built-in FE Free meshing algorithm was used to generate triangular surface meshes which dis-
cretized the surfaces. Two approaches were taken while meshing the population of aortic surfaces: enforcing a constant number of elements (number of triangles) or a constant element density (size of triangles). Surface area spanned an order of magnitude (100-1000 cm2) within the dataset, and the impact of each meshing strategy is addressed in the discussion. For each meshed geometry, the Rusinkiewicz algorithm [14] was used to calculate discrete point principal curvatures
3

at each mesh vertex using a weighted average of shape operators of neighboring elements. The principal curvatures in question are the eigenvalues of the resulting shape operators, and they are the maximum and minimum values of the normal curvature at a given vertex [14]. The per-vertex Gaussian curvature was calculated as the product of the two principal curvatures,
κG = κ1κ2. (1)
Similarly, the per-vertex mean curvature, shape index, and bending ratio were calculated as
H=1
2 (κ1 + κ2), (2)
S= 2
π arctan( κ1 + κ2
κ1 − κ2
), (3)
and
R = κ2
κ1
. (4)
respectively. As a result, each aorta was prepared for analysis as an implicit surface with per-vertex discrete curvature metrics.
Because diameter has been shown to be a good indicator of the state of an aorta [REF] [15, 16, 17], we aim to disregard the physical size of the aortas altogether. Instead, analysis is performed solely based on their shape, and examine the quantities mentioned above parameterized only by distance along the mesh measured in the number of edges. Thus, the methods with which the aortas are meshed prove crucial to our analysis. First, each aorta within the dataset was meshed using a lab-frame approach-
 in which the size of each element was constrained to a preset physical area (a mesh of constant element density). For constant element density meshes, the output signal from the PCF algorithm should indeed convolute the size of the aorta itself, with meshes of larger aortas containing more elements. Therefore, the extrinsic meshes – with a fixed number of elements – are used in the analysis as a baseline for algorithm output: an extension of the ideal shape calibration. To remove mesh density as -
a confounding variable in the PCF analysis, each aorta was further re-meshed using a quadric error metric decimation algorithm [18] from open-source Python libraries. The aortas were re-meshed to all contain the exact same number of triangular elements (5000 elements per aorta), regardless of size and thus results in vertices that are relative distances away from one another as size varies.
4

Figure 1: The meshes of two aortas: one healthy (a) and for which no surgical intervention was required, and one unhealthy (b) for which a second surgical intervention more than 30 days following the initial TEVAR was required.
5

2.2.2 Synthetic Shapes
Prior to the classification of aortic disease state, we validated the use of the TPCF by testing it against expected results for synthetic shapes, including spheres and cylinders. The meshes were created using Trimesh, an open-source Python library. The shapes were spheres and cylinders, which included “idealized” versions as well as variations with varying levels of perturbations to their surfaces. Throughout our analysis, the aorta scans were treated as bent and deformed versions of the syntheti-
c cylinders to explain similarity in the TPCF signal.
2.3 Topographical Pair Correlation Functions
2.3.1 Equation and Notation
The pair correlation function, or PCF, is a construct that is used throughout condensed matter and biophysics to capture the spatial decay of short-range order in disordered systems. Traditionally represented as a density-density PCF, it is calculated as an average over all particles [replace], counting particles and averaging over volume. We adapt a discrete version as shown in Equation 5.
g(r) = 1
N
P
k
p2
k
N
X
i


1
n(r, i)
n(r,i)
X
j
pipj

 (5)
The TPFC, g(r), is a function of distance r measured in edges along the mesh. The number of vertices to which r is the minimum number of edges from vertex i is denoted by n(r, i). All vertices that are reached in a fewer number of edges are neglected in the calculation. Here, N corresponds to the total number of vertices in the mesh, and pi is the value of a predetermined curvature metric (κG, H, S, R) at vertex i. Because the goal is to develop features related to shape and not size, the distance-
 metric in the TPCF of the mesh will remain parameterized by the number of edges and not by a real-space distance. This guided the choice of meshing.
2.3.2 Featurization and Classification
Classification of the cohorts of healthy and pathological aortas is done using support vector machines, and a decision boundary is drawn to differentiate the regime in which aortas tend to be healthy from that in which they are typically unhealthy. Across the 38 pathological aortas, 37 healthy aortas, and parameterization by the four distinct curvature metrics, the features used in classifying the aortas are: (1) the area under the TPCF curves for each and (2) mean aortic radius, given in mm.
6

3 Results and Discussion
3.1 Single-Point Statistics
Attempting classification only with point statistics (using metrics not explored in previous work) is ineffective. As shown in Fig. 2, there are distinct differences in the distributions of point curvatures between healthy and unhealthy for all curvature metrics. However, this information relays nothing about spatial correlation of curvature and reveals nothing directly about the shape of the aortas. Significant overlap of these distributions for healthy and unhealthy further complicates the probl-
em of classifying disease state without considering spatial correlation.
3.2 TPCFs for Synthetic Shapes
We use here the TPCF to circumvent several challenges posed by analysis of point statistics alone. Through validation with ideal and perturbed synthetic shapes, meshes of spheres and cylinders, we discovered dependence on the spatial frequency and intensity of perturbations along each surface. The TPCF for the perturbed sphere plateaus at a value that depends on the intensity of the perturbations. We also observed a cutoff distance > 30 edges for all shapes, characterized by a sudden decay of the -
TPCF as a result of fewer accessible vertices, but which depends ultimately upon the density of elements in the mesh.
The TPCF for the deformed cylinders is qualitatively very similar to that of the aortas shown later, when parameterized by Gaussian curvature. At short distances, the signal attenuates rapidly, reaches a minimum, and then either begins to increase monotonically again or fluctuates about a near-zero correlation.
3.3 TPCFs for Thoracic Aortas
The TPCFs were parameterized by the same four curvature metrics as in Section 3.1 — Gaussian curvature, mean curvature, shape index, and bending ratio — and are plotted below for distances from 0 up to 30 edges. We observe similar qualitative behavior between the TPCF parameterized by Gaussian curvature and bending ratio, and similar but more distinctive behavior for shape index and mean curvature. The TPCF signal cleanly separates into two or more bands.
Classification using aortic size and area under the TPCF as the primary features, with an accuracy of 0.95, proved the most effective when the TPCF was parameterized by shape index. Accuracies for Gaussian curvature, mean curvature, and bending ratio were 0.93, 0.93, and 0.92 respectively.
4 Conclusion
The TPCF provides a robust, novel method with which to discriminate between healthy and unhealthy aortas by using morphological features, neglecting the sheer size of an aorta as
7

Figure 2: The counts of per-vertex values of all four curvature metrics for (a) healthy and (b) unhealthy aortas. (c) The distributions of average curvature across the healthy (blue) and unhealthy (red) aortas.
8

Figure 3: The Gaussian curvature-paramterized TPCFs for (a) ideal spheres and (b) ideal cylinders while varying the radius, and (c) perturbed spheres and (d) perturbed cylinders with fixed radius but increasing intensity of perturbations.
9

Figure 4: The aortic TPCFs for (a) Gaussian curvature, (b) mean curvature, (c) shape index, and (d) bending ratio. Bolded are the TPCFs for representative healthy (blue) and pathological (red) aortas.
10

Figure 5: Support Vector Classification performed for TCPF AUC vs. aortic size when the TPCF is parameterized by (a) Gaussian curvature, (b) mean curvature, (c) shape index, and (d) bending ratio. Bolded points represent the same healthy (blue) and pathological (red) aortas as in Fig. 4.
11

an indicator of its disease state. Classification accuracies of ≥ 0.90 for all curvature metrics indicate that the TPCF is as, if not more, powerful than features based on single-point statistics, such as δK, when used for classification of disease state. Beyond applications in TEVAR planning, the TPCF is a valuable metric that is sensitive to long-length scale correlations of structural features in a diversity of tissues.
5 Acknowledgments
We would like to acknowledge the support of National Institutes of Health grant number R01HL159205 in addition to the Center for Research Informatics, which is funded by the Biological Sciences Division at the University of Chicago with additional funding provided by the Institute for Translational Medicine, CTSA grant number 2U54TR002389-06 from the National Institutes of Health. Covestro Science Award (NRW).
References
[1] S. Demertzis et al. Aortic arch morphometry in living humans. Clinical Anatomy, 23(7):710–718, 2010.
[2] S. Demertzis, S. Hurni, M. Stalder, B. Gahl, G. Herrmann, and J. Van den Berg. Aortic arch morphometry in living humans. Journal of Anatomy, 217(5):588–596, 2010.
[3] H. Schumacher, H. H. Eckstein, F. Kallinowski, and J. R. Allenberg. Morphometry and classification in abdominal aortic aneurysms: Patient selection for endovascular and open surgery. Journal of Endovascular Surgery, 4(1):39–44, 1997.
[4] M. E. Casciaro, D. Craiem, G. Chironi, S. Graf, L. Macron, E. Mousseaux, A. Simon, and R. L. Armentano. Identifying the principal modes of variation in human thoracic aorta morphology. Journal of Thoracic Imaging, 29(4):224–232, 2014.
[5] Jan L. Bruse, Kristin McLeod, Giovanni Biglino, Hopewell N. Ntsinjana, Claudio Capelli, Tain-Yen Hsia, Maxime Sermesant, Xavier Pennec, Andrew M. Taylor, Silvia Schievano, and the Modeling of Congenital Hearts Alliance Collaborative Group. A statistical shape modelling framework to extract 3d shape biomarkers from medical imaging data: assessing arch morphology of repaired coarctation of the aorta. BMC Medical Imaging, 16(1):40, 2016.
[6] Miika Kiema, Jaakko K. Sarin, S. Petteri Kauhanen, Jari Torniainen, Hanna Matikka, Emma-Sofia Luoto, Pekka Jaakkola, Petri Saari, Timo Liimatainen, Ritva Vanninen, Seppo Yla-Herttuala, Marja Hedman, and Johanna P. Laakkonen. Wall shear stress predicts media degeneration and biomechanical changes in thoracic aorta. Frontiers in Physiology, 13:Article 934941, 2022.
[7] Jessica G. Williams, David Marlevi, Jan L. Bruse, Farhad R. Nezami, Hamed Moradi, Ronald N. Fortunato, Spandan Maiti, Marie Billaud, Elazer R. Edelman, and
12

Thomas G. Gleason. Aortic dissection is determined by specific shape and hemodynamic interactions. Annals of Biomedical Engineering, 50(12):1771–1786, 2022.
[8] L. Liang, M. Liu, C. Martin, J. A. Elefteriades, and W. Sun. A machine learning approach to investigate the relationship between shape features and numerically predicted risk of ascending aortic aneurysm. Biomechanics and Modeling in Mechanobiology, 16(5):1519–1533, 2017.
[9] Federica Cosentino, Giuseppe M. Raffa, Giovanni Gentile, Valentina Agnese, Diego Bellavia, Michele Pilato, and Salvatore Pasta. Statistical shape analysis of ascending thoracic aortic aneurysm: Correlation between shape and biomechanical descriptors. Journal of Personalized Medicine, 10(2), 2020.
[10] Kameel Khabaz, Karen Yuan, Joseph Pugar, David Jiang, Seth Sankary, Sanjeev Dhara, Junsung Kim, Janet Kang, Nhung Nguyen, Kathleen Cao, Newell Washburn, Nicole Bohr, Cheong Jun Lee, Gordon Kindlmann, Ross Milner, and Luka Pocivavsek. The geometric evolution of aortic dissections: Predicting surgical success using fluctuations in integrated gaussian curvature. PLOS Computational Biology, 20(2):e1011815, 2024.
[11] Jean-Pierre Hansen and Ian R. McDonald. Theory of Simple Liquids: With Applications to Soft Matter. Academic Press, Oxford, 4 edition, 2013.
[12] Paul M. Chaikin and Tom C. Lubensky. Principles of Condensed Matter Physics. Cambridge University Press, Cambridge, 1995.
[13] Jan J. Koenderink and Andrea J. van Doorn. Surface shape and curvature scales. Image and Vision Computing, 10(8):557–565, 1992.
[14] Szymon Rusinkiewicz. Estimating curvatures and their derivatives on triangle meshes. In Proceedings of the 2nd International Symposium on 3D Data Processing, Visualization and Transmission (3DPVT 2004), pages 486–493, 2004.
[15] Ryan R. Davies, Lee J. Goldstein, Michael A. Coady, Shawn L. Tittle, John A. Rizzo, Gary S. Kopf, and John A. Elefteriades. Yearly rupture or dissection rates for thoracic aortic aneurysms: simple prediction based on size. The Annals of Thoracic Surgery, 73(1):17–27, 2002.
[16] Judith Z. Goldfinger, Jonathan L. Halperin, Michael L. Marin, Allan S. Stewart, Kim A. Eagle, and Valentin Fuster. Thoracic aortic aneurysm and dissection. Journal of the American College of Cardiology, 64(16):1725–1739, 2014.
[17] Eric M. Isselbacher, Ourania Preventza, James H. III Black, John G. Augoustides, Adam W. Beck, Michael A. Bolen, Alan C. Braverman, Bruce E. Bray, Maya M. BrownZimmerman, Edward P. Chen, Tyrone J. Collins, Abe Jr. DeAnda, Christina L. Fanola, Leonard N. Girardi, Caitlin W. Hicks, Dawn S. Hui, William S. Jones, Vidyasagar Kalahasti, Karen M. Kim, Dianna M. Milewicz, Gustavo S. Oderich, Laura Ogbechie, Susan B. Promes, Elsie G. Ross, Marc L. Schermerhorn, Sabrina S. Times, Elaine E. Tseng,
13

Grace J. Wang, and Y. Joseph Woo. 2022 acc/aha guideline for the diagnosis and management of aortic disease: A report of the american heart association/american college of cardiology joint committee on clinical practice guidelines. Circulation, 146(24):e334e482, 2022.
[18] Michael Garland and Paul S. Heckbert. Surface simplification using quadric error metrics. In Proceedings of the 24th Annual Conference on Computer Graphics and Interactive Techniques (SIGGRAPH 97), pages 209–216, 1997.
14

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:21.500Z
- **Text Length:** 22979 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 14 of 14
