# PDF Document: Cazzaniga and Giorgino - 2025 - MDIntrinsicDimension Dimensionality-Based Analysis of Collective Motions in Macromolecules from Mol.pdf

**File Path:** Cazzaniga and Giorgino - 2025 - MDIntrinsicDimension Dimensionality-Based Analysis of Collective Motions in Macromolecules from Mol.pdf

**Processed Date:** 2026-02-10T18:17:31.641Z

**File Size:** 1250.44 KB

**Total Pages:** 11

**Extracted Pages:** 11

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3638

**Title:** MDIntrinsicDimension: Dimensionality-Based Analysis of Collective Motions in Macromolecules from Molecular Dynamics Trajectories

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

MDIntrinsicDimension: Dimensionality-Based Analysis of
Collective Motions in Macromolecules from Molecular Dynamics
Trajectories
Irene Cazzaniga1, Toni Giorgino1,*
1Istituto di Biofisica (IBF-CNR), Consiglio Nazionale delle Ricerche, 20133 Milano, Italy.
* E-mail: toni.giorgino@cnr.it
Abstract
Molecular dynamics (MD) simulations provide atomistic insights into the structure, dynamics, and function of biomolecules by generating timeresolved, high-dimensional trajectories. Analyzing such data benefits from estimating the minimal number of variables required to describe the explored conformational manifold, known as the intrinsic dimension (ID). We present MDIntrinsicDimension, an open-source Python package that estimates ID directly from MD trajectories by combining rotation- and translat-
ioninvariant molecular projections (e.g., backbone dihedrals and inter-residue distances) with stateof-the-art estimators. The package provides three complementary analysis modes: wholemolecule ID; sliding windows along the sequence; and per–secondary-structure elements. It computes both overall ID (a single summary value) and instantaneous, time-resolved ID that can reveal transitions and heterogeneity over time. We illustrate the approach on fast folding-unfolding trajectories from the DESRES da-
taset, demonstrating that ID complements conventional geometric descriptors by highlighting spatially local
ized flexibility and differences across structural segments.
1 Introduction
Molecular dynamics (MD) simulation is a computational technique that provides timeresolved, atomistic descriptions of biomolecules by integrating the corresponding equations of motion [1, 2]. The resulting trajectories are highdimensional and often challenging to interpret directly. While dimensionality-reduction techniques embed such data into lower-dimensional spaces [3, 4], an important question is how many variables are minimally required to describe the underlying data manifold, that is, its -
intrinsic dimension (ID) [5].
Estimating the ID of all-atom trajectories is a challenging and arguably ill-defined task due to several factors. First, the conformational space of biomolecules is inherently high-dimensional, which amplifies data sparsity. Second, meaningful internal degrees of freedom must be distinguished from irrelevant components such as noise and rigid-body motions. Third, the sampling
1
arXiv:2511.13550v1 [q-bio.BM] 17 Nov 2025

density is not uniform, both across different regions of conformational space and over time [6]. The latter is a particularly important consideration for proteins, whose flexibility varies locally and on multiple timescales [7].
Here, we introduce MDIntrinsicDimension, an open-source Python package that estimates ID directly from MD trajectories. The package computes internal, rotation- and translationinvariant projections (e.g., backbone dihedrals and inter-residue distances) and applies modern ID estimators provided by the scikit-dimension package [8]. Three analysis modes are provided, namely whole-molecule, sliding windows along the sequence; and secondary structure elements (Table 1). These complementary views enable-
 both system-level summaries and spatially localized assessments of flexibility. Orthogonally, the package provides three time-resolved representations of ID, namely: overall, instantaneous and averaged. Overall ID summarizes the dataset with a single value along the trajectory; instantaneous ID is timeresolved, providing a per-frame estimate that can be averaged over the full trajectory or over trailing segments to detect transitions (Table 1). Together, these outputs characterize the complexity -
of the explored conformational space and its temporal evolution. We demonstrate our approach on trajectories from the D. E. Shaw Research (DESRES) fast-folding protein trajectory set [9], including the Nle/Nle double mutant of the HP35 Cterminal fragment of the villin headpiece (henceforth “villin”) and N-terminal Domain of Ribosomal Protein L9 (NTL9), and we show that ID complements conventional geometric measures by highlighting heterogeneity across residues and secondary structure elements.
2 Methods
The ID calculation workflow comprises three stages: (i) load a MD trajectory; (ii) compute an internal, rigid-body–invariant, projection chosen between the available options, to obtain a frameby-feature matrix; (iii) estimate the ID proper using an estimator chosen out of a set of available methods.
2.1 Internal coordinate projections
Estimating structural properties from molecular dynamics (MD) trajectories benefits from representations that are invariant to rigid-body motions, thereby reflecting only the molecule’s internal degrees of freedom. To this end, each frame of a trajectory is mapped to a vector of internal coordinates using suitable projection functions. The resulting projections are stored as an n × m matrix, where each of the n n rows corresponds to a trajectory frame and each of the m columns to a structural feat-
ure. In practice, we employ two complementary families of descriptors: (i) inter-residue distances or contact counts, typically computed between Cα atoms. These features emphasize mediumand long-range couplings within the structure; and (ii) torsional angles, including backbone (φ, ψ) and, when relevant, side-chain (χ) dihedrals. These capture local conformational variability along the chain. Trajectory handling and projection calculations are performed using the MoleculeKit library [10]. Unless o-
therwise specified, Cα atoms are used for distance calculations, and dihedral angles are expressed in degrees. Periodicity of angular variables can be handled through a sine–cosine embedding. Arbitrary projection schemes can also be employed, provided they
2

Locality Definition Meaning Call
Sequence
Whole protein Protein-wide value intrinsic_dimension() Section ID by overlapping sliding windows section_id() Secondary structure ID of secondary structure elements secondary_structure_id()
Time
Instantaneous Time-resolved via local estimators* Averaged Mean of instantaneous ID along a trajectory Overall ID of the trajectory via global estimators*
Table 1: Nomenclature on temporal and spatial ID types adopted in this package. *Local estimators also work as global ones and vice-versa, through implicit conversions.
map each frame to a real-valued feature vector.
2.2 Intrinsic dimension estimation
The package estimates ID using any of the algorithms implemented in scikit-dimension [8], which notably include nearest-neighbour, fractal and likelihood-based operating principles (Supplementary Table ??). We found the Two Nearest Neighbours (TwoNN ) estimator [6] to be robust, fast and well-behaved on MD data, and we adopt it as the default, unless otherwise specified.
Three complementary summary metrics are reported. First, an overall estimate which treats the full set of frames as a single point cloud and yields a single ID value; to mitigate the influence of initial non-equilibrated segments we additionally report a overall estimate computed on the final portion of the trajectory (the length of which can be specified as pleased by the user). Second, an instantaneous estimate produces a time series by evaluating ID in neighbourhoods centred at each frame. Thir-
d, we summarize this instantaneous series by its mean over the full trajectory and by its mean over the final portion of trajectory (in both cases we refer to it as averaged ).
2.3 Localizing ID along sequence and structure
The package enables space-localized structural analyses to uncover locality and heterogeneity in conformational complexity. First, a slidingwindow scheme partitions the protein sequence in overlapping windows of fixed length and stride; for each window we recompute the internal coordinate projection restricted to the atoms in that window, followed by ID estimation. This produces a profile of ID along the primary sequence, highlighting different types of large-scale coordinated flexibility.
Alternatively, for a structure-based scheme, the package can assign secondary structure using DSSP [11, 12], grouping consecutive residues sharing the same assignment into segments. For each segment, projections and ID values are computed as above. We employ the simplified coil (C), strand (E) and helix (H) DSSP scheme unless stated otherwise; results with the full DSSP alphabet are consistent.
The analysis returns, for each window or secondary structure element, either the overall summary as defined above, or the instantaneous series and the corresponding averaged summary, enabling direct comparisons across sequence po
3

sitions and structural types.
3 Results
3.1 Case Study: Villin Headpiece
We demonstrate the features of our package using trajectories of spontaneous folding-unfolding transitions from the dataset of fast-folding proteins provided by DESRES in [9]. We selected the HP35 chicken villin headpiece (PDB: 2F4K), a 35 residue protein with two point mutations to norleucine, K65(NLE) and K70(NLE), which increase the folding rate up to fivefold compared to the wild type (Figure 1). The original trajectory was evaluated using RMSD relative to the folded structure (reference frame-
 10,400). Based on this analysis, we selected six trajectory segments of 200 ns each (2,000 frames), representing the protein either in folded or unfolded states. These segments are labelled as f0, f1, f2 for the folded state and u0, u1, u2 for the unfolded state, as per Supplementary Table ??.
3.1.1 Estimator performance
We first evaluated all the estimators provided by scikit-dimension [8] to asses their ability to handle the complexity of data derived from MD trajectories. Three main aspects were taken in account: (i) the capability to clearly differentiate between the two states (i.e. folded and unfolded); (ii) the ability to distinguish real degrees of freedom from noise; (iii) computation efficiency. All estimators were able to compute ID on the protein models used in this article (Figure 2). Most of the rema-
ining estimators succeed in discriminating between folded and unfolded states, generally reporting higher ID values for
Figure 1: (A) Structure of the HP35 villin headpiece (PDB 2F4K) used in the case study and (B) topology diagram.
the folded case. The absolute ID values vary considerably across estimators, showing different discrimination effectiveness between the two states; for example MOM reported very similar values for the two states; lPCA consistently reports the highest ID values measured from the unfolded trajectories (ID > 35). Based on comparisons across different projections, conditions and models, we selected TwoNN as the default estimator in our functions, as it offers the best compromise between accuracy and c-
omputational cost.
3.1.2 Projections
For the sake of illustration, we focus on two main classes of projections, namely carbon–carbon distances (computed either on Cα or Cβ atoms), and torsional angles. For the latter, we distinguished between backbone dihedrals (φ, ψ), which primarily describe backbone flexibility, and side-chain dihedrals (χ), which probe sidechain conformational variability. Both types of torsion were considered in their raw angular form as well as in their sine/cosine embeddings to account for angular periodicity.
4

0 5 10 15 20 25 30 Folded ID
0
10
20
30
40
50
Unfolded ID
Estimator CorrInt DANCo ESS FisherS lPCA MADA
MiND_ML MLE MOM TLE TwoNN
Figure 2: Folded-vs-unfolded ID of the villin dynamic manifold, computed by the estimators available at scikit-dimension package. Each point represents the mean value of the folded states (x axis) and unfolded states (y axis); error bars indicate standard deviations over three replicas. Methods abbreviations are in Supplementary Table ??. Projection: Ramachandran angles φ and ψ, whole protein. KNN not shown due to its high variance.
All the selected projections are capable of distinguishing between folded and unfolded states (Figure 3). However, the ID values obtained, as well as the gap between the two states, can differ substantially depending on the projection. This is particularly evident in the case of χ dihedral angles, where the trend is inverted: the unfolded state is associated with a higher ID, in contrast to the other projection types, where the folded state typically shows the higher ID. We attribute this inversio-
n to the fact that the number of χ angles is residue-dependent, which
C Dist. C Dist. 3 C Dist. C Dist. 3 / Sin/Cos / Sin/Cos
FU FU FU FU FU FU FU FU
7.5
10.0
12.5
15.0
17.5
20.0
22.5
25.0
ID
Trajectory u0 u1 u2 f0 f1 f2
Figure 3: ID shifts between folded (F) and unfolded (U) states of villin under different projections. Dist.: pairwise distances between all carbon–carbon pairs; Dist. 3 : pairwise distances every 3rd carbon; φ, ψ: Ramachandran angles; χ: sidechain dihedrals; Sin/Cos: trigonometric embedding of dihedrals.
introduces variability in the side-chain conformational space that is more prominent in the unfolded ensemble.
3.1.3 Instantaneous, Averaged and Overall ID
As described in Section 2.2, instantaneous, averaged and overall ID are complementary approaches that provide distinct perspectives on system behavior: instantaneous ID captures frame-by-frame variations in dimensionality (Figure 4(A)), whereas the time-averaged and overall ID yield compact summaries that facili
5

tate comparison across trajectories. Although these two summary measures may appear similar, they emphasize different aspects (Supplementary Figure ??): the time-averaged ID, obtained as the mean of the instantaneous estimates, reflects the most frequently sampled conformations during the simulation. In contrast, the overall ID is computed directly from the pooled trajectory, treating it as a single dataset, and therefore quantifies the dimensionality of the conformational ensemble as a whole.
3.1.4 Comparison with RMSD
Root-mean-square deviation (RMSD) is commonly used to quantify structural changes in proteins when a reference structure is available. Accordingly, it is natural to compare instantaneous RMSD values with instantaneous ID values. When RMSD is computed relative to the folded reference structure, unfolded trajectories produce higher RMSD values, whereas ID assigns higher values to the folded trajectories.
This difference reflects the nature of the two metrics: RMSD measures how much a structure deviates from a fixed reference over time, whereas ID quantifies the effective number of degrees of freedom in the motion, determined by intramolecular constraints and the types of motions available. A compact folded globule – without large flexible “unfolded hinges” – appears to explore more effective degrees of freedom. Both metrics distinguish folded from unfolded trajectories (Figure 4(C)), but ID provid-
es a sharper separation, with no overlap between the distributions.
0.0 25.0 50.0 75.0 100.0 125.0 150.0 175.0 200.0 Time (ns)
5.0
10.0
15.0
20.0
25.0
ID
A)
5.0 10.0 15.0 20.0 25.0 ID
0.0
100.0
200.0
300.0
400.0
500.0
600.0
700.0
800.0
Number of Frames
B)
Trajectory u0 u1 u2 f0 f1 f2
5.0 10.0 15.0 20.0 25.0 ID
0.0
2.5
5.0
7.5
10.0
12.5
15.0
17.5
RMSD (Å)
C)
Figure 4: (A) Instantaneous intrinsic dimension (ID) of villin trajectories over time. (B) Distribution of ID values across the trajectory. (C) Relationship between instantaneous ID and RMSD relative to the folded state. The separation between folded and unfolded ensembles is clearer when using ID than RMSD. States are colorcoded as folded (violet) and unfolded (green). Analysis performed on the projection to φ and ψ Ramachandran angles.
6

3.1.5 ID by Sequence
To gain higher-resolution insight into protein dynamics, we computed sequence-local and structure-local intrinsic dimensionality (ID). In Figure 5(A) we show the results of section id() applied on villin headpiece, partitioned into seven overlapping windows of 15 residues each, with a sliding step of three residues. Although the fixed window length and substantial overlap introduce a strong correlation between adjacent segments from the same trajectory, the ID profiles still clearly reveal a clear-
 distinction between folded and unfolded states, as well as minor variations among replicas within each window.
3.1.6 ID by Secondary Structure
On the other hand, secondary structure id() function subdivides the protein sequence according to the DSSP algorithm, which assigns each residue to a secondary structure element based on geometric criteria. These sections are contiguous, non-overlapping, and variable in length, so the resulting ID values reflect both the intrinsic flexibility of each secondary structure element and a reduced influence from neighboring segments, as shown in Figure 5(B), where secondary structure elements are define-
d on a reference folded structure (in this case the PDB structure used as input for the topology), ID shows higher variability between sections than between folded and unfolded states, suggesting that local structural context rather than the folding state dominates the observed dimensionality.
3.2 Case Study: NTL9
We repeated the analysis on another protein from the same dataset, the N-terminal domain
of Ribosomal Protein L9 (NTL9, PDB: 2HBA(139)), a 39-residue protein carrying a single point mutation (K12M) that increases its stability by 1.9 kcal/mol. This case was chosen to validate our package’s performance on a protein with a more complex topology (Supplementary Figure ??). We selected the unbiased trajectory DESRES-Trajectory NTL9-2-protein, evaluating its RMSD with respect to the folded structure (reference frame 12,500). Following the method described previously, we identified six segme-
nts of 200 ns each (2,000 frames), comprising three folded-state segments (f0, f1, f2) and three unfolded-state segments (u0, u1, u2) (Supplementary Table ??). Consistent with villin results, the TwoNN estimator distinguish between folded and unfolded states (Supplementary Figure ??). The projection methods tested (carbon–carbon distances and torsional angles) have a similar trend, namely the IDs computed with χ and Ramachandran angles shift in opposite directions (Supplementary Figure ??). In abs-
olute terms, the ID metric yielded higher values for the folded trajectories. RMSD-versus-ID analysis followed the expected anticorrelated trend (Figure 6), with one noteworthy exception: trajectory u2 exhibited a period during which ID values were more typical of a folded segment, but with a high RMSD w.r.t. the folded structure. This combination indicates the detection of a transient non-native, but relatively stable, folding intermediate. The intermediate, a three-helix globule (Supplementary F-
igure ??), can be clearly identified with a peak in the instantaneous ID between 160 ns and 180 ns (Supplementary Figure ??), but not in the averaged nor overall ID metrics (Supplementary Figure ??). Lastly, we evaluated NTL9 sequence and
7

42-56
45-59
48-62
51-65
54-68
57-71
60-74
Window
0.0
2.5
5.0
7.5
10.0
12.5
15.0
17.5
ID
A)
42-43(C)
44-50(H)
51-54(C)
55-58(H)
59-62(C)
63-72(H)
73-76(C)
Secondary Structure Element
0.0
2.0
4.0
6.0
8.0
10.0
12.0
ID
B)
Trajectory u0 u1 u2 f0 f1 f2
Figure 5: ID computed on local segments of villin. (A) Sequence-wise ID computed with section id() using a window of 15 and stride of 3. (B) Secondary structure element-wise ID from secondary structure id(); ranges indicate the first and last residue number of the secondary structure element (simplified DSSP: C, coil; H, helix). In both cases φ and ψ dihedral angles were used as a projection.
structure locality. ID values derived from secondary structure id() (Supplementary Figure ??B), predominantly influenced by the structural context, were villin-like as expected. On the other hand, an analysis with section id() indicated that in trajectory u2 N-terminal windows had higher ID values, indicating an increased folded character for region 1–30 (Supplementary Figure ??A).
4 Discussion and Conclusions
MD simulations produce high-dimensional datasets that are often difficult to interpret directly. Estimating the ID of conformational ensembles provides a compact measure of the effective degrees of freedom and offers a complementary view of molecular flexibility and structural heterogeneity. The package imple
5 10 15 20 25 30 ID
0.0
2.5
5.0
7.5
10.0
12.5
15.0
17.5
RMSD (Å)
Trajectory u0 u1 u2 f0 f1 f2
Figure 6: RMSD versus instantaneous ID of NTL9 in folded (violet) and unfolded (green) states. Projection: φ and ψ dihedral angles.
8

ments this idea using internal-coordinate representations and multiple estimators, enabling both trajectory-level and local, region-specific analyses.
When applied to unbiased folding–unfolding simulations, the method distinguishes folded, unfolded, and intermediate conformational states. These results show that intrinsic dimensionality reflects changes in conformational heterogeneity and flexibility, thereby complementing established order parameters used in folding studies [13, 14].
More broadly, estimating ID highlights collective dynamical regimes that may be obscured in the full coordinate space, and may inform the construction of data-driven collective variables and features for Markov state modeling [15, 16, 4].
The package’s modular design, open-source availability, and compatibility with existing MD analysis workflows make it broadly applicable to diverse biomolecular systems, from proteins to nucleic acids and complexes. By bridging concepts from nonlinear data analysis and biophysical modeling, MDIntrinsicDimension offers a novel lens for exploring molecular flexibility and conformational landscapes.
Data and Software Availability
The code is freely available from the GitHub repository giorginolab/ MDIntrinsicDimension, together with extensive documentation and self-contained notebooks which reproduce the results showed in this paper. Data for the case studies is available from ref. [9].
Competing interests
None declared.
Author Contributions Statement
IC: Software, Methodology, Visualization. TG: Methodology, Conceptualization, Supervision. All authors: Writing – Review & Editing.
Acknowledgements
The authors thank D. E. Shaw Research for kindly providing the villin and NTL9 foldingunfolding trajectories.
Funding
TG acknowledges financial support from the Spoke 7 of the National Centre for HPC, Big Data and Quantum Computing (Centro Nazionale 01 – CN0000013), funded by the European Union – NextGenerationEU, Mission 4, Component 2, Investment line 1.4, CUP B93C22000620006; from the PRIN 2022 (BioCat4BioPol) from the Ministero dell’Universit`a e Ricerca, funded by the European Union NextGenerationEU, Mission 4 Component C2, CUP B53D23015140006; from the Spoke 5 “Next-Gen Therapeutics” of PNRR M4C2 Investimen-
t 1.3 “HEAL ITALIA” PE00000019, CUP H43C22000830006 project “PROPHECYGlycoRARE”; and from the project InvAtInvecchiamento Attivo e in Salute (FOE 2022) CUP B53C22010140001.
9

References
[1] Martin Karplus and Gregory A. Petsko. Molecular dynamics simulations in biology. Nature, 347(6294):631–639, October 1990.
[2] Scott A. Hollingsworth and Ron O. Dror. Molecular Dynamics Simulation for All. Neuron, 99(6):1129–1143, September 2018.
[3] Gareth A. Tribello, Michele Ceriotti, and Michele Parrinello. Using sketch-map coordinates to analyze and bias molecular dynamics simulations. Proceedings of the National Academy of Sciences, 109(14):51965201, April 2012.
[4] Sun-Ting Tsai, Zachary Smith, and Pratyush Tiwary. SGOOP-d: Estimating kinetic distances and reaction coordinate dimensionality for rare event systems from biased/unbiased simulations. arXiv:2104.13560 [cond-mat, physics:physics], April 2021. arXiv: 2104.13560.
[5] Francesco Camastra and Antonino Staiano. Intrinsic dimension estimation: Advances and open problems. Information Sciences, 328:26–41, January 2016.
[6] Elena Facco, Maria d’Errico, Alex Rodriguez, and Alessandro Laio. Estimating the intrinsic dimension of datasets by a minimal neighborhood information. Scientific Reports, 7(1):12140, September 2017.
[7] Payel Das, Mark Moll, Hern ́an Stamati, Lydia E. Kavraki, and Cecilia Clementi. Low-dimensional, free-energy landscapes of protein-folding reactions by nonlinear dimensionality reduction. Proceed
ings of the National Academy of Sciences, 103(26):9885–9890, June 2006.
[8] Jonathan Bac, Evgeny M. Mirkes, Alexander N. Gorban, Ivan Tyukin, and Andrei Zinovyev. Scikit-Dimension: A Python Package for Intrinsic Dimension Estimation. Entropy, 23(10):1368, October 2021.
[9] Kresten Lindorff-Larsen, Stefano Piana, Ron O. Dror, and David E. Shaw. How Fast-Folding Proteins Fold. Science, 334(6055):517–520, October 2011.
[10] S. Doerr, M. J. Harvey, Frank Noe ́, and G. De Fabritiis. HTMD: High-Throughput Molecular Dynamics for Molecular Discovery. Journal of Chemical Theory and Computation, 12(4):1845–1852, April 2016.
[11] Wolfgang Kabsch and Christian Sander. Dictionary of protein secondary structure: Pattern recognition of hydrogen-bonded and geometrical features. Biopolymers, 22(12):2577–2637, 1983.
[12] Maarten L. Hekkelman, Daniel A ́ lvarez Salmoral, Anastassis Perrakis, and Robbie P. Joosten. DSSP 4: FAIR annotation of protein secondary structure. Protein Science, 34(8):e70208, 2025.
[13] S. Muff and A. Caflisch. Identification of the protein folding transition state from molecular dynamics trajectories. The Journal of Chemical Physics, 130(12):125104, March 2009.
[14] Willy Wriggers, Kate A. Stafford, Yibing Shan, Stefano Piana, Paul Maragakis, Kresten Lindorff-Larsen, Patrick J. Miller, Justin Gullingsrud, Charles A. Rendleman,
10

Michael P. Eastwood, Ron O. Dror, and David E. Shaw. Automated Event Detection and Activity Monitoring in Long Molecular Dynamics Simulations. Journal of Chemical Theory and Computation, 5(10):2595–2605, October 2009.
[15] Daniel Nagel, Sofia Sartore, and Gerhard Stock. Selecting Features for Markov Modeling: A Case Study on HP35. Journal of Chemical Theory and Computation, 19(11):3391–3405, June 2023. Publisher: American Chemical Society.
[16] Sudip Das, Umberto Raucci, Rui P.P. Neves, Maria J. Ramos, and Michele Parrinello. Correlating Enzymatic Reactivity for Different Substrates using Transferable Data-Driven Collective Variables, June 2024.
11

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:31.641Z
- **Text Length:** 26335 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 11 of 11
