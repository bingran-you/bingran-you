# PDF Document: Shirani and Bayati - 2025 - On Evolution-Based Models for Experimentation Under Interference.pdf

**File Path:** Shirani and Bayati - 2025 - On Evolution-Based Models for Experimentation Under Interference.pdf

**Processed Date:** 2026-02-10T18:17:14.801Z

**File Size:** 651.55 KB

**Total Pages:** 21

**Extracted Pages:** 21

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3149

**Title:** On Evolution-Based Models for Experimentation Under Interference

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

On Evolution-Based Models for Experimentation Under Interference
Sadegh Shirani and Mohsen Bayati
Graduate School of Business, Stanford University
Causal effect estimation in networked systems is central to data-driven decision making. In such settings,
interventions on one unit can spill over to others, and in complex physical or social systems, the interac
tion pathways driving these interference structures remain largely unobserved. We argue that for identifying
population-level causal effects, it is not necessary to recover the exact network structure; instead, it suffices
to characterize how those interactions contribute to the evolution of outcomes. Building on this principle,
we study an evolution-based approach that investigates how outcomes change across observation rounds in
response to interventions, hence compensating for missing network information. Using an exposure-mapping
perspective, we give an axiomatic characterization of when the empirical distribution of outcomes follows
a low-dimensional recursive equation, and identify minimal structural conditions under which such evolu
tion mappings exist. We frame this as a distributional counterpart to difference-in-differences. Rather than
assuming parallel paths for individual units, it exploits parallel evolution patterns across treatment scenarios
to estimate counterfactual trajectories. A key insight is that treatment randomization plays a role beyond
eliminating latent confounding; it induces an implicit sampling from hidden interference channels, enabling
consistent learning about heterogeneous spillover effects. We highlight causal message passing as an instan
tiation of this method in dense networks while extending to more general interference structures, including
influencer networks where a small set of units drives most spillovers. Finally, we discuss the limits of this
approach, showing that strong temporal trends or endogenous interference can undermine identification.
Key words : Randomized experiments, network interference, exposure mapping, implicit sampling
1. Introduction
Analyzing network data is central to scientific fields, with broad applications spanning operations
research, economics, and social sciences (Jackson et al. 2008, Johari et al. 2022). These analyses
are inherently challenging due to complex dependencies shaped by latent and observed network
structures (Kolaczyk and Cs ́ardi 2014). Estimating causal effects in networked systems presents a
particularly challenging case (Hudgens and Halloran 2012, Ugander et al. 2013, Eckles et al. 2016).
This complexity arises because, in addition to intricate network dependencies, researchers must
face the fact that we can observe outcomes under only a single realized scenario (Holland 1986).
Interference induced by underlying network structures violates the stable unit treatment value
assumption (SUTVA), necessitating methods that can disentangle causal relationships in intercon
nected settings (Imbens and Rubin 2015). Within the growing literature on experimental design
under interference, one line of research investigates the use of outcome observations collected over
time. Specifically, Li and Wager (2022a) highlight the utility of additional longitudinal data for
inference and the complications introduced by temporal interference (Glynn et al. 2020).
1
arXiv:2511.21675v1 [stat.ML] 26 Nov 2025

2
Recent contributions have exploited temporal structures and observations to enhance estimation
under interference (Farias et al. 2022, Hu and Wager 2022, Bojinov et al. 2023, Li et al. 2023, Ni
et al. 2023, Boyarsky et al. 2023, Han et al. 2024, Mukaigawara et al. 2025, Jia et al. 2025). Col
lectively, these studies demonstrate that temporal dynamics can be utilized effectively to mitigate
bias and improve statistical inference in the presence of interference, but they typically retain a
unit-level or network-level description of interference.
This temporal approach has also been used in broader network problems to detect connections
and structural properties. Systematic perturbations followed by observing the resulting outcome
trajectories can provide information about network topology (Timme and Casadiego 2014). For
example, observing transient responses to targeted or random perturbations enables the identifica
tion of causal relations among network nodes (Casadiego et al. 2017, Nitzan et al. 2017, Stepaniants
et al. 2020).
Recently, Shirani and Bayati (2024) introduced causal message passing (CMP) for estimating
treatment effects in networked populations. Building on the approximate message passing method
ology (Donoho et al. 2009, Bayati and Montanari 2011), CMP introduces the concept of experi
mental state evolution (ESE). ESE captures how outcome distributions evolve over time, with
this temporal evolution characterized through mathematical functions called ESE mappings.
The derivation of ESE mappings and their application to treatment effect estimation have been
studied under certain structural assumptions on outcome dynamics and interference patterns (Shi
rani and Bayati 2024, Bayati et al. 2024, Shirani et al. 2025). These papers derive ESE as a
consequence of particular unit-level outcome models and random network assumptions. However,
it remains unclear when such evolution-based descriptions exist, how they relate to classical expo
sure mappings for interference (Manski 2013, Aronow and Samii 2017), and under what structural
conditions they support identification of population-level counterfactual trajectories without recon
structing the underlying network. In this paper, we reverse the perspective. Instead of starting
from a detailed outcome and network model and characterizing limiting distributions, we take ESE
itself as the primitive object and ask:
1. Under what assumptions on potential outcomes and exposure mappings does an ESE repre
sentation exist at the population level?
2. When such a representation exists, when does it suffice for identification of counterfactual
evolutions, and how does it relate to familiar assumptions such as parallel trends?
3. How can partial structural knowledge, such as the presence of a small set of influencers or
known clusters, be incorporated without requiring full network reconstruction?
4. In which environments do evolution-based approaches fail, regardless of the estimator?

3
Influencers Regular units
a) Underlying network
(unobserved by the experimenter)
b) Randomized treatments
Triggering hidden interference channels
Treated units Triggered links
c) Outcome Evolutions
Treatment-driven variations encode network structures
Observed experimental evolution Unobserved baseline evolution
Y! Y" Y# Y$
Figure 1 Randomized treatments implicitly sample hidden interference channels in a network with two influencers.
Our contributions are as follows. First, we provide an axiomatic treatment of the ESE frame
work. Using a potential-outcome evolution model and time-varying exposure mappings, we derive
minimal regularity conditions under which population outcome distributions follow an ESE recur
sion driven by treatment assignments. Second, we show how ESE underpins an evolution-based
estimation strategy and clarify its connection to difference-in-differences: under a distributional
parallel evolution condition, counterfactual trajectories can be constructed by repeatedly propagat
ing from common pre-treatment baselines, providing a distributional analogue of the parallel-trends
assumption. This generalizes the evolution-based viewpoint beyond the dense network regimes con
sidered by CMP and moves beyond the limitations of these methods. As concrete illustrations,
we demonstrate how the approach extends to core-periphery settings where a small but known
set of “influencers” exert disproportionate spillover effects. Finally, we show intrinsic limitations
of evolution-based methods: we show that strong time trends or treatment-dependent exposure
mechanisms violate the stability conditions required for ESE, and document empirically how such
violations degrade evolution-based estimators.
A key insight is that treatment randomization addresses two separate challenges. The first con
cerns unobserved characteristics: random assignment makes treated and control units comparable
on average, thereby removing confounding. The second, newly emphasized here, concerns unob
served network structure. Randomization injects structured variation into the hidden interference
channels by triggering a representative subset of the links through which spillovers operate. By
tracking how outcomes evolve across these perturbations, we effectively sample the latent path
ways that transmit treatment effects. This implicit sampling mechanism enables identification of
population-level causal effects without reconstructing the underlying network (Figure 1).
The remainder of the paper proceeds as follows. Section 2 introduces experimental setup along
with an illustrative example that motivates the foundation of our approach. Section 3 establishes a
set of minimal assumptions for the existence of ESE mappings. Section 4 analyzes ESE mappings
through the lens of exposure mappings. Section 5 explains when outcome evolutions can be used
for estimation. Finally, Section 6 discusses limitations and delineates the scope of the framework.

4
2. Problem Statement
We consider a set of N units indexed by i = 1, . . . , N , and suppose that all units can be observed
across T rounds indexed by t = 1, . . . , T . For simplicity, we focus on binary treatment interventions
and denote by W i
t the treatment applied to unit i in round t. We assume that W i
t ∼ Bernoulli(pt)
for some 0 ≤ pt ≤ 1, where W i
t = 1 indicates that unit i receives the treatment in round t and
Wi
t = 0 otherwise. We denote the treatment assignments across all units in round t by ⃗Wt :=
(W 1
t ,...,WN
t )⊤, and define Wt := [ ⃗W1| . . . | ⃗Wt] as the collective treatment assignment up to round t.
We then use wi
t,w⃗ t, and wt to denote generic realizations of W i
t , ⃗Wt, and Wt, respectively.
Letting Y i
0 denote the initial outcome of unit i prior to any treatment administration, we follow
the Neyman-Rubin causal framework (Rubin 1978, Imbens and Rubin 2015). Precisely, we assume
that for any feasible treatment assignment wt ∈ {0, 1}N×t, the potential outcome of unit i in round t
exists and denote it by Y i
t (wt) ∈ R. Then, we denote the vector of potential outcomes in round t by
⃗Yt(wt) := Y 1
t (wt), . . . , Y N
t (wt) ⊤ and the panel of outcomes by Y (wT ) := ⃗Y0 ⃗Y1(w1) . . . ⃗YT (wT ) .
The experimentation procedure consists of assigning treatments according to WT and recording
the outcome panel Y (WT ). Then, motivated by population-level causal estimands,1 we focus on
aggregated outcomes: how changes in WT impact the distribution of observed outcomes Y (WT ).
We now provide a formal definition of the sequence of ESE mappings f1, . . . , fT . For each round t,
we define random variables Yt−1(wt−1), Yt(wt) ∈ R that follow the same distributions as the empir
ical distribution of the elements of the outcome vectors ⃗Yt−1(wt−1), ⃗Yt(wt) ∈ RN , respectively. The
ESE mapping ft then establishes a functional relationship from Yt−1(wt−1) to Yt(wt). This sequen
tial evolution process is illustrated in Figure 2. Indeed, ft captures the mechanism by which past
outcomes Yt−1(wt−1) evolve in response to current treatmentsw⃗ t to generate new outcomes Yt(wt).
The following example illustrates how the network structure contributes to this evolution.
Y0 Y1(w1) Y2(w2) · · · YT (wT )
f1
w⃗ 1
f2
w⃗ 2
fT
w⃗ T
Figure 2 Experimental State Evolution: sequential transformation of outcome distributions via ESE mappings.
An Illustrative Example: Outcomes Evolution Encode Network Structure!
Consider a community of seven individuals, some of whom interact regularly, as shown on the left
side of Figure 3. We aim to share new information about the benefits of regular exercise and study
its impact on individuals’ behavior by measuring each person’s daily workout time. In this context,
the initial outcome vector ⃗Y0 denotes the activity levels of individuals before the experiment begins.
1 A well-studied example of population-level estimands is the total (or global) treatment effect, which contrasts the sample mean of outcomes under universal treatment with those under no treatment (Yu et al. 2022).

5
Y! Y#(w#) Y"(w") Y$(w$)
Treated units Triggered links Indirectly impacted units Indirectly triggered links
Y! Y#(w#) Y"(w") Y$(w$)
Y!
1
2
3
4
5
6
7
12
3
4
5
6
7
f1 f2 f3
f1
( f2
( f3
(
Unit 1 is treated in the first round. Unit 5 is treated in the second round.
Figure 3 Outcomes evolution: treatments trigger interference channels both directly and indirectly, shaping the
next column of outcomes. The columns show outcomes with (top) and without (bottom) a direct link
between units 1 and 2. Even without observing the network, the outcome evolutions (for units 2 and 7)
reveal differences in interference structures, implying distinct ESE mappings across the two cases.
To conduct the experiment, we share the information with a randomly selected group of individ
uals. These interventions not only impact the workout time of those treated units but can also alter
the content of their regular conversations with their friends. For example, two friends may already
speak daily about unrelated topics. Once one of them receives the new information, their conver
sation may shift to include the benefits of exercise. This shift marks their link as triggered: the
connection does not change structurally, but its functionality may change relative to the baseline,
allowing the treatment-related information to flow through it.
In subsequent days, some of those newly informed friends may pass the information to their own
contacts, generating additional rounds of triggered interactions. Although we do not observe these
triggered links or the conversations that carry them, we do observe their aggregate effect in how the
outcome vector changes from one day to the next. By comparing each column of outcomes with the
previous one, we see which parts of the population respond more strongly, revealing the footprint
of the underlying interference pathways. This is the key insight: the evolution of outcomes encodes
the network effect; in fact, the treatment-driven variations in outcome columns provide indirect
but observable evidence of the unobserved interference structure.
Figure 3 illustrates this idea by comparing two otherwise identical seven-person networks: one
in which Individuals 1 and 2 are friends (top panel) and one in which they are not (bottom panel).
In both cases, Individuals 1 and 5 are treated in the first and second rounds, respectively, and
outcomes are shown as columns, with color intensity representing workout activity. When 1 and 2
are friends, the influence of Individual 1 spreads through their connection, leading to stronger
responses in subsequent rounds. When they are not connected, this channel is absent, and the

6
spillover pattern weakens (see the outcomes of Individuals 2 and 7). The differences in these evolving
outcome patterns reveal the presence or absence of hidden connections.
In real-world experiments, networks are large and heterogeneous, and their structure is rarely
observed. Randomization makes it possible to handle this complexity through an implicit sam
pling mechanism. When we randomly choose whom to inform about the benefits of exercise,
we also randomly trigger the social links connected to those individuals by shifting the content of
their interactions. Each treated person activates a distinct local neighborhood, and taken together
these activations form a representative sample of the hidden connections in the community. The
resulting randomized triggers shape how outcomes evolve from one round to the next, allowing us
to infer properties of unobserved interference from observed dynamics. Because it is infeasible to
track all such variations one by one, we instead characterize their aggregate through the evolution
of outcome distribution. ESE mappings formalize this idea by modeling how outcome distribu
tions change as treatments trigger interaction links, translating temporal patterns in the data into
information about the underlying interference structure.
3. Experimental State Evolution
We begin by introducing two new notations. In addition to treatments and outcomes, each unit i
also has a covariate vector ⃗Ci
t ∈ Rnc in each round t, for some positive integer nc. This vector can
incorporate unit-specific characteristics, such as age and gender for individuals, as well as time
dependent indicators, including the round number t. These covariates serve to characterize the
heterogeneity across units and over time throughout the experimentation period.
Furthermore, to account for potential interference between experimental units, we rely on the
concept of exposure mappings (Manski 2013, Aronow and Samii 2017). Specifically, we let ⃗Ei
t (wt) be
the exposure vector taking values in Rne, for some positive integer ne. That means, for a treatment
allocation wt, the elements of ⃗Ei
t (wt) encompass the effective influence received by unit i in round t
from all other experimental units. The following assumption formalizes this.
Assumption 1 (Exposure vectors). For any treatment assignment wt, there exist exposure vec
tors ⃗E1
t (wt), . . . , ⃗EN
t (wt) that summarize the interference effects received by each unit in round t.
We proceed by characterizing the unit-level outcome evolution. For simplicity, we assume that
the outcome of unit i in round t (denoted by Y i
t (wt)) depends only on its most recent outcome
Yi
t−1(wt−1), the current treatment wi
t, as well as the the covariates ⃗Ci
t and exposure vectors ⃗Ei
t (wt).
This assumption defines a minimal memory model that facilitates tractable analysis. Our framework
extends to more complex dynamics that involve more memory terms or full treatment trajectories,
without requiring structural changes to the analytical setup. We formalize our potential outcome
specification through the following assumption.

7
Assumption 2 (Potential outcome evolution). We assume that all unit outcomes evolve fol
lowing a similar mathematical rule and define the generic unit-level evolution through a function φ
such that given initial pretreatment outcomes ⃗Y0, we have
φ : {0, 1} × R × Rnc × Rne 7→ R, Y i
t (wt) := φ wi
t, Y i
t−1(wt−1), ⃗Ci
t ; ⃗E i
t (wt) . (1)
Equation (1) presents the unit-level outcome dynamics. Importantly, evolution functions are
assumed to be homogeneous across units and any heterogeneity arises through covariates Ci
t , and
exposure vectors ⃗Ei
t (wt). Consequently, two units with identical covariates and exposures will follow
the same evolution path if initialized identically and share the exact same treatment trajectory.
Note that Eq. (1) characterizes the outcome evolution process, capturing how outcomes in each
round depend on the previous round by incorporating Y i
t−1(wt−1) on the right-hand side. This
differs from the outcome generating process that maps treatments to potential outcomes without
incorporating Y i
t−1(wt−1) (Abadie et al. 2025). Our goal is to demonstrate how aggregate outcomes
evolve according to these unit-level dynamics. To this end, we consider a probability space (Ω, F, P),
with Ω representing the sample space, F the sigma-algebra of events, and P the probability measure.
Assumption 3 (Convergent potential outcomes). For any treatment allocation wT , the
potential outcome panel Y (wT ) exists and satisfies the following condition.2 For each round t, let
pˆN
t;wt denote the empirical distributions of wi
t, Y i
t−1(wt−1), ⃗Ci
t , ⃗E i
t (wt), Y i
t (wt) N
i=1 that converges
weakly, as N → ∞, to a probability distribution pt;wt.
This assumption establishes the regularity conditions necessary for asymptotic analysis in our
experimental setting with evolving outcomes. It requires that as the sample size increases, the joint
distribution of key variables (current treatments and outcomes, recent outcomes, covariates, and
exposure vectors) converges to a well-defined limiting distribution. This condition guarantees that
the experimental environment exhibits required stability in large-sample regimes.
Notation convention. We fix a generic feasible treatment assignment wT , and omit explicit
references when the context is clear. We also employ the following notations for any t:
WN
t ,Y N
t−1, ⃗CN
t , ⃗E N
t ,Y N
t ∼ pˆN
t;wt and Wt, Yt−1, ⃗Ct, ⃗Et, Yt ∼ pt;wt , (2)
without explicitly restating the detailed conditions specified in Assumption 3.
Assumptions 2 and 3 together with the definition of joint empirical distribution immediately
imply that in finite samples where N < ∞, Y N
t is equal to φ W N
t ,Y N
t−1, ⃗CN
t ; ⃗E N
t . This equality
is straightforward since each W N
t ,Y N
t−1, ⃗CN
t , ⃗E N
t ,Y N
t take values with equal probability over the
2 For (x1, . . . , xl), the empirical distribution is 1
l
Pl
j=1 δxj , where δx is the Dirac measure at x. Weak convergence of
probability measures μn to μ means R ψ dμn → R ψ dμ for all bounded continuous functions ψ.

8
corresponding values of all units. Indeed, each W i
t,Y i
t−1, ⃗Ci
t , ⃗E i
t,Y i
t will be observed under pˆN
t with
a probability of 1
N . However, to analyze the limiting behavior as N → ∞, we require additional
theoretical considerations, as established in the following theorem.
Theorem 1 (ESE-I). Under Assumptions 1-3, if the function φ is continuous, we have:
Yt
a.=s. φ Wt, Yt−1, ⃗Ct; ⃗Et (3)
where the recursion initiates from pretreatment outcome Y0 and a.=s. denotes almost sure equality.
The result of Theorem 1 establishes the foundation for our subsequent analysis. The main objec
tive of Theorem 1 is to rigorously characterize the assumptions required to ensure we can transition
from unit-level evolution specified by Eq. (1) to the aggregate-level evolution outlined in Eq. (3).
However, directly approaching Eq. (3) presents significant challenges as the exposure vectors ⃗Et,
which capture the interference structure, are essentially black boxes. Below, we provide a concise
proof for Theorem 1, and in the subsequent section, we conduct a detailed analysis of the elements
of Eq. (3).
Proof of Theorem 1. Let Gφ be the graph of the function φ:
Gφ :=
n
(x, y) : x ∈ {0, 1} × R × Rnc × Rne , y ∈ R, y = φ(x)
o
.
Consider Assumptions 2 and 3, as well as the definition of empirical distributions, we know that
pˆN
t;wt (Gφ ) = 1.
Since φ is a continuous function, the graph Gφ defines a closed set, and we can apply the Port
manteau theorem (e.g., Theorem 2.1 of Billingsley (2013)) to get
1 = lim sup
N →∞
pˆN
t;wt (Gφ ) ≤ pt;wt (Gφ ) ,
which concludes the proof. □
4. Interference Structure and Exposure Vectors
In this section, we examine the exposure vector concept as specified by Assumption 1. Basically, this
assumption asserts that there exists a fixed-dimension vector that captures all relevant information
from other units necessary to determine the potential outcome of each unit i. For example, the
exposure vector ⃗Ei
t may take the form of neighborhood averages or network centrality measures,
any of which provides a finite-length summary sufficient to model interference effects (Toulis and
Kao 2013, Basse et al. 2019, Forastiere et al. 2021, 2022, Leung 2022).
However, in realistic settings, we typically face a partially known interference structure. Our goal
is to revise the ESE equation (Eq. (3)) with this perspective. We first explain the exposure mapping
approach and decompose its concept into two distinct components: network structure (how units
are connected) and exposure mechanisms (how those connected units influence each other).

9
4.1. Exposure Mapping
We proceed by adapting the exposure mapping definition from Aronow and Samii (2017) to our
setting by incorporating the temporal dimension.
Definition 1 (Exposure mapping). Fix the treatment allocation wT . The exposure mapping
of round t is a function et such that for all units i, we have
et : {0, 1}N × RN × Rnc 7→ Rne , ⃗E i
t (wt) := etw⃗ t, ⃗Yt−1(wt−1), ⃗Ci
t . (4)
Note that Definition 1 specifies the exposure vectors while explicitly differentiates between imme
diate spillover effects (arising immediately from treatment assignmentw⃗ t) and peer effects that
propagate through intermediate changes in units’ outcomes ⃗Yt−1(wt−1).
The primary purpose of the exposure mapping framework is to simplify subsequent analysis
by reducing model dimensionality (ideally achieving ne ≪ N ). These mappings fundamentally
encompass two distinct yet closely interrelated components of interference patterns:
• Network structure: This component specifies the connectivity structure between units
through either binary relationships (e.g., adjacency matrices indicating whether units are con
nected) or weighted relationships (e.g., weighted directed graphs quantifying the magnitude of
unit interactions). In the framework of Aronow and Samii (2017), this structural information
can be incorporated into Eq. (4) through the covariate vector ⃗Ci
t . For instance, ⃗Ci
t may include
the i-th row of a network adjacency matrix, thereby embedding unit i’s connectivity pattern.
• Exposure mechanism: This component describes the influence rules that govern how con
nected units affect one another’s outcomes, essentially encoding the functional form of effects.
Within the framework of Aronow and Samii (2017), these mechanisms are represented by
the mathematical structure of the functions et in Eq. (4). For example, Cai et al. (2015)
employs a model where spillover effects are captured through the fraction of treated neighbors,
implementing an averaging mechanism with respect to peers’ treatment assignments.
To effectively leverage this framework, properly specified exposure mappings are essential
(Aronow and Samii 2017). Recent works study misspecified exposure mappings by restricting the
scope of potential misspecification (Leung 2022) and separating the role of exposure mappings
in defining causal effects of interest from assumptions about interference structure (S ̈avje 2024).
Nevertheless, misspecification risk remains a substantial methodological challenge both at the expo
sure mechanism level (as discussed in Auerbach et al. (2024)) and through unobserved network
connections (Egami 2021, Weinstein and Nevo 2023).3
3 For insightful discussions on this topic, see the exchanges surrounding S ̈avje (2024) in Auerbach et al. (2024), Leung (2024), S ̈avje (2024).

10
While domain knowledge can often guide the specification of exposure mechanisms, identifying
network structures presents significant challenges. Many settings in public health, marketplace
experimentation, and social science involve large populations of interacting units. Tracking network
connections in such contexts would require close observation of each experimental unit throughout
the entire experiment. In what follows, we demonstrate how causal message-passing provides a
robust framework that bypasses the need for explicit network structure knowledge; thereby, we
gain the required insight for handling the exposure vector ⃗Ei
t in our setting.
4.2. Causal Message Passing (CMP)
We begin by presenting a simplified version of the CMP outcome evolution (Shirani et al. 2025). Let
g and h be two real-valued functions defined on {0, 1} × R × Rnc. Consider Aij and Bij
t as unknown
weights that quantify the fixed and time-varying influence of unit j on unit i, respectively. CMP
considers the following family of outcome evolutions:
Yi
t (wt) := h wi
t, Y i
t−1(wt−1), ⃗Ci
t+
N
X
j=1
(Aij + Bij
t )g wj
t,Y j
t−1(wt−1), ⃗Cj
t . (5)
Considering the outcome evolution specified in Eq. (1), CMP posits an additive structure. Specif
ically, Eq. (5) assumes that each unit’s potential outcome evolves as the sum of two components:
a unit-specific term (characterized by the h-part) and a weighted aggregation of all experimental
units’ status (characterized by Aij, Bij
t , and the g-part). From the exposure mapping perspective,
CMP employs a one-dimensional exposure vector defined as
Ei
t (wt) :=
N
X
j=1
(Aij + Bij
t )g wj
t,Y j
t−1(wt−1), ⃗Cj
t . (6)
In view of Eq. (4), CMP indeed separates the two components of exposure mapping under an
additive assumption. Specifically, in Eq. (6), the weights Aij + Bij
t capture the network structure,
while the function g represents the underlying exposure mechanism.
Considering Eq. (6), CMP explicitly models how treatments trigger links. Note that the term
(Aij + Bij
t )g wj
t,Y j
t−1(wt−1), ⃗Cj
t describes the contribution of unit j to the outcome of unit i in
round t. When unit j is treated in round t, the functionality of the link is shifted by replacing
the baseline contribution (Aij + Bij
t )g 0, Y j
t−1(wt−1), ⃗Cj
t with the treatment-induced contribution
(Aij + Bij
t )g 1, Y j
t−1(wt−1), ⃗Cj
t . If this shift is non-zero, indicating that unit j impacts unit i, the
resulting effect is incorporated into the outcome of unit i in the subsequent round.
CMP specializes to dense networks by modeling both first- and second-order interactions through
independent Gaussian weights: Aij ∼ N (μij/N, σ2/N ) and Bij
t ∼ N (μij
t /N, σ2
t /N ). CMP then char
acterizes the limiting distribution of the interference effects. Specifically, let Et(wt) follow the same

11
distribution as the empirical distribution of E1
t (wt), . . . , EN
t (wt) as N → ∞ in Eq. (6). Under certain
regularity conditions, CMP establishes the following dynamics for the exposure effects:
Et(wt) a.=s. g ̃t(Wt, Yt−1, ⃗Ct, Zt), (7)
where g ̃t is a function that depends on g (see Eq. (5)) and the distributions of the first-order
weights μij + μij
t . Furthermore, Zt is a Gaussian random variable that reflects the impact of the
second-order Gaussian weights and Wt, Yt−1, ⃗Ct are as defined in Eq. (2).
Although this result allows CMP to bypass the observation of network structure by taking μij,
μij
t , σ, and σt as unknowns, it still requires a rough characterization of the exposure mechanism.
Specifically, Shirani and Bayati (2024) build their estimation by considering simple exposure mech
anisms where the average of previous round outcomes, the average of current treatments, and their
interaction term serve as proxies for interference patterns across units. Shirani et al. (2025) extend
this result and allow consideration of a set of candidate exposure mechanisms. They then present
a counterfactual cross-validation method to enable automatic selection of exposure mechanisms.
4.3. Partially Known Interference Structure
Our goal is to revise the ESE mappings in Eq. (3) by modeling the known and unknown components
of the interference structure while ensuring the tractability of subsequent analysis. For this purpose,
we consider the elements of the exposure vector for unit i in round t, as specified by Assumption 1:
⃗E i
t (wt) := E i(1)
t (wt), E i(2)
t (wt), . . . , E i(ne)
t (wt) ⊤. (8)
In view of Definition 1, we consider a sequence of “pseudo-functions” e1
t , . . . , ene
t such that
el
t : {0, 1}N × RN × Rnc 7→ R, E i(l)
t (wt) := el
tw⃗ t, ⃗Yt−1(wt−1), ⃗Ci
t , l = 1, . . . , ne. (9)
In Eq. (9), each el
t defines an operator from current treatments and previous outcomes to a scalar
exposure measure, incorporating unit covariates. We use the term pseudo-function to emphasize
that each el
t must remain well-defined when operating on infinite-dimensional vectors as N → ∞.
Now, we can reflect the available information on interference structure through a careful design
of pseudo-functions el
t. For example, suppose all we know is that the interaction network consists
of K distinct clusters, each representing a cohesive subgroup with stronger internal connections
than external ones. Then, we let ne = K and define el
t to capture how units belonging to cluster l
impact unit i, with heterogeneity arising from unit-specific covariates ⃗Ci
t . In the next step, inspired
by CMP, we incorporate the unknown components in each direction of the exposure vector through
the distribution of relevant treatments. In the clustered setting, we can assume that el
t reflects the
influence of cluster l on unit i through the distribution of treatments of units belonging to cluster l.
Considering the random vector ⃗Et(wt) that follows the limiting empirical distribution of exposure
vectors (as per Assumption 3), we formalize the necessary conditions in the following assumption.

12
Assumption 4 (Stable decomposition of interference). For each round t and any treatment
allocation wt, there exists a function f e
t and random objects It(wt) and Xt such that
⃗Et(wt) a.=s. f e
t (It(wt), Xt),
where the functions f e
t and the random object Xt remain invariant across treatment allocations wt.
Assumption 4 is critical to our setting by decomposing the aggregate interference effects into
three components: treatment-dependent factors It(wt), latent interference components Xt, and
the functional relationship f e
t (which depends on pseudo-functions el
t). Specifically, the invariance
condition (that both f e
t and Xt remain unchanged across treatment assignments) ensures that all
variations in interference effects can be explained by random objects It(wt).
4.3.1. Illustrative examples We present several examples to clarify the conditions of
Assumption 4 and explicitly characterize the treatment-endogenous object It(wt) in each case.
Causal message passing. Considering Eq. (7), CMP provides a concrete example where
Assumption 4 holds under dense interference structures, with It(wt) = {Wt, Yt−1}, reflecting the
distribution of current treatments and past outcomes. Notably, the additive model specification and
second-order i.i.d. random weights enable a clean characterization of the exogenous component as
Xt = { ⃗Ct, Zt}. While the covariate component ⃗Ct may be partially observable, Zt can be interpreted
as unit-level noise in large-sample regimes (Shirani et al. 2025).
Clustered network structure. Reconsider the clustered setting with K clusters, and let
W (l)
t denote a random variable distributed as the treatments assigned to units in cluster l, for
l = 1, . . . , K. In this case, It(wt) = W (1)
t , . . . , W (K)
t . Intuitively, the treatment-endogenous object
reduces to the collection of cluster-level treatment distributions. Combined with the unknown
operators el
t, whose structure is captured by f e
t in Assumption 4, this highlights the fact that each
unit may be affected differently by each cluster of units.
Mean-field interference mechanisms. Another setting where Assumption 4 holds is when
interference is mediated by mean-field quantities. For instance, Munro et al. (2021) analyze a market
where spillovers arise through equilibrium prices that match supply and demand. In general, we
may consider a mean-field quantity Mt(wt) that mediates interference effects for each unit under
treatment scenario wt. In this case, the treatment-endogenous object is It(wt) := {Mt(wt)}.
Note that Assumption 4 can also be viewed through a mean-field perspective. Indeed, the
treatment-driven object It(wt) serves as the mean-field quantity that summarizes aggregate inter
ference effects. This is more general than standard mean-field models, which typically assume that
unit-level interference is mediated by mean-field quantities. A deeper investigation of this connec
tion is left for future work, as its relevance is context-dependent and in some applications unit-level
mean-fields might be sufficient (Wager and Xu 2021, Johari et al. 2022, Munro et al. 2021).

13
Social influencers. Consider an experiment on a social media platform involving a small set
of influencers and a large population of regular users. Influencers are users with disproportionately
high reach and engagement who can affect the behavior of many others. Because of their outsized
impact, we track each influencer’s treatment status individually while summarizing the remaining
users through an aggregate measure. Without loss of generality, index units so that the influencers
correspond to 1 through ne − 1. We then define It(wt) = W 1
t , . . . , W ne−1
t , Wt , where the first
ne − 1 components capture individual influencer treatments, and the final component Wt represents
the treatment distribution across all remaining users.
4.4. Revised Experimental State Evolution
Finally, we revise the result of Theorem 1; considering the conditions of Assumption 4 on aggregate
interference patterns, the following result is immediate.
Theorem 2 (ESE-II). Under Assumptions 1-4, if the function φ is continuous, there exist ran
dom functions ft, t = 1, . . . , T , such that
Yt
a.=s. ft Wt, Yt−1; It(wt) , (10)
where
ft Wt, Yt−1; It(wt) := φ Wt, Yt−1, ⃗Ct; f e
t It(wt), Xt (11)
and the recursion initiates from pretreatment initial outcomes Y0.
By the definition in Eq. (11), for each t, the ESE mapping ft depends on unit-level evolutions
captured through φ, interference functional structure reflected by f e
t , and limiting distributions of
covariates and exogenous interference components (captured by ⃗Ct and Xt, respectively).
Theorem 2 characterizes three distinct components of the experimental system. First, the ini
tial outcomes collected before any treatment intervention, whose limiting empirical distribution is
captured by Y0. Second, the ESE mappings ft that encode the evolution mechanisms governing
the response of the experimental system to the treatment assignment. Crucially, these first two
components remain unchanged regardless of treatment allocation. Third, the variable inputs to the
ESE mappings that change across different treatment scenarios.
This decomposition reveals a key insight: ESE mappings characterize parallel evolution patterns
across treatment scenarios, where aggregate outcomes evolve under identical mechanisms but with
scenario-specific inputs. We explore this parallel structure in the next section.

14
Pretreatment Outcomes (t=0)
t=1
Outcomes distribution under treatment assignment w!, w", w#, ... , w$
t=2 t=T
t=3 ...
Outcomes distribution under treatment assignment w!% , w"% , w#% , ... , w%$
w!
w"#
f!($)
f"($) f$($) f%($)
f"($) f$($) f%($)
w" w$ w%
w!# w$
# w#%
Figure 4 Functional parallelism: both scenarios evolve under same ESE mappings despite distinct distributions.
5. Estimation Strategy: Distributional Parallel Propagations
This section explains the parallel structures identified by ESE mappings across different treatment
scenarios and explains when they enable counterfactual estimation. To illustrate, consider two
distinct treatment assignments wT and w′
T and their corresponding panels of potential outcomes:
Y (wT ) := ⃗Y0 ⃗Y1(w1) . . . ⃗YT (wT ) Y (w′
T ) := ⃗Y0 ⃗Y1(w′
1) . . . ⃗YT (w′
T ) . (12)
From Theorem 2 and Eq. (12), each outcome panel characterizes a distinct trajectory with specific
structural properties. First, both trajectories originate from a common baseline: the pretreatment
observations ⃗Y0. Beginning in round t = 1, these trajectories diverge into two distinct outcome
vectors ⃗Y1(w1) and ⃗Y1(w′
1). Crucially, while these outcomes differ, their distributions emerge from
⃗Y0 according to the same mathematical rule (the ESE mapping f1(·)) applied to different inputs
w1 and w′
1, respectively. This parallel evolutionary mechanism persists throughout the experiment
timeline, generating two distinct but structurally parallel potential evolutions (Figure 4).
Now, suppose we observe outcomes under wT and aim to estimate the counterfactuals under w′
T.
In the first stage, we use the observed outcomes Y (WT = wT ) to estimate the ESE mappings ft.
In the second stage, we exploit the parallel structure across treatment scenarios to construct coun
terfactual trajectories recursively. Starting from the common baseline of pretreatment outcomes
⃗Y0, we apply the estimated ESE mappings sequentially under the desired treatment assignment
w′
T , which yields the aggregate counterfactual outcomes for the entire experimental population.
Similar evolution-based ideas appear in the difference-in-differences (DID) (Angrist and Pischke
2009) and synthetic control methods (SCM) (Abadie et al. 2010). DID relies on the parallel trends
assumption: the unobserved counterfactual trajectory of the treated group is assumed to evolve in
parallel with the observed trajectory of the control group, starting from the pretreatment outcomes.
SCM also uses pretreatment outcomes and constructs the counterfactual evolution of the treated
group as a weighted combination of control group trajectories.

15
In general, parallel structures in the evolution of potential outcomes allow us to propagate for
ward from a common baseline and construct counterfactual trajectories through a sequential pro
cess. Under SUTVA, such parallelisms can be studied at the unit level, as in DID and SCM. Recent
work extends this idea to networked settings by introducing modified parallel trends assumptions
that account for interference (Xu 2023, Jetsupphasuk et al. 2025). However, our framework shifts
the perspective to the aggregate level, where we model and characterize a conceptually similar
form of functional parallelism at the distributional level.
Estimating the unknown ESE mappings ft is still challenging in practice. With only a single
realization of the outcome panel, the information available for learning these mappings is lim
ited. Focusing on treatment-induced variations provides new opportunities for estimation. In many
applications, it is not necessary to recover the exact functional form of the ESE mappings, and
suitable approximations may be sufficient. To formalize this idea, we consider two distinct treat
ment assignments: the baseline scenario with no treatment and wT representing an alternative
assignment. Under Assumptions 3 and 4, and using the notation established in Eq. (2), we adopt
the following conventions for any t:
0, Y 0
t−1, ⃗C0
t , ⃗E 0
t , Yt ∼ pt;0, ⃗E 0
t
a.=s. f e
t (I0
t , Xt),
Wt, Yt−1, ⃗Ct, ⃗Et, Yt ∼ pt;wt , ⃗Et
a.=s. f e
t (It, Xt).
(13)
Here, the two sequences of random variables, denoted by Y 0
t and Yt, represent the outcome distri
butions under their corresponding treatment scenarios.
Theorem 3. Suppose that the conditions of Theorem 2 hold and the ESE mappings ft are three
times continuously differentiable for all t. Then,
Yt = αtWt + βtYt−1 + γtIt + ηtWtYt−1 + θtWtIt + δt + Rt, (14)
where αt, βt, γt, ηt, θt, and δt are random coefficients depending on the baseline scenario (with no
treatment) and independent of Wt. Additionally, the term Rt collects the unretained second-order
terms containing (Yt−1 − Y 0
t−1)2, (It − I0
t )2, or (Yt−1 − Y 0
t−1)(It − I0
t ), together with the third-order
derivatives of ft evaluated at an intermediate point between the baseline and the perturbed inputs.
The relation in Eq. (14) captures how the treatment intervention, together with network effects,
shifts the outcomes relative to the baseline scenario. When treatment effects are small in magnitude,
the quantities Yt−1 and Y 0
t−1 (as well as It and I0
t ) are expected to remain sufficiently close. In this
case, the remainder term Rt in Eq. (14) can be ignored. The smoothness assumption in Theorem 3
is also standard in the literature, see for example Li and Wager (2022b).

16
Proof of Theorem 3. By the result of Theorem 2 and Assumption 4, we know that
Y0
t
a.=s. ft 0, Y 0
t−1; I0
t , Yt
a.=s. ft Wt, Yt−1; It , (15)
where both recursions start from the same pre-treatment outcome Y0. Note that Eq. (15) involves
two sequences of almost sure events. Since the union of a countable sequence of measure-zero sets
is a measure-zero set, there exists S ⊆ Ω with P(S) = 1 such that for all ω ∈ S, the equalities
in Eq. (15) hold for all t (the dependence of random variables on ω is omitted for clarity of
presentation). Applying Taylor’s expansion pathwise for every ω ∈ S, we get the following:
Yt = Y 0
t + Wt∂xft + (Yt−1 − Y 0
t−1)∂yft + (It − I0
t )∂zft
+1
2 (Wt)2∂2
xft + Wt(Yt−1 − Y 0
t−1)∂xyft + Wt(It − I0
t )∂xzft + Rt, (16)
where ∂xft, ∂yft, and ∂zft denote the partial derivatives of ft 0, Y 0
t−1, I0
t with respect to its
first, second, and third arguments respectively; higher-order derivatives follow the same notation
convention. In Eq. (16), the term Rt collects the unretained second-order terms together with the
third-order derivatives of ft as the remainder of our Taylor expansion. Considering Wt is a 0-1
variable, we know that (Wt)2 = Wt and we can rewrite Eq. (16) as given by Eq. (14) with
αt := ∂xft + 1
2∂2
xft − Y 0
t−1∂xyft − I0
t ∂xzft,
βt := ∂yft, γt := ∂zft, ηt := ∂xyft, θt := ∂xzft,
δt := Y 0
t −Y0
t−1∂yft − I0
t ∂zft.
This concludes the proof. □
The proof of Theorem 3 reveals that randomized treatment assignment plays a fundamental
role. Because treatments are assigned independently of all other factors, including the initial pre
treatment outcomes and so the baseline outcomes, we can clearly isolate treatment-induced vari
ations (whether direct or network-mediated) in aggregate outcomes from the underlying model
parameters. This separation enables simplifying the estimation of unknown ESE mappings to the
estimation of the unknown coefficients in Eq. (14). Once these coefficients are estimated, we can
substitute Wt in Eq. (14) with treatment assignments from alternative scenarios and, starting from
the same pre-treatment outcomes Y0, recursively construct other counterfactual trajectories.
We emphasize that, for the coefficients in Eq. (14) to be identifiable, additional structural
assumptions are needed. For example, in the CMP framework, where It = {Wt, Yt−1}, the right
hand side of Eq. (14) admits a simpler form. If we further assume that the coefficients are time
invariant, this formulation reduces to the model of Shirani and Bayati (2024), for which consistency
results are available. For the other examples in § 4.3.1, Eq. (14) should be reformulated to incor
porate the specific structural features of the interference mechanisms in each setting and to ensure
that the resulting model remains identifiable. A full examination of this problem lies beyond the
scope of this work and should be tailored to each setting based on the experimental context.

17
6. Discussion and Conclusion
This work adopts an evolution-based perspective on counterfactual estimation under interference.
Instead of modeling outcomes directly as functions of treatments, we focus on evolutionary mod
els that capture how outcomes transition from one observation to the next, characterizing the
treatment-driven variations. Related approaches, such as Markovian interference models (Farias
et al. 2022) and switchback experiments (Hu and Wager 2022, Bojinov et al. 2023), rely directly on
temporal outcomes to improve estimation and design. Our framework instead centers on the evolu
tion rules: the mechanism that operates between observations and captures how treatment-triggered
interference drives aggregate changes in outcome dynamics.
Building on the causal message passing framework, which offers a concrete instantiation of
evolution-based estimation (Shirani and Bayati 2024, Shirani et al. 2025), we take a broader view.
We investigate the minimal structural conditions under which evolution-based analysis is possi
ble, albeit imposing stronger regularity assumptions on potential outcomes. We also highlight the
notion of distributional parallel propagation as the functional parallelism across counterfactual
scenarios. These results clarify how evolution-based approaches should be interpreted.
The core operating assumption requires a stable decomposition of aggregate interference effects
into two parts: an endogenous component that varies across treatment scenarios and an exogenous
component that remains invariant to treatment assignment. This decomposition enables isolating
treatment-driven variations as outcomes evolve during the experiment. However, in certain settings,
this invariance property is unrealistic. Exposure mechanisms may themselves shift with treatment.
For example, in systems with threshold dynamics where peer influence activates only after a critical
mass of the treatment adoption, the required decomposition does not hold.
Relying on treatment-driven variations over time also constrains the applicability of evolution
based frameworks. To illustrate this, we apply two versions of the CMP algorithm to the election
simulator data of Shirani and Bayati (2025), which replicates the voter mobilization experiment of
Bond et al. (2012). The simulator generates a synthetic social network and records voting intentions
for 20,000 users beginning 40 days before election day.
Informational messages with “weak” treatment signal
0123
2.45
2.50
Mean of Observed Outcomes
0123 Time
0.8575
0.8600
St. Dev. of Observed Outcomes
GT CMP bCMP DM HT
0.00
0.02
0.04
0.06 Total Treatment Effect
0123 Time
2.44
2.46
2.48
2.50
2.52
CFE of All Control
0123 Time
2.44
2.46
2.48
2.50
2.52
CFE of All Treatment
Causal-MP Ground Truth
Social messages with “strong” treatment signal
0123
2.45
2.50
2.55
Mean of Observed Outcomes
0123 Time
0.84
0.86
St. Dev. of Observed Outcomes
GT CMP bCMP DM HT
0.04
0.06
0.08
0.10
Total Treatment Effect
0123 Time
2.45
2.50
2.55
2.60
CFE of All Control
0123 Time
2.45
2.50
2.55
2.60
CFE of All Treatment
Causal-MP Ground Truth
Figure 5 The performance of evolution-based estimators under strong time trends: CMP succeeds when the
treatment signal is strong (social message) but struggles when it is weak (informational message).

18
The experiment includes two treatment scenarios: an informational message that provides factual
voting details and a social message that additionally displays peer behavior. Each user is indepen
dently assigned treatment with probability 0% in the first 10 days and with probabilities 20%, 40%,
and 80% in the second, third, and fourth 10-day blocks, respectively. Because users are not online
every day, the raw data contain missing outcomes. We therefore aggregate each 10-day block into
a single round, producing a panel with four rounds. Since the simulator is fully controlled, both
scenarios provide ground-truth outcomes, enabling evaluation of the estimation method.
Figure 5 reports the results, comparing ground-truth (GT) values with estimates from basic
CMP (bCMP) (Shirani and Bayati 2024), the full CMP method (Shirani et al. 2025), the difference
in-means estimator (DM), and the Horvitz–Thompson estimator (HT)4 (S ̈avje et al. 2021). For
each scenario, we also plot the counterfactual evolution of the sample-mean outcomes (CFE) under
both all-control and all-treatment conditions, using the GT values and the CMP estimates.
In both scenarios, the middle panels show a clear upward trend in the all-control case, reflecting
the natural increase in voting intention as election day approaches. In the informational-message
scenario (left panels), where the treatment signal is weak, both CMP methods struggle to separate
treatment-induced variation from this strong time trend and therefore overestimate the treatment
effect. In contrast, in the social-message scenario (right panels), where the treatment signal is
substantially stronger, both CMP methods succeed in distinguishing treatment-driven changes
from the underlying time trend and produce improved treatment-effect estimates.
In conclusion, in settings where network interference is widespread, it may not be practical to
attempt direct observation of the underlying network. Evolution-based approaches are particularly
useful in such cases, but their validity depends on the interference structures remaining stable
across treatment allocations. When this stability holds, methods such as causal message passing
algorithms offer a principled and cost-effective strategy for estimating treatment effects.
4 Difference-in-means (DM) and Horvitz-Thompson (HT) are expressed as:
τˆDM :=
PN
i=1 Y i
TWi
T PN
i=1 W i
T
−
PN
i=1 Y i
T (1 − W i
T)
PN
i=1(1 − W i
T ) , τˆHT := 1
N
N
X
i=1
Yi
TWi
T
E[W i
T] − Yi
T (1 − W i
T) E[1 − W i
T] .

19
References
Abadie, A., Agarwal, A., and Shah, D. (2025). A causal inference framework for data rich environments. arXiv
preprint arXiv:2504.01702.
Abadie, A., Diamond, A., and Hainmueller, J. (2010). Synthetic control methods for comparative case studies:
Estimating the effect of california’s tobacco control program. Journal of the American statistical Association,
105(490):493–505.
Angrist, J. D. and Pischke, J.-S. (2009). Mostly harmless econometrics: An empiricist’s companion. Princeton
university press.
Aronow, P. M. and Samii, C. (2017). Estimating average causal effects under general interference, with application
to a social network experiment. The Annals of Applied Statistics, 11(4):1912 – 1947.
Auerbach, E., Auerbach, J., and Tabord-Meehan, M. (2024). Discussion of ‘causal inference with misspecified exposure
mappings: separating definitions and assumptions’. Biometrika, 111(1):21–24.
Basse, G. W., Feller, A., and Toulis, P. (2019). Randomization tests of causal effects under interference. Biometrika,
106(2):487–494.
Bayati, M., Luo, Y., Overman, W., Shirani Faradonbeh, M. S., and Xiong, R. (2024). Higher-order causal message
passing for experimentation with complex interference. Advances in Neural Information Processing Systems,
37:81836–81856.
Bayati, M. and Montanari, A. (2011). The dynamics of message passing on dense graphs, with applications to
compressed sensing. IEEE Transactions on Information Theory, 57(2):764–785.
Billingsley, P. (2013). Convergence of probability measures. John Wiley & Sons.
Bojinov, I., Simchi-Levi, D., and Zhao, J. (2023). Design and analysis of switchback experiments. Management
Science, 69(7):3759–3777.
Bond, R. M., Fariss, C. J., Jones, J. J., Kramer, A. D., Marlow, C., Settle, J. E., and Fowler, J. H. (2012). A
61-million-person experiment in social influence and political mobilization. Nature, 489(7415):295–298.
Boyarsky, A., Namkoong, H., and Pouget-Abadie, J. (2023). Modeling interference using experiment roll-out. arXiv
preprint arXiv:2305.10728.
Cai, J., Janvry, A. D., and Sadoulet, E. (2015). Social networks and the decision to insure. American Economic
Journal: Applied Economics, 7(2):81–108.
Casadiego, J., Nitzan, M., Hallerberg, S., and Timme, M. (2017). Model-free inference of direct network interactions
from nonlinear collective dynamics. Nature communications, 8(1):2192.
Donoho, D. L., Maleki, A., and Montanari, A. (2009). Message-passing algorithms for compressed sensing. Proceedings
of the National Academy of Sciences, 106(45):18914–18919.
Eckles, D., Karrer, B., and Ugander, J. (2016). Design and analysis of experiments in networks: Reducing bias from
interference. Journal of Causal Inference, 5(1):20150021.
Egami, N. (2021). Spillover effects in the presence of unobserved networks. Political Analysis, 29(3):287–316.
Farias, V., Li, A., Peng, T., and Zheng, A. (2022). Markovian interference in experiments. Advances in Neural
Information Processing Systems, 35:535–549.

20
Forastiere, L., Airoldi, E. M., and Mealli, F. (2021). Identification and estimation of treatment and interference effects
in observational studies on networks. Journal of the American Statistical Association, 116(534):901–918.
Forastiere, L., Mealli, F., Wu, A., and Airoldi, E. M. (2022). Estimating causal effects under network interference
with bayesian generalized propensity scores. Journal of Machine Learning Research, 23(289):1–61.
Glynn, P. W., Johari, R., and Rasouli, M. (2020). Adaptive experimental design with temporal interference: A
maximum likelihood approach. Advances in Neural Information Processing Systems, 33:15054–15064.
Han, K., Basse, G., and Bojinov, I. (2024). Population interference in panel experiments. Journal of Econometrics,
238(1):105565.
Holland, P. W. (1986). Statistics and causal inference. Journal of the American statistical Association, 81(396):945
960.
Hu, Y. and Wager, S. (2022). Switchback experiments under geometric mixing. arXiv preprint arXiv:2209.00197.
Hudgens, M. G. and Halloran, M. E. (2012). Toward causal inference with interference. Journal of the American
Statistical Association, 103(482):832–842.
Imbens, G. W. and Rubin, D. B. (2015). Causal inference in statistics, social, and biomedical sciences. Cambridge
University Press.
Jackson, M. O. et al. (2008). Social and economic networks, volume 3. Princeton university press Princeton.
Jetsupphasuk, M., Li, D., and Hudgens, M. G. (2025). Estimating causal effects using difference-in-differences under
network dependency and interference. arXiv preprint arXiv:2502.03414.
Jia, Z., Kallus, N., and Yu, Z. S. (2025). Clustered switchback designs for experimentation under spatio-temporal
interference. arXiv preprint arXiv:2312.15574.
Johari, R., Li, H., Liskovich, I., and Weintraub, G. Y. (2022). Experimental design in two-sided platforms: An analysis
of bias. Management Science, 68(10):7069–7089.
Kolaczyk, E. D. and Csa ́rdi, G. (2014). Statistical analysis of network data with R, volume 65. Springer.
Leung, M. P. (2022). Causal inference under approximate neighborhood interference. Econometrica, 90(1):267–293.
Leung, M. P. (2024). Discussion of ‘causal inference with misspecified exposure mappings: separating definitions and
assumptions’. Biometrika, 111(1):17–20.
Li, S., Johari, R., Kuang, X., and Wager, S. (2023). Experimenting under stochastic congestion. arXiv preprint
arXiv:2302.12093.
Li, S. and Wager, S. (2022a). Network interference in micro-randomized trials. arXiv preprint arXiv:2202.05356.
Li, S. and Wager, S. (2022b). Random graph asymptotics for treatment effect estimation under network interference.
The Annals of Statistics, 50(4):2334–2358.
Manski, C. F. (2013). Identification of treatment response with social interactions. The Econometrics Journal,
16(1):S1–S23.
Mukaigawara, M., Imai, K., Lyall, J., and Papadogeorgou, G. (2025). Spatiotemporal causal inference with arbitrary
spillover and carryover effects. arXiv preprint arXiv:2504.03464.
Munro, E., Wager, S., and Xu, K. (2021). Treatment effects in market equilibrium. arXiv preprint arXiv:2109.11647.

21
Ni, T., Bojinov, I., and Zhao, J. (2023). Design of panel experiments with spatial and temporal interference. Available
at SSRN 4466598.
Nitzan, M., Casadiego, J., and Timme, M. (2017). Revealing physical interaction networks from statistics of collective
dynamics. Science advances, 3(2):e1600396.
Rubin, D. B. (1978). Bayesian inference for causal effects: The role of randomization. The Annals of statistics, pages
34–58.
Sa ̈vje, F. (2024). Causal inference with misspecified exposure mappings: separating definitions and assumptions.
Biometrika, 111(1):1–15.
Sa ̈vje, F., Aronow, P., and Hudgens, M. (2021). Average treatment effects in the presence of unknown interference.
Annals of statistics, 49(2):673.
Shirani, S. and Bayati, M. (2024). Causal message-passing for experiments with unknown and general network
interference. Proceedings of the National Academy of Sciences, 121(40):e2322232121.
Shirani, S. and Bayati, M. (2025). Simulating and experimenting with social media mobilization using llm agents.
arXiv preprint arXiv:2510.26494.
Shirani, S., Luo, Y., Overman, W., Xiong, R., and Bayati, M. (2025). Can we validate counterfactual estimations in
the presence of general network interference? arXiv preprint arXiv:2502.01106.
Stepaniants, G., Brunton, B. W., and Kutz, J. N. (2020). Inferring causal networks of dynamical systems through
transient dynamics and perturbation. Physical Review E, 102(4):042309.
Sa ̈vje, F. (2024). Rejoinder: Causal inference with misspecified exposure mappings: separating definitions and assump
tions. Biometrika, 111(1):25–29.
Timme, M. and Casadiego, J. (2014). Revealing networks from dynamics: an introduction. Journal of Physics A:
Mathematical and Theoretical, 47(34):343001.
Toulis, P. and Kao, E. (2013). Estimation of causal peer influence effects. In International conference on machine
learning, pages 1489–1497. PMLR.
Ugander, J., Karrer, B., Backstrom, L., and Kleinberg, J. (2013). Graph cluster randomization: Network exposure to
multiple universes. In Proceedings of the 19th ACM SIGKDD international conference on Knowledge discovery
and data mining, pages 329–337.
Wager, S. and Xu, K. (2021). Experimenting in equilibrium. Management Science, 67(11):6694–6715.
Weinstein, B. and Nevo, D. (2023). Causal inference with misspecified network interference structure. arXiv preprint
arXiv:2302.11322.
Xu, R. (2023). Difference-in-differences with interference. arXiv preprint arXiv:2306.12003.
Yu, C. L., Airoldi, E. M., Borgs, C., and Chayes, J. T. (2022). Estimating the total treatment effect in ran
domized experiments with unknown network structure. Proceedings of the National Academy of Sciences,
119(44):e2208975119.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:14.801Z
- **Text Length:** 61013 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 21 of 21
