# PDF Document: Xia et al. - 2025 - Coexistence of distinct mobility edges in a 1D quasiperiodic mosaic model.pdf

**File Path:** Xia et al. - 2025 - Coexistence of distinct mobility edges in a 1D quasiperiodic mosaic model.pdf

**Processed Date:** 2026-02-10T18:15:45.700Z

**File Size:** 917.73 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 310

**Title:** Coexistence of distinct mobility edges in a 1D quasiperiodic mosaic model

**Collection:** TEST

---

## Extracted Text Content

Coexistence of distinct mobility edges in a 1D quasiperiodic mosaic model
Xu Xia,1 Weihao Huang,2 Ke Huang,2 Xiaolong Deng,3 and Xiao Li2, ∗
1Academy of Mathematics and Systems Science, Chinese Academy of Sciences, Beijing 100190, China
2Department of Physics, City University of Hong Kong, Kowloon, Hong Kong SAR
3Leibniz Supercomputing Centre, Boltzmannstraße 1, 85748 Garching bei Mu ̈nchen, Germany (Dated: March 7, 2025)
We introduce a one-dimensional quasiperiodic mosaic model with analytically solvable mobility edges that exhibit different phase transitions depending on the system parameters. Specifically, by combining mosaic quasiperiodic next-nearest-neighbor hoppings and quasiperiodic on-site potentials, we rigorously demonstrate the existence of two distinct types of mobility edges: those separating extended and critical states, and those separating extended and localized states. Using Avila’s global theory,-
 we derive exact analytical expressions for these mobility edges and determine the parameter regimes where each type dominates. Our numerical calculations confirm these analytical results through fractal dimension analysis. Furthermore, we propose an experimentally feasible scheme to realize this model using Bose-Einstein condensates in optical lattices with engineered momentum-state transitions. We also investigate the effects of many-body interactions under meanfield approximation. Our work prov-
ides a fertile ground for studying the coexistence of different types of mobility edges in quasiperiodic systems and suggests a feasible experimental platform to observe and control these transitions.
Introduction.— Anderson localization, the exponential localization of quantum states due to disorder [1], is one of the most extensively studied phenomena in quantum physics. The phase transition between localized and extended phases in disordered systems is highly dependent on the system’s dimensionality. In systems with three or more dimensions, a finite disorder strength is required to induce the localization transition [2]. Moreover, for intermediate disorder strengths, this transition may be -
energy-dependent, with critical energies known as singleparticle mobility edges (MEs) that distinctly separate localized from extended states [3]. In contrast, in onedimensional (1D) and two-dimensional (2D) systems with random disorder, all states are localized even at infinitesimally small disorder strengths, preventing a localization transition and the formation of MEs. Besides the random disorder, quasiperiodic potential can also induce localization transitions in 1D systems. Such models have -
attracted significant attention not only due to their experimental realization in ultracold atomic gases [4–11] but also because they exhibit interesting phenomena such as the presence of extended-localized transitions and MEs even in 1D systems [11–21]. The Aubry-Andr ́e-Harper (AAH) model [22] is a prototypical example of a 1D quasiperiodic system that exhibits a localization transition. The AAH model has a self-duality property that leads to all states being either extended or localized, with n-
o SPMEs. However, by breaking the selfduality of the AAH model, such as by introducing longrange hopping terms [15] or additional quasiperiodic optical lattices [11, 17–21], one can induce MEs and study the localization transition in 1D quasiperiodic systems. Despite significant theoretical progress, experimentally distinguishing critical states from extended states remains challenging, as both appear delocalized in conventional measurements. A fundamental question emerges: be
yond the well-studied MEs separating extended and localized states, can other types of MEs exist, such as those separating critical from extended states? Furthermore, can a single model host multiple types of MEs simultaneously? These questions become even more intriguing when considering many-body interactions, which could fundamentally alter the nature and behavior of these different types of MEs. Motivated by these questions, we introduce in this Letter an analytically solvable 1D quasiperiodic-
 mosaic model with mosaic quasiperiodic next-nearest-neighbor (NNN) hoppings and mosaic quasiperiodic onsite potential. Through Avila’s global theory [23], we analytically prove that the MEs of this model change from the ones that separate extended and critical states to the ones that separate extended and localized states as the potential strength increases. We numerically confirm these results by calculating the fractal dimension of the eigenstates. Moreover, we propose a concrete experimental s-
cheme based on the Bose-Einstein condensate (BEC) [4] to realize this model. Finally, because interactions naturally exist in BEC experiments [24, 25], a pertinent and interesting question is how our single-particle theory is modified by many-body interactions in the BEC experiments. We specifically study the effects of many-body interactions on the critical-localized transition in the ground state under the mean-field approximation. Using finite-size scaling analysis [26], we demonstrate that man-
y-body interactions significantly modify the nature of single-particle states: repulsive interactions (U < 0) transform critical states into extended states and drive localized states toward criticality, while attractive interactions (U > 0) convert critical states into localized states with localized states remaining localized. Additionally, we identify two types of localized states with unbroken and spontaneously broken inversion symmetry, which arise due to
arXiv:2503.04552v1 [cond-mat.dis-nn] 6 Mar 2025

 2
1 1250 2584
0
1
2 10-3
1 1250 2584
0
1
1 1250 2584
0
0.01
0.02
(a)
(c) (d)
012
0
0.5
1 momentum space real space
Figure 1. (a) Fractal dimension Γ of different eigenstates as a function of the energy eigenvalues and quasiperiodic potential strength λ with size L = 2584 and μ = 0.35. The black and red dashed lines represent the AMEs and MEs, respectively. Here, the hopping strength t1 has been set as the unit of energy. We also show the density distributions of the following eigenstates: (b) λ = 0.6, E/t1 = −0.066, (c) λ = 0.6, E/t1 = 2.1906 and (d) λ = 1, E/t1 = 2.7541.
the competition between the quasiperiodic on-site potential and the NNN hopping. Our study provides a fertile ground for exploring the coexistence of different types of MEs in quasiperiodic systems and also paves the way for the experimental realization of these transitions in ultracold atomic gases. The model.— We start by describing our 1D quasiperiodic mosaic model, which is a generalization of the AAH model with quasiperiodic NNN hoppings and quasiperiodic on-site potentials, given by
H =∑
j
[t1c†
j cj+1 + t2(j)c†
jcj+2 + h.c.] + ∑
j
Vjnj, (1)
where cj(c†
j) is the annihilation (creation) operator at
site j, nj = c†
jcj is the local density operator, and t1 is
the nearest neighbor (NN) hopping coefficient. Moreover, t2(j) and Vj denote the quasiperiodic NNN hopping and potential amplitude, respectively, where t2(j) = Vj = 0 for odd j and
t2(j) = 2μ cos[2πα(j + 1) + θ],
Vj = 2λ cos(2παj + θ), (2)
for even j. Here θ is the phase offset, and α is an irrational number. A central result of this Letter is that we can rigorously prove the existence of different types of MEs in this model and derive their closed-form expressions by computing the exact Lyapunov exponent (LE). For convenience, we use ME to denote the mobility edge that separates extended and localized states and anomalous
mobility edge (AME) for the ME that separates critical and extended states. With this convention, we make the following statement: When λ > 2μ, there are only MEs given by EME; when 0 < λ < 2μ, there are only AMEs given by EAME, where
EME = ±t21/λ, EAME = ±t21/(2μ). (3)
Before presenting the proof of the above result, we numerically compute the ME and AME in the model by calculating the fractal dimension of the wave functions and the spatial distribution of the eigenstates. For this sim
ulation, we set t1 = 1, θ = 0 and α = (√5 − 1)/2. This α can be approached by the ratio of two consecutive Fibonacci numbers Fm [27, 28]: α = limm→∞ (Fm−1/Fm). Hence, we take the system size as L = Fm (for a large m), adopt the rational approximation α = Fm−1/Fm, and impose the periodic boundary condition. The fractal dimension of the jth eigenstate is defined as Γj =
− limL→∞
[ ln
(
I (2)
j
)
/ ln L
]
, where
I (q)
j=
L ∑
i=1
|ψj(i)|2q (q = 2, 3, 4, . . .) (4)
is the inverse participation ratio (IPR) of the jth eigenstate with ψj(i) denoting the wave function of the jth eigenstate at site i. It is known that Γ → 1 for extended states, 0 < Γ < 1 for critical states, and Γ → 0 for localized states. We plot the eigenvalue E and the fractal dimension Γ of each eigenstate as a function of potential strength λ in Fig. 1(a). As expected from our analytical results, Fig. 1(a) shows that the transitions between different types of eigenstates occur precisely at t-
he analytically derived ME and AME lines in Eq. (3). This classification is further confirmed by examining the spatial density distributions of representative eigenstates in Fig. 1. For λ > 2μ, we observe two distinct behaviors separated by the MEs at |E| = t21/λ (red dashed lines): states with
|E| > t21/λ are exponentially localized on a single site
[Fig. 1(d)], while states with |E| < t21/λ spread over the entire system [Fig. 1(b)]. For 0 < λ < 2μ, the AMEs at |E| = t21/2μ (black dashed lines) separate extended
states (|E| < t21/2μ) from critical states (|E| > t21/2μ), with an example of the latter shown in Fig. 1(c). The physical origin of these distinct mobility edges can be understood from the model’s structure: the incommensurate NNN hopping between even sites induces critical states [29], while the vanishing onsite energies at odd sites combined with the NN hopping maintain extended states in the middle of the spectrum even for large potential strengths [30]. The competition between these mechanisms-
 results in the different types of MEs.
Mathematical derivation of the ME.— Here, we provide the analytical derivation for the MEs by computing the LE. The eigenstates of Eq. (1) can be equivalently

 3
expressed in terms of the transfer matrix:
Tm(θ) (ψj , ψj−2)⊺ = (ψj+2, ψj )⊺ . (5)
Since wave functions on odd sites are fully determined by those on even sites, we focus only on the latter. Denote the transfer matrix at site j = 2m by Tm(θ), and the product of transfer matrices as Tm = TmTm−1 · · · T0. From Eq. (1), we obtain the transfer matrix on even sites
as Tm(θ) = [t2(j − 2) + t21/E]−1Bm(θ), where
Bm(θ) =
[ E − 2t21/E − Vj −t2(j) − t21/E
t2(j − 2) + t21/E 0
] .
The LE can be computed as
γε(E) = lim
m→∞
1 m
ˆ
ln ∥Tm(θ + iε)∥ dθ . (6)
By applying Avila’s global theory of one-frequency analytical SL(2, R) cocycle [23], we obtain the LE of an eigenstate as γ0(E) = max{α(E), 0}, where
α(E) = ln
|E|
(
λ + √λ2 − 4μ2
)
t21 + √t41 − 4E2μ2 . (7)
When λ > 2μ, the separation line is α(E) = 0. Hence, the MEs are |E| = t21/λ. Therefore, when |E| > t21/λ, we have γ0(E) > 0 indicating localized states. In con
trast, |E| < t21/λ, we have γ0(E) = 0 indicating extended
states. When 0 < λ < 2μ and |E| > t21/2μ, however, the transfer matrix exhibits singular properties because the element t2(j − 2) + t21/E can vanish at certain sites. This singularity prevents the existence of an absolutely continuous spectrum, resulting in only singular continuous spectrum, which characterizes critical states. Thus, when 0 < λ < 2μ, the AMEs are given by E = ±t21/2μ. Further details of the mathematical derivation are shown in the Supplemental Materials (SM) [31].
Experimental realization.— Having established the existence of different types of MEs in our model, we now propose an experimental scheme to realize this model using ultracold atoms in optical lattices. The schematic setup is illustrated in Fig. 2(a) for a system with 21 sites. The main difficulty in the experimental realization of this model lies in the engineering of the quasiperiodic NNN hopping. In this regard, the momentum-space lattice built from ultracold atoms [24] provides a feasible solu-
tion, as shown in Fig. 2(b). The BEC cloud is subject to two counterpropagating laser beams: one with a single frequency of ω+ = 2πc/λ where c is the speed of light and λ = 1064 nm, and the other with multiple frequencies. Initially, the atoms are prepared into the momentum ħk = 0 state. Turning on these lasers would drive a series of Bragg transitions that only allows quantized atomic momentum changes in units of 2ħk. The NN hoppings between the sites (related to the
012
0
0.5
1 momentum space real space
...
"!,!#$
"#
...
"!,!#%
BEC
(a)
(d)
: "! ($) ...... -2 0 2
: ""
-1 1
-10 -8
-9
:0 : V(j)
(b)
(c)
&/ħ
j j+1 +/2ħ
4&!
"! "","!$
"","!%
j+2 0 1 2
0
0.5
1
(d)
Figure 2. (a) A schematic setup of the experimental realization of the 1D quasiperiodic mosaic model in Eq. (1) using ultracold Cesium atoms. Here we assume that the system contains 21 different momentum states (as lattice sites). (b) Two counterpropagating laser beams are applied to the BEC: one with a single frequency and one with multiple frequencies, which together drive controlled momentum transitions between atomic states. (c) The first-order (solid arrows) and second-order (dashed arrows) B-
ragg transitions drive the NN hoppings and NNN hoppings, respectively, between the mo
mentum states. Here ER = ħ2k2/2MCs is the recoil energy
of the Cesium atoms. (d) Numerical simulations of the IPR for the ground state as a function of quasiperiodic potential strength λ in both momentum space (IP ) and real space (IR), validating our experimental detection protocol. For comparison, the IPR of a reference extended state is also shown. To minimize finite-size effects, we use q = 6 in the calculation of both IP and IR according to Eq. (4). The real-space wavefunctions are obtained through Fourier transformation of the momentum-space wave-
functions. The simulation parameters are L = 21 sites, μ = 0.35t1, and phase offset θ = π.
atomic momentum pj = 2jħk) are realized by the firstorder, two-photon Bragg transition, i.e., absorbing one photon from the beam with frequency ω+ and emitting one photon into the multifrequency beam. Similarly, the NNN hoppings are realized by the second-order, fourphoton Bragg transition [32], where two photons are absorbed from the single-frequency beam, and two photons are emitted into the multifrequency beam, as shown in Fig. 2(c). Due to the quadratic dispersion, the energy difference betwee-
n any pair of momentum states is unique. Thus, one can individually manipulate the strength and phase of the corresponding frequency beam to control the NN and NNN hoppings. Finally, the quasiperiodic potential can be engineered by setting the difference between the frequencies of the single-frequency beam and the multi-frequency beams as 2λ cos (2ωπj + θ). Further details of the experimental setup is shown in the SM [31]. A hallmark feature of our model [Eq. (1)] is that its ground state undergoe-
s a critical-to-localized transition precisely at λ = 2μ, providing an ideal platform for ex

 4
Momentum-space IPR (IP ) Real-space IPR (IR) Extended IP ∼ 0 Finite Critical IP ∼ 0 IR ∼ 0 Localized Finite IR ∼ 0
Table I. Comparison of inverse participation ratio (IPR) characteristics in momentum space and real space for extended, critical, and localized states.
perimental detection of critical states. We propose an experimental protocol to observe this transition, beginning with the initialization of the BEC cloud at site j = 0 with phase θ = π in the quasiperiodic potential. This configuration serves as the ground state of the system without hopping terms. To prepare the complete ground state, we adiabatically introduce the hopping terms by linearly ramping the NN hopping strength from zero to t1 and the NNN hopping strength from zero to t2(j) = 2μt1 co-
s [2πω(j + 1) + π] on even sites, followed by a holding period. Time-of-flight measurements can then determine the atomic momentum distribution, allowing calculation of the momentum-space IPR (IP ), which effectively distinguishes localized states (IP ∼ finite) from critical states (IP ∼ 0). To further differentiate between critical and extended states, we propose measuring the real-space distribution to calculate the real-space IPR (IR), since critical states in the momentum space remain critical-
 in real space while extended states in momentum space become localized in real space, resulting in distinct IR values as summarized in Table I. Figure 2(d) presents numerical simulations in an L = 21 system validating this experimental approach. Effects of many-body interactions.— In realistic BEC experiments, interactions between atoms can be easily turned on by introducing s-wave collisions between atoms [24, 25]. To study how these interactions affect the critical-localized transition in our q-
uasiperiodic mosaic model, we employ the mean-field Gross-Pitaevskii equation (GPE), where interactions are treated as an effective density-dependent potential. Specifically, the GPE reads
as iħψ ̇ = HMFψ, where
HMF = H − U ∑
j
|ψj|2nj. (8)
In the above equation, |ψj|2 is the density probability of the wavefunction on each site, and U is the effective interaction strength. We choose θ = π and the same setup as the previous experimental proposal. The open boundary condition is considered. We use the imaginary time evolution to numerically determine the mean-field ground state of the system |ψGS⟩, which is determined by minimizing the energy
⟨ψGS|H − U
2
∑
j |ψj|2nj|ψGS⟩. Figure 3(a) shows the
ground-state phase diagram of the system by plotting the fractal dimensions Γ of |ψGS⟩ for various poten
0 0.05 0.1
0
0.5
1
-1 0 1
0
0.5
1
1.5
2
0
0.5
1 (b)
(a)
Figure 3. (a) The phase diagram of the ground state (in terms of the fractal dimension Γ) for different potential strength λ and interaction U . The system size is L = 377, and the NNN hopping strength is μ = 0.35. Here we set t1 as the unit of energy. (b) The finite-size scaling of different regimes in the phase diagram. m is the index of the Fibonacci number. In regime I, we choose the point with parameters U = −0.3, λ = 2 to perform the fitting. In regime II, we choose U = −0.3, λ = 0.1. In reg-
ime III, we choose U = 0.3, λ = 2. In regime IV, we choose two points with U = 0.15, λ = 0.1 and U = 0.3, λ = 0.421. The solid lines show the fitting results.
tial strength λ and interactions U for a system with L = F14 = 377. Then we perform finite-size scaling to extrapolate the fractal dimensions in the thermodynamics limit [26] by fitting the result to Γm = Γ∞ + b/m, where b and F∞ are the fitting parameters and m is the Fibonacci index. For Γ∞ → 0 (Γ∞ → 1), the corresponding state is expected to be localized (extended), while for 0 < Γ∞ < 1, the state is critical. As shown in Fig. 3(b), repulsive interactions (U < 0) transform critical states into -
extended states (II) and drive localized states toward criticality (I), while attractive interactions (U > 0) convert critical states into localized states (IV) with localized states remaining localized (III). Interestingly, while both regimes III and IV are localized, they exhibit different behaviors. In particular, finite-size scaling indicates that the two regimes with different colors in regime IV are localized states with different fitting coefficients b. Besides, it turns out that regime III-
 retains inversion symmetry of the system while regime IV breaks such a symmetry. This distinction can be fully understood by a perturbation theory analysis, which we relegate to the SM [31]. Conclusion.— In this work, we introduce a 1D quasiperiodic mosaic model with analytically solvable mobility edges that exhibit different phase transitions. By analyzing the Lyapunov exponent of the eigenstates, we rigorously demonstrate the existence of and derived exact analytical expressions for two distinc-
t types of mobility edges: those separating extended and critical states, and those separating extended and localized states. Our numerical calculations of fractal dimensions confirm these analytical predictions. Furthermore, we propose a concrete experimental scheme based on BoseEinstein condensates in optical lattices with engineered momentum-state transitions to realize our model. The ef

 5
fects of many-body interactions, studied under the meanfield approximation, reveal rich physics: repulsive interactions transform critical states into extended states and drive localized states toward criticality, while attractive interactions convert critical states into localized states with the emergence of two localized regimes distinguished by their symmetry properties. Our findings provide a foundation for exploring the coexistence of different types of mobility edges in quasiperiodic system-
s and open new avenues for investigating the interplay between quasiperiodicity, localization, and many-body interactions in future theoretical and experimental studies. Acknowledgments.— X.X. is supported by the National Science Foundation of China (Grant No. 12301218). X.D. is is supported by the Munich Quantum Valley. The work at Hong Kong is supported by the Research Grants Council of Hong Kong (Grants No. CityU 11300421, CityU 11304823, and C7012-21G) and City University of Hong Kong (Project-
 No. 9610428). K.H. is also supported by the Hong Kong PhD Fellowship Scheme.
∗ xiao.li@cityu.edu.hk [1] P. W. Anderson, Phys. Rev. 109, 1492 (1958). [2] E. Abrahams, P. W. Anderson, D. C. Licciardello, and T. V. Ramakrishnan, Phys. Rev. Lett. 42, 673 (1979). [3] F. Evers and A. D. Mirlin, Rev. Mod. Phys. 80, 1355 (2008). [4] G. Roati, C. D’Errico, L. Fallani, M. Fattori, C. Fort, M. Zaccanti, G. Modugno, M. Modugno, and M. Inguscio, Nature 453, 895 (2008). [5] L. Fallani, J. E. Lye, V. Guarrera, C. Fort, and M. Inguscio, Phys. Rev. Lett. 98, 130404 (2007). [6] M. Schreiber-
, S. S. Hodgman, P. Bordia, H. P. Lu ̈schen, M. H. Fischer, R. Vosk, E. Altman, U. Schneider, and I. Bloch, Science 349, 842 (2015). [7] P. Bordia, H. P. L ̈uschen, S. S. Hodgman, M. Schreiber, I. Bloch, and U. Schneider, Phys. Rev. Lett. 116, 140401 (2016). [8] P. Bordia, H. Lu ̈schen, S. Scherg, S. Gopalakrishnan, M. Knap, U. Schneider, and I. Bloch, Phys. Rev. X 7, 041047 (2017). [9] C. D’Errico, E. Lucioni, L. Tanzi, L. Gori, G. Roux, I. P. McCulloch, T. Giamarchi, M. Inguscio, and G. Modugno,-
 Phys. Rev. Lett. 113, 095301 (2014). [10] H. P. L ̈uschen, P. Bordia, S. Scherg, F. Alet, E. Altman,
U. Schneider, and I. Bloch, Phys. Rev. Lett. 119, 260401 (2017). [11] H. P. Lu ̈schen, S. Scherg, T. Kohlert, M. Schreiber, P. Bordia, X. Li, S. Das Sarma, and I. Bloch, Phys. Rev. Lett. 120, 160404 (2018). [12] S. Das Sarma, S. He, and X. C. Xie, Phys. Rev. Lett. 61, 2144 (1988). [13] Y. Hashimoto, K. Niizeki, and Y. Okabe, J. Phys. A 25, 5211 (1992). [14] J. Biddle, B. Wang, D. J. Priour, and S. Das Sarma, Phys. Rev. A 80, 021603 (2009). [15] J. Biddle and S. Das Sarma, Phys. Rev. Lett. 104, 070-
601 (2010). [16] X. Wei, C. Cheng, G. Xianlong, and R. Mondaini, Phys. Rev. B 99, 165137 (2019). [17] X. Li, X.-P. Li, and S. Das Sarma, Phys. Rev. B 96, 085119 (2017). [18] H. Yao, A. Khoudli, L. Bresque, and L. Sanchez-Palencia, Phys. Rev. Lett. 123, 070405 (2019). [19] S. Ganeshan, J. H. Pixley, and S. Das Sarma, Phys. Rev. Lett. 114, 146601 (2015). [20] Z. Xu, H. Huangfu, Y. Zhang, and S. Chen, New J. Phys. 22, 013036 (2020). [21] X. Li and S. Das Sarma, Phys. Rev. B 101, 064203 (2020). [22] S-
. Aubry and G. Andre ́, Ann. Israel Phys. Soc. 3, 133 (1980) 3, 133 (1980). [23] A. Avila, Acta Math. 215, 1 (2015). [24] Y. Wang, J.-H. Zhang, Y. Li, J. Wu, W. Liu, F. Mei, Y. Hu, L. Xiao, J. Ma, C. Chin, and S. Jia, Phys. Rev. Lett. 129, 103401 (2022). [25] F. A. An, K. Padavi ́c, E. J. Meier, S. Hegde, S. Ganeshan, J. H. Pixley, S. Vishveshwara, and B. Gadway, Phys. Rev. Lett. 126, 040603 (2021). [26] Y. Wang, L. Zhang, W. Sun, T.-F. J. Poon, and X.-J. Liu, Phys. Rev. B 106, L140203 (2022). [27-
] M. Kohmoto, Phys. Rev. Lett. 51, 1198 (1983). [28] Y. Wang, Y. Wang, and S. Chen, Eur. Phys. J. B 89, 254 (2016). [29] X.-C. Zhou, Y. Wang, T.-F. J. Poon, Q. Zhou, and X.-J. Liu, Phys. Rev. Lett. 131, 176401 (2023). [30] Y. Wang, X. Xia, L. Zhang, H. Yao, S. Chen, J. You, Q. Zhou, and X.-J. Liu, Phys. Rev. Lett. 125, 196604 (2020). [31] See Supplemental Material for details on (i) some mathematical basis of computing the Lyapunov’s exponent; (ii) experimental realization; (iii) numerical simulat-
ion; and (iv) perturbation theory. The Supplemental Materials includes the references [13, 23, 28]. [32] F. A. An, E. J. Meier, and B. Gadway, Phys. Rev. X 8, 031045 (2018).

 Supplemental Materials for “One-dimensional quasiperiodic lattice with exactly different types of mobility edges”
Xu Xia,1 Weihao Huang,2 Ke Huang,2 and Xiao Li2, ∗
1Academy of Mathematics and Systems Science, Chinese Academy of Sciences, Beijing 100190, China
2Department of Physics, City University of Hong Kong, Kowloon, Hong Kong SAR (Dated: March 7, 2025)
In this Supplemental Material, we first present some mathematical basis for computing the Lyapunov exponent in the main text. Then, we provide additional details of experimental realization and numerical simulation. Finally, we give details about the perturbative analysis of the symmetry-broken localized state shown in Fig. 3 of the main text.
I. The computation of Lyapunov’s exponent
As discussed in the main text, we will only focus on the even sites of the lattice, with j = 2m. The Lyapunov exponent (LE) γε(E) can be calculated by taking the product of the transfer matrix Tm(θ), namely multiplying the transfer matrix m times consecutively, which is written as
Tm(θ) =
m−1
∏
k=0
Tk(θ) =
m−1
∏
k=0
1
t2(2k − 2) + t21/E
[ E − 2t21/E − V2k − (t2(2k) + t21/E)
(t2(2k − 2) + t21/E) 0
]
, (1)
where V2k is the quasiperiodic potential on site 2k. The LE is then found as the limit of ln ||Tm(θ)||/m as m → ∞. The method that we use here to calculate the LE is the complexified phase approach. Specifically, by continuing the imaginary part of the phase ε, we introduce a new LE,
γε(E) = lim
m→∞
1
m ln ||Tm(θ + iε)||dθ, Tm(θ + iε) =
m−1
∏
k=0
Tk(θ + iε). (2)
Relying on Avila’s global theory, if we can obtain the LE γε(E) when ε is sufficiently large, then we can trace back to the specific LE γ0(E) when ε = 0, namely the original LE. To proceed, we first rewrite the transfer matrix as
T0(θ) = 1
(2μ cos(2π(θ − ω/2)) + t21/E)
[ E − 2t21/E − 2λ cos(2πθ) − (2μ cos(2π(θ + ω/2)) + t21/E)
(2μ cos(2π(θ − ω/2)) + t21/E) 0
]
=1
(2μ cos(2π(θ − ω/2)) + t21/E) B0(θ),
(3)
where we have introduced the matrix B0(θ) as follows:
B0(θ) =
[ E − 2t21/E − 2λ cos(2πθ) − (2μ cos(2π(θ + ω/2)) + t21/E)
(2μ cos(2π(θ − ω/2)) + t21/E) 0
]
. (4)
Then, γε(E) can be expressed as
γε(E) = lim
m→∞
1 m
ˆ
ln ||Bm(θ + iε)||dθ −
ˆ
ln ∣∣(2μ cos(2π(θ + iε)) + t21/E)∣∣ dθ ≡ γεB(E) + Aε, (5)
where
γεB(E) = lim
m→∞
1 m
ˆ
ln ||Bm(θ + iε)| |dθ, Bm(θ + iε) =
m−1
∏
k=0
Bk(θ + iε). (6)
∗ xiao.li@cityu.edu.hk
arXiv:2503.04552v1 [cond-mat.dis-nn] 6 Mar 2025

 2
From the above result, we can obtain
A0 = ln
[ √t41 − 4E2μ2 + t21 2|E|
]
. (7)
When ε → +∞, a direct calculating result of B0(θ + iε) gives
B0(θ + iε) = e2πεei2π(θ)
[−λ −μ μ0
]
+ O(1), (8)
with ∥Bm(θ + iε)∥ = ∥B0(θ + iε)∥. Therefore, we find that
γεB(E) = 2πε + ln
[1
2
(
λ + √λ2 − 4μ2
)]
+ O(1). (9)
As a function of ε, γεB(E) is a convex, piecewise linear function whose slope is 2π. Hence it is concluded that when ε
goes to infinity, we obtain
γBε(E) = 2πε + ln
[1
2
(
λ + √λ2 − 4μ2
)] .
Finally, according to Eq. (5), it leads to γ0(E) = max{α(E), 0}, where
α(E) = ln
|E|
(
λ + √λ2 − 4μ2
)
√t41 − 4E2μ2 + t21
. (10)
II. Experimental Realization
In this section, we will elaborate on how to realize the lattice model using the BEC platform. The maximum achievable system size L is 21 sites under current experimental conditions. The Bose-Einstein condensate (BEC) with 4 × 104 133Cs atoms held in an optical trap, primarily formed by a single-frequency laser beam (wavelength λ = 1064 nm, wavenumber k = 2π/λ), is prepared shown in Fig. S1(a). To construct a pair of counter-propagating laser beams, the primary beam is passed through two acousto-o-
ptic modulators (AOMs), where one AOM is driven with one single-frequency (ω+) radiofrequency (rf) tone and the other AOM is driven with the 20+10-frequency rf tones. The multifrequency beam is sent back to the same path as the primary single-frequency beam. The interference of the single-frequency and multifrequency beams can drive a series of Bragg transitions between two distanced momentum states, miming the hoppings between the lattice model as shown in Fig. S1(b).
The recoil energy ER = ħ2k2/2MCs = h × 5.3 kHz, where MCs is the mass of the atom Cs. The energy of the 21
momentum states with momentum pj = 2jħk is 4ERj2 with j = 0, 1, 2, · · · , 20.
The 20 NN hoppings between pj and pj+1 can be realized by the two-photon Bragg transition. Specifically, the difference between the primary frequency and the corresponding frequency should satisfy
∆ωj,j+1 = ω+ − ωj,j+1 = 4ER(2j + 1)/ħ − (εj+1 − εj )/ħ.
Here εj = Vj is set up to realize the mosaic onsite quasiperiodic potential. Note that the detuning ∆ of the laser from the atomic resonance is quite large. By tuning the strength (Ωj,j+1) and the phase (θj,j+1) of each multifrequency component, one can tune the strength of NN hopping strength, which is estimated to be
tj,j+1
1 = Ω+Ωj,j+1
∆ ei(θ+−θj,j+1). (11)
The 10 NNN hoppings are realized via a four-photon Bragg transition, where the difference between the primary frequency and the corresponding frequency should satisfy
∆ωj,j+2 = ω+ − ωj,j+2 = 4ER(2j + 2)/ħ − (εj+2 − εj ),
with even j. Similarly, by tuning the strength (Ωj,j+2) and the phase (θj,j+2) of each multifrequency component, one can tune the strength of NNN hopping strength, which is estimated to be
tj,j+1
2 = Ω2+Ωj2,j+2
∆2(4ER) ei(2θ+−2θj,j+2). (12)
The frequency spectrum simulating hoppings between lattice sites is shown in Fig. S1(c).

 3
...
ωj,j#1
ω#
...
ωj,j#2
BEC
Δω/E!
-8 -4 0 4 8 12
......
01 p/2ħk
2
-1
-2
E/ħ
(a)
(b) (c)
FIG. S1. (a) Illustration of the BEC platform to simulate the lattice model. (b) NN and NNN hoppings are realized by the twophoton (solid arrow) and four-photon (dashed arrow) Bragg transitions respectively. (c) The spectrum of the multi-frequency beam with frequency detuning ∆ω is fed into the system to create 20 NN hoppings and 10 NNN hoppings.
III. Numerical Simulation
In this section, we discuss the numerical simulation of the interacting ground state. We perform imaginary time evolution to find the ground state of the interacting system. For one Hamiltonian, we choose different initial states
to avoid local minima. For each realization of the initial state, the energy uncertainty √⟨H2⟩ − ⟨H⟩2 is on the order
of 10−15. For system size L = 377, when λ = 1.2632, U = −1, we perform 5000 random intial states. As shown
in Fig. S2, the maximum difference Γmax − Γmin ≈ 8.5 × 10−4, for which the influence of local minimum on the fractal dimension is neglected. Therefore, we use several random initial states to construct the phase diagram for L = 377 and do the finite-size scaling. However, we must find the global minima with enough random initial states to distinguish the inversion symmetry in different regimes. Fig. S3(a) shows the phase diagram with the system size L = 89, which costs less time and different init-
ial states to find the GS of the system. Fig. S3(b) shows the corresponding phase diagram about the expectational value of the inversion symmetry Pˆ of the GS, i.e., ⟨GS| Pˆ |GS⟩.
-3.1539 -3.15385 -3.1538 -3.15375 -3.1537 E
0.5014
0.5016
0.5018
0.502
0.5022
0.5024
FIG. S2. The fractal dimension versus the energy of 5000 different random initial states. L = 377, μ = 0.35, λ = 1.2632, U = −1.

 4
-0.5 0 0.5 U
0.5
1
1.5
0
0.2
0.4
0.6
0.8
1
-1 -0.5 0 0.5 1 U
0
0.5
1
1.5
2
0
0.2
0.4
0.6
0.8
1
(a) (b)
FIG. S3. (a) Fractal dimension Γ of different eigenstates as a function of the interaction strength U and quasiperiodic potential strength λ with size L = 89. Here, the hopping strength t1 has been set as the unit of energy and μ = 0.35. (b) Phase diagram for the expectational values of the inversion symmetry of GS.
IV. Perturbation theory analysis of the phase diagram
In this section, we provide a detailed calculation of the perturbation theory. Supposing that the localized state localizes at site j and treating the hopping and the on-site potential as perturbations, the eigenvalue of the eigenstate
∣∣ψ(0)〉 = |j⟩ of the unperturbed Hamiltonian, −U ∑
n |ψ(n0)|2nn, is E(0)
j = −U . At the same time, we have E(n0) = 0
for n ̸= j. By performing perturbation theory, the eigenstate of the mean-field Hamiltonian is approximated by
|ψapprox⟩ = ∣∣ψ0〉 + ∣∣ψ1〉 + ∣∣ψj2
〉
∣∣ψ0〉 = |j⟩
∣∣ψ1〉 = ∑
n̸=j
⟨n| H |j⟩
E (0)
j − E(n0)
|n⟩ = − t1
U |j − 1⟩ − t1
U |j + 1⟩ − t2(j − 2)
U |j − 2⟩ − t2(j)
U |j + 2⟩
∣∣ψj2
〉=− 1
2 |j⟩ ∑
n̸=j
| ⟨n| H |j⟩ |2
(E (0)
j − E(n0))2 = −
[ t21
U 2 + t22(j − 2) + t22(j)
2U 2
]
|j⟩ , (13)
where ∣∣ψi〉 is the ith order perturbation wavefunction with respect to interaction strength U . ∣∣ψj2
〉 is the second-order perturbation wavefunction component located on site j. We will show afterward that the other components of the second-order correction to the wavefunction
∣∣∣ψ2n̸=j
〉
do not contribute to the energy up to the second order O(U −2).
The approximated energy of the system up to the order of O(U −2) is
Eapprox = ⟨ψapprox| H − U
2
∑
n
|ψapprox
n |2nn |ψapprox⟩
=− U
2 − 2t21
U − t22(j) + t22(j − 2)
U + 2[t21t2(j) + t21t2(j − 2)]
U 2 + Vj
[
1 − 2t21
U 2 − t22(j − 2)
U 2 − t22(j)
U2
]
+ t21(Vj−1 + Vj+1)
U 2 + t22(j − 2)Vj−2 + t22(j)Vj+2
U 2 + O(U −2). (14)
In the following, we prove why the precision of the approximated energy is in the order of O(U −2). The error of the energy, ξE is defined as
ξE = ⟨ψexact| H − U
2
∑
n
|ψexact
n |2nn |ψexact⟩ − ⟨ψapprox| H − U
2
∑
n
|ψapprox
n |2nn |ψapprox⟩
= − ⟨ψapprox| U
2
∑
n
(|ψexact
n |2 − |ψapprox
n |2)nn |ψapprox⟩ + ⟨δψ| H − U
2
∑
n
|ψexact
n |2nn |ψapprox⟩
+ ⟨ψapprox| H − U
2
∑
n
|ψexact
n |2nn |δψ⟩ + ⟨δψ| H − U
2
∑
n
|ψexact
n |2nn |δψ⟩ , (15)

 5
where the exact wavefunction is |ψexact⟩ = |ψapprox⟩ + |δψ⟩, and we have
|ψexact
n |2 = |ψapprox
n + δψn|2 = |ψapprox
n |2 + |δψn|2 + 2δψnψapprox
n.
The error of the approximated wavefunction |δψ⟩ is estimated as follows:
|δψ⟩ = ∣∣ψ2n̸=j
〉 + ∣∣ψ3〉 + O(U −4),
∣∣ψ2n̸=j
〉=∑
m̸=j
∑
n̸=j
|m⟩ ⟨m| H |j⟩ ⟨n| H |j⟩
(E (0)
j − E(m0))(E(0)
j − E(n0)) − ∑
n̸=j
|n⟩ ⟨n| H |j⟩ ⟨j| H |j⟩
(E (0)
j − E(n0))2
=1
U 2 (t21 |j − 2⟩ + t21 |j + 2⟩ + t1t2(j − 2) |j − 1⟩ + t1t2(j) |j + 1⟩)
− Vj
U 2 (t1 |j − 1⟩ + t1 |j + 1⟩ + t2(j − 2) |j − 2⟩ + t2(j) |j + 2⟩),
∣∣ψj3
〉=∑
k1 ̸=j
∑
k2 ̸=j
|j⟩
[
− ⟨j| H |k2⟩ ⟨k2| H |k1⟩ ⟨k1| H |j⟩ + ⟨k2| H |j⟩ ⟨k1| H |k2⟩ ⟨j| H |k1⟩
2(E(0)
j − E(0)
k2 )2(E(0)
j − E(0)
k1 ) + | ⟨j| H |k1⟩ |2 ⟨j| H |j⟩
(E (0)
j − E(0)
k1 )3
]
=1
U 3 [2t21t2(j − 2) + 2t21t2(j) − 2t21Vj − t22(j − 2)Vj − t22(j)Vj] |j⟩
=ψj3 |j⟩ . (16)
In the following, we will show that |ψ3n̸=j⟩ gives no contribution to the energy up to the order of O(U −2).
Now let us estimate each term in Eq. (15) up to the order of O(U −2) one by one. The first term in Eq. (15) is
− ⟨ψapprox| U
2
∑
n
(|ψexact
n |2 − |ψapprox
n |2)nn |ψapprox⟩ (17)
= − ⟨ψapprox| U
2
∑
n
|δψn|2nn |ψapprox⟩ − ⟨ψapprox| U
2
∑
n
2δψnψapprox
n nn |ψapprox⟩
= O(U −2) − ⟨ψapprox| U ∑
n
δψnψapprox
n nn |ψapprox⟩ , (18)
where
− ⟨ψapprox| U ∑
n
δψnψapprox
n nn |ψapprox⟩ = − 〈ψ0∣∣ U ∑
n̸=j
ψ2n̸=j ψapprox
n nn
∣∣ψ0〉 − 〈ψ0∣∣ U ∑
n
ψ3nnnψ0n
∣∣ψ0〉 + O(U −2)
= − ⟨j| U ∑
n̸=j
ψ2n̸=j ψapprox
n nn |j⟩ − ⟨j| U ∑
n
ψ3nψ0nnn |j⟩ + O(U −2)
= 0 − ⟨j| U ψj3ψj0nj |j⟩ − ⟨j| U ∑
n̸=j
ψ3nψ0nnn |j⟩ + O(U −2)
= 0 − ⟨j| U ψj3ψj0 |j⟩ − 0 + O(U −2)
=− 2
U 2 (t21t2(j − 2) + t21t2(j) − Vjt21 − Vjt22(j − 2)/2 − Vjt22(j)/2) + O(U −2)
= − U ψj3 + O(U −2). (19)
The second term in Eq. (15) is
⟨δψ|H − U
2
∑
n
|ψexact
n |2nn |ψapprox⟩
= ⟨δψ| H ∣∣ψ0〉 − ⟨δψ| U
2
∑
n
|ψexact
n |2nn
∣∣ψ0〉 − ⟨δψ| U
2
∑
n
|ψexact
n |2nn
∣∣ψ1〉 + O(U −2), (20)
where
⟨δψ| H ∣∣ψ0〉 = 〈ψ2n̸=j
∣∣ H ∣∣ψ0〉 + O(U −2)
=2
U 2 [t21t2(j) + t21t2(j − 2) − Vjt21 − Vjt22(j − 2)/2 − Vjt22(j)/2] + O(U −2)
= U ψj3 + O(U −2). (21)

 6
Because ∑
n
|ψexact
n |2nn = ∑
n
(|ψ0n|2 + |ψ1n|2 + ψ0nψ1n + 2ψ0nψ2n + O(U −2))nn = |ψj0|2nj + 2ψj0ψj2nj + ∑
n̸=j
(|ψ1n|2 + O(U −2))nn
and 〈δψ∣∣ψ0〉 =
[
⟨ψ2n̸=j | + ⟨ψ3n̸=j | + 〈ψj3
∣∣]
|j⟩ = 〈ψj3
∣∣j〉, the second term in Eq. (20) is
− ⟨δψ| U
2
∑
n
|ψexact
n |2nn
∣∣ψ0〉 = − ⟨δψ| U
2 (|ψj0|2 + 2ψj0ψj2)nj |j⟩ − ⟨δψ| U
2
∑
n̸=j
|ψ1n|2nn |j⟩ + O(U −2)
=− U
2 (1 + 2ψj2) 〈ψj3
∣∣j〉 + O(U −2), (22)
where the second term in the second to last step vanishes. Because U
2 2ψj2
〈ψj3
∣∣j〉 = O(U −2), the above equation becomes
−U
2
〈ψj3
∣∣j〉 + O(U −2) = − U
2 ψj3 + O(U −2). (23)
The third term in Eq. (20) is
− ⟨δψ| U
2
∑
n
|ψexact
n |2nn
∣∣ψ1〉 = − ⟨δψ| U
2
∑
n
|ψ0n|2nn
∣∣ψ1n̸=j
〉 + O(U −2)
= − ⟨δψ| U
2 |ψj0|2nj
∣∣ψ1n̸=j
〉 + O(U −2) = O(U −2), (24)
where the first term in the second to last step vanishes. We then substitute Eq. (21), (22), (24) into Eq. (20), and find that
⟨δψ| H − U
2
∑
n
|ψexact
n |2nn |ψapprox⟩ = U
2 ψj3 + O(U −2). (25)
Similarly, we get the third term in Eq. (15)
⟨ψapprox| H − U
2
∑
n
|ψexact
n |2nn |δψ⟩ = ⟨δψ| H − U
2
∑
n
|ψexact
n |2nn |ψapprox⟩ = U
2 ψj3 + O(U −2). (26)
The fourth term of Eq. (15) is
⟨δψ| H − U
2
∑
n
|ψexact
n |2nn |δψ⟩ =O(U −4) − ⟨δψ| U
2
∑
n
|ψexact
n |2nn |δψ⟩
=O(U −4) − 〈ψ2n̸=j
∣∣ U
2
∑
n
|ψ0n|2nn
∣∣ψ2n̸=j
〉
=O(U −4) − 〈ψ2n̸=j
∣∣ U
2 |ψj0|2nj
∣∣ψ2n̸=j
〉 = O(U −4), (27)
where the second term in the second to last step vanishes. Combining Eq. (19), (25), (26), and (27), we find that the
error of the energy is ξE = O(U −2). After minimizing Eq. (14), we know where the localized state is located.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:45.700Z
- **Text Length:** 37851 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
