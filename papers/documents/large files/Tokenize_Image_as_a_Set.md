# PDF Document: Geng et al. - 2025 - Tokenize Image as a Set.pdf

**File Path:** Geng et al. - 2025 - Tokenize Image as a Set.pdf

**Processed Date:** 2026-02-10T18:15:43.390Z

**File Size:** 5263.69 KB

**Total Pages:** 10

**Extracted Pages:** 10

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2781

**Title:** Tokenize Image as a Set

**Collection:** Large Files

---

## Extracted Text Content

Tokenize Image as a Set
Zigang Geng1,2, Mengde Xu2, Han Hu2, Shuyang Gu2† 1University of Science and Technology of China 2Tencent Hunyuan Research
zigang@mail.ustc.edu.cn, cientgu@tencent.com
Abstract
This paper proposes a fundamentally new paradigm for image generation through set-based tokenization and distribution modeling. Unlike conventional methods that serialize images into fixed-position latent codes with a uniform compression ratio, we introduce an unordered token set representation to dynamically allocate coding capacity based on regional semantic complexity. This TokenSet enhances global context aggregation and improves robustness against local perturbations. To address the critical -
challenge of modeling discrete sets, we devise a dual transformation mechanism that bijectively converts sets into fixedlength integer sequences with summation constraints. Further, we propose Fixed-Sum Discrete Diffusion—the first framework to simultaneously handle discrete values, fixed sequence length, and summation invariance—enabling effective set distribution modeling. Experiments demonstrate our method’s superiority in semantic-aware representation and generation quality. Our innovations, s-
panning novel representation and modeling strategies, advance visual generation beyond traditional sequential token paradigms. Our code and models are publicly available at https:// github.com/Gengzigang/TokenSet.
1. Introduction
Contemporary visual generation frameworks [10, 24, 36, 41] predominantly adopt a two-stage paradigm: first compressing visual signals into latent representations, then modeling the low-dimensional distributions. Conventional tokenization methods [10, 18, 38, 40] typically employ uniform spatial compression ratios, generating serialized codes with fixed positional correspondence. Consider a beach photo where the upper half is a sky region that contains minimal detail; the lower half contains a sema-
ntically dense foreground—current approaches allocate the same number of codes to both regions. This raises a fundamental question: Should visually simplistic regions receive the same
†Corresponding Author.
Count
...
Encoder
Decoder
63424
Fixed-Sum Discrete Diffusion
Dual Transformation
011201
34
2
6
4
34
2
6
4
TokenSet
...
Xt-1
XT Xt
Noise X0 Data
23 6
4
4
1 2 3 45 6
Set Tokenizer
Figure 1. Pipeline of our method.
representational capacity as semantically rich areas? This paper introduces a completely novel way of visual compression and distribution modeling, TokenSet (Fig. 1). During the compression stage, we propose to tokenize images into unordered sets rather than position-dependent sequences. Unlike serialized tokens that maintain fixed spatial correspondence, our token set formulation enables dynamic attention allocation based on regional semantic complexity. This approach enhances global information -
aggregation, facilitates semantic-aware representation, and exhibits superior robustness to local perturbations. Nevertheless, modeling set-structured data presents significant challenges compared to sequential counterparts. Existing set modeling approaches fall into two categories: The first class [9, 22, 42] adopts pooling-based operations (e.g., mean/sum/max/similar operations) to extract lowdimensional features, it lacks direct supervision on each element in the set, often yielding suboptimal -
results; Other correspondence-based methods (e.g., DETR’s Hungarian matching [2]) seek to construct element-wise supervision
1
arXiv:2503.16425v1 [cs.CV] 20 Mar 2025

through bipartite matching. However, the inherent instability of dynamic matching mechanisms causes supervisory signals to vary across training iterations, leading to suboptimal convergence. To address it, we devise a dual transformation mechanism that converts set modeling into a sequence modeling problem. Specifically, we count the occurrences of each unique token index in the set, transforming unordered data into a structured sequence where: (i) the sequence length equals the codebook size, (i-
i) each element represents nonnegative integer counts, (iii) the summation of all elements equals the number of elements in the set. While existing discrete modeling approaches (e.g., VQDiffusion [12]) handle fixed-length integer sequences but ignore summation constraints, and continuous diffusion models [26] can preserve element sums while struggling with discrete value representations, no current approach simultaneously satisfies all three constraints. We therefore propose Fixed-Sum Discrete Dif-
fusion models. By introducing a constant-sum prior, we simultaneously satisfy all three critical properties and achieve effective modeling of this structured data. Our contributions can thus be summarized as:
1. We propose a novel image generation paradigm through a set-based representation, fundamentally departing from conventional serialized representations. 2. The TokenSet exhibits global contextual awareness, enabling dynamic token allocation to semantic complexity while maintaining robustness against local perturbations. 3. We propose an effective solution for modeling discrete set data through dual transformation, establishing a bijection between unordered sets and serialized data. 4. We propose -
Fixed-Sum Discrete Diffusion, a dedicated generative framework that explicitly enforces summation constraints in discrete data modeling, achieving superior modeling of set distributions.
2. Related Work
2.1. Image tokenization
Image tokenization compresses images from highdimensional pixel space into a compact representation, facilitating subsequent understanding and generation tasks. Early approaches like Variational Autoencoders (VAEs) [18] map input images into low-dimensional continuous latent distributions. Building on this, VQVAE [38] and VQGAN [10] project images into discrete token sequences, associating each image patch with an explicit discrete token. Subsequent works VQVAE-2 [32], RQVAE [21], and MoVQ [44] le-
verage residual quantization strategies to encode images into hierarchical latent representations. Meanwhile, FSQ [29], SimVQ [46], and VQGAN-LC [45] address the representation col
lapse problem when scaling up codebook sizes. Other innovations include a dynamic quantization strategy in DQVAE [16], integration of semantic information in ImageFolder [25], and architectural refinements [1, 39]. Recently, TiTok [41] explores 1D latent sequences for image representation, achieving good reconstruction at an impressive compression ratio.
Despite these advances, previous approaches predominantly encode images into token sequences, where each element corresponds strictly to fixed image positions. This paper proposes representing images as unordered token sets, thereby eliminating positional bias while effectively capturing global visual semantics.
2.2. Set Modeling
Early set-based representations include Bag-of-Words (BoW) [17, 30, 34] and its visual counterparts [5, 20, 35]. More recently, CoC [28] proposes to treat an image as a set of points via clustering. However, these set-based representations lose information from the original data. Conversely, certain data modalities—such as point clouds and bounding boxes—inherently align with set representations. This has motivated substantial research efforts to model permutation-invariant data, yet it presents t-
hree fundamental challenges.
Firstly, prevailing generative paradigms such as autoregressive (AR) models [10, 36, 37] and diffusion models [7, 11, 12, 15, 31] are designed for sequential data modeling, making them incompatible with unordered setstructured data.
Secondly, processing permutation-invariant data necessitates strictly symmetric operations (e.g., sum, max, or similar) to avoid positional dependencies [9, 22, 42]. However, this constraint prevents the use of powerful tools such as convolution and attention, thereby bottlenecking the model’s capacity.
Thirdly, effective modeling of complex data distributions typically requires per-element supervision signals, yet unordered sets inherently lack such mechanisms. Existing approaches like DSPN [43] employ Chamfer loss for supervision, while TSPN [19] and DETR [2] utilize Hungarian matching. However, these matching processes are inherently unstable and often lead to inconsistent training signals. Alternative approaches like PointCloudGAN [23] attempt to directly model the global distribution, which -
compromises training effectiveness and overall performance.
This paper bypasses these limitations through a dual transformation operation, effectively transforming sets into sequences. This transformation enables us to leverage various sequence-based modeling methods to tackle the challenging task of set modeling.
2

3. Method
3.1. Image Set Tokenizer
The key to tokenizing an image into a set is to eliminate position dependencies between visual tokens and the fixed position of the image. While prior work TiTok [41] converts images into 1D token sequences by removing 2D positional relationships, it preserves fixed 1D positional correspondence. We start from this approach and develop a completely position-agnostic tokenization framework. Our architecture employs Vision Transformers (ViT) [8] for both encoder and decoder components. The encoder pr-
ocesses image patches alongside learnable latent tokens, producing continuous latent representations that are discretized through a VQVAE [38] codebook. This process generates a 1D token sequence T = [t1, t2, . . . , tM ], where ti ∈ {0, 1, . . . , C − 1}, with C denoting the codebook size and M representing the token count. To eliminate the 1D position bias, we introduce permutation invariance during decoding. Specifically, we define T as the set representation of T †:
T = {t1, t2, . . . , tM } , (1)
where all permutations of T are considered equivalent. During training, we randomly permute tokens before decode input while maintaining reconstruction targets, as illustrated in Fig. 2. Although the permutation space grows factorially with M , empirical results demonstrate effective learning of permutation invariance through partial permutation sampling. This set-based tokenization demonstrates three principal advantages over serialized tokenization: First, by decoupling tokens from fixed spatial-
 positions, the model learns to dynamically allocate tokens based on global image content rather than local patch statistics. Second, the global receptive field significantly improves noise robustness by preventing over-reliance on local features. Third, through training, tokens spontaneously develop specialized attention patterns focusing on semantically distinct regions (e.g., objects vs. textures). We empirically verify these characteristics in Sec. 4.2 through quantitative evaluations and visu-
alization studies.
3.2. Dual transformation
After tokenizing, an image is represented as an unordered token set T = {t1, t2, . . . , tM }. Modeling such complex sets using neural networks presents significant challenges, primarily due to the inherent unordered nature of sets and the lack of effective supervision of individual elements. Existing sequential modeling approaches, particularly autoregressive [10, 36] and diffusion models [7, 12, 31, 33],
†Strictly speaking, the structure should be referred to multiset due to the potential inclusion of duplicate elements.
Latent Tokens
Image Patches
Mask Tokens
Quantize
Figure 2. Pipeline of our set tokenizer.
face inherent limitations when processing set-structured data. These methods fundamentally rely on the positional ordering of elements, making them not suitable for permutation-invariant sets where both element order ambiguity and exponential permutation possibilities exist. Alternative approaches like PointGAN [23] suffer from training instability and a lack of efficient representation for permutation invariant data. Other methods like DETR [2] leverage Hungarian matching to achieve the set corre-
spondence. However, it suffers from matching instability, hindering robust modeling. To address these challenges, we propose a dual transformation mechanism (Fig. 1) that bidirectionally converts between unordered sets and structured sequences. Given a token set T = {t1, t2, . . . , tM }, we construct a count vector X = (x0, x1, ...xC−1) ∈ NC through:
xj =
M
X
i=1
δ(ti, j), for j = 0, 1, . . . , C − 1, (2)
where δ(ti, j) denotes the Kronecker delta function. By doing this, we effectively convert the unordered token set into serialized data without loss of any information. Furthermore, the converted sequence data X has three critical structural priors: • Fixed-length sequence: The count vector X contains C elements, corresponding to the size of the codebook, ensuring a fixed length sequence. • Discrete count values: Each element xj, which records codebook item frequencies, is an integer in [0, M ] , -
where M is the number of tokens extracted from the encoder. • Fixed-sum constraint: The summation of all values equals the number of encoded tokens:
C −1
X
j=0
xj = M. (3)
In summary, the dual transformation establishes a bidirectional mapping between set and sequence representations, offering two fundamental advantages: (1) It reduces
3

= ∑jj XX�tt
jj − MM > 0 Greedy adjustment Sort: ∆2> ⋯ > ∆jj> ⋯ > ∆1> ⋯
Δ1 = −0.5
XX1 XX0
Δ2 = 0.3 Δj = −0.2
qq(XX�t|X1, X0)
δδ=� jj
XX�tt
jj −MM > 0
XX�tt1
XXtt2
XXtt1 = XXtt1
XXtt
jj
Sort: ∆2> ⋯ > ∆jj> ⋯ > ∆1> ⋯
XX�tt
jj
XXtt1 = XX�tt1
XX�tt2
XXtt2 = XX�tt2 − 1 XXtt
jj = XX�tt
jj−1
XX�t
μμtt
δδ
δδ
Figure 3. Fixed-Sum Diffusion Process. Sample Xt at noise level t = 0.6 is first sampled from the mixed gaussian distribution of X0 and X1, and then adjusted through greedy adjustment. Samples dropped during greedy adjustment are marked with dashed line.
the challenging problem of modeling permutation-invariant sets to the well-studied domain of sequence modeling, crucially enabling auto-regressive and diffusion frameworks for modeling. (2) The identified structural priors—fixed sequence length, discrete value constraints, and summation conservation—provide mathematically grounded regularization that guides effective model learning.
3.3. Fixed-Sum Discrete Diffusion
Given that our dual-transformed sequential data exhibits three favorable prior properties, we systematically investigated several modeling approaches. While both autoregressive models [36] and standard discrete diffusion methods [11, 12] are effective for discrete-valued data, with the latter being particularly suitable for fixed-length sequences, they do not inherently guarantee the fixedsummation property.
Conversely, continuous diffusion models [31] can naturally preserve both fixed-length and fixed-summation constraints through their mean-preserving MSE loss [26], but they struggle with discrete distribution modeling [4].
To synergistically combine the strengths of these approaches while satisfying all three priors, we propose a novel modeling approach called Fixed-Sum Discrete Diffusion (FSDD), illustrated in Fig. 3. Inspired by continuous diffusion methods that enforce summation constraints during intermediate denoising steps, this method integrates a constrained diffusion path within a discrete flow matching architecture. The key innovation lies in ensuring that samples at every intermediate step strictly adhere-
 to the fixedsum constraint.
3.3.1. Training pipeline
Diffusion Process The initial noise sample X1 is drawn from a multinomial distribution over integer vectors of
length C with a fixed summation M :
X1 = (x0
1, x1
1, . . . , xC−1
1 ),
where 0 ≤ xj
1 ≤ M,
C −1
X
j=0
xj
1 = M. (4)
Given X1 sampled from the noise distribution and X0 from the data distribution, both satisfying P X = M , we define the constrained diffusion process as:
q(  ̃Xt|X1, X0) = N (μt, σ2
t ). (5)
The parameters μt and σt satisfy:
μt = t X1 + (1 − t) X0, σt = |X1 − X0|
4 . (6)
This design guarantees the constraint on the summation expectation:
E  ̃Xt
hX  ̃Xt
i
= M, ∀ t ∈ [0, 1]. (7)
However, we still cannot guarantee that each individual sample  ̃Xt satisfies this constraint. Therefore, we perform dynamic adjustments to ensure it. Greedy Adjusting Our adjustment protocol operates under the core objective of preserving the likelihood of  ̃Xt.
Specifically, if the summation of X ̃ t exceeds M , we reduce
certain elements of  ̃Xt through a greedy selection criterion: For each element, we quantify the likelihood degradation caused by each adjustment and prioritize adjusting those that can increase the likelihood or minimize its reduction. Thus, the adjusted sample Xt adheres to both the fixed-sum constraints and the probability distribution in Eq. (5). We provide an illustration in Fig. 3 and pseudo code in Algorithm 1. During training, we implement this greedy adjustment strategy at every diffusion-
 step to integrate the fixedsum constraint.
4

Algorithm 1 Greedy Adjusting Sampling
Require: Target sum M , sample distribution q Ensure: Sample Xt satisfying P Xt = M
1: Sample  ̃Xt ∼ q(·|X1, X0)
2: δ ← P X ̃ t − M
3: d ← q(X ̃ t − sgn(δ)1|X1, X0) − q(X ̃ t|X1, X0) 4: j∗ ← arg Topk(d, |δ|) 5: Initialize Xt ←  ̃Xt
6: Adjust Xt[j∗] ← Xt[j∗] − sgn(δ)1[j∗] 7: return Xt
Moreover, the fixed-sum discrete diffusion employs the standard discrete diffusion loss, where the denoising network θ is trained via cross-entropy loss to predict X0 from noisy input Xt, maintaining discrete state transitions while preserving the summation invariant.
3.3.2. Inference strategy
The inference process of Fixed-Sum Diffusion follows an iterative denoising scheme with enforced summation constraints. Starting from a noise sample X1 that satisfies P X1 = M , we progressively refine the sample through discrete transitions:
pθ(Xt−∆t|Xt) =
X
x0
q(Xt−∆t|Xt, X0) pθ(X0|Xt), (8)
Here, pθ(X0|Xt) represents the discrete data distribution predicted from the noisy data. We employ the top-p sampling strategy to generate X0 candidates, which are then
processed through the posterior term q(  ̃Xt−∆t|Xt, X0). This term implements a truncated Gaussian discretization:
q(  ̃Xt−∆t|Xt, X0) = N (μt−∆t, σ2
t−∆t), (9)
with parameters defined as:
μt−∆t = 1 − ∆t
t Xt + ∆t
t X0,
σt−∆t = |X1 − X0|
4 · f (t − ∆t),
(10)
where f (·) controls the truncation ratio during sampling. To ensure strict adherence to the summation constraint, we apply the greedy adjustment on  ̃Xt−∆t to ensure P Xt−∆t = M , effectively bridging the potential gap between the training and inference phases.
4. Experiments
4.1. Setting
We conducted our experiments on the ImageNet dataset [6], with images at a resolution of 256 × 256. We report our results on the 50,000-images ImageNet validation set, utilizing the Fre ́chet Inception Distance (FID) metric [14]. Our evaluation protocol is provided by [7].
(a) Original image (b) Original order (c) Reversed order
(d) Random shuffle (e) Sorted ascending (f) Sorted descending
Figure 4. Visual comparison of the reconstructed images from various order permutations of the encoded tokens. All reconstructed images are identical, demonstrating the set-based tokenizer is permutation-invariance.
Implementation Details. For tokenizer training, we followed the strategy in TiTok [41] and applied data augmentations, including random cropping and horizontal flipping. We used the AdamW optimizer [27] with a base learning rate of 1e-4 and a weight decay of 1e-4. The model is trained on ImageNet for 1000k steps, with a batch size of 256, equivalent to 200 epochs. We implemented a learning rate warm-up phase followed by a cosine decay schedule, with gradient clipping at a threshold of 1.0. An Expo-
nential Moving Average (EMA) with a 0.999 decay rate was adopted, and we report results from the EMA models. To enhance quality and stabilize training, we incorporated a discriminator loss [10] and trained only the decoder during the final 500k steps. Additionally, we utilized MaskGIT’s proxy code [3] following [41] to facilitate training. The generator configuration aligned with DiT [31]. We used random horizontal flipping as data augmentation. All models were optimized with AdamW [27] using a co-
nstant learning rate of 1e-4 and a batch size of 256, and trained for 200 epochs. We implemented EMA with a decay rate of 0.9999 throughout the training. For inference, we utilized 25 sampling steps combined with classifier-free guidance to further enhance the image quality.
4.2. Set tokenizer
In contrast to sequential image tokenization approaches, representing images as token sets introduces distinct properties, including permutation invariance, global context awareness, and enhanced robustness against local perturbations. Furthermore, we demonstrate that set-based tokenization can simultaneously achieve precise reconstruction while inherently organizing tokens into semantically coherent clusters.
5

Figure 5. The receptive fields of individual tokens. Each column represents the receptive field corresponding to the same token. Previous methods such as VQGAN [10] encoded tokens strictly correspond to specific positions. In contrast, our approach demonstrates a unique property that many tokens possess global receptive fields.
Order Original Reversed Shuffled Ascending Descending rFID↓ 3.62 3.62 3.62 3.62 3.62
Table 1. Quantitative results of reconstructed images using tokens in different decoding orders. The identical rFID across all orders confirms the permutation-invariance property of our tokenizer.
4.2.1. Permutation-invariance
We test the permutation-invariance of our tokenizer by reconstructing images from encoded tokens arranged in different orders. Specifically, we decode the tokens in five different sequence orders: (1) the original order, (2) the reversed order, (3) a randomly shuffled order, (4) tokens sorted in ascending order, and (5) tokens sorted in descending order. As shown in Fig. 4, all reconstructed images are visually identical, indicating the permutation-invariance of our tokenizer. This invariance is f-
urther supported by the quantitative results in Tab. 1, which are consistent across different token orders. These findings demonstrate that the network can successfully learn permutation invariance by training on only a subset of permutations.
4.2.2. Global context awareness
By enforcing permutation invariance, our framework decouples inter-token positional relationships, thereby eliminating sequence-induced spatial biases inherent in conventional image tokenization. This architectural design encourages each token to holistically integrate global contextual information, effectively expanding its theoretical receptive field to encompass the entire feature space. To empirically validate this phenomenon, we visualize the effective receptive field in Fig. 5, which demonst-
rates the global attention
Method #Tokens Signal-to-Noise Ratio (dB)
40 30 20 10 1
VQGAN [10] 256 69.2 36.6 10.9 1.6 0.6 TiTok [41] 128 83.4 55.4 21.4 3.8 1.4 TiTok [41] 256 77.2 44.5 13.2 1.8 0.7
TokenSet † 128 89.4 68.1 38.1 12.7 6.8 TokenSet † 256 87.0 62.4 31.1 9.0 4.3 TokenSet 128 89.5 68.4 38.9 13.9 7.9 TokenSet 256 87.6 64.0 33.2 10.6 5.7
Table 2. Robustness analysis of different tokenizers under varying levels of Gaussian noise. We report the percentage (%) of overlapping tokens between those generated from the original images and the noise-altered images. Although our method is set-based, we additionally provide results obtained by treating token sets as sequences (marked by †) to ensure a fair comparison.
mechanism. Notably, traditional sequence-based tokenizers, such as VQGAN [10], exhibit tight spatial coupling between tokens and fixed local regions. Conversely, our approach fundamentally eliminates positional bias and represents images through the composition of tokens with global receptive fields.
4.2.3. Robustness
Our set tokens, unbound to specific spatial positions yet capturing global image semantics, demonstrate enhanced robustness to noise. Tab. 2 compares the robustness of different tokenizers against Gaussian noise injected into input images. Specifically, we added Gaussian noise with varying standard deviations to images and measured the token overlap ratio between the perturbed images and the orig
6

Figure 6. Visualization of images whose encoded tokens share multiple specific classes, illustrating the inherent semantic clustering in our set-based tokenizer. Images sharing specific token classes exhibit common visual characteristics, such as marine environments, dogs, or birds.
Method Encoder #Tokens #Codebook Acc@1(%) MAE† ViT-L - - 64.4
MAE 75.1
TokenSet ViT-B
128 1024 44.8 128 2048 43.1 128 4096 59.7 128 8192 61.0 32 4096 66.2 64 4096 64.9 128 4096 59.7 256 4096 47.2
Table 3. Linear probing results on ImageNet validation set. We list the reported results of a strong self-supervised method MAE [13] for reference. † denotes MAE trained for the same 200 epochs as our set tokenizer.
inal ones. The results indicate that our tokenizer consistently achieves higher overlap ratios across all noise levels compared to other tokenizers, such as TiTok [41] and VQGAN [10]. Furthermore, while all methods experience performance degradation with increasing noise intensity, the degradation in our approach occurs at a slower rate, underscoring its superior robustness to noise.
4.2.4. Semantic clustering
Given M tokens drawn from C classes, the representation space of our set-based tokenizer is M+C−1
C−1 , significantly smaller than that of a sequence-based tokenizer with a size of CM . The compact representational space produces a more efficient depiction of the image space. Fig. 6 illustrates images whose encoded tokens contain certain classes. Intriguingly, we observe that these token distributions inherently exhibit semantically coherent clustering patterns. For example, images containing six tokens belonging to the 65th class consistently depict birds, while twelve 162nd tokens represent -
dogs. This phenomenon may suggest impli
Method #Tokens #Codebook rFID↓
Taming-VQGAN [10] 256 1024 7.97 Taming-VQGAN [10] 256 16384 4.98 RQVAE [21] 256 16384 3.20 MaskGit-VQGAN [3] 256 1024 2.28 ViT-VQGAN [40] 1028 8192 1.28 TiTok [41] 64 4096 1.70
TokenSet 128 2048 3.62 TokenSet 128 4096 2.74
Table 4. Comparison of the reconstruction results of different tokenizers on the ImageNet benchmark at a resolution of 256 × 256.
Method Set Discrete Fixed-sum gFID↓
AR-order1 ✓ 6.55 AR-order2 ✓ 6.62 AR-random ✓ ✓ 8.99 SetAR ✓ ✓ 6.92 Discrete Diffusion ✓ ✓ 6.23 Continuous Diffusion ✓ ✓ 75.45
FSDD ✓ ✓ ✓ 5.56
Table 5. Ablation study on different modeling methods. Our tokenizer exhibits three important priors: set, discreteness, and fixedsum constraint. We present different modeling methods, indicating which priors they satisfy and their corresponding performance.
cations for advancing content-based image retrieval, where semantically coherent token sets could enable more robust feature indexing. Furthermore, we verify its semantic clustering capacity through linear probing. The results shown in Tab. 3 indicate that even without specialized design, our tokenizer already achieves promising performance.
4.2.5. Reconstruction quality
In Tab. 4, we compare the reconstruction performance of different tokenizers using the ImageNet validation set. Although the random shuffle in our method prevents the network from leveraging the inductive positional bias of images, and the benefits from the representation space of the set are drastically reduced, we find that this seemingly infeasible approach can still achieve good performance comparable to previous mainstream methods [10, 21].
4.3. Fixed-sum Discrete Diffusion
4.3.1. Modeling through priors
In Tab. 5, we compare different modeling methods that leverage different priors. All experiments are conducted using models of the ViT-Small [8] scale. First, as described in Sec. 4.2.1, any permutation of the image token set can equivalently reconstruct the image. We therefore consider randomly sampling two different permutations for autoregressive modeling [10], termed ARorder1 and AR-order2. We find that both achieve nearly
7

#Tokens #Codebook rFID↓ gFID↓ 128 1024 6.51 9.93 128 2048 3.62 7.12 128 4096 2.74 5.56 128 8192 2.35 8.76 32 4096 5.54 6.91 64 4096 3.54 6.03 128 4096 2.74 5.56 256 4096 2.60 7.07 512 4096 2.88 9.37
Table 6. Impact of token numbers and codebook sizes on reconstruction and generation performance.
identical performance. This observation suggests that the permutation-invariant property remains underutilized. To address this, we propose training a single autoregressive model to simultaneously learn all possible permutations of the set, termed AR-random. However, this method exhibits poor generation performance due to the extreme difficulty of modeling the intractably large permutation space. To overcome this limitation, we apply the dual transformation and subsequently model the resulting seq-
uence distribution. We experiment with both autoregressive [10] and discrete diffusion [11], leveraging set and discrete properties, which perform better than the AR-random. However, they inherently fail to guarantee adherence to our fixedsum prior, leading to mediocre results. Likewise, modeling discrete distributions by applying continuous diffusion [31] and subsequent quantization is also proved ineffective. In contrast, our proposed Fixed-Sum Discrete Diffusion (FSDD) approach is uniquely capa-
ble of simultaneously satisfying all these desired properties, leading to the highest performance. This finding demonstrates the importance of incorporating all the requisite priors into the modeling method to facilitate easier modeling. It validates our design choice and highlights the synergy between the tokenizer’s requirements and our modeling approach.
4.3.2. Ablation studies
Prior studies [10, 25] have identified a critical dilemma within the two-stage “compress-then-model” framework for image generation: Increasing the latent space capacity steadily improves reconstruction quality, but generation quality first improves and then declines. Here we rigorously investigate whether our approach can resolve the aforementioned dilemma. We systematically vary the number of tokens and codebook size to study their effects on both reconstruction and generation performance. For g-
eneration evaluation, we adopt a small-scale model (36M parameters) to fit the distribution. As illustrated in Tab. 6, we find that moderately increasing the latent dimensions enhances both reconstruction and generation quality, but exceeding this range degrades both metrics. This diverges from observations in serial
Method #Tokens #Codebook #Params gFID↓
VQGAN [10] 256 1024 1.4B 15.78 VQ-Diffusion [12] 1024 2886 370M 11.89 MaskGiT [3] 256 1024 227M 6.18 LlamaGen [36] 256 16384 111M 5.46 LlamaGen [36] 256 16384 3.1B 2.18 TiTok [41] 128 4096 287M 1.97
TokenSet-S 128 4096 36M 5.56 TokenSet-B 128 4096 137M 5.09
Table 7. Modeling performance comparison on the ImageNet benchmark at 256 × 256 resolution.
ized tokenization frameworks, where increasing the latent dimension improves reconstruction quality while compromising generation performance. We attribute this discrepancy to the lack of spatial correspondence between the setbased latent space and the image grid. Unlike serialized tokenization that enables coordinate-specific mapping through spatial priors, the set-based decoder cannot establish direct spatial correspondence mechanisms. This parallels the challenges faced by diffusion models in m-
odeling excessively intricate latent distributions, thus both approaches suffer performance degradation with excessive dimensionality increases. Crucially, these observations suggest a potential solution to the reconstruction-generation dilemma: by removing the decoder’s reliance on low-effort shortcut mappings, we can align its behavior more closely with the distribution learning process of the second-stage modeling.
Our analysis further reveals that scaling the model size yields consistent performance gains, as empirically demonstrated in Tab. 7. While these results suggest potential benefits from further model expansion, practical constraints limited our exploration beyond the current experimental scope. We leave this for future work.
5. Conclusion
This work challenges the conventional paradigm of serialized visual representation by introducing TokenSet, a set-based framework that dynamically allocates representational capacity to semantically diverse image regions. Through dual transformation, we establish a bijective mapping between unordered token sets and structured integer sequences, enabling effective modeling of set distributions via our proposed fixed-sum discrete diffusion. Experiments demonstrate that this approach not only achieve-
s dynamic token allocation aligned with regional complexity, but also enhances robustness against local perturbations. By enforcing summation constraints during both training and inference, our framework resolves critical limitations in existing discrete diffusion models while outperforming fixed-length sequence baselines. Tokenizing image as a set offers distinct advantages over
8

conventional sequential tokenization, introducing novel possibilities for both image representation and generation. This paradigm shift inspires new perspectives on developing next-generation generative models. In future work, we plan to conduct a rigorous analysis to unlock the full potential of this representation and modeling approach.
References
[1] Shiyue Cao, Yueqin Yin, Lianghua Huang, Yu Liu, Xin Zhao, Deli Zhao, and Kaigi Huang. Efficient-vqgan: Towards high-resolution image generation with efficient vision transformers. In ICCV, pages 7368–7377, 2023. 2 [2] Nicolas Carion, Francisco Massa, Gabriel Synnaeve, Nicolas Usunier, Alexander Kirillov, and Sergey Zagoruyko. End-toend object detection with transformers. In ECCV, 2020. 1, 2, 3 [3] Huiwen Chang, Han Zhang, Lu Jiang, Ce Liu, and William T. Freeman. Maskgit: Masked generative ima-
ge transformer. In CVPR, pages 11305–11315, 2022. 5, 7, 8 [4] Ting Chen, Ruixiang Zhang, and Geoffrey Hinton. Analog bits: Generating discrete data using diffusion models with self-conditioning. arXiv preprint arXiv:2208.04202, 2022. 4 [5] Gabriella Csurka, Christopher Dance, Lixin Fan, Jutta Willamowski, and Ce ́dric Bray. Visual categorization with bags of keypoints. In Workshop on statistical learning in computer vision, ECCV, pages 1–2. Prague, 2004. 2 [6] Jia Deng, Wei Dong, Richard Socher, L-
i-Jia Li, Kai Li, and Li Fei-Fei. Imagenet: A large-scale hierarchical image database. In CVPR, pages 248–255, 2009. 5 [7] Prafulla Dhariwal and Alexander Quinn Nichol. Diffusion models beat gans on image synthesis. In Neurips, pages 8780–8794, 2021. 2, 3, 5 [8] Alexey Dosovitskiy, Lucas Beyer, Alexander Kolesnikov, Dirk Weissenborn, Xiaohua Zhai, Thomas Unterthiner, Mostafa Dehghani, Matthias Minderer, Georg Heigold, Sylvain Gelly, Jakob Uszkoreit, and Neil Houlsby. An image is worth 16x16 words:-
 Transformers for image recognition at scale. In ICLR, 2021. 3, 7 [9] Harrison Edwards and Amos Storkey. Towards a neural statistician. ICLR, 2016. 1, 2 [10] Patrick Esser, Robin Rombach, and Bjo ̈rn Ommer. Taming transformers for high-resolution image synthesis. In CVPR, pages 12873–12883, 2021. 1, 2, 3, 5, 6, 7, 8 [11] Itai Gat, Tal Remez, Neta Shaul, Felix Kreuk, Ricky TQ Chen, Gabriel Synnaeve, Yossi Adi, and Yaron Lipman. Discrete flow matching. Neurips, 37:133345–133385, 2025. 2, 4, 8 [12] S-
huyang Gu, Dong Chen, Jianmin Bao, Fang Wen, Bo Zhang, Dongdong Chen, Lu Yuan, and Baining Guo. Vector quantized diffusion model for text-to-image synthesis. In CVPR, pages 10696–10706, 2022. 2, 3, 4, 8 [13] Kaiming He, Xinlei Chen, Saining Xie, Yanghao Li, Piotr Dolla ́r, and Ross Girshick. Masked autoencoders are scalable vision learners. In CVPR, 2022. 7 [14] Martin Heusel, Hubert Ramsauer, Thomas Unterthiner, Bernhard Nessler, and Sepp Hochreiter. Gans trained by a
two time-scale update rule converge to a local nash equilibrium. In Neurips, pages 6626–6637, 2017. 5 [15] Jonathan Ho, Ajay Jain, and Pieter Abbeel. Denoising diffusion probabilistic models. Neurips, 33:6840–6851, 2020. 2
[16] Mengqi Huang, Zhendong Mao, Zhuowei Chen, and Yongdong Zhang. Towards accurate image coding: Improved autoregressive image generation with dynamic vector quantization. In CVPR, pages 22596–22605, 2023. 2 [17] Thorsten Joachims. Text categorization with support vector machines: Learning with many relevant features. In ECML, pages 137–142. Springer, 1998. 2 [18] Diederik P Kingma, Max Welling, et al. Auto-encoding variational bayes, 2013. 1, 2 [19] Adam R Kosiorek, Hyunjik Kim, and Danilo J Rez-
ende. Conditional set generation with transformers. arXiv preprint arXiv:2006.16841, 2020. 2
[20] Svetlana Lazebnik, Cordelia Schmid, and Jean Ponce. Beyond bags of features: Spatial pyramid matching for recognizing natural scene categories. In CVPR, pages 2169–2178. IEEE, 2006. 2 [21] Doyup Lee, Chiheon Kim, Saehoon Kim, Minsu Cho, and Wook-Shin Han. Autoregressive image generation using residual quantization. In CVPR, pages 11513–11522, 2022. 2, 7 [22] Juho Lee, Yoonho Lee, Jungtaek Kim, Adam R Kosiorek, Seungjin Choi, and Yee Whye Teh. Set transformer. In ICML, 2019. 1, 2 [23] Chun-Lia-
ng Li, Manzil Zaheer, Yang Zhang, Barnabas Poczos, and Ruslan Salakhutdinov. Point cloud gan. arXiv preprint arXiv:1810.05795, 2018. 2, 3
[24] Tianhong Li, Yonglong Tian, He Li, Mingyang Deng, and Kaiming He. Autoregressive image generation without vector quantization. In Neurips, 2024. 1 [25] Xiang Li, Kai Qiu, Hao Chen, Jason Kuen, Jiuxiang Gu, Bhiksha Raj, and Zhe Lin. Imagefolder: Autoregressive image generation with folded tokens. arXiv preprint arXiv:2410.01756, 2024. 2, 8
[26] Shanchuan Lin, Bingchen Liu, Jiashi Li, and Xiao Yang. Common diffusion noise schedules and sample steps are flawed. In WACV, pages 5404–5411, 2024. 2, 4 [27] Ilya Loshchilov and Frank Hutter. Decoupled weight decay regularization. In ICLR, 2019. 5 [28] Xu Ma, Yuqian Zhou, Huan Wang, Can Qin, Bin Sun, Chang Liu, and Yun Fu. Image as set of points. arXiv preprint arXiv:2303.01494, 2023. 2
[29] Fabian Mentzer, David Minnen, Eirikur Agustsson, and Michael Tschannen. Finite scalar quantization: Vq-vae made simple. arXiv preprint arXiv:2309.15505, 2023. 2
[30] Bo Pang, Lillian Lee, and Shivakumar Vaithyanathan. Thumbs up? sentiment classification using machine learning techniques. arXiv preprint cs/0205070, 2002. 2
[31] William Peebles and Saining Xie. Scalable diffusion models with transformers. In ICCV, pages 4172–4182, 2023. 2, 3, 4, 5, 8 [32] Ali Razavi, Aaron Van den Oord, and Oriol Vinyals. Generating diverse high-fidelity images with vq-vae-2. Neurips, 32, 2019. 2
9

[33] Robin Rombach, Andreas Blattmann, Dominik Lorenz, Patrick Esser, and Bjo ̈rn Ommer. High-resolution image synthesis with latent diffusion models. In CVPR, pages 1068410695, 2022. 3 [34] Gerard Salton, Anita Wong, and Chung-Shu Yang. A vector space model for automatic indexing. Communications of the ACM, 18(11):613–620, 1975. 2 [35] Sivic and Zisserman. Video google: A text retrieval approach to object matching in videos. In ICCV, pages 1470–1477. IEEE, 2003. 2 [36] Peize Sun, Yi Jiang, Shouf-
a Chen, Shilong Zhang, Bingyue Peng, Ping Luo, and Zehuan Yuan. Autoregressive model beats diffusion: Llama for scalable image generation. arXiv preprint arXiv:2406.06525, 2024. 1, 2, 3, 4, 8
[37] Keyu Tian, Yi Jiang, Zehuan Yuan, Bingyue Peng, and Liwei Wang. Visual autoregressive modeling: Scalable image generation via next-scale prediction. Neurips, 37:84839–84865, 2025. 2 [38] A ̈aron van den Oord, Oriol Vinyals, and Koray Kavukcuoglu. Neural discrete representation learning. In Neurips, pages 6306–6315, 2017. 1, 2, 3 [39] Jiahui Yu, Xin Li, Jing Yu Koh, Han Zhang, Ruoming Pang, James Qin, Alexander Ku, Yuanzhong Xu, Jason Baldridge, and Yonghui Wu. Vector-quantized image modeling -
with improved vqgan. arXiv preprint arXiv:2110.04627, 2021. 2 [40] Jiahui Yu, Xin Li, Jing Yu Koh, Han Zhang, Ruoming Pang, James Qin, Alexander Ku, Yuanzhong Xu, Jason Baldridge, and Yonghui Wu. Vector-quantized image modeling with improved VQGAN. In ICLR, 2022. 1, 7 [41] Qihang Yu, Mark Weber, Xueqing Deng, Xiaohui Shen, Daniel Cremers, and Liang-Chieh Chen. An image is worth 32 tokens for reconstruction and generation. CoRR, abs/2406.07550, 2024. 1, 2, 3, 5, 6, 7, 8 [42] Manzil Zaheer, Satwik K-
ottur, Siamak Ravanbakhsh, Barnabas Poczos, Russ R Salakhutdinov, and Alexander J Smola. Deep sets. NeurIPS, 30, 2017. 1, 2 [43] Yan Zhang, Jonathon Hare, and Adam Prugel-Bennett. Deep set prediction networks. Neurips, 32, 2019. 2 [44] Chuanxia Zheng, Tung-Long Vuong, Jianfei Cai, and Dinh Phung. Movq: Modulating quantized vectors for highfidelity image generation. Neurips, 35:23412–23425, 2022. 2
[45] Lei Zhu, Fangyun Wei, Yanye Lu, and Dong Chen. Scaling the codebook size of vqgan to 100,000 with a utilization rate of 99%. arXiv preprint arXiv:2406.11837, 2024. 2
[46] Yongxin Zhu, Bocheng Li, Yifei Xin, and Linli Xu. Addressing representation collapse in vector quantized models with one linear layer. arXiv preprint arXiv:2411.02038, 2024. 2
10

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:43.390Z
- **Text Length:** 41208 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 10 of 10
