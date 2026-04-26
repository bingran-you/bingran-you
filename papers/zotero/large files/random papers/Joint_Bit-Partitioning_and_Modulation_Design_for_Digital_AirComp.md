# PDF Document: Yan and Fischione - 2025 - Joint Bit-Partitioning and Modulation Design for Digital AirComp.pdf

**File Path:** Yan and Fischione - 2025 - Joint Bit-Partitioning and Modulation Design for Digital AirComp.pdf

**Processed Date:** 2026-02-10T18:17:43.561Z

**File Size:** 420.87 KB

**Total Pages:** 6

**Extracted Pages:** 6

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3359

**Title:** Joint Bit-Partitioning and Modulation Design for Digital AirComp

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Joint Bit-Partitioning and Modulation
Design for Digital AirComp
Xiaojing Yan, Carlo Fischione School of Electrical Engineering and Computer Science, KTH Royal Institute of Technology, Stockholm, Sweden Email: {xiay, carlofi}@kth.se
Abstract—For digital over-the-air computation, the ChannelComp framework has recently been proposed to design digital modulations to compute any arbitrary function over a multiple access channel. To reduce modulation design complexity while increasing computation reliability, this paper integrates a bitpartitioning procedure into ChannelComp. The key process is to partition the input bit sequence into several groups, map each group to a single modulation symbol and transmit the encoded symbol sequ-
ence across multiple time slots. With the objective to maximize a worst-case constellation distance, we develop two bit-partitioning methods. In uniform bit-partitioning, bits are evenly distributed across groups and modulation is designed via a max–min optimization, which is handled by a constrained convexconcave procedure (CCCP) that solves a sequence of secondorder cone programming subproblems. In importance-adaptive bit-partitioning (IABP), the bit allocation is adapted to the significance of -
individual bit positions, and the modulation and partitioning are jointly optimized. To keep the overall complexity manageable, simulated annealing is employed in the outer loop to update the partitioning, while a CCCP-based solver is used in the inner loop for modulation design. Numerical results show that both methods provide robust computation in noisy channels, and IABP achieves up to a 5 dB reduction in computation error compared to Sequential Modulation for AirComp, especially for product co-
mputation. Index Terms—Over-the-air computation, digital modulation, bit-partitioning
I. INTRODUCTION
The rapid growth of wireless devices and new services in 6G is driving an explosion of data from intelligent Internet of Things (IoT) devices. A large amount of data needs to be gathered and delivered to servers for computation, analysis, and decisions [1]. In response, over-the-air computation (AirComp) offers a task-oriented alternative in which devices transmit simultaneously over a multiple access channel (MAC), allowing the receiver to directly estimate a desired function output of the distri-
buted data. By leveraging waveform superposition with suitable function representations, AirComp provides lowlatency, spectrum-efficient aggregation aligned with the computation goal [2]. This is especially attractive for distributed learning, where gradient and model-update aggregation can be done over the air, improving the usage of compute resources for large-scale training systems [3]. Early studies in AirComp focused on computing linear functions over the MAC and were later extended to nomogr-
aphic functions. These approaches, however, relied on analog amplitude modulation, which is difficult to integrate with standard wireless hardware and sensitive to noise and fading [4]. This
has led to a move toward digital AirComp, where simple constellations such as BPSK and FSK have been used for learning tasks over wireless networks [5], [6]. These digital schemes are limited to specific function computations and often result in inefficient resource utilization [7]. To overcome these challenges, ChannelComp has been proposed as a general modulation-based framework for arbitrary function computation, offering reliable computation [8]. However, in ChannelComp, each function input is-
 encoded into a single digital modulation symbol, whereas recent multisymbol designs advance beyond this by exploiting transmission across multiple time slots. In [9], Repetition for Multiple Access Computing (ReMAC) extends ChannelComp to enable selective symbol repetition and improve computation accuracy, but its semidefinite relaxation (SDR)-based method scales poorly in large-scale networks. As a lower complexity framework, Bit-Slicing [10] allocates bit sequences into slices and maps each sli-
ced integer to square quadrature amplitude modulation symbols for transmission, yet it is mainly effective for the sum function. To enhance the flexibility of modulation design, Sequential Modulation for AirComp (SeMAC) encodes each input into a sequence of modulation symbols and employs an iterative algorithm based on successive convex approximations to reduce computational cost while retaining high computation accuracy [11]. However, it does not consider bit-level significance, since the erroneo-
us reception of more significant bits leads to larger computational error. In this paper, we integrate the ChannelComp framework with a bit-partitioning procedure for digital AirComp. The idea is to partition the input bit sequence into several groups, encode each bit group to a single modulation symbol, and transmit the resulting symbol sequence over multiple time slots. To guarantee a robust computation, we develop two bit-partitioning methods. The first, uniform bit-partitioning (UBP), assigns -
an equal number of bits to each group. For this case, we formulate the modulation design as a max–min optimization that maximizes the worst-case constellation distance. Although the problem is non-convex, it can be handled by a constrained convex-concave procedure (CCCP) that iteratively solves a sequence of relaxed second-order cone programming (SOCP) subproblems. The second method, importanceadaptive bit-partitioning (IABP), allocates bits according to their positional significance and jointly o-
ptimizes both the partitioning and modulation under the same max–min criterion. To keep the complexity tractable, we place the CCCP
arXiv:2511.20113v1 [eess.SP] 25 Nov 2025

based modulation design inside an outer simulated annealing (SA) loop that updates the partitioning of input bit sequence. Numerical results show that both methods achieve robust computation, and IABP reduces computation error by up to 5 dB compared to SeMAC, particularly for product function.
II. SYSTEM MODEL
In this section, we present the multi-symbol digital AirComp framework integrated with bit-partitioning and outline its basic operations. The communication process involves three main blocks: encoding, transmission and decoding.
A. Encoding
Consider a network with K single-antenna nodes transmitting data to a computation point (CP) over a MAC. The goal of the CP is to compute a function f (x1, . . . , xK ) : RK 7→ R, where xk ∈ R represents the input value held by node k. Before transmission, the encoding procedure Ek(·) : R 7→ CL of node k is elaborated as follows. 1) Quantization: Each node k first quantizes its input value xk into a finite set Xf of Q = 2B quantization levels using a B-bit quantizer QB(·) : R 7→ Xf . The quantized-
 value is denoted by x ̃k := QB(xk) ∈ Xf , and can be represented by a binary vector dk = [dk,1, . . . , dk,B] ∈ {0, 1}B, where dk,1 is the most significant bit and dk,B is the least significant bit. 2) Bit-Partitioning: For each node k, the B-bit binary sequence dk is partitioned into L groups based on a group-size vector b = [b1, . . . , bL] ∈ ZL+, where bl indicates the number
of bits in group l and PL
l=1 bl = B. Let sl = Pl
j=1 bj
denote the cumulated bit width of the first l groups, with s0 = 0. Then, the bit subsequence assigned to group l can be defined as dk,l = [dk,sl−1+1, . . . , dk,sl ] ∈ {0, 1}bl , and its corresponding integer value x ̃k,l is computed as:
x ̃k,l =
Xbl
j=1 dk,sl−1+j · 2bl−j , for l ∈ [L]. (1)
This procedure, referred to as bit-partitioning, decomposes the quantized input x ̃k into L grouped integers via a Spliter Sk(·) : R 7→ NL, i.e., [x ̃k,1, . . . , x ̃k,L] := Sk(x ̃k), where each element lies in the range {0, . . . , 2bl − 1}. 3) Digital Modulation: Each grouped integer x ̃k,l is modulated into a complex modulation symbolx⃗ k,l ∈ C. The complete modulation sequence is generated by an encoder Ek(·) : NL 7→ CL, i.e.,x[⃗ k,1, . . . ,x⃗ k,L] := Ek(x ̃k,1, . . . , x ̃k,L), with each sym-
bol preparesd to transmit in a distinct time slot. In this way, the input value xk is encoded into a sequence of L modulated symbols, i.e., x[⃗ k,1, . . . ,x⃗ k,L] = Ek(xk).
B. Transmission
All K nodes simultaneously transmit their encoded modulated symbol sequences over the MAC. Assuming perfect synchronization1, the CP receives the superimposed signals across L time slots as follows:
y⃗ l =
XK
k=1 hk,lpk,lx⃗ k,l +z⃗ l, ∀l ∈ [L], (2)
1Note that perfect synchronization is a common assumption in AirComp literature [7]. In practical systems, techniques such as frame timing and carrier frequency offset estimation can be applied for achieving synchronization [12].
where hk,l is the channel coefficient, pk,l is the transmission power, andz⃗ l ∼ N (0, σz2) is the additive white Gaussian noise. To compensate for the fading effects, optimal power control is applied by inverting the channel [13], where the power is set as pk,l = h∗
k,l/|hk,l|2. Consequently, the received signal at the CP in each time slot simplifies to:
y⃗ l =
XK
k=1x⃗ k,l +z⃗ l, ∀l ∈ [L]. (3)
Collecting all the received symbols, we define the received sequence as y :=y[⃗ 1, . . . ,y⃗ L] ∈ CL.
C. Decoding
In the CP, the decoding process D(·) : CL 7→ R consists of two main components: symbol estimation and tabular mapping. 1) Symbol Estimation: As discussed in [10], the optimal estimator at the CP can be derived using the maximum a posteriori criterion. However, following similar steps in [8], we adopt a maximum likelihood estimator M(·) : CL 7→ CL. In each time slot l, the CP estimates the aggregated constellation pointv⃗ l := PK
k=1x⃗ k,l from the noisy observationy⃗ l, and the
full estimated sequence v := v[⃗ 1, . . . ,v⃗ L] ∈ CL is recovered via v = M(y). 2) Tabular Mapping: After recovering the estimated sequence v, the CP applies a B-bit tabular operator TB(·) : CL 7→ Yf that matches the input quantization precision. The final estimate is fˆ = TB(v) ∈ Yf , where Yf denotes the set of quantized output values of function f . Therefore, the estimated output is recovered from the received symbol sequence, i.e., fˆ = D(y).
III. PROBLEM STATEMENT
This section introduces the priciples for designing the encoder and decoder under bit-partitioning to enable robust computation. Since we partition the B input bits into groups based on b, for each group l, let Ql = 2bl denote the number of possible integer values that can be represented by the bl bits. Then, for node k, the Ql integer values are characterized by a codebook of complex-valued symbols, denoted by xk,l :=x[⃗ (1)
k,l, . . . ,x⃗ (Ql)
k,l ]T ∈ CQl . By stacking the codebooks from all K nodes, the modulation vector for group l can be defined as xl := [xT
1,l, . . . , xT
K,l]T ∈ CNl , where Nl = KQl. Additionally, we impose a unit-norm constraint on each modulation vector and denote the feasible set by X := {∥xl∥2 ≤ 1, ∀l ∈ [L]}.
Now consider a noiseless MAC and two input sets
x(i)
1 , . . . , x(i)
K and x(j)
1 , . . . , x(j)
K , which yield distinct function
values f (i) ̸= f (j). Since each input value is modulated into a sequence of L complex symbols, the resulting aggregated constellation sequences v(i) = PK
k=1 Ek(x(i)
k ) and
v(j) = PK
k=1 Ek(x(j)
k ). For each time slot l, the constellation
point associated with the i-th input case can be expressed as
v(i)
l = aT
i,l(b)xl. Specifically, ai,l(b) ∈ {0, 1}Nl is a binary vector selects the support of the l-th grouped modulation symbols associated with f (i), and its dimension is determined by the group-size vector b.

0 00 11 01 1
x ̃1
0123
E1(·)
S1(·)
x⃗ 1,1 x⃗ 1,2 x⃗ 1,3 x⃗ 1,4
QB(·)
01 1 11 00 0
1320
EK (·)
SK (·)
x⃗ K,1 x⃗ K,2 x⃗ K,3 x⃗ K,4
p1,1 p1,2 p1,3 p1,4 pK,4
pK,3
pK,2
pK,1
...
z⃗ 1 z⃗ 2 z⃗ 3 z⃗ 4
y⃗ 1 y⃗ 2 y⃗ 3 y⃗ 4
v⃗ 1 v⃗ 2 v⃗ 3 v⃗ 4
M(·)
x1
TB(·)
fˆ(x1, . . . , xK)
E1(·) EK(·)
D (·)
...
. . . x ̃K
QB(·) xK
···
···
···
···
···
···
···
···
···
···
···
···
···
···
···
···
···
···
···
···
···
···
···
···
···
···
···
···
···
···
···
···
(a) Uniform Bit-Partitioning
0 01 10 0 11
x ̃1
0123
E1(·)
S1(·)
x⃗ 1,1 x⃗ 1,2 x⃗ 1,3 x⃗ 1,4
11 1 100 00
1320
EK (·)
SK (·)
x⃗ K,1 x⃗ K,2 x⃗ K,3 x⃗ K,4
x ̃K
...
p1,1 p1,2 p1,3 p1,4 pK,4
pK,3
pK,2
pK,1
...
...
z⃗ 1 z⃗ 2 z⃗ 3 z⃗ 4
y⃗ 1 y⃗ 2 y⃗ 3 y⃗ 4
v⃗ 1 v⃗ 2 v⃗ 3 v⃗ 4
M(·)
TB(·)
fˆ(x1, . . . , xK)
E1(·) EK(·)
D (·)
QB(·)
x1 QB(·) xK
···
···
···
···
···
···
···
···
···
···
···
···
···
···
···
···
···
···
···
···
···
···
···
··· ···
···
···
···
···
···
···
···
(b) Importance-Adaptive Bit-Partitioning
Fig. 1. The overall process of proposed UBP and IABP methods for digital AirComp.
For reliable computation, the aggregated constellation sequences v(i) and v(j) must be distinguishable at the CP whenever the corresponding quantized outputs differ, leading to the following constraints:
if fˆ(i) ̸= fˆ(j) ⇒ v(i) ̸= v(j), ∀(i, j) ∈ [M ]2, (4)
where M is the number of distinct quantized function outputs. To make this requirement quantitative, consider the squared Euclidean distance between two constellation sequences:
∥v(i) − v(j)∥2
2=
XL
l=1 (ai,l(b) − aj,l(b))Txl
2
=
XL
l=1 xH
l Di,j,l(b) xl, (5)
where Di,j,l(b) := [ai,l(b) − aj,l(b)][ai,l(b) − aj,l(b)]T. A larger Euclidean distance makes two received sequences easier to distinguish at the receiver. However, this distance only reflects geometry in the signal space but ignores how far the corresponding function values are from each other. When two function outputs differ more, their signal representations should be more separated than those for outputs that are closer. To model this effect, we scale the Euclidean distance by ∆fˆi,j = ε|fˆ(i-
) − fˆ(j)| with ε > 0. For pairs with ∆fˆi,j ̸= 0, the scaled distance is defined as
ri,j({xl}, b) := 1
∆fˆi,j
XL
l=1 xH
l Di,j,l(b) xl, (6)
and let M ̃ indicates the number of the pairwise distances. We then quantify the computation robustness using the worst-case distance, given by the minimum over these pairs:
dmin({xl}, b) := min
∆fˆi,j ̸=0
ri,j({xl}, b). (7)
Maximizing dmin(xl, b) encourages that output pairs with greater differences are separated by proportionally larger constellation distances, making them less likely to be misestimated
over noisy MACs. Based on this principle, we next introduce two bit-partitioning methods to achieve reliable computation.
IV. THE PROPOSED BIT-PARTITIONING METHODS
In this section, we develop two specific bit-partitioning methods for multi-symbol digital AirComp. UBP distributes the same number of bits to each group and focuses on the modulation design that enlarges the worst-case distance for robust computation. IABP allocates bits according to the significance of bit positions and couples bit-partitioning with modulation design, but at the cost of a larger design complexity.
A. Uniform Bit-Partitioning
We first focus on the uniform partitioning, where the total bits are evenly distributed across all groups, and the entire encoding and decoding flow is illustrated in 1(a). If B is not divisible by L, the leftmost group is zero-padded. Specifically, each group is assigned b = ⌈B/L⌉ bits and employs the identical modulation vector x ∈ CN , where N = K · 2b. Under this setting, the worst-case distance in (7) reduces to
dmin(x; b) = min
∆fˆi,j ̸=0
1
∆fˆi,j
xHDi,j x. (8)
Here, since B and L fix b, we drop parameter b from the notation and write Di,j := PL
l=1 Di,j,l(b). Accordingly, to design the constellation diagram, we pose the following optimization to maximize dmin(x; b) over the feasible set X :
P0 := max
x∈X dmin(x; b). (9)
Introducing an auxiliary variable c > 0 to represent the worstcase distance, then Problem P0 is equivalently written as:
P1 := max
x∈X ,c>0 c
s.t. c∆fˆi,j − xHDi,j x ≤ 0, for ∆fˆi,j ̸= 0. (10a)

Algorithm 1: CCCP for UBP
1 Given an initial point x(0). Set t = 0. 2 Repeat
3 Convexify. Linearize −xHDi,jx to obtain P2. 4 Solve. Obtain x(t+1) by solving P2. 5 Update iteration. t := t + 1.
6 Until c(t+1) − c(t) < δ is satisfied. 7 Output xˆ ← x(t).
Problem P1 is a difference of convex (DC) programming, where the quadratic term −xDi,jx is concave. We can address it via CCCP [14], a heuristic algorithm that iteratively majorizes the concave part and solves a sequence of convex surrogates. Let x(t) be the solution at iteration t − 1. At iteration t, we replace concave terms with a convex upper bound around x(t), and obtain the convexified subproblem:
P2 := min
x∈X ,c>0 −c
s.t. c∆fˆi,j − 2R{x(t)HDi,j x} + x(t)HDi,j x(t) ≤ 0,
for ∆fˆi,j ̸= 0, (11a)
Problem P2 is a SOCP, which can be handled by standard CVX solvers [15]. We terminate the procedure when the improvement in the objective is small, i.e., c(t+1) − c(t) < δ. The final iterate is returned as an approximate solution to P0, and the complete procedure is summaried in Algorithm 1.
Theorem 1. Let {x(t), c(t)} be the sequence generated by Algorithm 1, then the objective {−c(t)}t∞=0 is non-increasing
and will converge. All the limit points of {x(t)}t∞=0 are stationary points of the original problem P0.
Proof. See Appendix A.
B. Importance-Adaptive Bit-Partitioning
In the UBP, all groups are assigned equal bit widths without accounting for the fact that estimation errors in more significant groups cause larger deviations in the computation output. To address this limitation, we propose an adaptive method that couples the modulation design with bit-partitioning. The idea is to assign fewer bits to more significant groups so as to enlarge the minimum constellation distance, thereby lowering the probability of their symbol estimation errors. The corresponding m-
odel is illustrated in 1(b). Concretely, we keep vector b in non-increasing order to prioritize the accurate aggregation of more significant groups. To incorporate relative importance into the distance measure, we introduce group-wise weights employing a Gaussian profile:
wl = exp − (l − 1)2
2σ2 , ∀l ∈ [L], (12)
with decay parameter σ > 0, and normalize them as w ̃l =
wl/ PL
l=1 wl. Then, we extend the scaled distance in (6) as:
r ̃i,j({xl}, b) := 1
∆fˆi,j
XL
l=1 w ̃l xH
l Di,j,l(b)xl, (13)
Algorithm 2: CCCP and SA for IABP
1 Given an initial vector b(0), φ0 > 0, φmin, α ∈ (0, 1). Set r = 0. 2 Repeat
3 Given an initial point {x(0)
l }, candidate vector b′. Set t = 0. 4 Repeat
5 Convexify. Linearize −xH
l Di,j,lxl to obtain P5
6 Solve. Obtain {x(t+1)
l } by solving P5. 7 Update iteration. t := t + 1.
8 Until c(t+1) − c(t) < δ is satisfied. 9 Update b. Accept b(r+1) = b′ with probability p. 10 Otherwise, b(r+1) = b(r). 11 Update φ. φr+1 = αφr. 12 Update iteration. r := r + 1. 13 Until φr < φmin is satisfied.
14 Output bˆ ← b(r), {xˆl} ← {x(t)
l }.
and define the corresponding weighted worst-case distance as:
d ̃min({xl}, b) := min
∆fˆi,j ̸=0
r ̃i,j({xl}, b). (14)
Consequently, to jointly design the constellation diagram and bit sequence partitioning, we pose the following optimization problem by maximizing d ̃min({xl}, b), as given by:
P3 := max
{xl}∈X ,b
d ̃min({xl}, b)
s.t.
XL
l=1 bl = B, b1 ≤ . . . ≤ bL, bl ∈ Z+. (15a)
Problem P3 is a non-convex and involves a discrete search over b coupled with continuous optimization over {xl}. We can adopt a bi-level approach, where we employ SA [16] to update b in the outer loop and optimize {xl} via CCCP in the inner loop. The annealing procedure begins with an initial vector b(0). In each iteration r, a candidate b′ is generated by shifting one bit between adjacent groups while preserving the non-decreasing order and the total bit constraint. To evaluate a group-size vecto-
r, we introduce an energy function N (b), determined as the objective value of P3 with b fixed. This leads to the problem:
P4 := max
{xl }∈X
d ̃min({xl}; b). (16)
Problem P4 can be regarded as the inner optimization over the modulation vectors {xl}. It retains the same DC structure as P0 and can be relaxed to the following formulation:
P5 := min
{xl}∈X ,c
−c
s.t. c∆fˆi,j − 2R
XL
l=1 w ̃lx(t)H
l Di,j,lxl
+
XL
l=1 w ̃lx(t)H
l Di,j,lx(t)
l ≤ 0, for ∆fˆi,j ̸= 0.
Iterating the convexify–solve steps in CCCP yields {xˆl} for the current group-size vector b. We then substitute {xˆl} back

10 20 30 40
10−6
10−4
10−2
SNR(dB)
NMSE
UBG L = 2 UBG L = 3 UBG L = 4 IABG L = 2 IABG L = 3 IABG L = 4
(a) f = PK
k=1 xk
10 20 30 40
10−5
10−3
SNR(dB)
NMSE
(b) f = QK
k=1 xk
10 20 30 40
10−4
10−3
10−2
SNR(dB)
NMSE
(c) f = maxk xk
Fig. 2. Performance of the proposed UBP under different SNRs in terms of NMSE averaged over Ns = 100. The number of bits are B = 6 and the desired
functions are f = PK
k=1 xk, f = QK
k=1 xk and f = maxk xk with K = 4 nodes.
into P4 to obtain the corresponding energy value. Based on this value, the acceptance probability for moving from b(r) to b′ is given by:
p = min 1, exp N (b′) − N (b(r))
φr
, (18)
where φt > 0 is the annealing temperature following a cooling schedule φr+1 = αφr with α ∈ (0, 1). Accordingly, we set b(r+1) = b′ with probability p. Otherwise, we keep b(r+1) = b(r). The annealing process stops when φr < φmin, and a global asymptotic of this process can be achieved under the logarithmic cooling schedule [16]. The final iterate is taken as an approximate solution to the original P3. The combined SA and CCCP procedure is summarized in Algorithm 2.
C. Complexity Analysis
We analyze the complexity of the proposed Algorithm 1 and Algorithm 2 in this subsection. In the uniform case, each itertaion of Algorithm 1 solves the SOCP subproblem P2
via an interior-point method whose cost is O(N 3 + M ̃ N 2), leading to an overall complexity O(S[N 3 + M ̃ N 2]) for S iterations in CCCP procedure [15]. In the importance-adaptive case, under a fixed b, the inner modulation subproblem costs O(S[(P
l Nl)3 + M ̃ (P
l Nl)2]). Across T annealing updates
of b, the total cost of Algorithm 2 becomes O(T S[(P
l Nl)3 +
M ̃ (P
l Nl)2]). Since P
l Nl ≥ N and an outer SA loop is involved, Algorithm 2 entails higher computational complexity than Algorithm 1. Moreover, due to bit-partitioning procedure, the optimization dimension N or P
l Nl in our SOCP subproblems are reduced relative to the single-symbol design. To scale to large-scale networks, we can adopt an offline workflow, where the modulation and bit-partitioning co-design only needs to be solved once in advance and then reused during real-time applications.
V. NUMERICAL EXPERIMENTS
In this section, we evaluate the performance of the two proposed bit-partitioning strategies, and make a comparison with the existing multi-symobl modulation schemes, i.e., SeMAC, ReMAC, and Bit-Slicing. Specifically, the performance is
evaluated using the normalized mean square error (NMSE) metric, defined as
NMSE :=
PNs
j=1 |f (i) − fˆ(i)
j |2
Ns|fmax − fmin|2 , (19)
where Ns = 100 is the number of Monte Carlo trials, f (i) is
the desired function value, fˆ(i)
j is the estimated value in the j-th Monte Carlo trial. fmax and fmin denote the maximum and minimum values of the function output, respectively. We also define signal-to-noise ratio (SNR):= 10 log(∥x∥22/σz2).
A. Performance of Bit-Partitioning
In this subsection, we evaluate the performance of the two proposed bit-partitioning methods in a network with K = 4 nodes. The discrete inputs xk are uniformly distributed over [0, 1] and represented using B = 6 bits. Moreover, we consider L ∈ {2, 3, 4} groups and compute the NMSE for the sum
f = PK
k=1 xk, the product f = QK
k=1 xk, and the max f = maxk xk functions. Fig. 2 presents the NMSE performance of UBP and IABP across a range of SNRs. As expected, higher SNR leads to lower NMSE for all computed functions. Increasing L spreads the available bits across more groups, which enlarges the pergroup constellation spacing, thereby improving computation accuracy. In addition, for a given SNR and L, IABP achieves lower NMSE than UBP, since it adaptively partitions bits according to their position significance. This reduc-
es the erroneous reception of more significant bits and thus improves the computation accuracy, but at the cost of a higher computational complexity.
B. Compare to ReMAC, SeMAC and Bit-Slicing
In this subsection, we compare the proposed IABP with other multi-symbol schemes: ReMAC, SeMAC, and BitSlicing. All methods are evaluated for computing the product function using K = 4 nodes, with input values represented by B = 6 bits and transmitted over L = 2 time slots. As shown in Fig. 3, IABP achieves the lowest NMSE across all SNR levels. Compared to SeMAC, which maps the entire input to a sequence of modulation symbols without

5 10 15 20 25 30 35 40
10−3
10−2
10−1
SNR(dB)
NMSE
Bit-Slicing ReMAC SeMAC IABP
Fig. 3. Performance comparison among ReMAC, SeMAC, Bit-Slicing and IABP with K = 4 nodes across L = 2 time slots for the product function. The input value xk is quantized by B = 6 bits.
considering bit significance, IABP offers better protection of more critical bits, reducing the NMSE by approximately 5 dB. Consistent with the analysis in [11], SeMAC outperforms ReMAC in compuatation accuracy since it explores greater diversity in modulation patterns across multiple time slots. Additionally, Bit-Slicing yields highest NMSE because the required pre- and post-processing for nonlinear function computation introduces extra approximation errors [9].
VI. CONCLUSION
This work integrated two bit-partitioning methods into ChannelComp for multi-symbol modulation design. The uniform method UBP maximizes the worst-case constellation distance and is addressed with a CCCP which solves a sequence of SOCP subproblems. The adaptive method IABP adjusts bit-partitioning according to bit significance and updates the allocation with an outer SA loop. Simulations show that both methods achieve reliable computation, and IABP yields higher computation accuracy compared with U-
BP. Moreover, by adapting bit allocation according to bit significance, IABP offers stronger computation robustness than other existing multisymbol methods. Future work will explore learning-based bitpartitioning models and extensions to scenarios of fading, imperfect channel inversion, and asynchronous transmissions.
APPENDIX
A. Proof of Theorem 1
Let g0(c) = −c, gi,j(c) = c∆fi,j, and hi,j(x) = −xHDi,jx, ∀(i, j) ∈ [M ]2. By convexifying the concave term in hi,j (x), we have ˆhi,j (x; x(t)) = −2R{x(t)HDi,jx} + x(t)HDi,j x(t).
Assume {x(t), c(t)} is a feasible point for P1, then {x(t), c(t)} is also a feasible point for P2 because
gi,j (c(t)) − ˆhi,j (x(t); x(t)) = gi,j (c(t)) − hi,j (x(t)) ≤ 0. (20)
Therefore, there exists a feasible point (x(t+1), c(t+1)) to P2. Given the convexity of hi,j(x), the following inequality holds:
gi,j (c) − hi,j (x) = gi,j (c) − ˆhi,j (x; x(t)) ≤ 0. (21)
It then follows that (x(t+1), c(t+1)) must be a feasible point of P1 since
gi,j (c(t+1)) − hi,j (x(t+1))
≤gi,j (c(t+1)) − ˆhi,j (x(t+1); x(t)) ≤ 0. (22)
Thus, if (x(0), c(0)) is initialized feasible, all the iterates (x(t), c(t)) generated by Algorithm 1 are feasible. In the optimization, at iteration t, we minimize the objective value g0(c), leading to g0(c(t)) ≥ g0(c(t+1)). Hence, the objective sequence {−c(t)}t∞=0 is non-increasing and convergent. Addtionally, based on Theorem 10 in [17], in the form of CCCP, all the limit points of {x(t)}t∞=0 are stationary points of the original problem P0, which concludes the proof.
REFERENCES
[1] W. Liu, X. Zang, Y. Li, and B. Vucetic, “Over-the-air computation systems: Optimization, analysis and scaling laws,” IEEE Trans. Wireless Commun., vol. 19, no. 8, pp. 5488–5502, 2020. [2] A. S ̧ ahin and R. Yang, “A survey on over-the-air computation,” IEEE Commun. Surveys Tuts., 2023.
[3] M. M. Amiri and D. G ̈undu ̈z, “Federated learning over wireless fading channels,” IEEE Trans. Wireless Commun., vol. 19, no. 5, pp. 35463557, 2020. [4] M. Goldenbaum, H. Boche, and S. Sta ́nczak, “Harnessing interference for analog function computation in wireless sensor networks,” IEEE Transactions on Signal Processing, vol. 61, no. 20, pp. 4893–4906, 2013. [5] J. Bernstein, Y.-X. Wang, K. Azizzadenesheli, and A. Anandkumar, “signSGD: Compressed optimisation for non-convex problems,” in Inte-
rnational Conference on Machine Learning, pp. 560–569, PMLR, 2018. [6] A. S ̧ ahin, B. Everette, and S. S. M. Hoque, “Distributed learning over a wireless network with fsk-based majority vote,” in 2021 4th International Conference on Advanced Communication Technologies and Networking (CommNet), pp. 1–9, 2021.
[7] A. P ́erez-Neira, M. Martinez-Gost, A.  ̧Sahin, S. Razavikia, C. Fischione, and K. Huang, “Waveforms for computing over the air: A groundbreaking approach that redefines data aggregation,” IEEE Signal Process. Mag., 2024. [8] S. Razavikia, J. M. B. Da Silva Jr, and C. Fischione, “ChannelComp: A general method for computation by communications,” IEEE Trans. Commun., vol. 72, no. 2, pp. 692–706, 2024. [9] X. Yan, S. Razavikia, and C. Fischione, “ReMAC: Digital multiple access computing by repeat-
ed transmissions,” IEEE Trans. Commun., vol. 73, no. 10, pp. 8965–8979, 2025. [10] J. Liu, Y. Gong, and K. Huang, “Digital over-the-air computation: Achieving high reliability via bit-slicing,” IEEE Trans. Wireless Commun., vol. 24, no. 5, pp. 4101–4114, 2025. [11] X. Yan, S. Razavikia, and C. Fischione, “Multi-symbol digital aircomp via modulation design and power adaptation,” arXiv preprint arXiv:2507.08670, 2025.
[12] H. Guo, Y. Zhu, H. Ma, V. K. Lau, K. Huang, X. Li, H. Nong, and M. Zhou, “Over-the-air aggregation for federated learning: Waveform superposition and prototype validation,” J. Commun. Inf. Netw., vol. 6, no. 4, pp. 429–442, 2021. [13] X. Cao, G. Zhu, J. Xu, and K. Huang, “Optimal power control for over-the-air computation,” in IEEE Global Communications Conference, pp. 1–6, 2019. [14] A. L. Yuille and A. Rangarajan, “The concave-convex procedure,” Neural computation, vol. 15, no. 4, pp. 915–9-
36, 2003. [15] F. Alizadeh and D. Goldfarb, “Second-order cone programming,” Mathematical programming, vol. 95, no. 1, pp. 3–51, 2003. [16] D. Bertsimas and J. Tsitsiklis, “Simulated annealing,” Statistical science, vol. 8, no. 1, pp. 10–15, 1993. [17] B. K. Sriperumbudur and G. R. Lanckriet, “On the convergence of the concave-convex procedure.,” in Nips, vol. 9, pp. 1759–1767, 2009.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:43.561Z
- **Text Length:** 30142 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 6 of 6
