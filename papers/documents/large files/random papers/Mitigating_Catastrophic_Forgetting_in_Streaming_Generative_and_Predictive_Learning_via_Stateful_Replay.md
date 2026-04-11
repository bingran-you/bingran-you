# PDF Document: Du - 2025 - Mitigating Catastrophic Forgetting in Streaming Generative and Predictive Learning via Stateful Repl.pdf

**File Path:** Du - 2025 - Mitigating Catastrophic Forgetting in Streaming Generative and Predictive Learning via Stateful Repl.pdf

**Processed Date:** 2026-02-10T18:16:31.435Z

**File Size:** 539.90 KB

**Total Pages:** 11

**Extracted Pages:** 11

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3466

**Title:** Mitigating Catastrophic Forgetting in Streaming Generative and Predictive Learning via Stateful Replay

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Mitigating Catastrophic Forgetting in Streaming
Generative and Predictive Learning via Stateful
Replay
Du Wenzhang
Dept. of Computer Engineering, Mahanakorn University of Technology, International College (MUTIC) Bangkok, Thailand dqswordman@gmail.com
Abstract. Neural models deployed on data streams must track a drifting distribution with limited memory. Sequential fine-tuning on each phase (SeqFT) is simple and architecture-agnostic, but can catastrophically forget earlier regimes when gradients from later phases conflict. Replay with a finite buffer (Replay) is an equally simple remedy, yet its behaviour across heterogeneous streams and generative objectives is not well understood. We cast reconstruction, forecasting and classification unifor-
mly as negative log-likelihood minimisation over phase-wise distributions, and quantify forgetting via phase-wise changes in risk. Viewing SeqFT and Replay as stochastic gradient methods for an ideal joint objective, we give a short gradient-alignment analysis showing how Replay mixes current and historical gradients to turn many “forgetting steps” into benign updates. We then build a mixed generative–predictive benchmark of six streaming scenarios on three public datasets (Rotated MNIST, Electric-
ityLoadDiagrams2011–2014, Airlines), and log per-phase initial and final metrics to support reproducible analysis. Across three seeds and matched training budgets, the pattern is sharp: on heterogeneous multi-task streams (RotMNIST digit pairs, Airlines airline groups), Replay dramatically reduces catastrophic forgetting; on benign time-based streams (Electricity and Airlines), SeqFT and Replay behave similarly and forgetting is negligible. Code and logs will be released upon publication to facili-
tate reproducibility.
Keywords: Streaming learning · Replay memory · Generative models · Time series
1 Introduction
Many deployed learning systems operate on streams rather than static datasets [3,1]. Electricity providers record long-term load curves, airlines log every flight, and perception pipelines observe a continuous feed of images and signals. Models are updated online or in small batches on the newest data, often with strict
arXiv:2511.17936v1 [cs.LG] 22 Nov 2025

2 Du Wenzhang
memory limits. The most common training protocol is sequential fine-tuning (SeqFT): train on phase 1, then continue optimisation on phase 2, and so on. SeqFT reuses standard training code and is architecture-agnostic, but is vulnerable to catastrophic forgetting [13,4,14]: when later phases correspond to different sub-populations, label subsets or tasks, gradients from new phases can overwrite parameters that were useful for earlier ones. For generative objectives this is especially problematic: o-
nce an autoencoder or forecaster no longer reconstructs historical regimes, its outputs stop reflecting the system’s history. Replay with a finite buffer (Replay) is arguably the simplest continual-learning mechanism [11,5]: keep a small buffer of past examples and mix them into current mini-batches. Replay is widely used, but empirical reports are mixed. More sophisticated continual-learning methods based on parameter-importance regularisation, knowledge distillation and generative replay have al-
so been proposed [8,18,10,16,12,6], but these often introduce additional complexity and tuning effort. On some benchmarks replay yields large gains, on others it appears unnecessary. This raises two basic questions: (i) when is replay memory theoretically justified and practically necessary in streaming learning, and (ii) how does its effect differ between generative vs. predictive tasks and between heterogeneous vs. near-stationary streams?
Contributions. We deliberately focus on a minimalist mechanism—stateful replay with a fixed-capacity buffer—and ask how far it goes when applied consistently across objectives and modalities. Our contributions are:
1. Unified streaming formulation. We cast auto-encoding, forecasting and classification uniformly as negative log-likelihood minimisation over phasewise data distributions, and define a simple phase-wise forgetting functional that applies across metrics.
2. Gradient-alignment view of replay. We interpret SeqFT and Replay as stochastic gradient methods for an ideal joint objective and show that forgetting on a past phase is governed, to first order, by the inner product between its gradient and the update direction. Replay replaces the pure current-phase gradient by a mixture of current and historical gradients; when gradients conflict, this mixture turns many “forgetting steps” into benign updates.
3. Mixed benchmark with transparent logging. We construct six streaming scenarios on three public datasets: Rotated MNIST (reconstruction and digit-pair classification), ElectricityLoadDiagrams2011–2014 (one-step load forecasting under time- and meter-group splits), and Airlines (delay prediction under time- and airline-group splits). All per-phase initial and final metrics for both methods and three seeds are stored in a single structured log, which we use to generate all tables and figures. 4. E-
mpirical characterisation. With matched training budgets, Replay dramatically reduces catastrophic forgetting on genuinely interfering streams (digit pairs and airline groups), while behaving like SeqFT on benign timebased streams where drift is mild.

Stateful Replay for Streaming Learning 3
Our goal is not to propose a complex new algorithm, but to position stateful replay as a strong, theoretically interpretable and well-documented baseline for streaming generative and predictive learning.
2 Setup and Methods
2.1 Streaming generative formulation
We observe phases t = 1, . . . , T , each associated with a distribution Pt over pairs (x, y) and a finite sample
Dt = {(x(t)
i , y(t)
i )}nt
i=1 ∼ P nt
t.
We consider a model fθ with parameters θ ∈ Rd and loss
l(fθ(x), y) = − log qθ(y | x), (1)
where qθ is a conditional density or mass function. This covers all tasks considered:
– Reconstruction (RotMNIST): y = x, qθ(· | x) is Gaussian with mean fθ(x); we evaluate by MSE. – Forecasting (Electricity): x is a past window, y the next time step; we evaluate by MSE. – Classification (RotMNIST, Airlines): y ∈ {1, . . . , C}, qθ(y | x) is softmax; we evaluate by accuracy but train with cross-entropy.
The population risk on phase t and the ideal joint risk are
Rt(θ) = E(x,y)∼Pt [l(fθ(x), y)], Rjoint(θ) = 1
T
T
X
t=1
Rt(θ). (2)
In an offline setting one could pool all Dt and run SGD on their union. In streaming we must update θ as phases arrive, without revisiting the full history.
2.2 Phase-wise forgetting
Let θt denote the parameters after finishing phase t. For each phase k we distinguish:
– Initial performance: empirical risk Rˆk(θk) on a held-out validation split from Pk ;
– Final performance: Rˆk(θT ) on the same split after training on all T phases.
We define phase-wise forgetting as
Fk =
(Rˆk(θT ) − Rˆk(θk), for loss metrics,
sinit
k − sfinal
k , for accuracy, (3)
where sinit
k and sfinal
k are initial and final accuracies. Thus Fk > 0 indicates forgetting, while Fk < 0 indicates positive backward transfer. We summarise
each dataset–scenario by the average F ̄ = 1
T
P
k Fk.

4 Du Wenzhang
2.3 SeqFT and stateful replay
Sequential fine-tuning (SeqFT). SeqFT processes phases in order. At phase t it runs mini-batch SGD on
Rˆt(θ) = 1
nt
X
(x,y)∈Dt
l(fθ(x), y), (4)
starting from θt−1 and producing θt. Let gt(θ) = ∇θRˆt(θ) and g ̃t its mini-batch estimate; an SGD step is θ ← θ − ηtg ̃t(θ).
Stateful replay (Replay). Replay augments SeqFT with an episodic buffer B of capacity C storing past examples. After finishing phase t, we insert a subset of Dt into B and evict oldest entries to maintain capacity (reservoir-style [17]). During phase t > 1, each update uses a mixed mini-batch: we draw B examples from Dt and, if B is non-empty, B from B. Let λ ∈ [0, 1] denote the fraction of buffer samples (we use λ ≈ 0.5). The expected gradient at phase t is
grep
t (θ) = (1 − λ)∇Rt(θ) + λ∇R(t)
B (θ), (5)
where R(t)
B is the risk under the buffer distribution at phase t. The state at the start of phase t is (θt−1, Bt−1), hence stateful replay.
3 Gradient Alignment View
We now sketch a simple gradient-alignment view that connects SeqFT and Replay to phase-wise forgetting. The aim is to explain the empirical trends we observe, not to provide a fully non-asymptotic theory for deep networks.
3.1 One-step forgetting and alignment
Fix a past phase k < t and consider a small parameter update at phase t: θ′ = θ − ηd with step direction d and small η > 0. A first-order expansion of Rk gives
Rk(θ′) ≈ Rk(θ) − η ⟨∇Rk(θ), d⟩. (6)
Thus the sign of ⟨∇Rk, d⟩ determines whether this step helps or hurts phase k. For SeqFT, d ≈ ∇Rt(θ). Define the cosine similarity between phases k and t as
cos φk,t(θ) = ⟨∇Rk(θ), ∇Rt(θ)⟩
∥∇Rk(θ)∥ ∥∇Rt(θ)∥ .
If cos φk,t > 0, small steps for phase t also decrease Rk (positive backward transfer). If cos φk,t < 0, gradients are conflicting and training on phase t increases Rk (local forgetting). Our heterogeneous streams (digit-pair and airline-group splits) are precisely in this regime, while time-based streams tend to have non-negative cosines.

Stateful Replay for Streaming Learning 5
3.2 Replay as gradient mixing
Replay replaces the pure current gradient by the mixture (5). Assume the buffer approximates the empirical mixture of past phases, so that
∇R(t)
B (θ) ≈ g ̄<t(θ) := 1
t−1
t−1
X
j=1
∇Rj (θ),
and define
drep = (1 − λ)∇Rt(θ) + λg ̄<t(θ).
Proposition 1 (Alignment condition). Fix k < t and θ. Assume:
(i) Conflict with the current phase: ⟨∇Rk(θ), ∇Rt(θ)⟩ < 0; (ii) Benign historical mixture: ⟨∇Rk(θ), g ̄<t(θ)⟩ ≥ 0.
Then there exists λ⋆ ∈ (0, 1) such that for all λ ∈ [λ⋆, 1],
⟨∇Rk(θ), drep⟩ ≥ 0,
so the first-order change in Rk under a Replay step is non-positive.
Proof. Sketch. Let
h(λ) = ⟨∇Rk, (1 − λ)∇Rt + λg ̄<t⟩.
By (i) we have h(0) < 0, by (ii) we have h(1) ≥ 0. Since h is affine in λ, it has a root λ⋆ ∈ (0, 1) and h(λ) ≥ 0 for all λ ≥ λ⋆. Substituting into (6) yields the claim. ⊓⊔
In words, when gradients from the current phase conflict with those of a past phase while the historical mixture is benign for that phase, Replay can flip a forgetting step into a non-forgetting step. This is exactly the regime we see on RotMNIST digit pairs and airline-group streams.
3.3 Finite buffer approximation
In practice the buffer contains a finite number C of examples rather than the full past stream. If the gradient of a single loss is bounded by ∥∇θl(fθ(x), y)∥ ≤ G, standard concentration bounds show that, at phase t, the buffer gradient devi
ates from g ̄<t by at most O(G/√C) with high probability. With a few hundred buffered examples this approximation error is small, and we observe empirically that Replay is robust as long as the buffer is not extremely tiny.
4 Benchmarks and Protocol
We evaluate SeqFT and Replay on three datasets and six streaming scenarios (Table 1), covering classification, reconstruction and forecasting.

6 Du Wenzhang
Table 1. Datasets and streaming scenarios used in our experiments.
Dataset Split Task Metric # Phases # Seeds Methods
RotMNIST digits_pairs classification acc 5 3 SeqFT, Replay RotMNIST digits_pairs reconstruction mse 5 3 SeqFT, Replay Electricity time forecasting mse 5 3 SeqFT, Replay Electricity meters forecasting mse 5 3 SeqFT, Replay Airlines time classification acc 5 3 SeqFT, Replay Airlines airline_group classification acc 5 3 SeqFT, Replay
Rotated MNIST (RotMNIST). RotMNIST contains rotated 28 × 28 grayscale digits derived from the MNIST dataset [9] and widely used in studies of catastrophic forgetting [4]. We define five phases by grouping digits into disjoint pairs: {0, 1}, {2, 3}, {4, 5}, {6, 7}, {8, 9}. For reconstruction we train a convolutional autoencoder; for classification we share the encoder and attach a linear classifier head that always predicts all 10 digits, making phases strongly interfering.
Electricity. ElectricityLoadDiagrams2011–2014 [2] contains hourly load measurements for 370 customers. We normalise each series, form sliding windows of length 96, and forecast the next step with MSE. We consider: (i) time: five contiguous temporal segments; and (ii) meters: five disjoint groups of customers, each with the full time span.
Airlines. The Airlines dataset [1] consists of over half a million flights with features such as carrier ID, origin and destination airports, day-of-week, scheduled departure time and duration. The label is a binary delay indicator. We define: (i) time: five chronological slices; and (ii) airline_group: five groups of carriers with distinct delay patterns.
Models and training. RotMNIST uses a CNN encoder–decoder for reconstruction and a linear classifier head for digits; Electricity uses a small 1D CNN/GRU forecaster; Airlines uses a 3-layer MLP over normalised tabular features. All models are implemented in PyTorch [15], trained with Adam [7] and batch sizes 128–256. For each dataset–scenario we fix the number of epochs per phase and learning rate based on preliminary tuning, then apply the same schedule to SeqFT and Replay so that training budgets-
 match. Replay uses a buffer of order 103 examples and a replay ratio λ ≈ 0.5. We run three seeds {13, 21, 42} for each method and scenario.
Metrics and logging. For each method, seed and phase k we log initial and final metrics (accuracy or MSE) on a held-out validation split, together with dataset, scenario and method identifiers. These logs are then aggregated to produce all tables and figures.

Stateful Replay for Streaming Learning 7
Fig. 1. RotMNIST digit-pair classification. For each phase we plot initial (solid) and final (dashed) test accuracy for SeqFT and Replay, averaged over seeds. SeqFT heavily forgets early digit pairs, while Replay preserves most of their performance.
Table 2. RotMNIST digit-pair classification: per-phase initial and final accuracy (%) and forgetting Fk (init–final, in accuracy points), averaged over three seeds.
SeqFT Replay (ours)
Phase Init (%) Final (%) Fk Init (%) Final (%) Fk
1 99.4 ± 0.2 41.3 ± 2.7 58.0 ± 2.5 99.4 ± 0.3 95.2 ± 2.2 4.2 ± 2.2 2 76.7 ± 2.4 44.4 ± 1.9 32.3 ± 3.2 76.4 ± 2.8 59.5 ± 2.9 16.9 ± 0.4 3 89.8 ± 0.8 21.5 ± 1.1 68.3 ± 0.5 83.6 ± 0.3 51.2 ± 4.1 32.4 ± 3.8 4 85.4 ± 0.4 68.0 ± 4.2 17.4 ± 4.5 79.2 ± 0.7 74.5 ± 3.5 4.7 ± 2.7 5 91.9 ± 1.3 91.9 ± 1.3 0.0 ± 0.0 87.9 ± 2.0 87.9 ± 2.0 0.0 ± 0.0
5 Results
We now summarise the main empirical findings, with per-phase numbers reported in the following tables.
5.1 Classification streams
RotMNIST digit-pair classification. Figure 1 plots per-phase initial and final accuracy for SeqFT and Replay. SeqFT achieves high initial accuracy on each digit pair but catastrophically forgets early phases: the first pair loses dozens of accuracy points by the end of the stream, and phases 2–3 also suffer large drops. Replay preserves a large fraction of early-phase performance while matching SeqFT on the last phase. Table 2 reports per-phase initial/final accuracy and forgetting Fk.
Airlines airline-group classification. Figure 2 shows initial and final accuracy for the heterogeneous carrier-group stream. SeqFT overfits the last group and

8 Du Wenzhang
Fig. 2. Airlines airline-group classification. Replay consistently reduces forgetting on early carrier groups compared to SeqFT, while remaining competitive on later groups.
Table 3. Airlines airline-group classification: per-phase initial and final accuracy (%) and forgetting Fk, averaged over seeds.
SeqFT Replay (ours)
Phase Init (%) Final (%) Fk Init (%) Final (%) Fk
1 71.6 ± 0.4 35.3 ± 0.1 36.4 ± 0.4 71.7 ± 0.3 53.6 ± 1.9 18.0 ± 1.7 2 60.7 ± 0.3 58.9 ± 0.8 1.8 ± 1.0 59.3 ± 1.4 59.9 ± 0.4 −0.6 ± 1.2 3 58.9 ± 0.3 57.1 ± 0.4 1.8 ± 0.6 58.6 ± 0.3 58.0 ± 0.4 0.6 ± 0.2 4 63.7 ± 0.3 54.0 ± 1.8 9.7 ± 2.0 63.0 ± 0.5 62.1 ± 0.3 0.8 ± 0.2 5 65.6 ± 0.4 65.6 ± 0.4 0.0 ± 0.0 64.3 ± 0.7 64.3 ± 0.7 0.0 ± 0.0
severely forgets the first group; Replay roughly halves this loss while keeping later phases competitive. Table 3 details per-phase initial/final accuracy and forgetting. These patterns align with Proposition 1: gradients from distinct carrier groups conflict, and replayed samples from earlier groups stabilise the updates.
Airlines time-based classification. On the temporal airline split, both methods show near-zero or slightly negative forgetting. Later phases act as additional regularisation for the classifier, and final accuracy on early phases can even improve slightly. This matches the benign drift regime where cross-phase gradients are largely aligned and replay has little to contract.
5.2 Reconstruction and forecasting
Electricity forecasting. Figure 3 plots initial and final MSE per phase for Electricity under time and meter splits. Curves for SeqFT and Replay almost overlap; in many cases final MSE is slightly lower than initial, indicating positive transfer. Per-phase initial and final MSE and the corresponding forgetting values Fk follow

Stateful Replay for Streaming Learning 9
Fig. 3. Electricity forecasting under temporal (left) and meter-group (right) splits. Initial and final MSE per phase are nearly identical for SeqFT and Replay, indicating negligible forgetting and some positive transfer.
Table 4. Average forgetting on classification benchmarks (mean over seeds and phases). Forgetting is reported in accuracy points (init–final).
Dataset Split Method Avg forgetting F
RotMNIST digits_pairs SeqFT 35.2 ± 28.2 RotMNIST digits_pairs Replay 11.7 ± 13.2 Airlines time SeqFT −1.5 ± 3.4 Airlines time Replay −1.0 ± 2.0 Airlines airline_group SeqFT 10.0 ± 15.2 Airlines airline_group Replay 3.8 ± 8.0
the same pattern. Overall, forgetting is negligible or slightly negative for both methods, consistent with the view that these streams resemble non-stationary single-task training.
RotMNIST reconstruction. Per-phase reconstruction MSE on the RotMNIST digit-pair stream shows that both SeqFT and Replay often exhibit negative forgetting (final MSE lower than initial), reflecting strong shared structure between digit pairs: later phases serve as additional regularisation rather than conflicting tasks.
5.3 Aggregate forgetting
To summarise classification behaviour we compute, for each dataset–scenario and method, the mean forgetting F ̄ across phases and seeds. Figure 4 and Table 4 present these aggregates. On heterogeneous multi-task streams (RotMNIST digit pairs, Airlines airlinegroup), SeqFT exhibits large positive forgetting, while Replay reduces |F ̄| by roughly a factor of two to three. On benign time-based streams, average forgetting is close to zero for both methods, and Replay behaves like a mild regulariser.

10 Du Wenzhang
Fig. 4. Average forgetting on classification scenarios (SeqFT vs. Replay). Bars show mean forgetting Fk (init–final, in accuracy points) over phases and seeds; error bars indicate standard deviation.
6 Conclusion
We presented a unified study of stateful replay for streaming generative and predictive learning. Formulating reconstruction, forecasting and classification under a single negative log-likelihood objective, and analysing SeqFT and Replay through gradient alignment, we showed how a minimal replay buffer can substantially mitigate catastrophic forgetting on genuinely interfering task streams, while behaving similarly to sequential fine-tuning on benign time-based streams. Experiments on RotMNIST, El-
ectricity and Airlines confirmed this dichotomy. Our study suggests that a carefully implemented replay buffer is a strong first-line tool for continual learning in streaming systems. Future work includes more principled buffer construction and sampling policies, combining replay with parameter-regularisation methods, and scaling the framework to larger architectures and multi-modal streams under realistic resource constraints.
References
1. Bifet, A., Holmes, G., Kirkby, R., Pfahringer, B.: MOA: Massive Online Analysis for data stream mining. J. Mach. Learn. Res. 11, 1601–1604 (2010) 2. Dua, D., Graff, C.: UCI Machine Learning Repository. University of California, Irvine (2017). http://archive.ics.uci.edu/ml (last accessed 2025/11/22) 3. Gama, J., Žliobaite ̇, I., Bifet, A., Pechenizkiy, M., Bouchachia, A.: A survey on concept drift adaptation. ACM Comput. Surv. 46(4), 44:1–44:37 (2014). DOI: 10.1145/2523813 4. Goodfellow, I.J., M-
irza, M., Xiao, D., Courville, A., Bengio, Y.: An empirical investigation of catastrophic forgetting in gradient-based neural networks. In: International Conference on Learning Representations (ICLR 2014) (2014). DOI: 10.48550/arXiv.1312.6211

Stateful Replay for Streaming Learning 11
5. Isele, D., Cosgun, A.: Selective experience replay for lifelong learning. In: AAAI Conference on Artificial Intelligence (AAAI-18), pp. 3302–3309 (2018). DOI: 10.1609/aaai.v32i1.11595 6. Kemker, R., McClure, M., Abitino, A., Hayes, T.L., Kanan, C.: Measuring catastrophic forgetting in neural networks. In: AAAI Conference on Artificial Intelligence (AAAI-18), pp. 3390–3398 (2018). DOI: 10.1609/aaai.v32i1.11651 7. Kingma, D.P., Ba, J.: Adam: A method for stochastic optimization. In: International-
 Conference on Learning Representations (ICLR 2015) (2015). DOI: 10.48550/arXiv.1412.6980 8. Kirkpatrick, J., et al.: Overcoming catastrophic forgetting in neural networks. Proc. Natl. Acad. Sci. USA 114(13), 3521–3526 (2017). DOI: 10.1073/pnas.1611835114 9. LeCun, Y., Bottou, L., Bengio, Y., Haffner, P.: Gradient-based learning applied to document recognition. Proc. IEEE 86(11), 2278–2324 (1998). DOI: 10.1109/5.726791 10. Li, Z., Hoiem, D.: Learning without forgetting. IEEE Trans. Pattern Anal. M-
ach. Intell. 40(12), 2935–2947 (2018). DOI: 10.1109/TPAMI.2017.2773081 11. Lin, L.-J.: Self-improving reactive agents based on reinforcement learning, planning and teaching. Mach. Learn. 8(3–4), 293–321 (1992). DOI: 10.1007/BF00992699 12. Lopez-Paz, D., Ranzato, M.: Gradient episodic memory for continual learning. In: Advances in Neural Information Processing Systems 30 (NeurIPS 2017), pp. 6467–6476 (2017). DOI: 10.48550/arXiv.1706.08840 13. McCloskey, M., Cohen, N.J.: Catastrophic interference in-
 connectionist networks: The sequential learning problem. In: Bower, G.H. (ed.) Psychology of Learning and Motivation, vol. 24, pp. 109–165. Academic Press, San Diego (1989). DOI: 10.1016/S0079-7421(08)60536-8 14. Parisi, G.I., Kemker, R., Part, J.L., Kanan, C., Wermter, S.: Continual lifelong learning with neural networks: A review. Neural Netw. 113, 54–71 (2019). DOI: 10.1016/j.neunet.2019.01.012 15. Paszke, A., et al.: PyTorch: An imperative style, high-performance deep learning library. In: Wa-
llach, H. et al. (eds.) Advances in Neural Information Processing Systems 32, pp. 8024–8035 (2019) 16. Shin, H., Lee, J.K., Kim, J., Kim, J.: Continual learning with deep generative replay. In: Advances in Neural Information Processing Systems 30 (NeurIPS 2017), pp. 2990–2999 (2017). DOI: 10.48550/arXiv.1705.08690 17. Vitter, J.S.: Random sampling with a reservoir. ACM Trans. Math. Softw. 11(1), 37–57 (1985). DOI: 10.1145/3147.3165 18. Zenke, F., Poole, B., Ganguli, S.: Continual learning through -
synaptic intelligence. In: Precup, D., Teh, Y.W. (eds.) Proceedings of Machine Learning Research, vol. 70, pp. 3987–3995. PMLR (2017)

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:31.435Z
- **Text Length:** 23353 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 11 of 11
