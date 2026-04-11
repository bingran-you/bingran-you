# PDF Document: Afif et al. - 2025 - Joint Satellite Power Consumption and Handover Optimization for LEO Constellations.pdf

**File Path:** Afif et al. - 2025 - Joint Satellite Power Consumption and Handover Optimization for LEO Constellations.pdf

**Processed Date:** 2026-02-10T18:15:19.744Z

**File Size:** 1163.76 KB

**Total Pages:** 6

**Extracted Pages:** 6

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3346

**Title:** Joint Satellite Power Consumption and Handover Optimization for LEO Constellations

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Joint Satellite Power Consumption and Handover Optimization
for LEO Constellations
Yassine Afif∗‡, Mohammed Almekhlafi∗, Antoine Lesage-Landry∗‡ and Gunes Karabulut Kurt∗ ∗Department of Electrical Engineering, Polytechnique Montr ́eal & Poly-Grames Research Centre, QC, Canada ‡Mila & GERAD, Montr ́eal, QC, Canada Emails: {yassine.afif, mohammed.al-mekhlafi, antoine.lesage-landry, gunes.kurt}@polymtl.ca
Abstract—In satellite constellation-based communication systems, continuous user coverage requires frequent handoffs due to the dynamic topology induced by the Low Earth Orbit (LEO) satellites. Each handoff between a satellite and ground users introduces additional signaling and power consumption, which can become a significant burden as the size of the constellation continues to increase. This work focuses on the optimization of the total transmission rate in a LEO-to-user system, by jointly cons-
idering the total transmitted power, user-satellite associations, and power consumption, the latter being handled through a penalty on handoff events. We consider a system where LEO satellites serve users located in remote areas with no terrestrial connectivity, and formulate the power allocation problem as a mixed-integer concave linear program (MICP) subject to power and association constraints. Our approach can be solved with off-the-shelf solvers and is benchmarked against a naive baseline whe-
re users associate to their closest visible satellite. Extensive Monte Carlo simulations demonstrate the effectiveness of the proposed method in controlling the handoff frequency while maintaining high user throughput. These performance gains highlight the effectiveness of our handover-aware optimization strategy, which ensures that user rates improve significantly, by about 40%, without incurring a disproportionate rise in the handoff frequency.
Keywords—Low Earth orbit, handover management, nonterrestrial networks.
I. INTRODUCTION
T
HE evolution of wireless communication systems toward 6G is expected to bring unprecedented levels of connectivity, bandwidth, and responsiveness [1]. To enable global coverage and ultra-reliable low-latency communication (URLLC), described in [2], the 3rd Generation Partnership Project (3GPP) has formally included non-terrestrial networks (NTNs) as a key component of its Release 17 [3]. In this context, low Earth orbit (LEO) satellite constellations play a crucial role in providing backhaul and d-
irect access services to mobile and fixed users worldwide [4]. This technology is particularly valuable in remote, rural, and underserved regions where the deployment of terrestrial infrastructure is impractical or economically unfeasible. As such, LEO satellite technology has been increasingly proposed to address the digital divide and mitigate access inequality [5].
This work was supported in part by Fonds de recherche du Que ́bec secteur Nature et technologies (FQRNT) and the Natural Sciences and in part by Engineering Research Council (NSERC) of Canada Alliance grant ALLRP 579869-22 (”Artificial Intelligence Enabled Harmonious Wireless Coexistence for 3D Networks (3D-HARMONY)”).
Fig. 1: User handovers in a LEO satellite network: moving satellites periodically trigger user reallocation to maintain connectivity.
Due to their low orbital altitude, ranging typically around 450–2000 km, LEO satellites exhibit high relative velocities with respect to ground users [6]. As a result, any user equipment (UE) must undergo frequent handover events, switching between satellite beams or even between satellites to maintain service continuity [7]. The term user equipment refers to any device that connects to the wireless network, such as mobile phones, satellite terminals, or Internet of Things (IoT) sensors deployed i-
n the field. Each handover introduces signaling overhead, increased latency, and additional power consumption, the latter of which is especially critical in resource-constrained systems. Therefore, minimizing unnecessary handoffs is essential to preserve system efficiency and user quality of service. A summary of key existing approaches in the literature is provided in Table I, highlighting the differences in handover strategies, optimization formulations, and modelling assumptions compared to our-
 work. This is particularly challenging in dense constellations, where the handoff rate can reach up to multiple events per minute for each user in worst-case scenarios [12]–[14]. A metric used to quantify this behavior is the effective frequency of change (EFC), which measures how
arXiv:2511.19745v1 [cs.IT] 24 Nov 2025

TABLE I: Related Work in LEO Handover Optimization
Aspect [8] [9] [10] This Work
Handoff strategy Closest / visibility / CINR rules
Antenna gain-based handover
Uplink assignment heuristics
Joint optimization of power and handover
Optimization method Simulation-based evaluation
Antenna gain heuristics
Heuristic resource allocation
Slot-by-slot mixedinteger convex
Channel model Path loss + visibility zone
Path loss + antenna pattern
Path loss + uplink constraints
Rician fading + path loss + elevation angle
Satellite positions Simulated geometry (MATLAB)
3GPP NTN model Random mobility in 3D space
Real-time Skyfield TLE data [11]
often user-satellite associations are updated over time. A high EFC indicates increased signaling overhead and instability in user connections, further motivating the need for mobilityaware resource allocation strategies. To address the aforementioned challenges, various handover and resource management strategies have been proposed in the literature [8]–[10], [15]–[17]. Reference [8] analyzed handover strategies in emerging LEO, medium Earth orbit (MEO), and highly elliptical Orbit (HEO) satellit-
e networks, evaluating closest-satellite, maximum visibility, and carrier to interference plus noise ratio (CINR)-based approaches. Their study highlighted key trade-offs between handover rates, spectral efficiency, and propagation delays across different constellation types. Howerver, their work does not consider power consumption or beam-level constraints. The authors of [9] propose antenna gain-based handover heuristics for 5G LEO networks, aiming to reduce control signaling overhead in highly -
mobile NTN environments. In [10], the authors studied LEO-to-user assignment and resource allocation with the goal of minimizing uplink power. While their approach incorporated realistic channel models and power constraints, handover dynamics and the impact of frequent beam switching on system performance is not considered. Similarly, [15] applies multi-objective reinforcement learning (RL) to optimize handovers in multi-beam LEO networks, achieving adaptive policies that balance user throughput a-
nd mobility. While [8] focuses on optimizing user-satellite association and beamforming to improve handover performance and sum rate in ultradense LEO networks, their model does not explicitly account for users in remote areas lacking terrestrial connectivity, nor does it optimize uplink and downlink transmit power jointly during handover events. Other works address handover strategies from different perspectives. Reference [16] focuses on minimizing handovers in LEO constellations through the opt-
imization of user-satellite association, though they relied on simplified geometrical models. Authors in [17] investigate massive multiple input multiple output (MIMO) techniques in LEO systems, showing the potential of advanced beamforming to enhance user coverage and mitigate frequent handovers. While these studies provide valuable insights into handover strategies and resource management, the existing literature falls short of one or more of the following aspects:
• They rely on heuristic or rule-based association policies
that cannot adapt optimally to dynamic user and satellite configurations. • They focus on small-scale networks or idealized handover models, neglecting the power cost and signaling overheads inherent in large LEO constellations. • They do not jointly consider power allocation and handover minimization in a unified optimization framework.
In this paper, we address these gaps by proposing a powerefficient handover optimization framework for medium-scale LEO constellations. Our approach formulates the joint user association and power allocation as a mixed-integer concave program (MICP), i.e., a problem that is concave when binary variables are relaxed to continuous, taking into account beamlevel constraints, visibility zones, and handover penalties. We implement a slot-by-slot optimization scheme solvable with off-the-shelf solvers a-
nd compare its performance to a naive baseline that assigns each user to the closest visible satellite. Simulation results based on real Starlink data (as of January 2025) illustrates the effectiveness of our method in reducing the handover frequency while maintaining a high user throughput. Our main contributions are summarized as follows:
• We develop a scalable simulation framework for usersatellite association using real orbital data and a realistic channel model incorporating Rician fading and propagation losses. • We propose a mixed-integer concave formulation that jointly maximizes total downlink path rate and handoverinduced penalties while satisfying the minimum user throughput requirements. • We evaluate the proposed scheme through extensive Monte Carlo simulations and compare it to a baseline strategy in terms of handover -
frequency, user rate, and overall power efficiency. Our simulations demonstrate an average increase of approximately 40% in per-user downlink throughput compared to the baseline approach, while maintaining a manageable handover rate.
The remainder of this paper is organized as follows. Section II introduces the system model, formulates the joint downlink optimization problem and outlines the simulation settings with our handover strategy. Section III presents simulation results and performance evaluations. Section IV concludes the paper and outlines future research directions.

II. SYSTEM MODEL
In satellite communications, orbiting satellites with highgain antennas establish links with UE on Earth, enabling connectivity even in remote areas [18]. User devices communicate within allocated frequency bands, while satellites maintain coverage through multiple beams. In LEOs, the rapid motion of satellites combined with the Earth’s curvature leads to frequent changes in visibility between users and satellites, making continuous service challenging. Adaptative user association and handover str-
ategies are therefore essential to ensure persistent connectivity. We consider a medium-scale satellite communication system based on a constellation of LEO satellites, each equipped with multiple beams, where each beam represents an independent channel realization rather than a distinct coverage area. The network serves a set of geographically distributed users on Earth over a sequence of discrete time slots t = 1, . . . , T, where T ∈ N is the time horizon. Due to the dynamic topology of the con-
stellation and the limited visibility of LEO satellites, user-to-beam associations vary frequently, leading to inevitable handovers.
A. System Representation and Handover Modeling
To formalize the system, let S ⊂ N denote the set of satellites, B ⊂ N the set of beams per satellite, which is the same for all satellite, and U ⊂ N the set of users. Each user can be associated with at most one beam of one satellite at each time slot. This association is captured by a binary variable It
u,s,b ∈ {0, 1}, where It
u,s,b = 1 indicates that user
u is served by beam b of satellite s at time t, and It
u,s,b = 0
otherwise. The visibility of each user is represented by another binary parameter V t
u,s,b, which depends on the relative position of the satellite and the user, as well as the elevation angle. When a satellite is above the horizon, i.e., the elevation angle exceeds a certain threshold, a link can be established, denoted as V t
u,s,b = 1; otherwise, V t
u,s,b = 0.
User handovers occur when the serving beam or satellite changes between consecutive time slots. These are detected by monitoring changes in It
u,s,b. Because excessive handovers can degrade the user experience and increase system overhead, we must actively control their frequency. This is because each handover introduces additional signaling overheads, potential service interruptions, and an increased power consumption on both the satellite and user sides, which are particularly limiting in resource-constrained environments such as LEO systems [7], [12]. Then, a handover penalty α > 0 is introduced in the optimization objective to discou-
rage unnecessary beam switches. This leads to a regularized formulation that balances rate maximization and association changes. The penalty term effectively adds a cost each time a user’s association changes from one time slot to the next, thereby promoting more persistent connections. Such regularization is particularly useful in dynamic satellite networks where optimizing only for instantaneous rate may result in excessive and inefficient handovers.
B. Channel and Path Loss Model
The wireless channel between user u and beam b of satellite s at time t is modelled as a Rician fading channel. This model reflects the presence of a strong line-of-sight (LOS) component, characteristic of satellite links, combined with weaker multipath components resulting from atmospheric scattering and reflections. The complex channel coefficient ht
u,s,b is given by:
ht
u,s,b =
rK
K + 1 hLOS +
r1
K + 1 hNLOS, (1)
where hLOS represents the deterministic LOS component, and hNLOS ∼ CN (0, 1) denotes a circularly symmetric complex Gaussian random variable with zero mean and unit variance that captures the random multipath scattering effects. The Rician K-factor quantifies the relative strength of the LOS and multipath components. The total path loss Lt
u,s,b incorporates several physical phenomena that attenuate the signal as it propagates through the atmosphere:
Lt
u,s,b = LFS,t
u,s,b + Latm,t
u,s,b + Liono,t
u,s,b + Lrain,t
u,s,b. (2)
where:
• LFS,t
u,s,b is the free-space path loss, which increases logarithmically with the distance between the user and satellite and depends on the carrier frequency. It is computed using the Friis propagation model [19]:
LFS,t
u,s,b = 32.45 + 20 log10(fc) + 20 log10(dt
u,s,b), (3)
With :
– fc being carrier frequency in MHz, – dt
u,s,b being distance between user u and satellite s, beam b at time slot t, in kilometers.
This empirical expression is a widely-used approximation of the Friis transmission formula, valid in free-space lineof-sight (LOS) conditions for frequency ranges typically
between 100 MHz and 100 GHz [19].
• Latm,t
u,s,b accounts for the atmospheric absorption, which
depends on the elevation angle θt
u,s,b and is modeled as:
Latm,t
u,s,b = Azenith
sin(θt
u,s,b) . (4)
with Azenith being the the atmospheric attenuation at
zenith (i.e., for an elevation angle of 90◦).
• Liono,t
u,s,b models ionospheric and tropospheric effects. Ionospheric effects are significant for frequencies below 6 GHz [20], while tropospheric effects dominate above 6 GHz [20]. The corresponding values were interpolated
from Table 6.6.6.2.1-1 of [3].
• Lrain,t
u,s,b represents rain attenuation. As we consider frequencies below or equal to 20 GHz, rain attenuation is negligible in a temperate climate (such as France), as in our scenario, and we assume rain attenuation is negligible and thus set to zero. So we assume Lrain,t
u,s,b = 0 [21], for all u, s, b and t.

C. SNR and Achievable Rate
After characterizing the channel and path loss, we compute the signal-to-noise ratio (SNR) for each user as:
γt
u,s,b = |ht
u,s,b|2
N0W 10Lt
u,s,b/10 , (5)
where N0 is the noise power spectral density and W is the system bandwidth. The achievable rate for user u is then given by:
Rt
u,s,b = W
log(2) log 1 + γt
u,s,bP t
u,s,b , (6)
where P t
u,s,b is the power allocated to user u at time t.
D. Downlink Optimization Problem
In the downlink scenario, the objective is to maximize the total user throughput Rtu, defined as
Rt
u=
X
s∈S
X
b∈B
Rt
u,s,b, (7)
where Rt
u,s,b is given by (6) when the link is active and zero
otherwise. At each time slot, a handover penalty αRtu−1 is introduced to discourage frequent user reassignments across beams or satellites, thus balancing instantaneous rate maximization with long-term association stability. The optimization problem can then be formulated as:
Pt : mP,aIx
X
u∈U
Rt
u − αRt−1
u 1−
X
s∈S
X
b∈B
It
u,s,bI t−1
u,s,b
!!
,
(8a)
s.t. Rt
u,s,b = W
log(2) log 1 + γt
u,s,bP t
u,s,b , ∀u ∈ U ,
s ∈ S, b ∈ B, (8b)
Rt
u ≥ γth
u , ∀u ∈ U , (8c)
Pt
u,s,b ≤ I t
u,s,bP max
s , ∀u ∈ U , s ∈ S, b ∈ B, (8d)
X
u∈U
Pt
u,s,b ≤ P max
s , ∀s ∈ S, b ∈ B, (8e)
X
u∈U
It
u,s,b ≤ 1, ∀s ∈ S, b ∈ B, (8f)
X
s∈S
X
b∈B
It
u,s,b ≤ 1, ∀u ∈ U , (8g)
Vt
u,s,b ≥ I t
u,s,b, ∀u ∈ U , s ∈ S, b ∈ B, (8h)
0 ≤ Pt
u,s,b ≤ P max
s , ∀u ∈ U , s ∈ S, b ∈ B, (8i) It
u,s,b ∈ {0, 1}, ∀u ∈ U , s ∈ S, b ∈ B, (8j)
The constraints above describe different aspects of the system operation. Constraint (8b) defines the achievable rate expression Rt
u,s,b as a function of the allocated power and channel gain, based on the Shannon capacity formula. Constraint (8c) guarantees that each user u achieves a minimum data rate γtuh at every time slot. Constraint (8d) enforces that the power allocated to a user on a given beam and satellite does not exceed the maximum power if that beam is selected. Constraint (8e) limits the total power transmitted by each satellite on any beam to remain within its maximum capacity,
(a) It−1
u,s1,bI t
u,s1,b = 0 (b) It−1
u,s1,bI t
u,s1,b = 0
(c) It−1
u,s1,bI t
u,s1,b = 0 (d) It−1
u,s1,bI t
u,s1,b = 1
Fig. 2: Illustration of the four possible cases for the product
I t−1
u,s1,bI t
u,s1,b. The binary product is used to detect handovers.
whereas Constraint (8f) ensures that each beam serves at most one user simultaneously. Moreover, Constraint (8g) restricts each user to be associated with at most one beam and satellite per time slot, and Constraint (8h) guarantees that users are only assigned to beams that are visible to them. Constraint (8i) defines the feasible domain of the power variable, ensuring their physical realizability. Finally, (8j) constraint imposes the association variables to binary values.
Next, we discuss the objective function of (8a). We provide a schematic representation of the product of It
u,s1,b and I t−1
u,s1,b in
Fig. 2, which illustrates the four possible scenarios depending on user-satellite association over two consecutive time slots. We analyze the four possible cases shown in Fig. 2. This binary product helps determine whether a handoff occurs between two consecutive time slots. When It−1
u,s1,bI t
u,s1,b = 1 (Fig. 2d), it means the user is served by the same satellite-beam pair at both times t − 1 and t. Consequently, 1 − It−1
u,s1,bI t
u,s1,b = 0,
and no handoff penalty is applied, as expected. Then, if
I t−1
u,s1,bI t
u,s1,b = 0 , then 1 − It−1
u,s1,bI t
u,s1,b = 1, and a potential handoff penalty may be triggered. However, among the three remaining cases where the product is zero, only two correspond to actual handoff events: (i) when It−1
u,s1,b = 1 and
It
u,s1,b = 0 (Fig. 2c, disconnection) and (ii) when It−1
u,s1,b = 0
and It
u,s1,b = 1 (Fig. 2b, new connection). In the fourth case
where both It−1
u,s1,b = 0 and It
u,s1,b = 0 (Fig. 2a), no service is provided at either time slot, meaning the user is and was not covered at all. Because It−1
u,s2,b = I t
u,s2,b = 1, we will have the same scenario as Fig. 2d, and so there will be no handoff there.

Algorithm 1: Handover-aware Dynamic User-Satellite Association (Downlink) Input: User set U, satellite set S, beam set B, channel coefficients ht
u,s,b, visibility mask V t
u,s,b, power
constraints P max
s
Output: User-satellite-beam associations It, allocated powers Pt, achieved rates Rt, handover statistics Initialization: Set I0 using a minimum distance approach, initialize rates R0 = 0, and set handover counters Hu = 0, ∀u ∈ U for each time slot t ∈ T do
Compute the SNR values γt
u,s,b using (5) Solve Problem (8) Update the association matrix It and compute user rates Rt Detect handovers by comparing It and It−1 as described in Section II-D
return {It, Pt, Rt, Hu}
The double summation P
s∈S
P
b∈B I t
u,s,bI t−1
u,s,b in (8a) is used to account for all possible satellite-beam pairs in the system. This ensures that the approach correctly detects whether a user remains associated with the same satellite and beam between consecutive time slots. Because each user can only be connected to a single satellite-beam pair at a given time, the sum evaluates to either 1 (no handover) or 0 (handover), allowing the penalty term to be applied consistently across all users. In sum, P is formulated as MICP, which can be s-
olved using off-the-shelf solvers to determine optimal user associations and power allocations under handover constraints.
E. Handover Strategy
To address the frequent handovers inherent in LEO satellite networks, we propose a dynamic user-satellite association strategy that jointly optimizes power allocation and user assignment while penalizing unnecessary beam switching events. This approach ensures a trade-off between maximizing instantaneous throughput and maintaining association stability over time. The algorithm for the downlink case determines optimal user associations and power allocations at each time slot based on the system mod-
el and Problem (8). The process is summarized in Algorithm 1
III. NUMERICAL RESULTS
In this section, we present the simulation results to evaluate the performance of the proposed handover-aware power allocation algorithm in comparison with a baseline minimum distance association policy, where each user is assigned to the closest visible satellite and beam without considering handover costs or power optimization. All results are obtained using simulation parameters provided in Table II [23].
TABLE II: Simulation Parameters
Parameter Value
Satellite TLE data (positions, elevation) Start date 2025/01/01, 00:00 User locations La Creuse (France), 10 km radius Users |U| = 30 Satellites |S| = 30 Beams per satellite |B| = 3 Satellite power 1 kW total Visibility angle 20◦ Carrier frequency 20 GHz Bandwidth 200 MHz Noise density N0 10−20 W/Hz Rician K factor 10 dB Handoff penalty α 0.5 Time slots 20 Min rate γth 0.1 Mbps/user Solver MOSEK [22]
A. Throughput Comparison Over Time Slots
Fig. 3 shows the evolution of the total system throughput (sum of all users’ rates) over 20 time slots for both the proposed approach (blue) and the baseline minimum distance policy (orange). As illustrated, our framework achieves a higher total rate across all users at each time slot, demonstrating its ability to effectively allocate power and associate users with satellites in a way that maximizes spectral efficiency.
B. Monte Carlo Simulation Statistics
We observe an increase in the total rate from about 9.5 Mbps under the naive baseline to 15 Mbps with our method, i.e., a gain of nearly 58%. This illustrates the benefit of jointly optimizing user association and power allocation instead of simply connecting to the closest satellite. Since this result is from a single run, we perform 1000 Monte Carlo realizations to assess robustness and account for channel randomness. Over T = 10 slots, the baseline achieves an average of 0.351 Mbps per user, wh-
ile our approach reaches 0.491 Mbps, corresponding to a 40% improvement (Table III).
TABLE III: Monte Carlo Simulation Statistics (1000 runs)
Metric Proposed Approach
Minimum Distance Approach Mean user rate [Mbps] 0.491 0.351 Standard deviation [Mbps] 0.062 0.113
Fig. 3: Total throughput of all users over 20 time slots for both approaches.

Fig. 4: Monte Carlo simulation results over 1000 runs: user rates for both approaches.
Fig. 5: Comparison of total number of handovers for the proposed approach and the minimum distance policy. Fig. 4 summarizes these results. The proposed approach achieves a higher average user rate with lower standard deviation, indicating more consistent service quality across users.
C. Handover Analysis
While the proposed method outperforms the baseline in terms of throughput, it implies a significantly higher number of handovers, as shown in Fig. 5. This is due to the optimization algorithm frequently reassigning users to different satellites or beams to maximize the instantaneous rate.
IV. CONCLUSION
Our approach showcases the advantages of slot-by-slot joint optimization for maximizing user throughput in Low Earth Orbit (LEO) satellite networks. While this fine-grained optimization effectively maximizes user throughput, it leads to a significantly higher number of handovers. This is because users are reassigned at each time slot to improve instantaneous rates, without considering longer-term consistency. A promising direction for future work is to perform optimization over more coarse-grained-
 time intervals or over the entire time horizon to reduce handovers, although its non-convexity and sequential nature pose major challenges. Alternatively, decomposition methods such as block coordinate descent could be explored to jointly minimize satellite power consumption and handover frequency in large-scale constellations and very-large networks.
REFERENCES
[1] M. Giordani and M. Zorzi, “Non-Terrestrial Networks in the 6G Era: Challenges and Opportunities,” IEEE Network, vol. 35, no. 2, pp. 244251, Mar. 2021.
[2] D. Feng, L. Lai, J. Luo, Y. Zhong, C. Zheng, and K. Ying, “UltraReliable and Low-Latency Communications: Applications, Opportunities and Challenges,” Science China Information Sciences, vol. 64, Jan. 2021. [3] “3GPP TR 38.811 v15.4.0: Study on New Radio (NR) to support non-terrestrial networks,” 3GPP, Tech. Rep., 2020, technical Report. [Online]. Available: https://www.3gpp.org/DynaReport/38811.htm [4] X. Lin, S. Cioni, G. Charbit, N. Chuberre, S. Hellsten, and J.-F. Boutillon, “On the Path to-
 6G: Embracing the Next Wave of Low Earth Orbit Satellite Access,” IEEE Commun. Mag., vol. 59, no. 12, pp. 36–42, Dec. 2021. [5] M. Almekhlafi, A. Lesage-Landry, and G. Karabulut Kurt, “Access Inequality in LEO Satellite Networks: A Case Study of High-Latitude Coverage in Northern Qu ́ebec,” IEEE Open J. Veh. Technol., vol. 6, pp. 1613–1630, May 2025. [6] E. Kang, Y. Park, J. Kim, and H. Choo, “Downlink Analysis of a Low-Earth Orbit Satellite Considering an Airborne Interference Source Moving on V-
arious Trajectory,” Remote Sensing, vol. 16, no. 2, p. 321, Jan. 2024. [7] M. Hozayen, T. Darwish, G. Karabulut Kurt, and H. Yanikomeroglu, “A Graph-Based Customizable Handover Framework for LEO Satellite Networks,” in Proc. IEEE GLOBECOM, Nov. 2022, pp. 868–873. [8] H. Zhou, J. Li, K. Yang, H. Zhou, J. An, and Z. Han, “Handover Analysis in Ultra-Dense LEO Satellite Networks With Beamforming Methods,” IEEE Trans. Veh. Technol., vol. 72, no. 3, pp. 3676–3690, Mar. 2023. [9] E. Juan, M. Lauridsen, J-
. Wigard, and P. Mogensen, “Handover Solutions for 5G Low-Earth Orbit Satellite Networks,” IEEE Access, vol. 10, pp. 93 309–93 325, 2022. [10] H. Nguyen-Kha, V. N. Ha, E. Lagunas, S. Chatzinotas, and J. Grotz, “LEO-to-User Assignment and Resource Allocation for Uplink Transmit Power Minimization,” in Proc. IEEE WSA & SCC, 2023. [11] B. Rhodes, “Skyfield: High precision research-grade positions for planets and Earth satellites generator,” Astrophysics Source Code Library, pp. ascl–1907.024, 2019. [-
12] A. Al-Hourani, “Session Duration between Handovers in Dense Low Earth Orbit Satellite Networks,” IEEE Commun. Lett., vol. 10, no. 12, pp. 2810–2814, oct 2021. [13] C. Westphal, L. Han, and R. Li, “LEO Satellite Networking Relaunched: Survey and Current Research Challenges,” ITU Journal on Future and Evolving Technologies, vol. 4, no. 4, oct 2023.
[14] L. Gou, D. Bian, Y. Nie, G. Zhang, H. Zhou, Y. Shi, and L. Zhang, “Hierarchical Resource Management for Mega-LEO Satellite Constellation: A Review,” Sensors, vol. 25, no. 3, 2025. [15] Y. Sun, Y. Zhai, W. Wu, P. Si, and F. R. Yu, “Handover for Multi-Beam LEO Satellite Networks: A Multi-Objective Reinforcement Learning Method,” IEEE Commun. Lett., vol. 28, no. 12, pp. 2834–2838, 2024. [16] N. Hedjazi, M. Ouacifi, R. Bouchouareb, M. Ouarghi, D. Benatia, and M. Gareh, “Optimization of the Proble-
m of Handover in Low Earth Orbit Satellite Constellations,” in Proc. IEEE SETIT, 2012. [17] L. You, K.-X. Li, J. Wang, X. Gao, X.-G. Xia, and B. Ottersten, “LEO satellite communications with massive MIMO,” in 2020 IEEE International Conference on Communications (ICC). Dublin, Ireland: IEEE, Jun. 2020.
[18] G. Maral and M. Bousquet, Satellite Communications Systems: Systems, Techniques and Technology, 5th ed. John Wiley & Sons, 2011. [19] A. Goldsmith, Wireless Communications. Cambridge, UK: Cambridge University Press, 2005. [20] “Propagation Data and Prediction Methods Required for the Design of Earth–Space Telecommunication Systems,” International Telecommunication Union (ITU), ITU-R Recommendation P.618-14, 2023. [Online]. Available: https://www.itu.int/rec/R-REC-P.618 [21] E. Alozie, A. Abdu-
lkarim, I. Abdullahi et al., “A Review on Rain Signal Attenuation Modeling, Analysis and Validation Techniques: Advances, Challenges and Future Direction,” Sustainability, vol. 14, no. 18, 2022. [22] M. ApS, The MOSEK optimization toolbox for MATLAB manual. Version 9.0., 2019. [Online]. Available: http://docs.mosek.com/9.0/ toolbox/index.html [23] M. Almekhlafi, A. Lesage-Landry, and G. Karabulut Kurt, “Connectivity-Aware Task Offloading for Remote Northern Regions: a Hybrid LEO-MEO Architecture,”-
 in Proc. IEEE PIMRC, Istanbul, T ̈urkiye, Sep. 2025.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:19.744Z
- **Text Length:** 29812 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 6 of 6
