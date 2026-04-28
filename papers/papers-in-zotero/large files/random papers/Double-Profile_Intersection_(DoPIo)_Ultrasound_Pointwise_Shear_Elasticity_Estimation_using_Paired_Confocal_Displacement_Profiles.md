# PDF Document: Yokoyama et al. - 2025 - Double-Profile Intersection (DoPIo) Ultrasound Pointwise Shear Elasticity Estimation using Paired C.pdf

**File Path:** Yokoyama et al. - 2025 - Double-Profile Intersection (DoPIo) Ultrasound Pointwise Shear Elasticity Estimation using Paired C.pdf

**Processed Date:** 2026-02-10T18:18:09.186Z

**File Size:** 1547.49 KB

**Total Pages:** 9

**Extracted Pages:** 9

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3639

**Title:** Double-Profile Intersection (DoPIo) Ultrasound: Pointwise Shear Elasticity Estimation using Paired Confocal Displacement Profiles

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

<Society logo(s) and publication title will appear here.>
Received XX Month, XXXX; revised XX Month, XXXX; accepted XX Month, XXXX; Date of publication XX Month, XXXX; date of current version XX Month, XXXX.
Digital Object Identifier 10.1109/XXXX.2025.xxxxxxx
Double-Profile Intersection (DoPIo) Ultrasound: Pointwise Shear Elasticity Estimation using Paired Confocal Displacement Profiles
Keita A. Yokoyama1, Graduate Student Member, IEEE, Md. Murad Hossain2, Member, IEEE, Sabiq Muhtadi1, Graduate Student Member, IEEE, and Caterina M. Gallippi1, Senior Member, IEEE
1 Lampe Joint Department of Biomedical Engineering, University of North Carolina at Chapel Hill and North Carolina State University, Chapel Hill, NC 27599 USA
2 Department of Electrical and Computer Engineering at the University of Hawai’i at M  ̄anoa, HI 96822 USA
Corresponding author: Caterina M. Gallippi, email: cmgallip@email.unc.edu
This work was funded by the NCI, NHLBI, and NIDDK of the National Institute of Health (NIH), under award numbers R01HL092944, R01CA281150, R01DK107740, R25DK131344, R43DK112492, and T32DK007750. M. M. Hossain was affiliated with the Lampe Joint Department at the time of his contributions.
ABSTRACT Current acoustic radiation force (ARF) based methods for quantifying tissue elasticity primarily rely on shear wave propagation. However, their spatial resolution is limited by the need for spatial averaging, and their accuracy is affected by shear wave guidance, out of plane reflections, and geometric dispersion, which reduce their applicability in mechanically complex tissues. This study introduces a novel technique called Double Profile Intersection (DoPIo) ultrasound, which enables po-
intwise estimation of shear elastic modulus within the region of ARF excitation by leveraging the scatterer shearing rate. This rate is inferred by tracking ARF induced displacement using two tracking beams with different lateral widths. The wider beam captures scatterers located outside the ARF excitation region that begin to displace as shearing propagates. The time at which the two resulting displacement profiles intersect is mapped to shear elastic modulus using an empirically derived model ba-
sed on finite element simulations. In silico, DoPIo estimated shear elastic modulus with a median error of -0.02 kPa and a median absolute deviation of 1.98 kPa in elastic materials up to 35 kPa. Experimental validation in vitro and ex vivo demonstrated that DoPIo reliably distinguished softer regions from stiffer ones, and its modulus estimates remained consistent across varying ARF push amplitudes, provided sufficient displacement estimation signal to noise ratio. DoPIo offers a feasible approac-
h for high resolution, on axis shear elasticity estimation and holds promise as a quantitative biomarker that is independent of ARF amplitude.
INDEX TERMS ARFI, beamforming, DoPIo, elastography.
I. Introduction
T
ISSUE elasticity has long served as a biomarker for pathology, from manual palpation to modern approaches in ultrasonic elastography [1]. Elastography techniques estimate mechanical properties of tissue by analyzing how tissue moves in response to internal or external forces. One such external force is acoustic radiation force (ARF), where focused ultrasonic pulses are noninvasively generated [2], [3]. ARF-based elastography has become par
ticularly useful for identifying compositional and structural changes in soft organs including the liver [4], [5], breast [6][8], thyroid [9], and prostate [7]. Two major categories of ARF based methods are acoustic radiation force impulse (ARFI) [1] and shear wave elasticity imaging (SWEI) [10]. In ARFI, the amplitude of tissue displacement within the ARF excitation region is inversely related to tissue stiffness. However, displacement amplitude is influenced by both tissue stiffness and the ARF
This work is licensed under a Creative Commons Attribution 4.0 License. For more information, see https://creativecommons.org/licenses/by/4.0/
VOLUME , 1
arXiv:2511.16878v1 [physics.med-ph] 21 Nov 2025

Yokoyama et al.: DoPIo Ultrasound: Pointwise Shear Elasticity Estimation using Paired Confocal Displacement Profiles:
amplitude, which is typically unknown, limiting ARFI to qualitative assessments of relative stiffness within a spatial region assumed to experience consistent ARF amplitude. In SWEI, the velocity of ARF induced shear waves is directly related to tissue stiffness. The velocity must be measured over millimeter scale distances, which requires spatial averaging. Additionally, shear wave propagation is affected by wave guidance, out of plane reflections, and geometric dispersion, all of which complicat-
e interpretation in mechanically complex tissues. To overcome these limitations, we introduce an alternative acoustic radiation force-based method for tissue elasticity quantification called Double Profile Intersection (DoPIo) ultrasound. Instead of relying on shear wave velocity, DoPIo estimates elastic modulus by analyzing the scatterer shearing rate within the region of ARF excitation.
II. Double-Profile Intersection Elastography
To understand DoPIo imaging, consider that an acoustic radiation force (ARF) excitation induces displacement of subresolution scatterers. At the moment of excitation, scatterers located at the center of the ARF point spread function (PSF), where the ARF amplitude is highest, displace more than those near the edges of the PSF, where the amplitude is lower [10]–[12]. Scatterers located outside the ARF PSF do not initially displace. This spatial gradient in displacement creates scatterer shearing, wh-
ich propagates outward from the center of the ARF PSF over time [13]. If these scatterer displacements are tracked using a beam with a PSF that is confocal with, and equally wide as the ARF push beam, the resulting A-line will reflect the weighted average displacement of all of the excited scatterers [14], [15]. On the other hand, if a confocal tracking beam has a PSF that is narrower than the ARF excitation, then the resulting A-line will reflect only the average motion of the scatterers near the-
 center of the ARF PSF. These scatterers respond immediately to the ARF excitation and then undergo elastic recovery. In contrast, if displacements are tracked using a confocal beam with a PSF that is wider than the ARF excitation, the resulting A-line will average together both the initially displaced scatterers and those that begin to move later due to the propagation of scatterer shearing. As a result, the displacement profiles that will be measured from the A-lines generated by these different-
 tracking approaches will differ. Since all three displacement profiles encode information about the mechanical response of the same region of tissue to the same applied ARF, they can be compared to reveal the speed at which scatterer shearing propagates laterally. For example, because scatterer shearing propagates faster in stiffer media, the time at which the narrow and wide tracking beams report the same average scatterer displacement occurs earlier. To quantify this phenomenon, we define the t-
ime at which the two displacement profiles intersect as the “timeintersect”, denoted as tint. This time-intersect is related to
FIGURE 1. Conceptual illustration of the beam sequence and signal processing employed in DoPIo elastography. From left to right: (1) An acoustic radiation force excitation is applied with a predetermined focal configuration. (2-4) Scatterer displacements are tracked over time using two confocal tracking beams with different lateral widths. (5) The time at which the resulting displacement profiles intersect, denoted as tint, reflects the rate of lateral scatterer shearing and is related to shear el-
astic modulus through an empirically derived model.
FIGURE 2. Flowchart illustrating the DoPIo imaging procedure, including (top row) development of the empirical model and (bottom row) its evaluation using simulated and experimentally acquired displacement datasets. Times-intersect values (tint) are measured at depth z to estimate the shear elastic modulus (G).
shear elastic modulus through an empirically derived model. Figure 1 illustrates DoPIo’s conceptual framework. We previously introduced DoPIo and demonstrated it for quantifying shear elastic modulus in silico [16]–[18] and experimentally in select imaging and processing pipelines [19][21]. This work builds on our previous work by identifying the ARF excitation and tracking beam focal configurations and sequences, as well as the empirical model, that yield the most accurate and precise shear elast-
ic modulus estimates. The performance of these optimized DoPIo methods is then evaluated in silico, in vitro, and ex vivo.
III. Methods
In the first subsection, the parameters for in silico experiments and the process of detecting tint are defined. The next subsection describes how empirical models according to Eq. 2 and 3 are created, as well as how they are evaluated in various additional in silico phantoms. Finally, experimental implementations of DoPIo are demonstrated in a calibrated phantom and in an ex vivo porcine liver. The contexts of these procedures are illustrated in Fig. 2.
2 VOLUME ,

<Society logo(s) and publication title will appear here.>
A. Ultrasonic Imaging Simulations
DoPIo ultrasound was simulated following the procedures originally introduced by Palmeri et al. [22], [23]. Using the linear ultrasound simulator Field-II [24], [25], ARF excitations were simulated with the specifications of the Philips ATL L7-4 (Bothell, WA, USA), a linear array with an elevational lens focused at 25.0 mm. Two ARF focal configurations, F/1.5 and F/3.0, were simulated for comparison, both at a focal depth of 25.0 mm. The ARF intensity fields were normalized around the focal depth,-
 scaled to an ISPPA of 5000 W cm−2, and converted into body forces in the axial direction (i.e. z, the direction of acoustic wave propagation) using Eq. 1:
⃗Fz = 2α⃗I
c (1)
A sound speed, c, of 1540 m/s was assumed, as well as an acoustic attenuation coefficient, α, of 0.5 dB/cm/MHz with respect to the transmit frequency. Eq. 1 was evaluated throughout a hexahedral grid of nodes that were uniformly spaced 0.100 mm apart to represent the ARF push as nodal body forces. This force was applied onto the mesh for 71.2 μs (300 cycles) at 4.21 MHz, and the resulting displacement response was simulated using the finite element analysis tool LS-DYNA (ANSYS, Canonsburg, PA, USA-
). Elements were defined as *MAT_ELASTIC with a density of 1000 kg m−3, Poisson’s ratio of 0.499, and Young’s moduli based on the experiment described in the following subsections. The outer six elements of the mesh in all directions were replaced with *MAT_PML_ELASTIC defined using identical Young’s moduli. All non-LS-DYNA operations were performed through MATLAB R2019a (MathWorks Inc., Natick, MA, USA). Scatterers of normally distributed reflectivity were randomly placed throughout the mesh such-
 that the average scatterer density was 1485 mm−3, corresponding to about 271, 541, and 902 scatterers per resolution cell for F/1.5, F/3.0, and F/5.0 track beams, respectively. Twenty unique realizations of scatterers were simulated. Scatterers were displaced according to the FEM’s nodal displacements at every 0.1 ms (i.e. based on a 10 kHz tracking pulse repetition frequency, or PRF), and the displacements were encoded into radio frequency (RF) A-lines using FieldII with two categories of beam s-
equences. One category involved transmitting a first ARF excitation and tracking it with a narrower tracking beam, then transmitting a second ARF excitation configured as the first and tracking it with a wider tracking beam. We term this sequence a ”separate acquisition”. The second category involved transmitting only one ARF excitation and simultaneously tracking it with two tracking beams, one narrower than the other. We term this sequence a ”simultaneous acquisition”. In the case of the separat-
e acquisition, the tracking beams’ focal configuration on transmit matched that on receive. In the case of the simultaneous acquisition, the tracking beam transmit focal
configuration matched that of the wider receive focal configuration. Tracking beam receive focal configurations of F/1.5, F/3.0, and F/5.0 were simulated to support the comparison of DoPIo elastic modulus estimation using the tracking beam pairings (tFc) of F/1.5 and F/3.0 or F/1.5 and F/5.0. These two pairings, each with either separate or simultaneous acquisitions, were combined with either an F/1.5 or F/3.0 ARF excitation, for a total of eight evaluated DoPIo beam sequences (Table 1). For all e-
ight beam sequences, tracking beams were two cycles in durations centered at 6.25 MHz. Dynamic receive focusing applied at the center frequency of the track pulses. Using a 10 KHz PRF, ensembles of 6.0 ms were simulated. To the generated ensembles, one-dimensional axial displacements were tracked using normalized cross-correlation (NCC) with a 2-wavelength (500 μm) tracking kernel and a 0.3-wavelength (80 μm) search window [26]. A polynomial motion filter was applied to each resulting displacement-
 profile based on the pre-ARF push displacement and the last 2.0 ms of displacement estimates [27] and upsampled tenfold using piecewise-cubic interpolation [28].
B. Empirical Model Development
To generate a library of tint for materials of different shear moduli, ten LS-DYNA meshes were created. Elements in each mesh were homogeneously assigned one of 10 shear modulus values ranging from 1 kPa in 4 kPa increments up to 37 kPa. For each mesh, ARF-induced displacement profiles were generated as described above, and then tint were calculated as the first time the paired tracking beams’ displacement profiles intersected after the occurrence of their peak displacements. Times-intersect were -
measured over an axial range that spanned 10 mm above and below the 25 mm focal depth. At each axial depth, times-intersect underwent one of two options for nonlinear correlation to shear elastic modulus. The first option was an inverse-square transformation, shown in Equation 2. This transformation represents a treatment of tint that resembles shear wave-based techniques, where G is proportional to the inverse square of the time duration of shear wave propagation.
G(tint, z) = A(z)t−2
int + B(z) (2)
The other option, shown in Equation 3, generalizes the relationship in Eq. 2 so that an additional degree of freedom is afforded for the exponent of tint, allowing for a more flexible relationship between it and G. Here, ln (x) is the natural logarithm of x, and tARF is the duration of the ARF push.
ln (G(tint, z)) = A(z) ln tint − tARF
tARF
+ B(z) (3)
For both models, total least squares linear regression [29] was performed between transformed times-intersect and
VOLUME , 3

Yokoyama et al.: DoPIo Ultrasound: Pointwise Shear Elasticity Estimation using Paired Confocal Displacement Profiles:
TABLE 1. ARF Push and Track Beam Focal Configuration Combinations (tFc)
Wide Track F/3.0 Wide Track F/5.0
Sequential Acq. Simultaneous Acq. Sequential Acq. Simultaneous Acq.
F/1.5
Push
Push F/1.5
Track Tx F/1.5, Rx F/1.5 and
Track Tx F/3.0, Rx F/3.0
Push F/1.5
Track Tx F/3.0, Rx F/1.5 and
Track Tx F/3.0, Rx F/3.0
Push F/1.5
Track Tx F/1.5, Rx F/1.5 and
Track Tx F/5.0, Rx F/5.0
Push F/1.5
Track Tx F/5.0, Rx F/1.5 and
Track Tx F/5.0, Rx F/5.0
F/3.0
Push
Push F/3.0
Track Tx F/1.5, Rx F/1.5 and
Track Tx F/3.0, Rx F/3.0
Push F/3.0
Track Tx F/3.0, Rx F/1.5 and
Track Tx F/3.0, Rx F/3.0
Push F/3.0
Track Tx F/1.5, Rx F/1.5 and
Track Tx F/5.0, Rx F/5.0
Push F/3.0
Track Tx F/5.0, Rx F/1.5 and
Track Tx F/5.0, Rx F/5.0
shear moduli. This resulted in a map of polynomial coefficients across different axial positions that could be used to convert time-intersect into a shear modulus estimate for a given set of DoPIo beam parameters.
C. DoPIo Performance Evaluation
To evaluate the performances of the derived empirical models, additional simulations of ARF displacements were performed using FEM simulations of tissues with different stiffnesses for linearly elastic, isotropic materials with shear moduli from 3 to 27 kPa in 4 kPa increments. The beam sequence and model parameters that led to the smallest median error of shear elastic modulus estimates at the focal depth were considered the best-performing process for DoPIo. Once the best-performing DoPIo beam s-
equence and model were identified in silico, their accuracy and precision for shear elastic modulus prediction were evaluated in vitro in a CIRS Type 049 calibrated elasticity phantom (CIRS, Norfolk, VA, USA). Two-dimensional imaging was achieved by sequentially performing DoPIo data collection in 40 lateral positions spaced 0.48 mm apart, leading to a roughly 2 cm lateral field of view. Each of the four cylindrical inclusions in the phantom were imaged in this manner five separate times on a moti-
on isolation table (ThorLabs, Newton, NJ, USA) using a Verasonics Vantage 256 unit (Kirkland, WA, USA) and the L7-4. The ARF voltage was varied from 35 V to 60 V in 5 V increments to evaluate the impact of ARF magnitude on DoPIo modulus estimates. DoPIo performance was similarly evaluated ex vivo in a custom porcine liver-based phantom [30]. Here, the liver of a pig sacrificed within 15 hours was acquired from a local butcher. A region of tissue away from fascia and large vasculature was identifie-
d, and a prism with 3-cm cross-sectional square sides was excised. A 10 mm diameter cylinder was cut using a disposable biopsy punch (Robbins Instruments, Houston, TX, USA). Then, 600 ml of linearly elastic and acoustically attenuating gelatin-graphite material with an approximate Young’s modulus of 15 kPa and attenuation of 0.5 dB/cm/MHz was created [31], [32]. The excised liver was immersed into the solution such that the gelatin solution filled the punched hole and surrounded the liver. The com-
posite phantom was allowed to solidify for 24 hours in a refrigerator.
The resulting phantom was returned to room temperature, and then three repeated measures were taken using the L7-4 array in an identical manner to that used to image the CIRS phantom. Since the true elasticity of the liver is unknown and the stiffness of the gelatin mixture is only an approximation, a comparison measurement of shear elasticity was taken using the Siemens Acuson Sequoia clinical scanner (Siemens Healthineers Ultrasound Division, Issaquah, WA, USA). An Acuson 10L4 linear array trans-
ducer was placed in the identical position as the L7-4 array, and three 2-D shear wave elasticity images were acquired using its standard clinical SWEI imaging mode. These clinical scanner-acquired shear elasticity estimates were used as the validation stanndard for DoPIo modulus estimates.
IV. Results
Fig. 3 shows, for the eight evaluated DoPIo beam sequences using the simulated materials that were not included in the empirical model development, distributions of timesintersect measured at a depth of 25.00 mm versus shear elastic modulus. The normalized differences between those distributions (Hedge’s g effect sizes) and p-values indicating the probability of null hypotheses (Kruskal-Wallis test with Bonferroni posthoc correction) are shown in Fig. 4.
3 7 11 15 19 23 27 31 35
0.2
0.3
0.4
0.5
0.6
0.7
0.8
0.9
1
Times-Intersect (ms)
(a) tint from Separately Tracked Displacement Profile Pairs
Simulated Shear Elastic Modulus (kPa)
Push F/1.5, Track F/1.5 and F/3.0 Push F/1.5, Track F/1.5 and F/5.0
Push F/3.0, Track F/1.5 and F/3.0 Push F/3.0, Track F/1.5 and F/5.0
3 7 11 15 19 23 27 31 35
0.2
0.3
0.4
0.5
0.6
0.7
0.8
0.9
1
Times-Intersect (ms)
Simulated Shear Elastic Modulus (kPa)
(b) tint from Simultaneously Tracked Displacement Profile Pairs
FIGURE 3. Distributions of times-intersect values for simulated materials with varying elasticities, obtained using (a) separate or (b) simultaneous displacement tracking. Box plots show the median, interquartile range, 95% confidence interval, and outliers for displacements measured at the focal depth (25 mm) across 20 independent scatterer realizations. Color and shading denote ARF push and tracking beam combinations as indicated in the legend.
Table 2 lists the coefficients of determination (R2) for the line fits created using each beam sequence and both transformations. For every sequence, the arbitrary power
4 VOLUME ,

<Society logo(s) and publication title will appear here.>
3 7 11 15 19 23 27 31 35
3
7
11
15
19
23
27
31
35
3 7 11 15 19 23 27 31 35
3
7
11
15
19
23
27
31
35
kPa
kPa
(a) Separate Acq., Push F/1.5, Track F/1.5 vs F/3.0
0.001 0.005 0.01 0.05 0.1 0.5
Lower Triangle: p-value
0.1 0.2 0.5 0.7 1.0
Upper Triangle: Hedge's g
Separation of Times-Intersect Distributions across Materials with Various Shear Elastic Moduli
3 7 11 15 19 23 27 31 35
3
7
11
15
19
23
27
31
35
3 7 11 15 19 23 27 31 35
3
7
11
15
19
23
27
31
35
kPa
kPa
(b) Simultaneous Acq., Push F/3.0, Track F/1.5 vs F/5.0
FIGURE 4. Statistical comparisons of times-intersect distributions between the simulated materials in Fig. 3, with p-values (Kruskal-Wallis test with Bonferroni post-hoc corrections) on the lower triangle of each grid and Hedge’s g effect sizes on the upper triangle. Results are shown for the focal configuration pairings achieving the greatest separation between materials for (a) separate tracking (F/1.5 push and F/1.5 and F/3.0 track beams) and (b) simultaneous tracking (F/3.0 push and F/1.5 and -
F/5.0 track beams).
model yielded higher R2 values, so it was selected for modulus estimation in silico, in vitro, and ex vivo. Using this model, Fig. 5 shows shear modulus estimates derived from the times-intersect shown in Fig. 3. The median and median absolute deviation of shear modulus estimate errors, as well as percent median errors, are shown in Table 3. Based on the this table’s results, the beam sequence consisting of an F/3.0 ARF excitation with F/1.5 and F/5.0 simultaneous tracking was selected as that whi-
ch best balanced modulus estimation accuracy and precision and was implemented to demonstrate DoPIo in vitro and ex vivo.
TABLE 2. Coefficients of Determination (R2) between True Elastic Modulus
and tint Transforms Assessed at the Focal Depth (25 mm) for Separate
versus Simultaneous Tracking across Various Beam Sequences In Silico
tint Transform Push F/# tFc Sep. Track Simult. Track
Inverse Sq. (Eq. 2)
1.5 1.5 and 3.0 0.525 0.777
1.5 and 5.0 0.557 0.830 3.0 1.5 and 3.0 0.660 0.699
1.5 and 5.0 0.836 0.803
Arbitrary Power (Eq. 3)
1.5 1.5 and 3.0 0.843 0.940
1.5 and 5.0 0.854 0.951 3.0 1.5 and 3.0 0.882 0.923
1.5 and 5.0 0.943 0.954
Fig. 6 depicts, for 55 V ARF excitations, DoPIo images of times-intersect and estimated shear modulus for the background and inclusions in the calibrated elasticity phantom. The estimated median and median absolute deviation of elasticity estimates were 9.0 ± 0.8 kPa in the 8.7 kPa background, 1.6 ± 0.1 kPa in the 2.2 kPa ”Type 1” inclusion, 4.5 ± 0.2 kPa in the 5.1 kPa ”Type 2” inclusion, and 13.0 ± 0.5 kPa in the 16.3 kPa ”Type 3” inclusion, yielding contrast
TABLE 3. Median ± Median Absolute Deviation of Errors between True
and DoPIo-Derived Shear Elastic Modulus at the Focal Depth (25 mm) for
Separate versus Simultaneous Tracking across Various Beam Sequences
In Silico
Push F/# tFc Sep. Track Simult. Track
1.5 1.5 v. 3.0 0.03 ± 3.63 kPa
0.51 ± 24.19 %
0.03 ± 2.39 kPa
0.41 ± 16.51 %
1.5 v. 5.0 -0.13 ± 3.31 kPa
-2.13 ± 20.12 %
-0.06 ± 2.11 kPa
-0.94 ± 13.74 %
3.0 1.5 v. 3.0 -0.13 ± 3.11 kPa
-2.01 ± 20.71 %
-0.05 ± 3.09 kPa
-1.27 ± 19.33 %
1.5 v. 5.0 -0.06 ± 2.53 kPa
-1.00 ± 17.03 %
-0.02 ± 1.98 kPa
-0.50 ± 13.02 %
(a) Est. Shear Moduli from Separately Tracked Disp. Profile Pairs
Push F/1.5, Track F/1.5 vs F/3.0 Push F/1.5, Track F/1.5 vs F/5.0
Push F/3.0, Track F/1.5 vs F/3.0 Push F/3.0, Track F/1.5 vs F/5.0
(b) Est. Shear Moduli from Simultaneously Tracked Disp.Profile Pairs
3 7 11 15 19 23 27 31 35
0
5
10
15
20
25
30
35
40
45
50
Estimated Shear Modulus (kPa)
Simulated Shear Elastic Modulus (kPa)
3 7 11 15 19 23 27 31 35
0
5
10
15
20
25
30
35
40
45
50
Estimated Shear Modulus (kPa)
Simulated Shear Elastic Modulus (kPa)
FIGURE 5. Distributions of DoPIo-derived elastic modulus values for simulated materials with varying elasticities, obtained using (a) separate or (b) simultaneous displacement tracking. Box plots indicate the median, interquartile range, 95% confidence interval, and outliers for displacements measured at the focal depth (25 mm) across 20 independent scatterer realizations. Color and shading represent ARF push and tracking beam combinations, as indicated in the legend.
transfer efficiencies of 1.39, 1.19, and 1.30, respectively. The corresponding distributions of estimated moduli for all six employed ARF voltages levels, as well as example images of the Type 2 inclusion across these power levels, are shown in Fig. 7. Fig. 8 depicts images of DoPIo timesintersect and estimated shear moduli in the custom liver phantom. The associated distributions of estimated moduli in the background liver tissue and the gelatin inclusion for the six ARF voltage levels are also s-
hown, with the SWEI validation standard indicated in orange.
V. Discussion
A. Insights on Times-Intersect and its Measurement
Fig. 3 shows three important trends. First, across all beam sequences, tint decreased nonlinearly with increasing shear modulus. For a given change in modulus, differences in tint were greater for a pair of softer materials versus those of stiffer materials. This trend is important because, since DoPIo estimates modulus from tint, it implies that distinguishing shear elastic moduli in stiffer media is inherently more challenging than among lower ones. Second, when separate tracking is performed, t-
he dynamic range of tint, as well as differences in their magnitudes between moduli, were greater when the ARF push beam was
VOLUME , 5

Yokoyama et al.: DoPIo Ultrasound: Pointwise Shear Elasticity Estimation using Paired Confocal Displacement Profiles:
-10 -5 0 5 10 Lateral (mm)
15
20
25
30
35
kPa
2
4
6
8
10
12
ms
0.4
0.6
0.8
1
1.2
1.4
-10 -5 0 5 10 Lateral (mm)
15
20
25
30
35
Axial (mm)
-10 -5 0 5 10 Lateral (mm)
15
20
25
30
35
Axial (mm)
-10 -5 0 5 10 Lateral (mm)
15
20
25
30
35
-10 -5 0 5 10 Lateral (mm)
15
20
25
30
35
-10 -5 0 5 10 Lateral (mm)
15
20
25
30
35
(a) Times-Intersect, Type 1 Inclusion (b) Times-Intersect, Type 2 Inclusion (c) Times-Intersect, Type 3 Inclusion
(d) DoPIo Est. Modulus, Type 1 Inclusion (e) DoPIo Est. Modulus, Type 2 Inclusion (f) DoPIo Est. Modulus,Type 3 Inclusion
FIGURE 6. Representative DoPIo images delineating elastic inclusions within a calibrated phantom. Panels show tint images (a-c) and corresponding DoPIo-derived elastic modulus images (d-f) for inclusions with nominal elasticities of 2.2 kPa (a, d), 5.1 kPa (b, e), and 16.3 kPa (c, f) embedded in an 8.7 kPa background.
wider and the difference in tracking beam widths was larger. In particular, differences in tint between moduli were largest using the beam sequence that used an F/3.0 ARF excitation and F/1.5 and F/5.0 tracking. Relative to the other examined beam sequences, this beam sequence also achieved the largest effect sizes, as shown in Figure 4. This trend aligns with the conceptual basis of DoPIo’s approach, where shear elastic modulus is estimated by leveraging scatterer shearing. Faster shearing rates -
are more effectively distinguished when differences in tint are greater. This can occur when (1) the difference in lateral widths of the two tracking beams is larger, as well as (2) when scatterers displace in distinctly different manners under one beam’s PSF versus the other’s. This phenomenon was observed when a F/1.5 and F/5.0 track beam combination was used, as those beams had a greater difference in lateral widths compared to the F/1.5 and F/3.0 pair. Paired with a wider F/3.0 ARF push, the F-
/1.5 track beam primarily captured scatterers near the center of the ARF focus that displaced relatively uniformly at the time of excitation. Meanwhile, the F/5.0 beam applies a heavier weighting to scatterers located beyond the main lobe of the ARF push beam. Those outer scatterers displace later, at a time influenced by the rate of scatterer shearing, leading to a more distinct displacement profile that enhances the measurable difference in tint. Third, for that sequence involving an F/3.0 push -
and F/1.5 and F/5.0 tracking, separate and simultaneous tracking yielded comparable tint distributions (Fig. 3). Simultaneous tracking offers advantages in DoPIo by doubling the frame rate, halving the number of required ARF excitations, and reducing susceptibility to motion artifacts. However, it requires transmitting a single pulse with a width matching the wider of the two tracking beams, followed by beamforming the resulting channel data to achieve two distinct receive focal configurations. A -
potential drawback of this approach is the reduced difference in beam widths, which can lead
to smaller tint differences and, consequently, diminished accuracy of modulus estimation - particularly for stiffer materials. This limitation was most evident for the beam sequence using an F/3.0 ARF excitation with F/1.5 and F/3.0 tracking. Since both tracking beams spanned scatterers that were displaced at the time of the ARF excitation and the difference in beam widths was smaller due to the use of simultaneous tracking, stiffness-based trends in tint were less clear than in the separate track-
ing case. However, for the beam sequencing using an F/3.0 ARF excitation and F/1.5 and F/5.0 tracking, tint distributions across elasticities were similar between separate and simultaneous tracking despite the smaller difference in tracking beam widths for the latter case.
B. Relating Times-Intersect to Shear Elastic Modulus
The data included in Table 2 demonstrate that the arbitrary power law model (Eq. 3) consistently yielded higher coefficients of determination compared to the inverse-square model. However, the derived powers varied from 2.1 at the 25-mm focal depth to 1.8 within 10 mm above or below the focus, closely adhering to the inverse-square relationship expected between shear wave propagation time and shear elastic modulus [10], [23]. The deviation from an inversesquare relationship could attribute for the-
 effects of the ARF spatial gradient and duration as well as compression waves, mode conversion, and other factors that impact scatterer shear rate before a planar shear wave is fully formed [10], [11], [33]. When using the arbitrary power law model, Fig. 5 and Table 3 show that DoPIo’s shear elastic modulus estimates were generally accurate across all beam sequences, with median errors smaller than the simulated modulus step size of 4 kPa. Notably, the sequence combining an F/3.0 ARF excitation w-
ith F/1.5 and F/5.0 simultaneous tracking produced the most accurate estimates, consistent with its ability to generate the most distinct tint distributions. However, modulus estimates from all evaluated beam sequences exhibited lower precision in stiffer materials, as indicated by larger interquartile ranges (IQRs) in the modulus estimates in Fig. 5. However, this reduced precision is expected since tint distributions among stiffer materials tend to overlap more than those among softer materials,-
 making them harder to distinguish. While this limitation may be partially addressed by further optimizing tint detection through improved DoPIo beamforming or increased PRF, an alternative modeling approach may ultimately be required to enhance precision in stiffer materials. Such an approach could include machine learning techniques that directly leverage paired displacement profiles as inputs, rather than relying solely on tint as an intermediate metric. Initial results using a support vector m-
achine-based regression model have shown promise in improving modulus estimation precision [34], though further investigation using more advanced techniques is warranted.
6 VOLUME ,

<Society logo(s) and publication title will appear here.>
Background Type 1 Incl. Type 2 Incl. Type 3 Incl. Type 4 Incl.
0
5
10
15
20
25
30
Shear Modulus (kPa)
(g) DoPIo Shear Elasticity Estimates in Calibrated Phantom
35 V 40 V 45 V 50 V 55 V 60 V Truth
kPa
2
4
6
8
10
12
(a) DoPIo Modulus Est., 35 V Push
-10 -5 0 5 10
Lateral (mm)
15
20
25
30
35
Axial (mm)
(b) DoPIo Modulus Est., 40 V Push
-10 -5 0 5 10
Lateral (mm)
15
20
25
30
35
Axial (mm)
(c) DoPIo Modulus Est., 45 V Push
-10 -5 0 5 10
Lateral (mm)
15
20
25
30
35
Axial (mm)
(d) DoPIo Modulus Est., 50 V Push
-10 -5 0 5 10
Lateral (mm)
15
20
25
30
35
Axial (mm)
(e) DoPIo Modulus Est., 55 V Push
-10 -5 0 5 10
Lateral (mm)
15
20
25
30
35
Axial (mm)
(f) DoPIo Modulus Est., 60 V Push
-10 -5 0 5 10
Lateral (mm)
15
20
25
30
35
Axial (mm)
FIGURE 7. Images of DoPIo-derived elastic modulus for a 5.1 kPa inclusion embedded in an 8.7 kPa background, obtained using ARF push amplitudes ranging from 35 V to 60 V in 5 V increments (a-f). Corresponding distributions of modulus estimates are shown for inclusions with nominal elasticities of 2.2 kPa, 5.1 kPa, and 16.3 kPa within the same 8.7 kPa background. Lines indicate pairs of distributions that differ significantly based on the Kruskal-Wallis test with Bonferroni post hoc correction (p ≤-
 0.05).
-10 0 10
10
15
20
25
30
35
40
kPa
5
10
15
20
-10 0 10
10
15
20
25
30
35
40
ms
0.5
1
1.5
(a) B-Mode
-10 0 10
10
15
20
25
30
35
40
䠆
Liver Gelatin
0
5
10
15
Shear Modulus (kPa)
(d) Comparison Across ARF Amplitudes
35 V
40 V Clinical Scanner
45 V 50 V
55 V 60 V
(b) Times-Intersect (c) Est. Shear Modulus
FIGURE 8. B-mode (a), DoPIo times-intersect (b), and DoPIo-derived elastic modulus (c) images of an ex vivo porcine liver containing a gelatin inclusion. The inclusion boundary, delineated under B-mode guidance, is outlined with white dotted lines. The yellow box in (a) indicates the region used to generate the times-intersect and DoPIo modulus estimate images. Corresponding box plots of DoPIo-derived shear elastic modulus estimates (d). The orange box denotes estimates obtained using the Siemens -
Sequoia system, and gray lines indicate pairs of distributions that differ significantly based on the Kruskal-Wallis test with Bonferroni post hoc correction (p ≤ 0.05).
C. In Vivo and Ex Vivo Acquisitions
Fig. 6 shows that elastic inclusions within the calibrated phantom were successfully delineated in the DoPIo images. Qualitatively compared to the background, the 2.2 and 5.1 kPa inclusions exhibited longer tint and lower DoPIoestimated elastic moduli while the 16.3 kPa inclusion showed shorter times-intersect and higher estimated moduli. Quantitatively, DoPIo tended to underestimate the modulus of most features, with median and median absolute deviation errors being larger for stiffer materials (-
e.g. -3.3 ± 0.5 kPa in the 16.3 kPa inclusion) versus softer ones (-0.6 ± 0.2 kPa for the 5.1 kPa inclusion). This discrepancy may stem from increased overlap in tint distributions in stiffer materials, leading to less accurate and less precise modulus estimates. Another contributing factor could be limitations in the empirical model used to relate tint to modulus. Since this model was derived in silico, it may not be optimally calibrated for in vitro applications. This mismatch is potentially due-
 to inconsistencies between simulated and acquired displacement data or greater measurement error in tint during experimental acquisitions. The latter issue may be particularly pronounced in stiffer materials, which undergo
smaller displacements in response to ARF excitation, resulting in displacement magnitudes that approach the inherent variance of the normalized cross-correlation displacement estimator [15], [35]. Fig. 7 investigates the influence of ARF-induced displacement magnitude on DoPIo modulus estimates. Panels (a)-(f) show that the estimated modulus in the 5.1 kPa inclusion remained stable as the ARF voltage increased from 35 V to 60 V. In contrast, the estimated modulus in the 8.7 kPa background rose bet-
ween 35 V and 50 V, then plateaued from 50 V to 60 V. These trends are echoed in the box plots in panel (g). DoPIo modulus estimates for the 2.2 kPa inclusion were consistent across all ARF voltage levels. However, for the 16.3 and 29.0 kPa inclusions, modulus estimates increased with ARF voltage from 35 V to 55 V, then stabilized at 55 V and 60 V. These findings suggest that a minimum threshold of ARF-induced displacement is necessary for reliable times-intersect measurements. Furthermore, for a -
given focal depth and DoPIo beam sequence, stiffer materials require higher ARF push amplitudes to reach this threshold. Importantly, once sufficient displacement is achieved, DoPIo modulus estimates appear to be indepen
VOLUME , 7

Yokoyama et al.: DoPIo Ultrasound: Pointwise Shear Elasticity Estimation using Paired Confocal Displacement Profiles:
dent of ARF amplitude, reinforcing DoPIo’s potential for quantitative, on-axis, ARF-based elasticity imaging. Panel (g) also reveals a noteworthy discrepancy: even at the highest ARF push voltage, DoPIo underestimated the modulus of the 29.0 kPa inclusion by approximately 50%, exceeding the error observed in silico in Fig. 5. This unexpected deviation may result from miscalibration of the empirical tint-to-modulus model for in vitro conditions as previously discussed. Alternatively, it may reflect-
 limitations in accurately and precisely measuring low times-intersect in stiff materials during experimental acquisition. To address this, strategies to increase times-intersect, such as enhancing the difference in lateral widths of the paired tracking beams or increasing the PRF, could be explored. However, these adjustments would come with trade-offs: increasing the difference in lateral beam widths would reduce the lateral field of view for 2D DoPIo imaging and degrade radiofrequency signal-to-
-noise ratio, while the use of higher PRFs would limit imaging depth. Fig. 8 presents DoPIo imaging results from excised liver tissue. As shown in panels (b) and (c), the stiffer gelatin inclusion exhibited lower times-intersect and higher estimated modulus compared to the softer liver background. Panel (d) displays boxplots of DoPIo modulus estimates across all examined ARF voltage levels for both materials. In general, modulus estimates remained consistent across voltages for both gelatin and li-
ver features, indicating that sufficient ARF-induced displacements were achieved to capture reliable times-intersect measurements. However, modulus estimates were consistently lower than those derived from clinical scanner-based validation standards. This underestimation conflicts with DoPIo’s performance in the calibrated phantom, where modulus estimates for media with sub-10 kPa shear moduli were accurate. One possible explanation is the viscoelastic nature of liver tissue. Viscosity may dampen -
scatterer shearing, leading to longer times-intersect and, consequently, lower estimated moduli. Future work will focus on developing methods to account for, and possibly directly interrogate, viscoelastic effects in DoPIo imaging. To achieve this goal, modified acquisition parameters may be employed to enhance DoPIo’s sensitivity to viscous effects, and new data-driven approaches may be explored to exploit viscoelastic behavior that is encoded in displacement profiles.
VI. Conclusion
This work introduces DoPIo ultrasound as a novel method for estimating shear elastic modulus within the region of ARF excitation. Unlike conventional ARF-based techniques that rely on shear wave propagation, DoPIo leverages the shearing rate of scatterers by quantifying the time when displacement profiles from confocal tracking beams with differing lateral widths intersect. This time-intersect metric is mapped to shear modulus using an empirically derived model.
Simulations demonstrated that DoPIo can accurately estimate shear modulus across a range of elastic materials, with the best performance achieved using an F/3.0 ARF excitation and simultaneous tracking with F/1.5 and F/5.0 beam configurations. In vitro and ex vivo experiments confirmed DoPIo’s ability to delineate elastic inclusions and maintain consistent modulus estimates across varying ARF amplitudes given a sufficient displacement signal-to-noise ratio. Importantly, once a threshold displaceme-
nt level was reached, DoPIo estimates were independent of ARF amplitude, supporting its potential as a quantitative on-axis, ARF-based, elasticity imaging method. Despite these strengths, DoPIo exhibited reduced accuracy and precision in stiffer materials, likely due to overlapping time-intersect distributions and limitations in the empirical model derived from simulations. In ex vivo liver imaging, DoPIo underestimated modulus relative to clinical standards, potentially due to scatterer shearing -
dynamics being impacted by the viscoelastic nature of liver tissue. Future work will focus on refining the empirical model to better account for physical imaging conditions, improving time-intersect measurement accuracy in stiff materials through optimized beam sequencing and increased pulse repetition frequency, and extending DoPIo to viscoelasticity characterization. Additionally, machine learning approaches that leverage full displacement profiles rather than relying solely on time-intersect ma-
y enhance precision and generalizability across tissue types. These efforts aim to further establish DoPIo as an ARF amplitude-independent tool for quantitative elasticity imaging in complex tissue environments.
Acknowledgment
The authors wholeheartedly thank Siemens Healthineers for technical and equipment support, and the ITS Research Computing division of the University of North Carolina at Chapel Hill for technical support for the in silico study. K.A.Y., M.M.H., and C.M.G. are inventors on a patent in the United States of America related to this work (9,043,156) and have potential future financial interests in the DoPIo technology. C.M.G. is a current member of the Scientific Advisory Board (SAB) of Verasonics, Inc-
. but receives no royalties, gifts, or in-kind support in association with her service therein. This work was funded by the NCI, NHLBI, and NIDDK of the National Institute of Health (NIH), under award numbers R01HL092944, R01CA281150, R01DK107740, R25DK131344, R43DK112492, and T32DK007750. The content is solely the responsibility of the authors and does not necessarily represent the official views of the National Institutes of Health.
REFERENCES
[1] K. R. Nightingale, M. L. Palmeri, R. W. Nightingale, and G. E. Trahey, “On the feasibility of remote palpation using acoustic radiation force,”
8 VOLUME ,

<Society logo(s) and publication title will appear here.>
The Journal of the Acoustical Society of America, vol. 110, no. 1, pp. 625–34, Jul. 2001. [2] R. M. S. Sigrist, J. Liau, A. E. Kaffas, M. C. Chammas, and J. K. Willmann, “Ultrasound Elastography: Review of Techniques and Clinical Applications,” Theranostics, vol. 7, no. 5, pp. 1303–1329, Mar. 2017. [3] J. R. Doherty, G. E. Trahey, K. R. Nightingale, and M. L. Palmeri, “Acoustic radiation force elasticity imaging in diagnostic ultrasound,” IEEE Transactions on Ultrasonics, Ferroelectrics, and Frequ-
ency Control, vol. 60, no. 4, pp. 685–701, Apr. 2013. [4] N. Frulio, H. Laumonier, T. Carteret, C. Laurent, F. Maire, C. Balabaud, P. Bioulac-Sage, and H. Trillaud, “Evaluation of Liver Tumors Using Acoustic Radiation Force Impulse Elastography and Correlation With Histologic Data,” Journal of Ultrasound in Medicine, vol. 32, no. 1, pp. 121–130, 2013. [5] R. G. Barr, “Can Accurate Shear Wave Velocities Be Obtained in Kidneys?” Journal of Ultrasound in Medicine, vol. 39, no. 6, pp. 10971105, 2020. -
[6] M. Magalh ̃aes, P. Belo-Oliveira, J. Casalta-Lopes, Y. Costa, M. Gonc ̧alo, P. Gomes, and F. Caseiro-Alves, “Diagnostic Value of ARFI (Acoustic Radiation Force Impulse) in Differentiating Benign From Malignant Breast Lesions,” Academic Radiology, vol. 24, no. 1, pp. 45–52, Jan. 2017. [7] T. A. Krouskop, T. M. Wheeler, F. Kallel, B. S. Garra, and T. J. Hall, “Elastic Moduli of Breast and Prostate Tissues under Compression,” Ultrasonic Imaging, vol. 20, no. 4, pp. 260–274, 1998. [8] W.-C. Tsai, -
C. K.-J. Lin, H.-K. Wei, B.-L. Yu, C.-F. Hung, S. H. Cheng, and C.-M. Chen, “Sonographic Elastography Improves the Sensitivity and Specificity of Axilla Sampling in Breast Cancer: A Prospective Study,” Ultrasound in Medicine and Biology, vol. 39, no. 6, pp. 941–949, Jun. 2013. [9] Y.-F. Zhang, H.-X. Xu, J.-M. Xu, C. Liu, L.-H. Guo, L.-N. Liu, J. Zhang, X.-H. Xu, S. Qu, and M. Xing, “Acoustic Radiation Force Impulse Elastography in the Diagnosis of Thyroid Nodules: Useful or Not Useful?” Ultrasound-
 in Medicine and Biology, vol. 41, no. 10, pp. 2581–2593, Oct. 2015. [10] A. P. Sarvazyan, O. V. Rudenko, S. D. Swanson, J. B. Fowlkes, and S. Y. Emelianov, “Shear wave elasticity imaging: A new ultrasonic technology of medical diagnostics,” Ultrasound in medicine & biology, vol. 24, no. 9, pp. 1419–35, Nov. 1998. [11] L. Ostrovsky, A. Sutin, and A. Sarvazyan, “A Non-Dissipative Mechanism of Acoustic Radiation Force Generation,” AIP Conference Proceedings, vol. 838, no. 1, pp. 329–332, May 2006. [-
12] A. P. Sarvazyan, O. V. Rudenko, and M. Fatemi, “Acoustic Radiation Force: A Review of Four Mechanisms for Biomedical Applications,” IEEE Transactions on Ultrasonics, Ferroelectrics, and Frequency Control, vol. 68, no. 11, pp. 3261–3269, Nov. 2021. [13] T. J. Czernuszewicz, J. E. Streeter, P. A. Dayton, and C. M. Gallippi, “Experimental Validation of Displacement Underestimation in ARFI Ultrasound,” Ultrasonic Imaging, vol. 35, no. 3, pp. 196–213, Jul. 2013. [14] W. Walker and G. Trahey, “A fun-
damental limit on delay estimation using partially correlated speckle signals,” IEEE Transactions on Ultrasonics, Ferroelectrics, and Frequency Control, vol. 42, no. 2, pp. 301–308, Mar. 1995. [15] S. McAleavey, K. Nightingale, and G. Trahey, “Estimates of echo correlation and measurement bias in acoustic radiation force impulse imaging,” IEEE Transactions on Ultrasonics, Ferroelectrics, and Frequency Control, vol. 50, no. 6, pp. 631–641, Jun. 2003. [16] K. A. Yokoyama, M. Murad Hossain, and C. M.-
 Gallippi, “Doubleprofile intersection (DoPIo) elastography: A new approach to quantifying tissue elasticity,” in 2019 IEEE International Ultrasonics Symposium (IUS), Oct. 2019, pp. 431–434. [17] K. A. Yokoyama, S. Muhtadi, and C. M. Gallippi, “Bessel FunctionApodized Beams Improve Axial Range for Pointwise Shear Elasticity Estimation with Double-Profile Intersection (DoPIo) Elastography,” in 2023 IEEE International Ultrasonics Symposium (IUS), Sep. 2023, pp. 1–3. [18] S. Muhtadi, K. A. Yokoyama, -
and C. M. Gallippi, “Double Profile Intersection (DoPIo) Ultrasound With Acoustic Radiation Force Tilting Interrogates Young’s Modulus in Transversely Isotropic Media: An In Silico Study,” IEEE Open Journal of Ultrasonics, Ferroelectrics, and Frequency Control, vol. 5, pp. 161–165, 2025.
[19] K. A. Yokoyama and C. M. Gallippi, “Blind Source SeparationBased Displacement Tracking Improves Quantitative, On-Axis Shear Elastic Modulus Estimation from DoPIo Ultrasound,” in 2020 IEEE International Ultrasonics Symposium (IUS), Sep. 2020, pp. 1–4.
[20] K. A. Yokoyama, K. S. Anand, and C. M. Gallippi, “Assessing the Impact of ARF Excitation Beam Width and Tracking Beam Concurrency on DoPIo Imaging Performance in a Calibrated Phantom,” in 2021 IEEE International Ultrasonics Symposium (IUS), Sep. 2021, pp. 1–4. [21] K. A. Yokoyama, T. C. Nichols, and C. M. Gallippi, “Quantitative Estimation of Shear Elastic Heterogeneity and Anisotropy in Excised Canine Kidneys using Double Profile Intersection (DoPIo) Ultrasound,” in 2022 IEEE International U-
ltrasonics Symposium (IUS), Oct. 2022, pp. 1–4. [22] M. L. Palmeri, K. D. Frinkley, and K. R. Nightingale, “Experimental Studies of the Thermal Effects Associated with Radiation Force Imaging of Soft Tissue,” Ultrasonic Imaging, vol. 26, no. 2, pp. 100114, Apr. 2004. [23] M. L. Palmeri, S. A. McAleavey, G. E. Trahey, and K. R. Nightingale, “Ultrasonic tracking of acoustic radiation force-induced displacements in homogeneous media,” IEEE Transactions on Ultrasonics, Ferroelectrics, and Frequency Co-
ntrol, vol. 53, no. 7, pp. 1300–1313, Jul. 2006. [24] J. Jensen and N. Svendsen, “Calculation of pressure fields from arbitrarily shaped, apodized, and excited ultrasound transducers,” IEEE Transactions on Ultrasonics, Ferroelectrics, and Frequency Control, vol. 39, no. 2, pp. 262–267, Mar. 1992. [25] J. A. Jensen, “Field: A Program for Simulating Ultrasound Systems,” in Medical and Biological Engineering and Computing, vol. 34, 1997, pp. 351–353. [26] G. F. Pinton, J. J. Dahl, and G. E. Trahey, “-
Rapid tracking of small displacements with ultrasound.” IEEE transactions on ultrasonics, ferroelectrics, and frequency control, vol. 53, no. 6, pp. 1103–17, Jun. 2006. [27] D. M. Giannantonio, D. M. Dumont, G. E. Trahey, and B. C. Byram, “Comparison of Physiological Motion Filters for In Vivo Cardiac ARFI,” Ultrasonic Imaging, vol. 33, no. 2, pp. 89–108, 2011. [28] F. N. Fritsch and R. E. Carlson, “Monotone Piecewise Cubic Interpolation,” SIAM Journal on Numerical Analysis, vol. 17, no. 2, pp. 23-
8–246, Apr. 1980. [29] I. Markovsky and S. Van Huffel, “Overview of total least-squares methods,” Signal Processing, vol. 87, no. 10, pp. 2283–2302, Oct. 2007. [30] M. M. Hossain and C. M. Gallippi, “Viscoelastic Response Ultrasound Derived Relative Elasticity and Relative Viscosity Reflect True Elasticity and Viscosity: In Silico and Experimental Demonstration,” IEEE Transactions on Ultrasonics, Ferroelectrics, and Frequency Control, vol. 67, no. 6, pp. 1102–1117, 2020. [31] E. L. Madsen, J. A. Z-
agzebski, R. A. Banjavie, and R. E. Jutila, “Tissue mimicking materials for ultrasound phantoms,” Medical Physics, vol. 5, no. 5, pp. 391–394, 1978. [32] T. Hall, M. Bilgen, M. Insana, and T. Krouskop, “Phantom materials for elastography,” IEEE Transactions on Ultrasonics, Ferroelectrics, and Frequency Control, vol. 44, no. 6, pp. 1355–1365, Nov. 1997. [33] L. D. Landau and E. M. Lifshitz, Theory of Elasticity, 3rd ed. Butterworth-Heinemann, Jan. 1986, vol. 7. [34] N. Rahmouni, K. A. Yokoyama, and-
 C. M. Gallippi, “Machine Learning-Based Double-Profile Intersection for Pointwise Prediction of Shear Elastic Modulus through Support Vector Regression,” in 2020 IEEE International Ultrasonics Symposium (IUS), Sep. 2020, pp. 1–4. [35] A. H. Dhanaliwala, J. A. Hossack, and F. W. Mauldin, “Assessing and improving acoustic radiation force image quality using a 1.5-D transducer design,” IEEE Transactions on Ultrasonics, Ferroelectrics, and Frequency Control, vol. 59, no. 7, pp. 1602–1608, Jul. 2012.
VOLUME , 9

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:09.186Z
- **Text Length:** 50926 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 9 of 9
