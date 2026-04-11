# PDF Document: (Basic Equations - 2008) On the transport of atomic ions in linear and multidimensional ion trap arrays.pdf

**File Path:** (Basic Equations - 2008) On the transport of atomic ions in linear and multidimensional ion trap arrays.pdf

**Processed Date:** 2026-02-10T18:15:00.104Z

**File Size:** 4590.83 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 684

**Title:** (Basic Equations - 2008) On the transport of atomic ions in linear and multidimensional ion trap arrays

**Collection:** Multiplexing > Ion Shuttling

---

## Extracted Text Content

Quantum Information and Computation, Vol. 8, No. 6&7 (2008) 0501–0578 c Rinton Press
ON THE TRANSPORT OF ATOMIC IONS IN LINEAR AND MULTIDIMENSIONAL ION TRAP ARRAYS
D. HUCULa, M. YEO, S. OLMSCHENK, C. MONROE FOCUS Center and Department of Physics, University of Michigan, Ann Arbor, Michigan, 48109
W.K. HENSINGER Department of Physics and Astronomy, University of Sussex
Falmer, Brighton, East Sussex, BN1 9QH, UK
J. RABCHUK Department of Physics, Western Illinois University
Macomb, Illinois 61455
Received February 21, 2007 Revised October 23, 2007
Trapped atomic ions have become one of the most promising architectures for a quantum computer, and current eﬀort is now devoted to the transport of trapped ions through complex segmented ion trap structures in order to scale up to much larger numbers of trapped ion qubits. This paper covers several important issues relevant to ion transport in any type of complex multidimensional rf (Paul) ion trap array. We develop a general theoretical framework for the application of time-dependent electric ﬁe-
lds to shuttle laser-cooled ions along any desired trajectory, and describe a method for determining the eﬀect of arbitrary shuttling schedules on the quantum state of trapped ion motion. In addition to the general case of linear shuttling over short distances, we introduce issues particular to the shuttling through multidimensional junctions, which are required for the arbitrary control of the positions of large arrays of trapped ions. This includes the transport of ions around a corner, through -
a cross or T junction, and the swapping of positions of multiple ions in a laser-cooled crystal. Where possible, we make connections to recent experimental results in a multidimensional T junction trap, where arbitrary 2-dimensional transport was realized.
Keywords: ion traps, quantum computing, ion trap array, quantum information, shuttling, atom trapping and cooling, laser cooling, corner shuttling, trapped ions, adiabatic transport Communicated by: D Wineland & R Blatt
1 Introduction Trapped ion systems serve as a promising direction toward realizing an operational quantum computer [1]-[26]. Many experiments in ion trap systems have been performed to show entanglement [4]-[11], fundamental logic gates [11]-[17], and teleportation [18, 19]. Algorithms have even been performed on a small number of trapped ions [20]-[24]. One of the remaining challenges toward realizing a useful quantum information processor is that of scaling up these proof-of-principle experiment-
s.
aElectronic mail: dhucul@mit.edu
501

502 On the transport of atomic ions in linear and multidimensional ion trap arrays

One proposal for scaling up a trapped ion quantum computer is to create an integrated array of linear rf Paul ion traps, divided into regions for storage and entanglement. Such a device would carry out logical operations by generating two-particle entanglement between any pair of ions by shuttling the ions out from storage into the entanglement zones, and bringing them back into storage as required for the completion of the algorithm [3, 25]. This quantum computing architecture requires arbitrary -
two-dimensional control of trapped ions that may consist of four key protocols: linear shuttling, corner shuttling, separation and recombination. These key protocols may be combined to produce other necessary operations such as a swapping protocol to switch the positions of two trapped ions [26].

The process of shuttling ions from a storage region to an entanglement region and back requires sophisticated, accurate and detailed knowledge of the time-dependent electric ﬁelds in order to control the ions’ dynamics in the trap arrays. For trap arrays containing many ions, the cost of calculating the necessary electric ﬁelds for each intermediate set of voltages during a shuttling operation is prohibitive. An alternative approach is to develop a set of numericallyobtained “basis functions,” tha-
t represent the contribution to the electric potential seen by the ion due to a unit voltage applied to each of the dc electrodes in the trap array, the others being held at zero voltage. The electric potential produced by an arbitrary set of voltages on the electrodes is calculated by multiplying the basis function for each electrode with the actual applied voltage, and then adding up the corresponding potentials at all points in space.

In order to shuttle ions in an array of linear ion traps, the control voltages are varied

in time and the basis function technique is used to calculate the potential as a function of

time. To choose the appropriate methods to simulate the ions’ motion in the trap, it is

important to determine the purpose of the simulation to be carried out. Typically we will

be interested in moving ions between points inside the array successfully while minimizing

the kinetic energy that the ion acquires during the shuttling process. This can be simulated

by solving the classical equations of motion using the calculated potential. The question

arises whether there are important corrections if one considers the full quantum evolution

of the system. Berman and Zaslavsky [27] showed that the breakdown of quantum-classical

correspondence occurs on a time scale at which the quantum wave function spreads suﬃciently

over a macroscopic part of phase space to feel anharmonicities in the potential. This is

because the quantum evolution of the Wigner function may be expressed as the sum of the

Poisson bracket (describing classical evolution) and quantum correction terms that contain

higher order spatial potential derivatives [28]. These quantum corrections will be negligible

if the ion is shuttled adiabatically (or such that it remains in the Lamb Dicke regime) as

the ion remains close to the bottom of the well and the potential may be approximated

well as a harmonic potential. Quantum corrections may become important if the ion samples

anharmonic parts of the potential. In that case we expect quantum corrections to be important

if

the

shuttling

process

occurs

on

timescales

that

are

of

order

th¯

=

1 λ

ln

A h¯

where λ is the

Lyapunov exponent for the dynamic evolution of the system and A is the action of motion [28].

Nevertheless, it may be that corrections in the calculated electric potential due to the ﬁnite

accuracy of the numerical solver will weigh stronger than the appearance of quantum-classical

divergence. We also point out that the quantum bit of a single ion is always encoded in the

internal state of the ion, and we may only require the ion to remain inside the Lamb-Dicke

regime after the shuttling process in order to allow the execution of further quantum gate

D. Hucul, M. Yeo, W.K. Hensinger, J. Rabchuk, S. Olmschenk, and C. Monroe 503

operations. Preserving the actual motional quantum state of the ion during the shuttling process is therefore not likely to be a criterion for the development of shuttling protocols that move ions between interaction and entanglement zones. Finally the ion may also be cooled via sympathetic cooling [29]-[33] after the shuttling operation. Indeed such cooling may also accommodate shuttling operations that fail to conﬁne ions within the Lamb-Dicke regime. Therefore the primary function of the simula-
tion is to provide a highly reliable transport protocol of the ion through the complicated potential inside the array.
This paper is organized in the following way. In the next section, we ﬁrst discuss the derivation of the electric ﬁeld inside an ion trap. We then consider the numerical calculation of the resultant classical motion of an ion in this ﬁeld. In section 3, by determining the quantum mechanical state of the ion after shuttling, we derive constraints and ﬁgures of merit that may be used to design and characterize shuttling protocols. In section 4, we compare and contrast salient features of various two-
-dimensional ion trap architectures, paying particular attention to the junction regions. In section 5, using the T-junction ion trap array as a case study, we consider the practical design and implementation of key ion shuttling protocols. This culminates in the swapping of two ions in a linear chain. In section 6, we brieﬂy consider ion transport and storage in a 3 dimensional array and present conclusions in section 7.

2 Simulation of Trapped Ion Dynamics Via Basis Functions
2.1 Justiﬁcation of the Basis Function Technique
It is possible to simulate the potential in any complex, multi-zone ion trap by developing electric potential basis functions for a given trap geometry. The electric potential for any arbitrary voltage conﬁguration of the trap electrodes can then be built up as a linear combination of the basis functions. The electric potential of any arbitrary charge conﬁguration with Dirichlet boundary conditions can be written as [34]:

Φ(x)

=

1 4πǫ0

V

ρ(x ′)G(x, x,′

)d 3x ′

−

1 4π

S

Φ(x

′

)

∂

G(x, x ∂n′

′

)

da′

(1)

In Eq. 1, the ﬁrst integral is an integral over the volume interior to the boundary with

the appropriate symmetric Green function G(x, x ′). Inside of an empty ion trap, there is

no free charge so ρ(x ′) = 0 making the ﬁrst term of Eq. 1 zero. The second integral is an

integral over the surface of each electrode Φ(x′) multiplied by the outward normal derivative

of the Green function with respect to the surface n′. It is possible to write the potential that

is speciﬁed on every trap electrode as a sum of potentials on each individual electrode with

all other electrodes held at ground.

Φ(x′) = Φi(x ′)

(2)

i

This changes Eq. 1 to

Φ(x)

=

−

1 4π

i

Si

Φi(x,′

)

∂Gi(x, ∂n′i

x

′)

da′

(3)

As can be seen in Eq. 3, the total electric potential Φ(x) is a sum of the potentials produced by each electrode surface individually when all other electrodes and boundaries are

504 On the transport of atomic ions in linear and multidimensional ion trap arrays

held at zero potential, as is expected from the linear nature of Laplace’s equation. Since the voltage is constant over each electrode surface, we can rewrite Eq. 3 as a sum of the constant voltage Vi times the surface integral only for electrode i in the trap.

Φ(x) =

−Vi 4π

i

S′

∂

G(x, x ∂n′

′

)

da′

=
i

i

ViΘi,

(4)

where

Θi

=

−

1 4π

S′

∂

G(x, x ∂n′

′

)

da′

(5)

is the basis function for the electric potential produced by the i-th electrode held at 1 volt,

all others held at ground. The basis functions, as solutions of Laplace’s equation, are strictly

valid only for static voltage conﬁgurations. However, they are perfectly satisfactory for de-

scribing the rf potential and switching potentials used in rf Paul traps, because the shortest wavelengths (≈ 101 m) associated with the time-dependent ﬁelds at these frequencies (≈ 106 Hz) will be much greater than the corresponding trap dimensions (> 10−3 m), allowing us to

calculate the ﬁelds and potentials in the problem quasi-statically. Eﬀectively, we are consider-

ing any changes of the potential in the trap region to be uniform throughout, and essentially

simultaneous with the change in the voltage on the electrodes. Therefore, we can introduce

time dependence in the switching potentials simply by treating the voltages on the electrodes,

Vi, as functions of time. The basis function Θrf obtained in this manner for the rf electrodes can be used to obtain
the potential energy resulting from the rf electrodes in the pseudopotential approximation

[35]. The formula for the rf pseudopotential is given by

Ψrf (x, t)

=

e2Vr2f 4mΩ2T

|∇Θrf (x)|2,

(6)

where Vrf is the amplitude of the rf voltage applied to the electrodes, m is the mass of the trapped ion, e is the charge on the ion, and ΩT is the rf angular frequency. Therefore, the rf pseudopotential is found by calculating the square of the electric ﬁeld amplitude corresponding to the electric potential, Θrf . Alternatively, if information about the micromotion of the trapped ion is sought, the time-dependent coeﬃcient of Θrf would then become

Vrfmicro = Vrf cos(ΩT t).

(7)

2.2 Numerical Techniques for Developing Basis Functions
The use of basis functions in the calculation of time-dependent potentials in complex ion trap arrays requires an accurate calculation of each basis function. This basis function is given by the potential produced by each electrode when it is held at 1.0 V while all other surfaces are held at 0.0 V. Typically, these functions must be obtained using numerical methods. A well-established and accurate method of obtaining electrostatic potentials produced by a realistic arrangement of electrodes is th-
e ﬁnite element method (FEM), which is used in many commercially-available software packages for electromagnetic ﬁeld simulations. This method requires that the entire bounded problem domain be discretized into a mesh, consisting of nodes and elements. The nodes are related to one another by simple (linear or quadratic)

D. Hucul, M. Yeo, W.K. Hensinger, J. Rabchuk, S. Olmschenk, and C. Monroe 505
functions, and the solver uses an iterative approach such as energy minimization to obtain the potential at each node so that the boundary conditions are still satisﬁed. The interpolating functions for each element relating nodal solutions are then used to ﬁnd the solution throughout the entire solution domain.
The Boundary Element Method (BEM) is an alternative numerical analysis method to the FEM. The BEM starts from the integral equation formulation of the relevant diﬀerential equation (Laplace’s equation, in this case). Since there are no charges present in the empty ion trap, only the surface integrals are non-zero. This results in a problem formulation, much like that given in equations 1 through 4, for which the potential within the problem domain is deﬁned by the surface values of the potential a-
nd the appropriate Green’s function. If the problem domain is unbounded, then the free space Green’s function for Laplace’s equation can be used. For ion traps, the potential on the surface is prescribed by the applied voltage. The ﬁelds at the surface are then found by discretizing the surface with nodes and elements and solving the resulting set of linear equations. This is equivalent to ﬁnding the charge density over each element on the surface. The solution at an arbitrary point, P, within the-
 problem domain is found by evaluating the integrals describing the contribution to the potential at P from each charge element on the surface.
A major advantage of the BEM in obtaining basis functions for ion trap arrays is the fact that the discretization of the problem is conﬁned to the boundary surfaces, so that the potential and electric ﬁeld within the problem domain will be continuous functions. A second advantage is the reduction in dimensionality of the problem (i.e., from a volume to a surface) in the BEM. As larger and larger trap arrays are considered, the bounding box volume for a ﬁnite element model will grow more rapidly th-
an the corresponding trap surface area. In these cases, the BEM can prove much more eﬃcient in calculating the basis functions for ion trap arrays. Because the BEM is restricted to linear problems for which an analytic form of the free space Green’s function exists, it is not as commonly used in commercially available software. Several non-commercial (including CMISS) and commercial (SIS’s CPOb and IES’s Coulomb 3Dc) codes use the BEM exclusively or in conjunction with the FEM.
Most commercially available software for calculating electrostatic potentials and ﬁelds, such as Tosca from Vector Fieldsd or Maxwell 3D from Ansofte , uses the FEM because of its nearly universal applicability for solving diﬀerential equations in physics. In the particular case of ion traps, the FEM provides several advantages, including the ability to account for non-linear material properties of the trap electrodes, its ability to determine mechanical and thermal eﬀects on the trap electrodes d-
uring trap operation, and having a simple means for estimating errors in the simulation. Nevertheless, care must be taken when using it for analyzing ion traps. In particular, hexahedral elements should be used with quadratic interpolating functions. While triangular and tetrahedral elements are preferable for ease of meshing the problem volume, they require a far greater number of nodes to achieve the same accuracy as can be obtained with hexahedral elements, or bricks. This is so because hexahed-
ral elements are more easily lined up along the equipotential lines in the relevant problem domain. In addition, the regular spacing of hexahedral elements helps avoid serious
bCharged Particle Optics , by Electronoptics: http://www.electronoptics.com/ cCoulomb, by Integrated Engineering Software: http://www.integratedsoft.com/ dhttp://www.vectorﬁelds.com/ eMaxwell 3D, by Ansoft: http://www.ansoft.com/

506 On the transport of atomic ions in linear and multidimensional ion trap arrays
Fig. 1. A cross-section view of a 3-layer linear rf ion trap, with four identical dc electrodes placed symmetrically about the two symmetry planes, yx and yz.
discretization errors when calculating the potential in regions where competing ﬁelds largely cancel. When calculating the rf pseudopotential, the ﬁeld amplitude is important. Linear interpolating functions will give a constant value of the ﬁeld throughout the element, a value most accurate at the element’s centroid. Quadratic elements give a more accurate picture of the ﬁeld throughout each element, although they are costly in terms of computational eﬀort.
In general, a ﬁner mesh and quadratic elements help avoid discretization errors, while larger problem domains are needed to avoid undue inﬂuence from the bounding box. These competing needs result in a rapidly growing cost in memory requirements and computational time as the trap arrays increase in complexity. Computational costs can be reduced through the use of symmetry and strategic meshing.
A symmetric linear Paul trap array will typically have a plane of symmetry in the plane of the rf electrode layer, and another plane perpendicular to the ﬁrst along the linear trap axis. The z−axis is taken to be directed out of the plane of the two-dimensional trap array, and the trap axis is taken to lie along the y-axis. Since in the calculation of Θrf all electrodes except the rf-layer are set to ground, the boundary conditions on the electrodes preserve the symmetry of the trap, and it become-
s possible to reduce the computational domain volume for the rf ﬁelds by using the yx and xz symmetry planes as external boundaries of the problem. If the boundary conditions along these planes are set so that the resulting electric ﬁeld is tangent to these planes, then the calculated potential in the reduced volume corresponds to the potential resulting from a symmetric arrangement of electrodes and voltages across the symmetry planes.
The calculations of Θi for the control electrodes are not so easily reduced, since the requirement that only the single control electrode be set to 1 volt with all other electrodes held at 0 volts breaks the symmetry of the trap. However, it is possible to use solutions for the potential which do preserve the symmetry of the trap to obtain the desired nonsymmetric potential by using linear superposition. Consider a three-layer trap with four control electrodes arranged symmetrically about the trap-
 center as illustrated for a linear trap in Fig. 1, where the basis function Θi is sought for the lower left electrode.
We can again reduce the computational volume of the problem by imposing boundaries along the yx and yz symmetry planes. If tangential boundary conditions are applied along both planes, the resulting solution for the potential in the reduced volume corresponds to the case when all four control electrodes in Fig. 1 are held at 1 volt for the full domain. The solution for the full volume is therefore obtained by adding the solution of the reduced volume

D. Hucul, M. Yeo, W.K. Hensinger, J. Rabchuk, S. Olmschenk, and C. Monroe 507

and appropriate reﬂections of this reduced volume solution. We identify this solution as

tt =

+1 +1 +1 +1

.

(8)

The array identiﬁes the eﬀective voltages on each of the control electrodes when both the

symmetry planes have tangential boundary conditions applied. In contrast to tangential

boundary conditions, normal boundary conditions on the symmetry planes require that the

resulting electric ﬁeld be normal to the boundary, giving rise to an antisymmetric arrangement

of electrodes and an antisymmetric potential. For example, if both symmetry planes had

normal boundary conditions, the solution in the reduced problem domain would correspond

to the case for the full domain when each neighboring control electrode is of opposite sign, so

that

nn =

−1 +1 +1 −1

.

(9)

The other two cases involving mixed boundary conditions on the symmetry planes are iden-

tiﬁed as

nt =

−1 −1 +1 +1

, and tn =

+1 −1 +1 −1

.

(10)

As we have shown in Sec. 2, each of these potentials can be decomposed into sums of four potentials corresponding to the contribution from each electrode separately. Each solution, tt, nn, tn, and nt, contains a mixture of those contributions. By combining the four solutions in the appropriate manner and dividing by 4, it should therefore be possible to extract the contribution from any one of the single control electrodes. This can be shown symbolically by adding the four solutions, as shown belo-
w. The use of the arrays to symbolize the solutions for each symmetry case makes it clear that this process corresponds to adding the boundary conditions on the four electrodes together. The result is a solution for the whole space potential that is produced solely by a unit voltage on the lower left electrode, all other electrodes being held at ground.

tt + nn

+ tn 4

+

nt

=

00 10

= Θlower left

(11)

The basis functions for the other three electrodes are easily obtained by the appropriate coordinate reﬂections of the ﬁrst solution. This approach, although more time-consuming, is necessary when modeling and meshing the entire problem domain becomes prohibitive due to memory restrictions. It enables the experimenter to mesh the model at a higher density for improved accuracy.
The use of hexahedral elements for meshing an ion trap model places a much greater constraint on node spacing than would be the case if tetrahedral elements are used. In the case of Vector Fields’ Opera suite, this means that node placement must be done manually, and then checked for suitability for hexahedral meshing when placement is complete. In particular, the number of nodes on opposing faces of the model must match, so that the elements are able to completely ﬁll the space in the problem dom-
ain. Nevertheless, it is possible to concentrate node placement along the channels through which ions will be expected to be shuttled, and along the electrode surfaces near which the potential is expected to exhibit

508 On the transport of atomic ions in linear and multidimensional ion trap arrays

the greatest variation. There will generally be some wasted node density in regions above and below the trap and along the channels beyond the end electrodes, due to the restrictions on the consistency of the hexahedral elements.
Ion traps are generally constructed from good conductors and dielectrics, which exhibit linear behavior under the voltages typically applied in these traps. In such cases, the accuracy of the electrostatic potentials and ﬁelds obtained using the FEM (assuming the model is a correct representation of the physical problem) is primarily a function of the local mesh spacing, and only weakly a function of the overall mesh density in the problem deﬁnition. In particular, for a local mesh size h in one d-
imension (corresponding to the mesh point spacing) and using quadratic elements, the error in the calculated potential scales as O(h3), while the error in the ﬁelds will scale as O(h2) [36].
Therefore, a reasonable estimate of the error in the FEM solution can be made by halving the mesh point spacing throughout the model, if memory permits, or otherwise, halving the mesh point spacing in the region requiring greatest accuracy, and running the model again. Percentage changes in the calculated potential and ﬁeld will then give an estimate of the error in the calculation. Thus, if the ﬁeld calculation at mesh spacing h gives a result E with unknown error ∆E, and a calculation at mesh sp-
acing h/2 gives a diﬀerent result E′ with unknown error ∆E′ then, we can compare the two unknown errors, since error scales with the square of the mesh spacing, that is,

∆E′ = ∆E/4.

(12)

Roughly speaking, we can identify the diﬀerence in the two solutions at each point as some function of the uncertainties in each solution. The most conservative assumption would be that the two solutions erred in the same sense from the true value, so that their diﬀerence is equal to the diﬀerence of the two uncertainties, that is

(E

−

E′)

≥

(∆E

−

∆E 4

)

=

3 4

∆E.

(13)

Thus, we have a loose upper bound on the error in the original solution,

|∆E|

≤

4 3

|E

− E′|.

(14)

Once the models have been meshed and analyzed, it is still necessary to evaluate the potential and/or ﬁeld at each point of interest in the problem domain. In the interest of carrying out simulations of ion trajectories it is desirable, therefore, to obtain beforehand a grid of potential or ﬁeld amplitude values covering the problem domain volume corresponding to locations where ion trapping and shuttling will take place. The grid spacing used for the array should be at least as small as the nodal-
 spacing used in the numerical simulation. There will be diminishing returns for using even denser arrays of points, since the potentials between the nodes of the ﬁnite element mesh are already calculated using quadratic interpolating functions. Since the potentials are solutions of Laplace’s equation and thus smoothly varying functions of position, it is possible to generate splined, interpolating functions from these data grids at the accuracy of the ﬁnite element solution to serve as the basis -
functions Θi for subsequent calculations of the ion dynamics.

D. Hucul, M. Yeo, W.K. Hensinger, J. Rabchuk, S. Olmschenk, and C. Monroe 509

2.3 Trapped Ion Dynamics
We now consider the desired potential by suitably superposing the basis functions multiplied by the time varying potential

U (x, t) = eVrf cos(ΩT t)Θrf (x) + e Vi(t)Θi(x)

(15)

i

where e is the charge of the ion, x is the position vector, ΩT /2π and Vrf are the applied rf frequency and amplitude, Vi(t) is the time varying potential applied on the ith control electrode and Θi(x) is the basis function of the ith electrode. Notice here that the coeﬃcient for all the basis functions have explicit time dependence.

The ion’s motion due to the electric potential Φ will consist of the low amplitude micro-

motion with frequency to the order of ΩT and the slower but larger amplitude secular motion. Very often, we only need to calculate the secular motion of the ion and ignore the micro-

motion. Therefore we may approximate Eq. 15 with a ponderomotive pseudopotential given

by [35]:

Ψ(x, t)

=

e2Vr2f 4mΩ2T

|∇Θrf (x)|2

+

e

i

Vi(t)Θi(x)

(16)

Finally, if there are k ions in the trap, the resultant force on each ion Fj is given by

Fj(x1, ..., xk, t) =

−∇U (xj, t)

+

1 4πǫ0

−∇Ψ(xj, t)

+

1 4πǫ0

i=j

|xj

e2 −xi

|3

(xj

− xi)

i=j

|xj

e2 −xi

|3

(xj

− xi)

complete ion motion ion secular motion only
(17)

Therefore, to calculate the dynamics of k ions in a trap we need to solve the set of k coupled

second order ordinary diﬀerential equations(ODEs):

x¨j

=

Fj m

(x1,

...,

xn

,

t)

≡

aj(x1, ..., xn, t)

(18)

where j is an integer from 1 to k. Determining the classical motion of trapped ions plays an important role in calculating the energy gained during shuttling as will be seen in section 3.

2.4 Numerical Methods for Obtaining Trapped Ion Dynamics
In general, there is no analytic solution for the electric ﬁeld in an ion trap, so Eq. 18 must be solved numerically. As will be seen in Section 3, the classical motion of trapped ions during shuttling protocols will play an important role in calculating the amount of heating the ions undergo from an arbitrary initial quantum state. The design of shuttling protocols requires high accuracy solutions of Eq. 18 and as such the numerical evaluation of Eq. 18 can be slow. High accuracy solutions are ne-
eded to optimize shuttling protocols by minimizing the acquired kinetic energy from shuttling. Using an AMD dual core 1.8GHz processor with 2 GB of memory to calculate the trajectory of the ion with a shuttling sequence that shuttles an ion around a corner of a T-junction ion trap array, the computer time taken to obtain the ion trajectory depends on the ODE solver method ranges from 5 hours to a full week. In complex shuttling operations where hundreds of ions may be shuttled throughout an ion tr-
ap array, one must make a judicious choice of ODE solver in order to reach the required accuracy in a feasible amount of time.

510 On the transport of atomic ions in linear and multidimensional ion trap arrays

Explicit extrapolation class methods are good for eﬃciently (minimal computing time)

solving ODE’s to high accuracy [37]. However, a caveat when using this class of methods is that the calculated electric ﬁeld has to be smooth. If the electric ﬁeld is rough, Explicit RungeKutta (ERK) methods may be a better choice [38]. In addition, if a low accuracy solution is

suﬃcient, single step methods tend to be more eﬃcient than the extrapolation class methods

[38]. This section outlines the reasons why the Bulirsch-Stoer method eﬀectively simulates ion

motion in ion trap arrays while Appendix A discusses how the Bulirsch-Stoer (B.-S.) method

works.

The ODE system of Eq. 18 can be stiﬀ if the requirement of the stability of the solution is

more stringent than the accuracy of the ODE solver [39]. One way for a system to be stiﬀ is if

the solution has some components that are rapidly varying and some other components that

are varying much more slowly (see Appendix A). The reason for the computational ineﬃciency is that in order for the solver to be stable, the time steps that the ODE solver uses must be much shorter than the time scale of the fastest changing component of the solution. Stiﬀness

may be a signiﬁcant problem in ion trap simulations as there are several time scales involved

in the ion’s motion. The dynamical evolution in ion trap systems has several important

time scales; for example, the rf micromotion has frequency of order 10-100 MHz (0.01 - 0.1

µs), secular motion of order 100-1000 kHz (1-10 µs) while shuttling times may be of order 10-1000 µs. When simulating the motion of an ion during complex shuttling operations, computational resources may be eaten up while the numerical solver calculates miromotion

and secular motion. Stiﬀness may also appear as a result of the numerical simulation of the

electric potential. Roughness in the electric potential may result in artiﬁcially large forces on

the ions that slows down the simulation. Though explicit ODE solvers such as extrapolation

class and ERK methods are usually ineﬃcient at numerically evaluating such systems, there

are ODE solver methods known as “stiﬀ solvers” that are well suited to handle these systems

[40].

We consider ODEs of the form:

dx dt

=

f (t, x)

(19)

The output of any numerical ODE solver is a series of discrete points called nodes. A node

is of the form (ti, xi) where xi is an approximation of the exact solution x(t = ti). The ﬁrst node is given by the initial conditions. Subsequently every step that the ODE solver takes

calculates one more node. The size of every step that the ODE solver takes, i.e. (ti − ti−1) is known as the step-size. The step size need not be uniform and will change adaptively in order to maximize eﬃciency (i.e. minimize computing time without an undue sacriﬁce in accuracy).

We deﬁne the local error to be the error introduced due to one step of the ODE solver (for example see equation A.4-A.6). Note that since in general, we do not know the exact solution a priori, the numerical ODE solver will always generate an estimate for the local error for every step. Finally, if we require the local error to be arbitrarily small, the ODE

solver step-sizes would then be also arbitrarily small and thus the computation time would

be extremely long. Therefore, we need to set a practical limit for the local error of every step.

This limit is known as the local error-goal and is speciﬁed by the quantities a: the accuracy

goal, and p: the precision goal. The local error goal ǫ is then [41]

ǫ = 10−a + |x| ∗ 10−p

(20)

D. Hucul, M. Yeo, W.K. Hensinger, J. Rabchuk, S. Olmschenk, and C. Monroe 511

ODE solv. method BulirschStoer ERK BDF

Computing Time 5h54m
37h9m 5h44m

Number of steps 35392
1546660 408403

Ave step size[s]
8.8 ∗ 10−10
2.0 ∗ 10−11 7.6 ∗ 10−11

Table 1. We tabulate quantities that indicate the performance of our three numerical ODE solvers. The number of steps indicate the accuracy of the solution whilst the computing time indicates the eﬃciency of the numerical method. The local error tolerance for all three simulations had an accuracy goal of a = 8 and precision of goal of p = 8 in Eq. 20. The simulations include micromotion.

A numerical ODE solver will adaptively change the step-size such that each step has a local error estimate that is smaller than the user deﬁned local error goal. Adaptive step size algorithms are further discussed in Appendix A.
Table 2.4 shows the computing time, number of steps taken and average step size between nodes while simulating shuttling an ion around the corner of a T-junction ion trap without using the pseudo-potential approximation as reported by Hensinger et al. [26] for a ﬁxed local error tolerance using three diﬀerent types of ODE solvers. The three ODE solver methods are the Bulirsch-Stoer method with adaptive step size, the Explicit Runge-Kutta (ERK) Method with adaptive step size and adaptive order, and-
 the Backward Diﬀerence Formulae (BDF) methods with adaptive step size and adaptive order. More details about each method are given in Appendix A.
For ﬁxed local error goals at each step, the error on average increases with the number of steps taken. We therefore conjecture that given two numerical ODE solvers, the ODE solver that takes less steps will usually be more accurate than the ODE solver that takes more steps. From this consideration we see that the Bulirsch-Stoer method is the best as the Bulirsch-Stoer method requires an order of magnitude fewer steps than the BDF method and two orders of magnitude fewer steps than the ERK method.-
 In addition, the Bulirsch-Stoer method takes only about 3% more computing time than the BDF method to reach a solution (see Table 1). The ERK method takes far too much computing time and this shows that it is probably impractical for large-scale simulations of ion dynamics in an ion trap array.
There is a signiﬁcant diﬀerence between the calculated ion motion using the Bulirsch-Stoer and BDF methods when linearly shuttling an ion, as can be seen in Fig. 2. To ﬁgure out the absolute accuracy of each method, it is necessary to compare the calculated numerical method with a benchmark solution- an extremely high accuracy solution. However, our modest computing resources do not permit us to ﬁnd a reasonable benchmark solution as the computing time required was several weeks. Because the poten-
tials in ion trap systems can be approximated by a harmonic oscillator potential, we compared the absolute accuracy of the Bulirsch-Stoer and BDF methods to the known solution of a harmonic oscillator.
We use the Bulirsch-Stoer Method and the Backward Diﬀerence Formulae to numerically evaluate the solution to a simple harmonic oscillator diﬀerential equation for the time interval (t = 0 s, t = 0.01 s) with ω/2π = 1 MHz. We ﬁrst observe that the BDF method takes more steps than the Bulirsch-Stoer Method; 958331 steps as compared to 207422. The second observation is that the average error increases monotonically with the number of steps taken

512 On the transport of atomic ions in linear and multidimensional ion trap arrays
Fig. 2. This ﬁgure shows the absolute value of the diﬀerence between the Bulirsch-Stoer and BDF numerical estimates of the x- and y-components of the position of an ion shuttled along a linear path. As we can see, the disagreement in the numerical estimates increase with time.
Fig. 3. (a) depicts the absolute value of the deviation of the numerical estimate derived from the Bulirsch-Stoer method and the exact solution of the equations of motion of a simple harmonic oscillator. There are several spurious peaks in the graph and these are due to inaccuracies in the interpolation process to ﬁt the generated nodes and are not errors from the numerical solution. If we ignore these spurious peaks, we note that the average error increases linearly with time and is due to the qu-
adratic potential. (b) depicts the absolute value of the deviation of the numerical estimate derived from the BDF method and the exact solution. Unlike (a), there are no spurious peaks because the BDF method generates more nodes which implies that the nodes are closer together and thus the interpolation process is more accurate. We note that in both ﬁgures the average error increases monotonically with time and the error of the solution derived from the Bulirsch-Stoer method is much smaller than t-
he error derived from the BDF method.
with ﬁxed error goals. This result is shown in Fig. 3 as plots of the absolute diﬀerence between the ODE solver method and the exact solution as a function of time. From Fig. 3, if we ignore the spurious errorsf due to the interpolation process, the error of the Bulirsch-Stoer method is much smaller than that of the BDF method and supports our conjecture that an ODE solver that can cross the interval in less steps will be more accurate than an ODE solver that crosses the interval in more steps.
We used the Bulirsch-Stoer method to simulate ion motion during shuttling because of the superior accuracy of this method for obtaining a numerical solution for an ion’s trajectory and the superior computational eﬃciency of this method. Note here that our observations pertain speciﬁcally to our particular ion trap geometry (see section 5) and our speciﬁc local error tolerances. It is possible that some other ODE solver may be more eﬀective depending on the ion trap geometry as well as the computat-
ional resources available. Although the above
fAs the BS method produces less nodes than the BD method, the polynomial interpolation of the nodes derived from the BS method is less reliable. However, the error in the polynomial interpolation has no impact on the behavior of the nodes and therefore the overall behavior of the numerical solution.

D. Hucul, M. Yeo, W.K. Hensinger, J. Rabchuk, S. Olmschenk, and C. Monroe 513

analysis implies that an ODE solver with fewer steps has superior accuracy, the intermediate motion of the ion between nodes is not accessible.

3 Theoretical Description of Shuttling Atomic Ions
So far, we have described the means by which it is possible to calculate the eﬀective electric potential at the position of the ions in an ion trap array, and also the classical trajectories that those ions will take when the voltages on the control electrodes are changed with time. The goal is to develop a system that allows ions to be moved to arbitrary locations within the trap array in a perfectly reliable manner. In addition, the ions should carry and store quantum information both before and-
 after each shuttling operation. This indicates the need to identify those shuttling operations which keep the ions trapped and cold enough to perform quantum gate operations, all the while providing maximum speed of operation. In this section, we develop a general theoretical model of the shuttling process. Our model focuses on the case in which the motion of the ion in the trap along the pathway of the ion is aﬀected. We have worked out the model in a rather complete fashion as a reference for f-
uture work and have applied it to several possible shuttling time proﬁles. Rather than just treating a simple model considering only the ﬁrst vibrational state, we calculate the general case that may be applied to a much broader context. The model is then used to identify those constraints that ensure reliable transport of ions. By identifying such parameters the reader can construct eﬀective shuttling protocols for a variety of situations. For those who wish to skip the details of the theoretical-
 analysis, the key results are presented in section 3.2.5, just prior to the section detailing how these results can be used to evaluate various shuttling procedures. A similar theoretical analysis of shuttling has recently been given by Ref. [42]. Furthermore, Ref. [43] discussed the application of control theory to single ion transport. The analysis given here emphasizes the importance of the inertial forcing of shuttled ions at the beginning and end of the protocol, as well as the possibility o-
f signiﬁcant parametric heating of the ion even for slow shuttling speeds.

3.1 The Shuttling Process

The rf Paul linear ion trap works by creating an eﬀective potential near the center of the

trap that is quadratic in all three coordinate directions. The transverse trap is produced

by the rf ponderomotive potential and is symmetric and perfectly harmonic near the trap

minimum, while the trap along the shuttling pathway is created by applying voltages to

segmented control electrodes. This potential is also harmonic to a very good approximation.

A shuttling operation involves changing the voltages on the control electrodes in time, so that

the potential minimum along the ion pathway is translated from the initial ion position to

the desired ﬁnal position.

It is helpful to begin by considering the electric ﬁeld along the ion pathway in the vicinity

of the ion. The one-dimensional harmonic potential along the trap axis corresponds to a

linearly-varying ﬁeld,

E(x) = −Ex,

(21)

with its stable equilibrium point at x = 0. This ﬁeld is the result of the potential diﬀerence between the nearest control electrodes that are held at or below ground, and the neighboring control electrodes. The shuttling operation described above corresponds to introducing a

514 On the transport of atomic ions in linear and multidimensional ion trap arrays

Fig. 4. Schematic drawing showing the relationship between the initial electric ﬁeld −Ex creating the axial trap, the time-dependent forcing ﬁeld, E(t), and the resulting ﬁeld E(x, t), along with the potentials at times 0 and t and the location of the minimum, x0(t).

potential diﬀerence between the control electrodes. This voltage diﬀerence results in a nearly spatially-uniform, time-dependent electric ﬁeld superimposed on the original trapping ﬁeld and pointing in the direction of shuttling. The resulting electric ﬁeld,

E(x, t) = −Ex + E(t) = −E(x − x0(t)),

(22)

now

has

a

stable

equilibrium

point

x0(t)

=

E(t) E

,

that

varies

with

time.

The

resulting

electric

potential is given by

V (x, t) = E

1 2

x2

−

x0(t)x

+ V0(0, t),

(23)

where V0 represents the (time-varying) potential at x = 0. We choose the zero of the electric potential to be located at x0(t), i.e. V (x = x0(t), t) = 0, and therefore,

V0(0, t)

=

1 2

E

x20(t)

=

E2(t) 2E

.

(24)

In practice, this time-dependent potential can be introduced during the shuttling process by continually raising (lowering) the voltages on the electrodes behind (ahead of) the moving ion (see Sec. 5.2).
Finally, we obtain the expression for the potential energy in the trap frame as a function of x and t,

U (x, t)

=

1 2

eE

x2 − 2x0(t)x + x20(t)

(25)

=

1 2

mω2(x

−

x0(t))2

,

(26)

where we have identiﬁed E

=

mω2 e

(See Fig. 4).

This translating potential can be thought

of as a moving bowl for the purpose of carrying a marble from place to place. Quantum

D. Hucul, M. Yeo, W.K. Hensinger, J. Rabchuk, S. Olmschenk, and C. Monroe 515

mechanically, the last term in Eq. 25 does not induce transitions between states and merely produces an overall phase factor in the quantum state because it is independent of the position operator x (see Eq. 42). Therefore, the problem of shuttling atomic ions and determining the eﬀect of shuttling on their motional states is equivalent to the problem of solving for the transitions induced in a harmonic oscillator being forced by a uniform ﬁeld, eE(t) = mω2x0(t). The forcing ﬁeld determines the lo-
cation of the instantaneous potential minimum of the moving ion trap.
We now examine the case when a cooled ion is shuttled a distance L over a time T , so that x0(t) = 0 for t < 0 and x0(t) = L for t > T . The trajectory of the potential minimum x0(t) is directly related to the time-dependent voltage diﬀerence ∆Vcap(t) applied to the relevant control electrodes. That is, we expect that

x0(t)

=

E

(t)

e mω

2

=

η(x0(t))

∆Vcap d

(t)

q mω2

,

(27)

where η(x) is a unitless geometrical function relating the control electrode voltage diﬀerence to the electric ﬁeld at position x, and d is the characteristic center-to-center distance between neighboring electrodes. Therefore, Eq. 27 tells us that from a knowledge of the desired functional form for the trajectory x0(t) and the position dependent geometrical function η(x) the required voltage diﬀerences ∆Vcap(t) across the control electrodes can be determined. Functional forms for the trajectories-
 of the potential minimum include piecewise linear functions, sinusoids, and other transcendental functions such as the hyperbolic tangent function [26]. We will therefore consider the following three potential minimum time proﬁles for translating the harmonic potential: linear (x0l(t)), sinusoidal (x0s(t)), and hyperbolic tangent (x0t(t)), deﬁned as

x0l(t)

=

L

t T

(H

(t)

−

H

(t

−

T

))

+

LH

(t

−

T

),

(28)

x0s(t)

=

L 2

1 − cos

πt T

(H(t) − H(t − T )) + LH(t − T ),

(29)

x0t(t)

=

L 2

tanh

N

2t−T T

+ tanh(N )

tanh(N )

(H(t) − H(t − T )) + LH(t − T ).

(30)

In these expressions, H(t) is the Heaviside step function, and the parameter N in the hyperbolic tangent potential minimum time proﬁle characterizes the translation rate at the midpoint of the motion and also determines the magnitude of the discontinuity in the velocity of the potential at the beginning and end of the protocol (Fig. 5). For N > 1, the time between 10% and 90% of the transition is ∼ T /N and the velocity discontinuity is ∼ (4L/T )N e−2N
Any time dependence of ω will also enter into the functional form of x0(t), as can be seen from Eq. 27. We can better separate the inﬂuence of ﬂuctuations in the frequency from that of the time-dependent electric ﬁeld, E(t), by transforming to the rest frame of the moving potential. The position coordinate becomes s = x − x0(t) and a pseudo-forcing term, mx¨0s, is simultaneously introduced into the potential energy because the reference frame of the moving potential minimum will not be inertial. T-
he potential energy from Eq. 25 then becomes

U (s, t)

=

1 2

mω

2(t)s2

+

mx¨0(t)s.

(31)

516 On the transport of atomic ions in linear and multidimensional ion trap arrays

Fig. 5. Plot of the position of the potential minimum of the trap versus time, when the potential minimum time proﬁle is linear, sinusoidal and a hyperbolic tangent (N =1 and N = 5). The variables L and T represent the total shuttling distance and time, respectively.

The potential U (s, t) still describes a forced, parametric harmonic oscillator, but the frequency variation of the potential and the forcing term due to the translation of the potential are now separate. What is more, the forcing term no longer includes the net displacement of the oscillator x0(t). Instead, it is solely a result of the inertial force on the ion due to an acceleration in the transport of the potential. If the potential were simply accelerating at a constant rate the minimum could -
be redeﬁned, as was done for the potential in the lab frame (Eq. 25). However, a shuttling process necessarily involves both a start from rest and a bringing to rest of the harmonic potential. Therefore, the ion will at the least receive two kicks or pushes away from the instantaneous potential minimum. This can be seen clearly by examining the second derivative of the representative time proﬁles for the potential minimum in the lab frame, given in Eq. 28. After invoking the properties of the deri-
vative of a delta function, we get:

x¨0l(t)

=

L T

(δ(t)

−

δ(t

−

T

)),

(32)

x¨0s(t)

=

Lπ2 2T 2

cos

πt T

(H(t) − H(t − T )),

(33)

x¨0t(t)

=

−L

4N 2 T2

coth(N )

tanh cosh2

N

2t−T T

N

2t−T T

(H(t) − H(t − T )) +

(34)

+L

N T

coth(N )

cosh2

N

2t−T T

(δ(t) − δ(t − T )).

Here we see that the inertial forcing induced during a typical shuttling protocol has the general

form

x¨0(t)

=

A(t,

T

)

L T

[δ(t)

−

δ(t

−

T

)]

+

B(t,

T

)

L T2

[H (t)

−

H (t

−

T

)]

,

(35)

where A(t, T ) and B(t, T ) are deﬁned by the particular shuttling protocol. The delta function

term, proportional to L/T , is associated with inertial kicks received by the shuttled ion due

to the sudden start-up and completion of the shuttling protocol. The step function term,

D. Hucul, M. Yeo, W.K. Hensinger, J. Rabchuk, S. Olmschenk, and C. Monroe 517

proportional to L/T 2, is associated with the inertial forcing due to the acceleration and deceleration of the shuttling potential during the shuttling protocol. The linear potential minimum time proﬁle (B(t, T ) = 0) is seen to provide two large ‘kicks’ of magnitude L/T but in opposite directions. On the other hand, it produces no push on the ion except at the start and ﬁnish of the protocol. The sinusoidal potential minimum time proﬁle (A(t, T ) = 0) has zero velocity at the start and end of the-
 shuttling, but it does provide a steady push proportional to L/T 2 over the duration of the shuttling, ﬁrst back and then forward. The hyperbolic tangent potential minimum time proﬁle has both features of the other proﬁles, to a degree controlled by the parameter N . A large value of N results in a smooth beginning and ending to the process, but a large backwards and then forward pushing in the middle. A small N produces the opposite result.
We also need to introduce an appropriate model for frequency variations of the potential as the ion is carried along during the shuttling procedure. In general, we want to consider frequency variations of the type,

ω(t)2 = ω02(1 − f (t)).

(36)

We will assume in our analysis that the function f (t) is zero at the beginning and ending

of the shuttling process. For convenience, we will consider perturbations extending from

t = −T /2 to t = T /2, and then adjust the time scale so that the shuttling and frequency

variation models match. Two types of perturbation will be considered. First, a ‘short-step’

model is considered where the trapping potential is weakened by decreasing the voltage on the

electrode in front of the ion and then strengthened by increasing the voltage on the electrode

behind the ion. This will result in a potential for which the trap frequency will gradually

decrease and then increase. The second type of perturbation to be considered is that of a

ﬂuctuating trap frequency. In this case, the ion can be thought of as being forced in one

direction by a continuously increasing electric ﬁeld. As a result, the frequency experienced

by the ion can be modulated due to the ﬂuctuating strength of the “static” trapping ﬁelds as

the ion passes gaps or other changes in the electrode structure. This ﬂuctuation could aﬀect

the trapping potential in either the transverse or longitudinal directions. Another source of

frequency variation in the potential of this type might be low frequency noise from the control

electrodes used to trap and shuttle the ions. Both types of perturbations can be modeled by

the same function,

f (t) = g cos

(M

+

1/2)

2πt T

.

(37)

When the parameter M is set to zero this forcing produces a decrease and then increase in the frequency over the duration of the shuttling protocol, as required for the ‘short-step’ model. For M an integer, the sinusoidal variation of the potential has M + 1/2 “cycles” throughout the shuttling, which may correspond to the number of periodic structures in the trap electrode array. These two models for the frequency variation of the shuttling potential are illustrated in Fig. 6. The parameter g, kno-
wn as the frequency modulation depth, characterizes the fractional variation in the square of the frequency of the potential. In order to optimize the shuttling process, we will ﬁrst examine the eﬀect of arbitrary frequency ﬂuctuations and inertial forcing on the ﬁnal motional state of shuttled ions, and then apply the results to the models outlined above.

518 On the transport of atomic ions in linear and multidimensional ion trap arrays

Fig. 6. Plots of the ‘single-step’ (M = 0 in Eq. 37) and ‘long distance’ (M = 4) models for the frequency variation in the shuttling potential. The vertical axis ranges from ω02(1 − g) to ω02(1 + g).

3.2 The Forced Parametric Oscillator
The problem of the forced harmonic oscillator has been solved quantum mechanically by Husimi [44] and Kerner [45], independently. Husimi’s solution includes the eﬀects of both inertial forcing and frequency variation on the oscillator. We seek expressions for the average ﬁnal motional state, n and the variance in the distribution about the mean, ∆n2 , following Husimi’s solution. In particular, we will ﬁrst examine the solution to the time-dependent Schr¨odinger’s equation and show that it can be -
separated into a solution for the unforced parametric oscillator and a solution for the forced parametric oscillator. Then we will seek solutions for those two cases using the method of generating functions. This approach starts from the basic observation that the Hermite polynomials from which the eigenfunctions of the harmonic oscillator are constructed can be used to obtain a power series expansion of a generating function. A propagator is used to describe the time evolution of the oscillator s-
ystem. The generating functions of the individual wavefunctions are used in conjunction with this approach to obtain generating functions for the transition amplitudes and transition probabilities relating the initial and ﬁnal states of the system. The method of generating functions is a powerful method for our purposes, since the desired quantities are not the individual matrix elements describing the likelihood of ending up in a particular state, but the average value of n(T ), which is given by-
 the sum over all possible ﬁnal states at time T . This sum can be obtained by manipulating the generating function directly.

3.2.1 Solving Schro¨dinger’s equation
Starting from the one-dimensional Schr¨odinger’s equation for ψ(s, t) in the frame of the potential minimum,

ı¯h

∂ψ(s, ∂t

t)

=

−

¯h2 2m

∂2ψ(s, t) ∂s2

+

1 2

mω2(t)s2ψ(s,

t)

+

mx¨0(t)sψ(s, t),

(38)

a second coordinate transformation is introduced, so that

s′ = s − ξ(t)

∂ψ(s, t) ∂t

=

∂ψ(s′, ∂t

t)

−

ξ˙(t)

∂ψ(s′, ∂s′

t)

∂2ψ(s, t) ∂s2

=

∂2ψ(s′, ∂s′2

t)

.

(39)

D. Hucul, M. Yeo, W.K. Hensinger, J. Rabchuk, S. Olmschenk, and C. Monroe 519

The transformation, ψ(s′, t) = φ(s′, t)eims′ξ˙/h¯ is then introduced to eliminate the ﬁrst order
spatial derivative arising in the second line of Eq. 39, and upon substitution into Eq. 38 results in the following equation for φ(s′, t) :

i¯h

∂

φ(s′, ∂t

t)

=

−

¯h2 2m

∂2φ(s′, ∂s′2

t)

+

1 2

mω2

(t)s′2

φ(s′

,

t)

+m (ξ¨ + x¨0) + ω2(t)ξ s′φ(s′, t) −

−m/2 ξ˙2 + x˙ 20 − ω2(t)ξ2 − 2x¨0ξ φ(s′, t).

(40)

The ﬁrst line of Eq. 40 is the wave equation for the unforced parametric harmonic potential, which has solutions given by χ(s′, t). The coeﬃcient of φ(s′, t) in the third line on the RHS is independent of coordinate s′, and gives rise to a simple time-dependent phase factor. Finally,
the second line on the RHS can be eliminated by choosing the transformation coordinate, ξ,
to be the solution of the equation,

ξ¨ + ω2(t)ξ + x¨0 = 0.

(41)

This is the classical equation of a forced, parametric harmonic oscillator, where ξ is identiﬁed as the classical position of an ion relative to the moving potential minimum.
Combining the observations made above, we see that the wave equation for φ(s′, t) is in fact separable, and its solution can be written down in terms of the solutions χ(s′, t) of the unforced parametric oscillator equation, and the phase factor from the remaining timedependent terms in Eq. 40:

φ(s′, t) = χ(s′, t) exp

i ¯h

t
m/2
t0

ξ˙2 + x˙ 20 − ω2(t)ξ2 − 2x¨0ξ

dt

.

(42)

Recalling the canonical transformation introduced above, the full solution to the time-dependent wave function, ψ(s′, t), is then found to be

ψ(s′, t) = χ(s′, t) exp

i ¯h

ms′

ξ˙

+

i ¯h

t
m/2
t0

ξ˙2 + x˙ 20 − ω2(t)ξ2 − 2x¨0ξ

dt

.

(43)

Therefore, the problem of ﬁnding the wavefunction of the forced, parametric oscillator as a function of time has been reduced to one of ﬁnding the quantum mechanical solution, χ(s′, t), for the unforced parametric oscillator and the classical solution, ξ(t), of the forced, parametric oscillator. As described in the introduction to this section, we wish to obtain the generating functions for the matrix elements describing the transition from the initial to the ﬁnal state of the ion. This is facilit-
ated by a propagator approach to describe the time-evolution of the quantum mechanical state of the ion.

3.2.2 The method of generating functions

We begin our derivation of the generating functions for the transition probabilities in unforced and forced parametric oscillators by recalling the propagator for the simple harmonic oscillator [46]:

ψ(x, t) = Ksho(x, t|x′, t′)ψ(x′, t′)dx′.

(44)

520 On the transport of atomic ions in linear and multidimensional ion trap arrays

The propagator Ksho(x, t|x′, t′) satisﬁes the time-dependent Schr¨odinger’s equation for the harmonic oscillator, and is given by [46]

Ksho(x, t|x′, t′) =

mω0 2πi¯h sin(ω0∆t)

×

exp

imω0 2h¯ sin(ω0∆t)

x2 cos(ω0∆t) − 2xx′ + x′2 cos(ω0∆t)

, (45)

where ∆t = t − t′. The probability amplitude for the simple harmonic oscillator, initially in a pure state ψ(x′, t′), to be in the n-th eigenstate at time t is then given by a double integral over x and x′

bn(t, t′) =

ψn∗ (x)Ksho(x, t|x′, t′)ψ(x′, t′) dx dx′.

(46)

The probabilities for the simple harmonic oscillator to be in the n-th state are then

Pn(t, t′) = |bn(t, t′)|2.

(47)

In the case that the particle is initially in the k-th eigenstate of the harmonic oscillator, the

expressions for the probability and probability amplitude of the system being in the n-th state

in Eqs. 47 and 50 can be thought of as transition probabilities for the evolving system. Of

course, for a stationary quadratic potential with a ﬁxed frequency, the transition probabilities

would be

Pnk(t, t′) = |bnk(t, t′)|2 = δnk.

(48)

However, when the ion is shuttled and experiences a nonuniform acceleration and/or a changing trap frequency, we can expect transitions from one eigenstate of the harmonic oscillator to another. The key to determining those transition probabilities is the propagator K(x, t|x′, t′) for the shuttling potential, which is a solution of the Schro¨dinger’s equation for the shuttling potential:

ı¯h

∂

K

(x, t|x′ ∂t

,

t′)

=

−

¯h2 2m

∂2K(x, t|x′, t′) ∂x2

+

1 2

mω2x2

+

mx¨0(t)x

K(x, t|x′, t′),

(49)

and satisﬁes K(x, t′|x′, t′) = δ(x − x′). Assuming this function is known, the transition amplitudes for the ion to begin in the k-th state of the harmonic potential at time t′ and then
after being shuttled to end up in the n-th state of the harmonic potential at time t are

bnk(t, t′) =

ψn∗ (x)K(x, t|x′, t′)ψk(x′) dx dx′.

(50)

This expression for the transition amplitudes can be used to construct a generating function, B(u, v), for the transition amplitudes of the shuttled ion. We start by using the known generating function for the eigenfunctions of a simple harmonic oscillator with frequency ω0 (e.g., Husimi [44], Eq. 4.6):

√αe−u2+2αux−α2x2 =
n

√π2n n!

unψn

(αx),

(51)

D. Hucul, M. Yeo, W.K. Hensinger, J. Rabchuk, S. Olmschenk, and C. Monroe 521

where α =

mω0/¯h and |u| ≤ 1. We multiply both sides of Eq. 50 by

π2n+k n!k!

uk

v

n

and

then

by summing both sides over k and n, we have

B(u, v) =
k,n

π2n+k n!k!

uk

vnbnk

(t,

t′)

= α dx dx′K(x, t|x′, t′) exp −u2 − v2 + 2α(ux′ + vx) − α2(x′2 + x2) .(52)

Notice that the generating function B(u, v) is a function of the initial and end times of the shuttling protocol as well. Once the propagator for the potential is known, any particular transition amplitude can be obtained from this generating function by expanding it about the parameters u and v and reading oﬀ the transition amplitude bnk from the coeﬃcient of the ukvn term in the expansion. A similar generating function can be developed for the transition probabilities by treating the probabiliti-
es Pnk as coeﬃcients in a double power series in u and v, and then using the integral obtained for bnk in Eq. 50 so that

P (u, v) =

ukvnPnk(t, t′) = ukvn|bnk(t, t′)|2

k,n

k,n

=

dx dx′ dy dy′K(x, t|x′, t′)K∗(y, t|y′, t′)

×

vnψn∗ (αx)ψn(αy)

ukψk∗(αx′)ψk(αy′) .

(53)

n

k

Each term in braces in the bottom line of Eq. 53 can be replaced for |u|, |v| ≤ 1 by the bilinear generating function (see Husimi [44], Eq. 4.4)

α2 π(1 − u2) exp

−α2

(1

+

u2)(x2 2(1

+ −

y2) u2)

−

4uxy

=

unψn (αy) ψn∗ (αx) .

(54)

n

Making the substitution, we obtain the generating function for the transition probabilities,

P (u, v) =

α2

π (1 − u2)(1 − v2)

dx dx′ dy dy′K(x, t|x′, t′)K∗(y, t|y′, t′)

×

exp

−α2

(1

+

u2)(x2 + y2) 2(1 − u2)

−

4uxy

+

(1

+

v2)(x′2 + y′2) 2(1 − v2)

−

4vx′y′

(.55)

Again, once the propagators for the shuttling potentials are known, the generating function for the transition probabilities can be obtained by carrying out the fourfold integral on the RHS of Eq. 55.
One can obtain directly the average ﬁnal state of the shuttled ion by manipulating this expression as follows:

∂P (u, v) ∂v

v=1

=

k

uk

n

nPnk(t, t′) =

k

uk nk .

(56)

By expanding the term on the LHS in powers of u, one can read oﬀ for an ion which started in the k-th eigenstate of the trapping potential its average ﬁnal state, deﬁned to be nk . If

522 On the transport of atomic ions in linear and multidimensional ion trap arrays

we make the further assumption that the oscillator started out in the ground state, k = 0, we only need the term in the expansion which has no dependence on u. We can ﬁnd this term easily by setting u = 0, so that only that part of P (u, v) which doesn’t depend on u survives. Thus, the average ﬁnal state for an ion which started in the zeroth eigenstate of the trapping potential, n0 , is found by setting u = 0 in the expression on the LHS of Eq. 56,

n0

=

n

nPn0(t, t′) =

∂P (0, v) ∂v

.
v=1

(57)

We can also ﬁnd the distribution of the wavefunction about the mean for the ﬁnal motional
state by manipulating the generating function, P (u, v). For an arbitrary initial state, k, we can ﬁnd the average value of n(n − 1) = n2 − n, deﬁned as n2k − nk , by taking the second derivative of the generating function with respect to v, and then evaluating it for v = 1,

∂2P (u, v) ∂v2

v=1

=

k

uk

n

n(n − 1)Pnk(t, t′) =

k

uk

n2k − nk

,

(58)

from which we can easily obtain the distribution of the ﬁnal ion state about the mean, n2k − nk 2. In the particular case that k = 0, we can obtain the distribution about the mean, ∆n20 , directly from derivatives with respect to v of the generating function P (0, v) as in Eq. 57 above,

∆n20 = n20 − n0 2

=

∂2P (0, v) ∂v2

v=1

+

∂P (0, v) ∂v

v=1

−

∂P (0, v) ∂v v=1

2
.

(59)

Thus, the method of generating functions is a powerful way to obtain the average ﬁnal state and the distribution about the mean of the ﬁnal state of a forced parametric oscillator. In the particular case that the ion was initially in the ground state, these values can be obtained directly from ﬁrst and second order derivatives of P (0, v) with respect to the parameter v, with v subsequently set equal to 1. These values can be written down in closed form expressions if the propagator for the forcin-
g potential is known and the integrals for the generating functions are solvable.

3.2.3 Classical solutions for the unforced and forced parametric oscillator
As we showed in Sec. 3.2.1, the quantum mechanical solutions of the unforced and forced harmonic oscillator problem are expressed in terms of the classical quantities describing the motion of these systems. Therefore, we turn our attention to the solution of the classical forced parametric oscillator equation, given in Eq. 41. We specify ξ as that solution of the forced parametric oscillator for which the initial conditions ξ(t0, t0) = ξ˙(t0, t0) = 0 hold in the frame of the moving potential. This-
 will serve to cause the phase factor in Eq. 43 to vanish at time t0. This solution can be obtained by considering ﬁrst the homogeneous equation, which is the unforced parametric oscillator equation,

X¨ = −ω(t)2X.

(60)

There exist two independent solutions X1(t) and X2(t) of Eq. 60, which satisfy the initial conditions {X(t0) = 0, X˙ (t0) = 1} and {X(t0) = 1, X˙ (t0) = 0}, respectively. These solutions

D. Hucul, M. Yeo, W.K. Hensinger, J. Rabchuk, S. Olmschenk, and C. Monroe 523

have the property that, for any time t > t0

X1X2 − X2X1 = 0; and X˙ 1X2 − X1X˙ 2 = 1,

(61)

where the ﬁrst property is obvious and the second property is derived, using Eq. 60 and the ﬁrst property, as follows:

X2(t)X¨1(t) − X1(t)X¨2(t) = −ω(t)2 (X1(t)X2(t) − X2(t)X1(t)) = 0

d dt

X˙ 1(t)X2(t) − X1(t)X˙ 2(t)

=0

X˙ 1(t)X2(t) − X1(t)X˙ 2(t) = X˙ 1(t0)X2(t0) − X1(t0)X˙ 2(t0) = 1.

(62)

Therefore, these solutions can be used to construct a one-dimensional Green’s function,

G(t, t′) = X1(t)X2(t′) − X1(t′)X2(t),

(63)

for t ≥ t′ ≥ t0 which has the properties

G(t′, t′) = 0;

and

dG(t′, t′) dt

=

1.

(64)

This Green’s function, which has the dimensions of time, can be shown to be [47] the solution of the parametric oscillator equation with delta function forcing,

G¨(t, t′) + ω(t)2G(t, t′) = δ(t − t′),

(65)

where G(t, t′) = 0, for t < t′ to satisfy causality. The solution for G when t > t′ then represents the response of the oscillator to a unit impulse occurring at time t′. In the simplest
case for which the frequency of the potential is ﬁxed at ω0, we have

X1(t, t0; ω0)

=

1 ω0

sin(ω0(t

−

t0)),

X2(t, t0; ω0) = cos(ω0(t − t0)),

G(t, t′)

=

1 ω0

sin(ω0(t

−

t′)).

(66)

Once the appropriate G(t, t′) has been obtained, the solution for ξ(t, t0) satisfying Eq. 41 can now be constructed as follows:

t

ξ(t, t0) = − x¨0(t′)G(t, t′)dt′

t0

ξ˙(t, t0)

=

−

t t0

x¨0

(t′

)

∂

G(t, ∂t

t′

)

dt′

.

(67)

The classical energy gain of the ion due to forcing, relative to the characteristic energy of the harmonic potential, is therefore

Υ(t, t0)

=

m 2h¯ω(t)

ω(t)2ξ(t, t0)2 + ξ˙(t, t0)2

.

(68)

524 On the transport of atomic ions in linear and multidimensional ion trap arrays

In order to isolate the inﬂuence of the frequency variation on the shuttled ion’s energy, we switch the role of t and t0 in Eq. 67. This can be understood as the motion of the ion when the sequence of frequency variation is reversed. The need for this arises from the fact that for the forced motion the energy gain is not only a function of the end time, but also the initial time. Therefore, we have [44],

t0

ξ(t0, t) = − x¨0(t′)G(t0, t′)dt′

(69)

t

ξ˙(t0, t)

=

∂ξ(t0, t) ∂t0

=

−

t

t0

x¨0(t′)

∂G(t0, ∂t0

t′)

dt′,

(70)

where the Green’s function is now non-zero for times earlier than the time of the impulse, that is, for t0 < t′. The energy gain for the reversed forced motion is therefore

Υ(t0, t)

=

m 2h¯ω(t)

ω(t)2ξ(t0, t)2 + ξ˙(t0, t)2

.

(71)

For a constant frequency potential this reversed motion results in the same energy gain as does the forward motion, and Υ(t, t0)−Υ(t0, t) = 0. However, in general when the frequency is timedependent, Υ(t, t0) − Υ(t0, t) = 0. The generating functions for the transitions induced in the unforced and forced parametric oscillator which we obtain in the next section depend precisely on the dimensionless energies characterizing the classical energy gain of these systems.

3.2.4 Transition probabilities for the unforced and forced parametric oscillator
Since we wish to solve the unforced parametric oscillator problem ﬁrst, we work in the reference frame of the minimum of the potential used to shuttle the trapped ion. It is assumed that the ion starts out at time t0 in a pure eigenstate, ψk(s0, t0), of a harmonic oscillator of constant frequency ω0, and that it ends up in a potential well of the same frequency at time t and position s relative to the potential minimum in some superposition of eigenstates. The connection between the ﬁnal state of -
the particle and its initial state can be expressed in terms of the propagator K(s, t|s0, t0), for the shuttling potential. We begin by returning to the propagator for the simple harmonic oscillator, which corresponds to a shuttling potential moving at constant velocity and keeping a constant frequency ω0, (see Eq. 45)

Ksho(s, t|s0, t0) =

α2 2πi sin(ω0∆t)

×

exp

imω0 2h¯ sin(ω0∆t)

s2 cos(ω0∆t) − 2ss0 + s20 cos(ω0∆t)

, (72)

where ∆t = t − t0. By comparing the functions sin(ω0∆t)/ω0 and cos(ω0∆t) in Eq. 72 with solutions of the unforced parametric oscillator as given in the limiting case of Eq. 66 when the frequency is constant, we can guess that the propagator Ksho is just a special case of the general propagator for the unforced parametric oscillator

Kupo(s, t|s0, t0) =

m 2πi¯hX1(t,

t0)

exp

im 2h¯X1(t, t0)

X˙ 1(t, t0)s2 − 2ss0 + X2(t, t0)s20

.

(73)

D. Hucul, M. Yeo, W.K. Hensinger, J. Rabchuk, S. Olmschenk, and C. Monroe 525

Husimi ([44], Eq. 3.8) showed that this is indeed the case. Substituting this propagator into Eq. 55 results in a fourfold Gaussian integral, which can be evaluated using the formula

∞
exp −
−∞

4 i,j

Aij xixj

2

d4x =

(2π)2 , det{A}

(74)

where the 4 × 4 matrix A is symmetric and positive-deﬁnite. The generating function for the transition probabilities for an ion in a variable-frequency harmonic potential is then

√ P (u, v)(t, t0) = 2

Q(t, t0)(1 − u2)(1 − v2) + (1 + u2)(1 + v2) − 4uv

−1/2 ,

(75)

where

Q(t, t0)

=

1 2

ω02X12

+

X˙ 12

+

X22

+

1 ω02

X˙ 22

.

(76)

The generating function in Eq. 75 is even in the following sense:

P (−u, −v) = P (u, v).

(77)

Therefore the transition probabilities are non-zero only for beginning and ending states of the same parity, resulting in the expected selection rule, n − k = 2m, for m an integer. We have Q ≥ 1, where the equality holds when the frequency is constant. In a classical parametric oscillator the quantity Q represents the proportional increase in energy due to frequency variation over an interval of duration T , averaged over all possible initial conditions having the same initial energy, Eω(t0), so t-
hat ([44], Eq. 5.21)

Q(t, t0) =

Eω(T + t0) Eω (t0 )

≥ 1.

(78)

We now seek the average ﬁnal state nk for an ion in such a variable-frequency harmonic potential with negligible inertial forcing, given that its initial state was the k-th eigenstate of the initial trap. Using Eq. 56, we determine that

uk nPnk(t, t0) =

k

n

∂P (u, v) ∂v v=1

=

2(1

1 −

u)2

((1

+

u)Q(t,

t0)

−

(1

−

u))

.

(79)

Expanding the function on the right in powers of u allows us to identify for each initial state

k

nk = (k + 1/2)Q(t, t0) − 1/2

(80)

and therefore

Eω(T + t0) =

nk

+

1 2

¯hω0 = Q(t, t0)

k

+

1 2

¯hω0,

(81)

exactly corresponding to the classical result (Eq. 78). The distribution of the wavefunction about the mean is found as described at the end of Sec. 3.2.2, and is given by

∆n2k = 1/2(Q2(t, t0) − 1)(k2 + k + 1).

(82)

526 On the transport of atomic ions in linear and multidimensional ion trap arrays

Both nk and ∆n2k for the parametrically-driven ion found here are functions of the initial and ﬁnal time of the shuttling through the factor Q(t, t0). This function in turn depends on time through the solutions X1 and X2. These solutions can be found analytically for certain models of the frequency variation of the shuttling potential (e.g., Eq. 37). In general, however, they need to be evaluated numerically by integrating the classical parametric oscillator equation over the duration of the shutt-
ling protocol.
The propagator for the forced parametric oscillator can be obtained from the one for the unforced parametric oscillator by using the fact that the propagator for each is a solution of the Schr¨odinger’s equation for the corresponding shuttling potential. Therefore, the propagator for the unforced parametric oscillator potential (with x¨0 = 0) is a solution of the Schro¨dinger’s equation in Eq. 49 with x¨0 = 0. Not only so, but it is a solution in the coordinate system deﬁned in Eq. 39 of the Schr¨-
odinger’s equation found in the ﬁrst line of Eq. 40. The solution to that equation, the quantum mechanical version of the unforced parametric oscillator equation, was identiﬁed in the text as χ(s′, t). Any equation which χ(s′, t) satisﬁes is also satisﬁed by the propagator for the unforced parametric oscillator. Therefore, the solution for the wave function of the forced parametric oscillator obtained in terms of χ(s′, t) in Eq. 43 can also be used to obtain the propagator for the forced oscillato-
r in terms of the propagator of the unforced oscillator

Kf po(s′ ,

t|s′0,

t0)

=

Kupo(s′,

t|s′0,

i
t0)e h¯

ms′

ξ˙+

i h¯

t t0

m/2(ξ˙2+x˙ 20−ω(t)2ξ2−2x¨0ξ)dt.

(83)

Thus, the propagator for the forced parametric oscillator is given by

Kfpo(s′, t|s′0, t0) =

m 2πi¯hX1

×

exp

im 2h¯ X1

X˙ 1s′2 + X2s′02 − 2s′s′0

×

exp

im ¯h

s′ξ˙ +

t
1/2 ξ˙2 + x˙ 20 − ω(t)2ξ2 − 2x¨0ξ dt
t0

. (84)

Using Eqs. 53 and 55, the generating function for the transition probabilities of an ion in the forced parametric oscillator potential can be obtained ([44], Eq. 7.13)

∞

P (u, v) ≡

ukvnPnk(t, t0)

n,k=0

=

2 (1 − u2)(1 − v2)Q(t, t0) + (1 + u2)(1 + v2) − 4uv

×

exp

 −

(1 − u2)(1 − v2) Υ(t0, {(1 − u2)(1 − v2)q(t, t0) +

t)

1−v 1+v

+

Υ(t,

(1 + u2)(1 +

t0)

1−u 1+u

v2) − 4uv}

 

.

(85)

This solution was extended to the case that the initial and ﬁnal frequency of the forced oscillator is diﬀerent in Perelomov [48]. A simpler expression is obtained if we let u = 0, corresponding to the case that the forced ion was initially in the ground state

D. Hucul, M. Yeo, W.K. Hensinger, J. Rabchuk, S. Olmschenk, and C. Monroe 527

P (0, v) ≡ =

vnPn0(t, t0)

n

Q(1

−

2 v2) +

(1

+

v2)

exp

 −

(1 − v2) {(1 −

Υ(t0,

t)

1−v 1+v

v2)Q(t, t0) +

+ (1

Υ(t, t0) + v2)}

 .

(86)

Again, the average ﬁnal motional state of the forced ion n0 can be obtained as in Eq. 57, with the simple result,

n0(T )

=

Υ(T, 0)

+

1 2

(Q(T, 0)

−

1) ,

(87)

where we have let t0 = 0. The distribution of the ion’s wavefunction about its average motional state after the total shuttling time T is found as described in Eq. 59 and is given by

∆n20(T )

=

1 2

Q2(T, 0) − 1

+ (2Υ(T, 0)Q(T, 0) − Υ(0, T )) .

(88)

In the case that the frequency of the potential remains constant, these results for the ﬁnal average state and state distribution reduce to the following

n0(T ) = Υ(T, 0),

(89)

∆n20(T ) = Υ(T, 0),

(90)

since Υ(t, t0) − Υ(t0, t) = 0 and Q(t, t0) = 1 when ω = ω0. Remarkably, the impact of the frequency variation on the ﬁnal energy and dispersion of
the ion is largely separable from that of the inertial forcing due to shuttling. Therefore, we can proﬁtably treat the impact of each aspect of the shuttling process separately. For the shuttling protocols outlined in Sec. 3.1 we can obtain closed form expressions for n0(T ) and ∆n20(T ) for the shuttled ion in the cases when the frequency is held constant or the inertial forcing is negligible. In general, the factors Υ(T, 0) and Q(T, 0) must be obtained numerically by integrating the expressions -
in Eqs. 60, 68 and 71 over the entire shuttling interval. We emphasize that both of these quantities are obtained from a classical analysis of the unforced parametric oscillator.

3.3 Evaluation of Shuttling Protocols
Having outlined the formalism for determining the eﬀect of shuttling in one dimension on the motional state of the ion, we now consider the shuttling protocols developed in Sec. 3.1. We ﬁrst brieﬂy establish several criteria for eﬀective shuttling, and then evaluate the relative merits of the shuttling protocols.

3.3.1 Shuttling criteria
Heating during the shuttling operation will typically occur along the longitudinal direction (along the shuttling path). For shuttling along a line, there is no cross talk between transverse and longitudinal heating as the longitudinal direction corresponds to a principal axis. However, transport of an ion through a junction will couple the two modes and our considerations will provide an upper limit of the change of motional state in any spatial directions after the shuttling operation.

528 On the transport of atomic ions in linear and multidimensional ion trap arrays

Important Equations of Section 3
forced oscillator, constant frequency
propagator transition probability
n0 ∆n20 unforced parametric oscillator
propagator transition probability
Q(t, t0) nk ∆n2k
forced parametric oscillator
propagator transition probability
Υ(t, t0), Υ(t0, t) n0 ∆n20

Equation
45 55 57 59
73 75 76 80 82
84 85 68, 71 87 90

Table 2. Table summarizing the locations of important equations in Section 3. The propagators used to calculate the transition probabilities as well the transition probabilities are given for forced oscillators and forced parametric oscillators as well as unforced parametric oscillators are given. The expectation value of the oscillator motional state as well as the variances in the motional state are given too. The subscript associated with these quantities refer to the initial state of the ion b-
efore shuttling. In the unforced parametric oscillator case, Q(t, t0) represents the proportional increase in energy due to frequency variation over an interval of duration T, averaged over all possible initial conditions having the same initial energy (see Eq. 78). In the forced parametric oscillator case, the variable Υ(t, t0) (Υ(t0, t)) represents the classical energy gain of the ion due to forcing with the sequence (reversed sequence) of the frequency variation relative to the characteristic e-
nergy of the harmonic potential. The classical motion of the ion is needed to calculate the transition probabilities in the forced and unforced parametric oscillators, so it is important to be able to accurately simulate the classical motion of trapped ions during shuttling. See section 2 and the appendix for more information on simulating the classical motion of trapped ions.

The ﬁrst and most restrictive limit on a shuttling operation is the requirement that it produce little change in the motional state of the ion, or

n ≪1

(91)

for an ion initially prepared in the ground state. Although this constraint can be met by non-adiabatic processes through appropriate phasing of the shuttling forces, it is the ultimate intention of the adiabatic limit, and for simplicity we will call it the adiabatic constraint.
A second and typically less restrictive limit is that the rms spread srms in the ion’s ﬁnal wavepacket remain small compared to the relevant optical wavelengths used in the quantum information environment. This is known as the Lamb-Dicke limit, and can be an important criterion for the eﬀective coupling of light ﬁelds to the motion of trapped ions. For a coherent state or a thermal state of harmonic motion with mean vibrational number n ,

srms =

ψ(s, T )|s2|ψ(s, T ) =

¯h 2mω0

(2

n

+ 1) ,

(92)

D. Hucul, M. Yeo, W.K. Hensinger, J. Rabchuk, S. Olmschenk, and C. Monroe 529

so for an ion initially in the ground state, the Lamb-Dicke criterion can thus be written as

¯hk2 2mω0

(2

n

+ 1) ≪ 1 ,

(93)

where k is the eﬀective wave-number associated with the radiation ﬁeld in the quantum gate

scheme. The Lamb-Dicke limit sets a more meaningful limit on the required localization of

the ion for many quantum logic gate schemes [2, 5, 15, 17, 10, 11].

A third and still less restrictive constraint is that the residual motion of the ion after

shuttling does not add to the diﬀraction limit of the ion image. This condition is important

for schemes that couple ion qubits through emitted photons that might be mode-matched

into an optical ﬁber [7, 53]. A conservative estimate of this condition is the usual Rayleigh

criterion

srms

≪

0.61λ NA

(94)

where λ is the radiation wavelength and NA < 1 is the numerical aperture of the imaging

objective. This diﬀraction limit condition can be written in a form similar to the Lamb-Dicke

criterion above:

0.068(N

A)2

¯hk2 2mω0

(2

n

+ 1) ≪ 1.

(95)

The last, and typically least restrictive constraint is that the motion of the ion remains

harmonically bound in the trap. Anharmonic wavepacket dispersion can give rise to errors in

certain ultrafast quantum gate schemes [54]. This condition requires that the ion motion be

localized to a region of space much smaller than the characteristic distance from ion to trap

electrode deﬀ:

¯h 2mω0d2eﬀ

(2

n

+ 1) ≪ 1.

(96)

Now consider those features of the shuttling process which would make it more likely

to satisfy the theoretical criteria, regardless of the particular shuttling protocol used. From

Eqs. 68 and 91, the adiabatic constraint favors low mass ions such as beryllium or calcium

for a given trap frequency. The Lamb-Dicke and diﬀraction criteria favor atomic ions that

feature longer-wavelength electronic transitions (Eqs. 93 and 95). In addition, for a given

atom any shuttling protocol can be made faster while making it less likely for the ion to be

placed into an excited state by increasing the axial trap frequency, ω0. The Lamb-Dicke and diﬀraction constraints particularly beneﬁt from such an increase. This improvement is limited

only by the risk of destabilizing the rf transverse trap. Once an ion species and an optimal

trap frequency are chosen, however, the focus turns to the particular functional form of the

shuttling protocol and the manner with which the frequency of the shuttling potential varies

during the implementation of the protocol.

3.3.2 Shuttling in constant frequency potentials
It is quite straightforward to imagine an experimental arrangement in which one could perform the shuttling process so that the frequency of the axial potential well is kept constant. One could simply create a potential well that is quadratic over the distance to be shuttled, and then use distant control electrodes to produce a uniform forcing ﬁeld for shuttling the ion.

530 On the transport of atomic ions in linear and multidimensional ion trap arrays

In contrast, it is not possible to shuttle the ion without introducing inertial forcing on the shuttled ion. Therefore, it is reasonable as a ﬁrst approximation to examine the eﬀect of the shuttling process on the ﬁnal state of the ion due to the inertial forcing of the ion alone, as given in Eq. 89. In this case, the Green’s function for the classical forced oscillator equation is that given in Eq. 66. Assuming that the ion starts out in the ground state k = 0, the average ﬁnal state of the ion n-
0(T ) in this idealized case becomes

n0(T ) = Υ(T, 0)

=

m 2h¯ ω0

(ω02 ξ(T ,

0)2

+

ξ˙(T

,

0)2),

(97)

with

ξ(T, 0)

=

−

1 ω0

T
sin(ω0(T − t′))x¨0(t′)dt′
0

T

ξ˙(T, 0) = − cos(ω0(T − t′))x¨0(t′)dt′.

(98)

0

In this approximation, a closed form expression for Υ(T, 0) can be obtained for each of the shuttling protocols listed in Eq. 28. For the linear and sinusoidal potential minimum time proﬁle, the ﬁnal energy and motional state of the ion obtained from Eq. 97 are simple functions of the distance L and time T of the shuttling process, as well as the ﬁxed frequency ω0 of the potential well. The ﬁnal state resulting from the hyperbolic tangent potential minimum time proﬁle can also be written down in c-
losed form using hypergeometric functions of the type 2F1 [a, b, c; z].

n0(T ) l

=

mL2 ¯hω0T 2

(1

−

cos(ω0T

)) ,

n0(T ) s

=

mL2π4ω0 cos2

ω0T 2

¯h(π2 − ω02T 2)2

n0(T ) t

=

mL2ω0 e−iT ω0 1 − coth(N ) 4h¯

(99) (100)

+

eiT ω0

1 + coth(N ) − 2 coth(N ) 2F1

1,

−

iT ω0 4N

,

1

−

iT ω0 4N

;

−e−2N

+

2 coth(N ) 2F1

1,

−

iT ω0 4N

,

1

−

iT ω0 4N

; −e2N

×

1 + coth(N ) − 2 coth(N ) 2F1

1,

iT ω0 4N

,

1

+

iT ω0 4N

;

−e−2N

+

eiT ω0

1 − coth(N ) + 2 coth(N ) 2F1

1,

iT ω0 4N

,1

+

iT ω0 4N

;

−e2N

.(101)

These hypergeometric functions are deﬁned by the integral representation

2F1

[a, b, c; z]

=

Γ(c) Γ(b)Γ(c − b)

1 0

tb−1(1 (1

− t)c−b−1 − tz)a

dt,

(102)

where Γ(n) =

∞ 0

tn−1

e−t

dt

is

the

Gamma (factorial) function

for

arbitrary n

[49].

The results

for the linear and sinusoidal shuttling proﬁles have also been obtained elsewhere [42, 43].

D. Hucul, M. Yeo, W.K. Hensinger, J. Rabchuk, S. Olmschenk, and C. Monroe 531
n Ω0
m
10
1
0.1
0.01
0.001 T Ω0
3 4 5 6 7 8 9 10 2 Π
Fig. 7. Log plot of the average motional state n versus duration of the linear (- - -), sinusoidal ( ) and hyperbolic tangent (N = 3) ( ) potential minimum time proﬁles. The scaled vertical axis is the energy per ion mass given to the shuttled ion. The scaled time axis represents the number of cycles of oscillation completed in the axial trap during the shuttling process, where ω0/2π = 1.173 MHz so m/¯hω0 ≈ 1500 for 111Cd+ and 120 for 9Be+. The distance shuttled in each case is L = 2.14 µm , the s-
tandard step size in the University of Michigan shuttling protocol described in Sec. 5.2. The sinusoidal and hyperbolic tangent potential minimum time proﬁle are seen to be far less disturbing to the ion than the linear potential minimum time proﬁle when the shuttling time is greater than 3 cycles.
Reichle et al. [42] also obtained the corresponding result for the error function proﬁle, while Schulz et al [43] investigated the additional impact of anharmonicity in the potential.
These protocols will be examined in two contexts. First, it will be assumed that these protocols are used to advance the ion in small steps of 2.14 µm, as was done in the shuttling scheme described later in Sec. 5.2. This will help illustrate some of the basic features of the transition probabilities resulting from each of these protocols. Secondly, the protocols will be analyzed for a continuous shuttling operation that brings the ion from one trapping zone to the next. Again, using the Universit-
y of Michigan trap as a template, the distance for shuttling will be taken as L = 400µm and the trap frequency ω0/2π = 1.173 MHz. We also restrict the discussion to the case for ions starting out in the ground state, and hence drop the subscript 0 from the average ﬁnal motional state n of the shuttled ions.
When considering shuttling over a single substep of 2.14 microns, several features of the average ﬁnal motional state for all of the proposed protocols stand out. Most noticeably, all three protocols result in a periodically oscillating value of n as a function of the duration T of the shuttling operation (Figs. 7 and 8) [42]. In particular, n becomes zero once every cycle in the oscillation of the ion. This is the exact analogue of the phase sensitive switching possible in a classically driven os-
cillator. By timing the deceleration of the ion at the end of its motion appropriately, it is possible to stop the ion so that it has acquired no energy from the shuttling process. This kind of shuttling requires the ability to switch the voltages on the electrodes on the time scale of the secular frequency. It also requires that the initial motional state of the ion be reasonably well-deﬁned. This may eventually prove to be a powerful way

532 On the transport of atomic ions in linear and multidimensional ion trap arrays

n Ω0 m
0.1

0.01

0.001

0.0001

0.00001 8

T Ω0 9 10 11 12 13 14 15 2 Π

Fig. 8. Log plot of the scaled average motional state n versus duration of the hyperbolic tangent potential minimum time proﬁle for N = 3.5 (- - -), N = 4.0 ( ) and N = 4.5 ( ). The distance shuttled in each case is for 2.14 µm. The scaled vertical axis is the energy per ion mass given to the shuttled ion. The scaled time axis represents the number of cycles of oscillation completed in the axial trap during the shuttling process, where ω0/2π = 1.173 MHz. Notice that the slow time dependence comes -
to dominate after roughly 2N cycles of oscillation in the moving trap have been completed. Once the slow time dependence becomes dominant, an increase in N by one roughly corresponds to a decrease of a factor of ten in n .

to shuttle ions in a quantum information processor.

Absent the means to control the timing of shuttling protocols as required for phase-

sensitive switching, it becomes necessary to manage the shuttling process in such a way

as to minimize the value of n(T ) . As can be seen from the expressions for n in Eqs. 99,

the motional state of the ion generally decreases with an increasing shuttling time T (exclud-

ing particular phasings of the shuttling time with the trap period). The disturbance to the

motional state of the ion for the linear potential minimum time proﬁle scales as

n

∝

1 T2

,

while that for the sinusoidal potential minimum time proﬁle scales as

n

∝

1 T4

.

Thus

for

the

same distance shuttled, the sinusoidal potential minimum time proﬁle will disturb the state

of the ion far less than the linear potential minimum time proﬁle for long shuttling times, as

seen in Fig. 7. The hyperbolic tangent potential minimum time proﬁle has two time scales

controlling the behavior of n (Eq. 32). One time scale is the same as for the linear potential

minimum time proﬁle, resulting from the discontinuous jump in the speed of the potential well

at the beginning and end of the shuttling protocol. This dependence eventually dominates

the behavior of n over longer shuttling times. The second time scale results in a much more

rapid drop oﬀ in the value of n as T increases from zero. The relative importance of these

two time scales is controlled by the parameter N . A larger value of N results in an n which

for short times T starts higher and takes longer to drop oﬀ, but which drops to a lower value

before the slow time dependence takes over (Fig. 8). The fast time dependence of the hyper-

bolic tangent potential minimum time proﬁle makes it always possible, for a ﬁxed shuttling

distance and shuttling time, to choose a value of N that will give a signiﬁcantly smaller value

of n than does the sinusoidal potential minimum time proﬁle (See Fig. 9). The time at

D. Hucul, M. Yeo, W.K. Hensinger, J. Rabchuk, S. Olmschenk, and C. Monroe 533
n Ω0 m
10

1

0.1

0.01

0.001 5

T Ω0 10 15 20 25 30 2 Π

Fig. 9. Log plot of the scaled average motional state n versus duration of the sinusoidal ( ) and hyperbolic tangent (N = 3) ( ) potential minimum time proﬁles. The distance shuttled in each case is for 2.14 µm. The scaled vertical axis is the energy per ion mass given to the shuttled ion. The scaled time axis represents the number of cycles of oscillation completed in the axial trap during the shuttling process, where ω0/2π = 1.173 MHz. The hyperbolic tangent potential minimum time proﬁle is seen-
 to produce a far smaller n for shuttling times greater than 4 cycles but less than 25 cycles. The sinusoidal potential minimum time proﬁle eventually exceeds any hyperbolic tangent potential minimum time proﬁle with ﬁxed N , due to the absence of any velocity discontinuity at the beginning and end of the protocol.

which the value of n resulting from the implementation of a hyperbolic tangent potential

minimum time proﬁle with a given N will reach zero is a good indication of the time when the

fast time-dependence ends, and the slow time-dependence begins. This time is proportional

to N

and

is

given

roughly

by

tcutoﬀ

≈

2N

2π ω0

.

However, the slow time dependence means

that, if one shuttles for a long enough time, the hyperbolic tangent potential minimum time

proﬁle with a ﬁxed value of N will always result in a larger value of n than the sinusoidal

potential minimum time proﬁle.

These two features of the hyperbolic tangent potential minimum time proﬁle can also be seen by examining shuttling protocols over the distance between two trapping zones, assumed to be L = 400µm (See Fig. 10). The more rapid drop oﬀ in n of the sinusoidal potential minimum time proﬁle with increasing shuttling time is evident when compared to the hyperbolic tangent potential minimum time proﬁle. However, the N = 4.5 protocol has a much lower value of n for the shuttling times considered due to the-
 very small discontinuity in velocity at the beginning and end of that protocol. Note that for the particular case of shuttling 111Cd+ ions for about 100 cycles of the oscillation (corresponding to a shuttling time of t = 85 µs) the three protocols in Fig. 10 will result in an average motional state of less than 1, with the N = 4.5 hyperbolic tangent potential minimum time proﬁle resulting in the ﬁnal state n0 N=4.5(85 µs) = 0.016. Thus, for a 111Cd+ ion trapped in a potential with ﬁxed frequency -
ω0 = 2π (1.173 MHz), the hyperbolic tangent potential minimum time proﬁle with N = 4.5 used to shuttle the ion a distance L = 400 µm over a time T = 85 µs is nearly adiabatic and keeps the ion in the Lamb-Dicke limit (see section 3.3.1), where the extent of

534 On the transport of atomic ions in linear and multidimensional ion trap arrays

Fig. 10. Plots of the envelopes for the scaled average motional state n after the completion of the sinusoidal (- - -) , hyperbolic tangent (N = 3.4) (( )) and (c) hyperbolic tangent (N = 4.5) ( ) potential minimum time proﬁles. The distance shuttled in each case is for 400 µm. The scaled time axis represents the number of cycles of oscillation completed in the axial trap during the shuttling process, where ω0/2π = 1.173 MHz.

ion motion is much less than an optical wavelength. It is possible to generalize the above discussion for the idealized shuttling protocols and
consider what factors determine how much impact a given protocol has on the ﬁnal motional state of the ion. Clearly, the energy given to the ion during shuttling is proportional to the maximum amplitude of the displacement of the ion from x0 after time T ,

ξ(T, 0) = − 1 ω0

T
sin(ω0(T − t′))x¨0(t′)dt′,
0

(103)

where we have set t0 = 0. Recall from Eq. 35 that the forcing term x¨0(t) can be expressed in general as

x¨0(t)

=

A(t,

T

)

L T

[δ(t)

−

δ(t

−

T

)]

+

B(t,

T

)

L T2

[H (t)

−

H (t

−

T

)]

,

(104)

where A(t, T ) characterizes the velocity discontinuity at the beginning and end of the shuttling protocol and B(t,T) characterizes the acceleration in the middle (see Eq. 32-34 and Eq. 35). Inserting this into the expression for ξ we have

ξ(T, 0)

=

−A(0, T ) L ω0T

sin(ω0T ) −

L ω0T 2

T
sin(ω0(T − t′))B(t′, T )dt′,
0

(105)

where the shuttling protocol is initiated just after the time t0. By integrating the second term on the right hand side by parts, a series expansion can be developed for ξ

ξ(T, 0)

=

−A(0,

T

)

L ω0T

sin(ω0T ) −

L ω02T 2

(B(T, T ) − B(0, T ) cos(ω0T ))

−

L ω03T 2

∂B(t′, T ) ∂t′

0

sin(ω0T )

+

L ω03T 2

T 0

sin(ω0(T

−

t′))

∂

2B(t′) ∂t′2

dt′

.

(106)

D. Hucul, M. Yeo, W.K. Hensinger, J. Rabchuk, S. Olmschenk, and C. Monroe 535

Since each derivative of B(t, T ) will result in another factor of T coming into the denominator

(See the second line of Eq. 32 for example), the coeﬃcients of the series are powers of the

factor

1 ω0T

so that we have

ξ(T, 0)

=

−

L ω0T

A(0, T )

sin(ω0T )

−

L ω02T 2

(B(T, T )

−

B(0,

T)

cos(ω0T ))

−

L ω03T 3

T

∂B(t′, T ) ∂t′

0

sin(ω0T )

+

L ω03T 3

T
sin(ω0(T − t′))
0

T

∂2B(t′, ∂t′2

T

)

dt′.

(107)

In general, for smooth and continuous potential minimum time proﬁles, the expansion can be continued by integrating by parts repeatedly until the error term represented by the remaining integral is arbitrarily small. As a result, regardless of the functional form of A and B, the series for ξ can be made to converge more rapidly and to a smaller value by shuttling for a time ω0T ≫ 1, which is the adiabatic condition.
The leading order term in this expansion is the delta function “kick” associated with the starting and stopping of the shuttling potential. It is also the term that is reduced most slowly as the duration of the shuttling protocol is increased. It is for this reason that the linear potential minimum time proﬁle has the least satisfactory behavior among the three examined here. Therefore, shuttling protocols should be designed to start and stop as smoothly as possible. This condition can be written -
down in equation form as:

A(0, T )

≪

ω0T L

.

(108)

The expression A(0, T ) is the fraction at time t0 = 0 of the average speed of shuttling. The

linear potential minimum time proﬁle has A(0, T ) = 1, while the hyperbolic tangent potential

minimum

time

proﬁle

has

A(0, T )

=

N

coth(N ) cosh2(N )

.

This

term

varies

from

A(0, T )

=

1

for

N

=

1

to A(0, T ) → N e−2N for the limit as N becomes large. Hence, this factor for the hyperbolic

tangent potential minimum time proﬁle can be made arbitrarily small by increasing N . The

sinusoidal potential minimum time proﬁle has A(0, T ) = 0.

Not only should the shuttling protocols be started and stopped as smoothly as possible,

but they should also have small accelerations at the beginning and end of the protocol. This

requirement is expressed through a similar condition on the maximum value of the second

leading term in the expansion for ξ

2B(0, T )

≪

ω02T L

2

,

(109)

where we have made the assumption that the accelerations of the shuttling potential at

the beginning and end of the protocol will be equal in magnitude but opposite in direction

(B(0, T ) = −B(T, T )). The factor B(0, T ) is the fraction at time t0 = 0 of the average

acceleration the shuttling potential has during the course of the shuttling protocol. The linear

potential minimum time proﬁle of course has B(0, T ) = 0. The sinusoidal potential minimum

time proﬁle gives the largest acceleration to the shuttling potential at the beginning (and

end)

of

the

protocol,

so

that

B(0, T )

=

π2 2

.

The

hyperbolic

tangent

potential

minimum

time

536 On the transport of atomic ions in linear and multidimensional ion trap arrays

proﬁle

has

B(0, T )

=

4N 2 cosh2 N

.

Therefore,

its

value

ranges

from

B(0, T )

=

4

for

N

=

1

to

B(0, T ) → 4N 2e−2N as N becomes large. Once again, by increasing the value of N , one can

make this term in the hyperbolic tangent potential minimum time proﬁle arbitrarily small.

Thus, large values of N can make the hyperbolic tangent potential minimum time proﬁle far

superior to the sinusoidal potential minimum time proﬁle for a given shuttling distance L and

shuttling time T , by enforcing the condition

N + 4N 2

e−2N

<

π2 2

≪

ω0T L

+

ω02T 2 2L

.

(110)

However, it should be noted that, for a given N , the sinusoidal potential minimum time proﬁle will always eventually produce a smaller value of ξ than the corresponding hyperbolic tangent potential minimum time proﬁle as the shuttling time T becomes suﬃciently large. This is due to the fact that the hyperbolic tangent potential minimum time proﬁle always has a ﬁnite value of A(0, T ) and therefore, there will be a time T for which

A(0, T )

>

π2 T ω0

,

(111)

so that the leading order behavior of the hyperbolic tangent potential minimum time proﬁle becomes greater than the leading order behavior of the sinusoidal potential minimum time proﬁle.
As should be clear from this discussion, the ideal shuttling protocol is one for which all of its derivatives at the beginning and end of the protocol are as small as possible, in the sense deﬁned for A(0, T ) and B(0, T ) above. This is precisely what is accomplished for the hyperbolic tangent potential minimum time proﬁle when N is taken very large. A protocol deﬁned similarly to the hyperbolic tangent potential minimum time proﬁle in Eq. 28, but using the error function, also has extremely smal-
l derivatives at the starting and ending points, and as was shown by Reichle, et al. [42] adds less energy to a shuttled ion than a sinusoidal potential minimum time proﬁle. The above analysis reveals why that is the case. However, both the hyperbolic tangent (for large N ) and error function potential minimum time proﬁle require a longer shuttling time T before approaching their asymptotic transient behavior. As T → 0, these functions become more and more step-like. As a result, higher and higher-
 order derivatives of x0 are required before the integral in Eq. 106 will vanish. Therefore, the sinusoidal potential minimum time proﬁle is better (gives less energy to the ion) than either the hyperbolic tangent for ﬁxed N or error function potential minimum time proﬁle for very short (ω0T ∼ 1) and very long (ω0T ∼ 2π/A(0, T )) shuttling times, but the sinusoidal potential minimum time proﬁle is worse for shuttling protocols of intermediate duration. This may be an issue where there is some expe-
rimental limitation on the maximum or minimum value of N , set for example by the speed of the circuit governing the control electrodes. However, it is clear that under most circumstances, shuttling protocols like the hyperbolic tangent potential minimum time proﬁle can be used to shuttle ions in a given time with the least amount of energy transferred to the ion.

3.3.3 Shuttling in variable frequency potentials
Finally we turn to the general case for which the shuttling potential has a variable frequency. The average ﬁnal motional state of an ion that was in the ground state at time t0 = 0 and

D. Hucul, M. Yeo, W.K. Hensinger, J. Rabchuk, S. Olmschenk, and C. Monroe 537

then shuttled for a time T over a distance L by a moving potential of varying frequency is

given by (Eq. 87)

n(T )

=

Υ(T ,

0)

+

1 2

(Q(T, 0)

−

1)

,

(112)

where Υ is deﬁned as in Eq. 68 and Q as in Eq. 76. As in the previous section, we will begin

by working with the particular model for frequency variation introduced in Eq. 37, explore

its impact on the average ﬁnal state of the shuttled ion and then see if we can make some

more general conclusions.

We consider the case for which the inertial forcing in the shuttling potential is minimal,

so that only the frequency variation has an impact on the shuttled ion’s ﬁnal motional state.

In this case, Υ ≈ 0, and to ﬁnd the average ﬁnal state of the ion we need only to evaluate

Q. Therefore, we look for the characteristic solutions X1 and X2 of the unforced parametric oscillator equation, satisfying the initial conditions

X1(t0) = 0; and X˙ 1(t0) = 1; X2(t0) = 1; and X˙ 2(t0) = 0,

(113)

with the frequency dependence as given in Eq. 37

X¨ = −ω02(1 − g cos

(M

+

1/2)

2πt T

)X,

(114)

where g is the modulation depth and M is related to the modulation frequency of the square

of the trap frequency. This equation can be written in the canonical form of Mathieu’s

diﬀerential equation [50],

d2X dz2

+

(a −

2q cos (2z))X

=

0,

(115)

by identifying the parameters

a=

ω0T

(M

+

1 2

)π

2
;

q

=

ga 2

;

z

=

πt T

M

+

1 2

.

(116)

In general Eq. 115 has solutions which are either even or odd in z, the Mathieu functions C(a, q, z) and S(a, q, z), respectively. The solutions X1 and X2 of Eq. 114 at the end of a shuttling operation of duration T satisfying the given initial conditions are then obtained in terms of these solutions. Recalling that we chose the time interval for our frequency model to be [−T /2, T /2], we have

X1(T /2)

=

T

C(a, q, −τ0)S(a, q, τ0) − C(a, q, τ0)S(a, q, −τ0)

(M + 1/2)π C′(a, q, −τ0)S(a, q, −τ0) − C(a, q, −τ0)S′(a, q, −τ0)

(117)

X2(T /2)

=

C′(a, q, −τ0)S(a, q, τ0 C′(a, q, −τ0)S(a, q, −τ0

) )

− −

C C

(a, (a,

q, q,

τ0)S′(a, q, −τ0) −τ0)S′(a, q, −τ0)

,

(118)

where

τ0

=

π 2

M

+

1 2

and the prime represents diﬀerent√iation with respect to z. W√ hen

q = 0, the Mathieu functions reduce to C(a, 0, z) = cos( az), and S(a, 0, z) = sin( az).

When q = 0, the behavior of the Mathieu functions depends on the value of the characteristic

exponent, ν = ν(a, q) [50]. When q and a are such that ν is real, the Mathieu functions are

538 On the transport of atomic ions in linear and multidimensional ion trap arrays
Fig. 11. (a) Stability diagram for the Mathieu’s functions in a vs. q space. Unstable regions are shaded. The dashed curves correspond to an integer value of ν for the odd Mathieu functions, S, and the solid curves to an integer value of ν for the even Mathieu functions, C. Also shown is the solid line plot of a vs. q for the frequency variation model of Eq. 114 when T = 100 (≈ 120 · 2π/ω0) µs; g = 0.5, ω0/2π = 1.173 MHz, for 50 < M < 300. The largest value of M corresponds to the point on the lin-
e closest to the origin. (b) Plot of the real (heavy line) and imaginary (light line) parts of the characteristic exponent ν as a function of M for the frequency variation model of Eq. 114 when T = 100 µs and g = 0.5. The imaginary values have been scaled by a factor of 5 to make them more visible on the graph. The solutions of Mathieu’s equation are unstable when ν is complex, with integer real part. The range of values of M corresponding to unstable solutions is larger for smaller values of the -
characteristic exponent.
ﬁnite for all z and the solutions are stable. When ν is an integer, the solutions are periodic functions in z. When ν is complex, the functions become inﬁnite at some value of z, and the solutions are considered unstable. The stability diagram for the Mathieu functions is shown for positive a and q in Fig. 11a. Unstable regions are shaded and bounded by solid and dashed curves corresponding to integer values of ν for the even and odd solutions, C and S, respectively. The straight, heavy line in th-
e ﬁgure displays the relationship between a and q in the parametric oscillator model developed above for g = 0.5.
First, let’s consider the case M = 0, which is appropriate for shuttling in a short step, so that the frequency of the shuttling potential is decreased and then increased back to its original value just once. Again, we’ll consider the step size to be 2.14 µm, and the frequency of the trap at the beginning and end to be ω0/2π = 1.173 MHz. Ignoring the impact of any inertial forcing, the contribution to the average ﬁnal state of the shuttled ion from the frequency variation of the potential will the-
refore be a function of the shuttling time and the modulation depth g. For shuttling times much less than one trap oscillation period, the impact of frequency variation of this type on the motional ion state is negligible, as expected (Fig. 12). As the shuttling time increases above the oscillation period of the trap, the average ﬁnal state of the ion reaches a maximum and then rapidly decreases to an asymptotic value for all values of the modulation depth, g. For shuttling times greater than roug-
hly 5 trap oscillation periods, n no longer depends on the shuttling time and becomes a simple function of g, as seen in Fig. 12. In general, the impact of this type of perturbation on the ion’s ﬁnal state is minimal for any reasonable frequency squared modulation depth, g and shuttling time, T.
The second case to be considered is for longer shuttling times and distances, with a series of rises and falls in the shuttling potential frequency. This model might represent the frequency variation a shuttled ion would experience as the ion passes through areas in the trap array

D. Hucul, M. Yeo, W.K. Hensinger, J. Rabchuk, S. Olmschenk, and C. Monroe 539

n

a

0.25

n

b

0.1

0.2

0.15

0.05

0.1

0.05

g 0.2 0.4 0.6 0.8

1

T Μs 10

Fig. 12. Figure (a) is a plot of the numerically calculated average motional state n of an ion versus the modulation depth g of the trap frequency squared, with M = 0, for shuttling times T = 1 µs (—) and T = 5 µs (- - -), respectively. The distance shuttled in each case is for 2.14 µm. Figure (b) is a plot of the numerically calculated average motional state n of an ion versus the shuttling time T in microseconds, with M = 0 and g = 0.5.

where the trap depth is successively weaker then stronger due to periodic arrangement of

the electrodes in the trap array. Even in the case where the shuttling potential is kept

constant along the ion’s trajectory, frequency variations in the transverse trap potential may

be occurring periodically, feeding energy into the transverse modes of the ion’s motion through

a subharmonic resonance. It might also represent the ﬂuctuations in the axial trap frequency

resulting from ﬂuctuating voltages on the control electrodes. We now consider a ﬁxed shuttling

time of 100 µs over a distance of 400 µm. For these parameters, it was shown in Sec. 3.3.2 that

a hyperbolic tangent shuttling potential minimum time proﬁle with N = 4.5 produces minimal

inertial forcing on a Cd+ ion, and so we can focus on the impact of the frequency variation on

the ion’s ﬁnal motional state. As discussed above, the solutions for the parametric oscillator

are stable or unstable, depending on the value of the characteristic exponent, ν. Now, as can

be seen from Eq. 116, for a particular amplitude of frequency variation given by the parameter

g, the relationship between a and q for the shuttled ion will be ﬁxed along a line in a − q

space given by a = 2q/g (Eq. 116). This curve is shown for the speciﬁc value g = 0.5 in

Fig. 11a by a heavy line. Smaller values of M are to the right and up, and larger values of

M are to the left and down, corresponding to values of a and q located closer to the origin.

If the amplitude g of the variation were to increase from this value, then the slope of the line

in Fig. 11 would decrease. It is then clear from the stability diagram in Fig. 11a that this

line would pass through larger and larger sections of the unstable regions. Therefore as g

increases, the likelihood of an unstable solution will also increase, as expected.

From Eq. 116 we see that both dimensionless parameters a and q are proportional to the

factor

Tfv =

ω0T

(M

+

1 2

)π

.

(119)

Since ω0T /2π is the duration of the shuttling protocol measured in periods of the ion’s secular motion, Tfv is the ratio of the eﬀective shuttling time to the number of cycles of frequency variation of the shuttling potential. Therefore, we call Tfv the period of frequency modulation. If the beginning and ending frequencies of the shuttling potential are equal, M is an integer. Therefore, the values of a and q for this model of parametric frequency modulation are not continuous functions of Tfv, -
but are discrete points along the line in Fig. 11 for a given value

540 On the transport of atomic ions in linear and multidimensional ion trap arrays
of g. Those points are relatively farther apart for small values of M , and closer for larger values of M , when a and q are both small. The relative spacing between points on the line is a function of the total shuttling time. For longer shuttling times, the points all along the line will be closer, and for shorter times, the points will be placed farther apart.
This has a signiﬁcant impact on whether a given frequency variation will result in a catastrophic shuttling protocol. For example, the line drawn in Fig.11a corresponds to the values of a and q for a frequency variation of 50% over a time of 100 µs ≈ 120(2π/ω0). The line passes through all four regions of instability drawn on the diagram. These regions correspond to integer values of the real part of ν from 1 to 4 as one moves away from the origin. The corresponding values of Tfv are roughly 1, 2,-
 3 and 4. The range in M for which the shuttled ion’s motion is catastrophically unstable grows markedly for higher values of M , corresponding to smaller values of Tfv. This is partially accounted for by the fact that the extent of the regions of instability through which the line in Fig. 11a passes does shrink as one moves up and to the right along the line (corresponding to smaller values of M ). This eﬀect is enhanced by the fact that the spacing between successive values along the line is inc-
reasing in that direction as well. As a result, the range of values of M for which the parametric driving is unstable grows signiﬁcantly for increasing M . This is illustrated in Fig. 11b, where the imaginary part of ν is scaled by a factor of 5 to make evident which values of M will result in unstable parametric oscillations. As seen in the ﬁgure, only one or two values of M at 57 and 78 correspond to unstable solutions with the real part of ν = 4 or 3, while 60 values of M from 205 to 265 are un-
stable when the real part of ν = 1. Since the regions of instability for a given value of g are determined by the value of Tfv, a shuttling protocol that takes 10 times as long to complete would require 10 times the number of frequency variations to observe the same unstable behavior. But it would also expand the range of values of M for which the solution is unstable by a factor 10.
We ﬁnd that longer shuttling times can result in unstable behavior at larger values of Tfv, corresponding to slower rates of frequency variation, while none was observed for the shorter duration shuttling protocols. This points to a new potential source of ion heating and possible trap loss during shuttling: in the rest frame of the ion electric ﬁeld inhomogeneities along the ion trajectory will appear as electric ﬁeld noise [51, 52].
The impact of these instabilities on the average ﬁnal motional state of a shuttled ion can be seen in Fig. 13a. They are indeed catastrophic. On the other hand, if M is kept to values much smaller than the number of ion oscillations during the shuttling protocol, so that Tfv ≫ 3, the solutions X1 and X2 generally remain stable, and the impact on n is quite small, even for the large modulations (g = 0.5) in the shuttling potential frequency assumed for this calculation, as seen in Fig. 13b. Althoug-
h resonances are predicted for all integer values of Tfv , they become increasingly narrow and less signiﬁcant at larger values. This is particularly true given the fact that the modulation of the frequency will not likely be exactly sinusoidal, and the resonances correspondingly dampened. Therefore, as a rule of thumb, we can say from the above analysis that a shuttling protocol that has fractional variations in the trap frequency squared of less than 20% (g < 0.2) and a period of frequency varia-
tion much greater than one,(Tfv ≫ 3) typically will not perturb the motional state of the shuttled ion.

D. Hucul, M. Yeo, W.K. Hensinger, J. Rabchuk, S. Olmschenk, and C. Monroe 541

n a
1012 108 104
1 M
0 50 100 150 200 250 300

n b
1
0.1 M
0 10 20 30 40 50 60 70

Fig. 13. (a) Plot of the calculated average motional state n of an ion versus M (given by the modulation frequency of the trap). The shuttling time is 100 µs and the modulation depth is g = 0.5. For M > 80, resonances can be observed arising from unstable regions in the Mathieu a-q plane. (b) Plot n versus M , with T = 100µs and g = 0.5. For M < 70, corresponding to a period of frequency variation Tfv > 3.3, the impact on the ﬁnal motional state of the ion is minimal.

4 Shuttling and trap design
In this section, we discuss the problem of shuttling atomic ions through junctions and in multiple dimensions. Shuttling in two dimensions is useful for the realization of simple quantum algorithms, and may also be indispensible for the implementation of quantum error correction [55]. By shuttling many atomic ion qubits simultaneously, error correction can be perfomed in a massively parallel fashion, thereby lowering the fault-tolerant error thresholds [56]. The ability to shuttle eﬀectively is in-
tertwined with the design of trap architectures. Linear shuttling has been previously implemented in a series of experiments employing extended linear rf traps [18, 21, 23, 57, 26, 59]. Multidimensional shuttling was accomplished in a T-junction, where the rf nodal trapping pathways of three linear traps are joined at the junction. In this trap, ions were shuttled between traps through the junction, and the positions of two ions were swapped by executing a “three point turn” through the junction [-
26].
Near a junction, the trapping potential is no longer strictly a linear trap. The ions may encounter large rf ﬁelds in this region. This gives rise to a repulsive ponderomotive axial force pushing the ions away from the junction. The additional static forces necessary to conﬁne the ion in the presence of theses new axial rf forces can weaken or destabilize the trap, allowing the ions to escape. Therefore, care must be taken when designing the trap junctions so that suﬃcient conﬁnement is maintained-
 while ions are transferred from one pathway to another. In order to make our discussion of the nontrivial features of the rf ponderomotive potential near a junction more precise, we deﬁne three terms:
• An rf hole describes the occurrence of an unstable (non-trapping) region of the rf ponderomotive potential near a trap junction, typically out of the plane of the ion pathway (Fig. 14a).
• An rf barrier is a region of non-zero ponderomotive potential along the ion pathway as it approaches a junction (Fig. 14a,c).
• An rf hump is a displacement of the minimum of the ponderomotive potential in a direction perpendicular to two or more merging ion pathways (Fig. 14c)g.
gNote that in Ref. [26], the term “rf hump” was used in the context of three-layer traps to describe and

542 On the transport of atomic ions in linear and multidimensional ion trap arrays
Fig. 14. Plots of the rf pseudopotential for an asymmetric, cross-junction trap and two symmetric T-junction traps having two and three electrode layers, respectively. The electrodes are separated by 80 µm in the asymmetric trap, and 200 µm in the symmetric traps. The rf electrodes are shown in light pink, while the grounded layers are blue. In all three simulations, the rf voltage was set to 1.0 V. The contour plots are of the Electric Field amplitude squared, going from dark red to light yellow -
as the values range from 0 to 4.90 × 105 (V /m)2 . Notice the rf barriers along the ion pathways for the asymmetric and three layer traps, while the two layer trap has an rf hole at its center. The rf hump in the pseudopotential for the asymmetric trap is also clearly seen.
These three features of the ponderomotive potential are illustrated in Fig. 14. The rf barrier, which occurs in all multidimensional junction traps explored to date, represents a region near the junction in which the rf ponderomotive potential impedes ion shuttling. An rf hole can occur in some trap geometries, and must be either avoided either by design, or the ions must be steered around the hole. An rf hump is typically present near junctions in asymmetric traps, described below. 4.1 Trap geome-
tries Trap designs that address the need for two-dimensional control of ions presently fall into two broad categories, symmetric and asymmetric traps, which are characterized by the degree of symmetry of the trap electrodes in the third dimension perpendicular to the plane in which the ion trajectory is conﬁned. Both designs have advantages and disadvantages of their own related to issues of heating, and of electrical and optical access. The next sections compare these two geometries with special -
attention to multidimensional shuttling.
Symmetric ion traps feature rf electrodes that are located symmetrically around the ion pathway. Symmetric traps may be more diﬃcult to fabricate because they typically require multiple layers, but they also feature high trap depths and eﬃcient pushing forces on ions.
energetic hump or rf barrier along the axial minimum of the ponderomotive potential. The deﬁnitions above are provided to make a clear distinction among the features of the rf ponderomotive potential in the diﬀerent types of traps being discussed in the ion-trapping community

D. Hucul, M. Yeo, W.K. Hensinger, J. Rabchuk, S. Olmschenk, and C. Monroe 543
Symmetric ion traps include two-layer traps, which have the rf electrodes arranged in two planes above and below the plane of the ion pathway [51, 57, 61], and three-layer traps, where the rf electrode is conﬁned to a single layer in the plane of the ion pathway and two outer layers held at rf ground consisting of segmented electrodes that carry static voltages [62, 26].
Two-layer symmetric traps have drawbacks. Compensation of uncontrolled external static ﬁelds in three dimensions (potentially giving rise to large amounts of micromotion [35]) requires extra electrodes or the application of static voltages to the rf electrodes. More importantly, the junction region in two-layer traps is complicated by the fact that the rf electrodes are not in the same plane as the rf nodal pathways (See Fig. 14). This lack of lateral symmetry usually produces an rf hole at the ju-
nction center, and the ions must then be carefully steered around the hole and through sizable rf barriers for successful transit. A variation of the two-layer trap with small bridges extending diagonally across the junction has also been proposed to close that hole, at the cost of introducing rf barriers along the ion pathways [63].
Three-layer traps [62, 26] can have both vertical symmetry (perpendicular to the multiple channels forming a junction) and transverse symmetry, and allow for complete threedimensional compensation of background static ﬁelds exclusively through the control electrodes. Shuttling through a junction is also simpler in three-layer traps, as the added symmetry avoids rf holes at the junction.
Asymmetric traps, also referred to as single-layer traps or surface traps, have all their electrodes located in one or more planes below the ion pathway [64, 65, 66]. This oﬀers clear advantages in the context of large-scale fabrication, as the electrical lead-ins can be fed from the underside of the trap electrode surface, at the expense of more restricted optical access.
It is possible to greatly reduce the eﬀect of the rf barrier in both the symmetric and asymmetric trap junctions by tapering the (surface) electrodes in the approach to the junction [67]. This serves to increase the size of the region along the ion pathway in the linear portion of the trap having a non-zero axial electric ﬁeld component and eﬀectively spreads out the rf barrier that the ion must pass through. While the total work necessary to transport the ion through the junction would not change-
, the force required to advance the ion at any point along the pathway can be signiﬁcantly reduced. For the asymmetric trap this also reduces the characteristic trap size near the junction and pushes the ponderomotive minimum closer to the trap surface, minimizing the rf hump. However, the rf barrier also eﬀectively reduces the depth of the trap over the range of its spatial extent, which could be an issue for shallow traps.
4.2 Shuttling through junctions
Shuttling through junctions, where three or more linear trap axes join, is greatly complicated by the presence of rf barriers leading into the junction. These barriers can result in added kinetic energy to the ions that is diﬁcult to control, and in some cases loss of the ion from the trap altogether. The increasing complexity of the trap design and the greater demands on precise knowledge of the trap ﬁelds means that accurate numerical simulation of the ﬁelds as outlined earlier in this paper bec-
omes essential.
Although rf barriers are present in all trap junctions considered here, we will examine their inﬂuence and characterize their features in a simple, three-layer T-trap. The spatial extent of these rf barriers and the potential gradient along each side of the barrier determine how the

544 On the transport of atomic ions in linear and multidimensional ion trap arrays
ion can be reliably carried through the junction. For the ion to make it through the barrier in a controlled fashion, the potential energy gradient of the guiding control ﬁelds should be at least as great (and opposite in sign) as the gradient in the rf pseudopotential barrier. Otherwise, the ions must be given enough kinetic energy to make it through. If the gradient is canceled only on one side of the barrier, the ions will still be accelerated by the gradient in the rf ponderomotive potential a-
s the ion enters the junction, again giving the ions unwanted kinetic energy. Thus it is most desirable to reverse the sign of the potential energy gradient on both sides of the barrier, so that the ion remains in a smooth axial trap throughout its motion. This suggests a strong relationship between the spatial extent of the rf axial barrier, and the maximum size of the control electrodes used to shuttle the ions. Tapered electrodes at the junction serve to relax this maximum size restriction. The-
 strength of the rf barrier is also related to the trap depth perpendicular to the plane of the ions’ motion at the junction, and if the quasistatic control forces are too high, then they will destablize the trap out of the plane of the junction. In sum, the four most important features of the rf barriers are their spatial extent, gradient, strength and the trap depth out of the plane at the barrier location.
As dimensional analysis suggests and numerical simulations show, all of these features are controlled by the characteristic distances of the trap architecture near the junction. These include the channel width of the trap, a, deﬁned by the perpendicular distance between the rf electrodes and the rf nodal pathway, the aspect ratio of the trap, α, deﬁned by the ratio of the channel width, a, with the vertical separation, d, between the rf and control electrodes, and ﬁnally, the ratio, δ, which is de-
ﬁned by the distance between the electrodes, h, to the thickness of the electrodes, w. This last ratio is signiﬁcant only in the case of very large aspect ratios. The salient features of the rf barrier for most traps are set primarily by the channel width a. The rf barrier results from unbalanced ﬁelds produced by the electrodes across the junction, as well as from the corners of the nearest electrodes. Therefore, as a practical matter, it is best to design the trap so that the control electrodes -
are segmented into pieces having a width less than or equal to a. This guarantees that quasistatic control ﬁeld gradients can be generated to overcome the rf barrier gradient. This simple rule of thumb was shown in numerical simulations to be suﬃcient to reliably shuttle the ions around the corner of both two and three layer traps. If the control electrode segments are much larger than a (such as in the T-junction array of Ref. [26]), the shuttling procedure involves control electrodes that are fa-
r removed from the ion’s position, and very high voltages are required to produce static potential gradients that cancel those of the rf barrier. Such a protocol may result in the ion acquiring a signiﬁcant amount of kinetic energy that will need to be mitigated via laser cooling, sympathetic cooling, or phase sensitive switching of the trapping potentials.
The rf barrier strength for a three layer trap of width a = 100 µm and electrode thickness w = 20 µm is shown for various trap aspect ratios α in Fig. 15. Note that the spatial extent of the barrier is largely unaﬀected by aspect ratio. However, the barrier strength decreases dramatically as the aspect ratio increases, as the ﬁgure illustrates. This can be understood by considering the eﬀect of the control electrodes as they come closer to the rf electrodes, drawing the electric ﬁeld lines from rf-
 to control electrodes and reducing the electric ﬁeld amplitude uniformly out in the channel. Aspect ratio also has a direct impact on trap depth (Fig. 16 (b)), so that trap depth increases with decreasing aspect ratio, up to the limit of an aspect ratio of ≈ 1/2. Below that limit, the geometry approaches the situation of an rf layer with

D. Hucul, M. Yeo, W.K. Hensinger, J. Rabchuk, S. Olmschenk, and C. Monroe 545
Fig. 15. A plot of the rf electric ﬁeld amplitude squared vs. axial position along the axis of the stem of a three layer T trap with one volt applied to the rf electrodes. The axial position is scaled with the channel width, a = 100µm. The origin is at the center of the T-junction. The electrode thickness was modeled to be d = 20µm, and aspect ratios, deﬁned as the ratio of the distance from rf electrode tip to rf electrode tip to the distance between the rf electrodes and the control electrodes (-
see Fig. 17), α, were chosen ranging from 1 to 10.
ground at inﬁnity, and the depth therefore begins to drop again to its asymptotic value. By taking the ratio of rf trap depth to barrier strength, we obtain Fig. 17. This ﬁgure shows that the trap depth remains at least ten times as great as the barrier strength, even for large aspect ratios, while it increases to twenty ﬁve for an aspect ratio of 0.25. By decreasing the trap aspect ratio in three layer junctions, the trap depth at the junction can be made much larger than the rf barrier strength,-
 providing a large margin of safety for reliably shuttling through the junction. More importantly, by increasing the aspect ratio of a three-layer junction, the rf barrier can be made arbitrarily small while retaining a strong trapping potential inside the junction region.
5 Practical implementation of shuttling operations 5.1 Introduction In order to realize most quantum computing architectures with trapped ions, it may be necessary to shuttle ions between memory (storage) zones and interaction (entanglement) zones. To bring any two ions together in an entangling zone, it is necessary to be able to sort a linear chain of ions into any desired order. This requires the successful implementation of four key protocols: separating two ions that are located in the same t-
rap, linearly shuttling two ions that are in the same trap, recombining two ions together into one trap, and shuttling ions around corners through a junction on an individual basis [18, 21, 23, 57, 26]. The combination of all four elementary protocols allows for arbitrary control of trapped ions in two dimensions.
The simulation of ion trap potentials via the method of basis functions has thus far been completely general. The power of this method and its utility for simulating potentials will be shown by analyzing the shuttling protocols used in experiments at the University of Michigan

546 On the transport of atomic ions in linear and multidimensional ion trap arrays
Fig. 16. Plot of the rf barrier strength and trap depth at the barrier maximum versus the aspect ratio in a three layer symmetric T-trap array with 1 volt applied rf. The aspect ratio is deﬁned to be the ratio of the rf layer channel width to the tip to tip separation of the rf and control electrode layers. It is possible to decrease the rf barrier height at the expense of trap depth by increasing the trap aspect ratio.
Fig. 17. A plot of the ratio of rf trap depth and barrier strength vs. aspect ratio in a three layer T trap. The T has channel width a = 100µm and electrode thickness d = 20µm.
[26] where ions are shuttled linearly, around a corner, and are swapped in an 11-zone, three layer T-junction ion trap array (see Fig. 18). Discussing the practical implementation of shuttling operations in this particular geometry will serve as an instructive example and will provide recipes to develop shuttling protocols for arbitrary geometries. As discussed in Sec. 4, there are ways to design optimal ion trap geometries. However, fabrication constraints (such as the longitudinal extension of t-
he corner electrode inside a junction) may result in non-optimal trap geometries. The strategies that will be introduced in order to overcome

D. Hucul, M. Yeo, W.K. Hensinger, J. Rabchuk, S. Olmschenk, and C. Monroe 547

(a) Top View
x y
25 µm

G (14)
12 (G) k G (10) j

26 (6) 4 (24) G (2)

7 (27) 25 (5) 3 (G)

0 (G)
200µm a b c
G (1)
400 µm

800 µm

8 (G) i 800 µm de
Gf (17) 19 (G) g G (21) h

1.4mm 23 (G)

913 µm

15 (G)
G (13) 11 (G)
G (9)
16 (G) G (18) 20 (G)
G (22)

(b) Cross Section

Top Layer

z

(Static Voltage)

RF Layer 250µm Ion

x or y

125µm

125µm 125µm

250 µm

200 µm

Bottom Layer (Static Voltage)
: Trapping Zone

Fig. 18. Top view and cross section of the Michigan T-junction ion trap array showing all 11 trapping zones a-k [26]. The control electrodes are numbered with bottom-layer control electrodes in parentheses. G indicates a grounded control electrode.

such constraints for the T-junction array discussed here are therefore of general interest for designing shuttling protocols in any two-dimensional ion trap.
The Michigan T-junction ion trap array [26] has 49 electrodes and a suﬃcient number of trapping zones to swap the positions of two ions. The central layer contains a T-shaped channel; the electrode is formed by depositing gold around the channel with an electron beam evaporator on an alumina substrate. Gold-coating of the 24 control electrodes on each of the two outer layers is accomplished with dry-ﬁlm photolithography and wet-chemical etching. Here, electrodes and tracks are formed by depositing-
 0.015 µm of titanium followed by 0.4 µm of gold. Two thin alumina spacer plates are inserted between each outer layer and the central rf layer substrate. All three substrates are held together via rectangular alumina mount bars. Chip capacitors and resistors are ribbon-bonded onto a gold coated quartz plate that is mounted adjacent to the alumina substrates (top and bottom of ﬁgure 19). To isolate the control electrodes from external noise and from induced rf from the nearby rf electrode, each of-
 the 28 non-grounded control electrodes is immediately shunted to ground via a 1 nF capacitor and then connected in series to a 1 kΩ resistor leading to the vacuum feedthrough.
The trap array has a plane of symmetry along the xy plane through the rf layer, and a second in the yz plane which divides the trap along the stem of the T, with the origin at the center of the junction of the T. The trap array was modeled in Vector Fields’ Opera by centering it in a bounding box extending 20,000 µm in all three directions. For simulations done on an Intel 4, 2.8 GHz processor with 1.0 GB of RAM running Windows XP, the number of nodes in the problem ranged from 1 to 2 million. Whe-
n calculations for the rf pseudopotential were carried out, the node spacing was made tightest in the junction region of the T, where it reached a minimum of 10 by 10 by 1.5 µm. When calculations for the control electrode basis functions were performed, the node spacing was kept at 10 by 10 by 3.0 µm along the electrodes where the potential changed most rapidly. The electrodes themselves were excluded from the simulation volume.
The rf pseudopotential used to trap ions in the T depends on the square of the electric

548 On the transport of atomic ions in linear and multidimensional ion trap arrays
Fig. 19. T-junction ion trap with associated RC ﬁlters, wirebonds, and wires. The T-junction ion trap is an eleven zone ion trap with 48 DC electrodes of which 28 are connected to variable external voltages. The fabrication of the ion trap array required over 500 wire bonds. The inset in the upper right corner shows a magniﬁed view of the junction region. The segmented linear DC control electrodes have an axial extent of 400µm while the corner electrodes have an axial extent of ∼800µm. The graph i-
n the lower left is a plot of the rf pseudopotential near the T-junction and shows the RF barriers that impede entry to the junction region from all three directions. The picture in the lower right is a perspective view of the potential looking down the channel in the top of the T-junction.
ﬁeld amplitude produced when the rf layer is at the maximum voltage and the two outer layers of electrodes are held at rf ground. To estimate the error in the calculated electric ﬁeld, a comparison was made between the simulation used to determine the rf pseudopotential, and an identical model with the mesh density doubled throughout. (Because of memory limitations, this higher mesh density model took one month to run on a 3.2 GHz dualprocessor PC workstation with 1.0 GB of RAM, running Windows XP-
.) The voltage used on the rf layer in both cases was 1.0 V. The ﬁeld was evaluated for both models along a grid of points along the entire length of the top channel of the T, and the fractional diﬀerence in the ﬁeld was evaluated at each point. The average fractional diﬀerence was equivalent to a 0.15% error. This average was sharply skewed upward because of the presence of the nodal lines along the center of channel due to ﬁeld cancelation. Along that line, fractional errors of 60% were reached.-
 The diﬀerence in actual values of the ﬁeld along the nodal line, however, corresponded to less than 1 V/m. This is insigniﬁcant when compared to the ﬁelds of thousands of V/m just microns oﬀ axis. The electrostatic potential calculations done with the same mesh spacing had signiﬁcantly smaller errors than even these. Once these ﬁelds have been determined numerically, it becomes possible to construct the basis functions necessary to calculate and analyze the required shuttling protocols.

D. Hucul, M. Yeo, W.K. Hensinger, J. Rabchuk, S. Olmschenk, and C. Monroe 549
5.2 Linear Shuttling
The most elementary shuttling protocol is moving an ion along a linear path from one position to another. In a segmented linear rf Paul trap, this procedure implies shuttling the ion along the rf node between trapping zones. Several notable experiments have already utilized linear shuttling protocols, and have demonstrated essentially unit probability of success [18, 57]. Here we describe the design and the implementation of a shuttling protocol for linear ion transport that holds the secular freq-
uency constant. This constraint allows us to use the simpliﬁed analysis of section 3.3.1.
The simulations of trap voltages via the basis functions described in Sec. 2.3 allow us to determine both the trap frequencies and the position of the trap. The design of the shuttling protocol begins by determining the start and end locations of the trap; for instance, zones c (start) and b (end) in Fig. 18. The total shuttling distance may then be broken up into any number of steps, where the ﬁnite time needed to change the voltages on the electrodes establishes an upper bound for the total step-
s required. The frequency of the potential should be kept constant throughout this process. In order to determine the voltage changes required for each step in the experiment, two actions are undertaken in the numerical simulations. The ﬁrst is to iteratively adjust/produce an asymmetry between the electrodes serving as the endcaps of the current trapping zone, thereby moving the minimum of the potential in the axial direction by the designated amount (to within some arbitrary choice of error). Th-
e change in voltage will usually alter the axial trap frequency as well. The second action seeks to compensate for this by multiplying all the voltages by some scale factor, iteratively adjusted until the previous secular frequency is once again obtained. While multiplication by this scale factor appears to have negligible eﬀect on the position of the potential minimum, any shift could always be accounted for by iteratively repeating these two previous actions. This method is very robust in that e-
ach step is some small shuttling distance, which may be used to produce any time dependent behavior (e.g. linear, sinusoidal, or transcendental potential minimum time proﬁle) for the potential minimum, x0(t), in the total shuttling protocol as described in Sec. 3.1. The ﬁnal product is an array of voltages in which the axial trap frequency is kept nearly constanth.
Using the scheme described above, we generated a shuttling protocol consisting of 200 discrete time steps that shuttled the ion from zone c to b, a distance of 425 µm in 1 ms. The ion was moved a constant distance at each step, 2.14 µm, resulting in a linear potential minimum time proﬁle. The axial trap frequency was kept at 1.173 MHz with a tolerance of 0.5%. The voltage sequence is shown in Fig. 20. The experiment was carried out such that a single Cd+ ion was laser-cooled, shuttled, detected, a-
nd then laser-cooled once again. The success rate was observed to be > 99.999% (100000 attempts). Hence, we have demonstrated a linear shuttling protocol that has virtually unit probability of success.
In order to show that the shuttling protocol is adiabatic, it is necessary to cool the ion to the ground state and measure its temperature before and after the shuttling operation. A somewhat weaker test would be to shuttle the ion back and forth many times between two trapping zones without the application of any laser cooling. If the boil-out time (the time it takes for the ion to be heated out of the trap) remains unchanged with and without the
hThe amount of ﬂuctuation in the secular frequency can be minimized, as additional computation time allows iteration on a ﬁner scale.

550 On the transport of atomic ions in linear and multidimensional ion trap arrays

200

0, 1, 2, 3,

8, 9, 16, 17

4, 5

150

6, 7

Voltage (V)

100

50

0

−50 0

0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9
Time (ms)

Fig. 20. This shows the voltages on the various electrodes of the trap while the ion is linearly shuttled from zone c to b.

shuttling operation, weak evidence for adiabaticity is obtained. This test would constitute a necessary but insuﬃcient condition for the shuttling process to be adiabatic.
5.3 Corner Shuttling
5.3.1 General considerations
There are many challenges associated with shuttling an ion around a corner. First of all, a suitable control electrode geometry should be chosen to give maximum control over the ion in the junction region. Speciﬁcally, the control electrode widths should be no larger than the channel width of the ion trap array. It is still possible to shuttle ions around a corner using electrode sizes that are larger than the channel width [26], but it becomes diﬃcult to control the motion of an ion in the juncti-
on region. Smaller control electrodes also make it easier to overwrite rf barriers near junction regions without destabilizing the trap in the transverse direction, however practical fabrication and operation constraints will typically place certain limitations on the electrode geometry. In addition for the case of asymmetric (planar ion traps) one also needs to account for the presence of rf humps (see Sec. 4).
Secondly, large electrodes near a junction region can make it diﬃcult to maintain constant trap frequencies when shuttling an ion into a junction region without destabilizing the trap in the transverse direction. Maintaining constant trap frequencies may be an important factor in minimizing acquired kinetic energy when shuttling ions around a corner as is discussed in Section 3.3. This presents a unique challenge when shuttling an ion around a corner because the weak axis of the trap rotates. For -
example, when shuttling from zone d to zone i (see Fig. 18), the weak axis is originally in the y-direction when an ion is in zone d. After an ion is shuttled around the corner to zone i, the weak axis is in the x-direction. Smaller control electrodes should help maintain a constant trap frequency along the weak axis.
A third challenge to corner shuttling which may arise is the accurate simulation of an ion’s motion through an ion trap array. The advantages of the Bulirsch-Stoer method are discussed in Section 2.4 and the Appendix. The accurate simulation of an ion’s classical motion plays a key role in calculating the average motional state of the ion during shuttling. A limitation

D. Hucul, M. Yeo, W.K. Hensinger, J. Rabchuk, S. Olmschenk, and C. Monroe 551
to the accuracy of numerical solutions of an ion’s trajectory can arise in the form of a local maximum in the plane of the trap array when trying to overwrite the rf barrier. For example, in the T-trap, there is a small local maximum in the pseudopotential at t = 25 µs in the xy plane during corner shuttling near the center of the junction near zone e (see Fig. 18) that slopes down toward zone i and zone f. A local maximum in the pseudopotential means that the calculated motion is sensitive to per-
turbations in the initial conditions or phase of oscillation of an ion and can cause errors in an ion’s calculated trajectory in the junction region. The issue of having a local pseudopotential maximum is related to control electrode size; smaller control electrodes should allow a control electrode potential to overwrite any small local potential maximum.
Another issue important to the accuracy of the numerical simulation is whether to use the pseudopotential approximation when simulating the rf trapping ﬁeld. As was discussed earlier, it is possible to simulate the ion’s motion either with the time averaged pseudopotential (Eq. 16) or the actual rf potential (Eq. 15). In any of the junction geometries considered in this paper, it is impossible to maintain an ion near an rf node throughout a corner shuttling procedure, making the impact of micromot-
ion on the ion trajectory potentially signiﬁcant. In addition, if the shuttled ion does pick up a signiﬁcant amount of kinetic energy, it will likely explore regions in the ﬁnal trapping conﬁguration where micromotion is potentially large. In our case study of the T-junction array, the ion typically picks up 0.5 eV of energy due to micromotion alone. This is comparable to the ﬁnal kinetic energy of the large scale secular motion of the ion. Therefore, despite the computational speed-up (in our cas-
e, a factor of 2) by using the pseudo-potential, in order to fully understand the ion’s motion through a junction, one should simulate the ion’s motion using the sinusoidally varying rf potential from Eq. 15 if there is any uncertainty whether the process is fully adiabatic.
In order to provide a detailed overview on how such a corner shuttling operation is achieved, we discuss the particular example of shuttling an ion around the corner inside a T-junction ion trap array [26]. This particular array is limited by the fact that the control electrodes at the corners of the junction are too large (4 times larger than the channel width) to achieve adiabatic shuttling throughout the junction. In contrast, the ions in this trap are pushed through the rf barriers by applying-
 very high control electrode voltages on those electrodes (labeled 6, 7, 26, 27, 10, 11, 18 and 19 in Fig. 18) that are nearest neighbors to the corner electrodes of the T. These large, but distant, voltages produce a suﬃciently positive gradient in the potential at the position of the rf barriers so that the ions can be pushed into the junction region and then directed through one of the rf barriers in the top of the T to be trapped in one of the zones labeled f through k. In doing so, an ion gai-
ns ≈1 eV of kinetic energy. The large extent of the corner electrodes and the ﬁnite trap depth in the junction of the T means that performing detailed numerical simulations was crucial for determining those shuttling protocols which would successfully move ions through the junction of the trap array. Constraints in future trap designs is likely to remain signiﬁcant as the demands on the performance of these traps increase as well. An ion trap array that contains many qubits may require many thousa-
nds of electrodes to carry out any needed shuttling operations. It is inevitable that fabrication constraints may result in non-optimal geometries. Therefore, the numerical analysis of the T-junction ion trap array [26] and the comparison of the simulated ion dynamics with experiment during the operation of this trap provide a good case study

552 On the transport of atomic ions in linear and multidimensional ion trap arrays
Fig. 21. The control electrode voltage proﬁle for the corner shuttling protocol. The ﬁgure shows the voltages applied to the relevant electrodes to execute the corner shuttling protocol.
when considering the process for scaling up current trap technology to meet the demands of quantum information processors and other ion trap applications.
5.3.2 Stem-to-top corner shuttling in a T-junction array Here we describe the process of stem-to-top corner shuttling using the speciﬁc example of a T-junction ion trap array [26]. An ion is initially trapped in zone d (see Fig. 18) with trap frequencies (ωx/2π, ωy/2π, ωz/2π) = (5.0 MHz, 0.7 MHz, 4.9 MHz). Figure 21 shows the voltage time proﬁle used to shuttle an ion around the corner. The voltages of control electrodes 6, 7, 26, 27 are raised to ∼200 V in ∼ 20 µs using hyperbolic tangent voltage-
 vs. time proﬁles to push the ion toward the junction region. Note that this voltage time proﬁle does not imply that the potential minimum of the trap follows a hyperbolic tangent in time (see Eq. 27). It is possible to specify a particular potential minimum versus time proﬁle [58]. Simultaneously, the voltages of control electrodes 8 and 17 are raised from approximately -4 V to 0 V while control electrodes 9 and 16 are lowered from ∼80 V to -3 V. The net eﬀect of these voltage changes over the ﬁr-
st ∼ 20 µs is to push the ion through the rf potential energy barrier.
After going through the rf barrier, the ion is accelerated by the potential gradient on the backside of the rf barrier from y = −220 µm to y = 0 µm in ∼ 2 µs, acquiring ∼0.5 eV of kinetic energy in the process (see Fig 22 - 24). The ion continues in the y-direction past zone e toward the rf layer in the top of the T trap. The ion is pushed back by the rf potential toward zone e. Thus, the ﬁrst step in the corner-shuttling protocol is to successfully move an ion into the junction region and then ke-
ep it trapped there until the next stage of the protocol is implemented. This is made diﬃcult by the relatively weak trap in the junction region, and the ion’s relatively large kinetic energy acquired during its traversal of the rf barrier into the junction. Note that in the shuttling protocol as recorded in Fig. 21, the voltages on the control electrodes 8, 17, 9 and 16 all converge nearly to ground while the ion was in the junction region. High voltages on these electrodes can easily make zone e-
 anti-

D. Hucul, M. Yeo, W.K. Hensinger, J. Rabchuk, S. Olmschenk, and C. Monroe 553
trapping. There was a delicate tradeoﬀ when designing the corner shuttling protocol for this trap. A suﬃciently high potential gradient needed to be applied to push the ion through the rf barrier. At the same time, the control electrode voltages near the junction region needed to be kept near ground to prevent the junction region from becoming anti-trapping. The key to successfully shuttling an ion around the corner through the junction region proved to be ﬁnding the right balance between these tw-
o requirements.
When the ion is in the junction region, the four corner electrodes are used to guide the ion towards zone i. When the ion has reached the desired ﬁnal trapping position at zone i, the control electrode voltages change to their ﬁnal values in ≃ 1 µs. This rapid change in voltage is timed so that the ion crosses the ﬁnal trap minimum as the voltages ramp up. Changing the voltages in this way helps to minimize any further contribution to the ion’s kinetic energy. Speciﬁcally, the voltages of control -
electrodes 16 and 17 are ramped to approximately +10 V while the electrodes 8 and 9 are lowered to approximately -10 V in 1 µs, “catching” the ion in zone i. Simulations incorporating micromotion show that the amount of kinetic energy added in this step is still considerable: 0.7 eV (see ﬁg 23). The ﬁnal trap position in zone i is deﬁned by these voltages, with the resulting secular frequencies (ωx, ωy, ωz) = (0.5 MHz, 5.5 MHz, 4.3 MHz).
When the ion enters zone e, there is a local potential maximum in zone e. This local maximum places a limitation on the accuracy of numerical solutions because small perturbations in the initial position of the ion can cause the ion to go in radically diﬀerent directions in the junction region. The optimization of the “catch” step described in the preceding paragraph is to ensure that when an ion does go past the potential maximum in the correct direction, the ion will be caught with little added -
kinetic energy. However, if the ion is guided by the local maximum toward the opposite direction, then the ion will gain considerably more kinetic energy as the voltages suddenly ramp up to form the ﬁnal trap. In addition, there is some evidence that this is an eﬀect that can be seen experimentally. Occasionally the ion was observed to crystallize in zone i one full second after being shuttled from zone d, a crystallization time several orders of magnitude longer than the crystallization time afte-
r linear shuttling. This could be due to the fact that the ion occasionally makes an excursion toward zone f which means that when the voltages suddenly change, the ion gains a lot more kinetic energy and takes longer to cool.
The corner shuttling protocol was used to shuttle the ion from zone d to zone i in the Ttrap in 26 µs with a success rate of greater than 99% (881 out of 882 attempts) [26]. The speed of the shuttling protocol was limited by the RC ﬁlters and the speed of the analog output cards that supply voltage to high speed op amps that are connected to the trap electrodes.
Despite the high success rate of the shuttling protocol from zone d to zone i, we were unsuccessful in shuttling the ion from zone d to zone f using a voltage protocol mirrored at the y-z plane through the center of the stem of the T. This discrepancy may be attributed to static bias ﬁelds or a misalignment observed in the three electrode layers due to the manual assembly process. The use of semi-conductor etching techniques to build multi-layer ion trap arrays is one way to avoid such misalignmen-
ts and asymmetries in the trap [59, 60]. Instead, a composite shuttling protocol was used. The protocol begins with shuttling the ion from zone d to i as described above, the ion is laser cooled and then shuttled from zone i to f in a linear fashion. The shuttling from i to f is not optimized to maintain constant secular frequency,

554 On the transport of atomic ions in linear and multidimensional ion trap arrays
Fig. 22. Simulation (including micromotion) of the ion’s position along the y-axis (axis of the stem of the T) in and around the junction region during corner turning. Note the accentuated micro-motion from t = 18 µs to t = 20 µs as the ion traverses the rf barrier.
Fig. 23. Simulation of the ion kinetic energy in and around the junction region during the corner turning protocol. Note the rise in kinetic energy after the ion crosses the rf barrier at 18 µs and the abrupt rise in energy at the 25 µs when the “catch” step is implemented.
however, the success rate was 100% (50 attempts). 5.3.3 Top-to-stem corner shuttling in a T-junction array The shuttling sequence from trapping zone i to trapping zone d is similar to the shuttling protocol from zones d to i in that the ion must be pushed through the rf barrier without causing the trap to become destabilized in the transverse direction while the ion is in the junction region. However, there is an important diﬀerence between the two protocols in the T-junction trap array. In genera-
l, it is not possible to simply reﬂect the voltage proﬁle that shuttled an ion from stem-to-top (zone d to i) in time in order to shuttle from top-to-stem (zone i to d). While Newton’s equations of motion are time-symmetric, the initial conditions of an ion being shuttled from zone i (for example after laser cooling) to zone d are not the same as the ﬁnal conditions of the ion after it has acquired ∼1 eV of kinetic energy after being shuttled from zone d to zone i. Therefore, to use the time reﬂec-
ted stem-to-top control voltage proﬁle in order to shuttle from top-to-stem, one would need to prepare the ion in zone i with initial conditions equal to the ﬁnal conditions after the shuttling operation from d to i.

D. Hucul, M. Yeo, W.K. Hensinger, J. Rabchuk, S. Olmschenk, and C. Monroe 555

Fig. 24. Potential energy map (in the pseudopotential approximation) as an ion is shuttled around a corner of the T-junction. The region energetically accessible to the ion is indicated in black. The kinetic energy of the ion is initially small, so the region of the T that the ion can energetically traverse is small. As the ion goes through the rf barrier, it acquires ∼1 eV of energy, so the region that the ion can energetically traverse is much larger.

The complexity of the geometry will determine how well the two sets of conditions will need to be matched. As this may be diﬃcult to achieve one may have to design a new voltage control sequence. Per deﬁnition an adiabatic shuttling protocol can always be time reﬂected for a successful reverse shuttling operation.
Even though simply reversing the stem-to-top protocol was unsuccessful, it served as the basis for developing a working routine. In order to realize the top-to-stem protocol, the roles of the following electrodes are swapped:

9 ↔ 17 10 ↔ 6 11 ↔ 7

(120)

while electrodes 8 and 16 keep the same time dependent voltage proﬁle. The successful shuttling protocol from zone i to zone d [26] starts with an ion in zone i with trap frequencies (ωx, ωy, ωz) = (0.7 MHz, 4.5 MHz, 4.2 MHz). The voltages on control electrodes 10 and 11 are changed to 200 V via a hyperbolic tangent function while simultaneously raising the voltages on control electrodes 8 and 9 from −4 V to ground and lowering the voltages on electrodes 16 and 17 from 35 V to −4 V. This provides -
enough potential gradient to push the ion through the rf barrier into the junction region (zone e). Again, the ion gains ∼1 eV of kinetic energy after going through the rf barrier, and once the ion is in the junction region, it makes large oscillations in the relatively ﬂat trap of zone e. Then the voltages on the control electrodes are suddenly ramped, as can be seen in Fig. 25, to form a trap in zone d with (ωx, ωy, ωz) = (5.0 MHz, 0.6 MHz, 3.6 MHz). The timing of this step is done in an attempt-
 to have the voltage ramp occur when the ion is near the potential minimum to minimize the amount of kinetic energy gained.
The control voltage scheme in Fig. 25 successfully shuttled an ion from zone i back to

556 On the transport of atomic ions in linear and multidimensional ion trap arrays
Fig. 25. Control electrode time proﬁle for corner shuttling from the top of the T to the stem of the T. A plot of the voltage vs. time for the electrodes used to shuttle the ion from the top of the T to the stem of the T.
zone d in the T-junction ion trap with a success rate of 98% [26] (118 attempts) with a total shuttling time of 30 ms. The reliability of the shuttling protocol drops oﬀ dramatically if we increase the shuttling speed. We failed to observe any instance of successful shuttling if the shuttle time was less than 20 ms; this is 3 orders of magnitude slower than the shuttling scheme between zone d to zone i. If misalignments in the trap electrodes and stray electric ﬁelds are incorporated into simulati-
ons, one should be able to optimize the voltage control scheme so that an ion may be shuttled successfully from zone i to zone d just as fast as an ion may be shuttled from zone d to zone i. 5.3.4 Characterization and optimization of corner shuttling protocols Once a shuttling protocol is created that successfully transports a single ion around a corner inside an array, a number of steps can be carried out in order to optimize the original shuttling protocol depicted in Fig. 21. Indicators for the-
 quality of the protocol consist of the success rate of the protocol and estimations of the kinetic energy the ion acquires during the shuttling process based on numerical analysis. The corner shuttling protocols being discussed here can be reﬁned using numerical simulations in which the relevant voltages on the corner electrodes are systematically perturbed. In order to illustrate this process we give a detailed discussion of such reﬁnements that were carried out for the forward shuttling protoco-
l used in the Tjunction array [26].
The process of shuttling ions around the corners of the T-trap depended most sensitively on the voltages applied to the four junction control electrodes (electrodes 8, 9, 16, and 17) of the T-trap. The ﬁgure of merit to optimize in a corner shuttling protocol is the acquired kinetic energy during shuttling. In this case, the protocol was perturbed by changing the ﬁnal electrode voltages of the corner electrodes before the sudden ramp in the voltages that deﬁnes the ﬁnal trap in zone i as seen in F-
ig. 26. We deﬁne Vi,j(t) to be the time dependent voltage of the i-th electrode, where j is the target voltage for the electrode just before the

D. Hucul, M. Yeo, W.K. Hensinger, J. Rabchuk, S. Olmschenk, and C. Monroe 557
Fig. 26. Example of the perturbation of the corner shuttling protocols. A time proﬁle of the voltage on electrode 17 from the original forward shuttling protocol (dashed line) and the perturbation V17,+2(t) (solid line) to that proﬁle.
sudden ramp at t= 25 µs (see Fig. 26). The simulations were examined to determine which set of voltages produced a successful shuttling operation, and gave the smallest gain in kinetic energy to the ion.
It is also important to consider the diﬀerent ways a shuttling protocol might fail. There are three basic ways in which shuttling from zone d to zone i can fail. The ion might not make it through the rf barrier and becomes stuck in the original trapping zone. Alternatively, the ion could be ejected from the junction region because the trap becomes too weak in the z-direction. Finally, the ion could go too far toward zone f so that when the ﬁnal voltage ramp occurs, the ion is ejected in the negati-
ve x-direction. Therefore, we examined the eﬀect of the various perturbations on the control electrode voltages by simulating the shuttling process and recording the success or failure of the operation. The success was further characterized by the gain in kinetic energy, while the failure was characterized by the mode of failure observed. The results of this analysis are shown in the various stability plots in Figs. 27 - 30. Each plot show the reciprocal kinetic energy gained by the ion as a funct-
ion of the target voltage on the corner electrodes. Unsuccessful operations are arbitrarily plotted with a reciprocal kinetic energy of 0 eV−1 with the type of failure marked.
The corner shuttling stability plots show that there is a cutoﬀ voltage lower than which the ion does not move out of the stem of the T-junction, but remains stuck near zone d. By not raising the voltages on control electrodes 8 and 17 high enough (Fig. 27, 28), the control electrodes cannot provide enough of a potential gradient to push the ion through the rf barrier. Similarly, by raising the voltages on control electrodes 9 and 16 too high (Fig. 30, 29), the shuttling sequences also fail. Pertu-
rbing the voltage on control electrode 9 by a large amount compared to the other three corner electrodes will still successfully shuttle an ion around the corner from zone d to zone i. By lowering the target voltage on electrode 9 before the sudden voltage ramp, the control electrode strongly attracts the ion toward zone i. However, by making the voltage too negative, the ion is signiﬁcantly pulled away from the rf minimum making micromotion severe. Secondly, the larger negative voltage results in-
 a steeper potential gradient leading from the junction region into zone i which results in the

558 On the transport of atomic ions in linear and multidimensional ion trap arrays
Fig. 27. Stability plot for electrode 8. The plot shows the reciprocal kinetic energy gained by the ion as a function of the target voltage (as deﬁned in Fig. 26) on electrode 8. The vertical line highlights the original protocol shown in Fig. 21. All failed shuttling operations are arbitrarily plotted with 0 reciprocal kinetic energy.
Fig. 28. Stability plot for electrode 17. The plot shows the reciprocal kinetic energy gained by the ion as a function of the target voltage (as deﬁned in Fig. 26) on electrode 17. The vertical line highlights the original protocol shown in Fig. 21. All failed shuttling operations are arbitrarily plotted with 0 reciprocal kinetic energy.
Fig. 29. Stability plot for electrode 9. The plot shows the reciprocal kinetic energy gained by the ion as a function of the target voltage (as deﬁned in Fig. 26) on electrode 9. The vertical line highlights the original protocol shown in Fig. 21. All failed shuttling operations are arbitrarily plotted with 0 reciprocal kinetic energy.
ion acquiring more kinetic energy by roughly a factor of 2, as can be seen in Fig. 29. On the other hand, raising the voltage on control electrode 16 to high positive values does not yield successful shuttling (Fig. 30) as the high potential prevents the ion from overcoming the rf

D. Hucul, M. Yeo, W.K. Hensinger, J. Rabchuk, S. Olmschenk, and C. Monroe 559
Fig. 30. Stability plot for electrode 16. The plot shows the reciprocal kinetic energy gained by the ion as a function of the target voltage (as deﬁned in Fig. 26) on electrode 16. The vertical line highlights the original protocol shown in Fig. 21. All failed shuttling operations are arbitrarily plotted with 0 reciprocal kinetic energy.
barrier. In Fig. 29 and Fig. 30, there is a well deﬁned range of perturbations of electrodes 9 and 16
that successfully shuttle an ion from zone d to zone i. On the other hand, the perturbations of the voltages on control electrodes 8 and 17 do not exhibit a clear pattern. Notably, the failure of V8,1 and the success of V8,7 in Fig. 27 and the failures of V17,1 , V17,2, V17,2.5 in Fig. 28 indicate that the perturbation of the voltages on electrodes 9 and 16 (Fig. 29, 30) seems to have less of an impact on successfully shuttling an ion from zone d to zone i than perturbing the electrode voltages of-
 electrodes 8 and 17 (Fig. 27, 28). The reason for this is that once the ion has crossed the rf barrier, the conﬁnement in the x-direction abruptly decreases. Since the ion is closer to control electrodes 8 and 17 at this point in its motion, perturbations of the voltages on these electrodes may cause the ion to go toward zone f.
The working range of voltage perturbations of control electrode 8 (Fig. 27) is smaller than that of control electrode 17 (Fig. 28). This is to be expected as the target voltage of electrode 8 has two competing requirements. The electrode voltage needs to be raised high in order to provide the potential gradient to overcome the rf barrier, yet setting the voltage too high will repel the ion away from the zone i (the ion’s destination) to zone f. Hence in designing corner shuttling sequences, specia-
l attention should be paid to the voltage on the electrode(s) on the inside of the turn.
In general, one way to optimize ion shuttling in a trap array with arbitrary geometry junctions is ﬁrst to pick how the potential minimum of a trap should be moved in time according to the considerations in section 3. Next, a numerical method for calculating the classical motion of a trapped ion should be selected according to section 2.4. We found that the Bulirsch-Stoer method was the most eﬀective for our geometry. The acquired kinetic energy is then plotted as a function of the voltage perturb-
ation. Finally, the voltage sequence is optimized by choosing the protocol that minimizes the acquired kinetic energy. These plots also indicate how sensitive an ion’s acquired kinetic energy is to small voltage deviations from the ideal control sequence. Control sequences that are not overly sensitive to voltage perturbations may have a better chance of success (an ion is shuttled between two trapping zones) in the presence of any stray, background electric ﬁelds. We found that perturbing the con-
trol electrode voltages used to shuttle an ion from zone d to zone i by ∼1 volt does not

560 On the transport of atomic ions in linear and multidimensional ion trap arrays

appreciably aﬀect the success rate nor does it aﬀect the acquired kinetic energy by more than 30% in the speciﬁc example of a T-junction ion trap array.
We have shown that the use of the calculated basis functions in conjunction with numerical ODE solvers are invaluable tools for both designing and reﬁning shuttling protocols in twodimensional ion trap arrays. They help identify reasons for success and failure of shuttling protocols, and identify key points of control for shuttling operations. However, they are not yet precise enough to make exact predictions about ion behavior, or guarantee that a voltage sequence will or will not successfully sh-
uttle an ion through the trap. This gap between experiment and simulation can be closed as the technology for building traps becomes more reﬁned and trap geometries are more reliably modeled.

5.3.5 Adiabatic Corner Shuttling
As discussed in previous sections, shuttling around the corner inside the Michigan T-junction array [26] is not adiabatic. More speciﬁcally, the ion gains a signiﬁcant amount of kinetic energy during corner shuttling so it does not stay in the same motional state and most likely will not stay in the Lamb-Dicke regime. The main hurdle to shuttle an ion adiabatically through a junction region is the existence of rf barriers near the junction region.
It is always possible to overwrite any ponderomotive barrier with a static potential so that the barrier is not present in the resulting eﬀective potential. This can be done by using large enough control voltages, however, the conﬁnement of the ion in the direction perpendicular to the plane of the junction may be compromised for such control voltages. Geometric static potential eﬃciency factors that are unique for a particular electrode geometry will determine whether conﬁnement in this direction-
 can be maintained for suitable control voltages. If the width of the junction electrode is of similar size or smaller than the tip-to-tip electrode separation (200 µm for the T-junction trap, see Fig. 18), we expect to obtain suitable static potential eﬃciency factors for arbitrary symmetric three-layer geometries. A more general discussion can be found in Sec. 4.

5.4 Ion Separation and Recombination

The ﬁnal components necessary to achieve arbitrary two-dimensional control of the trapped

ion system is the ability to separate ions initially conﬁned in the same trap to two diﬀerent

zones, and to combine ions initially in two diﬀerent zones to one trapping area. Shuttling

protocols that enable the separation and recombination of ions in a linear trap array have

been experimentally demonstrated with near unit eﬃciency [18, 57]. In addition, theoretical

design considerations have been investigated [68]. Therefore, in this section we brieﬂy review

some of the essential aspects of these protocols, present the results of our experiments and

numerical simulations, and comment on possible methods for improvement.

Following the discussion by Home, et al. [68], the process of separating two ions may rely

on the creation of an octupole or “double-well” potential. Consider two ions in a potential of

the form

V

=

2eαx2

+

2eβx4

+

e2 4πǫ0(2x)

(121)

where the distance between the two ions is (2x). The ﬁrst two terms on the right-hand side are contributions of the trapping potential (VT ), while the third term is the result of the Coulomb repulsion of the ions. Initially, the ions are conﬁned in a single, nearly harmonic

D. Hucul, M. Yeo, W.K. Hensinger, J. Rabchuk, S. Olmschenk, and C. Monroe 561

Fig. 31. Control Electrode Voltage Proﬁle to Separate Ions: Time dependant voltages applied on control electrodes in order to separate two ions initially held in a single harmonic trap at zone b into two separate harmonic traps, one at a and the other at c. Asymmetries in the voltage proﬁle about x = 0 are to compensate for misalignments in the electrode layers or stray ﬁelds. A time reversal of the above voltage proﬁle allows us to combine two ions, one in trapping zone a and the other at c, into-
 a single harmonic trap at zone b.

trap, corresponding to having α >> β > 0. Here the contribution of the quartic term is negligible for the relevant range of x, and the distance between the two ions is given by the extrema points of Eq. 121, found to be

2x ≈ 21/3

e 32παǫ0

1/3

(122)

and the trap frequency of the center of mass mode is

ω=

1 ∂2VT m ∂x2

≈

2eα m

(123)

The formation of the octupole, which separates the two ions into disparate regions, requires β > 0 > α. Thus, at some point during this process, α = 0, and it is here that the trap frequency of the center of mass mode is minimized, as the only contributing portion is the quartic term. Solving for the extrema xs of Eq. 121 when α = 0 yields

2xs =

e

1/5

2βπǫ0

(124)

as the distance between the two ions, and

ωs =

1 m

∂2VT ∂x2

=
xs

3e m

e 2πǫ0

1/5
β3/10

(125)

as the corresponding trap frequency of the center of mass mode [68]. The separation protocol implemented in the Michigan T-junction ion trap is illustrated in
Fig. 31 [26]. The recombination protocol was a simple reversal of this voltage proﬁle. Two ions were initially conﬁned to a common trap at zone b. The trap is then weakened to extend over zones a, b, and c. Finally, the double-well (octupole) potential and separation of the

562 On the transport of atomic ions in linear and multidimensional ion trap arrays
ions is achieved by increasing the voltage on the electrodes that deﬁne the center of zone b (electrodes 4, 5, 24, and 25). Numerical simulations of this procedure indicate that the smallest trap frequency of the center of mass mode obtained is ∼ 27 kHz. At this point, the distance between the two ions is found to be ∼ 64 µm. Experimentally, the success rate of this separation protocol was ∼ 58 % (64 attempts) for a total shuttling time of 10 ms.
Undoubtedly, the axial extent of the electrodes (400 µm) hindered the ability to eﬃciently separate ions given the 200 µm channel width. In general, the electrode widths should be of order the channel width. Others have reported near unit eﬃciency in ion separation in traps where the minimum axial extent of the electrodes was 400 µm with a channel width of 400 µm [57]. The advent of micro-fabricated traps may allow for even ﬁner control of the trapped ions [65, 59]. However, as indicated above, se-
paration procedures appear to demand that the center of mass trap frequency be reduced for the creation of the octupole potential. Since motional heating has been shown to be inversely proportional to the trap frequency [52, 51] separation protocols may cause some additional heating as well.
5.5 Composite Protocols For Arbitrary Two Dimensional Control of Trapped Ions
Linear shuttling, corner shuttling, separation, and recombination protocols may be combined to swap the positions of two ions that are initially trapped in the same trapping zone. The ability to perform all of these shuttling protocols in an ion trap array allows any two arbitrary ions to be brought together because a string of ions can be arbitrarily sorted. An application of this protocol would be the entanglement of two arbitrary ions inside a large ion string via two-ion quantum gates.
The step-wise process for the experimental implementation of a swapping protocol in the T-junction ion trap array is depicted in Fig. 32 [26]. Two ions are initially trapped in zone d. In order to distinguish the two ions, diﬀerent isotopes are used. The two diﬀerent isotopes have diﬀerent S1/2 to P3/2 resonance frequencies, so the ions scatter a diﬀerent number of photons when a detection laser is incident. The diﬀerence in photon scattering can be seen in the ﬁrst panel of Fig. 32. The ions are -
shuttled to zone b where they are separated as described in the previous section. One ion (ion A) is shuttled to zone a while the other (ion B) is shuttled back to zone d where it is laser cooled. Ion B is then shuttled around the corner of the T-junction from zone d to zone i after which it is linearly shuttled to zone k (step 3 of Fig. 32) while ion A is shuttled from zone a to zone d where it is laser cooled. Ion A is then shuttled to zone i (where the ion is again laser cooled) after which it -
is shuttled through the junction to zone f. This three point turn is required since shuttling ions from zone d directly to zone f has not yet been accomplished (see Sec. 5.3.2). Ion A in zone f is then linearly shuttled to zone h. Ion B is shuttled back from zone k to zone i and then to zone d (step 5) where it can be laser cooled. Finally, ion A is shuttled to zone a. Ion A is then shuttled back from zone h to zone i where it can be laser cooled, and then ion A is shuttled to zone d. The two ions-
 (in zones a and d) are then recombined in zone b and shuttled together to zone d where they are laser cooled and imaged. The net eﬀect is that the ions have swapped places by executing a three point turn in the T-junction ion trap array.
This process is carried out in successive 10 ms steps and has an overall success rate of only 24% (51 attempts), but this low rate is mainly due to the the 58% success rate of the

D. Hucul, M. Yeo, W.K. Hensinger, J. Rabchuk, S. Olmschenk, and C. Monroe 563
Fig. 32. Images of two ions during the swapping protocol with schematics that indicate the ions’ positions in the trap. Two ions are initially trapped in zone d. They scatter a diﬀerent number of photons because they are diﬀerent isotopes and thus have two slightly diﬀerent S1/2 to P3/2 transition frequencies due to the isotope shift. The ions make a three point turn by sending one ion around the corner one way and the other ion around the corner in the other direction after being separated inside-
 the stem of the T. The two ions are brought back in the opposite order, eﬀectively swapping the positions of the ions. This protocol makes use of linear shuttling, corner shuttling, separation, and recombination.
initial separation attempts and the ﬁnal recombination attempts. Excluding the separation step at the beginning of the swapping protocol, the success rate of the remaining steps is 82% (34 attempts). Other than a failed separation, the main cause of a failed swapping protocol is that ions can swap places during the recombination step. Note that this protocol is carried out in successive 10 ms steps instead of as a continuous process. The reason that the swapping procedure was tested in a stepwise -
fashion was to ensure the success of each individual step of the protocol. The quoted 82% success rate may also be strongly dependent on laser cooling the ions whenever they are in zones d or i. Laser cooling serves to dissipate any additional energy and/or spread in the energy given to the ions during the shuttling procedures. Future work could characterize the success rate these protocols without implementing laser cooling during the swapping process.

564 On the transport of atomic ions in linear and multidimensional ion trap arrays
Fig. 33. Schematic of a 3-dimensional ion trap array. Alternating layers of sets of parallel linear conductors run perpendicular to each other. One set of linear electrode layers (say, the lighter shaded electrodes running left-to-right) are meant to carry rf potentials, while the other (darker) electrode layers are meant to carry static potentials. Ions can be transported between any lattice point in between the grid of electrodes, in all three dimensions. Such a trap has been demonstrated with m-
acroscopic charged dust particles, with 3-dimensional shuttling through a single layer and between layers.
6 Ion Transport in Three Dimensions In principle, trapped atomic ions can be transported in three dimensions, given a suitable trap geometry. The main advantage here is that space is used more eﬃciently, and for very large numbers of ions, using the third dimension would relax many constraints on the physical size of the collection of trapped ions. However, there are several practical issues concerning 3-dimensional trap channels. First, it may be diﬃcult to gain optical access to submerged layers-
 of trapping zones. Second, a 3-dimensional junction appears to have considerably more complexity than the 2-dimensional junctions considered earlier. Finally, the fabrication and electrical hookups in such a design may be particular challenging, especially if electrodes are completely submerged within the trap array. In this section, we nevertheless highlight a simple geometry amenable to 3-dimensional shuttling for completeness.
One example of a 3-dimensional array of ion trap zones is shown in Fig 33. Each layer is composed of a set of parallel line-conductors as electrodes, with alternating layers running in perpendicular directions. For the simplest case of three layers, the middle layer all carry equal rf potentials, and the outer layers carry static potentials. For more layers, this pattern is simply repeated. In this geometry, ions would be conﬁned in the spaces between rf rails,

D. Hucul, M. Yeo, W.K. Hensinger, J. Rabchuk, S. Olmschenk, and C. Monroe 565
as indicated in the ﬁgure. In addition to linear shuttling in a single layer, the ions can be transported through the gaps in between the static electrodes, and shuttled in 3-dimensions. Three-dimensional shuttling of macroscopic charged dust particles in such a trap was demonstrated at the University of Michigan [69].
7 Conclusion
We have discussed a wide range of issues that arise when considering the transport of atomic ions in linear and multi-dimensional ion trap arrays. We consider methods for calculating the dynamics of single atomic ions in the complex eﬀective potentials arising from the shuttling process, and justify the use of classical trajectory treatments. We introduce the method of basis functions to eﬃciently account for the contribution from each of the trap electrodes to the electrostatic and ponderomotive -
potentials experienced by an ion being shuttled in such an array. We then show how these derived potentials can be used to obtain numerical simulations of the classical motion of a shuttled ion, using numerical methods such as the Bulirsch-Stoer method. Next, we provide a general theoretical framework for the shuttling process. This includes analytical expressions for the energy gain of the shuttled ions, accounting for both the inertial forcing of the ion due to changes in acceleration of the shu-
ttling potential, and parametric forcing resulting from changes in the frequency of the shuttling potential. In order to minimize the added kinetic energy imparted to the shuttled ion, these considerations lead us to shuttling protocols that keep the shuttling potential at a ﬁxed frequency and transport the ion following smooth trajectories such as a hyperbolic tangent path in time.
We pay particular attention to the implementation of junctions in both symmetric and asymmetric electrode geometries. When shuttling ions in two or more dimensions, an important issue we identiﬁed is the transport of ions through junction regions. The existence of rf holes, humps and energy barriers results in the need for sophisticated shuttling protocols. In order to reliably guide the ion through junctions, we ﬁnd that the control electrodes near to the junction should be smaller than the chara-
cteristic channel width. This makes it possible to override the rf potential energy barriers in the junction region, allowing for the use of near-constant frequency shuttling potentials throughout the shuttling protocol.
We use experimental results on the Michigan T-junction trap [26] array and theoretical analysis of the process by which ions were shuttled through this T-junction in order to illustrate general principles in designing advanced shuttling protocols. All complicated shuttling processes are typically created from elementary sequences such as linear shuttling, corner turning, separation and recombination. We discuss the implementation of all of these processes in the particular case of this three-layer-
 T-junction ion trap array and describe the implementation of a speciﬁc composite protocol, the three-point turn, along with a theoretical analysis.
The experiments in the T-junction trap array resulted in large amounts of kinetic energy following shuttling. Future work should allow shuttling in the strict adiabatic limit, where the quantum state of motion does not change appreciably after shuttling. This would involve either a more appropriate design of the ion trap electrodes to better control the ion through the junction, or the use of sympathetic cooling or phase sensitive switching of the trapping voltages. At the same time, we note that -
adiabaticity (or even conﬁnement to the Lamb-Dicke limit) is not strictly necessary in certain quantum logic gate methods.

566 On the transport of atomic ions in linear and multidimensional ion trap arrays
Shuttling ions in large scale arrays may form an important backbone for the implementation of an large-scale ion trap quantum processor. Progress in this ﬁeld is lively, with several groups now working with various ion trap array geometries. In the future, the manipulation of hundreds or thousands of ions in large ion trap arrays will pose many more challenges such as appropriate device engineering, control electronics, motional control issues and ways to provide adiabatic but fast shuttling seque-
nces. Mastering these challenges will require significant time and resources, but it is encouraging that none of the challenges seem to be of a fundamental nature.
Acknowledgments
We acknowledge useful discussions with M. Acton, J. Burress, M. Madsen, E.J. Otto, R. Slusher, D. Stick, J. Sterk, and D. Wineland. This work is supported by the National Security Agency and the Disruptive Technology Oﬃce under Army Research Oﬃce contract W911NF-04-1-0234, the National Science Foundation Information Technology Research (ITR) and Physics at the Information Frontier (PIF) Programs, and the UK Engineering and Physical Sciences Research Council (EP/E011136/1).
References
1. J.I. Cirac, and P. Zoller (1995), Quantum computation with cold, trapped ions, Phys. Rev. Lett., 74 (20), pp. 4091.
2. K. Mølmer and A. Sørensen (1999), Multiparticle entanglement of hot trapped ions, Phys. Rev. Lett., 82, pp. 1835.
3. D.J. Wineland, C. Monroe, W.M. Itano, D. Leibfried, B.E. King, and D.M. Meekhof (1998), Experimental issues in coherent quantum-state manipulation of trapped atomic ions, J. Res. NIST, 103, pp. 259-328.
4. Q. A. Turchette, C. S. Wood, B. E. King, C. J. Myatt, D. Leibfried, W. M. Itano, C. Monroe, and D. J. Wineland (1998), Deterministic Entanglement of Two Trapped Ions, Phys. Rev. Lett., 81, pp. 3631–34.
5. C. A. Sackett, D. Kielpinski, B. E. King, C. Langer, V. Meyer, C. J. Myatt, M. A. Rowe, Q. A. Turchette, W. M. Itano, D. J. Wineland and C. Monroe (2000), Experimental entanglement of four particles, Nature, 404, pp. 256.
6. C. F. Roos, M. Riebe, H. H¨aﬀner, W. H¨ansel, J. Benhelm, G. P. T. Lancaster, C. Becher, F. Schmidt-Kaler, and R. Blatt (2004), Control and Measurment of Three-Qubit Entangled States, Science, 304, pp. 1478.
7. B. B. Blinov, D. L. Moehring, L.- M. Duan, and C. Monroe (2004), Observation of entanglement between a single trapped atom and a single photon, Nature, 428, pp. 153–157.
8. H. H¨aﬀner, F. Schmidt-Kaler, W. H¨ansel, C.F. Roos, T. K¨orber, M. Chwalla, M. Riebe, J. Benhelm, U. D. Rapol, C. Becher, and R. Blatt (2005), Robust Entanglement, Appl. Phys. B, 81, pp. 151.
9. H. H¨aﬀner, W. H¨ansel, C. F. Roos, J. Benhelm, D. Chek-al-kar, M. Chwalla, T. K¨orber, U. D. Rapol, M. Riebe, P. O. Schmidt, C. Becher, O. Gu¨hne, W. Du¨r and R. Blatt (2005), Scalable multiparticle entanglement of trapped ions, Nature, 438, pp. 643.
10. D. Leibfried, E. Knill, S. Seidelin, J. Britton, R. B. Blakestad, J. Chiaverini, D. B. Hume, W. M. Itano, J. D. Jost, C. Langer, R. Ozeri, R. Reichle, and D. J. Wineland (2005), Creation of a six-atom ‘Schrodinger cat’ state, Nature, 438, pp. 639.
11. J. P. Home, M. J. McDonnell, D. M. Lucas, G. Imreh, B. C. Keitch, D. J. Szwer, N. R. Thomas, S. C. Webster, D. N. Stacey and A. M. Steane (2006), Deterministic entanglement and tomography of ion spin qubits, quant-ph/0603273.

D. Hucul, M. Yeo, W.K. Hensinger, J. Rabchuk, S. Olmschenk, and C. Monroe 567
12. C. Monroe, D. M. Meekhof, B. E. King, W. M. Itano, and D. J. Wineland (1995). Demonstration of a fundamental quantum logic gate, Phys. Rev. Lett., 75 (25), pp. 4714-17.
13. C. Monroe, D. Meekhof, B. E. King, and D. J. Wineland (1996), A Schr¨odinger Cat Superposition State of an Atom, Science 272, 1131.
14. B.L. DeMarco, A. Ben Kish, D. Leibfried, V. Meyer, M.A. Rowe, B.M. Jelenkovic, W.M. Itano, J. Britton, C. Langer, T. Rosenband, and D.J. Wineland (2002), Experimental Demonstration of a Controlled-NOT Wave-Packet Gate, Phys. Rev. Lett., 89, 267901.
15. D. Leibfried, B. DeMarco, V. Meyer, D. Lucas, M. Barrett, J. Britton, W. M. Itano, B. Jelenkovic, C. Langer, T. Rosenband, D. J. Wineland (2003), Experimental demonstration of a robust, highﬁdelity geometric two ion-qubit phase gate, Nature, 422, pp. 412-415.
16. F. Schmidt-Kaler, H. H¨aﬀner, M. Riebe, S. Gulde, G.P.T. Lancaster, T. Deuschle, C. Becher, C. F. Roos, J. Eschner and R. Blatt (2003), Realization of the Cirac-Zoller controlled-NOT quantum gate, Nature, 422, pp. 408–411.
17. P.C. Haljan, P.J. Lee, K.-A. Brickman, M. Acton, L. Deslauriers, and C. Monroe (2005), Entanglement of Trapped-Ion Clock States, Phys. Rev. A, 72, 062316.
18. M.D. Barrett, J. Chiaverini, T. Schaetz, J. Britton, W. M. Itano, J. D. Jost, E. Knill, C. Langer, D. Leibfried, R. Ozeri, and D. J. Wineland (2004), Deterministic quantum teleportation of atomic qubits, Nature, 429, pp. 737–739.
19. M. Riebe, H. H¨aﬀner, C.F. Roos, W. H¨ansel, J. Benhelm, G.P.T. Lancaster, T. W. K¨orber, C. Becher, F. Schmidt-Kaler, D. F. V. James and R. Blatt (2004), Deterministic quantum teleportation with atoms, Nature, 429, pp. 734–737.
20. S. Gulde, M. Riebe, G.P.T. Lancaster, C. Becher, J. Eschner, H. H¨aﬀner, F. Schmidt-Kaler, I.L. Chuang, and R. Blatt (2003), Implementing the Deutsch-Jozsa algorithm on an ion-trap quantum computer, Nature, 428, pp. 48–51.
21. J. Chiaverini, D. Leibfried, T. Schaetz, M. D. Barrett, R. B. Blakestad, J. Britton, W.M. Itano, J.D. Jost, E. Knill, C. Langer, R. Ozeri, and D.J. Wineland (2004), Realization of Quantum Error Correction, Nature, 432, pp. 602, 2004.
22. K.-A. Brickman, P. C. Haljan, P. J. Lee, M. Acton, L. Deslauriers and C. Monroe (2005), Implementation of Grover’s quantum search algorithm in a scalable system, Phys. Rev. A., 72, 050306.
23. J. Chiaverini, J. Britton, D. Leibfried, E. Krill, M. D. Barrett, R. B. Blakestad, W. M. Itano, J. D. Jost, C. Langer, R. Ozeri, T. Schaetz, and D. J. Wineland (2005), Implementation of the semiclassical quantum Fourier transform in a scalable system, Science, 308 (5724), pp. 997–1000.
24. R. Reichle, D. Leibfried, E. Knill, J. Britton, R.B. Blakestad, J. Jost, C. Langer, R. Ozeri, S. Seidelin, and D.J. Wineland (2006), Experimental puriﬁcation of two-atom entanglement, Nature, 443, pp. 838–841.
25. D. Kielpinski, C. Monroe, and D. J. Wineland (2002), Architecture for a large-scale ion-trap quantum computer, Nature, 417, pp. 709.
26. W.K. Hensinger, S. Olmschenk, D. Stick, D. Hucul, M. Yeo, M. Acton, L. Deslauriers, J Rabchuk, and C. Monroe (2006), T-junction ion trap array for two-dimensional ion shuttling, storage, and manipulation, App. Phys. Lett., 88, 034101.
27. G.P. Berman and G.M. Zaslavsky (1978), Condition of stochasticity in quantum nonlinear systems, Physica (Amsterdam), 91A: pp. 450.
28. Z.P. Karkuszewski, J. Zakrzewski, and W.H. Zurek (2002), Breakdown of correspondence in chaotic systems: Ehrenfest versus localization times, Phys. Rev. A., 65, 042113.
29. D.J. Larson, J.C. Berquist, J.J. Bollinger, W.M. Itano, and D.J. Wineland (1986), Sympathetic cooling of trapped ions: A laser-cooled two species nonneutral ion plasma, Phys. Rev. Lett., 57, pp. 70–73.
30. H. Imajo, K. Hayasaka, R. Ohmukai, U. Tanaka, M. Watanabe, and S. Urabe (1996), Highresolution ultraviolet spectra of sympathetically-laser-cooled Cd+ ions, Phys. Rev. A., 53, pp. 122– 125.
31. H. Rohde, S.T. Gulde, C.F. Roos, P.A. Barton, D. Leibfried, J. Eschner, F. Schmidt-Kaler, and R. Blatt (2001), Sympathetic ground-state cooling and coherent manipulation with two-ion crystals,

568 On the transport of atomic ions in linear and multidimensional ion trap arrays
J. Opt. B: Semiclassic. Opt., 3, pp. S34–S41. 32. B.B. Blinov, L. Deslauriers, P. Lee, M.J. Madsen, R. Miller, and C. Monroe (2002), Sympathetic
cooling of trapped Cd+ isotopes, Phys. Rev. A, 65, 040304. M. Barrett, 33. B.L. DeMarco, T. Schaetz, V. Meyer, D. Leibfried, J. Britton, J. Chiaverini, W.M. Itano, B.M.
Jelenkovic, J.D. Jost, C. Langer, T. Rosenband, and D.J. Wineland (20030, Sympathetic cooling of 9Be+ and 24Mg+ for quantum logic, Phys. Rev. A 68, 042302. 34. J.D. Jackson (1999), Classical Electrodynamics, 3rd ed., John Wiley & Sons (Hoboken, NJ), pp. 39. 35. H.H. Dehmelt (1967), Radio frequency spectroscopy of stored ion, Adv. At. Mol. Phys., 3, pp. 53. 36. G. Strang and G.J. Fix (1973), An Analysis of the Finite Element Method, Prentice-Hall, Inc. (Englewood Cliﬀs, N.J.), pp. 165–166. 37. R. B-
ulirsch, and J. Stoer (1966), Numerical treatment of ordinary diﬀerential equations by extrapolation methods, Numerische Mathematik, 8 (1), pp. 1–13. 38. W.H. Press, B. P. Flannery, S.A. Teukolsky and W. T. Vetterling (1992), Numerical Recipes in FORTRAN: The Art of Scientiﬁc Computing, 2nd ed., Cambridge University Press (Cambridge, England), ch. 16. 39. J. Leader (2004), Numerical Analysis and Scientiﬁc Computation. Addison Wesley (Boston, Massachussetts), ch. 6. 40. L.F. Shampine and C.W. Gear -
(1979), A Users view of Solving Stiﬀ Ordinary Diﬀerential Equations, SIAM Review, 21, pp. 1–17. 41. S. Wolfram (1999), The Mathematica Book, 4th ed., Wolfram Media & Cambridge University Press (Champaign, Illinois; Cambridge, UK), pp. 1069, 1231. 42. R. Reichle, D. Leibfried, R.B. Blakestad, J. Britton, J. D. Jost, E. Knill, C. Langer, R. Ozeri, S. Sedelin, and D.J. Wineland (2006), Transport of single ions in segmented microstructured Paul trap arrays, Fortschritte der Physik, 54 (8–10), pp. 666.-
 43. S. Schulz, U. Poschinger, K. Singer, F. Schmidt-Kaler (2006), Optimzation of segmented linear Paul traps and transport of stored particles, Fortschritte der Physik, 54 (8-10), pp. 648–665. 44. K. Husimi (1953), Miscellanea in elementary quantum mechanics, II. Progr. Theor. Phys., 9, pp. 381–402. 45. E. H. Kerner (1958), Note on the forced and damped oscillator in quantum mechanics, Can. J. Phys., 36, pp. 371–377. 46. J.J. Sakurai (1994), Modern Quantum Mechanics, Rev. ed., Wiley (New York, Ne-
w York), pp. 162–164. 47. M. Boas (2006), Mathematical Methods in the Physical Sciences, 3rd ed., Wiley (New York, New York), pp. 461–462. 48. A.M. Perelomov and V.S. Popov (1965), Method of generating functions for a quantum harmonic oscillator, Am. J. Phys., 33, pp. 537-544. 49. M. Abramowitz and I. Stegun (1964), Handbook of Mathematical Functions, Dover Publications (New York, NY), pp. 255, 559. 50. M. Abramowitz and I. Stegun (1964), Handbook of Mathematical Functions, Dover Publications (New-
 York, NY), pp. 728–730. 51. Q.A. Turchette, D. Kielpinski, B.E. King, D. Leibfried, D.M. Meekhof, C.J. Myatt, M.A. Rowe, C.A. Sackett, C.S. Wood, W.M. Itano, C. Monroe, and D.J. Wineland (2000), Heating of trapped ions from the quantum ground state, Phys. Rev. A, 61, 063481. 52. L. Deslauriers, S. Olmschenk, W.K. Hensinger, J. Sterk, and C. Monroe (2006), Scaling and Suppression of Anamalous Heating in Ion Traps, Phys. Rev. Lett., 97, 103007. 53. D. L. Moehring, M. J. Madsen, K. C. Younge, R. N. -
Kohn, Jr., P. Maunz, L.-M. Duan, C. Monroe, and B. Blinov (2007), Quantum Networking with Photons and Trapped Atoms, J. Opt. Soc. Am. B 24, 300. 54. J. J. Garcia-Ripoll, P. Zoller, and J. I. Cirac (2003), Fast and robust two-qubit gates for scalable ion trap quantum computing, Phys. Rev. Lett. 91, 157901. 55. P. W. Shor (1995), Scheme for reducing decoherence in quantum computer memory, Phys. Rev. A,

D. Hucul, M. Yeo, W.K. Hensinger, J. Rabchuk, S. Olmschenk, and C. Monroe 569
52, R2493; A. M. Steane (1996), Error Correcting Codes in Quantum Theory, Phys. Rev. Lett., 77, pp. 793. 56. A. M. Steane (2003), Overhead and noise threshold of fault-tolerant quantum error correction, Phys. Rev. A, 68, 042322. 57. M. A. Rowe, A. Ben-Kish, B. DeMarco, D. Leibfried, V. Meyer, J. Beall, J. Britton, J. Hughes, W. M. Itano, B. Jelenkovic, C. Langer, T. Rosenband, and D. J. Wineland (2002), Transport of quantum states and separation of ions in a dual RF ion trap, Quantum Inf. and Comp-
ut., 2, pp. 257-271. 58. W. H¨ansel, J. Reichel, P. Hommelhoﬀ, and T.W. H¨ansch (2001),Trapped-Atom Interferometer in a Magnetic Microtrap, Phys. Rev. A, 64, 063607(6). 59. D. Stick, W.K. Hensinger, S. Olmschenk, M.J. Madsen, K. Schwab, and C. Monroe (2006), Ion trap in a semiconductor chip, Nature Physics, 2, pp. 36. 60. M. Brownnutt, G. Wilpers, P. Gill, R.C. Thompson, and A.G. Sinclair (2006). Monolithic microfabricated ion trap chip design for scaleable quantum processors, New J. Phys, 8, 232.-
 61. M.J. Madsen, W.K. Hensinger, D. Stick, J.A. Rabchuk, and C. Monroe (2004), Planar ion trap geometry for microfabrication, Appl. Phys. B, 78, pp. 639. 62. L. Deslauriers, P. C. Haljan, P. J. Lee, K.-A. Brickman, B. B. Blinov, M. J. Madsen, and C. Monroe (2004), Zero-Point Cooling and Low Heating of Trapped Cd Ions, Phys. Rev. A, 70, 043408. 63. J. Chiaverini, R. B. Blakestad, J. Britton, J.D. Jost, C. Langer, D. Leibfried, R. Ozeri, and D. J. Wineland (2002), Surface-electrode architecture for-
 ion-trap quantum information processing, Quantum Inf. and Comput., 2, pp. 257–271. 64. J. Kim, S. Pau, Z. Ma, H.R. McLellan, J.V. Gates, A. Kornblit, R.M. Jopson, I. Kang, M. Dinu, and R.E. Slusher (2005), System design for large-scale ion trap quantum information processor, Quantum Inf. and Comput., 5 (7), pp. 515–537. 65. J. Britton, D. Leibfried, J. Beall, R.B. Blakestad, J.J. Bollinger, J. Chiaverini, R.J. Epstein, J.D. Jost, D. Kielpinski, C. Langer, R. Ozeri, R. Reichle, S. Seidelin, N. Shi-
ga, J.H. Wesenberg, and D.J. Wineland (2006), A microfabricated surface-electrode ion trap in silicon, quant-ph/0605170. 66. S. Seidelin, J. Chiaverini, R. Reichle, J.J. Bollinger, D. Leibfried, J. Britton, J. Wesenberg, R.B. Blakestad, R. J. Epstein, D. Hume, W. M. Itano, J. D. Jost, C. Langer, R. Ozeri, N. Shiga, and D.J. Wineland (2006), Microfabricated Surface-Electrode Ion Trap for Scalable Quantum Information Processing, Phys. Rev. Lett., 96, 253003. 67. R. E. Slusher (2006), 2006 TIQC Works-
hop, Boulder, CO (http://tf.nist.gov/ion/workshop2006/slusher1.pdf ) 68. J.P. Home and A.M. Steane (2006), Electrode conﬁgurations for fast separation of trapped ions, Quantum Inf. and Comput., 6 (4 & 5), pp. 289–325. 69. E.J. Otto, University of Michigan, private communication. 70. W.B. Gragg (1965), On extrapolation algorithms for ordinary initial value problems, SIAM J. Numer. Anal., 2 (3), pp. 384–403. 71. W.H. Press, B. P. Flannery, S.A. Teukolsky and W. T. Vetterling (1992), Numerical Recipe-
s in FORTRAN: The Art of Scientiﬁc Computing, 2nd ed., Cambridge University Press (Cambridge, England), pp. 108–109.
Appendix
The purpose of this appendix is to illustrate the workings of numerical solver methods that may be useful in numerically solving Newton’s equations of motion in multizone ion trap arrays. Of particular importance is the Bulirsch-Stoer method which was used to develop the appropriate control electrode voltage proﬁles to guide ions around the corner of a T-junction ion trap [26].

570 On the transport of atomic ions in linear and multidimensional ion trap arrays

Appendix A Explicit Runge-Kutta Methods

In general, numerical diﬀerential equation solvers try to solve ﬁrst-order ordinary diﬀerential

equations of the type

dx dt

=

f (x, t),

(A.1)

There are many diﬀerent classes of ODE solvers with their own merits. As a point of compar-

ison, we introduce the familiar class of Explicit Runge-Kutta (ERK) methods. ERK methods

are useful when only a low accuracy solution is required. In addition, if the potential gradient

is rough or only roughly known so that the right hand side of Eq. A.1 is not smooth, ERK

Methods are usually more eﬃcient [38]. In general, a Runge-Kutta method is of the form

xn+1 = xn + hΛ(f, h, xn)

(A.2)

where Λ is a function of xn, the step size h and the right hand side of equation A.1. The simplest version of an ERK method is Euler’s method. Euler’s method is given by

xn+1 = xn + hf (tn, xn)

(A.3)

The interpretation of this method is simple; assuming the step size h is small enough, the

average rate of change of x over the time interval (tn, tn+1 = tn + h) is nearly equal to

the rate of change at the start of the interval

dx(tn) dt

.

To characterize the local error of the

Euler method, ﬁrst consider the Taylor Expansion of x about t = tn where αi are the Taylor

coeﬃcients.

x(tn+1 = tn + h) = x(tn) + α1h + α2h2 + ...

(A.4)

If xn is the exact solution to the diﬀerential equation then the numerical estimation xn+1, of

x(tn + h) is given by

xn+1

=

xn

+

h

dx dt

=

x(tn)

+

α1h

(A.5)

The error that we get from a single step is

ǫ = x(tn + h) − xn+1 = α2h2 + α3h3 + ...

(A.6)

This is the local error as deﬁned in section 2.4. Euler’s method is accurate to ﬁrst order

because the lowest order contribution to the error is proportional to h2.

A possible reﬁnement to Euler’s method is to use the value of the derivative at the middle

of the time calculate x(

interval at t =

tn +tn+1 2

),

hence

tn +tn+1
2
we use

.

However,

to

calculate

f

at

t

=

, tn +tn+1
2

it

Equation A.3 to take a trial step to estimate

is necessary to

x(t

=

tn

+tn+1 2

).

x( tn

+ tn+1 2

)

=

xn

+

h 2

f

(tn,

xn)

=

z1

(A.7)

We then use this intermediate point to calculate the rate of change and thus estimate the

next node.

xn+1 = xn + hf (tn + h/2, z1)

(A.8)

Note that z1 is the result of an intermediate calculation that can be discarded once xn+1 is obtained. By using the Taylor expansion of x, the leading term of the local error is

D. Hucul, M. Yeo, W.K. Hensinger, J. Rabchuk, S. Olmschenk, and C. Monroe 571

proportional to h3 [38]. Therefore, this method is accurate to second order and is called the Second Order Runge-Kutta Method (RK2) or the Midpoint Method.
A general prescription to derive higher order Runge-Kutta methods is found in the literature [39]. One commonly used method is the Fourth Order Runge-Kutta Method (RK4). This method incorporates four intermediate steps in the process of obtaining the value of xi+1 :

xi+1

=

xn

+

h 3

(

g1 2

+

g2

+

g3

+

g4 2

)

g1 = f (tn, xn)

g2

=

f (tn

+

h 2

,

xn

+

g1 2

)

g3

=

f (tn

+

h 2

,

xn

+

g2 2

)

g4 = f (tn + h, xn + g3)

(A.9) (A.10) (A.11)
(A.12) (A.13)

This method is 4th order accurate because the leading term in the error is proportional to h5 [39]. In each step, RK4 does four evaluations of the function f and is accurate to 4th order. By comparison, the Euler method does 1 evaluation of f per step and is accurate to 1st order, and RK2 does 2 evaluations of f and is accurate to 2nd order. ERK methods with order greater than 4 are therefore considered computationally ineﬃcient because the number of evaluations of f (x, t) is greater than the lea-
ding term in the error. RK4 has a good tradeoﬀ in terms of accuracy and the computational eﬃciency since it is the highest order ERK method in which the accuracy order is the same as the number of evaluations of f per step [39], and therefore has become the standard method for the numerical evaluation of ODEs.
Newton’s equations of motion for trapped ions are a set of second order ODEs, so in order for us to use the ERK method (or other ODE numerical solvers), the equations need to be reformulated into a system of 2k ﬁrst order ODEs where k is the number of ions in the system.

dxj dt

=

vj

dvj dt

=

a(x1, ..., xk, t)

(A.14) (A.15)

To simplify the notation, we deﬁne the following 3k-dimensional vectors where X denotes the positions of the k ions, V denotes the velocities of the k ions, and A denotes the accelerations of the k ions.

 x1(t) 

X(t) =  

...

; 

xk (t)

 v1(t) 

V(t) =  

...

; 

vk (t)

 a1(x, t) 

A(x, t) =  

...

. 

ak(x, t)

(A.16)

The equations to calculate the next node are similar to Eq. A.9 with the exception that the scalar quantities are replaced by vector quantities.

Vn+1 Xn+1

=

Vn Xn

+

h 3

1 2

g1 f1

+

g2 f2

+

g3 f3

+

1 2

g4 f4

, (A.17)

572 On the transport of atomic ions in linear and multidimensional ion trap arrays

where

g1 f1

=

A(Xn, tn) Vn

,

g2 f2

=

A(Xn + Vn

12+hfh21g, t1n

+

h 2

)

,

g3 f3

=

A(Xn

+

1 2

hf2

,

tn

+

h 2

)

Vn

+

h 2

g2

,

g4 f4

=

A(Xn + hf3, tn + h) Vn + hg3

.

An adaptive step size algorithm is almost always used in conjunction with the Runge-Kutta Method [39]. Therefore, it is necessary to estimate the local error in making each time-step. The error of the nodal value Vn+1, Xn+1 is estimated after each step h via the method of RK pairs [39] which determines the diﬀerence between 4th and 5th order RK method results for Vn and Xn. If the diﬀerence is within a pre-deﬁned error goal, then the solver moves on to calculate the next node. Otherwise, the step -
size is reduced and the algorithm repeated until the error goal is met. In addition, more complicated versions of the Explicit Runge-Kutta solver also adaptively alter the order of the Runge-Kutta solver method. For example, one step may use the RK pair RK4 and RK5, while the next step may use RK2 and RK3.

Appendix B Bulirsch-Stoer Method
The Bulirsch-Stoer method is an ODE solver that yields high accuracy solutions eﬃciently [37]. However, if a low accuracy solution is desired or if the simulated forces on the particle are rough or discontinuous, this method is not as eﬀective as the ERK [38]. The Bulirsch-Stoer method proved to be the most eﬃcient and accurate ODE solver method for our purposes (see Section 2.4) and therefore, this method was our workhorse solver.
The Bulirsch-Stoer method seeks to obtain an accurate approximation of the nodal point xi+1 from xi by ﬁrst evaluating the derivatives of the solution at n points evenly spaced throughout the time-step of size H, using the so-called Modiﬁed Midpoint method. The Bulirsch-Stoer method diﬀers from the ERK class of methods in that this process is repeated for two or more diﬀerent values of n, and therefore for several diﬀerent sub-step sizes, h = H/n. As a result, several estimations χi+1(h = H/n) are-
 made for the nodal point (xi+1, ti + H), each one characterized by the sub-step size, H/n. It is obvious that the smaller the sub-step size, the more accurate the approximation for the nodal point will be, with a limiting and presumably exact value, χi+1(0), obtained when the number of sub-steps goes to inﬁnity. This limiting value would be prohibitively time-consuming and expensive to reach directly. However, by treating the various χi+1(h) as points on a polynomial function plotted versus h2 = -
H2/n2, it is possible to make a very accurate estimation of the value χi+1(0) by determining the y-intercept of this polynomial. This is done through the use of Richardson Extrapolation [37]. The Modiﬁed Midpoint method is well-suited for this approach because its local error is expressible as a power series in h2 rather than h, meaning that χi+1(h) can be thought of as a function of h2. Therefore, a reduction in sub-step size of 1/2 will result in obtaining a point in the polynomial four times cl-
oser to the y-intercept, making the estimate of χi+1(0) obtained by the Richardson Extrapolation far more accurate. Not only so, but the fact that χi+1(h) is an even function of the sub-step size h means that this method is

D. Hucul, M. Yeo, W.K. Hensinger, J. Rabchuk, S. Olmschenk, and C. Monroe 573

inherently time-reversible. This guarantees that the solutions obtained in this way satisfy an important constraint on solutions of Newton’s equations.
The Modiﬁed Midpoint method generates the initial crude estimates of the nodal point χi+1(h) that will be used for the Richardson extrapolation in order to calculate x(ti + H). The Modiﬁed Midpoint method advances across the time interval (ti, ti+1) in a series of n uniform sub-steps of size h = H/n. The equations for this method are

z0 = xi

z1 = z0 + hf (ti, z0)

zm+1 = zm−1 + 2hf (ti + mh, zm)

χi+1(h)

=

1 2

[zn

+

zn−1

+

hf

(ti

+

H,

zn)]

(B.1)

Every sub-step of the Modiﬁed Midpoint method calculates a value zm. These values are intermediate calculations and will be discarded after ﬁnding the value of xi+1. The Modiﬁed Midpoint method outlined above is similar to the Midpoint method given in Eq. A.8, because

in order to advance from the point (ti + mh, zm) to the point (ti + (m + 2)h, zm+2), we use

information from the derivative at the middle of the time interval, i.e. f (ti+(m+1)h, zm+1), to

calculate the next point. However, the Modiﬁed Midpoint method is faster than the Midpoint

method. If we had used the Midpoint method as our base ODE solver with the same sub-step

size h, we would need to do

2H h

= 2n evaluations of f .

In contrast, the Modiﬁed Midpoint

method

only

does

H h

+1 = n+1

such

evaluations.

As

evaluations

of

f

are

computationally

expensive, the Modiﬁed Midpoint method is more eﬃcient. The Modiﬁed Midpoint method

has an additional advantage as the error contains only even powers of the step size h [70], i.e.

∞
χi+1(h) − x(ti + H) = cj (h)2j ,
j=1

(B.2)

where the term

∞ j=1

cj

H n

2j is the error, and x(ti + H) is the exact solution.

A signiﬁcant improvement in accuracy can be obtained by employing the Modiﬁed Mid-

point method several times over the Bulirsch-Stoer time step, H, each time with a diﬀerent

sub-step size, and then using each of those values to estimate the result were it to be run

with an inﬁnitesimally small sub-step size, h → 0. For example, suppose that we have run

the method j times and as such have obtained j points as follows

{(h21, χ(h1)), (h22, χ(h2)), ..., (h2j , χ(hj))}

(B.3)

There is a unique polynomial of order j − 1 that passes through each of the j points. For example, with two points, there is a unique linear polynomial, for three points, there is a unique quadratic, etc. This polynomial is given by Lagrange’s Formula

P (h2)

=

(h2 (h21

− −

h22)(h2 h22)(h21

− −

h23)...(h2 h23)...(h21

− −

h2j ) h2j )

χ(h1)

+

(h2 (h22

− −

h21)(h2 h21)(h22

− −

h23)...(h2 h23)...(h22

− −

h2j h2j

) )

χ(h2

)

+

...

+

(h2 (h2j

− −

h21)(h2 h21)(h2j

− −

h22)...(h2 h23)...(h2j

− −

h2j −1 ) h2j −1 )

χ(hj

)

(B.4)

574 On the transport of atomic ions in linear and multidimensional ion trap arrays

In order to complete the Richardson extrapolation, we need only read oﬀ the value P (0) from
this formula to obtain the next node. We note that equation B.4 is a well-deﬁned polynomial in h2 due to equation B.2. The advantage in doing so is that it gives more weight to the
points with smaller h in determining the value of P (0) and greatly improves the accuracy of
that calculation.
However, Eq. B.4 has two disadvantages. First, it provides information about the entire polynomial whereas we are only interested in the value of the polynomial at h2 = 0. Secondly,
Eq. B.4 provides no error estimate [71]. Therefore, Neville’s Algorithm [71] is used instead of Lagrange’s formula in the Bulirsch-Stoer algorithm to extrapolate the value of χi+1 at h2 = 0. Given our set of j points, Neville’s Algorithm ﬁnds the value of P (0) directly from the points
obtained through the use of the Modiﬁed Midpoint Method, making Neville’s algorithm faster.
In addition, Neville’s algorithm also provides a simple estimate of the error in the resulting
value.
To illustrate Neville’s algorithm, we will ﬁt the following three points to a second order polynomial and ﬁnd the value of that polynomial at h2 = 0. The three points are (0.02250, 1.34838), (5.625 × 10−3, 1.34948), (2.500 × 10−3, 1.34969). We begin by deﬁning P(1) to be the value at h2 = 0 of the unique zeroth-order polynomial (horizontal line) pass-
ing through the ﬁrst point P(1) = 1.34838. P(2) and P(3) are deﬁned similarly, so that P(2) = 1.34948 and P(3) = 1.34969. Next we deﬁne P(1)(2) to be the value at h2 = 0 of the unique ﬁrst-order polynomial that passes through the ﬁrst two points. This value can be
obtained from P(1) and P(2) using the following iterative equation:

P(i)(i+1)...(i+m)

=

−h2i+mPi(i+1)...(i+m−1) + h2i h2i − h2i+m

P(i+1)(i+2)...(i+m)

.

(B.5)

From Eq. B.5 we can also derive the value of P(2)(3), the value at h2 = 0 of the ﬁrst order polynomial that passes through the second and third points. Our ﬁnal value, P(1)(2)(3), is the value at h2 = 0 of the unique second-order polynomial that passes through all three points.
Again, P(1)(2)(3) can be derived from P(1)(2) and P(2)(3) via equation B.5. An error estimate comes from the diﬀerence between the highest order estimate of P (0) and the next highest
order estimate of P (0). For example, the error estimate of P(1)(2)(3) is given by

ǫ

=

max{|P(1)(2)(3) − P(1)(2)|, |P(1)(2)(3) |P(1)(2)(3)|

− P(2)(3)|}

=

6.4 × 10−6.

(B.6)

Another advantage to Neville’s algorithm is that if we need to ﬁt a new point into our polynomial, we need not recalculate all the values of P from scratch. For example, if we add a fourth point to the above three points, we would only need to calculate P(4), P(3)(4), P(2)(3)(4) and P(1)(2)(3)(4). This improves the overall eﬃciency of the Bulirsch-Stoer Method.
We are now ready to employ the Bulirsch-Stoer method to solve ordinary diﬀerential equations. We begin by ﬁnding rough estimates of x(ti+1) with the Modiﬁed Midpoint Method using n = 2 sub-steps and then n = 4 sub-steps (Eq. B.1). Next, we use Neville’s algorithm to calculate χi+1(0), and estimate the error (Eqs. B.5 and B.6). If we are within our error goals, we record the result and go on to calculate the next node. Otherwise, we obtain a third point, (H2/62, χi+1(H/6) using the Modiﬁed Midpoint-
 method and repeat Neville’s algorithm using a second-order polynomial and check to see whether the error goal has been

D. Hucul, M. Yeo, W.K. Hensinger, J. Rabchuk, S. Olmschenk, and C. Monroe 575
Fig. B.1. We demonstrate Neville’s algorithm for three random points {(a1, b1), (a2, b2), (a3, b3)}. The y intercept of the six polynomials give us the various P ’s. Finally, Neville’s algorithm does not actually calculate the interpolating polynomials but only the y intercepts of the polynomials. The interpolating polynomials are added for illustrative purposes.
met. The sequence of numbers of sub-steps is n = 2, 4, 6, 8, 10, 12, 14, 16, . . .. If the solution does not meet the error goals beyond a certain value of n, this would indicate that there is some unusual behavior within the time interval of the Bulirsch-Stoer step. Therefore, this sequence is usually terminated at the 8th iteration which corresponds to n = 16 sub-steps. At that point, H is reduced (usually halved) and the above procedure is repeated. A more detailed discussion of the adaptive st-
ep size algorithm is provided in the literature [38].
We now illustrate the Bulirsch-Stoer method by numerically solving a simple diﬀerential equation x˙ (t) = x(t) with x(0) = 1 so that f (t, x) = x. The exact solution to this diﬀerential equation is x(t) = et. For our example, we will take one large Bulirsch-Stoer step from t = 0 to t = 0.3, so that H = 0.3. The result of this calculation will thus be a numerical estimate of the exact solution x(t = 0.3). We note that since the ﬁrst node is given by initial conditions, (t0 = 0, x0 = 1), we are tryi-
ng to calculate the value x1 ≈ x(t = 0.3).
Following the three-step algorithm that was outlined above, we ﬁrst use the Modiﬁed Midpoint method to ﬁnd χ1(H/2) = 1.34838 and χ1(H/4) = 1.34948, both evaluated to six signiﬁcant ﬁgures. Note that the values used in our example of Neville’s algorithm are taken directly from this sample problem. Applying Richardson Extrapolation to these points, we obtain our ﬁrst solution x1 = P(1)(2) = 1.34985 to six signiﬁcant ﬁgures. We know that e0.3 = 1.34986, to six signiﬁcant ﬁgures, so the fractional diﬀ-
erence of χ1(H/2) from the exact solution is 1.1 × 10−3, while the fractional diﬀerence of χ1(H/4) from the exact solution is 2.8 × 10−4. However, by applying Richardson Extrapolation to these two points to estimate χ1(0), an extrapolated value is obtained which has a fractional diﬀerence from the exact result of 6.4 × 10−6. Thus, the extrapolation yields a result that is forty times more accurate than our raw estimates from the Modiﬁed Midpoint Method. Using the error estimation scheme given in E-
q. B.6, we estimate the fractional error to be 1.1 × 10−3. If this error is not acceptable, we then proceed to ﬁnd the value of χ(H/6) = 1.34969 (six signiﬁcant ﬁgures). The value χ1(H/6) has a fractional diﬀerence of 1.2 × 10−4 from the exact answer. But when

576 On the transport of atomic ions in linear and multidimensional ion trap arrays

Substep size
h = H/2 h = H/4 h = H/6

Fract. diﬀ.
from Mod. Mid. Meth. 1.1 × 10−3 2.8 × 10−4 1.2 × 10−4

Fract. diﬀ after
Richardson Extrapolation
NA 6.4 × 10−6 1.5 × 10−8

Table B.1. The ﬁrst column refers to the fractional diﬀerence obtained in the numerical estimation of x(t = 0.3) and the exact solution. The second column shows the fractional diﬀerence after Richardson Extrapolation is applied. Notice that Richardson Extrapolation provides a huge increase in accuracy

we apply Richardson Extrapolation to all three points, we obtain a value for χ1(0) of 1.34986, (six signiﬁcant ﬁgures). This has a fractional diﬀerence from the exact value of 1.5 × 10−8.

This result is roughly 10,000 times more accurate than our best χ1 value obtained directly
from the Modiﬁed Midpoint Method, χ1(H/6). The fractional local error estimate is given again by Eq. B.6 and is 6.4 × 10−6. We note that in order to reach an accuracy of one part

in 108, the Bulirsch-Stoer algorithm only performs 12 evaluations of f . In order to reach the

same accuracy using the Euler Method, we would need 3 × 106 evaluations of f !

To generalize the Bulirsch-Stoer method to solve Newton’s Equation for multiple ions

(Eq. 18), we replace scalar quantities with vector quantities as was done for the ERK method.

Given a node (ti, Vi, Xi), we would like to calculate the next node (ti+1 = ti + H, Vi+1, Xi+1)

with Vi+1 approximating the exact velocities V(ti + H) and Xi+1 approximating the exact

ion positions X(ti + H).

υ0 Ξ0

=

V(ti) X(ti)

(B.7)

υ1 Ξ1

=

υ0 Ξ0

+h

A(Ξ0, ti) υ0

(B.8)

υm+1 Ξm+1

=

υm−1 Ξm−1

+ 2h

A(Ξm, ti + mh) υm

(B.9)

X˜ i+1(H2/n2) V˜ i+1(H2/n2)

=

1 2

υn Ξn

+

υn−1 Ξn−1

+h

A(Ξn, ti + H) υn

(B.10)

A refers to the acceleration of the k ions, and Ξi, υi are intermediate vectors that the modiﬁed
midpoint method calculate at each sub-step. Once the calculation of each Xi+1 and Vi+1 is complete, the values Ξi, υi will be discarded.
X˜ i+1(H2/n2) is the desired approximation to the exact solution X(t = ti + H) and V˜ i+1(H2/n2) is the desired approximation to the exact solution V(t = ti+H). X˜ i+1 and V˜ i+1 are functions of h2 where h = H/n is the Modiﬁed Midpoint Method step size. Polynomial interpolation is carried out using Neville’s Algorithm (Eq. B.5). However, each P (h2) is
now a 6k-dimensional vector representing intermediate estimates of the position and velocity
vectors. Finally, we need to generalize the error estimation scheme in order to implement our
adaptive step size algorithm.

ǫ

=

max{|P(i)(i+1)...(i+m)

− P(i)(i+1)(i+m−1)|, |P(i)(i+1)...(i+m) |P(i)(i+1)...(i+m)|

− P(i+1)(i+2)...(i+m)|}

(B.11)

D. Hucul, M. Yeo, W.K. Hensinger, J. Rabchuk, S. Olmschenk, and C. Monroe 577

Appendix C Stiﬀ Systems and Backward Diﬀerence Formulas
The diﬀerential equation for a system of ions moving in an array of ion traps may be stiﬀ as was discussed in Section 2.3. One way that stiﬀness can occur is if there are two very diﬀerent time scales that govern the evolution of the solution to a diﬀerential equation. An example of a system of ODEs that is stiﬀ is given by Press [38]:

u′(t) = 998u + 1998v v′(t) = −999u − 1999v

(C.1)

The exact solutions to this system of ODEs with initial conditions u(0) = 1 and v(0) = 0 are

u(t) = 2e−t − e−1000t v(t) = −e−t + e−1000t

(C.2)

The two terms in the solutions for u(t) and v(t) have vastly diﬀerent timescales. Just after t = 0, the e−1000t term dominates the evolution of the system, but near t = 1, this term becomes negligible.
In order to illustrate the diﬃculties an explicit ODE solver has when handling a stiﬀ system, we use the Euler Method, Eq. A.3 to solve Eq. C.1. In matrix form, we may write this as

un+1 vn+1

=

un vn

−h

−998 −1998 999 1999

un vn

≡ (1 − hC)

un vn

(C.3)

This simpliﬁes to

un vn

= (1 − hC)n

u0 v0

(C.4)

Since the solutions for u(t) and v(t) both approach zero as a steady state solution, the numerical solution should also approach zero as a steady state solution. If the numerical solution exhibits any behavior that is qualitatively diﬀerent, the numerical ODE solver is clearly be an unstable method. In order for the numerical solutions of Eq. C.1 to approach 0, (1 − hC)n must converge to the zero matrix as n → ∞ or equivalently [38]

h

<

2 |λmax|

=

2 1000

(C.5)

where |λmax| is the largest absolute value of the eigenvalues of the matrix C. The expression in Eq. C.5 provides a strict upper-bound for the step size to be used when obtaining a numerical solution to the problem that is due entirely to stability concerns and not those of local error tolerances. For example, at t = 10, we set our local error goal (the relative numerical error from one numerical step to the next, see equation 20) to be ǫ = 10−6. To estimate the largest step size that we could tak-
e, we calculate a numerical estimate for u and v at t = 10 + h. This is derived from taking a single Euler step of size h from the exact solution of Eq. C.1 at t = 10, i.e.

u(10 + h) v(10 + h)

≈

u(10) v(10)

−h

−998 −1998 999 1999

u(10) v(10)

(C.6)

578 On the transport of atomic ions in linear and multidimensional ion trap arrays

The LHS of Equation C.6 is the exact solution whilst the RHS is a numerical estimate of the exact solution at t=10+h. Therefore the diﬀerence between the LHS and RHS of Equation C.6 is the local error. Using equation C.6, we ﬁnd that the largest step size allowable is h = 0.1. However, equation C.5 implies that we cannot take such a large step size as the qualitative behavior of the numerical solution (in our example, the long term behavior) will vastly diﬀer from the exact solution and hence the -
Euler method will be unstable. Therefore, stiﬀness results in a loss of computational eﬃciency.
One way to to address this problem is to use implicit numerical methodsi [40]. Although implicit numerical methods are generally more stable [38], it is more diﬃcult to solve an implicit equation and this increases computational cost. For example, the Implicit Euler Method in one dimension is deﬁned as follows

xn+1 = xn + hf (tn+1, xn+1)

(C.7)

To illustrate how an implicit method is more robust than a typical explicit method, let us use the Implicit Euler Formula, C.7, to solve the example given in C.1

un+1 vn+1

=

un vn

−h

−998 −1998 999 1999

un+1 vn+1

(C.8)

which simpliﬁes to

un vn

= (1 + hC)−n

u0 v0

(C.9)

The eigenvalues of the matrix (1+hC) are 1/(1+hλ) which is always less than unity regardless of h, thus the matrix (1 + hC)−n will converge to the zero matrix as n → ∞ regardless of h.

Therefore, the Implicit Euler Method is more robust in this example. It also turns out that implicit methods give better stability for general ODEs [38]. However, the price to be paid for such stable behavior is that at every step, one needs to solve an implicit equation.
The Implicit Euler Method is the simplest member of the class of ODE solvers known as Backward Diﬀerence Formulae. The essential idea of the Backward Diﬀerence Formulae is to

use polynomial extrapolation on previously calculated nodes to estimate the next node. For

example, the second order Backward Diﬀerence Formula as used to solve equation 18 is

Vn+1 Xn+1

=

4 3

Vn Xn

−

1 3

Vn−1 Xn−1

+

2 3

A(Xn+1, tn + h) Vn+1

(C.10)

Because it is implicit, each Backward Diﬀerence Formula step is usually more computationally expensive than a step in an explicit ODE solver like the Modiﬁed Midpoint Method. Nevertheless, when solving a stiﬀ system it is usually better to use an implicit method rather than an explicit solver as the implicit method requires far fewer steps. The reduction in the number of steps has a stronger impact than the increased computational expense of an implicit method for each step. Therefore, when stiﬀne-
ss in an ODE is detected or suspected, the designer should switch to the Backward Diﬀerence Formulae. For example, Mathematica’s “NDSolve” uses the Adams Predictor Corrector Method by default and switches to a Backward Diﬀerence formula with an adaptive step-size and an adaptive order when stiﬀness is detected.
i An implicit numerical method is one where the node to be calculated does not depend explicitly on previously determined quantities, i.e. we do not use a function Λ such that xi+1 = Λ(f ; xi, xi−1, ..., x0, ti, ti−1, ...t0)

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:15:00.104Z
- **Text Length:** 227364 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
