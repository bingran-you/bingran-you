# PDF Document: Arunruangsirilert - 2025 - Field Test of 5G New Radio (NR) UL-MIMO and UL-256QAM for HD Live-Streaming.pdf

**File Path:** Arunruangsirilert - 2025 - Field Test of 5G New Radio (NR) UL-MIMO and UL-256QAM for HD Live-Streaming.pdf

**Processed Date:** 2026-02-10T18:14:54.595Z

**File Size:** 234.04 KB

**Total Pages:** 5

**Extracted Pages:** 5

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3309

**Title:** Field Test of 5G New Radio (NR) UL-MIMO and UL-256QAM for HD Live-Streaming

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Field Test of 5G New Radio (NR) UL-MIMO and
UL-256QAM for HD Live-Streaming
Kasidis Arunruangsirilert Department of Computer Science and Communications Engineering, Waseda University, Tokyo, Japan kasidis@katto.comm.waseda.ac.jp
©2026 IEEE. Personal use of this material is permitted. Permission from IEEE must be obtained for all other uses, in any current or future media, including reprinting/republishing this material for advertising or promotional purposes, creating new collective works, for resale or redistribution to servers or lists, or reuse of any copyrighted component of this work in other works.
Abstract—The exponential growth of User-Generated Content (UGC), especially High-Definition (HD) live video streaming, places a significant demand on the uplink capabilities of mobile networks. To address this, the 5G New Radio (NR) standard introduced key uplink enhancements, including Uplink Multi-Input Multi-Output (UL-MIMO) and Uplink 256QAM, to improve throughput and spectral efficiency. However, while the benefits of these features for raw data rates are welldocumented, their practical impac-
t on real-time applications like live-streaming is not yet well understood. This paper investigates the performance of UL-MIMO and UL-256QAM for HD livestreaming over a commercial 5G network using the RealTime Messaging Protocol (RTMP). To ensure a fair assessment, we conduct a comparative analysis by modifying the modem firmware of commercial User Equipment (UE), allowing these features to be selectively enabled and disabled on the same device. Performance is evaluated based on key metrics, inclu-
ding dropped video frames and connection stability. Furthermore, this study analyzes 5G Radio Frequency (RF) parameters to quantify the spectral efficiency impact, specifically examining metrics derived from the Channel State Information (CSI) framework, including Reference Signal Received Power (CSIRSRP), Reference Signal Received Quality (CSI-RSRQ), and Signal-to-Interference-plus-Noise Ratio (CSI-SINR). Index Terms—5G New Radio (NR), Uplink 256QAM, Uplink MIMO, Live-Streaming, Radio Access Netw-
ork
I. INTRODUCTION
The emergence of 5G New Radio (NR) has enabled new applications such as massive IoT, Smart City, cloud gaming, Autonomous Vehicles, and Virtual/Augmented Reality (VR/AR) [1], [2]. A key use case is transmitting of User Generated Content (UGC), a trend that has grown since the early 2010s [3]. The increasing popularity of social media platforms, which encourage users to create and share multimedia content like HD live video [4], [5], has presented new challenges for mobile networks traditionally op-
timized for downlink traffic. During the 4G Long-Term Evolution (LTE) era, mobile network traffic was predominantly downlinkheavy, with most users consuming existing internet content rather than producing them. The recent rise of multimodal Generative AI (GenAI), capable of processing images, audio, and video, has further increased uplink transmissions as users attach multimedia payloads to their prompts [6]. This evolving usage pattern is causing mobile traffic to become more balanced as we progr-
ess toward the 6G era. To address the growing demand for high-performance uplink, 3GPP has introduced several new features in the 5G Standard [7], including Uplink MIMO (UL-MIMO) and Uplink 256QAM (UL-256QAM). Unlike conventional 4G LTE User Equipment (UE), which typically has only one uplink antenna, 5G UEs may possess more than one. This allows for the adoption of UL-MIMO, where a UE with two antennas can use spatial multiplexing to double its maximum uplink throughput in ideal signal conditions-
 or operate in transmit diversity mode to enhance connection reliability in weaker signal conditions. A previous study found that in a real-world commercial network, UL-MIMO-enabled UEs
deliver an average of 19.8% higher throughput on moving trains in urban areas, with up to a 33.5% improvement observed in more favorable signal conditions on the CBand spectrum [8]. However, since dual transmission antenna implementation is not mandatory under the 3GPP standard, many UE manufacturers omit this optional feature for design simplicity and cost-saving. Alternatively, Uplink 256QAM is simpler to implement as it requires no additional antennas on the UE side. It works by assigning Modul-
ation Coding Scheme (MCS) Index Table 2 (qam256) for uplink transmission instead of MCS Index Table 1 (qam64), as standardized in [9]. This can improve spectral efficiency by a maximum of 33.3% by allowing each symbol to carry 8 bits instead of the 6 bits permitted by 64QAM. The effectiveness of Uplink 256QAM, however, is highly dependent on the signal condition, requiring a Signal-to-Noise Ratio of over 30 dB to maintain stable communication, which is difficult to achieve in a real-world commerci-
al network environment. In our previous work [10], we confirmed this, finding that enabling UL-256QAM resulted in only 20% of resource blocks being modulated using 256QAM on a passive antenna network, yielding an uplink throughput gain of just 8.22%. While both studies highlight the advantages of UL-MIMO and UL-256QAM in enhancing uplink throughput and spectral efficiency, their impacts on real-time applications such as live-streaming remain largely unknown. Since these 5G features are expected to-
 be key enablers for Ultra HighDefinition (UHD) live-streaming, understanding their impact is crucial for planning Next-Generation Radio Access Networks (NG-RANs) to support emerging use cases. In this paper, the performance impact of UL-MIMO and UL256QAM on the live-streaming of HD video is investigated. By modifying the modem firmware, both features can be enabled and disabled on the same User Equipment, ensuring a fair comparison. Videos were transmitted to an RTMP server via a commercial 5G UE-
 and network, where performance was evaluated in terms of dropped video frames and the number of disconnections. Furthermore, 5G RF parameters were analyzed to understand the spectral efficiency impact of each feature, including key metrics from the Channel State Information (CSI) framework like CSI-RSRP, CSI-RSRQ, and CSI-SINR, which is crucial for RAN capacity planning.
II. FIELD TEST SETUP
A. Uplink MIMO Evaluation Environment
For the evaluation of Uplink MIMO, a User Equipment (UE) with two transmission antennas is required. Therefore, a KDDI au Speed Wi-Fi HOME 5G L13, based on the ZTE MC888 Ultra, equipped with the Qualcomm Snapdragon X65 5G RF Modem, was used [11]. The modem’s diagnostic port was exposed via an internal service mode, which permitted firmware modifications to limit the capability to a single transmission (Single-Tx) as needed. To collect RF parameters,
arXiv:2511.19868v1 [cs.NI] 25 Nov 2025

the device was connected to a laptop running AirScreen, a professional network drive test tool. Before each trial, UECapabilityInformation packets were verified to ensure the UE’s capability was configured as expected. The field test for ULMIMO was conducted on the network of a Japanese Mobile Network Operator (MNO), SoftBank, using a commercial plan and SIM card. Since the UE used for this experiment supports UL-MIMO only on Time Division Duplexing (TDD) frequency bands, the JR Yamanote line in -
central Tokyo was chosen for the test, as it has good coverage of SoftBank’s 5G Band n77 (3.4 GHz). To address potential result variability from the UE randomly connecting to SoftBank’s multiple n77 carriers—each with different path loss, coverage, and bandwidth, such as 3.4 GHz (40 MHz Bandwidth - NR-ARFCN 627360), 3.5 GHz (40 MHz Bandwidth - NR-ARFCN 638112), and 3.9 GHz (100 MHz Bandwidth - NR-ARFCN 660768)—the modem firmware was modified. This change locked the UE to 5G Standalone Mode on the -
target NR-ARFCN of 627360, which is SoftBank’s lowest frequency n77 carrier with the most base stations. Each trial involved looping the Yamanote Line once on a moving train with an average speed of 28 km/h according to GPS data, taking about 70 minutes to complete. The RF conditions are summarized in Table I for reference purposes. It should be noted that UL-256QAM was also enabled for these test scenarios. The collected RF data were then analyzed using AirScreen, the same software that was utili-
zed to collect the logs.
B. Uplink 256QAM Evaluation Environment
To evaluate Uplink 256QAM, the Japanese Samsung Galaxy S22 (SC-52C), which is equipped with the same Qualcomm Snapdragon X65 5G RF Modem, served as the User Equipment (UE). Since this smartphone runs the Android operating system, Network Signal Guru (NSG), the Android version of AirScreen, was installed on the phone to collect RF parameters. The same commercial plan and SIM card were used for this test. By accessing Samsung’s service mode menu, the UL-256QAM capability could be turned off as neede-
d for comparison. This study focused on two of SoftBank’s Frequency Division Duplexing (FDD) spectrums, n3 (1800 MHz - 15 MHz Bandwidth) and n28 (700 MHz 10 MHz Bandwidth), because MNOs globally are refarming FDD bands from LTE service to 5G NR, which enables UL256QAM on such spectrum. It is important to note that the n28 band is configured purely as 5G NR, whereas the n3 band employs Dynamic Spectrum Sharing (DSS), permitting the simultaneous use of the spectrum for both LTE and 5G NR services. T-
o ensure each band could be tested independently, the UE was locked to a specific frequency using the forcing function within the NSG application. The use of these FDD bands facilitates an investigation into not only the impact of UL-256QAM but also the advantages of migrating from LTE to 5G NR, since both Radio Access Technologies use Single-carrier FDMA (SCFDMA) for the uplink. The experiment was conducted on Tokyu Den-en-toshi Line, excluding the underground section (Futako-tamagawa to Minami-m-
achida Grandberry Park) due to densely deployed SoftBank FDD 5G NR base stations along the line. Each trial took approximately 30 minutes to complete on a moving train with an average speed of 51.5 km/h based on GPS data. Similar to the UL-MIMO evaluation, RF conditions can be found in Table I. Since the smartphone has only a Single Tx antenna, UL-MIMO is not supported and hence not enabled in these test scenarios.
TABLE I: Summary of RF Conditions by Test Case
Freq DL UL SSB BW MCS Tx CSI CSI CSI Band Freq Freq ARFCN (MHz) Table Conf. RSRP RSRQ SINR (MHz) (MHz) (dBm) (dB) (dB) Uplink MIMO Evaluation
n77 3420 3420 627360 40 qam256 1-Tx -92.28 -15.43 8.76
2-Tx -91.71 -15.53 8.58 Uplink 256QAM Evaluation
n28 798 743 159630 10 qam64 1-Tx -86.79 -15.33 6.34
qam256 -89.60 -15.33 6.22
n3 1852.5 1757.5 369870 15 qam64 1-Tx -90.19 -15.46 8.96
qam256 -90.79 -15.60 8.78
0.0% 1.0% 2.0% 3.0% 4.0% 5.0% 6.0% 7.0% 8.0%
Dropped Frame (%)
0123456789
Disconnec�on #
1 Tx 2 Tx
Fig. 1: UL-MIMO: Live Encoding Performance
Following the trials, the RF logs from Network Signal Guru (NSG) were analyzed using AirScreen on a PC.
C. Live-Streaming Configuration
To understand the behavior of live-streaming applications utilizing the RTMP protocol, an RTMP server was hosted on a server in Tokyo, Japan, using SRS Media Server (v6.0.155). For the client, Open Broadcaster Software (OBS) Studio (v30.1.1) was installed on a laptop equipped with an Intel Wi-Fi 6 AX200 adapter. The laptop was connected to the network via Wi-Fi, either directly to a KDDI au Speed WiFi HOME 5G L13 router or through the built-in tethering function of a Samsung Galaxy S22 Ultra. In O-
BS, the live video was encoded using the H.264/AVC codec via the AMD Advanced Media Framework (AMF) hardware encoder, with the rate control mode set to Constant Bit Rate (CBR) to provide a stable uplink load for isolating network performance. Furthermore, the “Dynamically change bitrate to manage congestion (Beta)” feature was not enabled, as it is unsupported by the AMD AMF hardware encoder used in this study. Following live encoding recommendations from YouTube and Twitch [12], [13], the keyfram-
e interval was set to two seconds, and the maximum number of consecutive Bframes was set to two. Based on preliminary experiments, target bitrates of 5000 kbps and 3000 kbps were selected for the UL-MIMO and UL-256QAM evaluations, respectively. The video was transmitted to the server using the RTMP protocol, and performance was evaluated by examining the OBS logs for the number of disconnections and dropped frames.
III. RESULT AND ANALYSIS
A. Uplink MIMO
Figure 1 presents the dropped frame percentage and the number of disconnections from the RTMP server. The results indicate that UL-MIMO reduces the dropped frame percentage by a marginal 0.1%. However, this slight improvement is accompanied by a significant increase in connection instability. When UL-MIMO was enabled, the OBS client re-established its connection to the RTMP server eight times, a substantial increase compared to five times for the single-transmit configuration. This instability ari-
ses because a standard UE, operating under Power Class 3, is limited to a maximum transmission power of 23 dBm. With ULMIMO enabled, this power budget is divided between two

0.0 1.0 2.0 3.0 4.0 5.0 6.0
PHY Thpt. (Mbps)
MAC Thpt. (Mbps)
0.0 0.5 1.0 1.5 2.0
MIMO Rank
0.0 2.0 4.0 6.0 8.0 10.0 12.0
Spectral Efficiency (Bit/Symbol)
Block Error Rate (BLER) (%)
0 2000 4000 6000 8000 10000 12000 14000
Resource Block/s
1 Tx 2 Tx
Fig. 2: UL-MIMO: RF Parameters
0%
20%
40%
60%
80%
100%
1-Tx 2-Tx QPSK 16QAM 64QAM 256QAM
Fig. 3: UL-MIMO: Uplink Modulation Utilization (%)
transmission antennas, effectively limiting each MIMO chain to a maximum of 20 dBm. Although a UL-MIMO-capable UE can utilize transmission diversity to compensate for this reduced power per chain, a single, more powerful transmission is more effective at overcoming propagation loss in poor channel conditions, thus providing a more stable connection. To address this limitation, 3GPP has standardized High Power User Equipment (HPUE), which allows certified UEs in Power Class 2 (PC2) and Power Class -
1.5 (PC1.5) to transmit at higher powers of 26 dBm and 29 dBm, respectively. This restores the power per antenna to levels comparable to the single-transmit case, thereby mitigating the negative effects of power division across multiple antenna chains [7]. The performance impact of HPUE on real-time applications is beyond the scope of this study and will be investigated in future work. Figure 2 illustrates the RF parameters obtained from AirScreen. Due to the use of a Constant Bit Rate (CBR) rate -
control mode, there was no significant difference in the MAC layer or Physical (PHY) layer throughput between the two trials. However, enabling UL-MIMO resulted in a slight increase in the Block Error Rate (BLER) by 0.49%, indicating a higher re-transmission probability, which could potentially increase latency. Despite this, the primary advantage of ULMIMO is its ability to utilize spatial multiplexing, allowing for the transmission of two independent data streams. The effectiveness of this opera-
tion is quantified by the MIMO Rank, which indicates the number of data streams being transmitted. The results show that the UL-MIMO configura
0.0% 1.0% 2.0% 3.0% 4.0% 5.0% 6.0% 7.0%
n28 (700 MHz)
n3 (1800 MHz)
Dropped Frame
(%)
0123456
n28 (700 MHz)
n3 (1800 MHz)
Disconnec�on
#
qam64 qam256
Fig. 4: UL-256QAM: Live Encoding Performance
tion achieved an average MIMO Rank of 1.41, a significant improvement over the fixed rank of 1.00 in the singletransmit configuration. This enhancement led to a 17.05% reduction in the number of uplink resource blocks consumed for the Physical Uplink Shared Channel (PUSCH), signifying a substantial improvement in spectral efficiency. Further analysis of spectral efficiency is presented in Figure 3, which details the utilization percentage of each modulation scheme for PUSCH. While enabling UL-MIMO-
 led to a 7.3% decrease in the use of 256QAM, the availability of transmission diversity compensated for this in mediumquality channel conditions. Approximately 3% of resource blocks were modulated using 16QAM (4 bits/symbol) instead of QPSK (2 bits/symbol), which partially offset the spectral efficiency loss from the reduced 256QAM utilization. In summary, although enabling UL-MIMO may lead to increased disconnections in challenging RF environments, it improves spectral efficiency by 17.05%. This-
 allows for more effective use of the frequency spectrum, which can enhance cell capacity in congested scenarios like mass gathering and live concerts. The adoption of HPUE on UL-MIMO-capable UEs is expected to mitigate connection stability issues and improve the overall Quality-of-Experience (QoE) for live video transmission applications.
B. Uplink 256QAM
Figure 4 presents the dropped frame percentage and the number of disconnections from the RTMP server on frequency bands n3 (1800 MHz) and n28 (700 MHz), comparing performance with UL-256QAM enabled (qam256 MCS Table) versus disabled (qam64 MCS Table). The results for dropped frames were mixed; enabling UL-256QAM decreased the dropped frame rate by 0.6% on the higher frequency band n3 but increased it by 0.8% on the lower frequency band n28. However, a notable improvement in connection stability wa-
s observed. Enabling UL-256QAM reduced the number of connection re-establishments from three on band n3 and five on band n28 to a consistent two across both bands, suggesting a more stable user experience. Figure 5 shows the RF parameters logged by Network Signal Guru (NSG). As in the Uplink MIMO experiments, the use of a Constant Bit Rate (CBR) mode resulted in no significant throughput difference between scenarios. However, enabling UL-256QAM had a detrimental effect on link reliability at the p-
hysical layer, evidenced by a significant increase in the Block Error Rate (BLER). The BLER increased from 6.92% to 8.27% for band n3 and from 8.62% to 9.72% for band n28. This degradation led to a decrease in spectral efficiency, as the number of uplink resource blocks consumed by the UE increased by 9.19% and 8.43% for bands n3 and n28, respectively.

0 5 10 15 20 25 30
n28 (700 MHz)
n3 (1800 MHz)
Average MCS
Index
0.0 0.5 1.0 1.5 2.0 2.5 3.0 3.5 4.0
n28 (700 MHz)
n3 (1800 MHz)
n28 (700 MHz)
n3 (1800 MHz)
PHY Thpt.
(Mbps)
MAC Thpt.
(Mbps)
0.0 2.0 4.0 6.0 8.0 10.0
n28 (700 MHz)
n3 (1800 MHz)
n28 (700 MHz)
n3 (1800 MHz)
Spectral
Efficiency
(Bit/Symbol)
Block Error Rate
(BLER) (%)
0 2000 4000 6000 8000 10000
n28 (700 MHz)
n3 (1800 MHz)
Resource
Block/s
qam64 qam256
Fig. 5: UL-256QAM: RF Parameters
0%
20%
40%
60%
80%
100%
qam64 qam256 qam64 qam256
n28 (700 MHz) n3 (1800 MHz)
QPSK 16QAM 64QAM 256QAM
Fig. 6: UL-256QAM: Uplink Modulation Utilization (%) As detailed in Figure 6, which illustrates the utilization of each PUSCH modulation scheme. When the qam256 MCS table was enabled, 17.7% and 30.8% of resource blocks were modulated using 256QAM on bands n3 and n28, respectively. However, the utilization of lower-order modulations like QPSK and 16QAM also increased by approximately 5% each, which negated the potential spectral efficiency gains. This outcome is a consequence of the MCS table imple-
mentation in the 5G standard, which permits a maximum of 32 entries. The qam256 table accommodates the higher modulation by removing intermediate target code rates for lower-order modulations. For instance, the qam64 table defines ten, seven, and twelve target code rates for QPSK, 16QAM, and 64QAM, respectively, whereas the qam256 table reduces these to five, six, and nine. This reduced granularity impairs linkadaptation in suboptimal conditions. Although some RAN vendors offer proprietary solutio-
ns to dynamically switch between MCS tables based on signal quality, such features are beyond the scope of this work.
In conclusion, while enabling UL-256QAM can improve channel capacity and result in a more stable application-layer connection, it negatively impacts physical layer performance. The UE consumes significantly more resource blocks and exhibits a higher BLER, offsetting the spectral efficiency gains from 256QAM. Therefore, MNOs should carefully evaluate channel quality and cell capacity before deploying this feature. Furthermore, future Next-Generation RAN (NG-RAN) standards should consider expanding -
the number of MCS table entries to better support higher modulation schemes such as 1024QAM.
IV. CONCLUSIONS AND FUTURE WORK
In this paper, the performance of Uplink MIMO (ULMIMO) and UL-256QAM for live HD video streaming over a commercial 5G Standalone (SA) network were investigated. The results show a significant trade-off between improving spectral efficiency and maintaining connection stability for real-time applications. Enabling UL-MIMO demonstrated a substantial improvement in spectral efficiency by reducing resource block consumption, which is highly beneficial for increasing cell capacity in congested environme-
nts. However, this gain came at the cost of reduced connection stability, evidenced by a significant increase in RTMP disconnections when UL-MIMO was active. This instability is attributed to the division of the User Equipment’s (UE’s) 23 dBm power budget across two antennas, which can impair performance in poor channel conditions. Conversely, enabling UL-256QAM improved applicationlayer stability by reducing the number of disconnections. However, this benefit was offset by degraded physical layer-
 performance, as the results show a significantly increased Block Error Rate (BLER) and an 8-9% increase in resource block consumption. The degradation in physical layer link stability is due to the limited number of entries in the standardized qam256 Modulation and Coding Scheme (MCS) table, which impairs link-adaptation capabilities and negates potential spectral efficiency gains. These results indicate that while these 5G features can enhance network performance, their application to live strea-
ming requires careful consideration of the deployment environment, number of users, cell planning, and overall channel quality. For future work, an investigation into High-Power User Equipment (HPUE) is needed to determine if its higher transmission power can mitigate the connection instability observed with UL-MIMO, thereby allowing applications to benefit from its spectral efficiency gains without compromising reliability . Additionally, future Next-Generation RAN (NG-RAN) standards should addre-
ss the limitations of the current MCS Table design, which impairs link-adaptation capabilities, to better accommodate higher-order modulations such as 1024QAM as networks evolve toward 6G . Finally, to generalize the findings beyond the specific context of this study, urban commuter rail lines in Tokyo, subsequent research should encompass a wider variety of environments, including diverse geographies, mobility scenarios, network operators, and real-time protocols such as SRT or WebRTC.
ACKNOWLEDGEMENT
This paper is supported by the Japan Science and Technology Agency (JST) CRONOS Grant Number JPMJCS25N2. Additionally, the author would like to express their gratitude to PEI Xiaohong of Qtrun Technologies for providing Network Signal Guru (NSG) and AirScreen, the cellular network drive test software used for result collection and analysis in this research.

REFERENCES
[1] M. Ali, F. Naeem, G. Kaddoum, and E. Hossain, “Metaverse communications, networking, security, and applications: Research issues, state-of-the-art, and future directions,” IEEE Communications Surveys & Tutorials, vol. 26, no. 2, pp. 1238–1278, 2024. [2] S. Islam, A. Zainab Abdulsalam, B. Anil Kumar, M. Kamrul Hasan, R. Kolandaisamy, and N. Safie, “Mobile networks toward 5g/6g: Network architecture, opportunities and challenges in smart city,” IEEE Open Journal of the Communications Society, vo-
l. 6, pp. 3082–3093, 2025. [3] M. Cha, H. Kwak, P. Rodriguez, Y.-Y. Ahn, and S. Moon, “Analyzing the video popularity characteristics of large-scale user generated content systems,” IEEE/ACM Transactions on Networking, vol. 17, no. 5, pp. 1357–1370, 2009. [4] Ericsson, “Live streaming in social media - mobility report,” Nov 2016. [Online]. Available: https://www.ericsson.com/en/reports-and-papers/ mobility-report/articles/latest-social-media-trend-live-streaming
[5] J. Flynn, The Impact of Live Streaming and Digital Media, 2024, pp. 57–69. [6] Ericsson, “Genai impact on traffic – ericsson mobility report,” Nov 2024. [Online]. Available: https://www.ericsson.com/en/reportsand- papers/mobility- report/articles/genai- impact- on- mobile- networktraffic
[7] NR; User Equipment (UE) radio transmission and reception; Part 1: Range 1 Standalone, 3GPP Standard TS 38.101-1 version 16.5.0 Release 16, Nov. 2022. [8] K. Arunruangsirilert, P. Wongprasert, and J. Katto, “Performance evaluations of c-band 5g nr fr1 (sub-6 ghz) uplink mimo on urban train,” in 2023 IEEE Wireless Communications and Networking Conference (WCNC), 2023, pp. 1–6.
[9] NR; Physical layer procedures for data, 3GPP Standard TR 38.214 Version 17.1.0 Release 17, May. 2022. [10] K. Arunruangsirilert, P. Wongprasert, and J. Katto, “Performance evaluation of uplink 256qam on commercial 5g new radio (nr) networks,” in 2024 IEEE Wireless Communications and Networking Conference (WCNC), 2024, pp. 1–6. [11] Qualcomm, “Snapdragon x65 5g modem-rf system,” 2021. [Online]. Available: https://www.qualcomm.com/products/technology/modems/ snapdragon-x65-5g-modem-rf-system [12-
] Google, “Choose live encoder settings, bitrates, and resolutions - youtube help.” [Online]. Available: https://support.google.com/ youtube/answer/2853702?hl=en [13] Twitch, “Twitch help portal.” [Online]. Available: https://help.twitch. tv/s/article/broadcasting-guidelines?language=en US

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:54.595Z
- **Text Length:** 25725 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 5 of 5
