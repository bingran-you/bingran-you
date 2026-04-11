# PDF Document: Zhu et al. - 2025 - Near-Lossless Model Compression Enables Longer Context Inference in DNA Large Language Models.pdf

**File Path:** Zhu et al. - 2025 - Near-Lossless Model Compression Enables Longer Context Inference in DNA Large Language Models.pdf

**Processed Date:** 2026-02-10T18:17:34.176Z

**File Size:** 1541.85 KB

**Total Pages:** 17

**Extracted Pages:** 17

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3657

**Title:** Near-Lossless Model Compression Enables Longer Context Inference in DNA Large Language Models

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Near-Lossless Model Compression Enables Longer Context
Inference in DNA Large Language Models
Rui Zhu1, Xiaopu Zhou2, Haixu Tang3, Stephen W. Scherer2, and Lucila
Ohno-Machado1,∗
1Yale School of Medicine, New Haven, USA 2The Hospital for Sick Children, Toronto, Canada 3Luddy School of Informatics, Computing, and Engineering, Indiana University Bloomington, USA
Abstract
Trained on massive cross-species DNA corpora, DNA Large language Models (LLMs) learned the fundamental “grammar” and evolutionary patterns of genomic sequences. This makes them powerful priors for DNA sequence modeling, particularly across long distances. Yet, two major constraints hinder their use: the quadratic computational cost of selfattention and the expanding memory required for key-value (KV) caches during autoregressive decoding. These constraints force the use of heuristics like fixed-wi-
ndow truncation or sliding windows, which compromise fidelity on ultra-long sequences by discarding distant information. We introduce Focus (Feature-Oriented Compression for Ultra-long Self-attention), a progressive context-compression module that can be plugged into pretrained DNA LLMs. Focus combines the established k-mer representation in genomics with learnable hierarchical compression: it inserts summary tokens at k-mer granularity and progressively compresses attention key/value activations -
across multiple Transformer layers, retaining only the summary KV states across windows while discarding ordinary-token KV. A shared-boundary windowing scheme yields a stationary cross-window interface that propagates long-range information with minimal loss. We validate Focus on an Evo-2–based DNA LLM, which was fine-tuned on GRCh38 chromosome 1 with self-supervised training and randomized compression schedules to promote robustness across compression ratios. On held-out human chromosomes, Focus -
demonstrated near-lossless fidelity: compressing a 1 kb context into only 10 summary tokens (∼100×) shifted average per-nucleotide probability by only ∼ 4 × 10−4. Compared to the baseline, Focus reduces KV-cache memory and converts effective inference scaling from O(N 2) to near-linear O(N ), enabling ∼100× longer inference windows on commodity GPUs with near-lossless fidelity.
∗Corresponding author.
1
arXiv:2511.14694v1 [q-bio.GN] 18 Nov 2025

1 Introduction
Modeling long-range genomic dependencies is central to modern bioinformatics. Classical statistical approaches—such as k-mer counting and motif scanning, hidden Markov models, and shallow discriminative models—have provided valuable local signals but are typically constrained by limited labeled data, strong independence or locality assumptions, and difficulty scaling to megabase (Mb) contexts [1–4]. By contrast, DNA large language models (DNA LLMs) trained on massive multi-species corpora can inte-
rnalize the “grammar” of the genome (e.g., motif cooccurrence, evolutionary regularities, and distal regulatory couplings), offering strong priors for sequence modeling at scale. Yet, in practice, even DNA LLMs struggle with ultra-long sequences. Their Transformer the backbone incurs a quadratic O(N 2) self-attention cost and maintain a growing memory footprint through the key–value (KV) cache, i.e., the per-layer storage of historical keys (K) and values (V) needed for autoregressive decoding [5,-
 6]. Consequently, standard inference pipelines truncate long sequence context to a fixed window or use slidingwindow heuristics. These methods inevitably discard distal history [7], precisely where much of the biological information, such as enhancer–promoter links, TAD (Topologically Associating Domain) boundary effects, replication timing, repeats, and structural variations (SVs) spanning tens of kilobases to megabases, resides [8–11]. To reconcile the need for Mb-scale evidence with commodity -
hardware limits, we leverage a fundamental genomics abstraction: the k-mer, i.e., a contiguous stretch of k nucleotides, This concept is the building block of the de Bruijn graph, an essential data structure for sequence analysis tasks such as indexing [12, 13], fragment assembly [14, 15], and abundance estimation [16, 17]. Building on this idea, we introduce Focus(Feature-Oriented Compression for Ultralong Self-attention): a learnable, hierarchical context-compression mechanism. By combining k-me-
r–aware summarization with modern LLM compression, Focus plugs into pretrained DNA LLMs and compactly summarizes long DNA sequences with minimal loss. Concretely, as shown in Figure 1, Focus inserts learnable summary tokens at the k-mer level, retaining only their KV states states while discarding those from all ordinary base tokens. A shared-boundary windowing scheme creates a stationary interface, allowing long-range information to propagate hop-by-hop. Consequently, the number of retained state-
s scales with the number of summary tokens, not the original sequence length. This approach reduces KVcache memory by roughly two orders of magnitude and converts inference scaling from O(N 2) to near-linear O(N ), where N is the context length, enabling ∼ 100× longer inference windows on commodity GPUs with near-lossless fidelity. We instantiate Focus on an Evo-2-7b DNA LLM, training only the compression parameters on the GRCh38 chromosome 1 with a self-supervised objective and randomized compres-
sion schedules. Our results demonstrate near-lossless fidelity on held-out human chromosomes and other corpora. section 4 highlights more findings: (i) fidelity degrades predictably with increasing sequence length due to cross-window accumulation, and (ii) this discrepancy is substantially reduced by enlarging the window or using a finer granularity. In terms of scalability, we show that peak memory remains essentially flat with context, and single-GPU inference scales to ∼ 80k tokens with almost -
constant memory usage. Focus is architecture-agnostic and label-free method that can be dropped into any pretrained DNA LLMs to unlock genome-scale context while preserving accuracy. The approach introduces explicit knobs (W and k) to trade fidelity for throughput, though this means minor approximation errors can accumulate across many windows. Focus opens practical routes to Mb-scale reasoning for tasks that intrinsically require distal evidence, such as SV breakpoint interpretation, repeat disam-
biguation, and long-range regulatory inference. Future extensions of the method could include multi-resolution summaries, adaptive k, coupling with efficient attention or retrieval, and broader whole-genome task evaluations.
2

Figure 1: Focus at k-mer granularity with sliding windows. Illustrative example with k=3 and window size W =4. After every k ordinary bases, a learnable Focus token (gray square) is inserted and, through a dedicated attention module, summarizes the immediately preceding k-mer into a compact Focus vector. Generation proceeds in fixed windows (W ): only Focus states are retained and carried across windows, while ordinary-token states are not kept. Legend: layerwise attention vectors (striped), Focu-
s vector (dotted gray), window (outlined blocks).
Contributions. (i) A k-mer–aware, learnable hierarchical compression module for DNA LLMs that retains only summary KV states and uses shared-boundary windows for stable, ultra-long propagation; (ii) a training recipe that requires no architectural changes or labeled data and is robust across compression ratios; (iii) extensive evaluations showing ∼100× longer effective context with near-lossless fidelity and near-linear memory scaling.
2 Background
2.1 Large Language Models
Transformer LLMs compute self-attention by projecting each token into query (Q), key (K), and value (V) vectors. At each position, attention weights are obtained by matching the current Q against all past K’s and then aggregating the corresponding V’s to form a contextualized representation. During autoregressive inference, implementations cache all historical K and V tensors at every layer—the KV cache—so that each new token only computes its own Q and attends to the stored history without recomp-
uting earlier states. While this cache greatly reduces redundant compute, its memory usage grows linearly with context length and scales with layers, heads, and hidden dimensions; meanwhile, attention itself incurs quadratic time/space with sequence length. Consequently, very long contexts become impractical, and practitioners fall back to fixed-window truncation or sliding windows that discard distal evidence. Our method specifically targets this bottleneck by learning to preserve only a small se-
t of information-critical KV states while safely discarding redundant ones.
2.2 DNA Large Language Models
DNA large language models (LLMs) treat genomes as sequences over a four-letter alphabet and learn statistical regularities that span from local motifs to long-range dependencies. Early work established the paradigm: DNABERT[18] adapted the BERT architecture to k-mer tokenization and showed that a single pre-trained model can transfer to promoter, splice-site, and TF-binding prediction with minimal supervision. GenSLM[19] scaled foundation modeling to whole viral genomes, pretraining on >100M proka-
ryotic genes and fine-tuning on 1.5M SARS-CoV-2 genomes to track evolutionary dynamics and variants of concern. These efforts
3

demonstrated that transformer-style models learn biologically meaningful representations, but their context windows typically remained at kilobase scale. Recent models push both scale and context and now define the state of the art. Evo [20] is a 7B-parameter autoregressive genomic foundation model built on the StripedHyena long-context architecture. Trained at single-nucleotide resolution on ∼2.7M prokaryotic and phage genomes, Evo supports ∼131 kb context and generalizes across DNA, RNA, and pr-
oteins [20, 21]. Beyond zero-shot functional inference (e.g., gene essentiality and regulatory activity), Evo can generate long, genome-scale sequences and even co-design multi-component systems such as CRISPR protein–RNA complexes [20]. Building on this, Evo-2 [22] increases both data and context: trained on ∼9.3T nucleotides from >128,000 genomes spanning all domains of life, and using StripedHyena 2, it extends usable context to ∼1 Mb at single-base resolution [22]. Evo-2 reports strong zero-sh-
ot and fine-tuned performance on variant-effect prediction (e.g., BRCA1 ) and enables design of long synthetic sequences resembling natural genomes. Together, Evo and Evo-2 demonstrate that long-context DNA LLMs can reason over distal regulatory signals and structural variation at scales that were previously impractical. However, even with aggressive systems optimizations (e.g., mixed precision and kernel fusion) to reduce cache pressure, the compute and memory footprint remains substantial: in a -
highly optimized BioNeMo implementation of Evo-2 7B requires at least eight H100 GPUs to perform inference on a 1M-base sequence[22] (an 8×H100 server typically costs $250k–$350k in 2025[23–27], such systems beyond the reach of most academic labs). Consequently, many genomics groups can realistically deploy such models only for short-range analyses[28] (e.g., single-variant and haplotype inference), whereas Mb-scale applications such as structural-variation detection or whole-genome inference rema-
in impractical.
2.3 Motivation & Challenge
Why truly long context is essential for DNA LLMs. Recent advances in DNA large language models (LLMs) have extended contextual inference to approximately 1 Mb, allowing the capture of exon–intron boundaries and the regulatory landscape within a single gene body. However, this context length remains insufficient for modeling broader genomic dependencies, such as long-range linkage disequilibrium (LD) patterns observed in genome-wide association studies (GWAS) and trans-regulatory interactions media-
ted by chromatin looping across multiple topologically associating domains (TADs), which can span several megabases. These higher-order regulatory architectures govern how the same DNA sequence gives rise to diverse cellular and tissue identities, encompassing processes fundamental to normal physiology and disease pathogenesis, yet they remain beyond the modeling capacity of current DNA LLMs. Specifically, (i) Regulatory and 3D genomic signals span long distances. Enhancer–promoter interactions, i-
nsulator effects at TAD boundaries, and replication-timing domains often require kb–Mb of joint context to interpret correctly [8, 9]. (ii) Structural variation (SV) is inherently long-range. Deletions, insertions, inversions, translocations, and copy-number variations create breakpoints whose interpretation depends on distal elements and repeat-rich neighborhoods; robust SV calling and impact assessment benefit from kilobases to megabases of flanking regions to distinguish true events from alignm-
ent artifacts and to deduce disruption of regulatory mechanisms [10]. (iii) Repetitive and segmentally duplicated regions demand global disambiguation. Local signals alone are insufficient to resolve ambiguity without broader genomic context [11]. These use-cases all demand substantially longer effective context than standard attention windows can provide.
Where the bottlenecks lie: attention and the KV cache. Self-attention scales quadratically with sequence length, and the KV cache—i.e., the per-layer, per-head storage of all historical keys (K) and values (V) that future queries (Q) must attend to—grows linearly with context. In long-context decoding, memory therefore scales with the number of historical tokens times the dimensionality, multiplied across layers and heads; beyond a few thousand tokens, this
4

becomes the dominant constraint on commodity GPUs. Sliding-window approximations mitigate cost but irrevocably discard distal evidence, which is precisely what many genomic tasks require.
Our approach. Focus introduces learnable, k-mer–aware summary tokens and retains only their KV states across windows while discarding ordinary KV, so the number of persistent states grows with L/k instead of L. A shared-boundary windowing scheme ensures information flows stably across windows with a stationary interface, yielding near-linear scaling in context length and large reductions in peak memory. In our experiments, compressing 1 kb into ∼10 summary tokens induces only ≈0.2–0.4% changes in -
per-token distributions across in-domain and out-of-domain benchmarks, while KV memory drops by ∼100× and effective inference scaling approaches O(N ).
3 Methods
3.1 Problem Definition and Method Intuition
Problem Definition. Let Σ = {A, C, G, T} and x1:L ∈ ΣL be a DNA sequence. Consider a pretrained autoregressive DNA language model Mθ with maximum context length N . For any prefix x1:t with t ≤ N , the model computes the next–base distribution
Pθ(xt+1 | x1:t) .
When L > N , standard practice truncates the context to the most recent N bases (or uses a sliding window), which introduces approximation error. Our goal is to endow Mθ with a compression function f such that, for L > N , the long context can be summarized into an effective representation whose size is on the order of N (or smaller), while preserving predictive fidelity. Formally, for t > N , let the remote history be x1:t−N and define a compressed state
ct = fφ(x1:t−N ) , with effective length N ̃ ≲ N.
The next–base distribution is then computed by conditioning on both the compressed state and the recent, uncompressed window:
P ̃θ,φ(xt+1 | ct, xt−N+1:t) ≈ Pθ(xt+1 | x1:t) .
We require (i) fidelity: the approximation is close to the (ideal) full-context output, e.g.
Ex∼D
h
KL Pθ(· | x1:t) P ̃θ,φ(· | ct, xt−N+1:t)
i
is small,
and (ii) efficiency: computing ct (preferably incrementally) and evaluating P ̃θ,φ should not exceed the time/memory complexity of running Mθ on a length-N input. To avoid ambiguity between the two uses of “K,” we write k (lower case) for the k-mer length (i.e., the number of bases per segment), and reserve boldface K (together with Q and V) for the attention Key/Query/Value tensors. Accordingly, the KV cache denotes the stored pair (K, V) for all past positions.
Method Intuition. In genomics, a k-mer is a contiguous segment of k nucleotides that captures local motifs and short-range syntax. As sketched in Figure 1, we operate at this k-mer granularity: after every k real bases we insert a learnable Focus token that uses a dedicated attention projection to aggregate the salient information from the immediately preceding k-mer into a compact Focus vector. Downstream layers then retain only the Key/Value (KV) states of these Focus tokens—optionally plus a ti-
ny boundary tail—while discarding KV from ordinary
5

tokens. During generation, the sequence is processed in fixed windows of size W ; at each window boundary, a new Focus token is produced, its KV is carried forward, and the window slides to the next segment (see the dashed window outline and gray squares in Figure 1). Consequently, the amount of KV we preserve grows with the number of Focus tokens rather than the raw sequence length, yielding memory that scales roughly with L/k instead of L, with k acting as the primary knob to trade memory/speed-
 against fidelity (larger k gives stronger compression but may increase approximation error). For completeness, the full mathematical formalism and training/inference details are provided in the Appendix A.
3.2 Focus: Feature-Oriented Compression for Ultra-long Self-attention
Setup and tokens. Given a DNA sequence x1:L, we insert one Focus token after every k consecutive base tokens (a k-mer). Let M = ⌈L/k⌉ be the number of k-mers, and denote the i-th Focus token by Si with its associated k-mer (the k bases immediately to its left) denoted as Bi. At designated layers, Si aggregates the salient information from Bi (and earlier summary states), thereby acting as a compact, trainable summary of the respective k-mer. All attention is strictly causal in token order.
Windowing with a shared boundary. We group Focus tokens into windows of fixed size W in the Focus-token domain (not base tokens). The m-th window contains an ordered block
Sm,1, Sm,2, . . . , Sm,W ,
and adjacent windows share one boundary token:
Sm,1 ≡ Sm−1,W (m > 1).
Intuitively, each window carries forward the last summary from the previous window as its first element, so the model only needs to learn a single, canonical interaction pattern among the W Focus tokens in a window and how they connect to earlier context; long-range propagation then follows by repeatedly applying the same pattern window-by-window. If M is the total number of Focus tokens, the number of windows is on the order of M/W ≈ L/(k W ) (the exact count with a one-token overlap is ⌈(M − 1)/-
(W − 1)⌉, which is asymptotically equivalent for large M ).
Visibility and summarization rule. Within a window, base tokens interact locally while Focus tokens carry the global channel:
• A base token belongs to exactly one k-mer and only attends to past tokens within its own k-mer and to preceding Focus tokens in the same window (including the carried boundary
Sm,1).
• The Focus token Sm,j summarizes its left k-mer Bm,j and may attend to the preceding Focus tokens {Sm,1, . . . , Sm,j−1} inside the same window (again including the carried boundary). Earlier base tokens outside the current window are not visible; their information is only accessible through earlier Focus tokens.
Within each window, we update every Focus token by letting it look back only at two sources of information: (i) the k base tokens that form its own segment, and (ii) the earlier Focus tokens inside the same window (including the boundary token carried over from the previous window). It does not access base tokens from previous windows and never looks ahead. The combination is implemented by a small causal-attention block in which the Focus token queries this visible context and produces a single u-
pdated state that replaces its current representation. A complete, equation-level specification (including masks and parameterization) is provided in Appendix A.
6

Intuitively, each Focus token compresses its own k-mer and stitches that summary to the running context represented by earlier Focus tokens. Because consecutive windows share their boundary token, the model only needs to learn a single within-window interaction pattern; applying the same pattern window-by-window propagates information across the full sequence while keeping memory proportional to the number of Focus tokens.
Trainable summary module. Each Focus token is backed by a lightweight, trainable module that operates alongside the frozen DNA LLM decoder. First, we learn a dedicated embedding vector for the special summary token: if the base hidden size is d, this adds exactly one d-dimensional parameter row that encodes how a fresh summary is inserted after every k bases. Second, we attach a compact causal-attention adapter of size O(d2) whose query/key/value projections act only on the visible context of a su-
mmary token—namely its own k-mer Bm, j and the preceding summaries Sm,1, . . . , Sm,j−1 inside the same window. This adapter replaces the summary’s hidden state by attending to those k base features plus earlier summaries, producing a single condensed representation that will be retained in the KV cache. All other parameters of the DNA LLM backbone remain fixed; thus the total number of trainable weights is dominated by (i) the single summary-token embedding and (ii) the projection matrices of thi-
s window-local attention block, which collectively amount to a few tens of millions of parameters—tiny compared with the base model but sufficient to learn how information flows from each k-mer into its summary.
KV retention and memory profile. After completing a window, we discard the key/value (KV) states of its base tokens and retain only the KV states of its W Focus tokens (the last of which is reused as the first token in the next window). Over the whole sequence, the number of retained summaries is approximately M ≈ L/k. The effective KV compression ratio is therefore
γ(L) = Rkept
KV (L)
L ≈1
k for L ≫ k,
while the active memory during window processing is bounded by the W Focus tokens plus the current window’s k-mer bases (a small, fixed multiple of k). In practice, compute scales with the window size (roughly O((W k)2) locally), and long-range state scales linearly with L/k.
Why the shared-boundary window helps. The boundary reuse Sm,1 ≡ Sm−1,W makes the cross-window interface stationary: the model repeatedly applies the same within-window association pattern, needing only to learn how W Focus tokens (plus their local bases) interact under causality. Information from distant context is propagated hop-by-hop through these shared boundaries, yielding strong compression (memory ∝ L/k) while preserving fidelity via learned, window-local summaries.
3.3 Training Objective
We train Focus using a standard cross-entropy language modeling objective, adapted to the segmented DNA sequence. At each position in the augmented sequence (including both base tokens and inserted summary tokens), the model predicts the next token. Let y1, y2, . . . , yN′ denote the tokens in the output sequence (where N ′ = N + M includes the inserted summary tokens). The training loss is:
L=− 1
N′
N′
X
t=1
log P (yt | y<t) , (1)
7

where P (yt | y<t) is the model’s predicted probability for the token yt at position t given all previous tokens y<t (subject to the attention constraints described above). This objective encourages the model to accurately predict both the real nucleotides and the special summary tokens in their appropriate positions. During generation or downstream evaluations, the summary tokens can be omitted or treated as internal markers, while the base tokens produce the actual DNA sequence. By optimizing t-
he loss in Eq. (1), Focus learns to balance local detail and global context: it must use the summarization tokens to carry information forward in order to predict distant bases correctly, thereby effectively learning the compression mechanism as part of the language modeling task.
4 Results
4.1 Experimental Setup: Models and Data
Training corpus and distribution splits. Evo-2 is pre-trained on OpenGenome2, a largescale compendium of genomes spanning all domains of life. To align our evaluation with this training distribution, we partition all test sequences into two groups: In-Distribution (ID), drawn from species represented in OpenGenome2, and Out-of-Distribution (OOD), drawn from species absent in OpenGenome2. Specifically, we use sequences from the MSL39 viral dataset for OOD evaluation, whose species are absent from O-
penGenome2. Note that OpenGenome2 does not include viral genomes in its training data. We report results separately for these two groups throughout. We compare two models: the uncompressed Evo-2 7B and the Focus-compressed Evo-2 7B (abbrev. Focus–Evo-2 7B). Focus uses a fixed window size W =1024; after every k=100 real bases, a learnable Focus token is inserted and only the Key/Value (KV) states of these tokens are retained across windows. All Focus parameters are trained on GRCh38 Chromosome 1; t-
he remaining Evo-2 weights are kept frozen. Unless otherwise stated, inputs are non-overlapping 1024 bp segments. Within the ID group, we further stratify evaluation into (i) held-out human genomic sequences from GRCh38 chromosomes other than Chromosome 1, and (ii) non-human genomic sequences that are included in OpenGenome2. This stratification distinguishes generalization beyond the trained human chromosome from generalization across species within the pre-training distribution. For details of t-
he training procedure and hyperparameters, please refer to Appendix C.
4.2 Evaluation Metrics
We assess Focus along two complementary axes: Fidelity: how closely the compressed model reproduces the outputs of the original model on the same inputs—and Scalability: how compression changes the GPU memory required to process long contexts. For fidelity, we evaluate how closely the output of the compressed model matches the that of the original model on the same sequences. Unless otherwise noted, we take 1 kb segments and run both the uncompressed Evo-2 7B (baseline) and the Focus–Evo-2 7B on e-
ach segment as input. At every position in a segment, we record the model’s next-base probability distribution (i.e., the probabilities it assigns to the next token in the vocabulary). This yields, for each position, a pair of distributions—one from the baseline and one from the compressed model—that we can compare directly. We quantify distributional differences between the output of the baseline and Focus using five complementary metrics, listed here without formulas for readability:
1. L1 distance — sum of absolute differences between the two probability distributions.
2. L2 distance — root-mean-square difference, emphasizing larger deviations.
8

3. Hellinger distance — a symmetric, bounded measure that highlights overlap of probability mass.
4. Jensen–Shannon (JS) divergence — a symmetric, smoothed variant of KL that remains finite even when supports do not overlap.
5. KL divergence — a directional measure that penalizes probability mass missing from Focus relative to the baseline. In here, we use the distribution from uncompressed model as the base.
Formal definitions, estimation details, and implementation notes (e.g., any probability clipping and re-normalization) are provided in Appendix B. For numerical stability we apply probability clipping at 10−12 and re-normalization. A sequence-level score can also be defined as D(x) = 1
T
PT
t=1 D(pt, qt); the figures visualize the overall distribution of per-position metrics across all (t, x) together with the median and IQR.
Figure 2: In-distribution compression fidelity on GRCh38 (excluding Chromosome 1). For Chr2–Chr22, X, and Y, we evaluate Focus–Evo-2 7B against the baseline Evo-2 7B on 500 random 1024 bp segments per chromosome. Histograms show the distribution of L1, L2, Hellinger, JensenShannon, and KL across all positions; annotations mark the median and IQR. Most mass concentrates near zero, indicating high-fidelity compression.
4.3 In-Distribution Compression Fidelity
We first evaluate fidelity under in-distribution conditions, i.e., data aligned with the training distribution of the original DNA LLM (OpenGenome2). For GRCh38 chromosomes Chr2–Chr22, X, and Y, we sample 500 non-overlapping 1024 bp segments per chromosome. As shown in Figure 2, all five discrepancy measures are sharply concentrated near zero, indicating that the compressed model closely reproduces the baseline on the same inputs. Taking L1 distance as an example, the median value of 0.0016 means -
that, at a typical position, the total absolute change across the four next-base probabilities (A/C/G/T) is about 1.6 × 10−3; equivalently, the average per-nucleotide probability shifts by roughly 4 × 10−4. In practical terms, such differences are negligible at the distribution level, consistent with near-lossless fidelity between the compressed and uncompressed models across held-out human chromosomes. We additionally sample 2,000 random 1 kb segments from organisms represented in OpenGenome2, in-
cluding both phage and eukaryotes. As shown in Figure 3, all five discrepancy measures remain small, with medians slightly higher than on GRCh38. This is expected: the compression parameters of Focus were tuned on GRCh38 (human) data, so the compressed model is marginally better adapted to human sequences. Overall, Focus preserves the baseline behavior on indistribution sequences (with respect to the base DNA LLM’s pretraining distribution).
4.4 Out-of-Distribution Compression Fidelity
To test generalization beyond the training distribution, we evaluate on MSL39 viral sequences, which are not included in OpenGenome2. From this corpus we sample 2, 000 random
9

Figure 3: In-distribution compression fidelity on OpenGenome2.
virus, each sampling a 1024 bp segment. As shown in Figure 4, the five metrics remain small in OOD conditions as well (e.g., median/IQR approximately DL1 = 0.0020 / 0.0031, DL2 = 0.0012 / 0.0019, H = 0.0010 / 0.0014; JS and KL medians < 10−5), indicating high-fidelity approximation on unseen genomic domains.
Figure 4: Out-of-distribution compression fidelity on MSL39 viruses sequences.
4.5 Effect of Sequence Length and Hyperparameters on Fidelity
We examine how sequence length influences the approximation quality of the compressed model and how two key hyperparameters—window size (W ) and k-granularity—modulate this effect. Using the Focus–Evo-2 7B trained on GRCh38 Chromosome 1 with W =1024 and k=100, we evaluate on GRCh38 by sampling, for each target length L ∈ {1k, 2k, . . . , 10k}, 100 random non-overlapping segments. For each set we compute the per-position L2 distance to the baseline Evo-2 7B and summarize it by the median across all-
 tokens and sequences. As shown in Figure 5, the discrepancy increases with length: longer inputs span more windows, so approximation errors accumulate across boundaries. We then ablate the two hyperparameters.
Figure 5: Sequence length vs. L2 discrepancy, and effects of W and k. Left: median perposition L2 on GRCh38 for a model trained with W =1024, k=100 (blue) and a retrained model with W =2048 (red). Right: same protocol with W =1024 while changing k from 100 (blue) to 50 (red).
(i) Increasing the window size from W =1024 to W =2048 (same k=100 and training protocol) yields uniformly smaller errors, with the largest gains on the longest inputs (e.g., at 10 kbp, median L2 drops from ≈ 0.030 to ≈ 0.010). Larger windows introduce fewer boundaries and preserve more within-window detail. (ii) Reducing the granularity from k=100 to k=50 (the same W =1024 and the same protocol) also improves fidelity across all lengths (e.g., at 10 kbp,
10

≈ 0.030 → 0.011) by inserting more Focus tokens per window, thus providing finer summaries (subsection 4.6).
4.6 Scalability: Near-Linear Complexity with Context Length
Finally, we measure peak memory usage as a function of context length under identical hardware and batch settings. Figure 6 compares the baseline Evo-2 7B with Focus–Evo-2 7B. The baseline exhibits near-linear growth in both peak reserved and peak allocated memory as the sequence length increases, while the Focus curves remain essentially flat. With W =1024 and k=100, Focus retains only a small set of cross-window KV states, allowing single-GPU inference to scale to ≥80k tokens with almost constan-
t memory. Note that, for sequences ≲50k tokens, Focus shows higher peak memory than the baseline. This is expected: Focus introduces a modest fixed overhead (summary-token projections, per-window buffers, and retained summary KV) that is largely independent of context length.
Figure 6: Scalability of memory with context length. Peak reserved (left) and peak allocated (right) GPU memory versus sequence length for Evo-2 7B (blue) and Focus–Evo-2 7B (red). The baseline grows roughly linearly with context length, whereas Focus is nearly constant (configuration W =1024, k=100), demonstrating the practical memory advantage for very long inputs.
5 Discussion & Future work
Focus compresses self-attention into K-mer–aware summary tokens and retains only their KV states across windows, delivering near-lossless fidelity while unlocking ∼100× longer contexts with near-linear memory. In practice, we observe a small fixed overhead at short lengths (from summary projections and per-window buffers), but as context grows the baseline’s cache scales with raw tokens whereas Focus’s state scales with the number of summaries (O(L/K)), yielding the flat memory curves central to g-
enome-scale inference. Remaining limitations include fixed, globally chosen hyperparameters (W, K) and mild error accumulation across many windows; both suggest principled adaptivity as the next step. Adaptive windowing. A natural extension is to choose W and K on the fly based on regulatory context. Smaller windows and finer K near promoters, enhancers, splice sites, and other highinformation loci can preserve detail; larger windows and coarser K can accelerate traversal of quasi-neutral or repet-
itive regions. TAD-aware boundaries can align window transitions to chromatin domains to reduce cross-window leakage. Multi-resolution and evaluation. Beyond per-position fidelity, multi-resolution schedulescoarse summaries for navigation, fine summaries on demand—can further reduce cost, and retrieval-style memory could cache reusable summaries of recurrent repeats. We will evaluate adaptive Focus on whole-genome pipelines with task-level metrics, ablations of adaptive policies, and robustness ac-
ross species and assays.
11

References
[1] Grant, C. E., Bailey, T. L. & Noble, W. S. FIMO: scanning for occurrences of a given motif. Bioinformatics 27, 1017–1018 (2011).
[2] Eddy, S. R. Profile hidden markov models. Bioinformatics 14, 755–763 (1998).
[3] Ghandi, M., Lee, D., Mohammad-Noori, M. & Beer, M. A. Enhanced regulatory sequence prediction using gapped k-mer features. PLoS Comput. Biol. 10, e1003711 (2014).
[4] Libbrecht, M. W. & Noble, W. S. Machine learning applications in genetics and genomics. Nat. Rev. Genet. 16, 321–332 (2015).
[5] Zaheer, M. et al. Big bird: Transformers for longer sequences. In Advances in Neural Information Processing Systems (NeurIPS), vol. 33, 17283–17297 (2020).
[6] Rae, J. W., Potapenko, A., Jayakumar, S. M., Hillier, C. & Lillicrap, T. P. Compressive transformers for long-range sequence modelling. In International Conference on Learning Representations (ICLR) (2020). ArXiv:1911.05507.
[7] Dai, Z. et al. Transformer-xl: Attentive language models beyond a fixed-length context. In Proceedings of the 57th Annual Meeting of the Association for Computational Linguistics (ACL), 2978–2988 (2019).
[8] Dixon, J. R. et al. Topological domains in mammalian genomes identified by analysis of chromatin interactions. Nature 485, 376–380 (2012).
[9] Marchal, C., Sima, J. & Gilbert, D. M. Control of dna replication timing in the 3d genome. Nat. Rev. Mol. Cell Biol. 20, 721–737 (2019).
[10] Sedlazeck, F. J. et al. Accurate detection of complex structural variations using singlemolecule sequencing. Nat. Methods 15, 461–468 (2018).
[11] Treangen, T. J. & Salzberg, S. L. Repetitive dna and next-generation sequencing: computational challenges and solutions. Nat. Rev. Genet. 13, 36–46 (2012).
[12] Marchet, C. et al. Data structures based on k-mers for querying large collections of sequencing data sets. Genome research 31, 1–12 (2021).
[13] Shiryev, S. A. & Agarwala, R. Indexing and searching petabase-scale nucleotide resources. Nature methods 21, 994–1002 (2024).
[14] Pevzner, P. A., Tang, H. & Waterman, M. S. An eulerian path approach to dna fragment assembly. Proceedings of the national academy of sciences 98, 9748–9753 (2001).
[15] Chikhi, R. & Medvedev, P. Informed and automated k-mer size selection for genome assembly. Bioinformatics 30, 31–37 (2014).
[16] Melsted, P. & Halldórsson, B. V. Kmerstream: streaming algorithms for k-mer abundance estimation. Bioinformatics 30, 3541–3547 (2014).
[17] Benoit, G. et al. Multiple comparative metagenomics using multiset k-mer counting. PeerJ Computer Science 2, e94 (2016).
[18] Ji, Y., Zhou, Z., Liu, H. & Davuluri, R. V. DNABERT: pre-trained bidirectional encoder representations from transformers model for dna-language in genome. Bioinformatics 37, 2112–2120 (2021).
12

[19] Zvyagin, M. et al. Genslms: Genome-scale language models reveal sars-cov-2 evolutionary dynamics. International Journal of High Performance Computing Applications 37, 683–705 (2023).
[20] Nguyen, E. et al. Sequence modeling and design from molecular to genome scale with Evo. Science (2024).
[21] Marchal, I. Evo learns biological complexity from the molecular to genome scale. Nature Biotechnology 42, 1793 (2024).
[22] Brixi, G. et al. Genome modeling and design across all domains of life with evo 2. bioRxiv (2025). Preprint.
[23] Supermicro. 8u gpu superserver (sys-821ge-tnhr). https://store.supermicro.com/us_ en/8u-gpu-superserver-sys-821ge-tnhr.html (2025). Unit price $284,678.39; supports up to 8 NVIDIA HGX H100/H200; accessed 2025-11-11.
[24] Thinkmate. Supermicro gpu superserver 821ge-tnhr (8× hgx h100/h200) – configured price. https://www.thinkmate.com/system/superserver-821ge-tnhr (2025). Configured price $298,313.00; accessed 2025-11-11.
[25] Uvation Marketplace. Dell poweredge xe9680 rack ai server with 8 nvidia hgx h100 80gb 700w sxm5 gpus. https://marketplace.uvation.com/ dell-poweredge-xe9680-8x-nvidia-hgx-h100-80gb-gpu-server/ (2025). Listed price $320,499.00; accessed 2025-11-11.
[26] Arc Compute. Nvidia hgx h100 gpu servers – dell poweredge xe9680 (8× h100 80gb) starting at. https://www.arccompute.io/solutions/hardware/nvidia-hgx-h100-gpu-servers (2025). Starting at $224,999 USD; accessed 2025-11-11.
[27] Supermicro. Supermicro nvidia h100 pcie gen 5.0 x16 passive cooling (80gb) – product page. https://store.supermicro.com/us_en/ supermicro-nvidia-h100-pcie-gen-5-0-x16-passive-cooling-ai-inference-card-gpu-nvh100-80. html (2025). Listed price $27,295.40 per H100 80GB PCIe; accessed 2025-11-11.
[28] Zhu, R. et al. Advancing human population genomics with dna foundation models. medRxiv 2025–09 (2025).
13

A Formal Methodology
Given a DNA sequence x = (x1, . . . , xL), we partition it into consecutive windows of fixed length W (with W ≤ N , the base context size if applicable). Let the w-th window cover
Iw = [(w − 1)W + 1, wW ] ∩ [1, L], M = L
W.
Within each window, we insert one Focus token for every k real bases, placed at a pre-defined offset (e.g., right boundary) relative to its associated k-mer. The number of Focus tokens in window w is
Bw =
l |Iw| k
m
,
and the set of all Focus positions in window w is denoted Bw. Each Focus token has its own learnable embedding and occupies a real sequence position; all attention is strictly causal.
Specialized attention and summarization. At a selected subset of decoder layers, we introduce a light-weight Focus attention unit to aggregate information into Focus tokens. Let
H(l) = [h(l)
1 , . . . , h(l)
T ] be the hidden states at layer l (including real and Focus positions). For the j-th Focus token in window w, indexed by bw,j, denote its associated k-mer by Sw,j ⊆ Iw (the k real tokens immediately to its left). The layer-wise compression map is
h(l+1)
bw,j = f { h(l)
t : t ∈ Sw,j }; Θ(l) , (2)
where Θ(l) are learnable parameters. Concretely, f (·) is realized by masked multi-head attention with the Focus token as the query, and the visible set (keys/values) restricted by strict causality:
h(l+1)
bw,j = MHA Q = h(l)
bw,j W (l)
Q , K = H(l)
Vbw,j
W (l)
K , V = H(l)
Vbw,j
W (l)
V , (3)
with Vbw,j ⊆ Iw ∪ (∪w′<wBw′) containing only past positions within the current window and all past Focus tokens from previous windows; future positions are never visible. Non-Focus tokens may bypass this unit or be updated by standard decoder layers. Importantly, Focus does not explicitly compress hidden states beyond normal forward passes; compression is effected by which KV entries are retained across windows .
KV compression and budget. After finishing window w, we discard KV for ordinary tokens in Iw and retain only KV for Bw (plus a small boundary tail if required). After processing the first L tokens, the retained KV count satisfies
Rkept
KV (L) ≤
M
X
w=1
lW K
m
+W ≈ L
K + W, (4)
compared to Rfull
KV(L) = L without compression. The average compression ratio is thus
γ ≜ Rkept
KV (L)
Rfull
KV(L) ≈ 1
K +W
L , so for L ≫ W : γ ≈ 1
K . (5)
Hence, choosing larger k reduces the retained KV nearly in proportion to 1/K.
14

A.1 Formal Autoregressive Training
Objective and visibility. Training follows next-token autoregressive learning while embedding a compression-aware visibility rule. Let Φ denote backbone parameters and Θ the Focusrelated parameters (attention weights, Focus embeddings, etc.). For any position t (real or Focus), define its visible context C(t) to include only past positions, and—across windowsonly the retained Focus KV from earlier windows (ordinary-token KV from previous windows is not visible). To force Focus tokens to carry pred-
ictive content, we supervise them to predict the next real base to their right. Let
π(t) = min{ u > t : u is a real-base position }.
The cross-entropy loss is
L(Φ, Θ) = −
X
t∈I∪B
log pΦ,Θ xπ(t) C(t) , (6)
where I and B denote the sets of real-base and Focus positions, respectively. For real-base t, (6) reduces to standard next-token prediction. For Focus positions, (6) compels the Focus representation to summarize sufficient information to predict the immediate next real base, thereby learning to encode the k-mer (and longer-range) cues into a compact state.
Parameter updates and regularization. To introduce compression without eroding backbone competence, we typically freeze most of Φ and optimize Θ; light adapters (e.g., LoRA) or a small subset of high layers can be optionally unfrozen. For robustness, we can randomize compression configurations during training (e.g., enabling Focus attention at different layers or slightly perturbing k), encouraging stable performance across compression strengths. All such choices fit within the single objective (6-
) without modifying the loss form.
Cross-window consistency. Two equivalent implementations enforce the same semantics: (i) sequential windowed training, which processes windows in order and explicitly drops non-Focus KV after each window; or (ii) masked-parallel training on a longer segment, using attention masks to emulate that only earlier Focus states are visible across window boundaries. In both cases, the definition of C(t) guarantees that past ordinary tokens are invisible to later windows whereas past Focus tokens remain vi-
sible, aligning training-time visibility with inference-time memory.
A.2 Inference-time Compression Strategy
Streaming with controlled memory. At inference, we process windows I1, I2, . . . , IM in order. Within each window, we insert Focus tokens every k real bases and apply the update in (3). After finishing window w, we discard KV for ordinary tokens in Iw and retain KV for Bw (plus a minimal boundary tail, if needed). The retained Focus KV from prior windows is supplied as history when processing window w +1. This repeats until the entire sequence (or generated prefix) is covered. By (4)–(5), the ret-
ained KV grows approximately as L/k (plus W ), yielding a near-linear memory profile in L with slope 1/k.
Complexity and tunable trade-offs. Within each window, attention remains O(W 2); across windows, the “memory channel” is carried by roughly L/k Focus tokens. Overall compute is thus O(M W 2) with M = ⌈L/W ⌉, while memory is governed by (4) and scales ≈ L/k. Larger k strengthens compression (lower memory and latency) at the cost of coarser summaries; smaller k improves fidelity but increases KV. A dynamic policy is also possible: use stronger compression (larger k or fewer enabled layers) for dista-
nt context and lighter compression near the current prediction point. For comparability, our evaluations adopt a fixed (W, k) and layer configuration,
15

but the interface to downstream tasks remains identical to the base decoder: given any-length DNA input, the model outputs next-base distributions, differing only in its internal maintenance of compact Focus memory.
B Metrics
(1) L1 distance
DL1(p, q) =
V
X
i=1
|pi − qi| . (7)
(2) L2 distance
DL2(p, q) =
V
X
i=1
pi − qi
2 1/2
. (8)
(3) Hellinger distance
H(p, q) = √12 ∥√p − √q∥2 =
v u
u
t1−
V
X
i=1
√piqi . (9)
(4) Jensen–Shannon divergence
JS(p∥q) = 1
2 KL(p∥m) + 1
2 KL(q∥m) , m = 1
2 (p + q), (10)
with KL(a∥b) = P
i ai log ai
bi (natural log; units in nats).
(5) KL divergence (base ∥ Focus)
KLbase∥Focus(p∥q) =
V
X
i=1
pi log pi
qi
. (11)
For numerical stability we apply probability clipping at 10−12 and re-normalization. A sequence-level score can also be defined as D(x) = 1
T
PT
t=1 D(pt, qt); the figures visualize the overall distribution of per-position metrics across all (t, x) together with the median and IQR.
C FOCUS hyper-parameters
Table 1: Full configuration.
Parameter (symbol) Value Meaning
Backend BioNeMo Adapter on NeMo/Megatron. Backbone M Evo-2 7B Base LLM; frozen. Window size W 1024 Block length. Cadence k 100 Insert one FOCUS per k bases. #FOCUS per window b 1 FOCUS tokens per window. Condense factor r ∼100× Approx KV compression. Freeze base true Train adapter + FOCUS embedding. Max position Lmax 131,072 Long-context range.
(continued)
16

Parameter (symbol) Value Meaning
Special FOCUS token reserved Tokenizer marker. Tokenizer byte-level Byte-ID tokens. Random ratio sampling false Fixed cadence ([100, 100]).
Epochs 1 One pass on Chr1. Learning rate 1×10−4 Adapter LR. Weight decay 0.01 Regularization. Warmup steps 200 LR warmup. Batch size (per device) 1 Micro-batch. Grad. accumulation 4 Effective batch = 4. Mixed precision bf16 Lower mem; faster. Seed 42 Reproducibility. Dataset loader JSONL (Chr1), field text
One DNA chunk per record.
Max new tokens 1024 Generation cap. Temperature 0.8 Sampling temperature. Top-p 0.95 Nucleus sampling. Repetition penalty 1.0 Disabled. Sliding-window stride 512 Optional rolling eval.
Success: memory_drop_min 0.30 Min GPU memory reduction. Success: quality_drop_max 0.05 Max metric drop vs baseline. Success: speedup_min 0.00 No speedup required.
Metric: eval task Perplexity (Chr1 val, ≤512)
Primary quality metric.
Platform: seq_length 512 Internal micro length. Platform: FP8 false FP8 off. Platform: TE kernels use_te=true Transformer Engine on.
17

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:34.176Z
- **Text Length:** 47818 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 17 of 17
