# PDF Document: Saxena et al. - 2023 - Realizing tight-binding Hamiltonians using site-controlled coupled cavity arrays.pdf

**File Path:** Saxena et al. - 2023 - Realizing tight-binding Hamiltonians using site-controlled coupled cavity arrays.pdf

**Processed Date:** 2026-02-10T18:15:00.158Z

**File Size:** 3119.48 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 336

**Title:** Realizing tight-binding Hamiltonians using site-controlled coupled cavity arrays

**Collection:** TEST

---

## Extracted Text Content

Article https://doi.org/10.1038/s41467-023-41034-x
Realizing tight-binding Hamiltonians using site-controlled coupled cavity arrays
Abhi Saxena 1 , Arnab Manna2, Rahul Trivedi1 & Arka Majumdar 1,2
Analog quantum simulators rely on programmable and scalable quantum devices to emulate Hamiltonians describing various physical phenomenon. Photonic coupled cavity arrays are a promising alternative platform for realizing such simulators, due to their potential for scalability, small size, and high-temperature operability. However, programmability and nonlinearity in photonic cavities remain outstanding challenges. Here, using a silicon photonic coupled cavity array made up of 8 high quality facto-
r (Q up to ∼ 7:1 × 104) resonators and equipped with specially designed thermo-optic island heaters for independent control of cavities, we demonstrate a programmable photonic cavity array in the telecom regime, implementing tight-binding Hamiltonians with access to the full eigenenergy spectrum. We report a ∼ 50% reduction in the thermal crosstalk between neighboring sites of the cavity array compared to traditional heaters, and then present a control scheme to program the cavity array to a given-
 tight-binding Hamiltonian. The ability to independently program high-Q photonic cavities, along with the compatibility of silicon photonics to high volume manufacturing opens new opportunities for scalable quantum simulation using telecom regime infrared photons.
Achieving analog quantum simulation necessitates the realization of programmable quantum devices1. Due to their inherent drivendissipative nature, photonic systems are a promising platform for non-equilibrium quantum simulation2. An archetypal photonic quantum simulator consists of an array of programmable non-linear nodes with access to the entire quantized eigenenergy spectra of the Hamiltonians being simulated. While there have been numerous works on analog quantum simulation with microwave pho-
tons3–7, optical photons with their extremely weak interaction with the environment, can provide several additional advantages. The higher energy of optical photons allows for the preservation of quantum states even at room temperature, enabling operability at much higher temperatures8, which significantly simplifies the experiments and lowers the resources needed to scale the simulator. Additionally, availability of single photon detectors in the optical domain allows direct measurement of multip-
article correlations9,10 which are a key set of measurements for characterizing the quantum-ness of realized states. Building on recent advancements in nanofabrication, quantum
optical systems have shifted from bulky tabletop systems prone to misalignments to fully integrated on chip photonic circuits. These large scale photonic integrated circuits owing to their small size and high speed of operation present opportunities for unprecedented scalability to practical quantum advantage11. One solution to engineer such quantum systems in optics is via photonic coupled cavity arrays (CCA)12 where coupling between cavities provides a potential map for photons to move around, a-
nd strong spatial confinement of light for long durations allows access to onsite non-linearity via coupling with various excitonic materials. For photonic CCAs to be used as quantum simulators, four broad requirements need to be satisfied, namely, (i) scalability: there must exist pathways to scale to a large number of sites; (ii) measurability: there is a need for protocols to perform Hamiltonian tomography with restricted access and have CCAs with addressability to all the eigenstates of the sy-
stem; (iii) controllability: control over all the terms describing the Hamiltonian is required; and finally (iv) optical nonlinearity: need to realize photon-photon interaction to simulate many
Received: 20 January 2023
Accepted: 18 August 2023
Check for updates
1Department of Electrical & Computer Engineering, University of Washington, Seattle, WA 98195, USA. 2Department of Physics, University of Washington, Seattle, WA 98195, USA. e-mail: abhi15@uw.edu; arka@uw.edu
Nature Communications | (2023)14:5260 1
1234567890():,;
1234567890():,;

 body Hamiltonians. The last demand as a precondition, necessitates using high-quality factor (Q) cavities with small mode volumes as constituents of the CCA. Such high-Q cavities are also necessary to probe the entire quantized eigenenergy spectra. Though several experiments showing various physical phenomena using optical CCAs have been previously reported13–15, none of these CCAs are programmable and have access to the entire quantized eigenenergy spectra of the Hamiltonian. While careful selec-
tion of the operation regime can lead to pathways that allow scalability to multiple sites using photonics16, in the optical regime achieving programmability and measurability of the eigen-spectrum, is very challenging owing to the extremely small physical dimensions involved. In this work, we tackle these problems by engineering a silicon photonic CCA made of high-Q (intrinsic Qs up to ∼ 7:1 × 104) racetrack resonators with thermally controllable onsite potential using specially designed thermo-o-
ptic (TO) island heaters. Here, we specifically focus on 1D tight-binding lattices which can be described by a set of Gaussian Hamiltonians of the form (ħ = 1):
H= X
n
μn ay
nan + Jnðay
n + 1an + ay
nan + 1Þ ð1Þ
where an denotes the onsite photonic annihilation operator, μn is the onsite potential given by the resonant frequency of the cavity, Jn is the
photonic hopping rate between nth and ðn + 1Þth sites. Realization of such a set of Hamiltonians requires implementing a potential profile μn = μ0,μ1, . . . μN 1 across a photonic lattice with specific inter-site hopping rates Jn, while ensuring that all the eigenstates of the system denoted by [εn] = [ε0, ε1, . . . εN 1] remain addressable and measurable.
Results
Design and characterization of the optical layer
Experimentally, we implement a Hamiltonian with 8 nodes via a CCA made up of 8 strongly coupled racetrack resonators fabricated on a silicon-on-insulator platform using 220nm silicon on top of 3 μm thick silicon oxide (Fig. 1a). The spacing between the resonators is determined by the desired hopping rate between the sites for the tightbinding Hamiltonians being implemented (see Supplementary Information: Section S1 for optical mode profiles and hopping rate calculation). The spectrum of the result-
ing system is probed via a set of grating couplers located at the first and last sites. The scattering properties of this system are completely described by the effective non-Hermitian Hamiltonian which incorporates the coupling to input/ output ports and system losses as:
H0
ef f = H j γ0
2 ay
0a0 + γN 1
2 ay
N 1aN 1 j X n
κn
2 ay
nan ð2Þ
where γ0, γN 1 denote the coupling rates to the grating couplers and κn denotes the onsite scattering/absorption losses. Photonic CCAs on a 2D chip can only be accessed reliably through input/output ports at the device boundaries and hence require a protocol that allows determination of the realized Hamiltonians with this boundaryrestricted access. To map the initial Hamiltonian H0
ef f of our CCA post-fabrication, we extend the Hamiltonian tomography algorithm developed for 1D lossless lattices17,18 for application in 1D nearest neighbor lossy CCAs (see Supplementary Information: Section S2 for details on the tomography algorithm). The modified algorithm allows for determining the entire H0
ef f describing the system from a single
6L 6L2 : $O 2
ab
7XQDEOH &: ODVHU
2SWLFDO SRZHU PHWHU
3LQ
_5 Ƨ _
_7 Ƨ _
ƚ QP
Ƨ 炰 7+]
_7 Ƨ _ _5 Ƨ _ _5 Ƨ _
VW HLJHQPRGH
QG
UG
WK
WK
WK
WK
WK
'DWD
)LW
'DWD
3UHGLFW
c
Fig. 1 | Hamiltonian Tomography. a Optical image of the electrically controlled CCA depicting the wiring structure, optical micrograph of the CCA (scale bar: 10 μm). The constituent racetrack resonators are characterized by longer straight segments that are 12 μm long, shorter straight segments that are 4 μm long, and a bending radius of 5 μm. b Schematic of the experimental setup used for measuring reflection ( RðωÞ 2) and transmission ( TðωÞ 2) spectra. c From the top: measured
reflection spectrum RðωÞ 2(dotted purple) along with the fit generated using the tomography algorithm (cream); followed by a plot showing contributions of various eigenmodes of the system to RðωÞ 2, and finally at the bottom; experimentally measured transmission spectrum TðωÞ 2 (dotted purple) along with the predicted transmission spectrum TðωÞ 2 (pink) from the H0
ef f obtained using the tomography algorithm.
Article https://doi.org/10.1038/s41467-023-41034-x
Nature Communications | (2023)14:5260 2

 reflection spectrum measurement RðωÞ 2 (Fig. 1b) performed at the first site of the CCA by estimating the contribution of individual eigenmodes of the system to the measured spectrum. In Fig. 1c, we plot the reflection spectrum of our CCA along with the corresponding contributions of the 8 individual eigenmodes. We then verify the accuracy of our fit by comparing the experimentally measured
transmission spectrum TðωÞ 2 of the CCA to the predicted spectrum of the extracted H0
ef f . Note that, while the reflection spectrum is
needed to map the entire H0
ef f , the transmission spectrum can be used to find only the eigenvalues of the Hamiltonian (see Supplementary Information: Section S2).
Design and characterization of the thermal control layer
Thermal control of the CCA has two primary design objectives: (i) minimizing the additional optical loss incurred when introducing the heaters and (ii) reducing the thermal crosstalk between heaters, which
$O 2
$O 2
:
b
$O 2
6L 6L2 :
3RXW
3LQ
a
9Q
c
K KK K KK KK
+HDWHU ,QGH[
炫炯ƚ
炫炯ƚ
炫炯ƚ
炫炯ƚ
炫炯ƚ
炫炯ƚ
炫炯ƚ
炫炯ƚ
&KDQJH LQ 2QVLWH SRWHQWLDO
QP
9DSSOLHG 9
G[
: 6L
$O 2
Fig. 2 | Electrical characterization. a Device schematic depicting the electrical characterization as voltage V n is applied to the nth site while measuring the transmission spectrum (dx = 14:66 μm). b Exploded view of the TO island heaters. The heater consists of a tungsten element sandwiched between alumina layers. Inset shows a false colored SEM image (scale bar: 2 μm) of a typical TO island (yellow: tungsten, pink: alumina, teal: silicon). c Plot showing the effect of heaters
[hn] on the potential profile across the device. The x-axis denotes the heater index hn switched ON for a particular set of measurements and the y-axis represents the change in potential profile [Δμλn]. The voltage applied for the measurement (V n) across heater hn is mapped to the color of the circular surface and the corresponding change in potential is denoted by the radii of the circle encompassing the surface (0:25nm of change is depicted by radii of the circle in the scale bar).
Article https://doi.org/10.1038/s41467-023-41034-x
Nature Communications | (2023)14:5260 3

 need to be placed in close proximity owing to the small device footprint necessary to obtain small mode volumes for each cavity and ensure strong coupling between the cavities while maintaining large free spectral ranges16,19. We meet both objectives by engineering TO island heaters made up of tungsten (W ) wires sandwiched between two alumina (Al2O3) layers (Fig. 2a, b). In such a configuration, the lower thermal resistance of the alumina layers than that of the air/ silicon oxide channel separa-
ting the islands allows for a more directional transfer of thermal energy from the tungsten heaters to the corresponding resonators. Since alumina is typically optically lossless in the telecommunication wavelength range (see Supplementary Information: Section S2 for ellipsometry data), the islands also allow for placing the tungsten heaters at an adequate distance from the racetrack resonators. This ensures that the introduction of heating elements occurs with minimal absorptive losses and allows-
 for achieving much higher Q-factors required for addressability of individual eigenmodes of a controllable CCA platform. Additionally, the top alumina layer acts as a protective layer against oxidation for the tungsten heating element20. In comparison, typical TO control schemes either rely on placing heaters on top of a universal cladding21 for minimizing additional dissipative losses or incorporating these into the resonator structure itself using photoconductive elements22 for extremely local -
control. However, both of these approaches have major drawbacks. While the former allows to obtain very high Q-factors, it suffers from poor local controllability, with our island heaters outperforming these by ∼ 50% in reducing stray effects of thermal crosstalk (see Supplementary Information: Section S3). On the other hand, the latter approach gives extremely local control, but the photoconductive elements inevitably limit the maximum achievable Q-factors due to dopant implantation in the region-
s that confine the optical mode. We characterize the realized CCA by applying a linearly increasing voltage across each heater one at a time and recording the respective transmission spectra. The eigenenergies are then extracted from the recorded spectra and combined with our knowledge of H0
ef f , we estimate the amount of crosstalk between the heaters. The change in the onsite potential Δμn when expressed in wavelength units is propor
tional to the square of voltage V n applied to the nth site: Δμλn / V 2
n (see Supplementary Information: Section S4). To simplify the equations going forward, we express the onsite potentials μn and eigenvalues εn of the CCA in wavelength units as μλn and ελn. We plot the effects of
voltage V n applied across heater hn on the potential profile [μλn] of the
CCA in Fig. 2c. The change in respective onsite potentials Δμλn is represented by the radii of the circles, whereas the color of the circles denotes the voltage V n applied across heater hn. From the plot, we establish that thermal crosstalk is already low between the nearest neighbors (n ± 1) and becomes negligible as we go beyond the third nearest neighbors (n ± 3).
CCA control model
We next model the CCA to accurately predict the eigenenergies of the system on application of a voltage profile [V n] = [V 0,V 1, . . . V N 1] across the heaters. Here, we define a translationally invariant function f which takes in the input voltage profile and predicts the change in onsite potential when applied at each site. The function f consists of three sets of terms: (i) a fitting correction to the initial onsite potential denoted by δn, (ii) thermal contributions from voltages applied acr-
oss heaters in the thermal neighborhood of site n (n ± 3) connected through proportionality coefficients βi’s (V 2
i ), (iii) cross-terms connected through proportionality coefficients γj,k ’s (V jV k s.t. i,j,k 2 n 3,n + 3
1⁄2 ) accounting for the thermal effects on heater performances by virtue of these being in the thermal vicinity of each other. We also use an additional set of coefficients αn to incorporate the effects of minor variations in heater resistances due to fabrication
inconsistencies. We then express this relationship mathematically as
Δμλ
n = f Vn = δn + X
i
βiðαiV 2
iÞ+ X
j, k
γj,k ð ffiffiffiffiffiffiffiffiffiffi
αjαk
p V jV k Þ ð3Þ
Note that, we assume that f is translationally invariant, and hence the number of functional parameters βi and γj,k needed to model the device behavior can be restricted to 3 and 12 respectively. We visualize this process in Fig. 3a where we show how we can use the model to predict the location of eigenenergies [ελn] by finding the
eigenvalues of the modified Hamiltonian. Starting with the initial H0
ef f
and updating its diagonal terms by evaluating the function f at each site of the array for a particular V n we predict the eigenvalues of the modified Hamiltonian as:
ελ
n
hi
predicted = Eig H0
ef f + Δμn I ð4Þ
These predicted eigenenergies are then used to fit for f by minimizing the error obtained by calculating the deviations from experimentally extracted eigenenergies across many measurements (here we limit the number of measurements to 288).
Error = ελn predicted ελn measured
2
J nor m
ð5Þ
The probability distribution of the fitting error normalized to the mean hopping-rate Jnorm is plotted in Fig. 3b. Finally, once we have identified f , we use it to predict the location of eigenenergies for 20 randomly generated voltage profiles in Fig. 3c. The centers of the circles in the figure denote the measured values of eigenenergies, and the error in predicted values are represented by the radii of the corresponding circle. The net overall error for a random generation is mapped to the col-
or of the particular set of eigenenergies. From the plot, we can see that the model allows for the prediction of the eigenenergies of our system with greater than 96% accuracy.
Discussion
To summarize, we demonstrated a thermally controlled optical CCA which can be used to realize a set of tight-binding Hamiltonians with addressability to the entire quantized eigenenergy spectrum. To ensure a compact device size and high-Q cavities necessary (albeit not sufficient) to reach the regime of interacting photons and allow access to the full quantized eigen-spectrum12, we engineered special TO islands heaters, which reduced the effects of thermal crosstalk by almost 50% over previously r-
eported works21,23 and allowed Q-factors up to 7:1 × 104 for heater integrated racetrack resonators. Finally, we presented a mathematical model which allowed for precise control of the eigenenergies of the implemented Hamiltonians within an error of only 4% of the mean hopping rate. Our device can already be used to simulate a number of single-particle physical effects like Anderson localization13 and the Su–Schrieffer–Heeger (SSH) model24. One potential disadvantage of using TO heaters is that ou-
r dynamic modulation rates are limited to the MHz regime21 which rules out the possibility to implement models like the Haldane quantum Hall effect25 requiring modulation of onsite potentials at rates comparable to the mean hopping rate ( ∼ GHz). However, what TO heaters might lack, they make up for it by allowing a larger range of static modulation and ease of scalability in comparison to say electro-optical modulators which might be much faster but present far more challenges when it comes to sc-
aling to a larger number of sites26. Looking ahead, our TO island
Article https://doi.org/10.1038/s41467-023-41034-x
Nature Communications | (2023)14:5260 4

 heaters equipped CCAs are hence perfectly suited for implementing a large class of Hamiltonians that do not require very high-speed modulation, such as the Hofstadter Hamiltonian3,19, SSH Hamiltonian16,24 and non-Hermitian topological Hamiltonians27, among others. Further, leveraging the immense scaling potential of photonics, operating in a linear regime the current CCA can be scaled to sizes where it can be used to study classical and quantum bosonic walks and solid-state lattice band structure-
s28. While we did not demonstrate any non-linearity, our CCA with its small footprint, high Q-factors and a cladding free design has the potential to enable integration with excitonic materials29, defect centers30,31 and possibly reach single photon non-linear regime32–34. Additionally, adopting more complex control algorithms involving feedback control35,36 and data-based learning37 in future works can help to improve the accuracy of the realized Hamiltonians further. In conclusion, our
work shows the scalability, programmability, and measurability of photonic CCAs for the first time, and is a significant step forward over state-of-the-art photonic quantum simulators, which are traditionally neither programmable nor tomographically mappable.
Methods Design
Ansys Lumerical FDTD, MODE and HEAT were used to simulate and optimize the device parameters.
Fabrication
A silicon on insulator wafer (SOITEC) with 220nm thick film of silicon on 3 μm thick buried silicon oxide was diced. A 10 mm × 10 mm chip thus obtained was used for further processing. After cleaning, the chip was spin-coated with Hydrogen
)LWWLQJ HUURU
3UREDELOLW\ 'LVWULEXWLRQ
b
ƚ QP
_PHDVXUHG SUHGLFWHG_ -QRUP
5DQGRP JHQHUDWLRQ QXPEHU
c
(UURU
a
Q
Q
Q
QQ
Q
Q
QQ
Q
Q
Q
Q
ƒ ƒ ƒ ƒ ƒ ƒ ƒ ƒ ƒƒ ƒ ƒ
ƑƑƑ
ĝ
Q 9Q
+HII
>炯ƚ
Q@
>炯ƚ
Q
炫炯ƚ
Q@
>炿ƚ
Q@
(LJ +HII
Fig. 3 | Electrical control model and eigen-energy prediction. a Visualization of the optimization process depicting how the model takes in the system Hamiltonian Hef f and fits for the function f which connects the applied voltage profile [V n] to change in onsite potentials. We predict the position of eigen-energies on application of [V n] by calculating the change in onsite potentials which lie along the Hamiltonian diagonal and finding the eigenvalues of the modified Hamiltonian. The optimizat-
ion is initialized using H0
ef f shown in the matrix form (only real part is depicted). All entries are in GHz, with diagonal terms denoting the deviations in resonant frequency about the mean (dark purple: +ve deviation, tan: ve deviation)
and super/sub diagonal terms denoting the hopping rates. n ± i denote indices of sites in neighborhood of site n on which the function f is being applied on. The coefficients βi are denoted in hues of blue and γj,k are denoted in hues of purple. b Violin plot denoting the fitting error normalized to the mean hopping rate Jnorm across 288 points. c Prediction accuracy plot where the x-axis denotes the random generation, and the y-axis denotes the wavelength. The location of the measured eigen-energ-
ies is denoted by the dark black lines in background. The radii of the circles denote the deviation of the predicted value from measured values (scale on top). The color of the dots denotes the overall prediction error for that generation.
Article https://doi.org/10.1038/s41467-023-41034-x
Nature Communications | (2023)14:5260 5

 silsesquioxane ðHSQÞ and exposed using a JEOL JBX6300FS electron beam (e-beam) lithography system. After developing in 25% TMAH, the chip was etched using an inductively coupled plasma etcher with a Cl2 chemistry. The resist was then removed using diluted BOE. The chip then underwent several cycles of patterning, followed by electron beam evaporation/sputtering of materials and lift-off to define the island heaters, and contact pads (see Supplementary Information: Methods for the fabrication flow-
 diagram). The first of these cycles involved defining the island pattern in positive tone polymethyl methacrylate ðPMMAÞ resist using e-beam lithography, followed by depositing 265nm thick Al2O3 layer using evaporation and finally lift-off to obtain the lower layer of the islands. The next cycle began by patterning of heating elements using a similar PMMA based e-beam lithography step. A 150nm thick tungsten (W ) layer was then sputtered, followed by a sonication-based lift-off to obtain the heat-
ers. The contact pads made up of 25nm Ti=325nm Pt layers were then defined using a PMMA based e-beam lithography followed by an evaporation and lift-off cycle. The final 300nm thick Al2O3 cladding over the islands was then obtained using a similar e-beam lithography/evaporation/lift-off process cycle.
Measurement setup
The spectrum of the fabricated device was measured via a fiber coupled setup in which the input light was provided by a tunable continuous-wave laser (Santec TSL-510) and a low-noise power meter (Keysight 81634B) was used to collect the output light from the grating couplers. A DAQ (MCC USB 3114) was used to apply the electrical potential profile across the device.
Data availability
Additional data related to this paper may be requested from the authors on request.
References
1. Georgescu, I. M., Ashhab, S. & Nori, F. Quantum simulation. Rev. Mod. Phys. 86, 153–185 (2014). 2. Noh, C. & Angelakis, D. G. Quantum simulations and many-body physics with light. Rep. Prog. Phys. 80, 016401 (2016). 3. Roushan, P. et al. Spectroscopic signatures of localization with interacting photons in superconducting qubits. Science 358, 1175–1179 (2017). 4. Kim, E. et al. Quantum electrodynamics in a topological waveguide. Phys. Rev. X 11, 011015 (2021). 5. Zhang, X., Kim, E., Mark, D. K.,-
 Choi, S. & Painter, O. A superconducting quantum simulator based on a photonic-bandgap metamaterial. Science 379, 278–283 (2023). 6. Hangleiter, D., Roth, I., Eisert, J. & Roushan, P. Precise Hamiltonian identification of a superconducting quantum processor. Preprint at https://doi.org/10.48550/arXiv.2108.08319 (2021). 7. Ma, R. et al. A dissipatively stabilized Mott insulator of photons. Nature 566, 51–57 (2019). 8. Krastanov, S. et al. Room-temperature photonic logical qubits via second-order n-
onlinearities. Nat. Commun. 12, 191 (2021). 9. Rundquist, A. et al. Nonclassical higher-order photon correlations with a quantum dot strongly coupled to a photonic-crystal nanocavity. Phys. Rev. A 90, 023846 (2014). 10. Peruzzo, A. et al. Quantum walks of correlated photons. Science 329, 1500–1503 (2010). 11. Beverland, M. E. et al. Assessing requirements to scale to practical quantum advantage. Preprint at https://doi.org/10.48550/arXiv. 2211.07629 (2022). 12. Hartmann, M. J. Quantum simulation w-
ith interacting photons. J. Opt. 18, 104005 (2016).
13. Mookherjea, S., Ong, J. R., Luo, X. & Guo-Qiang, L. Electronic control of optical Anderson localization modes. Nat. Nanotech. 9, 365–371 (2014). 14. Mittal, S., Goldschmidt, E. A. & Hafezi, M. A topological source of quantum light. Nature 561, 502–506 (2018). 15. Mittal, S., Orre, V. V., Goldschmidt, E. A. & Hafezi, M. Tunable quantum interference using a topological source of indistinguishable photon pairs. Nat. Photonics 15, 542–548 (2021). 16. Saxena, A., Chen, Y., Fang, Z. & Majumdar, A. P-
hotonic topological baths for quantum simulation. ACS Photonics 9, 682–687 (2022). 17. Ma, R., Owens, C., LaChapelle, A., Schuster, D. I. & Simon, J. Hamiltonian tomography of photonic lattices. Phys. Rev. A 95, 062120 (2017). 18. Burgarth, D., Maruyama, K. & Nori, F. Coupling strength estimation for spin chains despite restricted access. Phys. Rev. A 79, 020305 (2009). 19. Hafezi, M., Mittal, S., Fan, J., Migdall, A. & Taylor, J. Imaging topological edge states in silicon photonics. Nat. Photonic-
s 7, 1001–1005 (2013). 20. Ivanov, V. E. High temperature oxidation protection of tungsten. vol. 583 (National Aeronautics and Space Administration, 1969). 21. Liang, G. et al. Robust, efficient, micrometre-scale phase modulators at visible wavelengths. Nat. Photonics 15, 908–913 (2021). 22. Jayatilleka, H., Shoman, H., Chrostowski, L. & Shekhar, S. Photoconductive heaters enable control of large-scale silicon photonic ring resonator circuits. Opt., Opt. 6, 84–91 (2019). 23. Xue, X. et al. Thermal-
 tuning of Kerr frequency combs in silicon nitride microring resonators. Opt. Express, OE 24, 687–698 (2016). 24. Su, W. P., Schrieffer, J. R. & Heeger, A. J. Solitons in polyacetylene. Phys. Rev. Lett. 42, 1698–1701 (1979). 25. Minkov, M. & Savona, V. Haldane quantum hall effect for light in a dynamically modulated array of resonators. Opt., Opt. 3, 200–206 (2016). 26. Zhang, M. et al. Electronically programmable photonic molecule. Nat. Photonics 13, 36–40 (2019).
27. Shen, H., Zhen, B. & Fu, L. Topological band theory for nonhermitian hamiltonians. Phys. Rev. Lett. 120, 146402 (2018). 28. Senanian, A., Wright, L. G., Wade, P. F., Doyle, H. K. & McMahon, P. L. Programmable large-scale simulation of bosonic transport in optical synthetic frequency lattices. Nat. Phys. 1–7 (2023). 29. Chen, Y. et al. Deterministic positioning of colloidal quantum dots on silicon nitride nanobeam cavities. Nano Lett. 18, 6404–6410 (2018). 30. Lukin, D. M. et al. Two-emitter mu-
ltimode cavity quantum electrodynamics in thin-film silicon carbide photonics. Phys. Rev. X 13, 011005 (2023). 31. Baron, Y. et al. Single G centers in silicon fabricated by coimplantation with carbon and proton. Appl. Phys. Lett. 121, 084003 (2022). 32. Ryou, A., Rosser, D., Saxena, A., Fryett, T. & Majumdar, A. Strong photon antibunching in weakly nonlinear two-dimensional excitonpolaritons. Phys. Rev. B 97, 235307 (2018). 33. Saxena, A. et al. Improving indistinguishability of single photons fr-
om colloidal quantum dots using nanocavities. ACS Photonics 6, 3166–3173 (2019). 34. Zasedatelev, A. V. et al. Single-photon nonlinearity at room temperature. Nature 597, 493–497 (2021). 35. Morichetti, F., Grillanda, S. & Melloni, A. Breakthroughs in photonics 2013: toward feedback-controlled integrated photonics. IEEE Photonics J. 6, 1–6 (2014).
Article https://doi.org/10.1038/s41467-023-41034-x
Nature Communications | (2023)14:5260 6

 36. Grillanda, S. et al. Non-invasive monitoring and control in silicon photonics using CMOS integrated electronics. Opt., Opt. 1, 129–136 (2014).
37. Brunton, S. L. & Kutz, J. N. Data-Driven Science and Engineering: Machine Learning, Dynamical Systems, and Control. (Cambridge University Press, 2022).
Acknowledgements
This work was funded through the National Science Foundation grants NSF-QII-TAQS-1936100, NSF-1845009. Part of this work was conducted at the Washington Nanofabrication Facility/Molecular Analysis Facility, a National Nanotechnology Coordinated Infrastructure (NNCI) site at the University of Washington with partial support from the National Science Foundation via awards NNCI1542101 and NNCI-2025489. We thank J. Simon for pointing us towards the Hamiltonian tomography algorithms; M. Zhelyeznyakov a-
nd S.L. Brunton for help in numerical optimization; J. Whitehead for help in automating the measurements; Y. Chen for help in fabrication in very initial stages of the project.
Author contributions
A.S. and A. Majumdar conceptualized the idea. A.S. designed the device and fabricated it. A.S. then programmed the laser, power meter and the electrical control unit for the experiment. The device was then characterized by A.S. and A. Manna. A.S., A. Manna and R.T. came up with a modification to the algorithm used for Hamiltonian tomography. A.S., A. Manna and A. Majumdar then analyzed the electrical control data. A.S. and A. Majumdar drafted the initial manuscript. All the authors contributed to -
the interpretation of the results and to the writing of the manuscript. A. Majumdar supervised the project.
Competing interests
The authors declare no competing interests.
Additional information
Supplementary information The online version contains supplementary material available at https://doi.org/10.1038/s41467-023-41034-x.
Correspondence and requests for materials should be addressed to Abhi Saxena or Arka Majumdar.
Peer review information Nature Communications thanks Emir Salih
Magden and the other, anonymous, reviewer(s) for their contribution to the peer review of this work. A peer review file is available.
Reprints and permissions information is available at http://www.nature.com/reprints
Publisher’s note Springer Nature remains neutral with regard to jurisdictional claims in published maps and institutional affiliations.
Open Access This article is licensed under a Creative Commons Attribution 4.0 International License, which permits use, sharing, adaptation, distribution and reproduction in any medium or format, as long as you give appropriate credit to the original author(s) and the source, provide a link to the Creative Commons licence, and indicate if changes were made. The images or other third party material in this article are included in the article’s Creative Commons licence, unless indicated otherwise in-
 a credit line to the material. If material is not included in the article’s Creative Commons licence and your intended use is not permitted by statutory regulation or exceeds the permitted use, you will need to obtain permission directly from the copyright holder. To view a copy of this licence, visit http://creativecommons.org/ licenses/by/4.0/.
© The Author(s) 2023
Article https://doi.org/10.1038/s41467-023-41034-x
Nature Communications | (2023)14:5260 7

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:00.158Z
- **Text Length:** 32040 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
