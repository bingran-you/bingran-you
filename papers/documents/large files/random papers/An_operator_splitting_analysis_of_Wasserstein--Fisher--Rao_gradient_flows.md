# PDF Document: Crucinio and Pathiraja - 2025 - An operator splitting analysis of Wasserstein--Fisher--Rao gradient flows.pdf

**File Path:** Crucinio and Pathiraja - 2025 - An operator splitting analysis of Wasserstein--Fisher--Rao gradient flows.pdf

**Processed Date:** 2026-02-10T18:18:15.173Z

**File Size:** 782.51 KB

**Total Pages:** 39

**Extracted Pages:** 39

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3382

**Title:** An operator splitting analysis of Wasserstein--Fisher--Rao gradient flows

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

An operator splitting analysis of Wasserstein–Fisher–Rao gradient
flows
Francesca Romana Crucinio∗1 and Sahani Pathiraja†2
1ESOMAS, University of Turin, Italy & Collegio Carlo Alberto, Turin, Italy 2School of Mathematics & Statistics, UNSW Sydney, Australia
Abstract
Wasserstein-Fisher-Rao (WFR) gradient flows have been recently proposed as a powerful sampling tool that combines the advantages of pure Wasserstein (W) and pure Fisher-Rao (FR) gradient flows. Existing algorithmic developments implicitly make use of operator splitting techniques to numerically approximate the WFR partial differential equation, whereby the W flow is evaluated over a given step size and then the FR flow (or vice versa). This works investigates the impact of the order in which the W-
 and FR operator are evaluated and aims to provide a quantitative analysis. Somewhat surprisingly, we show that with a judicious choice of step size and operator ordering, the split scheme can converge to the target distribution faster than the exact WFR flow (in terms of model time). We obtain variational formulae describing the evolution over one time step of both sequential splitting schemes and investigate in which settings the W-FR split should be preferred to the FR-W split. As a step toward-
s this goal we show that the WFR gradient flow preserves log-concavity and obtain the first sharp decay bound for WFR.
Contents
1 Introduction 2
2 Operator Splitting for the WFR PDE 3 2.1 Variational Formula: W-FR . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5 2.2 Variational Formula: FR-W . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7
3 Splitting & convergence speed: multivariate Gaussian case 8
4 Preservation of log-concavity of exact WFR 11
5 Convergence speed of Exact WFR: log-concave case 13
6 Splitting & convergence speed 15 6.1 Convergence speed: W-FR . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 15 6.2 Convergence speed: FR-W . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 16
7 Conclusion & Future Work 17
A Auxiliary lemmas 21
∗francescaromana.crucinio@unito.it F.R.C. gratefully acknowledges the “de Castro” Statistics Initative at the Collegio Carlo Alberto and the Fondazione Franca e Diego de Castro. F.R.C. is supported by the Gruppo Nazionale per l’Analisi Matematica, la Probabilit`a e le loro Applicazioni (GNAMPA-INdAM). †s.pathiraja@unsw.edu.au S.P. gratefully acknowledges funding from UNSW Faculty of Science Research Grant and the Eva Mayr Stihl Foundation.
1
arXiv:2511.18060v1 [stat.ML] 22 Nov 2025

B Splitting for multivariate Gaussian distributions 24 B.1 Moment ODEs and analytic solutions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 25 B.2 Derivation of (2.20) . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 29 B.3 Proof of Lemma 3.1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 31 B.4 Proof of Proposition 3.2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 32
C Preservation of log-concavity 33 C.1 Proof of Lemma 4.1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 33 C.2 Proof of Theorem 4.1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 36
1 Introduction
We consider the task of generating samples from a target probability distribution with density π(x) ∝ e−Vπ(x), x ∈ Rd known up to a normalisation constant. Despite the conceptual simplicity of this task, its efficient implementation when Vπ is multi-modal, the underlying space is high dimensional and/or modes are separated by large distances remains challenging. Given the broad application of sampling to (Bayesian) statistics and statistical machine learning, several avenues have been investigated-
 to derive efficient and scalable algorithms. A natural way to formulate this task is via gradient flows [AGS08], which can be seen as optimisation of a functional measuring the dissimilarity to π, typically the Kullback–Leibler (KL) divergence [Wib18]. This formulation yields considerable freedom in the design of sampling algorithms; arguably the most well-known being the so-called Wasserstein Gradient flows, hereafter W flows. It is well-known that when π satisfies a Log-Sobolev Inequality (LSI)-
, the W flow converges exponentially fast to π, with rate depending on the Log-Sobolev constant. This highlights an inherent limitation of W flows, namely that when the LSI constant is large (e.g. as is typically the case in multi-modal densities with well separated modes), the convergence rate can be prohibitively slow [Sch19]. Recent research efforts have instead considered gradient flows in the Fisher-Rao geometry (FR flow). These are well known in the biological literature as describing the ma-
croscopic properties of a population with varying traits or species, and is sometimes referred to as birth-death or replicator dynamics [Kim65, SS83, CHR06]. It is now known that FR flows are intimately connected to mirror descent [CCK24], stochastic filtering [Aky17, HG17, PW24, DM97] and Sequential Monte Carlo [CP25b]. The have also recently been exploited to develop sampling algorithms [Nu ̈s24, MM24, WN24, CHH+23, LSW23, LLN19], most notably due to the fact that it is possible to achieve conve-
rgence rates independent of the properties of Vπ [CCH+24, LLN19]. However, the development of stable and efficient numerical approximations of pure FR flows remains a challenge. In this work, we consider the so-called Wasserstein–Fisher–Rao (WFR) gradient flow, wherein the metric is given by the direct sum of the Wasserstein and Fisher-Rao metrics. We refer the reader to [LMS18] for a rigorous treatment of this metric and its corresponding gradient flow. WFR gradient flows combine the diffusive be-
haviour of W flows with the birth-death or reactive properties of FR flows and enjoy better convergence properties than both W and FR alone [LLN19, CHH+23]. They have a natural interpretation as combining ‘exploration’ or ‘mutation’ to provide new particles (W flow) with ‘selection’ where particles that are a poor fit to the target are killed [PW24]. The convergence properties of WFR flows have been theorised to improve on both W and FR flows, yet the best known results are obtained under strong c-
onditions on the ration between π and the initial distribution μ0 [LLN19, Appendix B] and [LSW23, Remark 2.6] and, as we show later, are not sharp. Research into WFR flows is active; several open questions and areas of investigation remain both in terms of algorithmic development and theoretical investigation. The structure of WFR gradient flows naturally lends itself to numerical methods built on operator splitting [HV03]. Splitting of the WFR PDE has been considered in several papers when derivi-
ng algorithms [CP25b, LSW23, LLN19] but without a precise characterisation of the effect of the splitting choice. Operator splitting has been previously exploited to build splitting schemes for the kinetic Langevin SDE arising from the W flow to obtain algorithms with no time discretisation bias [CLPW23] and methods with higher accuracy for fixed computational cost [LM13, BRO10]. Our work aims to show that splitting schemes can exhibit faster convergence to the target than the exact dynamics and t-
hus a wise choice of splitting can reduce computational cost.
2

In this work we focus on exact splitting, i.e. we do not consider numerical schemes to approximately solve the W and FR flow and their numerical errors but rather focus on the numerical error introduced by time discretisations via operator splitting. We demonstrate that numerical error introduced by operator splitting can be exploited to accelerate convergence to equilibrium. A particular advantage of this observation is that ordering of the operators does not affect computational cost, and thus -
speed up can be obtained at no additional cost and without introducing additional numerical approximations. This is particularly relevant when the computational budget is limited, as the speed up due to splitting is mostly observed in the early iterations. We thus claim that the continuous time process need not be the target of our numerical approximations but rather the splitting scheme which gives us the fastest convergence given π, μ0. This then paves the way for the development of practical nu-
merical algorithms (i.e. space-time discretisations) that approximate the operator split WFR flow rather than the fully coupled WFR gradient flow. There are a myriad schemes for numerically approximating both W [SKR19, SKL20, MMW+21] and FR [NVPB24, MM24, WN24, KP22, CHH+23] flows and we leave their detailed investigation to future work. Our main contributions are as follows:
• We derive variational formulae (PDEs) that quantify the impact of operator splitting as function of the step size (Section 2) and demonstrate that a carefully chosen operator splitting method can yield theoretical convergence rates that are faster than the fully continuous time WFR flow (Section 6) without increasing the computational cost.
• To do so, we obtain the first convergence result for the continuous time WFR flow which clearly shows that the rate of convergence is the sum of the rate of the W flow and that of the FR flow (Section 5). This result is obtained after establishing that the WFR preserves log-concavity thanks to the strong regularising properties of the FR flow (Section 4).
• We provide as motivation a precise quantitative characterisation in the multivariate Gaussian case (Section 3) which allows us to gain some intuition on general guidelines on the choice of initial distribution μ0 to obtain faster convergence (Section 6).
Notation We define some notation that will be used throughout the manuscript. For all differentiable functions f we denote the gradient by ∇f . Furthermore, if f is twice differentiable we denote by ∇2f its Hessian and by ∆f its Laplacian. We denote by P(Rd) the set of probability measures over B(Rd), and endow this space with the topology of weak convergence. We denote by P2ac(Rd) the manifold of absolutely
continuous probability measures on Rd with finite second moment. Every p ∈ P2ac(Rd) will be identified with
its (Lebesgue) density p(x). At a p ∈ P2ac(Rd) such that p(x) > 0 everywhere, the tangent space of P2ac(Rd)
is given by T = {σ ∈ C∞(Rd) : R σ(x) dx = 0}. If p has support supp(p) ⊊ Rd, then the tangent space is T = {σ ∈ C∞(Rd) : σ|supp(p)C = 0, R σ(x) dx = 0}. Throughout this manuscript we denote the target by π and assume π(x) ∝ e−Vπ(x). The initial distribution of each flow is denoted by μ0. The Kullback–Leibler divergence is defined for ν, μ admitting a density w.r.t. Lebesgue as KL(ν||μ) = R log(ν(x)/μ(x))ν(x)dx.
2 Operator Splitting for the WFR PDE
The gradient flow of KL(μ||π) w.r.t. the geometry induced by the Wasserstein–Fisher–Rao distance is given by the following PDE [LLN19, Theorem 3.1]
∂tμt = fW(μt) + fFR(μt), (2.1)
where
fW(μ) := ∇ · (μ∇g(μ)), (2.2)
fFR(μ) := −μ (g(μ) − Eμ [g(μ)]) , (2.3)
g(μ) := log μ
π . (2.4)
3

and fW and fFR correspond to the Wasserstein and Fisher–Rao operators respectively, and takes the form of a reaction-diffusion equation. This PDE is a combination of the Wasserstein (W) flow and of the Fisher–Rao (FR) flow and enjoys better convergence properties than both W and FR alone [LLN19, CHH+23]. The WFR PDE (2.1) corresponds to the underlying continuous time dynamics of many recent sampling methods as highlighted in [CP25b]. Recent methods involve using a variety of numerical schemes e.g-
. interacting particle based methods [LLN19, LSW23, CHH+23] and kernel based methods [MM24, Nu ̈s24, WN24]. A well-known approach to discretising PDEs involving sums of operators is operator splitting [HV03, BCM24] which has been applied to the W flow to split advection and diffusion and led to a vast number of numerical approximations of Langevin dynamics [AVZ15, DPZ17, CLPW23, LM13, BRO10]. Such operator splitting is particularly natural for the WFR PDE, where the W flow is characterised by adve-
ction and diffusion operators whilst the FR flow is characterised by reaction dynamics. Splitting of the WFR PDE has been considered in several papers when deriving algorithms [CP25b, LSW23, LLN19] but without a precise characterisation of the effect of the splitting choice. Throughout this manuscript, we focus on time discretisation of (2.1) via operator splitting under the assumption that the operators are evaluated exactly over a single time step, i.e. without further discretisations using eith-
er determinstic or Monte Carlo type approximations. Our motivation for doing so is to quantify biases due solely to splitting error, thereby giving rise to a new PDE which can potentially yield faster (continuous time) convergence rates than the original WFR PDE. This opens the door for the development and study of numerical schemes whose underlying dynamics correspond to the split WFR flow rather than its fully continuous time counterpart. In particular, we assume that the solution operator of th-
e W flow for a time step γ, SW(γ, v)(x), can be evaluated exactly. Similarly, we assume the solution operator of the FR flow given by (e.g. [CHH+23, Appendix B.1])
SFR(γ, v)(x) ∝ π(x)1−e−γ v(x)e−γ , (2.5)
can also be evaluated exactly. A commonly used first order accurate splitting method is sequential splitting or Lie-Trotter splitting (see, e.g., [BCM24] for a recent review), where each operator is solved over a step size in an alternating manner. More specifically, consider a time-discretisation t0 = 0 < t1 < t2 · · · < tM = T with tn+1 − tn = γ ∀ i = 1, 2, . . . M . A sequential splitting applied to (2.1) takes the form
νˆ1(x; γ) = SW(γ, μ0)(x)
ν1(x; γ) = SFR(γ, νˆ1)(x)
νˆ2(x; γ) = SW(γ, ν1)(x)
ν2(x; γ) = SFR(γ, νˆ2)(x)
...
(2.6)
where SFR(γ, v) and SW(γ, v) denote the solution operators corresponding to fFR(μ) and fW(μ) acting on v over time interval of size γ, respectively. We refer to (2.6) as Wasserstein then Fisher–Rao, or W-FR for short. It is known that the nth iterate of the splitting scheme (2.6), νn, converges to the solution of (2.1) at time t = nγ, μnγ, as γ → 0 (at rate O(γ)) under mild conditions on fFR, fW and π (see e.g. [HV03]). The splitting scheme in (2.6) corresponds to evaluating the W solution operato-
r first. A valid alternative sequential splitting scheme to (2.6) involves instead evaluating the FR solution operator first, i.e.
ηˆ1(x; γ) = SFR(γ, μ0)(x)
η1(x; γ) = SW(γ, ηˆ1)(x)
ηˆ2(x; γ) = SFR(γ, η1)(x)
η2(x; γ) = SW(γ, ηˆ2)(x)
...
(2.7)
We refer to (2.7) as Fisher–Rao then Wasserstein, or FR-W for short. When the operators SFR and SW do not commute, it is known that ηi(x; γ) ̸= νi(x; γ) for γ > 0 and i = 1, 2, 3, . . . [HV03]. It is expected that for most target distributions, SFR and SW will not commute; the following example demonstrates this occurs even in the multivariate Gaussian case.
4

In the remainder of the manuscript, we rely on the following assumptions on the target distribution π and the distribution at which the WFR PDE (2.1) is initialised μ0 in developing analytic results.
Assumption 1. The following conditions on the initial and target distribution hold
(a) π(x) ∝ e−Vπ(x) where Vπ is continuously differentiable with bounded Hessian, and satisfies a Log-Sobolev inequality (LSI): for all μ ∈ P2ac(Rd)
KL(μ||π) ≤ λπ
2
Z
μ ∇ log μ
π
2
:= λπ
2 I(μ||π), (2.8)
where λπ < ∞ denotes the Log-Sobolev constant of π and is I(μ||π) the relative Fisher information between μ and π;
(b) μ0(x) ∝ e−V0(x) where V0 is continuously differentiable with bounded derivative, satisfies an LSI with constant λ0 < ∞ and μ0 ≪ π.
Assumption 1–(a) implies that the Wasserstein flow targeting π, ∂tμt = fW(μt), is well defined and the solution of the corresponding PDE is absolutely continuous w.r.t. π for all t ≥ 0. The bounded Hessian requirement implies that ∇Vπ is Lipschitz continuous, we denote the Lipschitz constant by Lπ. Assumption 1–(b) is mild since μ0 is often user-chosen and guarantees that ∇V0 is Lipschitz continuous with constant L0. We further assume that the FR PDE ∂tμt = fFR(μt) and WFR PDE ∂tμt = fW(μt) + fFR(-
μt) are well-posed and that their solutions, where they exist, are absolutely continuous w.r.t. π. These assumptions guarantee that the solution operators SW, SFR are well-defined.
Remark 2.1. One could also apply a splitting scheme for pure W to split the advection and diffusion parts (leading to proximal samplers, see e.g. [Wib18, Section 4.2]). Similarly, one could also apply a splitting scheme to the pure FR flow by identifying an exploration step and an exploitation step as in [CHH+24, Section 4]. We leave analysis of these alternative splitting schemes for future work.
2.1 Variational Formula: W-FR
We begin by analysing the evolution obtained by using the splitting scheme in (2.6). In particular, we obtain a PDE which describes the evolution of the splitting solution over time interval [0, γ]. The advantage of this characterisation is that we can identify a perturbation to the exact dynamics and more easily characterise how splitting biases modify convergence speed. The traditional route to analysing decay of KL of the WFR dynamics in e.g. [CP25b, Proposition 3.1], [LSW23, Remark 2.6], [LLN1-
9, Appendix B] is not suited to the splitting schemes as it does not allow us to distinguish the order in which the W and FR solution operators are applied. The following proposition quantifies the variation of νγ with respect to the step size γ using standard variational calculus tools. For the sake of notational brevity, we rely on the shorthand notation νγ to refer to ν1(x; γ).
Proposition 2.2. Sequential split (W-FR) PDE: Let us denote νγ = ν1(x; γ) and let Assumption 1 hold. The variation of one sequential split step in the order W-FR (2.6) of size γ corresponds to the PDE
∂γ νγ = fW(νγ ) + fFR(νγ ) + (eγ − 1)νγ (|∇g(νγ )|2 − Eνγ [|∇g|2]), (2.9)
where g is as defined in (2.4).
Proof. Here we use the notation ργ to refer to the unnormalised form of νγ. Denote by fG the unnormalised FR operator,
fG(μ) := μ log π
μ.
The unnormalised sequential split solution (in the order W-FR) at time γ is given by
ργ = SG(γ, SW(γ, μ0)),
5

where SG(γ, v) denotes the abstract solution operator of ∂γργ = fG(ργ) initialised at v after time γ and SW(γ, v) denotes the solution operator of ∂γργ = fW(ργ). Using the chain rule, the first variation of ργ with respect to γ is (see also (3.4) in [DT13])
∂γ ργ = fG(ργ ) + ∂2SG(γ, vγ )fW(vγ ), (2.10)
where vγ := SW(γ, μ0) and ∂i denotes the directional derivative w.r.t. the i-th argument. Due to [CHH+23,
Appendix B.1], the solution operator SG has an explicit form given by SG(γ, v) = π1−e−γ ve−γ , so that ∂2SG(γ, v)h, i.e. the directional derivative w.r.t. the second argument v ∈ P2ac in the direction h ∈ T is easily computed as,
∂2SG(γ, v)h = d
dε SG(γ, v + εh)
ε=0
=d
dε π1−e−γ (v + εh)e−γ
ε=0 = e−γ π1−e−γ ve−γ −1h
= e−tSG(t, v)hv−1.
It is easy to see that ∂2SG(γ, v)h is a linear operator and that x 7→ ∂2SG(γ, v)(x) = e−t(π(x)/v(x))1−e−t is continuous if π, v are continuous and v(x) > 0. Substituting back into (2.10) yields
∂γ ργ = fG(ργ ) + e−γ SG(γ, vγ )fW(vγ )v−1
γ . (2.11)
Notice that the r.h.s can be written entirely in terms of ργ since SG is an invertible operator, with inverse given by
S −1
G (γ, v) = v = exp(eγ log(π−1+e−γ SG(γ, v))) = π1−eγ SG(γ, v)eγ ,
Since ργ = SG(γ, vγ) where vγ = SW(γ, μ0), we have using the above that,
vγ = π1−eγ ρeγ
γ.
Then fW(vγ) can be expressed in terms of ργ since, using the shorthand notation w := ∇ log ργ
π,
fW(vγ ) = ∇ · vγ ∇ log vγ
π
= eγ ∇ · π−eγ +1ρeγ
γw
= eγ (π−eγ +1∇ · ρeγ −1
γ ργ w + ρeγ
γ w · ∇(π−eγ +1))
= eγ (π−eγ +1ρeγ −1
γ ∇ · (ργ w) + π−eγ +1ργ w · ∇(ρeγ −1
γ ) + ρeγ
γ w · ∇(π−eγ +1))
= eγ π−eγ +1ρeγ −1
γ (fW(ργ ) + ρ2−eγ
γ w · ∇(ρeγ −1
γ ) + ργ πeγ −1w · ∇(π−eγ +1)
| {z }
=:R
),
and notice that R can be simplified further as
R = ργ ρ1−eγ
γ w · ∇(ρeγ −1
γ ) + πeγ −1w · ∇(π−eγ +1)
= ργ (eγ − 1)ρ−1
γ w · ∇ργ − w · (eγ − 1)π−1∇π + ∇ · w
= (eγ − 1)ργ|w|2,
so that
fW(vγ ) = eγ π−eγ +1ρeγ −1
γ (fW(ργ ) + (eγ − 1)ργ |w|2).
Substituting all the derived expressions back into (2.11) yields
∂γ ργ = fG(ργ ) + e−γ eγ π−eγ +1ρeγ −1
γ (fW(ργ ) + (eγ − 1)ργ |w|2)πeγ−1 · ρ1−eγ
γ
= fW(ργ ) + fG(ργ ) + (eγ − 1)ργ |w|2.
Then by an application of [CP25b, Lemma A.1] to obtain the PDE for the normalised density νγ, the claim holds.
6

The above proposition shows that splitting introduces a perturbation to the WFR PDE (2.1) of the form
fP(νγ ) := νγ |∇g(νγ )|2 − Eνγ
h
|∇g(νγ )|2 i
, (2.12)
where g is as defined in (2.4), whose contribution is modulated by an additional factor (eγ −1) which increases monotonically with step size γ. Somewhat remarkably, a simple splitting procedure is sufficient to generate an acceleration under certain conditions as we will show in Sections 3 and 6.
2.2 Variational Formula: FR-W
The reverse scheme described in (2.7) requires a more involved analysis than in Proposition 2.2, due to the lack of invertibility of SW in general. We instead rely on techniques used in developing Alekseev-Groebner type formulae, in particular, the formal Lie calculus, as is common in the analysis of operator splitting schemes [DT13, HV03]. Once again, we rely on the shorthand notation ηγ to refer to η1(x; γ).
Proposition 2.3. Sequential split PDE: FR-W. Let us denote ηγ = η1(x; γ) and let Assumption 1 hold. The variation of one sequential split step of size γ in the order FR-W (2.7) corresponds to the PDE
∂γ ηγ = fW(ηγ ) + fFR(ηγ ) +
Zγ
0
SW (γ − τ, −fP(ητ )) dτ, (2.13)
where fP is as defined in (2.12). An alternative representation is given by
∂γ ηγ = fW(ηγ ) + fFR(ηγ ) +
∞
X
k=1
γk
k! ηγ gk(ηγ ) − Eηγ [gk] , (2.14)
where
g0(ηγ) = −g(ηγ) = − log ηγ
π,
gk(ηγ ) = −g′
k−1fW(ηγ ) + ∇ log ηγ
π · ∇gk−1(ηγ ) + 1
ηγ
∇ · (ηγ∇gk−1(ηγ)), for k = 2, 3, . . .
and g′
k−1fW(ηγ) denotes the directional derivative of gk−1 at ηγ in the direction fW(ηγ).
Proof. By similar reasoning as in Section 2.1, the sequential split solution at time γ in the order FR-W is given by ηγ = SW(γ, SFR(γ, μ0)) and its first variation w.r.t. γ can be computed as
∂γ ηγ = fW(ηγ ) + ∂2SW(γ, uγ )fFR(uγ ), (2.15)
where uγ := SFR(γ, μ0). By Lemma 1 in [DT13] and recalling that SW is a linear operator for which ∂2SW(t, v)h = SW(t, h), we have
∂2SW(γ, uγ )fFR(uγ ) = fFR(SW(γ, uγ )) +
Zγ
0
∂2SW(γ − τ, uγ )[fW, fFR](SW(τ, uγ ))dτ
= fFR(ηγ ) +
Zγ
0
SW (γ − τ, [fW, fFR](SW(τ, uγ))) dτ, (2.16)
since SW is a linear operator and where [fW, fFR](v) refers to the Lie commutator (see (3.2a) in [DT13]),
[fW, fFR](v) = DFRfW(v) − DWfFR(v), (2.17)
= f′
WfFR(v) − f ′
FRfW(v) = v (g1(v) − Ev [g1]) , (2.18)
where DFR is the Lie derivative operator associated with fFR, i.e. DFRH(v) = H′(v)fFR(v) for any unbounded nonlinear operator H : X → T , X ⊂ P2ac and H′(v) denotes the Fr ́echet derivative operator evaluated at v. We note that while fW and fFR may not be Fr ́echet differentiable at any arbitrary v, their
7

directional derivative exists and is sufficient to define the Lie derivative, therefore we work with the directional derivative. With a slight abuse of notation, we use f ′
WfFR(v) in place of f ′
W(v)fFR(v). Substituting (2.16) into (2.15) yields that the variation of ηγ takes the form of the usual WFR PDE plus a perturbation term,
∂γ ηγ = fW(ηγ ) + fFR(ηγ ) +
Zγ
0
SW (γ − τ, [fW, fFR](SW(τ, uγ))) dτ, (2.19)
where [fW, fFR]SW(τ, uγ) ∈ T . Substituting in (A.6) developed in Lemma A.2 for the Lie commutator leads to (2.13). Finally, the perturbation term in (2.19) is characterised in Lemma A.1 using the repeated commutators Gk defined therein,
Zγ
0
SW (γ − τ, [fW, fFR](SW(τ, uγ))) dτ =
∞
X
k=1
γk
k! Gk(ηγ).
The result then follows using Lemma A.2.
The expression in (2.14) is obtained by writing the perturbation term in (2.13) using the Lie commutator in (2.17) and higher order commutators. We work with this formulation as the inverse of the solution operator does not lead to a tractable form, when it exists. A similar approach can be used to obtain the perturbation term in Proposition 2.2 with gk = |∇g|2 for all k = 1, 2, 3, . . . . We do not use this approach in the proof of Proposition 2.2 but exploit the invertibility of the unnormalised-
 FR solution operator. As Proposition 2.3 shows, the evolution of the splitting solution obtained with FR-W does not correspond to that obtained in Proposition 2.2 for W-FR. In the multivariate Gaussian setting, i.e. with μ0(x) = N (x; m0, C0) and π(x) = N (x; mπ, Cπ), a more interpretable PDE reminiscent of (2.9) can be obtained (see Appendix B.2 for a derivation),
∂γ ηγ = fW(ηγ ) + fFR(ηγ ) − ηγ gFRW(ηγ ) − Eηγ [gFRW(η)] , (2.20)
gFRW(η) := ∇g(η)⊤ Cπ
2 e2γC−1
π − I ∇g(η).
We investigate the multivariate Gaussian case in further detail in the next section.
3 Splitting & convergence speed: multivariate Gaussian case
The multivariate Gaussian case offers a tractable setting in which to obtain quantitative results on the impact of operator order in splitting of the WFR flow. More specifically, consider the case μ0(x) = N (x; m0, C0) and π(x) = N (x; mπ, Cπ) with Cπ ̸= C0. It can be readily shown that the solution of the WFR PDE (2.1) at any t > 0 is also Gaussian μt(x) = N (x; mt, Ct) with moments given by
Ct = Cπ + (eΓt[(C0 − Cπ)−1 + (2I + Cπ)−1]eΓt − (2I + Cπ)−1)−1, (3.1)
mt = mπ + (Ct − Cπ)etC−1
π (C0 − Cπ)−1(m0 − mπ), (3.2)
where Γ := Cπ−1 + 1
2 I. A derivation of (3.1)-(3.2) can be found in Lemma B.2 (letting Mt = 0), which
extends the derivation of C−1
t provided in [LMTZ25]. To the best of our knowledge, the analytic solution for mt provided in (3.2) has not yet appeared in the literature. Similarly, the splitting schemes yield Gaussian solutions at each time, as it is well-known that both W and FR flows preserve Gaussianity. We denote by bnγ, Qnγ the mean and covariance respectively at step n of the W-FR split scheme with step size γ and anγ, Pnγ the mean and covariance at step n of the FR-W split. We write bγ, Qγ and aγ, Pγ when n = 1. The si-
milarity in structure of the sequential split PDEs (2.9) and (2.20) in the Gaussian setting also allows for obtaining analytic solutions of the mean and covariance in a similar fashion. By an application of Lemma B.2 with γ in place of t and setting Mγ = (eγ − 1)I, one obtains
Qγ = Cπ + (eΓγ (C0 − Cπ)−1eΓγ + (eγ − 1)C−1
π )−1, (3.3)
bγ = mπ + (Qγ − Cπ)eγC−1
π (C0 − Cπ)−1(m0 − mπ). (3.4)
8

for the mean bγ and covariance Qγ of a single step of W-FR of size γ. Similarly, setting Mγ = − 1
2 Cπ (e2γC−1
π−
I) in Lemma B.2 yields
Pγ = Cπ + eΓγ (C0 − Cπ)−1eΓγ + (eγ − 1)C−1
π e2γC−1
π
−1
(3.5)
aγ = mπ + (Pγ − Cπ)eγC−1
π (C0 − Cπ)−1(m0 − mπ). (3.6)
for the mean aγ and covariance Pγ of a single step of FR-W of size γ. The structure of the mean for both splitting schemes is exactly the same as that obtained for the exact WFR flow with Ct replaced by Qγ, Pγ respectively. This demonstrates that in the Gaussian case the speedup due to splitting is driven primarily through the improvement in covariance estimation. In particular, notice the difference in structure between Ct vs Qγ and Pγ. The difference due to operator ordering is more
subtle, as Qγ and Pγ differ only by a single factor e2γC−1
π . As will be shown later in this section, this factor does not necessarily lead to acceleration in all cases, and depends on the relationship between μ0 and π. In order to compare the continuous evolution given by (3.1)-(3.2) with that given by the discrete time splitting schemes we consider mnγ, Cnγ, the mean and covariance respectively at time t = nγ under the exact WFR flow. We will thus compare mnγ, Cnγ with the mean and variance of the W-FR (and FR-W) split at step n with step size γ. Befor-
e presenting the main analytic results, consider Figure 3.1 which compares KL distance from π after a single sequential split step and the same for the exact WFR in the univariate Gaussian setting. More specifically, it shows KL(νγ||π) − KL(μγ||π) (blue line) and KL(ηγ||π) − KL(μγ||π) (red line) for a single sequential split step as a function of step size γ. The KL is calculated exactly using the formula for Gaussians (B.24) and mean and covariance using the equations above. We consider the case -
where the target is more diffuse than the initial distribution (left plot, Cπ = 100, mπ = 20, C0 = 1, m0 = 0) and the opposite case (right plot, Cπ = 1, mπ = 20, C0 = 100, m0 = 0). Figure 3.1 shows that the improvement in KL due to splitting for larger γ depends on the both the order of the operators and the on the relationship between the target and initial distribution. Specifically, in the univariate Gaussian case, when the target variance is larger than the initial variance, the ordering W-FR -
leads to a speed-up over the exact dynamics for all γ > 0 see Figure 3.1 left panel. As expected for γ large enough, the difference approaches zero as both the W and FR flows individually have been evaluated for a sufficiently long time so that the resulting densities are close to π. Conversely, when the target variance is smaller than the initial variance the ordering FR-W is superior, see Figure 3.1 right panel. These numerical results are somewhat intuitive; if π is more diffuse than μ0, applyi-
ng the W operator first allows to increase variance and transform the initial distribution into a more diffuse one; if instead π is more concentrated than μ0 applying the FR operator first allows to shrink the variance and returns a more concentrated distribution since the ratio π/μ0 will be small over most of the support. We will make this intuition more precise in the remainder of this section and extend to the multivariate Gaussian case, where we show that the difference in initial and target m-
eans plays a role also. As a first step, we present an equality for the continuous time KL decay for the WFR PDE (2.1), which to the best of our knowledge is missing from the literature. Existing KL bounds for more general π developed in the literature are not as tight as discussed in Section 5, see e.g. Figure 5.1(left). The exact covariance and mean evolution in (3.4)-(3.3) for the W-FR split and (3.6)-(3.5) for the FR-W split can be used in a recursive fashion to characterise the decay of KL di-
stance to π of the split schemes compared to the exact WFR flow. We will make use of the following quantities throughout,
En := Cnγ − Cπ; Eβ
n := Qnγ − Cπ; Eα
n := Pnγ − Cπ; (3.7)
εn := mnγ − mπ; εβ
n := bnγ − mπ; εα
n := anγ − mπ. (3.8)
Consider Figure 3.2 which shows the ratio of Split KL to exact WFR KL for a 10D Gaussian target (see Appendix B [CP25a] for details) with γ = 0.7. For this particular case, the W-FR scheme offers a speed-up over the exact dynamics, where KL from the split scheme is ≈ 60% of KL in the exact case for large t. Conversely, a FR-W scheme leads to a reduction in convergence speed (see Figure 3.2 (right)). Importantly, while the ratio stabilises at approximately 1.8, both KL(ηn||π) and KL(μnγ||π) approac-
h zero so that there is no asymptotic bias.
9

0123456
0.6
0.4
0.2
0.0
0.2
0.4
0.6 W-FR FR-W
γ
Split KL − KL(μγ||π)
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7
0.8
0.6
0.4
0.2
0.0
0.2
0.4
0.6
0.8 W-FR FR-W
γ
Split KL − KL(μγ||π)
mπ = 20, Cπ = 100, m0 = 0, C0 = 1 mπ = 20, Cπ = 1, m0 = 0, C0 = 100
Figure 3.1: Difference in KL for a single time step γ for W-FR split and FR-W on 1D Gaussians. Left: Target more diffuse than initial distribution (mπ = 20, Cπ = 100, m0 = 0, C0 = 1). Right: Target more concentrated than initial distribution (mπ = 20, Cπ = 1, m0 = 0, C0 = 100).
In the remainder of this section, we characterise KL decay and the properties giving rise to acceleration/deceleration. The following result characterises KL decay as a function of n for the exact and sequential split schemes in the multivariate Gaussian case. The proof can be found in Appendix B.3.
Lemma 3.1. KL decay, multivariate Gaussian. Consider the multivariate Gaussian setting, i.e. μ0(x) = N (x; m0, C0) and π(x) = N (x; mπ, Cπ) with C0, Cπ strictly positive definite and C0 ̸= Cπ. Recall μnγ is the solution of (2.1) at time t = nγ and νn is the solution of the W-FR split scheme at step n with step size γ. Assume the exact WFR (2.1), W-FR split scheme (2.6) and FR-W split scheme (2.7) are initialised with the same C0, m0 (i.e. E0, ε0 fixed across methods), so that μ0 = ν0 = η0. In part-
icular, assume that E0 is either strictly negative definite or strictly positive definite. Recall Γ := Cπ−1 + 1
2 I. Define also the functional
φn(A) := 1
2
h
− log det(I + C−1
π A) + T r[C−1
π A] + ε⊤
0 E−1
0 enγC−1
π AC−1
π AenγC−1
π E−1
0 ε0
i
,
where A denotes any d × d symmetric matrix and the matrix operator
Jn(B) = e−nγΓ E−1
0 + B C−1
π (I − e−2nγΓ) −1 e−nγΓ,
for any B ∈ Rd×d. Then the following holds for all n = 1, 2, 3, . . . ,
1. The solution of the exact WFR PDE (2.1) at time t = nγ satisfies
KL(μnγ||π) = φn(En), (3.9)
En = Jn(Ω), (3.10)
Ω := 1
2 Γ−1. (3.11)
2. The recursive solution of the W-FR split PDE in Proposition 2.2 after n time steps of size γ satisfies
KL(νn||π) = φn(Eβ
n ), (3.12)
Eβ
n = Jn(Ωβ), (3.13)
Ωβ := (1 − eγ )(I − e2γΓ)−1. (3.14)
3. The recursive solution of the FR-W split PDE in Proposition 2.3 after n time steps of size γ satisfies
KL(ηnγ ||π) = φn(Eα
n ), (3.15)
Eα
n = Jn(Ωα), (3.16)
Ωα := (1 − eγ )(I − e2γΓ)−1e2γC−1
π = (1 − eγ )(e−2γC−1
π − eγ )−1. (3.17)
10

Lemma 3.1 shows that the change in KL decay due to splitting is, as discussed previously, entirely due to differences in covariance estimation. Despite the considerable difference in structure of Cγ vs Qγ or Pγ (c.f. (3.1) with t = γ and (3.3), (3.5)), the n-step iterations lead to expressions that more clearly highlight similarities between the exact and sequential splitting. More specifically, notice that the difference quantities En and Enβ, Enα are identical up to the Ω and Ωβ, Ωα factors. Th-
is brings us to our main result of this section, the proof of which can be found in Appendix B.4. It quantifies acceleration or deceleration over the exact WFR dynamics due to splitting in terms of KL decay.
Proposition 3.2. Convergence speed, multivariate Gaussian. Assume the same conditions as in Lemma 3.1. Then the following holds:
(i) Suppose E0 ≻ 0. Then En ≻ 0, Enβ ≻ 0 and Enα ≻ 0 for all n = 1, 2, 3 . . . .
(ii) Suppose E−1
0 Cπ ≺ −Ω, E−1
0 Cπ ≺ −Ωβ and E−1
0 Cπ ≺ −Ωα. Then En ≺ 0, Enβ ≺ 0 and Enα ≺ 0 for all n = 1, 2, 3, . . . .
(iii) Assume the conditions of (i) or (ii). Then the asymptotic (large n) ratio of the KL distance to π of the W-FR split scheme solution with respect the solution of the exact WFR is given by
nli→m∞
KL(νn||π)
KL(μnγ ||π) = p1⊤(E−1
0 Cπ + Ωβ )−1D0(E−1
0 Cπ + Ωβ )−1p1
p1⊤(E−1
0 Cπ + Ω)−1D0(E−1
0 Cπ + Ω)−1p1
, (3.18)
where Ω and Ωβ are as defined in (3.11) and (3.14) respectively, p1 is the eigenvector corresponding to the smallest eigenvalue of Γ and D0 := E−1
0 ε0ε0⊤E−1
0 Cπ. Likewise, for the FR-W split scheme, the
same limiting ratio for KL(ηnγ||π)
KL(μnγ||π) holds with Ωβ replaced by Ωα as defined in (3.17).
Notice that in dimension 1, the limiting ratio in (3.18) is independent of ε0, so that the speed-up depends only on the initial covariance relative to the target covariance. In particular, in the 1-dimensional case if C0 > Cπ then FR-W will converge faster than the exact WFR dynamics, conversely, if Cπ > C0 then W-FR will be faster. In the multivariate case however, the squared mean difference εε⊤ plays an important role also.
t=n×γ
Split KL(νn||π)
KL(μnγ ||π)
t=n×γ
Split KL(ηn||π)
KL(μnγ ||π)
W-FR vs Exact FR-W vs Exact
Figure 3.2: Left: Ratio of KL from n-step W-FR scheme to KL from exact WFR as a function of t = n × γ, π is a 10D Gaussian (see Appendix B [CP25a] for details) and γ = 0.7. The horizontal black line corresponds to (3.18). For reference, KL(μ4.2||π) = 9.7. Right: Same as left but for FR-W scheme.
4 Preservation of log-concavity of exact WFR
The previous section shows that, in the Gaussian case, splitting schemes can speed up convergence provided μ0 is chosen wisely.
11

In order to generalise this result to say, log-concave target distributions, we first provide a result demonstrating that log-concavity is preserved under the evolution of the exact WFR flow (2.1). Recall that for any log-concave μ0, preservation of log-concavity uniformly in time under the W flow is guaranteed only for π Gaussian (i.e. for Ornstein-Uhlenbeck Semigroups) due to [Kol01]. This is in stark contrast to the FR flow, where log-concavity is preserved uniformly in time for any strongly l-
og-concave π and μ0 (see Lemma C.1). With some stronger conditions on μ0 and π, as detailed in Assumptions 2 and 3, we establish preservation of log-concavity under the W flow for a limited time horizon, using similar arguments as in [PRS21, Section 7.2] (in the context of stochastic filtering) and Lemma 16 in [LMW25]. We first state the necessary assumptions:
Assumption 2. In addition to Assumption 1, the following conditions hold
(a) π(x) ∝ e−Vπ(x) is απ-strongly log-concave and Lπ-smooth, i.e. there exists an Lπ ≥ απ > 0 such that LπI ⪰ ∇2Vπ(x) ⪰ απI for all x ∈ Rd;
(b) μ0(x) ∝ e−V0(x) is α0-strongly log-concave and L0-smooth, i.e. there exists an L0 ≥ α0 > 0 such that L0I ⪰ ∇2V0(x) ⪰ α0I for all x ∈ Rd.
Assumption 3. Given Assumption 2, the following conditions hold
(a) V0 − (1+δ)
2 Vπ is strongly convex with parameter αd > 0 for some specified 0 < δ < 1.
(b) Denote by R := −∆Vπ +|∇Vπ|2. Also define H := R+Vπ. Assume H is strongly convex with parameter αh > 0. This implies that
∇2R ⪰ (αh − Lπ)I,
where αh − Lπ < 0.
The next lemma gives the precise statement of the time horizon over which the W flow is guaranteed to preserve strong log-concavity. The proof can be found in Appendix C.1.
Lemma 4.1. W flows preserve log-concavity over a fixed time horizon. Suppose μt is the solution of the W flow (2.2) at time t, initialised at μ0(x) satisfying Assumption 3. Let b := p|αh − Lπ|. Then there exists a t∗ > 0 such that for all t < t∗, μt(x) ∝ e−Et(x), with Et(x) a strongly convex function,
∇2Et(x) ⪰ απ
2 + ct I, ∀ x ∈ Rd, (4.1)
ct = b tan tan−1 c0
b − bt > 0, (4.2)
c0 = αd + δ
2 απ. (4.3)
Firstly, notice that in Lemma 4.1, we consider the case where αh − Lπ < 0, since αh > Lπ implies R is strongly convex. Strong convexity of R would imply uniform in time convexity of μt by similar techniques as in the proof of Lemma 4.1, which is not guaranteed unless π is Gaussian due to [Kol01]. The length of the time horizon over which strong convexity is preserved also depends on the log-concavity of the difference between initial and target potentials. In the next theorem, we show that the pre-
servation of log-concavity under the FR flow can be exploited to ensure the same for the WFR flow, uniformly in time. The proof of the theorem can be found in Appendix C.2.
Theorem 4.1. WFR preserves log-concavity uniformly in time. Assume the conditions of Lemma
4.1 and that b :=
q
|αh−Lπ |
2 satisfies
b2 < απ
2 . (4.4)
Then μt, the solution of (2.1) at time t is αt-strongly log-concave for all t > 0, where
αt = απ
2 + c∞,1 − c∞,2l0e−t(c∞,1−c∞,2)
1 − l0e−t(c∞,1−c∞,2) , (4.5)
12

0 2 4 6 8 10
t
0.0
0.2
0.4
0.6
0.8
1.0
t
Exact WFR Theorem 4.1
0 2 4 6 8 10
t
0.2
0.4
0.6
0.8
1.0
t
Exact WFR Theorem 4.1
0 2 4 6 8 10
t
0.3
0.4
0.5
0.6
0.7
0.8
0.9
1.0
t
Exact WFR Theorem 4.1
Figure 4.1: Comparison of the log-concavity constant predicted by Theorem 4.1 and the true log-concavity constant obtained from (3.1) for a 1D Gaussian with μ0(x) = N (x; , 0, 1) and π(x) = N (x; , 0, 100) (left), π(x) = N (x; , 0, 5) (middle), π(x) = N (x; , 0, 2.1) (right). For Cπ ≤ 2 the assumptions of Theorem 4.1 are not satisfied.
and
l0 = (c0 − c∞,1)
(c0 − c∞,2) ; c∞,1 = −1 + p1 + 4( απ
2 − b2)
2 ; c∞,2 = −1 − p1 + 4( απ
2 − b2)
2;
and c0 is given by (4.3).
The tightness of the constants (4.5) is evaluated empirically for the 1D Gaussian case in Figure 4.1 where the true constants are known. As can be seen there, for a sufficiently large difference in convexity of the initial and target potentials, the constants (4.5) are reasonably tight (c.f. left vs right). We will rely on the results of Theorem 4.1 in the next section to characterise KL convergence rates.
5 Convergence speed of Exact WFR: log-concave case
The rate of decay of KL for the WFR flow is obtained considering the time derivative of KL(μt||π) along the WFR flow
d
dt KL(μt||π) =
Z
log μt
π ∂tμt = −
Z
μt|∇ log μt
π |2 − Varμt
h
log μt
π
i
. (5.1)
As observed in [GM17, page 13], the first term corresponds to the negative gradient of KL w.r.t. the Wasserstein-2 metric, while the remaining terms give the negative gradient of KL w.r.t. the Fisher–Rao geometry, implying that the dissipation for the WFR metric is the sum of the W and the FR dissipation. As a consequence, the convergence rate of WFR gradient flow (2.1) can be upper bounded by
KL(μt||π) ≤ min KL(μFR
t |π), KL(μW
t |π) , (5.2)
where μtFR, μtW denote the solutions of the FR and W flow PDEs respectively. A bound on the decay of KL
along the W flow can be obtained if π satifies an LSI (2.8) (e.g., [CEL+24]). Decay of KL along the FR flow at rate O(e−t) is guaranteed under boundedness conditions on the score log π/μ0 ([CHH+23, Theorem 4.1] and [LSW23, Proposition 2.4]). A sharper rate of converge for WFR can be obtained assuming log π(x)/μ0(x) ≥ M and a warm-start condition [LLN19, Appendix B]
KL(μt||π) ≤ e−(2λ−1
π +(2−3δ))(t−t0)KL(μ0||π), (5.3)
for all t ≥ t0 := log(M/δ3) and δ > 0.
13

We point out that neither (5.2) nor (5.3) provide a sharp rate of decay for KL(μt||π). In fact, (5.2) shows that the rate of WFR is never worse than that of W or FR, looking at (5.1) however it is evident that the rate of decay of the WFR flow should be considerably higher than that of the two singular flows. Similarly, (5.3) shows that the decay in the case of the WFR flow is faster than that of the W flow but the rate depends on an arbitrary constant δ which makes (5.3) harder to interpret. In -
Proposition 5.1, we obtain a result that shows the decay rate is indeed the sum of the W and FR rates, but for the symmetrised KL, not KL. The symmetrised KL divergence, or Jeffrey’s divergence J, is defined as
J(μ, π) := KL(μ||π) + KL(π||μ),
for any μ ≪ π and also π ≪ μ . The rationale behind considering the symmetrised KL is due to the fact that the KL is not geodesically convex under the FR flow [CCH+24, Theorem 1.1] nor satisfies a gradient dominance condition [CCH+24, Theorem 4.1], which makes its convergence analysis more difficult. On the other hand, Jeffrey’s divergence satisfies a gradient dominance condition [CCH+24, Section 4] which allows to achieve improved rates. In addition, J(μ, π) upper bounds KL(μ||π) and thus the obt-
ained rates for J(μ, π) gives information on the decay of KL too. The Kl decay rate obtained in Proposition 5.1 is a sum of the decay rates of W and FR flow, conjectured by [DEP23] but not yet proven in the literature. Theorem 4.1 immediately provides sufficient conditions to establish an exponential decay result of the symmetrised KL divergence, or Jeffrey’s divergence J. The proof makes use of recent functional inequality results on pure FR flows [CCH+24, Section 4] and provides a sharper rate o-
f convergence than the results available in the literature (Figure 5.1).
Proposition 5.1. Let Assumption 2 hold. Then the following decay result holds for μt the solution of the WFR PDE (2.1) for all t > 0
J (μt, π) ≤ J (μ0, π)e−tκ,
where κ = 2 min(απ, αt) + 1 and αt is given in Theorem 4.1.
Proof. Assuming valid interchange of differentiation and integration,
d
dt J(μt, π) =
Z
log μt
π−π
μt
(x)∂tμt(x)dx
=
Z
log μt
π−π
μt
(x) (fW(μt(x)) + fFR(μt(x))) dx. (5.4)
Begin with the first term, by a standard integration by parts argument,
Z
log μt
π−π
μt
fW(μt)dx = −
Z
log μt(x)
π(x) − π(x)
μt(x) ∇ · μt(x)∇ log μt
π (x) (x)dx (5.5)
= −Eμt ∇ log μt
π
2
− Eπ
h
∇ log μt
π · ∇ log μt
π
i
= −(I(μt||π) + I(π||μt))
≤ −2 min(λ−1
π , λ−1
μt )(KL(μt||π) + KL(π||μt))
= −2 min(απ, αt)J (μt, π),
where I(μt||π) is the relative Fisher information between μt and π. The last inequality holds due to Assumption 2 and Theorem 4.1. More specifically, since π is απ-strongly log-concave, it immediately satisfies a Log-Sobolev inequality (2.8) with constant λπ = απ−1 (likewise for μt, which is αt-strongly log-concave due
to Theorem 4.1). Then for the second term in (5.4), by a direct application of (5.16) in [CCH+24, Theorem 5.6] with f (y) = y log(y) and f ̄ = yf (y−1), it holds that
−
Zπ
μt
fFR(μt)dx ≤ −J (μt, π)l,
14

and also,
Z
log μt
π fFR(μt)dx = −Varμt log μt
π < 0,
so that together, we have
Z
log μt
π−π
μt
fFR(μt)dx ≤ −J (μt, π). (5.6)
An application of Gr ̈onwall’s lemma then yields the result.
0 2 4 6 8 10
t
0.0
0.5
1.0
1.5
2.0
2.5
3.0
3.5
KL
Exact WFR (5.3) (5.2)
0 2 4 6 8 10
t
0
50
100
150
200
250
J
Exact WFR Proposition 5.1
Figure 5.1: Comparison of exact KL decay (left) and symmetrised KL decay (right) for a 1D Gaussian with mπ = 20, Cπ = 100, m0 = 0, C0 = 1. Left plot: We compare the exact decay of KL from Proposition 3.2 with the rates in (5.2) and (5.3) with δ = 0.1, t0 = 6.9. Right plot: We compare the exact decay of the symmetrised KL obtained using the mean and covariance evolution in (3.1)–(3.2) with the rate in Proposition 5.1.
6 Splitting & convergence speed
Existing KL decay results for the W flow and FR flow developed in the literature cannot be straightforwardly utilised to characterise differences in convergence speed between the W-FR and FR-W scheme. In particular, combining existing exponential decay bounds for the KL divergence for the W part and the FR part would not allow us to isolate changes to convergence speed depending on the order as the exponents simply add (and commute). Hence, the first variation results developed in Proposition 2.2 -
and 2.3 will be critical in characterising how convergence speed is affected due to splitting, and the ordering of operators. We utilise the variational formulae (2.9) and (2.14) to tighten the upper bound on the KL. We focus on one single split step of size γ > 0 and consider the classical KL divergence KL(μ||π), as a first step.
6.1 Convergence speed: W-FR
We first focus on the PDE (2.9) due to its easier form. It is possible to obtain a KL decay ODE by a straightforward calculation using (2.9), integration by parts, the sufficient tail decay of νγ and π guaranteed by Assumption 1 and assuming sufficient regularity to interchange differentiation and integration. Consider one step of the W-FR splitting (2.6) of size γ > 0. Recall the split W-FR PDE in Proposition 2.2
∂γ νγ = fW(νγ ) + fFR(νγ ) + (eγ − 1)fP(νγ ),
where fP is in (2.12). Then, we have
d
dγ KL(νγ||π) =
Z
log νγ(x)
π(x) (fW(νγ(x)) + fFR(νγ(x)) + (eγ − 1)fP(νγ(x))) dx (6.1)
= −I(νγ||π) − Varνγ
h
log νγ
π
i
+ (eγ − 1)Covνγ log νγ
π , ∇ log νγ
π
2
,
15

where I(νγ||π) is the relative Fisher information. It is clear that the behaviour of KL decay for the W-FR split will depend on the perturbation term
Covνγ g(νγ), |∇g(νγ)|2 . This quantity measures the covariation between the log density ratio (when it is
pointwise positive, it means that the current density is larger than the target density) and the squared score
function (or magnitude of the score function), which is large in regions where the ratio νγ(x)
π(x) varies rapidly. In fact, if the log-ratio and the score are strongly negatively correlated, it is this negative correlation that
contributes to Covνγ g(νγ), |∇g(νγ)|2 being negative and driving the speed-up. In the below Lemma, we
list conditions under which this covariance is negative. We emphasise that these conditions are sufficient, and establishing similar results for more relaxed conditions is left for future work. Given that a similar speed-up can be achieved for a 1D Gaussian mixture target (see Figure 1 (right) in [CP25a]), we expect this to be possible. However, we emphasise that negativity of the perturbation term is not sufficient to guarantee a speedup, uniformly in time. A more precise characterisation, e.g. v-
ia comparison theorems, would require a lower-bound on the decay rate of the KL. This aspect is left for future work.
Lemma 6.1. The following results hold.
(i) [CP25a, Proposition 2] Consider ν(x) = N (x; b, Q) and π(x) = N (x; mπ, Cπ). If Q ≺ Cπ then
Covν g(ν), |∇g(ν)|2 < 0.
(ii) Denote h(x) := −g(ν(x)). Assume h is symmetric and ∇2h ⪰ αI. Then Covν g(ν), |∇g(ν)|2 < 0.
Proof. We assume w.l.o.g. that h is symmetric about 0 and that h ≥ 0 since it is strongly convex and thus lower bounded. Since h and |∇h|2 are both decreasing in R− and both increasing in R+ we can apply Chebyshev’s integral inequality (e.g. [EGW09]) to each interval and obtain
Z
ν(x)h(x)|∇h(x)|2dx = 1
ν(R−)
Z
R−
ν(x)h(x)|∇h(x)|2dx + 1
ν(R+)
Z
R+
ν(x)h(x)|∇h(x)|2dx
≥1
ν (R− )2
Z
R−
ν(x)h(x)dx
Z
R−
ν(x)|∇h(x)|2dx
+1
ν (R+ )2
Z
R+
ν(x)h(x)dx
Z
R+
ν(x)|∇h(x)|2dx.
Due to the symmetry of h we have R
R+ ν(x)h(x)dx = R
R− ν(x)h(x)dx and similarly for |∇h|2. Using the fact
that ν(R+), ν(R−) ≤ 1 since ν ∈ P2ac(Rd), we finally have
Z
ν(x)h(x)|∇h(x)|2dx ≥
Z
ν(x)h(x)dx
Z
ν(x)|∇h(x)|2dx.
Recalling that g = −h, the result follows.
Inequalities of the form Covν(α(X), β(X)) < 0 for general measures μ and functions α, β are an active area of research [EGWZ11, BHS24, EGW09, SW14] and we believe that bounds obtained from (6.1) can inform the choice of splitting to choose for a given pair of target π and initial distribution μ0 provided these inequalities are obtained.
6.2 Convergence speed: FR-W
Similarly to the W-FR we can use the split PDE (2.14) to quantify the differen in KL decay due to splitting over one step of size γ > 0. Consider one step of the FR-W splitting (2.7) of size γ > 0. We have
d
dγ KL(ηγ||π) =
Z
log ηγ(x)
π(x) fW(ηγ(x)) + fFR(ηγ(x)) +
Zγ
0
SW (γ − τ, −fp(ητ )) (x)dτ dx
= −I(ηγ||π) − Varηγ
h
log ηγ
π
i
−
Zγ
0
Covητ SW (γ − τ, g(ηγ)) , |∇g(ητ )|2 dτ.
16

In the below Lemma, we list conditions under which
Zγ
0
Covητ SW (γ − τ, g(ηγ)) , |∇g(ητ )|2 dτ > 0. (6.2)
Lemma 6.2. Let g(ητ (x)) be symmetric with ∇2g(ητ ) ⪰ ατ I for all τ ∈ [0, γ]. Then (6.2) holds.
Proof. We assume w.l.o.g. that g(ητ ) is symmetric about 0 and that g(ητ ) ≥ 0 since g(ητ ) is strongly convex and thus lower bounded. Recall that
SW(t, v)(x) =
Z
(4πt)−d/2 exp − |x − y − R t
0 ∇ log π(Xs)ds|2
4t
!
v(y)dy,
where (Xt)t≥0 solves dXt = ∇ log π(Xt)dt + √2dWt. It follows that SW (γ − τ, g(ηγ)) ≥ 0 is also symmetric about 0. Proceeding as in the proof of Lemma 6.1 gives Covητ SW (γ − τ, g(ηγ)) , |∇g(ητ )|2 > 0 from which the result follows.
7 Conclusion & Future Work
Operator splitting methods lie at the heart of many gradient flow based algorithms, in particular, for discretisations of the Wasserstein–Fisher–Rao gradient flow. We examine errors introduced by splitting schemes whereby the Wasserstein and Fisher–Rao operators are solved separately (and exactly). We develop variational formulae for the split schemes and identify a perturbation which modifies the dynamics. It is demonstrated that the order in which these operators are evaluated can have a conside-
rable impact on convergence speed, without affecting π-invariance. This impact is unsurprisingly more pronounced when the chosen step size is large, but not so large that it is nearly equivalent to evaluating either the Wasserstein or Fisher-Rao flow alone. In practical terms, this means that a sequence of alternating operators with a fixed step size γ can be re-arranged (e.g. such that m consecutive steps of size γ of the same operator are evaluated) in order to reduce time to convergence, with n-
o extra computational burden. We focus primarily on characterising this behaviour in the Gaussian case and then more broadly in the strongly log-concave case, showing that although the exact Wasserstein–Fisher–Rao flow preserves logconcavity uniformly in time, under some conditions. Decay rates of the exact WFR flow are then characterised in terms of the symmetrised KL, using the derived log-concavity constants and new functional inequalities for Fisher–Rao flows in [CCH+24]. There are several ave-
nues for future work, including (but not limited to) 1) quantifying the impact of further space and time discretisations of the W and FR flows, which are currently assumed to be evaluated exactly; 2) using the derived results to develop adaptive step size splitting schemes and to determine which ordering is preferrable and finally 3) in more precisely quantifying the acceleration/deceleration of symmetrised KL due to splitting.
Acknowledgements The authors would like to thank Josh Bon, Sam Power, Florian Maire, Daniel Paulin, Upanshu Sharma for helpful discussions and in particular Sinho Chewi for pointing to reference [Kol01] and Andre Wibisono for directing us to Lemma 16 in [LMW25].
References
[AGS08] Luigi Ambrosio, Nicola Gigli, and Giuseppe Savar ́e. Gradient flows: in metric spaces and in the space of probability measures. Springer Science & Business Media, 2008.
[Aky17] O ̈ mer Deniz Akyildiz. A probabilistic interpretation of replicator-mutator dynamics. arXiv preprint arXiv:1712.07879, 2017.
17

[AVZ15] Assyr Abdulle, Gilles Vilmart, and Konstantinos C Zygalakis. Long time accuracy of Lie–Trotter splitting methods for Langevin dynamics. SIAM Journal on Numerical Analysis, 53(1):1–16, 2015.
[BCM24] Sergio Blanes, Fernando Casas, and Ander Murua. Splitting methods for differential equations. Acta Numerica, 33:1–161, 2024.
[BHS24] Michel Bonnefont, Erwan Hillion, and Adrien Saumard. Covariance inequalities for convex and log-concave functions. ALEA. Latin American Journal of Probability & Mathematical Statistics, 21(1), 2024.
[BRO10] Nawaf Bou-Rabee and Houman Owhadi. Long-run accuracy of variational integrators in the stochastic context. SIAM Journal on Numerical Analysis, 48(1):278–297, 2010.
[CCH+24] Jos ́e A. Carrillo, Yifan Chen, Daniel Zhengyu Huang, Jiaoyang Huang, and Dongyi Wei. FisherRao Gradient Flow: Geodesic Convexity and Functional Inequalities, 2024. arXiv:2407.15693 [math].
[CCK24] Nicolas Chopin, Francesca Crucinio, and Anna Korba. A connection between tempering and entropic mirror descent. In Ruslan Salakhutdinov, Zico Kolter, Katherine Heller, Adrian Weller, Nuria Oliver, Jonathan Scarlett, and Felix Berkenkamp, editors, Proceedings of the 41st International Conference on Machine Learning, volume 235 of Proceedings of Machine Learning Research, pages 8782–8800. PMLR, 21–27 Jul 2024.
[CEL+24] Sinho Chewi, Murat A Erdogdu, Mufan Li, Ruoqi Shen, and Matthew S Zhang. Analysis of Langevin Monte Carlo from Poincare ́ to log-Sobolev. Foundations of Computational Mathematics, pages 1–51, 2024.
[CHH+23] Yifan Chen, Daniel Zhengyu Huang, Jiaoyang Huang, Sebastian Reich, and Andrew M Stuart. Sampling via gradient flows in the space of probability measures. arXiv preprint arXiv:2310.03597, 2023.
[CHH+24] Yifan Chen, Daniel Zhengyu Huang, Jiaoyang Huang, Sebastian Reich, and Andrew M Stuart. Efficient, multimodal, and derivative-free Bayesian inference with Fisher–Rao gradient flows. Inverse Problems, 40(12):125001, 2024.
[CHR06] Ross Cressman, Josef Hofbauer, and Frank Riedel. Stability of the replicator equation for a single species with a multi-dimensional continuous trait space. Journal of Theoretical Biology, 239(2):273–288, 2006.
[CLPW23] Neil K Chada, Benedict Leimkuhler, Daniel Paulin, and Peter A Whalley. Unbiased kinetic Langevin Monte Carlo with inexact gradients. arXiv preprint arXiv:2311.05025, 2023.
[CP25a] F.R. Crucinio and S. Pathiraja. Wasserstein Fisher Rao Gradient Flows: Operator Splitting & Convergence Speed. NeurIPS Workshop Dynamics at the Frontiers of Optimization, Sampling, and Games, 2025.
[CP25b] Francesca R. Crucinio and Sahani Pathiraja. Sequential Monte Carlo approximations of Wasserstein–Fisher–Rao gradient flows. arXiv preprint arXiv: 2506.05905, 2025.
[DEP23] Carles Domingo-Enrich and Aram-Alexandre Pooladian. An Explicit Expansion of the KullbackLeibler Divergence along its Fisher-Rao Gradient Flow. Transactions on Machine Learning Research, 2023.
[DM97] Pierre Del Moral. Nonlinear filtering: Interacting particle resolution. Comptes Rendus de l’Acad ́emie des Sciences - Series I - Mathematics, 325(1):653–658, 1997.
[DPZ17] Andrew B Duncan, Grigorios A Pavliotis, and KC Zygalakis. Nonreversible Langevin samplers: Splitting schemes, analysis and implementation. arXiv preprint arXiv:1701.04247, 2017.
18

[DT13] St ́ephane Descombes and Mechthild Thalhammer. The Lie–Trotter splitting method for nonlinear evolutionary problems involving critical parameters. An exact local error representation and application to nonlinear Schr ̈odinger equations in the semi-classical regime. IMA Journal of Numerical Analysis, 33(2):722–745, 2013.
[EGW09] Martin Egozcue, L Fuentes Garcia, and Wing-Keung Wong. On some covariance inequalities for monotonic and non-monotonic functions. Journal of Inequalities in Pure and Applied Mathematics, 10(3):1–7, 2009.
[EGWZ11] Martı ́n Egozcue, Luis Fuentes Garcı ́a, Wing-Keung Wong, and Riˇcardas Zitikis. The covariance sign of transformed random variables with applications to economics and finance. IMA Journal of Management Mathematics, 22(3):291–300, 2011.
[GM17] Thomas O Gallou ̈et and Leonard Monsaingeon. A JKO splitting scheme for KantorovichFisher–Rao gradient flows. SIAM Journal on Mathematical Analysis, 49(2):1100–1130, 2017.
[HG17] Abhishek Halder and Tryphon T. Georgiou. Gradient Flows in Filtering and Fisher-Rao Geometry, October 2017. arXiv:1710.00064 [math].
[HV03] W Hundsdorfer and J G Verwer. Numerical Solution of Time-Dependent Advection-DiffusionReaction Equations, volume 33 of Springer Series in Computational Mathematics. Springer, 2003.
[Kim65] M Kimura. A stochastic model concerning the maintenance of genetic variability in quantitative characters. Proceedings of the National Academy of Sciences, 54(3):731–736, September 1965.
[Kol01] Alexander V Kolesnikov. On Diffusion Semigroups Preserving the Log-Concavity. Journal of Functional Analysis, 205:196–205, 2001.
[KP22] Anna Korba and Fran ̧cois Portier. Adaptive importance sampling meets mirror descent: a biasvariance tradeoff. In International Conference on Artificial Intelligence and Statistics, pages 11503–11527. PMLR, 2022.
[LLN19] Yulong Lu, Jianfeng Lu, and James Nolen. Accelerating Langevin Sampling with Birth-death. arXiv preprint arXiv: 1905.09863, pages 1–18, 2019.
[LM13] Benedict Leimkuhler and Charles Matthews. Rational construction of stochastic numerical methods for molecular sampling. Applied Mathematics Research eXpress, 2013(1):34–56, 2013.
[LMS18] Matthias Liero, Alexander Mielke, and Giuseppe Savar ́e. Optimal Entropy-Transport problems and a new Hellinger–Kantorovich distance between positive measures. Inventiones mathematicae, 211(3):969–1117, March 2018.
[LMTZ25] Matthias Liero, Alexander Mielke, Oliver Tse, and Jia-Jie Zhu. Evolution of Gaussians in the Hellinger-Kantorovich-Boltzmann gradient flow. arXiv preprint arXiv:2504.20400, 2025.
[LMW25] Jiaming Liang, Siddharth Mitra, and Andre Wibisono. Characterizing Dependence of Samples along the Langevin Dynamics and Algorithms via Contraction of φ-Mutual Information, June 2025. arXiv:2402.17067 [math].
[LSW23] Yulong Lu, Dejan Slepˇcev, and Lihan Wang. Birth-death dynamics for sampling: Global convergence, approximations and their asymptotics. Nonlinearity, 36(11):5731–5772, 2023.
[MM24] Aimee Maurais and Youssef Marzouk. Sampling in unit time with kernel Fisher-rao flow. In Ruslan Salakhutdinov, Zico Kolter, Katherine Heller, Adrian Weller, Nuria Oliver, Jonathan Scarlett, and Felix Berkenkamp, editors, Proceedings of the 41st International Conference on Machine Learning, volume 235 of Proceedings of Machine Learning Research, pages 3513835162. PMLR, 21–27 Jul 2024.
19

[MMW+21] Wenlong Mou, Yi-An Ma, Martin J Wainwright, Peter L Bartlett, and Michael I Jordan. Highorder Langevin diffusion yields an accelerated MCMC algorithm. Journal of Machine Learning Research, 22(1):1919–1959, 2021.
[Nu ̈s24] Nikolas Nu ̈sken. Stein Transport for Bayesian Inference. arXiv preprint arXiv:2409.01464, 2024.
[NVPB24] Nikolas Nu ̈sken, Francisco Vargas, Shreyas Padhy, and Denis Blessing. Transport Meets Variational Inference: Controlled Monte Carlo Diffusions. In The Twelfth International Conference on Learning Representations: ICLR 2024, 2024.
[Ped12] Michael Syskind Pedersen. The Matrix Cookbook. 2012.
[PRS21] Sahani Pathiraja, Sebastian Reich, and Wilhelm Stannat. McKean-Vlasov SDEs in nonlinear filtering. SIAM Journal of Control and Optimization, 59(6):4188–4215, 2021.
[PW24] Sahani Pathiraja and Philipp Wacker. Connections between sequential Bayesian inference and evolutionary dynamics. Philosophical Transactions of the Royal Society A: Mathematical, Physical and Engineering Sciences (accepted), 2024.
[Sch19] Andre ́ Schlichting. Poincar ́e and log–Sobolev inequalities for mixtures. Entropy, 21(1):89, 2019.
[SKL20] Adil Salim, Anna Korba, and Giulia Luise. The Wasserstein proximal gradient algorithm. Advances in Neural Information Processing Systems, 33:12356–12366, 2020.
[SKR19] Adil Salim, Dmitry Kovalev, and Peter Richtarik. Stochastic proximal Langevin algorithm: Potential splitting and nonasymptotic rates. In H. Wallach, H. Larochelle, A. Beygelzimer, F. d'Alch ́e-Buc, E. Fox, and R. Garnett, editors, Advances in Neural Information Processing Systems, volume 32. Curran Associates, Inc., 2019.
[SS83] Peter Schuster and Karl Sigmund. Replicator dynamics. Journal of theoretical biology, 100(3):533–538, 1983.
[SW14] Adrien Saumard and Jon A Wellner. Log-concavity and strong log-concavity: a review. Statistics Surveys, 8:45, 2014.
[Wib18] Andre Wibisono. Sampling as optimization in the space of measures: The Langevin dynamics as a composite optimization problem. In Conference on Learning Theory, pages 2093–3027. PMLR, 2018.
[WN24] Linfeng Wang and Nikolas N ̈usken. Measure transport with kernel mean embeddings. arXiv preprint arXiv:2401.12967, pages 1–21, 2024.
20

A Auxiliary lemmas
Lemma A.1. Let Assumption 1 hold. Recall the kth commutator Gkηγ := [fW, Gk−1ηγ] for k = 1, 2, . . . with G0 := fFR and G1 as defined in (2.17). The following identity holds
Zγ
0
e(γ−τ)fW G1ητ dτ =
∞
X
k=1
γk
k! Gk(ηγ).
Proof. Define f (τ ) = e(γ−τ)fW G1ητ and consider a Taylor expansion around point γ of f , f (τ ) = P∞
k=0
f (k)(γ)
k! (τ −
γ)k. Let us compute the derivatives of f . Applying the chain rule we have
∂se(γ−s)fW G1ηs = −fWe(γ−s)fW G1ηs + e(γ−s)fW ∂sG1ηs
Recall that
G1v = [fW, fFR](v) = fW(fFR(v)) − f ′
FR(v)[fW(v)].
By chain rule and linearity of fW,
∂sfW(fFR(ηs)) = f ′
W(fFR(ηs)) [∂sfFR(ηs)] = fW(f ′
FR(ηs)[∂sηs]) = fW(f ′
FR(ηs)[fW(ηs)]) (A.1)
since ∂sηs = ∂sSW(s, uγ) = fW(ηs). To compute ∂sf ′
FR(ηs)[fW(ηs)] we recall that
∂sf ′
FR(ηs)[fW(ηs)] = f ′′
FR(ηs)(∂sηs, fW(ηs)) + f ′
FR(ηs)[∂sfW(ηs)] (A.2)
= f ′′
FR(ηs)(fW(ηs), fW(ηs)) + f ′
FR(ηs)[∂sfW(ηs)]
= f ′′
FR(ηs)(fW(ηs), fW(ηs)) + f ′
FR(ηs)[f 2
W(ηs)]
where in the last line we have used ∂sηs = fW(ηs) and ∂s2ηs = ∂sfW(ηs) = f ′
W(ηs)[∂sηs] = fW(fW(ηs)) =
f2
W(ηs) by chain rule, and where f ′′
FR(ηs)[∂sηs, fW(ηs)] is a bilinear map describing how the directional
derivative f ′
FR(ηs)[fW(ηs)] changes in the direction ∂sηs. Combining (A.1)–(A.2) it the immediately follows that
∂sG1ηs = fW(f ′
FR(ηs)[fW(ηs)]) − f ′′
FR(ηs)(fW(ηs), fW(ηs)) + f ′
FR(ηs)[f 2
W(ηs)]
= fW(f ′
FR(ηs)[fW(ηs)]) − (f ′
FR(ηs)[fW(ηs)])′[fW(ηs)]
= [fW, fFR]′(ηs)[fW(ηs)]
= (G1)′(ηs)[fW(ηs)]
using the chain rule for operators
(g′(v)[f (v)])′[h] = g′′(v)[h, f (v)] + g′(v)[f ′(v)[h]]
where ′ indicates derivative w.r.t. v. It immediately follows that
∂sG1ηs − fW(G1)(ηs) = −[fW, [fW, fFR]](SW(s, uγ )) = −G2ηs,
and thus
f (1)(s) = −e(γ−s)fW G2ηs
using the fact that fW and etfW commute for any t > 0. For f (2) we have
f (2)(s) = fWe(γ−s)fW G2ηs − e(γ−s)fW ∂sG2ηs.
Recalling that
G2v = [fW, [fW, fFR]](v) = fW(G1v) − (G1)′(v)[fW(v)],
21

we find
∂sfW(G1ηs) = fW(G1ηs)[∂sG1ηs] = fW(G1ηs) ([fW, fFR]′(ηs)[fW(ηs)])
∂s(G1)′(ηs)[fW(ηs)] = (G1)′′(ηs)(fW(ηs), fW(ηs)) + (G1)′(ηs)[f 2
W(ηs)].
Therefore
∂sG2ηs = fW(G1ηs) ([fW, fFR]′(ηs)[fW(ηs)]) − (G1)′′(ηs)(fW(ηs), fW(ηs)) + (G1)′(ηs)[f 2
W(ηs)]
= fW(G1ηs) ([fW, fFR]′(ηs)[fW(ηs)]) − (G1)′(ηs)fW(ηs) ′ [fW(ηs)]
= (G2)′(ηs)[fW(ηs)]
using the chain rule for operators. Following the same steps as before we have ∂sG2ηs −fW(G2ηs) = −G3ηs and thus f (2)(s) = e(γ−s)fW G3ηs. A recursive argument then gives
f (k)(s) = (−1)ke(γ−s)fW Gk+1ηs,
from which follows
e(γ−τ )fW G1ητ = G1ηγ +
∞
X
k=1
(−1)k
k! (τ − γ)kGk+1ηγ .
Integrating both sides w.r.t. τ
Zγ
0
e(γ−τ )fW G1ητ dτ =
Zγ
0
G1ηγ dτ +
∞
X
k=1
G k+1 ηγ
k!
Zγ
0
(γ − τ )kdτ
= γG1ηγ +
∞
X
k=1
G k+1 ηγ
k!
γ k+1
k+1
=
∞
X
k=1
γk
k! Gk(ηγ).
Lemma A.2. Let Assumption 1 hold. Then the kth commutator Gkηγ := [fW, Gk−1ηγ] for k = 1, 2, 3, . . . with G0 := fFR and G1 as defined in (2.17) has a Fisher-Rao structure,
Gkηγ = ηγ gk(ηγ ) − Eηγ [gk]
where
gk(ηγ ) = −g′
k−1fW(ηγ ) + ∇ log ηγ
π · ∇gk−1(ηγ ) + 1
ηγ
∇ · (ηγ∇gk−1(ηγ)), for k = 1, 2, 3, . . .
g0(ηγ) = − log ηγ
π
and g′
k−1fW(η) denotes the Fre ́chet derivative of gk−1 in the direction fW(η).
Proof. Recall g0 = − log ηγ
π , where we drop the dependence on ηγ to simplify notation, so that
fFR(ηγ ) = ηγ (g0 − Eηγ [g0])
We will proceed inductively, starting with G1,
[fW, fFR]ηγ = f ′
WfFR(ηγ ) − f ′
FRfW(ηγ ). (A.3)
22

Since fW is a bounded linear operator, its Fr ́echet derivative is itself and
f′
WfFR(ηγ ) = ∇ · ∇ηγ (g0 − Eηγ [g0]) − ∇ · ηγ (g0 − Eηγ [g0])∇ log π (A.4)
= ∇ · (∇ηγ g0) − ∇ · (ηγ g0∇ log π) − Eηγ [g0]fW(ηγ )
= 2∇g0 · ∇ηγ + ηγ ∆g0 − μ∇ log π · ∇g0 + (g0 − Eηγ [g0])fW(ηγ )
= ∇g0 · ∇ηγ + ηγ ∆g0 + (∇ηγ − ηγ ∇ log π) · ∇g0 + (g0 − Eηγ [g0])fW(ηγ )
= ∇ · (ηγ∇g0) + ηγ∇ log ηγ
π · ∇g0 + (g0 − Eηγ [g0])fW(ηγ ).
Notice that this expression holds for any suitably differentiable scalar valued function g in place of g0.
The Fr ́echet derivative of fFR can be obtained by computing its directional derivative
d
dε fFR(ηγ + εh)|ε=0 = d
dε −(ηγ + εh) log ηγ + εh
π + (ηγ + εh)
Z
log ηγ + εh
π (ηγ + εh)
ε=0
(A.5)
= log π
ηγ
−1 h−h
Z
log π
ηγ
ηγ + ηγ
Z
h 1 − log π
ηγ
= h g0 − Eηγ [g0] + ηγ g′
0h − Eηγ [g′
0h] − ηγ Eh[g0].
So then since g′0h = − h
ηγ ,
f′
FRfW(ηγ ) = fW(ηγ ) g0 − Eηγ [g0] − fW(ηγ ) − EfW(ηγ )[1] − ηγ EfW(ηγ )[g0]
= fW(ηγ ) g0 − Eηγ [g0] − ∇ · ηγ ∇ log ηγ
π − ηγ EfW(ηγ )[g0]
since EfW(ηγ)[1] = 0. Combining yields
[fW, fFR]ηγ = (g0 − Eηγ [g0])fW(ηγ ) + ∇ · (ηγ ∇g0) + ηγ ∇ log ηγ
π · ∇g0
− fW(ηγ ) g0 − Eηγ [g0] + ∇ · ηγ ∇ log ηγ
π + ηγ EfW(ηγ )[g0]
= fW(ηγ ) + ηγ EfW(ηγ)[g0] + ∇ · (ηγ ∇g0) + ηγ ∇ log ηγ
π · ∇g0
= −ηγ ∇ log ηγ
π
2
− ηγ
Z
log ηγ
π ∇ · ηγ∇ log ηγ
π
= −ηγ ∇ log ηγ
π
2
− Eηγ ∇ log ηγ
π
2
(A.6)
using the fact that EfW(ηγ)[1] = 0 in the second line and integration by parts in the last line. This yields the claim of the proof for k = 1, since by the provided definition of gk,
g1 = −g′
0fW(ηγ ) − ∇ log ηγ
π
2
−1
ηγ
∇ · ηγ∇ log ηγ
π
= fW(ηγ )
ηγ
− ∇ log ηγ
π
2
−1
ηγ
∇ · ηγ∇ log ηγ
π
= − ∇ log ηγ
π
2
.
Since G1 has a FR structure, it is immediately clear that G2 will also, as
[fW, [fW, fFR]] = f ′
W[fW, fFR](ηγ ) − [fW, fFR]′fW(ηγ ),
which has the same structure as (A.3) with g0 now replaced by g1. Nevertheless, we will calculate it to show
23

this is the case. The Fr ́echet derivative of [fW, fFR] is given by
d
dε [fW, fFR](ηγ + εh)
ε=0
=d
dε − (ηγ + εh) ∇ log ηγ + εh
π
2
−
Z
∇ log ηγ + εh
π
2
(ηγ + εh)
!
ε=0
= h(g1 − Eηγ [g1]) − ηγ 2∇ h
ηγ
· ∇ log ηγ
π−
Z
2∇ h
ηγ
· ∇ log ηγ
π ηγ − ηγ
Z
g1h
= h(g1 − Eηγ [g1]) + ηγ (g′
1h − Eηγ [g′
1h]) − ηγ Eh[g1]
where g′1h := −2∇ h
ηγ · ∇ log ηγ
π is the Fr ́echet derivative of g1 in the direction h. Notice this is the same
structure as (A.5) but with g0 replaced by g1. Similarly, we can directly use (A.4) with g1 in place of g0 for the term f ′
W[fW, fFR](ηγ) due to the Fisher-Rao structure of [fW, fFR]. This yields
G2ηγ = fW(ηγ )(g1 − Eηγ [g1]) + ∇ · (ηγ ∇g1) + ηγ ∇ log ηγ
π · ∇g1
− fW(ηγ )(g1 − Eηγ [g1]) + ηγ (g′
1fW(ηγ ) − Eηγ [g′
1fW(ηγ )]) − ηγ EfW(ηγ )[g1]
= −ηγ (g′
1fW(ηγ ) − Eηγ [g′
1fW(ηγ )]) + ηγ ∇ log ηγ
π · ∇g1 + ηγ EfW (ηγ)[g1] + ∇ · (ηγ ∇g1)
Notice that
ηγ ∇ log ηγ
π · ∇g1 + ηγ EfW(ηγ)[g1] = ηγ ∇ log ηγ
π · ∇g1 + Eηγ
h
−∇ log ηγ
π · ∇g1
i
using integration by parts for the expectation term. For the last term, we can re-write as
∇ · (ηγ ∇g1) = ηγ
1
ηγ
∇ · (ηγ ∇g1) − Eηγ
1
ηγ
∇ · (ηγ∇g1)
since, by the divergence theorem and the tail decay of ηγ, g1 guaranteed by Assumption 1, R ∇ · (ηγ∇g1) = 0. Combining the above results yields
G2ηγ = ηγ (g2 − Eηγ [g2])
with
g2 = −g′
1fW(ηγ ) + ∇ log ηγ
π · ∇g1 + 1
ηγ
∇ · (ηγ∇g1)
which confirms the claim of the lemma for k = 2. By induction, the claim holds for all positive integer k.
B Splitting for multivariate Gaussian distributions
We recap here useful notation for this section:
• μ0(x) = N (x; m0, C0) denotes the initial distribution and π(x) = N (x; mπ, Cπ) the target distribution.
• We denote by νγ the solution of the W-FR PDE in Proposition 2.2 for one time step γ > 0.
• We denote by ηγ the solution of the FR-W PDE in Proposition 2.3 for one time step γ > 0.
• In the Gaussian case, bγ, Qγ denote mean and variance of νγ.
• In the Gaussian case, aγ, Pγ denote mean and variance of ηγ.
24

B.1 Moment ODEs and analytic solutions
We collect here the derivation and exact solutions of the moment ODEs for WFR and sequential splitting. Before stating our results we recall the following properties of matrix exponentials: for X, Y matrices we have
eX eY = eX+Y if XY = Y X
eY XY −1 = Y eX Y −1 Y invertible
XeX = eX X.
We first refine the result of [LMTZ25, Remark 2.3] and obtain an explicit expression for the covariance matrix of the WFR flow rather than its inverse. The specific form derived below will be particularly useful to obtain the convergence rate of Ct to Cπ in Lemma 3.1. Additionally, we obtain explicit solutions for the mean, which are not detailed in [LMTZ25] and seem to be missing from the literature. Throughout this section, we focus on PDEs of the form
∂tμt = fW(μt) + fFR(μt) + μt (gM (μt) − Eμt [gM ]) (B.1)
gM (μt) = ∇g(μt)⊤Mt∇g(μt) (B.2)
initialised at μ0 = N (x; m0, C0) with g as defined in (2.4), π = N (x; mπ, Cπ) and Mt ∈ Rd×d a potentially time dependent symmetric matrix independent of x, μt. The ODEs for the exact WFR given in [CP25b, Appendix D] are obtained for Mt ≡ 0. Assume further that C0 and Cπ are invertible (non-degenerate) covariance matrices. It holds straightforwardly that μt = N (x; mt, Ct) and the following lemmas characterise the evolution of mt, Ct with time.
Lemma B.1. Moment ODEs, Multivariate Gaussian. Consider (B.1) with the aforementioned conditions. Then mt, Ct satisfy for all t > 0,
dCt
dt = −CtC−1
π (I − 2MtC−1
π )Ct − I − 1
2 Cπ + 2Mt C−1
π Ct − CtC−1
π (I − 1
2 Cπ + 2Mt) + 2(I + Mt) (B.3)
dmt
dt = −(CtC−1
π (I − 2MtC−1
π ) + (I + 2Mt)C−1
π )(mt − mπ) (B.4)
Proof. By straightforward integration and assuming interchange of derivatives and integrals,
dCt
dt =
Z
(x − mt)(x − mt)⊤∂tμt(x)dx =
Z
(x − mt)(x − mt)⊤(fW(μt) + fFR(μt))dx (B.5)
+
Z
(x − mt)(x − mt)⊤(gM (μt) − Eμt [gM ])μt(x)dx.
The first term on the rhs is obtained directly from the covariance ODE for the exact WFR, see [CP25b, Appendix D] for a derivation,
Z
(x − mt)(x − mt)⊤(fW(μt) + fFR(μt))dx = −CtC−1
π Ct + Ct − C−1
π Ct − CtC−1
π + 2I. (B.6)
The remaining term is straightforwardly evaluated using that for μt(x) = N (x; mt, Ct),
gM (μt) = (x − mt + mt −  ̃mt)⊤C ̃−1
t MtC ̃−1
t (x − mt + mt −  ̃mt) (B.7)
where C ̃−1
t = Cπ−1 − C−1
t and  ̃mt = C ̃t(Cπ−1mπ − C−1
t mt). Then,
Z
(x − mt)(x − mt)⊤gM (μt)μt(x)dx =
Z
(x − mt)(x − mt)⊤(x − mt)⊤C ̃−1
t MtC ̃−1
t (x − mt)μt(x)dx
+2
Z
(x − mt)(x − mt)⊤(x − mt)⊤μt(x)dx C ̃−1
t MtC ̃−1
t (mt −  ̃mt)
+ Ct(mt −  ̃mt)⊤C ̃−1
t MtC ̃−1
t (mt −  ̃mt)
= 2CtC ̃−1
t MtC ̃−1
t Ct + CtT r[CtC ̃−1
t MtC ̃−1
t ] + Ct(mt −  ̃mt)⊤C ̃−1
t MtC ̃−1
t (mt −  ̃mt)
= 2(CtC−1
π MtC−1
π Ct − CtC−1
π Mt − MtC−1
π Ct + Mt) + CtT r[CtC ̃−1
t MtC ̃−1
t]
+ Ct(mt −  ̃mγ )⊤C ̃−1
t MtC ̃−1
t (mt −  ̃mt) (B.8)
25

where in the second last line we have used that for a random variable X ∈ Rd×1, X ∼ N (0, Σ) and any constant matrix A, E[XX⊤X⊤AX] = E[XXT AXXT ] = Σ(A + A⊤)Σ + ΣT r[ΣA]. Also,
Eμt [gM ]
Z
(x − mt)(x − mt)⊤μt(x)dx = Ct T r[CtC ̃−1
t MtC ̃−1
t ] + (mt −  ̃mt)⊤C ̃−1
t MtC ̃−1
t (mt −  ̃mt)
(B.9)
Substituting (B.8) and (B.9) into (B.5) and combining with (B.6) yields the covariance ODE (B.3). The mean ODE is obtained in a similar way
dmt
dt =
Z
x∂tμt(x)dx =
Z
x(fW(μt) + fFR(μt))dx +
Z
x(gM (μt) − Eμt [gM ])μt(x)dx,
where the first term on the rhs is obtained directly from the mean ODE for the exact WFR, see [CP25b, Appendix D] for derivation,
Z
x(fW(μt) + fFR(μt))dx = −(Ct + I)C−1
π (mt − mπ) (B.10)
and for the remaining term, using (B.7),
Z
x(gM (μt) − Eμt [gM ])μt(x)dx =
Z
(x − mt)(x − mt + mt −  ̃mt)⊤C ̃−1
t MtC ̃−1
t (x − mt + mt −  ̃mt)μt(x)dx
= 2CtC ̃−1
t MtC ̃−1
t (mt −  ̃mt)
= 2CtC ̃−1
t MtC ̃−1
t (mt − C ̃tC−1
π mπ + C ̃tC−1
t mt)
= 2CtC ̃−1
t MtC−1
π mt − 2CtC ̃−1
t MtC−1
π mπ
= 2(CtC−1
π − I)MtC−1
π (mt − mπ).
Combining with (B.10) yields (B.4).
Lemma B.2. Analytic Solutions, Multivariate Gaussian. Given the conditions of Lemma B.1 and Γ := Cπ−1 + 1
2 I. Then the mean and covariance ODEs (B.4) and (B.3) with initial conditions m0, C0 have analytic solution for all t > 0 given by
Ct = Cπ + e−ΓtE0(I − (W −1
t + E0)−1E0)e−Γt (B.11)
mt = mπ + (Ct − Cπ)etC−1
π (C0 − Cπ)−1(m0 − mπ). (B.12)
where Wt := (2I + Cπ)−1 − ZtM − e−Γt(2I + Cπ)−1e−Γt, ZtM := 2 R t
0 e−ΓsMse−Γsds with ZtM < ∞ for all t > 0 and E0 := C0 − Cπ. Notice in particular that mt is independent of Mt. An alternative presentation for the covariance for the case C0 ̸= Cπ is given by
Ct = Cπ + (eΓt[(C0 − Cπ)−1 + (2I + Cπ)−1 − C−1
π ZM
t C−1
π ]eΓt − (2I + Cπ)−1)−1. (B.13)
Proof. Beginning with the mean ODE, consider the transformation
zt = (Ct − Cπ)−1(mt − mπ) (B.14)
and differentiating with respect to t yields (using the shorthand notation dCt
dt = C ̇ t,
z ̇t = −(Ct − Cπ)−1C ̇ t(Ct − Cπ)−1(mt − mπ) + (Ct − Cπ)−1m ̇ t
= −(Ct − Cπ)−1C ̇ tzt − (Ct − Ct)−1(CtC−1
π (I − 2MtC−1
π ) + (I + 2Mt)C−1
π )(Ct − Cπ)zt
using (B.4) and (Ct − Cπ)zt = mt − mπ. Rearranging (B.3) as
C ̇ t = (2CtC−1
π MtC−1
π − 2MtC−1
π − CtC−1
π − C−1
π )(Ct − Cπ) − (Ct − Cπ)C−1
π
= (CtC−1
π (2MtC−1
π − I) − (I + 2Mt)C−1
π )(Ct − Cπ) − (Ct − Cπ)C−1
π
26

and substituting into the ODE for zt yields
z ̇t = −(Ct − Cπ)−1[CtC−1
π (2MtC−1
π − I) − (I + 2Mt)C−1
π ](Ct − Cπ)zt + (Ct − Cπ)−1(Ct − Cπ)C−1
π zt
− (Ct − Ct)−1(CtC−1
π (I − 2MtC−1
π ) + (I + 2Mt)C−1
π )(Ct − Cπ)zt
= C−1
π zt
which has analytic solution zt = etC−1
π z0. Inserting (B.14) and rearranging yields (B.12). For the covariance ODE, we first consider the so-called natural transformation as in [LMTZ25] to obtain an analytic solution for C−1
t . Using the transformation At = C−1
t and differentiating with respect to time yields
A ̇ t = −AtC ̇ tAt
= −C−1
t −CtC−1
π (I − 2MtC−1
π )Ct − I − 1
2 Cπ + 2Mt C−1
π Ct − CtC−1
π (I − 1
2 Cπ + 2Mt) + 2(I + Mt) C−1
t = C−1
π − 2C−1
π MtC−1
π + C−1
t (I + 2Mt) C−1
π + C−1
π (I + 2Mt)C−1
t − C−1
t − 2C−1
t (I + Mt)C−1
t = C−1
π (I − 2MtC−1
π ) + At (I + 2Mt) C−1
π + C−1
π (I + 2Mt)At − At − 2At(I + Mt)At
Let Σt := At − Cπ−1 and Γ := Cπ−1 + 1
2 I and Bt := eΓtΣteΓt, then
B ̇ t = eΓt(ΓΣt + Σ ̇ t + ΣtΓ)eΓt (B.15)
and
ΓΣt + Σ ̇ t + ΣtΓ = C−1
π +1
2 I (At − C−1
π ) + (At − C−1
π ) C−1
π +1
2I + C−1
π (I − 2MtC−1
π ) + At (I + 2Mt) C−1
π + C−1
π (I + 2Mt)At − At − 2At(I + Mt)At
= C−1
π At + AtC−1
π − 2C−2
π − C−1
π + At + At (I + 2Mt) C−1
π + C−1
π (I + 2Mt)At
+ C−1
π (I − 2MtC−1
π ) − At − 2At(I + Mt)At
= −2Σt(I + Mt)Σt
and inserting into (B.15) yields
B ̇ t = −2eΓtΣt(I + Mt)ΣteΓt = −2Bte−Γt(I + Mt)e−ΓtBt
Consider a further transformation, Dt = B−1
t , then
D ̇ t = −DtB ̇ tDt = 2e−Γt(I + Mt)e−Γt (B.16)
whose analytic solution has the representation
Dt = D0 + 2
Zt
0
e−Γs(I + Ms)e−Γsds = (C−1
0 − C−1
π )−1 + Zt
with Zt := 2 R t
0 e−Γs(I + Ms)e−Γsds and since D0 = (C−1
0 − Cπ−1)−1. Finally,
C −1
t = C−1
π + Σt = C−1
π + e−ΓtD−1
t e−Γt = C−1
π + e−Γt((C−1
0 − C−1
π )−1 + Zt)−1e−Γt. (B.17)
Note that for the special case Mt = 0, Zt = 2 R t
0 e−2Γsds = Γ−1(I − e−2Γt) so that the above coincides with
the expression for C−1
t in [LMTZ25, Remark 2.3] with α = β = 1 there.
This representation however is not ideal as it forces the condition C−1
0 ̸= Cπ−1 to ensure invertibility of
their difference. Note also that C0 = Cπ is a valid initial condition, wherein dCt
dt = 0 for all t > 0 and (B.4) remains well-posed. We will consider an alternative representation, by first writing (B.17) in terms of Ct using the Woodbury matrix identity,
(A + U W V )−1 = A−1 − A−1U (W −1 + V A−1U )−1V A−1, (B.18)
27

with A = Cπ−1, W = (D0 + Zt)−1, U = V = e−Γt yields
Ct = Cπ − Cπe−Γt(D0 + Zt + e−2ΓtCπ)−1e−ΓtCπ
= Cπ + (R−1
t XtR−1
t )−1
where Rt := Cπe−Γt and Xt := (Cπ−1 − C−1
0 )−1 − Zt − e−ΓtCπe−Γt. Then let Zt = ZtM + Γ−1(I − e−2Γt)
with ZtM := 2 R t
0 e−ΓsMse−Γsds. Since (Cπ−1 − C−1
0 )−1 = Cπ(C0 − Cπ)−1C0, we have
R−1
t XtR−1
t = eΓtC−1
π ((C−1
π − C−1
0 )−1 − Zt − e−ΓtCπe−Γt)C−1
π eΓt
= eΓt((C0 − Cπ)−1C0C−1
π − C−1
π (ZM
t + Γ−1(I − e−2Γt))C−1
π )eΓt − C−1
π
= eΓt((C0 − Cπ)−1C0C−1
π − C−2
π Γ−1 − C−1
π ZM
t C−1
π )eΓt − C−1
π + Γ−1C−2
π (B.19)
using that Cπ, Γ and e−Γt commute. We can further simplify using Woodbury identities, beginning with
−C −1
π + C−2
π Γ−1 = −C−1
π + C−2
π (C−1
π +1
2 I)−1
= −C−1
π + ((C−1
π +1
2 I)C2
π )−1
= −1
2 C−1
π Cπ I + 1
2 Cπ
−1
= −(2I + Cπ)−1 (B.20)
where in the second last line, we have used the special case of the Woodbury identity
(I + A)−1 − I = −A(I + A)−1 (B.21)
with A = 1
2 Cπ. Now consider, by similar reasoning,
(C0 − Cπ)−1C0C−1
π − Γ−1C−2
π = (C0 − Cπ)−1C0C−1
π − I+1
2 Cπ
−1 C−1
π
= (C0 − Cπ)−1C0 − I + 1
2 Cπ(I + 1
2 Cπ)−1 C−1
π
= (C0 − Cπ)−1C0 − I C−1
π + (2I + Cπ)−1
= (C0 − Cπ)−1 + (2I + Cπ)−1 (B.22)
again using (B.21), −(I + 1
2 Cπ)−1 = −I + 1
2 Cπ(I + 1
2 Cπ)−1 in the second and third line, and then using
(B.18) in the fourth line with A = −Cπ, U = Cπ, V = C0, W = (Cπ)−1 so that
(C0 − Cπ)−1 = −C−1
π − (Cπ − C0)−1C0C−1
π (B.23)
Substituting (B.20) and (B.22) into (B.19) yields
R−1
t XtR−1
t = eΓt[(C0 − Cπ)−1 + (2I + Cπ)−1 − C−1
π ZM
t C−1
π ]eΓt − (2I + Cπ)−1
which then yields the expression
Ct = Cπ + (eΓt[(C0 − Cπ)−1 + (2I + Cπ)−1 − C−1
π ZM
t C−1
π ]eΓt − (2I + Cπ)−1)−1.
This form will prove useful in the analysis of KL decay in Proposition 3.2. Finally, with another application of the Woodbury identity (B.18) with A = (C0 − Cπ)−1, U = V = I, W = (2I + Cπ)−1 − Cπ−1ZtM Cπ−1 −
e−Γt(2I + Cπ)−1e−Γt, we obtain the representation
Ct = Cπ + (eΓt[(C0 − Cπ)−1 + (2I + Cπ)−1 − C−1
π ZM
t C−1
π − e−Γt(2I + Cπ)−1e−Γt]eΓt)−1
= Cπ + e−Γt[(C0 − Cπ)−1 + (2I + Cπ)−1 − C−1
π ZM
t C−1
π − e−Γt(2I + Cπ)−1e−Γt]−1e−Γt
= Cπ + e−Γt((C0 − Cπ) − (C0 − Cπ)(W −1 + (C0 − Cπ))−1(C0 − Cπ))e−Γt
as claimed.
28

B.2 Derivation of (2.20)
Using the representation (2.14), we will start by calculating the form of gk for k = 2, 3, . . . , and recall from Proposition 2.3 that
∂γ ηγ = fW(ηγ ) + fFR(ηγ ) +
∞
X
k=1
γk
k! Gkηγ
where
Gkη = η (gk(η) − Eη[gk])
gk(η) = −g′
k−1fW (η) + ∇ log η
π · ∇gk−1(η) + 1
η ∇ · (η∇gk−1(η))
= −g′
k−1fW (η) + (2∇g(η) + ∇ log π)⊤∇gk−1(η) + ∆gk−1(η), k = 1, 2, 3, . . .
g0(η) = − log η
π = −g(η)
where g is as defined in (2.4). Since μ0 and π are multivariate Gaussian, it holds that ηγ is also a multivariate Gaussian for all γ > 0. Also, let H := ∇2g and Hπ := ∇2 log π = −Cπ−1. In the below calculations, we drop the dependence on ηγ where there is no ambiguity. Additionally, any constant terms are ignored, since they are removed via the
normalisation term in the FR operator and we use the notation += to indicate equality up to an additive constant. For g1, we have that the Fr ́echet derivative term is given by g′0fW(η) = − fW
η so that
g1 = fW(η)
η − |∇g0|2 − fW(η)
η = −|∇g|2
For g2,
∇g1 = −2H∇g ; ∆g1 = −2T r[H2]
and the Fr ́echet derivative term is given by
g′
1h = −2 ∇ h
η
⊤
∇g
g′
1fW = −2 ∇ ∇ · (η∇g)
η
⊤
∇g
= −2 ∇(∇ log η⊤∇g + ∆g) ⊤ ∇g
= −2 ∇(∇g⊤∇g + ∇ log π⊤∇g) ⊤ ∇g
= −2 (2H∇g + Hπ∇g + H∇ log π)⊤ ∇g
= −2 (−∇g1 + Hπ∇g + H∇ log π)⊤ ∇g
since ∆g = T r[H]. Combining,
g2
=+ 2 (−∇g1 + Hπ∇g + H∇ log π)⊤ ∇g + (2∇g + ∇ log π)⊤∇g1
= 2∇g⊤Hπ∇g
Similarly, for g3,
∇g2 = 4HHπ∇g ; ∆g2 = 4T r[HHπH]
29

using the identity ∇v⊤Aw = ∇v⊤Aw + ∇w⊤A⊤v for any v(x), w(x) : Rd×1 → Rd×1 and A ∈ Rd×d constant matrix independent of x (see (93) in [Ped12]). Then for the Fr ́echet derivative,
g′
2h = 4 ∇h
η
⊤
Hπ ∇g
g′
2fW = 4 ∇ h
fW
⊤
Hπ∇g = 4 (−∇g1 + Hπ∇g + H∇ log π)⊤ Hπ∇g
by the same reasoning as earlier. Combining,
g3
=+ −4 (−∇g1 + Hπ∇g + H∇ log π)⊤ Hπ∇g + (2∇g + ∇ log π)⊤∇g2
= −4 (2H∇g + Hπ∇g + H∇ log π)⊤ Hπ∇g + (2∇g + ∇ log π)⊤4HHπ∇g
= ∇g⊤(−8HHπ − 4H2
π + 8HHπ)∇g + ∇ log π⊤(−4HHπ + 4HHπ)∇g
= −4∇g⊤H2
π ∇g
and finally for g4, by similar line of reasoning as earlier,
∇g3 = −8HH2
π∇g ; ∆g3 = −8T r[HH2
πH]
and the Fr ́echet derivative term is given by,
g′
3h = −8 ∇ h
μ
⊤
H2
π ∇g
g′
3fW = −8 (−∇g1 + Hπ∇g + H∇ log π)⊤ H2
π ∇g
Combining,
g4
+= 8 (−∇g1 + Hπ∇g + H∇ log π)⊤ H2
π∇g + (2∇g + ∇ log π)⊤∇g3
= 8 (2H∇g + Hπ∇g + H∇ log π)⊤ H2
π∇g − 8(2∇g + ∇ log π)⊤HH2
π ∇g
= 8∇g⊤H3
π ∇g
By induction, it holds that
gk = −∇g⊤(−2Hπ)k−1∇g = −∇g⊤(2C−1
π )k−1∇g
Finally, we have by the series representation of a matrix exponential that
∞
X
k=1
γk
k! Gkηk = −η∇g⊤ Cπ
2
∞
X
k=1
γk
k! (2C−1
π )k
!
∇g + η
∞
X
k=1
γk
k!
Z
∇g ⊤ (2C −1
π )k−1∇gηdx
= −η∇g⊤ Cπ
2
∞
X
k=1
γk
k! (2C−1
π )k
!
∇g + η
Z
∇g⊤ Cπ
2
∞
X
k=1
γk
k! (2C−1
π )k
!
∇gηdx
= −η (gFRW − Eη[gFRW])
where
gFRW := ∇g⊤ Cπ
2 e2γC−1
π − I ∇g.
30

B.3 Proof of Lemma 3.1
Due to Gaussianity, we have by a simple algebraic manipulation that
KL(νn||π) = 1
2 − log det Qnγ
det Cπ
+ (mβ
n − mπ)⊤C−1
π (mβ
n − mπ) + T r[C−1
π Qnγ] − d (B.24)
=1
2 − log[det(I + C−1
π Eβ
n )] + (εβ
n )⊤ C −1
π εβ
n + T r[C−1
π Eβ
n] ,
where Enβ and εβn are as defined in (3.7) and (3.8) respectively, det(I + Cπ−1Enβ) > 0 and since det(A + B) =
det(A) det(I + A−1B) for square matrices A, B with A invertible. A similar expression holds for both KL(μnγ||π) and KL(ηnγ||π) with Qnγ replaced by Cnγ and Pnγ respectively. Applying the single step covariance equations derived in (3.3) recursively, one readily obtains the covariance recursion for the W-FR scheme,
Q(n+1)γ = Cπ + (eΓγ (Qnγ − Cπ)−1eΓγ + (eγ − 1)C−1
π )−1, (B.25)
with Γ = Cπ−1 + 1
2 I. Likewise, one obtains for the FR-W scheme,
P(n+1)γ = Cπ + eΓγ (Pnγ − Cπ)−1eΓγ + (eγ − 1)C−1
π e2γC−1
π
−1
(B.26)
Compare these with the recursion obtained from the solving the WFR PDE as derived in (3.1) over time interval [nγ, (n + 1)γ], (N.B. in the below, we drop the γ from the subscript where there is no ambiguity),
C(n+1)γ = Cπ + (eΓγ [(Cnγ − Cπ)−1 + (2I + Cπ)−1]eΓγ − (2I + Cπ)−1)−1. (B.27)
Rearranging (B.25), (B.26) and (B.27) yields
Eβ
n+1 = (eΓγ (Eβ
n )−1eΓγ + (eγ − 1)C−1
π )−1
Eα
n+1 = (eΓγ (Eα
n )−1eΓγ + (eγ − 1)C−1
π e2γC−1
π )−1
En+1 = (eΓγ [E−1
n + (2I + Cπ)−1]eΓγ − (2I + Cπ)−1)−1
respectively, and by induction,
Eβ
n=

enγ Γ E −1
0 enγΓ + (eγ − 1)C−1
π
n−1
X
j=0
e2jγΓ


−1
= enγΓE−1
0 enγΓ + (1 − eγ )C−1
π (I − e2γΓ)−1(e2γnΓ − I) −1
= e−nγΓ E−1
0 + (1 − eγ )(I − e2γΓ)−1C−1
π (I − e−2γnΓ) −1 e−nγΓ (B.28)
Eα
n = e−nγΓ E−1
0 + (1 − eγ )(e−2γC−1
π − eγ )−1C−1
π (I − e−2γnΓ)
−1
e−nγΓ (B.29)
En = enγΓE−1
0 enγΓ + 1
2 Γ−1C−1
π (e2nγΓ − I)
−1
= e−nγΓ E−1
0 +1
2 Γ−1C−1
π (I − e−2nγΓ)
−1
e−nγΓ (B.30)
since Γ, eΓ, Cπ all commute. In (B.28) and (B.29) we have used that Pn−1
j=0 T j = (I − T )−1(I − T n) for (I − T ) invertible with T = e2γΓ. The remaining term involving εn is obtained by rearranging (3.3), (3.6) and (3.1) to obtain
εβ
n = Eβ
n eγC−1
π (Eβ
n−1)−1εβ
n−1
εα
n = Eα
n eγC−1
π (Eα
n−1)−1εα
n−1
εn = EneγC−1
π E−1
n−1εn−1
31

respectively. By induction, one obtains that,
(εβ
n )⊤ C −1
π εβ
n = ε⊤
0 E−1
0 enγC−1
π Eβ
n C−1
π Eβ
n enγC−1
π E−1
0 ε0
and the same expression holds for (εnα)⊤Cπ−1εnα and (εn)⊤Cπ−1εn with Enβ replaced by Enα and En respectively. Combining all the derived expressions yields the result.
B.4 Proof of Proposition 3.2
(i). Begin with the case where E0 is strictly positive definite. Recall En = e−nγΓ E−1
0 + ΩCπ−1(I − e−2nγΓ) −1 e−nγΓ.
It trivially holds that En ≻ 0 for all n = 1, 2, 3 . . . since AM A ≻ 0 if A, M ≻ 0, which is true when letting A = e−nγΓ and M = E−1
0 + ΩCπ−1(I − e−2nγΓ), where the latter is symmetric as E−1
0 is the inverse of a symmetric matrix and Ω, Cπ, Γ are symmetric and they all commute with each other. The same reasoning holds for the claim for Enβ and Enα.
(ii). For the second case, notice that when E−1
0 + ΩCπ−1 ≺ 0, then E−1
0 + ΩCπ−1(I − e−2nγΓ) ≺ 0 and
(E−1
0 + ΩCπ−1(I − e−2nγΓ))−1 ≺ 0 since Ω ≻ 0. The claim then holds since −AM A ≺ 0 for all positive
definite A, M with A = e−nγΓ and M = (E−1
0 + ΩCπ−1(I − e−2nγΓ))−1. The same reasoning holds for Enβ, Enα
with Ω replaced by Ωβ and Ωα respectively. (iii). Note in the below, with a slight abuse of notation, we write An to denote the value of the matrix A at the nth iteration and Aij for the ith row and jth column element of the matrix A. We will demonstrate the reasoning for KL(μnγ||π), noting that the same calculations hold for KL(νn||π) and KL(ηn||π) due to Lemma 3.1 with En replaced by Enβ and Enα respectively.
Let An := Cπ−1En and using Lemma 3.1 and (B.24) we obtain
KL(μnγ||π) = 1
2 − log det(I + An) + T r[An] + T r[A−1
0 C−1
π ε0ε⊤
0 A−1
0 enγC−1
π A2
n enγ C −1
π]
=1
2 − log det(I + An) + T r[An] + T r[FnA2
n]
where Fn := enγC−1
π D0enγC−1
π and D0 := A−1
0 Cπ−1ε0ε0⊤A−1
0 and recall that using (3.10)
An = e−nγΓ A−1
0 + Ω (I − e−2nγΓ) −1 e−nγΓ
Denote Kn := A−1
0 + Ω (I − e−2nγΓ) −1 so that An = e−nγΓKne−nγΓ. Since An = Cπ−1Cnγ − I has eigenvalues larger than −1, we have det(I + An) = eT r[log(I+An)], and
− log det(I + An) = −T r[log(I + An)] =
∞
X
k=1
(−1)k
k T r[Ak
n]
whenever ||An|| < 1 (so that the series converges), which holds for sufficiently large n. Then
2KL(μnγ||π) = T r[FnA2
n] + 1
2 T r[A2
n] +
∞
X
k=3
(−1)k
k T r[Ak
n]
where P∞
k=3
(−1)k
k T r[Akn] is convergent and equal to − log det(I + An) − T r[A2n]/2 + T r[An]. Also, Γ is
diagonalisable when Cπ is positive definite and we denote its spectral decomposition by Γ = P ⊤ΛP with λi = Λii denoting the ith eigenvalue of Γ and 1
2 < λ1 < λ2 < λ3 · · · < λd and pi the ith column of P where P is unitary. Then
T r[A2
n] = T r[(P ⊤e−nγΛP KnP ⊤e−nγΛP )2]
= T r[e−2nγΛM e−2nγΛM ]
=
d
X
i=1
d
X
j=1
e−2nγ(λi+λj )Mij Mji
32

where M := P KnP ⊤ since T r[P ⊤DP ] = Pd
i=1 Dii for P unitary orthonormal matrix, P P ⊤ = I. A similar
representation can be obtained for T r[Akn] involving k iterated sums. Similarly,
T r[FnA2
n] = e−nγ T r[KnD0Kne−2nγΓ] = e−nγ T r[e−2nγΛP KnD0KnP ⊤] =
d
X
i=1
e−2nγ(λi+ 1
2 )Nii
where N := P KnD0KnP ⊤. Using the same reasoning for KL(νn||π) yields
KL(νn||π)
KL(μnγ||π) =
1 2
Pd i=1
Pd
j=1 e−2nγ(λi+λj )M β
ij M β
ji + Pd
i=1 e−2nγ(λi+ 1
2 )N β
ii + P∞
k=3
(−1)k
k T r[Bnk]
1 2
Pd i=1
Pd
j=1 e−2nγ(λi+λj )Mij Mji + Pd
i=1 e−2nγ(λi+ 1
2 )Nii + P∞
k=3
(−1)k
k T r[Akn]
=
Pd
i=1 e−2nγ(λi+ 1
2 )N β
ii + O(e−4nγλ1 )
Pd
i=1 e−2nγ(λi+ 1
2 )Nii + O(e−4nγλ1 )
= Nβ
11 + O(e−nγ min(4λ1,2(λ2−λ1)))
N11 + O(e−nγ min(4λ1,2(λ2−λ1)))
where M β = P KnβP ⊤, N β := P KnβD0KnβP ⊤, Knβ := (A−1
0 + Ωβ (I − e−2nγΓ))−1 and Bn = e−nγΓKnβ e−nγΓ
and in the third line we have divided top and bottom by e−2nγ(λ1+ 1
2 ) and noting that Kn → (A−1
0 + Ω)−1
and Knβ → (A−1
0 + Ωβ)−1 as n → ∞. Taking the limit of the above expression as n → ∞ yields the result.
C Preservation of log-concavity
Our proof strategy involves starting with a sequential splitting of the WFR flow and using Girsanov theorem to characterise the intermediate density due to the W flow. This is based on a similar proof strategy used to show that the filtering density satisfies a Poincar ́e inequality (see Lemma 5.1 in [PRS21]). In Appendix C.1, we show that when the initial density is “sufficiently” strongly log-concave (to be made precise), there exists a finite time interval over which the W flow maintains log-co-
ncavity. Although the W flow cannot be expected to preserve log-concavity uniformly in time (unless π is Gaussian), the properties of the FR flow can be exploited to maintain log-concavity uniformly in time. The next lemma shows that the FR does exactly this, and then the proof in Appendix C.2 combines the results.
Lemma C.1. FR flows preserve log-concavity. Suppose μt is the solution of the FR flow (2.3) at time t, initialised at μ0(x) satisfying Assumption 2. Then μt, t > 0 is αt-strongly log-concave with
αt = (1 − e−t)απ + e−tα0
Proof. Using the exact solution to the FR flow (2.5),
μt(x) ∝ π(x)1−e−t μ0(x)e−t ∝ e−Vt(x)
where Vt = (1 − e−t)Vπ + e−tμ0. Also
∇2Vt = (1 − e−t)∇2Vπ + e−t∇2V0 ⪰ ((1 − e−t)απ + e−tα0)I =: αtI
where αt > 0 is a convex combination of positive scalars for all t > 0.
C.1 Proof of Lemma 4.1
Proof. The first step will be to use Girsanov theorem to characterise the law of the overdamped Langevin diffusion, using the re-scaled Langevin diffusion
dXt = ∇U (Xt)dt + dWt
33

where U = − 1
2 Vπ. Let μbt denote the law of Xt, so then
μbt =
Z
C [0,t]
exp
Zt
0
∇U (Ws)dW s − 1
2
Zt
0
|∇U (Ws)|2ds μW (dw)
=
Z
C [0,t]
exp (U (Wt) − U (W0) − 1
2
Zt
0
(∆U + |∇U |2)(Ws)ds μW (dw)
where μW (dw) denotes the Wiener measure on path space C[0, t] and in the second line we have used Itˆo formula. Here the application of Girsanov theorem is valid since Novikov’s condition is satisfied under Assumption 1. Consider now a discretisation of the time interval [0, t] with step size τ and N steps, 0 = t0, t1, t2, . . . , tN−1, tN = t with ti − ti−1 = τ for all i = 1, 2, 3, . . . , N . From now on, we use the notation μbi to denote an approximation to μbti (and likewise for other quantit-
ies). We can then approximate as
μbt ≈
Z
C [0,t]
exp 1
2 (Vπ(w0) − Vπ(wN ))
N −1
Y
i=1
exp − 1
2 R(wi) μW (dw)
= exp − 1
2 Vπ(wN )
N −1
Y
i=1
μi(wi)
where
μi(wi) :=
R Q(wi−1) qτ (wi−1, wi) μi−1(wi−1) dwi−1, i = 2, 3, . . . R Q(w0) qτ (w0, wi) exp (−U (w0)) exp(−V0(w0)) dw0, i = 1
and
Q(w) := exp − 1
2 R(w)τ
R(w) := ∆U (w) + |∇U (w)|2
qτ (wi−1, wi) := 1
(2πτ )d/2 exp − |wi − wi−1|2
2τ
Then by Assumption 3, for i = 1, we have,
μ1 ∝
Z
exp − |w0 − w1|2
2τ + 1
2 Vπ(w0) − τ
2 R(w0) − V0(w0) dw0
=
Z
exp − |w0 − w1|2
2τ − V0(w0) − 1 + δ
2 Vπ(w0) − δ − τ
2 Vπ(w0) − τ
2 (R(w0) + Vπ(w0)) dw0
=:
Z
exp(−f1(w1, w0))dw0
= exp(−G1(w1))
assuming τ < δ. Since f1 is strongly convex in both w1 and w0 under Assumption 3, by the Pr ́ekopa–Leindler inequality [SW14, Theorem 3.8], so is G1 with
∇2
yG1 ⪰
R (∇2yf1 − ∇2yzf1(∇z2f1)−1∇z2yf1) exp(−f1(y, z))dz
R exp(−f1(y, z))dz , (C.1)
using the shorthand notation y := w1 and z := w0. Then,
∇2
w1 f1 = 1
τI
∇2
w1w0 f1 = ∇2
w0w1 f1 = − 1
τI
∇2
w0 f1 = ∇2
w0 (V0 − 1 + δ
2 Vπ) + τ
2 ∇2
w0 H + δ − τ
2 ∇2
w0 Vπ + 1
τI
⪰ αd + τ
2 αh + δ − τ
2 απ + 1
τI
34

So then
∇2
yG1 ⪰
R(1
τ− 1
τ2 (∇2w0 f )−1) exp(−f (y, z))dz
R exp(−f (y, z))dz
⪰1
τ− 1
τ 2 αd + τ
2 αh + δ − τ
2 απ + 1
τ
−1!
I
R exp(−f (y, z))dz
R exp(−f (y, z))dz
= αd + δ
2 απ + τ
2 (αh − απ)
1 + τ (αd + δ
2 απ + τ
2 (αh − απ)) I (C.2)
=: c1I
which is strictly positive by all the assumptions and since αd + δ
2 απ + τ
2 (αh − απ) = αd + τ
2 αh + δ−τ
2 απ > 0 whenever δ > τ . Then for i = 2,
μ2 ∝
Z
exp − |w1 − w2|2
2τ − τ
2 R(w1) − G1(w1) dw1
=
Z
exp − |w1 − w2|2
2τ − τ
2 (R(w1) + Vπ(w1)) + τ
2 Vπ(w1) − G1(w1) dw1
=:
Z
exp (−f2(w1, w2)) dw1.
Once again, f2 is strongly convex in w1 and w2 and also
∇2
w1 f2 = 1
τI+ τ
2 ∇2
w1 H(w1) − τ
2 ∇2
w1 Vπ(w1) + ∇2
w1 G1(w1)
⪰1
τ +τ
2 αh + c1 − τ
2 Lπ I.
A sufficient condition to maintain convexity is to choose τ small enough such that c1 − τ
2 Lπ > 0 (which is pos
sible since c1 → αd + δ
2 απ > 0 as τ → 0). Then again by Pr ́ekopa–Leindler, μ2 ∝ R exp(−f2(w1, w2))dw1 = exp(−G2(w2)) with
∇2
w2 G2 ⪰ 1
τ− 1
τ2
1
τ +τ
2 αh + κ1(τ )
−1!
I
= κ1(τ ) + τ
2 αh
1 + τ (κ1(τ ) + τ
2 αh) I =: c2I
where κ1(τ ) := c1− τ
2 Lπ. Repeating for μ3, we have exactly the same computations, but with the requirement
that τ is chosen small enough that c2 − τ
2 Lπ > 0, which by similar arguments as previously, holds true for some sufficiently small τ . By induction, we conclude that for all i = 1, 2, 3, . . . , N , μi ∝ exp(−Gi(wi)) is strongly log-concave with ∇2wi Gi ⪰ ciI where
ci = ci−1 + τ
2 (αh − Lπ)
1 + τ (ci−1 + τ
2 (αh − Lπ)) , i = 1, 2, 3, . . . , N (C.3)
c0 = αd + δ
2 απ. (C.4)
Finally, returning to our original approximation, we have that
μbt ≈ exp − 1
2 Vπ(wN ) μN (wN ) ∝ exp − 1
2 Vπ(wN ) − GN
and
1
2 Vπ(wN ) + GN (wN ) ⪰ 1
2 απ + cN I. (C.5)
35

In order to understand the limit τ → 0 of the recursion (C.3), notice that it can be seen as a two step time discretisation, i.e.
c ̃i = ci−1 − τ b2 (C.6)
ci = c ̃i
1 + τ c ̃i
(C.7)
with b2 = |αh−Lπ|
2 , recalling that αh − Lπ < 0. Also, (C.6) corresponds to an Euler discretisation of the
ODE dct
dt = −b2 with time step τ . Notice also that (C.7) is the exact solution of dct
dt = −ct2 initialised at cbi at
time t = τ since if ct = c0(1 + tc0)−1 then differentiating with respect to t yields c ̇t = −c20(1 + tc0)−2 = −ct2. Therefore, the iteration (C.6)-(C.7) corresponds to an operator splitting based discretisation of the ODE
dct
dt = −c2
t − b2. (C.8)
Notice that for the case dct
dt = −ct2 − b2, the ODE has no stable fixed point, and continues decreasing to −∞ as t → ∞, consistent with the findings of [Kol01] that the W flow does not preserve strong logconcavity uniformly in time (aside from the Ornstein-Ulenbeck flow). We will then focus on characterising the time horizon over which strong convexity is preserved. Integrating both sides of the ODE and assuming −ct2 + b2 ̸= 0 for all t yields
ct∗ = b tan tan−1 c0
b − bt∗ .
To summarise, the exact solution to (C.8) is given by
ct = b tan tan−1 c0
b − bt , (C.9)
c0 = αd + δ
2 απ (C.10)
where b :=
q
|αh−Lπ |
2 , noting this excludes the final 1
2 απ term. Finally, we have that
μbt ∝ exp − 1
2 Vπ − Gt
=: exp (−Et)
∇2Et ⪰ ct(c0) + 1
2 απ I.
When αh − Lπ < 0, there exists some t∗ beyond which strong convexity1 is lost, that is, ct ≤ 0 for all t ≥ t∗. Due to the monotonocity of the tan function, t∗ is easily obtained as
t∗ = 1
b tan−1 c0
b −1
b tan−1 (0) (C.11)
=1
b tan−1 c0
b (C.12)
which is strictly positive since b, c0 > 0.
C.2 Proof of Theorem 4.1
Proof. Consider a fixed time interval [0, T ]. We will characterise strong log-concavity for t ∈ [0, T ] under (2.1) and then demonstrate that this holds for all T > 0.
1of the intermediate densities
36

Consider the sequence of densities due to the W-FR splitting scheme (2.6). Recall that νbi is the density after a step of W flow and μi is the density after a step of FR flow. We first show that strong log-concavity is preserved for a sequence of steps with step size {τi}i=1,2,..., and then show that strong log-concavity is preserved as τi → 0. As will become clear in the remainder of the proof, such an iteration dependent step size is needed due to the fact that the time horizon over which the W-
 flow preserves strong log-concavity depends on the relative convexity of the initial and target potentials. For a given strongly log-concave μ0 satisfying Assumptions 3, we have that after a single step of the W flow of size τ1, the distribution νb1 is αb1-strongly log-concave due to Lemma 4.1 with potential E1 = 1
2 Vπ + G1,
where ∇2E1 ⪰ αb1I and ∇2G1 ⪰ cb1I, αb1 = cb1 + απ
2 and
cb1 = b tan tan−1 c0
b − bτ1
c0 = αd + δ0
2 απ,
where 0 < δ0 < 1 and τ1 must be “small enough” that cb1 > 0, and due to Lemma 4.1 and the assumed conditions, such a τ1 > 0 exists. For the FR step, it trivially holds that
μ1 ∝ π1−e−τ1
μbe−τ1
1 ∝ exp −(1 − e−τ1 )Vπ − e−τ1 E1 =: exp(−F1)
where F1 = Vπ + e−τ1 (E1 − Vπ) = Vπ + e−τ1 (G1 − 1
2 Vπ) yields that the distribution from a single sequential split step of size τ1 is strongly log-concave with constant
α1 = απ + e−τ1 (αb1 − απ) = 1 − 1
2 e−τ1 απ + e−τ1
cb1.
For i = 2, we require that F1 − 1+δ1
2 Vπ is strongly convex to apply Lemma 4.1, for some 0 < δ1 < 1. Note that we use a different δ1 as compared to δ0 in the first step, as this will be used to define the sequence of step sizes. Then
∇2(F1 − 1+δ1
2 Vπ) = ∇2 1 − 1+δ1
2 Vπ + e−τ1 (G1 − 1
2 Vπ) ,
= ∇2 1−δ1−e−τ1
2 Vπ + e−τ1 G1
⪰ 1−δ1−e−τ1
2 απ + e−τ1
cb1 I
=: αd,1I
where αd,1 denotes the concavity parameter required for Assumption 3(a) in Lemma 4.1. A sufficient condition for strict positivity of αd,1 is to ensure 0 < δ1 < 1 − e−τ1 . Then νb2 is again strongly convex by Lemma 4.1 with potential E2 = 1
2 Vπ + G2, ∇2G2 ⪰ cb2I and
cb2 = b tan tan−1 c1
b − bτ2
c1 = 1−δ1−e−τ1
2 απ + e−τ1
cb1 + δ1
2 απ
= 1−e−τ1
2 απ + e−τ1
cb1
=1
2 απ + e−τ1 (cb1 − απ
2)
and c1 > 0 since τ1 is chosen such that cb1 > 0. Once again, τ2 must be chosen such that cb2 > 0. Then once again for the FR step, we have ν2 ∝ exp(−F2) with
F2 = (1 − e−τ2 )Vπ + e−τ2 E2
= Vπ + e−τ2 (E2 − Vπ)
= Vπ + e−τ2 (G2 − 1
2 Vπ)
37

and ∇2F2 ≻ α2I where
α2 = 1 − 1
2 e−τ2 απ + e−τ2
cb2.
Proceeding inductively for i = 3, 4, . . . , in a similar way with required conditions on τi and δi, we obtain
αi = 1 − 1
2 e−τi απ + e−τi
cbi = ci + απ
2 , i = 1, 2, 3, . . . (C.13)
where cbi and ci satisfy the recursion for i = 1, 2, 3, . . .
cbi = b tan tan−1 ci−1
b − bτi (C.14)
ci = (1 − e−τi ) απ
2 + e−τi
cbi (C.15)
c0 = αd + δ0
2 απ. (C.16)
Similarly to the limiting analysis in the proof of Lemma 4.1, we have that (C.14)-(C.15) corresponds to a splitting scheme of the ODE
c ̇t = −c2
t − ct − b2 + απ
2 , (C.17)
whereby for the ith iteration, the ODE c ̇t = −ct2 − b2, initialised at ci−1 is solved over time τi yielding cbi and then the ODE c ̇t = −ct + απ initialised at cbi is solved over time τi yielding ci. Finally, due to (C.13), αt = ct + απ
2 , is the log-concavity constant of μt, the solution of the exact WFR PDE (2.1) at time t. We now make precise the conditions on τi which must be satisfied in order for the limit (C.17) to hold as maxi τi → 0. Recall that τi must be chosen such that cbi > 0, which using (C.12), is possible if 0 < τi < τ ∗
i
where
τ∗
i =1
b tan−1 ci−1
b , i = 1, 2, 3, . . . (C.18)
Notice that there exists a τ1∗ > 0 whenever αd, δ0 > 0, which implies cb1 > 0 and c1 > (1 − e−τ1 ) απ
2
and τ2∗ > 1
b tan−1 (1−e−τ1 )απ
2b > 0. This then implies cb2 > 0 and once again c2 > (1 − e−τ2 ) απ
2 and
τ3∗ > 1
b tan−1 (1−e−τ2 )απ
2b > 0. By induction, τ ∗
i >1
b tan−1 (1−e−τi−1 )απ
2b > 0 and since τi−1 < τ ∗
i−1, we can instead consider the recursion
τ∗
i =1
b tan−1 (1 − e−τ∗
i−1 )απ
2b
!
, i = 1, 2, 3, . . . (C.19)
It is not difficult to see that τ ∗
i > 0 for all i = 1, 2, 3, . . . . Its limit, τ ∗∞ can be found from the fixed point
equation τ ∗∞ = g(τ ∗∞) where g(τ ) := 1
b tan−1 (1−e−τ )απ
2b , for which t∗∞ = 0 is a valid (but not unique)
solution. Notice also that 0 < dg(τ)
dτ = απ
2b2
e−τ
1+ (1−e−τ )απ
2b
2 < απ
2b2 for all τ > 0. Under the assumed condition
(4.4), dg(0)
dτ = απ
2b2 > 0, τ = 0 is an unstable fixed point, so that τ ∗∞ ̸= 0 since τ1∗ ̸= 0. To show that there
exists at least one other 0 < τ ∗∞ < ∞, consider h(τ ) := g(τ ) − τ . First note that h(τ ) → −∞ as τ → ∞ since g(τ ) < 1
b tan−1 απ
2b for all τ ≥ 0. Additionally, h(0) = 0 and dh(0)
dτ > 0 and dh(τ)
dτ → −1 as τ → ∞ monotonically. Then by continuity of h and g, there must exist a τ > 0 such that h(τ ) = 0, i.e. there exists a τ ∗∞ > 0. Therefore, we may construct a sequence of step sizes {τi}i=1,2,3, with τi < min(τ1∗, τ ∗∞ ̸= 0) for all i = 1, 2, 3, . . . as a discretisation of the interval [0, T ] for all T > 0, for which the recursion (C.14)-(C.15) converges to the continuous time ODE (C.17) as maxi τi → 0. As a further confirmation of the need for condition (4.4), consider the case απ
2b2 < 1. The recursion (C.19)
is a decreasing sequence with τ ∗∞ = 0 by a standard fixed point argument. Furthermore, the bound on dg(τ)
dτ
38

implies g is Lipschitz and so |τ ∗
i+1 − τ ∗
i | = |g(τ ∗
i ) − g(τ ∗
i−1)| ≤ απ
2b2 |τ ∗
i − τ∗
i−1|. Then since g(0) = 0, it holds
that τ ∗
i ≤ απ
2b2
i τ0∗. Since P∞
i=1
απ 2b2
i= 1
1− απ
2b2
whenever απ
2b2 < 1, it holds that P∞
i=1 τi < P∞
i=1 τ ∗
i≤ 1
1− απ
2b2
,
so that a uniform in time control does not follow from the above sequence of thresholds {τ ∗
i }.
Finally, to obtain a uniform in time log-concavity constant, consider the fixed point of (C.17),
c∞ = −1 ± p1 + 4( απ
2 − b2)
2 , (C.20)
which has one real positive solution under condition (4.4). Note also that ct approaches c∞ monotonically, as is true for scalar, autonomous Riccati ODEs. Its explicit solution is trivially found by solving the separable ODE, which we include here for completeness. Denote by c∞,1 and c∞,2, the positive and negative solutions of (C.20), respectively. Then,
Z cT
c0
1
(ct − c∞,1)(ct − c∞,2) dct = −
ZT
0
dt
(cT − c∞,1)(c0 − c∞,2)
(cT − c∞,2)(c0 − c∞,1) = e−T (c∞,1−c∞,2)
(cT − c∞,1) = l0e−T (c∞,1−c∞,2)(cT − c∞,2)
cT = c∞,1 − c∞,2l0e−T (c∞,1−c∞,2)
1 − l0e−T (c∞,1−c∞,2)
where l0 = (c0−c∞,1)
(c0−c∞,2) . Finally, noting that αT = cT + απ
2 yields the result.
39

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:15.173Z
- **Text Length:** 101034 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 39 of 39
