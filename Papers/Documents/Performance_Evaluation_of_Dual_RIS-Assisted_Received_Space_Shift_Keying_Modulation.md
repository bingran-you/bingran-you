# PDF Document: Bayar et al. - 2025 - Performance Evaluation of Dual RIS-Assisted Received Space Shift Keying Modulation.pdf

**File Path:** Bayar et al. - 2025 - Performance Evaluation of Dual RIS-Assisted Received Space Shift Keying Modulation.pdf

**Processed Date:** 2026-02-10T18:14:16.236Z

**File Size:** 933.40 KB

**Total Pages:** 6

**Extracted Pages:** 6

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3271

**Title:** Performance Evaluation of Dual RIS-Assisted Received Space Shift Keying Modulation

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Performance Evaluation of Dual RIS-Assisted Received Space Shift Keying Modulation
Ferhat Bayar, Haci Ilhan, Senior Member, IEEE and Erdogan Aydin
Abstract—Reconfigurable intelligent surfaces (RISs) are gaining traction for their ability to reshape wireless environments with low energy consumption. However, prior studies primarily explore single-RIS deployments with static or semistatic reflection control. In this paper, we propose a novel dual-RIS-assisted architecture for smart indoor wireless signal routing, wherein the second RIS (RIS2) is dynamically configured based on source data bits to steer signals toward specific receivers or indo-
or zones. The first RIS (RIS1), positioned near a fed antenna or access point, passively reflects the incident signal. RIS2, equipped with a lightweight controller, performs bitdriven spatial modulation to enable data-dependent direction selection at the physical layer. We develop a complete end-toend system model, including multi-hop channel representation, RIS phase configuration mapping, and signal detection based on space shift keying (SSK). Performance analysis is evaluated in terms of achiev-
able capacity and outage probability under varying inter-RIS distances and carrier frequencies. Index Terms—Reconfigurable intelligent surface (RIS), selective combining (SC), path loss, outage probability, multihop channels
I. Introduction
The rapid proliferation of wireless devices in indoor environments ranging from smartphones and laptops to Internet of Things (IoT) sensors and medical monitoring equipment has created an urgent need for intelligent, flexible, and energy-efficient communication infrastructures. Conventional wireless fidelity (Wi-Fi) and cellular systems often struggle to maintain consistent coverage and performance in complex indoor layouts due to obstacles such as walls, furniture, and user movement. Reconfigurab-
le intelligent surface (RIS), which enable the passive control of electromagnetic wave propagation, has recently been proposed as a low-cost and energy-efficient solution to enhance wireless links without the need for active relaying or expensive infrastructure upgrades [1]–[4]. While existing RIS-based systems typically involve a single RIS element reflecting signals toward static or semi-dynamically selected users, such approaches remain limited in their ability to support fine-grained, data-awa-
re control over signal direction—particularly in environments
F. Bayar is with the Scientific and Technological Research Council of Turkey (TUBITAK), BILGEM, Kocaeli, Turkey (e-mail: ferhat.bayar@tubitak.gov.tr) (Corresponding author: Ferhat Bayar). H. Ilhan is with the Department of Electronics and Communications Engineering, Yildiz Technical University, Istanbul, 34220, Turkey, (e-mail: ilhanh@yildiz.edu.tr). E. Aydin is with the Department of Electrical and Electronics Engineering, Istanbul Medeniyet University, Istanbul 34857, Turkey (e-mail: erdogan.ayd-
in@medeniyet.edu.tr).
with multiple rooms, users, or zones requiring differentiated service [5]. Moreover, current designs generally treat RIS control as independent of the transmitted data itself, missing opportunities for joint signal and control codesign. Recent studies have explored multi-RIS-enabled configurations, which present more practical applications for RIS-assisted networks, aiming to enhance system capacity [6]–[11]. In this work, we propose a novel dual-RIS system architecture that addresses these limita-
tions by introducing bit-controlled intelligent signal routing. The system consists of two RIS panels: a passive RIS1 located near the transmitter or access point, and a configurable RIS2 placed at a central indoor location such as a hallway wall or ceiling. Unlike traditional systems, RIS2 is controlled using the data bits from the source, enabling real-time selection of the desired receiver zone or antenna by adjusting its phase profile accordingly. This allows the RIS to function as a low-energ-
y spatial switch, dynamically guiding wireless signals toward the correct user or device based on the intended data stream. To address these limitations, we explore the potential of RIS in enhancing wireless communication systems. Specifically, we propose a novel dual-RIS-assisted architecture for smart indoor signal routing, where the second RIS (RIS2) is dynamically configured based on source data bits to guide signals to specific receivers or indoor zones. The first RIS (RIS1) passively reflect-
s the signal from a fed antenna or access point. Additionally, we examine the integration of RIS with space shift keying (SSK) and develop a comprehensive end-to-end system model, incorporating multi-hop channel representation and RIS phase configuration mapping. We also evaluate the system’s performance in terms of achievable capacity, outage probability, and the impact of varying distances and carrier frequencies. Finally, we present simulation results that demonstrate the superior performance o-
f the dual-RIS system compared to conventional single-RIS and fixed-beam configurations, offering a flexible and scalable solution for indoor coverage in energy and interferenceconstrained environments, such as smart buildings and post-disaster scenarios.
A. Notations
In this paper , matrices and vectors are shown in boldface uppercase and boldface lowercase letter, respectively. (·)∗, (·)T , and (·)H define complex conjugation, transpose,
arXiv:2511.18610v1 [cs.IT] 23 Nov 2025

Fig. 1: Dual-RIS-assisted indoor communication system.
and Hermitian transpose, respectively. Pr [·] defines the the probability of an event and E [X] (μX ) denotes the mean of random variable X.
B. Paper Organization
The remainder of this paper is organized as follows. Section II introduces the proposed dual-RIS-assisted architecture, detailing the system model, including the multihop channel representation and RIS phase configuration. Section III presents the performance analysis, discussing the achievable capacity and outage probability. Section IV presents the theoretical and simulation results. Finally, Section V concludes the paper with a summary of the findings and future research directions.
II. System Model
Fig. 1 illustrates the proposed dual-RIS-assisted indoor communication system. The setup comprises a singleantenna transmitter located near a RIS1, RIS2 positioned in the region of the receiver, and a receiver equipped with Nr antennas. The system is designed for indoor communication scenarios, such as inter-room backhaul connections, where no direct line-of-sight (LoS) path exists between the transmitter and the receiver. However, the two RISs are assumed to have direct visibility, i.e., there is-
 an LoS link between RIS1 and RIS2. Both RIS1 and RIS2 are equipped with N passive reflecting elements each. The transmitter emits a basebandmodulated signal that is reflected by RIS1, then propagates to RIS2, which further reflects it toward a selected receive antenna based on SSK principles. Specifically, RIS2 performs antenna selection by adjusting its phase profile such that the signal is constructively directed to one of the Nr receive antennas, as determined by incoming information bits. The-
 system employs SSK modulation through RIS control, where log2(Nr) bits are encoded by selecting one of the receiver antennas. RIS2 uses these bits to dynamically steer the reflected signal beam toward the selected receive antenna. The system does not require any RF chains at the RIS elements, relying instead on passive beamforming to achieve efficient modulation.
A. Channel Model
The end-to-end communication channel consists of two segments. G ∈ CN×N represents the channel between RIS1 and RIS2. Similarly, H ∈ CNr×N denotes the channel between RIS2 and the receiver. Each of these channels is modeled using a Rician fading distribution with large-scale path loss. Specifically, the wireless channel G and H can be represented as follows:
G=


g1,1 · · · g1,N
... . . . ...
gN,1 · · · gN,N

 , H =


h1,1 . . . h1,N
... . . . ...
hNr,1 . . . hNr,N


(1) where gk,i = αk,ie−jψk,i k = 1, 2, · · · , N, i = 1, 2, · · · , N. In here αk,i and ψk,i represent the amplitude and the channel phase induced by the k-th reflector at the i-th element of the RIS2 respectively. Specifically, the envelopes of the first hop channels αk,i (from the RIS1 to RIS2) are independent and identically distributed (i.i.d.) Rician random variables with ratio of the LoS component with K1 and power Ω1. Similarly the the channel coefficient between the p-th received antenna a-
nd the i-th reflector element hi,p is characterized as hi,p = βi,pe−jθi,p p ∈ {1, . . . , Nr}. Here θi,p is the channel phase induced by the ith reflector at the p-th receive antenna and βp,i defines the i.i.d. Rician random variables with ratio of the LoS component K2 and power Ω2.
Since the selection of the m-th receiving antenna is based on the incoming bit data sequence, the channel between the (RIS2) and the destination will be repre
sented in the following form hm = [h1,m, · · · , hN,m
].
Furthermore, we assume that the channel coefficients hi,p and gk,i are independent. The Rician K-factors, which characterize the ratio of the power in the LoS component to that in the non LOS (NLoS) component, are given by K1 = Ω1/σ12 and K2 = Ω2/σ22 where Ω1 and Ω2 represent the power in the LoS components for the channels G and H, respectively, and σ12 (for gk,i) and σ22 (for hi,p) represent the powers in the NLoS components for the respective channels. The channel coefficients αk,i and βi,p are-
 assumed to follow the Rician distribution with parameters K1 and K2 for the first and second hops, respectively. Specifically, the distribution of the channel coefficients is given by
αk,i, βi,p =
√
Kj/(Kj + 1) +
√
1/(Kj + 1)w ̃ (2)
where Kj represents the Rician K-factor, with j ∈ {1, 2} corresponding to the first and second hops. Here, g ̃ is a zero-mean complex Gaussian random variable with unit variance, i.e., w ̃ ∼ CN (0, 1).
B. Phase Optimization
We assume that both RISs have access to perfect channel state information (CSI) for their respective links.

The goal of the RIS phase design is to maximize the signal-to-noise ratio (SNR) at the receiver by coherently combining the reflected signals. This is achieved by optimally adjusting the phase shifts of the RIS elements to compensate for the channel-induced phase variations. Let the phase shift vector for the overall system be
represented as Θi = [ejφi,1 , ejφi,2 , . . . , ejφi,N ]T , where φi,k is the phase shift at the k-th RIS element. The goal is to optimize these phase shifts to maximize the received SNR. The optimization problem can be written
as Θopt
i = arg maxθi |heff|2 , where heff is the effective
channel matrix, given by the product of the RIS1-toRIS2 channel G and the RIS2-to-destination channel hTm as heff = GhTm. To maximize the received signal strength, the phase shifts must align the received signal components. The optimal phase shift for each RIS element
is φopt
i = − (ψk,i + θi,m) , ∀i ∈ {1, . . . , N }, where ψk,i is
the phase of the RIS1-to-RIS2 channel and θi,m is the phase of the RIS2-to-destination channel.
C. Received Signal Model
Assuming the received signal is related to the transmitted signal through the effective channel, the received signal at the mth antenna can be expressed as ym =
√Es ζ hm GΘopt
i + nm, where Es is the square root of the
transmitted signal power (Es = 1 due to the use of the received SSK technique), nm is the complex additive white Gaussian noise (AWGN) with zero mean and variance N0 at the m-th receive antenna and ζ = (λc/4πd1d2)2. Additionally, d1 and d2 represent the distances from the transmitter (RIS1) to RIS2 and from the RIS2 to the receiver, respectively. The wavelength corresponding to the center frequency fc is given by λc = c/fc, where c is the speed of light. The instantaneous SNR at the m-th selected -
receive antenna is then given by γm = |ym|2/N0 where ym is the
received signal at the mth antenna and N0 is the noise power. Finally, the instantaneous SNR can be expressed as
γm =
ζ 2 Es
∣∣∣∑N
k=1
∑N
i=1 αk,iβi,mej(Φopt
i −Ψk,i−θi,m)
∣∣∣
2
N0
, (3)
or equivalently γm = ζ2Es
∣∣∣∑N
k=1
∑N
i=1 αk,iβi,m
∣∣∣
2
/N0.
III. Theoretical Analaysis
A. Outage Probabilty
In this section, we analyze the outage probability of the RIS-assisted system under Rician fading channels. The outage probability of the system is defined as the probability that the end-to-end SNR, denoted by γm, falls below a predetermined outage threshold value γout, i.e., Pout = Pr[γm ≤ γout].
To derive the outage probability, we first consider the distribution of γm. As the number of terms N increases, we apply the central limit theorem (CLT), which states
that the sum of a large number of independent random variables tends to a Gaussian distribution. Although the product of two normally distributed variables is generally not itself normally distributed, it is known that under certain conditions, particularly in the asymptotic regime, the distribution of the product can be approximated as normal [12]. Specifically, the moment-generating function (MGF) of the product of two independent normal random variables converges to that of a normal distributio-
n as the variances tend to zero or their means grow large. In particular, if X ∼ N (μX , σ2
X ) and Y ∼ N (μY , σ2
Y ), then
for large μX , μY , the product Z = XY tends toward a distribution that is approximately Z ∼ N (μX μY , μ2
X σ2
Y+
μ2
Y σ2
X ).
In our case, specifically, for large N the sum
∑N k=1
∑N
i=1 αk,iβi,m can be approximated as product of
two Gaussian random variable with A = ∑N
i=1 αk,i ∼
N (μα, σ2α) and B = ∑N
i=1 βi,m ∼ N (μβ , σ2
β). The mean
of αk,i and βi,p with Rician K-factor and total power Ω is given by
μα = N √(π Ω1)/(4(K1 + 1))L1/2(−K1), (4)
μβ = N √(π Ω2)/(4(K2 + 1))L1/2(−K2), (5)
where L1/2(−Kj) is the generalized Laguerre polynomial of order 1/2, defined as:
L1/2(−Kj) = exp(−Kj/2) [(1 + Kj)I0 (Kj/2)
+ KjI1 (Kj/2)] j ∈ {1, 2}, (6)
and I0(·), I1(·) are the modified Bessel functions of the first kind. The variance of αk,i and βi,p can be represented as σ2α = N (Ω1 − μ2α), and σ2
β = N (Ω2 − μ2
β). So the
product Z = AB is approximately distributed as Z ∼ N (μαμβ, μ2ασ2
β + μ2
βσ2α) in the large-N limit.
Consequently, γm can be approximated as a ratio of a squared Gaussian random variable and the noise power N0. For large values of N , the distribution of γm is approximately non-central Chi-square random variable with one degree of freedom, n = 1, and its probability density function (PDF) is given by γm = ζ2Es|Z|2/N0. Let us define the normalized variable X = Z/σZ ∼ N (μZ /σZ , 1) , so that |Z|2/σ2
Z = X2. Since X2 follows
a noncentral chi-squared distribution with one degree of freedom and noncentrality parameter λ = (μZ /σZ )2, we have |Z|2 ∼ σ2
Z χ21(λ). Hence, the random variable
γm can be expressed as a scaled noncentral chi-squared random variable as γm = χ21
(μ2
Z /σ2
Z
) ζ2Esσ2
Z /N0 The
corresponding pdf of γm is given by
fγm (γ) = 1
2sσ2
Z
exp
(
− γ/s + μ2
Z
2σ2
Z
)
I0
( μZ
σ2
Z
√γ
s
)
, γ ≥ 0,
(7) where s = ζ2Es/N0. The cumulative distribution function (CDF) of γm, denoted by Fγm (γ), represents the probability that γm takes a value less than or equal to γ can be expressed in closed form using the the identity

Q1(a, b) = Q(b−a)−Q(b+a), the CDF γm can be rewritten in terms of the first-order Marcum–Q1(·) as
Fγm (γ) = 1 − Q1
(√
μ2
Z σ2
Zζ2 ,
√γ
σ2
Z ζ2γm
)
. (8)
Therefore, the outage probability is obtained as
Fγm (γ) = 1 −
[
Q
(
z−
√
μ2
Z σ2
Zζ2
)
−Q
(
z+
√
μ2
Z σ2
Zζ2
)]
,
(9)
where z = √γ/σ2
Z ζ2γm. Therefore, the outage probability
Pout can be expressed in terms of the CDF of γm as Pout = Fγm (γout). This expression provides a semi-closedform approximation for the outage probability in RISassisted systems under Rician fading, incorporating both fading and path loss effects.
B. Capacity Analysis
The theoretical ergodic capacity of the RIS-assisted link can be analyzed by approximating the cascaded channel gain with its deterministic equivalent. Assuming single-stream transmission and under Rican fading, the instantaneous SNR is denoted by γm = ζ2Es|Z|2/N0, where Z represents in the previous section. The instantaneous capacity (in bits per second per Hertz) is then given by C(γm) = log2(1 + γm) . The ergodic (average) capacity is defined as Cavg = Eγm [log2(1 + γm)] , where the expectation-
 is taken with respect to fγm (γ) in (7). Therefore, the average capacity is given by the following integral:
Cavg =
∫∞
0
log2(1 + γm)fγm (γm) dγm. (10)
Since obtaining a closed-form expression for (10) is generally intractable, a tractable upper-bound or deterministic-equivalent approximation can be used. In the large-N regime (N ≫ 1), where the law of large numbers ensures that random fluctuations of |Z|2 vanish, the instantaneous SNR γm converges to its mean value γ ̄m = E[γm] = ζ2Esμ2
Z /N0. Hence, the ergodic capacity
can be approximated as
Cavg ≈ log2(1 + γ ̄m) = log2
(
1 + ζ2Esμ2
Z N0
)
, (11)
which provides an upper-bound estimate of the achievable rate when the RIS elements are phase-aligned to coherently combine the reflected signals. This upper bound equivalent is particularly accurate in the high-RIS-element regime, where channel hardening occurs and the system performance approaches that of a deterministic channel.
IV. Simulation Results
In Fig.2 (a), the effect of varying the number of reflecting elements on the outage probability is represented. The figure compares three different values of the number
of reflecting elements: N = 64, 128, 256, while keeping the operating frequency fixed at fc = 3GHz, the distance at d = 10 m, the number of receive antennas Nr = 2 and γout = 10 dB. The SNR parameter used in the simulations is expressed as SNR(dB) = 10 log10(Es/N0). As observed in the Fig.2 (a), the outage probability decreases significantly as the number of reflecting elements increases. This suggests that the system’s performance improves with the deployment of a greater number of reflecting ele-
ments. Specifically, for N = 64, the outage probability is relatively higher, indicating a lower reliability of the communication link. However, as N is increased to 128, a noticeable reduction in the outage probability is observed, which becomes even more pronounced for N = 256. The latter configuration, with 256 reflecting elements, results in the lowest outage probability across the entire range of SNRs. This behavior can be attributed to the increased ability of the larger number of reflecting-
 elements to enhance the channel conditions, thereby improving signal strength and reducing interference, which leads to a more reliable link.
30 40 50 60 70 SNR (dB) (a)
10-4
10-3
10-2
10-1
100
Outage Probability (Pb)
40 60 80 100 SNR (dB) (b)
10-4
10-3
10-2
10-1
100
Outage Probability (Pb)
Fig. 2: Outage performance of the Dual-RIS assisted RSSK schemes: (a) with different N , (b) with different fc (Nr = 2, fc = 3GHz, K = 2, d = 10, and γout = 10 dB).
Fig.2 (b) illustrates the effect of center frequency (fc = 3GHz and fc = 10GHz) on the outage probability of the system. The analysis is conducted under the assumption that the number of reflecting elements is fixed at N = 64 and the number of receive antennas Nr = 2 for all configurations. Specifically, the frequency of 3 GHz consistently exhibits the lowest outage probability throughout the SNR. This indicates a more reliable communication link for this frequency, as it maintains a relatively lo-
w outage probability even at higher SNR values. In contrast, the frequencies of 10 GHz and 20 GHz exhibit higher outage probabilities as the SNR increases. This indicates a more severe degradation in link reliability for the higher frequency bands. The observed differences in outage probability can be attributed to the distinct propagation characteristics associated with each frequency band. Specifically, the 3 GHz frequency benefits from lower path loss and is less affected by atmospheric absorpt-
ion, resulting in a more reliable communication

link. Fig.3 (a) illustrates the effect of number of reflecting
50 55 60 65 70 SNR (dB) (a)
0
2
4
6
8
10
12
14
Ergodic Capacity (bps/Hz)
50 55 60 65 70 SNR (dB) (b)
0
2
4
6
8
10
12
14
Ergodic Capacity (bps/Hz)
Fig. 3: Ergodic capacity of the Dual-RIS assisted RSSK schemes : (a) with different number of reflecting elements N , (b) with different distances d. (N = 128, Nr = 2, fc = 3GHz.
elements (N = 64, 128, 256 ) on the ergodic capacity of the system while keeping the operating frequency fixed at fc = 3GHz, the distance at d = 10 m, the number of receive antennas Nr = 2. As observed in the Fig.3 (a), the ergodic capacity improves significantly as the number of reflecting elements increases. Fig.3 (b) illustrates the effect of distance (d = 5, 10, 20 m) on the ergodic capacity of the system. The analysis is conducted under the assumption that the number of reflecting elements is-
 fixed at N = 128 for all systems. Furthermore, the number of receive antennas, Nr, is set to 2 for all configurations, and the center frequency is selected as fc = 3GHz. As the distance between the transmitter and receiver increases, a noticeable degradation in ergodic capacity is observed. This decline can be attributed to the increase in path loss with distance, which results in reduced signal strength and consequently lower achievable data rates. At a distance of d = 5 m, the system experience-
s minimal attenuation, yielding the highest ergodic capacity. However, as the distance increases to d = 10 m and d = 20 m, the capacity diminishes due to greater signal propagation loss over longer distances. Fig.4 illustrates the effect of the dual-RIS and single-RIS configurations on the outage probability of the system. The analysis is conducted under the assumption that the number of reflecting elements is fixed at N = 128 and the number of receive antennas Nr = 2 for all configurations. Speci-
fically, the single RIS configuration consistently exhibits the lowest outage probability across all values of K throughout the SNR range as seen in Fig.4 (b). This indicates a more reliable communication link for the single RIS system, as it maintains a relatively low outage probability even as K increases and the SNR becomes higher. In contrast, the dual-RIS configuration shows a higher outage probability compared to single RIS in all instances, even as K increases as shown in Fig.4
40 45 50 55 60 SNR (dB) (a)
10-4
10-3
10-2
10-1
100
Outage Probability (Pb)
20 25 30 35 40 SNR (dB) (b)
10-4
10-3
10-2
10-1
100
Outage Probability (Pb)
Fig. 4: Outage performance of the RIS assisted RSSK systems: (a) Dual-RIS with different K, (b) Single-RIS with different K (N = 128, Nr = 2, d = 10 m, fc = 3 GHz and γout = 10 dB).
(a). This suggests that the additional RIS element (RIS2) introduces complexity that affects the system’s ability to minimize outages effectively. Despite the potential for enhanced signal routing and coverage flexibility offered by dual RIS, it does not outperform single RIS in terms of outage probability under the evaluated conditions. The observed differences in outage probability can be attributed to the complexity associated with managing multiple RIS surfaces in the dual-RIS setup. While dua-
l RIS improves coverage and signal routing flexibility, the coordination overhead and interference effects may counteract the expected benefits, leading to a higher outage probability compared to the simpler, more efficient single RIS system.
V. Conclusions and Future Works
In conclusion, the simulation results highlight the potential of the dual-RIS system in providing scalable, flexible, and energy-efficient solutions for indoor coverage, particularly in challenging environments like smart buildings and post-disaster scenarios. The proposed approach not only meets the growing demands of five generation (5G) and six generation (6G) networks but also lays the groundwork for future research on multi-RIS systems and their integration into next-generation wireless commu-
nication frameworks.The dual-RIS-assisted architecture presents a promising direction for future wireless communication systems, offering substantial improvements in signal routing, coverage, and interference mitigation. Future work will focus on further optimizing the system model, exploring real-world implementation challenges, and extending the proposed framework to support emerging technologies in wireless communication.
References
[1] Y. Liu, X. Liu, X. Mu, T. Hou, J. Xu, M. Di Renzo, and N. Al-Dhahir, “Reconfigurable intelligent surfaces: Principles and opportunities,” IEEE communications surveys & tutorials, vol. 23, no. 3, pp. 1546–1577, 2021.

[2] E. Basar, M. Di Renzo, J. De Rosny, M. Debbah, M.-S. Alouini, and R. Zhang, “Wireless communications through reconfigurable intelligent surfaces,” IEEE access, vol. 7, pp. 116 753–116 773, 2019. [3] C. Pan, H. Ren, K. Wang, J. F. Kolb, M. Elkashlan, M. Chen, M. Di Renzo, Y. Hao, J. Wang, A. L. Swindlehurst et al., “Reconfigurable intelligent surfaces for 6G systems: Principles, applications, and research directions,” IEEE Communications Magazine, vol. 59, no. 6, pp. 14–20, 2021. [4] C. Huang,-
 A. Zappone, G. C. Alexandropoulos, M. Debbah, and C. Yuen, “Reconfigurable intelligent surfaces for energy efficiency in wireless communication,” IEEE transactions on wireless communications, vol. 18, no. 8, pp. 4157–4170, 2019. [5] H. Ibrahim, H. Tabassum, and U. T. Nguyen, “Exact coverage analysis of intelligent reflecting surfaces with Nakagami-m channels,” IEEE Transactions on Vehicular Technology, vol. 70, no. 1, pp. 1072–1076, 2021. [6] T. N. Do, G. Kaddoum, T. L. Nguyen, D. B. Da Costa, an-
d Z. J. Haas, “Multi-RIS-aided wireless systems: Statistical characterization and performance analysis,” IEEE Transactions on Communications, vol. 69, no. 12, pp. 8641–8658, 2021. [7] K. D. Katsanos, P. Di Lorenzo, and G. C. Alexandropoulos, “Multi-RIS-empowered multiple access: A distributed sum-rate maximization approach,” IEEE Journal of Selected Topics in Signal Processing, 2024. [8] W. Mei and R. Zhang, “Cooperative beam routing for multiIRS aided communication,” IEEE Wireless Communications -
Letters, vol. 10, no. 2, pp. 426–430, 2020. [9] Z. Xie, W. Yi, X. Wu, Y. Liu, and A. Nallanathan, “Downlink multi-RIS aided transmission in backhaul limited networks,” IEEE Wireless Communications Letters, vol. 11, no. 7, pp. 14581462, 2022. [10] D. Tyrovolas, S. A. Tegos, E. C. Dimitriadou-Panidou, P. D. Diamantoulakis, C. K. Liaskos, and G. K. Karagiannidis, “Performance analysis of cascaded reconfigurable intelligent surface networks,” IEEE Wireless Communications Letters, vol. 11, no. 9, pp. 1-
855–1859, 2022. [11] Y. Han, S. Zhang, L. Duan, and R. Zhang, “Cooperative doubleIRS aided communication: Beamforming design and power scaling,” IEEE Wireless Communications Letters, vol. 9, no. 8, pp. 1206–1210, 2020. [12] A. Seijas-Macías and A. Oliveira, “An approach to distribution of the product of two normal variables,” Discussiones Mathematicae Probability and Statistics, vol. 32, no. 1-2, pp. 87–99, 2012.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:16.236Z
- **Text Length:** 27192 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 6 of 6
