# PDF Document: (ARTIQ - 2022 Wenji) ARTIQ-based Quantum Network Control.pdf

**File Path:** (ARTIQ - 2022 Wenji) ARTIQ-based Quantum Network Control.pdf

**Processed Date:** 2026-02-10T18:15:08.050Z

**File Size:** 1937.74 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 1021

**Title:** (ARTIQ - 2022 Wenji) ARTIQ-based Quantum Network Control

**Collection:** Multiplexing

---

## Extracted Text Content

ARTIQ-based Quantum Network Control
Tuesday, September 27, 2022

Agenda
• ARTIQ and SINARA Backgrounds • The Application of ARTIQ/SINARA in QUANT-NET • Real-time Quantum Network Control

ARTIQ - 1
• Advanced Real-time Infrastructure for Quantum physics • An open-source project
• https://github.com/m-labs/artiq
• Initiated and developed in partnership with the Ion Storage Group at NIST • Now support a growing number of physics experiments
• Trapped ions • NV centers • Ultra-cold atoms • AMO physic experiments •…

ARTIQ - 2
• High-level programming language for describing complex experiments • ARTIQ “kernels” are Python programs compiled and executed on the
core device • CPU with tightly coupled I/O timing gateware (“RTIO core”) • High resolution - nanosecond • Low latency - microsecond

Sinara - 1

• High quality hardware for ARTIQ

• Modular

• Flexible

• Well tested

• Open source • Cost-effective

http://m-labs.hk/experiment-control/sinara-core/

• International cooperation
• M-Labs (HK) • University of Oxford (UK) • Warsaw University of Technology (Poland) • University of Maryland (USA) • NIST Boulder (USA)

Sinara - 2

Sinara 1124 Carrier - Core device

Sinara DDS card – EEM I/O card

Crate/Chassis

Sinara TTL card – EEM I/O card

Sinara DAC card – EEM I/O card

ARTIQ/SINARA Deployment - 1
Master – Satellite Deployment Note: ARTIQ/SINARA Terminology

ARTIQ/SINARA Deployment - 2
Standalone Deployment

How to apply ARTIQ/SINARA in QUANT-NET?
• Modular • Flexible • Extensible • Deployable

ARTIQ-based Q-node Implementation
One-Crate ARTIQ Deployment

ARTIQ-based BSM-node Implementation
One-Crate ARTIQ Deployment

Real-time quantum network control

850nm 1550nm

• Dedicated links to support real-time communication

1310nm 1610nm CWDM

Fiber

Three Major functions
• Quantum channel calibration and optimization with classical pulses
• To mitigate against polarization and frequency drifts • Interleave with quantum network operation and HOM analyzing unit operation • This work overlaps with the LDRD M-node project, which requires a similar function
• HOM Analysis to ensure photon indistinguishability for BSM
• In temporal degree of freedom
• Real-time monitoring HOM interference visibility at different time delays • Accurately determine the arrival time difference of two photons at the BSM-node
• The time difference will be fed back to the related Q-nodes so that they can vary the two photon’s generation time to allow them to arrive at the BSM node simultaneously
• The time difference will also be used to herald successful entanglement generation
• In polarization and spectral degree of freedom
• Bell-state measurement
• The measurement results needed to be transmitted in real time (few 100 ns) to the related quantum nodes in the network
• Linear optics implementation will differentiate two bell states

1. Quantum Channel calibration & optimization
• Quantum channel calibration and optimization with classical pulses
• To mitigate against polarization and frequency drifts
• Interleave with quantum network operation and HOM analyzing unit operation
• This work overlaps with the LDRD M-node project, which requires a similar function

Active link polarization drift compensation - Hardware
• Need a separate polarization controller driver • 3 or 4 channels available

Active link polarization drift compensation/Calibration
• Plan to use classic light to speed up the calibration process
• Need to switch between quantum light and classic light
• Classic light source
• Laser
• Detector
• Classic light power meter
• Thorlabs PM100D
• This classic calibration will be interleaved with quantum network operation and HOM operation

Active link polarization drift compensation – Algorithm
Suppose we have an OZ Optics’ Electrical Driven Polarization Controller (EPC), which features four waveplates that rotate perfectly around H,D,H,D respectively, that feed a polarizer oriented along H.
A straight-forward SEARCH approach to alignment might be to:
1. Transmit H from the source. 2. Try a setting for the first waveplate 3. Sweep the second waveplate and measure power and remember the retardance that
maximizes measured power. 4. Repeat steps 2 and 3 until visibility is maximized. Set the first two waveplates to the
retardances that maximize the visibility. 5. Transmit D from the source. Set the fourth waveplate to rotate by 90 degrees around D. 6. Sweep the third waveplate, which rotates around H. When the measured power is maximal,
stop. Now the first three waveplates are “aligned”.

2. HOM Analysis
• To ensure photon indistinguishability for BSM
• In temporal degree of freedom
• Real-time monitoring HOM interference visibility at different time delays • Accurately determine the arrival time difference of two photons at the BSM-
node
• The time difference will be fed back to the related Q-nodes so that they can vary the two photon’s generation time to allow them to arrive at the BSM node simultaneously
• The time difference will also be used to herald successful entanglement generation
• In polarization and spectral degree of freedom
• Polarization control
• Can be implemented locally if the interference window is narrowing
• Frequency re-optimization
• Require a systematic calibration and tuning of laser, trapped-ion cavity, QFC, and filtering

HOM Analysis (cont.)
• Accurately determine photon arrival time difference
• The time difference will be fed back to the related Q-nodes so that they can vary the two photon’s generation time to allow them to arrive at the BSM node simultaneously
• Scheduled periodically

HOM Analysis (cont.)
• Open issues
• High-level HOM analysis protocol between BSM-node, Q-nodes, and network control plane needs to be defined
• Trigger pulses generation • Hardware interfaces between BSM-
node and Q-node needs to be defined
• Dedicated fibers for trigger pulses? • Frequency?
• How to do frequency re-optimization? • HOM-based polarization optimization?
Real-time quantum network control

3. Bell-state measurement
• Bell-state measurement
• The measurement results needed to be transmitted in real time (few 100 us) to the related quantum nodes in the network
• Linear optics implementation will differentiate two bell states
• Need to support Ψ+, Ψ-

Bell-state measurement (cont.)
• Open issues
• BSM protocol between BSM-node, Q-nodes, and network control plane needs to be defined
• Hardware interfaces between BSM-node and Q-node needs to be defined
• Dedicated fibers for feed-forward msgs?
• Layer 1 vs. Layer 2 • Is it necessary to implement a layer 2 feed-forward mechanism?
• Frequency?

ARTIQ-based Real-time Quantum Network Control
• Orchestrate, Calibration, and optimization at network level
• On-device control at node level

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:08.050Z
- **Text Length:** 6754 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
