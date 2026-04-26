# PDF Document: Cotton et al. - 2025 - A universal phase-plane model for in vivo protein aggregation.pdf

**File Path:** Cotton et al. - 2025 - A universal phase-plane model for in vivo protein aggregation.pdf

**Processed Date:** 2026-02-10T18:16:47.577Z

**File Size:** 881.65 KB

**Total Pages:** 34

**Extracted Pages:** 34

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3670

**Title:** A universal phase-plane model for in vivo protein aggregation

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

A universal phase-plane model for in vivo protein aggregation
Matthew W. Cotton,1, 2, 3 Alain Goriely,3 David Klenerman,1, 2 and Georg Meisl∗,1, 2
1)Yusuf Hamied Department of Chemistry, University of Cambridge,
UK
2)UK Dementia Research Institute, Cambridge, UK
3)Mathematical Institute, University of Oxford, UK
(*Electronic mail: gm373@cam.ac.uk)
(Dated: 25 November 2025)
Neurodegenerative diseases are driven by the accumulation of protein aggregates in the
brain of affected individuals. The aggregation behaviour in vitro is well understood and
driven by the equilibration of a super-saturated protein solution to its aggregated equi
librium state. However, the situation is altered fundamentally in living systems where
active processes consume energy to remove aggregates. It remains unclear how and why
cells transition from a state with predominantly monomeric protein, which is stable over
decades, to one dominated by aggregates. Here, we develop a simple but universal theo
retical framework to describe cellular systems that include both aggregate formation and
removal. Using a two-dimensional phase-plane representation, we show that the inter
play of aggregate formation and removal generates cell-level bistability, with a bifurcation
structure that explains both the emergence of disease and the effects of therapeutic inter
ventions. We explore a wide range of aggregate formation and removal mechanisms and
show that phenomena such as seeding arise robustly when a minimal set of requirements on
the mechanism are satisfied. By connecting in vitro aggregation mechanisms to changes
in cell state, our framework provides a general conceptual link between molecular-level
therapeutic interventions and their impact on disease progression.
1
arXiv:2511.18893v1 [q-bio.BM] 24 Nov 2025

I. BACKGROUND
Protein aggregates are known to play a key role in the onset of a variety of neurodegenera
tive diseases (NDDs)1,2. The physical mechanisms governing the formation of aggregates from
monomeric proteins have been well studied using in vitro experiments. Theoretical descriptions
based on chemical kinetics provide precise predictions of the rate at which the protein monomers
are converted into the aggregates. In recent decades, it has been demonstrated that these models
show good agreement with experimental data across a wide range of proteins3–6. Fitting these
models can determine reaction rates for the different mechanisms, and which processes dominate
the conversion from the monomeric to aggregated state. However, while the same processes likely
still take place in living systems, these well-established models are generally insufficient for de
scribing aggregation in living systems: They assume the initial state contains a supersaturated
solution of monomeric protein, and the kinetics is governed by the equilibration into the aggre
gated state. To understand the transition to a disease state in vivo, it is essential to also account
for active processes present in living systems. In particular, clearance mechanisms that remove
aggregates can help maintain a metastable state where toxic aggregates are removed at the same
rate at which they are produced.
Such models are essential for understanding the effect of several therapeutic interventions
currently in development: Promising monoclonal antibody therapies, such as lecanemab7, do
nanemab8, and aducanumab9 aim to support the body’s removal mechanisms by targetting aggre
gates of the Aβ peptide. Other therapeutic approaches, such as antisense therapies10–13, or other
epigenetic editor technologies14, aim to reduce the protein concentrations and thus the aggregation
potential of the system. To predict quantitatively the effect of these interventions requires robust
models of aggregation and removal in living systems.
In this work, we develop a general, theoretical framework to describe the aggregation state
of cells, imposing a minimal set of conditions and determining the robust general features of
behaviour. The binary state of systems, healthy or aggregating, naturally emerges from this de
scription and we study how transitions between these states take place when disease initiates or
when cures are administered. We generalise our earlier work in which we studied the stability
of a specific minimal model of aggregate removal15(see section III A), and introduce the two
dimensional phase-plane framework as the central tool for understanding system behaviour. We
uncovered universal features of these transition by showing that the basic bifurcation structure
2

FIG. 1. Multiple reactions can convert monomeric protein into an aggregated state. Additionally, in living
cells aggregates are removed from cells by active processes.
is preserved across a wide range of scenarios, with minimal constraints on the mechanisms. This
bifurcation structure provides a single explanatory framework for widely observed phenomena, in
cluding: seeding, aggregates in healthy cells, and disappearance of aggregates upon administration
of monomer-lowering therapies11,16,17.
II. IN VITRO MODELS OF AGGREGATION
We assume that the intrinsic mechanisms of aggregate formation observed in vitro also drive
the in vivo aggregation. It will form the basis of our model, so we briefly overview these here4,18.
The rates of these processes may be significantly different in living systems compared to test tubes,
but there is significant evidence across different proteins that in vitro mechanisms are predictive
of in vivo behaviour6.
New aggregates are created by primary nucleation, secondary nucleation and fragmentation.
Primary nucleation spontaneously converts the nc monomers into an aggregate of length of nc
with rate constant kn. Secondary nucleation is an autocatalytic conversion of n2 monomers into
an aggregate of length of n2, occurring on the surface of existing aggregates with a rate constant
k2. Fragmentation is the splitting of a longer aggregate into two smaller aggregates which we
assume occurs with equal probability for any monomer-monomer bonds with rate k−. Addition
ally, aggregates change size via the addition or removal of a protein monomer on the end of an
aggregate, which we call elongation and depolymerisation and which occur at rates k+ and koff
respectively. We expect that aggregates below the nucleus size nc are unstable and thus neglect
3

them in calculations of total aggregate mass. We therefore also require n2 ≥ nc. The reverse
reactions of nucleation and fragmentation have a negligible impact on the kinetics of aggregate
formation and are thus neglected, as is commonly done18. Note that in most practical applications,
i.e. when experimental data are fitted, the parameters nc and n2 become effective reaction orders
of a coarse-grained multi-step process and can no longer be easily interpreted directly as the sizes
of the nucleated species, as detailed in5,19.
Defining the concentration of monomers in the system as m and the concentration of aggregates
of length i at time t as f (t, i), we use mass action kinetics to determine the rates of the different
aggregation processes. Combining all of these processes gives the master equation4 that describes
the evolution of the population of aggregates of a given length i,
d f (t, i)
dt = δi,nC knmnC + δi,n2 k2mn2
∞
j=∑nc
j f (t, j)
!
+ 2k+m( f (t, i − 1) − f (t, i)) + 2koff( f (t, i + 1) − f (t, i))
− k−(i − 1) f (t, i) + 2k−
∞
j=i∑+1
f (t, j)
!
.
(1)
In general, this infinite system of coupled ordinary differential equations is difficult to solve, how
ever with suitable assumptions, they often can be approximated by a closed system of equations
for the evolution of the moments of the length distribution4,18. The ηth moment of the aggregate
length distribution is given by Q(η) = ∑i∞=nc iη f (t, i). Two particularly important moments, that are
most commonly measured experimentally, are the 0th and 1st moments of the distribution. These
are the total number concentration of aggregates, P = ∑ f (t, i) and the total aggregate mass con
centration, M = ∑ i f (t, i), respectively. Assuming that fragmentation and depolymerisation are
negligible (k− = koff = 0), the evolution of M and P is then given by a closed system for M and P:
dM
dt = 2k+mP + ncknmnc + n2k2mn2M, (2)
dP
dt = knmnc + k2mn2M. (3)
III. EXTENDING AGGREGATION KINETICS TO IN VIVO ENVIRONMENTS
While in vitro the total protein concentration remains constant, in living systems, there are
additional processes in the ‘life cycle’ of a protein: specifically how proteins are produced and re
moved. Many proteins that aggregate during disease also fulfil functional roles and thus will likely
4

be subject to active homeostasis mechanisms that maintain their concentration. For example, the
microtubule-associated protein tau can stabilise microtubules and regulate transport by molecu
lar motors20, but its aggregation causes tauopathies such as Alzheimer’s Disease. Generally, the
differential equation for monomer can be written as
dm
dt = ε−1 (γ − λ1m) + aggregation kinetics, (4)
where γ and λ1 are scaled rate constants for production and removal of the monomer respectively
and ε is a parameter that separates the timescales of monomer production and removal and the
timescales of aggregation. There are two limiting cases to consider in modelling the kinetics of
aggregation in vivo: (1) the total protein concentration is constant and gets depleted by conversion
into aggregates, as in the in vitro case (large ε), and (2) the free monomeric protein concentration
is constant, m(t) = m0, and is not depleted (small ε). We consider initially the latter case of a
constant concentration of free monomeric protein before generalizing it in later sections. In order
to maintain the monomer concentration precisely, the cellular production and removal need to be
much faster than the aggregation kinetics and thus ε is small. The leading order solution to (4)
is m = γ/λ1 = m0. In the subsequent analysis we only consider this leading order behaviour.
The reality is likely somewhere in between the two limiting cases where the timescales are not as
well separated21, however the leading order behaviour is sufficient to capture key features of the
disease.
Protein synthesis can thus be addressed relatively easily. However, a more significant effect
on the aggregation behaviour is the fact that in living systems aggregates can also be removed via
active processes in the cells or surrounding tissue, for example by autophagy or by expulsion form
the cell22. This introduces a new term to the master equation:
d f (t, i)
dt = δi,nC knmnC + δi,n2 k2mn2
∞
j=∑nc
j f (t, j)
!
+ 2k+m( f (t, i − 1) − f (t, i)) + 2koff( f (t, i + 1) − f (t, i))
− k−(i − 1) f (t, i) + 2k−
∞
j=i∑+1
f (t, j)
!
− λi,
(5)
where λi is the removal rate for aggregates of each size. The functional form of the removal could
depend on the concentration of aggregates at each length, the monomer concentration, or other
parameters, i.e. λi = λ (i, m, f (t, j)), however we write it as λi here for simplicity.
5

The exact mechanisms of aggregate removal and their kinetics remain unknown in many living
systems, and we thus investigate broad classes of mechanisms to establish robust and common
behaviours. We make a set of minimal assumptions that will apply throughout this work, namely
that the rate of the removal mechanism is independent of the monomer concentration and that the
fibril growth rate is proportional to the monomer concentration. We first consider the simplest
removal mechanism, to showcase the different regimes of cell behaviour and derive the key deter
minants of the system. In particular, we establish the behaviour as a function of both monomer and
aggregate concentration as a characteristic "fingerprint" of the system. We then consider increas
ingly complex descriptions of removal and aggregation, and use these monomer-aggregate phase
planes to demonstrate the common features across mechanisms. The monomer-aggregate phase
planes provide a universal way to describe transitions to disease and provide a readily interpretable
framework to guide the development of future therapeutics.
A. Unbound removal describes a switch between stable and runaway aggregation
We begin by considering the simplest removal kinetics: the removal rate is proportional to the
number of aggregates and independent of size so that λi = λ × f (t, i), and so the removal rate
theoretically has no upper bound, see also Thompson et al.15.
When the removal is proportional to the number of aggregates, the moment equations define
a linear system, since m = m0 is also constant. We define q = (P, M)T and the evolution of the
system is
 ̇q =


−λ k2mn2
0
2k+m0 n2k2mn2
0 −λ


| {z }
A
q+


knmnc
0
ncknmnc
0


| {z }
b
, (6)
where the dot indicates the time derivative and the matrix A and vector b are defined in the equa
tion. Since generically A is not singular, we can write the solution of this linear system in compact
notation as
q = −A−1b + eAt q0 + A−1b , (7)
where q0 is a vector of the initial aggregate number and aggregate mass concentration. The steady
state behaviour is determined by the eigenvalues of A, which are
ν± = 1
2 k2mn2
0 n2 ±
q
8k+m0k2mn2
0 + n2k2mn2
0
2 − 2λ . (8)
6

The system always has ν− ≤ 0, however the sign of ν+ depends on the rate parameters and the
removal constant, λ . If ν+ > 0, then the system has no steady state and both the mass and the
number of aggregates increase exponentially. However, for ν+ < 0 there exists a steady state
solution for t → ∞, q∗ = −A−1b.
At this steady state we can also find the average aggregate length, l ̄∗, by taking the ratio of mass
and number concentrations, this is
l ̄∗ = M∗
P∗ = 2k+m0 + ncλ
λ + (nc − n2)k2mn2
0
. (9)
The stability and steady-state length of the system is independent of the primary nucleation rate.
However the primary nucleation rate does affect the steady state aggregate mass, M∗,
M∗ = knmnc
0 (2k+m0 + ncλ )
λ 2 − k2mn2
0 (2k+m0 + n2λ ) . (10)
Given a set of rate constants we define the critical removal, λ (crit), that determines whether or
not the aggregate mass is finite as t → ∞. Solving (8) for ν+ = 0 gives
λ (crit) = 1
2 k2mn2
0 n2 +
q
8k+k2mn2+1
0 + n2k2mn2
0
2 . (11)
For λ > λ (crit) the system approaches a finite steady state and when λ < λ (crit), we have runaway
aggregation where the mass of aggregates grows exponentially as M(t) ≈ M(t = 0)eν+t.
However, to understand how a system switches between these two states, a more useful in
terpretation is to fix the removal rate and determine the maximum monomer concentration that
leads to a steady state solution. The rate of aggregate formation increases as the monomer con
centration increases, whereas the removal rate is unaffected. Thus we expect a transition from a
system that has a steady-state solution to one that undergoes runaway aggregation as the monomer
concentration increases. The critical stability condition is
−2k2k+mn2+1
0 − n2k2λ mn2
0 + λ 2 = 0 (12)
which has exactly one positive solution that defines the critical monomer concentration m(crit)
0 . At
monomer concentrations above m(crit)
0 the system undergoes runaway aggregation and below m(crit)
0
the aggregate mass approaches a steady state. Viewing the transition in terms of the monomer
concentration is a useful new perspective as the monomer concentration is an alternative accessible
therapeutic target compared to the removal rate, and corresponds to new treatment technologies,
such as antisense oligonucleotides, that alter the expressed monomer protein m011,13.
7

0.0 0.2 0.4 0.6 0.8 1.0 m0 (M) 1e 6
0.0
0.2
0.4
0.6
0.8
1.0
M (M)
1e 6
m(crit)
0
123
a
Analytic Solution Numerics Unstable Region
0123456 P (M) 1e 9
0.0
0.2
0.4
0.6
0.8
1.0
M (M)
1e 6
1
b
m0 < m(crit)
0
0123456 P (M) 1e 9
0.0
0.2
0.4
0.6
0.8
1.0
M (M)
1e 6
2
c
m0 < m(crit)
0
0123456 P (M) 1e 9
0.0
0.2
0.4
0.6
0.8
1.0
M (M)
1e 6
3
d
m0 > m(crit)
0
FIG. 2. Exact steady states and dynamics for the unbound removal model. (a) The steady state aggregate
mass diverges as the monomer concentration approaches the critical value, m(crit)
0 ≈ 7.21 × 10−7M, and
for larger monomer concentrations the system undergoes runaway aggregation. The steady state aggregate
mass from the numeric scheme agrees well with exact solution. (b)-(d) Show the flow of M and P, given by
(6), at different monomer concentrations. When m0 < m(crit)
0 the flows approach a steady state, shown in (b)
with m0 = 3 × 10−7M and (c) 6 × 10−7M. When m0 > m(crit)
0 , both M and P grow exponentially, as shown
in (d) with 9 × 10−7M. System parameters: kn = 4800.0M−1hr−1, k+ = 1.2 × 108M−1hr−1, n2 = 2, nc = 2,
λ = 1.0hr−1, k2 = 1.1 × 1010M−2hr−1. Simulation parameters: dt = 0.001hr, T = 1500.0hr, N = 10000.
The top left panel of Fig. 2 shows the steady state aggregate mass concentration as a function
of the monomer concentration. At m(crit)
0 , the steady state aggregate mass diverges and the shaded
region shows the pathological state, in which the aggregates will proliferate exponentially. In
addition to identifying which cell systems we expect to be healthy or in disease, this representation
8

provides a clear visualisation into how transitions between these two cell states take place. It is
also a useful representation to generalise and compare different models and we will use it to do so
extensively in the remainder of this work (see Section IV). The predicted steady state aggregate
mass was verified by numerical simulations, where we evolved a population of aggregates with
a finite maximum length, according to (5) (see Appendix A). In the remaining panels (b)-(c), we
show the flow of the first two moments of the length distribution as they approach equilibrium for
three specific values of m0. In particular, we note that when a steady state exists, (b) and (c), the
fixed point is a global attractor. When m0 > m(crit)
0 there is no positive fixed point, and the long
time behaviour of q is determined by the eigenvector of A corresponding to the positive eigenvalue
ν+. The ratio of the components of this eigenvector gives the average length for high aggregate
mass, which is
l ̄ =
m− n22
0
q
k2n2
2mn2
0 + 8k+m0 + √k2n2
2√k2
. (13)
On average fibrils are many hundreds to thousands of monomers long, so we expect the rate of
growth of existing fibrils to be significantly faster than the nucleation of new fibrils, i.e. k2mn2
0≪
k+m0 and thus l ̄ ≈
q
2k+m0/k2mn2
0
23. When n2 = 2 the flow converges onto the line M/P =
p2k+/k2m0 and Fig. 2(d) begins to show this behaviour at high aggregate concentrations.
B. A maximum cellular removal capacity reveals a cell-level bistability
The proportional removal described above gives rise to an analytically solvable model that pro
vides insight into the role of removal in neurodegenerative diseases. However, it is limited in its
ability to describe the reality of living systems, because it assumes removal is infinitely efficient.
As the aggregate mass increases, the proportional removal rate would therefore also increase with
out bound. However, active removal requires both energy and the availability of specific biomolec
ular machinery, for example to expel aggregates from a cell or to break the monomer-monomer
bonds. Both the energy resources and molecules of the clearance machinery available to a cell
are finite, imposing a fundamental limit on the maximum removal rate. Furthermore, aggregates
may also induce toxic effects on the cell, creating feedback that impairs the efficiency of removal
mechanisms24. We build on the model developed in Section III A by considering more realistic
kinetics and show how these naturally impose an upper limit on the removal rate.
The specific functional form governing the kinetics of aggregate removal determines how the
9

rate approaches its upper limit. For now, we assume that the removal process follows enzyme
like kinetics, and investigate generalisations of this mechanism in later sections. As an example,
in the ubiquitin (Ub)-proteasome system, aggregates are tagged with Ub, unfolded, and subse
quently cleaved by the proteasome. Similarly, in chaperone-mediated autophagy, chaperones de
liver aggregates to lysosomes for degradation25,26. Both processes can be modelled as involving
an essential removal component (E), such as Ub or a chaperone, that binds to aggregates, forms a
removable complex, and is then recycled back into the system.
For an aggregate Ai, of length i and a removal component E, the removal reaction can be
modelled as a typical catalytic reaction
Ai + E kib
−−⇀
↽−−
kid Ci
kc
i
−−→ E + Removal Products (14)
where kb
i and kd
i are the binding and dissociation rates of the aggregate and removal components
and kc
i is the rate constant describing the removal of the aggregate. The concentration of Ai is
given by f (t, i) and the concentration of E is fe(t). The removal component binds to an aggregate
of size i to form a complex Ci, with concentration ci(t), which can either dissociate or be broken
down and removed.
This setup is similar to the Michaelis–Menten (MM) description for reactions kinetics where
the E component is the enzyme and the aggregate is the substrate. However, we now have a series
of different sized aggregates that can in principle all compete for the same removal component.
We can calculate the expected rates in the system in the same way as the single substrate analysis:
assume that the total E component in the system is constant, feT = fe(t) + ∑i ci(t), and that the
aggregate binding is at equilibrium for all lengths, kb
i fe(t) f (t, i) = kd
i ci(t). From these expressions,
we obtain
ci(t) = f T
e
kb
i kd
i

  
f (t, i)
1 + ∑ j f (t, j) kb
j
kd
j

  
. (15)
Factors that reduce the systems ability to remove aggregates, such as ageing, can easily be mod
elled by a decrease in feT . The removal of aggregates of size i in the master equation is λi = kc
i ci(t).
In general this functional form will prevent us from obtaining a closed pair of moment equations.
However if we assume that the rates are independent of aggregate size, kc
i = kc, kb
i = kb and kd
i = kd,
then the master equations reduce to the typical MM kinetics, as all aggregates act effectively as the
same single substrate species (generalisations of this, for example taking into account increased
10

probability of binding for larger aggregates, are discussed below). Following this assumption, we
obtain the following system of moment equations with modified removal:
dM
dt = ncknmnc
0 + n2k2mn2
0 M + 2k+m0P − λ M
1 + P/Kλ ,P
(16)
dP
dt = knmnc
0 + k2mn2
0 M− λP
1 + P/Kλ ,P
, (17)
where we have defined λ = kc feT (t)kb/kd and Kλ,P = kd/kb. At low aggregate concentrations,
when P ≪ Kλ,P, the removal is proportional to the concentration as before, with an equivalent
number removal rate ≈ λ P as in the proportional removal case. However for high aggregate
concentrations P ≫ Kλ,P, the removal saturates with a maximum number removal rate λ Kλ,P.
Solving for the steady state of the system, dM/dt = dP/dt = 0, gives three sets of solutions
for (M∗, P∗). For typical system parameters at low monomer concentration, two of these sets have
real positive solutions for both M∗ and P∗. However, as the monomer concentration increases, it
reaches a critical monomer concentration where these two solutions undergo a saddle-node bifur
cation and merge, such that for monomer concentrations above this critical value there no longer
exists a positive steady state, as shown in Fig. 3(a). This parallels the behaviour described above
for proportional removal with no maximum rate: when the monomer concentration is large we
expect the mass of aggregates in a system to exhibit runaway growth. However, below this critical
monomer concentration the introduction of a maximum removal rate alters the behaviour signifi
cantly. There are now two solutions for (M∗, P∗) with the lower one corresponding to an attractive
fixed point and the upper one to a repulsive one . Panel (b) of Fig. 3 plots the flow of M and P and
shows the basin of attraction of the fixed point. Systems that are below the critical monomer con
centration, but outside the basin of attraction will still display runaway aggregation. Physically,
this corresponds to a system in which the aggregate load is so high that the limited removal rate
cannot keep up, despite the monomer concentration being below its critical value.
In practice, this means that even at a low monomer concentration, below the critical concentra
tion, the introduction of preformed aggregates can result in runaway aggregation. This of course
corresponds to the widely observed seeding phenomenon, where cells are exposed to preformed
aggregates, triggering the transition into the pathological runaway aggregation state16,27,28.
The above description also allows us to understand how the size distribution of these preformed
fibrils affects whether or not a system will transition into the unstable region. For example, the
introduction of a few long aggregates might not trigger runaway aggregation whereas an equiva
11

lent mass of many short aggregates would. Aggregates of different lengths are being removed at
the same rate, but the same mass of smaller aggregates induce faster fibril growth, due to more
growing ends. If removal processes display a different length bias, it will be reflected in the length
dependence of this seeding effect. The shape of the stable region in the M − P plot (Fig. 3b) high
lights this fact. This length dependence is thus useful both to understand seeding experiments in
vivo and to investigate the properties of the removal process. It is important to not only control the
total mass of aggregates added but also to control the length distribution of aggregates that will be
used to seed a system to investigate the in vivo dynamics. A different length distribution, but the
same aggregate mass, can in fact alter the fate of identical cells and so conclusions drawn from
comparing the aggregation kinetics with uncontrolled length distributions may be misleading.
The length dependence of seeding may also have consequences in the spreading of pathology
within the brain. The prion-like hypothesis suggests that pathological aggregates can be trans
ported (either actively or passively) into neighbouring brain regions, seeding these regions and
causing the formation of new aggregates, leading for example to Braak staging in Parkinson’s
Disease29. The general connectivity between different regions of the brain has been explored as
driving the spread of pathology30,31. Given the length-dependent seeding suggested here, a better
understanding of the different transport properties of different aggregate sizes will enable a more
accurate modelling of the spread of the disease through these connections. For example, short ag
gregates might be expected to diffuse faster and thus be transported between regions more quickly.
This length-dependent transport can significantly alter the rate at which the disease spreads, or ex
aggerate the spreading effects of certain transport mechanisms. This is a similar mode of action to
dimeric enzymes that can experience enhanced reactivity by dissociating into monomers, diffusing
at a faster rate, and dimerise again to carry out function32.
C. Monomer-aggregate phase plane captures key features of aggregation dynamics
The long-time dynamics of aggregates determines whether a cell is in a low aggregate steady
state, which we here call healthy, or in a state of runaway aggregation, which we here also refer to
as pathological. Thus, understanding whether specific parameter values lead to stable or runaway
aggregation is key to understanding disease dynamics and in particular the onset and incidence
of disease. To provide an easily interpretable overview of the possible system behaviours, we
project the full system dynamics onto a two dimensional phase plane defined by the monomer and
12

0.0 0.2 0.4 0.6 0.8 1.0 m0 (M) 1e 6
0.0
0.2
0.4
0.6
0.8
1.0
M (M)
1e 5
a
l = 2k + /k2m0 Cubic Solution
0123456 P (M) 1e 8
0.0
0.2
0.4
0.6
0.8
1.0
M (M)
1e 5
b
FIG. 3. Exact steady states and dynamics for the MM-like removal model. (a) Steady state values of
M are plotted for both the full cubic system given by (16) and (17) as well as the reduced model with
l ̄ = p2k+/k2m0, (19). The shaded region indicates the unstable region of the reduced model and the
stability boundary from numerics are shown for two different values of l ̄ of the seed. (b) The flow of M
and P, given by (16) and (17), with 3.5 × 10−7M. Additional system parameters are: kn = 5000.0M−1hr−1,
k+ = 1.2 × 108M−1hr−1, n2 = 2, nc = 2, λ = 2.5hr−1, Kλ,P = 1.0 × 10−8M, k2 = 4.0 × 1010M−2hr−1.
Simulation parameters: dt = 0.001hr, T = 100.0hr N = 10000.
aggregate concentrations, as detailed in the following.
When the aggregate removal and other rates are prescribed, the system and its dynamics are
determined by three variables, M, P and m0. In the current limit, we model m0 as unaffected by
the aggregation kinetics, however we keep the monomer concentration as a system variable so that
this framework can be applied to study monomer reducing therapies.
When the removal is proportional to the aggregate concentration the fate of the system will
be entirely determined by the monomer concentration (Section III A, Fig. 2). We can reduce the
three variable description (M, P and m0) to a two parameter description by prescribing the average
length of the aggregates, l ̄. In the case of unbounded proportional removal, the steady state is
given by q = A−1b and so an obvious choice for l ̄ is to choose the steady state value, l ̄∗ = M∗/P∗,
given by (9), which exactly recovers the same steady state mass (M∗) as the full model. With this
assumption, the evolution equation for M becomes
dM
dt = ncknmnc
0 + n2k2mn2
0 M + 2k+m0M/l ̄∗ − λ M. (18)
13

0.0 0.2 0.4 0.6 0.8 1.0 m0 (M) 1e 6
0.0
0.2
0.4
0.6
0.8
1.0
M (M)
1e 5
a Constant
Removal
0.0 0.2 0.4 0.6 0.8 1.0 m0 (M) 1e 6
0.0
0.2
0.4
0.6
0.8
1.0
M (M)
1e 5
b MM Removal
FIG. 4. Flow in the m0 − M plane (both expressed in molars M) from the reduced models for constant and
enzyme-like removal kinetics. The background colour shows the direction of the flow. (a) Reduced model
from (18) with kn = 4800.0M−1hr−1, λ = 1.0, k2 = 1.1 × 1010M−2hr−1 and l ̄∗ from (9). (b) Reduced model
from (19) with kn = 5000.0M−1hr−1, λ = 2.5hr−1, Kλ,P = 1.0 × 10−8M, k2 = 4.0 × 1010M−2hr−1 and
l ̄ = p2k+/k2m0. Additional system parameters in (a) and (b) are n2 = 2, nc = 2, k+ = 1.2 × 108M−1hr−1.
This system is now one dimensional, but it is useful to see it in the plane (m0, M) by adding the
equation dm0/dt = 0. This reduced system captures the key features of the aggregation kinetics:
the approach to the steady state for m0 < m(crit)
0 and runaway aggregation for m0 > m(crit)
0 . A phase
plane analysis of this model clearly shows the dynamics and the emergence of the stability as
shown in Fig.4(a). The average length assumption projects the two dimensional M − P plane flows
onto a line in M − P space, shown by the dotted line in Fig. 2(b) and (c). The key features of the
dynamics are well captured by the projection onto this line.
We can similarly reduce the system to a two-parameter description when the removal is
bounded to give
dM
dt = ncknmnc
0 + n2k2mn2
0 M + 2k+m0M/l ̄− λ M
1 + M/l ̄Kλ,P
. (19)
However, the transition to disease occurs at high aggregate mass and so we use the average length
for large aggregate mass given by (13). The fixed points of this reduced system are given by a
quadratic equation in M which leads to two steady states when m0 is low and no steady states when
m0 is high. This reduced model captures the key features of the full model, with the existence of
a stable and unstable fixed point and a critical monomer concentration. However, the exact value
14

at which this bifurcation occurs is slightly perturbed in the reduced model compared to the full
model. This is due to the approximation for l ̄ being accurate only when the aggregate steady state
mass is large and, indeed, Fig. 3 shows that the two models agree well in this region.
The fate of the system now depends on both the monomer concentration and the aggregate
mass. The system is only stable, and therefore healthy, if both the monomer concentration and
aggregate mass are low. Intuitively this dependence on the aggregate mass makes sense. If there
are more aggregates (number and mass) in the system, then the rates of secondary nucleation
and elongation will increase. When the aggregate removal rate is high enough to outcompete
these effects, the aggregate mass/number is reduced and approaches a steady state value where the
production and removal are balanced. For very large aggregate mass/number, the production rates
of aggregates continue to increase with increasing aggregate mass/number, however for physically
realistic models of removal mechanisms the removal rate of aggregates will begin to saturate and
at some point will no longer be able to balance the aggregate production/elongation rates, leading
to runaway aggregation.
These reduced dynamics show the different mechanisms through which a system can transition
from a healthy state into a pathological state. A stable steady state could transition to runaway
aggregation if the monomer in the system was increased beyond the critical value. Alternatively,
the sudden introduction of aggregate mass would cause the system to move upwards on the phase
plane and cross into the unstable regime. This transition can only occur when a system allows
for both stable or unstable states at the same monomer concentration. Such a system could also
transition from an unstable to a stable state by removing aggregate mass from the system (moving
down on the phase plane). This is likely to be hard to achieve therapeutically. However changes in
monomer concentration, moving the left on the phase plane and hopefully into the stable region,
can be achieved through monomer reducing therapies11. How much of an intervention is required
to cause a system to change state depends on the aggregate mass in the system and so this suggests
that such therapies would only be effective at early time after the transition to disease, when
the aggregate mass is still small. This reduced parameter system provides a useful perspective
to discuss the landscape of NDDs and captures the effects of seeding and monomer reduction
therapies.
15

IV. PHASE-PLANE STRUCTURE IS PRESERVED ACROSS AGGREGATION AND
REMOVAL KINETICS
When developing the model of bounded removal in Section III B we focused on the kinetics of
an enzyme-like mediated removal mechanism with binding rates independent of aggregate size.
Crucially, this model predicts an upper unstable branch in the phase plane of the M − m0 dynamics,
i.e. that the introduction of seeds can push the system to runaway aggregation even below the
critical monomer concentration.
This phenomenon is generic and found in a larger class of aggregation and removal mechanisms
that all share the same bifurcation structure. To demonstrate the wide scope of this theory, we
show that this bifurcation structure is preserved for a range of different removal mechanisms, with
different functional dependence, and for a variety of aggregation kinetics. We overview these
different mechanisms below and plot the resulting phase planes in Fig 5. Table I summarises the
different models.
A. Generalised models of aggregate removal
1. Enzyme-like kinetics saturating in aggregate mass
In Section III B we assumed that the binding rate, kb
i , dissociation rate, kd
i and breakdown rate
kc
i were constant. With these assumptions, the net aggregate removal followed MM kinetics, with
the rate saturating for high aggregate number concentration, P. Different assumptions can be
made about the length dependence of the rates, we now showcase that the characteristic shape of
the phase plane is maintained also under different assumptions. Specifically, when kb
i /kd
i ∝ i and
kc
i ∝ i−1, we again recover MM kinetics. However, in this case, the rate saturates with respect to
the aggregate mass concentration, M. This scaling is inspired by a binding-and-removal model,
where a removal component is more likely to bind to larger aggregates. However, the monomer
monomer bonds are cleaved at a constant rate, and the time to remove the whole aggregate is
thus proportional to its size. The removal rates for the number and mass concentrations are now
λ P/(Kλ,M + M) and λ M/(Kλ,M + M) respectively. Setting kb
i /kd
i = β i and kc
i = γi−1 we find
λ = β γ feT (t) and Kλ,M = β −1. The reduced model for the system is
dM
dt = ncknmnc
0 + n2k2mn2
0 M + 2k+m0M/l ̄− λ M
1 + M/Kλ ,M
. (20)
16

Model Name Reduced dM/dt Phase Plane Constant Removal ncknmnc
0 + n2k2mn2
0 M + 2k+m0M/l ̄∗ − λ M Fig.4(a)
MM Removal ncknmnc
0 + n2k2mn2
0 M + 2k+m0M/l ̄− λM
1+M/l ̄Kλ ,P
Fig.4(b)
Mass Saturating (MM) ncknmnc
0 + n2k2mn2
0 M + 2k+m0M/l ̄− λM
1+M/Kλ,M Fig.5(a)
Combination Removal ncknmnc
0 + n2k2mn2
0 M + 2k+m0M/l ̄− λ M (1 − α) + α
1+M/l ̄Kλ ,P
Fig.5(b)
Overlapping Aggregates ncknmnc
0 + n2k2mn2
0 (M − ρM2) + 2k+m0(M − ρM2)/l ̄− λM
1+M/l ̄Kλ ,P
Fig.5(c)
Conserved Protein nckn(mtot − M)nc + n2k2(mtot − M)n2 M + 2k+(mtot − M)M/l ̄− λM
1+M/l ̄Kλ ,P
Fig.5(d)
No Self-Replication ncknmnc
0 + 2k+m0P(M) − λ M
1+M/Kλ,M Fig.5(e)
Fragmenting ncknmnc
0 + 2k+m0M/l ̄− λ M
1+M/l ̄Kλ ,P
Fig.5(f)
TABLE I. Summary of different systems across aggregation and removal kinetics.
The reduced dynamics for this model are shown in Fig. 5(a) and maintain the characteristic
shape.
2. Multiple removal mechanisms
We expect that the complex regulation of living systems will result in multiple mechanisms to
remove aggregates, each with potentially different kinetics and saturation behaviour. Again, when
the aggregation rates outpace the removal mechanisms we recover the same bifurcation structure.
Consider for instance, the case of a system combining a removal proportional to mass and a MM
like removal that saturates in aggregate number (the removal mechanisms in (18) and (19)). At
low aggregate mass, the rate is proportional, with constant λ . We denote the relative contribution
of the saturating mechanism with α. The combination of these two removal mechanisms means
that we find that the bifurcation point moves to a higher monomer concentration compared to
each removal mechanism separately, but that the bifurcation structure remains unchanged, as can
be seen in Fig. 5(b). At low monomer concentration, we have global stability due to constant
removal, which for higher monomer concentrations is outpaced by aggregation and the MM-like
removal gives the familiar stability structure. The reduced model for this system is
dM
dt = ncknmnc
0 + n2k2mn2
0 M + 2k+m0M/l ̄
− λ M (1 − α) + α
1 + M/l ̄Kλ,P
!
.
(21)
This combination model is shown in Fig. 5b and again displays the same characteristic phase
plane.
17

0.0 0.2 0.4 0.6 0.8 1.0 m0 (M) 1e 6
0.0
0.2
0.4
0.6
0.8
1.0
M (M)
1e 5
a Mass Saturating
(MM)
0.0 0.2 0.4 0.6 0.8 1.0 m0 (M) 1e 6
0.0
0.2
0.4
0.6
0.8
1.0
M (M)
1e 5
b Combination
Removal
0.0 0.2 0.4 0.6 0.8 1.0 m0 (M) 1e 6
0.0
0.2
0.4
0.6
0.8
1.0
M (M)
1e 5
c Overlapping
Aggregates
0.0 0.5 1.0 1.5 2.0 mtot = m0 + M (M) 1e 5
0.0
0.2
0.4
0.6
0.8
1.0
M (M)
1e 5
d Conserved
Protein
0.0 0.2 0.4 0.6 0.8 1.0 m0 (M) 1e 6
0.0
0.2
0.4
0.6
0.8
1.0
M (M)
1e 5
e No Self
Replication
0.0 0.2 0.4 0.6 0.8 1.0 m0 (M) 1e 6
0.0
0.2
0.4
0.6
0.8
1.0
M (M)
1e 5
f Fragmenting
FIG. 5. Reduced dynamics for the generalised models. The flows in the different plots are given by (a) (20)
with λ = 2.5hr−1, Kλ,M = 5.0 × 10−6M (b) (21) with λ = 3hr−1, Kλ,P = 1.0 × 10−8M, α = 2/3 (c) (22)
with λ = 2.5hr−1, Kλ,P = 1.0 × 10−8M, ρ = 1 × 105M−1 (d) (24) with λ = 250hr−1, Kλ,P = 2.0 × 10−8M.
Additional system parameters in (a)—(d) are kn = 5000.0M−1hr−1, k+ = 1.2 × 108M−1hr−1, nc = 2, n2 = 2,
and k2 = 4.0 × 1010M−2hr−1. l ̄ = p2k+/k2m0 in (a)—(c) and l ̄ = p2k+/k2mtot in (d). Flows given by
(e) (27) with kn = 5000M−1hr−1, k+ = 5 × 107M−1hr−1, nc = 2, λ = 1hr−1, Kλ,M = 1.5 × 10−6M, P =
q
Mknmnc−1
0 /k+ and (f) (28) with k− = 0.0075hr−1, kn = 50000M−1hr−1, k+ = 2 × 108M−1hr−1, nc = 2,
λ = 2hr−1, Kλ,P = 2.0 × 10−8M and l ̄ = p2k+m0/k−
18

B. Generalised models of aggregation
1. Finite disease steady state from aggregate clumping
When a cell is in the pathological state the aggregate mass grows exponentially. However
for a cell of finite volume and limited resources this growth can only take place for finite time.
Autopsy data show that diseased cells are often full of aggregates (for example see coronal and
sagittal planes33 and aggregate renders34) and so at some point the aggregate mass approaches
a cellular carrying capacity. One of the potential contributors to this carrying capacity is the
fact that, as the aggregate concentration increases, multiple aggregates may touch or overlap and
disrupt the elongation and self replication processes. We now focus on this process as an example,
to show the key parts of the bifurcation structure are preserved. If we assume that each aggregate
is independently distributed within the volume of the cell, then we expect the probability of two
aggregates being separated by a distance less than some threshold to increase as M2 and so the
aggregation kinetics with this correction to account for inactive aggregate surface becomes
dM
dt =ncknmnc
0 + n2k2mn2
0 (M − ρM2)
+ 2k+m0(M − ρM2)/l ̄− λ M
1 + M/l ̄Kλ,P
(22)
where ρ is the overlap constant. Fig. 5c shows the reduced dynamics for this system which ap
pear similar to the ones found before, however there is now a pathological stable branch at high
aggregate concentrations. For very low monomer concentration there is only one steady state as
the removal mechanisms can keep up with the aggregation and the steady state is determined by
the balance of aggregation and removal. For intermediate monomer concentrations, there is still a
stable steady state at low aggregate concentrations, however, for larger aggregate mass the crowd
ing effects slow the rate of aggregation, resulting in a second stable steady state. Above the critical
monomer concentration, there is only a high aggregate mass, pathological steady state, which is
globally attracting. We interpret this exactly as before, however now the aggregate mass in the
pathological state is finite at some high aggregate mass, which is more consistent with finite-size
cells and parallels what is seen in human pathology. The kinetic model in (22) achieves a bound on
aggregate mass by considering a reduced aggregate surface due to overlaps, however other mech
anisms, such as a reduction in the monomer production rate, may reduce the aggregation rate and
similarly result in a maximum aggregate mass. The exact molecular mechanisms do not affect the
19

observed macroscopic phenomena, but might slightly alter the concentrations at which transitions
between the system states occur.
An special case to note here is the situation when the carrying capacity is below the concen
tration at which removal mechanisms become overwhelmed. In that case the seeding effect will
disappear, i.e. the low aggregate stable branch smoothly becomes the high aggregate mass stable
state, with no bifurcation, and for all monomer concentrations there is only one steady state in the
system. In the above example of clumping, this happens when critical point from the balance of
removal and aggregation (the lower turning point on the ‘S’ curve) would occur above the satu
rating effects due to clumping, M ≈ ρ−1. We can approximate the aggregate mass at which these
effects occur (see See Appendix C) and derive the following condition for the seeding transition
to occur
ρ−1 > 2k+Kλ ,P
λ
λ2
2k2k+
1 1+n2
. (23)
2. Constant total protein
The models of aggregation considered so far assume constant free monomer concentration
in the cell, motivated by cellular homeostasis regulating this concentration. The opposite limiting
behaviour is to assume the aggregation kinetics are much faster than the expression of the monomer
and so the total protein in the system, mtot = M + m is constant. Most real cellular systems will lie
on the spectrum between these two extremes. Assuming the MM-like removal mechanism, the rate
of change of aggregate mass is still given by (19) and substituting m0 = mtot − M, so that M ̇ = −m ̇ .
This corresponds to removal mechanisms converting the aggregated mass back into monomer to
conserve total protein. The dynamics of the new reduced model can be seen in a phase plane of M
and mtot shown in the Fig. 5(d). The equation describing the system is
dM
dt = nckn(mtot − M)nc + n2k2(mtot − M)n2M
+ 2k+(mtot − M)M/l ̄− λ M
1 + M/l ̄Kλ,P
,
(24)
where l ̄ is the average aggregate length assumed to be established early in the aggregation dynam
ics, so that l ̄ = p2k+/k2mtot.
Since M ̇ = −m ̇ , the effects of the conserved total protein will be seen when the aggregate mass
concentration is of the same order of magnitude as the monomer concentration. We choose rate
parameters o demonstrate this coupling and show a wide range of total aggregate mass. The, by
20

definition, unfeasible region where M > mtot is included but left blank. From Fig. 5(d) it can
be seen that system dynamics for conserved total protein has similar structure to the Fig. 5(c),
except with an increasing upper branch. The upper branch for large monomer concentration has
almost all protein in the aggregated state. Seeding this system with a mass concentration of seeds,
Mseed increases both the mass concentration M → M + Mseed and the total protein concentration,
mtot → mtot + Mseed and so corresponds to a diagonal upwards-right move on the phase plane.
This model, (24), and the model in (19) represent two distinct regimes: the aggregation kinetics
are much faster than the homeostatic mechanisms or the inverse. The full system is likely to couple
these timescales. In this case,the arrows in the phase planes will be tilted rather than vertical. It
is harder to determine the fate of the system from the coupled dynamics, but by considering the
two limiting regimes we recover the same macroscopic behaviour and features of the phase plane,
indicating that they will also be retained at intermediate points.
3. Systems without self-replication
We also consider the case of aggregating systems with no self-replication6, corresponding to
k2 = 0. In these systems, there also exist parameter regimes that exhibit the same phenomenology
as the models discussed above. However, the seeding behaviour is only observed when the sys
tem saturates with increasing mass concentration, rather than saturating by increasing aggregate
number concentration. Simply setting k2 = 0 and using the number saturating kinetics, given by
equation (17) we find that when λ > knmnc
0 their exists a finite stationary aggregate number and
mass concentration given by
P∗ = Kλ ,Pknmnc
0
λ − knmnc
0
(25)
and
M∗ =
Kλ ,Pkn k+m1+nc
0 Kλ ,P + 2λ mn2
0 − 2knmnc+n2
0
λ − knmnc
0
2 . (26)
This steady state is attracting for all initial values of M and P. When λ < knmnc
0 , M and P increase
without bound. Phenomenologically, this creates a similar transition from the healthy to the patho
logical state as observed in the case of unbounded, proportional removal, as there exists a critical
monomer concentration that switches the state of the system for all values of the initial aggregate
mass.
However, when the removal saturates in M as described in Section IV A 1 then the model shows
21

seeding susceptibility: the system stability depends on the initial aggregate distribution. The equa
tion describing the reduced model is
dM
dt = ncknmnc
0 + 2k+P(M) − λ M
1 + M/Kλ ,M
(27)
where P is a function of M, which is needed to reduce the dynamics. In the other reduced mod
els, this was done by assuming some constant average length derived from the large aggregate
limit. Here, when there is no self-replication, the length distribution does not reach a steady
state and thus does not have a constant average length. We use instead the approximation that
P=
q
Mknmnc−1
0 /k+ (see appendix D). Nonetheless, this still produces the same bifurcation struc
ture as before in the reduced monomer-aggregate phase plane (see Fig. 5(e)). Therefore, systems
that lack self-replication may not display a seeding effect.
4. Systems with fragmentation
We now consider a system where the only self-replication is due to fragmentation, setting k2 = 0
and k− ̸= 0. The reduced model for this system becomes
dM
dt = ncknmnc
0 + 2k+m0M/l ̄− λ M
1 + M/l ̄Kλ,P
. (28)
The fragmentation rate affects the dynamics by altering the length distribution with the average
length being given by l ̄= p2k+m0/k−, which similarly to before is a good approximation at large
aggregate mass. Again, these aggregation kinetics give the same bifurcation structure as before,
see Fig. 5(f).
C. Sufficient conditions for bistability and seeding transition
Comparing a range of aggregate production/removal kinetics reveals two sufficient conditions
that give rise to the observed disease phenomena. Specifically, we find bistability and the seeding
transition in systems that have:
1. A self-replicating aggregation mechanism with a monomer concentration-dependent rate;
and
2. A limited capacity aggregate removal mechanism.
22

0.0 0.2 0.4 0.6 0.8 1.0 m0 (M) 1e 6
0.0
0.2
0.4
0.6
0.8
1.0
M (M)
1e 5
a = 50.0
Stable Unstable
0.0 0.2 0.4 0.6 0.8 1.0 m0 (M) 1e 6
0.0
0.2
0.4
0.6
0.8
1.0
M (M)
1e 5
b = 100.0
Stable Unstable
0.0 0.2 0.4 0.6 0.8 1.0 m0 (M) 1e 6
0.0
0.2
0.4
0.6
0.8
1.0
M (M)
1e 5
c = 200.0
Stable Unstable
0.0 0.2 0.4 0.6 0.8 1.0 Critical m0 1e 6
0
50
100
150
200
250
d
Clearance Rate = i 1
Q 1 = P2M 1
FIG. 6. Comparison of the stability of aggregating systems with length-dependent removal, given by (29).
(a)-(c) Summarise the results from numeric simulation for different removal rates, and shows the stability
boundary occurs at a critical monomer concentration with no seeding transition (each points is a unique
simulation). (d) The critical monomer concentration at which runaway aggregation occurs is shown for
different λ for both the simulation results and the analytic approximation. The initial aggregate mass sim
ulated is M = 5 × 10−5M. The other system parameters are kn = 4800M−1hr−1, k+ = 1.2 × 108M−1hr−1,
nc = 2, n2 = 2, k2 = 1.1 × 1010M−2hr−1, and ν = −1. The threshold to determine if the aggregation was
bounded is 1 × 10−3M. The simulations used N = 10000, dt = 0.001hr, and T = 1000hr.
Different molecular processes can satisfy these constraints. These two conditions naturally emerge
from considering the universal features of aggregate formation6 and the physical constraints on
the aggregate removal mechanisms. Additionally, other regimes, for example a system with no
self-replication, as in Section IV B 3, can still show the same stability structure. Moreover, feed
back from, for example, aggregate toxicity or damage to vasculature24 can limit the capacity of
aggregate removal mechanisms, similar to the removal mechanisms that require an intermediary
clearance component, such as the Michealis-Menten mechanisms discussed above.
23

V. LENGTH-DEPENDENT REMOVAL ALONE DOES NOT YIELD CELLULAR
BISTABILITY
Having discussed the sufficient conditions for bistability and seeding behaviour above, we now
briefly investigate the degree to which these are also necessary conditions. We have already es
tablished that even without self-replication, some systems can show bistability. Another obvious
modification to the above models is to allow the removal rates to depend on the size of the aggre
gates. To illustrate this, we first consider a situation where the rate of removal is reduced for longer
aggregates35. This is also a physically meaningful regime, as longer aggregates may take longer to
clear from living cells and tissue as there are more bonds to break. It is useful to understand if this
extra mechanism will capture the observed seeding behaviour even with an unbounded removal
process; that is, whether a sudden increase in the concentration of aggregates, including longer
and more persistent fibrils, would cause a transition to runaway aggregation even when removal
processes have no maximum capacity. Longer aggregates take more time to clear, so one might
suppose that by the time they are removed from the system, the nucleation and subsequent elon
gation will have already replenished and then increased the concentration of longer aggregates,
leading to positive feedback. However, a detailed mathematical description shows this is not the
case.
We expect the aggregate removal rate to be inversely proportional to the number of bonds,
which in turn is proportional to aggregate length. We assume λi = λ iν f (t, i), where we choose
ν = −1. For the non-fragmenting, non-depolymerising system discussed here (k− = 0, koff = 0),
the master equation for this model is
d f (t, i)
dt = δi,nC knmnC + δi,n2 k2mn2
∞
j=∑nc
j f (t, j)
!
+ 2k+m( f (t, i − 1) − f (t, i)) − λ i−1 f (t, i).
(29)
Unlike the previous removal models, the evolution of the aggregate number, P, depends on the
−1th moment of the length distribution, Q−1 = ∑i i−1 f (t, i). This does not result in a closed
system of moment equations that can be used to determine the transition to disease. Instead, we
can numerically evolve the system for different initial values of M and m0 and observe the resulting
dynamics. As described in Appendix A we simulate each aggregate population using the master
equation and a fourth-order Runge-Kutta method. When the final aggregate mass, M, is greater
than a threshold value, we label the system as unstable, corresponding to a pathological state.
24

Panel (a)-(c) of Fig. 6 reports the results of these simulations for three different removal rates, λ .
It is interesting to note that this removal mechanism does not exhibit a seeding-like transition. The
stability of a state does not depend on the initial aggregate mass concentration, but exclusively
on the monomer concentration, similar to the case of a length independent constant removal rate
(Section III A).
This effect can be understood mathematically. Since the evolution of all the f (t, i)s defines an
infinite system of linear coupled equations, it only permits one steady state which describes the
stationary length distribution. If this steady state is positive then it will be attractive for all positive
concentrations. If it is not positive, then the aggregate mass concentration will increase without
bound. This argument is general for any proportional removal regardless of the length dependence,
λi = g(i) f (i,t), where g(i) is some length-dependent function.
For ν = −1 the moment equations are not closed, specifically because the evolution of P de
pends on Q−1. For a sharply peaked distribution we can approximate the Q−1 moment by setting
Q−1 = P2/M, equivalent to assuming all aggregates have the same length. The moment equations
then become
dM
dt = ncknmnc
0 + n2k2mn2
0 M + 2k+m0P − λ P (30)
dP
dt = knmnc
0 + k2mn2
0 M − λ P2
M . (31)
These equations permit stationary states, M∗ and P∗, which are positive and real when the system is
stable. For the specific case of nc = n2 = 2, we find that the system is only stable when λ > 2k+m0.
Panel (d) of Fig. 6 demonstrates that this prediction of the critical monomer concentration is a
good approximation to the numerical simulation. This model further generalises the necessity
of a removal mechanism with limited capacity to describe disease relevant phenomena, even for
length-dependent removal mechanisms.
VI. CONCLUSIONS
This work extends the existing in vitro models of pathological protein aggregation to include
physically realistic removal processes that occur in vivo to describe the aggregation state of cells in
living systems. Crucially we showed that typical disease features can be explained when the in vivo
aggregate removal mechanisms have a limited capacity. This is a very natural physical constraint,
and we showed that it holds for a range of specific aggregation and removal mechanisms. The
25

FIG. 7. Schematic of the typical monomer-aggregate phase plane structure highlighting the key features
that govern transitions to disease.
transition to disease via seeding is only predicted when the removal has this limited capacity 
even if the removal mechanisms depend on other system parameters such as the aggregate length
distribution.
This description of a balance between aggregation and active removal complements the sim
pler nucleation-limited descriptions, where there is no significant removal but the production of the
initial aggregate via primary nucleation is so slow that spontaneous formation essentially never oc
curs. Cellular systems in this nucleation-limited regime will behave in the same way as non-living
compartmentalised systems, such as the nucleation of purified protein in micro-droplets36,37: the
dynamics are governed by the stochastic nucleation of random cells38 and are extremely suscep
tible to the introduction of seeds39. Prion diseases are a real life example of such a system. By
contrast, in the more common aggregation-related diseases, such as Parkinson’s and Alzheimer’s
disease, our descriptions are required as removal appears to play a central role, as evidenced by
the fact (1) low aggregate amounts are present even in health17,40, (2) decline in removal mecha
nism with ageing is a risk factor41,42 and (3) aggregates disappear when the aggregation rates are
decreased11,13. To provide a convenient representation of cellular aggregation dynamics, we have
developed a visual representation of monomer-aggregate mass phase planes. Fig. 7 is a scheme
26

showing the characteristic phase plane structure. The stability of a cell is naturally reflected by
the fixed points in this space and these two parameters can capture many relevant disease associ
ated phenomena and effects of therapies. As such, this phase plane is a convenient map to guide
dosing strategies or future therapeutics and we believe it can serve as an easily accessible, central
tool for understanding aggregation in disease. Additionally, working with this reduced dimension
system will be useful in ongoing efforts to connect molecular mechanisms to tissue-wide spread
of disease43,44, without performing full simulation of the entire master equation.
Understanding the magnitude of the competing aggregation and removal processes in vivo is
essential to understanding disease emergence and progression and thus designing effective treat
ment strategies. Our model presents a unified theory that can describe different disease phenom
ena within the same mechanistic framework. As experimental data increases in resolution and
abundance, this theory will enable quantification of the different parameters, allowing comparison
across diseases and predictions of the effectiveness of therapeutic interventions.
Appendix A: Numerical Details
Moving from the master equation to the moment description of the kinetics, we have assumed
the system can support infinite aggregates and, for depolymerising systems, that nc f (t, nc) ≪
M. Numerical simulation of the dynamics of the system at the level of the master equation can
verify that this coarse grained description provides an accurate summary and prediction of the
kinetics. Simulating an infinitely large aggregate presents computational challenges, and so here,
we introduce a maximum aggregate length that does not grow by elongation but is still removed
via the removal mechanisms15. A physical justification behind this assumption is the fact that cells
have a finite size and so cannot support infinitely long aggregates. We use similar values to those
from in vitro measurements of Aβ 4045 and Aβ 4246,47.
We simulate the system by explicitly evolving the aggregate population at each length i for i
from nc to N + nc, where N is a simulation parameter. We prescribe some initial length distribution
at time t = 0 and the system is evolved using a fourth order Runge Kutta method that explicitly
updates the aggregate population at each length at time intervals of dt from t = 0 until t = T , where
again dt, T and the initial length distribution are simulation parameters. The theoretical predictions
describe systems with a maximum length significantly larger than the mean length distribution and
we can additional ensure that any differences between the full and truncated systems are small
27

by ensuring that αN ≪ 1. With the values shown in Fig. 2 and for m0 = 1 × 10−6M we find
that αN = 8.7 × 10−19 and so we expect the truncated system to give good agreement with the
theoretical full infinite system.
Appendix B: Effect of Nucleation Processes on Size Distribution
The effect of secondary nucleation on the average length initially seems confusing, and in par
ticular it might seem strange that the dependence on k2 vanishes when nc = n2, so we briefly
expand on this point here. The mathematical form obtained can be explained as aggregates are
only nucleated at length nc or n2 and the population of aggregates at other lengths decays geo
metrically away from these source terms. When nc = n2 there is only one source term, therefore
the average aggregate length is determined entirely by the rate of decay of the aggregate popu
lation with increasing length. If the nucleation rate were increased, the population at length nc
would increase, and subsequently the population of aggregates of every length would increase
proportionally, however the decay length would remain the same and the average aggregate length
would also be unchanged. For n2 > nc the source term at n2 increases the aggregate population at
large lengths and so increases the average length.
Appendix C: Condition for seeding transition in a system with overlapping aggregates.
We consider the conditions necessary for the seeding transition to occur in a system with over
lapping aggregates (equation 22) to derive an order of magnitude estimate for the presence of
seeding. The transition occurs when the characteristic concentration at which the clearance mech
anisms become overwhelmed (lower bend of the ‘S’) is lower than the characteristic concentration
of aggregation saturation (the upper bend of the ‘S’). The characteristic concentration of aggrega
tion saturation is given by
Mupper ≈ ρ−1. (C1)
The aggregate mass at which the clearance mechanisms start to saturate and thus become over
whelmed is given by
Mlower ≈ Kλ ,Pl ̄. (C2)
The lower bend occurs at the critical monomer concentration, given by λ M ≈ 2k+m0M/l ̄ (as
suming that elongation is the major driver of aggregate mass increase). Combining this with the
28

approximate solution for aggregate length l ̄ =
q
2k+/(k2mn2−1
0 ), we find that at m(crit)
0 the average
aggregate length is
l ̄lower = 2k+
λ
λ2
2k2k+
1 1+n2
(C3)
Thus, we only get the two separate regimes, and the S-shape, when Mupper > Mlower. This gives
the condition for the seeding transition in this system as
ρ−1 > 2Kλ ,Pk+
λ
λ2
2k2k+
1 1+n2
. (C4)
Important to note is that the left hand side of this inequality is exclusively determined by the typical
scale of the cellular carrying capacity so can be easily modified to other kinetic models.
Appendix D: Length distribution with no self-replication
We consider a system in which there is no self-replication, new aggregates are produced only
from the primary nucleation step and are removed according Michaelis-Menten kinetics that satu
rate in the aggregate mass. The moment description is
dM
dt = ncknmnc
0 + 2k+m0P − λ M
1 + M/Kλ ,M
(D1)
dP
dt = knmnc
0 − λP
1 + M/Kλ ,M
. (D2)
When the system is unstable, either due to system parameters or the initial aggregate concentration,
then the aggregation will grow without bound. When M, P and the average aggregate length are
very large the moment dynamics become
dM
dt ≈ 2k+m0P (D3)
dP
dt ≈ knmnc
0 (D4)
which, after a long time, gives
M ≈ k+knmnc+1
0 t2 (D5)
P ≈ knmnc
0 t (D6)
and thus P ≈
q
Mknmnc−1
0 /k+.
29

REFERENCES
1Chiti, F. & Dobson, C. M. Protein misfolding, functional amyloid, and
human disease. Annual Review of Biochemistry 75, 333–366 (2006).
https://doi.org/10.1146/annurev.biochem.75.101304.123901.
2Chiti, F. & Dobson, C. M. Protein misfolding, amyloid formation, and human disease: A
summary of progress over the last decade. Annual Review of Biochemistry 86, 27–68 (2017).
https://doi.org/10.1146/annurev-biochem-061516-045115.
3Ferrone, F. A., Hofrichter, J. & Eaton, W. A. Kinetics of sickle hemoglobin polymeriza
tion: II. A double nucleation mechanism. Journal of Molecular Biology 183, 611–631 (1985).
https://doi.org/10.1016/0022-2836(85)90175-5.
4Knowles, T. P. J. et al. An analytical solution to the kinetics of breakable filament assembly.
Science 326, 1533–1537 (2009). https://doi.org/10.1126/science.1178250.
5Meisl, G. et al. Molecular mechanisms of protein aggregation from global fitting of kinetic
models. Nature Protocols 11, 252–272 (2016). https://doi.org/10.1038/nprot.2016.010.
6Meisl, G. et al. Uncovering the universality of self-replication in protein aggregation and its link
to disease. Science Advances 8, eabn6831 (2022). https://doi.org/10.1126/sciadv.abn6831.
7Van Dyck, C. H. et al. Lecanemab in early alzheimer’s disease. New England Journal of
Medicine 388, 9–21 (2023). https://doi.org/10.1056/NEJMoa2212948.
8Sims, J. R. et al. Donanemab in early symptomatic alzheimer disease: The
TRAILBLAZER-ALZ 2 randomized clinical trial. JAMA 330, 512 (2023).
https://doi.org/10.1001/jama.2023.13239.
9Vaz, M., Silva, V., Monteiro, C. & Silvestre, S. Role of aducanumab in the treatment of
alzheimer’s disease: Challenges and opportunities. Clinical Interventions in Aging Volume
17, 797–810 (2022). https://doi.org/10.2147/CIA.S325026.
10Rinaldi, C. & Wood, M. J. A. Antisense oligonucleotides: the next frontier for
treatment of neurological disorders. Nature Reviews Neurology 14, 9–21 (2018).
https://doi.org/10.1038/nrneurol.2017.148.
11Cole, T. A. et al. α-synuclein antisense oligonucleotides as a disease-modifying therapy for
parkinson’s disease. JCI Insight 6, e135633 (2021). https://doi.org/10.1172/jci.insight.135633.
12DeVos, S. L. et al. Tau reduction prevents neuronal loss and reverses pathological tau deposi
tion and seeding in mice with tauopathy. Science Translational Medicine 9, eaag0481 (2017).
30

https://doi.org/10.1126/scitranslmed.aag0481.
13Mummery, C. J. et al. Tau-targeting antisense oligonucleotide MAPTRx in mild alzheimer’s
disease: a phase 1b, randomized, placebo-controlled trial. Nature Medicine (2023).
https://doi.org/10.1038/s41591-023-02326-3.
14Neumann, E. N. et al. Brainwide silencing of prion protein by AAV-mediated de
livery of an engineered compact epigenetic editor. Science 384, ado7082 (2024).
https://doi.org/10.1126/science.ado7082.
15Thompson, T. B., Meisl, G., Knowles, T. P. J. & Goriely, A. The role of clearance mechanisms
in the kinetics of pathological protein aggregation involved in neurodegenerative diseases. The
Journal of Chemical Physics 154, 125101 (2021). https://doi.org/10.1063/5.0031650.
16Miller, L. V. C. et al. Tau assemblies do not behave like independently acting prion-like
particles in mouse neural tissue. Acta Neuropathologica Communications 9, 41 (2021).
https://doi.org/10.1186/s40478-021-01141-6.
17Andrews, R. et al. Large-scale visualization of α-synuclein oligomers in Parkinson’s disease
brain tissue. Nature Biomedical Engineering 1–13 (2025). https://doi.org/10.1038/s41551-025
01496-4.
18Cohen, S. I. A., Vendruscolo, M., Dobson, C. M. & Knowles, T. P. J. Nucleated polymerization
with secondary pathways. III. equilibrium behavior and oligomer populations. The Journal of
Chemical Physics 135, 065107 (2011). https://doi.org/10.1063/1.3608918.
19Meisl, G. et al. Scaling behaviour and rate-determining steps in filamentous self-assembly.
Chemical Science 8, 7087–7097 (2017). https://doi.org/10.1039/C7SC01965C.
20Alberts, B. et al. Molecular biology of the cell (Garland Science, 2008), 5th ed edn.
21Wei, J. et al. Kinetic models reveal the interplay of protein production and aggregation. Chemi
cal Science 15, 8430–8442 (2024). https://doi.org/10.1039/D4SC00088A.
22Morimoto, R. I. Cell-Nonautonomous Regulation of Proteostasis in Aging and
Disease. Cold Spring Harbor Perspectives in Biology 12, a034074 (2020).
https://doi.org/10.1101/cshperspect.a034074.
23Cohen, S. I. A. et al. Nucleated polymerization with secondary pathways i. time evo
lution of the principal moments. The Journal of chemical physics 135, 065105 (2011).
https://doi.org/10.1063/1.3608916.
24Ahern, A., Thompson, T. B., Oliveri, H., Lorthois, S. & Goriely, A. Modelling cere
brovascular pathology and the spread of amyloid beta in Alzheimer’s disease. Proceed
31

ings of the Royal Society A: Mathematical, Physical and Engineering Sciences 481 (2025).
https://doi.org/10.1098/rspa.2024.0548.
25Ciechanover, A. & Kwon, Y. T. Degradation of misfolded proteins in neurodegenerative dis
eases: therapeutic targets and strategies. Experimental & Molecular Medicine 47, e147–e147
(2015). https://doi.org/10.1038/emm.2014.117.
26Barral, J. M., Broadley, S. A., Schaffar, G. & Hartl, F. Roles of molecular chaperones in
protein misfolding diseases. Seminars in Cell & Developmental Biology 15, 17–29 (2004).
https://doi.org/10.1016/j.semcdb.2003.12.010.
27Tuck, B. J. et al. Cholesterol determines the cytosolic entry and seeded aggregation of tau. Cell
Reports 39, 110776 (2022). https://doi.org/10.1016/j.celrep.2022.110776.
28Cotton, M. W. et al. Neurodegeneration emerges at a cellular tipping point between aggregate
accumulation and removal (2025). https://doi.org/10.1101/2025.09.08.674880.
29Braak, H. et al. Staging of brain pathology related to sporadic parkinson’s disease. Neurobiology
of Aging 24, 197–211 (2003). https://doi.org/10.1016/S0197-4580(02)00065-9.
30Putra, P., Thompson, T. B., Chaggar, P. & Goriely, A. Braiding braak and braak: Staging patterns
and model selection in network neurodegeneration. Network Neuroscience 5, 929–956 (2021).
https://doi.org/10.1162/netn_a_00208.
31Brennan, G. S., Thompson, T. B., Oliveri, H., Rognes, M. E. & Goriely, A. The role of clear
ance in neurodegenerative diseases. SIAM Journal on Applied Mathematics S172–S198 (2023).
https://doi.org/10.1137/22M1487801.
32Agudo-Canalejo, J., Illien, P. & Golestanian, R. Cooperatively enhanced reactivity and “stabil
itaxis” of dissociating oligomeric proteins. Proceedings of the National Academy of Sciences
117, 11894–11900 (2020). https://doi.org/10.1073/pnas.1919635117.
33Iba, M. et al. Synthetic tau fibrils mediate transmission of neurofibrillary tangles in a transgenic
mouse model of alzheimer’s-like tauopathy. The Journal of Neuroscience 33, 1024–1037 (2013).
https://doi.org/10.1523/JNEUROSCI.2642-12.2013.
34Guo, Q. et al. In Situ Structure of Neuronal C9orf72 Poly-GA Aggregates Reveals Proteasome
Recruitment. Cell 172, 696–705.e12 (2018). https://doi.org/10.1016/j.cell.2017.12.030.
35Fertan, E. et al. Clearance of beta-amyloid and tau aggregates is size dependent
and altered by an inflammatory challenge. Brain Communications 7, fcae454 (2025).
https://doi.org/10.1093/braincomms/fcae454.
32

36Knowles, T. P. J. et al. Observation of spatial propagation of amyloid assembly from single
nuclei. Proceedings of the National Academy of Sciences of the United States of America 108,
14746–14751 (2011). https://doi.org/10.1073/pnas.1105555108.
37Michaels, T. C. T., Dear, A. J. & Knowles, T. P. J. Stochastic calculus of protein fil
ament formation under spatial confinement. New Journal of Physics 20, 055007 (2018).
https://doi.org/10.1088/1367-2630/aac0bc.
38Sinnige, T. et al. Kinetic analysis reveals that independent nucleation events determine the
progression of polyglutamine aggregation in C. elegans. Proceedings of the National Academy
of Sciences 118 (2021). https://doi.org/10.1073/pnas.2021888118.
39Pfammatter, M. et al. Absolute Quantification of Amyloid Propagons by Digital Microfluidics.
Analytical Chemistry 89, 12306–12313 (2017). https://doi.org/10.1021/acs.analchem.7b03279.
40Böken, D. et al. Single-Molecule Characterization and Super-Resolution Imaging of
Alzheimer’s Disease-Relevant Tau Aggregates in Human Samples. Angewandte Chemie In
ternational Edition 63, e202317756 (2024). https://doi.org/10.1002/anie.202317756.
41Labbadia, J. & Morimoto, R. I. The biology of proteostasis in aging and disease. Annual Review
of Biochemistry 84, 435–464 (2015). https://doi.org/10.1146/annurev-biochem-060614-033955.
42Hardy, J. & Escott-Price, V. The genetics of neurodegenerative diseases is the genet
ics of age-related damage clearance failure. Molecular Psychiatry 30, 2748–2753 (2025).
https://doi.org/10.1038/s41380-025-02911-7.
43Huang, S.-H. et al. A Mathematical Model of Cellular Aggregation Predicts Patterns of Tau Ac
cumulation in Neurodegenerative Disease. Advanced Science (Weinheim, Baden-Wurttemberg,
Germany) e11297 (2025). https://doi.org/10.1002/advs.202511297.
44Huang, S.-H. et al. Tau accumulation patterns in PSP constrain mecha
nisms and quantify cell-to-cell and cell-autonomous aggregation rates (2024).
https://doi.org/10.1101/2024.12.14.24318991.
45Cohen, S. I. A. et al. Proliferation of amyloid-β 42 aggregates occurs through a secondary nu
cleation mechanism. Proceedings of the National Academy of Sciences 110, 9758–9763 (2013).
https://doi.org/10.1073/pnas.1218402110.
46Meisl, G. et al. Differences in nucleation behavior underlie the contrasting aggregation kinetics
of the Aβ 40 and Aβ 42 peptides. Proceedings of the National Academy of Sciences 111, 9384
9389 (2014). https://doi.org/10.1073/pnas.1401564111.
33

47Linse, S. et al. Kinetic fingerprints differentiate the mechanisms of action of anti-Aβ antibodies.
Nature Structural & Molecular Biology 27, 1125–1133 (2020). https://doi.org/10.1038/s41594
020-0505-6.
34

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:47.577Z
- **Text Length:** 74093 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 34 of 34
