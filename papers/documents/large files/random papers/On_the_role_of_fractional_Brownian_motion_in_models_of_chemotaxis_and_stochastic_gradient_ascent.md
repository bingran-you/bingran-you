# PDF Document: Cornejo-Olea et al. - 2025 - On the role of fractional Brownian motion in models of chemotaxis and stochastic gradient ascent.pdf

**File Path:** Cornejo-Olea et al. - 2025 - On the role of fractional Brownian motion in models of chemotaxis and stochastic gradient ascent.pdf

**Processed Date:** 2026-02-10T18:17:29.009Z

**File Size:** 15481.27 KB

**Total Pages:** 29

**Extracted Pages:** 29

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3668

**Title:** On the role of fractional Brownian motion in models of chemotaxis and stochastic gradient ascent

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

On the role of fractional Brownian motion in models of
chemotaxis and stochastic gradient ascent
Gustavo Cornejo-Olea1, Lucas Buvinic1, J ́eroˆme Darbon2, Radek Erban3,
Andrea Ravasio4, and Anastasios Matzavinos1
1Institute for Mathematical and Computational Engineering, Pontifical Catholic University of Chile, Santiago, Chile 2Division of Applied Mathematics, Brown University, Providence, RI 02912, USA 3Mathematical Institute, University of Oxford, Andrew Wiles Building, Radcliffe Observatory Quarter, Woodstock Road, Oxford OX2 6GG, United Kingdom 4Institute for Biological and Medical Engineering, Pontifical Catholic University of Chile, Santiago, Chile
Abstract: Cell migration often exhibits long-range temporal correlations and anomalous diffusion, even in the absence of external guidance cues such as chemical gradients or topographical constraints. These observations raise a fundamental question: do such correlations simply reflect internal cellular processes, or do they enhance a cell’s ability to navigate complex environments? In this work, we explore how temporally correlated noise (modeled using fractional Brownian motion) influences chemot-
actic search dynamics. Through computational experiments, we show that superdiffusive motion, when combined with gradient-driven migration, enables robust exploration of the chemoattractant landscape. Cells reliably reach the global maximum of the concentration field, even in the presence of spatial noise, secondary cues, or irregular signal geometry. We quantify this behavior by analyzing the distribution of first hitting times under varying degrees of temporal correlation. Notably, our results a-
re consistent across diverse conditions, including flat and curved substrates, and scenarios involving both primary and self-generated chemotactic signals. Beyond biological implications, these findings also offer insight into the design of optimization and sampling algorithms that benefit from structured stochasticity.
Keywords: Chemotaxis, autocorrelated noise, fractional Brownian motion, stochastic differential equations.
1 Introduction
The directed movement of cells and microorganisms in response to a diffusible chemical signal is known as chemotaxis [20, 21, 22, 31]. The first mathematical model of chemotaxis was introduced by Evelyn Keller and Lee Segel, who proposed a parabolic system of partial differential equations to study the aggregation dynamics of the social amoeba Dictyostelium discoideum [33, 34]. Since then, the Keller–Segel model has been studied extensively; a comprehensive overview of related mathematical develop-
ments is provided in [49]. Several extensions of the Keller–Segel system at the population level have been proposed, including nonlocal models [28, 60], partial differential equation models posed in random heterogeneous media [44], and stochastic partial differential equations [8, 30]. At the single-cell level, stochastic differential equation models of chemotaxis are also widely used. These include particle-based approximations of the classical Keller–Segel system [25, 26, 55, 58],
1
arXiv:2511.18745v1 [q-bio.QM] 24 Nov 2025

as well as computational models of various biological and pathophysiological processes involving chemotactic motility [18, 19]. Examples include granulocyte migration [4], cancer invasion and metastasis [32], tumor-induced angiogenesis [5, 6, 56], and cell aggregation and self-organization phenomena [7, 11]. These models often combine Brownian motion with gradient-driven motility, drawing parallels to stochastic gradient ascent algorithms used in global optimization [39, 43] and sampling methods -
[15]. Viewed through this lens, chemotaxis can be interpreted as a natural optimization process that steers cells toward regions of higher chemoattractant concentration. However, the assumption that random motility follows Brownian dynamics – and thus exhibits normal diffusion – does not always align with experimental observations. In the absence of external guidance cues such as chemotactic gradients or topographical constraints, the movement of biological cells often deviates from Brownian motio-
n. A growing body of evidence shows that single-cell trajectories frequently exhibit anomalous diffusion, characterized by a mean squared displacement (MSD) that scales nonlinearly with time. Such behavior has been reported across diverse cell types, including fibroblasts [54], epithelial cells [14], amoeboid cells such as Dictyostelium [41, 57], and immune cells [13, 24], both in vitro and in vivo. Depending on the underlying mechanisms, the random motility may be subdiffusive or superdiffusive, -
often reflecting cytoskeletal dynamics, intermittent propulsion, or memory in the direction of motion. A widely used stochastic model for capturing such correlated motion is fractional Brownian motion (fBM) [47, 38], a self-similar Gaussian process with stationary increments and long-range temporal correlations – see Section 2.1 for the mathematical definition. Several studies have successfully fit fBM models to cell migration data, using metrics such as MSD scaling, velocity autocorrelations, and-
 trajectory segmentation to infer time-dependent persistence [37, 41]. In particular, the anomalous motility of epithelial cells [14], neutrophils [13], and Drosophila hemocytes [37] has been quantitatively described using fBM or related fractional models. These observations suggest that memory effects in spontaneous cell migration – present even in the absence of external cues may play a critical role in tissue-scale pattern formation. Motivated by these observations, this work explores how fract-
ional Brownian motion shapes the dynamics of chemotactic cell migration. Specifically, we ask whether the long-range temporal correlations reported in experimental studies are simply a consequence of cytoskeletal reorganization or whether they serve a functional role in guiding cells toward a chemoattractant source. Our computational results support the latter view: superdiffusive random motion, when combined with gradient-driven migration, facilitates robust exploration of the chemoattractant lan-
dscape. In this regime, small fluctuations in concentration do not hinder the cell’s ability to locate regions of higher signal intensity. To quantify this effect, we analyze the distribution of first hitting times for the global maximum of the chemoattractant concentration, which represents the cell’s arrival at the peak of the external signal. Notably, this behavior persists across diverse settings, including flat and curved substrates, and in the presence or absence of secondary, self-generated-
 chemotactic cues. The structure of the paper is as follows. Section 2 introduces the mathematical definition and key properties of fractional Brownian motion, and sets up the stochastic differential equation model of chemotaxis that underlies our analysis. This framework includes dynamics in both Euclidean spaces and Riemannian manifolds, representing flat and curved substrates, respectively. We also discuss connections to optimization and sampling theory. Section 3 presents our computational res-
ults: Section 3.1 examines the robustness conferred by fractional Brownian motion against small fluctuations in the chemotactic field in Euclidean settings; Section 3.2 extends this analysis to curved domains modeled as smooth manifolds; and Section 3.3 investigates the influence of a secondary, self-generated chemotactic cue. Finally, Section 4 concludes with a discussion of our findings and
2

directions for future research.
2 Mathematical framework
2.1 Fractional Brownian motion and chemotaxis
Fractional Brownian motion (fBM) was first introduced by Kolmogorov in the 1940s in the context of his mathematical studies on turbulence in fluid dynamics [36]. The process was later revisited by Mandelbrot and Van Ness in the late 1960s, particularly with an eye toward applications in financial modeling [42]. Their work also introduced the modern terminology and formal definition of fractional Brownian motion that remains in use today [38, 46, 47]. Formally, fractional Brownian motion with Hurst-
 index H ∈ (0, 1) is a centered Gaussian process WH
t t≥0 with continuous paths and stationary increments, characterized by the relation
E
h
WH
t − WH
s
2
i
= |t − s|2H (1)
for all t, s ≥ 0. It follows immediately that when H = 1/2, fractional Brownian motion coincides with standard Brownian motion. Moreover, according to (1), the process exhibits superdiffusive behavior when H > 1/2 and subdiffusive behavior when H < 1/2. A straightforward algebraic manipulation of (1) yields that for all H ∈ (0, 1),
Cov W H
t ,WH
s = E WH
t WH
s =1
2 t2H + s2H − |t − s|2H (2)
Assuming t > s > 0 and that W H
0 = 0, we then obtain
E WH
s − WH
0 WH
t − WH
s = E WH
t WH
s − E (W H
s )2
=1
2 t2H − s2H − |t − s|2H (3)
Note that the right-hand side of (3) is positive when H > 1/2 and negative when H < 1/2. Therefore, the increments of fractional Brownian motion are positively correlated when H > 1/2 and negatively correlated when H < 1/2. As discussed in the introduction, in this paper we are concerned with cell motility models in which the position Xt of a motile cell is driven by a combination of the gradient of a chemoattractant and a fractional Brownian motion with Hurst index H. Accordingly, Xt satisfies th-
e following initial
value problem:
(
dXt = χ(Xt)∇f (Xt) dt + Σ(Xt) dWH
t
X0 = x0
(4)
Here, for all t ≥ 0, the function χ( · ) is non-negative and represents chemotactic sensitivity, while Σ( · ) denotes an n × n diffusion tensor. The process WH
t is a vector-valued fractional Brownian motion, whose components are independent scalar fractional Brownian motions with common Hurst index H. When H = 1/2, the stochastic differential dWH
t corresponds to white noise. In this work, we focus on the case H > 1/2, which corresponds to noise with positive temporal autocorrelation [38]. Equation (4) is typically interpreted in its weak form as the integral equation
Xt = x0 +
Zt
0
χ(Xs)∇f (Xs) ds +
Zt
0
Σ(Xs) dWH
s (5)
3

The definition of the stochastic integral in Eq. (5) depends on the value of the Hurst index H. When H < 1/2, the integral is typically defined using tools from Malliavin calculus [10]. When H = 1/2, Eq. (5) is interpreted in the sense of the Itoˆ integral [48]. In the case of interest for this paper, H > 1/2, one can take advantage of the pathwise regularity of WH
t to define the stochastic integral as a Young integral; see [47] for further details. A well-developed theoretical framework ensures the existence and uniqueness of solutions to Eq. (5); see [47, 46]. For simplicity, most of the computational experiments presented in Section 3 will assume that χ( · ) is constant, i.e., χ( · ) ≡ χ > 0, and that the diffusion tensor is a scalar multiple of the identity matrix, i.e., Σ( · ) = σ I for some σ > 0. All numerical simulations have been performed with an -
Euler-type scheme; see, e.g., [45].
2.2 Chemotaxis on a manifold
In many pathophysiological settings, chemotaxis occurs on curved substrates, suggesting that surface curvature may influence cell motility dynamics [23]. To account for this, we model the substrate as a smooth Riemannian manifold (M, g) with metric tensor g = (gij) [3, 9], and we provide the corresponding local coordinate expressions for Eq. (4), assuming all processes evolve on the manifold. For the Brownian motion case, these expressions can be found in [17, 29, 51], while for fractional Brownia-
n motion with Hurst index H > 1/2, the derivation is provided in Appendix 1. Specifically, consider a chemotactic process Yt on a Riemannian manifold (M, g), driven by the intrinsic gradient of a smooth function f : M → R and by a fractional Brownian motion BH
t
defined on the manifold. The evolution of Yt is then governed by
(
dYt = χ gradM f (Yt) dt + σ dBH
t
Y0 = y0 ∈ M (6)
Similarly to Section 2.1, the weak formulation of Eq. (6) depends on the value of the Hurst index H, as we now explain. For the sake of simplicity, we assume that M ⊂ RN is a smooth embedded n-dimensional manifold, with a global chart
φ : U ⊂ Rn −→ M ⊂ RN (7)
Of course, in this paper we will mainly focus on the biologically-relevant case of n = 2 and N = 3. As usual, U denotes an open subset of Rn. Let us recall the definition of fractional Brownian motion on a Riemannian manifold. For H = 1/2, Brownian motion on M is classically defined as the Stratonovich solution to the stochastic differential equation
∂Bt =
n
X
k=1
Ek Bt ∂W k
t , B0 ∈ M,
where {Ek}n
k=1 is a local orthonormal frame of tangent vector fields on M and {W k
t }n
k=1 are independent (one-dimensional, Euclidean) Brownian motions [51]. This formulation ensures that Bt ∈ M for all t ≥ 0 and that the generator of the process is given by 1
2 ∆g, where ∆g is the Laplace-Beltrami operator on M [29, 51]. When H > 1/2, the same equation can be interpreted in the Young sense, with {W H,k
t }n
k=1
independent fractional Brownian motions of Hurst index H. In this case, the manifold-valued process BH
t is defined as the solution to
dBH
t=
n
X
k=1
Ek BH
t dW H,k
t , BH
0 ∈ M, (8)
4

where all stochastic differentials are understood in the Young sense [47]. Equation (8) generalizes the Stratonovich formulation of Brownian motion to the fractional setting and yields a process whose increments are isotropic in the tangent space of M. In particular, when M is a Lie group equipped with a left-invariant metric and {Ek} are the corresponding left-invariant orthonormal vector fields, (8) coincides with the definition of fractional Brownian motion introduced in [2]. In the presence o-
f the global chart φ given in (7), one can express Eq. (6) in local coordinates {xi}i≤n as follows. Using the notation ∂k = ∂/∂xk, the k-th component of the gradient of f can be expressed as
(gradM f )k =
n
X
j=1
gkj ∂jf, k = 1, . . . , n,
where, as usual, gkj denotes the (k, j) entry of the inverse metric tensor [3, 9]. Note that throughout this paper, we use the commonly adopted convention for raised and lower indices, representing components of contravariant and covariant tensors, respectively [9]. As explained in detail in Appendix 1, one can also express BH
t in local coordinates, and hence one can derive a stochastic differential equation for the evolution of the process
Xt = φ−1(Yt) ∈ U
Indeed, let W H,j
t denote the (one-dimensional) j-th component of a Euclidean n-dimensional fractional Brownian motion WH
t with Hurst index H ≥ 1/2, and let Xk
t denote the k-th component of the local-coordinate process Xt. Then, the chemotactic process Yt on M given by (6) satisfies the following system of stochastic differential equations in local (Euclidean) coordinates:
dX k
t= χ
n
X
j=1
gkj ∂j f − σ2 1{H=1/2}
2
n
X
i,j=1
gji Γk
ij
!
dt + σ
n
X
j=1
g−1/2 k
j dW H,j
t , k = 1, . . . , n, (9)
which is to be interpreted in the Itˆo sense when H = 1/2 and in the Young sense when H > 1/2, and Γk
ij are the Christoffel symbols of the Levi-Civita connection on M [9, 29]. Note the appearance of an extra advection term when H = 1/2. This is due to the transformation of the Stratonovich formulation to the Itˆo formulation in local coordinates (see, e.g., Example 3.3.5 in [29]). In contrast, the Young integral behaves like the Stratonovich integral in terms of change of coordinates [38, 47], and hence the extra advection term is absent when H > 1/2; see Appendix 1 for more details. It is eviden-
t that the motility parameters in (9) are influenced by the inverse metric tensor and the Christoffel symbols of M. In Section 3.2, we will examine how the geometry of M affects the motility dynamics of a cell performing chemotaxis on a curved substrate.
3 Results
3.1 Robustness against signal fluctuations in Euclidean domains
We begin our exploration of how fractional Brownian motion shapes the dynamics of chemotactic cell migration by first considering the Euclidean setting, that is, the case of a flat substrate. As discussed in the introduction and supported by experimental evidence, we focus on fractional Brownian motion with Hurst index H > 1/2, which corresponds to positively autocorrelated temporal noise [37, 41]. Our results will be compared to the baseline case H = 1/2, where Eq. (5) is driven by Brownian motio-
n.
5

Figure 1: Examples of stationary chemoattractant distributions explored in Section 3.1. The setting on the left is referred to as the “weakly trapping” experiment, whereas the one on the right corresponds to the “strongly trapping” experiment.
The stationary distribution and mixing times for special cases of Eq. (5) are well understood
when H = 1/2 [15, 39]. For example, when χ( · ) ≡ 1 and Σ( · ) ≡ √2 I, the stationary distribution of Eq. (5) has density π(x) ∝ exp f (x) ,
provided that the right-hand side is integrable. This illustrates how the inclusion of noise in Eq. (5) transforms a local maximization algorithm (gradient ascent) into a global one: sample paths of Eq. (5) asymptotically wander toward spatial regions that maximize π(x) globally [15, 39]. This property is of particular relevance for noisy chemotactic motion, since eukaryotic cells must navigate fluctuating gradients and maintain robustness against spatial perturbations in order to effectively expl-
ore their environment. In what follows, we investigate stationary chemotactic distributions that model spatial fluctuations through the presence of local concentration maxima surrounding the signal origin, that is, the global maximum of the chemoattractant field, as exemplified in Fig. 1. Our focus is on how positive temporal correlations in random exploratory behavior, and the associated persistence, accelerate the discovery of the global maximum by at least one cell in the population responding -
to the chemotactic cue. The underlying intuition is that stronger persistence, induced by temporal correlations, facilitates faster escape from local maxima. We refer to the distribution shown on the left of Fig. 1 as the “weakly trapping” experiment, and to the one on the right as the “strongly trapping” experiment. Figures 2 and 3 show the spatial positions of 100 sample paths of Eq. (5) at time t = 10 for different values of H, χ, and σ in one- and two-dimensional versions of the weakly trappin-
g experiment, respectively. All numerical simulations were performed using an Euler-type scheme (see, e.g., [45]), with time step ∆t = 0.1. The first raw in both figures corresponds to the setup,
6

Figure 2: Spatial positions of 100 particles at t = 10 for different parameter sets in a one-dimensional version of the weakly trapping experiment. An X-mark indicates the initial particle location, and the numbers in the red boxes denote the total number of particles that reached the global maximum within the observation window.
where Eq. (5) is driven by Brownian motion. The temporary “trapping” of the sample paths in local maxima is especially apparent in Fig. 3, where the trajectories located in the outer rim of maxima tend to move circumferentially, aligning with the convective dynamics of gradient ascent. The parameters for chemotactic strengths and the diffusion constants for the experiments shown here were chosen to be slightly different in the one- and two-dimensional cases for visualization purposes, but similar -
results were obtained for a wide variety of parameter values around the ones shown here. In both the weakly and strongly trapping settings, we observe a consistent trend: as the Hurst index H and the diffusion coefficient σ increase, a larger number of particles reach the global maximum within the observation window. This behavior reflects the enhanced persistence imparted by positive temporal correlations and the stronger exploratory drive generated by increased stochastic fluctuations. The combi-
nation of these effects enables particles to escape local maxima more
7

Figure 3: Spatial positions of 100 particles at t = 10 for different parameter sets in a two-dimensional version of the weakly trapping experiment of Fig. 2. An X-mark indicates the initial particle location, and the numbers in the red boxes denote the total number of particles that reached the global maximum within the observation window.
effectively and to converge toward the global maximum. We also note that some trajectories eventually leave the simulation domain; once a particle exits the domain, it is no longer tracked in the experiment. From both an optimization and a biological perspective, it is important to emphasize that success does not require every particle to locate the global maximum. In optimization, the discovery of the maximum by even a single trajectory suffices. In the biological setting, many cell lines exhibit-
 collective strategies: once a cell reaches the global maximum and saturates its receptors with chemoattractant signaling molecules, it secretes a secondary chemoattractant that dynamically reshapes the chemical landscape and recruits additional cells to the same location [1, 12, 20]. This cooperative mechanism will be investigated in detail in Section 3.3. Accordingly, all experiments reported in this section correspond to a randomly
8

Figure 4: Spatial positions of 100 particles at t = 10 for different parameter sets in a one-dimensional version of the strongly trapping experiment. An X-mark indicates the initial particle location, and the numbers in the red boxes denote the total number of particles that reached the global maximum within the observation window.
stopped version of Eq. (5), where simulated cells terminate their chemotactic response when the chemoattractant concentration exceeds a threshold value (3.5 in the simulations shown). Figures 4 and 5 show the corresponding results for the strongly trapping experiment, in both one and two dimensions. Compared to the weakly trapping case (Figs. 2 and 3), the additional local maxima present a more challenging environment, leading to more pronounced trapping of trajectories in secondary peaks. Nonethe-
less, the same overall trend persists: increasing positive temporal correlations and diffusion enhances the likelihood that at least one particle escapes local maxima and reaches the global maximum. To gain a more detailed understanding of how the Hurst index H influences the dynamics of Eq. (5), Fig. 6 shows selected sample paths of f (Xt) in the weakly and strongly trapping regimes for different values of H. Once again, it is apparent that Hurst indices greater than 1/2 facilitate better explora-
tion of the chemoattractant landscape by allowing for faster escape from local maxima.
9

Figure 5: Spatial positions of 100 particles at t = 10 for different parameter sets in a two-dimensional version of the strongly trapping experiment of Fig. 4. An X-mark indicates the initial particle location, and the numbers in the red boxes denote the total number of particles that reached the global maximum within the observation window.
An interesting phenomenon can be observed in Fig. 6(A), where increasing H does not produce a monotonic decrease in the time required to reach the global maximum. The trajectories in orange and yellow (H = 0.7 and H = 0.9) arrive sooner than those in green and purple (H = 0.8 and H = 0.95). Although individual paths do not capture the full distribution of hitting times, the reasons for these delays are instructive. The purple trajectory (H = 0.95) initially persists in moving away from the chemoat-
tractant source, postponing detection of the gradient. The green trajectory (H = 0.8), by contrast, advances in the correct direction but with increments that are atypically small during the interval from about t = 0.6 to t = 1.2; because of temporal correlations, these reduced step sizes persist throughout that period, slowing progress toward the maximum. These cases illustrate that while positive correlations typically aid escape from local maxima, they
10

(A) (B)
Figure 6: Sample paths of f (Xt) in (A) the weakly trapping, one-dimensional experiment and (B) the strongly trapping, one-dimensional experiment.
can also delay arrival either by reinforcing motion away from the chemoattractant source or by sustaining unusually small advances along the correct direction for a finite period of time. In order to quantify the phenomena observed in this section and to capture the collective dynamics, we computed the empirical distributions of the hitting time
T = inf t ≥ 0 : f (Xt) ≥ r
for different Hurst indices, where r = 3.5 is the threshold above which the cells terminate their chemotactic response. Figures 7 and 8 show the resulting distributions from simulations initialized with 2, 000 particles in the weakly and strongly trapping experiments, respectively. In both settings, increasing the Hurst index leads to a greater number of particles reaching the global maximum within the observation window t ∈ [0, 20]. As H increases, the distributions taper off toward the right tai-
l: while a fraction of particles persist in moving away from the global maximum due to long-range correlations, a larger proportion succeed in reaching the maximum more rapidly. These findings complement the qualitative observations in Figs. 2–6 and will be compared in Section 3.3 to experiments that incorporate collaborative dynamics through a secondary chemotactic signal. To further assess the robustness conferred by positive temporal correlations against spatial fluctuations in the chemotactic -
landscape, we examined additional configurations of the chemoattractant field, including the multimodal distribution shown in Fig. 9. The behavior observed in the weakly and strongly trapping settings persists in this more complex environment. Entrapment by local maxima is evident, particularly for lower values of H and σ, yet increasing the Hurst index enhances the ability of particles to escape these regions and reach the global maximum of the chemoattractant concentration within the observation-
 window. The empirical hitting-time distributions (not shown here) exhibit trends consistent with those reported above, confirming that
11

Figure 7: Unscaled histograms for the empirical distributions of the hitting time T conditioned on the event T ≤ 20 for different Hurst indices in the one-dimensional, weakly trapping experiment. The simulations were initialized with 2, 000 particles.
Figure 8: Unscaled histograms for the empirical distributions of the hitting time T conditioned on the event T ≤ 20 for different Hurst indices in the one-dimensional, strongly trapping experiment. The simulations were initialized with 2, 000 particles.
higher values of H systematically increase the proportion of successful trajectories and reinforce the overall robustness of the search dynamics. These findings, together with the previous experiments, show that although higher Hurst indices can sustain unusually small advances along the correct direction for finite intervals of time, the dominant effect is an accelerated escape from local fluctuations, which increases the likelihood that particles discover the global maximum earlier. Building on -
these observations, we now turn to curved substrates, where geometry introduces additional directional biases into the dynamics.
12

Figure 9: Spatial positions of 200 particles at t = 15 for different parameter sets in a twodimensional, multimodal chemotactic field. The intersection of the dashed red lines marks the initial particle location. Periodic boundary conditions were imposed. The numbers in the red boxes indicate the total number of particles that reached the global maximum during the observation window.
3.2 Chemotactic dynamics on curved substrates
Recent studies have demonstrated that substrate curvature can strongly influence cell motility, giving rise to a behavior known as curvotaxis [50, 53]. He and Jiang [27] employed a three-dimensional mechanical model to show that cells migrate more persistently along concave surfaces and display reduced motility on convex ones. This curvature-dependent migration was further validated experimentally by Pieuchot et al. [50], who observed that cells preferentially move toward concave valleys and avoid-
 convex ridges, a process mediated by the coupling between the cytoskeleton and the nucleus. Complementing these findings, a minimal theoretical model based on vesicle dynamics with
13

Figure 10: Sample paths of fractional Brownian motion with Hurst index H = 0.8 on the paraboloid ψ(x, y) = λ(x2 + y2) for different values of λ. The top row shows the process on the manifold, while the bottom row displays the corresponding process in local coordinates.
curvature-sensing proteins reproduced curvotactic behavior across sinusoidal and tubular geometries, suggesting that such motility patterns can emerge from basic physical interactions [53]. Additional studies combining experimental observations with simulations further confirmed that curvature, together with confinement and surface topography, modulates cell morphology, migration speed, and actin organization, highlighting the intricate interplay between geometric cues and cytoskeletal dynamics [5-
9]. These findings naturally raise the question of whether the robustness to signal fluctuations observed in the Euclidean setting of Section 3.1 persists in the presence of directional biases introduced by substrate curvature. While we do not explicitly model biophysical mechanisms such as cytoskeletal-nuclear coupling or curvature-sensing proteins in this paper, it is well established that substrate geometry influences the dynamics of Equations (6), as outlined in Section 2.2. In this section, w-
e examine how curvature-induced dynamics interact with chemotactic gradients and temporally correlated noise. Our results provide further evidence that fractional Brownian motion confers robustness even in the presence of competing directional influences arising from substrate geometry. To illustrate how geometry influences fractional Brownian motion, Figs. 10 and 11 present sample paths on paraboloids of varying curvatures and Hurst indices. The top rows depict trajectories on the manifolds, whil-
e the bottom rows show the corresponding processes in local coordinates, which in this case reduce to the plane on which the paraboloid is defined (see Section 2.2 and the Appendix for further details). The emergence of spatial correlations is clearly visible. For a fixed Hurst index H ≥ 1/2, increasing the parameter λ leads the process to align more strongly with the level sets of the paraboloid, producing predominantly circumferential motion. This behavior can be understood as a direct consequen-
ce of the surface geometry: as the particle moves farther from the origin, the tangent plane to the paraboloid becomes progressively steeper, so displacements orthogonal to the level sets diminish in relative importance compared to tangential ones. This effect illustrates how geometry can hinder chemotactic motion toward the global maximum of a chemoattractant
14

Figure 11: Sample paths of fractional Brownian motion for different values of the Hurst index on the paraboloid ψ(x, y) = λ(x2 + y2) with λ = 0.1. The top row shows the process on the manifold, while the bottom row displays the corresponding process in local coordinates.
distribution on the curved substrate (cf. Fig. 12). At the same time, Fig. 11 shows that increasing the persistence of temporal correlations, achieved by raising the Hurst index, enables trajectories to overcome this geometric constraint and explore the manifold more broadly, thereby mitigating the hindering effect of curvature. To investigate the dynamics arising from the combined effects of geometry, fractional Brownian motion, and gradient ascent, we now revisit the two-dimensional experiments -
of Section 3.1. The weakly trapping and strongly trapping settings shown in Figs. 3 and 5, respectively, are repeated here on the paraboloid ψ(x, y) = λ(x2 + y2) with λ = 0.1, as illustrated in Fig. 12. The stationary chemoattractant distributions are the same as those used in Section 3.1, but here they are defined in local coordinates (i.e., on the plane) and subsequently projected onto the manifold. The realizations of chemotactic motion driven by Eq. (6) in Figs. 13 and 14 were obtained by solv-
ing Eq. (6) in local coordinates, using the same numerical scheme and time step (∆t = 0.1) as in Section 3.1. For reference, the metric tensor of the paraboloid ψ, viewed as an embedded manifold, is given by (see, e.g., Section 4.2.6 in [9])
gij = δij + ∂iψ ∂jψ,
where the usual tensor notation is used, and the indices i and j range over 1 and 2, corresponding to the x and y local coordinates. The inverse metric then takes the form
gij = δij − ∂iψ ∂jψ
det(g) ,
where ∂iψ := P
j δij∂jψ. This in turn implies that
g−1/2 i
j = δi
j − ∂iψ ∂jψ
det(g) + pdet(g), (10)
with a detailed derivation discussed in Appendix 2. Finally, the Christoffel symbols of the paraboloid,
15

Figure 12: Sample paths of the solution to Eq. (6) in the presence of a chemoattractant distribution on the manifold given by the graph of ψ(x, y) = λ(x2 + y2) with λ = 0.1. An X-mark indicates the initial particle location.
which enter the dynamics only in the case of Brownian motion, i.e., when H = 1/2, are given by
Γk
ij = ∂kψ ∂i∂jψ
det(g)
Figure 13 shows the spatial positions of 100 sample paths of Eq. (6) at time t = 10 for different values of H, χ, and σ in the weakly trapping regime. Compared to the Euclidean case in Fig. 3, the influence of geometry is apparent: trajectories exhibit circumferential motion that limits their ability to explore the region containing the global maximum. Trapping in secondary, “outer” local maxima is also observed, consistent with the Euclidean setting. However, the third row of Fig. 13 demonstrates-
 that strong temporal correlations associated with high values of the Hurst index enable trajectories to overcome both the geometric hindrance and the local maxima of the chemotactic distribution, thereby accelerating convergence to the global maximum. Figure 14 focuses on the strongly trapping regime, where sample paths must escape from several local maxima before reaching the global maximum at the origin. In this setting, the spatial correlations imposed by the geometry made the number of partic-
les and time horizon used in the Euclidean experiments insufficient for capturing a trajectory that reached the global maximum. For this reason, the experiment was conducted with 200 realizations over the time interval [0, 40]. Both the circumferential bias induced by the geometry and the trapping in local maxima are clearly visible. Nevertheless, the final row of Fig. 14 shows that high values of the Hurst index confer robustness against both signal fluctuations, represented by the local maxima, -
and geometric constraints. In this case, several trajectories with large Hurst index successfully reach the global maximum within the observation window.
16

Figure 13: Spatial positions of 100 particles on the paraboloid defined in the text (displayed in local coordinates) at t = 10 for different parameter sets in the weakly trapping regime. An X-mark indicates the initial particle location, and the numbers in the red boxes denote the total number of particles that reached the global maximum within the observation window.
3.3 Influence of secondary self-generated cues
The results in Sections 3.1 and 3.2 focused on scenarios where cells (or computational particles in the simulations) move independently under the influence of a primary chemotactic field. In many biological systems, however, chemotactic migration is not purely individual but is reinforced through intercellular communication [31]. Experimental studies have shown that once cells reach a sufficiently strong primary chemoattractant source, they may secrete secondary signals that reshape the local chem-
ical landscape and recruit additional cells toward the source. This relay mechanism effectively transforms the search process from one driven by independent explorers into a collective migration strategy. Several well-studied examples highlight this principle. In Dictyostelium discoideum, starving
17

Figure 14: Spatial positions of 200 particles on the paraboloid defined in the text (displayed in local coordinates) at t = 40 for different parameter sets in the strongly trapping regime. An X-mark indicates the initial particle location, and the numbers in the red boxes denote the total number of particles that reached the global maximum within the observation window.
cells migrate collectively by relaying waves of cyclic adenosine monophosphate (cAMP): cells both sense external cAMP and release additional cAMP once their receptors are sufficiently activated [12, 35]. Similarly, neutrophils responding to primary cues such as fMLP, a prototypical bacterialderived peptide chemoattractant, or tissue damage secrete leukotriene B4 (LTB4), which acts as a secondary chemoattractant that sustains and coordinates the swarming response at inflammatory sites [1, 40, 16]. -
These systems demonstrate how secondary cues can amplify weak or localized signals, ensuring that the population as a whole converges efficiently toward biologically relevant targets. Motivated by this evidence, we extend our model to incorporate the secretion of a secondary signal by “activated” cells. Specifically, we investigate how the interplay between fractional Brownian
18

(A) (B) (C)
Figure 15: Time evolution of the combined chemoattractant field f + h for different values of the Hurst index H in the strongly trapping experiment.
motion, gradient ascent in the primary field, and secondary signal production alters the collective dynamics. This shifts the framework from independent particles to an interacting system, where trajectories are coupled through the evolving secondary chemoattractant field. In our simulations, M computational particles (cells) are initialized in the domain. In addition to the primary chemotactic signal f , we introduce a secondary diffusible signal h, produced by cells located in regions where the -
primary chemoattractant exceeds a threshold r (r = 3.5 in all simulations). Each cell, whether activated or not, migrates along the gradient of the combined field f + h, according to:



dXk
t = χ ∇f Xk
t + χ ∇h Xk
t , t dt + σ dWH,k
t
Xk
0 = xk
0
(11)
where Xk
t denotes the position of the k-th cell at time t, and WH,k
t are independent fractional Brownian motions with common Hurst index H ≥ 1/2 for k = 1, . . . , M . The secondary signal h evolves according to:

  
  
∂
∂t h(x, t) = D ∆h(x, t) +
M
X
k=1
1
n
f Xk
t ≥r
o
G x − Xk
t in Ω × R+
h(x, t) = 0 on ∂Ω × R+
(12)
where Ω is a smooth domain, D > 0 is a diffusion constant, and G(x) is a smooth mollification of the Dirac distribution with compact support; see, e.g., Chapter 6 in [52]. In this way, activated cells generate a secondary field that diffuses through the environment and influences remote cells, shifting the system from independent trajectories to coordinated, population-level dynamics. Moreover, throughout this section, we assume that
h(x, 0) = 0 in Ω (13)
Figure 15 illustrates the evolution of the combined field f + h in the one-dimensional, strongly trapping experiment. By the initial condition in Eq. (13), the combined field coincides with the
19

Figure 16: Spatial positions of 100 interacting particles in the presence of a secondary, diffusible signal h at t = 10 for different parameter sets in the strongly trapping experiment. When compared with the results in Fig. 4, one observes a swarming response at the site of the global maximum of the primary signal f .
stationary primary signal f at early times. Only after some trajectories reach the vicinity of the global maximum and initiate secretion of the secondary chemoattractant does f +h begin to deviate from f , signaling the onset of interacting dynamics. The panels highlight the influence of the Hurst index H. Over the interval [0, 20], the combined field remains nearly unchanged for H = 1/2, whereas larger values of H accelerate the first encounters with the primary chemoattractant source and induce -
a more rapid rise of the diffusible signal h, sharpening the effective landscape near the global maximum. Figure 16 shows the positions of 100 interacting particles at t = 10 in the strongly trapping regime. Compared with the independent case (Fig. 4), two effects are evident. First, the robustness conferred by larger Hurst indices persists, as temporal correlations continue to facilitate escape
20

Figure 17: Comparison of the histograms for the hitting time distributions in Fig. 7 (in blue) with the corresponding histograms for the interacting-particles system (in orange) in the weakly trapping experiment.
Figure 18: Comparison of the histograms for the hitting time distributions in Fig. 8 (in blue) with the corresponding histograms for the interacting-particles system (in orange) in the strongly trapping experiment.
from local maxima. Second, even though the secondary field has only just begun to rise by t = 10 (as seen in Fig. 15), it already enhances recruitment to the global maximum of f , producing an incipient swarming response and reducing occupancy of distant peaks. Figures 17 and 18 compare the empirical hitting-time distributions for the interacting system (orange) with those of the independent baseline (blue) in the weakly and strongly trapping regimes, respectively. In both cases, the presence of t-
he secondary cue shifts probability mass toward shorter hitting times and increases the fraction of trajectories that reach the global maximum within the observation window. The labels Ind and Int beneath the panels denote the total number of successful trajectories in the independent- and interacting-particle simulations, respectively, providing a direct measure of the recruitment effect induced by secondary signaling.
21

Figure 19: Time evolution of the combined chemoattractant field f + h for different values of the Hurst index H in the weakly trapping experiment. The trajectories in red correspond to sample paths for which f (Xτ ) < r at τ = 20 (see text for more details).
An additional distinction from the independent-particle simulations of Sections 3.1 and 3.2 is that, in the interacting framework, cells do not terminate their motility upon reaching regions where the primary signal exceeds the threshold r. Instead, they continue their chemotactic program, where the secondary signal h plays a central role in maintaining cells within the vicinity of the global maximum of f . Figure 19 depicts trajectories that fail to reach the target during the observation interva-
l in the weakly trapping regime. As the panels indicate, this population progressively recedes as the front of the secondary signal advances. The left panel highlights a solitary trajectory that escapes from the global maximum despite the stabilizing influence of h, indicating that while secondary signaling greatly enhances retention, it does not entirely preclude escape.
4 Discussion
The computational experiments presented in this paper provide evidence that temporal correlations in random cell motility, modeled here through fractional Brownian motion, play a functional role in chemotactic navigation. Across Euclidean domains, curved substrates, and scenarios with secondary self-generated cues, superdiffusive motion consistently enhanced the ability of at least one trajectory to reach the global maximum of the primary chemoattractant field. This robustness was observed despite-
 environmental fluctuations, competing local maxima, or geometric constraints, suggesting that memory effects in random motility can improve search efficiency in biologically relevant landscapes. Our analysis of independent particles in Euclidean domains showed that increasing the Hurst index H accelerates escape from local maxima and raises the likelihood that a trajectory reaches the global maximum within a fixed observation window. These findings are consistent with experimental observations of-
 superdiffusive behavior in fibroblasts, epithelial cells, neutrophils, and other systems, where temporal correlations in motility have been linked to effective exploration of complex environments. At the same time, we observed that strong persistence may occasionally delay arrival, either by reinforcing motion away from the source or by sustaining unusually small increments along the correct direction. Nevertheless, at the population level, the dominant effect of long-range correlations was an ov-
erall acceleration of the search process.
22

When substrate geometry was introduced, the interplay between curvature-induced biases and temporally correlated noise revealed a similar pattern. On paraboloid substrates, geometric effects promoted circumferential motion that hindered progress toward the source, yet higher values of H mitigated this constraint, allowing trajectories to cross level sets and approach the global maximum. This demonstrates that persistence not only confers robustness against noisy chemotactic fields but also counte-
rbalances directional biases imposed by geometry, broadening the relevance of our findings to settings where topography and curvature influence cell behavior. Finally, incorporating secondary chemotactic cues transformed the system from one of independent explorers to a coupled population. Once a subset of trajectories reached the source and secreted the secondary signal, recruitment of additional particles accelerated, leading to swarminglike behavior. Comparison of hitting-time distributions sho-
wed that this cooperative mechanism amplifies the benefits of temporal correlations, shifting probability mass toward shorter times and increasing the fraction of successful trajectories. These results align with well-established biological relay mechanisms, such as cAMP signaling in Dictyostelium and LTB4-mediated swarming in neutrophils, and underscore how cell populations can exploit both intrinsic motility correlations and intercellular communication to achieve robust collective navigation. Be-
yond biological implications, these findings also have relevance for optimization and sampling. Fractional Brownian motion, by balancing persistence with stochastic exploration, provides a mechanism for escaping local maxima while ensuring global discovery within finite time horizons. The addition of interacting dynamics via secondary signaling resembles distributed algorithms in which local discoveries are broadcast to accelerate collective convergence. Together, these perspectives suggest that s-
tructured stochasticity may be leveraged not only in cell biology but also in computational settings where robustness to noise and efficiency of exploration are critical.
Appendix 1: Fractional Brownian motion in local coordinates
In this appendix, we derive Eq. (9) in local coordinates under the assumptions χ = 0, σ = 1, and H > 1/2. The general expression in Eq. (9) follows from this special case together with the expression for the intrinsic gradient in Section 2.2. Throughout, all stochastic differentials are understood in the Young sense [47]. Let M ⊂ RN be a smooth embedded n-dimensional manifold admitting a global chart
φ : U ⊂ Rn −→ M ⊂ RN , x 7−→ y = φ(x).
We denote by
∂jφ(x) = ∂φ
∂xj (x), j = 1, . . . , n,
the coordinate tangent vectors, and equip U with the induced Riemannian metric
gjk(x) = ∂jφ(x), ∂kφ(x) RN .
Let gij(x) denote the components of the inverse matrix g−1(x), and let g−1/2(x) denote the symmetric square root of g−1(x). Consider an n-dimensional Euclidean fractional Brownian motion WH
t with independent components and Hurst index H > 1/2. We define an orthonormal frame along M by
Ek φ(x) =
n
X
j=1
∂jφ(x) g−1/2(x) j
k, k = 1, . . . , n. (14)
23

Each column Ek(φ(x)) is a tangent vector in Tφ(x)M, and {Ek(φ(x))}n
k=1 forms an orthonormal basis of the tangent space. We denote by
E φ(x) = E1 φ(x) · · · En φ(x)
the N × n matrix whose k-th column is Ek(φ(x)). By construction, E(φ(x)) satisfies
E φ(x) ⊤E φ(x) = In, E φ(x) E φ(x) ⊤ = P φ(x) ,
where P (φ(x)) is the orthogonal projection onto the tangent space Tφ(x)M. We then define the fractional Brownian motion BH
t on M as the solution to the Young stochastic differential equation

  
  
dBH
t=
n
X
k=1
Ek BH
t dW H,k
t
BH
0 = βH
0 ∈M
(15)
Note that by construction, dBH
t ∈ TBtH M, and therefore BH
t ∈ M for all t ≥ 0. Now, define the local coordinate process
Xt = φ−1 BH
t ∈ U. (16)
Applying Young’s chain rule (see, e.g., [38]) to (16) yields
dXt = D φ−1 BH
t dBH
t,
where D(φ−1)(y) is the n × N Jacobian matrix of φ−1 at y ∈ M. Substituting (15) gives
dXt = D φ−1 BH
t E BH
t dWH
t.
To compute D(φ−1) E explicitly, we note that at any x ∈ U , the Jacobian of φ satisfies
Dφ(x) = ∂1φ(x) · · · ∂nφ(x) ,
and the induced metric satisfies g(x) = Dφ(x)⊤Dφ(x). Differentiating the identity φ−1(φ(x)) = x gives
D φ−1 φ(x) Dφ(x) = In.
Multiplying both sides on the right by Dφ(x)⊤ and rearranging yields
D φ−1 φ(x) = g−1(x) Dφ(x)⊤.
Substituting E(φ(x)) = Dφ(x) g−1/2(x), we obtain
D φ−1 φ(x) E φ(x) = g−1(x) Dφ(x)⊤Dφ(x) g−1/2(x) = g−1/2(x),
where the last equality follows from the definition of the metric g = Dφ⊤Dφ. Finally, evaluating at x = Xt gives the desired local coordinate formulation:
dXt = g−1/2 Xt dWH
t,
or, componentwise,
dX i
t=
n
X
k=1
g−1/2 i
k Xt dW H,k
t , i = 1, . . . , n. (17)
Equation (17) coincides with Eq. (9) for the special case χ = 0 and σ = 1, and is valid in the Young sense for all H > 1/2.
24

Appendix 2: The inverse square root of the metric tensor
The expressions for the geometric tensors in Section 3.2 can be readily verified. Regarding Eq. (10) as an example, we have:
n
X
k=1
g−1/2 i
k g−1/2 k
j=
n
X
k=1
δi
k − ∂iψ ∂kψ
det(g) + pdet(g)
!
δk
j − ∂kψ ∂jψ
det(g) + pdet(g)
!
=
n
X
k=1
δi
kδk
j−
n
X
k=1
δi
k
∂kψ ∂jψ
det(g) + pdet(g)
−
n
X
k=1
δk
j
∂iψ ∂kψ
det(g) + pdet(g) +
n
X
k=1
∂iψ ∂kψ∂kψ ∂jψ
det(g) + pdet(g)
2
= δij − 2∂iψ ∂jψ
det(g) + pdet(g) + (det(g) − 1)∂iψ ∂jψ
det(g) + pdet(g)
2
= δij + det(g) − 1
(det(g) + pdet(g))2 − 2
det(g) + pdet(g)
!
∂iψ ∂jψ
= δij + (pdet(g) − 1)(pdet(g) + 1)
det(g)(pdet(g) + 1)2 − 2
pdet(g)(pdet(g) + 1)
!
∂iψ ∂jψ
= δij +
pdet(g) − 1
det(g)(pdet(g) + 1) − 2
pdet(g)(pdet(g) + 1)
!
∂iψ ∂jψ
= δij +
pdet(g) − 1 − 2pdet(g)
det(g)(pdet(g) + 1)
!
∂iψ ∂jψ
= δij −
pdet(g) + 1
det(g)(pdet(g) + 1)
!
∂iψ ∂jψ
= δij − ∂iψ ∂jψ
det(g) = gij
Authors’ contributions
G.C.O. and L.B. developed code, ran simulations, visualized and analyzed data and drafted the manuscript; J.D., R.E., A.R., and A.M. edited the manuscript and conceived, designed and coordinated the study.
Funding
A.R. was partially supported by ANID FONDECYT Regular 1210872 and 1250073, ANID FONDEQUIP EMQ210101, and ANID Nu ́cleo Milenio SELFO NCN2024-068. G.C.O., L.B., and A.M. were partially supported by ANID FONDECYT Regular 1221220.
25

References
[1] Philippe V. Afonso, Mirkka Janka-Junttila, Young Jong Lee, Colin P. McCann, Charlotte M. Oliver, Khaled A. Aamer, Wolfgang Losert, Marcus T. Cicerone, and Carole A. Parent. LTB4 is a signal-relay molecule during neutrophil chemotaxis. Developmental Cell, 22(5):1079–1091, 2012.
[2] F. Baudoin and L. Coutin. Self-similarity and fractional Brownian motions on Lie groups. Electronic Journal of Probability, 13(38):1120–1139, 2008.
[3] N. Boumal. An introduction to optimization on smooth manifolds. Cambridge University Press, 2023.
[4] A. Boyarsky, P.B. Noble, and S.C. Peterson. Chemotaxis in vitro. Quantitation of human granulocyte movement using a stochastic differential equation. Biophys J., 16(3):249–259, 1976.
[5] V. Capasso and F. Flandoli. On the mean field approximation of a stochastic model of tumorinduced angiogenesis. Euro. Jnl. of Applied Mathematics, 30:619–658, 2019.
[6] V. Capasso and D. Morale. Stochastic modelling of tumour-induced angiogenesis. J. Math. Biol., 58:219–233, 2009.
[7] Fabio Chalub, Yasmin Dolak-Struss, Peter Markowich, Dietmar Oelz, Christian Schmeiser, and Alexander Soreff. Model hierarchies for cell aggregation by chemotaxis. Mathematical Models and Methods in Applied Sciences, 16(supp01):1173–1197, 2006.
[8] Yunfeng Chen, Xuhui Peng, and Jianliang Zhai. Large deviations for 2D stochastic chemotaxisNavier-Stokes system. Communications on Pure and Applied Analysis, 24(4):559–583, 2025.
[9] Bennett Chow and Yutze Chow. Lectures on Differential Geometry, volume 245 of Graduate Studies in Mathematics. American Mathematical Society, 2024.
[10] Laurent Decreusefond. Selected Topics in Malliavin Calculus. Bocconi & Springer Series. Springer, 2022.
[11] J. Devlin, A. Borowska, D. Husmeier, and J. Mackenzie. Approximate Bayesian inference in a model for self-generated gradient collective cell movement. Comput Stat, 2025.
[12] Peter Devreotes. Dictyostelium discoideum: A model system for cell-cell interactions in development. Science, 245(4922):1054–1058, 1989.
[13] P. Dieterich and et al. Anomalous diffusion and asymmetric tempering memory in neutrophil chemotaxis. PLoS Computational Biology, 18(5):e1010089, 2022.
[14] P. Dieterich, R. Klages, R. Preuss, and A. Schwab. Anomalous dynamics of cell migration. Proceedings of the National Academy of Sciences USA, 105:459–463, 2008.
[15] Alain Durmus and E ́ric Moulines. High-dimensional Bayesian inference via the unadjusted Langevin algorithm. Bernoulli, 25(4A):2854–2882, 2019.
26

[16] Strickland E, Pan D, Godfrey C, Kim JS, Hopke A, Ji W, Degrange M, Villavicencio B, Mansour MK, Zerbe CS, Irimia D, Amir A, and Weiner OD. Self-extinguishing relay waves enable homeostatic control of human neutrophil swarming. Dev Cell, 59(19):2659–2671.e4, 2024.
[17] Michel Emery. Stochastic Calculus in Manifolds. Springer-Verlag, 1989.
[18] R. Erban. Neural networks for learning macroscopic chemotactic sensitivity from microscopic models. Submitted to SIAM Journal on Life Sciences, https://arxiv.org/abs/2509.12131, 2025.
[19] R. Erban and S.J. Chapman. Stochastic Modelling of Reaction-Diffusion Processes. Cambridge Texts in Applied Mathematics. Cambridge University Press, 2020.
[20] R. Erban and H.G. Othmer. From individual to collective behavior in bacterial chemotaxis. SIAM Journal on Applied Mathematics, 65(2):361–391, 2004.
[21] R. Erban and H.G. Othmer. From signal transduction to spatial pattern formation in E. coli: A paradigm for multi-scale modeling in biology. Multiscale Modeling and Simulation, 3(2):362394, 2005.
[22] R. Erban and H.G. Othmer. Taxis equations for amoeboid cells. Journal of Mathematical Biology, 54(6):847–885, 2007.
[23] JA Grogan, AJ Connor, JM Pitt-Francis, PK Maini, and HM Byrne. The importance of geometry in the corneal micropocket angiogenesis assay. PLoS Comput Biol, 14(3):e1006049, 2018.
[24] T. H. Harris, E. J. Banigan, D. A. Christian, C. Konradt, E. D. Tait Wojno, K. Norose, E. H. Wilson, B. John, W. Weninger, A. D. Luster, A. J. Liu, and C. A. Hunter. Generalized Le ́vy walks and the role of chemokines in migration of effector CD8+ T cells. Nature, 486:545–548, 2012.
[25] J. Has ̆kovec and C. Schmeiser. Stochastic particle approximation for measure valued solutions of the 2D Keller-Segel system. J Stat Phys, 135:133–151, 2009.
[26] J. Has ̆kovec and C. Schmeiser. Convergence of a stochastic particle approximation for measure solutions of the 2D Keller-Segel system. Communications in Partial Differential Equations, 36(6):940–960, 2011.
[27] X. He and Y. Jiang. Substrate curvature regulates cell migration. Phys. Biol., 14(3):035006, 2017.
[28] T. Hillen and K.J. Painter. A user’s guide to PDE models for chemotaxis. J Math Bio, 58:183–217, 2009.
[29] Elton P. Hsu. Stochastic Analysis on Manifolds, volume 38 of Graduate Studies in Mathematics. American Mathematical Society, 2002.
[30] H. Huang and J. Qiu. The microscopic derivation and well-posedness of the stochastic KellerSegel equation. J Nonlinear Sci., 31(1):6, 2021.
27

[31] T. Jin and D. Hereld, editors. Chemotaxis: Methods and Protocols, volume 1407 of Methods in Molecular Biology. Springer, New York, 2nd edition, 2016.
[32] D. Katsaounis, M.A.J. Chaplain, and N. Sfakianakis. Stochastic differential equation modelling of cancer cell migration and tissue invasion. J. Math. Biol., 87:8, 2023.
[33] E.F. Keller and L.A. Segel. Initiation of slide mold aggregation viewed as an instability. Journal of Theoretical Biology, 26:399–415, 1970.
[34] E.F. Keller and L.A. Segel. Model for chemotaxis. Journal of Theoretical Biology, 30:225–234, 1971.
[35] Richard H. Kessin. Dictyostelium: Evolution, Cell Biology, and the Development of Multicellularity. Cambridge University Press, 2001.
[36] A.N. Kolmogorov. Wienersche Spiralen und einige andere interessante Kurven im Hilbertschen Raum. C.R. (Doklady) Acad. Sci. URSS (N.S.), 26:115–118, 1940.
[37] N. Korabel, G.D. Clemente, D. Han, and et al. Hemocytes in Drosophila melanogaster embryos move via heterogeneous anomalous diffusion. Communications Physics, 5:269, 2022.
[38] Kestutis Kubilius, Yuliya Mishura, and Kostiantyn Ralchenko. Parameter Estimation in Fractional Diffusion Models. Bocconi & Springer Series. Springer, 2017.
[39] A. Rakhlin M. Raginsky and M. Telgarsky. Non-convex learning via stochastic gradient Langevin dynamics: A nonasymptotic analysis. Proceedings of Machine Learning Research, 65:1674–1703, 2017.
[40] R. Majumdar, A. Tavakoli Tameh, S.B. Arya, and C.A. Parent. Exosomes mediate LTB4 release during neutrophil chemotaxis. PLoS Biology, 19(7):e3001271, 2021.
[41] Natallia Makarava, Stephan Menz, Matthias Theves, Wilhelm Huisinga, Carsten Beta, and Matthias Holschneider. Quantifying the degree of persistence in random amoeboid motion based on the Hurst exponent of fractional Brownian motion. Physical Review E, 90(4):042703, 2014.
[42] B.B. Mandelbrot and J.W Van Ness. Fractional Brownian motions, fractional noises and applications. SIAM Review, 10:422–437, 1968.
[43] S. Mandt, M.D. Hoffman, and D.M. Blei. Stochastic gradient descent as approximate Bayesian inference. J. Mach. Learn. Res., 18(1):4873–4907, 2017.
[44] A. Matzavinos and M. Ptashnyk. Stochastic homogenization of the Keller-Segel chemotaxis system. Nonlinear Analysis, 144:58–76, 2016.
[45] Yu. Mishura and G. Shevchenko. The rate of convergence for Euler approximations of solutions of stochastic differential equations driven by fractional Brownian motion. Stochastics, 80(5):489–511, 2008.
[46] Yuliya Mishura. Stochastic Calculus for Fractional Brownian Motion and Related Processes. Lecture Notes in Mathematics. Springer, 2008.
28

[47] Ivan Nourdin. Selected Aspects of Fractional Brownian Motion. Bocconi & Springer Series. Springer, 2012.
[48] Bernt Øksendal. Stochastic Differential Equations: An Introduction with Applications. Springer, 6th edition, 2013.
[49] Benoıˆt Perthame. Transport Equations in Biology. Frontiers in Mathematics. Birkha ̈user Verlag, 2007.
[50] L. Pieuchot, J. Marteau, A. Guignandon, et al. Curvotaxis directs cell migration through cell-scale curvature landscapes. Nat Commun, 9:3995, 2018.
[51] L.C.G. Rogers and D. Williams. Diffusions, Markov Processes and Martingales, volume Vol. 2. Cambridge University Press, 2 edition, 2000.
[52] P. Sacks. Techniques of Functional Analysis for Differential and Integral Equations. Mathematics in Science and Engineering. Academic Press, 2017.
[53] R.K. Sadhu, M. Luciano, W. Xi, et al. A minimal physical model for curvotaxis driven by curved protein complexes at the cell’s leading edge. PNAS, 121(12):e2306818121, 2024.
[54] D. Selmeczi, S. Mosler, P. H. Hagedorn, N. B. Larsen, and H. Flyvbjerg. Cell motility as persistent random motion: theories from experiments. Biophysical Journal, 89:912–931, 2005.
[55] Angela Stevens. The derivation of chemotaxis equations as limit dynamics of moderately interacting stochastic many-particle systems. SIAM Journal on Applied Mathematics, 61(1):183212, 2000.
[56] Cynthia L. Stokes and Douglas A. Lauffenburger. Analysis of the roles of microvessel endothelial cell random motility and chemotaxis in angiogenesis. J. theor. Biol., 152:377–403, 1991.
[57] H. Takagi, M. J. Sato, T. Yanagida, and M. Ueda. Functional analysis of spontaneous cell movement under different physiological conditions. PLoS ONE, 3(7):e2648, 2008.
[58] Z. Wang, J. Xin, and Z. Zhang. A novel stochastic interacting particle-field algorithm for 3D parabolic-parabolic Keller-Segel chemotaxis system. J Sci Comput, 102:75, 2025.
[59] B. Winkler, I.S. Aranson, and F. Ziebert. Confinement and substrate topography control cell migration in a 3D computational model. Commun Phys, 2:82, 2019.
[60] M. Zayernouri and A. Matzavinos. Fractional Adams-Bashforth/Moulton methods: An application to the fractional Keller-Segel chemotaxis system. Journal of Computational Physics, 317:1–14, 2016.
29

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:29.009Z
- **Text Length:** 60873 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 29 of 29
