# PDF Document: Ellouze and Fernandez - 2025 - A simple model for the population dynamics in OTC wholesale fresh product markets.pdf

**File Path:** Ellouze and Fernandez - 2025 - A simple model for the population dynamics in OTC wholesale fresh product markets.pdf

**Processed Date:** 2026-02-10T18:14:17.243Z

**File Size:** 1356.61 KB

**Total Pages:** 49

**Extracted Pages:** 49

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3200

**Title:** A simple model for the population dynamics in OTC wholesale fresh product markets

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

A simple model for the population dynamics in OTC wholesale
fresh product markets
Ali Ellouze and Bastien Fernandez
Laboratoire de Probabilit ́es, Statistique et Mod ́elisation CNRS - Univ. Paris Cit ́e - Sorbonne Univ. Paris, France ellouze@lpsm.paris and fernandez@lpsm.paris
Abstract
Given the combined evidences of bounded rationality, limited information and short-term optimization, over-the-counter (OTC) fresh product markets provide a perfect instance where to develop a behavioural approach to the analysis of micro-economic systems. Aiming at characterizing via a rigorous mathematical analysis, the main features of the spontaneous organization and functioning of such markets, we introduce and we study a stylized dynamical model for the time evolution of buyers populations a-
nd prices/attractiveness at each wholesaler. The dynamics is governed by immediate reactions of the actors to changes in basic indicators. Buyers are influenced by some degree of loyalty to their regular suppliers. Yet, at times, they also prospect for potential better offers. On the other hand, sellers primarily aim at maximising their profit. Yet, they can be also prone to improving their competitiveness in case of clientele deficit. Our results reveal that, in spite of being governed by simple -
and immediate rules, the competition between sellers self-regulates in time, as it constrains to bounded ranges the dispersion of both prices and clientele volumes, does similarly for the mean clientele volume, and it generates oscillatory behaviours that prevent any seller to dominate permanently its competitors (and to be dominated forever). Long-term behaviours are also investigated, with focus on asymptotic convergence to an equilibrium, as can be expected for a standard functioning mode. In p-
articular, in the simplest case of 2 competing sellers, a normal-form-like analysis proves that such convergence holds, provided that the buyer’s loyalty is sufficiently high or the sellers’ reactivity is sufficiently low. In other words, this result identifies and proves those characteristics of the system that are responsible for long term stability and asymptotic damping of the oscillations.
November 17, 2025.
1 Introduction
1.1 OTC wholesale fresh product markets and their analysis
In spite of efforts to structure wholesale fresh product markets as centralised entities via auction sales and, more recently, digital platforms and electronic marketplaces, many such professional markets across the world, including the largest ones which provide daily foodstuff supply to large megalopolis (e.g. Central de Abastos in Mexico City, Paris Rungis Market, Mercamadrid), continue to operate based on over-the-counter (OTC) transactions that involve unregulated interactions between buyers -
and wholesalers. For markets of such perishable goods, the persistence and stability of this functioning mode, in which strong competition and limited public information prevail, are
1
arXiv:2511.11024v1 [econ.TH] 14 Nov 2025

remarkable. This contrasts with the contemporary trend that aims to formalise and to improve these marketplaces in order to make information widely accessible. Indeed, much as in traditional bazaars and souks in Eastern Asia and North Africa [10], in these markets, the sellers/wholesalers are grouped by product categories1, sitting next to each other in the same halls, with their products often displayed in an imposing way. The prices are usually not posted (or they merely serve as a starting poi-
nt for negotiation) and the final prices are discreet and they often remain private.2 In addition, while standards and certificates exist for most goods, their quality and availability fluctuate depending on the wholesalers’s provisions, which are not only seasonal but also depend on other random external factors such as weather conditions and sanitary issues. While OTC fresh product markets, whether they are restricted to professionals or are open to the general public, are extremely common, stud-
ies dedicated to these markets in the economic literature are scarce beyond price data analysis in fish markets [12, 17, 29]3 and related modelling in the game theoretic framework [14, 16]. In addition, some behavioural models aiming at reproducing the main features of the buyers’ dynamics in OTC (fish) markets have been developed and investigated. In particular, a model has been introduced in [30] for the time evolution of the buyers’ preference towards sellers, that includes dependence on seller-
s’ attractiveness. When envisaged at the population scale, the model is sufficiently simple to be amenable to a rigorous mathematical analysis [9]. Yet, it shows interesting parameter-dependent bifurcations and non-trivial asymptotic functioning modes. However, the attractiveness are assumed to be constant in time and the model does not include any (clienteledependent) feedback from the merchants. This limitation has been addressed in [8] where we have included some bi-directional interactions bet-
ween buyers and sellers in the population dynamics, and in particular a negative feedback from the sellers onto the buyers. Such negative retro-action generates oscillatory behaviours and the main results of that paper identify conditions on the ingredients of the model for the stationary points to be locally/globally asymptotically stable, ensuring convergence to an equilibrium in the long term. Yet, some of the features of the stationary points, such arbitrarily large ratios of the price at comp-
eting merchants or the potential permanence of intrinsically repulsive sellers, have limited economic relevance. At the individuals’ scale, agent-based models have been implemented, based on the major features of buyer–seller interactions, including feedback and bargaining. Numerical simulations of their dynamics have revealed proved capacity to adequately reproduce salient characteristics of the market, such as persistent price dispersion and high loyalty [20]. The numerics also have provided qua-
ntitative evaluations of the various bargaining strategies [5, 23]. However, the proposed high level of detail in these models prevents one to proceed to a mathematically rigorous analysis of the dynamics and of the resulting asymptotic behaviours.
1It may also be the case that the market consists only of goods of a unique category, for instance a fish market. 2In some cases, some overall public information about prices is available. For instance, at Paris Rungis Market, the authorities daily post the mean prices of a selection of goods, obtained from declarations of wholesalers in a sample, collected the previous day. Likewise, Central de Abastos’s website provides price ranges for certain products. 3Some professional fish markets function -
based on auction sales [13] or adopt auction sales and OTC in parallel. In the latter case, it has been show that the agents regularly alternate between the two modes, suggesting that the OTC market remains attractive even in presence of auctions [17, 22]. In addition, [29] demonstrates through extensive statistics about fish markets in France that prices differences between the two modes are in fact very small.
2

1.2 Main characteristics of the markets
In this paper, we mathematically investigate a behavioural model for the population dynamics in OTC wholesale fresh product markets, that includes clientele-dependent sellers feedback. As a complement to previous works in the field, to [8] and [30] in particular, the aim is to determine the long-term consequences on prices and clientele volumes, of (daily) repeated basic buyer-seller interactions, namely the immediate clientele variations due to prices changes and, conversely, the immediate price -
updates that result from changes in clientele volumes. The model has been elaborated based on the main empirical features of such markets as they have been reported in the literature, and summarized in this section.
Buyers’ features. The buyers are themselves professionals, mostly retailers and restaurateurs. Most of them are loyal, regular customers who have long term (informal) agreements with one/some wholesalers that they use as referent [1, 4]. Yet, there is real competition among wholesalers because at times, the buyers seek for new information, also via their professional networks, in order to check that the agreements they have settled remain competitive. This competition is further enhanced by anothe-
r type of buyers, namely the ”nomads” [27], who do not have stable ties with sellers and who are constantly trying to find the best deal by comparing offers. In addition, buyers’ profiles and expectations are variable and heterogeneous [12]. Depending of their own retail clientele, some buyers focus almost exclusively on prices, while for others, product quality equally matters.
Sellers’ features. When elaborating their offers, sellers take into account their stocks (quantity and quality) and those available at their competitors. They also evaluate the demand, in particular depending on the actual showing up of their regular buyers, lowering the prices at days of scarce clientele and vice-versa [4]. Less evidenced in such markets, although plausible given that stocks and demand are hardly foreseeable, is some of form of cooperation between the wholesalers, or at least som-
e type of communication, in an attempt to reduce the effects of the fluctuations of the demand [26].
Transaction and prices characteristics. As mentioned before, prices are not posted and the final prices are not disclosed [12]. Sellers may charge different prices to different buyers and there are evidences of significant variations of prices paid for the same good [27]. The final price usually results from pairwise negotiations and intensive bargaining between the parties. However, in some cases such as fish markets, there is little negotiation and the prices are more of the ”take-it-orleave-it”-
 type [19]. At Paris Rungis Market, the price the wholesalers pay their providers can be determined a posteriori, once the corresponding stock have been sold (post-transaction prices) [4]. This rule gives the wholesaler additional room to negotiate prices with the clients. More generally, negotiations originate from product heterogeneities, quality variations and also some kind of information asymmetry, namely the fact that the wholesalers know the expectations of their buyers’ clients and the ret-
ail prices, while the buyers have little knowledge about the wholesalers constraints, especially those due to unforeseeable external factors such as weather conditions or socio-economic/political context. Depending on buyers’ needs, the deals can be influenced by various aspects such as interpersonal relationships, accompanying service, delivery, and product follow-up. The combination of so many different factors may be the cause of the observed price dispersion.
3

1.3 Theoretical considerations and modelling
Bounded rationality, as evidenced by the existence of implicit contracts between buyers and their regular suppliers, combined with limited horizon for optimization due to rapid perishability and to marked unpredictability of prices and product quality, suggest that, in OTC wholesale fresh product markets, a behavioural approach to modelling [6, 15] based on direct interactions may be best appropriate. Besides, the inherent lack of public information about (effective) prices and, more generally, ab-
out any element of a seller’s attractiveness, advocates that a proper economic appreciation of the market vitality and business should also incorporate volumes of trade, or at least, quantifiers of clientele. Accordingly, our modelling process aims at investigating in the simplest setting, how basic actions and reactions of the various actors in the market, as they result from direct perceptions, can impact the distribution of both clientele volumes and prices among the competing sellers. It has b-
een based on the following considerations:
• As it is standard in population dynamics in mathematical biology, we assume, as a first approximation, that the clientele at each seller is sufficiently large so that it can be considered as an homogeneous collection of agents described by a fraction x ∈ [0, 1] of the total buyers’ population.
• The mentioned loyalty-induced bounded rationality is taken into account as follows. We assume that the agreements between sellers and buyers imply that, independently of the offer on a given day, a fraction αx of the previous’s day clientele systematically returns to the same wholesaler. Only the remaining population (1 − α)x is sensitive to current offers. Assuming that behaviours are homogeneous in time, α can be regarded as the fraction of the times at which any buyer returns to their previou-
s merchant(s).
• Of note, the nomad buyers’ population may be associated with a vanishing loyalty parameter (α = 0). Without clear evidence of direct interactions between loyal and nomad buyers and of their combined impact on prices, we assume that the two populations are fully decoupled and that they can be studied separately, by considering different values of α.
• Importantly, buyers can purchase distinct goods of the same category at distinct merchants the same day. Also possible but less likely, some buyers may not purchase any good at all if they are not satisfied with any of the offers. In any case, we do not impose any conservation of
the total mass of the effective buyers, viz. we do not require that
N
X
i=1
xi = 1 where xi denotes
the fraction of buyers that purchases at seller i ∈ {1, · · · , N }. Instead, this number can a priori take any value in [0, N ] and it can vary in time.
• We assume that sellers charge the same price to all their clients, independently of previous visits and of the volume of goods purchased. In other words, loyalty and volumes of trade do not impact (individual) prices. Any future effort to incorporate more realistic features in the model should probably address this assumption in the first place.
• The dynamics is self-contained, namely the time evolution of the variables (cliente volumes and prices) does not involve any time-dependent external input such as production/maintenance costs or any contextual/seasonal effect.
4

• No a priori bounds are imposed on prices and clientele volumes. Instead, a sanity check of the model in the series of results below shows that the dynamics spontaneously regulate these quantities and constraint them to a limited range.
The rest of the paper is organized as follows. The next section provides a formal definition of the model, together with the necessary technical assumptions on its constituents that are required in the proofs. Basic properties of the dynamics and preliminary features are also highlighted. Section 3 contains the main mathematical results, which cover several facets of the behaviours, from emerging bounds on the various variables, to a criterion for convergence to equilibrium, to granting of perpetu-
al oscillatory behaviours and finally, for N = 2, to a claim of asymptotic local stability of stationary points. For the sake of the presentation, all results are grouped together and their proofs are postponed to the following section. A final discussion is given in the last section.
2 Definitions and preliminary properties
2.1 Definitions
Formal definition of the dynamical system under consideration. The model is a discrete time dynamical system whose variables are quantifiers of clientele volumes and wholesaler prices. In order to provide a formal definition, we consider that the market is composed by N ∈ Z+ \ {1} = {2, 3, 4, · · · } competing sellers of a single product category. The market is open at repetitive and regular events, typically every working day. The events are labelled by the discrete variable t ∈ N = {0, 1, 2, · ·-
 · } and we assume for simplicity that the variables are updated once per event (NB: For a finer temporal modelling, one may instead envisage several updates per event). The state of the market on day t is given by the 2N -dimensional vector
(xt, pt) ∈ MN = [0, 1]N × (R+
∗ )N ,
where xt = (xt1, · · · , xt
N ) and pt = (pt1, · · · , pt
N ) are the variables, which are interpreted as follows.
• The volume of clientele of merchant i ∈ [1, N ] = {1, · · · , N } at day t is given by the fraction xt
i ∈ [0, 1] of the total buyer population present in the market that day. As mentioned before,
because of potential diversified purchases, the cumulated clientele volume
N
X
i=1
xt
i needs not be
normalized (and constant). Instead, the mean clientele volume
⟨xt⟩ = 1
N
N
X
i=1
xt
i,
can be a priori any number in [0, 1]. Yet, we shall prove that this quantity is naturally constrained by the dynamics and it cannot reach the boundaries of that interval.
• Following in-situ observations reported above, the quantity pt
i ∈ R∗+, which is called price for simplicity, intends to aggregate all contributions to the overall attractiveness of seller i’s offer on day t, namely the price, the product quality, the willingness to negotiation, the accompanying services, etc.
The rules for the time evolution of the variable (xt, pt) are based on the following principles, inspired by the discussion in the previous section.
5

• In addition to a certain degree of loyalty, buyers’ behaviours are driven by offers’ comparisons.
Accordingly, we assume that the fraction xt
i is influenced by the ratio pt
i
⟨pt⟩c
i
that involves the
mean price ⟨pt⟩c
i of seller’s i competitors, where we use the notation
⟨p⟩c
i= 1
N −1


N
X
j=1
pj − pi

.
When pt
i < ⟨pt⟩c
i , merchant i is competitive and attracts new customers; hence xt
i should
increase. On the opposite, pt
i > ⟨pt⟩c
i means that seller i is not competitive on day t and
repels prospective buyers, lowering the value of xt
i .4
• On the other side, the sellers adjust their prices according to clientele volumes, increasing them when they have more customers than the average of their competitors, and reducing them otherwise.
Altogether, the rules for time evolution are formally given by the following set of iterations, whose details are explained immediately below
(
xt+1
i = fα
pt+1
i
⟨pt+1 ⟩c
i
, xt
i pt+1
i = pt
i 1 + g(xt
i − ⟨xt⟩c
i)
for i ∈ [1, N ], (1)
where α ∈ [0, 1), the parametrized maps fα are defined by
fα(ρ, x) = αx + (1 − α)f (ρ, x), ∀ρ ∈ R+
∗ , x ∈ [0, 1]
and where the maps f and g will be specified below. The iteration (1) can be regarded as the repeated action of some multidimensional map F acting in the 2N -dimensional phase space MN = [0, 1]N × (R∗+)N with variables (x, p). In order
words, equation (1) implicitly defines a map F such that (xt+1, pt+1) = F (xt, pt) for all t ∈ N.5 In this context, we recall that the orbit that starts at t = 0 from the initial condition (x0, p0) is the sequence {(xt, pt)}t∈N defined by (xt, pt) = F t(x0, p0).
Interpretation of the iteration rules. The expression in the first row of (1) considers that, as indicated previously, a fraction α of the buyers’ population is fully loyal and systematically returns to the sellers they purchased at the previous day (term αxt
i). The loyalty parameter α is fixed once for all and remains unchanged throughout the paper. For the sake of notation, we will not mention any explicit dependence on this parameter α.
The remaining 1 − α fraction of buyers is assumed to be volatile and sensitive to prices. The
term (1 − α)f pt+1
i
⟨pt+1 ⟩c
i
, xt
i stipulates that the volume of such buyers who purchase at merchant
i at t + 1 not only depends on the price ratio pt+1
i
⟨pt+1 ⟩c
i
on that day, but also on the fraction xt
i at
previous day, expressing some contagion process driven by mimetic behaviours.
4Of note, the reason for considering the ratio pt
i
⟨pt ⟩c
i
instead of pt
i
⟨pt⟩ where ⟨p⟩ = 1
N
N
X
j=1
pj, is to avoid unintentional
bias in the dynamics. Indeed, while both ratios can be made arbitrarily small, close to 0, we have lim
⟨p⟩c
i →0
pi
⟨p⟩c
i
= +∞
whereas pi
⟨p⟩ ≤ N for all p ∈ (R+
∗ )N . A consequence on the dynamics of this asymmetry in the model with ratios pt
i
⟨pt ⟩
is presented in Appendix A. 5The conditions to be given on f and g imply that F : MN → MN , as claimed in the next section.
6

The expression in the second row of (1) considers that sellers simply update their prices depending on the difference of the volumes between their own clientele xt
i and the mean clientele
⟨xt⟩c
i at their competitors. Accordingly, the function g involved in the multiplicative coefficient should be positive when this difference is positive, and negative (but not smaller than −1) when the difference is negative. These seller reactions regulate the dynamics through negative feedback. Indeed, the first row of (1) and the assumptions on fρ imply that the clientele’s volume decreases at every wholesaler whose price is above the average of their competitors’ prices. Accordingly, it is likely to-
 eventually fall below the clientele’s volumes of the competitors. However, the second row implies that, from the day this happens, these wholesalers react by reducing their price, possibly below the average of competitors’ price, which then triggers an increase of clientele. In short terms and anticipating a statement below, dominant and dominated sellers, as well as the volumes of their clientele, are prone to alternate in time. Interestingly, such oscillatory behaviours driven by negative feedb-
ack is reminiscent of the principles governing homeostasis in biological systems, see e.g. [18, 24] for theoretical results in that context. Finally we mention that, by assuming that sellers’ influence operates through price ratios, the system (1) has been designed to address the main limitations of the plain relevance of the model in [8] (where this influence is based on an elementary absolute scale), especially the fact that the ratios of prices at competitive sellers can be arbitrary large in s-
tationary states. In particular, Proposition 3.2 states that all prices ratios must be eventually uniformly bounded in every orbit. Besides, notice that oscillatory behaviours in [8] eventually stop when approaching a fixed point, and this property largely facilitates the stability analysis. Instead, as we shall see below (Proposition 3.9), oscillations perdure forever in (1), which makes the proofs of asymptotic stability, and more generally, any control of the dynamics, much more challenging.
Assumptions on the maps f . In order to prove results on the dynamics of the system (1), a number of technical assumptions are imposed on the map f that are inspired by the considerations above about sellers’ attractiveness. The basic assumptions that are required for results on the global dynamics in phase space, for every N , are the following ones, which specify the dependence on x and ρ.
(Hf1) (Dependence on x.) f (ρ, ·) is continuously differentiable and increasing on [0, 1] for every ρ ∈ R∗+ and we have
• f (ρ, 0) = 0 and f (ρ, 1) < 1, for every ρ > 1,
• f (ρ, 0) > 0 and f (ρ, 1) = 1, for every ρ < 1,
• sup
x∈[0,1]
f ′x(ρ, x) < 1 for every ρ ̸= 1.
(Hf2) (Dependence on ρ.)
• f (·, x) is continuous and decreasing on R∗+, for every x ∈ (0, 1),
• f (·, 0) is continuous and decreasing on [1, +∞),
• f (·, 1) is continuous and decreasing on (0, 1],
• f (1, ·) = Id,
• f (0+, x) = 1 and f (+∞, x) = 0, for every x ∈ [0, 1].
Further conditions are imposed in addition to (Hf1-2), that depend on N . In the case N = 2, the following symmetry is required.
7

0.0 0.2 0.4 0.6 0.8 1.0
0.0
0.2
0.4
0.6
0.8
1.0
Figure 1: Graphs of f (ρ, ·) for the piecewise affine example (2) with c(ρ) = e−| ln ρ| (so that c(ρ) = 1
ρ
for ρ ≥ 1 and c(ρ) = ρ for ρ < 1) and ρ ∈ { 1
4, 1
2 , 1, 2, 4}. These plots illustrate the assumptions (Hf1-2), and in particular, the monotonicity in x and ρ, that the graph lies above the diagonal, excepted at x = 1, when ρ < 1, and it lies below the diagonal, excepted at x = 0, when ρ > 1, and that we have f ′x(ρ, ·) < 1 for all ρ ̸= 1. The symmetry in (Hf3) is also evident.
(Hf3) (Symmetry.) f ( 1
ρ , x) = 1 − f (ρ, 1 − x) for all (ρ, x) ∈ R∗+ × [0, 1],
That the buyers’ instant behaviours obey such prices-clientele volumes symmetry is a simplifying assumption that has important consequences on the dynamics of clientele volumes. However, buyers behaviours need not be symmetric, and for completeness, we present in Appendix B those features of clientele volumes that prevail when (Hf3) fails. For example, the following simple affine map of the variable x
f (ρ, x) = c(ρ)x if ρ ≥ 1
1 − c(ρ)(1 − x) if ρ ≤ 1 (2)
satisfies the assumptions (Hf1-3), provided that the function c has the following properties
• c( 1
ρ ) = c(ρ) for all ρ ∈ R∗+,
• c(ρ) ∈ (0, 1) for all ρ > 1 and c(1) = 1,
• c is continuous and decreasing on [1, +∞) and lim
ρ→+∞c(ρ) = 0.
An illustration for c(ρ) = e−| ln ρ| is given on Fig. 1. Besides, for the local stability result for N = 2 (Theorem 3.10), other conditions on f will be required. An example that satisfies all conditions at once will be given after that statement. In the case N > 2, the map f will be an extension of the map in (2) with c(ρ) = e−| ln ρ|. More precisely, it is given by the following expression
f (ρ, x) =
x
ρ + fdev(ρ, x) if ρ ≥ 1
1 − ρ(1 − x) − fdev(ρ, 1 − x) if ρ ≤ 1 ∀x ∈ [0, 1]. (3)
8

where fdev(ρ, ·) ≥ 0 is differentiable for all ρ ∈ R∗+ and
fdev(ρ, x) ≤
(
1− 1
ρ x if ρ ≥ 1
(1 − ρ)x if ρ ≤ 1
∀x ∈ [0, 1],
which in particular, implies that fdev(ρ, 0) = 0 for all ρ ∈ R∗+ and fdev(1, ·) = 0. The condition
fdev(ρ, ·) ≥ 0 implies a quantitative control of the attraction rate to 0 when ρ > 1 (which is at most
1
ρ ), and to 1 when ρ < 1. In other words, in absence of sellers’ feedback, buyers’ fractions cannot approach too fast (depending on ρ) the fixed points 0 and 1.
Assumptions on the map g. Combining the considerations above about sellers’ reactions with technical assumptions that will be employed in the proofs, we require that the map g (which is defined on [−1, 1]) be differentiable, increasing and such that
g(x) > −1, ∀x ∈ [−1, 1] and g(0) = 0.
When focus is made on orbits for which xt ∈ (0, 1)N for all t ∈ N (which, up to an initial transient period, is the case of every orbit except for the two fixed points with either xi = 0 for all i or xi = 1 for all i), it suffices to assume the following condition instead, in particular, in order to control the
relative prices pt
i
pt
N
(Hg1) g is differentiable and increasing on (−1, 1], g(x) > −1, ∀x ∈ (−1, 1] and g(0) = 0.
While the previous assumption does not hold for the elementary example g(x) = ax with arbitrary a ∈ (0, 1], this weaker condition holds for this example. Moreover, the following assumptions will be employed in order to ensure either a uniform control of these ratios and a control of the price amplitudes themselves.
(Hg2) Given N ≥ 2, we have
N
X
i=1
g(xi − ⟨x⟩c
i ) ≤ 0 for all x ∈ (0, 1)N .
(Hg3) Sg = sup
(x,y)∈(−1,1)2
1+g(x)
1+g(y) < +∞.
For instance, the map g defined by g(x) = ax + bx2, where a ∈ (0, 1) and b ∈ (max{a − 1, − a
2 }, 0], satisfies (Hg1-3).
2.2 Preliminary properties
The goal of the analysis presented below is to investigate the behaviours of the orbits of the dynamical system generated by (1), and in particular the long term behaviours as t → +∞. In this preliminary section, we provide a number of general features that set the context of the analysis to follow.
Well-defined dynamics. The convex combination in the first equation of (1), together with the property f (ρ, [0, 1]) ⊂ [0, 1], and the fact that g(x) > −1 for all x ∈ [−1, 1] imply that for every initial condition (x0, p0) ∈ MN , the subsequent orbit {(xt, pt)}t∈N is well defined, and we have (xt, pt) ∈ MN for all t ∈ N.
9

Moreover, the monotonicity of the maps f (ρ, ·) implies that we have f (ρ, (0, 1)) ⊂ (0, 1) which, together with the condition (Hg1), suffices to ensure that if x0 ∈ (0, 1)N , then {(xt, pt)}t∈N is well defined and we have xt ∈ (0, 1)N for all t ∈ N.
In the analysis below, we only consider the orbits with initial buyer population x0 ∈ (0, 1)N and assume (Hg1). Notice also that the map F is invertible, ie. (xt, pt) in (1) can be uniquely determined by (xt+1, pt+1), and F −1(MN ) ⊂ MN , so that pre-images arbitrarily far in the past are all well defined.
Synchronized dynamics and fixed points. As a particular instance of coupled map system without spatial structure [3], the dynamics (1) commutes with the simultaneous permutations of the x- and p-coordinates, viz. if the sequence {(xt, pt)}t∈N is an orbit of (1), then for every permutation π of {1, · · · , N }, the sequence {(πxt, πpt)}t∈N where we use the generic notation
πx = (xπ(1), · · · , xπ(N)),
is also an orbit of this system. This symmetry implies in particular that if two sellers i and j are at equilibrium at some instant t, meaning that xt
i = xt
j and pt
i = pt
j, then this feature
will be preserved at all future instants t′ > t. This property is the basis of the so-called partial synchronization (when groups of nodes in a network evolve in synchrony), a phenomenon that has been largely investigated in the context of coupled dynamical systems, see for instance [25] and also [2] for a review on synchronization. In particular, in the case of full synchrony, ie. when all sellers are at equilibrium with respect to each other, the assumption f (1, ·) = Id implies that (xt, pt) mu-
st be a fixed point of F , namely that the orbit must be constant. Every couple (x, p) ∈ MN in which the coordinates of x and p are equal (ie. xi = x ∈ [0, 1] and pi = p ∈ R∗+ for all i) is a fixed point and these couples are the
only fixed points of F .6 We claimed above that the map F is invertible. Its inverse F −1 also commutes with the simultaneous permutations of the x- and p-coordinates. As a consequence, for every t ∈ N, no orbit can become (partly) synchronized at instant t if its initial condition is not so. For the sake of the presentation, only those orbits that are not partly synchronized will be considered in the rest of the paper.
Dynamics in terms of relative prices According to expression (1), the dynamics of the clientele volumes xi only depends on the relative prices pi
pj , and in particular on the ratios ρi = pi
pN .
In addition, the dynamics of these ratios is self-contained. In other words, letting ρ = {ρi}N−1
i=1 ,
under the change of variables p 7→ (ρ, pN ) the variables (x, ρ) evolve in an autonomous way (hence independent of the variable pN ) whereas the iterations of pN depend on all the variables (x, ρ, pN ).7
6Indeed, by contradiction, if a fixed point existed with min
i∈[1,N ]
pi < max
i∈[1,N ]
pi, then we would have
min
i∈[1,N ]
pi ⟨p⟩c
i
< 1 < max
i∈[1,N ]
pi ⟨p⟩c
i
implying that the existence of i ̸= j ∈ [1, N ] such that xi = 0 and xj = 1. Yet, the second row in (1) and the assumption (Hg1) impose that the coordinates xi of any fixed point cannot depend on i. 7The complete system acting on (x, ρ, pN ) is said to be a skew-product dynamical system.
10

The iterations of the variables (x, ρ) simply read

 
 
xt+1
i =f
α, ρt+1
i
⟨ρt+1 ⟩ic
(xt
i) for i ∈ [1, N ]
ρt+1
i = ρt
i
1+g(xt
i −⟨xt ⟩c
i)
1+g(xt
N −⟨xt⟩c
N ) for i ∈ [1, N − 1]
. (4)
and we shall denote Fskew the corresponding map acting in [0, 1]N × (R∗+)N−1. Focusing on the dynamics of the clientele volumes and of the relative prices, the analysis below mostly investigates the dynamics of Fskew, whose fixed points are every couple (x, 1) where xi = x for any x ∈ [0, 1] and 1 stands for the vector with components ρi = 1 for i ∈ [1, N − 1]). Yet, as mentioned above, some considerations will also be made about the behaviours of the pt
i themselves, and especially
about their location in a closed interval inside R∗+.
3 Main results
This section collects the main results about the dynamics and orbits’ behaviours. While most results holds for arbitrary N ≥ 2, as can be expected, more thorough conclusions have been obtained in the simplest case N = 2. An overall illustration by means of times series of the various coordinates, is given in Fig. 2. Moreover, a specific illustration of the fixed point asymptotic stability in the case N = 2 (Theorem 3.10) will be given in Fig. 3 below.
850 900 950 1000
0.495
0.500
0.505
0.510
0.515
0.520
0.525
850 900 950 1000
0.95
1.00
1.05
1.10
850 900 950 1000
0.5080
0.5085
0.5090
0.5095
Figure 2: Illustration for N = 4 of the various results on clientele fractions and prices, their asymptotic behaviours and their perpetual crossings. Plots of the times series of clientele fractions {xt
i }4
i=1 (left), mean value ⟨xt⟩ (inset) and prices ratios {ρt
i }3
i=1 (right) associated with an orbit of
the system (1) with α = 0.9, f as in Fig. 1 and g(x) = x
2 . The initial condition has been chosen at random. The picture illustrates in particular the perpetual crossings claimed in Proposition 3.9 and it suggests that the long-term convergence to equilibrium of Proposition 3.3 holds in this case. The time series in the inset indicates that monotonous decay of the mean value ⟨xt⟩ prevails below the value N − 1
N−1 given in Proposition 3.6.
3.1 Emerging bounds on prices and their ratios
By itself, the definition of the phase space MN does not constrain the amplitudes of the prices pt
i
and their ratios ρt
i. Hence, a priori, these quantities could become arbitrarily large or arbitrarily small as t → +∞. However, as far as economic relevance is concerned, it would be problematic that the prices and their ratios asymptotically diverge. Accordingly, a first sanity check of the model is to make sure that, in every orbit, prices ratios remain constrained to some bounded interval away
11

from 0. The first result of this paper claims that this is indeed the case provided that f and g satisfy the primary N -independent conditions listed above.
Proposition 3.1. Let N ≥ 2 be arbitrary and assume that f satisfies the assumptions (Hf1-2) and g satisfies (Hg1). Then, for every orbit {(xt, ρt)}t∈N of (4), there exists M ∈ R∗+, M > 1, such that
max
i∈[1,N −1]
max ρt
i, 1
ρt
i
≤ M, t ∈ N.
The proof is given in Section 4.1. Since the initial condition (x0, ρ0) can be chosen so that
max
i∈[1,N −1]
n
ρ0
i, 1
ρ0
i
o
be arbitrarily large, the bound M in this statement evidently depends on the
orbit under consideration. However, one may wonder if, after a transient period, a uniform, orbit-independent, bound can apply for all t sufficiently large. In other words, does the time evolution naturally impose universal bounds on prices ratios in the long term and does it constrain these ratios to eventually enter in an invariant interval in the interior of R∗+? The existence of such universal bounds requires an additional condition on g because periodic
orbits with arbitrarily large values of max
n
ρt
i, 1
ρt
i
o
can exist when the instantaneous evolution rate
of ρi, namely the ratio
1 + g(xi − ⟨x⟩c
i) 1 + g(xN − ⟨x⟩c
N)
is unbounded. Indeed, for N = 2 and the piecewise affine map f defined by (2) with c(ρ) = e−| ln ρ| and g(x) = x, one can easily prove the existence of 4-periodic orbit for which
ρ4t
1 = ρ4t+2
1 = 1, ρ4t+1
1 = ρ and ρ4t+3
1 =1
ρ,
for every ρ ∈ R∗+ [7]. Nonetheless, when the ratio above is bounded (as the assumption (Hg3) imposes) and provided that it is sufficiently small depending on N (for N > 2), one proves that the above questions have affirmative answers and that price ratios discrepancies in the market are indeed uniformly limited at large times. This is the purpose the statement below. In order to get quantitative estimates, given an arbitrary N ≥ 2, let
TN = min t ∈ Z+ : f t
α
N (N − 1)
1 + (N − 2)(N + 1) , 1 < f t
α
N −1
N ,0 ,
where the notation f t stands for the iterations of the x variable defined by the following induction
f1
α(ρ, x) = fα(ρ, x) and f t+1
α (ρ, x) = fα(ρ, f t
α(ρ, x)), ∀(ρ, x) ∈ R+
∗ × [0, 1], t ∈ Z+.
Given the properties on f , we must have TN < +∞.
Proposition 3.2. Assume that f satisfies (Hf1-2) and g satisfies (Hg1) and (Hg3). Case N = 2. For every orbit {(xt, ρt1)}t∈N of (4), there exists t′ ∈ N so that
max ρt
1, 1
ρt1
≤ 2SgT2 , ∀t ≥ t′.
12

Case N > 2. Assume in addition that Sg ≤ N+1
N
1
TN . Then, for every orbit {(xt, ρt)}t∈N of (4), there exists t′ ∈ N so that
max
i∈[1,N −1]
max ρt
i, 1
ρt
i
≤ N + 1, ∀t ≥ t′.
The proof is given in Section 4.2. What about bounds on the prices? As before, it is legitimate to ask whether or not these quantities can become arbitrarily large (or small) as t → +∞. Notice that the dynamics of prices commutes with the multiplication by any number in R∗+, viz. if {(xt, pt)}t∈N is an orbit of (1),
then for every a ∈ R∗+, the sequence {(xt, apt)}t∈N is also an orbit of this system. Therefore, no orbit-independent bound alike in Proposition 3.2 can hold for the prices. One can only expect to show that the prices remain bounded and do not diverge in the long term. Proposition 3.3 below claims that this is indeed the case provided that in addition to (Hg1), g also satisfies the weak concavity assumption (Hg2). Furthermore, Proposition 3.3 does not prevent the prices to asymptotically converge t-
o 0. However, it establishes a relationship between such putative convergence and the asymptotic behaviour of the orbit itself, underlying the importance of the convergence to equilibrium in order to maintain realistic prices in the market. More precisely, the only case in which prices can asymptotically vanish is when the orbit does not converge to the set of stationary points.
Proposition 3.3. Let N ≥ 2 be arbitrary and assume that f satisfies (Hf1-2) and g satisfies (Hg1-2). Then, for every orbit {(xt, pt)}t∈N of (1), we have
sup
t∈N
max
i∈[1,N ]
pt
i < +∞.
Moreover, assume that lim
t→+∞ max
i∈[1,N ]
pt
i > 0. Then the distance to the set of fixed points of F , namely,
max
i,j∈[1,N ]
max{|xt
i − xt
j|, |pt
i − pt
j |},
converges to 0 as t → +∞.
The proof is given in Section 4.3. It is unclear if, under the condition lim
t→+∞ max
i∈[1,N ]
pt
i > 0, the orbit
itself converges to one of the fixed points, or instead, if it keeps slipping back and forth along this set. In addition, notice that while (Hg2) is a mild condition, it may not always hold. Yet, other bounds on prices may apply when (Hg2) fails as the next statement illustrates in the case N = 2 (see again Section 4.3 for a proof).
Remark 3.4. Let N = 2, assume that f satisfies (Hf1-2) and let g(x) = ax + bx2 where a ∈ (0, 1]
and b ∈ ( a2
2,a
2 ). Then, g satisfies (Hg1) but not (Hg2).8 Moreover, for every orbit {(xt, pt)}t∈N of (1), we have
ti∈nfN min{pt
1, pt
2} > 0,
and if lim
t→+∞
min{pt1, pt2} < +∞, then the distance to the set of fixed points of F , namely,
max{|xt
1 − xt
2|, |pt
1 − pt
2|}
converges to 0 as t → +∞.
8Recall that, for any a ∈ (0, 1) and b ∈ (max{a − 1, − a
2 }, 0], the map g(x) = ax + bx2 does satisfy (Hg1) and (Hg2).
13

3.2 Emerging bounds on clientele volumes
As for prices, one may question those potential constraints that the dynamics may generate on clientele volumes. Indeed, given that 0 (respectively 1) is a globally attracting fixed point of f (ρ, ·) for every ρ > 1 (resp. ρ < 1), these volumes could a priori approach arbitrarily close the boundaries of the interval [0, 1] in the course of time. Evidently, such behaviour would be questionable as far as economic relevance is concerned. Hence, another sanity check of the dynamics is to make sure tha-
t clientele volumes remain at moderate values inside the interval, away from 0 and 1.
Emerging bounds on mean volumes. Prior to considering the individual fractions xt
i, bounds
on the mean value ⟨xt⟩, which represents an overall measure of clientele volumes, can be investigated firstly. This is the purpose of the upcoming statements below, which consider separately the cases N = 2 and N > 2. The result in the first case relies on the symmetry assumption (Hf3).9 It paves the way for the asymptotic stability of the fixed point ( 1
2, 1
2 , 1) of (4), to be established later on. In the second case, the symmetry assumption does not matter but we rely instead on the explicit expression (3). Moreover, the control on ⟨xt⟩ is comparatively weaker in this case and, in particular, it is insufficient to address the stability of fixed points.
Lemma 3.5. Let N = 2 and assume that f satisfies (Hf1-3) and g satisfies (Hg1). Then, the following properties hold for every orbit {(xt, ρt1)}t∈N of (4).
• If ⟨xt⟩ = 1
2 for some t ∈ N, then ⟨xt+1⟩ = 1
2.
• If ⟨xt⟩ ̸= 1
2 and ρt+1
1 ̸= 1 for some t ∈ N, then (2⟨xt+1⟩−1)(2⟨xt⟩−1) > 0 and 2⟨xt+1⟩−1
2⟨xt⟩−1 < 1.
The proof is immediate, see beginning of Section 4.4. The Lemma implies that ⟨xt⟩ (monotonically) converges as t → +∞. However, from (Hf2), we have f ′x(1, x) = 1 for all x ∈ [0, 1]; viz. the rate
at which |2⟨xt⟩ − 1| decays vanishes when ρt1 → 1. Therefore, the limit of ⟨xt⟩ depends on the
asymptotic behaviour of {ρt1} with respect to 1 and needs not be equal to 1
2 when ρt1 approaches 1 too fast. As far as economic interpretation is concerned, when it holds, convergence of ⟨xt⟩ to 1
2 in markets where only two sellers compete together means a kind of spontaneous normalization. That is to say, even though these features are not initially prescribed, in the long term, the system approaches a functioning mode in which all buyers do purchase regularly at every market event, and at each event, they only do it at a single seller. As announced, the next statement claims that the dynamics of ⟨xt⟩ can also be constrained in the case N > 2, provided that f is given by (3) and some suit-
able control on the deviation fdev holds.
Proposition 3.6. Let N > 2 be arbitrary, assume that g satisfies (Hg1) and f is given by (3) with fdev(ρ, ·) ≥ 0 for all ρ ∈ R∗+, and it satisfies (Hf1-2). Moreover, assume that
• fdev(ρ, ·) = 0 for all ρ ∈ R∗+, if N ∈ [3, 4],
• sup
x∈(0,1)
fdev (ρ,x)
x < CN (ρ) for all ρ ∈ (0, N − 1) (where CN (ρ) is known explicitly) if N ≥ 5.
Then, the following properties hold for every orbit {(xt, ρt)}t∈N of (4).
9See however Appendix B for results in absence of symmetry.
14

(i) If N ⟨xt⟩ ≥ 1
N−1 (resp. ≤ N − 1
N−1 ) for some t ∈ N, then N ⟨xt+1⟩ ≥ 1
N−1 (resp. ≤ N − 1
N−1 ).
(ii) If N ⟨xt⟩ < 1
N−1 and ρt ̸= 1 for some t ∈ N, then ⟨xt+1⟩ > ⟨xt⟩.
(iii) If N ⟨xt⟩ > N − 1
N−1 and ρt ̸= 1 for some t ∈ N, then ⟨xt+1⟩ < ⟨xt⟩.
The proof is given in Section 4.4 and the expression of CN (ρ) is given at the end of that section. The constraints on f in this statement are a consequence of the approach in the proof. Yet, we believe that the results hold in more general cases, and in particular for nonlinear maps f in the case N ∈ [3, 4].10 Proposition 3.6 implies that if ⟨xt⟩ belongs to [ 1
N(N−1) , 1 − 1
N(N−1) ] for some t ∈ N, then it remains in this interval at all future times. In addition, if it never enters this interval, then it must monotonically converge, moving away from the boundaries of [0, 1]. Even though the conclusion on lim
t→+∞⟨xt⟩ is not as stringent as in the case N = 2, it shows that, for any number of competing
sellers in the market, a kind of (soft) spontaneous normalisation emerges in long term.
Emerging bounds on individual fractions. The properties of the mean volume ⟨xt⟩ given by Lemma 3.5 and Proposition 3.6 constraint the individual fractions xt
i. In particular, it is impossible that they all simultaneously approach the boundaries of [0, 1]. The next statement shows that all of them must remain away from these boundaries. In other words, no seller can ever capture an arbitrarily large fraction of the buyer population and, conversely, no seller’s clientele volume can decrease below a certain threshold.
Corollary 3.7. Assume that either N = 2 and the conditions of Lemma 3.5 hold, or N > 2 and the conditions of Proposition 3.6 hold. Then, for every orbit {xt, ρt}t∈N, there exists ε ∈ (0, 1) such that
ε ≤ xt
i ≤ 1 − ε, ∀i ∈ [1, N − 1], t ∈ N.
For the proof, see Section 4.5. In addition, the existence of fixed points with xi = x for any x ∈ [0, 1] arbitrary indicates that no uniform, orbit independent, bounds on the variables xt
i can hold. One cannot a priori exclude that, depending on the initial condition, the clientele fraction at each merchant remains arbitrarily small, or arbitrarily close to 1. However, when focus is made on the differences between these fractions, a uniform bound applies at large times, as claimed in the next statement.
Proposition 3.8. Let N ≥ 2 be arbitrary and assume that the conditions of Proposition 3.2 hold. Then, there exists εN ∈ (0, 1) such that, for every orbit {(xt, ρt)}t∈N, there exists t′ ∈ N so that
max
i∈[1,N −1]
|xt
i − xt
N | ≤ εN , ∀t ≥ t′.
(Sub-optimal) Estimates of the bound εN can be deduced from the proof, which is given in Section 4.6. It is worth noticing that this statement only relies on the assumptions of Proposition 3.2, and not on those of Lemma 3.5 or Proposition 3.6. Together with Proposition 3.2, Proposition 3.8 claims that if the rate at which the sellers change their prices is bounded (adequately depending on
10For N ∈ [3, 4], the lower bound in statement (i) and statements (ii) and (iii) actually hold for some maps of the form (3) with fdev(ρ, ·) ̸= 0, see the statements in Section 4.4.
15

N, α and f ), then while there is no a priori blatant dissipation in this system, the dynamics actually forces the price ratios and the differences between clientele fractions, and hence the distance to the set of fixed points, to be uniformly bounded at large times, which can be interpreted as a kind of weak form of long-term homogenisation in this system.
3.3 Perpetual crossings of fractions and prices
The negative feedback induced by the sellers’ reactions to clientele changes is the main cause of the above bounds on prices and clientele volumes. Besides, negative feedback loops are known to cause oscillatory behaviours, as it has been identified in the literature, especially in the modelling of genetic regulation, see e.g. [11, 18, 24]. It follows from the next statement that oscillations do take place here, as a consequence of the fact the seller with maximum/minimum price or clientele fracti-
on must change infinitely often. In other words, no seller can be forever more competitive (or less competitive) than its competitors and no seller can have forever more clientele (or less clientele) than its competitors (NB: this comment does not consider those orbits in which prices or clientele volumes can become indistinguishable, even temporarily.)
Proposition 3.9. Let N ≥ 2 be arbitrary and assume that f satisfies the assumptions (Hf1-2) and g satisfies (Hg1). Let {(xt, pt)}t∈N be a trajectory for which, for each t ∈ N, all coordinates of xt and of pt differ. Given an arbitrary t ∈ N, define
it
x = arg min
i∈[1,N ]
xt
i and it
x = arg max
i∈[1,N ]
xt
i,
and define itp and it
p similarly. Then, these 4 quantities must change infinitely often. That is to
say, for every t ∈ N, there exists t′ > t such that
it′
x ̸= it
x,
and a similar statement holds for it
x, itp and it
p.
The proof is given in Section 4.7. Notice that in the simple case N = 2 of two sellers, this statement implies perpetual crossings of the variables xt1 and xt2, as well as of the price variables pt1 and pt2.
3.4 Long term equilibration in the case N = 2
Given the conclusion of Proposition 3.9, a natural subsequent question is whether or not the amplitude of the oscillations remains bounded from below or if the oscillations are asymptotically damped and the prices and the fractions equilibrate in the long term. In the case N = 2, in which the variables xt1 and xt2, as well as pt1 and pt2, must cross infinitely often according to Proposition 3.9, this question is particularly relevant as far as economic interpretation is concerned. Indeed, if one c-
an prove that the difference xt1 − xt2 asymptotically vanishes
and the ratio ρt1 converges to 1, then, together with the convergence of ⟨xt⟩, this would imply that the whole system converges to a fixed point, viz. spontaneous convergence to a steady state takes place in the long term. Accordingly and for simplicity, assuming the symmetry (Hf3) – which ensures that f (1, 1
2) = 1
2
and hence that ( 1
2, 1
2 , 1) is a fixed point of Fskew – focus is made here on the behaviour of (xt1 −xt2, ρt1)
when close enough to (0, 1) and when ⟨xt⟩ is close enough to 1
2 . In order to set the context, assume for now that x ∈ (0, 1) is a fixed point of f (1, ·) (which is assumed to be differentiable) and we
16

have f ′x(1, x) = 1 (NB: Both assumptions evidently hold for all x ∈ (0, 1) when f (1, ·) = Id). Then, direct computations show that the Jacobian matrix of Fskew at (x, x, 1) reads


1 + 2(1 − α)fρ′ (1, x)g′(0) −2(1 − α)fρ′ (1, x)g′(0) (1 − α)fρ′ (1, x) −2(1 − α)fρ′ (1, x)g′(0) 1 + 2(1 − α)fρ′ (1, x)g′(0) −(1 − α)fρ′ (1, x) 2g′(0) −2g′(0) 1


Clearly, the vector (1, 1, 0) is an eigenvector of this matrix and the corresponding eigenvalue is equal to one. More interestingly, the matrix has two other eigenvalues λ±(x), which can be specified as follows λ+(x)λ−(x) = 1 and λ+(x) + λ−(x) = 2(1 + 2(1 − α)f ′
ρ(1, x)g′(0)).
If the assumptions (Hf1-2) and (Hg1) hold, then we must have fρ′ (1, x)g′(0) ≤ 0, and hence λ+(x) + λ−(x) ≤ 2. As a consequence, in the plane transverse to (1, 1, 0), the linear stability of (x, x, 1) falls into one of the following cases
• parabolic (ie. λ±(x) = 1) if fρ′ (1, x)g′(0) = 0,
• elliptic (ie. |λ±(x)| = 1 but λ±(x) ̸= 1) if fρ′ (1, x)g′(0) ̸= 0 and (1 − α)fρ′ (1, x)g′(0) ≥ −1,
• hyperbolic with one unstable direction (ie. λ−(x) < −1 < λ+(x) < 0), if fρ′ (1, x)g′(0) ̸= 0 and
(1 − α)fρ′ (1, x)g′(0) < −1.
The expression of the Jacobian (actually, the resulting Jacobian after an appropriate change of variable, see equation (18) below) shows that, if parabolic, the fixed point (x, x, 1) must be unstable when g′(0) ̸= 0. This condition is satisfied generically when (Hg1) holds. Hence, we leave aside the case of parabolic fixed points and investigate the stability only in the elliptic case. Notice that when fρ′ (1, x) < 0, the point (x, x, 1) must be elliptic when the loyalty coefficient
α is close enough to 1 or when the sensitivity g′(0) of the sellers’ reaction is sufficiently small (but does not vanish). Unlike when the spectrum of the Jacobian matrix lies inside the unit disk, the stability of an elliptic fixed point depends on higher-order terms of the corresponding Taylor expansion, and of the 3rd-order coefficients of the normal form in particular [21, 28]. A normal-form-like computation of the map Fskew in the neighbourhood of a fixed point ( 1
2, 1
2 , 1) yields the following convergence result, which culminates our investigation of the dynamics for N = 2.
Theorem 3.10. Let N = 2 and assume that the following conditions holds
• there exist ρ0 > 1 and x0 ∈ (0, 1
2 ) such that f ∈ C4(U ) and |f ′x(ρ, x)| ≤ 1 for all (ρ, x) ∈ U ,
where U = [ 1
ρ0 , ρ0] × [x0, 1 − x0],
• the map f satisfies (Hf3) and we have
f′
x(1, 1
2 ) = 1, f ′
ρ(1, 1
2 ) < 0, f ′′′
ρx2 (1, 1
2 ) = 0 and f ′′′
ρ2x(1, 1
2 ) < 0, (5)
• g ∈ C4([−2x0, 2x0]) and g is an odd function that satisfies (Hg1) and g′(0) > 0,
• the fixed point ( 1
2, 1
2 , 1) is transversally elliptic and λ±( 1
2 ) ̸= −1.
Then, there exists a neighbourhood of ( 1
2, 1
2 , 1) in [0, 1]2 × R∗+ such that for every initial condition in this neighbourhood, we have for the subsequent orbit of (4)
lim
t→+∞(xt
1 − xt
2, ρt
1) = (0, 1).
17

For the proof, see Section 4.8. An illustration of the long-time behaviours ensured by this statement is given on Figure 3.
Figure 3: Illustration of Theorem 3.10. Plot of fragments of an orbit for f as in Fig. 4 and g(x) = x
2.
The parameter α has been chosen so that λ±( 1
2 ) = e iπ
6 (NB: For such f , we actually have λ±(x) = λ±( 1
2 ) for each x ∈ [x0, 1 − x0]). The dots represent points of coordinates (x112k − x122k, ln ρ112k) for
k ∈ [1, 500]. Initial condition: x01 = 0.51, x02 = 0.48 and ρ01 = 1.1. Color code: Dark blue for k = 1 to dark red for k = 500. The picture clearly illustrates the convergence to (0, 0) as a consequence of the Theorem. Notice also that, due the nonlinear effects, the rotation angle slightly deviates from the one, namely π
6 , of the linearized dynamics in the neighbourhood of the fixed points (NB: had the dynamics be that linearized one, the dots would have been aligned on a ray issued from the origin); yet, as expected, the spiralling drift is smaller as the dots come closer to the origin.
Notice that Theorem 3.10 is a local result that does not require the global assumptions (Hf12). Instead, it requires that f satisfies a certain regularity together with some constraints on its derivatives, which appear to be generic when (Hf1-3) hold. For the sake of completeness, an example of map f that satisfies all assumptions at once (ie. (Hf1-3) and those in Theorem (3.10)) will be given immediately below. Notice also from the equation on λ±(x), that when fρ′ (1, 1
2 ) < 0 and g′(0) > 0, the point ( 1
2, 1
2 , 1)
is certainly elliptic and λ±( 1
2 ) ̸= −1 when α is close enough to 1, say when in some interval (α∗, 1).
Furthermore, the proof shows that the condition fρ′′x(1, 1
2 ) = 0 (which is a consequence of the
symmetry (Hf3)) and f ′′′
ρx2 (1, 1
2 ) = 0 in (5) are necessary for stability, ie. even though elliptic, the
point ( 1
2, 1
2 , 1) is unstable when (at least) one of these condition fails. Finally, when all the assumptions are simultaneously satisfied, the combination of Lemma 3.5 and Theorem 3.10 immediately imply that, when starting sufficiently close to ( 1
2, 1
1 , 1), the orbit of Fskew must asymptotically converge to a fixed point, as formally claimed now.
Corollary 3.11. Let N = 2 and assume that f satisfies (Hf1-2) and f and g satisfy the conditions of Theorem 3.10. Then, there exists a neighbourhood of ( 1
2, 1
2 , 1) in [0, 1]2 × R∗+ such that for every initial condition in this neighbourhood, the subsequent orbit converges to a fixed point.
18

A map f that complies all assumptions at once. Following Corollary 3.11, we aim at an example of map that simultaneously satisfies (Hf1-2) and the conditions in the Theorem. Evidently, a natural candidate would be the map f (ρ, x) given by (2). Provided that c is itself differentiable, for every x ∈ (0, 1), such map f (ρ, x) is a differentiable function of ρ at all ρ ̸= 1. Moreover, it is also differentiable at ρ = 1 iff c′(1) = 0. However, we have fρ′ (1, x) = 0 for all x ∈ [0, 1] in this case; -
thus every fixed point is transversally parabolic. Therefore, no map of the example (2) can satisfy the conditions in Theorem 3.10. Nevertheless, one can amend this example, especially if one requires that f (ρ, x) be differentiable at ρ = 1 only for x in a neighbourhood of 1
2 , so that it simultaneously satisfies (Hf1-3) and the conditions in (5). The construction proceeds as follows.
1. We determine f (ρ, x) only for ρ ≥ 1 and deduce the expression for ρ ≤ 1 by symmetry. In doing so, we must ensure that, for ρ = 1, the first expression (respectively its derivatives) match the second one (resp. the corresponding derivatives).
2. Let ρ0 > 1 be arbitrary and let c ∈ C4([1, ρ0]) be a function as in the example (2) such that
c′(1) = 0 and c′′(1) < 0. For instance, one can choose c(ρ) = e−(ln ρ)2.
3. For ρ > ρ0, let f (ρ, x) = c(ρ)x for all x ∈ [0, 1], as in (2).
4. Let x0 ∈ (0, 1
2 ) be arbitrary. For ρ ∈ [1, ρ0] and x ∈ [x0, 1], let f (ρ, x) = 1
2 − b(ρ) + c(ρ)(x − 1
2)
where b ∈ C4([1, ρ0]) is increasing and satisfies b(1) = 0, b′(1) > 0, b(ρ0) = 1−c(ρ0)
2 , as well as the following inequality
b′(ρ) + c′(ρ)x0 ≥ 0, ∀ρ ∈ [1, ρ0].
For instance, one can choose the linear map b(ρ) = 1−c(ρ0)
2
ρ−1
ρ0−1 provided that x0 is sufficiently small, depending on ρ0 and c.
5. For ρ ∈ [1, ρ0) and x ∈ [0, x0], f (ρ, x) is a smooth and increasing interpolation between 0 and f (ρ, x0) with derivative in x not larger than 1. Such interpolation clearly exists. For ρ = ρ0,
the condition b(ρ0) = 1−c(ρ0)
2 implies that we can choose f (ρ0, x) = c(ρ0)x for all x ∈ [0, 1].
We check that f satisfy (Hf1-3) and the assumptions in the Theorem. Evidently, such a map satisfies (Hf1) and (Hf3). Moreover, the inequality on the derivative of b and the fact that c′(ρ) ≤ 0 for ρ ≥ 1 ensure that f is a decreasing function of ρ ∈ [1, ρ0] for x ∈ [x0, 1]. In addition, the interpolations for x ∈ [0, x0] can be chosen to be monotonous in ρ too. For instance, one can define such interpolations for a finite set in [1, ρ0] and then linearly interpolate them for the remaining values of-
 ρ. The other conditions of (Hf2) are easy to check. As far as the conditions in the Theorem are concerned, the fact that b and c are of class C4 and the linear dependence on x ensure that f is C4 on (1, ρ0) × [x0, 1 − x0]. Moreover, the expression of f , the symmetries of b and c and the linear dependence on x through x − 1
2 ensures that all
derivatives match for ρ = 1, ie. f ∈ C4(U ). Finally, using in particular that c′(1) = 0, we have
f′
x(1, 1
2 ) = c(1) = 1, f ′
ρ(1, 1
2 ) = −b′(1) < 0, f ′′′
ρx2 (1, 1
2 ) = 0 and f ′′′
ρ2x(1, 1
2 ) = c′′(1) < 0.
4 Proofs
4.1 Proof of Proposition 3.1
It suffices to prove that
lim
t→+∞ ρt
i < +∞, ∀i ∈ [1, N − 1],
19

0.0 0.2 0.4 0.6 0.8 1.0
0.0
0.2
0.4
0.6
0.8
1.0
Figure 4: Illustration of f (ρ, ·) for the example that satisfies all conditions at once with ρ0 = 3,
c(ρ) = e−(ln ρ)2 , x0 = 1
3 and b(ρ) = 1−c(ρ0)
4 (ρ − 1). The lower (resp. upper) grey region is where
f coincides with the linear map in the example 2 for ρ ≥ 3 (resp. ρ ≤ 1
3 ). The left blue triangle
is the domain (ρ, x) ∈ [1, ρ0) × [0, 1
2 − x0] where the map smoothly interpolates between 0 and
f ρ, 1
2 − x0 and similarly for the upper red triangle. In the remaining domains [1, ρ0) × [ 1
2 − x0, 1]
and [ 1
ρ0 , 1] × [0, 1
2 + x0] the map is affine and defined in a way so that it is of class C4 in U .
because then, the permutation symmetry of the dynamics in the variables (x, p) implies that we must have
lim
t→+∞
ρt
i > 0, ∀i ∈ [1, N − 1].
By contradiction, suppose that there exist i′ ∈ [1, N − 1] and a subsequence {tk}k∈N such that
lim
k→+∞ρtk
i′ = +∞. Let us show first that there exists i′′ ∈ [1, N − 1] such that
lim
k→+∞
ρtk
i′′
⟨ρtk ⟩c
i′′
> 1.
By contradiction, assume that for every ε > 0 there exists kε ∈ N such that
ρtk
i
⟨ρtk ⟩c
i
≤ 1 + ε, ∀i ∈ [1, N − 1], k ≥ kε,
that is to say
(N − 1)ρtk
i ≤ (1 + ε)

1 +
N −1
X
j=1
ρtk
j − ρtk
i

 , ∀i ∈ [1, N − 1], k ≥ kε.
Summing over i yields
N
X
i=1
ρtk
i ≤ (1 + ε)(N − 1)
N − 1 − (1 + ε)(N − 2) , ∀k ≥ kε,
20

provided that N − 1 − (1 + ε)(N − 2) > 0 viz. ε < 1
N−2 . However, this inequality on
N
X
i=1
ρtk
i is
incompatible with the fact that lim
k→+∞ρtk
i′ = +∞; hence the contradiction.
Clearly, the assumptions (Hf1-2) imply that for every infinite sub-subsequence {tkl}l∈N such that
lim
l→+∞
ρtkl
i′′
⟨ρtkl ⟩c
i′′
> 1,
we have lim
l→+∞ xtkl
i′′ < 1.
Now, let us prove independently that lim
k→+∞ρtk
i′ = +∞ implies that for every infinite sub
subsequence {tkl}l∈N such that {xtkl }l∈N converges, we have
lim
l→+∞ xtkl
i = 1, ∀i ∈ [1, N − 1],
which is obviously incompatible with the previous inequality and concludes the proof. First, the
limit lim
k→+∞ρtk
i′ = +∞ implies
lim
k→+∞⟨ρtk ⟩c
N = +∞.
and the assumptions (Hf1-2) impose that we must have
lim
k→+∞
xtk
N ≥ lim
k→+∞
fα
1
⟨ρtk ⟩c
N
, 0 = 1,
and thus lim
k→+∞xtk
N = 1. Moreover, by passing to a sub-subsequence if necessary, we may assume
that
⟨ρtk +1 ⟩c
N ≥ ⟨ρtk ⟩c
N , ∀k ∈ N,
(NB: If this was not the case, then the limit above could not be +∞). The iteration rule for the ρt
i
then implies
N −1
X
i=1
ρtk
i


1 + g xtk
i − ⟨xtk ⟩c
i
1 + g xtk
N − ⟨xtk ⟩c
N
−1

 ≥ 0, ∀k ∈ N.
and trivially, when letting ρtmax = max
i∈[1,N −1]
ρt
i > 0,
N −1
X
i=1
ρtk
i
ρtmkax


1 + g xtk
i − ⟨xtk ⟩c
i
1 + g xtk
N − ⟨xtk ⟩c
N
−1

 ≥ 0, ∀k ∈ N. (6)
By compactness and by passing (again) to a sub-subsequence if necessary, we may assume that the following limits exist
lim
k→+∞
ρtk
i
ρtmkax
≤ 1 and lim
k→+∞ xtk
i ≤ 1, ∀i ∈ [1, N − 1].
21

We separate two cases and first consider the case of those i such that lim
k→+∞
ρtk
i
ρtmkax
= 0. Then we
have
lim
k→+∞
ρtk
i
⟨ρtk ⟩c
i
≤ (N − 1) lim
k→+∞
ρtk
i
ρtmkax
=0
and consequently lim
k→+∞xtk
i = 1 as before. In the other case lim
k→+∞
ρtk
i
ρtmkax
> 0, the limit lim
k→+∞xtk
N =1
and the strict monotonicity of g impose that for such i ∈ [1, N − 1], we must have
lim
k→+∞
ρtk
i
ρtmkax


1 + g xtk
i − ⟨xtk ⟩c
i
1 + g xtk
N − ⟨xtk ⟩c
N
−1

 ≤ 0,
with strict inequality iff lim
k→+∞xtk
i < 1. However, taking the limit k → +∞ in the inequality (6)
implies that such strict inequality is impossible; hence we must again have lim
k→+∞xtk
i = 1 as desired.
4.2 Proof of Proposition 3.2
Proof in the case N = 2. We are going to prove that for every orbit {(xt, ρt1)}t∈N, there exists
t′ ∈ N so that
ρt
1 ≤ 2SgT2 , ∀t ≥ t′.
Applying the result to the orbit {(πxt, πpt)}t∈N of (1) with permuted coordinates implies that the
same inequality also eventually holds for the variable (πpt)1
(πpt)2 = pt
2
pt
1
=1
ρt
1
, completing the proof of the
statement. The inequality above will be a direct consequence of the following property.
Claim 4.1. There exists γ ∈ (0, 1) such that when, in any given orbit, there exists t ∈ N such that
ρt+s
1 > 2 for s ∈ [1, T2],
then we must have ρt+T2+1
1 < γρt+T2
1 . If, in addition, ρt+T2+1
1 > 1, then we have
ρt+T2+s+1
1 < γρt+T2+s
1,
for s = 1 and this estimate prevails for all those s ∈ Z+ for which ρt+T2+s
1 > 1.
Proof of the Claim. The definition of T2, the assumption of the claim and the monotonicity of f imply that we have
xt+T2
1 < fαT2 (2, 1) < fαT2 ( 1
2 , 0) < xt+T2
2,
and then, using assumption (Hg1)
ρt+T2+1
1 = ρt+T2
1
1 + g(xt+T2
1 − xt+T2
2)
1 + g(xt+T2
2 − xt+T2
1 ) < γρt+T2
1,
as desired, where γ = 1 + g(fαT2 (2, 1) − fαT2 ( 1
2 , 0))
1 + g(fαT2 ( 1
2 , 0) − fαT2(2, 1)) < 1.
22

If, in addition, ρt+T2+1
1 > 1, then we have
xt+T2+1
1 = fα(ρt+T2+1
1 , xt+T2
1 ) < xt+T2
1 and xt+T2
2 < fα( 1
ρt+T2+1
1
, xt+T2
2 ) = xt+T2+1
2,
so that ρt+T2+2
1 < γρt+T2+1
1 for the same reason as before. This argument repeats as long as
ρt+T2+s
1 > 1, completing the proof of the Claim. □
Claim 4.1 implies that in every orbit, there must exist t′ ∈ N such that ρt′
1 ≤ 2. Then the definition of Sg implies that we must have
ρt′+s
1 ≤ 2SgT2 for s ∈ [1, T2],
as desired. Moreover, if there exists k ∈ [1, T2] for which ρt′+k
1 ≤ 2, then we can extend the
inequality above to t′ + s for s ∈ [k + 1, k + T2]. Likewise, if there exists k′′ ∈ [1, T2] such that
ρt′+k+k′′
1 ≤ 2, we can extend the inequality further. This proves the desired conclusion unless there
exists t′′ ≥ t′ such that ρt′′
1 ≤ 2 and ρt′′+s
1 > 2 for all s ∈ [1, T2].
However, in that case, the fact that Sg > 1 implies ρt′′+s
1 ≤ 2Sgs ≤ 2SgT2 for all s ∈ [1, T2]. Also,
Claim 4.1 implies that {ρt′′+s
1 }s>T2 must be exponentially decreasing until it passes below 1, viz.
there must exist t† > t′′ such that ρt†
1 < 1; hence ρt1 ≤ 2SgT2 extends (at least) up to t = t†.
Repeating the argument for ρt†
1 , and for the potential subsequent values of t at which ρt1 < 1,
we conclude that ρt1 can never exceed 2SgT2 when t > t′, as desired.
Proof in the case N > 2. As before, we are going to prove that for every orbit {(xt, ρt)}t∈N, there exists t′ ∈ N so that
max
i∈[1,N −1]
ρt
i ≤ N + 1, ∀t ≥ t′.
Applying the result to the orbit {(π(i,N)xt, π(i,N)pt)}t∈N of (1), where i ∈ [1, N − 1] is arbitrary and π(i,N) exchanges the coordinates i and N , implies that we also have
(π(i,N ) pt )i
(π(i,N ) pt )N
= pt
N pt
i
=1
ρt
i
≤ N + 1,
provided that t is sufficiently large, completing the proof of the statement. We use the notation
ρt
max = max
i∈[1,N −1]
ρt
i.
As in the proof for N = 2, we shall rely on the following property.
Claim 4.2. There exists γN ∈ (0, 1) such that when, in any given orbit, there exist t ∈ N and i ∈ [1, N − 1] such that
ρt+s
i > N and ρt+s
max ≤ N + 1 for s ∈ [1, TN ],
then we must have ρt+TN +1
i < γN ρt+TN
i . If, in addition, ρt+TN +1
i > 1, then we have
ρt+TN +s+1
i < γN ρt+TN +s
i,
for s = 1 and this estimate prevails for all those s ∈ Z+ for which ρt+TN +s
i > 1.
23

Proof of the Claim. The initial assumption implies
ρt+s
i
⟨ρt+s⟩c
i
≥ N (N − 1)
1 + (N − 2)(N + 1) > 1 and 1
⟨ρt+s⟩c
N
≤ N −1
N , for s ∈ [1, TN ].
The definition of TN and the monotonicity of f imply that we have
xt+TN
i < fαTN ( N (N − 1)
1 + (N − 2)(N + 1) , 1) < fαTN ( N − 1
N , 0) < xt+TN
N,
and then, using (Hg1)
ρt+TN +1
i = ρt+TN
i
1 + g xt+TN
i − ⟨xt+TN ⟩c
i
1 + g xt+TN
N − ⟨xt+TN ⟩c
N
< γN ρt+TN
i,
as desired, where
γN = max
x∈[0, N−2
N−1 ]
1 + g fαTN ( N(N−1)
1+(N−2)(N+1) , 1) − 1
N −1 fαTN ( N −1
N , 0) − x
1 + g fαTN ( N−1
N , 0) − 1
N −1 fαTN ( N (N −1)
1+(N−2)(N+1) , 1) − x
,
and γN < 1 because of strict monotonicity of g and of the compactness of the interval in which the maximum is taken. The rest of the proof is the same as in the proof of Claim 4.1. □ In order to prove the statement in the case N > 2, we first observe that if ρtmax ≤ N for some t ∈ N, then the definition of Sg, the fact that Sg > 1 and the condition in the statement imply that
we must have
ρt+s
max ≤ N Ss
g ≤ N SgTN ≤ N + 1 for s ∈ [1, TN ],
as desired. Moreover, if i ∈ [1, N − 1] is such that there exists ki ∈ [1, TN ] for which ρt+ki
i ≤ N,
then we are sure that ρt+TN +1
i ≤ N + 1. Otherwise, if ρt+s
i > N for s ∈ [1, TN ], then Claim 4.2
implies that ρt+TN +1
i ≤ N + 1 and the sequence {ρt+s
i }s≥TN must decay exponentially up until ρt+s
i
passes below 1. As before, we can propagate these estimates to obtain the desired conclusion. It remains to prove that in every orbit, there exists t ∈ N such that ρtmax ≤ N . By contradiction,
assume that ρtmax > N for all t ∈ N. Then, we certainly have 1
⟨ρt⟩c
N
≤ N−1
N for all t ∈ N and hence
{xt
N }t∈N converges exponentially fast to 1. Given i ∈ [1, N − 1], consider the subset of times defined by
Ni = t ∈ N : ρt
i = ρt
max > N .
Let i ∈ [1, N − 1] be such that #Ni = +∞ and let (x∞, ρ∞) be an accumulation point of the subsequence {(xt, ρt)}t∈Ni. We certainly have x∞
N = 1 and ρ∞
i = ρm∞ax > N . Thus
ρ∞
i
⟨ρ∞⟩c
i
> N (N − 1)
1 + (N − 2)N = N
N − 1,
and therefore
x∞
i ≤ fα( N
N − 1 , 1) < 1,
meaning that for every ε > 0, there exists tε ∈ Ni such that we have
xt
i < fα( N
N − 1 , 1) + ε, ∀t ∈ Ni, t > tε. (7)
24

Now consider the orbit {(κt, ρt)}t∈N with initial condition (κ0, ρ0) = (x∞, ρ∞). Each coordinate of the map Fskew is a continuous function of each of its variables, and the derivative with respect to its proper coordinate is uniformly bounded (because so are the derivative of x 7→ fα(ρ, x)
for every ρ and the derivative of ρ 7→ ρ 1+g(x)
1+g(y) for every (x, y)). Hence, each coordinate of Fskew is
a continuous function of (x, ρ). Therefore, for every t ∈ N, (κt, ρt) is an accumulation point of the original orbit {(xt, ρt)}t∈N. Therefore, we must have κt
N = 1 for all t ∈ N.
Together with this equality, the iterations (4) imply that {ρt
i}t∈N must be a decreasing sequence. Therefore, this sequence must converge and, by Proposition 3.1, its limit must be positive. It follows
that the ratio sequence { ρt+1
i
ρt
i
}t∈N must converge to 1, which in turn, by (Hg1), implies the following
limit
lim
t→+∞ κt
i = 1.
As a consequence, for every ε > 0, there exist t′ε ∈ Ni and kε ∈ N such that
xt+k
i > 1 − ε, ∀t ∈ Ni, t > t′
ε, and k > kε.
Clearly, when ε is small enough and t ∈ Ni, t > t′ε and k > kε are such that t + k ∈ Ni and t + k > tε,
this inequality contradicts the inequality (7). Hence, it is impossible that ρtmax > N for all t ∈ N.
4.3 Proof of Proposition 3.3 and Remark 3.4
Proof of Proposition 3.3. Repeating mutatis mutandis the arguments in the proof of statements
(i) and (ii) of Proposition 3.6 in [8] yields that the product
N
Y
i=1
pt
i is non-increasing with t and that
if it does not converge to 0 as t → +∞, then we must have
lim
t→+∞ max
i,j∈[1,N ]
|xt
i − xt
j| = 0. (8)
Together with Proposition 3.1, monotonicity implies that no sequence {pt
i} can diverge. Moreover,
the same statement ensures that the condition lim
t→+∞ max
i∈[1,N ]
pt
i > 0 suffices to make sure that
N
Y
i=1
pt
i
converges to a positive number. It follows that
lim
t→+∞
pt
i > 0, ∀i ∈ [1, N ].
Therefore, for every infinite subsequence {tk}k∈N such that
lim
k→+∞ ptk = p∞,
we must have p∞ ∈ (R∗+)N . Moreover, the coordinates p∞
i must be independent i, viz. we must have
lim
k→+∞
ptk
i
⟨ptk ⟩c
i
= 1, ∀i ∈ [1, N ],
otherwise (8) could not hold, because one of these limits would have to be less than 1 and another one would have to be larger than 1. This proves that we must also have
lim
t→+∞ max
i,j∈[1,N ]
|pt
i − pt
j| = 0,
completing the proof of the Proposition.
25

Proof of Remark 3.4. It is easy to check that the condition b < a
2 implies that g increases on (−1, 1) and more generally that it satisfies (Hg1). That b > 0 implies that it cannot satisfy (Hg2) for N = 2. Moreover, the expression of g implies that we have
(1 + g(x1 − x2)) (1 + g(x2 − x1)) = 1 + 2b − a2 + b2(x1 − x2)2 (x1 − x2)2.
Hence, from the condition a2
2 < b, it follows that the product pt1pt2 is non-decreasing. As in the previous proof, it is therefore impossible that a sequence {pi} converges to 0 and the assumption
lim
t→+∞
min
i∈[1,N ]
pt
i < +∞ implies that this product converges to a finite limit. Using the definition of
the dynamics, we have in this case
lim
t→+∞
pt+1
1 pt+1
2
pt1pt2
= lim
t→+∞ 1 + g(xt
1 − xt
2) 1 + g(xt
2 − xt
1) = 1,
and the expression above shows that we must have lim
t→+∞xt1 − xt2 = 0, and the rest of the proof is
as before for Proposition 3.3.
4.4 Proof of Lemma 3.5 and Proposition 3.6
The convex combination in the first row of the iterations (1)/(4) imply that it suffices to prove the results for α = 0.
Proof of Lemma 3.5. Using the symmetry assumption (Hf3), we obtain
2⟨xt+1⟩ − 1 = f (ρt+1
1 , xt
1) + f( 1
ρt+1
1
, xt
2) − 1 = f (ρt+1
1 , xt
1) − f (ρt+1
1 , 1 − xt
2)
= (2⟨xt⟩ − 1) f (ρt+1
1 , xt1) − f (ρt+1
1 , 1 − xt2)
xt1 − (1 − xt2) ,
from where the Lemma immediately follows.
Throughout the proof of Proposition 3.6, the dependence on t is dropped in the notations of the variables xt and ρt, for the sake of clarity. The symmetry of permutations of the coordinates
and the invariance of
N
X
i=1
xi under this symmetry imply that we may assume w.l.o.g. that ρ ∈ RN
where RN ⊂ (0, 1]N is defined by
RN = ρ ∈ (0, 1]N : ρ1 ≤ ρ2 ≤ · · · ≤ ρN−1 ≤ ρN = 1 .
and at least one inequality ρi ≤ ρi+1 is strict (otherwise there is nothing to prove because then
f ρi
⟨ρ⟩ic
= Id for all i). This implies that
ρi ⟨ρ⟩c
i
≤ ρi+1
⟨ρ⟩c
i+1
, ∀i ∈ [1, N − 1] and ρ1
⟨ρ⟩c1
<1< 1
⟨ρ⟩c
N
< N − 1.
Let then N − ∈ [1, N − 1] be such that
ρi ⟨ρ⟩c
i
≤ 1, ∀i ∈ [1, N −] and 1 < ρi
⟨ρ⟩c
i
, ∀i ∈ [N − + 1, N ].
26

Proof of statement (i) of Proposition 3.6. This statement is a rephrasing of the following one, which specifies those conditions on the deviations fdev that are required in the proof.
Lemma 4.3. Let N > 2 be arbitrary, assume that g satisfies (Hg1) and f is given by (3) with fdev(ρ, ·) ≥ 0 for all ρ ∈ R∗+ and it satisfies (Hf1-2).
(a) Assume that11
sup
x∈(0,1)
fdev(ρ, x)
x < (1 − ρ)2(N − 2)
N − 1 − (N − 2)ρ , ∀ρ < 1. (Hfdev1)
Then, for every orbit, we have N ⟨xt+1⟩ ≥ 1
N−1 when N ⟨xt⟩ ≥ 1
N−1 .
(b) Assume that either N ∈ [3, 4] and fdev(ρ, ·) = 0 for all ρ ∈ R∗+, or N ≥ 5 and we have12
sup
x∈(0,1)
fdev(ρ, x)
x < (N − 2)(ρ − 1)
ρ(1 + (N − 2)ρ) , ∀ρ ∈ (1, N − 1). (Hfdev2)
and
sup
x∈(0,1)
fdev(ρ, x)
x < (ρ − 1) 1
ρ− 1
N − 2 , ∀ρ ∈ (1, N − 2). (Hfdev3)
Then, for every orbit, we have N ⟨xt+1⟩ ≤ N − 1
N−1 when N ⟨xt⟩ ≤ N − 1
N−1 .
Proof. (a) Since we may assume that α = 0, we aim at the following implication
N
X
i=1
xi ≥ 1
N − 1 =⇒
N
X
i=1
f ρi
⟨ρ⟩c
i
, xi ≥ 1
N − 1.
The definitions of N − and of fdev imply that we have
N
X
i=1
f ρi
⟨ρ⟩c
i
, xi =
N−
X
i=1
1− ρi
⟨ρ⟩c
i
(1−xi)−fdev
ρi ⟨ρ⟩c
i
, 1 − xi +
N
X
i=N −+1
⟨ρ⟩c
i ρi
xi +fdev
ρi ⟨ρ⟩c
i
, xi . (9)
Using that f (ρ, x) ≥ x when ρ ≤ 1 and fdev(ρ, x) ≥ 0, we obtain the following inequality
N
X
i=1
f ρi
⟨ρ⟩c
i
, xi ≥

1 − ρ1
⟨ρ⟩c1
− sup
x∈(0,1)
fdev ρ1
⟨ρ⟩c
1
,x
x

 (1 − x1) +
N−
X
i=1
xi +
N
X
i=N −+1
⟨ρ⟩c
i ρi
xi,
from where the conclusion immediately follows when 1 − ρ1
⟨ρ⟩c
1
− sup
x∈(0,1)
fdev
ρ1
⟨ρ⟩c1
,x
x ≥1
N−1 . Assume
then that 1 − ρ1
⟨ρ⟩c
1
− sup
x∈(0,1)
fdev
ρ1
⟨ρ⟩c1
,x
x <1
N−1 . We claim that for every r < 1, we have
1
N −1

 min
ρ∈RN : ρ1
⟨ρ⟩c1
=r
⟨ρ⟩c
N −1

 + 1 − r = (1 − r)2(N − 2)
N − 1 − (N − 2)r , (10)
11Notice that
(1 − ρ)2(N − 2)
N − 1 − ρ(N − 2) ∈ (0, 1), ∀ρ < 1.
12Notice that (N − 2)(ρ − 1)
ρ(1 + (N − 2)ρ) ∈ (0, 1), ∀ρ ∈ (1, N − 1).
27

which is equivalent to
min
ρ∈RN : ρ1
⟨ρ⟩c1
=r
⟨ρ⟩c
N= r
N − 1 − (N − 2)r .
In order to prove this equality, observe first that when ρ1
⟨ρ⟩c
1
= r, we have
⟨ρ⟩c
N = ⟨ρ⟩c
1 − 1 − ρ1
N − 1 = ρ1
r − 1 − ρ1
N − 1 . (11)
Besides, when ρ ∈ RN , we have
⟨ρ⟩c
1 ≥ 1 + (N − 2)ρ1
N −1 .
The constraint ρ1
⟨ρ⟩c
1
= r then imposes that
r ≤ (N − 1)ρ1
1 + (N − 2)ρ1
⇐⇒ ρ1 ≥ r
N − 1 − (N − 2)r ,
from where the relation (11) immediately yields the desired minimum of ⟨ρ⟩c
N.
The assumption (Hfdev1), together with (10), implies that for all ρ ∈ RN , we have
1 − ρ1
⟨ρ⟩c1
− sup
x∈(0,1)
fdev ρ1
⟨ρ⟩c
1
,x
x >1
N − 1 (1 − ⟨ρ⟩c
N) ≥ 1
N − 1 1 − ⟨ρ⟩c
i ρi
, ∀i ∈ [N − + 1, N ],
which, in addition to 1 − ρ1
⟨ρ⟩c
1
− sup
x∈(0,1)
fdev
ρ1
⟨ρ⟩c1
,x
x ≥ 0, yields
N
X
i=1
f ρi
⟨ρ⟩c
i
, xi ≥

1 − ρ1
⟨ρ⟩c1
− sup
x∈(0,1)
fdev ρ1
⟨ρ⟩c
1
,x
x



1 − x1 − (N − 1)
N
X
i=N −+1
xi

+
N
X
i=1
xi.
(12) Clearly, the RHS is an increasing function of xi for each i ∈ [1, N −]. The assumption 1 − ρ1
⟨ρ⟩c
1
−
sup
x∈(0,1)
fdev
ρ1
⟨ρ⟩c1
,x
x <1
N−1 and 1 − ρ1
⟨ρ⟩c
1
− sup
x∈(0,1)
fdev
ρ1
⟨ρ⟩c1
,x
x ≥ 0 imply that it is also an increasing
function of xi for each i ∈ [N − + 1, N ]. Therefore, its minimum in the domain
N
X
i=1
xi ≥ 1
N−1 is
attained for
N
X
i=1
xi = 1
N−1 . When this equality holds, we certainly have
1 − x1 − (N − 1)
N
X
i=N −+1
xi ≥ 1 − x1 − (N − 1)
N
X
i=2
xi = (N − 2)x1 ≥ 0,
which implies that whenever the inequality
N
X
i=1
xi ≥ 1
N−1 holds, we have
N
X
i=1
f ρi
⟨ρ⟩c
i
, xi ≥
N
X
i=1
xi ≥ 1
N − 1,
28

as desired. Proof of (b) in the affine case. We assume here that fdev(ρ, ·) = 0 for all ρ, ie. all maps f (ρ, ·) are affine and given by (3) with fdev(ρ, ·) = 0 (NB: In practice, this proof only serves for N ∈ [3, 4] because for N ≥ 5, the proof below holds when fdev(ρ, ·) ̸= 0). We aim at proving that
N
X
i=1
xi ≤ N − 1
N − 1 =⇒
N
X
i=1
f ρi
⟨ρ⟩c
i
, xi ≤ N − 1
N − 1 . (13)
We have
N
X
i=1
f ρi
⟨ρ⟩c
i
, xi =
N−
X
i=1
1 − ρi
⟨ρ⟩c
i
(1 − xi) +
N
X
i=N −+1
⟨ρ⟩c
i ρi
xi
≤ N− −
N−
X
i=1
ρi ⟨ρ⟩c
i
(1 − xi) +
N −1
X
i=N −+1
xi + ⟨ρ⟩c
N xN
If ⟨ρ⟩c
N ≤ N−2
N−1 , then the conclusion immediately follows from the fact ρi
⟨ρ⟩c
i
(1−xi) ≥ 0 for i ∈ [1, N −]
and xi ≤ 1 for i ∈ [N − + 1, N ]. Assume then that ⟨ρ⟩c
N > N−2
N−1 and use the inequality13
− ρi
⟨ρ⟩c
i
≤ N − 2 − (N − 1)⟨ρ⟩c
N , ∀i ∈ [1, N −],
in order to obtain
N
X
i=1
f ρi
⟨ρ⟩c
i
, xi ≤ N − + (N − 2)
N−
X
i=1
(1 − xi) +
N −1
X
i=N −+1
xi + ⟨ρ⟩c
N

xN − (N − 1)
N−
X
i=1
(1 − xi)

.
In the case where xN − (N − 1)
N−
X
i=1
(1 − xi) ≥ 0, we use that ⟨ρ⟩c
N ≤ 1 in order to obtain
N
X
i=1
f ρi
⟨ρ⟩c
i
, xi ≤
N
X
i=1
xi,
from where the conclusion follows. Otherwise, the inequality ⟨ρ⟩c
N > N−2
N−1 implies that we must have N
X
i=1
f ρi
⟨ρ⟩c
i
, xi ≤ N − +
N −1
X
i=N −+1
xi + N − 2
N − 1 xN ≤ N − 1
N − 1,
as desired. Proof of (b) for N ≥ 5. The implication (13) is obvious when there exists i ∈ [N − + 1, N ] such that
f ρi
⟨ρ⟩c
i
, xi ≤ 1 − 1
N − 1,
because each of the other N − 1 terms in the sum does not exceed 1. Assume then that
f ρi
⟨ρ⟩c
i
, xi > 1 − 1
N − 1 , ∀i ∈ [N − + 1, N ],
13Indeed, the function ρi 7→ ⟨ρ⟩c
N− 1
N −1
ρi
⟨ρ⟩c
i
is decreasing on (0, 1]; hence its supremum over (0, 1] is at most N−2
N−1 .
The displayed inequality follows suit.
29

that is to say, given that f (ρ, ·) is increasing and f (ρ, x) ≤ x when ρ > 1,
min f ρi
⟨ρ⟩c
i
, 1 , xi > 1 − 1
N − 1 , ∀i ∈ [N − + 1, N ].
Given that (Hfdev2) imposes fdev (ρ, 1) < (N−2)(ρ−1)
ρ(1+(N −2)ρ) < 1
ρ , the assumption above requires
ρi ⟨ρ⟩c
i
< 2(N − 1)
N − 2 , ∀i ∈ [N − + 1, N ],
(and we actually have 2(N−1)
N−2 ≤ N − 1 for all N ≥ 4). Moreover, we claim that for every r < 1, we have
min
ρ∈[0,1]N : ρN =1,⟨ρ⟩c
N =r
N −1
X
i=1
ρi ⟨ρ⟩c
i
= (N − 1)2r
1 + (N − 2)r = (N − 1) r + (N − 2)r(1 − r)
1 + (N − 2)r , (14)
where the first equality is an immediate consequence of the following technical statement.
Claim 4.4. Let N ∈ Z+, S ∈ (0, N ) and L ∈ R+ be arbitrary. We have
min
x∈[0,1]N : PN
i=1 xi=S
N
X
i=1
xi L + S − xi
= NS
N L + (N − 1)S .
Proof of the Claim. By induction. For N = 1, the LHS reduces to S
L , which is equal to the RHS in
this case. Let now N ∈ Z+ be arbitrary. By isolating the last term of the sum, one can separate the minimisation of the sum over of the first terms to obtain
min
x∈[0,1]N +1 :PN +1
i=1 xi=S
N +1
X
i=1
xi L + S − xi
= min
xN +1 ∈[0,1∧S ]
(
min
x∈[0,1]N :PN
i=1 xi=S−xN+1
xN +1
L + S − xN+1
+
N
X
i=1
xi L + S − xi
!)
= min
xN +1 ∈[0,1∧S ]
(
xN +1
L + S − xN+1
+ min
x∈[0,1]N :PN
i=1 xi=S−xN+1
N
X
i=1
xi L + S − xi
)
,
and then use the induction assumption to obtain
min
x∈[0,1]N+1 : PN+1
i=1 xi=S
N +1
X
i=1
xi L + S − xi
= min
xN +1 ∈[0,1∧S ]
xN +1
L + S − xN+1
+ N (S − xN+1)
N (L + xN+1) + (N − 1)(S − xN+1) .
Now, the study of the variations of the function x 7→ x
L+S−x + N (S−x)
N(L+x)+(N−1)(S−x) (which can be
achieved by investing the variations of the two terms separately) easily shows that it has a minimum
on [0, 1 ∧ S] at x = S
N+1 , whose value is equal to (N+1)S
(N+1)L+NS as desired. □
The assumption (Hfdev2), together with (14), implies that for all ρ ∈ RN and xN ∈ (0, 1), we have since ⟨ρ⟩c
N <1
(N − 1)

⟨ρ⟩c
N+
fdev 1
⟨ρ⟩c
N
, xN
xN

<
N −1
X
i=1
ρi ⟨ρ⟩c
i
. (15)
By inserting this inequality into (9), we get using that fdev(ρ, ·) ≥ 0
N
X
i=1
f ρi
⟨ρ⟩c
i
, xi ≤ N −+
N−
X
i=1
ρi ⟨ρ⟩c
i
xN
N − 1 − (1 − xi) +
N −1
X
i=N −+1
⟨ρ⟩c
i ρi
xi+fdev
ρi ⟨ρ⟩c
i
, xi + ρi
⟨ρ⟩c
i
xN
N − 1.
30

Now we use the fact that ρi
⟨ρ⟩c
i
∈ (1, 2(N−1)
N−2 ) for i ∈ [N − + 1, N − 1], the inequality 2(N−1)
N−2 ≤ N − 2
for all N ≥ 5 and the assumption (Hfdev3) in order to show that , for each i ∈ [N − + 1, N − 1], we
have


⟨ρ⟩c
i ρi
+
fdev ρi
⟨ρ⟩c
i
, xi
xi

 xi + ρi
⟨ρ⟩c
i
xN
N − 1 < xi + xN
N − 1,
if xN < N−1
N−2 xi. This inequality holds because we assume that xi > 1 − 1
N−1 . Therefore, we obtain
N
X
i=1
f ρi
⟨ρ⟩c
i
, xi ≤ N − +
N−
X
i=1
ρi ⟨ρ⟩c
i
xN
N − 1 − (1 − xi) +
N −1
X
i=N −+1
xi + (N − N − − 1)xN
N −1 .
Letting I =
n
i ∈ [1, N −] : xN
N−1 − (1 − xi) ≥ 0
o
, we get
N
X
i=1
f ρi
⟨ρ⟩c
i
, xi ≤ N − − #I +
X
i∈I
xi +
N −1
X
i=N −+1
xi + (N − N − + #I − 1)xN
N −1 .
Basic estimates then yield
N
X
i=1
f ρi
⟨ρ⟩c
i
, xi ≤
PN
i=1 xi if #I = N −
N − 1 + xN N−2
N−1 if #I < N −
from where the desired conclusion immediately follows.
Proof of statement (ii) of Proposition 3.6. As before, this statement is a rephrasing of the following one, which specifies the conditions on the deviations fdev.
Lemma 4.5. Let N > 2 be arbitrary, assume that g satisfies (Hg1) and f is given by (3) with fdev(ρ, ·) ≥ 0 for all ρ ∈ R∗+ and it satisfies (Hf1-2). Assume also that (Hfdev1) holds. Then, for
every orbit, we have ⟨xt+1⟩ > ⟨xt⟩ when N ⟨xt⟩ < 1
N−1 and ρt ̸= 1.
Proof. The proof is an immediate consequence of the proof of statement (a) of Lemma 4.3 above. Indeed, the inequality (12) is equivalent to the following one
N
X
i=1
f ρi
⟨ρ⟩c
i
, xi − xi >

1 − ρ1
⟨ρ⟩c1
− sup
x∈(0,1)
fdev ρ1
⟨ρ⟩c
1
,x
x



1 − x1 − (N − 1)
N
X
i=N −+1
xi

,
and the RHS must be positive when N ⟨xt⟩ < 1
N−1 and ρt ̸= 1.
Proof of statement (iii) of Proposition 3.6. Here, we prove the following statement which specifies additional conditions on fdev.
Lemma 4.6. Let N > 2 be arbitrary, assume that g satisfies (Hg1) and f is given by (3) with fdev(ρ, ·) ≥ 0 for all ρ ∈ R∗+ and it satisfies (Hf1-2). Assume also that (Hfdev2) and the following
assumption14 also hold
sup
x∈(0,1)
fdev(ρ, x)
x < (N − ρ)ρ − (N − 1)
(N − 1)ρ , ∀ρ ∈ (1, N − 1). (Hfdev4)
14We have (N − ρ)ρ − (N − 1)
(N − 1)ρ ∈ (0, 1), ∀ρ ∈ (1, N − 1).
31

Then, for every orbit, we have ⟨xt+1⟩ < ⟨xt⟩ when N ⟨xt⟩ > N − 1
N−1 and ρt ̸= 1.
Proof. We aim at proving the inequality
N
X
i=1
f ρi
⟨ρ⟩c
i
, xi − xi < 0 when
N
X
i=1
xi > N − 1
N−1 and ρ ̸= 1.
The setting is the same as in the proof of statement (b), nonlinear case, of Lemma 4.3. Using the expression (9) and the inequality (15), we get
N
X
i=1
f ρi
⟨ρ⟩c
i
, xi − xi <
N−
X
i=1
1 − ρi
⟨ρ⟩c
i
(1 − xi) +
N −1
X
i=N −+1
⟨ρ⟩c
i ρi
− 1 xi + fdev
ρi ⟨ρ⟩c
i
, xi
+ xN
N −1
N −1
X
i=1
ρi ⟨ρ⟩c
i
−1
From (Hfdev4), we have for each i ∈ [N − + 1, N − 1] since ρi
⟨ρ⟩c
i
∈ (1, N − 1),
fdev ρi
⟨ρ⟩c
i
, xi
xi
<
(N − ρi
⟨ρ⟩c
i
) ρi
⟨ρ⟩c
i
− (N − 1)
(N − 1) ρi
⟨ρ⟩c
i
= 1 − ⟨ρ⟩c
i ρi
+1
N − 1 1 − ρi
⟨ρ⟩c
i
,
which yields
N −1
X
i=N −+1
⟨ρ⟩c
i ρi
− 1 xi + fdev
ρi ⟨ρ⟩c
i
, xi < 1
N −1
N −1
X
i=N −+1
1 − ρi
⟨ρ⟩c
i
xi.
Let now x ∈ [0, 1]N be such that
N
X
i=1
xi > N − 1
N−1 . Clearly, there exists ε > 0 such that
max
i∈[1,N −]
1 − xi < 1 − ε
N − 1 and 1 − ε < min
i∈[N −+1,N ]
xi.
From the definition of N −, it follows that
N−
X
i=1
1 − ρi
⟨ρ⟩c
i
(1 − xi) < 1 − ε
N −1
N−
X
i=1
1 − ρi
⟨ρ⟩c
i
and
1
N −1
N −1
X
i=N −+1
1 − ρi
⟨ρ⟩c
i
xi < 1 − ε
N −1
N −1
X
i=N −+1
1 − ρi
⟨ρ⟩c
i
.
Besides, we are going to prove that
N −1
X
i=1
1 − ρi
⟨ρ⟩c
i
≥ 0. Altogether, this implies that
N
X
i=1
f ρi
⟨ρ⟩c
i
, xi −xi < 1 − ε
N −1
N−
X
i=1
1 − ρi
⟨ρ⟩c
i
+ 1−ε
N −1
N −1
X
i=N −+1
1 − ρi
⟨ρ⟩c
i
+ 1−ε
N −1
N −1
X
i=1
ρi ⟨ρ⟩c
i
− 1 = 0,
as desired.
32

In order to prove that
N −1
X
i=1
1 − ρi
⟨ρ⟩c
i
≥ 0, observe first that for every i, k ∈ [1, N ], the derivative
of
xk 7→
N
X
i=1
xi
1 − xi + PN
j=1 xj
,
is an increasing function on [0, 1]. Hence we certainly have max
xk ∈[0,1]
N
X
i=1
xi 1−xi+PN
j=1 xj
= max
xk ∈{0,1}
N
X
i=1
xi 1−xi+PN
j=1 xj
,
that is to say
max
x∈[0,1]N
N
X
i=1
xi
1 − xi + PN
j=1 xj
= max
x∈{0,1}N
N
X
i=1
xi
1 − xi + PN
j=1 xj
.
Now, in order to compute the RHS, thanks to the invariance under permutation, we may assume that there exists N0 ∈ [0, N − 1] such that
xi = 0, ∀i ∈ [1, N0] and xi = 1, ∀i ∈ [N0 + 1, N ],
that is to say
max
x∈{0,1}N
N
X
i=1
xi
1 − xi + PN
j=1 xj
= max
N0∈[0,N −1]
N
X
i=N0+1
1
N − N0
= 1,
from where the desired inequality immediately follows.
Expression of CN (ρ). For ρ < 1, the expression is a combination of the original condition on fdev and the assumption (Hfdev1), namely we have
CN (ρ) = min 1 − ρ, (1 − ρ)2(N − 2)
N − 1 − (N − 2)ρ , ∀ρ < 1.
For ρ ∈ (1, N − 1), we get a combination of the original condition on fdev and the conditions (Hfdev2 − 4)
CN (ρ) =



min{1 − 1
ρ , (N −2)(ρ−1)
ρ(1+(N−2)ρ) , (ρ − 1) 1
ρ− 1
N −2 , (N −ρ)ρ−(N −1)
(N−1)ρ } if ρ ∈ (1, N − 2)
min{1 − 1
ρ , (N −2)(ρ−1)
ρ(1+(N −2)ρ) , (N −ρ)ρ−(N −1)
(N−1)ρ } if ρ ∈ [N − 2, N − 1)
The proof of Proposition 3.6 is complete.
4.5 Proof of Corollary 3.7
We use contradiction based on the following claim.
Claim 4.7. If there exists i ∈ [1, N ] such that
lim
t→+∞
xt
i = 0,
then we must have
lim
t→+∞
max
i∈[1,N ]
xt
i = 0.
33

If Claim 4.7 is true, then there must be a diverging subsequence {tk}k∈N such that lim
k→+∞⟨xtk ⟩ =
0. Hence, there must be a diverging sub-subsequence, also denoted {tk}k∈N, such that
⟨xtk+1⟩ < ⟨xtk ⟩ < 1
N (N − 1) and ρtk ̸= 1, ∀k ∈ N.
However, this is clearly with incompatible with Lemma 3.5 when N = 2 (resp. Proposition 3.6 when N > 2). Hence, we must have
lim
t→+∞
xt
i > 0, ∀i ∈ [1, N ],
from where the lower bound of the Corollary immediately follows. The similar proof of the upper bound is left to the reader. In order to prove Claim 4.7, we also use contradiction based on the following additional claim.
Claim 4.8. Assume that i ∈ [1, N ] is such that
lim
t→+∞
xt
i = 0.
Then for every n ∈ N, we have
lim
t→+∞
xt−l
i = 0, ∀l ∈ [0, n].
Proof. Let {tk}k∈N be a diverging subsequence such that
lim
k→+∞ xtk
i = 0.
There must be infinitely many instances of k such that ρtk
i
⟨ρtk ⟩c
i
≥ 1. Up to passing to a sub
subsequence, we may assume that ρtk
i
⟨ρtk ⟩c
i
≥ 1 for all k ∈ N.
Now, recall that the map Fskew defined by (4) is invertible; hence the sequence {xtk−1
i }k∈N is
well defined. We claim that lim
k→+∞xtk −1
i = 0. Indeed, by compactness, consider any convergent
subsequence of {xtk−1
i }k∈N, which we assume to coincide with the sequence itself, for the sake of notation. Together with separate continuity, the fact that sup
(ρ,x)∈R∗+×[0,1]
|f ′x(ρ, x)| ≤ 1 implies that the
map f is continuous in the variable (ρ, x). Therefore, the (sub-)sequence {fα
ρtk
i
⟨ρtk ⟩c
i
, xtk−1
i }k∈N
converges. However this sequence is nothing but {xtk
i }k∈N whose limit is 0; hence, the (sub
)sequence {xtk−1
i }k∈N must converge to the pre-image of 0 under fα
ρtk
i
⟨ρtk ⟩c
i
, · , which is equal to
0, as claimed. Repeating the argument for the consecutive pre-images xtk−l
i , it follows that for every n ∈ N, there exists a diverging sub-subsequence {tk}k∈N such that
lim
k→+∞ xtk−l
i = 0, ∀l ∈ [1, n].
34

Proof of Claim 4.7. Let {tk}k∈N be a diverging subsequence such that
lim
k→+∞ xtk
N = 0,
and let n ∈ N be arbitrary. For all k sufficiently large (depending on n), there exists ε > 0 (not depending on n) such that have
max
i∈[1,N −1]
xtk −l
i − xtk−l
N > ε, ∀l ∈ [0, n − 1].
Naturally, the index i for which this inequality holds may vary with l. However, for n = m(N − 1), the fraction of those l for which the inequality fails cannot be smaller than m for every i. This means that there exists i ∈ [1, N − 1] such that
#S tk
i ≥ m where Stk
i=
n
l ∈ [0, m(N − 1) − 1] : xtk−l
i − xtk−l
N >ε
o
provided that k is sufficiently large. Let lk = max{l ∈ [0, m(N − 1) − 1] : xtk−l
i − xtk−l
N > ε}. The fact that lim
k→+∞ xtk−lk
N =0
implies that lim
k→+∞
xtk −lk
i > 0.
Consequently, Claim 4.8 implies that
lim
k→+∞
xtk −l
i > 0, ∀l ∈ [0, lk],
and then
xtk −l
i − xtk−l
N > 0, ∀l ∈ [0, lk],
provided that k is sufficiently large. Accordingly, we have
ρtk −l+1
i ≥ ρtk−l
i , ∀l ∈ [0, lk]. (16)
Now, notice that
xi − ⟨x⟩c
i = xN − ⟨x⟩c
N+ N
N − 1 (xi − xN ),
and by (Hg1) and compactness of the interval under consideration, let γ > 1 be defined by
γ = inf
x∈(−1,1− N
N−1 ε]
1 + g(x + N
N−1 ε)
1 + g(x)
The definition of Stk
i implies that for all k sufficiently large, we have
1 + g(xtk−l
i − ⟨xtk−l⟩c
i)
1 + g(xtk−l
N − ⟨xtk−l⟩c
N ) ≥ γ, ∀l ∈ Stk
i,
and then
ρtk −l+1
i ≥ ρtk−l
i γ, ∀l ∈ Stk
i.
Together with the inequalities (16) and #Stk
i ≥ m, we conclude that we must have
ρtk +1
i ≥ ρtk−lk
i γm
However, for m large enough such that γm
M > M , where M is the bound on max
i∈[1,N −1]
max
n
ρt
i, 1
ρt
i
o
in Proposition 3.1, this inequality is clearly incompatible with that Proposition; hence the contradiction. □
35

4.6 Proof of Proposition 3.8
The statement will be a direct consequence of the following properties, which are proved below:
(a) For every (ε, m) ∈ (0, 1)2, there exists ε′ ∈ (0, 1) such that if |x1 − x2| ≤ ε and max
i∈[1,2]
n
ρi, 1
ρi
o
≤
1
m , then we have
|fα(ρ1, x1) − fα(ρ2, x2)| ≤ ε′.
(b) For every m ∈ (0, 1), there exists ε ∈ (0, 1) such that if x1 − x2 > ε (resp. x1 − x2 < −ε) and
max
i∈[1,2]
n
ρi, 1
ρi
o
≤1
m , then we have
fα(ρ1, x1) − fα(ρ2, x2) > −ε (resp. fα(ρ1, x1) − fα(ρ2, x2) < ε) .
(c) Let {(xt, ρt)}t∈N be an orbit of (4) such that max
i∈[1,N −1]
n
ρt
i, 1
ρt
i
o
≤1
m for all t ∈ N, for some
m ∈ (0, 1). Then for every ε > 0, there exists Tε ∈ Z+ such that for every t ∈ N and i ∈ [1, N − 1] such that |xt
i − xt
N | > ε, there exists s ∈ [1, Tε] such that
xt+s
i − xt+s
N ≤ ε.
In order to prove the Proposition, take an arbitrary orbit {(xt, ρt)}t∈N, and let t′ be the instant given by Proposition 3.2 (either for N = 2 or N > 2). Consider the orbit with initial condition (xt′ , ρt′ ). Let also ε0
N be the value of ε that results from (b) for m given by the inverse of the bound in Proposition 3.2, and let Tε0
N be given by (c). For k ∈ N, define εk+1
N by induction, as the ε′ that
results from property (a) with εk
N = ε and m given by the inverse of the bound in Proposition 3.2.
Clearly, Proposition 3.8 follows with εN = ε
Tε0
N
N ∈ (0, 1).
Proof of (a). We separate the cases x1 < x2 < x1 + ε and x2 < x1 < x2 + ε. Assume the first case. The second case can be treated similarly. The assumptions (Hf1-2) and the condition
max
i∈[1,2]
n
ρi, 1
ρi
o
≤1
m imply
fα(ρ1, x1) − fα(ρ2, x2) ≤ max
x∈[0,1]
fα(m, x) − fα( 1
m , x) < 1.
On the other hand, we have
fα(ρ1, x1) − fα(ρ2, x2) ≥ fα( 1
m , max{x2 − ε, 0}) − fα(m, x2) ≥ max{x2 − ε, 0} − x2 ≥ −ε,
and the desired estimate holds with ε′ = max{ε, max
x∈[0,1]
fα(m, x) − fα( 1
m , x)}.
Proof of (b). Using similar arguments as in (a), we have when x1 − x2 > ε and max
i∈[1,2]
n
ρi, 1
ρi
o
≤1
m
fα(ρ1, x1) − fα(ρ2, x2) > fα( 1
m , ε) − fα(m, 1 − ε),
and the conclusion follows from the facts that εli→m1fα( 1
m , ε) > 0 and εli→m1fα(m, 1 − ε) < 1. The proof
in the case x1 − x2 < −ε is similar.
36

Proof of (c). By contradiction, assume that |xt+s
1 − xt+s
N | > ε for all s ∈ N. Then property (b) implies that we must have
either xt+s
1 − xt+s
N > ε, ∀s ∈ N, or xt+s
1 − xt+s
N < −ε, ∀s ∈ N.
Assume the first case. The second case can be treated similarly, by symmetry. It follows from (Hg1) and (Hg3) that there exists γ > 1 such that
ρt+s+1
i > γρt+s
i , ∀s ∈ N,
hence lim
s→+∞ρt+s
i = +∞, since ρt
i ≥ m. However, this divergence is incompatible with the fact that
ρt
i≤ 1
m for all t ∈ N.
4.7 Proof of Proposition 3.9
Proof of infinite changes of itx. By contradiction, we are going to show that it is impossible
that itx remain the same for all t ∈ N. The conclusion then follows by applying repeatedly the argument to the orbit starting from the first iterate at which this quantity changes. Up to a permutation of the coordinates, assume then that
xt
N = min
i∈[1,N ]
xt
i, ∀t ∈ N.
The iteration rule for the ρt
i, the fact that xt
i > xt
N and strict monotonicity of g then imply
ρt+1
i = ρt
i
1 + g xt
i − ⟨xt⟩c
i
1 + g xt
N − ⟨xt⟩c
N
> ρt
i, ∀i ∈ [1, N − 1].
From Proposition 3.1, it results that the following limits exist
lim
t→+∞ ρt
i = ρ∞
i , ∀i ∈ [1, N − 1],
(and by definition of the ρi, we obviously have ρ∞
N = 1). From the expression above, it results that the following limits exist
lim
t→+∞
1 + g xt
i − ⟨xt⟩c
i
1 + g xt
N − ⟨xt⟩c
N
= 1, ∀i ∈ [1, N − 1].
By compactness, let {tk}k∈N be any infinite sequence such that the following limit exists
lim
k→+∞ xtk = x∞.
Together with the assumption (Hg1), the limit above of the ratio implies that x∞
i = x∞
N for all i ∈ [1, N − 1]. Since this holds for every subsequence, we conclude that
lim
t→+∞ xt
i − xt
N = 0, ∀i ∈ [1, N − 1].
In particular, we have for every subsequence as above,
lim
k→+∞ xtk+1
i − xtk+1
N = 0, ∀i ∈ [1, N − 1],
37

which, using also the iteration rule for the xt
i, results in the following equality
f ρ∞
i
⟨ρ∞⟩c
i
, x∞
i =f 1
⟨ρ∞⟩c
N
, x∞
N , ∀i ∈ [1, N − 1],
and then since x∞
i = x∞
N
f ρ∞
i
⟨ρ∞⟩c
i
, x∞
N =f 1
⟨ρ∞⟩c
N
, x∞
N , ∀i ∈ [1, N − 1].
We claim that this imposes
ρ∞
i = 1 (= ρ∞
N ), ∀i ∈ [1, N − 1]. (17)
In order to see this, let us first show that if the coordinates {ρ∞
i }N
i=1 were not all equal, then there
would exist i′, i′′ ∈ [1, N ] such that
ρ∞
i′
⟨ρ∞⟩c
i′
< 1 < ρ∞
i′′
⟨ρ∞⟩c
i′′
.
Indeed, by contradiction, suppose that
(N − 1)ρ∞
i≥
N
X
j=1
ρ∞
j − ρ∞
i , ∀i ∈ [1, N ],
and one inequality at least must be strict when the coordinates {ρ∞
i }N
i=1 are not all equal. Summing
over i yields N
N
X
i=1
ρ∞
i >N
N
X
i=1
ρ∞
i which is impossible. Hence, the existence of i′ as desired. The
proof of existence of i′′ is the same. In addition, the facts that f (ρ, x) > x for ρ < 1 and x ∈ [0, 1), and respectively that f (ρ, x) < x for ρ > 1 and x ∈ (0, 1] make it impossible that
f ρ∞
i′
⟨ρ∞⟩c
i′
, x∞
N = f ρ∞
i′′
⟨ρ∞⟩c
i′′
, x∞
N,
meaning that all the coordinates of {ρ∞
i }N
i=1 must be equal, proving the equalities (17).
In order to complete the proof, we show independently that each sequence { xt
i
xt
N
}t∈N is increasing,
leading to a contradiction with the limits of xt
i − xt
N . We have proved that the sequences {ρt
i }t∈N
(i ∈ [1, N − 1]) are all increasing and converge to 1. In particular, we have
1
⟨ρt⟩c
N
> 1, ∀t ∈ N,
implying that the sequence {xt
N }t∈N must be decreasing. Let t ∈ N and i ∈ [1, N − 1] be arbitrary.
We separate the cases ρt+1
i
⟨ρt+1 ⟩c
i
< 1 and ρt+1
i
⟨ρt+1 ⟩c
i
≥ 1. In the first case, we certainly have xt+1
i > xt
i
and hence xt+1
i
xt+1
N
> xt
i
xt
N
, as desired.
In the second case, which can only happen if N > 2, the fact that ρt+1
i < 1 for all i implies
the inequality ρt+1
i
⟨ρt+1 ⟩c
i
<1
⟨ρt+1 ⟩c
N
. Moreover, the assumption that the maps x 7→ fdev(ρ,x)
x are non
decreasing for every ρ, monotonicity in ρ and the fact that we must have xt
i > xt
N , yield
f ρt+1
i
⟨ρt+1 ⟩ic
(xt
i)
xt
i
>
f1
⟨ρt+1 ⟩c
N
(xt
i)
xt
i
≥
f1
⟨ρt+1 ⟩c
N
(xt
N)
xt
N
,
38

from where xt+1
i
xt+1
N
> xt
i
xt
N
immediately follows. The proof is complete.
The proof that it
x changes infinitely often is similar and relies on the property that the maps
x 7→ 1−f(ρ,x)
1−x are non-decreasing for every ρ < 1.
Proof of infinite changes of itp. Again by contradiction. Assume w.l.o.g. that itp = N for all
t ∈ N. Then, we have
ρt
i
⟨ρt⟩c
i
>1
⟨ρt⟩c
N
, ∀t ∈ N.
The monotonicity of (x, ρ) 7→ f (ρ, x) implies that for any given i ∈ [1, N − 1], if there exists ti ∈ N
such that xti
i < xti
N , then we must have
xt
i < xt
N , ∀t > ti.
Let us show that such ti must indeed exists for each i. By contradiction, assume that xt
N < xt
i for
all t ∈ N. Then {ρt
i}t∈N must be an increasing sequence that converges to ρ∞
i > ρ0
i > 1. However, the same reasoning as above that yields the equality (17) implies
lim
t→+∞ xt
i − xt
N = 0,
and then ρ∞
i
⟨ρ∞⟩c
i
=1
⟨ρ∞⟩c
N
for every accumulation point of the sequence {ρt}t∈N, which imposes in
turn that ρ∞
i = 1. However, this conclusion is incompatible with ρ∞
i > 1.
Therefore, ti exists for each i ∈ [1, N − 1]. But then the following equality results
it
x = N, ∀t ≥ max
i∈[1,N −1]
ti,
which we previously showed to be impossible. The proof is complete.
4.8 Proof the Theorem 3.10
Following [21, 28], we first compute the normal form of Fskew. To that goal, we proceed to a series of changes of variables in order to obtain an appropriate setting in which the variable transverse to ⟨x⟩ is a complex number. In the second part, we analyse this normal form and its coefficients in order to establish the desired convergence.
Changes of variables. The first change of variable (x, ρ1) 7→ (μ, ∆, ε) is defined by
μ = ⟨x⟩ = x1 + x2
2 , ∆ = x1 − x2
2 and ε = log ρ1.
This transformation conjugates Fskew to the mapping those coordinates are defined by

 
 
μ(μ, ∆, ε) = αμ + 1−α
2 f (eε, μ + ∆) + f (e−ε, μ − ∆)
∆(μ, ∆, ε) = α∆ + 1−α
2 f (eε, μ + ∆) − f (e−ε, μ − ∆)
ε(∆, ε) = ε + log 1+g(2∆)
1+g(−2∆)
The Jacobian matrix at any point (μ, 0, 0) for which f ′x(1, μ) = 1 writes


10 0 0 1 + 4(1 − α)fp(μ)gp (1 − α)fp(μ) 0 4gp 1

 (18)
39

where
fp(μ) = f ′
ρ(1, μ) and gp = g′(0).
Notice that if (μ, μ, 1) is a (transversally) parabolic fixed point of Fskew (in the sense defined before the Theorem) with fp(μ) = 0 and gp > 0, then expression (18) implies that it must be linearly unstable. The eigenvalues λ±(μ) of the lower right minor 2 × 2 matrix of (18) write
λ±(μ) = 1 + 2(1 − α)fp(μ)gp ± 2
q
(1 − α)fp(μ)gp(1 + (1 − α)fp(μ)gp),
and the corresponding eigenvectors write (assuming that gp ̸= 0)
e±(μ) =
(1−α)fp(μ)
2 ±1
2
q (1−α)fp(μ)(1+(1−α)fp(μ)gp) gp
1
!
Notice that when (μ, μ, 1) is an elliptic fixed point, ie. when (1 − α)fp(μ)gp ∈ [−1, 0), we have λ±(μ) = e±iθ(μ) where θ(μ) ∈ (0, π] is defined by
cos θ(μ) = 1 + 2(1 − α)fp(μ)gp. (19)
More generally, for every μ ∈ [0, 1] such that fp(μ) < 0 and (1 − α)fp(μ)gp > −1, this expression defines a unique θ(μ) ∈ (0, π]. Assuming that μ is such that the previous inequalities hold, we consider a second change of variables (μ, ∆, ε) 7→ (μ, x, y) in which the variables (x, y) are defined through the coordinates of e−(μ) by inverting the following system (NB: sin θ(μ) = 2p−(1 − α)fp(μ)gp(1 + (1 − α)fp(μ)gp))
∆
ε=
cos θ(μ)−1
4gp − sin θ(μ)
4gp
10
!
x
y viz.
(
∆(μ, x, y) = cos θ(μ)−1
4gp x − sin θ(μ)
4gp y
ε(μ, x, y) = x
which yields
( x(μ, ∆, ε) = ε
y(μ, ∆, ε) = cos θ(μ)−1
sin θ(μ) ε − 4gp
sin θ(μ) ∆
In these new variables, the dynamics writes (μ, x, y) 7→ (μ ̃(μ, x, y), X(μ, x, y), Y (μ, x, y)) where
μ ̃(μ, x, y) = μ(μ, ∆(μ, x, y), x) X(μ, x, y) = ε(∆(μ, x, y), x) Y (μ, x, y) = cos θ(μ)−1
sin θ(μ) X(μ, x, y) − 4gp
sin θ(μ)  ̃∆(μ, x, y) and  ̃∆(μ, x, y) = ∆(μ, ∆(μ, x, y), x)
As expected, in these new variables, the Jacobian matrix writes, using the definition of cos θ(μ)


10 0 0 cos θ(μ) − sin θ(μ) 0 sin θ(μ) cos θ(μ)


We finally consider a complexification of the transverse variable (x, y). Letting z = x+iy, we define the map FC acting in (μ, z) ∈ [0, 1] × C by
FC(μ, z) = (μb(μ, z), Z(μ, z)),
40

where
μb(μ, z) = μ ̃(μ, Re(z), Im(z)) and Z(μ, z) = X(μ, Re(z), Im(z)) + iY (μ, Re(z), Im(z)).
In these variables, the Jacobian matrix writes (still under the assumptions f ′x(1, μ) = 1, fp(μ) < 0 and (1 − α)fp(μ)gp > −1) 10
0 eiθ(μ)
When f satisfies the symmetry (Hf3), Lemma 3.5 implies that we have μb( 1
2, z) = 1
2 for all z. In
particular, ( 1
2 , 0) is a fixed point of FC. We aim at determining the behaviours of orbits in a
sufficiently small neighbourhood of ( 1
2 , 0) in R × C, assuming that this point is elliptic. As commented after Lemma 3.5, the assumptions on the components of the dynamics do not suffice to determine the limit of the first component of {F t
C(μ, z)}t∈N, namely the variable μt. In
particular, while we can make sure that this component must remain close to 1
2 , its limit as t → +∞ may differ from that value. Instead, focus here will be made on the long term behaviour of the second component of {F t
C(μ, z)}t∈N, namely the variable zt, when starting sufficiently close to ( 1
2 , 0). To that goal, we begin by establishing the expansion of the map Z in (μ + δ, z) for (δ, z) in the neighbourhood of the origin in R × C.
Expansion of the map Z. Evidently, the map (μ, ∆, ε) 7→ f (eε, μ ± ∆) is of class C4 in [x0, 1 − x0] × [−2x0, 2x0] × [− ln ρ0, ln ρ0]. Besides, the set
{(∆, ε) : ε(∆, ε) ∈ [− ln ρ0, ln ρ0]}
contains a neighbourhood of the origin in R2. The fact that g ∈ C4([−2x0, 2x0]) implies that the map (∆, ε) 7→ ε(∆, ε) is also of class C4 in this neighbourhood. Altogether, this implies that for every μ ∈ (x0, 1 − x0), there exists a neighbourhood Uμ of the origin in C such that the map z 7→ Z(μ, z) ∈ C4(Uμ).
Furthermore, the definitions of ∆ and ε and the symmetry of g imply the following symmetries
∆(μ, −∆, −ε) = −∆(μ, ∆, ε) ε(μ, −∆, −ε) = −ε(μ, ∆, ε)
and then
X(μ, −x, −y) = −X(μ, x, y) Y (μ, −x, −y) = −Y (μ, x, y)
This symmetry transfers to all derivatives wrt to the μ-variable, and also to all derivatives that are even in (x, y) and arbitrary in μ, viz. we have
X (k)
μk−2lx2l−mym (μ, 0, 0) = 0, ∀k ∈ N, l ∈ 0, · · · , ⌊ k
2 ⌋ , m ∈ {0, · · · , 2l}.
Accordingly, the 3rd-order expansion of X at (μ, 0, 0) - which we denote by 0 for the sake of notation - writes
X(μ + δ, x, y) = X′
x(0) + X′′
μx(0)δ + 1
2 X′′′
μ2x(0)δ2 x + 1
6 X′′′
x3 (0)x3 + 1
2 X′′′
x2y(0)x2y + 1
2 X′′′
xy2 (0)xy2
+ X′
y(0) + X′′
μy(0)δ + 1
2 X′′′
μ2y(0)δ2 y + 1
6 X′′′
y3(0)y3 + r4(δ, x).
41

where, given n ∈ N, the symbol rn+1 denotes a generic remainder that satisfies
lim
max{|δ|,|z|}→0
|rn+1(δ, z)|
(max{|δ|, |z|})n = 0.
A similar expansion holds for the expansion of Y . By differentiating the relation (19) one gets the following expressions
f ′′
ρx(1, μ) = − θ′(μ) sin θ(μ)
2(1 − α)gp
and f ′′′
ρx2(1, μ) = − (θ′(μ))2 cos θ(μ) + θ′′(μ) sin θ(μ)
2(1 − α)gp
.
Altogether, using these derivatives, the relation (19) and also the equalities f ′x(1, μ) = 1 and
f ′′
x2 (1, μ) = f ′′′
x3(1, μ) = 0, explicit computations yield the following expressions for the derivatives involved in the expansions
• X′μ′x(0) = −θ′(μ) sin θ(μ) and X′′′
μ2x(0) = −(θ′(μ))2 cos θ(μ) − θ′′(μ) sin θ(μ),
• X′μ′y(0) = −θ′(μ) cos θ(μ) and X′′′
μ2y(0) = (θ′(μ))2 sin θ(μ) − θ′′(μ) cos θ(μ),
• Yμ′′x(0) = θ′(μ) cos θ(μ) and Y ′′′
μ2x(0) = −(θ′(μ))2 sin θ(μ) + θ′′(μ) cos θ(μ),
• Yμ′′y(0) = −θ′(μ) sin θ(μ) and Y ′′′
μ2y(0) = −(θ′(μ))2 cos θ(μ) − θ′′(μ) sin θ(μ).
Passing to the complexification, we finally get the following expansion of the map Z
Z(μ + δ, z) = eiθ(μ) 1 + iθ′(μ)δ + 1
2 −(θ′(μ))2 + iθ′′(μ) δ2 z + A(μ, z) + r4(δ, z),
where the 3rd-order term A(μ, z) involves combinations of the 3rd order derivatives of X and Y in (x, y) and it generically writes
A(μ, z) = c3(μ, 0)
6 z3 + c2(μ, 0)
2 z2z ̄ + c1(μ, 0)
2 zz ̄2 + c0(μ, 0)
6 z ̄3,
where the coefficients ci(μ, 0) depend continuously on μ.
Analysis of the dynamics in the neighbourhood of ( 1
2 , 0). The iterations of the variable z
are governed by the maps Zt defined by the following induction
Z1(μ, z) = Z(μ, z) and Zt+1(μ, z) = Zt(μb(μ, z), Z(μ, z)), ∀t ∈ Z+.
assuming (Hf3) and that the fixed point ( 1
2 , 0) is elliptic, we aim at conditions on the coefficients involved in the expansion of Z that ensures that lim
t→+∞|Zt(μ, z)| = 0 when |z| is sufficiently small
and μ is sufficiently close to 1
2.
The above expansion of Z indicates that a necessary condition for the damping of Zt is that θ′( 1
2 ) = θ′′( 1
2 ) = 0, namely that we have fρ′′x(1, 1
2 ) = f ′′′
ρx2 (1, 1
2 ) = 0. Indeed, otherwise, we certainly have
1 + iθ′( 1
2 )δ + 1
2 −(θ′( 1
2 ))2 + iθ′′( 1
2) δ2 > 1
when δ is sufficiently small, implying that |Z(μ, z)| > |z| for all z such that |z| is small enough. From now on, we assume that fρ′′x(1, 1
2 ) = f ′′′
ρx2 (1, 1
2 ) = 0 and consider the dynamics in the
neighbourhood of ( 1
2 , 0). The fact that ( 1
2 , 0) is elliptic suggests that the instant behaviour of
42

|Z(μ, z)| might not be isotropic, ie. |Z(μ, z)| < |z| may fail depending on Arg(z). In order to address this issue, we instead aim at a criterion such that
lim
t→+∞ |Znt( 1
2 + δ, z)| = 0 (20)
for some n suitably chosen, and provided that |δ| and |z| are sufficiently small. Dropping the explicit dependence on δ for simplicity, using the assumption fρ′′x(1, 1
2 ) = f ′′′
ρx2 (1, 1
2) =
0 and (Hf3) in an easy induction yields that we have for every n ∈ Z+
Zn(z) = einθz + ei(n−1)θ
n−1
X
k=0
e−ikθA(eikθz) + r4(z),
where
n−1
X
k=0
e−ikθA(eikθz) = c3(0)
6 z3
n−1
X
k=0
e2ikθ + n c2(0)
2 z2z ̄ + c1(0)
2 zz ̄2
n−1
X
k=0
e−2ikθ + c0(0)
6 z ̄3
n−1
X
k=0
e−4ikθ
In particular, the assumption that the fixed point is elliptic and θ ̸∈ πZ imply that the coefficients in the sums do not vanish; hence we have
Zn(z) = einθz+ei(n−1)θ c3(0)
6 z3 1 − e2inθ
1 − e2iθ + n c2(0)
2 z2z ̄ + c1(0)
2 zz ̄2 1 − e−2inθ
1 − e−2iθ + c0(0)
6 z ̄3 1 − e−4inθ
1 − e−4iθ +r4(z),
From this expression, we get
|Zn(z)|2 =|z|2 + nRe(e−iθc2(0))|z|4
+ 2Re e−iθ c3(0)
6 |z|2z2 1 − e2inθ
1 − e2iθ + c1(0)
2 |z|2z ̄2 1 − e−2inθ
1 − e−2iθ + c0(0)
6 z ̄4 1 − e−4inθ
1 − e−4iθ + r5(z)
We have
Re e−iθ c3(0)
6 |z|2z2 1 − e2inθ
1 − e2iθ + c1(0)
2 |z|2z ̄2 1 − e−2inθ
1 − e−2iθ + c0(0)
6 z ̄4 1 − e−4inθ
1 − e−4iθ ≤ C|1−e2inθ||z|4
for some constant C ∈ R∗+. Moreover, every θ ∈ R can be approximated arbitrarily close by a
rational multiple of π. That is to say, one can choose n sufficiently large in order to make |1 − e2inθ| arbitrarily small.15 Therefore, if Re(e−iθc2(0)) < 0, (21)
then, provided that n is suitably chosen sufficiently large there exists a, ε > 0 such that
|Zn( 1
2 + δ, z)|2 ≤ |z|2(1 − a|z|2), ∀|δ|, |z| < ε.
Independently, let (δ, z) be sufficiently close to (0, 0) so that
(eε, μ + ∆), (eε, 1 − μ + ∆) ∈ U
Using the symmetry (Hf3) as in the proof of Lemma 3.5, we obtain
|2μˆ( 1
2 + δ, z) − 1| ≤ 2|δ| sup
(ρ,x)∈U
|f ′
x(ρ, x)|.
The assumption sup
(ρ,x)∈U
|f ′x(ρ, x)| ≤ 1 ensures that |2μˆ( 1
2 + δ, z) − 1| < 2ε. Hence, the inequality
above on |Zn|2 holds for the iterated pair (μˆ( 1
2 +δ, z), Z(δ, z)), and then, by repeating the argument, for all subsequent nt-iterates, implying the limit (20).
15In particular, if θ = p
q π for some p, q ∈ Z, then we obviously have e2iqθ = 1. When θ is irrational multiple of π, then the continued fraction algorithm provides such n.
43

Analysis of the stability condition. In order to complete the proof of the Theorem, it remains to express the stability condition (21) in terms of the components of the original map Fskew. To that goal, we compute the coefficient c2(0) from the expansions of the 3rd-order expansions of the functions X(μ + δ, x, y) and Y (μ + δ, x, x) at ( 1
2 , 0, 0). The resulting expression is
c2(0) = 1
8 X′′′
x3 (0) + X′′′
xy2 (0) + Y ′′′
x2y(0) + Y ′′′
y3 (0) + i(Y ′′′
x3 (0) − X′′′
x2y(0) + Y ′′′
xy2 (0) − X′′′
y3 (0))
Accordingly, we need to compute the 3rd-order derivatives at ( 1
2 , 0, 0) of the functions X(μ, x, y) and Y (μ, x, x). The expressions are given in Appendix C. Given these expressions, we obtain the following expressions for the real part of the coefficient c2(0), up to the factor 1
8
(1 − α) 4fpgp + fp(1 − cos θ)
gp2
Kg + 12gpf ′′
ρ2 (1, 1
2 ) + 4gpf ′′′
ρ3 (1, 1
2 ) + (3 − 2 cos θ)f ′′′
ρ2x(1, 1
2)
Similarly, for the imaginary part of c2(0), we have, up to the factor 1
8 , using again the definition (19) appropriately
− (1 − α) 4fpgp cos θ
sin θ + fp(1 − cos θ) cos θ
gp2 sin θ Kg + 12gp cos θ
sin θ f ′′
ρ2 (1, 1
2 ) + 4gp cos θ
sin θ f ′′′
ρ3 (1, 1
2)
+ (3 − 2 cos θ) cos θ − 1
sin θ f ′′′
ρ2x(1, 1
2)
Altogether, the real part
8Re(e−iθc2(0)) = (X′′′
x3 (0)+X′′′
xy2 (0)+Y ′′′
x2y(0)+Y ′′′
y3 (0)) cos θ+(Y ′′′
x3 (0)−X′′′
x2y(0)+Y ′′′
xy2 (0)−X′′′
y3(0)) sin θ,
writes (1 − α)f ′′′
ρ2x(1, 1
2 ), from where the last inequality in equation (5) in the statement of the
Theorem immediately implies the stability condition (21).
5 Conclusion
In this paper, a behavioural model for the population dynamics in OTC wholesale fresh product markets, that aims to address the limitations of previous modelling, has been introduced and mathematically analyzed. The evolution rules, which involve a negative regulatory feedback scheme, are based on elementary buyer-seller interactions that are inspired from empirical observations and accounts by the various actors. The analysis proves that the dynamics self-regulates and feedbackinduced oscillation-
s of limited amplitude must prevail forever, as far as clientele fractions and prices ratio are concerned. One particularly important result is that the oscillations must be asymptotically damped unless the prices themselves vanish in the long term. In the case of N = 2 and under the symmetry assumption, we have proved that, provided that the fraction of loyal buyers is high enough or the rate at which sellers react to clientele change is sufficiently small, the fixed point ( 1
2, 1
2 , 0) is elliptic and under additional technical conditions, the oscillations are indeed damped (at least when starting in a sufficiently small neighbourhood of this fixed point), implying long-term equilibration of prices and clientele. Altogether, our results indicate that, despite the limited number of ingredients and their simplicity, the model exhibits a number of realistic functioning modes, including long-term equilibration. Still in the N = 2 case, the fact that equilibria are unstable (h-
yperbolic) when loyalty is small and sellers are highly reactive suggests that the orbits are unlikely to converge to a stationary point.
44

In fact, [7] proves that 2-periodic orbits must exist in this case (provided that f is piecewise affine as in Fig. 1), and proves also the existence of family of maps with stable 2-periodic orbits. Hence, there are examples of maps and orbits that converge to a (non-stationary) periodic orbit, implying vanishing prices in this case. Such behaviour raises interesting questions about the relevance of modelling in this case. Indeed, is asymptotically vanishing prices compatible with perennial busine-
ss? If not, does this property implies that little loyalty and high reactivity are unrealistic features of such markets? Another question of interest is the extension of the nonlinear stability result to non-symmetric map f when N = 2 and also to markets with more than 2 sellers. On the broader horizon of improving modelling, to introduce some heterogeneity in the buyers population is another challenge that will be addressed in future studies.
Acknowledgements. We are grateful to N. Raffin, A. Vignes and J. Wenzelburger for fruitful discussions and relevant comments. The research in this article has been accomplished in the framework of the project ANR LabCom LOPF, ref ANR-20-LCV1-0005.
A Emerging bounds on clientele volumes in the model with price
ratios pi
⟨p⟩
As explained in the definition of the iterations (1), the reason for considering the ratios pi
⟨p⟩c
i
instead
of pi
⟨p⟩ , is to avoid any bias in the dynamics that would result from the breakdown of the symmetry
ρ→ 1
ρ . In this appendix, we emphasize on the difference between the two models by exhibiting an
asymmetric feature of the constraints on clientele volumes when considering pi
⟨p⟩ , even though the
family {fρ} is invariant under such symmetry. To be more specific, we assume that N = 2 and consider the following iterations



xt+1
i =f
α, 2pt+1
i
pt+1
1 +pt+1
2
(xt
i)
pt+1
i = pt
i 1 + g(xt
i − ⟨xt⟩c
i)
for i ∈ [1, 2], (22)
where the maps fρ are given by (2) with c(ρ) = e−| ln ρ|. We have the following result whose second statement contrasts the statement in Lemma 3.5.
Claim A.1. (i) The following property holds for every orbit of the system (22)
⟨xt⟩ > 1
2 =⇒ ⟨xt+1⟩ > 1
2.
(ii) There are orbits of the system (22) for which there exists t ∈ R such that ⟨xt⟩ < 1
2 and
⟨xt+1⟩ > 1
2.
Proof. As usual, it suffices to prove the result for α = 0. Removing the superscripts t for simplicity, we have
2⟨xt+1⟩ = f 2ρ1
1+ρ1
(x1) + f 2
1+ρ1
(x2)
In particular, when ρ1 ≥ 1, we have
2⟨xt+1⟩ = 1 + ρ1
2ρ1
x1 + 1 − 2
1 + ρ1
(1 − x2) = 1 + 1 + ρ1
2ρ1
−2
1 + ρ1
x1 − 2
1 + ρ1
(1 − 2⟨xt⟩)
45

Therefore, we have ⟨xt+1⟩ > 1
2 when
1 + ρ1
2ρ1
−2
1 + ρ1
x1 > 2
1 + ρ1
(1 − 2⟨xt⟩),
from where both statements (i) and (ii) easily follow in the case ρ1 ≥ 1. The proof for ρ1 ≤ 1 is similar.
B Emerging bounds on clientele volumes for N = 2 in absence of
symmetry
In the case N = 2, Lemma 3.5, which provides some control on the convergence of ⟨xt⟩ to 1
2,
relies on the symmetry assumption (Hf3). Yet, some constraints on ⟨xt⟩ prevail in absence of the full symmetry, when only the derivatives at the two fixed points are equal and provided that the deviations from the linearizations at these fixed points are under control. The accurate result is given in the following statement.
Claim B.1. Let N = 2 and assume that g satisfies (Hg1), f satisfies (Hf1-2), f ′x(ρ, 0) = f ′x( 1
ρ , 1) for all ρ ≥ 1 and there exists γ ∈ (0, 1) such that we have for ρ > 1
f′
x(ρ, 0)x ≤ f (ρ, x) ≤ f ′
x(ρ, 0)x + γ(1 − f ′
x(ρ, 0)), ∀x ∈ [0, 1],
and for ρ < 1
1 − f′
x(ρ, 1)(1 − x) − γ(1 − f ′
x(ρ, 1)) ≤ f (ρ, x) ≤ 1 − f ′
x(ρ, 1)(1 − x), ∀x ∈ [0, 1]
Then, for every orbit {(xt, ρt1)}t∈N of (4), we have when ρt+1
1 >1
2⟨xt+1⟩ − 1 − γ ≤ f ′
x(ρt+1
1 , 0)(2⟨xt⟩ − 1 − γ)
and
2⟨xt+1⟩ − 1 + γ ≥ f ′
x(ρt+1
1 , 1)(2⟨xt⟩ − 1 + γ).
Moreover, similar inequalities hold with f ′x(ρt+1
1 , 0) and f ′x(ρt+1
1 , 1) exchanged, when ρt+1
1 < 1.
As a consequence the interval [ 1−γ
2 , 1+γ
2 ] is an invariant set of the variable ⟨xt⟩, to which ⟨xt⟩
must approach in every orbit for which ρt1 does not approach 1 too fast.16
Proof. Assume that ρt+1
1 > 1. Then, from the right inequalities in the conditions on f (ρ, x) and
using that f ′x( 1
ρt+1
1
, 1) = f ′x(ρt+1
1 , 0), we obtain
2⟨xt+1⟩ ≤ 1 + f ′
x(ρt+1
1 , 0)(2⟨xt⟩ − 1) + γ(1 − f ′
x(ρt+1
1 , 0)),
from where the first inequality follows. The second one is obtained similarly by using the left inequalities in the conditions on f (ρ, x). The proof for ρt+1
1 < 1 is similar.
16Indeed, 2⟨xt⟩ − 1 − γ must decrease when positive (and ρt+1
1 ̸= 1). Moreover, the same inequality implies that
2⟨xt+1⟩ − 1 − γ ≤ 0 when 2⟨xt⟩ − 1 + γ ≤ 0, and similarly when 2⟨xt⟩ − 1 − γ ≥ 0. This means that ⟨xt⟩ cannot jump over the interval. Hence, we are sure that ⟨xt⟩ must approach the interval when outside.
46

C Expressions of the derivatives of the functions X and Y
This appendix reports the results of the computations of the 3rd-order derivatives at ( 1
2 , 0, 0) of the functions X(μ, x, y) and Y (μ, x, x), whose expressions compose the coefficient c2(0) involved in the stability condition (21). Throughout, we omit the explicit dependence on μ because it is superfluous.
Expressions of the 3rd-order derivatives of X. Writing
X(x, y) = x + log u( cos θ − 1
2gp
x − sin θ
2gp
y) where u(x) = 1 + g(x)
1 + g(−x) ,
and using the equalities
u(0) = 1, u′(0) = 2gp, u′′(0) = 4g2
p, and u′′′(0) = 2(6gp3 − 3gpg′′(0) + g′′′(0)),
we get
X ′′′
x3(0) = cos θ − 1
2gp
3
Kg
X ′′′
x2y(0) = − cos θ − 1
2gp
2 sin θ
2gp
Kg
X ′′′
xy2 (0) = sin θ
2gp
2 cos θ − 1
2gp
Kg
X ′′′
y3(0) = − sin θ
2gp
3
Kg
where Kg = 4gp3 − 6gpg′′(0) + 2g′′′(0).
Expressions of the 3rd-order derivatives of Y . Using the expression
Y (x, y) = cos θ − 1
sin θ X(x, y) − 4gp
sin θ
 ̃∆(x, y),
and the equalities
X(0) = 0, X′
x(0) = cos θ, X′
y(0) = − sin θ, X′′
ω1ω2(0) = 0, for ω1ω2 ∈ {x2, xy, y2},
and
f ′′
ρx(1, 1
2 ) = f ′′′
x3(1, x) = 0, ∀x ∈ [0, 1],
and replacing cos θ − 1 by 2(1 − α)fpgp where appropriate, we get the following expressions of the derivatives of Y , by computing the 3rd-order derivatives of ∆, and after substantially algebraic
47

manipulation
Y ′′′
x3 (0) = −(1 − α) 4fpgp cos3 θ
sin θ + 2fpgp
sin θ X′′′
x3(0) + 12gp cos3 θ
sin θ f ′′
ρ2 (1, 1
2 ) + 4gp cos3 θ
sin θ f ′′′
ρ3 (1, 1
2)
− 3(1 − cos θ) cos2 θ
sin θ f ′′′
ρ2x(1, 1
2)
Y ′′′
x2y(0) = (1 − α) 4fpgp cos2 θ − 2fpgp
sin θ X′′′
x2y(0) + 12gp cos2 θf ′′
ρ2 (1, 1
2 ) + 4gp cos2 θf ′′′
ρ3 (1, 1
2)
+(3 cos θ − 2) cos θf ′′′
ρ2x(1, 1
2)
Y ′′′
xy2(0) = −(1 − α) 4fpgp sin θ cos θ + 2fpgp
sin θ X′′′
ρx2(0) + sin θ 12gp cos θf ′′
ρ2 (1, 1
2 ) + 4gp cos θf ′′′
ρ3 (1, 1
2)
−(1 − 3 cos θ)f ′′′
ρ2x(1, 1
2)
Y ′′′
y3 (0) = (1 − α) 4fpgp sin2 θ − 2fpgp
sin θ X′′′
y3 (0) + sin2 θ 12gpf ′′
ρ2 (1, 1
2 ) + 4gpf ′′′
ρ3 (1, 1
2)
References
[1] A. Bernard de Raymond, Le marche ́ aux fruits et l ́egumes de Rungis (entretien) (in French) Terrains & travaux (2003) 1, 82–110.
[2] S. Boccaletti, J. Kurths, G. Osipov, D.L. Valladares and C.S. Zhou, The synchronisation of chaotic systems, Phys. Rep. 366 (2002) 1–101.
[3] J-R. Chazottes and B. Fernandez (ed.), Dynamics of coupled map lattices and of related spatially extended systems, Lec. Notes Phys. Springer 671 (2005).
[4] C. Curchod, Buyer strategizing in continuously recreated markets: Loyalty, deviance and defection, Strateg. Organ. 8 (2010) 313–346.
[5] C. Curchod, P. Caillou and T. Baptista, Which Buyer-Supplier Strategies on Uncertain Markets? A Multi-Agents Simulation. Strategic Management Society (2009) inria-00380540.
[6] S. Dhami, The foundations of behavioral economic analysis, Oxford University Press (2016).
[7] A. Ellouze, Population dynamics in wholesale over-the-counter fresh product markets, PhD Thesis (2025).
[8] A. Ellouze and B. Fernandez, Dynamics of buyer populations in fresh product market, J. Nonlinear Sci. 34 (2024) 92–120.
[9] A. Ellouze and B. Fernandez, Mathematical analysis of a simple model for sellers-buyers interactions in fish markets, in preparation.
[10] C. Geertz, The Bazaar Economy: Information and Search in Peasant Marketing, Am. Econ. Rev. 68 (1978) 28–32.
[11] J.-L. Gouz ́e, Positive and negative circuits in dynamical systems, J. Biol. Syst. 6 (1998) 11-15.
[12] K. Graddy, Markets: The Fulton Fish Market, J. Econ. Perspect. 20 (2006) 207–220.
48

[13] M. Gallegati, G. Giulioni, A. Kirman and A. Palestrini, What’s that got to do with the price of fish? Buyers behavior on the Ancona fish market, J. Econ. Behav. Organ. 80 (2011) 20-33.
[14] K. Graddy and G. Hall, A dynamic model of price discrimination and inventory management at the Fulton Fish Market, J. Econ. Behav. Organ. 80 (2011) 6–19.
[15] C. Hommes, Behavioral rationality and heterogeneous expectations in complex economic systems, Cambridge University Press (2013).
[16] W. Ha ̈rdle and A. Kirman, Nonclassical demand: a model-free examination of price-quantity relations in the Marseille fish market, J. Econom. 67 (1995) 227-257.
[17] L. Hern ́andez, A. Vignes and S. Saba, Trust or robustness? An ecological approach to the study of auction and bilateral markets, PLoS ONE 13 (2018) e019620.
[18] M. Kaufman, C. Soul ́e and R. Thomas, A new necessary condition on interaction graphs for multistationarity, J. Theo. Bio. 248 (2007) 675-685.
[19] A. Kirman, Market Organization and Individual Behavior: Evidence from Fish Markets, In J. Rauch and A. Casella, ed. Networks and Markets, Russell Sage Foundation (London) (2001) 155–195.
[20] A. Kirman and N. Vriend, Evolving market structure: An ACE model of price dispersion and loyalty, Journal of Economic Dynamics & Control 25 (2001) 459-501.
[21] O.E. Lanford, Bifurcation of periodic solutions into invariant tori: the work of Ruelle and Takens, in Nonlinear Problems in the Physical Sciences and Biology, Lec. Notes Math. 322, Springer-Verlag, (1973).
[22] S. Mignot, G. Tedeschi and A. Vignes, An Agent Based Model of Switching: The Case of Boulogne S/ mer Fish Market, J. Artif. Soc. Soc. Simul. 15 (2012) 3.
[23] S. Moulet and J. Rouchier, The influence of seller learning and time constraints on sequential bargaining in an artificial perishable goods market, J. Econ. Dyn. Control 32 (2008) 2322-2348.
[24] E. Plahte, T. Mestl and S.W. Omholt, Feedback loops, stability and multistationarity in dynamical systems, J. Biol. Syst. 3 (1995), 409-413.
[25] A. Pogromsky, G. Santoboni and H. Nijmeijer, Partial synchronization: from symmetry towards stability, Physica D 172 (2002) 65–87.
[26] R. Varman and J. Costa, Competitive and Cooperative Behavior in Embedded Markets: Developing an Institutional Perspective on Bazaars, J. Retail. 85 (2009) 453–467.
[27] A. Vignes and J.-M. Etienne, Price formation on the Marseille fish market: Evidence from a network analysis, J. Econ. Behav. Organ. 80 (2011) 50-–67.
[28] Y.-H. Wan, Computation of the stability condition for the Hopf bifurcation of difeomorphisms on R2, SIAM J. Appl. Math. 34 (1978) 167–175.
[29] F.-C. Wolff and F. Asche, Pricing heterogeneity and transaction mode: Evidence from the French fish market, J. Econ. Behav. Organ. 203 (2022) 67–79.
[30] G. Weisbuch, A. Kirman and D. Herreiner, Market organisation and trading relationships, Econ. J. 110 (2000) 411-436.
49

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:17.243Z
- **Text Length:** 118507 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 49 of 49
