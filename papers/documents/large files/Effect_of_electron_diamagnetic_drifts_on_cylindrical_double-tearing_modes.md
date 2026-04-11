# PDF Document: Abbott and Germaschewski - 2015 - Effect of electron diamagnetic drifts on cylindrical double-tearing modes.pdf

**File Path:** Abbott and Germaschewski - 2015 - Effect of electron diamagnetic drifts on cylindrical double-tearing modes.pdf

**Processed Date:** 2026-02-10T18:18:14.130Z

**File Size:** 8674.28 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2744

**Title:** Effect of electron diamagnetic drifts on cylindrical double-tearing modes

**Collection:** Large Files

---

## Extracted Text Content

Effect of electron diamagnetic drifts on cylindrical double-tearing modes
Stephen Abbott1 and Kai Germaschewski1
University of New Hampshire, Durham, NH 03824
Double-tearing modes (DTMs) have been proposed as a driver of ‘off-axis sawtooth’ crashes in reverse magnetic shear tokamak configurations. Recently differential rotation provided by equilibrium sheared flows has been shown capable of decoupling the two DTM resonant layers, slowing the growth the instability. In this work we instead supply this differential rotation using an electron diamagnetic drift, which emerges in the presence of an equilibrium pressure gradient and finite Larmor radius physi-
cs. Diamagnetic drifts have the additional benefit of stabilizing reconnection local to the two tearing layers. Conducting linear and nonlinear simulations with the extended MHD code MRC-3d, we consider an m = 2, n = 1 cylindrical double-tearing mode. We show that asymmetries between the resonant layers and the emergence of an ideal MHD instability cause the DTM evolution to be highly dependent on the location of the pressure gradient. By locating a strong drift near the outer, dominant resonant s-
urface are we able to saturate the mode and preserve the annular current ring, suggesting that the appearance of DTM activity in advanced tokamaks depends strongly on the details of the plasma pressure profile.
I. INTRODUCTION
The promising properties of the reversed magnetic shear (RMS) tokamak configuration have led to a recent increased interest in the double tearing mode. RMS configurations result in safety factor profiles that are nonmonotonic. If two rational surfaces of the same q exist near each other within the plasma, they may couple together via ideal MHD scale processes to form a single double-tearing mode (DTM). Linearly the interaction of the two surfaces creates a self-driven reconnecting instability that-
 depends weakly on resistivity.1 Nonlinearly the DTM can potentially disrupt the annular current ring of RMS devices,2 generate strong sheared flows,3 and release large bursts of kinetic energy.4 As such, they are a proposed driver of off-axis sawtooth behavior. One means of stabilizing double-tearing mode activity is the application of differential rotation to the two DTM layers. In slab Cartesian simulations equilibrium sheared flow has been shown to interfere with the coupling between the reson-
ant layers to result in two decoupled, drifting single tearing modes.5 Further increase in the flow amplitude generates Alfv ́en resonance layers that couple to the tearing surfaces, increasing or decreasing the mode growth depending on their proximity. Nonlinearly these Alfv ́en resonances may shield the plasma core and suppress DTM mode growth.6,7 The appearance of such layers requires, however, flow amplitudes near the in-plane Alfv ́en speed and shears near the threshold for Kelvin-Helmholtz i-
nstability,5 potentially triggering greater instability. Thus we are motivated to explore alternate means of providing differential plasma rotation. Diamagnetic drifts emerge as a result of finite Larmor radius physics in the presence of a pressure gradient such as the internal transport barriers (ITBs) observed in RMS plasmas.8 They have long been studied as means of stabilizing reconnecting modes, and have several advantages over equilibrium flow. In particular, diamagnetic drifts local to the r-
econnecting layer interfere with the conversion of magnetic energy to kinetic.9 This local effect has been shown to saturate the m = 1 kink-tearing
mode in conventional tokamaks,10 leaving finite sized islands during incomplete sawtooth crashes.11 The influence of both pressure gradients and diamagnetic drifts on double-tearing modes has been considered previously by other authors. In resistive, reduced MHD simulations Zhao et al.12 examined the impact of equilibrium pressure gradients on a cylindrical DTM with a small inter-resonant spacing. Their results show that the pressure gradient modifies the dependence of the DTM on resistivity, caus-
ing variations in the spectrum of modes at a given surface. In this work we will expand their study to more widely spaced modes and a wider variety of pressure gradients, as well as introduce finite Larmor radius effects. Maget et al.13 considered neoclassical effects on a DTM in toroidal simulations, targeting Tore Supra experiments. They found some mode numbers were stabilized by the addition of diamagnetic drifts, whereas others were enhanced due to toroidal effects. Their simulations target, h-
owever, specific discharges and do not consider variations in the pressure and drift profiles, thus do not illuminate the role of differential rotation in DTM evolution. In this work, we use Hall MHD simulations to examine the impact of diamagnetic drifts on a cylindrical m = 2, n = 1 double-tearing mode, considering both the ability of an electron diamagnetic drift to decouple the two tearing layers and to stabilize them once separated. To this end, we structure this paper as follows. In Section -
II we introduce the Hall MHD model and describe our simulation code MRC-3d. Section III defines the equilibrium safety factor and density profiles used for this study. In Section IV we report the results of linear resistive and Hall MHD simulations. We find that the addition of a pressure gradient to our equilibrium destabilizes an ideal MHD instability that competes with the stabilizing effects of the diamagnetic drift. As a consequence, we are able to decrease the linear DTM growth rate only by -
locating a strong diamagnetic drift at the dominant, outer rational surface. We use this result to choose characteristic profiles for nonlinear Hall MHD simulations in Section V, and show that the DTM may be saturated
arXiv:1508.01959v1 [physics.plasm-ph] 8 Aug 2015

2
before disruption of the annular current ring. Finally, we summarize our results in Section VI and discuss the consequence of this work for advanced tokamaks.
II. HALL MAGNETOHYDRODYNAMIC MODEL
Our simulation code MRC-3d uses a standard Hall MHD model.
∂ρ
∂t = −∇ · (ρU − D∇ρ) (1)
∂P
∂t = −∇ · [ρUU − BB + I(p + B2/2) − ρν∇U] (2)
∂Te
∂t = −U · ∇Te − (γ − 1)Te∇ · U (3)
ps = ρTs (4)
E = −U × B + di
ρ (J × B − ∇pe) + ηJ (5)
∂B
∂t = −∇ × E (6)
J = ∇ × B (7)
where p = (1 + τ )ρT is the pressure and τ = Ti/Te is the ratio of the ion to electron temperatures. In this work we focus on the cold-ion regime (τ = 0), thus excluding ion diamagnetic drifts. The simulation code MRC-3d14 implements the above model in a fully conservative, finite-volume scheme similar to Chac`on15, with additional di scale Hall and electron pressure gradient terms. Lengths are normalized to the cylinder radius, magnetic fields to the asymptotic in-plane magnitude, and velocities -
to the in-plane Alfv ́en speed. All other normalizations follow from these. Data management and implicit time integration are accomplished via the PETSc16–18 interface in the LIBMRC computational library.19 We conduct simulations in 2D helically symmetric cylindrical geometry. Derivatives in radial 0 ≤ r ≤ 1 and poloidal 0 ≤ θ ≤ 2π coordinates are discretized directly. The cylinder is assumed to be periodic in z with a length of 2πR where R = 10 is the major radius of an approximately equivalent t-
orus with inverse aspect ratio = 0.1. Derivatives in the axial coordinate φ = z/R are taken to be dφ = ι−1dθ where ι = n/m is the twist of the helix. Thus for analysis we define the helical coordinates
uˆ = 1
√
1 + n2
m2
r2 R2
[θˆ − n
m
r
R zˆ
]
(8)
ˆh = 1
√
1 + n2
m2
r2 R2
[
zˆ + n
m
r R
θˆ
]
(9)
where rˆ and uˆ represent the two dimensional perpendicular plane and ˆh is directed along the helix. The helical flux function ψ∗ is then defined as
B = ∇ψ∗ × ˆh + Bhˆh (10)
To reduce the computational costs of this work we use resistivities on the order of η ∼ 10−5. This unrealistically large level of diffusion causes the equilibrium to decay on a time scale comparable to the growth time of resistive instabilities. MRC-3d features a mechanism to prevent equilibrium decay that is equivalent to the addition of a source electric field in Ohm’s law (Eqn. 5). In nonlinear simulations we enable this mechanism and prevent the resistive decay of the equilibrium. We have conf-
irmed that the major results of this work persist when the source electric field is disabled, and will note explicitly when it impacts the mode behavior.
III. EQUILIBRIUM
To generate an equilibrium with two nearby q = 2 rational surfaces we use the safety factor profile given by Bierwage20:
q(r) = q0F1(r)
{
1 + (r/r0)2w(r)}1/w(r)
r0 = rA|[m/(nq0)]w(rA) − 1|−1/[2w(rA)]
w(r) = w0 + w1r2
F1(r) = 1 + f1 exp {−[(r − r11)/r12]2}
(11)
with the following constants:
rA = 0.655, w0 = 3.8824, w1 = 0
f1 = −0.238, r11 = 0.4286, r12 = 0.304 (12)
We set q0 = 2.5, resulting in two q = 2 rational surfaces located at 0 < rs1 < rs2 < 1, spaced a distance D = rs2 − rs1 ≈ 0.26 apart. Diamagnetic drifts require the introduction of a pressure gradient. We use a monotonic density profile to represent an internal transport barrier as given by Zhao12:
ρ(r) = N0
{
1 − (1 − Nb) tanh(r0/δN ) + tanh[(r − r0)/δN ]
tanh(r0/δN ) + tanh[(1 − r0)δN ]
}
(13)
We fix the core density with N0 = 1 and vary r0, δN , and Nb to change the center, width, and edge magnitude of the density profile. For simplicity we take the equilibrium electron temperature to be a constant T0 = 1.0, and assume cold-ions τ = Ti/Te = 0 . We initialize the equilibrium magnetic field B0 by specifying a density profile and iteratively refining Bθ0 and Bz0 toward the above safety factor profile, subject to the constraints of force-balance and that Bz0 ∼ 10. This equilibrium has a pl-
asma parameter of β ≈ 0.01 so that β ∼ 2, consistent with the standard tokamak ordering assumption. The equilibrium safety factor and example density gradient are shown in Figure 1. This pressure gradient produces (in the cold ion regime with a constant electron temperature T0 = 1.0) an electron diamagnetic drift given by:
ω∗(r) = k · v∗e = − mdiBh
rρB2
∂ρ
∂r (14)

3
0.0 0.2 0.4 0.6 0.8 1.0 r
1.5
2.0
2.5
3.0
3.5
4.0
4.5
5.0
5.5
q(r)
0.3
0.4
0.5
0.6
0.7
0.8
0.9
1.0
1.1
P(r)
FIG. 1. Equilibrium safety factor profile (solid, left axis) with two nearby q = 2 rational surfaces, indicated by dot-dashed vertical lines, and an example pressure profile (dashed, right axis).
where we have assumed the perturbation wave vector is k = m/rθˆ − n/Rzˆ, commensurate with our helical symmetry. We choose three classes of density profiles, shown in Figure 2, which center the maximum gradient at different locations rs1 ≤ r0 ≤ rs2. Equal drift profiles have the peak gradient centered between the two q = 2 resonant surfaces at r0 = (rs1 + rs2)/2 and a broad width of δN = 0.2, producing equal ω∗ at both singular layers. Inner drift profiles have a narrow pressure profile of δN = 0.-
05 centered at r0 = rs1, providing a strong drift at the inner rational surface and negligible ω∗ at the outer. Finally, outer drift profiles are localized near r0 = rs2 with δN = 0.05 so that the inner rational surface experiences negligible ω∗. Equal drift profiles demonstrate the stabilizing effects of local diamagnetic drift on both surfaces. The inner and outer drift profiles produce a differential diamagnetic drift ∆ω∗ = |ω∗(rs1) − ω∗(rs2)|, resulting in an additional differential rotation e-
ffect and asymmetric local stabilization of the two surfaces. The impact of diamagnetic drifts in more realistic ITB-like profiles will likely be some intermediate form of these three prototypical equilibrium types.
IV. LINEAR DRIFTS
The basic consequences of introducing diamagnetic drifts to DTM evolution are clearly observable during the linear phase. MRC-3d includes a one dimensional, linearized form of the model given in Section II, which we will use for this portion of the study. We treat derivatives in r using finite volume discretization and apply the Fourier ansatz F (r, θ, z) = f (r) exp (mθ/r − nz/R) to derivatives in θ and z, where the poloidal and toroidal mode numbers m = 2 and n = 1 are chosen to capture the lowe-
st (and fastest growing) harmonic. From initial
value simulations we fit the growth rate γR of the mode from the time evolution of the magnetic and momentum field amplitudes. To extract the mode drift frequency γI we apply a discrete Fourier transformation (DFT) to the time series output of the helical flux function ψ∗. The reduction to a one dimensional linear model allows us to easily conduct scaling studies of DTM behavior in the three equilibria types given above. For each profile type, we run simulations over a range of diamagnetic drift v-
alues 0 ≤ ω∗ ≤ 0.16. For each simulations we specify the center of the gradient r0 and the desired drifts at the inner (ω∗(rs1)) and outer (ω∗(rs2)) q = 2 rational surfaces, then iteratively refine the density height Nb and the magnetic fields to produce the desired profile. We then seed a small m = 2, n = 1 perturbation onto this equilibrium and run the initial value simulation using a resistivity η = 1 × 10−5. To enhance numerical stability we add in small amounts of viscosity, particle diffusiv-
ity, and temperature diffusivity ν = D = DT = 10−1 × η. These extra dissipation coefficients smooth noise in the linear simulations and allow easier analysis; we have confirmed that they have a negligible impact on the measured linear growth rates.
A. Ideal MHD instability
Before examining the impact of the diamagnetic drift we first set di = 0 and consider the addition of a pressure gradient in resistive MHD. In Figure 3 we have plotted the dependence of the linear growth rate γR on the maximum of the pressure gradient ∂rP |r=r0 . Although the diamagnetic drift is not present in these resistive simulations, we will continue referring to the three types of profiles as equal (r0 = (rs1 + rs2)/2), inner (r0 = rs1), and outer (r0 = rs2) ‘drift’ configurations. Increasi-
ng the pressure gradient increases the growth rate for all three classes of profile, although most dramatically for the ‘equal drift’ case. This dependence of the growth rate on pressure gradient suggests the m = 2, n = 1 DTM couples to an ideal MHD instability, similar to the interaction between the m = 1, n = 1 kink and tearing modes.9 We verify the presence of this ideal instability by running a scaling study of growth rate with resistivity in three sample equilibria. Figure 4 shows that in the-
 presence of a pressure gradient there is a minimum growth rate below which γ no longer varies with resistivity. This minimum value increases with increasing pressure gradient, and is not observed in the force-free equilibrium. While we have not completed the analysis of this ideal mode, Pritchett et al.1 showed in Cartesian geometry that the DTM tearing layers couple to a slab-kink mode, the stability of which determines the dependence of the growth rate on resistivity. We propose that in cylindr-
ical geometry the addition of a pressure gradient may cause this kink mode to become unstable, thus further driving the DTM growth. We note that Zhao et al.12 found a similar increase in

4
0.2 0.4 0.6 0.8 1.0 r
0.3
0.4
0.5
0.6
0.7
0.8
0.9
1.0
1.1
P(r)
Equal: r0 =(rs1 +rs2)/2
0.2 0.4 0.6 0.8 r
Inner: r0 =rs1
0.0 0.2 0.4 0.6 0.8 1.0 r
Outer: r0 =rs2
0.00
0.02
0.04
0.06
0.08
0.10
ω ∗(r)
FIG. 2. Examples of the three pressure profile types (solid lines) and the electron diamagnetic drifts they produce (dashed lines) from left to right: equal drift; inner drift; and outer drift. Vertical dash-dot lines indicate the locations of the q = 2 rational surfaces. All three profiles results in a drift of ω∗ = 0.8 at one or both of the rational surfaces, respectively.
0.00 0.02 0.04 0.06 0.08 0.10 0.12 0.14 0.16 0.18
ωres
0.000
0.005
0.010
0.015
0.020
0.025
0.030
0.035
0.040
γR
r0 =(rs1 +rs2)/2 r0 =rs1 r0 =rs2
FIG. 3. Variation in linear m = 2, n = 1 DTM growth rates γR with pressure gradient in resistive MHD. For better comparison with Figure 5 we represent the pressure gradients using ωres, which is the electron diamagnetic drift each profile would produce at the specified resonant surfaces were di = 0.1 rather than 0. The three classes of profile described in Section III are represented as: triangles–r0 = (rs1 + rs2)/2 (equal drift); squares–r0 = rs1 (inner drift); circles–r0 = rs2 (outer drift).
the DTM growth rate in the presence of a nontrivial pressure profile. In their simulations, however, the pressure gradient increased the dependence of the m = 2, n = 1 DTM on resistivity (γ ∝ η5/6). The inter-resonance distance of D = 0.26 examined here is much larger than than the D = 0.06 mode considered by Zhao, suggesting that the impact of the pressure gradient may depend on the spacing between the rational surfaces.
B. Diamagnetic drift effects
Having established via resistive simulations that the pressure gradient introduces an ideal MHD instability, we now introduce finite Larmor radius effects and consider how the diamagnetic drift impacts the cylindrical DTM. We fix the ion inertial length at di = 0.1 in Eqn. 5, which results in an ion-sound Larmor radius of
10-9 10-8 10-7 10-6 10-5 10-4 η
10-3
10-2
10-1
γR
Force-free ( rp(r =r0) =0) rp(r =r0) =−1.12 rp(r =r0) =−1.79
FIG. 4. Dependence of the m = 2, n = 1 DTM on resistivity η in the presence of a pressure gradient centered at r0 = (rs1 + rs2)/2 (equal drift profile) for different values of the peak pressure gradient. Triangles ∂rP |r=r0 = 0; squares ∂rP |r=r0 = −1.12; circles ∂rP |r=r0 = −1.79.
ρs = √βdi ≈ 0.014. This large ion scale is required to provide sufficient scale separation given our use of a large resistivity to enhance numerical stability. With di fixed, increasing the maximum pressure gradient increases the diamagnetic drift frequency. In Figure 5 we show the effect of increasing diamagnetic drift at the inner (r0 = rs1), outer (r0 = rs2), or both q = 2 rational surfaces.
Both the equal drift and inner drift profiles are dominated by the ideal MHD behavior observed in resistive MHD simulations. For ω∗ . 0.05, equal drift at both q = 2 rational surfaces counterbalances the enhanced driving energy and the growth rate remains almost constant with increasing pressure gradient. The diamagnetic drift is, however, unable overcome the ideal mode at large

5
0.000
0.005
0.010
0.015
0.020
0.025
0.030
0.035
0.040
γR
r0 =(rs1 +rs2)/2 r0 =rs1 r0 =rs2
0.000 0.025 0.050 0.075 0.100 0.125 0.150 0.175
ω∗
0.002
0.000
0.002
0.004
0.006
0.008
0.010
0.012
γI
FIG. 5. Variation in growth rate γR and mode drift frequency γI with a diamagnetic drift of ω∗ at: both q = 2 rational surfaces (triangles, equal drift); the rs1 surface (squares, inner drift); the rs2 surface (circles, outer drift). Simulations are conducted in Hall MHD, di = 0.1, ρs = 0.014, with pressure gradient as described in Sec. III
pressure gradients and γR again tracks the resistive simulations. We do not observe any region of constant growth rate for the inner drift equilibria, and the DTM behavior is dominated by the ideal MHD driving for all pressure gradients. Localized ω∗ at the outer resonant surface has a much stronger stabilizing affect on the DTM. At small drifts (ω∗ . 0.025) the growth rate decreases slowly with increasing ω∗. An inflection point is evident in the scaling near ω∗ = 0.025, after which the growth ra-
te decreases more rapidly and nearly linearly. The eigenmode at a drift of ω∗ = 0.02 (r0 = rs2, Nb = 0.949, δN = 0.05) shows a shearing of the perturbed helical flux ψ∗ between the inner and outer q = 2 surfaces that is absent in resistive simulations of the same equilibrium (Figure 6). Similar shearing of the eigenmode has been observed as consequence of equilibrium sheared flow.5,6 Differential diamagnetic drifts above the critical value of ∆ω∗ = ω∗(rs2) = 0.025 cause decoupling of the reconnect-
ing layers, i.e. the system acts predominantly as two independent, drifting, single tearing modes rather than a single double-tearing mode. Comparing two different times of an ω∗ = 0.1 outer-drift simulation in Figure 7 shows independent movement of the structure around the inner and outer rational surfaces. This decoupling is, again, similar to that observed in resistive MHD sheared flow studies.5 The continued decrease of the growth rate above ω∗ ≈ 0.25 is not present in sheared flow equilibria;-
 it is instead due to stabilizing effects of the diamagnetic drift local to the singular layer.9,10 Thus the outer drift equilibrium manifests both the decoupling properties of equilibrium sheared flow and the reconnection inhibiting benefits of the diamagnetic drift. The scaling behavior in Figure 5 shows significant differences depending on where we apply the diamagnetic
0.4 0.2 0.0 0.2 0.4
0.4
0.2
0.0
0.2
0.4
resistive: di =0
0.4 0.2 0.0 0.2 0.4
0.4
0.2
0.0
0.2
0.4
Hall: ω ∗ =0.02
FIG. 6. Linear eigenmodes of the helical flux function ψ∗ in the presence of pressure gradient centered at r0 = rs2 with Nb = 0.949. In restive MHD (di = 0, left) there is no diamagnetic drift; in Hall MHD (di = 0.1, right) the outer surface experiences a drift of ω∗ = 0.02 while the inner surface does not, resulting in a shearing of the eigenmode.
0.4 0.2 0.0 0.2 0.4
0.4
0.2
0.0
0.2
0.4
t =2 ×103
0.4 0.2 0.0 0.2 0.4
0.4
0.2
0.0
0.2
0.4
t =3.5 ×103
FIG. 7. Two simulation times for a linear m = 2, n = 1 DTM with pressure profile centered at r0 = rs2 producing a localized drift of ω∗ = 0.1. The perturbed helical flux ψ∗ at the later time (right) is not a simple rotation of the earlier time (left). Instead the inner and outer rational surfaces evolve independently, overlapping between the surfaces. The two tearing layers are decoupled from each other by the differential diamagnetic drift.
drift. These differences are due to the inherent asymmetry between the two rational surfaces of the cylindrical DTM. Consider the growth rate γR and eigenmode drift frequency γI for the stabilized outer drift (r0 = rs2) and weakly destabilized inner drift (r0 = rs1) profiles. Both feature a strong diamagnetic drift localized at one of the rational surfaces, producing a differential ∆ω∗ that results in decoupling. Increasing ω∗ at r0 = rs1 does not, however, produce any measurable eigenmode drift (-
γI ). Even in the outer drift (r0 = rs2) case, where the perturbation does rotate, only one drifting eigenmode can be found via Fourier analysis. This behavior is in contrast to slab-Cartesian sheared flow studies where two oppositely drifting eigenmodes are observed post-decoupling.5 The magnetic shear is much greater at the outer rational surface than the inner (see Fig. 1), and as a consequence the driving energy local to the rs2 tearing layer is much larger. When the two layers are coupled the-
y grow as a single mode, but the equilibrium asymmetry causes

6
the eigenfunction to be biased toward the outer rational surface (Figure 6). This surface largely dominates the DTM growth. When decoupled the single layer at rs2 is the fastest growing mode; the slower mode at the inner rational surface cannot easily be detected in our initial value simulations.
A diamagnetic drift localized near r0 = rs1 stabilizes and decouples the weaker inner rational surface. The outer, dominant surface does not experience any drift, and thus the inner drift pressure profile does not result in a measurable eigenmode drift (γI ). Nor does the dominant, outer surface encounter any of the stabilizing effects of the diamagnetic drift. As a consequence, γR is largely controlled by the destabilization of the ideal MHD mode.
When the drift is instead localized near r0 = rs2, the outer surface does rotate and we measure a finite γI . The dominant surface now experiences the stabilizing diamagnetic effects and the growth rate decreases. For ω∗ > 0.1 the growth rate again slowly increases with increasing pressure gradient, and the measured mode drift frequency γI suddenly drops to a much lower value. Considering Figure 7, the eigenfunction near the inner (rs1) singular layer is clearly visible. The local diamagnetic drif-
t at rs2 has thus stabilized the outer layer sufficiently that it now has a slower growth rate than the inner, unstabilized tearing mode. Increasing the pressure gradient beyond this value will have not further decrease the growth rate, as now the ideal MHD driving of the inner surface has become dominant.
Our linear simulation results highlight two qualities of this m = 2, n = 1 double-tearing mode which limit the stabilizing properties of the diamagnetic drift. Firstly, the DTM is strongly driven by the interaction between the q = 2 rational surfaces. Unless a profile provides some differential rotation effect to decouple the two tearing layers, the diamagnetic drift is not sufficient to overcome the ideal MHD driving of the increased pressure gradient. Secondly, the asymmetric magnetic shear inhe-
rent to cylindrical geometry causes one of the q = 2 rational surfaces to be dominant. For the eigenmode growth rate to decrease, this fastest growing surface must experience the stabilizing diamagnetic drift.
V. NONLINEAR DIAMAGNETIC DRIFTS
Based on the linear results of the previous section, we choose the drift of ω∗ = 0.1 for nonlinear simulations. When localized near the outer rational surface this diamagnetic drift resulted in the lowest observed growth rate. To better understand the nonlinear evolution of the DTM we will compare the ω∗ = 0.1 outer drift profile to both the force-free DTM and equal and inner drift profiles with the same ω∗.
The nonlinear evolution of double-tearing modes is commonly classified by the growth of the kinetic and per
turbed magnetic energies:
Ek =
∫1
2 ρU · UdV (15)
Em = −
∫1
2 (δB · δB + 2δB · B0) dV (16)
The introduction of diamagnetic drifts in this work will cause the perturbations to rotate, thus the kinetic energy of all the drifting systems will typically be larger than the force-free case. As a consequence, the absolute magnitude of Ek is not as good a representation of DTM stability as Em. The general features of the kinetic energy will, however, provide an indicator of the stage of DTM evolution. The kinetic and magnetic energy growth of the forcefree, m = 2, n = 1 baseline is shown in Fig-
ure 8. The long period of nearly exponential energy growth represents the development of finite sized magnetic islands such as those in Figure 9. In our simulations these magnetic islands do not develop the magnetic structure necessary for the explosive growth phase observed in higher mode number DTMs;4,21 the kinetic energy of the force-free DTM in Figure 8 approaches a maximum value at simulation time t ≈ 265 smoothly. This maximum Ek corresponds to the separatrix at the inner rational surface m-
erging with that of the outer, as show in Figure 9. At this time the flux between the rational surfaces has been consumed by the reconnecting layers and the annular current ring is disrupted. Continued evolution beyond this point results in the magnetic islands reconnecting completely and relaxation of the system. A particular feature of this moderately spaced, low mode number DTM is that the flux surrounding the magnetic axis is consumed by reconnection at the rs1 rational surface, causing the in-
ner current sheets to merge across r = 0. Other simulations of off-axis sawtooth activity in TFTR2 have shown similar behavior, however it is not typically observed in higher mode number or more closely spaced DTMs.4,20 In this work we treat the separatrix merging event as a complete loss of system stability, and thus will not consider whether such highly symmetric behavior is relevant to realistic devices. To evaluate the impact of electron diamagnetic drifts nonlinearly we consider examples from-
 each of the three classes of pressure profile (equal, inner, and outer drift) that have an equilibrium drift of ω∗ = 0.1 at both rational surfaces, just the inner, or just the outer. To decrease simulation time we seed our 2D helically symmetric simulations with an m = 2, n = 1 perturbation approximately 1 × 10−4 times the equilibrium field, and evolve the system using an implicit, second order CrankNicolson method. For these simulations we use a grid of 2048 cells in r and 512 in θ, with a nonun-
iform distribution in the radial coordinate that increases resolution at and within the rs2 surface while decreasing it towards the r = 1 conducting wall boundary. To aid numerical stability we choose a resistivity of η = 2 × 10−5 and set all other dissipation coefficients to 1 × 10−5. We have suc

7
0 100 200 300 400 500 600 700
10-9
10-8
10-7
10-6
10-5
10-4 Kinetic Energy
0 100 200 300 400 500 600 700
10-9
10-8
10-7
10-6
10-5
10-4 Magnetic Energy
Force-free r0 =rs1 r0 =rs2
r0 =(rs1 +rs2)/2
FIG. 8. Nonlinear kinetic and energy growth of the DTM in the presence of various pressure profiles. The force-free profile has no equilibrium diamagnetic drift. The remaining profiles have drifts of ω∗ = 0.1: r0 = (rs1 + rs2)/2 - equal drift at both q = 2 surfaces; r0 = rs1 - localized at the inner surface; r0 = rs2 - localized at the outer surface.
0.50 0.00 0.50
0.60
0.40
0.20
0.00
0.20
0.40
0.60
t =180
0.50 0.00 0.50
t =265
FIG. 9. Contours of the helical flux function ψ∗ show the island growth regime (left) and separatrix merging event (right) of the nonlinear, force-free DTM.
cessfully convergence tested the following results in both spatial and time resolution, and also verified that the extra dissipation coefficients do not significantly impact the mode behavior.
A. Inner drift
During the linear phase, locating a pressure gradient at the inner rational surface produced a marginal increase in the growth rate but otherwise did not significantly impact the mode evolution. Nonlinearly we find that the dominance of the rs2 rational surface persists and a strong pressure gradient (and thus drift) at rs1 results in slightly faster growth of the magnetic perturbation when compared to the force-free system (Figure 8). We find that the island at the outer rational surface quickly -
grows large enough to interlock the layer at the inner surface, which has been previously been observed in nonlinear
0.50 0.00 0.50
0.60
0.40
0.20
0.00
0.20
0.40
0.60
ψ∗
0.50 0.00 0.50
In-plane flow
FIG. 10. Applying a diamagnetic drift of ω∗ = 0.1 at the outer rational surface (r0 = rs2) saturates the DTM, as shown by contours of the helical flux ψ∗ (left) and perpendicular flow (right) at the final simulation time of t = 750.
differential rotation simulations.22 Once recoupled, the separatrix merging event proceeds with only minor deviation from the force-free system. Thus locating a drift at the inner, sub-dominant rational surface results in more system kinetic energy (due to plasma flows near the inner surface) but is not an effective means of slowing DTM mode growth.
B. Outer rational surface
Locating a strong diamagnetic drift at the outer resonant surface strongly stabilizes the nonlinear DTM. The early time growth of Em in Figure 8 shows large oscillations, indicating that the two tearing surfaces are initially decoupled. At later times these fluctuations continue, but at a smaller amplitude compared to the total perturbed magnetic energy.
Considering the state of the system at the last simulation time (t = 750, Figure 10), a significant amount of flux remains between the two q = 2 surfaces and the annular current ring is intact. The plasma flow is largely circulating inside the outer islands rather than between the two surfaces. The flattening of the energy growth, together with the relaxed magnetic structure in Figure 10, shows that the fundamental m = 2, n = 1 double-tearing mode is effectively saturated. Intermittent reconnectio-
n activity causes late time fluctuations of Ek and Em as the system oscillates, but does not significantly disturbed the saturated state. At these late times the source electric field causes slow growth of the perturbed perturbed magnetic energy, as it drives the system back toward equilibrium. By comparing to simulations without the source field we have determined that it has the effect of ‘pumping’ the simulation with energy rather than allowing it to fully relax.

8
0.60 0.40 0.20 0.00 0.20 0.40 0.60
0.60
0.40
0.20
0.00
0.20
0.40
0.60
t =250
0.60 0.40 0.20 0.00 0.20 0.40 0.60
t =390
FIG. 11. Simulation times t = 250 (kinetic energy rollover) and t = 390 (last simulation time) for an equal drift ω∗ = 0.1 DTM. Nonlinear enhancement of the pressure gradient severely inhibits reconnection so that flux remains between the two rational surfaces, but cannot halt the structural instability.
C. Equal drift
The nonlinear development of the equal drift profile, as viewed through the energy evolution, is significantly more complicated than the previous case. Ek growth slows significantly near t ≈ 250 (Figure 8), then rises at a reduced, fluctuating rate. In Figure 11 (at this crest in Ek) a significant amount of flux remains between the two tearing surfaces. This roll-over does not, therefore, correspond to a separatrix merging event. Even at the end of our simulation (t = 390), when the inner current -
sheets approach each other across the magnetic axis, a small amount of flux remains between the two separatrices. The decrease in Ek and Em growth is a result of nonlinear evolution of the pressure profile. Figure 12 shows cuts of ∂rp/ρ (the pressure and density contribution to Eqn. 14) across the inner and outer current sheets at time t = 250 (the roll-over point) compared to the equilibrium profile. The nonlinear growth of the magnetic islands distorts the equilibrium pressure gradient and resul-
ts in a significant enhancement to the diamagnetic drift within the tearing layers. As a consequence, reconnection is highly suppressed. Similar nonlinear enhancement of the pressure gradient has been proposed as a mechanism for saturation m = 1 kink-tearing mode.10,11 In our DTM simulation, however, this nonlinear enhancement of ω∗ does not lead to complete stabilization. The magnetic islands continue to evolve, and intermittent reconnection occurs. This continued growth of the kinetic and magnet-
ic energies (Fig. 8), and deformation of the separatrices (Fig. 11) is a consequence of the large islands sizes required to enhance the pressure gradient sufficiently to cut off reconnection. The magnetic structure has become unstable, similar to previous simulations of explosive-type doubletearing modes,21,23 and thus the instability continues to develop instead of saturating. In this respect the equal drift profile is less desirable than the outer drift, which stabilized the mode before signific-
ant deformation.
0.0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 r
12
10
8
6
4
2
0
2
rP ρ
Equilibrium Radial cut across rs1 sheet Radial cut across rs2 sheet
rs1(t =250)
rs1(t =0)
rs2(t =0)
rs2(t =250)
FIG. 12. Cuts of ∂rp/ρ across the inner and outer current sheets at t = 250 show significant enhancement of the pressure gradient compared to the equilibrium.
VI. CONCLUSION
In this work we have shown that electron diamagnetic drifts can have a stabilizing effect on the m = 2, n = 1 double-tearing mode. Their efficacy depends, however, on where they are located. Linearly we were only able to achieve a substantial decrease in the DTM growth rate by localizing a strong pressure gradient at the outer rational surface. This class of profile combined the decoupling properties of differential plasma rotation with the local stabilizing benefits of the diamagnetic drift on th-
e dominant tearing layer. The equal and inner drift profiles contained only one of these stabilizing effects, and thus could not overcome the increased ideal MHD driving caused by the pressure gradient. Nonlinearly we found the decoupling and local stabilization effects of the outer drift profile resulted in saturation of the DTM at finite amplitude. The preservation of the annular current ring in this simulation indicates that diamagnetic drifts may act as a mechanism for stabilizing off-axis saw-
tooth crashes. We also found that nonlinear enhancement of the pressure gradient in an equal drift profile was able to significantly slow the growth of the instability. The large islands necessary to halt reconnection, however, resulted in unstable magnetic structure. Our work shows that when finite Larmor radius effects are included the presence of DTM activity depends strongly on the details of the plasma pressure. The equilibria considered in this work are highly constrained, and more realistic-
 profiles will likely include some intermediate form of our results. Whether such profiles are a

9
viable mechanism for avoiding DTM driven off-axis sawtooth behavior in RMS devices is currently unclear. Extending these results to high mode number DTMs and toroidal geometry would allow better comparison to experimental data, as would consideration of non-constant temperatures and hot ions. We have provided strong evidence, however, for the dependence of DTM activity on the location of steep pressure profiles in the plasma.
ACKNOWLEDGMENTS
This work was supported by the U.S. Department of Energy, Office of Science, Office of Fusion Energy Sciences under Award Number DESC0006670. It contains research from a dissertation submitted to the Graduate School at the University of New Hampshire as part of the requirements for completion of Stephen Abbott’s doctoral degree in Physics. Calculations were performed using: Trillian, a Cray XE6m-200 supercomputer at UNH supported by the NSF MRI program under grant PHY-1229408; and Fishercat, an IB-
M Blade Center H supported by the NSF CRI program under grant CNS-0855145.
1P. Pritchett, Y. Lee, and J. Drake, Physics of Fluids 23, 1368 (1980). 2Z. Chang, W. Park, E. D. Fredrickson, S. H. Batha, M. G. Bell, R. Bell, R. V. Budny, C. E. Bush, A. Janos, F. M. Levinton, K. M. McGuire, H. Park, S. A. Sabbagh, G. L. Schmidt, S. D. Scott, E. J. Synakowski, H. Takahashi, G. Taylor, and M. C. Zarnstorff, Physical Review Letters 77, 3553 (1996). 3Z.-X. Wang, X. Wang, J. Q. Dong, Y. Kishimoto, and J. Q. Li, Physics of Plasmas 15, 082109 (2008). 4Y. Ishii, M. Azumi, G. Kurita, a-
nd T. Tuda, Physics of Plasmas 7, 4477 (2000). 5A. Mao, J. Li, Y. Kishimoto, and J. Liu, Physics of Plasmas 20, 022114 (2013). 6Z.-X. Wang, L. Wei, X. Wang, and Y. Liu, Physics of Plasmas 18, 050701 (2011).
7T. Voslion, O. Agullo, P. Beyer, M. Yagi, S. Benkadda, X. Garbet, K. Itoh, and S.-I. Itoh, Physics of Plasmas 18, 062302 (2011). 8H. Y. Yuh, F. M. Levinton, R. E. Bell, J. C. Hosea, S. M. Kaye, B. P. LeBlanc, E. Mazzucato, J. L. Peterson, D. R. Smith, J. Candy, R. E. Waltz, C. W. Domier, N. C. Luhmann, W. Lee, and H. K. Park, Physics of Plasmas 16, 056120 (2009). 9G. Ara, B. Basu, B. Coppi, G. Laval, M. Rosenbluth, and B. Waddell, Annals of Physics 112, 443 (1978). 10B. Rogers and L. Zakharov, Ph-
ysics of Plasmas 2, 3420 (1995). 11M. T. Beidler and P. a. Cassak, Physical Review Letters 107, 255002 (2011). 12X. M. Zhao, X. D. Peng, C. J. Tang, and X. M. Qiu, Physics of Plasmas 18, 072506 (2011). 13P. Maget, H. Lu ̈tjens, J.-F. Luciani, X. Garbet, O. Fe ́vrier, and J.-L. Se ́gui, Physics of Plasmas 21, 062504 (2014). 14S. Abbott and K. Germaschewski, “The Magnetic Reconnection Code (MRC) documentation,” http://fishercat.sr.unh.edu/ mrc-v3 (2014).
15L. Chac ́on, Computer Physics Communications 163, 143 (2004). 16S. Balay, S. Abhyankar, M. F. Adams, J. Brown, P. Brune, K. Buschelman, V. Eijkhout, W. D. Gropp, D. Kaushik, M. G. Knepley, L. C. McInnes, K. Rupp, B. F. Smith, and H. Zhang, “PETSc Web page,” http://www.mcs.anl.gov/petsc (2014).
17S. Balay, S. Abhyankar, M. F. Adams, J. Brown, P. Brune, K. Buschelman, V. Eijkhout, W. D. Gropp, D. Kaushik, M. G. Knepley, L. C. McInnes, K. Rupp, B. F. Smith, and H. Zhang, “PETSc users manual,” Tech. Rep. ANL-95/11 - Revision 3.5 (Argonne National Laboratory, 2014). 18S. Balay, W. D. Gropp, L. C. McInnes, and B. F. Smith, in Modern Software Tools in Scientific Computing, edited by E. Arge, A. M. Bruaset, and H. P. Langtangen (Birkh ̈auser Press, 1997) pp. 163–202. 19K. Germaschewski, “libmrc-
: a library for parallel pde solvers,” http://fishercat.sr.unh.edu/trac/libmrc (2011).
20A. Bierwage, S. Benkadda, S. Hamaguchi, and M. Wakatani, Physics of Plasmas 12, 082504 (2005). 21M. Janvier, Y. Kishimoto, and J. Li, Physical Review Letters 107, 1 (2011). 22X.-Q. X. Wang, X.-Q. X. Wang, W.-B. Xu, and Z.-X. Wang, Physics of Plasmas 18, 012102 (2011). 23Y. Ishii, M. Azumi, and Y. Kishimoto, Physical Review Letters 89, 205002 (2002).

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:14.130Z
- **Text Length:** 40538 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
