# PDF Document: Senger et al. - 2025 - SIR Analysis for Affine Filter Bank Modulation.pdf

**File Path:** Senger et al. - 2025 - SIR Analysis for Affine Filter Bank Modulation.pdf

**Processed Date:** 2026-02-10T18:17:50.843Z

**File Size:** 1475.96 KB

**Total Pages:** 6

**Extracted Pages:** 6

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3262

**Title:** SIR Analysis for Affine Filter Bank Modulation

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

SIR Analysis for Affine Filter Bank Modulation
Henrique L. Senger∗, Gustavo P. Gonc ̧alves∗, Bruno S. Chang∗, Hyeon Seok Rou†, Kuranage Roche Rayan Ranasinghe†, Giuseppe Thadeu Freitas de Abreu† and Didier Le Ruyet‡
∗CPGEI/Electronics Department, Federal University of Technology - Parana ́, Curitiba, Brazil †School of Computer Science and Engineering, Constructor University, Bremen, Germany ‡CEDRIC/Conservatoire National des Arts et M ́etiers - Paris, France
Abstract—The signal-to-interference ratio (SIR) of the Affine Filter Bank Modulation (AFBM) waveform is analyzed under minimum mean square error (MMSE) equalization in two domains; namely, the affine domain and the filtered time-domain (TD). Due to the incorporation of the discrete affine Fourier transform (DAFT) and despreading/mapping, an interesting and counter-intuitive cancellation of the unwanted combination of the channel induced interference with the orthogonality approximation error is se-
en in the filtered TD, a process which does not occur in the affine domain. The direct impact on bit error rate (BER) provides a thorough validation of the proposed analysis and explains the substantial gains in performance of the filtered TD detection scheme as opposed to its affine domain equivalent.
Index Terms—Waveform design, 6G, AFBM, ISAC, AFDM, SIR.
I. INTRODUCTION
The evolution towards sixth-generation (6G) wireless networks is driven by increasingly demanding requirements that go beyond the capabilities of increasing bandwidth of current 5G systems. 6G is envisioned to support future applications that occur in challenging scenarios like vehicle-to-vehicle (V2V), vehicle-to-everything (V2X) and unmanned aerial vehicle (UAV) communications. These novel applications scenarios are characterized by severe doubly-dispersive channels with both significant Doppler-
 spread and delay spread, that expose the limitations of existing waveforms and motivate the search for innovative physical layer solutions. Affine Frequency Division Multiplexing (AFDM) [1] is a recent and promising alternative waveform, providing full diversity in doubly-dispersive channels through the use of chirp based subcarrier modulation. However, AFDM suffers from the same high peak-to-average power ratio (PAPR) and poor spectral containment of orthogonal frequency division multiplexing (O-
FDM). To address these limitations, we have proposed the Affine Filter Bank Modulation (AFBM) waveform, that integrates a pruned discrete affine Fourier transform (DAFT) precoding with an affine filterbank structure inspired by Filter Bank MultiCarrier modulation (FBMC) schemes. This approach allowed us to achieve PAPR levels comparable to DFT-s-OFDM and out-of-band emission (OOBE) suppression similar to FBMC systems [2], [3], while maintaining quasi-complex orthogonality (as is the case in pruned-
 DFT spread FBMC-based systems [4]) and allowing a deterministic shift of the diagonals in the affine domain channel response based on the path delay and Doppler shift indices like in AFDM, which is the key factor enabling the robustness of the waveform by mitigating inter-path interference, in addition
to the highly beneficial implications to Integrated Sensing and Communications (ISAC) parameter estimation. Yet a critical research question remains to be explored: what is the optimal detection domain for an AFBM receiver design. Unlike conventional AFDM, where detection is done on the discrete affine Fourier domain, AFBM’s unique structure that combines the FBMC filterbank processing with an affinedomain precoding introduces additional complexity that may turn the traditional AFDM detection non--
optimal. Time domain detection, as considered in [5]–[8], was seen to be a good option in other delay-Doppler waveforms. Inspired by this and taking into account the unique structure of the AFBM waveform, the main contribution of this work is the exploration of the effects of the detection in different domains, such as the affine and filtered-time domain, to evaluate how they affect the detection of this waveform. To do so, we will derive SIR expressions both for the AFBM waveform itself and for a-
 end-to-end scenario with the fading channel and the equalizer in different detection domains. It was found out that the inherent waveform interference cancellation properties of filtered time domain detection make it the best choice between the considered domains for detection in the AFBM waveform. The remainder of this paper is organized as follows. Section II of this paper presents the AFBM system model, including its whole modulation and demodulation chain. Section III contains the derivation -
of the SIR analysis for the proposed detection domains, giving insights on how they deal with the waveform’s inherent interference. Section IV provides simulation results validating the analytical findings in various system configurations. Finally, Section V concludes the paper and discusses implications for practical AFBM implementation.
II. SYSTEM MODEL
A. Transmit Signal Model
Let L denote the number of subcarriers and K the number of time indices in a filter bank-based multicarrier system with near complex orthogonality. To avoid inter-filter interference, half of the L subcarriers are reserved as guard bands, and transmission is carried out at twice the rate of conventional OFDM/AFDM systems, namely, every L/2 samples (see [9] for a detailed discussion on the oversampling tradeoff). The system is organized into blocks of K symbols, each with a duration of T /2 seconds-
. Within each symbol, L subcarriers are employed, spaced by F Hz. This results in a grid comprising L points in frequency, spaced by F Hz, and K points in time, spaced by T /2 seconds in the time-frequency domain. Accordingly, the total bandwidth is given by B = LF , and the total transmission interval by KT /2.
arXiv:2511.21615v1 [eess.SP] 26 Nov 2025

Let x ∈ DK L
2 ×1 denote the vector of complex transmit symbols mapped onto the defined time-frequency resources, where D represents a modulation alphabet of size |D| (e.g., quadrature amplitude modulation (QAM) constellations). The symbols in x are arranged in the first and last L/4 positions of a matrix A ∈ CL×K to avoid interference from the filter bank and maximize the signal-to-interference ratio (SIR). This mapping is expressed as
a ≜ vec(A) = Ξx ∈ CLK×1, (1)
where vec(·) denotes the column-wise vectorization operation and Ξ ∈ CLK×K L
2 is defined as
Ξ ≜ IK ⊗ Ξ ̄ , (2)
with Ξ ̄ ∈ CL× L
2 given by
 ̄Ξ ≜


IL/4 0L/4
0L/2 0L/2
0L/4 IL/4

 , (3)
where 0L denotes a zero matrix of size L. A is subsequently multiplied by a diagonal matrix in order to restore complex orthogonality, and then transformed into the DAFT domain through a pruned DAFT precoding operation. Let us define
Cf ≜ WLdiag{b ̃}, (4)
where Cf ∈ CL×L represents the precoding process responsible for restoring complex orthogonality, and WL ∈ CL×L denotes the L-point DAFT matrix, defined as
WL = Λc1,LFLΛc2,L, (5)
with
Λci,L = diag[e−j2πci(0)2 , . . . , e−j2πci(L−1)2 ] ∈ CL×L (6)
denoting an L × L diagonal chirp matrix with central digital frequency ci, and where FL denotes the normalized L-point discrete Fourier transform (DFT) matrix. 1) Pruned DAFT Precoding: Based on (1) and (4), the vectorized form of the DAFT-spread transmit signal b ∈ CLK×1, whose matrix form is denoted by B ∈ CL×K before filtering, is expressed as
b ≜ vec(B) = vec
Cf ∈ CL×L
z }| {
WLdiag(b ̃) A (7)
= IK ⊗ Cf
| {z } ≜C ∈ CLK×LK
vec(A) = Ca = CΞx,
where ⊗ denotes the Kronecker product. The output matrix QP for a given block is comprised of a IDAFT whose output is zero-padded in the frequency domain. It is obtained as
QP = FH
N TFP W ̃ H
P , (8)
where T ≜ IP,u 0P ×(N−P ) IP,u
T , with TT T = IP ,
is an N × P matrix, with IP,u ≜ IP/2 0P/2
T and
IP,l ≜ 0P/2 IP/2
T and the pruned DAFT W ̃ P ∈ CL×P is defined as
W ̃ P = IL 0L×(P −L) WP . (9)
The length P of this inverse discrete affine Fourier transform (IDAFT) at the transmitter must satisfy L < P < N , to ensure that the precoding stage (via DAFT) is not nullified by the IDAFT of the filter-bank structure, whereas P < N guarantees that the chirps are sampled at a rate lower than the Nyquist rate, thereby enabling frequency containment. The block matrix Q ∈ CNK×LK expressing the transmission of K blocks is expressed as
Q = IK ⊗ QP . (10)
2) Prototype Filter: The transmitted data are obtained by convolving the precoded signal with the prototype filter impulse response through a Toeplitz filter matrix. Let Gp ∈ RN/2×N/2 denote the diagonal matrix of filter coefficients, i.e.,
Gp = diag(gp), p = 0, 1, 2, . . . , 2O − 1 (11)
where
gp = [g[pN/2], g[pN/2 + 1], . . . , g[pN/2 + N/2 − 1]] (12)
and g represents the prototype filter of length ON , with O denoting the overlap factor. Accordingly, the block Toeplitz filter matrix G ∈ RON+(K−1)N/2×NK is defined as
G=

                              
G0 0 0 0 . . . 0 0 G1 G0 0 . . . 0 G2 0 0 G1 . . . 0 0 G3 G2 0 . . . 0
... 0 0 G3 . . . 0 ... ... ... ... . . . ...
G2O−4
... ... ... . . . 0
0 G2O−3 G2O−4
... . . . G1
G2O−2 0 0 G2O−3
... 0
0 G2O−1 G2O−2 0 . . . G3
... 0 0 G2O−1
. . . ...
... ... . . . ... . . . 0
0 0 . . . 0 . . . G2O−1

                              
. (13)
The structure of G, through the inclusion of 0N/2 matrices, ensures that the transmitted symbols are delayed from one another every N/2 samples. This representation as a sum of delayed matrices is detailed in [10]. 3) Complex Orthogonality: To preserve complex orthogonality, Cf must be chosen such that the following condition is satisfied:
CH
f QH
P
Ge T Ge QP Cf ≈ U, (14)
where U ∈ RL×L is a diagonal matrix with unit values in the first and last L/4 positions and zeros elsewhere. Here, Ge ∈ RON×N denotes the filtering matrix corresponding to the transmission of a single multicarrier symbol, expressed as
Ge =

     
G0 0N/2
0N/2 G1
G2 0N/2
... ...
0N/2 G2O−1

     
, (15)

Fig. 1: Visualization of the AFBM modulation procedure.
By substituting (4) into (14), the l ̃-th element of b ̃ is obtained as
[b ̃]l ̃ =



q1 [c ̃]l ̃
, l ̃ ∈ 0, . . . , L
4 −1 ∪ L− L
4,...,L−1
0, otherwise, (16) with
 ̃c ≜ diag{WH
LQH
P
eGT eGQP WL}. (17)
The compensation stage thus comprises a multiplicative factor that cancels the interference in the transmitted symbols introduced by the filter coefficients. Since the coefficients are derived from a pre-defined prototype filter [11], they are assumed to be known. Correct compensation is guaranteed when the interference is limited to a single coefficient, which is achieved by selecting a prototype filter overlap factor O ≤ 1.5 [10]. If the overlap factor exceeds this threshold, off-diagonal interf-
erence appears in (14), thereby reducing the achievable SIR.
4) Effective Transmit Signal: In all, the complete AFBM transmit signal in the time-domain (TD) can be expressed in terms of the precoding matrix Cf in (4), the modified IDAFT matrix QP in (8), and the filter matrix G in (13), by exploiting Kronecker product identities as
s = GQCa = G IK ⊗ QP · IK ⊗ Cf a ∈ CM×1
= G IK ⊗ QP Cf Ξx, (18)
where M ≜ ON + N
2 (K − 1).
The proposed waveform can be interpreted as a modification of AFDM, where the standard sinc-chirp subcarriers are replaced with chirp-filtered subcarriers, where the considered filter is well localized both in time and in frequency.
B. Receive Signal Model
The transmit signal vector s in (18) is propagated through a time-varying multipath channel, i.e., a doubly-dispersive channel. Consequently, the received signal r ∈ CM×1 is expressed as
r ≜ HG IK ⊗ QP Cf Ξx + n, (19)
where H ∈ CM×M denotes the doubly-dispersive channel composed of R resolvable paths. Each r-th path induces a delay τr ∈ [0, τ max] and a Doppler shift νr ∈ [−νmax, +νmax], with normalized integer delay lr ≜ ⌊ τr
Ts ⌉ ∈ N0 and normalized
Doppler fr ≜ Nνr
fs ∈ R, where fs ≜ 1
Ts denotes the sampling
frequency. The noise vector n ∈ CM×1 represents additive white Gaussian noise (AWGN) samples with variance σ2n. As described in [12], the channel matrix H is expressed as
H≜
R
X
r=1
hrZfr Πlr ∈ CM×M , (20)
where hr ∈ C denotes the complex fading coefficient of the r-th path, Z ∈ CM×M is the diagonal roots-of-unity matrix, and Π ∈ CM×M is the circular shift matrix obtained by left shifting the M × M identity matrix once [13]. The matrix Z is defined as
Z ≜ diag e−j2π 0
M , . . . , e−j2π M−1
M , (21)
and is raised to the power fr. In total, H is formed by R diagonals, with positions determined by the path delays and coefficients modulated by the Doppler shifts. The received signal is next demodulated by (GQ)H, producing a ̃ ∈ CLK×1. Considering all time slots, the detected symbols  ̃B ∈ CL×K are obtained through the IDAFT combined with the compensation stage as
B ̃ = WH
Ldiag{b ̃}A ̃ , (22)
where A ̃ = [ ̃a0;  ̃a1; . . . ;  ̃aK−1] ∈ CL×K . Since no data are transmitted in the intermediate L/2 positions of A (as detailed in 2), these are discarded at the receiver. For symmetry, the compensation stage is applied at both transmitter and receiver, but it is effective only on one side.
Concatenating all effects, the final received signal y ∈
CK L
2 ×1 in the absence of noise is expressed as
y ≜ ΞH IK ⊗ CH
f QH
P GHHG IK ⊗ QP Cf Ξx, (23)
where the effective channel matrix in the affine domain is defined as
HAFB ≜ IK ⊗ CH
f QH
P GHHG IK ⊗ QP Cf , (24)
and the filtered time domain effective channel matrix H ̄ ∈
CN K×K L
2 is given by
 ̄H = GHHG IK ⊗ QP Cf Ξ. (25)

III. SIR ANALYSIS
We recall that the AFBM waveform does not have full complex orthogonality, as seen in (14). The residual interference of the waveform can be quantified by the SIR, which is expressed as
SIRW =
LK 2
||ΞH IK ⊗ CH
f QH
P GHG IK ⊗ QP Cf Ξ||2 − LK
2
.
(26) Several parameters determine the SIR in this waveform, such as the choice of the prototype filter and the values of K, L, N and P . As seen in [4], [14], the optimum SIR values of pruned DFT precoded FBMC waveforms will be obtained with large values of L and N and a prototype filter with O ≤ 1.5, due to the inherent structure of the waveform. However, P is exclusive to the AFBM waveform - we recall that this parameter controls spectral occupation and must be smaller than N . Let us now analyz-
e the end-to-end scenario, considering the fading channel and the equalizer. In the following, we will limit ourselves to high-complexity MMSE equalization to simplify the analysis. However, the insights obtained by this analysis can be applied to the choice of detection domain using other structures, such as Gaussian belief propagation or message passing algorithms. The received signal in the affine domain after the DAFT in the receiver is
r = IK ⊗ CH
f QH
P GHHG IK ⊗ QP Cf Ξx + nAFB, (27)
whereas the estimated signal using affine-domain detection is
x ̃AFB = ΞHEAFB IK ⊗ CH
f QH
P GHHG IK ⊗ QP Cf Ξ
| {z } ∆AFB
a+
+ΞHEAFBnAFB, (28)
with ∆AFB ∈ C LK
2 × LK
2 . The affine-domain MMSE equalizer can be given by
EAFB = HH
AFBHAFB + σ2
nIK L
2
−1
HH
AFB. (29)
If detection in the filtered TD detection is considered, the received signal after filtering is
r ̄ = H ̄ x +  ̄n. (30)
whereas the estimated signal using filtered TD detection is
x ̃FTD = EFTDGHHG IK ⊗ QP Cf Ξ
| {z } ∆FTD
a + EFTDn ̄, (31)
where ∆FTD ∈ C LK
2 × LK
2 and the filtered time domain MMSE equalizer can be given by
EFTD =  ̄HH  ̄H + σ2
nIK L
2
−1 H ̄ H. (32)
The interference taking into account the channel is described by the off-diagonal elements of ∆d, with d ∈ AFD, FTD representing the chosen detection domain. The SIR conditioned on a given channel realization H can be thus calculated by
SIRH =
LK 2
||∆d||2 − LK
2
. (33)
(33) includes the combination of the channel induced interference with the orthogonality approximation error. An interesting insight appears by analyzing (28) and (31). Since the equalizer in the filtered time domain incorporates the DAFT and despreading/mapping, it is able to cancel the undesired combination of the channel induced interference with the orthogonality approximation error and improve the SIR, a process which does not happen in the affine domain detection.
IV. SIMULATION RESULTS
For the simulations, the total number of subcarriers L is 128 and the filter bank size N is 256. Each transmission was composed of K = 8 symbols, with a carrier frequency fc of 4 GHz. The channel is a doubly dispersive one, with three resolvable paths and corresponding normalized delays and digital Doppler shifts. We recall that the chirp frequencies for each (I)DAFT were chosen to uphold the orthogonality condition [13] 2(f max + ξ)(lmax + 1) + lmax ≤ P , where f max and lmax are, respectively, t-
he maximum normalized digital Doppler shift and delay of the channel and ξ ∈ N0 is a free parameter determining the so-called guard width, denoting the number of additional guard elements around the diagonals to anticipate for Doppler-domain interference. In the considered case, the channel parameters were chosen as lmax = 16 with randomly chosen integer values and f max = 2 with randomly chosen fractional values. The following values were selected for the c2 parameter - c2,L = 1
πL2 and c2,P = 1
πP 2 - with these parameters, a low PAPR is obtained in AFBM [3]. Figure 2 presents an analysis of the SIR of the AFBM waveform, according to (26). It can be seen that the SIR value is at its highest when N = P and the Hermite prototype filter with O = 1.5 is chosen. If P is reduced and the Hermite filter is replaced with the PHYDYAS one there is an improvement in spectral containment and in OOBE, as seen in [2]. However, as a consequence the SIR is reduced. As an example, with the PHYDYAS filter,-
 O = 4, L = 64, P = 96 and N = 128 the SIR is around 15 dB, which is a very low value for practical scenarios. Now taking into account the channel and the equalizer, the desired signal, together with the residual off-main diagonal interference in each position in the estimated signal in all of the transmitted blocks, can be seen in Figures 3 and 4. The corresponding SIR values were then calculated with (33). We recall that the presented interference/SIR values were averaged over 200 channel realiz-
ations. While when using affine domain detection there is significant residual off-main diagonal interference (especially in the scenarios with the PHYDYAS prototype filter), the same cannot be said with respect to the case using filtered TD detection. This is due to the filtered TD equalizer dealing the waveform interference together with the fading channel. Thus, these lower residual interference when using hybrid time domain leads to a higher overall SIR value. Providing a greater insight, Tabl-
e I presents average, maximum and minimum SIR values for the considered detection domains using the Hermite (with O = 1.5) and PHYDYAS

100 150 200 250 300 350 400 450 500 N
10
15
20
25
30
35
SIR (dB)
PHYDYAS, O = 4, P = 2L PHYDYAS, O = 4, P = 1:5L Hermite, O = 1:5, P = 2L Hermite, O = 1:5, P = 1:5L
Fig. 2: SIR of the AFBM waveform with the Hermite (O = 1.5) and PHYDYAS (O = 4) prototype filters for different values of L, P and N .
(with O = 4) filters and P = 192, 256 over all of the previously considered channel realizations. It can be seen that even the worst case when using filtered time domain detection has a ∼ 5 dB advantage with respect to the best average in the affine domain. Moreover, the minimum SIR in the worst scenario using filtered time domain detection is close than the the waveform SIR obtained in the best scenario, demonstrating the interference cancellation properties of detection in this domain. Finally, -
considering a scenario with good OOBE characteristics and spectral efficiency (P = 192, PHYDYAS prototype filter) there is a ∼ 30 dB advantage in average SIR when considering filtered time domain detection instead of the affine domain.
Table I: SIR values in dB for different detection domains for L = 128, N = 256 and the Hermite and PHYDYAS prototype filters.
Scenario Average Maximum Minimum
Affine, Hermite, P = 192 14.87 15.90 12.31 Affine, Hermite, P = 256 20.67 47.04 14.51 Affine, PHYDYAS, P = 192 12.34 13.12 10.43 Affine, PHYDYAS, P = 256 20.08 47.31 14.02 Filtered time, Hermite, P = 192 43.01 71.98 28.73 Filtered time, Hermite, P = 256 45.18 68.66 27.95 Filtered time, PHYDYAS, P = 192 42.43 58.89 28.36 Filtered time, PHYDYAS, P = 256 43.44 70.46 25.88
Finally, Figure 5 shows bit error rate (BER) results for all of the aforementioned detection domains and for different values of P . The error results validate the SIR analysis presented above, with the systems using filtered time detection having significantly better error performance (a ∼5 dB advantage even at a low BER of 10−2) and near-insensitivity to the choice of P and the prototype filter. This allows the usage of better
localized prototype filters and an increase in spectral efficiency in AFBM without the inherent waveform SIR penalty.
Fig. 5: BER of the AFBM waveform with the Hermite and PHYDYAS prototype filters for different values of L, P and N using different detection domains.
V. CONCLUSION
In this work, we have presented an SIR analysis of the AFBM for different parameters and detection domains. It was found out that the SIR of the waveform is reduced when optimizing its OOBE characteristics and spectral efficiency. This is due to the extra interference generated by the bandwidth occupation reduction and the usage of better localized filters. On the other hand, this extra interference can be dealt with a detection structure with inherent interference cancellation, such as the consid-
ered one in the filtered time domain. This allows the full potential of this waveform, with good OOBE characteristics, spectral efficiency and error performance at the same time. Future work involves the expansion of the analysis presented here to message passing detection, allowing low-complexity detection with interference cancellation. Also, the good SIR characteristics of the AFBM waveform can allow an investigation of its usage in MIMO systems, where the inherent interference is always an iss-
ue in filterbank-based systems.
REFERENCES
[1] H. S. Rou, K. R. R. Ranasinghe, V. Savaux, G. T. F. de Abreu, C. Masouros et al., “Affine frequency division multiplexing (afdm) for 6g: Properties, features, and challenges,” arXiv preprint arXiv:2507.21704, 2025. [2] H. L. Senger, G. P. Gon ̧calves, B. S. Chang, H. S. Rou, K. R. R. Ranasinghe, G. T. F. de Abreu, and D. L. Ruyet, “Affine filter bank modulation: A new waveform for high mobility communications,” 2025. [Online]. Available: https://arxiv.org/abs/2505.03589 [3] K. R. R. Ranasinghe-
, H. L. Senger, G. P. Gon ̧calves, H. S. Rou, B. S. Chang, G. T. F. de Abreu, and D. L. Ruyet, “Affine filter bank modulation (afbm): A novel 6g isac waveform with low papr and oobe,” 2025. [Online]. Available: https://arxiv.org/abs/2509.05683

[4] R. Nissel and M. Rupp, “Pruned DFT-spread FBMC: Low PAPR, low latency, high spectral efficiency,” IEEE Transactions on Communications, vol. 66, no. 10, pp. 4811–4825, 2018. [5] S. S. Das, V. Rangamgari, S. Tiwari, and S. C. Mondal, “Time domain channel estimation and equalization of cp-otfs under multiple fractional dopplers and residual synchronization errors,” IEEE Access, vol. 9, pp. 10 561–10 576, 2020. [6] H. Wen, W. Yuan, and S. Li, “Downlink otfs non-orthogonal multiple access receiver-
 design based on cross-domain detection,” in 2022 IEEE International Conference on Communications Workshops (ICC Workshops), 2022, pp. 928–933. [7] M. Liu, S. Li, B. Bai, and G. Caire, “Cross-domain otfs detection via delay–doppler decoupling: Reduced-complexity design and performance analysis,” Entropy, vol. 27, no. 10, 2025. [Online]. Available: https://www.mdpi.com/1099-4300/27/10/1062 [8] C. Shen and J. Yuan, “Time domain zero-postfix (tzp) afdm with twostage iterative mmse detection,” in ICC -
2025 - IEEE International Conference on Communications, 2025, pp. 4780–4785.
[9] K. R. Rayan Ranasinghe, Y. Ge, G. T. Freitas de Abreu, and Y. Liang Guan, “Joint channel estimation and data detection for afdm receivers with oversampling,” in 2025 International Conference on
Computing, Networking and Communications (ICNC), 2025, pp. 823828. [10] R. P. Junior, C. A. F. d. Rocha, B. S. Chang, and D. Le Ruyet, “A generalized DFT precoded filter bank system,” IEEE Wireless Communications Letters, vol. 11, no. 6, pp. 1176–1180, 2022. [11] R. P. Junior, C. A. F. da Rocha, B. S. Chang, and D. Le Ruyet, “A two-dimensional FFT precoded filter bank scheme,” IEEE Transactions on Wireless Communications, vol. 22, no. 11, pp. 8366–8377, 2023. [12] P. Raviteja, Y. Hong, E. Viterbo,-
 and E. Biglieri, “Practical pulseshaping waveforms for reduced-cyclic-prefix otfs,” IEEE Transactions on Vehicular Technology, vol. 68, no. 1, pp. 957–961, 2018. [13] H. S. Rou, G. T. F. de Abreu, J. Choi, D. Gonz ́alez G., M. Kountouris, Y. L. Guan, and O. Gonsa, “From orthogonal time–frequency space to affine frequency-division multiplexing: A comparative study of nextgeneration waveforms for integrated sensing and communications in doubly dispersive channels,” IEEE Signal Process. Mag., vol. 4-
1, no. 5, pp. 71–86, 2024. [14] R. P. Junior, C. A. F. d. Rocha, B. S. Chang, and D. Le Ruyet, “A novel DFT precoded filter bank system with iterative equalization,” IEEE Wireless Communications Letters, vol. 10, no. 3, pp. 478–482, 2021.
100 200 300 400 500
50 100 150 200 250 300 350 400 450
500 -90
-80
-70
-60
-50
-40
-30
-20
-10
0
(a) P = 192, SIR = 14.87 dB
100 200 300 400 500
50 100 150 200 250 300 350 400 450
500 -90
-80
-70
-60
-50
-40
-30
-20
-10
0
(b) P = 256, SIR = 20.67 dB
100 200 300 400 500
50 100 150 200 250 300 350 400 450
500 -90
-80
-70
-60
-50
-40
-30
-20
-10
0
(c) P = 192, SIR = 12.34 dB
100 200 300 400 500
50 100 150 200 250 300 350 400 450
500 -90
-80
-70
-60
-50
-40
-30
-20
-10
0
(d) P = 256, SIR = 20.08 dB
Fig. 3: Desired signal, off-main diagonal interference and SIR with affine detection for N = 256. (a) and (b) use the Hermite filter, with O = 1.5, while (c) and (d) use the PHYDYAS filter, with O = 4.
100 200 300 400 500
50 100 150 200 250 300 350 400 450
500 -90
-80
-70
-60
-50
-40
-30
-20
-10
0
(a) P = 192, SIR = 43.01 dB
100 200 300 400 500
50 100 150 200 250 300 350 400 450
500 -90
-80
-70
-60
-50
-40
-30
-20
-10
0
(b) P = 256, SIR = 45.18 dB
100 200 300 400 500
50 100 150 200 250 300 350 400 450
500 -90
-80
-70
-60
-50
-40
-30
-20
-10
0
(c) P = 192, SIR = 42.43 dB
100 200 300 400 500
50 100 150 200 250 300 350 400 450
500 -90
-80
-70
-60
-50
-40
-30
-20
-10
0
(d) P = 256, SIR = 43.44 dB
Fig. 4: Desired signal, off-main diagonal interference and SIR with filtered time domain detection for N = 256. (a) and (b) use the Hermite filter, with O = 1.5, while (c) and (d) use the PHYDYAS filter, with O = 4.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:50.843Z
- **Text Length:** 26902 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 6 of 6
