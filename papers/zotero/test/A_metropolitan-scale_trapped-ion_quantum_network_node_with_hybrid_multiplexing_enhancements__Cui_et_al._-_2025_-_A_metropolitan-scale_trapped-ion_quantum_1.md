# PDF Document: Cui et al. - 2025 - A metropolitan-scale trapped-ion quantum network node with hybrid multiplexing enhancements.pdf

**File Path:** Cui et al. - 2025 - A metropolitan-scale trapped-ion quantum network node with hybrid multiplexing enhancements.pdf

**Processed Date:** 2026-02-10T18:17:07.538Z

**File Size:** 20241.52 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 321

**Title:** A metropolitan-scale trapped-ion quantum network node with hybrid multiplexing enhancements

**Collection:** TEST

---

## Extracted Text Content

A metropolitan-scale trapped-ion quantum network node with hybrid multiplexing enhancements
Z.-B. Cui,1 Z.-Q. Wang,1 P.-C. Lai,1 Y. Wang,2 J.-X. Shi,1 P.-Y. Liu,1 Y.-D. Sun,1 Z.-C. Tian,1 Y.-B. Liang,1 B.-X. Qi,1 Y.-Y. Huang,1 Z.-C. Zhou,1, 3 Y.-K. Wu,1, 3 Y. Xu,1, 3 L.-M. Duan,1, 3, ∗ and Y.-F. Pu1, 3, †
1Center for Quantum Information, Institute for Interdisciplinary Information Sciences, Tsinghua University, Beijing 100084, PR China 2HYQ Co., Ltd., Beijing 100176, PR China 3Hefei National Laboratory, Hefei 230088, PR China
Quantum network and quantum repeater are promising ways to scale up a quantum information system to enable various applications with unprecedented performance. As a current bottleneck of building a long-distance quantum network, the distribution rate of heralded entanglement between remote network nodes is typically much lower than the decoherence rate of each local node, which obstructs the implementation of a metropolitanscale quantum network with more than two remote nodes. A promising scheme t-
o accelerate the remote entanglement distribution is through multiplexing enhancement based on a multimode quantum network node. In this work, we experimentally realize a functional 5-ion quantum network node with two different types of qubits inside. We employ a hybrid multiplexing scheme combining the methods of multiple excitation and ion shuttling, in which maximally 44 time-bin modes are generated and sent through a long fiber to boost the entangling rate. Via this scheme, we can generate her-
alded ion-photon entanglement with a high fidelity of 96.8%/94.6%/89.8% with a success rate of 263 s−1/40 s−1/4.28 s−1, over a fiber of 3 m/1 km/12 km, respectively. In addition, the memory qubit can protect the stored quantum information from the destructive ion-photon entangling attempts via dual-type encoding and a memory coherence time of 366 ms is achieved. This coherence time has exceeded the expected entanglement generation time 234 ms over a 12 km fiber, which is realized for the first tim-
e in a metropolitan-scale quantum network node.
I. INTRODUCTION
Quantum network and quantum repeater are among the most promising ways to extend the size of a quantum system, which can enable important applications such as distributed quantum computing [1–4], long distance quantum communication [5–9] and network-enhanced quantum metrology [1012]. In a quantum network or quantum repeater protocol, one of the core tasks is distributing heralded quantum entanglement between distant nodes. So far, heralded entanglement between two quantum network nodes has been de-
monstrated experimentally over either short (lab size) or long (metropolitan size) distances [4, 13–22]. Currently quantum network has been realized with various physical systems. Among all these physical platforms, trapped atomic ion is a promising candidate. High local gate fidelity (better than 99.9% [23, 24], critical to entanglement swapping and entanglement distillation), long coherence time (∼ 1 hour [25]), and record-high rate (∼ 200 Hz [13]) and fidelity (∼ 96% [4]) between two network no-
des have been demonstrated separately in this system. Despite all these advances achieved so far, currently it is still very difficult to demonstrate a quantum repeater with three nodes or a quantum network which can utilize more than one pair of remote entanglement, when the separation between different nodes reaches metropolitan scale (∼ 10 km). A requisite for this outstanding goal is the rate of remote entanglement generation between different nodes should be higher than the memory decoherence-
 rate of each network node, as the remote entangling operation is in a probabilistic
∗ lmduan@tsinghua.edu.cn † puyf@tsinghua.edu.cn
way [5, 6]. This stringent requirement can also be interpreted as the ‘link efficiency’ η link should be larger than unity [3, 26]. Currently, η link > 1 can only be achieved in a lab-scale quantum network [26, 27]. For all the heralded entanglement between two nodes over a metropolitan-scale fiber (> 10 km), the link efficiency is still less than 0.01.
One of the most important obstacles which limits the link efficiency for a metropolitan-scale quantum network lies in the round-trip heralding time in each remote entangling attempt. For a 10 km fiber, the time cost for each entangling attempt is at least 2L/c = 100 μs (L is the fiber length and c is the light speed), which is two orders of magnitude higher than the value in a lab-scale case [4, 27]. To resolve this issue, multimode quantum repeater [7, 28] has been proposed, which is able to acce-
lerate the remote entangling operation via a multiplexing scheme. Currently, multiplexed quantum network node has been demonstrated in several different physical systems for quantum memories [15, 20, 2939]. Multiplexing-enhanced heralded atom-photon entanglement over a metropolitan-scale fiber has been demonstrated on neutral atomic ensemble system recently, and a link efficiency as high as 0.46 has been achieved [35].
In this work, we experimentally realize a highly multiplexed trapped-ion quantum network node which can distribute heralded ion-photon entanglement with a high rate and protect the quantum information stored locally. We demonstrate different multiplexing schemes for three different fiber lengths at 3 m (lab size), 1 km (campus size), and 12 km (metropolitan size). The heralded ion-photon entanglement distribution rate is improved by 3-fold, 5-fold, and 16-fold in these three cases respectively. Fo-
r the 12 km case, a hybrid scheme combing both the multiple excitation and ion shuttling is employed to boost the remote ion-photon entangling rate to 4.28 s−1, which is already higher than the rate of memory decoherence 3.69 s−1 and yields a record-high link efficiency of
arXiv:2503.13898v1 [quant-ph] 18 Mar 2025

 2
(a)
(b)
N0
N / N0
M / N0
Msat ≈ N0/2
Mmax ≈ N0
... ... ... ...
... ... ... ...
2L/c
Tovh N ∆t
×n
Attempts
Heralding Window
Overhead Computational
Task
(c)
L
c∆t
L
.
.
.
This work
Memory qubits
Commun. qubits
FIG. 1. A multiplexed quantum network. (a) The schematic of a multiplexed trapped-ion quantum network. There are two kinds of qubits in each network node. The communication qubits (green, red, blue, orange) are used for distributing heralded entanglement between different nodes, and the memory qubits (grey) are responsible for storing local quantum information or carrying out local computing tasks. Entanglement between distant nodes is heralded via interfering the photons on a beamsplitter in the -
middle point of the two nodes. The entanglement distribution task can be accelerated via different multiplexing schemes. (b) The protocol of a time-bin multiplexing scheme. Totally N temporal modes are excited in one run of entangling attempts and the corresponding heralding signal returns to the node after a round-trip travel time of 2L
c following the excitation. (c) Enhancement factor in time-bin multiplexing. The enhancement factor M starts
saturating when the duty cycle of the entangling attempts reaches 50%. Here N0 = ( 2L
c + Tovh)/∆t is the characteristic number when the
duty cycle reaches 50%.
1.16 for ion-photon entanglement over a metropolitan-scale fiber. Besides, with the dual-type encoding [40–43], the local quantum information stored in the memory qubit is not influenced by the noisy operations (such as cooling, pumping, and photon excitation) during the ion-photon entangling attempts, which is also a requisite for building a multi-node (> 2) quantum network and quantum repeater. In addition, the spontaneous emission error in the memory qubit can be detected by a mid-circuit measu-
rement, demonstrating another important capability regarding the purification and error correction needed in a future large-scale quantum network [3]. With all these achievements, this functional and highly-multiplexed trapped-ion quantum network node will contribute to the realization of a multi-node metropolitan-scale quantum network (Fig. 1(a)) in the future .
II. RESULTS
A. Enhancement factor of time-bin multiplexing
There are already several different multiplexing schemes demonstrated so far, which exploit the time-bin, frequency, orbital angular momentum (OAM), or other dimensions of a flying qubit. A multiplexing scheme effectively reduces the averaged time cost of each entangling attempt, thus accelerates the entanglement distribution process. For a time-bin multiplexing scheme shown in Fig. 1(b), the averaged time
cost for each entangling attempt can be expressed as:
Teff = ( 2L
c + Tovh + N ∆t)/N =
2L
c + Tovh
N + ∆t (1)
where 2L
c is the round-trip travel time in the long fiber (L is
the fiber length and c is the light speed in fiber), Tovh is the averaged time overhead in each round of N entangling attempts (including communication time in control system, initial cooling before each entangling round starts, sympathetic cooling in the entangling process, and all other overhead in the sequence), N is the number of modes used in each round of entangling attempts, and ∆t is the time interval between two successive modes. Usually, we have 2L
c + Tovh ≫ ∆t. In the
limit of a large N , the effective time cost for an entangling attempt Teff will be dominated by ∆t, as shown in Eq. (1). To achieve a high effective attempting rate 1/Teff in the process of remote entangling, we need to improve the number of timebin modes (N ) and select an appropriate time interval between them (∆t). It is also noteworthy that the frequency or OAM multiplexing can be considered as a special case with ∆t = 0 in this model. Based on Eq. (1), we can derive the enhancement factor of-
 multiplexing as:
M = T0/Teff (2)
where T0 = 2L
c + Tovh + ∆t is the averaged time cost of each entangling attempt with a single-mode quantum memory. Note that here we assume the success probabilities in all

 3
(c)
Initial optical pumping
D3/2
397 nm
866nm
| ↓s〉 | ↑s〉
S1/2
-1/2
+1/2
P1/2
σ+
+1/2 -1/2
=+
×N
Ion-photon entanglings Intermediate optical pumping
397nmPulse
D3/2
|0C 〉
|2C 〉
| ↓s〉 | ↑s〉
|1C 〉
P1/2
S1/2
+1/2
-1/2
-3/2
+3/2
+1/2 -1/2
-1/2
+1/2
σ+ σ−
π
...
397nmσ+
Filtered by time window
D3/2
|0C 〉
|2C 〉
| ↓s〉 | ↑s〉
|1C 〉
P1/2
S1/2
+1/2
-1/2
-3/2
+3/2
+1/2 -1/2
-1/2
+1/2
σ+ σ−
π
Push branching ratio to ‘unity’
BR
‘unity’
Commun. Qubit
PulseExcitation
D3/2
|0C 〉
|2C 〉
| ↓s〉 | ↑s〉
|1C 〉
P1/2
S1/2
+1/2
-1/2
-3/2
+3/2
+1/2 -1/2
-1/2
+1/2
+
(a)
(b)
| ↓s〉 | ↑s〉
S1/2
-1/2
+1/2
729 nm
850 & 854 nm Raman
T1 T2 T3 T3 T2 T1
| ↑C 〉
| ↓C 〉
| ↓M 〉 | ↑M 〉
D5/2 -5/2 -3/2 -1/2 +1/2 +3/2 +5/2
D3/2
|0C 〉
|2C 〉 |1C 〉
+1/2
-1/2
-3/2
+3/2
866 nm Raman
Memory Qubit Subspace
Commun. Qubit Subspace
397 nm CW
σ+
Raman Beam
866 nm Single Photon
NA 0.52
B
Electrodes for Shuttling
Memory Qubit
Shuttling
Direction Commun. Qubit
729 nm Addressing
397 nm Pulse
σ−
Electrodes for Shuttling
#4 #3 #2 #1
FIG. 2. Experimental setup, encoding scheme, and multiplexing protocols. (a) In this experiment, a 5-ion (including 4 communication qubits and 1 memory qubit) crystal is confined in a linear blade trap. The magnetic field is perpendicular to the ion chain. An 866 nm objective, aligned perpendicular to the magnetic field, collects single photons in ion photon entangling process. Four DC electrodes are employed to shuttle the ion chain for multiplexing. A 729 nm addressing beam is able to drive each-
 ion individually. Other beams such as the 397 nm σ+ optical pumping, 397 nm picosecond pulse for entangling, two sets of Raman beams, and the cooling and pumping beams (not shown in this figure) are all global. (b) Dual-type encoding of the communication qubits and memory qubits. The communication qubits are encoded in a closed three-level subspace consisting of |S1/2⟩, |D3/2⟩, and |P1/2⟩, which is able to carry out cooling, pumping, ion photon entangling, and detection without influencing the me-
mory qubit subspace |D5/2⟩. Coherent conversions between these two subspaces can be realized with 729 nm quadruple transition or a 850 nm/854 nm Raman transition. Another 866 nm/866 nm Raman transition is used for rotation in the |D3/2⟩ level [40]. (c) The multiplexing scheme of multiple excitation. We squeeze the population out of the |S1/2⟩ level by multiple ion-photon entangling pulses and this can effectively increase the branching ratio of the 866 nm transition from 6% to ‘unity’. After sever-
al excitation pulses, the population accumulated in |S1/2, m = −1/2⟩ is cleaned by an intermediate optical pumping. As the ion can also decays to |D3/2⟩ during the optical pumping, the optimal branching ratio we can achieve is 54.4%, which is close to but slightly lower than ‘unity’.
the modes are the same. We illustrate the multiplexing enhancement versus mode number in Fig. 1(c). One can see that given a fixed time interval ∆t, the multiplexing enhancement
M increases with N and saturates around N0 = 2L
c +Tovh
∆t ,
where the duty-cycle of entangling attempts reaches 50% (duration for entangling attempts N ∆t is equal to all the waiting time 2L
c + Tovh). In this case a multiplexing enhancement of
M = N0+1
2 ≈ N0
2 can be achieved. This 50% duty cycle can be regarded as an indication that ‘sufficient’ multiplexing has been employed, as further increase of N can only improve the multiplexing enhancement by a factor of less than twice.
In the realistic case, the success probabilities for different modes are usually not the same due to the inevitable inhomogeneity in the system. Therefore, the effective multiplexing enhancement of a multi-mode quantum network over a singlemode case needs a more complicated evaluation. However, the simplified model in Eq. (1) still reveals the essentials and is able to provide a quick estimation on the effectiveness of multiplexing. More detailed calculation of multiplexing enhancement with mode i-
nhomogeneity considered is described in Appendix A.
B. Two different multiplexing methods
We use the dual-type scheme to build our trapped-ion quantum network node [40–43]. Following the scheme demonstrated in [40] and Fig. 2, we can implement the cooling, pumping, state detection, and ion-photon entanglement excitation with 397 nm and 866 nm lasers in a closed three-level communication qubit subspace consisting of |S1/2⟩, |D3/2⟩, and |P1/2⟩ levels of 40Ca+. During the dissipative operations such as cooling, pumping, detection, and ion-photon entangling, the local quantum information c-
an be faithfully stored in the memory qubit subspace (|D5/2⟩ level), without being influenced due to large spectral separation over THz. The coherent conversion between these two subspaces can be implemented by a 729 nm quadruple transition or an 850 nm/854 nm Raman transition with high fidelities [40].
The photon we collect in ion-photon entanglement generation is from the |P1/2⟩ to |D3/2⟩ transition in 866 nm wavelength, which is very suitable for being converted to telecom C band with high efficiency and low noise via the difference frequency generation (DFG) in a Periodically Poled Lithium

 4
1.0
P (|1〉)
866 nm Raman time / μs
0.00
0.0 1.0
0.2
0.4
0.6
0.8
2468
2.0
φ866nm/π
Fmerge = 98.5 ± 1.1%
+π
−π
0
0.50
0.25
0.00
Fcom. = 96.8 ± 0.4% F mem. = 93.3 ± 0.9%, ε = 11.0%
P (| ↑M 〉)
φprobe | ΩRt / π
0.0
0.0
0.2
0.4
0.6
0.8
1.0
0.5 1.0 1.5 2.0
σx σy
σz ε
(a)
(b)
(c) (d) (e)
t / ns
SN R = 203 : 1
Doppler Cooling
×60
397nm
σ+
Detection window
Detection window
Optical pumping
×1
Memory
qubit R( π
2 , 0) R( π
2 , φ)
R(π, 0)
τ /2 = 50ms τ /2 = 50ms
×1
Commun.
qubit ×231
Attempts Cooling Attempts Cooling
...
×n ×n
Attempts Cooling Attempts Cooling
×238
...
×60 ×60 ×60 ×60
Cooling
×n
Disabled after heralding event
R( π
2 , φ)
Tomography
60ns
397nm Pulse excitation Interval 13ns
FIG. 3. Experimental results of multiplexing-enhanced ion photon entanglement in 3 m case. (a) Experimental protocol. We apply a spin echo sequence of τ on the memory qubit. Meanwhile, the ion-photon entangling attempts are applied to the communication qubit. In each τ /2, the blocks of entangling attempts are repeated for 238 and 231 times. In each block, series of 8 ion photon entangling attempts are repeated for 60 times. Each block is followed by a 120 μs sympathetic Doppler cooling. Each seri-
es of 8 attempts lasts for 1.5μs (including the initial optical pumping). Upon detecting a photon, all the following entanglement attempts are halted. State analysis of the communication qubit can be executed directly after the heralding event or delayed until later computational tasks with the memory qubit. The protocol restarts if no photon is detected. (b) The histogram of the photon detection events in the ion photon entangling attempts. The photon is in 866 nm. The photon detection events bet-
ween 150 ns and 250 ns are induced by the intermediate optical pumping. (c) The reconstructed density matrix of the ion-photon entanglement. The measured fidelity is 96.8 ± 0.4%. By applying real-time phase adjustment, we can yield the same ion-photon entangled state no matter which of the 8 modes is excited. (d) Merging |2C ⟩ and |1C ⟩ by a 866 nm/866 nm Raman pulse (see Fig. 2(b) and
[40]). A 2
3 π-pulse is first used to scan the phase for merging the levels, as indicated in the inset. A subsequent fine scan on time is performed at
the optimal phase. This measurement yields a merging fidelity of 98.5 ± 1.1%. (e) The memory qubit under different mutually unbiased bases (MUBs). The memory qubit is initialized to six MUBs which are also the eigenstates of σx, σy and σz. By scanning the phase or time of the 729 nm pulse, we can perform the single qubit state tomography and get the fidelity of each stored qubit. Mid-circuit detection is employed to detect the errors ε caused by the finite lifetime of |D5/2⟩ state. If a decay even-
t is detected in the mid-circuit measurement, this trial is aborted and the protocol starts over again. With a success rate of 89%, the memory qubit fidelity averaged over six MUBs reaches 93.3 ± 0.9%.
Niobate (PPLN) waveguide. However, the small branching ratio of 6% limits the efficiency of the ion-photon entanglement generation. Therefore, in the first multiplexing scheme, we demonstrate how to resolve this issue by a method of multiple excitation.
The idea is that we can reuse the ion after the unsuccessful excitation. Each time when the ion is excited to the |P1/2⟩ level, the ion decays back to the initial state |S1/2, m = +1/2⟩ with a probability of roughly 2
3 × (1 − 6%) ≈ 63%,
to |D3/2⟩ level (emitting an 866 nm photon simultaneously) with a probability of 6%, and to the other Zeeman level of
|S1/2, m = −1/2⟩ with a probability of 1
3 × (1 − 6%) ≈ 31% (see Fig. 2(c)). In addition, the ion will not be influenced by the 397 nm excitation pulse if it has already decayed to |D3/2⟩ state. Thus the ion returns to the initial state with a high probability after an unsuccessful excitation and will not be excited again after a successful excitation. Therefore, we can iteratively excite the communication ion by successive excitation pulses until all the population in the initial state has been removed. This scheme effectively improves -
the branching ratio of the 866 nm transition and we call this method ‘pushing the branching ratio to unity’ in a vivid way. During the process of multiple excitation, a time-bin train of 866 nm photonic pulses

 5
are emitted and collected (see Fig. 3), which can be employed to enhance the efficiency of ion-photon entanglement generation. After a series of four successive excitation pulses, most of the population in |S1/2, mS = +1/2⟩ is pumped to |S1/2, mS = −1/2⟩ and |D3/2⟩ level, and then the excitation probability becomes low. As most of the population is accumulated in |S1/2, mS = −1/2⟩ level, we can pump the ion back to the initial state via a 397 nm σ+ transition (see Fig. 2(c)). Note that unlike the -
initial pumping, here 866 nm laser is not applied to protect the state in |D3/2⟩. Iteratively, other series of excitation pulses and intermediate optical pumpings are applied, until most of the population are in |D3/2⟩ level. In this way, we can generate a time-bin train of 866 nm photonic pulses, which is temporally separable and can be employed to enhance the efficiency of ion-photon entanglement generation. Note that as the ion can also decay to |D3/2⟩ level in the intermediate optical pumping,-
 thus not all the ion population in |D3/2⟩ level is related to photon emission event in the ion-photon entangling attempts. However, this does not influence the quality of ion-photon entanglement as the 866 nm photon emitted in the optical pumping will not be collected. In addition, the already created ion-photon entanglement will not be influenced by the following intermediate pumping as the ion is already in |D3/2⟩ state in this case. Therefore, the intermediate pumping will not induce false her-
alding or ruin the established ion-photon entangled state. Ideally, the branching ratio of the 866 nm emission in the ion-photon entangling can be ‘improved’ to 54.4% considering the optical pumping processes, and the multiplexing enhancement factor saturates with N = 10 modes approximately. In the future, we can shelve the state in |D3/2⟩ to |D5/2⟩ and apply 866 nm laser in the intermediate optical pumping, by which we can achieve an effective branching ratio of 100%. Currently, we are limited by-
 the laser power to realize this fast shelving. The detailed analysis on this issue can be found in the Appendix B. Another scheme to realize multiplexing enhancement is ion shuttling. Through this scheme, one can successively generate temporally multiplexed ion-photon entanglements via shuttling different ions to the interaction region of the optical interface (either a high-NA objective or a high-finesse cavity [38, 39]). In our experiment, the time cost for ion shuttling is ∆t = 25 μs (see Appe-
ndix C).
C. Multiplexing-enhanced ion-photon entanglement in three different cases
In this section, we demonstrate the realization of multiplexing-enhanced ion-photon entanglement via the two multiplexing schemes mentioned above, at different fiber lengths of 3 m, 1 km, and 12 km. For the 3 m case, the round-trip travel time for heralding an ion-photon entanglement is 2L
c = 30 ns and the averaged
overhead Tovh is below 1 μs in our experiment. In this situation of small overhead and short fiber, a small ∆t is necessary to achieve a high multiplexing enhancement factor. Therefore,
P (|+〉)
P (S1/2)
τ /s
Commun.
qubit R( π
2 , 0) R( π
2 , φ)
τ
Memory
qubit R( π
2 , 0) R( π
2 , φ)
R(π, 0)
τ /2 τ /2
(a)
(b)
FIG. 4. Coherence time and crosstalk. (a) Protocol to measure the coherence time of communication qubit and memory qubit. We prepared the memory qubit in |+M ⟩ = |↓M ⟩+|↑M ⟩
√2 (Fig. 2(b)), and apply a Ramsey measurement with a spin echo in the middle. For the communication qubit, we prepare the communication qubit in
|+C ⟩ = |↓C ⟩+|↑C ⟩
√2 and apply a Ramsey measurement without spin echo. (b) Measurement results. For the communication qubit, a fitting of Gaussian decay yields a coherence time of 5.8 ± 0.1 ms (yellow triangle). The green square and the fitted curve show the fidelity decay in the memory qubit with all the noisy operations on the communication qubits applied. The extracted coherence time is 366 ± 11 ms. The blue circle is the memory qubit fidelity in the case of no operations on the communication qubits, and the fit-
ted coherence time is 368 ± 9 ms. The coherence time of memory qubit with or without operations on communication qubits cannot be faithfully distinguished considering the statistical error. The orange diamonds characterize the spontaneous decay of the memory qubit after different storage times. The fitted lifetime of |D5/2⟩ is 958 ms. The small discrepancy between our measurement result and the theoretical value (∼ 1 s) can be attributed to the leaked 854 nm laser. All the coherence time is fitted-
 by a Gaussian decay F = a e−(x/τ)2 + 1/2.
it is not suitable to use the ion-shuttling method in this case as
the 25 μs shuttling time is much higher than the total overhead
2L
c + Tovh ≈ 1 μs. Here we use a 2-ion chain (one for communication qubit and the other for memory qubit) and employ the multiple excitation method to accelerate the generation of heralded ion-photon entanglement. As the enhancement factor of this method has an upper limit of 54.4%
6% ≈ 9 (all the
population is pushed to |D3/2⟩ level), which means the enhancement factor already saturates roughly at N ≈ 9. Therefore, we need to reduce ∆t to a value as small as possible, in order to guarantee N ∆t ≈ 9∆t ≈ 2L
c + Tovh and achieve a high enhancement factor (see the analysis in Section II A). Therefore, here we use the fastest multiple excitation scheme in which we apply a series of four consecutive pulses from a mode-locked pulse laser to excite the ion. The time interval between consecutive pulses is 13 ns which is the reciprocal of the laser repetition rate at 76 MHz. After 4 consecutive pulses, we pump the ion back to the initial state by a 397 nm pulse (intermediate pumping). Another set of 4 consec-
utive pulses is applied after the intermediate optical pumping. A

 6
1.0
P (|1〉)
866 nm Raman time / μs
0.00
0.0 1.0
0.2
0.4
0.6
0.8
2468
2.0
φ866nm/π
Fmerge = 98.2 ± 1.1%
+π
−π
0
0.50
0.25
0.00
Fcom. = 94.6 ± 0.7% F mem. = 88.5 ± 1.1%, ε = 21.1%
P (| ↑M 〉)
φprobe | ΩRt / π
0.0
0.0
0.2
0.4
0.6
0.8
1.0
0.5 1.0 1.5 2.0
σx σy
σz ε
(a)
(b)
(c) (d) (e)
t / ns
×1
Memory
qubit R( π
2 , 0) R( π
2 , φ)
R(π, 0)
τ /2 = 120ms τ /2 = 120ms
×1
Commun.
qubit ×126
Attempts Cooling Attempts Cooling
...
×n ×n
Attempts Cooling Attempts Cooling
×127
...
×50 ×50 ×50 ×50
Cooling
×n
R( π
2 , φ)
30ns
200ns
×50
EIT Cooling
Doppler Cooling
39σ7+nm
39σ7+nm
39σ7+nm
39σ7+nm
Optical pumping
SN R = 62 : 1
FIG. 5. Experimental results of the multiplexing-enhanced ion photon entanglement in 1 km case. (a) Experimental protocol. Unlike the 3 m case, we increase the time interval between successive excitation pulses to around 200 ns. We apply a series of 3−3−2−2−2 excitation pulses and 4 optical pumpings in between. (b) Histogram for photon detection events. The time interval between different modes is set to 200 ns. Four intermediate optical pumpings are inserted between excitation pulses. (c) Reconst-
ructed density matrix of the ion-photon entanglement. The measured fidelity is 94.6 ± 0.7%. (d) The fidelity of the merging operation is 98.2 ± 1.1%. (e) The memory qubit measurements in six mutually unbiased bases (MUBs). The survival rate of memory qubit is about 79%, and the averaged fidelity over six MUBs is 88.5 ± 1.1% after 240 ms storage.
total number of 8 excitations are applied to generate 8 photonic time-bin modes (see Fig. 3). Upon any of the 8 time-bin modes is detected by the photon detector, our control system can identify which mode is excited via the arrival time of the photon detection signal. Followed by dynamical adjustment of the ion phase, the finally yielded ion-photon entangled state
|↑⟩|H⟩+eiφ|↓⟩|V ⟩
√2 always has the same phase φ no matter which mode is actually excited. The heralded ion-photon entanglement has a fidelity of 96.8 ± 0.4% to the closest maximally entangled state. The total time cost of the 8 excitation pulses and the intermediate pumping is about 340 ns, and the entangling rate is enhanced by a factor of M = 3.4 compared to the single-mode case. The entanglement generation rate in this case is about 263 s−1. As the time interval between the excitation pulses 13 ns is comparable-
 to the spontaneous decay time of |P1/2⟩ at 7 ns, it is possible that the ion is still in the excited state when the next excitation pulse arrives. However, this only induces a slight efficiency loss but does not influence the quality of the heralded entanglement, which is discussed in Appendix D. The memory qubit fidelity averaged over six
mutually unbiased bases (MUBs) [40, 41] is measured to be 93.3 ± 0.9% after 100 ms storage.
As a functional quantum network node should be capable of storing quantum information during the ion-photon entangling attempts, we use the dual-type scheme to encode quantum information in a memory qubit in |D5/2⟩ level for this task [40, 41, 43]. It is shown that the coherence time of the quantum information in the memory ion is 366 ± 11 ms and the crosstalk of operations on communication qubit has negligible influence on the memory qubit, as shown in Fig. 4. In this case, the memory coherence t-
ime is roughly 100 times
longer than the ion-photon entanglement generation time of
1
263s−1 = 3.8 ms.
For the 1 km case, the total overhead 2L
c + Tovh is slightly
higher than 10 μs. As the total overhead is still small compared to the 25 μs switching time of ion shuttling, we still use the multiple excitation method as in the 3 m case, and only one communication qubit is used. However, now we can set the time interval ∆t to a larger value of around 200 ns to avoid the efficiency loss in the 13 ns interval case, as the population in

 7
the excited state is negligible after 200 ns. The pulse sequence in this case is shown in Fig. 5(a), in which totally 12 excitation pulses are applied to excite ion-photon entanglement in a total duration of 3.3 μs, including the four optical pumping in between. In this case, the generation rate of heralded ionphoton entanglement is 40 s−1, enhanced by a factor of 5.1 via multiplexing. The fidelity of the yielded ion-photon entanglement after feedforward on heralding signal is measured to be 94.6 -
± 0.7%, as shown in Fig. 5(c). The memory fidelity averaged over six MUBs is 88.5 ± 1.1% after 240 ms storage.
For the case in which the fiber length is 12 km, the total overhead 2L
c + Tovh is larger than 120 μs, which is already longer than the switching time of ion shuttling. In this case, we accelerate the remote entangling process via a hybrid of both multiplexing methods mentioned in Section II B, as shown in Fig. 6. Unlike the 3 m and 1 km cases, here we increase the number of communication qubits from 1 to 4 as shown in Fig. 2(a), and convert the 866 nm photon to 1558 nm via DFG [40]. We first use the similar time-bin multiplexing method as in the 1 km case to generat-
e 11 time-bin pulses from ion 1. Then we shuttle the ion chain to move ion 2 to the focus of the objective and generate another 11 time-bin pulses from ion 2, and later ion 3 and ion 4. For the communication qubits not in the focus of the objective, their population in |D3/2⟩ level are shelved to |D5/2⟩ during the excitation of other communication qubits to avoid the crosstalk influence. After all the excitations, we shuttle the ion chain back to the initial position. The total duration of the ion-
-photon entangling attempts lasts for 87 μs with totally 44 time-bin modes emitted. The remote entanglement generation rate is 4.28 s−1 and the multiplexing enhancement factor is 15.6 compared with the single-mode case. Here we still use the arrival time of photon detection events for feedforward and yield the same ion-photon entanglement no matter which of the 44 modes is excited, and the final heralded ion-photon entanglement has a fidelity of 89.8 ± 1.1%. The dephasing time of the memory qubit -
is 366 ± 11 ms, which is already
longer than the expected entanglement generation time about
1
4.28 s−1 = 234 ms. Thus with multiplexing enhancement we can achieve a ratio of the remote entangling rate to the memory decoherence rate (also known as ‘link efficiency’ [3, 26]) of 1
234 ms / 1
366 ms × 74% = 1.16 > 1 (74% is the survival rate of memory qubit, see Fig. 6 and the analysis below), which is an important threshold for the scale-up of a quantum network and sets the record for metropolitan-scale fiber so far.
As the memory qubit is encoded in |D5/2⟩ state which has a finite lifetime of 958 ms in our experiment (see Fig. 4(b)), the qubit stored in the memory qubit will suffer from considerable spontaneous emission error when the protocol time is close to the lifetime. However, this error can be detected via a mid-circuit measurement, thus it will not influence the quality of the quantum storage but only reduces the success probability of the task [40]. In this experiment, we still use this mid-circuit m-
easurement scheme to detect and avoid the
influence of the spontaneous emission error. The spontaneous decay error happens with a probability of 11%, 21%, and 26% in the 3 m, 1 km, and 12 km cases, respectively (see Figs. 3(e), 5(e), and 6(e)).
III. DISCUSSION
In summary, we have experimentally realized a highlymultiplexed trapped-ion quantum network node, which is capable of delivering heralded ion-photon entanglement with an entangling rate higher than the memory decoherence rate over a metropolitan-scale fiber. The remarkable enhancement factor of about 16-fold is achieved via the hybrid of a novel multiple excitation scheme which is demonstrated for the first time in this work and the ion shuttling scheme. Besides, the stored quantum information in -
the memory qubit is protected from the dissipative operations on the communication qubit via dual-type encoding, and the spontaneous emission error in the memory qubit can be detected via a mid-circuit meansurement. In the future, the generation rate of the heralded ionphoton entanglement can be further improved by optimizing the efficiency of wavelength conversion from 12% in this experiment to the current best 57% [44]. Currently, the ion shuttling speed is limited by the bandwidth of the low-pa-
ss filter for the trap electrodes, and future improvement to a shuttling time of less than 3 μs is possible by replacing the filter. The entanglement generation rate can also be largely enhanced if high-finesse cavity is applied in the future [45]. With all these improvements, we believe a multi-node, metropolitanscale trapped-ion quantum network could be realized in the future based on the multiplexed quantum network node demonstrated in this work.
IV. ACKNOWLEDGEMENTS
This work is supported by Innovation Program for Quantum Science and Technology (No.2021ZD0301604, No.2021ZD0301102), the Tsinghua University Initiative Scientific Research Program and the Ministry of Education of China through its fund to the IIIS. Y.F.P. acknowledges support from the Dushi Program from Tsinghua University.
Appendix A: Multiplexing enhancement with inhomogeneous success probability
In this section we calculate the enhancement factor of a multiplexing scheme when the success probability of different time-bin modes are different. Here we assume the success probability in the single-mode case is p0, and the success probabilities of the N time-bin modes are p0, p1, . . . , pN . Then, the enhancement factor is:

 8
+π
−π
0
0.50
0.25
0.00
Fcom. = 89.8 ± 1.1% F mem. = 78.7 ± 1.4%, ε = 26.0%
P (| ↑M 〉)
φprobe | ΩRt / π
0.0
0.0
0.2
0.4
0.6
0.8
1.0
0.5 1.0 1.5 2.0
σx σy
σz ε
t / ns
SN R = 26 : 1
500
+84μs
0
+56μs
+28μs
0
20
40
0
20
40
0
20
40
0
20
40
1000 1500 2000 2500 3000
1.00
2.0
Fmerge = 96.7 ± 3.3%
P (|1〉)
0.00
0.25
0.50
0.75
φ866nm / π
0.0 0.5 1.0 1.5
#1 #2 #3 #4
(a)
(b)
(c) (d) (e)
×1
Memory
qubit R( π
2 , 0) R( π
2 , φ)
R(π, 0)
τ /2 = 150ms τ /2 = 150ms
×4
Commun.
qubit ×50
Attempts Cooling Attempts Cooling
...
×n ×n
Attempts Cooling Attempts Cooling
×50
...
×10 ×10 ×10 ×10
Cooling
×n
R( π
2 , φ)
39σ7+nm
39σ7+nm
39σ7+nm
39σ7+nm
Optical pumping
On-demand shuttling/addressing
Encoding
transfer ...
Coherent raman repumping
Shuttling S1 to S2
Shuttling S2 to S3
Commun. qubits #2 - #4 shelving
Optical pumping
Commun. qubit #2 back shelving
Shuttling S3 to S4
Commun. qubit #3 back shelving
Commun. qubit #4 back shelving
... ... ... ...
EIT Cooling
Doppler Cooling
n < 10
n = 10
×3
R(π)
Raman T3, 866nm Repumping
FIG. 6. Experimental results of the multiplexing-enhanced ion photon entanglement in 12 km case. (a) Experimental protocol. In this case, we use a hybrid multiplexing method which combines the multiple excitation scheme used in the cases of 3 m and 1 km, and the ion shuttling scheme. In one round of excitation, each of the 4 communication quibt is excited by 11 times and emits in 11 time-bin photonic modes via multiple excitation scheme, and totally 44 modes are emitted after all the 4 communicati-
on qubits are excited via ion shuttling. A 650 μs sympathetic cooling is applied after 10 rounds of excitation. In this protocol, we apply on-demand shuttling and addressing for the measurement of communication qubits and memory qubit. (b) The histogram of the 44 photonic modes. (c) The measured ion-photon entanglement fidelity is 89.8 ± 1.1%. (d) The fidelity of merging operation on the 4 communication qubits. Here we fix the pulse area to 2/3 π and scan the phase for the merging pulse. This merg-
ing transition is sensitive to magnetic field, and we can use this property to check the magnetic field inhomogeneity on the 4 communication qubits (see Appendix E for details). This measurement yields a fidelity of 96.7 ± 3.3%. (e) The memory qubit measurement in six mutually unbiased bases (MUBs). The survival rate of memory qubit is about 74%, and the averaged fidelity over six MUBs is 78.7 ± 1.4% after 300 ms storage.
M ′ = Rmul/R0 =
PN
i=0 pi 2L
c + Tovh + N ∆t / p0
2L
c + Tovh + ∆t = M
PN
i=0 pi
N /p0 (A1)
where Rmul is the success rate with multiplexing enhancement and R0 is the success rate in single-mode case. Eq. (A1)

 9
shows that, in the case that the success probability is constant (pi = p0 for each i ∈ [1, N ]), the multiplexing enhancement factor M ′ will be equal to M in Eq. (2).
Appendix B: Effective branching ratio
In this section, we discuss the effective branching ratio via the multiple excitation scheme. The entire attempting process including excitation pulses and intermediate pumpings can be modeled as a Markov decision process, in which each operation is defined by a corresponding transition matrix. The shaded region in Fig. 7 represents the region of all possible strategies. The lower bound corresponds to the strategy only containing 397 nm excitation pulses without any intermediate pumping. By applyi-
ng many successive 397 nm excitation pulses of σ− polarization, pbr,S × pcg,−1/2→−1/2/(pbr,S × pcg,−1/2→−1/2 + pbr,D) = 83.9% of the population is transferred to |S1/2, m = −1/2⟩, where pbr,i and pcg,−1/2→−1/2 are defined as the branching ratio from |P ⟩ to |i⟩ (i = S1/2 or D3/2) and square of CG coefficient from |P1/2, m = −1/2⟩ to |S1/2, m = −1/2⟩, respectively. In this case, most population of the ion will be accumulated in the |S1/2, m = −1/2⟩ state and an effective ‘branching ratio’ of 16.1% -
of the 866 nm transition can be achieved.
N
3m scheme
Lower bound
Upper bound
1km scheme
Effective branching ratio
FIG. 7. Effective branching ratio as a function of excitation number. Here N is the number of excitation pulses. The upper bound is achieved when every excitation is followed by an intermediate pumping. The 3 m/1 km case follows the schemes with 3 m/1 km fiber in the main text. The lower bound is achieved without intermediate optical pumping.
We can further improve the effective branching ratio by inserting intermediate optical pumpings between the excitation pulses (Fig. 3, 5 and 6), as the unwanted population accumulated in |S1/2, m = −1/2⟩ can be removed. As illustrated in the simulation based on master equations (Fig. 7), all our schemes eventually converge to a single maximum effective branching ratio of BRmax = 54.4% as the number of modes increases. The reason that the effective branching ratio cannot reach 100% is that the ion -
can also decay to |D3/2⟩ state during the intermediate pumping. Thus not all the ion population in the |D3/2⟩ level is related to photon emission events in the ion-photon entangling attempts. In addition, we can improve the effective branching ratio to
100% with some modifications in the intermediate pumping in the future. We can shelve the population in |D3/2⟩ level to the memory qubit subspace |D5/2⟩ before the intermediate pumping and then convert it back to |D3/2⟩ after the pumping. Via this shelving, we can shine 866 nm laser in the intermediate pumping without influencing the already established ion-photon entangled state in this process. Unlike the intermediate pumping used in this experiment which does not include any 866 nm laser, in th-
is case all the population in |D3/2⟩ are generated in the ion photon entangling process. Thus we can improve the effective branching ratio to 100% via this method. The reason for not applying this method in our current experiment is due to the low power of the Raman laser in our current setup. Under current laser power, the shelving operation is too slow which would significantly limit the speed of entangling operations if the shelving is applied. In the future, if the power of Raman laser can be -
significantly improved, we can achieve an effective branching ratio closer to unity and further improve the distribution rate of ion-photon entanglement.
Appendix C: Ion shuttling
A home-made PCB was developed to supply stable DC voltages for the DC electrodes. The board is based on a 32channel, 16-bit AD5372 chip with specially designed lowpass filters. To perform shuttling operations for N ions, we utilize ADG5409 as the analog signal multiplexer. Each ADG5409 routes one of four differential inputs to a common differential output, as selected by the 2-bit binary address lines. Each chip comprises two such channel multiplexers. Consequently, the system requires 4N analog c-
hannels of the AD5372, log2 N digital control channels and 2 log2 N ADG5409 chips for N ions multiplexing scheme. An additional 200 kHz low-pass filter is applied to the outputs D1-D4 to ensure a low noise DC voltage for the shuttling operation. A simulation (Fig. 8(b)) is performed to model the time evolution of the voltage on the blades during the shuttling sequence from state S1 (communication qubit 1 is in the focus region of the objective) to S4 (communication qubit 4 is in the focus region o-
f the objective) and then back to S1. To directly measure the shuttling time, we used the 729 nm addressed laser to shelve an communication qubit to the |D5/2⟩ state at a fixed position in the ion chain. Observing the dynamics of this shelving process allows us to roughly estimate the ion shuttling time. In the current 12 km scheme, a shuttling distance of 8.5 μm requires 20 μs as depicted in Fig. 8(c).
Appendix D: Multiplexing enhancement of heralded ion-ion entanglement
In this section, we analyze how to apply the multiplexing method demonstrated in this work to accelerate the heralded ion-ion entanglement in the future. First, we explain why the time-bin modes generated in the method of ‘pushing the branching ratio’ to unity can guarantee perfect ion-ion entanglement, especially in the 3 m case when the time interval be

 10
ADG5409 × 2Log4(N)
Analog Multiplexers
×N D1
D2
D3
D4
×N
×N
×N
AD5372
DAC
Log2(N)-bits digital control for S1-SN
D2 D1
D3 D4
S1 S2 S3 S4 S1
Shuttling time / μs
/V
Voltage
S1 to S4
S1 to S2
Shuttling time / μs
P (S1/2)
(a)
(b) (c)
FIG. 8. Setup for ion shuttling and the performance. (a) The architecture of the circuit. The circuit is composed of a DAC, low-pass filters, and analog multiplexers for shuttling. (b) Simulation of the electrodes’ voltage in the shuttling. Different colors correspond to different blade segments as shown in (a). (c) Measurement of the ion shuttling speed using a 729 nm addressing beam. Here we test the moving speed by shuttling communication qubit 1 to the position of communication qubit 2 (green -
square), as well as shuttling communication qubit 1 to communication qubit 4 (blue circle).
tween successive excitation pulses is comparable to the lifetime of the excited state. Here we assume the ion-ion entanglement is heralded via two-photon coincidence in photonic Bell state measurement (BSM), as shown in Fig. 9(a). We use N detection windows to herald the ion-ion entanglement, the entangling attempt is successful when in one of the N windows a two-photon coincidence is detected (N is the number of excitation pulses). The quality of the ion-ion entanglement is determined by the indi-
stinguishability of the photons emitted from both sides. Thus the photons from both ions should have the same frequency and temporal shape of wavepacket. The matching of frequency can be implemented by applying the same magnetic field to both setups, and the time difference of wavepacket can be aligned via compensating the optical path or adjusting the time of the excitation pulse precisely. As both of the two remote ions are in free space, the photonic wavepackets are both in a shape of exponenti-
al decay with the same characteristic time. Thus the perfect indistinguishability in photons from both sides can be guaranteed [8, 27]. Compared with the single-mode case or multiplexing with only ion shuttling [38, 39], the main difference in the multiple excitation scheme lies in that the ion is exposed to a series of successive excitation pulses. However, this is not a problem. In this method, once one of the ions decays to |D3/2⟩ state, the excitation process is effectively terminated, as the -
following excitation attempts or intermediate pumpings will never yield a two-photon coincidence because the ion in |D3/2⟩ state is already not affected by the later excitation pulses. This guarantees two results: 1) the two-photon coincidence can only happen once both ions are excited to the
......
Detection
Pulse Excitation
......
Pulse Excitation Detection
3m
1km & 12km
(a)
(b)
FIG. 9. Bell state measurement and time windows for multiplexed ion-ion entanglement. (a) The Bell state measurement setup in the ion-ion entanglement. The apparatus comprises a 50:50 beam splitter, two polarization beam splitters, and four single photon detectors. By selecting corresponding coincidence patterns, two distinct entangled states |ψ±⟩ = |01⟩ ± |10⟩ can be generated. (b) The time windows for excitation and detection in different cases.
|P1/2, m = −1/2⟩ state by the excitation pulse and decay to |D3/2, m = −3/2, −1/2, +1/2⟩ state in the same detection window (see Fig. 9(b)), in which case the ion-ion entanglement is successfully generated, and 2) once the ion-ion entanglement is heralded, the following excitation pulses will not influence the state of both ions. There exist cases that both ions decay back to |S1/2⟩ state in an excitation pulse or intermediate pumping, in this case no coincidence will be detected and the excitatio-
n process will continue.
In short, there can be 3 cases in each excitation attempt: 1) Both ions emit a 866 nm photon. In this case, an ion-ion entanglement is successfully heralded and the ion state will not be influenced by the following excitation pulses and intermediate pumpings. 2) Neither ion emits a 866 nm photon. In this case the excitation attempts will continue. 3) One ion emits a 866 nm photon but the other does not. In this case, the excitation process is effectively ended, and a two-photon coincidence will ne-
ver be detected. Therefore, the already established ion-ion entanglement will not be influenced by the following excitation pulses or intermediate pumpings, and there is no false heralding events. These two properties guarantees the quality of ion-ion entanglement. Another point worth noting is, in the two-photon BSM, the relative difference in the photon emission probabilities from each ion does not influence the quality of the heralded ion-ion entanglement, but only influences the success probab-
ility. This guarantees that the heralded ion-ion entanglement by the two-photon BSM is in perfect quality despite efficiency imbalance.
In the 3 m case, the time interval 13 ns between successive excitation pulses is comparable to the excited state lifetime

 11
MIIE ′
MIIE ′
NN
Currently achievable
3m, 1ion 1km, 1ion, Optimal strategy
12km, Optimal strategy 12 modes / ion, Optimal strategy
Future improvements
50 ions, future
50 ions, current
10 ions, future
10 ions, current
4 ions, future
4 ions, current 12km, current
12km, future 1km, future
1km, current
Currently achievable
N = 8 N = 12
N = 44
Future improvements
(a) (b)
(c) (d)
FIG. 10. Simulations of multiplexing enhancement for ion-ion entanglement. (a) and (b) illustrate the simulations of multiplexing enhancement for ion-ion entanglement at distances of 3 m and 1 km with only the multiple excitation scheme, respectively. Here N is the number of excitations. The blue curves and data points represent the currently achievable conditions as shown in this work. In the 1 km scenario, we assume the optimal strategy is employed (here we assume each excitation pulse is follow-
ed by an intermediate pumping, see Appendix B). For future improvements, the maximum enhancement achievable is represented by the green curve and data points. In this case we assume ∆t = 52 ns is used. (c) The simulation of multiplexing enhancement in 12 km case. The conditions are similar with (b) (we also assume Tovh = 50 μs). The only difference is that we assume the shuttling time is 3 μs in the curves and data points regarding future improvements. Here N is the number of total modes used (i.e-
., number of temporal modes per communication qubit × number of communication qubits). (d) The multiplexing enhancement of ion-ion entanglement with varying ion numbers. Here N is still the number of total modes. Here we fix the number of excitations in each ion to 12 but vary the number of ions, which is different from (a), (b), and (c).
7 ns. This will cause a situation that the ion is still in the excited state when the next excitation pulse arrives, and the ion will be flipped back to |S1/2⟩ state by this 6 ps 397 nm π pulse. However, this does not influence the quality of the heralded ion-ion entanglement but only influences the success probability as discussed in the above paragraphs. As the N detection windows do not overlap with the excitation pulses, in each detection window, the photons from both sides have the same wavep-
acket shape, i.e. exponential decay but not decay to zero (see Fig. 9(b)). Thus the wavepacket shapes of both photons are still identical. The only influence is that the efficiency drops a little bit as the tail of the exponential decay is cut out off the detection window, compared to the 1 km and 12 km cases. We simulate the factor of multiplexing enhancement in the ion-ion entanglement via the scheme described above (see Fig. 10). The simulation is done in the realistic case which is currently a-
chievable and in an ideal case with future improvements. It is shown that the method ‘pushing the branching ratio to unity’ can guarantee roughly a 5-fold enhancement in efficiency compared to the single-mode case. However, the efficiency is still lower than a branching ratio of 1. This can be improved by applying more ions via the shuttling method and faster shuttling speed in the future.
Appendix E: Impact of magnetic field gradient on scalability
Magnetic Inhomogeneity induced infidetlity
Distance to trap center / μm
×10-3
B
0
4
3
2
1
FIG. 11. Infidelity induced by the magnetic field inhomogeneity. Numerical simulation of the infidelity induced by magnetic field inhomogeneity in the 12 km scheme within a 1 mm range in the ion trap. The inset figure simulates the infidelity induced by magnetic field inhomogeneity after storing for 300 ms. The magnetic field inhomogeneity is simulated via finite element analysis based on the geometry of the trap.

 12
n ̄ n ̄
EIT time / μs Waiting time / ms
COM X
COM Y
COM Z
 ̇n ̄ = −n ̄/τ + Rh
τx = 113 μs
τy = 116 μs
τz = 45μs
Without shuttling Sympathetic cooling (SC)
Shuttling
S1 → S2 → S3 → S4
→ S3 → S2 → S1
One round/180us
COM X
COM Y
Shuttling round
Number of pulses
COM X
COM X after SC COM Y after SC
COM Y
After initial EIT Before SC After SC
(a) (b) (c)
(d) (e)
FIG. 12. Measurements of heating and cooling effects. (a) 1/e cooling times {τz, τx, τy} = {45 ± 1, 113 ± 8, 116 ± 6} μs for all three COM modes with average cooling limitations of {0.40 ± 0.02, 0.24 ± 0.22, 0.27 ± 0.10}. (b) The phonon number of the axial COM mode under different situations. The orange triangles are the measured phonon number with sympathetic cooling on. The blue circles are measured with ion shuttling and the green squares are measured without ion shuttling. No cooling is applie-
d in blue circles or green squares. We can see that the shuttling has negligible heating in our case, as there’s no obvious increase in the phonon number after 300 rounds of shuttling, compared to the case of no shuttling. (c) The background heating in the radial COM modes. The fitted results in (b) and (c) yield a background heating rate of {46 ± 1, 6.5 ± 0.3, 6.1 ± 0.3} s−1. (d) The heating effects induced by the ion-photon entangling attempts in COM X and COM Y modes. Here we perform different -
numbers of excitation pulses after the initial cooling, followed by a sympathetic cooling. The green and blue data points are measured before the sympathetic cooling. The yellow and orange data points are measured after the sympathetic cooling. The measurements yield a heating of {1.18(3) × 10−2, 1.76(8) × 10−2} phonons for each excitation pulse in these two radial modes. (e) The measured phonon numbers for all the 15 modes after the initial cooling, after the entangling attempts, and after the sy-
mpathetic cooling, in the protocol of the 12 km scheme.
Implementing a multiplexing scheme requires not only the efficient distribution of remote entanglement but also the capability to make all the yielded ion-photon entanglement the same for subsequent computation and processing. Thus a critical requirement is to guarantee the consistency of the ion phase when the heralding event happens on different communication qubits. In polarization-encoded schemes, communication qubits are encoded on Zeeman sublevels, making them inherently sensitive to magneti-
c field. As a result, the homogeneity of the magnetic field is very important when the ion number is high. Although individual addressing and phase feedforward control have been realized, maintaining magnetic field homogeneity over a larger spatial region can significantly reduce the complexity of scaling up the system.
Here we build a Helmholtz coil using specially arranged cobalt magnets to generate a magnetic field of 4.16(5) G. We evaluate the impact of magnetic field inhomogeneity of our system from two perspectives. Firstly, the phase accumulation in the entangling attempts should be the same for each ion in the communication qubit chain. During the ion shuttling, different communication qubits experience different magnetic fields due to the spatial separation between them. Therefore, the magnetic field inh-
omogeneity determines the phase inhomogeneity of the communication qubits after one round of ex
citation. Using finite element analysis, we simulate the infidelity induced by magnetic field inhomogeneity in the 12 km scheme within a 1 mm range over the ion trap. The result shows that, within a chain of 120 communication qubits, this infidelity is less than 5 × 10−3 (Fig. 11), which is sufficient to achieve the required mode numbers N for saturated multiplexing enhancement demonstrated in Fig. 10(d). Experimentally, we scan the phase of the 866 nm/866 nm Raman merging rotation to confirm the -
magnetic field inhomogeneity is small (see Fig. 6(d)). This result shows that the phases of the four communication qubits are within one standard deviation of their mean value, noting that the 866 nm/866 nm Raman merging operation is most sensitive to magnetic field variations among all operations in our experiment.
Secondly, for subsequent computational tasks, the phase discrepancies caused by magnetic field inhomogeneity in the memory qubit must remain sufficiently small. The inset figure of Fig. 11 simulates the infidelity induced by magnetic field inhomogeneity after storage of 300 ms, which shows infidelity less than 10−2 within a range of 40 μm.

 13
Z
X 4f
729 nm
Beam expander
NA 0.24
+1 -1
Y
f, φ
fRF , φRF
fRF , φRF
f, φ
f + fRF , φ + φRF
k
x
k
addr
k
y
On memory qubit On commun. #1 On commun. #2 On commun. #3 On commun. #4
Crosstalk error
Excitation
AOD frequency / MHz
(a)
(b) (c)
FIG. 13. Setup and performance for the 729 nm addressing system. (a) Experimental setup for the addressed beam. (b) Crosstalk on neighboring ions when the spot is focused on different ions. (c) Excitation when scanning the addressed beam across the ion chain.
Appendix F: Heating processes and cooling scheme
We confine a crystal of five ions with three COM mode frequencies of {ωz, ωx, ωy} = 2π × {0.28, 1.25, 1.09} MHz. EIT (Electromagnetically Induced Transparency) cooling is employed to cool the 4 communication qubits directly and the memory qubit sympathetically. By measuring cooling rates and investigating heating processes, we select appropriate durations and duty cycles for sympathetic cooling. Efficient cooling is critical to achieve high fidelities for operations in all communication qubits and-
 memory qubit. We measure the background heating rates for all COM modes, heating in axial COM mode induced by shuttling, and the heating induced by 397 nm excitation pulses in radial COM modes under the situation of single ion for convenience (Fig. 12). In addition, average phonon numbers in 15 motional modes before and af
ter 10 rounds of operations following the 12 km protocol (440 excitations in total) are measured, as well as after implementing sympathetic cooling.
Appendix G: Individual addressing
Fig. 13 illustrates the crossed AOD configuration. Two acousto-optic deflectors (AODs) with principal axes perpendicular to each other are driven by a microwave source. By combining the positive and negative first-order diffractions from each AOD, we achieve the ability to scan the ion chain. With an objective of NA = 0.24, we can focus the beam to a spot with a diameter of 4.18 um. The crosstalk error, defined as the ratio of the residual Rabi frequency on neighboring ions to that on the addresse-
d ion, is measured to be less than 4 × 10−3.
[1] J. I. Cirac, A. K. Ekert, S. F. Huelga, and C. Macchiavello, Distributed quantum computation over noisy channels, Phys. Rev. A 59, 4249-4254 (1999). [2] L.-M. Duan, B. B. Blinov., D. L. Moehring, and C. Monroe, Scalable trapped ion quantum computation with a probabilistic ion-photon mapping, Quantum Information and Computation 3, 165 (2004). [3] C. Monroe, R. Raussendorf, A. Ruthven, K. R. Brown, P. Maunz, L. M. Duan, and J. Kim, Large-scale modular quantum-computer architecture with atomic me-
mory and photonic interconnects, Phys. Rev. A 89, 022317 (2014). [4] D. Main, P. Drmota, D. P. Nadlinger, E.M. Ainley, A. Agrawal, B. C. Nichol, R. Srinivas, G. Araneda, and D. M. Lucas, Distributed Quantum Computing across an Optical Network Link, arXiv:2407.00835.
[5] H. J. Briegel, W. Du ̈r, J. I. Cirac, and P. Zoller, Quantum repeaters: The role of imperfect local operations in quantum communication, Phys. Rev. Lett. 81, 5932 (1998). [6] L. M. Duan, M. D. Lukin, J. I. Cirac, and P. Zoller, Longdistance quantum communication with atomic ensembles and linear optics, Nature 414, 413-418 (2001). [7] N. Sangouard, C. Simon, H. D. Riedmatten, and N. Gisin, Quantum repeaters based on atomic ensembles and linear optics, Rev. Mod. Phys. 83, 33-80 (2011). [8] D. P.-
 Nadlinger, P. Drmota, B. C. Nichol, G. Araneda, D. Main, R. Srinivas, D. M. Lucas, C. J. Ballance, K. Ivanov, E. Y. Tan, P. Sekatski, R. L. Urbanke, R. Renner, N. Sangouard, and J. D. Bancal, Experimental quantum key distribution certified by bell’s theorem, Nature 607, 682-686 (2022). [9] W. Zhang, T. van Leent, K. Redeker, R. Garthoff, R. Schwon

 14
nek, F. Fertig, S. Eppelt, W. Rosenfeld, V. Scarani, C. C. Lim, and H. Weinfurter, A device-independent quantum key distribution system for distant users, Nature 607, 687-691 (2022).
[10] P. Ko ́ma ́r, E. M. Kessler, M. Bishof, L. Jiang, A. S. Sørensen, J. Ye, and M. D. Lukin, A quantum network of clocks, Nat. Phys. 10, 582-587 (2014). [11] D. Gottesman, T. Jennewein, and S. Croke, Longer-baseline telescopes using quantum repeaters, Phys. Rev. Lett. 109 070503 (2012). [12] B. C. Nichol, R. Srinivas, D. P. Nadlinger, P. Drmota, D. Main, G. Araneda, C. J. Ballance, and D. M. Lucas, An elementary quantum network of entangled optical atomic clocks, Nature 609, 689-694 (2022). [13]-
 J. O’Reilly, G. Toh, I. Goetting, S. Saha, M. Shalaev, A. Carter, A. Risinger, A. Kalakuntla, T. Li, A. Verma, and C. Monroe, Fast photon-mediated entanglement of continuously-cooled trapped ions for quantum networking, Phys. Rev. Lett. 133, 090802 (2024). [14] S. Storz, J. Sch ̈ar, A. Kulikov, P. Magnard, P. Kurpiers, J. Lu ̈tolf, T. Walter, A. Copetudo, K. Reuer, A. Akin, J.-C. Besse, M. Gabureac, G. J. Norris, A. Rosario, F. Martin, J. Martinez, W. Amaya, M. W. Mitchell, C. Abellan, J.-D. Banc-
al, N. Sangouard, B. Royer, A. Blais, and A. Wallraff, Loophole-free Bell inequality violation with superconducting circuits, Nature 617, 265-270 (2023). [15] A. Ruskuc, C.-J. Wu, E. Green, S. L. N. Hermans, W. Pajak, J. Choi and A. Faraon, Multiplexed entanglement of multi-emitter quantum network nodes, Nature 639, 54-59 (2025).
[16] S. Daiss, S. Langenfeld, S. Welte, E. Distante, P. Thomas, L. Hartung, O. Morin, and G. Rempe, A quantum-logic gate between distant quantum-network modules, Science 371, 614617 (2021). [17] V. Krutyanskiy, M. Galli, V. Krcmarsky, S. Baier, D. A. Fioretto, Y. Pu, A. Mazloom, P. Sekatski, M. Canteri, M. Teller, J. Schupp, J. Bate, M. Meraner, N. Sangouard, B. P. Lanyon, and T. E. Northup, Entanglement of trapped-ion qubits separated by 230 meters, Phys. Rev. Lett. 130, 050803 (2023). [18] J. L.-
 Liu, X. Y. Luo, Y. Yu, C. Y. Wang, B. Wang, Y. Hu, J. Li, M. Y. Zheng, B. Yao, Z. Yan, D. Teng, J. W. Jiang, X. B. Liu, X. P. Xie, J. Zhang, Q. H. Mao, X. Jiang, Q. Zhang, X. H. Bao, and J. W. Pan, A multinode quantum network over a metropolitan area, arXiv:2309.00221. [19] T. van Leent, M. Bock, F. Fertig, R. Garthoff, S. Eppelt, Y. Zhou, P. Malik, M. Seubert, T. Bauer, W. Rosenfeld, W. Zhang, C. Becher, and H. Weinfurter, Entangling single atoms over 33km telecom fibre, Nature 607, 69-73 (2022)-
. [20] D. Lago-Rivera, S. Grandi, J. V. Rakonjac, A. Seri, and H. de Riedmatten, Telecom-heralded entanglement between multimode solid-state quantum memories, Nature 594, 37-40 (2021). [21] A. J. Stolk, K. L. van der Enden, M.-C. Slater, I. te Raa-Derckx, P. Botma, J. van Rantwijk, J. J. B. Biemond, R. A. J. Hagen, R. W. Herfst, W. D. Koek, A. J. H. Meskers, R. Vollmer, E. J. van Zwet, M. Markham, A. M. Edmonds, J. F. Geus, F. Elsen, B. Jungbluth, C. Haefner, C. Tresp, J. Stuhler, S. Ritter, and R-
. Hanson, Metropolitan-scale heralded entanglement of solidstate qubits, Sci. Adv. 10, eadp6442 (2024). [22] C. M. Knaut, A. Suleymanzade, Y. C. Wei, D. R. Assumpcao, P. J. Stas, Y. Q. Huan, B. Machielse, E. N. Knall, M. Sutula, G. Baranes, N. Sinclair, C. de-Eknamkul, D. S. Levonian, M. K. Bhaskar, H. Park, M. Lonˇcar, and M. D. Lukin, Entanglement of nanophotonic quantum memory nodes in a telecommunication network, Nature 629, 573-578 (2024). [23] M. P. da Silva, C. Ryan-Anderson, J. M. Bello-Ri-
vas, A.
Chernoguzov, J. M. Dreiling, C. Foltz, F. Frachon, J. P. Gaebler, T. M. Gatterman, L. Grans-Samuelsson, D. Hayes, N. Hewitt, J. Johansen, D. Lucchetti, M. Mills, S. A. Moses, B. Neyenhuis, A. Paz, J. Pino, P. Siegfried, J. Strabley, A. Sundaram, D. Tom, S. J. Wernli, M. Zanner, R. P. Stutz, and K. M. Svore, Demonstration of logical qubits and repeated error correction with better-than-physical error rates, arXiv:2404.02280.
[24] C. J. Ballance, T. P. Harty, N. M. Linke, M. A. Sepiol, and D. M. Lucas, High-fidelity quantum logic gates using trappedion hyperfine qubits, Phys. Rev. Lett. 117, 060504 (2016). [25] P. Wang, C. Y. Luan, M. Qiao, M. Um, J. Zhang, Y. Wang, X. Yuan, M. Gu, J. Zhang, and K. Kim, Single ion qubit with estimated coherence time exceeding one hour, Nat. Commun.12, 1-8 (2021). [26] P. C. Humphreys, N. Kalb, J. P. Morits, R. N. Schouten, R. F. Vermeulen, D. J. Twitchen, M. Markham, and R. Hanson, Det-
erministic delivery of remote entanglement on a quantum network, Nature 558, 268-273 (2018). [27] D. Hucul, I. V. Inlek, G. Vittorini, C. Crocker, S. Debnath, S. M. Clark, and C. Monroe, High-Rate, Modular Entanglement of Atomic Qubits using Photons and Phonons, Nat. Phys. 11, 37-42 (2015). [28] Collins, O. A., Jenkins, S. D., Kuzmich, A., and Kennedy, T. A. B., Multiplexed Memory-Insensitive Quantum Repeaters, Phys. Rev. Lett. 98, 060502 (2007). [29] M. Businger, L. Nicolas, T. Sanchez Mejia, A. -
Ferrier, P. Goldner, and M. Afzelius, Non-classical correlations over 1250 modes between telecom photons and 979-nm photons stored in 171Y b3+:Y2SiO5, Nat. Commun.13, 6438 (2022). [30] T. Chakraborty, A. Das, H. van Brug, O. Pietx-Casas, P. C. Wang, G. Castro do Amaral, A. L. Tchebotareva, and W. Tittel, Towards a spectrally multiplexed quantum repeater, NPJ Quantum Inf. 11, 3 (2025). [31] A. Nicolas, L. Veissier, L. Giner, E. Giacobino, D. Maxein, and J. Laurat, A quantum memory for orbital angul-
ar momentum photonic qubits, Nat. Photonics 8, 234-238 (2014). [32] S. Y. Lan, A. G. Radnaev, O. A. Collins, D. N. Matsukevich, T. A. B. Kennedy, and A. Kuzmich, A multiplexed quantum memory, Opt. Express 17, 13639-13645 (2009). [33] Y. F. Pu, N. Jiang, W. Chang, H. X. Yang, C. Li, and L. M. Duan, Experimental realization of a multiplexed quantum memory with 225 individually accessible memory cells, Nat. Commun. 8, 15359 (2017). [34] S. Zhang, J. X. Shi, Z. B. Cui, Y. Wang, Y. K. Wu, L. M. Duan, a-
nd Y. F. Pu, Realization of a programmable multi-purpose photonic quantum memory with over-thousand qubit manipulations, Phys. Rev. X 14, 021018 (2023). [35] S. Zhang, J. X. Shi, Y. B. Liang, Y. D. Sun, Y. K. Wu, L. M. Duan, and Y. F. Pu, Fast delivery of heralded atom-photon quantum correlation over 12km fiber through multiplexing enhancement, Nat. Commun. 15, 10306 (2024). [36] W. Chang, C. Li, Y. K. Wu, N. Jiang, S. Zhang, Y. F. Pu, X. Y. Chang, and L. M. Duan, Long-distance entanglement betwee-
n a multiplexed quantum memory and a telecom photon, Phys. Rev. X 9, 041033 (2019). [37] M. Parniak, M. Dabrowski, M. Mazelanik, A. Leszczy ́nski, M. Lipka, and W. Wasilewski, Wavevector multiplexed atomic quantum memory via spatially-resolved single-photon detection, Nat. Commun. 8, 2140 (2017). [38] V. Krutyanskiy, M. Canteri, M. Meraner, V. Krcmarsky, and B. P. Lanyon, Multimode Ion-Photon Entanglement over 101 Kilometers, PRX Quantum 5, 020308 (2024). [39] B. You, Q. Wu, D. Miron, W. Ke, I. Mo-
nga, E. Saglamyurek, and H. Haeffner, Temporally multiplexed ion-photon quantum

 15
interface via fast ion-chain transport, arXiv:2405.10501.
[40] P. C. Lai, Y. Wang, J. X. Shi, Z. B. Cui, Z. Q. Wang, S. Zhang, P. Y. Liu, Z. C. Tian, Y. D. Sun, X. Y. Chang, B. X. Qi, Y. Y. Huang, Z. C. Zhou, Y. K. Wu, Y. Xu, Y. F. Pu, and L. M. Duan, Realization of a Crosstalk-Free Two-Ion Node for LongDistance Quantum Networking, Phys. Rev. Lett. 134, 070801 (2025). [41] L. Feng, Y. Y. Huang, Y. K. Wu, W. X. Guo, J. Y. Ma, H. X. Yang, L. Zhang, Y. Wang, C. X. Huang, C. Zhang, L. Yao, B. X. Qi, Y. F. Pu, Z. C. Zhou, and L. M. Duan, Realization of a cros-
stalk-avoided quantum network node using dual-type qubits of the same ion species, Nat. Commun. 15, 1-7 (2024). [42] H. X. Yang, J. Y. Ma, Y. K. Wu, Y. Wang, M. M. Cao, W. X. Guo, Y. Y. Huang, L. Feng, Z. C. Zhou, and L. M. Duan, Realizing coherently convertible dual-type qubits with the same ion
species, Nat. Phys. 18, 1058-1061 (2022). [43] D. T. Allcock, W. C. Campbell, J. Chiaverini, I. L. Chuang, E. R. Hudson, I. D. Moore, A. Ransford, C. Roman, J. M. Sage, and D. J. Wineland, omg blueprint for trapped ion quantum computing with metastable states, Appl. Phys. Lett. 119, 214002 (2021). [44] T. van Leent, M. Bock, R. Garthoff, K. Redeker, W. Zhang, T. Bauer, W. Rosenfeld, C. Becher, and H. Weinfurter, LongDistance Distribution of Atom-Photon Entanglement at Telecom Wavelength, Phys. Rev-
. Lett. 124, 010510 (2020). [45] H. G. Barros, A. Stute, T. E. Northup, C. Russo, P. O. Schmidt, and R. Blatt, Deterministic single-photon source from a single ion, New J. Phys. 11, 103004 (2009).

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:07.538Z
- **Text Length:** 68298 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
