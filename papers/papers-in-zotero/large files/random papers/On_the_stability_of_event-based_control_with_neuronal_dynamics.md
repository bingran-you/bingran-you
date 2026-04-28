# PDF Document: Eilers et al. - 2025 - On the stability of event-based control with neuronal dynamics.pdf

**File Path:** Eilers et al. - 2025 - On the stability of event-based control with neuronal dynamics.pdf

**Processed Date:** 2026-02-10T18:18:29.801Z

**File Size:** 1303.61 KB

**Total Pages:** 11

**Extracted Pages:** 11

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3343

**Title:** On the stability of event-based control with neuronal dynamics

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

On the stability of event-based control with neuronal dynamics
Luke Eilers, Jonas Stapmanns, Catarina Dias, and Jean-Pascal Pfister
Abstract— Event-based control, unlike analogue control, poses significant analytical challenges due to its hybrid dynamics. This work investigates the stability and inter-event time properties of a control-affine system under event-based impulsive control. The controller consists of multiple neuronal units with leaky integrate-and-fire dynamics acting on a timeinvariant, multiple-input multiple-output plant in closed loop. Both the plant state and the neuronal units exhibit discontinuities that ca-
ncel if combined linearly, enabling a direct correspondence between the event-based impulsive controller and a corresponding analogue controller. Leveraging this observation, we prove global practical stability of the event-based impulsive control system. In the general nonlinear case, we show that the event-based impulsive controller ensures global practical asymptotic stability if the analogue system is input-to-state stable (ISS) with respect to specific disturbances. In the linear case, we fur-
ther show global practical exponential stability if the analogue system is stable. We illustrate our results with numerical simulations. The findings reveal a fundamental link between analogue and event-based impulsive control, providing new insights for the design of neuromorphic controllers.
I. INTRODUCTION
Both neuromorphic engineering and event-based control draw inspiration from biological systems [1]–[4]. Unlike periodic sampling, event-based sampling triggers updates only when necessary, reducing sensing, communication, and computation effort [5]–[7], which is particularly beneficial in distributed and networked systems [8]. Efficiency is likewise critical in the brain, where neurons organised in networks communicate via electrical pulses, so-called spikes, which makes brains inherently event-ba-
sed and impulsive [9]. Moreover, the brain can be viewed as a closed-loop control system [10]–[12]. Despite this strong biological motivation, theoretical guarantees for neuromorphic and event-based control systems remain difficult to obtain due to their hybrid dynamics, even though significant progress has been made in the last two decades [6], [13], [14]. Several approaches have been developed to analyse eventbased control systems. A common strategy is the hybrid systems framework using Lyapunov-
 functions [15], [16]. If the Lyapunov function decreases during both continuous and discontinuous dynamics, stability and gain properties follow [17]–[19]. Alternative approaches model the system as piecewise-linear [6], [18], [20] or perturbed-linear (PL) systems [18].
This work has been supported by the Swiss National Science Foundation grant entitled “Why spikes?” (310030 212247). Luke Eilers and Catarina Dias are with the Graduate School for Cellular and Biomedical Sciences, University of Bern, 3012 Bern, Switzerland. All authors are with the Department of Physiology, University of Bern, 3012 Bern, Switzerland.
Correspondence: {luke.eilers,jeanpascal.pfister}@unibe.ch
In contrast, event-based impulsive control is less explored but particularly interesting, since impulsive control inherently involves discrete events: each control action is an impulse applied at an event time, where both the timing and amplitude determine the closed-loop behaviour [21]. The seminal work [5], later extended in [22], quantified the advantage of eventbased over periodic sampling in a stochastic setting by considering event-based impulsive control. From a biological perspective, even-
t-based impulsive control also provides a natural abstraction for spike-based controllers. The stability analysis of such systems is more challenging, since possible increases of the Lyapunov function between impulses have to be compensated by decreases due to the impulses (see [21], [23]–[25] and Chapter 3.2 of [15]). This trade-off is often studied by discretising the dynamics at the event times [23]. We study an event-based impulsive controller with neuronal dynamics. Similar setups have been i-
nvestigated both in neuromorphic engineering [3], [23] and computational neuroscience [26]–[28], where it has been shown that neuronal dynamics can arise from a normative impulsive control law with a finite set of admissible impulses [26]. However, the stability properties of such systems remain only partially understood, limiting the applicability of neuromorphic controllers in reliable control design. We tackle this issue by proving practical stability and the existence of minimum inter-event ti-
mes for both linear and nonlinear dynamics, thereby extending the results of [23]. Our key observation is that the plant state and neuronal variables can be combined linearly such that their discontinuities cancel. The dynamics of the resulting continuous variable can be interpreted as a perturbed version of a corresponding analogue control system, similar to the PL systems approach [18], where a discretised event-based system is viewed as being perturbed compared to the control system with period-
ic sampling. This perspective allows us to analyse the system in continuous time using standard arguments without discretisation at event times. Importantly, we show that the stability of the event-based impulsive control system can be directly inferred from the corresponding analogue control system, thereby providing a novel method for the stability analysis and revealing a fundamental link between the two control paradigms. In many works, event triggering is based on Lyapunov functions [13], [25-
], [29], [30]. In contrast, our triggering mechanism is biologically inspired and effectively implements quantisation with hysteresis. This makes our approach similar to [31], where quantisation occurs at both the sensor and actuator. However, we consider impulsive control rather than zero-order hold, and there is only one quantisation step.
arXiv:2511.18015v1 [eess.SY] 22 Nov 2025

II. PRELIMINARIES
A. Notation and definitions
We denote by R≥0 the non-negative real numbers. We denote by I := [0, 1] the unit interval. We denote by ∥x∥ the Euclidean norm of a vector x ∈ Rn and by ∥A∥ the spectral norm of a matrix A ∈ Rn×m. We denote by A⊺ ∈ Rm×n the transpose of the matrix A. We denote by I the identity matrix. For a1, . . . , an ∈ R, D = diag(a1, . . . , an) ∈ Rn×n denotes the diagonal matrix with entries Dii = ai for all i = 1, . . . , n. We write A ≻ 0 (A ⪰ 0) if the matrix A is symmetric positive (semi-)definite. We d-
enote by λmin(A) and λmax(A) the smallest and the largest eigenvalue of A, respectively. We denote by κ(A) := λmax(A)/λmin(A) the condition number of the matrix A. We say that a matrix A is Hurwitz if Re(λi) < 0 for all eigenvalues λi of A. We denote by δ(t) the Dirac delta function. We denote by [x]+ := max(x, 0) the positive part of x ∈ R. We say that a continuous function α : [0, a) → [0, ∞) is of class K if it is strictly increasing and α(0) = 0. We say that a function α of class K is of class-
 K∞ if a = ∞ and limr→∞ α(r) = ∞. We say that a function β : [0, ∞) × [0, ∞) → [0, ∞) is of class KL if for any t ≥ 0 the mapping r 7→ β(r, t) is of class K, and for any r ≥ 0 the mapping t 7→ β(r, t) is decreasing and limt→∞ β(r, t) = 0.
Definition 1 (Global practical stability): Consider the dynamical system x ̇ (t) = h(x(t)), x ∈ Rn, with h(0) = 0. We say that the system is
1) globally practically asymptotically stable if there exists a function β of class KL and constant C ≥ 0 such that
∥x(t)∥ ≤ β(∥x(0)∥, t) + C,
2) globally practically exponentially stable if there exist constants α < 0 and D, C ≥ 0 such that
∥x(t)∥ ≤ D ∥x(0)∥ · eαt + C.
In both cases, it holds that lim supt→∞∥x(t)∥ ≤ C and we call C the ultimate bound. If C = 0, the term “practically” is omitted.
B. Control loop and state dynamics
We consider a control-affine system with a multiple-input multiple-output plant,
x ̇ (t) = f (x(t)) + u(t), x(0) = x0,
where x(t) ∈ RK , K ≥ 1, is the state, u(t) ∈ RK the control input, and f : RK → RK is a linear or nonlinear drift function. The objective of the control input is to drive the state towards a target state x∗(t). We denote the error between state and target state by e(t) = x(t) − x∗(t). In the case of analogue control, we assume that the control input is a function of the error, i.e., u(t) = k(e(t)). For instance, a proportional controller is given by k(e) = −α e, α > 0. Here, we consider an event--
based and impulsive control mechanism using N neuronal units, which generate events upon threshold crossing of their respective neuronal variables. The event times determine when impulses are applied
to the state. If ti
j denotes the j-th event time of unit i, we can write the so-called spike trains as si(t) = P
j δ(t − ti
j ), i ∈ {1, . . . , N }. An input matrix B ∈ RK×N then maps the vector of spike trains s(t) to the state space. This defines the impulsive control input, u(t) = Bs(t). The dynamics of the state are hence given by
x ̇ (t) = f (x(t)) + Bs(t), x(0) = x0. (1)
In the absence of events, the system evolves according to x ̇ (t) = f (x(t)). Assuming right-continuity of all variables, at event time t = ti
j it holds that x(t) = lims↑t x(s) + Bi, where Bi denotes the i-th column of B. This description is used by the hybrid systems formalism [15], [16]. Here, we instead use the notation (1) to propose a novel method. We denote the neuronal variables by zi(t), and the respective thresholds by θi > 0, i ∈ {1, . . . , N }. Then, the event-triggering by threshold crossing can be written as
si(t) = δzi(t)=θi for i ∈ {1, . . . , N }. (2)
The dynamics of zi are inspired by the leaky integrate-andfire neuron model [32], and are given by
z ̇i(t) = −λizi(t) + gi(t) − θisi(t), zi(0) = 0, (3)
where λi ≥ 0 is the leakage constant and gi(t) is the input being integrated. Here, we assume that gi(t) is a function of the error e(t) and non-negative, gi(t) = gi(e(t)) ≥ 0. Upon reaching the threshold, each neuronal variable is reset to zero due to the term −θsi(t), such that zi(t) ∈ [0, θi]. Hence, the neuronal variables can be thought of as membrane potentials. The closed loop between plant and controller is illustrated in Fig. 1, and example trajectories are presented in Fig. 2 a). We can w-
rite the neuronal variables’ dynamics in vector notation. Let Θ = diag(θ1, . . . , θN ) be the reset matrix and Λ = diag(λ1, . . . , λN ) the leakage matrix. Moreover, let g : RK → RN
≥0 be the input function and let z(t) ∈ RN be the vector of neuronal variables. Then, we obtain
z ̇(t) = −Λz(t) + g(e(t)) − Θs(t), z(0) = 0. (4)
The key observation for our method is that both the state and the neuronal variables have the same source of discontinuities, s(t). If we consider the auxiliary variable xc(t) := x(t) + BΘ−1z(t), the discontinuities cancel out:
x ̇ c(t) =x ̇ (t) + BΘ−1z ̇(t)
=f (x(t)) + Bs(t) − BΘ−1Λz(t)
+ BΘ−1g(e(t)) − BΘ−1Θs(t)
=f (x(t)) + BΘ−1g(e(t)) − BΘ−1Λz(t). (5)
We write “c” since xc is the continuous version of x. Fig. 2 and Fig. 4 show trajectories of x(t) and xc(t). To interpret the auxiliary variable xc(t), imagine that at any time t, the i-th neuronal unit could be “asked” to generate an event and emit a hypothetical impulse rescaled by how close the neuronal variable is to its threshold, i.e., Bizi(t)/θi. Applying the hypothetical impulses of all neuronal units to the state amounts to a jump from x(t) to xc(t).

In the following section, we will analyse the practical stability of x(t), which can be inferred from the practical stability of xc(t) by noticing that
∥xc(t) − x(t)∥ = ∥BΘ−1z(t)∥
≤ sup
s∈IN
∥Bs∥ =: ∥B∥IN , (6)
where we used that zi(t)/θi ∈ I for all i ∈ {1, . . . , N }.
Controller
Plant
control input
target
state error
Fig. 1. The control loop between the controller, which receives the error and generates a control input, and the plant.
III. THEORETICAL RESULTS
A. Stability
The event-based impulsive control system evolves uncontrolled between events, so a Lyapunov function typically decreases only at the impulses. Such systems can be analysed within the hybrid-systems framework by discretising them at the event times [23]. This approach works well when the evolution between two events, tk and tk+1, depends only on the initial state x(tk), as in the setup of [23] with two neuronal units. For an arbitrary number of units, however, the analysis quickly becomes intractab-
le unless the units are sequentially active. Instead, we will consider a Lyapunov function of xc, which eliminates the need for discretisation. In the following analysis, we will consider only a constant target state x∗(t) = 0 for the sake of simplicity. The error is then given by e(t) = x(t). We will first apply our method to linear dynamics with scalar states, then to linear dynamics with multidimensional states, and finally to general nonlinear dynamics. For the first case, we assume that f is -
linear, the state is scalar, K = 1, and that we have two neuronal units, N = 2. This is already a slight generalisation of the setup in [23], where a specific choice of the input function g was analysed.
Theorem 2 (Linear dynamics, scalar state): Let x ∈ R be the state of an event-based impulsive control system as in (1)–(4) with input matrix B ∈ R1×2, input function g : R → R2
≥0, reset matrix Θ = diag(θ, θ) with θ > 0, leakage matrix Λ = diag(λ, λ) with λ ≥ 0, and drift function f (x) = ax with a ∈ R. Let k(x) := BΘ−1g(x) be linear, i.e., k(x) = −bx for some b ∈ R. If b > a, the system is globally practically exponentially stable,
|x(t)| ≤ |x(0)|·e(a−b)·t/2+∥B∥I2 1 + |a − b + λ|
|a − b| . (7)
Proof: With xc(t) := x(t) + BΘ−1z(t), we see that
x ̇ c(t) = x ̇ (t) + BΘ−1z ̇(t)
(=5) ax(t) − bx(t) − λBz(t)/θ
= (a − b)xc(t) − (a − b + λ)Bz(t)/θ. (8)
Let d := a − b + λ. We consider the Lyapunov function candidate V (xc) = xc2, and obtain
V ̇ (xc(t)) = 2xc(t)x ̇ c(t)
(8=) 2(a − b)xc(t)2 − 2dxc(t)B(z(t)/θ) (9)
(6)
≤ 2(a − b)xc(t)2 + 2|d||xc(t)|∥B∥I2
≤ 2(a − b)xc(t)2 + |d| ηxc(t)2 + ∥B∥2
I2 /η
≤ 2(a − b) + |d|η xc(t)2 + |d|∥B∥2
I2 /η,
for any η > 0. Here, we used Young’s inequality for products, 2ab ≤ η a2 + b2/η for any a, b ≥ 0. This implies with α := 2(a − b) + |d| η and C := |d| · ∥B∥2
I2 /η that
V ̇ (xc(t)) ≤ αV (xc(t)) + C,
which yields for U (t) = V (xc(t)) + C/α that
U ̇ (t) = V ̇ (xc(t)) ≤ αV (xc(t)) + C = αU (t).
The comparison lemma (see Lemma 13 in the Appendix) shows that
xc(t)2 = V (t) = U (t) − C/α ≤ U (0)eαt − C/α
= (xc(0)2 + C/α)eαt − C/α
= xc(0)2eαt − C/α(1 − eαt). (10)
If α < 0 and t → ∞, (10) equals −C/α. We minimise −C/α by choosing η = b−a
|d| > 0, which yields α = a − b < 0 and −C/α = ∥B∥2
I2 |d|2/(a − b)2. Finally, we obtain
|x(t)| ≤ |xc(t)| + ∥B∥I2
≤ |x(0)| · e(a−b)·t/2 + ∥B∥I2 1 + |d|
|a − b| .
If λ = b−a, the term 1+ |a−b+λ|
|a−b| is minimal, and we obtain ∥B∥I2 as the ultimate bound. Conversely, the ultimate bound tends to infinity as λ → ∞. In the case without leakage, λ = 0, the ultimate bound is given by 2∥B∥I2 . How can the analogue control input k(x) = BΘ−1g(x) be interpreted? If we consider (3) with a constant input gi(x(t)) and without leakage, the event rate of unit i is given by ri(t) = gi(x(t))/θi, which yields k(x) = Br(x). When many events are generated, g(x(t)) ≫ 0, the leakage is negligible and the rate-
 approximates the impulsive output well. Hence, it holds that Bs(t) ≈ k(x) when integrated. The regime where many events are generated is precisely the one that determines the stability, which is why the stability of the corresponding analogue system implies the global practical stability of the event-based impulsive control system. The ultimate bound in (7) reflects that the impulsive control is better approximated by a rate when the impulses are small. If the uncontrolled dynamics are unstable, -
the

ultimate bound can in general never be zero and exponential stability cannot be shown, as already observed in [23]. The ultimate bound increases as the leakage increases, which is to be expected since the units will generate fewer events. On the other hand, whether or not the system is practically stable does not depend on the choice of λ, since the leakage becomes negligible when the time between events is small. Next, we provide simple conditions that guarantee an ultimate bound of 2∥B∥I2 and ∥-
B∥I2 , respectively:
Corollary 3 (Simplified bound for Theorem 2): If the assumptions of Theorem 2 hold and b ≥ a + λ, the event-based impulsive control system is globally practically exponentially stable,
|x(t)| ≤ |x(0)| · e(a−b)·t/2 + 2∥B∥I2 . (11)
Proof: If b ≥ a+λ, it holds that |a−b+λ| = b−a−λ, and this yields
1 + |a − b + λ|
|a − b| = 1 + b − a − λ
b−a =2− λ
b − a ≤ 2.
Theorem 4 (Tighter bound for Theorem 2): Let the assumptions of Theorem 2 hold, and let g(x) = (g1(x), g2(x)). If b ≥ a + λ, and if g1(x) = 0 if x ≤ 0, and g2(x) = 0 if x ≥ 0, then the event-based impulsive control system is globally practically exponentially stable,
|x(t)| ≤ |x(0)| · e(a−b)·t + ∥B∥I2 . (12)
Proof: The full proof is given in the Appendix (Theorem 14). Here, we sketch the proof for the case where the uncontrolled dynamics are divergent, i.e. a > 0: Then, the impulses bring the system closer to zero, and B(z(t)/θ) has the opposite sign of x(t) by our assumptions on the input function g. Assuming without loss of generality that x(0) > 0, we denote by t1 the first event which switches the sign of x. We divide the proof into two steps. First, we consider t ∈ [0, t1), where x(t) > 0. Using -
(8), it follows xc(t) ≤ x(0) · e(a−b)·t since b ≥ a + λ and B(z(t)/θ) ≤ 0. Using the comparison lemma and (6), this yields (12). In the second step, once the sign of x(t) changes, it can be shown that the sign continues to change with every event if the amplitude of the impulses is the same for both neuronal units. This implies |x(t)| ≤ ∥B∥I2 , so that also for t ∈ [t1, ∞) the bound (12) is satisfied. The other cases, i.e. convergent dynamics, a < 0, impulses away from the target, and unequal ampl-
itudes are covered in the full proof.
Remark 5 (Comparison to existing results): We compare our result to [23], and consider B = [−α, α] for some α > 0, g(x) = [x]+, [−x]+
⊺, such that b = α/θ, and ∥B∥I2 = α. In [23], semi-global practical exponential stability was shown with ultimate bound 2α under the assumption that θ < ρα/(λ+a) for some ρ ∈ (0, 1), and with a constraint on |x(0)| dependent on ρ. We showed global practical exponential stability for b > a, which is equivalent to θ < α/a. If θ < a/(λ + a), Corollary 3 guarantees an ultimate bound of 2α, and Theorem 4 guarantees a
tighter ultimate bound of α due to the choice of the input function g. Hence, we extend the results of [23] by showing practical stability under weaker conditions with an improved ultimate bound. Finally, [23] show the speed of convergence with respect to the event times indexed by j, i.e., |x(t)| ≤ γj|x(0)| + 2α, for some γ ∈ (0, 1) and t ∈ [tj, tj+1], which has to be compared to the minimal and maximal inter-event times to analyse the speed of convergence with respect to continuous time. Here, w-
e directly consider the latter.
We will now consider the generalisation of Theorem 2 to multidimensional states and possibly different threshold and leakage constants for all N neuronal units.
Theorem 6 (Linear dynamics, multidimensional state): Let x ∈ RK be the state of an event-based impulsive control system as in (1)–(4) with input matrix B ∈ RK×N , input function g : RK → RN
≥0, reset matrix Θ ∈ RN×N , leakage
matrix Λ ∈ RN×N , and drift function f (x) = Ax for A ∈ RK×K . Let k(x) := BΘ−1g(x) be linear, i.e., k(x) = −Kx for some K ∈ RK×K . If A − K is Hurwitz, then there exists a matrix P ≻ 0 such that the system is globally practically exponentially stable,
∥x(t)∥ ≤∥x(0)∥pκ(P ) · e−λmin(P )−1·t/4 + ∥B∥IN
+ 2 P (A − K)B + BΛ IN , (13)
where λmin(P ) and κ(P ) are the smallest eigenvalue and the condition number of P , respectively.
Proof: We again have xc(t) = x(t) + BΘ−1z(t), and
x ̇ c(t) (=5) (A − K) xc(t) − BΘ−1z(t) − BΘ−1Λz(t)
= (A − K)xc(t) − ((A − K)B + BΛ)Θ−1z(t),
(14)
where we used that Θ−1Λ = ΛΘ−1. Let E := −((A − K)B + BΛ). Since A − K is Hurwitz, for any matrix Q ≻ 0 there exists a unique matrix P ≻ 0 such that the following Lyapunov equation is satisfied (see Theorem 4.6 of [33]):
P (A − K) + (A − K)⊺P = −Q. (15)
For simplicity, we choose Q = I, the identity matrix. The final decay rate can be improved by optimising over Q. We consider the Lyapunov function candidate V (xc) = xc⊺P xc:
V ̇ (xc(t)) = xc(t)⊺P x ̇ c(t) + x ̇ c(t)⊺P xc(t)
= xc(t)⊺(P (A − K) + (A − K)⊺P )xc(t)
+ 2xc(t)⊺P EΘ−1z(t)
(15)
≤ − xc(t)⊺xc(t) + 2|xc(t)⊺P EΘ−1z(t)|
≤ − ∥xc(t)∥2 + 2∥xc(t)∥∥P E∥IN
≤ − ∥xc(t)∥2 + η∥xc(t)∥2 + ∥P E∥2
IN /η
≤ (η − 1)/λmin(P ) · V (xc(t)) + ∥P E∥2
IN /η,
for any η > 0 using Young’s inequality for products. λmin(P ) > 0 denotes the smallest eigenvalue of P . Let α := (η − 1)/λmin(P ) and C := ∥P E∥2
IN /η. As in the proof of Theorem 2 (see (10)) it follows that
V (xc(t)) ≤ V (xc(0))eαt − C/α · (1 − eαt).

This implies that
∥xc(t)∥2 ≤ λmax(P )
λmin(P ) ∥xc(0)∥2eαt − C(1 − eαt)
αλmin(P ) .
To minimise −C/(α λmin(P )) as before, we calculate that
−C
αλmin(P ) = C
1 − η = ∥P E∥2
IN
η(1 − η) ,
which is minimised by η = 1/2 with −C/(αλmin(P )) = 4∥P E∥2
IN , and α = −1/(2λmin(P )). We conclude that
∥x(t)∥ ≤∥x(0)∥pκ(P ) · e−λmin(P )−1·t/4
+ 2∥P E∥IN + ∥B∥IN .
For K = 1, we recover Theorem 2 with P = 1/(2(b−a)). Next, we generalise Corollary 3 to the multidimensional case under the assumption λi = λ for all i = 1, . . . , N . As in the scalar case, this simplifies the ultimate bound.
Corollary 7 (Simplified bound for Theorem 6): If the assumptions of Theorem 6 hold, λi = λ ≥ 0 for all i ∈ {1, . . . , N }, and there exists P ≻ 0 satisfying (15) and 1
2λ I − P ⪰ 0, then the system is globally practically exponentially stable,
∥x(t)∥ ≤∥x(0)∥pκ(P ) · e−λmin(P )−1·t/4
+ 2(1 + ∥S∥)∥B∥IN ,
where S := 1
2 P (A − K) − (A − K)⊺P . Proof: First, we see that
2∥P (A − K)B + BΛ ∥IN
≤2∥P (A − K) + λP ∥ · ∥B∥IN .
Moreover, we have that 2P (A−K)+2λP = −I +2S +2λP by definition of S and (15). This implies using 1
2λ I − P ⪰ 0,
2∥P (A − K) + λP ∥ ≤ 2∥S∥ + ∥I − 2λP ∥ ≤ 2∥S∥ + 1.
Inserting both inequalities into (13) concludes the proof. The matrix S can be interpreted as representing rotations in the dynamics given by A − K with respect to the metric induced by P . Indeed, we can write P (A − K) = − 1
2I + S. The ultimate bound grows as rotations increase. The linear case shows that xc evolves like an analogue system with uniformly bounded disturbances, see (14). By considering the nonlinear case next, we will identify how exactly the dynamics are disturbed in general. To do so, we consider the analogue closed-loop system given by
y ̇(t) = f y(t) + d1(t) + u(t) + d2(t), (16)
with u(t) = k(y(t) + d1(t)),
where d1(t), d2(t) ∈ RK are disturbances to the system. Inspired by [13], we define the Input-to-State stability (ISS) of this system in terms of Lyapunov functions (cf. [34]):
Definition 8 (Input-to-State stability, adapted from [13]): A smooth function V : RK → R≥0 is said to be an ISS
Lyapunov function for the closed-loop system (16) if there exist class K∞ functions α ̄,  ̄α, α, γ1, and γ2 satisfying
 ̄α(∥y∥) ≤ V (y) ≤ α ̄(∥y∥),
∇V (y) · (f (y + d1) + k(y + d1) + d2)
≤ − α(∥y∥) + γ1(∥d1∥) + γ2(∥d2∥). (17)
The closed-loop system (16) is said to be ISS with respect to disturbances d1, d2 ∈ RK if there exists an ISS Lyapunov function for (16). When d1 = d2 = 0, V becomes a standard Lyapunov function.
Theorem 9 (Nonlinear dynamics): Let x ∈ RK be the state of an event-based impulsive control system as in (1)–(4) with input matrix B ∈ RK×N , input function g : RK → RN
≥0,
reset matrix Θ ∈ RN×N , leakage matrix Λ ∈ RN×N , and drift function f : RK → RK . If the analogue system (16) with drift function f and k(y) := BΘ−1g(y) is ISS, then the event-based impulsive control system is globally practically asymptotically stable with functions β of class KL and η1, η2 of class K∞ such that
∥x(t)∥ ≤ β(∥x(0)∥, t) + η1 (∥B∥IN ) + η2(∥BΛ∥IN ). (18)
Proof: We define xc(t) := x + BΘ−1z(t) as before. Then, it holds that
x ̇ c(t) = x ̇ (t) + BΘ−1z ̇(t)
(5=) f (x(t)) + BΘ−1g(x(t)) − BΘ−1Λz(t)
= f (xc(t) + d1(t)) + k (xc(t) + d1(t)) + d2(t),
where d1(t) := −BΘ−1z(t) and d2(t) := −BΘ−1Λz(t). By assumption, the system with y = xc is ISS. Moreover, due to the bound (6) on BΘ−1z(t) it holds that ∥d1(t)∥ ≤ ∥B∥IN and similarly ∥d2(t)∥ ≤ ∥BΛ∥IN for all t ≥ 0. Lemma 15 (see Appendix) implies that there exist functions β of class KL and η′1, η2 of class K∞ such that
∥xc(t)∥ ≤ β(∥xc(0)∥, t)+η′
1(∥B∥IN )+η2(∥BΛ∥IN ), (19)
and using xc(0) = x(0) we see that
∥x(t)∥ ≤ ∥xc(t)∥ + ∥BΘ−1z(t)∥
(19)
≤ β(∥x(0)∥, t) + η1(∥B∥IN ) + η2(∥BΛ∥IN ),
where r 7→ η1(r) := η′1(r) + r is of class K∞.
B. Minimum inter-event times
The event-triggering via leaky integrate-and-fire dynamics allows for an easy analysis of the inter-event times. However, we can only bound the inter-event times for each neuronal unit individually. Recall that for i ∈ {1, . . . , N },
si(t) = δzi(t)=θi and (20)
z ̇i(t) = −λizi(t) + gi(t) − θisi(t), zi(0) = 0. (21)
Lemma 10 (Bounds on inter-event times): If there exist g+, g− ∈ R≥0 such that
g− ≤ gi(t) ≤ g+ (22)

for all t ≥ 0, then it holds for all j ≥ 1 that
ti
j+1 − ti
j ≥− 1
λi
log 1 − θi
g+
λi ≥ θi
g+
,
ti
j+1 − ti
j ≤− 1
λi
log 1 − θi
g−
λi .
Proof: We denote t0 := ti
j and t1 := ti
j+1. From (20) and by solving (21) for t ∈ [t0, t1) we obtain
θi = lsi↑tm1
zi(s) =
Z t1
t0
gi(s) e−λi(t1−s) ds (23)
≤
Z t1
t0
g+ e−λi(t1−s) ds = g+
λi
1 − e−λi(t1−t0) , (24)
which implies
t1 − t0 ≥ − 1
λi
log 1 − θi
g+
λi ≥ θi
g+
. (25)
The upper bound can be derived similarly. Note that − 1
λi log 1 − θi
g− λi = ∞ if λi ≥ g+/θi, which means that there are no events. Lemma 12 directly implies the following result:
Theorem 11 (Minimum inter-event times): Let x ∈ RK be the state of an event-based impulsive control system as in (1)–(4) with input function g : RK → RN
≥0. Let θmin denote the smallest threshold and λmin the smallest leak constant. If there exists C ≥ 0 such that ∥x(t)∥ ≤ C for all t ≥ 0 and α ∈ K∞ such that gi(x) ≤ α(∥x∥) for all i ∈ {1, . . . , N }, then it holds that
inf {ti
j+1 − ti
j | j ≥ 0, 1 ≤ i ≤ N } (26)
≥− 1
λmin
log 1 − θminλmin
α(C) ≥ θmin
α(C) . (27)
Proof: It holds ∥x(t)∥ ≤ C for all t ≥ 0, which implies
gi(x(t)) ≤ α(∥x(t)∥) ≤ α(C), (28)
for all i ∈ {1, . . . , N } and t ≥ 0. Lemma 12 hence implies
ti
j+1 − ti
j ≥− 1
λi
log 1 − θi
α(C) λi
≥− 1
λmin
log 1 − θmin
α(C) λmin ≥ θmin
α(C) , (29)
which concludes the proof. This theorem can be applied to the results of Section III-A to obtain lower bounds on the inter-event times.
C. Extension to connected neuronal units
So far, we have assumed that there are no interactions between neuronal units. While this simplifies the analysis, larger numbers of neuronal units are usually connected to build networks, so-called spiking neural networks. In the following, we show that our method can also be applied to connected neuronal units by adapting a spiking controller from [26], where the dynamics were derived from a greedy spiking rule. Although that work did not address stability, such a rule would simplify its analysi-
s. In our adaptation, this advantage is absent, requiring an explicit stability analysis.
Suppose that we want to implement an event-based controller with control input Bs(t) inspired by an analogue controller with control input k(x(t)). The neuronal unit i should fire if Bi aligns well with k(x(t)). This can be achieved by integrating the projection of k(x(t)) onto Bi in the neuronal variable zi. Unless all Bi are orthogonal, this will lead to redundant spikes and further allow for negativevalued neuronal variables. Both problems can be solved by introducing suitable connections betwe-
en units. We define the neuronal variables z(t) and spike trains s(t) as follows,
si(t) = δzi(t)≥B⊺
i Bi ∀i ∈ {1, . . . , N }, (30)
z ̇(t) = −Λz(t) + B⊺k(x(t)) − B⊺Bs(t), (31)
where we deliberately added a leakage. The off-diagonal elements of the reset matrix B⊺B have two effects. If Bi and Bj point in the same direction, B⊺
i Bj > 0, a spike of si will inhibit zj. If Bi and Bj point in opposite directions, B⊺
i Bj < 0, a spike of si will excite zj, preventing the neuronal variables from becoming indefinitely negative. We assume that the controller can steer in all directions,
Br | r ∈ RN
≥0 = RK (32)
This requires N ≥ K +1: If Bi, i ∈ {1, . . . , K}, is a basis of
RK , one can choose BK+1 = − PK
i=1 Bi. BB⊺ is invertible due to (32), and we define similarly to before
xc(t) = x(t) + (BB⊺)−1Bz(t). (33)
This implies with R := (BB⊺)−1B and using that RB⊺ = I,
x ̇ c(t) = x ̇ (t) + Rz ̇(t) (34)
=f (x(t)) + Bs(t) − RΛz(t) + RB⊺k(x(t)) − RB⊺Bs(t) (35)
=f (x(t)) + k(x(t)) − RΛz(t) (36)
=f (xc(t) + d1(t)) + k(xc(t) + d1(t)) + d2(t), (37)
with d1(t) := −Rz(t) and d2(t) := −RΛz(t). The same analyses as in Section III-A can now be applied if d1(t) and d2(t) are uniformly bounded. As intended, the corresponding analogue control input is given by k(x). We now show that z(t) is uniformly bounded from above and below, which implies the boundedness of d1(t) and d2(t). It still holds zi(t) ≤ B⊺
i Bi by definition. To bound zi(t) from below, we use the following lemma:
Lemma 12 (Bounds on w⊺z(t)): Let z(t) be the neuronal variables of the event-based impulsive controller defined by (1), (30), and (31).
1) If Λ = λI for some λ ≥ 0, then there exists a vector w ∈ RN with strictly positive entries such that for all t ≥ 0 it holds
w⊺z(t) = 0. (38)
2) If λi > 0 for all i ∈ {1, . . . , N }, and λmax > λmin, where λmax, λmin denote the largest and smallest λi, respectively, then there exists a vector w ∈ RN with strictly positive entries such that for all t ≥ 0 it holds
w⊺diag(B⊺B) ≥ w⊺z(t) ≥ γ w⊺diag(B⊺B), (39)

for γ := 1 − λmax
λmin < 0.
Proof: There exist qi ∈ RN
≥0 such that Bqi = −Bi due
to (32) for all i ∈ {1, . . . N }. Then, let w := PN
i=1 ei + qi,
where ei is the unit vector in direction i. This yields wi ≥ 1
and Bw = PN
i=1 Bei + Bqi = 0. Now, we obtain
w⊺z ̇(t) = −w⊺Λz(t) + w⊺B⊺k(x(t)) − w⊺B⊺Bs(t)
= −w⊺Λz(t).
1) If Λ = λI for λ ≥ 0, this implies using z(0) = 0 that
w⊺z(t) = w⊺z(0) · e−λt = 0,
which proves (38). 2) If λi > 0 for all i ∈ {1, . . . , N }, and λmax > λmin, we need to relate w⊺Λz(t) to w⊺z(t). We denote the positive and negative part of z(t) by z+(t) and z−(t), respectively, such that z(t) = z+(t) − z−(t). Moreover, let d := diag(B⊺B). Then, it holds
w⊺Λz(t) = w⊺Λz+(t) − w⊺Λz−(t)
≤ λmaxw⊺z+(t) − λminw⊺z−(t)
≤ (λmax − λmin)w⊺d + λminw⊺z(t),
where we used z+(t) ≤ d elementwise. This implies
w⊺z ̇(t) = −w⊺Λz(t)
≥ (λmin − λmax)w⊺d − λminw⊺z(t)
(∗)
≥0
⇐⇒ w⊺z(t) ≤ 1 − λmax
λmin
· w⊺d = γ w⊺d,
where the equivalence is with respect to the inequality marked by (∗). This implies with w⊺z(0) = 0 that w⊺z(t) ≥ γ w⊺diag(B⊺B). The upper bound follows directly from zi(t) ≤ B⊺
i Bi.
Let us consider the case Λ = λI for some λ ≥ 0. Lemma 12 shows that a linear combination of the neuronal variables with strictly positive weights w exists such that w⊺z(t) = 0 for all t ≥ 0. Since z(t) is uniformly bounded from above elementwise, we can conclude that z(t) is also bounded from below elementwise. If zi(t) ≥ 0, the bound is trivial. If zi(t) < 0, we have
zi(t) = 1
wi
wizi(t) ≥
X
j:zj (t)<0
wj zj (t)
wi
=−
X
j : zj (t)≥0
wj zj (t)
wi
≥−
X
j:j̸=i
wj B⊺
j Bj
wi
,
where we used Lemma 12, and that zj(t) ≤ B⊺
j Bj. If λi > 0 for all i ∈ {1, . . . , N }, and λmax > λmin, it follows similarly that
zi(t) ≥ γ w⊺diag(B⊺B)
wi
−
X
j:j̸=i
wj B⊺
j Bj
wi
.
In both cases, this implies that d1(t) and d2(t) are uniformly bounded.
IV. NUMERICAL EXPERIMENTS
We simulate the event-based impulsive controllers introduced in the previous sections to illustrate our theoretical results. First, we consider the scalar linear case of Theorem 2 using the controller defined in Remark 5. If a = 1, α = 1, and θ = 1/2.5, we obtain b = 2.5, and hence the condition b ≥ a + λ is not fulfilled for λ = 3. In this case, Fig. 2 (left) shows that x(t) never reaches zero due to the leakage, and x(t) is indeed lower than the bound (7). If λ = 1.5, (12) of Corollary 3 applies-
, and we can see from Fig. 2 (right) that x(t) oscillates around zero and is more tightly bound by (12). The middle panel of Fig. 2 shows that the bound is tight for λ = 1.5, i.e., when b = a + λ. Next, we analyse whether the condition a < b is necessary for stability. We consider the same controller as before with λ ∈ {0, 3}, a ∈ [0, 5] and θ ∈ [1/5, ∞), such that b ∈ (0, 5]. We initialise the plant at x(0) = 50.5 and simulate for time T = 200. If the control system is stable and x(0) is far away-
 from the ultimate bound, it should hold x(0) > x(T ), and otherwise it should hold x(0) < x(T ). We choose C = log |x(T )/x(0)| /T as a heuristic stability measure, approximating the Lyapunov exponent. Fig. 3 shows that the system is stable, C < 0, if and only if a < b. At a = b, (9) shows that the system is only stable if λ = 0. Since a positive leakage only induces a linear growth rather than an exponential growth, this difference is not visible in Fig. 3.
Fig. 2. A one-dimensional linear plant controlled by an event-based impulsive controller. The state x(t) (solid) with discontinuities (shaded), the continuous variable xc(t) (dashed), the bound (7) (dash-dotted), and the tighter bound (12) (dotted) are shown in the upper plots for λ = 3 (left, cyan), λ = 1.5 (middle, blue), and λ = 0 (right, purple). The two neuronal variables z(t) (solid), and the rescaled spikes θs(t) (dashed) are shown in the lower plots (units 1 and 2 in the top and bottom hal-
f, respectively). The control system is given by f (x) = x, B = [−1, 1], θ = 1/2.5, and
g(x) = [x]+, [−x]+ ⊺.
In Corollary 7, we obtained an additional term compared to the scalar case that depends on rotations. To illustrate its impact, we consider a two-dimensional state with the same dynamics as before on the radial axis and additional rotation on the angular axis modulated by ω, f (x) = 1 ω
−ω 1 x.
For the controller, we use the previous controller for the two Cartesian axes x0 and x1, respectively, which results in N = 4 neuronal units: B = −1 1 0 0
0 0 −1 1 , g(x) = [x0]+, [−x0]+, [x1]+, [−x1]+
⊺. In Fig. 4, we simulate the

Fig. 3. Heatmap of the stability of the event-based impulsive control system as a function of a and b. We consider f (x) = ax, B/θ · g(x) = −bx, λ = 0 (left) and λ = 3 (right), and B, g as in Fig. 2. The stability for a pair a, b ∈ [0, 5] is measured by C = log |x(T )/x(0)| /T for x(0) = 50.5 and T = 200. The black squares on the diagonal indicate a = b.
control system for a = 1, λ = 0.2 and θ = 1/1.5, such that Corollary 7 applies with ∥S∥ = ω/(2(b−a)). For both weak and strong rotations, ω ∈ {0.5, 3}, the state x(t) converges within the ball with radius given by the ultimate bound. As ω increases, the ultimate bound becomes more conservative.
Fig. 4. A two-dimensional linear plant controlled by an event-based impulsive controller. The state x(t) (solid) with discontinuities (shaded), the continuous variable xc(t) (dashed), and a ball with radius given by the ultimate bound (dotted) are shown for ω = 0.5 (left) and ω = 3 (right). The control system is given by f (x) = 1 ω
−ω 1 x, B = −1 1 0 0
0 0 −1 1 , g(x) = [x0]+, [−x0]+, [x1]+, [−x1]+ ⊺, λ = 0.2 and θ = 1/1.5.
V. CONCLUSION
We have analysed the stability and inter-event time properties of an event-based impulsive controller with neuronal dynamics. By leveraging the explicit dynamics of the plant and neuronal variables, we introduced an auxiliary variable free of discontinuities. This revealed a fundamental link between the event-based impulsive controller and a corresponding analogue controller, allowing us to apply standard arguments for analogue control theory. Using this novel method, we proved global practical as-
ymptotic stability for nonlinear systems and global practical exponential stability for linear ones, and derived lower bounds for the inter-event times. From a control theory perspective, the current work can be extended in the following ways. First, we expect our results to generalise to variable target states. Second, the controller only depends on the current error, rather than its history or derivative. One could consider causal operators instead. Finally, one could explore whether the stabili-
ty of the analogue control system is not only sufficient but
also necessary for the practical stability of the event-based impulsive control system, as our simulations suggest. The presented model can also be extended in various directions from a biological perspective. Although we consider multiple neuronal units, their connectivity is constrained. The class of connectivities to which our method is applicable remains to be identified. Further, spikes could be abstracted by kernel convolutions instead of simple impulses. We expect our framework to extend na-
turally to this case, with the corresponding analogue controller sharing the same convolutional dynamics. Finally, many neuron models entail mechanisms for time regularisation, such as refractory periods or spike frequency adaptation, which pose interesting challenges for the stability analysis. We here established a connection between event-based impulsive and analogue controllers in terms of stability. This relation lays the foundation for a systematic mapping between the two control types, exte-
nding beyond stability. Such a mapping will depend on neuronal properties such as leakage, refractoriness, and spike frequency adaptation. Importantly, such a framework could clarify the advantages of event-based impulsive control over analogue control with respect to plant dynamics and control costs.
APPENDIX
Lemma 13 (Special case of the comparison lemma): Let v(t) : [0, ∞) → R be a continuous and differentiable function and constants α, β ∈ R such that for all t ≥ 0,
v ̇(t) ≤ αv(t) + β.
Then, it holds for all t ≥ 0 that
v(t) ≤ v(0) + β
α · eαt − β
α.
Proof: Let us consider
w(t) := v(0) + β
α · eαt − β
α.
It follows that w(t) satisfies w(0) = v(0) and
w ̇ (t) = αw(t) + β.
By the comparison lemma (Lemma 3.4 of [33]), we conclude that
v(t) ≤ w(t) = v(0) + β
α · eαt − β
α.
Theorem 14 (Tighter bound for Theorem 2): Let the assumptions of Theorem 2 hold, and let g(x) = (g1(x), g2(x)). If b ≥ a + λ, and if g1(x) = 0 if x ≤ 0, and g2(x) = 0 if x ≥ 0, then the event-based impulsive control system is globally practically exponentially stable,
|x(t)| ≤ |x(0)| · e(a−b)·t + ∥B∥I2 . (40)
Proof: Let z(t) = (z1(t), z2(t)). We first consider the assumptions on the input function g. If x(0) = 0, it follows x(t) = 0 for all t ≥ 0 since g1(0) = g2(0) = 0. We denote

the first event time by t0 and consider x(0) > 0. We assume right-continuity of all variables. Due to the uncontrolled dynamics given by f (x) = ax, it follows x(t) > 0 for all t ∈ [0, t0), and hence z2(t) = 0 for all t ∈ [0, t0] due to z(0) = (0, 0). At t0, it again holds z(t0) = (0, 0) and either x(t0) > 0 or x(t0) ≤ 0. The same reasoning holds for x(0) < 0, but in this case we have that z1(t) = 0 for all t ∈ [0, t0]. Hence, the neuronal units are only sequentially active, depending on the sign-
 of x after the last impulse. Next, we consider the input function directly. Let B = (b1, b2). This implies ∥B∥I2 = max(|b1|, |b2|) if b1 and b2 have opposite signs, which is always the case as we will show. By assumption, it holds that
−bx = BΘ−1g(x)
=1
θ b1g1(x) + b2g2(x) =
( b1
θ g1(x) if x ≥ 0,
b2
θ g2(x) if x ≤ 0.
If b1 = 0 or b2 = 0, it follows b = 0 and x(t) = x(0) eat, which trivially satisfies (40). Hence, let b1, b2 ̸= 0, which implies
gi(x) =
(
− bθ
b1 [x]+ if i = 1,
bθ
b2 [−x]+ if i = 2.
Case 1, b < 0: Since gi(x) ≥ 0 for i ∈ {1, 2}, it holds
bθ
b1 ≤ 0 and bθ
b2 ≥ 0, which yields b1 > 0 and b2 < 0. Hence, the first neuronal unit, which is only active if the state is strictly positive, leads to further increases of the state, and conversely, the second neuronal unit, which is only active if the state is strictly negative, leads to further decreases of the state. In consequence, the state will never change its sign if b < 0. Let us hence assume that x(t) > 0 for all t ≥ 0. This implies z2(t) = 0 for all t ≥ 0, and thus
xc(t) = x(t) + b1z1(t)/θ ≥ x(t).
Further, it implies BΘ−1z(t) = b1z1(t)/θ > 0 for t ≥ 0. If we insert this into (8), we obtain
x ̇ c(t) = (a − b)xc(t) − (a − b + λ)b1z1(t)/θ
≤ (a − b)xc(t) + (b − a − λ)b1, (41)
using b − a − λ ≥ 0 and b1 > 0. The comparison lemma (Lemma 13) now implies that
xc(t) ≤ b − a − λ
b − a b1 + xc(0) − b − a − λ
b − a b1 · e(a−b)t
≤ xc(0) · e(a−b)t + b1.
Using xc(0) = x(0) and xc(t) ≥ x(t), this yields
x(t) ≤ x(0) · e(a−b)t + ∥B∥I2 .
Similar arguments can be applied if x(t) < 0 for all t ≥ 0. Case 2, b > 0: Opposite to the case b < 0, it holds b1 < 0 and b2 > 0. Hence, the first neuronal unit, which is only active if the state is strictly positive, leads to decreases of the state, and conversely, the second neuronal unit, which is only active if the state is strictly negative, leads to increases of the state. Let us assume that x(0) > 0 and let us denote
by t1 the first event time where x(t1) < 0. This time might not exist, in which case we set t1 = ∞. It now holds that x(t) > 0 for t ∈ [0, t1), and similar to (41) we obtain
x ̇ c(t) = (a − b)xc(t) − (a − b + λ)b1z1(t)/θ
≤ (a − b)xc(t),
for t ∈ [0, t1) using a − b + λ ≤ 0. The comparison lemma (Lemma 13) now implies that
xc(t) ≤ x(0) · e(a−b)t for all t ∈ [0, t1),
where we used xc(0) = x(0). If xc(t) ≥ 0, we have |xc(t)| ≤ |x(0)| · e(a−b)t, and with (6) this yields
|x(t)| ≤ |x(0)| · e(a−b)t + ∥B∥I2 .
If xc(t) < 0, x(t) and xc have opposite signs, which implies again using (6) that |x(t)| ≤ ∥B∥I2 . In total, this shows
|x(t)| ≤ |x(0)| · e(a−b)t + ∥B∥2
I for all t ∈ [0, t1). (42)
This concludes the proof if t1 = ∞. For t1 < ∞, we analyse the conditions that enable a sign change of the state. Case 2.1, a < 0: If the sign of the state changes at time t1, we can conclude that |x(t1)| ≤ ∥B∥I2 . Since the uncontrolled dynamics drive the state further towards zero, and the impulses lead to jumps towards zero with overshoots of at most max(|b1|, |b2|) = ∥B∥I2 , we can conclude that |x(t)| ≤ ∥B∥I2 for all t ≥ t1.
Case 2.2, a ≥ 0: We denote by t0 the event time just before t1. If t1 is the first event, we set t0 = 0. We can solve (21) using z1(t0) = 0 for t ∈ [t0, t1), which yields
z1(t) =
Zt
t0
e−λ(t−s) · bθ
−b1
x(t0) · eas ds (43)
= bθ
−b1(a + λ) x(t0) ea(t−t0) − e−λ(t−t0) .
Since θ = limt↑t1 z1(t), this implies
θ = bθ
−b1(a + λ) x(t0) ea(t1−t0) − e−λ(t1−t0) ,
which yields
x(t0) · ea(t1−t0) = x(t0) · e−λ(t1−t0) + −b1(a + λ)
b . (44)
Using this, we can express x(t1) as
x(t1) = x(t0) · ea(t1−t0) + b1
(4=4) x(t0) · e−λ(t1−t0) + −b1(a + λ)
b + b1
= x(t0) · e−λ(t1−t0) + b1(b − a − λ)
b (45)
≥ b1(b − a − λ)
b ≥ b1. (46)
Further, we can show a sufficient condition for x(t1) ≤ 0:
x(t0) ≤ −b1(b − a − λ)
b (47)
=⇒ x(t0) · e−λ(t1−t0) ≤ −b1(b − a − λ)
b
=⇒ x(t1) (4=5) x(t0) · e−λ(t1−t0) + b1(b − a − λ)
b ≤ 0.

Let t2 denote the time of the event after the event t1. Repeating the calculations (43)–(46) for t ∈ [t1, t2) and x(t1) < 0 yields
x(t2) = x(t1) · e−λ(t2−t1) + b2(b − a − λ)
b (48)
≤ b2(b − a − λ)
b . (49)
With a similar approach to (47), we obtain a sufficient condition for x(t2) ≥ 0,
x(t1) ≥ −b2(b − a − λ)
b =⇒ x(t2) ≥ 0. (50)
Case 2.2.1, −b1 = b2: If we apply (46), (50), (49), and (47) in this order sequentially, we see that the sign of x(t) changes at every event time after t0, cf. right panel of Fig. 2. Since the impulses have size |b1|, we obtain |x(t)| ≤ |b1| = ∥B∥I2 for t ≥ t1. Similar arguments can be applied if x(0) < 0. Case 2.2.2, −b1 ̸= b2: Let us assume without loss of generality that |b1| > |b2|, i.e., 0 > b1 + b2, x(t0) > 0, and again x(t1) < 0. We want to ensure that |x(t)| ≤ |b1| = ∥B∥I2 for all t ∈ [t1,-
 t2), where t2 denotes the next event time such that x(t2) > 0. For t ∈ [t1, t2), only the second neuronal unit is active, and we denote by t′
k, t′
k+1 two
arbitrary subsequent event times with t1 ≤ t′
k < t′
k+1 ≤ t2.
Similar to (48), it holds
x(t′
k+1) = x(t′
k) · e−λ(t′
k+1 −t′
k) + b2
b−a−λ
b ≥ x(t′
k ).
By repeating this argument, we obtain that x(t′
k) ≥ x(t1).
From (46), we know that x(t1) ≥ b1(b−a−λ)
b . Since a > 0, we obtain for t ∈ [t1, t2) that
x(t) ≥ mkax lim
s↑t′
k+1
x(s) = mkax x(t′
k) · ea(t′
k+1 −t′
k)
= mkax x(t′
k) · e−λ(t′
k+1 −t′
k) + −b2(a + λ)
b
≥ x(t1) + −b2(a + λ)
b
(46)
≥ b1(b − a − λ)
b − b2(a + λ)
b
= b1 − (b1 + b2)(a + λ)
b ≥ b1,
where we used that a, λ, b ≥ 0, b1 + b2 < 0, and the second line follows from similar calculations as (44). By (49), it holds
x(t2) ≤ b2(b − a − λ)
b ≤ −b1(b − a − λ)
b.
Hence, condition (47) is fulfilled and the sign of x(t) again changes at the next event time. The same reasoning can then be iterated, and similar arguments can be applied if x(0) < 0.
Lemma 15 (Stability under bounded disturbances): If the closed-loop system (16) is ISS with respect to disturbances d1(t), d2(t), and there exist D1, D2 ≥ 0 such that ∥d1(t)∥ ≤ D1 and ∥d2(t)∥ ≤ D2 for all t ≥ 0, then the system is
globally practically asymptotically stable, with functions β of class KL and η1, η2 of class K∞ such that
∥y(t)∥ ≤ β(∥y(0)∥, t) + η1(D1) + η2(D2). (51)
Proof: Since the system is ISS, there exist class K∞ functions α ̄,  ̄α, α, γ1 and γ2 such that for all t ≥ 0,
 ̄α(∥y(t)∥) ≤ V (y(t)) ≤ α ̄(∥y(t)∥), (52)
V ̇ (y(t)) ≤ −α(∥y(t)∥) + γ1(∥d1(t)∥) + γ2(∥d2(t)∥). (53)
By assumption, it holds that γ1(∥d1(t)∥) ≤ γ1(D1) =: E, and γ2(∥d2(t)∥) ≤ γ2(D2) =: F for all t ≥ 0. Since the inverse of a strictly increasing function is strictly increasing, (52) yields α ̄−1(V (y(t))) ≤ ∥y(t)∥. Using (53), this implies
V ̇ (y(t)) ≤ −α α ̄−1(V (y(t))) + E + F (54)
Let α1 := α ◦ α ̄−1, C := α−1
1 (E + F ), and W (t) := V (y(t)) − C. We then obtain
W ̇ (t) = V ̇ (y(t)) ≤ −α1(V (y(t))) + E + F (55)
= −α1 (W (t) + C) + α1(C) =: −α2(W (t)). (56)
Note that α2 is of class K∞ since α2(0) = −α1(0 + C) + α1(C) = 0. Let β1(r, t) be the solution to
 ̇
Wf(t) = −α2 Wf(t) , Wf(0) = r. (57)
Then, β1 is of class KL and by the comparison lemma (Lemma 3.4 of [33]) we obtain
W (t) ≤ β1(W (0), t) = β1 (V (y(0)) − C, t) , (58)
which implies
V (y(t)) = W (t) + C ≤ β1(V (x(0)) − C, t) + C (59)
(52)
≤ β1(α ̄(∥x(0)∥), t) + C. (60)
Again using (52) we obtain
∥y(t)∥ ≤  ̄α−1(V (y(t))) (61)
≤  ̄α−1(β1(α ̄(∥y(0)∥), t) + C) (62)
≤  ̄α−1(2β1(α ̄(∥y(0)∥), t)) +  ̄α−1(2C) (63)
≤ β(∥y(0)∥, t) + η1(D1) + η2(D2), (64)
where (r, t) 7→ β(r, t) :=  ̄α−1(2β1(α ̄(r), t)) is of class KL,
and r 7→ η1(r) :=  ̄α−1(4α−1
1 (2γ1(r))), r 7→ η2(r) :=
 ̄α−1(4α−1
1 (2γ2(r))) are of class K∞. The last two inequalities follow from μ(a + b) ≤ μ(2 max(a, b)) ≤ μ(2a) + μ(2b) for any a, b ≥ 0 and strictly increasing μ.
REFERENCES
[1] C. Mead, “Neuromorphic electronic systems,” Proceedings of the IEEE, vol. 78, no. 10, pp. 1629–1636, 1990.
[2] C. Mead and M. Ismail, Analog VLSI implementation of neural systems. Springer Science & Business Media, 2012, vol. 80. [3] S. DeWeerth, L. Nielsen, C. Mead, and K. Astro ̈m, “A simple neuron servo,” IEEE Transactions on Neural Networks, vol. 2, no. 2, pp. 248251, 1991. [4] K.-E.  ̊Aarz ́en, “A simple event-based PID controller,” IFAC Proceedings Volumes, vol. 32, no. 2, pp. 8687–8692, 1999.

[5] K. Astr ̈om and B. Bernhardsson, “Comparison of Riemann and Lebesgue sampling for first order stochastic systems,” in Proceedings of the 41st IEEE Conference on Decision and Control, 2002., vol. 2, 2002, pp. 2011–2016 vol.2. [6] W. Heemels, K. Johansson, and P. Tabuada, “An introduction to event-triggered and self-triggered control,” in 2012 IEEE 51st IEEE Conference on Decision and Control (CDC), 2012, pp. 3270–3285. [7] D. J. Antunes and B. A. Khashooei, “Consistent event-triggered methods -
for linear quadratic control,” in 2016 IEEE 55th Conference on Decision and Control (CDC), 2016, pp. 1358–1363.
[8] M. S. Mahmoud and M. Sabih, “Networked event-triggered control: an introduction and research trends,” International Journal of General Systems, vol. 43, no. 8, pp. 810–827, 2014. [9] F. Rieke, D. Warland, R. d. R. Van Steveninck, and W. Bialek, Spikes: exploring the neural code. MIT press, 1999.
[10] E. Ahissar and E. Assa, “Perception as a closed-loop convergence process,” eLife, vol. 5, p. e12830, 2016. [11] P. Cisek, “Beyond the computer metaphor: Behaviour as interaction,” Journal of Consciousness Studies, vol. 6, no. 11-12, pp. 125–142, 1999. [12] J. J. Moore, A. Genkin, M. Tournoy, J. L. Pughe-Sanford, R. R. de Ruyter van Steveninck, and D. B. Chklovskii, “The neuron as a direct data-driven controller,” Proceedings of the National Academy of Sciences, vol. 121, no. 27, p. e231189312-
1, 2024. [13] P. Tabuada, “Event-triggered real-time scheduling of stabilizing control tasks,” IEEE Transactions on Automatic Control, vol. 52, no. 9, pp. 1680–1685, 2007. [14] E. Aranda-Escola ́stico, M. Guinaldo, R. Heradio, J. Chacon, H. Vargas, J. S ́anchez, and S. Dormido, “Event-based control: A bibliometric analysis of twenty years of research,” IEEE Access, vol. 8, pp. 47 18847 208, 2020. [15] R. Goebel, R. G. Sanfelice, and A. R. Teel, Hybrid Dynamical Systems: Modeling, Stability, and Ro-
bustness. Princeton University Press, 2012. [16] W. M. Haddad, V. Chellaboina, and S. G. Nersesov, Eds., Impulsive and Hybrid Dynamical Systems: Stability, Dissipativity, and Control. Princeton University Press, 2014. [17] M. C. F. Donkers and W. P. M. H. Heemels, “Output-based eventtriggered control with guaranteed L∞-gain and improved and decentralized event-triggering,” IEEE Transactions on Automatic Control, vol. 57, no. 6, pp. 1362–1376, 2012. [18] W. P. M. H. Heemels, M. C. F. Donkers, and A-
. R. Teel, “Periodic event-triggered control for linear systems,” IEEE Transactions on Automatic Control, vol. 58, no. 4, pp. 847–861, 2013. [19] R. Postoyan, A. Anta, D. Neˇsic ́, and P. Tabuada, “A unifying Lyapunov-based framework for the event-triggered control of nonlinear systems,” in 2011 50th IEEE Conference on Decision and Control and European Control Conference, 2011, pp. 2559–2564.
[20] W. P. M. H. Heemels, J. H. Sandee, and P. P. J. V. D. Bosch, “Analysis of event-driven controllers for linear systems,” International Journal of Control, vol. 81, no. 4, pp. 571–590, 2008. [21] T. Yang, Impulsive Control Theory. Springer Berlin Heidelberg, 2001. [22] X. Meng and T. Chen, “Optimal sampling and performance comparison of periodic and event based impulse control,” IEEE Transactions on Automatic Control, vol. 57, no. 12, pp. 3252–3259, 2012. [23] E. Petri, K. J. Scheres, E. Steur,-
 and W. Heemels, “Analysis of a simple neuromorphic controller for linear systems: A hybrid systems perspective,” in 2024 IEEE 63rd Conference on Decision and Control (CDC). IEEE, 2024, pp. 8578–8583. [24] J. Chai, P. Casau, and R. G. Sanfelice, “Analysis and design of eventtriggered control algorithms using hybrid systems tools,” in 2017 IEEE 56th Annual Conference on Decision and Control (CDC), 2017, pp. 6057–6062. [25] X. Li, D. Peng, and J. Cao, “Lyapunov stability for impulsive systems via ev-
ent-triggered impulsive control,” IEEE Transactions on Automatic Control, vol. 65, no. 11, pp. 4908–4913, 2020. [26] P. Agliati, A. Urbano, P. Lanillos, N. Ahmad, M. van Gerven, and S. Keemink, “Spiking neurons as predictive controllers of linear systems,” arXiv preprint arXiv:2507.16495, 2025.
[27] F. S. Slijkhuis, S. W. Keemink, and P. Lanillos, “Closed-form control with spike coding networks,” IEEE Transactions on Cognitive and Developmental Systems, 2023.
[28] F. Huang and S. Ching, “Dynamical spiking networks for distributed control of nonlinear systems,” in 2018 Annual American Control Conference (ACC), 2018, pp. 1190–1195.
[29] D. V. Dimarogonas, E. Frazzoli, and K. H. Johansson, “Distributed event-triggered control for multi-agent systems,” IEEE Transactions on Automatic Control, vol. 57, no. 5, pp. 1291–1297, 2012. [30] X. Wang and M. D. Lemmon, “Event-triggering in distributed networked control systems,” IEEE Transactions on Automatic Control, vol. 56, no. 3, pp. 586–601, 2011. [31] E. Kofman and J. H. Braslavsky, “Level crossing sampling in feedback stabilization under data-rate constraints,” in Proceedings of t-
he 45th IEEE Conference on Decision and Control, 2006, pp. 4423–4428. [32] W. Gerstner and W. M. Kistler, Spiking neuron models: Single neurons, populations, plasticity. Cambridge university press, 2002. [33] H. K. Khalil and J. W. Grizzle, Nonlinear systems. Prentice hall Upper Saddle River, NJ, 2002, vol. 3.
[34] E. D. Sontag, Input to State Stability: Basic Concepts and Results. Berlin, Heidelberg: Springer, 2008, pp. 163–220.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:29.801Z
- **Text Length:** 52872 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 11 of 11
