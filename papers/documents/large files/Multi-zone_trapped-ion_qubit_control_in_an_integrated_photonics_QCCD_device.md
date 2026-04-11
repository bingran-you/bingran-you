# PDF Document: Mordini et al. - 2025 - Multi-zone trapped-ion qubit control in an integrated photonics QCCD device.pdf

**File Path:** Mordini et al. - 2025 - Multi-zone trapped-ion qubit control in an integrated photonics QCCD device.pdf

**Processed Date:** 2026-02-10T18:16:42.694Z

**File Size:** 12139.37 KB

**Total Pages:** 17

**Extracted Pages:** 17

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2848

**Title:** Multi-zone trapped-ion qubit control in an integrated photonics QCCD device

**Collection:** Large Files

---

## Extracted Text Content

Multi-zone trapped-ion qubit control in an integrated photonics QCCD device
Carmelo Mordini,1, ∗ Alfredo Ricci Vasquez,1, † Yuto Motohashi,1 Mose Mu ̈ller,1 Maciej Malinowski,1 Chi Zhang,1 Karan K. Mehta,1, ‡ Daniel Kienzler,1 and Jonathan P. Home1, 2, §
1Institute for Quantum Electronics, ETH Zu ̈rich, 8093 Zu ̈rich, Switzerland 2Quantum Center, ETH Zu ̈rich, 8093 Zu ̈rich, Switzerland (Dated: December 19, 2024)
Multiplexed operations and extended coherent control over multiple trapping sites are fundamental requirements for a trapped-ion processor in a large scale architecture. Here we demonstrate these building blocks using a surface-electrode trap with integrated photonic components which are scalable to larger numbers of zones. We implement a Ramsey sequence using the integrated light in two zones, separated by 375 μm, performing transport of the ion from one zone to the other in 200 μs between pulses-
. In order to achieve low motional excitation during transport, we developed techniques to measure and mitigate the effect of the exposed dielectric surfaces used to deliver the integrated light to the ion. We also demonstrate simultaneous control of two ions in separate zones with low optical crosstalk, and use this to perform simultaneous spectroscopy to correlate field noise between the two sites. Our work demonstrates the first transport and coherent multi-zone operations in integrated photoni-
c ion trap systems, forming the basis for further scaling in the trapped-ion QCCD architecture.
I. INTRODUCTION
Large-scale quantum systems using individual atomic qubits offer promising approaches for quantum information processing [1–3] and metrology [4]. Such applications require pristine control over the atomic systems, implemented via precise and stable delivery of electromagnetic fields. One possible way to scale up the control capabilities while achieving high operational fidelities is to distribute both the qubits and their control fields over multiple spatially distinct zones of a trap device. Each-
 zone contains only a small number of qubits, manipulated via local operations and connected to other zones by physically transporting information carriers, often the atoms themselves, from site to site. This idea has been first proposed and demonstrated with trapped ions, where it is a fundamental component of the Quantum Charge-Coupled Device (QCCD) architecture [5–10], as well as more recently for neutral atoms in optical tweezers [11, 12]. A relevant challenge for scaling such systems is the d-
elivery of the laser light used to coherently control the qubits. For trapped ions, the traditional approach based on free-space optics becomes challenging due to the combined constraints of creating multiple tightly focused beams and the presence of nearby trap electrodes. This complexity increases significantly when multiple wavelengths of light are required in each zone. An alternative approach is to deliver light using optical waveguides directly integrated into the trap structure. This provid-
es compact routing of light to the zones of interest, where
∗ cmordini@phys.ethz.ch; These two authors contributed equally † These two authors contributed equally ‡ Current address: School of Electrical and Computer Engineering, Cornell University, Ithaca, NY 14853, USA § jhome@ethz.ch
grating couplers allow it to be focused directly on the trapped particles [2, 13–18].
FIG. 1. Multizone surface-electrode trap with integrated photonics. (a) We demonstrate building blocks of QCCD architecture in a surface-electrode trap with integrated photonic elements. Light is coupled to the trap using optical fibers, and integrated waveguides are used to deliver red and infrared light to two different trapping zones. (b) We perform a Ramsey experiment between the two separate zones using the integrated light. This is enabled by methods to mitigate the effect of photonic struct-
ures on ion transport. (c) We simultaneously and independently control two ions in two different zones and correlate spectroscopic measurements across the two sites.
Integrated optics light delivery has thus far primarily
arXiv:2401.18056v4 [quant-ph] 18 Dec 2024

2
been implemented with ions in a single zone with ingredients including delivery of multiple wavelengths [15] as well as all basic quantum operations including multi-ion quantum logic [14]. In parallel with our work, Kwon et al. realized simultaneous addressing of individual ions located in different zones of the same trap [19]. However, none of these prior works have demonstrated in-sequence transport between zones, in which maintaining low excitation is important. The use of integrated components-
 in multiple trap zones introduces several complications, as exposed dielectric can affect trap performance through additional heating or charging of surfaces [14, 16], which can play a detrimental role in transport routines. In this work, we demonstrate manipulation and transport of trapped-ion qubits across multiple zones of a surface electrode trap with light delivered using photonics integrated into the trap structure (Fig. 1(a)). We demonstrate coherence between multiple zones through a distr-
ibuted Ramsey experiment, which required mapping optical to ground state qubits to avoid sensitivity to the optical phase of the driving beams (Fig. 1(b)). With two ions, one in each zone, we demonstrate operation in parallel of multiple regions of the trap, allowing us to characterize operational crosstalk as well as to measure correlations across the device (Fig. 1(c)). A key element of the work, both for loading and multi-zone operation, is the development and calibration of transport routines -
that accommodate for differences between the experimental electric field landscape compared to our trap models, primarily due to the presence of the dielectric windows through which light is delivered. These ingredients form the primary components for a future scaled multi-zone trapped-ion QCCD device with integrated optical delivery. The paper is laid out as follows. We first describe the multi-zone trap and its relevant features. We then introduce the development of transport protocols and calib-
ration routines which allow us to mitigate the effects of the exposed windows. We go on to describe experiments on multi-zone coherent control, in which the ion is transported from zone to zone between operations. Next, we illustrate experiments with parallel operation of multiple zones, and we characterize the crosstalk between them. Finally, the last sections discuss two technical topics that enabled the experiments described above: independent control of the trap electric fields over multiple z-
ones, and our scheme for scalable light delivery to the different zones of the trap.
II. MULTI-ZONE TRAP WITH INTEGRATED PHOTONICS
Our ion trap, sketched in Fig. 2, is a cryogenic, segmented surface-electrode trap with integrated photonics used to directly deliver light to calcium ions, which can be trapped in multiple zones of the chip. Operation of a single zone of the same device is described in
ref. [20]. In the 40Ca+ ion, we use as qubits selected pairs of Zeeman levels within the 4S1/2 and 3D5/2 manifolds, addressing them using the quadrupole transition at 729 nm. Additionally, we employ laser light at 854 nm to repump the 3D5/2 level. Cooling, state preparation, and qubit readout via state-dependent fluorescence are performed using light at 397 and 866 nm, while photoionization (PI) beams at 423 and 389 nm are used for trap loading. Figure 2(c-d) show the relevant energy levels and wa-
velengths.
The trap was fabricated in a commercial foundry [21], and integrates light at 729, 854, and 866 nm using silicon nitride waveguides. The waveguides extend to the edge of the chip and are coupled with an efficiency of ∼ 70 % to an attached fiber array [14]. Grating couplers terminate the waveguides for light output, focusing the beams to the position where we trap the ions, at a height of 50 μm above the chip. The trap has three trapping zones, numbered as in Fig. 2, out of which we only use Zone 1-
 and Zone 2. Each of the zones is equipped with one broad-output grating coupler emitting at 866 and 854 nm, and two tightly-focusing couplers fed by the same input waveguide, which produce a passively phasestable standing wave at 729 nm [20]. Voltages applied to the segmented electrodes allow us to shuttle ions along the trap axis x as well as to precisely position them within the intensity pattern of the standing wave in each zone. The layout of the waveguides and electrodes is shown in Fig. 2(a-
), (b) and (e). While the red and infrared wavelengths are integrated and delivered on-chip, all UV and blue light is delivered in free-space. In this device, two independently controlled beams at 397 nm are sent to Zones 1 and 2, while PI beams at 423 and 389 nm are sent to Zone 2, used both as an experimental zone and as the loading zone. We also use an additional free-space beam at 729 nm propagating along the trap axis, which we refer to as ”axial beam”, as a probe for the transport experiment-
s described in this work. The free-space beam geometry is shown in Fig. 2(b).
In all of our experiments, we begin by Doppler cooling the ion using free-space light at 397 nm as well as integrated 866 and 854 nm light. We additionally cool the axial mode of the ion to an average mean phonon occupation of  ̄n ∼ 1.5 quanta using ElectromagneticallyInduced Transparency (EIT) cooling [22], with an additional free-space σ-polarized beam at 397 nm (not shown in Fig. 2). This beam is then used to initialize the ion in the |↓⟩ = |4S1/2, mj = −1/2⟩ state via optical pumping. State de-
tection is performed using 397 nm and 866 nm fluorescence. For the experiments described in Section VI, we initialize the ion in Zone 2 to the |↓⟩ state using integrated light at 729 nm and 854 nm.

3
R.F.
375 μm
R.F.
Zone 1 Zone 2
729 nm
4P3/2
397 nm
854 nm
866 nm
4P1/2
4S1/2
3D3/2
3D5/2
729 nm 854 nm
866 nm
dc
rf
rf
dc
Ion locations, 50 μm height
Grating couplers
Trap axis
120 μm
(e)
x
y
z
B
Integrated splitter
dc
dc
423 nm
4S0
389 nm
4P1
Ca
729 nm probe
397 nm 397 nm 423 nm 389 nm
(a)
(b)
(c) (d)
Waveguides Electrodes
40Ca+
FIG. 2. Details of the trap chip and energy level structure of the ions. With a series of zoomed-in images, we describe the geometry of both the electrical and photonic layers of the trap. (a) The large-scale layout shows the relative placement of electrodes and integrated waveguides. The width of the waveguides is exaggerated for better visibility. (b) Microscope image of the region of interest for our experiment, showing the two zones where experiments are carried out. Here we highlight the inte-
grated output couplers for each zone and the set of electrodes used to transport and position the ion(s). In overlay, we show a sketch of the free-space laser beams. Near-UV light at 397 nm for cooling and detection is sent to both zones independently, while photoionization beams at 389 nm and 423 nm are sent only to Zone 2. The axial 729 nm beam probes both zones simultaneously. (c-d) Relevant wavelengths for ionizing (c) and controlling the ion (d). (e) The close-up shows the details of the inte-
grated photonic elements in each zone. Two output couplers located on the axis of the trap emit light at 729 nm, while a third one emits light at 854 and 866 nm for repumping [20].
III. STRAY CHARGE COMPENSATION AND WAVEFORM DIAGNOSIS
A crucial step in the experiments described in Section V is the transport of ions between the two locations. In our trap, the grating couplers face the surface through cutouts in the electrodes, creating windows of exposed dielectric visible in Fig. 2(b). In these regions, as well as in the gaps between the electrodes, the electrical potential is not controlled by DC voltage sources and hence they are obvious candidates for the creation of undesired potentials due to localized stray charges. In ou-
r experiments, a particular challenge is that the presence of those charged regions affects the performance of transport operations, for which we devise strategies to quantify and mitigate their effect. To transport the ion, we execute a pre-programmed sequence of time-dependent voltages, or waveform, on the
trap DC electrodes. The waveform is synthesized by solving a quadratic optimization problem. Starting from a model of the potential generated by each electrode when a unit voltage is applied, the program calculates the voltages that best reproduce the total potential required at each timestep, including a set of physical objectives such as a predefined transport trajectory or a constraint on the maximum voltage output. The electrode potentials are calculated analytically in the gapless approximati-
on [23], with formulas synthesized for an approximation to our electrode geometry using the Mathematica package SurfacePattern [24]. In this manuscript we refer to the formulas describing the potentials as the trap model. Our code for the generation and analysis of the waveforms has been released as an open-source Python package [25]. Further details on the hardware setup are described in Appendix D. The transport sequence for these experiments moves

4
(a)
(b)
FIG. 3. Direct measurement of stray potential curvature in Zone 1. We use a trapped ion as a direct probe of the electrical potential above the trap, and use the measurements to model and compensate the discrepancy with the electrical model of the trap. (a) Measurement of the local axial trap frequency by sideband spectroscopy using the 729 nm axial beam, as a function of the ion position in Zone 1. The red points show the measured trap frequency without any compensation. The black solid line is a-
 fit of Eq. (1) to these data, yielding the voltage set V1. The gray, dashed line marks the target trap frequency of 1.9 MHz. The blue data points show the final frequency measurement, where using the voltage set V2 we achieve a uniform trap frequency. Error bars are smaller than the data points, as the average relative error on the frequency measurements is around 0.5 %. (b) Map of the potential generated by the window electrodes with voltages V2. The overlying sketch shows the geometry of the co-
upler cutouts and their voltages, in volts. Labels on the contour lines report the value of the potential in electronvolts. The gray dashed line indicates the span of the x axis covered by the measurements in (a).
the ion between Zones 1 and 2 along a heuristic sigmoid trajectory [26]. The speed is limited by low-pass filtering of the voltages applied to the trap, implemented with two sets of filters with a combined cutoff of 30 kHz. We aim for the transport to be as fast as our filter electronics allow while maintaining a constant axial frequency of 1.9 MHz along the trajectory. We first quantify the effect of directly using sequences based on the modelling by performing qubit rotations after transport. We-
 prepare the ion in Zone 1, then transport it to Zone 2 in 200 μs where we drive carrier Rabi oscillations using the 729 nm integrated beam. The ion is then brought back to Zone 1 for detection by running the same waveform in reverse. We measure the average motional excitation from the decay of the Rabi oscillation signal, with a model accounting for coherent and incoherent excitation — the fitting procedure is described in Appendix C. In initial experiments without compensating for the presence o-
f the windows, we quantify the total excitation delivered by the transport as a coherent com
ponent with average Fock number |α|2 ∼ 58 quanta, and an incoherent component of n ̄ ∼ 25 quanta, which significantly reduces the quality of even relatively short carrier oscillations required for gates. We relate this amount of excitation to strong variations in the trap frequency that the ion might be subject to during uncompensated transport. On one hand, the ion can experience increased heating rate if the trap frequency decreases for an appreciable fraction of the waveform time [27]. For refe-
rence, we report a measured heating rate of between 2 and 3 quanta/ms for the axial motional mode at a frequency of 1.9 MHz, and we highlight that separate measurements of the heating rates with the ion directly above the windows were not observably different from those measured in other regions of the trap axis, where no windows are present. On the other hand, an increased trap frequency could lead to crossing between the axial and one of the hot radial modes, resulting in an excitation transfer -
[28]. In either case, a compensation strategy that stabilizes the value of the trap frequency is beneficial to improve transport. The trap model assumes the window surfaces to be grounded electrodes, neglecting the effect of the underlying dielectric. To mitigate the effect of the model discrepancy in the region of the windows, we characterized it and built a heuristic model that describes it with additional potentials associated to the windows — whether arising due to approximations in our trap m-
odel or from charge build-up due to laser light — allowing compensation in the waveform design. In the improved model, we replace the grounded windows with fictitious electrodes, with the same shape as the cutouts, loaded with a set of effective “coupler voltages” V = {Vj}. Here, the index j labels the four windows present in each zone in our trap geometry. Using the ion as a local probe, we determine V from a spatially resolved measurement of the stray curvature. This is done by positioning the i-
on along the trap axis in a potential which, according to the model with grounded windows, produces a target trapping frequency ω0 = 2π × 1.9 MHz independent of position. We attribute deviation of the measured frequencies from this value to the stray curvature generated by the windows, parametrized as C(x) = P Vj∂x2φj(x), where φj is the unit potential generated by the window electrode j. This results in a spatially dependent trap frequency
ω(x) =
r
ω02 + q
m C(x). (1)
We measure the actual trapping frequency with sideband spectroscopy using the axial beam, and fit it with Eq. (1) to extract the values of the coupler voltages. Results of performing this calibration in Zone 1 are shown in Fig. 3(a). Red data points show the measurements, while the black solid line shows the fit from which we obtain the voltage set V1 = {−2.21, −2.14, −2.12, − 2.12} V, for the left, right, top, and bottom window respectively. While fitting, we constrain the voltages of the top and

5
bottom windows to be the same, since we can only probe the curvature profile along the trap axis. We then replace the grounded windows with V1 in the trap model, and synthesize a new voltage set targeting again a homogeneous frequency of value ω0. We repeat the measurement, and find that we still measure a non-uniform frequency profile, but closer to the expected one. We further update the coupler voltages and iterate the procedure until we measure a uniform frequency close to the target value. Af-
ter the last iteration we obtain the values V2 = {−1.62, −1.52, −2.03, − 1.20} V, leading to the trap frequency measurements shown in blue. In the last round of calibration, we also introduce a difference between the modeled top and bottom window electrode voltages to account for the observed micromotion compensation fields required in the y direction. Figure 3(b) shows this final voltage set on the trap layout and a map of the stray potential generated by the window electrodes in a plane parallel-
 to the electrodes at the height of the ion. Although this method could be straightforwardly carried out in Zone 1, in Zone 2 (the loading zone) the discrepancies between model and experiment were larger, which led to problems with ion loss during implementation. Compensation in Zone 2 was therefore performed using transport, as described in Section IV.
Our heuristic model allows us to compensate for the discrepancy between the predicted and the actual potential, but it does not provide information regarding the source of such discrepancies. The first possible source is the electrical response of the other layers of the trap chip underneath the electrodes. This is normally neglected by the gapless approximation used in our analytical model, which breaks down at the windows, whose size is not small compared to that of the nearby electrodes [29]. T-
his results in a net charge on the windows induced by the field created by the electrodes, which in the heuristic model would be described by an effective coupler voltage correlated to the ones applied to the surrounding DC electrodes. We quantify this effect by comparing the prediction of the analytical trap model with the result of a 3D finite element method (FEM) simulation, that calculates the electric potential on the trap surface accounting for all the conducting and dielectric layers of the-
 trap and their geometry. In Appendix A we describe in detail the trap layer stack and the simulation and show the obtained results. From the comparison, we observe that the dielectric response effect is non-negligible, but it is mitigated by the presence of the ground plane, which lies below the electrodes at a distance much smaller than the size of the coupler windows and thus provides an effective grounding for the above dielectric.
We find that this effect cannot account alone for the measured discrepancy. A rough estimate based on the FEM simulation is that the dielectric contributes to around 30 % of the effective voltage that we attribute to the window. We think that the remaining part can describe charges of other nature, and there are indications that photoinduced charging is a relevant source.
We find that the excess voltage is negative, in agreement with negative charging due to the accumulation of photoelectrons on the dielectric substrate [30, 31]. Furthermore, we observe that the loading zone showed a stronger discrepancy with the analytic model, which we correlate with the presence of the PI beams.
IV. TRANSPORT DIAGNOSIS VIA DOPPLER VELOCIMETRY
In order to quantify the effectiveness of our stray field compensation method, we directly characterize transport using Doppler velocimetry. Using the axial beam, we perform spectroscopy of the carrier transition at various points while the ion is in motion. From this, we infer the velocity of the ion vvv from the Doppler shift of the resonance, ∆ω = −kkk ·vvv, where kkk is the beam wavevector. Figure 4(a) shows the pulse sequence used in this experiment. Similar methods have previously been appli-
ed for direct probing of the ion position [32], for the characterization of time-varying laser Hamiltonians [33], and for the implementation of quantum gates [34, 35]. With this method, we characterize the transport of one ion from Zone 1 to Zone 2 using a waveform with a total duration of about 1 ms, before and after including the coupler voltages in the model. The spectroscopy pulse has a duration of 30 μs, limited by the available laser power in the axial beam. Because of this, in these experim-
ents we use a slower waveform to keep the probe time short compared to the acceleration timescale |vvv|/(dv/dt), allowing us to measure quasi-instantaneously the velocity profile. Figure 4(b) shows the velocity profile measured before introducing compensation. We observe deviations from the expected trajectory (red solid line) and notice that the effect is particularly strong when the ion is moving near the couplers, as it experiences an uncontrolled acceleration caused by a transient potential. T-
his can be observed as a spread in the spectroscopy signal, as the Doppler-shifted resonance frequency sweeps over different values within the time of the probe pulse. We then include compensation in the generation of the transport waveform, using for both zones the voltage set V2 which we measured in Zone 1. This is effective in removing the excitation observed at the beginning of transport close to Zone 1, but is not sufficient to avoid it in Zone 2. We then adjust the voltages in Zone 2 to supp-
ress the residual excitation measured in the velocity profile. We do this by synthesizing multiple waveforms with different coupler voltages in Zone 2, and choosing the set where the velocity profile is closest to the intended trajectory. The number of possible voltage sets tested in this way is limited by the long time needed to complete the Doppler velocimetry measurement, and therefore the method described in Section III is generally preferable. The final compensation voltages for Zone 2 are {−-
3.14, −3.14, −3.62, − 2.82} V, which results in the trajectory shown in Fig. 4(c). There remains an

6
(b)
(c)
~3000 ~1000 ~1000
Cool State Prep.
Zone1
Axial
beam
Time
(μs) 250
Position
Z1 Z2 Z2
Z1
Pulse delay
Velocity
(a)
Detection
Ion acceleration
FIG. 4. Doppler velocimetry. (a) Experimental sequence to measure the velocity profile. The ion is initially cooled and prepared in Zone 1 (Z1), and then adiabatically transported to Zone 2 (Z2) in 1 ms. A 30 μs 729 nm pulse is applied with a variable time delay during transport using the free-space axial beam. Finally, the ion is brought back to Zone 1 for state detection. (b-c) In-flight spectroscopic measurement of the transport velocity of a single ion, probing the Doppler shift induced by tra-
nsport with a free-space 729 nm beam propagating parallel to the trap axis, before (b) and after (c) compensation of the grating couplers. The colorbar shows the population in the |↓⟩ state. ∆ω is the frequency offset of the beam to the qubit frequency of the ion at rest. The scale on the right axis measures the particle velocity calculated from the first-order Doppler shift. The green and orange regions show the times when the ion would be on top of the outcouplers, if it followed the ideal traje-
ctory.
observable discrepancy between the expected trajectory and the data near the couplers in Zone 2, which is the loading zone. We think that compensation there is made harder by the frequent ion reloading, which affects the charging of the windows.
We use the refined set of corrections to generate faster waveforms, and optimize the waveform time using Rabi oscillations after transport. We find the optimal waveform time to be around 200 μs. Slower waveforms result in unwanted motional excitation due to the high heating rates of the trap. Faster waveforms resulted in a reduced quality of Rabi oscillations, which we attribute to waveform distortion due to the in-cryo filters, as described in Appendix D. The waveforms with optimal time are used -
in the subsequent experiments described below.
We proceed to measure the residual motional excitation along the transport trajectory after including the compensation. We do this by transporting the ion from Zone 1 to Zone 2 and stopping the waveform at different positions along the trap axis. We then perform Rabi oscillations with the axial beam and bring the ion back to Zone 1 for detection. We measure the motional excitation of the ion fitting the Rabi oscillations with the method described in Appendix C. A first analysis that used the mixed-
 thermal/coherent excitation model re
sulted in an almost negligible incoherent component in the motion excitation. Therefore, we proceed assuming that the ion is in a coherent state after transport, and we measure the evolution of the coherent excitation through the transport sequence.
Figure 5(a) illustrates the pulse sequence used for this experiment, while (b) shows the measured |α|2 as a function of the final position in the transport. For reference, we draw in (c) a sketch of the relevant region of the trap. We observe a transient excitation when the ion passes above the windows, reaching up to |α|2 ∼ 80 quanta while approaching Zone 2. We interpret this as the effect of residual miscompensation of the potential near the couplers, as it correlates with the discrepancy in th-
e transport velocity trajectory observed in Fig. 4(c). The ion gets successively de-excited further in the waveform, showing that the residual excitation is fully coherent. This is consistent with the fact that the Rabi oscillations are well-fitted without the needed to include an incoherent motional excitation in the model. When the transport is executed to the end, we observe a final |α|2 ∼ 8 quanta. The reduction in motional excitation from |α|2 ∼ 58 to 8 quanta, and  ̄n ∼ 25 quanta to a neglig-
ible amount, for the coherent and incoherent fraction respectively, confirms the effectiveness of our heuristic

7
~3000 0-200 0-500
Cool
State Prep. Detection
Zone1
Axial
Beam
Time
(μs) 250
Position
Z1
Z2 Z2
Z1
0-200
(a)
(b)
(c)
FIG. 5. Mid-transport measurement of motional excitation after coupler compensation. (a) Experimental sequence to measure the motional excitation along transport. The ion is initially cooled and prepared in Zone 1 (Z1), and then transported to an intermediate position between Z1 and Zone 2 (Z2) by truncating the waveform which includes the coupler compensation. We perform Rabi oscillations in that location using the axial beam, and finally, we bring the ion back to Zone 1 for state detection. (b) -
Measured motional excitation as a function of transport distance. The inset shows two sample Rabi flops, corresponding to the data points squared with the same color. (c) A sketch of the trap layout between the two zones.
compensation method. Supplementing the trap model with a description of the potential coming from the coupler regions allows us to synthesize the transport waveform with reduced motional excitation, enabling multizone operations in the integrated photonics architecture.
V. MULTI-ZONE COHERENT OPERATIONS
Using the transport developed in section III, we now proceed to demonstrate multi-zone coherent operations in our integrated device, by performing a Ramsey experiment across the two trap zones separated by 375 μm. In a first experiment, we implement the sequence on an optical qubit, defined by the states |↓⟩ = |4S1/2, mj = −1/2⟩ and |1⟩ = |3D5/2, mj = −1/2⟩. The ion is initialized in Zone 1 to the |↓⟩ state. We then apply
a π/2-rotation using a laser pulse at 729 nm, which prepares an equal superposition of the states |↓⟩ and |1⟩. We subsequently transport the ion in a total time of 200 μs to Zone 2, where we complete the Ramsey sequence with a second π/2-pulse. Both pulses are implemented using integrated light, delivered to each zone by separate optical fibers and controlled by individual fiber Acousto-Optic Modulators (AOMs). Finally, we transport the ion back to Zone 1 where we perform detection, measuring the -
population in the |↓⟩ state via state-dependent fluorescence. Figure 6(b) shows the population as a function of the phase of the second π/2-pulse φ. The red points (connected by a dashed line) show the results of experiments performed using the optical qubit. The expected sinusoidal signal is completely scrambled, but the presence of data points close to 1 indicates that the Ramsey sequence can still be closed with high contrast. The data highlights the presence of slow fluctuations in the relativ-
e optical phase between the two laser beams that are used to manipulate the qubit superposition in each of the zones, originated by the optical fibers bringing light to the chip. These effectively randomize the value of φ for each data point.
The light is generated for both zones by the same narrow-linewidth laser source and is delivered to the experiment with a fully fiberized optical system. After amplification, the light is split in two using a 50:50 fiber splitter, after which each branch is sent through a separate fiber AOM for pulsing and frequency control, and finally to the experiment via an in-cryo optical fiber directly coupled to the chip. The extended use of fiber optics, albeit enabling scalability and greatly easing the m-
aintenance of the optical setup, results in fluctuations in the relative phase between the different optical paths, originating from thermal or mechanical stress on the optical fibers. For small-scale setups, these can be passively mitigated with careful thermal and mechanical anchoring of the fiber setup, by stabilizing the power duty cycle of the driving AOMs [36], or by active phase noise cancellation [37, 38]. However, as the size of an experiment scales up, implementing these methods to keep -
track of the relative phases between multiple pairs of beams can quickly become unfeasible.
To mitigate the phase fluctuations, we implement a hybrid encoding scheme by mapping the qubit state from the optical qubit to the ground state manifold using a 729 nm π-pulse prior to transport, with the qubit now defined by |↓⟩ = |4S1/2, mj = −1/2⟩ and |↑⟩ = |4S1/2, mj = +1/2⟩ [39]. In Zone 2, a second π-pulse reverts the ion state to the optical qubit before the final pulse of the Ramsey sequence. For detection, we again transport the ion back to Zone 1. The complete sequence is illustrated in -
Fig. 6(a). This scheme has the advantage that it does not require phase coherence between the two sets of optical pulses executed in the different zones, but only within pulses in the same zone, which is easier to maintain. The blue data points in Fig. 6(b) show the expected oscillation associated with the Ramsey phase

8
π/2 π
π π/2
~3000 ~10 200 ~10 200 250
Cool
State Prep. Detection
Zone1
Zone2
Transport
Transport
Time
(μs)
π
(a)
(c)
(d)
(e)
(b)
mj = +5/2
4S1/2 mj = +1/2
mj = -1/2
3D5/2
729 nm
mj = -5/2
Memory qubit
π/2
FIG. 6. Ramsey experiment between zones. (a) Experimental sequence. The ion is initially cooled and prepared in Zone 1. A π/2 pulse using the integrated 729 nm light creates a superposition state in the optical qubit. The ion is then transported to Zone 2 in 200 μs where the second Ramsey pulse is applied using integrated light. Optional π-pulses are applied to map the optical qubit into the memory qubit. Finally, the ion is transported back to Zone 1 for detection. (b) Population on the |↓⟩ state-
 as a function of the phase of the second Ramsey pulse for the optical and memory qubit. For the memory qubit, we retrieve a Ramsey contrast of 0.989(5). (c) Energy levels showing the Zeeman structure of the 729 nm transition. The optical qubit is created using a ground state and a metastable state, while the memory qubit is created using the two Zeeman sublevels of the ground state. A π-pulse is used to map the population from the metastable state to the ground state. (d-e) Histogram showing the -
state infidelities when applying two consecutive π-pulses, where in one case (orange) the two pulses are applied in Zone 1 and in the second case (green) the second π-pulse is applied after transport in Zone 2. The mean infidelities are plotted in dashed lines. Panel (e) shows the infidelities of the final state when using BB1 composite π-pulses.
scan. In Appendix B we discuss the hybrid scheme in more depth and show its insensitivity to the laser phase.
The contrast of the observed Ramsey fringe is 0.989(5). Possible causes of infidelity are spin decoherence, area errors in the Ramsey pulses, and motional effects. An independent measurement of the spin coherence of the memory qubit in a single zone, probed directly with a radiofrequency drive, resulted in a Gaussian decay profile with a coherence time of ∼ 12 ms [40]. The expected contrast after the 200 μs of transport time would be 0.9997, much higher than observed, for which we conclude that sp-
in decoherence has a negligible effect.
We benchmark the quality of the π-pulses by applying two consecutive pulses in the optical qubit, which ideally would recover the |↓⟩ state perfectly. The histograms in Fig. 6(d) show the sampled probability distributions for measuring the ion in the state |↓⟩ for two different sequences: one where the ion stays in Zone 1 (orange), and one where the second pulse happens in Zone 2 after transport (green). We measure this probability by averaging the number of events where the ion was detected in th-
e |↓⟩ state over 500 shots. We repeat this procedure N = 200 times and find the mean fidelities F = 1
N
PN
i=1 P (|↓⟩)i to be 98.88(5) % when both pulses are applied in the same zone, and 98.76(3) % when the second pulse happens after
transport. We can improve these fidelities by using composite BB1 π-pulses (Fig. 6(e)) which are robust against pulse area errors [41, 42]. Here we measure the average fidelities to be 99.95(1) % and 99.44(3) % when the pulses are performed in a single zone and in different zones, respectively. The error bars in the fidelities are
computed as σp/√N with σp the standard deviation of P (|↓⟩) in the 200 repetitions. The improvement obtained using composite pulses suggests that Rabi frequency fluctuations are among the limiting factors for the original loss in fidelity. These fluctuations cannot be completely explained by taking into account the ion thermal state, as calculating the expected fidelity for our ion temperature, and taking into account also the radial modes, we would expect a fidelity of 99.44 %, still higher than -
what observed. Other sources of fluctuations, such as laser intensity noise, may be the main causes for the observed reduction in fidelity. The additional decrease in fidelity when transporting can be partially accounted for by the contrast loss induced from a coherent state with |α|2 = 8, which is expected to be < 10−3.

9
VI. PARALLEL COHERENT OPERATIONS IN TWO ZONES
We next demonstrate parallel control of the optical qubit |↓⟩ → |1⟩ of two 40Ca+ ions each sitting in a different zone of the trap, by driving simultaneous Rabi oscillations on the two qubits. An illustration of the pulse sequence is shown in Fig. 7(a). In this configuration, each ion is cooled and prepared in the state |↓⟩ by using an independent set of 397 nm free-space cooling beams, as well as an independent set of integrated 866 and 854 nm beams. We use 729 nm light pulsed by two independent -
single-pass fiber AOMs to control each ion separately, and tune the power of the optical beams to match the Rabi frequencies of both ions. The internal state of both ions is detected by collecting fluorescence onto a single PMT, and we distinguish the two by detecting them at different times. Results are shown in Fig. 7(b). From fits, we extract Rabi frequencies of 2π×123.2(4) kHz and 2π×124.1(7) kHz for ions in Zone 1 and 2 respectively.
The ability to control ions in multiple zones in parallel allows us to use simultaneous Rabi spectroscopy to monitor correlations between the qubit frequencies for the two zones. We use a 2 ms low-power 729 nm pulse which produces an approximate π pulse in each zone. We select the optical transition |↓⟩ → |3D5/2, mj = −1/2⟩, with ∆mj = 0. In our configuration, this transition can be driven in the intensity minimum of the standing wave, minimizing dipole AC Stark shifts [20]. We use Lorentzian fits-
 with central frequencies ωi with i ∈ {1, 2} the zone index, to extract the frequency offset of the transitions relative to a common value. The full-width half-maximum of the fitted Lorentzians is ∼ 2π × 300 Hz leading to statistical uncertainties on the frequency measurement of the order of ∼ 2π × 1 Hz. We record ωi for both ions over a total time of 3.7 h and display the change of the transition frequency in each zone relative to that observed in Zone 1 at time τ = 0 as ∆ωi = ωi−ω1(τ = 0). Data -
is shown in Fig. 7(c). For each ion, we register frequency drifts of up to 2π×592(6) Hz which might arise either from changes on the magnetic field of up to 1.06(1) mG, or drifts in the locking cavity of our laser. Decoupling these effects would require probing another transition in the 4S1/2 ↔ 3D5/2 manifold. We find an offset frequency between ω1 and ω2 of 2π×972(2) Hz, which can be caused by a differential magnetic field of 1.742(4) mG, corresponding to a magnetic field gradient of 4.98(1) G/m.-
 We obtain a correlation coefficient be
tween the ∆ω1 and ∆ω2 of R = c12/√c11c22 = 0.996, where c is the covariance matrix. These results are promising for the use of a spectator qubit to monitor and feedback on the magnetic field for other qubits within a multizone architecture [43].
VII. OPTICAL CROSSTALK BETWEEN TRAP ZONES
One issue with light addressing both zones is the presence of crosstalk: when an ion in one zone is addressed, the other should not be driven. Figure 8 (a) characterizes the optical crosstalk between zones by measuring the population in the |↓⟩ state for both ions while only applying 729 nm light to Zone 1. By performing sinusoidal fits in both datasets, we extract Rabi frequencies of 2π×196.3(3) kHz and 2π×0.28(9) kHz for ions in Zone 1 and 2, respectively, allowing us to bound the Rabi frequency-
 crosstalk in the different zones at 0.14(5) % in this measurement, or equivalently a power crosstalk in the order of 10−6, in agreement with previous measurements [14]. During this measurement, both ions are positioned at the center of each zone and in the same phase of their respective standing wave pattern, where they experience the maximum Rabi frequency.
To gain insights on the physical origin of the crosstalk, we extended the previous measurement to a broader spatial range. We trap and initialize an ion in Zone 1, send a pulse of 729 light in Zone 2, and measure the ion population in the initial state as a function of its position on the trap axis. The pulse is calibrated in frequency to resonantly drive Rabi oscillations when directly illuminating the ion, and has a duration of ∼ 2.5 ms. We neglect any Stark shifts, given the expected low intens-
ity of the crosstalk pulse. We scan the ion position over a range of ±12 μm above Zone 1, larger than the region illuminated by the integrated grating couplers. The results of the measurement are shown in Fig. 8(b), where the curve in the background illustrates the axial intensity profile of the standing wave. We see a periodicity in the signal, which doesn’t match the period of the integrated standing wave. Furthermore, we observe that crosstalk happens also far from the center of the trap zone, -
where no light is emitted from the couplers of the same zone. The inset in Fig. 8(b) shows Rabi oscillations when we locate the ion in the maximum crosstalk position, around the center of the zone. From this measurement we infer a Rabi frequency of ∼ 2π × 0.1 kHz, consistent with the previous measurement. However, the lowest crosstalk positions exhibits are consistent with suppression of at least an order of magnitude more. From this we conclude that direct optical coupling from one waveguide to a-
nother in the trap substrate is negligible, and that crosstalk arises likely from light scattered from outside the trap. We suspect that the crosstalk might be caused by multiple reflections of the light emitted from the other region of the trap. Further studies would be required to uncover the origin of this effect.

10
~3000 0-2000 1000
Cool State Prep.
Detection
Zone1
Zone2
Time
(μs)
Cool State Prep.
Detection
729
729
1000
(c)
τ=0
τ = 3.7 h
(a)
(b)
3.7 h
0h τ
FIG. 7. Simultaneous control of two ions in different trap zones. (a) Pulse sequence employed for these experiments. Using two sets of 397 nm, 866 nm and 854 nm beams we simultaneously cool and prepare the |↓⟩ state for both ions. Then integrated light at 729 nm is used to control the qubits, followed by two time-resolved detection pulses. (b) Simultaneous Rabi oscillations of ions in both zones, with balanced Rabi frequency. The trace for the ion in Zone 1 is vertically offset by 0.2 for better v-
isibility. (c) Correlation of simultaneous spectroscopy. The initial (τ = 0) and final (τ = 3.7 h) points are marked with arrows. The color of the points indicates the time when the measurement was performed, where increasing time is depicted with brighter colors. The top inset shows the spectroscopy data for one of the points. The bottom inset shows the time variation of the two qubit frequencies. For all sub-figures and insets, green and orange traces correspond to Zone 1 and 2, respectively.
VIII. PRECISE CONTROL OF ELECTRIC FIELDS FOR TWO-ION OPERATIONS
In multizone operations it is necessary to exert independent control over the electric fields in each trap zone for micromotion compensation. Additionally in our trap, due to the use of the standing wave, we require independent, sub-micrometer control of the position of the ion in each zone [20]. We achieve this by finding voltage sets which minimize the influence of the electrodes controlling one trap zone on the other, making the control independent. In our trap, each zone can be controlled by a-
 set of eight electrodes, three on each side of the trap axis dedicated to the zone, plus two along the axis affecting all zones. This offers enough degrees of freedom to create a harmonic potential in each zone, controlling the strength of the axial curvature, the position of the two minima, and the angle of the axes of the radial modes with respect to the trap plane. We implement multiple sets of voltages, each controlling independently one degree of freedom of the total potential [44]. One set,-
 whose potential profile and voltages are shown in Fig. 9(a), creates a positive curvature of 1 MHz strength in both zones. Two others create an axial electric field in one zone while at the same time using the electrodes of the other zone to null the unwanted fields due to the first — Fig. 9(b)
shows the set controlling Zone 2. The total multizone potential is generated by applying a linear combination of those voltage sets. We test the control scheme with a measurement of the Rabi frequency of each ion while scanning the applied electric field in Zone 2. For each field value, we perform Rabi oscillations on both ions and infer their displacement in the standing wave from the Rabi frequency. Results are shown in Fig. 9(c). We observe that using the optimized voltage set, we can independe-
ntly displace the ion in Zone 2 by a full period of its standing wave while having a constant Rabi frequency for the ion in Zone 1, suggesting a minimal disturbance of its position [20].
IX. LIGHT DELIVERY FOR MULTIPLE ZONES
Red and infrared light is delivered from a control laser system via fiber AOMs. Light for each of the repumpers is controlled by an independent fiber AOM which is split 50:50 using a fiber splitter and then sent to both zones simultaneously — thus for these colors individual addressing of repumping in our setup could be achieved by moving ions outside one of the addressed zones. For the qubit transitions at 729 nm, we gain flexibility from the possibility of driving transitions between the

11
FIG. 8. Characterization of optical crosstalk between trap zones. (a) Optical crosstalk, measured by performing Rabi oscillations on the ion in Zone 1 and performing statedetection in both ions (b) Population in the |↓⟩ state of an ion trapped in Zone 1, and driven with light injected in Zone 2. The blue curve in the background shows the simulated axial intensity profile of the light emitted by the output couplers in Zone 1. The inset shows the first Rabi oscillation of an ion located in the posit-
ion of maximum crosstalk.
various Zeeman sublevels of the ground and metastable levels. This is beneficial for hybrid ground-metastable schemes described in the previous sections, as well as for using multiple states as qudits [45, 46]. For this purpose, we implement a scheme allowing us to achieve high powers across the required range of frequencies. The setup is sketched in Fig. 10(a). We lock the qubit laser at 729 nm to an Ultra-Low Expansion (ULE) high-finesse cavity using a Pound–Drever–Hall (PDH) scheme. Light trans-
mitted through the cavity is used for the experiment, since this offers filtering of high-frequency noise. This locking scheme results in a laser linewidth below 10 Hz [40]. The transmitted light is first injected into a diode and the output is then passed through a continuously running “transition” fiber AOM which we use to select which transition is driven in the ion. This AOM has a finite bandwidth and does not produce full power over the relevant range of frequencies to address all Zeeman subl-
evels (50 MHz at 6 G). We mitigate this effect by using this AOM to seed a second pigtailed diode injection. By continuously running the transition AOM, we can ensure that the second injected diode stays locked and that the output power is constant over the desired frequency range over which the AOM is scanned. Light after the second
(a) (b)
(c)
Voltages Potential
FIG. 9. Independent control of the ion position in both zones. (a) Trap sketch illustrating the voltage set controlling the axial trapping frequency in the two zones, showing the voltage configuration on the electrodes and the associated axial potential. (b) Voltage set controlling the position of the ion in Zone 2. The electrodes of Zone 2 are loaded antisymmetrically to create an axial field, while at the same time the electrodes of Zone 1 are optimized to cancel the spurious field and curvature-
 created by the first ones. A similar voltage set, where the role of the zones is reversed, is used to control the ion position in Zone 1. (c) Rabi frequency measurements in the standing wave, used as a proxy for the ion position, performed in both zones while scanning the axial electric field in Zone 2, demonstrating independent control of the position of each ion. Dashed lines are guides to the eye.
injection is further amplified using a Tapered Amplifier (TA) before being split using a fiber splitter, after which each branch is controlled by its own fiber AOM, which is used to pulse the beam in the respective zone. This configuration allows us to input up to 50 mW into each trap zone. Considering the optical losses of about 4 dB at the input coupling and through the waveguide, and 3 dB of diffraction efficiency of the grating, we achieve ∼ 10 mW of output power at the ion [14].
We benchmark the maximum coupling rates that can be achieved in our trap by sending the full power output of the TA to Zone 1, passing through its respective fiber AOM. In this way we send up to 100 mW of power into the trap. With this configuration, we perform Rabi oscillations in the |↓⟩ → |3D5/2, mj = −5/2⟩ transition. The result is shown in Fig. 10(b) where we extract a carrier Rabi frequency of 2π×1.452(3) MHz. In order to achieve a high coupling rate simultaneously in multiple zones, we prop-
ose to extend the setup by splitting the light after the second injection diode and installing one TA and one control AOM per zone.

12
(a)
Main laser
PDH
ULE Cavity Diode
Injection
Diode Injection
Transition AOM
AOM Zone 1 AOM Zone 2
TA
(b)
FIG. 10. Scalable, high-power light delivery to multiple zones. (a) Simplified optical setup for the qubit laser. Light from the main laser is passed through an ULE cavity, and then further amplified through a first free-space diode injection. A first fiber AOM is used to select the qubit transition, and then light is further amplified with a second injection setup, this time using a pigtailed laser diode and an in-fiber circulator to keep the whole system fiberized. Light is then passed through a-
 tapered amplifier (TA) and then fibersplit into a fiber AOM for each zone before going into the trap waveguides. The white circles with arrows represent optical circulators. (b) Fast Rabi oscillations measured on the |↓⟩ → |3D5/2, mj = −5/2⟩ transition, directing all of the light after the TA into a single zone. The solid line is a fit to the data from where we infer a π-time of 344 ns. Pulses shorter 1.4 μs are not possible in the current version of our control system.
X. OUTLOOK
Our work demonstrates two key elements for realizing the QCCD architecture with integrated optics, multizone coherent operations as well as parallel independent control over multiple trapping sites. While we obtained a significant improvement using our heuristic model for compensating discrepancies between our electrode model and experiments, operation fidelities after transport are still limited by the residual motional excitation after transport. This could be further improved by having a dedica-
ted loading zone, away from the experimental zones, which in our experiments could be the third, not yet used trap zone [19]. At current transport speeds, reducing motional excitation after transport would also require an improvement of heating rates in integrated optics traps [14, 15], or constant re-cooling [6, 8]. Compensation of waveforms may become more critical with non-adiabatic
transport [47–49].
A next step for further scaling in our setup would be to integrate UV light, which will likely require including new waveguide materials in the trap stack [50, 51]. In new traps, challenges with exposed dielectric could be mitigated by incorporating conductive coatings on the light emission windows above the grating couplers, for instance using indium tin oxide [15, 52, 53]. Alternatively, the use of an ion species such as barium that requires higher wavelengths [54–56], or schemes for performing -
all control with longer wavelengths of light [57–59] could help to reduce charging as well as facilitate the integration of all wavelengths.
While the work here observed relative optical phase drifts between zones, we think that these originate in the fibers delivering light to the cryostat, as well as the fiber AOMs used for control. A large part of this could likely be alleviated by classical interferometric approaches, or by maximizing the commonality of the two light paths, for instance using integrated devices [60–63]. The high level of correlation of the measured qubit frequency drifts at different points in the trap array opens -
the path to using spectator ions trapped on the same chip as target qubits to perform continuous calibration and stabilization of either the magnetic field or the laser frequency, which can help in the implementation of more complex algorithms [43, 64–66].
When realized at a large scale, the demonstrated integrated multizone architecture can be beneficial to a range of different applications, both in QCCD quantum computing and for parallel arrays of clocks in metrology.
ACKNOWLEDGMENTS
We acknowledge funding from the Swiss National Science Foundation under Grant No. 200020 207334, the National Centre of Competence in Research for Quantum Science and Technology (QSIT), the EU Quantum Flagship H2020-FETFLAG-2018-03 under Grant Agreement No. 820495 AQTION, and the Intelligence Advanced Research Projects Activity (IARPA), via the U.S. Army Research Office through Grant Number W911NF-16-1-0070 under the LogiQ program. KKM acknowledges support from an ETH Post-doctoral fellowship.
We acknowledge Fabian Schmid and Shreyans Jain for their useful review of the manuscript.
The experiments were designed, performed, and analyzed by CM, ARV, YM, and MMu. CM and YM developed the software for waveform optimization and analysis. The experiments were performed in a trap designed by KKM, fabricated by LioniX International, and operated in an apparatus with significant contributions from MMa, CZ, and KKM. The paper was written by CM and ARV with input from all authors. The work was supervised by DK and JPH.

13
15
10
5
0
5
10
z ( m)
Void 6000
Au (0.3) SiO2 3 Pt (0.17) SiO2 6.4
Si 500
(a)
100 50 0 50 100 x ( m)
40
20
0
20
40
y ( m)
(b)
0.00
0.25
0.50
0.75
1.00
FIG. 11. FEM simulation of trap-induced charging. Electric potential in the trap volume induced by a potential of 1 V on the central electrode. (a) Slice along a vertical plane passing through a coupler cutout at y = 10 μm, the coupler cut plane, and (b) slice along a horizontal plane at z = 0, the top surface of the trap. The labels indicate the material of the corresponding layer and the number reports the layer thickness in microns. The thicknesses in parenthesis have been neglected in the simu-
lation. The colorbar on the right side has units of volts, and quantifies the strength of the simulated potential.
Appendix A: COMSOL FEM model
In the analytic trap model we assume, under the gapless approximation, that the area of the coupler windows is grounded while the other electrodes are set at a controlled voltage. This neglects the response of the underneath dielectric, which develops a surface charge induced on the exposed surface by the field generated by the electrodes, partially accounted for by our heuristic model of coupler voltages. To verify the extent of this effect, we numerically solve the Laplace equation in 3D with th-
e finite element method (FEM) to calculate the electric potential in the volume of the trap chip, considering the full material stack, and compare the results at the trap surface with the approximate analytic model. The simulation is performed using COMSOL Multiphysics®[67].
The model includes all the chip layers, illustrated in Fig. 11(a). From top to bottom, the stack includes the electrodes (gold, 300 nm), a first dielectric layer (silicon oxide, 3 μm), the ground plane (platinum, 170 nm), another thicker layer of dielectric (silicon oxide, 6.4 μm) embedding the integrated waveguides, and finally a silicon substrate (500 μm). Above the trap there is a 6 mm vacuum gap closed by a gold upper boundary, representing
a fine gold mesh installed in the experiment to shield the ion trap from the imaging objective present in-vacuum at close distance. To ease meshing of the 3D volumes while still retaining good simulation accuracy, we neglect the thickness of the electrode and ground plane layers, which are much smaller than the others, and approximate them as planar surfaces. We fully include however their 2D geometry, in particular, we include openings in the ground plane present above the grating outcouplers, in-
 correspondence with the windows in the electrode layer. As a boundary condition, we set to ground both the gold mesh and the ground plane. We then impose a potential of 1 V on one of the central split electrodes, which surrounds the coupler windows from one side, and ground all the others. Figure 11 shows slices of the 3D potential along two cut planes, a vertical plane in (a) parallel to xz and located at y = 10 μm, passing through the coupler windows, and the xy plane in (b) at z = 0 showing th-
e top surface of the trap. The simulation shows how the potential imposed on the electrode penetrates into the dielectric: a 1 V potential on the electrode produces an average potential of 0.3 V, mostly localized in the dielectric region surrounded by metal. This happens within a length scale that is determined by the distance to the ground plane, the closest grounded conductor. The ground plane effectively contributes to lowering the potential measured in the center of the coupler windows, ground-
ing them to a certain extent. We highlight that the effect is present even considering the holes in the ground plane, despite them being placed directly underneath the windows. Due to the presence of the holes, we observe also a potential induced in the second dielectric layer, which justifies the inclusion of the full trap stack in the model. We validate the FEM model with additional simulations. Setting to ground all the coupler windows and the gap between the electrodes, we reproduce the result-
s of the analytic model in the half-space z > 0. Finally, with 2D FEM simulations solving for the potential only along the vertical cut plane, but where we include the thickness of the electrodes and ground plane layers, we verify that neglecting those layers does not impact sensibly the results of the 3D model. We use this result to estimate the contribution of the dielectric to the total potential on the window. In usual trap operation, both central electrodes are loaded with ∼ 2 V, which result-
s in −0.6 V distributed over the whole window. This is roughly a 30 % of −1.6 V resulting from our calibration, which represents the totality of the surface charge on the window regardless of its origin.
Appendix B: Laser-phase independence of the hybrid protocol
We show how the sequence of operations implemented in our optical/memory qubit hybrid scheme results in effective operations on the memory qubit which do not

14
depend on the phase of the laser field used to manipulate the optical qubit.
The protocol combines rotations of pulse area θ and phase φ between different pairs of states chosen among B = {|↓⟩ , |↑⟩ , |1⟩}. We explicitly write the matrix representation of these operations in the basis B. A generic rotation on the optical qubit {|↓⟩ , |1⟩} is represented as
Uopt(θ, φ) =


cos θ/2 0 ie−iφ sin θ/2 01 0 ieiφ sin θ/2 0 cos θ/2

 . (B1)
Similarly, the π rotation mapping between |↑⟩ and |1⟩ is represented as
Umap(φ) =


10 0 0 0 ie−iφ 0 ieiφ 0

 . (B2)
To complete the Ramsey sequence, the time spent transporting the ion is modeled as a free evolution of the three
level system, which reads
Uwait(τ ) =


10 0
0 eiωmτ 0
0 0 eiωoτ

 , (B3)
where ħωm is the energy gap in the memory qubit, and ħωo is the one in the optical qubit. Starting from the initial state |↓⟩ = (1, 0, 0)T , the Ramsey sequence implemented directly on the optical qubit results in the observable
Po
↓ = | ⟨↓| Uopt(π/2, φL2 + φ)Uwait(τ )Uopt(π/2, φL1) |↓⟩ |2
= 1 − cos (ωoτ − φ + φL1 − φL2)
2,
(B4) where the laser phases in the two control pulses φL1 and φL2 can have randomly different values, and the second control pulse has a deterministic phase offset φ implemented as a phase shift on the radiofrequency signal driving the acousto-optical modulator used to pulse the beam. The phase of the Ramsey signal is scrambled by the random value of φL1 − φL2, making it impossible to retrieve the contrast. In the second case, mapping to the memory qubit before and after transport, the sequence re-
ads
Pm
↓ = | ⟨↓| Uopt(π/2, φL2 + φ)Umap(φL2)Uwait(τ )Umap(φL1)Uopt(π/2, φL1) |↓⟩ |2 = 1 + cos (ωmτ − φ)
2 . (B5)
As long as the fluctuations on the optical phase are slow enough such that the control and the mapping pulses share the same value of φL, its effect is canceled out in both arms of the Ramsey sequence by the use of this protocol. The Ramsey contrast depends only on the deterministically added phase φ and can be retrieved with usual analysis methods.
Appendix C: Measurement of transport motional excitation
We measure the motional excitation during transport via carrier Rabi oscillations. For an ion in a motional state characterized by a phonon distribution P (n), the Rabi oscillation signal has contributions from all populated Fock states and it reads as
P↓ =
∞
X
n=0
P (n) 1 + e−γt cos(Ωnt)
2 , (C1)
where Ωn = Ω(1 − η2 (n + 1/2)) is the Rabi frequency in the Fock state n, valid in the Lamb–Dicke regime, Ω is the bare carrier Rabi frequency, η is the Lamb–Dicke parameter, and γ models heuristically any loss of contrast
which is not of motional origin, such as laser frequency noise or spin decoherence. Assuming different motional excitation models, we obtain different Rabi oscillations profiles in Eq. (C1), which we use to fit the experimental data and extract the motional excitation parameters. Assuming a coherent motional state characterized by a displacement α, its phonon distribution is a Poissonian
Pcoh(n) = e−|α|2 |α|2n
n! . (C2)
Alternatively, to also include incoherent excitation, we use the phonon distribution of a displaced thermal state, resulting from a thermal average of displaced Fock states
Pth,coh(n) =
∞
X
k=0
n ̄k
( ̄n + 1)k+1 | ⟨n|α, k⟩ |2,
| ⟨n|α, k⟩ |2 = e−|α|2 |α|2(n+k)n!k!
k
X
l=0
(−1)l|α|−2l l!(n − l)!(k − l)!
2
,
(C3) and characterized by the displacement α and the average thermal excitation  ̄n. Even when the sums in Eq. (C3) are appropriately truncated, it is computationally expensive to directly evaluate the expression even for moderate values of n. Therefore, we calculate the distribution

15
Pth,coh with a numerical thermalization method as described in [68]. For the measurements reported in Fig. 5, we begin by separately fitting the first data point of the series, where the ion had not been moved yet, with the model described by Eq. (C1) and Eq. (C2). There we set α = 0 to extract the base values of the parameters Ω and γ. For the rest of the series, we measure the evolution of the coherent excitation by fixing those parameters to the value measured on the first point and fitting α o-
n the remaining data.
Appendix D: Transport waveforms and hardware
We control our DC electrodes using one Sinara Fastino arbitrary waveform generator (AWG) with 32 channels, with an output of ±10 V, a sampling time of 390 ns and a maximum output slew rate of 20 V/μs. Its output is further amplified by a home-built, low-noise voltage am
plifier with a voltage gain of 2.5 and a lower maximum slew rate of 1 V/μs. Finally, we filter the voltages to remove high-frequency noise using two sets of first-order low-pass filters, one at the output of the amplifier and one directly mounted in the cryostat on the trap carrier PCB, with a total cutoff frequency of 30 kHz. The filters affect the AWG output, effectively limiting the maximum transport speed. Fixing the transport distance to 375 μm (the space between Zone 1 and Zone 2) and the tr-
ansport trajectory, filter effects begin to be relevant for waveforms whose total time approaches 100 μs or less, with a minimum time of ∼25 μs set by the filter time delay. Waveforms approaching this limit suffer from strong distortion of the voltages, with consequent deformation of the trapping potential which doesn’t follow the required trajectory, potentially resulting in strong ion heating. To avoid this, we implement in-software filter precompensation and use it for the generation of wavefor-
ms of duration < 100 μs.
[1] H. Ha ̈ffner, C. F. Roos, and R. Blatt, Quantum computing with trapped ions, Tech. Rep. (2008) arXiv: 0809.4368v1. [2] C. D. Bruzewicz, J. Chiaverini, R. McConnell, and J. M. Sage, Trapped-ion quantum computing: Progress and challenges, Applied Physics Reviews 6, 021314 (2019), arXiv: 1904.04178 Publisher: AIP Publishing LLC AIP Publishing. [3] A. M. Kaufman and K.-K. Ni, Quantum science with optical tweezer arrays of ultracold atoms and molecules, Nature Physics 17, 1324 (2021), number: 12 Pu-
blisher: Nature Publishing Group. [4] A. D. Ludlow, M. M. Boyd, J. Ye, E. Peik, and P. O. Schmidt, Optical atomic clocks, Rev. Mod. Phys. 87, 637 (2015). [5] D. Kielpinski, C. Monroe, and D. J. Wineland, Architecture for a large-scale ion-trap quantum computer, Nature 417, 709 (2002), publisher: Nature Publishing Group. [6] J. P. Home, D. Hanneke, J. D. Jost, J. M. Amini, D. Leibfried, and D. J. Wineland, Complete methods set for scalable ion trap quantum information processing, Science 325, 1227 -
(2009), arXiv: 0907.1865 Publisher: American Association for the Advancement of Science. [7] V. Kaushal, B. Lekitsch, A. Stahl, J. Hilder, D. Pijn, C. Schmiegelow, A. Bermudez, M. M ̈uller, F. SchmidtKaler, and U. Poschinger, Shuttling-based trapped-ion quantum information processing, AVS Quantum Science 2, 10.1116/1.5126186 (2020). [8] J. M. Pino, J. M. Dreiling, C. Figgatt, J. P. Gaebler, S. A. Moses, M. S. Allman, C. H. Baldwin, M. Foss-Feig, D. Hayes, K. Mayer, C. Ryan-Anderson, and B. Neyenhu-
is, Demonstration of the trapped-ion quantum CCD computer architecture, Nature 2021 592:7853 592, 209 (2021), arXiv: 2003.01293 Publisher: Nature Publishing Group. [9] J. Hilder, D. Pijn, O. Onishchenko, A. Stahl, M. Orth, B. Lekitsch, A. Rodriguez-Blanco, M. M ̈uller, F. Schmidt-Kaler, and U. Poschinger, Fault-Tolerant Parity Readout on a Shuttling-Based Trapped-Ion Quan
tum Computer, Physical Review X 12, 011032 (2022), publisher: American Physical Society. [10] S. A. Moses, C. H. Baldwin, M. S. Allman, R. Ancona, L. Ascarrunz, C. Barnes, J. Bartolotta, B. Bjork, P. Blanchard, M. Bohn, J. G. Bohnet, N. C. Brown, N. Q. Burdick, W. C. Burton, S. L. Campbell, J. P. C. I. au2, C. Carron, J. Chambers, J. W. Chan, Y. H. Chen, A. Chernoguzov, E. Chertkov, J. Colina, J. P. Curtis, R. Daniel, M. DeCross, D. Deen, C. Delaney, J. M. Dreiling, C. T. Ertsgaard, J. Esposito, B-
. Estey, M. Fabrikant, C. Figgatt, C. Foltz, M. Foss-Feig, D. Francois, J. P. Gaebler, T. M. Gatterman, C. N. Gilbreth, J. Giles, E. Glynn, A. Hall, A. M. Hankin, A. Hansen, D. Hayes, B. Higashi, I. M. Hoffman, B. Horning, J. J. Hout, R. Jacobs, J. Johansen, L. Jones, J. Karcz, T. Klein, P. Lauria, P. Lee, D. Liefer, C. Lytle, S. T. Lu, D. Lucchetti, A. Malm, M. Matheny, B. Mathewson, K. Mayer, D. B. Miller, M. Mills, B. Neyenhuis, L. Nugent, S. Olson, J. Parks, G. N. Price, Z. Price, M. Pugh, A. -
Ransford, A. P. Reed, C. Roman, M. Rowe, C. Ryan-Anderson, S. Sanders, J. Sedlacek, P. Shevchuk, P. Siegfried, T. Skripka, B. Spaun, R. T. Sprenkle, R. P. Stutz, M. Swallows, R. I. Tobey, A. Tran, T. Tran, E. Vogt, C. Volin, J. Walker, A. M. Zolot, and J. M. Pino, A race track trapped-ion quantum processor (2023), arXiv:2305.03828 [quant-ph]. [11] J. Beugnon, C. Tuchendler, H. Marion, A. Gae ̈tan, Y. Miroshnychenko, Y. R. P. Sortais, A. M. Lance, M. P. A. Jones, G. Messin, A. Browaeys, and P. Gran-
gier, Two-dimensional transport and transfer of a single atomic qubit in optical tweezers, Nature Physics 3, 696 (2007), number: 10 Publisher: Nature Publishing Group. [12] D. Bluvstein, H. Levine, G. Semeghini, T. T. Wang, S. Ebadi, M. Kalinowski, A. Keesling, N. Maskara, H. Pichler, M. Greiner, V. Vuleti ́c, and M. D. Lukin, A quantum processor based on coherent transport of entangled atom arrays, Nature 604, 451 (2022), number: 7906 Publisher: Nature Publishing Group. [13] K. K. Mehta, C. D. Br-
uzewicz, R. McConnell, R. J.

16
Ram, J. M. Sage, and J. Chiaverini, Integrated optical addressing of an ion qubit, Nature Nanotechnology 11, 1066 (2016). [14] K. K. Mehta, C. Zhang, M. Malinowski, T.-L. Nguyen, M. Stadler, and J. P. Home, Integrated optical multi-ion quantum logic, Nature 586, 533 (2020). [15] R. J. Niffenegger, J. Stuart, C. Sorace-Agaskar, D. Kharas, S. Bramhavar, C. D. Bruzewicz, W. Loh, R. T. Maxson, R. McConnell, D. Reens, G. N. West, J. M. Sage, and J. Chiaverini, Integrated multi-wavelength control of an -
ion qubit, Nature 586, 538 (2020). [16] M. Ivory, W. J. Setzer, N. Karl, H. McGuinness, C. DeRose, M. Blain, D. Stick, M. Gehl, and L. P. Parazzoli, Integrated optical addressing of a trapped ytterbium ion, Phys. Rev. X 11, 041033 (2021). [17] M. Malinowski, C. Zhang, V. Negnevitsky, I. Rojkov, F. Reiter, T.-L. Nguyen, M. Stadler, D. Kienzler, K. K. Mehta, and J. P. Home, Generation of a Maximally Entangled State Using Collective Optical Pumping, Phys. Rev. Lett. 128, 080503 (2022). [18] K. Mehta,-
 A. R. Vasquez, C. Mordini, G. Beck, M. Malinowski, M. Stadler, C. Zhang, D. Kienzler, and J. Home, Ion trap quantum computing using integrated photonics, in Integrated Optics: Devices, Materials, and Technologies XXVII , Vol. 12424, edited by S. M. Garc ́ıa-Blanco and P. Cheben, International Society for Optics and Photonics (SPIE, 2023) p. 124240I. [19] J. Kwon, W. J. Setzer, M. Gehl, N. Karl, J. V. D. Wall, R. Law, D. Stick, and H. J. McGuinness, Multisite integrated optical addressing of trapp-
ed ions (2023), arXiv:2308.14918 [quant-ph]. [20] A. R. Vasquez, C. Mordini, C. Verni`ere, M. Stadler, M. Malinowski, C. Zhang, D. Kienzler, K. K. Mehta, and J. P. Home, Control of an atomic quadrupole transition in a phase-stable standing wave, Phys. Rev. Lett. 130, 133201 (2023). [21] K. Wo ̈rhoff, R. G. Heideman, A. Leinse, and M. Hoekman, Triplex: a versatile dielectric photonic platform, Advanced Optical Technologies 4, 189 (2015). [22] R. Lechner, C. Maier, C. Hempel, P. Jurcevic, B. P. Lany-
on, T. Monz, M. Brownnutt, R. Blatt, and C. F. Roos, Electromagnetically-induced-transparency ground-state cooling of long ion strings, 93, 053401. [23] M. G. House, Analytic model for electrostatic fields in surface-electrode ion traps, Phys. Rev. A 78, 033402 (2008). [24] R. Schmied, SurfacePattern. [25] C. Mordini, F. Lancellotti, V. Negnevitsky, M. Marinelli, R. Oswald, and T. Saegesser, pytrans (2023), https:// doi.org/10.5281/zenodo.10204606.
[26] V. Negnevitsky, Feedback-stabilised quantum states in a mixed-species ion system, Ph.D. thesis (2018).
[27] M. Brownnutt, M. Kumph, P. Rabl, and R. Blatt, Iontrap measurements of electric-field noise near surfaces, Rev. Mod. Phys. 87, 1419 (2015). [28] F. Lancellotti, S. Welte, M. Simoni, C. Mordini, T. Behrle, B. de Neeve, M. Marinelli, V. Negnevitsky, and J. P. Home, Low-excitation transport and separation of high-mass-ratio mixed-species ion chains, Phys. Rev. Res. 6, L032059 (2024). [29] R. Schmied, Electrostatics of gapped and finite surface electrodes, New Journal of Physics 12, 023038 (2010)-
. [30] M. Harlander, M. Brownnutt, W. H ̈ansel, and R. Blatt, Trapped-ion probing of light-induced charging effects on
dielectrics, New Journal of Physics 12, 093035 (2010). [31] W. Lee, D. Chung, H. Jeon, B. Cho, K. Choi, S. Yoo, C. Jung, J. Jeong, C. Kim, D.-I. D. Cho, and T. Kim, Photo-induced charge carrier dynamics in a semiconductor-based ion trap investigated via motionsensitive qubit transitions (2023), arXiv:2312.00059 [quant-ph]. [32] C. R. Clark, C. D. Herold, J. T. Merrill, H. N. Tinkey, W. Rellergert, R. Clark, R. Brown, W. D. Robertson, C. Volin, K. Maller, C. Shappert, B. J. McMahon, B. C. Sawyer, a-
nd K. R. Brown, Characterization of fast ion transport via position-dependent optical deshelving, Phys. Rev. A 107, 043119 (2023). [33] L. E. de Clercq, R. Oswald, C. Fl ̈uhmann, B. Keitch, D. Kienzler, H.-Y. Lo, M. Marinelli, D. Nadlinger, V. Negnevitsky, and J. P. Home, Estimation of a general time-dependent Hamiltonian for a single qubit, Nature Communications 7, 11218 (2016), number: 1 Publisher: Nature Publishing Group. [34] L. E. de Clercq, H.-Y. Lo, M. Marinelli, D. Nadlinger, R. Oswald, V.-
 Negnevitsky, D. Kienzler, B. Keitch, and J. P. Home, Parallel transport quantum logic gates with trapped ions, Phys. Rev. Lett. 116, 080502 (2016). [35] H. N. Tinkey, C. R. Clark, B. C. Sawyer, and K. R. Brown, Transport-enabled entangling gate for trapped ions, Phys. Rev. Lett. 128, 050502 (2022). [36] J. Flannery, R. Matt, L. Huber, R. Oswald, K. Wang, and J. Home, Optical crosstalk mitigation for individual addressing in a cryogenic ion trap, in 2022 IEEE International Conference on Quantum Co-
mputing and Engineering (QCE) (2022) pp. 816–817. [37] L.-S. Ma, P. Jungner, J. Ye, and J. L. Hall, Delivering the same optical frequency at two places: accurate cancellation of phase noise introduced by an optical fiber or other time-varying path, Opt. Lett. 19, 1777 (1994). [38] S. Noe, D. Husmann, N. Mu ̈ller, J. Morel, and A. Fichtner, Long-range fiber-optic earthquake sensing by active phase noise cancellation, Scientific Reports 13, 13983 (2023).
[39] C. Zhang, Scalable technologies for surface-electrode ion traps, Ph.D. thesis, ETH Zurich (2022).
[40] M. Malinowski, Unitary and Dissipative Trapped-Ion Entanglement Using Integrated Optics, Ph.D. thesis (2021). [41] S. Wimperis, Broadband, Narrowband, and Passband Composite Pulses for Use in Advanced NMR Experiments, Journal of Magnetic Resonance, Series A 109, 221 (1994). [42] E. Mount, C. Kabytayev, S. Crain, R. Harper, S.-Y. Baek, G. Vrijsen, S. T. Flammia, K. R. Brown, P. Maunz, and J. Kim, Error compensation of single-qubit gates in a surface-electrode ion trap using composite pulses, P-
hysical Review A 92, 060301 (2015), publisher: American Physical Society. [43] S. Majumder, L. Andreta de Castro, and K. R. Brown, Real-time calibration with spectator qubits, npj Quantum Information 6, 1 (2020), number: 1 Publisher: Nature Publishing Group. [44] D. T. C. Allcock, J. A. Sherman, D. N. Stacey, A. H. Burrell, M. J. Curtis, G. Imreh, N. M. Linke, D. J. Szwer, S. C. Webster, A. M. Steane, and D. M. Lucas, Implementation of a symmetric surface-electrode ion trap with field compensation-
 using a modulated raman effect, New Journal of Physics 12, 053026 (2010). [45] M. Ringbauer, M. Meth, L. Postler, R. Stricker, R. Blatt,

17
P. Schindler, and T. Monz, A universal qudit quantum processor with trapped ions, Nature Physics 18, 1053 (2022), number: 9 Publisher: Nature Publishing Group. [46] P. Hrmo, B. Wilhelm, L. Gerster, M. W. van Mourik, M. Huber, R. Blatt, P. Schindler, T. Monz, and M. Ringbauer, Native qudit entanglement in a trapped ion quantum processor, Nature Communications 14, 2242 (2023), number: 1 Publisher: Nature Publishing Group. [47] R. Bowler, J. Gaebler, Y. Lin, T. R. Tan, D. Hanneke, J. D. Jost, J. P. H-
ome, D. Leibfried, and D. J. Wineland, Coherent diabatic ion transport and separation in a multizone trap array, Physical Review Letters 109, 080502 (2012), arXiv: 1206.0780 Publisher: American Physical Society. [48] A. Walther, F. Ziesel, T. Ruster, S. T. Dawkins, K. Ott, M. Hettrich, K. Singer, F. Schmidt-Kaler, and U. Poschinger, Controlling fast transport of cold trapped ions, Physical Review Letters 109, 080501 (2012), arXiv: 1206.0364 Publisher: American Physical Society. [49] J. Alonso, F. -
M. Leupold, Z. U. Sole`r, M. Fadel, M. Marinelli, B. C. Keitch, V. Negnevitsky, and J. P. Home, Generation of large coherent states by bang–bang control of a trapped-ion oscillator, Nature Communications 7, 11243 (2016). [50] G. N. West, W. Loh, D. Kharas, C. Sorace-Agaskar, K. K. Mehta, J. Sage, J. Chiaverini, and R. J. Ram, Low-loss integrated photonics for the blue and ultraviolet regime, APL Photonics 4, 026101 (2019). [51] G. J. Beck, J. P. Home, and K. K. Mehta, Grating design methodology fo-
r tailored free-space beam-forming (2023), arXiv:2306.09220 [physics.optics]. [52] A. M. Eltony, S. X. Wang, G. M. Akselrod, P. F. Herskind, and I. L. Chuang, Transparent ion trap with integrated photodetector, Applied Physics Letters 102, 10.1063/1.4790843 (2013). [53] K. R. Brown, J. Chiaverini, J. M. Sage, and H. Ha ̈ffner, Materials challenges for trapped-ion quantum computers, Nature Reviews Materials 6, 892–905 (2021). [54] M. R. Dietrich, A. Avril, R. Bowler, N. Kurz, J. S. Salacka, G. Shu,-
 and B. B. Blinov, Barium ions for quantum computation (2009), arXiv:0905.2701 [physics.atomph]. [55] D. Yum, D. D. Munshi, T. Dutta, and M. Mukherjee, Optical barium ion qubit, J. Opt. Soc. Am. B 34, 1632 (2017). [56] P. J. Low, B. M. White, A. A. Cox, M. L. Day, and C. Senko, Practical trapped-ion protocols for universal qudit-based quantum computing, Phys. Rev. Res. 2, 033128 (2020). [57] R. J. Hendricks, J. L. Sørensen, C. Champenois, M. Knoop, and M. Drewsen, Doppler cooling of calcium ions u-
sing a dipole-forbidden transition, Physical Review A 77, 021401 (2008), publisher: American Physical Society. [58] F. Lindenfelser, M. Marinelli, V. Negnevitsky, S. Ragg, and J. P. Home, Cooling atomic ions with visible and infra-red light, New Journal of Physics 19, 063041 (2017), publisher: IOP Publishing.
[59] J. Zhang, Y. Xie, P.-f. Liu, B.-q. Ou, W. Wu, and P.-x. Chen, Realizing three-step photoionization of calcium by two lasers, Applied Physics B 123, 45 (2017). [60] G. Moody, V. J. Sorger, D. J. Blumenthal, P. W. Juodawlkis, W. Loh, C. Sorace-Agaskar, A. E. Jones, K. C. Balram, J. C. F. Matthews, A. Laing, M. Davanco, L. Chang, J. E. Bowers, N. Quack, C. Galland, I. Aharonovich, M. A. Wolff, C. Schuck, N. Sinclair, M. Loncˇar, T. Komljenovic, D. Weld, S. Mookherjea, S. Buckley, M. Radulaski, S-
. Reitzenstein, B. Pingault, B. Machielse, D. Mukhopadhyay, A. Akimov, A. Zheltikov, G. S. Agarwal, K. Srinivasan, J. Lu, H. X. Tang, W. Jiang, T. P. McKenna, A. H. Safavi-Naeini, S. Steinhauer, A. W. Elshaari, V. Zwiller, P. S. Davids, N. Martinez, M. Gehl, J. Chiaverini, K. K. Mehta, J. Romero, N. B. Lingaraju, A. M. Weiner, D. Peace, R. Cernansky, M. Lobino, E. Diamanti, L. T. Vidarte, and R. M. Camacho, 2022 Roadmap on integrated quantum photonics, Journal of Physics: Photonics 4, 012501 (2022-
), publisher: IOP Publishing. [61] D. Reens, M. Collins, J. Ciampi, D. Kharas, B. F. Aull, K. Donlon, C. D. Bruzewicz, B. Felton, J. Stuart, R. J. Niffenegger, P. Rich, D. Braje, K. K. Ryu, J. Chiaverini, and R. McConnell, High-fidelity ion state detection using trap-integrated avalanche photodiodes, Phys. Rev. Lett. 129, 100502 (2022). [62] F. W. Knollmann, E. Clements, P. T. Callahan, M. Gehl, J. D. Hunker, T. Mahony, R. McConnell, R. Swint, C. Sorace-Agaskar, I. L. Chuang, J. Chiaverini, and D.-
 Stick, Integrated photonic structures for photon-mediated entanglement of trapped ions (2024), arXiv:2401.06850 [quant-ph]. [63] M. Malinowski, D. Allcock, and C. Ballance, How to wire a 1000-qubit trapped-ion quantum computer, PRX Quantum 4, 040313 (2023). [64] D. B. Hume and D. R. Leibrandt, Probing beyond the laser coherence time in optical clock comparisons, Physical Review A 93, 032138 (2016), publisher: American Physical Society. [65] J. Borregaard and A. S. Sørensen, Efficient Atomic Clock-
s Operated with Several Atomic Ensembles, Physical Review Letters 111, 090802 (2013), publisher: American Physical Society. [66] M. E. Kim, W. F. McGrew, N. V. Nardelli, E. R. Clements, Y. S. Hassan, X. Zhang, J. L. Valencia, H. Leopardi, D. B. Hume, T. M. Fortier, A. D. Ludlow, and D. R. Leibrandt, Improved interspecies optical clock comparisons through differential spectroscopy, Nature Physics 19, 25 (2023). [67] COMSOL Multiphysics®, v 6.2. COMSOL AB, Stocholm, Sweden. [68] T. Ruster, C. Warsch-
burger, H. Kaufmann, C. T. Schmiegelow, A. Walther, M. Hettrich, A. Pfister, V. Kaushal, F. Schmidt-Kaler, and U. G. Poschinger, Experimental realization of fast ion separation in segmented paul traps, Phys. Rev. A 90, 033410 (2014).

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:42.694Z
- **Text Length:** 81660 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 17 of 17
