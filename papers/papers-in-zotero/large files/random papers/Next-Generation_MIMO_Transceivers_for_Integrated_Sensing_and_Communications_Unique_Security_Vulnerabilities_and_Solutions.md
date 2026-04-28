# PDF Document: Han et al. - 2025 - Next-Generation MIMO Transceivers for Integrated Sensing and Communications Unique Security Vulnera.pdf

**File Path:** Han et al. - 2025 - Next-Generation MIMO Transceivers for Integrated Sensing and Communications Unique Security Vulnera.pdf

**Processed Date:** 2026-02-10T18:18:17.466Z

**File Size:** 10155.17 KB

**Total Pages:** 29

**Extracted Pages:** 29

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3327

**Title:** Next-Generation MIMO Transceivers for Integrated Sensing and Communications: Unique Security Vulnerabilities and Solutions

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

1
Next-Generation MIMO Transceivers for Integrated
Sensing and Communications: Unique Security
Vulnerabilities and Solutions
Kawon Han, Member, IEEE, Christos Masouros, Fellow, IEEE, Taneli Riihonen, Senior Member, IEEE, and Moeness G. Amin, Life Fellow, IEEE
Abstract—Integrated sensing and communications (ISAC), which is recognized as a key enabler for sixth generation (6G), has brought new opportunities for intelligent, sustainable, and connected wireless networks. Multiple-input multiple-output (MIMO) transceiver technology lies at the core of this paradigm, providing the degrees of freedom required for simultaneous data transmission and accurate radar sensing. The tight integration of sensing and communication introduces unique security vulnerabili-
ties that extend beyond conventional physical-layer security (PLS). In particular, high-power transmissions directed at sensing targets may empower adversarial eavesdroppers, whereas passive interception of ISAC echoes can reveal sensitive information such as target locations and mobility patterns. This article presents an overview of recent advances in MIMO ISAC transceiver design, considering transmitter perspectives, receiver architectures, and full-duplex implementations. We examine MIMO trans-
ceiver designs under unique security threats specific to ISAC and highlight emerging countermeasures, including secure signaling design, interference exploitation, and transceiver optimization under adversarial conditions. Finally, we discuss challenges and research opportunities for developing secure ISAC systems in next-generation wireless networks.
I. INTRODUCTION
Radar and communication are two fundamental applications of radio frequency systems that have profoundly shaped modern society. Although both rely on electromagnetic (EM) waves, they have traditionally been developed in isolation, following independent design principles and operating on separate hardware platforms. As a result, the two technologies often compete for scarce spectrum resources rather than cooperating. Elements toward integrating radar and communication can be traced in the literatur-
e since as early as the 1960s [1], but for decades the concept remained largely unexplored due to technological and practical barriers, as well as the absence of driving commercial or defense applications. This landscape is now changing. Advances in millimeter-wave (mmWave) systems and the widespread adoption of multipleinput multiple-output (MIMO) architectures have revealed strong commonalities between radar and communication [2], [3], including shared transceiver hardware, common antenna
Kawon Han and Christos Masouros are with the Department of Electronic and Electrical Engineering, University College London, London, UK (E-mail: kawon.han, c.masouros@ucl.ac.uk). Taneli Riihonen is with the Faculty of Information Technology and Communication Sciences, Tampere University, 33720 Tampere, Finland Moeness G. Amin is with the Center for Advanced Communications, Villanova University, Villanova, PA 19085 USA
and array architectures, and overlapping channel characteristics. These developments are transforming integration and dual-functionality from a long-standing vision into a practical opportunity, marking a paradigm shift from co-existence to codesign, now unified under the concept of Integrated Sensing and Communication (ISAC). The emergence of sixth-generation (6G) networks further amplifies this need, demanding technologies that provide both ubiquitous connectivity and high-resolution situational-
 awareness. Embedding sensing functionality into communication signals or reusing radar waveforms for data transmission, ISAC enhances spectral and energy efficiency, reduces hardware redundancy, and supports a wide range of emerging applications [4]. This convergence is also driven by spectrum scarcity and escalating demands on throughput, reliability, and latency, which make separate spectrum allocation increasingly impractical. Finally, the recent chip-crisis has created a drive for efficient h-
ardware reuse and the development of multifunctional radio frequency platforms that provide sensing and communication capabilities without the need for hardware duplication across separate sensing and communication systems. Advances in waveform design, transceiver architectures, and especially MIMO techniques now enable ISAC systems to achieve high data rates, accurate sensing, and robust interference management within shared spectral and hardware resources through joint optimization. At the same -
time, this new opportunity brings new challenges, as integration introduces security and privacy risks that are far less pronounced in conventional wireless systems. Because ISAC operates over shared spectrum and often uses common waveforms, any compromise of the transmitted signal can simultaneously jeopardize both data exchange and radar sensing. Adversaries may exploit ISAC illumination to intercept or manipulate confidential information, while unauthorized receivers can passively reconstruct s-
ensitive environmental details, such as user/target movements, locations, or object dynamics, without the need to access the communication payload. In short, the fusion of sensing and communication multiplies the potential benefits but also expands the attack surface, making security a critical concern for practical ISAC deployment. These challenges in ISAC call for a holistic security perspective that goes beyond classical physical layer security (PLS) in wireless communications. Future ISAC syst-
ems must embed security properties directly into waveform and
arXiv:2511.20309v1 [eess.SP] 25 Nov 2025

2
ISAC transceiver
Sensing eavesdropper
Sensing target
Communication eavesdropper
User
Sensing target (Eavesdropper)
User Communication link
Radar sensing link Surveillance signal leakage Sensory information leakage
Communication data leakage
Fig. 1. Illustration of MIMO-enabled ISAC operation and new physical layer security vulnerabilities in ISAC systems.
transceiver design, leverage physical-layer characteristics to impair adversarial observations, and adopt cross-layer protocols that jointly safeguard communication integrity and sensing privacy. Without such measures, large-scale ISAC deployment may be jeopardized not by technical feasibility, but by the inability to guarantee trust, resilience, and privacy in real-world environments. This article presents a comprehensive overview of the latest MIMO ISAC transceiver design techniques, including r-
adarand communication-centric approaches, joint signaling strategies, and interference-exploitation techniques, which bring advanced sensing and communication (S&C) trade-off performance. In addition, we highlight the emerging concept of secure ISAC transceivers, which are tailored to simultaneously safeguard communication data eavesdropping and sensing target information. By bridging transceiver design and security, our objective is to examine the state-of-the-art approaches and provide a forward-
-looking perspective on how ISAC can be realized in practice while remaining resilient to new classes of threats; ultimately, a practical and safe-for-use technology. The overall organization of this article is as follows: Section II discusses transmitter-side ISAC designs focusing on radar- and communication-centric approaches, and Section III focuses on the recent advances on joint MIMO precoding and Section IV investigates interference exploitation for ISAC. Section V turns to receiver-side pro-
cessing, highlighting both a unique ISAC receiver architecture and joint receiver designs, while Section VI examines full-duplex ISAC transceivers with an emphasis on self-interference cancellation. Section VII introduces the emerging dimension of ISAC physical-layer security, focusing on transceiver designs tailored to protect both data, and Section VIII for sensing security. Section IX highlights the ISAC proof-of-concept demonstration. Finally, Section X concludes the article with a summary of -
key insights and future outlooks.
II. THE ISAC TRANSMITTER: MODULATION AND
CONSTELLATION DESIGN
This section provides an overview of ISAC transmitter design methodologies, focusing on the dual-functionality per
spectives, namely radar-centric and communication-centric approaches.
A. Radar-Centric Design: Direct Data Modulation on Radar Pulses
A straightforward realization of radar-centric dualfunctional radar-communication (DFRC) systems is to convey communication data by directly modulating radar pulses. In this approach, traditional radar probing waveforms, such as linear frequency modulation (LFM), frequencymodulated continuous wave (FMCW), or phase-modulated continuous wave (PMCW), are preserved, while data symbols are embedded through slow-time or fast-time coding. These systems maintain radar compatibility with strong target dete-
ction and parameter estimation capability but typically offer only moderate communication throughput [5]. Representative examples include intentional pulse modulation schemes, where the radar pulse serves as the carrier and the communication message or symbol sequence acts as the modulating signal [6]–[8]. Slow-time coding (or phase modulation), also known as complex scaling, often used for waveform diversity in MIMO radar, conveys data bits across pulses without compromising sensing performance. -
While this approach is highly radarcompatible, its communication rate is fundamentally limited by the pulse repetition interval [9]. In contrast, fast-time coding increases the communication data rate by modulating symbols within a pulse, but it alters the radar waveform structure, potentially causing spectral spreading and out-of-band leakage [10]. These schemes allow direct symbol recovery at the communication receiver without requiring inverse dictionaries, yet remain suboptimal for both sensin-
g and communication due to the lack of dual-function co-optimization. Therefore, direct data modulation on radar waveforms can be regarded as a baseline DFRC approach, providing compatibility but limited joint performance.
B. Radar-Centric Design: Conveying Data Bits Over Legacy Radar Systems via Index Modulation
By the virtue of system co-design, maximizing the performance of one function should meet satisfactory performance constraints for the other. Just like communication waveforms are modulated in amplitude and phase to convey data bits, radar waveforms can, in principle, be modulated as well. To date, a particular modulation format, index modulation (IM), is considered an effective approach to expand the degree of freedom (DoF) available to both functions, thereby easing codesign tradeoffs and enhanc-
ing overall system performance. IM has been examined in DFRC systems in which digital communications are achieved using legacy radar platforms. In these DFRC systems, also referred to as a radar-centric approach, the radar is the primary function [11]–[16]. The communication function treats the radar as a system of opportunity. This concept implies that system resources or features of one function, including the signal waveforms, can be utilized by the other function. The type of resources employe-
d as well as the extent of their utilization define the underlying

3
Fig. 2. QPSK signal is indexed by four sidelobe levels in the radar beam.
DFRC system. From the authors’ point of view, and for the purpose of this paper organization, we consider legacy radarcentric DFRC systems are those radar systems that hold on to their legacy waveforms, bandwidths, and beams without significant alterations that stem from accommodating the communications function. As such, involving orthogonal frequency division multiplexing (OFDM) as the transmit waveforms is not typically considered a radar-centric approach.
In IM, the communication symbols, drawn from a given signal constellation, are not necessarily transmitted to the receivers as in-phase and quadrature components. Rather, each symbol can be additionally or solely represented by different radar parameter set values. In essence, to communicate different communication symbols, referred to as IM symbols, radar parameters, independently or in combinations, would assume different values, allowing for different transmit waveform characteristics and beamf-
orming. The communication receiver, being aware of the indexing, which is the dictionary mapping between the radar parameter values and the corresponding symbols, seeks to optimally decipher the transmitted signal and retrieves the information. Radar parameters, proposed to implement IM for radar-centric DFRC systems, include signal processing level parameters, like the array weights and the pulse waveform shapes, and system-level parameters, like central frequencies, signal bandwidth, and the arr-
ay aperture and configuration. It is important to note that if changing the radar parameters leads to the transmission of the exact amplitude- and phase-based communication symbols, then it is no longer an indexing and lies outside the realm of IM.
1) IM involving Radar Beam Sidelobes: The real and complex sidelobes levels, acting alone or in conjunction with multiple radar waveforms, can be used to represent the communications symbols without significant alterations to the main radar beam [12], [17]–[20]. Special cases of sidelobe variations are amplitude-shift keying (ASK) [12] and phase-shift keying (PSK) [18]. In this type of IM, the array weights change with communication symbol, resulting in corresponding changes in sidelobe levels tow-
ards the intended communication receiver. In this regard, the indexing of the array weights morphs into indexing of the sidelobe levels via Fourier transform and beamforming. A simple case is demonstrated in Fig. 2, where
Fig. 3. Antenna-selection IM combined with signal phase modulation in MIMO radar [24].
a quadrature phase-shift keying (QPSK) signal is indexed by four sidelobe levels. We maintain that if the sidelobe level values are the same as the communication constellation values, then this type of transmission is considered directional modulation, in lieu of IM.
2) IM Involving Radar Waveforms: The radar waveforms themselves can be considered an index with which to create a communication constellation, if allowed to change from one pulse repetition period to another [11], [21]. In this case, the size of the signal constellation is dictated by the radar waveform diversity. Up and down chirps, discussed in [22], represent a simple waveform diversity for binaryphase-shift keying (BPSK) constellation. It is worth noting that, in selecting the transmit radar w-
aveforms, the constantmodulus property should be maintained to enable the transmit power amplifiers to operate in saturation, as typical for radar transmission. In addition, it is known that waveform variations over slow-time cause undesirable range sidelobe modulation, hindering target detection and resolution. This problem can be avoided or mitigated by applying mismatched filters [23].
3) IM Involving Radar Antennas and Array Configuration: For MIMO radar platforms, different antennas emit orthogonal waveforms, thereby providing more indexing opportunities and higher data rates compared to phased arrays. Since multiplication of each waveform by a complex value does not change the waveform orthogonality, IM in MIMO radar can be combined with concurrent transmission of phase modulated signal. Antenna selections over the radar aperture pattern generate different sparse array config-
urations, in which case the selection matrix serves as an index for communication symbols, with the radar waveforms kept intact [25], [26]. This embedding strategy is shown in Fig. 3. Another strategy for indexing in MIMO radar is to change the pairing between the antennas and the associated radiated waveforms [27]. In this case, a permutation matrix, in lieu of the selection matrix, is applied to shuffle the waveforms assigned to the different antennas. Fig. 3 shows the combined IM, through wavef-
orm shuffling, and signal phase modulation. Code-shift keying (CSK) falls under the category of waveform diversity and it is a type of IM, where each symbol is indexed by a pulse code sequence. Each sequence, which can be in a direct sequence [21] or FH form [8], [28], is transmitted over one pulse repetition interval. CSK indexing in FH radars can be combined with antenna indexing [28], [29]. Since the multiplication of each frequency hopping pulse

4
by a complex value does not change the hopping frequency orthogonality, CSK indexing in FH radars can be combined with concurrent transmission of phase-modulated signal. A generalized approach is proposed in [24], where each symbol is represented by a code that modulates the FH waveform and each hop is multiplied by one pulse of the code, achieving a high data rate DFRC system. It is shown that the different codes can be chosen to reduce range sidelobe modulations and to maintain approximately the-
 same sidelobe levels when using non-orthogonal codes. The work in [24] includes a table that compares IM-ISAC techniques in terms of the signal processing tools employed, the achieved data rate, citing both the advantages and drawbacks.
4) IM Involving Carrier Frequency, Bandwidth, and Polarization: Radar system parameters such as carrier frequency, bandwidth, and antenna polarization can also serve as domains of IM. Indexing can be achieved by jointly exploiting multiple carrier frequencies and their allocation across antenna elements [30], [31]. This multi-carrier agility introduces additional spectral DoFs, enabling higher data rates through combined frequency–spatial index modulation. The work in [32] further employs center f-
requency, bandwidth, and antenna polarization all together as modulation indexes, demonstrating polarization as a viable IM dimension. Furthermore, these IM schemes can be integrated with phase modulation to further increase data throughput compared with IM alone [31], [33].
C. Communication-Centric Design: Radar Sensing with Communication Signals
In contrast to radar-centric designs, communication-centric ISAC systems exploit the communication signal itself for radar sensing. In this paradigm, the existing communication waveform is reused to enable radar functionality without requiring dedicated sensing resources.
1) Radar Sensing with Pilot and Reference Signals: A classical communication frame includes pilots and preambles used for channel estimation and synchronization. These deterministic signals, known to both the transmitter and receiver, can also serve as radar sensing waveforms [34], [35]. Since their primary role is channel estimation, their properties—such as constant amplitude and impulse-like autocorrelation—are naturally suitable for sensing. A representative example is WiFi-based sensing, wher-
e the receiver estimates the channel state information (CSI) from long training symbols and extracts radar parameters such as range, velocity, and motion features [36]. Similarly, IEEE 802.11ad-based radar systems exploit the preamble of single-carrier physical layer frames [37], leveraging the excellent cross-correlation properties of Golay complementary sequences. Although these reference signals yield favorable ambiguity function (AF) characteristics, their duration within the overall frame is -
relatively short compared to the data payload, often resulting in limited sensing signalto-noise ratio (SNR) relative to the total transmitted power. Nevertheless, sensing with reference signals remains attractive as a communication-standard-compatible approach that minimizes performance compromise. This motivates recent advances in pilot-based ISAC designs, where pilot symbols
Fig. 4. ISAC modulation constellation design: Standard 16QAM, geometric constellation shaping, and probabilistic constellation shaping.
are optimized to serve both channel estimation and sensing. For instance, [34] employs mutual information (MI) for ISAC pilot symbol design, while [38] investigates pilot resource allocation for flexible S&C trade-offs. Such new designs indicate that pilot and reference signals can play a key role in enabling efficient and low-overhead ISAC implementation within existing wireless standards.
2) Radar Sensing with Communication Data Payload: The sparse nature of pilot transmission, which limits sensing performance, motivates efforts to extend sensing across the whole communication frame, including the data payload. For decades, communication signals such as Digital Video Broadcasting-Terrestrial (DVB-T) have been utilized for opportunistic passive sensing, representing one of the earliest communication-centric approaches that exploit existing communication infrastructure for radar sens-
ing [39]–[42]. Early research on communication-centric DFRC systems demonstrated that existing communication waveforms, carrying data payloads, can be repurposed for monostatic radar sensing while maintaining communication performance [43]. However, the randomly modulated data payload leads to fluctuations in the AF and increased range-Doppler (RD) sidelobes, which degrade target detection and parameter estimation accuracy compared with dedicated radar waveforms.
The seminal work in [44] demonstrated that the cyclic prefix (CP) OFDM waveform outperforms other candidates such as single-carrier, orthogonal time frequency space (OTFS), and affine frequency division multiplexing (AFDM) in terms of ranging sidelobe levels in single-input single-output (SISO) links, providing a theoretical framework for sensing performance under random signaling. In parallel, several recent studies [45]–[47] have analyzed the AF characteristics of modulated communication signals-
, offering deeper insights into their inherent sensing capabilities. Building on these findings, it has been shown that communication-centric ISAC transmitters utilizing data payloads can be systematically designed to achieve flexible S&C trade-offs by exploiting available time-frequency domain DoF, including modulation constellation [47]–[51], time-domain pulse shaping [45], [46], and subcarrier power allocation [52], [53]. These approaches bridge the gap between purely opportunistic sensing and -
fully integrated ISAC designs, enabling practical signaling adaptability within existing communication frameworks.
a) Impact of Signal Constellation in OFDM-ISAC: For sensing with data payloads, it makes sense to study the impact of different constellations on performance. Focusing on CP

5
ρ = 1 (Comm. opt.) ρ = 0. 5 ρ = 0 (Sensing opt.) Sensing: range profile
0.6667 0.5841 0.3902
dmin
1.3704 1.1520 1.0000
μ4
-2 -1 0 1 2 In-phase
-2
-1
0
1
2
Quadrature
-2 -1 0 1 2 In-phase
-2
-1
0
1
2
Quadrature
-2 -1 0 1 2 In-phase
-2
-1
0
1
2
Quadrature
0 200 400 600 Range (m)
-70
-60
-50
-40
-30
= 1 (Comm. opt.) = 0.7 = 0.5 = 0.2 = 0 (Sensing opt.)
Desired target
Fig. 5. Geometric constellation shaping for communication-centric ISAC: (a) 16-ary modulation constellation designed under various S&C priority ratios, and (b) measured range profiles with matched filtering receiver, showing trade-offs between range sidelobes and MED of constellation symbol.
OFDM ISAC systems, compatible with 5G and 6G standards, it has been shown that their ranging performance under a matched filtering (MF) receiver depends on the kurtosis of the modulation constellation, or equivalently, the fourth-order moment for unit-power, zero-mean constellations. Assuming the data payloads are modulated by an M -ary constellation set S = {s1, s2, . . . , sM } with PM
m=1 sm = 0 and
1 M
PM
m=1 |sm|2 = 1, the fourth-order moment (kurtosis) is given by
μ4 = 1
M
M
X
m=1
|sm|4. (1)
The kurtosis directly influences key sensing metrics, including the integrated sidelobe level (ISL) of the auto-correlation function (ACF) (or the Doppler cut of the AF) [45], target detection probability [48], and ranging mean-square error (MSE) [51] in multi-target scenarios with MF receivers. Unitamplitude constellations from the PSK family, characterized by μ4 = 1, yield optimal sensing performance, whereas constellations with μ4 > 1 lead to degraded sensing accuracy. Notably, this relationshi-
p holds specifically for MF receivers; its impact on sensing performance differs under mismatched filtering (MMF) receivers [51], [52], [54], [55], as will be further discussed in Section V-B.
b) Constellation Shaping: Building on the previous analysis, flexible S&C trade-offs can be realized by directly designing the modulation constellation. The constellation can be optimized through probabilistic shaping [50], geometric shaping [51], or their joint design [48], as illustrated in Fig. 4. Communication performance can be characterized using metrics such as information entropy [50], MI under additive white Gaussian noise (AWGN) channels [48], and minimum Euclidean distance (MED) [51], [-
56]. For example, a joint optimization problem can be formulated to minimize the kurtosis for sensing while maximizing the MED for communication, as expressed in [51]:
minimize
{sm }M
m=1
(1 − ρ) · μ4 + ρ · (−dmin)
subject to |si − sj| ≥ dmin, ∀si ̸= sj ∈ S,
(2)
where dmin denotes the MED between modulation symbols, and ρ ∈ [0, 1] represents the priority weight between sensing and communication. Example designs with M = 16 are illustrated in Fig. 5, showing that the modulation constellation
not only influences the communication performance but also governs the ranging accuracy. This confirms that geometric constellation shaping provides an effective mechanism for flexibly balancing sensing and communication in communicationcentric ISAC systems. It is worth noting that the constellation design based on kurtosis applies exclusively to the MF receiver, while receiver-specific ISAC constellation designs are discussed in [51], [57]. Furthermore, ISAC signal modulation based on constellati-
on selection offers a practical alternative, since constellation shaping approaches typically require modifications to the demodulation process at communication receivers.
3) Index Modulation in OFDM-ISAC Systems: Beyond its application in radar-centric ISAC, IM is also an attractive modulation technique in communication-centric ISAC systems, most notably, those employing OFDM. In conventional OFDM, information is conveyed solely through the modulation symbols placed on all active subcarriers. IM, however, introduces an additional information-bearing dimension by exploiting the indices of the active subcarriers themselves [58]–[60]. By activating only a subset of su-
bcarriers and mapping part of the information onto their activation pattern, IM provides a unique mechanism to improve achievable rate and bit error rate (BER) performance without requiring extra bandwidth or transmit power [60]. When integrated into OFDM-based ISAC systems, a simple IM approach is to disjointly allocate subcarriers for radar sensing while simultaneously activating or deactivating subcarriers to provide IM for communication [24], [61], [62]. However, this setup of null subcarrier -
distributions introduces drawbacks for both functionalities. On the communication side, null subcarriers reduce the achievable data rate, whereas on the sensing side, they increase range sidelobes and degrade target detection performance. In particular, the presence of spectral holes leads to null observations of certain sensing reflections, which necessitates advanced receiver processing techniques such as compressed sensing to reconstruct the missing information [62]. An alternative approach tha-
t alleviates this problem is to use two different power levels instead of on-off subcarriers. This way, data are transmitted on all subcarriers without null observations [63]. It has recently been shown [64] that IM provides new DoFs for balancing communication throughput and radar sensing

6
Fig. 6. Illustration of joint MIMO precoding design for multi-user communication and multi-target sensing.
performance by collecting multiple observations of the received signal to fill in the holes in IM-OFDM systems. In so doing, the sparse activation of subcarriers can still leverage the benefits of IM, reducing inter-carrier interference (ICI) and improving symbol error performance, while the index domain carries additional bits with minimal overhead. From the sensing perspective, carefully designed subcarrier activation patterns can improve the AF and influence range–Doppler performance. This crea-
tes opportunities to tailor IM schemes for dual functionality. In essence, some subcarriers prioritize robust communication, while others are optimized for accurate sensing. For example, the work in [65] superimposed a dedicated sensing sequence with good auto-correlation properties, improving the sensing performance in IM-OFDM. Nevertheless, the joint design of IM-OFDM for ISAC has not been extensively explored. Most existing works consider IM as an add-on to conventional OFDM, whereas a dedicate-
d co-design that jointly optimizes index patterns, waveform structures, and sensing objectives could enable more flexible trade-offs between communication and sensing, ultimately enhancing overall system performance.
III. THE ISAC TRANSMITTER: MIMO PRECODING
DESIGN
Complementary to the modulation and signal designs discussed above, precoding can also offer additional DoF in designing ISAC trade-offs. This section overviews state-of-theart MIMO-ISAC precoding techniques, outlining the fundamental frameworks for joint radar–communication beamforming.
A. MIMO Precoding Design for ISAC
Unlike modulation approaches that embed one functionality into the platform of the other, joint signaling design treats both as co-primary objectives and balances their performance through multi-objective optimization of time–frequency–spatial resources. The main objective of joint signaling optimization is to design spatial communication precoders and MIMO radar beamforming weights for multiple transmit antennas, as illustrated in Fig. 6. To this end, one approach is to express the transmit ISAC -
signal X over L blocks as a weighted superposition of
communication signals and dedicated radar probing signals [66]–[69]. Consider a transmitter equipped with Nt antennas that serves U single-antenna communication users (CUs) while simultaneously detecting and estimating the parameters of K targets. The transmit signal with a linear block-level precoding (BLP) is then modeled as
X = WcSc + WrSr, (3)
where Wc = [w1, . . . , wU ] ∈ CNt×U denotes the communication precoder for the U users, Sc ∈ CU×L represents the communication data streams, Wr ∈ CNt×Nt is the radar beamforming matrix, and Sr ∈ CNt×L corresponds to the radar signals. The above signal model can be viewed as a generalization of the unified signal model X = WS, which is also used in the literature to provide ISAC functionality through weighted precoding optimization [70].
Importantly, the weighted-sum signal model in BLP provides additional DoF compared to the unified model [71], whose covariance matrix becomes rank-deficient when U < Nt. The auxiliary sequence Sr, which increases the DoF of the transmitted signal, can be specifically designed to have better cross-correlation and auto-correlation properties to suppress RD sidelobes in the matched filtering output, thereby improving target detection and interference suppression [72][74]. For more details of ISAC sig-
naling models, readers are referred to [66], [70].
We remark that the signal model in (3) assumes a fully digital MIMO array, where the number of transmit antennas equals the number of radio frequency chains. While this architecture provides maximum flexibility, its hardware cost and power consumption can limit practical deployment in large-scale MIMO systems [75]. To improve hardware efficiency, sparse arrays, hybrid beamforming architectures, or phased-array modules are often considered, depending on the application scenario. In such cases, the -
signal model can be readily revised or extended to hybrid beamforming [76]–[80] and multi-beam analog beamforming [81]–[83].
The joint precoding design is typically formulated as a multi-objective optimization problem that captures both sensing and communication goals. Such a formulation enables flexible trade-offs between the two functionalities while accounting for MIMO transceiver specifications such as total transmit power, per-antenna power, or peak-to-average power ratio (PAPR). Although many variations of this problem have been studied in the literature, a unified structure can be expressed as maximize
X ρf ̃c(X) ± (1 − ρ)f ̃r(X)
subject to ci(X) ≤ Ci, ∀i,
(4)
where f ̃c(X) and f ̃r(X) denote normalized performance functions for communication fc(X) and radar sensing fr(X), respectively, and ci(X) represents a system-level specification constrained by Ci (e.g., power budget or constant-modulus condition). The parameter ρ ∈ [0, 1] serves the same function as in (2). In practice, this multi-objective problem is often transformed into a single-objective problem by recasting one objective as a constraint while optimizing the other. The formulated problem for-
 ISAC signaling design is generally

7
non-convex, and can be solved using semi-definite relaxation (SDR) [71], successive convex approximation (SCA) [84], or learning-based approaches [85]–[87]. In the next section, we provide an overview of the ISAC metrics that are commonly used under the above framework. It is worth noting that a new stream of research investigates network-level ISAC optimization and has introduced corresponding network-level ISAC metrics [88]–[91]. However, as the article focuses on link-level ISAC design, it fall-
s outside the scope of this article.
B. Communication Performance Metrics
From the communication perspective, the main focus of joint signaling design is to account for both multi-user interference (MUI) and radar-induced interference at each CU. To this end, metrics such as per-user signal-to-interferenceplus-noise ratio (SINR) [66], [67], [70], achievable/sum rate [92]–[94], and MI [95], [96] have been widely adopted, all of which capture communication quality-of-service (QoS) under DFRC operation. Early work employed the total MUI energy as the performance metric [97-
]:
fc(X) = ∥HX − Sc∥2
F , (5) where H = [h1, . . . , hU ]H ∈ CU×Nt with hu ∈ CNt×1 denoting the channel between the ISAC transmitter and user u. For direct intuition on communication performance, the average per-user SINR of user u can be expressed as
fc,u(X) = |huH wu|2
PU
i=1,i̸=u |huH wi|2 + ∥huH Wr∥2 + σc2
, ∀u (6)
where σc2 represents the noise power at the CU. The denominator reflects the interference contributions, including both MUI and radar signals received at the user. Denoting (6) as γu, the achievable/sum rate can then be also derived as [92]–[94]:
fc,u(X) = log2(1 + γu), (per-user achievable rate) (7)
fc(X) =
U
X
u=1
log2(1 + γu), (sum-rate) (8)
It is important to note that the SINR expression in (6) captures only the average performance, with respect to the data stream, over an L-block transmission. Consequently, signaling (precoder) designs based on this metric guarantee average communication-symbol SINR performance regardless of the specific realization of Sc. This limitation can be addressed through symbol-level designs, which will be discussed in detail in Section IV. As observed in (6), evaluating communication performance requires -
instantaneous CSI at the transmitter, which may not always be available in practical implementations. To enhance robustness, imperfect CSI is often addressed by incorporating bounded CSI errors or statistical CSI into the design problem, ensuring that the resulting signaling provides guaranteed worst-case performance [69], [98]–[100].
C. Sensing Performance Metric
Precoding for the sensing task aims to illuminate targets using multiple antennas, where performance is primarily char
-80 -60 -40 -20 0 20 40 60 80 Angle (degree)
-20
-15
-10
-5
0
5
10
15
Transmit beampattern (dB)
Desired radar beampattern ;=0.00 (Radar-only) ;=0.25
;=0.50 ;=0.75 ;=1.00 (Comm-only)
CU 2 direction
CU 1
direction region
Target
Fig. 7. Beampattern–SINR trade-off design with Nt = 16 transmit antennas
and U = 2 users located at −45◦ and 30◦. The beampattern matching error varies with the priority weight ρ, illustrating that joint signaling design enables a flexible trade-off between sensing and communication performance.
acterized in the spatial (or angular) domain. Accordingly, the design often leverages classical metrics from MIMO radar beamforming, including beampattern matching [101][103], angle estimation Cramér–Rao lower bound (CRLB) [104], SINR and signal-to-clutter-plus-noise ratio (SCNR) [72], [105], MI [106].
1) Beampattern matching: The transmit beampattern describes the spatial distribution of radiated power across angles. For a steering vector a(θ) ∈ CNt at angle θ, the beampattern
of the ISAC signal is given by aH (θ)RXa(θ), where RX =
1
L XXH denotes the transmit covariance matrix. The objective of beampattern matching is to minimize the error between the designed ISAC beampattern and a pre-defined desired beampattern P (θ). Accordingly, the beampattern matching MSE for M angular samples {θi}M
i=1 is expressed as
fr(X) = 1
M
M
X
i=1
αP (θi) − aH (θi)RXa(θi) 2 , (9)
where α is a scaling factor. This metric has been widely adopted in MIMO radar beamforming for both target search and tracking, since it enables controlled power distribution across multiple spatial directions, even under uncertainty in the target channel. For joint ISAC signaling design with beampattern matching, readers are referred to [66], [67], [69], [71], which present various optimization algorithms for solving the formulated problem. An illustrative numerical example is shown in Fig. 7, de-
monstrating the flexible trade-off between sensing and communication performance as the priority weight ρ is varied. It is observed that as the priority weight shifts toward sensing, the resulting beampattern approaches the desired radar beampattern, whereas prioritizing communication focuses the beam toward the CUs, thereby maximizing their QoS.
2) CRLB: In joint signaling design, CRLB can be employed as a sensing performance metric, as it directly characterizes the fundamental limit of parameter estimation accuracy. The objective function can be expressed as
fr(X) = J−1(θ) 1,1 , (10)

8
5 10 15 20 25 Communication SINR (dB)
0
0.5
1
1.5
2
Root-CRB (deg)
SDR-based trade-off design ZF beamforming baseline
;=0
;=1
Flexible trade-off
Fig. 8. CRLB–SINR trade-off with Nt = 16 transmit antennas and U =
2 users located at −45◦ and 30◦. The SDR-based joint signaling design is compared with the ZF beamforming baseline, demonstrating an extended trade-off region and improved performance.
where J(θ) is the Fisher information matrix determined by the transmit covariance and the sensing channel. Minimizing CRLB in joint design improves the theoretical accuracy of target parameter estimation under power constraints. The resulting optimization problem is generally non-convex but can be handled using SDR, as demonstrated in [70]. Fig 8 illustrates the CRLB–SINR trade-off obtained from SDR-based solution compared with classical zero-forcing (ZF) beamforming. The results show that the joi-
nt design based on SDR extends the achievable trade-off region, yielding improved CRLB–SINR performance compared to the conventional baseline. Evaluating the deterministic CRLB in (10) requires prior knowledge of the true target angle, which is typically unknown in practice. To mitigate this limitation, several works [107][110] have considered the use of Bayesian CRLB as an alternative performance metric, where prior information is incorporated to relax the requirement of knowing the true paramete-
r. Beyond the presented metrics, sensing SINR/SCNR [69], MI [92], Ziv-Zakai bound [111], and Kullback-Leibler divergence [112] can also be exploited in ISAC signaling. We remark that joint signaling design continues to evolve toward handling increasingly complex and practical scenarios, while offering flexible trade-offs between the two functionalities. This trend ultimately paves the way for realizing ISAC systems that can be effectively deployed in real-world environments.
IV. INTERFERENCE EXPLOITATION IN ISAC
TRANSMISSION
Traditionally, interference in wireless communication systems has been treated as a harmful factor that degrades QoS and must be mitigated. Conventional transmitter designs with linear BLP handle MUI as detrimental and attempt to suppress it statistically over a block of symbols. As a result, instantaneous performance is not ensured, which limits overall efficiency in medium-to-high SNR regimes. This has motivated research into precoding methods that instead exploit interference at the symbol leve-
l on an instantaneous basis rather than cancel it [113]–[118]. In this section, we investigate recent advances in ISAC transmitter design with interference
Fig. 9. CI and DI regions in BPSK, QPSK, and 8PSK constellations.
exploitation. By exploiting constructive interference (CI) in joint signaling design, ISAC transmitters can enhance communication reliability while simultaneously improving instantaneous sensing performance.
A. Constructive Interference Exploitation
A breakthrough came with the concept of CI, which refers to interference that pushes received signals at CU further away from the decision boundaries of the modulated symbol constellation, thereby enhancing useful signal power. As the counterpart of CI, destructive interference (DI) is defined as interference that drives the received signal back to the decision boundaries, reducing useful signal power. Exemplary CI and DI regions for BPSK, QPSK, and 8PSK are illustrated in Fig. 9. These concepts m-
otivated the development of SLP [115], [117], which operates on a symbol-by-symbol basis and exploits both CSI and data symbol knowledge to control not only the power but also the direction of interference at CU receivers. SLP operates at the symbol timescale. This allows the transmitter to manipulate MUI in a way that makes it constructive. In a downlink (DL) multi-user multiple-input single-output (MU-MISO) system, the transmitted signal is
x=
U
X
u=1
wusu = Ws, (11)
where wu ∈ CNT is the precoder for user u, su is the modulation symbol, and s is the symbol vector. The received signal at user u, ignoring noise, is ru = hH
u x = λusu, (12)
where hu is the channel vector and λu ∈ C captures the effect of interference on the amplitude and phase of symbol su after precoding. To make interference constructive, the following CI conditions are considered to design SLP. For an M -PSK constellation, the constructive region is defined as the angular sector of width ±π/M around each symbol. Accordingly, the CI condition for user u can be expressed as
h
R(λu) − pΓuσc2
i
tan π
M ≥ I(λu) , (13)
where Γu denotes the SNR target. R(·) and I(·) denote the real and imaginary part, respectively. It should be noted that the CI concept extends to multi-level constellations, such as QAM, star-QAM, and amplitude and phase-shift keying (APSK), via symbol-scaling. For details on symbol-scaling for CI exploitation in QAM, see [119], [120]. A comprehensive overview of CI exploitation and SLP is given in [118].

9
B. Symbol-level Precoding for ISAC Transmitter Design
Recent advances in MIMO ISAC transmitter design, as discussed in Section III-A, have primarily focused on BLP. This implies that once multiplied with the data symbols, the properties of the waveform, including radar aspects such as RD sidelobes, will be subject to instantaneous variations. Unlike BLP, SLP enables each symbol to simultaneously satisfy communication constraints while shaping favorable radar characteristics. This property ensures that sensing performance metrics such as beampattern m-
atching or RD sidelobe suppression remain consistent, even with a limited number of snapshots, which is particularly valuable in highly dynamic environments [121]–[123]. With the transmit signal model x = Ws ∈ CNt in (11), the optimization problem for SLP-based joint signaling ISAC design can be generally formulated as
maximize
x ρf ̃c(x) ± (1 − ρ)f ̃r(x)
subject to fc(x) = Γu,
h
R(hH
u xe−jφu ) − pΓuσc2
i
tan π
M ≥ I(hH
u xe−jφu ) , ∀u
ci(x) ≤ Ci, ∀i,
(14)
where φu ∈ [0, 2π] is the corresponding phase of su. fr(x) denotes a sensing-oriented objective described in Section III. The CI constraints ensure that the received symbols at each CU remain in the constructive region, thereby guaranteeing the required communication QoS. The additional constraints ci(x) ≤ Ci capture system specifications such as power budget or constant-modulus conditions. This formulation highlights two important distinctions from block-level ISAC transmitter design. First, whil-
e block-level designs optimize signals only statistically, with respect to the data stream, over L snapshots, SLP guarantees that each transmit vector x contributes simultaneously to communication and sensing objectives on an instantaneous basis. Second, unlike BLP, where x is strictly a linear mapping of the data symbols s, SLP directly designs x with knowledge of s, thereby allowing symbol-by-symbol adaptation. These properties give SLPbased ISAC transceivers much finer control over instantaneou-
s S&C performance. For instance, the works in [123], [124] design MIMO DFRC transmit beamforming using SLP, thereby providing instantaneous S&C trade-offs in terms of radar beampattern shaping and CI-based SINR. With the additional consideration of PAPR, these designs also incorporate constant-modulus power constraints. The resulting non-convex problems are either relaxed to SDP formulations [124], or solved using iterative algorithms such as majorization–minimization or augmented Lagrangian metho-
ds [87], [123]. Another line of work extends the BLP-based CRLB–SINR trade-off design into the symbol-level domain [121], [124], [125], of which examples for the received symbols are shown in Fig. 10. In particular, the work in [125] demonstrates the superior performance of SLP compared to BLP when applied to near-field ISAC scenarios. Moreover, instead of CRLB, alternative sensing metrics such as radar estimation minimum mean-square error (MMSE) have
-0.3 -0.2 -0.1 0 0.1 0.2 In-phase
-0.3
-0.2
-0.1
0
0.1
0.2
Quadrature
! = 5 dB
BLP-QPSK SLP-QPSK
-0.3 -0.2 -0.1 0 0.1 0.2 In-phase
-0.3
-0.2
-0.1
0
0.1
0.2
Quadrature
! = 10 dB
BLP-QPSK SLP-QPSK
-0.4 -0.2 0 0.2 0.4 In-phase
-0.4
-0.2
0
0.2
0.4
Quadrature
! = 15 dB
BLP-QPSK SLP-QPSK
-0.5 0 0.5 In-phase
-0.5
0
0.5
Quadrature
! = 20 dB
BLP-QPSK SLP-QPSK
Fig. 10. Received symbols for different level of communication QoS under CRLB-SINR (or SNR) trade-off design with BLP and SLP.
been proposed for fr(x) [126]. These optimization problems can also be addressed by SDR or SCA, similar to their BLP counterparts. The reported results overall consistently show that SLP-based ISAC signaling achieves enhanced joint S&C performance relative to BLP-based designs, while additionally guaranteeing instantaneous symbol-level performance [121], [123]–[129]. Recent works have also extended SLP in ISAC beyond narrowband settings. In wideband MIMO-OFDM systems, SLP provides additional tempo-
ral DoF, enabling direct control of RD sidelobes through symbol-level optimization. For example, [122] addresses a key drawback of dual-functional MIMOOFDM ISAC waveforms, namely, the high RD sidelobes introduced by random data symbols in the MF receiver, which severely degrade target detection and parameter estimation. By incorporating SLP into MIMO-OFDM ISAC, both temporal and spatial DoF are exploited to directly shape the AF of the transmit signal. Specifically, the optimization problem is for-
mulated to minimize the ISL of RD maps while ensuring target illumination power and maintaining CI-based multiuser communication QoS. This demonstrates that symbollevel optimization not only transforms harmful MUI into a communication gain but also significantly enhances radar sensing capability through improved MF output.
C. Overcoming Complexity in Interference Exploitation for ISAC Design
A major barrier to the practical deployment of SLP in ISAC transmitters is its computational complexity. Because SLP-based transmitter design requires a tailored precoder for each symbol combination, the computational burden increases rapidly with the number of antennas, users, and symbol durations within a coherence interval. This challenge is further intensified in ISAC, where the design must simultaneously satisfy CI constraints for communication and radar sensingoriented objectives. Several re-
cent studies have therefore proposed algorithmic frameworks to mitigate this symbol-level complexity while retaining most of the performance benefits.

10
Fig. 11. Illustration of a downlink mono-static ISAC scenario, where the CU demodulates communication data while the sensing receiver detects targets and estimates their parameters.
One line of work focuses on optimization-driven methods. Iterative reformulations such as separable and dual optimization [130] and inversion-free alternating direction method of multipliers (ADMM) updates [131] decompose the SLP problem into parallelizable subproblems that avoid costly matrix inversions. Closed-form CI-based precoder solutions further accelerate an iterative SLP design [120], [132]–[134]. Lowcomplexity designs for large-scale antenna arrays have also been developed, where hybrid -
SLP architectures reduce the number of radio frequency chains required while maintaining interference-exploitation gains [135]. Although these methods were originally proposed for MU-MISO communication systems, they hold strong potential for extension to SLP-based ISAC designs. Another promising direction is learning-based design. Model-driven frameworks such as ADMM-SLPNet [136] employ deep unfolding to translate iterative optimization steps in SLP into trainable neural network layers, providing -
both interpretability and fast convergence. The unfolded network derived from the iterative optimization has also been applied to SLP in DFRC systems [87], achieving near-optimal S&C trade-offs with significantly reduced complexity. In addition, supervised and hybrid learning techniques can approximate dual-functional SLP waveform mappings [137], while unsupervised methods [138] learn feasible interference-exploitation solutions without requiring labeled data. These algorithmic advances indicate t-
hat the complexity challenge in SLP-based ISAC can be effectively addressed through a combination of mathematical simplification, problem restructuring, and learning-based approaches. Particularly promising are model-based learning frameworks that unfold optimization-inspired algorithms into neural architectures [87], [136], striking a practical balance between performance and complexity. Together, these developments are transforming SLP from a theoretically powerful yet computationally prohibitiv-
e technique into a practical enabler for real-time ISAC signaling with MIMO transceivers.
V. ISAC RECEIVER DESIGN
The ISAC receiver plays a critical role in achieving full dual functionality. The unified ISAC signals directly influence both radar and communication receiver designs, particularly in radar-centric IM-based ISAC and communication-centric
ISAC with data payloads. For joint receiver operation, the receiver must simultaneously decode communication data and extract sensing information from the same received signal. Realizing this dual functionality requires advanced signal processing, estimation, and receiver architectures capable of handling the coupled radar–communication tasks. Focusing on the scenario with unified ISAC signal transmission, this section reviews representative ISAC receiver design methodologies, highlighting key arc-
hitectures, processing techniques, and implementation aspects.
A. Receiver Design for Radar-Centric ISAC
Considering the ISAC scenario illustrated in Fig. 11, this subsection explores communication and sensing receiver designs with a focus on IM-based ISAC systems. In IM-based ISAC, communication data are conveyed through IM bits, requiring reliable IM bit recovery at the communication receiver. 1) Communication Receiver Design: The communication receiver in IM-based ISAC is designed to recover the active indexing pattern and corresponding data symbols. To this end, least-squares estimation is typica-
lly employed to extract the radar parameter values used for indexing and decode the embedded IM bits. In antenna-selection-based IM, the IM bits can be detected using a sparse array dictionary [25]. Let yc denote the received signal at the CU for a given pulse. The receiver estimates the active steering vector as
ˆi = argmin
i
∥yc/α − a ̄i(θ)∥2 , (15)
where α is a scaling factor and a ̄i(θ) = Φia(θ), with Φi ∈ CNt×Nt representing the antenna-selection matrix. The receiver evaluates the distance between the estimated vector and each dictionary element, selecting the index iˆ that minimizes it. Receiver designs for other forms of IM can be similarly extended using least-squares estimation. For example, [31] presents a receiver for joint antenna–frequency IM with phase modulation, while [24] provides a comprehensive overview of IM-based ISAC recei-
vers. Since the complexity of IM-based ISAC receivers increases with the size of the dictionary or IM codebook, exhaustive search across all indexing patterns becomes computationally expensive. To address this issue, [33] proposes a lowcomplexity receiver design for carrier frequency, bandwidth, and antenna polarization IM combined with phase modulation. The receiver first estimates the IM bits based on the predefined codebook and subsequently demodulates the phase symbols after compensating for t-
he corresponding IM parameters. This two-stage processing effectively decouples IM detection from phase demodulation, significantly reducing receiver complexity while maintaining reliable data recovery.
2) Sensing Receiver Design: The sensing receiver, having full knowledge of the transmitted waveform, can apply matched or mismatched filtering accordingly. However, IM involving radar system parameters and phase modulation inevitably introduces undesirable RD sidelobes that can degrade sensing accuracy. For instance, IM using chirp bandwidth variations causes fluctuation in range resolution across chirps; thus, applying a fixed-size fast Fourier transform (FFT) leads to range inconsistencies over -
slow time, distorting Doppler

11
Fig. 12. Comparisons of MF and RF: OFDM-ISAC receiver processing with data payload signals.
estimation [139]. This effect can be mitigated by employing variable-size range FFTs that adapt to the chirp bandwidth [139]. Likewise, variations in the chirp center frequency in IM-FMCW induce additional phase shifts beyond those caused by target motion, increasing Doppler sidelobe levels [140]. These distortions can be compensated by exploiting prior knowledge of the transmitted chirp parameters.
B. Receiver Design for Communication-Centric OFDM-ISAC
Another important aspect of ISAC receiver design lies in the sensing receiver processing with data payload transmission, where the characteristics of communication payload signals directly influence sensing performance. For the communicationcentric ISAC, the design of the receiver processing chain plays a critical role in determining the achievable sensing performance. Focusing on CP-OFDM-based ISAC systems, this section provides an insight on how sensing performance is governed by the receiver ar-
chitecture when using dataembedded OFDM signals. Given that the transmitted OFDM signal x ∈ CNs with Ns subcarriers is modulated from an M -ary constellation set S = {s1, s2, . . . , sM } with PM
m=1 sm = 0 and 1
M
PM
m=1 |sm|2 = 1, a frequency-domain received signal model with K targets after CP removal is given by
yr = aT HX + z, (16)
where a = [α1, α2, . . . , αK ]T ∈ CK×1 denotes the complex amplitudes that incorporate the path loss and radar cross-section (RCS) of each target. The delay-channel matrix is expressed as H = [h(τ1), h(τ2), . . . , h(τK )]T ∈ CK×Ns , where τk is the time-of-flight (ToF) from the ISAC transmitter to target k and back to the receiver. The delay steering vector is defined as h(τ ) =
1, e−j2π∆fτ , . . . , e−j2π(Ns−1)∆fτ T ∈ CNs×1, with
subcarrier spacing ∆f = B/Ns, where B denotes the signal bandwidth. The transmitted signal X is the diagonal matrix of x, i.e., X = diag(x). Finally, z denotes the AWGN at the sensing receiver, following z ∼ CN (0, σ2INs ).
TABLE I VALUES OF μ4 AND ν−2 FOR M -QAM, AND M -APSK MODULATION SCHEMES. THE APSK MODULATION FORMATS WITH CODE RATES OF 2/3 ARE DEFINED IN THE DVB STANDARD [141].
16QAM 64QAM 256QAM 16APSK 32APSK
μ4 1.32 1.38 1.40 1.25 1.41
ν−2 1.89 2.69 3.44 2.50 3.23
1) Matched Filtering Receiver: As the classical radar receiver architecture, matched filtering remains the most widely adopted radar processing due to its property to yield the optimal SNR at the output. In its basic form, MF is implemented through time-domain cross-correlation between the received echoes and the reference transmitted signal [142]. Alternatively, in CP-OFDM systems, MF processing can be performed efficiently in the frequency-domain after cyclic prefix removal [55]. An important ch-
aracteristic of MF is that its output follows the AF of the transmitted signal. Consequently, multiple target reflections appear as shifted and scaled replicas of the AF pattern in the RD domain. This property provides a direct mapping between waveform characteristics and sensing performance. The MF receiver in CP-OFDM is implemented by multiplying the received signal by the conjugate of the reference transmitted signal. The output of MF, yMF = yrXH , becomes yMF = aT H|X|2 + zMF, (17)
where zMF follows the same noise characteristics as z, assuming a unit-variance constellation. From (17), it is observed that the MF receiver preserves the noise power, while each target channel is weighted by the squared magnitude of the corresponding TX subcarrier. This indicates that an instantaneous non-flat transmit spectrum induces sidelobes in the AF, which manifest as unwanted artifacts in the multi-target range profile, as illustrated in Fig. 12. Accordingly, the effective SINR of the MF -
output for target k can be expressed as [48], [51]
SINRMF,k = N · |αk|2
(μ4 − 1) · PK
j̸=k |αj |2 + σ2 . (18) As discussed in Section II-C2, the MF output performance is directly influenced by the fourth-order moment μ4 of the modulation constellation defined in (1). A lower μ4 value yields reduced sidelobe interference, thereby improving the effective SINR and enhancing ISAC ranging performance.
2) Mismatched Filtering Receiver: Traditionally, a mismatched filter in radar receivers has been developed to overcome the limitations of the MF, effectively suppressing range sidelobes caused by imperfect TX waveforms [143]. The MMF receiver also can be employed in OFDM-based sensing, offering significantly improved sidelobe suppression at the cost of some SNR loss compared with the MF receiver. a) Reciprocal Filtering: Reciprocal filtering (RF) is a representative MMF technique widely adopted in-
 OFDM-based radar sensing [43], [54], [144], [145]. It is also known as modulation-symbol-based processing [43] or a ZF-type receiver [55]. The key idea of the reciprocal filtering receiver is to eliminate the data dependency in the received signal through element-wise division by the TX symbols. This operation is

12
implemented as yRF = yrX−1, yielding
yRF = aT H + zRF. (19)
It is observed that the output of the RF receiver is free from the effects of random signaling in the signal term, implying that it eliminates sidelobes from other delay sources. However, the RF receiver introduces noise amplification, leading to SNR degradation that depends on the modulation constellation, as illustrated in Fig. 12. The post-processed noise zRF remains zero-mean but its variance is reshaped due to the reciprocal operation, following zRF ∼ CN (0, ν−2 · σ2INs ) [52], [54], [144], w-
here ν−2 ≥ 1 denotes the inverse second-order moment of the modulation constellation S, given by
ν−2 = 1
M
M
X
m=1
|sm|−2. (20)
Since the RF receiver eliminates sidelobe interference from multiple targets, the resulting SNR for target k can be expressed as
SNRRF,k = N · |αk|2
ν−2 · σ2 . (21)
It is worth noting that the RF receiver exhibits a different dependence on the modulation constellation compared with the MF receiver, implying that the constellation design for ISAC differs between the two receiver architectures [51]. In Table I, the values of μ4 and ν−2 for QAM and APSK modulation schemes are summarized, providing insight into the sensing performance associated with specific receiver processing using data payload signals.
b) Linear MMSE Receiver: The linear MMSE (LMMSE)type receiver, also known as Wiener filtering, is another form of MMF used in radar sensing, and it has also been widely adopted for channel estimation in wireless communication systems [146]. It is generally defined as yLMMSE =
yr |X|2 + (aH a/σ2)I −1 X. Importantly, the LMMSE receiver provides a balanced trade-off between the MF and RF receivers under non-unit-amplitude constellation. While the MF maximizes output SNR but suffers from high sidelobes, and the RF suppresses sidelobes at the cost of significant noise amplification, the LMMSE receiver adjusts its filtering behavior according to the instantaneous input SNR. As a result, it achieves effective sidelobe suppression while minimizing SNR loss, yielding the improv-
ed dynamic range compared to the MF and RF receivers [54]. Although this superiority makes the LMMSE receiver a promising solution for OFDM-based ISAC systems operating under varying SNR conditions, its implementation requires prior knowledge of the target SNRs. The work in [54] provides a practical approach to realizing the LMMSE receiver for OFDM-based sensing systems. As a summary of sensing receiver design, it is important to note that the choice between MF and MMF receivers depends on several-
 factors, including the number of targets and their SNRs, clutter interference level, modulation constellation, and receiver complexity [54], [147], [148].
C. Joint Receiver Design
This subsection examines joint receiver design in a bi-static ISAC scenario where the receiver lacks knowledge of the
Fig. 13. Illustration of a joint receiver design for a bi-static ISAC scenario without prior knowledge of the transmitted ISAC signal at the receiver.
transmitted ISAC signal, as illustrated in Fig. 13. In such a setup, either the transmitter or receiver can be the base-station (BS) or CU, covering uplink (UL), downlink, or BS-to-BS bi-static configurations.
Existing studies have primarily explored joint receiver design under separate radar and communication transmissions, assuming that the two independent signals arrive synchronously [149]–[151]. This problem is often addressed using successive interference cancellation: first, the receiver detects communication data based on known communication channels while treating radar echoes as interference, then subtracts the reconstructed communication component to estimate the radar response [152]. From the-
 authors’ perspective, such schemes correspond to separate transmission rather than unified ISAC signaling, representing a special case within the broader joint receiver design framework.
Given that an Nt-antenna ISAC transmitter sends a unified ISAC signal X ∈ CNt×L, which is reflected by K targets, the received baseband signal at an ISAC receiver equipped with Nr antennas over L symbol intervals can be expressed as
Y = HX + Z, (22)
where H ∈ CNr×Nt denotes the channel matrix including sensing target parameters and Z represents additive noise and potential clutter. Assuming the transmitted signal is unprecoded, i.e., W = INt , we have X = S ∈ CNt×L. The ISAC receiver aims to jointly detect the communication data S and estimate the radar channel H. This joint receiver design problem can be formulated as [153], [154]
ˆH, Sˆ = argmin
H, S
∥Y − HS∥2
F . (23)
It should be noted that the joint estimation problem in (23) does not yield a unique solution unless additional constraints or prior knowledge of H and S are incorporated.
Under these conditions, conventional interferencecancellation and pilot-assisted receivers fail, as they rely on predefined training sequences or reference links to decouple sensing and communication components. This limitation has led to the emergence of blind estimation frameworks capable of jointly recovering communication data and radar parameters, such as time delay, Doppler shift, and angles of arrival and departure, directly from the received echo signals [154]–[156]. The resulting inferenc-
e task is inherently bilinear and nonconvex, since both the transmitted data symbols and the channel responses are unknown and

13
multiplicatively intertwined. Without appropriate structural prior knowledge, such bilinear inverse problems are ill-posed, precluding unique or stable recovery. To overcome this challenge, recent advances leverage atomic norm minimization (ANM) and its lifted variants (LANM) to impose low-rank and sparsity-promoting regularization, thereby transforming the blind recovery task into a convex optimization problem with theoretical guarantees. ANM provides a gridless approach to sparse super-resolutio-
n, capturing continuous delay-Doppler-angle features without discretization errors. Building on this, LANM introduces a structured model in which the unknown transmit waveform lies within a known low-dimensional subspace, encoded by a dictionary or compression matrix. This framework enables simultaneous estimation of radar scene parameters and communication data, solvable via SDR under certain coherence and separation conditions [154], [156]. By exploring different dictionary structures, LANM-base-
d receivers offer tunable trade-offs between estimation accuracy, sample efficiency, and computational complexity [156]. Although these blind receivers incur higher algorithmic cost and may exhibit suboptimal accuracy compared with pilot-assisted counterparts, they establish a powerful foundation for pilot-free ISAC operation, particularly in scenarios where pilot signaling is infeasible, contaminated, or spectrally inefficient. Consequently, ANM and related blind recovery approaches represent a c-
ritical step toward high-resolution and spectrum-efficient ISAC receiver architectures. Learning-based ISAC receivers for joint data and target parameter estimation have recently emerged to address computational complexity and performance degradation in timevarying environments. A representative data-driven approach is a two-stage transformer-based receiver that performs slidingwindow symbol detection followed by MUSIC-based angle–delay estimation, achieving robust performance with minimal trainin-
g and strong generalization under dynamic channels [153]. In parallel, a model-driven ISAC receiver proposed in [157] unrolls classical estimation algorithms for passive sensing and data recovery into trainable layers, enabling endto-end learning with interpretable structure. This hybrid framework demonstrates significant gains in both data demodulation and sensing parameter estimation compared with conventional signal demodulation methods, leveraging both pilot- and dataassisted sensing.
VI. FULL-DUPLEX ISAC TRANSCEIVER DESIGN
The term (in-band) full-duplex [158] refers to wireless systems in which a transceiver simultaneously transmits and receives (STAR) on the same frequency band. At the physical layer, full-duplex (FD) operation introduces the inherent challenge of self-interference (SI) [159], i.e., the FD transceiver’s own transmission interferes with its reception. This phenomenon is reasonably ignored in the previous sections, as in much of the cited ISAC literature, when the focus is on the integrated performan-
ce of communication and sensing, as well as the trade-off or synergy between these functionalities. As illustrated in Fig. 14, full-duplex ISAC pertains only to monostatic scenarios, in which a base station-like transceiver’s
receiver operates as a radar to extract information about targets or the surrounding environment, while its transmitter simultaneously sends radar and/or communication signals. Thus, the same MIMO antenna system is used simultaneously in downlink and uplink over the same frequency band. A full-duplex MIMO system is usually pseudo-bistatic, in the sense that the transmit and receive arrays may be physically separate but located nearby, or a single array may be divided into transmit and receive sub--
arrays. Nevertheless, all pseudobistatic configurations, where STAR operation takes place within the same site, are regarded as monostatic, and the direct interference from a CU or another ISAC transceiver in true bistatic setups is not considered as SI. The presence of SI inherently couples the transmit and receive designs, both in terms of its mitigation and the overall ISAC operation. A monostatic setup can, therefore, jointly design both sides in a non-distributed manner, as discussed in this -
section.
A. Full-Duplex Integrated Sensing and Communications
Full-duplex ISAC scenarios can be characterized into two classes according to Fig. 14 based on whether the sensing function is integrated with downlink or uplink communication function. The fundamental difference between the classes comes from self-interference exploitation in the spirit of Section IV: In downlink ISAC, the harmful SI signal is essentially a short-delay multipath component within the useful sensing signal, while the SI is only harmful for sensing in uplink ISAC. In principle, it w-
ould be possible to imagine also a hybrid of the classes, which integrates sensing and communications in both downlink and uplink simultaneously, but research on such scenarios is still very limited.
1) Monostatic Downlink Sensing: As illustrated on the scenario (a) of Fig. 14, full-duplex downlink ISAC means using downlink transmissions for sensing in a monostatic manner. The previous received signal models are updated to include self-interference through the self-interference channel Hsi as
Y = HX = (Hr + Hsi)X, (24)
where X and Y are transmitted and received signals, respectively, while Hr is the radar channel including target parameters. The system applies BLP to generate the ISAC transmitted waveform as per (3). The system aims at transmitting communication data Sc in X to downlink CUs, while simultaneously estimating from Y the target channel Hr within the combined channel H by either mitigating the effect of HsiX or taking it into account in joint transceiver design. 2) Bistatic Uplink Sensing: As illustr-
ated on the scenario (b) of Fig. 14, full-duplex uplink ISAC means using uplink transmissions for sensing in a bistatic manner while simultaneous downlink communication transmissions cause selfinterference through the self-interference channel Hsi. The model of the received signal is updated as
Y = HrXcu + HsiX, (25)
where Xcu and X are signals transmitted by the CUs and the ISAC transceiver, respectively. Like above, the system generates the transmitted waveform as X = WcScd + WrSr per (3), where Scd is downlink communication signals and

14
Fig. 14. Scenarios for full-duplex integrated communication and sensing, which are inherently subject to self-interference within the MIMO transceiver.
Sr equals to zero. The system aims at transmitting communication data Scd in X to downlink CUs while simultaneously estimating from Y the target channel Hr under the SI signal HsiX by either mitigating the effect thereof or taking it into account in joint transceiver design. The system may also aim at simultaneously receiving an uplink communication data signal Scu transmitted in Xcu so that it operates in a full-duplex manner also from the plain communications perspective.
3) Hybrid Downlink–Uplink Sensing: A comprehensive full-duplex ISAC system might also perform simultaneously both downlink monostatic and uplink bistatic sensing with both downlink and uplink communication data transmission. The signal model would be a combination of the above:
Y = HruXcu + HX = HruXcu + (Hrd + Hsi)X, (26)
which now contains separate radar channels Hru and Hrd for uplink and downlink sensing, respectively. In such full-duplex hybrid ISAC systems, the monostatic downlink sensing part becomes particularly difficult because it needs to perform under both the self-interference signal HsiX and the interference signal HruXcu from uplink sensing. Developing the feasibility of the concept is proposed as a quest for future research.
B. Self-Interference Mitigation
The original classification of self-interference mitigation schemes in full-duplex MIMO relaying [160] holds also for full-duplex MIMO-ISAC systems: Physical isolation, timedomain cancellation, and spatial-domain suppression; all these can be passive or active means. In fact, the mitigation schemes surveyed next could be applied with any full-duplex MIMO transceiver, because their purpose is to minimize (the effect of) the self-interference signal HsiX in (24)–(26) by modifying
Hsi and X into ˆHsi and Xˆ , respectively, before transmission
or by modifying Y into Yˆ before processing for sensing, while limiting the collateral effect to sensing and communications. Typically, the desirable level of SI suppression in full-duplex operation exceeds 100 dB [158].
1) Physical Isolation: It would be highly beneficial to design the full-duplex array architecture to begin with in such a way that Hsi → ˆHsi ≈ 0. However, in practice, physical isolation schemes can only somewhat reduce the SI leakage at best through some ˆHsi with lower gain. Using the same antenna element for transmitting and receiving is feasible in full-duplex SISO-ISAC, where a passive circulator or an equivalent active component (of which there are many variants) allows a degree of transmit-
ter-receiver isolation. However, in full-duplex MIMO-ISAC, such components cannot mitigate inter-antenna interference, even if intra-antenna interference is suppressed. Thus, full-duplex MIMO-ISAC arrays are usually implemented with two separate arrays or at least sub-arrays for transmitting and receiving. The (sub-)array separation enables passive isolation through propagation distance, element directivity, placing isolating or destructively resonating materials, and obstacles between the (sub-)a-
rrays as well as active means such as meta-materials [161], [162] to control the SI coupling. 2) Time-Domain Cancellation: Time-domain cancellation refers to all subtractive means by which
Yˆ = Y −  ̃HsiX ̃ , (27)
where H ̃ si and  ̃X are estimates of Hsi and X, respectively. Ideally the self-interference signal HsiX in (24)–(26) would
then disappear from Yˆ without any collateral effect to sensing and communications. However, in practice, H ̃ si is only an imperfect estimate of the true channel. Moreover, although X is theoretically known as X ̃ , transmitter hardware impairments, such as nonlinear distortion, phase noise and offset, and transmitter noise, make X ̃ deviate from the actual transmitted signal X. Subtractive cancellation can be implemented at analog or digital baseband, intermediate frequency band and radio freque-
ncy band within the transceiver chains. Nevertheless, implementations outside the digital baseband are generally prohibitively complex for full-duplex MIMO-ISAC systems, as they would require a dedicated electronic cancellation circuit between every pair of transmit and receive antennas.
3) Spatial-Domain Suppression: Spatial-domain suppression refers to schemes that modify the transmit and receive beamforming by transmitting ˆX = WtxX and receiving
Yˆ = WrxY (28)
(2=4) WrxHrWtxX + WrxHsiWtxX
(2=5) WrxHrXcu + WrxHsiWtxX
(2=6) WrxHruXcu + WrxHrdWtxX + WrxHsiWtxX
instead of (24)–(26), where Wtx and Wrx are corresponding spatial filtering matrices. The objective is to spatially suppress the last term in any of the above variations such that WrxHsi ≈ 0, HsiWtx ≈ 0, WrxHsiWtx ≈ 0. If achieving exact nulls is not feasible, these products should at least be minimized according to an appropriate metric, while simultaneously ensuring that the radar channels Hr, Hru, or Hrd are affected as little as possible, such that sensing performance remains intact when accou-
nting for the spatial filtering applied by Wtx and Wrx. Here, downlink ISAC and uplink ISAC are fundamentally different in the sense that the receive filter Wrx affects obviously both, whereas the transmit

15
filter Wtx affects only the former, so that HsiWtx ≈ 0 is reasonable.
C. Full-Duplex ISAC Transceiver Design
The joint design of full-duplex MIMO transceivers is one of the least researched branch of ISAC studies. It is the next step from the spatial-domain suppression described above into designs that optimize communications and sensing performance explicitly taking into account the self-interference. Such multiobjective optimization problems can be expressed with the same unified structure as in (4), but the normalized sensing metric f ̃r(X) needs to model the self-interference per (24)(26) or addition-
al constraints ci(HsiX) ≤ Ci need to be introduced for limiting the effect of self-interference. A prominent solution [163] is based on spatial-domain suppression to transmit ˆX = WtxX and beampattern matching at M angular samples per Section III, for which the sensing performance metric in (9) is updated as follows:
fr(X) = 1
M
M
X
i=1
αP (θi) − aH (θi)WtxRXWH
txa(θi) 2 ,
(29) while Wtx is chosen such that HsiWtx = 0. The SI suppression is achieved using the Moore–Penrose pseudoinverse H+
si of the SI channel Hsi as Wtx = I − HH
si (H+
si)H
due to the identity Hsi = HsiHH
si (H+
si)H . Accordingly, the solution matches the designed full-duplex beampattern with the pre-defined desired beampattern P (θ) while eliminating SI. Nevertheless, the original solution in [163] is a bit more involved due to the considered hybrid analog–digital array architecture at mm-wave frequencies.
D. Recent Advances in Full-Duplex MIMO-ISAC
The full-duplex capability has been recognized as an enabler for ISAC [164], although it is already a necessity for the downlink ISAC, where the SI is unavoidable as explained above. On the other hand, the full-duplex capability in itself is considered an essential technology in 6G evolution [165]. Full-duplex ISAC is further surveyed in [166] and, with MIMO transceivers, in [167]. The development of general full-duplex MIMO transceivers [168] also facilitates full-duplex MIMOISAC, e.g., to reduce-
 complexity and facilitate distributed processing [169] as well as to implement full-duplex wideband MIMO [170] and massive MIMO systems [171]–[173]. Some state-of-the-art works consider also ISAC or, in other words, multi-function systems explicitly [174], although there is much room for original research. The applications of full-duplex ISAC are currently rapidly emerging. The research in [175] develops a full-duplex MIMO BS for near-ground precipitation sensing. Some state-ofthe-art works devel-
op spatial-domain suppression and joint transceiver design using the aforementioned sub-array configuration [176], [177], while most works on MIMO-OFDM ISAC [79], [178] still presume that the self-interference problem is implicitly solved for downlink ISAC BSs. Vehicular applications [179] are also timely for full-duplex ISAC, where the development is progressing towards MIMO systems. As a
(a) (b)
Fig. 15. ISAC security threat scenarios with communication data eavesdroppers. (a) External communication eavesdropper in the ISAC coverage area. (b) Malicious sensing target acting as an data eavesdropper.
very recent concept, fluid-antenna system (FAS) is a promising solution for a full-duplex ISAC system, where a BS communicates simultaneously with downlink and uplink users while performing target sensing [180].
VII. SECURE ISAC TRANSCEIVER: DATA SECURITY
The security of information transfer in wireless communication systems has been a long-standing challenge [181]. PLS techniques have been extensively studied as a builtin defense mechanism complementing upper-layer encryption and authentication techniques [182]. However, unlike conventional wireless systems, ISAC introduces new data security vulnerabilities at the physical layer due to its inherent dualfunctionality of communication and radar sensing. Beyond the classical scenario where an externa-
l eavesdropper (Eve) resides within the ISAC coverage area, as illustrated in Fig. 15(a), a unique threat arises when the sensing target itself acts as a malicious eavesdropper. In ISAC scenarios, target illumination is carried out with a data-carrying probing signal. This presents the opportunity to the target to behave as an unauthorized receiver, attempting to extract information embedded in the transmitted waveform, as shown in Fig. 15(b). This dual-functionality complicates the application of-
 conventional PLS strategies, since it must simultaneously support target illumination and secure data transmission. Therefore, this ISAC data-security scenario excludes the use of large classes of classical PLS technologies such as secure beamforming and null steering, since steering nulls toward the target/Eve would result in no illumination of the target and thus inhibit the sensing functionality. Instead, the aim of the ISAC transmitter is to illuminate the target with a high-power beam while -
using a signal that prevents eavesdropping of the data. In this section, we discuss recent advances in data-secure ISAC transceiver design, focusing on directional modulation (DM), MIMO signaling design, and jamming functionality to counteract eavesdropping threats while maintaining reliable sensing functionality.
A. ISAC Data Security with Artificial Noise
Artificial noise (AN)-aided transmission has been established as one of the most effective PLS techniques [183][185]. In such designs, the transmitter injects carefully structured AN into the transmitted waveform, acting as a jamming component that degrades Eve’s reception. Unlike conventional

16
PLS, AN in data-secure ISAC transmission simultaneously supports radar sensing within the same spectral, temporal, and spatial resources, ensuring that its presence does not compromise sensing accuracy or target detection performance as well as the communication performance of the CUs [186][194]. The AN-aided MU-MISO transmit signal serving U singleantenna users can be expressed as
X = WcSc + N, (30)
where N ∈ CNt×L denotes the AN component, and its covariance matrix is given by RN = 1
L NNH . Assuming a sufficiently large block length L, the communication data and AN are considered statistically independent. When the sensing target acts as an eavesdropper, the received signal at Eve can be modeled as
yE = βEaH (θ)X + zE, (31)
where βE denotes the path-loss coefficient, a(θ) is the transmit steering vector toward direction θ, and zE represents AWGN following zE ∼ CN (0, σ2
EI). For the legitimate users, the received signal model follows that presented in Section III-A.
1) Data Security Performance Metric: The secrecy rate (SR) has been widely adopted as a data security metric [183], [195], [196]. The SR quantifies the rate gap between the legitimate user and Eve, directly reflecting the confidentiality of information transmission. Similarly, data-secure ISAC signaling design employs the SR as the main measure of communication secrecy. From the received signal model of Eve in (31), the achievable rate at Eve is expressed as
RE = log2 1 + |βE|2aH (θ)Rca
|βE|2aH (θ)RN a + σ2
E
, (32)
where Rc denotes the covariance matrix of the communication signal. Using the achievable rate of the legitimate user u, denoted by RB,u in (7), the worst-case achievable SR is defined as [187], [191]
Rs(X) = muin RB,u − RE
+, (33)
where [·]+ denotes the operator max(·, 0). The sum SR also can be exploited to describe the overall data security measure of the DFRC system [186], [197]. With this SR metric, various optimization problems for data-secure ISAC signaling can be formulated by jointly considering the radar sensing and communication objectives described in Section III-A.
2) Optimization for Data-Secure ISAC Signaling: The optimization problem for data-secure ISAC signaling is generally formulated by adding the SR constraint to the joint signaling design problem in (4). The goal is to achieve desired sensing and communication performance while guaranteeing a required level of security. This formulation inherently introduces a new trade-off among sensing, communication, and data security. Alternatively, the problem can be reformulated as a reciprocal optimization fr-
amework, where one of the objectives, sensing, communication, or data security, is selected as the objective function, while the remaining metrics are enforced as constraints. Such a formulation enables flexible prioritization depending on system requirements, available DoF, and target performance levels.
Fig. 16. AN-aided data-secure ISAC design [187] with Nt = 16 transmit antennas and U = 2 users with SINR threshold Γu = 10dB and various target location uncertainty ∆θ.
One representative example in [187] considers the joint design of data-secure ISAC signaling by maximizing the SR while guaranteeing both communication and sensing performance. Specifically, the problem aims to minimize the Eve’s SNR under per-user SINR constraints for legitimate CUs, radar beampattern matching accuracy, and total transmit power constraints. On the other hand, the work in [198], employing CRLB as the sensing metric, maximizes the SR under similar communication and sensing constrai-
nts. Accordingly, the general joint signaling design problem for maximizing the SR can be expressed as maximize
X Rs(X)
subject to fc(X) ≥ Γu, ∀u,
fr(X) ≤ εr,
ci(X) ≤ Ci, ∀i,
(34)
where Γu denotes the performance threshold for each CU (e.g., SINR or achievable rate), fr(X) represents the sensing metric as discussed in Section III-A, and εr is the sensing tolerance level. The additional constraints ci(X) ≤ Ci capture system specifications such as total power, per-antenna power, or constant-modulus conditions. This formulation jointly characterizes the three-way trade-off among communication QoS, sensing accuracy, and data security, illustrating how the spatial DoFs of the tr-
ansmitter can be adaptively allocated to achieve data-secure and efficient ISAC operation. The resulting optimization problems are typically non-convex, and solutions have been developed using SDR, SCA, and iterative approaches [186], [187], [191].
3) Uncertainty on Target Eavesdropper: One of the key challenges in data-secure ISAC transmitter design lies in the uncertainty of the Eve’s location, as the target Eve may act as a non-cooperative or even mobile object. Consequently, assuming perfect knowledge of Eve’s position or channel may lead to misleading or overly optimistic results in practical ISAC PLS implementations. To address this issue, recent advances in data-secure ISAC transmitter designs incorporate target uncertainty into the o-
ptimization framework through

17
robust or probabilistic formulations [187], [191], [193], [198]. In the context of beampattern-based data-secure ISAC design, one intuitive approach is to broaden the mainlobe width to cover a wider angular region of potential target positions while maintaining low sidelobe power to avoid degrading communication performance [187]. Specifically, by defining the angular region of interest as [θ0 − ∆θ, θ0 + ∆θ], where ∆θ denotes the angular uncertainty centered at θ0, the desired beampattern P (θ) in-
 (9) can be adaptively shaped to ensure robust illumination and reliable sensing of uncertain targets while maintaining secrecy against potential eavesdroppers. The example beampatterns of AN-aided data-secure ISAC with various uncertainty region is illustrated in Fig. 16. It is also worth noting that the work in [193] extends this concept beyond angular uncertainty by incorporating the effects of multi-path fading uncertainty at Eve. By jointly modeling both angular and fading variations, a tract-
able bound for the combined uncertainty region is developed. On the other hand, CRLB-based data-secure ISAC design, which targets a more fundamental representation of sensing performance, must also account for target uncertainty [110], [197], [198]. The posterior CRLB [198] and Bayesian CRLB [110], both incorporating prior knowledge of the target distribution, have been adopted as sensing metrics to effectively mitigate the impact of target uncertainty.
B. ISAC Data Security Exploiting Subcarrier Interference
An emerging approach for ISAC data security is waveformdefined PLS, which leverages non-orthogonal waveforms to enhance data transmission confidentiality [199]–[202]. The core idea is to employ spectrally efficient frequency-division multiplexing (SEFDM) [203], which intentionally introduces ICI by compressing subcarrier spacing below that of conventional OFDM. This deliberate interference prevents Eve from recovering data, while the legitimate CU, aware of the waveform structure, can successfully-
 demodulate it. Accordingly, SEFDM enhances both spectral efficiency and data security. SEFDM waveforms can be extended to secure ISAC signaling by adopting them within joint precoding design frameworks [200]. The time-domain sample of the SEFDM waveform is expressed as
Xk = √1Q
Ns −1
X
n=0
sne j2πnkα
Q , (35)
where k = 0, 1, . . . , Q − 1 and Q = κNs. Here, κ denotes the oversampling factor and α ≤ 1 is the bandwidth compression factor. When α = 1, the waveform reduces to standard OFDM. The use of SEFDM for data-secure ISAC offers two key advantages. First, it does not require CSI at the transmitter, enabling secure operation even without Eve’s CSI. Second, waveform-defined security remains effective even when Eve is spatially close to the legitimate CU, where AN-aided precoding typically fails due to -
spatial correlation [200]. Owing to these properties, SEFDM-based ISAC represents a promising and practical direction for achieving robust data security without additional signaling overhead.
Fig. 17. DM for data-secure DFRC systems.
C. ISAC Data Security with Directional Modulation
Directional modulation (DM) has been extensively studied as a physical-layer security technique for wireless communications [133], [204]–[209]. DM is inherently a secure approach, as unlike classical modulation that shapes the data constellation at the transmitter, DM aims to create the desired constellation at the intended receiver, thereby preventing data detection at a receiver with an uncorrelated channel. As such, the symbols are directly embedded into the beamforming process by manipulating -
beamforming weights. In multi-beam transmission scenarios, DM provides the flexibility to securely deliver multiple signals across the user spatial directions with higher SNR than those in other directions. The main difference between DM in communications and DM in ISAC is that the latter typically has spatial DoF tied in producing a desirable radar beam.
1) Radar-Centric Directional Modulation: The role of DM in radar has recently gained attention in the context of radarcentric DFRC architecture. Essentially, DFRC systems that set the radar beam complex values, or the spatial response, equal to the communication symbols for intended users can be viewed as performing DM. Since the radar main beam must remain intact, providing the highest attainable gain, DM can be readily applied in the sidelobes. A broader generalization arises when the communicat-
ion symbols and beam values are not identical but, instead, are related through a dictionary which constitutes a form IM, as discussed in Section II-B.
In radar-centric DFRC systems, data security against eavesdropping is not typically a primary design objective but instead emerges as a byproduct of maintaining close and low sidelobe levels across the field of view, except in the directions of intended users, over multiple beams. In this context, data security is enhanced when Eve observes a more compact sidelobe constellation—both in magnitude and potentially in phase—compared with a rather spread constellation points designed for the intended u-
sers to satisfy a preset probability of error.
The design of a security-driven radar-centric DFRC transmitter of Nt antennas can be achieved by solving the following

18
-2 -1 0 1 2 In-phase
-2
-1
0
1
2
Quadrature
Eve (CI) Legitimate CU (CI)
-2 -1 0 1 2 In-phase
-2
-1
0
1
2
Quadrature
Eve (CI-DI) Legitimate CU (CI-DI)
Fig. 18. Received constellations at the legitimate CU and Eve using CI and CI-DI techniques under QPSK modulation for ISAC data security with DM [212].
optimization problem [210]:
minimize
wi1 ,...,iU
||wrad − wi1,...,iU ||
subject to wH
i1,...,iU a(θu) = Su,iu , ∀u,
Data Security constraints for Eve,
(36)
where U is the number of users, a(θu) and θu are, respectively, the Nt-dimensional steering vector of the u-th user and the corresponding angle. The first term of the above cost function, wrad, is the desired radar beamformer weight vector, whereas the second term, wi1,...,iU , is the designed weight vector associated with the U × 1 vector of symbols, si1,...,iU = [S1,i1 , . . . , SU,iU ∈ ψU ]T . The symbol associated with the u-th user is selected from the dictionary of size Lu, which is given by
ψu = {Su,1, . . . , Su,Lu }, u = 1, . . . U. (37)
Without data security constraints, the constellation seen by Eve is given by the complex sidelobe gains at its direction. These values are different in magnitude and phase from those set at the user directions, most notably the former are closer in magnitudes. This evident across all directions in Fig. 17, which shows the designed transmit power radiation pattern with 32 antennas for two users at −40◦ and 60◦, each has four symbols, leading to sixteen designed beams. It is important to observe fro-
m Fig. 17 that the main beam remains intact, whereas most variations are exhibited in the sidelobes. Since data security would benefit from more compact constellation at the non-user directions, the work in [211] introduced a data security constraint that forces the complex sidelobe gains towards Eve to be equal and, as such, making it more difficult to decipher the information. Such constraint, however, consumes additional degrees of freedom. It also requires either knowledge of the Eve’s directi-
on, or channel, otherwise, it enforces such constraint at different presumed directions.
2) Constructive–Destructive Interference Exploitation: Beyond DM in radar-centric ISAC for data security, DM schemes exploiting CI and DI can be integrated into the joint precoding design of data-secure ISAC systems. The key idea is to utilize CI to push the received signals at the legitimate CU farther away from the decision boundaries of modulated symbols, thereby improving communication QoS. Meanwhile, DI can be leveraged to degrade the information-carrying signals received by potential target -
Eves while maintaining effective target illumination [212]. As discussed in Section IV, SLP can in
tentionally force the received symbols into CI or DI regions of the modulation constellation [208]. Accordingly, interference exploitation enables more power-efficient secure transmission compared to AN-aided designs, achieving an enhanced tradeoff between secure communication and sensing performance. Unlike conventional DM in PLS, interference exploitation for ISAC security jointly considers both secure communication and sensing performance. Although the CI-based joint precoding design in (14) sc-
rambles Eve’s received signals due to the nature of DM, it cannot fully guarantee data security when Eve’s channel is correlated with that of the legitimate CU. To address this issue, the seminal work in [212] introduced DI constraints on Eve’s received signals, enabling more secure transmission than the CI-only precoding scheme, referred to as the CI–DI technique. As illustrated in Fig. 9, SLP aims to force Eve’s received symbols into the DI regions. For QPSK, this DI region can be divided into t-
hree distinct zones, where Eve’s received signal may fall into any of them. Readers are referred to equation (35) in [212] for the detailed formulation of these DI constraints. Fig. 18 illustrates exemplary received signal constellations at the legitimate CU and Eve using CI and CI–DI techniques. One key advantage of the CI–DI technique is its ability to achieve more secure data transmission even when the target Eve and CU are spatially correlated. It is worth noting that the impact of target loca-
tion uncertainty in data-secure ISAC with interference exploitation can be mitigated through Bayesian CRB optimization [110], or by adopting approaches similar to those used in AN-aided data-secure ISAC transmission.
D. Sensing-Assisted Data-Secure ISAC Design
Apart from introducing new security threats, ISAC also offers unique opportunities to enhance communication data security. Owing to the sensing functionality of the DFRC transceiver, PLS techniques become more feasible, as the system can exploit sensing to detect potential Eves and, at a minimum, estimate their channels or directions, thereby improving communication secrecy through more accurate CSI of the Eves [213]–[217]. The main idea of sensing-assisted, data-secure ISAC design is to first tra-
nsmit probing signals to detect potential Eves, both active and passive, and estimate their channel parameters. Based on this information, datasecure ISAC signaling is then designed to achieve the desired level of data security while ensuring satisfactory sensing and legitimate communication performance. This establishes a new synergy between radar sensing and secure communication, providing mutual benefits for both functionalities. A representative work in [215] developed an iterative design fram-
ework with sensing-assisted data-secure ISAC. In the initial stage, the transmitter sends an omni-directional probing signal to estimate the parameters of potential eavesdroppers. The sensing results are then used to extract the Eve’s direction and enable the characterization of the SR. In the next stage, the transmission aims to maximize the SR while refining the transmit beampattern search region based on the CRLB, which characterizes the variance of the angle estimation error of the Eves. To th-
is end, a weighted-sum optimization problem

19
(a) (b)
Fig. 19. ISAC security threat scenarios with passive sensing eavesdropper: (a) a CU of the network acts as Eve, and (b) a passive radar acts as Eve, while remaining silent.
is formulated to achieve a trade-off between sensing and secure communication performance. The key effect of this design is that by iteratively refining the transmit beampattern using updated estimation results, the transmitter effectively reduces the uncertainty in Eve’s channel, thereby enhancing the achievable SR compared with designs that lack Eve’s channel information. A similar approach in [218] divides the process into two distinct stages: first, searching for potential eavesdroppers, and t-
hen focusing on secure communication. This protocol is optimized with respect to the number of searching beams and the beamforming design for secure data transmission. More recently, target-tracking capability using extended Kalman filtering has been integrated with ISAC PLS design to handle moving eavesdroppers, jointly optimizing power consumption, legitimate user scheduling, and target-tracking performance [217]. These studies consistently report that sensingassisted schemes for PLS significant-
ly enhance secure communication performance compared with conventional AN-aided data-secure signaling. This observation highlights that radar sensing can be further leveraged to enhance the overall data security of future wireless networks.
VIII. SECURE ISAC TRANSCEIVER: SENSING SECURITY
Integrating sensing capabilities into wireless networks exposes new vulnerabilities in sensing security. The high-power illumination used for environmental sensing makes opportunistic sensing signals widely accessible [219], allowing unauthorized third parties to exploit these signals to independently infer information about targets and surrounding environments without being compelled to transmit and thereby, exposed [220], [221]. Unlike data transmission, sensing does not involve an encrypted inf-
ormation link, which means that a passive radar eavesdropper can exploit the same ISAC signal as both a reference and a surveillance waveform. In this regard, safeguarding sensing functionality must be achieved through physical layer strategies that intentionally distort or mask the target-related channel information, thereby misleading the eavesdropper [222]. Table II summarizes sensing security vulnerabilities in ISAC and possible solutions that will be discussed in the following subsections.
A. Jamming Design for Sensing Security
Jamming has long been employed as an electronic countermeasure to disrupt unwanted receivers by intentionally
TABLE II OVERVIEW OF SENSING SECURITY VULNERABILITIES IN ISAC SYSTEMS AND REPRESENTATIVE COUNTERMEASURES.
transmitting interference signals [223]. In sensing-secure ISAC transceiver design, this jamming functionality can be integrated alongside sensing and communication operations [187]. Similar to PLS techniques for data security, AN can again be utilized, this time to protect the sensing functionality in ISAC by acting as a form of controlled jamming. However, since radar sensing inherently seeks reliable detection and parameter estimation, the design methodologies used for data-secure ISAC cannot b-
e directly applied. Instead, sensing security requires careful consideration of appropriate performance metrics that reflect both the protection level and sensing accuracy.
1) Eavesdropper-Aware Design: When the CSI or spatial location of Eve is available at the transmitter, the design of secure sensing becomes analogous to that of data security. This scenario may arise when a CU of the network, whose CSI and location is typically known, also attempts to act as an Eve, as illustrated in Fig. 19(a). An early work in [224] investigates this case by employing AN. In the proposed secure-sensing ISAC framework, sensing MI is adopted as the performance metric for both the -
legitimate receiver and Eve. Based on the signal model in (30), the key mechanism enabling sensing security lies in the knowledge disparity of the embedded AN between the legitimate sensing receiver and Eve. The corresponding optimization problem maximizes the legitimate sensing MI while constraining Eve’s sensing MI and the communication SINR, thereby ensuring both sensing reliability and confidentiality.
This concept is further extended in [225], where the sensing target of the ISAC BS itself is regarded as a potential sensing Eve that attempts to detect and estimate other targets using DL ISAC signals. More recently, reconfigurable intelligent surface (RIS)-assisted ISAC designs for sensing security have been proposed, aiming to degrade the target SINR at Eve while guaranteeing the legitimate sensing SINR and communication QoS [226]. The key insight in this approach is that the RISreflected signa-
l toward Eve acts as interference relative to the target-reflected signal. Hence, by controlling the power of these components, the legitimate transmitter can deny target detection by Eve, particularly when Eve has no knowledge of the RIS location. Although these initial works open new directions for sensing security in ISAC, they rely on a strong assumption that the legitimate ISAC transmitter has perfect knowledge of both Eve’s CSI and the target–Eve channel. In practice, this assumption is rare-
ly valid. Therefore, future research should pursue more practical solutions that account for target uncertainty and imperfect or stochastic Eve CSI, which remain largely unexplored.

20
Fig. 20. Ambiguity function engineering with artificial peaks to secure sensing functionality in ISAC.
Fig. 21. RD map at passive sensing eavesdropper without (left) and with (right) AF control.
2) Eavesdropper-Agnostic Design: In the eavesdropperagnostic approach, the ISAC transmitter must ensure sensing confidentiality without any prior knowledge of potential eavesdroppers’ locations or channels. Although this is inherently a difficult problem that presents significant design challenges, several unique opportunities in ISAC systems can be exploited to achieve practical and robust sensing security. From the perspective of jamming design at the ISAC transmitter, environmental scatterers c-
an serve as natural enablers for deceptive jamming against Eve [227]. The core idea is to intentionally illuminate selected scatterers together with the intended target so that the resulting reflections act as clutter interference at Eve. These additional echoes distort Eve’s sensing observations, degrading its ability to detect or localize the target—particularly when Eve lacks prior knowledge of the presence or geometry of the scatterers. Note that deliberately illuminating scatterers consumes t-
ransmit power and spatial DoFs, which may reduce resources available for legitimate sensing and communication. Moreover, clutter-based jamming mainly induces angle-of-arrival (AoA) deception and has limited effectiveness in obscuring range or Doppler, underscoring the need for complementary waveform- or modulation-level countermeasures.
B. Ambiguity Function Engineering
Complementary to the above signal- and beamforming-level designs, sensing-secure approaches can also be pursued at the ambiguity-function level. A passive radar typically exploits two signals of opportunity: a direct-path reference signal and a target-reflected signal. By cross-correlating these two
signals, the passive radar constructs RD-domain measurements to detect and estimate target parameters [40]. Building on this observation, an Eve-agnostic sensing security technique can be developed by deliberately shaping or distorting the AF of ISAC waveforms [52]. Through proper AF engineering, the legitimate receiver can preserve reliable sensing performance, whereas an unauthorized passive radar eavesdropper experiences degraded RD resolution or misleading parameter estimation, effectively con-
cealing the true target information.
The motivation behind AF engineering arises from the inherent information asymmetry between the legitimate receiver and Eve. Since a passive radar eavesdropper exploits the surveillance signal leakage to infer sensory information, it must rely on MF or time-domain cross-correlation using an imperfect reference signal, suffering from degraded SNR due to incomplete knowledge of the ISAC transmit signal structure [228], [229]. In contrast, the legitimate sensing receiver, having full knowledge of the-
 transmit waveform, can employ MMF or advanced receiver processing to suppress high sidelobes and maintain accurate target estimation.
1) AF Engineering in Communication-Centric ISAC: The recent work in [52] introduced the concept of AF engineering in communication-centric ISAC systems employing OFDM waveforms. The key idea is to intentionally design the AF with artificial sidelobes, as illustrated in Fig. 20, thereby generating ghost targets at the eavesdropper’s MF receiver as shown in Fig. 21, while allowing the legitimate receiver to mitigate them using the MMF receiver.
Recalling the OFDM-ISAC signal model with Ns subcarriers, the method exploits subcarrier power allocation to shape the ACF, which corresponds to the zero-Doppler cut of the AF. Specifically, the kth bin of the frequency-domain ACF is expressed as
Λ[k] =
Ns
X
n=1
|pn|2|sn|2ej 2π
Ns k(n−1), (38)
where pn denotes the allocated subcarrier power and sn is the modulated symbol on the nth subcarrier. By properly designing {pn} for all subcarriers, the squared secure ACF can be shaped as [52]
E |Λ[k]|2 = N 2
s δ[k] + α2
L
X
l=1
δ[k − lλ], (39)
where λ represents the periodicity of the artificial peaks, L = Ns/λ − 1 denotes their total number, and α controls the amplitude of each artificial peak. This design effectively preserves the mainlobe structure required for legitimate sensing, while misleading an unauthorized passive radar by introducing artificial range ambiguities that appear as ghost targets in its RD map. Importantly, it should be noted that the SNR loss in the legitimate sensing receiver is also determined by the design of p-
n as discussed in Section V-B.
Using this structured AF, a sensing-secure ISAC signaling design has been proposed to balance the three-way trade-off among legitimate sensing performance, communication reliability, and sensing security. The corresponding optimization

21
problem can be formulated as
maximize
{pn }Ns
n=1
− (1 − ρ)LA + ρRc
subject to ∆ISL,E ≥ εISL,
∆PSL,E ≥ εPSL,
(40)
where LA denotes the normalized SNR loss at the legitimate sensing receiver, Rc is the achievable rate of the CU, and ∆ISL,E and ∆PSL,E represent the ISL and PSL of the ACF observed at Eve, respectively. The parameters εISL and εPSL specify the required thresholds that determine the desired level of sensing security. This formulation highlights that by properly tuning the power allocation {pn} and weighting factor ρ, the ISAC transmitter can flexibly trade off between sensing accuracy, communicati-
on throughput, and resistance against sensing eavesdroppers. For more details of the solution and results, we refer the readers to [52].
2) AF Engineering in Radar-Centric ISAC: The same philosophy of AF engineering for sensing-secure ISAC can also be applied to radar-centric ISAC systems. As discussed in Section II-B, IM embedded in radar waveforms not only conveys communication data but can also be leveraged to shape the AF for sensing security. In particular, IM implemented through variations in chirp bandwidth and center frequency, together with phase modulation in FMCW radar, enables AF shaping with intentionally introduced ar-
tificial sidelobes. A recent study in [140] proposes an IM-FMCW-based secure-sensing ISAC framework enhanced with phase modulation, which further increases the DoFs in waveform design. This jointly facilitates Doppler ambiguity control and improves the communication rate. Importantly, the sensing-secure AF is optimized by minimizing the MSE between the desired AF and that of the designed signal, in a manner analogous to beampattern matching. While this deliberately degraded AF distorts target dete-
ction and parameter estimation at Eve, the legitimate sensing receiver, having full knowledge of the transmitted IM and phase coding, can compensate for these effects, successfully recovering the target range and velocity without significant performance degradation. In summary, AF engineering provides an effective and Eveagnostic means of designing sensing-secure waveforms for both communication- and radar-centric ISAC systems. Although further research is needed in areas such as MIMO AF design, j-
oint transceiver optimization, and standard-compatible signaling, existing studies have clearly demonstrated the feasibility of achieving secure ISAC through deliberate AF manipulation.
C. Active Security Attack on ISAC: Jamming and Spoofing
In radar systems, resilience against active attacks such as jamming and spoofing is a fundamental requirement for secure and reliable operation [230]–[232]. The same requirement extends naturally to ISAC, where shared spectral and hardware resources increase vulnerability to electronic countermeasures [233]–[236]. Consequently, active attacks that target the radar sensing function, for example, intentional jamming that saturates the legitimate receiver or spoofing that injects false echoes to mimi-
c targets, as illustrated in Fig. 22, pose
Fig. 22. ISAC security threat scenarios with an active attacker.
serious threats to ISAC operation and must be addressed in both transceiver design and system deployment. Recent work in [233] studies practical active-attack scenarios in WiFi-based sensing and develops jamming models, in which an attacker transmits signals that create artificial targets or corrupt the surveillance channel. Complementary research from the attacker’s perspective shows that sensingresistant jamming strategies can be designed to be difficult for a legitimate ISAC transceiver to esti-
mate or mitigate [236], underscoring the need for robust detection and mitigation techniques in ISAC transceiver design. A practical defense direction is to deny adversaries accurate knowledge of waveform properties or BS geometry [237][239]. For example, [235] proposes a randomized OFDM waveform that dynamically varies subcarrier spacing and carrier-frequency offset across transmissions, making it difficult for an attacker to replicate the legitimate waveform and generate effective adversarial si-
gnals. Another promising approach exploits secure transmission strategies that conceal the BS directionality from potential Eve or attackers [240]. By keeping the BS’s transmit direction and beamforming strategy confidential, the legitimate system reduces the attacker’s ability to accurately orient jamming or spoofing resources, thereby mitigating the risk of successful active attacks. Nevertheless, secure ISAC transceivers resilient to active attacks remain largely underexplored. Developing a fou-
ndational framework to address this challenge, particularly by connecting lowprobability-of-intercept ISAC waveform design [241] with ISAC security, is an important future direction.
IX. ISAC PROOF-OF-CONCEPT DEMONSTRATION
While theoretical research and signal processing advancements have greatly accelerated the integration of communication and radar functionalities, the practical implementation of ISAC systems remains in its early stages. Experimental validation plays a vital role in translating theoretical concepts into real-world ISAC deployments, while simultaneously offering new insights that guide transceiver design. It is worth noting that while several efforts have demonstrated radar sensing capabilities usi-
ng communication waveforms such as OFDM and OTFS [242], [243], the core objective in ISAC demonstration lies in realizing true dual-functionality, achieving both communication and sensing within a unified platform, and validating the trade-offs between the two. This section reviews recent proof-of-concept (PoC) developments

22
(a) Measurement setup photo
Tc = 100 μs Tc = 50 μs Tc = 10 μs
(c) Range profiles vs. slow-time with various chirp duration, Tc
(b) Comm. Throughput vs. SNR
Fig. 23. The PoC demonstration of radar-centric ISAC with IM embedded in the bandwidth and center frequency of FMCW chirps and in the antenna polarization [139].
and demonstrations of ISAC, with particular emphasis on hardware implementation and practical system realization.
A. Radar-Centric ISAC Demonstration
For radar-centric ISAC systems, the work in [139] experimentally demonstrated the dual functionality of radar and communication through IM embedded in the bandwidth and center frequency of FMCW chirps, as well as in the antenna polarization domain. The PoC hardware was implemented on the ARESTOR platform based on a Xilinx RFSoC FPGA [244], operating at 2.4 GHz. Notably, the prototype revealed a clear trade-off between communication throughput and radar target SNR as a function of the chirp rate. A-
s illustrated in Fig. 23, shorter FMCW chirp durations allow higher communication data rates but reduce the coherent processing gain, thereby degrading the range estimation accuracy of the radar functionality. Another IM-based DFRC prototype was experimentally validated in [26], which employed generalized spatial modulation via antenna selection. The PoC system was implemented using FPGA boards for both TX and RX at a 5.1 GHz carrier frequency. To emulate moving radar targets in overthe-air measur-
ements, a radar echo generator was developed using a spectrum analyzer and a vector signal generator, which received radar pulses and retransmitted delayed echoes. Experimental results confirmed that the IM-based DFRC with adaptive antenna selection outperformed fixed antenna allocation schemes in both radar sensing and communication performance, achieving improved angle estimation and BER under identical data rate conditions.
B. Communication-Centric ISAC Demonstration
PoC systems for communication-centric ISAC have been more actively investigated, particularly focusing on the demonstration of radar sensing using communication signals. Beyond functional implementations of radar sensing, deeper insights into communication-centric ISAC can be obtained by experimentally validating the inherent S&C performance trade-offs.
ISAC node
Target
~130 m
Target
ISAC node
User RX TX RX
(b) Communication : Received data symbols of (1) QPSK, (2) 16QAM, and (3) 32APSK
(c) Sensing: Range profiles
(a) Measurement setup photo
Fig. 24. The PoC demonstration of communication-centric ISAC under various modulation constellations, showing the impact of the constellation geometry on the receiver-specific ranging performance [51].
As illustrated in Fig. 24, an OFDM-ISAC prototype demonstrates the effect of signal modulation on sensing performance under specific receiver processing configurations [51]. In this setup, data payloads transmitted by the ISAC node are received by the single-antenna CU while simultaneously estimating the range of a desired target. The prototype employs a softwaredefined radio operating at a 2.4 GHz center frequency with a 20 MHz bandwidth. This PoC demonstration validates the theoretical analysis -
of OFDM-based sensing with random signaling presented in Section V-B, showing that sensing performance varies with the employed receiver processing, MF or RF, under urban propagation environments with multiple scatters. The ISAC constellation shaping was also validated using the same PoC setup [51], as illustrated in Fig. 5, demonstrating the controllable trade-off between S&C performance based on the constellation geometry. It is noteworthy that the limited transmit power of the software-defined -
radio can be effectively compensated by exploiting the coherent processing gain across multiple OFDM symbols, enabling reliable detection and estimation of distant targets. Such PoC demonstrations effectively bridge ISAC theory and practical implementation, providing valuable insights into ISAC deployment within existing communication infrastructures.
C. MIMO-ISAC Beamforming Demonstration
This subsection highlights the PoC demonstration of MIMO-ISAC beamforming, which enables dual functionality

23
for target sensing and communication when these two operations are spatially separated. The seminal demonstration of multifunction waveforms in [245] employs a shared antenna array to transmit both radar and communication signals. The software-defined radio platform developed in [246], known as the BEEMER system, operates at 3.5 GHz and serves as the experimental testbed. In this setup, an up-chirped LFM signal is used as the radar waveform, while communication data modulated using a QPSK constell-
ation are transmitted under different shaping filters. The experimental results validate the influence of radar signal interference on communication BER, showing a clear dependency on the radar beam direction and the occupied communication spectrum. The joint waveform design was experimentally demonstrated in [247], showcasing flexible trade-offs between S&C performance. The experimental MIMO-OFDM ISAC system was implemented using six Universal Software Radio Peripheral (USRP) devices operating at-
 a 2.4 GHz center frequency. The results revealed a performance trade-off between communication BER and the measured radar beampattern, confirming the feasibility of flexible ISAC operation enabled by the joint precoding design discussed in Section III-A. Furthermore, to achieve higher sensing accuracy and resolution required by advanced applications, the capabilities of MIMO-ISAC transceivers have been further demonstrated in [248], [249], validating near-field sensing and mmWave high-resolution -
imaging performance.
D. Data-Secure ISAC Demonstration
Beyond the DFRC demonstration, it is noteworthy to see the practical realization of secure ISAC systems. Although still largely underexplored, [200] experimentally validated datasecure ISAC using the SEFDM framework. The prototype, implemented on a USRP platform with six TX antennas, evaluated data security by comparing the error vector magnitude (EVM) of the legitimate CU and Eve placed only 4 cm apart. Notably, while the conventional OFDM signal fails to ensure data confidentiality as Eve’s EVM -
remains comparable to that of the CU, the SEFDM signal, known only to the legitimate user, significantly degrades Eve’s demodulation accuracy. The results confirm that SEFDM integrated with joint precoding effectively secures ISAC transmission even under strong spatial correlation between CU and Eve. For detailed experimental configurations, readers are referred to [200].
X. CONCLUSION AND FUTURE OUTLOOK
MIMO transceiver technologies form the foundation of ISAC, providing time, frequency, and spatial degrees of freedom that enable the dual functionality of radar and communication. This article examined the evolution of MIMO transceiver designs for ISAC, establishing the fundamental frameworks for dual-functional radar–communication systems. It also highlighted new physical-layer vulnerabilities introduced by integration and summarized recent MIMO transceiver solutions that jointly address sensing,-
 communication, and security.
As ISAC moves toward sustainable and large-scale deployment in perceptive mobile networks, new challenges arise in efficient implementation and unprecedented security threats. Addressing these challenges requires continued efforts to explore uncharted problems and exploit emerging opportunities. The following outlook outlines promising directions for future ISAC development.
1) Hardware-Efficient MIMO-ISAC Transceivers: Nextgeneration wireless networks demand both high data rates and high-resolution sensing, requiring extremely large antenna arrays and wide bandwidths. However, most existing MIMO transceivers rely on fully digital or fully-connected hybrid architectures, which become impractical for large apertures due to excessive power consumption and complex hardware design. Furthermore, wideband or multi-band sensing with communication signals necessitates high sa-
mpling rates in analog-to-digital converters (ADCs), further increasing the power budget. The use of sparse arrays, while extensively explored in radar systems, remains largely untapped in ISAC transmission, missing out on potentially significant hardware gains. Without advances in signal processing and hardwareefficient design, large-scale ISAC deployment will face severe sustainability challenges.
2) MIMO Transceivers for Near-Field ISAC: Extremely large antenna arrays and wide bandwidths developments have two key implications in ISAC transceiver designs. First, the problem becomes near-field, introducing distance-dependent effects that enable joint range and direction-of-arrival (DoA) estimation and facilitate beamfocusing for improved interference mitigation. Operating in the near-field thus opens opportunities for beamfocusing and distance-aware localization. Second, while most existing -
ISAC studies focus on narrowband signals, future systems will adopt wideband transmission to enhance communication capacity and range resolution. These changes necessitate, in addition to high sampling rate, a redesign of ISAC frameworks to address model mismatches between traditional far-field, narrowband assumptions and realistic near-field, wideband EM environments.
3) Theoretical Framework on ISAC Secrecy: Despite existing secure ISAC designs, a unified theoretical framework for ISAC secrecy remains largely unexplored. In particular, sensing secrecy lacks rigorous foundations for characterizing target detection and parameter estimation under adversarial attacks. Estimation- and information-theoretic analyses are needed to quantify achievable secrecy in radar sensing and to develop unified models that define new secrecy metrics for joint sensing and communica-
tion. Such frameworks would guide secure MIMO transceiver design, provide performance benchmarks, and establish fundamental limits on secure ISAC operation.
4) Secure Network-Level ISAC Design: Beyond link-level transceiver design, network-level ISAC offers new opportunities for secure operation through coordinated and cooperative sensing and communication. Developing secure coordination protocols, distributed transmission schemes, and multi-node information fusion strategies will be essential to mitigate emerging security risks in large-scale ISAC networks. Scalable network-level security frameworks should jointly address

24
communication secrecy and sensing privacy while accounting for practical constraints such as limited backhaul capacity.
5) ISAC for Artificial Intelligence: While artificial intelligence (AI) enhances ISAC transceiver optimization, ISAC in turn provides rich sensory data that can empower AI models for perception, localization, and resource allocation in wireless networks. Realizing this synergy requires trustworthy and privacy-preserving learning frameworks, where AI models are trained on ISAC data without compromising communication security or sensing information leakage. Future MIMO-ISAC transceivers should there-
fore be designed to natively support secure data acquisition, distributed learning, and semantic information extraction for intelligent and autonomous network operation.
REFERENCES
[1] R. M. Mealey, “A method for calculating error probabilities in a radar communication system,” IEEE Trans. Space Electron. and Telem., vol. 9, no. 2, pp. 37–42, 1963. [2] E. G. Larsson, O. Edfors, F. Tufvesson, and T. L. Marzetta, “Massive MIMO for next generation wireless systems,” IEEE Commun. Mag., vol. 52, no. 2, pp. 186–195, 2014. [3] J. Li and P. Stoica, “MIMO radar with colocated antennas,” IEEE Signal Process. Mag., vol. 24, no. 5, pp. 106–114, 2007. [4] F. Liu, Y. Cui, C. Masouros, J. -
Xu, T. X. Han, Y. C. Eldar, and S. Buzzi, “Integrated sensing and communications: Towards dualfunctional wireless networks for 6G and beyond,” IEEE J. Sel. Areas Commun., vol. 40, no. 6, pp. 1728–1767, Jun. 2022. [5] L. G. De Oliveira, B. Nuss, M. B. Alabd, A. Diewald, M. Pauli, and T. Zwick, “Joint radar-communication systems: Modulation schemes and system design,” IEEE Trans. Microw. Theory Techn., vol. 70, no. 3, pp. 1521–1551, 2021. [6] M. Nowak, M. Wicks, Z. Zhang, and Z. Wu, “Co-designed rad-
arcommunication using linear frequency modulation waveform,” IEEE Aerosp. Electron. Syst. Mag., vol. 31, no. 10, pp. 28–35, 2016. [7] C. Sahin, J. Jakabosky, P. M. McCormick, J. G. Metcalf, and S. D. Blunt, “A novel approach for embedding communication symbols into physical radar waveforms,” in 2017 IEEE RadarConf. IEEE, 2017, pp. 1498–1503. [8] A. Hassanien, B. Himed, and B. D. Rigling, “A dual-function mimo radar-communications system using frequency-hopping waveforms,” in 2017 IEEE RadarConf. I-
EEE, 2017, pp. 1721–1725. [9] J. A. Zhang, F. Liu, C. Masouros, R. W. Heath, Z. Feng, L. Zheng, and A. Petropulu, “An overview of signal processing techniques for joint communication and radar sensing,” IEEE J. Sel. Topics Signal Process., vol. 15, no. 6, pp. 1295–1315, 2021. [10] F. Uysal, “Phase-coded FMCW automotive radar: System design and interference mitigation,” IEEE Trans. Veh. Technol., vol. 69, no. 1, pp. 270–281, 2019. [11] S. D. Blunt, M. R. Cook, and J. Stiles, “Embedding information -
into radar emissions via waveform implementation,” in 2010 Int. Waveform Diversity Design Conf. IEEE, 2010, pp. 000 195–000 199. [12] A. Hassanien, M. G. Amin, Y. D. Zhang, and F. Ahmad, “Signaling strategies for dual-function radar communications: An overview,” IEEE Aerosp. Electron. Syst. Mag., vol. 31, no. 10, pp. 36–45, 2016. [13] A. Hassanien, M. G. Amin, E. Aboutanios, and B. Himed, “Dualfunction radar communication systems: A solution to the spectrum congestion problem,” IEEE Signal Process-
. Mag., vol. 36, no. 5, pp. 115–126, 2019. [14] L. Zheng, M. Lops, Y. C. Eldar, and X. Wang, “Radar and communication coexistence: An overview: A review of recent methods,” IEEE Signal Process. Mag., vol. 36, no. 5, pp. 85–99, 2019. [15] F. Liu, C. Masouros, A. P. Petropulu, H. Griffiths, and L. Hanzo, “Joint radar and communication design: Applications, state-of-the-art, and the road ahead,” IEEE Trans. Commun., vol. 68, no. 6, pp. 3834–3862, 2020. [16] A. Martone and M. Amin, “A view on radar an-
d communication systems coexistence and dual functionality in the era of spectrum sensing,” Digit. Signal Process., vol. 119, p. 103135, 2021. [17] J. Euziere, R. Guinvarc’h, M. Lesturgie, B. Uguen, and R. Gillard, “Dual function radar communication time-modulated array,” in 2014 Int. Radar Conf. IEEE, 2014, pp. 1–4.
[18] A. Hassanien, M. G. Amin, Y. D. Zhang, and F. Ahmad, “Phasemodulation based dual-function radar-communications,” IET Radar, Sonar & Navig., vol. 10, no. 8, pp. 1411–1421, 2016. [19] ——, “Dual-function radar-communications: Information embedding using sidelobe control and waveform diversity,” IEEE Trans. Signal Process., vol. 64, no. 8, pp. 2168–2181, 2015. [20] A. Ahmed, Y. D. Zhang, and Y. Gu, “Dual-function radarcommunications using qam-based sidelobe modulation,” Digit. Signal Process., vo-
l. 82, pp. 166–174, 2018. [21] T. W. Tedesso and R. Romero, “Code shift keying based joint radar and communications for emcon applications,” Digit. Signal Process., vol. 80, pp. 48–56, 2018. [22] B. K. Chalise, M. G. Amin, and G. A. Fabrizio, “Information embedding in dfrc networks through chirp waveform diversity,” EURASIP J. Adv. Signal Process., vol. 2023, no. 1, p. 14, 2023. [23] C. Sahin, J. G. Metcalf, and S. D. Blunt, “Filter design to address range sidelobe modulation in transmit-encoded r-
adar-embedded communications,” in 2017 IEEE RadarConf. IEEE, 2017, pp. 1509–1514. [24] A. M. Elbir, A. Celik, A. M. Eltawil, and M. G. Amin, “Index Modulation for Integrated Sensing and Communications: A signal processing perspective [Special Issue on Signal Processing for the Integrated Sensing and Communications Revolution],” IEEE Signal Process. Mag., vol. 41, no. 5, pp. 44–55, 2024. [25] X. Wang, A. Hassanien, and M. G. Amin, “Dual-function mimo radar communications system design via sparse ar-
ray optimization,” IEEE Trans. Aerosp. Electron. Syst., vol. 55, no. 3, pp. 1213–1226, 2018. [26] D. Ma, N. Shlezinger, T. Huang, Y. Shavit, M. Namer, Y. Liu, and Y. C. Eldar, “Spatial modulation for joint radar-communications systems: Design, analysis, and hardware prototype,” IEEE Trans. Veh. Technol., vol. 70, no. 3, pp. 2283–2298, 2021. [27] A. Hassanien, E. Aboutanios, M. G. Amin, and G. A. Fabrizio, “A dual-function mimo radar-communication system via waveform permutation,” Digit. Signal Pro-
cess., vol. 83, pp. 118–128, 2018. [28] J. Xu, X. Wang, E. Aboutanios, and G. Cui, “Hybrid index modulation for dual-functional radar communications systems,” IEEE Trans. Veh. Technol., vol. 72, no. 3, pp. 3186–3200, 2022. [29] I. P. Eedara, M. G. Amin, A. Hoorfar, and B. K. Chalise, “Dual-function frequency-hopping mimo radar system with csk signaling,” IEEE Trans. Aerosp. Electron. Syst., vol. 58, no. 3, pp. 1501–1513, 2022. [30] T. Huang, N. Shlezinger, X. Xu, Y. Liu, and Y. C. Eldar, “Majorcom-
: A dual-function radar communication system using index modulation,” IEEE Trans. Signal Process., vol. 68, pp. 3423–3438, 2020. [31] D. Ma, N. Shlezinger, T. Huang, Y. Liu, and Y. C. Eldar, “FRaC: FMCW-based joint radar-communications system via index modulation,” IEEE J. Sel. Topics Signal Process., vol. 15, no. 6, pp. 13481364, 2021. [32] M. Temiz, N. J. Peters, C. Horne, M. A. Ritchie, and C. Masouros, “Radar-centric isac through index modulation: Over-the-air experimentation and trade-offs,” -
in 2023 IEEE RadarConf. IEEE, 2023, pp. 1–6. [33] M. Temiz, C. Horne, M. A. Ritchie, and C. Masouros, “FMCW-Based Integrated Sensing and Communication System: Design, Implementation, and Experimental Validation,” submitted, 2025. [34] A. Bazzi and M. Chafii, “Mutual information based pilot design for ISAC,” IEEE Trans. Commun., 2025.
[35] L. Ma, C. Pan, Q. Wang, M. Lou, Y. Wang, and T. Jiang, “A downlink pilot based signal processing method for integrated sensing and communication towards 6G,” in 2022 IEEE 95th Veh. Technol. Conf. (VTC2022-Spring). IEEE, 2022, pp. 1–5.
[36] Y. Ma, G. Zhou, and S. Wang, “WiFi sensing with channel state information: A survey,” ACM Comput. Surveys (CSUR), vol. 52, no. 3, pp. 1–36, 2019. [37] P. Kumari, J. Choi, N. González-Prelcic, and R. W. Heath, “IEEE 802.11 ad-based radar: An approach to joint vehicular communicationradar system,” IEEE Trans. Veh. Technol., vol. 67, no. 4, pp. 30123027, 2017. [38] W. Zhu, Y. Han, L. Wang, L. Xu, Y. Zhang, and A. Fei, “Pilot optimization for OFDM-based ISAC signal in emergency IoT networks,” IEE-
E Internet Things J., vol. 11, no. 18, pp. 29 600–29 614, 2023. [39] B. K. Chalise, M. G. Amin, and B. Himed, “Performance tradeoff in a unified passive radar and communications system,” IEEE Signal Process. Lett., vol. 24, no. 9, pp. 1275–1279, 2017. [40] C. R. Berger, B. Demissie, J. Heckenbach, P. Willett, and S. Zhou, “Signal processing for passive radar using OFDM waveforms,” IEEE J. Sel. Topics Signal Process., vol. 4, no. 1, pp. 226–238, 2010. [41] P. Falcone, F. Colone, C. Bongioanni, and -
P. Lombardo, “Experimental results for OFDM WiFi-based passive bistatic radar,” in 2010 IEEE RadarConf. IEEE, 2010, pp. 516–521.

25
[42] J. E. Palmer, H. A. Harms, S. J. Searle, and L. Davis, “DVB-T passive radar signal processing,” IEEE Trans. Signal Process., vol. 61, no. 8, pp. 2116–2126, 2012. [43] C. Sturm and W. Wiesbeck, “Waveform design and signal processing aspects for fusion of wireless communications and radar sensing,” Proc. IEEE, vol. 99, no. 7, pp. 1236–1259, 2011. [44] F. Liu, Y. Zhang, Y. Xiong, S. Li, W. Yuan, F. Gao, S. Jin, and G. Caire, “CP-OFDM achieves the lowest average ranging sidelobe under QAM/PSK con-
stellations,” IEEE Trans. Inf. Theory, 2025. [45] F. Liu, Y. Xiong, S. Lu, S. Li, W. Yuan, C. Masouros, S. Jin, and G. Caire, “Uncovering the iceberg in the sea: Fundamentals of pulse shaping and modulation design for random ISAC signals,” IEEE Trans. Signal Process., 2025.
[46] Z. Liao, F. Liu, S. Li, Y. Xiong, W. Yuan, C. Masouros, and M. Lops, “Pulse shaping for random ISAC signals: The ambiguity function between symbols matters,” IEEE Trans. Wireless Commun., 2025. [47] Z. Du, F. Liu, Y. Xiong, T. X. Han, Y. C. Eldar, and S. Jin, “Reshaping the ISAC tradeoff under OFDM signaling: A probabilistic constellation shaping approach,” IEEE Trans. Signal Process., 2024.
[48] B. Geiger, F. Liu, S. Lu, A. Rode, D. G. Gaviria, C. Muth, and L. Schmalen, “Constellation Shaping for OFDM-ISAC Systems: From Theoretical Bounds to Practical Implementation,” arXiv preprint arXiv:2509.04055, 2025.
[49] J. Hu, K. Han, L. Jiang, K. Meng, F. Liu, and C. Masouros, “LearningBased Constellation Design for Uplink Bi-Static Integrated Sensing and Communication,” IEEE Trans. Veh. Technol., 2025.
[50] X. Yang, R. Zhang, D. Zhai, F. Liu, R. Du, and T. X. Han, “Constellation design for integrated sensing and communication with random waveforms,” IEEE Trans. Wireless Commun., 2024.
[51] K. Han, K. Meng, A. Chatzicharistou, and C. Masouros, “Constellation Design in OFDM-ISAC over Data Payloads: From MSE Analysis to Experimentation,” arXiv preprint arXiv:2510.13101, 2025.
[52] K. Han, K. Meng, and C. Masouros, “Sensing-Secure ISAC: Ambiguity Function Engineering for Impairing Unauthorized Sensing,” IEEE Trans. Wireless Commun., 2025.
[53] Y. Zhang, F. Liu, T. Liu, and S. Jin, “Optimal Power Allocation for OFDM-based Ranging Using Random Communication Signals,” arXiv preprint arXiv:2504.18016, 2025.
[54] M. F. Keskin, M. M. Mojahedian, J. O. Lacruz, C. Marcus, O. Eriksson, A. Giorgetti, J. Widmer, and H. Wymeersch, “Fundamental trade-offs in monostatic ISAC: A holistic investigation towards 6G,” IEEE Trans. Wireless Commun., 2025.
[55] S. Mercier, S. Bidon, D. Roque, and C. Enderli, “Comparison of correlation-based OFDM radar receivers,” IEEE Trans. Aerosp. Electron. Syst., vol. 56, no. 6, pp. 4796–4813, 2020. [56] G. Caire, G. Taricco, and E. Biglieri, “Bit-interleaved coded modulation,” IEEE Trans. Inf. Theory, vol. 44, no. 3, pp. 927–946, 2002. [57] Z. Du, J. Xu, Y. Xiong, J. Wang, M. F. Keskin, H. Wymeersch, F. Liu, and S. Jin, “Probabilistic Constellation Shaping for OFDM ISAC Signals Under Temporal-Frequency Filtering-
,” arXiv preprint arXiv:2510.12204, 2025.
[58] R. Abu-Alhiga and H. Haas, “Subcarrier-index modulation OFDM,” in 2009 IEEE 20th Int. Symp. Personal, Indoor and Mobile Radio Commun. IEEE, 2009, pp. 177–181. [59] E. Ba ̧sar, Ü. Aygölü, E. Panayırcı, and H. V. Poor, “Orthogonal frequency division multiplexing with index modulation,” IEEE Trans. Signal Process., vol. 61, no. 22, pp. 5536–5549, 2013. [60] M. Wen, X. Cheng, M. Ma, B. Jiao, and H. V. Poor, “On the achievable rate of OFDM with index modulation,” IEEE Trans. Signal Process., vol. -
64, no. 8, pp. 1919–1932, 2015. [61] M. M. S ̧ ahin, I. E. Gurol, E. Arslan, E. Basar, and H. Arslan, “OFDMIM for joint communication and radar-sensing: A promising waveform for dual functionality,” Frontiers in Commun. and Netw., vol. 2, p. 715944, 2021. [62] G. Huang, Y. Ding, S. Ouyang, and V. Fusco, “Index modulation for OFDM RadCom systems,” The Journal of Engineering, vol. 2021, no. 2, pp. 61–72, 2021. [63] Z. Sui, Q. Luo, Z. Liu, M. Temiz, L. Musavian, C. Masouros, Y. L. Guan, P. Xiao, and -
L. Hanzo, “Multi-Functional Chirp Signalling for Next-Generation Multi-Carrier Wireless Networks: Communications, Sensing and ISAC Perspectives,” arXiv preprint arXiv:2508.06022, 2025. [64] H. Hawkins, C. Xu, L.-L. Yang, and L. Hanzo, “IM-OFDM ISAC outperforms OFDM ISAC by combining multiple sensing observations,” IEEE Open J. Veh. Technol., vol. 5, pp. 312–329, 2024.
[65] Z. Yang, S. Gao, X. Cheng, and L. Yang, “Superposed im-ofdm (s-imofdm): An enhanced ofdm for integrated sensing and communications,” IEEE Trans. Veh. Technol., vol. 73, no. 10, pp. 15 832–15 836, 2024. [66] X. Liu et al., “Joint transmit beamforming for multiuser MIMO communications and MIMO radar,” IEEE Trans. Signal Process., vol. 68, pp. 3929–3944, 2020. [67] H. Hua, J. Xu, and T. X. Han, “Optimal transmit beamforming for integrated sensing and communication,” IEEE Trans. Veh. Technol., vo-
l. 72, no. 8, pp. 10 588–10 603, 2023. [68] Z. He, W. Xu, H. Shen, Y. Huang, and H. Xiao, “Energy efficient beamforming optimization for integrated sensing and communication,” IEEE Wireless Commun. Lett., vol. 11, no. 7, pp. 1374–1378, 2022. [69] J. Choi, J. Park, N. Lee, and A. Alkhateeb, “Joint and robust beamforming framework for integrated sensing and communication systems,” IEEE Trans. Wireless Commun., 2024.
[70] F. Liu, Y.-F. Liu, A. Li, C. Masouros, and Y. C. Eldar, “Cramér-Rao bound optimization for joint radar-communication beamforming,” IEEE Trans. Signal Process., vol. 70, pp. 240–253, 2021. [71] F. Liu, C. Masouros, A. Li, H. Sun, and L. Hanzo, “MU-MIMO communications with MIMO radar: From co-existence to joint transmission,” IEEE Trans. Wireless Commun., vol. 17, no. 4, pp. 27552770, 2018. [72] G. Cui, H. Li, and M. Rangaswamy, “MIMO radar waveform design with constant modulus and similarity c-
onstraints,” IEEE Trans. Signal Process., vol. 62, no. 2, pp. 343–353, 2013. [73] L. Xu and Q. Liang, “Zero correlation zone sequence pair sets for MIMO radar,” IEEE Trans. Aerosp. Electron. Syst., vol. 48, no. 3, pp. 2100–2113, 2012. [74] H. He, P. Stoica, and J. Li, “Designing unimodular sequence sets with good correlations—Including an application to MIMO radar,” IEEE Trans. Signal Process., vol. 57, no. 11, pp. 4391–4405, 2009. [75] K. Han and S. Hong, “High-resolution phased-subarray MIMO rad-
ar with grating lobe cancellation technique,” IEEE Trans. Microw. Theory Techn., vol. 70, no. 5, pp. 2775–2785, 2022. [76] N. T. Nguyen, L. V. Nguyen, N. Shlezinger, Y. C. Eldar, A. L. Swindlehurst, and M. Juntti, “Joint communications and sensing hybrid beamforming design via deep unfolding,” IEEE J. Sel. Topics Signal Process., 2024.
[77] C. Qi, W. Ci, J. Zhang, and X. You, “Hybrid beamforming for millimeter wave MIMO integrated sensing and communications,” IEEE Commun. Lett., vol. 26, no. 5, pp. 1136–1140, 2022. [78] X. Wang, Z. Fei, J. A. Zhang, and J. Xu, “Partially-connected hybrid beamforming design for integrated sensing and communication systems,” IEEE Trans. Commun., vol. 70, no. 10, pp. 6648–6660, 2022. [79] S. D. Liyanaarachchi, T. Riihonen, C. B. Barneto, and M. Valkama, “Joint MIMO communications and sensing with h-
ybrid beamforming architecture and OFDM waveform optimization,” IEEE Trans. Wireless Commun., vol. 23, no. 2, pp. 1565–1580, 2023. [80] F. Liu and C. Masouros, “Hybrid beamforming with sub-arrayed MIMO radar: Enabling joint sensing and communication at mmWave band,” in ICASSP 2019-2019 IEEE Int. Conf. Acoust., Speech Signal Process. (ICASSP). IEEE, 2019, pp. 7770–7774. [81] Y. Luo, J. A. Zhang, X. Huang, W. Ni, and J. Pan, “Optimization and quantization of multibeam beamforming vector for joint co-
mmunication and radio sensing,” IEEE Trans. Commun., vol. 67, no. 9, pp. 6468–6482, 2019. [82] J. Suh, J. Kang, K. Han, S. Hong, and G.-T. Gil, “Null space projection-based design of multibeam for joint communication and sensing systems,” IEEE Commun. Lett., vol. 27, no. 8, pp. 2162–2166, 2023. [83] J. A. Zhang, X. Huang, Y. J. Guo, J. Yuan, and R. W. Heath, “Multibeam for joint communication and radar sensing using steerable analog antenna arrays,” IEEE Trans. Veh. Technol., vol. 68, no. 1, pp. 6-
71–685, 2018. [84] T. Fang, N. T. Nguyen, and M. Juntti, “Low-complexity Cramér-Rao lower bound and sum rate optimization in ISAC systems,” in ICASSP 2025-2025 IEEE Int. Conf. Acoust., Speech Signal Process. (ICASSP). IEEE, 2025, pp. 1–5. [85] J. Wu, Z. Wang, Y.-F. Liu, and F. Liu, “Efficient global algorithms for transmit beamforming design in ISAC systems,” IEEE Trans. Signal Process., 2024.
[86] M. Temiz, Y. Zhang, Y. Fu, C. Zhang, C. Meng, O. Kaplan, and C. Masouros, “Deep learning-based techniques for integrated sensing and communication systems: State-of-the-art, challenges, and opportunities,” IEEE Open J. Comm. Soc., 2025.

26
[87] J. Zhang, C. Masouros, F. Liu, Y. Huang, and A. L. Swindlehurst, “Low-complexity joint radar-communication beamforming: From optimization to deep unfolding,” IEEE J. Sel. Topics Signal Process., 2025. [88] K. Han, K. Meng, X.-Y. Wang, and C. Masouros, “Network-Level ISAC Design: State-of-the-Art, Challenges, and Opportunities,” IEEE J. Sel. Topics Electro., Antennas Propag., 2025.
[89] K. Meng, C. Masouros, A. P. Petropulu, and L. Hanzo, “Cooperative ISAC networks: Opportunities and challenges,” IEEE Wireless Commun., 2024. [90] K. Meng, K. Han, C. Masouros, and L. Hanzo, “Network-level ISAC: An Analytical Study of Antenna Topologies Ranging from Massive to Cell-Free MIMO,” IEEE Trans. Wireless Commun., 2025.
[91] K. Meng, C. Masouros, G. Chen, and F. Liu, “Network-level integrated sensing and communication: Interference management and BS coordination using stochastic geometry,” IEEE Trans. Wireless Commun., 2024. [92] J. Li, G. Zhou, T. Gong, and N. Liu, “A framework for mutual information-based MIMO integrated sensing and communication beamforming design,” IEEE Trans. Veh. Technol., vol. 73, no. 6, pp. 83528366, 2024. [93] H. Hua, T. X. Han, and J. Xu, “MIMO integrated sensing and communication: CRB--
rate tradeoff,” IEEE Trans. Wireless Commun., vol. 23, no. 4, pp. 2839–2854, 2023. [94] Z. Ren, Y. Peng, X. Song, Y. Fang, L. Qiu, L. Liu, D. W. K. Ng, and J. Xu, “Fundamental CRB-rate tradeoff in multi-antenna ISAC systems with information multicasting and multi-target sensing,” IEEE Trans. Wireless Commun., vol. 23, no. 4, pp. 3870–3885, 2023. [95] Z. Wei, J. Piao, X. Yuan, H. Wu, J. A. Zhang, Z. Feng, L. Wang, and P. Zhang, “Waveform design for MIMO-OFDM integrated sensing and communication sys-
tem: An information theoretical approach,” IEEE Trans. Commun., vol. 72, no. 1, pp. 496–509, 2023. [96] C. Ouyang, Y. Liu, H. Yang, and N. Al-Dhahir, “Integrated sensing and communications: A mutual information-based framework,” IEEE Commun. Mag., vol. 61, no. 5, pp. 26–32, 2023. [97] F. Liu, L. Zhou, C. Masouros, A. Li, W. Luo, and A. Petropulu, “Toward dual-functional radar-communication systems: Optimal waveform design,” IEEE Trans. Signal Process., vol. 66, no. 16, pp. 4264–4279, 2018. [98] Y.-
 Zhang, W. Ni, W. Tang, Y. C. Eldar, and D. Niyato, “Robust transceiver design for ISAC with imperfect CSI,” in GLOBECOM 2023-2023 IEEE Global Commun. Conf. IEEE, 2023, pp. 1320–1325. [99] X. Zhao, W. Deng, M. Li, and M.-J. Zhao, “Robust beamforming design for integrated sensing and covert communication systems,” IEEE Wireless Commun. Lett., 2024.
[100] J. Dai, J. Ye, K. Wang, C. Pan, and H. Fan, “Joint radar-communication beamforming considering both transceiver hardware impairments and imperfect CSI,” IEEE Wireless Commun. Lett., vol. 13, no. 7, pp. 18981902, 2024. [101] P. Stoica, J. Li, and Y. Xie, “On probing signal design for MIMO radar,” IEEE Trans. Signal Process., vol. 55, no. 8, pp. 4151–4161, 2007. [102] Z. Cheng, Z. He, S. Zhang, and J. Li, “Constant modulus waveform design for MIMO radar transmit beampattern,” IEEE Trans. Signa-
l Process., vol. 65, no. 18, pp. 4912–4923, 2017. [103] D. R. Fuhrmann and G. San Antonio, “Transmit beamforming for MIMO radar systems using signal cross-correlation,” IEEE Trans. Aerosp. Electron. Syst., vol. 44, no. 1, pp. 171–186, 2008. [104] J. Li, L. Xu, P. Stoica, K. W. Forsythe, and D. W. Bliss, “Range compression and waveform optimization for MIMO radar: A CramérRao bound based study,” IEEE Trans. Signal Process., vol. 56, no. 1, pp. 218–232, 2007. [105] B. Li and A. Petropulu, “MIMO rada-
r and communication spectrum sharing with clutter mitigation,” in 2016 IEEE RadarConf. IEEE, 2016, pp. 1–6. [106] Y. Yang and R. S. Blum, “MIMO radar waveform design based on mutual information and minimum mean-square error estimation,” IEEE Trans. Aerosp. Electron. Syst., vol. 43, no. 1, pp. 330–343, 2007. [107] Y. Xiong, F. Liu, Y. Cui, W. Yuan, T. X. Han, and G. Caire, “On the fundamental tradeoff of integrated sensing and communications under Gaussian channels,” IEEE Trans. Inf. Theory, vol. 6-
9, no. 9, pp. 57235751, 2023. [108] C. Xu and S. Zhang, “MIMO integrated sensing and communication exploiting prior information,” IEEE J. Sel. Areas Commun., vol. 42, no. 9, pp. 2306–2321, 2024. [109] R. Liu, M. Li, and A. L. Swindlehurst, “Joint Array Partitioning and Beamforming Designs in ISAC Systems: A Bayesian CRB Perspective,” arXiv preprint arXiv:2503.13870, 2025.
[110] N. Su, F. Liu, C. Masouros, G. C. Alexandropoulos, Y. Xiong, and Q. Zhang, “Secure isac mimo systems: exploiting interference with bayesian cramér–rao bound optimization,” EURASIP J. Wireless Commun. and Netw., vol. 2025, no. 1, p. 10, 2025. [111] D. Chazan, M. Zakai, and J. Ziv, “Improved lower bounds on signal parameter estimation,” IEEE Trans. Inf. Theory, vol. 21, no. 1, pp. 90–93, 1975. [112] Z. Fei, S. Tang, X. Wang, F. Xia, F. Liu, and J. A. Zhang, “Revealing the trade-off in isac sys-
tems: The kl divergence perspective,” IEEE Wireless Commun. Lett., 2024.
[113] C. Masouros, “Correlation rotation linear precoding for MIMO broadcast communications,” IEEE Trans. Signal Process., vol. 59, no. 1, pp. 252–262, 2010. [114] C. Masouros and E. Alsusa, “Dynamic linear precoding for the exploitation of known interference in MIMO broadcast systems,” IEEE Trans. Wireless Commun., vol. 8, no. 3, pp. 1396–1404, 2009. [115] C. Masouros, T. Ratnarajah, M. Sellathurai, C. B. Papadias, and A. K. Shukla, “Known interference in the cellular downlink: A performance limi-
ting factor or a source of green signal power?” IEEE Commun. Mag., vol. 51, no. 10, pp. 162–171, 2013. [116] G. Zheng, I. Krikidis, C. Masouros, S. Timotheou, D.-A. Toumpakaris, and Z. Ding, “Rethinking the role of interference in wireless networks,” IEEE Commun. Mag., vol. 52, no. 11, pp. 152–158, 2014. [117] C. Masouros and G. Zheng, “Exploiting known interference as green signal power for downlink beamforming optimization,” IEEE Trans. Signal Process., vol. 63, no. 14, pp. 3628–3640, 2015. [118-
] A. Li, D. Spano, J. Krivochiza, S. Domouchtsidis, C. G. Tsinos, C. Masouros, S. Chatzinotas, Y. Li, B. Vucetic, and B. Ottersten, “A tutorial on interference exploitation via symbol-level precoding: Overview, state-of-the-art and future directions,” IEEE Commun. Surveys Tuts., vol. 22, no. 2, pp. 796–839, 2020. [119] M. Alodeh, S. Chatzinotas, and B. Ottersten, “Symbol-level multiuser MISO precoding for multi-level adaptive modulation,” IEEE Trans. Wireless Commun., vol. 16, no. 8, pp. 5511–5524-
, 2017. [120] A. Li, C. Masouros, B. Vucetic, Y. Li, and A. L. Swindlehurst, “Interference exploitation precoding for multi-level modulations: Closedform solutions,” IEEE Trans. Commun., vol. 69, no. 1, pp. 291–308, 2020. [121] Y. Chen, F. Liu, Z. Liao, and F. Dong, “Symbol-level precoding for MIMO ISAC transmission based on interference exploitation,” IEEE Commun. Lett., vol. 28, no. 2, pp. 283–287, 2023. [122] P. Li, M. Li, R. Liu, Q. Liu, and A. L. Swindlehurst, “MIMO-OFDM ISAC waveform design -
for range-Doppler sidelobe suppression,” IEEE Trans. Wireless Commun., 2024.
[123] R. Liu, M. Li, Q. Liu, and A. L. Swindlehurst, “Dual-functional radarcommunication waveform design: A symbol-level precoding approach,” IEEE J. Sel. Topics Signal Process., vol. 15, no. 6, pp. 1316–1331, 2021. [124] M. Wang and H. Du, “Symbol-level precoding design for integrated sensing and communication,” in 2022 IEEE 8th Int. Conf. on Computer and Communications (ICCC). IEEE, 2022, pp. 967–971.
[125] N. Babu, A. Kosasih, C. Masouros, and E. Björnson, “Symbol-level precoding for near-field ISAC,” IEEE Commun. Lett., 2024. [126] Z. Liao and F. Liu, “Symbol-level precoding for integrated sensing and communications: A faster-than-nyquist approach,” IEEE Commun. Lett., vol. 27, no. 12, pp. 3210–3214, 2023. [127] Y. Wang, X. Hu, A. Li, C. Masouros, K.-K. Wong, and K. Yang, “Symbol-Scaling based Interference Exploitation in ISAC Systems: From Symbol Level to Block Level,” IEEE Trans. Wireless C-
ommun., 2025. [128] W. Wang, C. Dong, N. Zhao, Q. Wu, and D. Niyato, “Constructive Interference Precoding Empowered NOMA-ISAC Design,” IEEE Trans. Wireless Commun., 2025.
[129] Y. Wang, X. Hu, A. Li, C. Masouros, K.-K. Wong, and K. Yang, “Interference Exploitation in ISAC Systems: Finite-Alphabet Precoding with Low Resolution DACs and PSs,” IEEE Trans. Wireless Commun., 2025. [130] J. Yang, A. Li, X. Liao, and C. Masouros, “Speeding-up symbollevel precoding using separable and dual optimizations,” IEEE Trans. Commun., vol. 71, no. 12, pp. 7056–7071, 2023. [131] ——, “Low complexity SLP: An inversion-free, parallelizable ADMM approach,” IEEE Trans. Wireless Commun., -
vol. 23, no. 9, pp. 12 42412 439, 2024. [132] Y. Wen, H. Wang, A. Li, X. Liao, and C. Masouros, “Low-complexity interference exploitation MISO precoding under per-antenna power constraint,” IEEE Trans. Wireless Commun., vol. 23, no. 8, pp. 99439957, 2024.

27
[133] Z. Wei, C. Masouros, and F. Liu, “Secure directional modulation with few-bit phase shifters: Optimal and iterative-closed-form designs,” IEEE Trans. Commun., vol. 69, no. 1, pp. 486–500, 2020. [134] A. Li and C. Masouros, “Interference exploitation precoding made practical: Optimal closed-form solutions for PSK modulations,” IEEE Trans. Wireless Commun., vol. 17, no. 11, pp. 7661–7676, 2018. [135] S. Domouchtsidis, C. G. Tsinos, S. Chatzinotas, and B. Ottersten, “Symbol-level precoding for l-
ow complexity transmitter architectures in large-scale antenna array systems,” IEEE Trans. Wireless Commun., vol. 18, no. 2, pp. 852–863, 2018. [136] J. Yang, A. Li, X. Liao, and C. Masouros, “ADMM-SLPNet: a modeldriven deep learning framework for symbol-level precoding,” IEEE Trans. Veh. Technol., vol. 73, no. 1, pp. 1376–1381, 2023. [137] P. Jiang, M. Li, R. Liu, W. Wang, and Q. Liu, “Slp-based dualfunctional waveform design for isac systems: A deep learning approach,” IEEE Trans. Veh. Technol.,-
 2025.
[138] A. Mohammad, C. Masouros, and Y. Andreopoulos, “An unsupervised learning-based approach for symbol-level-precoding,” in 2021 IEEE Global Commun. Conf. (GLOBECOM). IEEE, 2021, pp. 1–6.
[139] M. Temiz, C. Horne, N. J. Peters, M. A. Ritchie, and C. Masouros, “An experimental study of radar-centric transmission for integrated sensing and communications,” IEEE Trans. Microw. Theory Techn., vol. 71, no. 7, pp. 3203–3216, 2023. [140] M. Temiz and C. Masouros, “Radar-centric Secure ISAC Architecture for Improved Communication Security and Sensing Privacy,” IEEE Trans. Commun., submitted. [141] Digital Video Broadcasting (DVB); Part 2: DVB-S2 Extensions (DVBS2X), European Telecommunicat-
ions Standards Institute (ETSI) Std. EN 302 307-2 V1.2.1, August 2020.
[142] C. Cook, Radar signals: An introduction to theory and application. Elsevier, 2012. [143] R. McAulay and J. Johnson, “Optimal mismatched filter design for radar ranging, detection, and resolution,” IEEE Trans. Inf. Theory, vol. 17, no. 6, pp. 696–701, 1971. [144] P. Wojaczek, F. Colone, D. Cristallini, and P. Lombardo, “Reciprocalfilter-based STAP for passive radar on moving platforms,” IEEE Trans. Aerosp. Electron. Syst., vol. 55, no. 2, pp. 967–988, 2018. [145] K. Han, S. Kang, and S. Hong,-
 “Sub-Nyquist sampling OFDM radar,” IEEE Trans. Radar Syst., vol. 1, pp. 669–680, 2023. [146] K.-C. Hung and D. W. Lin, “Pilot-based LMMSE channel estimation for OFDM systems with power–delay profile approximation,” IEEE Trans. Veh. Technol., vol. 59, no. 1, pp. 150–159, 2009. [147] J. T. Rodriguez, F. Colone, and P. Lombardo, “Supervised reciprocal filter for OFDM radar signal processing,” IEEE Trans. Aerosp. Electron. Syst., vol. 59, no. 4, pp. 3871–3889, 2023. [148] A. Quirini, F. Colone, and P-
. Lombardo, “Clutter suppression using thresholded reciprocal filter in ofdm radar,” IEEE Trans. Aerosp. Electron. Syst., 2024.
[149] Y. Dong, F. Liu, and Y. Xiong, “Joint receiver design for integrated sensing and communications,” IEEE Commun. Lett., vol. 27, no. 7, pp. 1854–1858, 2023. [150] Z. Yu, H. Ren, C. Pan, G. Zhou, R. Wang, M. Liu, and J. Wang, “Addressing the mutual interference in uplink ISAC receivers: A projection method,” IEEE Wireless Commun. Lett., 2024.
[151] Z. Yu, H. Ren, C. Pan, G. Zhou, D. Wang, C. Yuen, and J. Wang, “A Framework for Uplink ISAC Receiver Designs: Performance Analysis and Algorithm Development,” arXiv preprint arXiv:2503.02647, 2025. [152] A. R. Chiriyath, B. Paul, G. M. Jacyna, and D. W. Bliss, “Inner bounds on performance of radar and communications co-existence,” IEEE Trans. Signal Process., vol. 64, no. 2, pp. 464–474, 2015. [153] J. Hu, I. Valiulahi, and C. Masouros, “ISAC receiver design: a learningbased two-stage joint -
data-and-target parameter estimation,” IEEE Wireless Commun. Lett., vol. 13, no. 8, pp. 2105–2109, 2024. [154] I. Valiulahi, C. Masouros, M. Alaaeldin, and E. Alsusa, “ISAC Receiver Design: Joint DoA and Data Estimation in the Presence of Incomplete Signal Observations,” IEEE Open J. of Veh. Technol., 2025. [155] M. Bigdeli, H. Fathi, I. Valiulahi, and C. Masouros, “Noncoherent ofdm transmission via off-the-grid joint channel and data estimation,” IEEE Wireless Commun. Lett., vol. 12, no. 1, pp. 9-
9–103, 2022. [156] I. Valiulahi, C. Masouros, and A. P. Petropulu, “ISAC Super-Resolution Receivers: The Effect of Different Dictionary Matrices,” in 2025 IEEE Int. Radar Conf. (RADAR). IEEE, 2025, pp. 1–6.
[157] W. Jiang, D. Ma, Z. Wei, Z. Feng, P. Zhang, and J. Peng, “ISACNET: Model-driven deep learning for integrated passive sensing and communication,” IEEE Trans. Commun., vol. 72, no. 8, pp. 4692–4707, 2024.
[158] B. Smida, R. Wichman, K. E. Kolodziej, H. A. Suraweera, T. Riihonen, and A. Sabharwal, “In-band full-duplex: The physical layer,” Proc. IEEE, vol. 112, no. 5, pp. 433–462, 2024. [159] D. Erricolo, B. Smida, P.-Y. Chen, A. Rastgordani, M. Pav, F. Presta, K. E. Kolodziej, D. Werner, Z. Zhang, M. Balasubramanian, and A. Das, “In-band full-duplex for integrated sensing and communication: A review and perspective on advances in electromagnetics, antennas, and propagation,” IEEE J. Sel. Topics Ele-
ctro., Antennas Propag., 2025, in press. [160] T. Riihonen, S. Werner, and R. Wichman, “Mitigation of loopback selfinterference in full-duplex MIMO relays,” IEEE Trans. Signal Process., vol. 59, no. 12, pp. 5983–5993, 2011. [161] Y. Gong, R. Morawski, and T. Le-Ngoc, “Metamaterial absorber structure for Tx-Rx antenna isolation improvement in full-duplex massive MIMO,” IEEE Access, vol. 12, pp. 64 571–64 588, 2024. [162] Y. Gong, M. Mahmood, R. Morawski, and T. Le-Ngoc, “Dual-layer metamaterial rec-
tangular antenna arrays for in-band full-duplex massive MIMO,” IEEE Access, vol. 11, pp. 135 708–135 727, 2023. [163] C. B. Barneto, T. Riihonen, S. D. Liyanaarachchi, M. Heino, N. González-Prelcic, and M. Valkama, “Beamformer design and optimization for joint communication and full-duplex sensing at mmwaves,” IEEE Trans. Commun., vol. 70, no. 12, pp. 8298–8312, 2022. [164] C. B. Barneto, S. D. Liyanaarachchi, M. Heino, T. Riihonen, and M. Valkama, “Full duplex radio/radar technology: The enabler -
for advanced joint communication and sensing,” IEEE Wireless Commun., vol. 28, no. 1, pp. 82–88, 2021. [165] B. Smida, A. Sabharwal, G. Fodor, G. C. Alexandropoulos, H. A. Suraweera, and C.-B. Chae, “Full-duplex wireless for 6G: Progress brings new opportunities and challenges,” IEEE J. Sel. Areas Commun., vol. 41, no. 9, pp. 2729–2750, 2023. [166] C. Du, H. Zhang, X. Zhang, Z. Zhao, J. Yang, X. Zhang, Z. Xing, Z. Feng, S. Zuo, C. Xu, Y. Leng, and Z. Zhang, “A full-duplex based integrated sensing -
and communication survey: Principles, key techniques, and receiver design,” IEEE Communications Surveys & Tutorials, 2025, in press. [167] B. Smida, G. C. Alexandropoulos, T. Riihonen, and M. A. Islam, “Inband full-duplex multiple-input multiple-output systems for simultaneous communications and sensing: Challenges, methods, and future perspectives,” IEEE Signal Process. Mag., vol. 41, no. 5, pp. 8–16, 2024. [168] K. E. Kolodziej and Z. Popovic ́, “Simultaneous-multifunction phased arrays: Enabled-
 by in-band full-duplex technology,” IEEE Microw. Mag., vol. 25, no. 4, pp. 44–63, 2024. [169] K. E. Kolodziej, B. A. Janice, A. I. Sands, and B. T. Perry, “Scalable inband full-duplex phased arrays: Complexity reduction and distributed processing,” IEEE J. Sel. Areas Commun., vol. 41, no. 9, pp. 28082820, 2023. [170] M. A. Islam, G. C. Alexandropoulos, and B. Smida, “Joint analog and digital transceiver design for wideband full duplex MIMO systems,” IEEE Trans. Wireless Commun., vol. 21, no. 11, -
pp. 9729–9743, 2022. [171] G. C. Alexandropoulos, M. A. Islam, and B. Smida, “Full-duplex massive multiple-input, multiple-output architectures: Recent advances, applications, and future directions,” IEEE Veh. Technol. Mag., vol. 17, no. 4, pp. 83–91, 2022. [172] T. Le-Ngoc, Y. Gong, M. Mahmood, A. Koc, R. Morawski, J. G. Griffiths, P. Guillemette, J. Zaid, and P. Wang, “Full-duplex in massive multiple-input multiple-output,” IEEE Open J. Veh. Technol., vol. 5, pp. 560–576, 2024. [173] M. Mohammad-
i, Z. Mobini, H. Quoc Ngo, and M. Matthaiou, “Ten years of research advances in full-duplex massive MIMO,” IEEE Trans. Commun., vol. 73, no. 3, pp. 1756–1786, 2025. [174] K. E. Kolodziej, J. P. Doane, B. T. Perry, and J. S. Herd, “Adaptive beamforming for multi-function in-band full-duplex applications,” IEEE Wireless Commun., vol. 28, no. 1, pp. 28–35, 2021. [175] Z. Chen, K. V. Mishra, D. Pandey, and A. Sabharwal, “Near-ground precipitation sensing using full-duplex MIMO base stations,” IEEE J. -
Sel. Topics Electro., Antennas Propag., 2025, in press.
[176] L. Lin, W. Pan, H. Zhao, S. Zhang, S. Shao, and Y. Tang, “Joint optimization of beamforming and subarray assignment for full-duplex arrays in next generation broadcast systems,” IEEE Trans. on Broadcasting, vol. 71, no. 2, pp. 672–679, 2025. [177] B. Zhou, H. Gao, Z. Wei, X. Li, J. Wang, Y. Zhuang, and W. Wang, “Self-interference-alleviated multi-beam steering for on-demand sensing and communication performance tradeoff of full-duplex ISAC,” IEEE Trans. Wireless Commun., 2025, in press.

28
[178] Z. Xiao, R. Liu, M. Li, Q. Liu, and A. L. Swindlehurst, “A novel joint angle-range-velocity estimation method for MIMO-OFDM ISAC systems,” IEEE Trans. Signal Process., vol. 72, pp. 3805–3818, 2024. [179] M. Talha, G. David González, and B. Smida, “On the performance of vehicular full-duplex ISAC systems with cluster-based sensing models,” IEEE Trans. Wireless Commun., 2025, in press.
[180] B. Tang, H. Xu, K.-K. Wong, K. Meng, R. Murch, C.-B. Chae, and Y. Zhang, “Full-duplex FAS-assisted base station for ISAC,” IEEE Trans. Wireless Commun., 2025, in press.
[181] Y.-S. Shiu, S. Y. Chang, H.-C. Wu, S. C.-H. Huang, and H.-H. Chen, “Physical layer security in wireless networks: A tutorial,” IEEE Wireless Commun., vol. 18, no. 2, pp. 66–74, 2011. [182] N. Yang, L. Wang, G. Geraci, M. Elkashlan, J. Yuan, and M. Di Renzo, “Safeguarding 5G wireless communication networks using physical layer security,” IEEE Commun. Mag., vol. 53, no. 4, pp. 20–27, 2015. [183] R. Negi and S. Goel, “Secret communication using artificial noise,” in IEEE Veh. Technol. Conf., vo-
l. 62, no. 3. IEEE; 1999, 2005, p. 1906. [184] Z. Chu, H. Xing, M. Johnston, and S. Le Goff, “Secrecy rate optimizations for a MISO secrecy channel with multiple multiantenna eavesdroppers,” IEEE Trans. Wireless Commun., vol. 15, no. 1, pp. 283–297, 2015. [185] V.-D. Nguyen, T. Q. Duong, O. A. Dobre, and O.-S. Shin, “Joint information and jamming beamforming for secrecy rate maximization in cognitive radio networks,” IEEE Trans. Inf. Forensics Security, vol. 11, no. 11, pp. 2609–2623, 2016. [186] -
A. Deligiannis, A. Daniyan, S. Lambotharan, and J. A. Chambers, “Secrecy rate optimizations for MIMO communication radar,” IEEE Trans. Aerosp. Electron. Syst., vol. 54, no. 5, pp. 2481–2492, 2018. [187] N. Su, F. Liu, and C. Masouros, “Secure radar-communication systems with malicious targets: Integrating radar, communications and jamming functionalities,” IEEE Trans. Wireless Commun., vol. 20, no. 1, pp. 8395, 2020. [188] Z. Chen, S. Zhu, X. Li, and Y. Liu, “Secure transmission of integrated sens-
ing and communication systems with eavesdropper: From mainlode to sidelode deployment,” IEEE Trans. Veh. Technol., 2025. [189] B. He, F. Wang, and J. Cheng, “Joint secure transceiver design for integrated sensing and communication,” IEEE Trans. Wireless Commun., vol. 23, no. 10, pp. 13 377–13 393, 2024. [190] S. Li, H. Dong, C. Shan, X. Fang, W. Wu, and Z. Li, “Secure hybrid beamforming design for mmwave integrated sensing and communication systems,” IEEE Trans. Veh. Technol., 2025.
[191] F. Dong, W. Wang, X. Li, F. Liu, S. Chen, and L. Hanzo, “Joint beamforming design for dual-functional MIMO radar and communication systems guaranteeing physical layer security,” IEEE Trans. on Green Commun. Netw., vol. 7, no. 1, pp. 537–549, 2023. [192] Z. Ren, L. Qiu, J. Xu, and D. W. K. Ng, “Robust transmit beamforming for secure integrated sensing and communication,” IEEE Trans. Commun., vol. 71, no. 9, pp. 5549–5564, 2023. [193] D. Xu, X. Yu, D. W. K. Ng, A. Schmeink, and R. Schober, “Ro-
bust and secure resource allocation for ISAC systems: A novel optimization framework for variable-length snapshots,” IEEE Trans. Commun., vol. 70, no. 12, pp. 8196–8214, 2022. [194] Z. Ren, L. Qiu, and J. Xu, “Optimal transmit beamforming for secrecy integrated sensing and communication,” in ICC 2022-IEEE Int. Conf. Commun. IEEE, 2022, pp. 5555–5560. [195] E. Telatar, “Capacity of multi-antenna Gaussian channels,” European Trans. on Telecommun., vol. 10, no. 6, pp. 585–595, 1999. [196] A. O. Hero,-
 “Secure space-time communication,” IEEE Trans. Inf. Theory, vol. 49, no. 12, pp. 3235–3249, 2004. [197] H. Jia, X. Li, and L. Ma, “Physical layer security optimization with Cramér–Rao bound metric in ISAC systems under sensing-specific imperfect CSI model,” IEEE Trans. Veh. Technol., vol. 73, no. 5, pp. 6980–6992, 2023. [198] K. Hou and S. Zhang, “Optimal beamforming for secure integrated sensing and communication exploiting target location distribution,” IEEE J. Sel. Areas Commun., 2024.
[199] T. Xu, “Waveform-defined security: A low-cost framework for secure communications,” IEEE Internet Things J., vol. 9, no. 13, pp. 10 65210 667, 2021. [200] T. Xu, Y. Ye, and C. Masouros, “Signal Waveform Design for Resilient Integrated Sensing and Communications,” in 2024 14th Int. Symp. Commun. Syst., Netw. and Digit. Signal Process. (CSNDSP). IEEE, 2024, pp. 109–114. [201] T. Xu, C. Masouros, and I. Darwazeh, “Reliable, secure, and spectrally efficient isac using distributed multiuser mimo -
and non-orthogonal waveform,” in 2025 IEEE Comput. Soc. Annual Symp. VLSI (ISVLSI), vol. 1. IEEE, 2025, pp. 1–6.
[202] Y. Zhang, T. Xu, C. Masouros, and I. Darwazeh, “A Non-Orthogonal Waveform Enabled Spectrally Efficient Over-the-Air ISAC Transmission,” in 2024 IEEE 25th Int. Workshop Signal Process. Adv. Wireless Commun. (SPAWC). IEEE, 2024, pp. 586–590. [203] I. Darwazeh, H. Ghannam, and T. Xu, “The first 15 years of SEFDM: A brief survey,” in 2018 11th Int. Symp. Commun. Syst., Netw. & Digital Signal Process. (CSNDSP). IEEE, 2018, pp. 1–7.
[204] M. P. Daly and J. T. Bernhard, “Directional modulation technique for phased arrays,” IEEE Trans. Antennas Propag., vol. 57, no. 9, pp. 2633–2640, 2009. [205] Y. Ding and V. F. Fusco, “Establishing metrics for assessing the performance of directional modulation systems,” IEEE Trans. Antennas Propag., vol. 62, no. 5, pp. 2745–2755, 2014. [206] Y. Ding and V. Fusco, “Orthogonal vector approach for synthesis of multi-beam directional modulation transmitters,” IEEE Antennas Wireless Propag. Lett.-
, vol. 14, pp. 1330–1333, 2015. [207] A. Kalantari, M. Soltanalian, S. Maleki, S. Chatzinotas, and B. Ottersten, “Secure M-PSK communication via directional modulation,” in 2016 IEEE Int. Conf. Acoust., Speech Signal Process. (ICASSP). IEEE, 2016, pp. 3481–3485. [208] ——, “Directional modulation via symbol-level precoding: A way to enhance security,” IEEE J. Sel. Topics Signal Process., vol. 10, no. 8, pp. 1478–1493, 2016. [209] T. Xie, J. Zhu, and Y. Li, “Artificial-noise-aided zero-forcing synth-
esis approach for secure multi-beam directional modulation,” IEEE Commun. Lett., vol. 22, no. 2, pp. 276–279, 2017. [210] M. G. Amin and A. Hassanien, “On the similarity of sidelobes signal embedding in dfrc systems and directional modulations,” in 2024 IEEE RadarConf. IEEE, 2024, pp. 1–6. [211] S. Cao, M. Feng, T. Ba, A. Liu, and H. Ma, “Directional modulation based on dual-function radar-communication system,” Digit. Signal Process., vol. 133, p. 103866, 2023. [212] N. Su, F. Liu, Z. Wei, Y.-F. -
Liu, and C. Masouros, “Secure dualfunctional radar-communication transmission: Exploiting interference for resilience against target eavesdropping,” IEEE Trans. Wireless Commun., vol. 21, no. 9, pp. 7238–7252, 2022. [213] P. Liu, S. Xu, S. Tang, X. Wang, F. Xia, W. Yuan, and Z. Fei, “Sensing Assisted Secure Communications: A Rate-Splitting Approach,” IEEE Internet Things J., 2025.
[214] P. Liu, Z. Fei, X. Wang, J. A. Zhang, Z. Zheng, and Q. Zhang, “Securing multi-user uplink communications against mobile aerial eavesdropper via sensing,” IEEE Trans. Veh. Technol., vol. 72, no. 7, pp. 9608–9613, 2023. [215] N. Su, F. Liu, and C. Masouros, “Sensing-assisted eavesdropper estimation: An isac breakthrough in physical layer security,” IEEE Trans. Wireless Commun., vol. 23, no. 4, pp. 3162–3174, 2023. [216] D. Xu, Y. Xu, Z. Wei, S. Song, and D. W. K. Ng, “Sensing-enhanced secure c-
ommunication: Joint time allocation and beamforming design,” in 2023 21st Int. Symp. Modeling and Opt. in Mobile, Ad Hoc, Wireless Netw. (WiOpt). IEEE, 2023, pp. 673–680. [217] Y. Xu, M. Zheng, D. Xu, S. Song, and D. B. Da Costa, “Sensingaided near-field secure communications with mobile eavesdroppers,” IEEE Trans. Wireless Commun., 2025.
[218] Y. Cao, L. Duan, and R. Zhang, “Sensing for secure communication in isac: Protocol design and beamforming optimization,” IEEE Trans. Wireless Commun., 2024.
[219] F. Colone, F. Filippini, and D. Pastina, “Passive radar: Past, present, and future challenges,” IEEE aerospace and electronic systems magazine, vol. 38, no. 1, pp. 54–69, 2022. [220] K. Qu, J. Ye, X. Li, and S. Guo, “Privacy and security in ubiquitous integrated sensing and communication: Threats, challenges and future directions,” IEEE Internet Things Mag., vol. 7, no. 4, pp. 52–58, 2024. [221] H. D. Griffiths and C. J. Baker, An introduction to passive radar. Artech House, 2022. [222] R. L-
. Cigno, F. Gringoli, M. Cominelli, and L. Ghiro, “Integrating CSI sensing in wireless networks: Challenges to privacy and countermeasures,” IEEE Netw., vol. 36, no. 4, pp. 174–180, 2022. [223] R. N. Lothes, M. B. Szymanski, and R. G. Wiley, “Radar vulnerability to jamming,” Norwood, 1990. [224] J. Zou, C. Masouros, F. Liu, and S. Sun, “Securing the sensing functionality in ISAC networks: An artificial noise design,” IEEE Trans. Veh. Technol., vol. 73, no. 11, pp. 17 800–17 805, 2024. [225] H. Jia-
, R. Zhu, A. Sciarrone, and L. Ma, “Illegal sensing suppression for integrated sensing and communication system,” IEEE Internet Things J., 2024.

29
[226] A. Magbool, V. Kumar, M. Di Renzo, and M. F. Flanagan, “Hiding in Plain Sight: RIS-Aided Target Obfuscation in ISAC,” arXiv preprint arXiv:2503.05418, 2025.
[227] J. Chen, X. Lei, K. Meng, K. Han, Y. Zhang, C. Masouros, and A. P. Petropulu, “Sensing Security in Near-Field ISAC: Exploiting Scatterers for Eavesdropper Deception,” arXiv preprint arXiv:2510.20140, submitted. [228] G. Cui, J. Liu, H. Li, and B. Himed, “Target detection for passive radar with noisy reference channel,” in 2014 IEEE RadarConf. IEEE, 2014, pp. 0144–0148. [229] M. K. Ba ̨czyk, K. Kulpa, P. Samczyn ́ski, and M. Malanowski, “The impact of reference channel SNR on targets detectio-
n by passive radars using DVB-T signals,” in 2015 IEEE RadarConf. IEEE, 2015, pp. 0708–0712. [230] M. Greco, F. Gini, and A. Farina, “Radar detection and classification of jamming signals belonging to a cone class,” IEEE Trans. Signal Process., vol. 56, no. 5, pp. 1984–1993, 2008. [231] R. Komissarov and A. Wool, “Spoofing attacks against vehicular FMCW radar,” in Proc. 5th Workshop Attacks Sol. Hardware Security, 2021, pp. 91–97. [232] Y. Chen, W. Trappe, and R. P. Martin, “Detecting and localizi-
ng wireless spoofing attacks,” in 2007 4th Annual IEEE Commun. Soc. Conf. Sensor, Mesh Ad Hoc Commun. Netw. IEEE, 2007, pp. 193202. [233] H. C. Yildirim, M. F. Keskin, H. Wymeersch, and F. Horlin, “OFDMbased JCAS under Attack: The Dual Threat of Spoofing and Jamming in WLAN Sensing,” IEEE Internet Things J., 2025. [234] G. Chrysanidis, Y. Liu, and A. Argyriou, “A Replay Attack Against ISAC Based on OFDM,” IEEE Access, vol. 12, pp. 20 998–21 003, 2024. [235] J. Li, L. Lazos, and M. Li, “Securing OF-
DM-Based ISAC Systems Against Sensing Attacks,” in 2025 IEEE Conf. Commun. Netw. Security (CNS). IEEE, 2025, pp. 1–9. [236] T. Ma, X. Lei, H. Niu, and C. Yuen, “Sensing-resistant jamming: A novel physical layer attack in isac networks,” IEEE Wireless Commun. Lett., 2024. [237] P. E. Pace, Detecting and classifying low probability of intercept radar. Artech house, 2009. [238] M. C. Wicks, E. L. Mokole, S. D. Blunt, R. S. Schneible, and V. J. Amuso, Principles of waveform diversity and design. SciTe-
ch Publishing, 2011, vol. 2. [239] Y. Dong, G. A. Fabrizio, and M. G. Amin, “Dual-functional radar waveforms without remodulation,” in 2019 IEEE Radar Conference (RadarConf). IEEE, 2019, pp. 1–6. [240] T. Ma, Y. Xiao, X. Lei, H. Niu, M. Xiao, Y. L. Guan, and C. Yuen, “Sensing-Resistance-Oriented Design for Privacy-Concerned Secure Transmission in ISAC Scenarios,” IEEE Trans. Wireless Commun., 2025. [241] Q. Shi, Y. Wang, Z. Zhou, G. Cui, and P. Fan, “Low Probability of Intercept Signal Design for -
MIMO Integrated Sensing and Communication Systems,” IEEE Trans. Commun., 2025. [242] C. B. Barneto, T. Riihonen, M. Turunen, L. Anttila, M. Fleischer, K. Stadius, J. Ryynänen, and M. Valkama, “Full-duplex OFDM radar with LTE and 5G NR waveforms: Challenges, solutions, and measurements,” IEEE Trans. Microw. Theory Techn., vol. 67, no. 10, pp. 4042–4054, 2019. [243] A. Correas-Serrano, N. Petrov, M. Gonzalez-Huici, and A. Yarovoy, “MIMO OTFS with arbitrary time-frequency allocation for joint radar a-
nd communications,” IEEE Trans. Radar Syst., vol. 1, pp. 707–718, 2023. [244] N. Peters, C. Horne, and M. A. Ritchie, “ARESTOR: A multi-role RF sensor based on the Xilinx RFSoC,” in 2021 18th European Radar Conf. (EuRAD). IEEE, 2022, pp. 102–105. [245] P. M. McCormick, S. D. Blunt, and J. G. Metcalf, “Simultaneous radar and communications emissions from a common aperture, part I: Theory,” in 2017 IEEE RadarConf. IEEE, 2017, pp. 1685–1690. [246] T. C. Mealey and A. J. Duly, “BEEMER: A firmware-tune-
d, softwaredefined MIMO radar testbed,” in 2016 IEEE Int. Symp. on Phased Array Syst. and Technol. (PAST). IEEE, 2016, pp. 1–6.
[247] T. Xu, F. Liu, C. Masouros, and I. Darwazeh, “An experimental proof of concept for integrated sensing and communications waveform design,” IEEE Open J. Comm. Soc., vol. 3, pp. 1643–1655, 2022. [248] A. Sakhnini, S. De Bast, M. Guenach, A. Bourdoux, H. Sahli, and S. Pollin, “Near-field coherent radar sensing using a massive MIMO communication testbed,” IEEE Trans. Wireless Commun., vol. 21, no. 8, pp. 6256–6270, 2022.
[249] C. D. Ozkaptan, H. Zhu, E. Ekici, and O. Altintas, “A mmWave MIMO joint radar-communication testbed with radar-assisted precoding,” IEEE Trans. Wireless Commun., vol. 23, no. 7, pp. 7079–7094, 2023.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:17.466Z
- **Text Length:** 174801 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 29 of 29
