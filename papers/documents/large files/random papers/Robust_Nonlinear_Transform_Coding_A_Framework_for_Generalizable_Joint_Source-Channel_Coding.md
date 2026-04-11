# PDF Document: Park et al. - 2025 - Robust Nonlinear Transform Coding A Framework for Generalizable Joint Source-Channel Coding.pdf

**File Path:** Park et al. - 2025 - Robust Nonlinear Transform Coding A Framework for Generalizable Joint Source-Channel Coding.pdf

**Processed Date:** 2026-02-10T18:13:36.434Z

**File Size:** 1668.58 KB

**Total Pages:** 13

**Extracted Pages:** 13

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3281

**Title:** Robust Nonlinear Transform Coding: A Framework for Generalizable Joint Source-Channel Coding

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

1
Robust Nonlinear Transform Coding: A Framework
for Generalizable Joint Source-Channel Coding
Jihun Park, Junyong Shin, Jinsung Park, and Yo-Seb Jeon
Abstract—This paper proposes robust nonlinear transform coding (Robust-NTC), a generalizable digital joint source-channel coding (JSCC) framework that couples variational latent modeling with channel adaptive transmission. Unlike learning-based JSCC methods that implicitly absorb channel variations, Robust-NTC explicitly models element-wise latent distributions via a variational objective with a Gaussian proxy for quantization and channel noise, allowing encoder-decoder to capture latent uncertain-
ty without channel-specific training. Using the learned statistics, Robust-NTC also facilitates rate-distortion optimization to adaptively select element-wise quantizers and bit depths according to online channel condition. To support practical deployment, Robust-NTC is integrated into an orthogonal frequency-division multiplexing (OFDM) system, where a unified resource allocation framework jointly optimizes latent quantization, bit allocation, modulation order, and power allocation to minimize tr-
ansmission latency while guaranteeing learned distortion targets. Simulation results demonstrate that for practical OFDM systems, RobustNTC achieves superior rate-distortion efficiency and stable reconstruction fidelity compared to digital JSCC baselines across wide-ranging SNR conditions.
Index Terms—Joint source-channel coding, nonlinear transform coding, semantic communication, orthogonal frequency-division multiplexing (OFDM).
I. INTRODUCTION
Joint source-channel coding (JSCC) has emerged as a powerful paradigm for achieving efficient and adaptive communication under practical constraints on latency, reliability, and coding resources. By jointly optimizing the source and channel coding processes within a unified rate-distortion framework, JSCC overcomes the fundamental limitations of the classical separation principle, whose theoretical optimality holds only in the asymptotic regime of infinite block lengths [1], [2]. In practical scen-
arios, where finite block lengths and computational restrictions limit the effectiveness of channel codes [3], entropy-coding-based source compression [4]–[6] becomes highly vulnerable to transmission errors, as even a single bit flip can lead to catastrophic decoding failures. This fragility, combined with the mismatch between compression rate and channel reliability, results in severe degradation of end-to-end performance in separated coding systems. Early studies have addressed these issues by -
formulating analytical rate-distortion optimization problems under idealized source distributions such as Gaussian or Laplacian models [7]–[10].
Jihun Park, Junyong Shin, Jinsung Park, and Yo-Seb Jeon are with the Department of Electrical Engineering, POSTECH, Pohang, Gyeongbuk 37673, South Korea (e-mail: jihun.park@postech.ac.kr; sjyong@postech.ac.kr; jinsung@postech.ac.kr; yoseb.jeon@postech.ac.kr).
Analog JSCC schemes [7], [8] directly map continuous source signals onto channel waveforms, providing robustness without explicit coding but lacking compatibility with digital systems. Digital JSCC approaches [9], [10] incorporate quantization for discrete transmission and derived optimal quantizers for noisy channels. While fundamental, these classical methods are largely theoretical and lack the capability to handle the complexity of high-dimensional, real-world data. Recent advances in deep lea-
rning have enabled learningbased JSCC approaches, which directly learn from realistic data distributions rather than relying on predefined analytical models [11]–[13]. The common idea of the learning-based JSCC approaches is to adopt end-to-end optimization to minimize taskspecific distortion under stochastic channel conditions. Based on this idea, autoencoder-based JSCC architectures for image transmission have been studied in [13]–[15], where an image is encoded into a compact latent representat-
ion, transmitted through a noisy channel, and reconstructed by a neural decoder. The work in [13] introduces foundational DeepJSCC model which offers a remarkable advantage in transmitting small images over short block lengths, outperforming traditional separated schemes. Following this, the work in [14] formulates the communication process within a variational autoencoder (VAE) framework, interpreting the channel as a stochastic sampling operation. This formulation reveals that the VAE loss funct-
ion naturally upper-bounds the rate-distortion objective, enabling robust JSCC learning that generalizes across varying channel conditions. Subsequent research [15] introduces entropy-based feature-length adaptation, enabling variable-length transmission and achieving high reconstruction quality even for complex, high-resolution content. Despite these efforts, most existing DeepJSCC models [13]–[15] depend on gradient-based optimization in a continuous-valued signal space, making them difficult to-
 directly integrate with digital transceivers that rely on discrete constellations and quantized representations. To bridge this gap, digital-DeepJSCC frameworks have been developed by incorporating discrete operations into end-to-end learning pipelines, which are applied directly to the compressed latent representation, including quantization and modulation. Representative directions include scalar quantization [16]–[18], vector quantization with learned codebooks [19]–[21], and direct mapping of-
 latent features onto fixed QAM constellations [22]. These approaches improve compatibility with digital transceivers and narrow the gap between learned representations and realizable signaling. Despite this progress, a key practical bottleneck remains: many designs implicitly overfit to the
arXiv:2511.18884v1 [eess.SP] 24 Nov 2025

2
channel conditions encountered during training, making them sensitive to channel mismatch and often requiring retraining for new environments. To mitigate this issue, recent studies have introduced channel-adaptive mechanisms, including signal-to-noise (SNR) conditioned networks [21], [22] and adaptive transmission schemes that enforce pretrained bit-errorrate (BER) targets [17]–[19]. However, these methods rely on a fixed or limited set of quantization and modulation settings, making them subopti-
mal for diverse latent distributions across source samples and channels with large dynamic variation. Furthermore, most prior DeepJSCC frameworks rely on blackbox, data-driven training to implicitly learn channel adaptation. Such models must internalize an enormous number of channel realizations to generalize over varying conditions, leading to excessive model size, high training cost, and limited scalability. Consequently, achieving efficient and robust channel adaptation through pure end-to-end -
learning becomes increasingly impractical as channel dynamics and SNR variations grow. Fundamentally, most existing DeepJSCC frameworks lack an explicit probabilistic model of the latent source distribution that governs the transmitted representation. Without such modeling, it becomes difficult to analytically characterize the latent-level distortion caused by quantization and channel perturbations, which influences end-to-end performance [11], [19] and must be accurately evaluated for effective r-
ate-distortion optimization. In contrast, classical JSCC studies [7]–[10] achieve analytical optimization by assuming simplified yet tractable source distributions. To realize efficient rate-distortion optimization under realistic and diverse channel conditions, two key requirements arise. First, the framework must learn a probabilistic latent model that provides an interpretable representation of high-dimensional data, allowing it to approximate a tractable source distribution that captures both -
statistical variability and distortion sensitivity of individual latent elements. Such modeling enables transmission parameters to be optimized based on analytical relationships rather than purely empirical fitting. Second, the inferred latent distributions must be efficiently shared and consistently interpreted between the transmitter and receiver to ensure coherent probabilistic inference and reliable reconstruction under dynamically varying channel conditions. This paper introduces robust nonli-
near transform coding (Robust-NTC), a generalizable digital JSCC framework that achieves rate-distortion-based adaptive transmission by decoupling representation learning from specific channel conditions. Building on the principle of nonlinear transform coding (NTC) [5], Robust-NTC formulates the latent representation as a set of probabilistic variables whose parameters explicitly capture element-wise uncertainty and distortion sensitivity. A Gaussian-proxy formulation is introduced within a varia-
tional learning framework, allowing the model to learn latent statistics that reflect quantization- and channel-induced variations without assuming any channel model during training. To ensure consistent probabilistic inference between the transmitter and receiver, the framework further incorporates a shared hyperprior [5] that transmits compact side information representing the latent mean and variance with negligible overhead. During
transmission, a distortion-matching strategy exploits the learned statistics to determine, for each latent element, the optimal quantizer and bit depth that satisfy its target distortion under the realized channel state. Finally, the framework is implemented within a standards-compliant orthogonal frequency-division multiplexing (OFDM) transceiver, where a unified optimization procedure jointly allocates quantization bits, modulation order, subcarrier power, and symbol resources. Through this inte-
gration, Robust-NTC achieves scalable and efficient channel adaptation, minimizing OFDM symbol consumption while maintaining distortion-consistent reconstruction quality across diverse fading and SNR conditions. The main contributions of this paper are summarized as follows:
• We propose a generalizable digital JSCC framework that decouples representation learning from specific channel conditions and enables adaptive transmission control through rate-distortion-based optimization. • We develop a variational latent modeling formulation in which both quantization and channel corruption are represented as Gaussian proxy perturbations. This formulation allows the network to learn element-wise latent distributions that encode uncertainty and distortion sensitivity without -
assuming any specific channel model. A shared hyperprior is incorporated to transmit compact side information, ensuring consistent probabilistic inference between the transmitter and receiver. • We introduce a distortion-matching adaptation mechanism that optimizes the quantizer and bit depth of each latent element according to the learned distortion statistics and instantaneous channel conditions. This mechanism enables channel-adaptive rate-distortion control without retraining, achieving effici-
ent and reliable adaptation across diverse SNRs. • We extend the proposed framework to a standards-aligned OFDM transceiver by formulating a cross-layer ratedistortion optimization problem that minimizes the number of required OFDM symbols while satisfying latentlevel distortion constraints. The proposed solution jointly optimizes latent quantization, bit allocation, subcarrier modulation, and power allocation. To solve this problem efficiently, we design a two-stage algorithm that separately hand-
les source-side distortion-aware bit allocation and channel-side modulation-power adaptation. • We provide comprehensive experimental validation on CIFAR-10 and STL-10 datasets under 3GPP TDL-C fading channels [23]. The results demonstrate that RobustNTC achieves superior reconstruction quality and rate efficiency compared to existing digital DeepJSCC methods, while maintaining strong robustness to frequencyselective fading and stable performance across diverse SNR conditions.
II. SYSTEM MODEL AND PRELIMINARY ANALYSIS
This section formalizes the general digital communication system model, details the end-to-end JSCC pipeline, and

3
provides a preliminary analysis that forms the basis of our framework.
A. System Model
We consider a JSCC system operating over a digital communication link. At the transmitter, the source image x ∈ RC×H×W is processed by a nonlinear analysis transform ga(x; φg), which generates a latent vector y = [y1, . . . , yN ]T ∈ RN representing the semantic features of the input. Since the latent variables are continuous-valued, they must be quantized prior to digital transmission. Each element yi is quantized by a scalar quantizer Qi(·), which partitions the real line into Li disjoint interv-
als: Ii,l = (Ti,l−1, Ti,l], for l ∈ {1, . . . , Li}, where Ti,0 = −∞ and Ti,Li = +∞ denote the boundary values, and Ti = {Ti,1, . . . , Ti,Li−1} represents the set of quantization thresholds. Unlike entropy-coded compression methods such as JPEG or NTC [5] that use variable-length codes and are highly sensitive to channel errors, our framework adopts fixedlength codeword mapping as in prior JSCC approaches [9], [10]. Let ui,l ∈ {0, 1}bi be a binary codeword associated with the interval Ii,l, such -
that Li ≤ 2bi. Formally, the output of the scalar quantizer is expressed as
ci , Qi(yi) =
Li
∑
l=1
ui,lI(yi ∈ Ii,l), (1)
where I(·) is the indicator function. By concatenating {ci}iN=1, the transmit bitstream is obtained as
c = Concat(c1, . . . , cN ). (2)
In the digital communication framework, the bitstream c is conveyed through a noisy channel, which we model as a stochastic transfer function. Specifically, the received sequence is given by
ˆc = W(c; η), (3)
where W(·; η) denotes the channel transfer function parameterized by η, which captures the effects of system parameters such as noise statistics, fading statistics (e.g., Rayleigh fading or multipath propagation in OFDM), transmit power, modulation, and coding schemes. The transition probability associated with the channel transfer function is expressed as
pˆc|c(ˆc|c) = Pr[W(c; η) = ˆc] . (4)
At the receiver, the corrupted codeword cˆi is mapped to a reconstruction level Ri,q from the codebook Ri = {Ri,1, Ri,2, . . . , Ri,2bi }:
yˆi , Q−1
i (ˆci) =
2bi ∑
q=1
Ri,qI(ˆci = uˆi,q), (5)
where uˆi,q ∈ {0, 1}bi denotes the received binary codeword associated with the reconstruction level Ri,q. The latent estimate yˆ = [yˆ1, . . . , yˆN ]T is converted back to the image domain
by the nonlinear synthesis transform gs(yˆ; θg), yielding the reconstructed image
ˆx = gs(yˆ; θg) ∈ RC×H×W . (6)
The overall end-to-end pipeline depends not only on the quantizer design for each latent element, but also on the choice of channel parameters η. These aspects, including optimal quantizer construction and channel-aware parameter optimization, will be discussed in the sequel.
B. Distortion Analysis
In general, the end-to-end performance of DeepJSCC is primarily influenced by the distortion of the compressed latent representation [11], [19]. Motivated by this observation, we initiate our analysis by characterizing the expected meansquared error (MSE) of individual latent elements as:
Di , E[(yi − yˆi)2] , i ∈ {1, . . . , N }. (7)
In general, analyzing the distortion induced by the channel transfer function W(·; η) is challenging because the reconstruction error depends on the joint distribution of bit errors across an entire codeword. To obtain a tractable model, we approximate the channel transfer function by a bank of parallel binary symmetric channels (BSCs). Accordingly, the transition probability for the codeword ci is given by
pˆci|ci (ˆci|ci) = Pr[W(ci; η) = cˆi]
≈
bi
∏
j=1
ǫ I(ci,j 6=cˆi,j )
i,j (1 − ǫi,j ) I(ci,j =cˆi,j ), (8)
where ǫi,j ∈ [0, 1/2] denotes the bit-flip probability of the j-th bit in ci. Under the above model, the transmission chain for a latent element can be described as
yi
Qi
−−−−−−→
quantization ci
BSC w/ ǫi
−−−−−−−→
channel errors cˆi
Q
−1 i
−−−−−−−→
dequantization yˆi, (9)
where ǫi = [ǫi,1, . . . , ǫi,bi ]T collects the bit-flip probabilities for the bi bits of ci. The expected distortion of the latent element yi is then expressed as
Di =
Li
∑
l=1
2bi ∑
q=1
P
(q ∣
∣ l; ǫi
)
∫
Ii,l
(y − Ri,q
)2pyi (y) dy, (10)
where pyi(y) is the probability density function of yi, and
P
(q ∣
∣ l; ǫi
)≈
bi
∏
j=1
ǫ I(u(j)
i,l 6=u(j)
i,q )
i,j (1 − ǫi,j ) I(u(j)
i,l =u(j)
i,q ), (11)
denotes the approximated probability that the codeword ui,l corresponding to region Ii,l is decoded as ui,q, with u(j)
i,l the j-th bit of ui,l.
III. ROBUST NONLINEAR TRANSFORM CODING FRAMEWORK FOR GENERALIZABLE JSCC
This section presents the Robust-NTC framework, integrating channel-optimized quantizers, variational modeling, and

4
distortion-matching with element-wise targets for robust endto-end communication.
A. Motivation
The distortion analysis in (10) reveals that the per-latent distortion is governed by three factors: (i) the latent source distribution pyi, (ii) the channel-induced flip probabilities ǫi, and (iii) the quantizer design, including the bit allocation bi, thresholds, reconstruction levels, and codeword mapping. These dependencies expose a limitation of prior digital DeepJSCC designs: a fixed quantizer [11], [16], [17] or a learnable codebook optimized for a fixed channel condition [19]–[21] is not o-
ptimal under varying channel conditions, and may result in excessive distortion under adverse conditions. Based on the above observations, we put forward the following design questions:
• How can quantizers and dequantizers be adaptively optimized for each channel realization while jointly accounting for heterogeneous feature distributions across sources and among latent elements within a source? • How can more informative latent features be prioritized in bit allocation and channel reliability (i.e., through the joint optimization of bi and ǫi) to enable efficient end-to-end communication? More specifically, what distortion level should be guaranteed for each latent element?
To address the above questions, we propose a Robust-NTC framework based on a joint modeling-and-control paradigm, which (i) learns distortion-aware latent statistics through variational learning (i.e., training period) and (ii) enforces elementwise distortion targets during transmission (i.e., inference period). The proposed framework enables end-to-end training without dependence on specific channel or codebook configurations, thereby facilitating adaptive quantizer design and distortion-consiste-
nt resource allocation across diverse channel conditions.
B. Optimal Quantizer Design for Noisy Channels via Gaussian Modeling
Formally, the optimal quantizer design problem for a given bit allocation bi and flip-probability vector ǫi is expressed as1
min
Ti, Ri
Li
∑
l=1
2bi ∑
q=1
P
(q ∣
∣ l; ǫi
)
∫
Ii,l
(y − Ri,q
)2pyi (y) dy. (12)
The formulation in (12) shows that the optimal thresholds and reconstruction levels depend on the latent source distribution pyi. Without an explicit and tractable model for pyi, the integral terms in (12) cannot be evaluated in closed form, making the optimization intractable—particularly when the design must
1The optimal quantizer design should jointly optimize both the quantization rule and the codeword mapping. However, since the search space of mappings is combinatorial and computationally intractable, we simplify the problem by optimizing thresholds and reconstruction levels from multiple random initializations and retaining the best converged solution.
be adapted across heterogeneous latent elements and varying channel conditions. To enable a tractable yet effective design, we introduce a Gaussian modeling assumption for each latent element, namely yi ∼ N (μi, σi2). The learning of the Gaussian latent structure
and the transmission of (μi, σi2) will be detailed in Sec. III-C. Under the Gaussian assumption, a key observation is that, for identical ǫi and bi, the optimal thresholds and reconstruction levels for yi are affine transforms of those for a normalized source y ̄ ∼ N (0, 1). Specifically, if {T ⋆
l }Li−1
l=1 and {Rq⋆}2bi
q=1
denote the optimal thresholds and reconstruction levels for y ̄, then the corresponding parameters for yi are {σiT ⋆
l + μi}Li−1
l=1
and {σiRq⋆ + μi}2bi
q=1, respectively. Therefore, without loss of generality, we can remove the index i from (12) and rewrite the optimization problem for the normalized Gaussian source y ̄ as
min
T ,R
L
∑
l=1
2b
∑
q=1
P
(q ∣
∣ l; ǫ)
∫
Il
(y ̄ − Rq
)2py ̄(y ̄) dy ̄, (13)
where b is the bit depth and ǫ denotes the channel condition. The design of scalar quantizers for Gaussian sources over BSCs has been extensively investigated [9], [10]. In particular, the approach in [9] extends the classical Lloyd-Max algorithm by incorporating channel transition probabilities into the centroid and boundary updates. However, unlike the noiseless case, this iterative process does not guarantee monotonic distortion reduction. To address this, [10] derives sufficient optimality con-
ditions and proposes an iterative procedure that converges to a locally optimal solution. We adopt the methodology in [10] and summarize the two alternating steps below.
• Thresholds update: For fixed reconstruction levels R, the optimal quantization regions I⋆
l partition the source domain to minimize the expected end-to-end distortion when mapping y ̄ to codeword ul:
I⋆
l=
{
y ̄ : E[(y ̄ − yˆ)2 | ul] ≤ E[(y ̄ − yˆ)2 | uj], ∀j 6= l
}
=
{
y ̄ : 2y ̄
(
E[yˆ | uj] − E[yˆ | ul]
)
≤ E[yˆ2 | uj] − E[yˆ2 | ul], ∀j 6= l
}
.
(14)
The optimal boundary T ⋆
l between two adjacent active
regions, I⋆
l and I⋆
l+1, is the point where the expected distortions are equal. This process identifies and discards “useless” codewords for which the corresponding partition region is empty, an effect that becomes more pronounced as the channel degrades.2
• Reconstruction levels update: For fixed thresholds T , the optimal reconstruction level for a received codeword ˆuq is given by the minimum mean square error (MMSE) estimate of y ̄ conditioned on ˆuq:
R⋆
q = E[y ̄ | uˆq]
2This motivates the setting L ≤ 2b in this work, since some codewords may become inactive under severe channel degradation.

5
Fig. 1. MSE performance of quantizer designs across different bit depths for various optimized-test flip probability pairs (ǫopt, ǫtest).
=
∑L
l=1 P (q ∣
∣ l; ǫ) ∫ Tl
Tl−1 y ̄ py ̄(y ̄) dy ̄
∑L
l=1 P (q ∣
∣ l; ǫ) ∫ Tl
Tl−1 py ̄(y ̄) dy ̄
=
∑L
l=1 P (q ∣
∣ l; ǫ) (φ(Tl−1) − φ(Tl))
∑L
l=1 P (q ∣
∣ l; ǫ) (Φ(Tl) − Φ(Tl−1)) , (15)
where φ(·) and Φ(·) denote the probability density function and cumulative distribution function of the normalized Gaussian distribution, respectively.
By iterating between these two update rules until convergence, we obtain a locally optimal quantizer. For each Gaussian latent yi ∼ N (μi, σi2), the resulting design yields a distortion that scales linearly with the source variance:
D⋆(σi2; b, ǫ) = σi2D⋆(1; b, ǫ), (16)
where D⋆(1; b, ǫ) denotes the MSE of the normalized Gaussian source under the quantizer optimized for (b, ǫ). Fig. 1 compares Lloyd–Max quantizers with channel-optimized quantizers across different bit depths. Across all tested channel conditions, the channel-optimized quantizers consistently achieve lower MSE than Lloyd-Max quantizers, whose distortion increases sharply with bit depth under channel noise. Moreover, for channel-optimized quantizers, the results show that higher flip probabilities -
require more quantization bits to attain the same distortion level, highlighting the need for channel-adaptive allocation. These observations imply that latent elements with larger variances σi2 must be assigned more bits to achieve the same distortion level, consistent with classical rate-distortion theory. At the same time, noisier channels demand additional resources to compensate for the increased probability of errors. Although D⋆(σ2; b, ǫ) → 0 as b → ∞, the required resources grow excessivel-
y. Hence, it is essential to define element-wise distortion targets that balance accuracy and efficiency under both source statistics and channel conditions. The following subsections introduce a variational framework that jointly learns the latent distribution and its distortion targets, together with matching schemes that ensure consistent alignment between training and inference.
C. Variational Learning of the Robust-NTC Framework
The proposed framework interprets the JSCC process within the paradigm of VAEs [24], by treating quantization [5] and channel noise [14] as stochastic sampling applied to the latent variables. Within this framework, the probabilistic generative and inference models are jointly optimized by minimizing the expected Kullback-Leibler (KL) divergence between the variational posterior and the true posterior:
min
φg ,θg
Ex∼p(x)
[
DKL
(q(yˆ|x) ∥
∥ p(yˆ|x))
]
, (17)
where x ∼ p(x) denotes the source distribution, q(yˆ|x) is the variational posterior, and p(yˆ|x) is the generative likelihood. To enable element-wise latent modeling and to exploit spatial dependencies among y, we enrich the latent representation with a hyperprior variable z, following the NTC methodology [5], [6]. Within this structure, each latent element yi is modeled as a Gaussian random variable whose mean–variance parameters are inferred from the hyperprior. A hyper-analysis transform z = h-
a(y; φh) extracts side information from the latent space, which is subsequently quantized by a uniform quantizer and entropy-coded. Owing to its negligible rate contribution, we follow the standard NTC assumption that the quantized latent ˆz can be transmitted error-free through channel coding and recovered via entropy decoding [15], [22]. To preserve differentiability during training, the uniform quantizer is replaced by the uniform noise proxy [4]:
 ̃z = z + nuni, nuni
i.i∼.d. U (− 1
2, 1
2
) , (18)
while at inference the deterministic quantizer zˆ = Quni(z) is applied consistently with entropy decoding. The hypersynthesis transform hs(·; θh) then estimates the element-wise Gaussian parameters (μ, σ2) for the latent variables:
(μ, σ2) =



hs( ̃z; θh), training (proxy)
hs(ˆz; θh), inference (uniform quantizer).
(19)
With the hyperprior in place, the KL objective extends to
min
φg ,φh,θg,θh
Ex∼p(x)
[
DKL
(q(yˆ,  ̃z|x) ∥
∥ p(yˆ,  ̃z|x))
]
, (20)
where the joint modeling of (yˆ,  ̃z) yields adaptive priors for the latent distribution. Expanding (20) gives
DKL
(q(yˆ,  ̃z|x) ∥
∥ p(yˆ, z ̃|x))
= Eq(yˆ, ̃z|x)
[
− log p(x|yˆ,  ̃z) − log p(yˆ| ̃z) − log p( ̃z)
]
+ const.,
(21)
where the first term is modeled by the squared reconstruction error under the assumption of N (x|ˆx, (2ρg)−1I), while the second and third terms represent the latent rate and the hyperprior rate, respectively. In particular, the hyperprior rate is defined as the convolution of the prior over the hyper-latent zj with a uniform distribution [4]:
pz ̃j |ψ(j) (z ̃j |ψ(j)) =
(
pzj |ψ(j) (ψ(j)) ∗ U (− 1
2, 1
2
)
)
(z ̃j), (22)

6
(a) System model (inference)
(b) Proxy model (training)
Fig. 2. System architecture of the proposed Robust-NTC: (a) overall system model and (b) proxy model for tractable optimization.
where ψ(j) denotes the parameters of the non-parametric density model pzj|ψ(j) that enables the entropy model for zj, and ∗ denotes the convolution operator.
In contrast to NTC, which models only the quantization distortion via a uniform-noise proxy under the assumption that the quantized latents of y are reliably transmitted [5], the proposed Robust-NTC approximates the non-differentiable transmission chain of y, encompassing quantization, channel errors, and dequantization. To this end, we introduce a Gaussian proxy for the corrupted latent, which enables differentiable variational training:
y ̃ = y + nG, nG ∼ N (0, σd2I), (23)
where σd2 is a nominal variance parameter. Without loss of
generality, we hereafter set σd2 = 1, since any scaling can
be absorbed into the latent variance σi2. Given the stochastic
parameters (μi, σi2) from the hyper-synthesis transform, the noisy latent can be further refined by the MMSE estimator:
y ̃MMSE,i = E[yi | y ̃i]
= μi + σi2
σi2 + 1
(y ̃i − μi
). (24)
This estimator removes the predictable component conditioned on (μi, σi2) and yields a posterior distribution of the form
p(yi | y ̃i) = N
(
y ̃MMSE,i, σi2
σi2 + 1
)
. (25)
Equivalently, the latent can be decomposed as
yi = y ̃MMSE,i +  ̃nG,i,  ̃nG,i ∼ N
(
0, σi2
σi2 + 1
)
, (26)
where the residual variance represents the our distortion proxy. This variance effectively reflects the combined impact of quantization and channel-induced flips in a quantizer-agnostic man
ner, and will be used as the target distortion during inference.3 Based on the Gaussian proxy in (23), the conditional prior of the noisy latent p(y ̃i| ̃z) can be expressed as the convolution of the latent Gaussian distribution with the proxy noise:
py ̃i| ̃z(y ̃i| ̃z) = (N (μi, σi2) ∗ N (0, 1)) (y ̃i)
=
(N (μi, σi2 + 1)) (y ̃i). (27)
The corresponding latent-rate term is given by
− log p(y ̃i| ̃z) = 1
2 log(2π(σi2 + 1)) +
(y ̃i − μi
)2
2(σi2 + 1) . (28)
The first term penalizes the predictive variance σi2, and the second term not only enforces consistency between y ̃i and its mean μi but also regularizes the deviation relative to the scale of σi2, thereby encouraging the latent distribution to adhere more closely to a Gaussian form. By integrating the preceding derivations, the Robust-NTC framework is optimized by minimizing the following rate-distortion Lagrangian:
LRNTC
= Ex∼p(x)
[(−λy log py ̃| ̃z(y ̃| ̃z) − λz log p ̃z( ̃z)) + d(x, xˆ)] , (29)
where λy controls the rate allocated to the latent representation, λz regulates the rate dedicated to side information, and d(x, xˆ) denotes the distortion function. Here, the reconstruction ˆx is obtained as
ˆx = gs(y ̃MMSE, μ, σ2; θg), (30)
where the hyperprior statistics (μ, σ2) are first fused with the refined latent y ̃MMSE through a lightweight multi-layer perceptron (MLP) before being passed to the synthesis transform gs(·; θg). The overall system architecture and the proxy-based relaxation adopted for tractable optimization are summarized in Fig. 2.
D. Distortion Matching-Based Adaptive Transmission
During inference, the proposed Robust-NTC framework operates in an adaptive manner by leveraging the statistical parameters (μ, σ2). These parameters encapsulate the element-wise uncertainty and serve as control variables for both quantization and transmission decisions. Given (μi, σi2), the transmitter selects the quantization configuration (bi, ǫi) and applies the corresponding channel-optimized quantizer such that the endto-end distortion does not exceed the Gaussian-proxy target defined in (26-
). Formally,
D⋆(σi2; bi, ǫi) ≤ σi2
σi2 + 1 , (31)
which is equivalently expressed (for σi2 > 0) as the normalized condition
D⋆(1; bi, ǫi) ≤ 1
σi2 + 1 , (32)
3This proxy serves as a conservative noise model, representing the worst-case distribution for a given distortion under the MSE criterion [1].

7
defining the distortion-matching rule for adaptive operation. This rule assigns higher bit depths and more reliable channels to high-variance latents, while low-variance latents are encoded with fewer bits for efficiency, achieving distortion-consistent and rate-efficient communication across varying channel conditions. By jointly adapting to source and channel statistics in real time, the proposed framework achieves scalable channelaware JSCC without re-training. The general applicability of the -
framework will be further demonstrated in the next section, where it is applied to a representative OFDM transmission model under practical conditions.
Remark 1 (Relaxation for negligible-variance latents): The condition in (32) implies that the right-hand side is less than 1 for all σi2 > 0, while D⋆(1; 0, ǫi) = 1 holds for any ǫi. As a result, the condition inherently enforces bi ≥ 1 even for latents with negligible variance. To prevent redundant bit allocation for such elements, we relax this constraint by setting bi = 0 whenever σi2 < δ, for a small threshold δ > 0. This relaxation is implicitly applied in all subsequent formulations.
IV. APPLICATION TO PRACTICAL OFDM SYSTEMS: ROBUST-NTC OVER OFDM
Building upon the Robust-NTC framework developed in the previous section, this section demonstrates its general applicability by integrating it into a practical OFDM system operating over frequency-selective fading channels.
A. Problem Formulation
In this subsection, we specialize the general digital JSCC model of Sec. II to an OFDM transmission setting. In this case, the channel operator W(·; η) is realized through OFDM modulation, resource mapping, subcarrier-dependent fading, and additive noise. As described in Sec. II-A, each latent element yi is quantized into a binary codeword ci ∈ {0, 1}bi, and the overall transmit bitstream is expressed as c. This bitstream is then segmented, mapped onto modulation symbols, and assigned to resource -
elements (REs) in the OFDM timefrequency grid. For OFDM symbol index t ∈ {1, . . . , Tsym} and subcarrier index k ∈ {1, . . . , Nsc}, the modulated symbol is denoted as
s[t, k] ∈ X2m , (t, k) ∈ Idata, (33)
where Idata denotes the set of REs carrying data, and X2m is a 2m-QAM constellation drawn from the candidate set
Xcand = {X4, X16, X64, X256}, (34)
with each constellation normalized such that E[|s[t, k]|2] = 1. Transmission power is adaptively allocated across subcarriers, with pt,k denoting the power allocated to subcarrier k of the
t-th OFDM symbol, under the constraint ∑Nsc
k=1 pt,k ≤ Ptot.
The modulated symbols are scaled accordingly,
s ̃[t, k] = √pt,k s[t, k], (35)
which are converted into the time domain using an Nsc-point IFFT and appended with a cyclic prefix (CP). At the receiver,
Fig. 3. OFDM transmission model with the associated optimization framework.
the CP is removed and an FFT is applied to reconstruct the frequency-domain received symbols. Let h[t, k] ∈ C denote the channel frequency response on subcarrier k of the t-th OFDM symbol. Assuming that the channel remains constant over a coherence interval larger than the transmission block, i.e., h[t, k] = hk for all t, the received signal at subcarrier k of symbol t is expressed as
r[t, k] = √pt,k hk s[t, k] + v[t, k], (36)
with v[t, k] ∼ CN (0, σ2). Perfect channel estimation is assumed at the receiver, and equalization is performed as
sˆ[t, k] = (√pt,k hk)−1r[t, k] (37)
= s[t, k] + (√pt,k hk)−1v[t, k], (38)
and the equalized symbols {sˆ[t, k]} are demodulated into bits and reassembled into a noisy bitstream cˆ, consistent with the general model ˆc = W(c; η).
In this scenario, the objective of the Robust-NTC framework is to minimize the required number of OFDM symbols Tsym while satisfying the distortion-matching criterion established in Sec. III-D. Let Q = {Ti, Ri}iN=1 denote the quantizer design,
b = [b1, . . . , bN ]T denote the element-wise bit allocation
vector, P ∈ RTsym×Nsc denote the power allocation matrix with [P]t,k = pt,k, M ∈ {0, 2, 4, 6, 8}Tsym×Nsc denote the modulation order matrix such that [M]t,k = mt,k, and Π denote the mapping from latent bits to OFDM REs. The optimization problem is then formulated as
min
Q, b, P, M, Π Tsym (39a)
s.t. E[(yi − yˆi)2] ≤ σi2
σi2 + 1 , ∀i, (39b)
Nsc
∑
k=1
pt,k ≤ Ptot, ∀t, (39c)
N
∑
i=1
bi ≤
Tsym
∑
t=1
Nsc
∑
k=1
mt,k, (39d)
with the shared side information (μ, σ2) enabling coordinated resource mapping between transmitter and receiver. To explicitly relate this formulation to the BSC-based distortion model of Sec. II-B, we approximate the subcarrier-level bit

8
error probabilities. For Gray-labeled 2mt,k -QAM, the BER on subcarrier k of symbol t is well approximated as [25]
Pb(mt,k, γt,k) ≈ 4
mt,k
(
1− 1
√2mt,k
)
Q
(√ 3γt,k
2mt,k − 1
)
+4
mt,k
(
1− 2
√2mt,k
)
Q
(
3
√ 3γt,k 2mt,k − 1
)
,Pˆb(mt,k, γt,k), (40)
where γt,k = pt,k|hk|2/σ2, and Q(·) denotes the Gaussian Qfunction. These estimated error probabilities define the effective flip probabilities ǫˆi experienced by the bi bits of latent codeword ci, determined by the mapping Π. Conditioned on the knowledge of {ǫˆi}iN=1 and under the assumption that each quantizer is optimized for the corresponding (bi, ǫˆi) pair, the optimization problem can be reformulated as
min
b, P, M, Π Tsym (41a)
s.t. D⋆(1; bi, ǫˆi) ≤ 1
σi2 + 1 , ∀i, (41b)
Nsc
∑
k=1
pt,k ≤ Ptot, ∀t, (41c)
N
∑
i=1
bi ≤
Tsym
∑
t=1
Nsc
∑
k=1
mt,k. (41d)
This reformulation provides an explicit bridge between the physical-layer OFDM parameters and our distortion-matching criterion. The overall transceiver chain, together with the associated optimization framework, is summarized in Fig. 3.
B. Optimization for Efficient Resource Allocation
The reformulated optimization problem in (41) jointly involves bit allocation, bit mapping, power allocation, and modulation selection. Due to the discrete nature of the design variables, the problem is non-convex and combinatorial, rendering a direct solution intractable. Moreover, obtaining the element-wise optimal quantizer for each (bi, ǫi) pair requires prohibitively high computational complexity. To circumvent this challenge, we first construct an offline quantizer library for a finite set o-
f BER targets E = {ǫ ̄(1), . . . , ǫ ̄(Q)}. Specifically, we define
QLib =
{
Q(b,q) : b ∈ {1, . . . , bmax}, q ∈ {1, . . . , Q}
}
, (42)
where each entry Q(b,q) stores the quantizer optimized for (b, ǫ ̄(q)) with its normalized distortion D⋆(1; b, ǫ ̄(q)). Subsequently, we impose an additional constraint that enforces a common flip probability across all subcarriers by selecting a single BER target ǫ ̄ ∈ E, thereby removing the need to optimize Π. With these constraints, the optimization problem can be rewritten as
min
b, P, M, ǫ ̄ Tsym (43a)
s.t. D⋆(1; bi, ǫ ̄i) ≤ 1
σi2 + 1 , ∀i, (43b)
Nsc
∑
k=1
pt,k ≤ Ptot, ∀t, (43c)
N
∑
i=1
bi ≤
Tsym
∑
t=1
Nsc
∑
k=1
mt,k, (43d)
Pˆb(mt,k, γt,k) = ǫ ̄, ∀t, k, (43e)
ǫ ̄ ∈ E, (43f)
where ǫ ̄i = [ǫ ̄, . . . , ǫ ̄]T ∈ [0, 0.5]bi. The constraint in (43e) is equivalently expressed by determining the transmit power that achieves the target BER ǫ ̄ for each subcarrier, given its modulation order mt,k and channel gain hk. Specifically, the required power is obtained as
pt,k(mt,k, ǫ ̄) = γth(mt,k, ǫ ̄)σ2
|hk|2 , (44)
where γth(m, ǫ ̄) denotes the SNR threshold that meets
Pˆb(m, γth) = ǫ ̄, precomputed through a bisection search exploiting the monotonicity of the BER function.
To solve (43), we optimize the problem separately for each candidate BER target ǫ ̄ ∈ E and then select the one that yields the smallest Tsym. For a fixed ǫ ̄, the problem decomposes into two subproblems. The first subproblem focuses on the source side: under a fixed ǫ ̄, the distortion of each latent dimension depends solely on the allocated bit depth bi. Consequently, the distortion-matching condition reduces to the following bitallocation problem:
(P1) mbin Blat(ǫ ̄) ,
N
∑
i=1
bi (45a)
s.t. D⋆(1; bi, ǫ ̄i) ≤ 1
σi2 + 1 , ∀i. (45b)
The above problem (P1) is readily solved by:
b⋆
i = min
{
bi ∈ 1, . . . , bmax : D⋆(1; bi, ǫ ̄) ≤ 1
σi2 + 1
}
. (46)
Second, under a fixed ǫ ̄ and B⋆
lat(ǫ ̄), the objective of minimizing
Tsym is achieved by maximizing the number of bits transmittable per OFDM symbol while satisfying the BER target ǫ ̄. This leads to the following power and modulation optimization problem defined for a single OFDM symbol:
(P2) max
p, m Rsym(ǫ ̄) ,
Nsc
∑
k=1
mk (47a)
s.t.
Nsc
∑
k=1
γth(mk, ǫ ̄)σ2
|hk|2 ≤ Ptot, (47b)
where the power allocation is replaced based on (44). The optimized allocation (p⋆(ǫ ̄), m⋆(ǫ ̄)) can then be applied identically across all Tsym symbols to construct (P⋆(ǫ ̄), M⋆(ǫ ̄)). The problem (P2) can be efficiently solved using a greedy algorithm [26], which successively increases the modulation

9
Algorithm 1 Power-Modulation Allocation for (P2)
Input: Total power budget Ptot, channel gains {|hk|2}Nsc
k=1, and SNR
thresholds γth(m, ǫ ̄), ∀m.
Output: Modulation-power pairs {mk, pk}Nsc
k=1.
1: Set P ̄ = 0 and mk = 0, pk = 0, ∀k.
2: while true do
3: Compute ∆pk(mk) =
(
γth (mk +2,ǫ ̄)−γth (mk ,ǫ ̄)
)
σ2
|hk|2 , ∀k.
4: Select k⋆ = argmink ∆pk(mk).
5: if P ̄ + ∆pk⋆ (mk⋆ ) ≤ Ptot then
6: Update P ̄ ← P ̄ + ∆pk⋆ (mk⋆ ), mk⋆ ← mk⋆ + 2.
7: Update pk⋆ = γth(mk⋆ ,ǫ ̄)σ2
|hk⋆ |2 .
8: else
9: Break the loop.
10: end
11: end while
order of the subcarrier that requires the minimum additional power per rate increment, as summarized in Algorithm 1. Each candidate ǫ ̄ ∈ E yields a pair (B⋆
lat(ǫ ̄), Rs⋆ym(ǫ ̄)). The optimal operating point is then determined by minimizing the ratio between the required latent bits and the achievable channel throughput, i.e.,
ǫ ̄⋆ = argmin
ǫ ̄∈E
B⋆
lat(ǫ ̄)
Rs⋆ym(ǫ ̄) , (48)
from which the minimum number of OFDM symbols is obtained as Ts⋆ym = ⌈B⋆
lat(ǫ ̄⋆)/Rs⋆ym(ǫ ̄⋆)⌉. In practice, the optimized channel throughput is slightly higher than the required latent transmission load, i.e., B⋆
lat(ǫ ̄⋆) < Ts⋆ymRs⋆ym(ǫ ̄⋆), leaving a small number of unused bits within the OFDM resource grid. To fully exploit this residual throughput, we perform an additional greedy bit refinement stage that incrementally allocates the remaining bits to minimize the total distortion across all latent dimensions, given that the distortion-matching condition is already satisfied. This refinement is formulated as the following optimization problem:
(P3) mbin
N
∑
i=1
σi2D⋆(1; bi, ǫ ̄⋆
i ) (49a)
s.t. D⋆(1; bi, ǫ ̄⋆
i) ≤ 1
σi2 + 1 , ∀i. (49b)
N
∑
i=1
bi = T ⋆
sym R⋆
sym(ǫ ̄⋆). (49c)
The problem (P3) can likewise be solved using a greedy algorithm, which iteratively allocates the remaining bits to the latent element yielding the maximum marginal distortion reduction, as summarized in Algorithm 2. Finally, the optimized quantizer, bit allocation, and transmission mapping corresponding to ǫ ̄⋆ are applied to construct the final OFDM transmission configuration. The overall transmission optimization procedure
Algorithm 2 Bit Refinement for (P3)
Input: Optimized bit allocation b⋆, residual bit budget bres = T⋆
sym R⋆
sym(ǫ ̄⋆) − B⋆
lat(ǫ ̄⋆), distortion table {D⋆(1; b, ǫ ̄⋆)}bmax
b=1 ,
and latent variances {σi2}N
i=1 .
Output: Refined bit allocation  ̃b.
1: Set b ̃ = b⋆.
2: while bres > 0 do
3: Compute ∆i = σi2
(D⋆(1;  ̃bi, ǫ ̄⋆) − D⋆(1;  ̃bi+1, ǫ ̄⋆)), ∀i.
4: Select i⋆ = argmaxi ∆i.
5: Update b ̃i⋆ ←  ̃bi⋆ + 1, bres ← bres − 1
6: end while
is summarized in Algorithm 3.
Remark 2 (Optimality of Algorithms 1 and 2): The optimality of the proposed greedy algorithms follows from the convexity of their respective cost functions [26]. For (P2), the required SNR γth(m, ǫ ̄) exhibits an increasing and convex trend with respect to the modulation order m, ensuring that the greedy allocation achieves the global optimum. Similarly, for (P3), the distortion D⋆(1; b, ǫ ̄⋆) shows a decreasing and convex trend with respect to the bit depth b, as empirically observed in Fig. 1, t-
hereby confirming the optimality of the refinement process.
Remark 3 (Bounding latent variance for consistent training and inference): Even when the maximum bit depth bmax is allocated, certain latent elements with excessively large variance σi2 may not be guaranteed to meet the distortionmatching criterion in (32), potentially leading to inconsistency between training and inference. In addition, an excessively large bmax increases optimization complexity and quantizer storage overhead. To address these issues, a scaling constraint is incorporated from the-
 training stage by applying an activation that bounds the predicted variance within a feasible range:
σi = σmax tanh
( softplus(σ ̃i) β
)
, (50)
where β is a learnable temperature parameter, and
σmax =
√1
D⋆(1; bmax, ǫ ̄(max)
i ) − 1, (51)
with ǫ ̄(max)
i denoting the largest element in E. To further suppress distributional outliers, latent elements exceeding three standard deviations (i.e., |yi − μi| > 3σi) are clipped to the boundary, and the corresponding gradients are learned through a straight-through estimator (STE) [27].
V. SIMULATION RESULTS
This section evaluates the reconstruction fidelity and transmission efficiency of the proposed Robust-NTC framework for wireless image transmission in OFDM systems. The transmission channel follows the 3GPP TDL-C model [23] with a delay spread of 300 ns at a carrier frequency of 3.5 GHz. The OFDM

10
Algorithm 3 Overall Optimization Procedure for Robust-NTC
over OFDM Input: Total power budget Ptot, channel gains {|hk|2}Nsc
k=1, quan
tizer library QLib, latent variances {σi2}N
i=1, and SNR thresholds
γth(m, ǫ ̄), ∀(m, ǫ ̄).
Output: Final operating point ǫ ̄⋆, optimized parameters
(Q⋆, b⋆, P⋆, M⋆).
1: for each ǫ ̄(q) ∈ E do
2: Solve (P1) to obtain B⋆
lat(ǫ ̄(q)).
3: Solve (P2) using Algorithm 1 to obtain Rs⋆ym(ǫ ̄(q)).
4: end
5: Select ǫ ̄⋆ = argminǫ ̄(q)∈E B⋆
lat (ǫ ̄(q) )/R⋆
sym (ǫ ̄(q) ).
6: Compute T ⋆
sym = ⌈B⋆
lat(ǫ ̄(q))/R⋆
sym (ǫ ̄(q) )⌉.
7: if T ⋆
sym R⋆
sym(ǫ ̄⋆) > B⋆
lat(ǫ ̄⋆) then
8: Refine b⋆ using Algorithm 2.
9: end
10: Construct (Q⋆, b⋆, P⋆(ǫ ̄⋆), M⋆(ǫ ̄⋆)) and map bits to the OFDM
resource grid.
system employs Nsc = 512 subcarriers with a subcarrier spacing of ∆f = 30 kHz. The total transmission power is defined as Ptot = NscP , and the SNR is given by P/σ2. The quantizer library is constructed for ten channel conditions, with target BERs uniformly sampled in the logarithmic (dB) domain over ǫ ∈ [0.001, 0.05]. The maximum quantization bit depth and negligible-variance threshold are set to bmax = 8 and δ = 0.4, respectively. The simulations are conducted using the CIFAR-10 and STL-10 datas-
ets. The CIFAR-10 dataset contains 60,000 color images of size 3 × 32 × 32 (50,000 for training and 10,000 for testing), while STL-10 comprises 113,000 images of size 3 × 96 × 96 (105,000 training and 8,000 test samples). Reconstruction performance is evaluated in terms of the peak signalto-noise ratio (PSNR), defined as
PSNR = 10 log10
( 2552 MSE
)
, (52)
with MSE = 1
CHW ‖x − xˆ‖22. All models, including the baselines, are trained for 500 epochs using the Adam optimizer with a learning rate of either 10−4 or 10−3. The model follows the architecture in [15], comprising a SwinTransformer-based analysis and synthesis network [28], along with convolutional neural network (CNN) based hyper-analysis and hyper-synthesis transforms [5]. For CIFAR-10, a compact two-stage Swin configuration is used for efficiency, while STL10 adopts a deeper three-stage variant with lar-
ger embeddings. Detailed network configurations are summarized in Table I. To evaluate the proposed Robust-NTC framework, several digital JSCC baselines are considered.
• E2E-Fixed-M QAM: This method jointly trains an endto-end JSCC model with an OFDM transceiver using a STE [27] for differentiable QAM modulation and demod
TABLE I NETWORK CONFIGURATIONS OF THE ROBUST-NTC FRAMEWORK.
Component CIFAR-10 STL-10
Swin-Transformer (ga, gs)
Stages/Window size (2, 8) (3, 6) Hidden dims [64, 64] [192, 192, 192] Heads per stage [8, 8] [8, 8, 8] Depth per stage [2, 2] [2, 2, 2]
CNN (ha, hs)
Encoder channels [64, 48, 48, 48] [192, 96, 96, 96] Decoder channels [48, 64, 96, 128] [96, 192, 288, 384] Kernel–stride pattern (3,1), (5,2), (5,2) (3,1), (5,2), (5,2) Activation LeakyReLU (ha), ReLU (hs)
MLP
Layer dims [192, 384, 64] [576, 1152, 192] Activation GELU
TABLE II AVERAGE NUMBER OF SIDE-INFORMATION BITS PER IMAGE.
Scheme Side bits [bits/image]
CIFAR-10 STL-10
Robust-NTC (λy=λz=192) 46.34 401.14 Robust-NTC (λy=λz=128) 78.01 462.97 MDJCM-M QAM (Equal / Opt) 256 556
ulation with fixed OFDM symbol length. The transmitter employs an MLP-based refinement module that takes both the channel response and latent vector as inputs before QAM mapping, while power allocation follows the theoretical capacity-achieving waterfilling strategy [1]. Each model is trained separately for a specific SNR and channel distribution under a fixed transceiver configuration, resulting in limited scalability and poor generalization to unseen conditions. • MDJCM-M QAM [22]: This method i-
ntegrates a deepJSCC transmission module into the NTC framework [15] with digital modulation. The model employs an adaptive transmission module that takes both the SNR and modulation order as inputs. For OFDM-based evaluation, two variants are implemented. The first, MDJCM-EqualM QAM, performs power allocation such that all subcarriers achieve an equal effective channel gain under a total power constraint, and the resulting effective SNR is provided to the adaptive transmission module. The second,-
 MDJCM-Opt-M QAM, excludes severely attenuated subcarriers to reduce the influence of weak channels by determining the optimal number of active subcarriers that maximizes capacity under the equal effective SNR constraint. Unlike the E2E-M QAM baseline, a single trained MDJCM model is used for all evaluation scenarios. • Fixed-b-Quant-ǫ [18]: This method employs a fixed bbit uniform scalar quantizer trained under a single bit

11
Fig. 4. Empirical CDFs of normalized latents (yi − μi)/σi obtained from the CIFAR-10 test dataset using the model learned under the proposed RobustNTC framework, compared with the standard Gaussian reference N (0, 1).
flip probability ǫ. Given the trained ǫ, Algorithm 1 in Sec. IV-B is applied to allocate power and modulation levels satisfying the target BER constraint. For a given parameter pair (b, ǫ), a single trained model is employed for all evaluation scenarios.
For fair comparison, all baseline models are configured with the same Swin-Transformer backbone with a larger model size. Except for E2E-Fixed-M QAM, which adopts a fixed OFDM symbol length, all other schemes operate with variable-length transmission. To enable effective performance comparison, each channel realization is configured to transmit 16 test images, and the rate cost per image is computed as the average number of OFDM symbols required per transmission. Unlike the RobustNTC, MDJCM-M QAM -
requires transmission of the rate tensor as essential side information, while zˆ is optionally transmitted depending on the target rate. To ensure fairness, only the rate-token information is transmitted in the MDJCM-M QAM baselines, and its symbol overhead is compensated according to the capacity estimated under the equal-SNR constraint, as in MDJCM-Opt-M QAM, which determines the optimal number of active subcarriers. The same compensation is applied to the Robust-NTC to maintain consistent accou-
nting of side-information transmission overhead. Table II quantifies the average side-information bits per image, demonstrating that Robust-NTC achieves markedly lower overhead than the MDJCM-M QAM baselines, owing to entropy modeling of side-information. The proposed Robust-NTC framework models the latent variables to follow a Gaussian distribution conditioned on the learned hyperprior parameters. Fig. 4 presents the empirical CDFs of the normalized latents (yi − μi)/σi obtained from the CIFAR-10-
 test dataset. To ensure that the analysis reflects statistically meaningful latent components, only elements satisfying σi ≥ σmin are considered, where σmin serves as a lower variance threshold. As shown in the figure, the empirical CDFs exhibit a close alignment with the Gaussian reference, confirming that the learned hyperprior effectively regularizes the latent representation toward Gaussianity. Moreover, increasing σmin
results in an even tighter match, indicating that high-variance latent dimensions follow the Gaussian prior more closely. This observation validates the Gaussian-modeling assumption employed in the channel-aware quantizer design and demonstrates that the proposed hyperprior formulation yields statistically consistent latent variables suitable for robust transmission over noisy conditions. Fig. 5 compares Robust-NTC with baseline schemes on CIFAR-10 in terms of PSNR versus the number of OFDM symbol-
s across different SNR levels. Overall, the proposed method achieves more efficient rate-distortion operating points than all baselines, maintaining comparable PSNR with reduced OFDM symbol usage. With distortion matching and hyperpriorbased adaptation, Robust-NTC maintains nearly uniform PSNR while substantially reducing OFDM symbol usage as the SNR increases. Fixed-modulation baselines show improved PSNR with larger modulation orders, with the gap widening at higher SNRs. Among the MDJCM-based b-
aselines, the MDJCMEqual-M QAM provides reasonable rate efficiency but suffers PSNR degradation at low SNR, since enforcing equal effective channel gains across subcarriers lowers overall power efficiency. In contrast, MDJCM-Opt-M QAM enhances robustness through adaptive subcarrier selection, at the expense of higher rate overhead. The E2E-Fixed-M QAM model employs a fixed symbol length and modulation order, which limits adaptability to varying channels. Despite being trained under the correspondi-
ng channel and SNR setting, it shows inferior performance compared with Robust-NTC. Although the Fixedb-Quant-ǫ schemes also employ Algorithm 1 to adapt their rate to the channel and SNR conditions, their uniform quantizers with fixed ǫ disregard latent-channel statistics, resulting in limited rate efficiency and weaker robustness compared with Robust-NTC. For instance, Robust-NTC with (λy = λz = 192) achieves PSNR performance comparable to that of Fixed4-Quant-0.05 while requiring less than half -
the number of OFDM symbols, demonstrating a significant rate advantage under comparable reconstruction quality. Fig. 6 shows the PSNR performance of the proposed RobustNTC and baseline schemes on the STL-10 dataset. Compared with CIFAR-10, the larger image size and higher content variability of STL-10 make the latent representation more heterogeneous and challenging to compress efficiently. Nevertheless, Robust-NTC maintains a stable rate-distortion tradeoff across all SNR levels, demonstrating th-
at its learned latent modeling and distortion-matching strategy generalize well to higher-resolution data. Consistent with the CIFAR-10 results, the proposed framework preserves a similar performance trend relative to the baselines, achieving comparable reconstruction quality with substantially fewer OFDM symbols. This result highlights that Robust-NTC effectively scales to more complex image structures, maintaining high rate-distortion efficiency and adaptive transmission behavior under increased-
 source dimensionality. Fig. 7 illustrates the subcarrier-wise adaptive bit and power allocation performed by the proposed Robust-NTC framework at SNR levels of 5 dB and 15 dB. In general, subcarriers

12
(a) SNR = 5 dB (b) SNR = 10 dB (c) SNR = 15 dB
Fig. 5. Comparison of the proposed Robust-NTC and baseline schemes in terms of PSNR versus the number of OFDM symbols under different SNR levels, evaluated on the CIFAR-10 dataset.
(a) SNR = 5 dB (b) SNR = 10 dB (c) SNR = 15 dB
Fig. 6. Comparison of the proposed Robust-NTC and baseline schemes in terms of PSNR versus the number of OFDM symbols under different SNR levels, evaluated on the STL-10 dataset.
with higher channel power are assigned larger transmit power and higher modulation orders, while weaker subcarriers receive smaller power and lower-order modulations. This allocation behavior follows the theoretical water-filling trend [1], while the power is further optimized to equalize the effective SNR among subcarriers sharing the same modulation order, resulting in an inverse power allocation pattern that enhances practical stability. Note that the optimal BER targets ǫ ̄⋆, determined by Alg-
orithm 3, are 0.0057 and 0.001 for 5 dB and 15 dB, respectively. Under favorable channel and total power conditions (e.g., 15 dB), the system assigns lower ǫ ̄⋆ and higher modulation orders, thereby improving rate efficiency. Conversely, in adverse channel conditions (e.g., 5 dB), higher ǫ ̄⋆ and lower modulation orders are allocated to enhance robustness, demonstrating the effectiveness of the proposed adaptive transmission strategy.
Fig. 8 compares the rate efficiency and PSNR of RobustNTC (λy = λz = 192) and E2E-Fixed-256QAM under 5 dB SNR as the total channel power varies across frames. Here, the rate efficiency is defined as 1/Tsym, representing the inverse of the number of OFDM symbols required for transmitting one image frame. As the total channel power fluctuates across frames, Robust-NTC adaptively adjusts the transmission rate by controlling Tsym, thereby maintaining consistently higher
rate efficiency and more stable PSNR performance. In contrast, E2E-Fixed-256QAM employs a fixed symbol length and modulation order, leading to significant PSNR fluctuations as the channel condition varies and exhibiting limited robustness. These results highlight the effectiveness of the proposed adaptive rate control in achieving both transmission efficiency and robustness under dynamic channel conditions.
VI. CONCLUSION
This paper presented a generalizable digital JSCC framework that combines variational latent modeling with optimizationdriven adaptive transmission. By introducing a Gaussian-proxy formulation within a hyperprior-based VAE architecture, the method explicitly learns element-wise latent statistics that capture heterogeneity in uncertainty and distortion sensitivity, without assuming a specific channel during training. A distortion-matching mechanism then optimizes quantization and bit depth to prese-
rve learned distortion targets. For practical deployment, Robust-NTC was integrated into an OFDM system with cross-layer optimization of quantization, modulation, power, and OFDM symbol allocation. Experiments over practical frequency-selective fading channels show that the proposed method maintains stable reconstruction quality

13
0 50 100 150 200 250 300 350 400 450 500
0
2
4
6
Channel power
0 50 100 150 200 250 300 350 400 450 500
0
50
100
Allocated power
0 50 100 150 200 250 300 350 400 450 500 Subcarrier index
0
2
4
6
8
Modulation order
Fig. 7. Subcarrier-wise adaptive bit and power allocation of the Robust-NTC (λy = λz = 128) under frequency-selective fading, evaluated on the CIFAR10 dataset. The figure shows the channel power (top), allocated power (middle), and modulation order (bottom) for SNR levels of 5 dB and 15 dB.
0 100 200 300 400 500 600
20
25
30
Channel power (dB)
0 100 200 300 400 500 600
0
0.5
1
1.5
Rate efficiency
0 100 200 300 400 500 600 Frame number
22
24
26
28
30
PSNR
Fig. 8. Frame-wise comparison of total channel power, rate efficiency, and PSNR under 5 dB SNR, evaluated on the CIFAR-10 dataset using RobustNTC (λy = λz = 192) and E2E-Fixed-256QAM. The figure shows the total subcarrier channel power in dB (top), the rate efficiency defined as 1/Tsym (middle), and the resulting PSNR (bottom) across transmitted frames.
while substantially reducing OFDM symbol usage across a wide range of SNRs.
REFERENCES
[1] R. G. Gallager, Information Theory and Reliable Communication. New York, NY, USA: Springer, 1968. [2] C. E. Shannon, “A mathematical theory of communication,” Bell Syst. Tech. J., vol. 27, no. 3, pp. 379–423, Jul. 1948.
[3] Y. Polyanskiy, H. V. Poor, and S. Verdu, “Channel coding rate in the finite blocklength regime,” IEEE Trans. Inf. Theory, vol. 56, no. 5, pp. 2307–2359, May 2010. [4] J. Balle ́, V. Laparra, and E. P. Simoncelli, “End-to-end optimized image compression,” in Proc. Int. Conf. Learn. Represent. (ICLR), Apr. 2017, pp. 1–27. [5] J. Balle ́ et al., “Nonlinear transform coding,” IEEE J. Sel. Topics Signal Process., vol. 15, no. 2, pp. 339–353, Feb. 2021. [6] J. Balle ́, D. Minnen, S. Singh, S. J. Hwa-
ng, and N. Johnston, “Variational image compression with a scale hyperprior,” in Proc. Int. Conf. Learn. Represent. (ICLR), May 2018, pp. 1–10.
[7] Y. Hu, J. Garcia-Frias, and M. Lamarca, “Analog joint source-channel coding using non-linear curves and MMSE decoding,” IEEE Trans. Commun., vol. 59, no. 11, pp. 3016–3026, Nov. 2011. [8] E. Akyol, K. B. Viswanatha, K. Rose, and T. A. Ramstad, “On zerodelay source-channel coding,” IEEE Trans. Inf. Theory, vol. 60, no. 12, pp. 7473–7489, Dec. 2014. [9] A. Kurtenbach and P. Wintz, “Quantizing for noisy channels,” IEEE Trans. Commun. Techn.,, vol. 17, no. 2, pp. 291–302, Apr. 1969. [10] N. Farvar-
din and V. Vaishampayan, “Optimal quantizer design for noisy channels: An approach to combined source-channel coding,” IEEE Trans. Inf. Theory, vol. 33, no. 6, pp. 827–838, Nov. 1987. [11] C. Liu, C. Guo, Y. Yang, W. Ni, and T. Q. S. Quek, “OFDM-based digital semantic communication with importance awareness,” IEEE Trans. Commun., vol. 72, no. 10, pp. 6301–6315, Oct. 2024. [12] S. Yao, K. Niu, S. Wang, and J. Dai, “Semantic coding for text transmission: An iterative design,” IEEE Trans. Cogn. Commu-
n. Netw., vol. 8, no. 4, pp. 1594–1603, Dec. 2022. [13] E. Bourtsoulatze, D. Burth Kurka, and D. Gu ̈ndu ̈z, “Deep joint sourcechannel coding for wireless image transmission,” IEEE Trans. Cogn. Commun. Netw., vol. 5, no. 3, pp. 567–579, Sep. 2019. [14] Y. M. Saidutta, A. Abdi, and F. Fekri, “Joint source-channel coding over additive noise analog channels using mixture of variational autoencoders,” IEEE J. Sel. Areas Commun., vol. 39, no. 7, pp. 2000–2013, Jul. 2021. [15] J. Dai et al., “Nonlinear -
transform source-channel coding for semantic communications,” IEEE J. Sel. Areas Commun., vol. 40, no. 8, pp. 23002316, Aug. 2022. [16] L. Teng, W. An, C. Dong, and X. Xu, “sDMCM—a semantic digital modulation constellation mapping scheme for semantic communication,” IEEE Internet Things J., vol. 12, no. 12, pp. 20 885–20 901, Jun. 2025. [17] Y. Oh, J. Park, J. Choi, J. Park, and Y.-S. Jeon, “Blind training for channel-adaptive digital semantic communications,” IEEE Trans. Commun., vol. 73, no. 11,-
 pp. 11 274–11 290, Nov. 2025. [18] J. Park, H. Kim, J. Shin, Y. Oh, and Y.-S. Jeon, “End-to-end training and adaptive transmission for OFDM-based semantic communication,” ICT Express, vol. 11, no. 5, pp. 919–924, Oct. 2025. [19] J. Shin, Y. Oh, J. Park, J. Park, and Y.-S. Jeon, “ESC-MVQ: End-to-end semantic communication with multi-codebook vector quantization,” 2025, arXiv preprint arXiv:2504.11709.
[20] Z. Bao et al., “sDAC-semantic digital analog converter for semantic communications,” IEEE Trans. Commun., vol. 73, no. 11, pp. 11 06111 077, Nov. 2025. [21] Y. Huh, H. Seo, and W. Choi, “Universal joint source-channel coding for modulation-agnostic semantic communication,” IEEE J. Sel. Areas Commun., vol. 43, no. 7, pp. 2560–2574, Jul. 2025. [22] G. Zhang, P. Yang, Y. Cai, Q. Hu, and G. Yu, “From analog to digital: Multi-order digital joint coding-modulation for semantic communication,” IEEE -
Trans. Commun., vol. 73, no. 6, pp. 4257–4271, Jun. 2025. [23] 3GPP, “Study on channel model for frequencies from 0.5 to 100 GHz, version 18.0.0,” 3GPP, Sophia Antipolis, France, 3GPP Rep. (TR) 38.901, Apr. 2024, available: http://www.3gpp.org/DynaReport/38901.htm. [24] D. P. Kingma and M. Welling, “Auto-encoding variational bayes,” 2013, arXiv preprint arXiv:1312.6114.
[25] K. Cho and D. Yoon, “On the general BER expression of one- and two-dimensional amplitude modulations,” IEEE Trans. Commun., vol. 50, no. 7, pp. 1074–1080, Jul. 2002. [26] B. Fox, “Discrete optimization via marginal analysis,” Manage. Sci., vol. 13, no. 3, pp. 210–216, Nov. 1966. [27] Y. Bengio, N. Le ́onard, and A. Courville, “Estimating or propagating gradients through stochastic neurons for conditional computation,” 2013, arXiv preprint arXiv:1308.3432.
[28] Z. Liu et al., “Swin transformer: Hierarchical vision transformer using shifted windows,” in Proc. IEEE/CVF Int. Conf. Comput. Vis. (ICCV), Oct. 2021, pp. 10 012–10 022.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:13:36.434Z
- **Text Length:** 63722 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 13 of 13
