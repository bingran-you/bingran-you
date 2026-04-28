# PDF Document: Pujara and Variano - 2017 - Rotations of small, inertialess triaxial ellipsoids in isotropic turbulence.pdf

**File Path:** Pujara and Variano - 2017 - Rotations of small, inertialess triaxial ellipsoids in isotropic turbulence.pdf

**Processed Date:** 2026-02-10T18:16:59.531Z

**File Size:** 1091.05 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2726

**Title:** Rotations of small, inertialess triaxial ellipsoids in isotropic turbulence

**Collection:** Large Files

---

## Extracted Text Content

arXiv:1611.09901v1 [physics.flu-dyn] 29 Nov 2016
This draft was prepared using the LaTeX style file belonging to the Journal of Fluid Mechanics 1
Rotations of small, inertialess triaxial ellipsoids in isotropic turbulence
Nimish Pujara1†, Evan Variano1
1Department of Civil and Environmental Engineering, University of California, Berkeley, CA 94720, USA
(Received xx; revised xx; accepted xx)
The statistics of rotational motion of small, inertialess triaxial ellipsoids are computed along Lagrangian trajectories extracted from direct numerical simulations of homogeneous isotropic turbulence. The particle angular velocity and its components along the three principal axes of the particle are considered, expanding on the results presented by Chevillard & Meneveau (2013). The variance of the particle angular velocity, referred to as the particle enstrophy, is found to increase for particles-
 with elongated shapes. This trend is explained by considering the contributions of vorticity and strain-rate to particle rotation. It is found that the majority of particle enstrophy is due to fluid vorticity. Strain-rate-induced rotations, which are sensitive to shape, are mostly cancelled by strainvorticity interactions. The remainder of the strain-rate-induced rotations are responsible for weak variations in particle enstrophy. For particles of all shapes, the majority of the enstrophy is in r-
otations about the longest axis, which is due to alignment between the longest axis and fluid vorticity. The integral timescale for particle angular velocities about each axis reveals that rotations are most persistent about the longest axis, but that a full revolution is rare.
1. Introduction
Jeffery (1922) derived the leading-order equations of motion in the limit of low Reynolds number for a triaxial ellipsoid that is of the same density as the surrounding fluid. The particle translates with the same velocity as the fluid that it displaces, but its rotation differs from the displaced fluid and is governed the local velocity gradients. The applicability of these equations has been verified experimentally (Taylor 1923; Trevelyan & Mason 1951; Anczurowski & Mason 1968; Parsa et al. 2011-
, 2012; Einarsson et al. 2013; Ni et al. 2015) and many studies have employed them to study the behaviour of anisotropic particles in laminar and turbulent flows (Shin & Koch 2005; Parsa et al. 2011; Chevillard & Meneveau 2013; Gustavsson et al. 2014; Byron et al. 2015; Challabotla et al. 2015; Zhao et al. 2015) with applications such as paper manufacturing (Lundell et al. 2011), microbial and plankton ecology (Pedley & Kessler 1992; Guasto et al. 2012), and sediment transport. While most studies -
restrict themselves to axisymmetric ellipsoids, i.e., oblate and prolate spheroids, Chevillard & Meneveau (2013) examined triaxial ellipsoids. They presented statistics of the rate of change of orientation vectors and used these to evaluate stochastic models of the Lagriangian velocity gradient tensor. We are motivated by the desire to understand the interaction of planktonic organisms with their turbulent flow environment. Since a variety of life functions depend on organismal rotation (Kiørboe 2-
008; Guasto et al. 2012), it is important to understand how shape affects particle angular
† Email address for correspondence: pujara@berkeley.edu

2 N. Pujara & E. Variano
velocity, its partioning amongst the particle’s axes, the likelihood of extreme events, and its correlation timescales. In this paper, we address these gaps in the literature. We start in section 2 by introducing the particle-shape parameter space, reviewing the equations for particle rotational motion, and providing methods to solve these equations in turbulent flow. Section 3 presents the statistics of rotational motion of triaxial ellipsoids in homogenous isotropic turbulence and discusses the -
trends of these statistics with variation in particle shape. Section 4 provides the conclusions.
2. Methods
2.1. Triaxial ellipsoids
A diagram of triaxial ellipsoid shape parameters is shown in figure 1. We label the three particle axes such that d3 > d2 > d1 and use the ratios d3/d2 and d2/d1 to describe particle shape. The degree to which a particle is elongated is indicated by d3/d2 and the degree to which a particle is flattened is indicated by d2/d1. Other definitions of the parameter space are also possible (e.g., Dusenbery 2009; Chevillard & Meneveau 2013), but in our definition, a particle of a given shape holds a uniqu-
e position in the particle-shape parameter space. We explore the particle shapes in the space spanned by [log(d3/d2), log(d2/d1)] ∈ (0 → 1, 0 → 1) while keeping the particle volume constant (d3d2d1 = const.). Particles whose shapes are beyond the boundaries of our parameter space are not expected to show qualitatively different dynamics than those at the boundaries, as suggested by previous results. Specifically, work on the statistics of spheroid rotations have shown that the majority of variatio-
n in the statistics of spheroid rotation in turbulent flows due to a change of shape occurs over a range of aspect ratio 10−1 → 101 (Parsa et al. 2012; Byron et al. 2015).
In applications such as sediment transport, shape effects are commonly described by two single-parameter measures of particle sphericity; these are the Wadell sphericity paramter, Ψ (Wadell 1932), and the Corey shape factor, Φ (e.g., Dietrich 1982). Figure 2 shows how Ψ and Φ are related to the particle-shape parameter space considered here. Ψ is defined as the ratio of the surface area of a volume-matched sphere to the surface area of a particle and Φ is defined as the ratio of the maximum cross--
sectional area of a volume-matched sphere to the maximum cross-sectional area of a particle. Using the expression for the surface area of a triaxial ellipsoid, the inverse of Wadell’s sphericity parameter is given by
Ψ
−1 = 1
2
( d3/d2 d2/d1
)1/3 {
( d3
d1
)−1
+
( d2
d1
) [E(φ, k) sin2 φ + F (φ, k) cos2 φ] sin φ
}
, (2.1)
where
cos φ = d1
d3
; k2 =
( d3
d2
)2 (d2/d1)2 − 1
(d3/d1)2 − 1 , (2.2)
and F (φ, k) and E(φ, k) are the incomplete elliptical integrals of the first kind and second kind, respectively. The Corey shape factor for triaxial ellipsoids is given by
Φ=
( d3
d2
)−1/2 ( d2
d1
)−1
. (2.3)

Rotations of inertialess triaxial ellipsoids in turbulence 3
Figure 1. Left: Nomenclature for triaxial ellipsoids: di are diameters corresponding to particle orientation vectors pi for i = 1, 2, 3 labelled such that d3 > d2 > d1. Right: Triaxial ellipsoids showing part of the parameter space to be explored.
a) b)
Figure 2. Single-parameter shape descriptions shown within the two-parameter shape space defined in figure 1. a) Wadell sphericity parameter, Ψ ; b) Corey shape factor, Φ.
2.2. Evolution of particle orientation
We track the evolution of a particle’s orientation vectors, (p1, p2, p3), in a fixed (unmoving) laboratory reference frame. The time rate of change of the orientation vectors, (p ̇1, p ̇2, p ̇3), is related to the angular velocity of the particle, ωp, by the following kinematic relations:
p ̇1 = ωp × p1, (2.4a)
p ̇2 = ωp × p2, (2.4b)
p ̇3 = ωp × p3. (2.4c)
In the limit of small, inertialess triaxial ellipsoids immersed in a viscous fluid, Jeffery (1922) provided the following equations to describe the rates of rotation of a particle about each of its axes in terms of the local gradients of velocity:
ωp · p1 = 1
2 ω · p1 + λ1
(p2T Sp3
) , (2.5a)
ωp · p2 = 1
2 ω · p2 + λ2
(p3T Sp1
) , (2.5b)
ωp · p3 = 1
2 ω · p3 + λ3
(p1T Sp2
) . (2.5c)

4 N. Pujara & E. Variano
In the above equations, ω = ∇ × u is the fluid vorticity, and S = (1/2)[∇u + (∇u)T ] is the strain-rate tensor given by the symmetric part of the velocity gradient tensor. The symmetric and anti-symmetric parts of the velocity gradient tensor are denoted as ∇u = S + Ω. The shape parameters λi are given by:
λ1 = (d2/d3)2 − 1
(d2/d3)2 + 1 ; λ2 = (d3/d1)2 − 1
(d3/d1)2 + 1 ; λ3 = (d1/d2)2 − 1
(d1/d2)2 + 1 . (2.6)
Jeffery’s (1922) equations, as presented in Eq. (2.5), are in a fixed (unmoving) laboratory reference frame. Combining the rotation of the particle about all three of its axes, the total angular velocity of the particle in the fixed reference frame is given by
ωp = 1
2 ω + λ1p1
(p2T Sp3
) + λ2p2
(p3T Sp1
) + λ3p3
(p1T Sp2
) . (2.7)
Inserting Eq. (2.7) into Eq. (2.4), and employing the identity 1
2 (ω × p) ≡ Ωp, the rate
of change of orientation vectors can be written as
p ̇1 = Ωp1 − λ2p3
(p3T Sp1
) + λ3p2
(p1T Sp2
) , (2.8a)
p ̇2 = Ωp2 + λ1p3
(p2T Sp3
) − λ3p1
(p1T Sp2
) , (2.8b)
p ̇3 = Ωp3 − λ1p2
(p2T Sp3
) + λ2p1
(p3T Sp1
) . (2.8c)
The above equations are the same as those derived by Junk & Illner (2007), and used by Chevillard & Meneveau (2013) and Einarsson (2015). The following section describes how these equations were numerically integrated along particle trajectories in turbulent flow.
2.3. Direct numerical simulations
Data from direct numerical simulations (DNS) of homogeneous isotropic turbulence available from the Johns Hopkins University turbulence database (Perlman et al. 2007; Li et al. 2008) are used to calculate the evolution of particle orientation along particle trajectories. The dataset consists of forced isotropic turbulence on a triply periodic cube of 10243 points over 1024 time samples that span roughly one large-eddy turnover time. The Taylor micro-scale Reynolds number is Reλ ≈ 433 and the ratio-
 of largeeddy turnover time (integral timescale), T , to the Kolmogorov timescale, τη, is given by T ≈ 45τη.
Timeseries of the velocity gradient tensor along 7500 Lagrangian trajectories are extracted and used to integrate the equations for particle orientation, Eq. (2.8). The duration of each trajectory is approximately one large-eddy turnover time. The Lagrangian tracking is done using a second-order Runge-Kutta scheme with a time-step given by ∆tp/τη = 0.009, which is a factor of five smaller than the time-step stored on the dataset. Spatial interpolation is done using sixth-order Lagrange polynomials-
 and interpolation in time is done using cubic Hermite interpolation. Further details of the Lagrangian tracking algorithm can be found in Yu et al. (2012). Using the Lagrangian velocity gradient tensor timeseries, Eqs. (2.8) are numerically integrated using a fourthorder Runge-Kutta scheme. Particles are initialized with random orientations and random positions.

Rotations of inertialess triaxial ellipsoids in turbulence 5
0 10 20 30 40
0.22
0.24
0.26
0.28
0.3
0.32
0.34
0.36
0.38
t/τη
〈
(ω pτ η)2〉
(t)
Figure 3. Variance of particle angular velocity computed at each time-step from the ensemble of 7500 particles for four particle shapes: ◦, sphere (d3/d2 = d2/d1 = 1); , disc (d3/d2 = 1, d2/d1 = 10); △, rod (d3/d2 = 10, d2/d1 = 1); ⋄, triaxial (d3/d2 = d2/d1 = 10). The example error bar in red at t/τη ≈ 12.5 shows the 95% confidence intervals calculated using data only at that time-step for the triaxial case.
3. Results and discussion
3.1. Initial transient period for particle orientation
At t = 0, particles are oriented randomly and there is no correlation between the particle orientation vectors, (p1, p2, p3), and the local velocity gradient tensor, ∇u = S + Ω. Thus, the statistics of particle rotation at t = 0 can be predicted in terms of the Kolmogorov timescale for isotropic turbulence (Shin & Koch 2005; Parsa 2013; Chevillard & Meneveau 2013). With increasing time, particle orientations start to become aligned with the local velocity gradient tensor and the statistics of part-
icle rotation evolve. Figure 3 shows the time evolution of the dimensionless variance of particle angular velocity for four different shapes that occupy the four corners of the particle-shape parameter space. The initial variance of particle angular velocity is higher than its steady-state value, which is reached by t ≈ 5τη. All subsequent results in this paper are calculated from an ensemble average over all particles and over all timesteps for 6τη 6 t 6 45τη. Neglecting data from the intial tran-
sient period removes the influence of the intial conditions on the statistics of particle rotation despite the fact that the equations of motion are derived in the limit of small Reynolds number and small Stokes number (Jeffery 1922).
3.2. Variance and kurtosis of particle angular velocities
The angular velocity of a particle is the vector sum of the components along the particle’s axes. Taking the expectation of this relationship gives the following equation that relates the particle enstrophy, 〈ωp2〉, to the enstrophy about each particle axes:
〈ωp2〉 =
〈
(ωp · p1)2〉
+
〈
(ωp · p2)2〉
+
〈
(ωp · p3)2〉
. (3.1)
We refer to the total dimensionless particle enstrophy and its components along the particle’s axes as
VT =
〈
(ωp)2〉
τη2,
Vp1 =
〈
(ωp · p1)2〉
τη2,

6 N. Pujara & E. Variano
a)
c) d)
b)
Figure 4. Variance of particle angular velocities made dimensionless by the Kolmogorov timescale, τη, shown across the particle-shape parameter space: a) VT ; b) Vp1 ; c) Vp2 ; d) Vp3 .
Vp2 =
〈
(ωp · p2)2〉
τη2,
Vp3 =
〈
(ωp · p3)2〉
τη2,
respectively, and plot the results in Figure 4. The most striking result is that the total enstrophy of particles is only very weakly shape-dependent (figure 4a), but the estrophy for rotation about different axes show strong shape-dependency (figures 4b–d). The shape-dependency shown here replicates and extends results shown by Parsa et al. (2012), Chevillard & Meneveau (2013), and Byron et al. (2015). We see that particle enstrophy increases slightly as particles become elongated (increasing d3/-
d2), but not as they become flattened (increasing d2/d1). This result is explained in section 3.3, where the contributions to particle enstrophy due to vorticity and strain-rate are examined separately. In appendix A we examine the results for particle angular momentum, analogous to the those shown in figure 4 for particle enstrophy, calculated using the momentof-inertia tensor. Neither the particle enstrophy pattern in figure 4a, nor the angular momentum patterns in appendix A, show trends matchi-
ng those of the shape factors Ψ and Φ (figure 2). This indicates that those geometric shape factors are insufficient for describing particle rotation in turbulence. Figures 4b, 4c, and 4d show that Vp3 > Vp2 > Vp1 for all shapes. Since the total enstrophy is almost shape-independent, it can be concluded that particles of all shapes are most likely to rotate about p3, the longest axis, and least likely to rotate about p1, the shortest axis. Vp1 varies most strongly with d2/d1, its value decreasing -
as d2/d1 increases and particles become more flattened. Vp3 varies most strongly with d3/d2, its value increasing as d3/d2 increases and particles become more elongated. The bulk of the variation in both cases occurs in the range of aspect ratio (d3/d2, d2/d1) = 1 → 2.

Rotations of inertialess triaxial ellipsoids in turbulence 7
a)
c) d)
b)
Figure 5. Kurtosis of particle angular velocities shown across the particle-shape parameter space: a) KT ; b) Kp1 ; c) Kp2 ; d) Kp3 .
While Chevillard & Meneveau (2013) show the rotation of the particle axes, we focus on particle rotation about each axis. For example, Chevillard & Meneveau (2013) show that 〈(p ̇2)2〉τ 2
η = Vp1 + Vp3 is near-constant along the line d3/d2 = d2/d1, while the results in figure 4 show that Vp2 is also near-constant and that there are systematic variations in Vp1 and Vp3 which cancel each other along this line. The kurtosis of the particle angular velocity and its components are given by
KT = 〈ωp4〉〈ωp2〉−2,
Kp1 =
〈
(ωp · p1)4〉〈
(ωp · p1)2〉−2,
Kp2 =
〈
(ωp · p2)4〉〈
(ωp · p2)2〉−2,
Kp3 =
〈
(ωp · p3)4〉〈
(ωp · p3)2〉−2,
and plotted in Figure 5. The kurtosis quantifies the likelihood of extreme events. The value of KT falls within 7 and 10, much higher than the value of 3 for a standard normal distribution. KT also varies much more strongly than VT over the shape space, and shows a different dependence on particle shape. That is, while flattening (increasing d2/d1) does not affect VT , it strongly affects KT . In Figure 5, the data contain some noise due to the slow convergence of higher-order moments, but it can -
be seen that values of Kpi for i = 1, 2, 3 are larger than those of KT regardless of shape. This is relevant to plankton because their sensory organs (e.g., statocysts) are often aligned so as to sense rotation about a single principal axis (Wells 1968; Budelmann 1989). Sensing in this manner, rather than sensing total angular velocity, gives a more leptokurtic signal, which may be

8 N. Pujara & E. Variano
a) b) c)
Figure 6. Fourth moments of particle angular velocities shown across the particle-shape parameter space: a) 〈(ωp · p1)4〉〈
ωp2〉−2; b) 〈(ωp · p2)4〉〈
ωp2〉−2; c) 〈(ωp · p3)4〉〈
ωp 2 〉−2 .
more powerful in guiding behvior. The bulk of the variation in Kp1 and Kp3 occurs in the range of aspect ratio (d3/d2, d2/d1) = 1 → 2, which is a common shape range for planktonic organisms. Interestingly, Kp2 appears to be independent of particle shape. Consistent with the results of Chevillard & Meneveau (2013), the largest value of kurtosis is observed for Kp1 for particles with d3/d2 = 1, d2/d1 ≫ 1, i.e., discs spinning about their axis of symmetry. Spinning discs have the lowest value of enst-
rophy (figure 4b), which means that kurtosis is largest where variance is smallest. This indicates that rotational motion which is less common on average is still subject to large deviations from its mean value. Kurtosis values show a Reynolds number depedency, seen by comparing our data to results in Chevillard & Meneveau (2013) and Parsa et al. (2012). Chevillard & Meneveau (2013) observed a value of Kp1 ≈ 9 for spinning motion of disc-like particles, whereas we observe a value of Kp1 ≈ 20. We a-
lso observe a higher value for the kurtosis of the tumbling motion of rod-like particles, i.e., 〈(p ̇3)4〉/〈(p ̇3)2〉2 ≈ 10.5 for particles with d3/d2 ≫ 1, d2/d1 = 1 (data not plotted). Chevillard & Meneveau (2013) found 6.3 and Parsa et al. (2012) found 7.3. Given that the experimental results of Parsa et al. (2012) match their DNS results, and that the values of particle enstrophy match between all three studies, it appears that the kurtosis values are a function of Reynolds number. Reλ ≈ 125 in C-
hevillard & Meneveau (2013), Reλ ≈ 180 in Parsa et al. (2012) and Reλ ≈ 433 in this study. The kurtosis value seems to increase with Reynolds number, which is consistent with the fact that it is sensitive to the small-scale intermittency in turbulence (Meneveau 2011). To isolate shape effects on the fourth moments from shape effects on the second moments, figure 6 plots the fourth moments made dimensionless by 〈ωp
2〉2. In this case, it can be seen that 〈(ωp·p3)4〉>〈(ωp·p2)4〉>〈(ωp·p1)4〉 for all shapes, indicating that extreme angular velocities are most likely to occur about p3, the longest axis, and least likely to occur about p1, the shortest axis. This is analogous to the trend observed in figure 4 for the variance of angular velocity. However, in the case of the fourth moment, 〈(ωp·p3)4〉 increases with both d3/d2 and d2/d1, and the largest value occurs for very elongated and very flattened triaxial partic-
les (d3/d2 = d2/d1 ≫ 1) rather than being common to all elongated particles (d3/d2 ≫ 1). We can conclude from the results of this section that the mean magnitude of the particle angular velocity is approximately 0.5τη−1, and varies weakly with the value of d3/d2. Of its three axes, a particle of a given shape is most likely to rotate about its longest axis. These results are independent of Reynolds number, or very nearly so, based on comparison with results of Shin & Koch (2005), Parsa et al. (201-
2), and Chevillard

Rotations of inertialess triaxial ellipsoids in turbulence 9
a) b) c)
Figure 7. Alignment of particles’ axes with the direction of local fluid vorticity shown across the particle-shape parameter space and quantified by the median value of |eω · pi|: a) median of |eω · p1|; b) median of |eω · p2|; c) median of |eω · p3|.
& Meneveau (2013). A particle of a given shape is also most likely to experience large angular velocities (≫ 0.5τη−1) about its longest axis, and this likelihood increases with values of both d3/d2 and d2/d1 so that very elongated and very flattened particles are the most likely to experience large angular velocities. The magnitudes of the large angular velocities will depend on Reynolds number, but the trend with particle shape will remain the same.
3.3. Particle rotation due to local vorticity and strain-rate
The trends discussed in the previous section arise due to nonrandom particle orientation with respect to the local velocity gradient tensor. In figure 7, the alignment between the particle’s axes, (p1, p2, p3), and the direction of the local fluid vorticity, eω = ω/|ω|, is shown. Alignment is computed as the median of the distribution of |eω · pi| for i = 1, 2, 3. The probability density functions (PDFs) of |eω · pi| have peaks at 1 or 0; otherwise they are flat. Thus, a median value close to 1 de-
monstrates strong tendency to be aligned, a median value close to 0 demonstrates strong tendency to be orthogonal, and a median value close to 0.5 demonstrates random alignment. For all shapes, there is strong alignment between p3 and vorticity. This tendency becomes even stronger as d3/d2 increases and particles become more elongated. For all shapes, there is also a strong tendency for the vorticity and p1 to be orthogonal. This tendency becomes stronger as d2/d1 increases and particles become mo-
re flattened. The alignment between p2 and vorticity is almost random for all shapes. Particle alignment with vorticity is caused by strain-rate-induced rotations, as can be seen from Eq. (2.5) and Eq. (2.7). These rotations cause the initially randomly orientated particles to approach a statistically steady state of nontrivial alignment. The alignment between p3 and vorticity explains the high values of enstrophy for rotations about p3 for elongated particles seen in figure 4d. The orthogonality -
between p1 and vorticity explains the low values of enstrophy for rotations about p1 for flattened particles seen in figure 4b. This tendency of elongated particles to be aligned with the fluid vorticity is well-known (Shin & Koch 2005; Pumir & Wilkinson 2011; Parsa et al. 2012; Chevillard & Meneveau 2013; Byron et al. 2015) and is explained by the similarities between the equations governing evolution of vorticity, material lines, and elongated particles (Girimaji & Pope 1990; Pumir & Wilkinson 2-
011). The results here show that the same effect occurs for all elongated particles (d3/d2 ≫ 1) regardless of how flattened they are. The degree to which particles are flattened determines the further sub-partitioning of the remaining enstrophy between axes p1 and p2 (figures 4b,c). Apart from causing particles to align with the vorticity, strain-rate-induced rotations

10 N. Pujara & E. Variano
log(d3/d2)
log(d2/d1)
0.02
0.02
0.04
0.04
0.06
0.06
0 0.2 0.4 0.6 0.8 1
0
0.2
0.4
0.6
0.8
1
0
0.02
0.04
0.06
0.08
0.1
Figure 8. Fraction of particle enstrophy due to strain-rate-induced rotations shown across the particle-shape parameter space: (〈ωp2〉−
1
4 〈ω2〉)(〈(ωp)2〉)−1.
also directly affect particle enstrophy. The separate contributions from vorticity and strain-rate can be examined by taking the expectation of the square of Eq. (2.5) to give the following equations:
〈
(ωp · p1)2〉
=1
4
〈
(ω · p1)2〉
+
〈
λ21
(p2T Sp3
)2〉
+
〈λ1 (ωp · p1) (p2T Sp3
)〉 ,(3.2a)
〈
(ωp · p2)2〉
=1
4
〈
(ω · p2)2〉
+
〈
λ22
(p3T Sp1
)2〉
+
〈λ2 (ωp · p2) (p3T Sp1
)〉 , (3.2b)
〈
(ωp · p3)2〉
=1
4
〈
(ω · p3)2〉
+
〈
λ23
(p1T Sp2
)2〉
+
〈λ3 (ωp · p3) (p1T Sp2
)〉 .(3.2c)
In the equations above, the contribution to enstrophy solely from fluid vorticity is given by the first term, the contribution to enstrophy solely from strain-rate is given by the second term, and the third term gives the contribution from the cross-correlation of vorticity-induced rotations and strain-rate-induced rotations. Figure 8 plots the contribution of the second and third terms in Eq. (3.2) to the total particle enstrophy. The variation with shape in figure 8 exactly matches that in figur-
e 4a, which is to be expected since shape effects are only present in the second and third terms in Eq. (3.2. This serves to demonstrate that strain-rate-induced rotations are the cause of the the weak shape-dependency in total particle enstrophy. To explain the pattern seen in figures 4a and 8, we examine the effect of each term in Eq. (3.2) on the enstrophy about each particle axis. Figure 9 shows the contributions of each term for particles which occupy the four corners of the particle-shape pa-
rameter space, whereas figures 10, 11, and 12 plot the fractional contributions from each term across the particle-shape paramter space. The data show that vorticity-induced rotations and strain-rate-induced rotations are anticorrelated. This can be seen in figures 10c, 11c, and 12c, and by the darkest bars in figure 9. This shows that along Lagrangian trajectories in turbulence, particle angular velocities due to strain-rate oppose those due to vorticity, on average. The case of strain-rate worki-
ng against vorticity is familiar from Jeffery’s orbits in simple shear flow, where it causes some phases of the Jeffery’s orbit to be slower than others. In examining the relative importance of vorticity-induced rotations and strain-rateinduced rotations to the tumbling motion of rods (〈(p ̇3)2〉τ2
η =Vp1 +Vp2 for d3/d2 ≫ 1 and

Rotations of inertialess triaxial ellipsoids in turbulence 11
a)
c) d)
b)
Figure 9. Dimensionless particle enstrophy about each axis due to vorticity, strain-rate, and cross-correlation between vorticity and strain-rate: a) disc (d3/d2 = 1, d2/d1 = 10); b) triaxial (d3/d2 = d2/d1 = 10); c) sphere (d3/d2 = d2/d1 = 1); d) rod (d3/d2 = 10, d2/d1 = 1). As expected, the results show that axisymmetric particles (d3/d2 = 1 or d2/d1 = 1) can only be spun about their axis of symmetry by fluid vorticity and therefore strain-rate-induced rotations only contribute to rotations of t-
he axis of symmetry, i.e., tumbling motions.
a) b) c)
Figure 10. Fraction of particle enstrophy for rotations about p1 shown across the particle-shape parameter space: a) due to vorticity alone; b) due to strain-rate alone; c) due to cross-correlation between local vorticity and local strain-rate. The superposition of plots a, b, and c gives a value of 1.
d2/d1 = 1), Ni et al. (2015) observed that the variance of rod tumbling conditioned on
local value of fluid enstrophy, ω2, and dissipation, 2νSijSij, showed the tumbling rate monotonically increased with both fluid enstrophy and dissipation. Thus, they concluded that vorticity-induced rotations and strain-rate-induced rotations contribute equally to the tumbling of rods. However, examining the bottom right corners of the plots in figures 10 and 11, we see that vorticity is responsible for approximately 80% of Vp1 and Vp2 . Ni et al.’s results can be explained by the fact that the fl-
uid enstrophy and dissipation are positively correlated along Lagrangian trajectories (data not plotted, see also Zeff et al. 2003). We noted from figures 5 and 6 that extreme angular velocities are most likely to occur

12 N. Pujara & E. Variano
a) b) c)
Figure 11. Fraction of particle enstrophy for rotations about p2 shown across the particle-shape parameter space: a) due to vorticity alone; b) due to strain-rate alone; c) due to cross-correlation between local vorticity and local strain-rate. The superposition of plots a, b, and c gives a value of 1.
a) b) c)
Figure 12. Fraction of particle enstrophy for rotations about p3 shown across the particle-shape parameter space: a) due to vorticity alone; b) due to strain-rate alone; c) due to cross-correlation between local vorticity and local strain-rate. The superposition of plots a, b, and c gives a value of 1.
about the longest axis, p3, and that larger extremes are more likely as d2/d1 increases and particles become flattened. To explore the cause of this trend, we isolate extreme particle angular velocities by only considering those events whose probability of occuring is less than or equal to 0.1%. The magnitude of these extreme particle angular velocities
is 〈(ωp|Pi > 99.9)2〉 = 48〈ωp2〉 averaged across particles of all shapes. The average value of fluid enstrophy and dissipation during these extreme particle angular velocity events
is 〈(ω|Pi > 99.9)2〉 = 38〈ω2〉 and 〈(ǫ|Pi > 99.9)〉 = 9〈ǫ〉, respectively. This confirms that particles experience large angular velocities in regions of the flow where fluid enstrophy and dissipation are both much higher than their average values. During extreme particle angular velocity events, the pattern of alignment is different than that shown in figure 7. Figure 13 shows the PDF of the alignment between the shortest particle axis, p1, and the eigen-directions of strain-rate conditioned on extre-
me particle angular velocities for particles that occupy the four corners of the particle-shape parameter space. The eigen-directions of strain-rate are labelled such that e1, e2, e3 correspond to the most extensional, intermediate, and most compressional directions, respectively. We choose to show the alignment of the shortest particle axis with the eigen-directions of strain-rate because the shortest axis is expected to show the strongest trends as particles become flattened. To explain figure 1-
3, we first note that since extreme angular velocities are most likely to occur about p3 due to alignment with vorticity and since vorticity tends to be aligned with e2 (Ashurst et al. 1987; Meneveau 2011; Ni et al. 2014), we expect that the shortest particle axis will be orthogonal to e2 for anisotropic

Rotations of inertialess triaxial ellipsoids in turbulence 13
a) b) c)
Figure 13. PDF of alignment between the shortest particle axis and the strain-rate eigen-directions during extreme particle angular velocities: a) |e1 · p1|; b) |e2 · p1|; c) |e3 · p1|. ◦, sphere (d3/d2 = d2/d1 = 1); , disc (d3/d2 = 1, d2/d1 = 10); ⋄, rod (d3/d2 = 10, d2/d1 = 1); △, triaxial (d3/d2 = d2/d1 = 10).
particles. This is indeed observed in figure 13b. Figures 13a and 13c show that the most likely orientation of flattened particles (d2/d1 ≫ 1) during extreme angular velocities is such that the shortest axis bisects the plane spanned by e1 and e3, forming a 45-degree angle with both. In this orientation, |e1 · p1| = |e3 · p1| = cos (π/4) ≈ 0.7. As discussed by Ni et al. (2015) in the context of rotations of rods, the strain-rate-induced rotations are maximised in this orientation. Thus, the alignm-
ent of flattened particles with the strain-rate tensor further increases the magnitudes of their extreme angular velocities compared to particles that are axisymetric about their longest axis. Figure 14 shows the alignment of the shortest axis with the strain-rate tensor during extreme particle angular velocities across the entire particle-shape parameter space via the median values of |ei · p1| for i = 1, 2, 3. As expected, increasing d2/d1 alters the particle orientation during extreme angular v-
elocities and moves it towards the orientation where p1 and p2 both bisect the plane spanned by the most extensional and the most contracting strain-rate directions. Thus, the source of higher values of the fourth moment of flattened particles (d2/d1 ≫ 1) seen in figure 5a is the addition of strain-rate-induced rotations to the already-high values of vorticity-induced rotations about the longest axis in regions of the flow where fluid enstrophy and dissipation are both large. Computing the alignme-
nt of the shortest axis without conditioning on extreme angular velocities shows a different alignment with the strain-rate tensor; the shortest axis is most commongly aligned with e3 (data not plotted here, but consistent with findings of Chevillard & Meneveau 2013). This also explains why the peak in the PDF of |e3 · p1| in figure 13c shows a bias towards higher values than the peak in the PDF of |e1 · p1| in figure 13a. We can conclude from the results of this section that the majority of parti-
cle enstrophy is due to vorticity-induced rotations, but the weak increase in particle enstrophy with the value of d3/d2 is due to the addition of strain-rate-induced rotations about p1 and p2. The largest share of particle enstrophy is in rotations about the longest axis, p3, due to its alignment with vorticity. The increase in the kurtosis of particle angular velocity with the value of d2/d1 is due to contributions of strain-rate-induced rotations about p3. The extremely large particle angular v-
elocities occur when fluid enstrophy and dissipation are both large and the particle orientation maximises strain-rate-induced rotations.
3.4. Persistence of particle rotations
To understand the timescale of particle rotation and how it relates to timescales of turbulent motions at different scales, we exame the two-time autocorrelation function of

14 N. Pujara & E. Variano
a) b) c)
Figure 14. Alignment of particle’s shortest axis with the strain-rate eigen-directions during extreme particle angular velocities shown across the particle-shape parameter space: a) median of |e1 · p1|; b) median of |e2 · p1|; c) median of |e3 · p1|.
particles’ angular velocity. This autocorrelation function about axis pi for i = 1, 2, 3 is given by
ρ(ωp·pi)(s) = 〈(ωp(t) · pi(t)) (ωp(t + s) · pi(t + s))〉
〈
(ωp · pi)2〉 . (3.3)
The autocorrelation functions do not follow a simple exponential decay. This is consistent with the findings of Chevillard & Meneveau (2013), who showed that statistics of particle rotation could not be reproduced with a stochastic model for the velocity gradient tensor that followed a linear Ornstein-Uhlenbeck process, and Shin & Koch (2005), who showed that autocorrelation functions do not follow an exponential decay for fibre rotations. The autocorrelation functions can be used to quantify the -
timescale over which particle angular velocity is persistent about different axes. This is done by computing an integral timescale for particle angular velocity, which is given by the integral of the autocorrelation function (Pope 2000):
Tpi =
∫∞
0
ρ(ωp·pi)(s)ds, (3.4)
for particle angular velocity about axis pi for i = 1, 2, 3. The integral timescales are shown across the particle-shape parameter space in figure 15. The trends show that for all particle shapes, rotations about p3 are not only the most likely (figure 4), but also the most persistent, lasting between 5 and 10 multiples of τη. Conversely, rotations about p1 are the least likely (figure 4) and are also the least persistent, lasting between 2 and 5 multiples of τη. Figure 12 shows that only vorticit-
y-induced rotations are responsible for the particle angular velocity about p3. Therefore, the longer persistence of rotations about p3 is consistent with the persistence of vorticity at the smallest scales (Sreenivasan & Antonia 1997). Figure 10 showed that strain-rate-induced rotations make significant contribution to rotations about p1, especially for shapes that are towards the top right of the particle-shape parameter space. In this case, the shorter persistence of rotations about p1 (figure -
15a) is consistent with the fact that strain-rate is not as persistent as vorticity at the smallest scales (Girimaji & Pope 1990; Pope 1990). Figure 15a shows a similar trend to figure 10a, suggesting that the shape-variation of the integral timescale for rotations about the shortest axis is linked to the relatively contribution of vorticity-induced rotations about this axis. Similarly, figure 15b shows a similar trend to figure 11a, suggesting that the variation in integral timescale for rotation-
s about the intermediate axis is also linked to the relative contribution of vorticity-induced

Rotations of inertialess triaxial ellipsoids in turbulence 15
a) b) c)
Figure 15. Dimensionless integral timescale for particle angular velocity shown across the
particle-shape parameter space: a) Tp1 τη−1; b) Tp2 τη−1; c) Tp3 τη−1.
rotations about the intermediate axis. The shape-variation in the integral timescale for rotations about the longest axis in figure 15c are due to a more subtle effect of strainrate-induced rotations. We see that as elongated particles become flattened (d3/d2 ≫ 1, increasing d2/d1), the integral timescale increases. At the same time, from figure 12a, we see that practically all rotation about the longest axis is due to vorticity and from figure 7c, we see that there is no difference in the median -
alignment between p3 and vorticity for all elongated particles regardless of how flattened they are (d3/d2 ≫ 1). This indicates that although the overall alignment of the longest axis with vorticity is the same for all elongated particles, it is more persistent for elongated particles that are axisymmetric. In other words, elongated particles that are axisymmetric (d3/d2 ≫ 1 and d2/d1 = 1) maintain alignment with vorticity over a longer timescale than elongated particles that are also flattened (d-
3/d2 ≫ 1 and d2/d1 ≫ 1). The role played by strain-rate-induced rotations is to maintain alignment of the particle’s longest axis with vorticity. But while both the longest particle axis and the vorticity vector tend towards alignment with the most extensional direction of strainrate when viewed in a Lagrangian sense, particle rotations lead rather than lag the tilting of the vorticity vector (Ni et al. 2014). Further, the response of vorticity to strainrate-induced tilting and stretching is dampe-
ned by viscous effects, whereas anisotropic and inertialess particles respond to strain-rate instantaneously and without damping. Additionally, we see from Eq. 2.5b and the definition of λ2 that elongated particles that are also flattened are more sensitive to strain-rate-induced rotations about the middle axis, p2, than axisymmetric elongated particles for the same value of d3/d2. It is this extra sensitivity to strain-rate that disrupts the alignment of their longest axis with vorticity and lead-
s to lower integral timescales compared to elongated axisymmetric particles. For plankton, full revolutions about principal axes can be important because they allow for sensing directional environmental cues such as light and gravity (Wells 1968), as well as seascape locations (Fuchs & Gerbi 2016). Herein, however, we see that such motions are rare in turbulence. The number of revolutions that a particle typically completes about each of its axes before the angular velocity decorrelates with itsel-
f can be calculated from the product of the integral timescale and the mean angular velocity. The typical number of revolutions is given by
ni =
Tpi
√ 〈
(ωp · pi)2〉 2π . (3.5)
The results for ni are plotted in figure 16 across the particle-shape parameter space.

16 N. Pujara & E. Variano
a) b) c)
Figure 16. Number of revolutions completed during an integral timescale for angular velocity across the particle-shape parameter space: a) about p1; b) about p2; c) about p3.
They show that, typically, less than one-half of a revolution is completed before the angular velocity becomes decorrelated with itself for any particle axis and for any shape. The variation of ni is slightly different than the variation seen in the integral timescale (figure 15) because it also incorporates the variation in the mean angular velocity (figure 4). We can conclude from the results of this section that particle rotations persist for 210 multiples of τη with rotations about the longest-
 axis persisting the longest. This persistence is due to alignment with vorticity being maintained over a longer time than for other axes. Full revolutions about any of the particle axes are rare events, but are most common about the longest axis for axisymmetric elongated particles. The integral timescales of angular velocity depend on intermittency and hence are likely to be a function of Reynolds number, but the trends with particle shape are most likely independent of Reynolds number.
4. Conclusions
We have thoroughly examined the rotational dynamics of small, inertialess triaxial ellipsoids in homogenous isotropic turbulence with a focus on describing variations with particle shape after particles have reached statistically-steady alignment with the local velocity gradient tensor. Preferential alignment of particles with the local velocity gradient tensor determines the partitioning of the total particle enstrophy such that the majority of the enstrophy is in rotations about the longest axis-
. We find that the total particle enstrophy to be a very weak function of shape. This is because vorticity-strain correlations cancel almost all of the strain-rate contributions, so that the bulk of the particle enstrophy is due to fluid vorticity, which acts equally on particles of all shapes. There is a weak increase in total particle enstrophy for elongated particles, which is due to the residual contribution of strain-rate-induced rotations about the particle’s shortest and intermediate axes. -
This means that the slightly higher enstrophy of rods compared to discs observed by Byron et al. (2015) is due to additional tumbling motion of rods. Particles of all shapes experience angular velocities that are extremely large compared to the mean. These extremely large angular velocities are most likely to occur about the longest axis, and flattened particles are the most likely to experience large extreme angular velocities. These extremes occur when the fluid enstrophy and dissipation are bot-
h large. The integral timescale for particle angular velocities about each axis shows that rotations about the longest axis are the most persistent (linked to the persistence of vorticity at small scales) and rotations about the shortest axis are the least persistent.

Rotations of inertialess triaxial ellipsoids in turbulence 17
Events where particles undergo a full revolution about any of their axes are rare, but occur most frequently for axisymmetric rod-like particles for rotations about their axis of symmetry. Finally, single-parameter descriptions of particle shape, such as the Waddell sphericity parameter and the Corey shape factor, do not to correlate with any of the statistical quantities of particle rotation examined herein. For certain quantities, single-parameter shape descriptions using d3/d2 (how elongated a -
particle is) or d2/d1 (how flattened a particle is) are sufficient to describe overall trends. For example, particle enstrophy depends only on d3/d2, whereas kurtosis of particle angular velocity depends mainly on d2/d1.
Acknowledgements: The authors would like to acknowledge support from the Army Research Office (Grant no. W911NF-16-1-0284). This research also benefited from the use of the Savio computational cluster resource provided by the Berkeley Research Computing program supported by the University of California, Berkeley. The authors would like to thank Charles Meneveau and Laurent Chevillard for encouragement at the beginning of this project, and Greg Voth for illuminating discussions throughout. The colo-
urmap used in the majority of the figures was obtained from https://bids.github.io/colormap/.
Appendix A. Angular momentum and rotational energy
In the Stokesian regime in which the equations of particle motion have been derived, particle inertia and moments of inertia are neglected (Jeffery 1922). Thus, there is no resultant force or torque on the particle and the particle is at equilibrium with the surrounding fluid at all times. We can nonetheless calculate the particle angular momentum and the particle rotational energy a posteriori and examine whether there are any meaningful trends in these quantities. The moment of inertia tensor, I-
, for a triaxial ellipsoid is a diagonal matrix in the co-ordinate system fixed to the particle with values along the diagonal, I11, I22, I33, that are the moments of inertia for rotation about the axes p1, p2, p3, respectively. The dimensionless moment of inertia tensor is given by
I
1
5 ρV 5/3( 3
4π
)2/3 =
( d2/d1 d3/d2
)2/3

    
1+
( d3 d
2
)2 0 0
0
( d2 d
1
)−2 +
( d3 d
2
)2 0
0 0 1+
( d2 d
1
)−2

    
, (A 1)
where the values along the diagonal on the right-hand side of Eq. (A 1) are the dimensionless values of I11, I22, I33, respectively. For particles of all shapes, I11 > I22 > I33. Due to particle anisotropy, the total particle angular momentum and rotational energy is not proportional to the varaince of the angular velocity; different moments of inertia about the different axes need to be considered. The total particle angular momentum is the sum of its components along the particle’s axes. Taking -
the expectation of this relationship gives the following equation
〈
(I ωp )2 〉
= I112 〈
(ωp · p1)2〉
+ I222 〈
(ωp · p2)2〉
+ I332 〈
(ωp · p3)2〉
, (A 2)
which relates the variances of angular velocities about the particle’s axes to the variance

18 N. Pujara & E. Variano
of the total angular momentum of the particle. A similar equation for the rotational energy gives
〈1
2 Iωp2
〉
=1
2 I11
〈
(ωp · p1)2〉
+1
2 I22
〈
(ωp · p2)2〉
+1
2 I33
〈
(ωp · p3)2〉
. (A 3)
Since the total particle enstrophy is a weak function of shape, but the moments of inertia about the particle’s axes are a strong function of shape, we observe that variations in the variance of particle angular momentum and rotational energy are be dominated by the moments of inertia (data not plotted).
REFERENCES
Anczurowski, E & Mason, S G 1968 Particle motions in sheared suspensions. XXIV. Rotation of rigid spheroids and cylinders. Proceedings of The Society of Rheology 12, 209–215.
Ashurst, Wm T, Kerstein, A R, Kerr, R M & Gibson, C H 1987 Alignment of vorticity and scalar gradient with strain rate in simulated Navier–Stokes turbulence. Physics of Fluids 30, 2343. Budelmann, B.-U. 1989 Hydrodynamic Receptor Systems in Invertebrates, pp. 607–631. New York, NY: Springer New York.
Byron, M, Einarsson, J, Gustavsson, K, Voth, G, Mehlig, B & Variano, E 2015 Shapedependence of particle rotation in isotropic turbulence. Physics of Fluids 27, 035101. Challabotla, N R, Zhao, L & Andersson, H I 2015 Shape effects on dynamics of inertia-free spheroids in wall turbulence. Physics of Fluids 27, 061703. Chevillard, L & Meneveau, C 2013 Orientation dynamics of small, triaxial–ellipsoidal particles in isotropic turbulence. Journal of Fluid Mechanics 737, 571–596. Dietrich, W E 1982 Sett-
ling Velocity of Natural Particles. Water Resources Research 18, 1615–1626.
Dusenbery, David B 2009 Living at micro scale: the unexpected physics of being small . Harvard University Press. Einarsson, J 2015 Angular dynamics of small particles in fluids. PhD thesis, University of Gothenburg.
Einarsson, J, Johansson, A, Mahato, S K, Mishra, Y N, Angilella, J R, Hanstorp, D & Mehlig, B 2013 Periodic and aperiodic tumbling of microrods advected in a microchannel flow. Acta Mechanica 224, 2281–2289. Fuchs, H. L. & Gerbi, G. P. 2016 Seascape-level variation in turbulence- and wave-generated hydrodynamic signals experienced by plankton. Progress in Oceanography 141, 109 – 129. Girimaji, S S & Pope, S B 1990 Material-Element Deformation in Isotropic Turbulence. Journal of Fluid Mechanics 220-
, 427–458.
Guasto, J S, Rusconi, R & Stocker, R 2012 Fluid Mechanics of Planktonic Microorganisms. Annual review of fluid mechanics 44, 373–400.
Gustavsson, K, Einarsson, J & Mehlig, B 2014 Tumbling of small axisymmetric particles in random and turbulent flows. Physical review letters 112, 014501. Jeffery, G B 1922 The Motion of Ellipsoidal Particles Immersed in a Viscous Fluid. Proceedings of the Royal Society of London. Series A 102, 161–179.
Junk, M & Illner, R 2007 A New Derivation of Jeffery’s Equation. Journal of Mathematical Fluid Mechanics 9, 455–488. Kiørboe, Thomas 2008 A mechanistic approach to plankton ecology. Princeton University Press.
Li, Y, Perlman, E, Wan, M, Yang, Y, Meneveau, C, Burns, R, Chen, S, Szalay, A & Eyink, G 2008 A public turbulence database cluster and applications to study Lagrangian evolution of velocity increments in turbulence. Journal of Turbulence 9 (N31).
Lundell, F, S ̈oderberg, L D & Alfredsson, P H 2011 Fluid Mechanics of Papermaking. Annual review of fluid mechanics 43, 195–217.
Meneveau, C 2011 Lagrangian Dynamics and Models of the Velocity Gradient Tensor in Turbulent Flows. Annual review of fluid mechanics 43, 219–245.

Rotations of inertialess triaxial ellipsoids in turbulence 19
Ni, R, Kramel, S, Ouellette, N T & Voth, G A 2015 Measurements of the coupling between the tumbling of rods and the velocity gradient tensor in turbulence. Journal of Fluid Mechanics 766, 202–225.
Ni, R, Ouellette, N T & Voth, G A 2014 Alignment of vorticity and rods with Lagrangian fluid stretching in turbulence. Journal of Fluid Mechanics 743, R3. Parsa, S 2013 Rotational dynamics of rod particles in fluid flows. PhD thesis, Wesleyan University.
Parsa, S, Calzavarini, E, Toschi, F & Voth, G A 2012 Rotation Rate of Rods in Turbulent Fluid Flow. Phys. Rev. Lett 109, 134501.
Parsa, S, Guasto, J S, Kishore, M, Ouellette, N T, Gollub, J P & Voth, G A 2011 Rotation and alignment of rods in two-dimensional chaotic flow. Physics of Fluids 23, 043302. Pedley, T J & Kessler, J O 1992 Hydrodynamic Phenomena in Suspensions of Swimming Microorganisms. Annual review of fluid mechanics 24, 313–358.
Perlman, E, Burns, R, Li, Y & Meneveau, C 2007 Data exploration of turbulence simulations using a database cluster. In Supercomputing SC07, ACM, IEEE . Pope, S B 1990 Lagrangian Microscales in Turbulence. Philosophical Transactions of the Royal Society of London Series a-Mathematical Physical and Engineering Sciences 333, 309319. Pope, S B 2000 Turbulent flows. Cambridge university press. Pumir, A & Wilkinson, M 2011 Orientation statistics of small particles in turbulence. New Journal of Physics 1-
3, 093030.
Shin, M & Koch, D L 2005 Rotational and translational dispersion of fibres in isotropic turbulent flows. Journal of Fluid Mechanics 540, 143–173.
Sreenivasan, K R & Antonia, R A 1997 The phenomenology of small-scale turbulence. Annual review of fluid mechanics 29, 435–472.
Taylor, G I 1923 The Motion of Ellipsoidal Particles in a Viscous Fluid. Proceedings of the Royal Society of London. Series A 103, 58–61.
Trevelyan, B J & Mason, S G 1951 Particle motions in sheared suspensions. I. Rotations. Journal of Colloid Science 6, 354–367.
Wadell, H 1932 Volume, shape, and roundness of rock particles. The Journal of Geology 40, 443–451. Wells, M. J. 1968 Sense organs and movement. In Lower animals. McGraw-Hill.
Yu, H, Kanov, K, Perlman, E, Graham, J, Frederix, E, Burns, R, Szalay, A, Eyink, G & Meneveau, C 2012 Studying Lagrangian dynamics of turbulence using on-demand fluid particle tracking in a public turbulence database. Journal of Turbulence 13 (N12). Zeff, B W, Lanterman, D D, McAllister, R, Roy, R, Kostelich, E J & Lathrop, D P 2003 Measuring intense rotation and dissipation in turbulent flows. Nature 421, 146–149. Zhao, L, Challabotla, N R, Andersson, H I & Variano, E A 2015 Rotation of Nonspheri-
cal Particles in Turbulent Channel Flow. Phys. Rev. Lett 115, 244501.

a) b) c

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:59.531Z
- **Text Length:** 51311 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
