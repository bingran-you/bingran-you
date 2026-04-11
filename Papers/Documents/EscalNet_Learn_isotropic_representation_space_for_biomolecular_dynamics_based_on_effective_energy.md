# PDF Document: Zuo - EscalNet Learn isotropic representation space for biomolecular dynamics based on effective energy.pdf

**File Path:** Zuo - EscalNet Learn isotropic representation space for biomolecular dynamics based on effective energy.pdf

**Processed Date:** 2026-02-10T18:16:28.529Z

**File Size:** 2414.45 KB

**Total Pages:** 21

**Extracted Pages:** 21

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3684

**Title:** EscalNet: Learn isotropic representation space for biomolecular dynamics based on effective energy

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

EscalNet: Learn isotropic representation
space for biomolecular dynamics based on
effective energy
Guanghong Zuo1*
1 Wenzhou Institute, University of Chinese Academy of Sciences,
Wenzhou, Zhejiang 325001 China
* Corresponding author E-mail: ghzuo@ucas.ac.cn (Zuo GH).
ORCID: 0000-0002-7822-5969.
ABSTRACT : Deep learning has emerged as a powerful framework for analyzing
biomolecular dynamics trajectories, enabling efficient representations that capture
essential system dynamics and facilitate mechanistic studies. We propose a neural
network architecture incorporating Fourier Transform analysis to process trajectory
data, achieving dual objectives: eliminating high-frequency noise while preserving
biologically critical slow conformational dynamics, and establishing an isotropic
representation space through the last hidden layer for enhanced dynamical
quantification. Comparative protein simulations demonstrate our approach generates
more uniform feature distributions than linear regression methods, evidenced by
smoother state similarity matrices and clearer classification boundaries. Moreover, by
using saliency score, we identified key structural determinants linked to effective
energy landscapes governing system dynamics. We believe that the fusion of neural
network features with physical order parameters creates a robust analytical framework
for advancing biomolecular trajectory analysis.
Keywords: Neural Network, Molecular Dynamics, Representation Learning, Order
Parameters, Biomolecules

1. Introduction
Molecular dynamics simulations offer atomic-scale resolution of biomolecular
motions, permitting researchers to systematically investigate protein dynamical
mechanisms with unprecedented detail 1–11. These computational techniques have
emerged as an indispensable tool in contemporary protein dynamics research 12–26. An
expanding body of scholarly work focuses on identifying functionally relevant
collective motion patterns, particularly slow modes of conformational changes, from
extensive molecular dynamics trajectory datasets to establish physically meaningful
dynamical representations 27–31. The classical theoretical framework for protein
conformational transitions, grounded in equilibrium statistical mechanics, theorizes
protein folding processes as stochastic walks across multidimensional funnel-shaped
free energy landscapes characterized by rugged topography 32. Conversely, kinetic
network models utilize stochastic dynamics formalism to characterize conformational
transitions as Markovian jumps between discrete metastable states within a network
topology 33–37. This methodological paradigm addresses the high-dimensionality
constraints intrinsic to free energy landscape visualizations while quantitatively
describing non-equilibrium dynamical phenomena 38.
The integration of deep learning methodologies with molecular dynamics
trajectory analysis capitalizes on the inherent spatial mapping capacities of deep
neural networks to construct feature spaces that effectively capture slow dynamical
modes inherent in complex systems 39–42. Subsequent statistical interrogation of these
learned representations enables comprehensive interpretation of system dynamics
through free energy landscapes and kinetic network analyses. This methodological
paradigm facilitates iterative conformation sampling within the feature space and
enables strategic implementation of bias potentials in the learned representation space,
thereby achieving enhanced sampling efficiency 43. Schneider et al. demonstrated that
artificial neural networks trained on enhanced sampling datasets enable compact
representation and precise computation of high-dimensional free energy surfaces,
permitting accurate prediction of high-dimensional thermodynamic observables in

complex molecular systems 44. Ketkaew et al. established an unsupervised deep
autoencoder neural network (DAENN) architecture capable of extracting transferable
reaction coordinates from trajectory data, enabling autonomous exploration of hidden
metastable states and free energy surfaces through metadynamics simulations in
machine-learned latent spaces 45. Noé and coworkers proposed the Boltzmann
generator 46, utilizing Real NVP normalizing flow architectures, achieves efficient
sampling of rare critical configurations through the integration of flow-based
generative models with replica exchange methodologies, leading to the development
of Learning-Replica Exchange (LREX) enhanced sampling protocols 47. Gao and
coworkers pioneered the Information Distillation of Metastability (IDM) approach,
which combines dimensionality reduction and clustering techniques in deep
unsupervised learning frameworks to identify metastable states during phase
transitions 48. Pande and coworkers designed variational dynamics encoder (VDE)
architecture, constructed using variational autoencoder principles, incorporates
saliency map analysis to pinpoint functionally critical residues in biomolecular
conformational dynamics 49.
Most of existing methodological frameworks predominantly focus on deep
learning architectures demonstrate insufficient attention to symmetry of representation
space, particularly regarding uniformity within individual dimensions and metric
consistency across different dimensional axes. Notably, for physical systems
exhibiting specific characteristics, the integration of physically meaningful order
parameters through feature engineering not only imbues the analytical space with
thermodynamic interpretability but also optimizes its symmetry properties, thereby
significantly improving machine learning algorithm efficiency. In our previous works,
we formulated the Effective Energy Rescale Space Trajectory Mapping (EspcTM)
method, which achieves systematic integration of Fast Fourier Transform (FFT) and
multivariate linear regression algorithms 50. This framework enables extraction of
low-frequency effective energy – a crucial order parameter characterizing slow
dynamic processes in complex systems – from total energy profiles. Through
dimensional rescaling of original system features using this low-frequency component,

we successfully established metrical uniformity across dimensions in the
representation space. Application of EspcTM has permitted successful construction of
conformational transition networks for both Brownian particle systems and alanine-12
peptide ensembles. However, while the linear regression framework in EspcTM
ensures metric consistency between dimensions, it remains inadequate in addressing
uniformity requirements within individual dimension. The attainment of such
dimensional uniformity necessitates implementation of nonlinear scaling paradigms,
where neural network architectures – with their inherent nonlinear representational
architecture and relatively straightforward trainability – present a theoretically viable
computational framework for achieving this objective.
In this study, we propose a deep neural network approach to characterize the
nonlinear relationship between conformational features of biomolecules and effective
energy of molecular dynamics trajectories, and constructed a representation space
scaled by the effective energy metrics. This framework is applied to analyze
molecular dynamics trajectories of the fast-folding protein domain Chignolin 51,52. Our
results demonstrate that compared with linear regression methods, the neural
network-based approach generates an isotropic representation space, thereby yielding
smoother state similarity matrices and enabling more distinct classification of system
states. Furthermore, to enhance the interpretability of the network, we employ
saliency score to quantify the contribution of individual features to molecular
dynamical processes, successfully identifying key determinants of conformational
transitions. We believe that the integration of neural networks with physical order
parameter analysis offers a novel paradigm for molecular trajectory investigation,
which may significantly advance the mechanistic understanding of biomolecules.
2. Models and Methods
2.1 Molecular Dynamics
We elucidate the analytical methodology using the dynamic behavior of the
commonly studied fast-folding protein domain Chignolin (PDB: 5AWL) as a

representative example 51. The structure of Chignolin was retrieved from the Protein
Data Bank and solvated in a dodecahedron periodic box, maintaining a minimum
distance of 10 Å between the solute and periodic boundary. The system incorporated
1926 water molecules and two sodium ions to neutralize the protein's net charge,
resulting in a total of 5946 particles modeled using the AMBER99SB-ILDN force
field 53. Molecular dynamics simulations were performed using the GROMACS
software package 54. During simulations, covalent bonds involving hydrogen atoms
were constrained via the LINCS algorithm with a 2.0 fs time step. Non-bonded
interactions were truncated at 15.0 Å, while long-range electrostatic interactions were
treated using the Particle Mesh Ewald (PME) method 55. Prior to production runs, the
system underwent energy minimization followed by a 100 ns equilibration in the NPT
ensemble to achieve appropriate density for subsequent NVT ensemble simulations.
For trajectory analysis in this study, we employed a 1.0 μs molecular dynamics
trajectory simulated at 375 K 52.
2.2 Feature Extraction
A 1.0 μs molecular dynamics (MD) simulation trajectory was systematically
sampled at 10.0 ps intervals, resulting in AA = 100,000 frames. To characterize state
transitions of the system, the trajectory was projected into a space spanned by AA
basis functions AA A A=1,...,AA
. Consequently, each trajectory was represented as an
AA× AA-dimensional feature matrix in the Hilbert space, formally expressed as:
A = A1 A , A2 A , A3 A , ..., AAA A
Where A denotes structural metrics. For protein conformational transitions,
torsional angles A, A of the peptide backbone or inter-residue distances between AA
atoms represent appropriate choices. In this study, we employed backbone torsion
angles A, A as the fundamental collective coordinates. To effectively mitigate
periodic boundary artifacts inherent in angular measurements, the basis functions
AA A A=1,...,AA were constructed using sine and cosine transformations of the torsional

angles 56. The Chignolin protein domain contains 8 pairs of backbone torsion angles,
yielding AA = 32 basis functions following this transformation protocol.
2.3 Low Frequency Effective Energy
To capture the slow motion of the system, we introduce a low-frequency
effective energy as an order parameter for external scaling to characterize system
evolution. The specific protocol involves performing a Fast Fourier Transform (FFT)
on the total energy of the system to obtain frequency-domain spatial vectors 57.
Retaining the first K frequency components followed by inverse transformation yields
the low-frequency energy:
AA =
A=0
AA−1
AA ∙ A−AAAA ⟹ AAA =
A=0
A−1
AA ∙ AAAAA
Where A ≪ AA. If the characteristics of the system are well-defined, K value can
be provided as a hyperparameter. In this study, we introduce a data-centric
methodology to automate the process of hyperparameter tuning, thereby eliminating
the need for manual input. Molecular dynamics simulations reveal that solvation
effects are crucial in determining the slow motion modes of biomolecules. We
therefore employ the biomolecule's collective coordinates A =
A1 A , A2 A , A3 A , ..., AAA A to infer low-frequency energy components:
AA = A(A) + AA
Through iterative fitting across multiple K values, we optimize the model
parameters and select the optimal K value maximizing the coefficient of
determination:
A∗ = A𣠀A AAA 1 − AA 2
AA 2
where AA denotes the fitting residual and AA 2 represents the variance of
system energy at frequency K. This methodology enables automated identification of
dynamically relevant low-frequency modes while maintaining physical
interpretability.

2.4 Neural Network
During the fitting process, the selection of an appropriate function A(A)
significantly influences the efficiency of representation. In our preliminary studies, we
used linear functions as fitting functions. However, a nonlinear relationship evidently
exists between collective coordinates and low-frequency energy components. In this
work, we employ a neural network approach to capture this nonlinear relationship. As
illustrated in Figure 1, the network architecture comprises three fully connected layers.
The input layer dimension is data-determined, i.e. A = AA = 32. The node numbers in
the hidden layerAand feature layerAare system-dependent, with both parameters set to
match the system's degrees of freedom A = A = 16 in this investigation. In the neural
network architecture, all layers except for the feature-to-output connection employ
ELU activation functions, which are known for their ability to prevent the dying
ReLU problem and have been shown to enhance training efficiency and accuracy. The
model is trained using the Adam optimizer, which is known for its adaptive learning
rate capabilities. The initial learning rate is set to 0.001, a batch size of 10 is used for
processing, and the mean squared error (MSE) function is employed as the loss
criterion. Ridge regression is implemented through weight decay regularization. The
entire neural network framework is constructed using PyTorch.
Upon obtaining the optimized model and optimal cutoff frequency A∗ through
training. K-Means, a widely-used clustering algorithm, was applied to the vectors of
the last hidden layer to segment the dynamical process into distinct states. Notably,
the absence of activation functions in the output layer ensures that the effective energy
equals the summation of last hidden layer, maintaining consistent scaling between
feature magnitudes and energy values.
3. Results and Discussion
Figure 2A presents the root mean square deviation (RMSD) profile of Chignolin
relative to its native conformation obtained from molecular dynamics simulations
conducted at 375 K. The trajectory exhibited two prominent transitional events along

with multiple short-lived conformational fluctuations. This observation highlights the
protein's gradual transition away from its native state, traversing distinct
conformational substates during the simulation. The recorded multi-state dynamical
behavior constitutes a robust dataset for implementing advanced trajectory clustering
methodologies in subsequent analyses.
3.1 Low-Frequency Effective Energy
By applying low-frequency cutoff filtering, we obtained the summed energy of
all low-frequency bands across specified cutoff frequencies (see Methods for
technical details). Using these low-frequency energy values as the target function for
neural network training, we established optimal fitting relationships between
low-frequency energy at different cutoff frequencies and characteristic parameters,
while calculating corresponding multiple correlation coefficients for each frequency
(see Figure 2C). For comparative analysis, the frequency-dependent multiple
correlation coefficients from linear regression are also presented in Figure 2C. Both
methods exhibited similar overall trends, but the nonlinear components of the neural
network significantly reduced fitting errors. This indicates that linear terms primarily
mediate global modulation of dimensional metric consistency, which dominates the
fitting process and explains the analogous trend patterns between methods. However,
the nonlinear effects introduced by the neural network implement localized
fine-tuning through uniformity modulation within individual dimensions, thereby
complementing the fitting performance. Consequently, the neural network achieved
systematically higher correlation coefficients across all frequencies, demonstrating the
essential contribution of nonlinear terms.
Based on the multiple correlation coefficients shown in Figure 2C, we selected
the neural network model trained at the optimal cutoff frequency (11.5 MHz). The
energy values output by this optimized model were defined as effective energy. Figure
2B illustrates the temporal evolution of effective energy (red curve) compared with
total system energy (cyan curve). Notably, these two energy profiles exhibit
fundamental differences: while total system energy fluctuates extensively across a

broad range – theoretically containing conformational change information but
obscured by stochastic noise – the effective energy derived from neural network
analysis displays discrete transitions between distinct energy states, effectively
filtering out noise to reveal systematic patterns. Further comparison with the RMSD
trajectory in Figure 2A demonstrates analogous temporal patterns between effective
energy and structural deviations. This confirms that effective energy captures essential
features of protein conformational transitions while providing enhanced state
discrimination compared to RMSD. For instance, the segments at 0.4–0.5 μs and
0.6–0.8 μs exhibit comparable RMSD averages that differ only in fluctuation
magnitude, whereas their effective energy values show distinct plateau levels,
enabling direct state differentiation. These results establish effective energy as a
robust order parameter for characterizing protein conformational transitions.
3.2 Analysis of Kinetic Processes
The last hidden layer of the neural network provides an optimized
representational space for protein conformations (red nodes in Figure 1). In this
architecture, the effective energy output (purple node) equals the summation across all
dimensions of the representational space (red nodes). Consequently, the gradient of
the effective energy with respect to any dimension remains constant at unity,
indicating that after sufficient training, all dimensions share identical scaling and
exhibit intrinsic uniformity. Owing to the high optimization of this representation
space, the simplest K-Means clustering algorithm can effectively partition the entire
kinetic trajectory 58. Figure 3A illustrates the kinetic transitions among three distinct
states. Protein folding occurs via intermediate state S2 during transitions between the
folded state (S3) and the unfolded state (S1). The state transition pathway across the
simulation trajectory (Figure 3B, upper panel) exhibits remarkable consistency with
the patterns of RMSD and effective energy shown in Figures 2A and 2B.
The similarity matrices based on the representation by the last hidden layer were
shown in Figure 3B. For comparison, we analyzed similarity matrices derived from
two alternative approaches: a linearly regressed coordinate-aligned space (Figure 3C)

50 and a standardized coordinate space without alignment (Figure 3D) 35. While all
matrices display comparable block partitioning, the raw coordinate matrix (Figure 3D)
exhibits reduced discriminative power, as evidenced by predominant mid-spectrum
coloration, leading to instability in clustering outcomes. The regression-aligned space
(Figure 3C) improves discriminability and clustering robustness but it retains
intra-block textural artifacts, causing artificial state-transition noise and trajectory
fragmentation. In contrast, the neural network-derived representation space resolves
these limitations comprehensively. It generates similarity matrices with enhanced
discriminability while intrinsically eliminating intra-block textural noise, thereby
enabling stable clustering without trajectory fragmentation. Notably, although
trajectory smoothing algorithms can mitigate fragmentation artifacts, they introduce
subjective hyperparameters (e.g., smoothing window size). The neural network
approach provides a fully data-driven solution conducive to automated analysis.
Mechanistically, this superiority arises from differential contributions of reaction
coordinates to conformational transitions. Independent standardization of coordinates
assumes equal contribution from each dimension to conformational dynamics,
rendering classification dependent on multidimensional kinetic cooperativity—a
suboptimal strategy for stability. Global scaling via linear regression assigns
coordinate-specific weights that reflect their relative contributions, improving
discriminability (manifested as edge-biased coloration in similarity matrices).
However, such global weighting fails to address intra-dimensional uniformity. The
nonlinear transformations in the neural network enforce gradient uniformity (constant
gradient of 1 to the effective energy) across all dimensions of the representation space.
These properties eliminate trajectory fragmentation artifacts, produces smoother
similarity matrices, and yields reasonable state partitioning.
3.3 Saliency Score Analysis
The preceding analysis demonstrates that the representation space derived from
the last hidden layer of the neural network employs uniform scaling across and within
its dimensions, thereby establishing an isotropic analytical space. This symmetry

optimizes the analytical workflow, yielding more stable and reliable results. However,
the nonlinear mapping between these dimensions and the original coordinates
introduces challenges in interpretability. To address the limited interpretability of the
neural network, we adopt the conceptual framework of Vanilla Gradient methods used
in constructing saliency maps 59. Specifically, we quantify the contribution of
individual reaction coordinates to dynamical processes by statistically analyzing the
gradients of the effective energy with respect to these coordinates. This approach
aligns methodologically with the strategy employed by Pande and coworkers 49.
In practice, as the neural network is trained using backpropagation-based
derivative computation, the gradients of the loss function with respect to the input
variables can be easily obtained. Similar to how pixels with larger gradients of the
loss function dominate image recognition in Vanilla Gradient methods, we use
boxplot visualization to statistically describe the gradients of effective energy across
all reaction coordinates (dihedral angles), as shown in Figure 4. The analysis reveals
that ψ6 and ψ8 exhibit relatively greater contributions. This finding correlates with the
dynamical modes identified earlier (Figure 3A): the studied trajectory features three
distinct kinetic states corresponding to the zipping model of β-hairpin folding 51,60.
The transition from the unfolded to intermediate state is primarily governed by
rotations of ψ6, whereas the subsequent transition to the folded state is dominated by
rotations of ψ8.
4. Conclusion
In this study, we present EscalNet, a novel methodology for molecular dynamics
trajectory analysis that integrates Fourier transform with neural networks. This
approach enables the extraction of an energy-dimensional order parameter, termed
effective energy, from the total energy output of molecular dynamics simulations,
which effectively captures protein conformational changes. By interrogating the last
hidden layer of the neural network, we establish a representation space optimized for
analyzing protein conformational transitions. Through deliberate architectural design,

we rigorously demonstrate that this representation space exhibits isotropic symmetry,
a critical property underlying its exceptional capability to characterize system
dynamics. We believe that leveraging physically meaningful order parameters to scale
representation spaces represents an innovative paradigm with significant potential for
enhancing deep representation learning, as evidenced by the growing body of research
that explores the intersection of physics and deep learning. Furthermore, we develop a
gradient-based metric quantifying the contribution of reaction coordinates to system
dynamics through statistical analysis of effective energy profiles, thereby enhancing
the interpretability of neural network models. The EscalNet methodology establishes
a new conceptual framework for molecular trajectory analysis, offering substantial
promise for advancing dynamical investigations of complex biological systems.
Code availability
Demo code of EscalNet is available at https://gitee.com/ghzuo/escalnet
Competing interests
The authors have declared that no competing interests exist.
Acknowledgments
GHZ thanks the Wenzhou institute, University of Chinese Academy of Sciences
(Grant No. WIUCASQD2021042).
Reference
(1) Karplus, M.; McCammon, J. A. Molecular Dynamics Simulations of Biomolecules. Nat.
Struct. Biol. 2002, 9 (9), 646–652. https://doi.org/10.1038/nsb0902-646.
(2) Adcock, S. A.; McCammon, J. A. Molecular Dynamics: Survey of Methods for
Simulating the Activity of Proteins. Chem. Rev. 2006, 106 (5), 1589–1615.
https://doi.org/10.1021/cr040426m.

(3) Wang, C.; Lu, H.; Wang, Z.; Xiu, P.; Zhou, B.; Zuo, G.; Wan, R.; Hu, J.; Fang, H. Stable
Liquid Water Droplet on a Water Monolayer Formed at Room Temperature on Ionic
Model Substrates. Phys Rev Lett 2009, 103 (13), 137801.
https://doi.org/10.1103/PhysRevLett.103.137801.
(4) Zuo, G.; Kang, S. G.; Xiu, P.; Zhao, Y.; Zhou, R. Interactions between Proteins and
Carbon-Based Nanoparticles: Exploring the Origin of Nanotoxicity at the Molecular
Level. Small 2013, 9 (9–10), 1546–1556. https://doi.org/10.1002/smll.201201381.
(5) Chiti, F.; Dobson, C. M. Protein Misfolding, Functional Amyloid, and Human Disease.
Annu. Rev. Biochem. 2006, 75, 333–366.
https://doi.org/10.1146/annurev.biochem.75.101304.123901.
(6) Wei, G.; Xi, W.; Nussinov, R.; Ma, B. Protein Ensembles: How Does Nature Harness
Thermodynamic Fluctuations for Life? The Diverse Functional Roles of Conformational
Ensembles in the Cell. Chem Rev 2016, 116 (11), 6516–6551.
https://doi.org/10.1021/acs.chemrev.5b00562.
(7) Zhou, H.; Yang, Z.; Tian, X.; Chen, L.; Lee, S.; Huynh, T.; Ge, C.; Zhou, R. Lanosterol
Disrupts the Aggregation of Amyloid-Beta Peptides. ACS Chem. Neurosci. 2019, 10 (9),
4051–4060. https://doi.org/10.1021/acschemneuro.9b00285.
(8) Eisenmesser, E. Z.; Bosco, D. A.; Akke, M.; Kern, D. Enzyme Dynamics during
Catalysis. Science 2002, 295 (5559), 1520–1523.
https://doi.org/10.1126/science.1066176.
(9) Weng, J.; Wang, W. Dynamic Multivalent Interactions of Intrinsically Disordered
Proteins. Curr. Opin. Struct. Biol. 2020, 62, 9–13.
https://doi.org/10.1016/j.sbi.2019.11.001.
(10) Jia, W.; Wang, H.; Chen, M.; Lu, D.; Lin, L.; Car, R.; Weinan, E.; Zhang, L. Pushing the
Limit of Molecular Dynamics with Ab Initio Accuracy to 100 Million Atoms with
Machine Learning. SC20: International Conference for High Performance Computing,
Networking, Storage and Analysis 2020, 1–14.
https://doi.org/10.1109/SC41405.2020.00009.
(11) Shaw, D. E.; Maragakis, P.; Lindorff-Larsen, K.; Piana, S.; Dror, R. O.; Eastwood, M. P.;
Bank, J. A.; Jumper, J. M.; Salmon, J. K.; Shan, Y.; Wriggers, W. Atomic-Level
Characterization of the Structural Dynamics of Proteins. Science 2010, 330 (6002),
341–346. https://doi.org/10.1126/science.1187409.
(12) Cheatham, T. E.; Kollman, P. A. Molecular Dynamics Simulation of Nucleic Acids. Annu.
Rev. Phys. Chem. 2000, 51, 435–471.
https://doi.org/10.1146/annurev.physchem.51.1.435.
(13) Mirny, L.; Shakhnovich, E. Protein Folding Theory: From Lattice to All-Atom Models.
Annu. Rev. Biophys. Biomol. Struct. 2001, 30, 361–396.
https://doi.org/10.1146/annurev.biophys.30.1.361.
(14) Norberg, J.; Nilsson, L. Molecular Dynamics Applied to Nucleic Acids. Acc. Chem. Res.
2002, 35 (6), 465–472. https://doi.org/10.1021/ar010026a.
(15) Moraitakis, G.; Purkiss, A. G.; Goodfellow, J. M. Simulated Dynamics and Biological
Macromolecules. Rep. Prog. Phys. 2003, 66 (3), 383–406.
https://doi.org/10.1088/0034-4885/66/3/203.
(16) Levy, Y.; Wolynes, P. G.; Onuchic, J. N. Protein Topology Determines Binding

Mechanism. Proc. Natl. Acad. Sci. U. S. A. 2004, 101 (2), 511–516.
https://doi.org/10.1073/pnas.2534828100.
(17) Zhou, R. H.; Huang, X. H.; Margulis, C. J.; Berne, B. J. Hydrophobic Collapse in
Multidomain Protein Folding. Science 2004, 305 (5690), 1605–1609.
https://doi.org/10.1126/science.1101176.
(18) Gao, Y. Q.; Yang, W.; Karplus, M. A Structure-Based Model for the Synthesis and
Hydrolysis of ATP by F-1-ATPase. Cell 2005, 123 (2), 195–205.
https://doi.org/10.1016/j.cell.2005.10.001.
(19) Zuo, G.; Wang, J.; Wang, W. Folding with Downhill Behavior and Low Cooperativity of
Proteins. Proteins 2006, 63 (1), 165–173. https://doi.org/10.1002/prot.20857.
(20) Zuo, G.; Hu, J.; Fang, H. Effect of the Ordered Water on Protein Folding: An off-Lattice
Go-like Model Study. Phys Rev Stat Nonlin Soft Matter Phys 2009, 79 (3 Pt 1), 31925.
https://doi.org/10.1103/PhysRevE.79.031925.
(21) Li, W. F.; Zhang, J.; Wang, J.; Wang, W. Metal-Coupled Folding of Cys(2)His(2)
Zinc-Finger. J. Am. Chem. Soc. 2008, 130 (3), 892–900.
https://doi.org/10.1021/ja075302g.
(22) Weber, J. K.; Jack, R. L.; Pande, V. S. Emergence of Glass-like Behavior in Markov
State Models of Protein Folding Dynamics. J. Am. Chem. Soc. 2013, 135 (15),
5501–5504. https://doi.org/10.1021/ja4002663.
(23) Miyashita, N.; Straub, J. E.; Thirumalai, D. Structures of Beta-Amyloid Peptide 1-40,
1-42, and 1-55-the 672-726 Fragment of APP-in a Membrane Environment with
Implications for Interactions with Gamma-Secretase. J Am Chem Soc 2009, 131 (49),
17843–17852. https://doi.org/10.1021/ja905457d.
(24) Yang, J. R.; Shi, G. S.; Tu, Y. S.; Fang, H. P. High Correlation between Oxidation Loci
on Graphene Oxide. Angew. Chem. Int. Ed. 2014, 53 (38), 10190–10194.
https://doi.org/10.1002/anie.201404144.
(25) Yan, Z.; Wang, J. Superfunneled Energy Landscape of Protein Evolution Unifies the
Principles of Protein Evolution, Folding, and Design. Phys Rev Lett 2019, 122 (1), 18103.
https://doi.org/10.1103/PhysRevLett.122.018103.
(26) Wu, K.; Xu, S.; Wan, B.; Xiu, P.; Zhou, X. A Novel Multiscale Scheme to Accelerate
Atomistic Simulations of Bio-Macromolecules by Adaptively Driving Coarse-Grained
Coordinates. J Chem Phys 2020, 152 (11), 114115. https://doi.org/10.1063/1.5135309.
(27) Naritomi, Y.; Fuchigami, S. Slow Dynamics in Protein Fluctuations Revealed by
Time-Structure Based Independent Component Analysis: The Case of Domain Motions.
J Chem Phys 2011, 134 (6), 065101. https://doi.org/10.1063/1.3554380.
(28) Chung, H. S.; Piana-Agostinetti, S.; Shaw, D. E.; Eaton, W. A. Structural Origin of Slow
Diffusion in Protein Folding. Science 2015, 349 (6255), 1504–1510.
https://doi.org/10.1126/science.aab1369.
(29) Beyerle, E. R.; Guenza, M. G. Identifying the Leading Dynamics of Ubiquitin: A
Comparison between the tICA and the LE4PD Slow Fluctuations in Amino Acids’
Position. J Chem Phys 2021, 155 (24), 244108. https://doi.org/10.1063/5.0059688.
(30) Bonati, L.; Piccini, G.; Parrinello, M. Deep Learning the Slow Modes for Rare Events
Sampling. Proc. Natl. Acad. Sci. 2021, 118 (44), e2113533118.
https://doi.org/10.1073/pnas.2113533118.

(31) Chen, W.; Sidky, H.; Ferguson, A. L. Capabilities and Limitations of Time-Lagged
Autoencoders for Slow Mode Discovery in Dynamical Systems. J. Chem. Phys. 2019,
151 (6), 64123. https://doi.org/10.1063/1.5112048.
(32) Onuchic, J. N.; Luthey-Schulten, Z.; Wolynes, P. G. THEORY OF PROTEIN FOLDING:
The Energy Landscape Perspective. Annu. Rev. Phys. Chem. 1997, 48 (1), 545–600.
https://doi.org/10.1146/annurev.physchem.48.1.545.
(33) Husic, B. E.; Pande, V. S. Markov State Models: From an Art to a Science. J Am Chem
Soc 2018, 140 (7), 2386–2396. https://doi.org/10.1021/jacs.7b12191.
(34) Plattner, N.; Noe, F. Protein Conformational Plasticity and Complex Ligand-Binding
Kinetics Explored by Atomistic Simulations and Markov Models. Nat. Commun. 2015, 6,
7653. https://doi.org/10.1038/ncomms8653.
(35) Gong, L.; Zhou, X. Kinetic Transition Network Based on Trajectory Mapping. J Phys
Chem B 2010, 114 (32), 10266–10276. https://doi.org/10.1021/jp100737g.
(36) Zwanzig, R. From Classical Dynamics to Continuous-Time Random-Walks. J. Stat. Phys.
1983, 30 (2), 255–262. https://doi.org/10.1007/bf01012300.
(37) Kampen, N. G. van. Stochastic Processes in Physics and Chemistry; North-Holland
Personal Library; North Holland: Amsterdam, 2007; Vol. 3rd ed.
(38) Brini, E.; Simmerling, C.; Dill, K. Protein Storytelling through Physics. Science 2020,
370 (6520), eaaz3041. https://doi.org/10.1126/science.aaz3041.
(39) Noé, F.; Tkatchenko, A.; Müller, K.-R.; Clementi, C. Machine Learning for Molecular
Simulation. Annu. Rev. Phys. Chem. 2020, 71 (1), 361–390.
https://doi.org/10.1146/annurev-physchem-042018-052331.
(40) Wu, H.; Nüske, F.; Paul, F.; Klus, S.; Koltai, P.; Noé, F. Variational Koopman Models:
Slow Collective Variables and Molecular Kinetics from Short off-Equilibrium
Simulations. The Journal of Chemical Physics 2017, 146 (15), 154104.
https://doi.org/10.1063/1.4979344.
(41) Glielmo, A.; Husic, B. E.; Rodriguez, A.; Clementi, C.; Noé, F.; Laio, A. Unsupervised
Learning Methods for Molecular Simulation Data. Chem. Rev. 2021, 121 (16),
9722–9758. https://doi.org/10.1021/acs.chemrev.0c01195.
(42) Sisk, T. R.; Robustelli, P. Folding-upon-Binding Pathways of an Intrinsically Disordered
Protein from a Deep Markov State Model. Proc. Natl. Acad. Sci. 2024, 121 (6),
e2313360121. https://doi.org/10.1073/pnas.2313360121.
(43) Wang, Y.; Lamim Ribeiro, J. M.; Tiwary, P. Machine Learning Approaches for Analyzing
and Enhancing Molecular Dynamics Simulations. Current Opinion in Structural Biology
2020, 61, 139–145. https://doi.org/10.1016/j.sbi.2019.12.016.
(44) Schneider, E.; Dai, L.; Topper, R. Q.; Drechsel-Grau, C.; Tuckerman, M. E. Stochastic
Neural Network Approach for Learning High-Dimensional Free Energy Surfaces. Phys.
Rev. Lett. 2017, 119 (15), 150601. https://doi.org/10.1103/PhysRevLett.119.150601.
(45) Ketkaew, R.; Creazzo, F.; Luber, S. Machine Learning-Assisted Discovery of Hidden
States in Expanded Free Energy Space. J. Phys. Chem. Lett. 2022, 13 (7), 1797–1805.
https://doi.org/10.1021/acs.jpclett.1c04004.
(46) Noé, F.; Olsson, S.; Köhler, J.; Wu, H. Boltzmann Generators: Sampling Equilibrium
States of Many-Body Systems with Deep Learning. Science 2019, 365 (6457), eaaw1147.
https://doi.org/10.1126/science.aaw1147.

(47) Invernizzi, M.; Krämer, A.; Clementi, C.; Noé, F. Skipping the Replica Exchange Ladder
with Normalizing Flows. J. Phys. Chem. Lett. 2022, 13 (50), 11643–11649.
https://doi.org/10.1021/acs.jpclett.2c03327.
(48) Zhang, J.; Lei, Y.-K.; Che, X.; Zhang, Z.; Yang, Y. I.; Gao, Y. Q. Deep Representation
Learning for Complex Free-Energy Landscapes. J. Phys. Chem. Lett. 2019, 10 (18),
5571–5576. https://doi.org/10.1021/acs.jpclett.9b02012.
(49) Hernández, C. X.; Wayment-Steele, H. K.; Sultan, M. M.; Husic, B. E.; Pande, V. S.
Variational Encoding of Complex Dynamics. Phys. Rev. E 2018, 97 (6), 62412.
https://doi.org/10.1103/PhysRevE.97.062412.
(50) Wang, Z.; Zhou, X.; Zuo, G. EspcTM: Kinetic Transition Network Based on Trajectory
Mapping in Effective Energy Rescaling Space. Front Mol Biosci 2020, 7, 589718.
https://doi.org/10.3389/fmolb.2020.589718.
(51) Honda, S.; Akiba, T.; Kato, Y. S.; Sawada, Y.; Sekijima, M.; Ishimura, M.; Ooishi, A.;
Watanabe, H.; Odahara, T.; Harata, K. Crystal Structure of a Ten-Amino Acid Protein. J.
Am. Chem. Soc. 2008, 130 (46), 15327–15331. https://doi.org/10.1021/ja8030533.
(52) Lindorff-Larsen, K.; Piana, S.; Dror, R. O.; Shaw, D. E. How Fast-Folding Proteins Fold.
Science 2011, 334 (6055), 517–520. https://doi.org/10.1126/science.1208351.
(53) Lindorff-Larsen, K.; Piana, S.; Palmo, K.; Maragakis, P.; Klepeis, J. L.; Dror, R. O.;
Shaw, D. E. Improved Side-Chain Torsion Potentials for the Amber ff99SB Protein Force
Field. Proteins 2010, 78 (8), 1950–1958. https://doi.org/10.1002/prot.22711.
(54) Abraham, M. J.; Murtola, T.; Schulz, R.; Páll, S.; Smith, J. C.; Hess, B.; Lindahl, E.
GROMACS: High Performance Molecular Simulations through Multi-Level Parallelism
from Laptops to Supercomputers. Softwarex 2015, 1–2, 19–25.
https://doi.org/10.1016/j.softx.2015.06.001.
(55) Darden, T.; York, D.; Pedersen, L. Particle Mesh Ewald - an N.Log(N) Method for
Ewald Sums in Large Systems. J Chem Phys 1993, 98 (12), 10089–10092.
https://doi.org/10.1063/1.464397.
(56) Nagel, D.; Sartore, S.; Stock, G. Selecting Features for Markov Modeling: A Case Study
on HP35. J. Chem. Theory Comput. 2023, 19 (11), 3391–3405.
https://doi.org/10.1021/acs.jctc.3c00240.
(57) W, . T. Cochran; J, . W. Cooley; D, . L. Favin; H, . D. Helms; R, . A. Kaenel; W, . W.
Lang; G, . C. Maling; D, . E. Nelson; C, . M. Rader; P, . D. Welch. What Is the Fast
Fourier Transform? Proc. IEEE 1967, 55 (10), 1664–1674.
https://doi.org/10.1109/PROC.1967.5957.
(58) Jain, A. K. Data Clustering: 50 Years beyond K-Means. Pattern Recognit. Lett. 2010, 31
(8), 651–666. https://doi.org/10.1016/j.patrec.2009.09.011.
(59) Simonyan, K.; Vedaldi, A.; Zisserman, A. Deep inside Convolutional Networks:
Visualising Image Classification Models and Saliency Maps. arXiv December 20, 2013.
https://doi.org/10.48550/arXiv.1312.6034.
(60) Ozkan, S. B.; Wu, G. A.; Chodera, J. D.; Dill, K. A. Protein Folding by Zipping and
Assembly. Proc Natl Acad Sci U S A 2007, 104 (29), 11987–11992.
https://doi.org/10.1073/pnas.0703700104.

Figures Legends
Figure 1 Schematic diagram of EscalNet.
The original data were inputted from the orange node and passed through a fully
connected network to the hidden layers (cyan and red nodes), and fitted the effective
energy of the molecular system (purple node). The last hidden layer (red nodes)
serves as the representation space for data analysis.
Figure 2 Effective Energy Analysis
(A) RMSD and (B) Effective energy (with cutoff of 11.5 MHz, red) and total energy
(scaling down to 1/20 of the original for plotting, cyan) as a function of time for a
typical simulation trajectory. (C) The multiple correlation coefficient as a function of
cutoff of frequencies for neural network (EscalNet) and linear regression (EspcTM).
Figure 3 State Transition and Similarity matrices of a typical Trajectory.
(A) Three states transition. And similarity matrices obtained from feature space (B)
rescaled by neural network (EscalNet), (C) rescaled by linear regression (EspcTM),
and (D) without rescaling.
Figure 4 Saliency score of the neural network.
The boxplot of the derivatives of effective energy on original reactive coordinates
(dihedral angles of the backbone). The orange horizontal line represents the median,
the upper and lower edges of the blue model are the quartiles, the horizontal lines
above and below are the boundaries, and the yellow dots are the mean values.

Figure 1 Schematic diagram of EscalNet.

Figure 2 Low Frequency Effective Energy

Figure 3 State Transition and Similarity Matrices.
S2
S3
S1

Figure 4 Saliency score of the neural network.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:28.529Z
- **Text Length:** 38828 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 21 of 21
