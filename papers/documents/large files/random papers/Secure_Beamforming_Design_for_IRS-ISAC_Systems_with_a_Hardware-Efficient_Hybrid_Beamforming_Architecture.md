# PDF Document: Xiong et al. - 2025 - Secure Beamforming Design for IRS-ISAC Systems with a Hardware-Efficient Hybrid Beamforming Architec.pdf

**File Path:** Xiong et al. - 2025 - Secure Beamforming Design for IRS-ISAC Systems with a Hardware-Efficient Hybrid Beamforming Architec.pdf

**Processed Date:** 2026-02-10T18:16:47.972Z

**File Size:** 622.48 KB

**Total Pages:** 15

**Extracted Pages:** 15

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3252

**Title:** Secure Beamforming Design for IRS-ISAC Systems with a Hardware-Efficient Hybrid Beamforming Architecture

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

JOURNAL OF LATEX CLASS FILES, VOL. 14, NO. 8, AUGUST 2021 1
Secure Beamforming Design for IRS-ISAC Systems with a Hardware-Efficient Hybrid Beamforming Architecture
Weijie Xiong, Zhenglan Zhao, Jingran Lin, Zhiling Xiao, and Qiang Li
Abstract—In this paper, we employ a hardware-efficient hybrid beamforming (HB) architecture to achieve balanced performance in an intelligent reflecting surface (IRS)-assisted integrated sensing and communication (ISAC) system. We consider a scenario where a multi-antenna, dual-function base station (BS) performs secure beamforming for a multi-antenna legitimate receiver while simultaneously detecting potential targets. Our objective is to maximize the communication secrecy gap by jointly optimizi-
ng the analog and digital beamformers, IRS reflection coefficients, and radar scaling factor, subject to constraints on beampattern similarity, total transmit power budget, and the constant modulus of both the analog beamformer and IRS reflection coefficients. This secrecy gap maximization problem is generally non-convex. To address this, we incorporate the exterior penalty method by adding the radar constraint as a penalty term in the objective function. We then propose an efficient approach base-
d on the penalty dual decomposition (PDD) framework to solve the reformulated problem, featuring closed-form solutions at each step and guaranteeing convergence to a stationary point. Simulation results validate the effectiveness of the proposed algorithm and demonstrate the superiority of the IRS-ISAC system with HB architecture in balancing performance and hardware costs.
Index Terms—Intelligent reflecting surface, integrated sensing and communication, communication security, hybrid beamforming, non-convex optimization.
I. Introduction
Integrated sensing and communication (ISAC) systems not only allow communication and radar systems to share spectrum resources but also provide a fully integrated platform that transmits unified beamforming to simultaneously perform communication and radar sensing
Copyright (c) 20xx IEEE. Personal use of this material is permitted. However, permission to use this material for any other purposes must be obtained from the IEEE by sending a request to pubspermissions@ieee.org. This work was supported in part by the Natural Science Foundation of China (NSFC) under Grant 62171110. (Corresponding author: Jingran Lin.). Jingran Lin and Qiang Li are with the School of Information and Communication Engineering, University of Electronic Science and Technology of Chin-
a, Chengdu 611731, China, the Laboratory of Electromagnetic Space Cognition and Intelligent Control, Beijing 100083, China, and the Tianfu Jiangxi Laboratory, Chengdu, Sichuan 641419, China (e-mail: jingranlin@uestc.edu.cn; lq@uestc.edu.cn). Weijie Xiong, Zhenglan Zhao, and Zhiling Xiao are with the School of Information and Communication Engineering, University of Electronic Science and Technology of China, Chengdu 611731, China (e-mail: 202311012313@std.uestc.edu.cn; 202322010816@std.uestc.edu.c-
n; xiaozhiling@std.uestc.edu.cn).
functions, significantly improving spectral, energy, and hardware efficiency [1], [2]. As a result, researchers from both academia and industry have explored various ISAC implementations [3], [4]. Although the aforementioned designs significantly enhance the performance of secure beamforming for ISAC, these schemes may fail when the eavesdropping channel is correlated with the legitimate channel. In particular, if the communication user is close to the eavesdropper or if both are located in the sa-
me direction from the base station, the eavesdropping channel becomes highly correlated with the legitimate channel, leading to severe degradation in secure beamforming performance [5]. To tackle these issues, intelligent reflecting surfaces (IRS) have been developed and have gained considerable attention in recent years [6], [7]. An IRS is a software-controlled metasurface equipped with passive, digitally controlled reflecting elements that intelligently adjust the phase shift of impinging signal-
s, creating a favorable propagation environment and providing additional optimization DoFs [8]–[10]. Specifically, by integrating IRS into ISAC systems, the correlation between the legitimate and eavesdropping channels can be proactively suppressed by dynamically adjusting the IRS phase shifts. Additionally, the reception quality for the communication user can be enhanced by utilizing the additional signals reflected by the IRS. Inspired by this, numerous studies have focused on designing secure b-
eamforming for IRS-ISAC systems [11]–[14]. For example, [11] initially investigated the impact of IRS on secure beamforming in a system with one legitimate user and an eavesdropper. This study ensured minimum communication performance for the legitimate user and demonstrated significant security improvements using IRS. However, the use of the interior point method (IPM) resulted in high computational complexity, making it unsuitable for real-time applications. To address this, [12] proposed an alg-
orithm based on the successive convex approximation (SCA) method, offering a closed-form solution for faster convergence. As a further step, [13] expanded the scenario to multiple legitimate users for the IRS-ISAC system, limiting maximum information leakage to the eavesdropper under both perfect and imperfect CSI conditions. To further enhance performance, [14] introduced an ANaided IRS-ISAC system using non-orthogonal multiple access (NOMA) technology. This approach improved secure beamforming p-
erformance by providing the system with
arXiv:2511.19321v1 [eess.SP] 24 Nov 2025

JOURNAL OF LATEX CLASS FILES, VOL. 14, NO. 8, AUGUST 2021 2
more DoFs. Despite the effectiveness of using IRS to combat eavesdropping in ISAC systems, the increased hardware costs and power consumption become significant, thus limiting their applicability. These increased costs arise from two main factors. Firstly, IRS-ISAC systems often employ fully-digital beamforming (FDB) architecture, which requires a dedicated radio frequency (RF) chain for each antenna. Secondly, an IRS typically consists of numerous reflecting elements made from materials with spec-
ific electromagnetic properties, such as metamaterials or phasechange materials. Therefore, it is essential to find a way to reduce hardware costs and power consumption while achieving balanced performance. Recently, hybrid beamforming (HB) architecture has been successfully applied in ISAC systems to reduce hardware costs [15]–[17]. This technology achieves nearoptimal beamforming gain and directionality with low-cost phase shifters and fewer RF chains, providing an excellent trade-off between pe-
rformance and complexity. For example, [15] was the first to evaluate the effectiveness of hybrid beamformers in reducing hardware costs for ISAC systems, demonstrating a favorable performance tradeoff between sensing and communication. Building on this, [16] introduced a dynamic RF chain selection mechanism to optimize energy efficiency. Unlike the sub-connected HB architectures in [15], [16], fully-connected designs were employed in [17]–[19]. For instance, [17] developed a lowcomplexity method -
for designing separate data streams for communication and sensing. In [18], a low-resolution hybrid beamforming with OFDM improved communication and radar accuracy. To enhance performance, [19] introduced a phase vector to provide additional DoFs for hybrid beamforming design and proposed an alternating minimization method. Although HB architecture has been widely adopted in ISAC systems to reduce hardware costs and achieve various performance metrics, few studies have focused on its application i-
n secure beamforming. Moreover, while the conventional HB architecture is well-suited for ISAC systems, its potential use in IRS-ISAC systems remains unexplored. Therefore, investigating how HB can enhance secure beamforming in IRS-ISAC systems is crucial, addressing both architectural and design mechanism perspectives. Inspired by the success of HB in ISAC systems, we aim to apply it to IRS-ISAC to balance secure beamforming performance and hardware complexity. This paper makes the following key -
contributions. • Unlike previous studies on secure beamforming in IRS-ISAC systems that rely on fully digital implementations at the base station (BS), we propose a transmitter employing a fully-connected HB architecture. This approach reduces energy consumption and hardware costs by minimizing the need for a large number of RF chains. • We formulate the problem as a challenging nonconvex optimization task aimed at maximizing communication secrecy gap. This is achieved by jointly
optimizing the analog beamformer, digital beamformer, IRS reflection coefficients, and radar scaling factor, subject to constraints on beampattern similarity, total transmit power, and the constant modulus of both the analog beamformer and IRS reflection coefficients. • To efficiently solve this problem, we first incorporate the radar constraint into the objective function as a penalty term using the exterior penalty method. However, the reformulated problem remains non-convex and challenging to s-
olve. We then propose an efficient algorithm based on the penalty dual decomposition (PDD) framework to solve the reformulated problem. The proposed PDD framework is highly efficient since it ensures closed-form solutions at each step while guaranteeing convergence to a stationary point. The remainder of this paper is organized as follows: Section II introduces the system model and problem statement. In Section III, we reformulate the problem and propose a PDD-based algorithm to solve it. Simulati-
on results are presented in Section IV, and Section V concludes the paper. The following notations are used throughout the paper. A vector and a matrix are represented by a and A respectively; (·)T , (·)H and (·)∗ denote the transpose, conjugate transpose and conjugate respectively. I denotes an identity matrix with an appropriate dimension; CN denotes the set of complex vectors of dimension N ; the circularly symmetrix complex Gaussian distribution with mean μ and variance σ2 is denoted as CN (μ,-
 σ2); Tr(A), || · ||F , || · ||2 and | · | represents trace operator, Euclidean norm, Frobenius norm and absolute value; diag(a) represnts a diagonal matrix where the elements of the vector a are placed on the main diagonal; the phase of each element of a matrix is denoted as arg(A); R{·} denotes the real part of a complex matrix; A⊙B represents Kronecker product.
II. System model and problem formulation
Fig. 1. An IRS-ISAC system with HB for secure communication and radar target detection.
As shown in Figure 1, we consider an ISAC BS employing a fully-connected HB architecture to serve an Nb-antenna legitimate communication user, referred to as

JOURNAL OF LATEX CLASS FILES, VOL. 14, NO. 8, AUGUST 2021 3
Fig. 2. The architecture of fully-connected HB at the ISAC BS.
Bob, assisted by an Ni-element IRS. In this scenario, an eavesdropper equipped with Ne antennas, referred to as Eve, attempts to intercept the confidential data transmitted from the ISAC BS to Bob. Meanwhile, beamforming is also utilized to detect T point-like targets located beyond the legitimate receiver. The IRS is positioned close to the communication user to effectively enhance downlink communication. The fully-connected HB architecture is depicted in Figure 2. Specifically, the digital baseb-
and first generates data streams s(t) ∈ CM for both communication and radar sensing, with M representing the lengths of data streams. Then, the data streams are processed by an NRF × M baseband digital beamformer W ∈ CNRF ×M , and then upconverted to the RF domain via NRF RF chains before being precoded with an Nt × NRF analog beamformer F ∈ CNt×NRF . The analog beamformer is implemented Nt phase shifters, and thus subject to the magnitude constraint, i.e., |F [i, j]| = 1, ∀i, j. Then, the transmi-
tted signal x(t) ∈ CNt at the DFRC BS is given by [17],
x(t) = FWs(t). (1)
For the ISAC systems, we need a unified and tractable performance metric to describe the two tasks within one theme. To this end, inspired by [20] and [5], we adopt the secrecy gap and the beampattern similarity as the performance measures of ISAC for secure beamforming and radar sensing, respectively. Let us first give a brief introduction of the two measures in the following.
A. Secrecy Gap
Assuming quasi-static channels, the received signals at Bob and Eve are respectively expressed as,
yb(t) = (Hab + HibΦHai)FWs(t) + nb(t) ∈ CNb , (2a)
ye(t) = (Hae + HieΦHai)FWs(t) + ne(t) ∈ CNe , (2b)
where Hab ∈ CNb×Nt ,Hae ∈ CNe×Nt ,Hai ∈ CNi×Nt ,Hib ∈ CNb×Ni and Hie ∈ CNe×Ni are the channel matrices representing the direct link of BSBob, BS-Eve, BS-IRS, IRS-Bob and IRS-Eve respectively;
nb(t) ∼ CN (0, I) and ne(t) ∼ CN (0, I) represent additive white Gaussian noise at Bob and Eve respectively; Φ = diag(φ) ∈ CNi×Ni is the diagonal phase shift matrix for IRS; φ = [φ1, φ2, ..., φNi ]T ∈ CNi denotes the reflection coefficients. Remark 1: In this paper, we leverage CSI differentiation to distinguish Bob and Eve [21]. Due to spatial separation and multipath effects, their CSI exhibits distinct characteristics, which can be analyzed through variations, statistical distributions, and tem-
poral correlations. Additionally, RF fingerprinting, which exploits hardware-induced distortions, further enhances identification and ensures robust differentiation [22]. Furthermore, we assume the transmitter has perfect CSI of Eve, which is feasible in certain scenarios. For instance, if Eve is also a user of the system, the transmitter may provide different services or content tailored to various user types, ensuring exclusivity for the target users. Additionally, for an active Eve, the CSI can-
 be estimated from its transmissions. Interestingly, even for a passive Eve, it may be possible to estimate the CSI through the inadvertent leakage of local oscillator power from the RF front end of its receiver [23]. The secrecy gap quantifies the difference in signal-tonoise ratio (SNR) between the legitimate communication channel and the eavesdropping channel. A higher SNR at the legitimate receiver, compared to the eavesdropper, implies stronger protection against unauthorized interception. Th-
is metric serves as an effective indicator of the system’s ability to secure confidential information, as it reflects how well the legitimate user can decode the signal while minimizing the risk of eavesdropping. For the Gaussian wiretap channel, the secrecy gap can be calculated as [24],
Cs = [SNRb − SNRe]+
= [||Hb(Φ)FW||2
F − ||He(Φ)FW||2
F
]+ , (3)
where [·]+ ≜ max(·, 0); SNRb and SNRe denote the received SNR at the Bob and Eve, respectively; Hb(Φ) = Hab+HibΦHai ∈ CNb×Nt and He(Φ) = Hae+HieΦHai ∈
CNe×Nt .
0 10 20 30 40 50 60 70 Secrecy gap (dB)
0
0.5
1
1.5
2
2.5
3
Secrecy rate (bps/Hz)
SNRb SNRe SNRb and SNRe
Fig. 3. Secrecy rate versus secrecy gap for different SNR settings of Eve and Bob

JOURNAL OF LATEX CLASS FILES, VOL. 14, NO. 8, AUGUST 2021 4
Remark 2: Most existing research uses the secrecy rate to evaluate secure performance, as given in [25],
Rs = [log2(1 + SNRb) − log2(1 + SNRe)]+ (4)
Generally, an increase in secrecy rate indicates improved communication security. However, instead of using the secrecy rate, we use secrecy gap in this paper. Secrecy gap serves as an effective index for evaluating secure communication performance, as it provides a simpler yet meaningful measure of relative channel quality. A higher secrecy gap implies a stronger legitimate channel for Bob, correlating with a higher secrecy rate. Conversely, for Eve, a larger gap weakens the eavesdropping channel-
, making interception more difficult. Thus, secrecy gap effectively captures the system’s ability to ensure secure data reception and is a practical proxy for assessing security. To further demonstrate the relationship between secrecy gap and secrecy rate, Figure 3 illustrates the effect of varying SNR values. In the blue curve, Eve’s SNR (SNRe) is fixed while Bob’s SNR (SNRb) increases. In the red curve, Bob’s SNR is fixed while Eve’s SNR increases. In the yellow curve, both Bob’s and Eve’s SNR v-
ary, with Bob’s SNR increasing at a higher rate while Eve’s SNR increases at a lower rate. The plot shows a positive relationship between secrecy gap and secrecy rate across all scenarios, confirming that a larger secrecy gap improves the secrecy rate and validating its use as a performance metric.
B. Beampattern Similarity
From the radar sensing perspective, we assume the IRS is deployed far away from the targets, which fly at low altitudes and have strong line-of-sight (LoS) links with the BS. Therefore, the radar transmit signals via the IRS are extremely weak and almost have no contribution to the detection of the target [26]. In order to pursue better target detection and estimation performance, a widely adopted approach is to maximize the signal power in the directions of the targets and minimize it elsewhere. -
In the sequel, the beampattern similarity metric that aims to match the designed beampattern with the ideal one is usually utilized to evaluate the sensing performance. Specifically, we define the steering vector for direction θ as,
a(θ) = [1, ejπsinθ, ..., ejπ(Nt−1)sinθ]T ∈ CNt×1. (5)
Then transmit beampattern can be expressed as [27],
Pb(θ; F, W) = E{|aH (θ)FWs(t)|2}
= aH (θ)FWWH FH a(θ). (6)
The mean squared error (MSE) between the ideal beampattern and the designed beampattern, which evaluates the beampattern similarity, is thus given by,
Pr(δ, F, W) = 1
K
K ∑
k=1
|δPd(θk) − Pb(θk; F, W)|2, (7)
where normalized Pd(θk) is the desired beampattern; θk denotes the k-th sampled angle; δ is a scaling factor. By
introducing δ, the designed beampattern approximates the appropriately scaled ideal beampattern, instead of Pd(θk) itself. Remark 3: While beampattern similarity is not a unique sensing metric, it remains a widely adopted and effective criterion in ISAC systems, as it directly evaluates the spatial power distribution without requiring explicit interference modeling in multi-target scenarios [9], [20], [28]. In our considered system, inter-target interference does not need to be explicitly accounte-
d for due to several factors. Firstly, high-resolution multi-antenna beamforming inherently limits energy leakage, ensuring that sensing beams remain highly directional and focused on intended targets. Secondly, the spatial separation between sensing targets and communication users further mitigates interference, as their operational regions do not significantly overlap. Thirdly, standard radar signal processing techniques, such as matched filtering, effectively suppress nontarget signals, minimiz-
ing the impact of interference on target detection. Given these considerations, beampattern similarity remains a valid, interpretable, and tractable performance metric in multi-target systems.
C. Problem Formulation
Our goal is to maximize the communication secrecy gap by jointly optimizing the analog beamformer F, the digital beamformer W, the IRS reflection coefficients φ, and the radar scaling factor δ, while satisfying constraints on beampattern similarity, total transmit power budget, and the constant modulus of both the analog beamformer and the IRS reflection coefficients. The optimization problem is thus formulated as,
max
δ,F,W,Φ Cs, (8a)
s.t. Pr(δ, F, W) ≤ ε, (8b)
||FW||2
F ≤ Pmax, (8c)
|F [i, j]| = 1, ∀i, j, (8d)
|φn| = 1, ∀n. (8e)
where ε represents the level of the beampattern similarity and Pmax denotes the available transmit power. The difficulty in optimizing problem (8) can be attributed to several factors: firstly, the constraint (8b) involves a quartic term and is non-convex; secondly, the variables within the objective function (8a) and the constraints (8b) and (8c) are highly coupled; and thirdly, the constraints (8d) and (8e) are non-convex due to constant modulus constraints. To address these challenges, in the f-
ollowing, we first incorporate the constraints (8b) into the objective function as a penalty term by utilizing the exterior penalty method. We then decouple the variables in (8c) by introducing an auxiliary variable. Finally, we propose an efficient method based on the penalty dual decomposition (PDD) framework to solve the problem.

JOURNAL OF LATEX CLASS FILES, VOL. 14, NO. 8, AUGUST 2021 5
III. The proposed method
A. Problem Reformulation
The objective function in problem (8) evaluates the maximum between 0 and SNRb − SNRe, with only the latter term being variable-dependent. Therefore, after transforming the maximization into a minimization problem, we focus on the following equivalent formulation,
min
δ,F,W,Φ ||He(Φ)FW||2
F − ||Hb(Φ)FW||2
F,
s.t. (8b), (8c), (8d), (8e) are satisfied ,
(9)
To simplify solving the non-convex quartic constraint in (8b), we employ the exterior penalty method [29] by incorporating it as a penalty term into the objective function. This allows for a more flexible handling of the quartic constraint (8b) while maintaining the remaining problem as a constrained optimization, given by,
min
δ,F,W,Φ
{ μ(||He(Φ)FW||2
F − ||Hb(Φ)FW||2
F) +(1 − μ)Pr(F, W, δ)
} ,
s.t. (8c), (8d), (8e) are satisfied ,
(10)
Here, the penalty term is scaled by a parameter μ, which is iteratively increased to progressively enforce constraint satisfaction. Initially, μ is set to a small value (e.g., μ = 0.1), allowing flexibility in exploring the solution space. With each iteration, μ is updated to ςμ (e.g., ς = 1.1) to more heavily penalize constraint violations, ensuring they fall below a specified threshold (e.g., ε = 10−5). This process strikes a balance between exploration and constraint adherence, guiding the solu-
tion toward feasibility while preserving the structure of other constraints. The exterior penalty method, detailed in Algorithm 1, was chosen for its simplicity and effectiveness in handling non-convex optimization constraints. Unlike interior-point methods, which require second-order derivatives and become computationally expensive for largescale problems, this method reformulates constraints as penalty terms, enabling efficient and flexible solutions.
Algorithm 1: Exterior penalty method to problem (9) 0. Initialize 0 ≤ μ ≤ 1, ς > 1; 1. repeat 2. {δ, F, W, Φ} ← Optimize problem (10) with updated μ; 3. μ = ς · μ % update penalty parameter; 4. until exterior penalty term Pr(δ, F, W) ≤ ε is satisfied.
Nevertheless, problem (10) remains challenging due to the non-convexity introduced by the coupled variables in constraint (8c). To address this, we attempt to decouple F and W and reformulate the problem in a convex manner. To this end, we introduce an auxiliary variable
Q ∈ CNt×M and recast problem (10) as,
min
δ,F,W,Q,Φ


μ(||He(Φ)Q||2
F − ||Hb(Φ)Q||2
F)
+ (1−μ)
K
K ∑
k=1
∣∣∣∣
δ Pd (θk )−
aH (θk)QQH a(θk)
∣∣∣∣
2

,
(11a)
s.t. ||Q||2
F ≤ Pmax, (11b)
|F[i, j]| = 1, ∀i, j, (11c)
|φn| = 1, ∀n, (11d)
Q = FW. (11e)
However, the reformulated problem remains non-convex and challenging to solve. With the highly coupled equality constraints in (11e) limiting the problem’s suitability for real-time distributed computation, the PDD method is a natural choice for addressing these challenges. It effectively decouples the constraints while ensuring the required consistency. In the following, we first provide a brief overview of the PDD method. Next, we demonstrate its application in handling the equality constraints -
in (11e). Finally, we design an efficient PDD-based algorithm to solve (11).
B. Brief Review of the PDD Method
Essentially, the main idea of PDD is to dualize the complicated (or difficult) coupling constraint by some proper penalty function, and then employ the coordinate descent computation to circularly update the variable blocks. Consider the following problem,
mθ,iιn ψ(θ, ι) ≜ ψ ̄(θ, ι) +
B ∑
b=1
ψ ̃(ιb),
s.t. Y (θ, ι) = 0,
Γp(θp) ≤ 0, θp ∈ χp, p = 1, 2, . . . , P,
(12)
where θ = {θp}pP=1 and ι = {ιb}B
b=1 are variables con
sisting of multiple blocks; ψ ̄(θ, ι) is a scalar continuously differentiable function; ψ ̃(ιb) is a composite function tak
ing the form of ψˆb(db(ιb)), with each db(ιb) being a convex
but possibly non-differentiable function, while ψˆb(·) being a non-decreasing and continuously differentiable function; Y (θ, ι) and Γp(θp) are vectors comprised of continuously functions. For more detailed description of problem (12), the readers are referred to [30]. Besides the non-convexity and non-differentiability, the variable coupling with the equality constraint Y (θ, ι) further complicates problem (12). Without such a coupling constraint, block decomposition approaches can be utilized to-
 efficiently decompose (12) into multiple problems with lower dimension. This motivates the PDD method, which dualizes the constraint Y (θ, ι) as a proper penalty in the objective. For instance, following the augmented Lagrangian (AL) framework, we get the following problem

JOURNAL OF LATEX CLASS FILES, VOL. 14, NO. 8, AUGUST 2021 6
(we reuse some notations in this subsection),
(Pλ,ρ) : mθ,iιn Lρ(θ, ι, λ) ≜ ψ ̄(θ, ι) +
B ∑
b=1
ψ ̃(ιb)
+ λH Y (θ, ι) + 1
2ρ ∥Y (θ, ι)∥2,
s.t. Γp(θp) ≤ 0, θp ∈ χp, p = 1, 2, . . . , P,
(13) where χ is the Cartesian product of P closed convex sets, i.e., χ ≜ ΠpP=1χp; λ and ρ > 0 are the penalty parameter and dual variable with Y (θ, ι) = 0, respectively. Note that the resultant problem is completely separable among θp and ιb for p = 1, 2, . . . , P and b = 1, 2, . . . , B. Thereby, the problem can be efficiently solved in a coordinate descent manner. The steps of PDD are summarized in Algorithm 2, that takes a double-loop structure, where the inner loop
solves the AL subproblem (Pλbo ,ρbo
) approximately (i.e., Step 2), and the outer loop (with bo being the outer iteration index) updates the dual variable λ (i.e., Step 4), or the penalty parameter ρ (i.e.,Step 8), according to the violation of constraint Y (θ, ι) = 0 (i.e., Step 3).
Specifically, the notation Optimize (Pλbo ,ρbo ; zbo−1, εbo
) in Step 2 means calling some iterative algorithm to solve
problem (Pλbo ,ρbo
), where z = (θ, ι) represents a feasible point of the problem. In Step 2, zbo−1 is the initial point of iteration bo, and εbo denotes the accuracy of termination.
Algorithm 2: PDD-Based Solution to Problem (12) 0. Initialize z0, ρ0 > 0, λ0, κ0 > 0, ε0 > 0, εstop > 0, 0 < c < 1 and bo = 1; 1. repeat
2. zbo = Optimize
(
Pλbo ,ρbo ; zbo−1, εbo
) ;
3. if ∥Y (zbo )∥∞ ≤ κbo % update dual variables
4. λb0+1 = λb0 + 1
ρbo
Y (zbo );
5. ρbo+1 = ρbo ;
6. else % update penalty parameter 7. λb0+1 = λb0 ;
8. ρbo+1 = c · ρbo ;
9. end if
10. κbo+1 = 0.9 × ∥Y (zbo )∥∞, and εbo+1 = 0.9 × εbo ;
11. until some stopping criterion (e.g., ∥Y (zbo )∥∞ ≤ εstop) is satisfied.
C. PDD-Based Algorithm for Problem (11)
In this subsection, we fit problem (11) into the PDD framework and design an efficient algorithm. To this end, we first introduce the Lagrange multiplier Ψ ∈ CNt×M and dualize the equality constraints (11e) using Lagrangian relaxation. This incorporates the constraints into the objective function, transforming them into penalty terms that balance objective minimization with constraint satisfaction. The AL function is constructed to unify objectives and constraints, guiding optimization toward
feasible solutions. The AL function is given as,
Lρ(δ, F, W, Q, Φ, Ψ) ≜ μ(||He(Φ)Q||2
F − ||Hb(Φ)Q||2
F)
+ (1 − μ)
K
K ∑
k=1
|δPd(θk) − aH (θk)QQH a(θk)|2
+ R{Tr{ΨH (Q − FW)}} + 1
2ρ ∥Q − FW∥2
F.
(14) Then, based on the PDD framework, in each outer iteration we first solve the following problem to update {δ, F, W, Q, Φ}, i.e.,
min
δ,F,W,Q,Φ Lρ(δ, F, W, Q, Φ, Ψ),
s.t. (11b), (11c), (11d) are satisfied,
(15)
Note that {δ, F, W, Q, Φ} are completely separable in the constraints of (15). Specifically, with the other variables fixed, the resultant subproblem with respect to the remaining variable is relatively simple. Moreover, some subproblems can even be decomposed into multiple smaller-scale problems and solved efficiently. These observations motivates us to use the strategy of coordinate descent to iteratively solve (15), which constructs the inner loop of the algorithm. Since some subproblems in (15-
) may be non-convex, we adopt the block successive upper bound minimization (BSUM) method [31] to address this issue. Unlike the classic block coordinate descent (BCD) method, which directly minimizes the original objective, BSUM replaces the non-convex objective with a convex tight upper bound for each subproblem. This approximation ensures that the optimization remains tractable while retaining a close relationship to the original problem. Moreover, the BSUM framework guarantees stationary conve-
rgence under mild conditions, as established in Theorem 2 of [31]. These properties make BSUM particularly suitable for solving the challenging subproblems arising in our formulation. Next, we elaborate the details of updating δ, F, W, Q and Φ. 1) Update δ: It can be easily found that the variable δ only exists in right-hand side of the objective function (15), of which is a quadratic and convex function with respect to the variable δ. Therefore, by checking the firstorder optimality condition [32-
], the optimal δ is expressed as,
δ=
K ∑
k=1
Pd(θk)vecH (Ak)vec(QQH )
K ∑
k=1
Pd (θk )2
, (16)
where Ak
=∆ a(θk)aH (θk) ∈ CN2
t ×N 2
t.
2) Update F: With the other variables being fixed, the sub-problem related to F is given by,
mFin R{Tr{ΨH (Q − FW)}} + 1
2ρ ∥Q − FW∥2
F , (17a)
s.t. |F[i, j]| = 1, ∀i, j. (17b)
Due to the constant modulus constraints (17a), the subproblem is still non-convex. To solve it efficiently, we try

JOURNAL OF LATEX CLASS FILES, VOL. 14, NO. 8, AUGUST 2021 7
to find a tight upper bound of the objective function (17a) following the BSUM framework, which is given by,
R{Tr{ΨH (Q − FW)}} + 1
2ρ ∥Q − FW∥2
F
≤
N ∑t
i=1
2R{fi
((G − λmax(G)I)(f k
i )H − di
)},
(18) where f k
i ∈ C1×NRF is the i-th row of the matrix at the k
th iteration F; λmax(G) denotes the maximum eigenvalue of G; G = WWH ∈ CNRF ×NRF ; D = W(Q + ρΨ)H = [d1, ..., di, ..., dI ] ∈ CNRF ×Nt . The detailed derivation is provided in Appendix A. Based on (18), problem (17) can be further transformed into Nt smaller problems related to fi ∈ C1×NRF , i = 1, 2, ..., Nt, respectively. The individual problem of fi is expressed as,
mfiin
2R{fi
((G − λmax(G)I)(f k
i )H − di
)}, (19a)
s.t. |fi(j)| = 1, ∀j. (19b)
It is seen that problem (19) admits the following closedform solution,
fi = exp (jarg ((λmax(G)I − G)(f k
i )H + di
)) . (20)
Lemma 3.1: (20) is the unique optimal solution of the subproblem (19) although the constant modulus constraints related to f are generally non-convex. Proof: Please refer to Appendix B. 3) Update W: With other variables being fixed, the subproblem related to W is an unconstrained convex problem, and can be expressed as,
mWin R{Tr{ΨH (Q − FW)}} + 1
2ρ ∥Q − FW∥2
F . (21)
By checking the first-order optimality condition, the optimal W is given as,
W = (FH F)−1 (FH (ρΨ + Q)) . (22)
4) Update Q: With other variables being fixed, the subproblem related to Q is given as,
mQin μ(||He(Φ)Q||2
F − ||Hb(Φ)Q||2
F)
+ (1 − μ)
K
K ∑
k=1
|δPd(θk) − aH (θk)QQH a(θk)|2
+ R{Tr{ΨH Q}} + 1
2ρ ∥Q − FW∥2
F , (23a)
s.t. ||Q||2
F ≤ Pmax, (23b)
which remains non-convex due to the quartic and concave terms within the objective function. Similar to the update of F, we follow the BSUM framework to find a tight upper bound of the objective function (23a), and convert it into a convex one. After ignoring the constant terms,
the majorized problem to solve problem (23) for variable Q is formulated as,
mQin R{Tr{QH (Z1Q + Z3)}} + R{Tr{ΨH Q}}
+1
2ρ ∥Q − FW∥2
F , (24a)
s.t. ||Q||2
F ≤ Pmax. (24b)
where,
Z1 = μHH
e (Φ)He(Φ) + C1 ∈ CNt×Nt ,
c1 = vec(C1) = 2Cvec(Qk(Qk)H ) ∈ CN2
t,
Z2 = −μHH
b (Φ)Hb(Φ) − C2 − Bt ∈ CNt×Nt ,
c2 = vec(C2) = 2λmax(C)vec(Qk(Qk)H ) ∈ CN2
t,
bt = vec(Bt) = (1 − μ)
K
K ∑
k=1
2δPd(θk)vec(Ak) ∈ CN2
t,
C = (1 − μ)
K
K ∑
k=1
vec(Ak)vec(Ak)H ∈ CN2
t ×N 2
t,
Z3 = 2ZH
2 Qk ∈ CNt×M .
(25) where Qk is the matrix Q at k-th iteration; λmax(C) denotes the maximum eigenvalue of C. The detailed derivation is provided in Appendix C. Now, the subproblem related to Q in (24) becomes a convex problem. By checking the first-order optimality condition, the optimal Q is given by:
Q = (2ρZ1 + (2ρα + 1)I)−1 (FW − ρZ2 − ρΨ), (26)
where α is the Lagrangian multiplier chosen to satisfy the Karush-Kuhn-Tucker (KKT) conditions [32]. To this end, we rewrite 2ρZ1 in the eigen-decomposition form, i.e,
2ρZ1 = UΠUH , (27)
where Π = Diag{π1, π2, ..., πN } ∈ CNt×Nt with πn being the nth nonnegative eigenvalue of 2ρZ1; U = [u1, u2, ..., uN ] ∈ CNt×Nt is the unitary matrix with un ∈ CNt is the nth eigenvector of 2ρZ1. We further define,
∆ =∆ UH (FW − ρZ2 − ρΨ)(FW − ρZ2 − ρΨ)H U, (28)
and have,
∥Q∥2
F = Tr{QQH } =
N ∑
n=1
δn
n
(πn+(2ρα+1))2 , (29)
with δnn being the nth diagonal element of ∆. Therefore,
in the case of ∑N
n=1
δn
n
(πn+2ρ(1+α))2 ≤ P , we have α = 0;
otherwise, we find certain α > 0 so that (29) holds for equality, which can be done by bisection, since ∥Q∥2
F is
monotonically decreasing with α. To compute Q by (29) via the bisection method, first
evaluate S0 = ∑N
n=1
δn
n
(πn+2ρ)2 . If S0 ≤ Pmax, set α = 0
as the power constraint is satisfied. Otherwise, initialize the bisection interval with αlow = 0 and choose an upper
bound αhigh such that ∑N
n=1
δn
n
[πn+2ρ(1+αhigh)]2 < Pmax.

JOURNAL OF LATEX CLASS FILES, VOL. 14, NO. 8, AUGUST 2021 8
Iteratively compute the midpoint αmid = (αlow + αhigh)/2
and evaluate Smid = ∑N
n=1
δn
n
[πn+2ρ(1+αmid)]2 . If Smid >
Pmax, update αlow = αmid; otherwise, set αhigh = αmid. Repeat this process until |Smid − Pmax| is within a predefined tolerance. Once the optimal α∗ is determined, substitute it back into equation (29) to obtain Q, thereby ensuring that ∥Q∥2
F = Pmax.
5) Update Φ: Obviously, with other variables being fixed, the subproblem related to Φ is given as,
mΦin ||He(Φ)Q||2
F − ||Hb(Φ)Q||2
F , (30a)
s.t. |φn| = 1, ∀n. (30b)
Since,
||He(Φ)Q||2
F = Tr{ΦH BΦE + ΦH JH + ΦJ}
= φH (B ⊙ ET )φ + 2R{φH j∗}, (31a)
||Hb(Φ)Q||2
F = Tr{ΦH MΦE + ΦH OH + ΦO}
= φH (M ⊙ ET )φ + 2R{φH o∗}, (31b)
where,
B = HH
ie Hie ∈ CNi×Ni , (32a)
E = HaiQQH HH
ai ∈ CNi×Ni , (32b)
j = diag(J) = HaiQQH HH
aeHie ∈ CNi , (32c)
M = HH
ib Hib ∈ CNi×Ni , (32d)
o = diag(O) = HaiQQH HH
abHib ∈ CNi . (32e)
Based on (31) and (32), problem (30) can be reformulated as,
mφin φH ((B − M) ⊙ ET ) φ + 2R{φH (j∗ − o∗)}, (33a)
s.t. |φn| = 1, ∀n, (33b)
which is still a non-convex problem due to the concave term within the objective function (33a) and the constant modulus constraints (33b). Again, we try to find a tight upper bound of the objective function (33a) following the BSUM framework, which is given by,
φH ((B − M) ⊙ ET ) φ + 2R{φH (j∗ − o∗)}
≤ R{φH ((P − λmax(P)I)φk + (j∗ − o∗))}, (34)
where P = B−M ∈ CNi×Ni ; φk ∈ CNi is solution variable at the k-th iteration. The detailed derivation is provided in Appendix D. Based on (34), the majorization problem of (33) is given as,
mφin R{φH ((P − λmax(P)I)φk + (j∗ − o∗))}, (35a)
s.t. |φn| = 1, ∀n, (35b)
It is evident that the structure of problem (35) is identical to that of problem (19). Therefore, based on Lemma 3.1, the problem (35) admits the following unique optimal solution,
φ = exp (jarg ((λmax(P)I − P)(φk)H + (o∗ − j∗))) .
(36)
The complete PDD-based algorithm summarizing the steps is presented in Algorithm 3. In the following section, we analyze the computational complexity and convergence of the proposed PDD-based algorithm. Remark 4: Unlike traditional PDD methods, our algorithm is specifically tailored to the proposed problem and incorporates several key innovations. Firstly, we introduce a novel penalty formulation to effectively address the coupling between analog and digital beamformers. Secondly, a customized BSU-
M method is developed to update the analog beamformer, digital beamformer, and IRS reflection coefficients under CM constraints, leveraging a tight surrogate function. Thirdly, the algorithm integrates hybrid beamforming with IRS control, offering additional degrees of freedom to enhance system performance. Lastly, it provides closed-form solutions at each step with guaranteed convergence to a stationary point. These advancements significantly improve computational efficiency and solution quality,-
 making the algorithm particularly well-suited for hybrid beamforming in IRSISAC systems and advancing the application of PDD in non-convex optimization for wireless communications.
Algorithm 3: PDD-Based Solution to Problem (12) 0. Initialize δ, F, W, Q, Φ, Ψ, ρ > 0, κ > 0, ε > 0,
εstop > 0, 0 < c < 1 and Lρnew(δ, F, W, Q, Φ, Ψ);
1. repeat % outer PDD loop 2. repeat % inner BSUM loop – solve (15) 3. Loρld(·) = Lρnew(·);
4. Update δ according to (16); 5. Update F according to (20); 6. Update W according to (22); 7. Update Q according to (24); 8. Update φ according to (36);
9. Compute Lρnew(δ, F, W, Q, Φ, Ψ) according to (15);
10. until |Lold
ρ (·)−Lnew
ρ (·)|
|Loρld(·)| ≤ ε
11. error = ||Q − FW||∞ ; 12. if error ≤ κ % AL method – Update Ψ 13. Ψ = Ψ + 1
ρ (Q − FW);
14. else % penalty method – Update ρ 15. ρ = cρ; 16. end 17. κ = 0.9 × error, ε = 0.9 × error 18. until error ≤ εstop
D. Analysis of Computation Complexity and Convergence
1) Analysis of computation complexity: The complexity of Algorithm 2 is primarily due to the inner BSUM loop, which is analyzed as follows. The update of δ requires about O(Nt2K) operations. The update of F
requires about O(NtN 3
RF ) operations. The update of
W requires about O(N 3
RF ) operations. The update of
Q requires about O(Nt3) operations. The update of φ
requires about O(N 3
i ) operations. Therefore, the total
complexity of the PDD-based algorithm is approximately
O (T1T2(Nt(NtK + N 3
RF + Nt2) + N 3
RF + N 3
i ))
operations, where T1 and T2 are the total number of BSUM iterations and PDD iterations, respectively. 2) Analysis of convergence: To establish convergence, we first demonstrate that the inner loop BSUM method

JOURNAL OF LATEX CLASS FILES, VOL. 14, NO. 8, AUGUST 2021 9
for solving the augmented Lagrangian (AL) problem (15) converges to a stationary point. Specifically, we rely on the following theorem from [31]. Theorem 3.1: Suppose that the surrogate function is quasi-convex and serves as a tight upper bound for the original subproblems with respect to δ, F, W, Q and Φ. Furthermore, assume that each subproblem has a unique solution for any point within its constraints. Then, every limit point of the iterates generated by the BSUM algorithm is a coordinate-wise -
minimum. Additionally, if the original problem is regular, the BSUM algorithm converges to a stationary point. Since the inner loop BSUM method strictly follows Theorem 3.1, its convergence is straightforward to establish. Furthermore, as the constraints (11b)-(11e) satisfy Robinson’s condition [33], it is stated in [30] that every limit point generated by Algorithm 2 is a stationary point of the problem (11).
E. Discussion on Method Adaptability
This subsection briefly evaluates the adaptability of the proposed method to sub-connected HB structures [34][36]. While the proposed method is primarily designed for fully-connected HB, it demonstrates inherent flexibility, offering potential extensions to accommodate the subconnected HB architectures. The primary difference between the sub-connected and fully-connected HB architectures lies in the form of the analog beamformer F, which is represented as,
[f1, f2, ..., fNRF ] and


f1 0 · · · 0 0 f2 · · · 0
... ... . . . ...
0 0 · · · fNRF

 , (37)
for the fully-connected (left) and sub-connected (right) architectures, respectively. Here, fj ∈ CNˆt , j ∈ [NRF ], with Nˆt = Nt for the fully-connected architecture and
Nˆt = Nt
NRF for the sub-connected architecture. In both
cases, F has dimensions Nt ×NRF , but the fully-connected configuration employs a full matrix, whereas the subconnected configuration adopts a block-diagonal matrix due to constrained connectivity. The sub-connected HB architecture can be viewed as a special case of the fully-connected HB architecture, where the off-diagonal elements of F are zero. The proposed method can be adapted to the sub-connected HB architecture by incorporating a projection operation during the optimization of F in (20). T-
his operation enforces the block-diagonal structure, ensuring compatibility with the sub-connected architecture.
IV. Numerical Results
In this section, we present simulation results to evaluate the secure beamforming design for the proposed IRSISAC system with HB architecture. For comparison, the proposed method is compared to the following benchmark schemes:
• AO-SDR-SAME: the same IRS-ISAC system with the HB architecture is considered, but the problem is solved using the alternating optimization (AO) method [37], which directly decouples the variables into several subproblems. Each subproblem is then solved using the semi-definite relaxation (SDR) method [38]; • IRS-C-HB: the HB architecture with the assistant of the IRS only works for the downlink communication system [5]; • WOIRS-C-FDB: the HB architecture without the assistant of the IRS only work-
s for the downlink communication system [18]; • WOIRS-C-FDB: the FDB architecture without the assistant of the IRS only works for the downlink communication system [24]; • IRS-ISAC-FDB: the FDB architecture for the ISAC system with the assistant of the IRS [11]; • WOIRS-ISAC-FDB: the FDB architecture for the ISAC system without the assistant of the IRS [39]; • R-Optimal: the MIMO radar system only works for radar sensing [40].
Unless otherwise specified, we assume that the ISAC BS is equipped with Nt = 10 transmit antennas, NRF = 4 RF chains, and a data stream length of M = 2. The transmit power budget is set as Pmax = 1dB. The weight coefficient μ = 0.5. For communication, the number of the IRS elements is set as Ni = 32, and the number of antennas at Eve and Bob to Nb = 4 and Ne = 4, respectively. Following [41], we examine a fading environment where all channels comprise both large-scale and small-scale fading. Small-
-scale fading matrix entries are generated as complex zero-mean Gaussian random variables with unit covariance. The large-scale fading path loss is set at -30dB for a reference distance of 1m, with path loss exponents for all links at 3. We assume distances between Alice and Bob, Alice and IRS, Alice and Eve, IRS and Bob, and IRS and Eve to be 80m, 30m, 80m, 40m, and 40m, respectively. For radar sensing, the spatial area of interest is θ = [−90◦, 90◦] and we set the interval of {θk}K
k=1 as 1◦ and K = 181.
The desired beampattern Pd(θk) is given by,
Pd(θk) =
{ 1, θk ∈ [θ ̄t − ∆θ
2 , θ ̄t + ∆θ
2 ],
0, otherwise. (38)
where θ ̄t represents the direction of the t-th target. We
examine the desired beampattern with θ ̄1 = −40◦, θ ̄2 =
0◦, and θ ̄3 = 40◦, each having a beam width of ∆θ = 20◦ unless otherwise specified. Additionally, the hyperparameters are set as follows: ς = 1.1, μ = 0.5, ρ = 0.1, κ = 0.9, ε = 10−5, εstop = 10−5 ,and c = 0.7. Simulation results are averaged over 100 random fading realizations.
A. Analysis of convergence
Figure 4 presents the convergence behavior of the proposed PDD-based algorithm. Figure 4(a) depicts the objective function value against the number of iterations. It can be observed that the objective value (11a) within

JOURNAL OF LATEX CLASS FILES, VOL. 14, NO. 8, AUGUST 2021 10
0 100 200 300 400 500 Number of iterations
101
102
103
Objective function value of 10(a)
(a)
1st loop 2nd loop 3rd loop 4th loop
0 5 10 Number of iterations
0
0.005
0.01
0.015
||Q-FW||
(b)
X4
Y 1.72856e-06
Fig. 4. Convergence of the proposed PDD-based algorithm.
0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9 1
10
20
30
40
50
60
70
80
90
100
1/MSE
6
6.5
7
7.5
8
8.5
Secrecy rate (bps/Hz)
1/MSE (Nt=8) 1/MSE (Nt=16) 1/MSE (Nt=24)
Secrecy rate (Nt=8) Secrecy rate (Nt=16) Secrecy rate (Nt=24)
Fig. 5. 1/MSE and secrecy rate versus weight coefficient (μ) as it increases from 0 to 1
each inner loop converges monotonically within a limited number of iterations, with the rate of decrease reducing sharply after the initial loop. Additionally, the objective value at the end of one loop is smaller than at the start of the next, indicating that the outer loop also converges monotonically. Figure 4(b) shows the constraint violation ∥Q − FW∥∞, demonstrating that the error of the equality constraint quickly converges within four iterations, confirming the feasibility of the solution o-
btained by the PDD-based algorithm for the original problem.
B. Radar and Communication Trade-Off Analysis
Figure 5 illustrates the trade-off between radar sensing performance (measured by the mean squared error (MSE) in (7)) and communication performance (measured by the secrecy rate) as the weight coefficient μ varies from 0 to 1. To provide a clearer representation of the trade-off, 1/MSE is plotted in the figure, as higher values of 1/MSE indicate better radar sensing performance. The weight coefficient μ serves as a critical parameter for balancing the two objectives. When μ approaches 1, the syst-
em focuses more on communication, leading to a noticeable
-80 -60 -40 -20 0 20 40 60 80 Angle (degree)
0
0.2
0.4
0.6
0.8
1
1.2
Beampattern
Proposed AO-SDR-SAME IRS-ISAC-FDB WOIRS-ISAC-FDB R-Optimal Desired
(a) The beampattern for the first case.
-80 -60 -40 -20 0 20 40 60 80 Angle (degree)
0
0.2
0.4
0.6
0.8
1
1.2
1.4
Beampattern
Proposed AO-SDR-SAME IRS-ISAC-FDB WOIRS-ISAC-FDB R-Optimal Desired
-80
0
0.01
0.02
0.03
0.04
0.05
-20
0
0.02
0.04
0.06
20
0
0.02
0.04
0.06
(b) The beampattern for the second case.
Fig. 6. Comparison of beampatterns between different architectures and cases.
improvement in the secrecy rate. Conversely, as μ approaches 0, the system prioritizes radar sensing, resulting in higher values of 1/MSE, which indicate enhanced radar sensing performance. This trade-off highlights the system’s ability to adapt to varying application requirements by adjusting the emphasis on either communication or radar sensing. Furthermore, as the number of transmit antennas (Nt) increases, both radar sensing and communication performance improve across all values of μ. This is-
 due to the additional DoFs provided by the increased number of antennas.
C. Comparisons of Radar Performances
In this subsection, we consider an additional desired beampattern with θ ̄1 = 0◦ and a beam width of ∆θ = 60◦ as the first case, while the previously mentioned desired beampattern is treated as the second case to better illustrate the sensing performance. Figure 6 compares the beampattern defined in (6) across different architectures and scenarios. As shown in Figures 6(a) and 6(b), the proposed method achieves lower sidelobe levels compared to the ’WOIRS-ISAC-FDB’ architecture, confirming that th-
e ISAC system demonstrates improved sensing performance when utilizing IRS

JOURNAL OF LATEX CLASS FILES, VOL. 14, NO. 8, AUGUST 2021 11
8 16 24 32 40 The number of antennas at base station (Nt)
0
0.002
0.004
0.006
0.008
0.01
0.012
0.014
MSE
Proposed AO-SDR-SAME IRS-ISAC-FDB WOIRS-ISAC-FDB R-Optimal
(a) The MSE for the first case.
8 16 24 32 40 The number of antennas at base station (Nt)
0.005
0.01
0.015
0.02
0.025
0.03
0.035
0.04
0.045
0.05
MSE
Proposed AO-SDR-SAME IRS-ISAC-FDB WOIRS-ISAC-FDB R-Optimal
(b) The MSE for the second case.
Fig. 7. Comparison of MSE between different architectures and cases as the number of antennas at base station (Nt) increases from 8 to 40.
to assist communications. Additionally, the proposed method performs nearly as well as the ’IRS-ISAC-FDB’ architecture, highlighting that the HB architecture is more hardware-efficient, as it requires only one-fourth of the RF chains compared to the FDB architecture. Furthermore, the proposed method exhibits lower sidelobe levels than the ’AO-SDR-SAME’ architecture, confirming that the proposed PDD algorithm can converge to a better solution. Finally, the proposed method approaches the performance-
 of the ’R-Optimal’ architecture, with the gap between them being leveraged for secure communication. To further evaluate radar performance, we increased the number of antennas at the base station (Nt) and measured the MSE across different architectures, as shown in Figure 7. As illustrated in Figures 7(a) and 7(b), the MSE performance of the proposed method is significantly lower than that of both the ’WOIRS-ISAC-FDB’ architecture and the ’AO-SDR-SAME’ architecture, and it is nearly identical to -
that of the ’IRS-ISAC-FDB’ architecture. Specifically, in the first case, when Nt = 24, the MSE of the proposed method is 0.0049, closely matching the MSE of the ’IRS-ISAC-FDB’ architecture (0.0046) and considerably lower than that of the ’WOIRS-ISAC-FDB’
8 16 24 32 40 The number of antennas at base station (Nt)
2
3
4
5
6
7
8
9
Secrecy rate (bps/Hz)
Proposed AO-SDR-SAME IRS-C-HB WOIRS-C-HB WOIRS-C-FDB IRS-ISAC-FDB WOIRS-ISAC-FDB
Fig. 8. Comparison of secrecy rate between different architectures as the number of antennas at the base station (Nt) increases from 8 to 40.
architecture (0.0072) and the ’AO-SDR-SAME’ architecture (0.0060). In the second case, when Nt = 24, the MSE of the proposed method is 0.0135, nearly the same as that of the ’IRS-ISAC-FDB’ architecture (0.0128) and much lower than that of the ’WOIRS-ISAC-FDB’ architecture (0.0168) and the ’AO-SDR-SAME’ architecture (0.0152). Additionally, as Nt increases, the MSE gaps between the different architectures become larger, primarily because the system gains more degrees of freedom, enabling improved pe-
rformance.
D. Comparisons of Communication Performances
Figure 8 illustrates the secrecy rate of different strategies as a function of the number of transmit antennas at the base station (Nt). As shown in the figure, the secrecy rate improves with an increasing number of antennas. Additionally, the ’IRS-C-HB’, ’IRS-ISACFDB’, ’Proposed’, and ’AO-SDR-SAME’ architectures with IRS assistance achieve significantly higher secrecy rates than the ’WOIRS-C-HB’, ’WOIRS-C-FDB’, and ’WOIRS-ISAC-FDB’ architectures. This substantial performance boost is attributed t-
o the IRS, which provides greater degrees of freedom in system design. Notably, with IRS assistance, the proposed method can even outperform the communication-only architectures ’WOIRS-C-HB’ and ’WOIRS-C-FDB’. Furthermore, the proposed architecture achieves nearly the same secrecy rate as the ’IRS-ISACFDB’ architecture across varying values of Nt, while utilizing only one-fourth of the RF chains. Moreover, the proposed architecture, enhanced by the highly efficient distributed PDD algorithm, achie-
ves a higher secrecy rate compared to the ’AO-SDR-SAME’ architecture utilizing the AO method. Finally, the secrecy rate gap between the proposed architecture and the ’IRS-C-HB’ architecture arises from the dual beamforming used for radar sensing. Figure 9 illustrates the secrecy rate of different strategies under varying numbers of RF chains (NRF ). It can be seen that the secrecy rate of the architectures with HB increases as the number of RF chains rises from

JOURNAL OF LATEX CLASS FILES, VOL. 14, NO. 8, AUGUST 2021 12
2 4 6 8 10 The number of RF chains (NRF)
2.5
3
3.5
4
4.5
5
5.5
6
6.5
7
7.5
Secrecy rate(bps/Hz)
Proposed AO-SDR-SAME IRS-C-HB WOIRS-C-HB WOIRS-C-FDB IRS-ISAC-FDB WOIRS-ISAC-FDB
Fig. 9. Comparison of secrecy rate between different architectures as the number of RF chains (NRF ) increases from 2 to 10.
2 to 4. Beyond NRF > 4, the secrecy rate of these strategies stabilizes and becomes very close to those of the architectures with FDB. This result demonstrates that when NRF > 2M , the proposed architecture achieves a near-optimal solution, which is consistent with the findings in [42], highlighting the high efficiency of the proposed PDD-based algorithm. Additionally, it is interesting to note that the proposed architecture achieves a higher secrecy rate with NRF > 4 compared to the ’IRS-C-HB’ ar-
chitecture with NRF = 2.
Figure 10 illustrates the secrecy rate of different architectures as the number of IRS reflection elements (Ni) increases from 16 to 80. As seen in the figure, due to the additional degrees of freedom provided by the IRS, the IRS-assisted architectures (’Proposed’, ’AO-SDR-SAME’, ’IRS-C-HB’, and ’IRS-C-FDB’) achieve higher secrecy rates compared to the ’WOIRS-C-HB’, ’WOIRS-C-FDB’, and ’WOIRS-ISAC-FDB’ architectures, even when the number of IRS reflection elements is as small as Ni = 16. Additional-
ly, the slope of the increase in secrecy rate for the IRS-assisted architectures (’Proposed’, ’IRS-C-HB’, ’IRS-C-HB’, and ’IRS-C-FDB’) slightly decreases, likely due to the increased difficulty in handling larger matrix sizes. Furthermore, the proposed architecture achieves a higher secrecy rate than the ’WOIRS-C-FDB’ architecture, demonstrating that the IRS can greatly enhance the performance of the ISAC system.
Figures 11 and 12 depict the secrecy rate of various architectures as the number of antennas at Eve (Ne) and Bob (Nb) increases from 2 to 10, respectively. These figures reveal contrasting trends. With an increase in Ne, the secrecy rate of these architectures declines. Conversely, as Nb rises, the secrecy rate enhances. This is anticipated because more antennas enable both Eve and Bob to gather additional information. Specifically, in Figure 9, when Ne = 6, the proposed method achieves a secrecy -
rate of 6.5114, which is almost identical to the ’IRS-ISACFDB’ architecture at 6.6459. This rate is significantly higher than that of the ’AO-SDR-SAME’ architecture at
16 32 48 64 80 The number of IRS reflection elements (Ni)
2
3
4
5
6
7
8
9
Secrecy rate (bps/Hz)
Proposed AO-SDR-SAME IRS-C-HB IRS-ISAC-FDB WOIRS-C-HB WOIRS-C-FDB WOIRS-ISAC-FDB
Fig. 10. Comparison of secrecy rate between different architectures as the number of IRS reflection elements (Ni) increases from 16 to 80.
2 4 6 8 10 The number of antennas at Eve (Ne)
1
2
3
4
5
6
7
8
Secrecy rate (bps/Hz)
Proposed AO-SDR-SAME IRS-C-HB WOIRS-C-FDB WOIRS-C-HB IRS-ISAC-FDB WOIRS-ISAC-FDB
Fig. 11. Comparison of secrecy rate between different architectures as the number of antennas at Eve (Ne) increases from 2 to 10.
5.8803, the ’WOIRS-C-FDB’ architecture at 3.0556, the ’WOIRS-C-HB’ architecture at 3.2055, and the ’WOIRSISAC-FDB’ architecture at 2.0974. In Figure 10, when Nb = 6, the proposed method attains a secrecy rate of 6.8428, nearly matching the ’IRS-ISAC-FDB’ architecture at 6.9705. This performance is substantially better than the ’AO-SDR-SAME’ architecture at 6.2193, the ’WOIRS-C-FDB’ architecture at 3.8237, the ’WOIRS-CHB’ architecture at 3.6637, and the ’WOIRS-ISAC-FDB’ architecture at 3.1203.
V. Conclusion
In this paper, we explore the use of hardware-efficient HB architecture in IRS-ISAC systems. Our focus is on enhancing PLS for communication and reducing beampattern similarity for radar sensing. The formulated problem is non-convex and challenging to solve. To address this efficiently, we propose an algorithm based on the PDD framework, featuring a closed-form solution at each step. Simulation results validate the effectiveness of the proposed algorithm and demonstrate the superiority of

JOURNAL OF LATEX CLASS FILES, VOL. 14, NO. 8, AUGUST 2021 13
2 4 6 8 10 The number of antennas at Bob (Nb)
3
4
5
6
7
8
Secrecy rate (bps/Hz)
Proposed AO-SDR-SAME IRS-C-HB WOIRS-C-HB WOIRS-C-FDB IRS-ISAC-FDB WOIRS-ISAC-HB
Fig. 12. Comparison of secrecy rate between different architectures as the number of antennas at Bob (Nb) increases from 2 to 10.
the IRS-ISAC system with HB architecture in balancing performance and hardware costs.
Appendix A Tight upper bound for (17a)
We show that the function (18) is a tight upper bound of the objective function (17a). To begin with, the objective function (17a) is equivalent to,
R{Tr{ΨH (Q − FW)}} + 1
2ρ ∥Q − FW∥2
F (39a)
=1
2ρ ||FW − (Q + ρΨ)||2
F (39b)
= R{Tr{FWWH FH − FD − FH DH }} (39c)
=
N ∑t
i=1
R{fiGf H
i − 2fidi}, (39d)
where fi ∈ C1×NRF is the i-th row of the matrix F; G = WWH ∈ CNRF ×NRF ; D = W(Q + ρΨ)H = [d1, ..., di, ..., dI ] ∈ CNRF ×Nt .
We need the following lemma from [43] (we reuse the some notations in this lemma), Lemma 1 ([40, Lemma 1]): The quadratic function of the form wH Tw, with T being a Hermitian matrix is majorized by wH Sw + 2Real(wH (T − S)wk) + (wk)H (S − T)wk at the point wk, where S is a Hermitian matrix such that S ⪰ T. Lemma 1 can be easily proven using second-order Taylor expansion and subsequently replacing the Hessian matrix T by another Hermitian matrix S such that S ⪰ T. For a general twice differentiable-
 function, Lemma 1 is also known by the name of the quadratic upper bound principle as mentioned in [44]. Following Lemma 1, the tight upper bound for the first term of (39d) is given as,
fiGf H
i ≤λmax(G)fif H
i
+2Real{fi(G − λmax(G)I)(f k
i )H }
+f k
i (λmax(G)I − G)(f k
i )H ,
(40)
where λmax(G) denotes the maximum eigenvalue of G. The first term on the right hand side of (40) is constant since due to the unit-modulus property of the variable F, and the third term is also constant since it is independent of fi. After ignoring the constant term in (40), we are able to obtain a tight upper bound (18).
Appendix B Proof of Lemma 3.1 The objective function (19a) can be rewritten as,
f (fi) = −2R{fik}, (41)
where k = ((λmax(G)I − G)(f k
i )H + di
). Given that all entries of the vector fi have constant modulus, the minimum of (41) is achieved when fi is aligned with k, leading to,
f∗
i = exp(jarg(k)). (42)
We show that fi∗ = exp(jarg(k)) is the unique minimum,
by contradiction. Let f +
i = exp(j(arg(k) + ι)) be another
minimum, where at least one entry of ι is non-zero and is not an integer multiple of 2π (otherwise, fi∗ = f +
i ). Then,
from (42), we have,
f (f ∗
i ) = −2
NRF
∑
j=1
|k|j, (43a)
f (f +
i ) = −2
NRF
∑
j=1
|k|j cos(ιj). (43b)
Since both fi∗ and f +
i minimize fi∗, it follows from (43a) and
(43b) that, f (fi∗) = f (f +
i ). This is possible only if cos(ιj) =
1, which implies that all the entries of ι are zero or some integer multiples of 2π going against the assumption. This leads to a contradiction and hence proving the uniqueness. Based on the above discussion, it is clear to show that (20) is the unique optimal solution of the subproblem (19).
Appendix C Tight upper bound for (23a)
To begin with, the second term of (23a) is equivalent to,
(1 − μ) K
K ∑
k=1
|δPd(θk) − aH (θk)QQH a(θk)|2 (44a)
= (1 − μ)
K
K ∑
k=1
R{vecH (QQH )vec(Ak)vecH (Ak)vec(QQH )
− 2δPd(θk)vecH (QQH )vec(Ak)} (44b)
= R{vecH (QQH )Cvec(QQH ) − vecH (QQH )bt}, (44c)
where,
Ak = a(θk)aH (θk) ∈ CN2
t ×N 2
t , (45a)
C = (1 − μ)
K
K ∑
k=1
vec(Ak)vec(Ak)H ∈ CN2
t ×N 2
t , (45b)
bt = (1 − μ)
K
K ∑
k=1
2δPd(θk)vec(Ak) ∈ CN2
t ×N 2
t . (45c)

JOURNAL OF LATEX CLASS FILES, VOL. 14, NO. 8, AUGUST 2021 14
Similar to APPENDIX A, following Lemma 1, a tight upper bound for the first term of (44c) is given as,
vecH (QQH )Cvec(QQH ) (46a)
≤λmax(C)vecH (QQH )vec(QQH )
+ 2R{vecH (QQH )(C − λmax(C)I)vec(Qk(Qk)H )}
+ vecH (Qk(Qk)H )(λmax(C)I − C)vec(Qk(Qk)H ) (46b)
≤R{vecH (QQH )(c1 − c2)} (46c)
=R{Tr{QH C1Q}} − R{Tr{QH C2Q}}, (46d)
where,
c1 = vec(C1) = 2Cvec(Qk(Qk)H ) ∈ CN2
t , (47a)
c2 = vec(C2) = 2λmax(C)vec(Qk(Qk)H ) ∈ CN2
t . (47b)
Notice that in (46b), the first term is constant because ||Q||2
F ≤ Pmax, and the third term is also constant since
it is independent of Q. Then after ignoring the constant term, (46b) is converted into (46c). Then based on (46) and (47), the first and second terms of objective function (23a) can be reformulated as,
Lρ(Q) ≤μ(||He(Φ)Q||2
F − η||Hb(Φ)Q||2
F)
+ R{Tr{QH C1Q}} − R{Tr{QH (C2 + Bt)Q}} (48a)
=R{QH Z1Q} + R{QH Z2Q}, (48b)
where Lρ(Q) represents the first and second terms of objective function (23a); Z1 = μHeH (Φ)He(Φ) + C1 ∈
CNt×Nt ; Z2 = −μηHH
b (Φ)Hb(Φ) − C2 − Bt ∈ CNt×Nt ;
bt = vec(Bt). Notice that (48b) is still non-convex due to the matrix Z2 is negative semi-definite. By exploiting the first-order Taylor expansion, a convex tight upper bound of R{QH Z2Q} is drived as,
R{QH Z2Q} =
M ∑
i=1
qH
i Z2qi (49a)
≤
M ∑
i=1
((qk
i )H Z2qk
i + 2R{(qk
i )H Z2(qi − qk
i )})
(49b)
≤
M ∑
i=1
2R{(qk
i )H Z2qi} (49c)
= R{Tr{QH Z3}}, (49d)
where Z3 = 2Z2H Qk ∈ CNt×M . Finally, based on (48) and (49), the majorized objective function (24a) is therefore established.
Appendix D Tight upper bound for (33a)
The first term of (33a) is a quadratic function suitable fit in Lemma 1, where its tight upper bound can be found same as APPENDIX A. Here, we omit the detailed derivation.
References
[1] F. Liu, L. Zheng, Y. Cui, C. Masouros, A. P. Petropulu, H. Griffiths, and Y. C. Eldar, “Seventy years of radar and communications: The road from separation to integration,” IEEE Signal Processing Magazine, vol. 40, no. 5, pp. 106–121, 2023. [2] J. A. Zhang, F. Liu, C. Masouros, R. W. Heath, Z. Feng, L. Zheng, and A. Petropulu, “An overview of signal processing techniques for joint communication and radar sensing,” IEEE Journal of Selected Topics in Signal Processing, vol. 15, no. 6, pp. 1295–1-
315, 2021. [3] R. Liu, M. Li, Q. Liu, and A. L. Swindlehurst, “Joint waveform and filter designs for stap-slp-based mimo-dfrc systems,” IEEE Journal on Selected Areas in Communications, vol. 40, no. 6, pp. 1918–1931, 2022. [4] J. A. Zhang, M. L. Rahman, K. Wu, X. Huang, Y. J. Guo, S. Chen, and J. Yuan, “Enabling joint communication and radar sensing in mobile networks—a survey,” IEEE Communications Surveys & Tutorials, vol. 24, no. 1, pp. 306–345, 2021. [5] L. Yang, J. Wang, X. Xue, J. Shi, and Y.-
 Wang, “Secure hybrid beamforming for irs-assisted millimeter wave systems,” IEEE Transactions on Wireless Communications, vol. 22, no. 8, pp. 5111–5128, 2023. [6] X. Lu, W. Yang, X. Guan, Q. Wu, and Y. Cai, “Robust and secure beamforming for intelligent reflecting surface aided mmwave miso systems,” IEEE Wireless Communications Letters, vol. 9, no. 12, pp. 2068–2072, 2020. [7] X. Wu, J. Ma, C. Gu, X. Xue, and X. Zeng, “Robust secure transmission design for irs-assisted mmwave cognitive radio netw-
orks,” IEEE Transactions on Vehicular Technology, vol. 71, no. 8, pp. 8441–8456, 2022. [8] R. Liu, M. Li, H. Luo, Q. Liu, and A. L. Swindlehurst, “Integrated sensing and communication with reconfigurable intelligent surfaces: Opportunities, applications, and future directions,” IEEE Wireless Communications, vol. 30, no. 1, pp. 50–57, 2023. [9] S. P. Chepuri, N. Shlezinger, F. Liu, G. C. Alexandropoulos, S. Buzzi, and Y. C. Eldar, “Integrated sensing and communications with reconfigurable intellige-
nt surfaces: From signal modeling to processing,” IEEE Signal Processing Magazine, vol. 40, no. 6, pp. 41–62, 2023. [10] X. Wang, Z. Fei, Z. Zheng, and J. Guo, “Joint waveform design and passive beamforming for ris-assisted dual-functional radar-communication system,” IEEE Transactions on Vehicular Technology, vol. 70, no. 5, pp. 5131–5136, 2021. [11] Z. Xing, R. Wang, and X. Yuan, “Reconfigurable intelligent surface aided physical-layer security enhancement in integrated sensing and communication-
 systems,” IEEE Transactions on Vehicular Technology, vol. 73, no. 4, pp. 5179–5196, 2024. [12] V. Kumar, M. Chafii, A. L. Swindlehurst, L.-N. Tran, and M. F. Flanagan, “Sca-based beamforming optimization for irs-enabled secure integrated sensing and communication,” in GLOBECOM 2023-2023 IEEE Global Communications Conference. IEEE, 2023, pp. 5992–5997. [13] M. Hua, Q. Wu, W. Chen, O. A. Dobre, and A. L. Swindlehurst, “Secure intelligent reflecting surface-aided integrated sensing and communication-
,” IEEE Transactions on Wireless Communications, vol. 23, no. 1, pp. 575–591, 2024. [14] D. Li, Z. Yang, N. Zhao, Z. Wu, and T. Q. S. Quek, “Noma aided secure transmission for irs-isac,” IEEE Transactions on Wireless Communications, vol. 23, no. 9, pp. 10 911–10 925, 2024. [15] F. Liu and C. Masouros, “Hybrid beamforming with sub-arrayed mimo radar: Enabling joint sensing and communication at mmwave band,” in ICASSP 2019-2019 IEEE International Conference on Acoustics, Speech and Signal Processing-
 (ICASSP). IEEE, 2019, pp. 7770–7774. [16] A. Kaushik, C. Masouros, and F. Liu, “Hardware efficient joint radar-communications with hybrid precoding and rf chain optimization,” in ICC 2021-IEEE International Conference on Communications. IEEE, 2021, pp. 1–6. [17] X. Liu, T. Huang, N. Shlezinger, Y. Liu, J. Zhou, and Y. C. Eldar, “Joint transmit beamforming for multiuser mimo communications and mimo radar,” IEEE Transactions on Signal Processing, vol. 68, pp. 3929–3944, 2020.

JOURNAL OF LATEX CLASS FILES, VOL. 14, NO. 8, AUGUST 2021 15
[18] Z. Cheng, Z. He, and B. Liao, “Hybrid beamforming design for ofdm dual-function radar-communication system,” IEEE Journal of Selected Topics in Signal Processing, vol. 15, no. 6, pp. 1455–1467, 2021. [19] C. Qi, W. Ci, J. Zhang, and X. You, “Hybrid beamforming for millimeter wave mimo integrated sensing and communications,” IEEE Communications Letters, vol. 26, no. 5, pp. 1136–1140, 2022. [20] H. Luo, R. Liu, M. Li, Y. Liu, and Q. Liu, “Joint beamforming design for ris-assisted integrated sen-
sing and communication systems,” IEEE Transactions on Vehicular Technology, vol. 71, no. 12, pp. 13 393–13 397, 2022. [21] X. Wang, P. Hao, and L. Hanzo, “Physical-layer authentication for wireless security enhancement: Current challenges and future developments,” IEEE Communications Magazine, vol. 54, no. 6, pp. 152–158, 2016. [22] A. Jagannath, J. Jagannath, and P. S. P. V. Kumar, “A comprehensive survey on radio frequency (rf) fingerprinting: Traditional approaches, deep learning, and open chal-
lenges,” Computer Networks, vol. 219, p. 109455, 2022. [23] A. Mukherjee and A. L. Swindlehurst, “Detecting passive eavesdroppers in the mimo wiretap channel,” in 2012 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP). IEEE, 2012, pp. 2809–2812. [24] Q. Li, C. Li, and J. Lin, “Constant modulus secure beamforming for multicast massive mimo wiretap channels,” IEEE Transactions on Information Forensics and Security, vol. 15, pp. 264275, 2019. [25] E. Ardestanizadeh, M.-
 Franceschetti, T. Javidi, and Y.-H. Kim, “Wiretap channel with secure rate-limited feedback,” IEEE Transactions on Information Theory, vol. 55, no. 12, pp. 53535361, 2009. [26] J. Chu, Z. Lu, R. Liu, M. Li, and Q. Liu, “Joint beamforming and reflection design for secure ris-isac systems,” IEEE Transactions on Vehicular Technology, vol. 73, no. 3, pp. 4471–4475, 2024. [27] J. Li and P. Stoica, “Mimo radar with colocated antennas,” IEEE signal processing magazine, vol. 24, no. 5, pp. 106–114, 2007.-
 [28] R. Liu, M. Li, Q. Liu, and A. L. Swindlehurst, “Dual-functional radar-communication waveform design: A symbol-level precoding approach,” IEEE Journal of Selected Topics in Signal Processing, vol. 15, no. 6, pp. 1316–1331, 2021. [29] Q.-C. Cao, G.-H. Cheng, and E. Moreau, “The joint eigenvalue decomposition algorithm based on first-order taylor expansion via the exterior penalty function method,” Signal Processing, vol. 200, p. 108644, 2022. [30] Q. Shi and M. Hong, “Penalty dual decompositio-
n method for nonsmooth nonconvex optimization—part i: Algorithms and convergence analysis,” IEEE Transactions on Signal Processing, vol. 68, pp. 4108–4122, 2020. [31] M. Razaviyayn, M. Hong, and Z.-Q. Luo, “A unified convergence analysis of block successive minimization methods for nonsmooth optimization,” SIAM Journal on Optimization, vol. 23, no. 2, pp. 1126–1153, 2013. [32] S. P. Boyd and L. Vandenberghe, Convex optimization. Cambridge university press, 2004. [33] D. P. Bertsekas, “Nonlinear pr-
ogramming,” Journal of the Operational Research Society, vol. 48, no. 3, pp. 334–334, 1997. [34] N. T. Nguyen and K. Lee, “Unequally sub-connected architecture for hybrid beamforming in massive mimo systems,” IEEE Transactions on Wireless Communications, vol. 19, no. 2, pp. 1127–1140, 2019. [35] S. Wan, H. Zhu, K. Kang, and H. Qian, “On the performance of fully-connected and sub-connected hybrid beamforming system,” IEEE Transactions on Vehicular Technology, vol. 70, no. 10, pp. 11 078–11 082, 202-
1. [36] G. M. Gadiel, N. T. Nguyen, and K. Lee, “Dynamic unequally sub-connected hybrid beamforming architecture for massive mimo systems,” IEEE Transactions on Vehicular Technology, vol. 70, no. 4, pp. 3469–3478, 2021. [37] L. Xu, B. Wang, H. Li, and Z. Cheng, “Enhancing physical layer security in dual-function radar-communication systems with hybrid beamforming architecture,” IEEE Wireless Communications Letters, vol. 13, no. 6, pp. 1566–1570, 2024. [38] Z.-q. Luo, W.-k. Ma, A. M.-c. So, Y. Ye, -
and S. Zhang, “Semidefinite relaxation of quadratic optimization problems,”
IEEE Signal Processing Magazine, vol. 27, no. 3, pp. 20–34, 2010. [39] F. Dong, W. Wang, X. Li, F. Liu, S. Chen, and L. Hanzo, “Joint beamforming design for dual-functional mimo radar and communication systems guaranteeing physical layer security,” IEEE Transactions on Green Communications and Networking, vol. 7, no. 1, pp. 537–549, 2023. [40] Z. Cheng, Z. He, S. Zhang, and J. Li, “Constant modulus waveform design for mimo radar transmit beampattern,” IEEE Transactions on Signal Processing, vol. 6-
5, no. 18, pp. 49124923, 2017. [41] L. Dong and H.-M. Wang, “Enhancing secure mimo transmission via intelligent reflecting surface,” IEEE Transactions on Wireless Communications, vol. 19, no. 11, pp. 7543–7556, 2020. [42] X. Yu, J.-C. Shen, J. Zhang, and K. B. Letaief, “Alternating minimization algorithms for hybrid precoding in millimeter wave mimo systems,” IEEE Journal of Selected Topics in Signal Processing, vol. 10, no. 3, pp. 485–500, 2016. [43] J. Song, P. Babu, and D. P. Palomar, “Optimiza-
tion methods for designing sequences with low autocorrelation sidelobes,” IEEE Transactions on Signal Processing, vol. 63, no. 15, pp. 39984009, 2015. [44] D. R. Hunter and K. Lange, “A tutorial on mm algorithms,” The American Statistician, vol. 58, no. 1, pp. 30–37, 2004.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:47.972Z
- **Text Length:** 70214 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 15 of 15
