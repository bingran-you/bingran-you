# PDF Document: Oliveira and Mensch - 2025 - Posterior-Separable Costs and Menu Preferences.pdf

**File Path:** Oliveira and Mensch - 2025 - Posterior-Separable Costs and Menu Preferences.pdf

**Processed Date:** 2026-02-10T18:13:39.704Z

**File Size:** 614.84 KB

**Total Pages:** 22

**Extracted Pages:** 22

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3237

**Title:** Posterior-Separable Costs and Menu Preferences

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Posterior-Separable Costs and Menu Preferences∗
Henrique de Oliveira†
FGV - S ̃ao Paulo School of Economics
Jeffrey Mensch‡
Hebrew University of Jerusalem
November 18, 2025
Abstract
We consider an agent with a rationally inattentive preference over menus of acts, as in De Oliveira et al.
(2017). We show that two axioms, Independence of Irrelevant Alternatives and Ignorance Equivalence,
are necessary and sufficient for this agent to have a posterior-separable cost satisfying a mild smoothness
condition, called joint-directional differentiability. Viewing the decision-maker’s problem as a bayesian
persuasion problem, we also show that these axioms are necessary and sufficient for solvability by a
unique hyperplane. When the cost function remains invariant for different priors, we show that these
axioms imply uniformly posterior separable costs that are differentiable.
1 Introduction
In many economic settings, a decision maker (DM) must acquire information before making a choice. This
information may be costly, as it is difficult to acquire more precise information, while at the same time may
allow for flexibility in the information chosen by focusing on different aspects of the problem. To this end,
the rational inattention literature has focused to a large extent on posterior separable costs of information,
where the cost of an experiment π is given by
c(π) =
Z
ψ(p)dπ(p)
for some convex function. This representation allows for analyzing such problems in a tractable manner,
using information design tools to solve for the problem, while guaranteeing that more information is always
more costly in the Blackwell order (Blackwell, 1951). This paper aims to axiomatize preferences over menus
that can be represented as coming from such costs.
There is already an existing literature on the representation of information costs based on individual
preferences. Most directly connected is De Oliveira et al. (2017), which axiomatize preferences over menus
that can be expressed as deriving from a DM who first acquires information, and then makes a choice from
the menu that maximizes expected utility. This, in turn, is part of a more general approach of modeling
∗This paper partially subsumes results from de Oliveira (2014), in which our two main axioms originally appear along with a partial characterization of the information costs that are consistent with them. We would like to thank Tommaso Denti for some helpful comments and suggestions, as well as seminar participants at SAET 2025. †henrique.oliveira@fgv.br, https://henriquedeoliveira.com ‡jeffrey.mensch@mail.huji.ac.il, https://sites.google.com/site/jeffreyimensch/.
1
arXiv:2511.09424v2 [econ.TH] 16 Nov 2025

“costly contemplation” (Ergin and Sarver, 2010). Our work builds on these by providing axioms under which
the representation in the former is posterior separable.
Separately, there is a literature on identifying whether a finite dataset is consistent with costly informa
tion acquisition through revealed preference. Caplin and Dean (2015) provide such a characterization for
additively separable information costs, while Denti (2022) provides a characterization for posterior separable
costs. Other papers, such as Caplin, Dean, and Leahy (2022) and Mensch and Malik (2024) characterize
more specific forms of posterior-separable costs. These papers take as given a finite dataset, and check that
for consistency with these respective theories via an acyclicality condition. By contrast, our paper takes
preferences as given, and attempts to find a representation based on these.
Posterior-separable costs have found widespread application in the literature due to their ease of analysis.
Under the hypothesis of expected utility, one can write the indirect utility as a convex function φ(p) of the
posterior belief. As a result, the net objective of the DM at a given posterior is
N (p) := φ(p) − ψ(p)
and so the DM’s overall objective is linear in π. This allows for the use of concavification (Aumann and
Maschler, 1995; Kamenica and Gentzkow, 2011) to solve for the optimal distribution, whereby the DM can
achieve a value equal to the smallest concave function lying above N by choosing an appropriate distribution
of posteriors. This appealing structure of the solution has led to its widespread use in applications in
models with rationally inattentive agents. Some such work include Lipnowski, Mathevet, and Wei (2020),
Yang (2020), Mensch (2022), Yoder (2022), Gleyze and Pernoud (2023), and H ́ebert and La’O (2023). In
addition, more specific costs functions within this class have been developed, such as entropy costs (Sims,
2003; Mateˇjka and McKay, 2015), neighborhood-based costs (H ́ebert and Woodford, 2021), and log-likelihood
costs (Pomatto, Strack, and Tamuz, 2023). For a more extensive discussion of this class of functions, see
Denti (2022).
Our result relies on two key axioms to tighten the representation of De Oliveira et al. (2017). The first
axiom, Independence of Irrelevant Alternatives, states that if the DM is indifferent between two menus F, G
as well as their intersection, then the DM is also indifferent to their union. The idea is that the preferences
indicate that the options outside of the intersection are not useful, and so the DM does not benefit from the
added flexibility. Thus, they remain without benefit when considering the union.
The second axiom, Ignorance Equivalence1, states that for each menu, there is an act that the DM is
indifferent to, including under union with the menu. This act provides an “ignorance equivalent” (Mu ̈ller
Itten, Armenter, and Stangebye, 2023) to the menu. When this act is added to the menu, the agent is
indifferent between acquiring information optimally for the menu, or not acquiring any information and
simply choosing the act. Thus, the extra flexibility afforded by adding the act does not increase the menu’s
value. As Mu ̈ller-Itten, Armenter, and Stangebye (2023) explain, the ignorance equivalent can be viewed as
an analogue of a certainty equivalent for menus.
Together, these capture the idea that the optimal choice of the information by the DM, given that they
are rationally inattentive, can be expressed via a unique hyperplane in the payoff-probability space. This
hyperplane will be tangent to the payoff function at the optimal points of the information choice, and lie above
the other points. Thus, the hyperplane is the unique optimal concavification of the DM’s objective, given a
posterior-separable objective. This “unique hyperplane” property holds if and only if the cost of information
1This axiom was called “Linearity” in de Oliveira (2014).
2

is both posterior separable and satisfies a property that we call “joint directional differentiability.” We discuss
the role of each axiom in the development of this conceptualization in Section 5.
The presence of a unique hyperplane is a common but underappreciated feature of the most commonly
used posterior-separable cost functions, including the above-cited literature. Moreover, the set of such cost
functions is dense with the set of posterior separable costs, and is satisfied whenever the cost function is
differentiable (as is the case for almost all commonly used functions, such as entropy, log-likelihood, residual
variance, and neighborhood-based costs). As we show in Section 6, when considering uniformly posterior
separable costs, our two axioms yield a differentiable cost representation.
This property is useful for solving rational inattention problems, as whenever the cost function is differ
entiable over all feasible distributions, one uses a first-order condition on the cost function to pin down the
unique optimal hyperplane. The optimal hyperplane, in turn, indicates which posteriors can be chosen for
each action from a given menu (see Caplin, Dean, and Leahy (2022), Lemma 1, which they refer to as the
“Lagrangian lemma”). As the optimal choice of information is upper-hemicontinuous in the payoffs from the
menu, the unique hyperplane property means that the Lagrange multiplier that defines the optimal choice
of information will react continuously to perturbations of the menu. The well-behaved nature of information
choice, given the unique hyperplane property, greatly simplifies the analysis of the DM’s problem.
2 Model
Let Ω denote a finite set of states of the world and let X be a mixture space of consequences2. An act is a
function f : Ω → X. A finite set of acts will be called a menu and denoted by F, G, H etc. The set of all
acts is denoted by F and the set of all menus by F. A single act f can also be seen as a singleton menu {f };
we usually omit the brackets if there is no chance for confusion.
Mixtures of acts are defined pointwise: given two acts f, g and a scalar α ∈ [0, 1], denote by αf +(1 − α) g
the act that in each state ω delivers the outcome αf (ω) + (1 − α) g (ω). For α ∈ [0, 1], the mixture of two
menus is defined as
αF + (1 − α) G = {αf + (1 − α) g : f ∈ F, g ∈ G} .
We can interpret αF + (1 − α) G as a lottery over what menu the agent faces.
Given an arbitrary set Z we let ∆(Z) denote the set of probability distributions over Z with finite support.
2.1 Rationally Inattentive Preferences
The primitive is a preference ≿ defined over menus, which is interpreted according to the following timeline.
choose
menu allocate
attention observe
signal choose
act
Thus, the agent chooses among menus while aware that they will be able to obtain information before
finally choosing an act. We consider an agent who is rationally inattentive, that is, whose preferences can
be represented by
V (φF ) = max
π ∈Π(p0 )
Z
φF (p)π(dp) − c(π),
2For example, X could be the set of lotteries over a fixed set of prizes, or it could be a convex subset of some vector space.
3

where
Π(p0) = π ∈ ∆(∆(Ω))
Z
p(ω)π(dp) = p0(ω) ∀ω ∈ Ω
represents distributions over posterior beliefs consistent with possible finite information structures, c :
Π(p0) → R ∪ {∞} is the cost of information3, and
φF (p) = max
f ∈F
X
ω
u(f (ω))p(ω),
where u : X → R is the utility function over consequences. We assume that the image of u is R.
Note that, in the representation above, the consequence associated with an act in a given state only
matters insofar as it affects the utility. Thus, we may consider as shorthand, instead of acts f : Ω → X,
utility acts given by u ◦ f : Ω → R. We may also work with utility menus—finite sets of utility acts. For
instance, when we refer to the menu F = {0}, we mean a utility menu that contains a single utility act
0 ∈ RΩ or, equivalently, any menu that has a single act giving utility zero in every state.
The following result is proved in De Oliveira et al. (2017):
Proposition 1 (De Oliveira et al. (2017), Theorems 1 & 2). Let ≿ be a rationally inattentive preference.
Then ≿ has a representation (u, p0, c) where the cost function c : Π(p0) → R ∪ {∞} is canonical, i.e. it
satisfies
Groundedness c(δp0 ) = 0,
Convexity c is a convex function, and
Blackwell-monotonicity c is increasing in the Blackwell order.
Moreover, this cost function can be recovered from the functional V by the formula
c(π) = sup
F ∈F
Z
φF (p)π(dp) − V (φF ).
Moreover, the following is a useful characterization of canonical costs, slightly modified from Denti,
Marinacci, and Rustichini (2021), Lemma 6:
Proposition 2. A cost function c : Π(p0) → R ∪ {∞} is canonical if and only if it can be written as
c(π) = sup
ψ∈Ψ
Z
ψdπ (1)
where Ψ is a set of convex functions ψ : ∆(Ω) → R ∪ {∞}, such that
1. maxψ∈Ψ ψ(p0) = 0, and
2. Ψ is minimal — there is no Ψˆ ⊂ Ψ such that supψ∈Ψ
R ψdπ = supψ∈ ˆΨ
R ψdπ and | ˆΨ| < |Ψ|.4
Proof. See Section A.1.
3The value of ∞ is assigned to those distributions over posteriors that should never be acquired, representing impossible information. This could alternatively be modeled as a restriction on the domain of the cost function. 4We define |Ψ| ∈ N ∪ {∞} as the cardinality of the set Ψ, without making distinction between countable and uncountable infinities.
4

The main result in De Oliveira et al. (2017) is an axiomatic characterization of rationally inattentive
preferences. The following properties will be useful for us:
1. If F ⊆ G then V (φF ) ≤ V (φG);
2. For any menu F and act h,
V (φF + φh) = V (φF ) + φh(p0).
2.2 Posterior-Separable Cost
Our goal in this paper is to understand a more specific class of costs of information, which we introduce now.
Definition 1. The cost of information c : Π(p0) → R ∪ {∞} is said to be posterior separable if there exists
an absolutely integrable function ψ : ∆(Ω) → R ∪ {∞} such that, for all π ∈ Π(p0),
c(π) =
Z
ψ(p)π(dp).
In this case, we say that c is represented by ψ, or that ψ is a representation of c, and call ψ a measure of
uncertainty.
In the remainder of this subsection, we propose a class of functions ψ that have certain properties that
are convenient to use and without loss of generality. Given a measure of uncertainty ψ, let
dom ψ = {p ∈ ∆(Ω) | ψ(p) < ∞} .
Definition 2. A measure of uncertainty ψ : ∆(Ω) → R ∪ {∞} is canonical if:
1. ψ is convex;
2. ψ(p0) = 0;
3. ψ ≥ 0.
4. p0 ∈ ri(dom ψ);
Before stating our formal result, we discuss some intuition for why these properties can be assumed
without loss of generality. Convexity follows from Blackwell monotonicity of c. Property 2 follows from
groundedness of c. Property 3 is a normalization that can be achieved by noting that adding an affine
function to ψ that is zero at p0 does not affect the cost of information. These first three properties are well
known and often assumed whenever posterior-separable costs are used. To our knowledge, Property 4 is new.
p0 dom ψ
Figure 1: p0 not in relative interior
To see why it can be assumed without loss of generality,
suppose that p0 is not in the relative interior, as in Fig
ure 1. There, p0 lies in the vertical line that describes the
left of the boundary of dom ψ. Any π that puts positive
probability on the right side of the line must also put pos
itive probability on the left side of the line, where ψ = ∞,
hence c(π) = ∞. Thus, if c(π) < ∞, it must be that the
support of π is contained within the vertical line. This
5

means that nothing is lost by redefining the domain of ψ
to be just the vertical line.
Below, we state the formal result, which also includes
a sufficient condition for uniqueness.
Proposition 3. Let the information cost function c be canonical, as defined in Proposition 1. Suppose that
c is posterior separable and represented by ψ. Then there exists a canonical measure of uncertainty ψ ̃ such
that c is represented by ψ ̃. Moreover, if ψ is convex and differentiable in the directions of its domain at p0,
then ψ ̃ is unique.
Proof. See Section A.2.5
From here onward, unless specified otherwise, we restrict our focus to posterior-separable costs that have
a canonical measure of uncertainty.
2.3 Concavification
If the cost of information is posterior separable, we can write
V (φF ) = max
π ∈Π(p0 )
Z
NF (p)π(dp)
where NF = φF − ψ is the net utility. This parallels the objective in Bayesian persuasion, where the sender’s
objective is to find the optimal distribution with respect to the integrand. The optimum is found by taking
the concavification of NF , i.e.
V (φF ) = cav(NF )(p0) = inf{ζ(p0) : ζ ≥ NF , ζ concave}.
One can then use the techniques of finding the optimum from Bayesian persuasion, as found in Aumann and
Maschler (1995) and Kamenica and Gentzkow (2011).
2.4 Dimension of Domain
As will become clear as we develop the main result, it will be useful to embed dom(ψ) in a space that has the
same dimension. To this end, let aff(dom(ψ)) be the affine hull of dom(ψ) (the smallest affine set containing
it) and let M be the dimension of this space. By Rockafellar (1970), Theorem 1.6, there exists a bijective
affine transformation
T : aff(dom(ψ)) → RM (2)
For instance, in the case of full domain, where dom(ψ) = ∆(Ω) ⊂ RΩ, one can define such a T as
mapping to R|Ω|−1 by setting Ti(p) = p(ωi) for i ∈ {1, ..., |Ω| − 1}, implicitly determining the probability of
the remaining state ω|Ω| as 1 − P
i<|Ω| p(ωi).
Given any ψ : ∆(Ω) → R ∪ {∞}, we define T ∗ψ : RM → R ∪ {∞} by
T ∗ψ(y) =



ψ(T −1(y)), y ∈ T (dom(ψ))
∞, otherwise
(3)
5The proof uses a construction shown in section 2.4, so the reader is advised to read that section before reading the proof.
6

We call T ∗ψ the translation of ψ to RM . Notice that, since T is a linear transformation, the properties of a
canonical ψ are slightly modified by T ∗ψ as follows:
1. T ∗ψ is convex;
2. T (p0) ∈ int(T (dom(ψ));
3. T ∗ψ(T (p0)) = 0;
4. T ∗ψ ≥ 0.
Notice, in particular, that since dim(T (dom(ψ))) = M , T (p0) is now in the interior of T (dom(ψ)), not just
the relative interior. To economize on notation, we write ψ ̄ := T ∗ψ, p ̄ := T (p), and Y := T (dom(ψ)).
2.5 Unique Hyperplane Property
In this section, we present an alternative description of concavification, equivalent to that presented in
Section 2.3. This relies on the supporting hyperplane of the concave function cav(NF ), so that all values
of the function lie below this hyperplane.6 We use this representation of the concavification to develop key
properties of our cost function representation.
Let T be as in (2). For any hyperplane H ∈ RM+1, let λ be its normal vector. Define N ∗
F : RM → R by
N∗
F (y) =



NF (T −1(y)), y ∈ Y
−∞, otherwise
(4)
An equivalent formula for the concavification for a given prior p0 is7
cav(N ∗
F )(p ̄0) = min
λ∈RM
k∈R
{λ · p ̄0 + k : λ · y + k ≥ N ∗
F (y), ∀y ∈ Y }. (5)
A pair (λ, k) is a solution to the minimization problem above if λ · y + k ≥ N ∗
F (y) for all y ∈ Y and
λ · p ̄0 + k = cav(N ∗
F )(p ̄0) = V (φF ). Thus, we can solve for k in this expression and denote the set of solutions
to (5) by
ΛF = λ ∈ RM |λ · (y − p ̄0) + V (φF ) ⩾ N ∗
F (y), ∀y ∈ Y
By Rockafellar (1970), Theorem 23.2, ΛF is closed, convex, and non-empty. Geometrically, the elements of
ΛF are the normal vectors of hyperplanes that are tangent to the graph of N ∗
F (see fig. 2). When N ∗
F is
well-behaved (in a sense that will be made precise shortly), this set is a singleton, motivating the following
definition:
Definition 3. ψ satisfies the unique hyperplane property (UHP) if, for all menus F , ΛF is a singleton.
2.6 Joint-directional Differentiability
As will become clear later, the unique hyperplane property is related to a notion of differentiability that we
now discuss.
6This is analogous to the “Lagrangian lemma” of Caplin, Dean, and Leahy (2022). 7This follows from Rockafellar (1970), Theorem 18.8, which states that any closed convex set in a Euclidean space is the intersection of the closed half-spaces tangent to it. Since epi(− cav(NF )) is closed and convex, there exist such tangent hyperplanes as described in (5) for p = p0.
7

Definition 4. Let ψ ̄ : Y → R ∪ {∞} be as defined in Section 2.4. The subdifferential of ψ ̄ at y ∈ Y is
∂ψ ̄(y) = {λ ∈ RM : λ · (q − y) ≤ ψ ̄(q) − ψ ̄(y), ∀q ∈ Y }.
A convex function is differentiable if and only if its subdifferential is a singleton (Rockafellar (1970),
Theorem 25.1). To compare the subdifferentials at various points when they are not singletons, we introduce
the following property of ψ.
Definition 5. The function ψ ̄ is non-differentiable in the direction δ ∈ RM \ {0} at {p ̄i}K
i=1 if there exist
λi ∈ ∂ψ ̄(p ̄i) such that:
1. λi + δ ∈ ∂ψ ̄(p ̄i), ∀i ∈ {1, ..., K} and
2. δ · (p ̄i − p ̄0) = 0, ∀i ∈ {1, ..., K}.
We say that ψ ̄ is non-differentiable in the same direction (NDISD) at {p ̄i}K
i=1 if there exists a δ ∈ RM \ {0}
such that ψ ̄ is non-differentiable in the direction δ at {p ̄i}K
i=1.
Geometrically, we can think of an element of the subdifferential as the slope of a hyperplane that is
tangent to the graph of ψ ̄ at the point p ̄i. When there is more than one such tangent hyperplane, it means
that the function ψ ̄ has a kink at that point, and we can think of the difference between the two slopes (δ)
as a direction of that kink, in the sense that one can wobble the hyperplane by adding δ and remain tangent.
The condition above states that at all the points {p ̄i}K
i=1 there is a kink and that they all share a wobbling
direction δ. Thus, the direction δ is orthogonal to the convex hull of {p ̄i − p ̄0}K
i=1.
This definition will be useful in constructing menus that take advantage of the directions of non
differentiability to violate our axioms. In particular, it enables us to define cost functions that are “sufficiently
smooth.”
Definition 6. Given prior p0, the function ψ satisfies joint-directional differentiability (JDD) if there do
not exist δ ∈ RM \ {0} and points {pi}K
i=1, with p0 ∈ co(p1, . . . , pK ), such that ψ ̄ is non-differentiable in the
direction δ at {p ̄i}K
i=1.
Remark: Whether ψ satisfies JDD does not depend on the choice of T . Suppose Tˆ is another choice.
Because T and Tˆ have the same dimension in the domain and codomain, there must be an invertible linear
transformation A : RM → RM such that Tˆ = A◦T . Letting A be the matrix associated with A, if λ ∈ ∂ψ ̄(x),
then (A−1)⊺λ ∈ ∂(A ◦ T )∗ψ, where (A−1)⊺ is the transpose of the inverse of A.
3 Main Theorem
3.1 Axioms
Our main result relies on the following axioms.
Independence of Irrelevant Alternatives (IIA). If F ∼ F ∩ G ∼ G then F ∼ F ∪ G.
For any menus F and G, we always have F ∪ G ≿ F, G ≿ F ∩ G, because flexibility is never harmful.
When F ∼ F ∩ G, we may say that the elements of F that do not belong to F ∩ G are irrelevant: the DM can
achieve the same payoff even by ignoring these additional options. The axiom states that these irrelevant
options remain irrelevant when combined with other irrelevant options.
8

Ignorance Equivalence (IE). For every menu F, there exists an act h such that h ∼ F ∼ F ∪ h.
When faced with a singleton menu h, it is always optimal for the agent to acquire no information. The
act h in this axiom is just as good as F , yet it adds irrelevant flexibility to F . Thus, the act h can be thought
of as an ignorance equivalent—a version of the menu F that requires no information to be acquired.
First appearing in de Oliveira (2014), this property also appears in Mu ̈ller-Itten, Armenter, and Stangebye
(2023), who coined the term “ignorance equivalent” to refer to h. The term comes from an analogy with
the role of a certainty equivalent in the context of decisions under risk. Indeed, in both contexts, a risk
neutral principal can extract the most possible surplus by offering the equivalents: by offering the ignorance
equivalent in the former, and by offering the certainty equivalent in the latter (i.e. fully insuring). The
ignorance equivalent also serves as a tool to see which actions might ever be chosen in an expanded menu:
when comparing F and F ∪ {g}, it is sufficient to know that h, the ignorance equivalent, dominates g (i.e. is
better in every state) in order to conclude that g will never be chosen from F ∪{g}, and therefore F ∼ F ∪{g}.
3.2 Main Theorem
We can now state our main result:
Theorem 1. The following statements are equivalent:
1. ≿ is a rationally inattentive preference satisfying IIA and IE;
2. ≿ has a posterior-separable representation with a measure of uncertainty ψ satisfying joint-directional
differentiability.
3. ≿ has a posterior-separable representation with a measure of uncertainty ψ satisfying the unique hy
perplane property.
3.3 Example
To see how the three statements in Theorem 1 are related, we present the following example. In particular,
we highlight the role that the unique hyperplane property has in our analysis, showing that, as the unique
hyperplane property is violated, this leads to a violation of IIA.
Consider a setup with two states, in which the prior p0 = 0.5 and the cost of information is given (Figure
1a) by
ψ(p) = |p − 0.5| + (p − 0.5)2
As ψ is non-differentiable at the prior, it violates joint directional differentiability. Indeed, with the menu
F = {0}, there are multiple optimal hyperplanes, all of which yield V (F ) = 0. Now suppose we consider
two new actions {a, b}, with respective payoffs u(a, p) = 2.5p − 1.3125 and u(b, p) = −2.5p + 1.1875. One
easily verifies that the DM is indifferent between the menus {0}, {0, a}, and {0, b}, as seen by the fact that
all three generate respective optimal hyperplanes λ such that the value of λ at p0 = 0.5 is 0 (Figures 1b
and 1c). However, if we take the union {0, a, b}, the optimal hyperplane changes: it now becomes optimal
to choose posteriors p ∈ {0, 1} (Figure 1d), yielding a value of the menu of 0.375. As a and b are therefore
only relevant when we take the union of the menus, but not when we add them individually to 0, IIA is not
satisfied.
9

1
p
u
(a) ψ that is NDISD
1
p
u
(b) Optimal hyperplanes of menu {0, a}
1
p
u
(c) Optimal hyperplanes of menu {0, b}
1
p
u
(d) Improvement for taking union {0, a, b}
Figure 2: Posterior-separable cost function violating IIA
4 Proof
In this section, we present a proof of our main result. To do so, we build on the connections that we
illustrated in the example in Section 3.3 between our two axioms and cost functions ψ that satisfy UHP
(alternatively, JDD). For a high-level discussion of the role that each axiom plays in restricting the cost of
information, see Section 5.
The proof goes as follows. Section 4.1 shows that, together, IIA and IE imply that ≿ has a posterior
separable representation. From this point on, all sections assume a posterior separable representation.
Section 4.2 shows that the unique hyperplane property implies joint-direction differentiability and Section 4.5
shows that joint-directional differentiability implies the unique hyperplane property, proving the equivalence
between (2) and (3) of Theorem 1. Then, Section 4.3 shows that IIA implies joint-directional differentiability;
together with Section 4.1, this shows that (1) implies (2). Finally, Section 4.4 shows that the unique
hyperplane property implies IIA and IE, showing that (3) implies (1) and finishing the proof.
4.1 Posterior-separable representation
Throughout this subsection, assume that the rationally inattentive preference ≿ satisfies IIA and IE. We
will show that this implies that it has a posterior separable representation.
Let H be the set of acts that are irrelevant to the singleton {0}, that is,
H = {h ∈ F : 0 ∼ {0, h}} . (6)
10

Lemma 1. For any menu F , we have F ⊆ H if and only if 0 ∼ F ∪ {0}.
Proof. If f ∈ F , we always have F ∪ {0} ≿ {0, f } ≿ 0, so 0 ∼ F ∪ {0} implies f ∈ H. The other direction
can be proven by induction on the size of F . Let F = {f1, f2 . . . , fn} ⊆ H. If F has one element, the result
follows from the definition of H. Now let Fn = Fn−1 ∪ {fn} be of size n and assume that the result holds
for menus of size n − 1. Then we have Fn−1 ∪ {0} ∼ 0. Since fn ∈ Fn ⊆ H, it follows that 0 ∼ {0, fn}. By
IIA, we must have Fn ∪ {0} = Fn−1 ∪ {0, fn} ∼ 0, as we wanted.
To simplify notation, we now write
⟨φ, π⟩ =
Z
φ dπ
for any integrable function φ.
Lemma 2. The cost function c is given by
c (π) = sup
F ⊆H
0∈F
⟨φF , π⟩ .
Proof. Let F be any menu. By IE, there exists an act h such that h ∼ F ∼ F ∪ h. Note that, since φh is
an affine function, φF ∪h − φh is a piecewise linear convex function. Since u is surjective, there is a menu G,
with 0 ∈ G, such that φG = φF ∪h − φh. This menu G satisfies two important properties: First,
V (φG) = V (φF ∪h − φh) = V (φF ∪h) − φh(p0) = V (φh) − φh(p0) = 0.
This means that 0 ∼ G ∪ 0 = G, so that G ⊆ H. Second, for any π ∈ Π(p0), we have ⟨φG, π⟩ =
⟨φF ∪h − φh, π⟩ = ⟨φF ∪h, π⟩ − φh (p0) and therefore
⟨φG, π⟩ − V (φG) = ⟨φF ∪h, π⟩ − V (φF ∪h) ≥ ⟨φF , π⟩ − V (φF ) ,
since V (φF ) = V (φF ∪h) and φF ∪h ≥ φF . Therefore, using the formula for the cost function in Theorem 2
of De Oliveira et al. (2017),
c (π) = sup
F ∈F
⟨φF , π⟩ − V (φF ) = sup
G∈F
0∈G
V (φG) = 0
⟨φG, π⟩ − V (φG) = sup
G⊆H
0∈G
⟨φG, π⟩ ,
since F ⊆ H and 0 ∈ F implies V (φF ) = 0.
Finally, we can prove the posterior separability of the cost function.
Lemma 3. We can write c (π) = ⟨ψ, π⟩, where ψ : ∆ (Ω) → R is given by
ψ (p) = sup
h∈H
X
ω
u(h(ω))p(ω) (7)
where H is defined as in (6).
11

Proof. For any menu F ⊆ H, we have φF ⩽ ψ, so that
c (π) = sup
F ⊆H
0∈F
⟨φF , π⟩ ⩽ ⟨ψ, π⟩ .
To show the converse inequality, fix ε > 0 and π ∈ Π (p) with support p1, . . . , pn. Suppose first that
ψ(pi) < ∞ for i = 1, . . . , n. From the definition of ψ, we can find h1, . . . , hn such that
ψ (pi) < ⟨hi, pi⟩ + ε for i = 1, . . . , n.
Letting F = {0, h1, . . . , hn} we have
c (π) ⩾ ⟨φF , π⟩ ⩾
X
i
⟨hi, pi⟩ π(pi) > ⟨ψ, π⟩ − ε.
Since ε was chosen arbitrarily, this shows that c (π) ⩾ ⟨ψ, π⟩.
Suppose now that ψ(pi) = ∞ for some i. Then there must be a sequence (hn)n∞=1 of acts in H such that
φhn (pi) → ∞. Letting Gn = {0, hn} we have that
c(π) ⩾ sup
n∈N
⟨φGn , π⟩ ⩾ sup
n∈N
φhn (pi)π(pi) = ∞,
finishing the proof.
4.2 Unique Hyperplane Property implies Joint-Directional Differentiability
We prove the contrapositive: if ψ does not satisfy JDD, then it does not satisfy UHP. Thus, suppose there
are8 {pi}K
i=1 ⊂ dom ψ, δ ∈ RM \ {0}, and λi ∈ RM such that
1. λi ∈ ∂ψ ̄(p ̄i),
2. λi + δ ∈ ∂ψ ̄(p ̄i),
3. δ · p ̄i = 0 for all i, and
4. p0 ∈ co(p1, . . . , pK ).
In order to demonstrate the violation of UHP, we will construct a menu for which it is optimal for the DM
to choose information whose support is precisely {pi}K
i=1, and that the UHP will fail for this menu.
Lemma 4. Given conditions (1)-(4) above, there exists a menu H such that
1. there is an optimal distribution over posteriors for H with support on {pi}K
i=1;
2. 0, −δ ∈ ΛH .
Proof. For each i, let hi : Ω → X be such that P
ω∈Ω u(hi(ω))p(ω) = λi · (p ̄− p ̄i) + ψ ̄(p ̄i) for every p ∈ ∆(Ω)
(since the image of u is R and the right hand side is an affine function of p, this is always possible). Defining
8Recall that for any p ∈ dom(ψ), we define p ̄ = T (p) ∈ Y (see Section 2.4).
12

the menu H = {h1, . . . , hK }, we have
φH (p) = max
hi ∈H
X
ω∈Ω
u(hi(ω))p(ω) = miax λi · (p ̄ − p ̄i) + ψ ̄(p ̄i).
Spelling out the definition of subdifferential in condition (1), we have λi · (p ̄ − p ̄i) ≤ ψ ̄(p ̄) − ψ ̄(p ̄i) for
i = 1, . . . , K. This implies that φH (p) ≤ ψ ̄(p ̄) for all p ∈ ∆(Ω), which in turn implies N ∗
H ≤ 0. Moreover,
N∗
H (p ̄i) = 0 for i = 1, . . . , K. Since p0 ∈ co(p1, . . . , pK ), this implies that cav(N ∗
H )(p ̄0) = 0, so 0 ∈ ΛH .
Similarly, spelling out the definition of subdifferential in condition (2), we have (λi + δ) · (p ̄ − p ̄i) ≤
ψ ̄(p ̄)−ψ ̄(p ̄i) for i = 1, . . . , K. This implies that φH (p) ≤ ψ ̄(p ̄)−δ·(p ̄−p ̄i) for all p ∈ ∆(Ω). Since δ·(p ̄i−p ̄0) = 0
for all i, it follows that N ∗
H (p ̄) ≤ −δ · (p ̄ − p ̄0) for all p ̄ ∈ Y . Moreover, N ∗
H (p ̄i) = 0 = −δ · (p ̄i − p ̄0) for
i = 1 . . . , K. As before, this implies that −δ ∈ ΛH . Since δ ̸= 0, this shows that the unique hyperplane
property is not satisfied.
4.3 IIA implies JDD
We now show that, if the preference has a posterior-separable representation and satisfies IIA, the canonical
cost function ψ will satisfy JDD.
We start with a preliminary lemma regarding the subdifferentials of sets of points that are NDISD.
Lemma 5. The set
D({p ̄i}K
i=1) :=
\
i
∂ψ ̄(p ̄i) − ∂ψ ̄(p ̄i) ∩ p ̄⊥
i . (8)
is compact and convex. Moreover, ψ ̄ is non-differentiable in the direction δ at at {p ̄i}K
i=1 if and only if
δ ∈ D({p ̄i}K
i=1).
Proof. See Section A.3.
Lemma 6. Suppose ≿ has a posterior separable representation with a ψ that violates JDD. Then ≿ violates
IIA.
We use these properties of the set to construct a violation of IIA, generalizing the intuiting in the example
in Section 3.3. That is, when JDD fails, one can find two different acts that, when added to the original
menu, preserve the original respective hyperplanes, and hence the value. However, when adding both, the
new concavification lies strictly higher. This is in contradiction to IIA, which states that it must continue
to provide the original value of the menu.
Proof. By Lemma 5, the set D({p ̄i}K
i=1) is compact, convex, and contains a non-null linear functional. Let
δ be an extreme point in this set. Note that if δ ∈ D({p ̄i}K
i=1), then so is −δ.
Let H be a set of acts as given by Lemma 4, so that 0, −δ ∈ ΛH . Let ε ∈ RM be a sufficiently small
vector such that
1. p ̄0 + ε, p ̄0 − ε ∈ Y ;
2. δ · ε > 0.
13

Such an ε exists because the orthogonal complement of D({pi}K
i=1) does not have full rank. Let α ∈ ∂ψ(p ̄0+ε)
and β + δ ∈ ∂ψ ̄(p ̄0 − ε). Then
α · p ̄ − ψ ̄(p ̄) ⩽ α · (p ̄0 + ε) − ψ ̄(p ̄0 + ε) = 0
(β + δ) · p ̄ − ψ ̄(p ̄) ⩽ (β + δ) · (p ̄0 − ε) − ψ ̄(p ̄0 − ε) = 0
We now define two other menus:
F = {fα} ∪ H
G = {fβ} ∪ H.
where fα is defined so that
X
ω∈Ω
u(fα(ω))p(ω) = α · (p ̄ − p ̄0 − ε) + ψ ̄(p ̄0 + ε)
holds for every p ∈ dom(ψ), and similarly for fβ,
X
ω∈Ω
u(fβ(ω))p(ω) = β · (p ̄ − p ̄0 + ε) + ψ ̄(p ̄0 − ε) + δ · ε.
Notice that 0 ∈ ΛH and since α·(p ̄−p ̄0 −ε)+ψ ̄(p ̄0 +ε)−ψ ̄(p ̄) ⩽ 0, it remains in ΛF , and so the concavification
still yields V (φF ) = 0 by (5). Likewise, −δ ∈ ΛH and since β·(p ̄−p ̄0+ε)+ψ ̄(p ̄0−ε)−ψ ̄(p ̄)+δ·ε ⩽ −δ·(p ̄−p ̄0), it
remains in ΛG, and so the concavification still yields V (φG) = 0. Thus, all three menus — F ,G, and H — give
the same value of zero.
Now consider γ ∈ RM and k ∈ R such that γ · p ̄ + k ⩾ N ∗
F ∪G(p ̄) for all p ̄. We must have
γ · (p ̄0 + ε) + k ⩾ α · (p ̄0 + ε − p ̄0 − ε) + ψ ̄(p ̄0 + ε) − ψ ̄(p ̄0 + ε) = 0
γ · (p ̄0 − ε) + k ⩾ β · (p ̄0 − ε − p ̄0 + ε) + ψ ̄(p ̄0 − ε) + δ · ε − ψ ̄(p ̄0 − ε) = δ · ε > 0.
Together, these inequalities imply that γ · p ̄0 ≥ 1
2 δ · ε > 0, so whatever is the optimal hyperplane for F ∪ G, it
must get a value strictly greater than zero at p ̄0, meaning that V (φF ∪G) > 0. This shows that our preference
violates IIA.
4.4 Unique Hyperplane Property implies IIA and IE
We now show that if a preference has a posterior-separable representation and satisfies the Unique Hyperplane
Property, then it must satisfy IIA and IE. Let F and G be menus such that F ∩G ∼ F ∼ G. Assuming that the
unique hyperplane property is satisfied, we may write ΛF = {λF }, ΛG = {λG}, and ΛF ∩G = {λF ∩G}. Since
F ∩ G ∼ F ∼ G, and the optimal posteriors for F ∩ G are also feasible for F and G, the optimal hyperplane
for F ∩ G must also be an optimal hyperplane for both F and G. By the unique hyperplane property, the
optimal hyperplanes must therefore identical: λF = λF ∩G = λG. This implies that for all f ∈ F ∪ G and
p ∈ ∆(Ω), λF · (p ̄ − p ̄0) + V (φF ) ⩾ P
ω u(f (ω))p(ω) − ψ(p) so that λF · (p ̄ − p ̄0) + V (φF ) ⩾ N ∗
F ∪G(p ̄). and
so λF is the (unique) optimal hyperplane for F ∪ G.
To show that IE is satisfied, let λF be the optimal hyperplane for menu F . Defining act h such that
M⊺
T h = λF +∂ψ ̄(p ̄0), where MT is the matrix representing linear transformation T , and ∂ψ ̄(p ̄0) is a singleton
14

by joint directional differentiability, we get that M⊺
T h · p ̄ − ψ ̄(p ̄) ≤ λF · p ̄, ∀p ̄ ∈ Y . □
4.5 Joint-directional Differentiability implies the Unique Hyperplane Property
Suppose the preference has a posterior-separable representation where ψ is joint-directional differentiable.
Let F := {fi}K
i=1 be an arbitrary menu. For each i, let ai ∈ RM and bi ∈ R be such that P
ω∈Ω u(fi(ω))p(ω) =
ai · p ̄ + bi for all p ∈ dom ψ. Let {pi}I
i=1 be the support of an optimal distribution over posteriors for F ,
so p0 ∈ co{pi}I
i=1. We can assume, without loss of generality, that no act in F is optimal for more than
one posterior belief; for simplicity, we label the acts so that fi is optimal for pi for I ≤ K (relabeling any
unchosen acts to have i > K). Then there exists λ ∈ ΛF such that, for i = 1, . . . , I,
NF (p ̄i) = ai · p ̄i + bi − ψ ̄(p ̄i) = λ · (p ̄i − p ̄0) + V (φF )
and
ai · p ̄ + bi − ψ ̄(p ̄) ⩽ λ · (p ̄ − p ̄0) + V (φF )
for all p ̄ ∈ Y . Subtracting the equality from the inequality, we get
(ai + λ) · (p ̄ − p ̄i) ⩽ ψ ̄(p ̄) − ψ ̄(p ̄i),
which means that λi := ai + λ ∈ ∂ψ ̄(p ̄i). If there existed a second hyperplane λˆ, we could repeat the same
argument, and letting δ = λ − λˆ, we would get that
λi + δ = λˆi ∈ ∂ψ ̄(p ̄i)
δ · (p ̄i − p ̄0) = λi · (p ̄i − p ̄0) − λˆi · (p ̄i − p ̄0)
= [N ∗
F (p ̄i) − V (φF )] − [N ∗
F (p ̄i) − V (φF )] = 0
So, ψ ̄ would be NDISD at {p ̄i}I
i=1, contradicting our assumption. □
5 Discussion of Main Theorem
As was noted when we introduced canonical costs, it is without loss to write c(π) = supψ∈Ψ
R ψdπ. For this
discussion, we explore the implications of our axioms when the set Ψ is finite.9 Then, we not only have
ψ(p0) ≤ 0 for all ψ ∈ Ψ, but also have equality for at least one ψ ∈ Ψ. We may also assume that Ψ is
minimal.
For any finite menu H, let πH ∈ Π(p0) be an optimal information choice given that menu. Define
ψH ∈ arg maxψ∈Ψ
R ψdπH ; by the minimality of Ψ, there will be at least one menu H for which ψH is the
unique maximizer.
IE, Ignorance Equivalence, comes to rule out that there exist ψ∗ ∈ Ψ such that ψ∗(p0) < 0. To see this,
suppose that such a ψ∗ ∈ Ψ exists. Let Ψ0 = {ψ ∈ Ψ|ψ(p0) = 0}, which is nonempty by Proposition 2. By the
minimality of Ψ, there is some menu F ∗ such that c(πF ∗ ) = R ψ∗ dπF ∗ and, for all ψ ̸= ψ∗, c(πF ∗ ) < R ψdπF ∗ .
9Notice that, by definition of supremum, one can approximate the cost function c by a finite set Ψˆ ⊂ Ψ, defining a cost function cˆ(π) ≡ maxψ∈ ˆΨ
R ψdπ, as follows. In a case where c(π) is finite, then there exists a sufficiently large, finite Ψˆ ⊂ Ψ
such that c(π) < cˆ(π) + ε. if c(π) = ∞, then for sufficiently large Ψˆ , π is dominated by δp0 .
15

Let δ := min{−ψ∗(p0), minψ̸=ψ∗ c(πF ∗ ) − R ψ dπF ∗ }.
For any h such that h ∼ F ∗, one will have πh = δp0 and hence ψh ∈ Ψ0. Consider now the menu F ∗ ∪{h}.
By choosing π′ := 1
2 πF ∗ + 1
2 δp0 , one can save on information costs: from the fact that ψ∗ ∈/ Ψ0 and the
representation of c convex as in Proposition 2, there exists ψ′ ∈ Ψ such that
c(π′) =
Z
ψ′dπ′
≤1
2
Z
ψ∗dπF ∗ + 1
2 ψh(p0) − 1
2δ
≤1
2 c(πF ∗ ) − 1
2 δ (9)
However, by the monotonicity of the indirect utility from the decisions in the menu size, due to the preference
for flexibility,
Z
φF ∗∪{h}dπF ∗∪{h} ≥ 1
2
Z
φF ∗ dπF ∗ + 1
2 φh(p0), (10)
Therefore,
V (φF ∗∪{h}) ≥ 1
2
Z
φF ∗ dπF ∗ + 1
2 φh(p0) − c(π′)
≥1
2[
Z
φF ∗ dπF ∗ −
Z
ψ∗dπF ∗ ] − 1
2 [φh(p0)] + 1
2δ
= V (φF ∗ ) + 1
2δ
where the last equality is from h ∼ F ∗. So, F ∗ ∪ {h} ≻ F ∗, violating IE.
On the other hand, there is no problem with IE if Ψ = Ψ0. In this case, for a given ψF ∗ , the act h is
consistent with ψF ∗ itself, and so there are no savings of information costs to be had by randomizing.
The presence of IE allows for IIA to have bite. Without IE, it is unclear whether there will actually
be any menus F, G with ψF ̸= ψG such that F ∩ G ̸= ∅; if that were so, then in such cases, IIA holds
vacuously for F, G. However, with IE, we know that ψF (p0) = ψG(p0) = 0. By IE, there exist h, h′ such
that h ∼ F ∼ F ∪ {h} and h′ ∼ G ∼ G ∪ {h′}. Since adding an affine function α to the payoffs of all acts in
the menu does not change the optimal choice of information, and changes the value of the menu by α · p0,
one can replace G ∪ {h′} with Gˆ ∪ {h} by letting α = h − h′, such that ψG = ψGˆ and F ∼ G. As a result,
under IE, if there are ψF ̸= ψG, then there are corresponding F, G such h ∼ F ∼ F ∪ {h} ∼ G ∪ {h} ∼ G.
Note that ψF = ψF ∪{h} and ψG = ψG∪{h} since πF and πG are optimal information choices for F ∪ {h} and
G ∪ {h}, respectively.
Given such F, G, then by taking F ∪ G ∪ {h}, IIA dictates that F ∼ F ∪ G ∪ {h}. However, if ψF ̸= ψG,
this is not the case: one can save on the information cost by randomizing 1
2 πF + 1
2 πG, while keeping the
expected utility from the decisions the same, similarly to the cost saving/expected utility preservation due
to IE in equations (9) and (10). So, ψF = ψG.
6 Uniform Posterior-Separable Costs
We now allow for the agent’s prior to vary. For each possible prior p0 ∈ ∆(Ω), we denote the cost of
information by cp0 : Π(p0) → R ∪ {∞}. For each π ∈ ∆(∆(Ω)), we can deduce the corresponding prior p0 by
taking the expectation of π, so that π ∈ Π(p0). Thus, we may write the cost function for all priors under a
16

single notation c : Π → R. We call c canonical if, for each p0, cp0 is canonical. We now consider the following
condition that allows for the costs to be “the same” across menus.
Definition 7. The canonical cost function c : ∆(∆(Ω)) → R ∪ {∞} is prior invariant with respect to the
set Ψ of convex functions that represents c if
c(π) = sup
ψ∈Ψ
Z
ψ dπ − sup
ψ ′ ∈Ψ
ψ′
Z
p dπ .
When Ψ is a singleton, we say that c is uniformly posterior separable.
Note that if c is canonical then, by Proposition 2, for every p0 there exists a set of convex functions Ψp0
such that
c(π) = sup
ψ∈Ψp0
Z
ψ dπ = sup
ψ∈Ψp0
Z
ψ dπ − max
ψ ′ ∈Ψp0
ψ′(p0).
Prior-invariance imposes that the same set Ψ applies to every p0. Note that we need to subtract the second
term to guarantee that cp0 is grounded for every p0.
The quintessential uniformly posterior-separable cost is the mutual information (Sims, 2003; Caplin,
Dean, and Leahy, 2022). Denoting the entropy of a distribution by H(p) = − P
ω p(ω) ln(p(ω)), mutual
information is given by the expected reduction in entropy,
cp0 (π) = H(p0) −
Z
H(p) π(dp),
which matches the formula in definition 7 by setting Ψ = {−H}.
Theorem 2. For a fixed prior p0, let Ψ be a set of convex functions representing cp0 satisfying the conditions
of Proposition 2. Let the canonical cost function c be prior-invariant with respect to Ψ. If, for each prior,
the preference over menus corresponding to c satisfies IIA and IE, then c is uniformly posterior separable
and represented by some ψ : ∆(Ω) → R ∪ {∞} that is differentiable at all p ∈ ri(dom(ψ)).
Proof. By Theorem 1, the cost function cp0 is posterior separable. Since Ψ is minimal for cp0 , we must have
Ψ = {ψ} for some convex ψ : ∆(Ω) → R ∪ {∞}. Since c is prior-invariant, we must have that, for all priors
q ∈ ∆(Ω) and π ∈ Π(q),
cq(π) = sup
ψ ′ ∈Ψ
Z
ψ′(p)dπ − sup
ψ ′′ ∈Ψ
ψ′′ (q) =
Z
ψ(p)dπ − ψ(q),
so c is uniformly posterior separable.
To see that ψ must be differentiable, suppose, to the contrary, that it is not differentiable at some
q ∈ ri(dom(ψ)). Fixing the prior to be q, we have, by Theorem 1, that the preference ≿, satisfying IIA
and IE, has a posterior separable representation with a canonical measure of uncertainty ψˆ that satisfies
joint-directional differentiability. Thus for every π ∈ Π(q),
Z
ψˆ dπ =
Z
ψ dπ − ψ(q) =
Z
[ψ(p) − ψ(q)] π(dp).
By Lemma 7 in Section A.2, there exists ξ such that
ψˆ(p) = ψ(p) − ψ(q) + ξ · (p − q).
17

Since ψˆ satisfies joint-directional differentiability, it must be differentiable at q (simply pick K = 1 and
{pi}K
i=1 = {q} and we trivially have q ∈ co({q})). This implies that ψ is differentiable at q, contradicting its
non-differentiability.
References
Aumann, Robert J and Michael Maschler. 1995. Repeated games with incomplete information. MIT press.
Blackwell, David. 1951. “Comparison of experiments.” In Proceedings of the second Berkeley symposium on
mathematical statistics and probability, vol. 1. 26.
Caplin, Andrew and Mark Dean. 2015. “Revealed preference, rational inattention, and costly information
acquisition.” American Economic Review 105 (7):2183–2203.
Caplin, Andrew, Mark Dean, and John Leahy. 2022. “Rationally inattentive behavior: Characterizing and
generalizing Shannon entropy.” Journal of Political Economy 130 (6):1676–1715.
de Oliveira, Henrique. 2014. “Axiomatic foundations for entropic costs of attention.” Tech. rep., Technical
report, Mimeo.
De Oliveira, Henrique, Tommaso Denti, Maximilian Mihm, and Kemal Ozbek. 2017. “Rationally inattentive
preferences and hidden information costs.” Theoretical Economics 12 (2):621–654.
Denti, Tommaso. 2022. “Posterior separable cost of information.” American Economic Review 112 (10):3215
59.
Denti, Tommaso, Massimo Marinacci, and Aldo Rustichini. 2021. “Experimental Cost of Information.”
Working paper .
Ergin, Haluk and Todd Sarver. 2010. “A unique costly contemplation representation.” Econometrica
78 (4):1285–1339.
Gleyze, Simon and Agathe Pernoud. 2023. “Informationally simple incentives.” Journal of Political Economy
131 (3):802–837.
H ́ebert, Benjamin and Jennifer La’O. 2023. “Information acquisition, efficiency, and nonfundamental volatil
ity.” Journal of Political Economy 131 (10):2666–2723.
H ́ebert, Benjamin and Michael Woodford. 2021. “Neighborhood-based information costs.” American Eco
nomic Review 111 (10):3225–3255.
Kamenica, Emir and Matthew Gentzkow. 2011. “Bayesian Persuasion.” American Economic Review
101 (October):2590–2615.
Lipnowski, Elliot, Laurent Mathevet, and Dong Wei. 2020. “Attention management.” American Economic
Review: Insights 2 (1):17–32.
Lipnowski, Elliot and Doron Ravid. 2022. “Predicting choice from information costs.” arXiv preprint
arXiv:2205.10434 .
18

Matˇejka, Filip and Alisdair McKay. 2015. “Rational inattention to discrete choices: A new foundation for
the multinomial logit model.” American Economic Review 105 (1):272–298.
Mensch, Jeffrey. 2022. “Screening inattentive buyers.” American Economic Review 112 (6):1949–1984.
Mensch, Jeffrey and Komal Malik. 2024. “Posterior-Mean Separable Costs of Information Acquisition.”
arXiv preprint arXiv:2311.09496 .
Mu ̈ller-Itten, Michele, Roc Armenter, and Zachary Stangebye. 2023. “Rational inattention via ignorance
equivalence.” .
Pomatto, Luciano, Philipp Strack, and Omer Tamuz. 2023. “The cost of information: The case of constant
marginal costs.” American Economic Review 113 (5):1360–1393.
Rockafellar, Ralph Tyrell. 1970. Convex Analysis. Princeton: Princeton University Press. URL https:
//doi.org/10.1515/9781400873173.
Sims, Christopher A. 2003. “Implications of rational inattention.” Journal of monetary Economics
50 (3):665–690.
Yang, Ming. 2020. “Optimality of debt under flexible information acquisition.” The Review of Economic
Studies 87 (1):487–536.
Yoder, Nathan. 2022. “Designing incentives for heterogeneous researchers.” Journal of Political Economy
130 (8):2018–2054.
19

A Appendix
A.1 Proof of Proposition 2
By De Oliveira et al. (2017), Theorem 2, the cost of information can be written as
c(π) = sup
F ∈F
Z
φF (p)dπ(p) − V (F )
Notice that for each F , φF − V (F ) is a convex function, and so one can let Ψ = {φF − V (F ) : F ∈ F} to
establish
c(π) = sup
ψ∈Ψ
Z
ψdπ
Write Ψ′ ∼ Ψ to denote the equivalence relation that says that Ψ′ and Ψ represent the same cost function
c. We now show that there exists a Ψ′ ∼ Ψ satisfying properties 1 and 2 in the proposition. To do so, we
divide in two cases:
1. Suppose that there exists a finite Ψ′ ∼ Ψ. If Ψ′ is minimal, we are done; if not, there exists a Ψ′′ with
|Ψ′′| < |Ψ| such that Ψ′′ ∼ Ψ′ ∼ Ψ. We can then repeat the same argument, until we reach a minimal
Ψ∗, which must happen in a finite number of steps since Ψ′ was finite. Since Ψ∗ is finite, the maximum
must always be achieved, and in particular c(δp0 ) = maxψ∈Ψ∗ ψ(p0) = 0.
2. Suppose that there is no finite Ψ′ ∼ Ψ. Then Ψ is already minimal. To satisfy condition (1), note that,
since c is grounded,
0 = c(δp0 ) = sup
ψ∈Ψ
ψ(p0),
and since c is also Blackwell monotone, c(π) ⩾ 0 for all π ∈ Π(p0). This means that if we add ψ0 ≡ 0
to Ψ, we get
sup
ψ ∈Ψ∪{ψ0 }
Z
ψ dπ = max
(
sup
ψ∈Ψ
Z
ψ dπ, 0
)
= max{c(π), 0} = c(π)
so Ψ ∪ {ψ0} ∼ Ψ, and
c(δp0 ) = ψ0(p0) = 0 = max
ψ ∈Ψ∪{ψ0 }
ψ(p0),
which is condition (1). Since |Ψ ∪ {ψ0}| = |Ψ| = ∞, condition (2) is also satisfied by Ψ ∪ {ψ0}.
A.2 Proof of Proposition 3
Let c be canonical and represented by ψ.
(1) It follows from Blackwell monotonicity that ψ must be convex (see Lipnowski and Ravid (2022), Lemma
24).
(2) From groundedness, it is immediate that ψ(p0) = 0.
(4) We now construct a ψˆ that represents the same cost of information as ψ, satisfying p0 ∈ ri dom ψˆ.
If p0 ∈ ri dom ψ, we simply let ψˆ = ψ. So suppose p0 ∈/ ri dom ψ and let d = dim(dom ψ) denote the
dimension of dom ψ. Since p0 is on the boundary of dom ψ, by Rockafellar (1970), Theorem 11.6, there
exists a supporting hyperplane, defined by some vector λ, such that, letting
X := {p ∈ ∆(Ω) : λ · p ≥ λ · p0}
20

we have that for all p ∈ X,
λ · p > λ · p0 =⇒ ψ(x) = ∞,
while X ∩ ri(dom(ψ)) = ∅, i.e. X only intersects with dom(ψ) on the boundary of the latter.
Now let
ψˆ(p) =



ψ(p), if p ∈ X
∞, otherwise
That is, ψˆ replaces ψ(p) with ∞ for all p ∈/ X. In particular, ψˆ(p) = ∞, ∀p ∈ ri(dom(ψ)). We shall show
that c(π) = R ψ dπ = R ψˆ dπ for every π ∈ Π(p0). Indeed, if supp(π) ⊂ X, this is obviously true. When
supp(π) ̸⊂ X, by Bayes’ rule then, with positive probability according to π, λ · p > λ · p0, and therefore
ψ(p) = ∞. Consequently, c(π) = ∞ = R ψˆ dπ.
If p0 ∈ ri(dom(ψˆ)), we found our desired ψˆ. Otherwise, note that dim(dom(ψˆ)) < dim(dom(ψ)) and
repeat the procedure until p0 ∈ ri(dom(ψˆ)) or the dimension is zero (in which case the domain is just p0 and
the cost of information was trivial).
(3) Let T : aff(dom ψˆ) → RM be a bijective affine transformation as in Section 2.4. Since ψˆ is convex,
so is T ∗ψˆ, so there exists a λ ∈ ∂T ∗ψˆ, that is, λ · (p ̄ − p ̄0) ⩽ T ∗ψˆ(p ̄) = ψˆ(p) for all p ∈ dom ψˆ. Let
ψ ̃(p) = ψˆ(p) − λ · (p ̄ − p ̄0). Then ψ ̃ ⩾ 0 and it inherits properties (1), (2), and (4) from ψˆ, so ψ ̃ is canonical.
Also note that, for all π ∈ Π(p0),
Z
ψ ̃ dπ =
Z hψˆ(p) − λ · (T (p) − T (p0))
i
π(dp) =
Z
ψˆ dπ − λ · (T (p0) − T (p0)) = c(π).
Before proving the uniqueness of the canonical representation, we prove the following lemma.
Lemma 7. If ψ and ψ′ are canonical and R ψ dπ = R ψ′ dπ for all π ∈ Π(p0) then there exists a ξ ∈ R|Ω|
such that ψ(p) = ψ′(p) + ξ · (p − p0) for all p ∈ ∆(Ω).
Proof. We first prove that dom ψ = dom ψ′. Let p ∈ dom ψ be arbitrary. Then p0 + t(p − p0) ∈ aff dom ψ for
all t ∈ R. Since p0 ∈ ri dom ψ, we can find an ε > 0 small enough that p′ := p0 − ε(p − p0) ∈ dom ψ. Then
p0 is in the convex hull of {p, p′}, which means we can find a π ∈ Π(p0) with support {p, p′} ⊂ dom ψ. Then
c(π) = R ψ dπ < ∞, which means that R ψ′ dπ < ∞ as well, which can only happen if p ∈ dom ψ′. Hence
dom ψ ⊂ dom ψ′ and, by symmetry, dom ψ = dom ψ′. This proves that ψ(p) = ψ′(p) + ξ · (p − p0) for all
p ∈/ dom ψ regardless of ξ since the finite term ξ · (p − p0) becomes irrelevant.
Now, for p ∈ dom ψ, let ζ(p) = ψ(p) − ψ′(p). Since ψ and ψ′ are canonical, ζ(p0) = 0. By Theorem
1.5 in Rockafellar (1970), the proof will be finished if we show that ζ is an affine function. To that end, let
α ∈ [0, 1] and x, y ∈ dom ψ. Suppose first that αx + (1 − α)y = p0. Then, letting π ∈ Π(p0) have support
{x, y}, we get
0=
Z
ζ dπ = αζ(x) + (1 − α)ζ(y).
Since ζ(αx + (1 − α)y) = ζ(p0) = 0, we have ζ(αx + (1 − α)y) = αζ(x) + (1 − α)ζ(y).
Now suppose that αx+(1−α)y ̸= p0. Let ε > 0 be small enough that z = p0−ε(αx+(1−α)y−p0) ∈ dom ψ
(recall that p0 ∈ ri dom ψ). Letting t = (1 + ε)−1 ∈ (0, 1), we have that p0 = tz + (1 − t)(αx + (1 − α)y).
Thus there is a π ∈ Π(p0) with support on {z, αx + (1 − α)y} so that
0=
Z
ζ dπ = tζ(z) + (1 − t)ζ(αx + (1 − α)y). (11)
21

Similarly, we may write p0 = tz + (1 − t)αx + (1 − t)(1 − α)y so there is a π′ ∈ Π(p0) with support {x, y, z}
putting probability t on z. Hence
0=
Z
ζ dπ′ = tζ(z) + (1 − t)αζ(x) + (1 − t)(1 − α)ζ(y). (12)
Putting together equations eq. (11) and eq. (12), we get that ζ(αx + (1 − α)y) = αζ(x) + (1 − α)ζ(y). Thus,
we have shown that ζ is affine, which finishes the proof.
Finally, if ψ is differentiable in the directions of its domain at p0, so are ψˆ and ψ ̃. If ψ′ were another
canonical measure of uncertainty representing the same cost of information, then by Lemma 7, there would
be a ξ such that ψ ̃(p) = ψ′(p) + ξ · (p − p0). Also, by the proof of Lemma 7, ψ ̃ and ψ′ must have the
same domain, so we may use the same bijective affine transformation T for both. Since T ∗ψ′(p) ⩾ 0 and
T ∗ψ ̃(p0) = 0, this would imply that T ∗ψ ̃(p)−T ∗ψ ̃(p0) ⩾ ξ ̄·(p ̄−p ̄0), or ξ ̄ ∈ ∂T ∗ψ ̃. But since ψ ̃ is differentiable
in the directions of its domain at p0, ξ ̄ = 0 must be the only element in the subdifferential, meaning that
T ∗ψ ̃ = T ∗ψ′, which implies that ψ ̃ = ψ′.
A.3 Proof of Lemma 5
Notice that 0 ̸= δ ∈ D({p ̄i}K
i=1) if and only if δ ∈ ∂ψ ̄(p ̄i) − ∂ψ ̄(p ̄i) and δ · (p ̄i − p ̄0) = 0 for each pi,
i = 1, . . . , K, which is precisely the definition of ψ being non-differentiable in the direction δ. By Rockafellar
(1970, Theorem 23.2), ∂ψ ̄(p ̄i) is closed and convex; since this is preserved under subtraction and intersection,
so is D({p ̄i}K
i=1). To show that D({p ̄i}K
i=1) is compact, it remains to show that ∂ψ ̄(p ̄i) is bounded. By
condition (2) of non-differentiability in the same direction, we have (λ + δ)(p ̄i − p ̄0) = 0. Using Lemma 4,
fix a menu H for which the posteriors {pi}K
i=1 are optimal. Notice that in this case, if λ, λ′ ∈ ΛH , then since
for λˆ ∈ {λ, λ′}
λ · (p ̄i − p ̄0) + V (φH ) = N ∗
H (p ̄i), ∀i
it follows that (λ − λ′) · (p ̄i − p ̄0) = 0. Therefore,
D({p ̄i}K
i=1) = ΛH − ΛH
and so D({p ̄i}K
i=1) is compact if ΛH is. Then, since δ · (p ̄i − p ̄0) = 0, V (φH ) = λ · (p ̄0 − p ̄i) + N ∗
F (p ̄i) =
[λ + δ] · (p ̄0 − p ̄i) + N ∗
F (p ̄i), for all i ∈ {1, ..., K}, and therefore λ + δ is also an optimal hyperplane. By
way of contradiction, suppose ΛH were not compact, then by Rockafellar (1970, Theorem 8.4), there would
exist λ, δ ̸= 0 such that, for all t > 0, λ + tδ ∈ ΛH . Furthermore, as D({p ̄i}K
i=1) has dimension at least 1,
its orthogonal complement does not have full rank (Rockafellar, 1970, p. 5). As a result, for all ε > 0, there
would exist p such that ∥p ̄ − p ̄0∥ < ε, δ · (p ̄ − p ̄0) < 0, and φ(p) − ψ(p) ≤ V (φH ) + [λ + tδ] · (p ̄ − p ̄0), ∀t > 0,
which can only happen if ψ(p) = ∞. Thus, there would be a sequence {pˆj}∞
j=1 ⊂ dom(ψ) such that
limj→∞ pˆj = p0 and ψ(pˆj) = ∞, ∀j, contradicting the assumption that p0 ∈ ri(dom(ψ)) for ψ canonical with
dim(dom(ψ)) = M .
22

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:13:39.704Z
- **Text Length:** 53810 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 22 of 22
