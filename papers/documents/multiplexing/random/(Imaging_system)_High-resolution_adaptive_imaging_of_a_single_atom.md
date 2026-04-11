# PDF Document: (Imaging system) High-resolution adaptive imaging of a single atom.pdf

**File Path:** (Imaging system) High-resolution adaptive imaging of a single atom.pdf

**Processed Date:** 2026-02-10T18:14:57.971Z

**File Size:** 525.09 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 718

**Title:** (Imaging system) High-resolution adaptive imaging of a single atom

**Collection:** Multiplexing > Random

---

## Extracted Text Content

ARTICLES
PUBLISHED ONLINE: 18 JULY 2016 | DOI: 10.1038/NPHOTON.2016.136

High-resolution adaptive imaging of a single atom
J. D. Wong-Campos*, K. G. Johnson, B. Neyenhuis, J. Mizrahi and C. Monroe
Optical imaging systems are used extensively in the life and physical sciences because of their ability to non-invasively capture details on the microscopic and nanoscopic scales. Such systems are often limited by source or detector noise, image distortions and human operator misjudgement. Here, we report a general, quantitative method to analyse and correct these errors. We use this method to identify and correct optical aberrations in an imaging system for single atoms and realize an atomic posi-
tion sensitivity of ∼0.5 nm Hz−1/2 with a minimum uncertainty of 1.7 nm, allowing the direct imaging of atomic motion. This is the highest position sensitivity ever measured for an isolated atom and opens up the possibility of performing out-of-focus three-dimensional particle tracking, imaging of atoms in three-dimensional optical lattices or sensing forces at the yoctonewton (10−24 N) scale.

The optical imaging of isolated emitters, such as individual molecules1,2, optically active defects in solids3, ﬂuorescent dyes in a solution4 or trapped atoms5,6, relies on efﬁcient light collection and excellent image quality7. Such high-resolution
imaging underlies many methods in quantum control and quantum information science5,6, such as quantum networks8, fundamental atom–light interactions9 and the sensing of small-scale forces10. Individual atoms in particular have been resolved and imaged for many such applications11–18, with performance that depends critically on minimizing misalignments and optical aberrations from intervening optical surfaces such as a vacuum window.
In this Article we develop a general method for suppressing aberrations by characterizing and adapting the imaging system,
and report the highest-performance optical imaging of an isolated atom to date. We image a single 174Yb+ atomic ion with a position sensitivity of ∼0.5 nm Hz−1/2 for averaging times less than 0.1 s, observe a minimum uncertainty of 1.7(3) nm and obtain direct measurements of the nanoscale dynamics of atomic motion.
Complete knowledge of the wavefront distortions is obtained by applying the Zernike expansion of the point spread function, and we adapt this information to correct aberrations and misalignments. The generality of the described work paves the way for adaptive optimal imaging in many other quantum
optical systems as well as other contexts, such as biological microscopy or astronomy.

Experimental apparatus

The atomic imaging system is presented in Fig. 1 (see Supplementary Section I). A single 174Yb+ ion is conﬁned in vacuum using a linear

Paul trap6,19 with three-dimensional harmonic oscillation fre-

quencies (ωx, ωy, ωz)/2π = (1,1.2,0.8) MHz. Laser light at a wavelength of λ = 369.5 nm is incident on the ion and resonantly excites the 2S1/2 → 2P1/2 cycling transition (radiative linewidth of γ/2π = 20 MHz) as shown in Fig. 1a. The ion is laser-cooled and

localiz√ed in each of the Δx = (2n + 1)x0, where x0

three dimensions = −h/2mωx ≈ 5 nm

of position to is the zero-point

spread, n is the mean thermal vibrational occupation number

along each of the dimensions of motion, and m is the atomic

mass19. For Doppler laser cooling with the cooling laser at an

oblique angle to all directions of motion, n ≈ γ/2ωx ∼ 10, so Δx ∼ 20 nm ≪ λ, and the trapped ion acts as an excellent

approximation to a point source.

The isotropic ﬂuorescence from the atom at λ = 369.5 nm is transmitted through a vacuum viewport and collected by an objective lens of numerical aperture NA = 0.6 with ×10 magniﬁcation15 (Fig. 1b). The intermediate image passes through a pinhole that spatially ﬁlters light from background sources. Additional magniﬁcation is provided by a second stage lens that forms an image at the face of an electron-multiplying charge-coupled-device (EMCCD) camera (Fig. 1c). The objective lens is mounted on a pr-
ecision ﬁve-axis alignment stage to compensate for comatic aberrations, and cylindrical optics are inserted after the magniﬁer lens to compensate for astigmatic aberrations.

Aberration retrieval and suppression
The measured spatial distribution of the image is the point spread function (PSF)20, which contains information about the ultimate
resolution achievable in an imaging system and is the building
block for more complex image formation through deconvolution
techniques. The PSF can be decomposed into Zernike polynomials Znm(ρ, θ) (see Methods) in space

2

PSF(ρ, θ) = F exp −ik cmn Znm(ρ, θ)

(1)

m,n

where ℱ{ } is the Fourier transform operator, k = 2π/λ is the wavenumber and the cmn coefﬁcients are contributions of each Zernike component deﬁned in the polar coordinates ρ and θ. The cmn coefﬁcients correspond to particular optical aberrations, so detailed
characterization of the imaging system follows from the retrieval of the sign and magnitude of these coefﬁcients.
Decomposing an image into Zernike polynomials relies on numerical algorithms21,22 or semi-analytical calculations23. Here,
we obtain a full aberration characterization by using a leastsquares ﬁt to the measured data, using the cmn coefﬁcients and the exit pupil radius as ﬁtting parameters. Although this method
omits consideration of vector (polarization) effects, it remains a gen-
erally applicable technique because these effects can be neglected at
numerical apertures above 0.6 NA (ref. 24). Figure 2 shows six single-shot images of a single 174Yb+ ion. The
images in Fig. 2a–c were taken during alignment and in Fig. 2d–f
were taken at different distances from the focal plane of the
optimally aligned system. The images were integrated for ∼0.5 s,

Joint Quantum Institute, Joint Center for Quantum Information and Computer Science, and Department of Physics, University of Maryland, College Park, Maryland 20742, USA. *e-mail: jwongcam@umd.edu

606

NATURE PHOTONICS | VOL 10 | SEPTEMBER 2016 | www.nature.com/naturephotonics

© 2016 Macmillan Publishers Limited, part of Springer Nature. All rights reserved.

NATURE PHOTONICS DOI: 10.1038/NPHOTON.2016.136

a 2P1/2

b J = 1/2

ARTICLES

c

8

6

(μm)

4 369.5 nm
2

Source View port 0.6 NA lens
Pinhole Collimator lens Cylindrical lens
Camera

2S1/2

J = 1/2

0 32 1 0
(μm)

Figure 1 | Schematic of the imaging system. a, Atomic energy diagram for 174Yb+. The atom is excited with laser radiation at 369.5 nm, driving the 2S1/2 → 2P1/2 cycling transition, and the resulting ﬂuorescence is collected by the imaging system. b, Transverse cut of the optical set-up depicting the source, vacuum window, 0.6 NA objective lens, pinhole, short-focal-length lens, cylindrical lens and camera. c, Image of two atomic ions separated by 5 μm.

collecting ∼7 × 105 photons and ﬁtted according to equation (1) to a linear superposition of the ﬁrst 12 Zernike polynomial basis functions. The overall ﬁtting function was then smoothed by convolving with a Gaussian function that best ﬁt the data and accounted for spatial drifts over long exposures. The Gaussian function parameters were added to the ﬁtting algorithm and are only important for integration times longer than 0.2 s (see next section and Supplementary Section II). We found that the op-
timal image (Fig. 2f ) has a characteristic radius of ρ0 = 363(18) nm, consistent with the diffraction-limited Airy radius of ρ0 = 0.61λ/NA = 375.1 nm given the system numerical aperture.
Based on the one-to-one mapping of the Zernike polynomials to optical aberrations, we plotted an aberration budget, which shows the leading order aberration contributions to each of the images. For example, the contribution of the dominating negative (positive) defocus term of Fig. 2d (Fig. 2e) shows that we can map axial displacement on a transverse image distribution, with the position of best focus shown in Fig. 2f. Moreover, a contribution of the comatic aberration indicates angular tilt error-
s, and nonzero values of astigmatism indicate anisotropic foci in the system, as seen in Fig. 2a–c.
Fitting results show parameter uncertainties on the order of 1 nm (Supplementary Section II), providing a full quantitative basis for analysing systems that rely on aberrations to extract information on particle dynamics. Examples of these experiments involve three-dimensional off-focus tracking25 and imaging of atoms arranged in 3D lattices26. Although we describe an atomic emitter, this method can also be applied to the imaging of microbiological test samples (see Supplementary Section IV for an-
 example).

Position sensitivity The precision of measuring atomic position is dependent on the imaging system light collection and quality. As a result of the optical aberration characterization, even if it is not possible to directly correct the aberrations in the imaging system by alignment, it is feasible to post-process and actively feed back the aberrated image and obtain a diffraction-limited performance through a digital ﬁlter with the phase information of the Zernike expansion. In this experiment we -
correct the aberrations by direct alignment (Supplementary Section I).
We measured the sensitivity to the position by taking N images at 1 ms exposure time, binning them over total time duration intervals τ and calculating the Allan variance of the central position27:

σ2(τ)

=

1 2(M −

1)

M−1 n=1

(yn+1

−

yn)2

(2)

where M is the number of samples per bin and yn is the centroid of the ion image integrated over time τ. Each image was integrated along one direction and ﬁt to a one-dimensional Gaussian linear
count density function. The same procedure taken at different times τ leads to a curve of position uncertainty δx versus integration time, as shown in Fig. 3. The data are corrected for a dead time of
5 ms between each 1 ms frame, allowing for state preparation and
laser cooling (see Methods and refs 27,28).
The net position sensitivity is a quadrature of three main (uncor-
related) sources of uncertainty: shot noise, pixelation and background noise29,30:

δx =

2ρ20 R0τ

+

lp2 12R0τ

+

16πρ40b R20τ2

(3)

where b ≈ 0.07 is the mean background count rate per pixel, lp ≈ 33 nm is the pixel size referred to the object (image pixel size divided by

the magniﬁcation) and R0 = ηDFγ/2 is the maximum (saturated) measured ﬂuorescence count rate from the atom, F ≈ 10% is the

solid angle fraction of ﬂuorescence collected and ηD ≈ 25% is the quantum efﬁciency of the camera. Finite pixel size and

background counts have negligible impact on the measured

position sensitivity in this experiment. The observed sensitivity of ∼0.5 nm Hz−1/2 at small integration times is somewhat higher

than the expected level of shot noise (shown as the blue line in

Fig. 3) and is consistent with observed super-Poissonian noise on

the camera. We measured a minimum uncertainty of δx ≈ 1.7(3) nm at an integration time of τ = 0.2 s. For longer integration

times, drifts in the relative position between the optical objective

and the trapped ion degrade the position uncertainty as shown

in Fig. 3 and with simple mechanical improvements in the

imaging set-up the resolution can probably be pushed well

below 1 nm.

Given this uncertainty in the position of the harmonically bound

ion, the sensitivity to detecting single 174Yb+ ion with ωx/2π =

external 10 kHz,

forces is δF = mω2xδx. For this would correspond to

a a

force sensitivity in the yoctonewton (10–24 N) scale, or an electric

ﬁeld at the μV cm−1 scale. Unlike earlier work10, this imaging force

sensor applies to single ions and does not require the resolution of

optical sidebands.

Sensing of RF-induced micromotion position Conﬁnement of atomic ions in a Paul trap is achieved by means of oscillating RF electric ﬁeld gradients that create a harmonic ponderomotive potential31. In the presence of a static uniform electric ﬁeld E, the ion acquires a ‘micromotion’ modulation in position x(t) = Xμsin Ωt to ﬁrst order in the pseudopotential

NATURE PHOTONICS | VOL 10 | SEPTEMBER 2016 | www.nature.com/naturephotonics

607

© 2016 Macmillan Publishers Limited, part of Springer Nature. All rights reserved.

ARTICLES

a

Measured image Best low-order ﬁt

0.1

NATURE PHOTONICS DOI: 10.1038/NPHOTON.2016.136
Aberration budget cmn values (μm)

0

−0.1

b

0.1

0

−0.1

c

0.1

0

−0.1

d

0.1

0

−0.1

e

0.1

0

−0.1

f

0.1

0

−0.1 DefoAcsSutpsighmeAraiscttaiisglmm4at5is°m 90C°oma Cy omTarexfoilT4r5eQf°ouial t9rA0eQf°soutiialgt4mrA5eaf°sottiiislgm9m02a°ntidsm452°nd 90°

Figure 2 | Aberration retrieval results. a–c, Single-shot images of the misaligned system. d–f, The optimally aligned system at various distances from the focal plane, with the best focus shown in f. In d,e, a high contribution from the defocus term is evident, with low contributions of astigmatism and coma (right). Large contributions of coma and astigmatism (a–c) are corrected with a ﬁve-axis stage and cylindrical lens (Supplementary Section I). The goodness of ﬁt obtained for these examples app-
roaches unity at coefﬁcients of determination of 0.989, 0.965, 0.958, 0.957, 0.983 and 0.994 for images a–f, respectively. These images are integrated for ∼0.5 s. Further analysis of the coefﬁcients error bars is provided in Supplementary Section II.

approximation19,31, where Ω is the drive frequency of√the RF trapping ﬁeld (∼17 MHz in this experiment) and Xμ = 2eE/(mΩω) is the micromotion amplitude.
The conventional approach for sensing micromotion is based on the ﬁrst-order Doppler modulation in the scattering of light from a
laser beam of wavenumber k propagating along the micromotion velocity32 (Fig. 4a). The correlation between the photon arrival
times (measured with a photomultiplier tube) and the micromotion
velocity is obtained with a time-to-digital converter. With the

excitation laser red-detuned from resonance of order γ and for
small levels of micromotion kXμ ≪ 1, the measured ﬂuorescence signal takes the form33

R(t) = αR0 + βR0

kXμΩ γ

cos Ωt

(4)

where α,β ≤ 1 are dimensionless constants that depend on the precise detuning and intensity of the excitation laser33.

608

NATURE PHOTONICS | VOL 10 | SEPTEMBER 2016 | www.nature.com/naturephotonics

© 2016 Macmillan Publishers Limited, part of Springer Nature. All rights reserved.

NATURE PHOTONICS DOI: 10.1038/NPHOTON.2016.136

ARTICLES

Position uncertainty, δx (nm)

101

1.7(3) nm

100 10−2

10−1

0.2 s

100

τ (s)

Figure 3 | Measured position uncertainty δx of the trapped ion centroid position versus image integration time τ. The blue line shows the expected uncertainty limited by photon counting shot noise in the imaging system. A sensitivity of ∼0.5 nm Hz−1/2 is measured for τ < 0.1 s, which is approximately
three times higher than the shot noise, presumably from camera noise. The ultimate position sensitivity is found to be 1.7(3) nm at τ = 0.2 s. These
measurements include small corrections for dead time bias, as described in the Methods. Error bars on each point indicate root-mean-square error.

To also sense the direct position sensitivity to motion, we spatially mask the ion image with a sharp edge aperture, normal to the x direction of motion. The mask position can be adjusted from, effectively, a = –∞ (completely exposed) to a = +∞ (completely masked), with a = 0 covering exactly half of the image. The total ﬂuorescence behind the mask is then the integrated ﬂuorescence behind the exposed area:

R(a, t) = αF(a)R0

+ βF(a)R0

kXμΩ γ

cos Ωt

(5)

+

αR0

X√μ σπ

e−a2 /2σ 2

sin

Ωt

where we assume a Gaussian image distribution in space with rootmean-square radius σ = 0.36ρ0 and the scale of the mask position a is referred to the o√bject. The cumulative distribution function is F(x) = [1 − erf (x/σ 2)]/2.

We extract the two quadratures of the modulated ﬂuorescence
from equation (5) by performing sine and cosine transforms of the data. The phases of the modulated signal are calibrated by opening the aperture (a = –∞) and taking the modulation as proportional to cos Ωt.
Figure 4b shows the position (sin Ωt) and velocity (cos Ωt) quadrature amplitudes (normalized to the amplitude at a = –∞) as the mask position is scanned. Based on the observed velocityinduced modulation in the count rate with full exposure (a = –∞), we infer a micromotion amplitude of Xμ ∼ 20 nm. As the mask is scanned along x, a position-dependent modulation in the ﬂuorescence rate arises, reaching a maximum level at a = 0. The absolute level of this position-dependent modulation is observed to -
be 15 times smaller than expected from equation (5). This may be due to slow drifts in the relative position of the ion with respect to the mask— a ﬂuctuation of just 30 nm over the 300 s integration time required to obtain sufﬁcient signal-to-noise ratio in the measurement would explain the observed reduction in the modulation.

a

x

369.5 nm

v

Photomultiplier tube

a = 0

z

b Velocity Position
1

0.135 0.1

Position amplitude

Velocity amplitude

0.5

k

0

0

−0.5 −0.4 −0.3 −0.2 −0.1

0

0.1

Mask position a (mm)

Figure 4 | Micromotion position measurement. a, The ion’s velocity v (solid black arrows) is colinear with the direction k of the detection light, taken to be the x axis. Fluorescence is modulated from the micromotion of the ion along x by the ﬁrst-order Doppler effect as well as the obscuration by a mask with variable position a along the x axis. b, Contributions of the velocity (left y axis) and position (right y axis) of a single atom when a mask is scanned along one transversal direction x. Th-
e solid and dashed lines depict ﬁts to the data for the velocity and position components, respectively, of equation (5), given respectively by the cosine and sine terms alone. All values are normalized with the signal amplitude at a = –∞. Horizontal error bars represent the uncertainty of the scanning stage (0.01 mm) and vertical errors are computed from the uncertainty propagation using equation (5).

NATURE PHOTONICS | VOL 10 | SEPTEMBER 2016 | www.nature.com/naturephotonics

609

© 2016 Macmillan Publishers Limited, part of Springer Nature. All rights reserved.

ARTICLES

NATURE PHOTONICS DOI: 10.1038/NPHOTON.2016.136

Outlook In the single-atom emitter presented here, ultimate position localization to the level of ångströms (10–10 m) should be possible for longer integration times, when drifts slower than 0.2 s are eliminated or actively corrected. Drifts may be reduced by further isolating the vacuum chamber from the environment and stabilizing the relative position between the sample and the objective. Because we obtain information of the centroid position, the zero-point ion motion does not affect these meas-
urements.
More generally, the isolation and correction of wavefront distortions by ﬁtting intensity images can be extended to the adaptive imaging of a variety of source objects. If the ﬂuorescence from the emitter is incoherent, then imaging errors should not accumulate and images from multiple emitters localized in distinct regions of space could be corrected. This technique can also be used for the optimization of laser output cavity spatial modes34. Most misalignments provide an unambiguous signature in-
 the image decomposition, but for certain symmetric misalignments such as axial displacements about the focus for single atoms, introducing additional aberrations such as astigmatism26 or coma will yield a unique ﬁt. Given sufﬁcient emitter brightness, active shot-to-shot adjustments and feedback to appropriate optical elements should allow the continuous optimization of image quality. The bandwidth of this type of adaptive imaging would be limited by the speed of the correction elements and the c-
omputing time for numerically extracting the error signal (this is ∼1 s in our experiment).
Methods Methods and any associated references are available in the online version of the paper.
Received 21 December 2015; accepted 7 June 2016;
published online 18 July 2016
References
1. Moerner, W. Nobel lecture. Single-molecule spectroscopy, imaging, and photocontrol: foundations for super-resolution microscopy. Rev. Mod. Phys. 87, 1183–1212 (2015).
2. Betzig, E. Nobel lecture. Single molecules, cells, and super-resolution optics. Rev. Mod. Phys. 87, 1153–1168 (2015).
3. Eva, R. et al. STED microscopy reveals crystal colour centres. Nature Photon. 3, 144–147 (2009).
4. Betzig, E. et al. Imaging intracellular ﬂuorescent proteins at nanometer resolution. Science 313, 1642–1645 (2006).
5. Bakr, W., Gillen, J., Peng, A., Fölling, S. & Greiner, M. A quantum gas microscope for detecting single atoms in a Hubbard-regime optical lattice. Nature 462, 74–77 (2009).
6. Blatt, R. & Wineland, D. Entangled states of trapped atomic ions. Nature 453, 1008–1015 (2008).
7. Hell, S. Nobel lecture. Nanoscopy with freely propagating light. Rev. Mod. Phys. 87, 1169–1182 (2015).
8. Monroe, C. et al. Large-scale modular quantum-computer architecture with atomic memory and photonic interconnects. Phys. Rev. A 89, 022317 (2014).
9. Eschner, J., Raab, Ch., Schmidt-Kaler, F. & Blatt, R. Light interference from single atoms and their mirror images. Nature 413, 495–498 (2001).
10. Biercuk, M., Uys, H., Britton, J., VanDevender, A. & Bollinger, J. Ultrasensitive detection of force and displacement using trapped ions. Nature Nanotech. 5, 646–650 (2010).
11. Schlosser, N., Reymond, G., Protsenko, I. & Grangier, P. Sub-Poissonian loading of single atoms in a microscopic dipole trap. Nature 411, 1024–1027 (2001).
12. Karpa, L., Bylinskii, A., Gangloff, D., Cetina, M. & Vuletić, V. Suppression of ion transport due to long-lived subwavelength localization by an optical lattice. Phys. Rev. Lett. 111, 163002 (2013).
13. Schmiegelow, C. et al. Phase-stable free-space optical lattices for trapped ions. Phys. Rev. Lett. 116, 033002 (2016).
14. Alberti, A. et al. Super-resolution microscopy of single atoms in optical lattices. New J. Phys. 18, 053010 (2016).

15. Noek, R. et al. High speed, high ﬁdelity detection of an atomic hyperﬁne qubit. Opt. Lett. 38, 4735–4738 (2013).
16. Burrell, A., Szwer, D., Webster, S. & Lucas, D. Scalable simultaneous multiqubit readout with 99.99% single-shot ﬁdelity. Phys. Rev. A 81, 040302 (2010).
17. Streed, E., Norton, B., Jechow, A., Weinhold, T. & Kielpinski, D. Imaging of trapped ions with a microfabricated optic for quantum information processing. Phys. Rev. Lett. 106, 010502 (2011).
18. Shu, G., Chou, C., Kurz, N., Dietrich, M. & Blinov, B. Efﬁcient ﬂuorescence collection and ion imaging with the ‘tack’ ion trap. J. Opt. Soc. Am. B 28, 2865–2870 (2011).
19. Leibfried, D., Blatt, R., Monroe, C. & Wineland, D. Quantum dynamics of single trapped ions. Rev. Mod. Phys. 75, 281–324 (2003).
20. Goodman, J. Introduction to Fourier Optics (McGraw-Hill, 1996). 21. Iglesias, I. Parametric wave-aberration retrieval from point-spread function data
by use of a pyramidal recursive algorithm. Appl. Opt. 37, 5427–5430 (1998). 22. Barakat, R. & Sandler, B. Determination of the wave-front aberration function
from measured values of the point-spread function: a two-dimensional phase retrieval problem. J. Opt. Soc. Am. A 9, 1715–1723 (1992). 23. Avoort, C., Braat, J., Dirksen, P. & Janssen, A. Aberration retrieval from the intensity point-spread function in the focal region using the extended Nijboer– Zernike approach. J. Mod. Opt. 52, 1695–1728 (2005). 24. Novotny, L. & Hecht, B. Principles of Nano-Optics (Cambridge Univ. Press, 2006). 25. Speidel, M., Jonáš, A. & Florin, E. Three-dimensional tracking -
of ﬂuorescent nanoparticles with subnanometer precision by use of off-focus imaging. Opt. Lett. 28, 69–71 (2003). 26. Nelson, K., Li, X. & Weiss, D. Imaging single atoms in a three-dimensional array. Nature Phys. 3, 556–560 (2007). 27. Riley, W. Handbook of Frequency Stability Analysis Special Publication 1065 (NIST, 2008). 28. Barnes, J. & Allan, D. Variances Based on Data with Dead Time Between the Measurements Technical Note 1318 (NIST, 1990). 29. Thompson, R., Larson, D. & Webb, W. Precise nan-
ometer localization analysis for individual ﬂuorescent probes. Biophys. J. 82, 2775–2783 (2002). 30. Quan, T., Zeng, S. & Huang, Z. Localization capability and limitation of electronmultiplying charge-coupled, scientiﬁc complementary metal-oxide semiconductor, and charge-coupled devices for superresolution imaging. J. Biomed. Opt. 15, 066005 (2010). 31. Major, F. & Dehmelt, H. Exchange-collision technique for rf spectroscopy of stored ions. Phys. Rev. 170, 91–107 (1968). 32. Berkeland, D., Miller,-
 J., Bergquist, J., Itano, W. & Wineland, D. Minimization of ion micromotion in a Paul trap. J. Appl. Phys. 83, 5025–5033 (1998). 33. Keller, J., Partner, H., Burgermeister, T. & Mehlstäubler, T. Precise determination of micromotion for trapped-ion optical clocks. J. Appl. Phys. 118, 104501 (2015). 34. Anderson, D. Alignment of resonant optical cavities. Appl. Opt. 23, 2944–2949 (1984).
Acknowledgements
This work is supported by the US Army Research Ofﬁce (ARO) with funds from the Intelligence Advanced Research Projects Activity (IARPA) Multi-Qubit Coherent Operations (MQCO) Program and the ARO Atomic and Molecular Physics Program, the Air Force Ofﬁce of Scientiﬁc Research (AFOSR) Multidisciplinary Research Program of the University Research Initiative (MURI) on Quantum Measurement and Veriﬁcation, the Defense Advanced Research Projects Agency (DARPA) Quiness Program, the Army Research Laboratory-
 Center for Distributed Quantum Information, the National Science Foundation (NSF) Physics Frontier Center at the Joint Quantum Institute (JQI) and the NSF Physics at the Information Frontier Program. The authors also acknowledge support from the Imaging Core at the University of Maryland.
Author contributions
All authors contributed to the design, construction and carrying out of the experiment, discussed the results and commented on the manuscript. J.D.W.-C. and K.G.J. analysed the data and performed the simulations. J.D.W.-C., K.G.J. and C.M. wrote the manuscript. B.N. and J.M. contributed equally to both the design and construction of the experiment.
Additional information
Supplementary information is available in the online version of the paper. Reprints and permissions information is available online at www.nature.com/reprints. Correspondence and requests for materials should be addressed to J.D.W.C.
Competing ﬁnancial interests
The authors declare no competing ﬁnancial interests.

610

NATURE PHOTONICS | VOL 10 | SEPTEMBER 2016 | www.nature.com/naturephotonics

© 2016 Macmillan Publishers Limited, part of Springer Nature. All rights reserved.

NATURE PHOTONICS DOI: 10.1038/NPHOTON.2016.136

ARTICLES

Methods
Aberration characterization. Although optical aberrations can be described in
terms of a Taylor expansion of the object height and pupil coordinates, Zernike polynomials Znm(ρ, θ) are better suited for this because they form an orthogonal basis set of functions on a unit disk. Zernike polynomials are expressed in polar coordinates ρ and θ as35

Znm(ρ, θ) =

NnmRmn (ρ) cos(mθ) NnmRmn (ρ) sin(mθ)

for m ≥ 0 for m < 0

Nnm =

2(n + 1) 1 + δm0

R|nm|

(ρ)

=

(n−|m|)/2 s=0

s![(n

(−1)s + |m|)/

2

−

s]!

n−2s

(6)

(n − s)!

ρ

× [(n − |m|)/2 − s]! ρp

where n is an integer number and m can only take values n, n – 2, n – 4, …, –n for each n. The radial coordinate is scaled to the exit pupil radius ρp (the radius of the image of the input aperture at the camera). Importantly, each term of this polynomial expansion has a one-to-one relation with a speciﬁc kind of aberration.

Given the Zernike expansion of a wavefront, we can calculate its deviation from a perfect wavefront using the cmn coefﬁcients of equation (1).

Dead time corrections. Dead times were corrected using the Allan B-functions28 (deﬁned in Supplementary Section V):

σ

2

(τ)

=

σ

2

(2, MT0, Mτ B3 (μ)B2 (μ)

0

)

(7)

where μ is the noise model coefﬁcient, in the range –1 < μ < 1, M is the binning
parameter, T0 is the time between data acquisitions, and τ0 is the sampling time. Dead times are then deﬁned as tdead = T0 – τ0 for single acquisition times. The integration time for the Allan variance is τ = M τ0. The noise model μ upon which the B-functions depend at each τ are found solving

B1 B3

(μ) (μ)

=

σ

2

σ2(N, T, (2, MT0,

τ) Mτ0

)

(8)

for μ, with σ2(N, T, τ) deﬁned as the standard variance.

Reference
35. Wyant, J. & Creath, K. Applied Optics and Optical Engineering Vol. XI (Academic, 1992).

NATURE PHOTONICS | www.nature.com/naturephotonics © 2016 Macmillan Publishers Limited, part of Springer Nature. All rights reserved.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:57.971Z
- **Text Length:** 28717 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
