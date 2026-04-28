# PDF Document: Tuzi et al. - 2025 - 6G Satellite Direct-to-Cell Connectivity To distribute, or not to distribute, that is the question.pdf

**File Path:** Tuzi et al. - 2025 - 6G Satellite Direct-to-Cell Connectivity To distribute, or not to distribute, that is the question.pdf

**Processed Date:** 2026-02-10T18:17:12.391Z

**File Size:** 2380.52 KB

**Total Pages:** 4

**Extracted Pages:** 4

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3280

**Title:** 6G Satellite Direct-to-Cell Connectivity: "To distribute, or not to distribute, that is the question"

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

6G Satellite Direct-to-Cell Connectivity: “To
distribute, or not to distribute, that is the question”
Diego Tuzi ∗, Thomas Delamotte ∗ and Andreas Knopp ∗
∗Institute of Information Technology, University of the Bundeswehr Munich, 85579 Neubiberg Germany Email: paper.sp@unibw.de, {name.surname}@unibw.de
© 2023 The authors. This paper was presented at the ESA SatNEx School 2023 workshop “Satellite 6G: Challenges and Solutions”, University of Siena, Italy (April 18–20, 2023). It received the Best Idea Award and has not been peer-reviewed.
Abstract—Direct-to-cell connectivity between satellites and common terrestrial handheld devices represents an essential feature of 6G. The industry is considering different type of constellations but using classical single satellite solutions based on phased array antennas. This article proposes to decompose a classical single satellite into a swarm of multiple small platforms (e.g. CubeSats) each equipped with one or a small number of radiating elements. The platforms are spaced far apart to crea-
te a large virtual aperture. The use of small satellites promises cost reduction for production and launch, while the distributed nature of the system introduces interesting features, such as scalability and fault tolerance. This perspective article provides insights into the opportunities and a discussion of the research challenges for the feasibility of the proposed approach. Index Terms—6G, NTN, Satellite communication, Direct-toCell, CubeSats, Distributed Satellite Systems, phased array antenn-
as, ELSA.
I. INTRODUCTION
One of the most interesting uses of satellite networks in 6G is to provide direct connectivity to terrestrial user equipment (UE). In the literature, the term direct connectivity generally addresses two main scenarios depending on the considered macro-category of UE. The first type of direct connectivity considers very small aperture terminals (VSATs). A VSAT can be a parabolic dish of around 60 cm in diameter, similar to geostationary Earth orbit (GEO) terminals, but with a motorized system to tr-
ack the low Earth orbit (LEO) satellites. A VSAT can also be a phased array antenna able to electronically steer the main beam and track the satellite. VSATs have good performance in terms of power and antenna capabilities, hence, they can use high frequency (mainly Ku and Ka bands). Famous examples of operational/planned constellations for VSATs are Starlink (SpaceX), OneWeb, and Project Kuiper (Amazon). The second type of direct connectivity mainly considers common terrestrial handheld (HH) devi-
ces referred to as direct-to-cell (D2C) connectivity. HHs are for example common smartphones characterized by low power and low antenna performance that can usually connect to terrestrial base stations in their vicinity. A high-speed connectivity with state-of-the-art satellite systems is not possible even though lower frequencies (UHF, L- and S-bands) and low Earth orbits enable to reduce the impact of atmospheric attenuation and path loss. Therefore, the space segment needs to be
entirely rethought to offer higher transmit gains and optimize the reuse of the spectral resources. Even in this case, there are famous examples from the industry, such as satellites developed by Lynk Global and AST SpaceMobile (Fig. 1). The former is planning a mega constellation of around 5110 satellites with a satellite size of around 4 m2 while the latter is planning a constellation of around 170 satellites with a massive satellite with a size of around 128 m2 [1]. This paper focuses on the D2-
C use case and considers one single satellite of a LEO constellation. In particular, considering the two previous approaches from the industry there are considering different approaches to realize the constellation. Despite the differences, they are both considering classical solutions based on phased array antennas where the radiating elements are usually organized in a regular lattice (e.g. rectangular) spaced with a uniform distance, usually around half the wavelength. This paper proposes an al-
ternative solution based on a distributed satellite system (DSS). The main idea is to decompose a single satellite equipped with a phased array antenna in a satellite swarm configuration of multiple small platforms (e.g. CubeSats) each equipped with one or a small number of radiating elements. The platforms are spaced much more than half the wavelength to create a large virtual aperture achieving high antenna performance. The platforms of the swarm are connected using a wireless or wired connectio-
n and coordinated to achieve the coherent transmission and reception of signals. The use of small satellites promises cost reduction for production and launch of the swarm compared to a classical single satellite. In addition, the distributed nature of the system provides interesting features, such as scalability and fault tolerance. This perspective article elaborates on the results in [4] by discussing the main opportunities and challenges for use of swarms in the D2C use case. The ultimate goal-
 is to provide elements to address the Hamletic doubt in the title.
II. SATELLITE SWARMS FOR D2C CONNECTIVITY
Swarms for D2C are based on two main concepts, phased array antennas, and DSSs. A phased array antenna consists of a group of radiating elements connected via internal circuits and organized in a defined geometry, capable of changing the shape and direction of the radiation pattern without physically moving the antenna.
arXiv:2511.18455v1 [eess.SP] 23 Nov 2025

Figure 1. Recent satellites developed for D2C connectivity: Lynk Global [2] is considering smaller satellites compared to AST SpaceMobile [3].
The array elements are usually organized in a regular lattice (e.g. rectangular, circular) spaced with a uniform distance, usually around half the wavelength. The radiating elements transmit a phase-shifted version of the same signal, where phase shifts are calculated to provide a constructive summation of the signals in the desired direction. The resulting radiation pattern offers better gain, directivity, and performance in a given direction than the single-element radiation pattern. Classical s-
ingle satellite solutions for D2C connectivity are considering solutions based on phased array antennas. Fig. 1 shows satellites developed by Lynk Global and AST SpaceMobile, certainly two different approaches in terms of size. On the other hand, a DSS is composed of multiple satellites that are coordinated with each other. In the context of DSS, the satellite swarm refers to a configuration where a multitude of identical and autonomous satellites can achieve a common goal with their common behavi-
or. The swarm configuration is also closely related to other terms, such as fractionated systems and formation flying (FF). In fractionated systems, the different satellites of the same DSS have different functions, while the term FF refers to the problem of maintaining a desired separation, orientation, or relative position between satellites belonging to the same multi-satellite configuration. In addition, the architecture is a distributed phased array antenna from the antenna point of view. The-
 architecture discussed in this article is a hybrid satellite swarm and fractionated DSS configuration, organized in a FF creating a distributed phased array antenna, that for the sake of simplicity is referred to as swarm. Swarms for D2C decompose the classical single satellite with a phased antenna with N elements in Np platforms with Nr radiating elements. The number of radiating elements (Nr) can be equal to one or more, according to the space limit of CubeSats. Clearly, if Nr = 1 =⇒ Np = N . -
Swarms usually have one or more satellites with enhanced capabilities, called the leader(s) or chief(s), while the other satellites are called followers or deputies. The satellites of the swarm have an average inter-element distance (dave) much higher than half
the wavelength to create a large virtual antenna aperture (Aev). Although satellite swarms could appear far from reality, numerous research and space flight demonstrations have been conducted on swarms for different fields of application like astronomy, deep-space communications, meteorology, and environmental uses [5]. Most missions have been conducted with a limited number of satellites, but in recent decades research has been considering systems with an increasing number of satellites, especial-
ly with the advent of small satellites [6], [7]. A recent example of commercial flying technology is the Cluster 1 and 2 solutions from HawkEye 360 for radio signal mapping application. HawkEye 360’s satellites fly in dense formations in groups of three to determine the location of the RF signal source [8]. Swarms have also been considered in unmanned aerial vehicles (UAV) [9]. The use of a swarm of thousands of independent tiles is also considered for beaming solar power to Earth from space [10].-
 Nevertheless, swarms of small satellites for telecommunication purposes have received limited attention. The recent paper in [11] presented a formation of sub-arrays in GEO and LEO scenarios, where a large array was subdivided in smaller sub-arrays in a squared formation, resulting in LEO performance similar to the classical single antenna solution. In contrast, the paper in [4], from the same authors of this article, presented a swarm-based antenna array for D2C connectivity, showing that throug-
h the control of the geometry, swarms can bring several opportunities in the D2C use case. The advantages of a distributed approach for D2C connectivity are also recognized in the AST SpaceMobile patent from [12], but without addressing the challenges.
A. Antenna performance
Swarms can achieve a large virtual aperture by increasing the distance between the platforms. As known from the antenna array theory, increasing the distance between the radiating elements more than a specific threshold leads to the grating lobe (GL) problem. By carefully designing the

Prx ∈ (-100 to -89.6) dBm
rB ∈ (3 to 5) Km
rB
Gain ≥ 26.8 dBi
d ≈ λ, N ≈ 100, Ae ≈ 2m2
HPBW ∈ (0.68 to 1.15)°
d ≈ λ, N ≈ 2000, Ae ≈ 50m2
d ≈ 6.7λ, N ≈ 100, Aev ≈ 100m2
Grating lobes
rB
dave ≈ 6.7λ,
N ≈ 100, Aev ≈ 114m2
rB
Figure 2. From a classical single satellite with phased array antennas to a swarm of multiple CubeSats. Summary of the swarm design in [4].
geometry of the swarm, the GLs can be mitigated. The paper in [4] proposed a family of geometry named enhanced logarithmic spiral array (ELSA) based on [13], [14] that can mitigate the GL while maintaining a simple mathematical formulation for the position of the platforms in the formation. A summary of the design process carried out in [4] is in Fig. 2. Starting from the left of Fig. 2, a mid-size satellite at LEO altitude of 500 km with hundreds of radiating elements can fulfill the power requir-
ements (Prx) of a common handheld terminal. On the other hand, a satellite requires thousands of elements to reduce the half power beam width (HPBW) and achieve an Earth coverage radius (rB) of less than 5 km. A squared swarm of small satellites with an increased distance (d) between the platforms can provide the required power level and the required cell size, but generates several minor lobes with an energy level comparable to the main lobe one (GLs). A swarm with a ELSA geometry can maintain th-
e performance of the main lobe, but it mitigates the GLs. The resulting beam provides the required energy level and coverage, reducing the number of radiating elements by an order of magnitude.
B. Cost reduction opportunities
Swarms offer a twofold cost reduction opportunity. Classical single satellites have a unique design and production chain, whereas swarms are based on CubeSats and commercial offthe-shelf products that can be easily assembled. This can lead to reduced production costs. Furthermore, a CubeSat platform can integrate all components, including solar panels, in a lightweight cubic shape. Therefore, CubeSats can reduce the total weight and can be flexibly arranged in the rocket for launch, resulting in r-
educed launch costs.
C. Distributed features
Swarms inherit the advantages of DSSs. In particular, the workload distribution on multiple elements makes the system
fault-tolerant: a failure of single or multiple elements leads to a graceful performance degradation but not to an interruption of service. DSSs also introduce scalability: the performance of swarms can be controlled by the number of platforms and the distance between them. A swarm could be launched in an initial configuration to have a larger beam considering a small size constellation. Adding other swarms to the constellation, previous swarms could be reconfigured with a larger interplatform dis-
tance to reduce the beam. In addition, a swarm could be deployed with a reduced number of platforms, and additional launches could increase the number of platforms to increase performance.
III. RESEARCH CHALLENGES
Despite the benefits, swarms present several difficult challenges to deal with.
A. Multi-beam coverage optimization
Although the control of the geometry mitigates the GLs, the resulting beam pattern maintains an average level of interference outside the main lobe of around −20 dB. Classical phased array antenna solutions can reduce the level of interference outside the main lobe by simply applying tapering techniques via known windows. Preliminary results on the application of known tapering techniques to ELSA geometries do not produce the same results. For this reason, the generation of multiple beams has to d-
eal with a higher level of inter-beam interference. In addition, narrowing the beams could reduce the coverage of the swarm impacting the size of the whole constellation.
B. Formation Flying stability
Swarms, organized according to an optimized geometry, must be kept stable during the flight around the Earth. However, various effects like Earth’s oblateness, atmospheric

drag, and solar radiation pressure significantly influence the positions of the elements, making periodic orbit corrections necessary to maintain stability. Promising studies on FF [15], [16], electric propulsion, electromagnetic forces, and the growing interest of the scientific community and space agencies [17]–[19] could lead to promising developments in the near future. The impact of FF stability on the beamforming results has to be quantified and opportunely mitigated.
C. Synchronization
Although FF stability is important, a large degradation of the performance when the optimized geometry varies from the perfect one is not expected, since the grating lobes are mitigated by breaking the periodicity of regular geometries. Most importantly, the phase differences between the satellites and a common reference point must be estimated with a certain degree of accuracy, and the phase shifts updated accordingly. For this reason, synchronization is one of the most important aspects of swarm-
s. The scientific literature offers multiple solutions to approach the problem [20]. According to a preliminary analysis, a synchronization process based on openloop strategies, RF, and differential GPS technologies could be sufficient to achieve the required level of coordination, but the precise impact of the imperfect synchronization on the performance needs to be investigated.
D. System design aspects
In addition to the research challenges described above, several design aspects influence the level of complexity of the entire system, such as the division of tasks between the leader(s) and followers of the same swarm, or the division of tasks between space and ground sections. Furthermore, it must be emphasized that synchronization and FF stability are stringent requirements mainly for free-flying systems. Systems with a wired connection between satellites (tethered), if feasible, could drastica-
lly reduce these requirements. Tethered systems could also use very small satellite platforms based on the ”satellite on a chip” or ”satellite on a printed circuit board” concept to further reduce the production and launch costs.
IV. CONCLUSION
This article presented swarms for satellite direct-to-cell connectivity, an alternative solution to the classical single satellite paradigm. This new approach promises increased antenna performance, cost reductions, and interesting distributed features, but a research effort into the identified challenges is needed to clarify the Hamletic doubt in the title.
V. ACKNOWLEDGMENT
Part of this research paper was supported by European Space Agency (ESA) within the project SatNExV WI Y2.2-A under the Grant No: 4000130962/20/NL/NL/FE (the opinions and conclusions presented herein are those of the authors and can in no way be taken to reflect the official opinion of the European Space Agency). Part of this research paper was funded in part by dtec.bw – Digitalization and Technology
Research Center of the Bundeswehr. dtec.bw is funded by the European Union – NextGenerationEU.
REFERENCES
[1] L. Laursen, “Your Cellphone Will Be a Satphone,” 12 2022, (Accessed: 2023-02-02). [Online]. Available: https://spectrum.ieee.org/satellitecellphone [2] “Lynk Completes Pre-Commercial Trials For 5th Satellite Ahead Of Commercial Launch,” (Accessed: 2023-0402). [Online]. Available: https://lynk.world/news/lynk-completes-precommercial-trials-for-5th-satellite-ahead-of-commercial-launch/ [3] “BlueWalker 3,” (Accessed: 2023-04-02). [Online]. Available: https: //ast-science.com/spacemobile-network/b-
luewalker-3/ [4] D. Tuzi, T. Delamotte, and A. Knopp, “Satellite swarm-based antenna arrays for 6G direct-to-cell connectivity,” IEEE Access, pp. 1–23, 2023. [5] G.-P. Liu and S. Zhang, “A survey on formation control of small satellites,” Proceedings of the IEEE, vol. 106, no. 3, pp. 440–457, 2018. [6] S. Bandyopadhyay, G. P. Subramanian, R. Foust, D. Morgan, S.J. Chung, and F. Hadaegh, “A review of impending small satellite formation flying missions,” 53rd AIAA Aerospace Sciences Meeting, 2015. [-
7] K. Alremeithi, J. Miranda Dias, and G. de Masi, “Realization of pattern formation for micro-satellite swarms without a centralized coordination,” in 2022 IEEE International Symposium on Robotic and Sensors Environments (ROSE), 2022, pp. 01–07.
[8] “Space Based Geoanalytics Enhanced With Cluster 2,” (Accessed: 202304-03). [Online]. Available: https://www.he360.com/technology/cluster2-boosts-our-space-based-geoanalytics-significantly/ [9] F. Namin, J. S. Petko, and D. H. Werner, “Analysis and Design Optimization of Robust Aperiodic Micro-UAV Swarm-Based Antenna Arrays,” IEEE Transactions on Antennas and Propagation, vol. 60, no. 5, pp. 2295–2308, 2012. [10] “Solar Power from Space: First Launch on a SpaceX Falcon 9 - IEEE Spectrum,” (Acce-
ssed: 2023-04-04). [Online]. Available: https://spectrum.ieee.org/solar-power [11] G. Bacci, R. D. Gaudenzi, M. Luise, L. Sanguinetti, and E. Sebastiani, “Formation-of-Arrays Antenna Technology for High-Throughput Mobile Non-Terrestrial Networks,” IEEE Transactions on Aerospace and Electronic Systems, pp. 1–18, 2023.
[12] A. Avellan and Jayasimha Sriram, “System And Method For High Throughput Fractionated Satellites (HTFS) For Direct Connectivity To And From End User Devices And Terminals Using Flight Formations Of Small Or Very Small Satellites,” US Patent 9 973 266 B1, May, 2018. [13] D. Boeringer, “Phased array including a logarithmic spiral lattice of uniformly spaced radiating and receiving elements,” US Patent 6 433 754 B1, Apr., 2002. [14] M. C. Vigan ́o, G. Toso, G. Caille, C. Mangenot, and I. E. Lager-
, “Sunflower Array Antenna with Adjustable Density Taper,” International Journal of Antennas and Propagation, vol. 2009, pp. 1–10, Jan. 2009. [15] D. Morgan, S.-J. Chung, L. Blackmore, B. Acikmese, D. Bayard, and F. Y. Hadaegh, “Swarm-Keeping Strategies for Spacecraft Under J2 and Atmospheric Drag Perturbations,” Journal of Guidance, Control, and Dynamics, vol. 35, no. 5, pp. 1492–1506, Sep. 2012. [Online]. Available: https://arc.aiaa.org/doi/10.2514/1.55705 [16] R. Mazouz, M. Quadrelli, and R. Be-
auchamp, “Dynamics and optimal control for free-flight and tethered arrays in low earth orbit,” in 2021 IEEE Aerospace Conference (50100), 2021, pp. 1–20.
[17] G. Di Mauro, M. Lawn, and R. Bevilacqua, “Survey on guidance navigation and control requirements for spacecraft formation-flying missions,” Journal of Guidance, Control, and Dynamics, vol. 41, no. 3, pp. 581–602, 2018. [18] H. Sanchez, D. Mcintosh, H. Cannon, C. Pires, J. Sullivan, and S. Dˆa, “Starling1: Swarm Technology Demonstration,” in 32nd Annual AIAA/USU Conference on Small Satellites, Utah, USA, Aug. 2018.
[19] “Join the hive: send your ideas for CubeSat swarms,” (Accessed: 2023-02-02). [Online]. Available: https: //www.esa.int/Enabling Support/Preparing for the Future/Discovery and Preparation/Join the hive send your ideas for CubeSat swarms [20] J. A. Nanzer, S. R. Mghabghab, S. M. Ellison, and A. Schlegel, “Distributed phased arrays: Challenges and recent advances,” IEEE Transactions on Microwave Theory and Techniques, vol. 69, no. 11, pp. 4893–4907, 2021.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:12.391Z
- **Text Length:** 21160 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 4 of 4
