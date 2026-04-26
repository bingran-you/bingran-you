# PDF Document: Saberi et al. - 2024 - Interaction-correlated random matrices.pdf

**File Path:** Saberi et al. - 2024 - Interaction-correlated random matrices.pdf

**Processed Date:** 2026-02-10T18:17:38.214Z

**File Size:** 876.62 KB

**Total Pages:** 6

**Extracted Pages:** 6

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2800

**Title:** Interaction-correlated random matrices

**Collection:** Large Files

---

## Extracted Text Content

Interaction-correlated random matrices
Abbas Ali Saberi,1, 2, ∗ Sina Saber,1 and Roderich Moessner2
1Department of Physics, University of Tehran, P. O. Box 14395-547, Tehran, Iran 2Max Planck Institute for the Physics of Complex Systems, 01187 Dresden, Germany (Dated: March 6, 2025)
We introduce a family of random matrices where correlations between matrix elements are induced via interaction-derived Boltzmann factors. Varying these yields access to different ensembles. We find a universal scaling behavior of the finite-size statistics characterized by a heavy-tailed eigenvalue distribution whose extremes are governed by the Fre ́chet extreme value distribution for the case corresponding to a ferromagnetic Ising transition. The introduction of a finite density of nonlocal int-
eractions restores standard random matrix behavior. Suitably rescaled average extremes, playing a physical role as an order parameter, can thus discriminate aspects of the interaction structure; they also yield further nonuniversal information. In particular, the link between maximum eigenvalues and order parameters offers a potential route to resolving long-standing problems in statistical physics, such as deriving the exact magnetization scaling function in the 2D Ising model at criticality.
Introduction.— Random matrix theory (RMT) [1] has played a significant role as a model for the statistical properties of a wide range of complex systems in diverse topics including nuclear and theoretical physics [2], financial mathematics [3], neuroscience [4], telecommunications [5], price fluctuations in the stock market [6, 7], EEG data of the brain [8], variation of different atmospheric parameters [9], ecological communities [10], and complex networks [11]. The success of RMT in describing c-
omplex systems is based on one of the ideas that the collective behavior of many uncorrelated random variables and their extremes exhibits universal patterns. However, in most of the physical systems mentioned above, the underlying random variables describing the microscopic constituents are typically subject to short- or long-range correlations and interactions. Indeed, discovering the interaction patterns underpinning huge amounts of data collected from complex systems in biology, ecology, socio-
logy, economy, or indeed experimental quantum measurements, is a central problem in artificial intelligence and inverse statistical problems, with the aim of modeling real-world systems [12–14]. This poses a major challenge for reconstructing the correlation structures from the emerging collective behavior of individual elements, where traditional data analysis tools struggle to extract underlying features.
An intriguing question is whether RMT can reveal or characterize underlying interactions and correlations in a physical system. For this, it is a first step necessary to consider a scheme of random matrices with correlated rather than fully independent elements. While the RMT of uncorrelated random variables is well understood, less is known about the universal properties of the more complex random matrices with long-range correlated elements. In the past, cases of random matrices in which the ent-
ries are allowed to exhibit a certain correlation structure have been studied. Among them are Euclidean matrix ensembles possessing triangular-like correlations [15], random matrices with general slowly decay
ing correlations [16, 17], ensembles from nonextensive entropy [18], as well as almost uncorrelated ensembles [19], etc. In particular, random matrix ensembles with slowly decaying correlations (polynomial decay) are studied in [16, 17] using a novel cumulant expansion method. These works prove local laws and bulk universality, demonstrating that eigenvalue statistics remain universal and independent of the specific correlation structure, whether correlations decay rapidly (exponentially) [17] or -
slowly (polynomially) [16].
Here, we introduce what we call interaction-correlated ensembles of random matrices, where the correlations between matrix elements are derived from an underlying physical system governed by the Boltzmann measure of a microstate in a two-dimensional many-body system at thermal equilibrium. This probability measure is defined by the system’s energy function and temperature, allowing us to control the nature of the interactions that induce correlations in the matrix ensembles. Specifically, we use t-
he two-dimensional (2D) Ising model at temperature T as the foundation for generating these ensembles. The matrix ensembles, therefore, serve as a mathematical abstraction of the underlying interacting many-body system, capturing a wide spectrum of correlation behaviors. This approach provides a controlled framework for studying how the intrinsic interactions in the Ising model manifest in the statistical properties of the eigenvalue spectra of the corresponding random matrices.
It is important to note that our approach is distinct from traditional random matrix models which represent the Hamiltonians of quantum interacting many-body systems in Hilbert space, and which focus on specific matrix structures arising from few-body interactions. Unlike those models, our construction leverages the equilibrium properties of classical systems to model real-space correlations in a random matrix ensemble, offering a novel perspective on how universal spectral features in RMT, partic-
ularly near criticality, are influenced by the presence of nontrivial long-range correlations.
arXiv:2503.03472v1 [cond-mat.stat-mech] 5 Mar 2025

2
The main results of this letter, based on extensive simulations and supported by analytical arguments, are as follows: (1) An ensemble of random matrices derived from Boltzmann weights at criticality asymptotically produces an emergent bell-shaped bulk spectrum with a universal heavy tail, contrasting with the semicircle-law observed in the off-critical regime. (2) At criticality, the extreme eigenvalue statistics converge to a universal Fr ́echet distribution, deviating from the typical TracyWido-
m distribution in traditional RMT. (3) The spectrum of the mean-field limit of the interacting system at criticality aligns with the predictions of standard RMT. (4) Our numerical results demonstrate that the rescaled average extreme eigenvalue serves as an order parameter, capturing both universal and non-universal aspects of the system’s interaction structure. Model.— We explore the spectral properties of a random-matrix ensemble where the matrix elements correspond directly to the spins of a 2D-
 ferromagnetic Ising model, without an external field, on a square lattice of linear size L in thermal equilibrium at temperature T . Each element M′
ij of the real random matrix M′ takes on spin values s = ±1 at the lattice site (i, j), where 1 ≤ i, j ≤ L. Periodic boundary conditions are used. We perform a finite-size scaling analysis to study the eigenvalue spectrum of an ensemble of such matrices after symmetrization M = (M′ + M′T )/2 to ensure real eigenvalues. Thus, the real symmetric matrix M has 1
2 L(L + 1) independent elements Mij which can take values ±1 or 0, while the diagonal elements Mii = ±1. The zeromean condition only holds for T ≥ Tc where the average magnetization m(T ) = ⟨s⟩ vanishes for L → ∞. Correlations between spins at distance r are captured by the spatial correlation function G(r). In the off-critical regimes, the correlations are short-range with an exponentially decaying form G(r) ≈ r−τ exp(− r
ξ ), with τ = 1/2 for T > Tc and τ = 2 for T < Tc [20]. At the critical point, T = Tc the correlation length diverges, ξ → ∞, and G(r) ≈ r−d+2−η has a power-law form with the correlation length exponent η = 1/4. We also consider the 2D Ising model with nonlocal interactions, which leads to a mean-field limit with η = 0, and investigate the corresponding random matrix ensembles. As we will demonstrate, Ising interactions provide a natural avenue towards the simplest correlated random matrices with -
qualitatively distinct behavior compared to conventional random matrix ensembles, while minimizing unnecessary complexity. This approach facilitates addressing the overarching question of how correlations impact the notion of universality within a broader class of correlated matrices. Our study is broadly related, for instance, to disordered spin systems and Anderson localization, where random matrices with correlated elements emerge from long-range physical processes. The correlations in the matr-
ix elements then reflect spatial correlations in the distribution of the disordered spin couplings
1 0 -3 1 0 -2 1 0 -1 1 0 0 1 0 1
1 0 -7
1 0 -6
1 0 -5
1 0 -4
1 0 -3
1 0 -2
1 0 -1
100
101
∝( 1 + 1 f | λ' | 2 ) - f +2 1 f= 8 /3
P D F ( | λ| )
| λ|
~ | λ| - 1 1 / 3
L
-3 -2 -1 0 1 2 3
0
1
L=256 L=512 L=1024 L=2048 L=4096
P D F ( λ)
λ
FIG. 1. Main: Distribution of the absolute eigenvalues of an ensemble of rescaled (see text) symmetric random matrices {M} as a realization of a 2d Ising model on a square lattice of linear size L = 28, 29, 210, 211 and 212, at the critical point T = Tc. The ensemble size is 105 for the smallest and 104 for the largest system size. The plots collapse for all system sizes. The distribution has a heavy tail ∼ |λ|−f−1 with tail exponent 11/3 (dashed line) in the large size limit. The solid line shows-
 our theoretical prediction for the asymptotic probability distribution compatible with a t-distribution with f = 8/3 degrees of freedom (Eq. (1)). Inset: Distribution of the eigenvalues for different system sizes compared with the corresponding t-distribution Eq. (1) (solid line). The red dashed line shows the semi-circle law of standard RMT for the PDF of bulk eigenvalues.
or hopping matrix elements. In the case of a neural network, such correlations will be related to its functionality, and can generally be very complex.
Results.—We have produced an ensemble of (104 for the largest size L = 212 to 105 for the smallest size L = 28) thermally equilibrated samples of spin configurations at temperature T , and we study the eigenvalues of the abovementioned random matrix {M}. To be comparable with standard random matrix theory, the matrices are
rescaled by a factor of 1/√L so that the edges of the semicircle distribution of the bulk eigenvalues lie in the
interval [−√2, √2].
Critical ensemble. We plot the probability distribution function (PDF) of the eigenvalues at T = Tc for different sizes from L = 28 to 212 in Figure 1. All data for different sizes collapse. The PDF of eigenvalues possesses the following characteristic and remarkable features: (i) It is bell-shaped and symmetric about zero with zero skewness, like the Gaussian distribution, but (ii) it has heavier tails prone to producing more extreme events. As shown in the main Figure 1 in a double logarithmic s-
cale, the PDF of the absolute eigenvalues has a power-law tail

3
0 1 2 3 4 5 6 7 8 9 10
0 .0
0 .2
0 .4
0 .6
0 .8
λ′′m a x
L=256 L=512 L=1024 L=2048 L=4096 F ré c h e t
TW GOE
PDF
102 103
1
1 0 〈λm a x 〉≈0 . 3 4 4 L 0 . 3 7 5
√( v a r ( λm a x ) ) ≈0 . 1 0 5 L 0 . 3 7 5
L
FIG. 2. Finite-size scaling collapse of the maximum eigenvalue λmax distributions for an ensemble of rescaled symmetric random matrices {M} at T = Tc. For each system size L, we have generated 106 independent samples. The scaling exponent b = 0.375(15) is measured by examining the scaling relation ⟨λmax⟩ ∼ Lb shown in the inset. This exponent is further verified by examining the scaling relation of the standard deviation of λmax with system size (Inset). The solid line in the main panel shows our -
theoretical predictions based on Eqs. (2) and (5) for the universal function describing the collapsed data as a Fr ́echet extreme value distribution with shape parameter k = 1/f = 3/8. The red dashed line shows the prediction by the standard RMT for comparison.
∼ |λ|−f−1 with the tail exponent 11/3 based on our theoretical arguments that will be provided in the following. The deviation at the tails is a finite-size effect, with the data approaching the asymptotic power law as size increases. These are the key properties of the so-called t−distribution which belongs to a family of probability distributions distinguished by the exponent f,
P(λ) = a0 1 + 1
f λ′2 − f+1
2 , (1)
with a0 being the normalizing constant, and the prime denotes the rescaling of the eigenvalues by a factor related to the variance σ2 of λ. Our finite-size analysis for σ2 finds that it converges to ∼ 1/2 as L → ∞ by the scaling relation (1/2 − σ2) ∼ L−θ with θ ≃ 0.25 (see the upper panel in the Supplementary Figure S1). This is in perfect agreement with the exact correlation exponent η = 1/4 for the 2D Ising model. Therefore, there will be no free parameters in our proposed probability density fu-
nction (1). P(λ) in Eq. (1) is even, so the distribution of the absolute eigenvalues P(|λ|) is 2 times P(λ), supported on [0, ∞]. To illustrate the match of our proposed functional form, we also display the density function (1) with f = 8/3. To contrast our finding with standard RMT, we have also plotted the semicircle law.
For the standard semicircle law, one expects the typical fluctuations of the maximum eigenvalues λmax to be given by the T W1 distribution [21] over a region of width
∼ O(L−2/3) around the upper edge √2 of the Wigner sea. This means that for L → ∞, the average maximum eigen
value ⟨λmax⟩ = √2. However, our result (1) shows that the long-range correlations between the matrix elements at the critical point T = Tc drive the spectral density to a new universal fixed point, characterized by an emergent heavy-tailed spectrum that allows for the occurrence of very large extreme eigenvalues. (our analysis shows that the excess kurtosis of the bulk eigenvalues diverges with
system size ∝ √L at Tc—see the lower panel in the Supplementary Figure S1). We find that the average maximum eigenvalue shows a power-law relation with system size as ⟨λmax⟩ = aLb, with a = 0.344(20) and exponent b = 0.375(15) (inset of Fig. 2). We use this scaling relation in the main Figure 2 to show the finite-size collapse of the largest eigenvalue distributions computed for system sizes L = 28 to 212. This suggests the following finite-size scaling form for the distribution of the largest eig-
envalue at Tc
P(λmax) = L−bF λmaxL−b , (2)
where F(·) is a universal scaling function, shown in the following to be the Fr ́echet extreme value distribution. This contrasts with conventional RMT with its semicircle bulk and corresponding GOE edge spectrum (Fig. 2). Analytical arguments. Here, we utilize the developed tools within the context of extreme value theory [22] to determine the only free parameter ’f’ in Eq. (1). Considering that the scaled average extreme eigenvalue acts as an order parameter, an analytical framework can be devel-
oped to describe the spectral properties of the Ising model at Tc. For λ ≫ 1, Eq. (1) predicts a heavy-tailed distribution for the largest eigenvalues P(λ) ∼ |λ|−f−1. These atypical eigenvalues are collected from an ensemble of independent samples; however, despite the eigenvalue correlations within a single realization, the powerlaw tail observed in the eigenvalue spacing distribution (in contrast to the Wigner-Dyson distribution in traditional RMT) suggests that the largest eigenvalues are more -
sparsely spaced. This, along with the scaling behavior of the extreme eigenvalues, provides strong evidence for the applicability of extreme value theory (EVT) in our model, specifically aligning with the Fr ́echet universality class. This result is consistent with prior analytical demonstrations in correlated systems, such as in [23], where a Fr ́echet distribution emerges at the critical point despite global mass conservation constraints. Now let QL(λ) = Prob λmax < λ be the cumulative distribut-
ion function of λmax. If λmax < λ, then all other eigenvalues should necessarily be less than λ, and since they are independent, QL(λ) = 1 − R ∞
λ P(λ)dλ L. The key question in EVT is if QL(λ), when λ is appropriately

4
shifted and scaled with respect to L, tends to a limiting distribution, i.e.,
Lli→m∞ QL(aL + bLz) = f (z) =: exp − g(z) , (3)
where aL and bL are size-dependent scale factors, and f (z) and g(z) are universal functions. The necessary condition for a size-independent limiting distribution is
Lli→m∞ L
Z∞
aL +bL z
P(λ)dλ = Lli→m∞ L(aL + bLz)-f = g(z).
(4) This gives aL = 0, bL = L1/f, and g(z) = z−f. Therefore the distribution function F(z) = df (z)/dz of the scaled maximum eigenvalues z = (L−1/fλmax − l)/s with location l and scale s is the Fr ́echet extreme value distribution
F(z) = f
s
exp − z−f
zf+1 , (5)
which establishes a direct relationship between the distributions of λ and λmax, both governed by the common exponent f. As will be discussed in the following, since the average of the rescaled maximum eigenvalue λ ̃max = L− 1
2 λmax is
identified as the order parameter in the 2d Ising model, the scale factor bL can be inferred from the finite-size
scaling relation ⟨λ ̃max⟩ ∼ L−β/ν with the known exact exponent β/ν = 1/8 as bL ∼ L3/8 which indeed gives 1/f = 3/8. As shown by the solid line in the main Fig. 2, our proposed universal function (5) matches the data with parameters l ≃ 0.1 and s ≃ 0.185 related to the rescaled average and variance of our data, respectively. Critical mean-field ensembles. To investigate the influence of the interaction range, we add q − 4 randomly chosen nonlocal ferromagnetic interaction per spin, yielding an ave-
rage coordination (number of neighbors) of q. Rewiring is not allowed and any two spins cannot be directly connected by more than one link. The long-range nature of the interactions effectively suppresses fluctuations and leads to a mean field limit of the Ising model. The self-consistency equation for the magnetization is m = tanh (q/T )m , which also provides the critical point Tc = q for large q (with interaction coupling and Boltzman constant set equal to 1.) Figure 3 shows the PDF of the eige-
nvalues for an ensemble of rescaled symmetric random matrices corresponding to models with q = 14, 19 and 32 on a square lattice of size L = 212, at the critical point Tc = q. Remarkably, the universality observed at the critical point of the 2D Ising model (q = 4) is no longer present, having been replaced by Wigner’s semicircle universality (main Fig. 3), with GOE T W1-distributed extremes (inset of Fig. 3).
Off-Critical ensembles. The Ising model below the Curie point (T < Tc) exhibits nonzero spontaneous magnetization m(T ), which can be either positive or negative.
-1 .0 -0 .5 0 .0 0 .5 1 .0
0 .0
0 .1
0 .2
0 .3
0 .4
0 . 5 W ig n e r 's s e m ic ir c le
PDF
λ
- √2 √2
-5 0 5
1 0 -4
1 0 -3
1 0 -2
1 0 -1
100
T W GOE
PDF
λm a x
FIG. 3. Main: Distribution of the eigenvalues of an ensemble of 105 rescaled symmetric random matrices as a realization of a 2d Ising model with additional 10 nonlocal links per spin (q = 14) on a square lattice of linear size L = 212, at its critical point Tc = q (symbols) compared with the Wigner’s semicircle law (the red solid line). Inset: Distribution of the maximum eigenvalues (symbols) sitting at the right edge λ ≃
√2 compared with the GOE T W1 distribution (the solid line).
This nonzero magnetization leads to an isolated extreme eigenvalue for each spin realization [24, 25], appearing as two disjoint symmetric Gaussian bumps around the semicircle-like spectrum of the bulk eigenvalues (see upper panel in Supplementary Figure S2). The second largest eigenvalues (in modulus) are located at the right edge of the semicircle, and their limiting distribution is known [26] to follow the GOE T W1 distribution [21] (see lower panel in Supplementary Figure S2). Above the Curie -
point (T > Tc), thermal fluctuations destroy long-range correlations, causing the system to behave as if at the fixed point T = ∞ in the thermodynamic limit, where each spin takes the value +1 or −1 with probability 1/2. With m(T ) = 0, the bumps vanish, and the eigenvalue distribution follows Wigner’s semicircle law [24, 25]. However, at finite T , due to finite-size effects and residual short-range correlations, we observe a deformed semicircle-like distribution for the bulk eigenvalues (see upp-
er panel in Supplementary Figure S2), while the statistics of the extreme eigenvalues continue to follow the GOE Tracy-Widom distribution.
Identification of interaction patterns. Let us now consider the physical significance of the extreme eigenvalues. Based on our observation of the scaling relation ⟨λmax⟩ ∼ Lb with b ≃ 3/8 at T = Tc (Inset of Fig. 2), we
confirm that the rescaled maximum eigenvalue λ ̃max =
L− 1
2 λmax plays the same role as the magnetization order parameter in the 2D Ising model. This rescaling supports the finite-size scaling relation ⟨λ ̃max⟩ ∼ L−β/ν , with

5
0 .1 0 .2 0 .3 0 .4 0 .5 0 .6 0 .7 0 .8 0 .9 1 .0
0 .0
0 .2
0 .4
0 .6
0 .8
1 .0
2 D - Is in g q = 1 4 (n L L = 1 0 ) q = 1 9 (n L L = 1 5 ) q = 3 4 (n L L = 3 0 )
〈λm a x 〉
T /T c
0 5 10 15 20 25 30 35
0 .0
0 .2
0 .4
0 .6
0 .8
1 .0
T
0 .0 1 0 .1 1
0 .1
1
1 -T /T c
1
2
18
FIG. 4. Main: The average rescaled maximum eigenvalue λ ̃max = L−1/2λmax as a function of the reduced temperature T /Tc for the pure 2d Ising model (half-filled circles) and the 2d Ising model with nonlocal interaction links with different q = 14, 19 and 34 (triangle symbols) compared with their corresponding exact solution for order parameter shown by the solid lines. Upper-left inset: Our data agree well with the scaling relation ⟨λ ̃max⟩ ∼ (T − Tc)β with the known exact exponents β = 1/8 and 1/-
2 for the pure 2d Ising model and the mean-field Ising model, respectively. Lower-right inset: ⟨λ ̃max⟩ versus temperature for different values of q = 14, 19 and 34 from left to right, respectively, that vanishes at Tc = q.
the known exact exponent β/ν = 1/8. Furthermore, we present the rescaled average maximum eigenvalue as a function of the reduced temperature T /Tc in the main Figure 4 (half-filled circles). We find excellent agreement between ⟨λ ̃max⟩ and Onsager’s magnetization for the 2D Ising model across all temperatures. Our data also supports the scaling relation ⟨λ ̃max⟩ ∼ (T − Tc)β, with the known critical exponent β = 1/8 for the order parameter in the 2D Ising model (see the upper-left inset of Figure 4-
). Additionally, we confirm the corresponding mean-field behavior in the presence of nonlocal interactions for different coordination numbers q = 14, 19, and 34 (see Fig. 4). The largest eigenvalue in the random matrix realization provides unique insights beyond standard bulk properties. It acts as an order parameter of the underlying physical systems, not only demonstrating a characteristic critical exponent but also revealing the number of nonlocal interaction links per site in the system. This -
connection is made explicit through the relationship
q= T
⟨λ ̃max⟩ tanh−1⟨λ ̃max⟩. (6)
The eigenvalue statistics in our matrix realization capture the critical fluctuations of the physical system, positioning random matrix analysis as a powerful tool for
uncovering otherwise inaccessible properties of interacting systems. While the general properties of the magnetization distribution in the 2D Ising model at the critical point are well understood, its exact scaling function remains unknown in closed form. Our findings on the distribution of maximum eigenvalues may offer a pathway to derive the exact magnetization scaling function at T = Tc, potentially addressing a long-standing open problem in statistical physics.
Concluding remarks.— In this letter, we introduce a random matrix ensemble derived directly from a physical system, where the matrix elements correspond to the spins of a 2D Ising model at thermal equilibrium. By incorporating correlations from local interactions within the system, we study the spectral properties at the onset of criticality. We observe an emergent spectrum consistent with a t−distribution, featuring a power-law scaling tail characterized by an exponent f = 8/3, which reflects the-
 universal properties of the critical Ising model. The largest eigenvalue λmax follows the Fre ́chet extreme value distribution with a shape parameter 1/f = 3/8, further supporting this universality. We find that the spectrum of the mean-field limit of the interacting model aligns with standard random matrix theory. Additionally, the average extreme eigenvalue acts as an order parameter, capturing both universal and non-universal aspects of the interaction structure in the underlying physical syst-
em.
Acknowledgments.— A.A.S. acknowledges partial support from the research council of the University of Tehran. We also thank the High-Performance Computing (HPC) Center at the University of Cologne, Germany, where a part of the computations was carried out. This work was in part supported by the Deutsche Forschungsgemeinschaft under grants SFB 1143 (projectid 247310070) and the cluster of Excellence ct.qmat (EXC 2147, project-id 390858490).
∗ ab.saberi@ut.ac.ir & saberi@pks.mpg.de [1] G. Akemann, J. Baik, and P. Di Francesco, The Oxford handbook of random matrix theory (Oxford University Press, 2011).
[2] E. P. Wigner, in Mathematical Proceedings of the Cambridge Philosophical Society, Vol. 47 (Cambridge University Press, 1951) pp. 790–798. [3] L. Laloux, P. Cizeau, M. Potters, and J.-P. Bouchaud, International Journal of Theoretical and Applied Finance 3, 391 (2000). [4] G. Wainrib and J. Touboul, Physical review letters 110, 118101 (2013). [5] R. Couillet and M. Debbah, Random matrix methods for wireless communications (Cambridge University Press, 2011). [6] V. Plerou, P. Gopikrishnan, B. Ros-
enow, L. A. N. Amaral, and H. E. Stanley, Physical review letters 83, 1471 (1999).

6
[7] L. Laloux, P. Cizeau, J.-P. Bouchaud, and M. Potters, Physical review letters 83, 1467 (1999). [8] P. Sˇeba, Physical review letters 91, 198104 (2003). [9] M. Santhanam and P. K. Patra, Physical Review E 64, 016102 (2001). [10] J. W. Baron, T. J. Jewell, C. Ryder, and T. Galla, Physical Review Letters 130, 137401 (2023). [11] S. Jalan and J. N. Bandyopadhyay, Physical Review E 76, 046107 (2007).
[12] N. R. Council et al., Frontiers in massive data analysis (National Academies Press, 2013). [13] C. Janiesch, P. Zschech, and K. Heinrich, Electronic Markets 31, 685 (2021). [14] M. Mahmud, M. S. Kaiser, T. M. McGinnity, and A. Hussain, Cognitive computation 13, 1 (2021). [15] M. M ́ezard, G. Parisi, and A. Zee, Nuclear Physics B 559, 689 (1999). [16] L. Erdo ̋s, T. Kr ̈uger, and D. Schro ̈der, in Forum of Mathematics, Sigma, Vol. 7 (Cambridge University Press, 2019) p. e8. [17] O. H. Ajanki, -
L. Erdo ̋s, and T. Kr ̈uger, Probability Theory and Related Fields 173, 293 (2019).
[18] F. Toscano, R. O. Vallejos, and C. Tsallis, Physical Review E 69, 066131 (2004). [19] W. Hochsta ̈ttler, W. Kirsch, and S. Warzel, Journal of Theoretical Probability 29, 1047 (2016).
[20] M. Henkel, Conformal invariance and critical phenomena (Springer Science & Business Media, 1999). [21] C. A. Tracy and H. Widom, Communications in Mathematical Physics 159, 151 (1994). [22] S. N. Majumdar, A. Pal, and G. Schehr, Physics Reports 840, 1 (2020). [23] M. R. Evans and S. N. Majumdar, Journal of Statistical Mechanics: Theory and Experiment 2008, P05004 (2008). [24] S. Saber and A. A. Saberi, Physical Review E 105, L022102 (2022). [25] A. Malekan, S. Saber, and A. A. Saberi, Chaos: -
An Interdisciplinary Journal of Nonlinear Science 32, 023112 (2022). [26] M. Shcherbina, Journal of Statistical Physics 136, 35 (2009).

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:38.214Z
- **Text Length:** 27621 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 6 of 6
