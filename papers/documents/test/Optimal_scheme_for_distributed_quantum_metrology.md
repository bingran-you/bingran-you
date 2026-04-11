# PDF Document: Hu et al. - 2025 - Optimal scheme for distributed quantum metrology.pdf

**File Path:** Hu et al. - 2025 - Optimal scheme for distributed quantum metrology.pdf

**Processed Date:** 2026-02-10T18:15:02.386Z

**File Size:** 541.26 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 303

**Title:** Optimal scheme for distributed quantum metrology

**Collection:** TEST

---

## Extracted Text Content

Optimal scheme for distributed quantum metrology
Zhiyao Hu,1, ∗ Allen Zang,1 Jianwei Wang,2 Tian Zhong,1, † Haidong Yuan,3, ‡ Liang Jiang,1, § and Zain H. Saleem4, ¶
1Pritzker School of Molecular Engineering, The University of Chicago, Chicago, Illinois, USA 2Department of Physics, University of Chicago, Chicago, Illinois, USA 3Department of Mechanical and Automation Engineering, The Chinese University of Hong Kong, Shatin, Hong Kong 4Mathematics and Computer Science Division, Argonne National Laboratory, Lemont, IL, USA
Optimal strategies for local quantum metrology—including the preparation of optimal probe states, implementation of optimal control and measurement strategies, are well established. However, for distributed quantum metrology, where the goal is to estimate global properties of multiple spatially distributed parameters, the optimal scheme—particularly the role of optimal controlremains poorly understood. In this work, we address this challenge by developing optimal schemes for distributed quantum me-
trology that characterize the ultimate precision limits in distributed systems. We derive the optimal probe state, optimal control protocols, and measurement strategies in estimating a linear combination of N independent unknown parameters coupled to d networked sensors. Crucially, we prove that the optimal control operations can be implemented locally on each sensor, eliminating the need for non-local control operations across distant nodes. This result significantly reduces the complexity of imp-
lementing optimal strategies in distributed quantum metrology. To demonstrate the power of our framework, we apply it to several key scenarios.
Introduction — Distributed quantum metrology (DQM), which seeks to measure global properties of multiple unknown parameters encoded across a network of spatially distributed sensors [1], has gained increasing attention [2–5] due to its wide applications, such as quantum radar [6, 7] and global clock synchronization [8, 9]. Recent studies have shown that global entanglement in the probe state can improve the precision for estimating a linear combination of multiple time-independent signals encoded -
across distributed nodes [10–25]. However, control operations—often critical for achieving ultimate precision—remain largely unexplored in DQM. While systematic methods for optimizing control operations exist in local estimation scenarios [26–44], extending these approaches to DQM presents unique theoretical and practical challenges. The fundamental challenge stems from the locality constraint: just as distributed sensing favors local measurements, control operations should ideally be performed lo-
cally. However, this preference significantly complicates the optimization of distributed quantum sensing protocols.
In this work, we study the optimal strategies for estimating arbitrary linear combinations of parameters encoded across a network of quantum sensors. Our analysis establishes a bound on the maximum achievable quantum Fisher information (QFI) for distributed sensing and simultaneously identifies (1) an optimal entangled probe state, (2) an efficient local control protocol, and (3) an optimal local measurement strategy. Surprisingly, while global entanglement in the initial probe state is generally -
required, we demonstrate that subsequent control and measurement operations need only be local, proving that nonlocal interventions during sensing are unnecessary. We validate the practical utility of our framework through examples that can find applications in global
clock synchronization, quantum radar, and distributed magnetic field sensing.
1
fԦ(xԦ, t)
fԦ1(xԦ, t) 2
3
54
fԦ5(xԦ, t) fԦ4(xԦ, t)
fԦ3(xԦ, t)
fԦ2(xԦ, t)
FIG. 1. A demonstration of networked quantum sensors. Here ⃗fx(⃗, t) is the external field that processes the unknown parametersx⃗ that we hope to measure, and the coupling between the external field and the i-th node can be described as Hi = ⃗f ix(⃗, t) ·σ⃗ i.
Problem formulation — We consider a distributed quantum sensing system comprising d sensor nodes, where each node i consists of a qubit coupled to a general time-dependent vector field ⃗f ix(⃗, t) = [fxix(⃗, t), f yix(⃗, t), f zix(⃗, t)]. The system’s total Hamiltonian is given by Htot = Hfree + HC , where HC represents externally tunable control operations and Hfree describes the interaction between the sensors and the external field,
Hfree =
d
X
i
⃗f ix(⃗, t) ·σ⃗ i, (1)
herex⃗ = (x 1, x2, ..., xN )T denotes the vector of unknown parameters,σ⃗ i denotes the Pauli matrices at node i. We are interested in characterizing a global properties of the parameters, specifically a linear combination θ1 =w⃗ Tx⃗ withw⃗ T = (w1, · · · , wN ).
arXiv:2509.18334v1 [quant-ph] 22 Sep 2025

 2
The variance of any unbiased estimator of θ1 is lower bounded as
δθˆ2
1 ≥ w⃗ Tw⃗
μw⃗ T Jx⃗ (T )w⃗ , (2)
which is known as the weak form of Cramer-Rao bound (CRB) [44, 45], here δθˆ12 denotes the variance, μ denotes the number of repeated measurements. Defining the quantityw⃗ T Jx⃗(T )w⃗ as the effective quantum Fisher information (QFI) Jθ1 (T ), we are interested in identifying the maximal achievable value of Jθ1 (T ). Let Utot(T ) be the unitary operator generated by Htot at time T , the generator for xj is then given by Sxj (T ) =
iU †
tot(T )∂xj Utot(T ). The entries of the QFIM Jx⃗ (T ) can then be obtained as Jxixj (T ) = 4Re(⟨Sxi (T )Sxj (T )⟩ − ⟨Sxi (T )⟩⟨Sxj (T )⟩)[30, 46–51]. For diagonal entries, this reduces to
Jxj (T ) =4⟨∆2Sxj (T )⟩, (3)
where ∆2Sxj (T ) = ⟨Sx2j (T )⟩ − ⟨Sxj (T )⟩2 is the variance of Sxj (T ). Here all expectation values, ⟨·⟩, are taken with respect to the initial probe state |ψ0⟩. Optimal scheme — We focus initially on the minimal case of N = 2 parameters and d = 2 nodes. This captures all essential features of the problem, which we later generalize to an arbitrary number of parameters. The general Hamiltonian for this setting takes the form:
H(t) = H1(x1, x2, t) ⊗ I + I ⊗ H2(x1, x2, t) + Hc(t), (4)
with H1(2)(x1, x2, t) = ⃗f 1(2)x(⃗, t) ·σ⃗ 1(2). This model captures key scenarios in DQM, including two important cases. The first scenario models independent, localized signals. Here, the parameters are encoded in distinct nodes via a Hamiltonian that decomposes as H = H1(x1, t)⊗I +I ⊗H2(x2, t), where each local Hamiltonian H1(2) depends only on its respective parameter x1(2). This corresponds to sensors interacting with separate local fields. The second scenario involves a global signal encodin-
g all parameters, where the Hamiltonian terms H1 and H2 each depend on both x1 and x2. This models a single target interacting simultaneously with the entire sensor network, a configuration highly relevant for applications like quantum-enhanced radar. Our objective is to identify the optimal scheme that achieves the highest effective QFI for estimating a global parameter θ1, defined as the linear combination
θ1 = w1x1 + w2x2. (5)
The effective QFI for θ1 is then given by (see the Supplemental Material [52] for the derivation)
Jθ1 (T ) = w2
1Jx1 (T ) + w2
2Jx2 (T ) + 2w1w2Jx1x2 (T ), (6)
which can be compactly rewritten as
Jθ1 (T ) = 4⟨∆2Sθ1 (T )⟩. (7)
where Sθ1 (T ) = w1Sx1 (T ) + w2Sx2 (T ). The problem of maximizing Jθ1 (T ) is then reduced to the task of maximizing the variance of Sθ1 (T ). To identify the optimal strategies that maximize ⟨∆2Sθ1 (T )⟩, we write the generators Sx1 (T ) and Sx2 (T ) in integral form as [30]
Sx1 (T ) =
ZT
0
U†
tot(t)∂x1 H(t)Utot(t)dt,
Sx2 (T ) =
ZT
0
U†
tot(t)∂x2 H(t)Utot(t)dt, (8)
where ∂x1(2) H(t) = ∂x1(2) H1(t)⊗I +I ⊗∂x1(2) H2(t). Combining these, the generator for θ1 can be written as
Sθ1 (T ) =
ZT
0
U†
tot(t)Vθ1 (t)Utot(t)dt (9)
where
Vθ1 (t) = V1(t) ⊗ I + I ⊗ V2(t), (10)
with
V1(t) = w1∂x1 H1 + w2∂x2 H1 :=v⃗ 1(t) ·σ⃗ ,
V2(t) = w1∂x1 H2 + w2∂x2 H2 :=v⃗ 2(t) ·σ⃗ . (11)
We now establish an upper bound for the variance of Sθ1 (T ) as
⟨∆Sθ1 (T )2⟩ ≤
(
ZT
0
(v|⃗ 1(t)| +v|⃗ 2(t)|)dt
)2
, (12)
where v|⃗ 1(t)| denotes the Euclidean length of v⃗ 1(t). The derivation of this bound proceeds in several steps. First, for any quantum observable, the variance in a state is bounded by the square of its spectral spread:
⟨∆Sθ1 (T )⟩ ≤ λSmθa1x(T ) − λSθ1
min(T ) /2, where λSmθa1x(T )
and λSθ1
min(T ) are the maximum and minimum eigenvalues of Sθ1 (T ), respectively [53]. Next, we bound these eigenvalues. Using the fact that λmax(A + B) ≤ λmax(A) + λmax(B) and λmin(A + B) ≥ λmin(A) + λmin(B) for Hermitian matrices [54], we have
λSmθa1x(T ) ≤
ZT
0
λVmθa1x(t)dt ≤
ZT
0
(v|⃗ 1(t)| +v|⃗ 2(t)|)dt,
λSθ1
min(T ) ≥
ZT
0
λVθ1
min(t)dt ≥ −
ZT
0
(v|⃗ 1(t)| +v|⃗ 2(t)|)dt.
(13)
From which we have
λSmθa1x(T ) − λSθ1
min(T ) ≤ 2
ZT
0
(v|⃗ 1(t)| +v|⃗ 2(t)|)dt. (14)

 3
This directly leads to the upper bound for the effective QFI,
Jθ1 (T ) = 4⟨∆Sθ1 (T )2⟩ ≤ 4
(
ZT
0
(v|⃗ 1(t)| +v|⃗ 2(t)|)dt
)2
.
(15)
t=0
න
0
T
V1(t)dt (no control)
V1(t) (with control)
න
0
T
V1(t)dt (with control)
ρ0
U(t)
FIG. 2. A geometry perspective of QFI and generators with two nodes. Each node consists of one qubit, and the parameters are encoded through V1(t) and V2(t). Here we focus on node-1, provided with the optimal probe states, a larger displacement R T
0 V1dt indicates a higher QFI accumulated on
this node. Here the green (red) dashed line represents the instantaneous velocity of V1 without (with) control, and the green (red) solid line represents the accumulated displacement without (with) optimal control.
Crucially, this upper bound is saturable using only local control operations. This is achieved by implementing a control Hamiltonian with the separable form:
HC (t) = HC1(t) ⊗ I + I ⊗ HC2(t). (16)
Under such local controls, the total evolution operator factorizes into a tensor product: Utot(t) = U1(t) ⊗ U2(t), where Ui(t) is the evolution operator generated by the Hamiltonian of the i-th qubit plus its local control HCi(t). This factorization allows the generator Sθ1 (T ) to be decomposed into a sum of local terms
Sθ1 (T ) = w1Sx1 (T ) + w2Sx2 (T )
=
ZT
0
U†
tot(t)[V1(t) ⊗ I + I ⊗ V2(t)]Utotdt (17)
=
ZT
0
[U †
1 (t)V1(t)U1(t) ⊗ I + I ⊗ U †
2 (t)V2(t)U2(t)]dt,
where V1(2)(t) =v⃗ 1(2) ·σ⃗ . From a geometrical perspective, the vectorsv⃗ 1(t) andv⃗ 2(t) represent instantaneous “velocities” in the generator’s evolution. The local operations U1(2)(t) provide the ability to arbitrarily rotate
the orientation of these vectors. To saturate the upper bound for the variance, the control strategy must align these effective velocities to constructively add their magnitudes. For instance, we can choose U1(t) and U2(t) to align each term along the σz axis at every time point,
U†
1 (t)V1(t)U1(t) =v|⃗ 1(t)|σz,
U†
2 (t)V2(t)U2(t) =v|⃗ 2(t)|σz.
(18)
Under this strategy, the generator simplies to
Sθ1 (T ) =
ZT
0
v|⃗ 1(t)|dt
!
σz ⊗ I + I ⊗
ZT
0
v|⃗ 2(t)|dt
!
σz .
(19)
whose eigenvalues satisfy
λSmθa1x(T ) − λSθ1
min = 2
ZT
0
(v|⃗ 1(t)| +v|⃗ 2(t)|)dt. (20)
This saturates the upper bound and achieves the maximal effective QFI. We note that the optimal control strategy is not unique: any set of local unitaries that consistently fixes the directions of U †
1 (t)V1(t)U1(t) and U †
2 (t)V2(t)U2(t) will saturate the bound. This flexibility allows for experimental adaptability. Given the optimal total evolution operator U opt
tot (t) =
U opt
1 (t) ⊗ U opt
2 (t) that saturates the bound, we can derive the corresponding control Hamiltonian HC(t) = HC1(t) ⊗ I + I ⊗ HC2. Let the time derivatives of the optimal local unitaries be governed by their respective Hamiltonians:
U ̇ opt
1 (t) = −iHopt
1 (t)U opt
1, U ̇ opt
2 (t) = −iHopt
2 (t)U opt
2 , (21)
we then have U ̇ opt
tot (t) = −i[Hopt
1 (t) ⊗ I + I ⊗
H opt
2 (t)]U opt
tot (t).
The total Hamiltonian is the sum of the free Hamiltonian Hfree and the control Hamiltonian HC (t). To achieve the desired optimal evolution, this total Hamiltonian must generate the same dynamics as Hopt
1 (t)⊗I +
I ⊗ Hopt
2 (t). Therefore, the required control Hamiltonian
is given by the difference: HC1(t) = Hopt
1 (t) − H1(t) and
HC2(t) = Hopt
2 (t) − H2(t). We note that the optimal controls can depend on the parameters. In practice, the controls are implemented with the current best estimate of the parameters, which is then refined and updated adaptively throughout the estimation procedure. For the special case of time-independent field sensing, where the system Hamiltonians Hix(⃗, t) = ⃗f ix(⃗) ·σ⃗ are independent of time, the optimal control can be simplified. In this case, the operators V1 = w1∂x1 H1+w2∂x2 H1 and V2 = w1∂x1 H2 + w2∂-
x2 H2 have fixed directions. The

 4
optimal U opt
1 and U opt
2 can be taken as the identity oper
ator with Hopt
1 = H opt
2 = 0. The optimal control Hamiltonian reduces to HC1 = −H1 and HC2 = −H2, effectively canceling the free evolution. Again, this needs to be implemented adaptively as HC1 = −H1x(⃗)ˆ and HC2 = −H2x(⃗)ˆ with the estimated values of the parameters. Further simplification happens if the free Hamiltonian H1 and H2 are not only time-independent but also satisfy [H1, V1] = [H2, V2] = 0 with V1 = w1∂x1 H1 + w2∂x2 H1 and V2 = w1∂x1 H2 + w2∂x2 H2. In this case, no control is needed since the free evolution -
operators, U1 = e−iH1t and U2 = e−iH2t, preserve the directions of V1 and V2
with U †
1 V1U1 = V1 and U †
2 V2U2 = V2.
In our control-enhanced scheme, implementing the optimal control Hamiltonian HCx(⃗, t) requires knowing the exact values ofx⃗. However, in reality, we do not know the exact values ofx⃗, so the real control that we can apply to the node is HCx(⃗,ˆt). In practice, rough estimators can first be obtained using non-optimal schemes; for example, one may employ separable probe states at each node to produce straightforward but suboptimal estimates of the parameters. This framework can be readily generali-
zed to estimating N parameters with d nodes, where the k-th node contains nk qubits. In this case, the free Hamiltonian
becomes Hfree = Pd
k=1
Pnk
i=1 ⃗f kx(⃗, t) ·σ⃗ ki, withσ⃗ ki denoting the Pauli operators for the i-th qubit at the k-th node. In the supplementary material [52], we show that the precision bound in this case is given by
δθˆ2
1 ≥ w⃗ Tw⃗
4
Pd
k=1
Pnk i=1
RT
0 v|⃗ ki(t)| dt
2 , (22)
where Vki(t) = PN
j=1 wj ∂xj Hki :=v⃗ ki(t) ·σ⃗ with H ki =
⃗f kx(⃗, t) ·σ⃗ ki. Notably, in this case the optimal control strategy can be implemented not only locally on each node, but also locally on each individual qubit within a node, further simplifying experimental requirements. We also show that the GHZ state is the optimal probe state, furthermore, the optimal measurement that achieves the bound can be implemented locally on each qubit. Applications — To demonstrate the optimal scheme, we apply it to several practical applications including global c-
lock synchronization, quantum radar, and frequency estimation. We first consider the synchronization of two clocks, where the dynamics can be described as:
Hfree = Ω1σz ⊗ I + I ⊗ Ω2σz. (23)
and we are interested in estimating the difference of the
two frequencies Ω1 − Ω2. This corresponds to w1
w2
=
1
−1 . In this case, H1 = Ω1σz, H2 = Ω2σz, V1 =
w1∂Ω1 H1 + w2∂Ω2 H1 = σz, V2 = w1∂Ω1 H2 + w2∂Ω2 H2 = −σz. These operators are all time-independent and they satisfy [H1, V1] = [H2, V2] = 0. No controls are thus needed in this case. The maximal QFI can be obtained from Eq.(15) as
Jθ1 (T ) = 4
(
ZT
0
(|1| + |−1|) dt
)2
= 16T 2. (24)
This can be achieved by preparing the probe state as
|01⟩−|10⟩
√2 , which gives the highest precision δθˆ12 ≥ 1
8T 2 .
For comparison, an estimator for θ1 can also be obtained from a separable strategy, where Ω1 and Ω2 are individually estimated using a single qubit at each node and θ1 is subsequently obtained by computing their difference. In the separable strategy, the highest achievable precision is bounded by δθˆ12 ≥ 1
4T 2 . This is a factor of two worse than that achievable by the distributed strategy employing entangled states, consistent with previous results showing that global entanglement in the probe state provides an O(d) precision enhancement in phase estimation [10, 12, 13].
φ1 φ2
d
Sensor 1 Sensor 2
Unknown object
π − φ1 − φ2
FIG. 3. A schematic illustration of the quantum radar principle in our setting. The goal is to determine the position of an unknown object by detecting the angle of its emitted signal at two spatially separated sensors. By adjusting the distance d between the sensors, the relative angles φ1 and φ2 can be used to infer the object’s location. Specifically, we extract the geometric information by measuring the angle π − φ1 − φ2, which is equivalent to estimating the linear combination θ = φ1 +φ2.
We next consider the estimation of a linear combination of φ1 and φ2 encoded in the Hamiltonian
Hfree = (sin φ1σx+cos φ1σz)⊗I +I ⊗(sin φ2σx+cos φ2σz). (25) This can arise from detecting the position of an unknown object, as depicted in Fig.3, where θ1 = φ1 + φ2 is the parameter of interest with w1 = w2 = 1
2 . In this case, we have H1 = sin φ1σx + cos φ1σz, H2 = sin φ2σx + cos φ2σz, V1 = w1∂φ1 H1 + w2∂φ2 H1 = (cos φ1σx − sin φ1σz), V2 = w1∂φ1 H2 + w2∂φ2 H2 = (cos φ2σx − sin φ2σz). They are time-independent but [H1(2), V1(2)] ̸= 0. The optimal control can then be taken as HC1 = −H1 and HC2 =

 5
−H2. The maximal effective QFI for θ1 can be obtained from Eq.(15) as
Jθ1 (T ) = 4
(
ZT
0
(|1| + |1|) dt
)2
= 16T 2. (26)
This result can be compared to the maximum achievable QFI in the uncontrolled case, which is given by Jθ1 (T ) = 16 sin2(T ) [55]. The controlled scheme’s performance, scaling as T 2, stands in stark contrast to the oscillatory, bounded behavior of the uncontrolled case. This significant improvement highlights the critical role of control in enhancing distributed quantum metrology protocols. As a final example, we consider two distributed timedependent fields encoded in the Hamiltonian
Hfree = sin Ω1t σz ⊗ I + I ⊗ sin Ω2t σz, (27)
where the parameter of interest is the sum of two frequencies θ1 = Ω1 + Ω2, corresponding to w1 = w2 = 1. In this case, we have H1 = sin Ω1tσz, H2 = sin Ω2tσz, V1(t) = −t sin Ω1tσz, V2(t) = −t sin Ω2tσz. The optimal control is always rotating V1(t) and V2(t) to a fixed direction, for example, along the direction of −σz. This can be achieved by applying π pulses along the x-axis on the node 1 whenever −t sin Ω1t = 0 and π pulses along the x-axis on the node 2 whenever −t sin Ω2t = 0. The maximal ef-
fective QFI is
Jθ1 (T ) = 4
(
ZT
0
(|−t sin Ω1t| + |−t sin Ω2t|) dt
)2
∝ T4,
(28)
which reaches the so-called “Super-Heisenberg” O(T 4) [28, 56]. While for comparison, the maximum achievable QFI without controls is
Jθ1 (T ) = 2
h
RT
0 (t sin Ω1t + t sin Ω2t)dt
i2
, a value
significantly lower than its controlled counterpart. Summary and outlook — In this work, we develop a comprehensive framework for designing optimal quantum sensing protocols to estimate a global parameter within a distributed sensor network. We derive a saturable upper bound for the effective QFI and provide systematic control strategies to achieve it. Our analysis employs qubits as sensors at each node; a natural extension would be to generalize this to higherdimensional quantum sensors. A furthe-
r critical extension involves generalizing the framework to multiparameter estimation, where the maximal QFI for an individual parameter no longer solely determines the overall estimation precision. The intricate interplay between all parameters must be accounted for [57–60]. Another crucial direction for future work is to incorporate the effects of realistic noise. While we have established that the global GHZ state is the optimal probe in
the noiseless setting considered here, the optimal probe choice is known to change dramatically under decoherence. For instance, many-body states such as Dicke states have demonstrated enhanced robustness against specific noise models [61–65]. Exploring their potential as noise-resilient probes in distributed sensing thus constitutes a highly promising avenue for future research.
Acknowledgments — Z.H. acknowledges Shilin Wang and Linmu Qiao for the helpful discussions. We acknowledge support from the ARO(W911NF-23-1-0077), ARO MURI (W911NF-21-1-0325), AFOSR MURI (FA955021-1-0209, FA9550-23-1-0338), DARPA (HR0011-24-90359, HR0011-24-9-0361), NSF (ERC-1941583, OMA2137642, OSI-2326767, CCF-2312755, OSI-2426975), Packard Foundation (2020-71479), the Marshall and Arlene Bennett Family Research Program and the Quantised 2.0, the Innovation Program for Quantum Science and Techno-
logy (2023ZD0300600), the Guangdong Provincial Quantum Science Strategic Initiative (GDZX2303007), the Research Grants Council of Hong Kong (14309223, 14309624, 14309022). This material is based upon work supported by the U.S. Department of Energy, Office of Science, National Quantum Information Science Research Centers and Advanced Scientific Computing Research (ASCR) program under contract number DE-AC02-06CH11357 as part of the InterQnet quantum networking project.
The submitted manuscript has been created by UChicago Argonne, LLC, Operator of Argonne National Laboratory (“Argonne”). Argonne, a U.S. Department of Energy Office of Science laboratory, is operated under Contract No. DE-AC02-06CH11357. The U.S. Government retains for itself, and others acting on its behalf, a paid-up nonexclusive, irrevocable worldwide license in said article to reproduce, prepare derivative works, distribute copies to the public, and perform publicly and display publicly, by or-
 on behalf of the Government. The Department of Energy will provide public access to these results of federally sponsored research in accordance with the DOE Public Access Plan. http://energy.gov/downloads/doe-public-access-plan.
∗ zhiyaohu.phys@gmail.com † tzh@uchicago.edu ‡ hdyuan@mae.cuhk.edu.hk § liang.jiang@uchicago.edu ¶ zsaleem@anl.gov [1] Z. Zhang and Q. Zhuang, Distributed quantum sensing, Quantum Science and Technology 6, 043001 (2021). [2] Q. Zhuang, Z. Zhang, and J. H. Shapiro, Distributed quantum sensing using continuous-variable multipartite entanglement, Physical Review A 97, 032329 (2018). [3] X. Guo, C. R. Breum, J. Borregaard, S. Izumi, M. V. Larsen, T. Gehring, M. Christandl, J. S. NeergaardNielsen, and -
U. L. Andersen, Distributed quantum sensing in a continuous-variable entangled network, Nature

 6
Physics 16, 281 (2020). [4] L.-Z. Liu, Y.-Z. Zhang, Z.-D. Li, R. Zhang, X.-F. Yin, Y.-Y. Fei, L. Li, N.-L. Liu, F. Xu, Y.-A. Chen, et al., Distributed quantum phase estimation with entangled photons, Nature photonics 15, 137 (2021). [5] B. K. Malia, Y. Wu, J. Martı ́nez-Rinco ́n, and M. A. Kasevich, Distributed quantum sensing with mode-entangled spin-squeezed atomic states, Nature 612, 661 (2022). [6] L. Maccone and C. Ren, Quantum radar, Physical Review Letters 124, 200503 (2020). [7] R. Assouly-
, R. Dassonneville, T. Peronnin, A. Bienfait, and B. Huard, Quantum advantage in microwave quantum radar, Nature Physics 19, 1418 (2023). [8] V. Giovannetti, S. Lloyd, and L. Maccone, Quantumenhanced positioning and clock synchronization, Nature 412, 417 (2001). [9] P. Komar, E. M. Kessler, M. Bishof, L. Jiang, A. S. Sørensen, J. Ye, and M. D. Lukin, A quantum network of clocks, Nature Physics 10, 582 (2014). [10] T. J. Proctor, P. A. Knott, and J. A. Dunningham, Multiparameter estimation in netwo-
rked quantum sensors, Physical review letters 120, 080501 (2018). [11] Z. Eldredge, M. Foss-Feig, J. A. Gross, S. L. Rolston, and A. V. Gorshkov, Optimal and secure measurement protocols for quantum sensor networks, Physical Review A 97, 042337 (2018). [12] W. Ge, K. Jacobs, Z. Eldredge, A. V. Gorshkov, and M. Foss-Feig, Distributed quantum metrology with linear networks and separable inputs, Physical review letters 121, 043604 (2018). [13] K. Qian, Z. Eldredge, W. Ge, G. Pagano, C. Monroe, J. V. -
Porto, and A. V. Gorshkov, Heisenberg-scaling measurement protocol for analytic functions with quantum sensor networks, Physical Review A 100, 042304 (2019). [14] T. Qian, J. Bringewatt, I. Boettcher, P. Bienias, and A. V. Gorshkov, Optimal measurement of field properties with quantum sensor networks, Physical Review A 103, L030601 (2021). [15] A. Ehrenberg, J. Bringewatt, and A. V. Gorshkov, Minimum-entanglement protocols for function estimation, Physical Review Research 5, 033228 (2023). [16] L.-
 Pezz`e and A. Smerzi, Distributed quantum multiparameter estimation with optimal local measurements, arXiv preprint arXiv:2405.18404 (2024). [17] A. Zang, A. Kolar, A. Gonzales, J. Chung, S. K. Gray, R. Kettimuthu, T. Zhong, and Z. H. Saleem, Quantum advantage in distributed sensing with noisy quantum networks, arXiv preprint arXiv:2409.17089 (2024). [18] C. Oh, L. Jiang, and C. Lee, Distributed quantum phase sensing for arbitrary positive and negative weights, Physical Review Research 4, 023164 -
(2022). [19] B. K. Malia, Y. Wu, J. Martı ́nez-Rinco ́n, and M. A. Kasevich, Distributed quantum sensing with mode-entangled spin-squeezed atomic states, Nature 612, 661 (2022). [20] Q. Zhuang, J. Preskill, and L. Jiang, Distributed quantum sensing enhanced by continuous-variable error correction, New Journal of Physics 22, 022001 (2020). [21] M. Gessner, A. Smerzi, and L. Pezze`, Multiparameter squeezing for optimal quantum enhancements in sensor networks, Nature communications 11, 3817 (2020). [-
22] X. Guo, C. R. Breum, J. Borregaard, S. Izumi, M. V. Larsen, T. Gehring, M. Christandl, J. S. NeergaardNielsen, and U. L. Andersen, Distributed quantum sensing in a continuous-variable entangled network, Nature
Physics 16, 281 (2020). [23] Y. Xia, W. Li, W. Clark, D. Hart, Q. Zhuang, and Z. Zhang, Demonstration of a reconfigurable entangled radio-frequency photonic sensor network, Physical Review Letters 124, 150502 (2020). [24] L.-Z. Liu, Y.-Z. Zhang, Z.-D. Li, R. Zhang, X.-F. Yin, Y.-Y. Fei, L. Li, N.-L. Liu, F. Xu, Y.-A. Chen, et al., Distributed quantum phase estimation with entangled photons, Nature photonics 15, 137 (2021). [25] S.-R. Zhao, Y.-Z. Zhang, W.-Z. Liu, J.-Y. Guan, W. Zhang, C.-L. Li, B.-
 Bai, M.-H. Li, Y. Liu, L. You, et al., Field demonstration of distributed quantum sensing without post-selection, Physical Review X 11, 031009 (2021). [26] V. Giovannetti, S. Lloyd, and L. Maccone, Advances in quantum metrology, Nature photonics 5, 222 (2011). [27] W. Du ̈r, M. Skotiniotis, F. Froewis, and B. Kraus, Improved quantum metrology using quantum error correction, Physical Review Letters 112, 080801 (2014). [28] M. Naghiloo, A. N. Jordan, and K. W. Murch, Achieving Optimal Quantum Accel-
eration of Frequency Estimation Using Adaptive Coherent Control, Physical Review Letters 119, 180801 (2017). [29] L. Pezze`, M. A. Ciampini, N. Spagnolo, P. C. Humphreys, A. Datta, I. A. Walmsley, M. Barbieri, F. Sciarrino, and A. Smerzi, Optimal measurements for simultaneous quantum estimation of multiple phases, Physical review letters 119, 130504 (2017). [30] S. Pang and A. N. Jordan, Optimal adaptive control for quantum metrology with time-dependent Hamiltonians, Nature Communications 8, 14695-
 (2017). [31] H. Yuan and C.-H. F. Fung, Quantum parameter estimation with general dynamics, npj Quantum Information 3, 14 (2017). [32] C. L. Degen, F. Reinhard, and P. Cappellaro, Quantum sensing, Reviews of modern physics 89, 035002 (2017). [33] F. Poggiali, P. Cappellaro, and N. Fabbri, Optimal control for one-qubit quantum sensing, Physical Review X 8, 021059 (2018). [34] J. Liu and H. Yuan, Control-enhanced multiparameter quantum estimation, Physical Review A 96, 042114 (2017). [35] D. Layden-
, S. Zhou, P. Cappellaro, and L. Jiang, Ancillafree quantum error correction codes for quantum metrology, Physical review letters 122, 040502 (2019). [36] W. Go ́recki, S. Zhou, L. Jiang, and R. DemkowiczDobrzan ́ski, Optimal probes and error-correction schemes in multi-parameter quantum metrology, Quantum 4, 288 (2020). [37] E. Polino, M. Valeri, N. Spagnolo, and F. Sciarrino, Photonic quantum metrology, AVS Quantum Science 2 (2020). [38] J. Yang, S. Pang, Z. Chen, A. N. Jordan, and A. del Campo,-
 Variational Principle for Optimal Quantum Controls in Quantum Metrology, Physical Review Letters 128, 160505 (2022). [39] J. Liu, M. Zhang, H. Chen, L. Wang, and H. Yuan, Optimal scheme for quantum metrology, Advanced Quantum Technologies 5, 2100080 (2022). [40] Q. Liu, Z. Hu, H. Yuan, and Y. Yang, Fully-optimized quantum metrology: Framework, tools, and applications, Advanced Quantum Technologies 7, 2400094 (2024). [41] H. Chen, Y. Chen, J. Liu, Z. Miao, and H. Yuan, Quantum metrology enhanced b-
y leveraging informative

 7
noise with error correction, Physical Review Letters 133, 190801 (2024). [42] Z. Hu, S. Wang, L. Qiao, T. Isogawa, C. Li, Y. Yang, G. Wang, H. Yuan, and P. Cappellaro, Control incompatibility in multiparameter quantum metrology, arXiv preprint arXiv:2411.18896 (2024). [43] T. Isogawa, G. Wang, B. Li, Z. Hu, S. Nishimura, A. Kanamoto, H. Yuan, and P. Cappellaro, Entanglement-assisted multiparameter estimation with a solid-state quantum sensor, arXiv preprint arXiv:2505.14578 (2025). [44] M. Gessner-
, L. Pezz`e, and A. Smerzi, Sensitivity bounds for multiparameter quantum metrology, Physical review letters 121, 130503 (2018). [45] D.-H. Kim, S. Hong, Y.-S. Kim, Y. Kim, S.-W. Lee, R. C. Pooser, K. Oh, S.-Y. Lee, C. Lee, and H.-T. Lim, Distributed quantum sensing of multiple phases with fewer photons, Nature communications 15, 266 (2024). [46] C. Helstrom, Quantum detection and estimation theory, ser, Mathematics in Science and Engineering. New York: Academic Press 123 (1976). [47] R. A. Fisher-
, Theory of statistical estimation, in Mathematical proceedings of the Cambridge philosophical society, Vol. 22 (Cambridge University Press, 1925) pp. 700725. [48] M. G. A. Paris, Quantum estimation for quantum technology, International Journal of Quantum Information 07, 125 (2009). [49] S. L. Braunstein and C. M. Caves, Statistical distance and the geometry of quantum states, Phys. Rev. Lett. 72, 3439 (1994). [50] J. Liu, H. Yuan, X.-M. Lu, and X. Wang, Quantum fisher information matrix and multi-
parameter estimation, Journal of Physics A: Mathematical and Theoretical 53, 023001 (2020). [51] S. Pang and T. A. Brun, Quantum metrology for a general hamiltonian parameter, Physical Review A 90, 022117 (2014). [52] See the Supplemental Material. [53] V. Giovannetti, S. Lloyd, and L. Maccone, Quantum metrology, Physical review letters 96, 010401 (2006). [54] H. Weyl, Inequalities between the two kinds of eigenvalues of a linear transformation, Proceedings of the national academy of sciences 35, -
408 (1949). [55] H. Yuan and C.-H. F. Fung, Optimal feedback scheme and universal time scaling for hamiltonian parameter estimation, Physical review letters 115, 110401 (2015). [56] Z. Hou, Y. Jin, H. Chen, J.-F. Tang, C.-J. Huang, H. Yuan, G.-Y. Xiang, C.-F. Li, and G.-C. Guo, Superheisenberg and heisenberg scalings achieved simultaneously in the estimation of a rotating field, Physical Review Letters 126, 070503 (2021). [57] L. Wang, H. Chen, and H. Yuan, Tight tradeoff relation and optimal meas-
urement for multi-parameter quantum estimation, arXiv preprint arXiv:2504.09490 (2025). [58] H. Chen, L. Wang, and H. Yuan, Simultaneous measurement of multiple incompatible observables and tradeoff in multiparameter quantum estimation, npj Quantum Information 10, 98 (2024). [59] O. G ̈uhne, E. Haapasalo, T. Kraft, J.-P. Pellonpa ̈a ̈, and R. Uola, Colloquium: Incompatible measurements in quantum information science, Reviews of Modern Physics 95, 011003 (2023). [60] F. Belliardo and V. Giovannetti-
, Incompatibility in quan
tum parameter estimation, New Journal of Physics 23, 063055 (2021). [61] L. Pezze, A. Smerzi, M. K. Oberthaler, R. Schmied, and P. Treutlein, Quantum metrology with nonclassical states of atomic ensembles, Reviews of Modern Physics 90, 035005 (2018). [62] X. Wang and K. Mølmer, Pairwise entanglement in symmetric multi-qubit systems, The European Physical Journal D-Atomic, Molecular, Optical and Plasma Physics 18, 385 (2002). [63] T. Kim, O. Pfister, M. J. Holland, J. Noh, and J. L. Hall, Influence-
 of decorrelation on heisenberg-limited interferometry with quantum correlated photons, Physical Review A 57, 4004 (1998). [64] L. Pezze ́ and A. Smerzi, Ultrasensitive two-mode interferometry with single-mode number squeezing, Physical Review Letters 110, 163604 (2013). [65] Z. H. Saleem, M. Perlin, A. Shaji, and S. K. Gray, Achieving the heisenberg limit with dicke states in noisy quantum metrology, Physical Review A 109, 052615 (2024).

 8
Supplemental Material
OPTIMAL PROBE STATE
Here we show that to estimate a linear combination of N independent parameters as θ1 = PN
i=1 wixi, which are
encoded within d sensor nodes through Hfree = Pd
i=1 ⃗f ix(⃗, t) ·σ⃗ i, the optimal probe state can always be chosen as a d-qubits GHZ state. We first begin by considering 2 unknown parameters encoded within 2 sensor nodes as
Hfree(t) = H1(x1, x2, t) ⊗ I + I ⊗ H2(x1, x2, t), (29)
and we hope to find the optimal probe state that achieves the highest QFI for estimating a linear combination of unknown parameters as θ1 = w1x1 + w2x2. The QFI for θ1 is obtained as
Jθ1 (T ) =w⃗ T Jx⃗ (T )w⃗
= w1 w2
Jx1 (T ) Jx2x1 (T ) Jx1x2 (T ) Jx2 (T )
w1 w2
= w2
1Jx1 (T ) + 2w2
1w2
2Jx1x2 (T ) + w2
2Jx2 (T ) (30)
where Jx1 (T ), Jx2 (T ) are the diagonal elements and Jx1x2 (T ) is the off-diagonal element of the QFIM Jx⃗ (T ). The matrix elements are given as Jxj (T ) = 4⟨Sx2j (T )⟩ − 4⟨Sxj (T )⟩2, Jx1x2 (T ) = Jx2x1 (T ) = 4Re(⟨Sx1 (T )Sx2 (T )⟩ −
⟨Sx1 (T )⟩⟨Sx2 (T )⟩) with Sxj (T ) = iU †
tot(T )∂xj Utot(T ) being the generators for xj, j = 1, 2, and here Utot(T ) denotes the total unitary under control. Our goal is to find the proper probe state that maximize
Jθ1 (T ) = w2
1Jx1 (T ) + w2
2Jx2 (T ) + 2w1w2Jx1x2 (T ), (31)
We can rewrite Eq.31 using generators as
Jθ1 (T ) = 4 ⟨φ0| [w1Sx1 (T ) + w2Sx2 (T )]2 |φ0⟩ − 4 ⟨φ0| w1Sx1 (T ) + w2Sx2 (T ) |φ0⟩2
:= 4 ⟨φ0| Sθ1 (T )2 |φ0⟩ − 4 ⟨φ0| Sθ1 (T ) |φ0⟩2 . (32)
Now we show that the Bell state maximizes
Jθ1 (T ) = 4 ⟨φ0| Sθ1 (T )2 |φ0⟩ − 4 ⟨φ0| Sθ1 (T ) |φ0⟩2 (33)
for any Sθ1 (T ). Now we write Sθ1 (T ) in the basis of Pauli matrices as
Sθ1 (T ) :=s⃗ 1(T ) ·σ⃗ ⊗ I + I ⊗s⃗ 2(T ) ·σ⃗ , (34)
whose maximal and minimal eigenvalues are bounded by λmax = s|⃗ 1(T )| +s|⃗ 2(T )| and λmin = −s|⃗ 1(T )| −s|⃗ 2(T )| respectively. Thus
Jθ1 (T ) ≤ (λmax − λmin)2
= 4 [s|⃗ 1(T )| +s|⃗ 2(T )|]2 (35)
Now consider the Bell state |φ0⟩ = √12 (|00⟩ + |11⟩) as the probe. Without loss of generality, we can assumes⃗ 1(T ) and
s⃗ 2(T ) both point along the z-axis, i.e.,s⃗ i(T ) ∝ zˆ, since any other direction can be rotated into zˆ by a local unitary transformation to the node after the free evolution. We have
4[⟨φ0| S2
θ1 (T ) |φ0⟩ − ⟨φ0| Sθ1 (T ) |φ0⟩2] = 4 [s|⃗ 1(T )| +s|⃗ 2(T )|]2 (36)
which saturates the bound in Eq.(35), indicating that the Bell state can serve as the optimal probe state for estimating two parameters encoded within 2 sensor nodes.

 9
Next, we extend our results to estimating a global parameter θ1 as a linear combination of N independent parameters
encoded within d sensor nodes as θ1 = PN
i=1 wixi. Similarly, the effective QFI for θ1 can be obtained as
Jθ1 (T ) =
N
X
i=1
w2
i Jxi (T ) + 2
X
1≤i<j≤N
wiwj Jxixj (T ). (37)
We can rewrite Jθ1 (T ) using the generators of Sxi (T ) as
Jθ1 (T ) =
d
X
i=1
w2
i Jxi (T ) + 2
X
1≤i<j≤d
wiwj Jxixj (T )
= 4⟨(
d
X
i=1
wiSxi (T ))2⟩ − 4(
d
X
i=1
⟨wiSxi (T )⟩)2 (38)
:= 4⟨(Sθ1 (T ))2⟩ − 4(⟨Sθ1 (T )⟩)2, (39)
and we can rewrite Sθ1 (T ) in the basis of Pauli matrices as
Sθ1 (T ) :=s⃗ 1(T ) ·σ⃗ ⊗ I ⊗ I ⊗ ... ⊗ I + I ⊗s⃗ 2(T ) ·σ⃗ ⊗ I ⊗ ... ⊗ I + ... + I ⊗ I ⊗ ... ⊗s⃗ d(T ) ·σ⃗ , (40)
whose maximal and minimal eigenvalues are bounded by λmax = Pd
i=1s|⃗ i(T )| and λmin = − Pd
i=1s|⃗ i(T )|, respectively, so the maximal QFI is bounded as
Jθ1 (T ) ≤ 4
"d X
i=1
s|⃗ i(T )|
#2
. (41)
Now consider the global GHZ state |φ0⟩ = √12 (|00 . . . 0⟩ + |11 . . . 1⟩) as the probe. Similarly, under the assumption
that eachs⃗ i(T ) points along the z-axis, We have
4[⟨φ0| S2
θ1 (T ) |φ0⟩ − ⟨φ0| Sθ1 (T ) |φ0⟩2] = 4
"d X
i=1
s|⃗ i(T )|
#2
, (42)
indicating that the global GHZ state can be served as the optimal probe state in our settings. It is worth noting that the strategy presented here is just one approach to finding an optimal probe (with the aid of additional control). Other probe states may also maximize the variance of Jθ1 (T ) under specific conditions.
OPTIMAL CONTROL
Now we show that provided with the optimal probe state, applying local control is sufficient to reach the highest effective QFI. For estimating N parameters encoded with d nodes as Hfree = Pd
i=1 ⃗f ix(⃗, t) ·σ⃗ i, with only local control, we have
Utot(t) = U1(t) ⊗ U2(t) ⊗ ... ⊗ Ud(t), (43)
and the generator Sθ1 (T ) can be written as
Sθ1 (T ) =
N
X
i=1
wiSxi (T )
=
ZT
0
U†
tot(t)[V1(t) ⊗ I ⊗ ... ⊗ I + I ⊗ V2(t) ⊗ ... ⊗ I + I ⊗ ... ⊗ I ⊗ Vd(t)]Utotdt (44)
=
ZT
0
[U †
1 (t)V1(t)U1(t) ⊗ I ⊗ ... ⊗ I + I ⊗ U †
2 (t)V2(t)U2(t) ⊗ I ⊗ ... ⊗ I + I ⊗ ... ⊗ I ⊗ U †
d (t)Vd(t)Ud(t)]dt,

 10
with
Vi(t) =
N
X
j=1
wj∂xj Hi :=v⃗ i(t) ·σ⃗ . (45)
The optimal control aims to align Vd(t) to the same direction at different t (σz for example), and Ud(t) satisfies the following requirement:
U†
d (t)Vd(t)Ud(t) =v|⃗ d(t)|σz. (46)
Under the optimal control, we have
Sθ1 (T ) =
ZT
0
v|⃗ 1(t)|dt
!
σz ⊗ I ⊗ ... ⊗ I + I ⊗
ZT
0
v|⃗ 2(t)|dt
!
σz ⊗ ... ⊗ I + I ⊗ ... ⊗ I ⊗
ZT
0
v|⃗ d(t)|dt
!
σz, (47)
which leads to
δθˆ2
1 ≥ w⃗ Tw⃗
4⟨S2
θ1 (T )⟩ = w⃗ Tw⃗
4
Pd i=1
RT
0 v|⃗ i(t)|dt
2 . (48)
This framework can be readily generalized to scenarios where each node contains multiple qubit sensors. For estimating N parameters with d nodes, where the k-th node contains nk qubits, the free Hamiltonian becomes
Hfree = Pd
k=1
Pnk
i=1 ⃗f kx(⃗, t) ·σ⃗ ki, withσ⃗ ki denoting the Pauli operators for the i-th qubit at the k-th node. This is a special case of the general Hamiltonian Hfree = P
k,i ⃗f kix(⃗, t) ·σ⃗ ki where ⃗f kix(⃗, t) = ⃗f kx(⃗, t). Since our analysis has
no restriction on the functions of ⃗f kix(⃗, t), it can be directly applied to obtain the precision bound:
δθˆ2
1 ≥ w⃗ Tw⃗
4
Pd
k=1
Pnk i=1
RT
0 v|⃗ ki(t)| dt
2 , (49)
where Vki(t) = PN
j=1 wj∂xj Hki :=v⃗ ki(t) ·σ⃗ , and H ki = ⃗f kx(⃗, t) ·σ⃗ ki. Notably, the optimal control strategy that achieves the maximal effective QFI can be implemented not only locally on each node, but also locally on each individual qubit within a node, further simplifying experimental requirements.
OPTIMAL MEASUREMENT
Now we show how to find the optimal measurement and make the QCRB achievable. From the Heisenberg uncertainty relation, we have
∆Oθ1 ∆Sθ1 (T ) ≥ 1
2 |⟨[Sθ1 (T ), Oθ1 ]⟩|, (50)
where Oθ1 is the observable. The optimal observable that saturates Eq.50 should satisfy
(Sθ1 (T ) − ⟨Sθ1 (T )⟩) |φ0⟩ = iγ(Oθ1 − ⟨Oθ1 ⟩) |φ0⟩ , γ ∈ R (51)
With the optimal control forcing V1(t), V2(t), ..., VN (t) to be proportional to σz, we can rewrite the generator as
Sθ1 (T ) = s1(T ) σz ⊗ I ⊗ I ⊗ ... ⊗ I + I ⊗ s2(T ) σz ⊗ I ⊗ ... ⊗ I + ... + I ⊗ I ⊗ ... ⊗ sd(T ) · σz. (52)
With |φ0⟩ = (|00...0⟩ + |11...1⟩)/√2 as the probe, ⟨Sθ1 (T )⟩ = 0, we have
(Sθ1 (T ) − ⟨Sθ1 (T )⟩) |φ0⟩ =
d
X
i
si(T )
!
|00...0⟩ − |11...1⟩
√2 , (53)
then we can choose the observable in the Heisenberg picture as Oθ1 = σx ⊗ σx ⊗ ... ⊗ σy, which satisfies
⟨Oθ1 ⟩ = 0 (54)

 11
and
Oθ1 |φ0⟩ = −i |00...0⟩ − |11...1⟩
√2 , (55)
and we can choose γ = − Pd
i si(T ) to make Eq.51 satisfied. This corresponds to performing local projective measurements in the σx and σy basis on each qubit individually.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:02.386Z
- **Text Length:** 39612 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
