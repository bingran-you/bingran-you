# PDF Document: Chen et al. - 2025 - Phase-Aware Code-Aided EM Algorithm for Blind Channel Estimation in PSK-Modulated OFDM.pdf

**File Path:** Chen et al. - 2025 - Phase-Aware Code-Aided EM Algorithm for Blind Channel Estimation in PSK-Modulated OFDM.pdf

**Processed Date:** 2026-02-10T18:17:14.283Z

**File Size:** 470.70 KB

**Total Pages:** 6

**Extracted Pages:** 6

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3772

**Title:** Phase-Aware Code-Aided EM Algorithm for Blind Channel Estimation in PSK-Modulated OFDM

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Phase-Aware Code-Aided EM Algorithm for Blind
Channel Estimation in PSK-Modulated OFDM
Chin-Hung Chen⋆, Ivana Nikoloska⋆ , Wim van Houtum⋆‡, Yan Wu‡, and Alex Alvarado⋆
⋆Information and Communication Theory Lab, Eindhoven University of Technology, The Netherlands ‡NXP Semiconductors, Eindhoven, The Netherlands c.h.chen@tue.nl
Abstract—This paper presents a fully blind phase-aware expectation–maximization (EM) algorithm for OFDM systems with the phase-shift keying (PSK) modulation. We address the wellknown local maximum problem of the EM algorithm for blind channel estimation. This is primarily caused by the unknown phase ambiguity in the channel estimates, which conventional blind EM estimators cannot resolve. To overcome this limitation, we propose to exploit the extrinsic information from the decoder as model evidenc-
e metrics. A finite set of candidate models is generated based on the inherent symmetries of PSK modulation, and the decoder selects the most likely candidate model. Simulation results demonstrate that, when combined with a simple convolutional code, the phase-aware EM algorithm reliably resolves phase ambiguity during the initialization stage and reduces the local convergence rate from 80% to nearly 0% in frequency-selective channels with a constant phase ambiguity. The algorithm is invoked only -
once after the EM initialization stage, resulting in negligible additional complexity during subsequent turbo iterations.
Index Terms—Blind channel estimation, expectation maximization, extrinsic information, initialization, model evidence, phase ambiguity, OFDM, turbo equalization.
I. INTRODUCTION
Robust channel estimation in frequency-selective fading environments is a fundamental requirement to achieve reliable wireless communication. For systems that do not use pilot symbols, blind estimation techniques are required, for which the expectation-maximization (EM) algorithm has become a widely used unsupervised method to obtain maximumlikelihood estimates, demonstrating strong performance in single-carrier systems [1]–[3]. To further enhance EM-based blind estimators, code-aided schemes that-
 leverage extrinsic information from forward error correction (FEC) decoders have been proposed, demonstrating great performance improvements [4]–[9]. However, EM-based algorithms are well known to be susceptible to initial conditions and often converge to a local maximum with poor initialization [10], [11]. The primary causes of convergence to undesirable local solutions in EM algorithms for single-carrier systems are the inherent shift and phase ambiguities, which arise from the convolutional in-
variance of the inter-symbol interference (ISI) channel and the constellation symmetry of the transmitted symbols, respectively. [5], [11], [12]. In such cases, unreliable initial statistics can mislead the E-step of the EM algorithm, especially during the early iterations. To improve initialization, advanced methods such as semi-blind (data-aided) EM [13][15] and deep learning-aided EM [16] have been proposed
to improve robustness against poor initialization. Despite their effectiveness, these approaches typically rely on pilot symbols or data-driven training, which is not compatible with a fully blind framework. Blind detection strategies based on differential PSK, which are not sensitive to a common phase ambiguity, have been proposed [17]–[19], but an effective blind phase detection method based on the EM algorithm for non-differential PSK remains an open challenge. In [11], we proposed a joint shif-
t and phase ambiguity detection algorithm for single-carrier systems by exploiting the decoder output. The key idea is to restructure the extrinsic likelihood function of the EM-based estimator–equalizer such that the decoder outputs a finite set of model evidences that serve as metrics for model selection. Ambiguities are then resolved by selecting the candidate with maximum model evidence. Although effective, this approach suffers from exponentially increasing computational complexity as the cha-
nnel memory grows, leading to performance degradation as the number of candidate models required for joint ambiguity resolution increases. Orthogonal frequency-division multiplexing (OFDM) provides a natural framework for combating frequency-selective fading by converting the linear convolution of the ISI channel into an element-wise multiplication in the frequency domain. This property simplifies equalization to a scalar operation per subcarrier, reducing the computational burden of EM since the -
hidden channel variables decouple across subcarriers. Consequently, EM-based estimation in OFDM systems has attracted significant attention [20]–[24]. However, phase ambiguity remains a major limiting factor for pilot-free blind EM algorithms in OFDM systems This paper extends the blind ambiguity detection principle of [11] to PSK-modulated OFDM systems. Leveraging the structure of OFDM, the EM algorithm decomposes into independent subcarrier-wise operations, substantially reducing E-step complexi-
ty. Moreover, the shift ambiguity is effectively resolved as the ISI channel is reduced to a single tap per subcarrier. An EM update rule tailored for OFDM is formulated, and phase ambiguity resolution is incorporated through a model-evidence-driven detector supported by decoder extrinsic information. This integrated design provides a low-complexity approach to mitigating blind estimation phase ambiguity. Simulation results demonstrate that the refined initialization strategy substantially improve-
s robustness and significantly reduces convergence to suboptimal local solu
arXiv:2511.21340v1 [eess.SP] 26 Nov 2025

tions, thereby enhancing the overall reliability of fully blind EM-based channel estimation in OFDM systems. The remainder of this paper is organized as follows: Sec. II presents the transmission format. Sec. III outlines the conventional EM algorithm design and the proposed phase-aware EM algorithm design. Sec. IV presents the simulation results, and finally, Sec. V concludes this paper.
II. OFDM TRANSMISSION MODEL
The notation convention used in this paper is defined as follows. Time-domain quantities are written in lowercase letters, while frequency-domain quantities are written in uppercase letters. Scalars denote individual entries (e.g., xk and Xm). Vectors are denoted by bold italic letters. For example, a time-domain vector from index 1 to K is written as x1K = [x1, x2, . . . , xK ]T, and a vector extracted from the m-th row and n-th column of a matrix is denoted by Xm and X(n), respectively. Matrices-
 are denoted by bold uppercase letters (e.g., X), with Xm,n representing the (m, n)-th entry. The transpose, Hermitian transpose, and complex conjugate are denoted by (·)T, (·)H, and (·)∗, respectively. We denote the circularly symmetric complex Gaussian distribution with mean μ and variance σ2 as CN (μ, σ2), and its probability density function (pdf) evaluated at sample xt by CN (xt; μ, σ2). The transmission setup is shown in Fig. 1. The information bit sequence b1KR is first processed by an FEC -
encoder that
produces the encoded bit sequence c1K .1 Here, R represents the coding rate and K is the total length of the codeword per transmission frame. A bit-level interleaver (Π) is used to permute the FEC encoder output, where the interleaved coded bit sequence is represented as d1K . Then, a PSK symbol
mapper maps the binary coded bits to the sequence X1T where
Xt ∈ X = {si = ej2πi/C | i = 0, 1, . . . , C − 1} (1)
with C = |X | represents the PSK symbol cardinality. In an OFDM system, the symbol information is encoded in the subcarriers. Let M be the number of subcarriers and N the number of OFDM symbols. The 1D PSK symbol vector X1T is reshaped to a 2D matrix X ∈ CM×N with row m represent the m-th subcarrier and column n denotes the nth OFDM symbol. The OFDM modulator then performs the inverse discrete Fourier transform (IDFT) to generate the time domain OFDM symbols via x = FH X, where FH is the M point I-
DFT matrix. We then append Ncp cyclic prefix samples in front of each OFDM symbol to prevent ISI. Finally, the appended 2D time domain matrix is converted back to a 1D
vector xM(Ncp+N)
1 for transmission. We consider a frequency-selective channel where the inputoutput relationship can be expressed as
yt =
L−1
X
l=0
hlxt−l + wt,
where hl is the time-domain channel coefficient. We assume the noise realizations wt ∼ CN (0, σ2w) to follow a complex
Gaussian distribution with zero mean and variance σ2w. During
1A simple convolutional code is used in this work for illustrative purposes; however, the proposed methodology can be generalized to other FEC schemes.
OFDM demodulation, the cyclic prefix of each OFDM symbol is first removed. The 1D received signal is then reshaped into a 2D matrix y ∈ CM×N , which is followed by the DFT
Y = Fy = H ⊙ X + W, (2)
where ⊙ denotes element-wise multiplication, W is the transformed AWGN matrix with entries Wm,n ∼ CN (0, σ2w), and H denotes the channel frequency response matrix, which can be decomposed as
Hm,n = |Hm,n| ejφm,n , (3)
where |Hm,n| and φm,n denote the channel gain and phase respectively. Under the assumption of a frame-wise timeinvariant channel, this simplifies to Hm = |Hm|ejφm .
III. EM-BASED ESTIMATION IN OFDM
A. Conventional EM
The conventional EM algorithm is well established in the literature [25, Ch. 9], [26], and its extension to OFDMbased channel estimation is presented clearly in [22]. For completeness, we briefly summarize the main steps of the EM algorithm for the OFDM system below. In the context of OFDM, the unknown parameters are the per-subcarrier channel coefficients Hm, and the hidden variables correspond to the transmitted symbols in Xm,n with realization si ∈ X defined in (1). In OFDM systems, the estimat-
ion problem decomposes into independent subcarrier-wise updates where Hm is estimated through Ym = (Ym,1, Ym,2, · · · , Ym,N ). This significantly reduces computational complexity compared to single-carrier systems with the same number of observations M N . The EM algorithm iteratively alternates between two steps: (i) the expectation (E-step), which computes the posterior distribution of the hidden variables given the current parameter estimates Hˆ (p)
m
as p(Xm | Ym, Hˆ (p)
m ) with the superscript (p) denoting the p-th EM iteration, and (ii) the maximization (M-step), which updates the parameters by maximizing the expected completedata log-likelihood
Q(Hm | Hˆ (p)
m ) ≜ EXm|Ym, Hˆ (p)
m log p(Ym, Xm | Hm). (4)
1) E-step: posterior distribution inference: Given the channel model in (2), the likelihood function per subcarrier can be written as
p(Ym | Xm, Hˆ (p)
m )=
N
Y
n=1
CN (Ym,n; Hˆ (p)
m Xm,n, σ2
w ),
The posterior probability that the transmitted symbol is equal to si ∈ X given the current channel estimate Hˆ (p)
m is
p(p)
pos (Xm,n = si) ≜ p(Xm,n = si | Ym,n, Hˆ (p)
m)
= ppri(Xm,n = si) · CN (Ym,n; Hˆ (p)
m si, σ2w)
PC
j=1 ppri(Xm,n = sj ) · CN (Ym,n; Hˆ (p)
m sj , σ2w)
, (5)
where we define ppri(Xm,n) as the prior information on Xm,n and ppos(Xm,n) as the posterior probabilities, which also serve as soft weights in the subsequent M-step.

FEC enc
bΠ
cM
d OFDM mod
X
ch
x OFDM demod
y EM est
Y
M−1
pI
ext (X )
Π−1
pI
ext(d) FEC
dec
pI
ext(c) bˆ
Π
pO
ext (c) M
pO
pO ext(d)
ext (X )
Transmitter Receiver
Fig. 1: System block diagram of a coded bit-interleaved PSK mapper with OFDM modulation on the transmitter side. The conventional receiver includes an OFDM demodulator, an EM estimator, and a turbo decoding module.
2) M-step: maximum likelihood parameter estimation: Given the posterior symbol probabilities calculated at the (p)th iteration in (5), the expected log-likelihood (4) reduces to a weighted least-squares problem. The update for the channel coefficient at subcarrier m is obtained as [22]
H ̃ (p+1)
m=
PN n=1
PC
i=1 p(p)
pos (Xm,n = si) · (Ym,ns∗
i)
PN n=1
PC
i=1 p(p)
pos (Xm,n = si) · (|si|2)
. (6)
This corresponds to the weighted least-squares estimate of Hm using the soft symbol assignments. Collecting all subcarrier-wise estimates, the channel frequency response vector H ̃ (p+1) can be transformed into the time-domain impulse response by an IDFT
 ̃h(p+1) = FH H ̃ (p+1) (7)
. After truncating to the assumed channel length L with
ˆh(p+1) =  ̃h(p+1)
1 ,  ̃h(p+1)
2 , . . . ,  ̃h(p+1)
L , 0, . . . , 0
| {z }
M −L
⊤,
the channel coefficients ˆh(p+1) are then mapped back to the frequency domain via DFT
Hˆ (p+1) = Fˆh(p+1). (8)
This refinement is presented in [22] which imposes a finite impulse response of length L, thereby suppressing estimation noise. The EM iterations are repeated until convergence or until the maximum number of iterations is reached.
B. Code-Aided EM
The code-aided EM algorithm makes use of the extrinsic information from the decoder further to enhance the estimation performance for each turbo iteration [4]–[9]. The extrinsic information refers to the information provided by one decoder (equalizer) about a specific bit (symbol), excluding the information used to derive it directly. Based on the soft posterior probability ppos(Xm,n) obtained from (5) with the estimates Hˆm, we first compute the extrinsic information as
pI
ext(Xm,n) ≜ ppos(Xm,n)/ppri(Xm,n), (9)
where we set ppri(Xm,n) = 1/C with equally prior in the first turbo iteration. Note that in this study, we use pI
ext(·)
and pO
ext(·) to denote the extrinsic information generated from the inner code (i.e., the PSK demodulator) and outer code (i.e., the FEC decoder), respectively. After symbol-to-bit demapping pI
ext(dk) = M−1 pI
ext(Xm,n) and de-interleaving
pI
ext(ck) = Π−1 pI
ext(dk) , The extrinsic information on the
EM est
M−1
M−1
M−1
M−1
peIxt (X ⟳ 0)
peIxt (X ⟳ 1)
peIxt (X ⟳ 2)
peIxt (X ⟳ 3)
Π−1
Π−1
Π−1
Π−1
peIxt(d ⟳ 0)
peIxt(d ⟳ 1)
peIxt(d ⟳ 2)
peIxt(d ⟳ 3)
FEC dec
FEC dec
FEC dec
FEC dec
peIxt(c ⟳ 0)
peIxt(c ⟳ 1)
peIxt(c ⟳ 2)
peIxt(c ⟳ 3)
l = argmaxl [p(Y| ⟳ l)]
p(Y| ⟳ 0)
p(Y| ⟳ 1)
p(Y| ⟳ 2)
p(Y| ⟳ 3)
φˆ = 2πl/C
Fig. 2: Block diagram of the phase-aware code-aided EM algorithm design for a QPSK-modulated OFDM system.
coded bits is then fed to the MAP decoder to generate the posterior probability on the coded bit as
ppos(ck) ≜ p(ck | Ym) = F pI
ext(cK
1 ), ppri(bKR
1 ) , (10)
where F represents the MAP decoder function that takes likelihood pI
ext(c1K ) and prior ppri(b1KR) input sequences. The detailed derivation of F for a convolutional decoder is provided in [7], [11]. This extrinsic information from the decoder can then be obtained by dividing ppos(ck) by the incoming extrinsic information from the symbol demodulator as
pO
ext(ck) = ppos(ck)/pI
ext (ck ).
After bit interleaving pO
ext(dk) = Π pO
ext(ck) , the extrinsic prior information is derived via a bit-to-symbol mapping
pO
ext(Xm,n) = M pO
ext(dk) . (11)
Finally, (11) is fed back to the EM estimator to replace ppri(Xm,n) on the right-hand side of (5) in the next turbo iteration. Note that we refer to the turbo iteration as the entire joint estimation and turbo equalization loop, while the EM iteration refers to the optimization within the EM estimator.
C. Phase-Aware Code-Aided EM
In a symmetric constellation like PSK in (1), C possible phase shifts result in the same constellation shape, leading to phase ambiguity. Consequently, EM-based blind estimators cannot effectively address these ambiguities. In [11], an ambiguity detection algorithm was proposed to address both shift and phase ambiguities in single-carrier systems. In this work, we extend and develop this technique to OFDM, where the absence of ISI inherently resolves the shift ambiguity. We therefore focus on the -
phase-aware detection adapted to the OFDM system, as summarized below.

−1.5 −1 −0.5 0 0.5 1 1.5
−1.5
−1
−0.5
0
0.5
1
1.5
Real part
Imag part
ssss0123
(a) Received Data Y
−1.5 −1 −0.5 0 0.5 1 1.5
−1.5
−1
−0.5
0
0.5
1
1.5
Real part
Imag part
ssss0123
(b) Yeq with conventional EM
−1.5 −1 −0.5 0 0.5 1 1.5
−1.5
−1
−0.5
0
0.5
1
1.5
Real part
Imag part
ssss0123
(c) Yeq with code-aided EM
−1.5 −1 −0.5 0 0.5 1 1.5
−1.5
−1
−0.5
0
0.5
1
1.5
Real part
Imag part
ssss0123
(d) Yeq with phase-aware EM
Fig. 3: One realization of constellation diagrams (crosses) of (a) the received symbols Y after the OFDM demodulation, and the equalizer outputs Yeq using channel estimates obtained from (b) the conventional EM, (c) the code-aided EM, and (d) the phase-aware EM algorithms at SNR = 20 dB. The four square markers represent the ideal symbol mapping si.
In Fig. 2, we show the schematic example of the phaseaware code-aided EM algorithm for a QPSK-modulated OFDM systems. The key to the algorithm is to utilize the decoder’s sensitivity to the symbol-to-bit mapping to detect phase ambiguity effectively without relying on the pilot data. The algorithm first permutes the order of (9) and generates C possible extrinsic symbol information as
pI
ext(Xm,n = si ⟳ l), l = {0, 1, . . . , C − 1}, (12)
where we use ⟳ to denote the circular shift operation. This information is then passed onto C parallel symbol demodulators, deinterleavers (Π−1), and convolutional decoders as described in Sec. III-B to derive ppos(ck |⟳ l) as in (10). Under the assumption of a frame-wise constant phase ambiguity, the model evidence of the entire observation matrix Y is then computed for each of the parallel processing modules as
p(Y| ⟳ l) ∝
M
Y
m=1
X
ck
ppos(ck| ⟳ l), (13)
where we determine the phase ambiguity via
φˆ = 2πl/C, l = argmax
l∈{0,1,...,C −1}
p(Y| ⟳ l) . (14)
Finally, we multiply the channel response estimated through (8) by the phase detected through (14) as Hˆ e−jφˆ to mitigate the phase ambiguity.
D. Computational Complexity
We now analyze the computational complexity of the proposed phase-aware code-aided EM receiver for OFDM systems. We concentrate on the primary complexity of the EM algorithm and the MAP decoder, using the big-O notation O(·) to examine how computation scales with the problem size. Let M N be the total number of observations per OFDM frame and NEM for the total number of EM iterations. In each EM iteration, the E-step requires evaluating C likelihoods per symbol, leading to O(M N C) while the M-ste-
p involves weighted accumulations of the same order. In addition, the
channel refinement (7)–(8) is enforced via IDFT/DFT projection, with complexity O(M log M ) via fast Fourier transform (FFT). Hence, the EM equalizer cost
O NEM(M N C + M log M ) . (15)
When a convolutional code is used as the FEC scheme, the decoder processes M N log2 C coded bits with 2Lc−1
states, yielding O M N log2 C · 2Lc−1 . Here, Lc denotes the constraint length of the convolutional code. Therefore, the overall per-turbo iteration complexity is
O NEM(M N C + M log M ) + M N log2 C · 2Lc−1 .
The proposed initialization step requires evaluating additional C − 1 phase candidates using the decoder’s model evidence compared to the conventional code-aided EM. This introduces a one-time overhead of
O (C − 1) M N log2 C · 2Lc−1 .
This cost occurs only once at the initialization stage and does not repeat in the subsequent turbo iterations. In contrast to the physics-aware EM system for singlecarrier transmission in [11], where the EM equalizer suffers from exponential trellis complexity O(NEMM N CL) due to ISI, the OFDM structure adopted here removes this exponential dependence and ensures that the complexity grows only linearly with the modulation order C, as shown in (15), while remaining independent of the channel length-
 L. Moreover, the shift ambiguity detection with complexity O L M N log2 C ·
2Lc−1 presented in [11] is no longer required in the OFDM system. Consequently, the proposed phase-aware EM scheme for OFDM achieves a substantial complexity reduction.
IV. SIMULATION RESULT
A. Simulation Setup
All simulation results are obtained from 5000 independent Monte Carlo runs. A simple rate 1/2 convolutional code with generator polynomials (5, 7)8 and constraint length Lc = 3 is applied. A random bit-interleaver of the same length as the codeword is used, and the interleaved bits

0 10 20 30 40
10−1
10−3
10−5
Initialization Stage
EM Iteration
MSE
mean median 15/85
(a) Conventional EM
0 10 20 30 40
10−1
10−3
10−5
code-aided
code-aided
code-aided
Initialization Stage
EM Iteration
MSE
(b) Code-aided EM
0 10 20 30 40
10−1
10−3
10−5
phs correction
code-aided
code-aided
code-aided
Initialization Stage
EM Iteration
MSE
(c) Phase-aware EM
Fig. 4: Mean square error of the estimated channel frequency response from (a) conventional EM, (b) code-aided EM, and (c) the phase-aware EM. Gray lines indicate individual realizations (30 out of 5000) for an SNR of 20 dB. The first 20 EM iterations are the initialization stage, where phase correction (red dotted line in (c)) is only performed at the 20th EM iteration. After initialization, extrinsic information from the decoder is incorporated every 5 EM iterations (red dashed lines in (b) and -
(c)). The mean and median of the 5000 independent simulations are represented by solid green circles and crosses, respectively, while the shaded areas indicate the 15th to 85th percentiles.
0 10 20 30 40
0
20
40
60
80
100
phs correction
code-aided
code-aided
code-aided
Initialization Stage
EM Iteration
Failure Rate (%)
0 dB 2 dB 4 dB 6 dB 12 dB
Fig. 5: Failure rate of the phase-aware EM estimator over EM iterations for SNR = 0, 2, 4, 6, and 12 dBs.
are subsequently mapped to QPSK symbols. We consider an OFDM specification with a DFT size of M = 256, a cyclic prefix size of Ncp = 8, and N = 10 OFDM symbols per transmission frame. The proposed algorithm is evaluated using frequency-selective channels with time-domain invariant channel coefficients represented as h = [0.5, 0.7, 0.5]⊤. These coefficients are chosen based on their worst-case minimum Euclidean distance at the output, as discussed in [27, Ch. 9]. To assess our phase-aware EM algori-
thm, we assume there is an unknown phase θ ∼ U(0, 2π) that adds to the timedomain channel coefficients, resulting in hejθ. We define SNR = E{|Xt|2}/σ2w, where we assume the noise variance
σ2w is perfectly known. For all algorithms, the channel frequency response is first initialized with the 2D estimates Hˆ (0) = Y X ̃ H /∥X ̃ ∥2 where  ̃X is approximated by their hard-decision estimates from the received signal Y as
X ̃m,n =
(
sign R{Ym,n} , if R{Ym,n} ≥ I{Ym,n} ,
j sign I{Ym,n} , otherwise.
During the initialization stage, the EM algorithm is first
applied for 20 EM iterations to produce the common column vector Hˆ (20) for each OFDM symbol n before entering the turbo decoding module. With the proposed phase-aware EM algorithm, Hˆ (20) is further refined by Hˆ (20)e−jφˆ to correct any potential phase ambiguities. In each turbo iteration, the EM estimator performs NEM = 5 internal EM iterations before passing the estimated likelihoods to the turbo decoding module. Namely, the extrinsic information is incorporated to refine the channel estimat-
es every 5 EM iterations. We use two metrics for evaluating our system performance: the mean square error (MSE) of the channel response estimates MSE = 1
M
PM
m=1 |Hˆ (p)
m − Hm|2 and the failure rate (FR), defined as the percentage of runs where the square error exceeds 10−1. To ensure the reliability of the detected phase and shift ambiguity, we only perform the initialization refinement if the logarithmic evidence of the selected model ln p(Y| ⟳ i) is at least 103 times larger than the rest of the models.
B. Results and Discussion
To demonstrate the efficacy of the phase-aware EM algorithm presented in this paper, we used the final estimates Hˆ (20) from conventional EM, code-aided EM, and phaseaware EM with an SNR of 20 dB to perform zero-forcing equalization Yeq = Y/Hˆ and show the constellation diagrams in Figs. 3b–3d. Compared the received data in Fig. 3a, all EM-based algorithms can recover the constellation shape. However, conventional and code-aided EM apparently converge to a local maximum where they are unaware of -
the phase ambiguity. The phase-aware EM, on the other hand, correctly rotates the received symbols to their corresponding constellation order as shown in Fig. 3d. In Figs. 4a–4c, we present the MSE of the channel estimates. As shown in Figs. 4a and 4b, the performance exhibits significant variance across iterations due to frequent divergence caused primarily by phase ambiguity. While the code-aided EM improves estimation by incorporating extrinsic information from the decoder (e.g., the MSE reduct-
ion after the 25-th iteration in Fig. 4b), realizations that have already

converged to a local maximum remain unaffected. By using the phase detection technique, realizations where EM diverges are corrected, resulting in a significant reduction in variance after phase correction at the 20-th iteration compared to both conventional and code-aided EM approaches. This improvement is evident from the smaller green-shaded area in Fig. 4c. In Fig. 5, the failure rate of our proposed phase-aware code-aided EM estimator is reported with regard to EM iterations. During the init-
ialization stage, the failure rate gradually decreased from 100% to 78%, indicating that some of the realizations are converging through EM optimization. However, the rate stabilizes after 10 iterations with marginal improvement for SNR ≥ 4 dB. This observation suggests that most realizations converge to a local maximum that the EM algorithm cannot improve further. After incorporating the code-aided phase detection algorithm, the failure rate drops from 78% to almost 0% when operating at SNR ≥ 6 d-
B. This demonstrates the robustness of the phase-aware EM for OFDM systems developed in this paper.
V. CONCLUSIONS
We presented a decoder-aided blind phase ambiguity detection strategy for OFDM systems to address the local maximum problem inherent in the EM algorithm. By incorporating decoder feedback as a model selection criterion and constructing phase candidates according to the PSK modulation format, the algorithm reliably resolves phase ambiguity. The phase-aware EM algorithm developed for OFDM systems operates independently per subcarrier and achieves a significant complexity reduction compared to its si-
ngle-carrier counterpart. Simulation results confirmed the effectiveness of the algorithm, where the local maximum rate is reduced from nearly 80% in the conventional code-aided EM algorithm to almost 0% when operating with an SNR ≥ 6 dB. Future research may extend this framework to dynamic fading environments, where rapid phase fluctuations impose additional challenges on blind initialization, as in practice, each subcarrier could carry an independent phase ambiguity value. Another promising dire-
ction is to adapt the proposed scheme to other modulation formats, such as quadrature amplitude modulation (QAM), and to evaluate it with other FEC schemes, thereby broadening its applicability across various mobile communication standards.
ACKNOWLEDGMENTS
This work was funded by the RAISE collaboration framework between Eindhoven University of Technology and NXP, including a PPS-supplement from the Dutch Ministry of Economic Affairs and Climate Policy.
REFERENCES
[1] M. Ghosh and C. L. Weber, “Maximum-likelihood blind equalization,” Optical Engineering, vol. 31, no. 6, pp. 1224–1228, June 1992. [2] G. K. Kaleh and R. Vallet, “Joint parameter estimation and symbol detection for linear or nonlinear unknown channels,” IEEE Trans. Commun., vol. 42, no. 7, pp. 2406–2413, July 1994. [3] C. Anton-Haro, J.A.R. Fonollosa, and J.R. Fonollosa, “Blind channel estimation and data detection using hidden Markov models,” IEEE Trans. on Sig. Process., vol.45, no. 1, pp. 24-
1–247, Jan. 1997.
[4] R. R. Lopes, J.R. Barry, “Exploiting error-control coding in blind channel estimation,” IEEE Global Telecommunications Conference (GLOBECOM), pp. 1317–1321, 2001. [5] J. Garcia-Frias and J. D. Villasenor, “Combined turbo detection and decoding for unknown ISI channels,” IEEE Trans. Commun., vol. 51, no. 1, pp. 79–85, Jan. 2003. [6] X. Zhao and M. Davies, “Coding-assisted blind MIMO separation and decoding,” IEEE Trans. Veh. Technol., vol. 59, no. 9, pp. 4408–4417, Nov. 2010. [7] C.-H. Chen, B.-
 Karanov, I. Nikoloska, W. van Houtum, Y. Wu, and A. Alvarado, “Modified Baum-Welch algorithm for joint blind channel estimation and turbo equalization,” International ITG Conference on Systems, Communications and Coding (SCC), pp. 1–6, 2025.
[8] H. Niu, M. Shen, J. A. Ritcey, and H. Liu, “A factor graph approach to iterative channel estimation and LDPC decoding over fading channels,” IEEE Trans. Wireless Commun., vol. 4, no. 4, pp. 1345–1350, July 2005. [9] J. H. Gunther, M. Ankapura, and T. K. Moon, “A generalized LDPC decoder for blind turbo equalization,” IEEE Trans. Signal Process., vol. 53, part 1, pp. 3847–3856, Oct. 2005. [10] M.-S. Yang, C.-Y. Lai, and C.-Y. Lin, “A robust EM clustering algorithm for Gaussian mixture models,” -
Pattern Recognition, vol. 45, pp. 39503961, Nov. 2012. [11] C.-H. Chen, I. Nikoloska, W. van Houtum, Y. Wu, and A. Alvarado, “Physics-aware initialization refinement in code-aided EM for blind channel estimation,” submitted to IEEE Signal Process. Lett., 2025. [Online]. Available: https://arxiv.org/abs/2504.11241 [12] R. R. Lopes and J. R. Barry, “Blind iterative channel identification and equalization,” IEEE International Conference on Communications (ICC), pp. 2256–2260, 2001. [13] G. Kutz and D-
. Raphaeli, “Maximum-likelihood semiblind equalization of doubly selective channels using the EM algorithm,” EURASIP J. Adv. Signal Process., July 2010.
[14] E. Nayebi and B. D. Rao, “Semi-blind channel estimation for multiuser massive MIMO systems,” IEEE Trans. Signal Process., vol. 66, no. 2, pp. 540–553, Jan. 2018. [15] Y. Yang, S. Dang, M. Wen, S. Mumtaz and M. Guizani, “Bayesian beamforming for mobile millimeter wave channel tracking in the presence of DOA uncertainty,” IEEE Trans. Commun., vol. 68, no. 12, pp. 7547–7562, Dec. 2020. [16] L. Schmid, T. Raviv, N. Shlezinger, and Laurent Schmalen, “Blind channel estimation and joint symbol detec-
tion with data-driven factor graphs,” IEEE Trans. Commun., vol. 73, no. 9, pp. 7105–7121, Sep. 2025. [17] X.-M. Chen, P. A. Hoeher, “Blind equalization with iterative joint channel and data estimation for wireless DPSK systems,” IEEE Global Telecommunications Conference (GLOBECOM), pp. 274–279, 2001. [18] S. Serbetli, “Blind channel estimation assisted coherent demodulation of DPSK modulated OFDM systems,” IEEE Global Telecommunications Conference (GLOBECOM), pp. 3019–3024, 2014.
[19] W. van Houtum and F. M. J. Willems, “Two-dimensional iterative processing for DAB receivers based on trellis-decomposition,” Journal of Electrical and Computer Engineering, Feb. 2012.
[20] H. Wymeersch, F. Simoens, H. Steendam and M. Moeneclaey, “Codeaided channel tracking for OFDM,” International Symposium on Turbo Codes & Related Topics; 6th International ITG-Conference on Source and Channel Coding, pp. 1-6, 2006.
[21] Y. Xie and C. N. Georghiades, “Two EM-type channel estimation algorithms for OFDM with transmitter diversity,” IEEE Trans. Commun., vol. 51, no. 1, pp. 106–115, Jan. 2003. [22] X. Ma, H. Kobayashi, and S. C. Schwartz, “EM-based channel estimation algorithms for OFDM,” EURASIP J. Appl. Signal Process., vol. 2004, no. 10, pp. 1460–1477, Sep. 2004. [23] D. Obradovic, C. Na, R. L. Scheiterer, and A. Szabo, “EM-based semiblind channel estimation method for MIMO-OFDM communication systems,” Neuroco-
mputing, vol. 71, pp. 2388–2398, June 2008. [24] A. Ladaycia, A. Belouchrani, K. Abed-Meraim, and A. Mokraoui, “Semi-blind MIMO-OFDM channel estimation using expectation maximisation like techniques,” IET Communications, vol. 13, pp. 34523462, Dec. 2019.
[25] C. M. Bishop, Pattern recognition and machine learning, 1st ed. New York: Springer, 2006. [26] L. R. Rabiner, “A tutorial on hidden Markov models and selected applications in speech recognition,” Proc. IEEE, vol. 77, no. 2, pp. 257–286, Feb. 1989. [27] J. Proakis, “Digital communications, 5th ed.” NewYork: McGraw-Hill, 2008.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:14.283Z
- **Text Length:** 32076 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 6 of 6
