# PDF Document: Rapallo et al. - 2025 - How many outbreaks before an epidemic.pdf

**File Path:** Rapallo et al. - 2025 - How many outbreaks before an epidemic.pdf

**Processed Date:** 2026-02-10T18:15:37.607Z

**File Size:** 923.78 KB

**Total Pages:** 19

**Extracted Pages:** 19

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3688

**Title:** How many outbreaks before an epidemic?

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

How many outbreaks before an epidemic?
Fabio Rapallo,1, ∗ Enrico Scalas,2, † and Pietro Terna3, ‡
1Department of Economics, Universit`a di Genova, Italy
2Department of Statistical Sciences,
Sapienza University of Rome, Italy
3Universit`a di Torino, Italy, retired; Collegio Carlo Alberto, Torino, Italy
(Dated: November 21, 2025)
Abstract
In this work, we study the finite-population behaviour of the Reed–Frost epidemic model. Our
analysis relies on the exact expression for the final epidemic size, replaced by Monte Carlo simula
tions in cases where the exact formula becomes numerically unstable. When the initial reproduction
number is greater than a critical threshold, the distribution of the final size becomes bimodal. We
therefore define the probabilities of small and large outbreaks, providing an intuitive answer to the
question posed in the title through simple arguments based on the geometric distribution. Finally,
an agent-based simulation confirms that the Reed-Frost model offers a good approximation in the
case of the COVID-19 outbreak.
PACS numbers: 02.50.-r, 02.50.Ey, 89.65.Gh
∗Electronic address: fabio.rapallo@unige.it
†Electronic address: enrico.scalas@uniroma1.it; URL: https://corsidilaurea.uniroma1.it/it/
users/enricoscalasuniroma1it
‡Electronic address: pietro.terna@unito.it; URL: https://terna.to.it/
1
arXiv:2511.15736v1 [q-bio.PE] 18 Nov 2025

I. MOTIVATION
Stochastic models of epidemics show that in a fraction of cases an outbreak of an infectious
disease dies out without leading to (exponential) growth of cases. An example of this
behaviour is in reference [2], see in particular their figure 7. Irrespective of the detailed
mechanism of the infection, let us assume than only two cases are possible (small outbreak
or exponential growth as in [2] or [8]) and let us denote by p the probability of developing
an epidemic with (exponential) growth of infections. In general, this parameter will depend
on the initial conditions, namely on the conditions under which the disease is introduced.
An interesting question is: How many small independent outbreaks are needed before a
full-fledged epidemic develops?
Assuming that no non-pharmaceutical measures are in place (if they are in place they
may, and should, reduce p), and further assuming that introductions of the infectious disease
are independent, we are left with a classical problem in probability theory: In a sequence of
independent trials with two possible outcomes, what is the distribution of the time before
the first “success”? Here the success is the development of an exponentially growing epi
demic. Let us call T this time (which coincides with the number of trials), then the sought
distribution is geometric
P(T = k) = (1 − p)k−1p, (1)
for k = 1, 2, . . .. This is indeed the probability of the sequence F, F, . . . , F, S, with k − 1 F s
and a final S, where F stands for “failure” and S stands for “success”. One has that the
expected value of T is given by:
E(T ) = 1
p (2)
and the variance of T is
Var(T ) = 1 − p
p2 . (3)
Therefore if, for example, p = 1/2, then, in average, an epidemic will start after 2 indepen
dent introductions of the infectious disease, with p = 1/10, an average of 10 independent
introductions are needed and so on.
These simple considerations can be helpful in the discussion around the origin of an
infectious disease. However, what is missing from the above considerations is information
on the physical-time structure of how the infectious disease is introduced. If p = 1/10, for
2

instance, and there are 500 independent introductions of the disease in the very same day,
a full-fledged epidemic will very likely develop on that day, perhaps with more than a single
“patient 1”. On the contrary, if the disease happens to be introduced at a slower pace with
independent introductions of single cases separated by weeks, months or even years, it may
take a long time for a full-fledged epidemic to develop even if p is not very small.
The real world is however noisier and more complex than epidemic models, even if in
their stochastic version. In order to deal with this complexity, we can study the outcome
of agent-based simulations. In particular, to illustrate the above considerations, we use the
program S.I.s.a.R., an agent-based model of the diffusion of COVID-19 using NetLogo, with
Susceptible, Infected, symptomatic, asymptomatic, and Recovered people [25] with code and
further information publicly available at https://terna.to.it/simul/SIsaR.html. The
model incorporates the medical perspective of one of its coauthors [24].
However, to get a better insight into the origin of a full-fledged epidemics, we revert
to simple mathematical models and make use of the classical Reed-Frost model for which
several analytical results are available.
More details on S.I.s.a.R. and the Reed-Frost model are presented in the next section.
The results of our study can be found in Section III. Section IV is then devoted to our
final remark and to the applications of our considerations outside the field of mathematical
epidemiology. As far as the latter point is concerned, we particularly focus on models for
the introduction of innovations. Two of us already wrote a short paper in this topic (see
[20]).
II. THE MODELS
Here, we discuss results based on a realistic agent-based model developed for a specific
geographic region and a specific disease (S.I.s.a.R.) and on a traditional mathematical epi
demiological model: the Reed and Frost model. In this section, the reader finds a description
of the two models.
3

A. Agent based model
S.I.s.a.R. is an agent-based model specifically designed to reproduce the diffusion of the
COVID-19 using NetLogo, with Susceptible, Infected, symptomatic, asymptomatic, and Re
covered people (hence the name S.I.s.a.R., it is indeed a modified agent-based SIR model
where infected agents are categorized as symptomatic and asymptomatic). The model in
cludes the structural data of Piedmont, an Italian region, but it can be calibrated for other
areas following the Info sheet available online. It can reproduce the events of a realistic
calendar (e.g., national or regional government decisions), via its script interpreter. The
program is taking into account what was known on mechanisms of transmission of SARS
Cov-2 and on the novel coronavirus disease at the time of writing it during the acute phase
of the pandemic. This can be modified as new information is emerging. For instance, a
further modification of the algorithm could easily include a limited immunity period for
recovered agents. However, these details (further specified below) are largely irrelevant for
the purpose of the current paper, where we are just interested to see whether and when a
full-fledged epidemic develops starting from a small number of infected agents introduced in
the population.
We place two initial infected individuals in a population of 4350 individuals, in scale
1:1000 with Piedmont. The size of the initial infected group is out of scale: it is the smallest
number ensuring the activation of the epidemic in a substantial number of cases. Initially
infected people bypass the incubation period. For implausibility reasons, we never choose
initial infected people among persons in nursing homes or hospitals.
We can set:
• minimum and maximum duration of the individual infection;
• the length of the incubation interval;
• the critical distance, as the radius of a circle affecting people which are in it, with a
given probability;
• the correction of that probability due to the personal characteristics both of the active
and the passive agents; passive agents, as receivers, can be robust, regular, fragile, and
extra fragile.
4

We have two main types of contagion: (a) within a radius, for people moving around, also
if only temporary present in a house/factory/nursing home/hospital (in schools we just have
students and teachers); (b) in a given space (room or apartment) for people resident in their
home or in a hospital or in a nursing home or being in school or in a working environment.
People in hospitals and nursing homes can be infected in two ways: (a) and (b). While
people are at school, they can only pass the disease to people in the same classroom, where
only teachers and students are present, so this is a third infection mechanism (c). One
should remark that workplaces are open to agents, as clients, vendors, suppliers, external
workers can go there whereas schools are mainly reserved to students and school operators
and are less affected by contacts with agents of other type.
All agents have their home, inside a city or a town. The agents also have a regular place
(RP) where they act and interact, moving around. These positions can be interpreted as
free time elective places. Students and teachers, when we activate the school, have both
RPs and the schools; healthcare operators have both RPs and hospital or nursing homes;
finally, workers have both RPs and working places. In each day (or tick of the model) we
simulated realistic sequences of actions.
B. The model by Reed and Frost
Agent-based models can be a useful tool for planning and scenario building, but they
might be quite difficult to analyse using mathematical tools in a rigorous way. For this
reason, we resort to a classical model, introduced by Reed and Frost in the 1920s, in order
to clarify the onset of full-fledged epidemics.
The Reed-Frost model is a Markov chain in discrete time with discrete state space. The
population at time step t is divided into susceptibles St, infectives It and recovered or
removed N − It − St, where N = S0 + I0 is the population size. At time t = 0 we have
no recovered. In all scenarios, we start with a population with S0 = s0 susceptibles and we
consider two possible initial I0, i.e., I0 = i0 = 1 infective and I0 = i0 = 2 infectives. In
the Reed-Frost model, all individuals in the population are connected and each edge has a
common probability of contagion p ̃ ∈ (0, 1). Thus, the initial reproduction rate is R0 = p ̃s0.
At each step, given St = st and It = it, the evolution of the epidemic is ruled at time t + 1
5

by the equations below
St+1 ∼ Bin st, (1 − p ̃)it , It+1 = st − St+1.
The duration of the epidemics is
τ = min {t | It = 0} (4)
and the epidemic size (it could also be referred to as the final size of the epidemics) is
therefore:
W=
τ
X
t=0
It = N − Sτ . (5)
As we shall see below, an exact formula for the size of the epidemic T is available for the
Reed-Frost model on the fully connected graph. As a final remark, we notice that the Reed
Frost model is related to bond percolation and the size of the epidemic coincides with the
size of the giant component of bond percolation on the fully connected graph. To the best
of our knowledge, bond percolation was introduced in 1957 by Broadbent and Hammersley
in Section 3 of [7]. In rather abstract terms, it can be described as follows: Let G = (V, E)
denote a graph with V being the set of vertices and E the set of edges (bonds). Let us
associate to each edge e ∈ E a probability p(e) ∈ [0, 1]. The bond percolation graph is a
subgraph Gp(e) = (V, Ep(e)) where e ∈ Ep(e) with probability p(e). If we set p(e) = p ̃ for
every edge e in the graph, we can see that the probability distribution of the final size of the
epidemics T is the same as the probability distribution of the so-called giant component in
bond percolation [18]. The equivalence between bond percolation and the Reed-Frost model
is an established fact in mathematics/probability theory (e.g. see section 5.3 in [9]), physics
[17, 18], as well as in computer science (in particular see appendix A.2 in [3]). As written
by Miller in [17]: This percolation equivalence is based on the fact that an edge either exists
or does not in percolation, while in disease spread if the edge transmits, the receiving node
becomes infected. Indeed, percolation models were originally motivated also by epidemiology
(see [7, 10]).
We decided to use the Reed-Frost model for two main reasons: first, to have a flexible
tool for simulations and computations because of its simple structure; second, its use in
similar applications in the recent literature, see for instance [13, 17, 20].
6

III. RESULTS
As mentioned in the previous section, in all the simulations of the agent-based model
described in the next two subsections, we consider an initial state where two asymptomatic
infected individuals are placed in the world randomly. Every simulation is independent from
the other ones and represents a possible scenario of an experiment. We present the result
of two experiments. In the first one, the epidemic develops without non-pharmaceutical
containment measures. In the second experiment, we consider successive containment mea
sures following the calendar mentioned in the previous section. The sequence of main events
is reported in Table I. The results for the Reed-Frost models are presented in the third
subsection.
Day Event
Day 1 Conventionally, in the model the epidemic starts on Feb 3rd, 2020
Day 17 Due to carnival holidays, schools close
Day 20 Piedmont Region first warning, with the prohibition of crowd gatherings
Day 35 Limitation of movement outside local areas
Day 38 Full lockdown on March 11th
Day 49 Almost total blockage of non-essential production activities
Day 84 Reduction of the limitations
Day 106 Elimination of a large part of the restrictions; schools always inactive
TABLE I: Calendar of events.
A. Agent-based model: Unrestricted epidemic
We simulate 5000 independent scenarios of an unrestricted epidemic with S.I.s.a.R.. The
simulation stops when the epidemic dies out and no symptomatic or asymptomatic infectious
agents remain. In the case of a full-fledged epidemic, this is a situation in which so-called
herd immunity is reached and then the epidemic dies out naturally. On the contrary, for
small outbreaks chance leads to a stop of the epidemics for lack of contacts. As remarked in
the previous section, a recent study seems to point to a short-term immunity to SARS-Cov-2
[22] in agreement with what happens for other human coronaviruses and the model might
7

0
500
1000
1500
2000
2500
3000
3500
0 100 200 300 400 500 600 700 800 Epidemic duration
Total number of infected
FIG. 1: Scatterplot of the final total number of infected individuals of all categories versus the
duration of the epidemic without containment measures.
need to be modified in order to take this phenomenon into account. In Figure 1, we present
the scatterplot of the final total number of infected individuals of all categories versus the
duration of the epidemic. In the same figure, also a kernel density estimation of the marginal
distributions is shown.
The marginal distribution of the final total number of infected individuals can be com
pared with figure 7 in reference [2] and it is compatible with the discussion in Section I with
p = 0.9. Small and large outbreaks give rise to a clear bimodal scatterplot. One can also see
that the largest epidemics ends with 3100 infected agents (71.3% of the total population),
and the mode of the mass for full-fledged epidemics is 2450 (56% of the total population).
These estimates do not seem in disagreement with what can be observed in epidemic models
in the presence of population heterogeneity [6, 12], but they are not as optimistic as the
results in those papers. Smaller outbreaks are also shorter, but the overall relationship be
tween size and duration of the epidemic is not linear as shown in the scatter plot of Figure
1.
8

0
500
1000
1500
2000
2500
3000
3500
0 100 200 300 400 500 600 700 800 Epidemic duration
Total number of infected
FIG. 2: Scatterplot of the final total number of infected individuals of all categories versus the
duration of the epidemic with containment measures.
B. Agent-based model: Epidemic with containment measures
In the presence of containment measures, the picture becomes quite interesting. We
run 5000 simulations with the same initial conditions as before and, in Figure 2, we show
the scatterplot of the final total number of infected individuals of all categories versus the
duration of the epidemic, analogously to Figure 1.
In this case, there are epidemics of all sizes up to a maximum one which is smaller than the
typical size of the unrestricted outbreaks, namely the maximum size in this case is around
1800 infected agents (41.4% of the total population). The probability of such an extreme
event appears to be quite small and the majority of scenarios have a total number of infected
agents below 28.7% of the total population. Also the probability of small outbreaks is higher
than in the unrestricted case.
Even if also in this case, the distribution of durations is bimodal, its expected value
appears to be remarkably smaller than in the unrestricted case. The bivariate scatterplot
shows again two clusters (small and large outbreaks) as in the unrestricted case in Figure
2, but the separation between the two clusters is now less perceptible. Finally, as in the
9

previous case, the largest epidemic is not the longest even if there is a positive correlation
between size and duration.
C. Simulations of the Reed-Frost model
In this section we present simulations on the simple Reed-Frost model in order to evaluate
the probabilities of small and large outbreaks. We consider several scenarios characterised
by different population sizes and different probabilities of transmission and we focus on the
final size of the epidemics W . W has been studied asymptotically in, e.g., [16] and [26]. In
our finite-population approach, the final size, defined in Eq. (5), is a random variable and
its distribution is known exactly, see [1, 14, 19]:
P(W = k + 1) = s0!
(s0 − k)! (1 − p ̃)(1+k)(s0−k)Gk(1 | U ) (k ≥ 0) (6)
where U is the sequence ((1 − p ̃), (1 − p ̃)2, . . . , (1 − p ̃)(1+s0), 0, 0, . . .) and Gk(1 | U ) is defined
recursively in terms of Goncharov polynomials by:
G0(1 | U ) = 1 Gk(1 | U ) = 1
k! −
k−1
X
j=0
uk−j
j
(k − j)! Gj(1 | U ) (k ≥ 1).
The formula is not numerically stable when the population grows (see section 3.1 in [5], for
example), even if one uses high precision arithmetic through the R package Rmpfr [15]. As a
consequence, we use both the exact formula and the Monte Carlo estimate for small values
of s0 and only Monte Carlo estimation for larger values of s0. Monte Carlo estimates of the
probabilities are based on 5, 000 trajectories, and 2, 000 replicates are used to estimate the
standard deviations. All the simulations are carried out using R version 4.5.1 [21]. Although
approximate results exist in the case of large populations [5, 16, 26], here we prefer to use
Monte Carlo simulations as we explore values of s0 ≤ 512 still far from the asymptotic
regime.
For the considered values of s0 and R0, the final epidemic size distributions are shown in
Fig. 3.
Looking at the distributions in Fig. 3, we observe a common pattern for R0 = 1.5 and
R0 = 2.5: There are two peaks, one peak of small outbreaks where few individuals become
infective and another peak of large outbreaks where most of the individuals in the population
become infective. On the other hand, the top panels in Fig. 3, for R0 = 1.1, do not exhibit
10

0.0
0.1
0.2
0.3
1 5 10 15 20 25 30 33 number of cases
probability
R0=1.1, s0=32
0.0
0.1
0.2
0.3
1 5 10 15 20 25 30 35 40 45 50 55 60 65 number of cases
probability
R0=1.1, s0=64
0.00
0.05
0.10
0.15
0.20
1 5 10 15 20 25 30 33 number of cases
probability
R0=1.5, s0=32
0.00
0.05
0.10
0.15
0.20
1 5 10 15 20 25 30 35 40 45 50 55 60 65 number of cases
probability
R0=1.5, s0=64
0.00
0.05
0.10
0.15
1 5 10 15 20 25 30 33 number of cases
probability
R0=2.5, s0=32
0.000
0.025
0.050
0.075
0.100
0.125
1 5 10 15 20 25 30 35 40 45 50 55 60 65 number of cases
probability
R0=2.5, s0=64
FIG. 3: Six distributions of the final epidemic size. The grey rectangles are the Monte Carlo
estimates, the segments are the sd, while red dots represent the exact probabilities. When the
exact formula is not stable, only the Monte Carlo results are shown.
a bimodal behaviour; we shall come back on this issue at the end of this section. Now, we
concentrate on scenarios with a bimodal density, where it is easy to separate a probability of
small outbreak and a probability of large outbreak. We then define the probability of small
outbreak by means of the following rule: (i) first, we determine the relative minimum tm of
the distribution between the two peaks, as the separator between small and large outbreaks;
11

(ii) then, the probability of small outbreak is defined as the sum
qs =
tm−1
X
k=0
P(W = k) . (7)
The quantity ps = 1 − qs is a proxy of the probability p discussed in the introduction.
In the Monte Carlo approach, the minimum is determined after a standard smoothing
through a rolling mean (for population size smaller than 100 people) or a kernel smoothing
(for population size larger than 100 people), and looking for sign changes in the differences. If
more than one local minimum is found due to statistical variability in the density estimation,
we take the (rounded) median of the points of local minimum. Then, the estimate qˆs of qs
is obtained.
The results for different scenarios are reported in Table II (for scenarios with small pop
ulations where exact probabilities and Monte Carlo estimates can be used) and in Table III
(for scenarios where only Monte Carlo estimates are reliable). From these results, we can see
that the probability of small outbreak is greater than 0.20 when R0 ≤ 2 in the case i0 = 1
(except for the case s0 = 16), and when R0 ≤ 1.4 in the case i0 = 2. In the other direction,
the probability of small outbreak is less than 0.01 when R0 ≥ 2.6 in the case of two initial
infectives. In particular, the results with i0 = 1 show that, even in cases of epidemics with
a moderate initial reproduction number, still there are non-negligible probabilities of small
outbreak and such values tend to stabilise as the population size grows.
When the probability of infection is too small, the second peak does not appear in the
density, leading to a monotone decreasing density function, as shown in the top panels of
Fig. 3, where the initial reproduction number is R0 = 1.1. In this case, the definition of
probability of small and large outbreak in Eq. (7) cannot be applied. Thus, to further
investigate this issue, using the exact formula, we have considered the critical value of the
infection probability p ̃ (or the critical value of the initial reproduction number R0). In this
finite-size analysis, the critical value is defined as the minimum value of the parameter for
which there are two modes in the density of the final epidemic size when i0 = 1. For this
study, we limit the population size to those cases where the exact formula yields stable
results. In Figure 4, all the critical values are presented, after computing them using the
exact formula for the final size Eq. (6). Heuristically, one expects that the critical value for
this transition to occur can be found by setting p ̃cs0 ≈ 1 coinciding with a critical value of
R0 close to 1 and leading to p ̃c ≈ 1/s0, which is confirmed by the plot. However, the reader
12

i0 = 1 i0 = 2
R0 s0 exact qs mean(qˆs) sd(qˆs) exact qs mean(qˆs) sd(qˆs)
1.2 16 0.6255 0.6547 0.0454 0.2675 0.2765 0.0507
1.2 32 0.7030 0.7321 0.0331 0.3918 0.4682 0.0640
1.2 64 NS 0.8237 0.0581 NS 0.6255 0.0925
1.4 16 0.4565 0.4635 0.0263 0.1341 0.1521 0.0232
1.4 32 0.5112 0.5289 0.0390 0.2233 0.2406 0.0360
1.4 64 NS 0.5549 0.0427 NS 0.2962 0.0492
1.6 16 0.3501 0.3463 0.0157 0.0829 0.0931 0.0155
1.6 32 0.3840 0.3847 0.0155 0.1323 0.1404 0.0170
1.6 64 0.3886 0.3932 0.0166 0.1542 0.1567 0.0115
1.8 16 0.2639 0.2619 0.0117 0.0612 0.0580 0.0082
1.8 32 0.2841 0.2855 0.0087 0.0807 0.0822 0.0079
1.8 64 0.2835 0.2848 0.0070 0.0837 0.0848 0.0045
2 16 0.1970 0.1967 0.0084 0.0357 0.0352 0.0051
2 32 0.2098 0.2121 0.0074 0.0470 0.0469 0.0040
2 64 0.2091 0.2091 0.0056 0.0457 0.0460 0.0030
2.2 16 0.1463 0.1469 0.0064 0.0205 0.0211 0.0031
2.2 32 0.1571 0.1574 0.0056 0.0264 0.0264 0.0025
2.2 64 0.1565 0.1568 0.0050 0.0254 0.0255 0.0022
2.4 16 0.1086 0.1097 0.0051 0.0117 0.0123 0.0020
2.4 32 0.1175 0.1178 0.0046 0.0148 0.0149 0.0018
2.4 64 0.1191 0.1193 0.0045 0.0146 0.0146 0.0018
2.6 16 0.0808 0.0818 0.0041 0.0071 0.0071 0.0014
2.6 32 0.0891 0.0893 0.0041 0.0084 0.0084 0.0013
2.6 64 0.0918 0.0919 0.0041 0.0086 0.0086 0.0013
2.8 16 0.0610 0.0608 0.0035 0.0040 0.0049 0.0010
2.8 32 0.0681 0.0682 0.0035 0.0049 0.0049 0.0010
2.8 64 0.0714 0.0715 0.0036 0.0052 0.0052 0.0010
3 16 0.0454 0.0454 0.0030 0.0022 0.0022 0.0007
3 32 0.0524 0.0524 0.0031 0.0029 0.0029 0.0008
3 64 0.0559 0.0558 0.0032 0.0032 0.0032 0.0008
TABLE II: Probability of small outbreak qs for scenarios with both exact and Monte Carlo com
putations. (NS is displayed when the exact formula is numerically not stable.)
13

i0 = 1 i0 = 2
R0 s0 mean(qˆs) sd(qˆs) mean(qˆs) sd(qˆs)
1.2 128 0.7578 0.0319 0.5438 0.0401
1.2 256 0.7459 0.0305 0.5407 0.0222
1.2 512 0.7293 0.0208 0.5324 0.0182
1.4 128 0.5330 0.0090 0.2874 0.0091
1.4 256 0.5192 0.0075 0.2748 0.0071
1.4 512 0.5046 0.0072 0.2578 0.0061
1.6 128 0.3805 0.0071 0.1497 0.0067
1.6 256 0.3684 0.0068 0.1384 0.0049
1.6 512 0.3624 0.0067 0.1320 0.0048
1.8 128 0.2757 0.0062 0.0784 0.0038
1.8 256 0.2707 0.0063 0.0740 0.0037
1.8 512 0.2689 0.0063 0.0726 0.0037
2 128 0.2051 0.0058 0.0431 0.0029
2 256 0.2041 0.0057 0.0420 0.0029
2 512 0.2035 0.0056 0.0416 0.0028
2.2 128 0.1561 0.0052 0.0246 0.0022
2.2 256 0.1561 0.0052 0.0245 0.0022
2.2 512 0.1562 0.0051 0.0245 0.0022
2.4 128 0.1201 0.0046 0.0145 0.0017
2.4 256 0.1207 0.0047 0.0146 0.0017
2.4 512 0.1210 0.0048 0.0147 0.0017
2.6 128 0.0934 0.0042 0.0089 0.0013
2.6 256 0.0943 0.0042 0.0090 0.0013
2.6 512 0.0947 0.0042 0.0089 0.0014
2.8 128 0.0730 0.0037 0.0054 0.0011
2.8 256 0.0742 0.0038 0.0055 0.0010
2.8 512 0.0746 0.0037 0.0056 0.0011
3 128 0.0578 0.0033 0.0033 0.0008
3 256 0.0585 0.0034 0.0035 0.0008
3 512 0.0590 0.0034 0.0035 0.0008
TABLE III: Probability of small outbreak qs for scenarios with Monte Carlo computations only.
14

should keep in mind that, due to the finite size and to the definition of R0, the critical value
of R0 is close but not equal to 1. In fact, while the critical value of p ̃ decreases with the
population size, the critical value of R0 has a different behaviour. After an initial region
affected by small-sample effects, it exhibits a near-constant behaviour. For instance, with
s0 = 16 we have a critical value R0 = 1.1528, with s0 = 32 we have a critical R0 = 1.1688,
and with s0 = 45 we have a critical R0 = 1.1641. We expect that the critical R0 converges
to 1 for large system sizes. This is illustrated in Table IV, where as a function of R0, we
report the median final size, the 90th percentile for the final size, and the probability that
the epidemics hits less than 5% of susceptible individuals for s0 + 1 = N = 1, 000 and 10, 000
individuals and one initial infective.
N = 1,000 N = 10,000
R0 Median Q90 Prob(W < 5% pop.) R0 Median Q90 Prob(W < 5% pop.)
1.10 2 188 0.8017 1.10 2 1701 0.8349
1.08 2 149 0.8236 1.08 2 1179 0.8687
1.06 2 113 0.8444 1.06 2 456 0.9023
1.04 2 84 0.8644 1.04 2 165 0.9328
1.02 2 63 0.8831 1.02 2 91 0.9586
1.00 1 49 0.9007 1.00 1 61 0.9773
0.98 1 39 0.9169 0.98 1 45 0.9892
0.96 1 31 0.9317 0.96 1 35 0.9957
0.94 1 26 0.9443 0.94 1 28 0.9985
0.92 1 22 0.9556 0.92 1 23 0.9996
0.90 1 19 0.9653 0.90 1 20 0.9999
TABLE IV: Behaviour of the final size W around R0 = 1 for two large values of N by Monte Carlo
simulation.
IV. FINAL REMARKS AND DISCUSSION
In this note, we have used a SIR-like agent-based model including asymptomatic and
symptomatic infectious agents called S.I.s.a.R. and written in NetLogo to corroborate an
elementary probabilistic model for the number of independent trials needed for the develop
ment of a full-fledged epidemic after the introduction of a new infectious disease in a fully
15

0.0
0.1
0.2
0 10 20 30 40
s0
Critical p
~
Critical p~ with 1 initial infected
1.00
1.05
1.10
1.15
0 10 20 30 40
s0
Critical R0
Critical R0 with 1 initial infected
FIG. 4: Critical values of p ̃ (left panel) and R0 (right panel) with i0 = 1.
susceptible population. The qualitative behaviour of the agent-based model is the same as
the qualitative behaviour of probabilistic SIR models such as [2]. In the absence of non
pharmaceutical prevention measures, there are either realisations of the process (runs of the
simulation) in which the outbreak dies out before reaching the stage of initial exponential
growth or realisations in which exponential growth is reached and a full-fledged epidemic
develops. On the contrary, when specific non-pharmaceutical measures are put in place ac
cording to a given calendar, one can observe finite probabilistic mass for all epidemic sizes
up to the maximum. We are also able to study the duration of the epidemic and how it
correlates with the size.
To better understand the emergence of the behaviour described above, we have studied
the finite and small-size behaviour of the model introduced by Reed and Frost. Thanks to
the existence of an exact formula for the final size of the epidemic (Eq. (6)) we have been
able to validate Monte Carlo simulations and we have performed a detailed Monte Carlo
study of a transition of the final size distribution from unimodal to bimodal. In the bimodal
case, we have been able to estimate the probability of developing a full-fledged epidemic in a
small population of susceptible individuals when 1 and 2 infective individuals are introduced.
Incidentally, the presence of this transition is not restricted to the fully-connected graph case
we consider here [8].
From the point of view of applications, SIR-like models have been used to describe the
16

diffusion of rumours in human populations (see for example [27]) and they can be adapted
to describe the diffusion of ideas (see for example [4] on the diffusion of the use of Feynman
diagrams in theoretical physics).
This is based on an analogy between the spread of ideas and the spread of infectious
diseases that was quite popular in the second half of the 20th Century. In a recent paper of
ours [20], we mentioned a 1964 paper by Goffman and Newill as one of the first sources we
could find [11]. It is tempting to exploit this analogy and consider the simple model outlined
in the introduction as a description of the number of introductions of a new idea or concept
needed before it becomes successful. For example, the history science is full of instances in
which a very successful model, theory, idea or method had already been introduced in the
past at a time in which nobody really cared. In [20], we mention two cases: the discovery
of penicillin by Vincenzo Tiberio well before Fleming [23] and the theory of option pricing
developed by Vinzenz Bronzin well before Black and Scholes [28]. At this stage, this is just
a nice conjecture, but we hope to either corroborate or falsify it soon.
References
[1] F. Ball, P. O’Neill, The distribution of general final state random variables for stochastic
epidemic models, J. Appl. Prob., 36, 473–491, 1999.
[2] F. Ball, T. Britton, K.Y. Leung and D. Sirl, A stochastic SIR network epidemic model with
preventive dropping of edges, Journal of Mathematical Biology, 78, 1875–1951, 2019.
[3] L. Becchetti, A. Clementi, R. Denni, F. Pasquale, L. Trevisan, and I. Ziccardi, Percola
tion and Epidemic Processes in One-Dimensional Small-World Networks. In: A. Castan ̃eda,
F. Rodrı ́guez-Henrı ́quez, (Eds) LATIN 2022: Theoretical Informatics. LATIN 2022. Lecture
Notes in Computer Science, vol. 13568. Springer, Cham, 2022.
[4] L.M.A. Bettencourt, A. Cintr ́on-Arias, D.I. Kaiser, C. Castillo-Ch ́avez, The power of a good
idea: Quantitative modeling of the spread of ideas from epidemiological models, Physica A
364, 513–536, 2006.
[5] T. Britton, Stochastic epidemic models: a survey, Mathematical Biosciences, 225, 24–35, 2010.
17

[6] T. Britton, F. Ball and P. Trapman, A mathematical model reveals the influence of population
heterogeneity on herd immunity to SARS-CoV-2, Science 369, 846–849, 2020, doi:10.1126/
science.abc6810.
[7] S.R. Broadbent and J.M. Hammersley, Percolation processes: I. Crystals and mazes, Mathe
matical Proceedings of the Cambridge Philosophical Society, 53, 629–641, 1957.
[8] F. Di Lauro, J.-C. Croix, L. Berthouze, I.Z. Kiss, PDE-limits of stochastic SIS epidemics on
networks, Journal of Complex Networks, 8, cnaa043, 2020.
[9] R. Durrett, Random Graph Dynamics, Cambridge University Press, Cambridge UK, 2007.
[10] M.L. Frisch and J.M. Hammersley, Percolation processes and related topics, Journal of the
Society for Industrial and Applied Mathematics 11, 894–918, 1963.
[11] W. Goffman and V.A. Newill, Generalization of epidemic theory: an application to the trans
mission of ideas, Nature 204, 225–228, 1964.
[12] M.G.M. Gomes, R. Aguas, R.M. Corder, J.G. King, K.E. Langwig, C. Souto
Maior, J. Carneiro, M.U. Ferreira, C. Penha-Gonc ̧alves, Individual variation in sus
ceptibility or exposure to SARS-CoV-2 lowers the herd immunity threshold, medRxiv
10.1101/2020.04.27.20081893, 2020.
[13] S. Govindankutty, S.P. Gopalan, Epidemic modeling for misinformation spread in digital
networks through a social intelligence approach. Sci. Rep. 14, 19100, 2024, doi:10.1038/
s41598-024-69657-0.
[14] C. Lefe`vre and P. Picard, A non-standard family of polynomials and the final size distribution
of Reed-Frost epidemic processes, Adv. Appl. Probab. 22, 25–48 1990.
[15] M. Maechler, Rmpfr: R MPFR - Multiple Precision Floating-Point Reliable, R package version
0.9-5, 2024, https://CRAN.R-project.org/package=Rmpfr.
[16] A. Martin-L ̈of, Symmetric sampling procedures, general epidemic processes and their threshold
limit theorems, J. Appl. Probab. 23, 265–282, 1986.
[17] J.C. Miller, Equivalence of several generalized percolation models on networks, Phys. Rev. E
94, 032313, 2016.
[18] M.E.J. Newman, Spread of epidemic disease on networks, Phys. Rev. E 66, 016128, 2002.
[19] P. Picard and C. Lef`evre, A unified analysis of the final size and severity distribution in
collective Reed-Frost epidemic processes, Adv. Appl. Probab. 22, 269–294, (1990).
[20] F. Rapallo and E. Scalas, Innovations and Their Diffusion: An Application of the Reed-Frost
18

Model. In: E. di Bella et al. (Eds.) Statistics for Innovation I, Springer, 26-–32, 2025.
[21] R Core Team, R: A Language and Environment for Statistical Computing, R Foundation for
Statistical Computing, Vienna, Austria, 2025, https://www.R-project.org/.
[22] J. Seow et al., Longitudinal evaluation and decline of antibody responses in SARS-CoV-2
infection, https://www.medrxiv.org/content/10.1101/2020.07.09.20148429v1, 2020.
[23] A. Perciaccante, A. Coralli, D. Lippi, O. Appenzeller and R. Bianucci, Vincenzo Tiberio
(1869–1915) and the dawn of the antibiotic age. Intern. Emerg. Med. 14, 1363–1364, 2019.
[24] F. Silvagno, A. Vernone, and G.P. Pescarmona. The role of glutathione in protecting against
the severe inflammatory response triggered by covid-19. Antioxidants, 9(7), 624, 2020, doi:
10.3390/antiox9070624.
[25] P. Terna, G. Pescarmona, A. Acquadro, G.P. Pescarmona, G. Russo, S.
Terna, An Agent-Based Model of the diffusion of Covid-19 using NetLogo
https://terna.to.it/simul/SIsaR.html, 2020.
[26] B. von Bahr and A. Martin-L ̈of, Threshold limit theorems for some epidemic processes, Adv.
Appl. Probab. 12, 319–349, 1980.
[27] S. Zapperi, C. Varlet-Bertrand, C. Bastidon, C. A. M. La Porta and A. Parent, Epidemiology
models explain rumour spreading during France’s Great Fear of 1789, Nature 646, 358–364,
2025.
[28] H. Zimmermann and W. Hafner, Amazing discovery: Vincenz Bronzin’s option pricing models,
J. Bank. Finance 31, 531–546, 2007.
19

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:37.607Z
- **Text Length:** 35885 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 19 of 19
