# PDF Document: Peng et al. - 2025 - Semi-Passive IRS Enabled Sensing with Group Movable Sensors.pdf

**File Path:** Peng et al. - 2025 - Semi-Passive IRS Enabled Sensing with Group Movable Sensors.pdf

**Processed Date:** 2026-02-10T18:16:17.187Z

**File Size:** 398.90 KB

**Total Pages:** 5

**Extracted Pages:** 5

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3345

**Title:** Semi-Passive IRS Enabled Sensing with Group Movable Sensors

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

1
Semi-Passive IRS Enabled Sensing with Group Movable Sensors
Qiaoyan Peng, Qingqing Wu, Wen Chen, Guangji Chen, Ying Gao, Lexi Xu, Shaodan Ma
Abstract—The performance of the sensing system is limited by the signal attenuation and the number of receiving components. In this letter, we investigate the sensor position selection in a semipassive intelligent reflecting surface (IRS) enabled non-line-ofsight (NLoS) sensing system. The IRS consists of passive elements and active sensors, where the sensors can receive and process the echo signal for direction-of-arrival (DoA) estimation. Motivated by the movable antenna array and fluid antenna -
system, we consider the case where the sensors are integrated into a group for movement and derive the corresponding Cramer-Rao bound (CRB). Then, the optimal solution for the positions of the movable sensors (MSs) to the CRB minimization problem is derived in closed form. Moreover, we characterize the relationship between the CRB and system parameters. Theoretical analysis and numerical results are provided to demonstrate the superiority of the proposed MS scheme over the fixed-position (FP) sche-
me.
Index Terms—Intelligent reflecting surface (IRS), semi-passive IRS, movable sensor (MS), sensor position optimization, wireless sensing, Cramer-Rao bound (CRB).
I. INTRODUCTION
Traditional mono-static and bi-static base station (BS) sensing systems depend on line-of-sight (LoS) BS-target links [1]. However, for practical scenarios where targets are in the nonLoS (NLoS) region, sensing performance may degrade significantly, which poses challenges for effective target estimation. Previous studies have extensively demonstrated the advantages of intelligent reflecting surfaces (IRS) in wireless communication by enabling reconfigurable signal propagation, with recent studies -
highlighting their potential benefits in sensing [2]–[4]. To further improve sensing performance, a semi-passive IRS has been proposed [5]–[7], equipped with
Q. Wu’s work was supported by NSFC 62331022, NSFC 62371289, and Shanghai Jiao Tong University 2030 Initiative. The work of G. Chen is supported by the Natural Science Foundation of Jiangsu Province under Grant BK20241455, and the open research fund of National Mobile Communications Research Laboratory, Southeast University (No. 2025D14). The work of W. Chen is supported by Shanghai Kewei 22JC1404000 and 24DP1500500. This work of S. Ma is supported in part by the Science and Technology Development -
Fund, Macau SAR under Grants 0087/2022/AFJ and 001/2024/SKL, in part by the National Natural Science Foundation of China under Grant 62261160650, and in part by the Research Committee of University of Macau under Grant MYRG-GRG2023-00116-FST-UMDF. (Corresponding author: Qingqing Wu.)
Q. Peng is with the Department of Electronic Engineering, Shanghai Jiao Tong University, Shanghai 200240, China, and also with the State Key Laboratory of Internet of Things for Smart City, University of Macau, Macao 999078, China (email: qiaoyan.peng@connect.um.edu.mo). Q. Wu, W. Chen, and Y. Gao are with the Department of Electronic Engineering, Shanghai Jiao Tong University, Shanghai 200240, China (e-mail: {qingqingwu, wenchen, yinggao}@sjtu.edu.cn). G. Chen is with the School of Electronic and-
 Optical Engineering, Nanjing University of Science and Technology, Nanjing 210094, China and also with National Mobile Communications Research Laboratory, Southeast University (email: guangjichen@njust.edu.cn). L. Xu is with the Research Institute, China United Network Communications Corporation, Beijing 100048, China (e-mail: davidlexi@hotmail.com). S. Ma is with the State Key Laboratory of Internet of Things for Smart City, University of Macau, Macao 999078, China (email: shaodanma@um.edu.mo).
both passive reflecting elements and active sensors to directly receive and process echo signals propagating through the BSIRS-target-IRS link. Compared to a fully-passive IRS, the semi-passive IRS is preferable for deployment, as it enables a shorter signal path, reduces signal attenuation, and enhances sensing accuracy. In [6], [7], the impact of system parameters on the Cramer-Rao bound (CRB) was characterized. The results unveiled that CRB decreases with the number of sensors, i.e., increasing-
 the number of sensors helps to improve the point target’s direction-of-arrival (DoA) estimation accuracy. To address similar issues caused by large-scale antenna arrays, sparse antenna arrays were proposed to reduce the number of antennas while increasing the antenna spacing [8]. However, it may not satisfy different sensing requirements due to the adopted fixed-position (FP) antennas. In contrast, a movable antenna (MA) aided system [9] (or fluid antenna system [10]) was considered, where the po-
sitions of antennas can be optimized, thereby providing new degrees of freedom for improving the sensing performance. The array aperture can be effectively increased by enlarging the antenna movement region with the same number of antennas, which helps achieve a higher angular resolution. Motivated by MA technology [11], we endow the mobility characteristics of MA to the semi-passive IRS, where sensor positions can be optimized, although the optimal positions remain unresolved. Given cost and size-
 constraints in semi-passive IRS-aided sensing systems, it is crucial to optimize sensor positions for maximizing sensing performance without increasing the number of sensors. It can alleviate the requirement for additional sensors, thereby reducing costs and complexity. Moreover, the extent of performance improvement with optimized sensor positions over FP schemes remains unknown, which motivates our work. In this letter, we focus on parameter estimation in a semipassive IRS-aided wireless sensin-
g system with optimized sensor positions. Different from the conventional FP scheme, the semi-passive IRS consists of movable sensors (MSs). Instead of moving independently, the sensors are integrated into a group for movement, which significantly reduces the implementation costs and complexity, and is more appealing in practical scenarios [12], [13]. To this end, we first derive the CRB for DoA estimation and then formulate the corresponding minimization problem by optimizing the sensor position -
vector (SPV). With the optimal solution, we unveil that traditional DoA estimation algorithms may not be effective for the MS array due to its non-uniformity. Theoretical and numerical results verify our findings and demonstrate the superiority of the MS scheme over the FP scheme in terms of CRB.
II. SYSTEM MODEL AND PROBLEM FORMULATION
We consider a semi-passive IRS-enabled sensing system as illustrated in Fig. 1, which consists of a BS with M
arXiv:2511.18892v1 [eess.SP] 24 Nov 2025

2
FP antennas, a semi-passive IRS,1 and a point-like target. The BS-target direct link is assumed to be blocked due to dense obstacles. The IRS consists of N passive reflecting elements and K MSs, where reflecting elements are used for adjusting the phases of probing signals, while MSs have signal reception and processing capabilities. The total number of sensors is given by K = LKl, where L ≥ 2 and Kl ≥ 1 denote the number of groups and the number of sensors within the l-th group, respectively. We -
assume that M and N are even integers, as well as K is an integer, with M ≥ 2, N ≥ 2, and K ≥ 2. The positions of MSs can be adjusted flexibly within the given 1D line segment of length D. 2 Let x , [x1,1, . . . , x1,K1 , . . . , xL,1, . . . , xL,KL] denote the SPV of the MS array, where xl,k = xl,k−1 + dl, 1 ≤ l ≤ L, 2 ≤ k ≤ Kl represents the position of the k-th sensor within the l-th group with the inter-sensor spacing dl. The placement and movement of the MSs will not modify the geometry of th-
e metasurface or affect the positions of the reflecting elements. Moreover, the codebook for reflecting elements can be pre-saved, updating based on changes in the direction of interest. We assume that all the involved links follow the far-field LoS channel model, which remains static over T snapshots. The steering vector (SV) of the MS array is determined by the SPV x and the target’s DoA θ, which is given
by b(x, θ) = [ej 2π
λR x1,1 sin θ, . . . , ej 2π
λR xL,KL sin θ]T , where λR
denotes the wavelength. Let βIS = β0β1 ∈ C denote complex
channel coefficient, where β1 = √λ2Rκ/(64π3dI4T) represents the signal attenuation due to propagation from the IRS to the target and back to IRS sensors, as well as target scattering, with the IRS-target distance dIT and the target’s radar cross section κ. The small-scale fading β0 ∼ CN (0, 1) refers to rapid fluctuation of the received signal. Considering the target is in the far-field region of the semi-passive IRS, the anglesof-departure from the IRS elements to the target are assumed to equal -
the target’s DoA. The target response matrix can be modeled as H = βISb(x, θ)aT (θ), where the SV at the IRS
is given by a(θ) = [e− jπ(N−1)dI sin θ
λR , . . . , e
jπ(N −1)dI sin θ
λR ]T with the inter-element spacing at the semi-passive IRS dI. Since the array centroid is chosen as the reference point, we have
a ̇ H (θ)a(θ) = aH (θ)a ̇ (θ) = 0, (1)
where a ̇ (θ) = ∂a
∂θ = jπ dI
λR cos θDaa with Da =
diag(−(N − 1), −(N − 3), . . . , (N − 1)).
The channel between BS and reflecting elements at the semi-passive IRS is modeled as G = βBIa(θA)cT (θD),
where βBI = √λ2R/(16π2d2BI) denotes the distancedependent path loss with the BS-IRS distance dBI. The transmit response vector of the BS and the received response vector of IRS reflecting elements are given
by c(θD) = [e− jπ(M−1)dB sin θD
λR , . . . , e
jπ(M −1)dB sin θD
λR ]T and
a(θA) = [e− jπ(N−1)dI sin θA
λR , . . . , e
jπ(N −1)dI sin θA
λR ]T , respec
1Assuming each IRS is deployed in a separate region without inter-region interference, our results are applicable to a multi-IRS scenario, as in [14]. 2Our results can be extended to the 2D MS array case by alternately optimizing the horizontal and vertical coordinates of the MSs’ positions using similar optimization methods in [9].
BS Obstacle
Semi-Passive IRS
Point Target
... ...
Movable Sensors
Reflecting Elements
Fig. 1. Illustration of the semi-passive IRS enabled sensing system.
tively, with the angle of departure θD, the angle of arrival θA, and the inter-antenna spacing at the BS dB. The signal passing through the BS-sensor link lacks useful information about the target, which can be excluded to improve sensing performance. The corresponding channel information can be obtained offline by the sensors and effectively eliminated before target estimation. Thus, the signal transmitted from the BS towards the IRS, then to the target, and finally reflected to the MSs at t-th s-
napshot, 1 ≤ t ≤ T , is given by y(t) = βBIβISb(x, θ)aT (θ)Φa(θA)cT (θD)ws(t) + n(t), where Φ = diag(φ) = diag(ejφ1 , · · · , ejφN ) denotes the IRS phase-shift matrix, s(t) represents the unit-power transmitted data, w denotes the beamformer, and n(t) ∼ CN (0, σ2RIK ) is the additive white Gaussian noise at the MSs. For DoA estimation, the received signals can be stacked into the following matrix as Y = [y(1), . . . , y(T )] = βBIβISB(x, θ)S + N, where S = [s(1), . . . , s(T )] with s(t) = ws(t),-
 B(x, θ) = b(x, θ)aT (θ)Φa(θA)cT (θD), and N = [n(1), . . . , n(T )]. For notational convenience, below we drop x and θ in B(x, θ). Note that CRB is a crucial sensing performance metric for target estimation, which provides a lower bound on the variance of unbiased parameter estimators. According to [7], the CRB is given by
CRB(θ)= σ2
R
2T |βBIβIS|2(tr(  ̇BR  ̇BH )− |tr(BRB ̇ H )|2
tr(BRBH ) )
, where the
covariance matrix of the transmit signal is approximated as
R = ∑T
t=1 s(t)s(t)H ≈ wwH , and the first-order partial derivative of B with respect to (w.r.t.) θ is denoted as B ̇ = ∂B
∂θ = (  ̇b(x, θ)aT (θ) + b(θ)a ̇ T (θ))Φa(θA)cT (θD).
The partial derivative of b(x, θ) w.r.t. θ is given by  ̇b(x, θ) = ∂b
∂θ = j 2π
λR cos θDbb(x, θ) with Db = diag(x).
Leveraging the orthogonality property (1) yields
tr(BRBH )=tr(b(x, θ)aT (θ)Φa(θA)cT (θD)wwH c∗(θD)
×aH (θA)ΦH a∗(θ)bH (x, θ))
=K|aT (θ)Φa(θA)cT (θD)w|2, (2)
tr(BR  ̇BH )=tr(b(x, θ)aT (θ)Φa(θA)cT (θD)wwH c∗(θD)
×aH (θA)ΦH (a∗(θ)  ̇bH (x, θ) + a ̇ ∗(θ)bH (x, θ)))
= − j2π cos θ
λR
L
∑
l=1
KL
∑
k=1
xl,k
∣
∣aT (θ)Φa(θA)cT (θD)w∣
∣
2, (3)
tr(B ̇ R  ̇BH )=  ̇b(x, θ)aT (θ)Φa(θA)cT (θD)wwH c∗(θD)
×aH (θA)ΦH a∗(θ)  ̇bH (x, θ) + b(x, θ)a ̇ T (θ)Φa(θA)cT (θD)
×wwH c∗(θD)aH (θA)ΦH a ̇ ∗(θ)bH (x, θ)

3
=4π2cos2θ/λ2R
∑L
l=1
∑KL
k=1 x2
l,k|aT (θ)Φa(θA)cT (θD)w|2
+K|a ̇ T (θ)Φa(θA)cT (θD)w|2. (4)
In target tracking scenarios, especially for static or slowmoving targets, the beamforming design for a point target depends on the intended sensing direction. Therefore, we assume that θ is fixed. Note that enhancing the signal power received at the target is beneficial for improving the sensing accuracy. Under the case where the received signal power is maximized, the probing signal should be directed from the BS towards the IRS and then reflected to the target. Thus, the optimal BS beamformer a-
nd IRS phase shift are given
by wopt = √P0/M c∗(θD) and φopt = (diag(aT (θ))a(θA))∗
|diag(aT (θ))a(θA)| ,
respectively, where P0 is the transmit power. To facilitate derivation, we use CRBθ(x) to represent CRB(θ), since CRB(θ) is a function w.r.t. x. With wopt and φopt, we have
CRBθ(x) = σ2Rλ2R
8π2cos2θP0T M KN 2|βBIβIS|2var(x) , (5)
where var(x) , 1
K
∑L
l=1
∑KL
k=1 xl2,k − 1
K2 (∑L
l=1
∑KL
k=1 xl,k )2
is denoted as the variance function of x. Our objective is to minimize the CRB by optimizing the sensor position, which can be formulated as
mxin CRBθ(x) (6a)
s.t. x1,1 ≥ 0, xL,KL ≤ D, (6b)
xl,k − xl,k−1 ≥ dmin, 2 ≤ k ≤ Kl, 1 ≤ l ≤ L, (6c)
xl,1 − xl−1,1 ≥ Kl−1dmin, 2 ≤ l ≤ L, (6d)
where dmin is the minimum inter-sensor spacing to avoid the coupling effect, which satisfies 0 < dmin ≤ D/(K − 1). Note that D ≥ (K − 1)dmin holds for the feasibility of problem (6), ensuring the constraints (6c) and (6d) are satisfied. Problem (6) is intractable due to its non-convex objective function.
III. SOLUTION AND PERFORMANCE ANALYSIS
In this section, we focus on the impact of the number and positions of MSs on the CRB and aim to further reduce the CRB by adjusting these positions. Then, we compare the MS scheme with the traditional FP scheme in terms of the CRB. It is observed from (5) that CRBθ(x) decreases with var(x). To facilitate derivation, we consider the case where each group is equipped with Kl = K ̄ MSs, denoted by the set K ,
{1, · · · , K ̄ }, and the inter-sensor spacing within each group is set as the minimum spacing, i.e., dl = dmin, where 1 ≤ l ≤ L. As such, problem (6) is equivalent to
mxax var(x) s.t. (6b), (6d). (7)
Although problem (7) is still non-convex, we can obtain the optimal solutions in the following proposition.
Proposition 1: One optimal solution to problem (7) is
xopt
l,k =
{(K ̄ (l−1)+k−1)dmin,
D−(K−K ̄(l − 1)− k)dmin ,
∀k∈K,l=1,. . . ,⌊L/2⌋,
∀k∈K,l=⌊L/2⌋+1,. . .,L. (8)
When L is odd, another optimal solution to problem (7) is
xopt
l,k =
{(K ̄ (l−1)+k−1)dmin,
D−(K−K ̄(l − 1)− k)dmin ,
∀k∈K,l=1,. . . ,⌊L/2⌋+1,
∀k∈K,l=⌊L/2⌋+2,. . .,L. (9)
Proof: For initialization, we set x(0) = x, which satisfies constraints (6b) and (6d). Then, in the l-th adjustment,
the positions of the k-th MSs in l-th group is updated by
x(l+1)
l+1,k←xopt[lK ̄ + k], 1 ≤ l ≤ ⌊L/2⌋, while the others
keeps unchanged, i.e., x(l+1)
p,k = x(l)
p,k, p6=l + 1, k ∈ K. Since
x(l+1)
l+1,k − x(l+1)
l,k = xopt[lK ̄ + k] − xopt[(l − 1)K ̄ + k] =
K ̄ dmin, x(l)
l+2,k − x(l)
l+1,k ≥ K ̄ D, and x(l)
l+1,k − x(l)
l,k ≥ K ̄ dmin,
we have x(l+1)
l+2,k − x(l+1)
l+1,k = (x(l+1)
l+2,k − x(l+1)
l,k ) − (x(l+1)
l+1,k −
x(l+1)
l,k ) = (x(l)
l+2,k − x(l)
l,k) − K ̄ D = (x(l)
l+2,k − x(l)
l+1,k) −
(x(l)
l+1,k − x(l)
l,k) − K ̄ dmin ≥ K ̄ dmin. Based on the mathematical induction, it is guaranteed that x(l) satisfies the constraints (6b) and (6d). Since x(l)
l,1 − x(l−1)
l,1 ≤ 0 and
x(l)
l,1 + x(l−1)
l,1 + (K ̄ − 1)d − 2μ(x(l), l) ≤ 0 with μ(x, p) =
1/(K − K ̄ ) ∑L
l=1,l6=p
∑K ̄
k=1 xl,k, it follows that var(x(l)) −
var(x(l−1)) = K ̄ (K − K ̄ )/K2(x(l)
l,1 − x(l−1)
l,1 )(x(l)
l,1 + x(l−1)
l,1 +
(K ̄ − 1)d − 2μ(x(l), l)) ≥ 0. When ⌊L/2⌋ + 2 ≤ l ≤ L, the sensor position adjustment procedure is similar and omitted for brevity. Note that symmetric transformations preserve the distribution characteristics of data, especially in the derivation of variance. As such, another solution is presented in (9). From (8) and (9), it can be observed that when the number of groups is even, the MSs can be divided into two groups and positioned at both ends of the line segment with an inter-sensor distance -
dmin. When the number of groups is odd, the unpaired group should be placed innermost at either end, depending on its initial position before moving.
Remark 1: When D > (K − 1)dmin, the MS array is a non-uniform array due to the holes between the left and right uniform sub-arrays. Traditional DoA estimation algorithms, e.g., multiple signal classification (MUSIC) [15], can be applied to the MS array but with redundant sidelobes. To fully exploit the superiority of the MSs, an augmented virtual array can be constructed and processed via spatial smoothing, compressive sensing, and array interpolation techniques, which further improves the accurac-
y of DOA estimation [16].
With xopt
l,k , the variance function is given by var(xopt) =
K ̄ /(12K2)(3(KL − K ̄ )D2 − 3(K − 2)(KL − K ̄ )Ddmin +
(K − 1)(LK2 − 2LK + 3K ̄ )d2min) when L is odd and
(3D2 − 3(K ̄ L − 2)Ddmin + (K ̄ 2L2 − 3K ̄ L + 2)d2min)/12
when L is even. We define g(D, K, dmin, L, K ̄ ) , K var(xopt). With var(xopt), the CRB for DoA estimation is
CRBθ(x)= σ2Rλ2R
8π2cos2θP0T M N 2|βBIβIS|2g(D,K,dmin,L,K ̄) . (10)
From (10), it can be readily verified that the CRBθ(x) monotonically decreases with the transmit power P0, the number of transmit antennas M , the number of IRS passive elements N , and D for D ≥ (K − 1)dmin, whereas it monotonically increases with dmin for 0 < dmin ≤ D/(K −1). In the following proposition, we characterize the impact of the number of groups on the CRB.
Proposition 2: CRBθ(x) monotonically decreases with L
except when K ̄ = 1 and D is an even multiple of dmin.

4
Proof: When L is odd, we define go(L) ,
K ̄ /(12K)(3(KL − K ̄ )D2 − 3(K − 2)(KL − K ̄ )Ddmin +
(K − 1)(LK2 − 2LK + 3K ̄ )d2min). When L is even, we define
ge(L) , K/12(3D2 − 3(K ̄ L − 2)Ddmin + (K ̄ 2L2 − 3K ̄ L + 2)d2min). Note that CRBθ(x) is inversely proportional to
go(L) or ge(L), respectively. Since go(L) − go(L − 2) > 0 for K ≥ 5 and ge(L)−ge(L − 2) > 0 for K ≥ 4. Thus, CRBθ(x) monotonically decreases with L when L is even or odd. When
L is odd, we have go(L) − ge(L − 1) = K ̄ f1(D)/(12L) ≥ 0, where f1(D) = 3(L − 1)D2 − 6(L − 1)(K − 1)dminD +
(3(L − 1)K2 + (K ̄ − 6L + 6)K + 2L − 3)d2min. It follows
that go(L) = ge(L − 1) if only if D = (L − 1)dmin. It is observed from Proposition 2 and (10) that more passive elements and sensors should be deployed at the semi-passive IRS for CRB minimization. In the following, we further characterize the relationship among N , L, and K ̄ .
Remark 2: Assuming constraints on power/cost/total number for passive elements and movable sensors, i.e., W1N +W2L =
Q, we define p(L ̃) , N 2g(D, K, dmin, L ̃, K ̄ ), where L ̃ is the continuous value of L, Q is the total budget, W1 and W2 denote the weight of each passive element and movable sensor group, respectively. Note that maximizing p(L) is equivalent to minimizing CRBθ(x). By setting the first-order partial
derivative of p(L ̃) w.r.t. L ̃ to zero, we can obtain the solutions
from 3d2minK ̄ 2L ̃4−6K ̄ dmin(D+dmin)L ̃3+(2d2min+6Ddmin+
3D2)L ̃2+3d2min+6Ddmin+3D2 = 0 when L is odd, and from
−5W2K ̄ d2minL ̃3 + 3K ̄ dmin(Qdmin + 4W2dmin + 4DW2)L ̃2 −
3(2K ̄ dmin(dmin + D)Q + W2(2d2min + 6Ddmin + 3D2))L ̃ +
Q(2d2min + 6Ddmin + 3D2) = 0 when L is even. Considering the rounding technique, the optimal L can be obtained from
these solutions and (D + dmin)/(K ̄ dmin) or 2, by comparing the corresponding values of the objective function.
To demonstrate the superiority of the MS scheme, we compare it with the conventional FP scheme. For FP scheme with half-wavelength inter-sensor spacing, the position of the k-th sensor is given by xFP,k = (k − 1)λR/2. Then, the variance function can be expressed as var(xFP) = λ2R(K + 1)(K − 1)/48 and the resultant CRB is given by
CRBFP(θ) = 6σ2
R
π2cos2θP0T MN 2|βBIβIS|2(K3−K) . To facilitate
comparison, let N1(N2) and K1(K2) denote the number of IRS reflecting elements and the number of sensors under the FP (MS) scheme, respectively. The CRB reduction ratio is defined as f (L) , (CRBFP − CRBθ(x))/CRBFP. In the following proposition, we compare the two schemes in terms of CRB to demonstrate the effectiveness of the MS scheme.
Proposition 3: When N1 = N2 = N and K1 = K2 =
K = K ̄ L, the CRB reduction ratio monotonically increases as L decreases, which is upper-bounded by f (L) ≤ 1 −
3λ2
R(3K ̄ 2−1)
32D2−32(3K ̄ −2)Ddmin+4(3K ̄ −1)(9K ̄ −5)d2min
when L is odd, and
f (L) ≤ 1 − λ2
R(4K ̄ 2−1)
12D2−8(K ̄ −1)(3D+dmin)dmin when L is even.
Proof: When L is odd, f (L) is represented as fo(L). Since fo(L) monotonically decreases with K, we have fo(L) is maximized at L = 3. When L is even, we use fe(L) to represent f (L). Since fe(L) monotonically decreases with L, it follows that fe(L) is maximized at L = 2.
0 5 10 15 20 25 Transmit power (dBm)
-60
-55
-50
-45
-40
-35
-30
-25
CRB (dB)
Fig. 2. CRB versus transmit power P0.
4 6 8 10 12 14 16 18 20 Number of sensors
-50
-45
-40
-35
-30
-25
-20
CRB (dB)
0.6367 dB
Fig. 3. CRB versus number of sensors K.
It is readily verified from Proposition 3 that the upper bound of the CRB gap between MS and FP schemes increases as D
increases and as dmin decreases, except when K ̄ = 1 and L is even, where it is independent of dmin. The results suggest that the practical operating region for the MS scheme with grouping can be extended by increasing the length of the line segment or decreasing the inter-sensor spacing, since it helps increase the movement range, spatial resolution, and flexibility of the array, thereby improving the sensing performance. Furthermore, Proposition 3 demonstrates that the MS scheme is more appealin-
g in practical systems, especially when K is small. This is attributed to the high flexibility of the MS scheme, which allows it to fully exploit the impact of positions to enhance sensing performance. Based on Proposition 2 and 3, it is observed that to achieve the same CRB with the same number of sensors, i.e., K1 = K2, the required number of IRS reflecting elements N1 is larger than N2 when D > (K − 1)dmin. Similarly, to achieve the same CRB with the same number of IRS reflecting elements, i.e.-
, N1 = N2, the required number of sensors K1 is larger than K2. These results highlight the potential of the MS scheme as a cost-efficient solution for CRB minimization.
IV. SIMULATION RESULTS
This section presents numerical results for the DoA estimation of the considered system. The BS-IRS distance and the IRS-target distance are set as dBI = 60 meter (m) and dIT = 20 m, respectively. Unless otherwise specified, other
system parameters are set as follows: κ = 7 dBsm, θ = 60◦, T = 64, λR = 0.2 m, dmin = λR/2, D = 10λR, and
σ2R = −90 dBm. The CRB, originally in deg2, is converted to dB for better visualization. To evaluate the performance of the MS scheme, we plot the CRB versus the transmit power under different system setups

5
50 60 70 80 (deg)
0
0.2
0.4
0.6
0.8
1
Normalized beampattern gain
MS with interpolation MS without interpolation FP
Fig. 4. Beampattern versus target’s DoA θ.
when K ̄ = 2 in Fig. (2). First, it is observed that the CRB decreases linearly with P0 since it is inversely proportional to P0 in (10). Second, The CRB decreases as M increases due to higher transmit beamforming gain and enhanced spatial diversity. Third, a lower CRB is achieved with a larger number of IRS reflecting elements N thanks to higher passive beamforming gain, which improves the received signal power and thus enhances sensing performance. Moreover, we observe that the CRB decreases wit-
h K. This is expected because an increased number of MSs allows for higher array gain and better resolution of the signal’s spatial characteristics, thereby leading to more precise DoA estimation. In Fig. 3, we study the impact of the number and positions of sensors by plotting the CRB versus K when M = 32 and P0 = 15 dBm. To facilitate comparison, we consider the conventional ULA with the FP scheme at half-wavelength inter-sensor spacing. One can observe that the MS scheme outperforms the FP sche-
me for both N = 32 and N = 64 with a performance gap of 0.6367 dB when K = 20, which is more pronounced for smaller K. When K is small, each additional MS significantly increases the variance due to the large positional differences among MSs. The variance keeps increasing with K, however, its growth rate decreases since the positional differences between newly added and existing MSs decrease, resulting in a more uniform spatial distribution. Moreover, we observe that the MS scheme with K ̄ = 2 ach-
ieves CRB performance comparable to the case without grouping. Although increasing the number of groups may result in a slight performance loss, it offers substantial benefits in terms of reduced optimization complexity and simplified movement control. In Fig. 4, we plot the beampatterns versus DoA θ when
K = 8, K ̄ = 2, M = N = 32, and P0 = 15 dBm. We adopt the FP scheme as in Fig. 3. The beampatterns under all the schemes are estimated by the MUSIC method [15]. To further improve the estimation accuracy, we apply the array interpolation method to transform the MS array into a uniform virtual array. According to [17], we fill the holes where the sensors are missing and construct an array with a centro-symmetric geometry. We observe that the MS schemes with and without array interpolation not only -
focus their mainlobes more accurately towards the target (θ = 60◦) but also produce a narrower main beam than the FP scheme, which demonstrates superior performance enabled by optimized sensors’ positions. Moreover, the beampattern under the MS
scheme using the array interpolation-based MUSIC method has a narrower main beamwidth and suppressed sidelobes, resulting from the increased aperture of the virtual array. Consequently, it enables more precise energy focusing in the desired direction, reduces signal spread, and thereby enhances spatial resolution and DoA estimation accuracy.
V. CONCLUSION
In this letter, we investigated CRB minimization in a sensing system aided by semi-passive IRS with group MSs at optimized positions. The CRB for DoA estimation was obtained as an inverse function of the variance of MS positions. With the closed-form expression of the optimal sensor positions, we unveiled that traditional DoA estimation algorithms can be applied but are ineffective for the non-uniform MS array. Moreover, we derived an upper bound on the maximum CRB gain of the MS scheme over the F-
P scheme. Simulation results validated the theoretical findings and demonstrated the effectiveness of the semi-passive IRS with the optimized sensor positions for improving the sensing performance.
REFERENCES
[1] Q. Wu et al., “Intelligent surfaces empowered wireless network: Recent advances and the road to 6G,” Proc. IEEE, vol. 112, no. 7, pp. 724–763, Jul. 2024. [2] G. Chen, Q. Wu, R. Liu, J. Wu, and C. Fang, “IRS aided MEC systems with binary offloading: A unified framework for dynamic IRS beamforming,” IEEE J. Sel. Areas Commun., vol. 41, no. 2, pp. 349–365, Feb. 2023. [3] Q. Peng, Q. Wu, G. Chen, R. Liu, S. Ma, and W. Chen, “Hybrid activepassive IRS assisted energy-efficient wireless communication-
,” IEEE Commun. Lett., vol. 27, no. 8, pp. 2202–2206, Jul. 2023. [4] X. Song et al., “Intelligent reflecting surface enabled sensing: Crame ́rRao bound optimization,” IEEE Trans. Signal Process., vol. 71, pp. 2011–2026, May 2023. [5] X. Shao et al., “Intelligent reflecting surface aided wireless sensing: Applications and design issues,” IEEE Wireless Commun., vol. 31, no. 3, pp. 383–389, Jun. 2024. [6] M. Hua, Q. Wu, W. Chen, Z. Fei, H. C. So, and C. Yuen, “Intelligent reflecting surface-assisted -
localization: Performance analysis and algorithm design,” IEEE Wireless Commun. Lett., vol. 13, no. 1, pp. 84–88, Jan. 2024. [7] Q. Peng, Q. Wu, W. Chen, S. Ma, M. Zhao, and O. A. Dobre, “Semipassive intelligent reflecting surface-enabled sensing systems,” IEEE Trans. Commun., vol. 72, no. 12, pp. 7674–7688, Dec. 2024. [8] W. Roberts et al., “Sparse antenna array design for MIMO active sensing applications,” IEEE Trans. Antennas Propagat., vol. 59, no. 3, pp. 846858, Mar. 2011. [9] W. Ma et al., “-
Movable antenna enhanced wireless sensing via antenna position optimization,” IEEE Trans. Wireless Commun., vol. 23, no. 11, pp. 16 575–16 589, Nov. 2024. [10] K.-K. Wong et al., “Fluid antenna systems,” IEEE Trans. Wireless Commun., vol. 20, no. 3, pp. 1950–1962, Mar. 2021. [11] J. Zhao et al., “Exploiting movable-element STARS for wireless communications,” arXiv preprint arXiv:2412.19974, 2024.
[12] Y. Zhang et al., “Movable antenna-aided hybrid beamforming for multiuser communications,” IEEE Trans. Veh. Technol., 2025, Early Access, doi: 10.1109/TVT.2025.3533078. [13] H. Lu et al., “Group movable antenna with flexible sparsity: Joint array position and sparsity optimization,” IEEE Wireless Commun. Lett., vol. 13, no. 12, pp. 3573–3577, Dec. 2024. [14] Y. Fang et al., “Multi-IRS-enabled integrated sensing and communications,” IEEE Trans. Commun., vol. 72, no. 9, pp. 5853–5867, Sep. 2024.-
 [15] R. Schmidt, “Multiple emitter location and signal parameter estimation,” IEEE Trans. Antennas Propag., vol. 34, no. 3, pp. 276–280, Mar. 1986. [16] C. Zhou et al., “Direction-of-arrival estimation for coprime array via virtual array interpolation,” IEEE Trans. Signal Process., vol. 66, no. 22, pp. 5956–5971, Nov. 2018. [17] C. E. Kassis et al., “Advantages of nonuniform arrays using rootMUSIC,” Signal Process., vol. 90, no. 2, pp. 689–695, Feb. 2010.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:17.187Z
- **Text Length:** 30204 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 5 of 5
