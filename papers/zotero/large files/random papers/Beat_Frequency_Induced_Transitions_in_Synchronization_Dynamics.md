# PDF Document: Marghoti et al. - 2024 - Beat Frequency Induced Transitions in Synchronization Dynamics.pdf

**File Path:** Marghoti et al. - 2024 - Beat Frequency Induced Transitions in Synchronization Dynamics.pdf

**Processed Date:** 2026-02-10T18:14:07.400Z

**File Size:** 1805.73 KB

**Total Pages:** 13

**Extracted Pages:** 13

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3607

**Title:** Beat Frequency Induced Transitions in Synchronization Dynamics

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Beat Frequency Induced Transitions in Synchronization Dynamics
Gabriel Marghotia, Thiago L. Pradoa,b,c,∗, Miguel A.F. Sanjuánc, Sergio R. Lopesa,b
aDepartamento de Física, Universidade Federal do Paraná, Curitiba, Paraná, Brazil bInterdisciplinary Center for Science, Technology and Innovation CICTI, Universidade Federal do Paraná, Curitiba, Brazil cNonlinear Dynamics, Chaos and Complex Systems Group, Departamento de Física, Universidad Rey Juan Carlos, Tulipán s/n, 28933 Móstoles, Madrid, Spain
Abstract
In neurosciences, the brain processes information via the firing patterns of connected neurons operating across a spectrum of frequencies. To better understand the effects of these frequencies in the neuron dynamics, we have simulated a neuronal network of Izhikevich neurons to examine the interaction between frequency allocation and intermittent phase synchronization dynamics. As the synchronized population of neurons passes through a bifurcation, an additional frequency mode emerges, enabling a -
match in the mean frequency while retaining distinct most probable frequencies among neurons. Subsequently, the network intermittently transits between two patterns, one partially synchronized and the other unsynchronized. Through our analysis, we demonstrate that the frequency changes on the network lead to characteristic transition times between synchronization states. Moreover, these transitions adhere to beat frequency statistics when the neurons’ frequencies differ by multiples of a frequency-
 gap. Finally, our results can improve the performance in predicting transitions on problems where the beat frequency strongly influences the dynamics.
Keywords: Phase Synchronization, Beat Frequency, Intermittency, Globally Connected Network
1. Introduction
Synchronization phenomena have been studied in various scientific fields such as physics, chemistry, and biology, as a universal concept of dynamical systems [1, 2]. Moreover, in neurosciences, the synchronization of neuronal activity is crucial for the proper functioning of the brain. Neurons communicate with each other by generating rhythmic activity patterns, and the synchronization of these patterns plays a crucial role in information processing and cognitive functions [3, 4]. However, when ne-
urons have different natural frequencies, phase synchronization can be challenging to achieve [5, 6]. In the hippocampus, a brain region considered essential for memory, clusters of neurons exhibit distinct frequencies. These cluster differences are essential to select different attributes from the synaptic current and consequently to information processed locally by distinct neurons [7, 8]. Moreover, certain neurological disorders like Parkinson’s disease and epilepsy are associated with abnormal-
 synchronization patterns in neuronal networks [9, 10, 11]. Understanding phase synchronization could contribute to a better knowledge of these pathological dynamic patterns and potentially inform therapeutic strategies for such disorders. Mathematical modeling of neurons is typically done by using differential equations. The Hodgkin-Huxley model is one of the most known, but others have been proposed over time. Some models are directly based on the HodgkinHuxley model and implement additions (e.g-
., Huber-Braun model [12]) or simplify the base model (e.g., FitzHughNagumo model [13, 14]). There are other models which aim to mimic the dynamical behavior but with almost no physiological connection (e.g., Morris-Lecar [15] and Hindmarsh–Rose [16]). Furthermore, it is possible to use difference equations, also called map-based neuron models [17, 18, 19] that have been built inspired by continuous models. Another class of models presents a mixture of continuous and discrete rules
∗Corresponding author.
Email address: thiago@fisica.ufpr.br (Thiago L. Prado)
arXiv:2511.15985v1 [q-bio.NC] 20 Nov 2025

for temporal evolution using discontinuous differential equations. Such systems are used to calculate neuron firing patterns, acquiring a wide range of realistic dynamic behaviors with low computational costs [20, 21]. The Izhikevich neuron model [22] presents a balance between computational efficiency and the capacity to replicate diverse biological firing patterns exhibited by neurons. Extensive bifurcation analysis for one Izhikevich neuron has been performed in Refs. [23, 24], while some othe-
r studies explore the dynamics of heterogeneous neurons around the period-adding bifurcation [23, 25] and also the mean field derivation [26]. We show that the activity of individual neurons is crucial in determining the duration of synchronization patterns in a network due to the frequency distribution generated within it. This phenomenon can be associated with the beat period of a group of oscillators, such as the pendulum waves [27, 28]. We also link the transition times to the missing fundamen-
tal illusion, a psycho-acoustic effect where the brain perceives a pitch frequency with no source vibration. This effect has been studied in a more general framework for oscillating systems called Ghost Stochastic Ressonance phenomenon [29, 30, 31]. Our study aims to investigate the duration of the intermittent partial phase synchronization dynamics within clusters of oscillators described by Marghoti et al. [32]. More specifically, how characteristic times in coupled neuronal oscillators affect i-
ntermittent synchronization transitions. This work introduces the Izhikevich neuronal network model in Sec. 2. Next, it explores the isolated neuron and the overall network dynamics in Sec. 3 and Sec. 4, respectively. Finally, Sec. 5 and Sec. 6 explain the intermittent dynamics of the network based on individual neuron properties and the beat frequency formalism.
2. The Neuronal Model
The Izhikevich model is defined by a set of differential equations and a reset rule. The differential equations represent the time evolution of the neuron membrane potential v(t) and recovery variable u(t) [22, 23]. This neuronal model efficiently simulates various firing patterns seen in biological neurons. Here, we focus on a pattern marked by a sequence of spikes followed by a quiescent period, known as bursting dynamics, observed in the hippocampus [33], basal ganglia [34], and dopaminergic ne-
urons in the midbrain [35]. However, it’s important to note that neuronal heterogeneity within cell types is expected in the brain [36]. The neuronal network model we use encompasses heterogeneous bursting dynamics, through the distribution of a control parameter a, specifically the effects of spike gain in each burst due to a bifurcation in the local dynamics. We simulate a heterogeneous network of Izhikevich neurons that differs in their parameters a, so that the equations of motion for the ith -
neuron in the network are given by
v ̇i(t) = 0.04v2
i (t) + 5.00vi(t) + 140 − ui(t) + I(t), (1)
u ̇i(t) = ai[bvi(t) − ui(t)]. (2)
The reset rule can be written as follows:
if vi(t) ≥ 30.0 mV,
then [vi(t) ← c] and [ui(t) ← ui(t) + d] , (3)
where i = 1, 2, ..., N, and over dots represent time derivatives. The term I(t) is the stimulus each neuron receives, which is in general a sum of several processes [37, 38]. However, to keep the model simple and to isolate the possible cause of complex dynamics to the parameter distribution for the neurons, we assume a synaptic current proportional to the network mean-field [22, 23]. Therefore, we simulate a densely connected small group of distinct neurons, so that the synaptic input for all neu-
rons is
I(t) = Ib + γ⟨v⟩(t), (4)
where Ib is the input bias related to the constant extra-cellular electric potential bias and γ is the coupling strength that mediates ⟨v⟩(t) over the individual neuron. We notice the input I(t) for each neuron is time-dependent due to the mean effect of the other neurons, therefore the dynamics of the neural network is governed by the interactions and feedback among its constituent neurons rather than by external inputs.
2

Parameters ai are distributed between amin = 0.013 and amax = 0.024, either randomly or in an ordered manner, to mimic the distinct dynamics of real neurons [36] within a restricted range ensuring a maximum difference in natural frequencies. Our results depend on how the natural frequencies of neurons are distributed, determined by their parameters a. Additionally, for all simulations, we fix parameters b = 0.2, c = −50.0, and d = 2.0 [22, 23] to maintain the timescale and magnitude of variable v-
i(t) around the expected values observed in brain neurons. Random initial conditions for the neurons are used. For the numerical integration of the equations, we use a fourth-order Runge-Kutta method in C, Python, and Julia programming languages, with consistent results for all algorithms. The time step used was adaptive with a maximum value of 0.1. Also, for better numerical accuracy near the reset, we interpolate all the variables in a callback routine when any neuron variable vi(t) reaches the -
threshold 30 mV.
3. Individual Neuronal Dynamics
First, we present an analysis of isolated neuron dynamics (γ = 0.0). In Fig. 1, we show the time evolution and burst frequency response of the isolated Izhikevich neuron as a function of the control parameters a and Ib. The smaller panels show the typical time evolution of neurons near the period-adding bifurcation, for Ib = 10.0 and Ib = 8.2.
Figure 1: Burst frequency (inverse of the bursting period) and time evolution of the membrane potential v(t) for different values of the bifurcation control parameter a and synaptic input I of the Izhikevich neuron model (b = 0.20, c = −50.0, d = 2.0). In panel (a), we show the frequency dependence on a for two relevant values of the synaptic input I; in solid black for I = 10.0 and in dotted gray for I = 8.2. The values I = 10.0 and I = 8.2 represent the constant input for the uncoupled neurons. -
The bottom panels depict the representative time evolution for the isolated neurons near the bifurcation, with parameters: (b) a = 0.016 and I = 10.0; (c) a = 0.018 and I = 10.0; (d) a = 0.016 and I = 8.2; and (e) a = 0.018 and I = 8.2. The bursting dynamics displays one additional spike per burst for a > a∗ = 1.678 × 10−2 when I = 10.0, which is followed by a sudden decrease in frequency [32].
For Ib = 10.0 the neuron model presents a bifurcation that delimits two different periodic dynamics. A spike gain marks the bifurcation as a increases, which imposes a sudden decrease in burst frequency at the bifurcation value a∗ = 1.678 × 10−2.
3

The cause of such a frequency decrease around a = a∗ is related to the fact that each burst needs to be longer to support one additional spike, and the variable u(t) is set to a higher value after the fifth spike. This implies that the time to recover a value likely to generate the next burst is larger, as shown in panels (b) and (c) of Fig. 1. The frequency response for Ib = 8.2 is relevant because this is the effective mean current value I(t) that neurons experience in the network when Ib = 10.-
0 and γ = 0.03. Panels (d) and (e) of Fig. 1 show the time evolution of v(t) and u(t) for the same values of parameter a as in panels (b) and (c), respectively. If Ib = 8.2, the additional fifth spike that characterizes the bifurcation is not present due to the lower rate of change on variable vi, so the input bias Ib can not outweigh the inhibiting effect of term −ui in Eq. 1 a fifth time, what prevents the bifurcation for such input bias value and parameter a range. In a way, for this smaller st-
imulus bias value, the neuron tends to retain the dynamics of four spikes per burst, despite the similarity of burst frequencies for the same value of a. The bifurcation process alters the sensitivity of neurons to external coupling inputs so that neurons with a > a∗ exhibit less frequency variation than those with a < a∗ as I(t) changes. This mechanism can promote or inhibit frequency synchronization in our neuronal network, leading to two-phase synchronization regimes.
4. Collective Neuronal Dynamics
In a recent study [32], the authors explored a similar configuration of heterogeneous neuronal networks exhibiting bistable or intermittent synchronization patterns. Here instead, we investigate how individual neuron dynamics affect the network intermittent dynamics transition times.
4.1. Network Model Dynamics
We consider the network dynamics, where Fig. 2 displays the time evolution of the network mean-field for intermittent transition dynamics. Our analysis focuses on a network with N = 60 neurons, a coupling of γ = 0.03, and an input bias value of Ib = 10.0. These parameters provide more frequent transition times. Panel (a) depicts some synchronization transitions. The lower amplitude oscillations correspond to the unsynchronized state, while the higher amplitude oscillations represent the partially -
synchronized state. The synaptic inputs for the unsynchronized and partially synchronized states are shown in panels (b) and (c). On the right side of Fig. 2, the probability density of each signal is plotted. Notably, the partially synchronized state exhibits an amplitude approximately ten times greater than the unsynchronized mean-field. We present a fast Fourier transform (FFT) of the three signals in panel (d). Let us highlight the features of the synaptic input signals. First, these signals f-
luctuate around 8.2 rather than the value set for Ib, which is 10.0. Second, the amplitude and frequency spectrum of I(t) for the unsynchronized and partially synchronized states differs. Third, the predominant frequency in all signals is around the expected frequency of bursts of neurons, which is near 12 ∼ 18 Hz. The formation of intermittent synchronized clusters results from the interplay of two contrasting factors. One is associated with the distinct individual dynamics of neurons inducing an-
 unsynchronized state. The other refers to the influence of the network mean-field to impose phase-synchronized dynamics. The network contains partially synchronized and unsynchronized states, though not globally stable, leading to intermittent transitions between them. To assess whether the system is phase synchronized or unsynchronized, we use the Kuramoto order parameter [39]. This quantifier for the cluster g with ng oscillators is given by
Rg(t) = 1
ng
ng X
j=1
eiθj(t) , (5)
where the angle θ j(t) for each neuron j is determined by
θ j(t) = 2πk j + 2π t − tk−1, j
tk, j − tk−1, j
, (6)
and tk, j is the time when the kth burst of the jth neuron occurs. If Rg(t) is close to zero, there is a high mismatch among the phases, and for values close to unity, the phases have almost no distinction, and the system is synchronized. The Kuramoto order parameter for clusters indicates partial phase synchronization when some cluster presents a high value while another presents a low value.
4

Figure 2: Panel (a) shows the time evolution of the mean-field during intermittent dynamics and the mean-field distribution. Panels (b) and (c) display representative synaptic inputs (as described in Eq. 4), collected at periods indicated in panel (a), representing unsynchronized and partially synchronized states, respectively. Panel (d) shows the FFT of the signals using a sampling rate of 200 Hz and a duration period of 200 s. The intermittent section is represented in black, the unsynchronized-
 state in yellow, and the partially synchronized state in magenta.
4.2. Clustered Networks Dynamics
In this study, we can have a network with partial phase synchronization, where half of its elements form a cluster with the same dynamics. To analyze this, we calculate two order parameters: one for the cluster that can synchronize and another for the remaining neurons. For a network with N neurons, we define R1(t) as the order parameter for the neuron cluster that never synchronizes and R2(t) as the order parameter for the cluster that intermittently synchronizes. In Fig. 3(a), we display the Kur-
amoto order parameter RT (t) for the entire network. Furthermore, we delineate the order parameters R1(t) and R2(t) for two clusters: the former for neurons with parameter a < a∗, and the latter for neurons where a > a∗. Panels (b) and (c) provide a closer view of two transitions. One corresponds to the partially phase synchronized state and the other one to the unsynchronized state. Finally, panels (d) and (e) present a raster plot of bursts with the instantaneous burst frequencies represented in-
 the color scale. The partial phase synchronized state is characterized by a R1(t) close to 0 while R2(t) approaches 1. That is, cluster 2 is synchronized, while cluster 1 is not. This state arises due to the preservation of distinct natural bursting frequencies in the neurons, even when subjected to the unsynchronized synaptic input, which has a relatively low amplitude. In contrast, the synaptic input in partially synchronized states has a higher amplitude due to the coherence of bursts. This al-
lows neurons in cluster 2 to access different burst frequencies through their time evolution, thereby facilitating their synchronization. The synaptic input I(t), which couples neurons, stabilizes the network in each synchronization state. However, not all neurons can retain coherent cluster dynamics, which is associated with the parameter a for the neuronal dy
5

Figure 3: Intermittent transition between unsynchronized and partially synchronized states. We integrate N = 60 coupled neuronal equations with the following parameters: b = 0.20, c = −50.0, d = 2.0, Ib = 10.0 and γ = 0.03. Additionally, the parameter a is uniformly distributed from amin = 0.013 to amax = 0.024 for each neuron We show the Kuramoto order parameter time evolution for (a) several transitions in a larger time scale, (b) the amplification of one transition to a partially synchronized -
state, (c) one transition to an unsynchronized state, in (d) and (e) the respective raster plots of these transitions. The curves in panel (a) correspond to partial and total order parameters, RT (t) in solid black for the entire network, R1(t) in dotted blue for the cluster of neurons with a < a∗, and R2(t) in dashed red for the cluster of neurons with a > a∗. In panels (d) and (e) the black slashes are the beginning of each burst and the color scale gives the instantaneous frequency of each burs-
t. We notice that the unsynchronized state retains the distinct natural frequencies while the partially synchronized state experiences fluctuations in instantaneous frequencies, eventually leading the network to experience phase synchronization.
namics. Neurons with parameters a > a∗ perform with four and five spikes per burst during the synchronized network dynamics. Fig. 4 illustrates the probability distributions of residence times in each synchronization state for the random and discrete gap parameters arrangement. Specifically, panels (a) and (b) show the probabilities of residence times for the partially synchronized state, while panels (c) and (d) depict those for the unsynchronized state. Panels (b) and (d) amplify the shorter dur-
ation transitions, with the horizontal axis displayed on a linear scale. There are two different arrangements of parameters, each leading to different residence times. In the case of the uniform random arrangement, we observe an exponential decay in the probability distribution. However, in the orderly scenario, in addition to the exponential decay, we notice peaks with distinguished most probable transition times. We identify the peaks in the probability distribution of residence times as charact-
eristic transition times between synchronization states. These characteristic times are consistent for both the unsynchronized and partially synchronized states.
5. Beat Frequency Statistics of Many Oscillators
Now, we introduce the general formula for the possible beat frequencies and the number of oscillators that undertake each beat. Furthermore, we explore the impact of the distribution of neuron frequencies with respect to parameter a on the characteristic transition times. This exploration employs a formalism rooted in the frequency beats of periodic oscillators, capturing the behavior of neurons evolving with either phase coherence or phase incoherence. Interestingly, synchronized neurons with sim-
ilar phases still display beat frequencies during intermittent transitions. We consider a set of N periodic oscillators that have N different frequencies, and we derive its properties of the possible frequency beats. Specifically, if we consider two different oscillators k and p with discretized frequencies,
6

Figure 4: Probability distribution density of residence times for (a-b) partially synchronized and (c-d) unsynchronized states of the network, using random (black) or arranged by discrete gaps (red) of parameter a for amin < a < amax. The oscillations in p(Tr) arising from frequency gaps due to beat times are discernible when compared to the random scenario.
the beat frequency between the two can be expressed as follows
f (k,p)
b = | fk − fp| = |k − p|∆ f, k, p = 1, 2, 3, ..., N, (7)
where ∆ f is the minimum frequency gap between any pair of oscillators. The simplest case where this feature could arise is by an intrinsic discretization of the heterogeneity-providing parameter. The frequency gap is ∆ f = (∂ f /∂a)∆a and ∂ f /∂a is the rate of change of frequency concerning the heterogeneityproviding parameter a. Moreover, ∆a is represented as ∆a = (amax−amin)/N, where amin and amax signify the minimum and maximum parameters allocated for the uniform distribution, respectively.
7

The beat period between two distinct neurons k, p is given by
T (k,p)
b =1
f k,p
b
=1
|k − p|
1
amax − amin ∂ f
∂a
N, (8)
where T (k,p)
b assumes a maximum value when the neurons minimally differ by one gap ∆ f . In this case, the maximum beat time is given by
Tb = 1
amax − amin ∂ f
∂a
N= 1
∆ f . (9)
Moreover, Tb refers to the time beat between neighboring pairs of oscillators, separated by a gap ∆ f . In the case
of neurons with arbitrary separations j = |k − p|, we have the relation T ( j)
b = Tb/ j. Even though there are several beat times, we show in Appendix A that time Tb is preferential over any other beat time.
6. Transitions Induced by Beat Frequency
Here, we discuss the source and algebraic agreement with the simulation of beat induced transitions. In Fig. 5, we analyze the burst frequency distributions f of each neuron in the network, both in the partially synchronized (magenta) or unsynchronized (yellow) state. For the unsynchronized state, we observe a monotonic increase in the mean frequency as a increases. However, for the partially phase synchronized state, the synchronized neurons share the same mean frequency but there are two modes o-
f more probable frequencies. The slopes of the frequency modes are used to indicate which one of the neuron cluster controls the intermittency induced by the beat frequency.
Figure 5: Burst frequency distributions of each neuron in the network. We present the partially phase-synchronized state in magenta and the unsynchronized state in yellow. The network comprises 60 distinct neurons with uniform parameter allocation between amin = 0.013 and amax = 0.024, coupling strength γ = 0.03 and current bias Ib = 10.0. Color shades show the burst frequency distribution, while dots indicate the mean frequency of each neuron. In the unsynchronized state, the mean frequency incre-
ases with a, while in the partially synchronized state, the synchronized neuron cluster has the same mean but different most probable frequencies due to the bimodal distribution.
In Table 1, we show the linear fitting for the rate of change ∂ f /∂a of each neuron cluster and for the isolated neuron dynamics (γ = 0.0). When the frequency distribution is unimodal, the fit follows the mean frequency, while when the distribution is bimodal, the fitting is done by the mean of two frequency modes (shown in Fig. 5). Using these values, we can infer the cause of the transitions regulated by beat frequencies. To enable the beat frequency formalism to forecast the peaks in the proba-
bility distribution of residence times in both synchronization states, the frequency response to the parameter a provided by heterogeneity should correspond to the observed value of ∂ f /∂a = 570.0. In Table 1, we show that cluster 2 has the mean frequency deviation of 1.32% for the unsynchronized state. Moreover, for a partially phase synchronized state, the higher mode displays a deviation of 10.29% and the lower mode a deviation of only 3.05%. Cluster 1 is unlikely to be responsible for the tra-
nsitions given by beat frequency. The frequency deviations from the correct value are 16.29% for the unsynchronized state and 27.45% for the partially phase-synchronized state.
8

Table 1: Frequency gaps for the uncoupled network (Ib = 10.0; γ = 0.0) and the coupled network (Ib = 10.0; γ = 0.03). In the coupled network, the unsynchronized and partially synchronized frequency gaps for each cluster are presented.
Network Neuron Pertinent Fit Mean f State Cluster Frequencies ∂ f /∂a Deviation
Uncoupled 1 Mean 791.62 
2 Mean 627.89 
Unsynchronized 1 Mean 662.31 16.29%
2 Mean 562.45 1.32%
1 Mean 726.45 27.45% Partially 2 Mean 63.65 Synchronized 2 Higher Mode 511.32 10.29% 2 Lower Mode 552.60 3.05%
Figure 6: We show, in color scale, the probability density distribution of residence times for (a) partially synchronized and (b) unsynchronized states as a function of the residence times and the number of neurons. The dashed lines are the multiples of the beating period given by Eq. 9 that better fit the peaks of the distributions concerning the frequency response ∂ f /∂a. The best fit for both states is for ∂ f /∂a = 570.0, this value being similar only to the most probable frequency response t-
o heterogeneity in the cluster that phase-synchronizes.
Transition times within cluster 2 are influenced solely by its intrinsic neuron beat frequency, rather than being triggered by other neuron clusters. A key finding of our study is that the frequency gaps are linked to distribution frequency modes, rather than the mean frequency, allowing transition times to be controlled by the beat frequency even for neurons with elevated synchronization. Fig. 6 shows in color scale the logarithm of the probabilities to observe synchronized or unsynchronized stat-
es as a function of the residence times and the number of neurons. The lines in dashed white correspond to the best fit for beat times Tb (Eq. 9) and its multiples for the rate ∂ f /∂a.
9

The above observations agree with the frequency decomposition analysis of the synaptic input (in Fig. 2), where no frequency with the order of the expected frequency beat has been observed. This indicates that the network influence through the coupling over neurons does not dictate the transition times related to the peaks in the probability distribution. In this context, the synaptic input serves as the driving force behind transitions, leading to the emergence of the power law trend in the prob-
ability distribution of residence times. Simultaneously, the beat frequency mechanism operates in conjunction with the non-uniformity of the synaptic input to facilitate transitions in intermittent dynamics. However, when the beat frequency mechanism is present, the beat time Tb stands out as a more probable event. Overall, the limited possibility of burst frequencies for neurons is one of the key requirements for dynamics with preferred transition times. This result emphasizes how the systematica-
l allocation of individual properties impacts the network’s complex dynamics through timed self-organization to induce synchronization or desynchronization.
7. Conclusions
Intermittent synchronization of neurons occurs when coherent behavior suddenly emerges in sets of incoherent oscillators and is regarded as a key capability in complex neuronal network processing. In this study, we observe this phenomenon in a heterogeneous neuronal network, where the frequency distribution for neurons leads to an unprecedented way to control transitions between synchronization states through beat frequency. The proximity to the bifurcation parameter value allowed for an additiona-
l frequency mode with a spike gain in each burst. This effect enabled neurons that would otherwise be asynchronous to synchronize. As a result, the neurons could maintain properties from their distinct individual dynamics while being phase synchronized, facilitating intermittent transitions at time windows determined by their frequency gaps. The beating effect increases the probability of transitioning between synchronization states at specific times. We showed how to obtain the preferred transiti-
on times in an algebraic form. Furthermore, this phenomenon significantly diminishes in larger networks or non-homogeneous frequency gap distribution. Future work will explore such defects, improving the framework to incorporate different network topologies with more general frequency distributions. Setting out the instances when the beat frequency is a viable mechanism for oscillating networks to control their state transition.
Acknowledgments
This work was supported by the Brazilian research agencies Conselho Nacional de Desenvolvimento Científico e Tecnológico (CNPq) Grants Nos. 308441/2021-4, 305189/2022-0, 408254/2022-0 and 140950/2023-0. It has been partially financed by the Coordenação de Aperfeiçoamento de Pessoal de Nível Superior, Brasil (CAPES), Finance Code 001, through project No. 88887.833325/2023-00, 88887.898929/2023-00 and 88887.898924/2023-00. Financial support from the Spanish State Research Agency (AEI) and the Europe-
an Regional Development Fund (ERDF) under Project No. PID2019-105554GB-I00 is also acknowledged.
Author Contribution Statement
G. M.: Conceptualization, Investigation, Visualization and Writing - Original Draft. T. L. P.: Supervision, Writing - Review and Editing. M. A. F. S.: Writing - Review and Editing. S. R. L.: Writing - Review and Editing.
Declaration of Competing Interest
The authors declare that they have no known competing financial interests or personal relationships that could have appeared to influence the work reported in this paper.
10

Appendix A. Beat Times Calculation
Here, we show which beat time engages the largest number of oscillators. The number of oscillator pairs with a beat time is expressed by N T ( j)
b = N − j, where there are j frequency gaps from N(N − 1)/2 pairwise oscillators combinations. From Eq. 8, we associate the beat frequency between any two oscillators with the characteristic time Tb. The number of pairs that beat at time Tb/ j is given by the sum over the pairs that beat at times Tb/(k · j), which are fractions of Tb/ j and presented by
N(Tb/ j) =
⌊(N−1)/ j⌋ X
k=1
N (T (k· j)
b )=
⌊(N−1)/ j⌋ X
k=1
N − jk, (10)
for j = 1 we have the maximum number of involved oscillators
N(Tb) =
NX−1
k=1
N − k = N(N − 1)
2 . (11)
In general, the number of oscillator pairs that beat for j = 2 is N(Tb/2) = N(N − 2)/4, then for j = 3 it is N(Tb/3) = N(N − 3)/8, and following this pattern, the number of oscillators that beat in consonance at time TB/ j is given by
N(Tb/ j) = N(N − j)
2 j , j = 1, 2, ..., N − 1, (12)
thus, the fraction of oscillators that beat together at time Tb/ j is written as
N(Tb/ j)
N(N − 1)/2 = 1
2 j−1
(N − j)
(N − 1) . (13)
Therefore, the discrete and uniform frequency distribution promotes characteristic times Tb = 1/∆ f that are the most probable events for the network when all the N(N − 1)/2 possible pairs of oscillators beat together. Subsequent beat times j + 1 have less than half the number of participating oscillators than the previous beat time j; thus, as j increases, fewer oscillators participate in each beat.
References
[1] A. Pikovsky, M. Rosenblum, J. Kurths, S. Strogatz, Synchronization: A Universal Concept in Nonlinear Sciences, Phys. Today. 56 (2003) 47–47.
[2] S. Boccaletti, A. Pisarchik, C. Genio, A. Amann, Synchronization: From Coupled Systems to Complex Networks, Cambridge University Press, Cambridge, 2018.
[3] F. Pulvermüller, H. Preissl, W. Lutzenberger, N. Birbaumer, Brain Rhythms of Language: Nouns Versus Verbs, Eur. J. Neurosci. 8 (1996) 937–941.
[4] S. R. Jones, When Brain Rhythms Aren’t ‘Rhythmic’: Implication for Their Mechanisms and Meaning, Curr. Opin. Neurobiol. 40 (2016) 72–80.
[5] G. Buzsaki, Rhythms of the Brain, Oxford University Press, Oxford, 2006.
[6] R. Guevara Erra, J. L. Perez Velazquez, M. Rosenblum, Neural Synchronization From the Perspective of Nonlinear Dynamics, Front. Comput. Neurosci. 11 (2017) 98.
[7] F. Pike, R. Goddard, J. Suckling, P. Ganter, N. Kasthuri, O. Paulsen, Distinct Frequency Preferences of Different Types of Rat Hippocampal Neurons in Response to Oscillatory Input Currents, J. Physiol. 529 (2004) 205 – 213.
[8] A. Hyafil, A.-L. Giraud, L. Fontolan, B. Gutkin, Neural Cross-Frequency Coupling: Connecting Architectures, Mechanisms, and Functions, Trends in Neurosci. 38 (2015) 725–740.
11

[9] C. Hammond, H. Bergman, P. Brown, Pathological Synchronization in Parkinson’s Disease: Networks, Models and Treatments, Trends Neurosci. 30 (2007) 357–364.
[10] Z. Wang, Z. Liu, A Brief Review of Chimera State in Empirical Brain Networks, Front. Physiol. 11 (2020) 724.
[11] L. L. Rubchinsky, C. Park, R. M. Worth, Intermittent Neural Synchronization in Parkinson’s Disease, Nonlinear Dyn. 68 (2012) 329–346.
[12] H. A. Braun, M. Dewald, K. Schäfer, K. Voigt, X. Pei, K. Dolan, F. Moss, Low-dimensional Dynamics in Sensory Biology 2: Facial Cold Receptors of the Rat, J. Comput. Neurosci. 7 (1999) 17–32.
[13] R. Fitzhugh, Impulses and Physiological States in Theoretical Models of Nerve Membrane, Biophys. J. 1 (1961) 445–466.
[14] J. Nagumo, S. Arimoto, S. Yoshizawa, An Active Pulse Transmission Line Simulating Nerve Axon, Proc. IRE. 50 (1962) 2061–2070.
[15] C. Morris, H. Lecar, Voltage Oscillations in the Barnacle Giant Muscle Fiber, Biophys. J. 35 (1981) 193–213.
[16] J. L. Hindmarsh, R. M. Rose, A. F. Huxley, A Model of Neuronal Bursting Using Three Coupled First Order Differential Equations, Proc. R. Soc. Lond. B Biol. Sci. 221 (1984) 87–102.
[17] B. Ibarz, J.M. Casado, and M.A.F. Sanjuán. Map-based models in neuronal dynamics. Phys. Rep. 501(1–2), 1-74 (2011).
[18] D. R. Chialvo, Generic Excitable Dynamics on a Two-Dimensional Map, Chaos, Solitons & Fractals 5 (1995) 461–479. Nonlinear Phenomena in Excitable Physiological Systems.
[19] N. F. Rulkov, Regularization of Synchronized Chaotic Bursts, Behav. Brain Sci. 86 (2001) 183–186.
[20] E. M. Izhikevich, G. M. Edelman, Large-scale Model of Mammalian Thalamocortical Systems, Proc. Natl. Acad. Sci. U.S.A. 105 (2008) 3593–3598.
[21] R. Naud, N. Marcille, C. Clopath, W. Gerstner, Firing Patterns in the Adaptive Exponential Integrate-and-Fire Model, Biol. Cybern. 99 (2008) 335.
[22] E. M. Izhikevich, Simple Model of Spiking Neurons, IEEE Trans. Neural. Netw. 14 (2003) 1569–1572.
[23] E. M. Izhikevich, Dynamical Systems in Neuroscience, MIT press, 2007.
[24] A. Tamura, T. Ueta, S. Tsuji, Bifurcation Analysis of Izhikevich Neuron Model, Dyn. Contin. Discrete Impuls. Syst. Ser. A Math. Anal. 16 (2009) 759–775.
[25] D. M. Fox, H. G. Rotstein, F. Nadim, Bursting in Neurons and Small Networks, in: Encyclopedia of Computational Neuroscience, Springer, 2022, pp. 582–596.
[26] J. Xu, J. Wang, Q. Xu, J. Fang, J.Qiu, Mean field derivation and validity verification of neural networks coupled by Izhikevich neurons, Nonlinear Dyn., 111, (2023), 22567–22593.
[27] R. E. Berg, Pendulum Waves: A Demonstration of Wave Motion Using Pendula, Am. J. Phys. 59 (1991) 186–187.
[28] J. A. Flaten, K. A. Parendo, Pendulum Waves: A Lesson in Aliasing, Am. J. Phys. 69 (2001) 778–782.
[29] D. R. Chialvo, How We Hear What Is Not There: A Neural Mechanism for the Missing Fundamental Illusion, Chaos 13 (2003) 1226–1230.
[30] P. Balenzuela, H. Braun, D. R. Chialvo, The Ghost of Stochastic Resonance: An Introductory Review, Contemp. Phys. 53 (2012) 17–38.
12

[31] D. R. Chialvo, O. Calvo, D. L. Gonzalez, O. Piro, G. V. Savino, Subharmonic Stochastic Synchronization and Resonance in Neuronal Systems, Phys. Rev. E 65 (2002) 050902.
[32] G. Marghoti, T. de Lima Prado, A. C. Conte, F. A. S. Ferrari, S. R. Lopes, Intermittent Chimera-like and Bistable Synchronization States in Network of Distinct Izhikevich Neurons, Chaos, Solitons & Fractals 162 (2022) 112401.
[33] D. C. Cooper, S. Chung, N. Spruston, Output-mode Transitions are Controlled by Prolonged Inactivation of Sodium Channels in Pyramidal Neurons of Subiculum, PLoS Biol. 3 (2005) e175.
[34] H. Cagnan, N. Mallet, C. K. Moll, A. Gulberti, A. B. Holt, M. Westphal, C. Gerloff, A. K. Engel, W. Hamel, P. J. Magill, et al., Temporal Evolution of Beta Bursts in the Parkinsonian Cortical and Basal Ganglia Network, Proc. Natl. Acad. Sci. U.S.A. 116 (2019) 16095–16104.
[35] F. Gonon, Nonlinear Relationship Between Impulse Flow and Dopamine Released by Rat Midbrain Dopaminergic Neurons as Studied by in Vivo Electrochemistry, Neuroscience 24 (1988) 19–28.
[36] M. S. Cembrowski and N. Spruston, Heterogeneity Within Classical Cell Types is the Rule: Lessons From Hippocampal Pyramidal Neurons, Nat. Rev. Neurosci. 20 (2019) 193-204.
[37] M. V. Bennett, R. S. Zukin, Electrical Coupling and Neuronal Synchronization in the Mammalian Brain, Neuron 41 (2004) 495–511.
[38] A. E. Pereda, Electrical Synapses and Their Functional Interactions with Chemical Synapses, Nat. Rev. Neurosci. 15 (2014) 250–263.
[39] Y. Kuramoto, Chemical Oscillations, Waves, and Turbulence, Courier Corp., 2003.
13

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:07.400Z
- **Text Length:** 37709 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 13 of 13
