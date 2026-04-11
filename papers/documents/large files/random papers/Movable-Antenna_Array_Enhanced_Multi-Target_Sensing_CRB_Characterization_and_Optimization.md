# PDF Document: Mao et al. - 2025 - Movable-Antenna Array Enhanced Multi-Target Sensing CRB Characterization and Optimization.pdf

**File Path:** Mao et al. - 2025 - Movable-Antenna Array Enhanced Multi-Target Sensing CRB Characterization and Optimization.pdf

**Processed Date:** 2026-02-10T18:18:25.474Z

**File Size:** 1944.49 KB

**Total Pages:** 13

**Extracted Pages:** 13

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3263

**Title:** Movable-Antenna Array Enhanced Multi-Target Sensing: CRB Characterization and Optimization

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

1
Movable-Antenna Array Enhanced Multi-Target
Sensing: CRB Characterization and Optimization
Haobin Mao, Graduate Student Member, IEEE, Lipeng Zhu, Member, IEEE, Wenyan Ma, Graduate Student Member, IEEE, Zhenyu Xiao, Senior Member, IEEE, Xiang-Gen Xia, Fellow, IEEE, and Rui Zhang, Fellow, IEEE
Abstract—Movable antennas (MAs) have emerged as a promising technology to improve wireless communication and sensing performance towards sixth-generation (6G) networks through flexible antenna movement. In this paper, we propose a novel wireless sensing system based on MA arrays to enhance multitarget spatial angle estimation performance. We begin by characterizing the Crame ́r-Rao bound (CRB) matrix for multi-target angle of arrival (AoA) estimation as a function of the antenna’s positions in MA -
arrays, thereby establishing a theoretical foundation for antenna position optimization. Then, aiming at improving the sensing coverage performance, we formulate an optimization problem to minimize the expectation of the trace of the CRB matrix over random target angles subject to a given distribution by optimizing the antennas’ positions. To tackle the formulated challenging optimization problem, the Monte Carlo method is employed to approximate the intractable objective function, and a swarm-bas-
ed gradient descent algorithm is subsequently proposed to address the approximated problem. In addition, a lower-bound on the sum of CRBs for multi-target AoA estimation is derived. Numerical results demonstrate that the proposed MAbased design achieves superior sensing performance compared to conventional systems using fixed-position antenna (FPA) arrays and single-target-oriented MA arrays, in terms of decreasing both CRB and the actual AoA estimation mean square error (MSE). Fundamentally, the -
designed MA array geometry exhibits low correlation and high effective power of sensitivity vectors for multi-target sensing in the angular domain, leading to significant CRB performance improvement. The resultant low correlation of steering vectors over multiple targets’ directions further helps mitigate angle estimation ambiguity and thus enhances MSE performance.
Index Terms—Movable antenna (MA), wireless sensing, antenna position optimization, angle estimation, Crame ́r-Rao Bound (CRB).
I. INTRODUCTION
T
HE envisioned sixth-generation (6G) wireless networks are expected to transcend traditional communication paradigms by integrating sensing as a native functionality, enabling diverse location-aware applications across domains such as autonomous driving, smart cities, and low-altitude economy [1]. In this context, high-precision environmental sensing, encompassing accurate angle/location estimation and extraction of physical information from targets, are anticipated to become essential features of -
next-generation wireless infrastructure [2]. Toward this goal, large-scale antenna arrays
H. Mao and Z. Xiao are with the School of Electronic and Information Engineering and the State Key Laboratory of CNS/ATM, Beihang University, Beijing 100191, China (e-mail: maohaobin@buaa.edu.cn, xiaozy@buaa.edu.cn). (Corresponding authors: Lipeng Zhu and Zhenyu Xiao.)
L. Zhu, W. Ma, and R. Zhang are with the Department of Electrical and Computer Engineering, National University of Singapore, Singapore 117583 (e-mail: zhulp@nus.edu.sg, wenyan@u.nus.edu, elezhang@nus.edu.sg). X.-G. Xia is with the Department of Electrical and Computer Engineering, University of Delaware, Newark, DE 19716, USA (e-mail: xxia@ee.udel.edu).
have been widely explored to enhance wireless sensing performance, albeit with associated increases in hardware cost and power consumption. To mitigate these practical deployment constraints, sparse antenna arrays have been introduced with larger inter-antenna spacing to achieve fine spatial resolution with a reduced number of antenna elements [3], [4]. However, the adoption of fixed-position antennas (FPAs) impedes the full exploitation of the degrees of freedom (DoFs) in the spatial domain, ther-
eby limiting the adaptivity for varying sensing requirements in wireless networks.
To address the above limitations of FPA arrays for wireless sensing, movable antennas (MAs) have recently emerged as a prospective technology to enhance wireless sensing performance via flexible antenna position adjustment [5]–[7], which are also known as fluid antennas [8] or flexible antennas [9]. Compared to conventional fixed-position antenna (FPA) arrays, MA arrays unlock additional DoFs by enabling adaptive antenna positioning within a spatial region. This facilitates substantial sensing per-
formance gains with the same or even reduced number of antennas compared to FPA arrays. Specifically, the effective array aperture can be enlarged through dynamic antenna position adjustment, which directly enhances angle estimation resolution. In addition, the geometry of the MA array can be optimized to suppress grating and side lobes in undesired directions, thereby reducing inter-target coupling and mitigating angle estimation ambiguity [6]. Moreover, the real-time trajectory control of a limi-
ted number of MAs allows the formation of virtual antenna arrays with reconfigurable apertures, offering on-demand support for evolving sensing tasks [7].
In addition to wireless sensing, MAs have also demonstrated superior performance in wireless communication systems. The inception of MA-enabled wireless communication dates back to 2009 [10], where significant spatial diversity gain was obtained via antenna movement within a predefined geographical region. In recent years, especially after 2023, a substantial number of studies have validated the performance advantages of MAs over their FPA counterparts across diverse wireless applications ranging -
from terrestrial communications to unmanned aerial vehicle (UAV) and satellite communications, with the fundamental gains originating from spatial diversity [11]–[14], flexible beamforming [15]–[17], and multiplexing enhancement [18]–[21] via antenna position reconfiguration. As an extension, six-dimensional MA (6DMA) systems incorporating joint antenna position and rotation adjustment have been proposed to further enhance the performance of wireless networks [22]–[24]. As a simplified architectur-
e with antenna rotation only, the rotatable antenna technology has also
arXiv:2511.18907v1 [eess.SP] 24 Nov 2025

2
shown considerable superiority to balance between hardware complexity and system performance [25], [26]. In parallel, research efforts have also been dedicated to acquiring accurate channel state information (CSI) for MA systems in [27]–[29] to enable antenna position/rotation optimization. To further increase the spatial DoFs, extremely large-scale MA (XL-MA) architectures have been proposed by enabling antenna/subarray movement within large regions (e.g., on the order of several to tens of meter-
s) [30], which share a similar idea to the pinching antennas to proactively create line-of-sight (LoS) channels between transceivers and reduce their path loss [31]–[35]. More recently, preliminary efforts have been directed toward deploying MAs in wireless sensing systems, aiming to capitalize on their spatial DoFs for enhanced sensing performance. For instance, the authors in [6] characterized the Crame ́rRao bound (CRB) for single target’s angle of arrival (AoA) estimation, which was then minim-
ized via optimizing MAs’ positions. The authors in [7] extended their work by exploiting the additional time DoF provided by optimizing the MA trajectory to synthesize a large continuous virtual array for improving sensing performance. The authors in [36] optimized the antenna array geometry at both the transmitter and the receiver as well as the signal covariance to minimize the weighted sum of CRBs. Furthermore, the authors in [37] employed MAs for improving both the angle and range estimation p-
erformance in near-field scenarios via antenna position adjustment. Despite these advancements, the above-mentioned works have primarily focused on single-target sensing tasks. Consequently, the solutions proposed in [6], [7], [36], [37] may underperform in multi-target sensing systems. In multi-target scenarios, the estimation for the angle of one target is critically dependent on the angles of other targets, and the inherent coupling effect introduces distinct challenges for MA-aided sensing sys-
tem design. In this context, the authors in [38] maximized the conditional sensing mutual information for multi-target sensing via joint optimization of receive combining, sensing signal covariance matrices, transmit beamforming, and MAs’ positions. The authors in [39] jointly optimized the MAs’ positions, transmit beamforming, and the phase shifts of reconfigurable intelligent surface (RIS) to maximize the beampattern gain in the direction of multiple targets. Although these prior works have demo-
nstrated multi-target sensing performance improvements through MA positioning, the fundamental relationship between MAs’ positions and sensing performance limit for multi-target angle estimation has not been revealed yet. To bridge the above gap, in this paper, we propose to employ an MA array to enhance multi-target sensing performance through array geometry reconfiguration by characterizing the CRB matrix as a function of antennas’ positions. The main contributions of this paper are summarized a-
s follows:
1) We present a novel MA array enhanced multi-target sensing system, where a base station (BS) equipped with an MA array to estimate the spatial AoAs from multiple targets based on the received source signals. First, we derive the CRB matrix for multi-target AoA estimation and characterize it as a function of the antenna positions within the MA array, thereby establishing a theoretical
foundation for antenna position optimization. Then, aiming at improving the sensing coverage performance, we formulate an optimization problem to minimize the expected sum of the CRBs for multi-target AoA estimation (i.e., the trace of the CRB matrix) over random target distributions by optimizing the antennas’ positions. 2) To address the formulated highly non-convex optimization problem, the Monte Carlo method is utilized to approximate the intractable objective function, followed by the develop-
ment of a swarm-based gradient descent algorithm to solve the approximated problem. Furthermore, a lower-bound on the sum of CRBs for multi-target AoA estimation is derived, where we reveal the conditions to achieve this lower-bound. 3) Numerical results validate that the proposed MA-based design achieves superior sensing performance over conventional systems with FPA arrays and single-targetoriented MA arrays, in terms of decreasing both the CRB and the actual AoA estimation mean square error (MS-
E). This is because the optimized MA array geometry exhibits low correlation and high effective power of sensitivity vectors for multi-target sensing in the angular domain, contributing to considerable improvements in the CRB performance. The resultant low correlation of steering vectors over multiple targets’ directions further helps alleviate angle estimation ambiguity and thus leads to significant gains in the MSE performance. These results highlight the significance of our design in enabling h-
igh-precision multi-target angle estimation.
The rest of this paper is organized as follows. In Section II, we present the system model, charecterize the CRB matrix of multi-target AoA estimation MSE, and formulate the optimization problem. In Section III, we propose a swarm-based gradient descent algorithm to solve the formulated problem, where the computational complexity and the performance lower-bound are also analyzed. In Section IV, we provide numerical results to evaluate the performance of our proposed design. Finally, we conclude th-
is paper in Section V.
Notation: a, a, and A denote a scalar, a vector, and a matrix, respectively. (·)T and (·)H denote transpose and conjugate transpose, respectively. RM×N and CM×N denote the sets of real and complex matrices/vectors with dimension M × N , respectively. R{·} and I(·) indicate the real part and the imaginary part of a complex scalar/vector/matrix, respectively. ∥ · ∥2 denotes the l2-norm of a vector. IN denotes the identity matrix with the dimension N × N . en denotes the N dimensional vector with the-
 n-th entry being 1 and all other entries being zero. 1N indicates the matrix with the dimension N × N with all the entries being 1. 0N×1 and 0N denote the vector with the dimension N × 1 and the matrix with the dimension N × N with all the entries being zero, respectively. CN 0N×1, σ2IN denotes the circularly symmetric complex Gaussian (CSCG) distribution with zero mean and covariance matrix σ2IN . E{·} represents the expectation operation of a random variable. ⊗ and ⊙ denote the Kronecker produc-
t and the Hadamard product, respectively. ∇xf (x0) denotes the gradient vector of function f (x) at the local point x0. ∂(·) represents the partial derivative of a function. [a]i and [A]i,j denote the i-th entry of vector a and the entry in the i-th row

3
Fig. 1. Illustration of the considered MA array enhanced multi-target sensing system.
and the j-th column of matrix A, respectively. tr(A) denotes the trace of matrix A.
II. SYSTEM MODEL AND PROBLEM FORMULATION
A. System Model
As shown in Fig. 1, we consider a passive wireless sensing system with N MAs confined within a two-dimensional (2D) region C at the BS to estimate K targets’ AoAs with respect to (w.r.t.) x and y axes1, where the antenna moving region is assumed to be a square with the size of A × A. Assume that the number of antennas is larger than the number of targets, i.e., N > K. To describe the positions of MAs, we establish a Cartesian coordinate system (CCS) with the reference point of the antenna array lo-
cated at the origin O. The position of the n-th antenna can then be denoted as qn = [xn, yn]T for 1 ≤ n ≤ N . For brevity, we denote the collection of N MAs’ positions as q ̃ = {qn, 1 ≤ n ≤ N }. To perform AoA estimation, the receiver consecutively receives the uncorrelated narrowband signals from multiple targets over T snapshots [40]. We assume that the channels from the targets to the receiver are dominated by the LoS components and remain static over T snapshots. Given that multiple targets ar-
e located in the far-field region of the MA array, the steering vector from the MA array to the k-th target is given by
a (q ̃, rk) =
h
ej 2π
λ qT
1 rk , ej 2π
λ qT
2 rk , · · · , ej 2π
λ qT
N rk
iT
∈ CN×1, (1)
where λ is the wavelength and rk = [uk, vk]T denotes the spatial AoA coordinate of the k-th target with uk = cos φk sin θk ∈ [−umax, umax] and vk = cos θk ∈ [−vmax, vmax] for 1 ≤ k ≤ K. θk and φk are the physical elevation and azimuth AoAs of the LoS path from the kth target to the receiver, respectively. For convenience, we denote the collection of K targets’ spatial AoA coordinates as r ̃ = {rk, 1 ≤ k ≤ K}. Then, the received signal at the t-th snapshot for 1 ≤ t ≤ T is given by [41]
y(t) =
K
X
k=1
a (q ̃, rk) sk(t) + z(t) ∈ CN×1, (2)
where sk(t) is the complex-valued signal incorporating path loss effect at the t-th snapshot of the k-th target. z(t) ∼ CN 0N×1, σ2IN represents the additive white Gaussian noise (AWGN) vector at the receiver, where σ2 is the average
1It is worth noting that the proposed solution in this paper for the passive wireless sensing system is also applicable to active wireless sensing systems where the transmitter emits omnidirectional probing signals.
noise power. To estimate the spatial AoAs of multiple targets, the received signals over T snapshots can be given in the following matrix form as
Y = AS + Z ∈ CN×T , (3)
with
Y = [y(1), y(2), · · · , y(T )] ∈ CN×T , (4)
A = [a (q ̃, r1) , a (q ̃, r2) , · · · , a (q ̃, rK )] ∈ CN×K , (5)
S = [s1, s2, · · · , sK ]T ∈ CK×T , (6)
sk = [sk(1), sk(2), · · · , sk(T )]T ∈ CT ×1, (7)
and
Z = [z(1), z(2), · · · , z(T )] ∈ CN×T . (8)
B. Multi-target AoA Estimation
For any given antenna positions q ̃, we adopt the multiple signal classification (MUSIC) algorithm for estimating the spatial AoAs of multiple targets based on the received signals over T snapshots [42]. Specifically, the covariance matrix of the received signals in (3) is given by
RY = E{YYH} = ARSAH + σ2IN ∈ CN×N , (9)
where RS = SSH ∈ CK×K denotes the covariance matrix of the source signals. Then, the singular value decomposition (SVD) of RY can be obtained as
RY = [Us, Uz] Σs
Σz [Us, Uz]H , (10)
where Us ∈ CN×K and Uz ∈ CN×(N−K) denote the singular vectors of the signal and noise subspaces, respectively. Σs ∈ RK×K and Σz ∈ R(N−K)×(N−K) are diagonal matrices with the diagonal elements denoting the singular values of the signal and noise subspaces, respectively. Then, the MUSIC algorithm based estimation of the spatial AoAs of multiple targets is to search for the maximum K peaks of the following MUSIC spatial spectrum [42]
P ( ̄r0) = 1
a (q ̃, r ̄0)H UzUzHa (q ̃, r ̄0) , (11)
where r ̄0 ∈ [−umax, umax] × [−vmax, vmax]. The above estimate is asymptotically unbiased. For convenience, we assume that we have enough snapshots so that the above estimate is unbiased. We denote the estimation of the spatial AoAs of the k-th target as rˆk for 1 ≤ k ≤ K. Then, the MSE for multi-target AoA estimation can be given by
MSE =
K
X
k=1
E{∥rk − ˆrk∥2
2}, (12)
which is lower-bounded by the trace of the CRB matrix for multi-target AoA estimation, i.e.,
MSE ≥ tr (CRB(q ̃)) . (13)

4
C. CRB Characterization
Let ω = [u1, · · · , uK , v1, · · · , vK ]T ∈ R2K×1 and ζ =
h
R{s1}T, · · · , R{sK }T, I{s1}T, · · · , I{sK }TiT
∈ R2KT ×1
denote the unknown spatial AoAs and the real and imaginary parts of the complex signals to be estimated, respectively. Then, by vectorizing the received signals at the MA array in (3), we have
vec(Y) = vec(AS) + vec(Z)
= (ST ⊗ IN )vec(A) + vec(Z) ∈ CNT ×1, (14)
which follows complex Gaussian distribution with mean vector μ = (ST ⊗ IN )vec(A) and covariance matrix σ2INT , i.e., vec(Y) ∼ CN μ, σ2INT . Then, the Fisher information matrix (FIM) F ∈ R(2K+2KT )×(2K+2KT ) for estimating ω and ζ can be expressed as
F= 2
σ2
F11 F12 F21 F22
∆ = 2
σ2
R DH
ωDω R DH
ω Dζ
R DH
ζ Dω R DH
ζ Dζ
,
(15)
where Dω ∈ CNT ×2K is given by
Dω = ∂μ
∂u1
, · · · , ∂μ
∂uK
, ∂μ
∂v1
, · · · , ∂μ
∂vK
, (16)
∂μ ∂uk
= (ST ⊗ IN )vec ∂A
∂uk
= (STek ⊗ IN )a ̇ u (q ̃, rk) , 1 ≤ k ≤ K,
(17)
∂μ ∂vk
= (ST ⊗ IN )vec ∂A
∂vk
= (STek ⊗ IN )a ̇ v (q ̃, rk) , 1 ≤ k ≤ K,
(18)
a ̇ u (q ̃, rk) ∆ = ∂a (q ̃, rk)
∂uk
= j 2π
λ x1ej 2π
λ qT
1rk , · · · , j 2π
λ xN ej 2π
λ qT
N rk
T
,
(19)
a ̇ v (q ̃, rk) ∆ = ∂a (q ̃, rk)
∂vk
= j 2π
λ y1ej 2π
λ qT
1rk , · · · , j 2π
λ yN ej 2π
λ qT
N rk
T
.
(20)
Dζ ∈ CNT ×2KT is given by
Dζ = ∂μ
∂R{s1} , · · · , ∂μ
∂R{sK } , ∂μ
∂I{s1} , · · · , ∂μ
∂I{sK } , (21)
with
∂μ
∂R{sk} = (IT ⊗ A)vec ∂S
∂R{sk} = IT ⊗ a (q ̃, rk) , (22)
∂μ
∂I{sk} = j(IT ⊗ A)vec ∂S
∂I{sk} = jIT ⊗ a (q ̃, rk) . (23)
Then, according to the derivation in Appendix A, the CRB matrix for multi-target 2D spatial AoA estimation can be given by
CRB(q ̃) = σ2
2R
n
(12 ⊗ RT
S) ⊙  ̇AHΠ⊥
A  ̇A
o −1
, (24)
where Π⊥
A = IN −A(AHA)−1AH ∈ CN×N is the orthogonal
projection matrix of the column space of A and A ̇ = [A ̇ u, A ̇ v]
with  ̇Au = [a ̇ u (q ̃, r1) , · · · , a ̇ u (q ̃, rK )] , (25)
 ̇Av = [a ̇ v (q ̃, r1) , · · · ,  ̇av (q ̃, rK )] . (26)
Remark: The CRB matrix for multi-target one-dimensional (1D) spatial AoA estimation with 1D MA array is given by
CRBu(q ̃) = σ2
2R
n
RT
S ⊙  ̇AH
u Π⊥
Au  ̇Au
o −1
, (27)
which can be regarded as a special case of the 2D CRB and its derivation is omitted due to the page limitation.
D. Problem Formulation
In practice, it is challenging to obtain the prior instantaneous AoA information of multiple targets for optimizing the MA array geometry. Nevertheless, the statistical distribution of the multi-target spatial AoAs can be exploited to improve sensing coverage performance. Therefore, to enhance the performance of multi-target spatial AoA estimation accuracy, we aim to minimize the expected sum of the CRBs for multi-target AoA estimation (i.e., the trace of the CRB matrix) by optimizing the position-
s of MAs. The associated optimization problem is formulated as
mq ̃in E {tr(CRB(q ̃))} (28a)
s.t. ∥qn′ − qn∥2 ≥ dmin, 1 ≤ n ̸= n′ ≤ N, (28b)
qn ∈ C, 1 ≤ n ≤ N, (28c)
where constraint (28b) ensures the minimum distance dmin between any two antennas to avoid antenna coupling. Constraint (28c) confines the antenna moving region. Since the expectation in the objective function is hard to be derived in a closed form and constraint (28b) is non-convex, problem (28) is generally difficult to solve for the optimal solution. Therefore, we develop a swarm-based gradient descent algorithm to obtain a suboptimal solution in the next section.
III. PROPOSED SOLUTION
In this section, we propose a swarm-based gradient descent algorithm to solve problem (28) suboptimally. To overcome the challenge that the objective function in (28a) lacks a closed-form expression in general, we employ the Monte Carlo simulation method to approximate the objective function. In particular, given any statistical distribution of the targets, we randomly generate their angle samples and the corresponding transmitted signals over M independent realizations. For a sufficient large M ,-
 the expectation of the trace of the CRB matrix for multi-target AoA estimation can be approximated by the sample average over all realizations, i.e.,
E {tr(CRB(q ̃))} ≈ 1
M
M
X
m=1
tr(CRBm(q ̃))
∆ = 1
M
M
X
m=1
ψm(q ̃) ∆ = ψ ̃(q ̃),
(29)
where CRBm(q ̃) denotes the CRB matrix in the m-th realization, 1 ≤ m ≤ M . Then, the original problem (28) can be approximated as
mq ̃in
ψ ̃(q ̃) (30a)
s.t. (28b), (28c). (30b)

5
To address the coupling of multiple antennas’ positions in the objective function and constraint (28b), we adopt the alternating optimization (AO) technique to iteratively optimize each antenna’s position with the others being fixed. We present the detailed algorithm for solving (30) in the next subsection.
A. CRB Optimization
For ease of optimizing the n-th antenna’s position, the objective function in (30a) is redefined as a function of qn,
i.e., ψ ̃n(qn). Then, the subproblem for optimizing qn can be expressed as
mqinn
ψ ̃n(qn) (31a)
s.t. ∥qn − qn′ ∥2 ≥ dmin, n′ ̸= n, 1 ≤ n′ ≤ N, (31b)
qn ∈ C, (31c)
which is non-convex and can be efficiently solved by the swarm-based gradient descent algorithm [43], as detailed as follows. In the swarm-based gradient descent algorithm, the swarm consists of I agents, each of which is identified with an initial position, i.e., a candidate solution for problem (31), qi,(0)
n, and an initial mass gi,(0) ∈ (0, 1] for 1 ≤ i ≤ I. In the l-th iteration, the position of each agent is updated in the direction of the local gradient, which is given by
qi,(l+1)
n =B
n
qi,(l)
n − τ i,(l)∇qn ψ ̃n(qi,(l)
n)
o
, (32)
where B {qn} is a projection function that ensures the position of the n-th antenna to be in the confined moving region and is given by
[B(qn)]j =



−A
2 , if [qn]j < − A
2,
A
2 , if [qn]j > A
2, [qn]j, otherwise.
(33)
τ i,(l) is the step size depending on the relative mass of the i-th agent, which can be obtained via the backtracking line search [43] and will be specified later. Specifically, an agent with a smaller objective value is of heavier mass, while an agent with a larger objective value is of lighter mass. Accordingly, heavier agents prioritize exploitation via smaller steps and local convergence; Lighter agents prioritize exploration via larger steps, expanding the search beyond local basins and stren-
gthening global optimization. ∇qn ψ ̃n(qi,(l)
n)
is the gradient of the objective function at the local point
qi,(l)
n , which can be numerically calculated according to the definition. To obtain the step size in (32), we first introduce the mass
transition procedure of each agent in the iteration process. Let
ψ ̃(l)
max = miax
ψ ̃n(qi,(l)
n ) and ψ ̃(l)
min = miin
ψ ̃n(qi,(l)
n ) denote
the maximal and minimal objective values of the swarm in the l-th iteration, respectively. Accordingly, we denote the index of the agent that achieves the minimum objective value as i0 = arg miin
ψ ̃n(qi,(l)
n ). Then, the mass of the i-th agent is
dynamically adjusted according to
gi,(l+1) = gi,(l) − κi,(l)gi,(l), i ̸= i0, (34a)
gi0,(l+1) = gi0,(l) +
I
X
i=1,i̸=i0
κi,(l)gi,(l), (34b)
where κi,(l) ∈ (0, 1] is a parameter measuring the reduction of the mass of the i-th agent to the current global minimizer, i.e., the i0-th agent, and can be obtained via
κi,(l) =
ψ ̃n(qi,(l)
n ) − ψ ̃(l)
min ψ ̃(l)
max − ψ ̃(l)
min
!p
, (35)
where p > 0 is a fine-tuning parameter. As such, the total mass of the swarm gradually concentrates with the agents that are most likely to reach the global minimum of the solution space explored so far by the swarm. Then, the relative mass of the i-th agent is given by
g ̃i,(l+1) = gi,(l+1)
miax gi,(l+1) , 1 ≤ i ≤ I. (36)
Subsequently, the step size is initialized as a large positive value, τ i,(l) = τmax. Then, we gradually shrink it by a factor ς ∈ (0, 1), i.e., τ i,(l) ← ςτ i,(l), until the minimum inter-antenna distance constraint and the Armijo–Goldstein condition are both satisfied, i.e.,
ψ ̃n (qi,(l+1)
n ) ≤ ψ ̃n(qi,(l)
n ) − ξβi,(l)τ i,(l) ∇qn ψ ̃n(qi,(l)
n)
2
2
, (37)
where ξ ∈ (0, 1) is a predefined parameter to control the decreasing speed of the objective function. βi,(l) is a parameter related to the relative mass of the i-th agent, which is given
by
βi,(l) = (g ̃i,(l+1))q, (38)
with q > 0 allowing fine-tuning of the dependence on the relative mass. We summarize the overall algorithm for solving problem (30) in Algorithm 1. Specifically, in line 1, we initialize the antenna positions q ̃ to form a uniform planar array (UPA) with full aperture. Next, we generate M independent target angle samples and the corresponding transmitted signals, which are then used to calculate the approximate objective function in (29). Then, in lines 4-24, we iteratively optimize the position o-
f each antenna using the swarm-based gradient algorithm, where J represents the maximum iteration number for AO and L denotes the maximum iteration number for the swarmbased gradient descent algorithm. It is noted that the position of the agent with the minimum objective value among all the agents in the swarm will be output as the obtained suboptimal solution at the end of the inner iteration. The outer iteration for AO and the inner iteration for swarm-based gradient descent optimization termina-
te if the relative decrease of the objective function between two consecutive iterations is no larger than a predefined threshold ε or the maximum iteration number is attained. The computational complexity of Algorithm 1 is analyzed as follows. The computation of the expectation of the trace of the CRB matrix in (29) entails a complexity of O M K2(N T + K) . The local gradient calculation in (32) involves 2N times of computing the expectation of the trace of the CRB matrix in (29). Thus, the corre-
sponding computational complexity is given by O M N K2(N T + K) . By denoting the maximum number of backtracking line search in lines 14-17 as B, the corresponding computational complexity is O BM N K2(N T + K) . Given the maximum iteration number for AO, J, and the maximum iteration number for

6
Algorithm 1 Swarm-based gradient descent algorithm for problem (30)
Input: K, N, T, I, A, σ2, λ, dmin, p, q, τmax, ς, ξ, J, L, ε. Output: q ̃.
1: Initialize the antenna positions q ̃. 2: Generate M independent target angle samples and corresponding transmitted signals.
3: Obtain ψ ̃(q ̃) according to (29). 4: Set j = 1. 5: repeat
6: for n = 1 to N do 7: repeat
8: Set l = 0.
9: Initialize q1,(0)
n = qn and initialize qi,(0)
n randomly while satisfying constraint (31b) for 2 ≤ i ≤ I. 10: Initialize gi,(0) = 1
I for 1 ≤ i ≤ I.
11: Update the masses of all the agents via (34). 12: for i = 1 to I do
13: Initialize τ i,(l) ← τmax. 14: repeat
15: Update τ i,(l) ← ςτ i,(l). 16: Update the i-th agent’s position via (32). 17: until constraint (31b) and (37) are both satisfied. 18: end for
19: Update l ← l + 1. 20: Update qn ← qi0,(l)
n , ψ ̃(q ̃) ← ψ ̃(l)
min .
21: until The relative decrease of the objective function is no larger than ε or the maximum iteration number L is attained. 22: end for
23: Update j ← j + 1. 24: until The relative decrease of the objective function is no larger than ε or the maximum iteration number J is attained. 25: return q ̃.
the swarm-based gradient descent algorithm, L, the worst-case computational complexity of Algorithm 1 for solving (30) is thus given by O JLBM N K2(N T + K) . It is worth noting that the considered sensing coverage problem is optimized based on statistical distribution of targets, which does not require frequent movement of antennas. Once the antennas have been moved to the optimized positions, the array geometry remains unchanged for a long period unless the coverage requirement changes. Therefor-
e, the computational complexity of the proposed algorithm is acceptable. B. Performance Lower-bound Analysis
To demonstrate the superiority of our proposed design, we derive the performance lower-bound on the objective function ψ ̃(q ̃) in problem (30). First, let  ̃x = [x1, x2, · · · , xN ]T and y ̃ = [y1, y2, · · · , yN ]T, corresponding to the antenna location parameters q ̃. The variance function is then defined as var(x ̃) = 1
N
PN
n=1(xn − μ( ̃x))2 with μ(x ̃) = 1
N
PN
n=1 xn,
and var(y ̃) and μ(y ̃) are similarly defined. The covariance function is defined as cov(x ̃, y ̃) = 1
N
PN
n=1(xn − μ(x ̃))(yn − μ(y ̃)). Additionally, we denote the orthogonal projection matrix of the space spanned by a ( ̃q, rk) as
Π⊥
k = IN − a (q ̃, rk)a (q ̃, rk)H
∥a (q ̃, rk)∥2
2
, 1 ≤ k ≤ K. (39)
Furthermore, we define
ζ∗
ι,k = R a ̇ H
u (q ̃, rk) Π⊥
k a ̇ v (q ̃, rk)
Π⊥
k a ̇ ι (q ̃, rk) 2
2
, ι ∈ {u, v} , 1 ≤ k ≤ K.
(40)
Then, the lower-bound on the objective function ψ ̃(q ̃) in problem (30) can be obtained via the following theorem.
Theorem 1: The objective function ψ ̃(q ̃) in (30) is lowerbounded by
ψ ̃(q ̃)
(a)
≥ Kσ2λ2
8N T Psπ2


1
var(x ̃) − cov( ̃x,y ̃)2
var(y ̃)
+1
var(y ̃) − cov( ̃x,y ̃)2
var( ̃x)


(b)
≥ Kσ2λ2
N T PsA2π2 ,
(41) where we assume that the signal energies from targets are the
same to facilitate the theoretical analysis, i.e., Ps = ∥sk∥2
2/T , 1 ≤ k ≤ K. It is noted that the equality at (a) in (41) holds if and only if, for any ι, ι′ ∈ {u, v},
R
h
RT
s
i
k,k′ a ̇ ι(q ̃, rk)HΠ⊥
Aa ̇ ι′ (q ̃, rk′ ) = 0, k ̸= k′, (42)
and, for any ι ̸= ι′ ∈ {u, v},
AHΠ⊥
k a ̇ ι (q, rk) − ζ∗
ι,ka ̇ ι′ (q, rk) = 0K×1, (43)
for 1 ≤ k ̸= k′ ≤ K. Furthermore, the equality at (b) holds if and only if
cov(x ̃, y ̃) = 0, (44a)
var(x ̃) = var(y ̃), (44b)
μ(x ̃) = μ(y ̃) = 0, (44c)
x2
n + y2
n = A2
2 , 1 ≤ n ≤ N. (44d)
Proof: Please refer to Appendix B. Theorem 1 indicates that the equality at (a) always holds for the single-target case, which is consistent with the result in [6]. For the case of multiple targets, Theorem 1 shows that if (43) and (44) are both satisfied, the trace of the CRB matrix for joint multi-target AoA estimation is equivalent to the sum of traces of the CRB matrices for estimating each target’s AoAs separately as derived in [6], where the AoA estimation of one target is critically indepen-
dent of the AoAs of all other targets. Specifically, condition (42) requires the interference between estimating AoAs of different targets to be zero and condition (43) guarantees the maximum sensing sensitivity for estimating the 2D AoAs of each target. In light of this, to approach the lower-bound on the sum of the CRBs for multitarget AoA estimation, on one hand, it is desirable to reduce the correlation between the waveforms in the time domain for different targets. As such, condition (42) is -
satisfied if the time-domain waveforms for different targets are orthogonal. On the other hand, we should optimize the antenna array geometry in the spatial domain to decrease the normalized correlation of sensitivity vectors for estimating the 2D AoAs of different targets. Specifically, the sensitivity vector is defined as Π⊥
Aa ̇ ι( ̃q, rk) for 1 ≤ k ≤ K, ι ∈ {u, v}, representing the projection of the derivative of the steering vector of each target w.r.t. its angular position into the noise subspace. Then, the normalized correlation of sensitivity vectors is given by
ρk,k′ (ι, ι′) =
a ̇ ι(q ̃, rk)HΠ⊥
Aa ̇ ι′ (q ̃, rk′ )
2
Π⊥
Aa ̇ ι (q ̃, rk) 2
2 Π⊥
Aa ̇ ι′ (q ̃, rk′ ) 2
2
, (45)
for 1 ≤ k ̸= k′ ≤ K, ι, ι′ ∈ {u, v}, which is an important parameter measuring the interference between multi-target

7
AoA estimation. In other words, a smaller value of ρk,k′ (ι, ι′) means that the estimation of one target’s AoA is less impacted by that of another one. It is noted that condition (42) is satisfied if (45) is reduced to zero. Moreover, to decrease the sum of the CRBs for multi-target sensing, we should increase the effective power of sensitivity vectors incorporating the interference between the estimation of the each target’s 2D AoAs, which are defined as
ωu,k = min
ζu,k∈R Π⊥
A (a ̇ u (q ̃, rk) − ζu,ka ̇ v (q ̃, rk))
2
2
= Π⊥
Aa ̇ u (q ̃, rk)
2
2
− R a ̇ H
u (q ̃, rk) Π⊥
Aa ̇ v (q ̃, rk) 2
Π⊥
Aa ̇ v (q ̃, rk) 2
2
,
(46)
and
ωv,k = min
ζv,k∈R Π⊥
A (a ̇ v (q ̃, rk) − ζv,ka ̇ u (q ̃, rk))
2
2
= Π⊥
Aa ̇ v (q ̃, rk)
2
2
− R a ̇ H
u (q ̃, rk) Π⊥
Aa ̇ v (q ̃, rk) 2
Π⊥
Aa ̇ u (q ̃, rk) 2
2
,
(47)
for 1 ≤ k ≤ K. The effective power of sensitivity vector measures the sensibility of the estimator to small changes of AoAs, the increase of which helps improve the sensing accuracy for each individual target. Specifically, as proved in Appendix B, (43) is the sufficient and necessary condition for maximization of (46) and (47). Therefore, condition (43) is satisfied if both (46) and (47) achieve their maximum. While it is generally challenging to satisfy conditions (42) and (43) simultaneously, o-
ur proposed MA-based design is capable of striking a fine trade-off between reducing the normalized sensitivity vector correlation and increasing the effective power of sensitivity vectors in the pursuit of the minimum CRB for multi-target AoA estimation via antenna position optimization, compared to conventional FPA arrays and the single-target-oriented MA arrays in [6]. This will be evaluated in the simulation section to demonstrate the superiority of our proposed design. Furthermore, condition -
(44) suggests that it is desired to deploy MAs in a centrally symmetrical manner to further approach the lower-bound on the sum of the CRBs. In addition, the lower-bound on the sum of the CRBs is inversely proportional to the region size, i.e., A2. Therefore, the expected sum of the CRBs can be efficiently reduced by increasing the size of the antenna movement region and carefully designing the array geometry.
IV. NUMERICAL RESULTS
A. Simulation Setup and Benchmark Schemes
In the simulations, we consider K = 5 targets that are randomly distributed within the spatial region [−umax, umax]× [−vmax, vmax] with umax = vmax = 0.6. The number of MAs is set to N = 16, whose positions are confined in a square moving region with the size of 12λ × 12λ, i.e., A = 12λ, where the wavelength is set to λ = 0.05 m. The number of snapshots is set to T = 64. The average received SNR of each target’s signals, defined as Ps/σ2, is 10 dB. The maximum iteration numbers for both the AO and-
 the swarmbased gradient descent algorithm are set to J = L = 50. The termination threshold in Algorithm 1 is set to ε = 10−3. The swarm-based gradient descent algorithm related parameters are
0 10 20 30 40 50 Iteration index
10-6
10-5
CRB
Proposed GD
21.89%
Fig. 2. Convergence performance of the proposed algorithm and the GD scheme.
-6
-5.5
-5
-4.5
-4
-3.5
-3
-2.5
-2
-1.5
-1
-0.5
0
0.5
1
1.5
2
2.5
3
3.5
4
4.5
5
5.5
6
x/
-6
-5.5
-5
-4.5
-4
-3.5
-3
-2.5
-2
-1.5
-1
-0.5
0
0.5
1
1.5
2
2.5
3
3.5
4
4.5
5
5.5
6
y/
Fig. 3. Illustration of the optimized MA array.
set to I = 25, p = 2, q = 0.5, τmax = 0.25λ, and ξ = 0.6 [43]. The curves in the figures are the averaged results over 200 independent random target distributions. To demonstrate the superiority of the proposed MA-based design, we compare its CRB performance, measuring the theoretical sensing performance limit, and MSE performance, evaluating the practical estimation accuracy, against the following benchmark schemes:
• Lower-bound: The lower-bound of the expected sum of the CRBs for multi-target AoA estimation is calculated via (41). • MA array in [6]: The MA array geometry designed for single target sensing in [6] is adopted, while the MUSIC algorithm is employed for multi-target sensing. • Dense UPA: The antenna elements are configured as an UPA with half-wavelength inter-antenna spacing. • Sparse UPA: The antenna elements are configured to form an UPA to achieve the largest aperture with the
inter-antenna spacing of A/(⌈√N ⌉−1) both horizontally and vertically.
B. Simulation Results
We first evaluate the convergence performance of Algorithm 1 in Fig. 2. It is shown that our proposed algorithm exhibits fast convergence, and the objective value remains nearly unchanged within 30 iterations, which verifies the effectiveness of the proposed antenna position optimization method. Moreover, it is also observed that the swarm-based gradient algorithm outperforms the conventional gradient ascent (GD) algorithm by 21.89% thanks to the interplay between multiple

8
-15 -10 -5 0 5 10 15 SNR (dB)
10-8
10-6
10-4
10-2
100
102
MSE
Lower-bound Proposed MA, CRB Proposed MA, MUSIC MA array in [6], CRB MA array in [6], MUSIC Dense UPA, CRB Dense UPA, MUSIC Sparse UPA, CRB Sparse UPA, MUSIC
Fig. 4. Performance comparison of different schemes versus received SNR.
4 8 16 32 64 128 Number of snapshots
10-8
10-6
10-4
10-2
100
MSE
Lower-bound Proposed MA, CRB Proposed MA, MUSIC MA array in [6], CRB MA array in [6], MUSIC Dense UPA, CRB Dense UPA, MUSIC Sparse UPA, CRB Sparse UPA, MUSIC
Fig. 5. Performance comparison of different schemes versus number of snapshots.
1234567 Number of targets
10-8
10-6
10-4
10-2
100
102
MSE
Lower-bound Proposed MA, CRB Proposed MA, MUSIC MA array in [6], CRB MA array in [6], MUSIC Dense UPA, CRB Dense UPA, MUSIC Sparse UPA, CRB Sparse UPA, MUSIC
Fig. 6. Performance comparison of different schemes versus number of targets.
2 4 6 8 10 12 Normalized size of antenna moving region
10-8
10-6
10-4
10-2
100
MSE
Lower-bound Proposed MA, CRB Proposed MA, MUSIC MA array in [6], CRB MA array in [6], MUSIC Dense UPA, CRB Dense UPA, MUSIC Sparse UPA, CRB Sparse UPA, MUSIC
Fig. 7. Performance comparison of different schemes versus normalized size of antenna moving region.
0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1 Angular range
10-8
10-6
10-4
10-2
100
102
MSE
Lower-bound Proposed MA, CRB Proposed MA, MUSIC MA array in [6], CRB MA array in [6], MUSIC Dense UPA, CRB Dense UPA, MUSIC Sparse UPA, CRB Sparse UPA, MUSIC
Fig. 8. Performance comparison of different schemes versus angular range of target distribution.
8 12 16 20 25 30 Number of antennas
10-8
10-6
10-4
10-2
100
102
MSE
Lower-bound Proposed MA, CRB Proposed MA, MUSIC MA array in [6], CRB MA array in [6], MUSIC Dense UPA, CRB Dense UPA, MUSIC Sparse UPA, CRB Sparse UPA, MUSIC
Fig. 9. Performance comparison of different schemes versus number of antennas.
agents. Furthermore, we illustrate the optimized MA array geometry in Fig. 3, which shows that the antenna elements tend to be deployed as far from the center of the square region as possible to enlarge the aperture of the MA array, thereby increasing the angular resolution for enhancing the multitarget AoA estimation performance. In addition, the antenna elements are non-uniformly configured within the movable region to help reduce the interference between the spatial AoA estimation of different -
targets. In Fig. 4, we compare the performance of the proposed and benchmark schemes versus the received SNR. It shows that the proposed scheme achieves superior CRB performance compared to benchmark schemes and is close to the performance lower-bound. It is also observed that the curve depicting AoA estimation MSE with the MUSIC algorithm of our proposed scheme approaches the CRB in the highSNR regime. Additionally, our proposed MA-based design always achieves the lowest MSE performance compared -
to the benchmark schemes, which demonstrates the practicality of the proposed MA array for improving AoA estimation accuracy. Similar results can also be observed from Fig. 5, where the proposed MA scheme achieves much lower CRBs and MSEs compared to the MA array in [6] for single target sensing and conventional FPA-based systems. As the number of snapshots increases, the sensing performance experiences a certain degree of performance improvement. This is because more snapshots help accumulate hig-
her signal power to mitigate the impact of environmental noise on the estimation performance. In Fig. 6, we compare the performance of the proposed and benchmark schemes versus the number of targets. It is depicted that the CRB and MSE of all schemes increase with the number of targets. We can also observe that the performance
gap between the proposed scheme and the performance lowerbound and that between the proposed scheme and the singletarget-oriented MA array in [6] become larger as the number of targets increases. The reason is that a larger number of targets entails greater interference between the estimation of different targets. Nevertheless, our proposed design achieves considerable performance gain by benefiting from flexible antenna position configuration to overcome this challenge. In particular, it is obser-
ved that the MSE of the MA array in [6] and “Dense FPA” schemes approaches the CRB only for single target sensing, while the proposed scheme achieves significantly high AoA estimation accuracy even for the scenarios with seven targets.
In Fig. 7, we compare the performance of different schemes versus normalized size of antenna moving region, i.e., A/λ. It is demonstrated that the CRB performance of all schemes, with the exception of the conventional “Dense UPA” method, exhibits an enhancement in the event of an increase in the normalized size of the antenna moving region due to the increase of the achievable array aperture. Notably, the CRB performance gap between the proposed design and the lowerbound becomes smaller with large-
r antenna moving region sizes by fully exploiting the spatial DoFs via antenna position refinement. In contrast, the CRB performance gap between the proposed design and the MA array in [6] scheme becomes larger with larger antenna moving region sizes. This is because the MA array in [6] induces more side and/or grating lobes at larger apertures, as will be detailed later in Fig. 11??, thereby exacerbating the interference for multi-target sensing. This fact aligns with the observation that the MSE-
 of the MA array in [6] for multi-target AoA estimation decreases and then increases as the normalized size of antenna moving region

9
Proposed MA MA array in [6] Dense UPA Sparse UPA
0
0.05
0.1
0.15
0.2
0.25
Average normalized steering vector correlation
0
0.2
0.4
0.6
0.8
1
1.2
1.4
Average effective power of sensitivity vectors
104
Fig. 10. Comparison of coupling and sensitivity for estimating multi-target AoAs. increases. In Fig. 8, we compare the performance of different schemes versus angular range of target distribution, i.e., umax and vmax. We can observe that our proposed MA-based design consistently yields substantial gains over all benchmarks, with especially pronounced improvements when multiple targets are densely distributed. This highlights its adaptability to diverse target distributions via effective interferen-
ce mitigation for multi-target sensing. In addition, it is noted that the CRB performance of “Sparse UPA” scheme decreases as the angular range of target distribution increases due to the larger numbers of grating lobes in a given specific local region, which further intensifies the interference between multi-target spatial AoA estimation. In Fig. 9, we compare the performance of different schemes versus number of antennas. As can be observed, our proposed scheme always outperforms the benchmark s-
chemes and performs closely to the CRB lower-bound for different numbers of antennas. Furthermore, our proposed scheme demonstrates a significant MSE reduction over all the benchmark schemes with a small number of antennas, e.g., N = 12, 16, 20. These results underscore the practical significance of our MA-enhanced multi-target sensing system design, particularly under the constraint of a limited number of antennas. To gain more insights, in Fig. 10, we evaluate the average normalized sensitivity -
vector correlation and the average effective power of sensitivity vectors for different schemes in multi-target sensing, which are defined as ρ =
1
4K (K −1)
P
ι∈{u,v}
P
ι′ ∈{u,v}
PK k=1
PK
k=1,k̸=k′ ρk,k′ (ι, ι′)
and ω = 1
2K
P
ι∈{u,v}
PK
k=1 ωι,k, respectively. We can observe that our proposed MA-based design not only reduces the normalized correlation between the sensitivity vectors for different target AoA estimation but also increases the effective power of sensitivity vectors for estimating each target’s 2D AoAs, thus achieving a superior CRB performance over the benchmark schemes. This aligns with the theoretical analysis presented in Theorem 1. Furthermore, we present in Fig. 11 the normalized steering vector correlation def-
ined as 1
N2 |a ( ̃q, r5)H a (q ̃,  ̄r) |2, for different schemes versus
 ̄r ∈ [−0.6, 0.6] × [−0.6, 0.6] with the spatial position of target 5 given by r5 = [0, 0]T. It is observed that our proposed MA-based design yields a narrower main lobe and fewer side or grating lobes, thereby enhancing the MSE performance over the benchmark schemes. In addition, the MA array in
[6] and the “Sparse UPA” scheme suffer from large numbers of side and/or grating lobes, which introduce spurious spatial spectrum peaks in undesired directions as shown in Fig. 12, thereby significantly degrading multi-target angle estimation accuracy.
V. CONCLUSION
In this paper, we presented a novel wireless sensing system that leverages MA arrays to enhance multi-target sensing performance via antenna position optimization. Specifically, we first characterized the CRB matrix for multi-target AoA estimation as a function of the antenna’s positions in the MA array. Then, we formulated an optimization problem to minimize the expectation of the trace of the CRB matrix over random target angles subject to a given distribution via antenna position configuration.-
 To tackle the resultant highly non-convex problem, we employed the Monte Carlo method to address the intractable objective function, and subsequently developed a swarm-based gradient descent algorithm to solve the approximated problem. Additionally, a lower-bound on the sum of CRBs for multi-target AoA estimation was derived. Finally, extensive simulation results were provided to validate the effectiveness and superiority of our proposed MA-based design compared to conventional sensing systems wi-
th FPA arrays and single-target-oriented MA arrays, in terms of decreasing both CRB and the actual MSE. Fundamentally, the optimized MA array geometry yields low correlation and high effective power of sensitivity vectors for multi-target AoA estimation, leading to significant CRB performance improvement. The resultant low correlation of steering vectors over multiple targets’ directions in the angular domain further helps mitigate angle estimation ambiguity and thereby enhances MSE performance. T-
hese results highlight the practical significance of our design for high-accuracy multi-target sensing.
APPENDIX A DERIVATION OF CRB(q ̃)
First, for ease of notation, we denote
Dω = [Du, Dv] , (48)
with
Du = ∂μ
∂u1
, · · · , ∂μ
∂uK
= (ST ⊗ IN ) [e1 ⊗ a ̇ u (q ̃, r1) , · · · , eK ⊗ a ̇ u (q ̃, rK )]
= (ST ⊗ IN )blkdiag(a ̇ u (q ̃, r1) , · · · , a ̇ u (q ̃, rK ))
∆ = (ST ⊗ IN ) eDu,
(49)
Dv = (ST ⊗ IN )blkdiag(  ̇av (q ̃, r1) , · · · , a ̇ v (q ̃, rK ))
∆ = (ST ⊗ IN )De v.
(50)
Therefore, we have
DH
ωDω = [Du, Dv]H [Du, Dv] = DH
u Du DH
u Dv DH
v Du DH
v Dv
, (51)
where
DH
u Du = eDH
u (S∗ ⊗ IN )(ST ⊗ IN )De u
=
De H
u S∗ST ⊗ IN De u = RT
S ⊙  ̇AH
u  ̇Au, (52)

10
Target 1
Target 2
Target 3 Target 5 Target 4
-0.6 -0.4 -0.2 0 0.2 0.4 0.6 u
-0.6
-0.4
-0.2
0
0.2
0.4
0.6
v
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0.8
0.9
1
(a) Proposed MA
Target 1
Target 2
Target 3 Target 5 Target 4
-0.6 -0.4 -0.2 0 0.2 0.4 0.6 u
-0.6
-0.4
-0.2
0
0.2
0.4
0.6
v
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0.8
0.9
1
(b) MA array in [6]
Target 1
Target 2
Target 3 Target 5 Target 4
-0.6 -0.4 -0.2 0 0.2 0.4 0.6 u
-0.6
-0.4
-0.2
0
0.2
0.4
0.6
v
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0.8
0.9
1
(c) Dense UPA
Target 1
Target 2
Target 3 Target 5 Target 4
-0.6 -0.4 -0.2 0 0.2 0.4 0.6 u
-0.6
-0.4
-0.2
0
0.2
0.4
0.6
v
0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
0.8
0.9
1
(d) Sparse UPA
Fig. 11. Comparison of steering vector correlation with different antennas’ positions.
Target 1
Target 2
Target 3 Target 5 Target 4
-0.6 -0.4 -0.2 0 0.2 0.4 0.6 u
-0.6
-0.4
-0.2
0
0.2
0.4
0.6
v
-10
-5
0
5
10
15
dB
(a) Proposed MA, MSE: 3.2 × 10−7
Target 1
Target 2
Target 3 Target 5 Target 4
-0.6 -0.4 -0.2 0 0.2 0.4 0.6 u
-0.6
-0.4
-0.2
0
0.2
0.4
0.6
v
-10
-5
0
5
10
15
dB
(b) MA array in [6], MSE: 0.6873
Target 1
Target 2
Target 3 Target 5 Target 4
-0.6 -0.4 -0.2 0 0.2 0.4 0.6 u
-0.6
-0.4
-0.2
0
0.2
0.4
0.6
v
-10
-5
0
5
10
15
dB
(c) Dense UPA, MSE: 6.78 × 10−5
Target 1
Target 2
Target 3 Target 5 Target 4
-0.6 -0.4 -0.2 0 0.2 0.4 0.6 u
-0.6
-0.4
-0.2
0
0.2
0.4
0.6
v
-10
-5
0
5
10
15
20
dB
(d) Sparse UPA, MSE: 1.125
Fig. 12. Comparison of spatial spectrum under the MUSIC algorithm with different antennas’ positions.
DH
u Dv = RT
S ⊙  ̇AH
u  ̇Av, (53)
DH
v Du = RT
S ⊙  ̇AH
v  ̇Au, (54)
DH
v Dv = RT
S ⊙  ̇AH
v A ̇ v. (55)
Similarly, we denote Dζ = [DR, DI] with
DR = ∂μ
∂R{s1} , · · · , ∂μ
∂R{sK }
= [IT ⊗ a (q ̃, r1) , · · · , IT ⊗ a (q ̃, rK )] ,
(56)
DI = ∂μ
∂I{s1} , · · · , ∂μ
∂I{sK }
= j [IT ⊗ a (q ̃, r1) , · · · , IT ⊗ a (q ̃, rK )] .
(57)
Then, we have
DH
ωDζ =
h
(ST ⊗ IN ) eDu, (ST ⊗ IN )De v
iH
[DR, jDR]
=
De H
u (S∗ ⊗ IN )DR j eDH
u (S∗ ⊗ IN )DR De H
v (S∗ ⊗ IN )DR j eDH
v (S∗ ⊗ IN )DR
,
(58)
DH
ζ Dω = (DH
ω Dζ )H
= DH
R(ST ⊗ IN )De u DH
R(ST ⊗ IN )De v −jDH
R(ST ⊗ IN ) eDu −jDH
R(ST ⊗ IN )De v
, (59)
and
DH
ζ Dζ = [DR, jDR]H [DR, jDR] = DH
RDR jDH
R DR
−jDH
RDR DH
R DR
,
(60)
with
DH
RDR = AHA ⊗ IT . (61)
Then, F22 can be further written as
F22 = R
n
DH
ζ Dζ
o
= R AHA ⊗ IT −I AHA ⊗ IT
I AHA ⊗ IT R AHA ⊗ IT
.
(62) It is noted that for Ξ = AHA ⊗ IT ∈ CKT ×KT , we have
R {Ξ} R Ξ−1 − I {Ξ} I Ξ−1 = R ΞΞ−1 = IKT , (63)
R {Ξ} I Ξ−1 + I {Ξ}R Ξ−1 = I ΞΞ−1 = 0KT . (64)
Therefore, the inverse of F22 can be given by
F−1
22 =


R
n
AHA −1 ⊗ IT
o
−I
n
AHA −1 ⊗ IT
o
I
n
AHA −1 ⊗ IT
o
R
n
AHA −1 ⊗ IT
o

.
(65) Next, we can derive F12F−1
22 F21 as (66) shown at the top of the next page. Then, we can obtain the CRB matrix for multitarget 2D spatial AoA estimation by employing the Schur complement theorem as (67) shown at the top of the next page. This completes the derivation.
APPENDIX B PROOF OF THEOREM 1
We begin by proving that (a) in (41) holds. For ease of notation, we first denote
Φ(RS) = 2
σ2 R RT
S ⊙  ̇AH
u Π⊥
A  ̇Au RT
S ⊙  ̇AH
u Π⊥
A  ̇Av RT
S ⊙  ̇AH
v Π⊥
A  ̇Au RT
S ⊙  ̇AH
v Π⊥
A  ̇Av
,
(68) and
Ψ(Re S) = 2
σ2 R eRT
S ⊙  ̇AH
u Π⊥
A  ̇Au eRT
S ⊙  ̇AH
u Π⊥
A  ̇Av Re T
S ⊙  ̇AH
v Π⊥
A  ̇Au Re T
S ⊙  ̇AH
v Π⊥
A  ̇Av
,
(69) where Re S = diag(Ps, Ps, · · · , Ps) ∈ RK×K . Then, we have
Ψ( eRS) =
K
X
k=1
PkΦ(RS)Pk, (70)
where Pk ∈ R2K×2K is given by
Pk = Ek,k 0K
0K Ek,k , (71)
with Ek,k ∈ RK×K denoting the matrix that the entry in the k-th row and k-th column is 1 and all other entries are 0. Since Φ(RS) is positive definite and invertible, i.e., Φ(RS) ≻ 0, we
have Φ(RS) I2K
I2K Φ(RS)−1 ⪰ 0, (72)

11
F12 F−1
22 F21 = R
n
DH
ω Dζ
o
F−1
22 R
n
DH
ζ Dω
o
=


R
n
De H
u (S∗ ⊗ IN )DR((AHA)−1 ⊗ IT )DH
R(ST ⊗ IN )De u
o
R
n
eDH
u (S∗ ⊗ IN )DR((AHA)−1 ⊗ IT )DH
R(ST ⊗ IN ) eDv
o
R
n
De H
v (S∗ ⊗ IN )DR((AH A)−1 ⊗ IT )DH
R(ST ⊗ IN ) eDu
o
R
n
eDH
v (S∗ ⊗ IN )DR((AH A)−1 ⊗ IT )DH
R(ST ⊗ IN )De v
o


=


R
n
De H
u (S∗ ⊗ IN )(IT ⊗ A(AHA)−1AH)(ST ⊗ IN ) eDu
o
R
n
eDH
u (S∗ ⊗ IN )(IT ⊗ A(AHA)−1AH)(ST ⊗ IN )De v
o
R
n
De H
v (S∗ ⊗ IN )(IT ⊗ A(AHA)−1AH)(ST ⊗ IN ) eDu
o
R
n
eDH
v (S∗ ⊗ IN )(IT ⊗ A(AHA)−1AH)(ST ⊗ IN )De v
o


=


R
n
De H
u (S∗ST ⊗ A(AHA)−1AH)De u
o
R
n
De H
u (S∗ST ⊗ A(AHA)−1AH)De v
o
R
n
De H
v (S∗ST ⊗ A(AHA)−1AH)De u
o
R
n
De H
v (S∗ST ⊗ A(AHA)−1AH)De v
o


=R
("
RT
S ⊙  ̇AH
u A(AHA)−1AH  ̇Au RT
S ⊙  ̇AH
u A(AHA)−1AH  ̇Av RT
S ⊙  ̇AH
v A(AHA)−1AH  ̇Au RT
S ⊙  ̇AH
v A(AHA)−1AH  ̇Av
#)
(66)
CRB(q ̃) = σ2
2 F11 − F12F−1
22 F21
−1
= σ2
2 R RT
S ⊙  ̇AH
u  ̇Au RT
S ⊙  ̇AH
u  ̇Av RT
S ⊙  ̇AH
v  ̇Au RT
S ⊙  ̇AH
v  ̇Av
−R
("
RT
S ⊙  ̇AH
u A(AHA)−1AH  ̇Au RT
S ⊙  ̇AH
u A(AHA)−1AH  ̇Av RT
S ⊙  ̇AH
v A(AHA)−1AH  ̇Au RT
S ⊙  ̇AH
v A(AHA)−1AH  ̇Av
#)!−1
= σ2
2R
("
RT
S ⊙  ̇AH
u (IN − A(AHA)−1AH)  ̇Au RT
S ⊙  ̇AH
u (IN − A(AHA)−1AH)  ̇Av RT
S ⊙  ̇AH
v (IN − A(AHA)−1AH)  ̇Au RT
S ⊙  ̇AH
v (IN − A(AHA)−1AH)  ̇Av
#)!−1
= σ2
2R
n
(12 ⊗ RT
S) ⊙  ̇AHΠ⊥
A  ̇A
o −1
(67)
which holds according to the Schur complement theorem. Then, we have
Pk 02K 02K Pk
Φ(RS) I2K I2K Φ(RS)−1
Pk 02K 02K Pk
= PkΦ(RS)Pk Pk
Pk PkΦ(RS)−1Pk
⪰ 0.
(73)
Next, we have
PK
k=1 PkΦ(RS)Pk
PK
k=1 Pk
PK
k=1 Pk
PK
k=1 PkΦ(RS)−1Pk
=
PK
k=1 PkΦ(RS)Pk I2K
I2K
PK
k=1 PkΦ(RS)−1Pk
⪰ 0.
(74)
Then, based on the Schur complement theorem, we can obtain
XK
k=1 PkΦ(RS)−1Pk − I2K
XK
k=1 PkΦ(RS)−1Pk
−1
I2K
=
K
X
k=1
PkΦ(RS)−1Pk −
XK
k=1 PkΦ(RS)Pk
−1
=
XK
k=1 PkΦ(RS)Pk − Ψ(Re S)−1 ⪰ 0.
(75)
Since PK
k=1 PkΦ(RS)−1Pk − Ψ(Re S) is a Hermitian matrix and is positive semi-definite, we have
tr
XK
k=1 PkΦ(RS)−1Pk − Ψ( eRS)−1
=
XK
k=1 tr PkΦ(RS)−1Pk − tr Ψ( eRS)−1
=
XK
k=1 tr Φ(RS)−1PkPk − tr Ψ( eRS)−1
= tr Φ(RS)−1 XK
k=1 Pk − tr Ψ( eRS)−1
= tr Φ(RS)−1 − tr Ψ( eRS)−1
= tr (CRB(q ̃)) − tr Ψ(Re S)−1 (c)
≥ 0,
(76)
where the equality at (c) holds if and only if Φ(RS) = Ψ( eRS), which is equivalent to (42). Subsequently, we derive
tr Ψ(Re S)−1 in the following.
First, we denote
Ψ(Re S) = 2
σ2
M11 M12
M21 M22 , (77)
where
M11 = T Psdiag Π⊥
Aa ̇ u (q ̃, r1)
2
2
, · · · , Π⊥
Aa ̇ u (q ̃, rK )
2
2
,
(78)
M12 = M21 = T Psdiag R
n
a ̇ H
u (q ̃, r1) Π⊥
Aa ̇ v (q, r1)
o
,··· ,
R
n
a ̇ H
u (q ̃, r1) Π⊥
Aa ̇ v (q, rK )
o
,
(79)
M22 = T Psdiag Π⊥
Aa ̇ v (q ̃, r1)
2
2
, · · · , Π⊥
Aa ̇ v (q ̃, rK )
2
2
.
(80) Then, the diagonal block matrix of Ψ(Re S)−1 can be obtained based on the inverse formula of the block matrix as (81) and (82) shown at the top of the next page. As such, tr Ψ(Re S)−1 can be given by
tr Ψ(Re S)−1 = σ2
2 tr M11 − M12M−1
22 M21
−1
+ σ2
2 tr M22 − M21M−1
11 M12
−1
= σ2
2T Ps
K
X
k=1
1
Π⊥
Aa ̇ u (q ̃, rk) 2 − R{  ̇aHu(q ̃,rk)Π⊥
A  ̇av( ̃q,rk)}2 ∥Π⊥
A  ̇av( ̃q,rk)∥2
+ σ2
2T Ps
K
X
k=1
1
Π⊥
Aa ̇ v (q ̃, rk) 2 − R{  ̇aHu( ̃q,rk)Π⊥
A  ̇av(q ̃,rk)}2 ∥Π⊥
A  ̇au(q ̃,rk)∥2
.
(83)

12
(M11 − M12M−1
22 M21)−1 =
1 T Ps
diag Π⊥
Aa ̇ u (q ̃, r1)
2
− R  ̇aH
u (q ̃, r1) Π⊥
Aa ̇ v (q ̃, r1) 2
Π⊥
Aa ̇ v (q ̃, r1) 2 , · · · , Π⊥
Aa ̇ u (q ̃, rK )
2
− R a ̇ H
u (q ̃, rK ) Π⊥
Aa ̇ v (q ̃, rK ) 2
Π⊥
Aa ̇ v (q ̃, rK ) 2
!−1 (81)
(M22 − M21M−1
11 M12)−1 =
1 T Ps
diag Π⊥
Aa ̇ v (q ̃, r1)
2
− R  ̇aH
u (q ̃, r1) Π⊥
A  ̇av (q ̃, r1) 2
Π⊥
Aa ̇ u (q ̃, r1) 2 , · · · , Π⊥
Aa ̇ v (q ̃, rK )
2
− R a ̇ H
u (q ̃, rK ) Π⊥
Aa ̇ v (q ̃, rK ) 2
Π⊥
Aa ̇ u (q ̃, rK ) 2
!−1 (82)
min
ζu,k∈R Π⊥
A (  ̇au (q ̃, rk) − ζu,k  ̇av (q ̃, rk))
2
2
(d)
≤ min
ζu,k∈R ∥(IN − Πk) (a ̇ u (q ̃, rk) − ζu,ka ̇ v (q ̃, rk))∥2
2 = Π⊥
k a ̇ u (q ̃, rk)
2
− R a ̇ H
u (q ̃, rk) Π⊥
k a ̇ v (q ̃, rk) 2
Π⊥
k a ̇ v (q ̃, rk) 2
= a ̇ H
u (q ̃, rk) IN − a (q ̃, rk)a (q ̃, rk)H
∥a (q ̃, rk)∥2
!
a ̇ u (q ̃, rk) −
a ̇ H
u (q ̃, rk) IN − a(q ̃,rk)a(q ̃,rk)H
∥a( ̃q,rk)∥2 a ̇ v (q ̃, rk)
2
a ̇ vH (q ̃, rk) IN − a(q ̃,rk)a( ̃q,rk)H
∥a(q ̃,rk)∥2 a ̇ v (q ̃, rk)
= 4π2
λ2

   
N
X
n=1
x2
n− 1
N
N
X
n=1
xn
!2
−
N
P
n=1
xnyn − 1
N
N
P
n=1
xn
N
P
n=1
yn
2
N
P
n=1
y2n − 1
N
N
P
n=1
yn
2

   
= 4N π2
λ2 var(x ̃) − cov(x ̃, y ̃)2
var(y ̃)
(86)
Next, we rewrite
Π⊥
A  ̇au (q ̃, rk)
2
− R a ̇ H
u (q ̃, rk) Π⊥
Aa ̇ v (q ̃, rk) 2
Π⊥
A  ̇av (q ̃, rk) 2
= min
ζu,k∈R Π⊥
A (a ̇ u (q ̃, rk) − ζu,ka ̇ v (q ̃, rk))
2
2
,
(84)
which can be easily proved via convex quadratic optimization and is omitted here. Then, we denote the subspace U spanned by vector a (q ̃, rk) as U = span(a ( ̃q, rk)) and the subspace V spanned by the column vectors of A as V = col(A), with their projection matrix respectively given by Πk and ΠA. Since the basis vectors of U are in V, U is a subspace of V, i.e., U ⊆ V. Denote W = U⊥ ∩ V with U⊥ representing the orthogonal subspace to U and denote its projection matrix as ΠW. Then, we have
Π⊥
A = IN − ΠA = (IN − ΠW)(IN − Πk), (85)
since ΠWΠk = 0N . Then, for ζu,k ∈ R, we have (86) shown at the top of this page, where the equality at (d) holds if and only if
ΠW Π⊥
k a ̇ u ( ̃q, rk) − ζ∗
u,ka ̇ v (q ̃, rk) = 0N×1. (87)
Moreover, given that U ⊆ V and V is the orthogonal direct sum of U and W, i.e., V = U ⊕ W, we have
ΠA = Πk + ΠW. (88)
Furthermore, since ΠkΠ⊥
k = 0N , we have
ΠAΠ⊥
k = ΠWΠ⊥
k . (89)
Next, we have
ΠAΠ⊥
k a ̇ u (q ̃, rk) − ζ∗
u,ka ̇ v (q ̃, rk)
= ΠWΠ⊥
k a ̇ u (q ̃, rk) − ζ∗
u,ka ̇ v (q ̃, rk) = 0N×1. (90)
In addition, since the null space of A is equivalent to that of ΠA, i.e., range(A) = range(ΠA), we have
AHΠ⊥
k a ̇ u ( ̃q, rk) − ζ∗
u,ka ̇ v (q ̃, rk) = 0K×1. (91)
In other words, the sufficient and necessary condition for the equality at (d) in (87) is equivalent to (91). Similar to the procedure from (84) to (91), we have
Π⊥
Aa ̇ v (q ̃, rk)
2
− R  ̇aH
u (q ̃, rk) Π⊥
A  ̇av (q ̃, rk) 2
Π⊥
Aa ̇ u (q ̃, rk) 2
= min
ζv,k∈R Π⊥
A (a ̇ v (q ̃, rk) − ζv,ka ̇ u (q ̃, rk))
2
2
(e)
≤ 4N π2
λ2 var(y ̃) − cov(x ̃, y ̃)2
var(x ̃) ,
(92)
where the equality at (e) holds if and only if
AHΠ⊥
k a ̇ v (q ̃, rk) − ζ∗
v,ka ̇ u (q ̃, rk) = 0K×1. (93)
Hereby, by combining (76), (83), (86), and (92), we have the first inequality in (41), i.e., (a), where the equality holds if and only if the equalities at (c) , (d), and (e) hold simultaneously. Next, we prove that (b) in (41) holds. Specifically, we have
1
var(x ̃) − cov( ̃x,y ̃)2
var(y ̃)
+1
var(y ̃) − cov(x ̃,y ̃)2
var( ̃x)
≥4
var(x ̃) + var(y ̃) − cov( ̃x,y ̃)2
var(x ̃) − cov( ̃x,y ̃)2
var(y ̃)
≥4
var(x ̃) + var(y ̃) = 4
1 N
N
P
n=1
x2n − μ(x ̃)2 + 1
N
N
P
n=1
y2n − μ(y ̃)2
≥ 4N
N
P
n=1
(x2n + y2n)
(f)
≥8
A2 ,
(94) where the equality at (f) holds if and only is (44) holds. This completes the proof.

13
REFERENCES
[1] W. Jiang, B. Han, M. A. Habibi, and H. D. Schotten, “The road towards 6G: A comprehensive survey,” IEEE Open J. Commun. Soc., vol. 2, pp. 334–366, 2021. [2] L. Zhu, H. Mao, G. Yan, W. Ma, Z. Xiao, and R. Zhang, “Movable and reconfigurable antennas for 6G: Unlocking electromagneticdomain design and optimization,” 2025. [Online]. Available: https: //arxiv.org/abs/2510.13209 [3] W. Roberts, L. Xu, J. Li, and P. Stoica, “Sparse antenna array design for MIMO active sensing applications,” IEEE Trans-
. Antennas Propag., vol. 59, no. 3, pp. 846–858, Mar. 2011. [4] X. Li, H. Min, Y. Zeng, S. Jin, L. Dai, Y. Yuan, and R. Zhang, “Sparse MIMO for ISAC: New opportunities and challenges,” IEEE Wirel. Commun., vol. 32, no. 4, pp. 170–178, Aug. 2025. [5] L. Zhu, W. Ma, W. Mei, Y. Zeng, Q. Wu, B. Ning, Z. Xiao, X. Shao, J. Zhang, and R. Zhang, “A tutorial on movable antennas for wireless networks,” IEEE Commun. Surveys Tuts., 2025, early access, DOI: 10.1109/COMST.2025.3546373. [6] W. Ma, L. Zhu, and R.-
 Zhang, “Movable antenna enhanced wireless sensing via antenna position optimization,” IEEE Trans. Wireless Commun., vol. 23, no. 11, pp. 16 575–16 589, Nov. 2024. [7] W. Ma, L. Zhu, and R. Zhang, “Movable-antenna trajectory optimization for wireless sensing: CRB scaling laws over time and space,” 2025. [Online]. Available: https://arxiv.org/abs/2509.14905 [8] L. Zhu and K.-K. Wong, “Historical review of fluid antenna and movable antenna,” 2024. [Online]. Available: https://arxiv.org/abs/2401.0236-
2 [9] J. Zheng, J. Zhang, H. Du, D. Niyato, S. Sun, B. Ai, and K. B. Letaief, “Flexible-position MIMO for wireless communications: Fundamentals, challenges, and future directions,” IEEE Wireless Commun., vol. 31, no. 5, pp. 18–26, Oct. 2024. [10] S. Zhao, H. Yang, and H. Yang, “Single antenna spatial diversity,” in Proc. 5th Int. Conf. on Wirel. Commun. Netw. Mob. Comput., Beijing, China, Sep. 2009, pp. 1–4. [11] L. Zhu, W. Ma, and R. Zhang, “Movable antennas for wireless communication: Opportunit-
ies and challenges,” IEEE Commun. Mag., vol. 62, no. 6, pp. 114–120, Jun. 2024. [12] L. Zhu, W. Ma, and R. Zhang, “Modeling and performance analysis for movable antenna enabled wireless communications,” IEEE Trans. Wireless Commun., vol. 23, no. 6, pp. 6234–6250, Jun. 2024. [13] Y. Zhou, W. Chen, Q. Wu, X. Zhu, and N. Cheng, “Movable antenna empowered downlink NOMA systems: Power allocation and antenna position optimization,” IEEE Wireless Commun. Lett., vol. 13, no. 10, pp. 2772–2776, Oct. 2024. -
[14] W. Mei, X. Wei, B. Ning, Z. Chen, and R. Zhang, “Movable-antenna position optimization: A graph-based approach,” IEEE Wireless Commun. Lett., vol. 13, no. 7, pp. 1853–1857, Jul. 2024. [15] G. Hu, Q. Wu, K. Xu, J. Si, and N. Al-Dhahir, “Secure wireless communication via movable-antenna array,” IEEE Signal Process. Lett., vol. 31, pp. 516–520, Jan. 2024. [16] W. Liu, X. Zhang, H. Xing, J. Ren, Y. Shen, and S. Cui, “UAV-enabled wireless networks with movable-antenna array: Flexible beamforming a-
nd trajectory design,” IEEE Wireless Commun. Lett., vol. 14, no. 3, pp. 566–570, Mar. 2025. [17] L. Zhu, W. Ma, Z. Xiao, and R. Zhang, “Movable antenna enabled near-field communications: Channel modeling and performance optimization,” IEEE Trans. Commun., vol. 73, no. 9, pp. 7240–7256, Sep. 2025. [18] L. Zhu, W. Ma, B. Ning, and R. Zhang, “Movable-antenna enhanced multiuser communication via antenna position optimization,” IEEE Trans. Wireless Commun., vol. 23, no. 7, pp. 7214–7229, Jul. 2024. [19-
] J. Ding, Z. Zhou, and B. Jiao, “Movable antenna-aided secure full-duplex multi-user communications,” IEEE Trans. Wireless Commun., vol. 24, no. 3, pp. 2389–2403, Mar. 2025. [20] Z. Xiao, X. Pi, L. Zhu, X.-G. Xia, and R. Zhang, “Multiuser communications with movable-antenna base station: Joint antenna positioning, receive combining, and power control,” IEEE Trans. Wireless Commun., vol. 23, no. 12, pp. 19 744–19 759, Dec. 2024. [21] Z. Xiao, Z. Li, L. Zhu, B. Ning, D. B. D. Costa, X.-G. Xia, and -
R. Zhang, “Movable antenna aided NOMA: Joint antenna positioning, precoding, and decoding design,” IEEE Trans. Wireless Commun., 2025, early access, DOI: 10.1109/TWC.2025.3612424. [22] X. Shao and R. Zhang, “6DMA enhanced wireless network with flexible antenna position and rotation: Opportunities and challenges,” IEEE Commun. Mag., vol. 63, no. 4, pp. 121–128, Apr. 2025.
[23] X. Shao, Q. Jiang, and R. Zhang, “6D movable antenna based on user distribution: Modeling and optimization,” IEEE Trans. Wireless Commun., vol. 24, no. 1, pp. 355–370, Jan. 2025. [24] X. Shao, R. Zhang, Q. Jiang, and R. Schober, “6D movable antenna enhanced wireless network via discrete position and rotation optimization,” IEEE J. Sel. Areas Commun., vol. 43, no. 3, pp. 674–687, Mar. 2025. [25] B. Zheng, Q. Wu, T. Ma, and R. Zhang, “Rotatable antenna enabled wireless communication: Modeling a-
nd optimization,” 2025. [Online]. Available: https://arxiv.org/abs/2501.02595 [26] B. Zheng, T. Ma, C. You, J. Tang, R. Schober, and R. Zhang, “Rotatable antenna enabled wireless communication and sensing: Opportunities and challenges,” 2025. [Online]. Available: https://arxiv.org/abs/2505.16828 [27] R. Zhang, L. Cheng, W. Zhang, X. Guan, Y. Cai, W. Wu, and R. Zhang, “Channel estimation for movable-antenna MIMO systems via tensor decomposition,” IEEE Wirel. Commun. Lett., vol. 13, no. 11, pp. 3089-
3093, Nov. 2024. [28] Z. Xiao et al., “Channel estimation for movable antenna communication systems: A framework based on compressed sensing,” IEEE Trans. Wireless Commun., vol. 23, no. 9, pp. 11 814–11 830, Sep. 2024. [29] X. Shao, R. Zhang, Q. Jiang, J. Park, T. Q. S. Quek, and R. Schober, “Distributed channel estimation and optimization for 6D movable antenna: Unveiling directional sparsity,” IEEE J. Sel. Top. Signal Process., vol. 19, no. 2, pp. 349–365, Mar. 2025. [30] M. Fu, L. Zhu, and R. Z-
hang, “Extremely large-scale movable antennaenabled multiuser communications: Modeling and optimization,” 2025. [Online]. Available: https://arxiv.org/abs/2506.02735 [31] Z. Ding, R. Schober, and H. Vincent Poor, “Flexible-antenna systems: A pinching-antenna perspective,” IEEE Trans. Commun., vol. 73, no. 10, pp. 9236–9253, Oct. 2025. [32] Y. Liu, Z. Wang, X. Mu, C. Ouyang, X. Xu, and Z. Ding, “Pinching-antenna systems: Architecture designs, opportunities, and outlook,” IEEE Commun. Mag., pp. 1–7,-
 2025, early access, DOI: 10.1109/MCOM.001.2500037. [33] Y. Liu, H. Jiang, X. Xu, Z. Wang, J. Guo, C. Ouyang, X. Mu, Z. Ding, A. Nallanathan, G. K. Karagiannidis, and R. Schober, “Pinchingantenna systems (PASS): A tutorial,” 2025. [Online]. Available: https://arxiv.org/abs/2508.07572 [34] Z. Wang, C. Ouyang, X. Mu, Y. Liu, and Z. Ding, “Modeling and beamforming optimization for pinching-antenna systems,” IEEE Trans. Commun., pp. 1–16, early access, 2025, DOI: 10.1109/TCOMM.2025.3621049. [35] C. Ou-
yang, Z. Wang, Y. Liu, and Z. Ding, “Capacity characterization of pinching-antenna systems,” 2025. [Online]. Available: https: //arxiv.org/abs/2506.14298 [36] J. Li, L. Zhu, N. Liu, and R. Zhang, “Joint transmit and receive antenna position optimization for movable antenna array enhanced wireless sensing,” IEEE Wirel. Commun. Lett., 2025, early access, DOI: 10.1109/LWC.2025.3603217. [37] Y. Wang, W. Mei, X. Wei, B. Ning, and Z. Chen, “Antenna position optimization for movable antenna-empowered nea-
r-field sensing,” in Proc. IEEE Int. Conf. Commun. Workshops, Jun. 2025, pp. 324–329. [38] J. Ding, Z. Zhou, X. Shao, B. Jiao, and R. Zhang, “Movable antenna-aided near-field integrated sensing and communication,” IEEE Trans. Wireless Commun., 2025, early access, DOI: 10.1109/TWC.2025.3584833. [39] H. Wu, H. Ren, C. Pan, and Y. Zhang, “Movable antenna-enabled RIS-aided integrated sensing and communication,” IEEE Trans. Cogn. Commun. Netw., vol. 11, no. 5, pp. 2879–2892, Oct. 2025. [40] M. Esfandia-
ri and S. A. Vorobyov, “Generalized framework to subspacebased DOA estimation,” IEEE Trans. Signal Processing, pp. 1–14, 2025, early access, DOI: 10.1109/TSP.2025.3615414. [41] P. Stoica and A. Nehorai, “MUSIC, maximum likelihood, and CramerRao bound,” IEEE Trans. Acoust., Speech, Signal Processing, vol. 37, no. 5, pp. 720–741, May 1989. [42] R. Schmidt, “Multiple emitter location and signal parameter estimation,” IEEE Trans. Antennas Propag., vol. 34, no. 3, pp. 276–280, Mar. 1986. [43] J. Lu, E.-
 Tadmor, and A. Zenginoglu, “Swarm-based gradient descent method for non-convex optimization,” Comm. Amer. Math. Soc., vol. 4, pp. 787–822, Dec. 2024.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:25.474Z
- **Text Length:** 67217 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 13 of 13
