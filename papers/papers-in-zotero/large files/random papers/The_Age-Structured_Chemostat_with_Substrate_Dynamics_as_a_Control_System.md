# PDF Document: Karafyllis et al. - The Age-Structured Chemostat with Substrate Dynamics as a Control System.pdf

**File Path:** Karafyllis et al. - The Age-Structured Chemostat with Substrate Dynamics as a Control System.pdf

**Processed Date:** 2026-02-10T18:17:12.681Z

**File Size:** 611.58 KB

**Total Pages:** 32

**Extracted Pages:** 32

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 3636

**Title:** The Age-Structured Chemostat with Substrate Dynamics as a Control System

**Collection:** Large Files > Random Papers

---

## Extracted Text Content

1
The Age-Structured Chemostat with Substrate Dynamics as a Control System
Iasson Karafyllis*, Dionysis Theodosis* and Miroslav Krstic**
*Dept. of Mathematics, National Technical University of Athens, Zografou Campus, 15780, Athens, Greece, emails: iasonkar@central.ntua.gr , dtheodp@central.ntua.gr
**Dept. of Mechanical and Aerospace Eng., University of California, San Diego, La Jolla, CA 92093-0411, U.S.A., email: krstic@ucsd.edu
Abstract
In this work we study an age-structured chemostat model with a renewal boundary condition and a coupled substrate equation. The model is nonlinear and consists of a hyperbolic partial differential equation and an ordinary differential equation with nonlinear, nonlocal terms appearing both in the ordinary differential equation and the boundary condition. Both differential equations contain a non-negative control input, while the states of the model are required to be positive. Under an appropriate -
weak solution framework, we determine the state space and the input space for this model. We prove global existence and uniqueness of solutions for all admissible initial conditions and all allowable control inputs. To this purpose we employ a combination of Banach's fixed-point theorem with implicit solution formulas and useful solution estimates. Finally, we show that the age-structured chemostat model gives a well-defined control system on a metric space.
Keywords: Age-structured chemostat, PDEs, well-posedness
1. Introduction
A chemostat is a continuous-flow bioreactor which has been widely used for maintaining continuous microbial growth. In a chemostat, fresh medium enters and culture leaves at the same rate, keeping the working volume constant. The chemostat has found numerous applications in practical systems like wastewater treatment, biomass, biofuel, and pharmaceuticals production. The chemostat has a central role in mathematical biology, where it has been studied both as a dynamical system and as a control syst-
em. On the dynamical systems side, numerous studies examine the stability properties of equilibria and long-term behavior of the chemostat such as existence of periodic solution under periodic substrate for both single-species and multiple

2
competitive organisms (see for instance [1], [4], [6], [9], [24], [25], [27], [33]). From a control viewpoint, the chemostat has been studied through a variety of feedback designs and methods that leverage the dilution rate as control input. These methods include LQ-based strategies, adaptive feedback schemes under uncertainties, stabilization under measurement and actuation delays, control Lyapunov function, as well as dynamic feedback law designs (see for instance [2], [7], [8], [12], [14], [20]-
, [21]).
A key topic in mathematical modeling for biology, medicine, demography, and economics is the analysis of structured population models that encode distributions over age, size, and sex within a single population. Age-structured models account for the distribution of individuals across their life cycle where, instead of treating the population as homogeneous, they represent how processes like growth, division, and death depend on age, and they include a boundary condition that generates new individu-
als when older ones reproduce or divide (see for instance [3], [10], [29], [32]). A classic example of age-structured model is the well-known as McKendrick-von Foerster ([11], [22]), which is a first order hyperbolic Partial Differential Equation (PDE) with a nonlocal boundary condition. In age-structured models, ergodic theorems are sometimes used to characterize long-time behavior, see [15], [16], [17], [19].
The mathematical model of the simple chemostat has several limitations. As quoted by Pilyugin and Waltman in [23], “Following the accumulation of experimental data, it became evident that the simple model requires modification. Specifically, the simple model failed to explain the observed oscillatory behavior in the chemostat.” Agestructured models are natural extensions of the standard chemostat: they keep the same continuous-flow idea but also include age as a second variable capturing how growt-
h depends on the age of the population (see [13], [19], [26], [32]). This additional structure enriches the model’s qualitative behavior by capturing oscillations that simple Ordinary Differential Equation (ODE) models fail to reproduce, see [30], [31]. Thus, age-structured formulations therefore provide a more realistic and dynamically richer description of continuous bioreactors. However, when the age structure of the microbial population is coupled to substrate dynamics, the resulting PDE–ODE s-
ystem introduces nonlinear and nonlocal terms that destroy the necessary structure for the application of the ergodic theorem (as was done in [15], [16], [17], [19]).
In this paper we deal with the age-structured chemostat model with substrate dynamics proposed in [30], [31] which consists of a first-order PDE coupled with an ODE describing the substrate rate of change and a nonlinear, non-local boundary condition. This is the first paper that studies the age-structured chemostat with substrate dynamics as a control system under very mild and physically reasonable assumptions. It should be noted that the stabilization problem of the age-structured chemostat was-
 also studied in [20]. However, [20] required some demanding structural assumptions that led to a simpler finite-dimensional system. The contributions of the paper are as follows:
1) The first contribution of the paper is the clarification of the notion of solution for the age-structured chemostat model with substrate dynamics. The proposed notion of a weak-solution retains sufficient regularity for the study of the qualitative properties of the chemostat.
2) The second contribution of the paper is the well-posedness result. We show that the

3
corresponding initial-boundary value problem is well-posed under mild assumptions which have important physical interpretations (e.g., non-negativity and boundedness of the birth modulus, positivity of the state, etc.). Moreover, we show that the problem admits a global solution for all physically meaningful initial conditions and inputs.
3) The third -and most important from a control-theoretic point of view- is the clarification of the state space, the input space and the formulation of the age-structured chemostat as a well-defined control system.
Having performed the above contributions, future researchers can exploit the proposed formulation and obtain stability and stabilization results or controllability and optimal control results. In other words, our work provides the initial step for a detailed study of the age-structured chemostat with substrate dynamics.
The paper is outlined as follows. Section 2 presents the age-structured chemostat model, its state space and an appropriate definition of a weak solution. Section 3 contains the main results that include global existence and uniqueness of solutions of the agestructured chemostat model, as well as the chemostat as a control system. Finally, Section 4 is devoted to the proofs of the main results, while some concluding remarks are given in Section 5.
Notation Throughout this paper, we adopt the following notation.
 : [0, )
+ = + . For a vector n
x  , x denotes its Euclidean norm.
 Let n
A  be an open set and let n
B  be a set that satisfies A  B  cl( A) ,
where cl( A) is the closure of A . By C0 (B ; ) , we denote the class of continuous
functions on B , which take values in m
  . By ( ; )
Ck B  , where k  1 is an
integer, we denote the class of functions on n
B  , which take values in m

and have continuous derivatives of order k . In other words, the functions of class
(; )
Ck B  are the functions which have continuous derivatives of order k in
A = int(B) that can be continued continuously to all points in A  B . When  =
then we write C0 (B ) or ( )
Ck B .
 Let n
A  be an open set and let m
  be a non-empty set. By ( )
;
Lp A  with
p  1 we denote the equivalence class of measurable functions f : A →  for which
1/
()
p p
p A
f f x dx

=  +



 . By ( )
L A;
  we denote the equivalence class of
measurable functions f : A →  for which ( )
sup ( )
xA
f fx

=  + where
()
sup ( )
xA
fx

is the essential supremum. When m
 = we simply write ( )
Lp A .
When n
B  is not open but has non-empty interior, ( )
;
Lp B  and ( )
L B;
  mean
()
;
Lp A  and ( )
L A;
  , respectively, with A = int(B) . By ( )
;
loc
L
+  we denote

4
the equivalence class of measurable functions f : + →  with  
()
f L 0,T ;


for every T  0 .
 Let I +
 and let f : I + +
 → be a given function. We use the notation f [t]
to denote the profile at certain t  I , i.e., ( f [t])(a) = f (t, a) for all a  0 .
2. The Age-Structured Chemostat Model
Consider the age-structured chemostat model
()
(, ) (, ) ( ) () (, )
ff
ta ta a Dt f ta
ta 
 + =− +
  , (2.1)
0
f (t, 0) (S(t)) k(a) f (t, a)da
+
=  , (2.2)
()
0
( ) ( ) ( ) ( ( )) ( ) ( , )
in
S t D t S S t  S t q a f t a da
+
= − −  , (2.3)
where f (t, a)  0 is the distribution function of the microbial population in the
chemostat at time t  0 and age a  0 , S (t)  0 is the limiting substrate concentration,
0
Sin  is the inlet concentration of the substrate, D(t)  0 is the dilution rate, ( S )
is the specific growth rate function, (a) is the mortality rate and k(a), q(a) are
functions that determine the birth of new cells and the substrate consumption of the microbial population, respectively. All functions ,, k, q : + +
→ are assumed to
be bounded, ( )
C0 + functions with ( )
 C1 +
 , (0) = 0 , (S )  0 for S  0 and
0
k(a)da 0
+

,
0
q(a)da 0
+

.
Clearly, system (2.1), (2.2), (2.3) is a complicated nonlinear model that consists of a hyperbolic PDE (known as McKendrick–von Foerster equation, see [11], [22]) with a non-local boundary condition and an ODE. Boundedness of ,, k, q : + +
→
reflects finite physiological capacities, such as no infinite growth, mortality, birth and
substrate consumption, while
0
k(a)da 0
+

 and
0
q(a)da 0
+

 imply that there is at least
some age range with non-zero reproduction and some age range where substrate is actually consumed. Common choices on the growth rate are the Monod kinetics
()
max
() / S
 S =  S K + S , max , 0
 KS  and the Haldane kinetics
21 max
( ) /( )
PI
S  S K S S K−
= ++ , , 0
PI
K K  (see [27], [9]).
Define:

5
( ) ( )( )
( ) ()
0
1
0
;(0, ) , lim ( ) 0
, 0, : (0) ( ) ( ) ( )
a
in
f C fa
X fS L S f  S k a f a da
+ →+
+
+

 + =

= 

=
 

(2.4)
We consider X to be a metric space with metric given by the formula for all
()
( f , S), f , S  X :
()
( )1
d ( f , S), f , S = f − f + S − S (2.5)
The results that are given below show that the metric space X with metric given by (2.5) is the state space of model (2.1), (2.2), (2.3).
We next provide the notion of solution that is appropriate for system (2.1), (2.2), (2.3).
Definition 1: Let ( )
;
loc
D L
++
 ,( )
00
f , S  X and T  0 be given. We say that a
continuous mapping ( )  
f , S : 0,T → X is a weak solution on  
0,T with input D of
the initial-boundary value problem (2.1), (2.2), (2.3) with initial condition
00
f [0] = f , S(0) = S (2.6)
if the following properties are valid: i) (2.6) holds,
ii)   ( )
()
f C0 0,T + ; 0,
  + and   ( )
: 0, 0, in
S T → S is absolutely continuous,
iii) (2.2) holds for all  
t  0,T and (2.3) holds for t [0,T ] a.e.
iv) the following equation holds for all  
( ) 
()
 C1 0,T L 0,T
++
    with

()
L 0,T
at
 
+

 +  



and  
t  0,T :
()
0
00 0
00
( ) (0, ) ( , 0) ( , 0) ( , ) ( , )
( ) () (, ) (, ) (, ) (, )
t
t
f a a da f s s ds f t a t a da
a D s s a s a s a f s a dads
as
 


+ +
+
+=


+ + −−



 

(2.7)
A weak solution on  
0,T with input D of the initial-boundary value problem (2.1),
(2.2), (2.3), (2.6) ( )  
f , S : 0,T → X is called a classical solution on  
0,T of the
initial-boundary value problem (2.1), (2.2), (2.3), (2.6) if  
()
f C1 0,T +
 ,
 ( )
()
1 0, ; 0, in
S C T S and (2.1), (2.3) hold for all  
(t, a) 0,T +
 .
We say that the initial-boundary value problem (2.1), (2.2), (2.3), (2.6) admits a global weak (classical) solution with input D if for every T  0 there exists a weak (classical)
solution on  
0,T with input D of the initial-boundary value problem (2.1), (2.2), (2.3),
(2.6).

6
Remark 1: It becomes clear from Definition 1 that for every T  0 ,
() ()
 C1 L
++
  with ( )
 L
+
 and for every weak solution on  
0,T with
input D of the initial-boundary value problem (2.1), (2.2), (2.3), (2.6) the following
equation holds for  
t  0,T a.e.:
()
()
00
( , 0) (0) ( ) ( ) ( ) ( ) ( , ) ( , ) ( )
d
f t a a D t a f t a da f t a a da
dt
   
+ +

+ −+ =
  (2.8)
3. Main Results
Having clarified the notion of the solution, we are in a position to present the main results of this paper. The following theorem establishes global existence of solutions of the initial value problem (2.1), (2.2), (2.3), (2.6).
Theorem 1: For every ( )
00
f , S  X and ( )
;
loc
D L
++
 , there exists a global weak
solution with input D of the initial-boundary value problem (2.1), (2.2), (2.3), (2.6).
The proof of Theorem 1 is provided in Section 4. Its proof employs a combination of Banach's fixed-point theorem with implicit solution formulas and some useful solution estimates.
The following result shows continuous dependence on the initial conditions.
Theorem 2: Suppose that ( f , S) is a weak solution on [0,T ] of the initial-boundary
value problem (2.1), (2.2), (2.3), (2.6) with input ( )
;
loc
D L
++
 for certain T  0 .
Then there exists a constant   0 that depends only on ( )
[0, ]
sup ( )
sT
Ds

and  ( 1 )
0,
max [ ]
s T fs

such that the following estimate holds for every weak solution ( )
f , S on [0,T ] of the
initial-boundary value problem (2.1), (2.2), (2.3), with ( ) ( )
00
f [0], S(0) = f , S  X and
input ( )
;
loc
D L
++
 with D(t) = D(t) for t [0,T ] a.e.:
( )( )
00 00
11
f [t] − f [t] + S(t) − S(t)  exp t f − f + S − S , for all t [0,T ] (3.1)
Having established continuous dependence on the initial conditions, uniqueness of the
weak solution for a given input ( )
;
loc
D L
++
 and a given initial condition
00
( f , S )  X is a consequence of Theorem 2.

7
Corollary 1: For any ( )
00
f ,S X , ( )
;
loc
D L
++
 , there exists a unique weak
solution ( )
f , S on  
0,T , T  0 with input D of the initial-boundary value problem
(2.1), (2.2), (2.3), (2.6).
Therefore, the age-structured chemostat initial-boundary value problem (2.1), (2.2), (2.3), (2.6) is a well-posed problem in the sense of Hadamard (see page 155 in [18]).
Theorem 1 allows us to associate to each input ( )
;
loc
D L
++
 and 0 0
(f ,S )X a
well-defined solution ( )
f [t], S[t]  X . We define for all ( )
;
loc
D L
++
,
00
( f , S )  X and t  0 :
()
( )( )
00
 t, f , S ; D = f [t], S[t] (3.2)
Theorem 1, Theorem 2 and Definition 1 allow us to guarantee that the mapping 
defined by (3.2) is a mapping
()
:;
loc
 X L X
+ ++
 →
that satisfies the identity property
()
( )( )
00 00
 0, f , S ; D = f , S , for all ( )
;
loc
D L
++
 , 00
( f , S )  X (3.3)
and the causality property
()
( ) ()
()
00 00
 t, f ,S ;D = t, f ,S ;D
for all t  0 , 0 0
( f , S )  X and ( )
,;
loc
D D L
++

with D(s) = D(s) for s [0,t] a.e. (3.4)
Moreover, ( )
()
00
 t, f , S ; D is continuous with respect to t  0 and 0 0
(f ,S )X .
The classical semigroup property
()
( ) ()
()
()
00 00
t , f , S ; D t, , f , S ; D ; D
 + =    ,
for all t,  0 , ( )
;
loc
D L
++
 , 00
( f , S )  X (3.5)
where D is the shifted input ( D) (s) D( s)
 = + , is a consequence of the following
technical proposition.
Proposition 1: Let T ,  0 and ( )
;
loc
D L
++
 . Assume that ( f , S) is a weak
solution on [0,T ] with input D of the initial-boundary value problem (2.1), (2.2), (2.3),
(2.6) and assume that ( f , S ) is a weak solution on [0,] with input D(s) := D(T + s)
of the initial-boundary value problem (2.1), (2.2), (2.3), with f [0] = f [T ] ,
()
S (0) = S T . Define

8
( )( )
()
[ ], ( ) 0
ˆˆ
[ ], ( ) [ ], ( )
ft St t T
ft St ft T St T T t T 
 
=  − −   +

(3.6)
Then ˆ ˆ
( f , S) is a weak solution on [0,T +] with input D of the initial-boundary value
problem (2.1), (2.2), (2.3), (2.6).
Thus, following the terminology in [28], the age-structured chemostat model (2.1), (2.2), (2.3), defines a forward complete time-invariant control system with state space
X and input space ( )
;
loc
L
+ +.
4. Proofs
For reader’s convenience, we first present an outline of this section. First, we prove a local existence theorem and we establish continuous dependence of solutions on initial conditions. Then we exploit some estimates of the solutions, and we extend the solutions globally.
We start with the two following technical lemmas. Their proofs are provided in the Appendix.
Lemma 1: Let T  0 ,  
()
x C0 0,T ,  
()
D L 0,T

 , () ()
01
f0 C L
++
  and
() ()
 C0 L
++
  with ( ) ( )
f0 0 = x 0 . The function  
()
f C0 0,T +
  with
 ( 1)
0,
sup [ ]
tT
ft

 + defined by
0 0
0
( ) exp ( ) ( ) 0
(, )
( ) exp ( ) ( ) 0
ta
at
ta
ta
f a t D s ds s ds for t a
f ta
x t a D s ds s ds for t a


−
−
 
− − − 
   
=  
 − − − 

 



(4.1)
is the unique function in  
( )  ( )
0
1
0,
0, : sup [ ]
tT
u C T ut
+ 

   +


that satisfies the
following equation for all  
( ) 
()
 C1 0,T L 0,T
++
    with

()
L 0,T
at
 
+

 +  



and  
t  0,T :

9
()
0
0 00
00
( ) (0, ) ( ) ( , 0) ( , ) ( , )
( ) () (, ) (, ) (, ) (, )
t
t
f a a da x s s ds f t a t a da
a D s s a s a s a f s a dads
as
 


+ +
+
+=


+ + −−



 

(4.2)
Lemma 2: Let ( )
;
loc
D L
++
 ,( )
00
f , S  X and T  0 be given. Let
( ) 
f , S : 0,T → X be a weak solution on  
0,T with input D of the initial-boundary
value problem (2.1), (2.2), (2.3), (2.6). Let   0 be a constant for which the inequality
(S )  S holds for all  
0, in
S  S and define  ( )
0,
max ( )
in
SS
M S

= . Then the following
estimates hold for all  
t  0,T :
( )0
11
f [t] exp M k t f

 (4.3)
()
0 01
0
00
exp 1
exp ( )
( ) 1 exp ( ) exp ( )
tt
in
Mk t
S q f St
Mk
S t S D s ds S D s ds
  

−

− 



  

 −− + −
  
  

  


(4.4)
We next provide a local existence result.
Theorem 3: There exists a continuous function ( ) ( 
: 0, 0,1
Sin +
  → with the
following property: for every ( )
00
f ,S X , ( )
;
loc
D L
++
 and
 ( )
0 0 1 0,1
0, , sup ( )
s
 S f Ds



 +




there exists a weak solution on  
0, with input D
of the initial-boundary value problem (2.1), (2.2), (2.3), (2.6).
Proof: Let ( )
;
loc
D L
++
 and ( )
00
f , S  X be given. Define:
0
0
0
( ) : ( ) ( ) exp ( )
( ) : ( ) ( ) exp ( )
( ) : exp ( )
a
t at
a
t at
t
g t k a f a t s ds da
h t q a f a t s ds da
b t D s ds


+
−
+
−

= − −  

= − −  

= −  



(4.5)
The functions g, h are continuous. To see this, notice that definition (4.5) gives

10
()
()
0
0
() ,
( , ) : ( ) exp ( ) , 0
ut
u
g t p t u du
p t u k u t f u  s ds u
+
+
=

=+ − 




Continuity of k, and boundedness of , gives that for any fixed t  0 and for any
sequence  
: 0,1, 2,...
tn n = with ( )
lim n
ntt
→+ = , and u  0
()
lim ( , ) ( , )
n
n pt u ptu
→+ =
Since (s)  0 for all s  0 and ( )
0
sup ( )
s
c ks

=  + , we have for all n  0 and for all
u0
0
( ,) ()
n
p t u c f u
Taking into account that ( )
1
f0  L (0, +) and the Dominated Convergence Theorem
we get that
() ( )
00 0
lim ( ) lim ( , ) lim ( , ) ( , ) ( )
nn n
nn n
g t p t u du p t u du p t u du g t
+ + +
→+ →+ →+
   
= = ==
       
 
Since the latter holds for any sequence  
: 0,1, 2,...
tn n = and any t  0 , we conclude
that ( )
0
gC +
 . Completely analogous is the proof of continuity of h .
Let time ( 
 0,1 which is to be selected in an appropriate way below.
In what follows, we consider the functions g, h , given by (4.5) to be defined on  
0,1 .
Thus, when we write g  and h  we mean   ( )
0,1
max ( )
t gt
 and   ( )
0,1
max ( )
t ht
,
respectively.
We also define the functions:
00
( ) : ( ) exp ( ) , ( ) : ( ) exp ( )
aa
k a k a  s ds q a q a  s ds
 
=− =−
   
  (4.6)
Consider the Banach space ( )
02
H = C [0,]; with norm
 ( )  ( )
0, 0,
( , ) max ( ) max ( )
H tt
yz y z yt zt

  
= + = + . Define ( )
00
1
: min , 0
2 in
R = S S −S 
and notice that due to the fact that ( )
0 0, in
S  S (recall definition (2.4) and the fact that
()
00
f , S  X ) we get that for every ( y, z)  H with ( , ) H
y z  R we obtain
00 0
0 ()
22
in in
S SS
S zt S
+
  +   for all  
t  0, . Define

11
()

(,) : ,
RH
B = y z  H y z  R (4.7)
which is a closed subset of H and the operator
12
( , ): R
T = T T B → H (4.8)
by the following formulas
( ) ( )( )
10 0
( , ) () ( ) ( ) ( ) ( )
t
T y z t = k a  z t − a + S y t − a + g t − a da
 (4.9)
( ) ( )( ) ( )
( ) ( )( )
20 0 0
00 00
( , ) () 1 () () ( ) ( )
() ( ) ( ) ( ) ( ) ( )
t
in
t
T y z t S S bt bt z S h d
b t z S q a z a S y a g a da d

  
    
=− − − +

− + −+ −+ −




(4.10)
We show next, by appropriately choosing   0 , that ( R ) R
T B B .
Since ( s)  0 for all s  0 we get from (4.9) for all ( , ) R
y z B :
()
T1( y, z) M k R g 


 + (4.11)
where
()
0
sup ( )
S
M S

= (4.12)
Since D(t)  0 for t [0,] a.e. and   1, we get from (4.5) for all t [0,]
b(t)  1 and
 ( )
0,1
0
1 ( ) ( ) sup ( )
t
s
b t D s ds  D s

− 
 (4.13)
Using (4.12), (4.13) and the fact that ( s)  0 for all s  0 , we obtain from (4.10) for
all ( , ) R
y z B :
( )  ( ) ( )
2 20 0,1
( , ) sup ( ) 2
in
s
T yz S S Ds M h M q R g 
 



− + + +


(4.14)
It follows from (4.11) and (4.14) and the fact that ( )
00
1
: min ,
2 in in
R = S S − S  S that
12
T (y, z) T (y, z) R

+  for all ( 
 0,1 with

12
()
 ( ) ( )( )
00
0,1
min , / 2
min 1, sup ( )
in
in in s
SS S
S Ds M h M k M q S g




 
−
 
++ + +


(4.15)
Let arbitrary 1 1 2 2
( , ), ( , ) R
y z y z  B be given. Using (4.12), (4.14), the fact that ( s)  0
for all s  0 and by adding and subtracting terms in (4.9), (4.10), we obtain for all t [0,] :
( )( )
()
()
1 11 1 2 2
01 0 2 2 0
01 1 2 0
12 1 2
( , )( ) ( , )( )
() ( ) ( ) ( ) ( )
() ( ) ( ) ( )
t
t
Tyz t Ty z t
k a S z t a S z t a y t a g t a da
k a S z t a y t a y t a da
k L R g z z Mk y y




 

−
 + − − + − −+ −
+ + − −− −
 + −+ −


(4.16)
( )( )
( )( ) ( )
( ) ( )( )
2 11 2 2 2 0
10 20 0
1 0 2 0 1 01 00
2 0 1 0 2 01 00
2
exp ( ) ( , )( ) ( , )( )
() () ()
() () () ( ) ( ) ( )
() () ( ) ( ) ( ) ( )
(
t
t
t
t
D s ds T y z t T y z t
z S z Sh d
z S z S q a z a S y a g a dad
z S q a z a S z a S y a g a dad
z


    
      
       

 −
 
 +− +
+ + − + −+ −+ −
+ + −+ − −+ −+ −
+




( )( )
()
0 2 01 2 00
2 22 12 12 1 2
) () ( ) ( ) ( )
2
t
S q a z a S y a y a dad
L h z z Mq L z z R g M q y y


   


    

+ −+ −− −
 −+ − + + −

(4.17)
where  
max ( ) :0 in
L s sS
 
=   . Therefore, we get from (4.16), (4.17) and the fact
that
0
() 0
t
D s ds 
 for all t  0 :
()
( )( )
()
1 11 1 2 2 2 11 2 2 2
12
12
T (y ,z ) T (y ,z ) T (y ,z ) T (y ,z )
M k Mq y y
L h Mq k R g z z






 

− +−
+ −
++ ++ −
(4.18)
The facts that 0 0
11
h q f ,g k f ,k k ,q q
    

    (direct
consequences of definitions (4.6), (4.5) and the fact that  is non-negative), in

13
conjunction with (4.15), (4.18) show that the operator 1 2
( , ): R
T = T T B → H defined by
(4.9), (4.10) is a contraction for every
 ( )
0 0 1 0,1
0, , sup ( )
s
 S f Ds



 +




with
() ( )
()
min ,
,: 2 1
in
in
sS s
s r KS r
−
 = + for all s  0, r  0 , where K  0 is a sufficiently large
constant independent of ( )
;
loc
D L
++
 and ( )
00
f , S  X , for example
()
( ) ( )( )
1 in in
M
K L q k M q k M LS M q k
S 
    

=+ + + + + + +


Thus, by Banach’s fixed point theorem there exists ( , ) R
y z  B such that the following
equations hold for all t [0,] :
( )( )
0 0
() ( ) ( ) ( ) ( )
t
y t = k a  z t − a + S y t − a + g t − a da
 (4.19)
( )( ) ( )
( ) ( )( )
00 0
00 00
() 1 () () ( ) ( )
() ( ) ( ) ( ) ( ) ( )
t
in
t
zt S S bt bt z S h d
b t z S q a z a S y a g a da d

  
    
=− − − +

− + −+ −+ −




(4.20)
Define for t [0,] and a  0 :
()
0
() ()
( ) ( ( )) ( ) ( ) ( )
St zt S
x t S t b t g t y t
=+
= + (4.21)
0 0
0
( ) exp ( ) ( ) 0
(, )
( ) exp ( ) ( ) 0
ta
at
ta
ta
f a t D s ds s ds for t a
f ta
x t a D s ds s ds for t a


−
−
 
− − − 
   
=  
 − − − 

 



(4.22)
We show next that ( )
f , S is a weak solution on  
0, with input D of the initial
boundary value problem (2.1), (2.2), (2.3), (2.6).
We proceed by showing some facts.
Fact 0: Equation (2.6) holds.
Fact 0 is a consequence of equations (4.5), (4.20), (4.21), (4.22).

14
Fact 1:   ( )
: 0, 0, in
S  → S is absolutely continuous.
Proof of Fact 1: Equations (4.5), (4.20), (4.21) show that  
S : 0, → is absolutely
continuous. Furthermore, the facts that ( )
0 0, in
S  S (recall definition (2.4) and the fact
that ( )
00
f , S  X ), ( , ) R
y z  B and ( )
00
1 min ,
2 in
R = S S − S in conjunction with (4.7)
and (4.21) imply that 0 0
0 ()
22
in in
S SS
St S
+
    for all t [0,] . Therefore,
 ( )
: 0, 0, in
S → S .
Fact 2:  
()
x C0 0, and  
()
f C0 0, +
  with
f (t, 0) = x(t) and ( )
lim ( , ) 0
a f ta
→+ = , for all t  [0,] (4.23)
Proof of Fact 2: Since g is continuous, it follows from (4.21) that  
()
x  C0 0, .
Moreover, equations (4.5), (4.19), (4.20), (4.21) imply that 0 0
0
x(0) (S ) k(a) f (a)da
+
=
. Definition (2.4) and the fact that ( )
00
f , S  X imply that 0
x(0) = f (0) . Therefore, it
follows from (4.22) and the fact that ( )
00
f , S  X (which implies that
()
0
f0 C + ; (0, )
 + ; recall (2.4)) that  
()
f C0 0, +
  . Moreover, (4.22) and the
fact that ( )
0
lim ( ) 0
a fa
→+ = (a consequence of the fact that ( )
00
f , S  X ; recall (2.4))
guarantees that (4.23) holds.
Fact 3: ( ) ( )
10
f [t] L C ;(0, )
++
  + , for all t [0,] with
 ( 1)
0,
sup [ ]
t
ft

 + .
Proof of Fact 3: Using (4.12), (4.13), (4.7), (4.5), (4.21) and the fact that (a)  0 for
all a  0 we get:
()
01
x Mk f R

 + (4.24)
Using (4.22), (4.24) and the facts that (a)  0 for all a  0 , D(t)  0 for t  0 a.e.,
we get for t [0,] :

15
()
1
00
00
0 0
0 01 0
00
11
[] (, ) (, ) (, )
( ) exp ( ) ( )
( ) exp ( ) ( )
() ()
t
t
t ta
ta
ta
t at
t
t
f t f t a da f t a da f t a da
x t a D s ds s ds da
f a t D s ds s ds da
x t a da f a t da x t f
Mk f R f



+ +
−
+
−
+


= =+

=− − −
 

+− − −
 
− + − +
 ++
 
 
 

Therefore, for every t [0,] it holds that ( ) ( )
10
f [t] L C ;(0, )
++
  + with
 ( ) ( )
00
1 11
0,
sup [ ]
t
ft M k f R f




 + +  + .
Fact 4: Equation (2.2) holds for all t [0,] .
Proof of Fact 4: Using (4.5) and (4.19), (4.21), (4.23) we get for all t [0,] :
( )( )
0 0
00
( , 0) ( ) ( ( )) exp ( ) ( ) ( ) exp ( )
( ( )) exp ( ) ( ) ( ) ( ) ( )
ta
t at
tt
f t x t S t D s ds k a f a t s ds da
S t D s ds k a S t a y t a g t a da


+
−
  
== − − −
     

+ − − −+ −
 
 

(4.25)
Using (4.6), (4.5), (4.21), (4.22) we get for all t [0,] :
00 0
0 0
0
0 0
( ) ( , ) ( ) ( ) exp ( ) ( )
( ) ( ) exp ( ) ( )
( ) ( ) exp ( )
exp ( ) ( ) ( ) exp ( )
t ta
ta
ta
t at
tt
ta
t
a
k a f t a da k a x t a D s ds s ds da
k a f a t D s ds s ds da
k a x t a D s ds da
D s ds k a f a t s ds



+
−
+
−
−

= −− −




+ −− −




= − − 



+− − −



  
 


()
00
0 0
exp ( ) ( ) ( ( )) ( ) ( )
exp ( ) ( ) ( ) exp ( )
a
tt
tt
ta
t at
da
D s ds k a S t a g t a y t a da
D s ds k a f a t s ds da


+
−
+
−
 



= − − −+ −



  
+− − −
  
  
  


 

16
The above equation and (4.25) show that equation (2.2) holds for all t [0,] .
Fact 5: f (t, a)  0 for all t [0,] , a  0 .
Proof of Fact 5: Since f0 (a)  0 for all a  0 (a consequence of the fact that
()
00
f , S  X ; recall (2.4)), equation (4.22) shows that it suffices to show that x(t)  0
for all t [0,] .
Since (S )  0 for S  0 and since   ( )
()
0 0, ; 0, in
S C  S (recall Fact 1), equations
(4.5) and (4.21) show that it suffices to show that g (t) + y(t)  0 for all t [0,] .
We notice that equations (4.5) and (4.19) show that 0
0
g(0) y(0) k(a) f (a)da 0
+
+= 

which is a consequence of the facts that f0 (a)  0 , k(a)  0 for all a  0 with
0
k(a)da 0
+

.
The proof of the fact that g (t) + y(t)  0 for all t [0,] is made by contradiction.
Suppose that there exists t [0,] with g (t) + y(t)  0 . Then there exists T  (0, t]
with g (T ) + y(T ) = 0 and g (s) + y(s)  0 for all s [0,T ) . Indeed, the set


 0,T : g() + y() = 0 is bounded and non-empty (a consequence of the facts that
g (0) + y(0)  0 , g (t) + y(t)  0 and Bolzano’s theorem). Setting


T = inf  0,T : g() + y() = 0 , by continuity we get that g (T ) + y(T ) = 0 and
g (s) + y(s)  0 for all s [0,T ) .
Equations (4.5) and (4.19) show that
( )( )
0
00
0 ( ) ( ) ( ) ( ) exp ( )
( ) exp ( ) ( ) ( ) ( )
a
T aT
Ta
g T y T k a f a T s ds da
k a s ds S T a y T a g T a da


+
−

= + = − −  

+ − − −+ −
 


(4.26)
Since f0 (a)  0 , k(a)  0 for all a  0 , (S )  0 for S  0 ,   ( )
()
0 0, ; 0, in
S C  S
and g (s) + y(s)  0 for all s [0,T ) , equation (4.26) shows that
( )( )
0
00
( ) ( ) exp ( ) 0
( ) exp ( ) ( ) ( ) ( ) 0
a
T aT
Ta
k a f a T s ds da
k a s ds S T a y T a g T a da


+
−

−− =
 

− − −+ − =
 



17
The above equations can only hold if k(a) = 0 for all a  0 ; a contradiction with the
fact that
0
k(a)da 0
+

.
A consequence of all the previous facts and definition (2.4) is the following fact.
Fact 6: ( )
f [t], S(t)  X for all t [0,] .
The following fact is a direct consequence of definition (4.22), Fact 2, Fact 3 and Lemma 1.
Fact 7: Equation (2.7) holds for all  
( ) 
()
 C1 0, L 0,

++
    with

()
L 0,
at
 
 +

 +  



and  
t  0, .
We next show the following continuity result.
Fact 8: The mapping   ( )
1
0, t f [t] L +
 →  is continuous.
Proof of Fact 8: Let arbitrary   0 and  
t0  0, be given.
We note that there exists A  1 such that ( , ) / 4
A
f s a da 
+

 for all  
s  0, . Indeed,
since ( )
1
f0 L +
 there exists A  0 such that 0 ( ) / 4
A
f a da 
+

 . Taking A = 1+ A
and using the facts that   1 (which implies that s  a for all  
s  0, and a  A ),
D, are non-negative functions, we get from (4.22) for  
s  0, :
0 0
0 00 1
( , ) ( ) exp ( ) ( )
( ) ( ) ( ) /4
sa
A A as
A As A
f s a da f a s D l dl l dl da
f a s da f r dr f r dr


+ +
−
+ + +
+−

=−− −
 
 −=  
  
 
Thus, we get for all  
t  0, :
   0 0 0
1 0
00 0
0 0
(, ) ( , ) (, ) ( , )
(, ) ( , ) (, ) ( , )
( , ) ( , ) /2
A
A
A
AA
A
f t f t f t a f t a da f t a f t a da
f t a f t a da f t a da f t a da
f t a f t a da 
+
+ +
−= − + −
− + +
− +

 

(4.27)

18
Fact 2 (and consequently uniform continuity on the compact set    
0,  0, A ) implies
the existence of h  0 such that 0
(, ) ( , ) 2
f ta f t a A

−  for all  
t  0, with 0
t−t h
. Inequality (4.27) implies that    0  1
f t − f t   for all  
t  0, with 0
t−t h.
Clearly, a direct consequence of Fact 8, Fact 1 and definition (2.5) is the fact that the
mapping ( )  
f , S : 0,T → X is continuous.
The only thing that remains to be proved is the validity of equation (2.3) for  
t  0,
a.e..
Using (4.20), (4.21), and the definitions of h , b in (4.5) we obtain
()
()
0
0 0
1
00
() ()
( ) ( ( )) ( ) ( ) exp ( )
( ) ( ( )) ( ) ( )
in in
ta
a
t
St S bt S S
b t S q a f a s ds da d
b t S q a x a b a da d


   
   
+
−
−
=− −


− −−






− −−
 
 

(4.28)
From (4.28) and the definitions of q,b in (4.6) and (4.5), respectively, it follows that
()
()
()
0
1 0 0
11
00 0
0
0
() ()
( ) ( ( )) ( ) ( ) exp ( ) ( ) ( )
( ) ( ( )) ( ) ( ) exp ( ) ( ) ( )
()
( ) ( ( )) ( )
in in
ta
a
ta
in in
St S bt S S
b t S q a f a s ds b b da d
b t S q a x a s ds b a b b da d
S bt S S
bt S qa f


    
     

+
−
−
−−
=− −


− −−







− −− −





=− −
−
 
 
1
0
1
00 0
( ) exp ( ) ( ) ( )
( ) ( ( )) ( ) ( ) exp ( ) exp ( ) ( )
ta
a
ta
a
a s ds b b da d
b t S q a x a s ds D s ds b da d



   
    
+
−
−
−
−


−−






  
− −− −

  

  

 
  
Taking into account (4.22) and the definition of b in (4.5), the previous equality gives that
() 1
0
00
( ) ( ) ( ) ( ( )) ( ) ( , ) ( )
t
in in
S t S b t S S b t  S  q a f  a da b  dr
 −

=− − −   
  (4.29)

19
Due to Fact 8, and boundedness of q , it follows that
0
t q(a) f (t, a)da

 is continuous
on [0,] . Then, the validity of (2.3) for  
t  0, a.e. follows directly from (4.5) and
(4.29).
The proof is complete.
We continue with the proof of Theorem 2.
Proof of Theorem 2: Let arbitrary weak solution ( )
f , S on [0,T ] of the initial
boundary value problem (2.1), (2.2), (2.3), with initial condition
( )( )
00
f [0], S(0) = f , S  X and input ( )
;
loc
D L
++
 with D(t) = D(t) for t [0,T ]
a.e. be given. By virtue of Lemma 1, we have for t [0,T ] that
0 0
0
( ) exp ( ) ( ) 0
(, )
( ) exp ( ) ( ) 0
ta
at
ta
ta
f a t D s ds s ds for t a
f ta
x t a D s ds s ds for t a


−
−
 
− − − 
   
=  
 − − − 

 



(4.30)
0 0
0
( ) exp ( ) ( ) 0
(, )
( ) exp ( ) ( ) 0
ta
at
ta
ta
f a t D s ds s ds for t a
f ta
x t a D s ds s ds for t a


−
−
 
− − − 
   
=  
 − − − 

 



(4.31)
where x(t) = f (t, 0) and x(t) = f (t, 0) . For notational convenience, we define
[ ]: [ ] [ ]
( ): ( ) ( )
( ): ( ) ( )
ft ft ft
St St St
xt xt xt
= −
=−
=−
(4.32)
Since D(t)  0 for t  0 a.e. and since (s)  0 for s  0 , we get from (4.30), (4.31)
and (4.32) for t [0,T ]
1
10 0
0 0 0 01
00
[] [] [] (, ) (, ) ( )
( ) ( ) ()
tt
t
tt
f t f t f t f t a da f t a da x s ds
f a t f a t da f f x s ds
+
− = =  +   
+ −− −  − +


(4.33)
Using the boundary condition (2.2) for x(t) = f (t, 0) and x(t) = f (t, 0) , and (4.32) we
have for t [0,T ] that

20
00
x(t) (S(t)) (S(t)) k(a) f (t, a)da (S(t)) k(a) f (t, a)da
+ +
 − + 
  (4.34)
Since ( )
 C1 +
 , we have that
(v) (r) L | v r |

 −   − (4.35)
for all  
, 0, in
v r  S , where  
: max ( ) : 0 in
L s sS
 
=   . From (4.35), (4.34), and
definition ( )
[0, ]
max ( )
in
sS
M s

= we get that
 ( 1) 1
0,
( ) max [ ] ( ) [ ]
sT
xt L k f s St M k f t
 

   +  (4.36)
where  ( 1 )
0,
max [ ]
s T fs
  + (a consequence of continuity of ( )  
f , S : 0,T → X and
definition (2.5) which implies continuity of   ( )
1
f : 0,T L +
→ ).
Since both S(t) and S(t) satisfy (2.3) and since D(t) = D(t) for t [0,T ] a.e., we get
for t [0,T ] a.e.
( )( )
( )( )
00
() () () () ()
( ( )) ( ) ( , ) ( , ) ( ( )) ( ( )) ( ) ( , )
dd
St St St Dt St
d t dt
 S t q a f t a f t a da  S t  S t q a f t a da
+ +
− =  =− 
− − −−

Integrating the above equation, we get for all t [0,T ] that
()
()
00 0 00
00
( ) ( ) ( ) ( ( )) ( ) ( , ) ( , )
( ( )) ( ( )) ( ) ( , )
tt
t
S t S S D s S s ds S s q a f s a f s a dads
S s S s q a f s a dads


+
+
 =−−  − −
−−
 

(4.37)
Using the (4.37), together with (4.32), (4.35), and  ( 1 )
0,
max [ ]
t T ft
  + we have that
( )  ( )
00 1
0,
[0, ] 0
1 0
( ) sup ( ) max [ ] ( )
[]
t
sT
sT
t
S t S S D s L q f s S s ds
M q f s ds
 



 −+ + 


+


(4.38)
Combining (4.33), (4.36), and (4.38) we get for t [0,T ] that

21
( )  ( )
()
00 00
1 10
11
0,
[0, ] 0 0
00 00 1
10
[] () ( )
sup ( ) max [ ] ( ) [ ]
[] ()
t
tt
sT
sT
t
f t S t f f S S x s ds
D s L q f s S s ds M q f s ds
f f S S f s S s ds





 +  − + − + 

+ + + 


 − + − +  +



where ( )  ( ) ( )
1
0,
[0, ]
: sup ( ) max [ ]
sT
sT
Ds f s L M k q

 



= + ++

  . A direct application of
Gronwall’s inequality gives (3.1). The proof is complete.
Proposition 1 shows how we can extend the solution of a given initial-boundary value problem. Its proof is provided below.
Proof of Proposition 1: We show that for all

( ) 
()
 C1 0,T  L 0,T 

++
 +   +  with  
()
L 0,T
at
 
 +

 +  + 



and  
t  0,T + the following equation holds:
()
0
00 0
00
ˆˆ
( ) (0, ) ( , 0) ( , 0) ( , ) ( , )
ˆ
( ) () (, ) (, ) (, ) (, )
t
t
f a a da f s s ds f t a t a da
a D s s a s a s a f s a dads
as
 


+ +
+
+=


+ + −−



 

(4.39)
Let arbitrary  
( ) 
()
 C1 0,T  L 0,T 

++
 +   +  with

()
L 0,T
at
 
 +

 +  + 



be given. Then

( ) 
()
 C1 0,T L 0,T
++
    with  
()
L 0,T
at
 
 +

 +  + 



and since
( f , S) is a weak solution on [0,T ] with input D of the initial-boundary value problem
(2.1), (2.2), (2.3), (2.6) it follows (from Definition 1) that (2.7) holds for  
t  0,T .
Therefore, definition (3.6) guarantees that (4.39) holds for  
t  0,T .
Since  
( ) 
()
 C1 0,T  L 0,T 

++
 +   +  with

()
L 0,T
at
 
 +

 +  + 



, it follows that the function
[s] =[T + s] , for  
s  0, (4.40)

22
is a function of class  
( ) 
()
 C1 0, L 0,

++
    with

()
L 0,
at
 
 +

 +  



. Since ( f , S ) is a weak solution on [0,] with input
D(s) := D(T + s) of the initial-boundary value problem (2.1), (2.2), (2.3), with
f [0] = f [T ] , ( )
S (0) = S T , it follows (from Definition 1) that the following equation
holds for all  
t  0, :
()
0 00
00
( , ) (0, ) ( , 0) ( , 0) ( , ) ( , )
( ) ( ) (, ) (, ) (, ) (, )
t
t
f T a a da f s s ds f t a t a da
a D T s s a s a s a f s a dads
as
 


+ +
+
+=


+ ++ − −



 

(4.41)
Using definitions (3.6), (4.40), we obtain from (4.41) for all ( 
t  0, :
()
00
0
ˆˆ
( , ) ( , ) ( , 0) ( , 0) ( , ) ( , )
ˆ
( ) () (, ) (, ) (, ) (, )
Tt
T Tt
T
f T a T a da f s s ds f T t a T t a da
a D s s a s a s a f s a dads
as
 


+ + +
+ +
+ =+ +


+ + −−



 

(4.42)
Exploiting (2.7) for t = T and definition (3.6) we get:
()
0
00 0
00
ˆ
( ) (0, ) ( , 0) ( , 0) ( , ) ( , )
ˆ
( ) () (, ) (, ) (, ) (, )
T
T
f a a da f s s ds f T a T a da
a D s s a s a s a f s a dads
as
 


+ +
+
+=


+ + −−



 

(4.43)
Combining (4.42) and (4.43) we obtain (4.39) for all ( 
t  T ,T + .
All the rest requirements of Definition 1 are direct consequences of definition (3.6). The proof is complete.
Finally, we can provide the proof of Theorem 1.
Proof of Theorem 1: Let arbitrary ( )
00
f ,S X , ( )
;
loc
D L
++
 be given. Define
the set

a weak solution with input of
: 0 : (1), (2), (3), (7) exists on 0,
D
J 

=


(4.44)
and let
()
Tmax = sup J (4.45)

23
Notice that by virtue of Theorem 3, J   and thus, ( 
Tmax  0, + . We next show by
contradiction that max
T = + .
Assume that max
T  + . Define,
()
()
max
max 0 01
0 0
exp 1
: exp 0
: exp ( )
T
in in in
Mk T
a S q f Mk
b S S S D s ds S
  

−

= − 



=− − − 




and
()
max 0 1
F : exp M k T f
 
=
Since ( )
;
loc
D L
++
 , it follows that ( )
max
[0, 1]
sup ( )
tT
Dt
+
 + and thus the set
 ( )
max
[0, 1]
: , 0, sup ( ) (0, in )
tT
K ab F Dt S

+ +

= +  


is compact. Consider now the continuous function ( ) ( 
: 0, 0,1
Sin +
  → provided by
Theorem 3. Continuity of  on the compact set K gives
()
(,)
: min ( , ) 0
 s K s

=   (4.46)
Let  
: 0,1, 2,...
tn  J n = be a non-decreasing sequence with ( ) max
lim n
n tT
→+ = . Let
N  0 be such that max / 2
tN T 
 − (this is possible since ( ) max
lim n
n tT
→+ = ). Since
tN  J , it follows from definition (4.44) that a weak solution ( f [t], S(t)) of the initial
boundary value problem (2.1), (2.2), (2.3), (2.6) exists on [0,tN ] . Then by virtue of
Lemma 2, for all [0, n ]
t  t it holds that
1
[]
0 ( ) in
ft F
a St b S


 
(4.47)
Moreover, from Theorem 3, a weak solution ( )
f , S of the initial-boundary value
problem (2.1), (2.2), (2.3), with ( ) ( )
[0], (0) [ ], ( )
NN
f S = f t S t  X and input
( ): ( )
NN
D s = D t + s , s  0 exists on [0,] for every
()
1 [ , 1]
0, ( ), [ ] sup ( )
NN
NN st t
 St f t Ds
+


 +




. Due to (4.47) and definition of K , it

24
follows that ( )
1 [ , 1]
( ), [ ] sup ( )
NN
NN st t
St f t Ds K
+

+


. Therefore, from (4.46) we obtain
that
()
()
1 [ , 1]
( ), [ ] max ( )
NN
N N stt
 S t f t D s
+
 +
We pick  
= . From Proposition 1, it follows that
()
( [ ], ( )), [0, ]
ˆˆ
( [ ], ( )) : [ ], ( ) , [ , ]
N
N N NN
ft St t t
f t S t f t t S t t t t t 

=  − −  +

is a weak solution on [0, ]
tN 
+ with input D of the initial-boundary value problem
(2.1), (2.2), (2.3), (2.6), where tN  Tmax
+  (recall that max / 2
tN T 
 − ). The latter
contradicts definition (4.45) of max
T . Thus, max
T = + . The proof is complete.
5. Conclusions
We have studied the well-posedness of an age-structured chemostat model with a nonlocal (renewal) boundary condition and a coupled substrate equation. Under an appropriate weak solution framework, we have determined the state space and the input space for this model, and we have proved global existence and uniqueness of solutions for all admissible initial conditions and all allowable control inputs. Our formulation of the age-structured chemostat as a well-posed control system, opens the door to -
a systematic study of stability and stabilization, and enables subsequent advances in controllability and optimal control.
References
[1] Amster, P., G. Robledo, and D. Sepulveda, “Dynamics of a Chemostat with Periodic Nutrient Supply and Delay in the Growth”, Nonlinearity, 33, 2020, 5839.
[2] Beauthier, C., J. J. Winkin, and D. Dochain, “Input/state Invariant LQ-Optimal Control: Application to Competitive Coexistence in a Chemostat”, Evolution Equations & Control Theory, 4, 2015.
[3] Boucekkine, R., N. Hritonenko, and Y. Yatsenko, Optimal Control of AgeStructured Populations in Economy, Demography, and the Environment, Routledge, 2011.
[4] Brauer, F., and C. Castillo-Chavez, Mathematical Models in Population Biology and Epidemiology, volume 2, Springer, 2012.

25
[5] Brezis, H., Functional analysis, Sobolev spaces and partial differential equations, Springer, 2011.
[6] Butler, G. J., and G. S. K. Wolkowicz, “A Mathematical Model of the Chemostat with a General Class of Functions Describing Nutrient Uptake”, SIAM Journal on Applied Mathematics, 45, 1985, 138–151.
[7] De Leenheer, P., and H. Smith, “Feedback Control for Chemostat Models”, Journal of Mathematical Biology, 46, 2003, 48–70.
[8] Dimitrova, N., and M. Krastanov, “Nonlinear Adaptive Stabilizing Control of an Anaerobic Digestion Model with Unknown Kinetics”, International Journal of Robust and Nonlinear Control, 22, 2012, 1743–1752.
[9] Dochain, D., Automatic Control of Bioprocesses, John Wiley & Sons, 2013.
[10] Feichtinger, G., G. Tragler, and V. M. Veliov, “Optimality Conditions for AgeStructured Control Systems”, Journal of Mathematical Analysis and Applications, 288, 2003, 47–68.
[11] von Foerster, H., “Some Remarks on Changing Populations”, in: F. Stohlman Jr. (Ed.), The Kinetics of Cellular Proliferation, Grune & Stratton, New York, 1959, 382.
[12] Gouze, J.-L., and G. Robledo, “Feedback Control for Competition Models with Mortality in the Chemostat”, In Proceedings of the 45th IEEE Conference on Decision and Control, 2006, 2098–2103.
[13] Haacker, P.-E., I. Karafyllis, M. Krstic, and M. Diagne, “Stabilization of AgeStructured Chemostat Hyperbolic PDE with Actuator Dynamics”, International Journal of Robust and Nonlinear Control, 34, 2024, 6741–6763.
[14] Harmand, J., D. Dochain, and M. Guay, “Dynamical Optimization of a Configuration of Multi-fed Interconnected Bioreactors by Optimum Seeking”, In Proceedings of the 45th IEEE Conference on Decision and Control, 2006, 2122–2127.
[15] H. Inaba, “A Semigroup Approach to the Strong Ergodic Theorem of the Multistate Stable Population Process”, Mathematical Population Studies, 1, 1988, 49–77.
[16] Inaba, H., “Asymptotic Properties of the Inhomogeneous Lotka-Von Foerster System”, Mathematical Population Studies, 1, 1988, 247–264.
[17] Inaba, H., “Strong Ergodicity for Perturbed Dual Semigroups and Application to Age-Dependent Population Dynamics”, Journal of Mathematical Analysis and Applications, 165, 1992, 102-132.
[18] John F., Partial differential equations (4th ed.). Springer-Verlag, 1982.
[19] Karafyllis, I., and M. Krstic, “Stability of Integral Delay Equations and Stabilization of Age-Structured Models”, ESAIM: Control, Optimisation and Calculus of Variations, 23, 2017, 1667–1714.

26
[20] Karafyllis, I., E. Loko, M. Krstic, and A. Chaillet, “Global Stabilization of Chemostats with Nonzero Mortality and Substrate Dynamics”, arXiv preprint arXiv:2502.09310 [math.OC], 2025.
[21] Karafyllis, I., and Z.-P. Jiang, “Reduced Order Dead-Beat Observers for the Chemostat”, Nonlinear Analysis Real World Applications, 14, 2013, 340–351.
[22] McKendrick, A. G., “Applications of Mathematics to Medical Problems”, Proceedings of the Edinburgh Mathematical Society, 44, 1925, 98-130.
[23] Pilyugin, S. S., P. Waltman, “Multiple Limit Cycles in the Chemostat With Variable Yield”, Mathematical Biosciences, 182, 2003, 151-166.
[24] Rapaport, A., H. Haidar, and J. Harmand, “Global Dynamics of the Buffered Chemostat for a General Class of Response Functions”, Journal of Mathematical Biology, 71, 2015, 69–98.
[25] Robledo, G., F. Grognard, and J.-L. Gouzé, “Global Stability for a Model of Competition in the Chemostat With Microbial Inputs”, Nonlinear Analysis: Real World Applications, 13, 2012, 582–598.
[26] Schmidt, K., I. Karafyllis, and M. Krstic, “Yield Trajectory Tracking for Hyperbolic Age-Structured Population Systems”, Automatica, 90, 2018, 138–146.
[27] Smith, H. L., and P. Waltman. The Theory of the Chemostat: Dynamics of Microbial Competition, Volume 13. Cambridge University Press, 1995.
[28] Sontag, E.D., Mathematical Control Theory. Deterministic Finite Dimensional Systems, Springer, 1990.
[29] Sun, B., “Optimal Control of Age-Structured Population Dynamics for Spread of Universally Fatal Diseases II”, Applicable Analysis, 93, 2014, 1730–1744.
[30] Toth, D. J. A., and M. Kot, “Limit Cycles in a Chemostat Model for a Single Species With Age Structure”, Mathematical Biosciences, 202, 2006,194–217.
[31] Toth, D. J. A., “Bifurcation Structure of a Chemostat Model for an Age-Structured Predator and its Prey”, Journal of Biological Dynamics, 2, 2008, 428–448.
[32] Veil, C., M. Krstic, I. Karafyllis, M. Diagne, and O. Sawodny, “Stabilization of Predator-Prey Age-Structured Hyperbolic PDE When Harvesting Both Species is Inevitable”, arXiv preprint arXiv:2410.06823, 2024.
[33] Wolkowicz, G. S. K., and Z. Lu., “Global Dynamics of a Mathematical Model of Competition in the Chemostat: General Response Functions and Differential Death Rates”, SIAM Journal on Applied Mathematics, 52, 1992, 222–233.

27
Appendix
Proof of Lemma 1: The fact that the function f defined by (4.1) is of class

()
C0 0,T +
 is a consequence of the facts that  
()
x C0 0,T ,  
()
D L 0,T

 and
()
0
f0, C +
 with ( ) ( )
f0 0 = x 0 . We also have from (4.1) and the facts that

()
x C0 0,T ,  
()
D L 0,T

 , () ()
01
f0 C L
++
  and ( ) ( )
 C0 L
++

for every  
t  0,T :
()
()
()
()
()
( )( )
1 0
00
0 0
0
0
01
[] (, ) (, )
( ) exp ( ) ( )
( ) exp ( ) ( )
( ) exp
( ) exp
exp
t
t
t ta
ta
ta
t at
t
t
f t f t a da f t a da
x t a D l dl l dl da
f a t D l dl l dl da
x t a D a da
f a t D t da
D T xT f





+
−
+
−

+

 
=+

=− − −




+−− −



− +
+− +
+ +

 
 


Thus, the function f defined by (4.1) satisfies
 ( ) ( )
( )( )
0
11
0,
sup [ ] exp
tT
ft D  T x T f
 

 + +  +
We next show that the function f defined by (4.1) satisfies equation (4.2) for all

( ) 
()
 C1 0,T L 0,T
++
    with  
()
L 0,T
at
 
+

 +  



and

t  0,T .
Let (arbitrary)  
t  0,T and  
( ) 
()
 C1 0,T L 0,T
++
    with

()
L 0,T
at
 
+

 +  



be given. We get:
()
00
12 0
( ) () (, ) (, ) (, ) (, )
(, ) (, )
t
a D s s a s a s a f s a dads
as
f t a t a da I I



+
+


+ −−



+ =+


(Α1)

28
where
1
0 00
2 0
: (, ) (, ) ( , ) ( , )
: (, ) (, ) ( , ) ( , )
t ts
t
ts
I f t a t a da s a f s a dads
I f t a t a da s a f s a dads


+ +
= +
= +
 
 
(A2)
()
(s, a) : (a) D(s) (s, a) (s, a) (s, a)
as

  
= + − −
  (A3)
Definition (4.1) in conjunction with definitions (A2) imply that:
1
00
00 0
20
0
0 0
( ) exp ( ) ( ) ( , )
( , ) ( ) exp ( ) ( )
( ) exp ( ) ( ) ( , )
( , ) ( ) exp ( ) ( )
t ta
ta
ts s a
sa
ta
t at
s
a
I x t a D s ds s ds t a da
s a x s a D l dl l dl dads
I f a t D s ds s ds t a da
s a f a s D l dl l dl




−
−
+
−
−

=− − −




+ − − −




= −− −



+ − − −
 
  
 

0
ta
ss
dads
+   


 
(A4)
Using (A4), Fubini’s theorem and definition (A3) we get:
20 00 0
0
00
0
00 0
0 0
( , ) ( ) exp ( ) ( )
( ) exp ( ) ( ) ( , )
( ) ( , ) exp ( ) ( )
( ) exp ( ) ( )
t s sr
r
t tr
r
t s sr
r
tt
r
I s s r f r D l dl l dl drds
f r D s ds s ds t t r dr
f r s s r D l dl l dl dsdr
f r D s ds s ds




+ +
+ +
+ +
+

=+ − −




+ −− +




= + − −



+ −−
  
 
  

0
0
00 0
00 00 0
(, )
( ) exp ( ) ( ) ( , )
( ) exp ( ) ( ) ( , ) ( ) (0, )
r
t s sr
r
t tr
r
t t r dr
f r D l dl l dl s s r dsdr
s
f r D s ds s ds t t r dr f r r dr


 
+
+ +
+ + +
 +





 
=− − − +



 


+ − − +=




  
  

29
1
00 0
00
00
0
( , ) ( ) exp ( ) ( )
( ) exp ( ) ( ) ( , )
( , ) ( ) exp ( ) ( )
( ) exp ( ) ( )
ts s sr
r
t t tr
r
tt s sr
rr
t tr
r
I s s r x r D l dl l dl drds
x r D s ds s ds t t r dr
s s r x r D l dl l dl dsdr
x r D s ds s ds




−
−
−
−

= − − −




+ −− −




= − − −




+ −−

  
 
  

0
00
00 0
(, )
( ) ( , ) exp ( ) ( )
( ) exp ( ) ( ) ( , ) ( ) ( , 0)
t
t t s sr
rr
t t tr t
r
t t r dr
x r s s r D l dl l dl dsdr
s
x r D s ds s ds t t r dr x r r dr


 
−
−
−



 
=− − − −



 


+ − − −=




  
  
It follows from the above equations and (Α1) that equation (4.2) holds.
Suppose that  
( ) 
()
01
f C 0,T L 0,T
++
    with
 ( 1)
0,
sup [ ]
tT
ft

 + satisfies
equation (4.2) for all  
( ) 
()
 C1 0,T L 0,T
++
    with

()
L 0,T
at
 
+

 +  



and  
t  0,T . We next show that f  f . Define the
function u = f − f . Then  
()
u C0 0,T +
  with
 ( 1)
0,
sup [ ]
tT
ut

 + and u satisfies
the following equation for all  
( ) 
()
 C1 0,T L 0,T
++
    with

()
L 0,T
at
 
+

 +  



and  
t  0,T :
()
00
0
( ) () (, ) (, ) (, ) (, )
(, ) (, ) 0
t
a D s s a s a s a u s a dads
as
u t a t a da



+
+


+ −−



+=


(A5)
Let arbitrary  
 0,T ,  
()
D C0 0,T and  )
( ) )
()
g C1 T, L T,

 − +  − + be
given. Define the function  
( ) 
()
 C1 0,T L 0,T
++
  :
( , ) exp ( ) ( ) ( )
at
ta
t a D s ds s ds g a t

 
+−

= − − +−



  (A6)

30
We notice that the function  defined by (A6) satisfies
()
(t, a) (t, a) D(t) (a) (t, a)
at
  
 + = +
  for all  
t  0,T , a  0 . Since

()
D C0 0,T , ( ) ( )
 C0 L
++
  and  
()
 L 0,T
+
  , we obtain that

()
L 0,T
at
 
+

 +  



. Thus, we get from (A5) and (A6) for  
t  0,T :
()
00
0
( ) ( ) ( , ) exp ( ) ( ) ( )
( , ) exp ( ) ( ) ( ) 0
t as
sa
at
ta
D s D s u s a D l dl l dl g a s dads
u t a D s ds s ds g a t da




+ + −
+ + −

− − − +−




+ − − +− =



  
 
(A7)
Setting t =, we get from (A7):
()
00
0
( ) ( ) ( , ) exp ( ) ( ) ( )
(, ) ( ) 0
as
sa
D s D s u s a D l dl l dl g a s dads
u t a g a da
 

+ + −
+

− − − +−



+=
  

(A8)
Using the fact that for every   0 there exists  
()
D  C0 0,T with
0
() ()
T
D s − D s ds  
 and D D 
  , the fact that
 ( 1)
0,
sup [ ]
tT
ut

 + and the fact
that  
()
D C0 0,T is arbitrary, we obtain from (A8):
0
u(, a)g(a)da 0
+
=
 (A9)
Using the fact that  )
( ) )
()
g C1 T, L T,

 − +  − + is arbitrary and exploiting the
fact that ( )
0
u[] C +
 with 1
u[]  + , we establish from (A9) and Corollary 4.24
on page 110 in [5] that u[] = 0 . Since  
 0,T is arbitrary, we conclude that
u(t, a) = 0 for all  
t  0,T , a  0 .
The proof is complete.

31
Proof of Lemma 2: Since ( )  
f , S : 0,T → X is a continuous mapping with metric
given by (2.5), it follows that the mapping   ( )
0
0,T t (a) D(t) f (t, a)da
+
→ +
 is of
class  
()
L 0,T
 . Therefore, equation (2.7) with ( )
 t, a  1 implies that the mapping

0
0,T t f (t, a)da
+
 →  is absolutely continuous and satisfies for  
t  0,T a.e.:
()
00
( , ) ( , 0) ( ) ( ) ( , )
d f t a da f t a D t f t a da
dt 
+ +
 = − +



  (A10)
Since f (t, a)  0 for all a  0 , it holds that
1 0
f [t] f (t, a)da
+
=  (A11)
Combining (A10), (A11) and (2.2), we get for  
t  0,T a.e.:
( 1) 1
00
[ ] ( ( )) ( ) ( , ) ( ) [ ] ( ) ( , )
d f t S t k a f t a da D t f t a f t a da
dt  
+ +
= −−
  (A12)
Exploiting the facts that D(t)  0 for t  0 a.e., (a)  0 for all a  0 , we get for

t  0,T a.e.:
( 1) 1
[] []
d ft Mk ft
dt 
 (A13)
where  ( )
0,
max ( )
in
SS
M S

= . The differential inequality (A13) implies estimate (4.3).
Using (2.3) and the facts that (S )  0 for all S  0 , q(a)  0 for all a  0 , we obtain
the following differential inequality for  
t  0,T a.e.:
()
() () ()
in
S t  D t S − S t (A14)
The differential inequality (A14) implies the second estimate (4.4).
Using (4.3), (2.3) and the facts that (S )  S holds for all  
0, in
S  S , (S )  0 for
all S  0 , q(a)  0 for all a  0 , we obtain the following differential inequalities for

t  0,T a.e.:

32
()
( ) ()
( ) ()
0
01
01
( ) ( ) ( ) ( ( )) ( , )
( ) ( ) ( ( )) exp
( ) ( ) exp ( )
in
in
in
S t D t S S t S t q f t a da
Dt S St St q M k t f
Dt S St q M k t f St


+



 −−
 −−
 − −

(A15)
The differential inequality (A15) implies the following estimates for all  
t  0,T :
()
( )( )
()
00
1 0
01 0
00
1
00
exp 1
( ) exp ( )
exp exp
exp ( ) ( )
exp 1
exp exp ( ) 1 exp ( )
t
tt
in
tt
in
Mk t
S t D s ds q f S
Mk
Mk t Mk
S D s ds q f D d
Mk
Mk t
q f D s ds S S D s ds
Mk

 
  
  
  

−

 − −



−

+ − −


  

−   
   
 − − + − −
 
 


    





  
Since 0 0
00
exp ( ) 1 exp ( )
tt
in
D s ds S S D s ds S

 

− + −− 
 
 

 

  (a consequence of the facts
that D(t)  0 for t  0 a.e. and ( )
0 0, in
S  S ), the above estimate implies the first
estimate (4.4). The proof is complete.

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:17:12.681Z
- **Text Length:** 55793 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 32 of 32
