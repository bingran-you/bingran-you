# PDF Document: (Two-photon Polymerization) Two-photon lithography for three-dimensional fabrication in micronanoscale regime A comprehensive review.pdf

**File Path:** (Two-photon Polymerization) Two-photon lithography for three-dimensional fabrication in micronanoscale regime A comprehensive review.pdf

**Processed Date:** 2026-02-10T18:15:01.215Z

**File Size:** 27599.14 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 1038

**Title:** (Two-photon Polymerization) Two-photon lithography for three-dimensional fabrication in micro/nanoscale regime: A comprehensive review

**Collection:** Ion Trap > Fundamental

---

## Extracted Text Content

Optics & Laser Technology 142 (2021) 107180
Contents lists available at ScienceDirect
Optics and Laser Technology
journal homepage: www.elsevier.com/locate/optlastec
Review
Two-photon lithography for three-dimensional fabrication in micro/ nanoscale regime: A comprehensive review
V. Harinarayana, Y.C. Shin *
Center for Laser-based Manufacturing, School of Mechanical Engineering, Purdue University, West Lafayette, IN 47907, USA

ARTICLE INFO
Keywords: Microfabrication Nanofabrication Resolution Two-photon lithography Nonlinear absorption Metamaterials

ABSTRACT
With the advent of femtosecond lasers in the early 1990s, ultrafast laser processing has proven to be an imperative tool for micro/nano machining. Two-photon lithography (TPL) is one such unique microfabrication technique exploiting the nonlinear dependency of the polymerization rate on the irradiating light intensity to produce true three-dimensional structures with feature sizes beyond the diffraction limit. This characteristic has revolutionized laser material processing for the fabrication of -
micro and nanostructures. In this paper, an overview of TPL including its working principle, experimental setup, and materials is presented. Then, the effect of resolution with a focus on techniques adopted to improve the final resolution of the structures is covered. Insights to improve throughput and speed of fabrication to pave a way for industrialization of this technique are provided. Finally, TPL for microfabrication of structures with the emphasis on metamaterials is thoroughly reviewed and-
 presented.

1. Introduction
Lithography and polymerization of photosensitive materials using light as the source for initiation of solidification is a well-established area of research in science and technology, driven by the escalating demand for smaller features and complex structures. Lasers have proven to be a powerful tool for the fabrication of complex structures in small length scales. Femtosecond laser-matter interactions first observed in the early 1990s are significantly different from the interactions of longer pu-
lses or continuous wave lasers with the matter. When a material is exposed to a femtosecond laser beam, power density is very high, and the laser-matter interaction time is very short resulting in rapid photon energy transfer. This high transient photon fluence density induces several non-linear effects resulting in sub-diffraction feature sizes. The rapid development of such ultrafast lasers has led the way to the industrialization of laser-based systems for manufacturing and many other applicati-
ons.
Additive manufacturing (AM) in the nanoscale regime is the fabri­ cation of 3D structures that contain geometric features smaller than 1 µm in at least one dimension. Many manufacturing methods are avail­ able to produce nano-objects, but only a few are suitable for AM in the aforementioned regime. Dip-pen nanolithography (DPN) [1], electron beam lithography (EBL) [2], direct laser writing (DLW) and electro-

hydrodynamic jet printing (EHD) [3] are some of the promising tech­ niques to obtain high resolution fabricated structures.
Direct-writing technologies are capable of manufacturing threedimensional structures with high spatial resolution and dimensional accuracy [4,5]. Laser-based direct writing methods are especially appealing for the fabrication of 3D microstructures [6]. Among the many laser-based techniques, two-photon lithography (TPL) or also known as two-photon polymerization (TPP) is suited best for the con­ struction of well-defined 3D micro/nanostructures because it opens the door to building structures with -
unmatched, high spatial resolution beyond the diffraction limit [7]. Additionally, local polymerization and sub-diffraction-limit feature sizes can be attained by employing laser beams with intensities just above the threshold for polymerization. It is unique in the sense that it enables the construction of true threedimensional freestanding structures.
Standard photolithography, popular for the fabrication of twodimensional structures, is based on one-photon absorption in a photo­ sensitive medium. Two-photon lithography (TPL) is a ground-up and non-linear [8–11] process employed in fabricating complex, intricate 3D micro and nanostructures in which the photoresist responds to the square of the intensity and offers an enhanced resolution. Compared to the classic stereolithography (SLA) and the selective laser sintering (SLS), TPL provides superi-
or resolution, and the process of layer-by-

* Corresponding author. E-mail address: shin@purdue.edu (Y.C. Shin).
https://doi.org/10.1016/j.optlastec.2021.107180 Received 21 January 2021; Received in revised form 25 March 2021; Accepted 20 April 2021 Available online 4 May 2021 0030-3992/© 2021 Elsevier Ltd. All rights reserved.

V. Harinarayana and Y.C. Shin
layer fabrication and recoating of wiper blades used in SLA and SLS are eliminated. One of the key aspects of TPL is its capability to produce features smaller than the point of a laser beam projected. The funda­ mental phenomenon on which the operation of TPL is dependent is twophoton absorption (TPA). Photopolymerization refers to the process of using light as an energy source to induce the conversion of small un­ saturated molecules in the liquid state to solid macromolecules through polymeriza-
tion reactions. Although other radiations, including x-ray, gamma-ray, microwave, and even electron and ion beams can induce similar curing reactions, photopolymerization deals with those that are induced by light in the UV, IR to visible spectral region. The monomers or oligomers in the liquid state upon light excitation may be solidified by two means: polymerization and crosslinking to form long chains of the polymer. Although UV stereolithography, inkjet printing and multi-jet printing are capa-
ble of producing true 3D structures, the final resolu­ tion is only in the micrometer regime. On the other hand, techniques like EBL and EHD jet printing can produce structures with resolution in tens of nanometers but are limited to only 2D structures with high aspect ratios. TPL is unique in the way that it allows true 3D fabrication of structures with superior spatial resolution. In TPL, photoinitiators are generally added to the monomer up to a few weight percents (wt%) to absorb at the wavele-
ngth of exposure and to assist the process of poly­ merization. Although efficient TPA has been demonstrated at different wavelengths of excitation light such as in the visible spectrum (400 nm) with effective photoinitiator absorption band in the deep-ultraviolet spectrum [12], at near-infrared wavelengths of excitation light, TPA of photoinitiators developed for absorption at wavelengths different from NIR regime are not efficient [13] and most of the commercially available resins exhibit good a-
bsorption at NIR wavelengths of excitation light. In addition, Malinauskas and coworkers experimentally demonstrated the strongest TPA phenomenon in commercially available resins when laser irradiation with a wavelength near-infrared was utilized [14]. Hence, the phenomenon of TPA is observed effectively when light with exci­ tation wavelength near-infrared (600–1064 nm) region is employed.
In 1931, Go¨ppert-Mayer first predicted the existence of TPA [15]. Accordingly, the SI unit for the TPA cross-section (δ) is named Go¨ppertMayer (GM). However, the effect was not physically realized until the invention of lasers in 1960. Two-photon photopolymerization is based on vat polymerization (VP) and was first reported by Pao and Rentzepis in 1965 [16]. After the development of simple solid-state femtosecond lasers in the late 1980s and early 1990s, writing structures via multiphoton polyme-
rization was first demonstrated in 1997 by Maruo et al. [17] and was widely acclaimed for its ability to fully fabricate 3D structures. However, there are several factors that influence the pro­ cessing time, accuracy, and quality of the developed structures. Input power, exposure dose and the type of photopolymer play a vital role in

Optics and Laser Technology 142 (2021) 107180
defining the properties and applications of the structures. The true 3D fabrication characteristic of TPL is well-suited for the fabrication of complex shapes and facilitates the construction of metamaterials. This paper emphasizes the progress in the fabrication of three-dimensional metamaterials via TPL.

2. Two-photon absorption

Photopolymerization is a photochemical reaction that takes place

when photon energy is provided to a matter. Liquid materials can be

converted into solid upon light exposure either through photo-

crosslinking or photopolymerization. Photopolymerization is the for­

mation of polymer chains initiated by light exposure to the monomer.

The two-photon photopolymerization technique is versatile and

applicable to the fabrication of many materials in the nanoscale regime.

As indicated by the name, the resins are polymerized by absorbing two

photons at a longer wavelength, usually in the near-infrared (NIR)

spectral region. The two-photon process has mainly two advantages over

single-photon absorption that is used in conventional rapid prototyping.

First, most of the commercially available polymers have negligible

linear absorption in the near-infrared (NIR) region, and therefore the

laser beam penetrates deeply into materials and directly induces poly­

merization from inside without initiating any photochemical process

outside of the focal volume; secondly, the quadratic dependence of

polymerization rate on the light intensity enables 3D spatial resolution,

and the accuracy is far better than that achieved in single-photon pro­

cesses. In the process of two-photon absorption (TPA), the laser source is

usually constituted of a solid-state laser (Ti-sapphire) and an ultrashort

pulse-width of less than 100 fs oscillator operating at a wavelength near-

infrared regime (~800 nm) to obtain sufficient peak intensity at a low

average laser power. However, nowadays second harmonic fiber lasers

are being used extensively as they are more affordable and reliable and

operate at ~ 780 nm [18]. This controlled laser beam is tightly focused

onto a photocurable resin through a high numerical aperture (NA)

objective lens, which consequently creates photo density profiles with

an equal number of photons at all cross sections on the focused spot. The

resin is exposed only within the focal volume of the beam generally

known as voxel [19] and the process of two-photon polymerization

(TPP) is restricted only to this volume giving rise to a 3D resolution. A

high numerical aperture objective lens is used for closely focusing the

laser onto the resin, which enables achieving a high photon density near

the focal point to fabricate sub 100 nm structures. In 3D micro­

fabrication,

the

voxel

size

is

proportional

to

1 (NA)4

.

Thus,

a

large

NA

value

is crucial for superior resolution. Generally, NA ~ 1.4 is utilized in the

case of oil-immersion lenses for realizing high fabrication resolution.

Although the resolution of the TPL technique is generally related to sub-

Fig. 1. (a) Schematic of non-linear absorption. (b) depiction of the laser intensity distribution during two-photon absorption [22]. 2

V. Harinarayana and Y.C. Shin

Optics and Laser Technology 142 (2021) 107180

Fig. 2. Schematic of two-photon polymerization setup [23].

wavelength, its axial and lateral resolution are still fundamentally governed by Abbe’s Law, which states that the resolution of an optical microscope is inversely dependent on its aperture [20]. The major advantage of this technique is that outside the region of the focal point, the incident light is below the exposure threshold of the photosensitive medium and can pass through it with no photo-chemical reaction evident beyond the voxel.
Zhou et al. [21] presented a theoretical relationship between the voxel diameter and the density of radicals.

d(P,

t)

=

( ω0⋅ ln

σ 2 I02 nτ)1/2 c

(1)

where d is the voxel diameter as a function of input laser power, P, and

total irradiation time, t. ω0 is the beam waist, σ2 is the effective two-

photon absorption cross-section, I0 is the photon flux at the point of

maximum intensity, τ is the laser pulse width, n is the number of pulses

and c is defined below as

[

]

c = ln ρ0 ρ0 − ρth

(2)

where ρ0 is the density of free radicals at the focal plane and ρth is the threshold density of free radicals. Similarly, the axial length of the voxel
is described as

l(P,

t)

=

(( 2zR⋅ ln

σ2 I02 nτ)1/2 c

−

)1/2 1

(3)

where zR is the Rayleigh length given by

zR

=

πω20 λ

(4)

The ability of the resin to absorb two photons simultaneously, which assists the laser beam in bypassing the usual diffraction limit, plays a major role in this technique. Fig. 1(a) illustrates the process of twophoton excitation upon light irradiation. TPA can transpire through two excitation processes, namely, sequential excitation and simulta­ neous two-photon excitation. In sequential excitation, a photon is absorbed by the electrons, which leads to a real intermediate state being populated by-
 these electrons with a well-defined lifetime of 10-4 to 10-9 s. From these electrons, a small population goes on to absorb the second photon in order to complete the process of TPA while the majority of them emit energy and return to their ground state. In contrast, the

second process (simultaneous excitation) does not involve any such in­ termediate state. A virtual state is created when the electrons interact with the first photon and the second photon is absorbed if and only if it approaches within the virtual state lifetime given as 10-15 s in order to complete the process of TPA. To achieve this, a high intensity laser source is essential.
For DLW via simultaneous two-photon absorption, a high-powered femtosecond pulsed laser generated from a mode-locked Ti:Sapphire oscillator or any other MHz-rate oscillator is usually utilized because of its high bandwidth. Fig. 2 shows a typical femtosecond laser setup for TPL. In principle, by optimizing the exciting laser wavelength to assist nonlinear absorption, structures can be fabricated at the same rate as the repetition rate of the laser. Some of the parameters best suited for TPL are av-
erage input laser power of several milliwatts – 10 W, repetition rate of 1 kHz – 100 MHz, and central wavelength of 515 nm – 1064 nm depending on applications. Several other optical elements such as beam isolator (Faraday isolator) and shutter are used in combination to pre­ vent back reflection and as an obstruction for the beam when not in use. An acoustic optical modulator can also be used as a shutter. Addition­ ally, a beam splitter can be utilized for polarization and spectroscopy. Step size-
 and dwell time are important parameters that define the res­ olution, feature size, accuracy, and uniformity of the patterned struc­ ture. The laser input power can be manipulated by a variable attenuator comprised of a half-wave plate and a polarizer. A beam expander can be utilized to illuminate the back aperture of the objective completely. Generally, for enhanced resolution, high numerical aperture objective lenses are used. Depending upon the application, dry lens or oil im­ mersion lenses a-
re utilized. When immersion fluid is used to obtain high NA and enhanced resolution, glass is usually used as the substrate because glass and the photoresist have almost the same index of refraction. For metamaterial applications, particularly terahertz fre­ quencies, a silicon substrate with a high resistivity is utilized and dry lenses with high NA (0.90–0.95) are used due to the significant differ­ ence between the refractive indices. A CCD camera at the back of the objective allows monitoring -
of the process while running. 3D stages with high precision and resolution can be employed for 3D scanning of the laser beam relative to the sample movement. Improved scanning speed can be achieved via two-dimensional galvanometer scanners integrated with a one-dimensional piezoelectric stage. With the advent of digital micromirror devices (DMDs), micro-lens arrays (MLAs), spatial light modulators (SLMs), and high precision 3D linear motor stage, fabrica­ tion of microstructures over large areas, -
replication of structures with high speed and accuracy has become a reality.

3

V. Harinarayana and Y.C. Shin

In DLW or TPL, pulsed femtosecond lasers are used, and the spatial

bell-shaped Gaussian distribution is well suited for the electric field strength, E (V/m), fluence, F (J/cm2), intensity, I (J/cm2), and exposure dose, D (J.s/cm2).

()

2r2

E(r) = E0exp − r02

(5)

2E(r)

F = πr02

(6)

where r0 is the beam waist, and r is the radius of the beam. Generally, TPL requires a thin glass slide, a lens and immersion oil (to
increase the resolving power of the microscope) that helps the laser beam to strictly focus to a fine point. However, one of the major drawbacks of TPL is its limitation in throughput caused by seriality. This makes it cumbersome and time-consuming to pattern large areas or to produce multiple structures simultaneously. Some of the alternatives for such limitations are optical holography or interference lithography [24], or TPL with optical masks [25–27].
It is noteworthy that the viscosity of the system plays a significant role in influencing the reaction kinetics. The Stokes-Einstein and Smo­ luchowski equation links the dependence of the diffusion coefficient with the viscosity [28].

8000 × R × T

kd = 3 × η

(7)

where kd is the diffusion coefficient (dm3/mol/s), R is the universal gas constant (J.K/mol), T is the temperature of the system (K), and η is the viscosity (Pa•s). From the above equation, the greater the viscosity of the system is, the faster the polymerization process is. However, this relationship is valid only when the viscosity of the system is not extremely low or high. Initially, if the viscosity is too high, then the propagation of the polymerization is diffusion-limited and if it is too -
low there is a chance of the structure floating to the top. Mechanical failures can also occur during the development when the liquid cohesive forces are greater than the restoring forces of the polymer [29]. The cohesive forces emerge due to the decreasing level of resin, which forms a concave meniscus between the features of the polymerized structure. These forces can cause the bowing of some parts because of the scaling effects of surface tension forces in the microscale. These effects can be o-
vercome by making the walls of the fabricated structure thicker and stronger. However, the fabrication time is increased, and postprocessing of the structure is required to obtain accurate dimensions. An alternative technique is to perform rinsing using supercritical CO2 drying [30]. This method is widely used as the surface tension effects are almost eliminated because supercritical fluids have properties similar to both gases and liquids, thus eliminating gas–liquid interfacial effects.

3. Materials

Most of the materials used for TPL are readily available, standard materials, which are applicable to conventional lithographic processes. Photoresists or photocurable resins are largely made up of two compo­ nents: photo-initiators (radical polymerization) or a photoacid generator (PAG) (cationic polymerization) and a monomer. An optional inhibitor may be utilized, which assists in the termination of the polymerization process. A material whose solubility decreases on exposure to light is called -
a negative-tone photoresist [31]. In the two-photon polymeriza­ tion (TPP) process, free radicals are generated through light exposure onto a photo-initiator, followed by the cross-linking of the monomers/ oligomers to form long polymer chains. The polymerization eventually terminates via interference of radicalized monomer with active species, or interference with radicalized monomers or via depletion of monomers as a consequence of the action of inhibitors. On the other hand, with positive-tone -
photoresists, TPA breaks down the polymeric chains and

Optics and Laser Technology 142 (2021) 107180
makes them soluble. Hence inverse structures are written. In general, TPP is applied to radical polymerization where the active species react with the monomers to form high molecular weight materials. The rate of polymerization via radical mechanism is high for acrylate-based monomers [32,33], which helps in reducing process times. Resins uti­ lized for TPL must possess certain characteristics such as transparency in the visible and near IR frequency regime to allow laser pulses penetrate deep int-
o a region inside the resin without any single-photon excitation. The resin must attain fast curing speed and the polymerization must be confined to the focal spot with negligible scattering [34]. High viscosity, high glass transition temperature post-curing, and resistance to shrinkage are some of the properties of a suitable resin for TPL appli­ cation. Shrinkage is a common disadvantage associated with polymers due to the change in density before and after curing. It is necessary to pre-compens-
ate for this effect to obtain a well-defined 3D structure [35]. The most popular materials in the case of two-photon lithography are acrylate- and epoxy-based resins because of their high optical trans­ parency and applications.
SU8 is one of the most widely used commercialized photoresists [10,33,36–38] because of its availability and suitable properties for the TPL technique. One of the unique properties of SU8 is its two-step crosslinking process. Firstly, a strong acid is established during the exposure, which is secondly followed by an acid-initiated, thermally driven epoxy cross-linking during the post-bake process [39]. The possibility of 3D fabrication of SU8 via TPL was first demonstrated by Witzgall’s group in 1-
998 [10]. They employed single shots of laser pulses from a femto­ second amplifier for the fabrication of small three-dimensional dots via TPL. More complex 2D and 3D structures were later fabricated by various groups incorporating various photo-initiators and novel methods of fabrication. High aspect ratios in the range of 50:1 have also been achieved by Teh et al. [36] using low numerical aperture optics on the SU8 photoresist. SU8 can also be combined with various other mixtures/dyes to obtain-
 functional properties and for in-situ applica­ tions [40]. SU8 being a negative-tone photoresist leaves behind a welldefined 3D structure once it is exposed to the laser beam while the un­ exposed portion is generally soluble in developing solutions. Because of its unique optical properties, SU8 has been considered as a feasible and effective polymer for the fabrication of photonic crystals and meta­ materials. Although the resolution that can be attained with SU-8 via TPL is poor compared to tho-
se with some radical systems, SU-8 is thermally stable, transparent in the visible spectrum and attains high resistance to solvents, making it highly suitable for these applications.
Other materials like hydrogels have been extensively used for diverse applications in the field of tissue engineering and drug delivery [41–44]. Lucirin® TPO-L, Irgacure®-369, Irgacure®-184 are some of the photoinitiators largely used for radical polymerization in TPL methods because of their price and availability. Rose Bengal is also a common water-soluble photoinitiator suitable for TPL at 800 nm. Among the above-mentioned photo-initiators, Lucirin® TPO-L is found to be better due to its availa-
bility in solid and liquid form, making it suitable for high loading and its easily soluble property in most of the commercially available resins [45]. Although the two-photon absorption coefficient and the TPA cross-sections are very small compared to IR absorbing dyes, the fabricated structures using Lucirin® TPO-L as the photoinitiator have exhibited superior resolution at low laser power, result­ ing in a quantum yield of 0.99 [46]. Functionalizing polymers by incorporating other materials for-
 specific applications has also been demonstrated [47,48].
TPL of three-dimensional microstructures using non-photosensitized polymers, organic–inorganic hybrids and ceramics have also been pur­ sued by various groups [49–52]. Additionally, organic/inorganic photosensitive material with a higher concentration of inorganic content can be utilized to fabricate inorganic 3D photonic crystal structures by TPL with appropriate thermal post-treatment. ORMOCER® is one such silicate-based photopolymer, which allows the fabrication of highresolution 3D structures -
with enhanced mechanical properties and

4

V. Harinarayana and Y.C. Shin

Optics and Laser Technology 142 (2021) 107180

Fig. 3. (a) Bovine serum albumin (BSA) structure. (b) Photopolymerized BSA capturing a live C-elegans worm [57].

Fig. 4. (a) 3D scaffold for tissue engineering. (b) 3D helix-based photonic crystal structure template [55].

fine-tunable optical properties for photonic applications with optical bandgaps. Hybrid polymers provide more flexibility in design and impart enhanced mechanical properties to the structure, which are the main aspects in drug delivery and tissue engineering applications. Ovsianikov et al. [50] developed microneedles via two-photon poly­ merization technique for drug delivery and other biomedical applica­ tions utilizing ceramic-polymer hybrid material for enhanced mechanical properties and greate-
r aspect ratio. Similarly, Emons’ group [53] utilized a zirconium-based inorganic–organic hybrid polymer producing structures with a 45 nm resolution and high structural

stability. Proteins and metals are materials other than polymers, which have
been utilized in a broad variety of applications for TPL. Inexpensive proteins like bovine serum albumin (BSA), fibrogen and collagen have been used to fabricate single/multi-storey scaffolds for cell growth and tissue engineering [54,55]. Fig. 3 shows a simple 3D BSA scaffold for the assessment of compatibility and stability of the structure to entrap and grow enzymes and microbes. Fig. 4 depicts the difference in size (~70 times) between a 3D scaffold for tissue engineering and a 3D photonic cry-
stal. TPL has great potential for the construction of tailored and

Fig. 5. (a) Schematic illustration of the formation of silver stripe patterns through the multiphoton-induced reduction process. In the absence of NDSS, varisized particles with different shapes are formed, whereas particles with uniform size and shape are created by adding NDSS. (b) free-standing 3D silver pyramids on a substrate. From [59].
5

V. Harinarayana and Y.C. Shin

Optics and Laser Technology 142 (2021) 107180

Fig. 6. (a) Reaction synthesis of the metal precursor. (b) metal precursor, acrylate-resin and photoinitiator mixed to form the photoresist. (c)Schematic of TPL process. (d-e) fabrication and pyrolysis. (f-h) SEM images of the octet nanolattice. (i-j) representative nickel nanolattice. From [69].

functional biostructures in the micro/nanoscale. However, the major drawbacks of using proteins or hydrogels are: i) the mechanical prop­ erties of cross-linked proteins are poor, which limits the structural design, ii) low viscosity of aqueous photoresists limits the complexity of the structure, and iii) high photosensitivity of proteins can give rise to structural distortions and inhomogeneity. A detailed review of the ad­ vantages, disadvantages, and applications of various commercial and custo-
mized photoresists can be found in ref. [56].
Metals are of paramount importance in the fabrication of electro­ magnetic, photonic metamaterials to realize supernatural effects, viz., invisibility cloaking and superlensing. Additionally, metals are pre­ dominant in micro/nanoelectronic applications. Since the inception of microchips, researchers have been continually investigating several techniques to achieve metallic structures in the nanoscale regime. Ishi­ kawa and co-researchers [58] proposed one such novel fabrication procedure based on-
 two-photon induced reduction of metal ions for 3D micro/nanostructures. A femtosecond laser beam was tightly focused onto metal complex ions, which were photo-reduced to metal nano­ particles by simultaneous absorption of two photons. Feature sizes in the range of few tens of micrometers were achieved. Metals are of supreme importance in plasmonic and metamaterial applications. Since the feature sizes for plasmonic applications are in the range of few hundreds of nanometers or even smaller, the m-
ajor hindrance for superior reso­ lution is the unwanted crystal growth during irradiation. Cao and co­ workers [59] overcame this problem by introducing a dopant surfactant molecule as a crystal growth inhibitor. As shown in Fig. 5, particles with uniform size and shape were obtained by employing a crystal growth inhibitor. The feature size achieved was ~ 180 nm for 3D nanostructure and ~ 120 nm for 2D silver patterns on the substrate. TPL integrated with other technologies like laser-induced for-
ward/backward transfer

(LIT) can also produce nanodroplets with superior resolution and enhanced mechanical and optical properties for metamaterial and plasmonic applications [60].
Formanek and colleagues [61], in their experiment, demonstrated 3D metallic-polymer periodic structures spread out over a large area for microelectronics and metamaterial applications. Initially, a large num­ ber of 3D polymer structures were fabricated in parallel using multi-lens array and regenerative amplifiers for the laser beam. Subsequently, the substrate was coated for hydrophobic action and the polymer structures were pre-treated with SnCl2. Finally, a selective silver overcoating solely -
on the polymer structures was realized in producing more than 700 components. In 2000, Wu’s group [62] demonstrated two-photon photographic production of 3D metallic structures within a dielectric matrix. The three-step procedure included the use of sol–gel, metal aqueous solution matrix and TPL for the creation of the latent image. This was followed by two-photon exposure for the development of the image into a 3D structure and finally a post-treatment and fixing step to produce 3D metallic struc-
tures. Similarly, Shukla et al. [63] presented a novel method for producing metallic nanostructures with subwavelength resolution using TPL in a polymer matrix. They employed in-situ initiated reduction of metal salt and simultaneous polymerization of the negative-tone photoresist via two-photon absorption within a photoresist film. Uniform gold nanoparticles as small as ~ 10 nm were achieved via two-photon writing in gold precursor doped photoresist. Tosa et al. [64] also demonstrated the fabrica-
tion of metallic nanowires via simultaneous photoreduction and polymerization through TPA. According to their experiment, an iron (III) citrate complex acting as a photo initiator, upon excitation, generated iron (II) citrate that reacts with the metallic cations producing metals. To maintain homogeneity in the dispersion and avoid precipitation of metallic salt within the solution

6

V. Harinarayana and Y.C. Shin

Optics and Laser Technology 142 (2021) 107180
Fig. 7. Schematic demonstration of the feature size reduction in TPL by decreasing the writing laser beam energy dose to the polymerization threshold of the resin. (a) single beam approach. (b) feature size vs writing laser beam energy dose without in­ hibition beam. (c) schematic illustration of feature size reduction in the two-beam approach by increasing the intensity of the inhibition beam. (d) feature sizes of freestanding lines versus the intensity of the in­ hibition beam, under the exposur-
e of writing beam with different energy doses. From [70].

before the exposure, the water-soluble polymer was utilized. One key advantage of polymer-metal or polymer-ceramic processing is obtain­ ing, in bulk, the strengthening effects associated with the material in thin film form factor [65]. The thickness of the obtained structures in the nanometer regime and the construction of templates with resolution in a few tens of nanometers are currently viable only through two-photon lithography.
In 2006, Tanaka et al. [66] employed TPL for the fabrication of 3D metallic, electrically conductive nanostructures. In their study, it was found that the metallic nanostructures were highly electrically conductive and had low resistivity values unlike the structures obtained by Stellacci et al. [67] via laser and electron beam induced growth of metal nanoparticles inside a polymer. Similarly, Nakamura et al. [68] conducted elemental analysis and measurement of electrical perfor­ mances of 3D silv-
er structures fabricated via TPL and simultaneous reduction of the metal. The results comply with the results obtained by Tanaka et al. [66]. Recently, Vyatskikh and colleagues [69] developed a TPL based technique to fabricate 3D nano-architected metals with ~ 100 nm resolution. This breakthrough was achieved by first synthesizing a hybrid-organic–inorganic material constituting nickel (Ni) clusters producing a metal-rich photoresist as shown in Fig. 6. Subsequently, the photoresist, after the pol-
ymerization process, underwent pyrolysis to eliminate the organic component producing a greater than 90% in wt Ni containing 3D structure. Nanolattices such as octet architecture were fabricated employing this method, which proves to be an imperative factor in the fabrication of optical and mechanical metamaterials. The main advantage of this technique lies in the ease of process without compromising the resolution.
However, beyond the melting point of the metal during laser irra­ diation, sudden unwanted growth, ablation effects, or a drastic change in the absorption coefficient of the metal can degrade the controllability of fabrication attributes such as resolution and the shape of the pattern being written by the TPL technique. Therefore, for metamaterial appli­ cations, a polymer template is usually first fabricated via TPL and then coated with metal nanoparticles using appropriate techniques. The contin-
uous metallic film could be deposited on the surface of the poly­ mer lattice through either electroless plating, atomic layer deposition (ALD), sputtering or electroplating, and subsequently the template could

be removed by dissolving or chemical etching.
4. Resolution
The minimum lateral and axial distance at which two adjacent fea­ tures can be distinctly patterned without any overlap is defined as the writing resolution. The nonlinear absorption behavior exhibited during two-photon lithography extends the possibility to exceed the diffraction limit and fabricate features with sub-diffraction limited resolution. In 2001, Kawata et al. [7] demonstrated the minimum resolution of 120 nm with fine feature size achieved via TPL. Since then, for a long time, researc-
hers have been attempting to obtain sub 100 nm feature sizes and resolution. In 2013, Gan et al. [70] reported a feature size of 9 nm and 52 nm two-line resolution achieved via TPL by tweaking certain pa­ rameters viz. exposure dose, input laser power, inhibition laser power. In addition, this is one of the smallest feature sizes obtained via TPL in the published literature. As shown in Fig. 7, laser power, exposure dose and concentration of active species in the voxel after absorption are vital p-
arameters characterizing the writing resolution, linewidth and feature size of the structure. Appropriate optimization of these parameters re­ sults in superior resolution. The voxel volume varies directly with the cube of the wavelength of the light source. This implies smaller the wavelength, the smaller the voxel dimensions become. Schwarz et al. [71] demonstrated that the developed linewidth and resolution were much superior for a TPL fabrication when compared to one photon exposure. However, -
in practice, the concentration of active species in near surroundings of the voxel increases with exposure due to the presence of residual active species. This effect produces undesirable polymerization surrounding the voxel, resulting in thick lines and adversely affected spatial resolution. Scanning speed also plays a vital role in defining the resolution of fabricated structures. At certain laser power, the resolution has a linear relationship with the scanning speed, i.e., higher scanning spee-
ds result in enhanced resolution. This is due to the fact that exposure dose is reduced, leading to the reduction in line­ width. However, very high scan speeds can hinder the process of poly­ merization and result in weaker and easily collapsible structures. Therefore, optimum selection of input laser power and scanning speed is essential for TPL.

7

V. Harinarayana and Y.C. Shin
Fig. 8. Comparison between light intensity profiles generated by one-photon and two-photon absorption for same conditions [65].
In TPA, the absorption of photons depends on the square of the in­ tensity of the light source, resulting in the profile of exposure dose in TPL being different than the focal light intensity profile in the case of onephoton absorption. The radius of the profile of the exposure dose co­ incides with that of the laser light intensity volume, but the full width at half maximum is narrower by a factor of √2 as shown in Fig. 8 [65,71]. Another parameter that is critical to the final resolution is the -
numerical aperture (NA) of the objective. The highest angle between two propa­ gating waves from diametrically opposite ends of the aperture corre­ sponds to the highest spatial frequency fringes and consequently determines the resolution of the objective. The NA of an objective is defined as NA = n*sin(α), where n is the refractive index and α is the maximum angle measured from the outer edge of the objective lens with respect to the optical axis. The resolving power of an objective varies and sc-
ales laterally as the inverse of its NA and axially as the inverse of the square of the NA, and therefore high NA objective lenses are used for TPL techniques to obtain superior resolution. However, due to the re­ sidual effect, the spatial resolution obtained is always greater than the size of an isolated structure such as a dot or a line, generally called linewidth and is in the order of ~ 150 nm [72]. The same is true in the axial direction considering the fact that feature size in the z-direct-
ion is much larger. In photopolymerization, for a given polymerizable group, low curing speed indicates low quantum yields. An increase in the photosensitivity of the resin, where the photosensitivity can be expressed as the amount of photo energy that is required to react with a half of the monomers, can increase the quantum yield of the photoin­ duction and photopolymerization triggered by the photons absorbed.

Optics and Laser Technology 142 (2021) 107180
Invariably, the population density of photons required to reach the polymerization threshold is reduced, which potentially leads to a reduced light scattering. As a result, the polymerization caused by the detrimental factor is minimized leading to a smaller polymerization voxel.
One particular approach to this issue is to use multiple beams of laser light for the initiation and inhibition of polymerization. Testa et al. [73] demonstrated this concept by employing reversibly switchable fluores­ cent proteins for optically switching the molecules in the near sur­ roundings of the voxel to a more stable energy state in order to negate the residual effects. Unlike the initiation beam, which is generally a Gaussian beam having a high intensity point, the inhibition beam is fla-
t and exhibits no such a high intensity point. Fig. 9 shows the feature sizes in the order of 40 nm or ~ 1/12th of the wavelength of irradiated light achieved by Cao’s group [74] by employing an inhibition light working in the continuous wave mode simultaneously with high photosensitivity resins. Theoretically, the size of the writing beam can be pushed to zero by increasing the power intensity of the inhibition beam which conse­ quently enlarges the volume of photo-inhibition and therefore confin-
ing the voxel to a very small value. However, due to the presence of several other non-linear effects, irreversibility of the depletion of concentration of photo-initiators and the increase in the volume of photo-inhibition, it results in decreased linewidth only. The spatial resolution remains the same or is even increased.
Lee et al. [75] proposed a minimum power and minimum exposure time scheme (MPMT) for small and low aspect ratio voxels incorporating radical quenchers and post-processing techniques, which resulted in a resolution of the order of 60 nm. Stimulated emission depletion micro­ scopy (STED) is another technique like the reversibly switchable concept, except that the power of the inhibition beam is high to completely deplete the species concentration in the vicinity of the voxel. In STED, the molecules -
are excited to a higher energy state via TPA. Specifically, a Laguerre-Gaussian mode is employed, which attains a
Fig. 10. Schematic of photophysical reactions occurring in a STED process. From [65].

Fig. 9. (a) dot sizes plotted as a function of the power of inhibition laser in the BPE-100 photo-resin. (b) SEM image of the dot of 40 nm feature size. (c) SEM images of the dashed lines fabricated in BPE-100 photo-resin by irradiation of inhibition beam at regular time intervals. From [74].
8

V. Harinarayana and Y.C. Shin

Optics and Laser Technology 142 (2021) 107180

Fig. 11. (a) Schematic of multifocal multiphoton lithography setup with two independent beams generating distinct focal spots. (b) (top left) BSA-based maze split into 12 sequentially scanned masks with four rows and three columns. (top right) SEM image of the BSA-based maze. (bottom left) SEM image of one unit of the 12 sections. (bottom right) magnified image of the maze. [87]

ring-like profile inhibiting the photo-initiator molecules in the circular vicinity of the voxel. In principle, the molecules return to the ground state via fluorescent emission. However, in TPL, as shown in Fig. 10, this state undergoes an intersystem crossing (ISC) process to form a triplet state, which aids in further generating radicals that promote the process of polymerization. The downside is that there are only a few radical photo-initiators that satisfy the conditions for this technique. -
Hell et al. [76] demonstrated a new type of scanning fluorescence microscopy overcoming Abbe’s diffraction limit by employing STED to inhibit the fluorescence process. They claim to have achieved an enhanced reso­ lution by a factor of 4.5. Similarly, Fischer et al. [77] demonstrated improved spatial resolution in the lateral and axial directions during the fabrication of 3D woodpile photonic crystals using STED microscopy with direct laser writing. A continuous wave laser at 532 nm was utilized a-
s the inhibition beam with a custom-made mask to generate spherical exposure volume. For a typical STED setup, the diameter of the exposure is given by the formula [23].

λ

d≈

√̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅

(8)

2NA ×

1 + bISTED I

where NA is the numerical aperture of the objective, ISTED is the in­ tensity of depletion light, I is the switching intensity at which a half of the radicals will be depleted through stimulated emission, b is the co­ efficient dependent on the shape of the beam, and λ is the wavelength of irradiating light.
Photo-inhibited super-resolution (PInSR) lithography is another strategy developed to achieve improved resolution. Unlike STED, in PInSR, an inhibition laser beam is used to generate radical traps from the inhibition molecules previously added to the resin. These traps react with the polymer chain to terminate the polymerization process [70,78]. Diffusion of radical quenchers in the resin is another technique for improved feature size and resolution. In this method, the quencher molecules are adde-
d to the resin before polymerization, which alter the polymerization threshold in the voxel as well as in the vicinity due to diffusion during the photo irradiation [79]. The resolution achieved with this method is comparable to the STED approach for similar structures, and interestingly the linewidth is also reduced. The main advantage of this strategy is that use of inhibition laser is eliminated. Although the results of all these techniques are extremely impressive, the smallest linewidth and r-
esolution obtained to date are for discon­ tinuous fabrications (dots). Moreover, the reproducibility at an extremely high resolution is poor due to high sensitivity to fluctuating input powers. Hence, there is a lack of evidence for true nanometer resolution. However, incorporating some of these techniques into the TPL process can bring out the full potential of this technique in the field of nanomanufacturing.

5. Advancements in two-photon lithography

With the advent of highly efficient photo-initiators, optical systems and laser technology, two-photon lithography (TPL) has been recog­ nized as an effective manufacturing technique in the micro and nano­ scale regime. However, TPL takes a relatively long time to fabricate structures due to seriality. Malinauskas and coworkers [80] have expressed the approximate time required to fabricate 3D structures by the equation given below.

t

=

xyzF Rν

(9)

where t is the processing time in seconds, x, y, z are the dimensions of the structure in µm, F is the fill factor which lies between 0 and 1 (ratio of polymerized to the non-polymerized volume), R is the structuring res­ olution or the area of cross-section of the voxel in µm2, which depends on the input laser power and the NA of the objective used, and ν is the scan velocity in µm/s.
For TPL to be considered as a viable option for mass-production, high-throughput, repeatability, traversing speed and capacity are the crucial factors to be addressed. Photo-initiators and resins with large dynamic range allow the user to vary the input laser power, and consequently the scan speed. However, Kawata et al. [81] demonstrated varying aspect ratios for different laser powers and exposure times while keeping their product constant. Custom-made photo-initiators with large absorption cros-
s-sections and high dynamic range have proven to increase the speed of the polymerization process [82,83]. Nevertheless, these photo-initiators are time-consuming and difficult to synthesize. Li et al. [84] produced a custom-made photo-initiator, which is simple to synthesize, has a wide dynamic range and has a moderate area of ab­ sorption cross-section. Another parameter that can alter the process of polymerization is the frequency rates of the pulses from the oscillator. Kilohertz frequencies a-
re well-suited for the polymerization process to be dominated by two-photon absorption and not by any other photo­ thermal processes. Interestingly, many research groups [49,85] have noticed that low repetition rates, less than 1 MHz, enable high resolution patterning. This is assumed to be due to the fact that the time for diffusion of heat is higher and the accumulation of heat and hotspot creation is reduced.
As discussed earlier, utilization of galvo mirrors, digital mirror de­ vices (DMDs), or multi-lens array (MLAs) is some engineering technique to improve the fabrication speed and throughput. Galvo scanners consist of a pair of mirrors attached to the motors that rotate them at high speeds within a certain range of angular distance. Usually, the vector scan approach implemented for TPL with galvo mirrors tends to be quicker than the raster scan approach. On the other hand, a digital

9

V. Harinarayana and Y.C. Shin

Optics and Laser Technology 142 (2021) 107180

Fig. 12. (a) Schematic of TPL using optical masks for patterning [26]. (b) Schematic of TPL by placing an object as the mask in a plane conjugate to the front focal plane of the objective [89].

mirror device is a micro-opto-electro-mechanical system comprising several hundred thousand micromirrors arranged in a specific array, which correspond to the pixels of an image to be displayed. These micromirrors can be rotated about their own axis by certain angles to attain their optical state (on/off). Integration of both systems viz., MLAs and DMDs in TPL has produced a substantial decrease in the fabrication time. A multi-focal strategy has also been used by many groups to speed up the fabri-
cation time [61,86]. In this approach, highly amplified laser beams are directed into an array of the lens, which is split into several low power beams brought to the voxel through a single microscopic objective. Hundreds of objects could be fabricated in the time ordinarily required to produce an individual structure. However, the fabrication time saved was significant only when creating replicas of a single structure. On the contrary, Nielson et al. [87] demonstrated the multifocal strategy inte-
grated with dynamic reflectance masks and DMDs to rapidly print non-repeating objects by utilizing multiple laser beams simultaneously to sample different regions on the DMD as shown in Fig. 11. It was also found that the duration for fabrication halved when two laser beams were used. Likewise, Wang et al. [88] presented a new random-access DMD scanner strategy by controlling the amplitude and phase of the laser via binary hologram and achieving fabrication speeds

of 5 mm/s per laser. Complex overhanging structures that are chal­ lenging and time-consuming were fabricated at a faster rate without compromising the resolution when compared to point scanning-based systems. This breakthrough is among the highest fabrication speeds achieved to date available in published literature. Similarly, Daekeun et al. [26] demonstrated the wide-field layer-by-layer fabrication of structures using optical masks incorporated with a high numerical aperture objective. Fig. 12-
 (a) presents the schematic of the system utilized by the group. One of the main characteristics of this technique is scalability, viz., the fabrication speed is not dependent on the size of features. However, such techniques are limited by the available peak input power and type of optical mask utilized. Regenerative amplifiers may be used to provide initial high input power to the system. Kaehr and Shah [89] demonstrated mask-directed multiphoton lithography by placing an object such as Musca do-
mestica within the mask plane placed conjugate to the front focal plane of the objective. The object’s negative was printed at the objective focal plane as shown in Fig. 12 (b). How­ ever, the positioning of the mask along the optical axis is the key to achieving the highest possible resolution. A small shift in the order of millimeters can degrade the resolution greatly. Dynamic digital masks incorporated with DMDs have proven to be a better alternative to

Fig. 13. Schematic of the replication of microstructures from a master template fabricated via TPL. [65]. 10

V. Harinarayana and Y.C. Shin

Optics and Laser Technology 142 (2021) 107180

physical masks if the structure is complex and requires multiple masks. Recently, Saha et al. [90] developed a femtosecond projection TPL (FPTPL) method that ensures both spatial and temporal focusing to achieve parallel fabrication without compromising the resolution of the features. This was achieved by fabricating 3D structures using a layer-by-layer approach of patterned 2D layers with thickness ranging from ~ 1 µm to ~ 4 µm. The patterning of 2D layers was performed using DMDs. Temporal focus-
ing was ensured by progressively shortening the light pulse as it traveled through the photopolymer, i.e., the writing is spatially limited to the focal plane and polymerization is restricted only to that plane. Nanowire features with sub-diffraction feature sizes in both axial and lateral directions were printed by varying certain laser parameters. Furthermore, they also claim that this technique increases the throughput speed by approximately three orders of magnitude. The main advantages of thi-
s technique are the high throughput speed and wide-field fabrication. However, stacking up 2D layers to fabricate a 3D structure has its own limitations and disadvantages in terms of fabri­ cation speed and axial resolution.
Parallel fabrication of features can be achieved by either using microlens arrays (MLAs) or spatial light modulators (SLMs). They can generate multiple laser foci from one single power unit combined with regener­ ative amplifiers. However, the bottleneck of using a stage scanning system to specify the fabrication coordinates results in the production of identical structures. Incorporating DMDs allows modulating multiple laser beams, thus resulting in the parallel fabrication of unique features. It-
 is important for the incoming laser beam to be homogeneous for uniform replication. Varying power intensities after passing through the MLAs can cause a difference in the dimensions of the fabricated features. Similarly, SLMs can also generate multiple foci from a single beam source by providing control over the intensity and phase of the laser wavefront at different locations within the beam. Unlike MLA, in SLM, computer-generated hologram patterns are given as input, which are dynamic and can b-
e changed rapidly. Most of the SLMs utilize either an array of electronically addressable liquid crystal pixels or an array of deformable micromirrors (DMMs). The main advantage of SLM is the capability to holographically translate multiple laser foci for the parallel fabrication of unique features [65]. This feature can play an important role in low-viscosity resins where parts can curl, or buckle if the sup­ porting structures are not fabricated first. Microstructures can also be fabricated at a-
 faster rate by replicating a master structure as depicted in Fig. 13. In this technique, a 3D microstructure is first fabricated via TPL, which is called the master structure and is further utilized to fabricate replicas by a faster process called micro-transfer molding. The main advantage of such soft lithography techniques is that the high resolution DLW technique is required only for the master structure which acts as the template for replication of hundreds of copies fabricated at rapid speed-
s. It also caters to the need for diversification of materials. How­ ever, this technique is limited in the structural design of the master template.
Another advancement to improve the speed of fabrication is the utilization of translational stages for fast scanning over large areas. For extreme precision in trajectory and position control with nanometerrange noise in straightness and flatness, air bearings are used, which can move at a speed of few centimeters per second. However, due to the weight of the stages, acceleration of the stages is slow and needs to cover a certain distance to attain uniform speed. Similarly, synchronization of the -
motion of a laser with high-speed pulse output is an essential factor to be taken into consideration for laser processing. It is very critical for the pulses to be accurate and depend on various parameters, viz., laser input power, motion speed, and trajectory.
6. Metamaterials
Materials with excellent mechanical properties, optical properties, multiple functionalities with the least weight possible are always in high demand. The design of materials with such characteristics is a continual

Fig. 14. Infinite wires arranged in a simple cubic lattice, joined at the corners of the structure [92].

goal for researchers and industries. Metamaterials is a rapidly emerging branch of science, which deals with the development of material prop­ erties out of the ordinary. Metamaterials are artificial materials or composites whose properties usually do not exist in nature, do not depend on the material composition, or do not depend on individual atoms, but largely depend on the fabricated structure topology. Meta­ materials are derived from the Greek word “µετα” meaning beyond materials. TPL is an -
ideal technology for the fabrication of threedimensional metamaterials as most of the elements do not require post-processing. Historically, the pursuit of metamaterials and phononic crystals was the primary motivation for the development of TPL technology.
Electromagnetic metamaterials are of great attraction to researchers, which usually involve cells with subwavelength geometries. Among the many types of electromagnetic metamaterials, plasmonic metamaterials stand out because of the unprecedented optical functionalities like a negative index of refraction, negative permeability, negative permit­ tivity that can be obtained at will and cannot be realized in materials available in nature. These materials make good use of surface plasmons, which are -
collective oscillations of free electrons at metal-dielectric in­ terfaces. Surface plasmon resonance (SPR) occurs when a light wave of a certain wavelength reaches the interface, and most of the irradiant en­ ergy is transferred to a surface plasmon of a shorter wavelength. The creation of plasmons on the surface of nanoparticles is called localized surface plasmon resonance (LSPR) and is guided by the shape, spacing and orientation of the nanoparticles. Manipulation of these parameters can resul-
t in metamaterials with unique mechanical and optical functionalities.
In 1968, Veselago [91] suggested the phenomenon of negative refractive index by materials whose permittivity (ε) and permeability (µ) were negative, which indicates the velocity of light within the material would also be negative. Although there are materials in nature with negative permittivity, there is none with both parameters being nega­ tive. Metamaterials were first experimentally proposed by Pendry et al. in 1996 [92]. Thin metallic wires with radius in the order of ~ 1 µm were manufacture-
d and assembled to form a simple cubic lattice struc­ ture illustrated in Fig. 14. The effective plasma frequency of the artificial material was depressed by up to 6 orders of magnitude, which subse­ quently changed the dielectric function of the material to a negative value. The effective permittivity is derived from the Drude-Lorentz model and is expressed as:

ε(ω) = 1 −

ω2p

ω(ω + iγ)

(10)

where ε(ω) is the dielectric function, ω is the frequency of oscillation, ωp is the plasma frequency of the material and γ is the damping term rep­ resenting dissipation of plasmon’s energy into the system (~0.1ωp). Negative ε gives rise to a variety of electromagnetic structures deco­ rating the surface of metals with a complexity controlled by the

11

V. Harinarayana and Y.C. Shin
Fig. 15. left-handed metamaterial (LHM) with square copper SRRs and copper wire strips on fiberglass circuit board material [93]. geometry of the surface [92].
Metamaterials have been studied for several unique properties and applications viz. negative index of refraction [93–96], invisibility cloaking [97–99], and superlensing [100]. TPL is a promising method for the fabrication of true 3D plasmonic metamaterials. Although TPL is limited in options for direct fabrication of 3D metallic structures, polymer-based resins can be embedded with metallic components by incorporating various deposition techniques. Split ring resonators (SRR) are a common applica-
tion of electromagnetic metamaterials used to

Optics and Laser Technology 142 (2021) 107180

produce artificial magnetism. Smith and coworkers [93], as represented

in Fig. 15, realized 3D structures in the millimeter scale, operated in the

microwave regime with a two-dimensional array of repeated unit cells of

copper strips and SRRs on interlocking strips that exhibit a frequency

band where the effective index of refraction is negative. However, to

achieve magnetic resonance at optical frequencies, the SRR structure

must be less than 100 nm in structure dimension with a gap less than 10

nm. Moreover, the scaling principle also starts to break down at higher

frequencies as the metal significantly deviates from an ideal conductor

[101].

However, Dolling et al. [102] overcame this problem by employing

nanoscopic plate pairs or cut-wire pairs to produce negative perme­

ability and negative permittivity directly, without employing SRRs as

shown in Fig. 16 (a). In their design, the split in a normal SRR is opened,

which consequently decreases the capacitance, C, and in turn increases

the

LC

resonance

frequency

given

by

ωLC

=

√1̅̅̅̅
LC

.

Additionally,

the

bot­

tom arm in the U-shaped structure is removed to produce cut-wire pair

with length, l, thickness, t, width w, and the spacing between the wires,

d. This furthermore decreases the net capacitance and increases the

magnetic resonance frequency. Although it is straight-forward to ach­

ieve this design, the ratio of wavelength to the lattice constant, λ/a, must

be very high for true metamaterials. In this case, the ratio is typically low

(~2). However, when l = w, the cut-wire pairs behave like nanoscopic

plate pairs with more pronounced optical resonance relative to cut-wire

pairs. In contrast to the theoretical studies, a negative refractive index,

however, was not obtained although negative permittivity and perme­

ability were achieved.

Fig. 16. (a) Schematic of adiabatic transition from SRRs to cut-wire pairs. (bottom left) one cut wire placed on top of another with a certain dielectric spacer layer in between. (b) Measure transmittance (red) and reflectance (blue) for cut-wire pairs. Insets correspond to electron micrographs. (c) measure transmittance (red) and reflectance (blue) for arrays of plate pairs. From [102].
12

V. Harinarayana and Y.C. Shin

Optics and Laser Technology 142 (2021) 107180

Fig. 17. (i)(a) Top view of once unit cell of the functional metamaterial. (b) Side view. (c) magnetic field (linear scale) for N = 3 and a wavelength of 1430 nm. (d) Electric field (linear scale) for same plane and wavelength. (ii) Measured (solid) and calculated (dashed) normal incidence transmittance (red) and reflectance (blue) for N = 1,2,3 functional layers respectively. Insets correspond to electron micrographs with a 400 nm scale. (iii) Effective refractive index (top) and permeability (bo-
ttom). Real parts, solid, imaginary parts, dashed. From [103].

Fig. 18. Flow of fabrication of gold helix plasmonic metamaterials. (top left) A positive-tone photoresist is deposited onto a glass substrate with a ~ 25 nm thin layer of ITO (green). (top right) An array of helices fabricated in the photoresist. (Bottom right) After electrochemical deposition of gold onto the template. (bottom left) self-standing helical structures obtained after removing the photoresist via plasma etching. From [104].
In 2007, Dolling and colleagues [103] claimed to be the first ones to fabricate one, two and three-functional layer metamaterials. The process started with a single functional layer producing negative magnetic permeability above the magnetic resonance frequency and negative electric permittivity below the effective plasma frequency successively generating a negative index of refraction. To expand the structure to three dimensions, multiple layers of metal-dielectric-metal were stacked as represent-
ed in Fig. 17 (i). They used 31 nm thick silver and 21 nm thick MgF2 as the metal and dielectric layers respectively resulting in a high ratio of wavelength to lattice constant (~27), although they could experimentally fabricate only up to 3 functional layers (7 real layers) through electron beam lithography (EBL). Fabrication of thicker

structures is much more difficult through EBL because of the depen­ dence of total thickness on the thickness of the patterned electron beam resist. The total thickness is limited to, at maximum, 80% of the thick­ ness of the resist, which is close to ~ 100 nm for EBL. The issue of a stepped wall also arises if the thickness is high.
Though stacking up 2D layers via EBL or focused ion beam (FIB) forms 3D metamaterials in principle, inherently they are 2.5D, i.e., 2D structures with multiple functional layers. Furthermore, the process is slow, expensive and requires a lot of skill to achieve proper alignment. In order to obtain true 3D metamaterial structures, TPL can be employed. It is best suited, and the process can be expedited by integrating optics like MLAs, DMDs as discussed earlier.
Gansel et al. [104] fabricated a true 3D helical free-standing meta­ material structure via TPL as depicted in Fig. 18. The process started with the usual split-ring resonators and adiabatically pulling one end of this planar SRR out of the fabricating plane, thereby resulting in a cir­ cular helix of gold structures with electromagnetic modes close to that of an SRR. They used a positive-tone photoresist to fabricate the template and infilled it with gold by electrochemical deposition because of -
its excellent optical properties at mid-infrared wavelengths. Subsequently, they removed the polymer through plasma etching. Initially, for the purpose of electrochemical deposition, the glass substrate on which fabrication was performed was deposited with a thin film (~25 nm) of indium tin oxide (ITO) acting as the cathode. However, the electro­ plating process is not applicable to many complex designs like structures with interlockings, suspended features and chirality. The parameters like elect-
roplating time, the direction of electroplating, bath tempera­ ture, current density, solution concentration define the thickness of the coating. Manipulation of these parameters simultaneously to obtain the desired coating is cumbersome and time-consuming. Similarly, in 2017, Frenzel et al. [105] fabricated the elastic counterpart of optical activity in 3D chiral structures. i.e., 3D chiral mechanical metamaterials with a twisting degree of freedom extending beyond the Cauchy elasticity.
Mu and coworkers [106] fabricated metallic pyramids plasmonic metamaterial via TPL followed by electron beam evaporation. Initially, keeping a copper grid as the substrate, a negative photoresist was used to fabricate the pyramid template via TPL. This was followed by electron beam evaporation of silver onto the hollow pyramid surfaces. These

13

V. Harinarayana and Y.C. Shin
Fig. 19. SEM images of hollow silver-coated metallic pyramid structures with 50.60.70.80.90 µm in height, respectively. From [106].
metallic pyramids can be used as surface-enhanced Raman spectroscopy (SERS) substrates for their electromagnetic properties. However, the stepped wall effect became prominent as the height of the structure increases as shown in Fig. 19.
Electroless plating is an alternative metal deposition technique to overcome the limitations in electroplating. It is a wet-chemical metal­ lization technique on a catalytic surface based on an autocatalytic redox reaction without any external current dependency. A reducing agent added to the solution reduces the metal particles from their ionic state before deposition. The quality of deposition is determined by the adhesion between the metal particles and the surface. Radke and co­ workers [107] -
used this technique along with TPL to fabricate threedimensional bichiral plasmonic crystals as shown in Fig. 20. Initially, they fabricated a 3D bichiral crystal template via TPL in a negative-tone photoresist. Eventually, this template was coated with silver via elec­ troless silver plating. However, during the process of electroless plating, the glass substrate was coated with silver as well. In order to overcome this effect, the crystal had to be detached from the coated substrate and placed o-
nto a neat glass substrate. However, detaching the crystal from the bottom created holes in the silver film at the point of contact. Therefore, they set up vertical posts at the corners as shown in Fig. 20 (b). These posts served as spacers between the crystal and the substrate making it easier to remove after the plating process. Although, when compared to electroplating, the process is faster and accurate, it is

Optics and Laser Technology 142 (2021) 107180
cumbersome and requires expertise to carefully remove the structure from the substrate and place it onto a cleaner glass substrate. Similarly, Chen et al. [108] fabricated 3D silver-coated polymeric microstructures. In their method, the 3D microstructure template after TPA was func­ tionalized with alkylamines by treating with NH2(CH2)3NHLi. This strong nucleophile cleaves exposed acrylate esters, creating surfacebound amine termination. Gold particles were then bound to the amines by immersing th-
e template structure in aqueous AuCl4- and reducing with NaBH4. Silver metal was then deposited onto the structure via electroless plating. The deposition is effective only on the surfaces treated with both aminolysis and AuCl4- / NaBH4 reagents. In this way the extra step of transferring the microstructure to a clean substrate was eliminated. However, the main disadvantage of such techniques is that the density of the metal-binding sites onto the template cannot be controlled. The quality of meta-
llization depends on the adhesion be­ tween the metal and the surface, which cannot be manipulated easily. Therefore, site-selective electroless plating is a viable alternative.
Kawata et al. [109] demonstrated the fabrication of 3D metal/ polymer microstructures via TPL and site-selective electroless silver plating. In their experiment, activated and non-activated resins were utilized for the fabrication of complex metal/polymer 3D microstruc­ tures. Initially, a laser beam was focused onto the non-activated monomer and after the exposure, the uncured resin was washed away with acetone. Eventually, a small amount of activated resin was dripped onto the polymerized struct-
ure and the same procedure was followed to form pairs of polymer layers on a glass substrate. Later, the fabricated polymer samples were immersed in an aqueous solution of AgNO3 for a period of close to ~ 6 hrs. After the treatment, the activated resin parts
Fig. 21. Microscope images of pairs of polymer sheets made via TPL with activated and non-activated resin. (Top) after soaking in AgNO3 aqueous so­ lution for 6 h. (bottom) After electroless plating. From [109].

Fig. 20. (a) Flow of fabrication. A glass cover slip serves as the substrate on which a negative-tone photoresist is deposited via spin-coating. TPL is used to fabricate the template structure. Post-baking and developing generate a free-standing template of the 3D bichiral crystal structure. All surfaces of the template including the substrate are coated with a conformal silver via electroless plating. To facilitate transmission spectroscopy, the crystal is detached from the template and deposited-
 onto a clean glass substrate with a thin glass capillary. (b) oblique view of the bichiral structure after electroless plating. From [107].
14

V. Harinarayana and Y.C. Shin

Optics and Laser Technology 142 (2021) 107180

Fig. 22. (a) SEM images of 2D polymer structures selectively coated with small silver grains. (b) SEM images of a silver-coated polymer structure consisting of a cube supporting a helical structure. From [112].

appeared slightly darker due to the deposition of Ag nanoparticles onto the surface. Finally, when silver was coated onto the structures via electroless plating, the activated resin parts appeared opaque while the other parts appeared transparent in the transmission image as seen in Fig. 21, thus confirming the deposition of silver only in the desired sites. The main disadvantages of this technique are: there are limited metalbinding materials that can be utilized and the required resolution and s-
tructural integrity for optical metamaterials are not met in most cases. However, in 2012, Vasilantonakis and colleagues [110,111] demon­ strated the possibility of fabrication of optical nanophotonic devices via TPL and selective electroless plating. 3D metallic woodpile structures with features below 100 nm were fabricated using an organic–inorganic, zirconium-silicon hybrid material doped with a metal-binding monomer followed by metallization through electroless plating. The metalized structure-
s exhibited ohmic conductivity, comparable to pure silver.
Similarly, Formanek and coworkers [112] demonstrated the 3D

fabrication of metallic micro/nano structures based on TPL combined with electroless plating. MLAs were employed to produce numerous structures of the same pattern spread out over a large area. They also claimed their experiment to be one of the firsts to demonstrate the fabrication of true 3D metallic complex structures obtained from TPL. In their fabrication process, TPL was conducted inside a chemically modified resin through MLAs producing multiple structures on a pre­ viously deactivated glas-
s substrate. Initially, to obtain a deactivated substrate, glass slides were cleaned, dried and soaked in a 5% solution of dimethyldichlorosilane in toluene for 1 min and later washed with methanol producing a layer of hydrophobic coating. Subsequently, after the microfabrication process, the surface of the structures was pre­ treated with SnCl2 to improve metal adhesion with the polymerized resin. Finally, silver was deposited via electroless plating producing thickness-controlled, uniformly coat-
ed self-standing metallic 3D struc­ tures as shown in Fig. 22 (b). This metallization technique can produce

Fig. 23. a) CAD model of the moth-eye MEGO absorber. b) fabricated and silver-coated structure. c) schematic of the device in different propagation angles as a function of θ. d) transmission spectrum of the absorber as a function of θ. From [116].
15

V. Harinarayana and Y.C. Shin

Optics and Laser Technology 142 (2021) 107180

Fig. 24. Fabrication flow of MEGO parabolic reflector. From [116].

numerous highly conducting structures by making the substrate hy­ drophobic or can also produce hundreds of isolated insulators on a metallic coated substrate.
Rill et al. [113] demonstrated the fabrication of photonic meta­ materials via TPL combined with silver chemical vapor deposition. Their experiment started with a glass substrate covered with a 2 µm thick, fully polymerized SU8 film. Subsequently, another film was spin-coated on the substrate and the template was fabricated via TPL. The template was later coated with SiO2 via ALD with SiCl4 as the precursor, which was performed to provide mechanical stability, thermal resistance, and chemical prot-
ection to the template during CVD of silver at 160 ◦C. The activation of the coated surface was performed by exposing it to O2 plasma for 15 min. Each static cycle during CVD deposited approxi­ mately ~ 5 nm of silver. The structures fabricated by them are results of 10 CVD static cycles, i.e., deposition thickness close to ~ 50 nm. The crucial aspects that can be inferred from their method are that the coating is uniform even in 3D, silver exhibits good dc conductivity, magnetic permeability and -
exhibits magnetic resonance at near-infrared frequencies with Re(µ) less than 0 and the process is quick.
Line of sight deposition techniques such as thermal evaporation and sputter coating can also be integrated with TPL to realize true threedimensional metamaterial structures rapidly. Sputtering techniques are mostly used for the deposition of metal and oxide films by control­ ling the crystalline structure and the surface roughness. For effective sputtering, the bombarding ions and the atoms being bombarded must be of the same atomic weight to maximize the momentum transfer. Several groups [114,115-
] have utilized this technique along with TPL to deposit metal nanoparticles in order to obtain desired magnetic prop­ erties. Sadeqi and colleagues [116] took it further by fabricating several kinds of metamaterials via TPL. Metallization was performed by two techniques namely, stamping (manually dipping the template into a metal paste) and sputtering. They compared the two fabricated struc­ tures and proved experimentally that the sputtering technique produced relatively uniform thickness coatin-
g. However, in one of their novel metamaterials embedded geometrical optics (MEGO) designs called an omni-directional hemispherical moth-eye absorber which resembles a moth-eye as shown in Fig. 23 (a), the coating was performed via stamping. This was because sputtering and wet etching are not suitable for curved substrates. They also claim that this metamaterial is the first ever realization of an angle-insensitive narrow-band metamaterial absorber fabricated on a curved substrate. They state that-
 such elements can be incorporated in future cloaking devices for enhanced optical properties. Integration of an optical parabolic reflector with a frequency selective metamaterial-based transmissive filter was also performed to realize a unique parabolic MEGO reflector device as shown in Fig. 24. It

Fig. 25. Schematic of the process of hybrid 3D nanofabrication via TPL and EBL. From [118].
was designed in such a way that the MEGO reflector reflects the beam at a single focal point for selective frequencies where a detector can be placed.
Fabrication of complex structures incorporating hybrid polymer templates with multiple photoresists deposited on top of another and polymerized sequentially has also been demonstrated [117]. Integration of various techniques to write on the different resists can be performed to obtain enhanced material properties with superior resolution. Generally, two different photoresists are deposited on the same substrate over one another and the top layer is used as the sacrificial stencil mask which is lat-
er removed via appropriate post-treatment. This technology can be utilized to a good advantage for the deposition of metal nano­ particles uniformly onto the polymer templates for various photonic and metamaterial applications. However, while TPL allows for the fabrica­ tion of arbitrary complex structures, the feature sizes obtained are too large for optical frequency applications. Although STED and PInSR are considered to produce enhanced structures with superior resolution, the metallization of-
 the template selectively becomes an issue.
Staude and team [118] overcame this problem by exploiting the technology of multiple photoresists and integrating several technologies like TPL and EBL in combination with metal-evaporation and standard lift-off procedure to produce high resolution 3D metallic structures coated selectively and evenly as shown in Fig. 25. In their technique,

16

V. Harinarayana and Y.C. Shin

Optics and Laser Technology 142 (2021) 107180

Fig. 26. SEM images of several structures realized from hybrid nanofabrication technology. (a) selective metallization. (b) Short gold nanowires aligned with respect to the TPL photoresist lines to form Ω-shaped structures. (c)-(d) 3D nanoantennae inspired by various designs. (e) A 2D array of upright standing SRRs. From [118].

initially, the glass substrate was spin-coated with IP-L negative tone photoresist and TPL was performed and developed to produce perma­ nent 3D polymeric structures. Eventually, the developed photoresist was sputter-coated with ITO to prevent charge accumulation at the surface during EBL. Later, a sufficiently thick layer of PMMA was spun onto the same substrate over the polymerized structure. EBL was then employed to write high resolution pattern on the PMMA. After the development of PMMA, a 50 -
nm thick gold film was deposited onto the sample pattern by electron beam evaporation. Finally, a standard lift-off procedure was used to remove the PMMA and these gold patterns were embedded onto the two-photon polymerized structures uniformly at desired locations as shown in Fig. 26. However, the standard lift-off procedure does have some major drawbacks such as retention and redeposition.
Although TPL has been considered a promising technology for the development of photonic crystal (PhC) design largely due to its 3D processing capability, many researchers have failed to fabricate struc­ tures demonstrating the photonic bandgap (PBG) effect. Considering a log pile structure, it is certain that the rod diameter is not uniform due to the acceleration and deceleration effects of the piezo stage moving with a uniform scan speed. This directly hinders the flow of non-polymerized resin r-
esulting in incomplete resin-air lattices. Similarly, the height and width of the structure are defined by the laser exposure dose and nu­ merical aperture of the objective. Since they cannot be manipulated independently, the lattice parameters including in-plane filling ratio and layer interval are difficult to optimize separately. These factors have been identified as the major reasons for no PBG effect in PhC fabricated via TPL. Sun et al. [35] proposed and demonstrated a technique to overcome -
this problem. They quantified the entire 3D space of fabri­ cation into uniformly spaced voxels instead of defining a rod by singleline scanning. During fabrication, the laser raster scans the entire 3D space but stops only at certain prescribed points for a given duration and irradiates the resin to define the structure. Additionally, structure deformation in the transition layer was also taken care of by using a precompensation strategy considering that the shrinkage rate from liquid to solid is-
 material dependent and experimentally measurable.
In another approach by Yinan and coworkers [119], a self-developed sol–gel material prepared using a sol–gel organic–inorganic hybrid technology called the SZ2080 was utilized for the fabrication of pho­ tonic crystals via TPL. This material possessed a unique property of very negligible shrinkage eventuating before polymerization. This material was employed to fabricate 3D woodpile structures with periodicity in every four layers. Although the ratio of the refractive indices of SZ2080 and air was-
 around 1.5 (less than2), band gaps were observed along the stacking direction.

Fig. 27. A NIR metamaterial initially bending light to a negative angle with the normal and eventually converging to a point on the back of the lens forming an image. From [120].
Besides magnetic resonance imaging, a perfect lens with resolution beyond the governing diffraction limit is one of the most sought out subjects. Resolving two points with spacing less than 2λn, where n is the index of refraction, is impossible with conventional optical systems. This is because the features of the object are carried by evanescent waves which exponentially decay before reaching the image plane. In order to overcome this, Pendry [120] proposed a negative index of refraction (NIR) me-
tamaterial which uses the properties of both evanescent and propagating waves forming a perfect lens for imaging beyond the diffraction limit. Fig. 27 depicts the working of a NIR metamaterial for imaging.
Transformational optics is a rapidly growing branch of optics that deals with precise control of light path by spatially tailoring the material property governed by Fermat’s principle, the law of refraction, and Snell’s law. Invisibility cloaking and superlensing are some of the ap­ plications of transformational optics. As depicted in Fig. 28 (a), a superlens consists of a thin silver slab separated from the object (“NANO”) by a spacer layer and coated with an imaging material on the opposite sid-
e carefully designed in a such a way that the surface plas­ mons match the evanescent waves from the object. The key aspect for perfect lensing is the enhancement of the evanescent waves by the surface plasmons. Although experimentally many groups failed to ach­ ieve resonance with accurate thickness, Fang et al. [100], as shown in Fig. 28 (a), experimentally demonstrated this technique using a 35 nm silver film evaporated over a PMMA spacer layer and a subsequent 120 nm thick coating of a negativ-
e photoresist and the object being placed at a distance of 40 nm from the film. Atomic force microscopy (AFM) was used to develop the image obtained from the superlens, which resulted in a 60 nm half-pitch resolution. The captured image replicated the fine features of the object mask in all directions consistently as seen in Fig. 28

17

V. Harinarayana and Y.C. Shin

Optics and Laser Technology 142 (2021) 107180

Fig. 28. (a) The object to be captured is inscribed onto a 50 nm thick chrome (Cr); at left is an array of 60 nm wide slots of 120 nm pitch. At right is the inscription of the word “NANO”. All separated from the 35 nm silver film by a 40 nm PMMA spacer layer. The image is recorded by the photoresist on the opposite side. (b) FIB image of “NANO” (top); AFM of the captured image (center) on the photoresist; AFM of the captured image (bottom) without the 35 nm silver film. The average line width obta-
ined with the silver film was found to be ~ 89 nm and without the film was found to be ~ 321 nm. From [100].

Fig. 29. (A) CAD image of the octet truss design. (B) A single unit cell. (C) Elliptical cross-section of the hollow octet truss tube. (D) SEM image of the alumina octettruss nanolattice. (E) Zoomed-in image. Inset showing the hollow tube. (F) TEM dark-field image with diffraction grating o the alumina nanolattice tube wall. From [123].

(b). Mechanical metamaterials are also of great interest to researchers for
their myriad of applications in mechanics. Among the various types of mechanical metamaterials, lightweight lattice structures are found to be fascinating. Most of the rigid materials with high strength-to-weight and stiffness-to-weight ratios such as diamond, metallic glass, or ceramics possess excellent strength and are light. However, their sub-par elastic nature and very low toughness hinder their suitability to many appli­ cations in lightweight mechanics. Composites are a good alternative, b-
ut again the increase in weight makes them less viable to lightweight ap­ plications. Many naturally occurring materials such as sea sponge euplectella aspergillium [121] and diatom shells [122], which are coincidently stiff, tough, and light, are believed to arise mainly from the design of the structural components. Meza et al. [123] fabricated a strong, stiff, energy absorbing, hollow-tube nanolattice with an octet truss geometry that exclusively consists of brittle ceramic and alumina as shown -
in Fig. 29 (D-E). This structure exhibited almost complete recoverability after compressions in excess of 50% strain. It was also found that Young’s modulus varied with the relative density as E ρ1.61,

and the ultimate strength varied with a density as σu ρ1⋅76 which differed from the analytical values because of the hollow tubes and nodes. The fabrication was performed starting with the two-photon polymerization of the 3D scaffold. Subsequently, thin layers of alumina were then deposited onto the scaffold via the atomic layer deposition (ALD) technique. The outermost walls of the structure after coating were removed via focused ion beam milling and the polymer scaffold was removed via O2 plasma-
 etching resulting in a 3D free standing nano­ lattice. Because ALD is a layer-by-layer approach, the thickness of the resulting layers of structures is entirely controlled by the number of deposition cycles.
In 2016, Bauer and group [124] took it further by fabricating ultrastrong, lightweight, nano-architectured glassy carbon lattices via TPL and pyrolysis of the polymeric structures which could sustain compression stresses of up to ~ 310 MPa at a density of 0.35 gcm− 3. The polymeric nanolattices and nano-honeycomb structures were con­ structed by direct laser writing and subsequent pyrolysis in vacuum at a temperature of 900 ◦C. During pyrolysis, these structures shrank iso­ tropically by 80% in vo-
lume. Undistorted structures were obtained by

18

V. Harinarayana and Y.C. Shin

Optics and Laser Technology 142 (2021) 107180

Fig. 30. (a) Polymeric 3D structure before pyrolysis. (b) Magnified image of a single unit cell. (c) shrunk nanolattice on a pedestal for easy removal from the substrate. (d) magnified image of the shrunk nanolattice. From [124].

placing the structures on pedestals and coiled springs for easy removal from the substrate as shown in Fig. 30. Interestingly, these significantly reduced feature sizes displayed unprecedented strength corresponding to the theoretical strength of bulk glassy carbon. Furthermore, these nanolattices represent the smallest lattice structures produced so far in published literature. It is evident that such structures possess great po­ tential for mechanical and optical metamaterial applications.
In order to characterize mechanical metamaterials appropriately, the height of the overall structure must be high. TPL allows fabrication of structures typically with height in the range of tens of micrometers only. However, Buckmann et al. [125] proposed a novel “Dip-in” 3D DLW technique as shown in Fig. 31 (i). This method makes use of the photoresist itself as the immersion oil between the objective and the substrate extending the fabrication to millimeters in height with submicrometer feature -
sizes. They fabricated true 3D crystalline meta­ materials in the micrometer range exhibiting adjustable Poisson’s ratios including negative values, i.e., compressing the material in the axial direction leads to a contraction in at least one of the lateral directions in uniaxial structures as well as huge mechanical nonlinearities starting from zero Poisson’s ratio. The structural design of their metamaterial was inspired by the bow-tie functional element represented in Fig. 31 (ii) (a). Fabricati-
on of the 3D structures was performed by grouping these functional elements in different orientations as shown in Fig. 32. These structures were later subjected to compression loading along the z-di­ rection to determine the Poisson’s ratio.
Similarly, in 2012, the same group [126] demonstrated the fabrica­ tion of pentamode three-dimensional mechanical metamaterials applying their novel “dip-in” 3D DLW with double cone lengths in the ten-micrometer range and with figures of merit (FOM) exceeding 103.
Pentamodes, also sometimes known as metafluids, were first pro­

posed by Milton and Cherkaev in 1995 [127]. They are unique because of their property that avoids coupling of compression and shear waves by increasing the bulk modulus, B, to an extremely large value (→∞) relative to the shear modulus, G. However, for the stability they replaced the fine point-like tips suggested by Milton and Cherkaev with thicker overlap values (d ~ 0.55 µm) leading to the figure of merit values in the range of ~ 103. Figs. 33 and 34 represent the design and TPL fabrication of -
the pentamode metamaterial, respectively. Furthermore, they believe that a reduction of the critical dimension to 0.1 µm can increase the FOM to 104.
Cloaking has been demonstrated in electromagnetism at various frequencies by many groups [91–93,128,129]. Although the imple­ mentation of cloaking in 3D structures is a cumbersome task, TPL has been a promising technology to achieve 3D cloaking. Fischer and his team [77] were among the first groups to demonstrate threedimensional invisibility cloaking in the microwave frequencies (~1.5 µm). They employed STED-inspired-TPL to fabricate the 3D woodpilelike polymeric structures. In 2011, the same gr-
oup [130] demon­ strated 3D invisibility cloaking in the optical frequencies by miniatur­ izing all the features in their previous experiment by a factor of 2. The lattice spacing was scaled down to 350 nm from 800 nm and according to Maxwell relations, the operating wavelength scaled down from 1.5 µm to 0.7 µm (visible red). The modifications in this experiment from the previous experiment included the employment of a different photo­ initiator and a suitable phase mask for enhanced lateral and a-
xial res­ olutions. In order to investigate the action of cloaking, they fabricated two structures: 1) reference structure and 2) cloaking structure with a cos2-function like indentation on the top surface of both as shown in Fig. 35 (a). Both these structures were sputter-coated with 100 nm of gold after TPL for enhanced visibility prior to the indentation. Cloaking

19

V. Harinarayana and Y.C. Shin

Optics and Laser Technology 142 (2021) 107180

Fig. 31. (i) a) Schematic of regular DLW. b) Schematic of novel “Dip-in” 3D DLW. (ii) a) Bow-tie functional element. b) Triclinic crystal structure with four-fold rotational axis (left) and six-fold rotational axis (right) respectively. (c) top view of the respective images in (ii)b). From [125].

Fig. 32. (a)-(c) triclinic structures with the four-fold axis of rotation. (d) triclinic structure with a six-fold axis of rotation. Lower row images are magnified images of the respective images on the top row. From [125].

of the indentation was effectively seen when the surface was exposed to light with a wavelength in the range of 500–900 nm as illustrated in Fig. 35 (c).
In 2013, Buckmann and his group [131] ventured into mechanical cloaking utilizing pentamode metamaterials via their novel “dip-in” 3D DLW technique. Experimental demonstration of a core–shell-based elasto-mechanical cloak was achieved. As shown in Fig. 36, the structure consisted of three crucial components. First, the rigid core–shell wall protects any object placed inside it. Second and third being the homo­ geneous, isotropic surroundings with high FOM to make the core–shell geometry appear ela-
stically as its surroundings. Intuitively, the system

can be compared to a spring-mass mechanical system with three different spring constants: one is very stiff and the other two are made softer to compensate for the effect exhibited by the stiff spring and finally, the effective spring constant is the same as that of system with three identical springs. The structure had a macroscopic volume of 2 mm3 with 1024 face-centered cubic unit cells and a lattice constant of 125 µm. Three structures were fabricated: 1) without the core–shell rigid wall acti-
ng as the reference, 2) Core-shell wall with a homogeneous isotropic surrounding of B/G ratio ~ 120, and 3) cloaking structure consisting of the core–shell, homogeneous and isotropic surroundings with two regions of B/G ~ 908 near the core–shell wall and B/G ~ 120

20

V. Harinarayana and Y.C. Shin

Optics and Laser Technology 142 (2021) 107180

Fig. 33. (a) Depiction of pentamode metamaterial suggested by Milton and Cherkaev. (b) Illustration of the approximated pentamode ideal with a finite diameter, d in the connecting regions of the touching cones. (Right) Dependence of FOM with the diameter, d. From [126].

Fig. 34. (a) Electron micrograph of a polymer pentamode mechanical metamaterial fabricated by “dip-in” 3D DLW with h = 16.15 µm, D = 3 µm and d = 0.55 µm. (b) another pentamode metamaterial with h = 16.15 µm, D = 3 µm and d = 1 µm. From [126].

Fig. 35. a) Electron micrograph of (top) polymer reference and (bottom) cloaking structures. (b) Corresponding FIB cuts of the structures. (Right) Optical micro­ graphs of illumination wavelengths ranging from 500 to 900 nm. From [130]. The length scale is 10 µm.

away from the wall. Finally, these structures were subjected to compression loading from the top using a hard silicon stamp and the results obtained successfully displayed elastic “unfeelability” as shown in the plots in Fig. 37. Detailed reviews on optical, mechanical, and acoustic metamaterials fabricated using several techniques can be found

in ref. [132–135]. 7. Conclusions and future direction
This review introduces the reader to the true three-dimensional

21

V. Harinarayana and Y.C. Shin

Optics and Laser Technology 142 (2021) 107180

Fig. 36. a) Pentamode mechanical metamaterial with a rigid core–shell element surrounded by a flexible homogeneous, isotropic polymer material. b) magnified view of the near surroundings of the core–shell element. From [131].

Fig. 37. (left) a) Reference structure without the core–shell element. b) Reference structure with the rigid hollow semi-cylinder (obstacle). c) Cloaking structure with core–shell element and varying surroundings as specified. (d-f) magnified view of (c) with dimensions farther and near surroundings respectively. (Right) Optical photograph of the cloaking structure when subjected to compression loading from the top. As shown the strain is similar for both the reference and cloaking structures. Fro-
m [131].

fabrication of microstructures using femtosecond lasers based on the nonlinear optical process called two-photon lithography (TPL). TPL is highly capable of fabricating nanoscale features and has proven to be an imperative technique for the 3D microfabrication of numerous materials for a myriad of applications, viz. tissue engineering, 3D scaffolding, drug delivery, biomimetics, microelectronics and metamaterials. As dis­ cussed, improved resolution and scalability can be achieved by incor­ porati-
ng certain technologies with TPL such as the usage of spatial light modulators (SLMs), digital micromirror devices (DMDs), and microlens arrays (MLAs) and can pave a way for industrialization which until now has been confined only to research laboratories. Further in the future, based on demand, TPL can be extended beyond microscale into the centimeter regime by integrating various additive and subtractive techniques. Furthermore, TPL is the only technique that caters to the need for high dimensio-
nal accuracy and true 3D fabrication, which can play a crucial role in the future development of metamaterials for data storage, waveguides and terahertz applications. TPL can also play a vital role in the fabrication of functional, nonstructural materials viz. elec­ tronic materials, energy storage materials. Another region of interest for

researchers is multi-material fabrication in the nanoscale regime. Incorporating several materials with different mechanical, optical, and electrical properties in a single nanostructure is a huge challenge and currently there is no evidence of multi-material fabrication via TPL. However, with recent advancements, TPL has great potential for tailoring the composition and structure simultaneously at the nanoscale which can prove to be revolutionary in the field of photonics, electro­ magnetic metam-
aterials, mechanical metamaterials, and biomaterials.
Declaration of Competing Interest
The authors declare that they have no known competing financial interests or personal relationships that could have appeared to influence the work reported in this paper.
References
[1] K. Salaita, Y. Wang, C.A. Mirkin, Applications of dip-pen nanolithography, Nature Nanotechnology 2 (2007) 145–155.

22

V. Harinarayana and Y.C. Shin
[2] V.R. Manfrinato, L. Zhang, D. Su, H. Duan, R.G. Hobbs, E.A. Stach, K.K. Berggren, Resolution Limits of Electron-Beam Lithography toward the Atomic Scale, Nano Letters 13 (2013) 1555–1558.
[3] J.-U. Park, M. Hardy, S.J. Kang, K. Barton, K. Adair, D.K. Mukhopadhyay, C. Y. Lee, M.S. Strano, A.G. Alleyne, J.G. Georgiadis, P.M. Ferreira, J.A. Rogers, High-resolution electrohydrodynamic jet printing, Nature Materials 6 (2007) 782–789.
[4] J.A. Lewis, G.M. Gratson, Direct writing in three dimensions, Materials Today 7 (2004) 32–39.
[5] D.S. Engstrom, B. Porter, M. Pacios, H. Bhaskaran, Additive nanomanufacturing – A review, Journal of Materials Research 29 (2014) 1792–1816.
[6] C.B. Arnold, A. Piqu´e, Laser Direct-Write Processing, MRS Bulletin 32 (2007) 9–15.
[7] S. Kawata, H.B. Sun, T. Tanaka, K. Takada, Finer features for functional microdevices, Nature 412 (2001) 697–698.
[8] E.-S. Wu, J.H. Strickler, W.R. Harrell, W.W. Webb, Two-photon Lithography for Microelectronic Application, Proc. SPIE 1674 (1992) 776–782.
[9] G. von Freymann, A. Ledermann, M. Thiel, I. Staude, S. Essig, K. Busch, M. Wegener, Three-Dimensional Nanostructures for Photonics, Advanced Functional Materials 20 (2010) 1038–1052.
[10] G. Witzgall, R. Vrijen, E. Yablonovitch, V. Doan, B.J. Schwartz, Single-shot twophoton exposure of commercial photoresist for the production of threedimensional structures, Optics Letters 23 (1998) 1745–1747.
[11] S. Bentley, R. Boyd, Nonlinear optical lithography with ultra-high sub-Rayleigh resolution, Optics Express 12 (2004) 5735–5740.
[12] A. Taguchi, A. Nakayama, R. Oketani, S. Kawata, K. Fujita, Multiphoton-Excited Deep-Ultraviolet Photolithography for 3D Nanofabrication, ACS Appl. Nano Mater. 3 (2020) 11434–11441.
[13] J. Stampfl, R. Liska, A. Ovsianikov, Multiphoton Lithography: Techniques, Materials, and Applications, John Wiley & Sons, 2016.
[14] M. Malinauskas, A. Zukauskas, G. Bickauskaite, R. Gadonas, S. Juodkazis, Mechanisms of three-dimensional structuring of photo-polymers by tightly focussed femtosecond laser pulses, Optics Express 18 (2010) 10209–10221.
[15] L. Li, J.T. Fourkas, Multiphoton polymerization, Materials Today 10 (2007) 30–37.
[16] Y. Pao, P.M. Rentzepis, LASER-INDUCED PRODUCTION OF FREE RADICALS IN ORGANIC COMPOUNDS, Applied Physics Letters 6 (1965) 93–95.
[17] S. Maruo, O. Nakamura, S. Kawata, Three-dimensional microfabrication with two-photon-absorbed photopolymerization, Optics Letters 22 (1997) 132–134.
[18] D. Yang, S.J. Jhaveri, C.K. Ober, Three-Dimensional Microfabrication by TwoPhoton Lithography, MRS Bulletin 30 (2005) 976–982.
[19] N. Anscombe, Direct laser writing, Nature Photonics 4 (2010) 22–23. [20] J. Fischer, M. Wegener, Three-dimensional optical laser lithography beyond the
diffraction limit, Laser & Photonics Reviews 7 (2013) 22–44. [21] X. Zhou, Y. Hou, J. Lin, A review on the processing accuracy of two-photon
polymerization, AIP Advances 5 (2015), 030701. [22] Q. Hu,”Multiphoton Lithograpy Based 3D Micro/Nano Printing,” EPSRC Centre
for Innovative Manufacturing in Additive Manufacturing 1–30. PowerPoint Presentation (ncl.ac.uk). [23] S. Lei, X. Zhao, X. Yu, A. Hu, S. Vukelic, M.B.G. Jun, H.-E. Joe, Y.L. Yao, Y.C. Shin, Ultrafast Laser Applications in Manufacturing Processes: A State-of-the-Art Review, Journal of Manufacturing Science and Engineering 142 (2020). [24] J.-H. Jang, D. Dendukuri, T. Alan Hatton, E.L. Thomas, P.S. Doyle, A Route to Three-Dimensional Structures in a Microfluidic Device: Stop-Flow Interference Lithog-
raphy*, Angewandte Chemie International Edition 46 (2007) 9027–9031. [25] J.W. Rinne, S. Gupta, P. Wiltzius, Inverse design for phase mask lithography, Sci. Vis. 12 (1995) 1068–1076. [26] D. Kim, P.T.C. So, High-throughput three-dimensional lithographic microfabrication, Optics Letters 35 (2010) 1602–1604. [27] A. Biswas, I.S. Bayer, A.S. Biris, T. Wang, E. Dervishi, F. Faupel, Advances in top–down and bottom–up surface nanofabrication: Techniques, applications & future prospects, Advances in Coll-
oid and Interface Science 170 (2012) 2–27. [28] E. Andrzejewska, M. Podgorska-Golubska, I. Stepniak, M. Andrzejewski, Photoinitiated polymerization in ionic liquids: Kinetics and viscosity effects, Polymer 50 (2009) 2040–2047. [29] C.N. LaFratta, T. Baldacchini, Two-Photon Polymerization Metrology: Characterization Methods of Mechanisms and Microstructures, Micromachines 8 (2017) 101. [30] S. Maruo, T. Hasegawa, N. Yoshimura, Single-anchor support and supercritical CO2 drying enable high-precision-
 microfabrication of three-dimensional structures, Optics Express 17 (2009) 20945–20951. [31] W.S. DeForest, Photoresist: materials and processes, McGraw-Hill, 1975. [32] Newport, “Three-Dimensional Microfabrication by Two-Photon Polymerization,” (Spectra-Physics 1998). DS012065 App Note 30 (newport.com). [33] T. Baldacchini, C.N. Lafratta, R.A. Farrer, M.C. Teich, J.T. Fourkas, Acrylic-based resin with favorable properties for three-dimensional two-photon polymerization, Journal of Applied Physic-
s 95 (2004). [34] S. Wu, J. Serbin, M. Gu, Two-photon polymerisation for three-dimensional microfabrication, Journal of Photochemistry and Photobiology A: Chemistry 181 (2006) 1–11. [35] H.-B. Sun, T. Suwa, K. Takada, R.P. Zaccaria, M.-S. Kim, K.-S. Lee, S. Kawata, Shape precompensation in two-photon laser nanowriting of photonic lattices, Applied Physics Letters 85 (2004) 3708–3710. [36] W.H. Teh, U. Dürig, U. Drechsler, C.G. Smith, H.-J. Güntherodt, Effect of low numerical-aperture femtosecond t-
wo-photon absorption on (SU-8) resist for

Optics and Laser Technology 142 (2021) 107180
ultrahigh-aspect-ratio microstereolithography, Journal of Applied Physics 97 (2005), 054907. [37] H.E. Williams, D.J. Freppon, S.M. Kuebler, R.C. Rumpf, M.A. Melino, Fabrication of three-dimensional micro-photonic structures on the tip of optical fibers using SU-8, Optics Express 19 (2011) 22910–22922. [38] K.H. Lee, A.M. Green, R.A. Taylor, D.N. Sharp, A.J. Turberfield, F.S.F. Brossard, D.A. Williams, G.A.D. Briggs, Cryogenic two-photon laser photolithography with SU-8, Applied Physics Letters 88-
 (2006), 143123. [39] Products info. http://www.microchem.com/products/su-eight.htm. [40] G. Kumi, C.O. Yanez, K.D. Belfield, J.T. Fourkas, High-speed multiphoton absorption polymerization: fabrication of microfluidic channels with arbitrary cross-sections and high aspect ratios, Lab on a Chip 10 (2010) 1057. [41] J.-F. Xing, M.-L. Zheng, X.-M. Duan, Two-photon polymerization microfabrication of hydrogels: an advanced 3D printing technology for tissue engineering and drug delivery, Chemical Societ-
y Reviews 44 (2015) 5031–5039. [42] M. Malinauskas, P. Danileviˇcius, D. Baltriukiene˙ , M. Rutkauskas, A. Zˇukauskas, Zˇ. Kairyte˙ , G. Biˇckauskaite˙ , V. Purlys, D. Paipulas, V. Bukelskiene˙ , R. Gadonas, 3D artificial polymeric scaffolds for stem cell growth fabricated by femtosecond laser, Lithuanian Journal of Physics 50 (2010) 75–82. [43] O. Kufelt, A. El-Tamer, C. Sehring, S. Schlie-Wolter, B.N. Chichkov, Hyaluronic acid based materials for scaffolding via two-photon polymerization, Biomac-
romolecules 15 (2014) 650–659. [44] A.-V. Do, K.S. Worthington, B.A. Tucker, A.K. Salem, Controlled drug delivery from 3D printed two-photon polymerized poly(ethylene glycol) dimethacrylate devices, International Journal of Pharmaceutics 552 (2018) 217–224. [45] R.P. Chaudhary, A. Jaiswal, G. Ummethala, S.R. Hawal, S. Saxena, S. Shukla, Subwavelength lithography of complex 2D and 3D nanostructures without twophoton dyes, Additive Manufacturing 16 (2017) 30–34. [46] D.S. Correa, T. Baldacchini, Two-
-photon absorption spectrum, Applied Physics A: Materials Science & Processing 90 (2008) 633–636. [47] R. Infuehr, N. Pucher, C. Heller, H. Lichtenegger, R. Liska, V. Schmidt, L. Kuna, A. Haase, J. Stampfl, Functional polymers by two-photon 3D lithography, Applied Surface Science 254 (2007) 836–840. [48] M.K. Driscoll, X. Sun, C. Guven, J.T. Fourkas, W. Losert, Cellular contact guidance through dynamic sensing of nanotopography, ACS Nano 8 (2014) 3546–3555. [49] J. Fischer, J.B. Mueller, J. Kaschk-
e, T.J.A. Wolf, A.-N. Unterreiner, M. Wegener, Three-dimensional multi-photon direct laser writing with variable repetition rate,“ microscopy, Opt. Mater. Express 1 (2011) 614–624. [50] E. Kabouraki, A.N. Giakoumaki, P. Danilevicius, D. Gray, M. Vamvakaki, M. Farsari, Redox Multiphoton Polymerization for 3D Nanofabrication, Nano Letters 13 (2013) 3831–3835. [51] A.V. Ovsianikov, B.N. Chichkov, Two-photon polymerization: a new approach to micromachining, Photon. Spectra 40 (2006) 72–80. [52] A. Ovs-
ianikov, B. Chichkov, P. Mente, N.A. Monteiro-Riviere, R.J. Narayan, Two Photon Polymerization of Polymer-Ceramic Hybrid Materials for Transdermal Drug Delivery, International Journal of Applied Ceramic Technology 4 (2007) 22–29. [53] M. Emons, K. Obata, T. Binhammer, A. Ovsianikov, B.N. Chichkov, U. Morgner, Two-photon polymerization technique with sub-50 nm resolution by sub-10 fs laser pulses, Optical Materials Express 2 (2012) 942. [54] J.D. Pitts, A.R. Howell, R. Taboada, I. Banerjee, J. Wang-
, S.L. Goodman, P. J. Campagnola, New Photoactivators for Multiphoton Excited Three-Dimensional Submicron Cross-Linking of Proteins: Bovine Serum Albumin and Type 1 Collagen \P, Photochemistry and Photobiology 76 (2) (2002) 135–144. [55] A. Ovsianikov, V. Mironov, J. Stampfl, R. Liska, Engineering 3D cell-culture matrices: multiphoton processing technologies for biological and tissue engineering applications, Expert Review of Medical Devices 9 (2012) 613–633. [56] C.L. Lay, C.S.L. Koh, Y.H. Lee, G-
.C. Phan-Quang, H.Y.F. Sim, S.X. Leong, X. Han, I. Y. Phang, X.Y. Ling, Two-Photon-Assisted Polymerization and Reduction: Emerging Formulations and Applications, ACS Applied Materials & Interfaces 12 (2020) 10061–10079. [57] A. Selimis, V. Mironov, M. Farsari, Direct laser writing: Principles and materials for scaffold 3D printing, Microelectronic Engineering 132 (2015) 83–89. [58] A. Ishikawa, Two-Photon Fabrication of Three-Dimensional Metallic Nanostructures for Plasmonic Metamaterials, Journal-
 of Laser Micro/ Nanoengineering 7 (2012) 11–15. [59] Y.-Y. Cao, N. Takeyasu, T. Tanaka, X.-M. Duan, S. Kawata, 3D metallic nanostructure fabrication by surfactant-assisted multiphoton-induced reduction, Small (Weinheim an der Bergstrasse, Germany) 5 (2009) 1144–1148. [60] A.I. Kuznetsov, A.B. Evlyukhin, C. Reinhardt, A. Seidel, R. Kiyan, W. Cheng, A. Ovsianikov, B.N. Chichkov, Laser-induced transfer of metallic nanodroplets for plasmonics and metamaterial applications, Journal of the Optical Soci-
ety of America B 26 (2009) B130. [61] F. Formanek, N. Takeyasu, T. Tanaka, “Three-dimensional fabrication of metallic nanostructures over large areas by two-photon polymerization,” applications in photonics, ” Opt, Lett. 28 (2003) 301–303. [62] P.-W. Wu, W. Cheng, I.B. Martini, B. Dunn, B.J. Schwartz, E. Yablonovitch, TwoPhoton Photographic Production of Three-Dimensional Metallic Structures within a Dielectric Matrix, Advanced Materials 12 (19) (2000) 1438–1441. [63] S. Shukla, E.P. Furlani, X. V-
idal, M.T. Swihart, P.N. Prasad, Two-photon lithography of sub-wavelength metallic structures in a polymer matrix, Advanced Materials 22 (2010) 3695–3699. [64] N. Tosa, J. Bosson, M. Pierre, C. Rambaud, M. Bouriau, G. Vitrant, O. St´ephan, S. Astilean, and P. L. Baldeck, “Optical properties of metallic nanostructures fabricated by two-photon induced photoreduction,” Nanophotonics (2006).

23

V. Harinarayana and Y.C. Shin
[65] T. Baldacchini, Three-Dimensional Microfabrication Using Two-Photon Polymerization: Fundamentals, Technology, and Applications (William Andrew, 2015).
[66] T. Tanaka, A. Ishikawa, S. Kawata, Two-photon-induced reduction of metal ions for fabricating three-dimensional electrically conductive metallic microstructure, Applied Physics Letters 88 (2006), 081107.
[67] F. Stellacci, C.A. Bauer, T. Meyer-Friedrichsen, W. Wenseleers, V. Alain, S. M. Kuebler, S.J.K. Pond, Y. Zhang, S.R. Marder, J.W. Perry, Laser and ElectronBeam Induced Growth of Nanoparticles for 2D and 3D Metal Patterning, Advanced Materials 14 (2002) 194–198.
[68] R. Nakamura, K. Kinashi, W. Sakai, N. Tsutsumi, Fabrication of the silver structure through two-photon excitation by femtosecond laser, Chemical Physics Letters 610–611 (2014) 241–245.
[69] A. Vyatskikh, S. Delalande, A. Kudo, X. Zhang, C.M. Portela, J.R. Greer, Additive manufacturing of 3D nano-architected metals, Nature Communications 9 (2018) 593.
[70] Z. Gan, Y. Cao, R.A. Evans, M. Gu, Three-dimensional deep sub-diffraction optical beam lithography with 9 nm feature size, Nature Communications 4 (2013) 2061.
[71] C.J. Schwarz, A.V.V. Nampoothiri, J.C. Jasapara, W. Rudolph, S.R.J. Brueck, Demonstration of two-photon lithography, Journal of Vacuum Science & Technology B: Microelectronics and Nanometer Structures 19 (2001) 2362.
[72] X.-Z. Dong, Z.-S. Zhao, X.-M. Duan, Improving spatial resolution and reducing aspect ratio in multiphoton polymerization nanofabrication, Applied Physics Letters 92 (2008), 091113.
[73] I. Testa, E. D’Este, N.T. Urban, F. Balzarotti, S.W. Hell, Dual channel RESOLFT nanoscopy by using fluorescent state kinetics, Nano Letters 15 (2015) 103–106.
[74] Y. Cao, Z. Gan, B. Jia, R.A. Evans, M. Gu, High-photosensitive resin for superresolution direct-laser-writing based on photoinhibited polymerization, Optics Express 19 (2011) 19486–19494.
[75] S.H. Park, T.W. Lim, D.-Y. Yang, R.H. Kim, K.-S. Lee, Improvement of spatial resolution in nano-stereolithography using radical quencher, Macromolecular Research 14 (2006) 559–564.
[76] S.W. Hell, J. Wichmann, Breaking the diffraction resolution limit by stimulated emission: stimulated-emission-depletion fluorescence microscopy, Optics Letters 19 (1994) 780.
[77] J. Fischer, M. Wegener, Three-dimensional direct laser writing inspired by stimulated-emission-depletion microscopy [Invited], Optical Materials Express 1 (2011) 614.
[78] T.F. Scott, B.A. Kowalski, A.C. Sullivan, C.N. Bowman, R.R. McLeod, Two-color single-photon photoinitiation and photoinhibition for subdiffraction photolithography, Science 324 (2009) 913–917.
[79] W.-E. Lu, X.-Z. Dong, W.-Q. Chen, Z.-S. Zhao, X.-M. Duan, Novel photoinitiator with a radical quenching moiety for confining radical diffusion in two-photon induced photopolymerization, Journal of Materials Chemistry 21 (2011) 5650–5659.
[80] M. Malinauskas, M. Farsari, A. Piskarskas, S. Juodkazis, Ultrafast laser nanostructuring of photopolymers: A decade of advances, Physics Reports 533 (2013) 1–31.
[81] H.-B. Sun, K. Takada, M.-S. Kim, K.-S. Lee, S. Kawata, Scaling laws of voxels in two-photon photopolymerization nanofabrication, Applied Physics Letters 83 (2003) 1104–1106.
[82] B.H. Cumpston, S.P. Ananthavel, S. Barlow, D.L. Dyer, J.E. Ehrlich, L.L. Erskine, A.A. Heikal, S.M. Kuebler, I.-Y. Sandy Lee, D. McCord-Maughon, J. Qin, H. Ro¨ckel, M. Rumi, X.-L. Wu, S.R. Marder, J.W. Perry, Two-photon polymerization initiators for three-dimensional optical data storage and microfabrication, Nature 398 (1999) 51–54.
[83] J.-F. Xing, X.-Z. Dong, W.-Q. Chen, X.-M. Duan, N. Takeyasu, T. Tanaka, S. Kawata, Improving spatial resolution of two-photon microfabrication by using photoinitiator with high initiating efficiency, Applied Physics Letters 90 (2007), 131106.
[84] Z. Li, N. Pucher, K. Cicha, J. Torgersen, S.C. Ligon, A. Ajami, W. Husinsky, A. Rosspeintner, E. Vauthey, S. Naumov, T. Scherzer, J. Stampfl, R. Liska, A Straightforward Synthesis and Structure-Activity Relationship of Highly Efficient Initiators for Two-Photon Polymerization, Macromolecules 46 (2013) 352–361.
[85] M. Malinauskas, P. Danileviˇcius, S. Juodkazis, Three-dimensional micro-/nanostructuring via direct write polymerization with picosecond laser pulses, Optics Express 19 (2011) 5602.
[86] C.-Y. Liao, M. Bouriauand, P.L. Baldeck, J.-C. L´eon, C. Masclet, T.-T. Chung, Twodimensional slicing method to speed up the fabrication of micro-objects based on two-photon polymerization, Applied Physics Letters 91 (2007), 033108.
[87] E.T. Ritschdorff, R. Nielson, J.B. Shear, Multi-focal multiphoton lithography, Lab on a Chip 12 (5) (2012) 867–871.
[88] Q. Geng, D. Wang, P. Chen, S.-C. Chen, Ultrafast multi-focus 3-D nano-fabrication based on two-photon polymerization, Nature Communications 10 (2019) 2179.
[89] B. Kaehr, J.B. Shear, Mask-directed multiphoton lithography, Journal of the American Chemical Society 129 (2007) 1904–1905.
[90] S.K. Saha, D. Wang, V.H. Nguyen, Y. Chang, J.S. Oakdale, S.-C. Chen, Scalable submicrometer additive manufacturing, Science 366 (2019) 105–109.
[91] V.G. Veselago, THE ELECTRODYNAMICS OF SUBSTANCES WITH SIMULTANEOUSLY NEGATIVE VALUES OF ε AND μ, Soviet Physics Uspekhi 10 (1968) 509–514.
[92] J. B. Pendry, A. J. Holden, W. J. Stewart, and I. Youngs I., “Extremely low frequency plasmons in metallic mesostructures,” Phys. Rev. Lett. 76, 4773–4776 (1996).

Optics and Laser Technology 142 (2021) 107180
[93] R.A. Shelby, D.R. Smith, S. Schultz, Experimental verification of a negative index of refraction, Science 292 (2001) 77–79.
[94] J. Valentine, S. Zhang, T. Zentgraf, E. Ulin-Avila, D.A. Genov, G. Bartal, X. Zhang, Three-dimensional optical metamaterial with a negative refractive index, Nature 455 (2008) 376–379.
[95] J. Pendry, Positively negative, Nature 423 (2003) 22–23. [96] V.M. Shalaev, Optical negative-index metamaterials, Nature Photonics 1 (2007)
41–48. [97] M. Yan, Z. Ruan, M. Qiu, Cylindrical invisibility cloak with simplified material
parameters is inherently visible, Physical Review Letters 99 (2007), 233901. [98] T. Ergin, N. Stenger, P. Brenner, J.B. Pendry, M. Wegener, Three-dimensional
invisibility cloak at optical wavelengths, Science 328 (2010) 337–339. [99] T. Ergin, J. Fischer, M. Wegener, Detailed optical characterization of three-
dimensional visible-frequency polarization-independent carpet invisibility cloak, Physica B Condens. Matter 407 (2012) 4075–4077. [100] N. Fang, H. Lee, C. Sun, X. Zhang, Sub-diffraction-limited optical imaging with a silver superlens, Science 308 (2005) 534–537. [101] J. Zhou, T. Koschny, M. Kafesaki, E.N. Economou, J.B. Pendry, C.M. Soukoulis, Saturation of the Magnetic Response of Split-Ring Resonators at Optical Frequencies, Physical Review Letters 95 (2005). [102] G. Dolling, C. Enkrich, M. W-
egener, J.F. Zhou, C.M. Soukoulis, S. Linden, Cut-wire pairs and plate pairs as magnetic atoms for optical metamaterials, Optics Letters 30 (2005) 3198–3200. [103] G. Dolling, M. Wegener, S. Linden, Realization of a three-functional-layer negative-index photonic metamaterial, Optics Letters 32 (2007) 551–553. [104] J.K. Gansel, M. Thiel, M.S. Rill, M. Decker, K. Bade, V. Saile, G. von Freymann, S. Linden, M. Wegener, Gold helix photonic metamaterial as broadband circular polarizer, Science 325 (20-
09) 1513–1515. [105] T. Frenzel, M. Kadic, M. Wegener, Three-dimensional mechanical metamaterials with a twist, Science 358 (2017) 1072–1074. [106] J. Mu, J. Li, W. Li, Q. Luo, C. Gu, Hollow metallic pyramid plasmonic structures fabricated by direct laser writing and electron beam evaporation, Microelectronic Engineering 110 (2013) 307–310. [107] A. Radke, T. Gissibl, T. Klotzbücher, P.V. Braun, H. Giessen, Three-dimensional bichiral plasmonic crystals fabricated by direct laser writing and electr-
oless silver plating, Advanced Materials 23 (2011) 3018–3021. [108] Y.-S. Chen, A. Tal, D.B. Torrance, S.M. Kuebler, Fabrication and Characterization of Three-Dimensional Silver- Coated Polymeric Microstructures*, Advanced Functional Materials 16 (2006) 1739–1744. [109] T. Tanaka, S. Kawata, Fabrication of 3D metal/polymer microstructures by siteselective metal coating, Applied Physics A: Materials Science & Processing 90 (2008) 205–209. [110] N. Vasilantonakis, K. Terzaki, I. Sakellari, V. Purlys-
, D. Gray, C.M. Soukoulis, M. Vamvakaki, M. Kafesaki, M. Farsari, Three-dimensional metallic photonic crystals with optical bandgaps, Advanced Materials 24 (2012) 1101–1105. [111] K. Terzaki, N. Vasilantonakis, A. Gaidukeviciute, C. Reinhardt, C. Fotakis, M. Vamvakaki, M. Farsari, 3D conducting nanostructures fabricated using direct laser writing, Optical Materials Express 1 (2011) 586. [112] F. Formanek, N. Takeyasu, T. Tanaka, K. Chiyoda, A. Ishikawa, S. Kawata, Selective electroless plating to -
fabricate complex three-dimensional metallic micro/nanostructures, Applied Physics Letters 88 (2006), 083110. [113] M.S. Rill, C. Plet, M. Thiel, I. Staude, G. von Freymann, S. Linden, M. Wegener, Photonic metamaterials by direct laser writing and silver chemical vapour deposition, Nature Materials 7 (2008) 543–546. [114] A. May, M. Hunt, A. Van Den Berg, A. Hejazi, S. Ladak, Realisation of a frustrated 3D magnetic nanowire lattice, Communications Physics 2 (2019). [115] C. Donnelly, M. Guizar-Sic-
airos, V. Scagnoli, M. Holler, T. Huthwelker, A. Menzel, I. Vartiainen, E. Müller, E. Kirk, S. Gliga, J. Raabe, L.J. Heyderman, Elementspecific X-ray phase tomography of 3D structures at the nanoscale, Physical Review Letters 114 (2015), 115501. [116] A. Sadeqi, H. Rezaei Nejad, R.E. Owyeung, S. Sonkusale, Three dimensional printing of metamaterial embedded geometrical optics (MEGO), Microsyst Nanoeng 5 (2019) 16. [117] S. Puce, E. Sciurti, F. Rizzi, B. Spagnolo, A. Qualtieri, M. De Vittorio, U. S-
taufer, 3D-microfabrication by two-photon polymerization of an integrated sacrificial stencil mask, Micro and Nano Engineering 2 (2019) 70–75. [118] I. Staude, M. Decker, M.J. Ventura, C. Jagadish, D.N. Neshev, M. Gu, Y.S. Kivshar, Hybrid high-resolution three-dimensional nanofabrication for metamaterials and nanoplasmonics, Advanced Materials 25 (2013) 1260–1264. [119] Y. Tian, H. Kwon, Y.C. Shin, G.B. King, Fabrication and Characterization of Photonic Crystals in Photopolymer SZ2080 by Two-Photo-
n Polymerization Using a Femtosecond Laser, Journal of Micro and Nano-Manufacturing 2 (2014). [120] J.B. Pendry, Negative refraction makes a perfect lens, Physical Review Letters 85 (2000) 3966–3969. [121] J.C. Weaver, J. Aizenberg, G.E. Fantner, D. Kisailus, A. Woesz, P. Allen, K. Fields, M.J. Porter, F.W. Zok, P.K. Hansma, P. Fratzl, D.E. Morse, Hierarchical assembly of the siliceous skeletal lattice of the hexactinellid sponge Euplectella aspergillum, Journal of Structural Biology 158 (2007) 93-
–106. [122] C.E. Hamm, R. Merkel, O. Springer, P. Jurkojc, C. Maier, K. Prechtel, V. Smetacek, Architecture and material properties of diatom shells provide effective mechanical protection, Nature 421 (2003) 841–843. [123] L.R. Meza, S. Das, J.R. Greer, Strong, lightweight, and recoverable threedimensional ceramic nanolattices, Science 345 (2014) 1322–1326. [124] J. Bauer, A. Schroer, R. Schwaiger, O. Kraft, Approaching theoretical strength in glassy carbon nanolattices, Nature Materials 15 (2016)-
 438–443.

24

V. Harinarayana and Y.C. Shin
[125] T. Bückmann, N. Stenger, M. Kadic, J. Kaschke, A. Fro¨lich, T. Kennerknecht, C. Eberl, M. Thiel, M. Wegener, Tailored 3D mechanical metamaterials made by dip-in direct-laser-writing optical lithography, Advanced Materials 24 (2012) 2710–2714.
[126] M. Kadic, T. Bückmann, N. Stenger, M. Thiel, M. Wegener, On the practicability of pentamode mechanical metamaterials, Applied Physics Letters 100 (2012), 191901.
[127] G.W. Milton, A.V. Cherkaev, Which Elasticity Tensors are Realizable? Journal of Engineering Materials and Technology 117 (1995) 483–493.
[128] D. Schurig, J.J. Mock, B.J. Justice, S.A. Cummer, J.B. Pendry, A.F. Starr, D. R. Smith, Metamaterial Electromagnetic Cloak at Microwave Frequencies, Science 314 (2006) 977–980.
[129] L.H. Gabrielli, J. Cardenas, C.B. Poitras, M. Lipson, Silicon nanostructure cloak operating at optical frequencies, Nature Photonics 3 (2009) 461–463.

Optics and Laser Technology 142 (2021) 107180
[130] J. Fischer, T. Ergin, M. Wegener, Three-dimensional polarization-independent visible-frequency carpet invisibility cloak, Optics Letters 36 (2011) 2059–2061.
[131] T. Bückmann, M. Thiel, M. Kadic, R. Schittny, M. Wegener, An elasto-mechanical unfeelability cloak made of pentamode metamaterials, Nature Communications 5 (2014) 4130.
[132] M. Kadic, T. Bückmann, R. Schittny, M. Wegener, Metamaterials beyond electromagnetism, Reports on Progress in Physics 76 (2013), 126501.
[133] Y. Liu, X. Zhang, Metamaterials: a new frontier of science and technology, Chemical Society Reviews 40 (2011) 2494–2507.
[134] J. Bauer, L.R. Meza, T.A. Schaedler, R. Schwaiger, X. Zheng, L. Valdevit, Nanolattices: An Emerging Class of Mechanical Metamaterials, Advanced Materials 29 (2017).
[135] J.U. Surjadi, L. Gao, H. Du, X. Li, X. Xiong, N.X. Fang, Y. Lu, Mechanical Metamaterials and Their Engineering Applications, Advanced Engineering Materials 21 (2019) 1800864.

25

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:01.215Z
- **Text Length:** 123914 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
