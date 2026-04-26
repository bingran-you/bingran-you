# PDF Document: Anson and Aitchison - 2025 - Controlling changes to attention logits.pdf

**File Path:** Anson and Aitchison - 2025 - Controlling changes to attention logits.pdf

**Processed Date:** 2026-02-10T18:13:59.697Z

**File Size:** 387.15 KB

**Total Pages:** 12

**Extracted Pages:** 12

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3800

**Title:** Controlling changes to attention logits

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Controlling changes to attention logits
Ben Anson
University of Bristol
ben.anson@bristol.ac.uk
Laurence Aitchison Mistral AI
laurence.aitchison@gmail.com
Abstract
Stability of neural network weights is critical when training transformer models. The query and key weights are particularly problematic, as they tend to grow large without any intervention. Applying normalization to queries and keys, known as ‘QK norm’, fixes stability issues in practice, but is not always applicable. For example, QK norm is not compatible with Multi Latent Attention (MLA) because QK norm requires full materialization of queries and keys during inference, which is not done in MLA-
. In this paper we suggest that controlling the changes to logits is important for stability. We show that these changes are controllable by assigning parameter-dependent learning rates to the query and key weights. We find that our cheap intervention allows us to increase the base learning rate of the network, outperform other methods in the MLA setting, and achieve performance competitive with QK norm when using Multi-head Attention.
1 Introduction
Principled scaling of transformer models is crucial for efficiently training larger and more capable architectures. Maximal Update Parametrization (μP) (Yang et al., 2022) has emerged as a key technique in this area, enabling the transfer of optimal hyperparameters from smaller to larger models by carefully parameterizing the model. A core desideratum of μP is to control the magnitude of activations and their updates (Dey et al., 2025), ensuring consistent training dynamics across different model -
widths. Regarding attention, Yang et al. (2022) address attention logits blow-up as we increase model width by proposing a static attention scaling factor. While this static scaling helps control logit magnitude across different model widths, it does not address step-to-step changes in logits during longer training runs, which can become a major source of instability, particularly at high learning rates.
Attention logits are a well-known source of training instability (Zhai et al., 2023; Bai et al., 2025), prompting the development of interventions such as QK norm (Henry et al., 2020) and QK clip/MuonClip (Bai et al., 2025) to ensure their stability. While QK norm is especially effective, it is ill-suited for Multi-head Latent attention (MLA) (Liu et al., 2024), as queries and keys are not fully materialized at inference-time for efficiency reasons (Bai et al., 2025). Other methods like QK clip re-
quire a bespoke attention to track maximum attention logits, which can complicate integration into existing codebases. Thus there is a gap for an easy-to-implement intervention that improves training stability, but is more widely applicable than QK norm.
We approach this gap with a μP-inspired desideratum for the attention logits. Instead of constraining logit magnitudes, like QK clip, MuonClip, and QK norm, we seek to control the change in logits as we train. This preserves expressivity, while reining-in instability. To validate our approach, we conduct pretraining experiments on a 1B parameter model. Our results demonstrate that our method is as stable as QK norm, particularly at high base learning rates. While not quite reaching the same peak p-
erformance as QK norm in the standard Multi-Head Attention (MHA) setting, our method is computationally cheaper and is applicable to MLA. When used with MLA our method enables higher base learning rates, outperforms QK clip, highlighting its practical value for training modern, efficient transformer architectures.
arXiv:2511.21377v1 [cs.LG] 26 Nov 2025

0 1000 2000 3000 4000 5000 Step
1.5
2.0
2.5
3.0
3.5
4.0
4.5
5.0
5.5
Train Loss
Q/K factor = 100
Q/K factor = 10 1
Q/K factor = 10 2 QK norm
Figure 1: Learning rate of query/key matrices is a critical factor for transformer pretraining stability. Here, 4 models are trained with a large base learning rate of η = 3e − 2 for each parameter. Decreasing the learning rates of query and key weights alone (by a factor of ηQ/K ), fully stabilizes pretraining. QK norm is shown to illustrate a stable baseline.
In summary, our contributions are as follows,
• We propose that change in logits is an important metric to account for when training attention modules.
• We show that we can control the change in logits by modulating the learning rate of query weight based on the norms of corresponding key weight, and vice versa.
• We demonstrate that this change to the learning rate leads to better validation loss performance than alternatives when training with MLA.
2 Related Work
Many have encountered instability issues when training transformers, and it has been studied extensively (Liu et al., 2020; Dehghani et al., 2023; Henry et al., 2020; Bai et al., 2025; Wortsman et al., 2023; Qi et al., 2023; Kim et al., 2025; Zhai et al., 2023; Takase et al., 2023; Rybakov et al., 2024). Below we discuss the past literature relevant to our work.
Controlling attention logits. Training instabilities are often encountered in the attention layer itself. Attention logits may become large (Bai et al., 2025), potentially inducing collapse in attention entropy (Zhai et al., 2023), where attention distributions become highly concentrated. QK normalization (Henry et al., 2020), which applies normalization to query and key activations, has emerged as a simple and effective remedy, preventing large logits (Dehghani et al., 2023) and allowing larger l-
earning rates (Wortsman et al., 2023). Similar methods such as logit soft-capping apply normalization to logits directly (Bello et al., 2016; Riviere et al., 2024). Other methods normalize the weights rather than activations: σReparam (Zhai et al., 2023) parameterizes weights into a matrix and a scalar component, with the matrix having a maximum singular value of 1, and a weights rather than the activations; QK clip (Bai et al., 2025) controls attention logits by clipping weights whenever the logi-
ts grow beyond a certain threshold.
Parameter-specific learning rates. While it is common to share the same learning rate across all parameters in a neural network, parameter-specific learning rates have been extensively examined (Milsom et al., 2025; You et al., 2017; Liu et al., 2019; Xu et al., 2019; Wang et al., 2025; Bernstein et al., 2020; Qi et al., 2025; Yang et al., 2023). Proposals often include adjusting the learning rate of a parameter according to the norm of step/gradient (Yang et al., 2023; Liu et al., 2019), as well -
as the parameter itself (Qi et al., 2025), such as LARS, LAMB, and Fromage (Bernstein et al., 2020; You et al., 2017, 2019).
Our work selects parameter-specific learning rates that control changes to attention logits. However, by considering attention logits as a whole, our parameter-specific learning rates are ‘inter-parameter’,
2

unlike other methods, such as LARS, which consider each parameter tensor independently. Our method is also inspired by μP (Yang et al., 2022; Dey et al., 2025); in μP, one of the desiderata is that as we make changes to our parameters in a network, the residual stream should correspondingly change in a controlled, ‘order 1-like’ manner. Our work extends this notion to logits.
3 Methods
Unlike other transformer modules, attention has quadratic structure. In particular, the attention logits are given by,
L = QKT
√d = XWQWT
K XT
√d . (1)
Inspired by μP (Yang et al., 2022; Dey et al., 2025), which (among other things) attempts to keep changes to activations roughly constant, we are interested in keeping the changes to attention logits, ∆L, under control. By a first-order analysis, we see that if the queries are large, then perturbations due to the keys will be amplified, and vice versa:
∆L = (Q + ∆Q)(K + ∆K)T − QKT
√d ≈ Q(∆K)T + (∆Q)KT
√d . (2)
The main tool we have for controlling changes is the learning rate. Thus we propose to set the learning rates ηQ, ηK (for WQ, and WK respectively) such that Q(∆K)T and (∆Q)KT are both ‘order 1’. We formalize this notion in Lemma 1.
Lemma 1. Let WQ, WK ∈ Rdmodel×dhead be weight matrices corresponding to a particular attention head, and consider the worst-case change in logits, for unit normed input,
max
∥x∥2 =∥y ∥2 =1
|∆l| := max
∥x∥2 =∥y ∥2 =1
|x⊤(W + ∆W)y − x⊤Wy|,
where W = d−1/2
head W⊤
QWK . Suppose that the steps for WQ and WK are given by ∆WQ/K = −ηQ/K GQ/K , where ∥GQ/K ∥ ≤ D for some constant D (which is the case for Adam and Muon). If there is a constant c such that 0 < c ≤ ∥WQ∥, ∥WK ∥, and the learning rates satisfy ηQ ∝ ∥WK ∥−1, and ηK ∝ ∥WQ∥−1, then the worst-case change in logits is bounded above independently of the weight size.
For Lemma 1 to apply, we need a constant c such that c ≤ ∥WQ/K ∥, but this is not unreasonable in practice. The Lemma does not specify a norm because all norms are equivalent, though in practice, we do need to pick a norm for an implementation. The most natural norm for restricting the maximum change to the logits is perhaps the spectral norm. In a preliminary experiment, we compared the performance of both Frobenius and spectral norm, with results shown in Figure 3. The benefits of using the spec-
tral norm are very small, thus we opted to use the Frobenius norm for further experiments in Section 4.
Following the Lemma we set,
ηQ ∝ ∥WK ∥−1, ηK ∝ ∥WQ∥−1. (3)
In practice we treat the constant of proportionality in Eq. (3) as a hyperparameter: at initialization, we set the learning rate for each query and key weight to be equal to τ η and we tune τ . Thus τ acts as a relative initial learning rate (relative to η, the base learning rate).
The above methodology applies to both the single- and multi-head (MHA) setting. In MHA, each head has its own query and key weight, so we apply Eq. (3) to each head separately. We summarize the resulting method in Algorithm 1.
We extend to MLA using a similar approach in Appendix B. A notable difference between MHA and MLA is that there are several more parameter matrices to consider; bounding the change in logits requires us to adjust the learning rate of each of these parameters. We detail exactly how to set the learning rates for MLA in Algorithm 2.
3

Algorithm 1 QuacK (MHA)
Require: Hyperparameter τ , base learning rate η Make the following additions to the transformer training script:
# At initialization. Calculate initial norms for query/key weights for all heads for all layers l do
for all heads h do
Wl,h
Q .init_norm ← ∥Wl,h
Q∥ Wl,h
K .init_norm ← ∥Wl,h
K∥
end for end for
# During training. Prior to each optimization step, adjust learning rates for all layers l do for all heads h do
Wl,h
Q .lr ← τ η · Wl,h
K .init_norm
∥Wl,h
K∥
Wl,h
K .lr ← τ η · Wl,h
Q .init_norm
∥Wl,h
Q∥ end for end for
4 Experiments
To evaluate our method, we trained ∼ 1B models based on Qwen3 (Yang et al., 2025) with both MHA (Vaswani et al., 2017) and MLA (Liu et al., 2024). All models used dmodel = 2048, dff = 4dmodel, nhead = 32, nlayer = 14, and were trained using gradient accumulation at 2048 context length with 96 sequences per batch (i.e. 196608 tokens per batch) for 5000 steps, using data from the Cosmopedia-V2 subset of SmolLM-corpus (Ben Allal et al., 2024). We used the GPT-2 (Radford et al., 2019) tokenizer, with -
vocab size 49152 and embedding/unembedding weight tying. The MHA models were trained with dhead = 64, while the MLA models were trained with dhead = 128 (with drope = dnope = 64). MLA also used latent dimensions of dcq = 512 for the queries and dckv = 256 for the keys and values. We trained using Muon (Jordan et al., 2024), with constant LR schedule and 500 warmup steps. All pretraining runs were completed on 4xGH200 nodes at bfloat16 precision.
Our experiments varied the attention method, attn ∈ {MHA, MLA}, the base learning rate η ∈ {3e − 4, 3e − 3, 3e − 2}, as well as the attention logit interventions:
• QK norm applies RMS norm (with learned scaling) to both queries and keys before applying the attention operation.
• QK clip implements Algorithm 1 from Bai et al. (2025), where after each optimization step
we multiply/clip certain weights using either √γ or γ. We set γ = min{1, τQK clip/Sh
max},
where τQK clip is a hyperparameter denoting a threshold for the maximum logit, and Sh
max is
the largest logit value seen by the h’th head since the last optimization step. For MHA we use Wh
Q/K ← √γ Wh
Q/K ; for MLA we use Wuq/uk ← √γ Wuq/uk and Wqr ← γ Wqr. We swept over τQK clip ∈ {30, 100}, the values used in the original paper.
• Ablation multiplies learning rates for query and key weights by a value τ , which is swept over, τ ∈ {10−2, 101, 100, 101}. For MHA we set ηh
Q = ηh
K = τ · η. For MLA, we set ηh
uq = ηdq = ηh
qr = ηh
uk = ηdkv = ηkr = τ · η.
• QuacK also multiplies learning rates for query and key weights according to a value τ , which is swept over, τ ∈ {10−2, 101, 100, 101}. For MHA we use Algorithm 1, and for MLA we use Algorithm 2. All weight norms are calculated using the Frobenius norm.
Higher learning rates are better. Figure 2, left column, shows that at the low learning rate of η = 3e − 4, all logit interventions perform similarly, but with QK norm performing marginally better.
4

1.4
1.6
1.8
Val Loss
= 3e 4 = 3e 3 = 3e 2
2000 3000 4000 5000 Steps
1.4
1.6
1.8
Val Loss
2000 3000 4000 5000 Steps
2000 3000 4000 5000 Steps
MLA MHA
QuacK QK norm QK clip Ablation
Figure 2: Validation losses when training each method with attn ∈ {MHA, MLA}, and learning rates, η ∈ {3e − 4, 3e − 3, 3e − 2}. QK clip is unstable at high learning rates (it is omitted from the bottom right plot due to loss ≫ 2). QK norm is overall the most performant, but it is not appropriate for use with MLA at inference-time for efficiency reasons (illustrated via dashed yellow line in the MLA row). QuacK is a sensible alternative, as it is stable in the high LR setting, performant, and appli-
cable in the MLA setting.
3000 3250 3500 3750 4000 4250 4500 4750 5000 Steps
1.850
1.875
1.900
1.925
1.950
1.975
2.000
Validation Loss
Frobenius Spectral = 10 2 = 10 1 = 100
Figure 3: Performance differences when applying Algorithm 1 with different norms are small. We show validation losses when training a small model (∼ 100M parameters) with Algorithm 1 to modulate the query and key weight learning rates. Different curves show results with different values of the hyperparameter τ and measuring the query and key weights with either Frobenius or spectral norm.
The lack of variety in performance is likely due to the fact the learning rate is small enough that we don’t encounter instabilities. However, performance is much improved by increasing the learning rate (column 2, 3).
QuacK maintains stability and strong performance, enabling higher base learning rates. QK clip is insufficient to prevent instabilities at the highest base learning rate of η = 3e − 2 (column 3, Figure 2), and it underperforms, especially in the MLA setting, when η = 3e − 3 (column 2). The ablation, which sets the learning rates for query and key weights to smaller fixed values, is stable, but underperforms QuacK in both the MHA and MLA settings. QuacK has similar but slightly worse performance co-
mpared to QK norm in the MHA setting, but is the best performing method in the MLA setting (we include QK norm results in the MLA setting for comparison, but it is not viable at inference-time like the other methods).
5

0 1000 2000 3000 4000 5000 Step
100
101
102
103
104
Max logit
0 1000 2000 3000 4000 5000 Step
10 1
100
101
102
Avg. change in logit
QuacK QK norm QK clip Ablation Default
Figure 4: Max logit (left) and average absolute change in logit throughout training (right) with a base learning rate of η = 3e − 3. Here we show the middle head of the middle layer (head 16 and layer 8) while training with MLA.
QuacK controls the maximum logit as well as change in logits. During our training runs, we used a dedicated subset of our data to periodically record logit statistics. We confirm that QuacK controls the quantity we expect (average absolute change in logits) in Figure 4. We also see that either intervening with QK norm or controlling the learning rate appears sufficient to control the maximum logits. We include the ‘default’ model (i.e. using a base learning rate of η = 3e − 3 for all parameters), -
to illustrate behaviour of an unstable run (we killed this run prematurely, as it never got below 4.5 loss after 1.5k steps).
QuacK gives a performance boost over QK norm. QuacK yields a speedup over QK norm by removing two RMS norm computations per attention block; in practice we observed ∼10% faster training. QuacK was also faster than QK clip, though this comparison is slightly unfair because we did not use an optimized QK clip implementation. QK clip can be efficient, but requires custom attention code to efficiently accumulate the maximum logit.
5 Limitations
Our experiments used a single model based on Qwen3 (Yang et al., 2025). Due to compute constraints, we were unable to execute longer training runs and with larger models to demonstrate that our method is widely applicable. As such, results are limited by short training durations (5k steps) and a single dataset and model architecture.
6 Conclusion
In this work, we introduced a simple and principled approach for stabilizing attention training by controlling changes in attention logits rather than their magnitude. Our analysis showed that the expected logit change can be bounded through parameter-dependent learning rates for the query and key weights, inspired by μP-style scaling principles. Empirically, our method QuacK enables the use of higher base learning rates while maintaining stability comparable to QK norm and outperforming alternati-
ve methods such as QK clip, particularly in the Multi-Latent Attention (MLA) setting where QK norm is inappropriate.
Our results demonstrate that stability in attention can be achieved without introducing additional normalization layers or specialized kernels, making QuacK a practical drop-in improvement for transformer training.
7 Acknowledgements
We thank Edward Milsom for insightful discussions.
6

References
Bai, Y., Bao, Y., Chen, G., Chen, J., Chen, N., Chen, R., Chen, Y., Chen, Y., Chen, Y., et al. Kimi k2: Open agentic intelligence. arXiv preprint arXiv:2507.20534, 2025.
Bello, I., Pham, H., Le, Q. V., Norouzi, M., and Bengio, S. Neural combinatorial optimization with reinforcement learning. arXiv preprint arXiv:1611.09940, 2016.
Ben Allal, L., Lozhkov, A., Penedo, G., Wolf, T., and von Werra, L. Smollm-corpus, 2024. URL https://huggingface.co/datasets/HuggingFaceTB/smollm-corpus.
Bernstein, J., Vahdat, A., Yue, Y., and Liu, M.-Y. On the distance between two neural networks and the stability of learning. Advances in Neural Information Processing Systems, 33:21370–21381, 2020.
Dehghani, M., Djolonga, J., Mustafa, B., Padlewski, P., Heek, J., Gilmer, J., Steiner, A. P., Caron, M., Geirhos, R., Alabdulmohsin, I., et al. Scaling vision transformers to 22 billion parameters. In International conference on machine learning, pp. 7480–7512. PMLR, 2023.
Dey, N., Zhang, B. C., Noci, L., Li, M., Bordelon, B., Bergsma, S., Pehlevan, C., Hanin, B., and Hestness, J. Don’t be lazy: Completep enables compute-efficient deep transformers. arXiv preprint arXiv:2505.01618, 2025.
Henry, A., Dachapally, P. R., Pawar, S., and Chen, Y. Query-key normalization for transformers. arXiv preprint arXiv:2010.04245, 2020.
Ji, T., Guo, B., Wu, Y., Guo, Q., Shen, L., Chen, Z., Qiu, X., Zhang, Q., and Gui, T. Towards economical inference: Enabling deepseek’s multi-head latent attention in any transformer-based llms. arXiv preprint arXiv:2502.14837, 2025.
Jordan, K., Jin, Y., Boza, V., You, J., Cesista, F., Newhouse, L., and Bernstein, J. Muon: An optimizer for hidden layers in neural networks, 2024. URL https://kellerjordan.github.io/posts/ muon/.
Kim, J., Lee, B., Park, C., Oh, Y., Kim, B., Yoo, T., Shin, S., Han, D., Shin, J., and Yoo, K. M. Peri-ln: Revisiting normalization layer in the transformer architecture. arXiv preprint arXiv:2502.02732, 2025.
Liu, A., Feng, B., Xue, B., Wang, B., Wu, B., Lu, C., Zhao, C., Deng, C., Zhang, C., Ruan, C., et al. Deepseek-v3 technical report. arXiv preprint arXiv:2412.19437, 2024.
Liu, L., Jiang, H., He, P., Chen, W., Liu, X., Gao, J., and Han, J. On the variance of the adaptive learning rate and beyond. arXiv preprint arXiv:1908.03265, 2019.
Liu, L., Liu, X., Gao, J., Chen, W., and Han, J. Understanding the difficulty of training transformers. arXiv preprint arXiv:2004.08249, 2020.
Milsom, E., Anson, B., and Aitchison, L. Function-space learning rates. In Proceedings of the 42nd International Conference on Machine Learning, 2025.
Qi, X., Wang, J., Chen, Y., Shi, Y., and Zhang, L. Lipsformer: Introducing lipschitz continuity to vision transformers. arXiv preprint arXiv:2304.09856, 2023.
Qi, X., He, Y., Ye, J., Li, C.-G., Zi, B., Dai, X., Zou, Q., and Xiao, R. Taming transformer without using learning rate warmup. arXiv preprint arXiv:2505.21910, 2025.
Radford, A., Wu, J., Child, R., Luan, D., Amodei, D., Sutskever, I., et al. Language models are unsupervised multitask learners. OpenAI blog, 1(8):9, 2019.
Riviere, M., Pathak, S., Sessa, P. G., Hardin, C., Bhupatiraju, S., Hussenot, L., Mesnard, T., Shahriari, B., Ramé, A., et al. Gemma 2: Improving open language models at a practical size. arXiv preprint arXiv:2408.00118, 2024.
Rybakov, O., Chrzanowski, M., Dykas, P., Xue, J., and Lanir, B. Methods of improving llm training stability. arXiv preprint arXiv:2410.16682, 2024.
7

Su, J., Lu, Y., Pan, S., Murtadha, A., Wen, B., and Liu, Y. Roformer: enhanced transformer with rotary position embedding. arxiv. arXiv preprint arXiv:2104.09864, 2021.
Takase, S., Kiyono, S., Kobayashi, S., and Suzuki, J. Spike no more: Stabilizing the pre-training of large language models. arXiv preprint arXiv:2312.16903, 2023.
Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, L., and Polosukhin, I. Attention is all you need. Advances in neural information processing syStems, 30, 2017.
Wang, J., Wang, M., Zhou, Z., Yan, J., Wu, L., et al. The sharpness disparity principle in transformers for accelerating language model pre-training. arXiv preprint arXiv:2502.19002, 2025.
Wortsman, M., Liu, P. J., Xiao, L., Everett, K., Alemi, A., Adlam, B., Co-Reyes, J. D., Gur, I., Kumar, A., Novak, R., et al. Small-scale proxies for large-scale transformer training instabilities. arXiv preprint arXiv:2309.14322, 2023.
Xu, Z., Dai, A. M., Kemp, J., and Metz, L. Learning an adaptive learning rate schedule. arXiv preprint arXiv:1909.09712, 2019.
Yang, A., Li, A., Yang, B., Zhang, B., Hui, B., Zheng, B., Yu, B., Gao, C., Huang, C., Lv, C., et al. Qwen3 technical report. arXiv preprint arXiv:2505.09388, 2025.
Yang, G., Hu, E. J., Babuschkin, I., Sidor, S., Liu, X., Farhi, D., Ryder, N., Pachocki, J., Chen, W., and Gao, J. Tensor programs v: Tuning large neural networks via zero-shot hyperparameter transfer. arXiv preprint arXiv:2203.03466, 2022.
Yang, G., Simon, J. B., and Bernstein, J. A spectral condition for feature learning. arXiv preprint arXiv:2310.17813, 2023.
You, Y., Gitman, I., and Ginsburg, B. Large batch training of convolutional networks. arXiv preprint arXiv:1708.03888, 2017.
You, Y., Li, J., Reddi, S., Hseu, J., Kumar, S., Bhojanapalli, S., Song, X., Demmel, J., Keutzer, K., and Hsieh, C.-J. Large batch optimization for deep learning: Training bert in 76 minutes. arXiv preprint arXiv:1904.00962, 2019.
Zhai, S., Likhomanenko, T., Littwin, E., Busbridge, D., Ramapuram, J., Zhang, Y., Gu, J., and Susskind, J. M. Stabilizing transformer training by preventing attention entropy collapse. In International Conference on Machine Learning, pp. 40770–40803. PMLR, 2023.
8

A Proof of Lemma 1
Lemma 1. Let WQ, WK ∈ Rdmodel×dhead be weight matrices corresponding to a particular attention head, and consider the worst-case change in logits, for unit normed input,
max
∥x∥2 =∥y ∥2 =1
|∆l| := max
∥x∥2 =∥y ∥2 =1
|x⊤(W + ∆W)y − x⊤Wy|,
where W = d−1/2
head W⊤
QWK . Suppose that the steps for WQ and WK are given by ∆WQ/K = −ηQ/K GQ/K , where ∥GQ/K ∥ ≤ D for some constant D (which is the case for Adam and Muon). If there is a constant c such that 0 < c ≤ ∥WQ∥, ∥WK ∥, and the learning rates satisfy ηQ ∝ ∥WK ∥−1, and ηK ∝ ∥WQ∥−1, then the worst-case change in logits is bounded above independently of the weight size.
Proof. The change in logits is given by,
d1/2
head|∆l| = |(q + ∆q)T (k + ∆k) − qT k|
= |(∆q)T k + qT ∆k + (∆q)T ∆k|
≤ |(∆q)T k| + |qT ∆k| + ∥∆q∥∥∆k∥. (4)
where,
q = WQx, k = WK y (5)
The query and key perturbations are given by,
∆q = (WQ + ∆WQ)x − WQx = ∆WQx, (6)
∆k = (WK + ∆WK )y − WK y = ∆WK y. (7)
We now bound the first order terms in Eq. (4), assuming inputs are unit normed,
|(∆q)T k| = |(∆WQx)T (WK y)| = |xT ∆WT
QWK y|
≤ ∥x∥∥∆WT
QWK ∥∥y∥
≤ ηQD∥WK ∥, (8a)
|qT ∆k| = |(WQx)T (∆WK y)| = |xT WT
Q∆WK y|
≤ ∥x∥∥WT
Q∆WK ∥∥y∥
≤ ηK D∥WQ∥. (8b)
For some constants τQ, τK , set,
ηQ = τQ∥WK ∥−1 (9a)
ηK = τK ∥WQ∥−1. (9b)
Substituting these into Eqs. (8), we obtain the bounds,
|(∆q)T k| ≤ (τQ∥WK ∥−1)D∥WK ∥ = τQD, (10)
|qT ∆k| ≤ (τK ∥WQ∥−1)D∥WQ∥ = τK D. (11)
Note that even if RoPE is applied, such that q = RxWQx, the bound remains identical as ∥RW∥ = ∥W∥ (if the Frobenius or spectral is used).
Finally, we consider the quadratic term ∥∆q∥∥∆k∥,
∥∆q∥∥∆k∥ ≤ ∥∆WQ∥∥∆WK ∥
= τQτK ∥GQ∥∥GK ∥
∥WQ∥∥WK ∥
≤ τQτK D2
c2 . (12)
Thus the change in logits is bounded by a constant.
9

Algorithm 2 QuacK (MLA)
Require: Hyperparameter τ , base learning rate η Make the following additions to the transformer training script:
function compute_lr_factors() for all layers l do
for all heads h do
Wl,h
uq .factor ← (∥Wl
dq∥ ∥Wl,h
uk ∥ ∥Wl
dkv∥)−1
Wl,h
uk .factor ← (∥Wl,h
uq ∥ ∥Wl
dq∥ ∥Wl
dkv∥)−1
Wl,h
qr .factor ← (∥Wl
dq∥ ∥Wl
kr∥)−1 end for Wl
dq.factor ← min
n
(maxh ∥Wl,h
uq ∥∥Wl,h
uk ∥∥Wl
dkv∥)−1, (maxh ∥Wl,h
qr ∥∥Wl
kr∥)−1
o
Wl
dkv.factor ← (maxh ∥Wl,h
uq ∥∥Wl
dq∥∥Wl,h
uk ∥)−1
Wl
kr.factor ← (maxh ∥Wl,h
qr ∥∥Wl
dq∥)−1 end for end function
{attention_weights} ← {Wl,h
uq , Wl,h
uk , Wl,h
qr , Wl
dq, Wl
dkv, Wl
kr for all layers l for all heads h}
# At initialization. Compute initial learning rate factors for all attention weights compute_lr_factors() for all W in {attention_weights} do W.init_factor ← W.factor end for
# During training. Prior each optimization step, adjust learning rates compute_lr_factors() for all W in {attention_weights} do
W.lr ← τ η · W.factor
W.init_factor
end for
B Extension to MLA
In this section we motivate Algorithm 2, specifically the factors associated with each weight
We use a similar approach to Section 3 / Appendix A when extending to MLA (Ji et al., 2025; Liu et al., 2024). For now, assume the single-head setting. MLA tells us to calculate queries and keys as follows,
q = Concat(qnope, qrope) (13a)
k = Concat(knope, krope) (13b)
qnope = WuqWdqx (13c)
qrope = Rx(WqrWdqx) (13d)
ckv = Wdkvy (13e)
knope = Wukckv = WukWdkvy (13f) krope = Ry(Wkry). (13g)
Here, x and y are two token embeddings. The ‘down’ matrices, Wdq and Wdkv, project queries and keys/values respectively down to a lower dimensional latent space. This enables efficient caching of ckv. The ‘up’ matrices Wuq, Wuk project these latents up to a higher dimensional space for attention calculations on each head. The Wqr and Wkr matrices are used to produce decoupled queries and keys for RoPE (Su et al., 2021) embeddings, with the position embedding applied via the rotation matrices Rx an-
d Ry.
10

The change in logits is given by,
d1/2
head|∆l| = |(q + ∆q)T (k + ∆k) − qT k| = |(∆q)T k + qT ∆k + (∆q)T ∆k|, (14)
and we can bound the change,
d1/2
head|∆l| ≤ |(∆q)T k| + |qT ∆k| + ∥∆q∥∥∆k∥
≤ |(∆qnope)T knope| + |(∆qrope)T krope| + |qT
nope∆knope| + |qT
rope∆krope| + ∥∆q∥∥∆k∥. (15)
Expanding further, for the queries, we have,
∆qnope = (Wuq + ∆Wuq)(Wdq + ∆Wdq)x − WuqWdqx
= ∆WuqWdqx + Wuq∆Wdqx + ∆Wuq∆Wdqx, (16a)
∆qrope = Rx[(Wqr + ∆Wqr)(Wdq + ∆Wdq)x − WqrWdqx]
= Rx[∆WqrWdqx + Wqr∆Wdqx + ∆Wqr∆Wdqx], (16b)
and for the keys,
∆knope = (Wuk + ∆Wuk)(Wdkv + ∆Wdkv)y − WukWdkvy
= ∆WukWdkvy + Wuk∆Wdkvy + ∆Wuk∆Wdkvy (17a) ∆krope = Ry[(Wkr + ∆Wkr)y − Wkry] = Ry∆Wkry. (17b)
We now use these expressions, and the expressions for qnope, knope, qrope, krope, to bound each of the terms in Eq. (15). We will make some assumptions (similar to Lemma 1,
• the inputs x and y are unit normed;
• we use the Frobenius norm;
• conditioned gradients are bounded by a constant, i.e. ∆Wx = −ηxGx where ∥Gx∥ ≤ D (valid for Muon and Adam);
• the weight norms are lower bounded by a constant c.
We consider the first order terms. We have,
|∆qT
nopeknope| = |(∆WuqWdqx + Wuq∆Wdqx + ∆Wuq∆Wdqx)T knope|
≤ ∥∆Wuq∥∥Wdq∥∥knope∥ + ∥Wuq∥∥∆Wdq∥∥knope∥ + ∥∆Wuq∥∥∆Wdq∥∥knope∥
≤ ηuqD∥Wdq∥∥Wuk∥∥Wdkv∥ + ηdqD∥Wuq∥∥Wuk∥∥Wdkv∥ + O(ηuqηdq∥Wuk∥∥Wdkv∥) (18a)
|(∆qrope)T krope| = |(Rx[∆WqrWdqx + Wqr∆Wdqx + ∆Wqr∆Wdqx])T krope|
≤ (∥∆Wqr∥∥Wdq∥ + ∥Wqr∥∥∆Wdq∥ + ∥∆Wqr∥∥∆Wdq∥)∥krope∥
≤ ηqrD∥Wdq∥∥Wkr∥ + ηdqD∥Wqr∥∥Wkr∥ + O(ηdqηqr∥Wkr∥), (18b)
|qT
nope∆knope| = |qT
nope(∆WukWdkvy + Wuk∆Wdkvy + ∆Wuk∆Wdkvy)|
≤ ∥qnope∥∥∆Wuk∥∥Wdkv∥ + ∥qnope∥∥Wuk∥∥∆Wdkv∥ + ∥qnope∥∥∆Wuk∥∥∆Wdkv∥
≤ ηukD∥Wuq∥∥Wdq∥∥Wdkv∥ + ηdkvD∥Wuq∥∥Wdq∥∥Wuk∥ + O(ηukηdkv∥Wuq∥∥Wdq∥), (18c)
|qT
rope∆krope| = |qT
rope(Ry∆Wkry)| ≤ ∥qrope∥∥∆Wkr∥ ≤ ηkrD∥Wqr∥∥Wdq∥. (18d)
We used the fact that for rotation matrices R, ∥WR∥ = ∥RW∥ = ∥W∥.
Ultimately, Eqs. (18) suggest to set the learning rates for each attention weight parameter as,
ηuq = τ (∥Wdq∥∥Wuk∥∥Wdkv∥)−1 (19a)
ηdq = τ min (∥Wuq∥∥Wuk∥∥Wdkv∥)−1, (∥Wqr∥∥Wkr∥)−1 (19b)
ηqr = τ (∥Wdq∥∥Wkr∥)−1 (19c)
ηuk = τ (∥Wuq∥∥Wdq∥∥Wdkv∥)−1 (19d)
ηdkv = τ (∥Wuq∥∥Wdq∥∥Wuk∥)−1 (19e)
ηkr = τ (∥Wqr∥∥Wdq∥)−1. (19f)
11

We then substitute these learning rates into Eqs. (18), to see that the bounds are given by,
|(∆qnope)T knope| ≤ τ D + τ D + O τ 2∥Wuk∥∥Wdkv∥
∥Wdq∥∥Wuk∥∥Wdkv∥ · ∥Wuq∥∥Wuk∥∥Wdkv∥
= 2τ D + O τ 2
∥Wdq∥∥Wuq∥∥Wuk∥∥Wdkv∥ , (20a)
|(∆qrope)T krope| ≤ τ D + τ D + O τ 2∥Wkr∥
∥Wdq∥∥Wkr∥ · ∥Wqr∥∥Wkr∥
= 2τ D + O τ 2
∥Wdq∥∥Wqr∥∥Wkr∥ , (20b)
|qT
nope∆knope| ≤ τ D + τ D + O τ 2∥Wuq∥∥Wdq∥
∥Wuq∥∥Wdq∥∥Wdkv∥ · ∥Wuq∥∥Wdq∥∥Wuk∥
= 2τ D + O τ 2
∥Wuq∥∥Wdq∥∥Wuk∥∥Wdkv∥ , (20c)
|qT
rope∆krope| ≤ τ D. (20d)
It is reasonable to assume in practice that the weights are not arbitrarily small (i.e. their norm is lower bounded), and thus that these terms are bounded by a constant.
The only remaining term to bound in Eq. (15) is the quadratic term, ∥∆q∥∥∆k∥. We can show that this is bounded by showing that the individual parts are bounded,
∥∆qnope∥ ≤ ηuqD∥Wdq∥ + ηdqD∥Wuq∥ + ηuqηdqD2
≤ 2τ D
∥Wuk∥∥Wdkv∥ + ηuqηdqD2, (21a)
∥∆qrope∥ ≤ ηqrD∥Wdq∥ + ηdqD∥Wqr∥ + ηqrηdqD2
≤ 2τ D
∥Wkr∥ + ηqrηdqD2, (21b)
∥∆knope∥ ≤ ηukD∥Wdkv∥ + ηdkvD∥Wuk∥ + ηukηdkvD2
≤ 2τ D
∥Wuq∥∥Wdq∥ + ηukηdkvD2, (21c)
∥∆krope∥ ≤ ηkrD ≤ τ D
∥Wqr∥∥Wdq∥ . (21d)
To extend further to the multi-head setting, we add head indices to the necessary matrices, Wh
uq, Wh
uk,
and Wh
qr, and their corresponding learning rates, ηh
uq, ηh
uk, ηh
qr. The key used for RoPE, krope is shared between all heads, therefore Wkr surprisingly does not have a head index. The down matrices project to a latent space, so also do not have head indices. Plugging these into Eqs. (19) we have,
ηh
uq = τ (∥Wdq∥∥Wh
uk∥∥Wdkv∥)−1 (22a)
ηdq = τ min
(
mhax ∥Wh
uq∥∥Wh
uk∥∥Wdkv∥
−1
, mhax ∥Wh
qr∥∥Wkr∥
−1)
(22b)
ηh
qr = τ (∥Wdq∥∥Wkr∥)−1 (22c)
ηh
uk = τ (∥Wh
uq∥∥Wdq∥∥Wdkv∥)−1 (22d)
ηdkv = τ (mhax ∥Wh
uq∥∥Wdq∥∥Wh
uk∥)−1 (22e)
ηkr = τ (mhax ∥Wh
qr∥∥Wdq∥)−1. (22f)
The use of maxh(·) comes from the requirement that we want logit changes to be bounded for all heads.
12

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:13:59.697Z
- **Text Length:** 31589 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 12 of 12
