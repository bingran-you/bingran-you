# PDF Document: Bayesian active learning of interatomic force field for molecular dynamics simulation of PtAg(111).pdf

**File Path:** Bayesian active learning of interatomic force field for molecular dynamics simulation of PtAg(111).pdf

**Processed Date:** 2026-02-10T18:14:38.797Z

**File Size:** 1428.14 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 1086

**Title:** Bayesian active learning of interatomic force field for molecular dynamics simulation of Pt/Ag(111)

**Collection:** Bingran You

---

## Extracted Text Content

Bayesian active learning of interatomic force field for molecular dynamics simulation of Pt/Ag(111)
Kai Xu†, Lei Yan‡, and Bingran You⊥
† College of Materials Science and Opto-Electronic Technology, University of Chinese Academy of Sciences, Beijing, 100049, China.
‡ College of Life Science, ZheJiang University, Hangzhou, 310058, China. ⊥ School of Physics, University of Chinese Academy of Sciences, Beijing, 100049, China.
* The authors contributed equally to this work.
Abstract
Force field is a central requirement in molecular dynamics (MD) simulation for accurate description of the potential energy landscape and the time evolution of individual atomic motions. Most energy models are limited by a fundamental tradeoff between accuracy and speed. Although ab initio MD based on density functional theory (DFT) has high accuracy, its high computational cost prevents its use for large-scale and long-timescale simulations. Here, we use Bayesian active learning to construct a Ga-
ussian process model of interatomic forces to describe Pt deposited on Ag(111). An accurate model is obtained within one day of wall time after selecting only 126 atomic environments based on two- and three-body interactions, providing mean absolute errors of 52 and 142 meV/Å for Ag and Pt, respectively. Our work highlights automated and minimalistic training of machine-learning force fields with high fidelity to DFT, which would enable large-scale and long-timescale simulations of alloy surfaces -
at first-principles accuracy.
1. Introduction
Molecular dynamics (MD) is a computational method for simulating the physical movements of atoms and molecules in real time. The atoms and molecules interact according to the energy model of the system. The dynamical evolution and the corresponding real-time trajectories are determined from numerical solution of Newton’s equations of motion, where interatomic forces are calculated as gradients of the potential energy. Different force fields are suited to describe a variety of chemical bonds, inclu-
ding covalent, ionic, and van der Waals interactions. The accuracy of MD simulation depends on the accuracy of force field in describing the system of interest. MD simulations have evolved into a mature technique to understand macromolecular structure-to-function relationships in chemical physics, biophysics, drug design, and materials science.1,2
In classical molecular dynamics, empirical force fields (so-called molecular mechanics) are frequently employed to describe the potential energy surface, usually the ground state. These models are fitted against accurate quantum chemical calculations or experimentally measured physical properties such as elastic constants, lattice parameters, and spectroscopic measurements. 3 However, empirical models have several limitations, such as poor transferability and requirement of extensive parameterizat-
ions.
In complex systems that require more accurate representations of the energy landscape, electronic behavior can be obtained from first-principles calculations based on density functional theory (DFT), utilized in ab initio molecular dynamics (AIMD). However, due to the large computational cost of treating the electronic degrees of freedom, AIMD remains prohibitive for largescale and long-timescale simulations.4
1

Machine-learning models of the energy landscape can enable fast simulations while preserving first-principles level of accuracy. 5 Recently developed mapped Gaussian process (MGP) force field has been applied to successfully simulate dynamics of complex multicomponent systems, such as Pd deposited on Ag(111) surface. 6,7 Here, a detailed atomistic picture of the microsecondtimescale restructuring of Pd on Ag was revealed by combining microscopy, spectroscopy, and novel simulation methods. In soft -
metals such as Pd and Ag, the major chemical complexity arises from elemental variations in the surface energy. Ag has a full d-shell and segregates to the surface, while active metal like Pd will migrate to the subsurface, ultimately forming e.g. core@shell nanostructures.8
Silver-based heterogeneous catalysts have industrial applications in several reactions where selectivity is a challenge. Thus, fundamental understanding of the structure-property relationship remains crucial toward designing selective catalysts. Previous study used scanning tunneling microscopy (STM) to reveal the large-scale reorganization of Pt deposited on Ag at the atomic level.9 Several mechanisms have been shown to drive the restructuring process: place exchange and pop-out, as well as step -
ascent and descent.7 The resulting surface vacancy pits would have a vital implication in the catalytic process. The structure also depends on the annealing temperature: the density of Pt atoms surrounding Ag step edges increased at higher temperatures. Further experiments have shown that Pt atoms alloyed with Ag have a weaker binding affinity for CO molecules, which are wellknown to poison the catalyst surface. These observations of the alloy surface structure provide new insights toward rational-
 catalyst design.
In this project, we use a Bayesian active learning algorithm6 to train an accurate force field for Pt/Ag using a training set generated by high-temperature AIMD to ensure a diverse set of atomic environments. The training was completed within 24 hours of wall time on a regular laptop. Upon validation, the mean absolute errors of the predicted atomic forces were 52 and 142 meV/Å for Ag and Pt, respectively. The optimized hyperparameters give physically meaningful description of our surface model. T-
he resulting force field would enable large-scale and long-timescale simulations to reveal detailed atomistic picture of Pt/Ag(111).
2. Methods
2.1. Bayesian active learning We use a Bayesian active learning algorithm called FLARE (Fast Learning of Atomistic Rare
Events) and its module “Gaussian process from AIMD” (GPFA) which uses an AIMD trajectory as an input. 6 The model is initialized using an arbitrary structure in the trajectory. At every frame, GP predicts the forces on all atoms and the corresponding epistemic uncertainty for every force component based on the dissimilarity of an atomic environment from the local environments stored in the training set. An environment is added to the training set if its epistemic uncertainty exceeds the current no-
ise parameter of the model. This method has many advantages: it is nonparametric, fully Bayesian, explicitly multicomponent, and can be mapped to highly efficient tabulated force fields. The model is restricted to a sum over 2- and 3-body contributions with 7.0 and 4.5 Å cutoff, respectively, which have been shown to be adequate for Group 10 & 11 alloy systems in a previous study of Pd/Ag.7 Because of its low-dimensionality, regression over a high-dimensional descriptor is not needed, and the corr-
esponding hyperparameters are physically interpretable.
2

2.2. Dataset

Table 1. List of methods and software for training and application of the Bayesian force field.

Application

Method

Software

Gaussian process (GP) Training data Application

Bayesian active learning6
Ab initio molecular dynamics (AIMD)11,12
Gaussian process (ASE calculator)6 Mapped Gaussian process (LAMMPS pair style)15

Fast Learning of Atomistic Rare Events (FLARE)6,10
Vienna Ab Initio Simulation Package (VASP)13
Atomic Simulation Environment (ASE)14
Large-scale Atomic/Molecular Massively Parallel Simulator (LAMMPS)16

Figure 1. Frames from high-temperature AIMD of a Pt cluster deposited on Ag(111) at 1100 K over ~30 ps. The structure was melted to generate a diverse set of atomic environments as our training set.
The AIMD dataset was generated following the same procedure described in a previous study of Pd/Ag(111). 7 The temperature was set at 1100 K (bulk Ag melting point = 1235 K) to melt the system and generate a diverse set of atomic environments for the training. After the active learning was completed, we validated the GP model using 50 regularly spaced frames from the AIMD trajectory after excluding those that were selected by the active learning protocol.

3

3. Results and Discussion

Table 2. Final optimized GP hyperparameters: Two- and three-body signal variances, σ2 and σ3, respectively, which determine the uncertainty of points far from the training set: two- and three-body

length scales, l2 and l3 respectively, which determine how rapidly the model varies in space; and the noise parameter σn corresponding to the expected error level of the model.

σ2 (eV/Å)

σ3 (eV/Å)

l2 (Å)

l3 (Å)

σn (eV/Å)

0.303

0.00567

0.937

1.173

0.136

The hyperparameters provide physically interpretable insight on the nature of the atomistic system (Table 2). Typical prediction errors for machine-learning force fields lie in the range of 50200 meV/Å, and the energy of a pair or triplet is much less than the total local energy assigned to an atom. After optimization, the triplet contribution to the signal variance (0.00567 eV/Å) is significantly smaller than the pair contribution (0.303 eV/Å): the variances correspond to the uncertainty of point-
s residing far from the training manifold, and both values are much less than 1 eV/Å. The length scale of two-body (0.93 Å) and three-body (1.173 Å) are close to 1 Å: the length scales correspond to spatial variation of the model, and both values are on the same order of magnitude as the average bond length of 2.93 Å in face-centered cubic Ag employed in the training structure. The noise parameter is around 0.1 eV/ Å and corresponds to the noise arising from thermal fluctuation inherent in our AIM-
D trajectory.

Figure 2. (a) Mean absolute error (MAE) of force predictions and the noise hyperparameter during the active learning process; (b) the log marginal likelihood vs. the number of atomic environments. New atomic environment is added at frames indicated by black dots in (a); most training occurs during the first 100 frames, after which both MAE and the noise quickly plateau to an average value of 0.07 and 0.14 eV/Å, respectively. The likelihood initially becomes negative but increases linearly afterwar-
ds.
The active learning process is automated and minimalistic, as the model selects by itself which atomic environment to add to the training set only when needed. The algorithm loops over all atomic environments in a given AIMD frame. If any uncertainty prediction exceeds the threshold for data acquisition threshold, which is set equal to the current noise parameter, the highest-uncertainty atomic environment is added to the training set and hyperparameters reoptimized. In total, 126 atomic environme-
nts have been added to the training set. As shown in Fig. 1a, the training set mean absolute error (MAE) and the noise parameter quickly stabilize to ~0.07 and 0.14 eV/ Å after the first 200
4

frames, within which majority of the atomic environments are added. The log marginal likelihood first shows a downward trend up to ~50th atomic environment, after which it increases steadily into the positive regime after ~100th atomic environment. This observation demonstrates the capability of the Gaussian process model to utilize the uncertainty to improve its performance in an autonomous fashion.
Figure 3. Hyperparameters of signal variances (sig; yellow and green) and length scales (ls; blue and red) for two- and three-body contributions, indicated by separate axes. Both ls and sig3 quickly plateau after frame ~120; sig2 undergoes an abrupt increase at frame ~3500. The final values are provided in Table 2.
The evolution of the remaining four hyperparameters over the training process is shown in Fig. 3. Similar to the noise parameter, the two length scales stabilize after ~50th atomic environment. In contrast, the signal variances show larger fluctuations: sig2 undergoes a sudden increase after ~80th atomic environment, whereas sig3 settles to a small value after fluctuating over first 80 atomic environments. Proper convergence of these values is important for reliability of the prediction model, esp-
ecially given that sig3 has a high weight in the mapped GP model. Further hyperparameter optimization steps could potentially improve the convergence of these values, but the regression is limited by its prediction time that grows roughly linearly with the number of training environments.17
Figure 4. Parity plot of the GP force components vs. the corresponding DFT force components for Ag (left) and Pt (right) from the test set. The corresponding mean absolute error (MAE) values are shown in the legends.
5

Model validation was performed using AIMD frames whose atomic environments were not included in the training set. The parity plot of the predicted vs. DFT force components is shown in Fig. 4 for each element. Our model provides MAE of 52 and 142 meV/ Å for Ag and Pt, respectively, indicating high fidelity to DFT. Understandably, Ag has lower MAE than Pt due to the lower number of Pt atoms in our training structures, as well as the full d-shell of Ag which likely makes its interatomic interactions -
more electronically amenable for model description than those of Pt.
Conclusions
Machine-learning force fields offer promising solutions to the fundamental tradeoff between accuracy and cost. In this work, we use Bayesian active learning for automated and minimalistic training of a Gaussian process model of interatomic forces based on two- and three-body pairs. Hightemperature AIMD trajectory is used as the training set, generated with a small slab of Pt/Ag(111) at 1100 K for 30 ps. After training for one day of wall time, the resulting model exhibits high fidelity to DFT, wit-
h mean absolute errors of 52 and 142 meV/ Å for force predictions of Ag and Pt, respectively. The method enables MD simulation of large-scale systems for long-timescales and can be applied easily to other alloy surfaces of interest.
Acknowledgments
This project was supported by Touch Education Technology Inc. The AIMD dataset was provided by the Project Lead, J. S. Lim of Harvard University. We acknowledge scientific, technical, and editorial support from J. S. Lim, as well as administrative support from M. Clarke and X. Wang of Touch Education Technology Inc.
Author Contributions
K.X. and L.Y. used the FLARE library to perform Bayesian active learning and force field validation.6,10 K.X. prepared the tables and figures. All authors contributed to manuscript preparation; B.Y. drafted the Introduction.
Competing Financial Interests
The authors declare no competing financial interests.
References
1. Bera, I. & Payghan, P. v. Use of Molecular Dynamics Simulations in Structure-Based Drug Discovery. Current Pharmaceutical Design 25, 3339–3349 (2019).
2. Armstrong, J., O’Malley, A. J., Ryder, M. R. & Butler, K. T. Understanding dynamic properties of materials using neutron spectroscopy and atomistic simulation. Journal of Physics Communications vol. 4 1–18 (2020).
3. Riniker, S. Fixed-Charge Atomistic Force Fields for Molecular Dynamics Simulations in the Condensed Phase: An Overview. Journal of Chemical Information and Modeling vol. 58 565–578 (2018).
6

4. Mazurek, A. H., Szeleszczuk, Ł. & Pisklak, D. M. A review on combination of ab initio molecular dynamics and nmr parameters calculations. International Journal of Molecular Sciences vol. 22 (2021).
5. Unke, O. T. et al. Machine Learning Force Fields. Chemical Reviews 121, 10142–10186 (2021). 6. Vandermause, J. et al. On-the-fly active learning of interpretable Bayesian force fields for atomistic
rare events. npj Computational Materials 6, (2020). 7. Lim, J. S. et al. Evolution of Metastable Structures at Bimetallic Surfaces from Microscopy and
Machine-Learning Molecular Dynamics. Journal of the American Chemical Society 142, 15907– 15916 (2020). 8. Srikanth Divi & Abhijit Chatterjee. Generalized nano-thermodynamic model for capturing sizedependent surface segregation in multi-metal alloy nanoparticles. RSC Advances 8, 10409–10424 (2018). 9. Patel, D. A., Kress, P. L., Cramer, L. A., Larson, A. M. & Sykes, E. C. H. Elucidating the composition of PtAg surface alloys with atomic-scale imaging and spectroscopy. Journal of Chemical Physics 1-
51, (2019). 10. Yu Xie, Jonathan Vandermause, Lixin Sun, Andrea Cepellotti & Boris Kozinsky. FLARE. https://github.com/mir-group/flare. (2021). 11. Kresse, G. & Hafner, J. Ab. initio molecular dynamics for liquid metals. Physical Review B 47, 558– 561 (1993). 12. Kresse, G. & Hafner, J. Ab initio molecular-dynamics simulation of the liquid-metal-amorphoussemiconductor transition in germanium. Physical Review B 49, 14251 (1994). 13. Kresse, G. & Furthmüller, J. Efficient iterative schemes for ab in-
itio total-energy calculations using a plane-wave basis set. Physical Review B 54, 11169 (1996). 14. Hjorth Larsen, A. et al. The atomic simulation environment—a Python library for working with atoms. Journal of Physics: Condensed Matter 29, 273002 (2017). 15. Xie, Y., Vandermause, J., Sun, L., Cepellotti, A. & Kozinsky, B. Bayesian force fields from active learning for simulation of inter-dimensional transformation of stanene. npj Computational Materials 2021 7:1 7, 1–10 (2021). 16. Plimpton, S. -
Fast Parallel Algorithms for Short-Range Molecular Dynamics. Journal of Computational Physics 117, 1–19 (1995).
7

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:38.797Z
- **Text Length:** 17325 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
