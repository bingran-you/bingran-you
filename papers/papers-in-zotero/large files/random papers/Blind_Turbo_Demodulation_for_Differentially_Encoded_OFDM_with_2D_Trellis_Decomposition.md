# PDF Document: Chen et al. - 2025 - Blind Turbo Demodulation for Differentially Encoded OFDM with 2D Trellis Decomposition.pdf

**File Path:** Chen et al. - 2025 - Blind Turbo Demodulation for Differentially Encoded OFDM with 2D Trellis Decomposition.pdf

**Processed Date:** 2026-02-10T18:14:22.699Z

**File Size:** 381.03 KB

**Total Pages:** 6

**Extracted Pages:** 6

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3746

**Title:** Blind Turbo Demodulation for Differentially Encoded OFDM with 2D Trellis Decomposition

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Blind Turbo Demodulation for Differentially
Encoded OFDM with 2D Trellis Decomposition
Chin-Hung Chen⋆, Yan Wu‡, Wim van Houtum⋆‡, and Alex Alvarado⋆
⋆Information and Communication Theory Lab, Eindhoven University of Technology, The Netherlands ‡NXP Semiconductors, Eindhoven, The Netherlands c.h.chen@tue.nl
Abstract—Digital Audio Broadcasting (DAB)-like systems employ differentially encoded (DE) phase-shift keying (PSK) for transmission. While turbo-DE-PSK receivers offer substantial performance gains through iterative decoding by making the DE-PSK an inner code, they rely on accurate channel estimation without pilots, which is a key challenge in DAB-like scenarios. This paper develops a fully blind turbo-DE-PSK scheme that jointly estimates channel phase, channel gain, and noise variance directly fr-
om the received signal. The design leverages a two-dimensional (2D) trellis decomposition for blind phase estimation, complemented by power-based estimators for channel gain and noise variance. We provide a comprehensive system assessment across practical system parameters, including inner code length, phase quantization, and 2D block size. Simulation results show that the blind 2D turbo demodulator approaches the performance of receivers with perfect channel knowledge and remains robust under rea-
listic transmission conditions.
Index Terms—Blind channel estimation, differential modulation, trellis decomposition, turbo code, OFDM.
I. INTRODUCTION
Orthogonal frequency-division multiplexing (OFDM) has become a cornerstone modulation technique in modern communication systems due to its ability to transform a frequencyselective channel into a set of parallel flat-fading subchannels, which greatly simplifies equalization. As a result, OFDM has been widely adopted in standards such as Digital Audio Broadcasting (DAB) and wireless LANs. In OFDM systems, reliable channel estimation is crucial. For systems that employ pilots, channel estimation can-
 be performed using classical least-squares (LS) and minimum mean-square error (MMSE) estimators. (e.g., [1], [2]). Recently, advanced approaches that utilize deep neural networks [3], [4] have also been demonstrated to achieve excellent performance with data-driven methods. On the other hand, DABlike systems inherently lack pilot symbols. Such systems use a differential encoder and a two-symbol differential detection (2SDD), effectively avoiding the need for phase estimation. While simple, 2SDD s-
uffers from significant noise enhancement. Multi-symbol differential detection (MSDD) improves performance, and for many observations, its performance approaches that of ideal coherent detection [5], [6]. Although differential encoding was originally introduced for noncoherent detection, later research showed that its recursive structure can be exploited in a turbo construction, which achieves substantial gains through iterative processing [7]–[11]. While this turbo-differentially encoded (DE)-PSK
construction offers significant performance gains by making the DE-PSK an inner code, it relies on accurate blind channel estimation, which is a key challenge in DAB-like scenarios. Blind receivers with the EM algorithm can achieve nearoptimal estimation in OFDM systems (e.g., [12], [13]). However, their performance strongly depends on the quality of the initial conditions [14], and the EM iteration significantly increases system complexity. An alternative blind approach was introduced in [15], wh-
ich proposed a trellis-based decomposition for joint channel phase and PSK symbol detection. Unlike MMSE or EM methods, this approach achieves maximum aposteriori (MAP) optimality under fine phase quantization. The principle was later extended to block-fading channels with channel-gain estimation [16], and further adapted to twodimensional (2D) OFDM for DAB receivers [17]. The main contribution of this paper is the generalization of the system in [17] into a fully blind turbo-DE-PSK receiver, and -
its extensive evaluation under realistic DAB-like system settings. We reformulate the joint phase estimation and detection problem as a unified hidden Markov model (HMM) and augment it with a noise variance estimator that exploits the null tones of the signal. Robustness is assessed through comprehensive evaluations under practical time-varying channels and standard transmission formats. In particular, we examine the effects of inner code length, phase quantization resolution, and 2D block size, p-
roviding insights into the fundamental trade-offs among receiver performance, channel coherence time, bandwidth, and complexity.
II. DIFFERENTIALLY ENCODED OFDM TRANSMISSION
The notation convention used in this paper is defined as follows. Time-domain quantities are written in lowercase, while frequency-domain quantities are written in uppercase. Scalars denote individual entries (e.g., xk and Xm). Vectors are denoted by bold italic letters. For example, a time-domain vector from index 1 to K is written as x1K = [x1, x2, . . . , xK ]T, and a vector extracted from the m-th row and n-th column of a matrix is denoted by Xm and X(n). Matrices are denoted by bold uppercase-
 letters (e.g., X), with Xm,n representing the (m, n)-th entry. Calligraphic letters denote sets, and | · | indicates their cardinality (e.g., |X |). The transpose, Hermitian transpose, and complex conjugate are denoted by (·)T, (·)H, and (·)∗, respectively. The transmitter is shown with light blue blocks in Fig. 1. The information bit sequence b1KR is first processed by a con
arXiv:2511.21345v1 [eess.SP] 26 Nov 2025

conv enc
bΠ
cM
d DE mod
A OFDM mod
X
ch
x OFDM demod
y ch est
Y DE-PSK demod
Hˆ
σˆw
Π−1
pI
ext(d) conv dec
pI
ext(c) ˆb
Π
pO
pO ext(c)
ext (d)
Transmitter Receiver
Fig. 1: System block diagram of a convolutionally encoded, bit-interleaved PSK mapper with differential encoding and OFDM modulation at the transmitter side. The receiver comprises an OFDM demodulator, channel estimator, and an iterative demodulation/decoding module.
···
∅∅ ∅
... ... ...
X1,0 X1,1 X1,Ns
···
X2,0 X2,1 · · · X2,Ns
... ... ... ···
∅∅ ∅
···
... ... ...
XMa−1,0 XMa−1,1 XMa−1,Ns
...
XMa,0
... ... ···
XMa,1 XMa,Ns
... ... ... ···
∅∅ ∅
Mf subcarriers
Fig. 2: DE-PSK symbol organization before IDFT. ∅ denotes the null tones used to avoid interference.
volutional encoder that produces the coded bit sequence c1K . Here, R represents the coding rate and K is the total codeword length per transmission frame. A bit-level interleaver (Π) is used to permute the convolutional encoder output, where the interleaved coded bit sequence is represented as d1K . Then, an M -PSK symbol mapper M maps the binary coded bits to symbol sequence A1T where At ∈ X = {ej2πi/Q | i = 0, 1, . . . , Q − 1} with Q = |X | represents the cardinality of the PSK symbol space. I-
n an OFDM system, the information A1T is encoded in the active subcarriers. Let Ma be the number of active subcarriers and Ns the number of OFDM symbols. The 1D PSK symbol vector A1T is reshaped to a 2D matrix A ∈ CMa×Ns , where row m represents the m-th subcarrier and column n denotes the n-th time-domain OFDM symbol. In our system design, a differential symbol encoder modulates the incoming PSK symbols and generates the DE-PSK symbol sequence per subcarrier Xm = [Xm,0, Xm,1, · · · , Xm,Ns ] via
Xm,n = Am,n · Xm,n−1, (1)
where we define Xm,0 = 1 and Xm,n ∈ X . After mapping the DE-PSK symbols to the active subcarriers, Mn null tones (such as guard bands and DC subcarriers) are added to prevent interference, resulting in a total subcarrier size of Mf . A schematic for the 2D DE-PSK symbol construction for OFDM processing is shown in Fig. 2. The OFDM modulator then performs the inverse discrete Fourier transform (IDFT) to generate the time-domain OFDM symbols via x = FH X, where FH is the Mf -point IDFT matrix. We t-
hen append Ncp cyclic prefix symbols in front of each OFDM symbol to prevent inter-symbol interference.
Finally, the appended 2D time-domain matrix is converted back to a 1D vector xMf (Ncp+Ns+1)
1 for transmission. We consider a frequency-selective channel where the inputoutput relationship can be expressed as yt = PI−1
i=0 hi,t xt−i +
wt where hi,t denotes the time-varying channel coefficient of the i-th tap at time t. The noise realizations wt ∼ CN (0, σ2w) are modeled as circularly symmetric complex Gaussian random variables with zero mean and variance σ2w. After cyclic prefix removal, each OFDM symbol of length Mf is reshaped into a vector y(n) = [y1,n, y2,n, · · · , yMf ,n]T, where n = 0, 1, . . . , Ns denotes the block index. Applying DFT, represented abstractly by the unitary matrix, yields
Y (n) = Fy(n) = H(n) ⊙ X(n) + W (n), (2)
where ⊙ denotes element-wise multiplication, W (n) is the transformed noise vector with entries Wm,n ∼ CN (0, σ2w),
and H(n) denote the channel frequency response vector. From (2), the time-domain channel convolution simplifies to element-wise multiplication. The channel frequency response can be further expressed as
Hm,n = Gm,n ejφm,n , (3)
where Gm,n = |Hm,n| and φm,n denote the element-wise channel gain and phase, respectively.
III. OPTIMAL DE-PSK DEMODULATION AND DECODING
The turbo-DE-PSK receiver design is shown with light green blocks in Fig. 1. This section first introduces the optimal demodulation scheme under the assumption of perfect channel knowledge (3). We will outline the BCJR algorithm for MAP demodulation and its extension to an iterative inference system for coded DE-PSK modulation. In the following derivation, the mathematical expressions are identical across all subcarriers m and the operations are performed along the OFDM symbol index n. Therefore, -
we omit m for notational simplicity (e.g., we write Yn in place of Ym,n).
A. HMM and the BCJR algorithm in OFDM
An HMM is a statistical model that captures the temporal behavior of the observable process Y whose outcomes depend on the corresponding latent variables S. At any specific time, the latent variable Sn is drawn from a time-invariant finitestate set S ≜ {0, 1, · · · , |S| − 1}, where |S| is the size of the state space. The evolution of the states follows a Markov process with transition probabilities p(Sn = j | Sn−1 = i),

which describes the probability of moving from state i at OFDM time index n − 1 to state j at time instants n. The relationship between the latent state and the observation is described by the observation likelihood p(Yn | Sn = j), which indicates the probability of an observation being generated from state j at OFDM time index n. The Markovian structure of an HMM enables the efficient detection of hidden states through the well-known BCJR algorithm [18]. Specifically, the inference problem aims -
at calculating the posterior belief of a latent state Sn at a specific instance given the sequence of observations on a specific subcarrier Y Ns
0.
p(Sn | Y Ns
0 ) ∝ p(Sn, Y Ns
0 )=
X
Sn−1 ∈S
p(Sn, Sn−1, Y Ns
0 ),
where the joint probability on the right-hand side can be further factorized as
p(Sn,Sn−1, Y Ns
0 ) = α(Sn−1) · γ(Sn−1, Sn) · β(Sn). (4)
Here, α, β, and γ denote the forward recursion, backward recursion, and the branch metric, respectively, which can be further derived as
α(Sn) = P
Sn−1∈S γ(Sn, Sn−1) · α(Sn−1), (5)
β(Sn−1) = P
Sn∈S β(Sn) · γ(Sn, Sn−1), (6)
γ(Sn−1, Sn) = p(Yn|Sn) · p(Sn|Sn−1). (7)
The full derivation of the BCJR algorithm can be found in [18], and its variant for MAP-based turbo-DE-PSK demodulation and decoding is detailed in [11].
B. MAP DE-PSK Demodulator
To design the MAP demodulator for DE-PSK symbols, we first define the latent state as
Sn ≜ f (Xn ∈ X ) ∈ S ≜ {0, 1, . . . , Q − 1},
where f (·) is a mapping function that maps each input symbol to a unique discrete latent state. As the state realization Sn is uniquely determined by the DE-PSK symbol Xn, the state transition is driven by the PSK-modulated symbol An, which captures the structure imposed by the differential encoder in (1). This relation is expressed through the state-transition probability
p(Sn | Sn−1) = p(An), An : Sn−1 → Sn, (8)
where An : Sn−1 → Sn indicates that the transition from Sn−1 to Sn is driven by the PSK symbol An. In Fig. 3a, we show the trellis construction for an ideal DE quadrature PSK (QPSK) demodulator with the colored connections indicating the state transitions driven by specific trellis input An. The observation likelihood given the knowledge of the channel response can be written as
p(Yn | Sn, Hn) = 1
πσ2w
exp − |Yn − HnXn|2
σ2w
. (9)
We can now rewrite (7) and express the trellis branch metric for the DE-PSK symbol demodulator based on (8) and (9) as
γ(Sn, Sn−1) ≜ p(Yn | Sn, Hn) · p(An), An : Sn−1 → Sn. (10)
The joint probability of the transmitted PSK symbol is then obtained by
p(An, Y Ns
0 )=P
An:Sn−1→Sn p(Sn, Sn−1, Y Ns
0 ),
where the joint probability p(Sn, Sn−1, Y Ns
0 ) is obtained via (4)–(6). Note that, under an ideal coherent demodulation scenario, the trellis is assumed to start in a known initial state S0 = 0 and terminate uniformly across Q possible states. We therefore set the initialization value as α(S0) = δS0,0 and β(SNs ) = 1/Q with δi,j denotes the Kronecker delta.
C. Iterative Demodulation and Decoding
As shown in Fig. 1, after DE-PSK demodulation, the soft symbol information is first converted to bit information via
p(dk, Y Ns
0 ) = M−1[p(An, Y Ns
0 )], (11)
where M−1 denotes the inverse symbol mapping function that converts the PSK symbol probability back to the corresponding coded bit probability. Then, the extrinsic bit information from the demodulator can be computed via pI
ext(dk) ≜ p(dk, Y Ns
0 )/pO
ext(dk). Here, pI
ext(·) and pO
ext(·) denote the extrinsic information from the inner code (DEPSK demodulation) and outer code (convolutional decoder), respectively. After performing the bit-deinterleaving, we can derive the extrinsic likelihood information of the coded bits as
pI
ext(ck) = Π−1 pI
ext(dk) . (12)
The convolutional decoder employs (12) and applies (4)(7) to compute the joint probabilities of the information bits p(bk, Y Ns
0 ) and the coded bit p(ck, Y Ns
0 ). As the decoder is not the main focus of this work, we will omit the detailed derivations here. Interested readers may refer to [11] for a comprehensive derivation. To compute the extrinsic prior information produced by the convolutional decoder, we divide the joint probability p(ck, Y Ns
0 ) by the extrinsic
information of the likelihood from the demodulator pI
ext (ck )
as pO
ext(ck) ≜ p(ck, Y Ns
0 )/pI
ext(ck). After the bit interleaver
pO
ext(dk) = Π pO
ext(ck) , we can derive the extrinsic prior information of the PSK symbol via bit-to-symbol mapping pO
ext(An) = M[pO
ext(dk)] which is then fed back as the prior information in (10) of the DE-PSK symbol demodulator for the next turbo iteration.
IV. JOINT BLIND CHANNEL ESTIMATION AND SYMBOL
DEMODULATION
In a blind OFDM system, the receiver lacks knowledge of the channel’s phase and gain. Consequently, the optimal coherent demodulator that assumes a known phase (i.e., a MAP symbol demodulator on a trellis with Q states) cannot be

0123
0123
Sn−1
Sn
ej0 ej π
2 ejπ ej 3π
2
(a) Optimal DE-QPSK demodulator
0 1 · · · 8 9 · · · 16 17 · · · 24 25 · · ·
0 1 · · · 8 9 · · · 16 17 · · · 24 25 · · ·
S ̃n−1
S ̃n
ej0 ej π
16 ej π
2 ej 9π
16 jπ ej 17π
16 ej 3π
2 ej 25π
16
Trellis Input ej0
ej π
2 ejπ
ej 3π
2
(b) Joint phase and DE-QPSK demodulator
Fig. 3: Trellis constructions for the (a) optimal DQPSK symbol demodulator and the (b) joint channel phase and DQPSK symbol demodulator with L = 32.
used directly. In this section, we reformulate the trellis decomposition method proposed in [15]–[17] that jointly estimates the channel phase and detects the transmitted symbols. To estimate the channel gain, we utilize the power-averaged method proposed in [16], and we extend this method to estimate noise variance as well by utilizing null tone symbols. This approach ultimately enables the development of a completely blind OFDM coherent receiver.
A. Joint Phase Estimation and Symbol Demodulation
To tackle the unknown channel phase, the unknown phase is discretized [15] into L equispaced hypotheses φ ̃ ∈ {2πl/L, l = 0, 1, · · · , L−1}, where L is an integer multiple of Q. These hypotheses are then embedded into the trellis, under the assumption that the channel phase is frame-wise invariant. The resulting MAP detection operates jointly on information symbols and phase states, effectively tracking the phase as part of the state evolution. We now define the latent state for our decomposed tr-
ellis as
S ̃n ≜ f (Xnejφ = ejφ ̃) ∈ S ̃ ≜ {0, 1, . . . , L − 1},
where the state transition probability
p(S ̃n | S ̃n−1) = p(An), An : S ̃n−1 → S ̃n, (13)
and the channel likelihood
p(Yn | S ̃n) = 1
πσ2w
exp − |Yn − Gnejφ ̃|2
σ2w
!
(14)
are defined based on the state S ̃n of the decomposed trellis. Compared to (9), we now incorporate both the discretized channel phase and the transmitted DE-PSK symbol into specific states. This extended trellis for joint phase and PSK symbol demodulation is shown in Fig. 3b. Given (13) and (14), the branch metric of the decomposed trellis can be defined as
γ(S ̃n, S ̃n−1) ≜ p(Yn | S ̃n) · p(An), An : S ̃n−1 → S ̃n.
Following a process analogous to (4)–(6), we can derive the joint state pair probability p(S ̃n, S ̃n−1, Y Ns
0 ) and obtain the joint symbol probability via marginalization
p(An, Y Ns
0 )=P
An:S ̃n−1→S ̃n p(S ̃n, S ̃n−1, Y Ns
0 ). (15)
In the blind scenario, the first reference symbol is unknown. Therefore, the trellis is initialized with α(S ̃0) = p(Y0|S ̃0) and
β(S ̃Ns ) = 1/L.
Y1,0 Y1,1 Y1,Ns
···
Y2,0 Y2,1 · · · Y2,Ns
···
... ... ...
YMa−1,0 YMa−1,1 YMa−1,Ns
...
YMa,0
... ... ···
YMa,1 YMa,Ns
Ma subcarriers
N
M
Fig. 4: Received signal after DFT, null tone removal, and cyclic prefix removal. The red rectangular box indicates the 2D blocks used for channel estimation and demodulation.
B. 2D Trellis Decomposition
A closer look at the trellis in Fig. 3b shows that it decomposes into L/Q mutually disconnected sections (sub-trellises) of size Q (e.g., solid and dotted connecting lines in Fig. 3b) as identified in [16], [17]. These sub-trellises capture the channel-phase hypotheses and enable a natural factorization of the detection metric into (i) a phase-estimation component that selects among the phase hypotheses, and (ii) a symboldemodulation component that performs MAP detection within the chosen phase su-
b-trellis. To formalize this decomposition, [17] introduce a hidden sub-trellis index τ ∈ T ≜ {0, 1, . . . , L/Q − 1}. Each τ corresponds to a sub-trellis consisting of a subset of states from S ̃, defined as
S ̃τ ≜
n
l l = τ +pL
Q , p = 0, 1, . . . , Q − 1
o
⊆ S ̃. (16)
The overall state space is covered by S ̃ = S
τ∈T S ̃τ , with each
S ̃τ forming one independent sub-trellis. Using this partition, (15) can be rewritten as [17, Eq. (37)]
p(An, Y Ns
0 )∝
X
τ ∈T
p(τ | Y Ns
0 ) · p(An | Y Ns
0 , τ ). (17)
This expression highlights the factorization: phase estimation corresponds to selecting the correct sub-trellis (first term), while symbol demodulation is performed within the chosen τ (second term). In DAB-like transmission, the length of the OFDM symbol Ns is often limited, which negatively affects the performance of phase estimation. Furthermore, when the receiver operates under a rapidly changing channel, the coherence time restricts the number of available OFDM symbols for phase estimation.

Therefore, to further improve phase recovery, we exploit the adjacent subcarriers with length M and extend the trellis along the frequency dimension. We can now rewrite (17) with 2D trellis extension as
p(Am,n, Y1, Y2, · · · , YM )
∝
X
τ ∈T
p(τ | Y1, Y2, · · · , YM ) · p(Am,n | Ym, τ ), (18)
with Ym = (Ym,0, Ym,1, · · · , Ym,N ) denoting the received sequence used per subcarrier. In (18), the first term on the right-hand side carries out phase estimation on the extended trellis, whereas the second term is identical to (17) because the PSK information is encoded independently per subcarrier. Moreover, the temporal span changes from Ns in (17) to N in (18), where N denotes the number of OFDM symbols within the channel’s coherence time. Following [17], the resulting M × N time–frequency -
block is depicted in Fig. 4.
C. Gain and Variance Estimation
Using the 2D block defined in Sec. IV-B, we implement a channel gain estimator based on 2D blocks, which relies on the received signal power, similar to the method described in [16], [17] as
Gˆ = E |Ym,n|2 − σˆ2
w, (19)
where m = 1, 2, · · · , M and n = 0, 1, · · · , N − 1 are the indices for the 2D estimation block. The variance in (19) is estimated blindly from the null tones in Fig. 2. Let Y∅ denote the set of received null tones within one transmission frame. The noise variance is then estimated as
σˆ2
w= 1
|Y∅|
X
Ym,n ∈Y∅
|Ym,n|2. (20)
V. NUMERICAL SIMULATIONS
All simulation results are obtained from 1000 independent Monte Carlo runs. A rate 1/2 convolutional code with generator polynomials (133, 171)8 is applied. A random bitinterleaver of the same length as the codeword is used, and the interleaved bits are subsequently mapped to QPSK symbols, which are then processed by a differential encoder. We consider the DAB Mode I OFDM [19] format with a DFT size Mf = 2048. The active subcarriers Ma = 1536 follow the baseband index selection
n
k : Mf
8 + 1 ≤ k ≤ Mf
2
o
∪
n
k : Mf
2 + 2 ≤ k ≤ 7Mf
8 +1
o
,
which corresponds to nulled DC and left/right guard bands. The maximum number of OFDM symbols per transmission frame is Ns = 19, where each symbol is preceded by a cyclic prefix of length Ncp = 504. Time interleaving is applied across 16 consecutive transmission frames, which results in an interleaver depth (total codeword length) NT = 16·(Ns −1)Ma log2(Q) = 16×55296. The subcarrier spacing is ∆f = 1 kHz, which yields the useful symbol duration Tu = 1/∆f = 1 ms. The cyclic prefix corresponds to a -
guard duration Tcp = Tu ·Ncp/Mf ≈ 0.246 ms, so that each OFDM symbol has a total duration Ts = Tu + Tcp ≈ 1.246 ms.
12345
10−4
10−3
10−2
10−1
2 dB 3 dB
SNR (dB)
BER
IT N = 4 N = 10 0 1 2 3
Fig. 5: BER performance over iterations (IT) of the optimal receiver design for inner code length N = 4 (dotted lines) and N = 10 (solid lines) over the AWGN channel.
1.4 1.6 1.8 2 2.2 2.4 2.6 2.8
10−4
10−3
10−2
10−1
AWGN
SNR (dB)
BER
M =1 L=4 L=8 L = 32 L = 64
L = 32 M =2 M =8 M = 16 M = 64
Fig. 6: BER performance of the joint phase estimation and demodulation design for different phase quantization levels (black solid lines) and subcarrier length M (cyan solid lines) over the AWGN channel with a block-wise constant channel phase with inner code length N = 10 and 3 iterations.
The sampling rate is fs = Mf /Tu = 2.048 MHz. Active subcarriers occupy the bandwidth BW = Ma∆f = 1536 · 1 kHz = 1.536 MHz.
We begin by evaluating the optimal iterative DE-PSK receiver described in Sec. III over the AWGN channel. For all simulations, we define the SNR = E{|Xt|2}/σ2w. In Fig. 5, the impact of inner code length (i.e., DE-QPSK symbol length N ) is shown to significantly influence the performance improvement achieved through iterative demodulation and decoding. For N = 4, the iterative gain over 3 iterations is approximately 2 dB to reach a bit error rate (BER) of 10−4, while for N = 10, the gain increases-
 to nearly 3 dB. Fig. 6 illustrates the estimation performance of the 2D blind receiver under varying phase quantization levels and subcarrier lengths in an AWGN environment with a blockinvariant channel phase. Quantization with L = 8 levels already provides a marked improvement over the baseline trellis with L = Q = 4, while additional gains saturate for L ≥ 32. Increasing the subcarrier length M further improves the phase estimation performance. We show in Fig. 6 that the blind receiver approach-
es optimal performance for M = 64. To assess the full capability of the blind receiver, we

2345678
10−4
10−3
10−2
10−1
IT0
IT3
SNR (dB)
BER
Blind N4 M1 N7 M1 N19 M1 N7 M8 N7 M128
Ideal N4 N7 N 19
Fig. 7: BER performance of the blind receiver design over the time-varying TU6 channel with different 2D M ×N block size after 3 iterations. Dotted lines indicate zero iteration, while solid lines represent the results after 3 iterations.
consider the typical urban 6 taps (TU6) channel model, commonly used to evaluate the DAB transmission. In Fig. 7, we demonstrate the performance of our fully blind turbo-DE-PSK receiver for a Doppler frequency of 10 Hz, which corresponds to a speed of 45 km/h for DAB. As a benchmark, the optimal receiver performance with full access to the channel knowledge is also presented (light blue curves). First, we evaluate the impact of the inner code length N . As expected, increasing the length from N = -
4 to N = 7 improves the performance of the blind receiver. Nevertheless, when the inner code length exceeds the channel coherence time, the fixed channel estimates become systematically biased. At high SNR, this bias dominates and the iterative process reinforces incorrect likelihoods, causing the receiver to diverge instead of improving. On the other hand, increasing the number of subcarriers M improves channel estimation and results in a better BER. However, when the number of subcarriers exceed-
s the channel coherence bandwidth, the performance of the blind receiver begins to degrade.
VI. CONCLUSIONS
We generalized and discussed the use-case scenarios and robustness of a fully blind turbo demodulation framework for DE OFDM systems that estimates channel phase, gain, and variance directly from the received signal without pilots. The receiver employs 2D trellis decomposition for joint phase estimation and symbol demodulation, while a powerbased method provides blind gain and variance estimation for the likelihood function. Simulations with DAB-like formats showed that the blind receiver closely -
approaches the performance of receivers with perfect channel knowledge. The influence of inner code length, phase quantization, and 2D block size was also quantified. Future work will focus on enhancing receiver capabilities to handle highly time-varying channels and non-Gaussian noise environments. Overall, the results indicate that blind turbo demodulation is a promising approach for next-generation pilot-free OFDM broadcast systems.
ACKNOWLEDGMENTS
This work was funded by the RAISE collaboration framework between Eindhoven University of Technology and NXP, including a PPS-supplement from the Dutch Ministry of Economic Affairs and Climate Policy.
REFERENCES
[1] J. Proakis, “Digital Communications, 3rd ed.” NewYork: McGraw-Hill, 1995. [2] S. Coleri, M. Ergen, A. Puri and A. Bahai, “Channel estimation techniques based on pilot arrangement in OFDM systems,” IEEE Trans. Broadcast., vol. 48, no. 3, pp. 223-229, Sep. 2002. [3] H. Ye, G. Y. Li and B. -H. Juang, “Power of deep learning for channel estimation and signal detection in OFDM systems,” IEEE Wirel. Commun. Lett., vol. 7, no. 1, pp. 114–117, Feb. 2018. [4] H. Ju, H. Zhang, L. Li, X. Li and B. Dong, -
“A comparative study of deep learning and iterative algorithms for joint channel estimation and signal detection in OFDM systems,” Signal Processing, vol. 223, Oct. 2024. [5] D. Divsalar and M. K. Simon, “Multiple-symbol differential detection of MPSK,” IEEE Trans. Commun., vol. 38, no. 3, pp. 300–308, Mar. 1990. [6] G. Colavolpe, “Classical coherent receivers for differentially encoded M-PSK are optimal,” IEEE Commun. Lett., vol. 8, no. 4, pp. 211–213, Apr. 2004. [7] K. R. Narayanan and G. L. Stu-
ber, “A serial concatenation approach to iterative demodulation and decoding,” IEEE Trans. Commun., vol. 47, no. 7, pp. 956–961, Jul. 1999. [8] P. Hoeher and J. Lodge, “Turbo DPSK: iterative differential PSK demodulation and channel decoding,” IEEE Trans. Commun., vol. 47, no. 6, pp. 837–843, Jun. 1999. [9] S. ten Brink, F. Sanzi and J. Speidel, “Two-dimensional iterative APP channel estimation and decoding for OFDM systems,” IEEE Global Telecommunications Conference (GLOBECOM), pp. 741–745 2000. -
[10] W. J. van Houtum and F. M. J. Willems, “Joint and iterative detection and decoding of differentially encoded COFDM systems,” International Conference on Telecommunications (ICT), pp. 36–43, 2010.
[11] C.-H. Chen, B. Karanov, W. van Houtum, Y. Wu, and A. Alvarado, “Turbo receiver design with joint detection and demapping for differentially encoded PSK in bursty impulsive noise channels,” submitted to Phys. Commun., 2024. [Online]. Available: https://arxiv.org/abs/2412. 07911 [12] X. Ma, H. Kobayashi and S.C. Schwartz, “EM-based channel estimation algorithms for OFDM,” EURASIP J. Adv. Signal Process., 2004.
[13] Y. Liu, G. Y. Li, H. Hu and Z. Tan, “MAP based iterative channel estimation for OFDM systems: approach, convergence, and performance bound,” IEEE Trans. Wirel. Commun., vol. 13, no. 1, pp. 476-485, Jan. 2014. [14] C.-H. Chen, I. Nikoloska, W. van Houtum, Y. Wu, and A. Alvarado, “Physics-aware initialization refinement in code-aided EM for blind channel estimation,” submitted to IEEE Signal Process. Lett., 2025. [Online]. Available: https://arxiv.org/abs/2504.11241 [15] M. Peleg, S. Shamai, an-
d S. Galan, “Iterative decoding for coded noncoherent MPSK communications over phase-noisy AWGN channel,” IEE Proceedings - Communications, vol. 147, no. 2, pp. 87–95, Apr. 2000. [16] R.-R. Chen, R. Koetter, U. Madhow, and D. Agrawal, “Joint noncoherent demodulation and decoding for the block fading channel: a practical framework for approaching Shannon capacity,” IEEE Trans. Commun., vol. 51, no. 10, pp. 1676-1689, Oct. 2003. [17] W. van Houtum, F. M. J. Willems, “Two-dimensional iterative proces-
sing for DAB receivers based on trellis-decomposition,” Journal of Electrical and Computer Engineering, Feb. 2012.
[18] L. R. Bahl, J. Cocke, F. Jelinek, and J. Raviv, “Optimal decoding of linear codes for minimizing symbol error rate,” IEEE Trans. Inf. Theory, vol. 20, no. 2, pp. 284–287, Mar. 1974. [19] European Standard, “Radio broadcasting systems; digital audio broadcasting (DAB) to mobile, portable and fixed receivers,” ETSI EN 300 401 V1.4.1, Jun. 2006.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:22.699Z
- **Text Length:** 30138 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 6 of 6
