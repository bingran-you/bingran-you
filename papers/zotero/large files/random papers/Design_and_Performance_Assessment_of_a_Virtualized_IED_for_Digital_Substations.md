# PDF Document: Junior et al. - 2025 - Design and Performance Assessment of a Virtualized IED for Digital Substations.pdf

**File Path:** Junior et al. - 2025 - Design and Performance Assessment of a Virtualized IED for Digital Substations.pdf

**Processed Date:** 2026-02-10T18:15:43.309Z

**File Size:** 4382.71 KB

**Total Pages:** 10

**Extracted Pages:** 10

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3278

**Title:** Design and Performance Assessment of a Virtualized IED for Digital Substations

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

Design and Performance Assessment of a Virtualized IED for Digital Substations
ALAILTON J. ALVES JUNIOR∗, DENIS V. COURY∗, MEMBER, IEEE, and RICARDO A. S. FERNANDES∗, SENIOR MEMBER, IEEE
1Department of Electrical and Computer Engineering, S  ̃ao Carlos School of Engineering (EESC), University of S  ̃ao Paulo (USP), S  ̃ao Carlos, SP 13566-590, Brazil
Corresponding author: Alailton J. Alves J  ́unior (e-mail: alailtonjunior@usp.br)
This work was supported by National Council for Scientific and Technological Development (CNPq) [402334/2023-0]. The authors would also like to thank the Sa ̃ o Carlos School of Engineering, University of S  ̃ao Paulo, S  ̃ao Carlos, Brazil for the facilities provided.
ABSTRACT Digital substations have significantly enhanced power grid protection by replacing traditional copper wiring with fiber-optic communication and integrating IEC 61850-compliant Intelligent Electronic Devices (IEDs), resulting in greater efficiency, reliability, and interoperability. While these advancements provide improved interoperability, challenges such as high costs, complex networks, and limited upgradeability persist. To mitigate these issues, the virtualization of IEDs has emerged -
as a cost-effective solution, offering scalability, simplified maintenance, and reduced hardware costs by replacing traditional hardwarebased IEDs with software-based counterparts. However, the performance and reliability of virtual IEDs (vIED) must be rigorously evaluated to ensure their robustness in real-time applications. This paper develops, implements, and evaluates a vIED designed to match the performance of its hardware-based counterparts. The vIED was deployed on a server using virtual ma-
chines, with its core logic implemented in low-level programming languages to ensure high-speed, deterministic behavior. The performance was evaluated using real-time simulations, focusing on the response times of the protection functions. The results demonstrated that vIEDs achieved acceptable response times, validating their suitability for deployment in critical time-sensitive environments within digital substations.
INDEX TERMS Digital Substation, IEC 61850, Server-Based IED, Virtual IED, Virtualized Protection Systems.
I. Introduction
T
HE electricity industry is undergoing a significant transformation driven by widespread digitalization, which is turning substations into smarter and more integral components of the modern power grid [1]. This shift aims to improve efficiency, reliability, and security by replacing traditional copper-wired connections and conventional secondary equipment with fiber optic communication and Intelligent Electronic Devices (IEDs). Operating under the IEC 61850 standard, these IEDs are a critical enabl-
er of this transition, facilitating the integration of protection, control, and monitoring functions within a unified network [2]. Although digital substations offer advantages such as reduced wiring, interoperability, and improved overall performance, the transition to these systems poses significant challenges. The high cost of IEDs, coupled with complex communication networks, can increase maintenance
expenses and require specialized engineering expertise. In addition, integrating new technologies into existing infrastructure can be complex and costly. System upgrades are often complicated and can impact the equipment’s lifecycle. Moreover, limitations in upgradeability for many digital devices can extend development cycles and inflate long-term maintenance costs [3]. To address these challenges, researchers have proposed the virtualization of IEDs as a cost-effective and flexible solution for -
digital substations. A software-based IED offers several benefits, such as reduced hardware costs, simplified maintenance, and enhanced scalability [4]. By emulating the functionality of physical IEDs in a software environment, Virtual IEDs (vIEDs) can provide a more agile and adaptable protection system for power grids. The remainder of this paper is organized as follows. Section II presents the literature related to IEDs’ virtualiza
This work is licensed under a Creative Commons Attribution 4.0 License. For more information, see https://creativecommons.org/licenses/by/4.0/
VOLUME , 1
arXiv:2511.21310v1 [eess.SY] 26 Nov 2025

Author et al.: Preparation of Papers for IEEE PES JOURNALS
tion. Section III highlights the differences between physical and vIEDs. Section IV describes the architecture of the vIED, detailing the protection algorithms and communication protocols implemented. Section V presents the test system setup, including the simulated environment, hardware configuration, and network parameters. Next, Section VI discusses the results, focusing on protection response times and communication delays. Finally, Section VII draws conclusions, providing a concise summary of-
 the main findings.
II. Related Works
A prominent area of research in power system protection focuses on using digital twins (DT) to enhance existing protection schemes. A DT is defined as a virtual representation of a physical asset or system, continuously updated with realtime data, allowing for comprehensive simulation, analysis, and optimization of the asset’s performance throughout its lifecycle. These capabilities enable DTs to provide real-time simulation, scenario testing, and cost-effective validation of protection schemes, u-
ltimately contributing to improved system reliability, reduced research costs, and more effective decision making [5]. Recent research has also explored the potential of DTs in modernizing power grids. For example, in [6], the authors proposed a framework for Digital Twin Electric Grids, addressing key aspects such as subsystem-level modeling, modular design, and scalability. This framework integrates advanced real-time data processing with predictive maintenance and machine learning-based optimiz-
ation techniques, ensuring enhanced grid stability and performance. Concerning protection applications, the authors of [7], [8] investigated using DT in overcurrent protection schemes for distribution networks integrated with distributed energy resources (DER). Their work introduced a validation approach for directional overcurrent protection in meshed distribution networks [8] and proposed a DT-based overcurrent protection scheme for DER-integrated distribution networks [7]. Both studies emphasiz-
ed the role of DTs in improving fault isolation, reducing restoration times, and enabling cost-effective validation of protection schemes. Furthermore, a DT-based relay protection mirror operation technology was proposed in [9], enhancing fault detection and system reliability through real-time monitoring and simulation. These studies emphasize the transformative impact of DTs on power grid protection and management. Despite their ability to simulate real-time operations and predict failure modes,-
 DT differ fundamentally from fully virtualized systems. Although they complement physical assets, they do not replace them. Thus, DT serves as a preliminary step towards achieving full system virtualization by providing a virtual model that interacts with real-world data, thus ensuring that the transition to complete virtualization or remote monitoring is both feasible and effective. However, it is important to note that the literature on fully virtualized IEDs remains scarce. Most existing resea-
rch focuses on
using DT as complementary tools, rather than as complete replacements for physical IEDs. In contrast to DT, vIEDs represent a more advanced approach, in which the functionality of physical IEDs is fully replicated in a virtual environment. Several studies have investigated the deployment of vIEDs in substation protection systems, highlighting both their potential and the technical challenges associated with their implementation. Notably, the studies proposed in [10] and [11] examined the feasibili-
ty of deploying vIED, addressing critical factors such as time synchronization, communication delays, and Generic Object-Oriented Substation Event (GOOSE) message transmission. These studies, which used virtualization platforms such as KVM (Kernel Virtual Machine), highlighted key areas for improvement, particularly in response time and synchronization accuracy. Further comparative studies, such as those proposed by [12] and [13], assessed the performance of vIEDs versus that of physical IEDs in r-
eal-time simulations. Their findings indicated that vIEDs can achieve comparable protection performance, including tripping times of the circuit breaker and communication. However, these studies also identified the need for continued advancements in time synchronization and modeling of more complex network and protection scenarios. A broader perspective on the underlying technology was offered in [14], which presented a systematic review of container-based virtualization for real-time industrial s-
ystems. Their work summarizes techniques to ensure real-time compliance in virtual environments, which is fundamental for vIEDs. The review identifies several key methods (including single-kernel methods using patches, co-kernel systems for handling time-critical tasks, and advanced schedulingbased methods). The study concludes that while containers offer near-native performance, the container-induced overhead delay can range from a few microseconds to over 100 μs depending on the configuration. T-
he review also highlights open challenges in orchestration, deterministic intercontainer communication, and security, which are directly relevant to the robust deployment of vIEDs. Additionally, the deployment of virtualized protection systems in edge computing environments has been explored in the context of low-latency requirements for IEC 61850 communications. The authors of [15] investigated the scalability and efficiency of vIEDs in such environments, emphasizing their performance in orchestr-
ated settings. The study also highlighted the need for future enhancements, including the integration of security and redundancy mechanisms, to ensure the reliability and robustness of the system in dynamic operational conditions. Building on these developments, in [16], the authors proposed a hybrid framework that combines vIEDs with software-defined networking (SDN) to enhance scalability and adaptability in IEC 61850 digital substations. The study, which used real-time simulations of the IEEE 5-
-bus
2 VOLUME ,

model, demonstrated the framework’s capacity to manage network complexity and support low-latency communication, illustrating the potential of SDN in optimizing virtualized protection systems. These studies demonstrate that virtualization of IEDs offers a promising avenue to enhance the flexibility and scalability of digital substations. However, challenges remain in ensuring time synchronization, managing communication delays, addressing cybersecurity vulnerabilities, and integrating virtualized-
 systems into existing infrastructure. The ongoing development of vIEDs, particularly in low-latency and real-time environments, highlights the potential for these systems to meet the evolving demands of modern power grids, provided that rigorous testing and validation processes are in place to ensure their reliability and performance. Considering the above context, this paper presents the development and implementation of an vIED for digital substation applications. The proposed vIED was designed-
 to operate similarly to a physical IED, implementing protection schemes and communication protocols in accordance with the IEC 61850 standard. Its performance was evaluated through real-time simulations, focusing on protection response times, communication delays, and system reliability. Therefore, the main contributions of this paper are: (i) the development of an open-source vIED that provides a transparent and adaptable platform, enabling the integration of well-established protection algorith-
ms into a fully virtualized IEC 61850-compliant framework; (ii) a performance evaluation of the vIED in a reproducible virtualized testbed, considering different fault scenarios; and (iii) a discussion on the practical challenges of vIED deployment, including cybersecurity, reliability, and redundancy, contextualizing the results within real-world constraints.
III. A Comparative Analysis of Physical and Virtual IEDs A physical IED is a dedicated, ruggedized hardware device specifically engineered to perform protection and control functions within substation environments. These devices are equipped with specialized processors and input/output (I/O) interfaces, enabling fast and deterministic execution of protection algorithms. Directly interfacing with conventional current and voltage transformers, physical IEDs process raw analog signals locally and ini-
tiate protective actions with minimal and predictable latency. Modern physical IEDs typically support the IEC 61850 standard, allowing them to publish and subscribe to high-speed GOOSE and Sampled Values (SV) messages for real-time communication with other devices. In contrast, a vIED employs a software-defined architecture that operates on general-purpose computing platforms, such as Virtual Machines (VMs) or containers. These virtualized devices are typically hosted on centralized servers within-
 substation control rooms and interface with Merging Units (MUs) and non-conventional instrument transformers via IEC 61850 protocols. Although vIEDs use the same
communication standards as their physical counterparts, their performance is heavily influenced by the underlying Information Technology (IT) and network infrastructure. Consequently, factors such as network latency, data consistency, and cybersecurity become crucial considerations in their deployment. Virtualization introduces several notable advantages, including improved scalability, reduced hardware footprint, and more efficient lifecycle management. One of the key benefits is the ability to c-
onsolidate protection and control functions from multiple physical devices onto centralized servers, thereby decreasing the amount of dedicated hardware required [17]. Unlike physical systems, where expansion often involves procuring and installing new hardware, vIEDs can be scaled by deploying additional software instances on existing infrastructure. This shift enables a new economic model, trading high operational expenses for a more capital-intensive but scalable and cost-efficient approach [3]-
. Lifecycle management is fundamentally transformed by virtualization. The decoupling of protection logic from physical hardware enables agile software development and deployment practices previously unattainable in substations. This separation allows for independent testing, streamlined updates, and significantly faster deployment cycles, mitigating the hardware-software compatibility issues that plague physical systems. Updates can be deployed remotely and seamlessly, borrowing strategies from m-
odern IT like bluegreen deployments or canary releases, where a new vIED version can be tested on live data in parallel with the old one before a full switchover, drastically reducing risk and service disruption [18]. Furthermore, this software-defined nature innovates redundancy. Instead of relying on static hardware backups, protection functions can be dynamically replicated and orchestrated across multiple servers, enabling sophisticated, automatic failover schemes that enhance overall system r-
esilience. Despite these advantages, transitioning to virtualized architectures introduces significant challenges, particularly concerning performance and reliability. Physical IEDs achieve deterministic performance through dedicated hardware and direct, hardwired connections. In contrast, vIEDs depend on real-time computing guarantees within a shared environment, where performance must be managed at both the host (hypervisor) and guest (VM/container) levels [4]. To meet the stringent timing requi-
rements of protection functions, generic resource allocation is insufficient. Advanced virtualization techniques are required, such as Central Processing Unit (CPU) pinning (or CPU affinity), which dedicates specific processor cores to a vIED to eliminate scheduling latency and jitter caused by other processes. Similarly, for network I/O, technologies like Single Root I/O Virtualization (SR-IOV) can be employed to grant a vIED direct, low-latency access to the physical Network Interface Card (NIC)-
, bypassing the hypervisor’s virtual switch. The
VOLUME , 3

Author et al.: Preparation of Papers for IEEE PES JOURNALS
overall reliability of the system therefore depends on both the robustness of the computing infrastructure and the efficiency of the communication network. Security considerations are significantly amplified in a virtualized setup. While physical IEDs benefit from the inherent security of physical isolation, vIEDs introduce new software layers—such as the hypervisor, host operating system, and orchestration platforms, that substantially expand the system’s attack surface. The centralization of mul-
tiple vIEDs onto a single server, while efficient, creates a critical single point of failure. A successful intrusion into the virtualization host could allow an adversary to simultaneously compromise, disable, or manipulate multiple protection functions, potentially leading to a widespread outage or catastrophic equipment damage [19]. The network architecture itself, though physically separated into a process bus and a station bus, presents distinct vulnerabilities. The station bus is particularl-
y critical, as it relies on standard IT protocols such as Transmission Control Protocol (TCP)/Internet Protocol (IP) and Manufacturing Message Specification (MMS) for configuration, monitoring, and non-time-critical communication. These widely used protocols are well-understood by attackers and have a larger ecosystem of available malicious tools, making them a primary vector for intrusion. An attacker gaining access to the station bus could push malicious configuration files to vIEDs, subtly alte-
ring protection settings without triggering immediate alarms. Furthermore, the use of Software-Defined Networking (SDN) to manage these networks introduces the SDN controller as another high-value target and compromising it would grant an attacker control over the entire substation’s communication fabric. Consequently, a robust defense-in-depth security architecture is not merely recommended but essential. This requires more than just perimeter defense. It mandates strict microsegmentation to cont-
rol traffic between vIEDs, strong authentication and access controls for all management interfaces, continuous monitoring of network traffic for anomalies, and sophisticated intrusion detection systems tailored for IEC 61850 protocols [20]. Finally, redundancy becomes crucial not only at the communication level, through protocols like Parallel Redundancy Protocol (PRP) and Highavailability Seamless Redundancy (HSR), but also at the virtualization layer, where redundant virtual instances ensure fai-
lover capabilities in the event of a cyber-attack or a software failure [19], [20]. In summary, vIEDs represent a transformative step in substation automation, offering scalable, flexible, and costeffective alternatives to traditional hardware-based devices. However, this transformation comes with trade-offs. The deterministic performance and physical isolation of conventional IEDs are replaced by systems whose reliability hinges on the robustness of IT and networking infrastructure. Furthermore, -
the shift to centralized, software-defined architectures increases exposure to cybersecurity threats,
necessitating a holistic and proactive defense strategy. Therefore, rigorous evaluation of vIED performance, reliability, and security is essential prior to deployment. This paper aims to contribute to this field by presenting the design, implementation, and performance evaluation of such a vIED, demonstrating its viability for real-time applications in digital substations.
IV. The Virtual IED Architecture
As mentioned before, a vIED represents a software-based implementation of an IED, engineered to emulate the protection and control capabilities of traditional hardware IEDs within digital substations. This virtualization reflects a shift from hardware-dedicated systems to software-defined protection systems, as illustrated in Fig. 1.
IED
Application
OS
IED
Application
OS
IED
Centralized Topology
Server
vIED
Application
OS vIED
Application
OS vIED
Application
OS
Virtualization transition
Conventional Topology Application
OS
FIGURE 1. Transition from multiple standalone IEDs to virtualized IEDs.
The following sections provide an in-depth description of the implemented vIED architecture, focusing on its data processing components and protection algorithms.
A. Overview of Algorithms
The architecture of vIED, illustrated in Fig. 2, consists of several modules, including general purpose control, the communication interface with the process bus, data processing, and protection algorithms.
Controller
Communication
API Sniffer
Phasor
Estimator
Frequency
Tracking
Protection Module ANSI 50
(PIOC) ANSI 21
(PDIS)
ANSI 51
(PTOC)
ANSI 67
(PDIR) ANSI 27
(PTUV)
ANSI 59
(PTOV)
Logic
Operations
Sender
Virtual NIC 2
Process Bus Virtual NIC 1
Station Bus
TCP/IP Com. SV Pkts Input
GO Pkts Input PTP Ptks Input
SV Data
w
V, I
Pickup, Trip
GO Pkts Output
GO Data
Configured Output Variable
Process Bus Interface
Data Processing Modules
Protection Algorithms
General Purpose Control
FIGURE 2. Software architecture of the vIED divided into modules.
4 VOLUME ,

1) General-purpose control module
This module oversees vIED operations and handles communication with the station bus through TCP/IP. It also provides a system configuration interface and real-time monitoring of virtual equipment.
2) Communication Interface Module
Acting as the interface between the vIED and the process bus, this module is responsible for subscribing to and processing incoming IEC 61850 messages. Specifically, it decodes SV streams to extract raw current and voltage samples for subsequent processing by the data acquisition module and parses GOOSE messages to update the status of external binary signals. In addition, it handles the publication of outgoing GOOSE messages, such as trip or block commands, to the communication network. In order -
to ensure high-performance operation with minimal latency, the communication stack was entirely implemented, using a custom protocol handler developed at the application level. This implementation leverages a low-level interface with the NIC driver, bypassing the conventional kernel network stack.
3) Data processing module
This unit is essential for signal conditioning and measurement extraction. It processes incoming SV messages to derive the current and voltage values required for phasor estimation, while GOOSE messages serve as digital input.
4) Protection algorithms module
This component implements primary protection functions, such as overcurrent, distance, overvoltage, undervoltage, and directional protection schemes. These algorithms process data to identify faults, triggering trip and pickup signals to ensure prompt protective actions in abnormal operating conditions. Detailed descriptions of specific algorithms are provided in the section D.
B. Frequency Tracking Algorithm
The frequency tracking function is essential for accurate phasor estimation, as it enables the adaptation of protection algorithms to dynamic power system conditions. The implemented frequency tracking algorithm continuously monitors the system frequency and dynamically adjusts the phasor estimation process to compensate for frequency deviations, thereby maintaining stability in real-time applications. The algorithm, illustrated in Fig. 3, uses a frequency-locked loop (FLL) of the second-order gen-
eralized integrator (SOGI) based on the methodology presented in [21]. Additionally, frequency tracking is restricted within a predefined range between 40 Hz and 70 Hz. If the system frequency exceeds these limits, it is clamped to the nearest
Vα
e
ef
ωC
qv
ω
e
SOGI
FLL
qv
1 S
-γ
K
Vβ
1 S
1 S
FIGURE 3. Adapted SOGI FLL algorithm for frequency tracking.
boundary, thereby preventing inaccuracies in the phasor estimation process due to extreme frequency deviations.
C. Phasor Estimation
The phasor estimation algorithm is responsible for accurately determining the magnitude and phase angle of current and voltage signals acquired from the process bus. These phasor quantities serve as critical inputs to various protection functions. To ensure robustness under dynamic operating conditions, the algorithm employs a nonlinear Kalman filtering approach, which enhances estimation accuracy by effectively suppressing measurement noise and adapting to signal variability. The overall structur-
e of the proposed algorithm is illustrated in Fig. 4, and is based on the methodology presented in [22].
Sniffer FLL
SV Sample for each channel
Prediction
Frequency Update
Estimation
Output
SV Dataset
Kalman Filter
FIGURE 4. Nonlinear Kalman filtering algorithm used for phasor estimation.
The nonlinear Kalman filter was selected due to its optimal estimation capabilities in environments characterized by measurement noise, as well as its ability to reliably track phasor dynamics during transient disturbances. Nevertheless, alternative phasor estimation techniques, such as cosine filters, can also be implemented within the vIED framework, depending on the application requirements and computational constraints.
VOLUME , 5

Author et al.: Preparation of Papers for IEEE PES JOURNALS
D. Protection Schemes
The vIED implements multiple protection functions to assess its performance within a virtualized environment. The following topics describe the protection schemes implemented, including overcurrent, distance, overvoltage, undervoltage, and directional protection.
1) Instantaneous and Time Overcurrent Protection (PIOC and PTOC)
These protection functions, also referred to as ANSI 50 and 51, are among the most commonly used protection mechanisms in power systems. They continuously monitor the current within a protected zone and initiate a timer when the current exceeds predefined threshold values, known as the pickup current. The PIOC can operate immediately or with a fixed delay, as configured by the operator. In instantaneous mode, it responds immediately upon the current exceeding the pickup value. Alternatively, if co-
nfigured with a fixed delay, the PIOC waits for the specified time before initiating an action, allowing it to coordinate with other protection devices. Fig. 5 illustrates the principle of PIOC operation.
Ip(PIOC)
Comparator
+

t
(PIOC)
Timer
Set
Reset
tinp
t > tinp
Pickup(PIOC)
Trip(PIOC)
| I1 |
FIGURE 5. PIOC operation principle with pickup and trip output signals.
In contrast, the PTOC function incorporates an inverse time-delay characteristic, which is particularly effective for identifying prolonged overload conditions. Unlike the PIOC, which provides immediate or fixed-time protection, the PTOC’s response time is inversely related to the magnitude of the overcurrent, i.e., the higher the current, the shorter the delay. This inverse time characteristic facilitates coordination among protection devices at various system levels. Fig. 6 illustrates the opera-
ting principle of the PTOC, highlighting the time-delay response based on fault severity.
Ip(PTOC)
Comparator
+

Curve
Timer
Set
Reset
tinp
t > tinp
Pickup(PTOC)
Trip(PTOC)
TimeDial
ttrip
Trip Time Equation
| I1 |
FIGURE 6. PTOC operation principle with pickup and trip output signals.
2) Distance Protection (PDIS)
The PDIS represents the ANSI 21 function and operates by assessing the apparent impedance, determining whether it falls within a predefined protection zone corresponding to the line impedance that the relay is monitoring. If the impedance is within this zone, a timer is activated, and a trip signal is issued if the fault is not cleared within the operator-defined time threshold. Additionally, PDIS provides four distinct zone types from which the user can choose. These include impedance, admittance-
, reactance, and quadrilateral zones, each offering unique characteristics for fault detection and discrimination. The PDIS operation scheme is depicted in Fig. 7, highlighting the relay’s response to fault conditions based on the measured impedance.
Region Characteristic
t
(PIOC)
Timer
Set
Reset
tinp
t > tinp
Pickup(PDIS)
Trip(PDIS)
,
. Ia b,c
,
. V a b,c
Impedance Estimation
. Zap
Inside zone?
FIGURE 7. PDIS operation principle with pickup and trip output signals.
3) Directional Protection (PDIR)
This protection, refered by ANSI 67, operates on a principle similar to that of PIOC, incorporating an additional logic condition to verify the direction of the current flow by using an AND gate to the protection logic, as shown in Fig. 8.
Ip(PDIR)
Comparator
+

t
(PDIR)
Timer
Set
Reset
tinp
t > tinp
Pickup(PDIR)
Trip(PDIR)
Dir
AND
| I1 |
FIGURE 8. PDIR operation principle with pickup and trip output signals.
The current direction is determined using the quadrature polarization method, which classifies the current as forward or reverse based on its angle relative to a reference quantity. This directional logic enhances fault discrimination by ensuring the protection responds only to faults within the designated direction of coverage.
4) Overvoltage and Undervoltage (PTOV and PTUV)
These functions, defined by ANSI 59 and 27, respectively, are designed to monitor voltage levels and trigger trip signals when the measured voltage deviates from predefined safe operating thresholds. Both functions operate on the same fundamental principle: they continuously compare the measured voltage against
6 VOLUME ,

a user-defined threshold. When a threshold violation is detected, a timer is initiated, and if the condition persists beyond the configured delay, a trip signal is issued to isolate the faulted section. Fig. 9 illustrates the operating logic of the PTOV function, where a trip is triggered when the measured voltage rises above the threshold. The PTUV function follows a similar logic but in the opposite direction, i.e., initiating a trip when the voltage falls below the set threshold.
Vp(PTOV)
Comparator
+

t
(PTOV)
Timer
Set
Reset
tinp
t > tinp
Pickup(PTOV)
Trip(PTOV)
1
|V |
FIGURE 9. PTOV operation principle with pickup and trip output signals.
E. Server-based Virtual IED Deployment
The vIED was implemented on a server that utilizes VMs running independent instances of a Linux operating system. This VM-based approach enables each vIED to function as a fully isolated software-based protection device within the substation network. To achieve high-speed processing and deterministic behavior, critical for protection systems, the VM codebase was developed in low-level programming languages such as C/C++, ensuring strict adherence to timing requirements in data handling and algorit-
hm execution. In particular, VMs do not include a graphical user interface. Instead, all configuration and monitoring tasks were managed externally through a specialized desktop application developed for the Windows operating system. This software serves as the primary user interface, providing a centralized platform for streamlined configuration, realtime monitoring, and adjustment of the vIED’s operational parameters. This deployment method is particularly suited for commercial distribution, as -
the vIED can be packaged and provided as a compressed VM image file. This file can
then be easily deployed on a suitable virtualization platform, allowing the utilities to integrate and configure the vIED within their existing digital substation infrastructure, thereby expanding the flexibility and scalability of protection system implementations.
V. Test Setup
Testing was carried out in a virtual environment, employing a virtual Test Set designed to assess the performance of the vIED under different fault conditions. To ensure a precise emulation of the vIED protection system behavior, a transmission line model was created in PSCAD. The simulated waveforms were then exported to the virtual Test Set, which reconstituted them as test signals, simulating fault events and recording the vIED response times for each scenario. An overview of this test setup is-
 shown in Fig. 10.
PSCAD
PSCAD
COMTRADE files exported from PSCAD
Playback test case waveforms
Validates vIED response time
Virtual Switch
Server
VM 02
Virtual IED
VM 01
Volt Amp
Virtual Test Set
FIGURE 10. Test setup used to evaluate the vIED performance.
A. Simulated Transmission Line
A 500-kV transmission line, 100 km in length, was analyzed with grid equivalents operating at 60 Hz connected at both terminals. The line segment was represented using a single π section model, as illustrated in Fig. 11. Fault scenarios were introduced at the midpoint of the transmission line, located 50 km from each terminal. A comprehensive range of fault conditions was covered, simulating four different fault types (phase-to-ground, phase-tophase, phase-to-phase-to-ground and three-phase). Each-
 fault scenario included resistances of 0, 15, 30, and 50 Ω, with fault inception angles of 0°, 45°, and 90°. This setup yielded a comprehensive set of 48 distinct fault conditions, providing
52
MU
Source 1 (Thev. equiv.) VS1 = 500∠0° kV Z+ = 1.151 + j18.050Ω Z0 = 3.706 + j25.170Ω
Source 2 (Thev. equiv.) VS2 = 500∠-15° kV Z+ = 1.151 + j18.050Ω Z0 = 3.706 + j25.170Ω
Line 1 - 100Km
ZL1 ZL2
ZS1 ZS2
Line 1 - π Model Z+ = 0.026 + j0.310Ω/km Z0 = 0.254 + j0.895Ω/km XC+ = 55.29Ω/km XC0 = 92.19Ω/km
50%
Process Bus
Switch
FIGURE 11. Simulated 500 kV transmission line model.
VOLUME , 7

Author et al.: Preparation of Papers for IEEE PES JOURNALS
a robust basis for evaluating the operational accuracy and response times of vIED across various fault conditions.
B. Server Configuration
The server was configured with Ubuntu Server 22.04 LTS, using a real-time kernel to meet the stringent timing requirements of the digital substation environment. Virtualization was achieved using KVM technology, with Open vSwitch (OVS) used for efficient virtual network management. Both VMs (the test set and vIED) were assigned identical hardware resources, each provisioned with 2 CPU cores, 4 GB of RAM and 3 virtual network interfaces. The network architecture consisted of three virtual switches,-
 one for the station bus and the other two for the process bus. The station bus switch was connected to the physical network interface of the server and to one of the virtual interfaces of both the Test Set and vIED. This setup enabled TCP/IP communication between the configuration desktop software and the virtualized devices. For the process bus, two dedicated virtual switches were used to implement the Parallel Redundancy Protocol (PRP), ensuring network redundancy for the SV and GOOSE protocol -
messages. Each VM was configured with dual virtual ports, each connected to a separate process bus switch. This configuration enabled seamless failover and uninterrupted data transmission on the process bus, ensuring reliable SV communication with PRP redundancy.
C. Virtual IED Parameterization
To validate the performance of vIED, four functions were selected according to the fault simulation conditions. The equipment was parameterized to respond to these simulated faults with the settings detailed in Table 1.
TABLE 1. Virtual IED protection function parameterization.
Protection Function Parameter Value
PIOC
Pickup current 2500 A
Time delay 0 seconds
PTOC
Pickup current 1300 A
Curve US moderately inverse (U1)
Time dial 1
PDIS
Reach 100% of line impedance
Characteristic MHO
Time delay 0 seconds
PTUV
Pickup voltage 0.9 pu
Time delay 0.1 seconds
VI. Assessment of the Virtual IED Performance
The vIED’s performance was analyzed across 48 distinct fault scenarios to assess its response time and latency. Each fault scenario was repeated 50 times, with the response times
for each fault condition recorded by the virtual Test Set. This extensive testing enabled a comprehensive assessment of the vIED’s performance under various conditions, offering valuable insights into its response consistency and variability. Fig. 12 presents an oscillograph of the vIED’s response to a phase-to-ground fault with a fault resistance of 15 Ω. This scenario provides a clear illustration of the device’s protection function sensibilization.
400
200
0
200
400
Voltage [kV]
VA VB VC VS
5
0
5
Current [kA]
IA IB IC IN
0.0 0.2 0.4 0.6 0.8 1.0 1.2
Time (s)
ANSI 27
ANSI 21
ANSI 51
ANSI 50
Logic Output
FIGURE 12. Response to a phase-to-ground fault with 15 Ω fault resistance (ANSI 50, 51, 21, 27).
The response times for all fault conditions are summarized in Tables 2 to 5. Each table presents the minimum, mean, and maximum response times, as well as the standard deviation for different fault resistances, offering a comprehensive view of the latency and stability of vIED under various fault conditions. Table 2 shows the response times of the PIOC function, which reveal a progressive increase in mean response time with higher resistance faults. At zero resistance, the mean response time is lo-
w and consistent at 3.7117 ms, while it rises to 9.0385 ms at 50 Ω, indicating a predictable increase in latency. The standard deviation of 0.8726 ms at the highest resistance reflects moderate variability.
TABLE 2. Timing latency of the PIOC protection function in the vIED.
Fault
Resistance
Minimum Mean Maximum Std. Deviation
0 Ω 2.9867 ms 3.7117 ms 5.0000 ms 0.8462 ms
15 Ω 3.4367 ms 4.3382 ms 5.6200 ms 0.7616 ms
30 Ω 4.2167 ms 6.2318 ms 8.5433 ms 1.6483 ms
50 Ω 7.7700 ms 9.0385 ms 10.0033 ms 0.8726 ms
The response times of the PTOC function, as shown in Table 3, range from a minimum of 0.8605 ms to a maximum
8 VOLUME ,

of 13.5905 ms. In contrast to the PIOC function, the PTOC response time remains largely unaffected by increasing fault resistance, with an average response time consistently around 2 ms. The low standard deviation across all fault resistances indicates stable performance, likely due to this function’s inherent time delay, which minimizes the impact of transient fluctuations on response time.
TABLE 3. Timing latency of the PTOC protection function in the vIED.
Fault
Resistance
Minimum Mean Maximum Std. Deviation
0 Ω 0.8605 ms 1.7178 ms 13.5905 ms 1.1912 ms
15 Ω 0.8350 ms 1.7428 ms 2.9916 ms 0.7471 ms
30 Ω 0.4174 ms 1.9688 ms 8.9574 ms 0.9552 ms
50 Ω 1.0256 ms 1.9687 ms 9.5989 ms 1.2172 ms
Table 4 presents the response of the PDIS function, demonstrating a significant influence of the fault resistance on response time. The mean response time increases from 6.7757 ms at 0 Ω to 14.5585 ms at 30 Ω, indicating a clear sensitivity to increasing resistance. Despite this notable trend, the low standard deviation of 1.1653 ms reflects relatively consistent performance across trials. This increase in response time with fault resistance underscores the sensitivity of the PDIS function to resi-
stance changes, likely attributed to the phasor estimation process during the transient period.
TABLE 4. Timing latency of the PDIS protection function in the vIED.
Fault
Resistance
Minimum Mean Maximum Std. Deviation
0 Ω 5.0367 ms 6.7757 ms 10.3633 ms 1.6358 ms
15 Ω 6.1667 ms 8.3268 ms 11.2100 ms 1.3700 ms
30 Ω 7.3033 ms 14.5585 ms 18.9533 ms 1.1653 ms
Table 5 summarizes the response times of the PTUV function, which exhibit moderate fault resistance sensitivity, with values ranging from 0.5133 ms to 9.5500 ms. The mean response time remains relatively low, even at higher resistances, indicating a rapid response. However, at 50 Ω, the standard deviation increases to 3.8856 ms, higher than the other protection functions, suggesting some variability. This increased variation at 50 Ω can be attributed to a minimal voltage drop under high-resistance-
 fault conditions, which can affect response time consistency. In general, the vIED performed reliably, with response times acceptable for virtualized protection systems. The variability was low except where the fault resistance affected certain functions, probably due to a delayed estimation of the phasor under dynamic fault conditions. Across all functions, the global mean response time was 5.5278 ms,
TABLE 5. Timing latency of the PTUV protection function in the vIED.
Fault
Resistance
Minimum Mean Maximum Std. Deviation
0 Ω 0.5133 ms 1.5098 ms 7.6967 ms 1.0802 ms
15 Ω 0.5233 ms 1.6780 ms 7.2867 ms 1.2429 ms
30 Ω 0.5233 ms 1.6422 ms 6.8367 ms 1.2948 ms
50 Ω 0.5133 ms 3.6743 ms 9.5500 ms 3.8856 ms
with a standard deviation of 1.1332 ms, indicating stable performance in a virtual environment. These findings suggest that vIED could serve as a feasible alternative to physical devices for certain power system relaying applications.
VII. Conclusions
This paper presents a comprehensive implementation and performance evaluation of a vIED designed to fulfill the protection and control functions traditionally managed by physical IEDs in digital substations. The vIED was implemented in a virtualized, IEC 61850-compliant environment and rigorously tested across 48 fault scenarios (each repeated 50 times) to assess its response time and reliability. The evaluation demonstrated that the vIED delivered consistent and reliable performance, remaining wi-
thin the expected operating ranges for virtualized protection systems. Although response time variability remained generally low, certain protection functions exhibited delayed responses at higher fault resistances, largely due to inherent delays in phasor estimation under dynamic fault conditions. This responsiveness within acceptable limits in various fault scenarios highlights the potential of vIED as a practical alternative solution for applications requiring consistent time-sensitive response-
s. These findings support the feasibility of using virtualized protection equipment in digital substations. It has been demonstrated that a vIED can meet the response time and reliability standards traditionally associated with physical devices, underscoring the suitability of vIEDs for enhancing the flexibility, scalability, and cost-effectiveness of power grid protection systems. Although these results confirm the overall feasibility, further research is essential before practical deployment, pa-
rticularly regarding cybersecurity, redundancy, interoperability, network performance under high background load, and host-level failover behavior.
REFERENCES
[1] N. Matanov and P. Nankinsky, “Digital substations - the backbone of smart grids,” in 2022 14th Electrical Engineering Faculty Conference (BulEF). IEEE, 9 2022, pp. 1–6. [2] G. R. Santos, E. Zancul, G. Manassero, and M. Spinola, “From conventional to smart substations: A classification model,” Electric Power Systems Research, vol. 226, p. 109887, 1 2024. [3] CIGRE, Study Committee B5.60, “Protection, automation and control architectures with functionality independent of hardware,” CIGRE,
VOLUME , 9

Author et al.: Preparation of Papers for IEEE PES JOURNALS
Technical Brochure, 2022. [4] C. Guibout, A. Watar ́e, F. Carli, A. Carbonne, K. Mourier, and T. Rudolph, “Centralized protection and control for transmission system operations: Practical applications and perspectives,” IEEE Power and Energy Magazine, vol. 22, pp. 67–78, 5 2024. [5] Z. Jiang, H. Lv, Y. Li, and Y. Guo, “A novel application architecture of digital twin in smart grid,” Journal of Ambient Intelligence and Humanized Computing, vol. 13, pp. 3819–3835, 8 2022. [6] M. M. H. Sifat, S. K. D-
as, and S. M. Choudhury, “Design, development, and optimization of a conceptual framework of digital twin electric grid using systems engineering approach,” Electric Power Systems Research, vol. 226, p. 109958, 1 2024. [7] E. Go ́mez-Luna, J. E. Candelo-Becerra, and J. C. Vasquez, “A new digital twins-based overcurrent protection scheme for distributed energy resources integrated distribution networks,” Energies, vol. 16, p. 5545, 7 2023. [8] E. Go ́mez-Luna, J. D. L. Cruz, and J. C. Vasquez, “New-
 approach for validation of a directional overcurrent protection scheme in a ring distribution network with integration of distributed energy resources using digital twins,” Energies, vol. 17, p. 1677, 4 2024. [9] Z. Yao, D. Li, Z. Li, P. Zhou, and L. Li, “Relay protection mirror operation technology based on digital twin,” Protection and Control of Modern Power Systems, vol. 8, p. 51, 12 2023.
[10] R. Wojtowicz, R. Kowalik, and D. D. Rasolomampionona, “Next generation of power system protection automation—virtualization of protection systems,” IEEE Transactions on Power Delivery, vol. 33, pp. 2002–2010, 8 2018. [11] R. Wojtowicz, R. Kowalik, D. D. Rasolomampionona, and K. Kurek, “Virtualization of protection systems - tests performed on a large environment based on data center solutions,” IEEE Transactions on Power Delivery, vol. 37, pp. 3401–3411, 8 2022. [12] S. Ansari, P. Das, D. Wel-
ler, P. Raussi, and D. Babazadeh, “Operational testing of virtual and physical ieds using goose for protection application,” in 15th International Conference on Developments in Power System Protection (DPSP 2020). Institution of Engineering and Technology, 2020, pp. 6 pp.–6 pp. [13] D. Ro ̈sch, K. Sch ̈afer, and S. Nicolai, “The implementation and evaluation of virtualized protection intelligent electronic devices into a virtual substation,” Electricity, vol. 5, pp. 385–396, 6 2024. [14] R. Queiro-
z, T. Cruz, J. Mendes, P. Sousa, and P. Simo ̃es, “Containerbased virtualization for real-time industrial systems—a systematic review,” ACM Computing Surveys, vol. 56, pp. 1–38, 3 2024. [15] R. Carvalho, M. Antunes, J. P. Barraca, D. Gomes, and R. L. Aguiar, “Design and evaluation of a low-latency cpc environment for virtual ieds,” in 2022 IEEE 11th International Conference on Cloud Networking (CloudNet). IEEE, 11 2022, pp. 272–276. [16] N. Kabbara, A. Mwangi, A. S ̧ tefanov, and M. Gibescu, “A re-
al-time implementation and testing of virtualized controllers for softwaredefined iec 61850 digital substations,” IEEE Open Journal of Industry Applications, vol. 5, pp. 300–310, 2024. [17] J. A. L. Vilaplana, N. Kabbara, T. Coste, H. Morais, H. Zerriffi, and M. Gibescu, “Virtualized protection, automation, and control in electrical substations: An open-source dynamic cost-benefit assessment model,” IEEE Access, vol. 12, pp. 107 488–107 504, 2024. [18] W. G. on Centralized Substation Protection an-
d I. P. S. R. C. Control, “Advancements in centralized protection and control within a substation,” IEEE Transactions on Power Delivery, vol. 31, pp. 1945–1952, 8 2016. [19] O. A. Tobar-Rosero, O. D. Dı ́az-Mendoza, P. A. D ́ıaz-Vargas, J. E. Candelo-Becerra, H. A. Florez-Ce ́lis, and L. F. Quintero-Henao, “Digital substations: Optimization opportunities from communication architectures and emerging technologies,” Sci, vol. 7, p. 63, 5 2025. [20] J. Gaspar, T. Cruz, C.-T. Lam, and P. Simo ̃es, “Sm-
art substation communications and cybersecurity: A comprehensive survey,” IEEE Communications Surveys & Tutorials, vol. 25, pp. 2456–2493, 2023. [21] A. Bamigbade and V. Khadkikar, “Frequency estimators for sogi fll: Modeling, design, and equivalence for fll advancements,” IEEE Transactions on Instrumentation and Measurement, vol. 71, pp. 1–12, 2022. [22] J. Khodaparast, “A review of dynamic phasor estimation by non-linear kalman filters,” IEEE Access, vol. 10, pp. 11 090–11 109, 2022.
10 VOLUME ,

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:43.309Z
- **Text Length:** 47654 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 10 of 10
