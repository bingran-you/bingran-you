# PDF Document: Zondi et al. - 2025 - Quadratic variation and local times of the horizontal component of the Peano curve (square filling c.pdf

**File Path:** Zondi et al. - 2025 - Quadratic variation and local times of the horizontal component of the Peano curve (square filling c.pdf

**Processed Date:** 2026-02-10T18:14:03.277Z

**File Size:** 718.12 KB

**Total Pages:** 21

**Extracted Pages:** 21

**PDF Library:** Zotero PDFWorker

**Attachment Item ID:** 2798

**Title:** Quadratic variation and local times of the horizontal component of the Peano curve (square filling curve)

**Collection:** Large Files

---

## Extracted Text Content

Quadratic variation and local times of the horizontal
component of the Peano curve (square filling curve)
Phumlani L. Zondi, Darlington Hove, Rafał M. Łochowski,∗ Farai J. Mhlanga †
March 14, 2025
Abstract
We show that the horizontal component of the Peano curve has quadratic variation equal the limit of quadratic variations along the Lebesgue partitions for grids of the form 3−npZ + 3−nr, n = 1, 2, . . ., where p is a rational number, while r is irrational number, but the value of such quadratic variation depends on p. This also yields that the horizontal component of the Peano curve is an example of a deterministic function possessing local time (density of the occupation measure) with respect to -
the Lebesgue measure, whose local time can be expressed as the limit of normalized numbers of interval crossings by this function but the normalization is not a smooth function of the width of the intervals. These two features distinct the horizontal component of the Peano curve from the trajectories of the Wiener process, which is widely used in financial models.
1 Introduction
The aim of this note is to investigate existence of quadratic variation and local time of the xcomponent of the Peano curve. The Peano curve is a well known continuous function P : [0, 1] → [0, 1]2, which attains (as its value) any point of the unit square [0, 1]2, that is, P is continuous and the image of the segment [0, 1] under P is the whole unit square [0, 1]2. Both of its components (x, y) (P(t) = (x(t), y(t)), t ∈ [0, 1]) reveal fractal structure, stemming from self-similarity. The formal d-
efinition of the Peano curve is the following (see [Sag94, Chapt. 3]). Let t = 03t1t2t3 . . . := P+∞
j=1 tj3−j, tj ∈ {0, 1, 2}, j = 1, 2, . . ., be the trinomial expansion of the number t ∈ [0, 1]. Let k : {0, 1, 2} → {0, 1, 2} be given by k(n) = 2−n. Now, the Peano curve P(t) = (x(t), y(t)) is defined by the formulas
x(t) = 03k0 (t1) kt2 (t3) kt2+t4 (t5) kt2+t4+t6 (t7) . . . , (1)
y(t) = 03kt1 (t2) kt1+t3 (t4) kt1+t3+t5 (t6) . . . ; (2)
here kv, v = 0, 1, 2, . . . denotes vth iteration of the function k. For the proof that formulas (1) and (2) define x and y in a unique way (regardless whether we take finite or infinite trinomial expansion of t (with infinite many trailing 2s) – in case it has finite trinomial expansion), as well as that P is continuous and the image of the segment [0, 1] under P is the whole unit square [0, 1]2 see for example [Sag94, Chapt. 3]. For illustration, we present two approximating polygons of the Pean-
o curve obtained in the first and the second step of an iteration procedure, whose limit is the Peano curve.
∗e-mail: rlocho@sgh.waw.pl, ORCID no.: 0000-0001-5427-8508 †ORCID no.: 0000-0002-8775-9073
1
arXiv:2501.07966v3 [math.CA] 12 Mar 2025

Figure 1: Approximating polygon of the Peano curve (first step of iteration procedure). Some lines were altered for better illustration of the parametrization of the curve.
Figure 2: Approximating polygon of the Peano curve (second step of iteration procedure). Some lines were altered for better illustration of the iteration procedure.
Let P be the approximating polygon obtained in the first step. In the second step each segment of P is replaced by the whole P (after proper rescaling, shift and/or reflection). Similarly, in the nth step each segment of approximating polygon obtained in the previous step is replaced by the whole P (after proper rescaling, shift and/or reflection). The x component of the first two approximating polygons of the Peano curve is presented in the two next figures.
2

Figure 3: The x component of the first approximating polygon.
Figure 4: The x component of the second approximating polygon.
Using (1) one easily checks that x : [0, 1] → [0, 1] is self-similar in this regard that
x(t) = 1
3 x(9t), t ∈ 0, 1
9 , (3)
x(t) = 1
3 x(2 − 9t) = x 2
9 −t , t∈ 1
9, 2
9 , (4)
x(t) = 1
3 x(9t − 2) = x t − 2
9 , t∈ 2
9, 3
9 , (5)
x(t) = 1
3+1
3 x(9t − 3) = 1
3 +x t− 3
9 , t∈ 3
9, 4
9 , (6)
x(t) = 1
3+1
3 x(5 − 9t) = 1
3 +x 5
9 −t , t∈ 4
9, 5
9 , (7)
3

x(t) = 1
3+1
3 x(9t − 5) = 1
3 +x t− 5
9 , t∈ 5
9, 6
9 , (8)
x(t) = 2
3+1
3 x(9t − 6) = 2
3 +x t− 6
9 , t∈ 6
9, 7
9 , (9)
x(t) = 2
3+1
3 x(8 − 9t) = 2
3 +x 8
9 −t , t∈ 7
9, 8
9 , (10)
x(t) = 2
3+1
3 x(9t − 8) = 2
3 +x t− 8
9 , t∈ 8
9, 9
9 . (11)
We also have the following symmetry
x(1 − t) = 1 − x(t), t ∈ [0, 1] . (12)
A very similar self-similarity holds for the standard Brownian motion stochastic process (B(t), t ∈ [0, +∞)), namely
B(t), t ∈ 0, 1
9 =d 1
3 B(9t), t ∈ 0, 1
9,
where ’=d’ denotes the equality of finite dimensional distributions of processes B(t), t ∈ 0, 1
9
and 3−1B(9t), t ∈ 0, 1
9 . Arguably, a similar but more general property of the standard Brownian motion (sBm in short), namely
(B(t) − B(s), 0 ≤ s ≤ t) =d a−1 B(a2t) − B(a2s) , 0 ≤ s ≤ t , for any a > 0,
is the reason why the sBm has linear quadratic variation, [B]t = t, t ≥ 0. Quadratic variation [B]t, t ≥ 0, of the sBm is usually defined as the limit of the sums
kn
X
i=1
B (tn
i ) − B tn
i−1
2,
called quadratic variations along (or based on) the sequences (tn
i )kn
i=0, n = 1, 2, . . ., where
0 = tn
0 < tn
1 < tn
2 < . . . < tn
kn = t
are deterministic times such that
max
i=1,2,...,kn
tn
i − tn
i−1
tends to 0 as n → +∞. For sBm, this limit exists (in probability) and is equal t. A better, almost sure convergence, is obtained when tn
i s are replaced by random times, which are times of the hitting by B the grid cnZ + rn, where cn is a sequence of positive reals tending to 0, rn ∈ R, see [CLJPT81]. Partitions obtained from the hitting times by a path the grids cnZ + rn are called Lebesgue partitions; for a precise definition in a case where a path is continuous see Sect. 1.1. A similar phenomenon holds for quadratic variation of continuous semimartingales, see [Lem83], càdlàg semimartingales [ŁOPS21], and 1/H-variation of fract-
ional Brownian motions (fBms in short) [DŁMP23]. One may expect a similar phenomenon for the x-component of the Peano curve. It is not difficult to observe that quadratic variations of x based on Lebesgue partitions for the hitting times by x the grids 3−nZ + rn, where rn is not multiple of 3−n, n = 1, 2, . . ., tend to t/4. However, computer simulations (a Python language code available upon request) revealed quite different picture for other grids of the form 3−npZ + rn, where p is a rational nu-
mber. In the table below we present some results of these simulations.
4

cn = rn = simulation of the quadratic variation
1/3n 0 t 2/3n 0 0.5 t 1/3n 1/ (2 · 3n) 0.25 t 2/3n 1/ (2 · 3n) 0.3333 t 2/3n 1/ (4 · 3n) 0.3333 t 1/ (2 · 3n) 1/ (4 · 3n) 0.3125 t 8/3n 1/ (5 · 3n) 0.2963 t
Thus we observe that the situation is quite different for the Peano curve – the quadratic variations of the x-component of the Peano curve along different sequences of Lebesgue partitions may be quite different (or may even not exist). The pattern emerging from the simulation results is not clear. However, we managed to obtain, using rather delicate and detailed reasoning, the existence of the quadratic variations of the x-component of the Peano curve along some sequences of Lebesgue partitions. M-
ore precisely, we proved that the x-component of the Peano curve has quadratic variation defined as the limit (as n → +∞) of quadratic variations along the Lebesgue partitions for grids of the form 3−npZ + 3−nr, n = 1, 2, . . ., where p is a positive rational number and r is for example an irrational number, and this quadratic variation is given by
[x]t = 3⌊− log3 p⌋p 1 − 3
4 3⌊− log3 p⌋p t, t ∈ [0, 1].
This stands in contrast with the property of the trajectories of above mentioned stochastic processes (independence of the quadratic variation along Lebesgue partitions from the grids) and reflects regularisation by noise phenomenon.
More detailed information about trajectories of a stochastic process than the quadratic (or 1/H) variation is provided by local time. Local time is usually defined as the density of the occupation measure of the trajectories of the process with respect to some given measure ν. For fBms, the measure ν is the Lebesgue measure, for semimartingales - the measure ν is the Lebesgue-Stieltjes measure associated with the continuous part of the quadratic variation of the process. Such defined local time fo-
r fBms and semimartingales may be defined in terms of grid crossings, but now we consider only points of the grid around the given level. In what follows, we prove that the Peano curve has local time defined as the density of its occupation measure with respect to the Lebesgue measure, and it can be expressed in terms of numbers of grid crossings around the given level, but the normalization of these numbers is not as smooth as in the case of stochastic processes. This is another manifestation of -
regularisation by noise phenomenon. The paper is organized as follows. In Section 1.1 we state essential definitions used later in the paper. Section 2 explores the quadratic variation of the Peano curve along the sequence of Lebesgue partitions. In Section 2.1, we introduce a one-step recursion for the quadratic variation of the xcomponent of the Peano curve along these partitions, which is then extended to a k-step recursion in Section 2.2. Section 2.3 examines the limit of quadratic variations -
of x along the Lebesgue partitions and presents the first main result of the paper. In Section 2.4, we discuss truncated variation and the number of crossings of the x-component. In section 3 we prove the second main result of this paper – existence of the local times of the x-component of the Peano curve, and expresses this local time as the weak limit of normalized interval crossing counts. Notation: Z denotes the set of integers, N denotes the set of non-negative integers, N+ denotes the set of-
 positive integers and Q denotes the set of rational numbers.
5

1.1 Quadratic variation of a continuous curve based on the Lebesgue partition – definitions
Let c be a positive real and r be a real number. By the grid cZ + r we will mean the countable set
cZ + r = {u ∈ R : ∃q ∈ Z u = c · q + r} .
Now let us define the Lebesgue partition π(c, r) for a continuous function x : [0, T ] → R (T is a positive real) and the grid cZ+r. π(c, r) is the sequence of consecutive points t1(c, r) ≤ t2(c, r) ≤ . . . from the set [0, T ] ∪ {+∞},
π(c, r) = (t1(c, r), t2(c, r), . . .) ,
defined recursively in the following way.
t1(c, r) = inf {t ∈ [0, T ] : x(t) ∈ (cZ + r)}
with the convention that inf ∅ = +∞. If tm(c, r) = +∞ for some m = 1, 2, . . ., then we set tm+1(c, r) = +∞. If tm(c, r) < +∞ for some m = 1, 2, . . ., (this also means that tm(c, r) ≤ T ) then we set
tm+1(c, r) = inf {t ∈ [tm(c, r), T ] : x(t) ∈ ((cZ + r) \ {x (tm(c, r))})} .
For t ∈ [0, T ] we also define
k(c, r, t) := min {m ∈ N+ : tm(c, r) ≥ t} , l(c, r, t) := max {m ∈ N+ : tm(c, r) ≤ t}
and the quadratic variation [x]c,r
s,t of x : [0, T ] → R on the time interval [s, t] ⊆ [0, T ] along the Lebesgue partition π (c, r) for x is defined as
[x]c,r
s,t :=
l(c,r,t)−1
X
m=k(c,r,s)
(x (tm+1(c, r)) − x (tm(c, r)))2 ,
where the value of the sum Pl(c,r,t)−1
m=k(c,r,s) is 0 when l(c, r, s) − 1 < k(c, r, s). Let us notice that since |x (tm+1(c, r)) − x (tm(c, r))| = c for k(c, r, t) ≤ m ≤ l(c, r, t) − 1 then we have
[x]c,r
s,t = (l(c, r, t) − k(c, r, t)) c2. (13)
We also have the following relation: for s < t < u
[x]c,r
s,u = [x]c,r
s,t + 1l(c,r,t)<k(c,r,t)c2 + [x]c,r
t,u , (14)
where
1l(c,r,t)<k(c,r,t) =
(
0 if l(c, r, t) ≥ k(c, r, t),
1 if l(c, r, t) < k(c, r, t) =
(
0 if l(c, r, t) = k(c, r, t) = t,
1 if l(c, r, t) < t < k(c, r, t).
For t ∈ [0, T ], by [x]c,r
t we will mean [x]c,r
0,t , so we formally define [x]c,r
t as
[x]c,r
t := [x]c,r
0,t .
2 Quadratic variation of the Peano curve along the sequence of
the Lebesgue partitions for the grids (p/3n) Z + (r/3n), p ∈ Q,
n∈N
Let x : [0, 1] → R be the x component of the Peano curve. In this section we will deal with the quadratic variations of x along the Lebesgue partitions π (cn, rn) for x and the grids cnZ + rn where
cn = p
3n ≤ 1
3, r = r
3n ,
p = p′/q′, p′ and q′ are positive integers not divisible by 3, r ∈ R, and n ∈ Z.
6

2.1 One-step recursion
Let us fix c ∈ (0, 1/3] and r ∈ R. From self-similarity relation (3), we see that the range of the function x on the interval [0, 1/9] is [0, 1/3] and
tm (c, r) = 1
9 tm (3c, 3r) , k (c, r, 1/9) = k (3c, 3r, 1) , l (c, r, 1/9) = l (3c, 3r, 1) .
This and (13) yield
[x]c,r
1/9 = 1
9 [x]3c,3r
1 (15)
(recall that [x]c,r
1/9 = [x]c,r
0,1/9, [x]3c,3r
1 = [x]3c,3r
0,1 ). Similarly, by (4) and using the fact that the points from the grid cZ + r hit by x consecutively on the time interval [1/9, 2/9] are the same as the points from this grid hit by x on the time interval [0, 1/9] but in the reverse order, we get
[x]c,r
2/9 − [x]c,r
1/9 = [x]c,r
1/9 = 1
9 [x]3c,3r
1 . (16)
Using (5) and a similar observation for the intervals [1/9, 2/9] and [2/9, 3/9] we get
[x]c,r
3/9 − [x]c,r
2/9 = [x]c,r
1/9 = 1
9 [x]3c,3r
1 . (17)
Next, we will use relations (6)-(8), or equivalent relations
3x(t) − 1 = x(9t − 3), t ∈ 3
9, 4
9 , (18)
3x(t) − 1 = x(5 − 9t), t ∈ 4
9, 5
9 , (19)
3x(t) − 1 = 3x(9t − 5), t ∈ 5
9, 6
9 . (20)
From the fact that the function x attains on the interval [3/9, 4/9] values from the interval [1/3, 2/3], while on the interval [0, 1/3] it attains values from the interval [0, 1/3] it follows that either the first value from the grid cZ + r attained by x on the time interval [3/9, 4/9] is different from the last value from the grid cZ + r attained by x on the time interval [0, 1/3], or this value is equal 1/3 and is attained by x at t = 1/3. This together with relations (18) and (14) yield
[x]c,r
3/9,4/9 = [x]c,r
4/9 − [x]c,r
1/3 − 1l(c,r,1/3)<k(c,r,1/3)c2 = 1
9 [x]3c,3r−1
1 . (21)
Next, (19), (20), the fact that the points from the grid cZ + r hit by x consecutively on the time interval [4/9, 5/9] are the same as the points from this grid hit by x on the time interval [3/9, 4/9] but in the reverse order, and a similar observation for the intervals [4/9, 5/9] and [5/9, 6/9] give
[x]c,r
5/9 − [x]c,r
4/9 = [x]c,r
3/9,4/9 = 1
9 [x]3c,3r−1
1 , (22)
[x]c,r
6/9 − [x]c,r
5/9 = [x]c,r
3/9,4/9 = 1
9 [x]3c,3r−1
1 . (23)
Similarly, for the intervals [6/9, 7/9], [7/9, 8/9] and [8/9, 9/9] one has, respectively,
[x]c,r
6/9,7/9 = [x]c,r
7/9 − [x]c,r
2/3 − 1l(c,r,2/3)<k(c,r,2/3)c2 = 1
9 [x]3c,3r−2
1 , (24)
7

[x]c,r
8/9 − [x]c,r
7/9 = [x]c,r
6/9,7/9 = 1
9 [x]3c,3r−2
1 (25)
and
[x]c,r
9/9 − [x]c,r
8/9 = [x]c,r
6/9,7/9 = 1
9 [x]3c,3r−2
1 . (26)
Summing equalities (15)-(17), (21)-(23) and (24)-(26) we get
[x]c,r
1 − 1l(c,r,1/3)<k(c,r,1/3)c2 − 1l(c,r,2/3)<k(c,r,2/3)c2 = 1
3 [x]3c,3r
1 +1
3 [x]3c,3r−1
1 +1
3 [x]3c,3r−2
1
or, equivalently
[x]c,r
1 =1
3 [x]3c,3r
1 +1
3 [x]3c,3r−1
1 + 1l(c,r,1/3)<k(c,r,1/3)c2 + 1
3 [x]3c,3r−2
1 + 1l(c,r,2/3)<k(c,r,2/3)c2. (27)
2.2 k-step recursion
Now we will deal with the quadratic variations of the function x along the Lebesgue partitions π (cn, rn) for x and the grids cnZ + rn where
cnZ + rn = p
3n Z + r
3n = p′
q′ · 3n Z + r
3n ,
p = p′/q′, p′ and q′ are positive integers not divisible by 3, r ∈ R, and n ∈ Z. This means that
cn = p
3n = p′
3nq′ , rn = r
3n , n ∈ Z.
Let us define
M :=  ̃n ∈ Z : p
3n ̃ ≤ 1
3 . (28)
Introducing the new variable θ = r/p = rq′/p′ ∈ [0, 1) such that r = θc and using the equality 3cn = cn−1 for n ∈ M, by (27) we get
[x]cn,rn
1 =1
3 [x]cn−1,θcn−1
1 +1
3 [x]cn−1,θcn−1−1
1 + 1l(cn,rn,1/3)<k(cn,rn,1/3)c2 (29)
+1
3 [x]cn−1,θcn−1−2
1 + 1l(cn,rn,2/3)<k(cn,rn,2/3)c2. (30)
Let us notice that the inequality
l(cn, rn, 1/3) < k(cn, rn, 1/3)
holds iff l(cn, rn, 1/3) < 1/3 < k(cn, rn, 1/3) which holds iff the grid cnZ + rn does not contain the value x(1/3) = 1/3 which is equivalent with the statements
∀q ∈ Z cn · q + rn = cn (q + θ) ̸= 1
3,
∀q ∈ Z q + θ ̸= 1
cn−1
,
θ− 1
cn−1
̸= 0,
where {a} denotes the fractional part of the number a. Similarly, the inequality
l(cn, rn, 2/3) < k(cn, rn, 2/3)
8

holds iff
θ− 2
cn−1
̸= 0.
Now, (29) takes for n ∈ M the form
[x]cn,θcn
1 =1
3 [x]cn−1,θcn−1
1
+1
3 [x]cn−1,{θ−1/cn−1}cn−1
1 + 1(0,1) θ − 1
cn−1
c2
+1
3 [x]cn−1,{θ−2/cn−1}cn−1
1 + 1(0,1) θ − 2
cn−1
c2, (31)
where 1(0,1) is the indicator function of the interval (0, 1):
1(0,1)(a) =
(
0 if a ∈/ (0, 1),
1 if a ∈ (0, 1).
By (31) we have the following 1-step recursion
[x]cn,θcn
1 =1
3 [x]cn−1,θcn−1
1
+1
3 [x]cn−1,{θ−1/cn−1}cn−1
1 + 1(0,1) θ − 1
cn−1
c2
+1
3 [x]cn−1,{θ−2/cn−1}cn−1
1 + 1(0,1) θ − 2
cn−1
c2
=1
3 [x]
3p′
3nq′ ,θ 3p′
3n q′ 1
+1
3 [x]
3p′
3nq′ ,
n
θ− 3nq′
3p′
o 3p′ 3n q′
1 + 1(0,1) θ − 3nq′
3p′
p′
3nq′
2
+1
3 [x]
3p′
3nq′ ,
n
θ−2 3nq′
3p′
o 3p′ 3n q′
1 + 1(0,1) θ − 2 3nq′
3p′
p′
3nq′
2
. (32)
Now, let us assume that
n−1∈M
which means that
p′
3n−1q′ ≤ 1
3 , so 32p′
3nq′ ≤ 1
and we can do the second step:
[x]
3p′
3nq′ ,θ 3p′
3n q′
1 =1
3 [x]
32 p′
3nq′ ,θ 32p′
3n q′ 1
+1
3 [x]
32 p′
3nq′ ,
n
θ− 3nq′
32 p′
o 32p′ 3n q′
1 + 1(0,1) θ − 3nq′
32p′
3p′ 3nq′
2
+1
3 [x]
32 p′
3nq′ ,
n
θ−2 3nq′
32 p′
o 32p′ 3n q′
1 + 1(0,1) θ − 2 3nq′
32p′
3p′ 3nq′
2
.
9

Similarly we can expand two other terms appearing in (32):
[x]
3p′
3nq′ ,
n
θ− 3nq′
3p′
o 3p′ 3n q′
1 =1
3 [x]
32 p′
3nq′ ,
n
θ− 3nq′
3p′
o 32p′ 3n q′ 1
+1
3 [x]
32 p′
3nq′ ,
n
θ− 3nq′
3p′ − 3nq′
32 p′
o 32p′ 3n q′
1 + 1(0,1) θ − 3nq′
3p′ − 3nq′
32p′
3p′ 3nq′
2
+1
3 [x]
32 p′
3nq′ ,
n
θ− 3nq′
3p′ −2 3nq′
32 p′
o 32p′ 3n q′
1 + 1(0,1) θ − 3nq′
3p′ − 2 3nq′
32p′
3p′ 3nq′
2
and
[x]
3p′
3nq′ ,
n
θ−2 3nq′
3p′
o 3p′ 3n q′
1 =1
3 [x]
32 p′
3nq′ ,
n
θ−2 3nq′
3p′
o 32p′ 3n q′ 1
+1
3 [x]
32 p′
3nq′ ,
n
θ−2 3nq′
3p′ − 3nq′
32 p′
o 32p′ 3n q′
1 + 1(0,1) θ − 2 3nq′
3p′ − 3nq′
32p′
3p′ 3nq′
2
+1
3 [x]
32 p′
3nq′ ,
n
θ−2 3nq′
3p′ −2 3nq′
32 p′
o 32p′ 3n q′
1 + 1(0,1) θ − 2 3nq′
3p′ − 2 3nq′
32p′
3p′ 3nq′
2
.
From the first and the second steps we get
[x]cn,θcn
1 =1
9
X
i1 ,i2 ∈{0,1,2}
[x]
32 p′
3nq′ ,
n
θ−i1 3nq′
3p′ −i2 3nq′
32 p′
o 32p′ 3n q′ 1
+ 1(0,1) θ − 3nq′
3p′
p′
3nq′
2
+ 1(0,1) θ − 2 3nq′
3p′
p′
3nq′
2
+1
3 1(0,1) θ − 3nq′
32p′
3p′ 3nq′
2
+1
3 1(0,1) θ − 2 3nq′
32p′
3p′ 3nq′
2
+1
3 1(0,1) θ − 3nq′
3p′ − 3nq′
32p′
3p′ 3nq′
2
+1
3 1(0,1) θ − 3nq′
3p′ − 2 3nq′
32p′
3p′ 3nq′
2
+1
3 1(0,1) θ − 2 3nq′
3p′ − 3nq′
32p′
3p′ 3nq′
2
+1
3 1(0,1) θ − 2 3nq′
3p′ − 2 3nq′
32p′
3p′ 3nq′
2
=1
32
X
i1 ,i2 ∈{0,1,2}
[x]
32 p′
3nq′ ,
n
θ−P2
v=1 iv 3nq′
3v p′
o 32p′ 3n q′ 1+
+
2
X
m=1
1
3m−1
X
j1 ,...,jm−1 ∈{0,1,2},jm ∈{1,2}
1(0,1)
(
θ−
m
X
l=1
jl
3nq′
3lp′
)!
3m−1p′
3nq′
2
.
Reasoning similarly further, for a given integer n and any positive integer k such that n−(k−1) ∈ M, we obtain
[x]cn,θcn
1 =1
3k
X
i1 ,i2 ,...,ik ∈{0,1,2}
[x]
3k p′
3nq′ ,
n
θ−Pk
v=1 iv 3nq′
3v p′
o 3k p′ 3n q′
1 (33)
+
k
X
m=1
1
3m−1
X
j1 ,...,jm−1 ∈{0,1,2},jm ∈{1,2}
1(0,1)
(
θ−
m
X
l=1
jl
3nq′
3lp′
)!
3m−1p′
3nq′
2
.
Remark 2.1 Using (28) we infer that the maximal k such that n − (k − 1) ∈ M satisfies
p
3n−k+1 ≤ 1
3 and p
3n−k > 1
3.
10

This is equivalent with
k − n = log3
1
p = log3
q′
p′ . (34)
2.2.1 Quadraric variations along the Lebesgue partitions for the grids (p/3n) Z + (r/3n) when r is irrational
Formula (33) simplifies when
θ−
m
X
l=1
jl
3n
3l
q′
p′ for all m = 1, . . . , k; j1, . . . , jm−1 ∈ {0, 1, 2} , jm ∈ {1, 2} , is not integer. (35)
This holds for example when r is irrational thus θ = r/p is an irrational number too. In such a case for all m = 1, . . . , k; j1, . . . , jm−1 ∈ {0, 1, 2} , jm ∈ {1, 2} , we get
1(0,1)
(
θ−
m
X
l=1
jl
3nq′
3lp′
)!
= 1,
so the second sum in (33) simplifies to
k
X
m=1
1
3m−1
X
j1 ,...,jm−1 ∈{0,1,2},jm ∈{1,2}
1(0,1)
(
θ−
m
X
l=1
jl
3nq′
3lp′
)!
3m−1p′
3nq′
2
=
k
X
m=1
1
3m−1 3m−12 3m−1p′
3nq′
2
= 2 p′
3nq′
2k
X
m=1
9m−1
=1
4
9k − 1 9n
p′
q′
2
(36)
and (33) simplifies to
[x]cn,θcn
1 =1
3k
X
i1 ,i2 ,...,ik ∈{0,1,2}
[x]
3k p′
3nq′ ,
n
θ−Pk
v=1 iv 3nq′
3v p′
o 3k p′ 3n q′
1 +1
4
9k − 1 9n
p′
q′
2
. (37)
Remark 2.2 Notice that for m = 1, . . . , k, j1, . . . , jm−1 ∈ {0, 1, 2} , jm ∈ {1, 2} , the number
Pm
l=1 jl 3n
3l
q′
p′ may be represented as
q′
p′ 3n 3m−1j1 + . . . 3jm−1 + jm
3m = q′
p′ 3n−ma,
where a ∈ {1, 2, 4, 5, . . . , 3m − 2, 3m − 1} or equivalently, a is an integer between 0 and 3m, not divisible by 3; and opposite – for any integer a between 0 and 3m, not divisible by 3, there exist numbers jm−1 ∈ {0, 1, 2} , jm ∈ {1, 2} such that
a = 3m−1j1 + . . . 3jm−1 + jm.
Further, by (34), m may be any positive integer no greater than k = n +
j
log3
q′ p′
k
so n − m may be
any integer no smaller than −
j
log3
q′ p′
k
. Since n may be as large as we please (further we will tend
with n to +∞) thus a may be any integer number not divisible by 3 and condition (35) is equivalent
11

with the condition that for any integer b = n − m ≥ −
j
log3
q′ p′
k
and for any integer a not divisible
by 3,
θ ̸= q′a
p′ 3b .
This is equivalent with the fact that θ is not a multiple of
3−
j
log3
q′ p′
k
p′ = 1
3
j
log3
q′ p′
k
p′
.
2.3 Limit of quadratic variations of x along the Lebesgue partitions for the grids (p/3n) Z + (r/3n), p ∈ Q+, r ∈ R \ Q
Now we are ready to prove the first main result of this paper.
Theorem 2.3 Let x : [0, 1] → R be the horizontal component of the Peano curve, defined by (1). Let p = p′/q′ where p′ and q′ are positive integers not divisible by 3 and r be such that r = θp where θ is not a multiple of any 3m/p′, m ∈ Z. Then for t ∈ [0, 1]
lim
n→+∞ [x]3−np,3−nr
t = 3⌊− log3 p⌋p 1 − 3
4 3⌊− log3 p⌋p t.
Proof: Let us fix n ∈ M and take the maximal k = n +
j
log3
q′ p′
k
such that n − (k − 1) ∈ M so
(33) holds for any real θ. By Remark 2.2, since θ is not a multiple of any 3m/p′, m ∈ Z, (37) holds. Since the grids p
3n Z + r
3n = p
3n (Z + θ) and p
3n (Z + θ + q)
are the same for any integer q, without loss of generality we may assume that θ ∈ (0, 1). There exists some l = 0, 1, . . . , 3max{k−n,0}p′ − 1 such that
θ∈ l
3max{k−n,0}p′ , l + 1
3max{k−n,0}p′ . (38)
To estimate [x]cn,θcn
1 we need to deal with the sum:
1 3k
X
i1 ,i2 ,...,ik ∈{0,1,2}
[x]
3k p′
3nq′ ,
n
θ−Pk
v=1 iv 3nq′
3v p′
o 3k p′ 3n q′
1 . (39)
Numbers Pk
v=1 iv 3nq′
3v p′ = 3nq′
3k p′
Pk
v=1 3k−viv, i1, i2, . . . , ik ∈ {0, 1, 2}, appearing in (39), range over
3n q ′
3kp′ M , where M ∈ 0, 1, 2, . . . , 3k − 1 .
Let us notice that for c ∈ (1/3, 1] and r ∈ [0, c) we have
[x]c,r
1 = w · c2 for w = 0, 1, 2
iff
w · c + r ≤ 1 and (w + 1)c + r > 1 (40)
(notice that 3c > 1 thus [x]c,r
1 can not be equal 3 3kp′
3n q ′
2
). For example, if (40) holds with w = 0
this means that x hits the net cZ + r on the time interval [0, 1] only at the points t ∈ [0, 1] where
x(t) = r and [x]c,r
1 = 0; if (40) holds with w = 1 this means that x hits the net cZ + r only at the
12

points t ∈ [0, 1] such x(t) = r or x(t) = c + r. Moreover, if x(t1) = r and x(t2) = c + r then t2 > t1.
Thus [x]c,r
1 = c2.
In particular, taking the maximal k = n +
j
log3
q′ p′
k
, c = 3kp′/ (3nq′) , r = θ − 3kp′/M (3nq′) c,
we have
[x]
3k p′
3nq′ ,
n
θ− 3nq′
3k p′ M
o 3k p′ 3n q′
1 = w 3kp′
3nq′
2
for w = 0, 1, 2
iff
w 3kp′
3nq′ + θ − 3nq′
3kp′ M 3kp′
3nq′ ≤ 1 and (w + 1) 3kp′
3nq′ + θ − 3nq′
3kp′ M 3kp′
3nq′ > 1.
Let us consider two cases. 1st case.
3k p′
3nq′ > 1
2.
In this case we have
[x]
3k p′
3nq′ ,
n
θ− 3nq′
3k p′ M
o 3k p′ 3n q′
1 = 3kp′
3nq′
2
if and only if
3k p′
3nq′ + θ − 3nq′
3kp′ M 3kp′
3nq′ ≤ 1 (41)
and [x]
3k p′
3nq′ ,
n
θ− 3nq′
3k p′ M
o 3k p′ 3n q′
1 = 0 otherwise (notice that 2 3kp′
3nq′ > 1 thus [x]
3k p′
3nq′ ,
n
θ− 3nq′
3k p′ M
o 3k p′ 3n q′
1 can not
be equal 2 3kp′
3n q ′
2
). Thus we need to establish what is the number of M ∈ 0, 1, 2, . . . , 3k − 1 such
that (41) holds. Let us notice that (41) is equivalent with
θ − 3nq′
3kp′ M ≤ 3nq′
3kp′ − 1. (42)
Further, let us notice that
0 < 3nq′
3kp′ − 1 = 3max{k−n,0}−(k−n)q′ − 3max{k−n,0}p′
3max{k−n,0}p′ < 1
and for non-negative integer l satisfying (38) there are exactly
3max{k−n,0}−(k−n)q′ − 3max{k−n,0}p′ + 1 (43)
integers L among 0, 1, . . . , 3max{k−n,0}p′ − 1 for which
l
3max{k−n,0}p′ − 3nq′
3kp′ L = l − 3max{k−n,0}−(k−n)q′L
3max{k−n,0}p′ ≤ 3nq′
3kp′ − 1,
namely
L = Ql, Q(l − 1), . . . , Q l −
n
3max{k−n,0}−(k−n)q′ − 3max{k−n,0}p′o
(mod 3max{k−n,0}p′),
where Q is an inverse of 3max{k−n,0}−(k−n)q′ (mod 3max{k−n,0}p′), that is Q ∈ 1, 2, . . . , 3max{k−n,0}p′ − 1
and
3max{k−n,0}−(k−n)q′Q = 1 (mod 3max{k−n,0}p′)
13

(a (mod b) is the nonnegative remainder from the division of the integer a by the integer b). Such a number Q exists since 3max{k−n,0}−(k−n)q′ and 3max{k−n,0}p′ are relatively prime, see for example [HW75, Theorem 57]. Analogously, the number of integers M among 0, 1, . . . , 3max{k−n,0}p′ − 1 for which (42), equivalently, condition (41) holds, is equal to
N = 3max{k−n,0}−(k−n)q′ − 3max{k−n,0}p′. (44)
It is is smaller from (43) by 1 since θ > l/ 3max{k−n,0}p′ and we can not take
Q l−
n
3max{k−n,0}−(k−n)q′ − 3max{k−n,0}p′o
(mod 3max{k−n,0}p′).
Proportionally, there are no more that
3max{k−n,0}−(k−n)q′ − 3max{k−n,0}p′ 3k
3max{k−n,0}p′ + 1 = 3nq′
3kp′ − 1 3k + N
and no less than
3max{k−n,0}−(k−n)q′ − 3max{k−n,0}p′ 3k
3max{k−n,0}p′ − 1 = 3nq′
3kp′ − 1 3k − N
integers M among 0, 1, . . . , 3k − 1 (k is large) for which
θ − 3nq′
3kp′ M ≤ 3nq′
3kp′ − 1
and
X
i1 ,i2 ,...,ik ∈{0,1,2}
[x]
3k p′
3nq′ ,
n
θ−Pk
v=1 iv 3nq′
3v p′
o 3k p′ 3n q′
1 = 3nq′
3kp′ − 1 3k + ν 3kp′
3nq′
2
,
where ν ∈ [−N, N ]. Recalling that k = n +
j
log3
q′ p′
k
we get
lim
n→+∞
1 3k
X
i1 ,i2 ,...,ik ∈{0,1,2}
[x]
3k p′
3nq′ ,
n
θ−Pk
v=1 iv 3nq′
3v p′
o 3k p′ 3n q′ 1
= lim
n→+∞
1 3k
3k p′
3nq′
2 3nq′
3kp′ − 1 3k + ν 3kp′
3nq′
2
=3
j
log3
q′ p′
k p′
q′ − 3
j
log3
q′ p′
k p′
q′
2
.
Finally, by (37) we have
lim
n→+∞ [x]cn,θcn
1 =3
j
log3
q′ p′
k p′
q′ − 3
43
j
log3
q′ p′
k p′
q′
2
= 3⌊− log3 p⌋p − 3
4 3⌊− log3 p⌋p
2
= 3⌊− log3 p⌋p 1 − 3
4 3⌊− log3 p⌋p .
2nd case.
3k p′
3nq′ ≤ 1
2.
14

Similarly as in the first case we need to calculate for how many M = 0, 1, 2, . . . , 3k − 1 one has
3k p′
3nq′ + θ − 3nq′
3kp′ M 3kp′
3nq′ ≤ 1 and 2 3kp′
3nq′ + θ − 3nq′
3kp′ M 3kp′
3nq′ > 1, (45)
or, equivalently, for how many M = 0, 1, 2, . . . , 3k − 1 one has
θ − 3nq′
3kp′ M ≤ 3nq′
3kp′ − 1 and θ − 3nq′
3kp′ M > 3nq′
3kp′ − 2
and secondly, for how many M = 0, 1, 2, . . . , 3k − 1 one has
2 3kp′
3nq′ + θ − 3nq′
3kp′ M 3kp′
3nq′ ≤ 1. (46)
Reasoning similarly as in the first case we get that there are 3nq′
3kp′ − 2 3k + ν1 integers M among
numbers 0, 1, . . . , 3k − 1 (k large) for which (46) holds and 1 − 3nq′
3kp′ − 2 3k + ν2 integers M
among numbers 0, 1, . . . , 3k − 1 (k large) for which (45) holds; ν1, ν1 ∈ [−N, N ]. As a result we get also that
lim
n→+∞
1 3k
X
i1 ,i2 ,...,ik ∈{0,1,2}
[x]
3k p′
3nq′ ,
n
θ−Pk
v=1 iv 3nq′
3v p′
o 3k p′ 3n q′ 1
= lim
n→+∞
"
2 3k
3k p′
3nq′
2 3nq′
3kp′ − 2 3k + ν1 + 1
3k
3k p′
3nq′
2
3 − 3nq′
3kp′ 3k + ν2
#
=3
j
log3
q′ p′
k p′
q′ − 3
j
log3
q′ p′
k p′
q′
2
and by (37) we have
lim
n→+∞ [x]cn,θcn
1 =3
j
log3
q′ p′
k p′
q′ − 3
43
j
log3
q′ p′
k p′
q′
2
= 3⌊− log3 p⌋p 1 − 3
4 3⌊− log3 p⌋p .
Let us notice that the obtained limit is the same as in the first case. Now we are going to prove convergence of [x]cn,θcn
t for any t ∈ [0, 1]. Using the relations (3)-(11), we infer that
lim
n→+∞ [x]3−np,3−nr
i/9 = 3⌊− log3 p⌋p 1 − 3
4 3⌊− log3 p⌋p i
9 , i = 1, 2, . . . , 9.
Similarly, using multiple times (3)-(11), we get
lim
n→+∞ [x]3−np,3−nr
i/9m = 3⌊− log3 p⌋p 1 − 3
4 3⌊− log3 p⌋p i
9m , i = 1, 2, . . . , 9m, m = 1, 2, . . . .
From the fact that [0, 1] ∋ t 7→ lim infn→+∞ [x]3−np,3−nr
t and [0, 1] ∋ t 7→ lim supn→+∞ [x]3−np,3−nr
t
are not decreasing in t, and from two last limits we get that
lim
n→+∞ [x]3−np,3−nr
t = 3⌊− log3 p⌋p 1 − 3
4 3⌊− log3 p⌋p t, t ∈ [0, 1].
□
15

2.4 Truncated variation and numbers of interval crossings of the x–component of the Peano curve
Let us introduce the following functional called truncated variation. The truncated variation of x with the truncation parameter c ≥ 0 on the time interval [s, t], 0 ≤ s < t ≤ 1 is defined as:
TVc(x, [s, t]) := sup
π∈Π(s,t)
X
[u,v]∈π
max (|xv − xu| − c, 0) , (47)
where the supremum is taken over all finite partitions π of the interval [s, t], that is finite sets of no overlapping (with disjoint interiors) subintervals [u, v] of [s, t] such that S
[u,v]∈π[u, v] = [s, t]. The family of all such partitions is denoted by Π(s, t). The truncated variation is finite for any càdlàg or even regulated (i.e. possessing right- and left- limits) path x : [0, 1] → R whenever c > 0. Using [BDŁ23, last formula in Sect. 3.3], Theorem 2.3 (for example in the case when r is irrational) and denoting
Cp := 3⌊− log3 p⌋p 1 − 3
4 3⌊− log3 p⌋p
we get that for the x–component of the Peano curve we have the following convergence
lim
n→+∞ 3−npTV3−np(x, [0, t]) = Cpt, t ∈ [0, 1]. (48)
Now, we introduce numbers of interval (up- and down-) crossings by continuous x : [0, 1] → R on the time interval [s, t]. Let z ∈ R, c > 0, define σ0c = s and for n ∈ N0
τc
n = inf {u ∈ [σc
n, t] : xu ≥ z + c/2} ,
σc
n+1 = inf {u ∈ [τ c
n, t] : xu < z − c/2} ,
where we apply conventions: inf ∅ = +∞, [+∞, t] = ∅.
Definition 2.4 The number of downcrossings, upcrossings and crossings by x the interval [z − c/2, z + c/2] on the time interval [s, t] one defines respectively as
dz,c(x, [s, t]) := max {n : σc
n ≤ t} , uz,c(x, [s, t]) := d−z,c(−x, [s, t]) .
and
nz,c(x, [s, t]) := uz,c(x, [s, t]) + dz,c(x, [s, t]) .
Using (48), [BDŁ23, Theorem 2.2] and [BDŁ23, Remark 3.9] we get that for any continuous g : R → R,
3−np
Z
R
nz,3−np(x, [0, ·]) g(z)dz → Cp
Z
(0,·]
g(xt)dt. (49)
3 Local times of the x–component of the Peano curve
In this section we will prove existence of local time of x with respect to the Lebesgue measure, that is, existence of a function
L : [0, 1] × R → [0, +∞)
such that for any t ∈ [0, 1], Lt := L(t, ·) : R → [0, +∞) is Borel-measurable and for any Borelmeasurable and bounded function g : R → R one has
Zt
0
g (xs) ds =
Z
R
g(z)Lz
t dz. (50)
(In this section, for typographical reasons, we will rather use the notation xs instead of x(s).)
16

Theorem 3.1 There exists local time of the horizontal component x of the Peano curve. Moreover, this local time attains values no greater than 1.
Proof: To prove (50) it is sufficient to prove that for any interval [a, b] ⊂ R, a < b, one has
Zt
0
1[a,b] (xs) ds =
Zb
a
Lz
t dz.
We will construct L recursively, and from the construction we will infer that L attains values no greater than 1. Let us fix n = 1, 2, . . ., such that b − a > 3−n, and approximate a and b by numbers of the form pa/3n, pb/3n resp., where pa and pb are integers satisfying
pa
3n ≤ a < pa + 1
3n ≤ pb
3n ≤ b < pb + 1
3n .
Using this approximation we have that it is sufficient to prove that there exists a function
L : [0, 1] × R → [0, 1]
such that for any t ∈ [0, 1], Lt := L(t, ·) : R → [0, 1] is Borel-measurable and for any numbers of the form
a = pa
3n , b = pb
3n ≥ pa + 1
3n , n ∈ N, pa, pb ∈ Z,
one has
Zt
0
1[a,b] (xs) ds =
Zb
a
Lz
t dz. (51)
First, we will define Lt for t of the form k · 9−N , N = 1, 2, . . ., k = 1, 2, . . . , 9N . For any t ∈ [0, 1] and z ∈/ (0, 1) we define Ltz = 0. Next we start with N = 1, that is with t of the form u · 9−1, N = 1, 2, . . ., u = 1, 2, . . . , 9. Let us consider intervals [a, b] of the form
[a, b] = pa
3 , pa + 1
3 , pa = 0, 1, 2.
Let us notice that
Z 1/9
0
1[a,b] (xs) ds =
(1
9 if [a, b] = 0
3, 1
3, 0 if [a, b] = 1
3, 2
3,2
3, 3
3
=
Zb
a
Lz
1/9dz (52)
where
Lz
1/9 =
(1
3 if z ∈ 0, 1
3, 0 if z ∈ 1
3, 3
3.
Equality (52) holds since for s ∈ 0
9, 1
9 one has xs ∈ 0
3, 1
3. Further we have
Z 2/9
0
1[a,b] (xs) ds =
(2
9 if [a, b] = 0
3, 1
3, 0 if [a, b] = 1
3, 2
3,2
3, 3
3
=
Zb
a
Lz
2/9dz,
Z 3/9
0
1[a,b] (xs) ds =
(3
9 if [a, b] = 0
3, 1
3, 0 if [a, b] = 1
3, 2
3,2
3, 3
3
=
Zb
a
Lz
3/9dz,
where
Lz
2/9 =
(2
3 if x ∈ 0, 1
3, 0 if z ∈ 1
3, 3
3 , Lz
3/9 =
(3
3 if z ∈ 0, 1
3, 0 if z ∈ 1
3, 3
3.
17

Similarly, defining
Lz
4/9 =

 
 
3
3 if z ∈ 0, 1
3, 1
3 if z ∈ 1
3, 2
3, 0 if z ∈ 2
3, 3
3;
Lz
5/9 =

 
 
3
3 if z ∈ 0, 1
3, 2
3 if z ∈ 1
3, 2
3, 0 if z ∈ 2
3, 3
3;
Lz
6/9 =
(3
3 if z ∈ 0, 1
3∪1
3, 2
3, 0 if z ∈ 2
3, 3
3;
Lz
7/9 =
(3
3 if z ∈ 0, 1
3∪1
3, 2
3, 1
3 if z ∈ 2
3, 3
3 ; Lz
8/9 =
(3
3 if z ∈ 0, 1
3∪1
3, 2
3, 2
3 if z ∈ 2
3, 3
3 ; Lz
9/9 = 1 if z ∈ (0, 1)
we get (51) for t = k/9, k = 4, 5, . . . , 9, and [a, b] = [pa/3, (pa + 1) /3], pa = 0, 1, 2. Recalling that for any t ∈ [0, 1] and z ∈/ (0, 1) we have already defined Ltz = 0, we get (51) for for t = k/9, k = 1, 2, . . . , 9 and [a, b] = [pa/3, pb/3], pa, pb ∈ Z, pa < pb.
Having defined Lt for t = k/9N , k = 1, 2, . . . , 9N , we can define Lt for t from a finer grid, namely for t = k/9N+1, k = 1, 2, . . . , 9N+1, and check that for such t equalities (51) hold for any [a, b] of the form a = pa/3n, b = pb/3n = (pa + 1) /3n, n = N + 1, pa ∈ Z (hence for any [a, b] of the form a = pa/3n, b = pb/3n ≥ (pa + 1) /3n, n = 0, 1, 2, . . . , N + 1, pa, pb ∈ Z).
Indeed, having defined Lt for t = k/9N , k = 1, 2, . . . , 9N and assuming that (51) holds for such t and any [a, b] of the form a = pa/3n, b = pb/3n ≥ (pa + 1) /3n, n = 0, 1, 2, . . . , N , pa, pb ∈ Z, let us define
Lz
t=

                 
                 
1
3 L39tz if t = 1
9N+1 , 2
9N+1 , . . . , 9N
9N+1 ,
Lz
1/9 + 1
3 L1−3z
9t−1 if t = 9N +1
9N+1 , 9N +2
9N+1 , . . . , 2·9N
9N+1 ,
Lz
2/9 + 1
3 L93tz−2 if t = 2·9N +1
9N+1 , 2·9N +2
9N+1 , . . . , 3·9N
9N+1 ,
Lz
3/9 + 1
3 L3z−1
9t−3 if t = 3·9N +1
9N+1 , 3·9N +2
9N+1 , . . . , 4·9N
9N+1 ,
Lz
4/9 + 1
3 L2−3z
9t−4 if t = 4·9N +1
9N+1 , 4·9N +2
9N+1 , . . . , 5·9N
9N+1 ,
Lz
5/9 + 1
3 L3z−1
9t−5 if t = 5·9N +1
9N+1 , 5·9N +2
9N+1 , . . . , 6·9N
9N+1 ,
Lz
6/9 + 1
3 L3z−2
9t−6 if t = 6·9N +1
9N+1 , 6·9N +2
9N+1 , . . . , 7·9N
9N+1 ,
Lz
7/9 + 1
3 L3−3z
9t−7 if t = 7·9N +1
9N+1 , 7·9N +2
9N+1 , . . . , 8·9N
9N+1 ,
Lz
8/9 + 1
3 L3z−2
9t−8 if t = 8·9N +1
9N+1 , 8·9N +2
9N+1 , . . . , 9·9N
9N+1 .
(53)
Now, for t = k/9N+1, k = 1, 2, . . . , 9N , using (3), substituting u = 9s, using the induction assumption and then substituting w = 3z we obtain that for any [a, b] of the form a = pa/3n, b = pb/3n ≥ (pa + 1) /3n, n = N + 1, pa, pb ∈ Z,
Zt
0
1[a,b] (xs) ds =
Zt
0
1[a,b]
1
3 x9s ds = 1
9
Z 9t
0
1[3a,3b] (xu) du
=1
9
Z 3b
3a
Lw
9tdw = 1
3
Zb
a
L3z
9t dz,
hence, setting Ltz = 1
3 L39tz for t = k/9N+1, k = 1, 2, . . . , 9N , we get (51).
Also, taking for example t = k/9N+1, k = 4 · 9N + 1, 4 · 9N + 2, . . . , 5 · 9N , and assuming that (51) holds for u = m/9N+1, m = 1, 2, . . . , 4 · 9N , and any [a, b] of the form a = pa/3n, b = pb/3n ≥ (pa + 1) /3n, n = N + 1, pa, pb ∈ Z, we obtain
Zt
0
1[a,b] (xs) ds =
Z 4/9
0
1[a,b] (xs) ds +
Zt
4/9
1[a,b] (xs) ds
=
Zb
a
Lz
4/9dz +
Zt
4/9
1[a,b] (xs) ds. (54)
18

Further, using (7) and substituting u = 5 − 9s and then using (12) and substituting v = 1 − u we get
Zt
4/9
1[a,b] (xs) ds =
Zt
4/9
1[a,b]
1
3+1
3 x5−9s ds = − 1
9
Z 5−9t
1
1[a,b]
1
3+1
3 xu du
=1
9
Z1
5−9t
1[3a−1,3b−1] (xu) du = 1
9
Z1
5−9t
1[3a−1,3b−1] (1 − x1−u) du
=1
9
Z 9t−4
0
1[2−3b,2−3a] (xv) dv = 1
9
Z 2−3a
2−3b
Lw
9t−4dw = 1
3
Zb
a
L2−3z
9t−4 dz. (55)
We also used the induction assumption and the substitution 2 − 3z = w. From (54) and (55) we get for t = k/9N+1, k = 4 · 9N + 1, 4 · 9N + 2, . . . , 5 · 9N , and any [a, b] of the form a = pa/3n, b = pb/3n ≥ (pa + 1) /3n, n = N + 1, pa, pb ∈ Z,
Zt
0
1[a,b] (xs) ds =
Zb
a
Lz
4/9 + 1
3 L2−3z
9t−4 dz,
hence, setting Ltz = Lz
4/9 + 1
3 L2−3z
9t−4 for t = k/9N+1, k = 4 · 9N + 1, 4 · 9N + 2, . . . , 5 · 9N , we get (51). In a similar way, using (4)-(8), (10)-(11) and (12), we can prove that (53) defines recursively Lt for all remaining t of the form t = k/9N+1, k = 1, 2, . . . , 9N+1, such that for such t equalities (51) hold for any [a, b] of the form a = pa/3n, b = pb/3n ≥ (pa + 1) /3n, n = 0, 1, 2, . . . , N + 1, pa, pb ∈ Z. As a result, proceeding with N to +∞ we obtain Lt defined for any t of the form k/9N , k = 1, 2, . . . , 9N , -
N ∈ N, and such that (51) holds for any [a, b] of the form a = pa/3n, b = pb/3n ≥ (pa + 1) /3n, n ∈ N, pa, pb ∈ Z.
Moreover, using values of Ltz for t = 1/9, 2/9, . . . , 8/9, 1, and the fact that Ltz = 0 for any t ∈ [0, 1]
and z ∈/ (0, 1) we infer inductively that Ltz defined by (53) attains values from the interval [0, 1].
□
3.1 Local time of the x-component of the Peano curve expressed as the weak limit of normalized numbers of interval crossings
Recall the number nz,c(x, [0, t]) of crossing by x the interval [z − c/2, z + c/2] on the time interval [0, t]. In this section we will prove that the local time L of the x-component of the Peano curve may be expressed as the weak limit of normalized numbers of interval crossings by x. This means that there exists some φ : (0, 1) → [0, +∞) such that limc→0+ φ(c) = 0 and for any continuous g : R → R
cl→i 0m+
Z
R
φ(c)nz,c(x, [0, t]) g(z)dz =
Z
R
Lz
t g(z)dz. (56)
Recall that (50) states that
Z
R
g(z)Lz
t dz =
Zt
0
g (xs) ds.
Now we will find φ : (0, 1) → [0, +∞) such that limc→0+ φ(c) = 0 and
cl→i 0m+
Z
R
φ(c)nz,c(x, [0, t]) g(z)dz =
Zt
0
g (xs) ds. (57)
Indeed, using (49) for p > 0 we get
C −1
p
Z
R
3−np · nz,3−np(x, [0, t]) g(z)dz →
Zt
0
g(xs)ds,
19

where Cp := 3⌊− log3 p⌋p 1 − 3
4 3⌊− log3 p⌋p . Noticing that Cp = C3kp for any integer k, we get
C −1
3−n p
Z
R
3−np · nz,3−np(x, [0, t]) g(z)dz →
Zt
0
g(xs)ds.
Thus (57) is satisfied with
φ(c) := C−1
c ·c= 1
3⌊− log3 c⌋ 1 − 3
4 3⌊− log3 c⌋c .
The graph of the function φ(c) (blue) together with graphs of 3c and 4c is presented on the figure below.
Figure 5: The graph of the function φ(c) (blue) together with graphs of 3c and 4c.
Using (50) and (57) we finally get (56).
Acknowledgments
The work of PLZ, DH and FJM was supported by a University Staff Doctoral Programme: Building Capacity in Applied Mathematics (USDP-BCAM) grant, ID 32, under the Newton’s Operational Development Assistance Fund. The grant is funded by the UK Department for Business, Energy and Industrial Strategy and the Department of Higher Education and Training, South Africa and delivered by the British Council. For further information, please visit https://www.ukri.org/whatwe-do/browse-our-areas-of-investment-a-
nd-support/newton-fund/. The research of RMŁ was supported by grant no. 2022/47/B/ST1/02114 Non-random equivalent characterizations of sample boundedness of National Science Centre, Poland.
References
[BDŁ23] W. Bednorz, P. Das and R. M. Łochowski, Local times of deterministic paths and self-similar processes with stationary increments as normalized numbers of interval crossings, Preprint arXiv:2312.05570 (2024), to appear in AIHP Probability and Statistics.
20

[CLJPT81] R. V. Chacon, Y. Le Jan, E. Perkins, and S. J. Taylor, Generalised arc length for Brownian motion and Lévy processes, Zeitschrift für Wahrscheinlichkeitstheorie und Verwandte Gebiete 57 (1981), no. 2, 197–211.
[DŁMP23] P. Das, R. M. Łochowski, T. Matsuda, and N. Perkowski, Level crossings of fractional brownian motion, Preprint arXiv:2308.08274 (2023), to appear in Annals of Probability.
[HW75] G. H. Hardy and E. M. Wright, An Introduction to the Theory of Numbers, 4th ed., Oxford University Press, 1975.
[Lem83] M. Lemieux, On the quadratic variation of semimartingales, Master Thesis, The University of British Columbia, https://circle.ubc.ca/handle/2429/23964 (1983).
[ŁOPS21] R. M. Łochowski, J. Obłój, D. J. Prömel, and P. Siorpaes, Local times and tanaka–meyer formulae for càdlàg paths, Electron. J. Probab. 26 (2021), 1–29.
[Sag94] H. Sagan, Space-Filling curves, Universitext, vol. 293, Springer-Verlag, Berlin, 1994.
21

---

## Processing Information

- **Processing Library:** Zotero PDFWorker
- **Processing Date:** 2026-02-10T18:14:03.277Z
- **Text Length:** 39352 characters
- **Success:** Text extraction completed
- **PDF Library Used:** Zotero PDFWorker
- **Pages Processed:** 21 of 21
