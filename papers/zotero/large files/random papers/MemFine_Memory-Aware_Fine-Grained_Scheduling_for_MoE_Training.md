# PDF Document: Zhao et al. - 2025 - MemFine Memory-Aware Fine-Grained Scheduling for MoE Training.pdf

**File Path:** Zhao et al. - 2025 - MemFine Memory-Aware Fine-Grained Scheduling for MoE Training.pdf

**Processed Date:** 2026-02-10T18:16:26.921Z

**File Size:** 1226.82 KB

**Total Pages:** 9

**Extracted Pages:** 9

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3801

**Title:** MemFine: Memory-Aware Fine-Grained Scheduling for MoE Training

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

MemFine: Memory-Aware Fine-Grained Scheduling for MoE Training
AIH Training Team
Abstract
The training of large-scale Mixture of Experts (MoE) models faces a critical memory bottleneck due to severe load imbalance caused by dynamic token routing. This imbalance leads to memory overflow on GPUs with limited capacity, constraining model scalability. Existing load-balancing methods, which cap expert capacity, compromise model accuracy and fail on memory-constrained hardware. To address this, we propose MemFine, a memory-aware fine-grained scheduling framework for MoE training. MemFine dec-
omposes the token distribution and expert computation into manageable chunks and employs a chunked recomputation strategy, dynamically optimized through a theoretical memory model to balance memory efficiency and throughput. Experiments demonstrate that MemFine reduces activation memory by 48.03% and improves throughput by 4.42% compared to full recomputation-based baselines, enabling stable large-scale MoE training on memory-limited GPUs.
1 Introduction
With the exponential growth of artificial intelligence model sizes, traditional dense models face severe challenges in computation and memory [1]. The MoE model, as a sparse architecture, introduces a gating network and multiple expert sub-networks, significantly reducing the activated computation per forward pass while maintaining a massive number of model parameters [2]. This characteristic makes it possible to build and train giant models with trillions or even tens of trillions of parameters u-
nder limited computational resources, rapidly becoming a key technical path driving the development of large language models and tasks in other domains [3, 4, 5]. Therefore, achieving efficient and stable large-scale MoE training has become an urgent demand in both industry and academia [6, 7].
Although MoE models possess significant theoretical advantages, they face the challenge of load imbalance during practical training, especially in large-scale distributed environments [8]. To maximize the expressive power and performance of the models, modern large-scale MoE training allows the number of tokens processed by each expert to be unrestricted. However, this strategy, combined with the stochastic routing of the gating network, leads to a highly non-uniform distribution of tokens among d-
ifferent experts [9, 10]. This load imbalance phenomenon further translates into severe imbalance in GPU memory consumption. Specifically, during training, some GPUs might be assigned a number of tokens far exceeding their memory capacity, causing them to encounter memory overflow first and thus interrupting the entire training job. This issue severely constrains the potential for scaling MoE model size on GPU clusters with limited memory capacity [11].
To address the aforementioned memory bottleneck, existing research primarily employs loadbalancing solutions by setting a capacity factor to limit the number of tokens processed by each expert to a balanced level [9, 10, 12, 13], while applying activation recomputation [14, 15] and offloading strategies [16]. Although this method can effectively avoid memory peaks, it severely disrupts the inherent dynamic routing mechanism of the MoE model, leading to degraded training accuracy and failing to rea-
lize the full potential of the MoE architecture. More importantly, these methods are
arXiv:2511.21431v1 [cs.DC] 26 Nov 2025

generally applied on GPUs with large memory capacity and cannot effectively tackle the memory overflow problem caused by extreme load imbalance on GPUs with small memory capacity.
To overcome the above challenges, this paper proposes a memory-aware fine-grained MoE scheduling framework, named MemFine. MemFine firstly designs a fine-grained token dispatch-expert computation-token combine algorithm, which divides the token distribution process into multiple chunks and introduces a chunked recomputation optimization during the backward pass to maximize memory savings. Furthermore, to minimize the impact of chunking on end-to-end training performance, MemFine designs an adaptiv-
e chunk tuning algorithm based on a theoretical memory cost model, achieving dynamic chunk splitting according to the training progress and maximizing the effective end-to-end computational throughput. MemFine enables trainers to successfully tame the memory peaks under large Expert Parallelism (EP) training without touching the routing logic, thereby empowering the training of ultra-large-scale MoE models on GPUs with small memory capacity. The innovations of this paper are summarized as follows:
• This paper proposes a fine-grained scheduling framework, MemFine, to solve the Out-OfMemory (OOM) problem caused by uneven token distribution in MoE models. MemFine effectively reduces the memory demand of model activations through the fine-grained token distribution and recomputation, enabling the training of MoE models with large EP on GPUs with small memory capacity.
• This paper introduces a memory-aware dynamic tuning algorithm within MemFine, which balances memory and performance by controlling the number of chunks for token distribution through threshold adjustment.
• Experiments validate the effectiveness of the design of the proposed MemFine. Compared to the traditional MoE distribution method combined with full activation recomputation, MemFine achieves a 48.03% reduction in activation memory usage while increasing throughput by 4.42%.
2 Related Work
2.1 MoE Training and Expert Parallelism
The MoE model has emerged as a key technology in recent years to address the scalability challenges of ultra-large-scale models [8]. Its core idea involves replacing the traditional dense feedforward network layer with a structure composed of multiple experts, i.e., small feedforward networks, and introducing a gating network that dynamically selects and activates a subset of these experts for each input token. This conditional computation paradigm enables a dramatic increase in the total number o-
f model parameters while keeping the actual computational cost per token constant, thereby achieving an effective trade-off between computational efficiency and model capacity. Representative works [6, 9, 10, 12, 13] have successfully scaled the model parameter count to the trillion-level.
To efficiently train and deploy MoE models, EP has been developed as a specialized model parallelism strategy [17]. Unlike traditional model parallelism, which splits a single model layer across different devices, EP distributes different experts to distinct computing devices. The routing decisions of the gating network determine the flow of input data across devices, with each device only computing the experts it hosts. This paradigm has been adopted and optimized by mainstream open-source framew-
orks [18, 19, 20].
2.2 Load Unbalance
In MoE models, expert load imbalance is a core challenge. If the gating network consistently routes a large number of inputs to a few hot experts while other experts remain under-utilized and under-trained, it leads to wasted model capacity, training instability, and ultimately performance degradation. To address this issue, researchers have proposed various methods combining the soft and hard constraints.
Current mainstream approaches primarily involve introducing an auxiliary load balancing loss into the loss function to regularize the gating network. The core idea of these methods is to encourage the average activation frequency of all experts to become more uniform. A classic early work is the auxiliary load balancing loss adopted in Switch Transformer [12]. It calculates the within-batch
2

Table 1: Notation table
L model layers dl dense layers t tensor parallel size hd hidden dim ka kv head number p pipeline parallel size s sequence length en intermediate size in moe layer c context parallel size h hidden size gd intermediate size in dense layer e expert parallel size a head number ge intermediate size in moe layer d data parallel size V vocabulary size tk topk b micro batch size l model layers per stage v pipeline stages per GPU gbs global batch size
norm
Q
K
V
self
attention O norm
expert 1 (activated)
router
expert en
······
add score
mul
12
3
4
5
add 6 78 9
10
11
12
13
14
module with weight module without weight
Figure 1: General Architecture of MoE Models. The blue dots denote the stored activation.
average routing probability for each expert and compares it with the average probability across all experts, using a mean square error loss to penalize deviations, thereby smoothly steering routing towards less loaded experts. To mitigate the accuracy impact of the auxiliary loss, DeepSeek [10, 13] proposed an auxiliary loss-free load balancing algorithm, which dynamically adjusts the routing bias of experts to control token distribution. While these methods can effectively alleviate the overall l-
oad imbalance phenomenon, they still cannot avoid a small number of iterations with extreme load imbalance.
Another important approach combines hard constraints with soft incentives. For example, GShard [9], alongside an auxiliary loss, introduced the concept of expert capacity, setting an upper limit on the number of tokens each expert can process. When an expert reaches its capacity limit, excess tokens are forcibly routed to less loaded experts. This serves as an effective hard guarantee mechanism to prevent individual expert overload, but this method has been verified to affect the convergence of th-
e overall training loss [21].
Furthermore, activation memory optimization techniques such as full recomputation and activation offloading are often combined with the aforementioned methods to save memory and reduce the impact of distribution imbalance [13].
Although the methods mentioned above can currently effectively alleviate the phenomenon of expert load imbalance, they cannot solve the OOM problem caused by extreme distribution during training in large EP scenarios on GPUs with small memory capacity. Table 1 lists symbols to be used in this paper.
3 Theoretical Memory Cost Model
This section introduces the theoretical memory cost model for MoE to elucidate the memory usage trends during MoE training. Generally, the GPU memory occupied during MoE training can be divided into two components [22]:
Static Memory: The static GPU memory occupied by the MoE model weights. This can be modeled as follows:
M sta = Dpara
t vl
mn
X
i
S para
i
| {z }
Parameters
+ Dgrad
t vl
mn
X
i
S para
i
| {z }
Gradients
+ 4Dopt
t vl
mn
X
i
S para
i
| {z }
Optimizer States
(1)
3

Table 2: Activation of MoE module input ID stored activation (Bytes) norm 1 Dtbsh/(tc) q, k, v 2 Dtbsh/(tc)
attention
3 Dtbsahd/(tc) 4 Dtbskahd/(tc) 5 Dtbskahd/(tc) o 6 Dtbsh/(tc) add 7 
norm 8 Dtbsh/(tc) router 9 Dtbsh/(tc)
10 Dtbsen/(tc)
activated expert 11 Dtbs′h/(tc)
12 2Dtbs′ge/(tc) score mul 13 Dtbs′h/(tc) add 14 Total - 1
tc [Dtbs(5h + ahd + 2kahd + en)
+ Dtbs′(2h + 2ge)]
where Spara
i denotes the weight size of the i-th module, and mn represents the number of modules with weights. Fig. 1 illustrates the general architecture of an MoE model. Blue blocks indicate modules with weights, while green blocks denote weightless modules.
Activated Memory: The activated GPU memory occupied by intermediate data generated during MoE model training, primarily originating from cascaded transformer layers. The blue dots in Fig. 1 represent the activation values stored for one MoE transformer layer. The storage size is detailed in Table 2. Based on this, we model the peak activated memory usage during MoE model training as follows:
M act = mg
tc Dtb s(5h + ahd + 2kahd + en) + s′(2h + 2ge)
!
(2)
where mg denotes the stored number of activation memory, Dt denotes the data precision. Generally, mg = (vp + p − 2rpp − 1), and when full recomputation is employed, then mg = 1.
Through equation (2), it can be observed that the peak activated memory is related to the sequence length s and the number of tokens received by the MoE layer s′. During the early stages of MoE training when token distribution is uneven, there is a probability that a large number of tokens are routed to a single GPU, i.e., s′ approaches es. In large EP scenarios, this leads to extremely high activation memory usage. Even with full recomputation enabled, it can cause OOM errors, preventing normal t-
raining. Fig. 2 displays the token distribution in the layer-reduced DeepSeek model used in our experiments. It shows that as the layer depth increases, the token distribution becomes increasingly uneven. In the latter layers, significant outliers appear, with the maximum number of received tokens approaching the theoretical peak and the minimum being zero. This phenomenon indicates that most activations are concentrated on a single GPU, leading to OOM.
To ensure normal model training, the following condition must be satisfied:
M sta + M act ⩽ αM GPU (3)
where M GPU denotes the GPU’s specified memory capacity, and α is the available memory ratio for the model.
4 Design of MemFine
This section introduces MemFine from three aspects: the Fine-grained Chunk Distribution Algorithm and Memory-Aware Chunk Tuning.
4

1 26 51 76 101 126 151 176 201 226 251 expert id
0
20000
40000
60000
80000
100000
120000
number of received tokens
p99
p99 token number: 19352
max token number: 31702
min token number: 15
layer 4
1 26 51 76 101 126 151 176 201 226 251 expert id
0
20000
40000
60000
80000
100000
120000
number of received tokens
p99
p99 token number: 26981
max token number: 35313
min token number: 38
layer 5
1 26 51 76 101 126 151 176 201 226 251 expert id
0
20000
40000
60000
80000
100000
120000
number of received tokens
p99
p99 token number: 33391
max token number: 46104
min token number: 4
layer 6
1 26 51 76 101 126 151 176 201 226 251 expert id
0
20000
40000
60000
80000
100000
120000
number of received tokens
p99
p99 token number: 35881
max token number: 50780
min token number: 0
layer 7
1 26 51 76 101 126 151 176 201 226 251 expert id
0
20000
40000
60000
80000
100000
120000
number of received tokens
p99
p99 token number: 41529
max token number: 73130
min token number: 0
layer 8
1 26 51 76 101 126 151 176 201 226 251 expert id
0
20000
40000
60000
80000
100000
120000
number of received tokens
p99
p99 token number: 40685
max token number: 84049
min token number: 0
layer 9
1 26 51 76 101 126 151 176 201 226 251 expert id
0
20000
40000
60000
80000
100000
120000
number of received tokens
p99
p99 token number: 76459
max token number: 119728
min token number: 0
layer 10
1 26 51 76 101 126 151 176 201 226 251 expert id
0
20000
40000
60000
80000
100000
120000
number of received tokens
p99
p99 token number: 76315
max token number: 126887
min token number: 0
layer 11
1 26 51 76 101 126 151 176 201 226 251 expert id
0
20000
40000
60000
80000
100000
120000
number of received tokens
p99
p99 token number: 82480
max token number: 105174
min token number: 0
layer 12
1 26 51 76 101 126 151 176 201 226 251 expert id
0
20000
40000
60000
80000
100000
120000
number of received tokens
p99
p99 token number: 70353
max token number: 121822
min token number: 0
layer 13
1 26 51 76 101 126 151 176 201 226 251 expert id
0
20000
40000
60000
80000
100000
120000
number of received tokens
p99
p99 token number: 73427
max token number: 93234
min token number: 0
layer 14
1 26 51 76 101 126 151 176 201 226 251 expert id
0
20000
40000
60000
80000
100000
120000
number of received tokens
p99
p99 token number: 80488
max token number: 129170
min token number: 0
layer 15
Figure 2: The number of received tokens per MoE layer. Take the 7-th iteration for an example.
4.1 Fine-grained Chunk Distribution Algorithm (FCDA)
In standard MoE model training, the forward process of dispatch-computation-combine and the backward process are expressed as follows:
Y = Fw(X) = combine(expert(dispatch(X))) (4)
Xgrad = Bw(Ygrad, Fw(X)) (5)
where Fw and Bw denote the forward propagation and the backward propagation, respectively. Under this paradigm, MoE models may still experience peak memory usage from a single layer’s activations. In extreme dispatch scenarios, this can lead to OOM caused by Fw(X), as discussed in Section 3. To address this issue, we propose the FCDA. The FCDA consists of two designs:
Forward Propagation: As shown in Fig. 3, we divide tokens into multiple token chunks. Each chunk is processed sequentially through dispatch-computation-combine operations. The final output is obtained by concatenating the results from all chunks. This process is formulated as:
Y = Fw(X) = concat(Fw(X1), Fw(X2), ..., Fw(Xc)) (6)
Backward Propagation: We redesign the recomputation scheduling mechanism based on a chunklevel recomputation and backward propagation. As shown in Fig. 3, the process is formulated as:
Xgrad = concat(Bw(Ygrad, Fw(X1)), Bw(Ygrad, Fw(X2)), ..., Bw(Ygrad, Fw(Xc))) (7)
Through this approach, we can reduce the peak memory usage of MoE layers to the maximum activation value among chunks. The memory reduction amounts to Fw(X) − max(Fw(X1), Fw(X2)), ..., Fw(Xc))).
4.2 Memory-Aware Chunk Tuning (MACT)
Given that different Pipeline Parallelism (PP) stages may be deployed, we observe varying memory pressure across PP stages, which consequently affects chunk size. Fixed chunk sizes pose potential
5

attenti
on router dispatc
h
expert group
combi ne
notify
GPU
CPU
split dispatc
h
expert group
combi ne
notify
concat
multi chunks
attent
ion router
GPU
CPU
Forward Backward
···
MACT
notify
split dispat
ch
expert group
combi ne
notify
dispat ch
expert group
combi ne
dispat ch
expert group
combi ne
notify
dispat ch
expert group
combi ne
conca
t router attentio
n
layer i
Memory Peak multi chunks
···
c1 c2 ···
c3
config
memory costmodel
theory chunk derivation
chunk threshold
c2
MACT
FCDA
time line
time line
forward module
backward module
layer i
Figure 3: The workflow of MimFine.
Table 3: Model configuration
H model
config L s h a gd ge tk V r dl
model I 16 4096 7168 128 18432 2048 8 129280 1536 3 model II 8 4096 7168 128 18432 2048 8 129280 1536 3
OOM risks and impact training performance. To address this challenge, we further propose MemoryAware Chunk Tuning (MACT). The design concept of MACT is illustrated in the upper-right portion of Fig. 3.
First, before training, the MACT system models the training memory usage based on the model configuration. It then calculates the theoretical maximum s′ for different PP stages as follows:
s′
max = αM GPU − M sta − mg
tc Dtbs(5h + ahd + 2kahd + en)
mg
tc Dtb(2h + 2ge) (8)
Based on the result of the first notification, we can get the number of received tokens per GPU, denoted as s′′, and derive the theoretically optimal chunk value:
c = ⌈s′′/s′
max⌉ (9)
Considering that introducing (8) and (9) would increase the computational cost, we use a threshold method for the selection of chunk size. In particular, MACT firstly categorizes chunk sizes into several bins, and then select the large bin that is closest to c as the chunk size setting. During training, MACT dynamically adjusts the chunk size to balance memory usage and performance.
5 Experiment and Analysis
5.1 Experimental Setup
Our experiments were conducted on 32 GPUs with memory 64GB per GPU. Two reduced-layer models based on DeepSeek-V3 were selected, as detailed in Table 3. Specifically, we applied a parallelism strategy of t = 1, p = 4, e = 32, d = 1, c = 1, l = L, v = 1, b=1, and gbs = 960. BF16 data precision is used in pretraining, i.e., Dt = 2. The distributed framework employed was Megatron-LM, and the software environment consisted of Python 3.8 and PyTorch 2.1.0.
First, we compared the memory consumption of several optimization methods, including:
• Method 1: Training without chunk splitting and applying full recomputation to save memory, which is widely used in Megatron-LM [19];
6

Table 4: Memory comparison model method static mem. (GB) active mem. (GB) all mem. (GB) training
I
1 43.0 22.9 65.9 × 2 43.0 3.7 46.7 ✓ 3 43.0 11.9 54.9 ✓
II
1 39.5 22.9 62.4 ✓ 2 39.5 3.7 43.2 ✓ 3 39.5 11.9 51.4 ✓
0 5 10 15 20 iteration
0
200
400
600
800
1000
1200
1400
TGS
model I
method1, OOM method2, average TGS=742.8 method3, average TGS=878.4
0 5 10 15 20 25 iteration
800
1000
1200
1400
1600
1800
2000
2200
2400
TGS
model II
method1, average TGS=1408.0 method2, average TGS=1332.1 method3, average TGS=1470.2
Figure 4: Throughput comparison of three methods.
• Method 2: MemFine with fixed chunk threshold, e.g., ck = 8.
• Method 3: MemFine with MACT, where chunk threshold is set to [1,2,4,8].
The memory consumption results are shown in the Table 4. For Model I, Method 1 generates extreme activation memory usage, which leads to OOM, preventing normal continuous training. In comparison, MemFine with fixed ck = 8 effectively reduces activation memory by 83.84%. Under the MACT algorithm, MemFine derives an optimal ck = 2, which also reduces activation memory by 48.03%. Similar conclusions can be drawn for Model II.
On the other hand, we compared the training performance of the three methods on both models, as shown in Fig. 4. Overall, the performance on both models initially improves, then decreases, and gradually improves again, which correlates with token distribution patterns in the early training stages. Specifically, for Model I, Method 3 achieves the best performance, with an average tokens per gpu per second (TGS) improvement of 18.26% compared to Method 2, while Method 1 cannot train normally due to -
OOM. In particular, TGS is calculated as follows
T GS = gbss
T N (10)
where T denotes as the time of one iteration and N denotes as the number of GPU. For Model II, Method 3 improves average TGS by 4.42% compared to Method 1, while Method 2 shows a 5.40% degradation in average TGS compared to Method 1. The mitigation of OOM issues and performance improvements fully demonstrate the effectiveness of the design of the MemFine with MACT.
Finally, using Model I as an example, we analyzed the effectiveness of MACT, as shown in the Fig. 5. It can be observed that as training iterations increase, the dynamically selected chunks in Model II first increase and then decrease. Larger chunks are concentrated in layers 7-15 during iterations 5-15. Furthermore, later layers exhibit more large chunk values, indicating that the model is in a relatively chaotic state during these iterations, with weaker feature learning capability in later laye-
rs leading to extremely uneven token distribution. After approximately 10 iterations, the distribution begins to stabilize, suggesting the model is gradually learning expert features from the chaotic state.
7

1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 iteration
4
5
6
7
8
9
10
11
12
13
14
15
layer
11111122211111111111
11112222221111211111
11112122121111111111
11222424412122211111
11112244222122221121
11122244442222221111
11122244442222421222
11122244444444422222
11122444444222222222
11124444444224224222
11124444444244424222
11124244444444422242
1
2
4
chunk value
Figure 5: Trend of chunk values during training of Model I with Method 3.
6 Conclusion
To addresses the critical memory bottleneck in large-scale MoE training caused by dynamic token routing and severe load imbalance, this paper proposed MemFine, a memory-aware fine-grained scheduling framework that effectively eliminates memory overflow on capacity-constrained GPUs without compromising the dynamic routing mechanism essential for model accuracy. By decomposing token distribution and expert computation into manageable chunks and employing a dynamically optimized chunked recomputation-
 strategy, MemFine significantly reduces activation memory usage while maintaining high training throughput. Experimental results demonstrate that our method reduces activation memory by 48.03% and improves throughput by 4.42% compared to full recomputation baselines. MemFine thus provides an efficient and practical solution for enabling stable training of ultra-large-scale MoE models on memory-limited hardware, opening new possibilities for scaling AI models efficiently. Future work will explore -
the application of MemFine to broader distributed training scenarios and more diverse model architectures.
7 Authors
The list of authors is shown below. Names marked with an asterisk ∗ indicate the equal contribution, names marked with an asterisk † indicate the corresponding authors.
Lu Zhao∗, Rong Shi∗, Shaoqing Zhang∗†, Yueqiang Chen, Baoguo He, Hongfeng Sun, Ziqing Yin, Shangchao Su, Zhiyan Cui, Liang Dong, Xiyuan Li, Lingbin Wang, Jianwei He, Jiesong Ma, Weikang Huang, Jianglei Tong, Dongdong Gao, Jian Zhang, Hong Tian.
References
[1] Bin Wang, Bojun Wang, Changyi Wan, Guanzhe Huang, Hanpeng Hu, Haonan Jia, Hao Nie, Mingliang Li, Nuo Chen, Siyu Chen, et al. Step-3 is large yet affordable: Model-system co-design for cost-effective decoding. arXiv preprint arXiv:2507.19427, 2025.
[2] Noam Shazeer, Azalia Mirhoseini, Krzysztof Maziarz, Andy Davis, Quoc Le, Geoffrey Hinton, and Jeff Dean. Outrageously large neural networks: The sparsely-gated mixture-of-experts layer. arXiv preprint arXiv:1701.06538, 2017.
[3] Shaoqing Zhang, Jindan Xu, Wei Xu, Ning Wang, Derrick Wing Kwan Ng, and Xiaohu You. Data augmentation empowered neural precoding for multiuser mimo with mmse model. IEEE Communications Letters, 26(5):1037–1041, 2022.
[4] Ziqing Yin, Wei Xu, Renjie Xie, Shaoqing Zhang, Derrick Wing Kwan Ng, and Xiaohu You. Deep csi compression for massive mimo: A self-information model-driven neural network. IEEE Transactions on Wireless Communications, 21(10):8872–8886, 2022.
8

[5] Shaoqing Zhang, Wei Xu, Shi Jin, Xiaohu You, Derrick Wing Kwan Ng, and Li-Chun Wang. Dualpropagation-feature fusion enhanced neural csi compression for massive mimo. IEEE Transactions on Communications, 71(9):5182–5198, 2023.
[6] An Yang, Anfeng Li, Baosong Yang, Beichen Zhang, Binyuan Hui, Bo Zheng, Bowen Yu, Chang Gao, Chengen Huang, Chenxu Lv, et al. Qwen3 technical report. arXiv preprint arXiv:2505.09388, 2025.
[7] Samyam Rajbhandari, Conglong Li, Zhewei Yao, Minjia Zhang, Reza Yazdani Aminabadi, Ammar Ahmad Awan, Jeff Rasley, and Yuxiong He. Deepspeed-moe: Advancing mixture-of-experts inference and training to power next-generation ai scale. In International conference on machine learning, pages 18332–18346. PMLR, 2022.
[8] Weilin Cai, Juyong Jiang, Fan Wang, Jing Tang, Sunghun Kim, and Jiayi Huang. A survey on mixture of experts in large language models. IEEE Transactions on Knowledge and Data Engineering, 2025.
[9] Dmitry Lepikhin, HyoukJoong Lee, Yuanzhong Xu, Dehao Chen, Orhan Firat, Yanping Huang, Maxim Krikun, Noam Shazeer, and Zhifeng Chen. Gshard: Scaling giant models with conditional computation and automatic sharding. arXiv preprint arXiv:2006.16668, 2020.
[10] Lean Wang, Huazuo Gao, Chenggang Zhao, Xu Sun, and Damai Dai. Auxiliary-loss-free load balancing strategy for mixture-of-experts. arXiv preprint arXiv:2408.15664, 2024.
[11] Yechan Kim, Hwijoon Lim, and Dongsu Han. Scaling beyond the gpu memory limit for large mixture-ofexperts model training. In Forty-first International Conference on Machine Learning, 2024.
[12] William Fedus, Barret Zoph, and Noam Shazeer. Switch transformers: Scaling to trillion parameter models with simple and efficient sparsity. Journal of Machine Learning Research, 23(120):1–39, 2022.
[13] Aixin Liu, Bei Feng, Bing Xue, Bingxuan Wang, Bochao Wu, Chengda Lu, Chenggang Zhao, Chengqi Deng, Chenyu Zhang, Chong Ruan, et al. Deepseek-v3 technical report. arXiv preprint arXiv:2412.19437, 2024.
[14] Tianqi Chen, Bing Xu, Chiyuan Zhang, and Carlos Guestrin. Training deep nets with sublinear memory cost. arXiv preprint arXiv:1604.06174, 2016.
[15] Vijay Anand Korthikanti, Jared Casper, Sangkug Lym, Lawrence McAfee, Michael Andersch, Mohammad Shoeybi, and Bryan Catanzaro. Reducing activation recomputation in large transformer models. Proceedings of Machine Learning and Systems, 5:341–353, 2023.
[16] Jie Ren, Samyam Rajbhandari, Reza Yazdani Aminabadi, Olatunji Ruwase, Shuangyan Yang, Minjia Zhang, Dong Li, and Yuxiong He. {Zero-offload}: Democratizing {billion-scale} model training. In 2021 USENIX Annual Technical Conference (USENIX ATC 21), pages 551–564, 2021.
[17] Chao Jin, Ziheng Jiang, Zhihao Bai, Zheng Zhong, Juncai Liu, Xiang Li, Ningxin Zheng, Xi Wang, Cong Xie, Qi Huang, et al. Megascale-moe: Large-scale communication-efficient training of mixture-of-experts models in production. arXiv preprint arXiv:2505.11432, 2025.
[18] Jeff Rasley, Samyam Rajbhandari, Olatunji Ruwase, and Yuxiong He. Deepspeed: System optimizations enable training deep learning models with over 100 billion parameters. In Proceedings of the 26th ACM SIGKDD international conference on knowledge discovery & data mining, pages 3505–3506, 2020.
[19] Mohammad Shoeybi, Mostofa Patwary, Raul Puri, Patrick LeGresley, Jared Casper, and Bryan Catanzaro. Megatron-lm: Training multi-billion parameter language models using model parallelism. arXiv preprint arXiv:1909.08053, 2019.
[20] Yaowei Zheng, Richong Zhang, Junhao Zhang, Yanhan Ye, Zheyan Luo, Zhangchi Feng, and Yongqiang Ma. Llamafactory: Unified efficient fine-tuning of 100+ language models. arXiv preprint arXiv:2403.13372, 2024.
[21] Yehui Tang, Yichun Yin, Yaoyuan Wang, Hang Zhou, Yu Pan, Wei Guo, Ziyang Zhang, Miao Rang, Fangcheng Liu, Naifu Zhang, et al. Pangu ultra moe: How to train your big moe on ascend npus. arXiv preprint arXiv:2505.04519, 2025.
[22] Lu Zhao, Rong Shi, Shaoqing Zhang, Shangchao Su, Ziqing Yin, Zhiyan Cui, Hongfeng Sun, Baoguo He, Yueqiang Chen, Liang Dong, et al. Mofa: A unified performance modeling framework for llm pretraining. arXiv preprint arXiv:2511.09837, 2025.
9

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:26.921Z
- **Text Length:** 29716 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 9 of 9
