# PDF Document: Ahmed and Makin - 2025 - Solving Diffusion Inverse Problems with Restart Posterior Sampling.pdf

**File Path:** Ahmed and Makin - 2025 - Solving Diffusion Inverse Problems with Restart Posterior Sampling.pdf

**Processed Date:** 2026-02-10T18:16:43.515Z

**File Size:** 23134.53 KB

**Total Pages:** 27

**Extracted Pages:** 27

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3424

**Title:** Solving Diffusion Inverse Problems with Restart Posterior Sampling

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Solving Diffusion Inverse Problems with Restart Posterior Sampling
Bilal Ahmed Joseph G. Makin Purdue University
{ahmedb, jgmakin}@purdue.edu
Abstract
Inverse problems are fundamental to science and engineering, where the goal is to infer an underlying signal or state from incomplete or noisy measurements. Recent approaches employ diffusion models as powerful implicit priors for such problems, owing to their ability to capture complex data distributions. However, existing diffusion-based methods for inverse problems often rely on strong approximations of the posterior distribution, require computationally expensive gradient backpropagation throu-
gh the score network, or are restricted to linear measurement models. In this work, we propose Restart for Posterior Sampling (RePS), a general and efficient framework for solving both linear and non-linear inverse problems using pre-trained diffusion models. RePS builds on the idea of restart-based sampling, previously shown to improve sample quality in unconditional diffusion, and extends it to posterior inference. Our method employs a conditioned ODE applicable to any differentiable measurement-
 model and introduces a simplified restart strategy that contracts accumulated approximation errors during sampling. Unlike some of the prior approaches, RePS avoids backpropagation through the score network, substantially reducing computational cost. We demonstrate that RePS achieves faster convergence and superior reconstruction quality compared to existing diffusion-based baselines across a range of inverse problems, including both linear and non-linear settings.
1. Introduction
Inverse problems are ubiquitous in science and engineering, arising in medical imaging, computational photography, and numerous other domains where the goal is to infer an underlying state from indirect or incomplete measurements. In most scientific applications, we have access only to partial observations that are related to the true system through a forward measurement process. The challenge lies in recovering the original signal or state from these incomplete or degraded measurements.
Examples of such settings are abundant: neural spiking activity reflects underlying perceptual or motor states; the number of photons captured by an image sensor corresponds to a physical scene we seek to reconstruct; and MRI measurements encode the tissue and structural properties of the human body. Despite their wide applicability, inverse problems are often difficult to solve because the observations are typically incomplete, degraded, or corrupted by measurement noise. Consequently, the recove-
ry problem, i.e., estimating the underlying signal from the observations, is generally ill-posed and requires incorporating prior knowledge about the solution space. In the probabilistic framework, the measurement is modeled by a likelihood function, pˆ(y|x; θ), and the constraint by a prior distribution, pˆ(x; θ). Full inversion amounts to computing the posterior distribution, pˆ(x|y; θ).
For practical problems where the solution lies in a complex, high-dimensional space, specifying an explicit prior distribution is nontrivial. Historically, simple analytical priors, such as smoothness constraints (e.g., total-variation regularization or l2 penalties), were employed to regularize the solution. With the advent of data-driven methods, however, learned models have become a powerful alternative for capturing more realistic image or signal priors. For instance, in computational imaging,-
 [31] introduced the idea of replacing the proximal operator in iterative reconstruction with a learned denoiser. Following this, many groups [1, 2, 10, 11, 23, 29] have attempted to regularize inverse problems with implicit priors based on latent-variable generative models, like variational autoencoders (VAEs), generative adversarial networks (GANs), and diffusion models.
Diffusion models have achieved remarkable success as generative models for complex, high-dimensional, data distributions [8, 9, 15, 20–22, 24, 28] such as high-resolution images, audio, and protein structures, and are now being explored for discrete domains as well. Their state-of-theart sample quality, coupled with stable training dynamics, makes them highly attractive as priors for solving inverse problems. Nevertheless, there is a major obstacle to integrating diffusion priors with measurement -
models: The variables (xˆ0) that are explicitly constrained by the mea
1
arXiv:2511.20705v1 [cs.LG] 24 Nov 2025

surement model (the likelihood function) are only implicitly constrained by the diffusion model (the prior)—either in the form of samples or by way of numerical integration, both computationally expensive.
One way to circumvent this obstacle is simply to introduce a third model. For example, we might model the posterior directly by training a conditional diffusion model, e.g. as in classifier-free guidance. Alternatively, if we first train an auxiliary image classifier pˆ(y|xt; θ) on pairs of noisy images xt and their labels y, the likelihood can be incorporated into every step of the reverse-diffusion process [5]. However, although effective, training a separate model for every task is inefficient,-
 and in some cases highly impractical. Here, then, we are interested only in the “plug-and-play” framework that uses a pre-trained, unconditional diffusion model and a fixed measurement function, and can adapt them to arbitrary inverse problems (on the same dataset).
Crudely, there are two basic approaches. The first is to separate the optimization scheme from the sampling process, and apply the constraint only in xˆ0 space. For example, after a forward pass of (unconditioned) diffusion, the measurement constraint can be imposed in xˆ0 space with Langevin dynamics [36] or gradient descent [18]. This avoids backpropagation through the score network, but risks trapping the solution in a bad local mode. To address this, these approaches then add noise to the samp-
le, pushing it out of the local mode. The entire process is then repeated, with steadily decreasing noise. This approach has been shown to recover high-quality samples. Nevertheless, it is intuitively inefficient, since the reverse diffusions (e.g., via numerical integration of the ODE or SDE) are blind to the constraint.
The second basic approach is to attempt to optimize the likelihood and the prior simultaneously. Since their spaces of operation are connected through the reverse-diffusion neural network, most techniques in this category backpropagate gradients through it. For example, Graikos et al. [7] propose a variational-inference scheme, under which the optimization is carried out in xˆ0 space, but which is applied to the diffusion model by making a round trip backwards through the reverse diffusion process-
 and thence through the forward diffusion. In DPS [3], the measurement operator is “lifted” to noisy samples through the diffusion network, and again optimization requires backpropagating through it.
In this study, we propose an algorithm of the second kind (optimizing likelihood and prior simultaneously), but without backpropagating through the diffusion network. In particular, we exploit the fact that the popular DDIM sampler for diffusion models [26] can be used to express a single step of an ODE simulation—from xˆt to xˆt−1—in terms of
the posterior mode, E
hXˆ0 xˆt, y
i
. The optimal xˆ0 is the
one that lies close to the unconditional mode E
hXˆ0 xˆt
i
but also respects the measurement. Finding this optimal value (by e.g. gradient descent) does not require backpropagating through the diffusion network because it answers the conditional question, “What image xˆ0 looks most like a denoised version of the current sample xˆt, subject to the constraint?” rather than the unconditional question, “What sample is most congruent with this denoiser, subject to the constraint?”
Still, the method requires approximations. Here, then, we import some observations from a recent investigation of the quality of unconditioned diffusion sampling under various numerical-integration schemes. In particular, Xu et al. [35] showed that, when operating with a limited budget of neural function evaluations (NFEs), ODEs typically outperform SDEs, because they suffer from smaller discretization errors. On the other hand, given a large budget of NFEs, SDEs outperform ODEs, because they accu-
mulate approximation errors—e.g., from an imperfect score functionmore slowly. Crucially, however, [35] also showed how to achieve the best of both worlds, by numerically integrating an ODE (for small discretization error), but periodically “restarting” it, by adding a large amount of noise, in order to obliterate approximation error.
Here we apply this technique to DDIM-based sampler for inverse problems. The resulting algorithm, which we call “restart posterior sampling” (RePS), extends the restart sampling concept to posterior inference. The key contributions of our method are:
• Inspired by [17, 37], RePS employs an approach to condition the deterministic sampler without backpropagating through the score network. Unlike other recent, backprop-free methods shown to work for linear inverse problems [17, 37], this method can handle any differentiable measurement model, encompassing both linear and nonlinear cases. • RePS incorporates a simplified restart strategy that triggers restarts only when the sample reaches the noise-free regime. Specifically, sampling is periodical-
ly restarted from σ0 to a higher noise level σr, with σr gradually annealed from a tuned maximum value down to σmin. • RePS achieves faster convergence and better quality samples compared to existing baseline methods.
2. Background
2.1. Diffusion models
Generative diffusion models are defined in terms of a stochastic process that transforms a complicated data distribution pdata(x0) into structureless noise p(xT ). This process can be described by a stochastic differential equation (SDE), perhaps the most common of which is the “variance
2

Conditioned
ODE step
Restart step
Figure 1. Schematic conceptually demonstrating RePS. The process begins by sampling from N 0, σ(T )2I and solving the measurement-conditioned ODE (steps indicated by red arcs). Once the sample reaches the noise level corresponding to σ(0), the sampler is “restarted” by adding noise that returns it to σ(r). This procedure is repeated while annealing down the restart noise level.
exploding” version:
dxt = p2σ ̇ (t)σ(t) dwt, (1)
where σ : R≥0 → R≥0 is a predefined noise schedule and w ∈ Rd is a standard Wiener process. The noise schedule is defined such that σ(0) = 0 and σ(T ) is large enough to destroy any structure in the data. It follows from Eq. (1) that the noise-perturbed distribution at step t, p(xt|x0), takes the form N x0, σ(t)2I . The goal of the generative model is to invert the forward diffusion process; i.e., to start with a sample xˆT ∼ N 0, σ(T )2I and denoise it all the way back to xˆ0 ∼ pdata(x0). Indeed,-
 it is known that the forward diffusion process in Eq. (1) is invertible, with the marginal distribution over observations xˆ0 given [13, 28] either by the SDE
dxt = −2σ ̇ (t)σ(t)∇xt log p(xt)dt + p2σ ̇ (t)σ(t)dw ̄t, (2) with w ̄t is a reverse-time Wiener process; or by the ODE
dxt = −σ ̇ (t)σ(t)∇xt log p(xt)dt. (3)
Evidently, to generate samples, we need estimates of the “score,” i.e. ∇xt log p(xt), at all xt. This can be achieved by training a neural network sθ(x, σ) to match ∇xt log p(xt) approximately at all noise levels σ(t) [27, 32].
2.2. Inverse problems
In the setting of inverse problems, the signal of interest x0 is not directly observed; rather, we have only measurements (or observe only degraded signals), y. On the other hand, the relationship between the signal and its measurement is
taken to be known or well described by a model. The aim, then, is to “invert” this model to recover x0 from y. For additive Gaussian noise, measurement model is defined as:
y = h(x0) + n, (4)
where x0 ∈ Rn, y ∈ Rm and h(·): Rn → Rm is the measurement (or degradation) operator, which is in general nonlinear. The term n ∼ N 0, σ2nI denotes additive measurement noise. Such problems are often ill-posed: solutions may fail to exist, may not be unique, or may be unstable with respect to measurement noise. To address this, prior knowledge about the solution is imposed, typically through a Bayesian formulation. By Bayes’ rule, the posterior distribution can be written as pˆ(x0|y; θ) ∝ pˆ(x0; θ-
)pˆ(y|x0; θ). Therefore, given the prior distribution, pˆ(x; θ), and measurement model, pˆ(y|x; θ), one can (at least in theory) compute or sample from the posterior distribution, pˆ(x|y; θ), to generate solutions. In particular, we can use Eq. (2) or Eq. (3) to generate samples from the posterior, with the score of the posterior distribution,
∇xt log pˆ(xt|y; θ) = ∇xt log pˆ(xt; θ)+∇xt log pˆ(y|xt; θ), (5) in place of the unconditional score—provided we can compute it. The unconditional score ∇xt log pˆ(xt; θ) is (by hypothesis) available in the form of a diffusion model. But the quantity ∇xt log pˆ(y|xt; θ) relates the measurement to noisy observations xt, and is not generically computable in closed form from the likelihood score, ∇x0 log pˆ(y|x0; θ).
2.3. Related work
Several methods have been proposed to use score-based diffusion models for conditional generation in a plug-and-play fashion. Most of these approaches aim to guide the diffusion sampling process by incorporating measurement constraints. If we are willing to restrict ourselves to linear problems, then the singular-value decomposition [14] or projections onto the measurement space [1] can be used to enforce the constraints. Alternatively, a popular line of research extends these approaches to non-li-
near problems by approximating the conditional score pˆ(y|xt; θ) in terms of the likelihood score pˆ(y|x0; θ). Methods such as DPS [3] use point estimates, while others employ simple unimodal distributions with estimated variances[25]. A major drawback of this class of methods is their computational overhead, as they require evaluating the Jacobian of the score function. Wang et al. [33] reformulate the problem from optimizing directly over xˆ0 to optimizing the noise initialization xˆT , using an-
 ODE as a deterministic mapping between these spaces. However, this method involves backpropagating through multiple score network evaluations, which can be computationally expensive.
3

Variational inference, a standard approach when the posterior is not available in closed form, approximates the posterior distribution with a simpler family of distributions. VI has recently been applied to inverse problems with diffusion priors, achieving some high-quality results [7, 19]. However, the objective, which is computed with a sample average under the forward diffusion process, turns out to be very sensitive to which noise levels are sampled, and at which gradient step. Very careful t-
uning is required to achieve good results. A very different approach idea uses optimal-control strategies to guide the diffusion sampler. Li and Pereira [16] demonstrated promising results, but their experiments were limited to linear problems and required a large number of function evaluations (up to 2500 NFEs for linear tasks). For unconditional diffusion sampling, Xu et al. [35] showed that, under NFE regimes, SDE-based samplers outperform ODE-based samplers, as they more effectively contract a-
ccumulated approximation errors. Building on this, Li and Wang [17] demonstrated that a DDIM-like sampler can be formulated as either an ODE or SDE sampler, particularly for linear inverse problems, and showed that conditioned SDE sampling produces higher-quality samples than conditioned ODE sampling by mitigating accumulated approximation errors. We discuss the approach of Li and Wang [17] in greater detail below. Xu et al. [35] also showed for unconditional sampling that ODE based sampling with -
intermittent restarts, where large amounts of noise are added only after many steps rather than small amounts at every step as in SDE sampling, outperforms both pure ODE and pure SDE formulations. This approach combines the low discretization error of ODEs with the noise injection benefits of SDEs, and is the inspiration for our own restart procedure. They did not, however, provide a simple restart strategy; instead, they employed restarts at multiple noise levels along the trajectory, often repea-
ting several restarts at each level. Recently, a successful line of work has decoupled diffusion sampling from conditioning, using an unconditional diffusion sampler followed by conditioning in the xˆ0 space, and then propagating back to the next (lower) noise level using the forward diffusion process [18, 36]. DCDP [18] enforces the constrain in xˆ0 space via gradient descent; whereas DAPS samples from the posterior with Langevin dynamics. DAPS, in particular, is the current state of the art [36]-
.
Re-interpreting recent models in light of RePS. DAPS [36] and DCDP [18] can be described as following three-stages: an unconditioned ODE, followed by a conditioning stage, followed by forward diffusion to the next (lower) noise level. The motivation behind these approaches was to decouple measurement conditioning from
denoising. Nevertheless, we can re-interpret them as variants on RePS. In particular, the second stage (addition of noise to escape local modes) can be interpreted as a restart procedure, in the manner of Xu et al. [35]. From this point of view, the crucial distinction between DAPS and RePS is that our algorith, replaces the two-stage conditioning sequence (unconditioned ODE followed by data consistency) with a conditioned ODE. By directly guiding the ODE trajectory toward the correct mode, rather-
 than first producing an unconstrained sample that may drift toward an undesirable mode, RePS converges faster. In contrast, DiffPIR [37] and the algorithm of Li and Wang [17] were explicitly motivated by the notion of restart sampling. In particular, both implement a DDIM-like sampler [26] that becomes deterministic when ζ = 0 and stochastic for non-zero ζ. For αt = 1 and ζ = 1, their update step can be written as
xˆt−∆t = E
hXˆ0 xˆt, y
i
+ σ(t − ∆t)z, (6)
where z ∼ N (0, I). Although Li and Wang [17] interpret this as a single step of an SDE sampler, it could alternatively be viewed as a single step of a conditioned ODE, followed by a restart. Viewed in this way, their method can be seen as a special case of RePS. In contrast, RePS allows multiple conditioned ODE steps before each restart, enabling stronger performance. While these methods were demonstrated only on linear problems, RePS performs well on both linear and nonlinear problems. We discus-
s their relationship to RePS in the ablation results and compare performance in Sec. 4.
3. Methods
3.1. Measurement-conditioned ODEs
Following Karras et al. [13], we use the ODE given by Eq. (3) with noise schedule defined as σ(t) = t. We can simulate this ODE using the posterior score to sample from the posterior distribution [3, 28]. Rewriting Eq. (3) in terms of ∇xt log pˆ(xt|y; θ) to sample from pˆ(x0|y; θ), we obtain
dxˆt = −σ ̇ (t)σ(t)∇xt log pˆ(xˆt|y; θ)dt. (7)
We can solve this ODE by stepping backwards in time using the Euler method:
xˆt−∆t = xˆt − ∆t dxˆt
dt , (8)
where ∆t > 0. Under our noise schedule, we have ∆t = σ(t) − σ(t − ∆t), and the Euler update becomes
xˆt−∆t = xˆt + σ(t) − σ(t − ∆t) σ(t)∇xt log pˆ(xˆt|y; θ). (9)
4

Following a Tweedie-style argument (see Appendix), we obtain
∇xt log pˆ(xˆt|y; θ) = E
hXˆ0 xˆt, y
i
− xˆt /σ2(t), (10)
allowing us to express a measurement-conditioned
numerical-integration step in terms of E
hXˆ0 xˆt, y
i
:
xˆ t−∆t = xˆ t + σ(t) − σ(t − ∆t)
σ(t) E
hXˆ0 xˆt, y
i
− xˆt .
(11) The mean of the posterior pˆ(x0|xˆt, y; θ) is generally difficult to compute, so we approximate it by the mode (MAP) of the distribution. Using the relation pˆ(x0|xt, y; θ) ∝ pˆ(y|x0; θ)pˆ(x0|xt; θ)pˆ(xt; θ) and
approximating pˆ(x0|xt; θ) as N E
hXˆ0 xˆt
i
, γt2I , the
MAP estimate becomes
xˆMAP = argmin
xˆ
1
2 ∥y − h(xˆ)∥2
2 + σ2n
2γt2
xˆ − E
hXˆ0 xˆt
i2
2
.
(12) In practice, we make σ2n/γt2 =.. λ a tunable parameter, fixed for all time. Li and Wang [17] proceed to write the solution to the optimization in Eq. (12) in closed form for linear problems—but that restricts their ODE sampler to linear or very specific non-linear problems. To keep our method general, we solve the optimization using gradient descent at each step of the numerical integration. The resulting ODE sampler can then be used for any linear or non-linear problems with differentiable m-
easurement operators. Since this does not involve gradient backpropagation through the score network, the computational costs remain low. We solve the conditioned ODE defined in Eqs. (11) and (12) from σ(t) down to σ0 using a polynomial interpolation schedule:
σs = σ
1 ρ
start + s σ
1 ρ
end − σ
1 ρ start
ρ
, (13)
where s ∈ [0, 1] is a normalized step parameter interpolating between σstart (at s = 0) and σend (at s = 1). In all experiments in this work, we use ρode = 7 for the conditioned ODE, following common practice in diffusion-based sampling [13].
3.2. Restart Strategy
Instead of solving the conditioned ODEs given by Eqs. (11) and (12) from σmax to σ0 in a single pass, we adopt a restartbased approach as shown in Fig. 1. Specifically, we first solve the ODE for a small number of steps down to σ0, then perform a forward diffusion step to reintroduce noise at a predefined restart level σrestart. From this point, we again solve the ODE backward to σ0. This process is repeated multiple times, with the restart level gradually annealed from σrestart to σmin.
Since we employ the VE-SDE formulation, each restart step is defined as:
xˆr ∼ N xˆ0, σ2
r I , (14)
where σr denotes the restart noise level. Xu et al. [35] described a restart scheme that injected noise at multiple arbitrary levels and repeated each level several times. In contrast, our strategy replaces that complexity with a much simpler schedule, allowing us to employ restart-based sampling as an effective alternative to standard SDE or ODE approaches. In all our experiments, we adopt a simple restart schedule based on the very same polynomial interpolation used for the ODE simulator, namely-
, Eq. (13). Specifically, the restart schedule interpolates from the maximum restart level σrestart to the minimum restart level σmin. We find that concentrating restart iterations at smaller noise levels improves performance. Accordingly, we tune σrestart separately for each task, while keeping σmin fixed. The full sampling procedure is summarized in Algorithm 1 in the Appendix.
4. Experiments
We evaluate our method on two image datasets: ImageNet 256×256 [4] and FFHQ 256×256 [12]. For ImageNet, we use the pretrained diffusion model publicly released by Dhariwal and Nichol [5], and for FFHQ, we use the pretrained model provided by Chung et al. [3]. Although both of these models were trained using DDPM framework that corresponds to VP-SDE, following [13] we use the unified VE-SDE based sampler for these models. We consider a range of linear and non-linear inverse problems that are widely-
 studied in the literature on image restoration and reconstruction. For all experiments, we begin from a noise level of σmax = 100 and use 10 steps of the conditioned ODE to move from the starting noise level (or the current restart noise level) down to σ0 = 0.01, following the polynomial schedule defined in Eq. (13) with ρode = 7. The restart schedule is then applied, beginning at task-specific σrestart and interpolating down to a minimum restart level σmin = 0.1, using the same polynomial form w-
ith ρrestart = 15. In addition to σrestart, we tune the number of gradient updates per step N , the learning rate η, and the parameter λ for each task; these are summarized in Sec. 7.
Linear problems. The linear inverse problems considered in our experiments include: (1) super-resolution, (2) inpainting (box mask), (3) inpainting (random mask), (4) Gaussian deblurring, and (5) motion deblurring. In super-resolution, the goal is to recover a highresolution image from a low-resolution observation obtained by bicubic downsampling with a factor of 4. In box
5

Table 1. Quantitative results for FFHQ and Imagenet on a set of linear and nonlinear problems.
Task Method FFHQ ImageNet
PSNR (↑) SSIM (↑) LPIPS (↓) FID (↓) PSNR (↑) SSIM (↑) LPIPS (↓) FID (↓)
Super Resolution 4× RePS (ours) 29.95 0.845 0.155 48.37 26.12 0.708 0.259 114.19
Li and Wang [17] 29.21 0.805 0.256 94.42 25.68 0.682 0.307 135.39 DAPS (code) 29.55 0.793 0.186 52.95 25.70 0.654 0.285 106.50 DPS 25.86 0.753 0.269 81.07 21.13 0.489 0.361 106.32 DDRM 26.58 0.782 0.282 79.25 22.62 0.521 0.324 103.85 DDNM 28.03 0.795 0.197 64.62 23.96 0.604 0.475 98.62 DCDP 28.66 0.807 0.178 53.81 - - - FPS-SMC 28.42 0.813 0.204 49.25 24.82 0.703 0.313 97.51 DiffPIR 26.64 - 0.260 65.77 23.18 - 0.371 106.32
Inpaint (Box) RePS (ours) 24.32 0.844 0.122 41.20 20.71 0.787 0.186 109.21
Li and Wang [17] 24.75 0.817 0.167 57.67 21.39 0.779 0.217 128.54 DAPS (code) 24.88 0.755 0.174 49.83 21.40 0.721 0.228 113.96 DPS 22.51 0.792 0.209 61.27 18.94 0.722 0.257 126.52 DDRM 22.26 0.801 0.207 78.62 18.63 0.733 0.254 116.37 DDNM 24.47 0.837 0.235 46.59 21.64 0.748 0.319 103.97 DCDP 23.89 0.760 0.163 45.23 - - - FPS-SMC 24.86 0.823 0.146 48.34 22.16 0.726 0.208 111.58
Inpaint (Random) RePS (ours) 32.49 0.899 0.090 24.18 28.97 0.829 0.115 27.52 Li and Wang [17] 34.11 0.926 0.071 20.04 29.67 0.861 0.114 29.70 DAPS (code) 30.94 0.807 0.155 34.84 27.72 0.742 0.177 37.18 DPS 25.46 0.823 0.203 69.20 23.52 0.745 0.297 87.53 DDNM 29.91 0.817 0.121 44.37 31.16 0.841 0.191 63.84 DCDP 30.69 0.842 0.142 52.51 - - - FPS-SMC 28.21 0.823 0.261 61.23 24.52 0.701 0.316 79.12
Gaussian deblurring RePS (ours) 29.92 0.841 0.146 49.68 26.21 0.703 0.255 116.84 Li and Wang [17] 29.89 0.831 0.217 86.54 25.75 0.681 0.296 143.88 DAPS (code) 29.75 0.794 0.177 53.01 26.00 0.668 0.260 102.46 DPS 25.87 0.764 0.219 79.75 20.31 0.598 0.397 116.42 DDRM 24.93 0.732 0.239 92.43 21.26 0.564 0.443 146.89 DDNM 28.20 0.804 0.216 57.83 28.06 0.703 0.278 81.43 DCDP 27.50 0.699 0.304 86.43 - - - FPS-SMC 26.54 0.773 0.253 67.45 23.91 0.601 0.387 91.72 DiffPIR 27.36 - 0.236 59.65 22.80 - 0.355 9-
3.36
Motion deblurring RePS (ours) 32.27 0.875 0.115 34.10 28.95 0.801 0.169 53.15 Li and Wang [17] 29.90 0.766 0.207 62.43 27.70 0.733 0.238 79.27 DAPS (code) 31.80 0.843 0.135 40.82 28.87 0.781 0.171 50.35 DPS 24.52 0.801 0.246 65.23 18.96 0.629 0.423 137.81 DCDP 25.08 0.512 0.364 125.13 - - - FPS-SMC 27.39 0.826 0.227 48.32 24.52 0.647 0.326 87.43 DiffPIR 26.57 - 0.255 65.78 24.01 - 0.366 94.63
Phase Retrieval RePS (ours) 30.41±4.45 0.824±0.119 0.152±0.107 41.81 20.12±7.18 0.449±0.260 0.419±0.184 220.93 DAPS (code) 30.72±3.15 0.809±0.081 0.157±0.073 37.88 22.32±6.51 0.514±0.219 0.343±0.155 134.55 DPS 17.64 ±2.97 0.441±0.129 0.410±0.090 104.52 16.81±3.61 0.427±0.143 0.447±0.099 197.54 RED-diff 15.60 ±4.48 0.398 ±0.195 0.596 ±0.092 167.43 14.98±3.75 0.386±0.057 0.536±0.129 212.24 DCDP 28.65 ±8.09 0.781 ±0.217 0.203 ±0.196 68.13 - - - 
Nonlinear deblur RePS (ours) 29.02±1.76 0.797±0.031 0.165±0.030 51.97 27.58±3.28 0.745±0.082 0.191±0.056 72.66 DAPS (code) 28.79±1.54 0.781±0.033 0.177±0.030 51.08 27.47±3.21 0.737±0.083 0.198±0.052 67.62 DPS 23.39±2.01 0.623±0.082 0.278±0.060 91.31 22.49±3.20 0.591±0.101 0.306±0.080 101.41 RED-diff 30.86±0.51 0.795±0.028 0.160±0.034 43.84 30.07±1.41 0.754±0.023 0.211±0.083 51.22 DCDP 27.92±2.64 0.779±0.067 0.183±0.051 51.96 - - - 
High dynamic range RePS (ours) 27.96±3.54 0.872±0.080 0.145±0.071 36.01 26.37±4.05 0.843±0.117 0.157±0.103 37.23 DAPS (code) 27.52 ±3.57 0.840 ±0.084 0.157±0.064 39.39 26.50±4.70 0.812±0.141 0.170±0.113 46.35 DPS 22.73±6.07 0.591±0.141 0.264±0.156 112.82 19.23±2.52 0.582±0.082 0.503±0.106 146.23 RED-diff 22.16±3.41 0.512±0.083 0.258±0.089 108.32 22.03±5.90 0.601±0.094 0.274 ±0.198 113.48
inpainting, each image is masked by a randomly placed box of size 128×128, while in random inpainting, 70% of the
pixels are randomly masked. For Gaussian deblurring, we use a blur kernel of size 61×61 with a standard deviation of
6

3.0, and for motion deblurring, we use a kernel of the same size with a standard deviation of 0.5. In all tasks, Gaussian noise with a standard deviation of σn = 0.05 is added to the measurements.
Non-linear problems. The non-linear inverse problems considered include: (1) phase retrieval, (2) non-linear deblurring, and (3) high dynamic range (HDR) reconstruction. In phase retrieval, the objective is to reconstruct an image from only the magnitude of its Fourier transform, where the phase information is missing. Since this is a highly illposed problem, we follow previous work [3, 36] in using measurements oversampled by a factor of 2, generating 4 reconstructions per measurement, and report-
ing the best score among them. Non-linear deblurring involves removing blur introduced by a neural network. For this task, we use the pretrained model publicly released by Tran et al. [30]. In HDR, the goal is to recover the full dynamic range of pixel intensities from measurements in which pixel values are compressed to a smaller range by a factor of 2. As in the linear problems, Gaussian noise with σn = 0.05 is added to the measurements.
Baselines and metrics. We compare our method against the following baselines: Li and Wang [17], DAPS [36], DDRM [14], DDNM [34], DPS [3], DCDP [18], FPSSMC [6], and DiffPIR [37] for linear problems; and DAPS [36], DPS [3], RED-diff [19], and DCDP [18] for non-linear problems. To quantitatively evaluate performance, we report four standard metrics: peak signalto-noise ratio (PSNR), structural similarity index measure (SSIM), learned perceptual image patch similarity (LPIPS), and Fre ́chet inception-
 distance (FID). FID measures the fidelity of the generated samples with respect to the true data distribution, whereas PSNR, SSIM, and LPIPS assess the similarity between the generated and ground-truth images, thereby reflecting the degree of measurement consistency. Since we use the same test setup as DAPS, most baseline results are reported from their paper. However, results obtained by running the DAPS code did not exactly match the reported values, so we report the numbers from running their -
official code. For comparison, we include their original results from the paper in the supplementary material. Li and Wang [17] did not provide code, so we implemented their method ourselves; we report their results for 1000 NFEs, using gradient descent rather than the closedform solution.
4.1. Main Results
In Fig. 6, we present qualitative visualisations for both linear and non-linear inverse problems. These results show that RePS consistently recovers fine structural and textural
10
20
30
PSNR
RePS SDE ODE
0 200 400 600 800 1,000
0.2
0.4
0.6
0.8
NFE
LPIPS
RePS SDE ODE
Figure 2. Comparison to ODE and SDE samplers We plot two metrics, PSNR (top) and LPIPS (bottom), for Gaussian deblurring on FFHQ, as a function of NFEs for three different samplers: SDE, ODE, and RePS. The plots indicate that RePS achieves faster convergence and better overall performance.
details across a variety of tasks, including phase-retrieval and non-linear deblur. In Fig. 7, we show multiple reconstructions of the same input: for phase-retrieval, RePS produces high-fidelity results reliably; for inpainting, it generates diverse yet plausible outputs in the masked regions. We also include generated examples for all linear and non-linear tasks in Sec. 8. Quantitative comparisons of RePS with baseline methods are provided in Tab. 1. RePS outperforms the recent state-of-the-art -
method DAPS across all linear tasks and on two of the three nonlinear tasks. While individual baselines such as Li and Wang [17] for inpaint (random) and RED-diff for nonlinear deblur achieve strong performance on specific tasks, RePS nonetheless delivers the best overall results across the full range of tasks studied.
Comparison to SDE and ODE. To highlight the performance gain achieved through restart sampling, we compare PSNR and LPIPS on Gaussian Deblur in Fig. 2 using three approaches: (i) the same ODE without any restart, (ii) an SDE derived via the Euler–Maruyama method (details in the Appendix) with identical conditioning but continuous noise injection, and (iii) our proposed RePS method. The results confirm that the ODE exhibits low discretisation error and converges rapidly at low NFEs, while the SDE d-
elivers stronger performance at higher NFEs due to the error contraction effects of stochastic noise. RePS combines both strengths as it converges quickly and attains the best performance across the full NFE range. As discussed in Sec. 2, Zhu et al. [37] and Li and Wang [17] employ an SDE derived from the DDIM sampler, which can be viewed as a special case of our RePS framework—that is, restarting interpolated with ODE sim
7

29
30
31
32
PSNR
RePS DAPS
0 200 400 600 800 1,000
0.15
0.2
NFEs
LPIPS
RePS DAPS
Figure 3. Comparison to DAPS at different NFEs We plot PSNR and LPIPS for DAPS and RePS on FFHQ motion deblurring, as a function of NFEs. The plots show that RePS achieves better performance across different NFEs.
ulation, but using only a single ODE step. We present ablation results in Fig. 5 that examine the influence of the number of ODE steps taken between successive restarts (with the total NFEs held constant at 1000). The leftmost data point in the figure corresponds to Eq. (6); i.e., one conditioned ODE step between restarts. The results show that increasing the number of ODE steps between restarts improves performance up to a point. Beyond approximately 20 ODE steps, LPIPS begins to worsen, while PS-
NR peaks around 5 ODE steps. This result is consistent with our comparison to the standard Euler–Maruyama SDE and is also reflected in our main results in Tab. 1, where RePS outperforms DiffPIR across all tasks and also outperforms Li and Wang [17] in all tasks except Inpaint (Random).
Comparison to DAPS. DAPS is the current state-of-theart method, so in addition to the results in Tab. 1 we compare RePS with DAPS at different NFEs. Fig. 3 shows that RePS achieves better PSNR and LPIPS across all NFEs compared to DAPS on the motion-deblurring task. For completeness, we provide results including SSIM and FID scores for all linear and nonlinear problems in Sec. 8. In Fig. 4 we compare the per-image sampling time of RePS and DAPS across all tasks. The times shown correspond to the m-
aximum NFEs used for each task (i.e., 1k for linear problems and 4k for nonlinear problems). Overall, the sampling times are comparable: RePS is slightly faster on linear tasks and slightly slower on nonlinear tasks, but the differences are small.
5. Conclusions
Score-based ODE samplers benefit from low discretization error, enabling fast convergence and high-quality reconstructions, while SDE samplers inject stochasticity at each
SR IB IR GD MD PR ND HDR
0
100
200
Task
Running Time (sec)
RePS DAPS
Figure 4. Sampling time comparison of RePS versus DAPS. The figure shows the time per sample (in seconds) across all tasks in the study: Super-resolution (SR), Inpaint-Box (IB), InpaintRandom (IR), Gaussian-Deblur (GD), Motion-Deblur (MD), Phase-Retrieval (PR), Nonlinear-Deblur (NB) and High-DynamicRange (HDR).
26
28
30
32
34
PSNR
psnr
0 5 10 15 20 25
0.12
0.14
0.16
ODE steps
LPIPS
lpips
Figure 5. Ablation study: number of ODE steps.
step to contract accumulated errors. Restart sampling combines both advantages by interleaving short ODE trajectories with large noise injections, producing higher-quality samples. We extend this concept to posterior sampling in RePS by running multiple conditioned ODE steps interleaved with restart operations. We propose a simple and task-agnostic restart strategy that is easy to implement. This design achieves both faster convergence and enhanced sample fidelity compared to existing baselines. O-
ur experiments show that RePS consistently produces better-quality samples across a diverse set of tasks, demonstrating that the restart framework offers an efficient and effective way to improve sampling quality.
References
[1] Hyungjin Chung and Jong Chul Ye. Score-based diffusion models for accelerated MRI, 2022. arXiv:2110.05243 [eess]. 1, 3
8

[2] Hyungjin Chung, Dohoon Ryu, Michael T. McCann, Marc L. Klasky, and Jong Chul Ye. Solving 3D Inverse Problems using Pre-trained 2D Diffusion Models. In 2023 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), pages 22542–22551, 2023. arXiv:2211.10655 [cs]. 1
[3] Hyungjin Chung, Jeongsol Kim, Michael T. Mccann, Marc L. Klasky, and Jong Chul Ye. Diffusion Posterior Sampling for General Noisy Inverse Problems, 2024. arXiv:2209.14687 [stat]. 2, 3, 4, 5, 7 [4] Jia Deng, Wei Dong, Richard Socher, Li-Jia Li, Kai Li, and Li Fei-Fei. ImageNet: A large-scale hierarchical image database. In 2009 IEEE Conference on Computer Vision and Pattern Recognition, pages 248–255, 2009. ISSN: 10636919. 5 [5] Prafulla Dhariwal and Alex Nichol. Diffusion Models Beat GANs on I-
mage Synthesis, 2021. arXiv:2105.05233 [cs]. 2, 5
[6] Zehao Dou and Yang Song. DIFFUSION POSTERIOR SAMPLING FOR LINEAR INVERSE PROBLEM SOLVING — A FILTERING PERSPECTIVE. 2024. 7 [7] Alexandros Graikos, Nikolay Malkin, Nebojsa Jojic, and Dimitris Samaras. Diffusion models as plug-and-play priors, 2023. arXiv:2206.09012 [cs]. 2, 4 [8] Jonathan Ho, Ajay Jain, and Pieter Abbeel. Denoising Diffusion Probabilistic Models, 2020. arXiv:2006.11239 [cs]. 1
[9] Anastasiia Iashchenko, Pavel Andreev, Ivan Shchekotov, Nicholas Babaev, and Dmitry Vetrov. UnDiff: Unsupervised Voice Restoration with Unconditional Diffusion Model. In INTERSPEECH 2023, pages 4294–4298. ISCA, 2023. 1 [10] Zahra Kadkhodaie and Eero P Simoncelli. Stochastic Solutions for Linear Inverse Problems using the Prior Implicit in a Denoiser. 1 [11] Zahra Kadkhodaie and Eero P. Simoncelli. Solving Linear Inverse Problems Using the Prior Implicit in a Denoiser, 2021. arXiv:2007.13640 [cs-
]. 1 [12] Tero Karras, Samuli Laine, and Timo Aila. A StyleBased Generator Architecture for Generative Adversarial Networks, 2019. arXiv:1812.04948 [cs]. 5 [13] Tero Karras, Miika Aittala, Timo Aila, and Samuli Laine. Elucidating the Design Space of Diffusion-Based Generative Models, 2022. arXiv:2206.00364 [cs]. 3, 4, 5 [14] Bahjat Kawar, Michael Elad, Stefano Ermon, and Jiaming Song. Denoising Diffusion Restoration Models, 2022. arXiv:2201.11793 [eess]. 3, 7 [15] Heeseung Kim, Sungwon Kim, and Su-
ngroh Yoon. GuidedTTS: A Diffusion Model for Text-to-Speech via Classifier Guidance. 1 [16] Henry Li and Marcus Pereira. Solving Inverse Problems via Diffusion Optimal Control. 4 [17] Ji Li and Chao Wang. Efficient Diffusion Posterior Sampling for Noisy Inverse Problems. SIAM Journal on Imaging Sciences, 18(2):1468–1492, 2025. 2, 4, 5, 6, 7, 8 [18] Xiang Li, Soo Min Kwon, Shijun Liang, Ismail R. Alkhouri, Saiprasad Ravishankar, and Qing Qu. Decoupled Data Consistency with Diffusion Purification fo-
r Image Restoration, 2025. arXiv:2403.06054 [eess]. 2, 4, 7
[19] Morteza Mardani, Jiaming Song, Jan Kautz, and Arash Vahdat. A Variational Perspective on Solving Inverse Problems with Diffusion Models, 2023. arXiv:2305.04391 [cs]. 4, 7 [20] Shen Nie, Fengqi Zhu, Chao Du, Tianyu Pang, Qian Liu, Guangtao Zeng, Min Lin, and Chongxuan Li. Scaling up Masked Diffusion Models on Text, 2025. arXiv:2410.18514 [cs]. 1 [21] Shen Nie, Fengqi Zhu, Zebin You, Xiaolu Zhang, Jingyang Ou, Jun Hu, Jun Zhou, Yankai Lin, Ji-Rong Wen, and Chongxuan Li. Large Language Diffusion-
 Models, 2025. arXiv:2502.09992 [cs]. [22] Vadim Popov, Ivan Vovk, Vladimir Gogoryan, Tasnima Sadekova, and Mikhail Kudinov. Grad-TTS: A Diffusion Probabilistic Model for Text-to-Speech, 2021. arXiv:2105.06337 [cs]. 1 [23] Yaniv Romano, Michael Elad, and Peyman Milanfar. The Little Engine that Could: Regularization by Denoising (RED), 2017. arXiv:1611.02862 [cs]. 1 [24] Jiaxin Shi, Kehang Han, Zhe Wang, Arnaud Doucet, and Michalis K. Titsias. Simplified and Generalized Masked Diffusion for Discret-
e Data, 2025. arXiv:2406.04329 [cs]. 1 [25] Jiaming Song, Qinsheng Zhang, Hongxu Yin, Morteza Mardani, Ming-Yu Liu, Jan Kautz, Yongxin Chen, and Arash Vahdat. Loss-Guided Diffusion Models for Plug-and-Play Controllable Generation. 3 [26] Jiaming Song, Chenlin Meng, and Stefano Ermon. Denoising Diffusion Implicit Models, 2022. arXiv:2010.02502 [cs]. 2, 4 [27] Yang Song and Stefano Ermon. Generative Modeling by Estimating Gradients of the Data Distribution. 3 [28] Yang Song, Jascha Sohl-Dickstein, D-
iederik P. Kingma, Abhishek Kumar, Stefano Ermon, and Ben Poole. Score-Based Generative Modeling through Stochastic Differential Equations, 2021. arXiv:2011.13456 [cs]. 1, 3, 4 [29] Yang Song, Liyue Shen, Lei Xing, and Stefano Ermon. Solving Inverse Problems in Medical Imaging with Score-Based Generative Models, 2022. arXiv:2111.08005 [eess]. 1 [30] Phong Tran, Anh Tran, Quynh Phung, and Minh Hoai. Explore Image Deblurring via Blur Kernel Space, 2021. arXiv:2104.00317 [cs]. 7 [31] Singanallur V. V-
enkatakrishnan, Charles A. Bouman, and Brendt Wohlberg. Plug-and-Play priors for model based reconstruction. In 2013 IEEE Global Conference on Signal and Information Processing, pages 945–948, 2013. 1
[32] Pascal Vincent. A Connection Between Score Matching and Denoising Autoencoders. Neural Computation, 23(7):16611674, 2011. 3 [33] Hengkang Wang, Xu Zhang, Taihui Li, Yuxiang Wan, Tiancong Chen, and Ju Sun. DMPlug: A Plug-in Method for Solving Inverse Problems with Diffusion Models. 3 [34] Yinhuai Wang, Jiwen Yu, and Jian Zhang. Zero-Shot Image Restoration Using Denoising Diffusion Null-Space Model, 2022. arXiv:2212.00490 [cs]. 7 [35] Yilun Xu, Mingyang Deng, Xiang Cheng, Yonglong Tian, Ziming -
Liu, and Tommi Jaakkola. Restart Sampling for Improving Generative Processes. 2, 4, 5
9

[36] Bingliang Zhang, Wenda Chu, Julius Berner, Chenlin Meng, Anima Anandkumar, and Yang Song. Improving Diffusion Inverse Problem Solving with Decoupled Noise Annealing. In 2025 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), pages 20895–20905, 2025. arXiv:2407.01521 [cs]. 2, 4, 7, 3 [37] Yuanzhi Zhu, Kai Zhang, Jingyun Liang, Jiezhang Cao, Bihan Wen, Radu Timofte, and Luc Van Gool. Denoising Diffusion Models for Plug-and-Play Image Restoration, 2023. arXiv:2305.08995 [cs]-
. 2, 4, 7
10

Solving Diffusion Inverse Problems with Restart Posterior Sampling
Supplementary Material
1

6. Additional Methods
6.1. Posterior score
We can write posterior score, ∇xt log pˆ(xˆt|y; θ), in terms of E
hXˆ0 xˆt, y
i
following the simple derivation given below.
∇xt log pˆ(xˆt|y; θ) = ∇xt pˆ(xˆt|y; θ)
pˆ(xˆt|y; θ) (15)
=1
pˆ(xˆt|y; θ) ∇xt
Z
xˆ0
pˆ(xˆt, xˆ0|y; θ) dxˆ0 (16)
Using independence between xˆt and y conditioned on xˆ0 and taking ∇xt inside the integral,
=1
pˆ(xˆt|y; θ)
Z
xˆ0
pˆ(xˆ0|y; θ)∇xt pˆ(xˆt|xˆ0; θ)dxˆ0 (17)
Using ∇xt pˆ(xˆt|xˆ0; θ) = ∇xt log pˆ(xˆt|xˆ0; θ)pˆ(xˆt|xˆ0; θ) we obtain
∇xt log pˆ(xˆt|y; θ) =
Z
xˆ0
pˆ(xˆ0|y; θ)pˆ(xˆt|xˆ0; θ)
pˆ(xˆt|y; θ) ∇xt log pˆ(xˆt|xˆ0; θ)dxˆ0 (18)
=
Z
xˆ0
pˆ(xˆ0|xˆt, y; θ)∇xt log pˆ(xˆt|xˆ0; θ)dxˆ0 (19)
=
Z
xˆ0
pˆ(xˆ0|xˆt, y; θ) xˆ0 − xˆt
σ2(t) dxˆ0 (20)
=
E
hXˆ0 xˆt, y
i
− xˆt
σ2(t) (21)
6.2. Conditioned SDE
In general, the forward diffusion process is written in the form:
dxˆt = f (xˆt, t)dt + g(t) dwt, (22)
where xˆt ∈ Rd denotes the state at time t, wt is a standard Wiener process, f (·, t) is the drift vector field, and g(t) is the scalar diffusion coefficient. The corresponding reverse-time stochastic differential equation is given by:
dxˆt = f (xˆt, t) − g2(t)∇xt log pˆ(xt; θ) dt + g(t)dw ̄t, (23)
where pˆ(xt; θ) is the marginal density of xˆt and w ̄t denotes a reverse-time Wiener process. Eq. (23) is solved backwards in time. Using Euler–Maruyama method, we can write the one step update as:
xˆt−∆t = xˆt − f (xˆt, t) − g2(t))∇xt log pˆ(xt; θ) ∆t + g(t)
√
∆t z, (24)
where z ∼ N (0, I) and ∆t > 0. For the specific SDE given by Eq. (2), and with σ(t) = t and σ ̇ (t) = 1, we can write this as:
xˆt−∆t = xˆt + 2σ(t) σ(t) − σ(t − ∆t) ∇xt log pˆ(xt; θ) +
r
2σ(t) σ(t) − σ(t − ∆t) z, (25)
In order to use this SDE to sample from the posterior distribution pˆ(xˆ0|y; θ), we can write this in terms of posterior score, ∇xt log pˆ(xˆt|y; θ) as:
xˆt−∆t = xˆt + 2σ(t) σ(t) − σ(t − ∆t) ∇xt log pˆ(xˆt|y; θ) +
r
2σ(t) σ(t) − σ(t − ∆t) z, (26)
2

Table 2. Tuning parameters for all the linear and nonlinear tasks. Same set of parameters was used for both FFHQ and Imagenet.
Task η λ N σ(RES)
Super Resolution 1.18 × 10−3 11.60 20 10
Inpaint (Box) 4.8 × 10−2 4.14 20 50
Inpaint (Random) 1.1 × 10−2 2.7 10 2
Gaussian deblurring 2.0 × 10−2 0.75 10 50
Motion deblur 2.0 × 10−2 0.9 10 2
Phase Retrieval 5.0 × 10−3 0.6 20 10
Nonlinear deblur 6.3 × 10−3 2.42 20 25
High dynamic range 3.0 × 10−2 5.0 20 25
From Sec. 6.1, we can write:
xˆt−∆t = xˆt +
2 σ(t) − σ(t − ∆t)
σ(t) E
hXˆ0 xˆt, y
i
− xˆt +
r
2σ(t) σ(t) − σ(t − ∆t) z, (27)
We can approximate the mean of the posterior pˆ(xˆ0|xˆt, y; θ) by the MAP estimate given by Eq. (12) to get the conditioned SDE.
7. Experimental Details
We follow Zhang et al. [36] for the implementation of inverse problems and use fixed random seeds to ensure fair comparison and reproducible results.
7.1. ODE solver
To ensure a fair comparison with the baselines, we used pretrained models. Both baselines were trained with the DDPM objective, which corresponds to the VP–SDE. Karras et al. [13], however, showed that the sampler can be decoupled from the training strategy, and used a VE–SDE (see Eq. (3)) to generate samples. When evaluating scores, a network trained under one parametrization requires appropriate preconditioning to be used with a different sampler; we follow the preconditioning procedure from Kar-
ras et al. [13] precisely.
7.2. Hyper-parameters
We simulate the conditioned ODE using the Euler method from σmax = 100 (or from restart levels given by σr) to σ0 = 0.01 in 10 steps. The ODE noise schedule follows the polynomial schedule given in Eq. (13) with ρode = 7. The restart schedule is annealed using a polynomial schedule with ρ = 15, from σrestart (tuned per task) to σmin = 0.1. In addition to σrestart, the parameters we tune are the number of gradient updates per conditioning step N , the learning rate η, and the relative scale λ. For -
gradient-based optimization we use the Adam optimizer, with the learning rate as specified above and all other Adam parameters left at their default values. Tuning parameters for each task are listed in Tab. 2. Since we always use a fixed number of ODE steps (i.e., 10), we vary the number of restart levels to obtain results for different NFE budgets. For example, for RePS-1k we use Nrestart = 100, and for RePS-4k we use Nrestart = 400. The full algorithm is given in Algorithm 1.
8. Additional Results
We visualize qualitative results for selected tasks in Fig. 6, which show that RePS generates fine details consistent with the measurement signal. We also provide multiple-run examples for phase retrieval and inpaint-box in Fig. 7, demonstrating reliable reconstruction of the target image in the challenging phase-retrieval task and diverse, plausible completions (e.g., smiles and other facial features) for the masked region in the inpainting examples. Additional visualizations are provided in Figs-
. 16 to 21.
3

Algorithm 1 Sampling with conditioned ODE + restart
Require: sθ, σmax, σ0, σres, σmin, Nres, ρres, Node, ρode 1: Restart schedule: σ(r) = schedule(σres, σmin, Nres, ρres) 2: Prepend σmax to restart schedule: σ(r0) = σmax 3: Sample xr0 ∼ N (0, σ2maxI) 4: for r ∈ Restart schedule do 5: ODE schedule: σ(t) = schedule(σr, σ0, Node, ρode) 6: xt = xr 7: for t ∈ ODE schedule do 8: xˆ0 = E[x0 | xt] using sθ 9: MAP estimate by solving Eq. (12) 10: x t−1 = x t + σ(t)−σ(t−1)
σ(t) (xMAP − x t)
11: end for
12: Restart: xr+1 ∼ N (ˆx0|y, σ2(r + 1) I) 13: end for
Nonlinear Linear
Figure 6. Qualitative results. For each example, we show three images in the following order: ground truth, measurement, and generated sample. On the left half, we show results generated by RePS for nonlinear problems: phase retrieval (top-left) and nonlinear deblurring (bottom-left). On the right half, we show examples for inpainting: box inpaint (top-right) and random inpaint (bottom-right). Visualizations suggest that RePS is able to recover fine details effectively.
8.1. Comparison to DAPS
For a detailed comparison with DAPS, we present results for both RePS and DAPS across different Neural Function Evaluation (NFE) budgets. Figures Fig. 8 and Fig. 9 show all four evaluation metrics for different NFEs on FFHQ; analogous results for ImageNet appear in Figs. 12 and 13. Because algorithms with the same NFE count can still have different run times, we also report results as a function of wall-clock running time per image measured on an NVIDIA A100-40GB. These results are shown in Figs. -
10 and 11 for FFHQ and in Figs. 14 and 15 for ImageNet. As noted in the main paper, the results obtained by running the official DAPS code differ slightly from those reported in the DAPS paper. Therefore, all quantitative comparisons in this work use results produced by running the official DAPS implementation. For completeness, we also reproduce the original results reported in the DAPS paper in Tab. 3.
4

GT Measurement Sample-1 Sample-2 Sample-3 Sample-4
Figure 7. Multiple samples from the same measurement. We show four samples generated from the same measurement for phase retrieval (top row) and inpaint-box (bottom row). The visualizations highlight diverse reconstructions, especially in the masked regions for the inpainting task.
Table 3. Comparison of quantitative values obtained by running DAPS official code with the values reported in DAPS paper.
Task Method FFHQ ImageNet
PSNR (↑) SSIM (↑) LPIPS (↓) FID (↓) PSNR (↑) SSIM (↑) LPIPS (↓) FID (↓)
Super Resolution 4× RePS (ours) 29.95 0.845 0.155 48.37 26.12 0.708 0.259 114.19
DAPS (code) 29.55 0.793 0.186 52.95 25.70 0.654 0.285 106.50 DAPS (paper) 29.07 0.818 0.177 51.44 25.89 0.694 0.276 83.57
Inpaint (Box) RePS (ours) 24.32 0.844 0.122 41.20 20.71 0.787 0.186 109.21
DAPS (code) 24.88 0.755 0.174 49.83 21.40 0.721 0.228 113.96 DAPS (paper) 24.07 0.814 0.133 43.10 21.43 0.725 0.214 109.85
Inpaint (Random) RePS (ours) 32.49 0.899 0.090 24.18 28.97 0.829 0.115 27.52 DAPS (code) 30.94 0.807 0.155 34.84 27.72 0.742 0.177 37.18 DAPS (paper) 31.12 0.844 0.098 32.17 28.44 0.775 0.135 54.25
Gaussian deblurring RePS (ours) 29.92 0.841 0.146 49.68 26.21 0.703 0.255 116.84 DAPS (code) 29.75 0.794 0.177 53.01 26.00 0.668 0.260 102.46 DAPS (paper) 29.19 0.817 0.165 53.33 26.15 0.684 0.253 75.68
Motion deblurring RePS (ours) 32.27 0.875 0.115 34.10 28.95 0.801 0.169 53.15 DAPS (code) 31.80 0.843 0.135 40.82 28.87 0.781 0.171 50.35 DAPS (paper) 29.66 0.847 0.157 39.49 27.86 0.766 0.196 61.83
Phase Retrieval RePS (ours) 30.41±4.45 0.824±0.119 0.152±0.107 41.81 20.12±7.18 0.449±0.260 0.419±0.184 220.93 DAPS (code) 30.72±3.15 0.809±0.081 0.157±0.073 37.88 22.32±6.51 0.514±0.219 0.343±0.155 134.55 DAPS (paper) 30.63±3.13 0.851±0.072 0.139±0.060 42.71 25.78±6.02 0.743±0.084 0.254±0.125 82.67
Nonlinear deblur RePS (ours) 29.02±1.76 0.797±0.031 0.165±0.030 51.97 27.58±3.28 0.745±0.082 0.191±0.056 72.66 DAPS (code) 28.79±1.54 0.781±0.033 0.177±0.030 51.08 27.47±3.21 0.737±0.083 0.198±0.052 67.62 DAPS (paper) 28.29±1.77 0.783±0.036 0.155±0.032 49.38 27.73±3.23 0.724±0.048 0.169±0.056 59.87
High dynamic range RePS (ours) 27.96±3.54 0.872±0.080 0.145±0.071 36.01 26.37±4.05 0.843±0.117 0.157±0.103 37.23 DAPS (code) 27.52 ±3.57 0.840 ±0.084 0.157±0.064 39.39 26.50±4.70 0.812±0.141 0.170±0.113 46.35 DAPS (paper) 27.12±3.53 0.752±0.041 0.162±0.072 42.97 26.30±4.10 0.717±0.067 0.175±0.107 64.19
5

PSNR (↑) SSIM (↑) LPIPS (↓) FID (↓)
super-resolution
15
20
25
30
0.5
0.6
0.7
0.8
0.2
0.3
0.4
0.5
60
80
100
inpaint-box
18
20
22
24
0.65
0.7
0.75
0.8
0.85
0.15
0.2
0.25
0.3
40
60
80
100
inpaint-random
15
20
25
30
0.4
0.6
0.8
0.2
0.4
0.6
50
100
150
200
gaussian-deblur
26
28
30
0.7
0.75
0.8
0.15
0.2
0.25
60
80
motion-deblur
0 500 1,000
29
30
31
32
NFEs
0 500 1,000
0.7
0.75
0.8
0.85
NFEs
0 500 1,000
0.15
0.2
NFEs
0 500 1,000
40
50
60
NFEs
Figure 8. Quantitative results vs NFEs for linear problems on FFHQ. Figure shows all four metrics as a function of NFEs for RePS (orange) and DAPS (blue) for all linear problems on FFHQ dataset.
6

PSNR (↑) SSIM (↑) LPIPS (↓) FID (↓)
phase-retrieval
15
20
25
30
0.4
0.6
0.8
0.2
0.3
0.4
0.5
50
100
150
200
nonlinear-deblur
20
25
0.5
0.6
0.7
0.8
0.2
0.3
0.4
60
80
100
120
hdr
01234
24
26
28
NFEs (×1000)
01234
0.82
0.84
0.86
NFEs (×1000)
01234
0.14
0.16
0.18
NFEs (×1000)
01234
40
45
NFEs (×1000)
Figure 9. Quantitative results vs NFEs for non-linear problems on FFHQ. Figure shows all four metrics as a function of NFEs for RePS (orange) and DAPS (blue) for all the non-linear problems on FFHQ dataset.
7

PSNR (↑) SSIM (↑) LPIPS (↓) FID (↓)
super-resolution
15
20
25
30
0.5
0.6
0.7
0.8
0.2
0.3
0.4
0.5
60
80
100
inpaint-box
18
20
22
24
0.65
0.7
0.75
0.8
0.85
0.15
0.2
0.25
0.3
40
60
80
100
inpaint-random
15
20
25
30
0.4
0.6
0.8
0.2
0.4
0.6
50
100
150
200
gaussian-deblur
26
28
30
0.7
0.75
0.8
0.15
0.2
0.25
60
80
motion-deblur
0 20 40
29
30
31
32
Time (sec)
0 20 40
0.7
0.75
0.8
0.85
Time (sec)
0 20 40
0.15
0.2
Time (sec)
0 20 40
40
50
60
Time (sec)
Figure 10. Quantitative results vs running time-per-sample for linear problems on FFHQ. Figure shows all four metrics as a function of running time-per-sample (seconds) for RePS (orange) and DAPS (blue) for all the linear problems on FFHQ dataset. All samples were generated on an NVIDIA A100-40GB GPU.
8

PSNR (↑) SSIM (↑) LPIPS (↓) FID (↓)
phase-retrieval
15
20
25
30
0.4
0.6
0.8
0.2
0.3
0.4
0.5
50
100
150
200
nonlinear-deblur
20
25
0.5
0.6
0.7
0.8
0.2
0.3
0.4
60
80
100
120
hdr
0 10 20 30 40
24
26
28
Time (sec)
0 10 20 30 40
0.82
0.84
0.86
Time (sec)
0 10 20 30 40
0.14
0.16
0.18
Time (sec)
0 10 20 30 40
40
45
Time (sec)
Figure 11. Quantitative results vs running time-per-sample for non-linear problems on FFHQ. Figure shows all four metrics as a function of running time-per-sample (seconds) for RePS (orange) and DAPS (blue) for all the non-linear problems on FFHQ dataset. All samples were generated on an NVIDIA A100-40GB GPU.
9

PSNR (↑) SSIM (↑) LPIPS (↓) FID (↓)
super-resolution
15
20
25
0.4
0.5
0.6
0.7
0.3
0.4
0.5
0.6
100
150
200
250
inpaint-box
18
20
0.6
0.65
0.7
0.75
0.2
0.25
0.3
0.35
150
200
250
inpaint-random
15
20
25
0.4
0.6
0.8
0.2
0.4
0.6
100
200
300
gaussian-deblur
23
24
25
26
0.55
0.6
0.65
0.7
0.25
0.3
0.35
100
150
200
motion-deblur
0 500 1,000
26
27
28
29
NFEs
0 500 1,000
0.65
0.7
0.75
0.8
NFEs
0 500 1,000
0.18
0.2
0.22
0.24
0.26
NFEs
0 500 1,000
60
80
100
120
NFEs
Figure 12. Quantitative results vs NFEs for linear problems on Imagenet. Figure shows all four metrics as a function of NFEs for RePS (orange) and DAPS (blue) for all linear problems on Imagenet dataset.
10

PSNR (↑) SSIM (↑) LPIPS (↓) FID (↓)
phase-retrieval
14
16
18
20
22
0.3
0.4
0.5
0.4
0.5
150
200
250
300
nonlinear-deblur
20
22
24
26
0.5
0.6
0.7
0.2
0.3
0.4
100
150
200
hdr
01234
24
25
26
NFEs (×1000)
01234
0.8
0.82
0.84
NFEs (×1000)
01234
0.16
0.18
0.2
NFEs (×1000)
01234
40
45
NFEs (×1000)
Figure 13. Quantitative results vs NFEs for non-linear problems on Imagenet. Figure shows all four metrics as a function of NFEs for RePS (orange) and DAPS (blue) for all the non-linear problems on Imagenet dataset.
11

PSNR (↑) SSIM (↑) LPIPS (↓) FID (↓)
super-resolution
15
20
25
0.4
0.5
0.6
0.7
0.3
0.4
0.5
0.6
100
150
200
250
inpaint-box
18
20
0.6
0.65
0.7
0.75
0.2
0.25
0.3
0.35
150
200
250
inpaint-random
15
20
25
0.4
0.6
0.8
0.2
0.4
0.6
100
200
300
gaussian-deblur
23
24
25
26
0.55
0.6
0.65
0.7
0.25
0.3
0.35
100
150
200
motion-deblur
0 20 40 60
26
27
28
29
Time (sec)
0 20 40 60
0.65
0.7
0.75
0.8
Time (sec)
0 20 40 60
0.18
0.2
0.22
0.24
0.26
Time (sec)
0 20 40 60
60
80
100
120
Time (sec)
Figure 14. Quantitative results vs running time-per-sample for linear problems on Imagenet. Figure shows all four metrics as a function of running time-per-sample (seconds) for RePS (orange) and DAPS (blue) for all the linear problems on Imagenet dataset. All samples were generated on an NVIDIA A100-40GB GPU.
12

PSNR (↑) SSIM (↑) LPIPS (↓) FID (↓)
phase-retrieval
14
16
18
20
22
0.3
0.4
0.5
0.4
0.5
150
200
250
300
nonlinear-deblur
20
22
24
26
0.5
0.6
0.7
0.2
0.3
0.4
100
150
200
hdr
0 50 100 150
24
25
26
Time (sec)
0 50 100 150
0.8
0.82
0.84
Time (sec)
0 50 100 150
0.16
0.18
0.2
Time (sec)
0 50 100 150
40
45
Time (sec)
Figure 15. Quantitative results vs running time-per-sample for non-linear problems on Imagenet. Figure shows all four metrics as a function of running time-per-sample (seconds) for RePS (orange) and DAPS (blue) for all the non-linear problems on Imagenet dataset. All samples were generated on an NVIDIA A100-40GB GPU.
Phase Retrieval Nonlinear Deblur
Figure 16. Qualitative results for Phase Retrieval (left) and Nonlinear Deblur (right) on FFHQ. Three images are displayed for each example in the order: the ground truth, the measurement, a sample generated by RePS.
13

Inpaint (Box) Inpaint (Random)
Figure 17. Qualitative results for Inpaint-Box (Left) and Inpaint-Random (right) on FFHQ. Three images are displayed for each example in the order: the ground truth, the measurement, a sample generated by RePS.
Gaussian Deblur Motion Deblur
Figure 18. Qualitative results for Gaussian Deblur (left) and Motion Deblur (right) on FFHQ. Three images are displayed for each example in the order: the ground truth, the measurement, a sample generated by RePS.
14

Super Resolution HDR
Figure 19. Qualitative results for Super Resolution (left) and HDR (right) on FFHQ. Three images are displayed for each example in the order: the ground truth, the measurement, a sample generated by RePS.
15

GT Measurement Sample-1 Sample-2 Sample-3 Sample-4
Figure 20. Multiple generated samples for phase-retrieval. Here we show four samples generated from the same measurement for the phase-retrieval problem on FFHQ.
16

GT Measurement Sample-1 Sample-2 Sample-3 Sample-4
Figure 21. Multiple generated samples for box inpainting. Here we show four samples generated from the same measurement for the box inpainting problem on FFHQ.
17

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:43.515Z
- **Text Length:** 58580 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 27 of 27
