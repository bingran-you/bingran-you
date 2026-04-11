# PDF Document: Zhang et al. - 2025 - Directional Pinching-Antenna Systems.pdf

**File Path:** Zhang et al. - 2025 - Directional Pinching-Antenna Systems.pdf

**Processed Date:** 2026-02-10T18:17:07.760Z

**File Size:** 7530.27 KB

**Total Pages:** 14

**Extracted Pages:** 14

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3312

**Title:** Directional Pinching-Antenna Systems

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

1
Directional Pinching-Antenna Systems
Runxin Zhang, Yulin Shao, Yuanwei Liu
Abstract—We propose a directional pinching-antenna system (DiPASS), a comprehensive framework that transitions PASS modeling from idealized abstraction to physical consistency. DiPASS introduces the first channel model that accurately captures the directional, pencil-like radiation of pinching antennas, incorporates a practical waveguide attenuation of 1.3 dB/m, and accounts for stochastic line-of-sight blockage. A key enabler of DiPASS is our new “equal quota division” power allocation strategy, -
which guarantees predetermined coupling lengths independent of antenna positions, thereby overcoming a critical barrier to practical deployment. Our analysis yields foundational insights: we derive closed-form solutions for optimal antenna placement and orientation in single-PA scenarios, quantifying the core trade-off between waveguide and free-space losses. For multi-PA systems, we develop a scalable optimization framework that leverages directional sparsity, revealing that waveguide diversity s-
urpasses antenna density in enhancing system capacity. Extensive simulations validate our analysis and demonstrate that DiPASS provides a realistic performance benchmark, fundamentally reshaping the understanding and design principles for future PASS-enabled 6G networks.
Index Terms—Pinching antennas systems, reconfigurable antenna Systems, 6G, directional radiation, beamforming.
I. INTRODUCTION
The next generation of wireless communication systems, often envisioned as sixth-generation (6G) networks, is expected to deliver unprecedented performance in terms of data rate, reliability, and connectivity density [1]–[3]. Beyond merely scaling up from 5G, 6G aspires to create an intelligent, ubiquitous, and resilient wireless fabric capable of supporting immersive extended-reality (XR) services, tactile Internet, massive Internet of Things (IoT) connectivity, and AI-driven autonomous systems [-
4]–[7]. To satisfy these stringent requirements, future wireless infrastructures must simultaneously achieve ultra-high spectral and energy efficiency, robust coverage, and flexible adaptability in environments characterized by severe mobility, blockage, and multipath effects [5]. A key technological trend underpinning this evolution is the exploitation of higher-frequency spectrum resources [8]–[10]. By pushing carrier frequencies from the sub-6 GHz band to millimeter-wave (mmWave), terahertz (TH-
z), and even optical domains, researchers unlock orders of magnitude more bandwidth for wireless data transmission. However, high-frequency signals suffer from strong propagation loss, susceptibility to obstruction, and poor diffraction, which severely limit link reliability, especially in non-line-of-sight (NLoS) conditions [10]–[12]. Consequently, the performance bottleneck of future wireless systems will not lie in the digital domain but rather
R. Zhang is with the Department of Electronic Engineering, Tsinghua University, Beijing 100084, China. Y. Shao and Y. Liu are with the Department of Electrical and Electronic Engineering, The University of Hong Kong, Hong Kong S.A.R., China. Correspondence: ylshao@hku.hk.
in the physical deployment and reconfiguration of antennas capable of efficiently managing propagation in such hostile environments. To confront these challenges, various reconfigurable and movable antenna architectures have been proposed to endow wireless systems with new physical degrees of freedom. Reconfigurable Intelligent Surfaces (RISs) can shape electromagnetic waves by dynamically adjusting passive reflecting elements [13]–[15]; Fluid Antenna Systems (FASs) enable the antenna aperture to -
physically relocate within a confined space for diversity gain [16]; and Movable Antennas (MAs) allow active elements to slide along tracks to improve spatial coverage [17], [18]. These technologies collectively illustrate an emerging paradigm shift: from static transceiver design to spatially adaptive, environment-aware communication architectures. Within this landscape, the Pinching-Antenna System (PASS) has recently emerged as a particularly promising candidate for 6G mmWave and THz networks [1-
0]–[12]. In contrast to conventional fixed or reflective architectures, PASS utilizes low-cost dielectric waveguides as high-efficiency conduits for electromagnetic energy. Along these waveguides, one or multiple pinching antennas (PAs) can be flexibly activated at desired locations to form radiation points in close proximity to users. This design combines the high-frequency capability of waveguides with the spatial reconfigurability of movable antennas, enabling the radiating site to follow user -
movement or environmental variations. By effectively shortening the free-space propagation distance, PASS significantly mitigates path loss and line-of-sight (LoS) blockage, two dominant impairments in high-frequency communications. The feasibility of PASS was first validated experimentally by NTT Docomo in 2022, where dielectric-waveguide prototypes demonstrated low-loss transmission and localized “pinching” radiation at 60 GHz [19]. Since then, PASS has rapidly evolved from a laboratory curiosit-
y to a recognized research frontier. Numerous works have explored its potential from three complementary perspectives: system modeling, performance optimization, and theoretical analysis: • First, system-modeling studies established analytical frameworks that divide the overall propagation path into inwaveguide and free-space components [11], [12], [20], [21]. These formulations allow the integration of dielectricwaveguide physics with mmWave channel models, paving the way for end-to-end capacity -
analysis. • Second, optimization-oriented research exploited the new controllable degrees of freedom introduced by the PA’s position [10], [22], [23], beamforming [24], and power allocation. Continuous or discrete algorithms have been proposed to maximize received power, sum rate, or fairness, while maintaining computational tractability [23], [25].
arXiv:2511.19133v1 [cs.IT] 24 Nov 2025

2
• Third, performance-analysis works derived closed-form expressions for outage probability, average rate, and spectral efficiency, collectively showing that PASS can outperform traditional fixed-antenna systems and, in certain scenarios, even RIS-assisted networks in terms of spectral efficiency and coverage [11], [26]–[28].
Despite these advances, a pivotal simplification persists across the existing literature: the widespread assumption that a PA radiates as an omni-directional antenna. While this assumption undoubtedly simplifies mathematical modeling, it starkly contradicts the underlying electromagnetic principles. In reality, a PA functions as a leaky-wave antenna (LWA), generating a highly directional, pencil-like beam concentrated in the forward half-space. Overlooking this fundamental anisotropy leads to a si-
gnificant overestimation of the effective radiated power and a distorted representation of interference patterns and true coverage zones. The implications of this “directional oversight” are further amplified when considered alongside other practical constraints. The directional radiation pattern directly interacts with realistic waveguide attenuation, which can be as high as 1.3 dB/m, and the prevalent impact of LoS blockage at high frequencies. An omni-directional model fails to capture the crit-
ical interplay between antenna orientation, energy decay along the waveguide, and the probabilistic nature of the link, leading to potentially misleading system design guidelines. Motivated by this critical gap, this paper undertakes a fundamental re-examination of PASS by placing the directional nature of its radiation at the forefront. We introduce and analyze the directional pinching-antenna system (DiPASS), establishing a comprehensive framework that transitions from idealized abstraction to p-
hysically consistent modeling and optimization. Our main contributions are summarized as follows:
1) We establish the first physically consistent directional channel model for PASS. This model explicitly integrates the directional PA radiation via a Gaussian beam pattern, serving as the foundational element. Built upon this core, we incorporate a practical waveguide attenuation coefficient and stochastic LoS blockage, thereby creating a unified framework for system analysis. Crucially, to overcome the inflexibility of existing multi-PA power allocation schemes, we propose a novel “equal quota -
division” strategy. This scheme leverages the memoryless property of exponential decay, ensuring predetermined coupling lengths regardless of PA positions, thereby resolving a critical barrier to practical PASS deployment. 2) Leveraging the directional model, we uncover the fundamental trade-off governing PASS performance: the competition between in-waveguide attenuation and free-space propagation reliability. For single-PA scenarios, we derive closed-form expressions for the optimal PA placement -
and orientation under directional radiation constraints. More importantly, we establish a necessary condition for the existence of the optimal PA position. These analytical results provide rigorous mathematical guidelines for system design, shifting the paradigm from empirical rules to theory-driven deployment.
...
...
11-th PA l1-th PA L1-st PA
......
... 1n-th PA ln-th PA Ln-th PA
...
LN-th PA
1N-th PA ... lN-th PA ...
0
x
y
z
Base station
1-st User
m-th User M-th User
... ...
1-st Waveguide
n-th Waveguide
N-th Waveguide
Dx
Dz
Dy
Figure 1: Architecture of a typical PASS. The BS employs N dielectric waveguides hosting a total of N L PAs to serve M single-antenna users.
3) For DiPASS with multiple waveguides and PAs, we develop a scalable optimization framework. The highly directional beams naturally transform the complex joint design into a structured PA-user assignment problem, for which we design an efficient hybrid Hungarian-greedy algorithm. This approach enables a systematic comparison of resource allocation strategies, leading to two key design principles: i) waveguide diversity is systematically more effective than antenna density for boosting the system -
sum rate; ii) a clear performance-coverage trade-off exists between beamforming strategies, where weighted minimum meansquare error (WMMSE) beamformer maximizes sum-rate, while zero forcing (ZF) beamformer ensures broader user coverage.
II. SYSTEM MODEL
A. Spatial Configuration
We consider a typical pinching-antenna system in which a base station (BS) is connected to N dielectric waveguides, as illustrated in Fig. 1. The waveguides extend along the y-axis and are uniformly deployed along the x-axis. The physical length of each waveguide is Dy, and the dielectric material introduces an internal attenuation coefficient of αW dB/m. Along each waveguide, L PAs are installed. Both the waveguides and PAs share the same cross-sectional dimensions of aλ × bλ, where λ is the wave-
length. The area served by the PASS infrastructure is modeled as a three-dimensional (3D) box with dimensions Dx × Dy × Dz. Inside this region reside M single-antenna users randomly distributed in space. The coordinate tuple ψ = (x, y, z) is used to describe the positions of waveguides, PAs, and users:
• Waveguide (W): We represent the position of a waveguide by the coordinate of the waveguide entrance: ψ(W)
n= (x(W)
n , y(W)
n , Dz), where n = 1, . . . , N . Since the waveguides extend along the y-axis and are uniformly distributed along the x-axis, we have y(W)
n = 0 and x(W)
n = 2n−1
2N Dx.
• PA (P): For the n-th waveguide, we represent the position of the ln-th PA by the point at which the PA radiates the
signal, with coordinates given by ψ(P)
ln = (x(P)
ln , y(P)
ln , z(P)
ln ), where ln = (n − 1)L + l, l = 1, . . . , L, and n = 1, . . . , N . Since the PAs are mounted on waveguides, their x- and z

3
coordinates should be identical, hence we have x(P)
ln = x(W)
n
and z(P)
ln = Dz.
• User (U): The coordinates of the m-th user are expressed as ψ(U)
m = (x(U)
m , y(U)
m , 0), where m = 1, . . . , M . Users are uniformly distributed.
B. Signal Transmission Model
The signal transmission process begins at the BS, where information intended for the M users is denoted by the vector s = {sm} ∈ CM×1, with E{sm} = 1. To manage multiuser interference, the BS employs a precoding matrix W = [w1, w2, . . . , wM ] = {wn,m} ∈ CN×M with tr W H W = 1. The composite received signal at all users can be expressed as
ξ=
√
P HW s + ν, (1)
where P denotes the total transmit power and ν represents additive white Gaussian noise (AWGN). The overall channel matrix H ∈ CM×N captures the complete transmission path from the BS to the users. To elucidate the unique signal propagation characteristics in PASS, we decompose H into three physically meaningful
components
H = H(P→U)H(W→P)Λ. (2)
In the decomposition,
• Λ is a block-diagonal matrix composed of N all-ones vectors 1(L×1), which distributes the beamforming coefficients from W across the L antennas on each waveguide. • H(W→P) is a diagonal matrix of size N L × N L, characterizing the channel from the waveguide input to the PA radiation points, accounting for waveguide attenuation and phase variations. • H(P→U), with dimensions M ×N L, encapsulates the channel coefficients between the PAs and users, incorporating radiation patterns and propagation e-
ffects.
Focusing on individual user reception, the signal at the m-th user can be decomposed as
ξm =
√ P
N
X
n=1
[H ]m,n
M
X
i=1
[W ]n,isi + νm
≜ Sm + Im + νm, (3)
where [⋆]i,j denote the (i, j)-th element of a matrix and νm ∼ N (0, σ2m). Here, Sm represents the desired signal component, while Im denotes the interference from other users:
Sm =
√ P
N
X
n=1
[H]m,n[W ]n,msm, (4)
Im =
√ P
N
X
n=1
[H ]m,n
M
X
i=1,i̸=m
[W ]n,isi. (5)
While the framework above outlines a general PASS model, achieving a design that is physically consistent and practically relevant requires carefully integrating several key effects. First, this work explicitly models the directional radiation characteristics of PAs. As stated in the Introduction, a PA
operates as a LWA, emitting a pencil-like beam concentrated in the forward half-space (see Fig. 2). Nevertheless, numerous system-level analyses persist in using the omni-directional assumption for mathematical tractability. This oversight leads to inflated performance predictions and misrepresents coverage patterns. Our DiPASS framework is the first to systematically integrate a physically-accurate directional radiation pattern into the PASS channel model. Moreover, to enhance the DiPASS’s practi-
cality, we adopt and integrate more realistic parameters for two critical effects:
• Waveguide attenuation: Unlike existing works that either ignore waveguide attenuation [20], [22], [23] or set a small coefficient (e.g., αW = 0.08 dB/m) [10], [28], [29], this paper adopts the practical attenuation coefficient αW = 1.3 dB/m demonstrated in Docomo’s experimental prototypes [19], thereby advancing PASS modeling closer to realworld implementation. This also allows us to analyze the non-trivial trade-off between in-waveguide and free-space propagation losses in Section IV. • Stochas-
tic LoS blockage: For mmWave communications, LoS blockage is a dominant factor affecting link reliability. To capture this, we introduce a stochastic blockage model where the environment includes independent obstacles that affect the probability of LoS connectivity. This probability is characterized by the existence coefficient αL for the LoS path between PAs and users.
In the following section, we present detailed formulations for H(W→P) and H(P→U) that incorporate these physical considerations.
III. DIPASS CHANNEL MODEL
This section elaborates the detailed channel modeling for DiPASS that addresses the limitations identified above. We separately characterize the channel from the waveguide input to the PA radiation point, accounting for attenuation, phase variations, and coupling efficiency, followed by the channel from the PA radiation point to the user, employing a realistic directional propagation model.
A. Waveguide-to-PA Channel
To accurately model the signal journey from the waveguide input to the PA radiation point, we first incorporate exponential attenuation explicitly in the channel model and propose a new, practical power allocation strategy among PAs that overcomes the inflexibility of existing methods. When multiple PAs are connected to the same waveguide, the distribution of power among them is determined by two key parameters [11], [30]:
• Coupling Coefficient κ: the fraction of guided power extracted per unit interaction distance, mainly determined by the waveguide material. • Coupling Length τln : the physical interval over which the ln-th PA remains adjacent to the l-th waveguide.
Prior works, which often neglected waveguide attenuation, typically adopted either equal power division or proportional power division [11]. However, under the practical condition

4
of exponential signal decay, both schemes require optimizing each PA’s length based on its specific position to achieve the desired power split. This leads to a complex and inflexible design where PA lengths vary inconsistently along the waveguide, making real-world implementation impractical. To resolve this fundamental issue of position-dependent and inflexible design, we propose a more practical scheme named equal quota division.
Definition 1 (Equal Quota Division). For a waveguide feeding L PAs, this scheme allocates to each PA an equal power quota of P/L at the waveguide input. The actual power received by a PA is its initial quota attenuated by the exponential decay from the input to its position.
The critical advantage of this scheme stems from the memoryless property of exponential decay. Since the attenuation at any point depends only on the traversed distance, the amount of power remaining in the waveguide at any PA location is independent of how much power was coupled out by the preceding PAs. Consequently, the coupling length τln required for each PA to extract its 1/L share is determined solely by its sequential order along the waveguide, rather than by its absolute position. This re-
sults in a fixed, predetermined set of coupling lengths {τln }, making the PASS architecture highly flexible and practical for deployment. Building on this scheme, we now formalize the channel model from the waveguide input to the PAs.
Proposition 1 (Waveguide-to-PA Channel). Denote by τln the coupling length of the l-th PA on the n-th waveguide.
1) Under equal quota division, τln depends only on the index l (i.e., the PA’s order along the waveguide) and is given by
τln = 1
κ arcsin
r1
L + 1 − l , ∀n, (6)
where κ is coupling coefficient. For notational clarity, we omit the subscript n and write τln as τl hereafter.
2) The channel matrix H(W→P) is diagonal. Its ln-th element,
h(W→P)
ln , denoting the channel coefficient from the input of the n-th waveguide to its l-th PA, satisfies
h(W→P)
ln =
r1
L e− αW
2 y(P)
ln e−j 2π
λg y(P)
ln . (7)
Proof. We begin by expressing the channel coefficient as
h(W→P)
ln =
l−1
Y
i=1
e− αW
2 y(P)
in −y(P)
(i−1)n
| {z }
(a)
s
1 − sin2(κτi)
| {z }
(b)
| {z }
(c)
·e− αW
2 y(P)
ln −y(P)
(l−1)n sin(κτl) e−j 2π
λ2 y(P)
ln
| {z }
(d)
=
"l−1
Y
i=1
q
1 − sin2(κτi) sin(κτl)
#
· e− αW
2 y(P)
ln e−j 2π
λ2 y(P)
ln , (8)
where (a) represents amplitude attenuation from the (i − 1)
th PA to the i-th PA, and without loss of generality, we set
y(P)
0n = 0; (b) denotes the proportion of power coupled out by the i-th antenna; (c) is the amplitude corresponding to the proportion of power remaining in the waveguide; (d) accounts for the phase shift introduced after traveling a distance of y(P)
ln .
The three reorganized multiplicative terms in (8) correspond to equivalent coupling efficiency, waveguide attenuation, and phase shift inside the waveguide, respectively. For equal quota division, each antenna receives a power share of 1/L. Therefore, for the equivalent coupling efficiency, we have
l−1
Y
i=1
q
1 − sin2(κτin ) sin(κτln ) =
r1
L . (9)
Substituting (9) into (8) yields (7). Then, we prove (6) by mathematical induction. For l = 1, the product term is empty, and the condition reduces to
sin(κτ1) =
r1
L . (10)
Choosing τ1 = 1
κ arcsin
q
1
L satisfies this condition. Assume the condition holds for l = j, i.e.,
j−1
Y
i=1
q
1 − sin2(κτi)
!
sin(κτj) =
r1
L . (11)
From the inductive hypothesis and the coupling length design,
we have
q
1 − sin2(κτi) =
r L−i
L + 1 − i.
Now consider the case for l = j + 1 with τj+1 =
1
κ arcsin
q1
L−j :
Qj i=1
q
1 − sin2(κτi) sin(κτj+1)
=
q
L−1
L · L−2
L−1 · · · L−j
L−j+1 ·
q1
L−j =
q
1
L.
By mathematical induction, the proposed coupling lengths
τl = 1
κ arcsin
q1
L+1−l , l = 1, . . . , L, satisfy the equal quota division condition for all l.
Remark 1. In the ideal case of zero waveguide attenuation (αW = 0), the proposed equal quota division scheme coincides with the conventional equal power division. Under this condition, the model in Proposition 1 ensures that each PA radiates identical signal power, thereby recovering a common assumption in prior work which neglected attenuation.
B. PA-to-User Channel
In real-world deployments, a PA functions as a LWA, exhibiting strongly directional radiation. This fact has often been overlooked by the omnidirectional assumption in system-level analyses for mathematical convenience. In a PASS, the radiation is typically achieved by introducing a specific structure (e.g., a “pinching” mechanism that perturbs the waveguide) which causes the guided wave to gradually leak energy into free space [12]. This physical mechanism inherently produces

5
a pencil-like beam concentrated in the forward half-space, a classical result of waveguide antenna theory [31]. Furthermore, at mmWave frequencies, LoS paths are highly susceptible to blockage by obstacles. Our channel model in this section explicitly incorporates both a physically accurate directional radiation pattern and a stochastic blockage model to capture these essential effects.
1) Directional Radiation Pattern of a PA: To model the directional radiation of a PA, we adopt the foundational Gaussian beam approximation for the fundamental mode of a rectangular dielectric waveguide [30]. This model is wellestablished for describing the beam-like radiation from such structures. The electric field pattern, which characterizes the directional gain, can be described in the PA’s local coordinate frame. When radiated from the origin and along the positive y-axis, the radiation patt-
ern is given by (2.109) in [30]:
Υ (x, y, z) =
r w1w2
W1W2
B exp − x2
W12
+ z2
W22
(12)
−jkn x2
2R1
+ z2
2R2
+ y + j Θ1 + Θ2
2,
where the parameters of the Gaussian beam (W1, W2), (R1, R2), and (Θ1, Θ2) represent the beam radii, radii of curvature, and Gouy phases along the x- and z-axes, respectively:
• The beam radii Wi = λy/(πnwi), i = 1, 2, where n is the refractive index. The initial Gaussian widths satisfy w1/(aλ) = w2/(bλ) = v, where v ≈ 1.1 is an empirical correction factor linked to the normalized waveguide frequency [32]. • Under the far-field approximation, the radii of curvature are taken as R1 = R2 = y. • The Gouy phases are Θi = tan−1 λy/(πnwi) , i = 1, 2. • The normalization constant B ensures RR
xOz |f (x, y, z)|2
dxdz = 1, yielding B2 = 2/(πw1w2).
To utilize this model, we must first determine the user’s position within the PA’s local coordinate frame, with the PA’s boresight aligned to the radiation beam. We define the antenna’s orientation by an elevation angle θln ∈ (π/2, π] (i.e., the angle between the PA’s radiation direction and the positive z-axis) and an azimuth angle φln ∈ (−π, π] (i.e., the angle between the projection of this direction onto the x–y plane and the positive x-axis). Note that θln = π corresponds to the antenna point-
ing vertically downward. The following lemma defines the required coordinate transformation.
Lemma 2 (Coordinate Transformation). The coordinates of the m-th user in the local reference frame of the ln-th PA, denoted as ψ ̃(U)
m,ln = x ̃(U)
m,ln , y ̃(U)
m,ln , z ̃(U)
m,ln , are given by
ψ ̃(U)
m,ln = Rx θln − π
2 Rz
π
2 −φln ψ(U)
m −ψ(P)
ln , (13)
where
Rz(x) =


cos x − sin x 0 sin x cos x 0 0 01

 and Rx(x) =


10 0 0 cos x − sin x 0 sin x cos x


are the rotation matrices around the z-axis and x-axis, respectively.
Proof. The PA’s directional vector nln = (sin θln cos φln , sin θln sin φln , cos θln ) can be obtained by rotating the reference vector (0, 1, 0) via two successive rotations: first by a rotation of ( π
2 −θln ) around the x-axis in the right-hand screw
direction, then by a rotation of (φln − π
2 ) around the z-axis in the right-hand screw direction. This is expressed as
nln (φln , θln ) = Rz φln − π
2 Rx
π
2 − θln


0 1 0

 . (14)
Then, for any point in space, the transformation from global coordinates to local reference frame (i.e., relative coordinates) can be seen as an inverse operation, i.e., first a rotation of − φln − π
2 around the z-axis, followed by a rotation of
−π
2 − θln around the x-axis. This is given by (13).
2) Integrated Channel Gain: With the user’s relative coordinates established, we can now formulate the PA-to-user channel model.
Proposition 3 (PA-to-User Channel). The m-th row and ln-th
column element of H(P→U), denoted by h(P→U)
m,ln , represents the channel coefficient from the ln-th antenna to the m-th user, and is given by
h(P →U)
m,ln = √ηα|ψ(U)
m −ψ(P)
ln |
L Υ x ̃(U)
m,ln , y ̃(U)
m,ln , z ̃(U)
m,ln , (15)
where η = λ2
4π , αL denotes the LoS existence coefficient per meter, Υ is the directional radiation pattern of the PA defined in (12), and x ̃(U)
m,ln , y ̃(U)
m,ln , z ̃(U)
m,ln are the coordinates of the m-th user relative to the ln-th antenna defined in Lemma 2.
Proof. The model constructs the channel coefficient by capturing three physical phenomena: free-space propagation, di
rectional radiation, and stochastic LoS blockage. The term √η is fundamental to electromagnetic propagation and represents the effective aperture of an isotropic receiver, accounting for the basic spatial attenuation of the wavefront in free space. For mmWave frequencies, the presence of a LoS path is probabilistic. Modeling independent blocking events leads to an exponential decay of the LoS probability with distance.
Hence, we incorporate the factor α|ψ(U)
m −ψ(P)
ln |
L , where αL is the existence coefficient per unit distance. Finally, the Υ term incorporates the directional gain of the PA, which is the core physical feature emphasized in this work.
3) Characteristics and System-Level Implications: The highly directional nature of the PA radiation is quantified by its beam divergence angles. In the Fraunhofer region, the divergence angles of the radiation field along the x- and zdirections are expressed as [30]
θx = arctan λ
πnw1
, θz = arctan λ
πnw2
. (16)
By substituting typical parameters n = 1.5, w1 = vaλ = 1.1 × 10 × 10−3, and w2 = vbλ = 1.1 × 6 × 10−3, the corresponding divergence angles are calculated to be θx = 1.11◦ and θz = 1.84◦. This results in an extremely narrow beam. For instance, at a distance of 3 m, the half-power beamwidth therefore covers a region with a diameter of only about 0.1 m.

6
θθ=ππ θθ=5
6ππ θθ = 2
3ππ
aa = 5, bb = 3
aa = 10, bb = 6
aa = 20, bb =12
↓↓ ↓
xx
yy
HH2
(a)
HH2
aa = 5, bb = 3 aa = 10, bb = 6 aa = 20, bb =12
θθ=ππ
θθ=5
6ππ
θθ=2
3ππ
yy
(b)
Figure 2: Radiation patterns for a set of antenna configurations with varying cross-sectional dimensions (5λ × 3λ, 10λ × 6λ, and 20λ × 12λ) and elevation angles (θ = π, 5
6 π, and 2
3 π): (a)
spatial distribution of the power gain |H|2 on the z = 0 plane; (b) variation of the power gain |H|2 along the line aligned with the waveguide axis.
To concretely illustrate the extremely limited coverage area of a single PA, we present in Fig. 2 the radiation patterns for a set of antenna configurations with varying cross-sectional dimensions: 5λ×3λ, 10λ×6λ, and 20λ×12λ. The corresponding elevation angles are set to π, 5
6 π, and 2
3 π, respectively. All antennas are positioned at y = 2 with a fixed azimuth angle of π
2 . Fig. 2(a) presents the spatial distribution of the power
gain |h(W →P )h(P →U)|2 on the z = 0 plane, whereas Fig. 2(b) presents the variation of the power gain magnitude along the line aligned with the waveguide axis.
A key observation is that the effective coverage area of a single PA is highly confined. Even with the smallest simulated cross-section 5λ × 3λ, the effective coverage diameter is less than 1.5 m. This area further shrinks to approximately 0.5 m for a larger 20λ × 12λ cross-section. This is a dramatic departure from the omnidirectional model, which assumes uniform radiation in all directions and would significantly overestimate the coverage and underestimate the potential for inter-user interferen-
ce. This fundamental property justifies a
key system-level assumption in our subsequent analysis: in environments with a user density not exceeding 1 user/m2, each PA can be assumed to serve only a single user, thereby naturally minimizing inter-user interference.
IV. DIPASS OPTIMIZATION AND ANALYTICAL INSIGHTS
The physically consistent model developed in Sections II and III establishes a foundational framework for various PASSenabled applications. In this section, we focus on the application of PASS in wireless communication and address the fundamental problem of sum-rate maximization. The overall optimization problem is formulated as follows:
(P1): max
{y(P)
ln},{θln},{φln},W
r=
M
X
m=1
log2 1+ |Sm|2
|Im|2 +σ2m
, (17a)
s.t. y(P)
1n > 0, (17b)
y(P)
(l+1)n − y(P)
ln ≥ λ2
2 , (17c)
y(P)
Ln ≤ Vy, (17d)
π
2 ≤ θln ≤ π, (17e)
− π < φln ≤ π, (17f)
tr W ⊤W = 1. (17g)
This formulation jointly optimizes the PA positions y(P)
ln , orientations θln , φln , and the precoding matrix W to maximize the sum rate achievable under our physically consistent model. The constraints ensure practical implementation: (17b) ensures positive placement, (17c) maintains minimum antenna spacing to avoid inter-PA coupling, (17d) respects the waveguide length limitation, and (17e)-(17f) bound the orientation angles. Through this optimization framework, we aim to uncover fundamental insights that distinguish our modeling approach from prior-
 work. Specifically, we seek to answer: what new design principles emerge when accounting for physical effects (i.e., directional radiation, waveguide attenuation, and stochastic blockage) that were oversimplified or ignored in previous analyses? The solutions to (P1) will reveal how these physical factors collectively influence optimal PASS deployment strategies and potentially challenge conclusions drawn under idealized assumptions.
A. Fundamental Insights from Single-PA Analysis
To gain fundamental insights into the competing physical effects, we first analyze the most basic scenario with a single user and a single PA, i.e., N = L = M = 1. This setup allows for a closed-form analysis that reveals the core tradeoffs governing PASS performance. For notational simplicity, we omit all subscripts in this subsection, and (P1) reduces to
(P2): max
{y(P)}, {θ}, {φ}
r, (18a)
s.t. (17b), (17d), (17e), (17f). (18b)

7
With a single PA and user, neither phase superposition nor interference occurs. Consequently, the sum-rate optimization can be equivalently written as
max r ⇐⇒ max log2


1 +
√P H (P→U)H (W→P) 2
σ2

 
⇐⇒ max |H|2 ≜ H(P→U)H(W→P) 2
.
Substituting the channel expressions H(P →U) and H(W →P ) from Section III yields
|H |2 = H (P→U)H (W→P) 2
= e−αWy(P) α2
q
(x ̃(U) )2 +(y ̃(U) )2 +(z ̃(U) )2 L
n2v2abλ2
2 y ̃(U) 2
· exp
(
−2(πnv)2 ax ̃(U) 2 + bz ̃(U) 2
y ̃(U) 2
)
. (19)
An illustration of |H|2 versus the PA position yP is given in Fig. 3, wherein users are positioned at y(U) = 2, 5, and 8, respectively. For y(U) = 2, |H|2 decreases monotonically as the PA moves leftward from y = 0, and the rate of decrease transitions from gradual to exponential. In contrast, when y(U) = 5 or 8, |H|2 initially increases before subsequently declining. These results reveal the existence of an optimal PA position that maximizes |H|2. Nevertheless, as indicated by the expression in (-
19), deriving this optimal position analytically remains a nontrivial task. To circumvent this challenge, we employ the logarithmic function to construct a positively correlated term ln |H|2 shown as
ln |H|2 = −αWy(P) + 2 ln(αL) (20)
·
q
x ̃(U) 2 + y ̃(U) 2 + z ̃(U) 2 + ln n2v2abλ2
−2 ln √2y ̃(U) − 2(πnv)2 ax ̃(U) 2 + bz ̃(U) 2
y ̃(U) 2 ,
which transforms the multiplicative relationship into an additive form and facilitates analysis.
To determine the optimal y(P), θ, and φ, we observe that the local coordinates x ̃, y ̃, z ̃ are analytical functions of these optimization variables. We leverage the chain rule via the Jacobian matrix J :

  
∂ ln |H|2 ∂ y (P)
∂ ln |H|2 ∂θ
∂ ln |H|2 ∂φ

  
=

 
∂x ̃ ∂ y (P)
∂y ̃ ∂ y (P)
∂z ̃ ∂ y (P) ∂x ̃ ∂θ
∂y ̃ ∂θ
∂z ̃ ∂θ
∂x ̃ ∂φ
∂y ̃ ∂φ
∂z ̃ ∂φ


·

 
∂ ln |H|2 ∂x ̃
∂ ln |H|2 ∂y ̃
∂ ln |H|2 ∂z ̃

 
≜ J·
h ∂ ln |H|2
∂x ̃ , ∂ ln |H|2
∂y ̃ , ∂ ln |H|2
∂z ̃
i⊤
. (21)
From Lemma 2, we can obtain the explicit expression of J , which is full-rank. Therefore,

  
∂ ln |H|2 ∂ y (P)
∂ ln |H|2 ∂θ
∂ ln |H|2 ∂φ

  
=


0 0 0

⇔

 
∂ ln |H|2 ∂x ̃
∂ ln |H|2 ∂y ̃
∂ ln |H|2 ∂z ̃


=


0 0 0

.
HH2
aa = 5, bb = 3 aa = 10, bb = 6 aa = 20, bb =12
yyU =2
yyP
yyU =5
yyU =8
Figure 3: Variation of the power gain |H|2 with respect to the PA position y(P) under different waveguide cross-sectional dimensions and user positions.
This allows us to solve for the optimal orientation and position separately.
Lemma 4 (Optimal PA Orientation). The optimal orientation angles that maximize the sum rate in (P2) are given by
θ∗ = arctan


q
y(U) − y(P) 2 + x(U) − x(P) 2
z(U) − z(P)

 , (22)
φ∗ = arctan y(U) − y(P)
x(U) − x(P) , (23)
in which case the local coordinates are
x ̃(U) = z ̃(U) = 0, y ̃(U) = ψ(U) − ψ(P) .
Proof. Setting ∂
∂x ̃(U) ln |H|2 = 0 yields


2 ln(αL)
q
x ̃(U) 2 + y ̃(U) 2 + z ̃(U) 2 − 4(πnv)2
y ̃(U) 2 a2

 x ̃(U) = 0.
Since ln(αL) < 0, the first multiplicative term in the above expression is always negative. Moreover, the left-hand side increases when x ̃(U) < 0 and decreases when x ̃(U) > 0.
Therefore, the maximum is attained at x ̃(U) ∗ = 0 when y ̃(U) ̸= 0.
Substituting the specific expression of x ̃(U) ∗ in Lemma 2
into x ̃(U) ∗ = 0, we have
x ̃(U) ∗
= sin φ x(U) − x(P) − cos φ y(U) − y(P) = 0.
Thus, we can solve the optimal φ∗. Similarly, for the second equation ∂
∂z ̃(U) ln |H|2 = 0, we get
z ̃(U) ∗ = 0, when y ̃(U) ̸= 0.
Combining the explicit expression of z ̃(U) ∗ in Lemma 2,
the condition z ̃(U) ∗ = 0, and (23), the optimal value of θ can be derived as
θ∗ = arctan


q
y(U) − y(P) 2 + x(U) − x(P) 2
z(U) − z(P)

.

8
Given x ̃(U) ∗ = z ̃(U) ∗ = 0, the optimal y ̃(U) ∗ is given by
y ̃(U) ∗
= ψ(U) − ψ(P) , (24)
thereby completing the proof.
Lemma 4 indicates an intuitive result: the optimal orientation simply directs the PA’s beam perfectly towards the user to maximize the directional gain. With the optimal orientation
established, we now determine the optimal PA position y(P) ∗ along the waveguide. We first analyze the derivative of the channel gain with respect to y(P):
∂ ln |H|2
∂y(P)
(a=) −αW + ln(αL) · 2 ∂y ̃(U)
∂y(P) − 2 1
y ̃(U)
∂y ̃(U)
∂y(P)
(b=) −αW − 2 ln(αL) y(U) − y(P)
ψ(U) − ψ(P) + 2 y(U) − y(P)
ψ(U) − ψ(P) 2 , (25)
where (a) follows by substituting x ̃(U) ∗ = z ̃(U) ∗ = 0, (b)
follows by substituting y ̃(U) and ∂y ̃(U)
∂y(P) .
Remark 2. We can reasonably assume that y(P) ∗ ∈
(0, y(U)), because if y(P) ∗ > y(U), we can always find a
symmetric position y(P) ′ for the PA with respect to y(U),
such that y(P) ∗−y(U) = y(U)− y(P) ′. The required wireless
space distance is the same, but since y(P) ′ < y(P) ∗, it only needs to travel a shorter distance within the waveguide.
The three terms in (25) represent competing effects:
• The impact of waveguide attenuation: as y(P) increases, the waveguide attenuation steadily increases. • The impact of LOS path existence probability: as y(P) increases, the LOS existence probability increases, causing |H|2 to increase at a decelerating rate. • The impact of transmission in wireless space: as y(P) increases, the distance required for transmission in free space becomes shorter, and the corresponding attenuation decreases.
Thus, there exists a clear trade-off between waveguide loss and wireless propagation reliability. This leads to a necessary condition for the optimal position to exists.
Theorem 5 (Existence of the Optimal PA Position). For a waveguide with attenuation coefficient αW in an environment with LOS existence coefficient αL, the optimal PA position exists only when
αL < exp − αW
2 . (26)
Proof. See Appendix A.
Theorem 5 establishes the quantitative trade-off between waveguide attenuation and wireless propagation reliability. If this condition is not met, any additional distance traveled within the waveguide results only in further energy loss; otherwise, extending the in-waveguide propagation distance can yield a performance gain. The amount of extension that maximizes this gain is characterized in Theorem 6.
Theorem 6 (Optimal PA Position). If the condition in Theorem (5) is satisfied, the optimal PA position is given by
y∗ = max 0, yU − γ∗ , (27)
where
γ∗ =
√A
tan −1−pA+ln αLA2(αW +2 ln αL)
ln αL · A
!
is the optimal horizontal offset of the PA relative to the user, and A = (x(U) − x(P))2 + (z(U) − z(P))2. An approximation of γ∗ is
γ∗ =
s
Aα2
W
(2 ln αL)2 − α2
W
. (28)
Proof. See Appendix B.
Remark 3 (Translation-Invariant Optimal Offset). The optimal horizontal offset of the PA relative to the user, γ∗, is a constant determined solely by the system parameters αW, αL, and the squared lateral distance A between user and waveguide. This reveals a translation-invariant structure: the optimal PA position y∗ always maintains a fixed offset from the user location y(U), implying that the optimal offset does not incur accumulated attenuation as the user moves along the waveguide direction.
Remark 4 (Fundamental Trade-off Governing PA Placement). Theorem 6 quantifies the core trade-off: the optimal PA position shifts away from the user (i.e., y∗ decreases) as waveguide attenuation αW decreases or as the LoS environment improves (larger αL). This is because lower waveguide loss or a less reliable LoS link makes it beneficial to “spend” more distance in the waveguide to get closer to the user in free space.
Remark 5 (Practical Implications for Waveguide Deployment). For a square coverage region of length Dy, even if full-area coverage is required, only a waveguide of length Dy − γ∗ is needed. Alternatively, if the feeding point of the waveguide is placed at its midpoint, a length of Dy − 2γ∗ would suffice. Moreover, by employing segmented waveguides [33], the deployment efficiency can be further improved.
Remark 6 (Reconciliation with Prior Idealized Models). According to (28), when the user is collinear with the waveguide or when the waveguide attenuation coefficient is zero, the optimal position coincides with y(U), which is consistent with the results reported in prior works [11] that assume no attenuation within the waveguide.
B. Multi-PA Optimization Framework
Building upon the fundamental insights from the single-PA analysis, we now address the general sum-rate maximization problem (P1) for systems with multiple waveguides and PAs. Our prior analysis established two key insights:
• The highly directional nature of PA radiation confines its effective coverage, making it practical to assume that each PA primarily serves a single user to minimize inter-user interference.

9
Algorithm 1 Joint Optimization for DiPASS.
Require: {ψ(U)
m }, {ψ(W)
n }, Dy, αW, αL Ensure: M∗, W ∗, {y(P)∗
ln }
1: Initialize H(O) by (29) 2: if M ≥ N L 3: Solve M∗ by Hungarian algorithm with virtual PAs 4: else
5: Initialize M(M) with virtual users 6: for j = 1, . . . , N L − M
7: Greedy allocation for remaining PAs by (33) 8: Update MM+j 9: Verify constraints (17b), (17c), (17d) 10: Phase Fine-Tuning 11: Solve W ∗ by beamforming algorithm 12: return M∗, W ∗, {y(P)∗
ln }
• For any given PA-user pair, the optimal orientation and position that maximize the channel gain have been derived in closed-form in Lemma 4 and Theorem 6, respectively. These premises allow us to recast the complex joint optimization in (P1) into a more tractable PA-user assignment problem. The core idea is to pre-compute the maximum possible channel gain each PA can offer to every user when configured at its optimal position and orientation. We encapsulate these gains into an optimal channel ga-
in matrix H(O) ∈ RM×NL, where each element is given by
h(O)
m,ln =
r1
L e− αW
2 y(P)
ln
∗
α y ̃(U)
m,ln
∗
L
λ 2
nv√2ab
y ̃(U)
m,ln
(29)
· exp −j 2π
λg
y(P)
ln
∗
− jkn y ̃(U)
m,ln
∗
+ j Θ1 + Θ2
2.
This composite channel gain is synthesized from the two channel gain given in Propositions 1 and 3, and the optimal
distance y ̃(U)
m,ln
∗
given in Theorem 6.
With H(O) defined, we formalize the assignment problem by introducing a binary mask matrix M of the same dimensions. An entry Mm,ln = 1 signifies the assignment of PA ln to user m. The constraints ensure a valid matching: each PA is assigned to at most one user (Eq. (30b)), and when resources permit (M ≤ N L), each user is guaranteed service (Eq. (30c)). This leads to the reformulated problem as follows.
(P3): max
M, W F (M) =
M
X
m=1
log2 1+ |qm,1|2
|qm,2|2 +σ2m
, (30a)
s.t.
M
X
m=1
Mm,ln = 1, (30b)
NL
X
ln =1
Mm,ln ≥ 1, (30c)
M ∈ {0, 1}M×NL, (30d)
(17g). (30e)
Here, |qm,1|2 and |qm,2|2 represent the signal and interfer
ence power for user m, respectively:
|qm,1|2 = P
NL
X
ln =1
Mm,ln [H (O)]m,ln [W ]n,m
2
, (31)
|qm,2|2 = P
M
X
i=1,i̸=m
NL
X
ln =1
Mm,ln [H (O)]m,ln [W ]n,i
2
. (32)
This formulation leverages the fact that phase can be adjusted over a 2π range at the wavelength scale with negligible impact on signal intensity. Furthermore, the directional radiation of PAs naturally mitigates interference, allowing individual PA position adjustments for phase alignment. This will be addressed in the final step of our optimization.
1) PA Assignment: The task of solving (P3) is to find the optimal assignment matrix M. As summarized in Algorithm 1, we initialize M as an M × N L all-zero matrix and distinguish two cases: M ≥ N L and M < N L.
In the first case, with users outnumbering PAs, the goal is to select the best N L user-PA pairings. We introduce M − N L virtual PAs with zero channel gain and apply the Hungarian algorithm [34] to the augmented problem, maximizing the sum rate while ensuring each real PA serves one user.
In the first case, users outnumbering PAs. Since each antenna can effectively cover only one user in space, at most N L users can be served simultaneously. To enforce this constraint, we add M −N L virtual PAs with zero channel gain and apply the Hungarian algorithm [34] to the augmented assignment problem for sum rate maximization. The resulting assignment matrix M contains exactly N L columns with a single nonzero entry, thereby achieving the highest possible sum rate under the given constraints-
.
In the second case, where M < N L, we ensure that each user is assigned at least one antenna by first adding (N L−M ) virtual users with zero channel gain, so that the total number of users matches the number of PAs. This allows us to apply the Hungarian algorithm again to obtain the optimal matching. The resulting assignment matrix, denoted by M(M), contains exactly M columns with a single 1, indicating that each real user is assigned one PA in this initial stage.
The remaining antennas can then be allocated iteratively using a greedy algorithm. For each iteration j = 1 to (N L − M ), we start with the current assignment matrix M(M+j−1), which already contains (M + j − 1) assigned PAs. For every unassigned PA ln and each user m, we compute the marginal rate gain obtained by assigning the (M +j)-th PA to that user, which is expressed as follows:
∆r(j)
m = log2
1 + ξ(j)
m
1 + ξ(j−1)
m
!
, (33)
where ξ(j)
m denotes the SINR after incorporating the additional PA. The PA-user pair that yields the maximum ∆r(j)
m is selected, and the assignment matrix is updated as M(M+j) accordingly. After completing all (N L − M ) iterations, the final assignment matrix is obtained, in which all N L PAs have been assigned.

10
The SINR after the j-th assignment is computed as
ξ(j)
m=
P
PN L
ln=1 M(j)
m,ln h(O)
m,ln [W ]n,m
2
P
PM
i=1,i̸=m
PN L
ln=1 M(j)
m,ln h(O)
m,ln [W ]n,i
2
+ σ2m
,
where the summation is taken over all PAs ln = 1 to N L,
but only those with M(j)
m,ln = 1 contribute to the signal and interference terms.
2) Post-Assignment Fine-tuning and Beamforming: The assignment algorithm determines the optimal serving relationship between PAs and users. Based on this assignment, the nominal optimal position for each PA, as derived from Theorem 6, is obtained. However, these nominal positions may not form a physically realizable system configuration. Therefore, we introduce two fine-tuning stages to ensure practicality and maximize performance. First, the independently computed optimal PA positions on the same-
 waveguide may violate the minimum spacing constraint (17c) or exceed the waveguide length limit (17b). To address this, we process each waveguide sequentially: for any PA whose nominal position violates these physical constraints, its position is projected onto the boundary of the feasible region. This ensures that the final configuration is deployable without compromising the assignment solution. Second, when multiple PAs from different waveguides are assigned to the same user, their signals can-
 be coherently combined at the receiver. We exploit this property by finetuning the PA positions at the wavelength scale to further enhance coherent combining gain. According to (29), the phase of the channel is
φ(O)
m,ln = −j 2πn
λ y(P)
ln
∗
−j 2π
λ y ̃(U)
m,ln
∗
+j Θ1 + Θ2
2 . (34)
Therefore, A small displacement ∆yln of the PA induces a phase change of
∆φ(O)
m,ln = −j 2πn
λ − 2π
λ sin θln sin φln ∆yln . (35)
Select the path with the strongest signal to user m as the reference, and align the phases of the remaining paths with it by adjusting each PA within a displacement of one wavelength, ∆yln . If the adjusted PA position violates the distance constraint, it is projected back into the feasible region. Finally, with the physical configuration (PA assignment, positions, and orientations) optimized, the digital precoding matrix W can be computed using established algorithms like WMMSE [35] or ZF [36] to-
 mitigate any residual multi-user interference at the base station. The complete optimization procedure is outlined in Algorithm 1.
V. NUMERICAL RESULTS
This section provides a comprehensive performance evaluation of the proposed directional-PASS framework through extensive numerical simulations. We validate the analytical derivations and demonstrate the system’s capabilities in terms of coverage characteristics and sum-rate optimization. Unless otherwise specified, all simulations are conducted at a carrier
yy∗
ααW
Ana. Appr. ααL = 0.1
ααL = 0.5
ααL = 0.9
Sim.
Figure 4: Optimal y∗ under different combinations of αW and αL, with simulation results, analytical solutions in (27), and simplified approximate expressions in (28).
frequency of 100 GHz, with a waveguide attenuation coefficient of αW = 1.3 dB/m, a LOS existence coefficient of αL = 0.5, and users uniformly distributed on the floor of a 10 m × 10 m × 3 m service volume. The total transmit power is set to 40 W.
A. Single-Antenna Performance Analysis
We begin by examining the fundamental trade-offs in a single-antenna, single-user scenario to validate our theoretical analysis and reveal key physical insights. Fig. 4 compares the optimal PA position y∗ obtained through numerical optimization with our analytical solution in (27) and its approximation in (28). In the comparison, the single user is located at y = 10. It can be observed that (27) accurately captures the variation of the optimal position across different parameter settings. While th-
e approximate solution (28) exhibits some expected deviation, it correctly captures the essential trends of how y∗ varies with system parameters. The results provides an intuitive illustration of how y∗ varies with the three key parameters. The material employed in Docomo’s demonstration is Polytetrafluoroethylene (PTFE) [19], commonly known as Teflon, whose typical attenuation is approximately 1.3 dB/m [32]. For reference, a conventional metallic waveguide exhibits a higher attenuation of about 2-
.4 dB/m. Both attenuation values are indicated in the figure for comparative clarity. When the waveguide attenuation is small, the additional propagation distance inside the waveguide does not incur a significant cost. Similarly, when the LOS existence probability is low, it is preferable to minimize the propagation distance in free space. In both cases, the optimal antenna position tends to be closer to the user. In the extreme case where the waveguide attenuation is zero, the optimal position si-
mplifies to the location closest to the user. The variation of y∗ with different deployment heights is further illustrated in Fig. 5. As the height difference increases, the benefit in wireless transmission distance from the same antenna displacement decreases, reflecting a weaker near-field effect. Consequently, incurring additional propagation loss

11
yy∗
ααW
zz = 3zz =10ααL = 0.1
ααL = 0.3
ααL = 0.5
ααL = 0.7
ααL = 0.9
Figure 5: Variation of y∗ under different deployment heights.
inside the waveguide becomes less cost-effective, leading to a more conservative choice of antenna position. Moreover, y∗ becomes increasingly sensitive to variations in the waveguide attenuation. As shown, when the waveguide attenuation is αW = 1.3 dB/m and the deployment height is z = 3, the optimal antenna position y∗ remains within 7m when the LOS visibility is not less than 0.5. This implies that a 7m-long waveguide is sufficient to provide full coverage for a 10m region. Furthermore, when th-
e deployment height increases to z = 10 and the LOS existence probability exceeds 0.3, extending the waveguide beyond 3m does not yield any additional performance gain. Fig. 6 illustrates the spatial distributions of y∗ and channel gain |H|2 under the single-waveguide and single-antenna configuration. It can be observed that the directional radiation model enables significantly wide coverage within the waveguide length. As shown in Theorem 6, for a given system setup, the optimal relative position-
 remains constant. Along the direction parallel to the waveguide, y∗ varies linearly with the user’s coordinate, allowing approximately 30% of the waveguide length to cover most of the service area. Along the parallel line, the channel power gain |H|2 decreases approximately exponentially, mainly due to the intrinsic attenuation inside the waveguide. The maximum attenuation is around 50 dB, which is comparable to the typical loss of indoor 2.4 GHz WiFi. In contrast, the attenuation of the 100 GHz -
PASS system proposed in this work remains lower than that of conventional WiFi in most regions. Moreover, by guiding the signal closer to the user through the waveguide, the proposed system enhances the likelihood of maintaining a line-of-sight (LOS) connection, while the use of high-frequency signals inherently mitigates multipath interference.
B. Multi-PA System Performance
We now evaluate the multi-PA performance using the optimization framework developed in Section IV-B, comparing WMMSE [29] and ZF [30] beamforming strategies across various system configurations. Fig. 7 reveals several key trends in achievable sum rate under varying waveguide densities, antenna densities, and user densities. The observations are as follows:
xxU
yyU
yy∗
(a)
HH2
xxU
yyU
(b)
Figure 6: The spatial distributions of y∗ and |H|2 under the single-waveguide and single-antenna configuration.
• Increasing the number of waveguides N consistently improves sum rate by providing more independent channels. This benefit is particularly dramatic when N < M , where sum rate grows almost linearly with N , while saturation occurs when N > M due to diminishing diversity returns. • Increasing antennas per waveguide L only benefits systems with excess waveguide diversity (N > M ). When N ≤ M , since multiple antennas on the same waveguide emit mutually coherent signals (differing only by a complex -
constant), increasing L, although allowing more users to be served, introduces additional interference and therefore does not enhance the overall sum rate. • ZF approaches WMMSE performance only under favorable conditions (e.g., N ≥ M or L = 1), where interference can be effectively nullified. In more challenging scenarios, WMMSE significantly outperforms ZF by optimally balancing signal enhancement and interference suppression.
Furthermore, we investigate the number of users that can be effectively served under different system configurations, as shown in Fig. 8. The number of served users is defined as the number of users with non-zero data rates. It can be observed that, for N > M , the WMMSE-based system is capable of serving all users simultaneously. When N ≤ M , however, WMMSE maximizes the sum rate by automatically allocating more power to users with favorable channel conditions, while suppressing the rates of weak-
-channel users to nearly zero. In contrast, the ZF scheme prioritizes serving as many users as

12
LL
NN
sumrate_M2
rr
(a) M = 2
LL
NN
rr
(b) M = 5
LL
NN
rr
(c) M = 10
rr
LL
NN
(d) M = 100
Figure 7: Comparison of the achievable sum rate under different N , L, and M , evaluated using two beamforming matrix design schemes: the solid curves correspond to WMMSE, while the dashed curves correspond to ZF.
# served users
LL
NN
ratio_M2
(a) M = 2
# served users
LL
NN
(b) M = 5
# served users
LL
NN
(c) M = 10
# served users
LL
NN
(d) M = 100
Figure 8: Comparison of the number of users successfully served under different values of N , L, and M using two beamforming matrix design schemes: the solid curves correspond to WMMSE, while the dashed curves correspond to ZF.
possible, albeit at the expense of a lower overall sum rate. Between these two beamforming (BF) design strategies, WMMSE achieves a higher sum rate, whereas ZF provides broader user coverage. As can be observed in Fig. 7, when a single antenna is deployed per waveguide, the ZF scheme can serve at most N users without introducing additional interference. Therefore, the choice between WMMSE and ZF can be flexibly made depending on the system requirements and deployment scenarios.
VI. CONCLUSION
This paper has undertaken a critical shift in the paradigm for modeling and optimizing PASS. By moving beyond the prevalent yet physically inaccurate omni-directional assumption, we have established the DiPASS framework, which places the inherent directional radiation of leaky-wave antennas at the forefront of system design. Our core contribution is a comprehensive and physically consistent channel model that integrates three pivotal realworld factors: a Gaussian beam pattern for directional radia-
tion, a practical waveguide attenuation coefficient, and a stochastic LoS blockage model. A key enabler within this model is the novel “equal quota division” strategy, which resolves a fundamental practical barrier by ensuring predetermined, position-independent coupling lengths for multiple antennas on a single waveguide. While this work has focused on a static channel model, the DiPASS framework opens several promising avenues for future research. The dynamic optimization of PASS in timevarying -
channels with mobile users presents a significant challenge. Furthermore, integrating DiPASS with other emerging
6G technologies, such as integrated sensing and communication and joint communication and computation, could unlock new functionalities. Finally, the exploration of more complex waveguide topologies and multi-band operation remains an open and exciting area. In summary, this work transitions PASS from a proven concept to a physically grounded and practically deployable architecture. By embracing the directional nature of its core components, DiPASS provides a realistic performance benchmark and a -
powerful set of design principles, paving the way for its successful adoption in future 6G and terahertz communication networks.
APPENDIX A
PROOF OF THEOREM 5
To prove Theorem 5, we have to analyze the trade-off between waveguide loss and wireless propagation reliability in (25). To this end, we define a new function
fy(P) (γ) ≜ −αW − 2 ln αL · γ
pA + γ2 + 2γ
A + γ2 ,
where γ ≜ y(U) − y(P) and A ≜ (x(U) − x(P))2 + (z(U) − z(P))2. The derivative of fy(P) with respect to γ is
∂fy(P) (γ)
∂γ = −2 ln αL · ApA + γ2 + 2(A − γ2)
(A + γ2)2 .
The function fy(P) (γ) reaches its extremum points when
∂fy(P) (γ)
∂γ = 0. Since the denominator of ∂fy(P) (γ)
∂γ is always positive, we solve
γ2 = 2A + (ln αL)2A2 ± ln αLAp(ln αL)2A2 + 8A
2.

13
Given that ln αL < 0 and γ2 ≥ 0, we can discard the smaller root. After some mathematical manipulations, we obtain two extremum points of fy(P) (γ) as follows:
γmax =
s
(2A+(ln αL)2A2)−ln αL ·Ap(ln αL)2A2 +8A
2,
γmin = −
s
(2A+(ln αL)2A2)−ln αL ·Ap(ln αL)2A2 +8A
2.
Observing fy(P) (γ), for γmin < 0, we have fy(P) (γmin) < 0.
However, if fy(P) (γmax) < 0, ∂ ln |H|2
∂y(P) < 0 always holds,
meaning that (25) can only achieve its maximum at y(P) = 0.
Therefore, a non-origin optimal solution exists only when f (γmax) > 0. Substituting γmax into the expression for fy(P) (γ), we have
fy(P) (γmax) = −αW − 2 ln αL
·
s
2A + (ln αL)2A2 − ln αL · Ap(ln αL)2A2 + 8A
4A + (ln αL)2A2 − ln αL · Ap(ln αL)2A2 + 8A
+2
q
(2A+(ln αL)2A2)−ln αL·A
√
(ln αL)2A2+8A 2 4A+(ln αL)2A2−ln αL·A
√
(ln αL)2A2+8A 2
(a=) −αW − 2 ln αL
rT
2A + T + 2√2
√T
2A + T , (36)
where we have defined 2A + (ln αL)2A2 − ln αL · A
p(ln αL)2A2 + 8A ≜ T in step (a).
Taking the derivative of T with respect to αL:
∂T ∂αL
= 2A2 ln αL · 1
αL
−1
αL
A
p(ln αL)2A2 + 8A
− (ln αL)2A2 + 8A −1/2 (ln αL)2A3 · 1
αL
.
Since all terms are negative, ∂T
∂αL < 0, indicating that T is
monotonically decreasing with respect to αL. Since T (αL = 1) = 2A, for αL ∈ (0, 1), we always have T > 2A.
Let fαL (αL) = fy(P) (γmax). We now examine the extremum of fαL (αL) with respect to αL:
∂fαL (αL) ∂αL
=− 2
αL
rT
2A + T
− 2A ln αL(2A + T )1/2 − √2(2A − T )
√T (2A + T )2 · ∂T
∂αL
.
Substituting the specific expression for T reveals that
2A ln αL(2A + T )1/2 − √2(2A − T ) = 0. Thus, ∂fαL (αL)
∂αL < 0,
indicating that fαL (αL) is monotonically decreasing with respect to αL. Letting T = uA and taking a specific value αL = exp 2−u
√4+2u√A (for u > 2), we have:
fy(P) (γmax) = −αW + u√2u
2 + u · √1A .
It can be easily shown that fu(u) = u√2u
2+u is an increasing function for u > −2, and for specific αW and A, there exists a feasible u such that f (γmax) < 0. For example, for A > 9
and αW = 1.3, when u = 30,
f (γmax) = −2W + 15√15
8 · √1A < 0.
Thus, when αL > exp 2−u
√4+2u√A u=30
= exp −7
2√A , the
optimal solution remains at the origin. Therefore, at least αL < exp −7
2√A is required, which implies that T > uA = 30A ≫ 2A. Consequently, we can approximate (36) as
fy(P) (γmax) ≈ −αW − 2 ln αL + 2√2
√T
T
(≈a) −αW − 2 ln αL,
where (a) follows from 1
T< 1
30A ≪ αW, for typical values A > 9 and αW = 1.3.
Overall, there exists a non-origin optimal PA position only when f (γmax) > 0. That is,
−αW − 2 ln αL > 0,
which simplifies to (26).
APPENDIX B
PROOF OF THEOREM 6
Following (36) in the proof of Theorem (5), we introduce an intermediate variable by setting γ =
√A cos θ
sin θ > 0 for θ ∈
(0, π/2). Then γ2 = A cos2 θ
sin2 θ . Substituting it into fy(P) , we have
fy(P) (γ) = −αW − 2 ln αL · cos θ + √1A sin(2θ)
(a≈) −αW − 2 ln αL 1 − 1
2 θ2 + √1A · 2θ,
(37)
where (a) follows from the second-order Taylor approximation. The optimal position is achieved when fy(P) (γ) = 0, leading to
−αW − 2 ln αL 1 − 1
2 θ2 + √1A · 2θ = 0.
Since θ > 0, we solve for θ∗:
θ∗ = −1 − pA + ln αLA2(αW + 2 ln αL)
ln αL · A .
Given that γ∗ =
√A cos θ∗
sin θ∗ and γ ≜ y(U) − y(P), we obtain the
optimal PA position in (27). Note that when γ∗ > y(U), we can only take y∗ = max{0, y(U) − γ∗}. Next, we provide a more intuitive approximated solution to analyze the trend of optimal position variation. Considering the second and third terms in (37), we observe that:
−2 ln αL cos θ
√2A cos θ sin θ >
√AαW
2 sin θ >
√AαW
2 > 1.
Therefore, we can reasonably neglect the third term and write
fy(P) (x) ≈ −αW − 2 ln αL cos θ.
Setting fy(P) (x) = 0, the optimal θ∗ can be obtained,
yielding the approximated γ∗ in (28).

14
REFERENCES
[1] S. Dang, O. Amin, B. Shihada, and M.-S. Alouini, “What should 6G be?” Nat. Electron., vol. 3, no. 1, pp. 20–29, Jan. 2020. [2] Y. Liu, S. Zhang, X. Mu, Z. Ding, R. Schober, N. Al-Dhahir, E. Hossain, and X. Shen, “Evolution of NOMA toward next generation multiple access (NGMA) for 6G,” IEEE J. Sel. Areas Commun., vol. 40, no. 4, pp. 1037–1071, Jan. 2022. [3] Y. Shao, Q. Cao, and D. Gu ̈ndu ̈z, “A theory of semantic communication,” IEEE Trans. Mob. Comput., vol. 23, no. 12, pp. 12 211–12 228, Ma-
y 2024. [4] A. H. Ali, J. M. Rasool, A. K. Abd, M. S. Islam, M. Ouda, M. A. Alawad, and M. T. Islam, “A compact dual-band reconfigurable antenna with metamaterial for IoT applications,” Scientific Reports, vol. 15, no. 1, p. 21039, Jul. 2025. [5] C.-X. Wang, Y. Yang, J. Huang, X. Gao, T. J. Cui, and L. Hanzo, “Electromagnetic information theory: Fundamentals and applications for 6G wireless communication systems,” IEEE Wirel. Commun., vol. 31, no. 5, pp. 279–286, May 2024. [6] Y. Shao, D. G ̈und ̈-
uz, and S. C. Liew, “Federated edge learning with misaligned over-the-air computation,” IEEE Trans. Wirel. Commun., vol. 21, no. 6, pp. 3951–3964, Nov. 2021. [7] S. Kim, J. Moon, J. Kim, Y. Ahn, D. Kim, S. Kim, K. Shim, and B. Shim, “Role of sensing and computer vision in 6G wireless communications,” IEEE Wirel. Commun., Jul. 2024.
[8] W. K. Alsaedi, H. Ahmadi, Z. Khan, and D. Grace, “Spectrum options and allocations for 6G: A regulatory and standardization review,” IEEE Open J. Commun. Soc., vol. 4, pp. 1787–1812, Aug. 2023. [9] C.-W. Chow, “Recent advances and future perspectives in optical wireless communication, free space optical communication and sensing for 6G,” Journal of Lightwave Technology, vol. 42, no. 11, pp. 3972–3980, Apr. 2024. [10] Z. Ding, R. Schober, and H. V. Poor, “Flexible-antenna systems: A pinching-an-
tenna perspective,” IEEE Trans. Commun., Mar. 2025. [11] Y. Liu, H. Jiang, X. Xu, Z. Wang, J. Guo, C. Ouyang, X. Mu, Z. Ding, A. Nallanathan, G. K. Karagiannidis et al., “Pinching-antenna systems (PASS): A tutorial,” arXiv preprint arXiv:2508.07572, 2025.
[12] Z. Wang, C. Ouyang, X. Mu, Y. Liu, and Z. Ding, “Modeling and beamforming optimization for pinching-antenna systems,” IEEE Trans. Commun., Oct. 2025. [13] W. Tang, M. Z. Chen, X. Chen, J. Y. Dai, Y. Han, M. Di Renzo, Y. Zeng, S. Jin, Q. Cheng, and T. J. Cui, “Wireless communications with reconfigurable intelligent surface: Path loss modeling and experimental measurement,” IEEE Trans. Wirel. Commun., vol. 20, no. 1, pp. 421439, Sep. 2020. [14] L. Dai, B. Wang, M. Wang, X. Yang, J. Tan, S. Bi, -
S. Xu, F. Yang, Z. Chen, M. Di Renzo et al., “Reconfigurable intelligent surface-based wireless communications: Antenna design, prototyping, and experimental results,” IEEE Access, vol. 8, pp. 45 913–45 923, Mar. 2020. [15] Q. Wu, S. Zhang, B. Zheng, C. You, and R. Zhang, “Intelligent reflecting surface-aided wireless communications: A tutorial,” IEEE Trans. Commun., vol. 69, no. 5, pp. 3313–3351, Jan. 2021. [16] K.-K. Wong, A. Shojaeifard, K.-F. Tong, and Y. Zhang, “Fluid antenna systems,” IEEE T-
rans. Wirel. Commun., vol. 20, no. 3, pp. 1950–1962, Nov. 2020. [17] L. Zhu, W. Ma, and R. Zhang, “Modeling and performance analysis for movable antenna enabled wireless communications,” IEEE Trans. Wirel. Commun., vol. 23, no. 6, pp. 6234–6250, Nov. 2023. [18] R. Zhang, Y. Shao, and Y. C. Eldar, “Polarization aware movable antenna,” IEEE Trans. Wirel. Commun., Nov. 2025.
[19] H. O. Y. Suzuki and K. Kawai, “Pinching antenna: Using a dielectric waveguide as an antenna,” NTT DOCOMO Technical J., vol. 23, no. 3, pp. 5–12, Jan 2022. [20] S. A. Tegos, P. D. Diamantoulakis, Z. Ding, and G. K. Karagiannidis, “Minimum data rate maximization for uplink pinching-antenna systems,” IEEE Wireless Commun. Lett., Mar. 2025.
[21] J. Xiao, J. Wang, M. Zeng, Y. Liu, and G. K. Karagiannidis, “Frequency-selective modeling and analysis for OFDM-integrated wideband pinching-antenna systems,” IEEE Wireless Commun. Lett., Aug. 2025. [22] J.-C. Chen, P.-C. Wu, and K.-K. Wong, “Dynamic placement of pinching antennas for multicast MU-MISO downlinks,” IEEE Open J. Commun. Soc., Jun 2025. [23] K. Wang, C. Ouyang, Y. Liu, and Z. Ding, “Pinching-antenna systems with LoS blockages,” IEEE Wireless Commun. Lett., Sep. 2025.
[24] Z. Wang, G. Zhang, H. Xu, W. Liu, M. Zeng, F. Fang, and D. Niyato, “Joint Transmit and Pinching Beamforming Design for Pinching Antenna-assisted Symbiotic Radio,” arXiv preprint arXiv:2508.07002, 2025. [25] K. Wang, Z. Ding, and R. Schober, “Antenna activation for NOMA assisted pinching-antenna systems,” IEEE Wireless Commun. Lett., Mar. 2025. [26] D. Tyrovolas, S. A. Tegos, P. D. Diamantoulakis, S. Ioannidis, C. K. Liaskos, and G. K. Karagiannidis, “Performance analysis of pinchingantenna sy-
stems,” IEEE Trans. Cogn. Commun. Netw., Apr. 2025.
[27] C. Ouyang, Z. Wang, Y. Liu, and Z. Ding, “Capacity Characterization of Pinching-Antenna Systems,” arXiv preprint arXiv:2506.14298, 2025. [28] M. Samy, H. Al-Hraishawi, M. Alsenwi, A. B. Adam, S. Chatzinotas et al., “Pinching antenna systems versus reconfigurable intelligent surfaces in mmWave,” IEEE Wireless Commun. Lett., Sep. 2025. [29] C. Ouyang, Z. Wang, Y. Liu, and Z. Ding, “Rate region of ISAC for pinching-antenna systems,” arXiv preprint arXiv:2505.10179, 2025. [30] K. Okamoto, Fundame-
ntals of optical waveguides. Elsevier, 2021.
[31] D. R. Jackson, C. Caloz, and T. Itoh, “Leaky-wave antennas,” Proc. IEEE, vol. 100, no. 7, pp. 2194–2206, Mar. 2012.
[32] C. Yeh and F. I. Shimabukuro, The essence of dielectric waveguides. Springer, 2008. [33] C. Ouyang, H. Jiang, Z. Wang, Y. Liu, and Z. Ding, “Uplink and Downlink Communications in Segmented Waveguide-Enabled PinchingAntenna Systems (SWANs),” arXiv preprint arXiv:2509.10666, 2025. [34] C. H. Papadimitriou and K. Steiglitz, Combinatorial optimization: algorithms and complexity. Courier Corporation, 1998. [35] Q. Shi, M. Razaviyayn, Z.-Q. Luo, and C. He, “An iteratively weighted MMSE approach to -
distributed sum-utility maximization for a MIMO interfering broadcast channel,” IEEE Trans. Signal Process., vol. 59, no. 9, pp. 4331–4340, Apr. 2011. [36] A. Wiesel, Y. C. Eldar, and S. Shamai, “Zero-forcing precoding and generalized inverses,” IEEE Trans. Signal Process., vol. 56, no. 9, pp. 4409–4418, Sep. 2008.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:07.760Z
- **Text Length:** 67260 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 14 of 14
