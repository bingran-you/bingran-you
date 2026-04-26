# PDF Document: Reggi et al. - 2025 - A model for mosquito-borne epidemic outbreaks with information-dependent protective behaviour.pdf

**File Path:** Reggi et al. - 2025 - A model for mosquito-borne epidemic outbreaks with information-dependent protective behaviour.pdf

**Processed Date:** 2026-02-10T18:14:55.364Z

**File Size:** 1588.27 KB

**Total Pages:** 47

**Extracted Pages:** 47

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3685

**Title:** A model for mosquito-borne epidemic outbreaks with information-dependent protective behaviour

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

A model for mosquito-borne epidemic outbreaks with
information-dependent protective behaviour
Simone De Reggi, Andrea Pugliese, Mattia Sensi, Cinzia Soresina
Department of Mathematics, University of Trento
November 24, 2025
Abstract
We study a model for a mosquito-borne epidemic outbreak in which humans can adopt protective behaviour against vector bites depending on information on the past and present prevalence. Assuming that mosquitoes can also feed on other non-competent hosts (i.e. hosts that cannot infect others), we first review some results from the literature by showing that protective behaviour may either decrease or increase the value of the reproduction number of the epidemic depending on multiple elements. Then, -
assuming that changes in opinion occur much faster than the spread of the disease, we exploit an approach based on the Geometric Singular Perturbation Theory to reduce the two-group model to a model for a homogeneous host population. Then, we use the resulting model to investigate the effect of information-induced behavioural changes on the transient dynamics of the epidemic, discussing the case when protective measures induced an outbreak with a low attack rate. We illustrate how behavioural chan-
ges might either help in containing an epidemic outbreak or make the epidemic last longer, even triggering recurrent damped epidemic waves. We conclude with numerical simulations to illustrate our analytical results.
Keywords: behavioural epidemiology, Geometric Singular Perturbation Theory, host heterogeneity, infectious disease model, information index, vector-borne disease.
1 Introduction
Malaria, dengue, Chikungunya, Japanese encephalitis, West Nile virus, yellow fever, and Zika are some of the main examples of mosquito-borne infections. These diseases are transmitted to humans through the bites of mosquitoes infected with pathogens (viruses or other parasites), and represent major threats to human health; however, direct transmission between humans is not possible [71]. In recent years, there has been growing concern about the increase in cases of mosquito-borne diseases in both -
endemic and non-endemic areas [26, 71]. Factors such as climate change, globalization, and urbanization have strongly favoured the spread of many of these infections, such as dengue and Chikungunya, to non-tropical areas, creating numerous new habitats suitable for mosquito life, hence posing serious challenges to the Public Health System (PHS) [16]. Dengue, in particular, is the most common mosquito-borne viral infection, with more than 14 million confirmed reported cases in 2024 [72]. The virus -
is transmitted by mosquitoes of Aedes genus, in particular by Aedes aegypti (“Egyptian” mosquito, also responsible for Chikungunya, yellow fever and Zika infections) and Aedes Albopictus (“tiger mosquito”, main vector of dengue and Chikungunya in Europe) [25, 72]. Although many infections are asymptomatic and/or can be self-managed, a proportion of
1
arXiv:2511.16802v1 [q-bio.PE] 20 Nov 2025

individuals might develop sever dengue (or dengue hemorrhagic fever), which might lead, among others, to high fever, persistent vomiting, bleeding, and, ultimately, death. No specific treatment is available for dengue fever, and therapy is typically only symptomatic (with even required hospitalization in the most severe cases). Hence, preventive and control measures are fundamental for containing dengue infections [72]. Mathematical models play a crucial role in understanding the spread of such i-
nfections and the potential effects of control strategies for their containment. The celebrated Ross–Macdonald model usually provides the foundational basis for the mathematical modelling of such diseases; see for instance the recent review [62]. This model was first proposed by Ronald Ross in 1911 [65] to investigate the effect of possible control measures on the spread of malaria, and was later extended by George Macdonald to allow for incubation periods (i.e. periods in which an individual is i-
nfected but not yet infectious) before an individual may acquires infectiousness [47]. Many extensions of this model and applications to different types of mosquito-borne infections have been proposed in the literature; see for instance the review [67]. In particular, the mathematical modeling of dengue (which mainly motivated our work) poses major challenges; see the recent review [1]. An important feature that differentiates vector-transmitted infections from directly transmitted ones is that ep-
idemic containment can be achieved by implementing control measures over the vector population [59]. This feature was already observed by Ross in his work on malaria, where he built his intuition on considerations concerning what today is known as the basic reproduction number, R0; see [6, 38, 62]. However, to efficiently control mosquito-borne epidemics, interventions on the mosquito population should be coupled with preventive protective measures among humans, such as, for instance, the use of r-
epellents or bed nets. Theoretical investigations of the effectiveness of such strategies require to integrate mathematical models with components of behavioural type. In fact, as highlighted by the recent COVID19 pandemic, human behaviour strongly impacts the spread of infectious diseases, as individuals might (dynamically) adapt their behaviour according to the information they receive. For instance, individuals may decide whether or not to get vaccinated, or to adopt self-protective measures, f-
ollowing governmental guidelines or by spontaneous choice. The behavioural epidemiology of infectious diseases deals with such aspects by including behavioural dynamics into mathematical models for infectious diseases, using approaches from different behavioural sciences including, among others, psychology, economics and sociology [51]. Its origins can be traced back to the milestone work of Capasso and Serio [15], in which they first proposed a Susceptibles–InfectiousRemoved (SIR) model where tra-
nsmission rate was assumed to be a decreasing function of the current prevalence, i.e. the total number of infected individuals [27]. Since then, many other approaches have been proposed in the literature to include behavioural feedback into models for infectious diseases. We refer to the monograph [51] and the recent reviews [8, 35, 70] for an overview on such approaches. While nowadays there are many papers in the literature modelling the interplay between the spread of directly transmitted infe-
ctions, such as measles or SARS, and human behaviour, the study of (information induced) behavioural effects on the dynamics of vector-borne infections has received less attention; in the following paragraphs, we briefly review some existing results in this area. For directly-transmitted infections, preventive behaviour by some individuals generally reduces contact rates among the whole population, hence providing a general beneficial effect [62]. Mathematically, this is usually modelled by assumi-
ng that transmission rates are decreasing functions of the level of awareness in the population. However, in the context of vector-borne infections, the mathematical modelling of (partial) protective behaviour in the host population is far from being trivial, as predictions of its effectiveness on the overall dynamic of an epidemic strictly depend on the assumptions underlying the model on the ecological interaction between vectors and hosts [52, 68]. Indeed, different assumptions concerning, e.g.-
 the shape of the function representing how mosquito biting rates depend on host availability, might lead to different predictions on the probability of an epidemic invasion and its controllability [19]; see for instance [73].
2

As an example, it is known that for vector-borne infections the adoption of self-protective measures by some individuals might lead to diverting mosquito bites on unprotected individuals [56], thus facilitating the probability of a double transmission cycle from mosquito to host and viceversa [19, 44, 53]. More generally, partially-adopted protective behavior might amplify host diversity, as individuals who adopt protective measures such as repellents or bed nets might be less “attractive” to mos-
quito bites compared to individuals who do not protect [44, 53]. In [30, 37], Dye and Hasibeder showed that for a vector-borne epidemic, heterogeneity among hosts results in the (possibly counter-intuitive) effect of possibly increasing the value of R0, hence worsening its invasion potential [62]. However, Hasibeder and Dye had also shown that the final attack ratio might decrease [37]. This phenomenon has been recently revisited by Miller et. al in [54], where the authors considered a simple vect-
or-host model with two classes of hosts and investigated the effect of host diversity, transmission ability, and vector preference on R0. Subsequently, in [53] Miller et al. considered a one-vector-one-host model in which the host population is statically split into two subgroups: hosts that adopt protective measures and hosts that do not protect. Assuming a mosquito biting rate dependent on the number of hosts through a Holling-type function, and building on [54], they discussed the effect of par-
tial adoption of protective measures among hosts on the value of the reproduction number of the epidemic. An important result they discussed is that, depending on the model coefficients, the use of protective measures in a part only of the host population might actually result in an increased value of the reproduction number of the epidemic, hence possibly worsening an outbreak of a vector-borne disease. The authors showed that this rebound effect is attained whenever protection in one group makes-
 protected individuals less available to spot, and diverts the vectors bites in the sub-population not using protective measures [44, 56]; this result is based on the assumption that the times required to handle protected and non-protected individuals (i.e., the average time a mosquito takes to identify, bite and process a blood meal from a single human after it has been located [19]) are approximately the same. If instead the adoption of protective measures, such as bed-nets or repellents, makes -
mosquitoes spend a not negligible amount of time in attempting to bite protected humans, this may ensure a beneficial effect also on the non-protected part of hosts. Recently, Demers et. al investigated in [19] (mainly through numerical simulations and considerations on the reproduction number) the possible effect of behavioural changes in response to a mosquito-borne epidemic outbreak in its initial phase, making also some considerations on the possible effect of either infinitely small or infini-
tely large switching rates. Considering a simple vector-host model with two classes of hosts in which individuals might switch from one class to the other, the authors numerically showed (for different choices of the parameters) that the model with behavioural changes in the host population actually predicts a lower R0 than the model with static behaviour. This is a consequence of the mitigation that the switching of behaviour has on the amplification in host diversity. Building on this, other aut-
hors proposed models of different complexity with the aim of investigating complex scenarios involving human behavioural changes. For instance, in [17] the authors consider a model for dengue with different strains, where it is assumed that the host population is split into protected and non-protected individuals, and, as in [19], individuals can switch behaviour at constant rates. In [63], instead, the authors propose a rather complicated multi-patch model where the host population is statically -
split into two groups (protected and non-protected), and only susceptible individuals are allowed to modify their behaviour according to some information on the current prevalence. However, most of these papers focus on numerical simulations, without providing analytical insights on the effect of (possibly information-induced) protective behaviour on the spread of an epidemic, if not by making some considerations on the basic reproduction number. Let us mention that the idea of information depende-
nt switching of behaviour in vector-host model has been also considered in [55] and, more recently in [40]. In these two papers, the authors propose models in which only the host susceptible subpopulation (i.e. the part of the population whose individuals can acquire the infection) is split in protected (with perfect protection) and non-protected individuals; individuals change behavior according to some exponentially waning information on the present or past-prevalence.
3

By taking into account the demography of the host population (hence looking at an endemic scenario for the examined disease), they showed that an endemic equilibrium exists whenever R0 > 1 and, under suitable conditions, it might become unstable via a Hopf, implying the existence of possible periodic solutions. Note that the emergence of possible oscillatory (or even more complex) dynamics in epidemic models with information induced behavioural changes has been intensively discussed in the litera-
ture; see for instance [27, 28, 51, 61, 75].
In the literature, it is common (and reasonable) to assume that epidemiological dynamics occur either much slower or much faster than behavioural changes in the host population; see, e.g., [18, 61]. A powerful technique to conveniently investigate the qualitative behaviour of mathematical models under this different time scales assumption, once they are modelled as systems of Ordinary Differential Equations (ODEs), is the so-called Geometric Singular Perturbation Theory (GSPT), stemming from the s-
eminal works of Neil Fenichel [34]. This theory has been applied in the study of many natural phenomena which are often the result of multiple interacting mechanisms that evolve on different timescales; we refer in particular to [39, 45] for a wide range of biologically motivated examples. Under this separation of time scales hypothesis, perturbed systems of ODEs can be studied under two (or more) distinct limits, which explain the fast and slow (and possibly intermediate) behaviours separately. T-
hen, the information derived from these limit systems provides useful indications on the behaviour of the original unperturbed system. This approach has been applied to a variety of epidemic models [41, 42, 43], and in particular to models in which information (or misinformation, or opinions) travel faster than the disease throughout the population [12, 18, 66]. Note that not only behavioral and epidemiological dynamics might evolve on different time scales. As a matter of fact, in the context of -
mosquito-transmitted diseases, one typically cannot neglect demographic effects on the mosquito population, as these occur in the same time scale of the epidemic. Yet, demographic variations in the human population or seasonal variations in the mosquito population, as well as effects due to the loss of disease-induced immunity, might often be neglected in early outbreak scenarios, as these occur much slower than epidemic transmission.
In this paper, motivated by the recent rise of autochthonous cases of dengue in Europe [25], we propose a model for a mosquito-borne epidemic in which we assume that host individuals can adopt protective behaviour according to the current information they have on the epidemic. Differently from [40, 55], we consider a model for a an outbreak scenario, thus neglecting the effect of demography or waning immunity in the host population and seasonality on vectors. Following [53], we assume that the hos-
t population is split in protected and non-protected subclasses, and individuals can dynamically change their behavior [19] according to rates that depend on the current information that host individuals have on the epidemic. We do this relying on the information index approach introduced by d’Onofrio, Manfredi and colleagues. In this setting, the delayed impact of infections on the current information is usually described by a memory kernel, which may be either continuous or concentrated [3]. Thi-
s memory can depend on the prevalence [32, 27] or the incidence, i.e. the number of new cases per unit of time [28]. We assume (and this will come as a natural consequence of the systems of ODEs under study) that the human population is constant over time, i.e. it is closed and there are no births nor deaths. Moreover, we assume that the vectors can also feed on another, non-human population, whose individuals cannot transmit the infection; see for instance [33, 58]. This is motivated by recent li-
terature on human blood index according to which, for example, for Aedes Albopictus humans account for 79–96% of blood meals in urban sites, but only 23–55% in rural sites, where the most frequently bitten hosts are horses and bovines [69].
The paper is organized as follows: in Section 2, we present the base vector-borne model with no information, study its characteristics and asymptotic behaviour. Then, in Section 3, we introduce informationinduced behavioural changes in the system in the form of an information index based on a memory kernel. We specialize this to Erlang distributed kernels, and derive the corresponding Control Reproduction Number. In Section 4, we exploit an additional assumption of separation in the time scales of-
 the mechanisms of our model to provide information on the transient behaviour of the system. In Section 5 we present various simulations to illustrate our analytical results in particularly relevant scenarios. In Section 6 we
4

discuss the dynamics of the model under the low attack rate assumption. We investigate the existence of equilibria of the system and their stability for selected choices of the memory kernel. Finally, in Section 7 we present some concluding remarks and discuss possible extension of the presented model.
2 Vector-host model with static protective behaviour
In this section, we introduce the base model (a small extension of Ross-Macdonald model to include non-human hosts) which will later be extended, first by assuming a division of the human population in individuals who protect themselves against mosquito bites and individuals who do not, then by allowing all individuals, regardless of their current epidemic state, to dynamically change their stance on protective behaviour, through the inclusion of the explicit dynamics of the information index; see-
 also Theorem 3.1. In particular, we will focus on the effects of the information index on the transient dynamics of the epidemic. Let H denote the total human population. We assume that the population is constant over time, i.e. it is closed and there are no births nor deaths. Moreover, we assume that vectors can also feed on another, non-human population, whose individuals do not contribute to the spread of the infection, i.e. biting such an individual results in a “wasted” bite from the infecti-
on standpoint. We will refer to L as the “effective” population size of “non-competent” hosts, meaning that L/(H + L) is the probability that a mosquito bite is on a “non-competent” host (and thus H/(H + L) that a bite is on a human host). As for the epidemiological dynamics, we assume that the basic model is of SIR-SI type (Susceptible Infected – Recovered without demography for humans, i.e. we assume permanent immunity after recovery; Susceptible – Infected with demography for mosquitoes, since -
their average lifespan is orders of magnitude smaller than the average human lifespan). For the sake of simplicity, we neglect the incubation periods in mosquitoes and hosts, during which mosquitoes [or hosts] have been infected, but cannot yet infect hosts [or mosquitoes]. As well known, the inclusion of the extrinsic (the one in mosquitoes) incubation period decreases the value of R0, but for the rest has minor effects on the dynamics [47, 62]. Thus, in the absence of protective behaviour, the d-
ynamics is described by the following system of Ordinary Differential Equations (ODEs) [33, 58]:

                
                
S′
H = −bpH←M IM
SH
H + L,
I′
H = bpH←M IM
qSH
H + L − γIH ,
R′
H = γIH
S′
M = Λ − bpM←H SM
IH
H + L − μIM ,
I′
M = bpM←H SM
IH
H + L − μIM .
(1)
where SH (t), IH (t), RH (t) denote the number of human individuals who are susceptible, infectious and removed, respectively, at time t ≥ 0, and SM (t), IM (t) denote the number of mosquitoes who are susceptible and infectious, respectively, at time t ≥ 0. Here, b denotes the constant per-capita mosquito biting rate (which is independent on whether a mosquito is infected or not), and pH←M , pM←H ∈ [0, 1] denote the probabilities of transmission per bite from mosquitoes to humans and from humans t-
o mosquitoes, respectively. The constant γ > 0 represents the per-capita human recovery rate (i.e. the average infection period is 1/γ), while Λ and μ represent the inflow rate and the per-capita death rate of mosquitoes (i.e. the average mosquito life span is 1/μ), respectively. As for the dynamics of the mosquito
5

H
HP
p
HN P
1−p
Protected Non-protected
Figure 1: The split of the human population in protected and non-protected individuals.
population, we assume for simplicity that Λ = μM , which implies M ′ = S′
M + I′
M = 0 (and thus M
is constant). Similarly, H′ = S′
H + I′
H + R′
H = 0. Hence, the equation for RH can be omitted, since RH (t) ≡ H − SH (t) − IH (t), for all t ≥ 0.
Remark 2.1. Recall that L represents non-human targets for mosquito bites. Another possible interpretation of the constant L.is that it is a “penalty term” in the expression for the mean time that mosquitoes spend in searching for humans; this might depend for instance on how far apart are humans one from each other. Then, by defining ζ := L−1 and
ˆb := bH
H + L = bζH
1 + ζH,
we can interpret ˆb as the effective mosquito biting rate, determined by a Holling type II functional response function, as in [19, 53, 74]. Then, the force of infection acting on humans can be expressed as
λH←M := bζH
1 + ζH × IM
H = bH
H + L × IM
H.
In summary, we can interpret L as accounting for the effect on the average mosquito searching time both of the presence of other non-competent hosts and of the distance between humans.
2.1 Protective behaviour
To include protective behaviour in (1), we follow some recent works in the literature [19, 53, 63]. We assume that H can be split as H = HP + HNP , where HP = pH, with p ∈ [0, 1], is the subpopulations of protected individuals, i.e. those who adopt protective behaviour, while HNP = (1 − p)H is the subpopulation of non-protected individuals, i.e. those who do not adopt protective behaviour. See Figure 1 for a schematic representation of this partition. To model the efficacy of protective behaviour,-
 we assume that protected individuals are relatively less available to mosquito bites compared to non-protected individuals. Thus, denoting the probability of protection failure by q ∈ [0, 1] (see for example [63]), the probability that a mosquito bites a protected individual in the group HP is
P HP
b (p, q) = qHP
qHP + HNP + L = pqH
c(p, q)H + L , (2)
where
c(p, q) := 1 − p(1 − q). (3)
Note that P HP
b (p, q) < P HP
b (p, 1), for p ∈ (0, 1), q ∈ [0, 1), i.e. the probability that an individual is bitten by a mosquito is effectively smaller if they adopt protections. Conversely, for the probability that a
6

mosquito bites a non-protected individual in group HNP or a non-human target L, we have
P HNP
b (p, q) := (1 − p)H
c(p, q)H + L > P HNP
b (p, 1), for p ∈ (0, 1), q ∈ [0, 1),
and L
c(p, q)H + L > L
H + L for p ∈ (0, 1), q ∈ [0, 1),
respectively. Then, taking into account human protective behaviour, we modify the model equations (1) as

                 
                 
S′
P = −βH←M IM
qSP
c(p, q)H + L,
I′
P = βH←M IM
qSP
c(p, q)H + L − γIP ,
S′
NP = −βH←M IM
SN P
c(p, q)H + L,
I′
NP = βH←M IM
SN P
c(p, q)H + L − γINP ,
I′
M = βM←H (M − IM ) qIP + INP
c(p, q)H + L − μIM ,
(4)
where now SP , IP denote the susceptible and infectious individuals who adopt protective behaviour, while SNP , INP denote the susceptible and infectious individuals who do not, βH←M := bpH←M and βM←H := bpM←H .
Remark 2.2. In (4), we assume that protective behaviour in one group does not substantially increase the time required by a mosquito to handle protected individuals substantially relatively to that for non-protected individuals, as we believe that in reality these will approximately be the same (to the order of minutes [19]), independently of the protective measures.
Remark 2.3. Consider the case L = 0. We note that neither of the limits
lim
(p,q )→(1− ,0+ )
P HP
b (p, q) and lim
(p,q )→(1− ,0+ )
P HNP
b (p, q)
exist. This “inconsistency” in the model is expected as we are assuming that the number of available hosts is equal to zero and that the mosquito biting rate is fixed, i.e. mosquitoes will bite a certain amount of hosts per unit of time. Clearly, this does not occur whether L > 0.
Remark 2.4. By defining bP := b × P HP
b (p, q) and bNP := b × P HNP
b (p, q), in (4) we can rewrite the force of infection (i.e. the per-capita rate at which individuals gets infected per unit of time) on protected and non-protected humans respectively as
λP := bP pH←M
IM
HP
, and λNP := bNP pH←M
IM
HN P
.
Straightforward computations show that bP < b < bNP for all p, q ∈ (0, 1). Moreover, for every p ∈ (0, 1), bP is an increasing function of q, while bNP is decreasing. Hence, interpreting b as a “baseline contact rate” between humans and mosquitoes, in this model protective behaviour not only decreases “contacts” with protected individuals, but also increases those with non-protected individuals. Hence, if mosquitoes cannot bite a protected individual, then they will seek another host on which to f-
eed [19, 44, 53, 56].
7

Table 1: Parameters and corresponding interpretations for model (5).
Parameter interpretation l ratio between non-competent hosts and human population sizes ρ ratio between mosquito and human population sizes p fraction of protected humans q probability of protection failure 1/γ average human infectious period 1/μ average mosquito life span
SP IP γIP
qβH←M ρIM SP c(p,q)+l
SNP INP γINP
IM
μIM
βH←M ρIM SNP c(p,q)+l
βM←H (1−IM )(qIP +INP ) c(p,q)+l
Figure 2: Flow chart for system (5). Straight lines: compartmental movements within each population; dashed lines: infections between populations (mosquitoes infecting humans and viceversa).
In the following, we argue in terms of the fractions SP /H, IP /H, SNP /H, INP /H, and IM /M , which, for later convenience, will be still denoted with the same variables that have been using so far. The resulting model reads

                 
                 
S′
P = −βH←M ρIM
qSP
c(p, q) + l,
I′
P = βH←M ρIM
qSP
c(p, q) + l − γIP ,
S′
NP = −βH←M ρIM
SN P
c(p, q) + l,
I′
NP = βH←M ρIM
SN P
c(p, q) + l − γINP ,
I′
M = βM←H (1 − IM ) qIP + INP
c(p, q) + l − μIM ,
(5)
where now
l := L
H , and ρ := M
H . (6)
For the reader’s convenience, we report in Table 1 the model parameters and their interpretation, while c(p, q) is given by (3). In Figure 2 we represent the dynamics of model (5). As we are dealing with fractions, the biologically meaningful state space for the solutions of model (5)
8

is the set
Ω := {(SP , IP , SNP , INP , IM ) ∈ R6
≥0 : 0 ≤ SP , IP , SNP , INP , IM ; SP +SNP , IP +INP , IM ≤ 1}, (7) for which the following classical result holds.
Proposition 2.5. For every initial conditions X(0) := (SP (0), IP (0), SNP (0), INP (0), IM (0)) ∈ Ω, system (5) admits a unique solution X(t) := (SP (t), IP (t), SNP (t), INP (t), IM (t)) ∈ Ω which is globally defined in future. Furthermore, the following inequalities hold for every t ≥ 0:
SP (t) + IP (t) ≤ SP (0) + IP (0), and SNP (t) + INP (t) ≤ SNP (0) + INP (0). (8)
Proof. Let X(0) ∈ Ω. The local existence and uniqueness of the solution X(t) of the Cauchy problem relevant to (5) follows from the Cauchy-Lipschitz theorem. Now, for each Y ∈ {SP , IP , SNP , INP , IM } one has Y ′|Y =0 ≥ 0, which implies that X(t) ∈ R6
≥0 for all t ≥ 0 for which the solution is defined.
Furthermore, the inequalities (Sj + Ij)′ = −γIj ≤ 0, j ∈ {P, N P }, and I′
M |IM ≥1 ≤ −μIM ≤ 0 hold. Hence, using standard arguments, one obtains that X(t) ∈ Ω is globally defined in future and the inequalities in (8) hold.
2.2 Control reproduction number
In epidemiological models, the Basic Reproduction Number (BRN) R0 is the expected number of secondary cases produced by a typical infected individual in a completely susceptible population during its entire infectious period [22]. In many classical epidemic models, R0 is a threshold parameter that determines whether a major epidemic outbreak can occur or not. For deterministic models, when R0 < 1 the introduction of a small enough number of infected individuals gives rise to at most few cases, and-
 then the epidemic dies out. Instead, when R0 > 1, a large epidemic outbreak occurs. In particular, in the latter case one may observe an epidemic peak followed by disease extinction, convergence to an endemic equilibrium, or the presence of stable limit cycles. See, for instance, the recent review [62] for an extensive discussion on these aspects in vector-borne epidemic models. When intervention/control strategies are implemented in an otherwise fully susceptible population, one refers to the re-
production number as the Control Reproduction Number (CRN), denoted with Rc, which shares with R0 the same threshold property [60]. In this section, we compute the CRN Rc := Rc(p, q) for the model with protective behaviour (5), following the general principle of [22]. In particular, we apply the Next Generation Matrix (NGM) method described in [23, 29]. To do this, we observe that model (5) admits the DFE
(S∗
P, I∗
P , S∗
NP , I∗
NP , I∗
M ) := (p, 0, 1 − p, 0, 0), (9)
Then, we focus on the epidemic at its beginning, i.e. we let SP + SNP ≈ 1 and 1 − IM ≈ 1, and we consider the linearised equations for the infected individuals around the DFE

       
       
I′
P = βH←M ρIM
qp
c(p, q) + l − γIP ,
I′
NP = βH←M ρIM
1−p
c(p, q) + l − γINP ,
I′
M = βM←H
qIP + INP
c(p, q) + l − μIM ,
(10)
9

where ρ and l are defined as in (6). Following [23, 29], we define a matrix accounting for infection
B(p, q) :=

  
0 0 ρqpβH←M
c(p,q)+l
0 0 ρ(1−p)βH←M
c(p,q)+l
qβM ←H c(p,q)+l
βM ←H
c(p,q)+l 0

  
, p, q ∈ [0, 1], (11)
and a matrix accounting for transition Σ := diag(γ, γ, μ), so that the Jacobian matrix of system (10) can be easily written as B(p, q) − Σ. Then, according to [22], the CRN Rc(p, q) is obtained as the spectral radius of the NGM defined as K(p, q) := B(p, q)Σ−1 and explicitly reads
Rc = R0 × 1 + l
c(p, q) + l × p1 − p(1 − q2) , (12)
where
R0 := 1
1+l ×
s
βH←M βM←H
γμ ρ (13)
is the BRN (i.e. the reproduction number in the absence of protective behaviour). Note that if p = 0 (no one is protecting) or q = 1 (protection is useless), then Rc = R0. Moreover, it is interesting to observe that if p = 1 and l = 0, then Rc = R0. This is actually a consequence of the Ross–Macdonald-like assumptions underlying the model. In fact, in this setting we have that all individuals adopt protective behaviour. However, the mosquito biting rate is fixed, which means that mosquitoes will f-
eed on some individuals, no matter what. Since l = 0, they will necessarily feed on humans. Hence, if protection fails, mosquito bites will all be concentrated on those individuals for which protection fails. Now, it is natural to ask whether the presence of awareness in the human population leads to a decreased value of the reproduction number, i.e. we look for conditions guaranteeing
Rc(p, q) < R0. (14)
In this regard, we have the following result.
Proposition 2.6. Let p ∈ (0, 1), q ∈ [0, 1) and l ≥ 0. Then (14) holds if and only if
l > F (p, q), with F (p, q) := (1 − p)(1 − q)
p1 − p(1 − q2) + q . (15)
Proof. From (12), the inequality Rc(p, q) < R0 is equivalent to
1+l (1 − p + qp) + l
p1 − p + q2p < 1 ⇐⇒ (1 + l)p1 − p + q2p < (1 − p + qp) + l ,
which in turn gives
hp1 − p + q2p − (1 − p + qp)
i
+l
hp1 − p + q2p − 1
i
< 0 . (16)
We consider the first term on the LHS of (16). Note that p1 − p + q2p−(1−p+qp) = p1 − p(1 − q2)− [1 − p(1 − q)] and, since 1 − p(1 − q) ≥ 0 for all p, q ∈ [0, 1], we get p1 − p(1 − q2) − [1 − p(1 − q)] > 0 ⇐⇒ (1 − q)2p(1 − p) > 0 which is obvious if q ∈ [0, 1) and p ∈ (0, 1). Hence
p1 − p + q2p − (1 − p + qp) > 0, p ∈ (0, 1), q ∈ [0, 1). (17)
10

Figure 3: The behaviour of the function F (p, q) in (15). Note that this is independent of all the parameters of the model but p and q.
As for the second term on the LHS of (16), it is clear that p1 − p + q2p = p1 − p(1 − q2) < 1, for p ∈ (0, 1] and q ∈ [0, 1). Hence
l
hp1 − p + q2p − 1
i
< 0, p ∈ (0, 1], q ∈ [0, 1), (18)
which implies that the presence of other hosts l always contributes to reducing the value of Rc in the
presence of protective behaviour. Now, (18) implies that (16) is equivalent to l[1 − p1 − p + q2p] > p1 − p + q2p − (1 − p + qp) which in turn is equivalent to
l>
p1 − p + q2p − (1 − p + qp)
1 − p1 − p + q2p . (19)
Eventually, some lengthy computations show that the term on the RHS of (19) can be rewritten for p, q ∈ (0, 1) as
p1 − p + q2p − (1 − p + qp)
1 − p1 − p + q2p = (1 − p)(1 − q)
p1 − p(1 − q2) + q .
Corollary 2.7. Let p ∈ (0, 1), q ∈ [0, 1) and l ≥ 0. Then (14) holds if and only if
Ap2 + Bp + C < 0,
with A := (1 − q)2, B := (1 − q)[l2(1 + q) + 2ql − 2(1 − q)], and C := (1 − q)[1 − q(1 + 2l) − l2(1 + q)].
Proof. Rewriting (15) in terms of p, the inequality follows.
The behaviour of the function F (p, q) is depicted in Figure 3. Note that it is completely independent of all the model parameters, but p, q. Essentially, Theorem 2.6 states that if there are not enough “other available hosts”, or, under the other interpretation of L (recall Remark 2.1), if human hosts are not sufficiently distanced from each other, then protective behaviour only in a part of the population might lead
11

to an increased value of R0. This result is, to our knowledge, new in the literature, as it directly expresses the effectiveness of self-protective measures against mosquito bites in reducing the value of R0 in terms of a penalty term for the mosquito probability of biting a human. Yet, Theorem 2.6 is consistent with recent results in the literature discussing the potential negative effect of imperfect and/or partial protection strategies on the spread of a vector-transmitted disease. For instanc-
e, as already mentioned in the introduction, in [53], the authors discussed the effect of static partial protective behaviour on the value of the reproduction number, starting from considerations on the effect of host diversity on the spread of vector-borne infections [54]. In particular, in the supplementary materials of [53], the authors derived threshold conditions, in terms of what here is denoted by p, determining whether protective behaviour might lead to an increased or decreased value of R-
0. They showed that this rebound effect is attained whenever protection in one group makes protected individuals less available to spot, and diverts the vectors bites in the sub-population not using protective measures [44, 56], under the assumption that the time required to handle protected and non-protected individuals are approximately the same. This is exactly the framework we adopt in the present work; see Theorem 2.2. This rebound effect was instead mitigated in the case where the adoption o-
f protective measures, such as bed-nets or repellents, would make mosquito spend a not negligible amount of time in trying to attempt a bite on protected humans, hence ensuring somehow a beneficial effect also on the non-protected part of hosts. Let us mention that the inequality in Theorem 2.7, expressed in terms of p, provides a result similar to that contained in [54]. Since A > 0, one can derive critical thresholds p ̄1, p ̄2 ∈ R such that Rc(p, q) < R0 for p ∈ (p1, p2), with p1, p2 possibly l-
arge. From Theorem 2.6, we also immediately obtain the following corollary.1
Corollary 2.8. Let l = 0. Then, Rc(p, q) ≥ R0, ∀p ∈ [0, 1), q ∈ (0, 1]. In particular, letting r(p, q) := Rc(p, q)/R0, we have r(1, q) = 1, r(p, q) > 1, with ∂qr(p, q) < 0 for all q ∈ [0, 1) and p ∈ (0, 1).
Thus, either in the absence of other hosts or under conditions of high population density, human static protective behaviour always leads to an increased value of R0 when it is only partially adopted (p < 1) or partially effective (q > 0). This is in accordance with the results of [30, 37] in the context of vector-host models with heterogeneous host populations. In particular, in [30] the authors show that for vector-host models, static heterogeneity in the host population always leads to an incre-
ased value of R0 in the absence of non-competent hosts, while in [37] they also discuss its effect on the final size of the epidemic. See also the recent work [9], in which the authors, starting from the considerations of [30, 37], investigate the role of heterogeneity on the invasion probability of a vector-borne disease in multi-host models. Finally, it is also interesting to observe that, from (16), the presence of other hosts, i.e. l > 0, always decreases the value of R0 also in the absence of-
 awareness or intervention, i.e. q = 1 or p = 0. This phenomenon is commonly known (especially in the context of tick-borne infections) as the dilution effect [64]; we refer to [62] for further details. Eventually, if we consider Rc(p, q) as a function of q, it is not difficult to derive the following result.
Proposition 2.9. Let l ≥ 0. Then, for every p ∈ [0, 1], the function Rc(p, q) reaches a minimum, lower than R0, at
q= 1−p
1−p+l=1− l
1−p+l .
Theorem 2.9 states that when protective behaviour is static, then the largest reduction of R0 is obtained at an intermediate level of the effectiveness of protection 1 − q. Figure 4 shows the behaviour of Rc as a function of q for different values of p and l.
1Note that Theorem 2.8 also easily follows by observing that putting l = 0 in (2.8), we obtain p2 − p + 1 < 0, which has no real solutions.
12

Figure 4: Rc as a function of q for different values of p and l, with ρ = 2 and epidemiological parameters as in Table 2.
2.3 Asymptotic dynamics and final size
In this section, we study the long-term dynamics of the solutions of system (5), and we numerically investigate the effect of host static protective behaviour on the epidemic final size [10, 11, 21]. We start by observing that, as no human demography or loss immunity are assumed in the model, the only non-trivial equilibria of (5) are determined by the condition IP = INP = IM = 0. Hence, after an outbreak has occurred, we expect the disease to die out in the long run. This is proved in the followi-
ng proposition.
Proposition 2.10. For system (5) one has
lim
t→+∞ IP (t) = lim
t→+∞ INP (t) = lim
t→+∞ IM (t) = 0.
Proof. For SP , SNP , IP , INP ∈ R>0, the inequalities in (8) hold. Hence, both XP := SP + IP and XNP := SNP + INP are decreasing functions of t, thus they admit limits X∞
P , X∞
NP ≥ 0, respectively, for t → +∞. Then, we observe that
−∞ < X∞
P − XP (0) = −γ
Z +∞
0
IP (t) dt, (20)
which implies that IP (t) → 0 as t → +∞. The claim follows by applying the same reasoning to INP , and by noticing that IP (t), INP (t) → 0 implies IM (t) → 0.
In the remainder of this section, we investigate how partial protective behaviour affects the final size of the epidemic. Note that, in general, determining final size relations even for simple vector-borne epidemic models is not an easy task. Indeed, to our knowledge, these aspects have only been investigated in some recent papers [10, 11] (see also [36]), where the authors obtained some approximate formulas, providing lower and upper bounds; see also [62] for a discussion on this. We also refer -
the interested reader to the recent papers [49, 50], in which the authors study final size relations for multi-group SIR models without (both vector and host) demography. Given the above discussion, in this section, we will resort to numerical simulations to explore the effect of protective behaviour on the epidemic final size. In particular, we plot YP , YNP , the relevant sum
13

Table 2: Parameter values inspired by dengue fever and taken from [76]. Recall that βH←M = b × pH←M and βM←H = b × pM←H (5).
Parameter Interpretation Value Reference b mosquito biting rate 0.5 days−1 [1] pH←M probability of transmission per bite from mosquito to human 0.75 [57] pM←H probability of transmission per bite from human to mosquito 0.375 [57] 1/γ average human infectious period 5 days [57] 1/μ average mosquito life span 10 days [2]
YH := YP + YNP , and the fractions taken over each subgroup YP /p and YNP /(1 − p), for Y ∈ {I, R}. Then, we look at the (numerically approximated) limits
R∞
H := lim
t→+∞ RH (t), Rˆ∞
P := lim
t→+∞ RP (t)/p and Rˆ∞
NP := lim
t→+∞ RNP (t)/(1 − p),
which represent the total size of the epidemic (R∞
H ) and the final sizes in each subgroup (Rˆ∞
NP , Rˆ∞
NP ), respectively.
We take model parameters inspired by dengue, taken from [76], and reported in Table 2, namely βH←M := bpH←M , βM←H := bpM←H ,γ and μ. As for l, in Figures 5 and 6 we take l = 0.25, so that H represents the 80% of H + L, while in Figure 7 we take l = 1 so that H represents the 50% of H + L. In both cases, for the sake of comparison, ρ is chosen so that the value R0 ≈ 2.12 is preserved. Finally, we take the following initial conditions: IM (0) = 10−4, SM (0) = 1 − I(0), SP (0) = p, SNP (0) = 1 − p, -
IP (0) = INP (0) = RP (0) = RNP (0) = 0.
The upper row of Figure 5 shows a simulation for (5) with q = 0.2 and p = 0.6, which gives Rc ≈ 2.24 > R0. Observe that, although protective behaviour leads to an increased value of the reproduction number, the final size of the epidemic R∞
H is lower than that for the model without protective behaviour, indicating that personal protection against mosquito bites helps in reducing the total number of infections in the long run. Yet, the lower row of Figure 5 shows that while protective behaviour reduces the total proportion of individuals who have been infected in the protected subpopulation (Rˆ∞
P ), the total
proportion of individuals who have been infected in the non-protected one (Rˆ∞
NP ) increases with respect to the case of the model without protection. Note that a similar phenomenon has been observed also in [37], in the case of vector-borne epidemic model with heterogeneity in mosquito preferences. It is interesting to observe that the same phenomenon is observed in Figure 6, where instead we take p = 0.9, so that Rc ≈ 1.85 < R0. Hence, in this case, even though protective behaviour effectively reduces the value of R0 (and hence, the probability that an outbreak occurs) an-
d the final size of the epidemic (which in this case is lower than that for p = 0.6), it still leads to an increased proportion of individuals who eventually get infected in the non-protected sub-group.
In contrast, in Figure 7, where we take p = 0.6 but with l = 1, we not only obtain that protective behaviour effectively reduces the value of R0, as Rc ≈ 1.82 < R0, but it also reduces Rˆ∞
NP , with a final
size of the epidemic R∞
H even slightly lower than that observed for Figure 5. A possible explanation for this may be given by the larger value of l here assumed (recall that ρ is varied accordingly to preserve R0 ≈ 2.12). Indeed, even if the value of R0 is unchanged with respect to the simulations in Figures 5 and 6, this larger fraction of non-competent hosts (or given the other interpretation of L, a larger distance between hosts individuals) serves as a “shield” against the possible effect that protective behaviour h-
as in reverting mosquito bites from the protected group to the non-protected one.
14

Figure 5: A simulation for model (5) with l = 0.25, ρ = 2, epidemiological parameters as in Table 2, q = 0.2 and p = 0.6, which give R0 ≈ 2.12 and Rc ≈ 2.24. Top row: fraction of protected individuals (solid blue), fraction of non-protected individuals (solid red), total fraction of individuals (solid yellow) and the corresponding simulation for the total fraction for the model without protection (q = 1, dashed green) in the infected class (left) and the removed class (right). Bottom row: fractio-
ns of individuals taken over each subgroup. Left: IP /p (solid blue), INP /(1 − p) (solid red) and the corresponding simulation for the model without protective behaviour (q = 1) IH = IP /p = INP /(1 − p) (dashed green). Right: RP /p (solid blue), RNP /(1 − p) (solid red) and the corresponding simulation for the model without protective behaviour (q = 1) RH = RP /p = RNP /(1−p) (dashed green). The initial conditions are IM (0) = 10−4, SM (0) = 1 − I(0), SP (0) = p, SNP (0) = 1 − p, IP (0) = INP (0-
) = RP (0) = RNP (0) = 0.
15

Figure 6: A simulation for model (5) with l = 0.25, ρ = 2, epidemiological parameters as in Table 2, q = 0.2 and p = 0.9, which give R0 ≈ 2.12 and Rc ≈ 1.85. Upper row: fraction of protected individuals (solid blue), fraction of non-protected individuals (solid red), total fraction of individuals (solid yellow) and the corresponding simulation for the total fraction for the model without protection (q = 1, dashed green) in the infected class (left) and the removed class (right). Lower row: fracti-
ons of individuals taken over each subgroup. Left: IP /p (solid blue), INP /(1 − p) (solid red) and the corresponding simulation for the model without protective behaviour (q = 1) IH = IP /p = INP /(1 − p) (dashed green). Right: RP /p (solid blue), RNP /(1 − p) (solid red) and the corresponding simulation for the model without protective behaviour (q = 1) RH = RP /p = RNP /(1−p) (dashed green). The initial conditions are IM (0) = 10−4, SM (0) = 1 − I(0), SP (0) = p, SNP (0) = 1 − p, IP (0) = INP (-
0) = RP (0) = RNP (0) = 0.
16

Figure 7: A simulation for model (5) with l = 1; ρ = 5.12, epidemiological parameters as in Table 2, q = 0.2 and p = 0.6, which give R0 ≈ 2.12 and Rc ≈ 1.82. Upper row: fraction of protected individuals (solid blue), fraction of non-protected individuals (solid red), total fraction of individuals (solid yellow) and the corresponding simulation for the total fraction for the model without protection (q = 1, dashed green) in the infected class (left) and the removed class (right). Lower row: fracti-
ons of individuals taken over each subgroup. Left: IP /p (solid blue), INP /(1 − p) (solid red) and the corresponding simulation for the model without protective behaviour (q = 1) IH = IP /p = INP /(1 − p) (dashed green). Right: RP /p (solid blue), RNP /(1 − p) (solid red) and the corresponding simulation for the model without protective behaviour (q = 1) RH = RP /p = RNP /(1−p) (dashed green). The initial conditions are IM (0) = 10−4, SM (0) = 1 − I(0), SP (0) = p, SNP (0) = 1 − p, IP (0) = INP (-
0) = RP (0) = RNP (0) = 0.
17

3 Information-dependent behavioural changes
In this section, we modify model (5) by allowing individuals to dynamically change their behaviour according to the current information they have about an ongoing epidemic. To model this scenario, we follow the approach of [27, 28, 32] by introducing the information index J(t),2 which provides a summary of the publicly available information on the infection at time t ≥ 0. In particular, here we assume that J(t) is a function of the present and past prevalence [27] in humans of the vector-borne dis-
ease circulating within the population. To model this, we assume that J : [0, ∞) → R≥0 is defined as
J(t) : =
Zt
−∞
g(IP (θ) + INP (θ))K(t − θ) dθ, (21)
where g : R≥0 → R≥0 is a strictly increasing function satisfying g(0) = 0, which describes how the present and past values of the prevalence translate into information, and K is a non-negative memory
kernel such that R ∞
0 K(τ ) dτ = 1, and weights the role of current and past infections on current available information. Let us mention that, in principle, J(t) might depend on a variety of (epidemiological) variables. For instance, J(t) might depend on the current and past values of the human incidence, as in [28]; see also [14]. Here, for the sake of simplicity, we only consider the prevalence-dependent case.
Let us consider model (5) again. We assume that individuals can change their behaviour according to information on the present and past prevalence, that is, on J(t). This means that individuals are allowed to move from group HP to group HNP , and viceversa, according to the following system of ODEs:
( H′
P = a(J )HNP − w(J )HP ,
H′
NP = −a(J )HNP + w(J )HP ,
(22)
which is obtained from the model proposed in [19] by allowing the rates a, w to depend on J. We interpret variations in a, w as the result of the actions of public campaigns by the PHS encouraging individuals to adopt protective measures against mosquito bites, and of the willingness of host individuals to follow such advices. In particular, we assume that a, w satisfy the following requirements
Assumption 1. a(x), w(x) > 0, a′(x) > 0 and w′(x) ≤ 0 for all x ∈ [0, +∞).
Assumption 1 models a scenario in which public campaigns from the PHS and general increasing information on the current epidemic provide a beneficial effect to the host population, which increases its awareness concerning the disease and, consequently, its willingness in adopting self-protective measures. We believe that such assumptions would be reasonable in the case of a first large outbreak of an infectious disease for which the host population has no previous knowledge about past epidemics, a-
s in the case of vector-borne diseases in, e.g. temperate European countries such as Italy.
In Figure 8, we provide a schematic representation of the flow of (22). From p := HP /H (the fraction of individuals adopting protective behaviour in the population; hence, the fraction of those not adopting it will be 1 − p at all times) and using (HP + HNP )′ ≡ 0, it is easy to see that (22) can be conveniently rewritten as
p′ = a(J)(1 − p) − w(J)p = a(J) − [a(J) + w(J)]p. (23)
2Note that, in the literature, the information index is often denoted with M (t) [14, 27, 28, 32]. However, here we denote it with J(t) as M already represents the mosquito population size.
18

HP HNP
w(J )
a(J )
Figure 8: Flow chart for model (22).
Then, taking into account (23), we modify (5) as follows:

                          
                          
S′
P = −βH←M ρIM
qSP
c(p, q) + l + a(J)SNP − w(J)SP ,
S′
NP = −βH←M ρIM
SN P
c(p, q) + l − a(J)SNP + w(J)SP ,
I′
P = βH←M ρIM
qSP
c(p, q) + l − γIP + a(J )INP − w(J )IP ,
I′
NP = βH←M ρIM
SN P
c(p, q) + l − γINP − a(J )INP + w(J )IP ,
p′ = a(J) − [a(J) + w(J)] p,
I′
M = βM←H (1 − IM ) qIP + INP
c(p, q) + l − μIM ,
J(t) =
Zt
−∞
g(IP (θ) + INP (θ))K(t − θ) dθ.
(24)
where c(p, q) = 1 − p(1 − q), recall (3).
Remark 3.1. A model similar to (22) has been proposed in [63], where the authors included, in a much more complicated system (including, among other features, human demography, stages of mosquito life cycle and additional interventions on the mosquito population) the possibility that only susceptible individuals could change their behaviour with rates dependent on the information on the current prevalence (i.e. in our notation, J := IH ), while they assumed that the protective behaviour in the inf-
ected and removed classes is static. Thus, the model here proposed represents an extension of the model presented in [63] to the case where all human individuals can change their behaviour according to a possibly delayed information on the prevalence.
In the following, for the sake of simplicity, we take g(x) = x and, as common in the literature [28, 32], we assume that
K(θ) = knθn−1e−κθ
(n − 1)! , θ ∈ R≥0, n ∈ N, k ∈ (0, +∞), (25)
i.e. K is an Erlang distribution density function with shape parameter n and mean φ = n/k (k is the rate
of the distribution) and standard deviation σ = √n/k. This “simplifying” assumption on K allows us to use the Linear Chain Trick [48] to reduce the equation for J to a system of ODEs. In particular, for n = 1 one can rewrite the equation for J as
J ′ = k (IP + INP ) − kJ, (26)
19

while for n ≥ 1, it can be reduced to the following system of ODEs:
( Z′1 = k (IP + INP ) − kZ1
Z′
i = kZi−1 − kZi, i = 2, . . . , n, (27)
with Zn = J. In the following, for the sake of generality, we avoid the use of (26) and refer only to (27), with the convention that for n = 1, system (27) will implicitely denote (26) and Z1 = Zn−1 = J. Moreover, we will refer to φ as the “delay”, since it qualitatively represents a lag between the current time under observation and the peak of K in the past. Note that, when k → +∞ and n is bounded, one has φ, σ → 0+, i.e. K converges in distribution to a Dirac delta concentrated at 0. In particu-
lar, the information becomes instantaneous. On the other hand, if both n, k increases in such a way that φ remains constant, then the Erlang distribution becomes narrower around its mean. This means that the memory will become more concentrated around the delay φ. In particular. In particular, if we let n, k → +∞ then the n-Erlang distribution approaches a discrete delay at a linear rate [3], i.e. it converges to a Dirac delta concentrated at −φ. In this case, one reduces to the case of a memory c-
oncentrated at t − φ. For later use, we define
SH := SP + SNP , and IH := IP + INP . (28)
As we are dealing with fractions, the biologically meaningful state space for the solutions of model (5) turns out to be the set
Ω := {(SP , IP , SNP , INP , IM , Z1, . . . , Zn−1, J ) ∈ R6+n
≥0 :
0 ≤ SP , IP , SNP , INP , IM , Zi, J ≤ 1, i = 1, . . . , n − 1}, (29)
for which the following result holds.
Proposition 3.2. For every initial condition
X(0) := (SP (0), IP (0), SNP (0), INP (0), p(0), IM (0), Z1(0), . . . , Zn−1(0), J (0)) ∈ Ω,
system (5) admits a unique solution
X(t) := (SP (t), IP (t), SNP (t), INP (t), p(t), IM (t), Z1(t), . . . Zn−1(t), J (t)) ∈ Ω,
which is globally defined in future. Furthermore, the inequality SH (t) + IH (t) ≤ SH (0) + IH (0) holds for every t ≥ 0.
Proof. Let X(0) ∈ Ω. The local existence and uniqueness of the solution X(t) of the Cauchy problem relevant to (5) follows from the Cauchy-Lipschitz theorem. Now, for each
Z ∈ {SP , IP , SNP , INP , IM , Z1, . . . , Zn−1, J },
one has Z′|Z=0 ≥ 0, which implies that X(t) ∈ R6+n
≥0 for all t ≥ 0 for which the solution is defined.
Furthermore, the inequalities (SH + IH )′ = −γIH ≤ 0, p|′
p≥1 ≤ −ω(J )p ≤ 0 and I′
M |IM ≥1 ≤ −μIM ≤ 0 imply that SP , IP , SNP , INP , p, IM ≤ 1. From this, one also gets Zi|Zi≥1 ≤ 0 for i = 1, . . . , n (recall Zn = J), which gives Zi ≤ 1. Hence, standard arguments give that X(t) ∈ Ω is globally defined in future and SH (t) + IH (t) ≤ SH (0) + IH (0) for all t ≥ 0.
20

3.1 Control reproduction number
As for the model with static behaviour, in this section we compute the CRN Rˆc for model (24). For every a0 := a(0) > 0 and w0 := w(0) > 0, the model (24) admits the DFE
(S∗
P , S∗
NP , I∗
P, I∗
NP , p∗, I∗
M , J ∗) := (p0, 1 − p0, 0, 0, p0, 0, 0) , (30)
where
p0 := a0
a0 + w0
. (31)
Linearising the equations for the infected individuals around the DFE in (30), we obtain

       
       
I′
P = βH←M ρIM
p0q
c(p0, q) + l − γIP + a0INP − w0IP ,
I′
NP = βH←M ρIM
1 − p0
c(p0, q) + l − γINP − a0INP + w0IP ,
I′
M = βM←H
qIP + INP
c(p0, q) + l − μIM ,
Then, considering an infection matrix B defined as in (11) and the transition matrix
Σˆ :=


γ + w0 −a0 0 −w0 γ + a0 0 0 0μ

 , (32)
the CRN Rˆc = Rˆc(p0, q) is obtained as the spectral radius of Kˆ := BΣˆ −1, and for p0 as in (31) it reads
Rˆc(p0, q) = R0 × 1 + l
c(p0, q) + l ×
s
qp0 (a0q + γq + w0) + (1 − p0) (a0q + w0 + γ)
a0 + w0 + γ . (33)
Note that the argument of the square root in (33) is non-negative for a0, w0 ∈ (0, +∞), hence Rˆc(p0, q) ≥ 0 is well-defined. In particular, the following result holds.
Proposition 3.3. Let Rc be defined as in (12) and a0, w0 ∈ (0, +∞). Then
Rˆc(p0, q) < Rc(p0, q), for all p0 ∈ (0, 1], q ∈ [0, 1), (34)
Moreover, if a0, w0 → 0+ in such a way that p := lima0,w0→0+ p0 exists finite, then
lim
a0 ,w0 →0+
Rˆc(p0, q) = Rc(p, q). (35)
If instead a0, w0 → +∞ in such a way that p ̄ := lima0,w0→+∞ p0 exists finite, then
lim
a0 ,w0 →+∞
Rˆc(p0, q) = R0 × c(p ̄, q)(1 + l)
c(p ̄, q) + l < R0, for all p ̄ ∈ (0, 1], q ∈ [0, 1) . (36)
Proof. Observe that
qp0 (aq + γq + w) + (1 − p0) (a0q + w0 + γ)
a0 + w0 + γ = 1 − p0(1 − q2) − p0(1 − q)2w0
a0 + w0 + γ . (37)
21

Hence, the relation in (34) immediately follows from (33) and (37) by observing that p0(1 − q)2w0/(a0 + w0 + γ) > 0 for a0, w0 ∈ (0, +∞) and q ∈ [0, 1). As for the limits in (35) and (36), it suffices to observe that lima0,w0→0+ p0(1 − q)2w0/(a0 + w0 + γ) = 0 and
lim
a0 ,w0 →+∞
p0(1 − q)2w0
a0 + w0 + γ = lim
a0 ,w0 →+∞
p0(1 − q)2(1 − p0) 1+ γ
a0 +w0
= p ̄(1 − p ̄)(1 − q)2,
from which the claim follows.
Let us remark that the results of Theorem 3.3 were partially numerically observed in [19] in the case of an information-free behavioural model, for certain choices of the model parameters. Yet, to our knowledge, no rigorous proof of (34) was previously given.
Let us note Diversity amplification ultimately results from mosquitoes’ propensity to focus bites on preferred hosts [54], and so our results indicate that the movement of people between protected and unprotected classes can severely hinder mosquitoes’ tendencies to focus attacks on unprotected human sub-populations, even when host population levels are in equilibrium and the flux between classes is rather small.
As an application of Theorem 3.3, let us consider epidemiological parameters as in Table 2, with l = 0.25 and ρ = 2, p = 0.6 and q = 0.2 as in Figure 5. Then (12) gives Rc ≈ 2.24 > 2.12 ≈ R0. Let us
take w0 = 0.1, 1, 10, 100 and let a0 = w0p/(1 − p), so that p0 := p. Then (3.1) gives Rˆc ≈ 2.06 for
w0 = 0.1, Rˆc ≈ 1.88 for w0 = 1, Rˆc ≈ 1.84 for w0 = 10, 100, while the limit in (36) gives Rˆc ≈ 1.80.
Note that for all these choices of w0, one has Rˆc < R0 < Rc.
4 Separation of time scales
In this section, we assume that the dynamics of model (24) evolve on two different time scales. In particular, as common in the literature, we assume that behavioural changes occur at a different, faster time scale than the epidemiological dynamics. On the one hand, as already observed in [19], if one assumes that the epidemiological dynamics evolve much faster than the behavioural ones, then the model in (24) essentially reduces, in the fast time scale, to the model with static protective behavio-
ur in (5). Then, we expect the protective behaviour induced-dynamics to be completely determined by the initial fraction of individuals that are protecting themselves, with no information induced effects. On the other hand, it is much more interesting, from both the biological and the mathematical point of view, to investigate the role of information-induced behavioural changes when these occur at a much faster time scale than the epidemiological dynamics. Note that this is a common assumption in -
the literature; see, for instance, [12, 18, 61]. Let us mention that in [19], the authors heuristically discussed the case of infinitely large (and information-free) switching rates by discussing the possible relations of a two-group model with dynamical changes of behaviour with a model for a homogeneous population. Their argument follows from some consideration on the expressions for R0 derived from the two models, and by opportunely adjusting the model ingredients of the one-group model to make-
 the relevant expression for R0 coincide to that of the two-group model in the fast time scale limit. In this section, instead, we provide a rigorous derivation of this reduction to a model for a homogeneous population by exploiting an approach based on the GSPT.
To do this, we assume that βH←M , βM←H , γ, μ ∈ O(ε), for some 0 < ε ≪ 1, while all remaining parameters are O(1). This qualitatively corresponds to assuming that opinion spreads much faster than the disease and the relevant information, i.e. the system evolves on two distinct time scales. Under these assumptions, with a slight abuse of notation to avoid the introduction of four new parameters, model (24)
22

may rewritten as

                             
                             
S′
P = −εβH←M ρIM
qSP
c(p, q) + l + a(J)SNP − w(J)SP ,
S′
NP = −εβH←M ρIM
SN P
c(p, q) + l − a(J)SNP + w(J)SP ,
I′
P = εβH←M ρIM
qSP
c(p, q) + l − εγIP + a(J )INP − w(J )IP ,
I′
NP = εβH←M ρIM
SN P
c(p, q) + l − εγINP − a(J )INP + w(J )IP ,
p′ = a(J) − [a(J) + w(J)] p,
I′
M = εβM←H (1 − IM ) qIP + INP
c(p, q)h + l − εμIM ,
Z′1 = εk (IP + INP ) − εkZ1
Z′
i = εkZi−1 − εkZi, i = 2, . . . , n,
(38)
with Zn = J. Letting ε → 0+ in system (38), we obtain the corresponding so-called layer system

      
      
X′
P = a(J )XNP − w(J )XP ,
X′
NP = −a(J )XNP + w(J )XP , for X ∈ {S, I},
p′ = a(J) − [a(J) + w(J)] p,
J ′ = 0.
(39)
Note that we omit the equations for IM and Z1, . . . , Zn−1, as they do not evolve in this time scale, nor do they appear in any of the remaining equations. Moreover, observe that
XH := XP + XNP , for X ∈ {S, I}, (40)
satisfies X′
H = 0. Therefore, (39) can be rewritten as

      
      
S′
P = a(J)SH − [a(J) + w(J)]SP ,
I′
P = a(J)IH − [a(J) + w(J)]IP ,
p′ = a(J) − [a(J) + w(J)] p,
S′
H = I′
H = J ′ = 0.
(41)
Let Ω := [0, 1]6. The set of equilibria of system (41) is given by
C0 := (SP , IP , p, SH , IH , J ) ∈ Ω SP = pSH , IP = pSH , p = a(J )
a(J) + w(J) . (42)
This set is known, in the field of GSPT, as the critical manifold of system (38). The following result holds.
Proposition 4.1. The set C0 in (42) is globally attracting for system (41) on Ω.
23

Proof. For any (SP (0), IP (0), p(0), SH (0), IH (0), J(0)) ∈ Ω, the solutions of system (41) are explicitly given by
XP (t) = e−[a(J)+w(J)]tXP (0) + a(J )
a(J ) + w(J )XH (1 − e−[a(J)+w(J)]t), (43)
for (XP , XH ) ∈ {(SP , SH ), (IP , IH ), (p, 1)}, which gives (SP (t), IP (t), p(t)) → C0 as t → +∞.
Theorem 4.1 ensures that the dynamics of system (38) are attracted to the critical manifold (42), where the small parameters start playing a major role. Now we study the slow dynamic of the system, i.e. we consider the slow time scale τ = εt. In this setting, we have
SP = p(J )SH , IP = p(J )IH , p(J ) = a(J )
a(J) + w(J). (44)
Thus, system (38) reduces to

          
          
S ̇H = −βH←M ρIM h(p(J ), q)SH ,
I ̇H = βH←M ρIM h(p(J ), q)SH − γIH ,
I ̇M = βM←H (1 − IM )h(p(J ), q)IH − μIM ,
Z ̇1 = kIH − kZ1
Z ̇i = kZi−1 − kZi, i = 2, . . . , n,
(45)
with Zn = J, where Y ̇ := d
dτ Y , and
h(p, q) := c(p, q)
c(p, q) + l , p ∈ [0, 1], q ∈ [0, 1).
Note that h(p, q) ≥ 0 for p ∈ [0, 1] and q ∈ [0, 1). Moreover, since Assumption 1 ensures that w(x) > 0 for x ≥ 0, we obtain
h(p(x), q) = w(x) + qa(x)
[w(x) + qa(x)] + l[w(x) + a(x)] = 1
1 + l w(x)+a(x)
w(x)+qa(x)
.
Assumption 1 also ensures that
p′(x) = a′(x)w(x) − a(x)w′(x)
[a(x) + w(x)]2 > 0, x ∈ [0, +∞),
thus
∂ph(p(x), q) · p′(x) = − l(1 − q)p′(x)
[1 − (1 − q)p(x) + l]2 < 0, x ∈ [0, +∞). (46)
Remark 4.2. In [13], Buonomo proposed an SIR-SI model similar to (45) for an endemic scenario of a malaria-like infection, accounting for the human response to the PHS promotion campaign for the use of bed-nets. He modelled this by assuming that the mosquito biting rate, therein interpreted as “humanmosquito contact rate”, was a decreasing function of the current information on the past prevalence and an effort function used to summarize the actions of the PHS in the health-promotion campaign. Yet-
, in that paper he later only discussed numerical results concerning optimal control for the case of prevalenceindependent and exponentially distributed information, giving no other relevant insights into the model dynamics and properties.
24

Remark 4.3. We have h(p(x), q) > 0 for q ∈ [0, 1) and x ∈ [0, +∞). Thus, (46) ensures that h(p(x), q) admits limit for x → +∞, and the largest reduction for the transmission rates βH←M , βM←H is obtained
at  ̄h := limx→+∞ h(p(x), q).
We have the following result on the asymptotic behaviour of the solutions of (45), which easily follows by proceeding as in the proof of Theorem 2.10 by using Theorem 3.2.
Proposition 4.4. For system (45), one has limτ→+∞ IH (τ ) = limτ→+∞ IM (τ ) = 0.
Consequently (as expected), the dynamics of (45) always ends with epidemic extinction, independently of the protective behaviour of the hosts. Yet, we want to investigate the transient behaviour of the solutions of (45), as it is far from trivial given the absence of non-trivial equilibria (with IH ̸= 0 or IM ̸= 0).
5 Numerical simulations
In this section, we present some numerical experiments concerning the proposed model with behavioural changes, comparing the outputs of model (24) with those of the fast system (41). For the simulations, we take epidemiological parameters suitable for a dengue outbreak and listed in Table 2. In addition, we take l = 0.25 and l = 1, and we vary ρ so to preserve the value of R0 ≈ 2.12, recall (13). In particular, we take ρ = 2 for l = 0.25 and ρ = 5.12 for l = 1. We (optimistically) assume that, at -
the beginning of the epidemic, 50% of the whole host population adopts personal protective measures against mosquito bites, i.e. p(0) = 0.5. Moreover, we assume that, at the beginning of the outbreak, the human population is at equilibrium of opinion, i.e. p(0) = p0, for p0 defined as in (31). As for the rates a and w, we consider the following forms:
a(x) = a0 + αx, a0, α ≥ 0, and w(x) ≡ w0, w0 > 0. (47)
In particular, we vary w0 > 0, whereas a0 = w0p0/(1 − p0) according to (31), and take α = χ × w0, where χ > 0 accounts for both the effect of PHS campaigns and for human reaction to information. Finally, we vary q ∈ [0, 1), the shape parameter n ∈ N and the delay φ of the Erlang distribution in (25), and as we observe the outbreak from its very beginning, we consider the initial conditions
SP (0) = p0, SNP (0) = 1 − SP (0), IP (0) = INP (0) = 0, IM (0) = 10−4.
The numerical results are obtained through the MATLAB built-in ODE solvers ode45 and ode23s with standard tolerance (the latter is used in the case w0 ≥ 10).
Remark 5.1. The term w0 in α is used to standardize the human response to information to the magnitude of the reaction term w0. Regarding how to choose α, let us consider the case J = IH , for IH defined as in (40). In this case, taking χ = 104 one has for the one-group model (41) that a(x) = 2w(x) exactly when x = J = IH = 10−4, since a0 = w0. Hence, for instance, if H = 105, then a(x) = 2w(x) when the total number of infected humans at t ≥ 0 is 10. Similarly, it is not difficult to see that for -
these choices of a, w, one has
h(p(x), q) = 1
2 h(0, q) ⇐⇒ x = a0q(1 + 2l) + l(w0 − a0) + w0
α[l − q(1 + 2l)] , l ̸= q(1 + 2l).
In particular, in the case of perfect protection, q = 0, if l = 0.25, the “contact rates” between mosquitoes and humans are halved exactly when IH = 4 × 10−4 (i.e. when the total number of infected individuals is 40), while for q = 0.1 (90% of efficacy), one has IH = 1.2 × 10−3.
25

Figure 9: Comparison between (24) and (45) with model parameters and initial conditions as in Section 5 with l = 0.25, ρ = 2, q = 0 (perfect protection), χ = 104, n = 1, φ = 20 days, and from bottom to top, w0 = 0.1, 1, 10, 100 (which give Rˆc ≈ 2.17, 1.85, 1.78, 1.77, respectively). Left: IH (defined as in (40)) as a function of time for model (24) and (45). Right: proportions SP /SH , IP /IH , p and a(J)/[a(J) + w(J)] as functions of time. Note that in the plots for w0 = 10, 100, the line corre-
sponding to SP /SH is perfectly overlapped with those relevant to IP /IH , p and a(J)/[a(J) + w(J)], which indicates a fast convergence to the manifold C0 in (42).
We start by comparing the outputs of (24) with those of (45) for different orders of magnitude of w0. In Figure 9 (and in other similar experiments conducted by the authors and not included here), we take l = 0.25, ρ = 2 and we observe that, when w0 = 10 days−1 or w0 = 100 days−1 (i.e. it is from 2 to 3 orders of magnitude larger than γ), the results for the two models are (almost) indistinguishable. In particular, note that in the plots for w0 = 10, 100 on the right column, the line corresponding-
 to SP /SH is perfectly overlapped with those relevant to IP /IH , p and a(J)/[a(J) + w(J)], as the solution of (2) almost immediately converges to the critical manifold C0 in (42). Interestingly, even for w0 = 1, the simulation for system (45) produces a good approximation of model (24), although the convergence to the manifold C0 is much slower in this case, leading to quite different times and magnitudes for the (first) peak of the epidemic. Finally, we can observe that for w0 = 0.1 (i.e. it is-
 the same order of magnitude of γ), the dynamics of the two models are very different, as we can easily see that the model solution is still far from converging to the manifold (42). This is also the only case, among all the ones considered here, for which Rˆc ≈ 2.17 > 2.12 ≈ R0; see the caption of Figure 9. Hence, in this case w0 is not large enough to prevent protective behaviour from increasing the probability of outbreak. Given the results showcased in Figure 9, in the following we consider th-
e outputs of model (24) with w0 = 0.1 and w0 = 1, and we compare them with those of (45). In particular, we take χ = 104, φ = 30 days and vary the shape parameter n of the Erlang distribution in (25) as n = 1, 2, 5. In Figures 10, 11 and 12 we plot IH (left and ) and RH (right) as functions of time for n = 1, 2, 5, respectively, and for three different values of q, namely q = 0 (upper row), q = 0.1 (middle row) and q = 0.2 (lower row). We observe that for q = 0 and q = 0.1, information induced beh-
avioural changes effectively prevent a large portion of infections for all choices of n (note the different scales on the vertical axes for the case q = 0 and q = 0.1). Interestingly, in the first and second rows, after a first epidemic peak
26

Figure 10: Plots for (24) (red for w0 = 1, yellow for w0 = 0.1) and (45) (blue) with model parameters and initial conditions as in Section 5, l = 0.25, ρ = 2, and χ = 104 for, from top to bottom, q = 0, 0.1, 0.2, with n = 1 and φ = 30 days in (25). Left and centre: IH as a function of time. Right: RH as a function of time.
Figure 11: Plots for (24) (red for w0 = 1, yellow for w0 = 0.1) and (45) (blue) with model parameters and initial conditions as in Section 5, l = 0.25 and ρ = 2, and χ = 104 for, from top to bottom, q = 0, 0.1, 0.2, with n = 2 and φ = 30 days in (25). Left and centre: IH as a function of time. Right: RH as a function of time.
27

Figure 12: Plots for (24) (red for w0 = 1, yellow for w0 = 0.1) and (45) (blue) with model parameters and initial conditions as in Section 5, l = 0.25 and ρ = 2, and χ = 104 for, from top to bottom, q = 0, 0.1, 0.2, with n = 5 and φ = 30 days in (25). Left and : IH as a function of time. Right: RH as a function of time.
Figure 13: Plots for (24) (red for w0 = 1, yellow for w0 = 0.1) and (45) (blue) with model parameters and initial conditions as in Section 5, χ = 104, q = 0.5, n = 1 and φ = 30 days in (25). Left: IH as a function of time. Right: RH as a function of time. The dashed lines represent the same simulations for the model without protective behaviour (q = 1). Upper row: l = 0.25 and ρ = 2. Lower row: l = 1 and ρ = 5.12.
28

has occurred, the solutions for IH seem to enter a sort of stationary state, although no non-trivial equilibria (i.e. with IH , IM ̸= 0) are admitted in the model. Notably, this phenomenon is only due to the behavioural adaptation in response to the epidemic, and does not represent convergence for the solutions of (24) and (41) to true equilibria of their respective systems. Indeed, observe that RH increases in all cases, indicating that no stationary situation has been reached by the solution, a-
nd IH will inevitably go extinct in the long run, as shown in Theorem 4.4. Furthermore, when the memory distribution is more concentrated around its mean (and hence in the past), as in Figures 11 and 12, we observe the possible appearance of multiple epidemic waves. Note that this occurs exactly when behavioural changes effectively managed to prevent a large portion of infections, as in the case q = 0 and q = 0.1. On the other hand, for the case q = 0.2, we observe that, although the adoption of p-
rotective effectively helps in containing the epidemic, with respect to the case q = 0, 0.1, a larger outbreak occurs, and no oscillations or almost steady-state situations are observed.
Finally, in Figure 13 we compare the outputs of models (24) and (41) for l = 0.25 and l = 1 (hence with ρ = 2 ad ρ = 5.12, respectively) and q = 0.5 (50% probability of protection failure). In this case, we observe in both the upper and lower rows that the rates at which individuals change their behaviour according to information do not particularly affect the overall dynamic. Yet, both scenarios show that the model with protective behaviour results in a lower final size with respect to the model -
without protection (q = 1). In particular, the model with l = 1 predicts a lower final size compared to the model with l = 0.25.
6 Investigating behaviour-induced dynamics
In this section, we are interested in looking at the dynamics of model (45) in a situation where interventions and behavioural changes have successfully prevented a large portion of infections before herd immunity is achieved and seasonality takes over, leaving the susceptible populations sufficiently large, with IH ≪ SH and IM ≪ SM , and with very little information J currently left in the system (for instance, after a first epidemic peak has occurred) [75]. To model this low attack rate scenario-
 (see [31]), we assume that there exists t ̄ ≥ 0 such that IH (t), IM (t), J(t) ∈ O(ε), for some 0 < ε ≪ 1 for all t ≥ t ̄, while S(t) ∈ O(1), and a, w are such that a(x) = a ̄(ε−1x) and w(x) = w ̄(ε−1x). Note that the latter condition implies that information that a very low fraction of the population has been infected is sufficient to induce a highly-protective behaviour. We then look for a system of equations in the new variables I ̄H = ε−1IH and so on. With a slight abuse of notation, we still-
 use the same letters to avoid the introduction of additional variables or parameters (e.g., α will denote here α/ε). The resulting model reads

              
              
S ̇H = −βH←M ρεIM h(p(J ), q)SH ,
εI ̇H = βH←M ρεIM h(p(J ), q)SH − γεIH ,
εI ̇M = βM←H (1 − εIM )h(p(J ), q)εIH − μεIM ,
εZ ̇1 = kεIH − kεZ1,
εZ ̇i = kεZi−1 − kεZi, i = 2, . . . , n − 1,
εJ ̇ = kεZn−1 − kεJ,
29

Then, simplifying ε in every equation except the first one and taking the limit ε → 0+, we obtain the corresponding layer system

          
          
I ̇H = βH←M ρIM h(p(J ), q)SH − γIH ,
I ̇M = βM←H h(p(J ), q)IH − μIM ,
Z ̇1 = kIH − kZ1
Z ̇i = kZi−1 − kZi, i = 2, . . . , n − 1,
J ̇ = kZn−1 − kJ,
(48)
with S ̇H = 0. Observe that the obtained systems resemble the model studied in [75], and successively extended in [4], for an outbreak of a directly transmitted-infection under a low-attack rate assumption. In the following section, we will investigate the existence and stability of equilibria of (48) to gain some insights on the transient dynamics of model (24) and (45).
6.1 Equilibria
In this section, we investigate stationary solutions of system (48). The convergence to such equilibria correspond to a fast “collapsing” of the fast-slow system on its critical manifold, in a neighbourhood of which the slow dynamics plays a central role. Being able to predict the existence of said equilibria and such a convergence allows us to characterize the transient behaviour of our system, even though the asymptotic dynamics will inevitably result in the extinction of the disease, as shown i-
n Theorem 4.4. We observe that the equilibria of (48) are given by the points (I∗
H, I∗
M , J ∗) ∈ R3
≥0 that satisfy the system of nonlinear equations

      
      
I∗
H = βH←M
γ ρSH h(p(J ∗), q)I∗
M,
I∗
M = βM←H
μ h(p(J ∗), q)I∗
H,
Z∗
i = J∗ = I∗
H , i = 1, . . . , n − 1.
(49)
Substituting the second and third equations of (49) into the one for I∗
H , we obtain the nonlinear equation
I∗
H Rˆ2
e h(p(I ∗
H ), q)2 − 1 = 0, (50)
where
Rˆe :=
s
βH←M βM←H
γμ ρ × SH (51)
is the Effective Reproduction Number (ERN, i.e. the reproduction number when the population is not fully susceptible or partially immune [60]) in the absence of protective behaviour (p = 0 or q = 1) and non-competent hosts (l = 0). From (50), it is easy to see that (48) admits the DFE I∗
H = I∗
M = J ∗ = 0. All other possible equilibria are given by the solutions of the nonlinear equation
Rˆ2
e h(p(I ∗
H ), q)2 = 1 . (52)
Note that, as Rˆe > 0 and h(·, ·) ≥ 0, we can reduce to study the equation
h(p(I ∗
H ), q) = 1
Rˆe
. (53)
30

As h(p(x), q) ∈ [0, 1] for all x ≥ 0, it is easy to see that a solution of (53) exists if and only if
Rˆe ≥ 1, and 1
Rˆe
∈ Range h(p(·), q)↾[0,+∞)] . (54)
Note that from (46), the condition in (54) implies that a non-trivial solution of (50) exists only if Rˆeh(p(0), q) > 1, i.e. the ERN relevant to (48) is larger than 1. In particular, we have the following result.
Theorem 6.1. Let Assumption 1 hold, q ∈ [0, 1) and Rˆeh(p(0), q) > 1. Let
η :=
Rˆe − (1 + l)
Rˆe − 1 × 1
1 − q , (55)
and
r(x) := a(x) − η (a(x) + w(x)) . (56)
Then there exists a positive equilibrium of (48) if and only if there exists x ∈ (0, +∞) such that r(x) = 0 and the following inequalities hold
1 + l < Rˆe < 1 + l
q . (57)
Moreover, if such an equilibrium exists, then it is unique and is given by
I∗
H = p−1(η), I∗
M = βM←H
μ h(p(I∗
H ), q)I∗
H, J∗ = I∗
H , (58)
where p(x) = a(x)/ (a(x) + w(x)).
Proof. Let I∗
H be a solution of (53). Then, it satisfies
c(p(I ∗
H ), q) = [c(p(I∗
H ), q) + l] 1
Rˆe
,
which in turn gives
c(p(I ∗
H ), q)
" Rˆe − 1
Rˆe
#
=l
Rˆe
,
and thus, being Rˆe ≥ Rˆeh(p(0), q) > 1, we obtain
1 − p(I∗
H ) + p(I∗
H )q = l
Rˆe − 1 .
Consequently, since q ̸= 1, we arrive at the following equation
p(I ∗
H ) = η, (59)
for η defined as in (55). From Assumption 1, one has p(x) ∈ [0, 1) for all x ≥ 0. Hence, a solution of (59) exists only if 0 ≤ η < 1. Note, however, that η = 0 implies p(I∗
H ) = 0, which is possible if and only
if a(I∗
H ) = 0. This in turn implies I∗
H = 0 as a is non-negative with a′ > 0 on [0, +∞). Hence, if I∗
H
is a positive solution of (53), one must necessarily have 0 < η < 1. From the first inequality we obtain η > 0 ⇐⇒ Rˆe > 1 + l or Rˆe > 1, while the second inequality gives η < 1 ⇐⇒ Rˆe < 1 + l/q
or Rˆe < 1. Since Rˆe > 1, we obtain that η ∈ (0, 1) if and only if (57) holds. Now, inserting (44) into (59),
31

we obtain a(I∗
H )(1 − η) = w(I∗
H )η, which implies that I∗
H is a non-trivial equilibrium of (50) if and only
if (57) and r(I∗
H ) = 0 hold, for r defined as in (56). To show that such an equilibrium is unique whenever it exists, observe that
r′(x) = a′(x)(1 − η) − w′(x) > 0, x ∈ [0, +∞),
which implies that r is injective, hence there exists a unique I∗
H ∈ [0, +∞) such that r(I∗
H ) = 0. Then, the expressions in (58) follows from (49) and (59)
In the following, in accordance with [4], we refer to the non-trivial equilbrium in (58) as the “Established Equilibrium” (EE) instead of “Endemic Equilibrium”, as it represents a stationary situation reached by the system only due to behavioural changes in an outbreak situation rather than in an endemic situation. Interestingly, the existence of the EE essentially depends on four factors, namely l, q, and the special forms of a and w, which determine how quickly humans react to information on pre-
valence. In particular, the more effective is the protection, the less restrictive is the upper bound in (57) for an EE to establish. On the contrary, the larger is l, the more restrictive is the lower bound in (57). From this consideration, for small l ̸= 0 and large l/q, we can expect the outbreak to last longer in time. Note that this situation actually corresponds to that of a mosquito-borne epidemic in a region where high human density and low density of other available food sources cannot hi-
nder an outbreak. In particular, as some individuals adopt very effective protective measures, mosquitoes focus their bites on unprotected human individuals, increasing the probability of a double infection process (vector→human→vector).
Remark 6.2. Observe that (57) gives
Rˆe
1 + l/q < 1 <
Rˆe
1 + l =: Re. (60)
The inequality on the right-hand side essentially states that, in the absence of protective behaviour, the effective reproduction number Re for model (1) (i.e. the reproduction number in (13) when SH ̸= H) is larger than one, that is, an epidemic outbreak (in the presence of non-competent hosts) is still occurring. As for the inequality on the left-hand side, it essentially implies, together with the assumptions of Theorem 6.1, that when enough information is available to the host population and i-
ndividuals can react to it quickly enough, then protective behaviour is able to reduce the effective control reproduction number Rˆeh(p(x), q) below one for some x ∈ [0, +∞), i.e. protective behaviour can effectively hinder the outbreak.
Finally, let us observe that, for l = 0 and p ̸= 0 and q ̸= 1, one has h ≡ 1. Hence, we have the following corollary.
Corollary 6.3. If l = 0, then system (48) admits the DFE only.
6.2 Stability of equilibria
The aim of this section is to investigate the local stability of the equilibria of (48). We do this by looking at the linearisation of (48) around a given equilibrium (I ̄H , I ̄M , J ̄) and by investigating the sign of the real parts of the eigenvalues of the relevant Jacobian. First, we show that the DFE is Locally Asymptotically Stable (LAS) when Rˆeh(p(0), q) < 1, while it is unstable when Rˆeh(p(0), q) < 1, independently of the choice of K in (21) and (25). Then, we consider the stability of -
the EE, proving that it depends on particular shape of the memory kernel. We consider selected choices of K, for which we show that the EE might either be LAS or lose its stability via Hopf, hence ensuring the possible emergence of self-sustained oscillations even in an outbreak scenario. Let
f (x) := h(p(x), q), x ∈ [0, +∞), (61)
32

so that f ′(x) = ∂ph(p(x), q) · p′(x). The linearisation of (48) around an equilibrium (I ̄H , I ̄M , J ̄) reads

          
          
I ̇H = βH←M ρSH f (J ̄)IM + βH←M ρI ̄M SH f ′(J ̄)J − γIH ,
I ̇M = βM←H f (J ̄)IH + βM←H f ′(J ̄)I ̄H J − μIM ,
Z ̇1 = kIH − kZ1
Z ̇i = kZi−1 − kZi, i = 2, . . . , n − 1,
J ̇ = kZn−1 − kJ.
(62)
Then, for K as in (25), by proceeding as in Section B, one obtains the following characteristic equation for the eigenvalues of the Jacobian relevant to (72):
λ2 + λ(γ + μ) + γμ
h
1 − Rˆ2
ef (J ̄)2i
− Kˆ (λ)f (J ̄)f ′(J ̄)γRˆ2
e(λ + 2μ)I ̄H = 0, R(λ) > −k, (63)
where Kˆ denotes the Laplace transform of K, i.e.
Kˆ (λ) :=
Z +∞
0
e−λθK(θ) dθ = k
λ+k
n
, R(λ) > −k. (64)
In the following sections, we specialise (63) for the case of the DFE and the EE.
Remark 6.4. All the results of this section can be extended to the case of general concentrated or distributed memory kernels K (not necessarily Erlang-distributed) by applying the relevant theory for delay equations [24] with, possibly, infinite delay [20]; see for instance [4] for the case of general gamma distributions. Note in fact that in this paper, we rely on this general approach to derive the characteristic equations used to determine the stability of equilibria. However, to keep the pres-
entation of this section simple, here we omit the details for which we refer the reader to Section B.
6.2.1 Stability of the DFE
Let us consider the DFE (I ̄H , I ̄M , J ̄) = (0, 0, 0). Then, the characteristic equations in (63) reads
λ2 + λ(γ + μ) + γμ
h
1 − Rˆ2
ef (0)2i
= 0, R(λ) > −k.
We have the following result.
Theorem 6.5. The DFE is LAS when Rˆeh(p(0), q) < 1 and it is unstable when Rˆeh(p(0), q) > 1, independently of K in (25). In particular, in the latter case, the characteristic equation (74) has exactly two real roots: one negative and one positive.
Proof. Being γ, μ > 0, Descartes’ rule of signs ensures that the DFE is stable when 1 − Rˆeh(p(0), q) > 0,
while it is unstable when 1 − Rˆeh(p(0), q) < 0.
6.2.2 Stability of the EE
Let us consider the EE defined as in (58). Using (52) and (64), the characteristic equation in (63) reads
λ2 + λ(γ + μ) + k
λ+k
n
γδ (λ + 2μ) = 0, R(λ) > −ρ, (65)
33

for δ := −f ′(I∗
H )RˆeI∗
H > 0.3 Note that, in this case, the stability of the equilibrium depends on the particular choice of n, k. In particular, from (65) we are led to investigate the solutions of
λ2(λ + k)n + λ(γ + μ)(λ + k)n + λ(knγδ) + 2knγδμ = 0. (66)
It is interesting to observe that if k → +∞ with n bounded, one has φ := n/k → 0+ (i.e. the information is instantaneous) and the characteristic equation reduces to
λ2 + λ (γ + μ + γδ) + 2μγδ = 0. (67)
Note that this case corresponds to assuming that K is a Dirac delta concentrated at 0, which implies Kˆ ≡ 1. On the other hand, if we let n, k → +∞ in such a way that φ := n/k is constant, then we reduce to the case of a concentrated memory in t − φ and the characteristic equations reads
λ2 + λ(γ + μ) + γδλe−λφ + γμδe−λφ = 0.
We consider the following cases:
• Instantaneous information: the characteristic equations reads as in (67). Then, from (46), the Routh-Hurwitz criterion ensures that the EE is LAS whenever it exists.
• Exponentially fading memory: we assume that K(θ) = ke−kθ, i.e. we take n = 1 in (25). Hence, the equation in (66) becomes
λ2(λ + k) + f (γ + μ)(λ + k) + kγδ (λ + 2μ) = 0. (68)
Then, by applying the Routh-Hurwitz criterion for a third order polynomial (see Section C.1 for a detailed computation), we obtain the following result.
Proposition 6.6. Let the assumptions of Theorem 6.1 hold, and let n = 1 in (25). Then the EE is LAS if and only if the following condition holds
k > − γδ(γ − μ) + (γ + μ)2
γ + μ + γδ . (69)
Otherwise, if equality holds in (69), then the EE undergoes a Hopf bifurcation, and the characteristic equation in (68) has exactly one negative real root and two purely imaginary conjugate complex roots. Finally, if in (69) the opposite inequality holds, then the EE is unstable, and the characteristic equation in (68) has exactly one negative real root and two conjugate complex roots with positive real parts.
Note that, since (46) holds and k > 0, the condition in (69) is always satisfied whenever γ + k ≥ μ. In particular, this holds true if γ ≥ μ. Let us remark that this assumption is actually biologically reasonable, as one commonly assumes that the average human infectious period 1/γ is shorter than the average mosquito life span 1/μ. On the other hand, if γ < μ, then (69) gives a (possibly positive) lower bound for k. Thus, we derive the following corollary.
Corollary 6.7. Let the assumptions of Theorem 6.1 hold, and let n = 1 in (25). If γ ≥ μ, then the EE is LAS for all k > 0.
3Note that, from (46), (55), (58), for Rˆe > 1 one has
δ=
Rˆe − 1
Rˆe
(1 − q)p′ p−1(η) p−1(η).
.
34

• Erlang-2 distributed memory: we assume that K is an Erlang-2 distribution, i.e. we take n = 2 in (25). Thus, the equation (66) becomes
λ2(λ + k)2 + λ(γ + μ)(λ + k)2 + k2γδ (λ + 2μ) = 0. (70)
Then, applying the Routh-Hurwitz criterion for a fourth order polynomial (see Section C.2 for the detailed computation), we obtain the following result.
Proposition 6.8. Let the assumptions of Theorem 6.1 hold, and let n = 2 in (25). Then, there exists k+, k− ≥ 0 with k+ > k− such that EE is LAS for k > k+, undergoes a Hopf bifurcation at k = k+, and is unstable for k ∈ (k−, k+). In particular, k+ is the largest positive real root of the polynomial
p(k) = A ̃k3 + B ̃k2 + C ̃k + D ̃ ,
where
A ̃ := 2(γ + μ + γδ) > 0,
B ̃ := 4(γ + μ)2 + γδ(3γ − 5μ − γδ),
C ̃ := 2(γ + μ)[(γ + μ)2 + γδ(γ − 3μ)],
D ̃ := 2γμδ(γ + μ)2 < 0,
while k− is either 0 or satisfies p(k−) = 0 with p′(k−) < 0.
Remark 6.9. Note that once the epidemiological parameters βH←M , βM←H , ρ, γ, μ are fixed, the values of k−, k+ are essentially determined by δ, which in turn depends on l, q, a and w.
In this section, we showed that if the delay φ is sufficiently large, then the EE might become unstable through a Hopf bifurcation. This ensures, even in the absence of additional factors such as demography or waning of immunity, the possible emergence of self-sustained epidemic waves. Here, we limited ourselves to the case of an Erlang distributed memory with shape parameter either n = 1 or n = 2; see (25). However, as previously mentioned, the analysis presented in this section might be extended-
 to more general kernels, although possibly leading to much more cumbersome computations [4, 75].
6.3 Numerical results
In this section we will validate the results of Section 6 by comparing the outputs of model (41) with those of (48). We use the same parameters as in Section 5, with φ = 30 days. In Figures (14), (15) and (16) we plot IH as a function of time (blue) and the EE as a function of SH (green, with also SH varying in time, see (58)) for n = 1, 2, 5, respectively, with l = 0.25 and ρ = 2, for q = 0 (left) and q = 0.1 (right), and we compare the outputs of the model for with χ = 104 (upper row) and χ = 10-
3 (lower row). For all cases, we see that the solution IH relevant to model (41) approaches the EE predicted by model (48), which can be shown to be LAS for these choices of the parameters whenever it exists. In particular, for q = 0 we observe that, for increasing n, more oscillations around the EE appear before the solution ultimately collapses on this manifold, both for χ = 104 and χ = 103. These oscillatory behaviours are instead less (and almost not) present for the case q = 0.1. Now, let us -
recall instead that, in Section 5, we observed that in all experiments in Figures 14, 15, and 16, the choice q = 0.2 with l = 0.25 and ρ = 2 led to larger outbreaks with respect to the other cases (but for the case q = 0.5), and no “almost” steady state situations where observed. To understand this, we plot in Figure 17 both IH (blue) and the EE (green) as functions of time (with EE dependent on SH ),
together with the relevant value of Rˆe as a function of SH (dashed line, see (51)), with χ = 104. We do
35

Figure 14: Plots of IH (blue) as a function of time for (45) and EE (green) as a function of SH with model parameters and initial conditions as in Section 5, l = 0.25 and ρ = 2, χ = 104 (upper row), χ = 103 (lower row), q = 0 (left) and q = 0.1 (right), with n = 1 and φ = 30 days in (25).
Figure 15: Plots of IH (blue) as a function of time for (45) and EE (green) as a function of SH with model parameters and initial conditions as in Section 5, l = 0.25 and ρ = 2, χ = 104 (upper row), χ = 103 (lower row), q = 0 (left) and q = 0.1 (right), with n = 2 and φ = 30 days in (25).
36

Figure 16: Plots of IH (blue) as a function of time for (45) and EE (green) as a function of SH with model parameters and initial conditions as in Section 5, l = 0.25 and ρ = 2, χ = 104 (upper row), χ = 103 (lower row), q = 0 (left) and q = 0.1 (right), with n = 5 and φ = 30 days in (25).
Figure 17: Plots of IH (solid blue) as a function of time for (45), and EE (solid green) and Rˆe (dashed black) as functions of SH , with model parameters and initial conditions as in Section 5, l = 0.25 and ρ = 2 (left), l = 1 and ρ = 5.12 (right), χ = 104, q = 0.2, with n = 1 and φ = 30 days in (25). For each plot, the values on the vertical axis on the left (blue colour) are relevant to IH and EE, while those on
the right (red colour) are relevant to Rˆe. The upper and lower solid black horizontal lines represent the thresholds 1 + l and 1 + l/q in (57), respectively.
37

this both for the case l = 0.25, ρ = 2 (left) and for the case l = 1, ρ = 5.12 (right). Interestingly, we observe that for the former case, at the beginning of the outbreak the Rˆe is such that it exceeds the upper
bound Rˆe < 1 + l/q in (57) (in the figure, the upper and lower solid black horizontal lines represent the thresholds 1 + l and 1 + l/q in (57), respectively), which determines a necessary condition for the existence of the EE. Correspondingly, this result in a larger epidemic outbreak which reaches its peak exactly when the ERN Rˆe reaches the threshold Rˆe = 1 + l/q. Subsequently, the epidemic start to decrease until it goes
ultimately extinct. On the contrary, in the case l = 1, ρ = 5.12 we have that the condition Rˆe < 1 + l/q holds, which esnures the existence of the EE for model (48). In particular, the equilibrium is LAS, and consequently, the solution IH approaches the EE.
7 Conclusions and outlook
In this paper, we explored the effect of information-dependent protective behaviour on a SIR-SI host-vector compartmental model. While all the systems under study only admit the DFE as a non-trivial equilibrium, we were able to characterize the transient behaviour under various different assumptions. In particular, assuming a reasonable separation of timescales of the mechanisms underlying our models, we showed that the inclusion of protective behaviour, albeit partial and/or not fully effective, -
may lead to a prolonged epidemic wave. Indeed, solutions of this system rapidly converge on a manifold on which the infected population slowly goes extinct. Interestingly, we observed a similar behaviour even when the assumption that the parameters differ by orders of magnitude is relaxed. Hence, this slow(er) extinction seems to be a fundamental property of this information-dependent behavioural models, rather than an artifice coming from additional assumptions. Considering the results of our ana-
lysis and numerical simulations, one could explore a series of modifications of our model. In particular, the most obvious would be the inclusion of demography and/or loss of immunity in the human population, which would allow the model to have an Endemic Equilibrium as well, under classic hypotheses on the parameters. In addition to this, it could be worth exploring a model evolving on three time scales: a fast one for the spread of information, an intermediate one for the spread of the disease a-
nd a slow one for human demography/loss of immunity, for example. Finally, we note that a more general formulation of the behavioural model (22) might be obtained by modifying the equation for HP (and correspondingly for HNP ) as follows:
H′
P = [a(J ) + θP (J )p] HNP − [w(J ) + θNP (J )(1 − p)] HP .
This is obtained by including in (22) imitation dynamics-like terms θP (J)HNP p and θNP (J)HP (1 − p), which describe a contagion of ideas between host individuals [7, 51, 70]. This contagion of ideas might be possibly motivated by some knowledge the host individuals have about past epidemics [18], or by payoff considerations [61]. In the context of vector-borne epidemics, such approaches have been exploited in [5] and, more recently, in [46] to model the effect of bednets usage against malaria-li-
ke diseases. The latter, in particular, focuses on the use and misuse of Insecticide-Treated Nets (ITNs). Both of these papers deal with endemic scenarios: while the former considers an approach based on imitation game dynamics with an information-free approach for the changes of behaviour, the latter derives a similar model assuming that host individuals might change their behaviour according to payoff considerations on the risk of being infected, which in turn might be influenced by the informat-
ion that hosts have on the current prevalence, on the mosquito density, and by seasonal terms accounting for the periodic replacement of bed-nets. However, while [13] provides analytical results concerning the dynamics of the model, in [46] the authors mostly discuss results concerning the reproduction number(s) (and hence relevant considerations on the optimal number of ITNs usage) and numerical results (considering also social optimum insecticide-treated net use), yet showing that information-in-
duced imitation-game dynamics might trigger recurrent epidemic waves. Interestingly, in [46], the authors also discussed applications of their model to malaria control in
38

some African countries. In the present work, we did not consider such dynamics. Yet, we believe that the approach and analysis proposed in this paper could be extended to models involving evolutionary game-like dynamics, which, anyway, will inevitably lead to much more complicated computations; see for instance [18]. This extension will certainly be the subject of future investigations by the authors, as well as the inclusion of additional factors relevant for the dynamics and control of mosquito-
-borne epidemics and applications of the proposed behavioural models to data informed real-world scenarios.
Appendix
A Computation of Rˆc for model (24).
In this section, we give additional details concerning the computations of Rˆc in Section 3.1. Observe that
the inverse of Σˆ in (32) explicitly reads
Σˆ −1 :=


(γ + a0)/[γ(a0 + w0 + γ)] a0 0 w0 (γ + w0)/[γ(a0 + w0 + γ)] 0 0 0 1/μ

.
Hence, the NGM Kˆ := B(p, q)Σˆ , for B defined as in (11), reads
Kˆ :=

 
0 0 ρβH←M
μ
qp0 c(p0 ,q )+l
0 0 ρβH←M
μ
1−p0 c(p0 ,q )+l βM←H [q(a0+γ)+w0] γ (a0 +w0 +γ )[c(p0 ,q )+l]
βM←H [qa0+w0+γ]
γ(a0+w0+γ)[c(p0,q)+l] 0


.
The characteristic polynomial of Kˆ reads
p(λ) = λ3 − λ qp0[q(a0 + γ) + w0] + (1 − p0)[qa0 + w0 + γ]
a0 + w0 + γ
βM←H βH←M
γμ
ρ
c(p0, q) + l .
From this, it is not difficult to recover the expression in (33).
B Derivation of the characteristic equation (63)
In this section, for the sake of generality, we rewrite (48) by using the integral formulation of J in (21). This allows us to derive the characteristic equations needed to analyse the stability of the equilibria of (48) by arguing in terms of Laplace transforms, as in [4]. Consider

    
    
I ̇H = βH←M ρIM SH h(p(J ), q) − γIH ,
I ̇M = βM←H h(p(J ), q)IH − μIM ,
J(t) =
Z +∞
0
IH (t − θ)K(θ) dθ.
(71)
with K as in (25). Note that, the above model couples two ODEs for IH , IM with a delay equation with infinite delay for J(t), as it depends on the history It(θ) := I(t + θ), for θ ∈ R≤0. For this model, the natural choice of the history space is Cω(R≤0, R) × R × R, where Cω(R≤0, R) denotes the space of continuous functions ψ : R≤0 → R such that limx→−∞ ω(x)ψ(x) → 0 with ω(x) := e−ρx, for some ρ > 0 that is chosen a priori [20]. Then the existence and uniqueness of the solutions of (71) in this se-
tting
39

can be proved by applying standard results; see [20]. Observe that (48) and (71) share the same equilibria and are equivalent from the point of view of the stability analysis, although they differ in the underlying choice of the state space. Now, we investigate the stability of equilibria of (71) by applying the principle of linearized stability for equations with infinite delay [20]. For f defined as in (61), the linearisation of (71) reads

      
      
I ̇H = βH←M ρSH f (J ̄)IM + βH←M ρI ̄M SH f ′(J ̄)J − γIH ,
I ̇M = βM←H f (J ̄)IH + βM←H f ′(J ̄)I ̄H J − μIM ,
J(t) =
Z +∞
0
IH (t − θ)K(θ) dθ.
(72)
To derive a characteristic equation, we look for solutions of the form
(IH (t), IM (t), J (t)) = (vH , vM , vJ ) eλt, vH , vM , vJ ∈ C \ {0}, R(λ) > −ρ, t ≥ 0. (73)
Inserting (73) into (72), we obtain

      
      
λvH = βH←M ρSH f (J ̄) vM + βH←M I ̄M ρSH f ′(J ̄) vJ − γvH ,
λvM = βM←H ρf (J ̄) vH + βM←H ρf ′(J ̄)I ̄H vJ − μvM ,
vJ =
Z +∞
0
e−λθK(θ)vH dθ,
from which we obtain the characteristic equation
det (∆(λ)) = 0 (74)
for the characteristic matrix
∆(λ) =

   
λ + γ −βH←M ρSH f (J ̄) −βH←M I ̄M ρSH f ′(J ̄)
−βM←H f (J ̄) λ + μ −βM←H I ̄H f ′(J ̄)
−Kˆ (λ) 0 1

   
, (75)
where Kˆ is defined as in (64). Then, the characteristic equation in (74) reads
(λ + γ)(λ + μ)−βH←M βM←H ρSH f (J ̄)2
− Kˆ (λ)f ′(J ̄) βH←M βM←H ρSH I ̄H f (J ̄) + (λ + μ)βH←M ρI ̄M SH = 0. (76)
Using Rˆe defined as in (51), we can rewrite (76) as
λ2 + λ(γ + μ) + γμ
h
1 − Rˆ2
ef (J ̄)2i
− Kˆ (λ)f ′(J ̄)
h
γμRˆ2
eI ̄H f (J ̄) + (λ + μ)βH←M ρI ̄M SH
i
= 0.
Moreover, from (49) we have I ̄M = βM←H
μ f (J ̄)I ̄H . Hence, we eventually obtain
λ2 + λ(γ + μ) + γμ
h
1 − Rˆ2
ef (J ̄)2i
− Kˆ (λ)f (J ̄)f ′(J ̄)γRˆ2
e(λ + 2μ)I ̄H = 0, R(λ) > −ρ. (77)
Note that, given the independence of the ODE model (48) from ρ, the condition R(λ) > −ρ can be actually replaced with R(λ) > −k for (48).
40

C Computations for the stability analysis of the EE
In this section, we give additional details about the computations concerning the linear stability analysis of the EE in Section 6.2.2.
C.1 Exponentially fading memory
Assuming n = 1 in (25), one is led to investigate the solutions of the equation (68). Computing the products, we are left with the equation λ3 + Aλ2 + Bλ + C = 0, for
A := γ + μ + k,
B := k(γ + μ + γδ),
C := 2μkγδ.
Note that A > 0 and, from (46), we have B, C > 0. Thus, the Routh-Hurwitz criterion ensures that the EE is LAS if and only if AB − C > 0. This explicitly reads
k(γ + μ + k)(γ + μ) + k(γ + μ + k)γδ − 2μkδγ > 0,
which, as k > 0, is equivalent to (γ + μ + k)(γ + μ) + γδ(γ + k − μ) > 0. This condition can be expressed in terms of k as in (69). Hence, if K is exponentially distributed, the Routh-Hurwitz criterion ensures that only three outcomes are possible, which are summarized in Theorem 6.6.
C.2 Erlang-2 distributed memory
We assume that n = 2 in (68). Hence, the characteristic equations reads as in (70). which gives the equation
λ4 + Aλ3 + Bλ2 + Cλ + D = 0 (78)
for
A := γ + μ + 2k,
B := k(2γ + 2μ + k),
C := k2 (γ + μ + γδ) ,
D := 2γμδk2.
Note that A, B > 0 and, from (46), we have C, D > 0. To apply the Routh-Hurwitz criterion for a 4 order polynomial, we have to show that
BC − AD > 0 (79)
and
ABC − A2D − C2 > 0. (80)
Note that, since A > 0, the condition in (80) is equivalent to
BC − AD > C2
A . (81)
In particular, (81) implies (79). Hence, it is enough to check the condition in (81). We have
ABC = k3(γ + μ + 2k)(2γ + 2μ + k)(γ + μ − γδ)
= 2(γ + μ − γδ)k5 + 5(γ + μ)(γ + μ − γδ)k4 + 2(γ + μ)2(γ + μ − γδ)k3,
41

C2 = (γ + μ − γδ)2k4 and A2D = −8γμδk4 − 8γμδ(γ + μ)k3 − 2γμδ(γ + μ)2k2. Thus we can rewrite everything in terms of k as
k2(A ̃k3 + B ̃k2 + C ̃k + D ̃ ) > 0,
with A ̃, B ̃, C ̃, D ̃ as in Theorem 6.8. It is immediate to observe that from (46), A ̃ > 0 and D ̃ < 0. As for the signs of B ̃, C ̃, they depend on the choice of the model parameters. Since k2 > 0 for k ∈ R \ {0}, we can reduce to determine k such as p(k) > 0, for p as in Theorem 6.8. In this regard, note that
p(0) = D < 0 and lim
k→+∞ p(k) = +∞.
Hence, there exists k+, k− > 0 such that p(k) > 0 for k > k+ and p(k) < 0 for k ∈ (k−, k+). To
determine whether this k+ is unique in (0, +∞), one needs to investigate the sign of B ̃, C ̃. However, applying the Routh-Hurwitz criterion, one immediately derives Theorem 6.6.
Acknowledgments
This work was supported by the project “One Health Basic and Translational Actions Addressing Unmet Needs on Emerging Infectious Diseases” (INF-ACT), BaC “Behaviour and sentiment monitoring and modelling for outbreak control/BEHAVE-MOD” (No. PE00000007, CUP I83C22001810007) funded by the NextGenerationEU. The authors are members of the Unione Matematica Italiana (UMI) group “Modellistica Socio-Epidemiologica” (UMI-MSE) and of the following groups of the Istituto Nazionale di Alta Matematica (INdAM-
): “GNCS – Gruppo Nazionale per il Calcolo Scientifico” (SDR), “GNAMPA Gruppo Nazionale per l’Analisi Matematica e le sue Applicazioni” (AP), and “GNFM – Gruppo Nazionale per la Fisica Matematica” (MS, CS).
References
[1] M. Aguiar, V. Anam, K. B. Blyuss, C. D. S. Estadilla, B. V. Guerrero, D. Knopoff, B. W. Kooi, A. K. Srivastav, V. Steindorf, and N. Stollenwerk. Mathematical models for dengue fever epidemiology: A 10-year systematic review. Phys. Life Rev. 40 (2022), pp. 65–92. DOI: 10.1016/j.plrev. 2022.02.001.
[2] N. Alphey, L. Alphey, and M. B. Bonsall. A model framework to estimate impact and cost of genetics-based sterile insect methods for dengue vector control. PloS one 6.10 (2011), e25384. DOI: 10.1371/journal.pone.0025384.
[3] A. Andò, D. Breda, and G. Gava. How fast is the linear chain trick? A rigorous analysis in the context of behavioral epidemiology. Math. Biosci. Eng. 17.5 (2020), pp. 5059–5084. ISSN: 1551-0018. DOI: 10.3934/mbe.2020273.
[4] A. Andò, S. De Reggi, F. Scarabel, R. Vermiglio, and J. Wu. Behavior-induced oscillations in epidemic outbreaks with distributed memory: beyond the linear chain trick using numerical methods. Submitted (2025).
[5] M. D. Asfaw, B. Buonomo, and S. M. Kassa. Impact of human behavior on ITNs control strategies to prevent the spread of vector borne diseases. Atti Accad. Peloritana dei Pericolanti Cl. Sci. Fis. Mat. Nat. 96.S3 (2018), p. 2. DOI: 10.1478/AAPP.96S3A2.
[6] N. Bacaër. A Short History of Mathematical Population Dynamics. Springer, London, 2011. DOI: 10.1007/978-0-85729-115-8.
[7] C. T Bauch. Imitation dynamics predict vaccinating behaviour. Proc. R. Soc. Lond. B Biol. Sci. 272.1573 (2005), pp. 1669–1675. DOI: 10.1098/rspb.2005.3153.
42

[8] J. Bedson, L. A. Skrip, D. Pedi, S. Abramowitz, S. Carter, M. F. Jalloh, S. Funk, N. Gobat, T. Giles-Vernick, G. Chowell, J. R. de Almeida, R. Elessawi, S. V. Scarpino, R. A. Hammond S., Briand, J. M. Epstein, L. Hébert-Dufresne, and B. M. Althouse. A review and agenda for integrated disease models including social and behavioural factors. Nat. Hum. Behav 5 (7 2021), pp. 834–846. DOI: 10.1038/s41562-021-01136-2.
[9] L. Bolzoni, A. Pugliese, and R. Rosà. The role of heterogeneity on the invasion probability of mosquito-borne diseases in multi-host models. J. Theor. Biol. 377 (2015), pp. 25–35. DOI: 10. 1016/j.jtbi.2015.03.027.
[10] F. Brauer. A final size relation for epidemic models of vector-transmitted diseases. Infect. Dis. Model. 2.1 (2017), pp. 12–20. DOI: 10.1016/j.idm.2016.12.001.
[11] F. Brauer. A singular perturbation approach to epidemics of vector-transmitted diseases. Infect. Dis. Model. 4 (2019), pp. 115–123. DOI: 10.1016/j.idm.2019.04.004.
[12] I. M. Bulai, M. Sensi, and S. Sottile. A geometric analysis of the SIRS compartmental model with fast information and misinformation spreading. Chaos Solit. Fractals 185 (2024), p. 115104. DOI: 10.1016/j.chaos.2024.115104.
[13] B. Buonomo. Modeling human response to bed–net promotion campaigns and its impact on malaria transmission. In: Ansari, A. (eds) Adv. Appl. Math. Springer Proc. Math. Stat. Springer, Cham, 2014, pp. 23–30. DOI: https://doi.org/10.1007/978-3-319-06923-4_3.
[14] B. Buonomo, E. Messina, C. Panico, and A. Vecchio. An integral renewal equation approach to behavioural epidemic models with information index. J. Math. Biol. 90.1 (2025), p. 8. DOI: 10.1007/s00285-024-02172-y.
[15] V. Capasso and G. Serio. A generalization of the Kermack-McKendrick deterministic epidemic model. Math. Biosci. 42 (1978), pp. 43–61. DOI: 10.1016/0025-5564(78)90006-8.
[16] B. Chala and F. Hamde. Emerging and re-emerging vector-borne infectious diseases and the challenges for control: a review. Front. Public Health 9 (2021), p. 715759. DOI: 10.3389/fpubh. 2021.715759.
[17] A.M.C. Brito da Cruz and H. S. Rodrigues. Personal protective strategies for dengue disease: Simulations in two coexisting virus serotypes scenarios. Math. Comput. Simul. 188 (2021), pp. 254267. DOI: 10.1016/j.matcom.2021.04.002.
[18] R. Della Marca, A. d’Onofrio, M. Sensi, and S. Sottile. A geometric analysis of the impact of large but finite switching rates on vaccination evolutionary games. Nonlinear Anal. Real World Appl. 75 (2024), p. 103986. DOI: 10.1016/j.nonrwa.2023.103986.
[19] J. Demers, S. Bewick, J. Calabrese, and W. F. Fagan. Dynamic modelling of personal protection control strategies for vector-borne disease limits the role of diversity amplification. J. R. Soc. Interface. 15.145 (2018), p. 20180166. DOI: 10.1098/rsif.2018.0166.
[20] O. Diekmann and M. Gyllenberg. Equations with infinite delay: blending the abstract and the concrete. J. Differ. Equ. 252.2 (2012), pp. 819–851. DOI: 10.1016/j.jde.2011.09.038.
[21] O. Diekmann, H. Heesterbeek, and T. Britton. Mathematical Tools for Understanding Infectious Disease Dynamics. Princeton Ser. Theor. Comput. Biol. Princeton University Press, Princeton, 2013. DOI: 10.1515/9781400845620.
[22] O. Diekmann, J. A. P. Heesterbeek, and J. A. J. Metz. On the definition and the computation of the basic reproduction ratio R0 in models for infectious diseases in heterogeneous populations. J. Math. Biol. 28 (1990), pp. 365–382. DOI: 10.1007/BF00178324.
43

[23] O. Diekmann, J. A. P. Heesterbeek, and M. G. Roberts. The construction of next-generation matrices for compartmental epidemic models. J. R. Soc. Interface. 7.47 (2010), pp. 873–885. DOI: 10.1098/rsif.2009.0386.
[24] O. Diekmann, S. A. Van Gils, S. M. V. Lunel, and H.-O. Walther. Delay Equations: Functional-, complex-, and Nonlinear Analysis. Vol. 110. Applied Mathematical Sciences. Springer, New York, 1995. DOI: 10.1007/978-1-4612-4206-2.
[25] European Centre for Disease Prevention and Control (ECDC). Dengue. Accessed on November 17, 2025. URL: https : / / www . ecdc . europa . eu / en / all - topics - z / dengue / surveillance- and- disease- data/autochthonous- transmission- denguevirus-eueea-previous-years.
[26] European Centre for Disease Prevention and Control (ECDC). Mosquito-borne diseases. Accessed on November 19, 2025. URL: https://www.ecdc.europa.eu/en/mosquito-bornediseases.
[27] A. d’Onofrio and P. Manfredi. Information-related changes in contact patterns may trigger oscillations in the endemic prevalence of infectious diseases. J. Theor. Biol. 256 (2009), pp. 473–478. DOI: 10.1016/j.jtbi.2008.10.005.
[28] A. d’Onofrio and P. Manfredi. Behavioral SIR models with incidence-based social-distancing. Chaos, Solit. Fractals 159 (2022), p. 112072. DOI: 10.1016/j.chaos.2022.112072.
[29] P. Van den Driessche and J. Watmough. Reproduction numbers and sub-threshold endemic equilibria for compartmental models of disease transmission. Math. Biosci. 180.1-2 (2002), pp. 29–48. DOI: 10.1016/S0025-5564(02)00108-6.
[30] C. Dye and G. Hasibeder. Population dynamics of mosquito-borne disease: effects of flies which bite some people more frequently than others. Trans. R. Soc. Trop. Med. Hyg. 80.1 (1986), pp. 69–77. DOI: 10.1016/0035-9203(86)90199-9.
[31] A. d’Onofrio, P. Manfredi, and M. Iannelli. Dynamics of partially mitigated multi-phasic epidemics at low susceptible depletion: phases of COVID-19 control in Italy as case study. Math. Biosci. 340 (2021), p. 108671. ISSN: 0025-5564. DOI: 10.1016/j.mbs.2021.108671.
[32] A. d’Onofrio, P. Manfredi, and E. Salinelli. Vaccinating behaviour, information, and the dynamics of SIR vaccine preventable diseases. Theor. Popul. Biol. 71.3 (2007), pp. 301–317. DOI: 10.1016/ j.tpb.2007.01.001.
[33] L. Esteva and C. Vargas. Analysis of a dengue disease transmission model. Math. Biosci. 150.2 (1998), pp. 131–151. DOI: 10.1016/S0025-5564(98)10003-2.
[34] N. Fenichel. Geometric singular perturbation theory for ordinary differential equations. J. Differ. Equ. 31 (1979), pp. 53–98. DOI: 10.1016/0022-0396(79)90152-9.
[35] S. Funk, M. Salathé, and V. Jansen. Modelling the Influence of Human Behaviour on the Spread of Infectious Diseases: A Review. Journal of the Royal Society, Interface / the Royal Society 7 (May 2010), pp. 1247–56. DOI: 10.1098/rsif.2010.0142.
[36] U. J. Giménez-Mujica, J. Velázquez-Castro, and A. Anzo-Hernández. Final size of the epidemic for metapopulation vector-borne diseases. J. Math. Anal. Appl. 526.1 (2023), p. 127200. DOI: 10.1016/j.jmaa.2023.127200.
[37] G. Hasibeder and C. Dye. Population dynamics of mosquito-borne disease: persistence in a completely heterogeneous environment. Theor. Popul. Biol. 33.1 (1988), pp. 31–53. DOI: 10.1016/ 0040-5809(88)90003-2.
[38] J. A. P. Heesterbeek. A brief history of R0 and a recipe for its calculation. Acta Biotheor. 50.3 (2002), pp. 189–204. DOI: 10.1023/a:1016599411804.
44

[39] G. Hek. Geometric singular perturbation theory in biological practice. J. Math. Biol. 60.3 (2010), pp. 347–386. DOI: 10.1007/s00285-009-0266-7.
[40] L. Hu and L. Nie. Stability and Hopf Bifurcation Analysis of a Multi-Delay Vector-Borne Disease Model with Presence Awareness and Media Effect. Fractal Fract. 7.12 (2023), p. 831. DOI: 10. 3390/fractalfract7120831.
[41] H. Jardón-Kojakhmetov, C. Kuehn, A. Pugliese, and M. Sensi. A geometric analysis of the SIR, SIRS and SIRWS epidemiological models. Nonlinear Anal. Real World Appl. 58 (2021), p. 103220. DOI: 10.1016/j.nonrwa.2020.103220.
[42] H. Jardón-Kojakhmetov, C. Kuehn, A. Pugliese, and M. Sensi. A geometric analysis of the SIRS epidemiological model on a homogeneous network. J. Math. Biol. 83.4 (2021), p. 37. DOI: 10. 1007/s00285-021-01664-5.
[43] P. Kaklamanos, A. Pugliese, M. Sensi, and S. Sottile. A geometric analysis of the SIRS model with secondary infections. SIAM J. Appl. Math. 84.2 (2024), pp. 661–686. DOI: 10 . 1137 / 23M1565632.
[44] G. F. Killeen and T. A. Smith. Exploring the contributions of bed nets, cattle, insecticides and excitorepellency to malaria control: a deterministic model of mosquito host-seeking behaviour and mortality. Trans. R. Soc. Trop. Med. Hyg. 101.9 (2007), pp. 867–880. DOI: 10.1016/j.trstmh. 2007.04.022.
[45] C. Kuehn. Multiple Time Scale Dynamics. Vol. 191. Springer, Cham, 2015. DOI: 10.1007/9783-319-12316-5.
[46] Laxmi, C. N. Ngonghala, and S. Bhattacharyya. An evolutionary game model of individual choices and bed net use: elucidating key aspect in malaria elimination strategies. R. Soc. Open Sci. 9.11 (2022), p. 220685. DOI: 10.1098/rsos.220685.
[47] G. Macdonald. The Epidemiology and Control of Malaria. London: Oxford Univ. Pr., 1957.
[48] N. MacDonald. Biological delay systems: linear stability theory. Cambridge Studies in Mathematical Biology. Cambridge Univeristy Press, Cambridge, 1989.
[49] P. Magal, O. Seydi, and G. Webb. Final size of an epidemic for a two-group SIR model. SIAM J. Appl. Math. 76.5 (2016), pp. 2042–2059. DOI: 10.1137/16M1065392.
[50] P. Magal, O. Seydi, and G. Webb. Final size of a multi-group SIR epidemic model: Irreducible and non-irreducible modes of transmission. Math. Biosci. 301 (2018), pp. 59–67. DOI: 10.1016/j. mbs.2018.03.020.
[51] P. Manfredi and A. d’Onofrio. Modeling the Interplay Between Human Behavior and the Spread of Infectious Diseases. Springer New York, NY, 2013. DOI: 10.1007/978-1-4614-5474-8.
[52] H. McCallum, N. Barlow, and J. Hone. How should pathogen transmission be modelled? Trends Ecol. Evol. 16.6 (2001), pp. 295–300. DOI: 10.1016/S0169-5347(01)02144-9.
[53] E. Miller, J. Dushoff, and A. Huppert. The risk of incomplete personal protection coverage in vector-borne disease. J. R. Soc. Interface. 13.115 (2016), p. 20150666. DOI: 10.1098/rsif. 2015.0666.
[54] E. Miller and A. Huppert. The effects of host diversity on vector-borne disease: the conditions under which diversity will amplify or dilute the disease risk. PLoS One 8.11 (2013), e80279. DOI: 10.1371/journal.pone.0080279.
[55] A. K. Misra, A. Sharma, and L. Jia. A mathematical model for control of vector borne diseases through media campaigns. Discrete Contin. Dyn. Syst. - B 18.7 (2013). DOI: 10.3934/dcdsb. 2013.18.1909.
45

[56] S. J. Moore, C. R . Davies, N. Hill, and M. M. Cameron. Are mosquitoes diverted from repellentusing individuals to non-users? Results of a field study in Bolivia. Trop. Med. Int. Health. 12.4 (2007), pp. 532–539. DOI: 10.1111/j.1365-3156.2006.01811.x.
[57] E. A. Newton and P. Reiter. A model of the transmission of dengue fever with an evaluation of the impact of ultra-low volume (ULV) insecticide applications on dengue epidemics. Am. J. Trop. Med. Hyg. 47.6 (1992), pp. 709–720. DOI: 10.4269/ajtmh.1992.47.709.
[58] H. Nishiura. Mathematical and statistical analyses of the spread of dengue. Dengue Bull. 30 (2006).
[59] S. T. Ogunlade, M. T. Meehan, A. I. Adekunle, and E. S. McBryde. A systematic review of mathematical models of dengue transmission and vector control: 2010–2020. Viruses 15.1 (2023), p. 254. DOI: 10.3390/v15010254.
[60] L. Pellis, P. J. Birrell, J. Blake, C. E. Overton, F. Scarabel, H. B. Stage, E. Brooks-Pollock, L. Danon, I. Hall, T. A. House, et al. Estimation of reproduction numbers in real time: conceptual and statistical challenges. J. R. Stat. Soc. Ser. A. Stat. Soc. 185.Supplement_1 (2022), S112–S130. DOI: 10.1111/rssa.12955.
[61] P. Poletti, B. Caprile, M. Ajelli, A. Pugliese, and S. Merler. Spontaneous behavioural changes in response to epidemics. J. Theor. Biol. 260.1 (2009), pp. 31–40. DOI: 10.1016/j.jtbi.2009. 04.029.
[62] A. Pugliese and S. De Reggi. A personal overview of epidemic models for mosquito-borne infections. Submitted (2025).
[63] K. Roosa and N. H. Fefferman. A general modeling framework for exploring the impact of individual concern and personal protection on vector-borne disease dynamics. Parasit. Vectors. 15.1 (2022), p. 361. DOI: 10.1186/s13071-022-05481-7.
[64] R. Rosà and A. Pugliese. Effects of tick population dynamics and host densities on the persistence of tick-borne infections. Math. Biosci. 208.1 (2007), pp. 216–240. DOI: 10.1016/j.mbs.2006. 10.002.
[65] R. Ross. The Prevention of Malaria. London: Churchill, 1911.
[66] S. Schecter. Geometric singular perturbation theory analysis of an epidemic model with spontaneous human behavioral change. J. Math. Biol. 82.6 (2021), p. 54. DOI: 10.1007/s00285- 02101605-2.
[67] D. L. Smith, K. E. Battle, S. I. Hay, C. M. Barker, T. W. Scott, and F. E. McKenzie. Ross, Macdonald, and a theory for the dynamics and control of mosquito-transmitted pathogens. PLoS pathogens 8.4 (2012), e1002588. DOI: 10.1371/journal.ppat.1002588.
[68] P. Thongsripong, J. M. Hyman, D. D. Kapan, and S. N. Bennett. Human–mosquito contact: a missing link in our understanding of mosquito-borne disease transmission dynamics. Ann. Entomol. Soc. Am. 114.4 (2021), pp. 397–414. DOI: 10.1093/aesa/saab011.
[69] L. Valerio, F. Marini, G. Bongiorno, L. Facchinelli, M. Pombi, B. Caputo, M. Maroli, and A. Della Torre. Host-feeding patterns of Aedes albopictus (Diptera: Culicidae) in urban and rural contexts within Rome province, Italy. Vector-Borne and Zoonotic Dis. 10.3 (2010), pp. 291–294. DOI: 10.1089/vbz.2009.0007.
[70] Z. Wang, C. T. Bauch, S. Bhattacharyya, A. d’Onofrio, P. Manfredi, M. Perc, N. Perra, M. Salathé, and D. Zhao. Statistical physics of vaccination. Physics Reports 664 (2016), pp. 1–113. ISSN: 0370-1573. DOI: 10.1016/j.physrep.2016.10.006.
[71] World Health Organization (WHO). Vector-borne diseases. Accessed on November 17, 2025. URL: https://www.who.int/news- room/fact- sheets/detail/vector- bornediseases.
46

[72] World Health Organization (WHO). Dengue. Accessed on October 16, 2025. URL: https://www. who.int/news-room/fact-sheets/detail/dengue-and-severe-dengue.
[73] M. J. Wonham, M. A. Lewis, J. Rencławowicz, and P. Van den Driessche. Transmission assumptions generate conflicting predictions in host–vector disease models: a case study in West Nile virus. Ecol. Lett. 9.6 (2006), pp. 706–725. DOI: 10.1111/j.1461-0248.2006.00912.x.
[74] L. Yakob. How do biting disease vectors behaviourally respond to host availability? Parasit. Vectors. 9.1 (2016), p. 468. DOI: 10.1186/s13071-016-1762-4.
[75] X. Zhang, F. Scarabel, K. Murty, and J. Wu. Renewal equations for delayed population behaviour adaptation coupled with disease transmission dynamics: A mechanism for multiple waves of emerging infections. Math. Biosci. 365 (2023), p. 109068. DOI: 10 . 1016 / j . mbs . 2023 . 109068.
[76] H. Zhong, M. Lima, A. Pugliese, M. Sabbatino, C. Soresina, and T. Tekeli. On the effectiveness of odor-baited traps on mosquito-borne infections. 2025. arXiv: 2509.23397.
47

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:55.364Z
- **Text Length:** 120429 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 47 of 47
