# PDF Document: Xu et al. - 2025 - XAttention Block Sparse Attention with Antidiagonal Scoring.pdf

**File Path:** Xu et al. - 2025 - XAttention Block Sparse Attention with Antidiagonal Scoring.pdf

**Processed Date:** 2026-02-10T18:18:59.434Z

**File Size:** 7315.49 KB

**Total Pages:** 12

**Extracted Pages:** 12

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2783

**Title:** XAttention: Block Sparse Attention with Antidiagonal Scoring

**Collection:** Large Files

---

## Extracted Text Content

XAttention: Block Sparse Attention with Antidiagonal Scoring
Ruyi Xu * 1 Guangxuan Xiao * 2 Haofeng Huang 1 Junxian Guo 3 Song Han 2 4 https://github.com/mit-han-lab/x-attention
Abstract
Long-Context Transformer Models (LCTMs) are vital for real-world applications but suffer high computational costs due to attention’s quadratic complexity. Block-sparse attention mitigates this by focusing computation on critical regions, yet existing methods struggle with balancing accuracy and efficiency due to costly block importance measurements. In this paper, we introduce XAttention, a plug-and-play framework that dramatically accelerates long-context inference in Transformers models using sp-
arse attention. XAttention’s key innovation is the insight that the sum of antidiagonal values (i.e., from the lower-left to upper-right) in the attention matrix provides a powerful proxy for block importance. This allows for precise identification and pruning of non-essential blocks, resulting in high sparsity and dramatically accelerated inference. Across comprehensive evaluations on demanding long-context benchmarks—including RULER and LongBench for language, VideoMME for video understanding, a-
nd VBench for video generation—XAttention achieves accuracy comparable to full attention while delivering substantial computational gains. We demonstrate up to 13.5× acceleration in attention computation. These results underscore XAttention’s ability to unlock the practical potential of block sparse attention, paving the way for scalable and efficient deployment of LCTMs in real-world applications.
1. Introduction
The transformative impact of Large Language Models (LLMs) (Dubey et al., 2024; OpenAI, 2023) is expanding beyond natural language processing, steering in a new era of multimodal capabilities. Long-Context Transformer Models
*Equal contribution 1Tsinghua University 2Massachusetts Institute of Technology 3SJTU 4NVIDIA. Correspondence to: Guangxuan Xiao <xgx@mit.edu>, Song Han <songhan@mit.edu>.
(LCTMs) are emerging as essential tools in this evolution, particularly for tasks like video understanding (Lin et al., 2023; Wang et al., 2024) and video generation (Kong et al., 2025) that demand processing and generating exceptionally long sequences of information. These models hold the key to unlocking brilliant systems capable of interacting with the world in a human-like way, understanding and generating not just text, but also visual information over extended periods. Imagine AI agents enga-
ging in seamless, multimodal, day-long interactions, or powerful world simulators generating hours of coherent video—tasks that hinge on processing a tremendous number of tokens.
However, realizing this vision requires overcoming a significant challenge: the computational burden of the attention mechanism (Vaswani et al., 2017). While crucial for capturing relationships within sequences, attention’s cost scales quadratically with sequence length. This quadratic scaling creates a substantial bottleneck during the pre-filling stage, hindering the practical deployment of LCTMs for complex, real-world applications.
In the pursuit of more efficient Transformers, block-sparse attention (Zaheer et al., 2020; Guo et al., 2024) has emerged as a promising avenue. The core idea is appealing: instead of computing attention between all token pairs, focus resources on the most crucial regions of the attention map, creating ”blocks” of relevant information. This selective computation promises to drastically reduce computational burden while preserving the model’s ability to capture essential longrange dependencies.
Yet, existing block-sparse methods have struggled to deliver on their full potential, often grappling with a trade-off between accuracy and efficiency. This stems from the lack of lightweight yet effective mechanisms for identifying and prioritizing truly important attention blocks. The overhead involved in determining block importance can negate the gains achieved through sparsity, rendering these methods impractical for real-world deployment.
This leads us to a question: Can we design a block-sparse attention mechanism that dramatically accelerates longcontext Transformers without compromising accuracy, truly unlocking their potential for real-world applications?
1
arXiv:2503.16428v1 [cs.CL] 20 Mar 2025

XAttention: Block Sparse Attention with Antidiagonal Scoring
Antidiagonal Scoring Block Sparse Attention
Block Selection
Figure 1. Illustration of XAttention: XAttention optimizes attention through a three-step process: (Left) Strided Antidiagonal Scoring: Each block (8×8 in this example) is scored by summing values along its strided antidiagonals (stride = 4), with red lines generally indicating higher summed values and blue lines lower values. (Middle) Block Selection: High-scoring blocks are selected based on these evaluations. (Right) Block Sparse Attention: Attention is computed only on the selected blocks (red-
 blocks on the right), achieving substantial computational savings. This example uses a sequence length of 24.
We answer this question by introducing XAttention, a novel plug-and-play framework designed to significantly improve the efficiency of block-sparse attention in long-context Transformers. XAttention is based on the key insight that the sum of antidiagonal values within the attention matrix can serve as a powerful, yet computationally efficient, indicator of block importance. Unlike existing methods that primarily rely on computationally intensive and lossy solutions like token pooling to identify -
important blocks, XAttention leverages this simple score to offer a potentially more streamlined and direct approach for rapidly and accurately identifying critical attention blocks.
This antidiagonal scoring algorithm allows XAttention to aggressively find and prune non-essential computations, achieving substantial sparsity without sacrificing accuracy. We extensively evaluate XAttention on challenging longcontext benchmarks, including RULER and LongBench for natural language processing, VideoMME for video understanding, and VBench for video generation. Across these benchmarks, XAttention achieves accuracy comparable to full attention while delivering substantial computationa-
l gains, demonstrating up to 13.5× acceleration in attention computation during pre-filling. These results underscore XAttention’s ability to unlock the practical potential of block-sparse attention, paving the way for scalable and efficient deployment of long-context Transformers in demanding applications, especially in the expanding field of multimodal AI.
2. Method
In this section, we introduce our method, XAttention. The XAttention algorithm comprises three primary components: (1) importance prediction of attention map blocks, (2) selection of important attention blocks, and (3) prediction of the minimum threshold for attention heads.
Zoom-in (a) Zoom-in (b)
Vertical-Slash Pattern
(a)
(b)
Figure 2. XAttention’s antidiagonal pattern intersects both vertical and slash patterns within a block, enabling efficient detection of these patterns and guiding effective sparse attention computation.
2.1. Importance Prediction
The inherent sparsity of attention maps necessitates a robust strategy for predicting the importance of attention blocks. While methods like MInference (Jiang et al., 2024) and FlexPrefill (Anonymous, 2025) utilize a combination of pooling and ”vertical slash detection,” our ablation study reveals that relying solely on average or sum pooling yields inaccurate predictions. Pooling methods are particularly ineffective when only a few significant vertical or slash patterns exist within a block, fail-
ing to capture these crucial indicators of importance.
MInference and FlexPrefill attempt to overcome this limitation by analyzing the last segment of the input query to identify important ”vertical and slash indices.” However, this approach faces two key challenges: firstly, important attention patterns may not persist in the final query segment; secondly, the search algorithm itself introduces substantial computational overhead (demonstrated in Figure 5).
Fundamentally, an effective block importance prediction method should automatically and robustly identify significant patterns, including crucial vertical and slash patterns. To achieve this, we propose the antidiagonal selection method. Within each block of size B, we select elements along the antidiagonal using a stride S (visualized in Figure 1). The sum of these selected elements serves as a proxy for the overall importance of the corresponding attention block.
The effectiveness of this method can be understood from two perspectives: (1) Information Preservation: This selection strategy ensures that information from all tokens is considered, as each token contributes to at least one antidiagonal sum. (2) Pattern Detection: As illustrated in Figure 2, the antidiagonal intersects every possible vertical and slash pattern within a block. XAttention’s antidiagonal pattern intersects both vertical and slash patterns within a block, enabling efficient detectio-
n of these patterns and guiding effective sparse attention computation. This ensures that no crucial patterns are missed during the importance estimation process.
2

XAttention: Block Sparse Attention with Antidiagonal Scoring
2.2. Threshold Block selection
Based on the antidiagonal scoring pattern, we propose the following sparse attention block selection algorithm. Let S denote the stride, and let B be the size of the sparse attention blocks. The process begins with antidiagonal summation, where we select elements along the antidiagonal within each S × S block of the attention map and compute the sum of these elements for each antidiagonal. Subsequently, we perform softmax normalization by applying the softmax function to these antidiagonal sums, y-
ielding a probability distribution over the antidiagonals. Finally, for block selection, the find blocks function is employed to identify the minimal set of blocks whose cumulative sum of antidiagonal probabilities exceeds a predefined threshold τ . Formally, this can be expressed as:
find blocks(A, τ ) = arg mBin



|B|
X
b∈B
X
(i,j)∈b
Ai,j ≥ τ



where A is the attention map, B is a set of blocks, and |B| represents the number of blocks in the set. This process effectively determines the most important blocks in the attention map based on the antidiagonal scoring pattern and the specified threshold.
Algorithm 1 Block Selection
Require: Query matrix Q ∈ RL×d, Key matrix K ∈ RL×d, block size B, stride S, head dimension dh, threshold τ Ensure: Sparse mask M 1: NB ← ⌊L/B⌋ {Number of blocks} 2: for b = 0 to NB − 1 do 3: Qslice ← Q[bB : (b + 1)B, :] {Extract Q block}
4: Qreshaped ← []
5: for i = S − 1 down to 0 do 6: Qreshaped.append(Qslice[i :: S, :]) {Reshape along antidiagonals with stride S} 7: end for
8: Kreshaped ← []
9: for i = 0 to S − 1 do 10: Kreshaped.append(K[i :: S, :]) {Reshape along antidiagonals with stride S} 11: end for
12: Aapprox ← Softmax QreshapedKT
reshaped
√dh·S {Approximate
attention scores} 13: Mb ← find blocks(Aapprox, τ ) {Find blocks based on threshold} 14: end for
15: M ← concatenate(M0, M1, . . . , MNB−1) {Concatenate block masks}
2.3. Minimum Threshold Prediction
We propose a dynamic programming approach to determine the optimal threshold for each attention head. Previous research indicates that different attention heads exhibit varying sparsity levels and importance. Thus, it is beneficial to dynamically adjust thresholds for individual heads to optimize the balance between accuracy and computational efficiency.
Problem Formulation: Consider a model with H attention heads. We define a dynamic programming table D[h][m], where h ∈ {1, 2, . . . , H} represents the h-th head, and m ∈ {1, 2, . . . , M } denotes the number of threshold adjustments made. D[h][m] stores the best performance achievable when exactly m threshold adjustments have been made across the first h heads.
Dynamic Programming: Our objective is to find the optimal threshold for each head such that their joint contribution maximizes accuracy while minimizing computation. The recurrence relation for the DP table is:
D[h][m] = max(D[h − 1][m], P (h, m))
where P (h, m) represents the performance of the model when the h-th head’s threshold is adjusted for the m-th time. This corresponds to the model’s performance after reducing the threshold of the h-th head by one step relative to the state D[h − 1][m − 1] in the optimization process.
We adjust the threshold for each head by reducing it by 10% at each step:
th(m) = th(m − 1) × 0.9
This ensures a gradual reduction in computation while preserving each head’s contribution to accuracy.
Note that this dynamic threshold prediction method can further optimize XAttention’s sparsity but is not a mandatory component. We present detailed results in the ablation study.
3. Experiments
This section presents our empirical investigation into the effectiveness of XAttention. We first detail the implementation specifics, followed by evaluation results on text and video understanding, as well as video generation benchmarks, against strong baselines. We then test the acceleration performance of XAttention. Finally, we provide analytical ablation studies to further understand the behavior of XAttention.
3.1. Experimental Setup
Models We evaluate XAttention across three distinct domains. For natural language tasks, we employ Llama-3.18B-Instruct (Dubey et al., 2024). In the video understanding
3

XAttention: Block Sparse Attention with Antidiagonal Scoring
Table 1. Accuracy comparison of different methods on Llama-3.18B-Instruct and sequence lengths on RULER. XAttention is configured with Stride S = 8 and S = 16 with Precisely Predicted Minimum Threshold. Input Len 4k 8k 16k 32k 64k 128k Avg.
Full 96.74 94.03 92.02 84.17 81.32 76.89 87.52
FlexPrefill 95.99 93.67 92.73 88.14 81.14 74.67 87.72 MInference 96.54 94.06 91.37 85.79 83.03 54.12 84.15 SeerAttn 84.43 79.55 79.80 72.95 64.79 51.61 72.18 Xattn S=8 96.83 94.07 93.17 90.75 84.08 72.31 88.47 Xattn S=16 96.11 93.95 93.56 90.64 83.12 71.11 88.08
domain, we utilize Qwen2-VL-7B-Instruct (Wang et al., 2024). Finally, for video generation, we use the HunyuanVideo model (Kong et al., 2025). To optimize the trade-off between computational efficiency and accuracy on natural language tasks, we apply our precise threshold prediction method to the Llama-3.1-8B-Instruct model.
Baselines We compare XAttention against several strong baselines. Our primary baseline for dense attention is FlashAttention (Dao, 2023), implemented within the FlashInfer (Ye et al., 2024) framework. We also compare against MInference (Jiang et al., 2024), FlexPrefill (Anonymous, 2025), and SeerAttention (Gao et al., 2024), strictly adhering to their public implementations. For SeerAttention, we incorporate pretraining on the Gare weights. For MInference, we utilize their official configuration, -
where all attention heads adopt the ”Vertical-Slash” sparsity pattern. For FlexPrefill, we set the hyperparameters to γ = 0.95 and τ = 0.1, which, according to the original paper, resulted in the highest accuracy among the provided parameter sets.
Datasets We evaluate our model on a diverse set of tasks spanning natural language understanding, video understanding, and video generation. For natural language tasks, we employ the RULER (Hsieh et al., 2024) dataset, a synthetic benchmark specifically designed to assess long-context abilities in LLMs. RULER allows for customizable sequence lengths and task complexities, extending the traditional needle-in-a-haystack test while introducing novel task categories like multi-hop tracing and aggregat-
ion. We also evaluate on real-world long-context tasks from LongBench (Bai et al., 2023) to test performance in practical scenarios.
For video understanding, we utilize the Video-MME (Fu et al., 2024) dataset, the first comprehensive benchmark for evaluating multimodal large language models (MLLMs) on video analysis. Video-MME comprises 900 videos totaling 254 hours, with durations ranging from 11 seconds to 1 hour, providing a robust testbed for assessing long video comprehension.
In the video generation domain, we leverage 946 GPT
augmented text prompts from VBench (Huang et al., 2024) to generate videos. We then compare the videos generated by our proposed method, XAttention, against those produced by a full attention baseline, evaluating the effectiveness of our approach in generating high-quality video content.
3.2. Accuracy Results
RULER On the RULER benchmark (Hsieh et al., 2024), we apply the dynamic programming method described in Section 3.3 for Minimum Threshold Prediction, utilizing strides of S = 8 and S = 16 with a maximum adjustment number of M = 1000. This yielded a set of minimum thresholds with an average of 0.8, further enhancing the computational efficiency of our sparse attention mechanism.
Table 1 compares the accuracy of XAttention against strong baselines on the Llama-3.1-8B-Instruct model across various sequence lengths on RULER. Notably, both MInference and SeerAttention experience significant performance degradation as context length increases. In contrast, XAttention, configured with S = 8 and S = 16 and employing our precisely predicted minimum thresholds, not only surpasses the optimal sparse attention baseline, FlexPrefill, but also outperforms full attention at several seq-
uence lengths. This demonstrates the robustness of XAttention in handling very long contexts.
LongBench Table 2 presents the performance of XAttention compared to strong baselines on the real-world tasks within the LongBench benchmark, using the Llama-3.1-8BInstruct model. Maintaining the same configuration used for the RULER evaluation, we evaluate XAttention alongside MInference and FlexPrefill. XAttention achieves the highest average score across all tasks, demonstrating its effectiveness in practical scenarios. Notably, the performance of XAttention on individual tasks remains close to-
 that of full attention, indicating that our method preserves accuracy while improving efficiency.
Video Understanding We apply Stride S = 16 and threshold τ = 0.9 parameters on the QwenVL-2-7B model. As shown in Table 3, among the three sparse attention methods, MInference and FlexPrefill fail to achieve optimal performance on Long video tasks. XAttention achieves the best average score among all sparse attention methods and even outperforms FlashAttention on long videos, with a frame rate of 1 frame per second for up to 1 hour.
Video Generation We evaluate XAttention’s performance in the video generation domain using the HunyuanVideo model on prompts from VBench (Huang et al., 2024). The HunyuanVideo model utilizes the Diffusion Transformer (DiT) architecture (Peebles & Xie, 2023), which employs
4

XAttention: Block Sparse Attention with Antidiagonal Scoring
Table 2. Comparison of different attention methods on real-world LongBench tasks using the Llama-3.1-8B-Instruct model. XAttention, configured with stride 8 and Precisely Predicted Minimum Threshold, achieves the best average scores against all baselines.
Single-Doc QA Multi-Doc QA Summarization Few-shot Learning Code
Method
NrtvQA
Qasper
MF-en
HPQA
2WikiMQA
MuSiQue
GovReport
QMSum
VCSum
MultiNews
TREC
TriviaQA
SAMSum
LSHT
LCC
RB-P
Avg.
Full 31.44 25.07 29.40 16.89 17.00 11.79 34.22 23.25 15.91 26.69 72.50 91.65 43.74 46.00 52.19 49.14 40.34
MInference 31.59 24.82 29.53 17.03 16.46 11.58 34.19 23.06 16.08 26.71 72.50 91.18 43.55 46.00 52.33 49.93 40.30 FlexPrefill 27.30 28.56 27.66 17.20 15.14 9.46 32.76 23.66 16.05 27.25 64.00 88.18 41.28 31.00 45.69 47.54 36.83 XAttention 28.99 26.14 29.92 17.40 16.70 11.80 34.41 23.26 16.00 27.04 72.00 91.65 43.86 47.00 52.67 50.84 40.60
Prompt: “A joyful, fuzzy panda sits cross-legged by a crackling campfire, strumming a small acoustic guitar with enthusiasm. The panda's black and white fur contrasts beautifully with the warm glow of the fire, casting flickering shadows on the surrounding snow-covered ground. Behind the panda, majestic snow-capped mountains rise against a twilight sky, their peaks tinged with the last light of the setting sun. The panda's eyes sparkle with delight as it plays a cheerful tune, the serene mountain -
landscape and the cozy campfire creating a magical, heartwarming scene.”
XAttention (#warmup steps = 5, τ = 0 . 95)
XAttention (#warmup steps = 5, τ = 0 . 9)
XAttention (#warmup steps = 0, τ = 0 . 95)
Full Attention (baseline)
Figure 3. Qualitative comparison of video generation results on the VBench benchmark using the first prompt in the VBench dataset. Rows show frames from videos generated using: (1) Full Attention (baseline), (2) XAttention with no warmup and (τ = 0.95), (3) XAttention with 5 warmup steps and (τ = 0.9), and (4) XAttention with 5 warmup steps and (τ = 0.95). XAttention with warmup achieves high visual fidelity to the full attention baseline.
non-causal attention. As existing baselines are not implemented for non-causal attention, we compare XAttention solely against the full attention baseline. Our evaluation considers both quantitative metrics (PSNR, SSIM, LPIPS) and qualitative visual comparisons. We replace all attention computations in the DiT backbone with XAttention, and measure performance against the full attention output using the same random seed and prompt, averaging the results across all 946 VBench prompts. The generated -
videos have a resolution of 720×1280 pixels and 129 frames, with 50 denoising steps. We configure XAttention with a stride of S = 8 and thresholds of τ = 0.9 and τ = 0.95.
Initially, applying XAttention from the very beginning of the denoising process in the HunyuanVideo model led to slight layout shifts in the output video compared to the full attention baseline, resulting in lower quantitative scores. In
spired by research on diffusion models (Xiao et al., 2023c; Li et al., 2024) demonstrating that early denoising steps are critical for determining content layout, we introduce a ”warmup” phase. During this phase, we utilize full attention for the first 5 denoising steps, before switching to XAttention. Figure 3 illustrates the qualitative impact of this warmup strategy.
Table 4 presents the quantitative results of applying XAttention to the HunyuanVideo model. Both configurations, with thresholds of τ = 0.90 and τ = 0.95, achieve high fidelity compared to videos generated with full attention. Specifically, we observe a PSNR up to 23.5, SSIM up to 0.822, and LPIPS down to 0.155, indicating a level of similarity that is difficult for the human eye to discern. As expected, a trade-off exists: a higher threshold τ yields better results but slightly lower sparsity. Ne-
vertheless, both configurations
5

XAttention: Block Sparse Attention with Antidiagonal Scoring
Table 3. Comparison of different methods on QwenVL-2-7B in the Video-MME video understanding task. XAttention is configured with Stride S = 16 and Threshold τ = 0.9. XAttention outperforms Full Attention on long video tasks and achieves the best average performance among all sparse attention methods.
Short (%) Medium (%) Long (%) Overall (%)
subs w/o w/ w/o w/ w/o w/ w/o w/
Full 72.1 78.1 63.9 69.4 55.1 60.2 63.7 69.2
MInference 71.7 77.6 62.3 67.9 55.2 59.8 63.1 68.4 FlexPrefill 71.4 77.4 62.6 68.3 53.8 57.3 62.6 67.7
XAttention 71.9 78.8 62.6 68.5 55.7 60.3 63.3 69.1
Table 4. Quantitative results of applying XAttention to the HunyuanVideo model on the VBench benchmark, using a 5-step fullattention warmup. Higher (τ ) yields better fidelity (higher PSNR, higher SSIM, lower LPIPS) at the cost of slightly reduced sparsity (higher density). Both (τ ) settings demonstrate high similarity to the full attention baseline. XAttn τ PSNR (↑) SSIM (↑) LPIPS (↓) Density (%, ↓)
0.90 21.5 0.767 0.215 34.4 0.95 23.5 0.822 0.155 45.5
achieve over 50% sparsity.
Figure 3 provides a qualitative comparison of videos generated by the baseline (full attention) and XAttention with different configurations using the first prompt in the VBench set. Without the full attention warmup, the generated video, while still high quality, exhibits minor layout differences compared to the baseline. However, with the 5-step full attention warmup, the video generated by XAttention becomes remarkably similar to the one generated by full attention, preserving both high quality-
 and intricate details. These results demonstrate XAttention’s effectiveness in video generation models, a promising and increasingly important application area for LCTMs.
3.3. Efficiency Results
We further analyze the efficiency of XAttention on tasks with varying context lengths, comparing it against FlashAttention, MInference, and FlexPrefill. We focus on the prefill stage and measure the attention speedup achieved by XAttention. We also break down the computation time into pattern selection and sparse attention components, contrasting it with other trainingless pattern selection methods.
Attention Acceleration Figure 4 illustrates the prefill speedup of XAttention across token sequence lengths ranging from 8k to 256k. We conduct these experiments with strides of S = 16 and S = 8, and a threshold of τ = 0.9. On shorter contexts, where attention density tends to be higher,
Table 5. Density on Different Context Lengths. Stride S = 8 achieves lower sparsity, and as context length increases, sparsity generally increases (lower density).
SeqLen Stride 4 Stride 8 Stride 16
4k 51.73% 52.16% 55.38% 8k 40.96% 43.77% 43.55% 16k 27.43% 27.49% 28.91% 32k 21.09% 20.97% 27.93% 64k 9.43% 10.98% 11.32% 128k 6.20% 6.89% 7.32%
both MInference and FlexPrefill experience increased overhead due to more extensive pattern selection. In contrast, XAttention maintains its speedup advantage. Notably, for a context length of 256k, XAttention achieves a maximum prefill attention speedup of 13.5x and 9.8x with corresponding densities of 7.32% and 6.89%, respectively (see Table 5).
Attention Time Breakdown Figure 5 demonstrates that XAttention’s antidiagonal pattern, coupled with its efficient block selection algorithm, results in significantly faster pattern selection compared to MInference and FlexPrefill, which rely on vertical slash index search. Specifically, XAttention’s pattern selection time is up to 24.9x and 5.9x faster, respectively. Furthermore, the accuracy of the antidiagonal pattern allows XAttention to achieve a lower attention density, leading to substantial-
 speedups in the sparse attention computation itself.
3.4. Ablation Study
To further analyze the components of XAttention, we conduct an ablation study, evaluating the effectiveness of the Antidiagonal Pattern, Threshold Block Selection, and Minimum Threshold Prediction.
Antidiagonal Pattern We investigate the importance of the antidiagonal pattern by comparing it with random and diagonal patterns as guidance for predicting attention block sums. For the random pattern, we ensure that S elements are selected within each S × S block, maintaining at least one token selection per row and column. Table 6 shows that the antidiagonal pattern achieves the highest accuracy while maintaining the lowest density across tasks, confirming its superiority.
Stride Sizes We explore the impact of different stride sizes, S. Larger strides lead to sparser sampled attention maps and thus lower computational overhead. However, excessively large strides can compromise the accuracy of block selection. We compare strides of 4, 16, and 64 in Table 7. Our results indicate that when the stride is too long, it fails to accurately detect the previously identified
6

XAttention: Block Sparse Attention with Antidiagonal Scoring
0
3
6
9
12
15
8K 16K 32K 64K 128K 256K
13.5
11.7
8.4
5.1 2.5
1.5
9.8 7.1 4.3
3.2
2.2
1.7
7.6
6.0 3.9
2.2
1.0
0.2
3.1
2.4
1.0
0.8
0.6
0.1
4.2
2.5
1.1
0.8
0.4
0.2
MInference SeerAttention FlexPrefill XAttn S=8 XAttn S=16
Attention Speedup
Figure 4. Speedup comparison of attention methods across context lengths, relative to FlashInfer’s implementation of FlashAttention. XAttention consistently outperforms other sparse attention methods, achieving up to 13.5x speedup at 256K tokens.
0
30
60
90
120
Full MInfer Flex XAttn S=8 XAttn S=16
14.3
13.9
15.8
18.8
73.8
9.3 3.6
20.8
89.6
Pattern Search
Attention
Time (ms)
24.9x
5.9x
Figure 5. Breakdown of prefill attention time. Xattention significantly reduces pattern selection time while maintaining density, achieving substantial acceleration compared to existing methods.
Table 6. Comparison of different patterns. For the same computation, the antidiagonal achieves the lowest density and the highest score.
Stride S = 8 Stride S = 16
Metric 32k Avg. Density 32k Avg. Density
Random 82.53 82.48 27.57% 82.35 80.94 31.36% Diagonal 76.47 81.06 24.47% 58.26 79.63 25.31% Antidiagonal 90.75 88.47 20.97% 90.64 88.08 27.93%
slash attention pattern. An overly sparse antidiagonal cannot effectively distinguish slash patterns entering blocks from different positions, leading to performance degradation.
Top-K vs. Top-Ratio vs. Dynamic Sparsity We evaluate different block selection strategies: Top-K, Top-Ratio, and our Threshold Block Selection (Dynamic Sparsity). For a fair comparison, we set K = 8192 and Ratio = 27% for S = 8, and K = 16384 and Ratio = 31% for S = 16, targeting computational costs similar to our Threshold Block Selection. Table 8 demonstrates that both Top-K and Top-Ratio struggle to handle diverse and dynamic input sequence lengths with comparable computation. In contrast, our -
threshold-based approach, which retains blocks with at least the threshold-level attention, achieves the optimal balance between computation and accuracy.
Table 7. Comparison of different Strides. Excessively long strides fail to distinguish slash patterns with different lengths, leading to decreased accuracy.
Stride S = 4 S = 8 S = 16 S = 64
Avg 88.89 88.47 88.08 81.21 Density 21.09% 20.97% 27.93% 39.88%
Table 8. Comparison of different selection algorithms.
Stride S = 4 S = 8 S = 16
Metric Avg Density Avg Density Avg Density
Top K 84.96 17.40% 84.13 19.92% 83.11 30.15% Ratio 85.96 21.00% 85.42 21.00% 84.24 27.00% Threshold 88.89 21.09% 88.47 20.97% 88.08 27.93%
Minimum Threshold Prediction Finally, we compare the performance of our Minimum Threshold Prediction method against a fixed threshold of τ = 0.9 on the RULER benchmark (Hsieh et al., 2024). Using Minimum Threshold Prediction, we start with τ = 0.9 and set M = 1000, allowing the dynamic programming (DP) algorithm to explore 1,000 optimal threshold combinations. This results in a set of more refined thresholds, with an average value of 0.8. Table 9 demonstrates that the dynamically predicted thresho-
ld achieves lower density and improved accuracy, showcasing the effectiveness of this method.
Table 9. Minimum Threshold Prediction yields improvements in both accuracy and sparsity, translating to faster inference.
Stride S = 4 S = 8 S = 16
Metric Avg Density Avg Density Avg Density
τ = 0.9 87.51 23.06% 84.96 26.13% 85.83 28.36% Minimum τ 88.89 21.09% 88.47 20.97% 88.08 27.93%
7

XAttention: Block Sparse Attention with Antidiagonal Scoring
4. Related Work
4.1. Long-Context Large Language Models
Progress in engineering and algorithms has extended the context length capabilities of Large Language Models (LLMs). Two primary approaches are: (1) compiling large datasets of long texts for continuous pretraining or finetuning (Peng et al., 2023; Chen et al., 2023), and (2) leveraging external memory or retrieval-augmented techniques to enhance long-range context processing (Burtsev et al., 2021; Xiao et al., 2024a; Wu et al., 2024). These advancements enable LLMs to handle increasingly complex -
tasks requiring reasoning over extended sequences.
4.2. Sparse Attention
The attention mechanism at the heart of LLMs exhibits inherent sparsity, meaning many attention weights are negligible and can be pruned without significant performance degradation (Child et al., 2019a). This sparsity becomes more pronounced as context length increases, presenting opportunities for optimizing inference speed. However, the dynamic and input-dependent nature of this sparsity, which varies across different inputs, attention heads, and even layers, poses a significant challenge for ef-
fective exploitation.
Methods like Sparse Transformer (Child et al., 2019b), LongFormer (Beltagy et al., 2020), BigBird (Zaheer et al., 2020) and Selective Attention (Leviathan et al., 2024) reduce complexity through local or block-based attention, but often require retraining, limiting practicality. H2O (Zhang et al., 2023) and TOVA (Oren et al., 2024) discard tokens based on query patterns. StreamingLLM (Xiao et al., 2023b) retains initial and recent tokens for consistent latency and memory usage, enabling processing-
 of sequences longer than the pretraining length. Retrieval head-based methods (Wu et al., 2024; Xiao et al., 2024b) accelerate model decoding by focusing compute on crucial retrieval heads.
To accelerate the prefill stage, recent methods have employed sparse attention patterns. MInference (Jiang et al., 2024) and FlexPrefill (Anonymous, 2025) both utilize pattern selection algorithms to achieve significant speedups during prefill. However, the overhead of these selection algorithms remains a bottleneck. SeerAttention (Gao et al., 2024) achieves high sparsity through pretraining and finetuning of gate parameters, improving efficiency while maintaining low perplexity. Yet, it requires -
a costly training process and exhibits limited performance on downstream tasks. Therefore, a training-free approach with a minimal-overhead selection algorithm is needed to address the increasingly long prefill times associated with growing context lengths.
4.3. LLM Inference Acceleration
Numerous techniques have been developed to accelerate LLM inference. System-level solutions focus on optimizing the original attention computation to better leverage hardware features. Notable examples include FlashAttention (Dao et al., 2022; Dao, 2023), which optimizes memory access patterns for faster attention computation, and RingAttention (Liu et al., 2023), which distributes the attention computation across multiple devices. Other system-level approaches include FlashDecoding (Hong et al., -
2024) and PagedAttention (Kwon et al., 2023), which focus on optimizing the computation process and KV cache management, respectively. Model compression techniques, such as quantization, are also widely employed to reduce model size and memory footprint, leading to faster inference. Examples include SmoothQuant (Xiao et al., 2023a), AWQ (Lin et al., 2024), and QServe (Lin* et al., 2024), which quantize model weights and/or activations to lower bit-widths, thereby reducing memory bandwidth requirem-
ents and accelerating computation.
4.4. Recent Works
Recently, several outstanding works have focused on advancing sparse attention. Sparse VideoGen (Xi et al., 2025) accelerates video generation models by leveraging spatial and temporal heads while preserving generation quality. NSA (Yuan et al., 2025) introduces a natively trainable sparse attention mechanism for efficient long-context modeling. MoBA (Lu et al., 2025) addresses the quadratic complexity of traditional attention mechanisms without relying on strongly biased structures such as sink o-
r window attention by adopting a Mixture of Experts approach. Fast Video Generation (Zhang et al., 2025) reduces computation demands through Sliding Tile Attention, which employs localized spatial-temporal windows instead of full attention computation. Our work aligns with these efforts to democratize AI by reducing computational costs and enabling efficient deployment.
5. Conclusion
We present XAttention, a novel plug-and-play framework for accelerating long-context inference in Transformer models. By leveraging the insight that antidiagonal sums in the attention matrix serve as a robust proxy for block importance, XAttention efficiently identifies and prunes nonessential blocks, achieving substantial computational savings without sacrificing accuracy. Our evaluations on challenging long-context benchmarks in natural language understanding (RULER, LongBench), video understand-
ing (VideoMME), and video generation (VBench) demonstrate that XAttention achieves up to 13.5x speedup in attention computation while maintaining performance comparable to
8

XAttention: Block Sparse Attention with Antidiagonal Scoring
full attention. These results highlight XAttention’s ability to unlock the practical potential of block sparse attention, paving the way for efficient and scalable deployment of Long-Context Transformer Models in real-world applications.
ACKNOWLEDGMENTS
We thank MIT-IBM Watson AI Lab, MIT and Amazon Science Hub, MIT AI Hardware Program, National Science Foundation, Hyundai, and Samsung for supporting this research. We thank NVIDIA for donating the DGX server.
References
Anonymous. Flexprefill: A context-aware sparse attention mechanism for efficient long-sequence inference. In The Thirteenth International Conference on Learning Representations, 2025. URL https://openreview. net/forum?id=OfjIlbelrT.
Bai, Y., Lv, X., Zhang, J., Lyu, H., Tang, J., Huang, Z., Du, Z., Liu, X., Zeng, A., Hou, L., Dong, Y., Tang, J., and Li, J. Longbench: A bilingual, multitask benchmark for long context understanding. arXiv preprint arXiv:2308.14508, 2023.
Beltagy, I., Peters, M. E., and Cohan, A. Longformer: The long-document transformer, 2020. arXiv:2004.05150.
Burtsev, M. S., Kuratov, Y., Peganov, A., and Sapunov, G. V. Memory transformer, 2021. URL https://arxiv. org/abs/2006.11527.
Chen, S., Wong, S., Chen, L., and Tian, Y. Extending context window of large language models via positional interpolation, 2023. arXiv: 2306.15595.
Child, R., Gray, S., Radford, A., and Sutskever, I. Generating long sequences with sparse transformers. 2019a.
Child, R., Gray, S., Radford, A., and Sutskever, I. Generating long sequences with sparse transformers, 2019b. URL https://arxiv.org/abs/1904.10509.
Dao, T. FlashAttention-2: Faster attention with better parallelism and work partitioning, 2023.
Dao, T., Fu, D. Y., Ermon, S., Rudra, A., and Re ́, C. FlashAttention: Fast and memory-efficient exact attention with IO-awareness, 2022. arXiv:2205.14135.
Dubey, A., Jauhri, A., Pandey, A., Kadian, A., Al-Dahle, A., Letman, A., Mathur, A., Schelten, A., Yang, A., Fan, A., Goyal, A., Hartshorn, A., Yang, A., Mitra, A., Sravankumar, A., Korenev, A., Hinsvark, A., Rao, A., Zhang, A., Rodriguez, A., Gregerson, A., Spataru, A., Roziere, B., Biron, B., Tang, B., Chern, B., Caucheteux, C., Nayak,
C., Bi, C., Marra, C., McConnell, C., Keller, C., Touret, C., Wu, C., Wong, C., Ferrer, C. C., Nikolaidis, C., Allonsius, D., Song, D., Pintz, D., Livshits, D., Esiobu, D., Choudhary, D., Mahajan, D., Garcia-Olano, D., Perino, D., Hupkes, D., Lakomkin, E., AlBadawy, E., Lobanova, E., Dinan, E., Smith, E. M., Radenovic, F., Zhang, F., Synnaeve, G., Lee, G., Anderson, G. L., Nail, G., Mialon, G., Pang, G., Cucurell, G., Nguyen, H., Korevaar, H., Xu, H., Touvron, H., Zarov, I., Ibarra, I. A., Klouman-
n, I., Misra, I., Evtimov, I., Copet, J., Lee, J., Geffert, J., Vranes, J., Park, J., Mahadeokar, J., Shah, J., van der Linde, J., Billock, J., Hong, J., Lee, J., Fu, J., Chi, J., Huang, J., Liu, J., Wang, J., Yu, J., Bitton, J., Spisak, J., Park, J., Rocca, J., Johnstun, J., Saxe, J., Jia, J., Alwala, K. V., Upasani, K., Plawiak, K., Li, K., Heafield, K., Stone, K., El-Arini, K., Iyer, K., Malik, K., Chiu, K., Bhalla, K., Rantala-Yeary, L., van der Maaten, L., Chen, L., Tan, L., Jenkins, L., Mart-
in, L., Madaan, L., Malo, L., Blecher, L., Landzaat, L., de Oliveira, L., Muzzi, M., Pasupuleti, M., Singh, M., Paluri, M., Kardas, M., Oldham, M., Rita, M., Pavlova, M., Kambadur, M., Lewis, M., Si, M., Singh, M. K., Hassan, M., Goyal, N., Torabi, N., Bashlykov, N., Bogoychev, N., Chatterji, N., Duchenne, O., C ̧ elebi, O., Alrassy, P., Zhang, P., Li, P., Vasic, P., Weng, P., Bhargava, P., Dubal, P., Krishnan, P., Koura, P. S., Xu, P., He, Q., Dong, Q., Srinivasan, R., Ganapathy, R., Calderer, R.-
, Cabral, R. S., Stojnic, R., Raileanu, R., Girdhar, R., Patel, R., Sauvestre, R., Polidoro, R., Sumbaly, R., Taylor, R., Silva, R., Hou, R., Wang, R., Hosseini, S., Chennabasappa, S., Singh, S., Bell, S., Kim, S. S., Edunov, S., Nie, S., Narang, S., Raparthy, S., Shen, S., Wan, S., Bhosale, S., Zhang, S., Vandenhende, S., Batra, S., Whitman, S., Sootla, S., Collot, S., Gururangan, S., Borodinsky, S., Herman, T., Fowler, T., Sheasha, T., Georgiou, T., Scialom, T., Speckbacher, T., Mihaylov, T., Xi-
ao, T., Karn, U., Goswami, V., Gupta, V., Ramanathan, V., Kerkez, V., Gonguet, V., Do, V., Vogeti, V., Petrovic, V., Chu, W., Xiong, W., Fu, W., Meers, W., Martinet, X., Wang, X., Tan, X. E., Xie, X., Jia, X., Wang, X., Goldschlag, Y., Gaur, Y., Babaei, Y., Wen, Y., Song, Y., Zhang, Y., Li, Y., Mao, Y., Coudert, Z. D., Yan, Z., Chen, Z., Papakipos, Z., Singh, A., Grattafiori, A., Jain, A., Kelsey, A., Shajnfeld, A., Gangidi, A., Victoria, A., Goldstand, A., Menon, A., Sharma, A., Boesenberg, A., V-
aughan, A., Baevski, A., Feinstein, A., Kallet, A., Sangani, A., Yunus, A., Lupu, A., Alvarado, A., Caples, A., Gu, A., Ho, A., Poulton, A., Ryan, A., Ramchandani, A., Franco, A., Saraf, A., Chowdhury, A., Gabriel, A., Bharambe, A., Eisenman, A., Yazdan, A., James, B., Maurer, B., Leonhardi, B., Huang, B., Loyd, B., Paola, B. D., Paranjape, B., Liu, B., Wu, B., Ni, B., Hancock, B., Wasti, B., Spence, B., Stojkovic, B., Gamido, B., Montalvo, B., Parker, C., Burton, C., Mejia, C., Wang, C., Kim, C.,-
 Zhou, C., Hu, C., Chu, C.-H., Cai, C., Tindal, C., Feichtenhofer, C., Civin, D., Beaty,
9

XAttention: Block Sparse Attention with Antidiagonal Scoring
D., Kreymer, D., Li, D., Wyatt, D., Adkins, D., Xu, D., Testuggine, D., David, D., Parikh, D., Liskovich, D., Foss, D., Wang, D., Le, D., Holland, D., Dowling, E., Jamil, E., Montgomery, E., Presani, E., Hahn, E., Wood, E., Brinkman, E., Arcaute, E., Dunbar, E., Smothers, E., Sun, F., Kreuk, F., Tian, F., Ozgenel, F., Caggioni, F., Guzma ́n, F., Kanayet, F., Seide, F., Florez, G. M., Schwarz, G., Badeer, G., Swee, G., Halpern, G., Thattai, G., Herman, G., Sizov, G., Guangyi, Zhang, Lakshminarayana-
n, G., Shojanazeri, H., Zou, H., Wang, H., Zha, H., Habeeb, H., Rudolph, H., Suk, H., Aspegren, H., Goldman, H., Damlaj, I., Molybog, I., Tufanov, I., Veliche, I.-E., Gat, I., Weissman, J., Geboski, J., Kohli, J., Asher, J., Gaya, J.-B., Marcus, J., Tang, J., Chan, J., Zhen, J., Reizenstein, J., Teboul, J., Zhong, J., Jin, J., Yang, J., Cummings, J., Carvill, J., Shepard, J., McPhie, J., Torres, J., Ginsburg, J., Wang, J., Wu, K., U, K. H., Saxena, K., Prasad, K., Khandelwal, K., Zand, K., Matosic-
h, K., Veeraraghavan, K., Michelena, K., Li, K., Huang, K., Chawla, K., Lakhotia, K., Huang, K., Chen, L., Garg, L., A, L., Silva, L., Bell, L., Zhang, L., Guo, L., Yu, L., Moshkovich, L., Wehrstedt, L., Khabsa, M., Avalani, M., Bhatt, M., Tsimpoukelli, M., Mankus, M., Hasson, M., Lennie, M., Reso, M., Groshev, M., Naumov, M., Lathi, M., Keneally, M., Seltzer, M. L., Valko, M., Restrepo, M., Patel, M., Vyatskov, M., Samvelyan, M., Clark, M., Macey, M., Wang, M., Hermoso, M. J., Metanat, M., Rasteg-
ari, M., Bansal, M., Santhanam, N., Parks, N., White, N., Bawa, N., Singhal, N., Egebo, N., Usunier, N., Laptev, N. P., Dong, N., Zhang, N., Cheng, N., Chernoguz, O., Hart, O., Salpekar, O., Kalinli, O., Kent, P., Parekh, P., Saab, P., Balaji, P., Rittner, P., Bontrager, P., Roux, P., Dollar, P., Zvyagina, P., Ratanchandani, P., Yuvraj, P., Liang, Q., Alao, R., Rodriguez, R., Ayub, R., Murthy, R., Nayani, R., Mitra, R., Li, R., Hogan, R., Battey, R., Wang, R., Maheswari, R., Howes, R., Rinott, R.,-
 Bondu, S. J., Datta, S., Chugh, S., Hunt, S., Dhillon, S., Sidorov, S., Pan, S., Verma, S., Yamamoto, S., Ramaswamy, S., Lindsay, S., Lindsay, S., Feng, S., Lin, S., Zha, S. C., Shankar, S., Zhang, S., Zhang, S., Wang, S., Agarwal, S., Sajuyigbe, S., Chintala, S., Max, S., Chen, S., Kehoe, S., Satterfield, S., Govindaprasad, S., Gupta, S., Cho, S., Virk, S., Subramanian, S., Choudhury, S., Goldman, S., Remez, T., Glaser, T., Best, T., Kohler, T., Robinson, T., Li, T., Zhang, T., Matthews, T., Cho-
u, T., Shaked, T., Vontimitta, V., Ajayi, V., Montanez, V., Mohan, V., Kumar, V. S., Mangla, V., Albiero, V., Ionescu, V., Poenaru, V., Mihailescu, V. T., Ivanov, V., Li, W., Wang, W., Jiang, W., Bouaziz, W., Constable, W., Tang, X., Wang, X., Wu, X., Wang, X., Xia, X., Wu, X., Gao, X., Chen, Y., Hu, Y., Jia, Y., Qi, Y., Li, Y., Zhang, Y., Zhang, Y., Adi, Y., Nam, Y., Yu, Wang, Hao, Y., Qian, Y., He, Y., Rait, Z., DeVito, Z., Rosnbrick, Z., Wen, Z., Yang, Z., and Zhao, Z. The llama 3 herd of model-
s, 2024. URL
https://arxiv.org/abs/2407.21783.
Fu, C., Dai, Y., Luo, Y., Li, L., Ren, S., Zhang, R., Wang, Z., Zhou, C., Shen, Y., Zhang, M., et al. Video-mme: The first-ever comprehensive evaluation benchmark of multi-modal llms in video analysis. arXiv preprint arXiv:2405.21075, 2024.
Gao, Y., Zeng, Z., Du, D., Cao, S., So, H. K.-H., Cao, T., Yang, F., and Yang, M. Seerattention: Learning intrinsic sparse attention in your llms. arXiv preprint arXiv:2410.13276, 2024.
Guo, J., Tang, H., Yang, S., Zhang, Z., Liu, Z., and Han, S. Block Sparse Attention. https://github.com/ mit-han-lab/Block-Sparse-Attention, 2024.
Hong, K., Dai, G., Xu, J., Mao, Q., Li, X., Liu, J., Chen, K., Dong, Y., and Wang, Y. Flashdecoding++: Faster large language model inference on gpus, 2024.
Hsieh, C.-P., Sun, S., Kriman, S., Acharya, S., Rekesh, D., Jia, F., Zhang, Y., and Ginsburg, B. Ruler: What’s the real context size of your long-context language models? arXiv preprint arXiv:2404.06654, 2024.
Huang, Z., He, Y., Yu, J., Zhang, F., Si, C., Jiang, Y., Zhang, Y., Wu, T., Jin, Q., Chanpaisit, N., Wang, Y., Chen, X., Wang, L., Lin, D., Qiao, Y., and Liu, Z. VBench: Comprehensive benchmark suite for video generative models. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, 2024.
Jiang, H., Li, Y., Zhang, C., Wu, Q., Luo, X., Ahn, S., Han, Z., Abdi, A. H., Li, D., Lin, C.-Y., Yang, Y., and Qiu, L. Minference 1.0: Accelerating pre-filling for longcontext llms via dynamic sparse attention. arXiv preprint arXiv:2407.02490, 2024.
Kong, W., Tian, Q., Zhang, Z., Min, R., Dai, Z., Zhou, J., Xiong, J., Li, X., Wu, B., Zhang, J., Wu, K., Lin, Q., Yuan, J., Long, Y., Wang, A., Wang, A., Li, C., Huang, D., Yang, F., Tan, H., Wang, H., Song, J., Bai, J., Wu, J., Xue, J., Wang, J., Wang, K., Liu, M., Li, P., Li, S., Wang, W., Yu, W., Deng, X., Li, Y., Chen, Y., Cui, Y., Peng, Y., Yu, Z., He, Z., Xu, Z., Zhou, Z., Xu, Z., Tao, Y., Lu, Q., Liu, S., Zhou, D., Wang, H., Yang, Y., Wang, D., Liu, Y., Jiang, J., and Zhong, C. Hunyuanvideo-
: A systematic framework for large video generative models, 2025. URL https://arxiv.org/abs/2412.03603.
Kwon, W., Li, Z., Zhuang, S., Sheng, Y., Zheng, L., Yu, C. H., Gonzalez, J. E., Zhang, H., and Stoica, I. Efficient memory management for large language model serving with pagedattention, 2023.
10

XAttention: Block Sparse Attention with Antidiagonal Scoring
Leviathan, Y., Kalman, M., and Matias, Y. Selective attention improves transformer, 2024. URL https: //arxiv.org/abs/2410.02703.
Li, M., Cai, T., Cao, J., Zhang, Q., Cai, H., Bai, J., Jia, Y., Liu, M.-Y., Li, K., and Han, S. Distrifusion: Distributed parallel inference for high-resolution diffusion models. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), 2024.
Lin, B., Ye, Y., Zhu, B., Cui, J., Ning, M., Jin, P., and Yuan, L. Video-llava: Learning united visual representation by alignment before projection, 2023.
Lin, J., Tang, J., Tang, H., Yang, S., Chen, W.-M., Wang, W.-C., Xiao, G., Dang, X., Gan, C., and Han, S. Awq: Activation-aware weight quantization for llm compression and acceleration, 2024.
Lin*, Y., Tang*, H., Yang*, S., Zhang, Z., Xiao, G., Gan, C., and Han, S. Qserve: W4a8kv4 quantization and system co-design for efficient llm serving. arXiv preprint arXiv:2405.04532, 2024.
Liu, H., Zaharia, M., and Abbeel, P. Ring attention with blockwise transformers for near-infinite context, 2023.
Lu, E., Jiang, Z., Liu, J., Du, Y., Jiang, T., Hong, C., Liu, S., He, W., Yuan, E., Wang, Y., Huang, Z., Yuan, H., Xu, S., Xu, X., Lai, G., Chen, Y., Zheng, H., Yan, J., Su, J., Wu, Y., Zhang, N. Y., Yang, Z., Zhou, X., Zhang, M., and Qiu, J. Moba: Mixture of block attention for long-context llms, 2025. URL https: //arxiv.org/abs/2502.13189.
OpenAI. Gpt-4 technical report, 2023.
Oren, M., Hassid, M., Yarden, N., Adi, Y., and Schwartz, R. Transformers are multi-state rnns, 2024. URL https: //arxiv.org/abs/2401.06104.
Peebles, W. and Xie, S. Scalable diffusion models with transformers, 2023. URL https://arxiv.org/abs/ 2212.09748.
Peng, B., Quesnelle, J., Fan, H., and Shippole, E. Yarn: Efficient context window extension of large language models, 2023.
Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, Ł., and Polosukhin, I. Attention is all you need. Advances in neural information processing systems, 30, 2017.
Wang, P., Bai, S., Tan, S., Wang, S., Fan, Z., Bai, J., Chen, K., Liu, X., Wang, J., Ge, W., Fan, Y., Dang, K., Du, M., Ren, X., Men, R., Liu, D., Zhou, C., Zhou, J., and Lin, J. Qwen2-vl: Enhancing vision-language model’s
perception of the world at any resolution. arXiv preprint arXiv:2409.12191, 2024.
Wu, W., Wang, Y., Xiao, G., Peng, H., and Fu, Y. Retrieval head mechanistically explains long-context factuality, 2024.
Xi, H., Yang, S., Zhao, Y., Xu, C., Li, M., Li, X., Lin, Y., Cai, H., Zhang, J., Li, D., Chen, J., Stoica, I., Keutzer, K., and Han, S. Sparse videogen: Accelerating video diffusion transformers with spatial-temporal sparsity, 2025. URL https://arxiv.org/abs/2502.01776.
Xiao, C., Zhang, P., Han, X., Xiao, G., Lin, Y., Zhang, Z., Liu, Z., and Sun, M. Infllm: Training-free longcontext extrapolation for llms with an efficient context memory, 2024a. URL https://arxiv.org/abs/ 2402.04617.
Xiao, G., Lin, J., Seznec, M., Wu, H., Demouth, J., and Han, S. SmoothQuant: Accurate and efficient post-training quantization for large language models. In Proceedings of the 40th International Conference on Machine Learning, 2023a.
Xiao, G., Tian, Y., Chen, B., Han, S., and Lewis, M. Efficient streaming language models with attention sinks. arXiv, 2023b.
Xiao, G., Yin, T., Freeman, W. T., Durand, F., and Han, S. Fastcomposer: Tuning-free multi-subject image generation with localized attention, 2023c. URL https: //arxiv.org/abs/2305.10431.
Xiao, G., Tang, J., Zuo, J., Guo, J., Yang, S., Tang, H., Fu, Y., and Han, S. Duoattention: Efficient long-context llm inference with retrieval and streaming heads. arXiv, 2024b.
Ye, Z., Lai, R., Lu, R., Lin, C.-Y., Zheng, S., Chen, L., Chen, T., and Ceze, L. Cascade inference: Memory bandwidth efficient shared prefix batch decoding. https://flashinfer.ai/ 2024/01/08/cascade-inference.html, Jan 2024. URL https://flashinfer.ai/2024/ 01/08/cascade-inference.html. Accessed on 2024-02-01.
Yuan, J., Gao, H., Dai, D., Luo, J., Zhao, L., Zhang, Z., Xie, Z., Wei, Y. X., Wang, L., Xiao, Z., Wang, Y., Ruan, C., Zhang, M., Liang, W., and Zeng, W. Native sparse attention: Hardware-aligned and natively trainable sparse attention, 2025. URL https://arxiv.org/abs/ 2502.11089.
Zaheer, M., Guruganesh, G., Dubey, K. A., Ainslie, J., Alberti, C., Onta ̃n ́on, S., Pham, P., Ravula, A., Wang, Q., Yang, L., and Ahmed, A. Big bird: Transformers for
11

XAttention: Block Sparse Attention with Antidiagonal Scoring
longer sequences. In Larochelle, H., Ranzato, M., Hadsell, R., Balcan, M.-F., and Lin, H.-T. (eds.), Advances in Neural Information Processing Systems 33: Annual Conference on Neural Information Processing Systems 2020, NeurIPS 2020. Curran Associates, Inc., 2020.
Zhang, P., Chen, Y., Su, R., Ding, H., Stoica, I., Liu, Z., and Zhang, H. Fast video generation with sliding tile attention, 2025. URL https://arxiv.org/abs/ 2502.04507.
Zhang, Z., Sheng, Y., Zhou, T., Chen, T., Zheng, L., Cai, R., Song, Z., Tian, Y., R ́e, C., Barrett, C., Wang, Z., and Chen, B. H2o: Heavy-hitter oracle for efficient generative inference of large language models, 2023.
12

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:59.434Z
- **Text Length:** 52513 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 12 of 12
