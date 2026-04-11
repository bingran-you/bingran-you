# PDF Document: Zeng et al. - 2025 - Dynamic Mechanism Collapse A Boundary Characterization.pdf

**File Path:** Zeng et al. - 2025 - Dynamic Mechanism Collapse A Boundary Characterization.pdf

**Processed Date:** 2026-02-10T18:14:10.167Z

**File Size:** 558.76 KB

**Total Pages:** 36

**Extracted Pages:** 36

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3169

**Title:** Dynamic Mechanism Collapse: A Boundary Characterization

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Dynamic Mechanism Collapse: A Boundary
Characterization
Xiaopeng Zeng ∗ Erbao Cao †∗ Xiangqian Yang∗
November 27, 2025
Abstract
When are dynamics valuable? In Bayesian environments with public signals and
no intertemporal commitment, we study a seller who allocates an economically single
shot resource over time. We provide necessary and sufficient conditions under which
the optimal dynamic mechanism collapses to a simple terminal design: a single public
experiment at date 0 followed by a posterior-dependent static mechanism executed at
a deterministic date, with no further disclosure. The key condition is the existence
of a global affine shadow value that supports the posterior-based revenue frontier and
uniformly bounds all history-dependent revenues. When this condition fails, a collapse
statistic pinpoints the dates and public state variables that generate genuine dynamic
value. The characterization combines martingale concavification on the belief space with
an affine-support duality for concave envelopes.
Keywords: dynamic mechanism design; concavification; martingales; terminal mechanisms;
boundary characterization. JEL: D44, D82, D83, C73.
1 Introduction
Dynamic mechanisms let a designer interact with agents over time, disclose information grad
ually, and condition allocations on public histories. Sometimes this dynamic flexibility strictly
raises the attainable value; in other cases, the best dynamic mechanism is ex-ante equivalent
to a much simpler static (e.g. Bolton and Dewatripont, 2005). This contrast motivates a
central question: when are dynamics valuable? More precisely, in a general Bayesian environ
ment with public histories, when does conditioning mechanisms and information policies on
∗School of Economics and Trade, Hunan University, Changsha, China †Corresponding author. Email: xiaopeng@hnu.edu.cn
1
arXiv:2511.19781v2 [econ.TH] 26 Nov 2025

the path of public signals strictly expand the designer’s ex-ante value, and when can the full
dynamic mechanism be collapsed into a static design?
A simple intuition comes from a seller facing a fluctuating cost of supplying a single unit
over time. The seller can post a price in each period but only wishes to trade when the cost
is low. In an optimal policy, trade is concentrated in low-cost states, while high-cost states
are made effectively irrelevant by prohibitively high prices. From an ex-ante perspective, the
rich dynamic environment then behaves as if the seller simply waited for low costs and ran a
single static mechanism.
We study this question by working in a dynamic Bayesian environment with public histo
ries. Time is discrete, and in each period the designer (seller) faces a set of potential buyers for
a economically single-shot resource: it can be allocated at most once and no further surplus
can be generated after allocation. Uncertainty is represented by a probability space, and at
each date t, the seller announces a public information policy of public histories (F t)t∈T and a
submechanism Γt that could be executed and that is drawn from a given submechanism space
Ht. The collection of information and submechanisms M = {Mt = (F t, Γt)}t∈T is called the
mechanism calendar. Buyers play a Bayesian game in each submechanism, and the seller’s
payoff is summarized by an analytic revenue correspondence Rt[F t, Γt] for each t, which is
solely determined by the past history and the current feasible space of the mechanism.
Our standing assumptions isolate the source of dynamic value we study. We work without
intertemporal commitment (Assumption 1); past announcements about future submechanisms
are not binding. The resource is economically single-shot (Assumption 2): it can be allocated
at most once and no further surplus can be generated thereafter. These restrictions remove
dynamic gains from long-term commitment or repeated trade and leave information and timing
as the only intertemporal margins. Technically, to handle the infinite-dimensional belief space,
we adopt the standard assumption of value regularity (Assumption 3). Otherwise, the so-called
equivalent conditions degenerate into purely sufficient conditions.
We approach the problem by working on the belief space. At each date t, the public
history can be written as F t = σ(St, Yt), where St ∈ E = ∆(Θ) is the public posterior
and Yt is a public state. For any public σ-algebra Gt with σ(St) ⊆ Gt ⊆ F t, we define a
reduced-form value U Gt
t (s) as the maximal revenue attainable at belief s with Gt-measurable
submechanisms. The posterior-based benchmark g(s) := supt∈T U σ(St)
t (s) and the history
based benchmark gb(s) := supt∈T U Ft
t (s) then summarize, belief by belief, the best values
when mechanisms may condition only on posteriors or on full public histories. We show
that, under our assumptions, the ex-ante value of any mechanism calendar is given by the
concave envelope of g or gb on the belief space, in the spirit of concavification arguments in
Bayesian persuasion and information design (e.g. Kamenica and Gentzkow, 2011; Bergemann
and Morris, 2016), and that the incremental value of dynamics is fully captured by whether
2

(conc gb)(S0) strictly exceeds (conc g)(S0) at the prior S0.
Our main results link the value comparison between dynamic and static designs, and the
structural form of optimal mechanisms, to a single condition on the belief space. The first
is an ex-ante no-gain result (Theorem 1). For a given mechanism calendar and associated
information histories {Gt}, we show that richer public histories generate no additional value
at the prior if and only if there exists, for every ε > 0, a continuous affine “shadow value”
on the belief space that (ε-approximately) supports the posterior-based benchmark g at S0
and uniformly dominates all date-wise values U Gt
t . Equivalently, dynamic gains arise only
when history-dependent values force the concave envelope of gb to lie strictly above that of g
at the prior. The second result is a structural collapse theorem (Theorem 2), which shows
that a mechanism calendar collapses if and only if the global affine-support condition (A′′
ε)
holds. Under this condition, any seller-optimal mechanism calendar is ex-ante equivalent to a
terminal design that conducts a single information experiment on the posterior space at date 0
and, at each realized posterior, chooses a static submechanism and a deterministic execution
date with no further public disclosure or strategic interaction.
These characterizations admit a straightforward economic interpretation. When the global
affine-support condition holds, all non-posterior public histories are redundant: from the de
signer’s perspective, the mechanism calendar can be replaced by a terminal, belief-based de
sign that conditions only on posteriors. Dynamic choices of labels, promised utilities, or
reputations may raise date-wise revenues at some beliefs, but an optimal information policy
from S0 never finds it worthwhile to steer beliefs into those regions. Conversely, whenever
(conc gb)(S0) > (conc g)(S0), our diagnostic identifies beliefs and dates at which the full public
state (St, Yt) attains belief–revenue pairs in a non-posterior gain region: these are exactly
the histories at which continuation states beyond the posterior are essential for reaching the
dynamic revenue frontier.
There is a long tradition in dynamic mechanism and contract theory of asking when dy
namic interactions add content beyond what can be captured by a suitable static model. Sur
vey treatments such as Bolton and Dewatripont (2005) emphasize that in some environments
dynamics change the feasible allocations or values, while in others an appropriate choice of
state variables makes the problem effectively static. This strands obtain ”no value of dynam
ics” results in specific settings. In robust mechanism design with minimax objectives and i.i.d.
rounds, in certain environments, optimal dynamic mechanisms can perform no better than re
peating an optimal static mechanism (e.g. Balseiro et al., 2021); here the conclusion is driven
by worst-case reasoning under independence. In sequential screening, dynamic contracts can
often be reduced to a static screening problem with an enlarged type space (e.g. Kra ̈hmer
and Strausz, 2017), by encoding the payoff-relevant evolution of information in an augmented
state that serves as the type in the corresponding static problem. Methodologically, our anal
3

ysis is close in spirit to this state-compression perspective: we also separate payoff-relevant
beliefs from other public contingencies and ask when a reduced state description suffices. Our
approach differs in scope and in the object of study. We work in a Bayesian environment with
general type spaces, and for each date t we take as given a set of feasible submechanisms and
an associated revenue correspondence; the mechanism technology at t is arbitrary but fixed,
and dynamic value comes from how this technology is conditioned on public histories. We
decompose each public history as F t = σ(St, Yt) into a posterior St and a non-posterior public
state Yt, and compare posterior-only and history-dependent values through the functions g
and gb. Our collapse result shows that the global affine-support condition (A′′
ε ) is equivalent to
the following property: from the prior S0, any mechanism calendar can be replaced, without
ex-ante loss, by a terminal posterior-based design.
In addition to these global characterizations, we introduce a collapse statistic that local
izes dynamic value at the level of public variables and dates. This statistic (Proposition 1)
generates a lattice that is downward- and meet-closed but not generally join-closed, highlight
ing that public information labels that are individually harmless may become value-relevant
in combination. Proposition 2 characterizes date-wise collapse: a mechanism collapses on
date t if and only if every non-posterior public variable is collapsible at t, and Proposition 3
shows that calendar-wide collapse is sufficient for a global no-gain condition on all information
histories. To detect strictly positive non-posterior dynamic value, we define a non-posterior
gain region Bε(S0), then Proposition 4 implies that collapsed calendars never hit this region,
whereas any other calendar must hit it at some belief and date. These auxiliary results provide
variable-level and date-level diagnostics.
On the technical side, the main challenge is to work on a general posterior space E =
∆(Θ), where Θ may be infinite and the belief-based value functions g and gb need not be
continuous. Standard finite-state constructions are therefore not available. We handle this
in three steps. First, starting from the public histories (F t)t∈T and the analytic revenue
correspondence Rt[F t, Γt], we represent any mechanism calendar by a family of belief-based
value functions {U G
t } on E, indexed by intermediate public σ-algebras G with σ(St) ⊆ G ⊆
F t. Under the analytic-graph assumption, these reduced-form values U G
t admit versions that
are bounded and upper semianalytic; this follows from standard results on analytic sets,
measurable correspondences, and upper semianalytic functions.(see, for example, Castaing
and Valadier, 1977; Bertsekas and Shreve, 1978; Kechris, 1995) Second, we apply a martingale
concavification for the posterior process {St} and obtain a value representation: the ex-ante
value of any calendar equals the concave envelope of g or gb on E, in the spirit of concavification
arguments in Bayesian persuasion and information design.(e.g. Kamenica and Gentzkow, 2011;
Bergemann and Morris, 2016) Third, we use an affine-support duality on E to translate the
condition (conc gb)(S0) = (conc g)(S0) into the existence of continuous affine ‘shadow values’
4

that dominate all date-wise values, and to construct the non-posterior gain regions used in
our diagnostic, drawing on classical results on concave envelopes over compact convex subsets
of locally convex spaces.(see, Rockafellar, 1970; Aliprantis and Border, 2006)
Further related work treats dynamic interaction entirely through the evolution of beliefs.
In dynamic persuasion and dynamic information design, optimal policies are characterized by
the law of the posterior process and by concavification on the belief space; see, for example,
Ely (2017), Ball (2023), and the broader discussion in Forges (2020). These papers share
with the present analysis the use of posterior martingales and belief–space geometry. The
primitives and the questions, however, are different. The question here is whether allowing
these technologies to be conditioned on rich public histories changes the concavified revenue
relative to a terminal benchmark.
Our decomposition of public histories into (St, Yt) language is also related to state-reduction
techniques in dynamic mechanism design. In long-term contracting and dynamic screening,
Battaglini (2005) and Garrett and Pavan (2015) show how histories can be summarized by
belief and promised-utility type variables, and in dynamic revenue-management and auction
models, Board and Skrzypacz (2016) show that, under suitable conditions, simple state vari
ables and pricing rules are optimal. The split of Ft can be viewed as an abstract version
of such state compression. In contrast to these model-specific reductions, the present paper
keeps the static technology at each date arbitrary and asks on the belief space.
The remainder of the paper is organized as follows. Section 2 introduces the dynamic
environment and basic assumptions. Section 3 defines date-wise collapse and develops the
value-invariance lattice and the ex-ante no-gain theorem. Section 4 presents the structural
collapse result. Section 5 show our applications.
2 Preliminaries
In discrete time, at each date t ∈ T := {0, 1, 2, . . . }, there is a seller and some arbitrary poten
tial buyers for the resource. Uncertainty is defined on a Borel probability space (Ω, F, P).At
date t, the seller specifies a public information policy given by an increasing filtration of public
history σ-algebras F t with F 0 trivial. Alongside {F t}, the seller posts a Ft–measurable mech
anism Γt from a given Ht where Ht is a Polish space of mechanisms, and could be executed in
date t.1 The posterior space E = ∆(Θ), with Θ Polish and equipped with the Borel σ-algebra
under the weak topology, is Polish. The set
M := Mt = (F t, Γt) | t ∈ T
1For example: post a price; offer a menu; run an auction; or specify a timing lottery. A submechanism Γt is said to be Ft–measurable if its realization depends only on the public histories information available at date t.
5

is the seller’s mechanism calendar. Let G(M) be the seller’s revenue. All players observe M
about payoff-relevant primitives are updated via Bayes’ rule. Given the buyers’ equilibrium
behavior, the resource may or may not be sold. Let τ ∈ T ∪{∅} denote the date in which the
resource is actually allocated to buyers. If τ = ∅, no sale ever occurs.
Assumption 1 (No intertemporal commitment). At each date t and after any public history
F t, the seller chooses a submechanism Γt ∈ Ht that is F t-measurable; past announcements
about future submechanisms are not binding.
Assumption 1 does not require credibility for future submechanisms that are never exe
cuted, and relies only on the credibility of the date-t submechanism. given (Ft, Γt) all agents
play the induced Bayesian game in date t, and play of the overall dynamic game follows a
Bayesian equilibrium.
Assumption 2 (Single-shot resource). The resource is economically single-shot: it can be
allocated at most once. If the resource is assigned to some buyers, the transfers are made,
then no later date t′ > t can generate additional surplus through any Mt′.
Assumption 2 restricts how many times the resource can be exercised but not what occurs
before that exercise. Without intertemporal commitment, the seller may design public ex
periments prior to trade, observe the evolution of beliefs, and choose the execution date; the
resulting program delivers an optimal ex-ante value. Thus dynamic information design and
timing are genuine decision margins.2
Observation 1 (Local cash-out). At any t, the seller always has an absorbing action: starting
at t, release no additional public information and make no further attempts to trade until the
seller chooses to execute some static submechanism.
Observation 1 is an availability claim, not a value-preserving transformation: the seller
may enter an absorbing ‘no further information’ mode at any history; we do not assert that
doing so is without loss.
For each date t, public σ-algebra F t, and submechanism Γt ∈ Ht, we represent the primitive
mechanism technology by a correspondence
Rt[F t, Γt] : Ω ⇒ R,
where Rt[F t, Γt](ω) is the set of seller revenues that can be implemented at date t in state
ω when agents play the Bayesian game induced by (F t, Γt).3 In other words, Rt is a F t
2If Assumption 2 does not hold, the problem might degenerate into a simple situation of finding the suboptimal solution at each t, for instance, if trading is allowed once for every t. 3We exclude the meaningless case in which Rt(F t, Γt) is constant.
6

measurable random feasible–revenue correspondence:
Rt[F t, Γt](ω) := { r ∈ R : r is implementable at t given F t(ω) and Γt }.
Rt is nonempty and bounded above. Its graph
Gr(Rt) := { (ω, Γt, r) ∈ Ω × Ht × R : r ∈ Rt }
is an analytic (Suslin) subset of Ω × Ht × R. Hence sup Rt F t, Γt is upper semianalytic and
admits a universally measurable version.
The standard setting is satisfied in familiar Bayesian mechanism environments, for instance
when Rt[F t, Γt] is the set of seller revenues generated by Bayesian Nash equilibria, or by
Bayes–correlated outcomes, of the stage subgame induced by (F t, Γt). Furthermore, we do
not generally require an explicit solution for all equilibrium strategies of the stage game induced
by (F t, Γt). The revenue correspondence Rt[F t, Γt], is just induced by the primitive Ht and
policy Ft to summarize the seller revenues that are attainable at date t under some admissible
behavior of the agents.45
3 Collapse statistic
3.1 Date-wise collapse
We now formalize the notion of a collapse variable and give several equivalent characterizations
that are convenient for verification in economics. Retain analytic graphs and boundedness,
let St be a Borel version of the posterior kernel given F t. It is F t–measurable and {St} is a
bounded (F t)–martingale.
Lemma 1. Under the Bayesian primitives (Θ, E = ∆(Θ)) and public filtration (F t)t∈T , there
exists an F t-measurable posterior kernel St : Ω → E such that, for all bounded Borel φ on Θ,
Z
Θ
φ dSt = E φ(θ) | F t a.s.
In particular, {St}t≥0 is a bounded (F t)-martingale: E St+1 | F t = St a.s.
The Lemma 1 states that public learning follows Bayes’ rule and exhibits no predictable
drift in expectation: given the current public history Ft, future public signals only deliver
4For example, under a given equilibrium notion and selection rule, or under a conservative lower bound on equilibrium payoffs. 5All subsequent value functions and comparative statements are therefore understood relative to the primitive: if, in application, Ht is specified as a strict inner approximation of the true feasible submechanism, our results continue to apply.
7

a mean-preserving refinement of beliefs about the state θ, and thus do not systematically
raise or lower its mean. Consequently, all θ-relevant content in Ft is summarized by the
“public posterior” St (a sufficient statistic in the Doob–Dynkin sense). The boundedness
ensures the integrability required to legitimize technical steps such as optional sampling and
concavification.6
Consider the date-t function under a public information σ-algebra G, let U G
t : E → R be
Borel maps:
UG
t (s) := sup
Γ: G-meas.
ess sup
n
Rt[F t, Γ] St = s
o
, Ut(s) := U σ(St)
t (s),
and for any non-posterior public variable Yt inside F t, let U (St,Yt)
t (s) := U σ(St,Yt)
t (s).
Lemma 2. U G
t (s) admits a version that is bounded and upper semianalytic on E.
Until now, public histories information F t admits a clean decomposition into two parts:
posterior information St, which determines “what we believe about the state,” and non
posterior public historical variable {Y (1)
t , ...}, which determine “what can be done today under
the same beliefs.” Contrast with strands of the literature, we explicitly separate posterior in
formation, which changes beliefs about the state, from non-posterior public features, which
alter the date-t implementable set, holding the posterior fixed. Thus, when the buyer’s time
preferences are unknown to the designer and modeled as random, they are embedded in the St
component. By saying ”embedded”, we mean that the primitive state θ is allowed to include
any payoff-relevant uncertainty that is subject to Bayesian updating—values, costs, discount
factors, long-run types, and so forth. All of these can be treated as part of θ and therefore as
part of the posterior St. By contrast, waiting and other realized aspects of the trading history
are embedded in the Yt component. Substantively, this construction recasts standard dynamic
ingredients within the (St, Yt) analytical framework.7
Under the (St, Yt) decomposition, the remaining primitive and non-random objects are
the underlying technological and preference parameters, such as common-knowledge cost pro
cesses, the seller’s discount factor, and institutional constraints on transfers. These primitives
are embedded in the per-t submechanism space Ht and are taken as given when we evaluate
the dynamic value.
Definition 1. A public variable Y is collapsible at date t to G iff
U (G,Y )
t (s) = U G
t (s) for all s ∈ E.
6Ft still contains additional public history details, that do not alter St; while they do not update beliefs about θ, they can affect the period-t feasible set and value through constraints or feasibility. 7This complements the information-structure perspective in Forges (2020), given a representation of dynamic interaction in terms of information structures and posterior processes, they characterize which public states can be dropped, in an ex-ante sense, without changing the attainable revenue f-
rontier.
8

Proposition 1 (Basic algebra). Fix t, then:
(a) Function closure. If Yt is collapse, then φ(Yt) is collapse for any Borel φ.
(b) Independent labels. If Zt is public and conditionally independent of primitives given St,
then Zt is collapse. Moreover, any (Yt, Zt) with Yt collapse remains collapse.
(c) Meet-closure and downward-closure. DS
t is closed under arbitrary intersections and is
downward closed: if Q ⊆ G ∈ DS
t then Q ∈ DS
t.
(d) No general join-closure. In general, DS
t is not closed under joins: it may happen that
σ(St, Y (1)
t ) ∈ DS
t and σ(St, Y (2)
t ) ∈ DS
t while σ(St, Y (1)
t , Y (2)
t ) ∈/ DS
t .8
The value-invariance lattice at date t: DS
t := G : σ(St) ⊆ G ⊆ F t, U G
t = US
t is
nonempty, as it contains σ(St).
Definition 1 organizes “date-t deletable public information” into a value-equivalence frame
work: the notion of collapse replaces Blackwell (1953) statistical sufficiency with objective
function sufficiency. In particular, the non-join-closure (d) of Proposition 1 reveals comple
mentarities among public details and a key risk: details that are each “non-improving” in
isolation may complement one another when combined, thereby allowing the mechanism to
raise the value upper bound.
Proposition 2. Any non-posterior public variable Yt is collapsible at date t to G such that
σ(St) ⊆ G ⊆ F t, iff
UFt
t (s) = Ut(s) for all s ∈ E.
We say that the mechanism collapses on date t.
Intuitively, observing Yt as ”promised utility”, ”eligibility”, ”inventory”, or ”reputation”
can be suggestive, but it does not determine whether Yt is collapsible. Even when Yt is
policy–dependent, it may still collapsiable. To avoid perceptual guesswork, we provide three
verifiable certificates that certify when Yt can be safely deleted; see Section A.3.
8The appendix provides a simple example 1.
9

σ(St) σ(St, Y (1)
t)
in DtS
σ(St, Y (2)
t)
in DtS
σ(St, Y (1)
t , Y (2)
t)
not in DtS
DtS = {G : U G
t = UtS }
include Y (1)
t
include Y (2)
t
Figure 1: Illustration of the value-invariance lattice DS
t : the shaded region contains those
public histories G for which U G
t = US
t (downward- and meet-closed). Both σ(St, Y (1)
t ) and
σ(St, Y (2)
t ) lie in DS
t , but their join σ(St, Y (1)
t , Y (2)
t ) (top-right corner) may fall outside DS
t , so DS
t is not generally closed under joins.
3.2 From date-wise to calendar global
Given histories information Gt = σ(St, Y (1)
t , ...) ⊆ F t, to record the best revenue the seller can
obtain by choosing an execution date t for each posterior belief s, denote
g(s) := sup
t∈T
Ut(s), gb(s) := sup
t∈T
U Gt
t (s),
Assumption 3 (Regularity of reduced-form values). For each t and each public σ-algebra G
with σ(St) ⊆ G ⊆ F t, the reduced-form value U G
t : E → R admits a lower semicontinuous
version.
Assumption 3 is satisfied in familiar standard mechanism-design environments studied in
the literature. In continuous-type settings with quasilinear utilities and uniformly bounded
transfers, equilibrium payoffs are continuous in types and allocations, so the seller’s date-t
revenue as a function of beliefs is upper semicontinuous; see, for example, Myerson (1981) and
Pavan et al. (2014). Taking suprema over incentive-compatible mechanisms preserves upper
semicontinuity, and hence the negative of revenue is lower semicontinuous. More generally,
under the usual compactness and continuity assumptions on primitives, the reduced-form rev
enue curves that arise in the literature, including implementations based on Bayes–correlated
equilibria, dominant strategies, and Bayes–Nash equilibria—are lower semicontinuous on the
belief space; see, e.g., Bergemann and Morris (2016). If we drop Assumption 3, all of the
subsequent “if and only if” results should be read as providing sufficient conditions but no
longer necessary ones.
Its concave envelope conc g is the tight upper bound on ex-ante revenue over all dynamic
10

information structures. Write Affc(E) for the set of continuous affine maps l : E → R, and
define the concave envelope of g : E → R by
(conc g)(s) := inf{ l(s) : l ∈ Affc(E), l ≥ g }.
For each ε > 0, define
Lε
g(S0) :=
n
l ∈ Affc(E) : l ≥ g on E, l(S0) ≤ (conc g)(S0) + ε
o
.
Theorem 1 (Information Gt ε-no-gain). The following are equivalent:
(conc gb)(S0) = (conc g)(S0). (a)
∀ ε > 0, ∃ lε ∈ Lε
g(S0) such that gb(s) ≤ lε(s) ∀ s ∈ E. (Aε)
Moreover, to the global datewise condition
∀ ε > 0, ∃ lε ∈ Lε
g(S0) such that U Gt
t (s) ≤ lε(s) ∀ s ∈ E, ∀ t ∈ T. (A′
ε)
Allowing richer public histories {Gt} and a larger menu of submechanisms expands each
date-t value U Gt
t and thus gb(s) = supt U Gt
t (s). Theorem 1 shows that the seller gains no
additional ex-ante value at the prior S0, if and only if there exists an affine ’shadow value’ l
on the belief space that simultaneously supports g at S0 and majorizes all date-wise values
U Gt
t . In this case, all non-posterior public details and calendar elaborations are globally value
irrelevant for the seller: they may raise revenue at some beliefs and dates, but an optimal
information structure from S0 never visits those beliefs, so the concavified revenue at S0
remains unchanged,9, as the following proposition. We say that the information histories Gt
has no non-posterior gain if equation (a) holds under the histories Gt, as the non-posterior
public variable {Y (1)
t , ...} has no value. Conversely, this is not true.
Proposition 3. If the mechanism calendar collapses on every t ∈ T , then any information
Gt = σ(St, Y (1)
t , ...) ⊆ F t has no non-posterior gain.
9The appendix provides a simple example 2.
11

S0
Belief s
Revenue
g(s) gb(s) affine l(s)
Figure 2: Richer public histories enlarge the date-wise values U Gt
t and hence gb(s) = supt U Gt
t (s) (red dashed) relative to g(s) = supt Ut(s) (blue solid). Theorem 1 states that there is no additional ex-ante gain at S0 if and only if there exists an affine “shadow value” l (green dash–dotted) that supports g at S0 and uniformly dominates all date-wise values U Gt
t . In this case, non-posterior public details and calendar elaborations are globally value-irrelevant for the seller.
3.3 Discussion: the role of information and submechanisms
A natural concern is that Ft is ”only” an information σ-algebra, while the upper bound on
feasible revenues is determined by the collection of F t-measurable submechanisms Γt ∈ Ht.
This subsection explains why we treat information as the source of dynamic value rather than
the availability of more intricate submechanisms.
At date t, the given primitives are the space of feasible submechanisms Ht and the prior
S0, which, combined with seller’s history information policy σ-algebra F t, induce the revenue
correspondence Rt[F t, Γt], As we know, fixing t pins down the underlying trading technology.
Thus public σ-algebra G with σ(St) ⊆ G ⊆ F t can be viewed as the collection of public events
on which the contract is allowed to condition. A G-measurable submechanism is a rule that
may prescribe different allocations and transfers on different G-events, but cannot distinguish
histories that are indistinguishable under G. Thus, once t and the primitive technology Ht
are fixed, the set of feasible history-contingent mechanisms at date t is completely determined
by the information σ-algebra G: enlarging G enlarges the set of G-measurable submechanisms
and may raise the upper envelope of implementable revenues.
For a given information state G = σ(St, Y (1)
t , ...) and belief s, a rational seller chooses a
submechanism that attains this upper bound whenever possible. The effect of richer public
histories is thus to expand, through Rt[F t, Γt], the implementable revenue frontier at (G, s);
taking the supremum over Γ makes this frontier explicit. In this sense, the static mechanism
technology {Ht, Rt} is encapsulated in the indirect value U G
t , much as indirect utility encap
sulates preferences over bundles in static consumer theory. Moreover, every unknown dynamic
ingredient can be embedded in an algebraic analysis framework as part of G. The remaining,
12

known primitives are embedded in the submechanism space Ht, so the static submechanism
technology itself should not be taken as the main object of analysis.
Once we work with the reduced forms {U G
t }, different mechanism calendars matter only
through the information σ-algebras they make available at each date. Because U G
t already
reflects the optimal use of the given primitive at each information state, any gap between g
and gb at a belief s is entirely due to the additional public details contained in F t beyond
σ(St): richer public histories refine the partition of states and enlarge the implementable
revenue frontier at some beliefs. Our notion of ”dynamic value” is exactly this contribution of
finer conditioning on public histories, rather than the sheer availability of more complicated
static submechanisms.10
4 Mechanism calendar collapses
4.1 Terminal mechanism
Definition 2 (Collapse). We say that the mechanism calendars collapse if, for every ε > 0,
there exists a terminal calendar Mfε such that
E G(Mfε) ≥ sup
M
E[G(M)] − ε,
A mechanism is called terminal if it has the following structure:
(i) At date 0, the seller conducts a single public experiment on the posterior space E with
support {S1, . . . , SK, . . . } ⊂ E and probabilities {πk} such that P πk Sk = S0. The
realized posterior Sk becomes common knowledge.
(ii) There exists a mapping t : E → T such that the seller selects the deterministic date
t(S) and, only at that date, executes a terminal submechanism Γt(S)(S) that uses no
additional public information beyond S and entails no further strategic interaction or
public disclosure thereafter.
Theorem 2 (Structural Collapse). mechanism calendars collapse if and only if the global
condition holds:
∀ ε > 0, ∃ lε ∈ Lε
g(S0) such that U Ft
t (s) ≤ lε(s) ∀ s ∈ E, ∀ t ∈ T. (A′′
ε)
10In spirit, this reduction is close to the state-compression ideas used to recast sequential screening problems as static screening problems on an augmented state space (e.g. Kr ̈ahmer and Strausz, 2017), but here it is carried out in a general Bayesian mechanism environment and phrased in terms of belief-based value functions g and gb.
13

According to Theorem 2, the entire dynamic mechanism calendar is ex-ante equivalent
to a terminal design that (i) conducts a single information experiment on E at date 0, and
(ii) at the realized posterior S, chooses a static submechanism and a deterministic execution
date t(S), with no further public disclosure or strategic interaction thereafter. All apparent
dynamic richness in the sequence {Γt} can be compressed into a one-shot experiment and a
posterior-dependent static choice.
In a terminal mechanism of Definition 2, the designer conducts at date 0 a public informa
tion experiment with countable support {Sk}k∈K ⊂ E, and then, in the underlying Bayesian
environment, one may start from arbitrary signal structures and hence arbitrary laws π of
posteriors on E. For any bounded belief-based payoff and any ε > 0, there exists a probability
measure πε on E with countable support. Thus, the supremum ex-ante value over all infor
mation structures can be ε-approximated by terminal experiments with countable support.
Recall that in our setting the revenue correspondence Rt F t, Γt being bounded above is
not an operational requirement that the designer be able to compute the exact upper bound
at each history. Instead, it could be a structural restriction on the given primitives: there
exists some finite constant such that no admissible Ft-measurable submechanism at date t
can generate revenue above it in any state.11 Our main results are formulated relative to
these primitives. Given Ht, the analyst is free to specify Rt as coarsely or as tightly as
convenient. In particular, testing whether a given environment exhibits collapse does not
require solving explicitly for all equilibria or computing a closed-form expression for U G
t ; it
only requires that the modeller accept a primitive bounding of feasible revenues in the sense
above. Given primitives, a mechanism calendar is then a choice of public histories {F t}t∈T
and F t-measurable submechanisms {Γt ∈ Ht}t∈T . When we say that the mechanism calendar
“collapses”, we mean that, within these fixed primitives, every optimal dynamic calendar can
be replaced, without ex-ante ε-loss, by a terminal mechanism.
Corollary 1. Suppose the mechanism calendar M collapses. Then the seller’s optimal ex-ante
revenue is ε-achieved by a terminal mechanism M f ε.
A natural concern is that the terminal calendars in Definition 2 require the execution
date to be a deterministic function t(S) of the date-0 posterior. This restriction excludes
mechanisms in which the allocation timing itself depends on signals realized after date 0.12 In
such environments, Theorem 2 should therefore be interpreted as providing an ex-ante upper
bound, and the diagnostic tools developed in the paper remain valid without change. At a
purely representational level, however, our state space Θ is allowed to be infinite-dimensional,
11The familiar applications follow from standard economic bounds: for example, quasilinear utilities with bounded values and transfers, or exogenous constraints on maximal payments. 12For instance, dynamic search and optimal-stopping problems with recall in the spirit of Weitzman (1979), auction-timing and real-options models where the seller optimally chooses when to run the auction (e.g. Cong, 2020). Such models extending the collapse characterization to them is left for future work.
14

so in principle the model can embed an entire future signal path into the primitive state θ, and
let (F t) be the filtration generated by its coordinate projections. Under such an embedding
any dynamic stopping policy can be viewed as the outcome of a single date-0 experiment on
the posterior space E, followed by a deterministic execution date t(S). In that sense, the
collapse characterization in Theorem 2 continues to apply.
4.2 Proof roadmap, tools, and technicals
This subsection sketches the proof of Theorems 1 and 2 and indicates their scope. The
arguments rely on three ingredients:
(i) a reduction from dynamic mechanism calendars to belief-based value functions on the
posterior space;
(ii) a martingale concavification step, as in the Bayesian persuasion literature;
(iii) a dual, affine-support characterization of concave envelopes in belief spaces.
Dynamic reduction: from calendars to belief-based values. Given Assumptions 1–2
and buyers’ Bayesian behavior, the seller’s date-t revenue possibilities are summarized by the
correspondence Rt[F t, Γt] ⊆ R, whose graph is analytic and bounded above. For a public
σ-algebra G with σ(St) ⊆ G ⊆ F t, we define, by Lemma 2, the reduced-form value
UG
t (s) := sup
Γ: G-meas.
ess sup
n
Rt[F t, Γ] St = s
o
, s ∈ E.
Conditional on a public state (G, s), we take the supremum over all feasible G-measurable
submechanisms. The mechanism technology {Ht, Rt} is therefore fully captured by the family
of value functions {U G
t }; the submechanisms Γt are “optimized away” inside these reduced
forms.
We then introduce the two benchmark maps g(s) and gb(s) which compare, belief by belief,
the best values attainable when the seller can condition only on the posterior St versus on the
richer public history Gt.
Martingale concavification on the posterior space. As Lemma 1 states that, the pos
terior process {St}t≥0 is a bounded (F t)-martingale with values in E = ∆(Θ), endowed with
the weak topology.13Any public information policy, possibly dynamic and history-dependent,
13This is the standard martingale structure in information design and repeated games with incomplete information (e.g. Aumann et al., 1995; Bergemann and Morris, 2016).
15

induces a law of (St)t≥0 that is a martingale with given S0, and conversely such laws can be
implemented by suitable public experiments on E.14
Given a bounded belief-based payoff φ : E → R, the seller’s ex-ante problem over all such
martingale laws is a pure concavification problem:
sup
feasible laws of (St)
E[φ(Sτ )] = (conc φ)(S0),
where τ is the stopping time at which the resource is allocated. This is the usual value–concavification
equivalence from static Bayesian persuasion (Kamenica and Gentzkow, 2011), applied here to
the dynamic value functions g and gb that already embed optimal submechanism choice. In
particular, the optimal ex-ante values under terminal calendars and under general calendars
are
V term = (conc g)(S0), V cal = (conc gb)(S0).
Assumptions 1–2 ensure that the seller never benefits from delaying trade once a given belief
has been reached, so the trade date enters only through the concavification over belief paths.
Affine supports in infinite-dimensional belief spaces. The posterior space E = ∆(Θ)
is typically infinite-dimensional whenever Θ is non-finite. We work with the weak topology,
under which E is a compact, convex, metrizable subset of a locally convex topological vector
space. In this setting, the concave envelope of any bounded function f : E → R admits the
classical dual representation
(conc f )(s) = inf{l(s) : l ∈ Affc(E), l ≥ f }, s ∈ E,
where Affc(E) denotes the family of continuous affine functionals on E; see, for instance,
Tyrrell Rockafellar (1970, Thm. 5) and Aliprantis and Border (2006, Ch. 6). Moreover, for
every s0 ∈ E and ε > 0 there exists an ε-supporting affine functional: some l ∈ Affc(E) such
that l ≥ f and l(s0) ≤ (conc f )(s0) + ε.
We apply this convex-analytic machinery to the posterior-based benchmark g. The fam
ily Lε
g(S0) collects precisely those affine ε-supports of g at S0. The key observation behind
Theorem 1 is that the ex-ante no-gain condition
(conc gb)(S0) = (conc g)(S0)
is equivalent to the existence, for each ε > 0, of an affine shadow value lε ∈ Lε
g(S0) that uni
formly dominates all date-wise values under the richer information, U Gt
t ≤ lε. The implication
14In the finite-type case this is immediate; in more general Polish settings one can argue via standard disintegration and measurable selection, as in Doval and Skreta (2024) and related work.
16

(A′′
ε)⇒(a) follows from the infimum representation of conc gb and the inequalities g ≤ gb ≤ lε.
The converse (a)⇒(A′′
ε) constructs such lε as ε-supports of gb, which also majorize g and hence
belong to Lε
g(S0). The equivalence between the pointwise condition (Aε) and the date-wise
condition (A′′
ε ) is immediate from gb(s) = supt U Gt
t (s).
A technical subtlety is that the belief space is infinite-dimensional and the functions g, gb
need not be continuous. We use boundedness and analytic-graph assumptions on the revenue
correspondences Rt to ensure that the date-wise values U G
t are upper semianalytic and hence
universally measurable (Lemma 2). This permits us to apply the convex-analytic results in a
pointwise fashion at the prior S0, while keeping all value functions measurable enough for the
martingale arguments.
From concavification equality to structural collapse. Theorem 2 identifies structural
collapse with the global affine-support condition (A′′
ε ). The value representation
V term = (conc g)(S0), V cal = (conc gb)(S0),
combined with Theorem 1, implies that (A′′
ε ) holds if and only if V cal = V term. Since terminal
calendars form a subset of all calendars, this equality is equivalent to the existence, for every
ε > 0, of a terminal calendar whose ex-ante revenue is within ε of the optimal calendar value,
that is, to collapse in the sense of Definition 2.
In summary, the proofs combine posterior martingales, concavification, and affine supports
in infinite-dimensional spaces to convert the dynamic mechanism calendar into a geometric
condition on the belief space. These tools remain valid in the general Polish type spaces we
consider.
4.3 A diagnostic for non-posterior dynamic value
We next introduce a simple geometric diagnostic, based on Lε
g(S0), for detecting when non
posterior public histories create genuine dynamic value beyond terminal calendars.
Fix a prior S0 ∈ E and ε > 0. Let
Hε(s) := sup
l∈Lεg (S0 )
l(s), s ∈ E,
be the pointwise envelope of affine functions in Lε
g(S0). The non-posterior gain test region at
S0 is
Bε(S0) := (s, r) ∈ E × R : r > Hε(s) .
Given a mechanism calendar M = {(F t, Γt)}t∈T , we say that M hits the test region if there
17

exist t ∈ T and a belief s ∈ E such that
s, U Ft
t (s) ∈ Bε(S0). (test)
Hε collects all affine ε–supports of the posterior-based benchmark g(s) = supt Ut(s) at S0;
the region Bε(S0) consists of belief–revenue pairs that lie strictly above every such support.
Hitting this region means that the calendar attains, at some belief s, a revenue that cannot
be bounded by any posterior-based affine shadow value compatible with g at S0.
Proposition 4. If the mechanism calendar M collapses, then for every ε > 0, the calendar
never hits the non-posterior gain test region Bε(S0).
The family Lε
g(S0) is entirely pinned down by the posterior-based benchmark g(s) =
supt Ut(s) and the prior S0: it is the set of affine ε-supports of the concave envelope conc g
at S0. In particular, Lε
g(S0) does not depend on non-posterior public histories or the detailed
dynamic calendar structure. Given a specific calendar M = {(F t, Γt)}t∈T , the test region
Bε(S0) becomes operational through the date-wise values U Ft
t . hitting this region is a suffi
cient certificate that non-posterior public histories F t generate genuine dynamic value beyond
terminal calendars, whereas avoiding it is a necessary condition for structural collapse.
S0
(a)
Belief s
Revenue
g(s) gb(s) l(s) l′(s)
(b) Eq (a) fails if gb enters this region
Belief s
Revenue
g(s) gb(s) l(s)/l′(s)
Figure 3: Panel (a) illustrates Lε
g(S0) in Theorem 1: a concave date-wise revenue g (blue), an expanded revenue gb ≥ g (red dashed), and two affine functions l, l′ in Lε
g(S0). Here gb exceeds l at some beliefs, so this particular l cannot certify condition (Aε), but there exists another affine support l′ that still dominates gb pointwise. Panel (b) shows the pointwise envelope supl∈Lεg(S0) l(s) (grey) induced by the family Lε
g(S0). Any gb that lies strictly above this envelope
at some belief s must violate condition (Aε), and hence (conc gb)(S0) > (conc g)(S0). Thus the shaded region in panel (b) is a sufficient “bad” region for the failure of Eq (a).
5 Applications and Diagnostics
5.1 A loan–probation example
This subsection presents a one-dimensional example that illustrates the shadow-value condition
and separates local date-wise improvements from gains in the concavified ex-ante value.
18

Consider a pool of borrowers with credit type θ ∈ {H, L}. Let p := Pr(θ = H) ∈ [0, 1]
denote the public posterior for a randomly drawn borrower and let S0 = p0 = 0.8 be the prior.
When submechanisms may condition only on p, the date-1 reduced-form revenue is
gab(p) := 0.4 + 0.2 min{p, 1 − p}, p ∈ [0, 1]. (5.1)
One may interpret gab as the envelope of two loan products.On [0, 1
2 ], gab(p) = 0.4 + 0.2p, and
on [ 1
2 , 1], gab(p) = 0.4 + 0.2(1 − p) = 0.6 − 0.2p. Thus conc gab = gab, and (conc gab)(S0) =
gab(0.8) = 0.44.
At S0 = 0.8, the left and right derivatives of gab coincide and are equal to −0.2, so the
subdifferential at S0 is the singleton {−0.2}. The unique affine support of gab at S0 is
l(p) := gab(0.8) − 0.2(p − 0.8) = 0.6 − 0.2p.
Hence the envelope of all affine supports at S0 is
H0(p) := sup
l∈Lg0ab (S0)
l(p) = l(p) = 0.6 − 0.2p.
On A := [0, 1
2 ],
gab(p) = 0.4 + 0.2p, H0(p) − gab(p) = 0.2 − 0.4p.
Now introduce a non-posterior public label Y a that is available only when p ∈ A. One can
interpret Y a as the repayment outcome of a small probationary loan. Conditional on p, the
distribution of Y a is already summarized by p itself; the role of Y a is to expand the set of
feasible date-1 submechanisms and hence the reduced-form frontier U F1
1 (p).15
Allowing submechanisms to depend on (p, Y a) rather than on p alone yields a new reduced
form frontier of the form
gb(p) :=



gab(p) + δ, p ∈ [pL, pU ],
gab(p), otherwise,
for some interval [pL, pU ] ⊂ (0, 1
2 ) and δ := infp∈[pL,pU ] gb(p) − gab(p) > 0. The scalar δ indexes
the size of the local improvement generated by the additional label Y a within the reduced-form
15Formally, Y a refines the revenue correspondence R1[F 1, Γ1] at beliefs p ∈ A, and thereby enlarges the
reduced-form value U F1
1 (p). In a fully specified model, Y a ∈ {0, 1} could be the repayment outcome of a small
test loan, and the bank could offer continuation contracts that condition on Y a. For suitable parameters, the resulting incentive-compatible Bayesian Nash equilibrium generates a local improvement of expected revenue on an interval [pL, pU ] ⊂ (0, 1
2 ) and thus induces a frontier gb of the form displayed below. Constructing such a microfoundation is straightforward but model-specific: it requires choosing functional forms, a particular signal structure, and an equilibrium selection rule, and leads to several pages of algebra that do not affect the geometric arguments of this section. Since the main results of the paper are formulated entirely at the reduced-form level, in terms of the belief-based frontiers g and gb generated by {Rt}t∈T , we-
 keep the example
at this abstract level and let the scalar δ below parameterize the strength of the local improvement in U F1
1 (p).
19

revenue frontier.
Fix [pL, pU ] = [0.1, 0.3]. On A, H0(p) − gab(p) = 0.2 − 0.4p, which is strictly decreasing in
p on [0, 1
2 ]. Hence infp∈[0.1,0.3] H0(p) − gab(p) = H0(0.3) − gab(0.3) = 0.2 − 0.4 · 0.3 = 0.08. Let
δmax := 0.08.
If 0 < δ ≤ δmax, then
gb(p) ≤ H0(p) ∀p ∈ [0, 1].
In particular, gb(p) > gab(p) on [0.1, 0.3]: the additional label Y a strictly improves the date-1
revenue frontier on a non-trivial set of beliefs. However, the frontier gb still lies below the affine
support H0 at S0. By Theorem 1,
(conc gb)(S0) = (conc gab)(S0) = 0.44.
Thus, although Y a raises revenues locally in p, it has no additional ex-ante value at the prior
and the optimal mechanism calendar remains ex-ante equivalent to a terminal, posterior-based
design. This parameter region therefore illustrates the case in which introducing a richer label
enlarges U Ft
t at some beliefs but does not affect collapse.
If δ > δmax, then there exists p⋆ ∈ [0.1, 0.3] with
gb(p⋆) > H0(p⋆),
so (p⋆, gb(p⋆)) ∈ B0(S0) and
(conc gb)(S0) > (conc gab)(S0).
In this case the non-posterior label Y a generates strictly positive dynamic value.
In summary, the loan–probation example separates two phenomena. For δ ≤ δmax, the
label Y a expands the date-wise frontier but remains dominated by the affine shadow value at
S0, so concavification and collapse are unchanged. Once δ is large enough that gb lies above
H0 at some belief, the calendar ceases to collapse and non-posterior public labels become
genuinely value-relevant.
5.2 Diagnosing history-dependence in canonical models
We now apply the collapse statistic and the non-posterior gain region to two benchmark
models that have shaped the modern literature on dynamic mechanism design. In each case,
the diagnostic yields a clean, reduced-form statement about whether the additional state
variables used in the standard formulation are ex-ante redundant from the prior S0.
20

5.2.1 Dynamic pricing with fluctuating supply cost
Consider a simple dynamic pricing environment in which the seller faces i.i.d. cost shocks
ct ∈ {cL, cH} and sells a single unit to buyers with known values, in the spirit of dynamic
revenue-management models such as Board and Skrzypacz, 2016.
For clarity, suppose that at each date t the public history decomposes as F t = σ(St, Yt),
where St is the posterior over all payoff–relevant primitives and Yt collects non-posterior public
labels generated by past behavior. Under this convention, cost shocks ct are part of the
primitive state and hence of St, rather than of Yt. By contrast, Yt is naturally interpreted as
the history of buyers’ actions, bids, accept decisions, participation and reputation variables.
When realized costs are never directly observed or learned by the buyers: for instance,
because buyers care only about posted prices and product attributes, not about the seller’s
internal cost fluctuations. In that case, whether the mechanism calendar collapses is entirely
driven by the collapsibility of the buyers’ action history Yt. If Yt is collapsible at every
date, then the calendar is equivalent to a terminal mechanism (Proposition 3): costs enter
only through the posterior path S and the associated date mapping t(S), which selects the
execution date of the static submechanism. In particular, when the cost process ct is the main
driver of t(S), the terminal description makes precise the usual intuition that optimal trade is
concentrated in relatively low-cost periods.
When realized costs are learned by the buyers, and let Y c
t denote the enlarged public history
that records both buyers’ actions and whatever cost information Whether this additional cost
disclosure creates genuine dynamic value is then captured exactly by the global condition in
Theorem 2 applied to the histories F t = σ(St, Y c
t ): if, for every ε > 0, there exists lε ∈ Lε
g (S0 )
such that
U (St,Ytc)
t (s) ≤ lε(s) ∀ s ∈ E, ∀ t ∈ T,
then public learning about costs is redundant for the seller’s objective, and the optimal cal
endar still collapses to a terminal. Conversely, if this inequality fails for some ε > 0, buyers’
information about the historical path of costs strictly enlarges the concavified revenue relative
to the terminal benchmark, so the realization of cost shocks becomes a genuinely value-relevant
component of the public history.
5.2.2 Dynamic screening and promised utilities
Consider a standard dynamic screening environment with a long-lived agent whose type θ ∈ Θ
is fixed forever (see, e.g., Courty and Li, 2000; Pavan et al., 2014). In the usual recursive
formulation, the public state at date t is summarized by two variables: the current belief
St ∈ ∆(Θ) and the promised-utility state wt ∈ R.
The natural question, in our language, is whether conditioning on wt creates dynamic
21

value beyond what can be achieved by conditioning only on St. In many benchmark dynamic
screening models, including those studied by Pavan et al. (2014), the optimal dynamic contract
can deliver strictly higher ex-ante value than natural static benchmark mechanisms that ignore
promised-utility states. Within our framework this corresponds to
(conc gb)(S0) > (conc g)(S0),
so gb must lie strictly above g at some beliefs, and wt is not collapsible at those beliefs in the
sense of Proposition 2. Equivalently, there exist dates and beliefs at which (St, wt) attains
belief–revenue pairs in a non-posterior gain region Bε(S0), and any seller-optimal calendar
that attains the dynamic benchmark value has to exploit dependence on the promised-utility
state.
By contrast, the diagnostic also points toward situations in which collapse is a good ap
proximation. For example, in certain quadratic environments with uniform types (in the spirit
of Battaglini, 2005) the reduced-form value function can be linear in wt, so U Ft
t (s) is affine
in the non-posterior state and admits affine supports that depend only on St. Similarly, in
simple two-type models with very impatient agents, where the optimal policy separates im
mediately and the continuation promised utility becomes constant, the additional state wt is
effectively frozen after the initial period and need not expand the concavified frontier relative
to a posterior-only design.
In this sense, promised utility typically plays a substantive dynamic role in those dynamic
screening environments that exhibit strict dynamic gains in the literature, while the affine
support condition provides a simple way to identify special parameter regions in which history
dependence collapses and the recursive state can be compressed back to beliefs alone.
References
C. D. Aliprantis and K. C. Border. Infinite Dimensional Analysis: A Hitchhiker’s Guide.
Springer, 3 edition, 2006.
R. J. Aumann, M. Maschler, and R. E. Stearns. Repeated games with incomplete information.
MIT press, 1995.
I. Ball. Dynamic information provision: Rewarding the past and the future. Econometrica,
2023.
S. R. Balseiro, A. Kim, and D. Russo. On the futility of dynamics in robust mechanism design.
Operations Research, 69(6):1767–1783, 2021. doi: 10.1287/opre.2021.2122.
22

M. Battaglini. Long-term contracting with markovian consumers. American Economic Review,
2005.
D. Bergemann and S. Morris. Information design, bayesian persuasion, and bayes correlated
equilibrium. American Economic Review, 106(5):586–591, 2016.
D. P. Bertsekas and S. E. Shreve. Stochastic Optimal Control: The Discrete-Time Case.
Academic Press, 1978.
D. Blackwell. Equivalent comparisons of experiments. The annals of mathematical statistics,
pages 265–272, 1953.
S. Board and A. Skrzypacz. Revenue management with forward-looking buyers. Journal of
Political Economy, 124(4):1046–1087, 2016.
P. Bolton and M. Dewatripont. Contract Theory. MIT Press, Cambridge, MA, 2005.
C. Castaing and M. Valadier. Convex Analysis and Measurable Multifunctions. Springer, 1977.
L. W. Cong. Timing of auctions of real options. Management Science, 66(9):3956–3976, 2020.
doi: 10.1287/mnsc.2019.3374.
P. Courty and H. Li. Sequential screening. Review of Economic Studies, 67(4):697–717, 2000.
doi: 10.1111/1467-937X.00151.
L. Doval and V. Skreta. Constrained information design. Mathematics of Operations Research,
49(1):78–106, 2024.
J. C. Ely. Beeps. American Economic Review, 2017.
F. Forges. Games with incomplete information: From repetition to cheap talk and persuasion.
Annals of Economics and Statistics, 2020.
D. Garrett and A. Pavan. Dynamic managerial compensation: A variational approach. Journal
of Economic Theory, 2015.
E. Kamenica and M. Gentzkow. Bayesian persuasion. American Economic Review, 101(6):
2590–2615, 2011.
A. S. Kechris. Classical Descriptive Set Theory. Springer, 1995.
D. Kr ̈ahmer and R. Strausz. Sequential versus static screening: An equivalence result. Games
and Economic Behavior, 106:59–75, 2017. doi: 10.1016/j.geb.2017.10.015.
23

R. B. Myerson. Optimal auction design. Mathematics of Operations Research, 6(1):58–73,
1981.
A. Pavan, I. Segal, and J. Toikka. Dynamic mechanism design: A myersonian approach.
Econometrica, 82(2):601–653, 2014. doi: 10.3982/ECTA9932.
R. T. Rockafellar. Convex functions and dual extremum problems. Pacific Journal of Mathe
matics, 35:555–580, 1970.
R. Tyrrell Rockafellar. Convex analysis. Princeton mathematical series, 28, 1970.
M. L. Weitzman. Optimal search for the best alternative. Econometrica, 47(3):641–654, 1979.
doi: 10.2307/1910412.
A Additional supplements
A.1 Additional characterizations of collapse
Proposition 5. The following are equivalent:
(i) U (S,Y )
t (s) = Ut(s).
(ii) Replication: For every ε > 0 and every σ(St, Yt)–measurable family y 7→ Γ(y), there
exists Γ ̄ ∈ AS
t such that
ess sup Rt[F t, Γ ̄] St = s ≥ ess sup Rt[F t, Γ(Yt)] St = s − ε.
(iii) Kernel folding: For every σ(St, Yt)–measurable stochastic kernel K(dγ | s, y) on Γt,
there exists a σ(St)–measurable kernel K ̄ (dγ | s) such that
ess sup
nZ
Rt[F t, γ] K ̄ (dγ | s) St = s
o
≥ ess sup
nZ
Rt[F t, γ] K(dγ | s, Yt) St = s
o
.
Recall g(s) := supt∈T Ut(s), and {St} is bounded16, so optional sampling applies to concave
transforms of posteriors.
16{conc g(St)} is uniformly integrable.
24

A.2 Finite-dimensional case
Corollary 2. Suppose in addition that E is a compact convex subset of a finite-dimensional
normed vector space (e.g., Θ is finite so that E = ∆(Θ) ⊂ Rd in the usual simplex embedding).
Then the following are equivalent:
(conc gb)(S0) = (conc g)(S0). (a)
∃ l ∈ Lg(S0) such that gb(s) ≤ l(s) ∀ s ∈ E, (A′)
where
Lg(S0) := l ∈ Affc(E) : l ≥ g on E, l(S0) = (conc g)(S0) .
Moreover, (A′) is equivalent to the datewise condition
∃ l ∈ Lg(S0) such that U Gt
t (s) ≤ l(s) ∀ s ∈ E, ∀ t ∈ T. (A′′)
Remark A.1 (Representation of supporting affine maps on ∆(Θ)). Every continuous affine
l : E → R is of the form l(μ) = a + R
Θ φ dμ with a ∈ R and φ ∈ Cb(Θ). Hence (A′′) is
equivalent to the existence of a ∈ R and φ ∈ Cb(Θ) such that
U Gt
t (μ) ≤ a +
Z
Θ
φ dμ ∀ μ ∈ ∆(Θ), ∀ t, a +
Z
Θ
φ dS0 = (conc g)(S0).
A.3 Join-stable certificates
We record three structural criteria that are stable under finite joins and hence deliver safe
deletion.
Assumption 4 (Join-stable primitives). Fix date t. For each posterior state s ∈ E:
(a) (BCE/LP primitives and exposed faces) The feasible set of Bayes–correlated outcomes
is a nonempty polytope Pt(s) ⊂ Rd, refined under Yt = y to a polytope Pt(s, y) ⊆ Pt(s).
The profit is linear p 7→ ⟨ct(s), p⟩ and the graphs of (s, y) 7→ Pt(s, y), s 7→ Pt(s) are
analytic. Define the optimal face at (t, s) by
Ft(s) := arg max
p∈Pt(s)
⟨ct(s), p⟩ (a nonempty exposed face of Pt(s)).
(b) (Strong duality and KKT regularity) The date-t problem admits a convex representation
max
x∈Xt(s,y)
⟨ct(s), x⟩ with Xt(s, y) = {x : At(s, y)x ≤ bt(s, y)},
25

strong duality holds, and optimal primal/dual sets admit Borel–measurable selections in
(s, y). Let Λt(s, y) be the optimal dual set and At(s, y) ⊆ {1, . . . , m} be the index set of
active (tight) inequalities at some primal maximizer.
(c) (Directional regularity and Y –tangent cone) The map Ut(·) admits finite one–sided Gateaux
derivatives DUt(s; h) in all directions h ∈ TY (s) for a closed cone TY (s) ⊆ TsE (the
Y –tangent cone), consisting of mean–preserving perturbations reachable by conditioning
on Yt at posterior s (so 0 ∈ TY (s) and ⟨1, h⟩ = 0).
Proposition 6 (Exposed faces and join-stable collapse). Under Assumption 4, fix t. For each
s ∈ E, let NPt(s)(Ft(s)) be the normal cone of Pt(s) along Ft(s).
(i) ( Optimal-face invariance) Yt collapses at date t at posterior s if and only if for P(Yt ∈
· | St = s)–a.e. y and every maximizer p⋆ ∈ arg maxp∈Pt(s,y)⟨ct(s), p⟩ one has
p⋆ ∈ Ft(s) and ct(s) ∈ NPt(s)(p⋆) ⊆ NPt(s)(Ft(s)).
(ii) ( Join-stable sufficient condition) If, for a statistic Yt and every s ∈ E,
arg max
p∈Pt(s,y)
⟨ct(s), p⟩ ⊆ Ft(s) for P(Yt ∈ · | St = s)–a.e. y,
then Yt collapses at date t. Moreover, if Y (1)
t , . . . , Y (N)
t each satisfy this face stability
with respect to the same Ft(s), then σ(St, Y (1)
t , . . . , Y (N)
t ) also collapses at date t.
Proposition 7 (Common duals, active-set stability, and joins). Under Assumption 4, fix t
and s ∈ E.
(i) ( Certificates for collapse) The following are equivalent:
(a) Yt collapses at date t at posterior s, i.e. U (S,Y )
t (s) = Ut(s).
(b) ( Common certificate) There exists a σ(St)–measurable dual multiplier λ⋆(s) ≥ 0
such that for P(Yt ∈ · | St = s)–a.e. y:
• λ⋆(s) is dual–feasible for (t, s, y) and attains the dual optimum;
• there exists a σ(St)–measurable primal optimizer x ̄t(s) ∈ Xt(s) with
⟨ct(s), x ̄t(s)⟩ = ⟨bt(s, y), λ⋆(s)⟩, λ⋆
i (s) At,i(s, y)x ̄t(s) − bt,i(s, y) = 0 ∀i.
(c) ( Active-set stability) There exists an index set A⋆(s) (depending only on s) such
that for P(Yt ∈ · | St = s)–a.e. y one can choose primal/dual optimizers (x⋆, λ⋆)
with At(s, y) = A⋆(s) and At,A⋆(s, y) having constant rank.
26

(ii) ( Join-stable sufficient condition) If there exists a σ(St)–measurable λ⋆(s) such that
λ⋆(s) ∈ Λt(s, y) for P(Yt ∈ · | St = s)–a.e. y and one can choose primal optimizers with
a common active set A⋆(s) across those y, then Yt collapses at date t at posterior s. If
several statistics admit the same (λ⋆, A⋆) certificate, any finite join of them collapses at
date t.
Proposition 8 (Directional no–gain and join-stable collapse). Under Assumption 4, fix t and
s ∈ E.
(i) ( Necessary condition) If Yt collapses at date t at posterior s, then for every h ∈ TY (s),
DUt(s; h) ≤ 0 and DUt(s; −h) ≤ 0,
hence DUt(s; h) = 0 for all h ∈ TY (s). Equivalently, every subgradient g ∈ ∂Ut(s)
satisfies suph∈TY (s)⟨g, h⟩ = 0.
(ii) ( Local sufficiency) If Ut is convex in a neighborhood of s and
sup
g∈∂Ut(s)
sup
h∈TY (s)
⟨g, h⟩ = 0,
then U (S,Y )
t (s) = Ut(s) (no local value from Y –refinement at s).
(iii) ( Join-stable sufficient condition) If, for a statistic Yt and all h ∈ TY (s), one has
DUt(s; h) = 0 (equivalently, supg∈∂Ut(s)⟨g, h⟩ = 0), then Yt collapses at date t at poste
rior s. If Y (1)
t , . . . , Y (N)
t each satisfy this with cones TY (i)(s), then the finite conic hull
T∨(s) := cone{TY (i)(s)} also has zero gain, hence the join collapses at date t at posterior
s.
Proposition 6 provides a geometric criterion stated in terms of exposed faces and requires
that the optimal face remain unchanged as y varies. Proposition 7 provides a criterion in terms
of dual multipliers and active sets and characterizes collapse through the existence of a dual
multiplier and an active set that are valid for all realizations y. Proposition 8 provides a local
criterion based on directional derivatives and requires that every direction that is reachable
by conditioning on Yt and has mean zero yield zero directional gain.
B Example
B.1 Each variable collapses alone, their join does not
Example 1 (Entry fee × opening threshold). Two bidders i = 1, 2 have i.i.d. values vi ∼
U [0, 1]. Fix a date-t posterior s. The baseline is a second–price auction (SPA) without
27

reserve, with expected revenue E[revSPA] = E[V(2)] = 1
3.
There are two public tags:
• Y1 ∈ {0, 1} (fee authorization): if Y1 = 1, the seller may charge a common entry fee f ≥ 0;
else fees are banned.
• Y2 ∈ {0, 1} (opening threshold): if Y2 = 1, the auction opens whenever at least two register;
if Y2 = 0, it does not open. Entry fees, if charged, are non–refundable.
Visibility and optimal date-t revenue.
(i) No tags observed. Any f > 0 is infeasible/violates IR in the branch Y1 = 0 or Y2 = 0;
hence f = 0 and U (S)
t (s) = 1
3.
(ii) Only Y1 observed. The seller must remain feasible when Y2 = 0 (no opening, non–refundable
fee), forcing f = 0; thus U (S,Y1)
t (s) = 1
3.
(iii) Only Y2 observed. Fees may be banned when Y1 = 0; again SPA is optimal, U (S,Y2)
t (s) =
1
3.
(iv) Both tags observed with (Y1, Y2) = (1, 1). In the SPA with two symmetric bidders,
expected bidder surplus per bidder equals 1/6. Set f ⋆ = 1/6 so IR binds and both
register. Then
entry fees = 2f ⋆ = 1
3 , SPA revenue = E[V(2)] = 1
3 ⇒ U (S,Y1,Y2)
t (s) = 2
3.
Hence
U (S)
t (s) = U (S,Y1)
t (s) = U (S,Y2)
t (s) = 1
3 < U (S,Y1,Y2)
t (s) = 2
3,
then each tag is collapsible alone, but their join is not.
B.2 Calendar no-gain without every date-wise collapse
Example 2. Let Θ = {0, 1} and E = ∆(Θ) ∼= [0, 1] with coordinate p = P(θ = 1). Consider
two dates t = 1, 2 and fix any prior S0 = p0 ∈ (0, 1).
Define date-wise value functions (ignoring their mechanism origin) as follows:
U1(p) := 0 ∀p ∈ [0, 1],
UF1
1 (p) := 1
2 p ∀p ∈ [0, 1],
U2(p) := p, U F2
2 (p) := U2(p) ∀p ∈ [0, 1].
Interpretation: at date 1, if the seller can only condition on the posterior S1 = p, she
gets zero revenue (U1 ≡ 0); with additional public detail Y1 contained in F 1, she can improve
date-1 revenue to U F1
1 (p) = 1
2 p. At date 2, additional public details do not help, so U F2
2 = U2.
28

Now take G1 = F 1 and G2 = F 2. Then
g(p) := sup
t
Ut(p) = max{U1(p), U2(p)} = U2(p) = p,
and
gb(p) := sup
t
U Gt
t (p) = max{U F1
1 (p), U F2
2 (p)} = max{ 1
2 p, p} = p
for all p ∈ [0, 1]. Hence
gb = g on E,
so g is already concave (affine) and
(conc gb)(S0) = (conc g)(S0) = g(S0) = p0.
Thus the calendar no-gain condition of Theorem 1 holds at S0.
However, at date 1 we have a strict inequality
UF1
1 (p) = 1
2 p > 0 = U1(p) for all p > 0.
Therefore
UF1
1 ̸= U1,
so the mechanism does not collapse at date 1 in the sense of Proposition 2. In particular, the
condition
UF1
1 (s) = U1(s) ∀s ∈ E
fails, and some non-posterior public feature in F1 is non-collapsible at date 1.
This example shows that calendar no-gain at S0 in the sense of Theorem 1 can hold even
though Proposition 2 fails at some dates.
C Proof
C.1 Proof of Lemma 1
Proof. Fix t ∈ T . Since Θ is a Polish (hence standard Borel) space and θ : Ω → Θ is Borel
measurable, there exists a regular conditional distribution of θ given F t, that is, a probability
kernel
Kt : Ω × B(Θ) → [0, 1], (ω, B) 7−→ Kt(ω, B),
such that:
• for each B ∈ B(Θ), the map ω 7→ Kt(ω, B) is F t-measurable;
29

• for each A ∈ F t and B ∈ B(Θ), P(θ ∈ B, A) = R
A Kt(ω, B) dP(ω).
(See, for example, Dellacherie and Meyer (1978, Ch. VI, Thm. 2) or Kallenberg (2002, Thm. 6.3).)
Define St : Ω → E = ∆(Θ) by
St(ω)(B) := Kt(ω, B), B ∈ B(Θ).
Since Kt(ω, ·) is a probability measure on Θ for P-a.e. ω, St(ω) ∈ E almost surely. The
Borel σ-algebra on E is generated by the evaluation maps μ 7→ μ(B) for B in a countable
generating class of B(Θ), and each composition ω 7→ St(ω)(B) = Kt(ω, B) is F t-measurable.
It follows that St is Ft-measurable as an E-valued random element (see, e.g., Kallenberg,
2002, Lem. 1.36).
Let φ : Θ → R be bounded and Borel. Define the Ft-measurable random variable
Mt(ω) :=
Z
Θ
φ(θ′) St(ω)(dθ′) =
Z
Θ
φ(θ′) Kt(ω, dθ′).
By the defining property of the regular conditional distribution, for every A ∈ F t,
Z
A
Mt(ω) dP(ω) =
Z
A
Z
Θ
φ(θ′) Kt(ω, dθ′) dP(ω) =
Z
A
φ(θ(ω)) dP(ω).
Thus Mt is a version of the conditional expectation E[φ(θ) | F t], and we have
Z
Θ
φ dSt = Mt = E[φ(θ) | F t] a.s.,
which proves the first claim.
For the martingale property, fix again any bounded Borel φ : Θ → R. By the first part,
for each t,
Z
Θ
φ dSt = E[φ(θ) | F t] a.s.
Applying the tower property of conditional expectation,
E
Z
Θ
φ dSt+1 F t = E E[φ(θ) | F t+1] | F t = E[φ(θ) | F t] =
Z
Θ
φ dSt a.s.
Hence {St} is a martingale with respect to (F t) in the usual weak sense: for every bounded
Borel test function φ on Θ, the real-valued process R
Θ φ dSt t≥0 is an (F t)-martingale. Since
each St(ω) is a probability measure, the process is bounded in total variation norm, which
completes the proof.
30

C.2 Proof of Lemma 2
Proof. We proceed in three steps. Throughout, Ω and Ht are standard Borel (indeed Polish),
P is a Borel probability on (Ω, F), and Rt has nonempty, bounded values and analytic graph.
Step 1: From an analytic graph to an upper semianalytic payoff. Define
rt : Ω × Ht → R, rt(ω, γ) := sup Rt[Ft, γ](ω).
Nonemptiness and boundedness of Rt[Ft, γ](ω) imply that rt is finite and bounded on Ω × Ht.
Since Gr(Rt) ⊆ Ω × Ht × R is analytic with nonempty sections, the epigraph of rt is analytic,
hence rt is upper semianalytic on Ω × Ht; see, for example, Castaing and Valadier (1977,
Thm. III.38) or Bertsekas and Shreve (1978, Prop. 7.33). In particular, rt is universally
measurable and bounded.
Step 2: Conditioning on the posterior. Fix a public σ-algebra G with σ(St) ⊆ G ⊆ Ft.
For any G-measurable submechanism Γ : Ω → Ht, define
XΓ(ω) := rt ω, Γ(ω) , ω ∈ Ω.
Because rt is upper semianalytic and Γ is G-measurable, XΓ is bounded and universally mea
surable; see Bertsekas and Shreve (1978, Prop. 7.40).
Let St : Ω → E be the posterior kernel from Lemma 1, where E = ∆(Θ) is endowed with
the weak topology. Since σ(St) is generated by the Borel map St : Ω → E, there exists a
bounded σ(St)-measurable version of the conditional essential supremum
XbΓ = ess sup{XΓ | σ(St)} a.s.,
which is the smallest σ(St)-measurable function dominating XΓ almost surely; see Dellacherie
and Meyer (1978, Ch. V, Sect. 57). By standard disintegration, there is a bounded Borel map
uG,Γ
t : E → R such that
uG,Γ
t St(ω) = XbΓ(ω) = ess sup{XΓ | σ(St)}(ω) for P-a.e. ω.
Moreover, one may choose uG,Γ
t upper semianalytic on E by applying the conditional version
of the upper semianalyticity results above to a regular conditional distribution of (ω, Γ(ω))
given St = s, pointwise in s ∈ E. Thus each uG,Γ
t is bounded and upper semianalytic on E,
and
uG,Γ
t (s) = ess sup rt(ω, Γ(ω)) | St = s for St-a.e. s ∈ E,
where the conditional essential supremum is taken with respect to the regular conditional law
31

of ω given St = s.
Step 3: Taking the supremum over all G-measurable submechanisms. Define
UG
t (s) := sup
Γ: G-measurable
uG,Γ
t (s), s ∈ E.
We claim that U G
t is bounded and upper semianalytic on E.
Boundedness follows from Step 1: all values uG,Γ
t (s) lie in the bounded range of rt, so their
supremum is bounded as well.
To establish upper semianalyticity, we work directly with the epigraph of U G
t . For x ∈ R,
consider the strict upper level set
Ax := (s, Γ) ∈ E × K : uG,Γ
t (s) > x ,
where K denotes the (possibly large) collection of G-measurable maps Γ : Ω → Ht. For each
fixed Γ, the map s 7→ uG,Γ
t (s) is upper semianalytic by Step 2, hence
{(s, Γ) : uG,Γ
t (s) > x}
is analytic in E × K as a pointwise union over Γ of upper level sets of upper semianalytic
functions; see Castaing and Valadier (1977, Prop. III.40) or Bertsekas and Shreve (1978,
Prop. 7.33 and 7.40). Thus Ax is analytic for each x.
By definition of U G
t,
{s ∈ E : U G
t (s) > x} = projE(Ax),
the projection of an analytic set in E × K. Projections of analytic sets are analytic, so each
strict upper level set {s : U G
t (s) > x} is analytic. This is exactly the definition of upper
semianalyticity of U G
t on E.
Finally, E is a standard Borel space. Any bounded upper semianalytic function on a
standard Borel space admits a Borel version, obtained by modification on a universally null
set; see Bertsekas and Shreve (1978, Prop. 7.30). We therefore identify U G
t with such a bounded
Borel version on E, which proves the lemma.
C.3 Proof of Proposition 2
Proof. (a) ⇒ (b). Assume U Ft
t (s) = Ut(s) for all s ∈ E. Fix an arbitrary public variable Yt
with σ(St) ⊆ σ(St, Yt) ⊆ F t and any G satisfying σ(St) ⊆ G ⊆ F t. By monotonicity of the
value with respect to information,
Ut(s) = U σ(St)
t (s) ≤ U G
t (s) ≤ U σ(G,Yt)
t (s) ≤ U Ft
t (s) = Ut(s) ∀s ∈ E.
32

Hence all inequalities must bind pointwise in s, and in particular
U σ(G,Yt)
t (s) = U G
t (s) ∀s ∈ E.
Since Yt and G were arbitrary, every non-posterior public variable is collapsible at date t to
any intermediate G between σ(St) and F t.
(b) ⇒ (a). Assume (b). Because (Ω, F) is standard Borel and σ(St) ⊆ Ft, there exists a
public variable Y †
t such that
F t = σ(St, Y †
t ).
Take G = σ(St) and Yt = Y †
t in (b). The collapsibility condition then gives
UFt
t (s) = U σ(St,Y †
t)
t (s) = U σ(St)
t (s) = Ut(s) ∀s ∈ E,
which is exactly (a).
C.4 Proof of Proposition 3
Proof. By Proposition 2, “collapse at date t” is equivalent to
UFt
t (s) = Ut(s) for all s ∈ E
and, moreover, to the statement that any non-posterior public variable Yt is collapsible at date
t to any G with σ(St) ⊆ G ⊆ F t. Hence, for every t ∈ T and every such Gt, we must have
U Gt
t (s) = Ut(s) for all s ∈ E.
Taking pointwise suprema over t yields
gb(s) = sup
t
U Gt
t (s) = sup
t
Ut(s) = g(s) ∀s ∈ E.
Since gb = g, their concave envelopes coincide everywhere, so in particular (conc gb)(S0) =
(conc g)(S0) for any prior S0. By Theorem 1, this is equivalent to conditions (Aε) and (A′′
ε)
therein.
33

C.5 Proof of Theorem 1
Proof. We first recall a standard representation of the concave envelope. For any bounded
function f : E → R,
(conc f )(s) = inf{l(s) : l ∈ Affc(E), l ≥ f }, s ∈ E. (C.1)
In particular, for every ε > 0 there exists an affine ε-support of conc g at S0: an affine
l ∈ Affc(E) with l ≥ conc g and l(S0) ≤ (conc g)(S0) + ε. Since conc g ≥ g, such an l belongs
to Lε
g(S0), so Lε
g(S0) ̸= ∅.
(Aε ⇒ (a)). Since gb ≥ g, we always have conc g ≤ conc gb and hence (conc g)(S0) ≤
(conc gb)(S0). Now suppose (Aε) holds. Then for each ε > 0 there exists lε ∈ Lε
g(S0) such
that gb ≤ lε on E. By (C.1),
(conc gb)(S0) ≤ lε(S0) ≤ (conc g)(S0) + ε ∀ ε > 0.
Combining these inequalities yields
(conc g)(S0) ≤ (conc gb)(S0) ≤ (conc g)(S0) + ε ∀ ε > 0,
and letting ε ↓ 0 proves (conc gb)(S0) = (conc g)(S0).
((a) ⇒ (Aε)). Assume (conc gb)(S0) = (conc g)(S0). Since gb ≥ g, we have conc gb ≥ conc g, so
equality at S0 implies
(conc gb)(S0) = (conc g)(S0) = inf{l(S0) : l ∈ Affc(E), l ≥ g}.
Fix ε > 0. By (C.1) with f = gb, there exists an affine lε such that lε ≥ gb on E and
lε(S0) ≤ (conc gb)(S0) + ε = (conc g)(S0) + ε.
Since gb ≥ g, this lε also satisfies lε ≥ g, hence lε ∈ Lε
g(S0) and gb ≤ lε on E. This is precisely
condition (Aε).
(Aε ⇔ (A′
ε)). Recall that gb(s) = supt∈T U Gt
t (s). If (A′′
ε ) holds, then for each ε > 0 there
exists lε ∈ Lε
g(S0) such that U Gt
t (s) ≤ lε(s) for all t and s. Taking the supremum over t yields
gb(s) = supt U Gt
t (s) ≤ lε(s) for all s, so (Aε) holds.
Conversely, if (Aε) holds, then for each ε > 0 there exists lε ∈ Lε
g(S0) such that gb(s) ≤ lε(s)
for all s. Since U Gt
t (s) ≤ supt U Gt
t (s) = gb(s) for every t and s, we obtain U Gt
t (s) ≤ lε(s) for all
t and s, which is (A′′
ε ). This proves the equivalence.
34

C.6 Proof of Theorem 2
Proof. Recall that g(s) := supt∈T Ut(s) and gb(s) := supt∈T U Ft
t (s), where Ut uses only the
posterior St as state and U Ft
t allows full conditioning on the public history F t. By construction,
gb ≥ g pointwise on E.
Let
V cal := sup
M
E[G(M)] and V term := sup
M f terminal
E[G(M f )]
denote, respectively, the optimal ex-ante values over all mechanism calendars and over terminal
calendars as in Definition 2. The dynamic concavification argument developed above implies
the value representation
V cal = (conc gb)(S0), V term = (conc g)(S0), (C.2)
and clearly V term ≤ V cal since terminal calendars are a subset of all calendars.
(Global condition ⇒ collapse). Assume the global affine-support condition
∀ ε > 0, ∃ lε ∈ Lε
g(S0) such that U Ft
t (s) ≤ lε(s) ∀ s ∈ E, ∀ t ∈ T (A′′
ε)
holds. By Theorem 1, this is equivalent to
(conc gb)(S0) = (conc g)(S0).
Using (C.2), we obtain
V cal = V term. (C.3)
By the definition of V term, for every ε > 0 there exists a terminal calendar M f ε such that
E[G(M f ε)] ≥ V term − ε.
Let M⋆ be a seller-optimal calendar, so that E[G(M⋆)] = V cal. Combining with (C.3) yields
E[G(M f ε)] ≥ V term − ε = V cal − ε = E[G(M⋆)] − ε.
This is exactly the definition of collapse in Definition 2. Thus the global condition implies
that the mechanism calendar collapses.
(Collapse ⇒ global condition). Conversely, suppose the calendar collapses. By Definition 2,
for every ε > 0 there exists a terminal calendar M f ε such that
E[G(M f ε)] ≥ E[G(M⋆)] − ε = V cal − ε.
35

Taking the supremum over terminal calendars on the left-hand side yields
V term ≥ V cal − ε ∀ ε > 0.
Letting ε ↓ 0 and recalling that V term ≤ V cal, we obtain
V term = V cal.
Using (C.2) again, this is equivalent to
(conc gb)(S0) = (conc g)(S0).
Now Theorem 1 shows that this equality holds if and only if the global affine-support condition
(A′′
ε) is satisfied. Hence collapse implies the global condition.
Combining the two directions proves the theorem.
C.7 Proof of Proposition 4
Proof. By Theorem 2, collapse is equivalent to the global affine-support condition: for every
ε > 0, there exists lε ∈ Lε
g(S0) such that
UFt
t (s) ≤ lε(s) ∀s ∈ E, ∀t ∈ T .
Fix ε > 0 and such an lε. For any t and s, we then have s, U Ft
t (s) ∈/ Bε(S0), because
UFt
t (s) ≤ lε(s) ≤ Hε(s) by definition of Hε. Thus the calendar does not hit Bε(S0) for any
ε > 0. The equivalent contrapositive statement follows immediately.
36

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:10.167Z
- **Text Length:** 77470 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 36 of 36
