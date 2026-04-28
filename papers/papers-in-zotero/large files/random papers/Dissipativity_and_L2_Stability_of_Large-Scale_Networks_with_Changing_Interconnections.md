# PDF Document: Jang and Bridgeman - 2025 - Dissipativity and L2 Stability of Large-Scale Networks with Changing Interconnections.pdf

**File Path:** Jang and Bridgeman - 2025 - Dissipativity and L2 Stability of Large-Scale Networks with Changing Interconnections.pdf

**Processed Date:** 2026-02-10T18:18:44.383Z

**File Size:** 522.63 KB

**Total Pages:** 6

**Extracted Pages:** 6

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3322

**Title:** Dissipativity and L2 Stability of Large-Scale Networks with Changing Interconnections

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Dissipativity and L2 Stability of Large-Scale Networks with Changing Interconnections
Ingyu Jang ∗ Leila J. Bridgeman ∗
∗ Department of Mechanical Engineering and Material Science, Duke University, Durham, NC 27708 USA (e-mail: ij40@duke.edu; ljb48@duke.edu).
Abstract: In this paper, the L2 stability of switched networks is studied based on the QSR-dissipativity of each agent. While the integration of dissipativity with switched systems has received considerable attention, most previous studies have focused on passivity, internal stability, or feedback networks involving only two agents. This work makes two contributions: first, the relationship between switched QSR-dissipativity and L2 stability is established based on the properties of dissipativity -
parameters of switched systems; and second, conditions for L2 stability of networks consisting of QSR-dissipative agents with switching interconnection topologies are derived. Crucially, this shows that a common storage function will exist across all modes, avoiding the need to find one, which becomes computationally taxing for large networks with many possible configurations. Numerical examples demonstrate how this can facilitate stability analysis for networked systems under arbitrary switching -
of swarm drones.
Keywords: Networked systems, Optimal control, Robust control, Non-linear control systems, Large scale complex systems
1 Introduction
Control over wireless networks is increasingly common, but communication lines can drop and reconnect unexpectedly, creating discrete switches in the network dynamics, so it is crucial to design controllers that are robust to these changes. However, a switched system may become unstable even if each mode is individually stable [Liberzon, 2003]. When studying internal stability, to preclude this, a shared Lyapunov function can be sought for all modes. If individual Lyapunov functions are sought for-
 each mode, compatibility conditions must be imposed between them during mode transitions. Either way, you must solve a Lyapunov search problem for all modes simultaneously. This can become wildly computationally taxing when changes in a network’s topology induces mode transitions: finding a Lyapunov function for a single large network can be taxing (especially with nonlinear agents), and this must be done simultaneously for each possible interconnection topology, of which there may be many in a l-
arge network. This paper explores how input-output (IO) stability analysis and a dissipativity perspective can be used to confront this untenable computational burden.
Switched systems consist of a set of submodes, and their dynamical model is selected from this set according to a switching signal that depends on either the state or time [Liberzon, 2003]. Common or multiple Lyapunov function techniques have been widely used to address stability analysis and the synthesis of stabilizing controllers and switching signals [Branicky, 2002; Bacciotti and Mazzi, 2005; Mancilla-Aguilar and Garcı ́a, 2006; Zhao and Hill, 2008b; Zhang et al., 2015]. Other studies have in-
troduced
⋆ This work is supported by ONR Grant No. N00014-23-1-2043.
dwell time constraints to exploit the fact a switched system can be stable if switching is sufficiently slow [Hespanha and Morse, 1999; Zhai et al., 2001].
Switched dissipativity has attracted considerable attention in recent years due to its merits on design compositionality [Zakeri and Antsaklis, 2022]. Passivity[Hatanaka et al., 2015] and dissipativity[Willems, 1972; Hill and Moylan, 1977; Lozano et al., 2013] have been investigated to account for energy information in switched systems. Passivity has been analyzed using storage functions[Chen and Saif, 2005; Zhao and Hill, 2006, 2008c] and linear matrix inequality (LMI)[Geromel et al., 2012]. [Bem-
porad et al., 2008] studied the passivity properties of discrete-time hybrid systems in the piecewise polynomial form. More general notions of incremental passivity, dissipativity, and incremental (Q, S, R)-dissipativity have been introduced for switched systems [Zhao and Hill, 2008a, 2009; Dong and Zhao, 2012; Pang and Zhao, 2016]. Dissipativity of switched systems has been established based on dwell times [Xiang et al., 2015], scattering transformations combined with a common storage function [P-
olushin, 2021], LMI conditions [Jungers et al., 2019], and a decomposable supply rate is separated into a main supply rate and subsidiary supply rates[Liu and Hill, 2011].
Despite all of this research, few works have exploited a key feature of dissipativity in a switching context: interconnections of dissipative systems are themselves dissipative and IO stable if they satisfy the Network Dissipativity Theorem (NDT) in [Moylan and Hill, 1978; Vidyasagar, 1981]. This allows the use of only open-loop analysis of individual agents to assess the stability of the entire network. Most results exploiting this rely on the special case of passivity. Some works have employed d-
issipativity, but
arXiv:2511.18551v1 [eess.SY] 23 Nov 2025

their stability theorems are primarily based on internal stability, despite the critical role of IO stability in ensuring robustness [Hill and Liu, 2022]. Moreover, these studies are largely confined to generic switched systems, rather than considering the underlying mechanisms that induce switching. In contrast, this work focuses on the relationship between QSR-dissipativity of agents and L2 stability of their interconnection under switching network topologies, with the goal of creating tractibl-
e computations, even in large, changing networks.
The contributions of this paper are twofold. First, we establish a relationship between switched QSR-dissipativity and IO stability using the dissipativity parameters, where prior work has employed more restricted switched dissipativity definitions and required intermediary notions of gain. Second, we specialize the result to establish IO stability conditions to switched networked systems, where switching arises solely from changing topologies, not switching agent dynamics. These conditions serve -
as an extension of NDT in [Moylan and Hill, 1978; Vidyasagar, 1981] to switched networked systems, enabling network stability analysis using open-loop characterizations of individual agents. Most critically, by using the dissipativity properties of each agent, the resulting switched networked system can be guaranteed to be IO stable under arbitrary switching signals without searching for a common storage function. Numerical examples illustrate the huge computational benefit of this approach relati-
ve to straightforwardly treating the network as a switched system, and even show a moderate benefit relative to prior work that constructs scattering functions to establish stability under arbitrary switching. Since many practical networked systems involve the addition or removal of several links, this result provides a useful condition for constructing IO stable systems under any arbitrary switching laws.
2 Preliminaries
2.1 Notation
The sets of real, nonnegative real, nonnegative integers, natural numbers, and natural numbers up to n are denoted R, R+, Z+, N, and Nn, respectively. The set of real n × m
matrices is Rn×m. The set of n × n symmetric matrices is denoted by Sn and the negative semi-definite subset of this is Sn−. Asterisks (∗) indicate transposed blocks in symmetric matrices. The notation A ≺ 0 indicates that A is negative-definite. The number of elements in a set A is denoted by |A|. The (i, j)th block of a matrix A is
(A)i,j . If (A)i,j ∈Rni×mj and A∈R
PN
i=1 ni× PM
j=1 mj , then A is said to be in RN×M block-wise.
The set of absolute integrable functions, absolute integrable positive functions, and square integrable functions are L1, L+
1 , and L2, respectively. The vector norm, Frobenius norm, and L2 norm are denoted by ∥·∥, ∥·∥F and ∥·∥2, respectively. The truncation of a function y(t) at T is denoted by yT (t), where yT (t) = y(t) if t ≤ T , and yT (t) = 0
otherwise. If ∥yT ∥22=⟨yT , yT ⟩= R ∞
0 yT
T (t)yT (t)dt<∞ for all T ≥0, then y∈L2e, where L2e is the extended L2 space.
2.2 Dissipativity
Consider a continuous nonlinear system G : L2me → Ll2e, represented by the state-space realization
G :  ̇x(t) = f (x(t), u(t)), y(t) = h(x(t), u(t)), (1)
where x(t) ∈ Rn, u(t) ∈ Rm, and y(t) ∈ Rl denote the states, inputs, outputs of the system, respectively. When contextually clear, the explicit time dependency will be omitted for notational simplicity.
Dissipativity, defined below, quantifies a relationship between system inputs and outputs.
Definition 1. (Dissipativity, [Lozano et al., 2013]). The system in Equation 1 is dissipative if there exists a storage function, V (x) ≥ 0, satisfying the dissipation inequality,
V (x(t)) − V (x(t0)) ≤
Zt
t0
w(u, y)dt, (2)
for any initial condition x(t0) = x0 and any t ≥ t0. When
w(u, y) = y
u
TQS ∗R
y
u , (3)
the system is called QSR-dissipative.
In this paper, L2-stability is used to define the IO stability.
Definition 2. (L2-stability, [Vidyasagar, 1981]). The sys
tem, G : L2me → Ll2e, defined by Equation 1 is L2-stable if there exists γ > 0 and a function β(x) such that
∥yT ∥2 ≤ γ∥uT ∥2 + β(x0). (4)
for all u ∈ L2m, x0 and T > 0. When G is L2 stable, infimum of γ is called its the L2-gain.
2.3 Switched Systems
A nonlinear switched system is defined by the family of M different modes with the form of Equation 1 as x ̇ = fσ(t)(x, u), y = hσ(t)(x, u), (5)
where σ:R+→NM is the switching signal which is a piecewise constant. This defines a switching sequence,
Σ= (ik,tk)|ik=σ(tk),tk+1= min{t>tk|σ(t)̸=σ(tk)} ∞
k=0. (6)
In this paper, we assume following to ensure that the state trajectory is continuous and prevent Zeno behavior [Liberzon, 2003].
Assumption 1. The state of Equation 5 does not jump at the switching instants and σ(t) can only switch a finite number of times on any finite time interval.
The stability notion in Definition 2 applies to switched systems for a given switching signal σ(t). If the system remains L2 stable under any possible switching signal, it is referred to as L2 stable under arbitrary switching.
2.4 Switched Networked Systems
Controlling networked systems whose communication links may arbitrarily drop or reconnect is a major challenge. Due to the discrete changes in communication topology, these networks exhibit switched system dynamics. This section reviews the dynamics of switched systems and relates switched dynamics to networks with changing topologies.

Consider N agents Gp:Lmp
2e →Llp
2e with interconnected dynamics,
Gp : x ̇ p =f p(xp, up), yp = hp(xp, up),
up =ep +
X
q∈NN
Hσ(t)
pq yq, u = e + Hσ(t)y, (7)
where u=col(up)p∈NN, y=col(yp)p∈NN, and e=col(ep)p∈NN. The matrix Hσ(t) represents the communication topology
among agents, whose (p, q)th block, Hσ(t)
pq ∈Rmp×lq , is governed by switching signal, σ(t)∈NM . This switching signal defines the same switching sequence as in Equation 6. Therefore, the networked system Gb:e→y, described by Equation 7, is a special case of Equation 5, which we call a switched networked system.
3 Switched Dissipativity and L2 Stability Analysis
In this section, the notion of dissipativity and L2-stability for non-switched systems is extended to switched systems and switched networked systems. [Zhao and Hill, 2008a] first introduced the switched dissipativity with cross supply rate. However, that definition includes properties directly associated with the internal stability of the switched system, which may restrict the general applicability of the switched dissipativity framework. In this paper, a relaxed version of the definition in [Zh-
ao and Hill, 2008a] is adopted to avoid this. In addition, conditions ensuring the L2 stability under arbitrary switching of the switched and switched networked system are established.
3.1 Switched Dissipativity
The concept of switched dissipativity was first defined in [Zhao and Hill, 2008a, Def. 3.3], where it was defined using positive-definite multiple storage functions and 3 conditions. The first condition specifies the dissipativity for the active mode, the second condition describes the dissipativity for the inactive modes, and the last condition characterizes the properties of the active and cross supply rates for the specific inputs. Since the positive-definiteness of storage functions and the la-
st condition were primarily used to prove the internal stability of switched systems, this formulation can sometimes limit the applicability of the switched dissipativity definition to other stability notions. Therefore, in Definition 3 we adopt a relaxed version of [Zhao and Hill, 2008a, Def. 3.3] to define the dissipativity of switched systems.
Definition 3. (Switched Dissipativity). The system in Equation 5 is said to be switched dissipative under the switching sequence Σ if there exist continuous functions Vi(x) ≥ 0, so-called storage functions, active supply
rates wi
i(u, y), and cross supply rates wi
j(x, u, y, t) for i, j ∈ NM and j ̸= i such that
Vik (x(t)) − Vik (x(s)) ≤
Zt
s
wik
ik (u, y)dτ (8)
Vj(x(t)) − Vj(x(s)) ≤
Zt
s
wik
j (x, u, y, τ )dτ (9)
for all k ∈ N, tk ≤ s ≤ t < tk+1, and (ik, tk) ∈ Σ. When
wi
i(u, y) = y
u
T Qi Si ∗ Ri
y
u , ∀i ∈ NM (10)
the system is said to be switched QSR-dissipative.
3.2 L2 Stability with Common Storage Function
The L2 stability of switched systems has been studied in the literature. For instance, [Zhao and Hill, 2008b; Zhang et al., 2015] established L2 stability using multiple Lyapunov functions, while [Zhao and Hill, 2009] investigated the relationship between the individual L2 gain of switched systems’ modes, so-called vector L2 gain, and their internal stability. In contrast, our stability theorem, Theorem 1, discusses the conditions under which L2 stability can be inferred from the properties of the-
 swithced QSRdissipativity parameters and storage functions. Moreover, our theorem is built from the less restrictive dissipativity notion from Definition 3.
Theorem 1. Consider a switched system in Equation 5. If, for any i ∈ NM , the switched system is switched QSRdissipative with a common storage function Vi(x) = V (x) and satisfies Qi ≺ 0, then the system has a common supply rate and is L2 stable under arbitrary switching.
Proof. With a common storage function V (x), Equation 8 gives
V (x(t)) − V (x(s)) ≤
Zt
s
y u
T Qik Sik ∗ Rik
y
u dτ
for all k ∈ N, tk ≤ s ≤ t < tk+1, and (ik, tk) ∈ Σ. Since Qi ≺ 0, for each i ∈ NM , there exists εi > 0 such that Qi + εiI ≺ 0. By Young’s relation, the quadratic supply
rate of ith mode satisfies that
yT Qiy+yT Siu+uT ST
i y+uT Riu
≤yT (Qi+εiI)y+uT 1
εi
ST
i Si+Ri u
Define q = − maxi∈NM λmax(Qi + εiI), which is always
positive, and r = maxi∈NM λmax( 1
εi ST
i Si + Ri). Then
V (x(t)) − V (x(s)) ≤ −q
Zt
s
yT ydτ + r
Zt
s
uT udτ,
for all k ∈ N, tk ≤ s ≤ t < tk+1, and (ik, tk) ∈ Σ, which shows that the switched system is switched QSRdissipative with a common supply rate characterized by Q = −qI, S = 0, and R = rI. In addition, since V (x) ≥ 0 for all x ∈ Rn and V (x) is continuous,
−V (x(0)) ≤ −q
ZT
0
yT ydτ + r
ZT
0
uT udτ, ∀T ≥ 0.
Therefore, L2 stable under arbitrary switching. ■
3.3 Stability and Storage Functions
A common storage function satisfying Theorem 1 does not always exist, motivating various techniques to establish stability conditions using multiple Lyapunov or storage functions. The switched networked systems follow the same dynamics as switched systems, but constructing a Lyapunov function for a single large-scale network, particularly with nonlinear agents, is taxing. Our main result, Theorem 1, shows how to avoid this difficulty in switched networked systems with dissipative agents.
4 L2 Stability of Switched Networked Systems
This section establishes the stability of a switched networked system based on the local dissipativity properties

of individual agents. The open-loop properties of each dissipative agent play a critical role in determining overall stability under arbitrary switching, allowing us to construct a common storage function from the individual storage functions of each agent. Hence, the difficulty of constructing such common storage function can be avoided for switched networked systems. The result is sufficient conditions for stability, similar to the NDT for non-switched networked systems.
Theorem 2. Consider the networked system Gb : e → u of N agents defined in Equation 7. Assume that each agent is dissipative with storage function Vp(xp), and dissipativity parameters Qp, Sp, and Rp. Then the switched networked
system is L2 stable under arbitrary switching if Qb i≺0 for all i∈NM , where
Qb i=Q+SHi+HT
i S+HT
i RHi,
Q=diag(Qp)p∈NN , S=diag(Sp)p∈NN , R=diag(Rp)p∈NN .
Proof. From the QSR-dissipativity property of each agent, it follows that
X
p∈NN
[Vp(xp(T )) − Vp(xp(0))] ≤
ZT
0
y u
TQS ∗R
y
u dt.
Using Equation 7, we obtain
ZT
0
y u
TQS ∗R
y
u dt=
ZT
0
y
e+Hσ(t)y
TQS ∗R
y
e+Hσ(t)y dt
=
ZT
0
y e
T
"
Qb σ(t) Sbσ(t)
∗
Rb σ(t)
#
y
e dt,
where Sbi=S+HT
iˆ R, and Rb iˆ=R. It follows that the sys
tem is switched QSR-dissipative with a common storage function P
p∈NN Vp(xp). Therefore, from Theorem 1, the system is L2 stable under arbitrary switching. ■
4.1 Utility of Theorem 2
Theorem 2 implies that the L2 stability under arbitrary switching of a switched networked system can be determined directly from the local dissipativity parameters of agents and switching topology modes; there is no need to seek out the common storage function, which would otherwise be computationally heavy, involving all topologies and agents, while Theorem 2 separates agent-level and interconnection constraints for stability. A common approach to verify the L2 stability under arbitrary switching-
 of such systems is to construct a switched networked system and check whether it admits a common Lyapunov function, or whether it is dissipative with a common storage function and a common supply rate. Another approach is to employ a scattering function that modifies the input and output of the switched networked system to obtain a common storage function and a common prescribed supply rate [Polushin, 2021, Thm. 1]. In contrast, Theorem 2 is advantageous because it establishes the L2 stability un-
der arbitrary switching solely from the dissipativity information of individual agents, without requiring the construction of a global switched networked system or additional transformation.
Fig. 1. Switching modes of unmanned aerial vehicles (UAV)s’ controllers
5 NUMERICAL EXAMPLE
We investigate the stability of a network comprising 9 linearized UAVs within the switched-dissipativity framework. The network consists of 18 agents, including feedback controllers embedded within each UAV. The objective in this example is to determine whether the switched network is L2 stable under arbitrary switching signals, assuming that the external inputs belong to the L2 function space. The analysis considers a switched networked system subject to arbitrary switching events.
5.1 Swicthed Network of Unmanned Aerial Vehicles
We model the UAVs following the linearized UAV model in [Luis and Ny, 2016], using their dynamics matrices Ap ∈ R12×12 and Bp ∈ R12×4 for all p ∈ N9, and physical parameters, except for the mass and wing length. These are independently varied according to a uniform random distribution over [ 2
3, 4
3 ] of their values reported in [Luis and
Ny, 2016]. The input and output of each UAV are defined as the 4 rotors’ rotational speeds, up ∈ R4, and its state vector, xp ∈ R12, respectively. For all p ∈ N9, the linear quadratic regulator (LQR) controllers Kp ∈ R4×12 are designed with weighting matrices Qlqr = diag(100I6, 10I6) and Rlqr = I6.
Each UAV communicates its state information with other UAVs exclusively through the controllers. The basic interconnection structures bHi of UAVs with feedback controllers is expressed as
Hb i0 = 0 −I
Hc
i 0 ∈ R144×144, ∀i ∈ NM ,
where M = 4. When the UAVs are partitioned into 3 subgroups, (1, 2, 3), (4, 5, 6), and (7, 8, 9), with switching interconnection modes given by
Hc
1=


H0 0 He H 0 He 0 H

, Hc
2=


H0 0 0H0 He 0 H

, Hc
3=


H0 0
He H 0 0 0H

, Hc
4=
"H 0 0 0H0 0 0H
#
where
H=
"I 00 −I I 0 −I 0 I
#
, and He =
"−I 0 0 0 00 0 00
#
.
The corresponding switched network topologies are illustrated in Figure 1.
Each agent’s combined plant and the controller dynamics are
x ̇ p=Apxp+Bpup, up=−Kp xp+
X
q∈N9
(Hc
σ(t))p,q . (11)
Following Theorem 2, L2 stability of the changing network is verified by solving

0
2
4
6
8
10
State Error
Drone 1 Drone 2 Drone 3 switch
0
2
4
6
8
10
State Error
Drone 4 Drone 5 Drone 6 switch
0 20 40 60 80 100 120 140 160 180
0
2
4
6
8
10
t[s]
State Error
Drone 7 Drone 8 Drone 9 switch
0
0.2
0.4
0.6
0.8
1
State Error
Drone 1 Drone 2 Drone 3 switch
0
0.2
0.4
0.6
0.8
1
State Error
Drone 4 Drone 5 Drone 6 switch
0 20 40 60 80 100 120 140 160 180
0
0.2
0.4
0.6
0.8
1
t[s]
State Error
Drone 7 Drone 8 Drone 9 switch
Fig. 2. System responses to L2 disturbances: The dotted lines indicate the switching instants. The right plot presents magnified views of the corresponding left plot.
ApT Pp+PpAp−Qp PpBp−Sp ∗ −Rp
⪯0
−
Re p−SeT
p Kp−KT
p
Sep−KT
p
Qe pKp⪯0
Q + SHi + HT
i ST + HT
i RHi≺0
for all p ∈ N9 and i ∈ N4, where Q = diag(diag(Qp)p∈N9 , diag(Qe p)p∈N9 ), S=diag(diag(Sp)p∈N9 , diag(Sep)p∈N9 ), R = diag(diag(Rp)p∈N9 , diag(Re p)p∈N9 ) and (Qp, Sp, Rp) and (
Qe p, Sep, Re p) denote the dissipativity parameters for the pth UAV and its controller, respectively.
5.2 Results
The feasibility problems described in Section 5.1 are solved using MOSEK [ApS, 2019], YALMIP [Lofberg, 2004], and MATLAB. The problem is feasible, which implies that the corresponding switched networked system is L2 stable under arbitrary switching. In the following, we further verify this result by examining the system response to disturbances belonging to the L2 function space.
Every component of the state and input rpm of each agent is subjected to a disturbance belonging to the L2 function space. For each component, the disturbances are randomly selected from 3 functions, f1(t) = c1t2e−t, f2(t) = c2
sin(t)
t,
and f3(t) = c3 1
1+t , where each function is scaled by a constant factor, ci for i ∈ N3, such that its L2 norm is approximately 1. Furthermore, the disturbances applied to the input rpm are scaled by a factor of 1000 relative to those applied to the states, since the magnitudes of rpm values are significantly larger than those of the states.
The simulation is conducted with a sampling frequency of 24 Hz, corresponding to a sampling period of 41.7 ms, and a total duration of 180 s. Switching occurs randomly 15 times over the entire simulation horizon, and only i0 changes. The results are presented in Figure 2, where
the state error values are defined as
q
P
p∈N9 xpT (t)xp(t).
The result shows that the switched system remains stable under arbitrary switching with disturbances.
The L2 stability under arbitrary switching of the switched networked system can also be analyzed by considering the closed-loop dynamics of the system following
 ̇x = (A − BKHc
σ(t))x + [B −BK] up
uc , y = x
where A=diag(Ap)p∈N9 ∈R108×108, B=diag(Bp)p∈N9 ∈ R108×36, K=diag(Kp)p∈N9 ∈R36×108, and uu∈R36 and
Table 1. Computation time comparison
Approaches Time[s] Theorem 2 1.8496 Closed-loop analysis (diagonal variable) 3.0862 Closed-loop analysis (full variable) 264.0485 [Polushin, 2021, Thm. 1] (eigenvalue analysis) 0.0153
(find parameters) 2.2962
uc∈R108 are the exogenous inputs of UAVs and their controllers, respectively. One approach is to search a common storage function and a common supply rate of the closedloop switched networked system. This can be implemented using two types of dissipativity variables: a full variable matrix, or a block-diagonal matrix of smaller variables, i.e., X = diag(Xp)p∈N9 . The former provides greater flexibility but requires significantly more computation time than the latter.
Second, the L2 stability under arbitrary switching can be determined by employing the scattering function of the closed-loop switched system [Polushin, 2021]. According to [Polushin, 2021, Thm. 1], the scattering function is obtained by analyzing the eigenvalues and eigenvectors of the active supply rates of each switching mode. To apply this method, the liveness condition must be satisfied, and it is straightforward to verify that the considered system meets this requirement. The existence of thi-
s scattering function under this liveness condition ensures that the transformed switched dissipative system is L2 stable under arbitrary switching. The main advantage of this approach is that it explicitly provides a scattering function that modifies the system’s input and output to achieve the desired L2 gain. However, this method requires the dissipativity parameters of each mode to be identified in advance, which is computationally demanding and may lead to conservatism in the analysis.
Table 1 reports the computation time required to verify the L2 stability under arbitrary switching of Equation 11. The closed-loop analysis is more time-consuming than the approach based on Theorem 2, even when diagonal variables are used, since it involves solving a large-scale LMI. The method in [Polushin, 2021, Thm. 1] requires eigenvalue analysis of the given dissipativity parameters, which is impractical for optimal control frameworks. In addition, although solving the eigenvalue problem to o-
btain the scattering function is not computationally expensive, applying [Polushin, 2021, Thm. 1] still necessitates determining the dissipativity parameters of each switching mode in advance, which incurs a computational cost comparable to that of the closed-loop analysis. By contrast, Theorem 2 relies only on smaller LMIs whose sizes match the dimension of the individual UAV. This substantially reduces computation time and enables distributed analysis of the switched networked system.
6 Conclusion
This paper has established a framework for analyzing the switched dissipativity and L2 stability of switched and large-scale networked systems. The notion of L2 stability with dissipativity is extended to switched systems by introducing the concept of L2 stability under arbitrary switching. A switched networked system is considered where the network topology switches with dissipative

agents. In this case, L2 stability under arbitrary switching can be verified by analyzing the open-loop dissipativity of each agent, which generalizes the NDT in [Moylan and Hill, 1978; Vidyasagar, 1981]. A numerical example shows that the proposed switched network dissipativity theorem validates L2 stability under switching network topologies through open-loop analysis of individual agents, offering a more computationally effective alternative to other dissipativity-based and Lyapunov-based meth-
ods. The proposed works are expected to be valuable for distributed stability analysis or controller synthesis of switched networked systems.
References
ApS, M. (2019). Mosek optimization toolbox for matlab. User’s Guide and Reference Manual, Version, 4(1), 116. Bacciotti, A. and Mazzi, L. (2005). An invariance principle for nonlinear switched systems. Ctrl. Sys. L., 54(11), 1109–1119. Bemporad, A., Bianchini, G., and Brogi, F. (2008). Passivity analysis and passification of discrete-time hybrid systems. IEEE Tr. Aut. Ctrl., 53(4), 1004–1009. Branicky, M.S. (2002). Multiple lyapunov functions and other analysis tools for switched and hybrid system-
s. IEEE Tr. Aut. Ctrl., 43(4), 475–482.
Chen, W. and Saif, M. (2005). Passivity and passivity based controller design of a class of switched control systems. IFAC Proceedings Volumes, 38(1), 676–681. Dong, X. and Zhao, J. (2012). Incremental passivity and output tracking of switched nonlinear systems. I. J. Ctrl., 85(10), 1477–1485. Geromel, J.C., Colaneri, P., and Bolzern, P. (2012). Passivity of switched linear systems: Analysis and control design. Ctrl. Sys. L., 61(4), 549–554. Hatanaka, T., Chopra, N., Fujita, M., and Spong, M.W. (2-
015). Passivity-based control and estimation in networked robotics. Springer.
Hespanha, J.P. and Morse, A.S. (1999). Stability of switched systems with average dwell-time. In Conf. Dec. Ctrl., volume 3, 2655–2660. IEEE. Hill, D.J. and Liu, T. (2022). Dissipativity, stability, and connections: Progress in complexity. Ctrl. Sys. M., 42(2), 88–106. Hill, D.J. and Moylan, P.J. (1977). Stability results for nonlinear feedback systems. Autom, 13(4), 377–382. Jungers, M., Ferrante, F., and Loh ́eac, J. (2019). Dissipativeness and dissipativation of discrete-time switched linear sy-
stems. In Conf. Dec. Ctrl., 5760–5765. IEEE. Liberzon, D. (2003). Switching in systems and control, volume 190. Springer. Liu, B. and Hill, D.J. (2011). Decomposable dissipativity and related stability for discrete-time switched systems. IEEE Tr. Aut. Ctrl., 56(7), 1666–1671.
Lofberg, J. (2004). Yalmip: A toolbox for modeling and optimization in matlab. In I. C. Robo. Aut., 284–289. IEEE. Lozano, R., Brogliato, B., Egeland, O., and Maschke, B. (2013). Dissipative systems analysis and control: theory and applications. Springer Science & Business Media. Luis, C. and Ny, J.L. (2016). Design of a trajectory tracking controller for a nanoquadcopter. ArXiv.
Mancilla-Aguilar, J.L. and Garcı ́a, R.A. (2006). An extension of lasalle’s invariance principle for switched systems. Ctrl. Sys. L., 55(5), 376–384. Moylan, P. and Hill, D. (1978). Stability criteria for largescale systems. IEEE Tr. Aut. Ctrl., 23(2), 143–149. Pang, H. and Zhao, J. (2016). Incremental (q, s, r)dissipativity and incremental stability for switched nonlinear systems. J. Franklin Inst., 353(17), 4542–4564. Polushin, I.G. (2021). Stabilization of networks of switched dissipative syste-
ms through a scattering transformation technique. In Conf. Dec. Ctrl., 3930–3935. IEEE.
Vidyasagar, M. (1981). Input-output analysis of large-scale interconnected systems: decomposition, well-posedness and stability. Springer.
Willems, J.C. (1972). Dissipative dynamical systems part i: General theory. Ar. rat. mech. analy., 45(5), 321–351. Xiang, W., Xiao, J., and Zhai, G. (2015). Dissipativity and dwell time specifications of switched discrete-time systems and its applications in H∞ and robust passive control. Information Sciences, 320, 206–222. Zakeri, H. and Antsaklis, P.J. (2022). Passivity measures in cyberphysical systems design: An overview of recent results and applications. Ctrl. Sys. M., 42(2), 118–130. Zhai, -
G., Hu, B., Yasuda, K., and Michel, A.N. (2001). Stability analysis of switched systems with stable and unstable subsystems: an average dwell time approach. I. J. Sys. Sci., 32(8), 1055–1061. Zhang, H., Wang, B., Xie, D., Xu, S., and Dang, C. (2015). Stability, L2-gain and asynchronous H∞ control for continuous-time switched systems. International Journal of Robust and Nonlinear Control, 25(4), 575587. Zhao, J. and Hill, D.J. (2006). A notion of passivity for switched systems with state-dependent -
switching. J. Ctrl. Applc., 4(1), 70–75.
Zhao, J. and Hill, D.J. (2008a). Dissipativity theory for switched systems. IEEE Tr. Aut. Ctrl., 53(4), 941–953. Zhao, J. and Hill, D.J. (2008b). On stability, L2-gain and H∞ control for switched systems. Automatica, 44(5), 1220–1232. Zhao, J. and Hill, D.J. (2008c). Passivity and stability of switched systems: A multiple storage function method. Ctrl. Sys. L., 57(2), 158–164. Zhao, J. and Hill, D.J. (2009). Vector l2-gain and stability of feedback switched systems. Automatica, 45(7), 17031707.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:44.383Z
- **Text Length:** 31569 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 6 of 6
