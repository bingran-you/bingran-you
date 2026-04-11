# PDF Document: Zhou et al. - 2025 - Terminal Velocity Matching.pdf

**File Path:** Zhou et al. - 2025 - Terminal Velocity Matching.pdf

**Processed Date:** 2026-02-10T18:14:30.501Z

**File Size:** 2905.47 KB

**Total Pages:** 24

**Extracted Pages:** 24

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3401

**Title:** Terminal Velocity Matching

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

TERMINAL VELOCITY MATCHING
Linqi Zhou Luma AI
Mathias Parger Luma AI
Ayaan Haque Luma AI
Jiaming Song Luma AI
Figure 1: (Left) a conceptual comparison of our method to prior methods. TVM guides the one-step model via terminal velocity rather than initial velocity. (Right) 1-NFE samples on ImageNet at 256 and 512 resolution.
ABSTRACT
We propose Terminal Velocity Matching (TVM), a generalization of flow matching that enables high-fidelity one- and few-step generative modeling. TVM models the transition between any two diffusion timesteps and regularizes its behavior at its terminal time rather than at the initial time. We prove that TVM provides an upper bound on the 2-Wasserstein distance between data and model distributions when the model is Lipschitz continuous. However, since Diffusion Transformers lack this property, we in-
troduce minimal architectural changes that achieve stable, single-stage training. To make TVM efficient in practice, we develop a fused attention kernel that supports backward passes on Jacobian-Vector Products, which scale well with transformer architectures. On ImageNet-256×256, TVM achieves 3.29 FID with a single function evaluation (NFE) and 1.99 FID with 4 NFEs. It similarly achieves 4.32 1-NFE FID and 2.94 4-NFE FID on ImageNet-512×512, representing state-of-the-art performance for one/few-s-
tep models from scratch.
1 INTRODUCTION
Can we build generative models that simultaneously deliver high-quality samples, fast inference, and scalability to high-dimensional data, all from a single training stage? This is the central challenge that continues to drive research in generative models. While Diffusion Models (Sohl-Dickstein et al., 2015; Ho et al., 2020; Song et al., 2020) and Flow Matching (Liu et al., 2022; Lipman et al., 2022) have become the dominant paradigms for generating images (Rombach et al., 2022; Podell et al., 20-
23; Esser et al., 2024) and videos (OpenAI, 2024; Wan et al., 2025), they typically require many sampling steps (e.g., 50) to produce high-quality outputs. This multi-step nature makes generation computationally expensive, especially for high-dimensional data like videos.
In pursuing a single-stage training for few-step inference, recent methods have focused on directly learning integrated trajectories rather than relying on ODE solvers. Consistency-based approaches (CT (Song et al., 2023), CTM (Kim et al., 2023), sCT (Lu & Song, 2024)) and trajectory matching methods like MeanFlow (Geng et al., 2025) learn to predict or match trajectory derivatives. However, these methods lack explicit connections to distribution matching, a fundamental measure of generative model-
 quality. While Inductive Moment Matching (IMM) (Zhou et al., 2025) addresses this gap by providing distribution-level guarantees through Maximum Mean Discrepancy, it requires multiple particles per training step, limiting scalability.
1
arXiv:2511.19797v1 [cs.LG] 24 Nov 2025

We propose Terminal Velocity Matching (TVM), a new framework for learning ground-truth trajectories of flow-based models in a single training stage. Instead of matching time derivatives at the initial time, TVM matches them at the terminal time of trajectories. This conceptually simple shift yields powerful theoretical guarantees. We prove that our training objective upper bounds the 2-Wasserstein distance between data and model distributions. Unlike IMM, our method provides distribution-level gu-
arantees without requiring multiple particles. Our analysis also reveals a critical architectural limitation: current diffusion transformers (Peebles & Xie, 2023) lack Lipschitz continuity, which destabilizes TVM training. We address this with minimal architectural modifications, including RMSNorm-based QK-normalization and time embedding normalization.
To make TVM practical at scale, we develop an efficient Flash Attention kernel that supports backward passes on Jacobian-Vector Products (JVP), crucial for our terminal velocity computation. Our implementation achieves up to 65% speedup and significant memory reduction compared to standard PyTorch operations. We introduce a scaled parameterization where the network output naturally scales with the CFG weight w, allowing the model to handle varying guidance strengths more effectively. During traini-
ng, we randomly sample CFG weights and directly incorporate them into our objective function with appropriate weighting (1/w2) to prevent gradient explosion. This approach enables stable training across diverse guidance scales without requiring curriculum learning or specialized loss modifications, making TVM straightforward to implement and scale.
TVM achieves state-of-the-art results on ImageNet-256×256, with 3.29 FID in single-step generation (outperforming MeanFlow’s (Geng et al., 2025) with 3.43 FID) and matches/exceeds diffusion baselines with just 4 function evaluation steps (i.e., 1.99 FID for TVM vs. 2.27 FID for DiT). Similarly, our method surpasses diffusion baselines with 4-NFE on ImageNet-512×512 (i.e. 2.94 FID for TVM vs. 3.04 FID for DiT) while outperforming prior from-scratch methods such as sCT (Lu & Song, 2024) and MeanFlow-
 on single-step generation. Our method naturally interpolates between one-step and multi-step sampling without retraining, requires no training curriculum or loss modifications, and maintains stability with simple architectures. Our construction provides new insights into building scalable one/few-step generative models with distributional guarantees, demonstrating that principled theoretical design can lead to practical improvements in both training stability and generation quality.
2 PRELIMINARIES: FLOW MATCHING
For a given data distribution p0(x0) and prior distribution p1(x1), Flow Matching (FM) (Lipman et al., 2022; Liu et al., 2022) constructs a time-augmented linear interpolation xt between data
x0 ∈ RD and prior x1 ∈ RD such that xt = (1 − t)x0 + tx11. For each path xt conditioned on a (x0, x1) pair, there exists a conditional velocity vt = x1 − x0 for each xt. Under this definition, a
ground-truth velocity field u : RD × [0, 1] → RD marginal over all data and prior exists but is not known in analytical form. Therefore, a neural network uθ(xt, t) is used as approximation via loss
LFM(θ) = Ext,vt,t[∥uθ(xt, t) − vt∥2
2] (1)
for all t ∈ [0, 1] and xt ∼ pt(xt) where pt(xt) denotes the marginal distribution over all data and prior. It can be shown that the minimizer θmin implies uθmin (xt, t) = u(xt, t) which can be used
during inference to transport prior to data distribution by solving an ODE d
dt xt = u(xt, t).
For each ground-truth u(xt, t), there exists a corresponding displacement map ψ : RD × [0, 1] ×
[0, 1] → RD (i.e. flow map (Boffi et al., 2024)) from any start time t ∈ [0, 1] to an end time s ∈ [0, 1]. It is defined as the ODE integral following u(xr, r) for all r ∈ [s, t], i.e.
ψ(xt, t, s) = xt +
Zs
t
u(xr, r)dr. (2)
Empirically, uθ(xt, t) is used with classical ODE integration techniques such as the Euler method to produce samples.
1See Lipman et al. (2022); Albergo et al. (2023) for general path constructions.
2

Figure 2: An illustration of Terminal Velocity Matching. Left shows the ground-truth displacement map by integrating the true velocity. Right shows our model path directly jumping between points on the ground-truth path in one step. In our method, the one-step generation x0 from xt coincides with ground-truth x0 if the terminal velocity of model d
ds f (xt, t, s) coincides with ground-truth velocity u(xs, s) for all s ∈ [0, t] along
the true flow path (see Eq. (7)). The terminal velocity condition is jointly satisfied with the boundary case when model displacement is 0, where matching d
ds f (xt, t, s)|s=t with u(xt, t) reduces to Flow Matching.
3 TERMINAL VELOCITY MATCHING
We propose Terminal Velocity Matching (TVM), a single-stage objective that directly learns the ODE integral in Eq. 2. By learning the transition between any two timesteps, TVM can generate high quality solutions in one step or few steps, while enjoying inference-time scaling.
Let f (xt, t, s) := ψ(xt, t, s) − xt denote the net displacement of the velocity field. We observe that it must satisfy the following two conditions:
1 f (xt, t, s) =
Zs
t
u(xr, r)dr , 2 d
ds f (xt, t, s)
s=t
= u(xt, t). (3)
The first condition is the definition of net displacement and the second condition is true by differentiating both sides of the first condition w.r.t. s evaluated at s = t. It explicitly relates the displacement map (with large time jump) to the marginal velocity field (with infinitesimal time jump), allowing us to interpolate between one-step sampling and ODE-like infinite-step sampling.
One of our key insights is that we can use a single two-time conditioned neural network Fθ(xt, t, s) to learn both the one-step displacement sampler from t to s and the instantaneous velocity field. For simplicity, we let our model with learnable parameters θ be
fθ(xt, t, s) = (s − t)Fθ(xt, t, s), uθ(xt, t) := d
ds fθ(xt, t, s)
s=t
= Fθ(xt, t, t) (4)
where the scaling (s − t) is chosen to satisfy integral boundary condition when t = s2. Condition 2 can be easily enforced by FM loss (in Eq. (1)) and condition 1 can be na ̈ıvely enforced via the displacement error
Lt
displ(θ) := Ext
"
fθ(xt, t, 0) −
Z0
t
u(xr, r)dr
2
2
#
. (5)
Once the above error is minimized to zero, one can obtain one-step samples by calling xt + fθ(xt, t, 0) for any xt ∼ pt(xt) at t ∈ [0, 1]. However, this objective is infeasible because it requires ODE integration for each starting point xt. We address this challenge by proposing a simple sufficient condition to the network that bypasses explicit training-time ODE simulation.
Terminal Velocity Condition. Explicit integration can be bypassed via differentiating w.r.t. integral boundaries. For the ground-truth net displacement f (xt, t, s) in condition 1 , differentiating w.r.t. s gives rise to the following condition on terminal velocity, i.e.
d
ds f (xt, t, s) = u(ψ(xt, t, s), s). (6)
This condition is true for any ground-truth net displacement f , and we show in Appendix A.2 that given t ∈ [0, 1] and our parameterized map fθ(xt, t, s),
Lt
displ(θ) ≤
Zt
0
Ext
"
d
ds fθ(xt, t, s) − u(ψ(xt, t, s), s)
2
2
#
ds. (7)
2This is similar to CTM (Kim et al., 2023). See Appendix A.1 for conditions on general scaling factors.
3

This result shows that the terminal velocity error on the right hand side upper bounds the displacement error, and so zero terminal velocity error implies that displacement from t to 0 matches exactly. Moreover, it is easy to see that the terminal velocity error reduces to the marginal FM loss as t → s (see Appendix A.3). FM can thus be understood as matching a trajectory’s terminal velocity when the net displacement is 0. An illustration of our framework is shown in Figure 2. Despite the simplic-
ity and generality, in practice, fulfilling this condition is still difficult due to the requirement of ψ and u. Fortunately, this issue can be effectively addressed using learned network as proxies.
Learned networks as proxies. Specifically, we propose the following approximation
u(ψ(xt, t, s), s) ≈ uθ(xt + fθ(xt, t, s), s) (8)
as proxies for the ground-truths. To properly guide the terminal velocity, uθ(xs, s) needs to first approximate the ground-truth u(xs, s) for any xs and s. Therefore, the proxy terminal velocity error can be jointly optimized with Flow Matching, which, as noted above, is a special boundary case of the terminal velocity error when displacement is 0. We use the term “Terminal Velocity Matching” for this joint minimization of general and boundary-case velocity error, where the objective is
Lt,s
TVM(θ) = Ext,xs,vs
"
d
ds fθ(xt, t, s) − uθ(xt + fθ(xt, t, s), s)
2
2
| {z }
satisfies 1
+ uθ(xs, s) − vs
2
2
| {z }
satisfies 2
#
(9)
for each time t ∈ [0, 1] and s ∈ [0, t]. Intuitively, this objective leverages a single network to parameterize both the instantaneous velocity field and the displacement map, the former of which is learned from data to guide the learning of the latter. To provide further theoretical justification, in the following theorem, we formally establish a weighted integral of our objective as a proper upper bound on the 2-Wasserstein distance between the data distribution p0(x0) and our model distribution
ftθ→0#pt(xt) pushforward from pt(xt) via our parameterized flow map.
Theorem 1 (Connection to the 2-Wasserstein distance). Given t ∈ [0, 1], let ftθ→0#pt(xt) be the distribution pushforward from pt(xt) via fθ(xt, t, 0), and assume uθ(·, s) is Lipschitz-continuous for all s ∈ [0, t] with Lipschitz constants L(s), with additional mild regularity conditions,
W2
2 (f θ
t→0#pt, p0) ≤
Zt
0
λ[L](s)Lt,s
TVM(θ)ds + C, (10)
where W2(·, ·) is 2-Wasserstein distance, λ[·] is a functional of L(·), and C is a non-optimizable constant.
Training objective. The theorem relates our per-time objective to distribution divergence. However, for practicality, we avoid computation of the above weighting function and instead choose to randomly sample both t and s via distribution p(s, t) such that
LTVM(θ) = Et,s Lt,s
TVM(θ) (11)
where notably LTVM(θ) reduces to Flow Matching objective when t = s (see Appendix A.5). In practice, we employ a biased estimate of the above objective by using exponentially averaged (EMA) weights and stop-gradient for our proxy networks (Li et al., 2023). The biased per-time objective
Lˆt,s
TVM(θ) is
Ext ,xs ,vs
"
d
ds fθ(xt, t, s) − uθs∗g (xt + fθsg (xt, t, s), s)
2
2
1t̸=s + uθ(xs, s) − vs
2
2
#
(12)
where θsg and θ∗
sg are the stop-grad weight and stop-grad EMA weight of θ, and 1t̸=s is 0 when t = s and 1 otherwise to ensure the constraint to reduce to FM loss when t = s.
Classifier-free guidance (CFG). In the case of class-conditional generation. The ground-truth velocity field is replaced by a linear combination of class-conditional velocity u(xr, r, c) and unconditional velocity u(xr, r) (Ho & Salimans, 2022), such that the new displacement map is
ψw(xt, t, s, c) = xt +
Zs
t
[wu(xr, r, c) + (1 − w)u(xr, r)] dr, (13)
4

where w is the CFG weight, c is class and ∅ denotes empty label. To train with CFG, we additionally condition the network on w and c, and our class-conditional map is fθ(xt, t, s, c, w) = (s − t)Fθ(xt, t, s, c, w) where the additional w scale is chosen due to linear scaling in magnitude for marginal velocity w.r.t. w. The instantaneous velocity uθ(xs, s, c, w) is regressed against conditional velocity wvt + (1 − w)u(xr, r) where we can approximate u(xr, r) with our own network (Chen et al., 2025)-
. The per-time and per-class Flow Matching term can be modified as
Lˆs,c,w
FM (θ) = Exs,vs uθ(xs, s, c, w) −
h
wvs + (1 − w)uθs∗g (xs, s, ∅, 1))
i2
2
, (14)
where θ∗
sg denotes EMA weights. We show in Appendix A.6 that the minimizer of this objective
coincides with the ground-truth CFG velocity in Eq. (13). Our class-conditional objective Lˆt,s,w
TVM (θ) can be modified as
1
w2 Ext,c
"
d
ds fθ(xt, t, s, c, w) − uθs∗g (xt + fθsg (xt, t, s, c, w), s, c, w)
2
2
1t̸=s + Lˆs,c,w
FM (θ)
#
. (15)
The weighting 1/w2 is to prevent exploding gradients because the magnitude of ground-truth velocity scales linearly with w. Final objective simply samples each of t, s, w under some distribution p(t, s)p(w) and computes the above loss in expectation. We randomly set c = ∅ with some probability (e.g. 10%) and for each c = ∅ we set w = 1. Our training algorithm is shown in Algorithm 1.
def sampling(net, x, n, c, w): ts = torch.linspace(1, 0, n+1) for t,s in zip(ts[:1],ts[1:]): x = x + (s−t) * net(x, t, s, c, w) return x
Figure 3: PyTorch-style sampling code.
Sampling. Our construction can naturally interpolate between one-step and n-step sampling. See Figure 3 for PyTorch-style sampling code.
4 PRACTICAL CHALLENGES
We note and address several challenges to practically implement our objective.
Semi-Lipschitz control. Theorem 1 makes the crucial assumption that uθ(xs, s) is Lipschitz continuous. However, modern transformers with scaled dot-product attention (SDPA) and LayerNorm (LN, Ba et al. (2016)) are not Lipschitz continuous (Kim et al., 2021; Qi et al., 2023; Castin et al., 2023). This issue similarly applies to diffusion transformers (DiT) (Peebles & Xie, 2023). Our insight is to make minimal and non-restrictive changes to the architecture for Lipschitz control.
0k 50k 100k 150k 200k 250k
Training Steps
0
1
2
3
4
5
AdaLN Act Norm
w/o Lipschitz w/ Lipschitz
Figure 4: Activation norm of last time embedding layer. Same trends follow for all other layers.
As shown in Figure 4, the original DiT experiences training instability leading to steep jump in network activations. As a solution, we adopt RMSNorm as QK-Norm, which coinsides with the proposed L2 QK-Norm (Qi et al., 2023) with learnable scaling and is provably Lipschitz continuous. We also substitute all LN with RMSNorm (without learnable pa
rameters, denoted as RMSNorm−(·)), whose Lipschitzness we show in Appendix B.1. In addition, DiT introduces Adaptive LayerNorm (AdaLN) where the output of RMSNorm is modulated by MLP outputs of time embeddings denoted as
RMSNorm−(x) ⊙ a(t) + b(t) where x is the input feature and a(t), b(t) are scale and shift respectively. However, the Lipschitz constant of this layer depends on the magnitude of a(t) which can grow unbounded and is subject to instability. We therefore employ RMSNorm−(·) again on all modulation parameters for
AdaLN(x, t) = RMSNorm−(x) ⊙ RMSNorm−(a(t)) + RMSNorm−(b(t)). (16)
Figure 4 also shows the activation with our proposed changes. Activations stay smooth after our fixes. Finally, we follow Qi et al. (2023) and use Lipschitz initialization for all linear layers except for time embedding layers. Note that these modifications do not explicitly constrain the Lipschitz constants of all but the key layers where instability can arise. We find such partial control of the Lipschitzness is sufficient for empirical success.
5

Flash Attention JVP with backward pass. The training objective involves the time derivative of our map fθ(xt, t, s), which can be derived as
d
ds fθ(xt, t, s) = Fθ(xt, t, s) + (s − t)∂sFθ(xt, t, s) (17)
where the last term involves differentiating through the network with Jacobian-Vector Product (JVP). This poses significant challenge for transformers because automatic differentiation packages, e.g. PyTorch, often do not efficiently handle JVP of SDPA. Open-source Flash Attention (Dao et al., 2022) also has limited support for JVP. Crucially, different from prior works (Lu & Song, 2024; Geng et al., 2025; Sabour et al., 2025), gradient is also propagated through the JVP term ∂sFθ(xt, t, s). To ta-
ckle these challenges, we propose an efficient Flash Attention kernel that (i) fuses JVP with forward pass, (ii) uses significantly less memory than na ̈ıve PyTorch attention, and (iii) supports backward pass on JVP results. We detail the implementation in Appendix C.
0k 50k 100k 150k 200k 250k
Training Steps
0.010
0.015
0.020
0.025
0.030
0.035
0.040
0.045
0.050
df
ds Loss
2 = 0.999 2 = 0.95
Figure 5: Smoother terminal velocity error with β2 = 0.95.
Optimizer parameter change. Due to higher-order gradient through JVP, our loss can be subject to fluctuation with the default AdamW β2 = 0.999. We take inspiration from language models (Touvron et al., 2023) for mitigation and use β2 = 0.95 to speed up update of the gradient second moment. As show in Figure 5, the terminal velocity error fluctuates significantly less after β2 change.
Scaled parameterization. The ground-truth CFG velocity scales linearly in magnitude with w, so using neural networks to directly predict the velocity may be suboptimal. We therefore additionally investigate a simple scaled alternative
as fθ(xt, t, s, c, w) = (s − t)wFθ(xt, t, s, c, w) so that uθ(xs, s, c, w) = wFθ(xs, s, s, c, w) which scales with w by design. We study the effect of this parameterization in experiments.
Different time distribution for FM loss. We find it empirically helpful to use a separate distribution to sample different s specifically for the FM loss (see Eq. (15)), even though this may deviate from a Wasserstein interpretation. This is because we can directly transfer the proven successful time distribution from FM training for TVM. How this is used can be found in Algorithm 1 and we ablate this decision in Section 7.3.
5 CONNECTION TO PRIOR WORKS
MeanFlow. MeanFlow (Geng et al., 2025) minimizes loss Ext,t,s
h
∥Fθ(xt, t, s) − Ftgt∥2
2
i
where
Ftgt = u(xt, t) + (s − t)
h
u(xt, t) · ∇xt Fθsg (xt, t, s) + ∂tFθsg (xt, t, s)
i
(18)
This loss can be equivalently rewritten as Ext,t,s
hd
dt fθ(xt, t, s) + u(xt, t) 2
2
i
where fθ(xt, t, s) =
(s−t)Fθ(xt, t, s) and loss is minimized if and only if d
dt fθ(xt, t, s) = −u(xt, t) (see Appendix E.1).
This exhibits duality with our proposed method in that we enforce a differential condition w.r.t. s while MeanFlow differentiates w.r.t. t which requires u(xt, t) to be propagated through JVP. In practice, u(xt, t) is replaced with vt, which introduces additional variance during training and can cause fluctuation in gradient, especially under random CFG during training (see Section 7.2). Additionally, the relationship between the loss and distribution divergence remains elusive with the introducti-
on of vt. In contrast, we show our loss upper bounds 2-Wasserstein distance up to some constant, and our theory provides the unique insight of enforcing the Lipschitzness of our network, which stablizes training.
Physics Informed Distillation (PID). PID (Tee et al., 2024) as inspired by Physics Informed Neural Networks (Raissi et al., 2019; Cuomo et al., 2022) distills pretrained diffusion models uφ(xt, t) into one-step samplers. It parameterizes the one-step net displacement as fθ(x1, s) = (s − 1)uθ(x1, s) where x1 ∼ p1(x1) and trains via distillation loss
Ex1,s
"
d
ds fθ(x1, s) − uφ(x1 + fθsg (x1, s), s)
2
2
#
(19)
6

Figure 6: One-step samples from TVM on both ImageNet-512×512 and ImageNet-256×256.
Our method generalizes the setting by introducing the starting time t in addition to the terminal time s. Under this view, PID sets t = 1 and can only generate one-step samples. We additionally show in Section 7.3 that na ̈ıve combination of PID and FM loss suffers from optimization instability and a continuous distribution on t is necessary for empirical success.
6 RELATED WORKS
Diffusion and Flow Matching. Diffusion models (Sohl-Dickstein et al., 2015; Ho et al., 2020; Song et al., 2020) learn generative models by reversing stochastic processes, while Flow Matching (Liu et al., 2022; Lipman et al., 2022) generalizes this to arbitrary priors with simplified training. Both approaches ultimately solve ODEs with neural networks during sampling.
One-Step and Few-Step Models from Scratch. To address slow inference from ODE simulation, recent methods aim for few-step generation in a single training stage. Consistency models (Song et al., 2023; Lu & Song, 2024) parameterize networks to represent ODE integrals but cannot jump between arbitrary timesteps without injecting additional noise, which can limit multi-step performance. Two-time conditioned approaches enable arbitrary timestep transitions: IMM (Zhou et al., 2025) provides distribution-
 consistency via Maximum Mean Discrepancy but requires multiple particles; MeanFlow (Geng et al., 2025) and Flow Map Matching (Boffi et al., 2024) match trajectory derivatives but lack distributional guarantees. Other variants bypass differentiation via Monte Carlo (Liu & Yue, 2025) or combine distillation with FM (Frans et al., 2024; Boffi et al., 2025).
Unlike these methods, TVM regularizes path behavior at the terminal time rather than initial time and provides explicit 2-Wasserstein bounds. While sCT and MeanFlow only compute forward JVP, TVM uniquely supports backward passes through the JVP computation, enabling full gradient flow for the terminal velocity objective. These innovations drive both our theoretical insights and architectural improvements.
7 EXPERIMENTS
We investigate how well TVM can generate natural images (Section 7.1), discuss its advantages compared to previous methods (Section 7.2), ablate various practical choices (Section 7.3) and discuss its computation cost (Section 7.4).
7.1 IMAGE GENERATION
ImageNet-256×256. We present quantitative results in Table 1 under FID (Heusel et al., 2017). We adopt the default DiT-XL/2 architecture (Peebles & Xie, 2023) and inject t − s as the second timestep, following IMM (Zhou et al., 2025) and MeanFlow (Geng et al., 2025). We additionally employ our semi-Lipschitz control techniques for training stability or we notice activation explosion as described in Figure 4, and we train with constantly sampled CFG, i.e. models with w = 2
7

NFE (↓) FID (↓) # Params. Diffusion/Flow
ADM (Dhariwal & Nichol, 2021) 250×2 10.96 554M LDM-4-G (Rombach et al., 2022) 250×2 3.60 400M DiT-XL/2 (Peebles & Xie, 2023) (w = 1.25) 250×2 3.22 675M DiT-XL/2 (Peebles & Xie, 2023) (w = 1.5) 250×2 2.27 675M SiT-XL/2 (Ma et al., 2024) (w = 1.5) 250×2 2.15 675M One/Few-Step from Scratch
iCT-XL/2 (Song & Dhariwal, 2023) 1 34.24 675M 2 20.3 675M Shortcut-XL/2 (Frans et al., 2024) 1 10.60 675M IMM-XL/2 (Zhou et al., 2025) 1 × 2 8.05 675M 2 × 2 3.99 675M 2 × 4 2.51 675M MeanFlow-XL/2 (Geng et al., 2025) 1 3.43 676M 2 2.93 676M TVM-XL/2 (Ours) (w = 2) 1 3.29 678M 2 2.80 678M TVM-XL/2 (Ours) (w = 1.75) 1 4.58 678M 2 2.61 678M 4 1.99 678M
Table 1: FID results on ImageNet-256×256.
NFE (↓) FID (↓) # Params. Diffusion/Flow
ADM-G (Dhariwal & Nichol, 2021) 250×2 7.72 559M SimDiff (Hoogeboom et al., 2023) 512×2 3.02 2B VDM++ (Kingma & Gao, 2024) 512×2 2.65 2B U-ViT-H/4 (Bao et al., 2023) 250×2 4.05 501M EDM2-L (Karras et al., 2024) 63×2 1.88 778M EDM2-XL (Karras et al., 2024) 63×2 1.85 1.1B DiT-XL/2 (Peebles & Xie, 2023) (w = 1.25) 250×2 4.64 675M DiT-XL/2 (Peebles & Xie, 2023) (w = 1.5) 250×2 3.04 675M SiT-XL/2 (Ma et al., 2024) (w = 1.5) 250×2 2.62 675M One/Few-Step from Scratch
sCT-L (Lu & Song, 2024) 1 5.15 778M 2 4.65 778M sCT-XL (Lu & Song, 2024) 1 4.33 1.1B 2 3.73 1.1B MeanFlow-XL/2 (Geng et al., 2025) 1 5.24 676M 2 3.17 676M TVM-XL/2 (Ours) (w = 2.50) 1 4.32 678M 2 3.50 678M TVM-XL/2 (Ours) (w = 2.25) 1 5.37 678M 2 3.89 678M 4 2.94 678M
Table 2: FID results on ImageNet-512×512.
0k 5k 10k 15k 20k 25k 30k
Training Steps
0.0
0.2
0.4
0.6
0.8
1.0
Grad Norm
1e1
MeanFlow TVM
0k 5k 10k 15k 20k 25k 30k
Training Steps
0.0
0.5
1.0
1.5
2.0
ut Norm
1e3
MeanFlow TVM
50k 100k 150k 200k 250k 300k 350k 400k
Training Steps
5
10
15
20
TVM FID
rand. w=1.5 rand. w=2 rand. w=2.5 rand. w=3 const. w=2
Figure 7: (Left) MeanFlow is subject to wide variation in gradient norm if CFG scales (i.e., κ and ω) are randomly sampled under na ̈ıve settings (see Appendix F.2 for details). TVM shows much smoother gradient norm. (Middle) MeanFlow’s gradient norm is strongly correlated with the fluctuation of ∥u(xt, t)∥. TVM’s ∥u(xt, t)∥ is much more stable under the same CFG setting. (Right) Our method converges with random CFG at training time, although tradeoff exists between different CFG in FID. Constantl-
y sampled CFG works best.
and w = 1.75 are two different models trained from scratch. We describe additional training details in Appendix F. Our method achieves state-of-the-art 1-NFE FID among methods trained from scratch, outperforming MeanFlow and IMM. With CFG w = 2, TVM can achieve noticeable improvements over MeanFlow, e,g, 3.29 FID vs. 3.43 FID for 1-NFE and similarly for 2-NFE. With 4 NFEs, w = 1.75 also exceeds 500-NFE diffusion baselines. We additionally show qualitative 1-NFE samples on the right of Figure 6.
ImageNet-512×512. We train with the same settings as in 256×256-resolution and we show the FID scores in Table 2. We rerun MeanFlow using the same settings as in ImageNet-256×256 as our baseline in addition to sCT (Lu & Song, 2024) under similar model sizes. TVM again outperforms sCT and MeanFlow in 1-NFE and 2-NFE regime. Notably, TVM-XL/2 outperforms sCT-XL with 1.1B parameters, highlighting TVM’s more optimal use of model capacity in fitting the image distribution. Moreover, with w = 2.25, TVM -
with 4-NFE can match 500-NFE DiT-XL/2 baseline in performance, further demonstrating the scalability of our algorithm to higher resolution.
Intriguingly, for both datasets, TVM trained with higher CFG performs better on 1 NFE while worse on 2 NFEs. We believe this implies a fundamental trade-off between different NFE quality and that the network is limited in capacity in fitting all NFEs well. We leave more detailed studies on this trade-off and any design improvements to future work.
7.2 DISCUSSION ON TRAINING ADVANTAGES
Single sample objective. Unlike IMM (Zhou et al., 2025) which uses more than 4 samples to calculate its loss, we use a single sample to for loss calculation without losing a distribution-matching interpretation. This also allows the objective to be scaled to large models and high-dimensional datasets where batch size on each GPU is constrained to be 1.
Training with random CFG. Our construction allows us to randomly sample CFG scale during training without collapse. We attribute this stability to our JVP being only calculated w.r.t. s which is invariant to starting position xt and time t. In contrast, CT (Song et al., 2023; Lu & Song, 2024) and MeanFlow (Geng et al., 2025) require velocity u(xt, t) to be used in the JVP calculation. In
8

trunc (μt, σt), (μs, σs) FID (−0.4, 1.0), (−0.4, 1.0) 4.59 (2.0, 1.0), (−0.4, 1.0) 4.00 (2.0, 2.0), (−0.4, 1.0) 4.01 (2.0, 2.0), (−0.6, 1.0) 7.88 (1.0, 1.0), (−0.4, 1.0) 3.70
clamp (μt, σt), (μs, σs) FID (2.0, 2.0), (−0.4, 1.0) 3.88 (2.0, 1.0), (−0.4, 1.0) 4.11 (2.0, 1.0), (−0.6, 1.0) 4.00 (1.0, 1.0), (−0.4, 1.0) 3.66 (1.0, 2.0), (−0.4, 1.0) 3.83
gap (μg, σg), (μs, σs) FID (−0.4, 1.0), (−0.4, 1.0) 5.12 (−0.8, 1.0), (−0.4, 1.0) 3.72 (−0.8, 1.4), (−0.4, 1.0) 3.95 (−1.0, 1.2), (−0.4, 1.0) 3.82 (−1.0, 1.4), (−0.4, 1.0) 3.94
Table 3: Ablation studies on different time sampling schemes, evaluated by 1-NFE FID.
100k 150k 200k 250k 300k
Training Steps
3.50
3.75
4.00
4.25
4.50
4.75
FID
trunc clamp gap
Figure 8: FID trend on the sampling schemes.
p(w) 1-NFE
rand., w = 1.5 9.37
rand., w = 2 5.14
const., w = 1.5 6.66
const., w = 2 4.81
(a) Random vs. constant CFG sampling evaluated at example w’s.
EMA rate γ 1-NFE
γ = 0 10.24
γ = 0.9 5.08
γ = 0.99 4.90
γ = 0.999 6.04
(b) EMA of pseudotarget θ∗
sg .
Scaled Param. 1-NFE 2-NFE
yes, w = 2 3.72 3.35
no, w = 2 3.82 3.27
yes, w = 1.5 6.04 4.60
no, w = 1.5 9.32 7.02
(c) With vs. without scaled parameterization.
% t=s 1-NFE 2-NFE
0 3.72 3.35
10% 3.91 3.18
20% 3.88 2.97
30% 3.97 3.07
(d) Prob. for t = s during training.
Table 4: FID ablation on various sampling/parameterization decisions.
the case of random CFG, this velocity can vary widely in magnitude which, if propagated through JVP, can cause wide fluctuation in gradient norm (see left two in Figure 7) and causes training instability. Our method, in comparison, enjoys much smoother gradient norm and u(xt, t) norm, and successfully converges even in the presence of random CFG. We note that random sampling of CFG is not optimal as some CFG scales experience degradation in FID during training, and constant CFG performs better in -
comparison. We postulate that the under-performance of random CFG is due to limited capacity of the network and the 1/w2 factor that downweights high CFG. This phenoemenon is similarly observed in CFG-conditioned FM training (see Appendix F.3) and we leave any improved design to future work.
No schedules and loss modification. We do not rely on training curriculum such as warmup schedules in sCT. For each CFG scale, we use the default CFG velocity for all t, s, while MeanFlow relies on additional hyperparameters to turn on CFG only when t is within a predetermined range. We also strictly adhere to the simple L2 loss without any adaptive weighting as proposed by MeanFlow. We believe the simplicity in our design allows for more scalability.
7.3 ABLATION STUDIES
We ablate various implementation decisions and discuss insights from different parameter choices. Results are presented with XL/2 architecture trained for 200K steps with batch size 1024.
Time sampling. Similar to Flow Matching, different time sampling schemes can greatly affect performance. We explore 3 different kinds of sampling schemes.
• Truncated sampling (trunc). Let (μt, σt), (μs, σs) denote t being sampled from logitnormal distribution with mean and standard deviation (μt, σt) and s beinsg sampled from truncated logit-normal distribution with parameters (μs, σs) such that s ≤ t.
• Clamped independent sampling (clamp). Let (μt, σt), (μs, σs) denote t and s being independently sampled from logit-normal distributions with mean and standard deviation (μt, σt) and (μs, σs), and set s = t if s > t. • Truncated gap sampling (gap). Let (μg, σg), (μs, σs) denote the gap g = t−s being sampled from logit-normal distribution with mean and standard deviation (μg, σg), and s sampled from logit-normal with parameters (μs, σs) truncated at 1 − g. Then set t = s + g.
In Table 3 we show comparison within each sampling scheme and conclude that better results are obtained when t is biased towards 1 and s biased towards 0 for the model to learn taking longer strides. However, biasing too much, e.g. μt = 2.0, σt = 2.0, leads to worse results. For gap, sampling t − s with lower mean is preferrable to higher mean. In Figure 8, we also observe trunc’s performance degrades and clamp plateaus faster than gap. Therefore gap wins over longer training horizons.
9

FID
gap (−0.8, 1.0), (−0.4, 1.0) 3.44
gap* (−0.8, 1.0), (−0.4, 1.0) 3.36
Figure 9: Sampler comparisons.
All above sampling schemes follow the na ̈ıve joint sampling of (s, t). We lastly explore separate time distribution for the FM loss term (see Section 4). We follow gap-sampler and denote the sampler gap* with parameters (μg, σg), (μs, σs) where (s, t) is jointly sampled for the first loss term and (μs, σs) is used to construct a new logit-normal distribution to independently sample s′ for the FM loss. We find in Figure 9 that gap* generally performs better in 1-NFE FID.
CFG sampling. As described in the previous section, due to limited capacity of the model, we observe tradeoff in performance when CFG is randomly sampled during training. This is reflected in Table 4a. We note that constant CFG always outperforms random CFG, and for constant CFG sampling we find w = 2 converging faster than the default w = 1.5 for Flow Matching.
EMA target rate γ. The target EMA weight θ∗ plays a significant role in accelerating convergence of the model. Shown in Table 4b, non-EMA target, i.e. γ = 0, noticeably lags behind γ > 0 alternatives. However, too large of a γ, e.g. 0.9999, also causes instability because of the overly slow target update. A sweet spot exists around γ = 0.99 which we use as default. Besides attribute its success to variance reduction because EMA’s slower weight update implies much lower optimization noise. In addit-
ion, EMA is commonly used to evaluate diffusion models for its quality boost (Song et al., 2020), so being the optimization target also provides better learning signal to the model.
Scaled parameterization. In Table 4c, we find scaled parameterization is generally beneficial, but its benefit may vary depending on training/data settings. We therefore suggest testing different choices for different settings for best performance.
Probability for t = s. Inspired by MeanFlow (Geng et al., 2025), we investigate whether setting t = s (when it reduces to pure FM training) is helpful for overall performance. We find that > 0% actually degrades 1-NFE performance while it marginally improves 2-NFE performance. This tradoff persists throughout the training but we observe diminishing return as training goes on. Therefore, we do not find this practice helpful in general and leave it out of our design space in general.
7.4 MEMORY AND RUNTIME ANALYSIS
Runtime (s) Memory (GB)
MeanFlow (w/ na ̈ıve SDPA) - OOM
MeanFlow (w/ our kernel) 0.81 46.73
TVM (w/ improved DiT) 0.95 71.44
TVM (w/ na ̈ıve DiT) 0.86 59.53
TVM (w/ improved DiT, detach JVP) 0.69 55.71
Figure 10: Per-step time and per-GPU memory study.
We analyze per-step runtime and per-GPU memory consumption (averaged over 10 training steps without counting EMA update cost) without any performance optimization (e.g. torch.compile). Shown on the right is a comparison with MeanFlow using 256 batch size on 8-GPU H100 cluster on ImageNet-256×256. Since JVP with Flash Attention is not officially supported by PyTorch, the simplest way to implement MeanFlow is to use na ̈ıve SDPA, which runs out of memory. MeanFlow with our kernel does not run OOM. T-
VM with Lipschitz control (Section 4) experiences higher runtime and memory mostly due to architectural change, since TVM with na ̈ıve DiT is only marginally more expensive than MeanFlow with na ̈ıve DiT. We note that much of the additional compute can be compiled away via PyTorch. Additionally, if step time is a concern, we can simply detach the JVP which biases learning gradient but dramatically reduces runtime. We leave further efficiency optimization to future work.
8 CONCLUSION
We present Terminal Velocity Matching, a framework for training one/few-step generative model from scratch. Different from prior works, we match the terminal velocity of a flow trajectory instead of the initial velocity, and we show our objective can explicitly upper bound 2-Wasserstein distance up to a constant. Our proposed objective is conceptually simple and easy to implement, and our theory sheds light on flaws of current diffusion transformers for their lack of Lipschitz continuity. TVM achi-
eves state-of-the-art one-step result for a model trained from scratch and surpasses baseline diffusion models with only 4 NFEs. We hope it can provide new insights into making scalable and performant one/few-step generative paradigms to come.
10

REFERENCES
Michael S Albergo, Nicholas M Boffi, and Eric Vanden-Eijnden. Stochastic interpolants: A unifying framework for flows and diffusions. arXiv preprint arXiv:2303.08797, 2023.
Jimmy Lei Ba, Jamie Ryan Kiros, and Geoffrey E Hinton. Layer normalization. arXiv preprint arXiv:1607.06450, 2016.
Fan Bao, Shen Nie, Kaiwen Xue, Yue Cao, Chongxuan Li, Hang Su, and Jun Zhu. All are worth words: A vit backbone for diffusion models. In Proceedings of the IEEE/CVF conference on computer vision and pattern recognition, pp. 22669–22679, 2023.
Nicholas M Boffi, Michael S Albergo, and Eric Vanden-Eijnden. Flow map matching. arXiv preprint arXiv:2406.07507, 2, 2024.
Nicholas M Boffi, Michael S Albergo, and Eric Vanden-Eijnden. How to build a consistency model: Learning flow maps via self-distillation. arXiv preprint arXiv:2505.18825, 2025.
Vale ́rie Castin, Pierre Ablin, and Gabriel Peyre ́. How smooth is attention? arXiv preprint arXiv:2312.14820, 2023.
Huayu Chen, Kai Jiang, Kaiwen Zheng, Jianfei Chen, Hang Su, and Jun Zhu. Visual generation without guidance. arXiv preprint arXiv:2501.15420, 2025.
Salvatore Cuomo, Vincenzo Schiano Di Cola, Fabio Giampaolo, Gianluigi Rozza, Maziar Raissi, and Francesco Piccialli. Scientific machine learning through physics–informed neural networks: Where we are and what’s next. Journal of Scientific Computing, 92(3):88, 2022.
Tri Dao, Dan Fu, Stefano Ermon, Atri Rudra, and Christopher Re ́. Flashattention: Fast and memoryefficient exact attention with io-awareness. Advances in neural information processing systems, 35:16344–16359, 2022.
Prafulla Dhariwal and Alexander Nichol. Diffusion models beat gans on image synthesis. Advances in neural information processing systems, 34:8780–8794, 2021.
Patrick Esser, Sumith Kulal, Andreas Blattmann, Rahim Entezari, Jonas Mu ̈ller, Harry Saini, Yam Levi, Dominik Lorenz, Axel Sauer, Frederic Boesel, et al. Scaling rectified flow transformers for high-resolution image synthesis. In Forty-first International Conference on Machine Learning, 2024.
Kevin Frans, Danijar Hafner, Sergey Levine, and Pieter Abbeel. One step diffusion via shortcut models. arXiv preprint arXiv:2410.12557, 2024.
Zhengyang Geng, Mingyang Deng, Xingjian Bai, J Zico Kolter, and Kaiming He. Mean flows for one-step generative modeling. arXiv preprint arXiv:2505.13447, 2025.
Martin Heusel, Hubert Ramsauer, Thomas Unterthiner, Bernhard Nessler, and Sepp Hochreiter. Gans trained by a two time-scale update rule converge to a local nash equilibrium. Advances in neural information processing systems, 30, 2017.
Jonathan Ho and Tim Salimans. Classifier-free diffusion guidance. arXiv preprint arXiv:2207.12598, 2022.
Jonathan Ho, Ajay Jain, and Pieter Abbeel. Denoising diffusion probabilistic models. Advances in neural information processing systems, 33:6840–6851, 2020.
Emiel Hoogeboom, Jonathan Heek, and Tim Salimans. simple diffusion: End-to-end diffusion for high resolution images. In International Conference on Machine Learning, pp. 13213–13232. PMLR, 2023.
Tero Karras, Miika Aittala, Jaakko Lehtinen, Janne Hellsten, Timo Aila, and Samuli Laine. Analyzing and improving the training dynamics of diffusion models. In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pp. 24174–24184, 2024.
11

Dongjun Kim, Chieh-Hsin Lai, Wei-Hsiang Liao, Naoki Murata, Yuhta Takida, Toshimitsu Uesaka, Yutong He, Yuki Mitsufuji, and Stefano Ermon. Consistency trajectory models: Learning probability flow ode trajectory of diffusion. arXiv preprint arXiv:2310.02279, 2023.
Hyunjik Kim, George Papamakarios, and Andriy Mnih. The lipschitz constant of self-attention. In International Conference on Machine Learning, pp. 5562–5571. PMLR, 2021.
Diederik Kingma and Ruiqi Gao. Understanding diffusion objectives as the elbo with simple data augmentation. Advances in Neural Information Processing Systems, 36, 2024.
Lingxiao Li, Samuel Hurault, and Justin M Solomon. Self-consistent velocity matching of probability flows. Advances in Neural Information Processing Systems, 36:57038–57057, 2023.
Yaron Lipman, Ricky TQ Chen, Heli Ben-Hamu, Maximilian Nickel, and Matt Le. Flow matching for generative modeling. arXiv preprint arXiv:2210.02747, 2022.
Wenze Liu and Xiangyu Yue. Learning to integrate diffusion odes by averaging the derivatives. arXiv preprint arXiv:2505.14502, 2025.
Xingchao Liu, Chengyue Gong, and Qiang Liu. Flow straight and fast: Learning to generate and transfer data with rectified flow. arXiv preprint arXiv:2209.03003, 2022.
Cheng Lu and Yang Song. Simplifying, stabilizing and scaling continuous-time consistency models. arXiv preprint arXiv:2410.11081, 2024.
Nanye Ma, Mark Goldstein, Michael S Albergo, Nicholas M Boffi, Eric Vanden-Eijnden, and Saining Xie. Sit: Exploring flow and diffusion-based generative models with scalable interpolant transformers. arXiv preprint arXiv:2401.08740, 2024.
Maxim Milakov and Natalia Gimelshein. Online normalizer calculation for softmax. CoRR, abs/1805.02867, 2018. URL http://arxiv.org/abs/1805.02867.
OpenAI. Video generation models as world simulators. https://openai.com/sora/, 2024.
William Peebles and Saining Xie. Scalable diffusion models with transformers. In Proceedings of the IEEE/CVF International Conference on Computer Vision, pp. 4195–4205, 2023.
Dustin Podell, Zion English, Kyle Lacey, Andreas Blattmann, Tim Dockhorn, Jonas Mu ̈ller, Joe Penna, and Robin Rombach. Sdxl: Improving latent diffusion models for high-resolution image synthesis. arXiv preprint arXiv:2307.01952, 2023.
Xianbiao Qi, Jianan Wang, Yihao Chen, Yukai Shi, and Lei Zhang. Lipsformer: Introducing lipschitz continuity to vision transformers. arXiv preprint arXiv:2304.09856, 2023.
Maziar Raissi, Paris Perdikaris, and George E Karniadakis. Physics-informed neural networks: A deep learning framework for solving forward and inverse problems involving nonlinear partial differential equations. Journal of Computational physics, 378:686–707, 2019.
Robin Rombach, Andreas Blattmann, Dominik Lorenz, Patrick Esser, and Bjo ̈rn Ommer. Highresolution image synthesis with latent diffusion models. In Proceedings of the IEEE/CVF conference on computer vision and pattern recognition, pp. 10684–10695, 2022.
Amirmojtaba Sabour, Sanja Fidler, and Karsten Kreis. Align your flow: Scaling continuous-time flow map distillation. arXiv preprint arXiv:2506.14603, 2025.
Jascha Sohl-Dickstein, Eric Weiss, Niru Maheswaranathan, and Surya Ganguli. Deep unsupervised learning using nonequilibrium thermodynamics. In International conference on machine learning, pp. 2256–2265. PMLR, 2015.
Yang Song and Prafulla Dhariwal. Improved techniques for training consistency models. arXiv preprint arXiv:2310.14189, 2023.
Yang Song, Jascha Sohl-Dickstein, Diederik P Kingma, Abhishek Kumar, Stefano Ermon, and Ben Poole. Score-based generative modeling through stochastic differential equations. arXiv preprint arXiv:2011.13456, 2020.
12

Yang Song, Prafulla Dhariwal, Mark Chen, and Ilya Sutskever. Consistency models. arXiv preprint arXiv:2303.01469, 2023.
Joshua Tian Jin Tee, Kang Zhang, Hee Suk Yoon, Dhananjaya Nagaraja Gowda, Chanwoo Kim, and Chang D Yoo. Physics informed distillation for diffusion models. arXiv preprint arXiv:2411.08378, 2024.
Hugo Touvron, Thibaut Lavril, Gautier Izacard, Xavier Martinet, Marie-Anne Lachaux, Timothe ́e Lacroix, Baptiste Rozie`re, Naman Goyal, Eric Hambro, Faisal Azhar, et al. Llama: Open and efficient foundation language models. arXiv preprint arXiv:2302.13971, 2023.
Pascal Vincent. A connection between score matching and denoising autoencoders. Neural computation, 23(7):1661–1674, 2011.
Team Wan, Ang Wang, Baole Ai, Bin Wen, Chaojie Mao, Chen-Wei Xie, Di Chen, Feiwu Yu, Haiming Zhao, Jianxiao Yang, et al. Wan: Open and advanced large-scale video generative models. arXiv preprint arXiv:2503.20314, 2025.
Linqi Zhou, Stefano Ermon, and Jiaming Song. Inductive moment matching. In Forty-second International Conference on Machine Learning, 2025.
13

A THEOREMS AND DERIVATIONS
A.1 GENERAL NETWORK PARAMETERIZATION
In general, we can parameterize our net displacement as
fθ(xt, t, s) = γ(t, s)Fθ(xt, t, s) (20)
for some γ(t, s) that satisfies γ(t, t) = 0 for boundary condition. And for the velocity condition, we let
uθ(xt, t) := d
ds fθ(xt, t, s)
s=t
= γ ̄(t)Fθ(xt, t, t) (21)
where γ ̄(t) = ∂sγ(t, s)|s=t.
We derive d
ds fθ(xt, t, s)|s=t below for clarity.
d
ds fθ(xt, t, s)
s=t
= ∂sγ(t, s)Fθ(xt, t, s) + γ(t, s)∂sFθ(xt, t, s)
s=t
(22)
= ∂sγ(t, s)|s=tFθ(xt, t, t) + γ(t, t)
h
∂sFθ(xt, t, s)
s=t
i
(23)
= ∂sγ(t, s)|s=tFθ(xt, t, t) (24)
= γ ̄(t)Fθ(xt, t, t) (25)
A.2 TERMINAL VELOCITY ERROR UPPER BOUNDS DISPLACEMENT ERROR
Lemma 1. Under mild regularity assumptions, the following inequality holds,
Lt
displ(θ) ≤
Zt
0
Ext
"
d
ds fθ(xt, t, s) − u(ψ(xt, t, s), s)
2
2
#
ds (26)
where pt(xt) is marginal distributions for initial points xt.
Proof. We assume both displacement maps are Riemann-integrable, then
Lt
displ(θ) = Ext∼pt(xt)
"
fθ(xt, t, 0) −
Z0
t
u(xs, s)ds
2
2
#
(27)
= Ext∼pt(xt)
"
Zt
0
d
ds fθ(xt, t, s)ds −
Zt
0
u(ψ(xt, t, s), s)ds
2
2
#
(28)
(∗)
≤
Zt
0
Ext ∼pt (xt )
"
d
ds fθ(xt, t, s) − u(ψ(xt, t, s), s)
2
2
#
ds (29)
where (∗) uses triangle inequality and regularity assumption.
A.3 TERMINAL VELOCITY ERROR REDUCES TO FM
Consider the terminal velocity error for each time s as
Ext
"
d
ds fθ(xt, t, s) − u(ψ(xt, t, s), s)
2
2
#
(30)
Expand the inner term
d
ds fθ(xt, t, s) = Fθ(xt, t, s) + (s − t)∂sFθ(xt, t, s) (31)
14

and for the inner norm term its limit exists as t → s:
tli→ms
d
ds fθ(xt, t, s) − u(ψ(xt, t, s), s) (32)
= tli→ms [Fθ(xt, t, s) + (s − t)∂sFθ(xt, t, s) − u(ψ(xt, t, s), s)] (33)
= Fθ(xs, s, s) − u(xs, s) (34)
Thus, the limit of its expected L2-norm exists (assuming this norm is bounded) and is equal to L2-norm of its limit, which is
Exs
h
∥Fθ(xs, s, s) − u(xs, s)∥2
2
i
(35)
and this is the original FM loss, which is equivalent (up to a constant) to conditional Flow Matching loss used in practice in Eq. (1).
A.4 MAIN THEOREM
Theorem 1 (Connection to the 2-Wasserstein distance). Given t ∈ [0, 1], let ftθ→0#pt(xt) be the distribution pushforward from pt(xt) via fθ(xt, t, 0), and assume uθ(·, s) is Lipschitz-continuous for all s ∈ [0, t] with Lipschitz constants L(s), with additional mild regularity conditions,
W2
2 (f θ
t→0#pt, p0) ≤
Zt
0
λ[L](s)Lt,s
TVM(θ)ds + C, (10)
where W2(·, ·) is 2-Wasserstein distance, λ[·] is a functional of L(·), and C is a non-optimizable constant.
Proof. Note that the ground-truth flow map ψ is invertible and that ψ(ψ(xt, t, 0), 0, t) = xt and ψ(ψ(x0, 0, t), t, 0) = x0.
W2
2 (f θ
t→0#pt, p0)
(i)
≤
Z
p0(x0)∥fθ(ψ(x0, 0, t), t, 0) − x0∥2
2dx0 (36)
=
Z
p0(x0)∥xt + fθ(ψ(x0, 0, t), t, 0) − ψ(ψ(x0, 0, t), t, 0)∥2
2dx0 (37)
=
Z
pt(xt)∥xt + fθ(xt, t, 0) − ψ(xt, t, 0)∥2
2dxt (38)
=
Z
pt(xt)
Z0
t
d
ds fθ(xt, t, s)ds −
Z0
t
u(xs, s)ds
2
2
dxt (39)
(ii)
≤
Z
pt(xt)
Zt
0
d
ds fθ(xt, t, s) − u(ψ(xt, t, s), s)
2
2
| {z }
ε(xt ,t,s)
dsdxt (40)
where (i) is due to Wasserstein distance being the infimum of all couplings, and we choose a particular coupling of the two distribution by inverting x0 with ψ and remapping with respective flow maps. And (ii) is due to Lemma 1. Now, we inspect ε(xt, t, s) specifically by noticing that ε(xt, t, s)
=∥ d
ds fθ(xt, t, s) − u(ψ(xt, t, s), s) + uθ(ψ(xt, t, s), s) − uθ(ψ(xt, t, s), s)
+ uθ(fθ(xt, t, s), s) − uθ(fθ(xt, t, s), s)∥2 (41)
(i)
≤d
ds fθ(xt, t, s) − uθ(fθ(xt, t, s), s)
2
2
+ ∥uθ(ψ(xt, t, s), s) − u(ψ(xt, t, s), s)∥2
2
| {z }
δ (xt ,t,s)
+ ∥uθ(fθ(xt, t, s), s) − uθ(ψ(xt, t, s), s)∥2
2 (42)
(ii)
≤ δ(xt, t, s) + L(s)
Zt
s
d
ds fθ(xt, t, u) − u(ψ(xt, t, u), u)
2
2
| {z }
ε(xt ,t,u)
du (43)
15

where (i) is due to triangle inequality and (ii) is due to Lipschitz-continuous assumption. We further notice that right-hand-side contains a term that is the integral of the left-hand-side. For simplicity, we hold xt and t constant and let
y(s) =
Zt
s
ε(xt, t, u)du , y ̇(s) = −ε(xt, t, s)
and we arrive at the following inequality,
−y ̇(s) ≤ δ(xt, t, s) + L(s)y(s) (44)
−δ(xt, t, s) ≤ y ̇(s) + L(s)y(s) (45)
−e
Rr
t L(u)duδ(xt, t, r) ≤ d
dr e
Rr
t L(u)duy(r) (46)
−
Zt
s
e
Rr
t L(u)duδ(xt, t, r)dr ≤
h
e
Rr
t L(u)duy(r)
it
s
(47)
−
Zt
s
e
Rr
t L(u)duδ(xt, t, r)dr ≤ >
0 y(t) − e
Rs
t L(u)duy(s) (48)
e
Rs
t L(u)duy(s) ≤
Zt
s
e
Rr
t L(u)duδ(xt, t, r)dr (49)
y(s) ≤
Zt
s
e
Rr
t L(u)du−R s
t L(u)duδ(xt, t, r)dr (50)
y(s) ≤
Zt
s
e
Rr
s L(u)duδ(xt, t, r)dr (51)
Therefore, setting s = 0 we have
Zt
0
ε(xt, t, u)du ≤
Zt
0
e
Rr
0 L(u)du
| {z }
λ[L](r)
δ(xt, t, u)du (52)
where the left-hand side is the inner term of Eq. (40). Then,
Eq. (40) ≤
Z
pt(xt)
Zt
0
λ[L](s) · δ(xt, t, s)dsdxt (53)
=
Zt
0
λ[L](s) · Ext
h
∥fθ(xt, t, s) − uθ(fθ(xt, t, s), s)∥2
2
+ ∥uθ(ψ(xt, t, s), s) − u(ψ(xt, t, s), s)∥2
2
i
ds (54)
=
Zt
0
λ[L](s) ·
"
Ext
h
∥fθ(xt, t, s) − uθ(fθ(xt, t, s), s)∥2
2
+ Ext
h
∥uθ(ψ(xt, t, s), s) − u(ψ(xt, t, s), s)∥2
2
i
#
ds (55)
=
Zt
0
λ[L](s) ·
"
Ext
h
∥fθ(xt, t, s) − uθ(fθ(xt, t, s), s)∥2
2
+ Exs
h
∥uθ(xs, s) − u(xs, s)∥2
2
i
| {z }
(a)
#
ds (56)
where (a) can be rewritten as
(a) = Exs,vs
h
∥uθ(xs, s) − vs∥2
2
i
+ C ̃ (57)
where C ̃ is some non-optimizable constant (Lipman et al., 2022). This is also a classical result connecting score matching and denoising score matching (Vincent, 2011).
16

Now, after substitution, we notice that our bound in Eq. (56) becomes
Zt
0
λ[L](s)Lt,s
TVM(θ)ds + C (58)
where C is some other constant, which completes the proof.
A.5 REDUCTION TO FLOW MATCHING
When t = s, we show that LTVM(θ) reduces to Flow Matching loss.
Lt,t
TVM(θ) = Ext,xs,vs
"
d
ds fθ(xt, t, s) − uθ(fθ(xt, t, s), s)
2
2
+ uθ(xs, s) − vs
2
#
s=t
(59)
= Ext,vt (((((((((((
∥uθ(xt, t) − uθ(xt, t)∥2
2 + uθ(xt, t) − vt
2
(60)
A.6 DERIVATION FOR CLASS-CONDITIONAL TRAINING TARGET
In Eq. (14), we introduced the CFG training target as
wvt + (1 − w)u1
θs∗g (xs, s, ∅)
We derive below that the minimizer of Eq. (14) is the CFG velocity wu(xs, s, c) + (1 − w)u(xs, s).
Proof. Consider the training objective (without weighting for simplicity)
Exs,vs,s,c,w uw
θ (xs, s, c) −
h
wvt + (1 − w)u1
θsg (xs, s, ∅))
i2
2
(61)
when c = ∅, w = 1, then it reduces to
Exs ,vs ,s
h
u1
θ(xs, s, ∅) − vt
2 2
i
(62)
with the minimizer θmin satisfying u1
θmin (xs, s, ∅) = u(xs, s).
At minimum of the loss for other w and c, it must satisfy
uw
θmin (xs, s, c) = Evs wvs + (1 − w)u1
θmin (xs, s, ∅) | xs, s, c, w (63)
= wEvs [vs | xs, s, c] + (1 − w)u1
θmin (xs, s, ∅) (64)
= wu(xs, s, c) + (1 − w)u(xs, s) (65)
B ADDITIONAL DETAILS ON PRACTICAL CHALLENGES
B.1 LIPSCHITZNESS OF RMSNORM
Recall the definition of RMSNorm, for input x ∈ Rd and a small constant ε > 0
RMSNorm(x) = x
RMS(x) , where RMS(x) =
v u u t
1 d
d
X
i=1
xi + ε (66)
And its Jacobian can be calculated as d dxj
RMSNorm(xi) = d
dxj
xi
RMS(x) (67)
= δijRMS(x) − xixj/RMS(x)/d
RMS(x)2 (68)
= δij
RMS(x) − xixj
d · RMS(x)3 (69)
17

def get f and dfds (net, xt, t, s, c, w): def model wrapper ( x , t , s ): # we use t−s for second time condition return net(x , t , (t − s ), c, w) F, dFds = torch.func.jvp(model wrapper , (xt, t, s), (0, 0, 1)) f ts = xt + (s − t) * F dfds = (F + (s − t) * dFds) return f ts , dfds
Figure 11: PyTorch-style JVP code.
Since matrix norm (largest singular value) σ(A) of matrix A is upper bounded by its Frobenius norm, and RMS(x) ≥ ε, we have each element d
dxj RMSNorm(xi) in the Jacobian matrix bounded via
d dxj
RMSNorm(xi)
2
≤ δij
RMS(x)
2
+ xixj
d · RMS(x)3
2
(70)
= δij
RMS(x)
2
+ xi/√d
RMS(x)
!2
· xj/√d
RMS(x)
!2
·1
RMS(x)
2
(71)
≤1
ε+1
ε (72)
=2
ε (73)
Therefore, the Frobenius norm is bounded and hence the matrix norm.
B.2 FULL DESCRIPTION OF NORMALIZATION OF MODULATION
Note that there are 6 modulation parameters in total for each DiT layer, denoted as
a1(t), b1(t), c1(t), a2(t), b2(t), c2(t) = split(AdaLN Modulation(t), 6) (74)
and we pass each of the above parameters through RMSNorm−(·) to obtain
a−
1 (t), b−
1 (t), c−
1 (t), a−
2 (t), b−
2 (t), c−
2 (t)
(which can be done in parallel) and the new normalized DiT layer is
x = x + c−
1 (t) ∗ ATTN(RMSNorm−(x) ∗ a−
1 (t) + b−
1 (t))
x = x + c−
2 (t) ∗ MLP(RMSNorm−(x) ∗ a−
2 (t) + b−
2 (t))
C FLASH ATTENTION JVP WITH BACKWARD PASS
In transformer models, scaled dot-product attention (SDPA) is often among the most, if not the most, computationally expensive operations. The cost stems not only from its high FLOP requirements O(M N ) in general, and O(N 2) in the case of self-attention – but also from the quadratic memory footprint of the query–key matrix multiplication.
Computing the Jacobian-Vector Product (JVP) of SDPA is even more demanding, typically requiring about three times the cost of the standard forward pass. Flash attention (Dao et al., 2022) fuses the matrix multiplication with an online softmax operation (Milakov & Gimelshein, 2018), thereby eliminating the need to store the intermediate QK⊤ matrix in GPU memory. Subsequent work has shown that JVP SDPA can also be implemented in a FlashAttention-style manner, where both, primal SDPA and JVP SDPA are-
 computed jointly to avoid redundant computation (Lu & Song, 2024).
Building on these ideas, we implement efficient JVP SDPA forward and backward kernels in Triton. We first take inspiration from open-source implementations without backward support3. And the
3https://github.com/Ryu1845/min-sCM/blob/main/standalone_multihead_jvp_ test.py
18

additional backward pass through the standard (“primal”) SDPA is handled independently using the open-source implementation from (Dao et al., 2022). To obtain full gradients with respect to Q, K, and V , we combine the input gradients from both backward passes.
Similar to standard SDPA, the JVP backward pass can leverage online softmax to avoid storing large intermediate matrices in GPU memory. However, the increased complexity of JVP SDPA requires additional optimizations to run efficiently on GPUs. Most notably, we found it crucial to split the backward computation into multiple smaller kernels to reduce register spills caused by the large number of intermediate tensors.
Background. Recall the attention operation as
ATTN(Q, K, V ) = V · softmax QKT
√dk
(75)
and let the query, key, and value blocks be denoted by Q ∈ RM×d, K ∈ RN×d and V ∈ RN×d. The tangent inputs are denoted as Q ̇ , K ̇ , V ̇ . We use α = √1dk as the softmax scaling factor, and li
denotes the log-sum-exponential normalization for the i-th row of the attention scores, a short form for combining the softmax stabilization factor and the normalization.
C.1 MULTI-STEP BACKWARD PASS
For best performance, we decided to split up the backward pass into multiple smaller operations with shared paths through the graph. Furthermore, the gradients dQ and dQ ̇ are computed in row-parallel order, while dK, dK ̇ , dV and dV ̇ are processed in column-parallel order. In our tests, redundant, but coalesced computation of the large parts of the backward pass greatly outperformed a single, fused kernel relying on atomic operations.
We split the operation into 6 steps: 1) preprocess shared intermediates, 2) process dK ̇ and first part of dK, 3) process dQ ̇ and first part of dQ, 4) process second part of dK, 5) process second part of dQ, 6) process dV ̇ and dV .
Step 1: Preprocess shared intermediates row-parallel. In the first step, we preprocess two intermediate sums Σ1 ∈ RM and Σ2 ∈ RM used in steps 2-5.
Σ1,i =
X
j
Pij dO ̇ V ⊤
ij
(76)
Σ2,i =
X
j
Pij dO ̇ V ̇ ⊤
ij
+ dO ̇ V ⊤
ij
Nij (77)
where
Pij = exp (αSij − li) , Sij =
dk
X
r=1
QirKjr, Nij = αS ̇ij − μi
li
(78)
amd
S ̇ij =
dk
X
r=1
Q ̇ irKjr + QirK ̇ jr , μi =
X
j
Pij αS ̇ij (79)
Step 2: process dK ̇ and dK1 column-parallel.
(dK1)j,: = α
X
i
dO ̇ V ⊤
ij
− Σ1,i Pij Q ̇ i,: (80)
(dK ̇ )j,: = α
X
i
dO ̇ V ⊤
ij
− Σ1,i Pij Qi,: (81)
19

Step 3: Process dQ ̇ and dQ1 row-parallel.
(dQ1)i,: = α
X
j
dO ̇ V ⊤
ij
− Σ1,i Pij K ̇ j,: (82)
(dQ ̇ )i,: = α
X
j
dO ̇ V ⊤
ij
− Σ1,i Pij Kj,: (83)
Step 4: Process dK column-parallel.
(dK)j,: = (dK1)j,: + α
X
i
α (−Σ1,i) S ̇ij + Σ1,i
μi
li
Pij
+ dO ̇ V ̇ ⊤
ij
+ dO ̇ V ⊤
ij
αS ̇ij − μi
li
− Σ2,i Pij Qi,
(84)
Step 5: Process dQ row-parallel.
(dQ)i,: = (dQ1)i,: + α
X
j
α (−Σ1,i) S ̇ij + Σ1,i
μi
li
Pij
+ dO ̇ V ̇ ⊤
ij
+ dO ̇ V ⊤
ij
αS ̇ij − μi
li
− Σ2,i Pij Kj,:
(85)
Step 6: Process dV and dV ̇ column-parallel.
(dV ̇ )j,: =
X
i
Pij (dO ̇ )i,: (86)
(dV )j,: =
X
j
Pij αS ̇ij − μi
li
(dO ̇ )i,: (87)
Caching softmax statistics. Like previous flash-attention implementations, we cache softmax statistics from the forward pass to speed up the backward pass, namely the log-sum-exp l, the sums l and μ for each row of the output O. Thus, the total overhead of the cache is only three values per row of Q.
C.2 EVALUATION
We built a test bench to evaluate latency and peak memory consumption of our flash JVP SDPA kernels on different input shapes using an NVIDIA H100 SXM 80GB. Due to the lack of existing alternatives, we compare against vanilla SDPA, i.e. a SDPA written as explicit math operations, which currently is the only way to train transformers in PyTorch with JVP enabled.
As our contribution focuses on the backward pass, we limit the latency and peak memory evaluation to the backward pass of a single SDPA operation, combining both paths through the primal (”normal”) and the tangent (JVP) gradients.
Results. Shown in Table 5, our implementation achieves a significant reduction in peak memory consumption. Compared to the reference, we save memory not only by reducing the cached variables between forward and backward pass, but more importantly by avoiding to store N 2 intermediate attention scores. At the same time, our implementation achieves a speedup of up to 65% compared to the reference.
20

H S Latency [ms] Peak Memory [MB]
ours vanilla ours vanilla
1 128 1.31 1.51 64.69 64.80 1 1,024 1.38 1.54 69.52 94.02 1 4,096 1.96 1.53 86.06 508.1 1 8,192 3.98 4.33 108.1 1,816 1 16,384 10.06 16.11 152.3 7,024 1 32,768 40.24 63.85 240.5 27,808 24 128 1.40 1.55 80.55 83.17 24 1,024 1.42 2.03 196.4 784.4 24 4,096 15.13 24.52 593.5 10,721 24 8,192 58.70 96.93 1,123 42,115 24 16,384 238.4 - 2,182 24 32,768 958.6 - 4,300 
Table 5: Performance comparison of our flash JVP kernels against vanilla SDPA kernels in PyTorch. H and S stand for number of heads in multi head attention and sequence length. Vanilla SDPA ran out of memory on a NVIDIA H100 in the last two tests.
Algorithm 1 TVM Training
Input: initialized model f θ, data p0(x0, c) and prior p1(x1), time distribution p(t, s), guidance distribution p(w) Initialize θ∗ ← θ, θ∗∗ ← θ // θ∗, θ∗∗ are EMA with rate λ∗, λ∗∗. while model not converged do
Sample (x0, c, x1) ∼ p0(x0, c)p1(x1) Randomly drop c with prob. 10% Sample (t, s, w) ∼ p(t, s)p(w) // optionally sample s′ ∼ p(s′) for the second loss term. xt ← (1 − t)x0 + tx1
xs ← (1 − s)x0 + sx1 // optionally set xs′ ← (1 − s′)x0 + s′x1. vs ← x1 − x0 // optionally set vs′ ← x1 − x0.
θ ← optimizer step by minimizing LˆTVM(θ) = Et,s,w
hLˆt,s,w
TVM (θ)
i
// see Eq. (15)
// optionally use s′ and xs′ for the second loss term θ∗ ← EMA update with rate λ∗ θ∗∗ ← EMA update with rate λ∗∗ end while
Output: learned model f θ∗∗
D TRAINING ALGORITHM
We present the training algorithm in Algorithm 1. We additionally show a PyTorch-style pseudocode in Figure 11 for calculating fθ(xt, t, s) and d
ds fθ(xt, t, s) together with one JVP pass.
E RELATION TO PRIOR WORKS
E.1 MEANFLOW
Let fθ(xt, t, s) = (s − t)Fθ(xt, t, s), we inspect
d
dt fθ(xt, t, s) + u(xt, t) (88)
= −Fθ(xt, t, s) + (s − t) d
dt Fθ(xt, t, s) + u(xt, t) (89)
= −Fθ(xt, t, s) + (s − t)
h
u(xt, t) · ∇xt Fθ(xt, t, s) + ∂tFθ(xt, t, s)
i
+ u(xt, t) (90)
21

ImageNet-256×256 ImageNet-512×512
Parameterization Setting
Architecture DiT-XL/2 DiT-XL/2 DiT-XL/2 DiT-XL/2 Params (M) 678 678 678 678 2nd time conditioning t − s t − s t − s t − s Hidden dim 1152 1152 1152 1152 Number of heads 18 18 18 18 Main normalization RMS Norm RMS Norm RMS Norm RMS Norm QK-Norm type RMS Norm RMS Norm RMS Norm RMS Norm Linear layer init4 Spectral Spectral Spectral Spectral Time Embed init5 Spectral N (0, 0.02) N (0, 0.02) Spectral Training iter 300K 300K 300K 300K
Training Setting
Optimizer AdamW AdamW AdamW AdamW Optimizer ε 10−8 10−8 10−8 10−8 β1 0.9 0.9 0.9 0.9 β2 0.95 0.95 0.95 0.95 Learning rate 0.0001 0.0001 0.0001 0.0001 Weight decay 0 0 0 0 Batch size 2048 2048 2048 2048 p(s, t) gap* (−0.8, 1.0), (−0.4, 1.0)
Scaled param. yes yes no yes % t = s6 0% 0% 0% 0% w 2 1.75 2.5 2.25 Target EMA rate 0.99 0.99 0.99 0.99 Eval EMA rate7 0.9999 0.9999 0.9999 0.9999 Label dropout 0.1 0.1 0.1 0.1
Table 6: Experimental settings for different architectures and datasets.
Therefore,
d
dt fθ(xt, t, s) + u(xt, t)
2
2
(91)
= − Fθ(xt, t, s) + (s − t)
h
u(xt, t) · ∇xt Fθ(xt, t, s) + ∂tFθ(xt, t, s)
i
+ u(xt, t)
| {z } Ftgt
2
(92)
which is the MeanFlow loss.
F ADDITIONAL EXPERIMENT DETAILS
We present the overall training details in Table 6
F.1 ARCHITECTURE AND OPTIMIZATION
VAE. We follow Zhou et al. (2025) for the VAE setting, which uses the standard Stable Diffusion VAE (Rombach et al., 2022) but with a different scale and shift. Please refer to the paper for details.
Architecture. All architecture decisions follow DiT (Peebles & Xie, 2023) except for the changes described in the main text. For our XL-sized model, we follow DiT-XL and use 1152 hidden size
4Except for zero-init layers in AdaLN-Zero. 5All time embedding MLP layers before input into DiT blocks. 6This means the percentage of setting t = s, e.g. 0% means both loss terms exist at all times. 7EMA used for final evaluation, separate from the EMA used for training target.
22

but use 18 heads instead of 16 heads. This is purely for efficiency reasons because 18 heads under 1152 total hidden size implies head dimension is 64, while the original 16 heads result in head dimension 72. Flash attention JVP’s runtime is sensitive to redundancy in memory allocations. As 64 is a power of 2 our kernel can fully allocate appropriately sized CUDA blocks, while 72 leaves significant chunks unused. We observe that the original 16-head decision is ×1.25 slower than the 18-head varia-
nt. In comparing FID of the two versions, we observe they perform similarly throughout training.
Following Zhou et al. (2025), we use t − s as our second time condition into the architecture rather than directly injecting s. For injecting w, we follow Chen et al. (2025) and use β = 1/w as our condition, and if random CFG is used training, we sample β ∼ U ( 1
wmax , 1
wmin ) and set w = 1/β. Note that Chen et al. (2025) uses β ∼ U (0, 1) which amounts to wmin = 1 and wmax = ∞, but arbitrarily large w is never used in practice so wmax can be set to a realistic finite value.
Optimization. Besides setting β2 = 0.95, we follow the default optimizer used by DiT and optimize with BF16 precision. We de not use any learning rate scheduler.
F.2 DETAILS ON RANDOM CFG WITH MEANFLOW
In MeanFlow (Geng et al., 2025), the authors introduce a mixing scale κ such that the field with guidance scale w is given by
v(xt, t, c, w) = wvt + κuθ(xt, t, c, w) + (1 − w − κ)uθ(xt, t, w) (93)
It specifies that the effective guidance scale is w′ = w
(1−κ) . This is because since uθ(xt, t, c, w) ≈
v(xt, t, c, w), rearranging it to LHS and dividing both sides by (1 − κ) gives
(1 − κ)v(xt, t, c, w) = wvt + (1 − w − κ)uθ(xt, t, w) (94)
v(xt, t, c, w) = w
(1 − κ) vt + (1 − w
(1 − κ) )uθ(xt, t, w) (95)
This constrains κ ∈ [0, 1). However, in the case of random CFG, to make use of uθ(xt, t, c, w), we try the simple linear mixing (the default CFG reweighting)
v(xt, t, c, w + κ) = wvt + κuθ(xt, t, c, 1) + (1 − w − κ)uθ(xt, t, 1) (96)
where w and κ are both randomly sampled with finite boundaries. In this case uθ(xt, t, c, 1) ̸≈ v(xt, t, c, w +κ) and thus κ is not constrained to be smaller than 1. When w = 0, it becomes regular CFG with network approximation of the CFG velocity, and when κ = 0 it becomes MeanFlow CFG with vt approximation of the CFG velocity. This construction subsumes both implementation cases. In our experiments, we use κ ∼ U (0, cmax), w ∼ U (1, cmax) for some constant cmax. However, we acknowledge that this-
 observed training fluctuation may depend on exact training settings and environments, and may be fixable via empirical tricks such as adjusting AdamW parameters or gradient clipping, etc. We present the training in the simplest settings without such tricks to best illustrate our point.
F.3 CFG-CONDITIONED FLOW MATCHING
50k 100k 150k 200k 250k
Training Steps
5
10
15
20
25
FID
w=1.5 w=2
Figure 12: w-conditioned FM training experiences tradeoff.
As in our method, we similarly observe tradeoff in FID if FM is trained to condition on CFG scale w with randomly sampled w during training (Chen et al., 2025). During inference time, w is injected into the network so that the CFG velocity field can be approximated by a single forward call. We inject w using positional embedding just like the diffusion time, and during training we sample β ∼ U(0, 1) and set w = 1/β, following Chen et al. (2025). We show in Figure 12 that as the model trains, the F-
ID of w = 1.5 decreases but w = 2 increases for later training steps. This tradeoff is similarly observed in our method as presented in the main text.
23

F.4 ADDITIONAL VISUAL SAMPLES
Figure 13: Additional ImageNet-256×256 samples from 1-NFE TVM model.
24

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:30.501Z
- **Text Length:** 67308 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 24 of 24
