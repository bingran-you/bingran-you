# PDF Document: Pooladi-Darvish et al. - Lesion-Independent Thalamic Degeneration Identifies Intrinsically Vulnerable Nuclei Associated with.pdf

**File Path:** Pooladi-Darvish et al. - Lesion-Independent Thalamic Degeneration Identifies Intrinsically Vulnerable Nuclei Associated with.pdf

**Processed Date:** 2026-02-10T18:14:36.563Z

**File Size:** 618.35 KB

**Total Pages:** 13

**Extracted Pages:** 13

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3659

**Title:** Lesion-Independent Thalamic Degeneration Identifies Intrinsically Vulnerable Nuclei Associated with Cognitive Impairment in Multiple Sclerosis

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Lesion-Independent Thalamic Degeneration Identifies Intrinsically Vulnerable Nuclei Associated with Cognitive Impairment in Multiple Sclerosis
Arshya Pooladi-Darvish1,2, Heather Rosehart3, Marina R. Everest3, Ali R. Khan1,2, Sarah A. Morrow3,4
1Centre for Functional and Metabolic Mapping, Robarts Research Institute, London, Canada; 2Department of Medical
Biophysics, Western University, London, Canada; 3Department of Clinical Neurological Sciences, Western University, London,
Canada; 4Department of Clinical Neurosciences, Hotchkiss Brain Institute, University of Calgary, Calgary, Canada
Corresponding author. E-mail: sarah.morrow@albertahealthservices.ca
Abstract
Background: Cognitive impairment in multiple sclerosis (MS) is driven by both focal
inflammation and compartmentalized neurodegeneration, yet the relative effect of lesion
independent thalamic atrophy on information processing speed (IPS) remains unclear.
Methods: This retrospective cohort study included 100 participants with MS. Automatic
segmentation techniques quantified lesion load and delineated 26 thalamic regions of interest
(ROIs). Linear models compared associations between ROI volumes and Symbol Digit
Modalities Test (SDMT) performance in lesion-adjusted and unadjusted models.
Results: Twenty-one of 26 ROIs showed significant SDMT associations before lesion
adjustment; twelve remained significant after adjustment. Lesion-independent associations were
observed in the global thalamus, sensory relay nuclei (ventral posterolateral, medial and lateral
geniculate), and associative hubs (pulvinar and mediodorsal-parafascicular complex). These
intrinsically vulnerable nuclei exhibited significantly lower lesion-mediated effects (13.4%) than
those losing significance after adjustment (34.2%, p < 0.001).
Conclusion: Our findings suggest that IPS impairment reflects heterogenous contributions from
both primary and secondary degeneration, with nucleus-specific phenotyping potentially
informing identification of higher risk individuals.
Keywords: multiple sclerosis, thalamus, information processing speed, lesions, cognitive
decline, neuroimaging

2
Introduction
The prevailing view is shifting toward recognizing cognitive impairment in multiple sclerosis
(MS) as the product of two parallel yet distinct pathological processes: focal inflammatory
lesions that characterize relapsing disease activity, and compartmentalized neurodegeneration
that occurs independently of inflammatory activity.1 This distinction has important implications
for persistent cognitive decline despite suppression of relapse activity. Numerous MRI and
neuropathological studies demonstrate that deep grey matter (DGM) atrophy is strongly linked to
lesion-mediated effects, which supports a secondary mechanism.2–7 It has been shown that DGM
structures, particularly the thalamus, atrophy earlier and faster than cortical regions and
demonstrate strong associations with cognitive outcomes. 8–12
Global and nucleus-specific thalamic atrophy have been demonstrated to be strong
correlates of cognitive slowing in MS.2,4,13–18 Information processing speed (IPS) is the most
frequently impaired cognitive domain in MS. IPS demonstrates robust correlations with thalamic
structural and microstructural integrity, reflecting lesion-mediated disconnection, microglial
activation, and CSF-interface vulnerability.1,3,4,6,7,19 The precise interplay and relative
contribution of these mechanisms remain elusive and underexplored, and clarifying these
pathways is critical given emerging therapeutic limitations. High-efficacy disease-modifying
therapies (DMTs) can suppress new inflammatory lesions and global thalamic volume loss, yet
they have not been shown to differentially protect thalamic nuclei or, crucially, mitigate nucleus
specific vulnerability linked to IPS deficits.4,6,7,20–24
Many studies continue to treat the thalamus as a uniform structure, neglecting the
anatomical and functional heterogeneity that defines its nuclei.3,9–11,21,24,25 The few studies
examining nucleus-specific thalamic atrophy and cognitive performance,6,7,26–28 have not
accounted for lesion effects. To our knowledge, only one study directly compared models with
and without lesion load as a covariate,4 but that analysis relied on semi-manual lesion
segmentation, omitted intracranial volume (ICV) correction, and reported no lesion-independent
relationship between thalamic atrophy and IPS.4 Therefore, this gap in the literature necessitates
a more rigorous, nucleus-specific analysis to disentangle lesion-mediated versus lesion
independent thalamic degeneration by contrasting their associations with IPS.
In this work, we used automated segmentation to quantify thalamic regions of interest
(ROIs) and lesion volumes, examining lesion-adjusted and unadjusted associations with
IPS.19,29,30 Differentiating these mechanisms may provide insights about the biological basis of
cognitive slowing and its relationship to intrinsic grey matter pathology MS.1
Methods
This study was approved by the University of Western Ontario (Western University) Health
Sciences Review Ethics Board (HSREB #11520). All participants provided written informed

3
consent prior to any study procedures taking place. Financial support was provided by an
investigator-initiated grant from Biogen Idec Canada.
Participants
Participants with clinically definite MS aged 18 and older were recruited from the London (ON)
MS clinic (London, ON Canada) between November 2020 and August 2022. Participants were
excluded if they had binocular vision worse than 20/70, had relapsed within 90 days, had
changed any medication within 30 days, or had an Expanded Disability Status Scale (EDSS)
greater than or equal to 8.0.
Clinical Measures
The oral Symbol Digit Modalities Test (SDMT) was administered by a trained research
coordinator.31 The SDMT is a validated measure of IPS where participants are presented with a
81⁄2 × 11 inch sheet of paper with nine symbols paired with corresponding symbols at the top of
the page. Below this, the page contains a randomized, sequential assortment of these symbols.
Participants are asked to verbally indicate the correct number for each symbol while the
coordinator denotes their replies. Participants’ score is the total number of correct responses in 90
seconds.
MRI
Participants were scanned on a 3 Tesla Siemens MAGNETOM Prisma Fit whole-body scanner
using a 32-channel head coil. T1-weighted (T1w) images were acquired using a 3D
magnetization prepared rapid gradient echo (MPRAGE) sequence (repetition time (TR) = 2400
ms, echo time (TE) = 2.28, flip angle = 9o, voxel size = 0.8 mm isotropic). A 3D T2-weighted
fluid-attenuated inversion recovery (FLAIR) was acquired with TR = 5000 ms, TE = 387 ms, TI
= 1800 ms, flip angle = 120°, voxel size = 0.8 mm isotropic.
Image Preprocessing
Lesion segmentation was performed using the Lesion Segmentation Toolbox’s LST-AI.30 LST-AI
bias-corrected and co-registered T1w and FLAIR images and applied 3D U-Net convolutional
neural networks trained on a large MS dataset to generate lesion probability masks.30,32 The
averaged probability map was then thresholded to produce individualized binary lesion masks in
native space. Lesion load was defined as the total lesion volume and log-transformed to correct
for right skew.
Thalamic nuclei were segmented using HIPS-THOMAS which extends the Thalamus
Optimized Multi-Atlas Segmentation (THOMAS) framework to support MPRAGE images.29,33
Following bias-correction, synthetic white-matter-nulled (WMn) images were generated to
enhance grey-white matter contrast. The WMn image was non-linearly registered to the
THOMAS template, and the resulting atlas labels were inverse warped into each participant’s
native space to obtain segmentations. This pipeline yielded 13 thalamic ROIs per hemisphere,
including the global thalamus, 9 major nuclei (anteroventral, ventral anterior, ventral lateral

4
anterior, ventral lateral posterior, ventral posterolateral, central medial, pulvinar, lateral
geniculate, and medial geniculate), two perithalamic structures (habenula and mammillothalamic
tract), and a single ROI representing the mediodorsal-parafascicular (MD-Pf) complex.
Statistical Analysis
Descriptive statistics were used to summarize the demographic, clinical, and imaging variables.
There was no missing cognitive or imaging data. The raw SDMT score served as the dependent
variable. For each thalamic ROI, the THOMAS-derived volume was normalized to ICV to
control head-size variability and was z-scored across all participants. All analyses were
performed separately for left and right hemispheres to explore lateralization of effects.
Analysis of covariance (ANCOVA) models were fit with ROI volume as the independent
variable, and age, sex, and years of education were included as covariates. A second set of
models evaluated lesion-independent associations by adding lesion load as an additional
covariate. Multiple comparisons across nuclei were controlled using the Benjamini-Hochberg
procedure, and FDR-adjusted p < 0.05 was considered significant. Thalamic ROIs were
classified as intrinsically vulnerable if their volumes remained significantly associated with IPS,
independent of lesion effects.
Table 1: Demographic, clinical, and imaging characteristics of participants.
N = 100
Age in years, mean (SD) 46.2 (12.4)
Sex, female, N (%) 75 (75%)
Education in years, mean (SD) 14.2 (2.3)
Disease duration, mean in years (SD) 11.0 (8.8)
SDMT, mean (SD) 59.2 (10.9)
EDSS, median (IQR) 2.0 (1.5)
Total lesion volume in mL, mean (SD) 7.0 (6.8)
Intracranial volume in mL, mean (SD) 1582 (150)
Post hoc analysis further examined whether the associations between ROI volume and
SDMT performance were mediated or explained by lesion burden. Single-level mediation
models estimated the indirect effect of lesion load using bootstrap resampling with 5000
iterations. Additionally, nested ANCOVA models were compared to determine the change in
explained variance (ΔR2) attributable to adding lesion volume as a covariate. Group differences
in mediation proportions and ∆R2 between intrinsically vulnerable ROIs and those significant
only in the unadjusted model were assessed using Student’s t-test.

5
Results
This population included 100 subjects who signed informed consent and completed the study
visit (Table 1). Participants were on average 46.2 ± 12.4 years old with a mean disease duration
of 11.0 ± 8.8 years. SDMT performance averaged 59.2 ± 10.9 points while median EDSS was
2.0 (IQR 1.5).
Lesion-Mediated Associations
In the models excluding lesion load as a covariate, 21 of the 26 thalamic ROIs were statistically
significant after FDR correction. All significant correlations were positive, indicating that
smaller ROI volume was associated with lower SDMT scores. In the left hemisphere, the
strongest associations (p < 0.001) were observed for the global thalamus (THAL), pulvinar (Pul),
ventral posterolateral (VPL), medial geniculate nucleus (MGN), lateral geniculate nucleus
(LGN), and MD-Pf complex. Significant associations (p < 0.01) were detected in the central
medial (CM) nucleus, with further associations (p < 0.05) in the anteroventral (AV), ventral
anterior (VA), ventral lateral posterior (VLP) and ventral lateral anterior (VLa) nuclei. In the
right hemisphere, significant associations (p < 0.001) were observed for THAL, Pul, and MD-Pf
complex, with further significant effects (p < 0.01) in the VLa, VA, VLP, VPL, MGN, and LGN,
and (p < 0.05) in the AV nucleus.
Figure 1: Spatial distribution of left-hemisphere thalamic ROIs exhibiting lesion-independent
associations with IPS. ROIs are overlaid on a representative MS patient with sagittal (left),
coronal (middle), and axial (right) views. Colour-coding represents nuclear groups: VPL (cyan),
LGN (red), MGN (magenta), Pul (blue), and MD-Pf (orange).
Lesion-Independent Associations
Lesion adjustment isolated 12 ROIs whose volumes remained significantly associated with
SDMT after FDR correction. As in the previous model, all surviving correlations were positive.
In the left hemisphere (Figure 1), THAL, VPL, Pul, and MGN demonstrated the largest
correlations (p < 0.01) with the LGN and MD-Pf complex remaining significant but with smaller
effects (p < 0.05). In the right hemisphere, significant associations (p < 0.01) were observed for
THAL, with further significant correlations in VA, VLa, Pul, LGN, and MD-Pf complex (p <

6
0.05). β was generally larger across left-hemisphere ROIs, most notably within the pulvinar
nucleus (Figure 2).
Figure 2: Coefficient plot of standardized regression coefficients (β) and 95% confidence
intervals for the association of each ROI and SDMT performance after adjusting for age, sex,
education, and lesion load. β coefficients reflect the change in SDMT per standard deviation
increase in ROI volume. Thicker lines indicate significant associations in the baseline models,
asterisks denote ROIs significantly associated after lesion adjustment (* FDR-adjusted p < 0.05,
** p < 0.01).
Post-hoc analysis
The post-hoc analysis further quantified the contributions of lesion-mediated and independent
thalamic atrophy to SDMT. In the lesion-mediated model (excluding lesion load as a covariate),
21 of 26 thalamic ROIs showed significant associations between volume and SDMT. 12 ROIs
remained significant after adjusting for lesion load; these were classified as intrinsically

7
vulnerable nuclei. Mediation analysis revealed that ROIs whose SDMT associations did not
survive lesion adjustment showed significantly higher lesion-mediated effects (34.2%) compared
with the intrinsically vulnerable nuclei (13.4%, p < 0.001; Figure 3A). Similarly, the inclusion of
lesion load explained a greater increase in variance for the nuclei whose SDMT associations did
not survive lesion adjustment (5.5%) compared with the intrinsically vulnerable nuclei (2.4%, p
< 0.01; Figure 3B).
Figure 3: Group-level mediation and variance explained analyses. (A) Mean proportion of
the ROI volume-SDMT association mediated by lesion volume for ROIs whose associations lost
significance after lesion adjustment compared with intrinsically vulnerable nuclei. (B) Change in
explained variance (ΔR2) when lesion load was added to the ANCOVA models for these two
groups. Error bars represent the standard error. ** p < 0.01, *** p < 0.001.
Discussion
In this work, we contrasted lesion-adjusted and unadjusted models to characterize lesion
mediated and lesion-independent thalamic atrophy associated with deficits in IPS. Nearly half of
all thalamic ROIs maintained significant associations with SDMT after adjusting for lesion load,
consistent with a heterogeneous contribution of lesion-mediated and lesion-independent factors
to thalamic atrophy. We observed nucleus-specific patterns that aligned with distinct
thalamocortical circuits. The intrinsically vulnerable nuclei were generally comprised of first
order sensory relays (VPL, LGN, MGN), and higher-order associative hubs (Pul, MD-Pf). These
ROIs maintain significant associations after lesion adjustment, suggesting their vulnerability
reflects intrinsic cellular or metabolic properties rather than network position. The ROIs whose
SDMT associations did not survive lesion adjustment generally included the VA, VLa, VLP, AV,
and CM nuclei. These structures support motor relay, limbic function, and arousal regulation
through white matter projections to frontal motor and cingulate cortices. As their associations
with SDMT lost significance after lesion adjustment, secondary degeneration may be a more
substantial driver of IPS deficits than lesion-independent thalamic pathology in these structures.

8
We also noted a modest left-hemisphere dominance across several ROIs. Although this
lateralization is subtle, the pattern is in line with the left hemisphere’s specialization for symbolic
mapping and rule-based attentional control.34
The persistence of SDMT associations among the sensory relay and high-order
associative nuclei in the lesion-adjusted models suggests these structures share intrinsic
vulnerabilities independent of lesion activity. First-order sensory nuclei exhibit tonic relay
activity, and higher-order associative nuclei engage in sustained cortico-thalamic
communication, potentially effecting substantial metabolic demands.35,36 Within the chronically
inflamed MS brain, even slight disruptions to mitochondrial efficiency or axonal energy supply
may have disproportional effects on neuronal stability.37 Electrophysiological studies have found
that motor relay nuclei, however, fire in brief, movement-locked bursts,38 which may impose
comparatively lower oxidative stress than the continuous activity associated with sensory relay
and higher-order nuclei. Collectively, these activity-dependent differences align with the lesion
independent associations observed in the sensory and associative nuclei. Trans-synaptic
degeneration may also contribute to lesion-independent thalamic atrophy. Cortico-thalamic
projections may propagate degenerative signals anterogradely or retrogradely, leading to further
neuronal injury and grey matter atrophy. This mechanism is consistent with the cortical
thinning1,8,12,17 and white matter injury3,7,13,26,27 characteristic of MS.
Moreover, IPS depends on rapid sensory encoding, attentional selection, and efficient
visuoperceptual integration,39–41 processes that are directly supported by our intrinsically
vulnerable nuclei. The VPL, MGN, and LGN provide principal somatosensory and visual relays
to the cortex, while Pul and MD-Pf regulate corticocortical communication and attentional
control during goal-directed behaviour.42,43 Atrophy in these nuclei suggests that nucleus-specific
thalamic phenotypes could provide more informative markers of IPS dysfunction than global
thalamic volume alone. With increasingly accessible automated pipelines for thalamic nuclei
segmentation, such measures may screen individuals at greater risk for cognitive decline and
may hold utility as endpoints in clinical trials targeting neuroprotection or compartmentalized
inflammation in MS.
Differences in myelin organization and oligodendrocyte support may further shape
lesion-independent vulnerability. Therefore, as the VPL, MGN, LGN, Pul, and MD-Pf participate
in long-range thalamocortical loops that undergo high-frequency relay and integrative
processing, these ROIs may be especially vulnerable to chronic inflammatory exposure. This
glial dependence, together with microglial sensitivity to metabolic disturbance, may amplify
maladaptive phagocytic activity.44,45 These effects also point to the broader inflammation versus
neurodegeneration debate: even in the absence of local lesions, chronic stress can initiate
degenerative changes that exacerbate vulnerabilities in these nuclei.1,7 Similarly, prior work has
demonstrated that thalamic nuclei adjacent to the third ventricle, including the MD-Pf complex,
exhibit accelerated neurodegeneration and an ependymal-in gradient of microglial activation.6,27
This study has several limitations. The cross-sectional design prevents inferences about
the temporal relationship of thalamic atrophy and cognitive decline. The cohort was recruited

9
from one centre and exhibited mild disability which limits generalizability. Cognitive assessment
was restricted to the SDMT and did not consider other domains such as memory, executive
function, and language. Lesion burden was derived from total lesion volume without accounting
for spatial localization. While all segmentations were manually reviewed, characterization of
thalamic nuclei may have been hindered by partial volume effects and misclassification. Due to
our sample size and statistical approach, this analysis may have limited power to capture
nonlinear or subtle nucleus-specific effects. Nonetheless, this work presents the first
demonstration that thalamic nuclei show differential correlations with IPS depending on whether
their associations survive lesion adjustment. If validated, these findings implicate selective
thalamic vulnerability as a correlate of the cognitive pathology in MS, potentially arising from
multiple, converging mechanisms. We hope that this work motivates future imaging studies
which further probe these mechanisms directly, both within the thalamus and across other
regions that may exhibit similar trajectories.
In summary, this study differentiated lesion-dependent and lesion-independent thalamic
contributions to IPS deficits in MS. Twelve thalamic ROIs showed significant associations with
SDMT performance independent of lesion load. These nuclei exhibited significantly lower
lesion-mediated effects than the ROIs whose associations did not survive adjustment, consistent
with a framework involving contributions from primary and secondary degeneration. This
nucleus-resolved separation of lesion-independent and lesion-dependent effects motivates further
investigation of these mechanisms across vulnerable brain regions.

10
References
1. Giovannoni G, Popescu V, Wuerfel J, et al. Smouldering multiple sclerosis: the ‘real MS’. Ther Adv Neurol Disord 2022; 15: 17562864211066751.
2. Amin M, Ontaneda D. Thalamic Injury and Cognition in Multiple Sclerosis. Front Neurol 2020; 11: 623914.
3. Weeda MM, Pruis IJ, Westerveld ASR, et al. Damage in the Thalamocortical Tracts is Associated With Subsequent Thalamus Atrophy in Early Multiple Sclerosis. Front Neurol 2020; 11: 575611.
4. Bergsland N, Benedict RHB, Dwyer MG, et al. Thalamic Nuclei Volumes and Their Relationships to Neuroperformance in Multiple Sclerosis: A Cross-Sectional Structural MRI Study. J Magn Reson Imaging JMRI 2021; 53: 731–739.
5. Preziosa P, Pagani E, Meani A, et al. Slowly Expanding Lesions Predict 9-Year Multiple Sclerosis Disease Progression. Neurol Neuroimmunol Neuroinflammation 2022; 9: e1139.
6. Koubiyr I, Yamamoto T, Blyau S, et al. Vulnerability of Thalamic Nuclei at CSF Interface During the Entire Course of Multiple Sclerosis. Neurol Neuroimmunol Neuroinflammation 2024; 11: e200222.
7. Rodriguez-Mogeda C, Koubiyr I, Prouskas SE, et al. Thalamic atrophy in multiple sclerosis is associated with tract disconnection and altered microglia. Acta Neuropathol (Berl) 2025; 149: 52.
8. Eshaghi A, Marinescu RV, Young AL, et al. Progression of regional grey matter atrophy in multiple sclerosis. Brain 2018; 141: 1665–1677.
9. Azevedo CJ, Cen SY, Khadka S, et al. Thalamic atrophy in multiple sclerosis: A magnetic resonance imaging marker of neurodegeneration throughout disease. Ann Neurol 2018; 83: 223–234.
10. Houtchens MK, Benedict RHB, Killiany R, et al. Thalamic atrophy and cognition in multiple sclerosis. Neurology 2007; 69: 1213–1223.
11. Rojas JI, Murphy G, Sanchez F, et al. Thalamus volume change and cognitive impairment in early relapsing–remitting multiple sclerosis patients. Neuroradiol J 2018; 31: 350–355.
12. Ziccardi S, Crescenzo F, Guandalini M, et al. Early regional cerebral grey matter damage predicts long-term cognitive impairment phenotypes in multiple sclerosis: a 20-year study. Brain Commun 2024; 6: fcae355.
13. Zivadinov R, Bergsland N, Jakimovski D, et al. Thalamic atrophy and dysconnectivity are associated with cognitive impairment in a multi-center, clinical routine, real-word study of people with relapsing-remitting multiple sclerosis. NeuroImage Clin 2024; 42: 103609.

11
14. Bergsland N, Zivadinov R, Dwyer MG, et al. Localized atrophy of the thalamus and slowed cognitive processing speed in MS patients. Mult Scler J 2016; 22: 1327–1336.
15. Schoonheim MM, Hulst HE, Brandt RB, et al. Thalamus structure and function determine severity of cognitive impairment in multiple sclerosis. Neurology 2015; 84: 776–783.
16. Bisecco A, Stamenova S, Caiazzo G, et al. Attention and processing speed performance in multiple sclerosis is mostly related to thalamic volume. Brain Imaging Behav 2018; 12: 2028.
17. Matías-Guiu JA, Cortés-Martínez A, Montero P, et al. Identification of Cortical and Subcortical Correlates of Cognitive Performance in Multiple Sclerosis Using Voxel-Based Morphometry. Front Neurol; 9. Epub ahead of print 29 October 2018. DOI: 10.3389/fneur.2018.00920.
18. Rojas JI, Murphy G, Sanchez F, et al. Thalamus volume change and cognitive impairment in early relapsing–remitting multiple sclerosis patients. Neuroradiol J 2018; 31: 350–355.
19. Morrow SA, Baldwin C, Alkabie S. Importance of Identifying Cognitive Impairment in Multiple Sclerosis. Can J Neurol Sci J Can Sci Neurol 2023; 50: 813–819.
20. Chataway J, Williams T, Li V, et al. Clinical trials for progressive multiple sclerosis: progress, new lessons learned, and remaining challenges. Lancet Neurol 2024; 23: 277–301.
21. Arnold DL, Sprenger T, Bar-Or A, et al. Ocrelizumab reduces thalamic volume loss in patients with RMS and PPMS. Mult Scler Houndmills Basingstoke Engl 2022; 28: 19271936.
22. Krämer J, Bar-Or A, Turner TJ, et al. Bruton tyrosine kinase inhibitors for multiple sclerosis. Nat Rev Neurol 2023; 19: 289–304.
23. Arnold DL, Piani-Meier D, Bar-Or A, et al. Effect of siponimod on magnetic resonance imaging measures of neurodegeneration and myelination in secondary progressive multiple sclerosis: Gray matter atrophy and magnetization transfer ratio analyses from the EXPAND phase 3 trial. Mult Scler Houndmills Basingstoke Engl 2022; 28: 1526–1540.
24. Nicholson S, Russo A, Brewer K, et al. The Effect of Ibudilast on Thalamic Volume in Progressive Multiple Sclerosis. Mult Scler Houndmills Basingstoke Engl 2023; 29: 18191830.
25. Zivadinov R, Havrdová E, Bergsland N, et al. Thalamic atrophy is associated with development of clinically definite multiple sclerosis. Radiology 2013; 268: 831–841.
26. Papadopoulou A, Gaetano L, Pfister A, et al. Damage of the lateral geniculate nucleus in MS. Neurology 2019; 92: e2240–e2249.
27. Blyau S, Koubiyr I, Saranathan M, et al. Differential vulnerability of thalamic nuclei in multiple sclerosis. Mult Scler Houndmills Basingstoke Engl 2023; 29: 295–300.

12
28. Santini T, Chen C, Zhu W, et al. Hippocampal subfields and thalamic nuclei associations with clinical outcomes in multiple sclerosis: An ultrahigh field MRI study. Mult Scler Relat Disord 2024; 86: 105520.
29. Su JH, Thomas FT, Kasoff WS, et al. Thalamus Optimized Multi Atlas Segmentation (THOMAS): fast, fully automated segmentation of thalamic nuclei from structural MRI. NeuroImage 2019; 194: 272–282.
30. Wiltgen T, McGinnis J, Schlaeger S, et al. LST-AI: A deep learning ensemble for accurate MS lesion segmentation. NeuroImage Clin 2024; 42: 103611.
31. Smith A. Symbol Digit Modalities Test. Epub ahead of print 1973. DOI: 10.1037/t27513000.
32. Ronneberger O, Fischer P, Brox T. U-Net: Convolutional Networks for Biomedical Image Segmentation. Epub ahead of print 18 May 2015. DOI: 10.48550/arXiv.1505.04597.
33. thalamicseg/thomas_new, https://github.com/thalamicseg/thomas_new (2025, accessed 27 October 2025).
34. The cortical organization of speech processing | Nature Reviews Neuroscience, https://www.nature.com/articles/nrn2113 (accessed 24 November 2025).
35. Steullet P, Cabungcal J-H, Bukhari SA, et al. The thalamic reticular nucleus in schizophrenia and bipolar disorder: role of parvalbumin-expressing neuron networks and oxidative stress. Mol Psychiatry 2018; 23: 2057–2065.
36. Saalmann YB, Pinsk MA, Wang L, et al. The pulvinar regulates information transmission between cortical areas based on attention demands. Science 2012; 337: 753–756.
37. Witte ME, Mahad DJ, Lassmann H, et al. Mitochondrial dysfunction contributes to neurodegeneration in multiple sclerosis. Trends Mol Med 2014; 20: 179–187.
38. Gaidica M, Hurst A, Cyr C, et al. Distinct Populations of Motor Thalamic Neurons Encode Action Initiation, Action Selection, and Movement Vigor. J Neurosci Off J Soc Neurosci 2018; 38: 6563–6573.
39. Gajewski B, Karlińska I, Stasiołek M. Symbol Digit Modalities Test in progressive multiple sclerosis. Neurol Neurochir Pol 2024; 58: 221–232.
40. Benedict RH, DeLuca J, Phillips G, et al. Validity of the Symbol Digit Modalities Test as a cognition performance outcome measure for multiple sclerosis. Mult Scler Houndmills Basingstoke Engl 2017; 23: 721–733.
41. Charvet LE, Beekman R, Amadiume N, et al. The Symbol Digit Modalities Test is an effective cognitive screen in pediatric onset multiple sclerosis (MS). J Neurol Sci 2014; 341: 79–84.

13
42. Pergola G, Danet L, Pitel A-L, et al. The Regulatory Role of the Human Mediodorsal Thalamus. Trends Cogn Sci 2018; 22: 1011–1025.
43. Ouhaz Z, Fleming H, Mitchell AS. Cognitive Functions and Neurodevelopmental Disorders Involving the Prefrontal Cortex and Mediodorsal Thalamus. Front Neurosci; 12. Epub ahead of print 6 February 2018. DOI: 10.3389/fnins.2018.00033.
44. Qin C, Yang S, Chen M, et al. Modulation of microglial metabolism facilitates regeneration in demyelination. iScience 2023; 26: 106588.
45. Peferoen L, Kipp M, Valk P, et al. Oligodendrocyte-microglia cross-talk in the central nervous system. Immunology 2014; 141: 302–313.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:36.563Z
- **Text Length:** 29136 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 13 of 13
