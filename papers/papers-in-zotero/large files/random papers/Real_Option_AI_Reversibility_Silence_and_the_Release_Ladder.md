# PDF Document: Buhai - 2025 - Real Option AI Reversibility, Silence, and the Release Ladder.pdf

**File Path:** Buhai - 2025 - Real Option AI Reversibility, Silence, and the Release Ladder.pdf

**Processed Date:** 2026-02-10T18:16:05.725Z

**File Size:** 945.79 KB

**Total Pages:** 59

**Extracted Pages:** 59

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3217

**Title:** Real Option AI: Reversibility, Silence, and the Release Ladder

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Real Option AI: Reversibility, Silence, and the Release Ladder∗
I. Sebastian Buhai†
SOFI at Stockholm University, Instituto de Economia at UC Chile, and NIPE at Minho University
Version of November 24, 2025. Latest version.
Abstract
We model the observed cadence of AI product releases (extended quiet spells, bursts of reversible patches, and rarer, less-reversible pivots) as optimal exercise of strategic real options under reputational learning. A privately observed technical/reputational state evolves as a diffusion. The firm controls two hidden upgrade options with asymmetric fixed costs and reversibility (a cheap “patch” and a costly “pivot”), and it also controls a publication-frequency clock: a Cox process whose intensit-
y λt governs when noisy public performance and safety signals are disclosed. For sufficiently low clock costs, the firm optimally posts short, observable “clock-off” windows (local silence with λt = 0) around knife edges. These windows shut down the martingale part of public beliefs locally and eliminate knife-edge mixing. Equilibrium behavior collapses to a two-rung release ladder: two endogenous triggers and two endogenous jump targets, with no interior mixing.
We give a full characterization of this ladder. Within stationary Markov strategies, we prove existence and uniqueness via a boundary-value / verification system: on the inaction band, the value function solves a linear ODE; it satisfies value matching and smooth pasting at triggers, and target optimality at targets; and a no-local-time lemma for beliefs inside posted silence windows delivers regularity at the boundaries. We then (i) endogenize market/platform adoption: a downstream buyer adopts w-
hen public belief mt crosses a unique cutoff α, pinned by a smooth-fit condition in belief space; and (ii) map financing into a tight “irreversibility wedge”: under leverage, the gap between first-best and levered surplus is bounded by the least-reversible reset option’s takeover switching cost. Patches are debt-insensitive; pivots can be distorted, but only up to that bound. The framework delivers testable telemetry signatures in firm-authored disclosures (evaluation cards, release notes, mitigat-
ion writeups): (1) a pre-release cadence dip in both publication intensity and intra-month dispersion as the firm shuts the clock off just before a major reset; (2) two post-release plateaus in disclosed performance outcomes, consistent with jump targets (patch vs. pivot); and (3) debt-insensitive patch timing in high-reversibility regimes, with any leverage effect concentrated in pivots. These are distinct from option-implied volatility spikes around earnings-style events: we are measuring the fi-
rm’s own throttling of outward technical signals, not the market’s pricing of event risk. Conceptually, the paper links dynamic disclosure (Guttman et al., 2014; Orlov et al., 2020) to S–s style impulse control with costly reversibility (Dixit and Pindyck, 1994; Bertola and Caballero, 1994; Abel and Eberly, 1996; Buhai and Teulings, 2014), and shows that leverage matters only through irreversibility, cf. Manso (2008)’s bound on the agency wedge. Substantively, it rationalizes AI “wait → patch → wa-
it → pivot” cadence and gives an empirical playbook for disclosure tempo, patch cascades, and reversibility in model/service telemetry (Arora et al., 2010; Li and Paxson, 2017), in contrast to event-risk evidence from options markets (Todorov and Zhang, 2025; Alexiou et al., 2025).
JEL codes: C61; C73; D83; G32; L86. Keywords: dynamic disclosure; real options; costly reversibility; AI product releases; capital structure and leverage.
∗Comments from the “IO in Chile” Workshop (U. Los Andes & UC Chile, Oct. 2025) are gratefully acknowledged. Ben Golub and Yann Calvó López’s Refine app (https://www.refine.ink/) flagged inconsistencies and gaps in a preliminary draft. All remaining errors are mine.
†Contact email: sebastian.buhai@sofi.su.se. Full coordinates: https://www.sebastianbuhai.com.
1
arXiv:2511.16958v1 [econ.TH] 21 Nov 2025

1 Introduction
Major AI labs and model-service vendors display a distinctive release cadence: extended quiet periods, bursts of minor patches (fine-tunes; context, latency, or price tweaks), and occasional architecture pivots involving new base models or modality stacks. The observable pattern, wait → patch → wait → pivot, recurs across consumer assistants, developer APIs, and safety-critical verticals such as clinical and financial AI. Firms visibly throttle their own outward signal flow, then jump. We provide -
a compact, fully analytical rationalization of that cadence. The environment combines reputational learning from publicly disclosed, noisy performance and safety signals; two hidden upgrade options with different fixed costs and reversibility (a cheap, reversible patch and a costlier, less reversible pivot); and firm control over publication frequency via a predictable Cox clock that gates disclosure. Their interaction yields equilibrium paths with two jump targets—a release ladder—and, crucially,-
 no interior mixing. Near knife-edge regions the firm imposes a short, publicly posted local period of silence and then executes a jump reset rather than letting reputational diffusion sustain asymmetric drifts or mixed actions. We microfound the disclosure instrument as an observable policy and show that it suppresses the martingale part of public beliefs on a vanishing neighborhood (Section 3). A no–local-time lemma for beliefs inside those disclosure windows (Lemma 3) underpins both the selecti-
on logic and the boundary analysis. From an economic perspective, the ladder separates reversible patches from less-reversible pivots. Patches are frequent, operate in “maintenance mode,” and are largely insensitive to financing. Pivots are rarer, feel architectural and contentious, and any distortion in their timing is tightly bounded by the present value of the least-reversible reset. Within stationary Markov strategies, we deliver a complete boundary-value characterization of the ladder: the va-
lue function solves a linear ODE on the inaction band, satisfies value matching and smooth pasting at the triggers, and target optimality at the jump targets, and we prove existence and uniqueness within this class via a standard QVI/BVP argument (Section 5). We then endogenize market adoption via a buyer or platform block, show that disclosure tempo shapes a unique belief cutoff α at which adoption occurs (Section 6), and map leverage into a tight “irreversibility wedge”: under debt, the gap betw-
een first-best all-equity value and the levered total (equity + debt) is bounded by the takeover switching cost of the least reversible rung (Section 7). In particular, as long as the low-cost patch is easily reversible at takeover, debt is effectively neutral on that patch rung: patch timing (trigger and target) is debt-insensitive and total surplus along that block coincides with first best. Any distortion shows up at the pivot rung, and even there it is tightly bounded by the expected takeover -
cost of forcing that pivot. The theory generates sharp empirical predictions in firm-authored telemetry. First, just ahead of major releases, the variance and cadence of publicly disclosed performance and safety signals should dip and then jump at release: publication intensity falls and intra-month dispersion collapses as the clock is locally turned off, then both spike on the event. Second, conditional on observables that proxy for reversibility, patch timing should be debt-insensitive, with lev-
erage effects concentrated around pivots in low-reversibility regimes. Third, disclosed performance and safety metrics should exhibit two post-release plateaus, one after patches and one after pivots, consistent with an S–s ladder of targets rather than a smooth continuous ramp (Section 8). By design, these signatures use firm-authored signals (evaluation cards, release notes, mitigation advisories) rather than optionimplied volatility or broad market chatter: the object of the theory is how the f-
irm gates its own outward signal flow, not how markets price event risk.
2

Literature and positioning. We unify dynamic disclosure with selection in real options, S–s verification with costly reversibility, and financing under irreversibility. On selection, a microfounded publication-frequency rule (short, posted clock-off windows) selects pure reset equilibria by shutting down the public-belief martingale locally while preserving belief drift and the adoption cutoff, linking dynamic disclosure and information design (Guttman et al., 2014; Orlov et al., 2020) to release-
-cadence instrumentation. Related work on dynamic timing and signaling with belief states and exogenous information flows includes Kolb (2015, 2019) and, with stochastic stakes, Gryglewicz and Kolb (2022), which are complementary but do not rely on a clock-off selection device. On verification, we adapt classic S–s impulse control with costly reversibility to a two-reset ladder (Dixit and Pindyck, 1994; Bertola and Caballero, 1994; Abel and Eberly, 1996; Buhai and Teulings, 2014). In our setting, -
a posted-silence disclosure protocol delivers a no-local-time lemma for the public-belief process mt at the intervention boundaries (the private diffusion zt continues to carry its Brownian martingale component) and, combined with the usual value-matching and envelope conditions, this yields V ′ = 0 at both triggers (high contact / smooth pasting) and targets (target optimality) and delivers existence and uniqueness of the ladder. On financing, we map leverage wedges to takeover switching costs an-
d derive a tight bound (Proposition 3) that renders reversible patches debt-neutral and pivots distortion-limited, sharpening the connection between irreversibility and agency in the spirit of Manso (2008), who bounds the agency cost of debt via switching costs at default. Empirically, we propose a telemetry-based measurement blueprint built from vendor blogs, release notes, advisories, and tagged open-source releases. The blueprint aligns with evidence on software patching and cadence (Arora et a-
l., 2010; Li and Paxson, 2017) and delivers testable predictions, most notably a pre-release dip in the variance and cadence of firm-published signals (local silence just before the jump) and a discrete burst at the event itself. In contrast, the option-implied event-risk literature typically finds a pre-event spike in implied volatility as markets price elevated jump risk (Todorov and Zhang, 2025; Alexiou et al., 2025); our telemetry is designed to capture the firm’s own suppression and release o-
f information, rather than investors’ ex ante pricing of event risk. The paper develops the Cox-clock microfoundations and the selection result (Section 3); establishes the boundary-value system and verification for the two-rung ladder (Section 5); introduces the adoption block and the feedback from disclosure tempo to the adoption cutoff (Section 6); maps financing wedges to takeover-based switching-cost bounds (Section 7); derives testable implications and a measurement and falsification bluepri-
nt in firm-published telemetry (Section 8); and concludes with policy and industry implications, emphasizing disclosure tempo as the selection lever and modularity as the wedge lever (Section 9).
2 Environment
We describe primitives, information, and controls in a way that nests both the Cox–clock microfoundation of Section 3 and the boundary–value and verification system in Section 5. Regularity is standard: drifts and diffusions are locally Lipschitz with linear growth, r > 0, and running costs are bounded, so that the private state has a unique strong solution and discounted values are well defined.
Private state and signals. A firm of hidden type θ ∈ {H, L} observes a one-dimensional private state zt evolving as dzt = μθ(zt) dt + φ(zt) dWt, φ(·) > 0,
3

on a filtered probability space carrying a Brownian motion W . Public information arrives only at publication times {Tn}n≥1 generated by a Cox process Nt with instantaneous intensity λt. At Tn the market observes a noisy signal
yn = zTn + εn, εn
i.i.d.
∼ N (0, σ2
ε ),
independent of (W, N ). Let FtP = σ({(Tk, yk) : Tk ≤ t}) be the public filtration. We impose the following structure on the law of motion of zt, which pins down how beliefs evolve.
Assumption 1 (Common technical drift for filtering). For all z, μH (z) = μL(z) =: μ(z) and φ(·) does not depend on θ. That is, conditional on zt, the physical law of motion for zt does not depend on the hidden type. The hidden type may matter for payoffs π(·) or costs, but not for the drift or diffusion of zt.
Under Assumption 1 and the finite-dimensional filter benchmark formalised in Section 3.3 (linear-Gaussian / Kalman or a parametric finite-dimensional approximation), the public posterior for zt is summarized by the conditional mean and variance,
mt := E[zt | F P
t ], vt := Var(zt | F P
t ).
Between publications (mt, vt) evolves deterministically according to the ODE system implied by the common drift and diffusion; at each Tn the Bayesian update maps (mTn−, vTn−, yn) to (mTn, vTn).
In particular, under the linear-Gaussian filter formalised in Section 3.3, mt is a piecewise deterministic Markov process: between publications it follows a deterministic ODE m ̇ t = μ ̄(mt), and at Tn it jumps via the update map. Remark. If μH ̸= μL, then the public sufficient statistic would be (mt, vt, pt) with
pt := Pr(θ = H | F P
t ),
because the expected drift between publications would be pt μH (mt) + (1 − pt) μL(mt). We adopt Assumption 1 to keep the sufficient statistic two-dimensional and to interpret mt as evolving under a single deterministic drift μ ̄(mt) between publications in the baseline. Section 3.3 shows that the silence logic and selection arguments rely only on two properties of the belief process highlighted there, deterministic drift between publications and jump risk proportional to the Cox intensity, and tha-
t these extend to richer belief states as long as the filter remains finite-dimensional.
Disclosure control (publication clock). The firm commits to a publication-frequency protocol:
a rule for an intensity process λt ∈ [0, λ ̄], with λt publicly observable in real time. Think of λt as a visible release throttle or embargo clock. When λt = 0 the firm is openly on hold and no public updates will be released; when λt > 0 the firm is in an allowed-disclosure mode. Market participants can see whether the clock is currently off or on, so λt is predictable in FtP and the
absence of publications while λt = 0 carries no surprise. The firm pays a convex C1 cost k(λt) with k(0) = 0, k′(·) ≥ 0, k′′(·) ≥ 0. A local silence policy sets λt = 0 on a small, publicly posted quiet window and otherwise allows λt > 0. For clarity in this section we anchor that window directly in the public sufficient statistic: fix a center ˆm and radius ε > 0, define
Iε(mˆ ) := (mˆ − ε, ˆm + ε) ⊂ R,
4

and stipulate that whenever mt ∈ Iε( ˆm) the firm turns the clock off, i.e. λt = 0. Because the protocol is posted and λt is observable, the market knows when the Cox clock is off. On Iε( ˆm) there are therefore no publication jumps; the jump martingale in mt disappears and mt has finite variation and zero quadratic variation; see Lemma 1 in Appendix C and Lemma 3 in Appendix F. These short, observable quiet windows are on path and so silence inside them is not itself a signal; their role is to l-
ocally gate belief volatility while letting the deterministic drift of mt continue. Section 3 provides a Cox–clock microfoundation in which the same local-silence protocol is
implemented via a stationary map λ(z) ∈ [0, λ ̄]: the firm posts in advance the subset of private states on which λ(z) = 0 and then runs the realized intensity λt = λ(zt). Because λt is publicly observed, seeing λt = 0 reveals that zt lies in the posted band, so the full information sets under the λ(zt) protocol and under the mt-based window need not coincide. For our selection and verification results, however, we use only two consequences that are common to both formulations: (i) on any interval-
 where the protocol dictates λt = 0 there are no publication jumps, so the compensated jump martingale in the posterior mean mt disappears and mt has bounded variation there; and (ii) by shrinking the band radius one can make any truncation effect of the band on (mt, vt) arbitrarily small while property (i) continues to hold. In this reduced-form sense the λ(z) microfoundation and the mt-window formulation are equivalent for our purposes: both generate observable local silence windows in which the-
 martingale part of mt is shut down while its deterministic drift continues.
Adoption and payoffs. A competitive buyer or platform adopts when public beliefs cross a cutoff α in the m coordinate; α is endogenized in Section 6 as the solution to the buyer’s stopping problem given the disclosure protocol. The firm’s instantaneous payoff is π(z, m) net of disclosure cost k(λt). A constant pre-adoption loss and post-adoption gain is a convenient special case, but all results are stated for the general π(z, m) and are linked to adoption via (6.6).
Hidden real options (patch and pivot). The firm has two impulse controls. A patch costs K1 > 0 and instantaneously resets the private state from the pre-impulse level z to a target z1∗. A
pivot costs K2 > K1 and resets to a target z2∗. These resets are not publicly revealed at the instant of action; they affect public beliefs only through subsequent publications governed by the clock. The trigger/target pairs are determined in equilibrium by value matching and smooth pasting.
Support consistency under instantaneous resets. Under a stationary Markov ladder with instantaneous impulses at the triggers, the private state remains in the closed inaction band:
zt ∈ [β1, β2] a.s. for all t,
because upon first hitting either boundary the state is reset immediately. If (as maintained here) the publication protocol and the trigger policy are common knowledge, then the conditional law of zt given public information is supported on [β1, β2]. Hence the public posterior mean satisfies
mt = E[zt | F P
t ] ∈ [β1, β2] a.s. for all t.
In particular, during posted clock–off windows (local silence), mt evolves deterministically within [β1, β2] along its ODE drift. This single, common-knowledge inaction band is the benchmark geometry we use when first describing the ladder on the private state. As noted in Footnote 1, one can also relax common knowledge of the exact trigger locations so that the public holds a thin posterior over (β1, β2) and mt (and hence the adoption cutoff) can sit slightly above β2 while preserving belief cons-
istency; that is the information structure implicitly used later when we write β2 < α and refer to the belief-space block (β2, α).
5

Strategies and equilibrium. We focus on stationary Markov strategies. There exist private-state triggers β1 < β2 such that the firm executes a patch when zt first hits β1 from above and a pivot when zt first hits β2 from below. In the common-knowledge-band benchmark there is a belief cutoff α ∈ [β1, β2] at which the buyer adopts.1 The disclosure protocol consists of the posted clock rule and the observed λt. In the selection benchmark, that protocol implements a local silence window around the kn-
ife-edge region; within that window mt has no jump martingale and drifts deterministically inside [β1, β2] toward the cutoff α.
An equilibrium is a tuple of thresholds (β1, β2, α), targets (z1∗, z2∗), and an intensity protocol for λt such that: (i) Firm optimality. Given beliefs and the posted clock rule, the firm’s Markov control (patch trigger, pivot trigger, targets) maximizes discounted firm value and satisfies value matching and smooth pasting at both triggers and both targets.
(ii) Belief consistency. (mt, vt) evolves as the piecewise deterministic Markov process implied by Assumption 1, the observed λt, and the update map. On publicly posted silence windows (λt = 0), mt follows its deterministic drift m ̇ t = μ ̄(mt) with no jump martingale.
(iii) Buyer optimality. The buyer adopts at the unique cutoff α characterized in Section 6, which solves the buyer’s stopping problem given the observed disclosure protocol. Existence, uniqueness within this stationary Markov class, and the complete boundary-value characterization are established in Section 5.
Reduced-form interpretation. The publication clock is the instrument that gates public volatility. In reduced form it creates short, observable clock-off windows in which the martingale part of mt is suppressed while the deterministic drift of mt continues. Those windows eliminate interior mixing, yield no local time at the intervention boundaries for the belief process, and allow verification of the two-reset ladder via value matching and smooth pasting, with the quiet ODE drift of mt taking plac-
e within the belief support induced by the ladder (in the common-knowledge-band benchmark, [β1, β2]) on the approach to α. Section 3 gives the Cox–clock microfoundation and shows how a posted λ(z) rule implements the same observable silence windows, and Section 3.3 makes precise that the selection arguments use only the PDMP structure of beliefs, not the full linear-Gaussian form.
3 Microfoundations for Silence: Publication Frequency Control
This section provides a microfoundation for the reduced-form silence band by modeling the firm’s control over the publication frequency of public signals. The firm chooses the intensity of a Cox publication clock and pays a convex flow cost. When the clock does not jump, no new public signals
1If one wishes to allow α > β2, one can relax common knowledge of the exact trigger locations, for example by letting the public hold a thin posterior over (β1, β2), so the conditional support of zt need not be the single known interval [β1, β2]. Then mt can slightly exceed β2 while remaining belief-consistent. We use the common-knowledge-band benchmark mt ∈ [β1, β2] when first setting up the ladder on the private state. When we later write β2 < α and talk about the belief-space block (β2, α) in T-
heorem 1 and in Section 5, we are implicitly appealing to this thin-posterior relaxation: the private state still diffuses only on [β1, β2], but the public posterior mean and the adoption cutoff may sit slightly above β2. The selection and verification arguments themselves depend only on the private inaction band [β1, β2] and on the PDMP structure of mt, so both information structures are interchangeable for our purposes.
6

arrive and public beliefs evolve deterministically from the last release. A policy that locally turns the clock off implements the variance-suppression environment used in the baseline and, as we show in Theorem 1 in Section 4, selects the pure two-reset/no-mixing stationary Markov structure within the stationary Markov class.
3.1 Timeline, information, and observability
Latent state. The firm’s privately observed technical or reputational state zt ∈ R evolves as a time-homogeneous Itô diffusion
dzt = μθ(zt) dt + φ(zt) dWt,
with μθ and φ measurable, locally Lipschitz, and of linear growth; φ is strictly positive and bounded on compact sets away from reset targets. These conditions ensure a unique strong solution and a well-defined generator L.2
Publications and the Cox clock. Public signals are published at jump times {Tn}n≥1 of a Cox
process with firm-chosen predictable intensity λt ∈ [0, λ ̄]. At Tn the market observes
yn = zTn + εn, εn
i.i.d.
∼ N (0, σ2
ε ),
independent of (W, {Tn}). The firm pays a convex C1 cost k(λt) with k(0) = 0, k′(·) ≥ 0, and k′′(·) ≥ 0.
Observability. We take the realized publication intensity process λt to be publicly observable and predictable in real time, for example because the firm throttles visible release channels, rate-limits API telemetry, or publishes a binding cadence protocol. In the stationary Markov policies below the
firm implements λt = λ(zt) for some mapping z 7→ λ(z) ∈ [0, λ ̄] that depends on the private state zt, but only the realized value λt is publicly seen. In particular, if the firm sets λt = 0 on a posted “silence window,” outside observers can directly see that the publication clock has been shut off, so the absence of new signals during that spell is on path and carries no incremental surprise. We use the phrase “λt is predictable with respect to FtP ” only in this sense: the intensity process its-
elf is publicly predictable, not that the mapping z 7→ λ(z) must be a function of public beliefs.
3.2 Admissible controls and strategies
Reset controls. The firm has two instantaneous resets: a patch with cost K1 ≥ 0 and a pivot with cost K2 > K1. A stationary Markov policy is summarized by triggers (β1, β2) and targets (z1∗, z2∗): when zt first hits β1 from above the firm pays K1 and resets to z1∗; when zt first hits β2
from below it pays K2 and resets to z2∗.3
Publication-frequency control. The firm also chooses a stationary mapping λ(z) ∈ [0, λ ̄] and pays k(λ(z)) in flow cost. Operationally, this mapping is implemented via the realized Cox intensity λt = λ(zt). Any region in private state space on which λ(·) = 0 is a local silence region: within that region the firm publicly dials publication intensity to zero, the market observes λt = 0, and anticipates that no new signals will arrive while zt remains there.
2Regularity matches the S–s and costly-reversibility literature (Dixit and Pindyck, 1994; Bertola and Caballero, 1994; Abel and Eberly, 1996; Buhai and Teulings, 2014). 3Targets need not coincide with boundaries; they are pinned by value matching and smooth pasting.
7

Admissibility. A policy (β1, β2; z1∗, z2∗; λ(·)) is admissible if it is Borel measurable and stationary, and the induced process is non-explosive with finite expected discounted costs.
3.3 Public beliefs as a PDMP
Let
FP
t =σ
(
{(Tn, yn) : Tn ≤ t} ∪ {λs : 0 ≤ s ≤ t}
)
be the public filtration generated by the history of publication times and signals and by the realized intensity path, and define
mt := E[zt | F P
t ], vt := Var(zt | F P
t ).
To keep the belief state finite-dimensional, we impose the standard linear-Gaussian and finitedimensional filter benchmark: between publications the law of zt evolves under dynamics for which the conditional distribution of zt given FtP stays Gaussian and is summarized by (mt, vt). Canonical cases are: (i) an affine drift and constant diffusion (Kalman–Bucy setting), possibly after absorbing any type differences into a common drift μ(·) that is publicly known; or (ii) any specification under which-
 the posterior belongs to a parametric family with finitely many sufficient statistics, of which (mt, vt) are the ones relevant for payoffs and adoption.4 Under this benchmark, (mt, vt) follows a piecewise deterministic Markov process (PDMP). Between publications, m ̇ t = μ ̄(mt), v ̇t = γ ̄(mt, vt),
for continuous drift maps (μ ̄, γ ̄) implied by the prior transition; and at a publication time Tn the Gaussian update gives
mTn = mTn− /vTn− + yn/σε2
1/vTn− + 1/σε2
, vTn = (1/vTn− + 1/σ2
ε
)−1. (3.1)
Thus, conditional on the observed publication clock λt, public beliefs evolve via a deterministic ODE flow between jumps plus discrete Bayesian jumps at the Cox times {Tn}. Two features of (3.1) are all we use later:
(i) Deterministic drift between publications. Between jumps, mt has finite variation and its evolution is completely pinned down by the last release and by primitives. There is no Brownian martingale term in mt between publications.
(ii) All randomness comes from disclosure jumps. The only source of FtP -martingale risk in mt is the arrival (or non-arrival) of publications. The quadratic variation of the jump martingale is proportional to the intensity λt of the Cox clock. These two properties survive even if one replaced (mt, vt) by a richer belief state in a fully nonlinear diffusion model. The silence logic below therefore does not hinge on global linear-Gaussian structure; that benchmark is used only to keep the notation -
finite-dimensional. When λt = 0 on a publicly observed window, there are no jumps in that window and the martingale part of public beliefs shuts down. On that window the evolution of beliefs is fully deterministic from the public point of view.
4For a generic nonlinear diffusion with state-dependent drift and diffusion, the exact conditional law is not Gaussian and the nonlinear filter is infinite-dimensional. The standing assumption here is therefore a tractability restriction: we work with a finite-dimensional filter (the linear-Gaussian/Kalman benchmark, or an explicitly parametric finitedimensional approximation) so that (mt, vt) is a Markov state for beliefs. None of the selection arguments below rely on linear-Gaussian structure be-
yond the two properties highlighted after (3.1).
8

3.4 Firm’s value and HJB with a publication clock
State-space clarification. There are two natural value objects. If one solves the joint problem over resets and disclosure tempo, the state is the pair (z, m) and the value is S(z, m) (which later appears when we endogenize adoption in Section 6). In the present subsection, however, we analyze the firm’s reset problem conditional on a posted publication-frequency rule λ(·), in particular on a local silence window where λ = 0 and the public mean mt has no martingale part (Appendix C). Conditional o-
n that rule, mt follows a deterministic ODE flow in a neighborhood of the intervention boundary that is the same for all realizations of zt. On such a window we either work with specifications in which π is already independent of m (for example because adoption is locally constant), or, in more general payoffs, any purely time-deterministic component induced by mt under the posted rule is common across all z and can be folded into the normalization of the value function without affecting the reset-
 calculus. With this convention the influence of mt on payoffs is absorbed into a time-invariant local flow π(z), and the dynamic-programming state collapses locally to the private variable z.
Let V denote the firm’s stationary Markov value conditional on the posted λ(·). The flow payoff π(z, m) may generally depend on public beliefs (through adoption or pricing); we write π(z) for the payoff net of any purely time-deterministic component induced by mt under the posted rule (for example on a silence window, where that dependence is locally inessential in the sense just described). On any inaction interval,
rV (z) = π(z) + (LV )(z) − k(λ(z)), (3.2)
with the usual reset boundary conditions (value matching and smooth pasting at both triggers and both targets), verified in Section 5. Interpretation. The clock λ(·) does not affect the private diffusion zt and therefore enters (3.2) only through its flow cost k(·) in this conditional problem. Its strategic role is to govern the martingale component of public beliefs (and hence adoption and pricing) described in §3.3. When λ = 0 on a posted window the belief mean has no jump martingale there, so l-
ocally the HJB is one-dimensional in z. If instead one solves the full joint problem without conditioning on λ(·), the natural state is (z, m) and the generator for m would appear explicitly in the HJB for S(z, m); we make use of that formulation when characterizing the adoption cutoff in Section 6.
3.5 Variance suppression as a limit of publication policies
We now connect the “turn the clock off” policy to the reduced-form variance-suppression assumption used in the baseline analysis of equilibrium selection.
Assumption 2 (Local silence window). Fix zˆ ∈ R and δ > 0 and consider
λδ(z) =
{0, |z − zˆ| ≤ δ,
λ ̄, |z − zˆ| > δ, k(0) = 0, k(λ ̄) < ∞.
Under Assumption 2, and recalling property (ii) above, the martingale part of mt is switched off on {|zt − zˆ| ≤ δ}: the market sees λt = 0, expects no publications there, and therefore expects no jumps in beliefs.5 On that window, mt evolves deterministically with finite variation, driven only by the ODE flow inherited from the last disclosed release.
5Lemma 1 in Appendix C formalizes this via a Doob–Meyer decomposition for the posterior mean: the compensated jump martingale has quadratic variation proportional to λt and thus has zero quadratic variation on the silence window.
9

Formally, for any C1 test function f and any stopping time τ that avoids resets,
E
[
f (mt∧τ ) − f (m0) −
∫ t∧τ
0
f ′(ms) μ ̄(ms) ds
]
−δ−↓0→ 0,
so the reduced-form variance-suppression environment we use in the proofs is the δ ↓ 0 limit of a sequence of admissible publication-frequency policies.
3.6 Equilibrium with publication frequency
Definition 1 (Stationary Markov equilibrium with publication control). An equilibrium is a tuple
(β1, β2; z∗
1, z∗
2; α; λ(·); belief system for (mt, vt))
such that: (a) Firm optimality: given beliefs and λ(·), the reset and target policy solves the firm’s problem and satisfies value matching and smooth pasting at both triggers and both targets (verified in Section 5);
(b) Belief consistency: (mt, vt) evolves as the PDMP induced by λ(·) and Bayes’ rule under the finite-dimensional filter benchmark. Within posted silence windows (λt = 0), beliefs follow the deterministic flow with no jump martingale (Lemma 1);
(c) Buyer optimality: given the observed disclosure protocol λ(·), the buyer adopts at the unique cutoff α characterized in Section 6;
(d) Policy observability: the realized intensity process λt = λ(zt) is FtP -predictable and observable in real time (for example via visible throttling or posted cadence), so that λt = 0 on a stated window is common knowledge. Therefore, the absence of public news inside such a window is literally on the equilibrium path and conveys no additional information beyond (b).
The key feature for selection is that in an announced silence window public beliefs have no martingale term, they drift deterministically, and they do not accumulate local time at the reset thresholds.
3.7 Silence selects pure two-reset policies
We use a mild regularity condition that rules out flat tangencies at the triggers.
Assumption 3 (Regularity for selection). On each diffusive block the continuation value V is C2 and, at each trigger βi for i ∈ {1, 2}, the reset value z 7→ V (zi∗) − Ki crosses V (z) transversally. The unique knife-edge is pinned by smooth pasting.
Under Assumptions 2 and 3, local silence eliminates interior mixing and selects pure resets. Precisely, Proposition 4 (Appendix C) shows that, for sufficiently small windows posted around the triggers, any stationary Markov equilibrium is pure: the firm resets exactly at (β1, β2) and never mixes with continuation on a positive-measure set. The mechanism relies on the no-local-time property for beliefs inside posted windows (Lemma 3) and transversality at the triggers. This selection result is the -
key input into the equilibrium characterization with silence in Section 4, where Theorem 1 delivers the two-reset/no-mixing stationary Markov equilibrium.
10

3.8 Discussion and links
The Cox-clock microfoundation shows how a choice of disclosure tempo selects equilibria in a reputational real-options environment. This connects dynamic disclosure and information design (Guttman et al., 2014; Orlov et al., 2020) to S–s multi-trigger investment with costly reversibility (Dixit and Pindyck, 1994; Bertola and Caballero, 1994; Abel and Eberly, 1996) and aligns with empirical evidence on release and patch cadences (Arora et al., 2010; Li and Paxson, 2017). Full proofs of Lemma 1 and -
Proposition 4 are in Appendix C. Section 5 provides the boundary-value verification, including the no-local-time lemma, and Section 6 endogenizes adoption and its feedback on the firm’s problem.
4 Equilibrium with Silence: Two Resets, No Mixing
We fix the Cox-clock disclosure environment of Section 3. The firm has two reset options (patch and pivot) with targets (z1∗, z2∗) and triggers (β1, β2), and chooses a stationary publication-frequency
policy λ(·) ∈ [0, λ ̄] with convex cost k(λ) and k(0) = 0. Flow payoffs may depend on public beliefs, but the private state z evolves as in Section 3.1, and V solves the inaction HJB (3.2) between interventions. The adoption cutoff α is taken as given here and is endogenized in Section 6.
Posted local silence around triggers. Let λε be any stationary policy that sets λ = 0 on a
small window around each trigger and λ =  ̄λ elsewhere:
λε(z) =



0, z ∈ [β1 − ε, β1 + ε] ∪ [β2 − ε, β2 + ε],
 ̄λ, otherwise,
ε > 0.
By Lemma 1 (Appendix C), the martingale part of public beliefs vanishes while zt lies in the posted windows. By the no-local-time lemma for beliefs (Lemma 3, Appendix F), paths do not accumulate at the window boundaries. Assumption 3 (transversality at triggers) then implies that each trigger admits a unique knife-edge point of indifference.
Theorem 1 (Two pure resets and no interior mixing). Fix primitives as in Section 3 and Assumption 3. There exists ε0 > 0 such that for any posted windows with ε ∈ (0, ε0] the stationary Markov equilibrium under λε is pure and has the ladder form:
(a) Two resets. There exist β1 < β2 < α and targets z1∗ < z2∗ such that the firm resets from β1 to z1∗
(patch) and from β2 to z2∗ (pivot).
(b) No interior mixing. The firm does not mix between intervening and waiting on any set of positive Lebesgue measure in a neighborhood of the triggers. Intervention occurs exactly at βi for i ∈ {1, 2}.
(c) Regularity. The value function V is C1 on R and C2 on the diffusive inaction interval (β1, β2). Boundary conditions at each trigger and its target are
V (β−
i ) = V (z∗
i ) − Ki, V ′(β−
i ) = 0, V ′(z∗
i ) = 0,
together with the interior ODE (3.2). The notation (β2, α) refers to the belief-space block between the pivot trigger and the adoption cutoff; in private-state space, the unique diffusive inaction region is [β1, β2].
11

(d) Identification and uniqueness on blocks. On each block [βi, βi+1) with β3 := α, the pair (βi, zi∗) is uniquely pinned down by the verification system of Section 5, that is, by the linear ODE together with value matching and smooth pasting at the source and the target.
Proof (Appendix A). The detailed proof is provided in Appendix A.
The theorem states that once short, observable silence windows are posted around the triggers, the only stationary Markov equilibrium in this environment is a two-rung ladder: a lower patch trigger and target, an upper pivot trigger and target, and a single contiguous inaction band in the private state, with no mixing on any set of positive measure.
Remark 1 (Tight windows and robustness). Since λ = 0 only on small posted windows, the induced change in running cost is o(1) as ε ↓ 0, because k(0) = 0 and the residence time in the windows is O(ε) by the no-local-time lemma. The locations of triggers and targets, and the no-mixing conclusion, are therefore stable to small deviations that allow 0 < λ ≪ 1 on the windows; see Appendix C.
5 Verification and Boundary-Value Problem
We verify the two-reset release ladder by solving a boundary-value problem (BVP) for the value function and proving optimality via a quasi-variational inequality (QVI). The Cox–clock microfoundation of Section 3 implies that, conditional on a posted publication rule λ(·), disclosure affects the firm’s objective only through the flow cost k(λ(z)). The privately observed technical or reputational state zt follows the Itô diffusion with generator
(LV )(z) = μθ(z)V ′(z) + 1
2 φ2(z)V ′′(z),
between discrete intervention times. The firm has two impulse actions i ∈ {1, 2} with fixed costs K1 < K2 and endogenous targets zi∗.
5.1 QVI formulation
Let the instantaneous net flow on inaction be π(z) − k(λ(z)), as in Section 3. Define the impulse operator (MV )(z) = max{ V (z∗
1) − K1, V (z∗
2) − K2 }.
The stationary Markov value V solves the QVI
max
{
rV (z) − (LV )(z) − π(z) + k(λ(z)), V (z) − (MV )(z)
}
= 0 for all z. (5.1)
Let the inaction region be I := { z : V (z) > (MV )(z) }
with boundary ∂I. On I the QVI reduces to the linear ODE
rV (z) = π(z) + (LV )(z) − k(λ(z)), z ∈ I, (5.2)
and V = MV on ∂I. With two impulses and a single contiguous inaction band for the private state z, we adopt the ladder geometry
β1 < β2, z∗
1, z∗
2 ∈ [β1, β2], I = [β1, β2], (5.3)
that is, a lower trigger β1 at which the firm patches to z1∗ at cost K1, and an upper trigger β2 at
which it pivots to z2∗ at cost K2. The QVI formulation in (5.1) still allows either impulse to be chosen at any z; the assignment of the patch to β1 and the pivot to β2 will be pinned down by the boundary equalities V = MV in the verification step below.
12

Geometry and state space. Equation (5.3) is the core private-state geometry behind verification. The privately observed state zt is only ever allowed to diffuse on the single inaction interval [β1, β2]. When zt first hits β1 from above, the firm immediately pays K1 and jumps to z1∗ ∈ [β1, β2]. When
zt first hits β2 from below, it immediately pays K2 and jumps to z2∗ ∈ [β1, β2]. Thus zt does not wander outside [β1, β2] in diffusion time: at each first hit of either boundary, it is impulsed back into the band. This is why the BVP and QVI are written on a single inaction band I = [β1, β2], and why we impose interior regularity on (β1, β2). By contrast, the adoption cutoff α introduced in Section 6 is not an upper diffusion boundary for zt. It is a boundary in belief space for the public posteri-
or mean mt. When we refer informally to two “blocks”, such as (β1, β2) and (β2, α), the interval (β2, α) is the belief-space block between the pivot trigger and the adoption cutoff under local silence. The only diffusive inaction region for zt itself is [β1, β2], as already emphasized in Theorem 1.
5.2 Boundary conditions and the free boundary system
Assume V ∈ C2((β1, β2)) and that V is continuous on R. The BVP couples the interior ODE (5.2) with four boundary conditions at the triggers and targets, plus two target optimality conditions.
Value matching at triggers. At each trigger, the firm is indifferent between continuing and paying the fixed cost to jump to the corresponding target:
V (β1) = V (z∗
1) − K1, (5.4)
V (β2) = V (z∗
2) − K2. (5.5)
High contact (smooth pasting) at triggers. Because Ki does not depend on the pre-jump state, the envelope condition at each trigger implies first-order high contact:
V ′(β1) = 0, (5.6)
V ′(β2) = 0. (5.7)
We use “high contact” here in the usual first-order sense V ′(·) = 0 at the trigger, not in a higher-order tangency sense. Target optimality. Conditional on paying Ki, the target zi∗ maximizes post-impulse continuation value net of the fixed cost. With no proportional move cost, this yields
V ′(z∗
1) = 0, (5.8)
V ′(z∗
2) = 0. (5.9)
With proportional costs, (5.6)–(5.9) become the standard marginal equalities of S–s policies.
Incentive compatibility at the triggers. The impulse operator in (5.1) allows the firm to choose either reset i ∈ {1, 2} at any state z. The ladder description, i.e. patch at β1, pivot at β2, is therefore not imposed as a primitive restriction; it is enforced by the QVI at the free boundaries. Once we have constructed a solution (β1, β2; z1∗, z2∗; V ) to (5.2)–(5.9) and shown in Theorem 2 below that it satisfies the QVI (5.1), the boundary equalities V = MV imply that, at the lower trigger,
V (β1) = (MV )(β1) = max{V (z∗
1) − K1, V (z∗
2) − K2}.
Combining this with value matching at β1 in (5.4) yields
V (z∗
1) − K1 ≥ V (z∗
2) − K2, (5.10)
13

so impulse 1 (the patch) is optimal at β1 in the sense of the impulse operator M. Analogously, at the upper trigger,
V (β2) = (MV )(β2) = max{V (z∗
1) − K1, V (z∗
2) − K2}
together with (5.5) implies
V (z∗
2) − K2 ≥ V (z∗
1) − K1. (5.11)
Thus the ladder geometry in (5.3) is incentive compatible with the QVI formulation: when the state first hits β1 (respectively, β2), it is indeed optimal to execute the patch (respectively, pivot) rather than the alternative impulse. Combining (5.10) and (5.11) also shows that the two impulses deliver the same net continuation value, V (z1∗) − K1 = V (z2∗) − K2, in the verified optimum.
Growth and consistency. We assume π and k are bounded and that there exists ρ > 0 such that
lim sup
|z|→∞
e−ρ|z| ∣
∣V (z)∣
∣ < ∞.
Together with the geometry in (5.3), this selects the economically relevant solution and rules out disconnected inaction bands.
5.3 Existence and uniqueness of the BVP solution
Proposition 1 (Well posedness and uniqueness). Suppose r > 0, μθ and φ are continuous on [β1, β2] with φ bounded and bounded away from zero there, λ(·) is bounded, and π is continuous. Then there exists at most one quadruple (β1, β2; z1∗, z2∗) and function V ∈ C1(R) ∩ C2((β1, β2))
solving (5.2)–(5.9) and the growth condition. If, in addition, π is Lipschitz and μθ, φ are C1, a solution exists and is unique.
Proof (Appendix A). A complete proof is provided in Appendix A.
5.4 Verification: optimality of the ladder policy
Theorem 2 (Verification for the two-reset ladder). Let (β1, β2; z1∗, z2∗; V ) satisfy (5.2)–(5.9), the ordering (5.3), the growth condition, and suppose the no-local-time lemma of Appendix F holds under the publication policy λ(·) near β1, β2. Consider the stationary Markov control that
• lets zt diffuse on [β1, β2] according to L as long as zt ∈ (β1, β2);
• at the first hitting time of β1 from above, pays K1 and resets zt instantly to z1∗ ∈ [β1, β2];
• at the first hitting time of β2 from below, pays K2 and resets zt instantly to z2∗ ∈ [β1, β2].
This two-reset ladder is optimal among all admissible controls. Its value is V , and it solves the QVI (5.1).
Proof (Appendix A). A complete proof is provided in Appendix A.
5.5 Notes on regularity and comparative statics
Endpoint regularity. Under local silence (Section 3), the martingale component of public beliefs vanishes in neighborhoods of β1 and β2. The no-local-time lemma in Appendix F ensures that the sufficient statistic for beliefs does not accumulate local time at those boundaries. This justifies the smooth-pasting conditions (5.6)–(5.7) at the triggers. Because resets are implemented at first hitting times and jump zt back into (β1, β2), the private state itself also does not accumulate local time at β-
1 or β2.
14

Costly reversibility and S–s comparative statics. In constant-coefficient examples, the usual S–s monotonicities obtain: the triggers and targets move outward with the fixed costs Ki, and the jump sizes increase (Appendix F). Intuitively, a higher fixed cost widens the inaction band and makes each reset more lumpy. This is the ladder analogue of classic S–s policies with costly reversibility.6
Selection via disclosure. Section 3 and Appendix C show that posted local silence windows eliminate interior mixing and select this pure two-reset ladder within the stationary Markov class. The inaction band is endogenously a single contiguous interval [β1, β2] in the private state z, consistent with (5.3) and with the equilibrium characterization in Theorem 1.
6 Endogenous Adoption Side
We model a representative buyer (or platform) that observes the public posterior (mt, vt) generated by the publication technology in Section 3. The buyer chooses a stopping time τ at which to adopt, in order to maximize discounted surplus. The optimal rule will be a single threshold α in the public mean m, and that cutoff feeds back into the firm’s payoff.
6.1 Buyer’s problem as optimal stopping on a PDMP
Let S(m) denote the static surplus from adopting at public mean m (for example, expected user benefit net of price or switching costs).
Assumption 4. S : R → R is C2, strictly increasing, and weakly concave. The public state (mt, vt) follows the piecewise-deterministic Markov process implied by Section 3: between publications,
m ̇ t = μ ̄(mt), v ̇t = γ ̄(mt, vt),
and at a publication time beliefs jump according to the publicly observed disclosure intensity λ(·).
Before adoption the buyer earns zero; at τ the buyer receives the lump sum S(mτ ).7 The value function is W (m, v) = sup
τ ≥0
E
[e−rτ S(mτ ) ∣
∣ (m0, v0) = (m, v)] .
Let Aλ be the generator of (mt, vt) under a given publication policy λ(·), acting on smooth f :
(Aλf )(m, v) = μ ̄(m) ∂mf (m, v) + γ ̄(m, v) ∂vf (m, v) + λ(m) E[f (U (m, v, ε)) − f (m, v)], (6.1)
where U is the disclosed-belief update at a publication shock with noise ε. The buyer’s problem satisfies the variational inequality
max
{
rW (m, v) − AλW (m, v), S(m) − W (m, v)
}
= 0. (6.2)
6See, for example, Dixit and Pindyck (1994); Bertola and Caballero (1994); Abel and Eberly (1996); Buhai and Teulings (2014). 7A perpetual post-adoption flow that is a function of mτ yields the same stopping boundary. We keep the lump sum for clarity.
15

6.2 Local silence and threshold structure
We now state the equilibrium regularity that makes the stopping rule one dimensional.
Assumption 5 (Local silence at the adoption margin). In equilibrium there is an open interval Uα = (α − δ, α + δ) in belief space such that the firm publicly sets λt = 0 whenever mt ∈ Uα. While mt ∈ Uα there are no new publications, so (mt, vt) follows the deterministic ODE flow
m ̇ t = μ ̄(mt), v ̇t = γ ̄(mt, vt),
with no jumps. In particular, inside Uα the future path of mt depends only on mt itself (not on vt), and mt is continuous with bounded variation. In addition, the window Uα is chosen so that the deterministic drift carries reputations that enter it from below up to the adoption point before they can exit through the left edge: for every m ∈ (α − δ, α) the solution of m ̇ t = μ ̄(mt) with m0 = m remains in Uα and hits α in finite time before reaching α − δ.
Remark 2 (Economic rationale and relationship to earlier local silence near α). Assumption 5 is an equilibrium regularity restriction rather than a technological constraint, and it is consistent with the disclosure-tempo microfoundation in Section 3 and with the firm’s payoff aggregator in Assumption 6. In particular, it is implemented by the same publication clock λ(·) that generates the local-silence bands around the private-state triggers β1 and β2 in Section 3. The equilibrium publication poli-
cy can therefore feature several disjoint clock-off bands: one around each βi in the private state and, in addition, the adoption-margin window Uα in public-belief space defined above. Assumption 5 simply selects equilibria in which the firm also shuts the clock off on Uα; it is not an extra technological assumption beyond the earlier selection device. Once mt has entered a small neighborhood of the adoption boundary from below and is drifting upward according to m ̇ t = μ ̄(mt), adoption is alrea-
dy imminent even if the publication clock is kept off: the deterministic flow carries mt to α in finite time. Turning the clock on inside Uα adds jump risk without changing this local drift. Under the linearGaussian benchmark, belief jumps are driven by a mean-zero innovation, so additional disclosures in Uα generate a mean-preserving spread of the path of mt around the same deterministic trend. A sufficiently negative realization can push mt back below Uα and restart the approach to the boundary,-
 delaying adoption by an additional spell, whereas a positive realization has little scope to improve on the already short drift time to α in a narrow window. Under Assumption 6, post-adoption surplus enters the firm’s flow payoff with positive weight (η > 0 and Λ′(·) ≥ 0), so the firm weakly prefers paths on which adoption occurs sooner in expectation. For a small enough window Uα, this makes the choice λt = 0 locally (weakly) profitable: it removes downside jump risk at the margin without sacrif-
icing any systematic upside in expected time-to-adoption. Rather than re-solving the joint problem for the firm’s optimal λ(·) at the adoption margin, we therefore focus on equilibria in which the firm takes this natural best reply and implements local silence on Uα, working with the resulting deterministic approach of mt to α in that band.
Assumption 5 has two consequences. First, near α the continuation value from any state (m, v) with m ∈ Uα depends only on m, so we may write W (m, v) = ̂W (m) there. Second, all buyers who are just about to adopt face the same deterministic drift path for mt, independent of v. This collapses the two-dimensional stopping problem to a scalar cutoff in m. A sufficient condition for the last sentence of Assumption 5 is that μ ̄(m) ≥ 0 on (α − δ, α) and μ ̄ is continuous at α; the linear-drift benchmar-
k in Section 6.4 satisfies this sign condition.
16

Proposition 2. Under Assumption 4, the regularity in Section 3 (bounded λ, Lipschitz μ ̄), and Assumption 5, there is a unique α ∈ R such that the optimal stopping region is
Γ = {(m, v) : m ≥ α}.
The value function W is the unique continuous solution to (6.2) satisfying
rW (m, v) = AλW (m, v) for m < α, (6.3)
W (α, v) = S(α) for all feasible boundary v. (6.4)
Moreover, because λ(·) = 0 on Uα, (mt, vt) approaches the boundary {m = α} from below along a deterministic path with mt continuous. Writing ̂W (m) for W (m, v) on Uα, smooth fit holds at α:
̂W ′(α) = S′(α). (6.5)
Proof (Appendix A). A complete proof is provided in Appendix A. Briefly, standard Snell-envelope arguments imply that for each fixed v the optimal stopping set is an upper set in m, so it can be written {m ≥ α(v)}. Assumption 5 implies that inside Uα the continuation value depends only on m, not on v, so all α(v) coincide and equal some scalar α. Inside Uα, mt has bounded variation and no jumps, so ̂W solves a first-order ODE below α with value matching ̂W (α) = S(α) and supercontact, which yields-
 smooth fit ̂W ′(α) = S′(α). Uniqueness follows from the strict monotonicity of S and linearity of the continuation problem.
Interpretation. The buyer adopts once public reputation mt is high enough. Local silence pins down a clean marginal condition at α: near α the public mean mt drifts deterministically toward the cutoff, cannot exit the silence window on the left before hitting α, and cannot jump across it. As a result the stopping problem at the margin is effectively one dimensional in m and admits a single belief-mean cutoff α rather than a v-dependent surface. From this point on we write W (m) for the buyer’s con-
tinuation value in the neighborhood of α, using the one-dimensional representation justified above.
6.3 Feedback into the firm’s problem
Assumption 6. Let π(m; α) be the adoption intensity induced by the cutoff, with π(m; α) = 0 for m < α and weakly increasing and right-continuous for m ≥ α. The firm’s flow payoff is
π(z, m) = π0(z) + η Λ(π(m; α)), (6.6)
with η > 0 and Λ increasing and concave (for example, Λ(x) = p x or Λ(x) = p x − κp
2 x2).
This creates a revenue kink at α: adoption ramps up only after m crosses the threshold, linking disclosure incentives back to Section 3 and to the verification problem in Section 5.
6.4 Worked linear-drift case with local silence
We now derive a closed form for α when the drift of public belief is locally linear and local silence holds near the boundary.
Assumption 7. On a neighborhood of α: (i) m ̇ t = μ ̄(mt) with μ ̄(m) = κ(  ̄m − m), κ > 0, and α ≤  ̄m; (ii) λ(m) = 0; (iii) v ̇t = γ ̄(mt, vt) is bounded.
17

Deterministic approach to the boundary. With λ = 0 locally, mt solves m ̇ t = κ(  ̄m − mt), so
m(t; m0) =  ̄m − (  ̄m − m0)e−κt, τ (m0) = 1
κ log
(  ̄m − m0
 ̄m − α
)
.
Hence for m < α,
W (m) = e−rτ(m) S(α) =
(  ̄m − α
 ̄m − m
)r/κ
S(α). (6.7)
The expression is independent of v because Assumption 5 makes the continuation path for mt the same for all v inside Uα.
Smooth fit pins α. Differentiate (6.7) and let m ↑ α. Using μ ̄(α) = κ(  ̄m − α) we obtain
W ′(α−) = r
μ ̄(α) S(α) = r
κ(  ̄m − α) S(α).
Smooth fit (6.5) then implies μ ̄(α) S′(α) = r S(α), (6.8)
which, under linear drift, becomes
κ(  ̄m − α) S′(α) = r S(α). (6.9)
Closed form with linear surplus. If S(m) = am − p with a > 0 and p ≥ 0, then S′(α) = a and (6.9) gives
α = κ  ̄m + (r/a) p
κ + r . (6.10)
Higher p raises α with weight r/(κ + r); faster mean reversion κ places more weight on  ̄m.
General concave surplus. For strictly increasing and weakly concave S, (6.9) has a unique solution, and that solution satisfies α ≤  ̄m under a mild sign restriction. To see uniqueness, define
L(α) := κ(  ̄m − α) S′(α) and R(α) := r S(α).
Because S is strictly increasing, S′(α) > 0 for all α, so R(α) is strictly increasing. Because S is weakly concave, S′(α) is weakly decreasing in α; multiplying by (  ̄m − α), which is also decreasing in α, implies that, on α ≤  ̄m, L(α) is weakly decreasing. A decreasing L and an increasing R can cross at most once, so (6.9) admits at most one solution. To locate that solution, note that L(  ̄m) = 0, so any α with S(α) > 0 must satisfy α <  ̄m (otherwise R(α) = rS(α) > 0 = L(α) and there is no eq-
uality). Hence, if S(·) is nonnegative on [α,  ̄m], which is natural when S is interpreted as net benefit from adoption, the unique solution lies in α ≤  ̄m.
Remark 3. If λ(·) is small but positive near α, a first-order expansion of the jump term in (6.1) gives
μ ̄(α) S′(α) = r S(α) + O(λ(α)),
so the cutoff is robust to small deviations from exact local silence. We keep exact local silence because it underpins the selection result in Section 3.
18

6.5 Comparative statics and empirical links
From (6.8) we obtain sharp predictions. In the linear case (6.10),
∂α
∂p = r
a(κ + r) > 0, ∂α
∂  ̄m = κ
κ + r > 0.
Disclosure moves α through the local drift of beliefs (via μ ̄) and through the presence or absence of jumps (local silence versus updates), echoing dynamic disclosure (Guttman et al., 2014; Orlov et al., 2020). The adoption kink at α interacts with the release ladder in Sections 5 and 3 and maps to telemetry-style usage measures in empirical settings (Arora et al., 2010; Li and Paxson, 2017).
7 Financing, Reversibility, and Distortion Bounds
We now introduce perpetual debt with coupon cd > 0 and an equity–controlled default time T ∗. Let AtFB denote the all-equity (first-best) value at t, and let (St, Yt) be the equity and debt values under leverage, given equity’s policy (impulses, publication intensity, and default). The flow payoff under leverage is the same π(zt, mt) from (6.6); equity services the coupon cd until default.
7.1 Levered QVI: solvency, impulses, default
Let S(z, m) be the stationary Markov equity value under leverage. Write L for the private state generator from Section 5, and λ(·) for the publication policy. As in Section 5, define the impulse operator (MS)(z, m) = max{ S(z∗
1, m) − K1, S(z∗
2, m) − K2 }.
Leverage adds a third control: equity can default, after which equity receives 0 and debtholders seize control. With limited liability and seniority, the equity QVI is
max
{
rS − LS − (π(z, m) − cd
) + k(λ(z)), S − MS, −S
}
= 0. (7.1)
Default is optimal where the stopping term −S = 0 binds, i.e. on {(z, m) : S(z, m) = 0}. On the solvent set {S > 0}, equity either (i) continues and satisfies the inaction HJB (the first term in (7.1) equal to 0, which is (5.2) with π replaced by π − cd), or (ii) triggers an impulse (value matching and high contact as in Section 5). Debtholder value Y is defined as the present value of coupons until default plus the continuation value after default when control passes to debtholders. Appendix D ve-
rifies this formally and constructs Y as the unique solution to its own linear stopping/control problem with equity’s strategy treated as given.
7.2 Switching at takeover and reversibility
At default T ∗, control passes to debtholders or to a buyer of the distressed assets. The acquirer may reset the inherited state by paying a takeover switching cost. This reduced-form object is how architectural reversibility at takeover enters the wedge.
Definition 2 (Takeover switching cost map). Associate to the two upgrade options a pair φ = (φ1, φ2) ∈ [0, ∞)2 such that, upon default, the acquirer can implement the patch (respectively the pivot) on the inherited state by paying at most φ1 (respectively φ2). Write φmax := max{φ1, φ2}. The map is tight if there is an acquirer policy that attains the first-best continuation after default while never paying more than φi for option i.
19

As intuitive interpretation, a small φi means action i is highly reversible at takeover (for example, modular architecture, documented rollback paths, separable mitigations). In the limit φi = 0, the acquirer can realign the asset with the first-best post-default target at zero additional cost.
7.3 Debt-insensitive patches and a least-irreversibility bound
Let St + Yt be the total market value of the levered firm given equity’s strategy, and let AtFB be the all-equity benchmark evaluated at the same primitive state (zt, mt).
Proposition 3 (Debt-insensitive patches and a least-irreversibility bound). Suppose the takeover map in Definition 2 is tight. Then for any levered policy (impulses, publication intensity, and default time T ∗),
AFB
t − (St + Yt
) ≤ Et
[
e−r(T ∗−t) φmax
]
. (7.2)
In particular, along any history on which (i) the process is managed purely by patches (the low-cost rung) and never requires a pivot before default, and (ii) the next-best acquirer at default can costlessly implement that same patch, i.e. φ1 = 0, we obtain
AFB
t = St + Yt on that history.
Leverage does not reduce total surplus on that “patch block” history. If moreover φ2 ↓ 0 (for example because increasing modularity makes the pivot equally reversible at takeover), then φmax → 0, the right-hand side of (7.2) vanishes, and leverage cannot distort the release ladder at all.
Our bound parallels Manso (2008), Prop. 1: replacing generic technology switches by a tight takeover map yields
AFB
t − (St + Yt) ≤ Et
[e−r(T ∗−t) φmax
],
with φmax = max{φ1, φ2} the least-reversibility takeover cost across the two rungs.
Proof (Appendix D). A complete proof is provided in Appendix D, via the takeover envelope in Lemma 2.
The takeaway is that leverage cannot create a first-order distortion where ex-post reversibility is high. Debt pressure matters only through the least reversible reset option. In typical ladder applications this is the pivot, not the incremental patch. As modularity improves (lower φ2), the levered equilibrium approaches the first-best ladder.
7.4 Implications for triggers and targets under leverage
Let (β1, β2; z1∗, z2∗) be the first-best ladder from Section 5, where β1 is the patch trigger and z1∗ the
post-patch target, and β2 and z2∗ are the pivot analogues.
The core question is: does leverage move (β1, z1∗)? Intuitively, patches should be debt-neutral. We now state conditions under which that statement is literally correct and show explicitly how the boundary conditions align.
Step 1. Isolating the safe patch block. Define the patch block as the region of the state space and strategy path on which the firm: (a) keeps zt inside (β1, β2) by instantaneously patching to z1∗ whenever zt hits β1 from above; and
(b) never reaches the pivot trigger β2 or a default boundary before time t.
20

This is de facto a maintenance-mode history: the firm is repeatedly issuing cheap, reversible tweaks (patches) to keep performance inside the lower rung and never gets so bad that it must pivot, nor so bad that creditors force a restructuring. Appendix D shows that, under standard parameterizations, the equity default boundary S = 0 lies strictly below β1. Hence, on such a patch-block history, default is strictly off path in equilibrium: equity never chooses default while zt is being actively ref-
lected at β1, and creditors do not expect to seize control before a pivot becomes relevant. Formally, on these histories we have T ∗ = ∞ with probability one conditional on staying in the patch block. Intuitively, if the firm never drifts into the (high-cost) pivot region, it also never defaults.
Step 2. Debt is riskless, and locally flat, on the safe patch block. Fix such a history. Since default never arrives along that path, debtholders receive the coupon flow cd forever and are never diluted or impaired by a takeover. From their point of view, conditional on the firm remaining in the patch block, the cash flow is a riskless perpetuity and their continuation value there must satisfy
rY (z, m) = cd on that safe patch block.
Therefore, conditional on remaining in the safe patch block,
Y (z, m) = cd
r and Yz(z, m) = 0 for all z ∈ (β1, β2) and corresponding m.
Crucially, Y is locally constant under this conditioning. Intuitively, as long as equity keeps the state in the “patch-only, solvent” region, debtholders simply collect the same coupon forever, and the exact timing of those patches does not change their present value.8
Step 3. Equity’s boundary conditions coincide with first best on the safe patch block. Total surplus under leverage is S + Y . By Proposition 3 and φ1 = 0, we have S + Y = AFB along the safe patch block: there is no wedge between levered value and first best on these histories. Write S = AFB − Y and substitute into equity’s value-matching and smooth-pasting conditions at the patch trigger and target. In first best, the patch trigger and target (β1, z1∗) are pinned by
(i) Value matching: AFB(β1) = AFB(z∗
1) − K1,
(ii) High contact / smooth pasting: AFB
z (β1) = AFB
z (z∗
1) = 0.
Equity under leverage solves the same algebra but with S in place of AFB. Using S = AFB − Y ,
Value matching for S: S(β1) = S(z∗
1) − K1
⇐⇒ AFB(β1) − Y (β1) = AFB(z∗
1) − Y (z∗
1) − K1.
On the safe patch block, Y (β1) = Y (z1∗) = cd/r, so equity’s value-matching condition collapses to the first-best one. Likewise, high contact for S requires
Sz(β1) = Sz(z∗
1) = 0 ⇐⇒ AFB
z (β1) − Yz(β1) = AFB
z (z∗
1) − Yz(z∗
1) = 0.
8If the patch block were ever close enough to default that coupon risk mattered, then Y would inherit slope Yz ̸= 0, and the neutrality result below would, and should, fail. Outside the safe patch block, the global Markov value Y is generally not flat because it integrates over paths that reach the pivot trigger or the default frontier. In our baseline calibration and in Appendix D, we keep β1 strictly above any default boundary, so this safe patch-block assumption holds on the range we match to t-
elemetry.
21

On the safe patch block, Yz(β1) = Yz(z1∗) = 0, so
AFB
z (β1) = AFB
z (z∗
1) = 0,
which is exactly the first-best smooth-pasting condition. In words: once we make explicit that (a) default is off path on the safe patch block and (b) φ1 = 0 means the acquirer can costlessly implement the same patch at takeover if default ever did occur, debt is effectively riskless on that block. Debt value is a flat perpetuity cd/r, so equity’s boundary system for (β1, z1∗) is the first-best boundary system.
Conclusion for the patch rung. Putting Steps 1–3 together:
• Patch block is debt-neutral. On solvent histories that remain in the safe patch block and never require a pivot before any default event, and when φ1 = 0, leverage does not distort the patch rung. The equity-chosen patch trigger β1 and target z1∗ coincide with the first-best ones.
• Where leverage can bite. Outside that safe patch block—near β2 where a high-cost pivot looms, or near the endogenous default boundary where S ↓ 0—debt is no longer riskless, so Y is no longer flat. Equity’s boundary conditions can then tilt away from first best because Y (·) and Yz(·) enter value matching and smooth pasting. The distortion is bounded by (7.2), and its magnitude is governed by the least-reversible move, φmax.
7.5 Tightness and comparative statics
Remark 4 (Tightness). Inequality (7.2) is sharp. Construct a case with: (i) a pivot needed strictly before the default boundary in first best, (ii) equity sets T ∗ just before that pivot because of cd, and (iii) at takeover the acquirer pays exactly φ2 to pivot and then follows the first-best continuation. Then
AFB
t − (St + Yt) = Et
[
e−r(T ∗−t)φ2
]
.
Remark 5 (Comparative statics). The wedge in (7.2) is weakly increasing in φmax and in default pressure induced by cd, and decreasing in r. Engineering choices that make large architectural resets easy to unwind (lower φ2 via modular interfaces, separable mitigations, or auditable rollback) shrink the wedge and push the levered equilibrium toward the first-best ladder. In particular, when φ1 = 0 and β1 lies safely above any default boundary, the maintenance or patch rung is predicted to be debt-in-
sensitive in both timing and target. The only remaining distortion margin is the high-cost pivot rung, and its importance scales with φ2.
8 Empirical Predictions and Measurement Blueprint
We map the primitives of local silence (Section 3), the adoption cutoff α (Section 6), and financing with reversibility (Section 7) to falsifiable signatures in firm-published telemetry. The section stays lightweight: we define the main objects and observables, state signatures S1–S5, and display the key estimating equations. Data construction, parsing, and estimation details are in Appendix E.
8.1 Objects and observables
Unit of observation. The baseline panel is firm i by calendar month t, together with an eventtime index τ centered on focal releases or pivots. Where product- or model-line disclosures are separable, the unit refines to product/module p and we work with (i, p, t) or (i, p, τ ).
22

Telemetry feeds. We restrict attention to firm-controlled channels: evaluation and benchmark posts, model cards, release notes and version-bump announcements, incident/advisory writeups, and vendor-authored security or safety bulletins. Third-party news, analyst notes, leaks, and market prices are not treated as disclosure signals; the theory speaks to the firm’s own publication clock.
Signals and event taxonomy. A document is counted as a public signal if it contains (i) a quantitative performance or safety claim, or (ii) a versioned change (new model, new policy, new mitigation). Identification uses high-recall keyword filters plus a light classifier, with manual adjudication around high-salience events (Appendix E). Each dated disclosure event is tagged as patch, pivot, release, or other. We interpret: • patch: hotfixes, fine-tunes, latency/context/pricing tweaks, incremental-
 mitigations (reversible rung);
• pivot: architectural/base-model changes, modality-stack changes, large rewrites (high-cost rung);
• release: marketing/product language such as “v4,” “next-gen model,” or “full rollout” that is operationally indistinguishable from a pivot;
• other: communications that do not map cleanly to either rung. In estimation we pool pivot and release into a single major reset class; on the same timestamp, pivot/release takes precedence over patch.
Core outcomes. Let Nit be the monthly count of firm-authored signals for firm i. Our proxy for the publication clock is λˆit := Nit,
with event-time analogue λˆiτ counting signals in month τ relative to a focal major reset. For each signal s disclosed by firm i in month t, we extract a metric value xs (e.g., pass@1, latency, mitigation severity, token cost) and map it to a benchmark family Fs (“coding accuracy,” “RAG latency,” “safety mitigation”). We standardize within family using pooled mean x ̄F and s.d. σF across all firms/months,
zs := xs − x ̄Fs
σFs
,
and define the within-month dispersion proxy
̂Varx
it :=

   
   
Var({zs : s disclosed by i in month t}), Nit ≥ 2,
0, Nit = 1,
missing, Nit = 0.
(8.1)
Let ̂Varx
iτ denote the event-time analogue. In the model, outside observers see noisy draws from a
one-dimensional latent state arriving on a controlled Cox clock; a pre-reset “dispersion dip” in ̂Varx reflects a shutdown of the clock (silence), not a change in intrinsic noise. As a cadence-only robustness measure that does not use metric values, Appendix E also constructs
̂Vartime
it , the intra-month interquartile range of timestamps for firm i in month t (and ̂Vartime
iτ in event time), and patch hazards based on inter-event durations in an event-time window around each major reset (pre- and post-).
23

8.2 Signatures S1–S5
We now summarize the main empirical signatures implied by the theory. Estimands and estimators are pre-specified in Appendix E.
S1. Pre-reset cadence and dispersion dip. Prediction. In the quiet pre-reset window implied
by local silence (Section 3), both λˆiτ and ̂Varx
iτ fall; at the reset they display discrete positive shifts.
A cadence-only measure ̂Vartime
iτ should mirror the dip.
Design. Stacked event studies of λˆiτ and ̂Varx
iτ around major resets,
λˆiτ = ∑
l∈L
βλ
l 1{τ = l} + αi + γcal(τ) + εiτ , (8.2)
̂Varx
iτ = ∑ l∈L
βVar
l 1{τ = l} + αi + γcal(τ) + ηiτ , (8.3)
omitting l = −1. Here αi are firm fixed effects and γcal(τ) are calendar-time effects (e.g., month or
quarter-by-year). Appendix E provides cadence-only robustness using ̂Vartime
iτ . A direct falsification of S1 is flat or rising cadence/dispersion in the pre-reset window after controlling for firm and calendar effects.
S2. Two-plateau outcome distribution. Prediction. Post-event performance, conditional on event class, is bimodal with mass near the equilibrium targets (z1∗, z2∗): one plateau after reversible patches, one after major resets. Design. Mixture or multimodality tests on post-event metrics stratified by patch versus pivot/release (e.g., finite mixtures, Hartigan dip tests). Falsification: robust unimodality after audited classification.
S3. Debt-insensitive patch timing under high reversibility. Prediction. Within highreversibility blocks, leverage does not shift patch hazards: the patch rung is debt-neutral (Section 7). Leverage effects may load on the high-cost pivot rung instead. Design. Hazard models for patch arrivals with leverage and a reversibility proxy RevProxyi,
hit = exp
{
ρ0 + ρ1 Leveragei + ρ2 RevProxyi + ρ3 Leveragei × RevProxyi + W ′
itκ
}
, (8.4)
where hit is the (discrete-time) patch hazard for firm i in period t and Wit collects controls. The conditional null in the high-RevProxy block is
∂ log hit ∂Leveragei
= ρ1 + ρ3R ̄ ≈ 0 for large R ̄.
In the S3 test we focus on a “high-reversibility” subsample and summarize it by a scalar R ̄, defined as the sample mean of RevProxyi among observations in the high-RevProxy block (e.g. the top quartile of the RevProxyi distribution). The derivative of log hit with respect to leverage at
RevProxyi = R ̄ is then ρ1 + ρ3R ̄, so H0 : ρ1 + ρ3R ̄ = 0 tests for zero leverage effect on patch timing at a representative high-reversibility rung. Falsification: significant leverage effects on patch timing even when reversibility is measured to be high.
24

S4. Patch cascade dynamics. Prediction. The reversible rung fires repeatedly inside its band: patch intensity is elevated after a major reset but not before, with no pre-reset bunching once events are aligned in event time. Design. Duration models for inter-patch times ∆ik in an event-time window around each major reset (pre- and post-), with a post-reset indicator and covariates. A convenient representation is a Cox-type hazard,
hik(t) = h0(t) exp
{
ρ 1{post-major-reset} + Z′
ik ξ
}
, (8.5)
where h0(t) is an unspecified baseline, k indexes patches in the cascade, 1{post-major-reset} is defined in event time (equal to 0 for intervals with τ < 0 and 1 for intervals with τ ≥ 0), and Zik includes reversibility proxies and financing variables. Falsification: symmetric pre- and post-reset bunching in ∆ik once major resets are aligned in event time.
S5. Adoption boundary and silence depth. Prediction. The adoption cutoff α satisfies
μ ̄(α) S′(α) = r S(α), (8.6)
as derived in Section 6. Deeper pre-release silence (a larger cadence dip in λˆiτ ) produces a sharper observed uptake jump at α (fewer “jump-overs”). Because this smooth-fit characterization relies on local silence at the adoption boundary (so that the publication clock is shut off and beliefs approach α deterministically without jumps), stronger pre-release silence makes realized adoption decisions track the theoretical cutoff more tightly and yields a cleaner discontinuity with fewer cross-boun-
dary observations. Design. Discontinuity designs around inferred α using platform/API uptake, with measures of pre-release silence depth as moderators. Falsification: statistically similar adoption slopes irrespective of measured silence depth.
8.3 Measurement choices, falsification, and status
Proxies, instruments, and controls. Reversibility proxies aggregate rollback tooling and feature gates, modular-dependency shares, and separable safety mitigations into RevProxyi, which maps to takeover switching costs and φmax in Section 7. Financing variables (leverage, coupon burdens, maturity cliffs) come from balance sheets and funding rounds. Appendix E discusses candidate shifters of publication cost that move λt (e.g., platform policies or audit mandates) and a standard set of controls (fi-
rm size, product breadth, benchmark-calendar dummies, platform fixed effects, and calendar time effects).
Threats and diagnostics. Key threats are misclassification, nonstationary benchmark calendars, and correlated firm-month shocks. Diagnostics include leads and placebo dates in S1, strict versus broad signal sets, competitor-month controls, leave-one-firm-out checks, and alternative count models and event windows. Appendix E makes explicit what would overturn each prediction S1–S5.
9 Policy Design and Industry Implications
The model isolates two levers with first-order welfare effects: (i) disclosure tempo (Section 3); and (ii) reversibility and modularity that lower takeover switching costs (Section 7). These levers operate through two core results: the selection result (local silence eliminates interior mixing and delivers pure reset thresholds), and the wedge bound in (7.2).
25

Throughout this section we take welfare to mean the sum of (a) the firm’s continuation value V and (b) downstream buyer/platform surplus W from adoption. For a given stationary Markov environment define
W ≡ V + W,
where V is the value function that solves the firm’s QVI (Section 5) and W is the buyer value from the optimal stopping problem in Section 6. This is the natural total-surplus object for our setting. Importantly, W is pinned by the adoption cutoff α and by the deterministic drift of public beliefs mt as they approach α (Proposition 2).
9.1 Disclosure tempo: selecting without chilling
Local silence (a posted, publicly observed window with λt = 0) removes interior mixing and knifeedge cycling while leaving the adoption cutoff intact (Sections 3 and 6). A policy instrument can implement the same logic without broad opacity:
• Quiet-period safe harbor with guardrails. Permit firm-specific, pre-announced silence windows that are: (a) short and bounded in both length and frequency, (b) publicly posted as a rule for λ(·), and (c) asynchronously staggered across firms. The goal is to permit local silence near knife-edges while keeping the aggregate flow of public information nondegenerate.
• Clock transparency, not content control. Regulate the frequency protocol, not the content of any specific disclosure. The object of interest is the martingale component in mt, not the wording of individual announcements.
Sufficient-statistic rule. Consider an intervention with two testable requirements:
(i) The firm must pre-announce local silence windows (i.e. λt = 0 in a small neighborhood around each reset trigger), so that, by Lemma 1 and Proposition 4, interior mixing is ruled out and the firm follows pure reset thresholds instead of randomizing or cycling.
(ii) The intervention caps the total share of calendar time spent with λt = 0 by a small bound, so most of the horizon still features λt > 0 and public signals continue to arrive at a regular cadence.
Under (i), the firm’s continuation value V weakly increases. Theorem 1 shows that local silence eliminates the first-order mixing loss at each trigger and replaces knife-edge randomization with a unique reset at a unique trigger and target, without changing the inaction ODE between interventions (see proof of Theorem 1). Hence, the firm no longer wastes value dithering at the boundary. Under (ii), the buyer’s adoption cutoff and surplus W are essentially unchanged. Proposition 2 shows that as long-
 as the local drift of mt and the deterministic approach to α are preserved, the buyer still solves a one-dimensional stopping problem with a unique scalar cutoff α, and the implied value function is determined by the same smooth-fit logic at that cutoff. Because the added silence windows occupy at most an ε-fraction of calendar time, the induced change in the jump intensity λt perturbs the buyer’s HJB operator only by O(ε),9 so the resulting value function W moves only by O(ε) while the cutoff α -
remains exactly fixed. Short, bounded, publicly declared quiet windows suppress high-frequency jump risk around knife-edges but do not starve the market of information on average, so the buyer continues to observe a belief process with the same drift and the same stopping boundary, and our first-order welfare comparison for W is unaffected.
9Formally, letting W ε denote the buyer’s value under a disclosure protocol in which λt = 0 on a set of times of measure at most ε, and W 0 the baseline value, standard stability results for viscosity solutions imply supm |W ε(m) − W 0(m)| = O(ε) under our regularity assumptions on λ(·) and on the drift of mt.
26

Combining (i) and (ii), total surplus W = V + W weakly rises relative to an environment with no oversight. V rises because silence near triggers kills interior mixing. W does not fall because the adoption margin and the induced post-adoption payoffs are preserved. Both parts of (i)–(ii) are directly testable in telemetry (Section 8): (i) appears as short, localized pre-release dips in cadence and dispersion of firm-published signals, and (ii) appears as a bound on the fraction of calendar
time in which λˆit = 0.
9.2 Modularity and reversibility: shrinking the wedge
The financing wedge is bounded by expected least irreversibility at takeover, E[e−r(T ∗−t)φmax
] (cf. Manso (2008), Prop. 1), where φmax = max{φ1, φ2} collects takeover switching costs for patch and pivot (Proposition 3). Policy can act directly on φmax:
• Reversibility certification. Certify auditable rollback and separable deployment pipelines (versioned artifacts, feature gates, modular mitigations, canary rollout paths). A lower certified φ2 tightens the takeover bound and brings pivot timing under leverage closer to first best. Patches are already debt-insensitive when φ1 ≈ 0.
• Covenant design aligned with reversibility. Encourage debt covenants that grant pivot grace periods when certified reversibility is high. If the asset can be cleanly realigned at default, there is less reason for creditors to force an early default T ∗ just to seize and retool the asset. This implements the same wedge logic by shifting T ∗ only where φmax is small.
Sufficient-statistic rule. Any intervention that strictly lowers φmax (holding primitives fixed) weakly increases total surplus W. By Proposition 3, a lower φmax tightens the bound on AtFB − (St + Yt): leverage destroys less value relative to first best. Since St + Yt is the levered firm’s total market value and AtFB is the all-equity benchmark, shrinking the bound moves the levered ladder’s reset thresholds closer to first best, which weakly raises St + Yt (the equity slice St cannot be worse off-
, since it could replicate its old ladder while debt gains). On the buyer side, the comparative statics are also one sided. Section 6 takes downstream surplus at adoption to be S(mτ ), where τ is the stopping time at which the public belief mt first hits the cutoff α characterized in Proposition 2. Under the local-silence assumption at the adoption margin (Assumption 5), mt has deterministic drift as it approaches α and the adoption region is {m ≥ α}, so mτ = α at the stopping time. Buyer surplus -
can therefore be written as
W (m) = E[e−rτ(m)S(α)],
with S(·) strictly increasing in m by Assumption 4. Holding primitives and the induced cutoff α fixed, W (m) is weakly decreasing in the adoption delay τ (m): an earlier (or equal) adoption date weakly raises W . In our ladder environment, the patch rung is already debt-neutral (φ1 = 0) and Proposition 3 implies that leverage can only distort the high-cost pivot rung by postponing, never accelerating, the costly pivot relative to the all-equity ladder. Under local silence at the adoption margin, t-
he belief mean mt drifts deterministically toward α and does not pick up martingale noise there (Section 3). Eliminating the leverage distortion by lowering φmax therefore either leaves the adoption time τ (m) unchanged or brings it forward: the pivot happens no later than before, the induced belief path approaches α at least as fast, and the buyer faces the same drift environment near the boundary. Given that S(·) is increasing and W (m) = E[e−rτ(m)S(α)], bringing reset timing closer to first bes-
t cannot reduce (and generically raises) realized downstream surplus. In this sense, shrinking φmax weakly increases both the firm’s total market value St + Yt and downstream buyer surplus W .
27

9.3 Implementation cautions and falsifiers
• Anti-coordination risk. Industry-wide synchronized silence is welfare-reducing. The safe harbor must require asynchronous timing and a cap on aggregate silent mass.
• Overbroad quiet periods. Long or opaque windows undermine identification at the adoption boundary (Section 6) and are detectable ex post by the absence (not presence) of the short, local cadence and variance dips highlighted in Section 8.
• Certification without teeth. A reversibility label is only useful if it encodes operational tests (time to rollback, dependency isolation, auditability) that predict a lower φmax. If certification does not move φmax, the bound in (7.2) does not move.
Bottom line. Design governs the clock; engineering governs reversibility. A disclosure-tempo rule with guardrails (short, posted, bounded quiet windows plus real-time clock transparency) and a reversibility certification regime that lowers φmax jointly implement the selection and wedge results in a minimal way. By construction both levers weakly raise W = V + W relative to natural unregulated benchmarks: (i) a world with uncontrolled interior mixing around triggers; and (ii) a world with leverage -
layered on top of high, poorly certified takeover switching costs.
10 Conclusion
We develop a compact theory of AI release cadence built on three primitives: reputational learning from disclosed performance and safety signals; a two-rung ladder of real options (a cheap, reversible patch and a costlier, less reversible pivot); and firm control over a publicly observed publication clock that can be locally turned off (“local silence”). Their interaction delivers a simple but tightly disciplined picture of release behavior: a two-rung reset ladder with no interior mixing, and a f-
inancing wedge that is pinned entirely by irreversibility. Two structural results do the main work. First, a predictable publication-frequency rule that posts short, observable clock-off windows selects pure reset equilibria. Once the firm can visibly set λt = 0 in a narrow band, the martingale part of public beliefs shuts down on that band, beliefs drift deterministically, and the firm can no longer support knife-edge randomization or cycling. Equilibrium collapses to a clean ladder: two triggers-
 and two jump targets, with no interior mixing. The resulting value function is characterized by a transparent boundary-value system with value matching and high contact (smooth pasting) at the triggers and target optimality at the targets, and we verify existence and uniqueness (within stationary Markov strategies) via a standard QVI/BVP argument in Section 5. The technical lever is the no-local-time property inside posted silence windows, formalized in Appendix F. Second, financing frictions mat-
ter only where irreversibility lives. Introducing leverage with an equity-controlled default time and senior debtholders generates a tight bound in expected present value: the gap between first-best all-equity value and the levered total (equity + debt) is bounded by the expected discounted takeover switching cost of the least reversible rung (Section 7). As long as the low-cost patch is easily reversible at takeover, debt is effectively neutral on that “patch block”: patch timing (trigger and tar-
get) is debt-insensitive, and total surplus along that block coincides with first best. Any distortion must appear at the pivot rung, and even there it is tightly bounded by the expected takeover cost of forcing that pivot. Engineering choices that lower that takeover cost (i.e. reduce φmax) directly compress the financing wedge. From an economic standpoint, the theory rationalizes the cadence seen in AI labs and platform model vendors: long-ish quiet spells followed by visible jumps; frequent inc-
remental patches that keep
28

systems in “maintenance mode” and look operational rather than existential; and rarer pivots that feel architectural, financing-relevant, and politically contentious. It also delivers sharp comparative statics. Patches should be common and largely debt-insensitive. Pivots should be rare, and when leverage does bend timing it should do so only through the hardest-to-reverse move. Disclosure tempo and modularity, not raw diffusion noise or loosely defined “hype cycles”, are the discipline levers. M-
ethodologically, the paper links three literatures. A posted publication-frequency protocol, i.e., a predictable Cox clock with occasional λt = 0 windows, implements a disclosure instrument that turns off the martingale component of public beliefs on a vanishing set and thereby selects clean, non-mixing equilibria. That selection logic connects dynamic disclosure and information design to classic S–s impulse control with costly reversibility, but without mixed actions or knife-edge cycling. On the-
 verification side, we adapt the S–s boundary-value/QVI machinery to a two-reset ladder under posted silence, using the no-local-time property at the boundaries to justify smooth pasting and to establish uniqueness of the endogenous triggers and targets, while target optimality at the jump destinations follows from the usual first-order condition that maximizes the post-impulse continuation value. On the financing side, we show how leverage wedges can be mapped to takeover switching costs, yieldin-
g a least-irreversibility bound in the spirit of agency-with-irreversibility results, but tailored to a multi-rung release ladder. The framework produces concrete, testable signatures in firm-published telemetry (Section 8). We emphasize three: (i) a pre-release cadence dip in the firm’s own disclosures (publication intensity falls and intra-month dispersion in disclosed metrics collapses to zero or missing) just before a major reset, consistent with a local clock-off window; (ii) two post-release-
 plateaus in disclosed performance and safety metrics, with mass near the two endogenous targets, consistent with a patch rung and a pivot rung rather than a smooth ramp; and (iii) debt-insensitive patch timing in high-reversibility regimes, alongside tighter leverage effects around pivots, consistent with the takeover-bound logic. By design, these tests rely on firm-authored signals (evaluation cards, release notes, mitigation advisories) rather than option-implied volatility or broad market chat-
ter: the object of the theory is how the firm gates its own outward signal flow, not how markets price event risk. The empirical component is intentionally scoped as a measurement and falsification blueprint. We state sharp predictions, define observables tied to the sufficient statistics of the model (clockoff windows and reversibility), and pre-specify estimators and robustness protocols (Section 8; Appendix E). Executing the data build and estimation lies outside the present manuscript, but the-
 designs are self-contained and directly refutable without further modeling choices. Framing the empirics this way makes the theory falsifiable in principle and portable across settings, including beyond AI products. Several extensions appear first order and tractable within the same QVI/BVP architecture: (i) multi-firm disclosure games with asynchronous quiet windows, spillovers, and imitation pressure; (ii) partially observed clocks, where outsiders infer λt rather than observe it directly; (iii-
) proportional/move costs and additional rungs beyond patch/pivot; and (iv) richer adoption blocks with pricing, heterogeneous buyers, and strategic holdout. Each preserves the paper’s sufficient-statistic logic: govern the clock locally to eliminate mixing; engineer reversibility to compress the financing wedge. In short, disclosure tempo is the selection lever, and modularity is the wedge lever. A regulator or platform steward that (a) permits short, posted, bounded quiet windows with real-time -
clock transparency and (b) certifies or subsidizes modular rollback and separability is, in our model, acting directly on the two margins that determine welfare.
29

A Proofs
Proof of Theorem 1 (silence eliminates interior mixing)
Fix δ > 0 and, for each trigger βi (i = 1, 2), post a local silence window
Iδ(βi) := {z : |z − βi| ≤ δ}
by setting λ(z) = 0 on ⋃
i Iδ(βi) and λ(z) =  ̄λ elsewhere, as in Assumption 9. We work throughout with stationary Markov strategies under this posted clock rule.
Coordinate remark (state-space hygiene). In the main text we sometimes describe “local silence” as a window in the public belief m, i.e. a neighborhood in which the Cox clock is shut off and the martingale part of mt vanishes. Here, and in Assumption 9, we implement silence as a window in the private state z: we set λ(z) = 0 whenever z ∈ Iδ(βi). Because the realized intensity λt = λ(zt) is predictable in FtP , the public observes when λt = 0. Terminology. Statements such as “on ⋃
i Iδ(βi) the belief mt has finite variation” always mean at those calendar times t for which the realized path satisfies zt ∈ ⋃
i Iδ(βi). On that set of times the Cox clock is off, so no new public signal arrives and the martingale part of mt is off. Thus a z–window with λ(z) = 0 implements the same “local silence” in mt that we use in the selection argument.
By Lemma 1 (Appendix C), whenever zt ∈ ⋃
i Iδ(βi) the public belief mt has finite variation on that time set: in the Doob–Meyer decomposition of mt, the compensated jump martingale has zero quadratic variation when λt = 0. By the no–local–time lemma for beliefs (Lemma 3, Appendix F), mt accrues no local time at the endpoints of the posted windows while the windows are in force. These statements pertain to mt only; they do not constrain the private diffusion zt, which continues to carry its Brownian martingale component.
Why properties of mt (not zt) are decisive. The curvature / isolated–crossing assumption in z (Assumptions 3 and 10) rules out mixing on any interval of positive z–measure: off the trigger, one action strictly dominates. The only remaining way to sustain mixed strategies is a knife-edge construction that relies on public stickiness right at the boundary: residence on a null set supported by a martingale or local time of the belief process. Local silence removes the belief martingale and kills loca-
l time for mt at the window edges, so this knife-edge device is unavailable. On diffusive inaction blocks away from the silence windows, the firm’s continuation value V solves the linear ODE r V (z) = π(z) + (LV )(z) − k(λ(z)), (A.1)
which is (5.2) in the main text, with L the private-state generator. At each trigger βi and corresponding target zi∗, value matching and smooth pasting hold, and the target is pinned by the standard first-order condition for the reset (the target FOCs (5.8)–(5.9) in the main text). Existence and uniqueness on each inaction block follow from Proposition 1.
To rule out interior mixing, suppose for a contradiction that the equilibrium mixes continuation and an impulse on a set of positive Lebesgue measure in a neighborhood of some trigger βi. Mixing on a nontrivial interval requires knife-edge indifference on that entire interval. In continuous-time impulse problems, such knife-edge indifference is usually supported by either
(i) a nonzero martingale component in the sufficient statistic (to “skim” value on both sides), or
(ii) accumulation of local time that keeps the process on the knife-edge boundary.
30

Under the posted silence windows, neither channel is available in a neighborhood of βi:
• By Lemma 1, once λ(z) = 0 on Iδ(βi) the belief process mt is locally of finite variation there, i.e. it has no jump martingale.
• By Lemma 3 (Appendix F), mt does not accrue local time at the boundary of the silence window.
Taken together, these two observations mean that the equalities that would normally justify an open region of randomization (sustained by either a belief martingale or local time at the boundary) cannot hold on any interval. Now use the curvature and isolated-trigger condition. Fix i and define the gain from intervening at the ith rung as G(z) := [V (z∗
i ) − Ki
] − V (z),
i.e. the gain from triggering the ith reset (pay Ki and jump to zi∗) rather than waiting. Value
matching at βi implies G(βi) = 0. Because the post-reset branch z 7→ V (zi∗) − Ki is constant in
z, smooth pasting at βi gives V ′(βi) = 0, so G′(βi) = −V ′(βi) = 0. The relevant nondegeneracy is therefore second order: by Assumption 3 in the main text (and its expanded version Assumption 10 in Appendix C), the indifference at βi is isolated and has nonzero curvature, i.e. V ′′(βi) ̸= 0. Equivalently, G′′(βi) = −V ′′(βi) ̸= 0. Thus there exists δ′ > 0 such that on the punctured neighborhood (βi − δ′, βi) ∪ (βi, βi + δ′), G(z) has a strict sign: either G(z) > 0 everywhere there, or G(z) < 0 ev-
erywhere there. Hence, in any sufficiently small neighborhood around βi other than the single point βi itself, one of the two actions, “reset now” or “wait,” strictly dominates the other pointwise. Therefore on any subinterval of positive measure in that neighborhood, mixing is strictly dominated by the pure best reply. This rules out mixing on sets of positive measure. The only potential residual mixing would be on knife-edge sets of Lebesgue measure zero. However, such sets are also economically-
 irrelevant here. Although the private state zt continues to diffuse (it retains its Brownian martingale), the policy resets instantaneously upon first hitting βi; hence the set {t : zt = βi} has Lebesgue measure zero. For the public belief mt, the posted silence windows and Lemma 3 imply that mt cannot accumulate local time at the window edges either. Thus mt cannot linger on any knife-edge set of positive expected time. There is no time mass on which coin-flip randomization could matter.
Therefore any region where the firm could be exactly indifferent and justify mixing must have Lebesgue measure zero and carries no economically relevant weight. With the martingale and local-time channels shut down for mt, and curvature in z ruling out an interval of indifference, the unique best reply at each trigger is pure: reset at βi. By symmetry, the same argument at β2 yields purity there as well, so the equilibrium uses pure thresholds at both triggers, with targets z1∗, z2∗ pinned by the -
standard FOCs.
Finally, posting the silence windows is weakly profitable for small clock costs. Let χ := k(λ ̄)−k(0). The expected residence time in ⋃
i Iδ(βi) per ladder cycle is O(δ) by the cycle-time bound in Appendix F, so the incremental expected clock cost is O(δ χ). The mixing loss avoided by posting the windows is first order in δ by the isolated-crossing and nondegenerate-curvature condition in Assumption 3. Near βi the gain from intervening is
G(z) = [V (z∗
i ) − Ki
] − V (z) ∼ c (z − βi)2 for some c > 0,
so in any mixed-strategy eq. the intervention hazard h(z) must diverge at rate h(z) ∝ 1/(z − βi)2 in order to keep the continuation payoff flat and maintain indifference. The instantaneous flow
31

loss from mixing is h(z) G(z), which is therefore of order one on the window, and integrating this over an O(δ) expected residence time yields an O(δ) expected loss. Thus there exist χ ̄ > 0 and
δ ̄ > 0 such that for any χ ≤ χ ̄ one can choose δ ≤ δ ̄ to make the selection gain dominate the clock cost. This yields a stationary Markov equilibrium with two pure reset blocks and no interior mixing. Identification and uniqueness on each block are inherited from Proposition 1.
Proof of Proposition 2 (adoption is a threshold rule)
This subsection both proves Proposition 2 and addresses the concern that the adoption boundary might depend on the posterior variance v as well as on the posterior mean m. The buyer’s state is two dimensional. Under Gaussian noise the public posterior is summarized by the mean mt = E[zt | FtP ] and the variance vt = Var(zt | FtP ). A priori, the optimal stopping rule could therefore be a surface
{(m, v) : m ≥ α(v)}
rather than a scalar cutoff in m only. We now make explicit the equilibrium regularity that collapses the problem locally to a one dimensional stopping problem in m alone, thereby justifying that the stopping set is {m ≥ α} with a single scalar α.
Assumption 8 (Local silence at the adoption margin). In any stationary Markov equilibrium we consider, there is a small adoption window Uα = (α − δ, α + δ) in belief space such that the firm publicly sets λt = 0 whenever mt ∈ Uα. While mt ∈ Uα there are no new publications, so (mt, vt) follows the deterministic ODE flow
m ̇ t = μ ̄(mt), v ̇t = γ ̄(mt, vt),
with no jumps. In particular, on Uα the future path of mt depends only on mt itself (and not on vt), and mt is continuous with bounded variation. Moreover, the window Uα is chosen so that the deterministic drift carries beliefs that enter it from below up to the adoption point before they can exit through the left edge: for every m ∈ (α − δ, α) the solution of m ̇ t = μ ̄(mt) with m0 = m remains in Uα and hits α in finite time before reaching α − δ.
Assumption 8 has the same content as Assumption 5 in Section 6. The main text also provides an economic rationale for this restriction: under the payoff aggregator in Assumption 6, once beliefs are close to α the firm weakly prefers to shut off disclosure in a small neighborhood, because additional publications create downside jump risk for the time-to-adoption without improving the local deterministic drift to the boundary (see the remark following Assumption 5). Technically, Assumption 8 implies-
 that, near α, continuation values depend only on m, so all buyers who are on the margin of adoption face the same continuation problem regardless of v. We now prove the proposition.
Step 1. Snell envelope and upper-set property for each fixed v. Let W be the buyer’s value before adoption (the option value of waiting), and let S be the surplus from adopting immediately. By construction, S is a function of the current belief mean m only. Let Aλ be the generator of (mt, vt) under the publicly observed intensity policy λ(·), as in (6.1). Fix any variance level v ≥ 0. Consider the discounted payoff process {e−rtS(mt)} starting from (m, v), and its Snell envelope. Standard optimal -
stopping arguments for strong Markov processes with jumps imply that e−rtW (mt, vt) is a supermartingale and that the stopping set
Γ(v) := {m : W (m, v) = S(m)}
32

is closed in m. Moreover, S(·) is weakly increasing in m, so Γ(v) is an upper set in m: if m ∈ Γ(v) and  ̃m > m, then  ̃m ∈ Γ(v). Hence, for each fixed v, there exists a (possibly v–dependent) cutoff α(v) ∈ [−∞, ∞] such that Γ(v) = {m ≥ α(v)}.
Up to this point we have not ruled out v dependence: in general we could indeed have α(v).
Step 2. Local silence collapses α(v) to a single α. Now impose Assumption 8. On the adoption window Uα = (α − δ, α + δ) we have λt = 0, so (mt, vt) evolves with deterministic drift and no jumps. Moreover, by the last sentence of Assumption 8, for every m ∈ (α − δ, α) the solution of m ̇ t = μ ̄(mt) with m0 = m stays inside Uα and hits α in finite time. Let τα(m) denote this deterministic hitting time. Consequently, for any two initial states (m, v) and (m, v ̃) with the same m ∈ Uα, the entire pat-
h
{ms : 0 ≤ s ≤ τα(m)}
is identical under the two initials, because m ̇ s = μ ̄(ms) depends only on ms. Any strategy that is optimal from m ∈ Uα either stops immediately or waits until (at most) the first time mt reaches the boundary; such strategies depend only on this deterministic path up to τα(m). Hence the discounted continuation payoff from waiting is identical across (m, v) and (m, v ̃). Since the immediate-adopt payoff S(m) also depends only on m, both the stopping payoff and the continuation payoff coincide acr-
oss all v, which forces
W (m, v) = ̂W (m) for all m ∈ Uα and all v ≥ 0,
for some one-dimensional function ̂W . Now fix any m ∈ Uα. Suppose that for some v1 we are exactly indifferent between stopping and waiting:
W (m, v1) = S(m).
By the previous argument, this implies
W (m, v) = ̂W (m) = S(m) for every v.
If it is optimal to adopt at mean m for one variance v1 inside the silence band, then it is optimal to adopt at that same m for all v in that band. This implies that, within the adoption window Uα where the stopping decision is actually made, the various α(v) must agree. There is a single number α such that for every v,
Γ(v) ∩ Uα = { m ∈ Uα : m ≥ α }. (⋆)
Set-theoretic clarification. Because each Γ(v) is an upper set in m, we also have
Γ(v) ∩ Uα = { m ∈ Uα : m ≥ α(v) }.
If some α(v) ̸= α, this intersection would differ from (⋆) on Uα, a contradiction. Hence α(v) = α for all v. This argument depends only on the geometry of the sets and not on path properties outside Uα; it continues to apply even if sample paths can jump over Uα when the clock is on. Because all Γ(v) share the same first point of entry α in Uα, the global stopping set
Γ := {(m, v) : W (m, v) = S(m)}
33

must take the one-dimensional threshold form
Γ = {(m, v) : m ≥ α}.
This is exactly the structure used in the main text.
Step 3. Characterization and fit. On the continuation region {m < α} we must have strict preference for waiting, that is W (m, v) > S(m), so dynamic programming yields the linear HJB / variational inequality
r W (m, v) = AλW (m, v) for m < α,
with W continuous and bounded on compacts. Along the boundary m = α, we have continuous fit
W (α, v) = S(α) for all v,
because Γ is closed and W is the Snell envelope. Finally, Assumption 8 implies that on Uα (and therefore at m = α) the belief mean mt is locally continuous with bounded variation and no jumps. In that case one can apply standard smooth-fit logic for one dimensional, bounded-variation stopping problems directly to ̂W (m). While mt ∈ Uα we have  ̇mt = μ ̄(mt) with no martingale part, so
r
̂W (m) = μ ̄(m) ̂W ′(m) for m < α in Uα.
The usual value-matching and supercontact argument then implies smooth fit at the boundary:
̂W ′(α) = S′(α),
which is the smooth-fit condition reported as (6.5) in the main text.
Step 4. Uniqueness. Uniqueness of the scalar cutoff α and of the value function W follows from two properties that are now explicit: (i) S(m) is strictly increasing in m, so the stopping region must be an upper set, and (ii) inside the adoption window Uα, the continuation problem is one dimensional in m, so there is a single cutoff α that works for all v. These two facts pin the unique α and the unique W solving the continuation HJB below α together with continuous and smooth fit at α.
Summary. Without local silence one would in general obtain a two dimensional stopping surface m = α(v). Assumption 8 (which is imposed in equilibrium) makes the marginal adoption problem locally one dimensional in m and implies that all α(v) coincide. This yields a scalar belief-mean threshold α, that is Γ = {(m, v) : m ≥ α},
and delivers the boundary conditions in Proposition 2.
B Verification Blocks and Boundary Conditions
This appendix collects the boundary-value “blocks” used throughout the paper. Full proofs and the full verification argument appear in Section 5. Throughout, the privately observed technical/reputational state zt evolves as a diffusion with generator
(Lf )(z) = μθ(z)f ′(z) + 1
2 φ2(z)f ′′(z),
and the instantaneous net flow on inaction is π(z) (or π(z, m) when adoption feedback matters) minus k(λ(z)).
34

Inaction block. On any inaction interval (a, b) for z, the firm’s value V solves the stationary HJB
r V (z) = π(z) + (LV )(z) − k(λ(z)), z ∈ (a, b). (B.1)
Here λ(·) is the posted publication-frequency policy from Section 3.
Single reset (trigger → target). Suppose that when z first hits β from within (a, b) the firm pays a fixed cost K and instantaneously resets z to a target z∗ ∈ (a, b), after which diffusion resumes. The standard impulse conditions at the trigger are
V (β−) = V (z∗) − K, (B.2)
V ′(β−) = V ′(z∗). (B.3)
Here β− denotes the limit from inside (a, b). The first line is value matching: just before paying K at β, the firm is indifferent to jumping to z∗ net of cost. The second line imposes “high contact” / no kink in V : the marginal value of nudging z just before the reset must equal the marginal value at the target z∗. In the canonical optimal-impulse formulation where z∗ is itself chosen optimally, target optimality also delivers V ′(z∗) = 0, so together with V ′(β−) = V ′(z∗) this collapses to the-
 familiar smooth-pasting pair V ′(β−) = 0 = V ′(z∗). In the two-reset ladder of Section 5, these become the familiar building blocks: (i) smooth pasting at each trigger, V ′(βi) = 0; (ii) target optimality, V ′(zi∗) = 0; together with value matching
V (βi) = V (zi∗) − Ki. Those are exactly the conditions (5.4)–(5.9) in the main text.
Adoption boundary. We use two nearby boundary blocks depending on how adoption is modeled.
Case (i): adoption is absorbing and post-adoption flow is z-independent. In the benchmark where, once the market adopts, the firm receives a perpetual flow v that no longer depends on z, adoption is triggered when the public belief mt crosses a cutoff α, but the continuation value after adoption is the same for every realization of z. In particular, immediately after adoption the value is v/r for all z. Because the post-adoption payoff is z-independent, we do not need to track the exact z at the a-
doption instant; it is without loss to treat adoption as an absorbing boundary in z-space at a belief-linked representative point z = α. The natural boundary conditions in this benchmark are
V (α) = v
r , V ′(α) = 0. (B.4)
The first line is value matching into the absorbing branch. The second line is smooth pasting / high contact: once adopted, marginally nudging z has no incremental value, so V ′(α) = 0. The ODE (B.1) on (a, α) plus (B.4) pins down the two integration constants for V on that interval. This is a convenient closed-form benchmark; it is not the general boundary block when post-adoption payoffs remain z-dependent.
Case (ii): adoption is endogenous and payoffs continue to depend on z. Section 6 endogenizes adoption: a downstream buyer/platform adopts when the public belief mt about zt crosses a unique cutoff α, determined by buyer smooth fit (Proposition 2). Two features matter for the firm’s boundary system:
• After adoption, the flow payoff can jump to a new regime πpost(z, m) that still depends on z, so the post-adoption continuation value V post(z) need not be constant in z.10
10In Section 6 we allow π(z, m) = π0(z) + η Λ(π(m; α)), so once m crosses α the flow permanently steps up via the Λ(·) term, but the firm still manages z going forward.
35

• Adoption itself does not reset z: the private state zt diffuses continuously through the instant mt hits α.
These two facts imply that the correct interface condition at adoption is continuity of both level and slope in z across the regime switch. Let V pre(z) be the firm’s value just before adoption (when m < α) and V post(z) be the value just after adoption (when m ≥ α). At the instant beliefs hit α we require V pre(z) = V post(z) for all relevant z, (B.5)
and d
dz V pre(z) = d
dz V post(z) for those same z. (B.6)
Equation (B.5) is value matching across the revenue regime switch. Equation (B.6) is slope matching / no kink in z: since z itself does not jump at adoption, the marginal value V ′(z) cannot jump either. Together, (B.5)–(B.6) replace (B.4) when adoption is endogenous and post-adoption payoffs continue to depend on z. They deliver the two boundary conditions needed to close (B.1) on each side of the adoption surface. Note that the buyer smooth-fit condition in Proposition 2,
μ ̄(α) S′(α) = r S(α),
pins where in public-belief space the regime switch occurs (which α is actually used), but it is not itself a boundary condition for V (z). The firm’s boundary conditions are (B.5)–(B.6).
Two-reset ladder. In the main text, the firm has two impulse actions (patch and pivot), with fixed costs K1 < K2, post-impulse targets z1∗ < z2∗, and triggers β1 < β2. The inaction band is [β1, β2], and zt is instantaneously reset back into that band whenever it hits either boundary. The full ladder is pinned by: • the interior ODE (B.1) on (β1, β2),
• the boundary system (5.4)–(5.9) from Section 5 (value matching at βi, high contact V ′(βi) = 0, and target optimality V ′(zi∗) = 0),
• and standard bounded-growth conditions. Under the no-local-time lemma (Appendix F) and Assumption 3, this system uniquely determines (β1, β2; z1∗, z2∗; V ); see Proposition 1 and Theorem 2.
Constant-coefficient closed form. For calibration and intuition, consider the special case in
which μθ(z) ≡ μ, φ(z) ≡ σ, π(z) ≡ π ̄ on (a, b), and λ(z) ≡  ̄λ there. Then (B.1) has the standard exponential solution
V (z) = A eγ+z + B eγ−z + π ̄ − k(λ ̄)
r , γ± = −μ ± √μ2 + 2rσ2
σ2 ,
with (A, B) pinned by the relevant boundary block: the reset conditions above (single-impulse), or the ladder system (5.4)–(5.9), plus any adoption boundary conditions.
36

‘Skew’ blocks (not active under silence). Without posted local silence, the public-belief process can accumulate local time at interior points, and the associated value function V can develop kinks: one-sided derivatives V−′ and V+′ at an interior zˆ must satisfy a “kink balance” (skew) condition. Under the Cox-clock microfoundation in Section 3, the firm can post observable windows with λt = 0 near each trigger. Lemma 3 shows that inside those windows the martingale part of public beliefs shuts -
off and no local time is accumulated at the band endpoints. In equilibrium under local silence, the kink/skew equalities are therefore inoperative: the ladder is characterized by smooth pasting and target optimality, not by interior mixing or slope discontinuities.
C Microfoundations and Selection: Proofs
This appendix provides the main proofs used in Sections 3 and 5. Throughout we maintain the regularity assumptions stated there, and the publication policy λ(·) is publicly known (either because the rule is credibly committed to ex ante or because the realized intensity is observable in real time). The public filtration FtP is generated by disclosure times and signals, and when we refer to
the compensator of the Cox process we implicitly work with the smallest enlargement of FtP that
makes it predictable, so that in particular the realized intensity process λt = λ(zt) is FtP –predictable
(and hence FtP –measurable for each t). Any incremental information that could be extracted from observing the realized intensity on a vanishing silence window will turn out to be of order δ and is therefore ignored in the small-window limit discussed below.
C.1 Setup and notation
Let (Ω, F, {Ft}, P) carry a Brownian motion W driving the privately observed state zt,
dzt = μθ(zt) dt + φ(zt) dWt,
and a Cox process Nt with predictable intensity λt = λ(zt) delivering publication times
Tn = inf{t : Nt ≥ n}.
At time Tn the public observes a noisy signal
yn = zTn + εn, εn ∼ N (0, σ2
ε ) i.i.d., independent of (W, N ).
Let FtP = σ({(Tk, yk) : Tk ≤ t}) be the public filtration. Under Gaussian noise and Assumption 1 in Section 2 (common drift and diffusion across types), the public posterior for zt is summarized by its conditional mean and variance,
mt := E[zt | F P
t ], vt := Var(zt | F P
t ).
Under the linear–Gaussian (finite-dimensional Kalman filter) benchmark used in the main text, with Gaussian noise and Assumption 1 in Section 2 (common drift and diffusion across types), the public posterior for zt is summarized by its conditional mean and variance,
mt := E[zt | F P
t ], vt := Var(zt | F P
t ).
In this benchmark the pair (mt, vt) is a piecewise-deterministic Markov process (PDMP): between publications, (m ̇ t, v ̇t) = (μ ̄(mt), γ ̄(mt, vt));
at each disclosure time Tn, Bayesian updating (Kalman filtering) maps (mTn−, vTn−, yn) to (mTn, vTn).
Two features are all we will use:
37

(a) Between disclosures, mt has finite variation and follows a deterministic ODE m ̇ t = μ ̄(mt) with no Brownian martingale part.
(b) All randomness in mt comes from publication jumps; the quadratic variation of its martingale part is proportional to the Cox intensity λt.
C.2 Equivalence: local silence kills the public-belief martingale
We now formalize the “local silence” device used to suppress belief volatility around a trigger.
Assumption 9 (Local silence policy). Fix zˆ ∈ R and δ > 0. Define a stationary publication policy
λδ(z) =



0, |z − zˆ| ≤ δ,
λ ̄, |z − zˆ| > δ,
k(0) = 0, 0 < λ ̄ < ∞,
and suppose the policy z 7→ λδ(z) is publicly known, so that the associated compensator of N is predictable with respect to the public filtration.
Let Aλδ denote the generator of mt under λδ, acting on C1
b test functions f :
(Aλδ f )(m) = μ ̄(m) f ′(m) + Λδ(m) E[f (U (m, ε)) − f (m)], (C.1)
where Λδ(m) := E[λδ(zt) | mt = m] is the publicly inferred jump intensity induced by λδ, ε ∼ N (0, σε2), and U is the Bayesian update map for the posterior mean after observing y = z + ε.
Lemma 1 (Equivalence: Cox clock implies variance suppression). Under Assumption 9, the public posterior mean mt admits the Doob–Meyer decomposition
mt = m0 + At + Mt,
where A has finite variation and M is a purely discontinuous local martingale with quadratic variation
⟨M ⟩t =
∫t
0
Λδ(ms) Ξ(ms, vs) ds
for some bounded predictable process Ξ. Moreover, whenever |zs − zˆ| ≤ δ we have λδ(zs) = 0 pathwise by construction, hence
Λδ(ms) = E[λδ(zs) | F P
s ] = 0 on that set.
Therefore M has no jumps (and hence no quadratic variation) whenever |zs − zˆ| ≤ δ. Consequently, for any bounded stopping time τ that does not hit a reset and any f ∈ C1
b,
E
[
f (mt∧τ ) − f (m0) −
∫ t∧τ
0
(Aλδ f )(ms) ds
]
= 0,
and the martingale part vanishes whenever |zs − zˆ| ≤ δ.
Proof. Standard Dynkin/Itô arguments for PDMPs with predictable jump intensity yield the stated Doob–Meyer decomposition: A collects the finite-variation drift and M is the compensated jump martingale associated with the Cox jump times. Under Gaussian noise the Kalman gain is bounded, which implies Ξ is bounded and predictable.
38

The only subtlety is showing Λδ(ms) = 0 on {|zs − zˆ| ≤ δ}. By Assumption 9, λδ(zs) = 0 pathwise whenever |zs − zˆ| ≤ δ. Moreover, λδ(zs) is FsP –measurable under our standing convention that the realized intensity process is predictable with respect to the public filtration, so
Λδ(ms) = E[λδ(zs) | F P
s ] = λδ(zs) = 0 on {|zs − zˆ| ≤ δ}.
Thus the compensator of the jump part is zero on that set, and M accumulates neither jumps nor quadratic variation there. The expectation identity is just Dynkin’s formula applied to (C.1) up to t ∧ τ , combined with optional sampling for M .
Lemma 1 formalizes the “variance-suppression” reduced form: on a posted local silence window the martingale part of mt is literally switched off; mt has finite variation there and follows its deterministic drift.
Remark 6 (On Λδ and the information content of λt). The quantity
Λδ(ms) = E[λδ(zs) | F P
s]
is defined relative to the public filtration FsP = σ{(Tk, yk) : Tk ≤ s} generated by disclosure times and signals. For the variance-suppression result in Lemma 1, we only use the pathwise property that λδ(zs) = 0 whenever |zs − zˆ| ≤ δ, which implies Λδ(ms) = 0 on that set, regardless of whether the realized intensity path (λt) is itself directly observed. If one does enlarge the public filtration to include the realized intensity, then under the posted rule λδ(z) = 0 on |z − zˆ| ≤ δ the event {λs-
 = 0} becomes a coarse signal that the private state lies in the silence window. The exact filter would then add a small correction term to the between-jump evolution of mt to account for this extra signal. Because the window has length 2δ and the primitives are smooth, the probability mass of {|zs − zˆ| ≤ δ}, and hence the induced correction to the drift of mt, are of order O(δ). In the small-window limit δ ↓ 0 used in Section 3 and Corollary 1, these terms vanish. For this reason, throughout the-
 appendix we work with the reduced form in which, between disclosures, mt follows the deterministic ODE m ̇ t = μ ̄(mt) and the martingale part of mt is suppressed on the silence window in the limit. This approximation is consistent with the full filtering problem up to an O(δ) error that disappears as the window radius shrinks to zero.
Corollary 1 (Viscosity stability of the reduced form). Let V δ solve the stationary impulse-control QVI with running payoff π(z) − k(λδ(z)). Suppose a comparison principle holds for the δ ↓ 0 limit, and suppose the no-local-time lemma in Appendix F applies (so that trajectories do not accumulate at the boundaries under local silence). Then V δ → V 0 locally uniformly as δ ↓ 0, and V 0 is the unique viscosity solution of the reduced-form QVI in which the public-belief martingale is suppressed on th-
e vanishing silence window.
Proof. As δ ↓ 0, k(λδ) → k(0) = 0 on the silence window while the inaction HJB elsewhere is unchanged. The associated Hamiltonians converge locally uniformly. Stability of viscosity solutions under locally uniform Hamiltonian convergence, combined with comparison, implies V δ → V 0 locally uniformly and pins down V 0 uniquely. The no-local-time lemma from Appendix F ensures that boundary behavior in the dynamic programming principle is well posed in the limit.
C.3 Selection: local silence eliminates mixing
We now formalize the selection logic in Section 3. By posting silence windows around each trigger, the firm removes public-belief randomness in a neighborhood of the intervention boundaries. This collapses any open region of mixed strategies to a null set.
39

Assumption 10 (Regularity for selection and nondegenerate curvature). Consider a candidate two-reset ladder with inaction band [β1, β2], targets (z1∗, z2∗), and fixed costs (K1, K2). Assume:
(i) V ∈ C2(β1, β2).
(ii) At each trigger βi (i = 1, 2), the function z 7→ V (zi∗) − Ki is locally indifferent to V (z) only at z = βi, and that indifference is nondegenerate:
(a) high contact holds: V ′(βi) = 0, so the derivative of V (z) matches the (constant) reset branch V (zi∗) − Ki at βi;
(b) V ′′(βi) ̸= 0, so βi is an isolated solution to V (z) = V (zi∗) − Ki in a neighborhood of βi.
Equivalently: the unique knife-edge point of indifference is βi, and it exhibits nonzero curvature (no flat tangency).
(iii) (No stickiness at the boundary.) Under the posted silence windows, the no-local-time lemma in Appendix F implies that the public-belief process mt accrues no local time at either βi. For the private state zt, the equilibrium impulse control is applied at the first hitting time of βi and induces an instantaneous jump to zi∗. Hence the set {t : zt = βi} has Lebesgue measure zero almost surely, and zt accrues no local time at βi either. In particular, neither state can linger (“stick”) at the k-
nife-edge boundary.
Assumption 10 is the appendix analogue of Assumption 3 in the main text. Item (ii) emphasizes that “transversality” here is second-order: slopes match by high contact, so the relevant nondegeneracy is curvature. V ′′(βi) ̸= 0 rules out an interval of indifference.
Proposition 4 (Silence selects pure resets). Fix ε > 0 and post λ = 0 on [βi − ε, βi + ε] for i = 1, 2,
with λ = λ ̄ elsewhere. Under Assumption 10, any stationary Markov equilibrium with this policy is pure: the firm resets exactly at β1 to z1∗ and at β2 to z2∗ almost surely. In particular, there is no equilibrium in which the firm mixes between intervening and waiting on a set of positive Lebesgue measure near either trigger.
Proof. Work near β1; the argument for β2 is symmetric.
Step 1 (curvature kills positive-measure mixing). Define
G(z) := [V (z∗
1) − K1
] − V (z).
Value matching at β1 implies G(β1) = 0. The intervention branch z 7→ V (z1∗) − K1 is constant in z,
and high contact at β1 gives V ′(β1) = 0, so G′(β1) = −(V ′(β1)) = 0. The relevant nondegeneracy is therefore second order: Assumption 10(ii)(b) says V ′′(β1) ̸= 0, hence
G′′(β1) = −V ′′(β1) ̸= 0.
Thus β1 is an isolated zero of G, and G takes a strict sign (either strictly positive or strictly negative) on each side of β1 in some punctured neighborhood of β1. Equivalently, there is no open interval around β1 on which G(z) = 0 or on which G flips sign infinitely often. On any such neighborhood (except the single point {β1} itself), either intervening strictly dominates waiting or waiting strictly dominates intervening. Suppose, for contradiction, that a stationary Markov strategy mixes betwe-
en “intervene” (reset to z1∗ at cost K1) and “wait” on some interval I ⊂ (β1 − ε, β1 + ε) with strictly positive Lebesgue measure. On any nontrivial subinterval of I contained in the punctured neighborhood where G has a strict sign, one action strictly dominates. A strategy that assigns positive probability to the
40

dominated action on a set of positive measure is strictly dominated by a pure strategy. Hence any mixing set must have Lebesgue measure zero. Up to this point the argument has not used silence: it relies only on curvature and isolated crossing.
Step 2 (local silence kills knife-edge, measure-zero mixing). What remains, in principle, is a degenerate randomization on a measure-zero set, e.g., having the firm “sit” exactly at β1 and flip a coin. In many continuous-time disclosure models, mixed equilibria are supported by such knife-edge constructions via local time: the sufficient statistic can accumulate positive expected residence time at an indifference point. Local silence rules that out for the public belief. By Lemma 1, when λ = 0 on -
[β1 − ε, β1 + ε] the public-belief process mt has no jump martingale in that band: on that set mt is of finite variation and fully predictable. The no-local-time lemma in Appendix F then implies mt accrues no local time at β1. For the private state zt, the lack of stickiness at β1 does not come from silence. It follows from the impulse control itself: by construction, the reset is applied at the first hitting time of β1 and the state jumps instantaneously to z1∗. Thus the set
{t : zt = β1}
has Lebesgue measure zero almost surely, and zt accrues no local time at β1 either. In particular, neither mt nor zt can linger (“stick”) at the knife-edge point. The remaining issue is whether a knife-edge mixed strategy could be supported on some more complicated null set inside the band. Here we use only standard regularity of one-dimensional diffusions: conditional on not yet hitting β1, the process spends zero (and hence zero expected) Lebesgue time in any Borel subset of (β1 − ε, β1 + ε) wit-
h Lebesgue measure zero. The same property holds for any measurable sufficient statistic driven by zt and used in the firm’s rule. Combined with the absence of local time at β1 itself (so there is no sticky boundary at the indifference point), this implies that the state and the sufficient statistic never spend positive expected time on any Lebesgue-null subset of (β1 − ε, β1 + ε) before the reset is applied. Any residual knife-edge randomization supported on such a null set is therefore irrelevan-
t: it does not occur with positive probability along the equilibrium path. Combining Steps 1 and 2: (i) curvature rules out mixing on any set of positive measure; (ii) the silence window plus the no-local-time lemma kills the “sticky knife-edge” construction that could otherwise support mixing on a measure-zero set. The only admissible best reply is pure: reset at β1. Repeating the same argument at β2 yields pure pivot behavior there, with target z2∗ at β2. This eliminates any stationary Markov eq-
uilibrium with interior mixing near either trigger.
Corollary 2 (Two-reset ladder). Under the hypotheses above, the unique stationary Markov equilibrium selected by local silence is a two-reset S–s ladder with triggers (β1, β2) and targets (z1∗, z2∗), as characterized and verified in Section 5.
C.4 Robustness
Small deviations from silence. If λ is small but strictly positive near a trigger, the generator of mt acquires a jump term of order O(λ) instead of 0. The curvature argument in Step 1 of the proof of Proposition 4 is unchanged: on any nontrivial interval near βi, one action strictly dominates, so mixing on a set of positive measure is still strictly dominated. The no-local-time lemma then applies approximately: even with small λ > 0, the residual jump martingale is O(λ), so the process cannot sus-
tain positive expected residence time on a knife-edge point without paying a first-order mixing loss. Trigger locations and the no-mixing conclusion are therefore stable to O(λ) perturbations.
41

Alternative intensity observability. Our baseline treatment only requires that the policy z 7→ λ(z) be publicly known so that the compensator of N is predictable. Whether the realized intensity path (λt) itself is observed in real time or not only affects the filter through small corrections. If (λt) is observable, then, as noted in Remark 6, the event {λt = 0} on a posted silence window provides a coarse signal that zt lies in that band; the resulting correction to the drift of mt is of order δ -
and vanishes in the small-window limit. If (λt) is not observable, one can instead extend the state to include beliefs over λ(·) and impose consistency. In either case, the selection logic goes through provided the induced public-belief martingale still vanishes (or is negligible) in a neighborhod of the boundary under the equilibrium policy, so that the process cannot linger with positive expected local time at an indifference point. We do not need the full extended filter for the main results.
Relation to classic S–s. The ladder is the two-trigger analogue of S–s policies in irreversible investment with fixed adjustment costs (Dixit and Pindyck, 1994; Bertola and Caballero, 1994; Abel and Eberly, 1996). Here, posting local silence plays the role of an equilibrium selection device in a dynamic disclosure environment. Curvature at each trigger ensures that away from the exact trigger one action strictly dominates. The silence window removes the martingale part of public beliefs and, via t-
he no-local-time lemma for mt, prevents the belief from “sticking” on the knife-edge; the controlled zt cannot stick because it jumps instantly upon hitting the trigger. The combination enforces high contact at the triggers and eliminates knife-edge interior mixing, consistent with the dynamic disclosure logic in Guttman et al. (2014) and Orlov et al. (2020).
D Financing Mapping and Levered Problem
This appendix does three things. First, it gives the verification argument for the levered equity and debt values. Second, it spells out the takeover-envelope logic. Third, it decomposes the loss from leverage into (i) a pre-default agency wedge and (ii) a takeover irreversibility wedge, and shows exactly when the former vanishes. This decomposition underlies the bound in Proposition 3 in Section 7. Primitives and regularity assumptions are as in Sections 5 and 3. Throughout, AFB(z, m) denotes the-
 first-best (all-equity) value function: the maximal present value of cash flows π(z, m) generated by a single residual claimant that chooses impulses, disclosure / publication intensity, etc., but faces no debt, no default option, and no senior claimant.11
D.1 Equity and debt under leverage: verification
Let S(z, m) be the stationary Markov equity value under leverage, and let Y (z, m) be the market value of outstanding debt. Equity is residual and can: (i) run the process in continuous time, (ii) trigger a patch or pivot (the two costly resets), and (iii) choose default, after which equity walks away with 0 and debtholders (or a buyer of the distressed asset) take over. Let λ(·) denote the publication policy, and write L for the (joint) inaction-region generator of
11Formally, AFB solves the standard impulse-control QVI without coupons cd and without the limited-liability / default term −S that appears in the levered problem. See Section 5.
42

the state (zt, mt).12 As in Section 5, define the impulse operator
(MS)(z, m) := max{ S(z∗
1, m) − K1, S(z∗
2, m) − K2 },
where (β1, β2; z1∗, z2∗) are the trigger/target pairs for the patch and pivot rungs. Limited liability and seniority add a third control: default. The equity QVI is
max
{
rS − LS − (π(z, m) − cd
) + k(λ(z)), S − MS, − S
}
= 0. (D.1)
Default is optimal on the stopping set {(z, m) : S(z, m) = 0}. On any solvency / inaction block with β1 < z < β2 and S(z, m) > 0, equity either continues or impulses. There, S satisfies
rS(z, m) = π(z, m) − cd + LS(z, m) − k(λ(z)), β1 < z < β2, (D.2)
together with: • value matching and high contact at each trigger βi,
• target optimality S′z(zi∗, m) = 0 at each target zi∗, and
• the default boundary condition S = 0 on {S ≤ 0}. At a reset from βi to zi∗, we have
S(βi, m) = S(z∗
i , m) − Ki and S′
z(βi, m) = 0,
with the same boundary equalities as in the unlevered verification (applied here to the equity value S, not to the first-best AFB). The HJBs differ and therefore the optimal thresholds generally differ. All of this is augmented by the solvency region {S > 0} determined endogenously by (D.1).
Debt. Debtholders receive the coupon cd until the (equity-chosen) default time T ∗, at which point they seize the firm (or sell it). Their continuation value Y (z, m) solves a linear stopping / control problem that takes equity’s strategy, including its impulses and default boundary, as given. On the solvent set {S > 0},
rY (z, m) = cd + LY (z, m), for β1 < z < β2 with S(z, m) > 0, (D.3)
and at default, i.e. on the boundary where S(z, m) = 0,
Y (z, m) = Y TO(z, m), whenever S(z, m) = 0. (D.4)
Since the fixed cost Ki is paid entirely by shareholders and does not reduce the collateral available to debtholders, and the reset moves the state to (zi∗, m) inside the same solvent region (debt is senior), Y does not jump down when equity triggers a patch or pivot. At each equity reset, debtholders simply inherit the post-reset continuation value Y (zi∗, m).
12Formally, L is the full controlled generator of the (zt, mt) process in the environment of Section 3. For any smooth test function f (z, m), the term (Lf )(z, m) collects (i) the drift and diffusion terms in the private state z, (ii) the deterministic drift of the public belief m, and (iii) whenever λ(z) > 0, the disclosure-induced jump term. In particular, on any inaction block the term LS(z, m) in (D.1)–(D.2) already contains the contribution from the m-dynamics (the ∂mS term and the disclosur-
e-jump expectation), so we do not display these components separately. Moreover, L need not be linear in the controls.
43

Total levered value. Fix an initial state (zt, mt) and let T ∗ be the (endogenous) default time induced by the equity policy solving (D.1). Standard verification / Feynman–Kac arguments applied to (D.2)–(D.4) give the present-value representation
St + Yt = Et
[
∫ T∗
t
e−r(s−t) π(zs, ms) ds + e−r(T ∗−t) Y TO(zT ∗ , mT ∗ )
]
. (D.5)
Here Y TO(z, m) is the value captured at takeover by debtholders (or a buyer of the distressed asset), given the takeover technology described below.
D.2 Takeover envelope, the pre-default agency wedge, and the levered bound
We now connect (D.5) to the first-best benchmark AFB and to the irreversibility parameters (φ1, φ2) from Section 7. This is where we make the pre-default wedge completely explicit.
Takeover map and tightness. At default T ∗, control passes to debtholders (or to an acquirer of the distressed asset). We model post-default restructuring by a tight takeover switching-cost map (Definition 2): the acquirer can pay at most φ1 to implement the low-cost “patch” upgrade or at most φ2 to implement the high-cost “pivot” upgrade, thereby aligning the asset with the first-best continuation going forward. Let
φmax := max{φ1, φ2}.
Lemma 2 (Takeover envelope). Under a tight takeover map, for any default state (z, m),
Y TO(z, m) ≥ AFB(z, m) − φmax. (D.6)
Proof. By tightness, at takeover the acquirer can spend at most φmax to reset the inherited (z, m) to whatever post-default state the first-best planner would choose (with zero cost if that continuation does not call for an immediate reset), and then follow that first-best continuation forever. Because AFB is the value of that continuation, this yields (D.6).
Comparison. Inequality (D.6) implies the standard upper bound on the agency wedge, in the spirit of Manso (2008), Prop. 1: with a tight takeover map, the loss relative to first-best at the default date is bounded by the present value of the least switching cost.
A supermartingale and the pre-default agency wedge. Fix the (possibly distorted) equity policy that actually generates (S, Y ) and T ∗. Define
Ms := e−r(s−t)AFB(zs, ms) +
∫s
t
e−r(u−t)π(zu, mu) du, s ≥ t. (D.7)
Interpretation: Ms is the first-best continuation value, evaluated along the equity-chosen path up to time s. We drip in the realized flow π and attach the first-best continuation AFB at the current state. Because AFB solves the first-best QVI from Section 5 and is pointwise the supremum over admissible impulse / publication policies without debt, standard verification implies
Ms is a supermartingale under any admissible policy. (D.8)
Equivalently, for any stopping time τ (in particular τ = T ∗),
AFB
t ≥ Et
[∫ τ
t
e−r(s−t)π(zs, ms) ds + e−r(τ−t)AFB(zτ , mτ )
]
. (D.9)
44

As interpretation, a social planner with no debt can always imitate the levered firm’s policy up to τ , then switch to first best at τ . So the levered policy can never beat AFB. Inequality in (D.9) is weak because the levered policy may deviate from first best before τ . If equity actually follows first best up to τ , then (D.9) binds at τ . We now define the pre-default agency wedge as that slack:
At := AFB
t − Et
[
∫ T∗
t
e−r(s−t)π(zs, ms) ds + e−r(T ∗−t)AFB(zT ∗ , mT ∗ )
]
. (D.10)
By (D.9) with τ = T ∗ we have At ≥ 0. (D.11)
From an economic standpoint, At is the ex ante loss (from the first-best planner’s point of view) generated by the levered firm’s pre-default behavior: distorted reset timing, distorted disclosure tempo, strategically acelerated default, and so on. If the levered firm happens to follow the first-best policy all the way up to T ∗ (for example, along the “safe patch block” of Section 7, where default is off path and φ1 = 0 makes the patch rung debt-neutral), then At = 0.
Putting it together. Start from (D.5) and apply Lemma 2 at T ∗:
St + Yt = Et
[
∫ T∗
t
e−r(s−t)π(zs, ms) ds + e−r(T ∗−t) Y TO(zT ∗ , mT ∗ )
]
(D.12)
≥ Et
[
∫ T∗
t
e−r(s−t)π(zs, ms) ds + e−r(T ∗−t)(AFB(zT ∗ , mT ∗ ) − φmax
)
]
(D.13)
= Et
[
∫ T∗
t
e−r(s−t)π(zs, ms) ds + e−r(T ∗−t)AFB(zT ∗ , mT ∗ )
]
− Et
[
e−r(T ∗−t)φmax
]
. (D.14)
Now rearrange (D.14) using the definition of At in (D.10):
St + Yt ≥ AFB
t − At − Et
[
e−r(T ∗−t)φmax
]
. (D.15)
Equivalently,
AFB
t − (St + Yt) ≤ At + Et
[
e−r(T ∗−t)φmax
]
. (D.16)
Interpretation of (D.16). The wedge between the all-equity first best and the levered (equity+debt) value splits into two nonnegative pieces: (i) Pre-default agency wedge At: all distortions before default (delayed patches, distorted disclosure tempo, inefficiently accelerated default, . . . ). By (D.11), At ≥ 0. If equity’s actual policy coincides with the first-best policy up to T ∗, then At = 0.
(ii) Least-irreversibility wedge at takeover: even if the pre-default path is efficient, the acquirer who takes over at T ∗ may still need to spend up to φmax to “rewind” the asset into the first-best continuation. The discounted expectation of that cost is the second term in (D.16).
Connection to Proposition 3. Equation (D.16) is the general statement. Now impose the (sufficient) condition emphasized in Section 7: on the “safe patch block,” where (a) φ1 = 0, so the patch rung is fully reversible at takeover;
45

(b) default is off path because the solvency region lies strictly above the default frontier; and
(c) equity’s patch timing (trigger and target) coincides with the first-best patch policy, we have: • T ∗ = ∞ on that history (no default while staying on the patch block), so Et[e−r(T ∗−t)φmax] = 0;
• At = 0, because equity’s pre-default policy is the first-best patch policy on that block.
Then (D.16) collapses to
AFB
t = St + Yt on that history.
More generally, whenever equity follows the first-best policy up to T ∗ (so At = 0), (D.16) reduces to
AFB
t − (St + Yt) ≤ Et
[
e−r(T ∗−t)φmax
]
, (D.17)
which is the inequality reported as (7.2) in Section 7 and used in Proposition 3. Equation (D.16) simply makes explicit that, off those debt-neutral regions, an additional pre-default agency wedge At can appear.
D.3 Constant-coefficient illustration
Suppose μθ(z) ≡ μ, φ(z) ≡ σ > 0, and π(z, m) = π0(z) + η Λ(π(m; α)) as in (6.6), and the solvent inaction band is (β1, β2). Then (D.2) and (D.3) admit exponential-form solutions on (β1, β2) exactly as in the unlevered benchmark; only the boundary conditions and the coupon differ. Boundary conditions: • value matching and high contact for each costly reset (patch / pivot),
• S = 0 on the endogenous default frontier,
• Y = Y TO at that default frontier,
• continuity of Y across equity’s impulses (seniority). Comparative statics line up with Section 7: the pivot trigger moves outward in K2 and φ2, and inward in the coupon burden cd; the “safe patch block” is unchanged if φ1 = 0 and default stays off path. On that block, Y is essentially a riskless perpetuity cd/r, At = 0, and the wedge in (D.16) is governed entirely by φmax, which is 0 when φ1 = 0 and no pivot is ever needed before any default event.
D.4 Tightness and examples
The decomposition (D.16) is tight. To see this, construct a case in which: (i) the first-best policy would carry out a pivot strictly before the state ever hits a solvency / default frontier;
(ii) under leverage, equity instead accelerates default just before paying that expensive pivot, because of the coupon burden cd;
(iii) at takeover, the acquirer immediately pays φ2 to execute that pivot, then follows first-best continuation forever. Along such a path: • pre-default behavior up to T ∗ mimics the first-best policy except for the early default itself, so At can be made abitrarily small; and
46

• T ∗ arrives right before the high-cost pivot, so e−r(T ∗−t)φmax essentially is the wedge. In the limit, (D.16) binds with φmax = φ2, giving
AFB
t − (St + Yt) = Et
[
e−r(T ∗−t)φ2
]
.
Takeaway. Equation (D.16) separates two distinct channels through which leverage can destroy total surplus relative to the first best: (a) a pre-default agency wedge At that reflects distorted disclosure tempo, distorted intervention timing, or strategically accelerated default; and
(b) a least-irreversibility wedge at takeover, governed by φmax.
On the “safe patch block” in Section 7 (low-cost, fully reversible maintenance moves, φ1 = 0, and default off path), part (a) vanishes and part (b) collapses to zero. There, leverage is literally surplus-neutral on that block: AtFB = St + Yt.
E Data, Variables, and Robustness
This appendix documents (i) the telemetry to be assembled, (ii) the construction of the key variables used in Section 8, and (iii) the provenance, auditing, identification, and robustness plan. It is a self-contained measurement blueprint (to be moved to an online appendix/ potentially re-used in a separate paper on empirical implementation).
E.1 Panel structure and timing
The primary panel is firm i by calendar month t. Where product-line or model-line disclosures are separable, the unit refines to product/module p and the panel is (i, p, t). Event time τ is constructed around focal disclosure/release events. Unless stated otherwise, designs take these (i, t) or (i, p, t) panels as the estimating sample and convert calendar time t to relative event time τ around a “major reset” (defined below).
E.2 Core variables
(a) Publication intensity λˆit (or ˆλipt).
Monthly count of firm-published technical/safety signals by i in month t. Signals include evaluation cards, benchmark updates, safety mitigation notes, incident/advisory notes, release
notes, and changelog entries written by the firm.13 An event-time analogue λˆiτ (or λˆipτ ) is centered on each major reset and serves as the dependent variable in the event-study design (8.2).
(b) Content dispersion ̂Varx
it.
Within-month cross-signal dispersion of standardized performance/safety metrics disclosed by firm i in month t, harmonized across metric families. For each signal s, parse a numeric value xs and a benchmark family Fs; z-score using pooled family means x ̄F and s.d.s σF across all firms/months:
zs := xs − x ̄Fs
σFs
,
̂Varx
it := Var({zs : s disclosed by i in month t}),
13Analyst commentary, press coverage, leaked benchmarks, and social-media rumor are excluded; the theory pertains to the firm’s own disclosure tempo, i.e. control of λt.
47

with the convention in (8.1) when Nit ∈ {0, 1}.
Mapping to theory. Outside observers see noisy draws yn = zTn +εn from a one-dimensional latent state zt arriving on a controlled Cox clock λt. After standardization, each signal-level zs is one
such draw, and ̂Varx
it is the within-month variance of those draws. Under the coding convention in (8.1), when the publication clock is nearly shut off and Nit ∈ {0, 1} the dispersion proxy is mechanically set to 0 or missing, so the predicted “dispersion dip” is a direct consequence of the intensity dip, not an additional assumption about lower intrinsic noise. The model therefore predicts a dip in both intensity and (measured) dispersion in the pre-reset quiet window (posted silence with λt → 0), which (8.1) and (8-
.3) target. Pooled normalization preserves the moment; within-firm-month rescaling would mechanically erase the collapse.
Cadence-only robustness. Let ̂Vartime
it be the intra-month interquartile range of timestamps for i
in month t, and ̂Vartime
iτ the event-time analogue. This proxies cadence tightening independent of metric content and is used as a robustness outcome for S1.
(c) Release classification.
Each firm-authored disclosure is tagged patch, pivot, release, or other using rule-based filters plus a light classifier; ambiguous high-salience items are hand-adjudicated. Precedence on the same timestamp: pivot/release > patch. In estimation, pivot∪release is pooled as a “major reset.”
(d) Patch cascades and hazards.
For each major reset at τ = 0, record the ordered sequence of subsequent patches k = 1, 2, . . . for the same firm (or firm-product). Compute inter-event durations ∆ik and estimate hazard/duration models as in (8.5). Interpretation: the reversible rung fires repeatedly inside its band; under high reversibility, debt does not distort timing on this “safe patch block.”
(e) Reversibility proxies RevProxyi.
Composite measures of how close a reset is to “fully reversible.” Candidate components include documented rollback/feature-flag/kill-switch infrastructure; modularity/separability of subsystems (share of changelog lines in isolated mitigations/filters); explicit “revert/rolled back/restored” language; and monolith vs. componentized inference stack inferred from cross-references. These proxies map to takeover switching costs and φmax in Section 7 and enter S3 and S4.
(f) Financing.
For public firms: leverage ratios, interest coverage, and coupon burdens from filings; for private firms: disclosed venture debt/structured financing where available. These form the leverage/servicing measures in (8.4). In the theory, on the reversible rung (φ1 ≈ 0), default is off path and patch timing is debt-neutral; leverage distortions load on the high-cost rung (pivot).
E.3 Construction pipeline
• Timestamping. All disclosures are timestamped in UTC. If only “last updated” exists, infer first-publish from syndication feeds, sitemaps, or repository tags; ambiguous cases are flagged for review.
• De-duplication. Canonicalize URLs (strip tracking, follow redirects), and fuzzy-match titles/snippets to collapse cross-posts within 24 hours into a single canonical record. Each
canonical item contributes once to ˆλit and to ̂Varx
it.
48

• Signal identification. High-recall filters (“patch,” “hotfix,” “latency improvement,” “new base model,” “next-gen,” “full rollout,” “mitigation”) followed by a lightweight supervised classifier to assign release_class. Ambiguous high-salience items are manually adjudicated.
• Standardization for ̂Varx
it. Parse numeric metrics as (xs, metric_name, metric_unit) and map to a benchmark family Fs via a deterministic dictionary. Compute pooled (x ̄F , σF ) across all firms/months; z-score via zs = (xs − x ̄F )/σF ; take within-month variance across {zs} to obtain
̂Varx
it. Rationale for pooled normalization: (i) heterogeneous metrics become comparable draws of the same latent state, (ii) the pre-reset collapse in dispersion survives.
• Timing dispersion ̂Vartime
it . Intra-month IQR of timestamps (hours). Silence windows generate bunch-and-halt patterns; the IQR shrinks mechanically.
E.4 Design alignment with theory and signatures S1–S5
• S1: Pre-reset dips in cadence and dispersion.
Event studies (8.2)–(8.3) trace ˆλiτ and ̂Varx
iτ in event time around a major reset (pivot∪release). Predicted patterns: (i) a dip in both variables just before the reset (posted silence with λt = 0),
(ii) a jump to a new plateau after the reset. Cadence-only ̂Vartime
iτ should mirror the dip. Placebo: option-implied volatility on a public parent should not display a pre-release dip (options typically spike pre-event, whereas the firm starves its own outward signals here).
• S2: Two-plateau outcome distribution.
Post-reset bimodality is consistent with two endogenous targets (z1∗, z2∗): one after reversible patches, one after major resets. In the empirical implementation, the finite-mixture components are not point masses: each component is allowed its own variance, so the two bumps are interpreted as the “smeared” post-reset distributions around z1∗ and z2∗ generated by diffusion between the reset and disclosure plus measurement noise. Estimators include finite-mixture fits and Hartigan dip tests on post-
-event metrics, stratified by patch vs. pivot/release. Falsifier: robust unimodality after audited classification.
• S3: Debt insensitivity on the reversible rung.
Hazards per (8.4), focusing on the high-RevProxy block: define the “high-RevProxy” block as those observations with RevProxyi above a high cutoff (for example, the top quartile of the empirical RevProxyi distribution), and let
R ̄ := E[RevProxyi
∣
∣ RevProxyi in the high block]
denote the sample mean of RevProxyi in that block. In the hazard specification (8.4) the
derivative of log hit with respect to leverage at RevProxyi = R ̄ is ρ1 + ρ3R ̄, so the S3 null is
H0 : ρ1 + ρ3R ̄ = 0,
i.e. no leverage effect on patch timing at a representative high-reversibility rung. Leverage effects may load on the high-cost rung (pivot timing) but not on patch timing when reversibility is high, in line with the tight takeover bound in Proposition 3.
• S4: Patch cascades.
Duration models (8.5) for ∆ik, time since major reset, and reversibility proxies. Prediction: fast follow-on patches and debt-insensitive patch timing when RevProxyi is high; no pre-release bunching.
49

• S5: Adoption boundary.
Where platform/API uptake is observed, we focus on a firm-specific adoption threshold αi implied by the theory. In the model, αi is pinned by the smooth-fit/adoption condition μ ̄(α) S′(α) = r S(α) in eq. (8.6) (reproduced as (8.6)); it is a cutoff in the latent state and is not estimated in the RD itself.
In the data, αi is treated as a cutoff in a scalar running variable mij that is monotone in the underlying quality index (for example a pooled z-score or a linear index in the standardized metrics from S1). Around this cutoff we estimate a conventional local RD and allow the size of the jump at the cutoff to depend on the pre-release silence depth SilenceDepthie; the formal estimating equation is given in (E.1) below. The S5 prediction is that (i) there is a positive jump in platform/API uptake at-
 αi, (ii) that jump is larger for resets with deeper pre-release silence (larger SilenceDepthie), and (iii) there are no “jump-overs” in the RD window, i.e. no mass of adopters with mij < αi but arbitrarily close to it.
E.5 Provenance and access
All telemetry is sourced from firm-authored or firm-controlled public sources.
(a) Vendor blogs and product documentation (launch notes, evaluation cards, incident/advisory notes, mitigation reports). Access: RSS/Atom feeds when available; otherwise structured scraping. Historical backfill via the Internet Archive.
(b) Release notes and changelogs. Access: “What’s new”/“Release notes” portals and public changelogs; normalize timestamps; de-duplicate versus blogs/docs.
(c) Open-source repositories and registries. Access: GitHub REST/GraphQL for releases and tags; GHSA feeds; registries (PyPI, npm) for version notes authored by maintainers.
(d) Security/safety advisories. Access: vendor advisory portals; GHSA; NVD/CVE for timestamp corroboration. Count advisories authored or co-authored by the firm as “firm-published” disclosures.
(e) Model cards and hub listings. Access: public model cards/hub metadata; parse versioned cards as first-party disclosures when authored by the vendor.
(f) Financing. Access: EDGAR (10-K, 10-Q) for public firms (interest expense, long-term debt, covenant notes); for private firms, disclosed venture debt/structured financing and official statements about runway. Time-align to month t.
(g) Silence depth for S5 SilenceDepthie.
For each major reset e by firm i that gives rise to a platform/API for which uptake can be tracked (the events used in S5), define a scalar “silence depth” measure as the short-run drop in disclosure intensity just before the reset.
Let ˆλiτ be the event-time publication intensity for that reset and let λ ̄i be the firm-level mean
intensity outside any event windows (e.g. the average ˆλit over months more than T periods away from any major reset). For a baseline K = 3 pre-reset months we set
SilenceDepthie := 1
K
−1
∑
τ =−K
 ̄λi − ˆλiτ
λ ̄i
.
50

Higher values mean deeper pre-reset silence (a larger drop in cadence relative to the firm’s usual tempo). Any monotone re-scaling of this object (e.g. z-scoring or combining it with the analogous
dip in ̂Varx
iτ ) is admissible; in S5 it only enters as a continuous moderator.
Acquisition protocol (blueprint). APIs first (official feeds when present). Scraping is a fallback with identifying user agent, robots.txt compliance, conservative rate limits, and no paywall/authentication circumvention. Histories are reconstructed via the Internet Archive and repository tags; source and crawl timestamps are recorded, raw HTML/JSON is snapshotted, and a SHA-256 is stored per item. Entity resolution uses versioned YAML mapping from firm_id to canonical domains, product/model slugs-
, and repository organizations. Disclosure rows include: firm_id, optional product_id, datetime_utc, source_type, normalized url, title, machine release_class ∈ {patch, pivot, release, other} (with pivot∪release treated as a major reset), parsed numeric metrics (name, value, unit, family F ), and parser provenance. Only public content is contemplated.
E.6 Identification strategies
(i) Event windows (S1, S2, S4).
Define τ = 0 as a major reset. For each firm i, build τ ∈ [−T, +T ] and estimate (8.2) and (8.3) with firm fixed effects and calendar effects; include leads to probe for anticipatory changes (silence must begin before the reset if strategic). Post-reset outcome distributions are used for S2; post-reset patch cascades for S4.
(ii) Stacked difference-in-differences (S1).
Stack firm-by-month panels across events and compare treated windows to matched never-/notyet-treated windows with firm and calendar-month fixed effects; absorb secular AI-cycle shocks and industry-wide hype waves.
(iii) Patch-cascade hazards (S3, S4).
Cox or AFT models for the arrival of patch k + 1 conditional on elapsed time since patch k and since the last major reset; covariates include leverage, RevProxyi, and interactions (cf. (8.5)).
(iv) Debt insensitivity (S3).
Patch timing/hazard on leverage, RevProxyi, and their interaction, with firm and calendar controls (specification (8.4)). Prediction: conditional on high reversibility, patch timing is debt-neutral; leverage effects load on the high-cost rung (pivot timing).
(v) Adoption boundary (S5).
For each platform/API i and associated major reset e, recover a firm-specific adoption cutoff αi from the structural condition in eq. (8.6) (reproduced as (8.6)). Let U ptakeij be an indicator (or rate) of adoption by unit j (developer, app, or customer segment) within a fixed window after the reset, and let mij be a scalar running variable that is monotone in the underlying quality index (for example, a linear index in the pooled standardized metrics). The baseline RD specification is
U ptakeij = θi + fi(mij − αi) + [β0 + β1 SilenceDepthie
]1{mij ≥ αi} + uij, (E.1)
estimated on a symmetric window |mij −αi| ≤ h using conventional local-polynomial RD routines (e.g. local linear, triangular kernel, MSE-optimal bandwidth). Here fi(·) is approximated by
51

separate polynomials below and above zero, so that the slope of U ptakeij in mij can differ to the left and right of the cutoff; θi absorbs platform fixed effects; and uij is an error term with standard errors clustered at the (i, e) level.
In this parametrization, β0 is the average discontinuity in uptake at the theoretical cutoff αi, and β1 > 0 is the prediction that the size of that jump is increasing in pre-release silence depth SilenceDepthie. The “no jump-overs” implication is probed by checking that fitted adoption probabilities remain low just to the left of the cutoff for units with mij < αi inside the RD window, even when mij is close to αi.
E.7 Robustness
• Window choice. Alternative T ∈ {±2, ±3, ±6} months; placebo pseudo-events at random non-release months.
• Estimator choice for counts. Poisson, quasi-Poisson, and negative binomial for ˆλit with firm-clustered (and firm-by-calendar) standard errors; document overdispersion and zero inflation.
• Classifier sensitivity. “Strict signals” (evaluation cards/safety writeups only) vs. “broad signals” (strict plus changelogs). Baselines lie between.
• Cross-firm spillovers. Competitor-month controls (e.g., mean λˆ of other frontier labs that month) to rule out industry-wide pauses.
• Leave-one-out. Iteratively drop each large firm and re-run event-study and hazard specifications to check non-dominance.
• Timing dispersion proxy. Repeat S1 with ̂Vartime
it to isolate cadence from content.
• Discipline and prior art. Parsing and patch-cascade logic follow software-engineering/infosec telemetry (Arora et al., 2010; Li and Paxson, 2017). Telemetry outcomes are distinct from option-implied volatility spikes around earnings/macro news (Todorov and Zhang, 2025; Alexiou et al., 2025), which are market-pricing objects, not firm-chosen disclosure cadence.
E.8 Replication artifacts and reproducibility
Replication artifacts. If a data release is undertaken in subsequent work, the repository would include: (i) the mapping from raw metric names/units to families F , (ii) pooled x ̄F and σF used for
z-scoring, and (iii) code to compute ̂Varx
it from parsed disclosures.
Reproducibility. If an empirical execution proceeds, the replication package would provide (i) crawlers/parsers (with rate limiting and source attribution), (ii) the firm/product YAML mapping, (iii) a reproducible build script that replays API pulls where allowed and falls back to cached HTML/JSON snapshots otherwise to emit the analysis-ready (i, t) and (i, p, t) panels, and (iv) unit tests and deterministic fixtures. Licensed or paid data, if any, would be stubbed with documented placeholders.
F Additional Lemmas and Technical Results
This appendix records technical ingredients used throughout. Notation follows Sections 3–5 and Appendix C. The private state (zt)t≥0 is a one-dimensional Itô diffusion with drift μθ(·) and diffusion coefficient φ(·) that are locally Lipschitz with linear growth, so that a unique nonexplosive strong
52

solution exists. The public posterior mean (mt)t≥0 is a piecewise-deterministic Markov process (PDMP) under the Cox “publication clock” described in Appendix C. The discount rate is r > 0. Impulse controls (“patch” / “pivot”) instantaneously reset zt to a target zi∗ at cost Ki; after a reset the diffusion resumes with the same coefficients.
F.1 No local time and no accumulation
We first formalize two pieces of regularity used repeatedly: (i) under a posted silence window, the public-belief process mt has no local time; and (ii) the controlled diffusion does not generate “Zeno” behavior (infinitely many resets in finite time).
Lemma 3 (No local time for beliefs under local silence). Fix an open interval U ⊂ R and a (publicly observed / credibly committed) publication policy that is Markov in the public mean, λt = λ(mt), with λ(m) ≡ 0 for all m ∈ U . Suppose also that no reset is triggered while mt ∈ U . Then, on any time interval contained in {t : mt ∈ U }, the public posterior mean mt has bounded variation and zero quadratic variation. In particular, for every a ∈ U :
(i) the semimartingale local time Lta(m) is identically zero; and
(ii) the set {t : mt = a} has Lebesgue measure zero almost surely.
Proof. Appendix C makes mt explicit as a PDMP with generator
(Aλf )(m) = μ ̄(m) f ′(m) + Λ(m) E[f (U (m, ε)) − f (m)],
where λt is the publicly observed publication intensity, Λ(m) = E[λt | mt = m] is the publicly inferred publication hazard, and U is the Bayesian update map at a publication; see equation (C.1) and Lemma 1 in Appendix C. By construction of the posted silence window, the policy sets λt = λ(mt) ≡ 0 whenever mt ∈ U . Hence, conditional on mt = m with m ∈ U we have λt = 0 almost surely, and therefore
Λ(m) = E[λt | mt = m] = 0 for all m ∈ U,
and the jump term vanishes there. Between jumps, the posterior mean mt evolves deterministically via the ODE (m ̇ t, v ̇t) = (μ ̄(mt), γ ̄(mt, vt)),
so while mt ∈ U its path is absolutely continuous and therefore of bounded variation. A semimartingale of bounded variation has zero quadratic variation and hence zero local time at every interior point. In particular, by Tanaka’s formula and the occupation-time formula, Lta(m) ≡ 0 for all a ∈ U , and the occupation measure of the singleton {a} is identically zero almost surely. This yields both (i) and (ii).
Remark. This lemma treats the silence window as defined in belief space, with a policy of the form λt = λ(mt) and λ(m) = 0 on U , exactly as in Section 3. In the microfoundation of Appendix C, such a policy can be implemented by choosing a state-dependent intensity λ(zt) whose realized value is publicly observed. Intuitively, posting a local silence window shuts off the martingale part of public beliefs on that band. The public mean mt stops “twitching” stochastically and becomes purely determinis-
tic drift. The process therefore cannot maintain a mixed strategy by repeatedly returning to a knife-edge boundary via stochastic jitter, which is exactly the logic used in Appendix C to rule out local randomization near reset triggers.
53

Lemma 4 (No Zeno accumulation of resets; finite cycle time). Let I = [β1, β2] be a bounded inaction band and define the first exit time
τ := inf{t ≥ 0 : zt ∈/ I}.
Assume:
(i) μθ(·) and φ(·) are continuous on I and locally Lipschitz (hence bounded on I); and
(ii) uniform ellipticity on I: there exists σ > 0 such that φ(z) ≥ σ for all z ∈ I.
Then Ez0[τ ] < ∞ for every z0 ∈ (β1, β2). In particular, in the impulse control ladder where exits at β1 and β2 trigger instantaneous resets to targets z1∗, z2∗ ∈ (β1, β2), each patch/pivot cycle has finite expected length and there is no Zeno accumulation of interventions on any finite time interval.
Proof. Let L denote the diffusion generator on I,
(Lf )(z) = μθ(z)f ′(z) + 1
2 φ2(z)f ′′(z), z ∈ (β1, β2).
Because I is compact, μθ and φ are bounded on I, and φ ≥ σ > 0 (uniform ellipticity). Consider the boundary value problem
Lu = −1 on (β1, β2), u(β1) = u(β2) = 0. (F.1)
Standard ODE theory for one-dimensional uniformly elliptic operators with continuous coefficients yields a unique solution u ∈ C2(β1, β2) ∩ C([β1, β2]) to (F.1). One can solve explicitly by reducing to a first-order equation for u′: u′′ + (2μθ/φ2)u′ = −2/φ2, integrate with the usual integrating factor, and then impose the two boundary conditions. By Dynkin’s formula and optional stopping at τ ∧ t,
Ez0
[u(zτ∧t)] − u(z0) = Ez0
∫ τ ∧t
0
(Lu)(zs) ds = − Ez0[τ ∧ t].
Because u ≥ 0 on [β1, β2] with u = 0 at the boundary (maximum principle for (F.1)), we have 0 ≤ Ez0[u(zτ∧t)] ≤ ∥u∥∞. Letting t ↑ ∞ and applying monotone convergence to τ ∧ t gives
Ez0[τ ] = u(z0) ≤ ∥u∥∞ < ∞,
so Ez0[τ ] < ∞ for every z0 ∈ (β1, β2). Now fix an impulse ladder with lower and upper targets z1∗, z2∗ ∈ (β1, β2) after exits at β1 and
β2. By continuity of u on the compact set J := {z1∗, z2∗} ⊂ (β1, β2) and the strict inequality u > 0 on the open interval, we have δ := min
z∈J u(z) > 0.
Thus every excursion starting from either target has mean exit time at least δ. Define τ0 := 0 and, for n ≥ 1, let τn be the nth exit time from I (that is, the end of the nth inaction spell), and set ∆n := τn − τn−1. Let (Ft)t≥0 be the natural filtration of (zt) and write Gn := Fτn. By the strong Markov property and the definition of u,
E[∆n | Gn−1] = u(zτ+
n−1 ) ≥ δ,
because zτ+
n−1
∈ {z1∗, z2∗} almost surely. In particular, each ∆n is integrable and its conditional mean is uniformly bounded below by δ.
54

Define
Sn :=
n
∑
k=1
(∆k − δ), n ≥ 0,
with the convention S0 := 0. Then for every n ≥ 1,
E[Sn | Gn−1] = Sn−1 + E[∆n − δ | Gn−1] ≥ Sn−1,
so (Sn)n≥0 is a submartingale with respect to (Gn). Fix a finite horizon T < ∞ and define
NT := max{n : τn ≤ T },
with the convention NT = 0 if τ1 > T . Then NT is a stopping time with respect to (Gn) and τNT ≤ T almost surely. For each integer K ≥ 1 consider the bounded stopping time N K
T := NT ∧ K. By optional sampling for submartingales,
E[SN K
T ] ≥ S0 = 0.
On the other hand,
SN K
T=
NK
T
∑
k=1
(∆k − δ) = τNK
T − δ NK
T.
Using τNK
T ≤ T we obtain
0 ≤ E[τNK
T ] − δ E[N K
T ] ≤ T − δ E[N K
T ],
so that
E[N K
T] ≤ T
δ for all K ≥ 1.
Since N K
T ↑ NT as K → ∞, the monotone convergence theorem yields
E[NT ] = lim
K→∞ E[N K
T] ≤ T
δ < ∞.
The random variable NT takes values in N ∪ {∞}. If Pr(NT = ∞) were strictly positive, then
E[NT ] = ∑
n≥0
Pr(NT > n) ≥ ∑
n≥0
Pr(NT = ∞) = ∞,
a contradiction. Hence Pr(NT = ∞) = 0 and there are almost surely only finitely many interventions on any finite horizon [0, T ]. This rules out Zeno accumulation and, combined with Ez0[τ ] < ∞, justifies referring to the ladder as having finite cycle time.
Remark (why uniform ellipticity and a crude bound). If φ is allowed to vanish on I, the mean exit time from a bounded interval can be infinite for some drifts. The uniform lower bound φ ≥ σ > 0 rules out that pathology and is standard in ladder problems. A crude explicit bound follows by comparison with the constant-coefficient case (generator (σ2/2)∂zz): solving (σ2/2)u′′ = −1 with u(β1) = u(β2) = 0 yields
u(x) = (x − β1)(β2 − x)
σ2 ≤ (β2 − β1)2
4 σ2 ,
so Ez0 [τ ] ≤ C(I, μθ, φ) ≤ (β2−β1)2
4 σ2 eK(β2−β1) for some K = supz∈I
∣
∣2μθ (z )/φ2 (z )∣
∣ (obtained from the integrating-factor formula for u). This lemma is what lets us treat the two-trigger ladder as a standard stationary Markov impulse policy without worrying about pathological “reset chatter” at arbitrarily high frequency.
55

F.2 Constant-coefficient benchmark and comparative statics
This subsection records (i) the closed-form baseline in the constant-coefficient benchmark that we use for intuition and figures, and (ii) the local comparative statics of trigger and target choices with respect to the fixed costs Ki. These comparative statics underlie the claims in Section 7 and in Appendix D that higher intervention costs widen the inaction region and magnify the jump size.
Assumption 11 (Constant-coefficient benchmark). On a given solvent inaction block: μθ(z) ≡ μ is constant, φ(z) ≡ σ > 0 is constant, and the net flow payoff is π(z, m) ≡ π0 (constant).14 Publication intensity λ on that inaction block is constant and can be absorbed into π0.
Under Assumption 11, the HJB / continuation ODE in any inaction region is linear with constant coefficients. Let η+ and η− be the distinct real roots of
1
2 σ2η2 + μη − r = 0, η+ > 0 > η−,
and write Π := π0/r. The general C2 solution to the stationary ODE
rV (z) = π0 + μV ′(z) + 1
2 σ2V ′′(z)
on that region is V (z) = Π + A eη+z + B eη−z, (F.2)
for constants (A, B) pinned down by boundary conditions / continuation values. Now embed the two-reset ladder. Let (β1, β2) be the inaction band. When zt hits the lower trigger β1 from above, the firm pays the patch cost K1 and jumps the state to z1∗ > β1. When zt
hits the upper trigger β2 from below, the firm pays the pivot cost K2 and jumps to z2∗ < β2. By construction of “upward” patch vs. “downward” pivot, we have
β1 < z∗
1 < z∗
2 < β2.
Standard impulse-control verification (Section 5, Appendix C, and Appendix D) gives the boundary conditions at each rung:
(patch rung) V (β1) = V (z∗
1) − K1, (value matching), (F.3)
V ′(β1) = 0, (high contact / smooth pasting at the trigger), (F.4)
V ′(z∗
1) = 0, (target optimality)
and
(pivot rung) V (β2) = V (z∗
2) − K2, (value matching), (F.5)
V ′(β2) = 0, (high contact at the trigger), (F.6)
V ′(z∗
2) = 0. (target optimality)
Intuition: Value matching says you are indifferent between (i) acting right at the trigger and paying Ki to jump to the target, versus (ii) continuing without acting exactly at that same trigger state. High contact says the marginal value of nudging the state infinitesimally without paying the fixed cost is locally zero at the trigger, because that trigger is precisely the point at which acting versus
14Allowing π to be affine or to embed disclosure costs k(λ) changes algebra but not the comparative-static signs below.
56

waiting is knife-edge. Target optimality says that, conditional on paying Ki, the chosen target zi∗ solves a FOC: you do not want to “over-shoot” once having incurred the fixed cost. The continuation solution (F.2) together with the six boundary conditions (F.3)–(F.5) pin down
(β1, z∗
1 , β2, z∗
2, A, B)
as a (locally) unique C1 function of (K1, K2) and the continuation values inherited from neighboring block(s). The next lemma records the comparative statics of (β1, z1∗) and (β2, z2∗) with respect to (K1, K2).
Lemma 5 (Fixed-cost comparative statics in the constant-coefficient ladder). Impose Assumption 11 and the regularity used in Section 5 and Appendix C: in particular,
(i) the “nondegenerate curvature” condition at each rung (the indifference at βi is isolated, not flat, and V ′′(βi) and V ′′(zi∗) have opposite nonzero signs, as in Assumption 10); and
(ii) no local time / no accumulation (Lemmas 3 and 4).
Then, locally (via the Implicit Function Theorem),
∂β1
∂K1
< 0, ∂z1∗
∂K1
> 0,
and symmetrically,
∂β2
∂K2
> 0, ∂z2∗
∂K2
< 0.
• β1 is the “too-bad” threshold where the firm finally pays K1 to patch. If K1 rises, the firm becomes more reluctant to pay it. It thus tolerates worse performance (or higher misalignment, cost, latency) before acting. The trigger moves outward in that direction: β1 shifts further into the “bad” region. Since “bad” is lower in z at the patch rung, this is ∂β1/∂K1 < 0.
• Conditional on finally paying K1, the firm now wants to “make it count.” The optimal post-patch target z1∗ thus moves in the good direction, ∂z1∗/∂K1 > 0. The jump size z1∗ −β1 strictly increases.
• β2 is the “too-much” / “time to pivot” threshold. When K2 increases, the firm delays the expensive pivot and rides the current architecture longer, so β2 moves outward in that (high) direction: ∂β2/∂K2 > 0.
• Once it does pivot, it pivots harder. The chosen post-pivot target z2∗ drops further, so ∂z2∗/∂K2 <
0. The jump β2 − z2∗ grows.
In both cases, higher fixed intervention costs widen the inaction band and magnify the eventual intervention. This is the continuous-time ladder analogue of the textbook S–s logic: higher adjustment costs stretch the no-adjustment region and make each discrete adjustment larger.
Proof. Stack the six boundary conditions (F.3)–(F.5) and solve them jointly for the six unknowns
θ := (β1, z∗
1 , β2, z∗
2, A, B).
In the constant-coefficient benchmark the continuation solution on the inaction band is V (z) = Π + Aeη+z + Beη−z, common to the whole band; hence (A, B) enter both rungs, and the lower/upper conditions are coupled.
57

Write F (θ; K1, K2) = (F1, . . . , F6) with rows
F1 := V (β1) − V (z∗
1) + K1 (lower value matching),
F2 := V ′(β1) (high contact at β1),
F3 := V ′(z∗
1) (target optimality at z∗
1 ),
F4 := V (β2) − V (z∗
2) + K2 (upper value matching),
F5 := V ′(β2) (high contact at β2),
F6 := V ′(z∗
2) (target optimality at z∗
2 ).
At any regular solution (θ◦; K1◦, K2◦) we have F (θ◦; K1◦, K2◦) = 0. Let E±(z) := eη±z. Then
V ′(z) = Aη+E+(z) + Bη−E−(z) and V ′′(z) = Aη2+E+(z) + Bη2−E−(z).
Step 1 (local well-posedness). Consider the Jacobian matrix ∂θF (θ◦; K1◦, K2◦). Using the Wronskian
W (z) := det
[
E+(z) E−(z) η+E+(z) η−E−(z)
]
= (η− − η+)E+(z)E−(z) ̸= 0,
together with the nondegenerate-curvature assumption (V ′′(βi◦), V ′′(zi∗◦) ̸= 0 with opposite signs at
each rung), one checks that ∂θF (θ◦; K1◦, K2◦) is nonsingular: informally, the two derivative conditions at each rung pin down the local curvature and the (A, B) directions via the nonzero Wronskian. Hence the Implicit Function Theorem yields a C1 map
(K1, K2) 7→ θ(K1, K2) near (K◦
1, K◦
2 ).
Step 2 (signs via Cramer’s rule). Differentiate F (θ(K1, K2); K1, K2) = 0 with respect to K1:
∂θF · ∂θ
∂K1
+ ∂K1F = 0, ∂K1F = (1, 0, 0, 0, 0, 0)⊤.
By Cramer’s rule,
∂β1
∂K1
= − cof1,1(∂θF )
det(∂θF ) , ∂z1∗
∂K1
= − cof1,2(∂θF )
det(∂θF ) .
Because K1 enters only the lower value-matching row F1, the relevant cofactors factor into the curvature term at the opposite contact point times a positive minor collecting the (β2, z2∗, A, B) block. More precisely, after a harmless choice of orientation so that ∆ := det(∂θF ) > 0,
cof1,1(∂θF ) = V ′′(z∗◦
1 ) · ∆+, cof1,2(∂θF ) = V ′′(β◦
1 ) · ∆+,
where ∆+ > 0 is the determinant of a principal minor containing only Wronskian terms and upper-rung rows/columns (and thus independent of the local signs we are about to use). Therefore
∂β1
∂K1
= − V ′′(z1∗◦) ∆+
∆ < 0, ∂z1∗
∂K1
= − V ′′(β1◦) ∆+
∆ > 0,
because V ′′(z1∗◦) > 0 and V ′′(β1◦) < 0 by the usual “concave at trigger / convex at target” pattern (cf. Assumption 10). Upper-rung comparative statics are symmetric: differentiating w.r.t. K2 gives
∂β2
∂K2
> 0, ∂z2∗
∂K2
< 0.
58

Remark (coupling through A, B). The equalities above follow from the coupled 6 × 6 system. The parameters (A, B) tie the rungs together algebraically; increasing K1 can shift (β2, z2∗) through
that coupling. The signs for (∂β1/∂K1, ∂z1∗/∂K1) (and the symmetric pair for K2) nevertheless
follow from the cofactor structure: the relevant cofactors isolate curvature terms V ′′(·) at the active rung and multiply them by a positive minor, so the cross-rung coupling does not alter the sign conclusions.
This lemma formalizes two claims used repeatedly: (i) higher K1 or K2 widens the inaction band; (ii) each discrete intervention becomes “lumpier.” Empirically, this motivates treating long runs of small “patch”-style tweaks as distinct from rarer “pivot / major-release” resets (Appendix E).
F.3 Pointers
For the takeover-envelope argument and the decomposition of the debt wedge into a pre-default agency wedge plus a takeover irreversibility wedge, see Lemma 2 and equations (D.16) and (7.2) in Appendix D. For the public-belief generator Aλ and the “local silence kills the martingale” result that underlies Lemma 3, see equation (C.1) and Lemma 1 in Appendix C.
References
A. B. Abel and J. C. Eberly. Optimal investment with costly reversibility. Review of Economic Studies, 63(4):581–593, 1996. doi: 10.2307/2297794. L. Alexiou, A. Goyal, A. Kostakis, and L. Rompolis. Pricing event risk: Evidence from concave implied volatility curves. Review of Finance, 29(4):963–1007, 2025. doi: 10.1093/rof/rfaf016. A. Arora, R. Krishnan, R. Telang, and Y. Yang. An empirical analysis of software vendors’ patch release behavior: Impact of vulnerability disclosure. Information System-
s Research, 21(1):115–132, 2010. doi: 10.1287/isre.1080.0226. G. Bertola and R. J. Caballero. Irreversibility and aggregate investment. Review of Economic Studies, 61(2):223–246, 1994. doi: 10.2307/2297979. I. S. Buhai and C. N. Teulings. Tenure profiles and efficient separation in a stochastic productivity model. Journal of Business & Economic Statistics, 32(2):245–258, 2014. doi: 10.1080/07350015.2013.866568. URL 10.1080/07350015. 2013.866568.
A. K. Dixit and R. S. Pindyck. Investment Under Uncertainty. Princeton University Press, Princeton, NJ, 1994. ISBN 9780691034102. S. Gryglewicz and A. Kolb. Dynamic signaling with stochastic stakes. Theoretical Economics, 17(2):539–559, 2022. ISSN 1555-7561. doi: 10.3982/TE3710. URL https://doi.org/10.3982/TE3710. I. Guttman, I. Kremer, and A. Skrzypacz. Not only what but also when: A theory of dynamic voluntary disclosure. American Economic Review, 104(8):2400–2420, 2014. doi: 10.1257/aer.104.8.2-
400. A. M. Kolb. Optimal entry timing. Journal of Economic Theory, 157:973–1000, 2015. doi: 10.1016/j.jet.2015.03.002. A. M. Kolb. Strategic real options. Journal of Economic Theory, 183:344–383, 2019. doi: 10.1016/j.jet.2019.05.008. F. Li and V. Paxson. A large-scale empirical study of security patches. In Proceedings of the 2017 ACM SIGSAC Conference on Computer and Communications Security (CCS ’17), pages 2201–2215, Dallas, TX, 2017. ACM. doi: 10.1145/3133956.3134072. G. Manso. Investment rever-
sibility and agency cost of debt. Econometrica, 76(2):437–442, 2008. doi: 10.1111/j.14680262.2008.00838.x. D. Orlov, A. Skrzypacz, and P. Zryumov. Persuading the principal to wait. Journal of Political Economy, 128(7): 2542–2578, 2020. doi: 10.1086/706687. V. Todorov and Y. Zhang. Testing for anticipated changes in spot volatility at event times. Econometric Theory, 41 (1):1–34, 2025. doi: 10.1017/S0266466623000178.
59

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:05.725Z
- **Text Length:** 179535 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 59 of 59
