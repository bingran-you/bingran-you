# PDF Document: Xiong et al. - 2025 - Secure Analog Beamforming for Multi-user MISO Systems with Movable Antennas.pdf

**File Path:** Xiong et al. - 2025 - Secure Analog Beamforming for Multi-user MISO Systems with Movable Antennas.pdf

**Processed Date:** 2026-02-10T18:16:36.833Z

**File Size:** 705.88 KB

**Total Pages:** 16

**Extracted Pages:** 16

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3293

**Title:** Secure Analog Beamforming for Multi-user MISO Systems with Movable Antennas

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

JOURNAL OF LATEX CLASS FILES, VOL. 14, NO. 8, AUGUST 2021 1
Secure Analog Beamforming for Multi-user MISO Systems with Movable Antennas
Weijie Xiong, Jingran Lin, Kai Zhong, Liu Yang, Hongli Liu, Qiang Li, and Cunhua Pan
Abstract—Movable antennas (MAs) represent a novel approach that enables flexible adjustments to antenna positions, effectively altering the channel environment and thereby enhancing the performance of wireless communication systems. However, conventional MA implementations often adopt fully digital beamforming (FDB), which requires a dedicated RF chain for each antenna. This requirement significantly increase hardware costs, making such systems impractical for multiantenna deployments. To address -
this, hardware-efficient analog beamforming (AB) offers a cost-effective alternative. This paper investigates the physical layer security (PLS) in an MAenabled multiple-input single-output (MISO) communication system with an emphasis on AB. In this scenario, an MAenabled transmitter with AB broadcasts common confidential information to a group of legitimate receivers, while a number of eavesdroppers overhear the transmission and attempt to intercept the information. Our objective is to maximize th-
e multicast secrecy rate (MSR) by jointly optimizing the phase shifts of the AB and the positions of the MAs, subject to constraints on the movement area of the MAs and the constant modulus (CM) property of the analog phase shifters. This MSR maximization problem is highly challenging, as we have formally proven it to be NP-hard. To solve it efficiently, we propose a penalty constrained product manifold (PCPM) framework. Specifically, we first reformulate the position constraints as a penalty func-
tion, enabling unconstrained optimization on a product manifold space (PMS), and then propose a parallel conjugate gradient descent algorithm to efficiently update the variables. Simulation results demonstrate that MA-enabled systems with AB can achieve a well-balanced performance in terms of MSR and hardware costs.
Index Terms—Movable antennas, physical layer security, analog beamforming, constant modulus, penalty constrained product manifold.
I. Introduction
This work was supported in part by the Natural Science Foundation of China (NSFC) under Grant 62171110. (Corresponding author: Jingran Lin, Cunhua Pan). Jingran Lin and Qiang Li are with the School of Information and Communication Engineering, University of Electronic Science and Technology of China, Chengdu 611731, China, the Laboratory of Electromagnetic Space Cognition and Intelligent Control, Beijing 100083, China, and also with the Tianfu Jiangxi Laboratory, Chengdu, Sichuan 641419, China (e--
mail: jingranlin@uestc.edu.cn; lq@uestc.edu.cn). Weijie Xiong, Kai Zhong, Liu Yang, Hongli Liu are with the School of Information and Communication Engineering, University of Electronic Science and Technology of China, Chengdu 611731, China (e-mail: 202311012313@std.uestc.edu.cn; 201921011206@std.uestc.edu.cn; yangliu991022@gmail.com; hongliliu@std.uestc.edu.cn). Cunhua Pan is with the National Mobile Communications Research Laboratory, Southeast University, China (e-mail: cpan@seu.edu.cn).
W
IRELESS communication networks are inherently vulnerable to information leakage due to their open-access nature, making them susceptible to eavesdropping attacks [1]. To address this challenge, the concept of physical layer security (PLS) was introduced, which leverages spatial diversity to enhance communication for legitimate users (LUs) while obstructing eavesdroppers (EVEs) [2]. Over the years, significant progress has been made in PLS, driven by innovative techniques such as reconfigurable int-
elligent surfaces (RIS) [3]–[5], frequency diverse array (FDA)-based beamforming [6]–[8], and artificial noise (AN)-aided designs [9]–[11], which generally exploit the statistical independence between LU and EVE channels to optimize LU reception while degrading EVE interception performance. Despite advancements in PLS, sophisticated interception strategies, such as deploying multiple EVEs [12], [13] and leveraging associations with low-priority LU [6], [14], pose increasing challenges to secure co-
mmunication. The presence of multiple EVEs exacerbates the correlation between legitimate and eavesdropping channels, particularly in densely deployed or multi-user environments [15], which undermines the spatial diversity essential for PLS. Traditional techniques constrained by fixed-position antennas (FPAs) offer limited solutions to address this issue, even as the number of antennas increases [16]. Consequently, these approaches often struggle to sufficiently differentiate LU and EVE channels, -
resulting in degraded secrecy performance. To address these challenges, the novel technology of movable antennas (MAs) offers a promising solution. Unlike conventional FPA-based communication systems, MAs overcome performance limitations by leveraging the mobility of antennas to enhance system adaptability [17], [18]. In MA-enabled systems, antennas are connected to radio frequency (RF) chains via flexible cables, allowing dynamic repositioning [19]. This mobility enables MAs to fully exploit spat-
ial degrees of freedom (DoFs), facilitating channel reconstruction and significantly improving communication performance. Specifically, MAs can reposition themselves to decouple LU and EVE channels, thereby significantly enhancing secrecy performance. Applications, hardware architectures, and channel characterizations of MA-enabled communication systems are extensively discussed in [17], [18], while joint designs for transmit covariance and antenna movement in MIMO systems are detailed in [19]–[21-
]. Building upon the benefits of MAs for wireless com
arXiv:2511.19360v1 [eess.SP] 24 Nov 2025

JOURNAL OF LATEX CLASS FILES, VOL. 14, NO. 8, AUGUST 2021 2
munication systems [17]–[21], MAs have also been applied to PLS to enhance performance [22]–[27]. For example, [22] first considered a transmitter with multiple movable antennas constrained to one-dimensional motion communicating with a single-antenna LU in the presence of an EVE. The secrecy rate is maximized by jointly optimizing the transmit beamforming and antenna positions under transmit-power and movement constraints. Building on this, [23] further investigated MA-enabled PLS systems, where -
MAs are capable of two-dimensional movement, offering additional DoFs to improve system performance. In [24], the authors extended the study to MIMO systems by considering a multi-antenna EVE and a multi-antenna LU. Moreover, [25] extended the analysis to multi-user cases by considering multiple BOBs to mitigate the cooperative interception of multiple EVEs. Furthermore, MAs have been integrated into emerging systems to improve PLS, such as integrated sensing and communication (ISAC) [26] and freq-
uency diverse array (FDA) systems [27]. Although these studies demonstrated substantial performance improvements, they predominantly focused on scenarios involving either a single LU [22]–[24] or multiple LUs [25]–[27] receiving distinct messages, i.e., unicasting. In contrast, multicasting scenarios [28], [29], where a common confidential message is simultaneously delivered to multiple LUs, represent an important yet relatively unexplored area for MA-enabled PLS. Moreover, prior studies consisten-
tly indicate that increasing the number of antennas in MA-enabled systems provides additional DoFs, thereby significantly reducing channel correlation between LUs and EVEs, thus enhancing communication security [22]–[27]. Nonetheless, practical implementation of systems with numerous antennas remains challenging due to increased hardware costs. These challenges primarily arise because MA systems typically employ fully digital beamforming (FDB) architectures, which require a dedicated RF chain for -
each antenna to achieve precise beamforming. Therefore, there is a pressing need to develop cost-effective solutions that can sustain high performance. Recently, analog beamforming (AB), which can be implemented using low-cost phase shifters and a single variable gain amplifier (VGA), has emerged as a promising solution for cost-effective deployment of antenna arrays. Unlike FDB, which requires a dedicated RF chain for each antenna element, AB leverages analog phase shifters (PSs) and a single VGA-
 to control the beamforming vector. This approach constrains the beamforming vector to constant modulus (CM) entries, with the magnitude of each entry determined by the gain provided by the VGA. Consequently, AB achieves a low peak-to-average ratio (PAR) for transmitted signals, enabling the use of hardware-efficient nonlinear PSs at the transmitter. Due to its potential to reduce hardware complexity, AB has been extensively studied for improving wireless communication performance. Previous studie-
s have addressed various aspects of AB design, including interference suppression, spectral efficiency, and energy efficiency [30]–[32]; how
ever, these works did not consider PLS. In the context of PLS, [33] proposed a two-stage optimization framework to design AB for both information-bearing signals and AN. Additionally, [34] investigated a phase-only zeroforcing (ZF) precoding approach for large-scale antenna arrays. More recently, [35] characterized an ergodic secrecy rate lower bound under AB and hybrid beamforming architectures. MAs have demonstrated significant effectiveness in enhancing PLS, particularly in scenarios involving -
multiple LUs. However, as the number of antennas increases to manage more complex communication environments, the associated hardware costs present considerable challenges. These challenges naturally encourage the adoption of AB, a hardware-efficient solution. This paper investigates the potential of AB to further enhance PLS in MAenabled systems, highlighting its architectural and design advantages in reducing costs while preserving secure communication performance. The key contributions are as f-
ollows:
• We investigate PLS in MA-enabled multiple-input single-output (MISO) systems with AB. The goal is to maximize the multicast secrecy rate (MSR) by jointly optimizing AB phase shifts and MA positions under movement area and CM constraints. While existing works [22], [23] have addressed PLS in MA systems, they primarily focus on unicasting scenarios, overlooking multicasting environments. Moreover, prior designs rely on FDB, where secure beamforming can be solved via generalized eigendecomposition -
under total power constraints. In contrast, CM constraints render the principal eigenvector suboptimal or infeasible, and naive projection onto the CM set leads to significant secrecy performance loss, making the problem highly challenging. • We rigorously prove that the formulated problem is NP-hard, highlighting its computational complexity and the challenges associated with finding optimal solutions. In light of the above difficulties, we focus on developing some tractable approaches to finding-
 high-quality approximate solutions to the problem. • We observe that the complex circle manifold (CCM) naturally satisfies the CM constraints in AB. To strictly enforce the inequality constraints on MA positions, we adopt a penalty function method to handle violations. Building on this foundation, we propose a penalty constrained product manifold (PCPM) framework. By transforming the inequality constraints into a penalty function using smoothing techniques, the problem is reformulated as an uncon-
strained optimization on the product manifold space (PMS). A parallel conjugate gradient descent algorithm is then developed to efficiently update variables on the PMS. We prove that the proposed PCPM framework converges to a KKT point.
The remainder of this paper is organized as follows: Section II introduces the system model and problem

JOURNAL OF LATEX CLASS FILES, VOL. 14, NO. 8, AUGUST 2021 3
statement. In Section III, we reformulate the problem and propose a PCPM framework to solve it. Simulation results are presented in Section IV, and Section V concludes the paper. The following notations are used throughout the paper. A vector and a matrix are represented by a and A respectively; (·)T , (·)H and (·)∗ denote the transpose, conjugate transpose and conjugate respectively. I denotes an identity matrix with an appropriate dimension; CN denotes the set of complex vectors of dimension N ;-
 the circularly symmetrix complex Gaussian distribution with mean μ and variance σ2 is denoted as CN (μ, σ2); Tr(A), || · ||F , || · ||2 and | · | represents trace operator, Frobenius norm, Euclidean norm and absolute value; diag(a) represnts a diagonal matrix where the elements of the vector a are placed on the main diagonal; the phase of each element of a matrix is denoted as arg(A); R{·} denotes the real part of a complex matrix; A⊙B represents Kronecker product.
II. System Model and Problem Formulation
Fig. 1. The MA-enabled MISO communication system with AB.
As illustrated in Fig. 1, we consider a multiuser MISO downlink network, where the transmitter employs analog PSs driven by a common VGA to broadcast confidential information to Nb LUs, in the presence of Ne EVEs attempting to intercept the confidential data. Each of the Nb LUs and Ne EVEs is equipped with a single, fixedposition antenna, while the transmitter is equipped with a linear MA array of size L. The position of the l-th antenna at the transmitter is denoted by pl, 1 ≤ l ≤ L, and the posi-
tions of the L antennas can be compactly expressed as p = [p1, p2, . . . , pL]T ∈ RL. Let s ∈ C be the coded confidential information for LUs with unit power. The transmit signal is given by,
x = √P ws∈ CL, (1)
where √P > 0 represents the transmit power and w ∈ CL is the transmit AB controlled by the PSs with CM, i.e.,
|wl| = 1, ∀l = 1, ..., L, (2)
Then, the received signal at the b-th LU and the e-th EVE are respectively given by,
yˆb(w, p) = √P hH
b (p)ws + ˆnb ∈ C, ∀b = 1, ..., Nb, (3a)
yˇe(w, p) = √P gH
e (p)ws + ˇne ∈ C, ∀e = 1, ..., Ne.
(3b)
where nˆb ∼ CN (0, σˆ2
b ) and nˇe ∼ CN (0, σˇe2) represent the
Gaussian noise for the b-th LU and the e-th EVE, respectively. hb(p) and ge(p) denote the legitimate channels from the Alice to the b-th LU and e-th EVE, respectively. In an MA-enabled network, the channel vector depends not only on the propagation environment but also on the positions of the MAs. In this paper, we adopt a fieldresponse-based channel model [17], which assumes that the size of the transmit array is much smaller than the signal propagation distance, satisfying the far-field assumpti-
on [18]. Under this assumption, as the MAs move, the signal for each propagation path undergoes only phase variations, while the angle of departure (AoD) and amplitude remain unchanged [19], [20]. We further assume that the channel from the MAs to each LU and EVE experiences the same total number of paths, denoted as Mp. Based on these assumptions, the spatial AoDs for the m-th propagation path to the b-th LU and the e-th EVE are denoted as
θˆb,m ∈ [− π
2, π
2
] and θˇe,m ∈ [− π
2, π
2
], respectively, where 1 ≤ m ≤ Mp. Then, the field response vectors (FRVs) for the m-th propagation path to the b-th LU and e-th EVE are given by,
a(p, θˆb,m) = [ej 2π
λ p1cosθˆb,m , ..., ej 2π
λ pLcosθˆb,m ]T ∈ CL, (4a)
a(p, θˇe,m) = [ej 2π
λ p1cosθˇe,m , ..., ej 2π
λ pLcosθˇe,m ]T ∈ CL,
(4b)
where λ is the wavelength. Let βˆb,m and βˇe,m represent the complex path gains for the m-th path to the b-th LU and e-th EVE, respectively. Hence, the communication channel between the MAs and the b-th LU and e-th EVE, considering a total of Mp paths, can be expressed as,
hb(p) =
M ∑p
m=1
βˆb,ma(p, θˆb,m) ∈ CL, ∀b = 1, ..., Nb, (5a)
ge(p) =
M ∑p
m=1
βˇe,ma(p, θˇe,m) ∈ CL, ∀e = 1, ..., Ne. (5b)
Remark 1: As demonstrated in [21], the field-response channel model in (5) can naturally degenerate into spatially-correlated channel models, such as Rayleigh and Rician fading, under the condition of an infinite number of propagation paths with random path gains. In scenarios characterized by rich scattering, which are typical in dense networks, spatially-correlated channel models can therefore be considered as special cases of the fieldresponse model [36]. This implies that the field-response mo-
del inherently captures channel correlations that may influence secrecy performance in such environments. Remark 2: In this paper, we assume that the transmitter has perfect channel state information (CSI) of EVEs,

JOURNAL OF LATEX CLASS FILES, VOL. 14, NO. 8, AUGUST 2021 4
which is possible, say, EVEs are also users of the system, and the transmitter aims to provide different types of users with different services. The services should be provided exclusively for the target users. Moreover, for active EVEs, the CSI can be estimated from the EVEs transmission. More interestingly, even for a passive EVE, there is a possibility for one to estimate the CSI through the local oscillator power inadvertently leaked from the EVEs receiver RF frontend [37]. Besides, the impact-
 of imperfect CSI on the considered system will be evaluated via simulations in Section IV. According to the information-theoretic principles of secure communication [38], the PLS can be characterized by the MSR, defined as the positive difference between the achievable rates of LUs and EVEs, given by,
Rsec(w, p) = min
b=1,...,Nb e=1,...,Ne
[Rˆb(w, p) − Rˇe(w, p)
]+
, (6)
where [u]+ ≜ max(u, 0) indicates the maximum number between 0 and u, and,
Rˆb(w, p) = log(1 + |√P hH
b (p)w|2/σˆ2
b ), (7a)
Rˇe(w, p) = log(1 + |√P gH
e (p)w|2/σˇ2
e ), (7b)
are the achievable rate for b-th LU and e-th EVE, respectively. Remark 3: Our work addresses a multicast scenario where a common confidential message is sent to all LUs. This model is a direct consequence of the considered hardware-efficient AB architecture (see Fig. 1). In this setup, a single VGA and a network of PSs are driven by a single data stream, making multicasting a natural application for this low-cost design. Supporting distinct messages for different users would require a more complex-
 hybrid beamforming architecture with multiple RF chains [5], which entails significantly higher hardware costs and complexity. Our goal is to maximize Rsec(w, p), by jointly optimizing the AB w at the transmitter and the positions of the MAs p. Hence, the optimization problem is formulated as,
max
w,p Rsec(w, p), (8a)
s.t. |wl| = 1, l = 1, . . . , L, (8b)
pl+1 − pl ≥ λ
2 , 1 ≤ l ≤ L − 1, (8c)
p1 ≥ 0, pL ≤ D. (8d)
where constraints (8c) ensure that the distance between any two MAs is no smaller than λ
2 to avoid the coupling
effect; constraint (8d) guarantees that the position of any MA is no greater than D and no smaller than 0. Note that to make (8c) always hold, it is clear to determine that D in (8d) should be no smaller than λ
2 (L − 1).
Due to the non-smoothness and non-concavity of the objective function (8a), the non-convex CM constraints (8b), and the non-convex coupled-variable constraints (8c), problem (8) becomes a highly non-convex problem, as highlighted by the following fact.
Lemma 2.1: Problem (8) is NP-hard in general. Proof: See Appendix A. ■ In light of the above difficulties, in the following sections we focus on developing some tractable approaches to finding high-quality approximate solutions to problem (8). We will first reformulate problem (8) into an easier-tohandle form, and then the penalty constrained product manifold (PCPM) framework is proposed to solve the reformulated problem efficiently. Remark 4: Although both MAs and AB involve phase manipulation, t-
hey operate on different aspects of the system and are therefore complementary. MAs provide geometric channel shaping: by physically repositioning antenna elements, they modify the array steering vectors, reshape hb(p), ge(p), and reduce LU–EVE channel correlation, subject to spatial constraints on antenna placement. AB provides electrical beam shaping: with constant modulus phase shifters, it cannot alter the underlying channels (and thus cannot directly reduce correlation), but it efficiently en-
hances LUs’ achievable rates and forms deep nulls toward EVEs on the given channels. Moreover, it achieves this using a single RF chain with one VGA, thereby avoiding the RF-chain overhead of FDB systems. Joint optimization of MA positions and AB phases allows MAs to create a more separable channel landscape that AB then exploits, resulting in higher MSR and improved robustness compared with either technique alone or MA designs relying solely on FDB.
III. Secrecy rate Maximization Scheme for MA-enabled system with AB
In this section, we propose a framework for MSR maximization. First, we analyze and reformulate the NPhard problem, transforming it into a smooth problem with inequality constraints. Then, we introduce the PCPM framework to solve it.
A. Problem Reformulation
To reduce the difficulty of directly handling the objective function (8a), we first manage it by dropping the log operation and then it can be equivalently written as,
max
w,p max


min
b=1,...,Nb
1 + P |hH
b (p)w|2/σˆ2
b
max
e=1,...,Ne
1 + P |geH (p)w|2/σˇe2
,1


s.t. (8b), (8c), and (8d).
(9)
Notice that the objective function Rsec(w, p) is defined
as the maximum value between the constant 1 and
min
b=1,...,Nb
1+P |hH
b (p)w|2/σˆ2
b
max
e=1,...,Ne
1+P |geH (p)w|2/σˇe2
. Since only the fractional term
depends on w and p, the problem can initially focus on maximizing these terms. If its solution is less than 1, the secrecy rate is negative, making secure transmission unfeasible. This approach streamlines evaluating communication feasibility before tackling the full optimization

JOURNAL OF LATEX CLASS FILES, VOL. 14, NO. 8, AUGUST 2021 5
problem. Thus, we consider the following maximization problem,
max
w,p
min
b=1,...,Nb
1 + P |hH
b (p)w|2/σˆ2
b
max
e=1,...,Ne
1 + P |geH (p)w|2/σˇe2
s.t. (8b), (8c), and (8d).
(10)
which can be re-expressed as the following form after changing the maximization to a minimization and also exchanging the numerator and the denominator in (10),
mw,ipn
max
e=1,...,Ne
1 + P |geH (p)w|2/σˇe2
min
b=1,...,Nb
1 + P |hH
b (p)w|2/σˆ2
b
s.t. (8b), (8c), and (8d).
(11)
However, although the above operation has simplified the difficulty of handling the objective function (8a) by disregarding the [·]+ and log operations, the reformulated objective function (11) is still non-smooth and non-convex. To turn problem (11) into a more manageable form, we smooth the objective of (11) by applying the following log-sum-exponential approximation [39], Lemma 3.1: Given c1, c2, ..., cK ∈ R, it holds for any α > 0 that,
max
k=1,...,K ck ≤ α log
K ∑
k=1
exp( ck
α ) ≤ max
k=1,...,K ck + α log K.
(12a)
Moreover, the inequalities become tight as α → 0. Proof: The proof can be found in [40] and the detailed derivation is omitted for brevity. ■ Using Lemma 3.1, problem (11) is smoothly approximated as,
mw,ipn
α log
N∑e
e=1
exp
( 1+tˇe|gH
e (p,θˇe)w|2 α
)
−α log
N∑b
b=1
exp
(
− 1+tˆb|hH
b (p,θˆb)w|2 α
)
s.t. (8b), (8c), and (8d).
(13)
where tˇe = P/σˇe2 and tˆb = P/σˆ2
b are a constant for
symbol simplification. Note that the reformulated problem (13) is still challenging to solve, due to the non-convex nature of the CM constraints (8b) and the coupledvariable inequality constraints (8c). We observe that the product manifold space (PMS) naturally satisfies the CM constraints (8b), and the inequality constraints (8c) can be transformed into a non-negative smooth function. Leveraging these structural characteristics, we propose the PCPM framework to solve the reformulated problem (13)-
 as follows.
B. The proposed PCPM framework
In this subsection, we drive the steps for solving problem (13) by utilizing the PCPM framework. Specifically, we first convert the inequality constraints (8c) and (8d) into a penalty function using smoothing techniques, enabling
the reformulation of the problem as an unconstrained one on the PMS. To solve the reformulated unconstrained problem over the product manifold, an efficient conjugate gradient descent (CGD) algorithm is derived without relaxing the objective function. 1) Penalty Inequality Constraints over Objective Function: Generally, directly adding inequality constraints to the objective function may struggle to satisfy the constraints, leading to violations and potentially divergent behavior. A more accurate -
way for managing inequality constraints is the exterior penalty (EP) approach [41]. Instead of incorporating constraints directly, this technique augments the objective function with an exterior penalty for constraint violations. Based on this, (13) can be transformed into an exterior penalty function optimization problem with CM constraints given as,
mw,ipn


α log
N∑e
e=1
exp((1+tˇe |gH
e (p)w|2)/α)
−α log
N ∑b
b=1
exp(−(1+tˆb |hH
b (p)w|2)/α)
+ρ
L∑−1
l=1
max(0, gl(pl+1, pl))
+ρ max(0, f1(p1)) + ρ max(0, f2(pL)),


(14a)
s.t. |wl| = 1, l = 1, . . . , L, (14b)
where ρ > 0 is the penalty factor, and,
gl(pl+1, pl) = pl − pl+1 + λ
2 , ∀l ∈ [1, L − 1], (15a)
f1(p1) = −p1, (15b)
f2(pL) = pL − D. (15c)
where (15a), (15b) and (15c) are EP functions for constraints (8c) and (8d), respectively. Note these EP functions are also non-smooth and can be challenging to solve directly. Fortunately, they all comprise a twoterm maximum, which can similarly be smoothed by applying the following log-sum-exponential approximation according to Lemma 3.1. Based on this fact, (14) can be transformed as a smooth EP function optimization problem with CM constraints,
mw,ipn


α log
N∑e
e=1
exp((1+tˇe |gH
e (p)w|2)/α)
−α log
N ∑b
b=1
exp(−(1+tˆb |hH
b (p)w|2)/α)
+ργ
L∑−1
l=1
log(1 + egl(pl+1,pl)/γ )
+ργ log(1 + ef1(p1)/γ ) + ργ log(1 + ef2(pL)/γ ),


(16a)
s.t. |wl| = 1, l = 1, . . . , L, (16b)
Note that the problem (16) involves CM constraints that are challenging to express and handle in a linear space. Manifolds, being flexible and capable of capturing nonlinear relationships, offer a natural framework to express and incorporate these constraints. The manifold’s local Euclidean nature allows it to express complex relationships in a way that aligns with the underlying geometry.

JOURNAL OF LATEX CLASS FILES, VOL. 14, NO. 8, AUGUST 2021 6
2) Construction of the PMS: In this subsection, we construct a PMS to satisfy the constraints of w and p. Ensuring adherence to these constraints is vital for the effectiveness and reliability of the PMS. Constraint (16b) satisfies the complex circle manifold Mw [42],
Mw = {w ∈ CL| |wl| = 1, l = 1, . . . , L} . (17)
Variable p ∈ RL satisfies the Euclidean space manifold Mp,
Mp = {p ∈ RL} . (18)
To represent the feasible set of solutions, we construct the PMS as the Cartesian product of those individual manifolds in (17) and (18). The PMS is given by,
M = Mw × Mp = {(w ∈ CL, p ∈ RL) : |wl| = 1, ∀l, p} . (19) Based on (19), Problem (16) can be reformulated as an unconstrained problem over PMS, denoted as,
min
(w,p)∈M
φ(w, p) =


α log
N∑e
e=1
exp((1+tˇe |gH
e (p)w|2)/α)
−α log
N ∑b
b=1
exp(−(1+tˆb |hH
b (p)w|2)/α)
+ργ
L∑−1
l=1
log(1 + egl(pl+1,pl)/γ )
+ργ log(1 + ef1(p1)/γ ) +ργ log(1 + ef2(pL)/γ ),


(20) The manifold space of (20) introduces curvature and nonlinearity, presenting challenges for algorithm design in PMS directly. To overcome this challenge, it is essential to construct the unified tangent space (UTS), which acts as a local linear approximation to the manifold. This facilitates the extension of traditional optimization algorithms, originally designed for flat spaces, to navigate and optimize over the curved surfaces of the manifold. In the case of the complex circle manifold Mw -
in (17), the tangent space at any point w ∈ CL is the complex hyperplane orthogonal to w, given by,
TwMw = {ξw ∈ CL : R {ξw ⊙ w∗} = 0L
} , (21)
where ξw is the tangent vector at point w. This condition ensures that the tangent vector remains orthogonal to w thus constraining the vector to lie within the manifold and avoiding any radial components. Geometrically, this tangent space forms a complex hyperplane, representing all possible directions of movement that stay tangential to the complex circle manifold at w. In the case of the Euclidean space manifold Mp in (18), the tangent space at any point p ∈ RL is isomorphic to RL itself, given-
 by,
TpMp = {ξp ∈ RL} , (22)
where ξp is the tangent vector at the point p. Since Euclidean space is flat, the tangent space at any point p consists of all possible vectors in RL, without any additional constraints. Geometrically, the tangent space at p is a linear space with the same dimension as the
manifold, meaning it spans the entire L-dimensional space, representing all possible directions of movement within RL.
Based on (21) and (22), the UTS T(w,p)M is expressed as [43],
T(w,p)M = TwMw × TpMp
=
{ (ξw ∈ CL, ξp ∈ RL) :
(R {ξw ⊙ w∗} = 0L, ξp)
}
, (23)
By leveraging the conceptual foundations of PMS (19) and UTS (23), we systematically develop an efficient algorithm for solving (20), as depicted in Fig. 2. The algorithm primarily employs CGD within the UTS, followed by projecting the solution back onto the UTS. A key aspect of this methodology is the strategic design of transportation operations that enable smooth transitions between different spaces within the manifold framework. This approach not only ensures computational efficiency but also -
highlights the importance of addressing the geometric complexities inherent in (20).
Fig. 2. Geometric illustration of the PCPM method.
3) The proposed CGD algorithm: In this subsection, we propose the CGD algorithm to solve (20), where AB w and MA positions p are simultaneously optimized. Let w0 and p0 be the initial variables. As illustrated in Fig. 2, the CGD algorithm cyclically performs the following three steps: (1) calculation of the parallel Riemannian gradient, (2) update of the feasible solution, and (3) adaptive adjustment of the step size using the Armijo line search, for k = 0, 1, . . ., until a stopping criterion is -
satisfied.
(a) Derive the parallel Riemannian gradient: The parallel Riemannian gradient of φ(wk, pk) in (20) is a combination of the individual Riemannian gradients with respect to wk and pk. The Riemannian gradient is defined as the orthogonal projection of the Euclidean gradient onto the

JOURNAL OF LATEX CLASS FILES, VOL. 14, NO. 8, AUGUST 2021 7
σk =


R
[
gradH
wk
(
gradwk −
(
gradwk−1 −R
{
gradwk−1 ⊙wk∗
}
⊙ wk
))
+ gradH
pk
(
gradpk − gradpk−1
)]
R


(
gradwk −
(
gradwk−1 −R
{
gradwk−1 ⊙wk∗
}
⊙ wk
))H (dwk−1 − R {dwk−1 ⊙ wk∗
} ⊙ wk
)
+
(
gradpk − gradpk−1
)H
dpk−1




+
(27)
tangent space, which is expressed as [44],
gradwk = Projwk (∇wk φ(wk, pk))
= ∇wk φ(wk, pk) − R [∇wk φ(wk, pk) ⊙ w∗
k] ⊙ wk, (24a)
gradpk = Projpk (∇pk φ(wk, pk)) = ∇pk φ(wk, pk),
(24b)
where gradwk and gradpk are the orthogonal projection
operators with respect to wk and pk. ∇wk φ(wk, pk) and ∇pk φ(wk, pk) represent the Euclidean gradients with respect to wk and pk. The derivations of the Euclidean gradients with respect to w and p are presented in Appendix B. Based on (24), the parallel Riemannian gradient of φ(wk, pk) on the UTS is given as,
grad φ(wk, pk) = [gradwk ; gradpk ]. (25)
(b) Update of the feasible solution: Generally speaking, the current negative gradient is commonly used as the descent direction in manifold-based optimization methods. However, utilizing this descent direction often leads to getting stuck in local minima when the gradient approaches zero. To address this issue, we adopt a conjugate descent direction [45], which considers not only the current gradient but also the gradients from previous iterations. By incorporating gradient information from prior-
 iterations, this approach helps to escape local minima where pure gradient descent would otherwise become trapped. Additionally, the information from previous iterations accelerates convergence by amplifying movement in directions of consistent descent, enabling the algorithm to converge more efficiently. Specifically, the conjugate descent direction is given as follows,
d(wk,pk) = [dwk ; dpk ]
=
[ − gradwk +σk Tranwk←wk−1 (dwk−1 ); − gradpk +σk Tranpk←pk−1 (dpk−1 )
]
(26) where dwk and dpk represent the individual descent directions for wk and pk, respectively; σk is the conjugate parameter which is defined in (27) at the top of the next page; Tranwk←wk−1 (dwk−1 ) and Tranpk←pk−1 (dpk−1 ) represent the transport operations that map tangent vectors between different tangent spaces. These operations transfer the tangent vectors dwk−1 and dpk−1 from the points wk−1 ∈ M and pk−1 ∈ M to new points wk ∈ M and pk ∈ M, respectively, as follows,
Tranwk←wk−1 (dwk−1 ) = dwk−1 − R [dwk−1 ⊙ w∗
k
] ⊙ wk, (28a)
Tranpk←pk−1 (dpk−1 ) = dpk−1 . (28b)
Given the descent direction d(wk,pk) in (26), the update on the UTS T(wk,pk)M is,
[wˆ k; ˆpk] = [wk; pk] + υkd(wk,pk)
= [wk + υkdwk ; pk + υkdpk ], (29)
where υk is the step size, adaptively updated by the Armijo line search algorithm, as described in the next step; wˆ k and ˆpk are the updated values on the UTS. Generally, updates on the UTS T(wk,pk)M may not ensure that the resulting point remains on the PMS M. In such cases, a retraction process is necessary to map a point from the UTS T(wk,pk)M back onto the PMS M, thereby ensuring feasibility. Hence, the next feasible solution is obtained as follows,
[wk+1; pk+1] = Ret(wk,pk)(wˆ k, ˆpk)
= [Retwk (wˆ k); Retpk (ˆpk)]
=
[
wˆ k ⊙ 1
|wˆ k| ; ˆpk
] ,
(30)
where Retwk (wˆ k) and Retpk (ˆpk) denote the individual retraction operations for wˆ k and ˆpk, respectively. (c) Adaptive step size update: Using the Armijo line search strategy [46], we dynamically adjust the step size during updates, allowing the algorithm to converge more efficiently. By modifying the step size based on the improvement in the objective function, the algorithm takes larger steps when progress is significant and smaller steps when progress slows. Specifically, the Armijo line s-
earch strategy is defined as follows,
φ(wk+1, pk+1) ≤ φ(wk, pk) + τ r · υˆ · dˆφk , (31)
where τ ∈ (0, 1) is the step size coefficient, r is the number of line searches, and υˆ is the initial step size. The final step size for the k-th iteration is given by υk = τ r · υˆ. dˆφk represents the directional derivative, which is defined as follows:
dˆφk = gradH φ(wk, pk)d(wk,pk). (32)
To further expedite convergence, the initial step size υˆ for the upcoming (k+1)-th iteration can be adjusted based on changes in r. If r = 1 satisfies (31), it means that only one line search was performed, resulting in a decrease in the objective function. This indicates that the current step

JOURNAL OF LATEX CLASS FILES, VOL. 14, NO. 8, AUGUST 2021 8
size is too small, so it should be increased to υˆ = ι1υk for the next iteration, where ι1 > 1. If r = 2 satisfies (31), it indicates an appropriately chosen initial step size, necessitating that the step size remains at υˆ = υk. If r ≥ 3 satisfies (31), it indicates that more than three line searches were performed, resulting in a small step size. In this case, the step size should be increased to υˆ = ι2υk for the next iteration, where ι2 > 1. In summary, the initial step size υˆ update rule for-
 the next iteration is summarized as,
υˆ =


ι1υk, r = 1 υk, r = 2 ι2υk, r > 2
. (33)
Based on the above discussion, the proposed CGD algorithm to tackle (20) is compactly presented in Algorithm 1. The algorithm mainly includes: (1) calculation of the parallel Riemannian gradient, (2) update of the feasible solution, and (3) adaptive adjustment of the step size using the Armijo line search. The stop conditions include: the Riemannian gradient satisfies ∥ grad φ(wk, pk)∥ ≤ εj or the number of iterations satisfies k ≥ 200.
Algorithm 1 : The CGD algorithm to the problem (20). Input: wj, pj, εj.
Output: wj+1 = wk+1, pj+1 = pk+1.
1: Initialize k = 0, wk = wj and pk = pj. 2: repeat 3: Calculate grad φ(wk, pk) by (24)-(25); 4: Calculate d(wk,pk) by (26)-(28) and υk by (31)-(32);
5: Update wk+1 and pk+1 by (29)-(30); 6: k ← k + 1; 7: end
8: Until some stopping criterions (e.g., ∥ grad φ(wk, pk)∥ ≤ εj or k ≥ 200) are satisfied
4) Update the smoothing parameter, the penalty parameter, threshold parameter, and constraint violation parameter: The smoothing parameter γ and the penalty parameter ρ play a crucial role in balancing constraints and solutions in optimization problems, allowing for control over solution properties and the optimization process. In this work, we gradually decrease γ in each iteration of the outer loop according to, γj+1 = max{γmin, γj · δγ}, where γmin is the minimum allowable value, and δγ ∈ (0, 1-
) is a constant decay factor. Meanwhile, the penalty parameter ρ is gradually increased during each outer iteration. Specifically, if the current solution is far from satisfying the constraints, it may indicate that the penalty is insufficient. In such cases, ρ is updated for the next iteration as ρj+1 = ρj/δρ, where δρ ∈ (0, 1) is a constant factor that adjusts the penalty parameter. The threshold parameter εj is used to limit the Riemannian gradient Frobenius norm of the CGD algorithm, represent-
ed as ∥ grad φ(wk, pk)∥ ≤ εj. As iterations progress, more accurate solutions are required, necessitating a reduction in εj. Therefore, the adjustment is made as
εj+1 = max{εmin, εj · δε}, where εmin is the lower bound, and δε ∈ (0, 1) is a constant factor for adjusting εj. The constraint violation parameter ςj is used to constrain the spectral inequality gl(pl+1, pl), ∀l, f1(p1), and f2(pL) in (15) to satisfy max{0, gl(pl+1, pl), ∀l, f1(p1), f2(pL)} ≤ ςj → ςmin = 0, where ςmin is the lower bound of ςj. As iterations progress, the CGD algorithm generates sequences wj and pj that converge towards a feasible limit point satisfying gl(pl+1, pl) ≤ 0, ∀l, f1(p1-
) ≤ 0, and f2(pL) ≤ 0 when the penalty factor ρj is sufficiently large. Therefore, the adjustment is made as ςj+1 = max{ςmin, ςj · δς }, where ςmin is the lower bound, and δς ∈ (0, 1) is a constant factor for adjusting ςj. To obtain a near-optimal solution for (13), the PCPM framework is detailed in Algorithm 2. The termination conditions, denoted by (γmin, omin, εmin, ςmin), serve as essential lower bounds within the proposed algorithm, ensuring convergence and computational efficiency.
Algorithm 2 : The PCPM framework to the problem (13). Input: Initial j = 0, CM beamforming wj, position of MAs pj, smoothing parameter γj, minimum smoothing parameter γmin, penalty parameter ρj, threshold parameter εj, minimum threshold parameter εmin, constraint violation parameter ςj, minimum constraint violation parameter ςmin, constant factors δγ, δρ, δε, δς ∈ (0, 1), and minimum step length omin. 1: Reapeat 2: Update wj+1 and pj+1 by Algorithm 1; 3: Update γj+1 = max{γmin, γj · δγ }; 4: Updat-
e εj+1 = max{εmin, εj · δε}; 5: Update ςj+1 = max{ςmin, ςj · δς };
6: IF max
{ max{0, gl(pl+1, pl)}, ∀l,
max{0, f1(p1)}, max{0, f2(pL)}
}
≥ ςj+1
7: Update ρj+1 = ρj /δρ; 8: ELSE 9: Update ρj+1 = ρj ; 10: END 11: j ← j + 1;
12: Until some stopping criterions (e.g., ∥[wj; pj] − [wj−1; pj−1]∥ ≤ omin, γj ≤ γmin, εj ≤ εmin, and ςj ≤ ςmin ) are satisfied
C. Analysis of computation complexity and convergence
1) Analysis of computation complexity: The computational complexity of the proposed PCPM framework primarily arises from updating AB vector w and MA positions p in Algorithm 1. Specifically, computing the Riemannian gradients grad wk and grad pk with respect to w and p, as shown in equations (24) and (25), has approximate computational complexities of O(Mp(Ne+Nb)(2L2+ 2L)) and O(Mp(Ne + Nb)(12L2 + 4L)), respectively. The computation of the descent direction d(wk,pk) according to equations (26)-(28-
) has an approximate complexity of O(4L). Additionally, determining the step size υk via

JOURNAL OF LATEX CLASS FILES, VOL. 14, NO. 8, AUGUST 2021 9
equations (31) and (32) requires approximately O(2rL) complexity. Assuming Tin iterations for the inner loop in Algorithm 1 and Tout iterations for the outer loop in Algorithm 2, the overall complexity of the PCPM framework is approximately O((Tin + Tout)Mp(Ne + Nb)(14L2 + (10 + 2r)L)).
2) Analysis of convergence: To establish the convergence for Algorithm 2, we first prove the convergence of Algorithm 1 to a stationary point in Theorem 3.1. Theorem 3.1: Let {w, p} be a sequence generated by Algorithm 1. Then, every limit point generated by this sequence is a stationary point of problem (20). Proof: See Appendix C. ■ We now demonstrate that Algorithm 2 converges to a KKT point. To this end, we utilize the following theorem from [47]. Theorem 3.2: In Algorithm 2, we set γmin = omi-
n = εmin = ςmin = 0 and ρ0 (the initial penalty) is sufficiently large. If the sequence {w, p} produced by Algorithm 1 admits a feasible stationary point where the linear independence constraint qualification (LICQ) condition holds, then it also satisfies the KKT conditions for (13). Proof: See Proposition 4.2 in [47]. ■ To ensure that Algorithm 2 converges to a KKT point, it remains to verify that the sequence {w, p} satisfies the LICQ condition [48]. We analyze the gradients of all active constr-
aints in (13) at any candidate point,
• Equality constraints |wl| = 1, l = 1, . . . , L in (8b) have gradients ∇hwl aligned with the canonical basis vector corresponding to wl. Since each constraint involves a distinct component of w, these gradients are linearly independent. • Minimum spacing constraints pl+1 − pl ≥ λ/2 (if active) in (8c) have gradients of the form ∇hpl = [0, . . . , −1, 1, . . . , 0], which involve only two consecutive position variables and are mutually independent. • Boundary constraints p1 ≥ 0 and pL ≤ D in (8d)-
 have gradients ∇hp1 = [1, 0, . . . , 0] and ∇hpL = [0, . . . , 0, 1], which are distinct canonical basis vectors in the position space.
Since the gradients of all active constraints are mutually independent, the LICQ condition holds for problem (13). Therefore, with γmin, omin, εmin, ςmin → 0 and a sufficiently large ρ0, Algorithm 2 converges to a KKT point by Theorem 3.2.
IV. Numerical Results
In this section, we present simulation results to evaluate the PLS performance of the MA-enabled design in the proposed MISO communication system with AB. For comparison, the proposed method is evaluated against the following benchmark schemes:
• MA-FDB-GD: The transmitter is equipped with an FDB architecture and L MAs, where the gradient descent method proposed in [22], [23] is applied. • FPA-FDB-SS: The transmitter is equipped with an FDB architecture and FPA-based uniform linear ar
0 100 200 300 400 500 Number of inner iterations
0.1
0.25
0.5
1
2
Objective function value of (13)
(a)
1st inner loop 2nd inner loop 3rd inner loop 4th inner loop 5th inner loop 6th inner loop
0 5 10 Number of outer iterations
0
0.01
0.02
0.03
0.04
0.05
Maximum violation of the inequality constraints
(b)
X5 Y0
Fig. 3. Convergence of the proposed PCPM framework.
rays (ULAs), where L transmit antennas are selected via greedy search [49] to maximize the MSR. • MA-AB-GD: Similar to the MA-FDB-GD architecture, but it incorporates a direct projection operation to ensure that the FDB vector lies on the unit circle, achieving CM AB. • FPA-FDB-ULA: The transmitter is equipped with an FDB architecture and L FPA-based ULAs [50]. • FPA-AB-ULA: The transmitter is equipped with an AB architecture and L FPA-based ULAs [50]. • MA-AB-R: The transmitter is equipped with a-
n AB architecture and L MAs, where the MAs are distributed randomly on average to satisfy the constraints of the MA movement area.
In the simulations, the parameters are set as follows, unless otherwise specified: the number of transmit antennas is L = 16, the wavelength is λ = 0.01 m, the total transmitter power is Pt = M P = 0 dBW, and the total length of the antenna array is D = 30λ. The number of LUs is assumed to be Nb = 4, and the number of EVEs is Ne = 4. Additionally, the distance between each b-th LU or e-th EVE and the BS is modeled as a random variable following a uniform distribution, i.e., di ∼ U [dmin, dmax], ∀i-
 ∈ {b, e}, where dmin = 60m and dmax = 100m represent the minimum and maximum distances, respectively. The spatial AoDs from the BS to the b-th LU and the e-th EVE are assumed to be independent and identically distributed (i.i.d.) random variables drawn from a uniform distribution, i.e., θˆb,m, θˇe,m ∼ U [0, π], for 1 ≤ m ≤ Mp. The total number of propagation paths is set as Mp = 6. Correspondingly, the complex path gains for each b-th LU and e-th EVE are given by βˆb,m ∼ g0d−α
b /Mp
and βˇe,m ∼ g0d−αpl
e /Mp, respectively, for 1 ≤ m ≤ Mp, where g0 = −40dB denotes the average channel gain at the reference distance d0 = 1m, and αpl = 2.8 represents the path-loss exponent. Furthermore, the variances of Gaussian noise are set as σˆ2
b = σˇe2 = −70dBm, and the
hyperparameter is set to α = 100. All simulation results are averaged over 1,000 independent random realizations. Fig. 3 illustrates the convergence performance of the

JOURNAL OF LATEX CLASS FILES, VOL. 14, NO. 8, AUGUST 2021 10
10-3 10-2 10-1 100 101 102 103 Different values of the hyperparameter ( )
0
1
2
3
4
5
6
7
8
9
10
Multicast secrecy rate (bps/Hz)
L=32 L=28 L=24 L=20 L=16 L=12 L=8
Fig. 4. Comparison of MSR with varying values of the hyperparameter (α).
8 12 16 20 24 28 32 Number of antennas at the transmitter (L)
0
0.1
0.2
0.3
0.4
0.5
0.6
0.7
Channel correlation between LUs and EVEs ( cc)
FPA-based MA-based
Fig. 5. Comparison of channel correlations (ρcc) with varying numbers of antennas at the transmitter (L).
proposed PCPM framework. In Fig. 3(a), the objective function value in (13) converges monotonically within each inner loop, with the required iterations decreasing significantly after the initial loop. The outer loop also converges monotonically, as the objective value at the end of each iteration is consistently lower than at the end of the previous one. Fig. 3(b) shows the maximum violation of the inequality constraints, where the error converges rapidly within five outer iterations, confirming -
the fast convergence of the proposed framework. Since the choice of α introduced in (13) greatly influences the tightness of the upper bound for the original function, we vary its value in Fig. 4 to determine the setting that maximizes PLS performance. As shown in the figure, for all considered numbers of transmit antennas L, the MSR increases monotonically as α grows from 10−3 to 100, and then decreases monotonically as α increases from 100 to 103. The maximum MSR is achieved around α = 100, indi-
cating that this value provides the best approximation to the original function. Therefore, α = 100 is selected as the hyperparameter in our design. Fig. 5 compares the channel correlation ρcc between
8 12 16 20 24 28 32 Number of antennas at the transmitter (L)
1
2
3
4
5
6
7
8
9
10
Multicast secrecy rate (bps/Hz)
MA-FDB-GD Proposed FPA-FDB-SS MA-AB-GD
FPA-FDB-ULA FPA-AB-ULA MA-AB-R
Fig. 6. Comparison of MSR with varying numbers of antennas at the transmitter (L).
LUs and EVEs for the FPA-based and MA-based designs. The channel correlation is defined as ρcc =
max b=1,...,Nb e=1,...,Ne
|gH
e hb|
∥ge∥2∥hb∥2 . It can be observed that, with the
assistance of MAs, ρcc between LUs and EVEs is significantly reduced compared with the FPA-based systems. This reduction provides MA-based systems with greater spatial diversity, thereby enhancing PLS. Furthermore, both FPA-based and MA-based systems achieve lower ρcc as the number of transmit antennas increases, indicating that increasing antennas is an effective way to further improve PLS. This observation underscores the importance of incorporating AB into MA-based systems to realize practical,-
 low-cost designs. This observation also implies that in scenarios with high user density, where legitimate and eavesdropping channels are inherently strongly correlated, achieving a non-zero secrecy rate can be challenging. While MAs significantly reduce this correlation, as shown in the figure, they cannot completely eliminate it if an EVE is physically co-located with an LU. In such worstcase zero-secrecy scenarios, the channel vectors become nearly identical (ρcc → 1), rendering spatial separa-
tion infeasible. Fig. 6 compares the MSR in (6) across various benchmark schemes as the number of antennas L increases. The results show that the MSR improves with more antennas due to the additional DoFs. The proposed method achieves the second-highest MSR, trailing only the MA-FDB-GD scheme, but significantly reduces hardware costs,making the proposed strategy more practical. It also outperforms all architectures without MAs, demonstrating the advantages of MAs in enhancing secure communication -
by modifying steering vectors. In contrast, the MA-ABGD method underperforms compared to the FPA-FDBSS scheme with sparse antenna selection, highlighting the limitations of the gradient descent approach for AB systems and the effectiveness of the proposed method. Fig. 7 compares the MSR across different benchmark schemes as the total power at the transmitter (Pt) increases. As shown in the figure, the MSR increases with Pt

JOURNAL OF LATEX CLASS FILES, VOL. 14, NO. 8, AUGUST 2021 11
1234567 Total power at the transmitter (P)
2
3
4
5
6
7
8
9
10
11
Multicast secrecy rate (bps/Hz)
MA-FDB-GD Proposed FPA-FDB-SS MA-AB-GD
FPA-FDB-ULA FPA-AB-ULA MA-AB-R
Fig. 7. Comparison of MSR with varying total transmit power (Pt).
2 4 6 8 10 12 14 Number of the legitimate users (Nb)
1
2
3
4
5
6
7
8
9
Multicast secrecy rate (bps/Hz)
MA-FDB-GD Proposed FPA-FDB-SS MA-AB-GD
FPA-FDB-ULA FPA-AB-ULA MA-AB-R
Fig. 8. Comparison of MSR with varying numbers of legitimate users (Nb).
for all architectures, as higher power strengthens the signal in the system. However, the MA-AB-R method shows the slowest increase in MSR, which can be attributed to the random distribution of the antenna array. Unlike structured antenna arrays, the random positioning of antennas in the MA-AB-R method does not provide an optimal configuration for enhancing signal strength or spatial diversity, leading to less efficient utilization of the increased transmit power. Figs. 8 and 9 depict the MSR perf-
ormance of various architectures as the number of LUs (Nb) and EVEs (Ne) increases from 2 to 14. In both figures, the MSR decreases as Nb and Ne increase, primarily due to heightened interference and signal leakage, which make maintaining secrecy more challenging. Notably, the rate of decline is more pronounced with increasing EVEs compared to LUs. This is because a larger number of EVEs amplifies signal leakage to unintended receivers, significantly reducing the communication secrecy. This trend -
highlights a critical operational limit: as Ne continues to grow, the probability of at least one EVE possessing a channel stronger than that of the weakest LU increases. Eventually, the MSR
2 4 6 8 10 12 14 Number of the eavesdroppers (Ne)
0
1
2
3
4
5
6
7
8
9
Multicast secrecy rate (bps/Hz)
MA-FDB-GD Proposed FPA-FDB-SS MA-AB-GD
FPA-FDB-ULA FPA-AB-ULA MA-AB-R
Fig. 9. Comparison of MSR with varying numbers of eavesdroppers (Ne).
10 20 30 40 50 60 70 Total length of the antenna array at the transmitter (D)
1
2
3
4
5
6
7
8
9
Multicast secrecy rate (bps/Hz)
MA-FDB-GD Proposed FPA-FDB-SS MA-AB-GD
FPA-FDB-ULA FPA-AB-ULA MA-AB-R
Fig. 10. Comparison of MSR with varying total antenna array length at the transmitter (D).
for all schemes will inevitably converge to zero, defining a zero-secrecy scenario. Our proposed method, by effectively leveraging MAs to mitigate channel correlation, can sustain a positive secrecy rate for a larger number of EVEs compared to FPA-based schemes, thereby pushing back the onset of this zero-secrecy threshold. In contrast, while additional LUs introduce interference, their impact is less severe as they are part of the intended communication. Despite these challenges, the proposed met-
hod consistently achieves the second-highest MSR in both scenarios, underscoring its superior performance and demonstrating the effectiveness of MA-enabled systems with hardwareefficient AB in optimizing antenna positions for secure multicast transmission in dynamic environments. Fig. 10 shows the MSR performance of various architectures as the total antenna array length D increases from 10λ to 70λ. The results indicate that the MSR of MA-enabled systems increases with D, while FPAbased systems re-
main nearly constant. This is because a larger D provides more spatial DoFs for MAs to dynamically adjust antenna positions, optimizing beamforming toward legitimate users and improving multicast

JOURNAL OF LATEX CLASS FILES, VOL. 14, NO. 8, AUGUST 2021 12
0 5 10 15 20 25 30 Antenna position at the transmitter
MA-FDB-GD Proposed FPA-FDB-SS MA-AB-GD FPA-FDB-ULA FPA-AB-ULA MA-AB-R
Fig. 11. Comparison of antenna positions at the transmitter.
1234567 Number of the propagation paths (Mp)
1
2
3
4
5
6
7
8
9
Multicast secrecy rate (bps/Hz)
MA-FDB-GD Proposed FPA-FDB-SS MA-AB-GD
FPA-FDB-ULA FPA-AB-ULA MA-AB-R
Fig. 12. Comparison of MSR with varying numbers of propagation paths (Mp).
secrecy. In contrast, FPA systems with ULAs, having fixed antenna positions, lack adaptability and do not benefit from an increase in D. Notably, the MSR of MA-FDBGD and the proposed method starts lower at D = 10λ compared to FPA-FDB-SS but surpasses it as D increases. This demonstrates the superior capability of MA-enabled systems to exploit larger array configurations for enhanced secrecy performance. Fig. 11 compares antenna positions across different architectures in a scenario with Nb = 4 and-
 Ne = 4, where LUs are uniformly distributed within [10◦, 30◦] and EVEs within [70◦, 90◦]. In MA-based methods, antennas are grouped into clusters, contrasting with the uniform distribution observed in FPA-based methods. These clusters allow the MA-enabled system to enhance channel information for LUs while suppressing it for EVEs, leading to significant MSR improvements. The results also demonstrate that random antenna placement (MA-ABR) fails to achieve comparable MSR gains, highlighting the cri-
tical role of strategic antenna positioning in secure communication. Fig. 12 shows the MSR of different schemes versus
0 0.04 0.08 0.12 0.16 0.2 0.24 Maximum angle of departure error at the transmitter ( )
1
2
3
4
5
6
7
8
9
Multicast secrecy rate (bps/Hz)
MA-FDB-GD Proposed FPA-FDB-SS MA-AB-GD
FPA-FDB-ULA FPA-AB-ULA MA-AB-R
Fig. 13. Comparison of MSR with varying values of the maximum angle of departure error at the transmitter (ν).
0 0.04 0.08 0.12 0.16 0.2 0.24 Normalized variance of complex path gain error ( )
0
1
2
3
4
5
6
7
8
9
Multicast secrecy rate (bps/Hz)
MA-FDB-GD Proposed FPA-FDB-SS MA-AB-GD
FPA-FDB-ULA FPA-AB-ULA MA-AB-R
Fig. 14. Comparison of MSR with varying values of the normalized variance of complex path gain error (χ).
the number of propagation paths (Mp) at the BS. It can be observed that the MSR of MA-based systems is significantly lower than that of FPA-based schemes due to the interference mitigation gain achieved through MA positioning optimization. Meanwhile, the proposed scheme with an AB architecture attains performance close to that of the MA-FDB-GD architecture employing FDB. In addition, the MSR of both the proposed and benchmark schemes increases with Mp. This is because, as the number of channel pat-
hs per user grows, spatial diversity improves and the correlation among channel vectors of different users decreases. Moreover, MA systems can exploit the pronounced channel variations to further reduce channel correlation, highlighting their potential to mitigate correlation effects and maintain high secrecy performance in dense networks. The results above assume perfect CSI at the BS. In practice, noise and limited training overhead make accurate CSI acquisition difficult, so it is necessary to -
assess how imperfect CSI affects the PLS performance of MA-enabled systems. Following [17], [25], we model CSI errors in the

JOURNAL OF LATEX CLASS FILES, VOL. 14, NO. 8, AUGUST 2021 13
AoDs and complex path gains. Specifically, for the m-th path of link i ∈ {b, e} (LU/EVE), let θest
i,m and βest
i,m denote
the estimated AoD and complex path gain, respectively. The AoD error is modeled as, θi,m − θest
i,m ∼ U [− ν
2, ν
2
],
where ν is the maximum AoD error. The normalized
gain error is modeled as, βi,m−βest
i,m
|βi,m| ∼ CN (0, χ), where
χ is the normalized error variance. As shown in Fig. 13, as the maximum AoD deviation ν increases, the MSR of all schemes decreases monotonically due to steeringvector mismatch, which reduces the beamforming gain toward LUs and increases unintended leakage to EVEs. Importantly, although this degradation trend is unavoidable, the proposed MA-AB scheme consistently maintains higher performance than the FPA-based baselines and the random-placement MA-AB (MA-AB-R), while remaining close to the MA-FDB--
GD benchmark. This demonstrates that optimizing MA positions effectively preserves spatial degrees of freedom and LU/EVE separability under AoD uncertainty. Similarly, Fig. 14 shows that as the normalized variance χ of the complex path gain error increases, the MSR of all schemes declines steadily, reflecting the combined amplitude and phase mismatch that lowers coherent array gain and aggravates leakage to EVEs. Nevertheless, throughout this degradation, the proposed MA-AB method retains a clear -
performance advantage over FPA-based baselines and closely tracks MA-FDBGD, confirming that MA placement combined with analog phase control can decorrelate LU/EVE channels and stabilize secrecy performance even under gain uncertainty.
V. Conclusion
In this paper, we investigated the PLS of a MA-enabled MISO communication system with a hardware-efficient AB architecture. A multicast scenario was considered, where confidential information is transmitted to LUs while EVEs attempt to intercept the signal. To maximize the MSR, we jointly optimized the AB and MA positions under movement area and CM constraints. To address the NP-hard secrecy rate maximization problem, a PCPM framework was proposed. By transforming the inequality constraints into a-
 penalty function and reformulating the problem as an unconstrained optimization on the PMS, we developed a PCGD algorithm for efficient updates of beamforming and antenna positions. Simulation results demonstrated that MA-enabled systems with AB achieve a well-balanced performance in terms of MSR and hardware cost. Future work will investigate two-timescale MA control, low-complexity partial-movement scheduling, and energy-/latency-aware actuator models, with the goal of reducing the energy overh-
ead associated with real-time antenna movement.
Appendix A proof of lemma 2.1
We demonstrate that problem (8) is NP-hard. To this end, we consider a special instance of problem (8). First, we set the number of LUs and EVEs to Nb = 1 and Ne =
1, respectively. Furthermore, we fix the variable vector p to an arbitrary but specific constant vector, denoted as  ̃p, which satisfies the original constraints on p (e.g., constraints (8c) and (8d)). This reduction strategy is valid because if a problem (such as (8) with variables w and p) remains NP-hard when a subset of its variables (e.g., p) is fixed, then the original problem is also NP-hard [51]. Under these settings, hb( ̃p) and ge( ̃p) become constant vectors, denoted as h0 = hb( ̃p) and-
 g0 = ge( ̃p), respectively. Problem (8) then simplifies to optimizing only over w,
mwax
1 + tˆb|h0H w|2
1 + tˇe|g0H w|2
s.t. |wl| = 1, l = 1, . . . , L.
(34)
Next, we consider a further special instance of problem (34) via choosing g0 = [1, 0, . . . , 0] and tˇe = tˆb = 1. Then, we have tˆe|g0H w|2 = |w1|2 = 1 for any feasible w, and thus problem (8) can be simplifies to,
mwax wH (h0hH
0
)w
s.t. |wl| = 1, l = 1, . . . , L.
(35)
We need the following lemma, which is established in the proof of Proposition 3.3 in [52], Lemma A.1: Consider the following problem,
mwax wH Qw
s.t. |wl| = 1, l = 1, . . . , L.
(36)
for some Q ⪰ 0. Then, problem (36) is NP-hard in general. Clearly, problem (35) is a special case of problem (36) with Q = h0h0H ⪰ 0. Since any instance of the NP-hard problem (35) is a special case of problem (34), we conclude that problem (34) is NP-hard. Consequently, the general problem (8) is also NP-hard. This completes the proof. ■
Appendix B Computation of the Euclidean gradients
To obtain the Euclidean gradients ∇wφ(w, p) and ∇pφ(w, p) with respect to w and p, we first equivalently reformulate φ(w, p) in (20) as,
φ(w, p) = ue(w, p)
ub(w, p) + φp(p), (37)
where,
ui(w, p) = (−1)εi α log
N ∑i
i=1
φi(w, p), i ∈ {e, b}, (38a)
φp(p) = ργ


L∑−1
l=1
log(1 + e
gl (pl+1 ,pl )
γ)
+ log(1 + e
f1 (p1 )
γ ) + log(1 + e
f2 (pL )
γ)

 ,
(38b)
and,
φi(w, p) = exp
(
(−1)εi 1 + ti| ∑Mp
m=1 βi,ma(p, θi,m)w|2 α
)
,
(39)

JOURNAL OF LATEX CLASS FILES, VOL. 14, NO. 8, AUGUST 2021 14
where θi,m represents θˇe,m or θˆb,m, βi,m represents βˇe,m or βˆb,m, ti represents tˇe or tˆb, and i indexes e (EVE) or b (LU). The sign is determined by (−1)εi , with δi = 0 for i = e (positive) and εi = 1 for i = b (negative). This notation will be used throughout the paper without further clarification. Next, we calculate the Euclidean gradients with respect to w and p. Calculation of ∇wφ(w, p): To obtain the Euclidean gradient related to w, we reformulate (37) by regarding p as a constant and-
 ignoring the constant term, i.e.,
φ(w, p) = ue(w, p)
ub(w, p) . (40)
According to the quotient rule, we have,
∇wφ(w, p) = ∂
∂w
( ue(w, p) ub(w, p)
)
=
∂ ue (w,p)
∂w ub(w, p) − ∂ub(w,p)
∂w ue(w, p) u2
b (w, p) .
(41) where,
∂ui(w, p)
∂w = ∂ui(w, p)
φi(w, p) · ∂φi(w, p)
∂w = α · ∂φi(w,p)
∂w
(−1)εi
N∑i
i=1
φi(w, p)
=
α
N∑i
i=1
∂
(
(−1)εi ti|∑Mp
m=1 βi,m a(p,θi,m )w|2 α
)
∂w · φi(w, p)
(−1)εi
N∑i
i=1
φi(w, p)
=
N∑i
i=1
2ti(∑Mp
m=1 |βi,m|2a(p, θi,m)aH (p, θi,m))w · φi(w, p)
N∑i
i=1
φi(w, p)
,
(42) By combining (41)-(42), the Euclidean gradient ∇wφ(w, p) is obtained. Calculation of ∇pφ(w, p): To compute the Euclidean gradient with respect to p, we have,
∇pφ(w, p) = ∂
∂p
( ue(w, p) ub(w, p)
)
+∂
∂p (φp(p)) . (43)
For the term ∂
∂p (φp(p)), we have,
∂φp(p)
∂p = ρ


L∑−1
l=1
gl (pl+1 ,pl )
1+e
gl (pl+1 ,pl ) γ + f1(p1)
1+e
f1 (p1 )
γ
+ f2(pL)
1+e
f2 (pL )
γ

 . (44)
We now turn to the derivation of the first term in (43), i.e., ∂
∂p
( ue(w,p) ub (w,p)
)
. We first define,
Ψi(p) = |
M ∑p
m=1
βi,ma(p, θi,m)w|2,
ψi(p) =
M ∑p
m=1
β∗
i,maH (p, θi,m)w.
(45)
Then, applying the quotient rule, we obtain,
∂ ∂p
( ue(w, p) ub(w, p)
) =
∂ ue (w,p)
∂p ub(w, p) − ∂ub(w,p)
∂p ue(w, p)
u2
b (w, p) ,
(46)
where ∂ui(w,p)
∂p is given by,
∂ui(w, p)
∂p = ∂ui(w, p)
φi(w, p) · ∂φi(w, p)
Ψi(w, p) · ∂Ψi(w, p)
p
=
N∑i
i=1
2ti · φi(w, p)
N∑i
i=1
φi(w, p)
· ∂Ψi(w, p)
p,
(47)
and the derivative of Ψi(w, p) with respect to p is computed as,
∂Ψi(w, p)
p = ∂(ψi(w, p)ψi∗(w, p))
p
= ψ∗
i (w, p) ∂ψi(w, p)
p + ψi(w, p)
( ∂ψi(w, p) p
)∗
= 2R
(
ψ∗
i (w, p) · ∂ψi(w, p)
p
) ,
(48)
with,
∂ψi(w, p)
p=
[ ∂ψi(w, p) ∂p1
, ∂ψi(w, p)
∂p2
, . . . , ∂ψi(w, p)
∂pL
]T .
(49) Further, for any l = 1, ..., L, ∂ψi(w,p)
∂pl can be derived as,
∂ψi(w, p) ∂pl
=
M ∑p
m=1
β∗
i,me−j 2π
λ cosθi,mpl wl
= −j 2π
λ wl
M ∑p
m=1
β∗
i,mcosθi,me−j 2π
λ cosθi,mpl
(50)
By combining equations (46) through (50), we obtain the complete expression for ∂
∂p
( ue(w,p) ub (w,p)
)
. Together with the result from (44), the Euclidean gradient ∇pφ(w, p) is fully derived. This completes the proof. ■
Appendix C proof of theorem 3.1
To establish the proof, we first demonstrate that the algorithm achieves a sufficient decrease in each iteration. Specifically, by applying the Armijo line search strategy in (31), we have,
φ(wk, pk) − φ(wk+1, pk+1)≥
−υk gradH φ(wk, pk)d(wk,pk),
(51) where υk = τ rυˆ. Since the descent direction d(wk,pk) is constructed from the negative gradient components, there exists a constant τ ̃ > 0 such that,
− gradH φ(wk, pk)d(wk,pk) ≥ τ ̃∥ grad φ(wk, pk)∥2
2. (52)
Combining (51) and (52), we obtain,
φ(wk, pk) − φ(wk+1, pk+1) ≥ cdec∥ grad φ(wk, pk)∥2
2,
(53)

JOURNAL OF LATEX CLASS FILES, VOL. 14, NO. 8, AUGUST 2021 15
where cdec = υkτ ̃ > 0. According to (53), we conclude that the algorithm achieves a sufficient decrease at each iteration. We can now complete the proof. The proof is based on a standard telescoping sum argument. The desired inequality for all k = 0, 1, . . . , K − 1 is obtained as follows,
φ(w0, p0)−φlow ≥ φ(w0, p0) − φ(wK , pK ) (54a)
=
K−1
∑
k=0
φ(wk, pk) − φ(wk+1, pk+1) (54b)
≥ Kcdec min
k=0,1,...,K−1 || grad φ(wk, pk)∥2
2
(54c)
where φlow = 0 is the lower bound value for the objective function. To get the limit statement, observe that φ(wk+1, pk+1) ≤ φ(wk, pk) for all k by (53). Then, taking K to infinity we see that,
φ(w0, p0) − φlow ≥
∞ ∑
k=0
φ(wk, pk) − φ(wk+1, pk+1), (55)
where the right-hand side is a series of nonnegative numbers. The bound implies that the summands converge to zero, thus,
0 = kli→m∞ φ(wk, pk) − φ(wk+1, pk+1)
≤ cdec kli→m∞ ∥ grad φ(wk, pk)∥2
2, (56)
which confirms that ∥ grad φ(wk, pk)∥2 → 0. Now, let {w, p} be a limit point of the sequence of iterates. By definition, there exists a subsequence of iterates {w(0), p(0)}, {w(1), p(1)}, {w(2), p(2)}, . . . which converges to {w, p}. Then, since the norm of the gradient of φ(w, p) is a continuous function, it commutes with the limit and we find,
0 = kli→m∞ ∥ grad φ(wk, pk)∥2
2 = kli→m∞ ∥ grad φ(w(k), p(k))∥2
2
= ∥ grad φ
(
kli→m∞(w(k), p(k))
)
∥2
2 = ∥ grad φ(w, p)∥2
2,
(57) showing that all limit points generated by the sequence are stationary points. This completes the proof. ■
References
[1] A. Khisti and G. W. Wornell, “Secure transmission with multiple antennas—part ii: The mimome wiretap channel,” IEEE Transactions on Information Theory, vol. 56, no. 11, pp. 55155532, 2010. [2] A. D. Wyner, “The wire-tap channel,” The Bell System Technical Journal, vol. 54, no. 8, pp. 1355–1387, 1975. [3] W. Xiong, J. Lin, C. Pan, Y. Zeng, and Q. Li, “Enhancing physical layer security in mimo systems assisted by beyonddiagonal reconfigurable intelligent surfaces,” IEEE Transactions on Communica-
tions, vol. 73, no. 11, pp. 10 824–10 839, 2025. [4] W. Xiong, J. Lin, Z. Xiao, and Q. Li, “Constant-modulus secure analog beamforming for an irs-assisted communication system with large-scale antenna array,” IEEE Transactions on Information Forensics and Security, vol. 20, pp. 2957–2969, 2025.
[5] W. Xiong, Z. Zhao, J. Lin, Z. Xiao, and Q. Li, “Secure beamforming design for irs-isac systems with a hardwareefficient hybrid beamforming architecture,” IEEE Transactions on Vehicular Technology, pp. 1–15, 2025. [6] J. Lin, Q. Li, J. Yang, H. Shao, and W.-Q. Wang, “Physicallayer security for proximal legitimate user and eavesdropper: A frequency diverse array beamforming approach,” IEEE Transactions on Information Forensics and Security, vol. 13, no. 3, pp. 671–684, 2017. [7] A. Akkoc, N. A. -
Korkmaz, Y. Genc, E. Afacan, and E. Yazgan, “Time-invariant and localized secure reception with sequential multicarrier receive-fda,” IEEE Transactions on Antennas and Propagation, vol. 71, no. 9, pp. 7064–7072, 2023. [8] S. Y. Nusenu, “Authentication and secrecy of multicast communication scenario: Artificial noise-aided costas sequence matrix fda approach,” Security and Communication Networks, vol. 2020, no. 1, p. 2194840, 2020. [9] A. Al-Nahari, G. Geraci, M. Al-Jamali, M. H. Ahmed, and N. Yang-
, “Beamforming with artificial noise for secure misome cognitive radio transmissions,” IEEE Transactions on Information Forensics and Security, vol. 13, no. 8, pp. 1875–1889, 2018. [10] W. Zhang, J. Chen, Y. Kuo, and Y. Zhou, “Artificial-noise-aided optimal beamforming in layered physical layer security,” IEEE Communications Letters, vol. 23, no. 1, pp. 72–75, 2018. [11] J. Chu, R. Liu, M. Li, Y. Liu, and Q. Liu, “Joint secure transmit beamforming designs for integrated sensing and communication s-
ystems,” IEEE Transactions on Vehicular Technology, vol. 72, no. 4, pp. 4778–4791, 2022. [12] Y. Zhou, C. Pan, P. L. Yeoh, K. Wang, M. Elkashlan, B. Vucetic, and Y. Li, “Secure communications for uav-enabled mobile edge computing systems,” IEEE Transactions on Communications, vol. 68, no. 1, pp. 376–388, 2020. [13] Z. Lin, M. Lin, J.-B. Wang, Y. Huang, and W.-P. Zhu, “Robust secure beamforming for 5g cellular networks coexisting with satellite networks,” IEEE Journal on Selected Areas in Communica-
tions, vol. 36, no. 4, pp. 932–945, 2018. [14] W. Zhang, J. Chen, Y. Kuo, and Y. Zhou, “Transmit beamforming for layered physical layer security,” IEEE Transactions on Vehicular Technology, vol. 68, no. 10, pp. 9747–9760, 2019. [15] Q. Li and W.-K. Ma, “Multicast secrecy rate maximization for miso channels with multiple multi-antenna eavesdroppers,” in 2011 IEEE International Conference on Communications (ICC). IEEE, 2011, pp. 1–5. [16] M. Ragheb, A. Kuhestani, M. Kazemi, H. Ahmadi, and L. Hanzo, -
“Ris-aided secure millimeter-wave communication under rf-chain impairments,” IEEE Transactions on Vehicular Technology, 2023. [17] L. Zhu, W. Ma, and R. Zhang, “Movable antennas for wireless communication: Opportunities and challenges,” IEEE Communications Magazine, 2023. [18] J. Zheng, J. Zhang, H. Du, D. Niyato, S. Sun, B. Ai, and K. B. Letaief, “Flexible-position mimo for wireless communications: Fundamentals, challenges, and future directions,” IEEE Wireless Communications, 2024. [19] X. Chen,-
 B. Feng, Y. Wu, D. W. K. Ng, and R. Schober, “Joint beamforming and antenna movement design for moveable antenna systems based on statistical csi,” in GLOBECOM 20232023 IEEE Global Communications Conference. IEEE, 2023, pp. 4387–4392. [20] W. Ma, L. Zhu, and R. Zhang, “Mimo capacity characterization for movable antenna systems,” IEEE Transactions on Wireless Communications, 2023. [21] L. Zhu, W. Ma, and R. Zhang, “Modeling and performance analysis for movable antenna enabled wireless communicatio-
ns,” IEEE Transactions on Wireless Communications, 2023. [22] G. Hu, Q. Wu, K. Xu, J. Si, and N. Al-Dhahir, “Secure wireless communication via movable-antenna array,” IEEE Signal Processing Letters, 2024. [23] Z. Cheng, N. Li, J. Zhu, X. She, C. Ouyang, and P. Chen, “Enabling secure wireless communications via movable antennas,” in ICASSP 2024-2024 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP). IEEE, 2024, pp. 9186–9190. [24] J. Tang, C. Pan, Y. Zhang, H. Ren, a-
nd K. Wang, “Secure mimo communication relying on movable antennas,” IEEE Transactions on Communications, 2024.

JOURNAL OF LATEX CLASS FILES, VOL. 14, NO. 8, AUGUST 2021 16
[25] J. Ding, Z. Zhou, and B. Jiao, “Movable antenna-aided secure full-duplex multi-user communications,” IEEE Transactions on Wireless Communications, 2024. [26] Y. Ma, K. Liu, Y. Liu, L. Zhu, and Z. Xiao, “Movableantenna aided secure transmission for ris-isac systems,” IEEE Transactions on Wireless Communications, 2025. [27] Z. Cheng, J. Si, Z. Li, P. Liu, Y. Huang, and N. Al-Dhahir, “Movable frequency diverse array for wireless communication security,” IEEE Transactions on Communications, 2025.-
 [28] Q. Li, H. Luo, and L. Yang, “Joint optimization of secure over-the-air computation and reliable multicasting assisted by a mimo untrusted two-way relay,” IEEE Internet of Things Journal, vol. 10, no. 19, pp. 17 500–17 514, 2023. [29] H. Sun, “Secure groupcast with shared keys,” IEEE Transactions on Information Theory, vol. 68, no. 7, pp. 4681–4699, 2022. [30] S. K. Mohammed and E. G. Larsson, “Single-user beamforming in large-scale miso systems with per-antenna constant-envelope constraints:-
 The doughnut channel,” IEEE Transactions on Wireless Communications, vol. 11, no. 11, pp. 3992–4005, 2012. [31] J. Pan and W.-K. Ma, “Constant envelope precoding for singleuser large-scale miso channels: Efficient precoding and optimal designs,” IEEE Journal of Selected Topics in Signal Processing, vol. 8, no. 5, pp. 982–995, 2014. [32] S. Zhang, R. Zhang, and T. J. Lim, “Constant envelope precoding for mimo systems,” IEEE Transactions on Communications, vol. 66, no. 1, pp. 149–162, 2017. [33] W.-
 Xiong, Y. Zhang, J. Lin, K. Zhong, and J. Hu, “Constant modulus irs-assisted secure beamforming for massive mimo,” in 2024 IEEE International Conference on Communications Workshops (ICC Workshops). IEEE, 2024, pp. 183–188. [34] W. Zhao, S.-H. Lee, and A. Khisti, “Phase-only zero forcing for secure communication with multiple antennas,” IEEE Journal of Selected Topics in Signal Processing, vol. 10, no. 8, pp. 13341345, 2016. [35] J. Zhu, W. Xu, and N. Wang, “Secure massive mimo systems with limite-
d rf chains,” IEEE Transactions on Vehicular Technology, vol. 66, no. 6, pp. 5455–5460, 2016. [36] L. Zhu, W. Ma, W. Mei, Y. Zeng, Q. Wu, B. Ning, Z. Xiao, X. Shao, J. Zhang, and R. Zhang, “A tutorial on movable antennas for wireless networks,” IEEE Communications Surveys & Tutorials, 2025. [37] A. Mukherjee and A. L. Swindlehurst, “Detecting passive eavesdroppers in the mimo wiretap channel,” in 2012 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP). IEEE, 2012, pp-
. 2809–2812. [38] Y. Liang, H. V. Poor, S. Shamai et al., “Information theoretic security,” Foundations and Trends® in Communications and Information Theory, vol. 5, no. 4–5, pp. 355–580, 2009. [39] S. Boyd and L. Vandenberghe, Convex optimization. Cambridge university press, 2004. [40] Y. Nesterov, Introductory lectures on convex optimization: A basic course. Springer Science & Business Media, 2013, vol. 87. [41] A. Ruszczynski, Nonlinear optimization. Princeton university press, 2011. [42] K. Zh-
ong, J. Hu, H. Li, Y. Wang, X. Cheng, X. Cheng, C. Pan, K. C. Teh, and G. Cui, “Joint design of power allocation and unimodular waveform for polarimetric radar,” IEEE Transactions on Geoscience and Remote Sensing, pp. 1–1, 2024. [43] K. Zhong, J. Hu, J. Liu, D. An, C. Pan, K. C. Teh, X. Yu, and H. Li, “P 2c2 m: Parallel product complex circle manifold for risaided isac waveform design,” IEEE Transactions on Cognitive Communications and Networking, 2024. [44] A. Tabrizi and M. H. Mirmohammadi, “A c-
omplete derivation of complex circle manifold (ccm) riemannian manifold optimization equations,” 2025. [Online]. Available: https: //arxiv.org/abs/2508.07396 [45] W. W. Hager and H. Zhang, “A survey of nonlinear conjugate gradient methods,” Pacific journal of Optimization, vol. 2, no. 1, pp. 35–58, 2006. [46] Y.-H. Dai, “Conjugate gradient methods with armijo-type line searches,” Acta Mathematicae Applicatae Sinica, vol. 18, no. 1, pp. 123–130, 2002. [47] C. Liu and N. Boumal, “Simple algorithms f-
or optimization on riemannian manifolds with constraints,” Applied Mathematics & Optimization, vol. 82, no. 3, pp. 949–981, 2020.
[48] G. Wachsmuth, “On licq and the uniqueness of lagrange multipliers,” Operations Research Letters, vol. 41, no. 1, pp. 78–80, 2013. [49] A. Bose, S. Khobahi, and M. Soltanalian, “Efficient waveform covariance matrix design and antenna selection for mimo radar,” Signal Processing, vol. 183, p. 107985, 2021. [50] Q. Li, C. Li, and J. Lin, “Constant modulus secure beamforming for multicast massive mimo wiretap channels,” IEEE Transactions on Information Forensics and Security, vol. 15, pp. 264275,-
 2019. [51] M. R. Garey and D. S. Johnson, Computers and Intractability: A Guide to the Theory of NP-Completeness. W. H. Freeman, 1979. [52] S. Zhang and Y. Huang, “Complex quadratic optimization and semidefinite programming,” SIAM Journal on Optimization, vol. 16, no. 3, pp. 871–890, 2006.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:36.833Z
- **Text Length:** 75744 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 16 of 16
