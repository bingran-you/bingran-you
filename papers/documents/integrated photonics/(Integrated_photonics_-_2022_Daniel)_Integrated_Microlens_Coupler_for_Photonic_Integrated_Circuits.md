# PDF Document: (Integrated photonics - 2022 Daniel) Integrated Microlens Coupler for Photonic Integrated Circuits.pdf

**File Path:** (Integrated photonics - 2022 Daniel) Integrated Microlens Coupler for Photonic Integrated Circuits.pdf

**Processed Date:** 2026-02-10T18:17:07.590Z

**File Size:** 687.46 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 348

**Title:** (Integrated photonics - 2022 Daniel) Integrated Microlens Coupler for Photonic Integrated Circuits

**Collection:** Ion Trap > Fundamental

---

## Extracted Text Content

Tu3B.2

OFC 2023 © Optica Publishing Group 2023

Integrated Microlens Coupler for Photonic Integrated Circuits
Jianheng Luo1, Johannes Henriksson1*, Myung-Ki Kim2, Daniel Klawson1, Chun-Yuan Fan1, Ming Wu1
1University of California, Berkeley, Berkeley, California 2KU-KIST Graduate School of Converging Science and Technology, Korea University, Seoul, Korea
* The first two authors contribute equally to this work Jianheng.luo@berkeley.edu
Abstract: We design and experimentally demonstrate a new silicon photonic fiber coupling method using integrated microlens couplers. Efficient and broadband coupling to a single mode fiber with a best coupling loss of 0.9 dB is achieved. ©2023TheAuthor(s)
1. Introduction
Silicon photonics is widely used in telecom, datacom, quantum and neuromorphic computing, LiDAR and other sensors. Most of these applications require attaching fibers to the silicon photonic chip. Due to the large mismatch in mode sizes, fiber coupling remains one of the major challenges in mass production. Grating couplers are polarization dependent and sensitive to fabrication variations. Edge couplers with V-grooves require complex processing for mode size converters [1,2]. Free space coupling -
using microlens to expand optical mode can increase the alignment tolerance [3]. However, direct printing microlenses on chip facets is a slow serial process [4].
In this paper, we introduce a new free-space coupling scheme using integrated microlens couplers (IMCs) that can be batch fabricated on wafer scale. The IMC directly couples light from a waveguide to a horizontal free space beam above the wafer surface, with mode size matched to single mode fibers or fiber collimators with even larger mode size. The microlens in IMC can be simply fabricated by reflowing photoresist or polymer, and can be easily integrated with any silicon photonic integrated circu-
it. We present the design, simulation, and fabrication of the IMC, and demonstrate a fiber-to-waveguide coupling loss of 0.9 dB in O-band and 1.5 dB in C-band, with very low polarization dependent loss (0.5 and 0.1 dB in O- and C-band).
2. Design and Simulation
Figure 1(a) shows a schematic cross-section of the IMC. It consists of a polymer waveguide and a hemispherical microlens. Light can be easily coupled from a silicon waveguide to the polymer waveguide with low loss (< 0.1 dB) through an adiabatic coupler. So, in this paper, we focus on the coupling between the polymer waveguide and a single mode fiber (SMF). Figure 1(b) illustrates the working principle of the IMC. Light from the polymer waveguide is launched into the microlens, in which it freely -
propagates and expands to a large mode size and finally is collimated into a horizontal beam by the exit surface of the microlens. The collimated beam can be mode matched to an SMF by choosing microlens with the right diameter to maximize coupling efficiency. Because the refractive index of the microlens is higher than that of the lower cladding layer, the optical beam inside the microlens is totally reflected upward on the surface of the lower cladding layer and gradually elevated. When exiting t-
he IMC, the collimated beam is completely above the surface of the chip. This is a salient feature as it allows edge coupling without pristine facets made by dry etching or polishing. Photonic chips with IMCs can be diced like electronic chips.

Fig. 1 (a) Schematic side view of an IMC, including AR-coating and silicon waveguide. (b) 3D rendering of coupling from an SU-8 waveguide into a fiber.

Tu3B.2

OFC 2023 © Optica Publishing Group 2023

Figure 2(a) shows the finite-difference time-domain (FDTD) simulation of an optimized IMC with a 21-μm-tall and 23-μm-radius-of-curvature microlens made of positive photoresist AZ 40XT (n=1.59). The 2x2 μm2 single mode SU-8 (n=1.55) waveguide is tapered to 6 μm in width before it joins the microlens structure. To minimize reflections, a 240-nm-thick MgF2 (n=1.37) was coated on both the microlens surface and the fiber facets. The simulated electric field profiles of the collimated beam and the fibe-
r are well matched, as shown in Figure 2(b) and (c). A more detailed 3D FDTD simulation shows the coupling loss from the SU-8 waveguide to the optical fiber is less than 0.4 dB for both TE and TM mode at 1310 nm wavelength. Including the transition loss from silicon to SU-8 waveguides (~ 0.1 dB), the total coupling loss is < 0.5 dB. The optimal IMC is very compact. The total length including the Si/SU-8 adiabatic coupler is < 700 μm.

Fig. 2 (a) 3D FDTD simulation of the electric field when light propagates from an SU-8 waveguide into a fiber. (b) Simulated electric field at the lens-fiber air gap marked by red dashed line. (c) Fundamental mode of the fiber.

Fig. 3 Fabrication process flow (inlets: cross sections of the microlens).
3. Fabrication Process and Experiment Results
To ensure the microlens is self-aligned to the waveguide, we pattern a retention wall in the same SU-8 as the waveguide (Figure 3(a)). The microlens is fabricated by reflowing a lithographically patterned AZ 40XT cylinder (Figure 3(b) and (c)). The SU-8 retention wall prevents AZ 40XT photoresist from spreading during reflow [5]. The shape of the microlens is controlled by the size of the SU-8 wall and the volume of AZ 40XT cylinder. The scanning electron micrograph (SEM) of a fabricated IMC is sh-
own in Figure 4(a). The detailed shape of the microlens is measured by a confocal microscope.
A loopback structure consisting of two microlenses and an SU-8 waveguide loop was used to characterize the coupling loss between fiber and SU-8 waveguide. A fiber array unit (FAU) with SMF-28 fiber was aligned to the loopback structure, as shown in Figure 4(b). Because the SU-8 waveguide is short, the IMC coupling loss was estimated as half of the fiber-to-fiber loss. For the fabricated IMCs, the best coupling loss was achieved when the FAU was tilted by approximately 4 degrees towards the PIC, wi-
th minimum spacing between the FAU and PIC. We confirmed by simulations that the tilted emission angle is due to the slightly taller microlens than the designed value. The spectra for both TE and TM polarizations were measured over the O- and C-band, as shown in Figure 5. Broadband coupling for both polarizations with a minimum loss of 0.9 dB at 1310 nm for TM polarization and a 0.5 dB polarization dependent loss (PDL) was measured. At C band, a best coupling loss of 1.5dB is achieved for TE polar-
ization and the PDL is < 0.1 dB. The propagation loss of the SU-8 waveguide was measured using the cutback method. The propagation losses at 1310 nm are 2.9 dB/cm and 3.0 dB/cm for the TE and TM polarizations respectively. To ensure that the IMC is compatible with standard electrical packaging temperature cycles, we baked a microlens chip for 5 minutes at 250 °C and compared the lens shape and fiber coupling loss before and after baking. We observed only a 0.1 μm reduction in lens height and a 0.1-
 dB degradation of coupling efficiency

Tu3B.2

OFC 2023 © Optica Publishing Group 2023

after the extra thermal processing, which indicates that the polymer-based IMC is compatible with the thermal cycles associated with common solder reflow processes. With further optimization of the lens shape and fabrication process, better coupling efficiency (< 0.5dB), horizontal emission angle, and increased coupling distance can be achieved.

Fig. 4 (a) SEM image of IMC. (b) a loopback structure for IMC coupling loss measurement. (b) Photo of experimental setup with a FAU aligned to IMC loopbacks on a PIC chip.

O-Band Coupling Loss Spectra

C-Band Coupling Loss Spectra

Fig. 5. Measured coupling loss spectra for TE and TM polarizations in O- and C-band.
4. Conclusion
A new wafer-scale optical packaging approach using integrated microlens couplers (IMCs) is proposed and experimentally demonstrated. Free-space coupling using IMCs offers many advantages, including low coupling loss (0.5 dB theoretical, 0.9 dB experimental), broadband operation (both O and C bands), low polarization-dependent loss, large alignment tolerance (+/- 2 𝜇𝜇m), and small footprints (IMC < 100 𝜇𝜇m, IMC + adiabatic coupler < 700 𝜇𝜇m). The IMC can be easily integrated with any silicon -
photonic chip. The IMC presented here can be extended to match larger mode size of fiber collimators for even larger alignment tolerance.
Acknowledgements
This work is funded by Intel’s Integrated Photonics Research Center. The fabrication of IMCs was done in the Marvell Nanolab at University of California, Berkeley.
References
[1] S. Fathololoumi et al., “1.6Tbps Silicon Photonics Integrated Circuit for Co-Packaged Optical-IO Switch Applications,” in Optical Fiber Communication Conference (OFC) 2020, San Diego, California, 2020, p. T3H.1. [2] T. Barwicz et al., "Integrated Metamaterial Interfaces for Self-Aligned Fiber-to-Chip Coupling in Volume Manufacturing," in IEEE Journal of Selected Topics in Quantum Electronics, vol. 25, no. 3, pp. 1-13 [3] R. Marchetti, et al., “Coupling strategies for silicon photonics integrat-
ed chips [Invited],” Photon. Res., vol. 7, no. 2, p. 201, Feb. 2019 [4] P.-I. Dietrich et al., “In situ 3D nanoprinting of free-form coupling elements for hybrid photonic integration,” Nature Photonics, vol. 12, no. 4, Apr. 2018. [5] H.T. Hsieh and G.D. J. Su, “A Novel Boundary-confined method for High Numerical Aperture Microlens Array Fabrication,” in Micromech. Microeng. 20 035023.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:07.590Z
- **Text Length:** 9479 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
