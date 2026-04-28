# PDF Document: Wang et al. - 2025 - Bridging Continuous and Discrete Tokens for Autoregressive Visual Generation.pdf

**File Path:** Wang et al. - 2025 - Bridging Continuous and Discrete Tokens for Autoregressive Visual Generation.pdf

**Processed Date:** 2026-02-10T18:16:23.140Z

**File Size:** 14611.49 KB

**Total Pages:** 12

**Extracted Pages:** 12

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2784

**Title:** Bridging Continuous and Discrete Tokens for Autoregressive Visual Generation

**Collection:** Large Files

---

## Extracted Text Content

Bridging Continuous and Discrete Tokens for Autoregressive Visual Generation
Yuqing Wang1 Zhijie Lin2 Yao Teng1 Yuanzhi Zhu3 Shuhuai Ren4 Jiashi Feng2 Xihui Liu1*
1University of Hong Kong 2ByteDance Seed 3E ́ cole Polytechnique 4Peking University
Abstract
Autoregressive visual generation models typically rely on tokenizers to compress images into tokens that can be predicted sequentially. A fundamental dilemma exists in token representation: discrete tokens enable straightforward modeling with standard cross-entropy loss, but suffer from information loss and tokenizer training instability; continuous tokens better preserve visual details, but require complex distribution modeling, complicating the generation pipeline. In this paper, we propose Toke-
nBridge, which bridges this gap by maintaining the strong representation capacity of continuous tokens while preserving the modeling simplicity of discrete tokens. To achieve this, we decouple discretization from the tokenizer training process through post-training quantization that directly obtains discrete tokens from continuous representations. Specifically, we introduce a dimension-wise quantization strategy that independently discretizes each feature dimension, paired with a lightweight autor-
egressive prediction mechanism that efficiently model the resulting large token space. Extensive experiments show that our approach achieves reconstruction and generation quality on par with continuous methods while using standard categorical prediction. This work demonstrates that bridging discrete and continuous paradigms can effectively harness the strengths of both approaches, providing a promising direction for highquality visual generation with simple autoregressive modeling. Project page: h-
ttps://yuqingwang1029. github.io/TokenBridge.
1. Introduction
Autoregressive visual generation models [4, 5, 15, 22, 35, 37, 41, 43–45, 48] have emerged as a promising paradigm for visual synthesis, inspired by the way language models predict text tokens. These models rely on image tokenizers [7, 14, 40, 46, 47, 51] that convert image content into discrete or continuous tokens, which are then predicted se
∗Corresponding author.
smaller vocabulary
(a) Traditional Discrete AR
(b) Hybrid Continuous AR
(c) Ours
larger vocabulary
Encoder
AR
discrete tokens
continuous latents
post-training quantization
Decoder
Encoder
AR + diffusion
continuous tokens
continuous latents
Decoder
Encoder
AR
discrete tokens
VQ/LFQ
Decoder
gradient approximation
Figure 1. Comparison of different autoregressive visual generation approaches. (a) Traditional discrete tokenization incorporate quantization during training, resulting in tokenizer training instability and limited vocabulary size that restricts representational capacity. (b) Hybrid continuous AR models preserve rich visual information but need complex distribution modeling (diffusion or GMM) beyond standard categorical prediction. (c) Our approach bridges these paradigms by applying post-training-
 quantization to pretrained continuous features, maintaining the high representational capacity of continuous tokens while enabling simple autoregressive modeling.
1
arXiv:2503.16430v1 [cs.CV] 20 Mar 2025

Figure 2. Generated samples from TokenBridge. Class-conditional generation results on ImageNet [6] 256×256 demonstrating fine details and textures across diverse categories including animals, food, objects, and scenes.
quentially through autoregressive modeling in a next-token prediction paradigm. This analogous modeling approach enables flexible integration with text tokens for multimodal tasks [36, 42], and allows them to benefit from architectural innovations and scaling techniques established in LLM research [2, 10, 25]. Despite these advantages, a fundamental dilemma remains in the choice between discrete and continuous token representations, which significantly impacts model complexity and generation quali-
ty. Traditional discrete tokenization methods [7, 20, 40, 48, 51] employ various quantization techniques, such as VQ [7] and LFQ [48], to map continuous features into discrete tokens during training. However, these methods face two key issues. First, quantization is inherently non-differentiable, requiring gradient approximations that introduce complicated optimization and training instability [46, 52]. Second, discrete tokenizers struggle with a fundamental trade-off: limited vocabularies cannot -
fully capture fine visual details, while larger vocabularies often suffer from poor codebook utilization and increase modeling complexity [19, 53]. The alternative approach employs continuous VAEbased tokenizers [14], which preserve rich visual information by optimizing latent representations through direct gradient back-propagation. However, continuous latent tokens cannot be directly modeled by standard autoregressive approaches that rely on categorical prediction, forcing recent methods [17, 38-
] to replace the classification objective with specialized distribution modeling techniques, which necessitates additional model components (e.g., diffusion head [13] or Gaussian Mixture Models [29]). While effective, these approaches increase the complexity of the modeling pipeline and often require more sophisticated training and sampling procedures. In this work, we explore bridging continuous and discrete token representations for autoregressive visual generation. The fundamental challenge lie-
s in how to preserve the strong representation capacity of continuous to
kens while maintaining the modeling simplicity of discrete tokens. This is difficult to achieve under the conventional paradigm. We propose to decouple the discretization from the tokenizer training by applying training-free quantization after continuous tokenizer training, which makes it easier to achieve the above two objectives: (1) maintaining capacity can be achieved through fine-grained quantization of pretrained high-quality token representations, and (2) modeling simplicity is naturally gu-
aranteed due to the discrete nature of the resulting tokens, which enables standard categorical prediction.
Specifically, we apply a dimension-wise quantization strategy that independently discretizes each feature dimension of pre-trained continuous VAE [14] features. This approach circumvents the optimization instabilities inherent in training-based discrete tokenizers while allowing flexible selection of vocabulary size, and aligning well with pretrained continuous latent space. By preserving the distribution characteristics of the pretrained features, our method effectively maintains the rich visual -
information without requiring massive explicit codebooks. However, this finegrained discretization results in an exponentially large token space that poses computational challenges for direct classification. To address this, we propose a lightweight autoregressive mechanism that decomposes token prediction into a series of dimension-wise predictions. This approach efficiently captures the critical inter-dimensional dependencies necessary for high-quality generation while avoiding the computational-
 burden of standard classification approaches over large vocabularies.
Extensive experiments demonstrate the effectiveness of our approach. For tokenization, our discrete tokenizer achieves reconstruction quality comparable to continuous VAEs, validating the effectiveness of our post-training quantization. For generation, our model matches the visual quality of continuous approaches while achieving state-ofthe-art results on the ImageNet [6] 256×256 benchmark.
2

To effectively model the exponentially large vocabulary space, our dimension-wise autoregressive prediction significantly outperforms parallel prediction approaches, confirming the importance of autoregressive factorization for capturing complex inter-dimensional dependencies. Additionally, our discrete tokens naturally enable confidenceguided generation capabilities not available in continuous approaches, opening potential for flexible control during the generation process. Fig. 1 illustrates ou-
r approach in comparison with existing methods. Our main contributions can be summarized as follows: • We propose TokenBridge, a novel approach that bridges continuous and discrete token representations, demonstrating that standard autoregressive modeling with crossentropy loss can achieve visual quality comparable to continuous methods while maintaining the simplicity of discrete approaches. • We introduce post-training quantization that directly discretizes pretrained VAE features, eliminating t-
he optimization instabilities of training-based discete tokenizers while preserving the high visual fidelity of continuous representations. • We develop a dimension-wise quantization and prediction strategy that efficiently handles exponentially large vocabulary spaces in two ways: eliminating the need for massive explicit codebooks during tokenization, and making autoregressive prediction over such large spaces computationally feasible.
2. Related Work
Visual Tokenization. Visual tokenization aims to convert images into tokens for reconstruction and generation, with approaches broadly categorized as continuous or discrete. Variational autoencoders (VAE)[14] use regularized continuous latent spaces that preserve high visual fidelity, becoming standard in diffusion models[13, 23, 30, 31, 34]. Discrete approaches like VQ-VAE [40] and VQGAN [7] enable straightforward autoregressive modeling but suffer from codebook collapse and information loss. Alt-
hough recent methods such as LFQ [48], FSQ [20] and BSQ [51] reduce training instability and improve codebook size, their large codebooks present challenges for downstream modeling and require more powerful generation capabilities to achieve high-quality results. Our post-training quantization bridges continuous and discrete tokens by directly quantizing pretrained continuous features, leveraging pretrained VAEs for high-fidelity representation while maintaining the benefits of discrete tokens for-
 autoregressive modeling.
Autoregressive Image Generation. Autoregressive image generation has evolved from computationally expensive pixel-based approaches like PixelRNN/CNN [33, 39] to more efficient token-based methods. Typical models
built on discrete tokens include DALL-E [26] and VQGAN [7, 16, 27, 46, 52], while MaskGIT [3] and VAR [37] further improved efficiency through masked modeling and multi-scale approaches. To address quality limitations, hybrid methods like GIVT [38] employ Gaussian Mixture Models to predict continuous tokens, while MAR [17] introduces diffusion-based token prediction. However, these approaches complicate the model architecture and generation pipeline, requiring additional components beyond standard-
 autoregressive modeling. Infinity [9] takes a different approach with bitwise modeling and self-correction mechanisms. In contrast, our approach can maintain autoregressive simplicity while achieving continuous-quality generation without specialized training procedures or elaborate correction schemes.
3. Method
Our approach, termed TokenBridge, addresses the fundamental tension between discrete tokens' modeling simplicity and continuous tokens' representational capacity by reversing the conventional paradigm: instead of quantizing during tokenizer training, we apply feature quantization after a continuous tokenizer has been fully trained. This posttraining approach enables us to preserve the rich visual information captured by continuous representations while gaining the modeling benefits of discrete tok-
ens. The TokenBridge framework comprises two primary components: (1) a post-training dimension-wise quantization strategy that transforms pretrained continuous VAE features into discrete tokens without degrading their reconstruction capacity (Sec. 3.1), and (2) an efficient autoregressive prediction mechanism that handles the resulting large vocabulary space by decomposing token prediction into a sequence of dimension-wise predictions (Sec. 3.2). Finally, we detail the training and inference proce-
dures for the autoregressive generation model that operates on these discrete tokens (Sec. 3.3).
3.1. Post-Training Quantization
As shown in Fig. 3 (top row), our method starts with continuous latent features X ∈ RH×W ×C extracted by a pretrained VAE encoder. Our goal is to discretize these continuous features while preserving their rich visual information. A natural consideration would be to apply Vector Quantization methods [7, 40]. However, these approaches would be ineffective in our context, as achieving near-lossless compression would require an impractically large codebook (exponential in feature dimensions), making -
storage and lookup computationally prohibitive. Instead, we implement training-free dimension-wise quantization that operates on each channel independently (Fig. 3, middle). By quantizing each dimension separately rather than entire vectors, we efficiently overcome the code
3

21
10
26
31
10
5
29
20
24
31
10
27
29
16
23
7
Encoder
Post-training Quantization
Decoder
De Quantization
1.05
-0.87
2.21
3.90
-0.87
-1.65
3.10
0.84
1.75
3.90
-0.77
2.45
3.10
0.08
1.25
-1.29
original VAE
distribution quantized distribution
1.04
-0.87
2.25
4.20
-0.89
-1.65
3.21
0.82
1.74
4.32
-0.79
2.47
3.22
0.07
1.27
-1.32
dimension
Pretrained Continuous Tokenizer
height
width
Figure 3. Illustration of our post-training quantization process. The top row shows the pretrained continuous VAE tokenizer, mapping an input image to continuous latent features X ∈ RH×W ×C and reconstructing it through the decoder. Our post-training quantization process (middle) transforms these continuous features into discrete tokens by independently quantizing each channel dimension. The bottom-left shows how our approach preserves the original Gaussian-like distribution (purple curve) in disc-
retized form (purple histogram). The right portion demonstrates the de-quantization process that maps indices back to continuous values for decoding.
book size limitation while enabling much finer quantization granularity per dimension. Our dimension-wise approach effectively leverages two key properties of VAE features: (1) their bounded nature due to KL constraints results in a finite value range, allowing effective quantization with limited discrete levels across all feature dimensions; and (2) their near Gaussian distribution allows for efficient non-uniform quantization that allocates more quantization levels to frequently occurring values-
, as illustrated in Fig. 3 (bottom-left), where the discretized form (purple histogram) preserves the characteristics of the original distribution (purple curve).
Quantization. For a feature vector x = x1, x2, · · · , xC from the feature map X, we first normalize each dimension to facilitate quantization based on Gaussian properties. We identified practical bounds [αmin, αmax] from our experiments, then map these to [−r, r] (where r = 3 corresponds to three standard deviations):
xˆc = clip(2r · xc − αmin
αmax − αmin
− r, − r, r), (1)
where clip(a, b, c) constrains input a to lie between bounds b and c. This normalization preserves the relative distribution while enabling Gaussian-based quantization. Next, we establish quantization boundaries {bi}B
i=0 by
dividing the standard normal distribution into B regions of equal probability:
Φ(bi+1) − Φ(bi) = 1
B , i ∈ {0, . . . , B − 1}, (2)
where Φ(·) represents the cumulative distribution function. This non-uniform approach allocates more quantization levels to higher-probability regions, efficiently utilizing limited quantization resources.
For each interval [bi, bi+1], we compute a reconstruction value as the expected value within that range:
γi = E[ξ|bi ≤ ξ < bi+1], ξ ∼ N (0, 1). (3)
Finally, we determine the quantization index qc for each normalized value xˆc by finding the closest reconstruction value:
qc = arg min
0≤i<B
|γi − xˆc|. (4)
This process transforms continuous features into discrete tokens while maintaining essential distribution characteristics, enabling standard categorical prediction.
De-quantization. Since our autoregressive model predicts discrete indices while the VAE decoder requires continuous features, de-quantization is necessary for image generation. Each quantization index qc is mapped to its corresponding reconstruction value γqc , then transformed back to the original feature range:
xc = (γqc + r)
2r · (αmax − αmin) + αmin. (5)
This process enables direct use of the pretrained VAE decoder with minimal performance degradation. The complete de-quantization process is shown in the right portion of Fig. 3. Although our method is motivated by Gaussian distribution properties, we found that linear quantization with sufficient granularity also performs well with only slightly lower performance, demonstrating our approach’s robustness to different post-training quantization schemes.
3.2. Efficient Large-Vocabulary Token Modeling
While our post-training dimension-wise quantization effectively preserves the representational capacity of continuous
4

Autoregressive Model
Small AR Head
Condition
single image token
each dimension
Figure 4. Our autoregressive generation process. At the spatial level, our model autoregressively generates tokens conditioning on previous positions. For each spatial location (highlighted in pink), we apply dimension-wise sequential prediction to efficiently handle the large token space. This approach decomposes the modeling of each token into a series of smaller classification problems while preserving essential inter-dimensional dependencies.
tokens, it introduces a computational challenge: an exponentially large token space, comprising BC possible combinations per spatial location. This makes direct classification through standard softmax computationally infeasible. A straightforward approach would be to independently model and classify each dimension, but our experiments reveal significant interdependencies across the channel dimension that are crucial for high-quality image generation, making such parallel independent prediction imp-
ractical. To address this problem, we introduce a lightweight autoregressive head designed for dimension(channel)-wise next-token prediction at each spatial location, as depicted in Fig. 4. Specifically, for the quantization index vector q = q1, · · · , qC at a given spatial location, we model their joint distribution p(q) across the channel dimension:
p(q) =
C
Y
c=1
p(qc|q<c, z) (6)
where qc represents the quantized value for channel c, q<c denotes all quantized values from preceding channels, and z represents the context features from the spatial autoregressive backbone (detailed in Sec. 3.3). This autoregressive head predicts a distribution over B possible values for each channel, conditioned on previously generated tokens and context features. By decomposing token prediction into a series of smaller classification problems, this approach makes modeling the exponentially la-
rge vocabulary space computationally feasible, and preserving critical inter-channel dependencies. To further enhance generation quality, we optimize the dimension generation order based on frequency characteristics, prioritizing those carrying more low-frequency information. By analyzing the spectral properties of each dimen
sion through Fast Fourier Transform (FFT) [21], we sort dimensions according to their proportion of low-frequency energy. This approach ensures that structural information is generated before fine details, which empirically outperforms the default sequential arrangement.
3.3. Autoregressive Generation Framework
As illustrated in Fig. 4, our framework integrates spatial autoregressive generation with dimension-wise token prediction. The joint probability distribution across all spatial locations and channels is expressed as:
p(q) =
Y
h,w
C
Y
c=1
p qc
h,w |q <c
h,w, q<(h,w) , (7)
where qc
h,w denotes the token at spatial location (h, w) and channel c, q<c
h,w represents tokens at the same position across preceding channels, and q<(h,w) encompasses all tokens from prior spatial positions in the generation sequence.
The autoregressive backbone processes preceding spatial positions to provide context features z at each location, which serves as an intermediate representation connecting spatial and dimension-wise autoregressive processes. This z (referenced in Eq. 6) conditions the dimension-wise prediction through our dimension-wise autoregressive head, effectively decoupling the spatial and channel predictions to reduce computational complexity. Our dimension-wise autoregressive head is shared across all spat-
ial positions, adding only a small number of parameters to the model.
Training. During training, we optimize a standard crossentropy loss applied to the dimension-wise token predictions, enabling simple categorical classification training without requiring complex distribution modeling.
Inference. At inference time, generation proceeds as follows: (1) the backbone network autoregressively computes context features for each spatial position based on previously generated tokens, (2) for each position, the autoregressive head sequentially predicts values across all channels, and (3) after each spatial token is completely generated, we immediately de-quantize the discrete indices back to continuous features before feeding them into the spatial autoregressive model for the next positi-
on’s prediction. This de-quantization step is crucial because our autoregressive model takes continuous feature representations as input conditions, ensuring that the network consistently receives features in the original VAE latent space, thus maintaining the rich representational capacity while preserving the advantages of discrete token prediction. Upon generation completion, all predicted features are decoded into images using the pretrained VAE decoder.
5

Original Continuous Ours VQ LFQ
Figure 5. Reconstruction quality of typical continuous and discrete tokenizers. For discrete baselines, we use VQ from [35], and LFQ from [19]. Our method achieves reconstruction quality comparable to continuous VAE, preserving more fine details than traditional discrete tokenizers, especially in text and facial features. Zoom in for better comparison.
Original B = 64 B = 32 B = 16 B = 8 B = 4
Figure 6. Reconstruction quality of different quantization granularities B. Visual comparison showing reconstructions at decreasing quantization levels. Zoom in for better comparison.
4. Experiments
4.1. Implementation Details
Tokenizer. For VAE, we use the KL-regularized tokenizer from LDM [30] with pre-trained weights from [17]. The tokenizer maps 256×256 images to 16×16 tokens with 16dimensional feature vectors. For dimension-wise quantization, we set [αmin, αmax] = [−5, 5], r = 3, and B = 64 based on reconstruction quality experiments in Sec. 4.2. Autoregressive Model. For a fair comparison with continuous approaches, we adopt the masked autoregressive model architecture from MAR [17]. Our default Transformer consis-
ts of 32 blocks with a width of 1024 (L model, ∼400M) for ablation studies, while final results use a larger H model (with 40 blocks and 1280 width, ∼910M). Evaluation. We conduct experiments on ImageNet [6] at 256×256 resolution. Following common practice [13], we evaluate using FID [11] and IS [32], with Precision and Recall as reference metrics. Default models for ablations are trained for 400 epochs, while final results use 800 epochs. At inference time, temperature (τ ) sampling and classifie-
rfree guidance [12] is applied. More architecture, training, and inference details can be found in Supplementary Materials.
4.2. Properties of Our Tokenizer
Comparison of Continuous and Discrete Tokenizers. In Fig. 5, we compare the reconstruction quality of typical
Method B rFID↓ IS↑
VAE - 1.11 306.1
Ours 8 3.69 250.3 Ours 16 1.33 296.8 Ours 32 1.12 303.8 Ours 64 1.11 305.4
(a) Different quantization levels. Finer quantization granularity improves performance, with B=64 matching continuous VAE.
Method Range rFID↓ IS↑
VAE - 1.11 306.1
Ours ±2 2.26 267.9 Ours ±3 1.22 299.7 Ours ±4 1.13 305.3 Ours ±5 1.11 305.4
(b) Different quantization ranges. Feature range ±5 achieves reconstruction quality matching continuous VAE.
Table 1. Ablations on post-training quantization.
continuous and discrete tokenizers using ImageNet [6] validation samples. For continuous tokenization, we use the VAE from [17]. For discrete tokenizers, we use VQGAN from LlamaGen’s [35] implementation (an improved version of the original [7]), along with LFQ from OpenMAGVIT2 [19], as the original MAGVIT2 [48] is not opensourced. As shown in the figure, continuous tokenizers preserve more details, particularly in text and facial features, where discrete tokenizers often struggle. However, our dis-
crete tokenizer achieves reconstruction quality comparable to its continuous counterpart.
Parameters for Tokenizer Quantization. Tab. 1 (a) and Fig. 6 demonstrate the impact of quantization levels B(described in Eq. 2 ) on reconstruction quality. One observation is that global structure remains well-preserved across all quantization levels, with differences primarily in fine detail preservation. With B = 8, significant information loss occurs (rFID=3.69), visible as artifacts in textures and edges. At B = 16, quality improves substantially (rFID=1.33), with only minor detail loss visib-
le while only 0.2 rFID higher than the continuous baseline. Reconstructions at B = 32 and B = 64 become visually indistinguishable from the original inputs, with B = 64 (rFID=1.11) matching the continuous VAE baseline perfectly. These results show that our post-training quantization approach can achieve continuous-quality reconstruction with enough quantization levels. Tab. 4.2 (b) examines how feature range [αmin, αmax] affects quantization. The approximately Gaussian distribution of VAE features-
 (due to KL regularization) enables defining a finite range. A narrow range of ±2 results in information loss (rFID=2.26), while expanding to ±5 allows our method to match the continuous baseline (rFID=1.11).
4.3. Properties of Our Generator
Prediction Strategy. Our dimension-wise quantization results in an exponentially large token space. A straightforward solution would be to predict each dimension independently classify each dimension in parallel. However, as shown in the top row of Fig. 7, this strategy yields poor results with inconsistent content and blurry artifacts. As shown in Tab. 4.2(a), our dimension-wise autore
6

Prediction gFID↓ IS↑
Parallel 15.7 158.5 Autoregressive 1.94 306.1
(a) Prediction strategy. Parallel prediction fails to model interdimensional dependencies critical for quality.
Order gFID↓ IS↑
Normal 1.94 306.1 Frequency 1.89 307.3
(b) Dimension ordering. Frequency based ordering prioritizes structural information before details.
B gFID↓ IS↑
16 2.03 295.0 32 1.98 298.4 64 1.94 306.1
(c) Quantization levels. Higher granularity consistently improves generation quality.
#ch/g Classes #params gFID↓ IS↑
1 16 60M 2.28 289.1 2 256 63M 2.45 291.2 4 65K 530M 3.24 282.9
(d) Channel grouping. Joint classification of multiple channels (#ch/g denotes channels per group) increases parameters yet degrades quality.
Dim Depth #params gFID↓ IS↑
256 3 3M 2.88 277.3 512 3 10M 2.72 284.8 512 4 13M 2.65 295.5 1024 4 65M 2.03 305.0 1024 6 94M 1.94 306.1
(e) Autoregressive head architecture. Even lightweight design (3M params) achieves reasonable quality. Increasing capacity further enhances performance.
Table 2. Ablation studies on our generation model.
gressive approach significantly improves generation quality (gFID=1.94, IS=306.1 vs. gFID=15.7, IS=158.5 for parallel prediction). This dramatic 8× improvement in FID confirms that modeling inter-dimensional dependencies is critical for high-quality image generation. Dimension Ordering. As described in Sec. 3.3, the generation order of different dimensions can impact generation quality in our dimension-wise autoregressive framework. As shown in Tab. 4.2(b), the frequency-based ordering (prioritizi-
ng dimensions with more low-frequency content) slightly improves performance (gFID=1.89 vs. 1.94). While the improvement is modest, it confirms that prioritizing structural information in the generation sequence helps create more coherent images.
Quantization Levels for Generation. We investigate how quantization granularity affects generation performance. As shown in Tab. 4.2(c), generation quality consistently improves with finer quantization. Even with coarse quantization, our approach achieves reasonable quality (gFID=2.03 at B=16), while finer quantization yields the best results (gFID=1.94 at B=64). This pattern aligns with our reconstruction experiments and confirms that generation benefits from finer-grained discretization. Channel-
 Grouping. We explore whether combining multiple channels for joint classification could improve generation performance. Due to the exponential growth in class count when grouping channels, we conduct experiments with B=16 quantization on a 172M parameter backbone.
parallel
autoregressive
Figure 7. Token Prediction Strategy. Comparison of dimensionwise token prediction approaches. Top: Parallel prediction produces blurry, inconsistent images. Bottom: Our autoregressive approach sequentially predicts token dimensions, generating coherent, high-quality images. This highlights the interdependence of token dimensions and they cannot be predicted independently.
Figure 8. Generation guided by token confidence. Our discrete token approach enables confidence-guided generation, producing clean foreground objects against simple backgrounds by prioritizing high-confidence tokens. This provides a advantage over continuous tokens, which lack explicit token-level confidence scores.
As shown in Tab. 4.2(d), our default approach performs classification for each channel. Grouping channels exponentially increases vocabulary size: 2 channels/group requires predicting from 256 classes, while 4 channels/group expands to 65,536 classes. Despite increased parameters (530M vs. 60M for single-channel), generation quality worsens (gFID from 2.28 to 3.24). We suspect this is because larger classification spaces pose greater modeling challenges for the generator, despite the increased par-
ameter count. These results validate the effectiveness of our dimension-wise factorization approach for handling large vocabulary spaces.
Autoregressive Head Architecture. We analyze the impact of autoregressive head capacity on generation quality. As shown in Tab. 4.2(e), even our smallest configuration (3M parameters) achieves reasonable quality (gFID=2.88), demonstrating our approach’s effectiveness regardless of the scale of the autoregressive head. Increasing capacity consistently improves performance, with our largest configuration (94M parameters) achieving the best results (gFID=1.94).
7

Token Tokenizer Type Loss Method #params FID↓ IS↑ Pre.↑ Rec.↑
training-quantized discrete tokens
VQ Mask. CE MaskGIT [3] 177M 6.18 182.1 - VQ AR CE RQTran [16] 3.8B 7.55 134.0 - VQ AR CE ViT-VQGAN [46] 1.7B 4.17 175.1 - VQ Mask. CE TiTok-128 [49] 287M 1.97 281.8 - LFQ AR CE MAGVIT-v2 [48] 307M 1.78 319.4 - LFQ AR CE Open-MAGVIT2-L [19] 804M 2.51 271.7 0.84 0.54 VQ AR CE LlamaGen [35] 3.1B 2.18 263.3 0.81 0.58 VQ AR CE VAR [37] 2.0B 1.73 350.2 0.82 0.60
continuous-valued tokens
VAE Diff. Diff. LDM-4 [30] 400M 3.60 247.7 0.87 0.48 VAE Diff. Diff. U-ViT-H/2-G [1] 501M 2.29 263.9 0.82 0.57 VAE Diff. Diff. DiT-XL/2 [23] 675M 2.27 278.2 0.83 0.57 VAE Diff. Diff. MDTv2-XL/2 [8] 676M 1.58 314.7 0.79 0.65 VAE AR GMM GIVT [38] 304M 3.35 - 0.84 0.53 VAE AR Flow FlowAR-H [28] 1.9B 1.65 296.5 0.83 0.60 VAE AR Diff. MAR-L [17] 479M 1.78 296.0 0.81 0.60 VAE AR Diff. MAR-H [17] 943M 1.55 303.7 0.81 0.62
post-training quantized discrete tokens
VAE AR CE Ours-L 486M 1.76 294.8 0.80 0.63 VAE AR CE Ours-H 910M 1.55 313.3 0.80 0.65
Table 3. Comparison of visual generation methods on ImageNet 256×256. Our model achieves comparable performance to the best continuous token approach (MAR) while using standard categorical prediction in autoregressive modeling.
Confidence-guided Generation. An advantage of our discrete tokenization approach is the availability of explicit token confidence scores during generation. By leveraging these scores, we can implement controlled generation strategies that prioritize high-confidence predictions. As shown in Fig. 8, selectively generating only the highest-confidence tokens at each step (similar to approaches like MaskGIT [3]) results in images with welldefined foreground objects against simplified backgrounds, as th-
e model typically assigns higher confidence to semantically important foreground elements while background details receive lower confidence scores. Unlike continuous approaches such as MAR [17] that lack token-level score measures, our method naturally supports foreground-focused generation. This capability may help with transparent image generation applications (e.g., LayerDiffusion [50]) and could potentially facilitate compositional generation where multiple objects are combined into scenes. Th-
e ability to distinguish between high and low confidence regions provides finer control over the generation process, representing another advantage of our discrete approach beyond simplified training and inference.
4.4. Main Results
Tab. 4.3 presents a comparison of our approach against typical visual generation methods on ImageNet-256 [6]. We categorize these methods into three groups: traditional training-quantized discrete token models, continuousvalued token models, and our post-training quantized discrete token models. Our models demonstrate competitive performance compared to existing approaches. When compared with discrete token methods, Ours achieves better
FID scores than most approaches despite their larger model sizes. For instance, LlamaGen [35] with 3.1B parameters yields an FID of 2.18, compared to Ours-L’s 1.76 with only 486M parameters. In comparison with continuous approaches, Ours-L substantially outperforms GIVT [38] (FID 1.76 vs 3.35) which uses Gaussian Mixture Models (GMM) for continuous token distribution modeling, and Ours-H achieves better results than FlowAR-H [28] (FID 1.65) despite the latter having nearly two times the parameter -
count. In direct fair comparison with MAR [17], which employs diffusion-based token distribution modeling, OursL achieves comparable performance to MAR-L with similar parameter counts. More notably, Ours-H matches MAR-H in FID (1.55) while achieving higher IS and Recall metrics with slightly fewer parameters. These results confirm that our TokenBridge approach effectively bridges discrete and continuous token representations, achieving highquality visual generation comparable to continuous methods-
 while maintaining the modeling simplicity of discrete approaches with standard cross-entropy loss.
5. Conclusion
In this work, we introduce TokenBridge, a novel approach that bridges discrete and continuous token representations for autoregressive visual generation. We obtain high-quality discrete tokens through post-training quantization while enabling efficient modeling of large vocabulary spaces through dimension-wise autoregressive decomposition. Our work demonstrates that discrete token approaches with standard cross-entropy loss can match state-of-the-art continuous methods without requiring complex di-
stribution
8

modeling techniques. We hope our work will foster future research on high-quality visual generation and unified multimodal frameworks.
Acknowledgment
The authors are grateful to Tianhong Li for helpful discussions on MAR and to Yi Jiang for valuable feedback on the early version of this work.
References
[1] Fan Bao, Shen Nie, Kaiwen Xue, Yue Cao, Chongxuan Li, Hang Su, and Jun Zhu. All are worth words: A vit backbone for diffusion models. In CVPR, 2023. 8 [2] Tom Brown, Benjamin Mann, Nick Ryder, Melanie Subbiah, Jared D Kaplan, Prafulla Dhariwal, Arvind Neelakantan, Pranav Shyam, Sastry, et al. Language models are fewshot learners. In NeurIPS, 2020. 2 [3] Huiwen Chang, Han Zhang, Lu Jiang, Ce Liu, and William T. Freeman. Maskgit: Masked generative image transformer. In CVPR, 2022. 3, 8 [4] Liang-
 Chen, Zekun Wang, Shuhuai Ren, Lei Li, Haozhe Zhao, Yunshui Li, Zefan Cai, Hongcheng Guo, Lei Zhang, Yizhe Xiong, et al. Next token prediction towards multimodal intelligence: A comprehensive survey. arXiv preprint arXiv:2412.18619, 2024. 1
[5] Mark Chen, Alec Radford, Rewon Child, Jeffrey Wu, Heewoo Jun, David Luan, and Ilya Sutskever. Generative pretraining from pixels. In ICML, pages 1691–1703, 2020. 1 [6] Jia Deng, Wei Dong, Richard Socher, Li-Jia Li, Kai Li, and Li Fei-Fei. Imagenet: A large-scale hierarchical image database. In CVPR, 2009. 2, 6, 8, 1 [7] Patrick Esser, Robin Rombach, and Bjorn Ommer. Taming transformers for high-resolution image synthesis. In CVPR, pages 12873–12883, 2021. 1, 2, 3, 6 [8] Shanghua Gao, Pan Zhou,-
 Ming-Ming Cheng, and Shuicheng Yan. Masked diffusion transformer is a strong image synthesizer. In CVPR, 2023. 8 [9] Jian Han, Jinlai Liu, Yi Jiang, Bin Yan, Yuqi Zhang, Zehuan Yuan, Bingyue Peng, and Xiaobing Liu. Infinity: Scaling bitwise autoregressive modeling for high-resolution image synthesis. arXiv preprint arXiv:2412.04431, 2024. 3
[10] Tom Henighan, Jared Kaplan, Mor Katz, Mark Chen, Christopher Hesse, Jacob Jackson, Heewoo Jun, Tom B Brown, Prafulla Dhariwal, Scott Gray, et al. Scaling laws for autoregressive generative modeling. arXiv preprint arXiv:2010.14701, 2020. 2
[11] Martin Heusel, Hubert Ramsauer, Thomas Unterthiner, Bernhard Nessler, and Sepp Hochreiter. Gans trained by a two time-scale update rule converge to a local nash equilibrium. NeurIPS, 30, 2017. 6 [12] Jonathan Ho and Tim Salimans. Classifier-free diffusion guidance. In NIPS 2021 Workshop on Deep Generative Models and Downstream Applications, 2021. 6, 1
[13] Jonathan Ho, Ajay Jain, and Pieter Abbeel. Denoising diffusion probabilistic models. NeurIPS, 33:6840–6851, 2020. 2, 3, 6
[14] Diederik P Kingma and Max Welling. Auto-encoding variational bayes. arXiv preprint arXiv:1312.6114, 2013. 1, 2, 3
[15] Dan Kondratyuk, Lijun Yu, Xiuye Gu, Jos ́e Lezama, Jonathan Huang, Rachel Hornung, Hartwig Adam, Hassan Akbari, Yair Alon, Vighnesh Birodkar, et al. Videopoet: A large language model for zero-shot video generation. arXiv preprint arXiv:2312.14125, 2023. 1
[16] Doyup Lee, Chiheon Kim, Saehoon Kim, Minsu Cho, and Wook-Shin Han. Autoregressive image generation using residual quantization. In CVPR, 2022. 3, 8 [17] Tianhong Li, Yonglong Tian, He Li, Mingyang Deng, and Kaiming He. Autoregressive image generation without vector quantization. arXiv preprint arXiv:2406.11838, 2024. 2, 3, 6, 8, 1 [18] Ilya Loshchilov and Frank Hutter. Decoupled weight decay regularization. In ICLR, 2018. 1 [19] Zhuoyan Luo, Fengyuan Shi, Yixiao Ge, Yujiu Yang, Limin Wang, an-
d Ying Shan. Open-magvit2: An open-source project toward democratizing auto-regressive visual generation. arXiv preprint arXiv:2409.04410, 2024. 2, 6, 8
[20] Fabian Mentzer, David Minnen, Eirikur Agustsson, and Michael Tschannen. Finite scalar quantization: Vq-vae made simple. arXiv preprint arXiv:2309.15505, 2023. 2, 3
[21] Henri J Nussbaumer and Henri J Nussbaumer. The fast Fourier transform. Springer, 1982. 5
[22] Ziqi Pang, Tianyuan Zhang, Fujun Luan, Yunze Man, Hao Tan, Kai Zhang, William T. Freeman, and Yu-Xiong Wang. Randar: Decoder-only autoregressive visual generation in random orders. arXiv preprint arXiv:2412.01827, 2024. 1 [23] William Peebles and Saining Xie. Scalable diffusion models with transformers. In ICCV, pages 4195–4205, 2023. 3, 8 [24] Dustin Podell, Zion English, Kyle Lacey, Andreas Blattmann, Tim Dockhorn, Jonas Mu ̈ller, Joe Penna, and Robin Rombach. Sdxl: Improving latent diffusi-
on models for high-resolution image synthesis. In ICLR, 2023. 1 [25] Alec Radford, Jeff Wu, Rewon Child, David Luan, Dario Amodei, and Ilya Sutskever. Language models are unsupervised multitask learners. 2019. 2 [26] Aditya Ramesh, Mikhail Pavlov, Gabriel Goh, Scott Gray, Chelsea Voss, Alec Radford, Mark Chen, and Ilya Sutskever. Zero-shot text-to-image generation. In ICML, pages 88218831, 2021. 3 [27] Ali Razavi, Aaron Van den Oord, and Oriol Vinyals. Generating diverse high-fidelity images with -
vq-vae-2. NeurIPS, 32, 2019. 3 [28] Sucheng Ren, Qihang Yu, Ju He, Xiaohui Shen, Alan Yuille, and Liang-Chieh Chen. Flowar: Scale-wise autoregressive image generation meets flow matching. arXiv preprint arXiv:2412.15205, 2024. 8
[29] Douglas A Reynolds et al. Gaussian mixture models. Encyclopedia of biometrics, 2009. 2
[30] Robin Rombach, Andreas Blattmann, Dominik Lorenz, Patrick Esser, and Bjo ̈rn Ommer. High-resolution image synthesis with latent diffusion models. In CVPR, 2022. 3, 6, 8 [31] Chitwan Saharia, William Chan, Saurabh Saxena, Lala Li, Jay Whang, Emily L Denton, Kamyar Ghasemipour,
9

Raphael Gontijo Lopes, Burcu Karagol Ayan, Tim Salimans, et al. Photorealistic text-to-image diffusion models with deep language understanding. NeurIPS, 35:36479–36494, 2022. 3 [32] Tim Salimans, Ian Goodfellow, Wojciech Zaremba, Vicki Cheung, Alec Radford, and Xi Chen. Improved techniques for training gans. NeurIPS, 29, 2016. 6 [33] Tim Salimans, Andrej Karpathy, Xi Chen, and Diederik P Kingma. Pixelcnn++: Improving the pixelcnn with discretized logistic mixture likelihood and other modification-
s. arXiv preprint arXiv:1701.05517, 2017. 3
[34] Jiaming Song, Chenlin Meng, and Stefano Ermon. Denoising diffusion implicit models. In ICLR, 2020. 3, 1 [35] Peize Sun, Yi Jiang, Shoufa Chen, Shilong Zhang, Bingyue Peng, Ping Luo, and Zehuan Yuan. Autoregressive model beats diffusion: Llama for scalable image generation. arXiv preprint arXiv:2406.06525, 2024. 1, 6, 8
[36] Chameleon Team. Chameleon: Mixed-modal early-fusion foundation models. arXiv preprint arXiv:2405.09818, 2024. 2
[37] Keyu Tian, Yi Jiang, Zehuan Yuan, Bingyue Peng, and Liwei Wang. Visual autoregressive modeling: Scalable image generation via next-scale prediction. arXiv preprint arXiv:2404.02905, 2024. 1, 3, 8
[38] Michael Tschannen, Cian Eastwood, and Fabian Mentzer. Givt: Generative infinite-vocabulary transformers. In ECCV, 2024. 2, 3, 8 [39] Aa ̈ron Van Den Oord, Nal Kalchbrenner, and Koray Kavukcuoglu. Pixel recurrent neural networks. In ICML, 2016. 3 [40] Aaron van den Oord, Oriol Vinyals, and koray kavukcuoglu. Neural discrete representation learning. In NeurIPS, 2017. 1, 2, 3 [41] Ruben Villegas, Mohammad Babaeizadeh, Pieter-Jan Kindermans, Hernan Moraldo, Han Zhang, Mohammad Taghi Saffar, Santi-
ago Castro, Julius Kunze, and Dumitru Erhan. Phenaki: Variable length video generation from open domain textual descriptions. In ICLR, 2022. 1 [42] Xinlong Wang, Xiaosong Zhang, Zhengxiong Luo, Quan Sun, Yufeng Cui, Jinsheng Wang, Fan Zhang, Yueze Wang, Zhen Li, Qiying Yu, et al. Emu3: Next-token prediction is all you need. arXiv preprint arXiv:2409.18869, 2024. 2
[43] Yuqing Wang, Shuhuai Ren, Zhijie Lin, Yujin Han, Haoyuan Guo, Zhenheng Yang, Difan Zou, Jiashi Feng, and Xihui Liu. Parallelized autoregressive visual generation. arXiv preprint arXiv:2412.15119, 2024. 1
[44] Yuqing Wang, Tianwei Xiong, Daquan Zhou, Zhijie Lin, Yang Zhao, Bingyi Kang, Jiashi Feng, and Xihui Liu. Loong: Generating minute-level long videos with autoregressive language models. arXiv preprint arXiv:2410.02757, 2024.
[45] Chenfei Wu, Jian Liang, Lei Ji, Fan Yang, Yuejian Fang, Daxin Jiang, and Nan Duan. Nu ̈wa: Visual synthesis pretraining for neural visual world creation. In ECCV, pages 720–736. Springer, 2022. 1 [46] Jiahui Yu, Xin Li, Jing Yu Koh, Han Zhang, Ruoming Pang, James Qin, Alexander Ku, Yuanzhong Xu, Jason Baldridge, and Yonghui Wu. Vector-quantized image modeling with improved vqgan. arXiv preprint arXiv:2110.04627, 2021. 1, 2, 3, 8
[47] Lijun Yu, Yong Cheng, Kihyuk Sohn, Jose ́ Lezama, Han Zhang, Huiwen Chang, Alexander G Hauptmann, MingHsuan Yang, Yuan Hao, Irfan Essa, et al. Magvit: Masked generative video transformer. In CVPR, 2023. 1 [48] Lijun Yu, Jose ́ Lezama, Nitesh B Gundavarapu, Luca Versari, Kihyuk Sohn, David Minnen, Yong Cheng, Agrim Gupta, Xiuye Gu, Alexander G Hauptmann, et al. Language model beats diffusion–tokenizer is key to visual generation. In ICLR, 2024. 1, 2, 3, 6, 8 [49] Qihang Yu, Mark Weber, Xueqing-
 Deng, Xiaohui Shen, Daniel Cremers, and Liang-Chieh Chen. An image is worth 32 tokens for reconstruction and generation. NeurIPS, 2024. 8
[50] Lvmin Zhang and Maneesh Agrawala. Transparent image layer diffusion using latent transparency. arXiv preprint arXiv:2402.17113, 2024. 8
[51] Yue Zhao, Yuanjun Xiong, and Philipp Kra ̈henb ̈uhl. Image and video tokenization with binary spherical quantization. arXiv preprint arXiv:2406.07548, 2024. 1, 2, 3
[52] Chuanxia Zheng and Andrea Vedaldi. Online clustered codebook. In ICCV, 2023. 2, 3 [53] Lei Zhu, Fangyun Wei, Yanye Lu, and Dong Chen. Scaling the codebook size of vqgan to 100,000 with a utilization rate of 99%. arXiv preprint arXiv:2406.11837, 2024. 2
10

Bridging Continuous and Discrete Tokens for Autoregressive Visual Generation
Supplementary Material
Appendix
The supplementary material includes the following additional information: • Sec. A provides implementation details for TokenBridge. • Sec. B presents speed comparison of our token prediction against diffusion-based head. • Sec. C discusses limitations and broader impacts. • Sec. D showcases additional image generation results.
A. Implementation Details for TokenBridge
We train our models on the ImageNet-1K [6] training set, consisting of 1,281,167 images across 1,000 object classes. We adopt the VAE tokenizer from [17] and apply our dimension-wise quantization with B=64 levels to its continuous features. For the autoregressive model architecture, we follow MAR [17], with our L model consisting of 32 transformer blocks (width 1024) and H model using 40 blocks (width 1280). Our dimension-wise autoregressive head uses 1024 hidden dimensions with 4 layers for the L-
 model and 6 layers for the H model. At inference time, we employ temperature sampling and classifier-free guidance [12] to enhance generation quality. The detailed training and sampling hyper-parameters are listed in Tab. 4.
config value
training hyper-params
optimizer AdamW [18] learning rate 8e-4 weight decay 0.02 optimizer momentum (0.9, 0.95) batch size 2048 learning rate schedule cosine decay warmup epochs 200 ending learning rate 0 total epochs 800 dropout rate 0.1 attn dropout rate 0.1 class label dropout rate 0.1 precision bfloat16 EMA momentum 0.9999 max grad norm 1.0
sampling hyper-params
temperature 0.97(L) / 0.91(H) CFG class dropout rate 0.1 guidance scale 3.1 (L) / 3.45 (H)
Table 4. Detailed hyper-parameters for TokenBridge.
B. Speed Comparison of Token prediction
We compare the speed of our dimension-wise prediction approach with MAR’s [17] diffusion-based approach. Table 5 shows the results.
Method Time (ms) Diffusion (MAR) 311.25 ± 1.85 AR (Ours) 52.42 ± 0.57
Table 5. Comparison of single image token prediction time. All measurements conducted with batch size 1 on an NVIDIA A100 GPU, averaged over 100 runs. Our method achieves a 5.94× speedup over MAR’s diffusion sampling (100 steps).
As shown in Table 5, our approach is 5.94× faster than MAR’s [17] diffusion-based [34] token prediction. This efficiency advantage comes from our dimension-wise autoregressive prediction strategy that directly generates discrete tokens without iterative sampling procedures. Although our method requires sequential prediction steps (one per channel), the lightweight design of our AR head and the ability to utilize KV cache in transformers maintain high efficiency compared to diffusion sampling. The -
number of prediction steps in TokenBridge corresponds to the VAE [14] channel count (16 in our implementation). With newer architectures like SDXL’s [24] VAE that use only 4 channels, our approach would require even fewer steps.
C. Limitations and Broader Impacts
Limitations. Our approach inherits limitations from the underlying VAE [14] model. The representation quality of the pretrained VAE directly affects our reconstruction fidelity and generation capabilities. We note that further improvements in continuous tokenizer would directly benefit our approach. Broader Impacts. Our work demonstrates that standard autoregressive modeling with cross-entropy loss can achieve quality comparable to more complex approaches. This finding may encourage simpler model -
designs in visual generation tasks and facilitate unified multimodal modeling based on autoregressive frameworks. Like all generative models, TokenBridge may reflect biases present in training data and could potentially be misused to create misleading content, which warrants careful consideration in deployment.
D. More Visualization Results
1

Figure 9. Additional image generation results of TokenBridge across different ImageNet [6] categories.
2

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:23.140Z
- **Text Length:** 49200 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 12 of 12
