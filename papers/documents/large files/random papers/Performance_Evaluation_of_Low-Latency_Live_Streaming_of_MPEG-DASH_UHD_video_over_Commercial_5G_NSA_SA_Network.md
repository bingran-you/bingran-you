# PDF Document: Arunruangsirilert et al. - 2022 - Performance Evaluation of Low-Latency Live Streaming of MPEG-DASH UHD video over Commercial 5G NSAS.pdf

**File Path:** Arunruangsirilert et al. - 2022 - Performance Evaluation of Low-Latency Live Streaming of MPEG-DASH UHD video over Commercial 5G NSAS.pdf

**Processed Date:** 2026-02-10T18:18:01.722Z

**File Size:** 729.03 KB

**Total Pages:** 6

**Extracted Pages:** 6

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3349

**Title:** Performance Evaluation of Low-Latency Live Streaming of MPEG-DASH UHD video over Commercial 5G NSA/SA Network

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Performance Evaluation of Low-Latency Live
Streaming of MPEG-DASH UHD video over
Commercial 5G NSA/SA Network
Kasidis ARUNRUANGSIRILERT∗, Bo WEI∗, Hang SONG†, Jiro KATTO∗ ∗Department of Computer Science and Communications Engineering, Waseda University, Tokyo, Japan †School of Engineering, The University of Tokyo, Tokyo, Japan {kasidis, weibo, katto}@katto.comm.waseda.ac.jp, songhang@g.ecc.u-tokyo.ac.jp
©2022 IEEE. Personal use of this material is permitted. Permission from IEEE must be obtained for all other uses, in any current or future media, including reprinting/republishing this material for advertising or promotional purposes, creating new collective works, for resale or redistribution to servers or lists, or reuse of any copyrighted component of this work in other works.
Abstract—5G Standalone (SA) is the goal of the 5G evolution, which aims to provide higher throughput and lower latency than the existing LTE network. One of the main applications of 5G is the real-time distribution of Ultra High-Definition (UHD) content with a resolution of 4K or 8K. In Q2/2021, Advanced Info Service (AIS), the biggest operator in Thailand, launched 5G SA, providing both 5G SA/NSA service nationwide in addition to the existing LTE network. While many parts of the world are still i-
n process of rolling out the first phase of 5G in Non-Standalone (NSA) mode, 5G SA in Thailand already covers more than 76% of the population. In this paper, UHD video will be a real-time live streaming via MPEG-DASH over different mobile network technologies with minimal buffer size to provide the lowest latency. Then, performance such as the number of dropped segments, MAC throughput, and latency are evaluated in various situations such as stationary, moving in the urban area, moving at high spe-
ed, and also an ideal condition with maximum SINR. It has been found that 5G SA can deliver more than 95% of the UHD video segment successfully within the required time window in all situations, while 5G NSA produced mixed results depending on the condition of the LTE network. The result also reveals that the LTE network failed to deliver more than 20% of the video segment within the deadline, which shows that 5G SA is absolutely necessary for low-latency UHD video streaming and 5G NSA may not be -
good enough for such task as it relies on the legacy control signal.
Index Terms—5G Standalone, 5G SA, low-latency, loss, UHD, live streaming, MPEG-DASH
I. INTRODUCTION
The advancement in technology drives the demand for better radio access networks (RAN). While the existing 4G LTE network may be sufficient for the majority of use cases, the rise of UHD video, VR, AR, Industry Automation, Self Driving Vehicle, Internet of Things, etc, requires significantly higher throughput and much lower latency beyond the capability of the existing network [1]. To cope with these issues and lay a strong foundation for the implementation of new technologies, the mobile network -
has been evolved to the fifth generation (5G), which promises up to 20 Gbps peak downlink throughput and 10 Gbps peak uplink throughput with latency as low as 1 ms for ultra-reliable low-latency communication (URLLC) and also high mobility is a part of the requirements [2][3][4]. While the ultimate goal of 5G evolution is to migrate everything, from radio access to the core to the newer generation.
The cost and complexity to roll out such big changes in a short period of time are proved to be impossible. With the demand for the new generation network growing rapidly, 3GPP proposed two 5G deployment types in its Release 15 [5]: • 5G Non-Standalone (NSA): By utilizing LTE Evolved Packet Core (EPC) and LTE RAN as the anchor and provide mobility, coverage, and signaling, then adding 5G as the Secondary Carrier Group (SCG), the deployment of 5G Core (5GC) can be avoided in the initial stage of 5G-
 deployment as shown in Figure 1. Therefore, operators can roll out 5G in a shorter period of time with reduced cost. • 5G Standalone (SA): 5GC is being deployed to permit full-scale 5G deployment with new features and functionalities that 5G promise such as Network Slicing, URLLC, and Multi-Gbps support [6].
Fig. 1. 5G Non-Standalone (NSA) Topology
In Thailand, the mobile network traffic increased dramatically every year, which drives the demand for 5G networks. The spectrum auction was organized in February 2020 [7] followed by the nationwide rollout of 5G NSA service on 2500 MHz n41 band by Thailand’s biggest operator, AIS, within hours after paying for the spectrum [8]. It then quickly followed by
arXiv:2511.20961v1 [cs.NI] 26 Nov 2025

Fig. 2. 5G Standalone (SA) Topology
the roll-out of low frequency 5G service on 700 MHz n28 band to provide coverage in rural areas. Later on, 5G SA service was operational in parallel with 5G NSA service in July 2021 [9]. Finally, as of December 2021, more than 76% of the Thai population are covered by 5G [10]. Therefore, AIS has 5G SA, 5G NSA, and LTE networks with reasonable coverage, allowing the evaluation and comparison between each network technology. While there are many solutions for real-time UHD video streaming, one of th-
e most popular standards that allow for adaptive video streaming is MPEG-DASH [11][12]. Since it is expected that many video streaming platforms will use MPEG-DASH for real-time UHD video streaming widely in the future, and due to the current availability of 5G SA network with good coverage across the globe, there is almost no study about the behavior of MPEG-DASH when used for realtime UHD video streaming over commercial 5G SA network. Therefore, in this paper, the UHD video will be live-streamed-
 over MPEG-DASH protocol over three types of network: LTE, 5G NSA, and 5G SA, then the performance will be evaluated, compared, and presented. The rest of this paper is organized as follows. Section II will provide some of the previous works. Section III describes how the experiment is set up and how the performance is evaluated in each situation. Section IV presents experimental results with some analysis. Finally, the conclusion and future work should be discussed in Section V.
II. RELATED WORK
Although there is previous work that evaluates 5G throughput in Thailand at the major metro station in Bangkok [13], the study only measures average throughput, latency, and loss when UE is stationary using the synthetic test, which may not represent the behavior of real-time MPEG-DASH video
streaming. Additionally, the experiment was conducted before 5G SA was launched commercially in Thailand, which implied that the test was done on 5G NSA, which may not necessarily be the final form of the 5G network. As for the evaluation of MPEG-DASH behavior over mobile networks, there is a previous study [14] on the performance of video streaming using MPEG-DASH, RTSP, and RTMP, in both Video-on-Demand (VoD) and live video streaming cases. But the experiment was conducted over LTE network in id-
eal lab condition with no interference from neighbor cell and UE was at stationary. The video used was also a basic 720p video with a bitrate of 2,500 kbps, which is significantly lower than the requirement of the UHD video. Therefore, the performance of MPEG-DASH when used for live streaming with UHD payload over commercial 5G SA network shall be investigated.
III. EXPERIMENT SETUP
A. User Equipment (UE)
To get the full potential of the network, UE that is compatible with 5G SA, 5G NSA, and LTE network in Thailand is needed. Samsung Galaxy Z Flip3 5G (SM-F711B) was used as the UE for the experiment. This UE has Qualcomm Snapdragon 888 Octa-Core processor with 8GB of RAM and runs Android 11 as the operating system. The UE also contains Qualcomm Snapdragon X60 5G RF Modem, which supports 5G SA, 5G NSA, and also LTE mobile network. Since the streaming will be done using software on the laptop, the UE-
 was connected to a laptop via the USB interface in tethering mode to provide internet connectivity to the laptop at the link speed of 425.9 Mbps. The USB interface also provides modem parameters to the laptop, so parameters such as MAC throughput, signal quality, etc. can be logged using AirScreen, a mobile network drive test software by Qtrun Technologies.
B. Mobile Network Configuration
Since there is only one mobile network in Thailand that provide reasonable 5G SA coverage, AIS was chosen, and “5G Serenade Extra Max Speed Package 1199 Baht” plan was used, which allow unlimited access to 5G SA, 5G NSA, and LTE network with the maximum connection speed of 1 Gbps. At the time the experiment was conducted, there were two 5G bands in service by AIS: 700 MHz (n28) and 2500 MHz (n41). The 2500 MHz (n41) band was allowed to be deployed since February 2020, while 700 MHz (n28) band depl-
oyment started in January 2021 due to deferment by the regulator, NBTC [15], resulting in not very good coverage and poor quality of service. Therefore, for the 5G SA test, the UE was locked to use 5G on 2500 MHz (n41) band only. The network configuration for the 5G SA test can be seen in Table I. As for the 5G NSA experiment, an LTE anchor band is needed for signaling according to 5G NSA architecture. LTE 1800 MHz (Band 3) was chosen as the anchor band, which resulted in DC 3A-n41 EN-DC combinati-
on, for this experiment because it is the default anchor band for 5G NSA on AIS, it has the widest bandwidth among available LTE

TABLE I TECHNICAL PARAMETER FOR AIS 5G SA NETWORK
Parameters Values
Frequency Band TDD 2500 MHz (n41) NR-ARFCN 511950 Bandwidth 60/80 MHz depend on area (100 MHz for AIS D.C.) TDD Slots Configuration (DL/UL) 7/2 TDD Symbols Configuration (DL/UL) 6/4 (9/4 for AIS D.C.) Subcarrier Spacing (SCS) 30 kHz Number of Resource Blocks (RB) 162 (60 MHz), 217 (80 MHz), 273 (100 MHz) Number of Component Carrier (CC) 1 Number of Layer 4 gNodeB MIMO 64T64R Massive MIMO Split into 8 Beams of 8T8R (4T4R for AIS D.C.) UE MIMO (gNodeB Tx/Device Rx) 4×4 MCS Table (DL/UL) 256QAM/256QA-
M
Bands on AIS, and it’s the most supported combination among commercially available UE as Chinese network also use this combination. The technical parameter for the 5G NSA network test on AIS can be found in Table II.
TABLE II TECHNICAL PARAMETER FOR AIS 5G NSA NETWORK
Parameters Values
4G LTE Parameters Frequency Band FDD 1800 MHz (LTE Band 3) EARFCN 1450 Bandwidth 20 MHz Subcarrier Spacing (SCS) 15 kHz Number of Resource Blocks (RB) 100 Number of Layer 2 or 4 depending on area eNodeB MIMO 2T2R or 4T4R depending on area UE MIMO (eNodeB Tx/Device Rx) 2×4 or 4×4 depending on area MCS Table (DL/UL) 256QAM/64QAM
5G NR Parameters Frequency Band TDD 2500 MHz (n41) NR-ARFCN 511950 Bandwidth 60/80 MHz depend on area (100 MHz for AIS D.C.) TDD Slots Configuration (DL/UL) 7/2 TDD Symbols Configuration (DL/UL) 6/4 (9/4 for AIS D.C.) Subcarrier Spacing (SCS) 30 kHz Number of Resource Blocks (RB) 162 (60 MHz), 217 (80 MHz), 273 (100 MHz) Number of Component Carrier (CC) 1 Number of Layer 4 gNodeB MIMO 64T64R Massive MIMO Split into 8 Beams of 8T8R (4T4R for AIS D.C.) UE MIMO (gNodeB Tx/Device Rx) 44 MCS Table (DL/-
UL) 256QAM/256QAM
As for the LTE experiment, AIS allows aggregation of up to three LTE component carriers with two combinations available, CA 1A-1A-3A and CA 1A-3A-8A. Both of the combinations offer a total of 40 MHz aggregated bandwidth (except “AIS D.C.” where all combination offers 45 MHz aggregated bandwidth due to one of LTE 2100 MHz carrier having 15 MHz of bandwidth instead of 10 MHz), but MIMO can be different in each carrier when Carrier Aggregation is active. Since LTE 900 MHz (LTE Band 8) is deployed wit-
h 2T2R MIMO only. To keep the results consistent, CA 1A1A-3A was manually selected. Table III shows the technical parameter for the LTE experiment.
C. Video Transmission
The source file was “70th NHK Kouhaku Uta Gassen” recorded directly from NHK BS4K via BS satellite without any transcoding in m2ts container. The file contains 10bit HLG H.265/HEVC 3840x2160p59.94 video stream at 25 Mbps with three AAC audio tracks with 2.0, 5.1, and
TABLE III TECHNICAL PARAMETER FOR AIS 4G LTE NETWORK
Parameters Values
Primary Cell (PCell) Frequency Band FDD 1800 MHz (LTE Band 3) EARFCN 1450 Bandwidth 20 MHz Subcarrier Spacing (SCS) 15 kHz Number of Resource Blocks (RB) 100 Number of Layer 2 or 4 depending on area eNodeB MIMO 2T2R or 4T4R depending on area UE MIMO (eNodeB Tx/Device Rx) 2×4 or 4×4 depending on area MCS Table (DL/UL) 256QAM/64QAM
Secondary Cell 1 (SCell 1) Frequency Band FDD 2100 MHz (LTE Band 1) EARFCN 350 Bandwidth 10 MHz Subcarrier Spacing (SCS) 15 kHz Number of Resource Blocks (RB) 50 Number of Layer 2 or 4 depending on area eNodeB MIMO 2T2R or 4T4R depending on area UE MIMO (eNodeB Tx/Device Rx) 2×4 or 4×4 depending on area MCS Table (DL/UL) 256QAM/64QAM
Secondary Cell 2 (SCell 2) Frequency Band FDD 2100 MHz (LTE Band 1) EARFCN 550 (525 for AIS D.C.) Bandwidth 10 MHz (15 MHz for AIS D.C.) Subcarrier Spacing (SCS) 15 kHz Number of Resource Blocks (RB) 50 (75 for AIS D.C.) Number of Layer 2 or 4 depending on area eNodeB MIMO 2T2R or 4T4R depending on area UE MIMO (eNodeB Tx/Device Rx) 2×4 or 4×4 depending on area MCS Table (DL/UL) 256QAM/64QAM
22.2 channel audio. The file was remux using FFmpeg to mp4 and only 2.0 channel AAC audio was kept. Wowza Streaming Engine was installed on a desktop computer with 1 Gbps (Both Downlink and Uplink) FTTx connection. Wowza Streaming Engine was configured so that it passes through the input RTMP stream directly to MPEG-DASH Streaming Packetizer without any additional transcoding. Since adaptive multi-bitrate streaming is not the objective of this paper, only one video stream in 4K UHD is available. M-
PEGDASH Streaming Packetizer was configured so that “mpegdashChunkDurationTarget” is set to 4000 ms to minimize live latency. Although, 2000 ms, which is equal to YouTube Ultra Low Latency, was also tested, but found to be unstable for 4K UHD live-streaming (YouTube doesn’t offer Ultra-Low Latency option for 1440p and 4K resolution [16]). As for the source, Open Broadcaster Software (OBS) installed on the same PC that runs Wowza Streaming Engine, was used to push video files as RTMP streams to the-
 server. The source video file was played back using OBS internal “VLC Video Source” source. The encoding parameter was set as seen in Table IV. To evaluate the result, FFmpeg was installed on a laptop connected to the UE, then the MPEG-DASH stream was saved to disk in real-time. FFmpeg log was saved to the disk and the number of the skipped segment was counted. Additionally, latency was also measured by using Windows built-in ping

TABLE IV OPEN BROADCASTER SOFTWARE (OBS) ENCODING CONFIGURATION
Parameters Values
Video Codec H.264/AVC Encoder NVIDIA NVENC H.264 (new) Resolution 3840x2160 Frame Rate 60.00p Bitrate 30,000 kbps Rate Control Mode Constant Bitrate (CBR) Keyframe Interval 2 seconds Encoding Preset Max Quality H.264 Profile High Look-ahead No Psycho Visual Tuning Yes Max B-frames 2
Audio Codec AAC Sampling Rate 48 kHz Bitrate 320 kbps
command while the stream was being downloaded to the disk. For simplicity, FFmpeg was programmed to automatically terminate after 400 seconds of video has been recorded, which is corresponding to 100 MPEG-DASH segments. Block diagram of the setup can be seen in Figure 3.
Fig. 3. Experiment Topology
D. Experiment Scenario
Six scenarios were evaluated for this paper, four of which is when UE is stationary, while another two is when UE is moving at different average speed. Additionally, baseline result was also obtained by having UE connected to the same network as the MPEG-DASH server via Wi-Fi 6. The access point used was Aruba AP-515 and the channel width was 80 MHz, which provided the link speed of 1,200 Mbps. There was no neighbor access point detected, hence no interference.
TABLE V SUMMARIZE OF RF CONDITION (AVERAGE) IN EACH TEST CASE
Test Case 5G RSRP 5G SINR LTE PCell LTE PCell (dBm) (dB) RSRP (dBm) SINR (dB)
Stationary (Peak) -101.54 16.64 -101.36 2.06 Stationary (Off-Peak) -103.03 17.84 -103.05 2.28 Stationary (Bad Signal) -104.52 9.30 -107.63 6.83 Moving -88.15 16.05 -82.23 8.27 Slow Moving -83.88 17.88 -79.62 4.20 AIS D.C. -78.58 44.08 -72.34 21.22
“Stationary (Peak)” result is obtained with UE place at a Windows on the second floor of a two-story building with medium quality signal, which represents typical use cases. There was no line of sight to the serving eNodeB/gNodeB. Using the timing advance (TA) parameter reveals the distance of approximately 650 m between the UE and the base station. The bandwidth utilized for 5G 2500 MHz (n41) on this serving cell was 60 MHz. The result was obtained during the night peak hour of around 11 PM. “Sta-
tionary (Off-Peak)” was obtained using the same configuration as “Stationary (Peak),” but was obtained after 1 AM. “Stationary (Bad Signal)” was obtained at the same location after 2 AM, but UE was moved down to the first floor, which reduce the signal quality significantly. “Moving” was obtained when UE is moving on BangnaTrad Expressway at an average speed above 100 km/h. The “Slow Moving” case was also conducted on an expressway with moderate traffic in downtown Bangkok, which yield an average -
speed of less than 50 km/h. Since AIS use different 5G bandwidth in a different area, 5G bandwidth is switched between 60 MHz and 80 MHz depending on each cell configuration. In both cases, 51.2% of the cell has 60 MHz bandwidth, while 48.8% has a bandwidth of 80 MHz. Lastly, “AIS D.C.” was done inside the AIS Design Centre co-working space, which has a 4T4R distributed antenna system (DAS) and ideal RF condition with a direct line of sight to the antenna. This is also the only place that AIS offe-
rs 5G with full 100 MHz bandwidth. Therefore, this test case should be a good representation of the best-case scenario. The summary of RF conditions can be seen in Table V.
IV. EXPERIMENT RESULTS
To make sure that tethering the internet from the UE to the laptop doesn’t affect the ability to stream live UHD MPEGDASH smoothly, the UE was connected to the same network as the MPEG-DASH server via Wi-Fi, and baseline result was obtained, which shown perfect playback experience with no MPEG-DASH segment skipped with excellent average ping latency. Hence, tethering the internet connection via the USB interface doesn’t hinder the test result. From the experiment, 5G SA showed a significant advant-
age over 5G NSA in both latency and number of dropped MPEGDASH segments, demonstrating the latency advantage that the new 5GC and 5G signaling provided. The network was able to respond swiftly and timely to each MPEG-DASH segment request and allocate sufficient results, which provide a smooth playback experience. On the other hand, 5G NSA, which is the widely available type of 5G, has shown a mixed result due to its reliance on LTE signaling. In the case where LTE has a perfect signal quality like-
 the “AIS D.C.” case, 5G NSA may perform only slightly worse than 5G SA with slightly more latency and skipped MPEG-DASH segment as shown in Table VI. Despite the slight disadvantage, 5G NSA still be able to respond timely for each request of MPEG-DASH segment in this test case and similar throughput characteristic

TABLE VI EXPERIMENT RESULT
Test Case Network Ping Ping Ping Ping Ping Ping MPEG-DASH MPEG-DASH MPEG-DASH Avg (ms) Min (ms) Max (ms) Sent Dropped Drop % Segment Requested Segment Skipped Segment Skip %
Baseline Wi-Fi 6 8 4 73 389 0 0.00% 100 0 0.00%
Stationary (Peak) 5G SA 25 17 81 403 0 0.00% 100 7 7.00% 5G NSA 35 24 129 406 0 0.00% 100 27 27.00% LTE 39 25 149 401 0 0.00% 100 43 43.00%
Stationary (Off-Peak) 5G SA 22 15 52 391 0 0.00% 100 1 1.00% 5G NSA 35 24 64 399 0 0.00% 100 5 5.00% LTE 32 21 66 402 0 0.00% 100 35 35.00%
Stationary (Bad Signal) 5G SA 27 16 128 389 0 0.00% 100 2 2.00% 5G NSA 35 23 111 386 0 0.00% 100 14 14.00% LTE 36 23 189 406 0 0.00% 100 21 21.00%
Moving 5G SA 31 16 217 389 0 0.00% 100 1 1.00% 5G NSA 30 17 312 400 0 0.00% 100 6 6.00% LTE 62 24 1875 377 5 1.33% 100 29 29.00%
Slow Moving 5G SA 23 15 142 389 0 0.00% 100 1 1.00% 5G NSA 30 16 332 407 0 0.00% 100 2 2.00% LTE 44 23 550 401 1 0.01% 100 33 33.00%
AIS D.C. 5G SA 22 17 48 391 0 0.00% 100 3 3.00% 5G NSA 26 18 48 415 0 0.00% 100 5 5.00% LTE 31 23 56 401 0 0.00% 100 20 20.00%
as 5G SA was observed as seen in Figure 4, which explain the experimental result.
Fig. 4. MAC Throughput Characteristic for AIS D.C. Test Case
Fig. 5. MAC Throughput Characteristic for Stationary (Peak) Test Case
Fig. 6. MAC Throughput Characteristic for Stationary (Bad Signal) Test Case
However, in the cases where LTE is congested or signal quality is poor, 5G NSA performance will be significantly worse than 5G SA as shown in “Stationary (Peak)” and “Stationary (Bad Signal),” respectively, where the number of skipped MPEG-DASH segment reach more than 10%, while 5G SA was able to maintain lower than 3% skipped MPEGDASH segment in both cases. The throughput characteristics of the two test cases shown in Figure 5 and Figure 6 also demonstrate a significant difference in throughput c-
haracteristic between 5G SA and 5G NSA. Especially, in Figure 6, where the throughput of 5G NSA and LTE have very similar characteristics, while 5G SA shows a noticeable advantage. The mobility advantage of 5G SA is also demonstrated in the “Moving” test case, where UE is moving at the average speed of 100 km/h. The signal quality also changes rapidly and wildly as seen in Figure 7. Despite all of that, 5G SA was able to hold up with only 1% of skipped segments, respectable ping latency, and also -
stable throughput as seen in Figure

Fig. 7. Signal Characteristic for Moving Test Case
Fig. 8. MAC Throughput Characteristic for Moving Test Case
8. Furthermore, 5G NSA results demonstrate slightly worse performance with as much as six times more skipped MPEGDASH segment. Lastly, LTE failed the test with almost 30% of the segment being skipped.
V. CONCLUSIONS AND FUTURE WORK
In this paper, the live UHD MPEG-DASH streaming performance of commercial 5G SA, 5G NSA, and LTE network in Thailand was evaluated. Commercially available UE and mobile plans were used for the experiment and the MPEGDASH Packetizer was tweaked for Ultra Low-Latency live streaming. The results show that 5G SA has both throughput and latency required to deliver a good live UHD streaming experience. The results also show that the LTE network may not be suitable for low-latency live UHD streaming as 2-
0% or more of MPEG-DASH segments were skipped in all test cases even the ideal one with the perfect signal condition. Interestingly, it has been found that 5G NSA may perform as good as 5G SA in ideal condition or as worst as LTE in poor condition, which shows that the widely available 5G NSA network offered by many operators around the world may not deliver the full potential of 5G and migration to full 5G SA is needed. Due to financial constraints and complexity, many parts of the world may stil-
l stick with 5G NSA deployment for a
good while. Therefore, in the future, a workaround for MPEGDASH segment skipped issue on 5G NSA network shall be purposed and evaluated on commercial 5G NSA network.
ACKNOWLEDGMENT
This work was supported in part by the Japan Society for the Promotion of Science KAKENHI (Grant No. 20K14740), in part by Waseda University Grant for Special Research Projects (No. 2021C-132 and No. 2021E-013), in part by NICT (Grant No. 03801), Japan, and in part by JST, PRESTO (Grant No. JPMJPR21PB). Additionally, the authors would like to thank PEI Xiaohong of Qtrun Technologies for providing AirScreen to help with the result collection in this paper.
REFERENCES
[1] S. Dahmen-Lhuissier, “Mobile technologies - 5g, 5g specs: Future technology.” [Online]. Available: https://www.etsi.org/technologies/5G [2] Minimum requirements related to technical performance for IMT2020 radio interface(s), International Telecommunication Union Standard Rec. ITU-R M.2083, Nov. 2017. [Online]. Available: https://www.itu.int/pub/R-REP-M.2410 [3] M. Okano, Y. Hasegawa, K. Kanai, B. Wei, and J. Katto, “Tcp throughput characteristics over 5g millimeterwave network in indoor train-
 station,” in 2019 IEEE Wireless Communications and Networking Conference (WCNC), 2019, pp. 1–6.
[4] M. Okano, Y. Hasegawa, K. Kanai, B. Wei, and J. Katton, “Field experiments of 28 ghz band 5g system at indoor train station platform,” in 2020 IEEE 17th Annual Consumer Communications Networking Conference (CCNC), 2020, pp. 1–6. [5] Study on New Radio (NR) access technology, 3GPP Standard TR 38.912 Version 15.0.0 Release 15, Jun. 2018. [6] A. EL RHAYOUR and T. MAZRI, “5g architecture: Deployment scenarios and options,” in 2019 International Symposium on Advanced Electrical and Communication Te-
chnologies (ISAECT), 2019, pp. 1–6. [7] J. Waring, “Thai operators bid $3.2b on 5g,” Feb 2020. [Online]. Available: https://www.mobileworldlive.com/asia/asianews/thai-operators-bid-3-2b-on-5g [8] GSMA, “Ais is the first operator in thailand to launch 5g network nationwide,” Feb 2020. [Online]. Available: https://www.gsma.com/ membership/resources/ais- is- the- first- operator- in- thailand- to- launch5g-network-nationwide/ [9] C. Sbeglia, “Ais and vivo conduct 5g standalone network tests in thaila-
nd,” Jul 2021. [Online]. Available: https://www.rcrwireless. com/20210723/5g/ais- and- vivo- conduct- 5g- standalone- network- testsin-thailand [10] “Ais upgrades the fiber network, the first 2 gbps in thailand, 5g covers the whole country. ready to change the organization to ’cognitive telco’ (in thai),” Dec 2021. [Online]. Available: https://mgronline.com/cyberbiz/detail/9640000124267 [11] I. Sodagar, “The mpeg-dash standard for multimedia streaming over the internet,” IEEE MultiMedia, vol. 18, -
no. 4, pp. 62–67, 2011. [12] B. Wei, H. Song, and J. Katto, “Frab: A flexible relaxation method for fair, stable, efficient multi-user dash video streaming,” in ICC 2021 IEEE International Conference on Communications, 2021, pp. 1–6.
[13] T. Daengsi, P. Ungkap, and P. Wuttidittachotti, “A study of 5g network performance: A pilot field trial at the main skytrain stations in bangkok,” in 2021 International Conference on Artificial Intelligence and Computer Science Technology (ICAICST), 2021, pp. 191–195.
[14] A. Aloman, A. Ispas, P. Ciotirnae, R. Sanchez-Iborra, and M. Cano, “Performance evaluation of video streaming using mpeg dash, rtsp, and rtmp in mobile networks,” in 2015 8th IFIP Wireless and Mobile Networking Conference (WMNC), 2015, pp. 144–151.
[15] K. Tortermvasana, “Nbtc defers 700mhz usage to january,” Jun 2020. [Online]. Available: https://www.bangkokpost.com/business/1936268/ nbtc-defers-700mhz-usage-to-january [16] “Live streaming latency - youtube help.” [Online]. Available: https://support.google.com/youtube/answer/7444635

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:01.722Z
- **Text Length:** 26839 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 6 of 6
