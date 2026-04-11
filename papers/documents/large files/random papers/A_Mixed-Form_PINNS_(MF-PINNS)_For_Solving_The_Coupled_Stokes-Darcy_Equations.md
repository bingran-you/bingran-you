# PDF Document: Shan and Shen - 2025 - A Mixed-Form PINNS (MF-PINNS) For Solving The Coupled Stokes-Darcy Equations.pdf

**File Path:** Shan and Shen - 2025 - A Mixed-Form PINNS (MF-PINNS) For Solving The Coupled Stokes-Darcy Equations.pdf

**Processed Date:** 2026-02-10T18:18:30.301Z

**File Size:** 7096.25 KB

**Total Pages:** 22

**Extracted Pages:** 22

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3562

**Title:** A Mixed-Form PINNS (MF-PINNS) For Solving The Coupled Stokes-Darcy Equations

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

A MIXED-FORM PINNS (MF-PINNS) FOR SOLVING THE COUPLED STOKES-DARCY EQUATIONS ∗
LI SHAN† AND XI SHEN‡
Abstract. Parallel physical information neural networks (P-PINNs) have been widely used to solve systems with multiple coupled physical fields, such as the coupled Stokes-Darcy equations with Beavers-Joseph-Saffman (BJS) interface conditions. However, excessively high or low physical constants in partial differential equations (PDE) often lead to illconditioned loss functions and can even cause the failure of training numerical solutions for PINNs. To solve this problem, we develop a new kind of e-
nhanced parallel PINNs, MF-PINNs, in this article. Our MF-PINNs combines the velocitypressure form (VP) with the stream-vorticity form (SV) and add them with adjusted weights to the total loss functions. The results of numerical experiments show our MF-PINNs have successfully improved the accuracy of the streamline fields and the pressure fields when kinematic viscosity and permeability tensor range from 10−4 to 104. Thus, our MF-PINNs hold promise for more chaotic PDE systems involving turbulent -
flows. Additionally, we also explore the best combination of the activation functions and their periodicity. And we also try to set the initial learning rate and design its decay strategies. The code and data associated with this paper are available at https://github.com/shxshx48716/MF-PINNs.git.
Key words. Coupled Stokes–Darcy equations, Parallel physical information neural networks, Mixed-Form loss, Periodic activation functions.
1. Introduction. Stokes-Darcy coupling models arise in several applications, such as interaction between surface and groundwater flows, oil reservoirs in vuggy porous media, and industrial filtrations. In mathematical modeling, the Stokes and Darcy equations are employed to describe free fluid flows and porous media seepage, respectively. Additional equations are introduced to comply with physical laws, such as mass conservation, normal stress balance, and the BJS conditions [1]. The rapid advance-
ment of artificial intelligence has increased the applications for deep neural networks, such as PINNs [2], as a new approach for solving PDE. Moreover, parallel PINNs and region decomposition strategies [3, 4, 5, 6, 7, 8, 9] use multiple GPUs to train multiple neural networks in parallel. Above, all of these methods are designed to handle coupled models with multiple physical fields and media, including the coupled Stokes-Darcy system. Compared with traditional numerical methods, finite differenc-
e method, finite element method, finite volume method, spectral method, etc., PINNs offer several advantages for coupled systems: (i ) no need for mesh generation; (ii ) handling boundary conditions more flexibly; (iii ) multi-scale systems of overdetermined equations; (iv ) enriched interpolation (activation) functional spaces. However, how to mitigate the gradient competition between multi-objective loss functions and accurately capture the frequency of PDEs remains an open research question. Th-
e current research for balancing gradient competition between boundary errors and PDE errors is as follows: second-order optimization perspective, a new quasi-Newton method [10] ; dual cone gradient descent [11] ; neural tangent kernel theory [12, 13] ; multi-magnitude PINNs [14] ; conflict-free inverse gradients [15] , etc. Several studies have discretized equation systems to solve the coupling among the multiple physical fields: semi implicit method for pressure linked equations (SIMPLE) [17] ; -
componentconsistent pressure correction [18], etc. Few experiments have studied the gradient competition between coupled equations [16], etc. In brief, these methods have explored various approaches to correct the ill-conditioned numerical formats and have achieved favorable improvements. Thus, we try to develop a new type of PINNs, MF-PINNs, which decouples the equations and rebalances the loss functions to mitigate the gradient competition among different physical quantities. Recently, a wide va-
riety of operator mappings have been widely applied to PINNs. For instance, adaptive activation functions strategies [19], Fourier feature PINNs (FFPINNs) [20], DNN for approximating nonlinear operators [21, 22], etc. Besides, several studies have revealed the basic logic to make
∗L. Shan is supported by Guangdong Basic and Applied Basic Research Foundation (2024A1515010294) and STU Scientifc Research Initiation Grant (NTF25007T,NTF21006) †Corresponding author. Department of Mathematics, Shantou University, Shantou, China. (lishan@stu.edu.cn) ‡Department of Mathematics, Shantou University, Shantou, China. (24xshen@stu.edu.cn)
1
arXiv:2510.17508v1 [physics.flu-dyn] 20 Oct 2025

2 L. Shan and X. Shen
improvements, such as decomposition based DNN [23] based on the Frequency Principle [24] , etc. In all, these theories and approaches enhance the fitting and generalization capabilities of PINNs by developing the operators mappings. Hence, we aim to identify the proper periods of all multiple physical fields and construct a proper neural operator basis adaptive to the problem in order to improve accuracy and reduce extra computational costs. Plenty of research has been devoted to developing optima-
l strategies for learning rate scheduling to improve PINNs. For example, physics-constrained neural networks with the minimax architecture [25], residual adaptive networks [26], preprocessing for weights and bias [27], etc. Consequently, we aim to develop stable and universal learning rate decay strategies for improving. In order to solve these problems above, we first explain why the traditional PINNs sometimes fail to converge to the analytical solutions under extreme physical constants. Then, w-
e innovate a new kind of enhanced PINNs, MF-PINNs. We decouple the multiple physics fields of the Stokes-Darcy equations and add mixed-form equations into the loss functions. These improvements create well-conditioned loss functions for PINNs and mitigate gradient competition between muiltiple physical fields. Besides, we research the impact of the periodicity of activation functions and apply a fast and universal learning rate decay strategy for training PINNs. The organization of this paper is a-
s follows: In Section 2, we introduce the coupled Stokes-Darcy model and decouple the velocity and pressure fields. In Section 3, we present the traditional parallel PINNs and apply the multi-scale operator-decoupled equations to develop MF-PINNs. In Section 4, we conduct numerical experiments to validate the effectiveness of our MF-PINNs and provide a detailed analysis based on the results. In Section 5, we summarize several key suggestions for training PINNs.
2. Physical modeling. To begin with, we define a symbolic declaration in Section 2.1. Next, the coupled Stokes-Darcy system is established by physics laws in Section 2.2. Furthermore, we decouple the velocity and pressure in Section 2.3.
2.1. Symbol declaration.
1. The subscript s means the Stokes system and the subscript d means the Darcy system. And the subscript N N represents a numerical solution of PINNs. 2. The Ω represents a given domain with boundary ∂Ω, and Γ represents a certain subset of ∂Ω. The μ(Ω) represents the measurement of the region Ω. The ns and nd respectively represent the outward normal vectors of the domain. The τ represents the tangential vector. Their relationships are as follows:
Ω = Ωs ∪ Ωd, Γ = ∂Ωs ∩ ∂Ωd, Γs = ∂Ωs \ Γ, Γd = ∂Ωd \ Γ.
3. The bolded vector u = [u, v]T in 2D or u = [u1, u2, u3]T in 3D stands for the velocity field and the components paired with the Cartesian coordinates, x, y, and z. Similarly, the Ψ in 2D or the Ψ = [Ψ1, Ψ2, Ψ3]T in 3D stands for Streamline field. The ω = [ω1, ω2, ω3]T in 3D represents the vorticity field. And the unbold scalar p represents the pressure field. 4. In a 3D steady flow the streamline field is the family of curves Ψ and its rotation is the velocity field, ∇ × Ψ = u. The vorticity ω -
is the rotation of the velocity field u, ω = ∇ × u. It measures the local rotation of fluid. 5. The K represents an n-dimensional matrix, and it is a constant. The I represents the identity matrix. The 1 = [1, · · · , 1] is a row vector of shape 1 × n in nD. Its every element is 1. 6. The symbol ◦ denotes the composite functions (mappings), and it means composite functions (mappings) are performed from right to left. The order of differential operators is the same. 7. The symbol ∥·∥2 represents th-
e Euclidean norm of a matrix or vector. The errL2 means the relative Euclidean norm. 8. The x ≫ y or x ≪ y respectively means that x is much higher than or much lower than y. 9. θ is the adaptive parameter of the activation functions. Furthermore, a and b are respectively adaptive parameters of the parallel PINNs in the Stokes and Darcy domains.

A Mixed Form PINNs (MF-PINNs) for Solving the Coupled Stokes-Darcy Equations 3
2.2. The velocity-pressure form of the Stokes-Darcy system. Here, we introduce the equations of the coupled Stokes-Darcy equations in the VP form [28] in the following four parts and Fig. 2.1. Stokes’ law
The steady incompressible Stokes equations describe the motion of viscous fluids when the inertial forces are negligible compared to the viscous forces:
−∇ · T (us, ps) = fs, x ∈ Ωs, (2.1a)
∇ · us = 0, x ∈ Ωs, (2.1b)
us = gΓs , x ∈ Γs, (2.1c)
where us represents the fluid velocity, ps represents the kinematic pressure, fs represents the external force (homogeneous or inhomogeneous term), ν > 0 represents the kinematic viscosity of the fluid, T (us, ps) = 2νD(us) − psI represents the stress tensor, and D(us) = (∇us + (∇us)T )/2 represents the deformation tensor. The (2.1a) could be simplified as ∇ps − ν∆us = fs when the Stokes fluid is incompressible embodied in (2.1b). Darcy’s Law
The steady incompressible Darcy equations describe fluid flow within the porous medium:
νK−1ud + ∇pd = fd, x ∈ Ωd, (2.2a)
∇ · ud = 0, x ∈ Ωd, (2.2b)
ud · nd = gΓd , x ∈ Γd, (2.2c)
where ud represents the fluid velocity, pd represents the dynamic pressure, fd represents the external force source term, and permeability tensor K represents a positive symmetric tensor. Although tensor K may vary, it usually keeps K = κI. Interface conditions
The well-known Beavers-Joseph-Saffman boundary conditions describe the flow characteristics at the interface between the free-flow region of Stokes equation and the porous medium region of Darcy equation:
us · ns + ud · nd = 0, x ∈ Γ, (2.3a)
2νns · D(us) · ns − ps + pd = gΓ1 , x ∈ Γ, (2.3b)
2ns · D(us) · τ + αK−1/2us · τ = gΓ2 , x ∈ Γ, (2.3c)
where the parameter α is a constant affected by the friction. The first equation (2.3a) stands for the continuity of normal velocity to keep the mass conservation, the second equation (2.3b) stands for the continuity of normal stress to keep the equilibrium condition, and the last equation (2.3c) stands for frictional effects at the interface in order to keep the tangential velocity slip condition [1], as is shown in Fig. 2.1. Pressure conditions
The pressure is non-unique due to an additional constant hidden in this system, because ps − pd and (ps + C) − (pd + C) are equivalent in (2.3b). Thus, we could add (2.4) to fix the reference frame of the pressure field:
Z
Ωs
ps dΩs +
Z
Ωd
pd dΩd
.
(μ(Ωs) + μ(Ωd)) = Cp, x ∈ Ωs or x ∈ Ωd. (2.4)

4 L. Shan and X. Shen
Fig. 2.1: This cartoon overviews the coupled Stokes-Darcy model with the BJS interface conditions.
2.3. The stream-vorticity form of the Stokes-Darcy system. Below we would infer the decoupled form of SV form of Stokes-Darcy equations [29].
Theorem 1. The streamline field Ψs and pressure field ps of steady Stokes equations could be decoupled as the form L1(Ψs, fs) = 0 and L2(ps, fs) = 0. The L1(Ψs, fs) = 0 is a fourth-order equation without ps and L2(ps, fs) = 0 is an elliptic equation without Ψs.
Proof. We note the rotation of streamline field ∇ × Ψs and gradient of pressure field ∇ps of Stokes equation are coupled by the kinematic viscosity ν in (2.1). We could apply differential operators 1 · ∇× and ∇· to both sides of (2.1). Hence, we could get (2.5):
L1(Ψs, fs) =
Gradient has no Rotation.
z }| {
1 · ∇ × ∇ps − 1 · ∇ × (fs + ν∆(∇ × Ψs)) = 0, (2.5a)
L2(ps, fs) = ∇ · (−ν∆(∇ × Ψs))
| {z }
Rotation has no Divergence.
+ ∇ · ∇ps
| {z }
∆ps
− ∇ · fs = 0. (2.5b)
For example, if we apply differential operators 1 · ∇× to both sides of (2.1) in 3D, we will notice (2.6):
∇ × ∇ps =

 
0 −∂
∂z
∂ ∂y ∂
∂z 0 − ∂
∂x
−∂
∂y
∂
∂x 0

 

 
∂ ∂∂x
∂y ∂ ∂z


 ps = 0. (2.6)
And finally we could get (2.7):
L1(Ψs, fs) = −

 
0 −∂
∂z
∂ ∂y ∂
∂z 0 − ∂
∂x
−∂
∂y
∂
∂x 0

 

 


fs1
fs2
fs3

 + ν ∂2
∂x2 + ∂2
∂y2 + ∂2
∂z2

 
0 −∂
∂z
∂ ∂y ∂
∂z 0 − ∂
∂x
−∂
∂y
∂
∂x 0

 


Ψs1
Ψs2
Ψs3




 = 0.
(2.7)
If we apply differential operators ∇· to both sides of (2.1) in 3D, we will notice (2.8):
−ν∇ · ∇ × ∆Ψs = −ν ∂2
∂x2 + ∂2
∂y2 + ∂2
∂z2

 
∂ ∂∂x
∂y ∂ ∂z

 
T

 
0 −∂
∂z
∂ ∂y ∂
∂z 0 − ∂
∂x
−∂
∂y
∂
∂x 0

 


Ψs1
Ψs2
Ψs3

 = 0. (2.8)

A Mixed Form PINNs (MF-PINNs) for Solving the Coupled Stokes-Darcy Equations 5
And finally we could get (2.9):
L2(ps, fs) =

 
∂ ∂∂x
∂y ∂ ∂z

 
T

 
∂ ∂∂x
∂y ∂ ∂z


 ps −

 
∂ ∂∂x
∂y ∂ ∂z

 
T


f1
f2
f3

 = ∂2
∂x2 + ∂2
∂y2 + ∂2
∂z2 ps −

 
∂ ∂∂x
∂y ∂ ∂z

 
T


fs1
fs2
fs3

 = 0. (2.9)
We notice using Cramer’s rule to solve for the partial derivative of (2.1) could result in (2.5), but the indefinite integral only determines the original function with an additional constant. So (2.1) are sufficient but unnecessary conditions for (2.5). A 2D case can be derived from a 3D one.
Theorem 2. The streamline field Ψd and pressure field pd of steady Darcy equations could be decoupled as the form L3(Ψd, fd) = 0 and L4(pd, fd) = 0. The L3(Ψd, fd) = 0 is a fourth-order equation without pd and L4(pd, fd) = 0 is a equation without Ψd.
Proof. We note that the rotation of streamline field ∇ × Ψd and gradient of pressure field ∇pd of the Darcy equation are coupled by the permeability and Reynolds number ratio νK−1 in (2.2). We could apply differential operators 1 · ∇× and ∇ · K to both sides of (2.2). Hence, we could get (2.10):
L3(Ψd, fd) = 1 · ∇ × (νK−1∇ × Ψd − fd) +
Gradient has no Rotation.
z }| {
1 · ∇ × ∇pd = 0, (2.10a)
L4(pd, fd) = ν∇ · KK−1∇ × Ψd
| {z }
Rotation has no Divergence.
+ ∇ · K(∇pd − fd) = 0. (2.10b)
For example, if we apply differential operators 1 · ∇× to both sides of (2.2) in 3D, we will notice (2.11):
∇ × ∇pd =

 
0 −∂
∂z
∂ ∂y ∂
∂z 0 − ∂
∂x
−∂
∂y
∂
∂x 0

 

 
∂ ∂∂x
∂y ∂ ∂z


 pd = 0. (2.11)
And finally we could get (2.12):
L3(Ψd, fd) = ν

 
0 −∂
∂z
∂ ∂y ∂
∂z 0 − ∂
∂x
−∂
∂y
∂
∂x 0

 

 


k11 k12 k13
k21 k22 k23
k31 k32 k33


−1 

Ψd1
Ψd2
Ψd3

−


fd1
fd2
fd3




 = 0. (2.12)
In a similar way, if we apply differential operators ∇· to both sides of (2.2) in 3D, we will notice (2.13):
ν∇ · KK−1∇ × Ψd = ν

 
∂ ∂∂x
∂y ∂ ∂z

 
T


k11 k12 k13
k21 k22 k23
k31 k32 k33




k11 k12 k13
k21 k22 k23
k31 k32 k33


−1 
 
0 −∂
∂z
∂ ∂y ∂
∂z 0 − ∂
∂x
−∂
∂y
∂
∂x 0

 


Ψd1
Ψd2
Ψd3

 = 0.
(2.13)
And finally we could get (2.14):
L4(pd, fd) = ν

 
∂ ∂∂x
∂y ∂ ∂z

 
T


k11 k12 k13
k21 k22 k23
k31 k32 k33



 

 
∂ ∂∂x
∂y ∂ ∂z


 pd −


fd1
fd2
fd3




 = 0. (2.14)
We notice using Cramer’s rule to solve for the partial derivative of (2.2) could result in (2.10), but the indefinite integral only determines the original function with an additional constant. So (2.2) are sufficient but unnecessary conditions for (2.10). A 2D case can be derived from a 3D one.

6 L. Shan and X. Shen
3. Algorithm framework. First of all, we list the numerical solution forms of DNN and PINNS in Section 3.1. Secondly, we explain how PINNs solves the coupled Stokes-Darcy equations in Section 3.2. Thirdly, we construct improved loss functions by using VP form equations and SV form equations from Section 2.3 to alleviate gradient competition in Section 3.2.1. Lastly, we adopt several training strategies to accelerate converging and improve stability in Section 3.3 and Section 3.4.
3.1. Numerical solutions of DNN. DNN could be formed by the composition of multiple nonlinear and linear mappings belonging to undetermined weights and bias. In other words, PINNs could be regarded as a kind of numerical solutions (NN solutions) composed of various functions (3.1):
uNN (x, w, b) =
Nm
X
n=1
wm,nFm−1,n · · ·
N2
X
n=1
w2,nF1,n(
N1
X
n=1
w1,nxn + b1,n) + b2,n · · ·
!
+ bm,n, (3.1)
where Θ = {wm,n, bm,n}m=1,2,··· ,M are undetermined parameters groups of the PINNs solutions, wm,n is the nth weight of the mth linear layer, bm,n is the nth bia of the mth linear layer and Fm,n is the nth activation function paired with the mth linear layer. This feature endows PINNs with several advantages — extensive fitting capabilities [31], rapid computing [32], various well-proposed function spaces, and superior generalization and transfer learning performance for extrapolation [33]. In the-
 Stokes-Darcy problems, we had better select sufficient smooth activation functions like tanh, sigmoid, sin ∈ C∞ or P n[x](n > 1), but we could not select ReLU ∈ C0 and its family [34].
3.2. Physical information drives optimization. A significant work for PINNs is that we need to design the total loss function J (x, Θ) based on the boundary conditions and equations in order to induce PINNs solutions (3.1) to converge to analytical solutions:
J (xfs , Θ) = 1
Nfs
Nfs X
n=1
−ν∇ × ∆ΨsNN (xfns ) + ∇psNN (xfns ) − fs(xfns ) 2
2 , (3.2)
J (xfd , Θ) = 1
Nfd
Nfd X
n=1
νK−1∇ × ΨdNN (xfnd ) + ∇pdNN (xfnd ) − fd(xfnd ) 2
2 , (3.3)
J (xΓ, Θ) = 1
NΓ
NuΓ X
n=1
h
∇ × ΨsNN (xΓ
n) · ns + ∇ × ΨdNN (xΓ
n) · nd
2 2
+ 2νns · D(∇ × ΨsNN (xΓ
n)) · ns − psNN (xΓ
n) + pdNN (xΓ
n) − gΓ1 (xΓ
n) 2
2
+ 2ns · D(∇ × ΨsNN (xΓ
n)) · τ + αK−1/2∇ × ΨsNN (xΓ
n) · τ − gΓ2 (xΓ
n)
2
2
,
(3.4)
J (xus , Θ) = 1
Nus
Nus X
n=1
∥∇ × ΨsNN (xuns ) − gΓs (xuns )∥2
2 , (3.5)
J (xud , Θ) = 1
Nud
Nud X
n=1
∥∇ × ΨdNN (xund ) · nd − gΓd (xund )∥2
2 , (3.6)
J (x, Θ) = λfs J (xfs , Θ) + λfd J (xfd , Θ) + λΓJ (xΓ, Θ) + λus J (xus , Θ) + λud J (xud , Θ), (3.7)

A Mixed Form PINNs (MF-PINNs) for Solving the Coupled Stokes-Darcy Equations 7
where (3.2) stands for the loss of the Stokes equation, (3.3) stands for the loss of the Darcy equation, (3.4) stands for the loss on the coupled interface, (3.5) and (3.6) respectively stand for the loss on the boundary conditions of the Stokes equation and the Darcy equation, and different coefficients λ stand for the difference in importance of the five loss functions in different PINNs. Finally, we add the five loss functions with different coefficients λ to get the total loss function (3.7). -
Therefore, based on [31] and [35], we could conclude:
Theorem 3. For any ε > 0, there exists a wide and deep enough neural network FNN (x, Θ) = (ΨNN , ∇pNN ) with sufficiently large degrees of freedom DOFΘ to make:
mΘinJ (x, Θ) = J (x, Θˆ ) < ε.
Moreover, the following error bounds hold:
∇ × ΨNN (x, Θˆ ) − u(x)
2
< C1εn1 ,
∇pNN (x, ˆΘ) − ∇p(x)
2
< C2εn2 ,
where C1 and C2 are known constants, and n1 and n2 are positive integers.
Remarking on Section 2.2, we consider that the pressure field of the PINNs numerical solutions, psNN and pdNN , differ from the analytical solutions, ps and pd by a constant Cp. Thus, we set bias = ’False’ for the last linear layer, and we developed (3.8) and (3.9) to correct pNNs and pNNd based on (2.4), after updating the weights and bias per epoch.
Ns
X
m=1
psNN (xm, Θˆ ) − ps(xm) +
Nd
X
n=1
pdNN (xn, Θˆ ) − pd(xn)
! .
(Ns + Nd) ≈ CpNN − Cp, x ∈ Ωs ∪ Ωd.
(3.8)
peNN (x, Θˆ ) = pNN (x, ˆΘ) − CpNN + Cp, (3.9)
Fig. 3.1: This cartoon shows how we combine the VP form and the SV form and design the total new loss function with appropriate weights in the Darcy domain.

8 L. Shan and X. Shen
3.2.1. Gradient competition and MF-PINNs. Gradient competition may be a potential risk to the training of PINNs. If we directly construct the loss function in Section 3.2 for the Stokes-Darcy system, it may lead to the failure of PINNs training, possibily. A major reason why PINNs might fail is that extreme high or low constants (κ, ν, etc.) in the multi-objective loss functions (3.7) may create competition in the gradients. What’s worse, the PINNs with such ill-conditioned loss functions may lead-
 to the fact that some physical quantities have sufficient accuracy, but the optimization direction of other physical quantities is opposite to the optimal point, as is shown in Fig. 3.1. The following are the potential risks for PINNs in Stokes-Darcy system: 1. ν ≫ 1 or ν ≪ 1 may cause the gradient competition between us and ps. 2. ν/κ ≫ 1 or ν/κ ≪ 1 may cause the gradient competition between ud and pd. 3. ν ≫ ν/κ or ν ≪ ν/κ may cause the gradient competition between the Stokes system and the Dar-
cy system. 4. Extreme gradient may cause the gradient competition in total loss among the boundary, the interface, and the inner points. 5. ν ≫ 1 may cause the gradient exploration for the loss of the inner points during backward. For example, if we chose ν = 1 and K = 10−4I, the ratio of the updating gradients of ∇ × ΨdNN and ∇pdNN would be approximately 104 : 1. These choices may result in ∇pdNN being very insignificant compared to ∇ × ΨdNN , and the loss function (3.3) may improperly become an -
ill-conditioned form (3.10):
J (xfd , Θ) = 1
Nfd
Nfd X
n=1
104∇ × ΨdNN (xfnd ) + ∇pdNN (xfnd ) − fd(xfnd ) 2
2
≈1
Nfd
Nfd X
n=1
104∇ × ΨdNN (xfnd ) − fd(xfnd ) 2
2.
(3.10)
As a terrible result, ∇pdNN neither is trained nor converges to ∇pd by mistake in Fig. 3.1. We could infer that the error function of ∇ × ΨdNN approaches its minimum point, but the error function of ∇pdNN may be very far from that one in value. Finally, we could validate this inference in the following numerical experiments in Section 4.3. To deal with these problems, we innovate the Mixed-Form PINNs (MF-PINNs). It is a kind of enhanced PINNs to deal with ill-conditioned loss functions under extre-
me physical constants. As shown in Fig. 3.1, our MF-PINNs redesign the coefficients of SV form and combine it with VP form (3.7) to get the new total loss functions (3.13):
Je(xfs , Θ) = J (xfs , Θ)
max(ν, 1) + 1
ν ∥L1(ΨsNN , fs)∥2
2 + ν ∥L2(psNN , fs)∥2
2
= J (xfs , Θ)
max(ν, 1) + 1
ν Nfs
Nfs X
n=1
ν∇ × ∇ × ∆ΨsNN (xfns ) + ∇ × fs(xfns ) 2
2+ ν
Nfs
Nfs X
n=1
∆psNN (xfns ) − ∇ · fs(xfns ) 2
2,
(3.11)
Je(xfd , Θ) = J (xfd , Θ)
max(ν, 1) + κ
ν ∥L3(ΨdNN , fd)∥2
2+ ν
κ ∥L4(pdNN , fd)∥2
2
= J (xfd , Θ)
max(ν, 1) + κ
ν Nfd
Nfd X
n=1
ν
κ ∇ × ∇ × ΨdNN (xfnd ) − ∇ × fd(xfnd )
2
2
+ν
κNfd
Nfd X
n=1
∆pdNN (xfnd ) − ∇ · fd(xfnd ) 2
2,
(3.12)
Je(x, Θ) = λfs Je(xfs , Θ) + λfd Je(xfd , Θ) + λΓJ (xΓ, Θ) + λus J (xus , Θ) + λud J (xud , Θ), (3.13)

A Mixed Form PINNs (MF-PINNs) for Solving the Coupled Stokes-Darcy Equations 9
where the coefficients 1/ν and ν assigned to L1(ΨsNN , fs) and L2(psNN , fs) alleviate the gradient competition between ΨsNN and psNN for (3.11), the coefficients κ/ν and ν/κ assigned to L3(ΨdNN , fd) and L4(pdNN , fd) alleviate the gradient competition between ΨdNN and pdNN for (3.12), and additionally, we multiply (3.7) by the coefficient 1/max(ν, 1) to prevent the gradient explosion during backward because ν may be much greater than 1.
As an ideal result, these skills of our MF-PINNs could not only alleviate the gradient competition among different physical quantities, but also accelerate the convergence of PINNs numerical solutions during per epoch. Therefore, our MF-PINNs makes it possible to precisely solve each physical field under extreme physical constants. Next, We would compare the differences between our MF-PINNs and several other PINNs models in Section 3.5, and verify the effectiveness of our MF-PINNs under extreme ph-
ysical constants in Section 4.
In addition, we could only apply the differential operator to the unmodified loss functions by the automatic differentiation technique. So we have no need to deduce the detailed form 3.12 of the decoupled equations in programming.
Fig. 3.2: This picture illustrates the framework of our MF-PINNs for solving coupled Stokes-Darcy Problems.
3.3. Activation functions with high-frequency features. PINNs with Fourier features is a way to solve multi-frequency PDE problems. Thus, we improve the activation functions of the first nonlinear layer of NNs for embedding high-frequency features. In detail, we replace F1,n (wx + b) = tanh (θ (wx + b)) as Fe1,n (wx + b) = tanh (sin (2πθ (wx + b) /T )) in Fig. 3.2, where the physical periodicity Ti can be obtained from the non-homogeneous term f or the boundary conditions gΓ. Then we choose the co-
mmon multiple of the period T as the period of the first activation function.
In Section 4, we would verify that our improvement not only enhances the fitting ability and extension capability of PINNs but also keeps them easy to code and train without consuming additional computing resources.

10 L. Shan and X. Shen
3.4. Optimizer and learning rate decay. In this section, we introduced the combination of optimizers we used, Adam & L-BFGS, and the learning rate decay strategy we design. In the following Section 4.3, we would verify the effect of the learning rate decay strategy we designed. The Adam optimizer is widely used in deep learning tasks, especially for initial processing of large datasets and complex models. However, results from Adam may not always be sufficiently precise. Hence, we would use Adam o-
ptimizer in the early stage of training PINNs (from 1st to 7000th epochs), and we also design the adaptive interval learning rate decay strategy for Adam. We adopt ReduceLROnPlateau and set
Initial LR Adam = 10-3, threshold = 10-4, factor = 10-1, patience = 102, cooldown = 102, while the rest are default. L-BFGS is a highly efficient quasi-Newton optimization algorithm, and it does well in handling largescale datasets and high-dimensional parameter spaces. L-BFGS achieves a higher order of convergence, but it requires that the parameter groups be sufficiently close to the optimal points. Therefore, we would use the L-BFGS optimizer in the later stage of training PINNs (from 7001st to-
 10000th epochs), and we also design the adaptive interval learning rate decay strategy for L-BFGS. We adopt ReduceLROnPlateau
and set Initial LR L-BFGS = 10-1, threshold = 10-3, factor = 10-1, patience = 10, cooldown = 102, while the rest are default.
3.5. Algorithm design. In this section, we list several optimization algorithms. Their performance would be compared in the following numerical examples of Section 4:
• AS-DNN : We use the Deep Neural Networks to fit the Analytical Solutions (4.2) directly. Therefore, the AS-DNN could display the maximal fitting capability of PINNs in theory. Next, we will use AS-DNN to compare with several PINNs with unsupervised learning in the fixed size of NNs and common input data. • PINNs : We design the loss functions J (x, Θ) directly, without adding any weight. That is λfs = λfd = λud = λud = λΓ = 1 for (3.7). • AT-PINNs : We take examples from the Sharp-PINNs [31] to -
alternately train parallel PINNs. In detail, we alternately train different loss functions paired with different regiondecomposed NNs, respectively. That is, λfs = λus = λΓ = 1, λfd = λud = 0 for updating argument Θs ⫋ Θ of the Stokes system and λfd = λud = λΓ = 1, λfs = λus = 0 for updating argument Θd ⫋ Θ of the Darcy system in (3.7). What’s more, we change the loss functions (region-decomposed NNs) every 100 epochs during the Adam training stage. But there is no change during the L-BFGS trainin-
g stage. • MW-PINNs [36] : We design the J (x, Θ) based on their different importance, which could be quantitatively described as appropriate ratios. An appropriate group of Multiple Weights is λfs = λus = 1/v, λfd = λud = κ/v, λΓ = 1 for (3.7). • MF-PINNs (Ours) : We have derived the VP form and SV form of both Stokes and Darcy equations by using the automatic differential operators. Next, we apply multiple weights for the new total loss sfunction Je(x, Θ) with Mixed Forms. The multiple weights a-
re λus = λud = 102, λfd = κ, λfs = λΓ = 1 for (3.13).

A Mixed Form PINNs (MF-PINNs) for Solving the Coupled Stokes-Darcy Equations 11
4. Numerical test.
4.1. Model parameter. In this section, we list the parameters and size of the NNs for our experiments. Here are some notifications: 1. We divide the 127 × 127 square grids with the same size in the Stokes and Darcy domains respectively, and then we input the coordinates of the cell grid nodes as labeled data into the PINNs. We notice that there are 128 points shared on the interface shared by the Stokes domain and the Darcy domain. 2. We use parallel PINNs to solve the coupled Stokes-Darcy equatio-
ns. Both parallel PINNs have 4 hidden layers × 70 neurons. All kinds of PINNs in our article use the same neural networks with the same size. And the strategies for the activation functions are shown in Section 3.3, unless we have special statements in the following ablation experiments. 3. In Table 4.1, we apply the optimizer paired with the adaptive learning rate strategies in Section 3.4 to the specified number of epochs. 4. All the experiments in this article are under the same configuration –-
 CPU:16 vCPU AMD EPYC
9K84 96-Core Processor, GPU: H20-NVLink(96GB).
Table 4.1: This table lists several significant parameters of the PINNs.
Data Size Neurons Training Optimizer Activation Function
Nfs = Nfd = 15876 Input : 2 × [2] × [70] Adam for 7000 epochs NΓs = NΓd = 380 Hidden : 2 × [70] × [70] × 4 Initial LR : 10−3 tanh(x ) or NΓ = 126 Output : 2 × [70] × [2] (No Bias) L-BFGS for 3000 epochs tanh ◦ sin( 2πx
T)
N = 32640 Total Parameters : 40460 Initial LR : 10−1
4.2. Metrics for error. We use the relative Euclidean norm (errL2) to assess the accuracy of the PINNs. Inspired by the finite volume method, we could replace the continuous equations u(x) in the tiny neighborhood as the function value at the paired point u(xi) to estimate the errL2:
errL2 (u) = ∥uNN − u∥2
∥u∥2
≈
q
PN
i=1 |uNN (xi) − u(xi)|2
q
PN
i=1 |u(xi)|2
, (4.1)
where the N represents the number of points of a specific category in the PINNs training process, the u represents the analytical solutions, the uNN represents PINNs numerical solutions of specific physical quantities, and the x ∈ Ω represents a specific point.
4.3. Numerical examples. We focus on the coupled Stokes-Darcy problem with the discontinuous BJS interface, so we use analytical solutions (4.2) of [36] for different kinds of PINNs. Among them, the non-homogeneous term f and the boundary condition gΓ are naturally determined by the analytical solutions (4.2).
us = us
vs
= − sin2(πx) sin(πy) cos(πy)
sin(πx) cos(πx) sin2(πy) , ud = ud
vd
=
1
2 sin(2πx) cos(2πy)
−1
2 cos(2πx) sin(2πy) ,
ps = pd = sin(πx) cos(πy),
(4.2)
We set that the Stokes domain is Ωs = [0, 1] × [0, 1] , while the Darcy domain is Ωd = [0, 1] × [−1, 0]. And we set α = 1 and Cp = 0. So the period of the velocity fields and pressure fields are Tu = 1, Tp = 2, respectively, as well as the interface is Γ = [0, 1] × {0}. Besides, we explore how various combinations of K(K = κI) and ν affect the ability of different kinds of PINNs.

12 L. Shan and X. Shen
4.4. Analysis of numerical results.
4.4.1. Alleviate the gradient competition. Next we will analyse the numerial results.
Firstly, we analyze the result of several algorithms under K = 10−4I and ν = 1, because ν/κ ≫ 1 leads to gradient competition among ud, vd, pd, and ν/κ ≫ ν leads to gradient competition between Stokes and Darcy equations in Section 3.5. We could draw the following conclusions:
(a) (b)
(c) (d)
Fig. 4.1: These images (a)-(d) compare the abilities of PINNs and AT-PINNs. The dashed gray line means that we end up using the Adam optimizer and then use the L-BFGS optimizer. By row: PINNs, AT-PINNs; By column: Loss , errL2.
• In Fig. 4.1, we could observe that the gradient update of pd is too tiny, so this fact causes the baseline PINNs to ignore the training of pd, while the training of ud and vd is perfect. In other words, the total loss J (x, Θ) converges to zero and udNN and vdNN converge to ud and vd, respectively. Results are errL2(ud) = 0.05929% and errL2(vd) = 0.07349%. But psNN and pdNN do not converge to ps and pd at all. Results are errL2(ps) = 104.1% and errL2(pd) = 135.4%. These results verify our infere-
nce of Section 3.2.1. • The AT-PINNs aims to decouple the Stokes and Darcy equations. During the early training stage, the regional decomposed PINNs are trained alternately by using different total loss J (x, Θ) in Section 3.5. Compared with the baseline PINNs, the AT-PINNs accelerates training by reducing the number of parameters that updates at each epoch, and it saves much time. However, in Fig. 4.1, AT-PINNs may lead to suboptimal outcomes, such as errL2(us) = 104.4%, errL2(vs) = 153.3%, errL2-
(ps) = 104.9% and errL2(pd) = 121.6%. This is because Adam must rely on historical gradient data for updating and AT-PINNs does not handle the coupling conditions on the interface.

A Mixed Form PINNs (MF-PINNs) for Solving the Coupled Stokes-Darcy Equations 13
(a) (b)
(c) (d)
Fig. 4.2: These images (a)-(d) compare the abilities of MW-PINNs and our MF-PINNs. The dashed grey line means that we end up using the Adam optimizer and then use the L-BFGS optimizer. By row: MW-PINNs, MF-PINNs; By column: Loss , errL2.
• The MW-PINNS make full use of different weights, 1/κ and ν/κ, to assemble the total loss J (x, Θ). Compared with the baseline PINNs, the MW-PINNs successfully mitigate the gradient competition between the Stokes and Darcy equations caused by ν/κ ≫ ν. These evidences are errL2(us) = 7.819%, errL2(vs) = 6.679%, errL2(ud) = 0.1832% and errL2(vd) = 0.2491%. However, the gradient competition among ud, vd and pd caused by ν/κ ≫ 1 could not be mitigated. The evidence is that the errL2(pd) does not decr-
ease in the early training stage of LBFGS, and pdNN does not converge to the pd finally in Fig. 4.2. Results are errL2(ps) = 91.52% and errL2(pd) = 151.6%. • Compared with the MW-PINNs, our MF-PINNs mitigates the gradient competition among ud, vd and pd caused by ν/κ ≫ 1 and between the Stokes and Darcy equations caused by ν/κ ≫ v as is shown in Fig. 4.2. Results are errL2(us) = 0.4324%, errL2(vs) = 0.5342%, errL2(ps) = 4.789%, errL2(ud) = 0.04768%, errL2(vd) = 0.04825% and errL2(pd) = 13.91%. Our-
 Fig. 4.3 and Fig. 4.4 show the prediction, truth and error of all the physical fields. These images show the advantages of our MF-PINNs for all the physical fields under extreme κ = 10−4 and ν = 1. Additionally, Fig. 4.5 shows the interface of all the physical fields between the Stokes and Darcy domains, and they validate the ability of our MF-PINNs to handle coupled systems.

14 L. Shan and X. Shen
(a) (b) (c)
(d) (e) (f)
Fig. 4.3: These images (a)-(f ) show the ability of our MF-PINNs to predict the velocity fields of the coupled Stokes-Darcy equations, under K = 10−4I and ν = 1. In these images, the colorful lines stand for the streamlines, the arrows stand for the direction of velocity, and the colorbars stand for the value of velocity. By row: Stokes domain, Darcy domain; By column: MF-PINNs numerical solutions, analytical solutions, absolute error.
(a) (b) (c)
(d) (e) (f)
Fig. 4.4: These images (a)-(f ) show the ability of our MF-PINNs to predict the pressure fields of the coupled Stokes-Darcy equations, under K = 10−4I and ν = 1. By row: Stokes domain, Darcy domain; By column: MF-PINNs numerical solutions, analytical solutions, absolute error.

A Mixed Form PINNs (MF-PINNs) for Solving the Coupled Stokes-Darcy Equations 15
(a) (b) (c)
(d) (e) (f)
Fig. 4.5: These images (a)-(f ) show the absolute error between our MF-PINNs numerical solutions and analytical solutions in the interface, under K = 10−4I and ν = 1. We notice that the constant becomes 2
π
in (2.4). By row: Stokes domain, Darcy domain; By column: x direction of velocity field, y direction of velocity field, pressure field.
Secondly, we consider the performance of MF-PINNs in Table 4.2 under K = κI, κ ⩽ 1 and ν ⩽ 1. We could therefore make the following deductions: 1. Our MF-PINNs could effectively train the velocity fields under extreme cases, like the group κ = 1, ν = 10−4. Similarly, our MF-PINNs could effectively train the pressure fields under the group κ = 10−4, ν = 1. On the opposite side, neither baseline PINNs, MW-PINNs, nor ATPINNs could not alleviate the problem of gradient competition of velocity fields a-
nd pressure fields, even though MW-PINNs could balance the training of physical fields between the Stokes and Darcy domains better than baseline PINNs. 2. Compared with other PINNs models, our MF-PINNs could also handle the gradient competition of each physical field effectively, in other extreme cases, like the group κ = 10−2, ν = 1, the group κ = 1, ν = 10−2, the group κ = 10−4, ν = 10−2 and the group κ = 10−2, ν = 10−4. 3. However, compared with the MW-PINNs, the performance of our MF-PINNs see-
ms not ideal under the group κ = 10−4, ν = 10−4. Therefore, we hope to find several more reasonable combinations of coefficients for the new total loss Je(x, Θ). 4. The performances of baseline PINNs and MW-PINNs are very similar under common cases, like the group κ = 1, ν = 1 and the group κ = 10−2, ν = 10−2. Our MF-PINNs performs better, but it requires much more time. 5. Besides, AT-PINNs does save a lot of time, but the performance of AT-PINNs is clearly inferior to that of baseline PINNs unde-
r most groups of K = κI, κ ⩽ 1 and ν ⩽ 1. 6. Among these several kinds of PINNs, the errors of MW-PINNs and our MF-PINNs are closer to that of AS-DNN. This fact reflects that our MF-PINNs is closer to the maximum fitting ability of NN under the size of data and most groups of K = κI, κ ⩽ 1 and ν ⩽ 1.

16 L. Shan and X. Shen
Table 4.2: This table lists the performance of different kinds of PINNs under different combinations of K and ν values ( K = κI, κ ⩽ 1 and ν ⩽ 1 ).
Arguments Algorithm errL2 (us) errL2 (vs) errL2 (ps) errL2 (ud) errL2 (vd) errL2 (pd) Time
NULL AS-DNN 6.179 × 10−3 6.479 × 10−3 2.855 × 10−3 5.251 × 10−3 5.063 × 10−3 3.432 × 10−3 602s
PINNs 1.012 × 100 9.191 × 10−1 3.486 × 10−4 1.009 × 100 1.009 × 100 2.946 × 10−4 1177s κ = 1 AT-PINNs 1.318 × 100 1.066 × 100 4.974 × 10−4 1.081 × 100 1.045 × 100 6.130 × 10−3 1161s ν = 10−4 MW-PINNs 1.187 × 10−1 1.119 × 10−1 6.542 × 10−4 1.073 × 100 1.085 × 100 6.564 × 10−4 1948s MF-PINNs ↑ 1.096 × 10−2 1.513 × 10−2 1.935 × 10−4 8.094 × 10−2 6.349 × 10−2 2.101 × 10−4 2505s
PINNs 2.001 × 10−1 1.974 × 10−1 1.041 × 100 5.929 × 10−4 7.349 × 10−4 1.354 × 100 2161s κ = 10−4 AT-PINNs 1.044 × 100 1.533 × 100 1.049 × 100 6.862 × 10−1 7.032 × 10−1 1.216 × 100 918s ν = 1 MW-PINNs 7.819 × 10−2 6.679 × 10−2 9.152 × 10−1 1.832 × 10−3 2.491 × 10−3 1.516 × 100 2294s MF-PINNs ↑ 4.324 × 10−3 5.342 × 10−3 4.789 × 10−2 4.768 × 10−4 4.825 × 10−4 1.393 × 10−1 3174s
PINNs 1.475 × 10−2 2.036 × 10−2 7.736 × 10−4 9.943 × 10−1 9.944 × 10−1 3.217 × 10−4 1216s κ = 1 AT-PINNs 1.543 × 10−1 1.908 × 10−1 5.487 × 10−3 1.001 × 100 1.008 × 100 1.063 × 10−2 1141s ν = 10−2 MW-PINNs 2.407 × 10−2 2.887 × 10−2 1.438 × 10−3 9.704 × 10−1 9.634 × 10−1 2.192 × 10−4 1322s MF-PINNs ↑ 1.324 × 10−2 1.878 × 10−2 6.918 × 10−4 1.430 × 10−2 1.418 × 10−2 2.343 × 10−4 2588s
PINNs 4.832 × 10−2 3.718 × 10−2 6.949 × 10−1 1.587 × 10−2 5.930 × 10−2 1.115 × 100 2498s κ = 10−2 AT-PINNs 1.187 × 10−1 2.764 × 10−1 8.793 × 10−1 5.022 × 10−1 4.878 × 10−1 1.127 × 100 1014s ν = 1 MW-PINNs 2.544 × 10−2 2.474 × 10−2 3.713 × 10−1 1.167 × 10−2 2.743 × 10−2 5.375 × 10−1 1347s MF-PINNs ↑ 7.157 × 10−3 7.467 × 10−3 1.356 × 10−1 2.905 × 10−3 5.332 × 10−3 1.633 × 10−1 3077s
PINNs 1.974 × 10−1 1.984 × 10−1 1.636 × 10−1 1.290 × 10−2 1.475 × 10−2 3.103 × 10−1 2191s κ = 10−4 AT-PINNs 6.896 × 10−1 9.729 × 10−1 1.312 × 10−1 1.601 × 10−1 1.678 × 10−1 6.870 × 10−1 1283s ν = 10−2 MW-PINNs 2.229 × 10−2 2.405 × 10−2 1.267 × 10−1 7.705 × 10−3 1.197 × 10−2 2.178 × 10−1 1712s MF-PINNs ↑ 7.766 × 10−3 1.219 × 10−2 8.323 × 10−2 8.133 × 10−3 8.496 × 10−3 1.425 × 10−1 2373s
PINNs 1.140 × 100 1.064 × 100 3.098 × 10−4 1.012 × 100 1.016 × 100 2.902 × 10−4 1172s κ = 10−2 AT-PINNs 1.477 × 100 1.319 × 100 6.653 × 10−4 1.024 × 100 1.022 × 100 7.349 × 10−3 1187s ν = 10−4 MW-PINNs 6.285 × 10−2 9.743 × 10−2 3.850 × 10−4 9.711 × 10−1 9.658 × 10−1 4.748 × 10−4 1988s MF-PINNs ↑ 5.531 × 10−3 7.903 × 10−3 2.608 × 10−4 1.082 × 10−1 1.106 × 10−1 2.491 × 10−3 2519s
PINNs 1.034 × 100 1.033 × 100 1.170 × 10−3 1.919 × 10−2 1.578 × 10−2 1.063 × 10−3 1434s κ = 10−4 AT-PINNs 1.007 × 100 1.084 × 100 4.226 × 10−3 2.147 × 10−1 2.141 × 10−1 1.189 × 10−2 1147s ν = 10−4 MW-PINNs ↑ 8.132 × 10−2 1.949 × 10−1 3.466 × 10−3 7.448 × 10−2 7.802 × 10−2 9.472 × 10−3 1885s MF-PINNs 1.706 × 10−2 2.491 × 10−2 2.063 × 10−2 4.968 × 10−1 5.293 × 10−1 7.171 × 10−2 2698s
PINNs ↑ 4.067 × 10−3 4.663 × 10−3 5.480 × 10−4 5.531 × 10−3 6.937 × 10−3 2.785 × 10−4 1206s κ = 10−2 AT-PINNs 1.521 × 10−1 2.441 × 10−1 1.436 × 10−2 8.583 × 10−1 8.000 × 10−1 2.668 × 10−2 1220s ν = 10−2 MW-PINNs 1.295 × 10−2 1.169 × 10−2 9.049 × 10−4 1.422 × 10−2 8.422 × 10−3 4.918 × 10−4 1339s MF-PINNs 1.720 × 10−3 2.579 × 10−3 1.110 × 10−3 5.286 × 10−3 5.136 × 10−3 3.200 × 10−3 2589s
PINNs 2.283 × 10−2 2.172 × 10−2 1.073 × 10−1 7.982 × 10−3 8.275 × 10−3 2.437 × 10−2 1320s κ = 1 AT-PINNs 3.108 × 10−2 8.320 × 10−2 1.946 × 10−1 9.185 × 10−1 8.696 × 10−1 8.420 × 10−2 1199s ν = 1 MW-PINNs 2.006 × 10−2 2.291 × 10−2 1.061 × 10−1 1.074 × 10−2 9.551 × 10−3 1.015 × 10−2 1326s MF-PINNs ↑ 3.181 × 10−3 2.764 × 10−3 1.725 × 10−2 4.606 × 10−3 4.361 × 10−3 3.805 × 10−3 3168s
The bold marks the lowest error of each physical quantity in each arguments group, while the underline marks the second-lowest error of each physical quantity in each arguments group. The upward arrows ↑ mark the relatively best methods under the same parameters.
Thirdly, we consider the performance of MF-PINNs in Table 4.3 under the groups K = κI, κ ⩾ 1 and ν ⩾ 1. Consequently, we could draw the following conclusions: 1. Our MF-PINNs could effectively train the velocity fields under extreme cases, like the group κ = 1, ν = 104. Similarly, our MF-PINNs could effectively train the pressure fields under group κ = 104, ν = 1. On the opposite side, it seems that MW-PINNs has few improvements compared to baseline PINNs. What’s worse, neither the baseline PINNs,-
 MW-PINNs nor AT-PINNs could not alleviate the problem of gradient competition. 2. Compared with other PINNs models, our MF-PINNs could also handle the gradient competition of each physical field effectively, under other complex cases, like the group κ = 102, ν = 1, the group κ = 1, ν = 102, the group κ = 104, ν = 102 and the group κ = 102, ν = 104. 3. Our MF-PINNs performs better than MW-PINNs, while MW-PINNs performs better than baseline PINNs under the group κ = 104, ν = 104 and the group κ = 1-
02, ν = 102. 4. In the cases of the group κ = 104, ν = 104 and group κ = 102, ν = 102, the performance of our

A Mixed Form PINNs (MF-PINNs) for Solving the Coupled Stokes-Darcy Equations 17
MF-PINNs is better than that of MW-PINNs. And in the cases of the group κ = 1, ν = 1, the performance of MW-PINNs is like that of baseline PINNs. 5. Besides, AT-PINNs is quick to stop training, but the results of AT-PINNs are not as good as the baseline PINNs obviously under the group K = κI, κ ⩾ 1 and the group ν ⩾ 1. 6. Among these several kinds of PINNs, the errors of MW-PINNs and our MF-PINNs are closer to that of AS-DNN. This fact reflects that our MF-PINNs is closer to the maximum fitting ab-
ility of NN under the size of data and most groups K = κI, κ ⩾ 1 and ν ⩾ 1.
Table 4.3: This table lists the performance of different kinds of PINNs under different combinations of K and ν values ( K = κI, κ ⩾ 1 and ν ⩾ 1 ).
Arguments Algorithm errL2 (us) errL2 (vs) errL2 (ps) errL2 (ud) errL2 (vd) errL2 (pd) Time
NULL AS-DNN 5.441 × 10−3 6.615 × 10−3 4.039 × 10−3 4.736 × 10−3 4.576 × 10−3 2.921 × 10−3 611s
PINNs 8.506 × 10−1 8.465 × 10−1 4.544 × 100 3.615 × 10−2 3.317 × 10−2 4.385 × 100 2671s κ = 1 AT-PINNs 1.546 × 100 1.275 × 100 5.273 × 100 1.881 × 10−1 2.014 × 10−1 5.498 × 100 1820s ν = 104 MW-PINNs 3.252 × 10−1 5.312 × 10−1 2.262 × 100 1.165 × 10−1 5.557 × 10−2 1.803 × 100 3806s MF-PINNs ↑ 2.336 × 10−1 3.984 × 10−1 6.628 × 10−1 1.686 × 10−2 1.702 × 10−2 2.950 × 10−1 4387s
PINNs 2.438 × 10−2 2.837 × 10−2 1.230 × 10−1 1.006 × 100 1.008 × 100 4.523 × 10−2 1422s κ = 104 AT-PINNs 5.280 × 10−2 1.611 × 10−1 2.974 × 10−1 1.022 × 100 1.024 × 10−1 2.209 × 10−1 1263s ν = 1 MW-PINNs 4.604 × 10−2 7.590 × 10−2 2.603 × 10−1 1.003 × 100 1.012 × 100 7.821 × 10−2 1726s MF-PINNs ↑ 2.814 × 10−3 2.205 × 10−3 1.433 × 10−2 6.335 × 10−3 6.114 × 10−3 5.755 × 10−4 3821s
PINNs 3.235 × 10−1 4.478 × 10−1 3.944 × 100 7.348 × 10−2 5.276 × 10−2 2.985 × 100 2695s κ = 1 AT-PINNs 3.406 × 10−1 8.945 × 10−1 2.954 × 100 8.897 × 10−1 6.241 × 10−1 1.451 × 101 1871s ν = 102 MW-PINNs 7.680 × 10−2 7.207 × 10−2 1.621 × 100 7.186 × 10−2 1.047 × 10−1 2.315 × 100 2508s MF-PINNs ↑ 1.500 × 10−2 1.123 × 10−2 8.136 × 10−1 6.666 × 10−3 6.114 × 10−3 7.706 × 10−1 5637s
PINNs 2.688 × 10−2 2.561 × 10−2 1.331 × 10−1 9.958 × 10−1 9.982 × 10−1 3.174 × 10−2 1368s κ = 102 AT-PINNs 5.010 × 10−2 1.061 × 10−1 2.061 × 10−1 1.012 × 100 1.024 × 100 8.993 × 10−2 1205s ν = 1 MW-PINNs 3.121 × 10−2 2.564 × 10−2 1.447 × 10−1 9.306 × 10−1 9.325 × 10−1 2.012 × 10−2 1440s MF-PINNs ↑ 4.673 × 10−3 6.455 × 10−3 2.765 × 10−2 2.337 × 10−3 2.512 × 10−3 1.268 × 10−2 3500s
PINNs 4.119 × 10−1 8.610 × 10−1 1.924 × 100 1.000 × 100 1.000 × 100 1.624 × 100 2337s κ = 104 AT-PINNs 4.804 × 10−1 6.985 × 10−1 1.334 × 101 1.002 × 100 9.732 × 10−1 1.334 × 101 1774s ν = 102 MW-PINNs 5.641 × 10−2 5.177 × 10−2 1.126 × 100 1.003 × 100 9.970 × 10−1 6.557 × 10−2 2058s MF-PINNs ↑ 1.369 × 10−2 1.061 × 10−2 9.956 × 10−1 6.484 × 10−2 6.555 × 10−2 7.649 × 10−1 7396s
PINNs 3.098 × 100 1.106 × 100 8.637 × 100 1.000 × 100 1.000 × 100 8.553 × 100 2144s κ = 102 AT-PINNs 2.433 × 100 1.333 × 100 2.095 × 100 1.014 × 100 1.047 × 100 1.883 × 101 2770s ν = 104 MW-PINNs 2.047 × 100 8.288 × 10−1 6.471 × 100 1.290 × 10−1 1.352 × 10−1 6.482 × 100 2805s MF-PINNs ↑ 2.906 × 10−1 1.882 × 10−1 3.701 × 10−1 1.464 × 10−1 1.539 × 10−1 1.477 × 10−1 4014s
PINNs 1.408 × 100 1.565 × 100 4.623 × 100 1.000 × 100 1.000 × 100 3.257 × 100 3072s κ = 104 AT-PINNs 1.562 × 100 1.455 × 100 2.027 × 100 2.262 × 100 3.733 × 100 1.929 × 101 2547s ν = 104 MW-PINNs 3.484 × 10−1 5.449 × 10−1 1.286 × 100 7.459 × 10−1 9.900 × 10−1 4.087 × 10−1 2837s MF-PINNs ↑ 2.000 × 10−1 6.306 × 10−1 4.114 × 10−1 1.689 × 10−1 1.697 × 10−1 2.032 × 10−1 3995s
PINNs 1.900 × 10−1 1.147 × 100 3.038 × 100 1.012 × 100 2.336 × 100 2.990 × 100 1904s κ = 102 AT-PINNs 8.916 × 10−1 8.958 × 10−1 2.961 × 100 1.904 × 100 1.227 × 100 2.152 × 100 2272s ν = 102 MW-PINNs 6.667 × 10−2 4.141 × 10−2 7.902 × 10−1 8.544 × 10−2 6.701 × 10−2 4.041 × 10−1 2285s MF-PINNs ↑ 2.014 × 10−2 1.450 × 10−2 3.157 × 10−1 5.781 × 10−2 5.812 × 10−2 5.913 × 10−2 6679s
PINNs 2.867 × 10−2 2.729 × 10−2 1.478 × 10−1 1.335 × 10−2 1.652 × 10−2 4.096 × 10−2 1324s κ = 1 AT-PINNs 4.077 × 10−2 8.280 × 10−2 2.055 × 10−1 8.397 × 10−1 8.074 × 10−1 8.716 × 10−2 1255s ν = 1 MW-PINNs 1.725 × 10−2 2.180 × 10−2 7.160 × 10−2 1.207 × 10−2 1.160 × 10−2 2.102 × 10−2 1420s MF-PINNs ↑ 2.996 × 10−3 2.524 × 10−3 1.936 × 10−2 2.919 × 10−3 3.026 × 10−3 1.608 × 10−3 3329s
The bold marks the lowest error of each physical quantity in each arguments group, while the underline marks the second-lowest error of each physical quantity in each arguments group. The upward arrows ↑ mark the relatively best methods under the same parameters.

18 L. Shan and X. Shen
4.4.2. Ablation experiments for MF-PINNs. To verify the effect of other improvements for MF-PINNs, we conduct the following ablation experiments.
Firstly, we conduct several experiments on different combinations of activation functions. Table 4.4 lists the results of the different combinations of activation functions. All the experiments adopt MFPINNs under the group K = 10−4I, ν = 1. Thus, we could draw the following conclusions:
1. The smoothness of ReLU (θx) is too limited, and it could not be used in Stokes-Darcy problems, unless it is replaced by Sof tplus(θx), Swish(θx), etc. 2. The adaptive tanh(θx) converges faster than sigmoid(θx), while it seems that the effects of adaptive sigmoid(θx) are much better than tanh(θx) in our MF-PINNs. 3. The adaptive sin(2πθx/T ) is quite effective for high-frequency problems, but it may not be the best choice for low-frequency problems. In addition, if the parameter 2πθ/T is too lar-
ge, like sin(2πθx) in this case, it may be very risky to cause gradient explosion during backwarding. 4. The pre-positioned Fourier feature layers are one of the effective ways for our MF-PINNs. Furthermore, accurate periodic characteristics are quite crucial for training PINNs. For example, the performance of tanh(θ) ◦ sin(x) would not be as suitable as that of tanh(θ) ◦ sin(πx) in this case. 5. In this case, it is obvious to see the period of the velocity fields and pressure fields, Tu = 1, Tp =-
 2. Hence, the least common multiple of their periods is T = 2, and the periods of Fourier feature operators had better be several integer multiples of T = 2. In Table 4.4, the performance of tanh(θ) ◦ sin(πx) is not as effective as tanh(θ) ◦ sin(2πx) for our MF-PINNs. And this difference is especially reflected in the error of pressure field, errL2 (p).
Table 4.4: This table shows that different combinations of activation functions (AF) lead to changing accuracy of our MF-PINNs under group K = 10−4I, ν = 1.
First AF Other AF errL2 (us) errL2 (vs) errL2 (ps) errL2 (ud) errL2 (vd) errL2 (pd) Time
ReLU (θx) ReLU (θx) Inf Inf Inf Inf Inf Inf 4582s Sof tplus(θx) Sof tplus(θx) 1.731 × 10−2 1.954 × 10−2 7.732 × 10−1 2.629 × 10−3 2.708 × 10−3 2.372 × 100 7477s sigmoid(θx) sigmoid(θx) 2.811 × 10−2 2.745 × 10−2 1.630 × 10−1 6.859 × 10−4 6.695 × 10−4 2.299 × 10−1 5652s tanh(θx) tanh(θx) 4.287 × 10−3 4.367 × 10−3 8.676 × 10−1 9.146 × 10−4 1.072 × 10−3 1.371 × 100 3756s
sin(θx) sin(θx) 6.273 × 10−3 6.381 × 10−3 8.854 × 10−1 1.817 × 10−3 1.869 × 10−3 1.384 × 100 3616s sin(πθx) sin(πθx) 6.999 × 10−3 7.427 × 10−3 1.137 × 10−1 4.568 × 10−4 4.304 × 10−4 2.303 × 10−1 3652s sin(2πθx) sin(2πθx) 1.000 × 100 1.000 × 100 1.179 × 101 2.911 × 10−1 2.885 × 10−1 1.179 × 101 2359s
tanh(θ)◦
sin(x) tanh(θx) 5.218 × 10−3 6.560 × 10−3 1.231 × 100 6.244 × 10−4 1.081 × 10−3 1.907 × 100 4424s
tanh(θ)◦
sin(πx) tanh(θx) 8.621 × 10−3 9.590 × 10−3 2.326 × 10−1 7.893 × 10−4 7.703 × 10−4 3.653 × 10−1 3163s
tanh(θ)◦
sin(2πx) tanh(θx) 4.964 × 10−3 6.485 × 10−3 6.737 × 10−2 4.964 × 10−4 4.927 × 10−4 1.068 × 10−2 3662s
The bold marks the lowest error of each physical quantity, while the underline marks the second-lowest error of each
physical quantity. The term Time refers to the total time record taken for 10000 epochs.
Secondly, we use the adaptive activation function strategy for our MF-PINNs to accelerate converging according to Section 3.3. Fig. 4.6 shows the dynamic change of the adaptive parameters a, b during the training process. The activation functions Fs = tanh(0.7240x) and Fd = tanh(0.9394x) are suitable for this particular example under the group K = 10−4I, ν = 1.

A Mixed Form PINNs (MF-PINNs) for Solving the Coupled Stokes-Darcy Equations 19
(a) (b)
Fig. 4.6: These two pictures show the training process of our MF-PINNs under K = 10−4I and ν = 1. The dashed grey line means we end up using the Adam optimizer and then use the L-BFGS optimizer. (a) the dynamic change of adaptive parameters a and b of the adaptive activation functions. (b) the dynamic change of learning rate.
Lastly, we verify the effect of the adaptive strategy for learning rate decay via ReduceLROnPlateau we adopted in Section 3.4 under group K = 10−4I, ν = 1. Furthermore, we could draw the following conclusions:
1. In Fig. 4.6, at the beginning of training during Adam and L-BFGS stages, we set high initial learning rates in Table 4.1 to accelerate uNN to converge effectively. Consequently, the errL2 of group Adam: 10−3 and L-BFGS: 10−1 is generally lower than that of group Adam : 10−3 and L-BFGS: 10−3. 2. Midway through training, we make the learning rate adaptively decay. This work avoids uNN oscillating around the optimal point u because of a relatively high learning rate. The evidence is obvious as fol-
lows: (a) In Table 4.5, the group with the adaptive learning rate decay strategy for the Adam optimizer has a lower error. This is because the strategy for the Adam has a higher training efficiency, and it brings the parameter group closer to the optimal point when the optimizer is changed to L-BFGS. (b) In Table 4.5, although the pressure fields are easy to be ignored, the groups with the adaptive learning rate decay strategy for the L-BFGS could perform more outstandingly. (c) In Fig. 4.2, the t-
otal loss J (x, Θ) oscillates violently and the phenomenon, loss spikes, keep appearing. So it causes the error of MF-PINNs to increases rather than decreases. After adjusting the learning rate of the Adam optimizer from 10−3 to 10−4 at the 3718th epoch in Fig. 4.6, the total loss oscillations are mitigated, and the errL2(ud) and errL2(vd) begin to decrease steadily again in Fig. 4.2. 3. In Table 4.5, the groups without any strategy for decaying the learning rate of L-BFGS require more epochs to s-
top the oscillation. This trouble means more time and computing resources are consumed. At the end of training of L-BFGS, the learning rate decreases adaptively, interval by interval. When the learning rate decreases to 10−8, J (x, Θ) and errL2 barely change in value. Hence, we could infer that uNN (x, Θ) has nearly enough reached the optimal point u(x, Θ).
These facts prove that the strategies we have defined in Section 3.4 are very necessary and highly efficient for training PINNs.

20 L. Shan and X. Shen
Table 4.5: This table shows how different initial learning rates (I-LR) and learning rate decay strategies (LRD) affect the accuracy of our MF-PINNs under the group K = 10−4I, ν = 1. If all the errL2 no longer oscillate later, we approximately consider that the PINNs solutions converge at the nth epoch (CE) during the L-BFGS stage.
I-LR LRD-A LRD-L errL2 (us) errL2 (vs) errL2 (ps) errL2 (ud) errL2 (vd) errL2 (pd) CE Time
Adam: % % 1.195 × 10−2 2.209 × 10−2 1.365 × 10−1 1.565 × 10−3 1.805 × 10−3 2.375 × 10−1 ⩾ 3000th 10027s 10−3 " % 3.866 × 10−2 5.955 × 10−2 2.540 × 10−1 4.406 × 10−3 4.718 × 10−3 2.473 × 10−1 ⩾ 2989th 3827s L-BFGS: % " 1.459 × 10−2 4.341 × 10−2 3.221 × 10−1 1.764 × 10−3 1.757 × 10−3 4.602 × 10−1 1611th 6161s 10−3 " " 4.154 × 10−2 7.835 × 10−2 2.726 × 10−1 3.950 × 10−3 4.466 × 10−3 2.116 × 10−1 1st 2017s
Adam: % % 5.596 × 10−3 7.626 × 10−3 1.972 × 10−1 2.516 × 10−4 2.596 × 10−4 2.858 × 10−1 ⩾ 3000th 6131s 10−3 " % 4.200 × 10−3 4.270 × 10−3 1.537 × 10−1 2.603 × 10−4 2.741 × 10−4 2.275 × 10−1 ⩾ 3000th 5198s L-BFGS: % " 5.690 × 10−3 6.345 × 10−3 3.532 × 10−1 4.785 × 10−4 5.433 × 10−4 5.927 × 10−1 597th 3086s 10−1 " " 2.715 × 10−3 3.103 × 10−3 5.404 × 10−2 4.959 × 10−4 6.254 × 10−4 6.951 × 10−2 569th 3365s
The underline marks the minimum error of the former group, while the bold marks the minimum error of the latter
group.
5. Conclusions and prospects. In this paper, we conclude that extreme physical constants always produce ill-conditional numerical formulations in conventional methods. To improve PINNs, we conclude with the following suggestions.
1. From the perspective of physical laws:
(a) The multiple physics fields are usually coupled through physical constants, such as Reynolds number, permeability tensor, etc. When they are either extremely high or low, they may lead to gradient competition between the multiple physics fields and failed training for conventional PINNs. (b) For the problems above, our MF-PINNs decouples the velocity field and the pressure field by combining the VP form and the SV form. This improvement could effectively alleviate the gradient competition amon-
g multiple physics fields. (c) At present, the idea of decoupling must rely on the linear differential operators in the equations. However, it may be uncertain to generalize it to other more complex systems or models, such as Euler’s equations, compressible flows, and shock waves.
2. From the perspective of the activation functions and training parallel PINNs:
(a) It is necessary to select activation functions with sufficient smoothness, because they directly determine whether the PINNs numerical solutions are well-defined or not. (b) We could obtain the physical periodicity from the boundary conditions and non-homogeneous terms. The period of the activation functions had better be integer multiples of the original problem. Otherwise, the opposite operation may waste many computing resources. (c) We conclude that different activation functions are effec-
tive for different problems, and combining different types of activation functions may improve the abilities of PINNs. For example, the tanh is suitable for discontinuity problems, while the sin is appropriate for high-frequency problems. (d) We find that increasing the initial learning rate of L-BFGS appropriately and using adaptive strategies for learning rate decay are important to our MF-PINNs. Though our MOD-PINNS overcomes some shortcomings in this paper, we have to admit that it has not bee-
n studied and applied further. How to select the optimal weights for different equation forms in loss functions? Could our MF-PINNs have the potential to solve complex turbulence hidden in NavierStokes systems, when the Reynolds numbers are extremely high or low? These topics are worth further exploring and studying.

A Mixed Form PINNs (MF-PINNs) for Solving the Coupled Stokes-Darcy Equations 21
CRediT authorship contribution statement. Li Shan: Conceptualization, Methodology, Investigation, Writing – review & editing, Supervision, Project administration, Funding acquisition. Xi Shen: Methodology, Visualization, Coding, Validation, Writing - original draft preparation.
Declaration of competing interest. The authors declare that they have no known competing financial interests or personal relationships that could have appeared to influence the work reported in this paper.
Data availability. Data will be made available on request. The code and data associated with this paper are available at https://github.com/shxshx48716/MF-PINNs.git.
Acknowledgements. The authors of this paper gratefully acknowledge Prof. J. Zhao of Capital Normal University for his expert guidance on methodology and reviewing of the entire manuscript.
REFERENCES
[1] G.S. Beavers , D.D. Joseph, Boundary conditions at a naturally permeable wall. J. Fluid Mech. 1967, 30, 197-207. [2] M. Raissi , P. Perdikaris, G.E. Karniadakis, Physics-informed neural networks: A deep learning framework for solving forward and inverse problems involving nonlinear partial differential equations. J. Comput. Phys. 2019, 378, 686–707. [3] A.D. Jagtap, E. Kharazmi, G.E. Karniadakis, Conservative physics-informed neural networks on discrete domains for conservation laws: Applicati-
ons to forward and inverse problems. Comput. Methods Appl. Mech. Eng. 2020, 365, 113028. [4] K. Shukla, A.D. Jagtap, G.E. Karniadakis, Parallel physics-informed neural networks via domain decomposition. J. Comput. Phys. 2021, 447, 110683.
[5] A. Kumar Sarma, S. Roy, C. Annavarapu, P. Roy, S. Jagannathan, Interface PINNs (I-PINNs): A physics-informed neural networks framework for interface problems, Comput. Methods Appl. Mech. Eng., 2024, 429, 117135. [6] N. Chen, L. Sergio ,R. Ma, A. Chen,C. Cui , PF-PINNs: Physics-informed neural networks for solving coupled Allen-Cahn and Cahn-Hilliard phase field equations, J. Comput. Phys., 2025, 529, 113843. [7] R. Mattey, S. Ghosh, A novel sequential method to train physics informed neural ne-
tworks for Allen Cahn and Cahn Hilliard equations, Comput. Methods Appl. Mech. Eng., 2022, 390, 114474.
[8] H. Li, H. Fan, Z. Tan, Two novel discontinuity-removing PINNs for solving variable coefficient elliptic interface problems on curved surfaces, Comput. Methods Appl. Mech. Eng., 2025, 435, 117637. [9] A.D. Jagtap, G.E. Karniadakis, Extended physics-informed neural networks (XPINNs): A generalized space-time domain decomposition based deep learning framework for nonlinear partial differential equations. Commun. Comput. Phys. 2020, 28, 2002–2041. [10] S. Wang, A.K. Bhartari, B. Li, P. Perdikaris,-
 Gradient Alignment in Physics-informed Neural Networks: A SecondOrder Optimization Perspective, arXiv preprint arXiv:2502.00604, 2025. [11] Y. Hwang, D. Lim, Dual Cone Gradient Descent for Training Physics-Informed Neural Networks, arXiv preprint arXiv:2409.18426, 2024.
[12] S. Wang, X. Yu, P. Perdikaris, When and why PINNs fail to train: A neural tangent kernel perspective, J. Comput. Phys., 2022, 449, 110768. [13] A. Bonfanti, G. Bruno, C. Cipriani, The Challenges of the Nonlinear Regime for Physics-Informed Neural Networks, arXiv preprint arXiv:2402.03864, 2024.
[14] Y. Wang, Y. Yao, J. Guo, Z. Gao, A practical PINN framework for multi-scale problems with multi-magnitude loss terms, J. Comput. Phys., 2024, 510, 113112.
[15] Q. Liu, M. Chu, N. Thuerey, ConFIG: Towards Conflict-free Training of Physics Informed Neural Networks, arXiv preprint arXiv:2408.11104, 2025.
[16] N. Chen, C. Cui, R. Ma, A. Chen, S. Wang , Sharp-PINNs: staggered hard-constrained physics-informed neural networks for phase field modelling of corrosion, arXiv preprint arXiv:2502.11942, 2025. [17] S.V. Patankar, D.B. Spalding, A calculation procedure for heat, mass and momentum transfer in three-dimensional parabolic flows. In Numerical Prediction of Flow, Heat Transfer, Turbulence and Combustion; Patankar S.V., Pollard A., Singhal A.K., Vanka S.P., Eds.; Pergamon: Oxford, UK, 1983, 54-73.-
 [18] C.H. Lan, Y.D. Wu, The component-consistent pressure correction projection method for the incompressible NavierStokes equations, Comput. Math. Appl., 1996, 31(8), 1-21. [19] A.D. Jagtap, K. Kawaguchi, G.E. Karniadakis, Adaptive activation functions accelerate convergence in deep and physics-informed neural networks, J. Comput. Phys., 2020, 404, 109136. [20] S. Wang, H. Wang, P. Perdikaris, On the eigenvector bias of Fourier feature networks: From regression to solving multi-scale PDEs with p-
hysics-informed neural networks, Comput. Methods Appl. Mech. Eng., 2021, 384, 113938. [21] S. Cai, Z. Wang, L. Lu, T.A. Zaki, G.E. Karniadakis, DeepM & Mnet: Inferring the electroconvection multiphysics fields based on operator approximation by neural networks, J. Comput. Phys., 2021, 436, 110296.

22 L. Shan and X. Shen
[22] Z. Mao, L. Lu, O. Marxen, T.A. Zaki, G.E. Karniadakis, DeepM & Mnet for hypersonics: Predicting the coupled flow and finite-rate chemistry behind a normal shock using neural-network approximation of operators, J. Comput. Phys., 2021, 447, 110698. [23] X. Li, J. Wu, X. Tai, J. Xu, Y.G. Wang, Solving a class of multi-scale elliptic PDEs by Fourier-based mixed physics informed neural networks, J. Comput. Phys., 2024, 508, 113012. [24] Z.Q. Xu, Y. Zhang, T. Luo, Y. Xiao, Z. Ma, Frequency Principl-
e: Fourier Analysis Sheds Light on Deep Neural Networks, Commun. Comput. Phys., 2019, 26(5), 1485-1511.
[25] D. Liu, Y. Wang, A Dual-Dimer method for training physics-constrained neural networks with minimax architecture, Neural Networks, 2021, 136, 112-125.
[26] S. Wang, B. Li, Y. Chen, P. Perdikaris, PirateNets: Physics-informed Deep Learning with Residual Adaptive Networks, Journal of Machine Learning Research, 2024, 25, 1-51.
[27] S. Xu, Y. Dai, C. Yan, Z. Sun, R. Huang, D. Guo, G. Yang, On the preprocessing of physics-informed neural networks: How to better utilize data in fluid mechanics, J. Comput. Phys., 2025, 528, 113837. [28] C. Qiu, J. Hou, Y. Xia, L. Shan, A high order ensemble algorithm for dual-porosity-Navier–Stokes flows. J. Comput. Phys. 2025, 529, 113833.
[29] M. Lai, P. Wenston, Bivariate Spline Method for Numerical Solution of Steady State Navier–Stokes Equations over Polygons in Stream Function Formulation. Numer. Methods Partial Differ. Equ. 2000, 16 (2), 147–173. [30] J. Zhao, W. Zhu, B. Zhang, Y. Yang, The stabilized nonconforming virtual element method for the Darcy–Stokes problem, Commun. Nonlinear Sci. Numer. Simul., 2024, 138, 108252.
[31] K. Hornik, Approximation capabilities of multilayer feedforward networks, Neural Networks, 1991, 4(2), 251-257. [32] X. Meng, R. Xie, J. Liao, X. Shen, S. Yang, A cost-effective over-temperature alarm system for cold chain delivery. J. Food Eng. 2024, 368, 111914.
[33] Y. Wang, Y. Yao, Z. Gao, An extrapolation-driven network architecture for physics-informed deep learning, Neural Networks, 2025, 183, 106998.
[34] J. He, L. Li, J. Xu, C. Zheng, ReLU Deep Neural Networks and Linear Finite Elements. Journal Comput. Math. 2020, 38(3), 502–527. [35] J. Yue, J. Li, Efficient coupled deep neural networks for the time-dependent coupled Stokes-Darcy problems. Appl. Math. Comput. 2023, 437, 127514.
[36] R. Pu, X. Feng, Physics-Informed Neural Networks for Solving Coupled Stokes–Darcy Equation. Entropy 2022, 24, 1106.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:18:30.301Z
- **Text Length:** 65369 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 22 of 22
