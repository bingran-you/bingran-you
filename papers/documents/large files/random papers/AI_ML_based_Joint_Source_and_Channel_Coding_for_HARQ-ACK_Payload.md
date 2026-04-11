# PDF Document: Doshi et al. - 2025 - AIML based Joint Source and Channel Coding for HARQ-ACK Payload.pdf

**File Path:** Doshi et al. - 2025 - AIML based Joint Source and Channel Coding for HARQ-ACK Payload.pdf

**Processed Date:** 2026-02-10T18:17:43.960Z

**File Size:** 3700.38 KB

**Total Pages:** 39

**Extracted Pages:** 39

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3294

**Title:** AI/ML based Joint Source and Channel Coding for HARQ-ACK Payload

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

1
AI/ML based Joint Source and Channel Coding
for HARQ-ACK Payload
Akash Doshi, Pinar Sen, Kirill Ivanov, Wei Yang, June Namgoong, Runxin
Wang, Rachel Wang, Taesang Yoo, Jing Jiang and Tingfang Ji
Abstract
Channel coding from 2G to 5G has assumed the inputs bits at the physical layer to be uniformly
distributed. However, hybrid automatic repeat request acknowledgement (HARQ-ACK) bits transmitted
in the uplink are inherently non-uniformly distributed. For such sources, significant performance gains
could be obtained by employing joint source channel coding, aided by deep learning-based techniques.
In this paper, we learn a transformer-based encoder using a novel “free-lunch” training algorithm and
propose per-codeword power shaping to exploit the source prior at the encoder whilst being robust to
small changes in the HARQ-ACK distribution. Furthermore, any HARQ-ACK decoder has to achieve
a low negative acknowledgement (NACK) error rate to avoid radio link failures resulting from multiple
NACK errors. We develop an extension of the Neyman-Pearson test to a coded bit system with multiple
information bits to achieve Unequal Error Protection of NACK over ACK bits at the decoder. Finally, we
apply the proposed encoder and decoder designs to a 5G New Radio (NR) compliant uplink setup under
a fading channel, describing the optimal receiver design and a low complexity coherent approximation
to it. Our results demonstrate 3 – 6 dB reduction in the average transmit power required to achieve
the target error rates compared to the NR baseline, while also achieving a 2 – 3 dB reduction in the
maximum transmit power, thus providing for significant coverage gains and power savings.
Index Terms
Joint source and channel coding, HARQ-ACK, Transformer, Neyman Pearson, receiver design,
unequal error protection
The authors are with Qualcomm Technologies, Inc (e-mail: akasdosh@qti.qualcomm.com). Date of current version: Sep 25, 2025. This paper was presented in part at the 13th International Symposium on Topics in Coding, August 2025 in the Session for Coding and AI [1].
arXiv:2511.19943v1 [eess.SP] 25 Nov 2025

2
I. INTRODUCTION
A. Motivation
Wireless systems from 2G to 5G are designed based on Shannon’s Separation Theorem [2].
While design of channel coding at the physical (PHY) layer assumes a uniform source prior,
the design of source coding ignores the channel statistics. Moreover, in practical communication
systems, channel coding and source coding for the data channel work at different layers of the
protocol stack. As we asymptotically approach the Shannon limit on both source and channel
coding, we begin to reconsider the uniform source assumption that was used to design channel
coding at the PHY layer.
Some sources/messages communicated at PHY may be inherently non-uniform, such as the
hybrid automatic repeat request acknowledgement (HARQ-ACK) bits transmitted in the uplink
(UL). HARQ-ACK bits are generated in response to successful decoding (Cyclic Redundancy
Check (CRC) pass) of Physical Data Shared Channel (PDSCH) packets received in the downlink
(DL). In a typical gNB1 implementation, outer loop link adaptation (OLLA) is used to ensure
that the PDSCH block error rate (BLER) remains below a target (e.g.,10%), implying HARQ
ACK bits are ACK with probability ≥ 0.9. As a result, the ACK to NACK ratio would be
approximately 9 to 1. In spite of the biased source prior, no source coding or compression
has been applied to HARQ-ACK bits in the current standards, thus presenting a significant
opportunity for performance improvement in 6G.
Furthermore, since HARQ-ACK bits are ACK with probability ∼ 0.9, maximum a-posteriori
(MAP) decoding would lead to ACK being protected more than NACK. While an ACK error
at the gNB would lead to an unnecessary PDSCH retransmission, a NACK error would go
undetected at the PHY layer and only be detected at the application (APP) layer, with ≥ 8
NACK errors leading to Radio Link Failure (RLF)2. Hence it is of greater importance to have
a low NACK error rate than a low ACK error rate – this is referred to as Unequal Error
Protection (UEP) of source bits. For instance, [4] dictates that for Physical Uplink Control
Channel (PUCCH) Format 1, the NACK error rate should not exceed 0.1% at the specified
signal-to-noise ratio (SNR), while the ACK error rate should not exceed 1%. However, HARQ
ACK decoders assume the source bits are i.i.d. and uniformly distributed and do not take UEP
1A base station is referred to as gNB in 3GPP terminology.
2Refer maxULRLCRetransmissions parameter in [3].

3
into account. Consequently, the UE has to transmit at a power high enough to sustain both a
NACK and ACK error rate of ≤ 0.1 %. An optimal decoder should utilize the higher target
ACK error rate to reduce the average transmit power and/or improve uplink coverage.
AI/ML is a powerful tool that one could utilize to design joint source and channel coding
(JSCC) schemes for PHY layer communications. However, AI/ML based solutions, being data
driven, are typically scenario specific and hence not robust to slight changes in the underlying data
distribution [5], [6]. While the algorithmic solutions that drive channel estimation, demodulation
and decoding in modern cellular modems are analytical and data/distribution agnostic, AI/ML
solutions fundamentally look to exploit patterns in the data distribution instead of designing an
algorithmic solution to the problem at hand. For an AI/ML based JSCC scheme to be considered
an effective solution, one must be able to demonstrate its robustness to distribution shifts and
practical impairments.
B. High Level Problem Statement
Suppose k HARQ-ACK bits b0, b1, . . . bk−1 are encoded to n coded symbols and transmitted,
with each message sequence m ∈ [2k] occurring with probability πm. A bit value of 1 represents
ACK and 0 represents NACK. Denote the received signal by y. Our objective is to learn a
codebook Cu = {cu,m}m∈[2k] and design a decoding algorithm D(y; Cu, {πm}m) that together
minimize SNRth = max(SNRack, SNRnack) where SNRack is the minimum SNR where the
p(bˆi ̸= bi|bi = 1) ≤ 1% and SNRnack is the minimum SNR where the p(bˆi ̸= bi|bi = 0) ≤ 0.1%.
We do not constrain the codewords of Cu to have the same power. Instead, we look to learn the
optimal power to be assigned to each codeword by ensuring that P
m πm(∥cu,m∥2
2/n) = 0.5. For
notational convenience, we will separate Cu into the normalized codebook C and the codeword
powers P in the remainder of the paper.
C. Related Work
Designing practical JSCC schemes for PHY layer communications is challenging. The NR
channel code for short block length (3 ≤ k ≤ 11 where k is the number of information bits)
is a linear code with a pre-specified generator matrix [7]. For this regime, maximum likelihood
(ML) decoding is used in standard evaluations to compute bit/block error rates (BER/BLER).
For k > 11, Polar codes are utilized and ML decoding becomes computationally unfeasible.
Typically, HARQ-ACK transmission falls into the short block length regime with the maximum

4
value of k = 11 being achieved only in the case of carrier aggregation. As with other NR channel
codes, the generator matrix design was optimized assuming a uniform prior on the information
bits.
A recent survey [8] provides a very comprehensive overview of classical approaches to practi
cal code design for JSCC. Most of the works surveyed [9]–[11] apply well-known source coding
techniques such as Huffman [12] and Lempel-Ziv [13] and modify trellis-based decoders such as
Viterbi to perform joint-source channel decoding. However, this involves using variable-length
source codes which would make the channel code rate content dependent. Meanwhile, JSCC
using LDPC codes and Polar codes for both source and channel coding has been investigated
in [14] and [15] respectively. In addition to the source coding having a variable rate, they also
require highly biased source priors to yield performance benefits.
Recently, the temporal correlation among DCI grants has been exploited in [16] to perform
source coding via Arithmetic/Huffman coding. However, they did not jointly optimize the channel
code. In parallel, lossless compression techniques have employed machine learning [17] to exploit
the underlying distribution of source data and achieve lower compression ratio compared to
traditional schemes. Since these techniques were not proposed in the context of PHY layer
control signaling, they did not consider jointly optimizing the channel code as well. To the best
of the authors knowledge, there is no existing work that looks to exploit the non-uniform source
distribution of DL HARQ-ACK when transmitted in the uplink.
D. Contributions
In this paper, we make several key contributions to encoder and decoder design for the PUCCH
HARQ-ACK payload in the short block length regime. Since this is a relatively unexplored field
as outlined in Section I-C, this paper makes several fundamental contributions to PUCCH HARQ
ACK transmission and reception design, including non-linear transformer-aided codebook design
and per-codeword power shaping to exploit the HARQ-ACK source prior, a bitwise maximum a
posteriori (MAP) based receiver with a custom threshold to protect NACK bits more than ACK
bits and a practical receiver design framework that provides for power shaping of reference
signals whilst performing channel estimation as elaborated below.
AI/ML based encoder design: We outline a transformer-based non-linear codebook design
to exploit the non-uniform HARQ-ACK source prior, highlighting how the absence of positional
embeddings reduces the size of the lookup table (LUT) used to store the codebook. We also

5
describe how the output of the transformer can be quantized to the binary field during training.
As part of the simulation details, we also present the training loss function, its theoretical
underpinnings and detail the “free-lunch” training algorithm - training a common codebook
for a range of source priors.
Power Shaping: We present a novel alternative to variable length source coding - per
codeword power shaping. By assigning less power to more frequent codewords and vice versa,
we demonstrate how the average SNR required to achieve a target error rate is minimized.
Further, we describe power shaping techniques that are more robust to changes in the source
distribution and/or require less signaling overhead.
Bitwise UEP: In order to protect the NACK bits more than ACK bits, we formulate a decoder
that involves comparing the ratio of the bitwise likelihoods to a custom threshold. Further, we
develop an extension inspired by the generalized likelihood ratio test from estimation theory to
overcome partial knowledge of the source prior at the receiver and propose an approximation to
it that significantly reduces computational complexity.
Practical Receiver Design: Making minimal assumptions with regards to the channel model,
we first describe the optimal approach to computing the bitwise likelihoods when transmitting
over a fading channel assuming a noncoherent receiver. We then factorize the likelihoods to
separate the channel estimation and decoding steps to develop a coherent receiver, and finally
describe how the coherent receiver processing can be significantly simplified in certain scenarios
to achieve computational complexity on par with a traditional maximum likelihood (ML) decoder.
E. Notation & Organization
We use bold uppercase A to denote a matrix and bold lowercase a to denote a vector, unless
stated otherwise. Similarly, 1 denotes the all-ones vector. A matrix A can be obtained by stacking
column vectors as A = [a0, a1 . . . aN−1]. A[i, j] represents the element of A located at the ith row
and jth column. For vectors a and b of length n, a⊙b represents the elementwise multiplication
of the two vectors. ∥a∥2 denotes the Frobenius norm of a. In this paper, we will often invoke
the matrix inversion lemma in its simplified form, which states that
(I + UV)−1 = I − U(I + VU)−1V (1)
for conformable matrices U and V. Given a scalar value n, n! = n(n − 1) . . . 1.

6
The paper is organized as follows. A frequency domain system model is outlined in Section
II, followed by a detailed description of the encoder design and the concept of power shaping in
Section III and IV respectively. We then outline the receiver design for an AWGN channel that
assumes perfect channel estimation in Section V, and then elaborate on practical considerations
under a NR compliant fading channel in Section VI. We present the simulation details common
to both the AWGN and practical receiver design in Section VII, before presenting the results for
the AWGN and practical receivers, along with their specific simulation details, in Section VIII
and IX respectively. Finally, we summarize the paper and describe potential future directions in
Section X.
II. SYSTEM MODEL
Consider a channel code mapping k information bits to n coded symbols, henceforth identified
by the tuple (k, n). An information bit value of 0 corresponds to NACK, while 1 corresponds
to ACK. A message sequence bm = {b0, b1, . . . bk−1} ∈ {0, 1}k consisting of k information
bits is jointly encoded and modulated to n real values (or equivalently n/2 complex values).
The message sequence index is denoted by m (for e.g. if k = 4, then the message sequence
0101 corresponds to index 5). The complex valued encoded sequence is denoted by cm. Each
codeword cm has norm ∥cm∥2
2 = n/2 and is associated with a prior probability πm such that
P
m∈[2k] πm = 1. If the encoding is binary, the intermediate encoded bit sequence is denoted
by e(bm). Denote the codebook by C = {c0, c1, . . . c2k−1}. Subsequently, each codeword cm is
multiplied by a scalar per-codeword power shaping factor √αm (to be introduced in Section IV).
In current NR specifications [7], all codewords are transmitted with equal power i.e. αm = 1.
A. AWGN setup
The coded sequence √αmcm is transmitted over a SISO AWGN channel such that
y = g√αmcm + n (2)
where n ∼ CN (0, σ2In/2) and SNR = g2/σ2.

7
Fig. 1. E2E FD pipeline for uplink SIMO PUCCH HARQ-ACK transmission per Rx antenna.
B. NR-compliant fading channel setup
Consider the end-to-end (E2E) frequency domain (FD) pipeline for uplink transmission of
PUCCH3 HARQ-ACK as depicted in Fig. 1. We assume a SIMO setup with Nr receive antennas,
since PUCCH is transmitted from a single antenna port [18]. Under the assumption of coherent
reception i.e. excluding PUCCH Format 0, we would also transmit Np Demodulation Reference
Symbols (DMRS) resource elements (REs) which we set to 1 w.l.o.g. given a single transmit
port. DMRS REs are utilized by the receiver to perform channel estimation (ChEST). Suppose
that the DMRS REs are also multiplied by a power shaping factor √βm. In this paper, we will
be considering two cases - no power shaping on the DMRS i.e. βm = 1 and data dependent
DMRS power shaping i.e. βm = αm.
Denote by cp+d,m = [√βm1, √αmcm] the OFDM resource grid containing the DMRS and data
REs. This comprises the FD transmit signal consisting of N = Np + Nd REs, where Nd = n/2,
which is to be sent over the FD channel H ∈ CN×Nr . The channel H can be expressed as
g[h0, h1, . . . hNr ] where g captures the Tx power and path loss while hl ∈ CN is the small
scale fading channel corresponding to lth receive antenna such that E[∥hl[j]∥2] = 1 ∀j ∈ [N ].
Furthermore, we can divide hl into the channel on the pilot and data REs as hl = [hp,l, hd,l]
such that hl ⊙ cp+d,m = [√βm(hp,l ⊙ 1), √αm(hd,l ⊙ cm)]. The received signal on the lth receive
antenna is
yl = ε(ghl ⊙ cp+d,m + nl), (3)
3Note that a similar formulation can be derived for HARQ on PUSCH as well. We focus only on PUCCH for simplicity of the SIMO setup.

8
where nl ∼ CN (0, σ2I) and ε captures the overall scaling introduced in receiver processing. For
simplicity, we assume that the same ε is applied to all receive antennas.
Denote the received signal (across all receive antennas) by Y = [y1, . . . yNr ]. Depending on
whether we choose to perform coherent or noncoherent decoding, the received signal is passed
to a channel estimator module before being input to a decoder. Furthermore, we can define the
long term SNR (per RE and per receive antenna) and noise variance (NV) as
SNR = ε2g2
ε2σ2 = g2
σ2
NV = ε2σ2.
(4)
Our objective is to design a codebook C, power shaping vector P and a decoder D that can
exploit the HARQ-ACK source prior and hence reduce the average transmit power required to
preferentially protect NACK over ACK bits. We will introduce the encoder design aspects in
Section III and IV, the receiver design in Section V and VI and the UEP performance criteria
in Section VII-C.
III. ENCODER DESIGN
A. Transformer (TF) Architecture
We utilize a transformer (TF) encoder [19] to encode the input bits. The architecture is
illustrated in Fig. 2. The input bit sequence bm ∈ {0, 1}k is divided into A tokens of size ⌈k/A⌉.
If k < A⌈k/A⌉, the first k positions are filled with input bits and the remaining A⌈k/A⌉ − k
positions are set to 0. Subsequently, we BPSK modulate the input bits m = (−1)bm before
inputting the tokens to the transformer. The transformer encoder consists of L = 6 layers. Each
layer consists of the standard self attention and feedforward networks with residual connections.
We utilize an embedding length4 of dmodel = 128, feedforward dimension dimfeedforward = 512
and nhead = 8. The tokens input to the transformer and output by it are passed through Layer
Norm [20] normalization. Positional embedding is not added to the input tokens. The transformer
outputs A tokens. Each output token is passed through a linear layer H to obtain ⌈n/A⌉ coded
symbols per token. The coded symbols computed from the output tokens are concatenated to
obtain the codeword of n coded symbols, which can then be normalized to ensure the total
4Refer https://pytorch.org/docs/stable/generated/torch.nn.TransformerEncoder-Layer.html for meaning of each hyperparameter

9
Fig. 2. Transformer-based Architecture for encoding PUCCH HARQ-ACK
codeword power of each codeword is n. Finally, the transformer output can be reshaped to
obtain cm, an n/2 length complex codeword.
B. Codebook Properties
Since the encoding operations involve computing self-attention on the message tokens, the
codebook is non-linear. Non-linearity implies that each codeword will have a different Block
Error Rate (BLER)-SNR curve, leading to a per-codeword BLER spread. In order to reduce
the per-codeword BLER spread, the message sequence to codeword mapping can be scrambled,
such that every message sequence sees the same BLER curve on average.
Since we do not utilize positional embedding, the codebook learnt is group permutation
symmetric with a group size of ⌈k/A⌉. This implies we do not need to store the embedding of
any group permutations of the input message sequence. Given an input sequence x, we do not
need to invoke the transformer to compute the encoding of any sequence that can be written as
Px, where P ∈ {0, 1}A×A and x = [mT
0 mT
1 . . . mT
A−1] ∈ {−1, 1}A×⌈k/A⌉. This implies that for

10
any input sequence x, there are at most A! − 1 orderings of its input tokens5 whose encoding
can be computed by group permutation of H(x). This property can be exploited to reduce the
size of look-up table (LUT) used to store the codebook.
Finally, increasing the number of tokens A (or equivalently reducing the token size ⌈k/A⌉)
increases the degree of group permutation symmetry in the codebook. In other words, larger
symmetry reduces the size of the LUT required to store the codebook. Increased symmetry also
reduces the per-codeword BLER spread arising from codebook non-linearity.
C. Quantizing Transformer Output
So far the n coded symbols output by the transformer are real-valued, hence we can view this
as a joint source-channel coding and modulation (JSCCM) scheme. If the transformer output
is unquantized, and the coded symbols were to be transmitted on a DFT-s-OFDM waveform,
we can consider that the coded symbols are effectively being transmitted as consecutive time
domain symbols. In that case, unquantized symbols can lead to a large peak-to-average power
ratio (PAPR). To lower the PAPR, one approach could be quantizing the output of transformer to
{0, 1}n and then applying QPSK modulation as done in NR [21]. In order to learn a quantized
codebook, we adopt a simplified approach to VQ-VAE [22] called finite scalar quantization
(FSQ) [23]. Denoting the unquantized transformer output by cunquant, we have
cquant = sign(1 − 2σ(cunquant)), (5)
where σ(x) = 1/(1 + e−x). Since σ(x) constrains the output to lie in (0, 1), 1 − 2σ(x) constrains
it to (−1, 1). In order to perform the quantization differentiably during training, we set
ctrain = 1 − 2σ(cunquant) + sg(cquant − (1 − 2σ(cunquant))), (6)
where sg stands for ”stop gradient”. Consequently, the gradient will flow through 1−2σ(cunquant)
but the value of ctrain will be cquant. We will utilize ctrain and cquant during training and inference
respectively.
IV. POWER SHAPING (PS)
NR channel code designs [7] assumed i.i.d. information bits with p(b = 1) = 0.5. One
classical approach to exploit source non-uniformity is to apply source coding to the data prior to
5If some of the tokens are identical, then the number of distinct orderings will be smaller.

11
Fig. 3. Entropy and Learnt PS as a function of πm
channel coding. Classical lossless source coding techniques such as entropy coding [24] reduce
the average number of bits required to transmit the same data by setting the word length to be
the negative log probability of the word i.e. l(cm) ∝ − log πm where l(cm) denotes the length of
cm. Given that the source compression is lossless, this would reduce the average transmit power
needed to achieve a given target BER.
However, such source coding techniques are inconvenient for wireless communication, since
the channel coding parameters (k, n) would become content dependent (typically they are only
channel dependent). Hence, we propose instead to perform per-codeword power shaping. This
implies that each codeword cm will be associated with a scalar per-codeword power shaping
parameter αm while the length of each codeword is kept fixed. In this section, we will introduce
three distinct power shaping techniques and highlight their pros and cons. We will present a
comparative analysis of the gains obtained from the different PS schemes in Section VIII-D.
A. Entropy PS
Given a codeword cm with prior πm, set the codeword power αm ∝ − log πm, henceforth
referred to as Entropy PS. While we have been unable to theoretically prove the optimality of
Entropy PS in terms of minimizing the BER given an average power constraint, we verified
that a learnable PS scheme, learnt as part of the transformer training, also converges to a power
allocation similar to Entropy PS (training details in Appendix B). Fig. 7 shows αm as a function
of πm for k = 11 HARQ-ACK bits which are i.i.d. and ACK with p = 0.9 for both Entropy and
learnt PS.

12
Observe that codewords with high probability of occurrence πm have low power αm and vice
versa. Moreover, codewords with the same probability of occurrence have the same codeword
power. Since we plot as a function of πm, Entropy PS is a single dot but the Learnt PS has
a spread (if more than one codeword has the same prior probability). Since codewords with
low πm are seen less frequently in training, this is to be expected. However, for all codewords
w.p. ≥ 1e − 4, Learnt and Entropy PS are in very close agreement. Note that if we were to
scramble the message sequence to codeword mapping as proposed in Section III-B to reduce the
BLER spread, we must restrict the scrambling to be applied to codewords with the same prior
probability, in order to retain the benefits of performing Entropy PS.
B. Arithmetic PS
A possible drawback to Entropy PS is that any change in the prior Π changes the power
shaping. We want to design a PS scheme that is more robust to changes in the prior. In other
words, we want to find a representative prior Πˆ such that if we set the codeword power αm ∝
− log πˆm, it provides the highest attainable gains for all distributions under consideration subject
to the constraint of a fixed PS scheme. Parameterizing Π by Ψ, this would imply finding
Πˆ = arg mΠi′n EΨ[KL(Π(Ψ)||Π′)] = arg mΠi′n EΨ
X
m∈[2k ]
−πm(Ψ) log π′
m , (7)
subject to the constraint P
m π′
m = 1 in a Bayesian setup (with a uniform prior on Ψ). Utilizing
Lagrange multipliers and differentiating w.r.t π′
m ∀c, we obtain
Πˆ = EΨ[Π(Ψ)]. (8)
Since computing ˆΠ involves computing the arithmetic mean over all Π(Ψ), we henceforth refer
to this scheme as Arithmetic PS. Similar to Entropy PS, we will present results in Appendix B,
demonstrating that a common learnable PS scheme, learnt as part of the transformer training,
converges to a allocation similar to Arithmetic PS.
C. Step PS
While Arithmetic PS enables utilization of a common PS scheme for a range of priors, both
Entropy and Arithmetic PS lead to a large variation in power between different codewords. While
power shaping was introduced to exploit the non-uniform codeword prior, we would still like to

13
be able to control the power variation. In order to control the power variation, we propose Step
PS. Step PS consists of only two power levels – α0 = P0, power of the all-ACK codeword and
αm = P1 ∀m ̸= 0, power of all the other codewords. Furthermore, Step PS can be parameterized
by a single value δ = P1 − P0. By setting P0 < P1, Step PS acts as a coarse approximation to
Entropy and Arithmetic PS. The power variation in Step PS can be easily reduced by lowering
δ, and the signaling overhead is reduced from 2k codeword power values to 1 power differential.
Remark 1: For all PS schemes, the power levels are subjected to the constraint P
m πmαm = 1.
This is to ensure a consistent definition of SNR during simulation. In practice, such a normal
ization would not be performed. It would instead be performed implicitly as part of the power
control equation in UE behavior (refer Section 7.2.1 in [21]).
V. AWGN RECEIVER DESIGN
The encoder and power shaping designs proposed thus far seek to exploit the underlying prior
of the HARQ-ACK bits to perform JSCC at the encoder. In this section, we switch our focus to
enabling JSCC at the decoder while also providing for UEP of NACK over ACK by effective
utilization of the codeword prior. To develop a decoder from first principles, we start with the
AWGN system model detailed in Section II-A. In this case, the codeword likelihood is given by
[25]
p(y|Hm) = 1
πn/2detΣ exp(−(y − g√αmcm)H Σ−1(y − g√αmcm)) (9)
where Σ = σ2In/2 and Hm = {cm, αm} denotes the mth codeword hypothesis i.e. the codeword
is cm and the power shaping is αm.
In order to utilize the codeword prior Π at the decoder, the standard approach is to perform
Maximum a-posteriori (MAP) decoding. At the codeword level, this involves identifying the
codeword index m∗ such that
m∗ = argmax
m
p(y|Hm)πm. (10)
Given our focus on preferentially protecting NACK over ACK, we pivot to bitwise decoding
in place of codeword decoding. Hence, we would instead perform bitwise MAP decoding, such

14
that
bˆi = argmax
j∈{0,1}
p(bi = j|y)
p(bi = j|y) =
P
m∈Cbi=j p(y|Hm)πm
p(y) ,
(11)
where Cbi=j denotes the set of all codewords for which bi = j.
A. Bitwise UEP
Rewriting the bitwise MAP decoding in (11) as a thresholding rule, we decode bˆi = 0 if
P
m∈Cbi=0 p(y|Hm)πm
P
m∈Cbi=1 p(y|Hm)πm
= p(y, bi = 0)
p(y, bi = 1) ≥ 1, (12)
which further can be rewritten in terms of the bitwise likelihood as
p(y|bi = 0)
p(y|bi = 1) ≥ p
1 − p . (13)
Now suppose that p = 0.9. Observe that p(y|bi = 0) has to be 0.9/(1 − 0.9) = 9 times larger
than p(y|bi = 1) for the bit to be declared NACK. Consequently, a bitwise MAP decoder would
preferentially protect ACK over NACK. As outlined in Section I-A, we need to preferentially
protect NACK over ACK. This would suggest the use of a “fake” prior β
p(y|bi = 0)
p(y|bi = 1) ≥ β
1 − β ⇔ p(bi = 0|y)
p(bi = 1||y) ≥ β(1 − p)
(1 − β)p (14)
which could be swept to achieve the desired degree of NACK over ACK protection. We will
henceforth refer to this decoder as Bitwise UEP. Bitwise MAP is a special case of Bitwise UEP
where β/(1 − β) = p/(1 − p). From detection theory [26], we observe that the likelihood-based
criterion in (14) resembles the classical Neyman-Pearson (NP) test. However, the NP test does
not require any knowledge of the prior Π since it is applicable for one bit only i.e. k = 1. In
the 1 bit case, (14) simply collapses to comparing y with a threshold. Depending on the target
NACK error rate and the SNR, the threshold can easily be computed (refer Appendix A for
details).
Extending the NP test to k > 1 requires computing the posterior bit probability p(bi = 0|y)
via Bayes rule as outlined in (11). However, it is unclear how to determine β to achieve the
desired degree of NACK over ACK protection. We propose an empirical rule to determine the

15
threshold β (experimental evidence is presented in Appendix C). Suppose we wish to target an
ACK and NACK BER of BERACK,t and BERNACK,t respectively. Then, set
β
1 − β ≈ BERNACK,t
BERACK,t
. (15)
Suppose BERACK,t = 1% and BERNACK,t = 0.1%. Then β/(1 − β) = 0.1 and p(y|bi = 1) has
to be 10 times larger than p(y|bi = 0) for bi to be declared ACK, thus preferentially protecting
NACK.
B. MLM GLRT
One caveat to performing Bitwise UEP is the requirement of perfect knowledge of the prior
Π = {πm}m, which may not hold in reality. For instance, since OLLA ensures PDSCH BLER is
≤ 10%, the BS may know p = 0.9. However, owing to downlink channel statistics, consecutive
HARQ-ACK bits may be correlated and the BS may not be privy to the correlation value.
Consider a parameterized representation of Π = f (Ψ0, Ψ1). In other words, given Ψ0 and
Ψ1, we can compute each of the 2k codeword probabilities. Further, assume that Ψ0 is known
and Ψ1 is unknown. The generalized likelihood ratio test (GLRT) [26] replaces the unknown
parameters under each hypothesis by their maximum likelihood estimates under that hypothesis.
Given Ψ1 is unknown, GLRT can be applied to (14) to obtain
maxΨ1 pΨ1(y|bi = 0)
maxΨ1 pΨ1p(y|bi = 1) ≥ β
1 − β . (16)
From (13), it follows that pΨ1(y|bi = j) = P
m∈Cbi=j p(y|Hm)πm(Ψ1)/p(bi = j).
Furthermore, in order to reduce computation complexity, we observe that p(y, bi = j) is
computed as a weighted sum of exponentials P
m∈Cbi=j p(y|Hm)πm. Approximating a sum of
exponentials by the dominating exponential and taking log on both sides of (16), we obtain the
decision rule
max
Ψ1
max
m∈Cbi =1
L(m, Ψ1) − max
Ψ1
max
m∈Cbi =0
L(m, Ψ1) ≷ log β(1 − p)
p(1 − β) (17)
where
L(m, Ψ1) = −(y − g√αmcm)HΣ−1(y − g√αmcm) + log πm(Ψ1). (18)
We refer to this approximation as the Max Log MAP (MLM) approach [27]. MLM GLRT
provides two benefits - the ability to compute the bitwise likelihood with partial knowledge

16
of the codeword priors and a reduced complexity implementation (compared to Bitwise UEP).
Since we compute an approximation to p(y|bi = 0), the value of β as dictated by (15) may no
longer be exactly optimal. However, to maintain a fair comparison, we will not change β for
MLM GLRT when comparing it to Bitwise UEP in Section VIII-F.
VI. FADING CHANNEL RECEIVER DESIGN
Having designed a Bitwise UEP receiver from first principles assuming a SISO AWGN channel
with perfect channel estimation in Section V, we now tackle the fading channel setup outlined
in Section II-B. In order to extend the receiver design to a SIMO fading channel, we recall that
the SIMO received signal is Y = [y1, . . . yNr ], where yl is the N × 1 received vector on the lth
receive antenna. Assuming uncorrelated receive antennas, we have
p(Y|bi = 1) =
Nr
Y
l=1
p(yl|bi = 1) =
Nr
Y
i=1
P
m∈Cbi=1 p(yl|Hm)πm
p . (19)
In order to compute p(yl|bi = 1), we need to compute p(yl|Hm) accurately.
A. Optimal Noncoherent Receiver
Suppose that hl ∈ CN (0, Rhh) (aligns with any TDL channel model in [28]) and nl ∈
CN (0, σ2IN ). In that case, yl conditioned on Hm is a complex normal Gaussian random vector
[25] with
p(yl|Hm) = 1
πN detΣ exp(−yH
l Σ−1yl) (20)
where Σ is the covariance of yl conditioned on Hm and is given by
Σ = NV(SNR diag(cp+d,m)Rhhdiag(cp+d,m)H + IN ). (21)
This follows from the defintion of yl in (3) and then computing Σ = E[ylyH
l ].
B. Optimal Coherent Receiver
Observe that p(yl|Hm) can be written as p(yp,l, yd,l|Hm). By Bayes rule, we have
p(yp,l, yd,l|Hm) = p(yd,l|Hm, yp,l)p(yp,l|Hm) (22)

17
Denote by h ̃d,l = εghd,l. In the equations to follow, we will utilize the subscript 1 to denote
h ̃d,l and 2 to denote yp,l for notational brevity. Conditioned on the mth hypothesis Hm, the
distribution of  ̃hd,l conditional on yp,l = yp is a multivariate Gaussian [29] such that
h ̃d,l = E[h ̃d,l|Hm, yp,l = yp] + Cov 1
2 [ ̃hd,l|Hm, yp,l = yp]z, (23)
where z ∼ CN (0, INd) and
E[h ̃d,l|Hm, yp,l = yp] = Σ12Σ−1
22 yp
Cov[ ̃hd,l|Hm, yp,l = yp] = Σ11 − Σ12Σ−1
22 Σ21.
(24)
Utilizing the definition of the received signal in (3), we can compute Σ11, Σ12 and Σ22 (refer
Appendix D for derivation) as
Σ11 = ε2g2Rhdhd
Σ12 = ε2g2pβmRhdhp
Σ22 = ε2g2βmRhphp + ε2σ2INp .
(25)
From (3), we observe that yd,l = √αmh ̃d,l ⊙ cm + εnd,l. Hence yd,l conditioned on Hm and
yp,l = yp is a complex Gaussian vector with
μd,l = √αmE[h ̃d,l|Hm, yp,l = yp] ⊙ cm
Σd,l = αmdiag(cm)Cov[h ̃d,l|Hm, yp,l = yp]diag(cm)H + ε2σ2INd,
(26)
with the dependence of μd,l and Σd,l on Hm being kept implicit notationally. By substituting
for Σ11, Σ12 and Σ22 in (24) and factoring out SNR, we obtain
μd,l =
r αm
βm
Wmyp ⊙ cm
Σd,l = NV INd + αmSNR diag(cm) Rhdhd − WmRhphd diag(cm)H ,
(27)
where
Wm = Rhdhp Rhphp + 1
βmSNR INp
−1
. (28)
Observe that by plugging in βm = 1 or βm = αm in (27), Wmyp is the linear minimum mean
squared error (LMMSE) channel estimate with the SNR appropriately shaped by βm. Having

18
computed μd,l and Σd,l in (27), we can now compute the first term in the RHS of (22) as
p(yd,l|Hm, yp,l) = 1
πNd detΣd,l
exp − (yd,l − μd,l)H Σ−1
d,l (yd,l − μd,l) . (29)
From (3), we observe that yp,l = √βmh ̃p,l ⊙ 1 + εnp,l. Conditioned on Hm, yp,l is a complex
Gaussian vector with
μp,l = 0
Σp = NV(INp + βmSNR Rhphp),
(30)
and hence we can compute the second term in the RHS of (22) as
p(yp,l|Hm) = 1
πNp detΣp
exp − yH
p,lΣ−1
p yH
p,l . (31)
Observe that if βm = 1 or any other constant independent of Hm, then p(yp,l|Hm) = p(yp,l).
In current NR standards [7], the DMRS is always transmitted at constant power. Under that
assumption, we have
arg mmax p(yi|Hm) = arg mmax p(yd,l|Hm, yp,l). (32)
This explains the rationale for coherent communication in practice – we perform channel esti
mation and then utilize the channel estimate on the data REs to decode and demodulate the data
REs. However, if the DMRS is subject to data dependent power shaping, then p(yp,l|Hm) is no
longer independent of Hm and simply computing p(yd,l|Hm, yp,l) is no longer optimal.
C. Low Complexity Coherent Receiver
Both the receivers proposed in Section VI-A and VI-B compute identical probabilities. The
coherent design is more compatible with traditional receiver processing whereby we first use
the pilot REs to perform channel estimation (ChEST) and then utilize the channel estimate on
the data REs to decode (provided βm = 1). However, the computation of the bitwise likelihood
in (19) using the receivers described thus far will require computing a weighted sum of 2k−1
exponentials for each of the k information bits. In order to reduce the computational complexity,
we demonstrate how to simplify the coherent receiver design under the following assumptions
• p(yp,l|Hm) can be dropped i.e. βm = 1
• Rhh = 1N 1T
N i.e., channel is frequency flat.

19
Our results in Section IX-D will demonstrate that we can drop p(yp,l|Hm) even if βm ̸= 1
without significant performance degradation. However, the second assumption will cause minimal
performance degradation only if the number of resource blocks (RBs) allocated is small so that
the channel is effectively “frequency-flat”. This is typically the case for PUCCH transmissions.
Substituting for p(yp,l, yd,l|Hm) in p(yl|bi = 1), we have
p(yl|bi = 1) ∝
P
m∈Cbi =1
πm
detΣd,l exp − (yd,l − μd,l)H Σ−1
d,l (yd,l − μd,l)
p . (33)
Approximating the sum of exponentials by the dominating exponential and taking log on both
sides, we have
log p(yl, bi = 1) ∝ max
m∈Cbi =1
−∆2(yd,l, μd,l) + log πm
detΣd,l
, (34)
where
∆2(yd,l, μd,l) = (yd,l − μd,l)H Σ−1
d,l (yd,l − μd,l) (35)
is the Mahalanobis distance between yd,l and μd,l. By substituting for flat fading in Rhh and
repeatedly utilizing the matrix inversion lemma (1) (refer Appendix E for the proof), we obtain
detΣd,l = NV 1 + αmNd
βmNp + 1
SNR
∆2(yd,l, μd,l) = 1
NV ∥yd,l − μd,l∥2
2 − αm
αmNd + βmNp + 1
SNR
∥(yd,l − μd,l)H cm∥2
2.
(36)
Observe that the definition of ∆2(yd,l, μd,l) in (36) contains both 2Re(yH
d,lμd,l) (from ∥yd,l −
μd,l∥2
2) and ∥yH
d,lcm∥2
2 (from ∥(yd,l − μd,l)H cm∥2
2). Recalling that μd,l is an elementwise prod
uct of the channel estimate and the codeword cm, the first term models traditional coherent
communication e.g. codeword ML decoder. Meanwhile, the second term computes the energy
of yd,l when projected onto cm, which is typically computed by an energy detector used for
non-coherent communication.
Having computed detΣd,l and ∆2(yd,l, μd,l), we can substitute them back in (34), compute
log p(Y|bi = j) for j ∈ {0, 1} using (19) and utilize the Bitwise UEP rule in (14) to decode
bˆi = 0 if
log p(Y|bi = 1) − log p(Y|bi = 0) ≥ log β
(1 − β). (37)
Computational Complexity Analysis: Returning to (34), we observe that log πm
detΣd,l can be

20
precomputed ∀ m ∈ [2k]. More precisely, log πm
detΣd,l + log NV is independent of the received
signal (since we will fix SNR used in receiver processing to a nominal value independent of
the received SNR as will be detailed in Section IX-B) and adding log NV is O(1). Since yd,l,
μd,l and cm are vectors of length n/2, computing ∥yd,l − μd,l∥2
2 and ∥(yd,l − μd,l)H cm∥2
2 are
both O(n). Furthermore, we compute ∆2(yd,l, μd,l) for each of the Nr receive antennas and 2k
codeword hypothesis – O(2kNrn). Finally, to evaluate (37), we have to compute a max over
the 2k−1 values of −∆2(yd,l, μd,l) + log πm
detΣd,l for bi = 0 and bi = 1, and repeat this for each
of the k information bits – O(k2k). Hence, the computational complexity is O(2k(Nrn + k)),
compared to an ML decoder which is O(2kNrn). Hence for k ≪ nNr, the legacy ML decoder
and the low complexity coherent receiver have the same order of computational complexity.
VII. SIMULATION DETAILS
In this section, we will cover the simulation details that are common to both the AWGN
receiver design (that assumes perfect channel estimation) and the fading channel receiver design.
In the subsequent sections, we will first highlight the simulation details specific to each, before
diving into the results.
A. Probabilistic Model for HARQ-ACK distribution
As mentioned in Section V-B, owing to downlink channel statistics, HARQ-ACK bits in
a single PUCCH transmission can be correlated. To model the correlation among bits within
a single PUCCH transmission, we consider a first order Markov model, wherein the ACK
probability p(bi = 1) = p and ρ ∈ [0, 1] is the correlation coefficient between consecutive
bits bi−1 and bi. The transition probabilities are given by
p(bi = 1|bi−1 = 0) = p(1 − ρ)
p(bi = 0|bi−1 = 1) = (1 − p)(1 − ρ),
(38)
and the transition diagram is illustrated in Fig. 4. Observe that setting ρ = 0 makes the bits
i.i.d (since p(bi = 1|bi−1 = 0) = p(bi = 1)). On the other hand, setting ρ = 1 implies only two
sequences are seen - all-ACK with probability p and all-NACK with probability 1 − p. More
generally, given p and ρ, the codeword probability πm corresponding to the message sequence
bm = {b0, b1 . . . bk−1} is given by
πm = p(b0)Πk−1
i=1 p(bi|bi−1). (39)

21
Fig. 4. Transition probabilites for consecutive HARQ-ACK bits
While it can be argued that a first order Markov model may not be sufficient to capture the
correlation among HARQ-ACK bits, PDSCH CRC logs from field measurements have supported
the adequacy of first order Markov modelling. However, we would like to emphasise that our
encoder and decoder design principles can be applied to any higher order Markov model or
more complex probability distributions, as long as the HARQ-ACK bits are sufficiently biased
towards ACK.
B. 5G NR implementation
Coding for short block lengths is described in [7]. Short block lengths refers to the 3 ≤ k ≤ 11
regime, where k is the number of information bits. For this regime, NR provides a generator
matrix G ∈ {0, 1}32×11 (refer Table 5.3.3.3-1 in [7]) which when multiplied by the message
sequence bm as Gbm mod 2 yields the coded sequence. Given the rate tuple (k, n) for n ≤ 32,
we select the first k columns and first n rows of G as the generator matrix. ML decoding is
employed in current standard evaluations to compute the BLER for short block length NR codes.
PUCCH HARQ-ACK is QPSK modulated prior to transmission in NR (refer Section 6.3.2.5.2
in [30]) in order to achieve the target BLER at low SNRs. Considering an OFDM waveform,
this is equivalent to mapping two coded bits to a QPSK constellation point before placing it
on a resource element (RE) in an OFDM grid. By analogy, if we do not quantize the output
of the transformer to the binary field (GF(2)), we can view the proposed encoder design as a
JSCCM (M for Modulation) scheme wherein two coded symbols (two real values) are mapped
to a single complex number and placed on one RE. Since the coded symbols are real valued, we
cannot define a code rate but we ensure that the number of information bits per dimension (i.e.
per RE), and hence the spectral efficiency, are the same for the baseline and proposed schemes.
C. UEP Criterion
According to Section 8.3 in [4], the ACK and NACK error rate of PUCCH decoding should
not exceed 1% and 0.1% respectively. Denote by SNRack the minimum SNR required to achieve

22
an ACK error rate of ≤ 1% and by SNRnack the minimum SNR required to achieve a NACK
error rate of ≤ 0.1%. Compute SNRth = max{SNRack, SNRnack} (taking the maximum ensures
both ACK and NACK error rate targets are met). SNRth will serve as the performance metric
to compare the different encoder and decoder designs.
D. Loss Functions & Training Algorithms
As part of the transformer training, the transformer will encode a batch of message sequences
which are subsequently power shaped, passed through a SISO AWGN channel and decoded
assuming perfect channel estimation. Since we are focused on the unequal protection of ACK
and NACK bit errors as introduced in Section V, our training obective should attempt to lower
both the ACK and NACK bit error rate. Let us first focus on reducing BERACK at a given SNR.
Observe that
1 − BERACK =
Z
1y∈Γ1p(y|bi = 1)dy
=
Z
1y∈Γ1
p(bi = 1|y)
p p(y)dy
= Ey 1y∈Γ1
p(bi = 1|y)
p,
(40)
where Γ1 denotes the decision region where bi is decoded to be 1, i.e.
Γ1 = y; p(y|bi = 0)
p(y|bi = 1) < β
1 − β , (41)
and the posterior bit probability is computed as described in (11).
Hence we want to maximize 1y∈Γ1p(bi = 1|y), where both Γ1 and p(bi = 1|y) are a function
of the encoder weights θ. Given that 1y∈Γ1 would have zero gradient6 w.r.t θ for all y, it
is simpler to maximize 1bi=1p(bi = 1|y). Note that bit bi is decoded correctly w.h.p above a
certain SNR, implying that for most y, 1bi=1 = 1y∈Γ1. Given a training SNR aimed at achieving
BER of ≤ 1%, the approximation holds true while training the encoder. Similarly, for reducing
BERNACK, we maximize 1bi=0p(bi = 0|y). Hence, we train the encoder weights θ to maximize
L(y, {ti}; θ) = Ey
k−1
X
i=0
(1 − ti)pθ(bi = 0|y) + tipθ(bi = 1|y) (42)
6Subgradient at points of discontinuity would also be 0.

23
where ti = 1 if bi = 1 else it is 0. Observe that both the bitwise posterior probabilities are
equally weighted in (42), since we did not observe any performance improvement by unequal
weighting of the posterior probabilities in simulation.
We consider two approaches to training the transformer-based codebook - Scenario-Specific
(SS) and Free-Lunch (FL). SS training refers to learning a different codebook for every distri
bution, while FL training refers to the learning of a common codebook for {Π0, Π1, . . . ΠN−1}.
The FL training is outlined in Algorithm 1. It reduces to SS training by setting N = 1. We do
not learn the power shaping as part of the transformer training. Instead we fix the power shaping
scheme to one of the three techniques presented in Section IV, and learn the optimal normalized
codebook C given the PS scheme (learning PS as part of transformer training is covered in
Appendix B). If the common codebook were to be learnt for a very diverse set of distributions
e.g. p = 0.5 and p = 0.9, then a scenario-specific codebook would outperform the FL codebook
as expected. However, if one were to train the common codebook on a set of closely-related
distributions, then the performance can improve marginally as will be demonstrated in Section
VIII-C. Hence we refer to the latter technique as “free-lunch” – it not only provides for learning
of a robust codebook but also has the potential to yield improved performance.
Remark 2: The idea of free-lunch training draws from domain randomization in robotics [31],
a simple technique for training models on simulated images that transfer to real images by
randomizing rendering in the simulator. Training on a set of closely-related distributions can be
thought of as being analogous to domain randomization.
For both techniques, we validate on the ACK and NACK BER at p = 0.9, ρ = 0. Furthermore,
it is essential to train the transformer at an SNR where the ACK and NACK BERs are approxi
mately 0.1% and 1% respectively (since the decoder computes p(bi = 0|y), this is equivalent to
bitwise MAP, hence ACK is protected more than NACK). In order to adjust the training SNR
for different distributions, we compute SNRref for one distribution Πref by hand-tuning. Given
distribution Π, we set SNR(Π) to be
SNR(Π) = SNRref + H(Π) − H(Πref ), (43)
where H(Π) is the entropy of Π
H(Π) = −
X
m∈[2k ]
πm log πm. (44)

24
Algorithm 1: Free Lunch Training
for number of training iterations do for Π ∈ {Π0, Π1, . . . ΠN−1} do
Compute SNR(Π) using (43). Set g2/σ2 = SNR(Π). Sample minibatch of Nbatch messages B = {bm} ∼ Π. for bm ∈ B do
Set target labels ti = bi. Encode (and modulate) bm using the transformer to obtain cm.
Apply power shaping to obtain √αmcm.
Compute y = g√αmcm + n where n ∼ CN (0, In/2). for i ∈ [k] do
Compute pθ(bi = 1|y) using (11).
Compute L(y, {ti}; θ) in (42) using pθ(bi = 1|y) and ti. θ = θ − γAdamW(∇θL(y, {ti}; θ))
VIII. AWGN RECEIVER RESULTS
In this section, we set (k, n) = (11, 32), A = 4 tokens and SNRref = −1 dB corresponding
to the reference distribution with p = 0.9, ρ = 0 for all evaluations.
A. Computing SNRth
There are three “key ingredients” in the techniques proposed thus far - the transformer-based
encoder, power shaping and Bitwise UEP. To visualize the gains from each “ingredient”, we will
first fix the distribution to p = 0.9 and ρ = 0 and plot the ACK and NACK BER vs. SNR in
Fig. 5a and 5b respectively. To compute SNRth, recall that we compute the maximum of the
SNRs where BERNACK = 0.1%, where BERACK = 1%. Observe that the NR baseline with ML
decoder curve, being prior independent, is the same for ACK and NACK with the NACK curve
determining SNRth to be 2.2 dB. Using a bitwise MAP decoder in place of an ML decoder
reduces the ACK and NACK error rate. However, the MAP decoder preferentially protects the
bit with the higher prior - ACK, hence NACK determines SNRth to be 1.62 dB. Adding Entropy
PS further drives down SNRth to 0.36 dB, thus providing a power shaping gain of 1.26 dB.
Replacing the MAP decoder by a UEP decoder (approximately) swaps the ACK and NACK error
curves. This can be attributed to p/(1 − p) = 9 in the MAP decoder while β/(1 − β) = 1/10
in the UEP decoder. This swap drives down SNRth to -1.26 dB, providing a Bitwise UEP gain

25
(a) ACK BER vs. SNR. BERACK,t = 0.01 (b) NACK BER vs. SNR. BERNACK,t = 0.001
Fig. 5. ACK and NACK BER vs. SNR for p = 0.9, ρ = 0.
of 1.62 dB. Finally, using a transformer-based encoder in place of NR reduces SNRth to -1.93
dB, providing a transformer gain of 0.67 dB.
B. Effect of varying ρ on SNRth
So far, we demonstrated reduction in SNRth for one prior - p = 0.9, ρ = 0. However, such
gains can be obtained for other priors as well. We perform Scenario-Specific (SS) training of
the transformer for each distribution assuming Entropy PS, and plot SNRth vs. ρ in Fig. 6a.
Since the ML decoder is prior independent, SNRth is nearly constant as a function of ρ for the
NR + ML baseline. Replacing the ML decoder with a UEP decoder provides a 2 dB reduction
in SNRth at ρ = 0 and up to 3.2 dB reduction at ρ = 0.9. We then add Entropy PS to the
NR encoder, while continuing to employ the UEP decoder. This provides a 3.5 dB reduction in
SNRth at ρ = 0 and up to 7.6 dB reduction at ρ = 0.9. Replacing NR with a transformer-based
encoder provides a 4.0 dB reduction in SNRth at ρ = 0 and up to 8.6 dB reduction at ρ = 0.9.
C. Comparing SS vs FL training
As discussed in Section VII-D, FL training involves learning a common codebook for a range
of closely-related distributions. We train a common codebook for p = {0.8, 0.85, 0.9, 0.95} and
ρ = {0, 0.1, 0.3, 0.5, 0.7, 0.9}. Such training also accounts for small fluctuations in the target
PDSCH BLER due to fast fading or change in location of UE in the cell. For inference, we fix
p = 0.9 and vary ρ. The performance of SS and FL is compared in Fig. 6b. FL yields small

26
(a) Comparing SS training with other baselines (b) Comparing SS and FL training
Fig. 6. SNRth as a function of ρ.
improvements of 0.1 dB at ρ = 0 to 0.05 dB at ρ = 0.5. At ρ ≥ 0.7, there are small degradations
in performance of up to 0.08 dB. Hence, FL training enables us to learn a common codebook
with negligible loss of performance.
Remark 3: FL training refers only to the learning of the (normalized) codebook. The PS scheme
is determined independently. For instance, with Entropy PS, the per-codeword power levels are
functions of the prior, hence can be viewed as scenario-specific. However, with Arithmetic and
Step PS, the power levels are prior independent and could be viewed as free-lunch.
D. Comparing different PS schemes
In order to make the PS scheme less dependent on the exact value of Π, we proposed
Arithmetic and Step PS. The performance of Entropy, Arithmetic and Step PS is plotted in
Fig. 7, and the per-codeword power levels for p = 0.9 and three different correlation values
ρ = {0, 0.5, 0.9} for Entropy, Arithmetic and Step PS are plotted in Fig. 8. For Step PS, we
have considered three values of δ = {4, 5.5, 7} dB. While the best performance is provided by
Entropy PS, providing gains of 4 dB for ρ = 0 and up to 8.6 dB for ρ = 0.9, it leads to the
largest power gap ∆ = Pmax − Pmin as shown in Fig. 8 of 13 dB at ρ = 0 and 23 dB at ρ = 0.9.
Arithmetic PS reduces the power gap to 14 dB for all ρ, while leading to negligible degradation
in performance, with 3.8 − 8.3 dB of gain over NR + ML. Finally, with Step PS, δ = ∆ and as
we reduce δ, we trade-off performance for reduced power variation. With δ = 7 dB, we achieve

27
Fig. 7. Entropy, Arithmetic and Step PS with FL TF and Bitwise UEP.
(a) ρ = 0 (b) ρ = 0.5 (c) ρ = 0.9
Fig. 8. αm as a function of πm.
3.2 − 7.5 dB reduction in SNRth while δ = 4 dB yields 3.1 − 6.3 dB gain. Hence, we can
still achieve significant gains over NR + ML with Step PS, while providing for ∼ 7 − 19 dB
reduction in the maximum power gap compared to Entropy PS.
E. Quantizing TF output
In Section III-C, we described quantizing the output of the transformer to {0, 1}n. Having
quantized the codebook, the data PAPR of the proposed encoders and the NR baseline would
be (nearly) identical per uplink PUCCH transmission. Since uplink transmissions are power
limited, it is important to ensure that Pmax of the proposed encoders does not exceed that of NR.
Assuming Step PS, suppose the all-ACK codeword is transmitted at power P0 and all the other
codewords are transmitted at P0 + δ dB. Hence, Pmax = P0 + δ dB. SNRth can be interpreted as
the average receive power Pave required to achieve UEP assuming noise power N0 = 1. To ensure

28
(a) Pave vs ρ (b) Pmax vs ρ
Fig. 9. Pave and Pmax vs ρ for GF(2) (binary) TF codebook
that Pmax of the proposed encoders does not exceed that of NR, we require Pmax ≤ SNRth,NR,
since NR does not perform PS.
Fig. 9a and 9b plot Pave = SNRth and Pmax as a function of ρ respectively for NR + ML
decoder, NR + Step PS δ = 5.5 dB + Bitwise UEP and TF + Step PS + Bitwise UEP with
δ = {4, 5.5, 7} dB. We observe that TF + Step PS provides an average reduction in SNRth over
NR + ML of 3 dB at ρ = 0 and up to 6.7 dB at ρ = 0.9. More notably, however, both NR and
TF when combined with Step PS and UEP provide reductions in Pmax as illustrated in Fig. 9b,
with NR and TF providing 1.3 and 1.8 dB reduction on average respectively. Thus the proposed
schemes can provide both coverage gain and average power savings simultaneosuly.
Furthermore, comparing with NR + Step PS δ = 5.5 dB, we see that the quantized TF based
codebook alone provides 0.3 dB gain at ρ = 0 and up to 1.3 dB at ρ = 0.9 . To understand why
the gain from the TF codebook alone over NR improves at higher ρ, it is instructive to look at
the cosine similarity of the all ACK and all NACK codeword, which is defined as
CS(ci, cj) = cT
i cj
∥ci ∥2 ∥cj ∥2
. (45)
For instance, if ρ = 1, there will be only two codewords and it is optimum to have them
antipodal i.e. the all ACK codeword could be 1n and the all NACK codeword −1n, hence the
CS is -1. Since FL comprises training over several ρ, it cannot learn an antipodal assignment.
Nevertheless, the CS between all ACK and all NACK codeword for TF is −0.81 compared to

29
(a) Pave vs ρ (b) Pmax vs ρ
Fig. 10. Comparing MLM GLRT and Bitwise UEP in term of Pave and Pmax vs ρ for GF(2) (binary) TF codebook
NR for which it is −0.375. Since TF is closer to antipodal while NR is closer to orthogonal,
the larger gains over NR at high ρ are to be expected.
F. Comparing Bitwise UEP and MLM GLRT
Having addressed the practical concerns on the encoder side – robustness to distributional
shifts and lowering PAPR, we proceed to address practical concerns on the decoder side. As
introduced in Section V-B, the BS may have partial knowledge of the source HARQ-ACK
distribution. We consider that the BS may be privy to p since it is aware of the PDSCH BLER
targeted by OLLA, but it may not know ρ, the inter-bit correlation. Hence, (16) reduces to
maxρ pρ(y|bi = 0)
maxρ pρp(y|bi = 1) ≥ β
1 − β . (46)
Note that the ρ that maximizes pρ(y|bi = 0) and pρ(y|bi = 1) may be different. Similarly, we
can rewrite (17) by replacing Ψ1 by ρ. We draw ρ ∈ {0, 0.1, 0.3, 0.5, 0.7, 0.9}. Pave = SNRth
and Pmax as a function of ρ for p = 0.9 with three different TF + PS combinations are plotted
in Fig. 10a and 10b respectively for both Bitwise UEP and MLM GLRT receivers. On average,
MLM GLRT leads to 0.33 dB degradation compared to Bitwise UEP across all ρ and δ. Even
with δ = 4 dB, the binary TF codebook obtains a 1 − 2 dB reduction in Pmax and a 2 − 5
dB improvement in Pave. Furthermore, the performance degradation of MLM GLRT could be
reduced by utilizing a different β in (46) for each ρ.

30
IX. FADING CHANNEL RECEIVER RESULTS
Taking into account the practical considerations on the encoder side, in accordance with
the results presented in Section VIII, we will utilize a quantized transformer codebook for
(k, n) = (4, 32) with Step PS of 3 dB and a Bitwise UEP receiver7 . The transformer utilizes
A = 2 tokens of input length 2 each. We use a relatively low value of Step PS to ensure a
low power jump across OFDM symbols, if the DMRS is not power shaped and the DMRS and
data are time-division multiplexed on consecutive OFDM symbols. A Bitwise UEP receiver is
utilized in place of the more practical MLM GLRT receiver, with the understanding that MLM
GLRT will lead to 0.3−0.4 dB degradation for all receivers (excluding the ML baseline). This is
because imprecise computations of the codeword likelihoods p(y|Hm) will require the utilization
of different β values for different algorithms, which could be hard to analyze with MLM GLRT
also being utilized.
A. NR Compliant Uplink Transmission
Consider a SIMO setup with Nr = 4 receive antennas. We simulate PUCCH format 2 [30]
over 1 RB and 2 OFDM symbols. The frame structure is depicted in Fig. 11. The transmission
consists of 24 REs, with 8 DMRS REs (shown in red) and 16 data REs (shown in blue). Since
PUCCH Format 2 is modulated using QPSK, n = 32 coded bits are mapped to 16 QPSK symbols
and the need for rate matching is alleviated. The QPSK symbols are scaled by √αm and mapped
to the 16 data REs on the OFDM grid. The DMRS symbols are set to 1, scaled by √βm and
mapped to the 8 DMRS REs on the OFDM grid.
Remark 4: In NR, QPSK is transmitted using OFDM waveform while π/2-BPSK is transmitted
using DFT-s-OFDM in uplink. While we assume QPSK modulation and hence directly place
the coded symbols onto the OFDM grid (without transform precoding [30]), it is possible that
6G and beyond could use DFT-s-OFDM with other modulation schemes, hence we restrict our
evaluations to the quantized transformer codebook to ensure low PAPR.
B. Computing receive SNR and noise variance in practice
While we can assume genie knowledge of SNR and NV in simulation, these will have to be
computed from reference signals in practice. For computing the SNR, we have two options: it
7k = 4 was determined to be the most common value for HARQ-ACK in external discussions with other companies.

31
Fig. 11. PUCCH Format 2 showing placement and value of data and DMRS REs
can be estimated from the DMRS REs, or we can assume a nominal value. Given only 8 DMRS
REs, the SNR estimated from the DMRS may have high variance. Hence we assume a fixed
nominal SNR at the receiver (irrespective of the actual received SNR). In Appendix F, we will
present empirical evidence that demonstrates minimal degradation from overestimation of the
received SNR. Since PUCCH performance gains are to be obtained at low SNR i.e. < 0 dB,
we will fix the nominal SNR to SNRn = 0 dB. Given that the DMRS is shaped, for hypothesis
Hm, the hypothesized nominal SNR is βmSNRn.
Estimating NV can be performed subsequent to channel estimation. Per Rx antenna, we can
estimate E[n2
l ] = ∥yp,l − hˆp,l ⊙ cp,l∥2
2/Np, and average E[n2
l ] over all receive antennas to obtain
an estimate of NV.
C. Channel Estimation
We will be required to perform ChEST as part of receiver processing in case of the coherent
receiver designs. As derived in Section VI-B, we can express μd,l in (27) as an elementwise
product of the LMMSE channel estimate Wmyp,l and the hypothesized codeword cm. Since the
LMMSE channel estimate assumes knowledge of Rhh, which is obtained from channel statistics,
it is not realizable in practice. Hence, we employ Robust MMSE (RMMSE) channel estimation
[32] which assumes a uniform power delay profile (PDP) between 0 and τds,est to estimate Rhh,
where τds,est can be estimated from reference signals. For our simulations, we employ the TDL-C

32
[28] channel model with a RMS delay spread of 300 ns. In RMMSE ChEST, we set τds,est = 500
ns to filter out the noise taps since the operating SNR is low.
Since the DMRS is shaped, the SNR used for ChEST is βmSNRn for hypothesis Hm. As
discussed in Section IX-B, minimal degradation is incurred from overestimating the SNR. Given
that we utilize Step PS, we use β−1SNRn as the ChEST SNR, where β−1 is the DMRS power
scaling associated with the all-NACK codeword, in order to consistently overestimate the SNR.
Remark 5: Since we are evaluating over 1 RB, we can also consider the channel to be approxi
mately frequency flat and set all entries of Rhh to be 1 while performing ChEST with negligible
performance degradation.
D. Comparing coherent and noncoherent receiver designs
In Fig. 12a, we plot SNRth vs ρ for various schemes under a fading channel (TDL-C 300 ns).
The NR + ML baseline is a correlator based decoder i.e. we compute Re(P
l yH
d,l(ˆhd,l ⊙ cm))
for each hypothesized codeword cm and find the codeword that maximizes the correlation. Since
the ML decoder is unimpacted by ρ, SNRth is around 0.2 dB for all ρ. This is the coherent ML
decoder that would be utilized in practice. However, the optimum codeword ML decoder would
be noncoherent and involve computing p(yl|Hm) using (20) and then finding the codeword index
m∗ = arg mmax p(Y|Hm). (47)
This improves SNRth by 2 dB. If we utilize the Bitwise UEP receiver in place of the codeword
ML decoder, having computed p(yl|Hm) optimally, a further 1 dB improvement in SNRth is
obtained. Finally, a 1 dB improvement can be obtained from Step PS with δ = 3 dB and 0.5−0.7
dB gain can be obtained from employing the TF-based encoder. Note that δ = 3 dB is a very
pessimistic value, and further gains can be obtained from PS by increasing δ, while ensuring
Pmax is less than SNRth of the NR + ML baseline. Since the optimal coherent and noncoherent
decoder are theoretically identical, we confirm via simulation that the SNRth obtained from
both line up. Replacing the optimal coherent decoder by its low complexity approximation from
Section VI-C leads to a minimal degradation of 0.3 dB for both TF and NR.
E. Impact of DMRS Power Shaping
In Fig. 12b, we investigate the impact of setting βm = 1 (Const. Power DMRS) vs βm = αm
(Shaped DMRS). We observe that utilizing a constant power DMRS over the shaped DMRS

33
(a) Comparing Optimal Noncoherent, Coherent and Low Complexity Coherent Receiver Design.
(b) Impact of DMRS power shaping on Optimal Noncoherent Receiver performance.
Fig. 12. Fading Receiver Design Results
leads to a ∼ 0.3 dB degradation for TF + Step PS and ∼ 0.1 dB degradation for NR + Step PS.
By shaping the DMRS, we are effectively increasing the separation between the (data + DMRS)
codewords cp+d,m, and hence the shaped DMRS scheme outperforms. Furthermore, shaping the
DMRS power reduces the power variation in the transmitted signal and prevents RF issues.
X. CONCLUSIONS AND FUTURE DIRECTIONS
Since NR channel codes have been designed assuming a uniform source prior, they are
unable to exploit the biased HARQ-ACK source prior which arises from the PDSCH BLER
being maintained under 10%. In this paper, we make fundamental contributions to joint source
and channel coding (and modulation) for HARQ-ACK bits transmitted in the uplink. On the
encoder side, we propose a non-linear transformer-based codebook to exploit the source prior.
Furthermore, we demonstrate how assigning less power to more frequently seen codewords and
vice-versa can lower the SNR required to achieve the target error rates. On the decoder side,
we propose the first extension of the Neyman Pearson test to a coded bit system with multiple
information bits to preferentially protect NACK over ACK. This further lowers the SNR needed
to achieve a NACK and ACK error rate of 0.1% and 1% respectively. For both the encoder
and decoder, we propose methods to lower complexity and improve robustness to small changes
and/or partial knowledge of the HARQ-ACK distribution. Finally, we present comprehensive
end-to-end NR-compliant simulations in an uplink SIMO setup and develop the receiver from

34
first principles to demonstrate the effectiveness of JSCC for HARQ-ACK. By obtaining 3 – 6 dB
reduction in average transmit power and 2 – 3 dB reduction in the maximum transmit power over
the NR baseline while accounting for practical constraints, our approach provides for significant
power savings and coverage gains.
As part of future work, a single codebook can be designed that works for a range of (k, n)
values, akin to the generator matrix used in [7]. While we presented results for two k values,
k = 4 and k = 11, and designed a separate transformer for each, having a single codebook for
3 ≤ k ≤ 11 would be desirable. In this paper, we restrict ourselves to JSCC for HARQ-ACK.
However, one could extend this approach to exploit temporal correlation in downlink control
information. Furthermore, for larger payloads k > 11, an ML/MAP decoder would become
computationally infeasible, hence an AI based encoder would have to be coupled with an AI
based decoder to ensure manageable computational complexity. We hope that the first principles
based approach taken in this paper can inspire further innovation in the development of practical
AI/ML based enhancements to the PHY layer for 6G and beyond.
XI. ACKNOWLEDGMENTS
The authors would like to thank Peter Gaal, Mike McCloud, Brian Banister and Hari Sankar
for their valuable inputs and constructive feedback over the course of this project.
REFERENCES
[1] A. Doshi, P. Sen, K. Ivanov, W. Yang, J. Namgoong, T. Yoo, J. Jiang, and T. Ji, “AI/ML Based Encoder and Decoder
Design for PUCCH HARQ-ACK Payload,” in Proc., Intl. Symposium on Topics in Coding (ISTC), Sep. 2025, pp. 1–5.
[2] I. Csiszar and J. Korner, Information Theory: Coding Theorems for Discrete Memoryless Systems. Cambridge University
Press, Jun. 2011.
[3] 3GPP, “ NR; Requirements for support of radio resource management,” 3rd Generation Partnership Project (3GPP),
Technical Specification (TS) 38.133, Oct. 2018, version 15.3.0.
[4] ——, “Base Station (BS) radio transmission and reception,” 3rd Generation Partnership Project (3GPP), Technical
Specification (TS) 38.104, Jul. 2020, version 16.4.0.
[5] G. Marcus, “Deep learning: A critical appraisal,” arXiv preprint arXiv:1801.00631, Jan. 2018.
[6] M. Welling, “Do we still need models or just more data and compute,” University of Amsterdam, vol. 7, Apr. 2019.
[7] 3GPP, “NR; Multiplexing and Channel Coding,” 3rd Generation Partnership Project (3GPP), Technical Specification (TS)
38.212, Jul. 2020, version 17.5.0.
[8] D. Gu ̈ndu ̈z, M. A. Wigger, T.-Y. Tung, P. Zhang, and Y. Xiao, “Joint source–channel coding: Fundamentals and recent
progress in practical designs,” Proc. IEEE, Nov. 2024.
[9] J. Hagenauer, “Source-controlled channel decoding,” IEEE Trans. on Communications, vol. 43, no. 9, pp. 2449–2457, Sep.
1995.

35
[10] A. Murad and T. E. Fuja, “Joint source-channel decoding of variable-length encoded sources,” Jun. 1998, pp. 94–95.
[11] M. Jeanne, J.-C. Carlach, and P. Siohan, “Joint source-channel decoding of variable-length codes for convolutional codes
and turbo codes,” IEEE Trans. on Communications, vol. 53, no. 1, pp. 10–15, Feb. 2005.
[12] D. A. Huffman, “A method for the construction of minimum-redundancy codes,” Proceedings of the IRE, vol. 40, no. 9,
pp. 1098–1101, Sep. 1952.
[13] J. Ziv and A. Lempel, “A universal algorithm for sequential data compression,” IEEE Trans. on Info. Theory, vol. 23,
no. 3, pp. 337–343, May 1977.
[14] M. Fresia, F. P ́erez-Cruz, and H. V. Poor, “Optimized concatenated LDPC codes for joint source-channel coding,” in Proc.,
IEEE Intl. Symposium on Information Theory, Jun. 2009, pp. 2131–2135.
[15] Y. Dong, K. Niu, J. Dai, S. Wang, and Y. Yuan, “Joint source and channel coding using double polar codes,” IEEE
Communications Letters, vol. 25, no. 9, pp. 2810–2814, Jun. 2021.
[16] B. Liu, A. Valcarce, and K. P. Srinath, “A Lossless Compression Technique for the Downlink Control Information Message,”
in Proc., IEEE Signal Proc. Adv. in Wireless Comm. (SPAWC), Sep. 2024, pp. 86–90.
[17] M. Goyal, K. Tatwawadi, S. Chandak, and I. Ochoa, “Deepzip: Lossless data compression using recurrent neural networks,”
arXiv preprint arXiv:1811.08162, Nov. 2018.
[18] C. Johnson, 5G New Radio in Bullets. Independently Published, Jul. 2019.
[19] A. Vaswani, N. Shazeer, N. Parmar, J. Uszkoreit, L. Jones, A. N. Gomez, Ł. Kaiser, and I. Polosukhin, “Attention is all
you need,” Adv. in Neural Info. Process. Systems, vol. 30, Dec. 2017.
[20] R. Xiong, Y. Yang, D. He, K. Zheng, S. Zheng, C. Xing, H. Zhang, Y. Lan, L. Wang, and T. Liu, “On layer normalization
in the transformer architecture,” in Intl. Conf. on Machine Learning (ICML), Apr. 2020, pp. 10 524–10 533.
[21] 3GPP, “NR; Physical layer procedures for control,” 3rd Generation Partnership Project (3GPP), Technical Specification
(TS) 38.213, Feb. 2024, version 17.8.0.
[22] A. Van Den Oord, O. Vinyals et al., “Neural discrete representation learning,” Adv. in Neural Info. Process. Systems,
vol. 30, 2017.
[23] F. Mentzer, D. Minnen et al., “Finite scalar quantization: Vq-vae made simple,” Proc. ICLR, Jan. 2024.
[24] I. E. Richardson, Entropy Coding. John Wiley & Sons, Sep. 2024.
[25] F. D. Neeser and J. L. Massey, “Proper complex random processes with applications to information theory,” IEEE Trans.
on Info. Theory, vol. 39, no. 4, pp. 1293–1302, Aug. 2002.
[26] M. K. Steven, “Fundamentals of statistical signal processing,” PTR Prentice-Hall, Englewood Cliffs, NJ, Mar. 1993.
[27] J. Hagenauer, “Iterative (turbo) decoding of systematic convolutional codes with the MAP and SOVA algorithms,” Proc.
ITG Tagung, Coding for Source, Channel and Transmission, pp. 21–29, 1994.
[28] 3GPP, “Study on channel model for frequencies from 0.5 to 100 GHz,” 3rd Generation Partnership Project (3GPP),
Technical Report (TR) 38.901, Nov. 2020, version 16.1.0.
[29] M. L. Eaton, “Multivariate Statistics: A Vector Space Approach,” IMS Lecture Notes Monogr. Ser, vol. 53, p. 512, 2007.
[30] 3GPP, “NR; Physical Channels and Modulation,” 3rd Generation Partnership Project (3GPP), Technical Specification (TS)
38.211, Oct. 2023, version 17.5.0.
[31] J. Tobin, R. Fong, A. Ray, J. Schneider, W. Zaremba, and P. Abbeel, “Domain randomization for transferring deep neural
networks from simulation to the real world,” in IEEE Intl. Conf. on Intelligent Robots and Systems, Sep. 2017, pp. 23–30.
[32] Y. Li, L. J. Cimini, and N. R. Sollenberger, “Robust channel estimation for OFDM systems with rapid dispersive fading
channels,” IEEE Trans. on Communications, vol. 46, no. 7, pp. 902–915, Aug. 2002.

36
APPENDIX
A. Bitwise UEP for 1 bit
Consider the transmission of 1 bit, such that ACK is transmitted as +√P1 and NACK as
−√P0. Since k = 1, we can rewrite the decoding rule in (14) as
− ∥y + √P0∥2
2σ2 ≥ ln β
1 − β − ∥y − √P1∥2
2σ2 . (48)
Observe that the ∥y∥2 cancels out, so that we can rewrite (48) as
y≤
√P1 − √P0
2 + σ2
√P1 − √P0
ln β
1 − β . (49)
Hence, in the 1-bit case, the Bitwise UEP decoder simply reduces to comparing y with a (SNR
dependent) threshold γ(SNR). Given a target NACK error rate P (ACK|NACK) = Q(γ(SNR)+
pP0/σ2) = δ0, the entire RHS in (49) must equal Q−1(δ0) − pP0/σ2, and hence β can be
computed as a function of SNR and δ0.
B. Learnt PS - Training and Results
In Section III, the output of the transformer-based encoder is normalized to ensure that
∥cm∥2
2 = n/2 ∀m. In order to learn both the power shaping and codebook jointly, we could
choose not to normalize the output as briefly mentioned in Section I-B. In other words, let us
denote the output of the transformer prior to normalization as cu,m (assume no quantization).
We input all the message sequences m ∈ [2k] to the transformer to obtain the (unnormalized)
codebook Cu = {cu,m}m. Given prior Π, we then scale each codeword by √κΠ such that
κΠ
X
m∈[2k ]
πm∥cu,m∥2
2 = n/2. (50)
We then replace √αmcm in Algorithm 1 by √κΠcu,m, and the remainder of the training process
remains unchanged. If we set N = 1 and train on (p, ρ) = (0.9, 0), we will converge to the
Learnt PS depicted in Fig. 7. If we perform free-lunch training as desrcibed in Section VII-D,
the PS learnt (labeled Robust PS) is very similar to Arithmetic PS and is depicted in Fig. 13 for
p = 0.9 and ρ = {0, 0.5, 0.9}.

37
(a) ρ = 0 (b) ρ = 0.5 (c) ρ = 0.9
Fig. 13. αm as a function of πm for Robust and Arithmetic PS.
(a) β = 0.5 (b) β = 0.25 (c) β = 0.091
Fig. 14. Impact of varying β on ACK and NACK BER
C. Impact of varying β on SNRth
In Section V-A, we presented an empirical rule for setting β as per (15). Fig. 14 illustrates
the impact of varying β. If β = 0.5 =⇒ β/(1 − β) = 1, then both ACK and NACK are equally
protected, hence their BER curves coincide in Fig. 14a. As we lower β to 0.25, NACK begins
to achieve a lower BER than ACK in Fig. 14b. However, we observe that the SNR required to
achieve a 0.1% NACK BER is higher than that required to achieve 1% ACK BER. Finally, at
β = 1/11 in Fig. 14c, we observe that the two aforementioned SNRs coincide, which implies
that this value of β minimizes SNRth. Furthermore, we observe that BERNACK/BERACK = 0.1
for a band of SNRs around SNRth. Similarly, we observe that the BER ratio is 1/3 and 1 in
Fig. 14b and 14a respectively. We observed this to be true for other values of p as well, hence
we arrived at the rule in (15).

38
D. Derivation of (25)
Note that Σ11 = ε2g2E[hd,lhH
d,l] (l is the receiver antenna index), from which the formula for
Σ11 in (25) follows. To compute Σ12, we have
Σ12 = εgE[hd,lyH
p,l]
= εgE[hd,lε(gpβmhp,l ⊙ 1Np + np,l)H ]
= ε2g2pβmRhdhp ,
(51)
since hd,l and np,l are independent and zero mean. Finally, to compute Σ22, we have
Σ22 = E[yp,lyH
p,l]
= E[ε(gpβmhp,l ⊙ 1Np + np,l)ε(gpβmhp,l ⊙ 1Np + np,l)H ]
= ε2g2βmRhphp + ε2σ2INp .
(52)
E. Derivation of (36)
We start from the definition of Wm in (28). Substituting for flat fading and applying the
matrix inversion lemma as stated in (1) with U = βmSNR1Np and V = 1T
Np, we have
Wm = 1Nd 1T
Np βmSNR INp − 1Np 1T
Np 1
βmSNR + Np
. (53)
Substituting (53) in the definition of Σd,l in (27) and simplifying, we obtain
Σd,l = NV INd + αm
βmNp + 1
SNR
cmcH
m . (54)
To compute detΣd,l, we apply det to (54) and utilize the identity det(I + AB) = det(I + BA)
as
det INd + αm
βmNp + 1
SNR
cmcH
m = 1 + αmNd
βmNp + 1
SNR
(55)
to obtain the formula in (36), noting that ∥cm∥2
2 = Nd. In order to compute ∆2(yd,l, μd,l), we
evaluate the inverse of (54) using (1) with U = αmSNR
1+βmNpSNR cm and V = cH
m to obtain
Σ−1
d,l = 1
NV INd − αm
αmNd + βmNp + 1
SNR
cmcH
m . (56)
Substituting (56) in the definition of ∆2(yd,l, μd,l) in (35), we obtain its expansion as provided
in (36).

39
Fig. 15. ChEST MSE vs. ChEST SNR. DMRS Spacing of 3 REs and 2 OFDM symbol transmission is assumed.
F. Impact of varying ChEST SNR on RMMSE ChEST
In order to understand the impact of varying the nominal SNR, we plot the ChEST MSE as
a function of the SNR assumed in ChEST. We fix the channel SNR i.e. the true SNR to −3
dB and vary the ChEST SNR from -20 to 10 dB. Assuming RMMSE ChEST, the ChEST MSE
can be computed analytically [32] and is plotted in Fig. 15. While underestimating the SNR by
15 dB degrades the MSE by 5 dB, overestimating the SNR by up to 15 dB only causes 0.8 dB
of degradation. Hence, we conclude that when the true SNR is low i.e. SNR < 0 dB, there is
a negligible downside to overestimating the ChEST SNR. Since PUCCH is typically tested in
low SNRs, we set the ChEST SNR SNRn to 0 dB.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:43.960Z
- **Text Length:** 75190 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 39 of 39
