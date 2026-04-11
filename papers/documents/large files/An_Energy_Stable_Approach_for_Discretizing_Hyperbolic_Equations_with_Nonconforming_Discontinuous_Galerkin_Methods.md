# PDF Document: Kozdon and Wilcox - 2018 - An Energy Stable Approach for Discretizing Hyperbolic Equations with Nonconforming Discontinuous Gal.pdf

**File Path:** Kozdon and Wilcox - 2018 - An Energy Stable Approach for Discretizing Hyperbolic Equations with Nonconforming Discontinuous Gal.pdf

**Processed Date:** 2026-02-10T18:16:13.841Z

**File Size:** 4446.66 KB

**Total Pages:** unknown

**Extracted Pages:** unknown

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2730

**Title:** An Energy Stable Approach for Discretizing Hyperbolic Equations with Nonconforming Discontinuous Galerkin Methods

**Collection:** Large Files

---

## Extracted Text Content

An Energy Stable Approach for Discretizing Hyperbolic Equations with Nonconforming Discontinuous Galerkin Methods
Jeremy E. Kozdon · Lucas C. Wilcox
23 February 2018
Abstract When nonconforming discontinuous Galerkin methods are implemented for hyperbolic equations using quadrature, exponential energy growth can result even when the underlying scheme with exact integration does not support such growth. Using linear elasticity as a model problem, we propose a skew-symmetric formulation that has the same energy stability properties for both exact and inexact quadrature-based integration. These stability properties are maintained even when the material properties-
 are variable and discontinuous, and the elements are nonaffine (e.g., curved). Additionally, we show how the nonconforming scheme can be made conservative and constant preserving with variable material properties and curved elements. The analytic stability, conservation, and constant preserving results are confirmed through numerical experiments demonstrating the stability as well as the accuracy of the method.
Keywords discontinuous Galerkin · nonconforming meshes · energy stability · linear elasticity · skew-symmetry
Mathematics Subject Classification (2010) 65M12 · 65M60
1 Introduction
In this paper, we consider the energy stability of the (semi-discrete) discontinuous Galerkin method on nonconforming meshes. Two key building blocks for the work are the use of a skew-symmetric form of the governing equations and the projection
The views expressed in this document are those of the authors and do not reflect the official policy or position of the Department of Defense or the U.S. Government. Approved for public release; distribution unlimited
Jeremy E. Kozdon · Lucas C. Wilcox Department of Applied Mathematics, Naval Postgraduate School, Monterey, CA, USA E-mail: {jekozdon,lwilcox}@nps.edu
arXiv:1706.00513v3 [math.NA] 11 Mar 2022

2 Jeremy E. Kozdon, Lucas C. Wilcox
(or interpolation) of both the trial and test functions to nonconforming mortar elements. It has long been recognized that discretizing hyperbolic equations in skewsymmetric form is advantageous; see for instance [27]. Recently, there has been a resurgence of interest in skew-symmetric formulations to improve robustness of high-order methods; see [6, 9, 11, 16, 19, 21, 24]. The skew-symmetric form decouples the stability of the discontinuous Galerkin discretization of the equations into a volume a-
nd surface component. The stability of the volume terms comes directly from the use of the weak derivative (derivatives of the test functions) and the stability of the surface terms comes from a suitably chosen flux. This stability does not require a discrete integration-by-parts property (i.e., summation-by-parts [20]) nor a discrete chain rule. We note that when the operators do have a summation-by-parts property this can be used to flip the weak derivatives back to strong derivatives without im-
pacting the stability of the method (though in the nonconforming method presented here, the surface integrals that result from this procedure would be over an element face and not the corresponding mortar element). Skew-symmetry also ensures that the same treatment is used for nonconforming faces in the primal and discrete adjoint equations. For example, this can be useful when developing discretely exact discretizations for hyperbolic optimization problems [25]. In this work, we merge the ideas o-
f skew-symmetry with nonconforming meshes. Kopriva [14] and Kopriva, Woodruff, and Hussaini [17] laid much of the groundwork for the use of nonconforming discontinuous Galerkin methods for hyperbolic problems. These methods were analyzed by Bui-Thanh and Ghattas [3], where it was shown that when inexact quadrature is used, constant coefficient problems on affine meshes can have energy growth that is not present in the method when exact integration is used. Recently, Friedrich et al. [10] proposed -
a similar scheme for nonconforming SBP operators. In their work, affine meshes with constant coefficients are considered and the nonconforming characteristic of the discretization is due to different approximation within the elements (i.e., hanging elements are not considered). An important difference between this work and Friedrich et al. is that here we consider the impact of nonconforming mesh geometry and curvilinear coordinate transforms (i.e., non-affine meshes). Here we expand upon the lite-
rature related to skew-symmetric discretizations by showing that the skew-symmetric approach is of value for nonconforming methods (either due to hanging nodes in the mesh or changes in element spaces). Two critical ideas in this work are:
– the use of a skew-symmetric form for linear elasticity so that integration-by-parts is not needed discretely; and – evaluation of the skew-symmetric surface integrals in a mortar space so that all surface integrals are consistent even when variational crimes are present.
The first point is now well-known in the literature. The second point is the core contribution of the work and has not been discussed previously in the literature. Unlike many previous skew-symmetric formulations, for nonconforming meshes skew

Nonconforming DG 3
symmetry is also of value for constant coefficient problems on affine meshes to remove the potential exponential growth of energy when inexact quadrature is used1. In addition to stability, it is often desirable that schemes be both conservative and constant preserving. These properties can be lost due to a lack of a discrete product rule if care is not taken in the computation of the metric terms [13]. With nonconforming meshes, additional challenges arise as the mesh may become discretely discon-
tinuous due to different aliasing errors being incurred across nonconforming faces. By enforcing a set of accuracy constraints on the discrete operators as well as requiring a discrete version of the divergence theorem, we are able to show that our proposed discretization is both conservative and constant preserving. For isoparametric hexahedral elements this will require that the mesh is made discretely continuous, or watertight, after a global coordinate transform and that aliasing errors in the-
 calculation of metric terms be made consistent across nonconforming faces. Throughout this paper, we take variable coefficient elastodynamics as a model problem, though the approach is straightforward to generalize to other linear wave problems that can be written in skew-symmetric form. In the results section we consider isoparametric hexahedral elements but the stability analysis applies to other element types.
2 Continuous Problem
We consider a velocity-stress formulation of time-dependent linear elasticity in the domain Ω ⊂ Rd:
ρ ∂vi
∂t = ∂σij
∂xj
, ∂σij
∂t = 1
2 Cijkl
( ∂vk ∂xl
+ ∂vl
∂xk
)
, (1)
where d = 2 or d = 3. Unless otherwise noted, summation over 1, 2, 3 is implied for terms with twice repeated subscripts; free subscripts can take any of the values 1, 2, 3; and in the case of d = 2 the derivatives with respect to x3 are taken to be 0. Here vi is the particle velocity in the xi direction and σij are the components of the symmetric stress tensor such that σij = σji. The scalar ρ is the density of the material and Cijkl are the components of the fourth-order stiffness tensor that ha-
s the symmetries: Cijkl = Cklij = Cjikl = Cijlk. In the results §5, isotropic elasticity is considered where
Cijkl = λδij δkl + μ (δikδjl + δilδjk) , (2)
with λ and μ denoting Lame ́’s first and second parameters (μ is also known as the shear modulus), and δij denoting the Kronecker delta that takes a value of 1 if i = j and 0 otherwise. Both ρ and Cijkl are allowed to be spatially dependent and may include jump discontinuities.
1 Even in the conforming case, the choice of the quadrature rule for some element types may require a skew-symmetric form even for constant coefficient problems on affine meshes (e.g., spectral element method quadrature for the quadrilateral face of pyramids) [6].

4 Jeremy E. Kozdon, Lucas C. Wilcox
Since the focus of this work is the treatment of nonconforming mesh interfaces, only the traction-free boundary condition on ∂Ω is considered. That is, if ni is a component of the outward pointing normal vector to ∂Ω and Ti = σijnj are components of the traction vector, then the boundary condition is Ti = 0 on ∂Ω. Critical to the stability analysis that follows is the existence of an energy norm in which the energy of the semi-discrete numerical scheme is non-increasing. This is motivated by the f-
act that the continuous problem with the traction-free boundary condition does not support energy growth, where the energy in the solution is defined as
E=
∫
Ω
(ρ
2 vivi + 1
2 σij Sijklσkl
)
. (3)
Here Sijkl denotes the components of the fourth-order compliance tensor which is the inverse of the stiffness tensor, i.e., sijCijklSklnmsnm = sijsij for all symmetric second-order tensors with components sij. The energy equation (3) is a well-defined norm if ρ > 0 and the compliance tensor is positive definite, i.e., sijSijklskl > 0 for all non-zero, symmetric second-order tensors with components sij (e.g., see [22]). In the case of isotropic elasticity the components of the compliance tensor are
Sijkl = − λ
2μ(2μ + 3λ) δij δkl + 1
4μ (δikδjl + δilδjk) , (4)
and the compliance tensor is positive definite if μ > 0 and K = λ + 2μ/3 > 0; K is known as the bulk modulus of the material. To see that the traction-free boundary condition does not lead to energy growth, the time derivative of the energy equation (3) is considered:
dE
dt =
∫
Ω
(
ρvi
∂vi
∂t + σij Sijkl
∂σkl ∂t
)
=
∫
Ω
(
vi
∂σij ∂xj
+ σij
∂vi ∂xj
)
(5)
where (1) has been used to change time derivatives into spatial derivatives. By applying the divergence theorem and substituting in the traction-free boundary condition, the energy rate of change is then
dE
dt =
∫
∂Ω
viσij nj =
∫
∂Ω
viTi = 0. (6)
We formalize this in the following theorem.
Theorem 1 Problem (1) with the traction-free boundary condition Ti = 0 on ∂Ω satisfies the energy estimate E(t) = E(0).
Proof Integrating (6) gives the result E(t) = E(0). ut

Nonconforming DG 5
e1
e2
e3
e1
m2
m3
m4
m5
e2
e3
m1
m6
m7
m8
m9
full-side mortar
e1
m4
m5
m6
m7
m8
m2
m9
m10
m3
e2
e3
m1
split-side mortar
Fig. 1 (left) Example of a nonconforming mesh. (center) Example of a mortar decomposition of the mesh, where the mortar elements are conforming to the larger element across the nonconforming faces; we refer to this type of mortar element as a full-side mortar. (right) Example of a mortar decomposition of the mesh, where the mortar elements conform to the smaller elements across the nonconforming faces; we refer to this type of mortar elements as a split-side mortar. (center and right) The arrows o-
n the mortar faces represent the direction of the canonical (and arbitrary) mortar element normals.
3 Notation for the Discontinuous Galerkin Method
3.1 Mesh and Geometry Transformation
In this work, the finite element mesh is defined in two steps. First, the domain is partitioned into a set of non-overlapping elements, the union of which completely covers the domain. It is assumed that there is an exact transformation between the physical elements and a set of reference elements. After this, approximation errors are allowed for in the mappings between the physical and reference elements which may result in gaps and overlaps in the mesh and produce a set of elements whose union i-
s no longer equal to the domain. This could arise if one used an isoparametric approximation for the geometry on a nonconforming mesh. Other approximations for the geometry are possible as long as the quadrature rules introduced satisfy the constraints given in §3.3. Though the scheme is stable with gaps in the computational mesh, it is not necessarily conservative and constant preserving, and in §4.4 and Appendix C we show how these properties can be ensured. Initially, we let Ω be partitioned in-
to a finite set of non-overlapping, possibly nonconforming, d-dimensional, curved volume elements. Let E denote the set of all elements and |E| be the total number of volume elements. At this initial stage, we require that ⋃
e∈E e = Ω. These requirements on the partitioning of Ω imply that before approximation errors are introduced the mesh has no gaps. In the computational results §5, d = 3 is considered with curvilinear hexahedral elements, though the stability analysis is more general. Let Γ = ⋃
e∈E ∂e where ∂e is the boundary of element e; we call Γ the mortar and it contains both the internal mesh interfaces and the outer boundary. The mortar is partitioned into a finite set of non-overlapping, (d−1)-dimensional mortar elements; the set of mortar elements is denoted by M. The number of mortar elements is |M| and we require that ⋃
m∈M m = Γ . Fig. 1 contains an example volume mesh and two possible mortar meshes. The center and right panels show two possible approaches to

6 Jeremy E. Kozdon, Lucas C. Wilcox
partition the internal mortar for the volume mesh in the left panel. When the mortar elements span the entire nonconforming interface between elements we call this a full-side mortar, and when the mortar elements conform to the smallest volume faces we call this a split-side mortar. The set Me is defined to be the set of mortar elements that volume element e ∈ E connects to:
Me = {m ∈ M|m ∩ ∂e 6= ∅} . (7)
Similarly the set Em is defined to be the set of volume elements that mortar element m ∈ M connects to:
Em = {e ∈ E|m ∩ ∂e 6= ∅} . (8)
It is useful to further partition Em into two subsets depending on which side of the mortar each element resides. To do this, each mortar element m ∈ M is given a canonical orientation defined by a unit normal (the orientation of which is arbitrary); the components of the unit normal for m are denoted nm
i . In the method developed below, surface integrals will be performed over the mortar elements and not the faces of the volume elements, and thus the outward normal to the element may have a different orientation (sign) than the mortar element normal. If a volume element e ∈ Em is on the side of the mortar towards which the normal points the element is said to the be on the plus-side of the mortar, otherwise it is said to be on the minus-side of the mortar. The sets of volume elements on the plus-
 and minus sides of mortar element m are denoted by E+m and E−m, respectively, and Em = E+m ⋃ E−m. For the example mesh shown in the center panel of Fig. 1 the above-defined sets are:
Me1 =
{
m2, m3, m4, m5}
, Em1 =
{
e2, e3}
, Em2 =
{
e1, e2, e3}
,
Me2 =
{
m1, m2, m7, m9}
, E+m1 =
{
e3}
, E+m2 =
{
e2, e3}
,
Me3 =
{
m1, m2, m6, m8}
, E−m1 =
{
e2}
, E−m2 =
{
e1}
.
(9)
Each element e ∈ E is taken to have a reference element eˆ where the discretization is specified. It is assume that there exists a diffeomorphic mapping between the reference and physical elements. That is, there exist differentiable functions xe and re such that if r ∈ eˆ then xe(r) ∈ e and if x ∈ e then re(x) ∈ eˆ. Similarly, for each mortar element m ∈ M it is assumed that there exists a reference mortar element ˆm along with a diffeomorphic mapping between the reference and physical mortar ele-
ments. Similar to volume elements, there exist differentiable functions xm and rm such that if r ∈ ˆm then xm(r) ∈ m and if x ∈ m then rm(x) ∈ ˆm. For the exact transformation, the Jacobian determinant for volume element e ∈ E is denoted Je. For d = 2 the Jacobian determinant is
J e = ∂xe1
∂r1
∂xe2 ∂r2
− ∂xe1
∂r2
∂xe2 ∂r1
, (10)

Nonconforming DG 7
and for d = 3
J e = εijk
∂xe1 ∂ri
∂xe2 ∂rj
∂xe3 ∂rk
, (11)
with εijk being the Levi-Civita permutation symbol
εijk =

 
 
+1, if ijk is 123, 312, or 231,
−1, if ijk is 321, 132, or 213,
0, otherwise.
(12)
The surface Jacobian determinant for mortar element m ∈ M is Sm
J . For d = 2, the surface Jacobian determinant for a mortar element is
Sm
J=
√
( dx1m dξ
)2
+
( dx2m dξ
)2
, (13)
where the parametric curves (r1m(ξ), r2m(ξ)) parameterize the mortar element and
dxm
j
dξ = ∂xm
j
∂r1
dr1m
dξ + ∂xm
j
∂r2
dr2m
dξ . (14)
For d = 3, the surface Jacobian determinant of a mortar element is
Sm
J=
√
εij k εinl
∂xm
j
∂ξ
∂xm
k
∂η
∂xnm ∂ξ
∂xm
l
∂η (15)
with the mortar element parameterized as (r1m(ξ, η), r2m(ξ, η), r3m(ξ, η)) and
∂xm
k
∂ξ = ∂xm
k
∂ri
∂rm
i
∂ξ , ∂xm
k
∂η = ∂xm
k
∂ri
∂rm
i
∂η . (16)
In Appendix C we discuss how we numerically evaluate (11) as well as the other metric relations in order to ensure the scheme is conservative and constant preserving; see also Kopriva [13] for a discussion concerning conforming meshes.
3.2 Function Spaces
The finite dimensional approximation space for e ∈ E is defined on the reference element eˆ, and is denoted by Vˆ e ⊂ L2 (eˆ) and has dimension dim Vˆ e. For the numerical results §5, tensor product polynomials of degree at most N are used:
QˆN,d :=
{d ∏
i=1
rni
i
∣ ∣ ∣ ∣ ∣
0 ≤ ni ≤ N, ∀i ∈ [1, d]
}
. (17)
A corresponding space V e for the physical element can be defined as the space of all functions qe such that qe(x) = qe(re(x)) for some qe ∈ Vˆ e. Similar definitions are used for each mortar element m ∈ M, with Uˆ m ⊂ L2 (mˆ ) being the finite

8 Jeremy E. Kozdon, Lucas C. Wilcox
dimensional space defined on the reference element mˆ with dimension dim Uˆ m; in the results Uˆ m = QˆN,d−1 where N is the same as in the volume approximation. The operator Pm,e : Vˆ e → Uˆ m is taken to be an operator with the property that if qe ∈ Vˆ e then Pm,eqe ∈ Uˆ m. Though not required for stability, the most natural way to define this operator is as an L2-projection. Namely if qe ∈ Vˆ e and m ∈ Me, then Pm,eqe is constructed so that for all φm ∈ Uˆ m
∫
ˆm
φmPm,eqe =
∫
ˆme
φmqe, (18)
where ˆme is the portion of the reference mortar element ˆm that corresponds to the intersection in physical space of m and ∂e; see Appendix A for more details on the construction of Pm,e. Note that when the m ∩ ∂e = m the operator Pm,e is an interpolation operator from the volume element to the mortar element (assuming that the order of functions on the mortar is greater than or equal to the volume element faces). For instance, if the mortar elements between nonconforming elements were as shown i-
n the center panel of Fig. 1, then Pm2,e2 and Pm2,e3 would be components of the L2-projection operator between from e2 and e3 to m2, and Pm2,e1 would be an interpolation operator. On the other hand, if the mortar elements between nonconforming elements were as shown in the right panel of Fig. 1, then Pm2,e1 , Pm2,e3 , Pm3,e1 , and Pm3,e2 would all be interpolation operators. If ζne ∈ Vˆ e for n = 1, 2, . . . , dim Vˆ e are linearly independent basis functions for
Vˆ e, then qe ∈ Vˆ e can be written as
qe =
dim Vˆ e
∑
n=1
qe
nζe
n, (19)
where qen are the scalar degree of freedom and are stored as the vector
qe =

   
qe1
qe2
...
qe
dim Vˆ e

   
. (20)
Similar notation is used to represent functions on the reference mortar element ˆm with the vector qm being the dim Uˆ m degrees of freedom representing qm ∈ Uˆ m.
3.3 Quadrature
To allow for a more general formulation, we allow the exact geometry transformations to be approximated, such as by an isoparametric geometry approximation, which leads to the definition of approximate physical elements. Namely, it is assumed that there exist approximate transformations re
h and xe
h that transform between the
reference element eˆ and an approximate physical element eh = re
h (eˆ) where eh ≈ e; approximation of the mortar element transforms leads to approximate mortar elements mh = re
h(mˆ ) ≈ m. The introduction of the approximate physical elements eh

Nonconforming DG 9
means that it is possible that ⋃
eh∈Eh eh = Ωh 6= Ω. Similarly, depending on how the approximate transformations are defined, the computational mesh may now have gaps and overlap between neighboring elements.2 As noted above, allowing for gaps and overlaps has an impact on the conservation and constant preserving properties of the method and this will be addressed in more detail in §4.4. The κe-weighted inner product over e ∈ E between pe ∈ Vˆ e and qe ∈ Vˆ e is approximated as
∫
eˆ
κeJ epe qe ≈ (pe)T Me
κqe, (21)
where Meκ is a symmetric matrix. If κe > 0 then it is assumed that Meκ is positive
definite. This positive definite assumption on the mass matrix Meκ does not require any particular assumptions concerning the approximation of the geometry transformation. For example, the Jacobian determinant could be computed using the exact transformation (11) or computed to respect the metric identities [13]. If Sijkl is a component of a positive-definite, fourth-order tensor then it is not required that Me
Sijkl be positive definite (since any individual component of a positive
definite tensor need not be positive). That said, it is required that (se)T
ij Me
Sijkl se
kl ≥
0 for all symmetric second-order tensors whose components se
ij ∈ Vˆ e satisfy se
ij =
se
ji. Defining
M ̄ e
S=

      
Me
S1111 Me
S1122 Me
S1133 2Me
S1123 2Me
S1113 2Me
S1112
Me
S1122 Me
S2222 Me
S2233 2Me
S2223 2Me
S2213 2Me
S2212
Me
S1133 Me
S2233 Me
S3333 2Me
S3323 2Me
S3313 2Me
S3312
2Me
S1123 2Me
S2223 2Me
S3323 4Me
S2323 4Me
S2313 4Me
S2312
2Me
S1113 2Me
S2213 2Me
S3313 4Me
S2313 4Me
S1313 4Me
S1312
2Me
S1112 2Me
S2212 2Me
S3312 4Me
S2312 4Me
S1312 4Me
S1212

      
, (22)
the above restriction on Me
Sijkl can be restated as requiring that M ̄ e
S be symmetric, positive definite. Integrals involving spatial derivatives of the solution are approximated as
∫
eˆ
J epe ∂qe
∂xj
=
∫
eˆ
J epe ∂re
k
∂xj
∂qe ∂rk
≈ (pe)T Se
j qe, (23)
where we highlight the fact that the stiffness matrix Se
j contains the metric terms. One feature of our discretization is that no summation-by-parts [20] property between stiffness and mass matrices is required for the scheme to be stable. In the results §5 we use tensor product hexahedral elements, with collocation of the integration and interpolation points, and the stiffness matrix Se
j is taken to be of the form
Se
j = MeJere
k,j De
k, (24)
2 In principle one could introduce approximations of the reference elements as well so that eˆ 6= eˆh, but since many methods are specified using straight-sided reference elements this is not considered here.

10 Jeremy E. Kozdon, Lucas C. Wilcox
where Me is the diagonal matrix of tensor product quadrature weights, Je and re
k,j
are diagonal matrices of the approximations of Je and ∂re
k/∂xj, respectively, at the
nodes, and De
k is the differentiation matrix with respect to the reference direction rk .
Surface integrals over m ∈ M are assumed to be approximated using a primitive, positive weight, nqm-point quadrature rule defined for the reference element ˆm. Thus,
if ωnm > 0 are the weights and rnm are the nodes of the rule (with n = 1, 2, . . . , nqm)
then Wm is the diagonal matrix of quadrature weights and surface Jacobian determinant evaluated at the quadrature nodes. Namely, the diagonal elements of the matrix are
Wm
nn = ωm
n Sm
J (rm
n ) (no summation over n). (25)
If Lm is the interpolation matrix that goes from the degrees of freedom of Uˆ m to values at the quadrature nodes, then inner products over the mortar m ∈ M between pm ∈ Uˆ m and qm ∈ Uˆ m are approximated as
∫
mˆ
Sm
J pm qm ≈ (pm)T (Lm)T WmLmqm. (26)
If the intersection of the boundary of volume element e ∈ E and m ∈ M in non-zero, that is ∂e ∩ m 6= ∅, then integrals between pm ∈ Uˆ m and qe ∈ Vˆ e are approximated as
∫
mˆ
Sm
J pm Pm,eqe ≈ (pm)T (Lm)T WmPm,eqe, (27)
where we note that Pm,e goes directly from the volume element to the quadrature nodes, and thus includes both the projection operator Pm,e (or its approximation) and the interpolation matrix Lm.
4 Discontinuous Galerkin Method
4.1 Exact Integration
A skew symmetric, discontinuous Galerkin formulation based on (1) is: For each e ∈ E, find ve
j ∈ Vˆ e and symmetric σe
ij = σe
ji ∈ Vˆ e such that for all φe
j ∈ Vˆ e and symmetric ψe
ij = ψe
ji ∈ Vˆ e the following holds:
∫
eˆ
J eρe φe
i
∂ve
i
∂t = −
∫
eˆ
J e ∂φe
i
∂xj
σe
ij +
∑
m∈Me
∫
mˆ
Sm
J φm,e
i T ∗m[e]
i , (28)
∫
eˆ
Jeψe
ij Se
ijkl
∂σe
kl
∂t =
∫
eˆ
Je
2 ψe
ij
( ∂ve
i
∂xj
+ ∂ve
j
∂xi
)
(29)
+
∑
m∈Me
∫
ˆm
Sm
J (nj ψij )m,e (
v∗m
i − vm[e]
i
)
.

Nonconforming DG 11
Here the mortar projected test velocity from element e is defined as φm,e
i = Pm,eφi.
The mortar projected test traction (njψij)m,e can be defined by projecting the element face computed test traction to the mortar, (njψij)m,e = Pm,ene
j ψij where
ne
j is the outward normal for element e, or by projecting the test stress tensor
to the mortar and then computing the test traction on the mortar, (njψij)m,e =
nm,e
j Pm,eψij where nm,e
j is the mortar normal that is oriented outward to element e. Both approaches will result in a stable numerical method, and in the results section the latter approach is used (projecting the stresses). The quantity vm[e]
i = v+m
i if
e ∈ E+m and vm[e]
i = v−m
i if e ∈ E−m where
v±m
i=
∑
e∈E±m
P m,eve
i , (30)
are the velocities on the plus and minus side of the mortar. The vectors T ∗m[e]
i
and v∗m
i are the numerical fluxes which enforce continuity of traction and velocity across the mortar elements and the physical boundary conditions. The choice of the numerical flux is critical to ensure the consistency and stability of the method (as discussed below). The superscript [e] in T ∗m[e]
i denotes the fact that this traction
is defined with respect the normal of element e. Namely, if elements e1 and e2 are
both connected to mortar m then T ∗m[e1]
i = T ∗m[e2]
i if both elements are on the
same side of the mortar element and T ∗m[e1]
i = −T ∗m[e2]
i if they are on opposite sides (due to the equal but opposite normal vector). An important feature of (28)–(29) is that the surface integrals are evaluated on the mortar elements, not the volume element faces. This structure essentially decouples the volume and surface stability, leading to a semi-discretely stable scheme even when quadrature (or under-integration) is used. The energy in element e is defined as
Ee =
∫
eˆ
Je
(ρ
2 ve
i ve
i+1
2 σe
ij Se
ij kl σ e
kl
)
, (31)
with E = ∑
e∈E Ee being the energy in the entire domain; see (3). Since the continuous problem does not support energy growth, it is desirable that the semi-discrete problem mimic this property, e.g., dE/dt ≤ 0. For each element, the energy rate of change is
dE e
dt =
∑
m∈Me
dE m,e
dt , (32)
dE m,e
dt =
∫
mˆ
Sm
J
(
vm,e
i T ∗m[e]
i + v∗m
i T m,e
i − vm[e]
i T m,e
i
)
, (33)
where dEm,e/dt is the contribution to the energy rate of change for mortar element m ∈ Me that comes from element e, the mortar projected velocity from element e is vm,e
i = P m,eve
i , and the mortar projected traction vector T m,e
i = (nj σij )m,e is either the projection of the tractions to the mortar or the tractions defined from the projected stresses; see discussion following (29).

12 Jeremy E. Kozdon, Lucas C. Wilcox
To complete the energy estimate, a single mortar element m ∈ M is considered and the contributions from all elements e ∈ Em are summed:
dE m
dt =
∑
e∈Em
dE m,e
dt . (34)
Using the (30) along with the mortar plus and minus tractions
T ±m
i =∓
∑
e∈E±m
T m,e
i , (35)
the mortar element energy rate of change can be written as
dE m
dt =
∫
ˆm
Sm
J
((
v−m
i − v+m
i
)
T ∗m
i + v∗m
i
(
T −m
i − T +m
i
)
(36)
−v−m
i T −m
i + v+m
i T +m
i
)
.
Here, the traction component of the numerical flux T ∗m
i = T ∗m[e] if e ∈ E−m and
T ∗m
i = −T ∗m[e] if e ∈ E+m. For mortar elements on the physical boundary, the energy rate of change is
dE m
dt =
∫
mˆ
Sm
J
(
v−m
i T ∗m
i + v∗m
i T −m
i − v−m
i T −m
i
)
. (37)
If the numerical flux is defined such that the integrands of (36) and (37) are non-positive for all v±m
i and T ±m
i , then the following theorem results.
Theorem 2 If there exists a numerical flux such that the integrands of (36) and (37) are non-positive, then discontinuous Galerkin method (28)–(29) satisfies the energy estimate E(t) ≤ E(0) and is energy stable.
Proof Taking the derivative of the energy gives,
dE
dt =
∑
e∈E
dE e
dt =
∑
m∈M
dE m
dt . (38)
If across every face the numerical fluxes have the property that (36) and (37) are non-positive it follows that
dE
dt ≤ 0, (39)
and E(t) ≤ E(0) results upon integration. ut

Nonconforming DG 13
4.2 Numerical Flux for Isotropic Elasticity
The critical question then becomes: can numerical fluxes be defined so that (36) and (37) are non-positive? For isotropic elasticity, one approach is to use a flux defined as
T ∗m
i = nm
i T ∗m
‖ + T ∗m
i⊥ , v∗m
i = nm
i v∗m
‖ + v∗m
i⊥ , (40)
where T ∗m
‖ and v∗m
‖ are the mortar parallel traction and velocity, and T ∗m
i⊥ and v∗m
i⊥
are the mortar perpendicular components. To define these terms, it is necessary to first define the parallel and perpendicular plus and minus states:
T ±m
‖ = niT ±m
i , T ±m
i⊥ = T ±m
i − niT ±m
‖ , (41)
v±m
‖ = niv±m
i , v±m
i⊥ = v±m
i − niv±m
‖ . (42)
With this, the terms in flux (40) can be defined as
T ∗m
‖ = km
p
(
Z +m
p T −m
‖ + Z−m
p T +m
‖ − αZ−m
p Z+m
p
(
v−m
‖ − v+m
‖
))
(43)
v∗m
‖ = km
p
(
Z −m
p v−m
‖ + Z+m
p v+m
‖ −α
(
T −m
‖ − T +m
‖
))
, (44)
T ∗m
i⊥ = km
s
(
Z +m
s T −m
i⊥ + Z−m
s T +m
i⊥ − αZ−m
s Z+m
s
(
v−m
i⊥ − v+m
i⊥
))
, (45)
v∗m
i⊥ = km
s
(
Z −m
s v−m
i⊥ + Z+m
s v+m
i⊥ − α
(
T −m
i⊥ − T +m
i⊥
))
, (46)
with the material properties entering the flux definition through the following relationships
Z ±m
s = √ρ±mμ±m, Z±m
p = √ρ±m (λ±m + 2μ±m), (47)
km
s= 1
Zs−m + Zs+m
, km
p= 1
Zp−m + Zp+m
. (48)
Here the parameter α ≥ 0 controls the amount of dissipation that occurs through the flux, with α = 1 being the upwind flux [26] and α = 0 being a central-like flux which results in no-energy dissipation across the interface. To enforce the physical boundary condition Ti = 0 we set v+m
i = v−m
i , T +m
i = −T −m
i , Zs+m = Zs−m, and
Zp+m = Zp−m which leads to
T ∗m
‖ = 0, v∗m
‖ = v−m
‖ −α
T −m
‖
Zp−m
, T ∗m
i⊥ = 0, v∗m
i⊥ = v−m
i⊥ − α T −m
i⊥ Zs−m
. (49)
To see that (40) results in a stable flux, first consider the interior mortar rate of energy change integral (36). Rewriting the integrand in terms of the parallel and perpendicular components gives
(
v−m
i − v+m
i
)
T ∗m
i + v∗m
i
(
T −m
i − T +m
i
)
− v−m
i T −m
i + v+m
i T +m
i
=
(
v−m
‖ − v+m
‖
)
T ∗m
‖ + v∗m
‖
(
T −m
‖ − T +m
‖
)
− v−m
‖ T −m
‖ + v+m
‖ T +m
‖ (50)
+
(
v−m
i⊥ − v+m
i⊥
)
T ∗m
i⊥ + v∗m
i⊥
(
T −m
i⊥ − T +m
i⊥
)
− v−m
i⊥ T −m
i⊥ + v+m
i⊥ T +m
i⊥ ,

14 Jeremy E. Kozdon, Lucas C. Wilcox
where it has been used that, by definition, v±m
i⊥ , T ±m
i⊥ , v∗m
i⊥ , and T ∗m
i⊥ are orthogonal
to nm
i . Substituting in the numerical flux expressions (43)–(46) gives
(
v−m
i − v+m
i
)
T ∗m
i + v∗m
i
(
T −m
i − T +m
i
)
− v−m
i T −m
i + v+m
i T +m
i
= −α km
p
(
Z −m
p Z+m
p
(
v−m
‖ − v+m
‖
)2
+
(
T −m
‖ − T +m
‖
)2)
(51)
−
3
∑
i=1
α km
s
(
Z −m
s Z+m
s
(
v−m
i⊥ − v+m
i⊥
)2
+
(
T −m
i⊥ − T +m
i⊥
)2)
.
A similar calculation for the boundary mortar elements, gives that the integrand of (37) is
v−m
i T ∗m
i + v∗m
i T −m
i − v−m
i T −m
i = −α
(
T −m
‖
)2
Zp−m
−
3
∑
i=1
α
(T −m
i⊥
)2
Zs−m
. (52)
Thus for both (36) and (37) the integrand is non-positive if α ≥ 0, and the flux yields a stable scheme by Theorem 2.
Corollary 1 For a variable coefficient, isotropic material the skew-symmetric scheme (28)(29) using numerical flux (40) with (43)–(46) leads to a semi-discrete scheme that satisfies E(t) ≤ E(0).
4.3 Quadrature Integration
We now turn to the case when quadrature is used to evaluate the integrals in the (28)–(29), and show that this has semi-discrete stability even with some variational crimes. In the analysis that follows, we make minimal assumptions about the quadrature rules and interpolation procedures. The analysis is independent of element shape. A quadrature based version of (28)–(29) is: For each e ∈ E, find ve
j ∈ Vˆ e and symmetric σe
ij = σe
ji ∈ Vˆ e such that:
Me
ρ
dve
i
dt = − (Se
j
)T σe
ij +
∑
m∈Me
(Pm,e)T WmT∗m[e]
i , (53)
Me
Sijkl
dσe
kl
dt = 1
2
(Se
j ve
i + Se
i ve
j
)+
∑
m∈Me
(Pm,e
nj
)T Wm (
v∗m
i − vm[e]
i
)
. (54)
Here, the subscript nj in Pnmj,e denotes the fact that this projection operator could be defined such that the unit normal nj is multiplied before or after the projection, that is Pnmj,eσe
ij approximates (njσij)m,e at the quadrature nodes; see discussion following (28)–(29). The trial velocity vector on the mortar depends on which side

Nonconforming DG 15
of mortar m element e is on. Namely, vm[e]
i = v+m
i if e ∈ E+m and vm[e]
i = v−m
i if
e ∈ E−m with
v±m
i=
∑
e∈E±m
Pm,eve
i . (55)
The remaining notation in (53)–(54) is discussed in §3.3. We call this semi-discrete scheme the symmetric flux integral method (SFIM) as both the trial and test functions are projected to the mortar for integration, and note that SFIM can be applied to either the full-side or split-side mortars as shown in Fig. 1. The energy in element e ∈ E is defined as
Ee = 1
2 (ve
i )T Me
ρve
i+1
2
(σe
ij
)T Me
Sijkl σe
kl, (56)
with the total energy in the system defined as E = ∑
e∈E Ee. For this to be a
well-defined norm, it is required that Meρ and M ̄ e
S, see (22), be symmetric positive definite. The time derivative of the energy gives
dE e
dt =
∑
m∈Me
dE m,e
dt , (57)
dE m,e
dt = (vm,e
i )T WmT∗m[e]
i + (v∗m
i
)T WmTm,e
i−
(
vm[e]
i
)T
WmTm,e
i , (58)
where vm,e
i = Pm,eve
i and Tm,e
i = Pnmj,eσe
ij. Considering only a single mortar
element m ∈ M and summing contributions from all e ∈ Em gives
dE m
dt =
∑
e∈Em
dE m,e
dt , (59)
which for an interior mortar element is
dE m
dt =
(
v−m
i − v+m)T
WmT∗m
i + (v∗m
i
)T Wm(
T−m
i − T+m
i
)
(60)
−
(
v−m
i
)T
WmT−m
i+
(
v+m
i
)T
WmT+m
i
and for a boundary mortar element is
dE m
dt =
(
v−m
i
)T
WmT∗m
i + (v∗m
i
)T WmT−m
i−
(
v−m
i
)T
WmT−m
i . (61)
Here the plus and minus side traction states on the mortar are defined as
T±m
i =∓
∑
e∈E±m
Tm,e
i ; (62)
the velocity state on the mortar is defined in (55). The traction component of the numerical flux is defined as T∗m
i = T∗m[e]
i if e ∈ E−m and T∗m
i = −T∗m[e]
i if
e ∈ E+m.

16 Jeremy E. Kozdon, Lucas C. Wilcox
Theorem 3 Given a numerical flux such that the integrands of the energy rate (36) and (37) are non-positive, the energy rates (60) and (61) are non-positive and the quadrature-based discontinuous Galerkin method (53)–(54) satisfies the energy estimate E(t) ≤ E(0) and is energy stable.
Proof Recall that Wm is a diagonal matrix of quadrature weights and surface Jacobian determinants, thus (60) can be written as
dE m
dt =
nm
q ∑
k=1
ωm
k
{
Sm
J
((
v−m
i − v+m
i
)
T ∗m
i + v∗m
i
(
T −m
i − T +m
i
)
(63)
−v−m
i T −m
i + v+m
i T +m
i
)}
k
,
and (61) as
dE m
dt =
nm
q ∑
k=1
ωm
k
{
Sm
J
(
v−m
i T ∗m
i + v∗m
i T −m
i − v−m
i T −m
i
)}
k
, (64)
where {·}k denotes that the term inside the brackets is evaluated at mortar quadrature node k. Since the terms inside the brackets are the same as the integrands of (36) and (37), a numerical flux that results in non-positive integrands for (36) and (37) will result in (60) and (61) being non-positive. The remainder of the proof is identical to the proof of Theorem 2. ut
4.4 Conservation and Constant Preservation
Since the diffeomorphic mappings between the physical and reference elements (see §3.1) were defined prior to the introduction of an approximation space, gaps and overlaps in the mesh may occur when the mappings are approximated. For an isoparametric geometry approximation, one approach is to interpolate the geometry transform at nodal degrees of freedom. Though this approach is straightforward to implement, differences in the interpolations of the mappings across nonconforming interfaces can resu-
lt in differing approximations; across conforming faces this problem does not arise because the aliasing errors are the same on both sides of a face. By construction, the stability of SFIM is not impacted by a discretely discontinuous mesh (since the volume and surface stability are decoupled), but a discretely discontinuous mesh can lead to a lack of conservation and breakdown of constant preserving. Here, we show how SFIM can be made conservative and constant preservation by imposing a set of ac-
curacy and consistency constraints. Most of the constraints are quite natural (such as the ability to exactly approximate and differentiate constants). One of the constraints requires that the operators satisfy a discrete divergence theorem and this implicitly implies some continuity of the metric terms. For tensor product hexahedral elements, with Legendre-Gauss-Lobatto quadrature we satisfy these constraints by making the mesh discretely watertight (i.e., removing holes and

Nonconforming DG 17
overlaps) as well as ensuring that aliasing errors in certain metric relations are the same across nonconforming faces; details are given in Appendix C. In the following, we assume that the domain is periodic so that the impact of the boundary conditions can be ignored. The following constraints are imposed in order to make SFIM conservative and constant preserving:
Constraint 1 (Approximation Consistency) We assume that the volume and mortar approximation spaces can exactly represent constants. The notation 1e and 1m are used to denote the expansion of 1 within the chosen basis for a volume element e ∈ E and mortar element m ∈ M, respectively; for nodal basis functions these would be vectors of ones. We also define 0e = 01e and 0m = 01m.
Constraint 2 (Projection Consistency) It is assumed that the discrete projection operators Pm,e exactly project constants from the volume to the mortar. Namely, we assume that for each m ∈ M the following holds
∑
e∈E−m
Pm,e1e =
∑
e∈E+m
Pm,e1e = 1m. (65)
Constraint 3 (Stiffness Consistency) The stiffness matrices Se
j are assumed to differentiate constants exactly. Namely it is assumed that
Se
j 1e = 0e. (66)
Constraint 4 (Consistent Numerical Flux) The numerical flux is assumed to be consistent in the sense that if v+m
i = v−m
i and T +m
i = T −m
i for i = 1, 2, 3 then
v∗m
i = v±m
i and T ∗m
i = T ±m
i.
Constraint 5 (Discrete Divergence Theorem) We assume that the stiffness matrices satisfy the following discrete divergence theorem:
(Se
j
)T 1e =
∑
m∈Me
(Pm,e)T Wmnm[e]
j , (67)
where nm[e]
j = nm
j if e ∈ E−m and nm[e]
j = −nm
j if e ∈ E+m with nm
j being the components of the normal vector at the mortar degrees of freedom. We call this a discrete divergence theorem because, after multiplication by (qe)T , (67) approximates
∫
e
Je ∂qe
∂xj
=
∑
m∈Me
∫
m
Sm
J ne
j P m,eqe =
∫
∂e
Se
J ne
j qe, (68)
where the last equality assumes that Pm,e is an exact L2 projection.
Constraint 6 (Consistent Constant Traction Calculation) If for a mortar element m ∈ M the projected stresses on neighboring volume elements are constant, i.e., for some σij ∈ R the element stresses are σe
ij = σij1e for all e ∈ Em, then we assume that T −m
i = T +m
i = σij nm
j ; namely that the traction on the mortar elements are the σij weighted sum of the normal vectors on the mortar. Recall that following (29)

18 Jeremy E. Kozdon, Lucas C. Wilcox
we gave two approaches to computing the mortar tractions, either projecting the stresses with traction calculation on the mortar or projecting the volume face computed tractions to the mortar elements. The first approach, projecting the stresses, automatically satisfies this constraint by Constraint 2. If the second approach, projecting the tractions, is used then additional assumptions on the normal vectors as calculated on the faces of the volume elements as well as the accuracy of the projectio-
n operators for high-order functions would be needed. In the results section we use the approach of projecting the stresses and this constraint is satisfied by construction.
Constraints 1–3 are reasonable accuracy and consistency assumptions for most approximations spaces, and Constraint 4 is fairly standard for discontinuous Galerkin methods. As noted above, Constraint 6 holds for our choice of projecting the tractions. Thus, it only remains to show that Constraint 5 holds. One of the key features in satisfying Constraint 5 is the computation of the metric terms. For conforming meshes, the discrete divergence theorem can be ensured using the curl invariant form of Ko-
priva [13]. In Appendix C we show how the curl invariant form can be adapted for nonconforming meshes with tensor product hexahedral elements with Legendre-Gauss-Lobatto quadrature. For periodic domains, one of the steady state solutions admitted by governing equations (1), regardless of the variability of the material properties, is constant velocities vi and stresses σij. By Constraint 1, the constant solution is exactly admissible by the approximation, and thus it may be desirable to require th-
at a discretization of (1) represent this steady state solution with no error, i.e., that the scheme be constant preserving. It is known that even on conforming meshes, when the elements are non-affine constant preserving requires careful handling of the metric terms; see for instance the work of Kopriva [13]. To see that when the above assumptions are satisfied that SFIM is constant preserving, we substitute ve
i = βi and σij = αij into the right-hand side (53)–(54) with βi and αij being constants:
Me
ρ
dve
i
dt = − αij
(Se
j
)T 1e +
∑
m∈Me
(Pm,e)T WmT∗m[e]
i , (69)
Me
Sijkl
dσe
kl
dt = 1
2
(βiSe
j 1e + βj Se
i 1e) +
∑
m∈Me
(Pm,e
nj
)T Wm (
β∗m
i − βm[e]
i
)
. (70)
Using Constraints 3 (stiffness consistency) and 5 (discrete divergence theorem) relations (69)–(70) can be rewritten as
Me
ρ
dve
i
dt =
∑
m∈Me
(Pm,e)T Wm (
T∗m[e]
i − αij nm[e]
j
)
, (71)
Me
Sijkl
dσe
kl
dt =
∑
m∈Me
(Pm,e
nj
)T Wm (
β∗m
i − βm[e]
i
)
. (72)
Projection consistency (Constraint 2) implies that
βm[e]
i = βm[e′]
i ∀e, e′ ∈ Em, (73)

Nonconforming DG 19
and this along with flux consistency (Constraint 4) gives
β∗m
i = βm[e]
i , T∗m
i = αij nm[e]
j . (74)
It then follows that (72) becomes
Me
ρ
dve
i
dt = 0, Me
Sijkl
dσe
kl
dt = 0, (75)
and the solution remains constant in time. For linear elasticity, the conserved quantities are the components of momentum ρvi and strain ij = Sijklσkl. To show discrete conservation we need to show that
∑
e∈E
(1e)T Me
ρ
dve
i
dt = 0,
∑
e∈E
(1e)T Me
Sijkl
dσe
kl
dt = 0. (76)
Multiplying (53)–(54) on the left by (1e)T we have
(1e)T Me
ρ
dve
i
dt = − (1e)T (Se
j
)T σe
ij +
∑
m∈Me
(1m)T WmT∗m[e]
i , (77)
(1e)T Me
Sijkl
dσe
kl
dt = (1e)T
2
(Se
j ve
i + Se
i ve
j
)+
∑
m∈Me
(ne
j
)T Wm (
v∗m
i − vm[e]
i
)
.
(78)
Using the stiffness consistency and discrete divergence assumptions (Constraints 3 and 5) these become
(1e)T Me
ρ
dve
i
dt =
∑
m∈Me
(1e)T (Pm,e)T WmT∗m[e]
i , (79)
(1e)T Me
Sijkl
dσe
kl
dt =
∑
m∈Me
(1e)T (Pm,e
nj
)T Wmv∗m
i . (80)
Considering (79) and summing over all the elements gives
∑
e∈E
(1e)T Me
ρ
dve
i
dt =
∑
e∈E
∑
m∈Me
(1e)T (Pm,e)T WmT∗m[e]
i
=
∑
m∈M
∑
e∈Me
(1e)T (Pm,e)T WmT∗m[e]
i
=
∑
m∈M
∑
e∈M+e
(1e)T (Pm,e)T WmT∗m[e]
i (81)
+
∑
m∈M
∑
e∈M−e
(1e)T (Pm,e)T WmT∗m[e]
i.
Applying projection consistency (Constraint 2) along with the fact that T ∗m
i= T ∗m[e]
i for e ∈ E−m and T ∗m
i = −T ∗m[e]
i for e ∈ E+m gives
∑
e∈M±e
(1e)T (Pm,e)T WmT∗m[e]
i = ∓(1m)T WmT∗m
i , (82)

20 Jeremy E. Kozdon, Lucas C. Wilcox
and thus (81) becomes
∑
e∈E
(1e)T Me
ρ
dve
i
dt =
∑
m∈M
(
−(1m)T WmT∗m
i + (1m)T WmT∗m
i
)
= 0.
A similar calculation for (80) results in
∑
e∈E
(1e)T Me
Sijkl
dσe
kl
dt =
∑
m∈M
∑
e∈E+m
(1e)T (Pm,e
nj
)T Wmv∗m
i (83)
+
∑
m∈M
∑
e∈E+m
(1e)T (Pm,e
nj
)T Wmv∗m
i.
Which, after applying the traction consistency constraint (Constraint 6) leads to (83) becoming
∑
e∈E
(1e)T Me
Sijkl
dσe
kl
dt =
∑
m∈M
(
−
(ne
j
)T Wmv∗m
i + (ne
j
)T Wmv∗m
i
)
= 0. (84)
Thus the scheme satisfies discrete conservation. The discrete divergence theorem (Constraint 5) and traction consistency (Constraint 6) are only required for conservation of strain, and if only conservation of momentum is required a scheme without these properties can be used. If the converse was desired (automatic conservation of strain) then the weak and strong derivatives in formulation (28)–(29) should be swapped.
4.5 Comment on the Implementation of (54)
Due to the implied summation on the right-hand side (54) the mass matrix to be inverted is not Me
Sijkl but the combined matrix M ̄ e
S defined in (22). In the results section, we will be using tensor product hexahedral elements with Legendre-GaussLobatto quadrature. With this, mass matrix Me
Sijkl = MeSe
ijkl is diagonal with Me
being a diagonal matrix of quadrature weights and Jacobian determinants and Se
ijkl
being a diagonal matrix of the compliance tensor evaluated at the quadrature nodes (not to be confused with the stiffness matrix Se
i ). In this case, the combined mass matrix is
M ̄ e
S = S ̄e (I6×6 ⊗ Me) = (I6×6 ⊗ Me) S ̄e, (85)
S ̄e =

      
Se1111 Se1122 Se1133 2Se1123 2Se1113 2Se1112
Se1122 Se2222 Se2233 2Se2223 2Se2213 2Se2212
Se1133 Se2233 Se3333 2Se3323 2Se3313 2Se3312
2Se1123 2Se2223 2Se3323 4Se2323 4Se2313 4Se2312
2Se1113 2Se2213 2Se3313 4Se2313 4Se1313 4Se1312
2Se1112 2Se2212 2Se3312 4Se2312 4Se1312 4Se1212

      
, (86)

Nonconforming DG 21
Additionally, the inverse of the combined mass matrix is
(M ̄ e
S
)−1 = M ̄ e
C = C ̄ e (
I6×6 ⊗ (Me)−1)
=
(
I6×6 ⊗ (Me)−1)  ̄Ce, (87)
C ̄ e =

      
Ce1111 Ce1122 Ce1133 Ce1123 Ce1113 Ce1112
Ce1122 Ce2222 Ce2233 Ce2223 Ce2213 Ce2212
Ce1133 Ce2233 Ce3333 Ce3323 Ce3313 Ce3312
Ce1123 Ce2223 Ce3323 Ce2323 Ce2313 Ce2312
Ce1113 Ce2213 Ce3313 Ce2313 Ce1313 Ce1312
Ce1112 Ce2212 Ce3312 Ce2312 Ce1312 Ce1212

      
, (88)
where Ce
ijkl is the diagonal matrix of stiffness tensor elements Cijkl evaluated at the quadrature nodes. With this, for tensor product elements, (54) is equivalently written as
Me dσe
kl
dt = 1
2 Ce
ijkl (Se
kve
l + Se
l ve
k) (89)
+
∑
m∈Me
Ce
ijkl(Pm,e
nk )T Wm (
v∗m
l − vm[e]
l
)
,
where we highlight that Ce
ijkl is defined on the volume element and not the mortar. For many element types such a decomposition is not possible because the in
terpolation and quadrature points are different. One option in this case is to invert
M ̄ e
S on each element. Alternatively, one could use the weight-adjusted approach of Chan, Hewett, and Warburton [7] and let
M ̄ e
S = (I6×6 ⊗ Me) (  ̄Me
C
)−1 (I6×6 ⊗ Me) , (90)
which then allows (54) to be written as
Me dσe
kl
dt = 1
2 Me
Cijkl (Me)−1 (Se
kve
l + Se
l ve
k) (91)
+
∑
m∈Me
Me
Cijkl (Me)−1(Pm,e
nk )T Wm (
v∗m
l − vm[e]
l
)
.
The weight adjusted approach can also be used for the case of nonconstant Jacobian determinants when the mass matrix Me is not diagonal [7].
4.6 Comparison with a Previous DG Mortar Method
Here we compare the proposed method with the approach outlined by Kopriva [14] and Kopriva, Woodruff, and Hussaini [17], which was analyzed by Bui-Thanh and Ghattas [3]. In this previous approach, the fluxes are computed on the mortar, but they are projected back to the local element space for integration. This is as opposed to our approach where we project the test and trial functions to the mortar space, and all surface integrals are computed on the mortar.

22 Jeremy E. Kozdon, Lucas C. Wilcox
In this earlier approach, method (28)–(29) would be
∫
eˆ
J eρ φi
∂ve
i
∂t = −
∫
eˆ
J e ∂φi
∂xj
σe
ij +
∫
∂eˆ
Se
J φe
i T ∗e
i , (92)
∫
eˆ
J eψij Sijkl
∂σe
kl
∂t =
∫
eˆ
Je
2 ψij
( ∂ve
i
∂xj
+ ∂ve
j
∂xi
)
(93)
+
∫
∂eˆ
Se
J ne
j ψe
ij
(v∗e
i − ve
i
).
The numerical flux terms T ∗e
i and v∗e
i are the L2-projected fluxes from the mortar
onto the surface of the volume element, e.g., L2-projection from the set of mortar elements Me. Since the L2-projection is only applied to the trial function (and not the test function), we call this approach the asymmetric flux integral method (AFIM). As with the SFIM proposed above, the AFIM can be applied to either the full-side or split-side mortars shown in Fig. 1. With exact integration and L2-projection, this scheme has the same stability properties as (28)–(29), but when inexact quadrature-
 is used this scheme may admit energy growth (even on affine elements). In the case of affine meshes with constant coefficients, Bui-Thanh and Ghattas [3] showed that Legendre-Gauss-Lobatto integration leads to an energy estimate of the form E(t) ≤ ectE(0) where c > 0 is a small but positive constant that converges to zero under mesh refinement. Thus, even though stable, the scheme admits exponential energy growth. The main difficulty in achieving a strictly non-increasing energy estimate for this-
 scheme is that when quadrature is used, the inexact face mass matrix and L2-projection operator are no longer consistent. This means that integrals over the element face space and the mortar space are not equivalent. One approach to overcoming these difficulties would be to use inexact L2-projections defined such that the quadrature version of (92)–(93) is purely dissipative. With some reformation, the proposed scheme (53)–(54) could be interpreted as giving a consistent approach for defining the-
se inexact L2-projections.
5 Computational Results
In this section, the energy stability, conservation, and constant preserving properties of SFIM are verified for d = 3 with isotropic elasticity and the accuracy of the scheme is investigated. The adapted meshes in the examples are generated with p4est [4] using its topology iterator [12]. Hexahedral elements with tensor product LegendreGauss-Lobatto (LGL) nodes are used for interpolation and integration (e.g., the so-called discontinuous Galerkin spectral element method [2, 15]); LGL quadrature i-
s also used on the mortar elements. A computational advantage of LGL quadrature is that some of the degrees of freedom exist on the element faces which means that for conforming faces, no interpolation operation is required to compute the flux. That said, an LGL quadrature rule with N + 1 points can only integrate polynomials of degree 2N − 1 exactly, and thus the diagonal mass matrix defined using LGL quadrature is inexact for two polynomials of degree N . When curved elements and

Nonconforming DG 23
variable coefficients are used, the metric terms and material properties are multiplied with the quadrature weights, thus maintaining the diagonal structure of the mass matrix (at the cost of further under-integration). Despite this, as shown above, the newly proposed method does not require exact integration as stability is achieved through the use of skew-symmetry. The geometry terms are approximated in an isoparametric fashion (i.e., the coordinate mapping is evaluated at the interpolation node-
s of the reference element) with the metric terms evaluated using the curl invariant form of Kopriva [13]; see also Appendix C. All of the schemes introduced above are in semi-discrete form with time left continuous. The scheme can be written as a system of linear ordinary differential equations:
dq
dt = Aq, (94)
where q is the vector of stresses and particle velocities at all the degrees of freedom. As is standard when discretizing hyperbolic equations, in our implementation A is not explicitly formed only its action on q is computed. We integrate (94) in time using the fourth-order, low-storage, Runge-Kutta scheme of Carpenter and Kennedy [5] ((5,4) 2N -Storage RK scheme, solution 3). To compute the time step for the Runge-Kutta method, at every node of the mesh we compute
β = min(β1, β2, β3), (95)
βk =
(
N
√
Cp
∂rk ∂xi
∂rk ∂xi
)−1
(no summation over k), (96)
where N is the polynomial order and Cp = √(λ + 2μ)/ρ is the p-wave speed of the material at the node. The maximum time step is then chosen to be proportional to the minimum β over the whole mesh.
5.1 Planewave Solution in Periodic Box
In this test, SFIM and AFIM are compared with both full-side and split-side mortar elements. To do this, an affine mesh with constant material properties is considered. Subsequent tests involve variable material properties and non-affine meshes and will only use SFIM. Recall that SFIM, described in §4.3, refers to the symmetric application of L2-projection operators to both the test and trial function, whereas AFIM, described in §4.6, refers to the asymmetric application of the L2-projection opera-
tors to the trial and flux functions (but not the test function). Recall also that full-side mortar elements conform to the larger volume element faces and the split-side mortar elements conform the to smaller volume element faces (see Fig. 1). The domain is taken to be the unit cube: Ω = [0, 1]3. The domain is initially partitioned into a 2 × 2 × 2 mesh of hexahedral elements, and then four elements are further subdivided into 8 elements; see Fig. 2. This base mesh has |E| = 36 elements, and in t-
he base mesh only faces internal to the refined blocks are conforming.

24 Jeremy E. Kozdon, Lucas C. Wilcox
SFIM, full-side SFIM, split-side AFIM, full-side AFIM, split-side E error (rate) error (rate) error (rate) error (rate)
Polynomial order N = 3 36 1.9 × 100 1.8 × 100 1.7 × 100 1.7 × 100 288 5.6 × 10−2 (5.1) 5.5 × 10−2 (5.0) 4.9 × 10−2 (5.1) 4.9 × 10−2 (5.1) 2304 1.4 × 10−3 (5.3) 1.4 × 10−3 (5.3) 1.2 × 10−3 (5.3) 1.2 × 10−3 (5.3) 18432 8.8 × 10−5 (4.0) 8.9 × 10−5 (4.0) 6.6 × 10−5 (4.2) 6.6 × 10−5 (4.2) 147456 7.5 × 10−6 (3.5) 8.6 × 10−6 (3.4) 4.7 × 10−6 (3.8) 4.7 × 10−6 (3.8) 1179648 6.9 × 10−7 (3.4) 9.6 × 10−7 (3.2) 3.6 × 10−7 (3.7) 3.6 × 10−7 (3.7)
Polynomial order N = 4 36 1.1 × 10−1 1.1 × 10−1 9.5 × 10−2 9.6 × 10−2 288 1.3 × 10−3 (6.5) 1.2 × 10−3 (6.5) 1.1 × 10−3 (6.5) 1.1 × 10−3 (6.5) 2304 4.3 × 10−5 (4.9) 4.3 × 10−5 (4.8) 3.5 × 10−5 (5.0) 3.4 × 10−5 (5.0) 18432 1.8 × 10−6 (4.6) 1.9 × 10−6 (4.5) 1.2 × 10−6 (4.9) 1.2 × 10−6 (4.8) 147456 7.7 × 10−8 (4.5) 9.8 × 10−8 (4.3) 4.3 × 10−8 (4.8) 4.3 × 10−8 (4.8)
Polynomial order N = 5 36 4.2 × 10−3 4.0 × 10−3 3.5 × 10−3 3.4 × 10−3 288 7.6 × 10−5 (5.8) 7.4 × 10−5 (5.8) 6.5 × 10−5 (5.8) 6.4 × 10−5 (5.7) 2304 1.5 × 10−6 (5.7) 1.5 × 10−6 (5.6) 1.2 × 10−6 (5.8) 1.2 × 10−6 (5.8) 18432 3.1 × 10−8 (5.6) 3.5 × 10−8 (5.4) 2.2 × 10−8 (5.8) 2.1 × 10−8 (5.8) 147456 6.8 × 10−10 (5.5) 9.3 × 10−10 (5.2) 4.1 × 10−10 (5.7) 4.1 × 10−10 (5.7)
Polynomial order N = 6 36 5.2 × 10−4 5.2 × 10−4 4.7 × 10−4 4.7 × 10−4 288 4.4 × 10−6 (6.9) 4.3 × 10−6 (6.9) 3.7 × 10−6 (7.0) 3.6 × 10−6 (7.0) 2304 4.3 × 10−8 (6.7) 4.5 × 10−8 (6.6) 3.2 × 10−8 (6.8) 3.2 × 10−8 (6.8) 18432 4.6 × 10−10 (6.5) 5.4 × 10−10 (6.4) 3.0 × 10−10 (6.7) 3.0 × 10−10 (6.7)
Polynomial order N = 7 36 3.9 × 10−5 3.7 × 10−5 3.1 × 10−5 3.0 × 10−5 288 2.2 × 10−7 (7.5) 2.2 × 10−7 (7.4) 1.8 × 10−7 (7.4) 1.8 × 10−7 (7.4) 2304 1.2 × 10−9 (7.5) 1.2 × 10−9 (7.5) 9.4 × 10−10 (7.6) 9.4 × 10−10 (7.6)
Table 1 Error and estimated convergence rates for a planewave propagating through an adapted, affine mesh. The base mesh and a log-log plot of the error for the SFIM with fullside mortar elements are shown in Fig. 2.
The material is taken to be homogeneous, isotropic with ρ = 2, μ = 3, and λ = 4. The solution is a planewave propagating in the x1-direction:
u1 = cos (2π (cpt + x1)) , u2 = cos (2π (cst + x1)) , u3 = cos (2π (cst + x1)) , (97)
with cp = √(λ + 2μ)/ρ and cs = √μ/ρ being the P- and S-wave speeds of the material. Here the solution is written in terms of the displacements, and the velocity and stresses are
vi = ∂ui
∂t , σij = λδij
∂uk ∂xk
+μ
( ∂ui ∂xj
+ ∂uj
∂xi
)
. (98)
Table 1 and Fig. 2 show convergence results for this planewave test for varying polynomial order N ; refinement of the mesh is done with bisection so that each hexahedral element is subdivided into 8 affine elements of equal size. The final time

Nonconforming DG 25
yx
z
102 103 104 105 106
10−10
10−8
10−6
10−4
10−2
100
Number of Elements
L2 Error
N =3 N =4 N =5 N =6 N =7
Fig. 2 (left) Base mesh for planewave test. (right) Log-log plot of E (number of elements) versus the L2 error (measured with the energy norm) for a mesh of affine (square) elements. Only the error for the full-side mortar is shown as the other three cases look similar. Numerical values and rates for all four methods are given in Table 1.
of the simulation is t = 20/cs, e.g., the planewave propagates around the unit cube 20 times. As Table 1 shows, four methods are considered for each N : SFIM with split-side mortar elements, SFIM with full-side mortar elements, AFIM with splitside mortar elements, and AFIM with full-side mortar elements. In all cases, the error in the solution is measured using the quadrature based energy norm (56). The numerical flux used for these tests is the upwind flux described by (40)–(47) with α = 1. As ca-
n be seen Table 1, all four methods converge at high-rates. That said, the AFIMs do have lower errors and improved rates. The two newly proposed methods seem to be tending towards convergence rates at order N (as opposed to N + 1/2), suggesting that some accuracy is lost with the improved stability properties.
5.2 Eigenvalue Spectrum for Periodic Box
To highlight the stability properties of the methods, we now consider the eigenvalue spectrum of each of the methods using the mesh and material properties of the previous periodic box test problem. Fig. 3 shows the eigenvalue spectrum for all the methods with an upwind flux on the base mesh (E| = 36); the spectrum is computed by forming the matrix A and then finding the eigenvalues with the MATLAB [1] eig command. Table 2 gives the maximum and minimum real part of the eigenvalue spectrum for all -
four methods with both the upwind (α = 1) and central (α = 0) flux. As can be seen, the SFIM with both split-side and full-side mortar elements are stable (in the sense that the maximum real part of the eigenvalue spectrum is close to zero) consistent with the energy analysis earlier in the paper. The AFIMs have

26 Jeremy E. Kozdon, Lucas C. Wilcox
maxk <(λk) mink <(λk) maxk |=(λk)|
Upwind Flux SFIM, full-side 6.91 × 10−13 −5.66 × 102 4.25 × 102 SFIM, split-side 4.81 × 10−13 −3.07 × 102 1.47 × 102 AFIM, full-side 7.19 × 10−05 −3.06 × 102 1.73 × 102 AFIM, split-side 6.19 × 10−05 −3.07 × 102 1.47 × 102
Central Flux SFIM, full-side 1.58 × 10−12 −9.32 × 10−13 4.89 × 102 SFIM, split-side 1.10 × 10−12 −8.08 × 10−13 2.07 × 102 AFIM, full-side 8.57 × 10−1 −8.57 × 10−1 2.08 × 102 AFIM, split-side 1.15 × 10 −1.15 × 10 2.07 × 102
Table 2 Table comparing the extrema of the real and imaginary parts of the eigenvalue spectrum for all four methods with both an upwind and central flux with N = 4 on the base mesh (|E| = 36). Eigenvalues are computed by forming the matrix and using the MATLAB [1] eig command. (See also Fig. 3.)
−600 −400 −200 0
−400
−200
0
200
400
<(λ)
=(λ)
SFIM, full-side
−600 −400 −200 0
−400
−200
0
200
400
<(λ)
=(λ)
SFIM,split-side
−600 −400 −200 0
−400
−200
0
200
400
<(λ)
=(λ)
AFIM, full-side
−600 −400 −200 0
−400
−200
0
200
400
<(λ)
=(λ)
AFIM, split-side
Fig. 3 Eigenvalue spectrum for the |E| = 36 mesh with polynomial order N = 4 upwind flux. (See Table 2 for the limits of the spectrum for these spectra.)

Nonconforming DG 27
positive real parts, even with the upwind flux, consistent with the energy analysis of Bui-Thanh and Ghattas which allows for energy growth (e.g., a positive, real part of the spectrum). For this mesh, which has a total of 40500 degrees of freedom, the AFIMs with the upwind flux have, respectively, 18 and 12 computed eigenvalues that have a real part larger than 10−12 with a maximum of, respectively, 7.19 × 10−05 and 6.40 × 10−04. As can be seen from both the Fig. 3 and Table 2, the spectral radiu-
s of the SFIM with full-side mortar elements is larger than the SFIM with split-side mortar elements (2.3 times larger with the upwind flux and 2.4 times larger with the central flux). The implication of this is that the largest time step that can be used for the SFIM with full-side mortar elements (on this mesh) is almost half the size of that of the SFIM with split-side mortar elements. Given that this particular mesh has a high nonconforming to conforming ratio (2/3 of the mortar is nonconformi-
ng) it is unclear whether this stiffness would be seen in practical simulations. For the upwind flux, both SFIM and AFIM with full-side mortar elements have twice as many eigenvalues with approximately zero real part as compared with the SFIM and AFIM with splitside mortar elements (∼ 8300 versus ∼ 4200 eigenvalues with real component less than 10−12 in magnitude). This suggests that the SFIM and AFIM with split-side mortar elements are slightly more dissipative across the nonconforming interfaces-
 (assuming that there is energy in the associated eigenfunctions of the solution). Since even on affine meshes with constant coefficients, AFIM does not guarantee an energy non-increasing property in the remainder of the paper we only consider SFIM. That said, AFIM is not energy increasing on all meshes when upwinding (α = 1) is used; every test we have run using AFIM with a central flux (α = 0) has significant energy growth.
5.3 Conservation, Constant Preserving, and Long-Time Energy Stability
To further explore the long-time stability as well as the conservation and constant preserving properties of SFIM a curvilinear mesh with heterogeneous material properties is now considered. Let Ω = [−1, 1]3 be periodic in all directions. The mesh is made curvilinear by introducing the following global coordinate transform
xi = rj Qij , (99)
where the coefficients Qij are the elements of the matrix
Q(β) =


cos2(β) − cos(β) sin(β) sin(β) sin(β) cos(β) 0 − cos(β) sin(β) sin2(β) cos(β)

 (100)
where β = (π/4) ∏3
i=1(1 − r2
i ). When r1 = r2 = r3 = 0 this corresponds to two rotations of π/4 and there is no rotation when |ri| = 1 for any i ∈ {1, 2, 3}. A crosssection of the mesh is shown in Fig. 4 and the same refinement patten as in the planewave test has been used (every other corner has been refined once for a total of 36 elements). At every degree of freedom of the mesh the material properties are

28 Jeremy E. Kozdon, Lucas C. Wilcox
Fig. 4 Cross-section of the skewed mesh defined by transform (99). The total number of elements in the mesh is |E| = 36
assigned using a pseudorandom number generator which results in a discontinuous, non-smooth description; the S-wave and P-wave speeds vary from 4.4 to 6.5 and 7.2 to 10.7, respectively. All of the tests in this section are run with polynomial order N = 4.
Three different approaches to handling the geometry are considered which we call the interpolated, watertight, and continuous metric approach. In the interpolated geometry handling, the coordinate transform (99) is sampled at the LGL nodal degrees of freedom. Since the transform is non-polynomial the mesh will be discretely discontinuous across nonconforming faces. In the watertight approach, the physical mesh is made continuous by interpolating the xi face values from larger faces and edges to sm-
aller faces and edges3. Finally, in the continuous metric approach the product SJ ni is made proportional across nonconforming faces and edges by ensuring that aliasing errors in the computation of these terms are incurred similarly; see Appendix C.
In order to test the long-time stability and the conservation properties of SFIM, the initial condition is generated with a pseudorandom number generator. This is done to widely distribute the energy in the solution across various eigenmodes of the
operator. The simulation is then run to time t = 10L/cs min where L = 2√3 is the
longest corner-to-corner distance in the domain and cs min = √20 is the slowest wave speed in the system; in the figures in this section time is normalized by t0 = L/cs min.
3 Nonconforming edge values need to be modified in order to ensure that new gaps and overlaps are not introduced along the edges of conforming elements.

Nonconforming DG 29
0 2 4 6 8 10
0.85
0.9
0.95
1
t/t0
E (t)/E (0)
SFIM, full-side mortar elements
0 2 4 6 8 10
0.85
0.9
0.95
1
t/t0
E (t)/E (0)
SFIM, split-side mortar elements
Central (α = 0) Upwind (α = 1)
Fig. 5 Energy dissipation in a pseudorandomly-heterogeneous curvilinear box comparing SFIM with interpolated geometry using the full-side and split-side mortar elements with the upwind (α = 1) and central (α = 0) flux.
Fig. 5 shows the energy in the solution versus time for SFIM with both fullside and split-side mortar elements using both the upwind and central fluxes when the coordinate transform (99) is interpolated. As can be seen, the upwind schemes quickly dissipate energy of the unresolved modes in the solution and then remain stable. The central method preserves the initial energy; there is an ∼ 10−4% energy lose for both central schemes but this is likely from dissipation of the Runge-Kutta scheme. This -
long time energy plot also suggests that with an upwind flux SFIM with split-side mortar elements is slightly more dissipative than with full-side mortar elements, with the split-side mortar elements dissipating 13% of the initial energy as compared with 18% with full-side mortar elements. That said the impacts of this on a real problem would depend on the distribution of the energy across the eigenmodes of the solution. In Fig. 5 only the interpolate curvilinear transform results are shown, and s-
imilar results are seen with the watertight and continuous metric handling of the geometry. In order to test the conservation properties of SFIM, we run the same test problem using the the interpolated, watertight, and continuous metric handling of geometry with both types of mortar elements using the central and upwind fluxes. The conservation error for all these runs is shown in Fig. 6. We define the conservation error as
conservation error =
∑
i
eρvi +
∑
i,j
e kl , (101)
with the error in each component defined as
eρvi =
∣ ∣ ∣ ∣ ∣
∫
Ω ρ(vi − v0
i)
∫
Ω ρv0
i
∣ ∣ ∣ ∣ ∣
, e ij =
∣ ∣ ∣ ∣ ∣
∫
Ω Sijkl(σkl − σ0
kl)
∫
Ω Sijklσ0
kl
∣ ∣ ∣ ∣ ∣
. (102)
Here v0
i and σ0
kl are the initial values and the integrals are evaluated using the above outlined quadrature approximations. Thus, the conservation error is the sum of the normalized conservation error for each conserved variable. As can be seen when the metric terms are made continuous the scheme is conservative.

30 Jeremy E. Kozdon, Lucas C. Wilcox
0 2 4 6 8 10
0
1 · 10−3
2 · 10−3
3 · 10−3
4 · 10−3
5 · 10−3
t/t0
conservation error
Upwind SFIM, split-side mortar elements
0 2 4 6 8 10
0
1 · 10−3
2 · 10−3
3 · 10−3
4 · 10−3
5 · 10−3
t/t0
conservation error
Upwind SFIM, full-side mortar elements
continuous metric watertight interpolated
0 2 4 6 8 10
0
1 · 10−3
2 · 10−3
3 · 10−3
4 · 10−3
5 · 10−3
t/t0
conservation error
Central SFIM, split-side mortar elements
0 2 4 6 8 10
0
1 · 10−3
2 · 10−3
3 · 10−3
4 · 10−3
5 · 10−3
t/t0
conservation error
Central SFIM, full-side mortar elements
Fig. 6 Conservation error for both the full-side and split-side mortar with both upwinding (α = 1) and central flux (α = 0) for the continuous metric term, watertight, and interpolated handling of geometry. The conservation error is defined by (101).
0 2 4 6 8 10
0
1 · 10−3
2 · 10−3
3 · 10−3
4 · 10−3
t/t0
conservation error
Upwind SFIM, split-side mortar elements
strain error momentum error
0 2 4 6 8 10
0
1 · 10−3
2 · 10−3
3 · 10−3
4 · 10−3
5 · 10−3
t/t0
conservation error
Central SFIM, split-side mortar elements
Fig. 7 Conservation errors for velocities and strains for SFIM using a split-side mortar with an upwind and central flux with interpolated mesh.
To demonstrate the origin of the conervation error, in Fig. 7 the conservation error is shown separately for the strain (∑
ij e ij ) and momentum (∑
i eρvi ) components using the interpolated geometry approach. As can be seen the conservation error is coming purely from lack of conservation of the strain. As noted in §4.4, the momentum components are conservative by construction since the velocity update (53) uses a weak derivative.

Nonconforming DG 31
0 2 4 6 8 10
0
5 · 10−3
1 · 10−2
1.5 · 10−2
2 · 10−2
t/t0
normalized error
Upwind SFIM, split-side mortar elements
continuous metric watertight interpolated
0 2 4 6 8 10
0
5 · 10−3
1 · 10−2
1.5 · 10−2
2 · 10−2
t/t0
normalized error
Upwind SFIM, full-side mortar elements
0 2 4 6 8 10
0
5 · 10−3
1 · 10−2
1.5 · 10−2
2 · 10−2
t/t0
normalized error
Central SFIM, split-side mortar elements
0 2 4 6 8 10
0
5 · 10−3
1 · 10−2
1.5 · 10−2
2 · 10−2
t/t0
normalized error
Central SFIM, full-side mortar elements
Fig. 8 Constant preservation error for both the full-side and split-side mortar with both upwinding (α = 1) and central flux (α = 0) for the continuous metric term, watertight, and interpolated handling of geometry. The normalized error is the L2 error in the solution normalized by the initial energy.
In order to test the constant preserving properties of SFIM, the initial condition is made constant:
v1 = 1, v2 = 2, v3 = 3, σ11 = 4, σ12 = 5, σ13 = 6, (103)
σ22 = 7, σ23 = 8, σ33 = 9, (104)
with the material properties still assigned pseudorandom values. Fig. 8 shows the L2 error normalized by the initial energy in the solution for different choices of schemes. As can be seen both the interpolated and watertight geometry treatment do not exactly preserve constants, but the continuous metric treatment does for both the full-side and split-side mortar regardless of numerical flux. Unlike in the conservation error, the constant preservation error cannot be separated into velocity and st-
ress errors since once one component moves away from the constant all the components are affected.
5.4 Mode of a Heterogeneous Spherical Shell
To further explore the accuracy of SFIM on curved meshes, an adapted spherical shell is considered. The spherical shell is initially meshed using 6 hexahedral ele

32 Jeremy E. Kozdon, Lucas C. Wilcox
Fig. 9 Cross-section of the base mesh for the spherical shell test problem showing both the psuedorandom refinement and the rotation of outside of the shell with respect to the inside. Total number of elements in the base mesh is |E| = 745.
8 10 12 14
1
2
3
4
5
r
ρ
λ μ
8 10 12 14
−2
0
2
4
6
r
ur σrr σθθ , σφφ
Fig. 10 (left) Material properties as a function of r for the spherical shell test problem. (right) Non-zero, modal solution fields (in spherical coordinates) at time t = 0 for the spherical shell test problem.
ments, and these elements are then refined using a pseudorandom number generator to produce a non-conforming base mesh with |E| = 745 elements. Since the common (hexahedral) decomposition of a spherical shell would result in one of the grid lines being aligned with the radial direction, the complexity of the problem is increased by rotating the outside of the shell by one radian with respect to the inside of the shell (along the polar angle). A cross-section through the center of the sphere of the-
 mesh is shown in Fig. 9. Only the continuous metric approach for geomtry is considered here. The material properties are taken to be
ρ = 2 + cos
( 2πr 10
)
, μ = 50
10 + r , λ = 10 exp
( −r 10
)
; (105)
see also the left panel of Fig. 10. To derive a modal solution with these material parameters, it is assumed that when written in spherical coordinates, only the radial

Nonconforming DG 33
N =4 N =5 N =6 N =7 |E| error (rate) error (rate) error (rate) error (rate)
SFIM, full-side mortar elements 745 8.3 × 10−0 (0.0) 3.2 × 10−0 (0.0) 8.7 × 10−1 (0.0) 2.3 × 10−1 (0.0) 5960 3.2 × 10−1 (4.7) 4.9 × 10−2 (6.0) 7.6 × 10−3 (6.8) 1.1 × 10−3 (7.6) 47680 1.1 × 10−2 (4.9) 9.1 × 10−4 (5.7) 7.5 × 10−5 (6.7) 5.5 × 10−6 (7.7) 381440 4.1 × 10−4 (4.7) 1.8 × 10−5 (5.7) 7.5 × 10−7 (6.6) 2.7 × 10−8 (7.6)
SFIM, split-side mortar elements 745 8.3 × 10−0 (0.0) 3.1 × 10−0 (0.0) 8.5 × 10−1 (0.0) 2.3 × 10−1 (0.0) 5960 3.2 × 10−1 (4.7) 4.8 × 10−2 (6.0) 7.5 × 10−3 (6.8) 1.1 × 10−3 (7.6) 47680 1.0 × 10−2 (4.9) 8.9 × 10−4 (5.7) 7.2 × 10−5 (6.7) 5.3 × 10−6 (7.7) 381440 3.8 × 10−4 (4.8) 1.7 × 10−5 (5.7) 6.9 × 10−7 (6.7) 2.5 × 10−8 (7.7)
Table 3 Error and estimated convergence rates for the spherical shell using SFIM with both full-side and split-side mortar elements using an upwind flux. A log-log plot of these errors is shown in Fig. 11.
displacement is non-zero. The radial displacement is taken to be of the form
ur = cos(t)φ(r), (106)
e.g., the temporal and spatial dependence are seperable. With this, in spherical coordinates the components of the stress tensor are
σrr = (λ + 2μ) ∂ur
∂r + 2μ ur
r , σθθ = σφφ = 2 (λ + μ) ur
r + λ ∂ur
∂r , (107)
with σrθ = σrφ = σθφ = 0. To solve this the MATLAB package Chebfun [8] is used, and R1 and R2 are chosen so that σrr = 0 is zero at the inner and outer radii of the shell; see Appendix B for details. The right panel of Fig. 10 shows ur, σrr, σθθ, and σφφ as functions of r at time t = 0. To implement the solution, the displacements are first converted to Cartesian coordinates,
ui = xi
r ur, (108)
where r = √xixi is the radial distance, and then the velocities and stresses are computed using (98). In Table 3 and Fig. 11 error and convergence results are given for this problem for varying polynomial orders for SFIM with both full-side and split-side mortar elements using the upwind flux. The final time for the simulation is t = 6π, and thus three oscillations of the solution have been considered. As can be seen in the table and figure, the method performs similarly to the previous planewave -
test when the elements are curved and the material properties are heterogeneous.
6 Conclusions
In this work we have presented a skew-symmetric, semi-discretely energy stable discontinuous Galerkin method on nonconforming, non-affine meshes. The two key ideas that lead to semi-discrete energy stability were:

34 Jeremy E. Kozdon, Lucas C. Wilcox
101 102 103
10−8
10−6
10−4
10−2
100
Number of Elements
L2 Error
N =4 N =5 N =6 N =7
Fig. 11 Log-log plot of |E| (number of elements) versus the L2 error (measured with the energy norm) for a mesh the spherical shell test problem for SFIM with full-side mortar elements (solid lines) and split-side mortar elements (dashed lines) with the upwind flux. Numerical values for the error and rates are given in Table 3.
– writing the variational problem in skew-symmetric form so that integration-byparts was not needed in the energy stability analysis; and – evaluating all the surface integrals on the mortar elements (as opposed to volume elements faces).
Both of these steps ensure that variational crimes, namely inexact integration, do not affect the solution in a manner that results in energy growth. Importantly, skew-symmetry is beneficial for nonconforming meshes even for constant coefficient problems on affine meshes when the integration is inexact, e.g., Legendre-GaussLobatto quadrature on tensor product quadrilateral and hexahedral elements (DGSEM); for non-affine meshes and/or nonconstant coefficients it is now well-known that skew-symmetry-
 is needed even for conforming meshes. We have also shown how the SFIM formulation can be made both conservative and constant preserving by adding a set of accuracy and consistency constraints on the stiffness and projection operators. Most of the additional requirements will be satisfied naturally by any higher-order method (such as the exact representation and differentiation of constants), but the existence of a discrete divergence property (67) requires careful handling of the metric terms on -
non-affine meshes; in Appendix C we give one approach to satisfying the discrete divergence theorem for DG-SEM. In the results we presented two mortar approaches for handling nonconforming interfaces which we called the full-side and split-side mortar; see Fig. 1. When full-side mortars are used, mortar elements on nonconforming interfaces conform to the larger element face, thus multiple small faces connect to a single mortar element. When split-side mortars are used, the smaller faces conform to-
 the mortar elements, thus the larger element faces are connected to multiple mortar elements.

Nonconforming DG 35
Both the split-side and full-side mortars are energy stable with SFIM and can be made conservative and constant preserving. In terms of accuracy observed, the two methods performed similarly with the full-side mortar being slightly better in the affine, constant coefficient test and the split-side mortar performing marginally better for the non-affine, variable coefficient problem. The one big difference between the two mortar approaches was the eigenvalue spectrum, with the full-side mortar havin-
g a spectral radius more than twice as large as the split-side for the problem considered. Given these results, and the fact that the split-side mortar (in some sense) is the most natural approach for discontinuous Galerkin methods, at this time we would recommend the split-side mortar over the full-side. That said, the tests here represent only a few out of the infinite number of problems that could be considered. Amongst the important problems not considered here are the impact the mortar elemen-
ts have on spurious solution modes and whether either approach is more accurate for interface waves.
Acknowledgements Jeremy E. Kozdon was partially supported by National Science Foundation Award EAR-1547596 and Office of Naval Research Award N0001416WX01290. Computational resources were provided in part by National Science Foundation Award OAC-1403203. The authors would like to thank the two anonymous reviewers for their feedback, particularly the recommendation to consider the conservation and constant state preserving properties of the method.
A Construction of L2-Projection Operators
Here the construction of the mortar projection operators is discussed, namely the construction of Pm,e for some m ∈ M and e ∈ Em. Of particular interest is when the mortar space does not support all the functions that the connected element faces support. For example, in the center panel of Fig. 1 if mortar m2 uses polynomials up to degree N as the approximation space then it cannot support the discontinuous functions defined by functions on the connected faces of e2 and e3. For an m ∈ M and e ∈ Em-
, let mˆ e be the portion of the reference mortar element mˆ that corresponds to the intersection in physical space of m and ∂e, that is mˆ e = rm(m ∩ ∂e). The projection operator in Pm,e is then defined so that for a given qe ∈ Vˆ e the following holds for
all φm ∈ Uˆ m:
∫
mˆ
φmqm,e =
∫
mˆ e
φmqe, (109)
where qm,e = Pm,eqe. In the right-hand side integrand qe is evaluated on the reference mortar, not the element boundary, and thus qe = qe (xe (re (xm (r)))) with r being the integration variable. Note the surface Jacobian determinant is not included in the definition of the projection operator given here, and thus the projection operator is defined on the straight-sided reference element. In the results, exact integration is used to construct Pm,e, so that there are no variational crimes in the di-
screte representation of Pm,e defined from (109) (i.e., Legendre-Gauss-Lobatto (LGL) quadrature is not used). Moreover, since the basis functions are tensor product, the L2-projection operators can also be constructed as tensor product operators, and only onedimensional projection operators are needed. Thus, since the nonconforming interfaces in the results are two-to-one, only projection operators from the bottom, Pb, and top, Pt, halves of a 1-D element are required. The bottom and top projectio-
n operators then satisfy
∫1
−1
φ Pbq =
∫0
−1
φ q,
∫1
−1
φ Ptq =
∫1
0
φ q, (110)

36 Jeremy E. Kozdon, Lucas C. Wilcox
for all polynomials q and φ of degree N . To define the discrete operators Pb and Pt, let φ be the evaluation of φ at the LGL quadrature nodes on the interval [−1, 1]. Similarly, let qb be the evaluation of q at LGL quadrature
nodes once they have been scaled to be between [−1, 0] and Ib interpolate φ to these same nodes; similar definitions are used for qt and It except on the interval [0, 1]. Then if M is the exact mass matrix for integrating two polynomials of degree N evaluated at the LGL quadrature nodes in [−1, 1], then (110) is discretely
φT MPbqb = 1
2 φT IT
b Mqb, φT MPtqt = 1
2 φT IT
t Mqt, (111)
which holds for all φ, qt, and qb. Thus,
Pb = 1
2 M−1IT
b M, Pt = 1
2 M−1IT
t M. (112)
For clarity, the derivations above are given for two-to-one nonconforming interfaces. The method generalizes to the many-to-one nonconforming interfaces as well and the derivation of the operators is similar to the two-to-one case.
B Construction of Modal Solution on the Heterogeneous Spherical Shell
To construct a modal solution in the radial heterogeneous spherical shell, the equations of isotropic elasticity are considered in spherical coordinates. Since only the radial displacement is non-zero and the displacement is of the form ur = cos(t) φ(r), these reduce to solving the following boundary value problem:
0 = ρ φ + dσrr
dr + 1
r (2σrr − σθθ − σφφ) , (113)
σrr = (λ + 2μ) dφ
dr + 2
r λ φ, (114)
σθθ = σφφ = λ dφ
dr + 2
r (λ + μ) φ, (115)
with σrr = 0 at r = R1 and r = R2. We note that the solution to this problem is not unique and for the test problem we just need to find a particular solution to the equation. To solve (113) the MATLAB Chebfun package [8] was used. To find a nontrivial solution, the initial value problem with values for φ(0) = 0 and dφ
dr (0) = − 1
3 is solved and then the domain
of the solution is chosen to be between R1 and R2, the first two roots of the resulting σrr field. The Chebfun script along with the data necessary for constructing the high-order polynomial interpolant are available at the GitHub repository https://github.com/bfam/spherical_shell.
C Discrete Divergence Theorem for Tensor Product Hexahedral Elements with LGL Quadrature
In this appendix stiffness matrices that satisfy (67) are constructed for the tensor product hexahedral elements using Legendre-Gauss-Lobatto (LGL) quadrature. The key step in ensuring this for curvilinear meshes is the construction of the metric terms. Here, we assume that there is a
single polynomial order for the entire mesh N , so that Vˆ e = QN,3 for all e ∈ E and only the three-dimensional case is considered. The mortar space is taken to be tensor product polynomial
with Uˆ m = QN,2 for all m ∈ M and the quadrature rule on the mortar is the tensor product LGL quadrature. Across nonconforming mesh interfaces (and edges) the larger face (or edge) is referred to as the full face (or edge) and the smaller faces (or edges) as the hanging faces (or edges). The

Nonconforming DG 37
mortar element is always assumed to conform to the face on the minus side of the mortar. For mortar elements between conforming faces the minus side is arbitrary. When full-side mortars are used the minus sides of nonconforming mortar elements are the full faces and when split-side mortars are used minus sides are the hanging faces. Since mortar elements conform to one of the volume faces, the metric terms on the mortar (surface Jacobian determinant and unit normal vector) will match the element f-
ace to which a mortar conforms. The four key step we use to satisfy (67) are:
– the mesh is made discretely watertight; – the metric terms are computed using a curl invariant form [13] which avoids the need for a discrete product rule; – aliasing errors along nonconforming faces and edges are incurred in a similar manner on all connected elements; and – metric products are decreased in one polynomial order to ensure that certain face integrals are exact under LGL quadrature.
C.1 Properties of LGL Quadrature
Before discussing the construction of the metric terms and stiffness matrices, we review some properties of LGL quadrature. For q, p, J ∈ QN,3 the LGL approximation of the inner product is
∫1
−1
∫1
−1
∫1
−1
Jpq ≈
N
∑
i=0
N
∑
j=0
N
∑
k=0
ωiωj ωkJ (ξi, ξj , ξk) p (ξi, ξj , ξk) q (ξi, ξj , ξk)
= pT J
(Wˆ ⊗ Wˆ ⊗ Wˆ
)
q
= pT JMq. (116)
Here, ωi are the quadrature weights and ξk the quadrature nodes which have the property that ξ0 = −1 and ξN = 1. The vectors p and q are the stacking of the p and q at the nodal locations;
below we assume that the stacking has been done so that p (ξi, ξj , ξk) is element i + 1 + jN + kN 2 of p (i.e., the first dimension is the fastest). Similarly, the diagonal matrix J approximates J at the quadrature nodes (ordering is the same as the vectors p and q). The quadrature weights have been assembled into the diagonal matrix Wˆ with element i, i being ωi−1 and ⊗ being the matrix Kronecker product. We note that the LGL integral approximation (116) will only be exact if the product Jpq ∈ Q-
2N−1,3. Let Dj be the exact derivative matrix in the rj direction: if q ∈ QN,3 and p = ∂q/∂rj then
Dj q = p. (117)
If ˆD is the one-dimensional LGL derivative matrix then
D1 = I ⊗ I ⊗ ˆD, D2 = I ⊗ ˆD ⊗ I, D3 = ˆD ⊗ I ⊗ I, (118)
with I being the (N + 1) × (N + 1) identity matrix. Since differentiation decreases the polynomial order by one, the LGL differentiation and quadrature matrices satisfy the one-dimensional summation-by-parts property [18]:
Wˆ ˆD + ˆDT Wˆ = eN eT
N − e0eT
0 , e0 =

   
1 0
...
0

   
, eN =

   
0
...
0 1

   
. (119)

38 Jeremy E. Kozdon, Lucas C. Wilcox
For the three-dimensional operators the following approximation of the divergence theorem holds on the reference element:
pT MD1q + pT DT
1 Mq = pT (Wˆ ⊗ Wˆ ⊗
(
eN eT
N − e0eT
0
))
q, (120)
pT MD2q + pT DT
2 Mq = pT (Wˆ ⊗
(
eN eT
N − e0eT
0
)
⊗ Wˆ
)
q, (121)
pT MD3q + pT DT
3 Mq = pT ((
eN eT
N − e0eT
0
)
⊗ Wˆ ⊗ Wˆ
)
q. (122)
The right-hand sides of the above equations are approximations of surface integrals along the six faces of the reference element. In order to make this explicit we number the faces of the element as:
face 1 is the face with r1 = −1, face 2 is the face with r1 = +1, face 3 is the face with r2 = −1, face 4 is the face with r2 = +1, face 5 is the face with r3 = −1, face 6 is the face with r3 = +1, and define the value of the volume vector on the faces as
pe,1 =
(ˆI ⊗ Iˆ ⊗ eT
0
)
pe = L1pe, pe,2 =
(Iˆ ⊗ Iˆ ⊗ eT
N
)
pe = L2pe, (123)
pe,3 =
(ˆI ⊗ eT
0 ⊗ ˆI
)
pe = L3pe, pe,4 =
(Iˆ ⊗ eT
N ⊗ Iˆ
)
pe = L4pe, (124)
pe,5 =
(
eT
0 ⊗ ˆI ⊗ ˆI
)
pe = L5pe, pe,6 =
(
eT
N ⊗ ˆI ⊗ Iˆ
)
pe = L6pe. (125)
With this notation (120)–(122) can be rewritten as
(pe)T MD1qe + (pe)T DT
1 Mqe = (pe,2)T W ̄ qe,2 − (pe,1)T W ̄ qe,1, (126)
(pe)T MD2qe + (pe)T DT
2 Mqe = (pe,4)T W ̄ qe,4 − (pe,3)T W ̄ qe,3, (127)
(pe)T MD3qe + (pe)T DT
3 Mqe = (pe,6)T W ̄ qe,6 − (pe,5)T W ̄ qe,5, (128)
with W ̄ = Wˆ ⊗ Wˆ being the surface quadrature rule.
C.2 Stiffness Matrices and Element Based Relationships
We now define the stiffness matrices for an e ∈ E as
Se
j = Jere
k,j MDk, (129)
where the diagonal matrices Je and re
k,j are approximations of the Jacobian determinant and the metric derivative ∂rk/∂xj , respectively, at the nodal degrees of freedom. As discussed below, the product J ∂rk
∂xj is computed from the of the metric derivatives ∂xj /∂rk. From (120)–(122) it follows that
1T Se
j qe + 1T Jere
k,j DT
k Mqe = 1T Jere
k,j MDkqe + 1T Jere
k,j DT
k Mqe
= − 1T Jere
1,j
(L1)T W ̄ qe,1 + 1T Jere
1,j
(L2)T W ̄ qe,2
− 1T Jere
2,j
(L3)T W ̄ qe,3 + 1T Jere
2,j
(L4)T W ̄ qe,4 (130)
− 1T Jere
3,j
(L5)T W ̄ qe,5 + 1T Jere
3,j
(L6)T W ̄ qe,6.
If we define the surface Jacobian determinant and outward normal on the faces as
Se,1
J ne,1
j = −L1Jere
1,j 1, Se,2
J ne,2
j = L2Jere
1,j 1, (131)
Se,3
J ne,3
j = −L3Jere
2,j 1, Se,4
J ne,4
j = L4Jere
2,j 1, (132)
Se,5
J ne,5
j = −L5Jere
3,j 1, Se,6
J ne,6
j = L6Jere
3,j 1, (133)

Nonconforming DG 39
then relation (130) simplifies to
1T Se
j qe + 1T Jere
k,j DT
k Mqe =
6
∑
f =1
(
Se,f
J ne,f )T W ̄ qe,f . (134)
The vector ne,f
j is the outward unit normal to the element face at the quadrature nodes and the diagonal matrix of surface Jacobian determinants Se,f
J is the normalization so that ne,f
j ◦ne,f
j =1 with ◦ being the componentwise (Hadamard) product of two vectors. With exact math, e.g., no aliasing errors, the following metric identity [23]
Je ∂re
k
∂xj
= ∂xe
j+1
∂rk+1
∂xe
j−1
∂rk−1
− ∂xe
j+1
∂rk−1
∂xe
j−1
∂rk+1
(no summation over j and k), (135)
with plus and minus for subscripts j and k defined cyclically on the set {1, 2, 3}, can be used to show that
∂ ∂rk
(
Je ∂re
k
∂xj
)
= 0. (136)
Hence, if we can show that discretely that
Dk
(
Je re
k,j 1
)
= 0, (137)
then we will have shown that discretely the divergence theorem holds at the element level; this is not quite (67) since it does not involve the mortar elements. Unfortunately, using the metric identities in the form of (135) to show (136) requires the use of the product rule, and in general this does not hold discretely for all pe, qe ∈ QN,3:
Dk (pe ◦ qe) 6= (Dkpe) ◦ qe + pe ◦ (Dkqe) . (138)
Fortunately, if instead of using (135) the equivalent curl invariant form [13] is used,
Je ∂re
k
∂xj
=1
2
∂
∂rk+1
(
xe
j+1
∂xe
j−1
∂rk−1
− ∂xe
j+1
∂rk−1
xe
j−1
)
(139)
−1
2
∂
∂rk−1
(
xe
j+1
∂xe
j−1
∂rk+1
− ∂xe
j+1
∂rk+1
xe
j−1
)
, (no summation over j and k),
it can be shown that (136) holds without invoking the product rule. To show that this form is beneficial discretely, we define
ζ ̄e
j,k = xe
j+1
∂xe
j−1
∂rk
− ∂xe
j+1
∂rk
xe
j−1 (no summation over j), (140)
so that the curl invariant metric identities (139) can be rewritten as
Je ∂re
k
∂xj
=1
2
( ∂ζ ̄e
j,k−1
∂rk+1
− ∂ζ ̄e
j,k+1
∂rk−1
)
(no summation over k); (141)
here we have added the overbar accent so that once the final discrete mesh is defined it can be
unaccented since in general ζ ̄e
j,k ∈/ QN,3. Let ζe
j,k ∈ QN,d be some approximation of ζ ̄e
j,k at the nodal degrees of freedom (the details of how we approximate these terms will be given below).
The discrete approximation of Je ∂re
k
∂xj can be defined directly from (141) as
Je re
k,j = diag
(1
2
(
Dk+1 ζ e
j,k−1 − Dk−1ζe
j,k+1
)
)
, (no summation over k), (142)

40 Jeremy E. Kozdon, Lucas C. Wilcox
where the operator diag (·) makes a diagonal matrix from a vector (with component n of the vector being the n, n element of the matrix). Direct computation of (137) then gives
Dk
(
Je re
k,j 1
)
=
3
∑
k=1
1 2
(
Dk Dk+1 ζ e
j,k−1 − DkDk−1ζe
j,k+1
)
=
3
∑
k=1
1 2
(
Dk Dk+1 ζ e
j,k−1 − Dk+1Dkζe
j,k−1
)
=
3
∑
k=1
1 2
(
Dk Dk+1 ζ e
j,k−1 − DkDk+1ζe
j,k−1
)
= 0, (143)
where the second equality is a shifting of the summation index in the second term by +1 (which is permissible since all values of k are covered by the sum) and the third equality follows from the commutative property of the derivative operators: DkDj = Dj Dk. Thus, (130) becomes
1T Se
j qe =
6
∑
f =1
(
Se,f
J ne,f )T W ̄ qe,f , (144)
and the divergence theorem holds at the element level once we have specified how ζe
j,k is approx
imated from ζ ̄e
j,k. Importantly, the relationship (144) holds for any approximation of ζe
j,k and this fact will be exploited to ensure that the discrete divergence relation (67) holds. Namely if we can show that the metric terms can be constructed so that
(
Se,f
J ne,f
j
)T W ̄ qe,f = ∑
m∈Me,f
(
nm[e]
j
)T
WmPm,eqe, (145)
then we will have shown that (67) holds; here the set Me,f ⊂ Me is the set of mortar elements connected to face f of element e. Recall that Wm includes the surface Jacobian determinants, and since the mortar quadrature rule is the tensor product LGL quadrature
Wm = Sm
J W ̄ , (146)
where Sm
J is a diagonal matrix of mortar-based surface Jacobian determinants. For an m ∈ Me,f
we define the projection operator Pm,e to first interpolate to face f followed by projection from face f to m, which allows us to write Pm,e = Pm,e[f]Lf where Pm,e[f] is the projection from face f of element e to mortar m. With these definitions, relation (145) becomes
(
Se,f
J ne,f
j
)T W ̄ qe,f = ∑
m∈Me,f
(
Sm
J nm[e]
j
)T W ̄ Pm,e[f]qe,f , (147)
which is a discrete statement on the accuracy of the projection from e to m when geometry is included. To ensure that (147) is satisfied, we require that Sm
J nm[e]
j , Se,f
J ne,f
j ∈ QN−1,2
and that for connected faces and mortars these are computed in a consistent manner. With Sm
J nm[e]
j , Se,f
J ne,f
j ∈ QN−1,2 the quadrature approximations in (147) are exact since the prod
ucts in the integral are in Q2N−1,2 which are integrated exactly by the tensor product LGL quadrature rule. Here it is worth noting that one cannot simply interpolate the surface Jacobian determinant and normal vectors from the full faces to the hanging faces. Though this would result in (147), it would cause the volume and surface metrics to be inconsistent so that (130) and (134) are no longer equivalent. Thus instead of modifying Se,f
J ne,f
j directly. We modify ζe
j,k so that the surface, volume, and mortar metrics are consistently calculated.

Nonconforming DG 41
C.3 Approximation of Metric Terms
Before proceeding to the discussion of the approximation of ζe
j,k it is necessary to define how the geometry transform is handled. Let x ̃e
j ∈ QN,3 be the evaluation of the coordinate mapping x ̄e
j; the tilde and bar accents are added here so that the final coordinate points can be unaccented. As noted in the text, across nonconforming faces x ̃e
j may not be continuous, thus we let xe
j ∈ QN,3
be a discretely watertight version of the geometry. In our code, we make the mesh watertight by interpolating x ̃e
j across nonconforming faces and edges from the full faces and edges to hanging
faces and edges4; degrees of freedom interior to the element are not modified in the procedure used to make the mesh watertight. It is from xe
j that we construct the metric terms. By (131)–(133) it follows that:
ζe
j,1 affects Se,f
J ne,f
j for faces f = 3, 4, 5, 6,
ζe
j,2 affects Se,f
J ne,f
j for faces f = 1, 2, 5, 6,
ζe
j,3 affects Se,f
J ne,f
j for faces f = 1, 2, 3, 4,
which, along with (142), implies that Se,f
J ne,f
j ∈ QN−1,2 if
ζe
j,1 ∈ QN−1 ⊗ QN ⊗ QN along faces f = 3, 4, 5, 6, (148)
ζe
j,2 ∈ QN ⊗ QN−1 ⊗ QN along faces f = 1, 2, 5, 6, (149)
ζe
j,3 ∈ QN ⊗ QN ⊗ QN−1 along faces f = 1, 2, 3, 4; (150)
namely ζe
j,k is one polynomial order lower when interpolated to faces that it affects. We initially calculate in each element e
ζ ̃e
j,k = PN →N −1
k
(xe
j+1 ◦ (Dkxe
j−1
) − (Dkxe
j+1
) ◦ xe
j−1
) . (151)
Here the matrix PN→N−1
k , and its continuous counterpart PN→N−1
k , is an L2-projection op
erator which removes the highest mode in the rk-direction along faces which are parallel to
rk. Thus, PN→N−1
1 modifies ζ ̃e
j,1 along faces 3, 4, 5, and 6 so that with respect to r1 it is a polynomial of degree N − 1; the dependence of ζ ̃e
j,1 on r2 and r3 is unmodified by PN→N−1
1. The quantities ζe
j,k are then the interpolation and scaling of ζ ̃e
j,k from the full faces and edges to the hanging faces and edges. To make this concrete, suppose that face 1 of element e is hanging,
we modify ζ ̃e
j,2 and ζ ̃e
j,3 on face 1 so that the surface Jacobian determinant times the normal vector will be consistent. Let face f ′ of element e′ be the full face for this nonconforming interface.
We replace values of ζ ̃e
j,2 on degrees of freedom along face 1 of e by the values interpolated from face f ′ of element e′ as
ζe
j,2 =
(
I − (L1)T L1) ζ ̃e
j,2 + 1
2
(L1)T Ie′→eLf ′ ζ ̃e′
j,k′
2 . (152)
Here k′
2 is the reference direction of element e′ that corresponds to r2 of element e. The matrix
Ie′→e interpolates from the full face of e′ to the hanging face of e as well as taking into account any flips or rotations needed to transform between the two elements reference directions. For
instance, if face 1 of e was in the lower-left quadrant of the full face Ie′→e would interpolate from tensor product LGL points over [−1, 1] × [−1, 1] to points over [−1, 0] × [−1, 0]. The scaling by 1/2 in (152) is needed in order to transform the derivative from eˆ′ to eˆ. The same procedure can be applied to calculate ζe
j,3 from ζ ̃e
j,3 and ζ ̃e′
j,k′
3
. Since ζe
j,1 does not affect Se,1
J ne,1
j we set
ζe
j,1 = ζ ̃e
j,1 .
4 In three-dimensions interpolation across nonconforming edges is necessary so that gaps and overlaps do not occur between conforming faces connected to nonconforming edges.

42 Jeremy E. Kozdon, Lucas C. Wilcox
For hanging edges, a similar procedure is used, except that only one of the ζe
j,k values needs
to be updated. For instance if the edge between faces 1 and 3 is hanging, ζe
j,3 needs to be defined from ζ ̃e
j,3 and ζ ̃e′
j,k′
3
where element e′ has a full edge corresponding to hanging edge of element e.
When multiple faces and edges are hanging, the procedure outlined above can be applied iteratively to form ζe
j,k. In our implementation we found it convenient to have element e mimic the calculation that e′ performs along the corresponding full faces and edges. This alternate interpretation makes it clear that our approach ensures that aliasing errors in the calculation of ζe
j,k are incurred in a similar manner across hanging faces and edges, and that the projection out of the highest modes is done over the same domain. We now show that the above approach to the computation of the metric terms results in (147). We first consider the minus side of a mortar element. Namely, if m ∈ Me,f with e ∈ E−m, by definition Sm
J nm[e]
j = Se,f
J ne,f
j (since mortar elements always conform to the
minus side faces). It follows that Pm,e[f] is an identity operation and that Me,f = {m}, so (147) follows immediately. Thus, all that remains is to show that (147) holds for elements on the plus side of the mortar. In the remaining we are going to assume that face 1 of element e is on the plus side of all mortars in Me,1. Additionally, without loss of generality we assume that for each m ∈ Me,1 that the minus side element e′ ∈ E−m is connected to m through face 2; by definition e′ is the only elem-
ent on the minus side of m. We also assume that reference directions are the same for both e and e′, so that the ordering of there degrees of freedom is the same. These assumptions mean that Se,1
J ne,1
j is calculated from ζe
j,2 and ζe
j,3 and that for each m ∈ Me,1 and e′ ∈ E−m that
the product Se′,1
J ne′,1
j = Sm
J nm
j is calculated from ζe′
j,2 and ζe′
j,3 .
Let face 1 of element e be on a conforming interface. Let m ∈ Me,1 be the mortar element that face 1 of e is connected to and let face 2 of e′ be the element face on the minus side of m. By the orientation assumption it follows that
L1 ζ e
j,2 = L2ζe′
j,2, L1ζe
j,3 = L2ζe′
j,3; (153)
namely these quantities are continuous across the interface. Note that Se,1
J ne,1
j and Se′,2
J ne′,2
j
are calculated from Jere
1,j and J e′ re′
1,j , respectively; see (131). This means that Se,1
J ne,1
j= −S e′ ,2
J ne′,2
j since J e′ re′
1,j and J e′ re′
1,j are calculated using derivatives in the r2 and r3 directions
(i.e., directions along faces 1 and 2), and since Se′,2
J ne′,2
j = Sm
J nm
j it follows that Sm
J nm[e]
j= −Sm
J nm[e]
j = Se,1
J ne,1
j and
(
Se,1
J ne,1
j
)T W ̄ qe,1 =
(
Sm
J nm[e]
j
)T W ̄ qe,1; (154)
in this case the projection from face 1 of e to the mortar is an identity operation. We now move on to the case that face 1 of e is connected to a nonconforming interface. Before proceeding we note that since the approximations ζe
j,k are in the spaces indicated by (148)–(150), it follows that on each Se,1
J ne,1
j ∈ QN−1,2 and that Sm
J nm
j ∈ QN−1,2 for all m ∈ M. Given this, and the accuracy of the quadrature rule, it follows that the left- and right-hand sides of (147) can be replaced with integrals:
(
Se,1
J ne,1
j
)T W ̄ qe,1 =
∫1
−1
∫1
−1
Se,1
J ne,1
j qe,1, (155)
(
Sm
J nm[e]
j
)T W ̄ Pm,e[1]qe,1 =
∫1
−1
∫1
−1
Sm
J nm[e]
j Pm,e[1]qe,1, (156)
where Pm,e[1] is the projection operator from face 1 of element e to the mortar (which corresponds with the matrix operator Pm,e[1]). We now consider the case of the full-side and split-side mortars separately.

Nonconforming DG 43
When full-side mortars are being used, face 1 of element e is a hanging face (since a minus side of a full-side mortar is the full face). Also, it follows that there is only one mortar element in Me,1 which we denote as m; as before e′ is the element connected to the minus side of m through face 2. Since face 2 of element e′ is the full face, we have that by (152):
ζe
j,2 =
(
I − (L1)T L1) ζ ̃e
j,2 + 1
2
(L1)T Ie′→eL2ζ ̃e′
j,2, (157)
ζe
j,3 =
(
I − (L1)T L1) ζ ̃e
j,3 + 1
2
(L1)T Ie′→eL2ζ ̃e′
j,3. (158)
As in the conforming case, Se,1
J ne,1
j and Se′,2
J ne′,2
j are calculated using only derivatives in the r2 and r3 directions, thus it follows that
L1 (Jere
1,j 1) = 1
4 Ie′→eL2 (
Je re′
1,j 1
)
; (159)
here the factor of 1/4 arises because of the 1/2 in (152) along with an additional derivative taken on reference elements. This means that
Se,1
J ne,1
j = −1
4 Ie′→eSm
J nm
j =1
4 Ie′→eSm
J nm[e]
j , (160)
and Se,1
J ne,1
j and Sm
J nm[e]
j are the same polynomial. Hence, since we use exact L2 projection to go from face 1 of e to m it follows that
∫1
−1
∫1
−1
Se,1
J ne,1
j qe,1 =
∫1
−1
∫1
−1
Sm
J nm[e]
j Pm,e[1]qe,1, (161)
which is the desired result. When split-side mortars are used, face 1 of element e is a full face (with the minus side of the mortar being the hanging face). Since e is the full-side, it follows that Me,1 contains four mortar elements which we denote with ml for l = 1, 2, 3, 4. Let the minus side of ml be face 2 of
element e′
l. Additionally, since mortar ml conforms face 2 of e′
l it follows from (131) and (152)
that
Sm′
l
J nm′
l [e]
j = −Sm′
l
J nm′
l
j = −Se′
l ,2
J ne′
l ,2
j =1
4 Ie→e′
l Se,1
J ne,1
j , (162)
namely the surface Jacobian determinant times normal on the mortar is the scaled interpolant of the product on face 1 of e. Since face 1 of element e is the full face, it follows that Pml,e[1] =
I e→e′
l , namely the projection from face 1 of e to ml is the same as interpolation to the face 2
of element e′
l. Thus we have that
∫1
−1
∫1
−1
Se,1
J ne,1
j qe,1 =
∫1
0
∫1
0
Se,1
J ne,1
j qe,1 +
∫0
−1
∫1
0
Se,1
J ne,1
j qe,1
+
∫1
0
∫0
−1
Se,1
J ne,1
j qe,1 +
∫0
−1
∫0
−1
Se,1
J ne,1
j qe,1
=
∑
ml ∈Me,1
∫1
−1
∫1
−1
S ml
J nml[e]
j Ie→e′
l qe,1. (163)
For conforming mortars and the two types of nonconforming mortars (split- and full-side) considered in this work we have shown that (147) holds. As noted above the properties of LGL quadrature imply that if the volume and surface metric terms are consistently calculated and if (147) holds, then the discrete divergence relation (67) holds. To ensure that the metric terms are consistent across the mortars it is necessary to make sure that certain intermediate calculations are consistent across nonco-
nforming faces and edges. Making the mesh discretely watertight alone

44 Jeremy E. Kozdon, Lucas C. Wilcox
is not sufficient since differences in the aliasing errors, which result from interpolating high-order polynomials to a lower-order spaces, are different across the nonconforming faces. Finally, in the above construction (and our implementation), the polynomial order of Se,f
J ne,f
j is lowered for all faces (conforming and nonconforming). This is a bit more aggressive than needed, and (147) would be satisfied if the reduction of polynomial order was done only across the nonconforming faces and edges.
References
1. MATLAB version 8.6.0.267246 (R2015b). Natick, Massachusetts. 2. K. Black. A conservative spectral element method for the approximation of compressible fluid flow. Kybernetika, 35(1):133–146, 1999. 3. T. Bui-Thanh and O. Ghattas. Analysis of an hp-nonconforming discontinuous galerkin spectral element method for wave propagation. SIAM Journal on Numerical Analysis, 50(3):1801–1826, 2012. doi:10.1137/110828010. 4. Carsten Burstedde, Lucas C. Wilcox, and Omar Ghattas. p4est: Scalable algorithms for-
 parallel adaptive mesh refinement on forests of octrees. SIAM Journal on Scientific Computing, 33(3):1103–1133, 2011. doi:10.1137/100791634. 5. M. H. Carpenter and C. A. Kennedy. Fourth-order 2N-storage Runge-Kutta schemes. Technical Report NASA TM-109112, National Aeronautics and Space Administration, Langley Research Center, Hampton, VA, 1994. 6. J. Chan, Z. Wang, A. Modave, J.-F. Remacle, and T. Warburton. GPU-accelerated discontinuous Galerkin methods on hybrid meshes. Journal of Computationa-
l Physics, 318:142168, 2016. doi:10.1016/j.jcp.2016.04.003. 7. Jesse Chan, Russell J. Hewett, and T. Warburton. Weight-adjusted discontinuous galerkin methods: Curvilinear meshes. SIAM Journal on Scientific Computing, 39(6):A2395–A2421, 2017. doi:10.1137/16M1089198. 8. T. A. Driscoll, N. Hale, and L. N. Trefethen, editors. Chebfun Guide. Pafnuty Publications, Oxford, 2014. 9. T. C. Fisher, M. H. Carpenter, J. Nordstr ̈om, N. K. Yamaleev, and C. Swanson. Discretely conservative finite-difference fo-
rmulations for nonlinear conservation laws in split form: Theory and boundary conditions. Journal of Computational Physics, 234:353–375, 2013. doi:10.1016/j.jcp.2012.09.026. 10. Lucas Friedrich, David C. Del Rey Ferna ́ndez, Andrew R. Winters, Gregor J. Gassner, David W. Zingg, and Jason Hicken. Conservative and stable degree preserving SBP operators for non-conforming meshes. Journal of Scientific Computing, 2017. doi:10.1007/s10915-0170563-z. 11. G. J. Gassner. A skew-symmetric discontinuous gal-
erkin spectral element discretization and its relation to sbp-sat finite difference methods. SIAM Journal on Scientific Computing, 35(3):A1233–A1253, 2013. doi:10.1137/120890144. 12. Tobin Isaac, Carsten Burstedde, Lucas C. Wilcox, and Omar Ghattas. Recursive algorithms for distributed forests of octrees. SIAM Journal on Scientific Computing, 37(5):C497–C531, 2015. doi:10.1137/140970963. 13. D. A. Kopriva. Metric identities and the discontinuous spectral element method on curvilinear meshes. Journ-
al of Scientific Computing, 26(3):301–327, 2006. doi:10.1007/s10915005-9070-8. 14. D. A. Kopriva. A conservative staggered-grid Chebyshev multidomain method for compressible flows. II. A semi-structured method. Journal of Computational Physics, 128(2):475–488, 1996. doi:10.1006/jcph.1996.0225.
15. D. A. Kopriva. Implementing Spectral Methods for Partial Differential Equations. Scientific Computation. Springer Netherlands, 2009. doi:10.1007/978-90-481-2261-5. 16. D. A. Kopriva and G. J. Gassner. An energy stable discontinuous Galerkin spectral element discretization for variable coefficient advection problems. SIAM Journal on Scientific Computing, 36(4):A2076–A2099, 2014. doi:10.1137/130928650.

Nonconforming DG 45
17. D. A. Kopriva, S. L. Woodruff, and M. Y. Hussaini. Computation of electromagnetic scattering with a non-conforming discontinuous spectral element method. International Journal for Numerical Methods in Engineering, 53(1):105–122, 2002. doi:10.1002/nme.394. 18. D. A. Kopriva and G. J. Gassner. On the quadrature and weak form choices in collocation type discontinuous Galerkin spectral element methods. Journal of Scientific Computing, 44(2):136–155, 2010. doi:10.1007/s10915-010-9372-3. 19. J. E. K-
ozdon, E. M. Dunham, and J. Nordstr ̈om. Simulation of dynamic earthquake ruptures in complex geometries using high-order finite difference methods. Journal of Scientific Computing, 55(1):92–124, 2013. 20. H.-O. Kreiss and G. Scherer. Finite element and finite difference methods for hyperbolic partial differential equations. In Mathematical aspects of finite elements in partial differential equations; Proceedings of the Symposium, pages 195–212, Madison, WI, 1974. doi:10.1016/b978-0-12-208350-1.50-
012-1. 21. J. Nordstr ̈om. Conservative finite difference formulations, variable coefficients, energy estimates and artificial dissipation. Journal of Scientific Computing, 29(3):375–404, 2006. doi:10.1007/s10915-005-9013-4. 22. W. S. Slaughter. The Linearized Theory of Elasticity. Birkh ̈auser, 2002. 23. Joe F. Thompson, Z. U.A. Warsi, and C. Wayne Mastin. Numerical Grid Generation: Foundations and Applications. Elsevier North-Holland, Inc., New York, NY, USA, 1985. 24. T. Warburton. A low storag-
e curvilinear discontinuous Galerkin time-domain method for electromagnetics. In Electromagnetic Theory (EMTS), 2010 URSI International Symposium on, pages 996–999, August 2010. doi:10.1109/URSI-EMTS.2010.5637392. 25. Lucas C. Wilcox, Georg Stadler, Tan Bui-Thanh, and Omar Ghattas. Discretely exact derivatives for hyperbolic PDE-constrained optimization problems discretized by the discontinuous Galerkin method. Journal of Scientific Computing, 63(1):138–162, 2015. doi:10.1007/s10915-014-9890-5. 26-
. Lucas C. Wilcox, Georg Stadler, Carsten Burstedde, and Omar Ghattas. A high-order discontinuous Galerkin method for wave propagation through coupled elastic-acoustic media. Journal of Computational Physics, 229(24):9373–9396, 2010. doi:10.1016/j.jcp.2010.09.008. 27. T. A. Zang. On the rotation and skew-symmetric forms for incompressible flow simulations. Applied Numerical Mathematics, 7(1):27–40, 1991. doi:10.1016/0168-9274(91)90102-6.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:16:13.841Z
- **Text Length:** 108470 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** unknown of unknown
